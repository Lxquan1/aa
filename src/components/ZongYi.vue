<template>
    <div class="main">
        <NewList :res='mess'></NewList>
        <div class="new_img">
            <img src="../assets/zongyi/4.jpg" alt="">
        </div>
        <NewList :res='mess'></NewList>
        <div class="new_img">
            <img src="../assets/zongyi/4.jpg" alt="">
        </div><NewList :res='mess'></NewList>
        <div class="new_img">
            <img src="../assets/zongyi/4.jpg" alt="">
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import NewList from '../components/NewList.vue'
export default {
    data(){
        return {
            mess:null
        }
    },
    methods:{
        async getdata(){
            let { data } = await axios.get("/api/zongyi");
            this.mess = data.data;
            // console.log(this.mess)
        }
    },
    created(){
        this.getdata()
    },
    components:{
        NewList
    }
}
</script>
<style scoped>
    img{
        vertical-align: top;
    }
    .main {
        width: 1000px;
        margin: 0 auto;
    }
</style>