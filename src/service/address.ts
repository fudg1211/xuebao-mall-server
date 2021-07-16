/*
 * @Description: 地址services
 * @Author: huajian
 * @LastEditors: huajian
 * @LastEditTime: 2021-07-14 16:57:23
 */
import { Provide, App } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { Address } from '../model/address';

@Provide()
export class AddressService {
  @App()
  app;

  @InjectEntityModel(Address)
  addressModel: Repository<Address>;

  /**
   * 获取默认提货点
   * @returns
   */
  async save(address: Address) {
    return this.addressModel.save(address);
  }

  /**
   * 通过id获取单条数据
   * @param id
   * @returns
   */
  async getById(id: number) {
    const addressRow = await this.addressModel.findOne({ id });
    if (!addressRow) {
      throw '提货点错误';
    }
    return addressRow;
  }
}
