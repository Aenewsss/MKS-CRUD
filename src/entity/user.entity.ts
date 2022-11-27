import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        example: 'Aenã Martinelli',
        description: 'Este campo representa o nome de usuário'
    })
    @Column('text', { unique: true, nullable: false })
    username: string;

    @ApiProperty({
        example: '123456',
        description: 'Este campo representa a senha do usuário'
    })
    @Column('text', { nullable: false })
    password: string;
}