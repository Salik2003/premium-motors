import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto/car.dto';

@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService) { }

    @Get()
    findAll(@Query() query: any) {
        return this.carsService.findAll(query);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.carsService.findOne(id);
    }

    @Post()
    create(@Body() createCarDto: CreateCarDto) {
        return this.carsService.create(createCarDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
        return this.carsService.update(id, updateCarDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.carsService.remove(id);
    }
}
