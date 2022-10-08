import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { Categoria } from './categoria/entities/categoria.entity';
import { CategoriaModule } from './categoria/modules/categoria.module';
import { Endereco } from './endereco/entities/endereco.entity';
import { EnderecoModule } from './endereco/modules/endereco.module';
import { Postagem } from './postagem/entities/postagem.entity'; 
import { PostagemModule } from './postagem/modules/postagem.modules';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'MMJ210491',
      database: 'db_projetodoesaude',
      entities: [Postagem, Categoria, Endereco],
      synchronize: true
    }),

    /*
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,  
      logging: false,
      dropSchema: false,
      ssl: {
        rejectUnauthorized: false
      },
      autoLoadEntities: true,
      synchronize: true
    }),
    */ 
    PostagemModule,
    CategoriaModule,
    EnderecoModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
