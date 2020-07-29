<template>
    <ul>
        <li v-for="checkbox in checkboxes" :key="checkbox.id">
            <p :class="{checked: checkbox.checked}" @click="changeChecked(checkbox.id)">{{checkbox.title}}</p>
            <div @click="deleteOneCheckbox(checkbox.id)">
                <img src="./../assets/icons8-удалить.svg" alt="Delete">
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        props: ["checkboxes", "itemId"],
        methods: {
            changeChecked(checkboxId) {
                this.$store.dispatch('changeChecked', {itemId: this.itemId, checkboxId})
            },
            deleteOneCheckbox(checkboxId) {
                this.$store.dispatch('deleteCheckbox', {itemId: this.itemId, checkboxId})
            }
        }
    }
</script>

<style>
    ul li {
        display: -webkit-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    ul li p,
    ul li div {
        cursor: pointer
    }
    ul li p:hover {
        text-decoration: line-through;
    }
    ul li p.checked {
        text-decoration: line-through;
    }
    p {
        display: block;
        margin-block-start: 0.5em;
        margin-block-end: 0.5em;
    }
    ul {
        list-style-type: none;
        margin-block-start: 0em;
        margin-block-end: 0em;
        padding-inline-start: 0px;
    }
</style>