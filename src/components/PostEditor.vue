<template>
      <div class="col-full">
      <form @submit.prevent="save">
        <div class="form-group">
          <label for="thread_content">Content:</label>
          <textarea
            id="thread_content"
            class="form-input"
            name="content"
            rows="8"
            cols="140"
            v-model="text"
          ></textarea>
        </div>

        <div class="btn-group">
          <button class="btn btn-ghost">Cancel</button>
          <button class="btn btn-blue" type="submit" name="Publish">Publish</button>
        </div>
      </form>
    </div>
</template>
<script>
export default {
  data() {
    return {
      text: '',
    };
  },
  methods: {
    save() {
      const post = {
        text: this.text,
        publishedAt: Math.floor(Date.now() / 1000),
        userId: 'FsCDAk9w8NeXEceLV87arpsXjnQ2',
      };
      this.$emit('save', { post });
      this.text = '';
    },
  },
};
</script>
