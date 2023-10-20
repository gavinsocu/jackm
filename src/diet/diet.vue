<template>
<van-tabs v-model:active="active" sticky>
    <van-tab >
        <template #title> <Icon name="fire-o" color="#ee0a24" />  热门</template>
        <remen :dietlist="diet"/>
    </van-tab>
    <van-tab >
        <template #title> <Icon name="list-switch"  /> 分类</template>
        内容 1
    </van-tab>
    <van-tab >
        <template #title> <Icon name="smile-o"  /> 功效</template>
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
                {id:1,name:'蔡女神',gonxiao:'宽以待己，严以律人',img:'./蔡女神.png',leibie:'陪拍'},
                {id:2,name:'蔡男神',gonxiao:'关关难过关关跳过',img:'./蔡男神.png',leibie:'陪拍'},
                {id:3,name:'兵马俑ai',gonxiao:'快来体验',img:'./兵马俑.jpg',leibie:'AI换脸'},
            ]
        }
    }
}
</script>

<style>

</style>