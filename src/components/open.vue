<template>
        <div class="make">
        <van-button class="open" type="primary" round ><div><p class="p1">配对</p></div> </van-button>
            
  
        <br>
        <br>
        <div class="pp"><p>一键匹配陪拍</p> </div>
    </div>
</template>

<script>
import { Button } from 'vant';
export default {
components:{
    Button
},
}
</script>

<style scoped>
.make{
width: 100%;
height: 45%;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
}
.open{
width: 140px;
height: 140px;
border: 0;
margin-top: 100px;
display: flex;
justify-content: center;
align-items: center;

box-shadow: 0 0 10px 5px #75C4F6;
}


.p1{
  font-size: 30px;
  font-weight: 1000;
  color: white;
}

</style>