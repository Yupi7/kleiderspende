import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import DonationForm from '../components/DonationForm.vue';
import Contact from '../views/Contact.vue';  // Importiere die Contact.vue-Seite

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
    path: '/kontakt',  // Neue Route für die Kontaktseite
    name: 'Kontakt',
    component: Contact
  }
];

const router = createRouter({
  history: createWebHistory('/'),  // Nutze den Basis-URL-Pfad
  routes
});

export default router;

