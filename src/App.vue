<template>
  <IduxProvider>
    <router-view />
  </IduxProvider>
</template>

<script setup lang="ts">
import { IduxProvider } from '@components/idux-provider';
import { RouterView } from 'vue-router';
</script>
