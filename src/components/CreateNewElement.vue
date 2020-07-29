<template>
    <div>
        <div v-if="isPopupOpen" class="popup-out">
            <div class="popup-in">
                <div class="popup">
                    <div class="delete-item-popup" @click="closePopup">
                        <img src="./../assets/icons8-удалить.svg" alt="">
                    </div>
                    <input type="text" v-model="title">
                    <textarea v-model="description"></textarea>
                    <Colors @colorChange="colorEdit"/>
                    <button class="create" @click="addItem">Create new item</button>
                </div>
            </div>
        </div>
        <div class="new-elem-wrapper" @click="closePopup">
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script>
    import Colors from "@/components/Colors";
    import {required, minLength, maxLength} from 'vuelidate/lib/validators'

    export default {
        name: 'create-new-element',
        data: function() {
            return {
                isPopupOpen: false,
                title: '',
                description: '',
                color: null,
            }
        },
        validations: {
            title: {required, minLength: minLength(3), maxLength: maxLength(30)}
        },
        components: {
            Colors
        },
        methods: {
            colorEdit(currentColor) {
                this.color = currentColor
            },
            addItem() {
                this.$store.dispatch('addItem', {title: this.title, description: this.description, color: this.color})
                this.title = ''
                this.description = ''
                this.color = ''
                this.isPopupOpen = false
            },
            closePopup() {
                this.isPopupOpen = !this.isPopupOpen
            }
        }
    }
</script>

<style>
    .new-elem-wrapper {
        position: fixed;
        top: 30px;
        left: 30px;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        border: 3px solid #120a8f;
        display: grid;
        align-content: center;
        justify-items: center;
        opacity: .7;
        cursor: pointer;
    }
    .delete-item-popup {
        position: absolute;
        top: 20px;
        right: 40px;
        cursor: pointer;
    }
    .new-elem-wrapper span {
        height: 3px;
        border-radius: 5px;
        width: 90%;
        background-color: #120a8f;
    }
    .new-elem-wrapper span:nth-child(2) {
        transform: rotate(90deg);
        margin-top: -1px;
    }
    button.create {
        margin-left: 0 !important;
        text-align: center !important;
        padding: 1em 1.5em !important;
        padding: 2em 2.5em !important;
        width: auto;
        border-radius: 40px;
    }
</style>