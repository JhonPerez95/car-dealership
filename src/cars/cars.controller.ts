import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common'
import { CarsService } from './cars.service'
import { CreateCarDTO, UpdateCarDTO } from './dto'

@Controller('cars')
// @UsePipes(ValidationPipe)
export class CarsController {
  constructor(
    // Inyeccion dependecia
    private readonly carsService: CarsService
  ) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll()
  }

  @Get('/:id')
  getCarById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.carsService.findOne(id)
  }

  @Post()
  create(@Body() createCartDTO: CreateCarDTO) {
    return this.carsService.create(createCartDTO)
  }

  @Patch(':id')
  update(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() updateCarDTO: UpdateCarDTO
  ) {
    return this.carsService.update(id, updateCarDTO)
  }

  @Delete(':id')
  delete(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.carsService.deleted(id)
  }
}
