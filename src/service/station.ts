/*
 * @Description: 提货点services
 * @Author: huajian
 * @LastEditors: huajian
 * @LastEditTime: 2021-07-14 12:09:45
 */
import { Provide, App } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { Station } from '../model/station';

@Provide()
export class StationService {
  @App()
  app;

  @InjectEntityModel(Station)
  stationModel: Repository<Station>;

  /**
   * 获取默认提货点
   * @returns
   */
  async save(station: Station) {
    return this.stationModel.save(station);
  }
}
