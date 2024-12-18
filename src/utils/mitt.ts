import mitt, { Emitter } from 'mitt';

type Events<T = any> = {
  reload: T;// 刷新
};

const emitter: Emitter<Events> = mitt<Events>();
// 导出
export default emitter;