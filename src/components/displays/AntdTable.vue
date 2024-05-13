<template>
  <a-table
    :columns="columns"
    :data-source="dataSource"
    :bordered="true"
    :pagination="pagination"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'content'">
        <a>
          {{ record.content }}
        </a>
      </template>
      <template v-else-if="column.key === 'tags'">
        <span>
          <a-tag :color="handleTagColor(record.isEuphemism)">
            {{ handleTag(record.isEuphemism) }}
          </a-tag>
        </span>
      </template>
    </template>
  </a-table>
</template>
<script lang="ts" setup>
import { columns } from "@/configs/table/tablecolumns";
import { Sentence } from "@/types/sentence";

defineProps<{
  dataSource?: Sentence[];
  pagination?: boolean;
}>();

function handleTagColor(tag: number): string {
  switch (tag) {
    case 0:
      return "geekblue";
    case 1:
      return "green";
    default:
      return "red";
  }
}

function handleTag(tag: number): string {
  switch (tag) {
    case 0:
      return "不是委婉语";
    case 1:
      return "是委婉语";
    default:
      return "未确认";
  }
}
</script>
