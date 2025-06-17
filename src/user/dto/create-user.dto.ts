import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'John'})
    @IsString()
    name?: string
    @ApiProperty({example: '123981723'})
    @IsNumber()
    telegram_id?: number
    @ApiProperty( {example: '8932784723894729'})
    @IsString()
    phone?: string
}
