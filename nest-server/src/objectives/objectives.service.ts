import {Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {CreateObjectiveDto, UpdateObjectiveDto} from "./objectives.dto";

@Injectable()
export class ObjectivesService {

  constructor(private readonly prismaService: PrismaService) {
  }

  fetchAll() {
    return this.prismaService.objectives.findMany({
      include: {
        keyResults: true,
      },
    });
  }

  fetchWithId(id: string) {
    return this.prismaService.objectives.findUnique({
      where: {id: id}
    });
  }

  create(newObjective: CreateObjectiveDto) {
    return this.prismaService.objectives.create({
      data: newObjective
    })
  }

  update(id: string, objectiveToUpdate: UpdateObjectiveDto) {
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
