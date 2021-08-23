// import axios from "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js;";

const docsList = Vue.component("docsList", {
  template: `
    <div>
    <ul>
    <li v-for="(item, index) in pages.pages"><a class="active" :href='"#/page/"+item.route'>{{ item.name }}</a></li>
    </ul>
    </div>
  `,
  data() {
    return {};
  },
  computed: {
    pages() {
      return this.$store.state.pageStructure;
    },
  },
  methods: {
    getStore() {
      var arr = this.pages.pages.filter(function (el) {
        return el.name == "Tutorial";
      });

      console.log(arr[0].route);
    },
  },
});

export { docsList };
