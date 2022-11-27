import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        example: '2020',
        description: 'Esse é o ano de lançamento do filme'
    })
    @Column({ default: 0 })
    year: number;

    @ApiProperty({
        example: '7.2',
        description: 'Essa é a nota com a qual a crítica avaliou filme'
    })
    @Column('decimal', { default: 0 })
    note: number;

    @ApiProperty({
        example: 'Velozes e Furiosos 5',
        description: 'Esse é o título do filme'
    })
    @Column('text', { default: '' })
    title: string;
}