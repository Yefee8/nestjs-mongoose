import { Injectable } from "@nestjs/common";
import { worker, workerDocument } from "../schemas/worker-schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ChangeWorkerDto } from "./etc/change-worker.dto";
import { CreateWorkerDto } from "./etc/create-worker.dto";
import { DeleteWorkerDto } from "./etc/delete-worker.dto";

@Injectable()
export class WorkersService {
  constructor(@InjectModel(worker.name) private model: Model<workerDocument>) {
  }

  createWorkers(info) {
    const data = new this.model({
      name: info.email,
      pass: info.password
    });
    data.save();
    return "Account created!";
  }

  async getWorkers(info): Promise<string> {
    const data = await this.model.findOne({ name: info.email }).exec();
    if (data == undefined) {
      return "Böyle bir kullancıı yok.";
    } else {
      if (info.password == data.pass) {
        return (
          "Signed in, \n" +
          "Mail: " +
          data.name +
          "\n" +
          "Password: " +
          data.pass
        );
      } else {
        return "Password is wrong...";
      }
    }
  }

  async changeWorkers(dt: ChangeWorkerDto): Promise<string> {
    const data2 = await this.model.findOne({ name: dt.email }).exec();
    if (data2 == undefined) {
      return "Böyle bir kullancıı yok.";
    } else {
      if (dt.password == data2.pass) {
        const changer = await this.model
          .updateOne({ name: dt.email }, { pass: dt.changedPass })
          .exec();
        return (
          "Update is successful!, \n" +
          "Mail adress(doesn't changed): " +
          dt.email +
          "\n" +
          "Yeni şifre: " +
          dt.changedPass
        );
      } else {
        return "Password is wrong.";
      }
    }
  }

  async removeWorker(dt: DeleteWorkerDto): Promise<string> {
    const data3 = await this.model.findOne({ name: dt.email }).exec();
    if (data3.pass == dt.password) {
      data3.remove();
      return "Worker are removed.";
    } else if (data3 == null) {
      return "There is no such user.";
    } else {
      return "Password is wrong.";
    }
  }
}
