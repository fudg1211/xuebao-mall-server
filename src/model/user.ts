/*
 * @Description: 用户model
 * @Author: huajian
 * @LastEditors: huajian
 * @LastEditTime: 2021-07-12 15:54:06
 */
import { EntityModel } from '@midwayjs/orm';
import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum Status {
  DEFAULT = 1,
  LOCKED = 2,
}

export enum IsHasConpon {
  NO = 1,
  YES = 0,
}

export enum IsDel {
  NO = 0,
  YES = 1,
}

export enum Sex {
  /** 未知 */
  UNKNOW = 0,
  /** 女 */
  GIRL = 2,
  /** 难 */
  BOY = 1,
}

@EntityModel()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    comment: 'wx openid',
  })
  openid: string;

  @Column({
    comment: 'wx unionid',
  })
  unionid: string;

  @Column({
    length: 64,
    comment: '名称',
  })
  name: string;

  @Column({
    default:
      'https://img.hicdn.cn/fed/images/20210712/aa686c784d55b10a15f00db955b296fe_128x128.png',
    comment: '头像',
  })
  avatar: string;

  @Column({
    type: 'enum',
    enum: Sex,
    comment: '性别',
  })
  sex: number;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.DEFAULT,
    comment: '状态',
  })
  status: number;

  @Column({
    type: 'enum',
    default: IsHasConpon.NO,
    enum: IsHasConpon,
    comment: '是否有优惠券',
  })
  isHasConpon: boolean;

  @Column({
    type: 'enum',
    enum: IsDel,
    default: IsDel.NO,
    comment: '是否删除',
  })
  isDel: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
