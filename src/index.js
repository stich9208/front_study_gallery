import Breadcrumb from "./components/Breadcrumb.js";

const app = document.querySelector(".App");

const breadcrumb = new Breadcrumb({
  parentElem: app,
  initialState: {
    crumbList: [],
  },
});

breadcrumb.render();
