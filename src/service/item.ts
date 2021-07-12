/*
 * @Description:商品service
 * @Author: huajian
 * @LastEditors: huajian
 * @LastEditTime: 2021-07-12 12:03:54
 */
import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { Item, Status } from '../model/item';

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
}
