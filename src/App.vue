<template>
  <el-container class="h-screen w-screen overflow-hidden">
    <el-header class="flex items-center justify-end border-bottom">
      <BaseHeader />
    </el-header>

    <el-container class="overflow-hidden">
      <el-scrollbar>
        <BaseAside v-model:asideWidth="asideWidth" />
      </el-scrollbar>
      <el-main class="page-bg" :style="`width: calc(100vw - ${asideWidth})`">
        <div class="page-content h-full rounded-10px overflow-hidden p-10px">
          <el-scrollbar>
            <router-view />
          </el-scrollbar>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import BaseAside from '@/components/layouts/BaseAside.vue';
import BaseHeader from '@/components/layouts/BaseHeader.vue';
const asideWidth = ref('200px');
</script>

<style scoped>
.border-bottom {
  border-bottom: 1px solid var(--el-border-color);
}

.page-bg {
  background-color: var(--el-bg-color-page);
}

.page-content {
  background-color: var(--el-bg-color);
}
</style>
