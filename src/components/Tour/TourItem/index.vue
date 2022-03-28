<template>
  <div>
    <ul class = "list"> 
      <li v-for = "(item,index) of tourData" :key="index">
        <a href="">
          <div class = 'imgBox'>
            <img :src="item.img" alt="">        
            <img src="../images/微信图片_20220318150859.png" alt="" class = 'posImg'>
            <span class = 'count'>{{item.count}}万</span>
            <span class = 'time'>{{item.hours}}</span>
          </div>
          <p  class = 'text'>{{item.text}}</p>
          <div class = 'list-footer'>
            <div>
              <img src="../images/微信图片_20220318150854.jpg" alt="">
              <span>{{item.author}}</span>
            </div>
            <div>
              <span>{{item.datey}}</span>
              <span>{{item.dayh}}</span>
            </div>    
          </div>
        </a>
      </li> 
    </ul>
    <div>
      <img src="../images/微信图片_20220318150831.jpg" alt="">
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'TourItem',

  data() {
    return {
      tourData:null
    };
  },

  mounted() {
    
  },

  methods: {
    async fn(){
        let {data} = await axios.get('/api/tour')
        console.log(data)
        if(data.code == 200){
          this.tourData = data.tour
        }      
    }
  },
  created(){
    this.fn();
  }
};
</script>

<style  scoped>
* {
  padding: 0;
  margin: 0;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
  color: #333;
}
  .list{
    display:flex;
    justify-content:space-between;
    flex-wrap: wrap;
    margin-top:30px;
  }
  .list li{
    margin-bottom:30px;
    width:320px;
  }
  .list li:hover .text{
    color:red;
  }
  .imgBox{
    position:relative;
  }
  .imgBox .posImg{
    position:absolute;
    left:0;
    bottom:10px;
  }
  .count{
    position:absolute;
    left:30px;
    bottom:10px;
    color:#fff;
    font-size:14px;
  }
  .time{
    position:absolute;
    right:10px;
    bottom:10px;
    color:#fff;
    font-size:14px;
  }
  .text{
    font-size:18px;
    height:54px;
    line-height:27px;
  }
  .list-footer{
    margin-top:10px;
    display: flex;
    justify-content: space-between;
    align-items:center;
  }
  .list-footer>div{
    display: flex;
    align-items:center;
  }
  
  
</style>