/*
 * @Description: token验证 如果是/na/路径 不需要验证
 * @Author: huajian
 * @LastEditors: huajian
 * @LastEditTime: 2021-07-14 11:09:16
 */
import { Provide, App } from '@midwayjs/decorator';
import { IWebMiddleware, IMidwayWebNext } from '@midwayjs/web';
import { Context } from 'egg';
import { UserService } from '../service/user';

@Provide()
export class AuthMiddleware implements IWebMiddleware {
  @App()
  app;

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
        this.app.userId = userId;
        await next();
      }
    };
  }
}
