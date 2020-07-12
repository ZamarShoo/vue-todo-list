<template>
    <div id="get-todo" class="container">
        <input class="form-control"
               v-model="todoItem"
               placeholder="I need to...">
        <button class="btn btn-primary" @click="addTodo">Add Todo</button>
    </div>
</template>
<script>
    export default{
        data: () => ({
          todoItem: ''
        }),
        methods: {
            addTodo(){
                this.$store.dispatch('addTodo', this.todoItem)
                this.todoItem = ''
            }
        }
    }
</script>