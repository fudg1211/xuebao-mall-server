/*
 * @Description:
 * @Author: huajian
 * @LastEditors: huajian
 * @LastEditTime: 2021-07-12 21:03:31
 */
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1625896897604_1243';

  // add your config here
  config.middleware = ['authMiddleware'];

  config.midwayFeature = {
    // true 代表使用 midway logger
    // false 或者为空代表使用 egg-logger
    replaceEggLogger: true,
  };

  /** 微信appid */
  config.wx = {
    appid: 'wx7554733d2b5f0870',
    secret: '19920fde11f8d67ffff820cd152d6c70',
  };

  /** 密钥 */
  config.secret = 'jisudfn@1287&&';

  // config.security = {
  //   csrf: false,
  // };

  config.onerror = {
    all(err, ctx) {
      console.log(err, 'onerror');
      ctx.body = err.message.replace('non-error thrown: ', '');
    },
  };

  return config;
};
export const orm = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  database: 'xuebao-mall',
  username: 'root',
  password: '123456',
  synchronize: true, // 如果第一次使用，不存在表，有同步的需求可以写 true
  logging: false,
};
