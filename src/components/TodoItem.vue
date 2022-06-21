<script setup>
  import { reactive } from "vue";
  const store = defineProps({
    todo: {
      type: Object,
      required: true,
    },
    updateStatus: {
      type: Function,
      required: true,
    },
    updateText: {
      type: Function,
      required: true,
    },
    deleteTodo: {
      type: Function,
      required: true,
    },
  });

  const state = reactive({ isEditing: false, value: store.todo.text });

  const onChange = (e) => {
    state.value = e.target.value;
  };

  const updateWithNewValue = () => {
    state.isEditing = false;
    store.updateText(store.todo.id, state.value);
  };

  const onKeyDown = (e) => {
    e.keyCode === 13 && updateWithNewValue();
  };
</script>

<template>
  <div class="todo-item">
    <div
      class="todo-content"
      v-on:dblclick="
        () => {
          state.isEditing = true;
        }
      "
    >
      <input
        class="todo-checkbox"
        type="checkbox"
        :checked="store.todo.done"
        v-on:change="store.updateStatus"
      />
      <label
        v-if="!state.isEditing"
        :class="`todo-label ${store.todo.done ? 'todo-label-done' : ''}`"
      >
        {{ store.todo.text }}
      </label>
      <input
        v-else
        class="todo-input"
        :value="state.value"
        v-on:change="onChange"
        v-on:blur="updateWithNewValue"
        v-on:keydown="onKeyDown"
        autofocus="true"
      />
    </div>
    <button class="todo-delete-btn" v-on:click="store.deleteTodo">X</button>
  </div>
</template>

<style scoped>
  .todo-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    border-bottom: 1px solid #ddd;
    font-weight: 200;
    text-align: left;
    font-size: 1em;
  }

  .todo-checkbox {
    width: 1.8em;
    height: 1.8em;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 15px;
  }

  .todo-content {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 500px;
  }

  .todo-input {
    width: 100%;
  }

  .todo-input,
  .todo-input:focus {
    padding: 0;
    font-size: 1em;
    border: 0;
    box-shadow: none;
    outline: none;
    font-weight: 200;
  }

  .todo-label {
    width: 100%;
    text-align: justify;
    padding-right: 10px;
  }

  .todo-label-done {
    text-decoration: 0.2px line-through;
  }

  .todo-delete-btn {
    border: 0;
    background-color: transparent;
    color: #cc9a9a;
  }
</style>
