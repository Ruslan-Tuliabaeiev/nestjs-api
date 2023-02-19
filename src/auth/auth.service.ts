import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { User } from "src/users/users.model"; 
import { CreateUserDto } from "src/users/dto/create_user.dto"; 
import { UserService } from "src/users/users.service";
import { JwtService } from '@nestjs/jwt'
 import * as bcrypt from 'bcryptjs'


@Injectable()
export class AuthService {

constructor(private userService: UserService,
    private jwtService: JwtService) {

}
  
async    login( userDto: CreateUserDto ) {
  
    }
  
 async   registration( userDto: CreateUserDto ) {
     const cndidate = await this.userService.getUserByEmail(userDto.email);
     if (cndidate) {
        throw new HttpException(' Іuch user already exists', HttpStatus.BAD_REQUEST)
     }
     const hashPassword = await bcrypt.hash(userDto.pasword, 5);
     const user = await this.userService.createUser({...userDto, pasword: hashPassword})
return this.generateToken(user)


    }
    
async generateToken(user: User) {
    const payload = {email: user.email, id: user.id,  roles: user.roles}
    return {
        token: this.jwtService.sign(payload)
    }
}



}

