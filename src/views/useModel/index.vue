<template>
  <h1 class="text-center text-20px font-bold">Parent: 手写useVModel</h1>
  <div>{{ person }}</div>
  <div>message: {{ message }}</div>
  <el-button @click="changePerson">改变person</el-button>
  <model-child v-model:message="message" v-model:infoData="person" v-model:person2="person2" class="mt-20px" />
</template>

<script setup lang="ts">
import modelChild from './components/model-child.vue';
const person = ref({
  name: 'zs',
  age: 18,
  phone: ['123', '456'],
  address: {
    city: 'beijing',
    street: 'chaoyang',
  },
  other: {
    ai: {
      name: 'zs',
      age: 18,
    },
    bi: {
      name: 'ls',
      age: 20,
    },
  },
});

const person2 = ref({
  name: 'zs',
  age: 18,
  phone: ['123', '456'],
  address: {
    city: 'beijing',
    street: 'chaoyang',
  },
  other: {
    ai: {
      name: 'zs',
      age: 18,
    },
    bi: {
      name: 'ls',
      age: 20,
    },
  },
});

const message = ref('hello');

const changePerson = () => {
  person.value.other.ai.name = Date.now() + '';
};
</script>
