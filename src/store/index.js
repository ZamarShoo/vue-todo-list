import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        todoItems: [
            {
                id: 0,
                title: 'title 0',
                description: 'There is will be description',
                color: 'lightblue',
                checkboxes: [
                    {id: 0, title: 'checkbox 00', checked: false},
                    {id: 1, title: 'checkbox 01', checked: false},
                    {id: 2, title: 'checkbox 02', checked: false},
                    {id: 3, title: 'checkbox 03', checked: true},
                    {id: 4, title: 'checkbox 04', checked: false},
                ]
            },
            {
                id: 1,
                title: 'title 1',
                description: 'There is will be description for second item trem' +
                    ' is will be description for second item where description for second' +
                    ' item There is will be description for second item',
                color: 'tomato',
                checkboxes: [
                    {id: 0, title: 'checkbox 10', checked: false},
                    {id: 1, title: 'checkbox 11', checked: true},
                    {id: 2, title: 'checkbox 12', checked: false},
                    {id: 3, title: 'checkbox 13', checked: true},
                    {id: 4, title: 'checkbox 14', checked: false},
                    {id: 5, title: 'checkbox 15', checked: true},
                    {id: 6, title: 'checkbox 16', checked: false},
                ]
            },
        ]
    },
    mutations: {
        ADD_ITEM(state, {title, description, color}) {
            state.todoItems.push({
                id: state.todoItems.length === 0 ? 0 : state.todoItems[state.todoItems.length - 1].id + 1,
                title: title,
                description: description,
                color: color === null ? color = 'black' : color,
                checkboxes: []
            })
        },
        DELETE_ITEM(state, itemId) {
            state.todoItems.forEach(function(el, i) {
                if (el.id == itemId) state.todoItems.splice(i, 1)
            })
        },
        ADD_CHECKBOX(state, {itemId, text}) {
            const item = state.todoItems[itemId]
            item.checkboxes.push({
                id: item.checkboxes.length === 0
                    ? 0
                    : item.checkboxes[item.checkboxes.length - 1].id + 1,
                title: text,
                checked: false
            })
        },
        DELETE_CHECKBOX(state, {itemId, checkboxId}) {
            state.todoItems.map(i => i.id === itemId
                ? i.checkboxes.forEach(function(el, j) {
                    if (el.id == checkboxId) i.checkboxes.splice(j, 1)
                  })
                : i)
        },
        CHANGE_ITEM(state, {itemId, title, description, color}) {
            state.todoItems[itemId].title = title
            state.todoItems[itemId].description = description
            state.todoItems[itemId].color = color
        },
        CHANGE_CHECKED(state, {itemId, checkboxId}) {
            state.todoItems.map(i => i.id === itemId
            ? { ...i, checkboxes: i.checkboxes.map(c => c.id == checkboxId
                        ? c.checked = !c.checked
                        : c
                    )}
                    : i)
        }
    },
    actions: {
        addItem({commit}, {title, description, color}) {
            commit('ADD_ITEM', {title, description, color})
        },
        deleteItem({commit}, itemId) {
            commit('DELETE_ITEM', itemId)
        },
        addCheckbox({commit}, {itemId, text}) {
            commit('ADD_CHECKBOX', {itemId, text})
        },
        deleteCheckbox({commit}, {itemId, checkboxId}) {
            commit('DELETE_CHECKBOX', {itemId, checkboxId})
        },
        changeItem({commit}, {itemId, title, description, color}) {
            commit('CHANGE_ITEM', {itemId, title, description, color})
        },
        changeChecked({commit}, {itemId, checkboxId}) {
            commit('CHANGE_CHECKED', {itemId, checkboxId})
        }
    }
})