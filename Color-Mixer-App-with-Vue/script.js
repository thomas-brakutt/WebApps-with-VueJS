const red = document.querySelector("#red"); // Zugriff auf den roten Slider
const green = document.querySelector("#green"); // Zugriff auf den grünen Slider
const blue = document.querySelector("#blue"); // Zugriff auf den blauen Slider

// Funktion für Zuweisung der Slider zur Farbänderung
function mainColor() {
  const colorCode = document.querySelector("p"); // Zugriff auf das "p-Element" (Anzeige oben rechts)
  const main = document.querySelector("main"); // Zugriff auf das "main-Element"

  let redSlider = red.value; // Variable für roten Slider der den Wert speichert
  let greenSlider = green.value; // Variable für grünen Slider der den Wert speichert
  let blueSlider = blue.value; // Variable für blauen Slider der den Wert speichert

  let newMainColor =
    "rgb(" + redSlider + "," + greenSlider + "," + blueSlider + ")"; // Variable zum speichern der durch die Slider veränderten Werte für aktuellen Farbcode

  colorCode.innerText = newMainColor; // Text im "p-Element" wird mit den aktuellen Werten aus "newMainColor" überschrieben
  main.style.backgroundColor = newMainColor; // backgroundColor-Wert im "main-Element" wird mit "newMainColor" überschrieben / aktualisiert
}
mainColor(); // Funktion wird ausgeführt

// EventListener auf die 3 Slider mit der Ausführung der "mainColor-Funktion" zum aktualisieren der veränderten Werte
red.addEventListener("input", () => {
  mainColor();
});
green.addEventListener("input", () => {
  mainColor();
});
blue.addEventListener("input", () => {
  mainColor();
});
