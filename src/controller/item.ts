/*
 * @Description:商品controller
 * @Author: huajian
 * @LastEditors: huajian
 * @LastEditTime: 2021-07-14 15:19:04
 */
import { Controller, Post, Provide, Body, Inject } from '@midwayjs/decorator';
import { ItemService } from '../service/item';

@Provide()
@Controller('/mall/item')
export class itemController {
  @Inject()
  itemService: ItemService;

  @Post('/getDetail')
  async getDetail(@Body() id: number) {
    const ItemRow = await this.itemService.getDetail(id);
    const skus = this.itemService.getDefaultSku();
    return { item: ItemRow, skus };
  }
}
