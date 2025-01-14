Vue.createApp({
  data() {
    return {
      userName: "Peter Parker",
      logIn: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
  },
}).mount(".inside");
