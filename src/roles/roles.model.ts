import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { Column, DataType, Table, Model, BelongsToMany } from "sequelize-typescript";

import { User } from "src/users/users.model";
 import {UserRoles} from './user-roles.model'


interface RoleCreationAttrs {
    value: string;
    description: string;
}


@Table({tableName: 'users'})
export class Role extends Model<Role, RoleCreationAttrs> {
   
    @ApiProperty({example: '1',description: 'Unique identifier' })
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({example: 'ADMIN', description: 'Role user' })
    @Column({type: DataType.STRING, allowNull: false })
    value: string;

    @ApiProperty({example: 'Admin', description: 'Role description' })
    @Column({type: DataType.STRING, allowNull: false })
    description: string;
    @BelongsToMany(() => User, () => UserRoles)
    users: User[]

}


