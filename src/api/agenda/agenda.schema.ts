import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Game } from '../game/game.schema';

@Schema()
export class Agenda extends Document {

  @Prop({ required: true })
  date: String;

  @Prop({ required: true })
  games: Game[];
}

export const AgendaSchema = SchemaFactory.createForClass(Agenda);
