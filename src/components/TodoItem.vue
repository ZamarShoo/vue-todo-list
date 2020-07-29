<template>
    <div>
        <div class="items-wrapper">
            <ItemElem v-for="item in todoItems"
                 :key="item.id"
                :item="item"/>
        </div>
    </div>
</template>

<script>
    import ItemElem from "@/components/ItemElem";
    export default {

        components: {
            ItemElem
        },
        computed:  {
            todoItems() {
                return this.$store.state.todoItems
            }
        }
    }
</script>

<style>
    .items-wrapper {
        width: 80vw;
        margin: 100px auto;
        display: grid;
        grid-template-columns: repeat( auto-fill, minmax(400px, 1fr) );
        grid-gap: 1em;
    }
    @media screen and (max-width: 1100px) {
        .items-wrapper {
            width: 95vw;
            grid-template-columns: repeat( auto-fill, minmax(300px, 1fr) );
        }
    }
    @media screen and (max-width: 700px) {
        .popup-in {
            width: 100vw;
            min-height: 100vh;
            max-height: 100vh;
        }
    }
</style>