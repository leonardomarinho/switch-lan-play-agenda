import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { AgendasService } from './agendas.service';
import { Agenda } from './agenda.schema';
import { IncrementServerDTO } from './agenda.dto';

@Controller('agendas')
export class AgendasController {
  constructor(private readonly agendasService: AgendasService) {}

  @Get('/:desiredDate')
  findOrCreateByDate(@Param('desiredDate') desiredDate: string): Promise<Agenda> {
    return this.agendasService.findOrCreateByDate(desiredDate);
  }

  @Patch('/:id')
  incrementServerCount(@Param('id') id: string, @Body() incrementServerDTO: IncrementServerDTO){
    return this.agendasService.incrementServerCount(id, incrementServerDTO);
  }
}
