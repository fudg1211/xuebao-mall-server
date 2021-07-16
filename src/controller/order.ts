/*
 * @Description:商品controller
 * @Author: huajian
 * @LastEditors: huajian
 * @LastEditTime: 2021-07-15 11:57:05
 */
import { Controller, Post, Provide, Body, Inject } from '@midwayjs/decorator';
import Validate from '../public/validate';
import { OrderService } from '../service/order';
import { ItemService } from '../service/item';
import { StationService } from '../service/station';
import { AddressService } from '../service/address';

const getConfirmInfoSchema = {
  itemId: {
    required: true,
    type: Number,
  },
  skuIds: {
    type: Array,
    each: {
      type: Number,
    },
    required: true,
  },
  buyCount: {
    type: Number,
    required: true,
  },
};

console.info(Validate, getConfirmInfoSchema);

interface GetConfirmInfoParams {
  /** 商品id */
  itemId: number;
  /** skuIds */
  skuIds: number[];
  /** 购买数量 */
  buyCount: number;
}

@Provide()
@Controller('/mall/order')
export class orderController {
  @Inject()
  orderService: OrderService;

  @Inject()
  itemService: ItemService;

  @Inject()
  stationService: StationService;

  @Inject()
  addressService: AddressService;

  @Post('/test')
  async test(@Body() data2222: any) {
    return data2222;
  }

  @Post('/save')
  async getDetail(@Body() id: number) {
    const ItemRow = await this.itemService.getDetail(id);
    const skus = await this.itemService.getDefaultSku();
    return { item: ItemRow, skus };
  }

  /**
   * 获取订单确认信息
   * @param itemId 商品id
   * @returns
   */
  @Post('/getConfirmInfo')
  async getConfirmInfo(@Body() data: GetConfirmInfoParams) {
    const ItemRow = await this.itemService.getDetail(data.itemId);
    const skus = this.itemService.getSkuByIds(data.skuIds);
    const amount = this.orderService.computeAmount(
      skus,
      ItemRow,
      data.buyCount
    );
    return { item: ItemRow, skus, amount };
  }

  /**
   * 保存订单
   * @param itemId 商品id
   * @param skuIds  选择的sku
   * @param addressId 地址id
   * @param stationId 提货点id
   * @returns
   */
  async save(
    @Body() itemId: number,
    @Body() skuIds: number[],
    @Body() addressId: number,
    @Body() stationId: number
  ) {
    const ItemRow = await this.itemService.getDetail(itemId);
    const skus = this.itemService.getSkuByIds(skuIds);
    const amount = this.orderService.computeAmount(skus, ItemRow, 1);
    const stationRow = await this.stationService.getById(stationId);
    const addressRow = await this.addressService.getById(addressId);

    return { item: ItemRow, skus, amount, stationRow, addressRow };
  }
}
