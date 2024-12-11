<template>
  <div class="sidebar">
    <el-scrollbar>
      <!-- @open="handleOpen" @close="handleClose" -->
      <el-menu :collapse="state.isCollapse" router :default-active="state.defaultActive" class="el-menu-vertical-demo">
        <template v-for="(item, index) in menuList">
          <el-sub-menu :index="item.path+''" v-if="item.children && item.children.length > 0" :key="item.path">
            <template #title>
              <el-icon><icon-menu /></el-icon>
              <span>{{ item?.meta?.title }}</span>
            </template>
            <template v-for="child in item.children" :key="child.path">
              <el-menu-item :index="child.path">{{ child?.meta?.title }}</el-menu-item>
            </template>
          </el-sub-menu>
          <template v-else>
            <el-menu-item :index="item.path">
              <el-icon><icon-menu /></el-icon>
              <span>{{ item?.meta?.title }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { Document, Menu as IconMenu, Location, Setting } from "@element-plus/icons-vue";
import { computed, reactive,onMounted } from "vue";
import { useRouter,useRoute,onBeforeRouteUpdate } from "vue-router";
const router = useRouter();
const route = useRoute();
// 变量
const state = reactive({
  defaultActive: "/home",
  isCollapse: false,
});

//计算属性
const menuList = computed(() => {
  const routerList = router.options.routes.filter((item) => !item?.meta?.isHide)[0].children;
  return routerList;
});
// 页面加载时
onMounted(() => {
	state.defaultActive = route.path;
});
// 路由更新时
onBeforeRouteUpdate(to => {
	state.defaultActive = to.path
});
//方法
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
.sidebar {
  .el-menu--horizontal {
    --el-menu-horizontal-height: 100px;
  }
  ::v-deep .el-scrollbar__view,
  .el-menu {
    height: 100%;
  }
  width: 200px;
  height: 100%;
  background-color: white;
}
</style>
