import {Module} from '@nestjs/common';
import {PrismaService} from './prisma/prisma.service';
import {ObjectivesModule} from './objectives/objectives.module';

@Module({
  providers: [PrismaService],
  imports: [ObjectivesModule],
})
export class AppModule {
}
