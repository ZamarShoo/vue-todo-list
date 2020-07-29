<template>
    <div class="popup-out">
        <div class="popup-in">
            <div class="popup">
                <div class="edit-popup-wrapper">
                    <div v-if="this.isEditMode" @click="editItem" class="edit-popup-item">
                        <img src="./../../assets/icons8-галочка.svg" alt="">
                    </div>
                    <div v-if="!this.isEditMode" @click="editMode" class="edit-popup-item">
                        <img src="./../../assets/icons8-редактировать.svg" alt="">
                    </div>
                    <div class="delete-popup-item" @click="closePopup">
                        <img src="./../../assets/icons8-удалить.svg" alt="">
                    </div>
                </div>
                <h2 v-if="!this.isEditMode">{{item.title}}</h2>
                <div class="title-div">
                    <input v-if="this.isEditMode"
                           v-model="title"
                           :style="{borderColor: item.color}"
                           :class="{invalidTitle:
                    ($v.title.$dirty && !$v.title.required)
                   || ($v.title.$dirty && !$v.title.minLength) || ($v.title.$dirty && !$v.title.maxLength) }" type="text">
                </div>
                <p v-if="$v.title.$dirty && !$v.title.required">This title is empty</p>
                <p v-if="$v.title.$dirty && !$v.title.minLength">This title is short</p>
                <p v-if="$v.title.$dirty && !$v.title.maxLength">This title is long</p>
                <p v-if="!this.isEditMode" class="desc-p">{{item.description}}</p>
                <div>
                    <textarea v-if="this.isEditMode"
                              :style="{borderColor: item.color}"
                              v-model="description"></textarea>
                </div>
                <Colors v-if="isEditMode" @colorChange="colorEdit" />
                <div class="wrapperCheckbox" :style="{borderColor: item.color}">
                    <Checkboxes :checkboxes="item.checkboxes" :itemId="item.id" />
                    <Input :color="item.color"  :itemId="item.id" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Checkboxes from "@/components/Checkboxes";
    import Input from "@/components/Input";
    import Colors from "@/components/Colors";
    import {required, minLength, maxLength} from 'vuelidate/lib/validators'
    export default {
        props: ['item'],
        data: function () {
            return {
                isEditMode: false,
                title: this.item.title,
                description: this.item.description,
                color: this.item.color
            }
        },
        validations: {
            title: {required, minLength: minLength(3), maxLength: maxLength(30)}
        },
        components: {
            Checkboxes, Input, Colors
        },
        methods: {
            closePopup() {
                this.$emit('closePopup')
            },
            editMode() {
                this.isEditMode = !this.isEditMode
            },
            colorEdit(colors) {
                this.color = colors
            },
            editItem() {
                if (this.$v.$invalid) {
                    this.$v.$touch()
                    return
                }
                this.$store.dispatch('changeItem',
                    {
                        itemId: this.item.id, title: this.title,
                        description: this.description, color: this.color
                    })
                this.isEditMode = !this.isEditMode
            }
        }
    }
</script>


<style>
    .invalidTitle {
        border: 2px solid tomato;
    }
    textarea {
        font-family: 'Open Sans', sans-serif;
        width: 90%;
        border: 2px solid;
        border-radius: 20px;
        padding: 20px;
        margin: 30px 0;
        min-height: 90px;
        resize: vertical;
    }
    input[type="text"] {
        width: 60%;
        padding: 5px 20px;
        font-size: 18px;
        border-radius: 20px;
        outline: none;
        border: 2px solid;
    }
    .title-div input[type="text"] {
        font-size: 22px;
        font-weight: bold;
    }
    .delete-popup-item {
        width: 24px;
        height: 24px;
        cursor: pointer;
        transition: .3s;
        opacity: .6;
    }
    .edit-popup-item {
        width: 24px;
        height: 24px;
        cursor: pointer;
        transition: .3s;
        opacity: .6;
    }
    .delete-popup-item:hover,
    .edit-popup-item:hover {
        opacity: 1;
    }
    .edit-popup-wrapper {
        position: absolute;
        top: 15px;
        right: 40px;
        height: 24px;
        width: 55px;
        display: -webkit-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .wrapperCheckbox {
        border: 2px solid;
        border-radius: 20px;
        padding: 20px;
        margin-bottom: 30px;
        background-color: rgba(10,24,77,.02);
    }
    .desc-p {
        margin: 30px 0 50px;
    }
    .popup-out {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: -webkit-box;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 99;
    }
    .popup-in {
        width: 800px;
        min-height: 30vh;
        max-height: 95vh;
        background-color: white;
        overflow-y: scroll;
    }
    .popup {
        position: relative;
        height: auto;
        padding: 40px;
        overflow-y: hidden;
    }
</style>