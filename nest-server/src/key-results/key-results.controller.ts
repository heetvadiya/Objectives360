import {Body, Controller, Delete, Get, Param, Patch, Post, Query} from '@nestjs/common';
import {KeyResultsService} from "./key-results.service";
import {CreateKeyResultDto, UpdateKeyResultDto} from "./key-results.dto";

@Controller('key-results')
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
  patch(@Param('id') id: string, @Body() keyResultToUpdate: UpdateKeyResultDto) {
    return this.keyResultsService.patch(id, keyResultToUpdate);
  }

  @Delete(":id")
  delete(@Param('id') id: string) {
    return this.keyResultsService.delete(id);
  }

}
