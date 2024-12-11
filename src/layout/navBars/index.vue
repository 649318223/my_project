<template>
  <div class="nav-bar">
   <HeaderMain/>
   <TagsView/>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
//组件
const TagsView = defineAsyncComponent(() => import('@/layout/navBars/tagsView/index.vue'))
const HeaderMain = defineAsyncComponent(() => import('./header.vue'))

</script>

<style>

</style>