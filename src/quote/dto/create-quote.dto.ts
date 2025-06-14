import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from 'class-validator';

export class CreateQuoteDto {
    @ApiProperty({example: "title", description: "Title of the quote"})
    @IsString()
    title: string
    @ApiProperty({example: "quote", description: "Author of the quote"})
    @IsString()
    quote: string
}
