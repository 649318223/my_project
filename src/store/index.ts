//将pinia 模块化 实现统一管理
import { createPinia } from 'pinia'
//引入pinia的数据持久化插件
import persist from 'pinia-plugin-persistedstate'
//将pinia分离出来 再导入到main.js
const pinia = createPinia()
//设置数据持久化
pinia.use(persist)

export default pinia

//将pinia统一管理  将各个模块的pinia在此处统一导出
export * from './modules/tagsView'