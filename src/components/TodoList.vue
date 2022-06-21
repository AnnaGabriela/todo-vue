<script setup>
  import TodoItem from "./TodoItem.vue";
  import { useTodoStore } from "@/stores/todos";
  import { useCategoryStore } from "@/stores/categories";
  import { reactive } from "vue";

  const store = useTodoStore();
  const categoryStore = useCategoryStore();
  const state = reactive({ newItemTitle: "" });

  const updateValue = (e) => {
    state.newItemTitle = e.target.value;
  };

  const addNewItem = (e) => {
    if (e.keyCode === 13 && state.newItemTitle !== "") {
      store.addTodo(state.newItemTitle, categoryStore.selectedCategory);
      state.newItemTitle = "";
    }
  };
</script>

<template>
  <div className="todo-list">
    <input
      type="text"
      class="new-item-input"
      :value="state.newItemTitle"
      v-on:input="updateValue"
      v-on:keydown="addNewItem"
      placeholder="+ Digite uma nova tarefa"
    />
    <div
      v-for="todo in store.todos.filter(
        (t) => t.category_id === categoryStore.selectedCategory
      )"
      :key="todo.id"
    >
      <TodoItem
        :todo="todo"
        :updateStatus="() => store.updateStatus(todo.id)"
        :updateText="store.updateText"
        :deleteTodo="() => store.deleteTodo(todo.id)"
      />
    </div>
  </div>
</template>

<style scoped>
  .todo-list {
    background-color: white;
    max-height: 400px;
    overflow: scroll;
    min-width: 200px;
  }

  .new-item-input {
    width: 100%;
    height: 45px;
    border: 0;
    outline: none;
    border-bottom: 1px solid #ddd;
    font-size: 1em;
    box-shadow: none;
    font-weight: 200;
    padding: 0 20px;
  }

  @media screen and (min-width: 310px) {
    .todo-list {
      min-width: 300px;
    }
  }

  @media screen and (min-width: 720px) {
    .todo-list {
      min-width: 500px;
    }
  }
</style>
