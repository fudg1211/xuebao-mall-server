/*
 * @Description:
 * @Author: huajian
 * @LastEditors: huajian
 * @LastEditTime: 2021-07-12 13:59:43
 */
import { Inject, Controller, Provide } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserService } from '../service/user';

@Provide()
@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;
}
