import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { CreateInvestorLeadDto } from './dto/investor-lead.dto';

@Injectable()
export class InvestorsService {
    private supabase: SupabaseClient;

    constructor(private configService: ConfigService) {
        const url = this.configService.get<string>('SUPABASE_URL')!;
        const key = this.configService.get<string>('SUPABASE_SERVICE_ROLE_KEY')!;
        this.supabase = createClient(url, key);
    }

    async create(createInvestorLeadDto: CreateInvestorLeadDto) {
        const { data, error } = await this.supabase
            .from('investor_leads')
            .insert([createInvestorLeadDto])
            .select()
            .single();

        if (error) throw error;

        // TODO: WhatsApp notification to business owner
        // This can be done via a third-party API or Supabase Edge Function

        return data;
    }

    async findAll() {
        const { data, error } = await this.supabase
            .from('investor_leads')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data;
    }

    async updateStatus(id: string, status: string) {
        const { data, error } = await this.supabase
            .from('investor_leads')
            .update({ status })
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        return data;
    }
}
