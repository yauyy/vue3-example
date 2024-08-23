<template>
  <div>
    <h1 class="text-center font-600">chromeAi</h1>

    <section class="h-80vh border border-rounded mt-20px mb-30px overflow-hidden">
      <el-scrollbar height="80vh">
        <div v-for="(item, index) in task" :key="index" class="p-20px">
          <div>
            <p class="font-600">{{ item.ai ? 'AI' : 'Me' }}</p>
            <div class="ml-15px" v-html="item.content"></div>
          </div>
        </div>
      </el-scrollbar>
    </section>

    <div class="flex">
      <el-input v-model="ctx" size="large" class="mr-10px" placeholder="请输入" @keyup.enter="send" />
      <el-button type="primary" class="mr-20px" size="large" @click="send">发送</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { marked } from 'marked';
const { ctx, task, send } = useAi();

function useAi() {
  const task = ref<{ ai: boolean; content: string }[]>([]);
  const ctx = ref('');

  let chromeAi: any = null;

  async function getChromeAi() {
    const _win = window as any;
    const openAi = await _win.ai.canCreateTextSession();
    if (openAi !== 'readily') {
      console.log('ai is not ready');
      return false;
    }
    const ai = await _win.ai.createTextSession();
    return ai;
  }

  getChromeAi().then((ai) => {
    console.log('🚀 ~ ai:', ai);
    chromeAi = ai;
  });

  async function send() {
    console.log(ctx.value, 'ctx.value');
    // 一次性发送
    // const value = await chromeAi.prompt(ctx.value);
    // console.log('🚀 ~ send ~ value:', value);
    const text = ctx.value;
    ctx.value = '';
    task.value.push({ ai: false, content: text });
    const len = task.value.length;
    console.log('🚀 ~ send ~ len:', len);
    task.value.push({ ai: true, content: '' });
    console.log(task.value, 'task.value');

    try {
      for await (const val of chromeAi.promptStreaming(text)) {
        console.log('🚀 ~ forawait ~ val:', val);

        nextTick(() => {
          task.value[len].content = val && marked.parse(val);
        });
      }
    } catch (error) {
      console.log('🚀 ~ send ~ error:', error);
    }
  }

  return {
    ctx,
    task,
    send,
  };
}
</script>
