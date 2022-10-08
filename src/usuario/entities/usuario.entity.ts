import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Endereco } from "../../endereco/entities/endereco.entity";
import { Postagem } from "../../postagem/entities/postagem.entity";

@Entity({name: 'tb_usuario'})
export class Usuario{
    @PrimaryColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(150)
    @Column({nullable: false, length: 150, type: "varchar"})
    nome: string

    @IsNotEmpty()
    @MaxLength(11)
    @Column({nullable: false, length: 11, type: "varchar"})
    cpf: string

    @MaxLength(14)
    @Column({nullable: true, length: 14, type: "varchar"})
    telefone: string

    @MaxLength(50)
    @IsNotEmpty()
    @Column({nullable: false, length: 50, type: "varchar"})
    senha: string

    @IsNotEmpty()
    @Column({nullable: false, type: "date"})
    dt_nasc: Date

    @OneToMany(() => Postagem, (postagem) => postagem.usuario, {

        onDelete: 'CASCADE'

    })

    @ManyToOne(() => Endereco, (endereco) => endereco.usuario, {
        onDelete: 'CASCADE'
    })

    @ApiProperty({type: () => Endereco})
    endereco: Endereco

    @ApiProperty({type: () => Postagem})    
    postagem: Postagem[]
}

