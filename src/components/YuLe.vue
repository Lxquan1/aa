<template>
  <div class="center">
    <div class="list">
      <div class="item" v-for = "(item, index) in arrs" :key = "index">
        <div class="top">
          <img :src="item.imgsrc" alt="" />
          <div>
            <div class="pric">{{item.pric}}</div>
            <div class="time">{{item.time}}</div>
          </div>
        </div>
        <div class="title">
          {{item.title}}
        </div>
        <div class="bottom">
          <div>
            <img src="../assets/yule_bottom_tit.jpg" alt="" />
            <div class="tit">{{item.tit}}</div>
          </div>
          <div class="date">{{item.date}}</div>
        </div>
      </div>
      
    </div>
    <div class="adv">
      <img src="../assets/yule_adv.jpg" alt="" />
    </div>

    <div class="list">
      <div class="item" v-for = "(item, index) in arrs" :key = "index">
        <div class="top">
          <img :src="item.imgsrc" alt="" />
          <div>
            <div class="pric">{{item.pric}}</div>
            <div class="time">{{item.time}}</div>
          </div>
        </div>
        <div class="title">
          {{item.title}}
        </div>
        <div class="bottom">
          <div>
            <img src="../assets/yule_bottom_tit.jpg" alt="" />
            <div class="tit">{{item.tit}}</div>
          </div>
          <div class="date">{{item.date}}</div>
        </div>
      </div>
      
    </div>
    <div class="adv">
      <img src="../assets/yule_adv.jpg" alt="" />
    </div>
    <div class="list">
      <div class="item" v-for = "(item, index) in arrs" :key = "index">
        <div class="top">
          <img :src="item.imgsrc" alt="" />
          <div>
            <div class="pric">{{item.pric}}</div>
            <div class="time">{{item.time}}</div>
          </div>
        </div>
        <div class="title">
          {{item.title}}
        </div>
        <div class="bottom">
          <div>
            <img src="../assets/yule_bottom_tit.jpg" alt="" />
            <div class="tit">{{item.tit}}</div>
          </div>
          <div class="date">{{item.date}}</div>
        </div>
      </div>
      
    </div>
    <div class="adv">
      <img src="../assets/yule_adv.jpg" alt="" />
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Yule",
  data() {
    return {
      arrs: null,
    };
  },
  components: {},
  methods: {
    async getHome() {
      let { data } = await axios.get("/api/yule");
      this.arrs = data;
      console.log(this.arrs)
    }
  },
  created() {
    this.getHome();
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
.center {
  width: 1000px;
  margin: 0 auto;
}
.list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 1000px;
  margin-top: 30px;
}
.item {
  width: 320px;
  height: 310px;
}
.top {
  height: 180px;
  position: relative;
}
.top > img {
  width: 320px;
}
.top > div {
  position: absolute;
  bottom: 0;
  width: 96%;
  height: 28px;
  font-size: 14px;
  color: #fff;
  background: url(https://p3.ifengimg.com/a/2017/0105/vchannel2016b03.png)
    no-repeat;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
}
.top .pric {
}
.title {
  font-size: 18px;
  margin-top: 14px;
}
.bottom {
  font-size: 14px;
  color: #c1c1c1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
}
.bottom > div {
  display: flex;
  align-items: center;
}
.bottom img {
  width: 25px;
  height: 25px;
}
.adv {
  margin-bottom: 30px;
}
</style>