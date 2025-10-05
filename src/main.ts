import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpStatus } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('DevNestApi')
    .setDescription('API for DevNest operation')
    .addTag(
      'Auth',
      'Opearation about authentication including login and register'
    )
    .addTag('App', 'Opearation about app')
    .addServer('http://localhost:3000', 'Local server')
    .addServer('https://devnestapi.com', 'Production server')
    .addGlobalResponse({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      description: 'Internal Server Error'
    })
    .addBearerAuth()
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory());

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
