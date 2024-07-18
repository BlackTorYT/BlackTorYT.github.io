import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';
import MainPage from '@/pages/MainPage.vue';
import ChannelPage from '@/pages/ChannelPage.vue';
import ChannelFormPage from '@/pages/ChannelFormPage.vue';
import ChannelEditPage from '@/pages/ChannelEditPage.vue'; 
import SubscriberPage from '@/pages/SubscriberPage.vue';
import SubscriberFormPage from '@/pages/SubscriberFormPage.vue';
import SubscriberEditPage from '@/pages/SubscriberEditPage.vue';
import SubPage from '@/pages/SubPage.vue';
import SubFormPage from '@/pages/SubFormPage.vue';
import SubEditPage from '@/pages/SubEditPage.vue';
import PatternPage from '@/pages/PatternPage.vue';
import PatternFormPage from '@/pages/PatternFormPage.vue';
import PatternEditPage from '@/pages/PatternEditPage.vue';
import LogPage from '@/pages/LogPage.vue';
import LoginPage from '@/pages/LoginPage.vue';

const routes = [
  {
    path: '/',
    component: MainPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/channels',
    component: ChannelPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/channels/create',
    component: ChannelFormPage,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/channels/edit/:id',
    component: ChannelEditPage,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/subscribers',
    component: SubscriberPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/subscribers/create',
    component: SubscriberFormPage,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/subscribers/edit/:id',
    component: SubscriberEditPage,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/subs',
    component: SubPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/subs/create',
    component: SubFormPage,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/subs/edit/:id',
    component: SubEditPage,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/patterns',
    component: PatternPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/patterns/create',
    component: PatternFormPage,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/patterns/edit/:id',
    component: PatternEditPage,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/logs',
    component: LogPage,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isAuthenticated) {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
