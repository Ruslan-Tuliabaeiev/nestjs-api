 import { Controller, Get, Post, Body, } from "@nestjs/common";
import { UserService } from "./users.service";
import {CreateUserDto } from "./dto/create_user.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger/dist";
import { User } from "./users.model";
import { ApiTags } from "@nestjs/swagger/dist/decorators/api-use-tags.decorator";


@ApiTags('users ')
@Controller('users')
export class UsrerController {

constructor(private userService: UserService) {}

@ApiOperation({summary: 'Create user'})
@ApiResponse({status: 200, type: User})


@Post() 
create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto)
}


@ApiOperation({summary: 'Get user'})
@ApiResponse({status: 200, type: [User]})
@Get() 
getAll() {
    return this.userService.getAllUsers()
} 

}



