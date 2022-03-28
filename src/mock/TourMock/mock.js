let Mock = require('mockjs');
let obj = {
  "code":200,
  "tour":[
    {
      "img":require("../../assets/tours/ia_100000003.jpg"),
      "hours":"02:02",
      "text":"喀什大巴扎真丝纯手工编织的地毯，制作费时价格昂贵，外国记者直呼买不起",
      "author":"近观中国",
      "datey":"2022-01-17",
      "dayh":"11:09:55",
      "count":"3.4"
    },
    {
      "img":require("../../assets/tours/ia_100000005.jpg"),
      "hours":"01:10",
      "text":"展现文艺“烟火气”！上海百年弄堂这样“潮”",
      "author":"澎湃新闻",
      "datey":"2021-12-17",
      "dayh":"12:19:55",
      "count":"3.8"
    },
    {
      "img":require("../../assets/tours/ia_100000007.jpeg"),
      "hours":"02:02",
      "text":"锵锵安徽游——又是一季三伏尽，不舍夏日觅庐江",
      "author":"凤凰网安徽",
      "datey":"2021-12-23",
      "dayh":"10:01:11",
      "count":"3.3"
    },
    {
      "img":require("../../assets/tours/ia_100000009.jpg"),
      "hours":"01:33",
      "text":"不出上海迎新跨年  乡村民宿预订火爆",
      "author":"看看新闻",
      "datey":"2021-12-23",
      "dayh":"08:44:03",
      "count":"3.2"
    },
    {
      "img":require("../../assets/tours/ia_100000011.jpeg"),
      "hours":"02:02",
      "text":"三晋博物志丨柳氏民居",
      "author":"凤凰网山西",
      "datey":"2021-12-22",
      "dayh":"15:54:08",
      "count":"1.4"
    },
    {
      "img":require("../../assets/tours/ia_100000013.jpeg"),

      "hours":"02:02",
      "text":"喀什大巴扎真丝纯手工编织的地毯，制作费时价格昂贵，外国记者直呼买不起",
      "author":"近观中国",
      "datey":"2022-01-17",
      "dayh":"11:09:55",
      "count":"3.4"
    }
  ]
}
Mock.mock("/api/tour",obj)
