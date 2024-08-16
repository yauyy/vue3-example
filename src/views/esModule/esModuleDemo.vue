<template>
  <div>
    <h1>ES Module 和 CommonJS 一直共用一个内存地址</h1>
    <hr />
    <div>{{ name }}</div>
    <el-button @click="getName">getName</el-button>
    <el-button @click="setVal(Date.now())">setName</el-button>
  </div>
</template>

<script setup lang="ts">
import { setVal, getVal } from './tool';
const name = ref('ES Module123');
const getName = () => {
  const res = getVal();
  console.log('🚀 ~ getName ~ res:');
  name.value = res;
};
</script>
