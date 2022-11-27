import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Documentação com Swagger - MKS CRUD')
    .setDescription(
      'Documentação com muitos detalhes, cada endpoint e estrutura de entidades presentes na aplicação responsável feita por Aenã Martinelli. Crud feito em Nest js.',
    )
    .setVersion('1.0')
    .addTag('users')
    .addTag('movies')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
