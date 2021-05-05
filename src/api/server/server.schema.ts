import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Server extends Document {
  @Prop({ required: true })
  name: String;

  @Prop({ required: false })
  total?: Number;
  
  @Prop({ defaults: true })
  active: Boolean;
}

export const ServerSchema = SchemaFactory.createForClass(Server);
