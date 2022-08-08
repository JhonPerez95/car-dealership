import { Injectable, NotFoundException } from '@nestjs/common'
import { v4 as uuid } from 'uuid'
import { CreateBrandDto, UpdateBrandDto } from './dto/'
import { Brand } from './entities/brand.entity'

@Injectable()
export class BrandsService {
  private brands: Brand[] = []
  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      ...createBrandDto,
      createdAt: new Date().getTime(),
    }

    this.brands.push(brand)
    return brand
  }

  findAll() {
    return this.brands
  }

  findOne(id: string) {
    const brand = this.brands.find((item) => item.id === id)
    if (!brand) throw new NotFoundException(`Brand with id ${id} not found`)

    return brand
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDb = this.findOne(id)

    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        brandDb = {
          ...brandDb,
          ...updateBrandDto,
          updatedAt: new Date().getTime(),
        }

        return brandDb
      }
      return brand
    })
    return brandDb
  }

  remove(id: string) {
    this.findOne(id)
    this.brands = this.brands.filter((item) => item.id !== id)
  }

  fillCarsWithSeedData(brands: Brand[]) {
    this.brands = brands
  }
}
