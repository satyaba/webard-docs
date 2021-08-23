import { Navbar } from "./components/navbar.js";

const MainTemplate = `
    <div>
    <Navbar/>
    All content will appear below the horizontal line.
    <hr>
    <router-view></router-view>
    </div>
`;

import { indexviews } from "./views/indexViews.vue.js";
import { pageviews } from "./views/pageViews.vue.js";

import store from "./store/index.js";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: indexviews,
      name: "Main page",
    },
    {
      path: "/page/:name",
      component: pageviews,
      name: "Pages",
    },
  ],
});

const app = new Vue({
  el: "#app",
  components: {
    Navbar,
  },
  data() {
    return {
      pageStructure: {},
    };
  },
  created() {
    this.getPageStructure();
  },
  methods: {
    getPageStructure() {
      axios
        .get("page/page-composition.json")
        .then((res) => {
          this.pageStructure = res.data;
          console.log(res.data);
          store.dispatch("updatePageStructureAction", this.pageStructure);
        })
        .catch((err) => console.log(err));
    },
  },
  template: MainTemplate,
  router,
  store,
});

export { app };
