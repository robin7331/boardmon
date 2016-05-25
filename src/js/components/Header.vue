<style lang="scss">
    @import 'src/sass/colors';

    .bm-header {
        height: 60px;
        flex-grow: 1;
        display: flex;
        padding: 0 50px;
        align-items: center;
    }

    .bm-header__description {
        flex: 1;
        text-align: center;
        font-family: SanFranciscoDisplay-Regular;
        font-size: 26px;
        color: $mainBlue;
    }


</style>

<template>
    <div class="bm-header">
        <div class="bm-header__description">
            <span>210 Boards found</span>
        </div>
    </div>
</template>

<script>
module.exports = {}
</script>