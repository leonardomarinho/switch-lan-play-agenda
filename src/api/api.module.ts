import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { AgendasModule } from './agenda/agendas.module';
import { GamesModule } from './game/games.module';

@Module({
  imports: [HealthModule, GamesModule, AgendasModule],
})
export class ApiModule {}
