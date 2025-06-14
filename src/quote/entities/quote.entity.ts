import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Quote {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    quote: string;
}
