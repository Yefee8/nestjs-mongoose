import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type workerDocument = worker & Document;

@Schema()
export class worker {
  @Prop()
  name: string;

  @Prop()
  pass: string;
}

export const WorkerSchema = SchemaFactory.createForClass(worker)