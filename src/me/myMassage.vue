<template>
  <div class="head">
    <backHead :title="title"></backHead>
  </div>
  <div class="main">
    <div class="myMassage">
      <span>姓名</span>
      <span>{{ usermessage.name }}</span>
    </div>
    <div class="myMassage">
      <span>学号</span>
      <span>{{ usermessage.number }}</span>
    </div>
    <div class="myMassage">
      <span>性别</span>
      <span>{{ usermessage.gender }}</span>
    </div>
    <div class="myMassage">
      <span>学院</span>
      <span>{{ usermessage.college }}</span>
    </div>
    <div class="myMassage">
      <span>专业</span>
      <span>{{ usermessage.professional }}</span>
    </div>
    <div class="myMassage">
      <span>班级</span>
      <span>{{ usermessage.class }}</span>
    </div>
    <div class="myMassage">
      <span>手机号</span>
      <span>{{ usermessage.phone }}</span>
    </div>
    <div class="myMassage">
      <span>邮箱</span>
      <span>{{ usermessage.email }}</span>
    </div>
    <div class="myMassage">
      <span>密码</span>
      <span>{{ usermessage.password }}</span>
    </div>
  </div>
</template>

<script>
import backHead from '../components/backHead.vue';
export default {
  name: 'myMassage',
  components: {
    backHead,
  },
  data() {
    return {
      title: '个人信息',
      usermessage:{
            name: '蔡男神',
            number: '2018302110',
            gender: '男',
            phone: '12345678910',
            email: '520884@daidai.com',
            professional: '信息管理与信息系统',
            college: '生物医学工程',
            class: '2',
            password: '123',
        }
    };
  },
};
</script>

<style scoped>
.head{
  height: 8vh;
  background-color: #409eff;
  width: 100%;
}
.main{
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.myMassage {
  width: 95%;
  height: 50px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 50px;
  box-shadow: 0px 0px 5px #dcdfe6;
}
.myMassage span:nth-child(1) {
  text-align: left;
  margin-left: 20px;
  font-size: large;
  font-weight: 600;
  float: left;
}
.myMassage span:nth-child(2) {
  float: right;
  margin-right: 20px;
  bottom: 5px;
  margin-left: 20px;
  font-size: medium;
  font-weight: 400;
}

</style>