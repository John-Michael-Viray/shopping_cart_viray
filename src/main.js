import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import ProductList from './components/ProductList.vue';
import LoginPage from './components/LoginPage.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/productlist', component: ProductList },
  { path: '/login', component: LoginPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');