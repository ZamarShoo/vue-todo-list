<template>
    <div>
        <div class="button-wrapper">
            <input type="text"
                   :style="{borderColor: this.color}"
                   v-model="input"
                   :class="{invalid:
                    ($v.input.$dirty && !$v.input.required)
                   || ($v.input.$dirty && !$v.input.minLength) }"
                   placeholder="I need to...">
            <button :style="{backgroundColor: this.color}" @click="addOneCheckbox">Add Checkbox</button>
        </div>
        <p v-if="$v.input.$dirty && !$v.input.required">This input is empty</p>
        <p v-if="$v.input.$dirty && !$v.input.minLength">This input is short</p>
    </div>
</template>

<script>
    import {required, minLength} from 'vuelidate/lib/validators'


    export default {
        props: ['itemId', 'color'],
        data: () => ({
            input: ''
        }),
        validations: {
            input: {required, minLength: minLength(3)}
        },
        methods: {
            addOneCheckbox() {
                if (this.$v.$invalid) {
                    this.$v.$touch()
                    return
                }
                this.$store.dispatch('addCheckbox', {itemId: this.itemId, text: this.input})
                this.input = ''
            }
        }
    }
</script>

<style>
    .button-wrapper {
        display: -webkit-box;
        display: flex;
    }
    .invalid {
        border: 1px solid red;
    }
    button {
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        color: white;
        height: 36px;
        width: 150px;
        display: -webkit-box;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        outline: none;
        border-radius: 20px;
        margin-left: 15px;
        cursor: pointer;
        background-color: black;
    }
</style>