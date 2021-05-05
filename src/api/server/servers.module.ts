
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServersService } from './servers.service';
import { Server, ServerSchema } from './server.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Server.name , schema: ServerSchema }])],
  providers: [ServersService],
  exports: [ServersService]
})
export class ServersModule {}
