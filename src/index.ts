// let hello: string = "hello typescript";
// document.querySelectorAll(".app")[0].innerHTML = hello;

import Vue from "vue";
// import Hello from "./components/Hello.vue";

// let app = new Vue({
//   el: ".app",
//   data: { name: "Vue & Typescript" },
//   template: `<h1>{{ name }}</h1>`,
// });

// let app = new Vue({
//   el: ".app",
//   components: { Hello },
//   template: `<hello/>`,
// });

import EmployeeQuery from "@pinkypinky/vue-employee-query";

let app = new Vue({
  el: ".app",
  components: { EmployeeQuery },
  template: `<employee-query @query="getQuery" :department="department"/>`,
  data() {
    return {
      department: [
        { department: "技术部", departmentId: 1 },
        { department: "产品部", departmentId: 2 },
        { department: "市场部", departmentId: 3 },
        { department: "运营部", departmentId: 4 },
      ],
    };
  },
  methods: {
    getQuery(param: any) {
      console.log(param);
    },
  },
});
