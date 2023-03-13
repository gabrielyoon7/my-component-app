import CustomCounter from "./src/customElements/component/CustomCounter/index.js"
import { store } from "./src/customElements/domain/store.js";

console.log('index.js imported')
store.create();
customElements.define('custom-counter', CustomCounter);
