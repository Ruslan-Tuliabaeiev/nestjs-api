import { Body, Controller, Get, Param, Post } from "@nestjs/common/decorators";
import { CreateRoleDto } from "src/users/dto/create-role.dto";
import { RolesService } from "./roles.service";



@Controller('roles')
export class RolesControler {
constructor(private rolSercice: RolesService) {}

@Post()
create(@Body() dto: CreateRoleDto) {
    return this.rolSercice.createRole(dto)
}

@Get('/:value')
getByValue(@Param('value') value: string) {
    return this.rolSercice.getRoleByValue(value)
}




}

