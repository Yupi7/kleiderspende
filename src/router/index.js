import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import DonationForm from '../components/DonationForm.vue';
import Contact from '../views/Contact.vue';
import Areas from '../views/Areas.vue';
import Impressum from '../views/Impressum.vue'
import Datenschutz from '../views/Datenschutz.vue'

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
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: Impressum
  },
  {
    path: '/datenschutz',
    name: 'Datenschutz',
    component: Datenschutz
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

export default router;

