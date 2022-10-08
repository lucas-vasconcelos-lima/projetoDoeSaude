import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_endereco'}) 
export class Endereco{
    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(8)
    @Column({nullable: false, type: "varchar", length: 8})
    cep: string
    
    @IsNotEmpty()
    @Column({nullable: false, type: "varchar", length: 255})
    logradouro: string
    
    
    @IsNotEmpty()
    @Column({nullable: false, type: "varchar", length: 255})
    cidade: string
    
    
    @IsNotEmpty()
    @Column({nullable: false, type: "varchar", length: 255})
    bairro: string
    

    @IsNotEmpty()
    @Column({ nullable: false, length:5})
    numero: string    
}



