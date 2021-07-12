/*
 * @Description: 提货点model
 * @Author: huajian
 * @LastEditors: huajian
 * @LastEditTime: 2021-07-11 17:22:25
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
    comment: '收货省份',
  })
  provinceName: string;

  @Column({
    length: 16,
    comment: '收货城市',
  })
  cityName: string;

  @Column({
    length: 16,
    comment: '收货区域',
  })
  countyName: string;

  @Column({
    comment: '收货详细地址',
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
    comment: '收货人地址经度',
  })
  longitude: number;

  @Column({
    type: 'double',
    comment: '收货人地址纬度',
  })
  latitude: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
