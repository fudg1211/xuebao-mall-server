/*
 * @Description: token验证 如果是/na/路径 不需要验证
 * @Author: huajian
 * @LastEditors: huajian
 * @LastEditTime: 2021-07-14 11:08:39
 */
import { Provide } from '@midwayjs/decorator';
import { IWebMiddleware, IMidwayWebNext } from '@midwayjs/web';
import { Context } from 'egg';

@Provide()
export class ResMiddleware implements IWebMiddleware {
  resolve() {
    return async (ctx: Context, next: IMidwayWebNext) => {
      await next();
      ctx.body = {
        code: 0,
        data: ctx.body,
        message: 'success',
      };
    };
  }
}
