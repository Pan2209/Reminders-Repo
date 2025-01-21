import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const documentOptions = new DocumentBuilder()
  .setTitle('REST API')
  .setDescription('REST API description')
  .setVersion('1.0.0')
  .build();
const document = SwaggerModule.createDocument(app,documentOptions);
  SwaggerModule.setup('api',app,document);
  await app.listen(3000);
}
bootstrap();
