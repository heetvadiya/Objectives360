import {Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class ObjectivesService {

  constructor(private readonly prismaService: PrismaService) {
  }

  fetchAll() {
    return this.prismaService.objectives.findMany();
  }
}
