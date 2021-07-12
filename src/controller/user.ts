/*
 * @Description:首页controller
 * @Author: huajian
 * @LastEditors: huajian
 * @LastEditTime: 2021-07-12 14:46:31
 */
import { Controller, Post, Provide, Inject, Body } from '@midwayjs/decorator';
import { UserService } from '../service/user';

@Provide()
@Controller('/mall/user')
export class UserController {
  @Inject()
  userService: UserService;

  @Post('/reg/')
  async reg(@Body() code: string) {
    return this.userService.reg(code);
  }
}
