import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { InvestorsService } from './investors.service';
import { CreateInvestorLeadDto } from './dto/investor-lead.dto';

@Controller('investors')
export class InvestorsController {
    constructor(private readonly investorsService: InvestorsService) { }

    @Post()
    create(@Body() createInvestorLeadDto: CreateInvestorLeadDto) {
        return this.investorsService.create(createInvestorLeadDto);
    }

    @Get()
    findAll() {
        return this.investorsService.findAll();
    }

    @Patch(':id/status')
    updateStatus(@Param('id') id: string, @Body('status') status: string) {
        return this.investorsService.updateStatus(id, status);
    }
}
