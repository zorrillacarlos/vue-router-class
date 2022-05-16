import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import RouterView from "@/components/RouterPrincipal.vue";
import RouterComponenteView from "@/components/Componente.vue";
import DatosView from "@/components/DatosComponente.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/router",
    name: "router",
    component: RouterView,
    children: [
      {
        path: ":id",
        name: "routerID",
        component: RouterComponenteView,
      }, 
    ],
  },
  {
    path: "/datos",
    name: "datos",
    component: DatosView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
