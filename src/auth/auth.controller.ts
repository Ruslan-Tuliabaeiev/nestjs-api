import { Controller } from "@nestjs/common/decorators/core/controller.decorator";
import { Post } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { Body } from "@nestjs/common/decorators/http/route-params.decorator";
import { ApiTags } from "@nestjs/swagger"
import { CreateUserDto } from "src/users/dto/create_user.dto";
import { AuthService } from "./auth.service";



@ApiTags('Autorization')

@Controller('auth')
export class AuthController {

constructor (private authSevice: AuthService) {}


@Post('/login')
login(@Body() userDto: CreateUserDto ) {
return this.authSevice.login(userDto)
}
@Post('/registration')
registration(@Body() userDto: CreateUserDto ) {
    return this.authSevice.registration(userDto)
}


}

