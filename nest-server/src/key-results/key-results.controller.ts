import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {KeyResultsService} from "./key-results.service";
import {CreateKeyResultDto, UpdateKeyResultDto} from "./key-results.dto";

@Controller("keyresults")
export class KeyResultsController {

  constructor(private readonly keyResultsService: KeyResultsService) {
  }

  @Get(":id")
  fetchUnique(@Param('id') id: string) {
    return this.keyResultsService.fetchUnique(id);
  }

  @Post("/")
  create(@Body() keyResultsToCreate: CreateKeyResultDto[]) {
    return this.keyResultsService.create(keyResultsToCreate);
  }

  @Patch(":id")
  update(@Param('id') id: string, @Body() keyResultToUpdate: UpdateKeyResultDto) {
    return this.keyResultsService.update(id, keyResultToUpdate);
  }

  @Delete(":id")
  delete(@Param('id') id: string) {
    return this.keyResultsService.delete(id);
  }

}
