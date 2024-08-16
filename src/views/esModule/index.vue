<template>
  <div>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="esModuleDemo" name="esModuleDemo">esModuleDemo</el-tab-pane>
      <el-tab-pane label="esModuleTest" name="esModuleTest">esModuleTest</el-tab-pane>
    </el-tabs>
  </div>
  <RouterView />
</template>

<script setup lang="ts">
const activeName = ref('esModuleDemo');

const route = useRoute();
watchEffect(() => {
  console.log(route);

  activeName.value = route.name as string;
});

const handleClick = (tab: any) => {
  console.log(tab);
};
</script>
