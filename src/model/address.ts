/*
 * @Description:地址model
 * @Author: huajian
 * @LastEditors: huajian
 * @LastEditTime: 2021-07-14 11:52:08
 */
import { EntityModel } from '@midwayjs/orm';
import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum IsDefault {
  NO = 0,
  Yes = 1,
}

@EntityModel()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 16,
    comment: '收货省份',
  })
  province: string;

  @Column({
    length: 16,
    comment: '收货城市',
  })
  city: string;

  @Column({
    length: 16,
    comment: '收货区域',
  })
  district: string;

  @Column({
    length: 16,
    nullable: true,
    comment: '收货街道',
  })
  street: string;

  @Column({
    comment: '收货详细地址',
  })
  detail: string;

  @Column({
    type: 'bigint',
    comment: '收货人电话',
  })
  tel: number;

  @Column({
    length: 16,
    comment: '收货姓名',
  })
  userName: string;

  @Column({
    type: 'enum',
    enum: IsDefault,
    default: IsDefault.NO,
    comment: '是否默认',
  })
  isDefault: boolean;

  @Column({
    type: 'double',
    comment: '收货人地址经度',
  })
  addressLongitude: number;

  @Column({
    type: 'double',
    comment: '收货人地址纬度',
  })
  addressLatitude: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
