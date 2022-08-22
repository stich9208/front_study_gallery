export default function Nodes({ parentElem, initialState }) {
  this.state = initialState;
  this.currentElem = document.createElement("div");
  this.currentElem.className = "Nodes";

  parentElem.appendChild(this.currentElem);

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    this.state.length
      ? (this.currentElem.innerHTML = this.state
          .map((node) =>
            node.type === "DIRECTORY"
              ? `<div class="Node"><img src="/assets/directory.png" />
            <div>${node.name}</div></div>`
              : `<div class="Node"><img src="/assets/file.png" />
            <div>${node.name}</div></div>`
          )
          .join(""))
      : "";
  };
}
