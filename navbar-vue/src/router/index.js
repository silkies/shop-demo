import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{ path: "/", exact: true, redirect: "/home" },
{
    path: '/home', 
    name: 'Home', 
  },
  { 
    path: '/products', 
    name: 'Products', 
  },
  { 
    path: '/cart', 
    name: 'Cart', 
  }];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;