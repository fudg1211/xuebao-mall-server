/*
 * @Description:提货点controller
 * @Author: huajian
 * @LastEditors: huajian
 * @LastEditTime: 2021-07-14 12:10:30
 */
import { Controller, Post, Provide, Inject, Body } from '@midwayjs/decorator';
import { StationService } from '../service/station';

@Provide()
@Controller('/mall/station')
export class StationController {
  @Inject()
  stationService: StationService;

  @Post('/save/')
  async save(@Body() data: string) {
    const stationRow = await this.stationService.save(JSON.parse(data));
    return stationRow;
  }
}
