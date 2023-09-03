import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const corsOptios = {
  origin: ['*'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type, Accept, Authorization',
  credentials: true,
};

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsOptios);
  const globalPrefix = 'api/v1';
  app.setGlobalPrefix(globalPrefix);
  await app.listen(port);
}
bootstrap();
