<template>
    <div id="current-todos" class="container">
        <ul class="list-group">
            <li class="list-group-item" v-for="todo in todos" v-bind:key="todo.completed" v-bind:class="{completetrue: todo.completed">
                {{todo.body}}
                <div class="btn-group">
                    <button type="button" @click="complete(todo)" class="btn btn-default btn-sm">
                        <span class="glyphicon glyphicon-ok-circle"></span> Complete
                    </button>
                    <button type="button" @click="remove(todo)" class="btn btn-default btn-sm">
                        <span class="glyphicon glyphicon-remove-circle"></span> Remove
                    </button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        methods: {
            complete(todo){
                this.$store.dispatch('completeTodo', todo)
            },
            remove(todo){
                this.$store.dispatch('removeTodo', todo)
            }
        },
        computed: {
            todos(){
                return this.$store.state.todos
            }
        }
    }
</script>
<style>
    .btn-group{
        float: right;
    }
    .completetrue {
        color: red;
    }
</style>