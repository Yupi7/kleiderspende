import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import DonationForm from '../components/DonationForm.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/spende',
    name: 'Spende',
    component: DonationForm
  }
];

const router = createRouter({
  history: createWebHistory('/'),  // Entferne process.env.BASE_URL und ersetze es durch '/'
  routes
});

export default router;
