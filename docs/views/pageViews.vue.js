const pageviews = Vue.component("pageViews", {
  template: `
        <div>
            Test
            {{ pages.document }}
            {{ getPage() }}
            <span v-html="renderPage()"></span>
        </div>
    `,
  props: {
    page_title: String,
  },
  data() {
    return {
      rawMd: "",
    };
  },
  computed: {
    pages() {
      // var arr2 = this.$store.state.pageStructure;
      var a = this.$route.params.name;
      var arr = this.$store.state.pageStructure.pages.filter(function (el) {
        return el.route == a;
      });
      return arr[0];
    },
  },
  methods: {
    getPage() {
      axios
        .get("page/" + this.pages.document)
        .then((res) => {
          // this.pageStructure = res.data;
          this.rawMd = res.data;
          console.log(this.rawMd);
          console.log(typeof this.rawMd);
        })
        .catch((err) => console.log(err));
    },
    renderPage() {
      var md = window.markdownit();
      var result = md.render(this.rawMd);
      return result;
    },
    val() {
      return "Stringgggggg";
    },
  },
});

export { pageviews };
