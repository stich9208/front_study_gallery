export default function Breadcrumb({ parentElem, initialState }) {
  this.state = initialState;
  this.currentElem = document.createElement("nav");
  this.currentElem.className = "Breadcrumb";

  parentElem.appendChild(this.currentElem);

  this.setState = (newState) => {
    this.state = newState;
  };

  this.render = () => {
    this.currentElem.innerHTML = `<div>root</div>${
      this.state.crumbList.length
        ? this.state.crumbList.map((crumb, idx) => `<div>${crumb}</div>`)
        : ""
    }`;
  };
}
