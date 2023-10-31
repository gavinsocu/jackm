<template>
<van-tabs v-model:active="active" sticky>
    <van-tab >
        <template #title> <Icon name="fire-o" color="#ee0a24" />  热门</template>
        <remen :dietlist="diet"/>
    </van-tab>
    <van-tab >
        <template #title> <Icon name="list-switch"  /> 分类</template>
        <button @click="gomywork">sjsj</button>
    </van-tab>
    <van-tab >
        <template #title> <Icon name="smile-o"  /> 排行榜</template>
        内容 1
        <div>内容 3</div>
        <div>内容 3</div>
        <div>内容 3</div>
    </van-tab>
</van-tabs>
</template>

<script>
import { Tab,Tabs,Icon } from 'vant';
import remen from './remen.vue';
export default {
    components: {
        Tab,
        Tabs,
        Icon,
        remen,
    },
    data(){
        return{
            diet:[
                {id:1,name:'蔡卓琪',gonxiao:'欢迎来找我玩！',img:'./ns.jpg',leibie:'陪拍'},
                {id:2,name:'董临',gonxiao:'记录生活记录你',img:'./nh.jpg',leibie:'陪拍'},
                {id:3,name:'兵马俑ai',gonxiao:'快来体验',img:'./兵马俑.jpg',leibie:'AI换脸'},
                {id:4,name:'AI证件照',gonxiao:'感受不一样的你',img:'./蔡男神.png',leibie:'AI换脸'},
                {id:5,name:'张少平',gonxiao:'只有用心，才能得到好照片',img:'./sys.jpg',leibie:'陪拍'},
                {id:6,name:'王恺希',gonxiao:'是护士，也是摄影师',img:'./hs.jpg',leibie:'陪拍'},
            ]
        }
    },
    methods:{
        gomywork(){
            this.$router.push('/diet/mywork');
        },
    }
}
</script>

<style>

</style>