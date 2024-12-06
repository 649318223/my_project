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
import { ref } from "vue";
import NavBar from "./components/NavBar.vue";
import SideMain from "./components/SideMain.vue";
import AppMain from "./components/AppMain.vue";
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
