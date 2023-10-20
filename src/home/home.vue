
<template>
    <Search/>
    <swipe/>
    <open/>
    

</template>

<script>
import open from '../components/open.vue'
import swipe from '../components/swipe.vue'
import Search from '../components/search.vue'
export default {
    components: {
        swipe,Search,open
    }
}
</script>

<style scoped>
.aiopen{
width: 60vw;
height: 30px;
line-height: 30px;
background-color: red;
margin-left:20vw
}
</style>