<style lang="scss">

    @import 'src/sass/colors';

    .bm-slider-headline {
        text-align: center;
        font-family: SanFranciscoDisplay-Light;
        font-size: 20px;
        color: $mainBlue;
        margin: 8px;
    }

    .noUi-handle {
        background-color: $mainBlue;
        border-color: $mainBlue;
        box-shadow: none;

        cursor: pointer;
    }

</style>

<template>
    <div class="bm-slider">
        <div class="bm-slider-headline" >
            <span>{{ computedTitle }}</span>
        </div>
        <div class="bm-slider-slider" v-el:slider>

        </div>
    </div>
</template>

<script>

var noUiSlider = require('nouislider');
var _ = require('underscore');

module.exports = {


    props: {
        currentValue: {
            type: Number,
            default: 0
        },
        start: {
            type: Number,
            default: 0
        },
        steps: {
            type: Array,
            default: function() {
               return [];
            }
        },
        title: {
            type: String,
            default: "Value %%VAL%%"
        },
        titles: {
            type: Array,
            default: function() {
               return [];
            }
        },
        units: {
            type: Array,
            default: function() {
               return [];
            }
        }
    },

    data: function() {
        return {
            computedTitle: ''
        };
    },

    ready: function() {

        var vm = this;

        noUiSlider.create(this.$els.slider, {
            start: vm.steps[vm.start],
            step: 1,
            range: this.makeRange()
        });

        this.$els.slider.noUiSlider.on('update', function(){
            vm.computedTitle = vm.makeTitle();

            var currentValue = vm.$els.slider.noUiSlider;
            if (currentValue === undefined) {
                vm.currentValue = 0;
            }
            vm.currentValue = parseInt(currentValue.get());

            vm.$dispatch('slider-value-changed');
        });
	},

    methods: {
        makeTitle: function() {
            var currentValue = this.$els.slider.noUiSlider;
            if (currentValue === undefined) {
                return "";
            }

            var index = parseInt(currentValue.get());
            var title = this.title;

            if (this.titles.length == this.steps.length) {
                title = this.title.replace("%%VAL%%", this.titles[index]);
            } else {
                title = this.title.replace("%%VAL%%", this.steps[index]);
            }

            title = title.replace("%%UNIT%%", this.units[index]);

            return title;
        },

        makeRange: function() {
            var output = {};
            var vm = this;

            return {
               'min': 0,
               'max': (this.steps.length - 1)
            };
        }
    }

}

</script>
