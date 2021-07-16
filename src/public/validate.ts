/*
 * @Description:
 * @Author: huajian
 * @LastEditors: huajian
 * @LastEditTime: 2021-07-14 19:57:58
 */
// import Schema from 'validate';

export default function Validate(schema) {
  return function (target, name) {
    const oldFun = target[name];
    target[name] = function (...a) {
      return oldFun.bind(target, a);
    };
    return target;
  };
}
