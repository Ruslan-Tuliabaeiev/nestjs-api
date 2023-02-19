import { Module } from "@nestjs/common/decorators";
import { SequelizeModule } from "@nestjs/sequelize"
import { Role } from "src/roles/roles.model";
import { RolesModule } from "src/roles/roles.module";
// import { RolesService } from "src/roles/roles.service";
import { UserRoles } from "src/roles/user-roles.model";
import {UsrerController} from './user.controller';
import {UserService} from './users.service';
import { User } from "./users.model";



@Module({ 
    controllers: [UsrerController],
    providers: [UserService],
    imports: [ 
        SequelizeModule.forFeature([User]),
        // SequelizeModule.forFeature([User, Role, UserRoles ]),
        // RolesModule
    ],
exports: [
//  RolesService,
    UserService
]


})




export class UserModule {}




// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserEntity } from './entities/user.entity';
// import { UsersResolver } from './users.resolver';
// import { UserService } from './users.service';

// @Module({
//   imports: [TypeOrmModule.forFeature([UserEntity])],
//   providers: [UserService, UsersResolver],
// })
// export class UsersModule {}