<template>
    <div class="colorWrapper">
        <label class="inputColor" :class="{selectedColor: colors == 'black'}">
            <input @change="colorEdit" value="black" v-model="colors" type="radio">
            <div style="background-color: black"></div>
        </label>
        <label class="inputColor" :class="{selectedColor: colors == 'lightblue'}">
            <input @change="colorEdit" value="lightblue" v-model="colors" type="radio">
            <div style="background-color: lightblue"></div>
        </label>
        <label class="inputColor" :class="{selectedColor: colors == 'darkolivegreen'}">
            <input @change="colorEdit" value="darkolivegreen" v-model="colors" type="radio">
            <div style="background-color: darkolivegreen"></div>
        </label>
        <label class="inputColor" :class="{selectedColor: colors == 'silver'}">
            <input @change="colorEdit" value="silver" v-model="colors" type="radio">
            <div style="background-color: silver"></div>
        </label>
        <label class="inputColor" :class="{selectedColor: colors == 'darkorange'}">
            <input @change="colorEdit" value="darkorange" v-model="colors" type="radio">
            <div style="background-color: darkorange"></div>
        </label>
        <label class="inputColor" :class="{selectedColor: colors == 'tomato'}">
            <input @change="colorEdit" value="tomato" v-model="colors" type="radio">
            <div style="background-color: tomato"></div>
        </label>
    </div>
</template>

<script>
    export default {
        props: ['color'],
        data: function () {
            return {
                colors: this.color
            }
        },
        methods: {
            colorEdit() {
                this.$emit('colorChange', this.colors)
            }
        }
    }
</script>

<style>
    .colorWrapper {
        display: -webkit-box;
        display: flex;
        justify-content: space-between;
        width: 250px;
        margin: -10px 0 20px;
    }
    .inputColor input {
        display: none;
    }
    .inputColor div {
        display: block;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        cursor: pointer;
        transition: 0.3s;
    }
    .inputColor:hover div,
    .selectedColor div {
        transform: scale(1.2);
    }
</style>