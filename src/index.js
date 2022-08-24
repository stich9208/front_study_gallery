import Breadcrumb from "./components/Breadcrumb.js";
import Nodes from "./components/Nodes.js";

function App() {
  this.state = {
    nodeList: [],
    crumbList: [],
  };

  const onClickNode = (e) => {
    let clickedElem = e.target.closest(".Node");
    if (clickedElem.dataset.nodeType === "DIRECTORY") {
      try {
        fetch(
          `https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev/${clickedElem.dataset.nodeId}`
        )
          .then((res) => res.json())
          .then((res) =>
            this.setState({
              nodeList: res,
              crumbList: [
                ...this.state.crumbList,
                {
                  name: clickedElem.dataset.nodeName,
                  id: clickedElem.dataset.nodeId,
                },
              ],
            })
          );
      } catch (err) {
        console.log(err);
      }
    }
  };

  const appElem = document.querySelector(".App");

  const breadcrumb = new Breadcrumb({
    parentElem: appElem,
    initialState: this.state.crumbList,
  });

  const nodes = new Nodes({
    parentElem: appElem,
    initialState: this.state.nodeList,
    onClick: (e) => onClickNode(e),
  });

  this.setState = (newState) => {
    console.log(newState);
    this.state = newState;
    nodes.setState(this.state.nodeList);
    breadcrumb.setState(this.state.crumbList);
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
