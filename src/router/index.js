import Vue from 'vue';
import Router from 'vue-router';
import DonationForm from '../components/DonationForm.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/spende',
      name: 'Spende',
      component: DonationForm
    }
  ]
});
