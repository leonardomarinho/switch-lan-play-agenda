import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      connectionName: 'mongodb',
      useFactory: async (config: ConfigService) => ({
       uri: config.get('DATABASE_URI'),
       useNewUrlParser: true,
       useUnifiedTopology: true,
      }),
      inject: [ConfigService],
     }),
  ],
})
export class DatabaseModule {}
