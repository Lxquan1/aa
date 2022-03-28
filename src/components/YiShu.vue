<template>
  <div class="yishu">
    <div class="box" v-for="item in 3" :key="item">
      <ul class="list">
        <li class="data" v-for="(item,index) in yiArr" :key="index">
          <div class="img">
            <img :src="item.imgsrc" alt="" />
          </div>
          <p class="title">{{item.title}}</p>
          <div class="text">
            <span class="logo"></span>
            <span class="time">{{item.time}}</span>  
          </div>
        </li>
      </ul>
      <div class="btm">
        <img src="https://c1.ifengimg.com/iamsImg/2019/12/13/4ed5345f72e4242664572a4cba926efa_w1000_h90.jpg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "YiShu",
  data() {
    return {
      yiArr: null,
    };
  },
  methods: {
    async getList() {
      let { data } = await axios.get("/api/yishu");
      this.yiArr = data;
      console.log(data);
    },
  },
  created() {
    this.getList();
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.box {
  width: 1000px;
  margin: 0 auto;
}
.box .list {
  background: #fafafa;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
}
.box .list .data {
  width: 32%;
  margin-bottom: 20px;
}
.box .list .data .img {
  width: 320px;
  height: 180px;
  overflow: hidden;
  background: #666;
}
.box .list .data .img img {
  width: 100%;
}
.box .list .data .title {
  color: #333;
  text-align: left;
  font-size: 18px;
  height: 54px;
  line-height: 27px;
  margin-top: 14px;
  overflow: hidden;
  cursor: pointer;
  font-weight: 400;
}
.box .list .data .title:hover {
  color: red;
  text-decoration: underline;
}
.box .list .data .text {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 25px;
  line-height: 25px;
  overflow: hidden;
  color: #c1c1c1;
  margin-top: 6px;
}
.box .list .data .text .logo {
  background: url(https://p1.ifengimg.com/a/2016/1129/25_25.jpg) no-repeat;
}
.box .list .data .text .logo span {
  margin-left: 25px;
}
.btm {
  width: 100%;
  height: 90px;
  background: violet;
}
</style>>