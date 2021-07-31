import { createRouter, createWebHistory } from "vue-router";
import DcHeros from "./pages/DcHeros";
import Calendar from "./pages/Calendar";
import MarkDown from "./pages/MarkDown";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";

const routes = [
  { path: "/", component: Home },
  { path: "/todo", component: DcHeros },
  { path: "/calendar", component: Calendar },
  { path: "/markdown", component: MarkDown },
  { path: "/calculator", component: Calculator },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
