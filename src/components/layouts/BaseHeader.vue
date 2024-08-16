<template>
  <div>
    <el-switch class="switch-them" :model-value="!isDark" inline-prompt style="--el-switch-on-color: #f2f3f5" @change="handleChange">
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

let switchRef: any = null;
onMounted(() => {
  switchRef = document.querySelector('.switch-them');
});

const handleChange = () => {
  const rect = switchRef.getBoundingClientRect();
  let x = rect.left + rect.width / 2;
  let y = rect.top + rect.height / 2;

  if ((document as any).startViewTransition) {
    const transition = (document as any).startViewTransition(() => {
      toggleDark();
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [`circle(0 at ${x}px ${y}px)`, `circle(150% at ${x}px ${y}px)`],
        },
        {
          duration: 800,
          pseudoElement: '::view-transition-new(root)',
        },
      );
    });
  } else {
    toggleDark();
  }
};
</script>

<style lang="scss">
::view-transition-new(root),
::view-transition-old(root) {
  animation: none;
}
</style>
