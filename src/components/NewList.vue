<template>
  <div class="list">
    <div class="item" v-for="(item,index) in ress" :key="index">
      <div class="cover">
        <img :src="item.imgUrl" alt="" />
        <p>
          <i class="fl">{{item.count}}</i>
          <span class="fr">{{item.duration}}</span>
        </p>
      </div>
      <h3>{{item.text}}</h3>
      <p class="item_bom">
        <span class="fl ifeng"><img src="../assets/zongyi/3.jpg" alt="" /> {{item.Tv}}</span>
        <span class="fr">{{item.time}}</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            ress:null
        }
    },
    watch:{
      res(){
        this.ress=this.res;
        console.log(this.ress)
      }
    },
    props:['res'],
    methods:{
      getfn(){
        this.ress=this.res;
        
      }
    },
    created(){
      this.getfn()
    }

};
</script>
<style scoped>
    *{
      margin:0;
      padding:0;
    }
    img {
      vertical-align: top;
    }

    .list {
      margin-top: 30px;
    }
    .list .item {
      width: 320px;
      height: 310px;
      margin-right: 20px;
      float: left;
    }
    .list .item:nth-child(3n + 3) {
      margin-right: 0;
    }
    .item h3 {
      margin-top: 14px;
      font-size: 18px;
      font-weight: normal;
    }

    .item .cover {
      position: relative;
    }
    .cover p {
      position: absolute;
      width: 100%;
      bottom: 0;
      color: #fff;
      left: 0;
    }

    .cover p i {
      width: 65px;
      padding: 0 0 3px 30px;
      font-style: normal;
      background: url(../assets/zongyi/2.png) no-repeat;
    }
    .cover p span {
      margin-right: 8px;
    }
.item_bom {
  margin-top: 6px;
  height: 25px;
  width: 100%;
  line-height: 25px;
  font-size: 14px;
  color: #c1c1c1;
}
.item_bom .ifeng img {
  border-radius: 50%;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
</style>