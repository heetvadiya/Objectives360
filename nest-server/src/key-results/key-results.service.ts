import {Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {CreateKeyResultDto, UpdateKeyResultDto} from "./key-results.dto";

@Injectable()
export class KeyResultsService {
  constructor(private readonly prismaService: PrismaService) {
  }

  fetchUnique(id: string) {
    return this.prismaService.keyResults.findUnique({
      where: {id: id},
    });
  }

  create(keyResults: CreateKeyResultDto[]) {
    return this.prismaService.keyResults.createMany({data: keyResults});
  }

  delete(id: string) {
    return this.prismaService.keyResults.delete({
      where: {
        id: id
      }
    });
  }

  update(id: string, keyResult: UpdateKeyResultDto) {
    return this.prismaService.keyResults.update({
      where: {
        id: id
      },
      data: {
        title: keyResult.title,
        initialValue: keyResult.initialValue,
        targetValue: keyResult.targetValue,
        currentValue: keyResult.currentValue,
        metric: keyResult.metric,
      }
    })
  }
}
