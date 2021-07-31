export default {
  data() {
    return {
      timeOut: "",
    };
  },
  methods: {
    debounce(func, waitTime = 1000) {
      clearTimeout(this.timeOut);
      this.timeOut = setTimeout(func, waitTime);
    },
  },
};
