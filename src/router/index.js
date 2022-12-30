import { createRouter, createWebHistory } from "vue-router";
import SignUp from "../pages/Sign-up.vue";
import Confirm from "../pages/Confirm.vue";

const routes = [
  {
    path: "/",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/confirm",
    name: "confirm-page",
    component: Confirm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
