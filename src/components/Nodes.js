export default function Nodes({ parentElem, initialState, onClick }) {
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
          .map((node) => {
            console.log(node);
            return node.type === "DIRECTORY"
              ? `<div class="Node" data-node-type=${node.type} data-node-id=${node.id} data-node-name=${node.name}><img src="/assets/directory.png" />
            <div>${node.name}</div></div>`
              : `<div class="Node" data-node-type=${node.type} data-node-id=${node.id} data-node-name=${node.name}><img src="/assets/file.png" />
            <div>${node.name}</div></div>`;
          })
          .join(""))
      : "";
  };

  this.currentElem.addEventListener("click", (e) => {
    onClick(e);
  });
}
