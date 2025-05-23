import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import { env } from 'process';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal : true,
      validationSchema : Joi.object({
        ENV: Joi.string().valid("dev","prod").required(),
        DB_TYPE: Joi.string().valid("postgres").required(),
        DB_HOST: Joi.number().required(),
        DB_PORT: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWOR: Joi.string().required(),
        DB_DATABASE: Joi.string().required(),

      }),

    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: configService.get<string>("DB_TYPE") as "postgres",
        host: configService.get<string>("DB_HOST"),
        port: configService.get<number>("DB_PORT"),
        username: configService.get<string>("DB_USERNAME"),
        password: configService.get<string>("DB_PASSWORD"),
        database: configService.get<string>("DB_DATABASE"),
        entities: [
          Movie,
        ],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    // TypeOrmModule.forRoot({
    //   type : process.env.DB_TYPE as "postgres",
    //   host : process.env.DB_HOST,
    //   port : parseInt("process.env.DB_PORT"),
    //   username : process.env.DB_USERNAME,
    //   password : process.env.DB_PASSWORD,
    //   database : process.env.DB_DATABASE,
    //   entities : [],
    //   synchronize : true,
    // }),
    MovieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
