
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Game } from './game.schema';

@Injectable()
export class GamesService {
  constructor(@InjectModel(Game.name) private gameModel: Model<Game>) {}

  async findAllActive(): Promise<Partial<Game[]>> {
    return this.gameModel.find({ active: true }).exec();
  }
}
