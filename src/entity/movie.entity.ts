import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: 0 })
    year: number;

    @Column('decimal', { default: 0 })
    note: number;

    @Column('text', { default: '' })
    title: string;
}