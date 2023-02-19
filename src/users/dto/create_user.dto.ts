import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";




export class CreateUserDto {
    @ApiProperty({example: 'user@mail.com', description: 'email' })
    readonly email: string;

    @ApiProperty({example: '123456', description: 'pasword' })
    readonly pasword: string;
}