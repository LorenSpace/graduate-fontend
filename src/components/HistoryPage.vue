<template>
  <a-layout style="margin: 20px 16px">
    <my-table :data-source="sentences" :pagination="true"/>
  </a-layout>
</template>
<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import type {ApiResponse, Sentence} from "@/types/sentence";
import axios from "@/api/axios";
import myTable from "@/components/displays/AntdTable.vue"

const sentences = ref<Sentence[]>([]);

// 在组件挂载后调用 API
onMounted(async () => {
  try {
    const response = await axios.get<ApiResponse>('/sentence/result/all');
    if (response.data.success && response.data.data) {
      sentences.value = response.data.data;
      console.log(sentences.value);
    } else {
      console.error('Failed to fetch sentences:', response.data.errMsg);
    }
  } catch (error) {
    console.error('Error fetching sentences:', error);
  }
});

</script>
<style scoped>

</style>