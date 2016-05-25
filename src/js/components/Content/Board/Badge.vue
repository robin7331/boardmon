<style lang="scss">
    @import 'src/sass/colors';


    .bm-board-badge {
        background: $boardBadgeBlue;
        border-radius: 4px;
        margin: 10px 4px;
        padding: 6px;
        float: left;
        height: 30px;

        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .bm-board-badge img {
        display: block;
    }

</style>

<template>
    <div class="bm-board-badge">
        <img :src="iconPath">
    </div>
</template>

<script>

    var BadgeTypes = require('../../../BadgeTypes');

    module.exports = {

        mixins: [BadgeTypes],

        props: {
            type: {
              type: String,
              default: 'analog_input'
            }
        },

        computed: {
            iconPath: function() {
                return this.getBadgeImagePath(this.type, true);
            }
        }
    }


</script>
