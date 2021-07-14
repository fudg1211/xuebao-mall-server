/*
 * @Description:用户services
 * @Author: huajian
 * @LastEditors: huajian
 * @LastEditTime: 2021-07-14 11:51:17
 */
import { Provide, App } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
const jwt = require('jsonwebtoken');
const https = require('https');
import { User } from '../model/user';
import { Station } from '../model/station';

export interface IauthorizationReg {
  /** 昵称*/
  nickName: string;
  /** 头像 */
  avatarUrl: string;
  /** 性别 */
  gender: number;
}

@Provide()
export class UserService {
  @App()
  app;

  @InjectEntityModel(User)
  userModel: Repository<User>;

  @InjectEntityModel(Station)
  stationModel: Repository<Station>;

  async getUser() {}

  /**
   * 通过wx code 登陆
   * 如果登陆失败，进行注册，注意这个时候昵称和头像都不能拿到，需要在下单之前授权补充
   * @param code
   */
  async login(code: string) {
    const res: any = await this.jscode2session(code);
    const userRow = await this.userModel.findOne({
      where: {
        openid: res.openid,
      },
    });
    let userId = undefined;
    if (!userRow) {
      userId = await this.reg(res);
    } else {
      userId = userRow.id;
    }
    const token = this.encryptToken(userId);
    return token;
  }

  /** 解密 */
  async decryptToken(token: string) {
    const userId = await new Promise(resolve => {
      jwt.verify(token, this.app.config.secret, (err, decoded) => {
        if (err) {
          throw '解密失败';
        } else {
          resolve(decoded.id);
        }
      });
    });
    return userId;
  }

  /** 加密 */
  async encryptToken(id) {
    const token = jwt.sign({ id }, this.app.config.secret, {
      expiresIn: 60 * 60 * 24 * 30,
    });
    return token;
  }

  async jscode2session(code: string) {
    const wxConfig = this.app.config.wx;
    const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${wxConfig.appid}&secret=${wxConfig.secret}&js_code=${code}&grant_type=authorization_code`;
    const res = await new Promise(resolve => {
      https.get(url, res => {
        res.on('data', d => {
          const params = JSON.parse(d.toString());
          resolve({
            openid: params.openid,
          });
        });
      });
    });
    return res;
  }

  /**
   * 注册新用户
   * 这边注册没有昵称和头像及性别 需要在下单的时候补充
   */
  async reg(options: any) {
    const user = new User();
    user.id = options.id;
    user.openid = options.openid;
    const userRow = await this.userModel.save(user);
    return userRow.id;
  }

  /**
   * 授权补充
   * @param options
   */
  async authorizationReg(options: IauthorizationReg) {
    await this.userModel.save({
      name: options.nickName,
      avatar: options.avatarUrl,
      sex: options.gender,
      id: 1,
    });
  }

  /**
   * 获取默认提货点
   * @returns
   */
  async getDefaultStation() {
    const userRow = await this.userModel.findOne({
      where: { id: this.app.userId },
    });
    if (!userRow) {
      throw '没有该用户';
    }
    const stationRow = await this.stationModel.findOne({
      where: { id: userRow.defaultStationId },
    });

    return stationRow ? stationRow.city : '';
  }
}
