import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize"; 
import { RolesService } from "src/roles/roles.service";
import { CreateUserDto } from "./dto/create_user.dto";
import { User } from "./users.model";




@Injectable()
export class UserService {

 constructor(@InjectModel(User) private userRepository: typeof User, private rolService: RolesService) {}


async createUser(dto: CreateUserDto) {
const user = await this.userRepository.create(dto);
const role = await this.rolService.getRoleByValue("USER")
await user.$set('roles', [role.id])
return user;
}


async getAllUsers() {
    const users = await this.userRepository.findAll({include: {all: true}})
    return users;

}

async getUserByEmail(email: string) {
const user = await this.userRepository.findOne({where: {email}, include: {all: true}})
return user;
}


}

