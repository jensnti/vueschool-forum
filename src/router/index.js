import Home from '@/pages/Home.vue';
import NotFound from '@/pages/NotFound.vue';
import ThreadShow from '@/pages/ThreadShow.vue';
import Forum from '@/pages/Forum.vue';
import Category from '@/pages/Category.vue';
import { createRouter, createWebHistory } from 'vue-router';
import sourceData from '@/data.json';
import Profile from '@/pages/Profile.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: Category,
    props: true,
  },
  {
    path: '/forum/:id',
    name: 'Forum',
    component: Forum,
    props: true,
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: ThreadShow,
    props: true,
    beforeEnter(to, from, next) {
      const threadExists = sourceData.threads.find((thread) => thread.id === to.params.id);
      if (threadExists) {
        return next();
      }
      return next({
        name: 'NotFound',
        params: {
          pathMatch: to.path.substring(1).split('/'),
        },
        query: to.query,
        hash: to.hash,
      });
    },
  },
  {
    path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
