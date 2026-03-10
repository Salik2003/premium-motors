import { Injectable, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UploadService {
    private supabase: SupabaseClient;

    constructor(private configService: ConfigService) {
        const url = this.configService.get<string>('SUPABASE_URL')!;
        const key = this.configService.get<string>('SUPABASE_SERVICE_ROLE_KEY')!;
        this.supabase = createClient(url, key);
    }

    async uploadFile(file: Express.Multer.File, folder: string = 'cars') {
        if (!file) {
            throw new BadRequestException('No file provided');
        }

        const fileExt = file.originalname.split('.').pop();
        const fileName = `${uuidv4()}.${fileExt}`;
        const filePath = `${folder}/${fileName}`;

        const { data, error } = await this.supabase.storage
            .from('media') // Make sure this bucket exists in Supabase
            .upload(filePath, file.buffer, {
                contentType: file.mimetype,
                upsert: false,
            });

        if (error) throw error;

        const { data: { publicUrl } } = this.supabase.storage
            .from('media')
            .getPublicUrl(filePath);

        return {
            url: publicUrl,
            path: filePath,
            fileName: fileName
        };
    }

    async deleteFile(path: string) {
        const { error } = await this.supabase.storage
            .from('media')
            .remove([path]);

        if (error) throw error;
        return { success: true };
    }
}
