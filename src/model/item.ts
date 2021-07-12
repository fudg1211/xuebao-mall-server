/*
 * @Description: 商品model
 * @Author: huajian
 * @LastEditors: huajian
 * @LastEditTime: 2021-07-12 12:45:02
 */
import { EntityModel } from '@midwayjs/orm';
import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum Status {
  ON = 1,
  OFF = 2,
}

export enum TopLevel {
  FIRST = 1,
  SECOND = 2,
  THIRD = 3,
  LAST = 9,
}

@EntityModel()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 64,
    comment: '名称',
  })
  name: string;

  @Column({
    comment: '原价',
  })
  price: number;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ON,
    comment: '状态',
  })
  status: number;

  @Column({
    type: 'enum',
    enum: TopLevel,
    default: TopLevel.LAST,
    comment: '排序层级',
  })
  topLevel: number;

  @Column({
    comment: '已经卖出多少',
    default: 0,
  })
  soldCount: number;

  @Column({
    comment: '商品主图地址',
  })
  image: string;

  @Column({
    type: 'simple-array',
    comment: '商品描述',
  })
  descImageList: string[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
