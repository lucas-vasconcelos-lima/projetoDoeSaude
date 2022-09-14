import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity'; 
import { PostagemModule } from './postagem/modules/postagem.modules';
import { PostagemService } from './postagem/service/postagem.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'gen134679',
      database: 'db_projetodoesaude',
      entities: [Postagem],
      synchronize: true
    }),
    PostagemModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
