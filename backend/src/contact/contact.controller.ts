import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactMessageDto } from './dto/contact-message.dto';

@Controller('contact')
export class ContactController {
    constructor(private readonly contactService: ContactService) { }

    @Post()
    create(@Body() createContactMessageDto: CreateContactMessageDto) {
        return this.contactService.create(createContactMessageDto);
    }

    @Get()
    findAll() {
        return this.contactService.findAll();
    }

    @Patch(':id/read')
    markAsRead(@Param('id') id: string) {
        return this.contactService.markAsRead(id);
    }
}
