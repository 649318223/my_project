<template>
  <div class="app-main">
    <router-view v-slot="{ Component }">
      <transition name="slide-right">
        <component class="app-main-content" :is="Component" v-if="isRouterAlive"/>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
import mittBus from '@/utils/mitt';
import { ref, nextTick } from 'vue';
//data
const isRouterAlive = ref(true);
mittBus.on('reload', () => {
  reload()
})
//methods
// 重新加载路由
const reload = () => {
  console.log('reload')
  isRouterAlive.value = false
  nextTick(() => {
    isRouterAlive.value = true
  })
}
</script>
