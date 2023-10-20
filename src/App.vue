<template>
  <div class="login" v-if="$route.meta.login">
    <router-view />
  </div>
  <div class="home" v-if="!$route.meta.login">
    <navbar :listname="list" :listnum="listnum"></navbar>
    <router-view />
      <van-tabbar v-model="active" route>
            <van-tabbarItem @click=" listnum = 0 " to="/home" icon="home-o">{{ list[0].name }}</van-tabbarItem>
            <van-tabbarItem @click=" listnum = 1 " to="/aips" icon="search">{{ list[1].name }}</van-tabbarItem>
            <van-tabbarItem @click=" listnum = 2 " to="/diet" icon="friends-o">{{ list[2].name }}</van-tabbarItem>
            <van-tabbarItem @click=" listnum = 3 " to="/me" icon="setting-o">{{ list[3].name }}</van-tabbarItem>
        </van-tabbar>   
  </div>
</template>

<script>
import home from './home/home.vue'
import navbar from './components/navbar.vue'

import { ref } from 'vue';
import { Tabbar, TabbarItem } from 'vant';

export default {
    components: {

      navbar,
      home,
      Tabbar,
      TabbarItem,
    },
    setup() {
      const active = ref('home/');
      return { active };
    },
    data(){
      return{
        listnum:0,
        list:[
          {name:'首页',path:'/home'},
          {name:'圈子',path:'/aips'},
          {name:'精选',path:'/diet'},
          {name:'我的',path:'/me'},
        ]
      }
    },
    
}
</script>

<style>
.home{
  width: 100vw;
  height: 100vh;
  position: relative;
}
.makeList{
  position: absolute;
  bottom: 0;
}
</style>