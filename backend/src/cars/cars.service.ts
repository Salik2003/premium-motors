import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { CreateCarDto, UpdateCarDto } from './dto/car.dto';

@Injectable()
export class CarsService {
    private supabase: SupabaseClient;

    constructor(private configService: ConfigService) {
        const url = this.configService.get<string>('SUPABASE_URL')!;
        const key = this.configService.get<string>('SUPABASE_SERVICE_ROLE_KEY')!;
        this.supabase = createClient(url, key);
    }

    async findAll(filters: any) {
        let query = this.supabase.from('cars').select('*');

        if (filters.make) query = query.eq('make', filters.make);
        if (filters.condition) query = query.eq('condition', filters.condition);
        if (filters.city) query = query.eq('city', filters.city);

        // Simple search implementation
        if (filters.search) {
            query = query.ilike('title', `%${filters.search}%`);
        }

        const { data, error } = await query.order('created_at', { ascending: false });

        if (error) throw error;
        return data;
    }

    async findOne(id: string) {
        const { data, error } = await this.supabase
            .from('cars')
            .select('*')
            .eq('id', id)
            .single();

        if (error || !data) throw new NotFoundException('Car not found');

        // Increment view count
        await this.supabase
            .from('cars')
            .update({ view_count: data.view_count + 1 })
            .eq('id', id);

        return data;
    }

    async create(createCarDto: CreateCarDto) {
        const { data, error } = await this.supabase
            .from('cars')
            .insert([createCarDto])
            .select()
            .single();

        if (error) throw error;
        return data;
    }

    async update(id: string, updateCarDto: UpdateCarDto) {
        const { data, error } = await this.supabase
            .from('cars')
            .update(updateCarDto)
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        return data;
    }

    async remove(id: string) {
        const { error } = await this.supabase
            .from('cars')
            .delete()
            .eq('id', id);

        if (error) throw error;
        return { success: true };
    }
}
