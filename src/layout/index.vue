<template>
  <el-container class="layout">
    <SideMain />
    <el-container class="main-container">
      <NavBar />
      <AppMain />
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { defineAsyncComponent  } from "vue";

const NavBar = defineAsyncComponent(() => import("./navBars/index.vue"));
const SideMain = defineAsyncComponent(() => import("./components/SideMain.vue"));
const AppMain = defineAsyncComponent(() => import("./components/AppMain.vue"));

</script>

<style lang="scss" scoped>
.layout {
  height: 100vh;
  display: flex;
  .main-container{
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
