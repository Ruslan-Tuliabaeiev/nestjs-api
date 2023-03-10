import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { Column, DataType, Table, Model, BelongsToMany } from "sequelize-typescript";

// import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model"; 
interface UserCreationAttrs {
    email: string;
    password: string;
}


@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
   
 @ApiProperty({example: '1',description: 'Unique identifier' })
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({example: 'user@mail.ua', description: 'email' })
    @Column({type: DataType.STRING, allowNull: false })
    email: string;

    @ApiProperty({example: '123456', description: 'pasword' })
    @Column({type: DataType.STRING, defaultValue: false})
    password: string;

    @ApiProperty({example: 'true', description: 'banned' })
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: 'brecke', description: 'banned' })
    @Column({type: DataType.BOOLEAN, defaultValue: true})
    banReason: string;

   @Column({type: 'enum' , enum: UserRoles})
    roles: UserRoles


}


