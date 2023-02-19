




import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { Column, DataType, Table, Model, BelongsToMany, ForeignKey } from "sequelize-typescript";

import { User } from "src/users/users.model";
import { Role } from "./roles.model";
// import {UserRoles}





@Table({tableName: 'user-roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles> {
   

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

@ForeignKey(() => Role)
    @Column({type: DataType.INTEGER})
  roleId: string;

  @ForeignKey(() => Role)
  @Column({type: DataType.INTEGER})
  userId: string;




}




