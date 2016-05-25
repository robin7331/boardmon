<style lang="scss">
    @import 'src/sass/colors';
    @import 'src/sass/helper';

    .bm-sidebar-badge {
        /* Rectangle 118: */
        background: #FAFAFA;
        color: $mainBlue;
        border: 1px solid $mainBlue;
        border-radius: 4px;
        padding: 6px;
        margin: 4px;

        flex-grow: 1;
        text-align: center;

        cursor: pointer;

        @include noselect;
    }

    .bm-sidebar-badge:hover  {
        box-shadow: 0px 0px 2px 1px $mainBlue;
    }

    .bm-sidebar-badge-active {
        background-color: $mainBlue;
        color: #FAFAFA;
    }


    .bm-sidebar-badge img {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    .bm-sidebar-badge span {
        font-family: SanFranciscoDisplay-Light;
        font-size: 16px;
    }

</style>

<template>
    <div class="bm-sidebar-badge" :class="{ 'bm-sidebar-badge-active' : active }" v-on:click="active = !active">
        <img :src="iconPath">
        <span>{{ getTitleForBadgeType(this.type) }}</span>
    </div>
</template>

<script>

var BadgeTypes = require('../../BadgeTypes');

module.exports = {

    mixins: [BadgeTypes],

    props: {
        type: {
            type: String,
            default: 'analog_input'
        }
    },

    data: function() {
        return {
            active: false
        };
    },

    computed: {
        iconPath: function() {
            return this.getBadgeImagePath(this.type, this.active);
        }
    },

    watch: {
        'active': function () {
            this.$dispatch('badge-value-changed');
        }
    }
}

</script>

