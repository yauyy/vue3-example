<template>
  <el-table :data="tableData" :style="{ width: '100%' }">
    <el-table-column type="selection" width="55" />
    <el-table-column prop="index" label="序号" />
    <el-table-column prop="changdi1" label="场地1">
      <template #default="{ row }">
        <el-image
          v-for="(item, index) in row.changdi1"
          :key="index"
          class="size-60px"
          :src="item"
          :preview-src-list="row.changdi1"
          fit="cover"
        />
      </template>
    </el-table-column>
    <el-table-column prop="changdi2" label="场地2">
      <template #default="{ row }">
        <el-image
          v-for="(item, index) in row.changdi2"
          :key="index"
          class="size-60px"
          :src="item"
          :preview-src-list="row.changdi2"
          fit="cover"
        />
      </template>
    </el-table-column>
    <el-table-column prop="changdi3" label="场地3">
      <template #default="{ row }">
        <video
          v-for="(item, index) in row.changdi3"
          :key="index"
          class="size-60px"
          :src="item"
          :preview-src-list="row.changdi3"
          fit="cover"
        />
      </template>
    </el-table-column>
    <el-table-column prop="changdi4" label="场地4">
      <template #default="{ row }">
        <el-image
          v-for="(item, index) in row.changdi4"
          :key="index"
          class="size-60px"
          :src="item"
          :preview-src-list="row.changdi4"
          fit="cover"
        />
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { changdi1, changdi2, changdi3, changdi4 } from '../const';
const tableData = ref(
  Array.from({ length: 50 }, (_, index) => ({
    index,
    changdi1,
    changdi2,
    changdi3,
    changdi4,
  })),
);
</script>

<!-- <style lang="scss" scoped></style> -->
