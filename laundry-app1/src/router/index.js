import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import LaundryList from '../components/LaundryList.vue';
import Contact from '../components/Contact.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/laundry-list', component: LaundryList },
  { path: '/contact', component: Contact }
];

const router = new VueRouter({
  routes
});

export default router;
