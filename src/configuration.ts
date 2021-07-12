import { Configuration } from '@midwayjs/decorator';
import * as orm from '@midwayjs/orm';
import { join } from 'path';

@Configuration({
  imports: [
    orm, // 加载 orm 组件
  ],
  importConfigs: [
    join(__dirname, './config'), // 加载配置文件（eggjs 下不需要）
  ],
})
export class ContainerConfiguratin {}
