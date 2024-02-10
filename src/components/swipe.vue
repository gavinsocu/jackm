<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(image, index) in images" :key="index"
        :style="{ backgroundImage: `url(${image})` }"
        style="background-size: cover;height: 220px;"></van-swipe-item>
    </van-swipe>

</template>

<script>
import { Swipe, SwipeItem } from 'vant';
export default {
    components: {
        Swipe,
        SwipeItem,
    },
    data() {
        return {
            images: [
                "https://img2.jiemian.com/101/original/20230312/167861882183903200.jpg",
                "https://mblogthumb-phinf.pstatic.net/MjAyMjA3MDRfNDUg/MDAxNjU2ODYyNjExNjMy.AFT2eCQvTcl62UsCf67YWFfpiV6ygf7W__L4b5F0U8kg.Q6p6pUyEoejaxRNESTNsQlkSt4MM76RyKPvOVMha6nQg.JPEG.modoosangdam/CK_tip101e15100054_l.jpg?type=w800",
                "https://ts1.cn.mm.bing.net/th/id/R-C.7aa22a8e9faa379e2a1e949ffbec76fd?rik=XEorPDrLQLCLoQ&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f50118%2f7569.jpg_wh860.jpg&ehk=GQKHl2Neppzc4%2bbr8lFjIoen6oD4UPU9P9nxJwq293Y%3d&risl=&pid=ImgRaw&r=0"
            ],
        };
    },
}
</script>

<style scoped>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    width: 100vw;
    height: 170px;
    background-size: cover;
}
</style>