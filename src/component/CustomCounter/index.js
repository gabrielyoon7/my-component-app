class CustomCounter extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  render() {
    this.innerHTML = `
      Counter : ${this.state}
    `
  }
}
export default CustomCounter;