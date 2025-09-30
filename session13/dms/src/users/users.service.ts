import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  async create(user: Partial<User>): Promise<User> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    user.password = await bcrypt.hash(user.password, 10);
    return this.usersRepo.save(user);
  }

  findAll(): Promise<User[]> {
    return this.usersRepo.find();
  }

  findOne(id: string): Promise<User | null>  {
    return this.usersRepo.findOneBy({ id });
  }

  async update(id: string, user: Partial<User>): Promise<User | null> {
    if (user.password) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      user.password = await bcrypt.hash(user.password, 10);
    }
    await this.usersRepo.update(id, user);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepo.delete(id);
  }
}
