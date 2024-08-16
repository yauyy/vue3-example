<template>
  <div>
    <h1>ES Module - test</h1>
    {{ name }}
    <el-button @click="getName">getName</el-button>
    <el-button @click="setVal(Date.now())">setName</el-button>
  </div>
</template>

<script setup lang="ts">
import { setVal, getVal } from './tool';

const name = ref('ES Module - test');
const getName = () => {
  name.value = getVal();
};
</script>
