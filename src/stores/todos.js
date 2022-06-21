import { defineStore } from "pinia";

const todos = [
  { id: 1, text: "lorem ipsum 1", done: false, category_id: 0 },
  { id: 2, text: "lorem ipsum 2", done: false, category_id: 1 },
  { id: 3, text: "lorem ipsum 3", done: true, category_id: 2 },
  { id: 4, text: "lorem ipsum 4", done: true, category_id: 3 },
];

export const useTodoStore = defineStore({
  id: "todos",
  state: () => ({
    todos,
  }),
  actions: {
    addTodo(text, categoryId) {
      this.todos = [
        {
          id: this.todos.length + 1,
          text,
          done: false,
          category_id: categoryId,
        },
        ...this.todos,
      ];
    },
    updateStatus(id) {
      this.todos.map((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
      });
    },
    updateText(id, text) {
      this.todos.map((todo) => {
        if (todo.id === id) {
          todo.text = text;
        }
      });
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
  },
});
