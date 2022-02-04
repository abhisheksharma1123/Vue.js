const App = {
  data() {
    return {
      title: "Hi Vue js!",
      items: ["ab", "bc", "cd"],
      itemObj: { name: "abhishek", isStudent: "false", isDev: "true" },
      input: "",
      numbers: [1, 2, 3, 4, 5],
      havingHTML: `<a href="https://google.com" target="_blank">Go to google</a>`,
    };
  },
  methods: {
    onClick(i) {
      alert(`you clicked ${i}`);
    },
  },
  computed: {
    evenNumbers() {
      return this.numbers.filter((number) => number % 2 === 0);
    },
  },
};

Vue.createApp(App).mount("#root");
