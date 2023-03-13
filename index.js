import CustomCounter from "./src/component/CustomCounter/index.js"
import { store } from "./src/domain/store.js";

console.log('index.js imported')
store.create();
customElements.define('custom-counter', CustomCounter);