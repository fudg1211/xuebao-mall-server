/*
 * @Description: 提货点model
 * @Author: huajian
 * @LastEditors: huajian
 * @LastEditTime: 2021-07-14 11:52:20
 */
import { EntityModel } from '@midwayjs/orm';
import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@EntityModel()
export class Station {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 16,
    comment: '提货点省份',
  })
  province: string;

  @Column({
    length: 16,
    comment: '提货点城市',
  })
  city: string;

  @Column({
    length: 16,
    comment: '提货点区域',
  })
  district: string;

  @Column({
    length: 16,
    nullable: true,
    comment: '街道',
  })
  street: string;

  @Column({
    comment: '提货点详细地址',
  })
  detail: string;

  @Column({
    type: 'bigint',
    comment: '提货点电话',
  })
  tel: number;

  @Column({
    length: 16,
    comment: '提货点名称',
  })
  name: string;

  @Column({
    type: 'double',
    comment: '提货点人地址经度',
  })
  longitude: number;

  @Column({
    type: 'double',
    comment: '提货点人地址纬度',
  })
  latitude: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
