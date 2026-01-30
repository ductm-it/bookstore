import { IsEmail, IsString, IsNotEmpty, IsOptional, IsBoolean } from "class-validator";

export class UpdateUserDto {
    @IsOptional()
    name: string;

    @IsOptional()
    @IsEmail({}, { message: 'Email is invalid' })
    email: string;

    @IsOptional()
    password?: string;

    @IsOptional()
    isActive?: boolean;

    @IsOptional()
    role?: string;
}