<template>
  <div>
    <h1>Server-Sent Events</h1>
    <hr />
  </div>
</template>

<script setup lang="ts">
const eventSource = new EventSource('http://localhost:3000/events');

// 监听 message 事件

eventSource.onmessage = function (event) {
  const data = JSON.parse(event.data);
  console.log('Received data:', data);
};
</script>
