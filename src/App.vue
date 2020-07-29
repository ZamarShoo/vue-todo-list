<template>
    <div>
        <TodoItem />
        <CreateNewElement />
    </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";
import CreateNewElement from "@/components/CreateNewElement";

export default {
  name: 'App',
  components: {
      TodoItem, CreateNewElement
  }
}
</script>

<style>
    body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -o-font-smoothing: antialiased;
        font-family: 'Open Sans', sans-serif;
    }
</style>
