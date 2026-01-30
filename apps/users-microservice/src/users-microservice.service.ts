import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/users.entity';
import { RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, UpdateUserDto } from '@my/common';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class UsersMicroserviceService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly configService: ConfigService,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async create(createUserDto: CreateUserDto) {
    const exitsingUser = await this.userRepository.findOne({ 
      where: { email: createUserDto.email } 
    });
    if (exitsingUser) {
      throw new RpcException('User already exists');
    }
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  async findAll() {
    return this.userRepository.find();
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new RpcException('User not found');
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new RpcException('User not found');
    }
    return this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new RpcException('User not found');
    }
    return this.userRepository.delete(id);
  }
}
