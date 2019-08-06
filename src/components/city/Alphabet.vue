<template>
    <ul class="list">
        <li class="item" v-for="item of letters" 
        :key="item" 
        :ref="item" 
        @click="handleLetterClick" 
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd">
            {{item}}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Alphabet',
    props: {
        cities: Object
    },
    data () {
        return{
            touchStatus: false
        }
    },
    computed: {
        letters () {
            const letters = [];
            for(var i in this.cities){
                letters.push(i)
            }
            return letters
        }
    },
    methods: {
        handleLetterClick (e) {
            this.$emit('change',e.target.innerText)
        },
        handleTouchStart () {
            this.touchStatus = true
        },
        handleTouchMove (e) {
            if(this.touchStatus){
                const startY = this.$refs['A'][0].offsetTop;
                const touchY = e.touches[0].clientY-90.83;
                const index = Math.floor((touchY-startY) / 19);
                if(index >= 0 && index < this.letters.length){
                   this.$emit('change', this.letters[index]) 
                }     
            }
        },
        handleTouchEnd () {
            this.touchStatus = false
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@styles/varibles.styl'
    .list
        position: absolute
        top: 5.68rem
        right: 0
        bottom: 0
        width: 1rem
        display: flex
        flex-direction: column
        justify-content: center
        .item
            text-align: center
            color: $bgColor
            line-height: 1.2rem
</style>


