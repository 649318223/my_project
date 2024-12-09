<template>
  <div class="sidebar">
    <el-scrollbar>
      <el-menu router default-active="/home" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <template v-for="item in menuList">
          <el-sub-menu :index="item.path" v-if="item.children && item.children.length > 0" :key="item.path">
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
import { computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

//计算属性
const menuList = computed(() => {
  const routerList = router.options.routes.filter((item) => !item?.meta?.isHide)[0].children;
  return routerList;
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
