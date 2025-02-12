import {Module} from '@nestjs/common';
import {PrismaService} from './prisma/prisma.service';
import {ObjectivesModule} from './objectives/objectives.module';
import {KeyResultsModule} from './key-results/key-results.module';

@Module({
  providers: [PrismaService],
  imports: [ObjectivesModule, KeyResultsModule],
})
export class AppModule {
}
