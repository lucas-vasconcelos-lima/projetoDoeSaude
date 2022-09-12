import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity'; 
import { PostagemModule } from './postagem/modules/postagem.modules';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '8846277390.lS',
      database: 'db_projetoDoeSaude',
      entities: [Postagem],
      synchronize: true
    }),
    PostagemModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}