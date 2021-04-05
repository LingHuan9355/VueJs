/*
  请求地址:http://wthrcdn.etouch.cn/weather_mini
  请求方法:get
  请求参数:city(城市名)
  响应内容:天气信息

  1. 点击回车
  2. 查询数据
  3. 渲染数据
  */
var app = new Vue({
    el: "#app",
    data: {
        city: '衡阳',
        weaterList: [],
        hotCitys:["北京", "上海", "广州", "深圳"]
    },
    methods: {
        serachWeater: function () {
            // console.log("天气查询");
            // console.log(this.city);
            // 调用接口
            // 保存this
            var that = this;
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city).then(
                function (response) {
                    // console.log(response);
                   // console.log(response.data.data.forecast);
                    that.weaterList = response.data.data.forecast;
                }, function (error) {
                    console.log(error);
                })
        },
        changeCity: function (city) {
            this.city = city;
            this.serachWeater();
        }
    }
})