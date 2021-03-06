import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}

bootstrap().catch((error: Error) =>
  console.error(`
    Following error ocurred when bootstrapping your app: 
    ${error.name},
    ${error.message},
    ${error.stack ?? ''}
  `),
);
