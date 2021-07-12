/*
 * @Description: 申诉model
 * @Author: huajian
 * @LastEditors: huajian
 * @LastEditTime: 2021-07-11 17:22:47
 */
import { EntityModel } from '@midwayjs/orm';
import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum Status {
  /** 申请中 */
  APPLIED = 1,
  /** 处理中 */
  DOING = 2,
  /** 结束 */
  END = 3,
}

export enum Type {
  /** 商品和描述不符 */
  descError = 1,
  /** 口感不佳 */
  TasteNotGood = 2,
  /** 包装\蛋糕损坏 */
  PacageIsBad = 3,
  /** 没收到货 */
  NotReceived = 4,
  /** 配件不起 */
  AccessoriesNotReady = 5,
  /** 其他 */
  other = 9,
}

@EntityModel()
export class Complain {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: Type,
    comment: '申述原因类型',
  })
  type: number;

  @Column({
    type: 'text',
    comment: '描述',
  })
  desc: string;

  @Column({
    type: 'simple-array',
    comment: '申述图片',
  })
  imageList: string[];

  @Column({
    type: 'text',
    nullable: true,
    comment: '回复描述',
  })
  replyDesc: string;

  @Column({
    type: 'simple-array',
    nullable: true,
    comment: '回复图片',
  })
  replyImageList: string[];

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.APPLIED,
    comment: '申诉状态',
  })
  status: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
