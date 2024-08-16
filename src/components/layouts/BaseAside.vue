<template>
  <el-menu router class="el-menu-vertical-demo" :collapse="isCollapse" active-text-color="#409eff" default-active="/" text-color="#606266">
    <div class="h-28px line-height-30px text-right m-10px">
      <el-icon size="30" color="#606266" class="cursor-pointer" @click="toggleMenu"><Fold v-if="!isCollapse" /> <Expand v-else /></el-icon>
    </div>
    <template v-for="(item, index) in routes" :key="index">
      <el-menu-item v-if="!item.children?.length" :index="item.path">
        <el-icon><component :is="item.meta?.icon" /> </el-icon>
        <template #title>
          {{ item.meta?.title }}
        </template>
      </el-menu-item>
      <el-sub-menu v-else :index="item.path">
        <template #title>
          <el-icon><component :is="item.meta?.icon" /> </el-icon>
          <span>{{ item.meta?.title }}</span>
        </template>
        <el-menu-item v-for="(child, idx) in item.children" :key="idx" :index="item.path + '/' + child.path">
          <template #title>
            <el-icon><component :is="child.meta?.icon" /> </el-icon>
            {{ child.meta?.title }}
          </template>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
const router = useRouter();
const isCollapse = ref(false);
const routes = ref(router.options.routes);
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
