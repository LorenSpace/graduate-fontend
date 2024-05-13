<script lang="ts" setup>
import { ref } from "vue";
import myMenu from "@/components/pages/AntdMenu.vue";

const collapsed = ref<boolean>(false);
</script>

<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider
      v-model:collapsed="collapsed"
      collapsible
      theme="dark"
      style="border-radius: 5px"
    >
      <my-menu />
    </a-layout-sider>
    <a-layout>
      <a-layout-content style="margin: 0 16px">
        <router-view />
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Copyright © NJUPT.SAST 1992-2024
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style scoped>
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
