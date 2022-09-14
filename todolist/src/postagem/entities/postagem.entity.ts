import { IsNotEmpty, IsNotEmptyObject, MaxLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_postagem'})
export class Postagem{

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length: 255})
    titulo: string

    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length: 255})
    imagem: string

    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length: 255})
    descricao: string

}