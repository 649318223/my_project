<template>
  <div class="tags-view">
    <el-scrollbar>
      <div class="scrollbar-flex-content">
        <div
          v-for="item in state.tagsViewList"
          @contextmenu.prevent="onContextmenu(item, $event)"
          @click="tagsClick(item.path)"
          :key="item.path"
          :class="{ 'scrollbar-content-item': true, active: tagsActive === item.path }"
        >
          <span class="title">{{ item?.meta?.title }}</span>
          <el-icon v-if="!item.meta?.isAffix" class="close" @click.stop="closeTag(item.path)"><Close /></el-icon>
        </div>
      </div>
    </el-scrollbar>
    <Contextmenu :dropdown="state.dropdown" ref="contextmenuRef" @currentContextmenuClick="onCurrentContextmenuClick" />
  </div>
</template>

<script lang="ts" setup>
interface state {
  tagsViewList: any[];
  dropdown: any;
}

import { useTagsViewStore } from "@/store/index.js";
const tagsViewStore = useTagsViewStore();
import mittBus from "@/utils/mitt";
import { Close } from "@element-plus/icons-vue";
import { watch, reactive, computed, defineAsyncComponent, ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const Contextmenu = defineAsyncComponent(() => import("./contextmenu.vue"));
const contextmenuRef = ref();

//data
const state = reactive<state>({
  tagsViewList: [],
  dropdown: { x: "", y: "" },
});

//computed
const tagsActive = computed(() => route.path);

//监听路由变化
watch(
  () => route,
  (newRoute, oldRoute) => {
    if (!oldRoute) return;
    const { path, meta } = newRoute;
    const obj = { path, meta };
    const tagsViewList = state.tagsViewList;
    const pathList = tagsViewList.map((item) => item.path);
    if (!pathList.includes(path) && path !== "/login") {
      tagsViewList.push(obj);
    }
  },
  { deep: true, immediate: true }
);
watchEffect(
  () => {
    const tagsViewList = state.tagsViewList;
    tagsViewStore.setTagsViewList(tagsViewList);
  },
  { flush: "post" }
);

//methods
//标签点击
const onContextmenu = (item: any, e: MouseEvent) => {
  const { clientX, clientY } = e;
  state.dropdown.x = clientX;
  state.dropdown.y = clientY;
  contextmenuRef.value.openContextmenu(item);
};
// 当前项右键菜单点击
const onCurrentContextmenuClick = async (item: any) => {
  switch (item.contextMenuClickId) {
    //刷新
    case 0:
      refreshTag(item.router);
      break;
    case 1:
      closeTag(item.router.path);
      break;
    case 2:
      closeOtherTag(item.router.path);
      break;
    case 3:
      closeAllTag();
      break;
  }
};
//初始化数据
const initData = () => {
  //获取本地存储的tagsViewList
  const localTagsViewList = tagsViewStore.tagsViewList;
  if (localTagsViewList.length) {
    state.tagsViewList = localTagsViewList;
    return;
  }
  //获取默认路由
  const defauleRouteList = ["/home"];
  const routerList = router.options.routes;
  const defauleRoute = defauleTag(routerList, defauleRouteList);
  if (defauleRoute) {
    state.tagsViewList.push(defauleRoute);
  }
  // if (tagsActive.value && tagsActive.value !== "/home") {
  //   const currentRouter = defauleTag(routerList, [tagsActive.value]);
  //   if (currentRouter) {
  //     state.tagsViewList.push(currentRouter);
  //   }
  // }
};
//递归查找默认路由
const defauleTag = (arr: readonly any[], defauleRouteList: Array<any>) => {
  let obj = null;
  const findRoute = (routes: readonly any[]) => {
    for (let item of routes) {
      if (defauleRouteList.includes(item.path)) {
        obj = item;
        return;
      }
      if (item.children && item.children.length) {
        findRoute(item.children);
      }
    }
  };
  findRoute(arr);
  return obj;
};
//点击标签
const tagsClick = (path: string) => {
  router.push(path);
};
//关闭标签
const closeTag = (path: string) => {
  const tagsViewList = state.tagsViewList;
  if (tagsViewList.length === 1) {
    return;
  }
  const index = tagsViewList.findIndex((item) => item.path === path);
  tagsViewList.splice(index, 1);
  router.push(tagsViewList[index - 1].path);
};
//刷新标签
const refreshTag = (currentRouter: any) => {
  router.push(currentRouter.path);
  if (route.path === currentRouter.path) {
    mittBus.emit("reload");
  }
};
//关闭其他标签
const closeOtherTag = (path: string) => {
  const newList = state.tagsViewList.filter((item) => item.path === path || item.meta?.isAffix);
  state.tagsViewList = newList;
};
//关闭所有标签
const closeAllTag = () => {
  const newList = state.tagsViewList.filter((item) => item.meta?.isAffix);
  state.tagsViewList = newList;
  router.push(state.tagsViewList[0].path);
};
//初始化赋默认值
initData();
</script>

<style lang="scss" scoped>
.scrollbar-flex-content {
  display: flex;
  padding: 0 16px;
  border-bottom: 1px solid var(--mz-border-color-light);
  padding-top: 5px;
  .active {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background: var(--el-color-primary-light-9);
    color: var(--el-color-primary);
  }
  .scrollbar-content-item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    padding: 0 16px;
    text-align: center;
    cursor: pointer;
    .close {
      margin-left: 4px;
      cursor: pointer;
      &:hover {
        color: beige;
        background-color: var(--el-color-primary);
        border-radius: 50%;
      }
    }
    &:hover {
      @extend .active;
      color: #000;
    }
  }
}
</style>
