<template>
    <div class="container">
    <!-- 圈子 -->
        <div class="quanzi" v-for="item in quanzilist" :key="item.id">
            <div class="head">
                <div class="logo">
                    <img :src="item.logo" alt="">
                </div>
                <div class="massage">
                    <p class="name">{{item.name}}</p>
                    <p class="tui">{{item.jianli}}</p>
                </div>
            </div>
            <div class="neiron">
                <p>{{item.jieshao}}</p>
                <div class="photo">
                    <div class="imgg" >
                        <img :src="image" alt="" v-for="image in item.img" :key="image">
                    </div>
                </div>
            </div>
            <div class="xg">
                <div class="zan">
                    <van-icon name="like-o" :color="getcolor" @click="getcolor =!getcolor"/>
                    <p>点赞</p>
                </div>
                <div class="ping">
                    <van-icon name="comment-o" />
                    <p>评论</p>
                </div>
                <div class="fen">
                    <van-icon name="share" />
                    <p>分享</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { Skeleton } from 'vant';
import { Icon } from 'vant';
export default {
components:{
    Skeleton,Icon   
},
data(){
    return{
    getcolor:[
        'red',''
    ],
    quanzilist:[
        {id:1,name:'记录生活的老王',jianli:'',
        logo:'./11.webp',
        jieshao:'分享好看的天空照',
        img:['./11.jpg','./22.jpg','./33.jpg','./44.jpg','./55.jpg','./66.jpg'],
        },
        {id:2,name:'阿蔡',jianli:'',
        logo:'./222.jpg',
        jieshao:'好吃的面条',
        img:['./111.jpg'],
        },
    ]
}
}
}
</script>

<style scoped>
.container{
    width: 100vw;
    height: 85vh;
    overflow-y: auto;
    overflow-x: hidden;
}
.quanzi{
    width: 100vw;
    
    margin: 10px;
}
.head{
    width: 100vw;
    height: 45px;
    background-color: #fff; 
}
.logo{
    width: 45px;
    height: 45px;
    background-color: #fff;
    border-radius: 50%;
    float: left;
}
.massage{
    text-align: start;
    height: 45px;
    background-color: #fff;
    float: left;
}

p{
    font-size: 15px;
    margin-left: 10px;
}
.name{
    font-size: 20px;
}
.tui{
    font-size: 10px;
}
.neiron{
    text-align: start;
    
    background-color: #fff;
}
.logo img{
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.photo img{
    object-fit: cover;
    width: 120px;
    height: 150px;
    border-radius: 2px;
    margin: 1px;
}
.xg{
    width: 100vw;
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    display: flex;
    
}
.zan{
    margin-left: 30px;
    display: flex;
    width: 33%;
    height: 50px;
    align-items: center;
    text-align: center;
}
.ping{
    display: flex;
    width: 33%;
    height: 50px;
    align-items: center;
    text-align: center;
}
.fen{
    display: flex;
    align-items: center;
    width: 33%;
    height: 50px;
    text-align: center;
}
.imgg{
    display: flex;
    flex-wrap: wrap;
}
</style>