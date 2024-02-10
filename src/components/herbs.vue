<template>
    <Header :title="selectedObject.name"/>
    <div class="main">
        <div class="head">
            <span>{{ selectedObject.name }}</span>
        </div>
        <img :src="`../${selectedObject.img}`" alt="食材图片" class="img"/>
        <div class="cook">
            <span class="listname"><Icon type="leaf" extraclass="icon"/>食材</span>
            <div class="listtext">{{ selectedObject.material }}</div>
        </div>
        <div class="cook">
            <span class="listname"><Icon type="cook" extraclass="icon"/>做法</span>
            <ol>
                <li class="listtext" v-for="(step, index) in cookSteps" :key="index">{{ step }}。</li>
            </ol>
            <video :src="selectedObject.video" controls></video>
        </div>
        <div class="cook">
            <span class="listname"><Icon type="list" extraclass="icon"/>功效</span>
            <div class="listtext">{{selectedObject.gonxiao}}</div>
        </div>
        <div class="cook">
            <span class="listname"><Icon type="warning" extraclass="icon"/>禁忌</span>
            <div class="listtext">{{ selectedObject.taboo }}</div>
        </div>
        <div style="height: 30px;"></div>
    </div>
</template>

<script>
import Icon from './icon.vue'
import jsonData from '../json/herbslist.json'
import Header from './backHead1.vue'
export default {
    components: {
        Header,Icon
    },
    data(){
        return{
            selectedObject: {},
        }
    },
    computed: {
        cookSteps() {
            if (this.selectedObject.cook) {
                return this.selectedObject.cook.split('。').filter(step => step.trim() !== '');
            }
            return [];
        }
    },
    created(){
        this.loadCardData();
    },
    methods: {
        loadCardData() {
            const herbsId = this.$route.params.herbsId;
                // 你可以根据实际情况使用异步请求加载数据
            setTimeout(() => {
                    // 根据cardId加载对应卡片的数据，这里只是示例
                let selectedObject = null;
                if(isNaN(herbsId)){
                    selectedObject = jsonData.find(obj => obj.name == herbsId);
                }else{
                    selectedObject = jsonData.find(obj => obj.id == herbsId);
                }
                if (selectedObject) {
                this.selectedObject = selectedObject;
                } else {
                console.error('未找到匹配的对象');
                }
            }, 500); // 模拟异步加载的延迟
        },
    },
}
</script>

<style scoped>
.main{
    background-color: #f9f9f9;
    width: 100%;
    height: 92vh;
    overflow-y: auto;
    overflow-x: hidden;
}
video{
    width: 90%;
    border: 4px solid #000;
}
.head{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    margin-top: 10px;
}
.head span{
    text-align: center;
    width: 95%;
    box-shadow: 0px 0px 10px #dcdfe6;
    height: 70px;
    line-height: 70px;
    font-size: 30px;
    font-weight: 600;
}
.cook{
    width: 100%;
    
}
.listname{
    font-size: 25px;
    font-weight: 600;
    width: 100%;
    display: block;
    text-align: left;
    margin: 20px;
}
.listtext{
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
}
.icon{
    font-size: 25px;
}
.img{
    width: 80%;
    height: 200px;
    border-radius: 5px;
    border: 1px solid #000;
    box-shadow: 0px 0px 10px #dcdfe6;
    object-fit: cover;
    margin-bottom: 10px;
}
</style>