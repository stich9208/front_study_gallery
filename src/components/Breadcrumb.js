export default function Breadcrumb({ parentElem, initialState }) {
  this.state = initialState;
  this.currentElem = document.createElement("nav");
  this.currentElem.className = "Breadcrumb";

  parentElem.appendChild(this.currentElem);

  console.log(this.state);

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    this.currentElem.innerHTML = `<div>root</div>${
      this.state.length
        ? this.state.map((crumb) => `<div>${crumb.name}</div>`).join("")
        : ""
    }`;
  };
}
