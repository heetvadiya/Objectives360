import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {ObjectivesService} from "./objectives.service";
import {CreateObjectivesDto, UpdateObjectivesDto} from "./objectives.dto";

@Controller('objectives')
export class ObjectivesController {

  constructor(private readonly objectivesService: ObjectivesService) {
  }

  @Get("/")
  fetchAll() {
    return this.objectivesService.fetchAll();
  }

  @Get(":id")
  fetchWithId(@Param('id') id: string) {
    return this.objectivesService.fetchWithId(id);
  }

  @Post()
  create(@Body() objectiveToCreate: CreateObjectivesDto) {
    return this.objectivesService.create(objectiveToCreate);
  }

  @Patch(":id")
  update(@Param('id') id: string, @Body() objectiveToUpdate: UpdateObjectivesDto) {
    return this.objectivesService.update(id, objectiveToUpdate);
  }

  @Delete(":id")
  delete(@Param('id') id: string) {
    return this.objectivesService.delete(id);
  }

}
