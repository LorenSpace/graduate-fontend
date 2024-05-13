<template>
  <a-layout>
    <a-carousel
      :after-change="onChange"
      arrows
      dots-class="slick-dots slick-thumb"
      :autoplay="true"
      :dots="false"
    >
      <template #prevArrow>
        <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
          <left-circle-outlined />
        </div>
      </template>
      <template #nextArrow>
        <div class="custom-slick-arrow" style="right: 10px">
          <right-circle-outlined />
        </div>
      </template>
      <div :style="divStyle">
        <a-image
          :src="`https://hexoblogimages-1304994718.cos.ap-nanjing.myqcloud.com/contrast_method.svg`"
        />
      </div>
      <div :style="divStyle">
        <a-image
          :src="`https://hexoblogimages-1304994718.cos.ap-nanjing.myqcloud.com/humaneval_cm.svg`"
        />
      </div>
      <div :style="divStyle">
        <a-image
          :src="`https://hexoblogimages-1304994718.cos.ap-nanjing.myqcloud.com/humaneval_scatter.svg`"
        />
      </div>
    </a-carousel>
  </a-layout>
</template>
<script lang="ts" setup>
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons-vue";
import { CSSProperties } from "vue";

const onChange = (current: void) => {
  console.log(current);
};

const divStyle: CSSProperties = {
  display: "flex",
  justifyItems: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
};
</script>

<style scoped>
#carousel .content {
  width: 100%;
  height: 100%;
}

:deep(.ant-image-img) {
  max-width: 95%; /* 最大宽度为容器的 95% */
  max-height: 95%; /* 最大高度为容器的 95% */
  width: auto; /* 宽度自动 */
  height: auto; /* 高度自动，保持宽高比 */
  /*border: 2px solid red;*/
}

:deep(.slick-slide) {
  text-align: center;
  height: 300px;
  line-height: 160px;
  background: #e4e5e6;
  overflow: hidden;
}

:deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  transition: ease all 0.3s;
  opacity: 0.3;
  z-index: 1;
}

:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}

:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #fff;
  opacity: 0.5;
}
</style>
