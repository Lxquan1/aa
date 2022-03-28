<template>
  <div id="app">
    <div class="nav">
      <ul>
       <li><router-link to="/">人物</router-link></li> 
       <li><router-link to="/yule">娱乐</router-link></li> 
       <li><router-link to="/yishu" tag="p">艺术</router-link></li> 
       <li><router-link to="/nav">体育</router-link></li> 
       <li><router-link to="/zongyi">综艺</router-link></li> 
       <li><router-link to="/tour">旅游</router-link></li> 
        <li>生活</li>
        <li>时尚</li>
        <li>科技</li>
        <li>电影</li>
        <li>更多</li>
      </ul>
    </div>
    <router-view />
  </div>
</template>


<style scoped>
* {
  padding: 0;
  margin: 0;
}
.nav {
  width: 100%;
  height: 40px;
  background: red;
}
ul {
  list-style: none;
  width: 1000px;
  height: 40px;
  display: flex;
  margin: 0 auto;
}
ul li {
  flex: 1;
  line-height:40px;
  font-size:14px;
  color:#fff;
  text-align:center;
}
ul li a {
  color: #fff;
  text-decoration: none;
}

ul li:hover {
  color: red;
  background: #f2f2f2;
  text-decoration: none;
}
ul li:hover a {
  color: red;
  background: #f2f2f2;
  text-decoration: none;
}
</style>
