import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        todos: [{body: 'fdsfsdfdsf', completed: false}]
    },
    mutations: {
        ADD_TODO(state, todoItem) {
            state.todos.push({
                body: todoItem,
                completed: false
            })
        },
        REMOVE_TODO(state, todo) {
            var todos = state.todos
            todos.splice(todos.indexOf(todo), 1)
        },
        COMPLETE_TODO(state, todo) {
            state.todos.map(e => {
                e.body === todo.body ? todo.completed = !todo.completed : e
            })
        }
    },
    actions: {
        addTodo({commit}, todoItem) {
            commit('ADD_TODO', todoItem)
        },
        removeTodo({commit}, todo) {
            commit('REMOVE_TODO', todo)
        },
        completeTodo({commit}, todo) {
            commit('COMPLETE_TODO', todo)
        }
    }
})