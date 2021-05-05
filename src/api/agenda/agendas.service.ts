
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Agenda } from './agenda.schema';
import { Slot } from '../slot/slot.schema';
import { ServersService } from '../server/servers.service';
import { GamesService } from '../game/games.service';
import * as moment from 'moment';
import { IncrementServerDTO } from './agenda.dto';

@Injectable()
export class AgendasService {
  constructor(@InjectModel(Agenda.name) private agendaModel: Model<Agenda>,
              //@InjectModel(Slot.name) private slotModel: Model<Slot>,
              private readonly gamesService: GamesService,
              private readonly serversService: ServersService) {}

  async findById(id: string): Promise<Agenda>{
    return this.agendaModel.findById(id).exec();
  }

  async findOrCreateByDate(desiredDate: string): Promise<Agenda> {
    const dateInUtc = moment(desiredDate).utc().startOf('day').format("YYYY-MM-DD")
    const agenda = await this.agendaModel.findOne({ date: dateInUtc }).exec();
    return agenda ? agenda : await this.createAgendaForDate(dateInUtc);
  }

  async createAgendaForDate(desiredDate: string): Promise<Agenda> {    
    const [allGames, allServers] = await Promise.all([
      this.gamesService.findAllActive(),
      this.serversService.findAllActive()
    ]);
    
    allServers.map(server => server.total = 0);
    
    const allSlots = []
    for(let hour = 0; hour < 24; hour++){
      const newSlot = new Slot()
      newSlot.hour = hour;
      newSlot.servers = allServers;
      allSlots.push(newSlot);
    }
    
    allGames.map(game => game.slots = allSlots);

    const newAgenda = new this.agendaModel();
    newAgenda.date = desiredDate;
    newAgenda.games = allGames;
    return newAgenda.save();
  }

  async incrementServerCount(id: string, incrementServerDTO: IncrementServerDTO){
    const agenda = await this.agendaModel.findById(id)
    console.log("Aqui: ", agenda)
  }
}
