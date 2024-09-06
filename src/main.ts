import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = 3011;
  console.log("listening at port",port);

  await app.listen(port);
}
bootstrap();
