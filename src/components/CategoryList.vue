<template>
  <forum-list
    v-for="category in categories"
    :key="category.id"
    :forums="getForumsCategory(category)"
    :title="category.name"
    :category-id="category.id" />
</template>
<script>
import ForumList from '@/components/ForumList.vue';
import sourceData from '@/data.json';

export default {
  components: { ForumList },
  props: {
    categories: {
      required: true,
      type: Array,
    },
  },
  methods: {
    getForumsCategory(category) {
      return sourceData.forums.filter((forum) => forum.categoryId === category.id);
    },
  },

};
</script>
