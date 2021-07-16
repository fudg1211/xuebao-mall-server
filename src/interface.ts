/*
 * @Description:公用interface
 * @Author: huajian
 * @LastEditors: huajian
 * @LastEditTime: 2021-07-14 16:27:45
 */
export interface IUserOptions {
  uid: string;
}

export interface IGetUserResponse {
  success: boolean;
  message: string;
  data: IUserOptions;
}

export interface SkuVal {
  id: number;
  name: string;
  price?: number; //增加或减少的价格
  num?: number; //倍数
  isDefault?: boolean;
}
export interface Sku {
  name: string;
  isMultiple: boolean;
  values: SkuVal[];
}
