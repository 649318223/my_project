import { defineStore } from "pinia";
import { reactive,ref } from "vue";

//定义store
// defineStore(仓库唯一标识,()=>{...})
export const useTagsViewStore = defineStore(
  "tagsView",
  () => {
    //定义数据
    // const
    let tagsViewList = ref(<any[any]>[]);
    //定义方法
    const setTagsViewList = (arr: any[any]) => {
      tagsViewList.value = arr;
    };
    //返回数据
    return { tagsViewList, setTagsViewList };
  },
  {
    //是否开启数据持久化
    persist:true,
  }
);
