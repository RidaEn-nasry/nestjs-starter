import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from '@app.controller';
import { AppService } from '@app.service';
import { CharactersModule } from '@characters/characters.module';

import { config, validationSchema, enviroments } from '@config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      ignoreEnvFile: false,
      load: [config],
      isGlobal: true,
      validationSchema,
    }),
    CharactersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
