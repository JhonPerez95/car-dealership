import { Injectable } from '@nestjs/common'
import { BrandsService } from 'src/brands/brands.service'
import { CarsService } from 'src/cars/cars.service'
import { BRANDS_SEED, CARS_SEED } from './data'

@Injectable()
export class SeedService {
  constructor(
    //inyection dependecy
    private readonly cardService: CarsService,
    private readonly brandService: BrandsService
  ) {}

  populateSeed() {
    this.cardService.fillCarsWithSeedData(CARS_SEED)
    this.brandService.fillCarsWithSeedData(BRANDS_SEED)
    return 'Seed executed successfully!'
  }
}
