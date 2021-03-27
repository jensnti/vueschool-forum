<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <post-list :posts="threadPosts" />
    <div class="col-full">
      <form @submit.prevent="addPost">
        <!-- <div class="form-group">
          <label for="thread_title">Title:</label>
          <input type="text" id="thread_title" class="form-input" name="title" />
        </div> -->

        <div class="form-group">
          <label for="thread_content">Content:</label>
          <textarea
            id="thread_content"
            class="form-input"
            name="content"
            rows="8"
            cols="140"
            v-model="newPostText"
          ></textarea>
          <!-- :value="newPostText"
            @input="newPostText = $event.target.value" -->
        </div>

        <div class="btn-group">
          <button class="btn btn-ghost">Cancel</button>
          <button class="btn btn-blue" type="submit" name="Publish">Publish</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json';
import PostList from '@/components/PostList.vue';

export default {
  name: 'ThreadShow',
  components: {
    PostList,
  },
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      newPostText: '',
    };
  },
  computed: {
    thread() {
      return this.threads.find((thread) => thread.id === this.id); //  this.$route.params.id
    },
    threadPosts() {
      return this.posts.filter((post) => post.threadId === this.id);
    },
  },
  methods: {
    addPost() {
      const postId = `qqqq${Math.random()}`;
      const post = {
        id: postId,
        text: this.newPostText,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.id,
        userId: 'FsCDAk9w8NeXEceLV87arpsXjnQ2',
      };
      this.posts.push(post);
      this.thread.posts.push(postId);
      this.newPostText = '';
    },
  },
};
</script>
