import { Injectable, NotFoundException } from '@nestjs/common'
import { v4 as uuid } from 'uuid'
import { Car } from './interfaces/car.interface'
import { UpdateCarDTO, CreateCarDTO } from './dto'

@Injectable()
export class CarsService {
  private cars: Car[] = []

  findAll() {
    return this.cars
  }

  findOne(id: string) {
    const car = this.cars.find((car) => car.id === id)
    if (!car) throw new NotFoundException(`Car with id ${id} not found`)

    return car
  }

  create(createCarDTO: CreateCarDTO) {
    const car: Car = {
      id: uuid(),
      ...createCarDTO,
    }
    this.cars.push(car)
    return car
  }

  update(id: string, updateCarDTO: UpdateCarDTO) {
    let carDB = this.findOne(id)
    this.cars = this.cars.map((item) => {
      if (item.id === id) {
        carDB = { ...carDB, ...updateCarDTO, id }
        return carDB
      }
      return item
    })
    return carDB
  }

  deleted(id: string) {
    this.findOne(id)

    this.cars = this.cars.filter((item) => item.id !== id)
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars
  }
}
