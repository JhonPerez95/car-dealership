import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina la data adiconal , no la toma en cuenta
      forbidNonWhitelisted: true, // Arroja un error de las propiedades adicionales recibidas
    })
  )
  await app.listen(3000)
}
bootstrap()
