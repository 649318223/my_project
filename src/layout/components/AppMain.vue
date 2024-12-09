<template>
  <div class="app-main">
    <el-card class="app-main-content" shadow="hover">
      <router-view></router-view>
    </el-card>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.app-main {
  flex: 1;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
  background-color: #f8f8f8;
  &-content {
    height: 100%;
  }
}
</style>
