/**
 * Created by mt on 2017-11-28.
 */

//全局变量
var currentSid="";
var sevenDaysOption="";
var myChart = "";
var greenhouseOption="";
$(function (){
  // 基于准备好的dom，初始化echarts实例
  myChart = echarts.init(document.getElementById('chart-container'));
  $('.select-area').on('click','.qx',function(){
    var $box = $(".select-area .area-content");
    if($box.is(':visible'))
      $(".qx-icon").removeClass('triangle-up').addClass('triangle-down');
     else
      $(".qx-icon").removeClass('triangle-down').addClass('triangle-up');
    $box.toggle(500);
  });
  //小气候站点击默认
  $('.zd-name').on('click','li',function(){
    $(this).addClass("zd-active").siblings().removeClass("zd-active");
    var clickSid = $(this).attr("data-sid");//渲染页面时设置自定义属性
    if(currentSid != clickSid){
      currentSid = clickSid;
      zdClick();
    }
  });

  //小气候站点击滚动
  //每次移动(px)
  var Space = 15;
    if($('.zd-name li').length>5) $(".arrow").show();
  $(".arrow-l").on('click',function(){
    var $box = $(".zd-name");
    $box.css('left','-='+Space);
    var s = Math.abs(parseInt($box.css("left")))-Space-40;
        if(s >= $(".zd-name li:nth-child(1)").width()){
          $box.find("li").slice(0, 1).appendTo($box);
        }
  });
  //向右滚动
  $(".arrow-r").on('click',function(){
    var $box = $(".zd-name");
    $box.css('margin-left','+='+Space);
    var s = Math.abs(parseInt($box.css("margin-left")))-Space-30;
    if(s >= $(".zd-name li:last-child").width()){
      $box.find("li").slice(-1).prependTo($box);
    }
  });
  $('.area-content').on('click', 'li', function () {
    $('.area-content ol li').removeClass("area-active");
    $(this).addClass("area-active");
    var textVal = $(this).text();
    $(".qx-icon").removeClass('triangle-up').addClass('triangle-down');
    $(".select-area .current-area").text(textVal);
    $(".select-area .area-content").hide(500);
    //根据所选区，读取小气候站点
    iniStation(textVal);
  });
  //图表切换(11-29 暂未实现)
  $('.tab-pane').on('click','li',function() {
      var option = $(this).data('option');
      console.log(option)
    $(this).addClass("tab-active").siblings().removeClass("tab-active");
    var a=$("ul.zd-name .zd-active").data("sid");
    if(option == "greenhouseOption") {
        console.log("进入大棚预报")
        $.ajax({
            url: base + "/f7/search",
            data: "station=" + a + "&token=c372adf83d67bb21b8e7767e923ec0fc",
            dataType: "JSON",
            success: function (data) {
                var temp = new Array(data.length/2);
                var temp1 = new Array(data.length/2);
                var dataXzhou= new Array(data.length/2);
                for (var i = 0; i < data.length/2; i++) {
                    //console.log(getTheHutsForecast(data[i].reportDay, data[i].weatherPhenomenon, data[i].temp))
                    temp[i] = getTheHutsForecast(data[i*2].reportDay, data[i*2].weatherPhenomenon, data[i*2].temp);
                    temp1[i] = getTheHutsForecast(data[i*2+1].reportDay, data[i*2+1].weatherPhenomenon, data[i*2+1].temp);
                    var x=data[i*2].reportDay;
                    dataXzhou[i]=x;
                }
                greenhouseOption.series[0].data = temp;
                greenhouseOption.series[1].data = temp1;
                greenhouseOption.xAxis.data=dataXzhou;
                greenhouseOption.legend.selected={'温度':true,'湿度':false,'风速风向':false,'能见度':false,"晚上温度":true,'晚上湿度':false,'晚上风速风向':false,'晚上能见度':false}
                myChart.setOption(greenhouseOption);
                console.log("大棚预报完成")
            }
        });

    }else{
        get7DaysForecast(a);
    }
  
  });

  function iniStation(station){
      //根据区县，判断展示哪几个站
      console.log(station);
      var strInner="";
      if(station=="保德县"){
        strInner = "<li data-sid='53660'class='zd-active'>保德</li>";
      }else if(station=="代县"){
          strInner = "<li data-sid='53579'class='zd-active'>代县</li>";
      }else if(station=="定襄县"){
          strInner = "<li data-sid='53676'class='zd-active'>定襄</li>";
      }else if(station=="繁峙县"){
          strInner = "<li data-sid='53585'class='zd-active'>繁峙</li>";
      }else if(station=="河曲县"){
          strInner = "<li data-sid='53564' class='zd-active'>河曲</li>";
      }else if(station=="静乐县"){
          strInner = "<li data-sid='53666' class='zd-active'>静乐</li>";
      }else if(station=="岢岚县"){
          strInner = "<li data-sid='53662' class='zd-active'>岢岚</li>";
      }else if(station=="宁武县"){
          strInner = "<li data-sid='53577' class='zd-active'>宁武</li>";
      }else if(station=="偏关县"){
          strInner = "<li data-sid='53565' class='zd-active'>偏关</li>";
      }else if(station=="神池县"){
          strInner = "<li data-sid='53575' class='zd-active'>神池</li>";
      }else if(station=="五台县"){
          strInner = "<li data-sid='53588' class='zd-active'>五台山</li><li data-sid='53681'>五台县豆村</li>";
      }else if(station=="五寨县"){
          strInner = "<li data-sid='53663' class='zd-active'>五寨</li>";
      }else if(station=="忻府区"){
          strInner = "<li data-sid='53674' class='zd-active'>忻府区</li>";
      }else if(station=="原平市"){
          strInner = "<li data-sid='53673' class='zd-active'>原平</li>";
      }

      $("ul.zd-name").html(strInner);
      var a=$("ul.zd-name .zd-active").data("sid");
      gettemp(a);
      get7DaysForecast(a);

  }
  //小气候站点击
  function zdClick() {
    console.log("++++++++++++++====================++++++++++++")
      //$("ul.zd-name")
      var a=$("ul.zd-name .zd-active").data("sid");
      gettemp(a);
      get7DaysForecast(a);
  }

  /**
   * 图表切换
   */
  function chartSwitch(){

  }

  /*
   绘制图表
   */

//指定图表的配置项和数据——七天预报
    var weatherIconSize = 45
  sevenDaysOption = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {    //图表上方的类别显示
      left:'center',
      data:[
        {
          name:'温度',
          icon:'roundRect'
        },
        {
          name:'湿度',
          icon:'roundRect'
        },
        {
          name:'风速风向',
          icon:'roundRect'
        },
        {
          name:'能见度',
          icon:'roundRect'
        }
      ],
      itemGap: 20, //图例每项之间的间隔
        selected:{'温度':true,'湿度':false,'风速风向':false,'能见度':false,"晚上温度":true,'晚上湿度':false,'晚上风速风向':false,'晚上能见度':false}
    },
    color:[
      '#f68227',    //温度
      '#79cfae',    //湿度
      '#fc6b6b',    //风速
      '#79b0cf',      //能见度
        '#32cd32',  //晚上温度
        '#ff7c4b',  //晚上湿度
        '#da70d6',   //晚上风速
        '#ff7f50'   //夜间能见度
    ],
    xAxis: { //X轴
      type: 'category',
     // boundaryGap: false,
      axisLine:{
        lineStyle:{
          type:'solid',
          color:'#4187bb'
        }
      },
      axisTick:{
        inside:true
      },
      axisLabel:{
        textStyle:{
          color: '#333'
        }
      },
      data : ["caijue","1","123","adsf","1326"]    //先设置数据值为空
    },
    yAxis: {
      type: 'value',
      axisLine:{
        lineStyle:{
          type:'solid',
          color:'#4187bb'
        }
      },
      splitLine:{
        show: true,
        lineStyle:{
          type:'solid',
          color:'#efefef'
        }

      },
      axisTick:{
        inside:true
      },
      axisLabel:{
        formatter: '{value}℃',  //控制输出格式
        textStyle:{
          color: '#333'
        }
      }
    },
    series:[
      {
        name:'温度',
        type:'bar',    //折线图表示（生成温度曲线）
          label:{
              normal:{
                  show:false ,
              },
          },
        symbol:'circle',    //设置折线图中表示每个坐标点的符号
          animation:{
              animation:'true',
          },
        data:[5,8,20,25],       //数据值通过Ajax动态获取
        smooth:true              //平滑曲线默认值false
      },
      {
        name:'湿度',
        type:'bar',    //折线图表示（生成温度曲线）
          label:{
              normal:{
                  show:false ,
              },
          },
        symbol:'circle',    //设置折线图中表示每个坐标点的符号
          animation:{
              animation:'true',
          },
          smooth:true,              //平滑曲线默认值false
        data:[3,6,10,12]        //数据值通过Ajax动态获取
      },
      {
        name:'风速风向',
        type:'bar',    //折线图表示（生成温度曲线）
        symbol:'image://dataImg/f0.png',
          symbolSize:15,
          smooth:true,              //平滑曲线默认值false
        data:[1,7,15,20]        //数据值通过Ajax动态获取
      },
      {
        name:'能见度',
        type:'bar',    //折线图表示（生成温度曲线）
          label:{
              normal:{
                  show:false ,
              },
          },
          smooth:true,              //平滑曲线默认值false
        symbol:'circle',    //设置折线图中表示每个坐标点的符号
          animation:{
              animation:'true',
          },
        data:[2,5,14,24]        //数据值通过Ajax动态获取
      },{
        name:'晚上温度',
            type:'bar',    //折线图表示（生成温度曲线）
            label:{
            normal:{
                show:false ,
            },
        },
        symbol:'circle',    //设置折线图中表示每个坐标点的符号
            animation:{
            animation:'true',
        },
        data:[5,8,20,25],       //数据值通过Ajax动态获取
            smooth:true              //平滑曲线默认值false
    },
        {
            name:'晚上湿度',
            type:'bar',    //折线图表示（生成温度曲线）
            label:{
                normal:{
                    show:false ,
                },
            },
            symbol:'circle',    //设置折线图中表示每个坐标点的符号
            animation:{
                animation:'true',
            },
            smooth:true,              //平滑曲线默认值false
            data:[3,6,10,12]        //数据值通过Ajax动态获取
        },
        {
            name:'晚上风速风向',
            type:'bar',    //折线图表示（生成温度曲线）
            symbol:'image://dataImg/f0.png',
            symbolSize:15,
            smooth:true,              //平滑曲线默认值false
            data:[1,7,15,20]        //数据值通过Ajax动态获取
        },
        {
            name:'晚上能见度',
            type:'bar',    //折线图表示（生成温度曲线）
            label:{
                normal:{
                    show:false ,
                },
            },
            smooth:true,              //平滑曲线默认值false
            symbol:'circle',    //设置折线图中表示每个坐标点的符号
            animation:{
                animation:'true',
            },
            data:[2,5,14,24]        //数据值通过Ajax动态获取
        }
    ]
  };
//指定图表的配置项和数据——温室预报
greenhouseOption = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {    //图表上方的类别显示
      left:'center',
      data:[
        {
          name:'温度',
          icon:'roundRect'
        }
      ],
      itemGap: 20 //图例每项之间的间隔
    },
    color:[
      '#f68227',    //温度
        '#32cd32',  //晚上温度
    ],
    xAxis: { //X轴
      type: 'category',
      //boundaryGap: false,
      axisLine:{
        lineStyle:{
          type:'solid',
          color:'#4187bb'
        }
      },
      axisTick:{
        inside:true
      },
      axisLabel:{
        textStyle:{
          color: '#333'
        }
      },
      data : ["caijue","1","123","adsf","1326"]    //先设置数据值为空
    },
    yAxis: {
      type: 'value',
      axisLine:{
        lineStyle:{
          type:'solid',
          color:'#4187bb'
        }
      },
      splitLine:{
        show: true,
        lineStyle:{
          type:'solid',
          color:'#efefef'
        }
      },
      axisTick:{
        inside:true
      },
      axisLabel:{
        formatter: '{value}℃',  //控制输出格式
        textStyle:{
          color: '#333'
        }
      }
    },
    series:[
        {
            name:'温度',
            type:'bar',    //折线图表示（生成温度曲线）
            symbol:'circle',    //设置折线图中表示每个坐标点的符号
            data:[5,8,20,25]        //数据值通过Ajax动态获取
        },
        {
            name:'晚上温度',
            type:'bar',    //折线图表示（生成温度曲线）
            symbol:'circle',    //设置折线图中表示每个坐标点的符号
            data:[5,8,20,25]        //数据值通过Ajax动态获取
        }
    ]
  };
//请求时获取对应的数据

  $.ajax({

    success: function () {
      //把拿到的数据填入对应的位置
      myChart.setOption({
        xAxis: {
          //                    data: dates    //填入X轴数据
        },
        series:{
          //                    data:dates     //每个点对应的数据
        }
      })
    }

  });
//载入图表
  myChart.setOption(sevenDaysOption);
});
