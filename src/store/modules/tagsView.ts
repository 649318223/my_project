import { defineStore } from "pinia";
import { reactive } from "vue";

//定义store
// defineStore(仓库唯一标识,()=>{...})
export const useTagsViewStore = defineStore(
  "tagsView",
  () => {
    //定义数据
    let tagsViewList: any[] = reactive([]);
    //定义方法
    const setTagsViewList = (arr: [any]) => {
      tagsViewList = arr;
    };
    //返回数据
    return { tagsViewList, setTagsViewList };
  },
  {
    //是否开启数据持久化
    persist:true,
    // persist: {
    //   key: "user", //存储的key
    //   storage: localStorage, //存储的仓库
    // },
  }
);
