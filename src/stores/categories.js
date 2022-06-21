import { defineStore } from "pinia";

const categories = [
  { id: 0, name: "Geral" },
  { id: 1, name: "Estudos" },
  { id: 2, name: "Trabalho" },
  { id: 3, name: "Casa" },
];

export const useCategoryStore = defineStore({
  id: "categories",
  state: () => ({
    categories,
    selectedCategory: 0,
  }),
  actions: {
    setSelected(category) {
      this.selectedCategory = category;
    },
  },
});
