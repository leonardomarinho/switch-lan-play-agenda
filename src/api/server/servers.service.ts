
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Server } from './server.schema';

@Injectable()
export class ServersService {
  constructor(@InjectModel(Server.name) private serverModel: Model<Server>) {}

  async findAllActive(): Promise<Partial<Server[]>> {
    return this.serverModel.find({ active: true }).exec();
  }
}
