<script lang="ts" setup>
import {
  DesktopOutlined,
  FileSearchOutlined,
  HistoryOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const sideSelectedKeys = ref<string[]>(["1"]);

function setActiveKey(key: string): void {
  sideSelectedKeys.value = [key];
}

const route = useRoute();

watch(
  () => route.path,
  (newVal) => {
    switch (newVal) {
      case "/":
        setActiveKey("1");
        break;

      case "/about":
        setActiveKey("2");
        break;

      case "/history":
        setActiveKey("3");
        break;

      case "/news":
        setActiveKey("4");
        break;

      default:
        setActiveKey("1");
    }
  },
  { immediate: true },
);
</script>

<template>
  <img src="../../assets/sast.svg" alt="SAST" style="height: auto" class="logo" />
  <a-menu v-model:selectedKeys="sideSelectedKeys" theme="dark" mode="inline">
    <a-menu-item key="1">
      <router-link to="/">
        <user-outlined />
        <span>用户使用</span>
      </router-link>
    </a-menu-item>
    <a-menu-item key="2">
      <router-link to="/news">
        <desktop-outlined />
        <span>研究背景</span>
      </router-link>
    </a-menu-item>
    <a-menu-item key="3">
      <router-link to="/history">
        <HistoryOutlined />
        <span>使用历史</span>
      </router-link>
    </a-menu-item>
    <a-menu-item key="4">
      <router-link to="/about">
        <FileSearchOutlined />
        <span>模型介绍</span>
      </router-link>
    </a-menu-item>
  </a-menu>
</template>

<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.logo {
  background-color: white;
  margin: 5px;
  border-radius: 5px;
}

.a-layout-sider-collapsed .a-menu-item {
  text-align: center; /* Center align the icons */
}

.a-layout-sider-collapsed .a-menu-item .anticon {
  margin-right: 0; /* Remove margin when collapsed */
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
</style>
