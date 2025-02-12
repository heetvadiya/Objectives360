import {Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {CreateObjectivesDto, UpdateObjectivesDto} from "./objectives.dto";

@Injectable()
export class ObjectivesService {

  constructor(private readonly prismaService: PrismaService) {
  }

  fetchAll() {
    return this.prismaService.objectives.findMany();
  }

  fetchWithId(id: string) {
    return this.prismaService.objectives.findUnique({
      where: {id: id}
    });
  }

  create(newObjective: CreateObjectivesDto) {
    return this.prismaService.objectives.create({
      data: newObjective
    })
  }

  update(id: string, objectiveToUpdate: UpdateObjectivesDto) {
    return this.prismaService.objectives.update({
      where: {id: id},
      data: {objectiveTitle: objectiveToUpdate.objectiveTitle}
    })
  }

  delete(id: string) {
    return this.prismaService.objectives.delete({
      where: {id: id}
    })
  }
}
