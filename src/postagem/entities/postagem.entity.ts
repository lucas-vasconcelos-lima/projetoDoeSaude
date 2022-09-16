import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNotEmptyObject, MaxLength } from "class-validator";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";

@Entity({name: 'tb_postagem'})
export class Postagem{

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length: 255})
    @ApiProperty()
    titulo: string

    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length: 255})
    @ApiProperty()
    imagem: string

    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length: 255})
    @ApiProperty()
    descricao: string

    @ManyToOne(() => Categoria, (categoria) => categoria.postagem,{

        onDelete: 'CASCADE'

    })
    @ApiProperty({type: () => Categoria})
    categoria: Categoria

}