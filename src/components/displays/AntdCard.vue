<script lang="ts" setup>

import {CSSProperties} from "vue";

const textStyle: CSSProperties = {
  textIndent: '2em',
};

const cardStyle: CSSProperties = {
  width: '100%',
  marginTop: '30px',
};

const imgStyle: CSSProperties = {
  display: 'block',
  width: '300px',
};
</script>

<template>
  <a-flex justify="center" align="center" style="width: 100%">
    <a-card :style="cardStyle" :body-style="{ padding: 0, overflow: 'hidden' }"
            style="margin-right: 50px">
      <a-flex justify="space-between">
        <a-flex vertical align="center" justify="space-between" :style="{ padding: '32px' }">
          <a-typography>
            <a-typography-title :level="4">
              委婉语介绍
            </a-typography-title>
            <p :style="textStyle">
              委婉语作为一种语言现象，其根源可以追溯到古代文明时期，早在人类文明的早期，
              当面对权威、死亡、宗教以及性等敏感话题时，人们便开始使用间接或含蓄的表达方式。这种沟通的艺术形式允许个体在不冒犯听者或违反社会禁忌的情况下交流思想。
              例如，在维多利亚时代，涉及身体或不雅行为的直接语言常常被视为不得体，
              因此人们发明了一系列委婉表达来涵盖日常对话中的这些话题。
            </p>
            <p :style="textStyle">
              委婉语的使用不仅是为了避免直接的冲突，它也反映了一种社会和文化动态，表明语言如何适应不断变化的社会规范和价值观。
              在不同的文化中，委婉语体现了一种社交智慧，使得交流变得更为精细和敏感。
              比如，在东亚文化中，委婉语往往用来表达尊敬，反映了一种避免直接和开放冲突的文化倾向。
              相反，在一些西方文化中，直白和坦诚有时被视为诚信和诚实的标志，但即使在这些文化中，
              委婉语仍然在政治、医疗和商业环境中频繁使用，作为维护社交关系和个人形象的工具。
            </p>
          </a-typography>
        </a-flex>

      </a-flex>
    </a-card>
    <a-card :style="{ ...cardStyle }" :body-style="{ padding: 0, overflow: 'hidden' }">
      <a-flex vertical align="flex-end" justify="space-between" :style="{ padding: '32px'}">
        <a-typography-title :level="4">
          委婉语演变
        </a-typography-title>
        <p :style="textStyle">
          随着时间的推移，委婉语的形式和功能不断演变，但其核心目的——即在保持沟通有效性的同时减少话语的直接性和攻击性——始终未变。
          在现代社会，随着网络和全球沟通的快速发展，委婉语的使用也适应了新的沟通媒介和社会媒体环境。
          这导致了新的委婉表达方式的诞生，同时也带来了检测和理解这些表达方式的新挑战。
          例如，在网络环境中，一些群体可能会创造出全新的委婉语来掩盖潜在的禁忌或不受欢迎的话题。
          这种不断进化的语言游戏不仅要求日常交流者保持警觉，也为那些试图通过自然语言处理技术来自动检测这些表达的人提出了技术挑战。
        </p>
        <a-button type="primary" style="margin-top: 10px"
                  href="https://www.hanspub.org/journal/PaperInformation?paperID=32009"
                  target="_blank">
          了解详情
        </a-button>
      </a-flex>
    </a-card>
  </a-flex>
</template>

<style scoped>

</style>