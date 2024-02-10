<template>
  <div class="body">
    <div>
        <Icon type="back" extraclass="icon" @click="navToUser"/>
        <span>|</span>
        <span class="text-large font-600">{{ title }}</span>
    </div>
  </div>
</template>
<script lang="js">
import Icon from './icon.vue'
  export default {
    name: 'backHead',
    components: {
      Icon
    },
    data() {
        return {}
    },
    props: {
        title: {
            type: String,
            default: 'Title'
        }
    },
    methods: {
        navToUser() {
            this.$router.push('/me');
        },
    }
}
</script>

<style scoped>
.body {
  background-color: #50a3fb;
  height: 8vh;
  line-height: 8vh;
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 20px;
  font-size: x-large;
}
.icon{
  font-size: 22px;
  margin-right: 10px;
}
.text-large {
  margin-left: 10px;
  font-size: 20px;
}
.font-600 {
  font-weight: 600;
}
</style>
