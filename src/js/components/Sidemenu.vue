<style lang="scss">
    @import 'src/sass/colors';

    .bm-sidemenu {
        flex-basis: 300px;
        min-width: 300px;
        display: flex;
        flex-direction: column;
        @include side-menu-background;
    }

    .bm-sidemenu__logo {
        height: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .bm-sidemenu__logo--caption {
        font-family: SanFranciscoDisplay-Light;
        font-size: 21px;
        color: $mainBlue;
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .bm-sidemenu__footer {
        height: 128px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .bm-sidemenu__footer__shares {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: center;
    }

    .bm-sidemenu__footer__shares--item {
        margin: 0 10px;
    }

    .bm-sidemenu__footer--suggest {
        margin: 8px 0;
        font-size: larger;
        font-family: SanFranciscoDisplay-Medium;
        font-size: 26px;
        color: $mainBlue;
    }

    .bm-sidemenu__footer--love {
        font-family: SanFranciscoDisplay-Light;
        font-size: 18px;
        color: $mainBlue;
    }

    .bm-sidemenu__badges {
        overflow: scroll;
        display: flex;
        flex-wrap: wrap;
        margin: 16px;
    }

    .bm-sidemenu__sliders {
        margin: 20px;
    }
    .bm-sidemenu__badges::-webkit-scrollbar {
        display: none;
    }

    .bm-sidemenu__spacer {
        flex-grow: 1;
    }

</style>
<template>
    <div class="bm-sidemenu">
        <div class="bm-sidemenu__logo">
            <div class="bm-sidemenu__logo--img">
                <img src="/img/Logo.png">
            </div>
            <div class="bm-sidemenu__logo--caption">
                <span>boardmon.io</span>
                <span style="font-size: small">BETA</span>
            </div>
        </div>
        <div class="bm-sidemenu__sliders">
            <bm-slider
                :current-value.sync="currentGPIOValue"
                title="min. %%VAL%% GPIO Pins"
                :start="0"
                :steps="[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 24, 28, 32, 64]"
            ></bm-slider>
            <bm-slider
                :current-value.sync="currentFlashValue"
                title="min. %%VAL%%%%UNIT%% Flash Memory"
                :start="0"
                :steps="[0, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576, 2097152, 4194304, 8388608, 16777215, 33554432, 67108864, 134217728]"
                :titles="[0, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8, 16, 32, 64, 128]"
                :units="['k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'GB', 'GB', 'GB', 'GB', 'GB']"
                ></bm-slider>
            <bm-slider
                :current-value.sync="currentRAMValue"
                title="min. %%VAL%%%%UNIT%% RAM"
                :start="0"
                :steps="[0, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576, 2097152, 4194304, 8388608]"
                :titles="[0, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192]"
                :units="['k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M']">
            </bm-slider>
        </div>
        <div class="bm-sidemenu__badges">
            <bm-sidemenu-badge v-for="badgeType in badgeTypes" :type="badgeType"  v-ref:feature-badges></bm-sidemenu-badge>
        </div>
        <div class="bm-sidemenu__spacer"></div>
        <div class="bm-sidemenu__footer">
            <div class="bm-sidemenu__footer__shares">
                <div class="bm-sidemenu__footer__shares--item">
                    <div class="fb-share-button" data-href="http://boardmon.io" data-layout="button_count"></div>
                </div>
                <div class="bm-sidemenu__footer__shares--item">
                    <a href="https://twitter.com/share" class="twitter-share-button" data-url="http://boardmon.io" data-via="robin7331">Tweet</a>
                </div>
                <div class="bm-sidemenu__footer__shares--item">
                  <a class="github-button" href="https://github.com/robin7331/boardmon" data-count-href="/robin7331/boardmon/stargazers" data-count-api="/repos/robin7331/boardmon#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star robin7331/boardmon on GitHub">Star</a>
                </div>
            </div>
            <div class="bm-sidemenu__footer--suggest">
                <a target="_blank" href="https://twitter.com/intent/tweet?text=@robin7331 Checkout this awesome board: "><span>Suggest a Board</span></a>
            </div>
            <div class="bm-sidemenu__footer--love">
                <span>made with ❤ in Germany</span>
            </div>
        </div>
    </div>
</template>
<script>

    var _ = require('underscore');

    var BadgeTypes = require('../BadgeTypes');

    var Badge = require('./Sidemenu/Badge.vue');
    var Slider = require('./Sidemenu/Slider.vue');


    module.exports = {

        mixins: [BadgeTypes],

        data: function () {
            return {
                currentGPIOValue: 0,
                currentFlashValue: 0,
                currentRAMValue: 0
            }
        },

        components: {
            'bm-slider': Slider,
            'bm-sidemenu-badge': Badge
        },

        methods: {
            getAllActiveFeatures: function() {
                return _.where(this.$refs.featureBadges, { active: true} )
                        .map(function(feature) {
                                return feature.type;
                            });
            }
        }

    }

</script>
