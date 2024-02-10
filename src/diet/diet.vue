<template>
    <div class="main">
        <van-tabs v-model:active="active" sticky>
            <van-tab >
                <template #title> <Icon name="fire-o" color="#ee0a24" />  热门</template>
                <remen :dietlist="diet"/>
            </van-tab>
            <van-tab >
                <template #title> <Icon name="list-switch"  /> 分类</template>
                <fenlei />
            </van-tab>
            <van-tab >
                <template #title> <Icon name="smile-o"  /> 排行榜</template>
                <herbsList :dietlist="diet"/>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import { Tab,Tabs,Icon } from 'vant';
import fenlei from './fenlei.vue';
import herbsList from './herbslist.vue';
import remen from './remen.vue';
import jsondata from '../json/herbslist.json';
export default {
    components: {
        Tab,
        Tabs,
        Icon,
        remen,
        fenlei,
        herbsList
    },
    data(){
        return{
            diet:[],
        }
    },
    methods:{
        gomywork(){
            this.$router.push('/diet/mywork');
        },
    },
    created(){
        const hArray = Object.values(jsondata);
        this.diet = hArray;
    }
}
</script>

<style scoped>

</style>