<style lang="scss">
    @import 'src/sass/colors';
    @import 'src/sass/helper';


    .bm-board {
        background: #FFFFFF;
        box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50);
        border-radius: 4px;
        margin: 6px;
        overflow: hidden;
        min-width: 200px;
        max-width: 400px;
        flex-basis: 250px;
        flex-grow: 1;

        cursor: pointer;
    }

    .bm-board:hover {
        box-shadow: 0px 0px 4px 1px #367A9B;
    }

    .bm-board__header img {
        width: 100%;
    }

    .bm-board__header--bottom-line {
        background: #E04345;
        width: 100%;
        height: 1px;
    }

    .bm-board__title {
        color: $mainBlue;
        font-size: 28px;
        text-align: center;
        margin: 10px 4px;
    }

    .bm-board__numbers {
        color: lighten($mainBlue, 20%);
        font-size: 14px;
        text-align: center;
        margin: 10px 4px;
    }


    .bm-board__badges {
        padding: 0 8px;
        @include clearfix;
    }

    .bm-board__footer {
        background: #FFFFFF;
        box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.50);
        text-align: right;
    }

    .bm-board__footer span {
        font-size: 14px;
        color: #A8A8A8;
        margin: 2px 8px;
    }

</style>

<template>
    <div class="bm-board" @click="openLink">
        <div class="bm-board__header">
            <img :src="boardData.image">
        </div>
        <div class="bm-board__header--bottom-line"></div>
        <div class="bm-board__title"><span>{{ boardData.name }}</span></div>
        <div class="bm-board__numbers"><span>{{ boardData.gpios }} GPIO's | {{ boardData.flash }}kb Flash | {{ boardData.ram }}kb RAM</span></div>

        <div class="bm-board__badges">
            <bm-board-badge v-for="type in boardData.features" :type="type"></bm-board-badge>
        </div>

        <div class="bm-board__footer">
            <span>released {{ boardData.released }}</span>
        </div>

    </div>
</template>

<script>
    var Badge = require('./Board/Badge.vue');

    module.exports = {
        components: {
            'bm-board-badge' : Badge
        },
        props: {
            boardData: {
                name: "Raspberry Pi",
                released: "15.02.2016",
                image: "",
                features: [
                    "analog_input",
                    "wifi"
                ],
                gpios: 0,
                flash: 128,
                ram: 64,
                link: "https://www.raspberrypi.org/"
            }
        },
        methods: {
            openLink: function() {
                var win = window.open(this.boardData.link, '_blank');
                win.focus();
            }
        }
    }
</script>
