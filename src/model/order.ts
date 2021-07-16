/*
 * @Description: 订单model
 * @Author: huajian
 * @LastEditors: huajian
 * @LastEditTime: 2021-07-14 17:33:04
 */
import { EntityModel } from '@midwayjs/orm';
import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsHasConpon } from './user';

export enum IsUsedConpon {
  NO = 0,
  yes = 1,
}

export enum Status {
  /** 待支付 */
  WAITFORPAY = 1,
  /** 已经支付，已经分发，这个在用户端不会展示 */
  DISTRIBUTED = 2,
  /** 订单已经下发，待收货 */
  SHIPPED = 4,
  /** 已经收货 待评价 */
  RECEIVED = 6,
}

export enum Urgent {
  /** 不加急 */
  NO = 0,
  /** 加急 */
  YES = 1,
}

@EntityModel()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 64,
    comment: '订单编号',
  })
  orderNo: string;

  @Column({
    comment: '用户id',
  })
  userId: number;

  @Column({
    type: 'enum',
    enum: IsHasConpon,
    default: IsUsedConpon.NO,
    comment: '是否试用了优惠券',
  })
  isUsedConpon: boolean;

  @Column({
    comment: '试用的优惠券总额',
  })
  usedCouponAmount: number;

  @Column({
    comment: '购买数量',
  })
  buyCount: number;

  @Column({
    comment: '实际支付金额',
  })
  realPayAmount: number;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.WAITFORPAY,
    comment: '支付状态',
  })
  status: number;

  @Column({
    comment: '备注',
  })
  remark: string;

  @Column({
    type: 'enum',
    enum: Urgent,
    default: Urgent.NO,
    comment: '是否加急',
  })
  urgent: boolean;

  @Column({
    comment: '商品名称',
  })
  itemName: string;

  @Column({
    comment: '商品id',
  })
  itemId: number;

  @Column({
    type: 'text',
    comment: '商品数据',
  })
  itemRow: string;

  @Column({
    comment: '收货地址id',
  })
  addressId: number;

  @Column({
    type: 'text',
    comment: '收货地址数据',
  })
  addressRow: string;

  @Column({
    comment: '提货点id',
  })
  stationId: number;

  @Column({
    type: 'text',
    comment: '提货点数据',
  })
  stationRow: string;

  @Column({
    type: 'text',
    comment: 'sku数据，这个是代码配置的',
  })
  skuRow: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
