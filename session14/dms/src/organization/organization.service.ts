import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organization } from './entities/organization.entity';

@Injectable()
export class OrganizationsService {
  constructor(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    @InjectRepository(Organization)
    private readonly orgRepo: Repository<Organization>,
  ) {}

  async create(body: any): Promise<Organization> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const org = this.orgRepo.create(body);
    return this.orgRepo.save(org);
  }

  async findAll(): Promise<Organization[]> {
    return this.orgRepo.find();
  }

  async findOne(id: string): Promise<Organization> {
    return this.orgRepo.findOne({ where: { id } });
  }

  async update(id: string, body: any): Promise<Organization> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    await this.orgRepo.update(id, body);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.orgRepo.delete(id);
  }
}
