<template>
  <el-menu router class="el-menu-vertical-demo" :collapse="isCollapse" active-text-color="#409eff" default-active="/" text-color="#606266">
    <div class="h-28px line-height-30px text-right m-10px">
      <el-icon size="30" color="#606266" class="cursor-pointer" @click="toggleMenu"><Fold v-if="!isCollapse" /> <Expand v-else /></el-icon>
    </div>
    <el-menu-item v-for="(item, index) in routes" :key="index" :index="item.path">
      <el-icon><component :is="item.meta.icon" /></el-icon>
      <template #title> {{ item.meta.title }}</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
const router = useRouter();
console.log(router.getRoutes(), 'router');
const isCollapse = ref(false);
const routes = ref(router.getRoutes());

const toggleMenu = () => {
  isCollapse.value = !isCollapse.value;
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
