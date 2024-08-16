<template>
  <div>
    <h1>checkbox</h1>
    <hr />
    单选
    <Checkbox v-model:check="box1">单个选择框</Checkbox>
    <hr />

    <div class="mt-10 mb-5">多选</div>
    <CheckboxGroup v-model="box2" @chang="onChange">
      <Checkbox v-for="item in options" :key="item.value" :value="item.value">{{ item.label }}</Checkbox>
    </CheckboxGroup>
  </div>
</template>

<script setup lang="ts">
import Checkbox from '@/components/lib/checkbox/index.vue';
import CheckboxGroup from '@/components/lib/checkbox-group/index.vue';

const box1 = ref(false);

const box2 = ref([]);

const options = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  { label: '选项3', value: '3' },
];

const onChange = () => {
  console.log('.....');
};
</script>

<!-- <style lang="scss" scoped>

</style> -->
