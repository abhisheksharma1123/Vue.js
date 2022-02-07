// const App = {
//   data() {
//     return {
//       title: "Hi Vue js!",
//       items: ["ab", "bc", "cd"],
//       itemObj: { name: "abhishek", isStudent: "false", isDev: "true" },
//       input: "",
//       numbers: [1, 2, 3, 4, 5],
//       havingHTML: `<a href="https://google.com" target="_blank">Go to google</a>`,
//     };
//   },
//   methods: {
//     onClick(i) {
//       alert(`you clicked ${i}`);
//     },
//   },
//   computed: {
//     evenNumbers() {
//       return this.numbers.filter((number) => number % 2 === 0);
//     },
//   },
// };

// const app = Vue.createApp(App);
// app.component("component1", {
//   template: `<div>I am your child got this prop: {{text}}</div>`,
//   props: {
//     text: {
//       type: String,
//       default: "default",
//     },
//   },
// });
// // in case of array or objects type: Array or Object and their defaults should be written
// // as return of function

// app.mount("#root");
