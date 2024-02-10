<template>
    <div class="cll">
        <div class="remen" v-for="item in dietlist" :key="item.id" @click="redirectToPage(item.name)" v-show="item.id < 11">
            <div class="img">
                <img :src="item.img" alt="">
            </div>
            <div class="text">
                <div class="zt1"> 
                    <div class="m">
                        <h3>{{ item.name }}</h3>
                    </div>
                    <div class="leibie">
                        <van-tag :type="item.color" class="sss"> {{ item.leibie }}</van-tag>
                    </div>
                    <div class="glod">
                        {{ item.id }}
                    </div>
                </div>
                <div class="zt2"><p>{{ item.gonxiao }}</p></div>
            </div>
        </div>
    </div>
</template>

<script>
import { Tag } from 'vant';
export default {
    components: {
        vanTag:Tag,
    },
    props:{
        dietlist:{
            type: Array,
            required: true,
        },
    },
    created(){
        this.dietlist.sort((a, b) => b.value - a.value);
        this.dietlist.forEach((item, index) => {
            item.id = index + 1;
        });
    },
    methods:{
        goHerbs(){
            this.$router.push({name:'herbs'});
        },
        redirectToPage(itemId) {
        // 根据卡片的id进行页面跳转
        // 使用Vue Router的例子
        this.$router.push({ name: 'herbsPage', params: { herbsId:itemId } });
        },
    }
}
</script>

<style scoped>
.remen{
    width: 100%;
    height: 120px;
    border-bottom: 1px solid rgb(196, 191, 191);
    /* border-top: 1px solid black; */
    /* border-radius: 20px; */
    overflow: hidden;
    position:relative;
}
.img{
    float: left;
    width: 120px;
    height: 120px;
    /* border: 2px solid #ccc; */
    display: flex;
    justify-content: center;
    align-items: center;
}
img{
    width: 100px;
    height: 100px;
    object-fit: cover;

}
.text{
    float: left;
    margin-left: 10px;
    height: 120px;

}
.zt1{
    height: 60px;
    line-height: 60px;
    display: flex;
}

.zt2{
    height: 60px;
    float: left;
}
.leibie{
    margin-left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.glod{
    position: absolute;
    right:10px;
}
p{
    font-size: 13px;
    font-weight: 800;
    color: rgba(24, 21, 21, 0.822);
}
.cll{
    width: 100%;
    height: 81vh;
    overflow-y: auto;
    overflow-x: hidden;
}
</style>