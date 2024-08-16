<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
});

const $emit = defineEmits(['update:modelValue']);
watch(
  () => props.modelValue,
  (val) => {
    console.log(val, 'val');
    modelVal.value = val;
  },
);
const modelVal = ref(props.modelValue);
provide('checkboxGroup', {
  modelValue: modelVal,
  change: (value: string) => {
    const values = props.modelValue.slice();
    const index = values.indexOf(value);
    if (index === -1) {
      values.push(value);
    } else {
      values.splice(index, 1);
    }

    $emit('update:modelValue', values);
    nextTick(() => {
      console.log(props.modelValue, 'values');
    });
  },
});
</script>

<!-- <style lang="scss" scoped></style> -->
