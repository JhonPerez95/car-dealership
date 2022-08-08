import { IsOptional, IsString, IsUUID } from 'class-validator'

export class UpdateCarDTO {
  @IsString()
  @IsOptional()
  @IsUUID()
  readonly id?: string

  @IsString()
  @IsOptional()
  readonly brand?: string

  @IsString()
  @IsOptional()
  readonly model?: string
}
