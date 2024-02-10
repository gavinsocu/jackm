<template>
    <div class="list">
        <div class="sss">
            <van-grid :column-num="2" :gutter="10">
                <van-grid-item v-for="value in fenlei" :key="value.id" @click="goclassify(value.name)">
                    <van-image :src="value.img" style="height: 100px;width: 150px;object-fit: cover;"/>
                    <p>{{ value.name }}</p>
                </van-grid-item>
            </van-grid>
        </div>
    </div>
</template>

<script>
import { Grid, GridItem } from 'vant';
import Icon from '../components/icon.vue';
export default {
    components: {
        Grid, GridItem,Icon
    },
    data(){
        return{
            fenlei:[
                {id:1,name:'茶类',img:'./tea.jpg'},
                {id:2,name:'汤类',img:'./soup.jpg'},
                {id:3,name:'酒类·',img:'./wine.jpg'},
                {id:4,name:'粥类',img:'./porridge.jpg'},
            ]
        }
    },
    methods:{
        goclassify(valueName){
            console.log("nhao");
            this.$router.push({name:'classifyPage',params:{classify:valueName}});
        }
    }
}
</script>

<style scoped>
.list{
    width: 100%;
    height: 100vh;
    background-color: #f9f9f9;
    position: relative;
}
.sss{
    position: absolute;
    top: 10px;
    width: 100%;
}
</style>