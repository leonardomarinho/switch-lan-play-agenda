import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Slot } from '../slot/slot.schema';

@Schema()
export class Game extends Document {
  @Prop({ required: true })
  title: String;
  
  @Prop({ required: true })
  slots?: Slot[] 

  @Prop({ defaults: true })
  active: Boolean;
}

export const GameSchema = SchemaFactory.createForClass(Game);
