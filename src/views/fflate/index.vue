<template>
  <div>
    <h1 class="text-20px font-bold mb-20px text-center">fflate</h1>
    <el-input v-model="input1" style="width: 120px; margin-right: 10px" placeholder="请输入" />
    <el-button type="primary" @click="handleZipSync">同步压缩-文字</el-button>
    <el-button type="primary" @click="handleZipSyncImg">同步压缩-图片</el-button>
    <el-button type="primary" @click="hangleZip">异步压缩</el-button>
  </div>
</template>

<script setup lang="ts">
import { handleZipSync, handleZipSyncImg, hangleZip } from './tools';

const input1 = ref('');
</script>
