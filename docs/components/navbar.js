import { docsList } from "../components/docsList.vue.js";

const Navbar = Vue.component("navbar", {
  template: `
        <nav>
        <docsList/>
        </nav>
    `,
});

export { Navbar };
