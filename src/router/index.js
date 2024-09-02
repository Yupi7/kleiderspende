import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import DonationForm from '../components/DonationForm.vue';
import Contact from '../views/Contact.vue';
import Areas from '../views/Areas.vue';

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
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: Contact
  },
  {
    path: '/kriesengebiete',
    name: 'Kriesengebiete',
    component: Areas
  }
];

const router = createRouter({
  history: createWebHistory('/'),  // Nutze den Basis-URL-Pfad
  routes
});

export default router;

