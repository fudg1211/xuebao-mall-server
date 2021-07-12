/*
 * @Description:
 * @Author: huajian
 * @LastEditors: huajian
 * @LastEditTime: 2021-07-12 20:58:25
 */
import { Provide } from '@midwayjs/decorator';
import { IWebMiddleware, IMidwayWebNext } from '@midwayjs/web';
import { Context } from 'egg';
import { UserService } from '../service/user';

@Provide()
export class AuthMiddleware implements IWebMiddleware {
  resolve() {
    return async (ctx: Context, next: IMidwayWebNext) => {
      if (ctx.request.path.indexOf('/na/') > -1) {
        await next();
        return;
      }

      const token = ctx.request.body.token;
      const userService = await ctx.requestContext.getAsync<UserService>(
        'userService'
      );
      const userId = await userService.decryptToken(token);
      if (!token || !userId) {
        throw '没有登录或者登陆过期！';
      } else {
        console.log(1111111);
        await next();
      }
    };
  }
}
