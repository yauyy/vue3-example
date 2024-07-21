<template>
  <div>
    <el-input v-model="input1" placeholder="请输入" />
    <el-button type="primary" @click="handleZipSync">同步压缩-文字</el-button>
    <el-button type="primary" @click="handleZipSyncImg">同步压缩-图片</el-button>
    <el-button type="primary" @click="hangleZip">异步压缩</el-button>

    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="虚拟表格" name="table-v2">
        <TableV2 />
      </el-tab-pane>
      <el-tab-pane label="基础表格" name="base-table">
        <BaseTable />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { handleZipSync, handleZipSyncImg, hangleZip } from './tools';
import BaseTable from './components/BaseTable.vue';
import TableV2 from './components/TableV2.vue';

const input1 = ref('');

const activeName = ref('table-v2');
</script>

<!-- <style lang="scss" scoped></style> -->
