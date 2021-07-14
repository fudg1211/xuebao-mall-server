/*
 * @Description:公用interface
 * @Author: huajian
 * @LastEditors: huajian
 * @LastEditTime: 2021-07-14 11:15:01
 */
export interface IUserOptions {
  uid: string;
}

export interface IGetUserResponse {
  success: boolean;
  message: string;
  data: IUserOptions;
}
