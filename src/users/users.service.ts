import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service'; // 追加

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {} // 追加

  create(createUserDto: CreateUserDto) {
    // return 'This action adds a new user';
    return this.prisma.user.create({ data: createUserDto });
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    // return `This action updates a #${id} user`;
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    })
  }
  remove(id: number) {
    // return `This action removes a #${id} user`;
    return this.prisma.user.delete({ where: { id } })
  }
}