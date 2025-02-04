/* 
vorheriger Code:

const myDiv = document.getElementById("myDiv");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", () => {
  myButton.classList.toggle("darkMod");
  myDiv.classList.toggle("darkModDiv");

  if (document.title === "Good Morning") {
    document.title = "Good Night";
  } else document.title = "Good Morning";
});
*/

Vue.createApp({
  data() {
    return {
      text: "Good Night",
      darkDiv: "darkModDiv",
      darkBtn: "darkMod",
    };
  },
  methods: {
    active() {
      // Wählt das Element mit der ID "myDiv" aus und fügt die CSS-Klasse hinzu
      document.querySelector("#myDiv").classList.toggle(this.darkDiv);
      // Wählt das Element mit der ID "myButton" aus und fügt die CSS-Klasse hinzu
      document.querySelector("#myButton").classList.toggle(this.darkBtn);

      // überprüft welcher titel aktiv ist / angezeigt wird
      if (document.title === "Good Morning") {
        document.title = "Good Night";
      } else document.title = "Good Morning";
    },
  },
}).mount("#myDiv");
