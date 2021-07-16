/*
 * @Description:商品service
 * @Author: huajian
 * @LastEditors: huajian
 * @LastEditTime: 2021-07-14 17:32:12
 */
import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { Order } from '../model/order';
import { Item } from '../model/item';
import { Station } from '../model/station';
import { Address } from '../model/address';
import { Sku } from '../interface';

@Provide()
export class OrderService {
  @InjectEntityModel(Item)
  orderModel: Repository<Order>;

  save(
    itemRow: Item,
    stationRow: Station,
    addressRow: Address,
    amount: number,
    skus: Sku
  ) {}

  /**
   * 计算商品价格
   * @param skus skus
   * @param itemRow  商品结果
   * @param buyCount 购买数量
   */
  computeAmount(skus: Sku[], itemRow: Item, buyCount: number) {
    let amount = itemRow.price;
    skus.forEach(sku => {
      if (sku.isMultiple) {
        amount += itemRow.price * (sku.values[0].num - 1);
      } else {
        amount += sku.values[0].price;
      }
    });
    return amount * buyCount;
  }
}
