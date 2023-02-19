import { Module } from "@nestjs/common";

import {SequelizeModule} from "@nestjs/sequelize"
import { UserModule } from "./users/users.module";

import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";

import { RolesService } from './roles/roles.service';
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";


 @Module({
controllers: [] ,
 providers: [RolesService],
imports: [
  ConfigModule.forRoot({
envFilePath:`.${process.env.NOE_ENV}.env`
  }),

  SequelizeModule.forRoot({
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        models: [User, Role, UserRoles],
        autoLoadModels: true,
      }),
    UserModule,

],

 })
export class AppModule {}



//======MongoDB
// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';

// @Module({
//   imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
// })

//====







// import { config } from "process";
// import {UserConroller} from './users/user.controller'
// import { UserSrvice } from "./users/user.service";

// dialect: 'mysql',
// host: 'localhost',
// port: 3306,
// username: 'root',
// password: 'root',
// database: 'test',


// database: 'nest-course',
// models: [],
// autoLoadModels: true,
