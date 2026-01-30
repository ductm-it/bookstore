import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from '@my/common';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    // @Get()
    // findAll() {
    //     return this.userService.findAll();
    // }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        console.log('Controller received createUserDto:', createUserDto, 'type:', typeof createUserDto);
        return this.userService.create(createUserDto);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.userService.remove(id);
    }
}
