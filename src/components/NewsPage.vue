<template xmlns="http://www.w3.org/1999/html">
  <a-layout :style="aLayoutStyle">
    <my-carousel />
    <my-card />
  </a-layout>
</template>
<script setup lang="ts">
import type { CSSProperties } from "vue";
import myCarousel from "@/components/displays/AntdCarousel.vue";
import myCard from "@/components/displays/AntdCard.vue";

const aLayoutStyle: CSSProperties = {
  margin: "24px 16px"
};
</script>

<style scoped>

</style>

