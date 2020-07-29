<template>
    <div>
        <ItemPopup v-if="isPopupOpen" :item="item" @closePopup="closeInfoPopup"/>
        <div @click="openPopup" class="items-elem" :style="{borderColor: item.color}">
            <div class="rec-l" :style="{backgroundColor: item.color}"></div>
            <div class="elem-info">
                <div class="edit-wrapper">
                    <div class="delete-item" @click="deleteOneItem(item.id)">
                        <img src="./../assets/icons8-удалить.svg" alt="">
                    </div>
                </div>
                <h2>{{item.title}}</h2>
                <p>{{previewDescription(item.description)}}<span v-if="item.description.length > 150">...</span></p>
                <div class="count-checkboxes">
                    <p>{{countOfCheckboxes(item.checkboxes)}}</p>
                    <span>/</span>
                    <p>{{item.checkboxes.length}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ItemPopup from "@/components/popup/ItemPopup";
    export default {
        props: ['item'],
        data: () => ({
            isPopupOpen: false
        }),
        components: {
            ItemPopup
        },
        methods: {
            openPopup() {
                this.isPopupOpen = true
            },
            closeInfoPopup() {
                this.isPopupOpen = false
            },
            deleteOneItem(itemId) {
                this.$store.dispatch('deleteItem', itemId)
            },
            countOfCheckboxes(el) {
                let count = 0;
                el.map (e => {
                    if (e.checked) { count++ }
                })
                return count
            },
            previewDescription(des) {
                return des.substr(0, 100)
            }
        },
    }
</script>

<style>
    .items-elem {
        position: relative;
        border: 2px solid;
        display: grid;
        grid-template-columns: 1fr 5fr;
        column-gap: 1.5em;
        background-color: white;
        box-shadow: 0 10px 20px rgba(10,24,77,.25);
        height: 250px;
        cursor: pointer;
        transition: .3s;
    }
    .items-elem h2,
    .items-elem p {
        opacity: .8;
    }
    .items-elem h2 {
        width: 85%;
    }
    .elem-info {
        padding-right: 2em;
        padding-top: .8em;
    }
    .items-elem:hover,
    .items-elem:focus {
        margin-top: -10px;
    }
    .rec-l {
        height: 100%;
        width: 100%;
    }
    .delete-item {
        width: 24px;
        height: 24px;
        cursor: pointer;
        transition: .3s;
        opacity: 0;
    }
    .edit-wrapper {
        position: absolute;
        top: 15px;
        right: 15px;
        height: 24px;
        width: 24px;
        display: -webkit-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .items-elem:hover .delete-item,
    .items-elem:hover .edit-item {
        opacity: 0.6;
    }
    .items-elem:hover .delete-item:hover,
    .items-elem:hover .edit-item:hover {
        opacity: 1;
    }
    .count-checkboxes {
        display: -webkit-box;
        display: flex;
        align-items: center;
        position: absolute;
        bottom: 10px;
    }
    .count-checkboxes span {
        margin: 0 3px;
    }
</style>