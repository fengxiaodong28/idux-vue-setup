<template>
  <div>首页</div>
  <IxButton mode="primary" @click="fetch">Hello Idux</IxButton>
  <IxIcon name="apartment" />
</template>

<script setup lang="ts">
import { useIduxMessage } from './hooks';
import { request } from '@/request';

useIduxMessage();

const fetch = () => {
  request.get('/api/demo').then((res) => {
    console.log(res);
  });
};
</script>
