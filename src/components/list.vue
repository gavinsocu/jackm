<template>
        <van-tabbar v-model="active">
            <van-tabbarItem icon="home-o">标签</van-tabbarItem>
            <van-tabbarItem icon="search">标签</van-tabbarItem>
            <van-tabbarItem icon="friends-o">标签</van-tabbarItem>
            <van-tabbarItem icon="setting-o">标签</van-tabbarItem>
        </van-tabbar>   
    
</template>

<script >
import { ref } from 'vue';
import { Tabbar, TabbarItem } from 'vant';

export default {
    components: {
        Tabbar,
        TabbarItem,
    },
    setup() {
    const active = ref('home/');
    return { active };
    },
}
</script>

<style scoped>

.List {
    width: 100vw;
    height: 8vh;
    display: flex;
    flex-wrap: wrap ;
}
.List span {
    line-height: 8vh;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    width: 25vw;
    height: 8vh;
}




</style>