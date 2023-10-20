<template>
    <i class="iconfont" :class="[iconclass,extraclass]"></i>
</template>

<script>
var map = {
arrowup:"icon-xiangshang",
arrowdown: 'icon-xiangxia',
searh: "icon-sousuo",
user:"icon-user",
shouye:"icon-shouye",
};
export default {
props:{
    type:{
        type:String,
        required:true,
    },
    extraclass:{
        type:String,
        default:"",
    },
},
computed:{
    iconclass(){
        return map[this.type];
    },
},
};
</script>

<style scoped>
@import '//at.alicdn.com/t/c/font_4183937_jhx7keivp7b.css';

</style>
```