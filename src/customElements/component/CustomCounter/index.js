import { store } from '../../domain/store.js';

class CustomCounter extends HTMLElement {
  constructor() {
    super();
    store.setState('counter', 0);
    this.render();
  }

  render() {
    this.innerHTML = `
      Counter : ${store.state.counter}
    `;
  }
}
export default CustomCounter;
