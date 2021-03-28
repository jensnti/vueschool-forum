<template>
  <div class="container">
    <div class="flex-grid">
      <div class="col-3 push-top">
        <user-profile-card :user="user"/>
        <user-profile-card-editor :user="user" />
      </div>
      <div class="col-7 push-top">
        <div class="profile-header">
          <span class="text-lead"> {{ user.username }} recent activity </span>
        </div>
        <hr />
        <post-list :posts="user.posts" />
      </div>
    </div>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import { mapGetters } from 'vuex';
import UserProfileCard from '@/components/UserProfileCard.vue';
import UserProfileCardEditor from '@/components/UserProfileCardEditor.vue';

export default {
  components: { UserProfileCard, PostList, UserProfileCardEditor },
  computed: {
    ...mapGetters({ user: 'authUser' }),
  },
};
</script>
