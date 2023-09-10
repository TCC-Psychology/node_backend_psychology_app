import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  create(client: Prisma.ClientCreateInput) {
    return this.prisma.client.create({
      data: client,
    });
  }

  findAll() {
    return this.prisma.client.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.client.findUnique({
      where: {
        id: id,
      },
    });
  }

  async findOneByUserId(userId: string) {
    return await this.prisma.client.findUnique({
      where: {
        userId: userId,
      },
    });
  }

  async update(id: number, client: Prisma.ClientUpdateInput) {
    return await this.prisma.client.update({
      data: client,
      where: {
        id: id,
      },
    });
  }

  remove(id: number) {
    return this.prisma.client.delete({
      where: {
        id: id,
      },
    });
  }
}
