import Breadcrumb from "./components/Breadcrumb.js";
import Nodes from "./components/Nodes.js";

function App() {
  this.state = {
    nodeList: [],
    crumbList: [],
  };

  const appElem = document.querySelector(".App");

  const breadcrumb = new Breadcrumb({
    parentElem: appElem,
    initialState: this.state.crumbList,
  });

  const nodes = new Nodes({
    parentElem: appElem,
    initialState: this.state.nodeList,
  });

  this.setState = (newState) => {
    this.state = newState;
    console.log("state", this.state);
    nodes.setState(this.state.nodeList);
  };

  breadcrumb.render();
  nodes.render();

  this.init = async () => {
    try {
      fetch("https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev")
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            nodeList: res,
            crumbList: [],
          });
        });
    } catch (err) {
      console.log("에러", err);
    }
  };
}

const app = new App();
app.init();
