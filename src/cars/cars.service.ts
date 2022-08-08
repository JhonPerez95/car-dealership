import { Injectable, NotFoundException } from '@nestjs/common'
import { v4 as uuid } from 'uuid'
import { Car } from './interfaces/car.interface'

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: uuid(), brand: 'Ford', model: 'Fiesta' },
    { id: uuid(), brand: 'Toyota', model: 'Corolla' },
    { id: uuid(), brand: 'Honda', model: 'Civic' },
  ]

  findAll() {
    return this.cars
  }

  findOne(id: string) {
    const car = this.cars.find((car) => car.id === id)
    if (!car) throw new NotFoundException(`Car with id ${id} not found`)

    return car
  }

  create(car: any) {
    return {
      ok: true,
      method: 'POST',
      car,
    }
  }

  update(id, body) {
    return {
      ok: true,
      method: 'PATCH',
      id,
      body,
    }
  }

  deleted(id) {
    return {
      ok: true,
      method: 'DELETED',
      id,
    }
  }
}
