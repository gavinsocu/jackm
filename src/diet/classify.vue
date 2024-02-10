<template>
    <Header :title="$route.params.classify"/>
    <div class="main">
        <van-grid :column-num="3" :gutter="10">
                <van-grid-item v-for="value in diet" :key="value.id" @click="goHerbs(value.name)">
                    <van-image :src="`../${value.img}`" style="height:50px;width:50px; object-fit: cover;"/>
                    <p>{{ value.name }}</p>
                </van-grid-item>
            </van-grid>
    </div>
</template>

<script>
import Header from '../components/backHead1.vue';
import { Grid, GridItem } from 'vant';
import jsonData from '../json/herbslist.json';
export default {
    components: {
        Grid, GridItem,Header
    },
    data(){
        return{
            diet:[],
        }
    },
    created(){
        const hArray = jsonData.filter(obj => obj.leibie === this.$route.params.classify);
        this.diet = hArray;
    },
    methods:{
        goHerbs(valueName){
            this.$router.push({name:'herbsPage',params:{herbsId:valueName}});
        }
    }
}
</script>

<style scoped>
.main{
    width: 100%;
    height: 100vh;
    background-color: #f9f9f9;
}
</style>