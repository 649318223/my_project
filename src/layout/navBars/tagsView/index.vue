<template>
  <div class="tags-view">
    <el-scrollbar>
      <div class="scrollbar-flex-content">
        <div v-for="item in state.tagsViewList" :key="item.path" :class="{ 'scrollbar-content-item': true, active: tagsActive === item.path }">
          {{ item?.meta?.title }}
          <el-icon class="close" @click="closeTag(item.path)"><Close /></el-icon>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
interface state {
  tagsViewList: any[];
}
import { Close } from "@element-plus/icons-vue";
import { watch, reactive, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

//data
const state = reactive<state>({
  tagsViewList: [],
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

//methods
//初始化数据
const initData = () => {
  const defauleRouteList = ["/home"];
  const routerList = router.options.routes;
  const defauleRoute = defauleTag(routerList, defauleRouteList);
  if (defauleRoute) {
    state.tagsViewList.push(defauleRoute);
  }
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
//初始化赋默认值
initData();
</script>

<style lang="scss" scoped>
.scrollbar-flex-content {
  display: flex;
  padding: 0 16px;
  border-bottom: 1px solid var(--mz-border-color-light);
  padding-top: 5px;
  .scrollbar-content-item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    padding: 0 16px;
    text-align: center;
    .close {
      margin-left: 4px;
      cursor: pointer;
      &:hover {
        color: beige;
        background-color: var(--el-color-primary);
        border-radius: 50%;
      }
    }
  }
  .active {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background: var(--el-color-primary-light-9);
    color: var(--el-color-primary);
  }
}
</style>
