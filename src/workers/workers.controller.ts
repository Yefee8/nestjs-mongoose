import { Body, Controller, Delete, Get, Post, Put, Query } from "@nestjs/common";
import { resourceUsage } from "process";
import { CreateWorkerDto } from './etc/create-worker.dto';
import { ChangeWorkerDto } from './etc/change-worker.dto';
import { WorkersService } from './workers.service';
import { DeleteWorkerDto } from "./etc/delete-worker.dto";

@Controller('workers')
export class WorkersController {
  constructor(private readonly workersService: WorkersService) {
  }

  @Get()
  getWorker(@Query() createWorkerDto: CreateWorkerDto): Promise<string> {
    return this.workersService.getWorkers(createWorkerDto);
  }

  @Post()
  createWorker(@Body() createWorkerDto: CreateWorkerDto): string {
    return this.workersService.createWorkers(createWorkerDto);
  }

  @Put()
  changeWorker(@Body() changeWorkerDto: ChangeWorkerDto): Promise<string> {
    return this.workersService.changeWorkers(changeWorkerDto);
  }

  @Delete()
  deleteWorker(@Body() deleteWorkerDto: DeleteWorkerDto) {
    return this.workersService.removeWorker(deleteWorkerDto);
  }
}
