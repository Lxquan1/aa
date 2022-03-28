import Vue from "vue";
import VueRouter from "vue-router";
import Renwu from "../components/Renwu.vue"
import Tour from '../components/Tour'
import YuLe from "../components/YuLe.vue"
import YiShu from "../components/YiShu.vue"
import ZongYi from '../components/ZongYi.vue'
import Nav from "../components/Nav.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "renwu",
    component: Renwu,
  },
  {
    path: "/yule",
    name: "yule",
    component: YuLe,
  },
  {
    path: "/tour",
    name: "tour",
    component: Tour,
    path: "/tour",
    name: "tour",
    component: Tour
  },
  {
    path: "/yishu",
    name: "yishu",
    component: YiShu,
  },
  {
    path: "/zongyi",
    name: "zongyi",
    component: ZongYi,
  }, 
  {
    path: "/nav",
    name: "nav",
    component: Nav
  }
];

const router = new VueRouter({
  routes,
});

export default router;
