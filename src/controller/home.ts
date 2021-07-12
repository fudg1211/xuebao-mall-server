/*
 * @Description:首页controller
 * @Author: huajian
 * @LastEditors: huajian
 * @LastEditTime: 2021-07-12 14:43:31
 */
import { Controller, Post, Provide, Inject } from '@midwayjs/decorator';
import { ItemService } from '../service/item';

@Provide()
@Controller('/mall/home')
export class HomeController {
  @Inject()
  itemService: ItemService;

  @Post('/getItemList/')
  async getItemList() {
    return this.itemService.getHomeList();
  }
}
