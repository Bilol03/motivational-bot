import { isNotEmpty, IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    telegram_id: string
    @Column()
    phone: string
}
