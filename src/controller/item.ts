/*
 * @Description:
 * @Author: huajian
 * @LastEditors: huajian
 * @LastEditTime: 2021-07-11 10:45:06
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
