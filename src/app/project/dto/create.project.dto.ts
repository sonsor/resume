import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsString} from "class-validator";

export class CreateProjectDto {

    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    title: string

    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    description: string



}