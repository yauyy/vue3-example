<template>
  <div>
    <hr />
    <h1>Child</h1>
    <el-form ref="formRef" :model="info" label-width="auto">
      <el-form-item label="name" prop="name">
        <el-input v-model="info.name"></el-input>
      </el-form-item>
      <el-form-item label="age" prop="age">
        <el-input v-model="info.age"></el-input>
      </el-form-item>
      <el-form-item label="phone" prop="phone">
        <el-input v-for="(item, index) in info.phone" :key="index" v-model="info.phone[index]"></el-input>
      </el-form-item>
      <el-form-item label="address" prop="address">
        <el-input v-model="info.address.city"></el-input>
        <el-input v-model="info.address.street"></el-input>
      </el-form-item>
      <el-form-item label="other" prop="address">
        <el-input v-model="info.other.ai.name"></el-input>
        <el-input v-model="info.other.ai.age"></el-input>
      </el-form-item>
      <el-form-item label="message" prop="message">
        <el-input v-model="msg"></el-input>
      </el-form-item>
    </el-form>

    <el-button @click="submit">submit</el-button>
  </div>
</template>

<script setup lang="ts">
import { useVModel } from '../hooks';
const props = defineProps({
  infoData: {
    type: Object,
    required: true,
  },
  message: {
    type: String,
    default: '',
  },
});

const $emit = defineEmits(['update:message', 'update:info']);

const msg = useVModel(props, 'message', $emit);
const info = useVModel(props, 'infoData', $emit);

const submit = () => {
  info.value.address.city = 'shanghai';
  console.log(info.value);
  console.log(msg.value);
};

// info.value = props.info;
</script>
