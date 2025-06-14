import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'John'})
    @IsString()
    name: string
    @ApiProperty({example: '123981723'})
    @IsString()
    telegram_id: string
    @ApiProperty( {example: '8932784723894729'})
    @IsString()
    phone?: string
}
