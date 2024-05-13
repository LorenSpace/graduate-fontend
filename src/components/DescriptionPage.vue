<template xmlns="http://www.w3.org/1999/html">
  <a-layout :style="aLayoutStyle">
    <my-typora/>
  </a-layout>
</template>
<script setup lang="ts">
import type { CSSProperties } from "vue";
import myTypora from "@/components/contents/AntdTypography.vue"

const aLayoutStyle: CSSProperties = {
  margin: "24px 16px",
};
</script>

<style scoped></style>
