import { IsString } from 'class-validator'

export class CreateCarDTO {
  @IsString()
  readonly brand: string

  @IsString()
  readonly model: string

  // constructor(
  //   readonly brand: string,
  //   readonly model: string,
  // ) {}
}
