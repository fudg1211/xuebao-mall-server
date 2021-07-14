/*
 * @Description:商品controller
 * @Author: huajian
 * @LastEditors: huajian
 * @LastEditTime: 2021-07-14 11:12:22
 */
import { Controller, Get, Provide } from '@midwayjs/decorator';

@Provide()
@Controller('/mall/item')
export class itemController {
  @Get('/getList')
  async getList() {
    return 'Hello Midwayjs111!';
  }
}
