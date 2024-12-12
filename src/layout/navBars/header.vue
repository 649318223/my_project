<template>
  <el-header height="50px" class="header">
    <div class="header-left">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">菜单</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>菜单</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="header-right">
      <el-dropdown>
        <div class="el-dropdown-link avatar">
          <el-avatar :size="30" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
          <span class="username">admin</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>
            <el-dropdown-item :icon="CirclePlusFilled"> Action 2 </el-dropdown-item>
            <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>
            <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>
            <el-dropdown-item :icon="CircleCheck">Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script lang="ts" setup>
import { ArrowDown, Check, CircleCheck, CirclePlus, CirclePlusFilled, Plus } from "@element-plus/icons-vue";
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  border-bottom: 1px solid var(--mz-border-color-light);
  .el-dropdown-link {
    outline: unset;
  }
  .avatar{
    display: flex;
    align-content: center;
    justify-content: center;
    .username{
      margin-left: 8px;
      align-content: center;
    }
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
