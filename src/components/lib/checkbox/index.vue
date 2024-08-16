<template>
  <div class="checkbox" @click="handleClick">
    <div>
      <el-icon>
        <CircleCheck v-if="!checkboxVal" />
        <CircleCheckFilled v-else />
      </el-icon>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const checkboxGroup = inject('checkboxGroup', null);

const props = defineProps({
  check: {
    type: Boolean,
    default: false,
  },
  value: {
    type: [Boolean, String, Number, undefined],
    default: undefined,
  },
});

const checkboxVal = ref(false);

watch(
  () => props.check,
  (val) => {
    checkboxVal.value = val;
  },
);

watch(
  () => checkboxGroup?.modelValue,
  (val) => {
    console.log(val, 'val333', val.value);

    if (checkboxGroup) {
      checkboxVal.value = val.value.includes(props.value);
    }
  },
  {
    deep: true,
  },
);

console.log(checkboxGroup, 'checkboxGroup');

const $emit = defineEmits(['change', 'update:check']);

const handleClick = () => {
  console.log(props.value, 'props.value');

  if (!checkboxGroup) {
    $emit('change', !props.check);
    $emit('update:check', !props.check);
    return;
  }
  checkboxGroup.change(props.value);
};
</script>

<style lang="scss" scoped>
.checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}
</style>
