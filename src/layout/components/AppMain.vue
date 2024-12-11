<template>
  <div class="app-main">
    <router-view v-slot="{ Component }">
      <transition name="slide-right">
        <component class="app-main-content" :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts" setup></script>
