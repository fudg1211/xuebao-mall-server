/*
 * @Description:
 * @Author: huajian
 * @LastEditors: huajian
 * @LastEditTime: 2021-07-11 09:32:54
 */
import { Provide } from '@midwayjs/decorator';
import { IWebMiddleware, IMidwayWebNext } from '@midwayjs/web';
import { Context } from 'egg';

@Provide()
export class ReportMiddleware implements IWebMiddleware {
  resolve() {
    return async (ctx: Context, next: IMidwayWebNext) => {
      // 控制器前执行的逻辑
      // 执行下一个 Web 中间件，最后执行到控制器
      await next();
    };
  }
}
