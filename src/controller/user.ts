/*
 * @Description:首页controller
 * @Author: huajian
 * @LastEditors: huajian
 * @LastEditTime: 2021-07-12 20:51:32
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
    return await this.userService.reg(code);
  }

  @Post('/na/login/')
  async login(@Body() code: string) {
    const token = await this.userService.login(code);
    return token;
  }
}
