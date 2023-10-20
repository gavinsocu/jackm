<template>
    <div class="main">
        <Card style="width: 80vw">
            <template #header>
                <img alt="user header" src="../assets/蔡男神.png" class="imgg"/>
            </template>
            <template #title> 登录</template>

            <template #content>
                <br>
            <span class="p-float-label">
                <input id="username" v-model="value"  class="ininin"/>
                <label for="username" class="tabel">   账号</label>
            </span>
            <br><br>

            <span class="p-float-label">
                <input id="username" v-model="value"  class="ininin" type="password"/>
                <label for="username" class="tabel">   密码</label>
            </span>
            <br><br>
            </template>
            <template #footer>
                <van-button type="primary" @click="goHome" class="bbbb">登录</van-button>
                
            </template>
            
        </Card>
    </div>
</template>

<script>
import Password from 'primevue/password';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import { Button } from 'vant';
export default {
    components: {
        Card,
        Button,
        Password,
        InputText
    },
    methods:{
            goHome(){
                this.$router.push('/home');
                this.$route.meta.login = false;
            },
        }
}
</script>

<style scoped>
.main{
    background-image: url('https://shijuepi.com/uploads/allimg/201222/1-2012221T114.jpg');
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.imgg{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-top: 20px;
}
.tabel{
    margin-left: 40px;
    transform: translateY(-8px);
}
.ininin{
    border-bottom: 1px solid #999;
    height: 30px;
    border-top: 0;
    border-left: 0;
    border-right: 0;
}
input:focus {
    outline: none; /* 隐藏默认的选中边框 */
    box-shadow: 0 0 20px #86A8E7; /* 添加光晕效果，可以根据需要调整颜色和大小 */
}
.bbbb{
    margin-bottom: 30px;
}
</style>