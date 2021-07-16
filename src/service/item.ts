/*
 * @Description:商品service
 * @Author: huajian
 * @LastEditors: huajian
 * @LastEditTime: 2021-07-14 16:28:38
 */
import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { Item, Status } from '../model/item';
import { Sku } from '../interface';

@Provide()
export class ItemService {
  @InjectEntityModel(Item)
  itemModel: Repository<Item>;

  /**
   *  获取首页商品
   * @param options
   * @returns
   */
  async getHomeList() {
    const itemRows = await this.itemModel.find({
      where: { status: Status.ON },
      order: {
        topLevel: 'ASC',
        id: 'DESC',
      },
    });
    return itemRows;
  }

  async getDetail(id: number) {
    const itemRow = this.itemModel.findOne({ id });
    if (!itemRow) {
      throw '商品id错误';
    }
    return itemRow;
  }

  /**
   * 获取所有sku配置
   * @returns
   */
  getDefaultSku(): Sku[] {
    const sku: Sku[] = [
      {
        name: '尺寸',
        isMultiple: false,
        values: [
          { id: 11, name: '6寸', price: -8 * 100 },
          { id: 12, name: '8寸', price: 0, isDefault: true },
          { id: 13, name: '10寸', price: 8 * 100 },
          { id: 14, name: '12寸', price: 24 * 100 },
          { id: 15, name: '14寸', price: 32 * 100 },
          { id: 16, name: '16寸', price: 64 * 100 },
        ],
      },
      {
        name: '奶油',
        isMultiple: true, //是否倍数
        values: [
          { id: 21, name: '植物奶油', num: 1, isDefault: true },
          { id: 22, name: '动物奶油', num: 1.2 },
        ],
      },
    ];
    return JSON.parse(JSON.stringify(sku));
  }

  /**
   * 通过id查找sku
   * @param ids skuids
   * @returns
   */
  getSkuByIds(ids: number[]) {
    const skus = this.getDefaultSku();
    skus.forEach(sku => {
      sku.values.forEach((val, key) => {
        if (!ids.includes(val.id)) {
          sku.values.splice(key, 1);
        }
      });
    });
    return skus;
  }
}
