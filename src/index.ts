// let hello: string = "hello typescript";
// document.querySelectorAll(".app")[0].innerHTML = hello;

import Vue from "vue";
import Hello from "./components/Hello.vue";

// let app = new Vue({
//   el: ".app",
//   data: { name: "Vue & Typescript" },
//   template: `<h1>{{ name }}</h1>`,
// });

let app = new Vue({
  el: ".app",
  components: { Hello },
  template: `<hello/>`,
});
