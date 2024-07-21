<template>
  <div>
    <el-switch :model-value="!isDark" inline-prompt style="--el-switch-on-color: #f2f3f5" @change="toggleDark()">
      <template #active-action>
        <el-icon color="#faf122"><Sunny /></el-icon>
      </template>
      <template #inactive-action>
        <el-icon><Moon /></el-icon>
      </template>
    </el-switch>
  </div>
</template>

<script setup lang="ts">
import { toggleDark, isDark } from '@/composables';
</script>

<!-- <style lang="scss" scoped></style> -->
