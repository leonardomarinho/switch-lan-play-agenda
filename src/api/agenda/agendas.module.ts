
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgendasController } from './agendas.controller';
import { AgendasService } from './agendas.service';
import { ServersService } from '../server/servers.service';
import { GamesService } from '../game/games.service';
import { GamesModule } from '../game/games.module';
import { ServersModule } from '../server/servers.module';
import { Agenda, AgendaSchema } from './agenda.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Agenda.name , schema: AgendaSchema }]),
            GamesModule,
            ServersModule],
  controllers: [AgendasController],
  providers: [AgendasService],
})
export class AgendasModule {}
