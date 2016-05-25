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
        font-size: 26px;
        color: $mainBlue;
    }


</style>

<template>
    <div class="bm-header">
        <div class="bm-header__description">
            <span>{{ boardCount }}</span>
        </div>
    </div>
</template>

<script>
module.exports = {

   props: {
      totalBoardCount: {
           type: Number,
           default: 0
      }
   },
   computed: {
      boardCount: function() {
         if (this.totalBoardCount > 1) {
            return this.totalBoardCount + " boards found";
         } else if (this.totalBoardCount == 1) {
            return "1 board found";
         } else {
            return "No boards found that mach your filter"
         }
      }
   },
}
</script>
