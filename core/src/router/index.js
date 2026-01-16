import {createRouter, createWebHistory} from 'vue-router';

import Home from '../views/Home.vue';
import SignUpPage from '../views/SignUpPage.vue';

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "SignUp", component: SignUpPage },
    { path: "/home", name: "Home", component: Home },
  ],
});

export default routes;






