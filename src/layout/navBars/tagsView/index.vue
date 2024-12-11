<template>
  <div class="tags-view">
    <el-scrollbar>
      <div class="scrollbar-flex-content">
        <p v-for="item in 50" :key="item" class="scrollbar-demo-item">
          {{ item }}
        </p>
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

//变量
const tagsViewList = ref([]);
//监听路由变化
watch(
  () => route,
  (newRoute, oldRoute) => {
    const { path, meta } = newRoute;

    const obj = { path, meta };
    console.log(obj);
    // if (path !== "/login") {
    //   tagsViewList.value.push(obj);
    // }
    // console.log("Route changed:", newRoute, oldRoute);
    // 在这里可以执行路由变化时需要做的任何逻辑
  },
  { deep: true, immediate: true }
);
</script>

<style lang="scss" scoped>
.scrollbar-flex-content {
  display: flex;
}
.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-danger-light-9);
  color: var(--el-color-danger);
}
</style>
