const {
    defineProps,
    defineSlots,
    defineEmits,
    defineExpose,
    defineModel,
    defineOptions,
    withDefaults,
} = await import('vue');
export const columns = [
    {
        title: '句子内容',
        key: 'content',
        dataIndex: 'content',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
    },
    {
        title: '创建时间',
        key: 'createdTime',
        dataIndex: 'createdTime'
    }
];
