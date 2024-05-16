<template>
  <a-layout style="margin: 20px 16px">
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>请输入需要识别的语句：</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="system_content">
      <a-textarea
        v-model:value="value"
        placeholder="请输入你要检测委婉语的句子"
        :rows="7"
      />
      <a-space id="submit_button">
        <a-button type="primary" @click="onSubmit(value)" :loading="isLoading"> Submit</a-button>
      </a-space>
    </div>

    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>结果显示如下：</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="system_content" :style="{ marginTop: '5px' }">
      <ant-d-table :data-source="sentences" :pagination="false" />
    </div>
  </a-layout>
</template>

<script lang="ts" setup>
import AntDTable from "@/components/displays/AntdTable.vue";
import { ref } from "vue";
import type { Sentence } from "@/types/sentence";
import axios from "@/api/axios";

const value = ref<string>("");
const sentences = ref<Sentence[]>([]);

const isLoading = ref<boolean>(false);

/*const {
  execute: postSentence,
  error,
  isLoading: isSubmitting,
  response,
} = useAxios("/sentence/add", { method: "POST" }, axios, {
  immediate: false,
});

const {
  execute: getSentence,
  // error,
  isLoading: isGetting,
  // response,
} = useAxios({ method: "GET" }, axios);*/

function onSubmit(content: string): void {
  const sentence = { content: content };
  // 使用 axios 发送 POST 请求
  isLoading.value = true;
  axios
    .post("/sentence/add", sentence)
    .then((response) => {
      const id = response.data.data; // 获取从服务器返回的 ID
      console.log("Success:", response.data);
      // 确保 GET 请求在 POST 请求成功完成后执行
      return axios.get(`/sentence/result/${id}`); // 注意使用反引号
    })
    .then((response) => {
      console.log("Response:", response.data);
      isLoading.value = false;
      // 假设你想将返回的数据存储起来，只取前三条数据
      sentences.value = [response.data.data, ...sentences.value];
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
</script>

<style scoped>
.system_content {
  padding: 24px;
  background: #fff;
  min-height: 240px;
  border-radius: 10px;
}

#submit_button {
  margin-bottom: 10px;
  margin-top: 10px;
  display: flex;
  float: right;
}

#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
</style>
