import { Controller, Get } from '@nestjs/common';
import { UsersMicroserviceService } from './users-microservice.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserPattern, CreateUserDto, UpdateUserDto } from '@my/common';
@Controller()
export class UsersMicroserviceController {
  constructor(private readonly usersMicroserviceService: UsersMicroserviceService) {
    console.log('UserPattern in Microservice:', UserPattern);
  }

  // @Get()
  // getHello(): string {
  //   return this.usersMicroserviceService.getHello();
  // }

  // @MessagePattern({ cmd: UserPattern.FIND_ALL })
  // findAll() {
  //   return this.usersMicroserviceService.findAll();
  // }

  // DEBUG: Using hardcoded string instead of UserPattern.CREATE
  @MessagePattern({ cmd: 'create' })
  async create(@Payload() createUserDto: CreateUserDto) {
    console.log('Microservice received CREATE request:', createUserDto);
    try {
      const result = await this.usersMicroserviceService.create(createUserDto);
      console.log('Create successful:', result);
      return result;
    } catch (error) {
      console.error('Error in create:', error.message, error.stack);
      throw error;
    }
  }

  @MessagePattern({ cmd: UserPattern.FIND_ONE })
  findOne(@Payload() id: number) {
    return this.usersMicroserviceService.findOne(id);
  }

  @MessagePattern({ cmd: UserPattern.UPDATE })
  update(@Payload() { id, updateUserDto }: { id: number; updateUserDto: UpdateUserDto }) {
    return this.usersMicroserviceService.update(id, updateUserDto);
  }

  @MessagePattern({ cmd: UserPattern.REMOVE })
  remove(@Payload() id: number) {
    return this.usersMicroserviceService.remove(id);
  }
}
