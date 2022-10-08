import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Entity({ name: 'tb_postagem' })
export class Postagem {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(255)
    @Column({ nullable: false, length: 255 })
    @ApiProperty()
    imagem: string

    @IsNotEmpty()
    @MaxLength(255)
    @Column({ nullable: false, length: 255 })
    @ApiProperty()
    titulo: string

    @IsNotEmpty()
    @MaxLength(255)
    @Column({ nullable: false, length: 255 })
    @ApiProperty()
    descricao: string

    @ApiProperty({ type: () => Categoria })
    @ManyToOne(() => Categoria, (categoria) => categoria.postagem, {
        onDelete: 'CASCADE'
    })
    categoria: Categoria

     @ApiProperty({ type: () => Usuario })
    @ManyToOne(type => Usuario, usuario => usuario.postagens, {
        //AO EXCLUIR UM USUARIO TODAS POSTAGENS DEVEM SER EXCLUIDAS 
        onDelete: "CASCADE"
    })
    usuario: Usuario
}