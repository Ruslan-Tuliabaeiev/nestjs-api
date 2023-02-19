import { Module } from "@nestjs/common";
import { UserModule } from "src/users/users.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

import { JwtModule } from '@nestjs/jwt'







@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [
        UserModule, 
     JwtModule.register({
           secret: process.env.PRIVATE_KEY || 'SECRET',
           signOptions: {
            expiresIn: "1200h"
           }
        })
    ]
})



export class AuthModule{}



