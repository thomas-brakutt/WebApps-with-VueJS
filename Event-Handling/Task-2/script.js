Vue.createApp({
  data() {
    return {
      x: 12,
      y: 4,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
    };
  },

  methods: {
    removeFruit(fruitToRemove) {
      // Neues Array erstellen, das nur die Früchte enthält, die nicht entfernt werden sollen
      let updatedFruitBasket = [];

      // Durch das ursprüngliche Array iterieren
      for (let i = 0; i < this.fruitBasket.length; i++) {
        // Die aktuelle Frucht
        let fruit = this.fruitBasket[i];

        // Wenn die aktuelle Frucht NICHT die zu entfernende Frucht ist,
        // wird sie zum neuen Array hinzugefügt
        if (fruit !== fruitToRemove) {
          updatedFruitBasket.push(fruit);
        }
      }

      // Das alte Array wird durch das neue ersetzt
      this.fruitBasket = updatedFruitBasket;
    },
  },
}).mount("#app");

/* 
advanced Alternativen:

Variante von Joe:
------------------

methods: {
  removeFruit(fruitToRemove) {
    this.fruitBasket = this.fruitBasket.filter((fruit) => {
      return fruit !== fruitToRemove;
    });
  }
}

andere Alternative:
-------------------

methods: {
  removeFruit(fruitToRemove) {
    // 'filter' geht jedes Element des Arrays durch und gibt ein neues Array zurück.
    // Die Funktion im 'filter' prüft, ob das Element behalten werden soll.
    this.fruitBasket = this.fruitBasket.filter(function(fruit) {
      // Wenn die Frucht nicht die zu entfernende Frucht ist, wird sie behalten.
      return fruit !== fruitToRemove;
    });
  }
}

mit forEach-Schleife:
----------------------

methods: {
  removeFruit(fruitToRemove) {
    // Neues Array erstellen, das nur die Früchte enthält, die nicht entfernt werden sollen
    let neuesFruchtArray = [];

    // Durch das ursprüngliche Array iterieren mit forEach
    this.fruitBasket.forEach(function(fruit) {
      // Wenn die aktuelle Frucht NICHT die zu entfernende Frucht ist,
      // wird sie zum neuen Array hinzugefügt
      if (fruit !== fruitToRemove) {
        neuesFruchtArray.push(fruit);
      }
    });
    
    // Das alte Array wird durch das neue ersetzt
    this.fruitBasket = neuesFruchtArray;
  }
}



*/
