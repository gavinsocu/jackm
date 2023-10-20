<template>
    <van-nav-bar
    :title=listname[listnum].name

    @click-left="onClickLeft"
    />
</template>

<script>
import { NavBar } from 'vant';
export default {
    components: {
        NavBar,
    },
    setup() {
        const onClickLeft = () => history.back();
        return {
            onClickLeft,
        };
    },
    props:{
        listname:{
            type: Array,
            required: true,
        },
        listnum:{
            type: Number,
            required: true,
        }
    }
}
</script>

<style>

</style>