/*
 * @Description:首页controller
 * @Author: huajian
 * @LastEditors: huajian
 * @LastEditTime: 2021-07-13 20:38:12
 */
import { Controller, Post, Provide, Inject } from '@midwayjs/decorator';
import { ItemService } from '../service/item';
import { UserService } from '../service/user';

@Provide()
@Controller('/mall/home')
export class HomeController {
  @Inject()
  itemService: ItemService;

  @Inject()
  userService: UserService;

  @Post('/getItemList/')
  async getItemList() {
    return this.itemService.getHomeList();
  }
}
