/*
 * @Description: 订单model
 * @Author: huajian
 * @LastEditors: huajian
 * @LastEditTime: 2021-07-11 12:22:47
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
    comment: '商品id',
  })
  itemId: number;

  @Column({
    comment: '商品名称',
  })
  itemName: string;

  @Column({
    comment: '商品主图地址',
  })
  itemImage: string;

  @Column({
    type: 'simple-array',
    comment: '商品描述',
  })
  itemDescImageList: string[];

  @Column({
    comment: '已经卖出多少',
  })
  itemSoldCount: number;

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
    length: 16,
    comment: '收货省份',
  })
  addressProvinceName: string;

  @Column({
    length: 16,
    comment: '收货城市',
  })
  addressCityName: string;

  @Column({
    length: 16,
    comment: '收货区域',
  })
  addressCountyName: string;

  @Column({
    comment: '收货详细地址',
  })
  addressDetail: string;

  @Column({
    type: 'bigint',
    comment: '收货人电话',
  })
  addressTel: number;

  @Column({
    length: 16,
    comment: '收货姓名',
  })
  addressUserName: string;

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

  @Column({
    comment: '提货点',
  })
  stationId: number;

  @Column({
    length: 16,
    comment: '提货点省份',
  })
  stationProvinceName: string;

  @Column({
    length: 16,
    comment: '提货点城市',
  })
  stationCityName: string;

  @Column({
    length: 16,
    comment: '提货点区域',
  })
  stationCountyName: string;

  @Column({
    comment: '提货点详细地址',
  })
  stationDetail: string;

  @Column({
    type: 'bigint',
    comment: '提货点电话',
  })
  stationTel: number;

  @Column({
    length: 16,
    comment: '提货点名称',
  })
  stationName: string;

  @Column({
    type: 'double',
    comment: '提货点经度',
  })
  stationLongitude: number;

  @Column({
    type: 'double',
    comment: '提货点纬度',
  })
  stationLatitude: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
