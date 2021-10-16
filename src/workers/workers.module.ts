import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkersController } from './workers.controller';
import { WorkersService } from './workers.service';
import {worker, WorkerSchema} from '../schemas/worker-schema' 
@Module({
  imports : [
    MongooseModule.forFeature([{ name: worker.name, schema: WorkerSchema }]),
  ],
  controllers: [WorkersController],
  providers: [WorkersService]
})
export class WorkersModule {}
