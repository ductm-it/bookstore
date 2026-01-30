import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto, UpdateUserDto, UserPattern } from '@my/common';

@Injectable()
export class UserService implements OnModuleInit {
    constructor(@Inject('USER_SERVICE') private userService: ClientProxy) {
        console.log('UserPattern in Gateway:', UserPattern);
    }

    async onModuleInit() {
        // Connect to the microservice on startup
        await this.userService.connect();
        console.log('Connected to USER_SERVICE microservice');
    }

    // async findAll() {
    //     return this.userService.send(
    //         { cmd: UserPattern.FIND_ALL },
    //         {}
    //     );
    // }

    async create(createUserDto: CreateUserDto) {
        const pattern = { cmd: UserPattern.CREATE };
        console.log('Sending CREATE pattern:', pattern, 'UserPattern.CREATE =', UserPattern.CREATE);
        return this.userService.send(pattern, createUserDto);
    }

    async findOne(id: string) {
        // DEBUG: Using direct string literal instead of UserPattern.FIND_ONE
        const pattern = { cmd: 'findOne' };
        console.log('Sending FIND_ONE pattern:', pattern, 'Hardcoded cmd');
        return this.userService.send(pattern, id);
    }

    async update(id: string, updateUserDto: UpdateUserDto) {
        return this.userService.send(
            { cmd: UserPattern.UPDATE },
            { id, updateUserDto }
        );
    }

    async remove(id: string) {
        return this.userService.send(
            { cmd: UserPattern.REMOVE },
            id
        );
    }
}
