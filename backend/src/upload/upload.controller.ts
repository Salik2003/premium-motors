import { Controller, Post, UseInterceptors, UploadedFile, BadRequestException, Delete, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
    constructor(private readonly uploadService: UploadService) { }

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        if (!file) {
            throw new BadRequestException('File is required');
        }
        return this.uploadService.uploadFile(file);
    }

    @Delete()
    deleteFile(@Body('path') path: string) {
        if (!path) {
            throw new BadRequestException('Path is required');
        }
        return this.uploadService.deleteFile(path);
    }
}
