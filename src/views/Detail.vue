<template>
    <div>
        <DetailBanner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"/>
        <DetailHeader/>
        <div class="content">
            <DetailList :list="list"/>
        </div>
    </div>
</template>

<script>
import DetailBanner from '@/components/detail/Banner'
import DetailHeader from '@/components/detail/Header'
import DetailList from '@/components/detail/List'

export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data () {
        return{
            sightName: '',
            bannerImg: '',
            gallaryImgs: [],
            categoryList: [],
            list: []
        }
    },
    methods: {
        getDetailInfo () {
            this.$axios.post('/data/detail',{params:{id: this.$route.params.id}})
            .then(res=>{
                res=res.data;
                if(res.ret && res.data){
                    this.sightName = res.data.sightName
                    this.bannerImg = res.data.bannerImg
                    this.gallaryImgs = res.data.gallaryImgs
                    this.list = res.data.categoryList
                }
            })
        }
    },
    mounted () {
        this.getDetailInfo()
    }
}
</script>

<style lang="stylus" scoped>
.content
    height: 50rem
</style>