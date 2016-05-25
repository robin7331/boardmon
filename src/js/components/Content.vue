<style lang="scss">

    .bm-content {
        display: flex;
        flex-wrap: wrap;
        margin: 16px;
    }

</style>

<template>
    <div class="bm-content">
        <bm-board v-for="board in boards" :board-data="board"></bm-board>
    </div>
</template>

<script>

    var Board = require('./Content/Board.vue');

    module.exports = {


        props: {
            boards: []
        },     

        components: {
            'bm-board': Board
        }

    }
</script>

