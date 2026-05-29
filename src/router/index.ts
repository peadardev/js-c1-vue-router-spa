import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/modules/landing/pages/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
      children: [
        {
          path: '/',
          component: HomePage,
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('@/modules/landing/pages/AboutPage.vue'),
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('@/modules/landing/pages/ContactPage.vue'),
        },
      ],
    },
    {
      path: '/auth',
      redirect: 'login',
      component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
      children: [
        {
          path: '/auth',
          component: () => import('@/modules/auth/pages/LoginPage.vue'),
        },
      ],
    },
  ],
});

export default router;
