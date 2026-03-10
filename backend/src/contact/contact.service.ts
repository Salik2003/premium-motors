import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { CreateContactMessageDto } from './dto/contact-message.dto';

@Injectable()
export class ContactService {
    private supabase: SupabaseClient;

    constructor(private configService: ConfigService) {
        const url = this.configService.get<string>('SUPABASE_URL')!;
        const key = this.configService.get<string>('SUPABASE_SERVICE_ROLE_KEY')!;
        this.supabase = createClient(url, key);
    }

    async create(createContactMessageDto: CreateContactMessageDto) {
        const { data, error } = await this.supabase
            .from('contact_messages')
            .insert([createContactMessageDto])
            .select()
            .single();

        if (error) throw error;
        return data;
    }

    async findAll() {
        const { data, error } = await this.supabase
            .from('contact_messages')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data;
    }

    async markAsRead(id: string) {
        const { data, error } = await this.supabase
            .from('contact_messages')
            .update({ is_read: true })
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        return data;
    }
}
