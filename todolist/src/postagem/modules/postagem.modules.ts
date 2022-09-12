import { TypeOrmModule } from "@nestjs/typeorm";
import { Type } from "class-transformer";
import { Module } from "@nestjs/common";
import { Postagem } from "../entities/postagem.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem])],
    providers: [],
    controllers: [],
    exports: [TypeOrmModule]

})
export class PostagemModule{}