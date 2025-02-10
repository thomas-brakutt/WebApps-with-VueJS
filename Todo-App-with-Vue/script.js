Vue.createApp({
  data() {
    return {
      todos: [], // Array für alle Todos
      newTodo: "", // Text des neuen Todos
      error: "", // Fehlermeldung, falls das Eingabefeld leer ist
      filter: "all", // Aktueller Filter: "all", "open" oder "done"
    };
  },

  methods: {
    // Fügt ein neues Todo hinzu
    addTodo() {
      const trimmedTodo = this.newTodo.trim();

      if (trimmedTodo === "") {
        this.error = "Bitte gib einen gültigen Todo-Text ein!";
        setTimeout(() => {
          this.error = "";
        }, 2000);
        return; // Beendet die Funktion, falls das Feld leer ist
      }

      if (trimmedTodo.length < 5) {
        this.error = "Bitte gib mehr als 5 Buchstaben ein!";
        setTimeout(() => {
          this.error = "";
        }, 2000);
        return; // Beendet die Funktion, falls die Eingabe zu kurz ist
      }

      // Todo hinzufügen, wenn alle Bedingungen erfüllt sind
      this.todos.push({ text: trimmedTodo, done: false });
      this.newTodo = "";
      this.error = "";
    },

    removeDone() {
      this.todos = this.todos.filter((todo) => !todo.done);
    },
  },

  computed: {
    filteredTodos() {
      if (this.filter === "open") {
        return this.todos.filter((todo) => !todo.done);
      } else if (this.filter === "done") {
        return this.todos.filter((todo) => todo.done);
      } else {
        return this.todos; // Standard: Alle Todos anzeigen
      }
    },
  },
}).mount("#app");
