const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredInput: "",
      tasksVisible: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.tasksVisible ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredInput);
    },
    // toggleList() {
    //   this.tasks = !this.tasks;
    // },
    toggleList() {
      this.tasksVisible = !this.tasksVisible;
    },
  },
});
app.mount("#assignment");
