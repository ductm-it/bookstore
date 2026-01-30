import { IsEmail, IsString, IsNotEmpty, IsOptional, IsBoolean } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({ message: 'Name is required' })
    name: string;

    @IsEmail({}, { message: 'Email is invalid' })
    email: string;

    @IsNotEmpty({ message: 'Password is required' })
    password: string;

    @IsOptional()
    isActive?: boolean;

    @IsOptional()
    role?: string;
}