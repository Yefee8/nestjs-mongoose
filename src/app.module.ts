import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkersModule } from './workers/workers.module';
@Module({
    imports: [WorkersModule,
      MongooseModule.forRoot('mongodb://localhost/workerfollower'),
    ],
    
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
