/**
 * Created by mt on 2017-12-1.
 */
function temp(data,is) {
  var color_data, temp, name;
  if (is) {
    temp = data;
    color_data =[[0.25, '#48b'], [0.75, '#228b22'], [1, '#ff4500']];
    name = "空气温度";
  } else {
    temp = '';
    color_data = [[0.25, '#ccc'], [0.75, '#ccc'], [1, '#ccc']];
    name = "暂无数据";
  }
  // 基于准备好的dom，初始化echarts实例
  var myChart1 = echarts.init(document.getElementById('main1'));
    $("#main1").on('click', function (par) {
        var a = $(".zd-active").html();
        setGoToWhere("temp",a);
    });
  var option1 = {
    tooltip : {
      formatter: "{a} <br/>{b} : {c}℃"
    },
    toolbox: {
      show : false,
      feature : {
        mark : {show: true},
        restore : {show: true},
        saveAsImage : {show: true}
      }
    },
    series : [
      {
        name:'当前数据',
        type:'gauge',
        center : ['49.7%', '58%'],
        radius:'105%',
        min:-10,
        max:50,
        splitNumber: 6,       // 分割段数，默认为5
        axisLine:{           //仪表盘轴线相关配置。
          lineStyle:{
            color:color_data,
            width:4
          }
        },
        axisTick: {            // 坐标轴小标记
          splitNumber: 10,   // 每份split细分多少段
          length :12,        // 属性length控制线长
          lineStyle: {       // 属性lineStyle控制线条样式
            color: 'auto'
          }
        },
        axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
          textStyle: {       // 其余属性默认使用全局文本样式
            color: 'auto'
          }
        },
        splitLine: {           // 分隔线
          show: true,        // 默认显示，属性show控制显示与否
          length :20,         // 属性length控制线长
          lineStyle: {       // 属性lineStyle控制线条样式
            color: 'auto'
          }
        },
        pointer : {
          width : 5
        },
        title : {
          show : true,
          offsetCenter: [0, '-30%'],       // title位置 x, y，单位px
          textStyle: {       // 其余属性默认使用全局文本样式
            fontWeight: 'bolder'
          }
        },
        detail : {
          formatter: function (value) {
            if(is){
              return value+'℃'
            }
            else {
              return '℃'
            }
          },
          offsetCenter:[0, '60%'], //数值展示位置默认 offsetCenter:[0, '40%'],
          textStyle: {       // 其余属性默认使用全局文本样式
            color: 'auto',
            fontWeight: 'bolder',
            fontSize: 20
          }
        },
        data:[{value:temp, name: name}]
      }
    ]}
  myChart1.setOption(option1);
}


function rh(data,is) {
  var rh, color_data, name;
  if (is) {
    rh = data;
    color_data =[[0.65, '#48b'], [0.9, '#228b22'], [1, '#ff4500']];
    name = "空气湿度";
  } else {
    rh = '';
    color_data = [[0.65, '#ccc'], [0.9, '#ccc'], [1, '#ccc']];
    name = "暂无数据";
  }

  // 基于准备好的dom，初始化echarts图表
  var myChart2 = echarts.init(document.getElementById('main2'));
    $("#main2").on('click', function (par) {
        var a = $(".zd-active").html();
        setGoToWhere("rh",a);
    });
  //引入代码
  var option2 = {
    tooltip: {
      formatter:"{a} <br/>{b} : {c}%rh"
    },
    toolbox: {
      show: false,
      feature: {
        mark: {show: true},
        restore: {show: true},
        saveAsImage: {show: true}
      }
    },
    series: [
      {
        name: '当前数据',
        type: 'gauge',
        center: ['49.7%', '58%'],
        radius: '105%',
        min: 0,
        max: 100,
        splitNumber: 5,       // 分割段数，默认为5
        axisLine: {            // 坐标轴线
          lineStyle: {
            color: color_data,       // 属性lineStyle控制线条样式
            width: 6
          }
        },
        axisTick: {            // 坐标轴小标记
          splitNumber: 10,   // 每份split细分多少段
          length: 12,        // 属性length控制线长
          lineStyle: {       // 属性lineStyle控制线条样式
            color: 'auto'
          }
        },
        axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
          textStyle: {       // 其余属性默认使用全局文本样式，
            color: 'auto'
          }
        },
        splitLine: {           // 分隔线
          show: true,        // 默认显示，属性show控制显示与否
          length: 20,         // 属性length控制线长
          lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            color: 'auto'
          }
        },
        pointer: {
          width: 5
        },
        title: {
          show: true,
          offsetCenter: [0, '-30%'],       // x, y，单位px
          textStyle: {       // 其余属性默认使用全局文本样式，
            fontWeight: 'bolder'
          }
        },
        detail: {
          formatter: function (value) {
            if(is){
              return value+'%rh'
            }
            else {
              return '%rh'
            }
          },
          offsetCenter:[0, '60%'],
          textStyle: {       // 其余属性默认使用全局文本样式，
            color: 'auto',
            fontWeight: 'bolder',
            fontSize: 20
          }
        },
        data: [{value: rh, name: name}]
      }
    ]
  };
  myChart2.setOption(option2);
}


function st(data,is){
  var st,color_data,name;
  if(is){
    st = data;
    color_data =[[0.4, '#48b'], [0.68, '#228b22'], [1, '#ff4500']];
    name = '土壤温度'
  } else{
    st='';
    color_data =[[0.4, '#ccc'], [0.68, '#ccc'], [1, '#ccc']];
    name="暂无数据";
  }

  // 基于准备好的dom，初始化echarts图表
  var myChart3 = echarts.init(document.getElementById('main3'));
    $("#main3").on('click', function (par) {
        var a = $(".zd-active").html();
        setGoToWhere("10st",a);
    });
  //引入代码
  var option3 = {
    tooltip : {
      formatter: "{a} <br/>{b} : {c}℃"
    },
    toolbox: {
      show : false,
      feature : {
        mark : {show: true},
        restore : {show: true},
        saveAsImage : {show: true}
      }
    },
    series : [
      {
        name:'当前数据',
        type:'gauge',
        center : ['49.7%', '58%'],
        radius:'105%',
        min:-10,
        max:40,
        splitNumber: 5,       // 分割段数，默认为5
        axisLine: {            // 坐标轴线
          lineStyle: {
            color: color_data,       // 属性lineStyle控制线条样式
            width: 6
          }
        },
        axisTick: {            // 坐标轴小标记
          splitNumber: 10,   // 每份split细分多少段
          length :12,        // 属性length控制线长
          lineStyle: {       // 属性lineStyle控制线条样式
            color: 'auto'
          }
        },
        axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
          textStyle: {       // 其余属性默认使用全局文本样式，
            color: 'auto'
          }
        },
        splitLine: {           // 分隔线
          show: true,        // 默认显示，属性show控制显示与否
          length :20,         // 属性length控制线长
          lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            color: 'auto'
          }
        },
        pointer : {
          width : 5
        },
        title : {
          show : true,
          offsetCenter: [0, '-30%'],       // x, y，单位px
          textStyle: {       // 其余属性默认使用全局文本样式，
            fontWeight: 'bolder'
          }
        },
        detail : {
          formatter: function (value) {
            if(is){
              return value+'℃'
            }
            else {
              return '℃'
            }
          },
          offsetCenter:[0, '60%'],
          textStyle: {       // 其余属性默认使用全局文本样式，
            color: 'auto',
            fontWeight: 'bolder',
            fontSize: 20
          }
        },
        data:[{value:st, name: name}]
      }
    ]
  };
  myChart3.setOption(option3);
}

function sh(data,is){
  var sh,color_data,name;
  if(is){
    sh=data;
    color_data =[[0.4, '#48b'], [0.58, '#228b22'], [1, '#ff4500']];
    name="土壤湿度";
  } else{
    sh='';
    color_data =[[0.4, '#ccc'], [0.58, '#ccc'], [1, '#ccc']];
    name="暂无数据";
  }
  // 基于准备好的dom，初始化echarts图表
  var myChart4 = echarts.init(document.getElementById('main4'));
    $("#main4").on('click', function (par) {
        var a = $(".zd-active").html();
        setGoToWhere("10sh",a);
    });
  //引入代码
  var option4 = {
    tooltip : {
      formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
      show : false,
      feature : {
        mark : {show: true},
        restore : {show: true},
        saveAsImage : {show: true}
      }
    },
    series : [
      {
        name:'当前数据',
        type:'gauge',
        center : ['49.7%', '58%'],
        radius:'105%',
        min:0,
        max:100,
        splitNumber: 5,       // 分割段数，默认为5
        axisLine: {            // 坐标轴线
          lineStyle: {
            color: color_data,       // 属性lineStyle控制线条样式
            width: 6
          }
        },
        axisTick: {            // 坐标轴小标记
          splitNumber: 10,   // 每份split细分多少段
          length :12,        // 属性length控制线长
          lineStyle: {       // 属性lineStyle控制线条样式
            color: 'auto'
          }
        },
        axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
          textStyle: {       // 其余属性默认使用全局文本样式，
            color: 'auto'
          }
        },
        splitLine: {           // 分隔线
          show: true,        // 默认显示，属性show控制显示与否
          length :20,         // 属性length控制线长
          lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            color: 'auto'
          }
        },
        pointer : {
          width : 5
        },
        title : {
          show : true,
          offsetCenter: [0, '-30%'],       // x, y，单位px
          textStyle: {       // 其余属性默认使用全局文本样式，
            fontWeight: 'bolder'
          }
        },
        detail : {
          formatter: function (value) {
            if(is){
              return value+'%'
            }
            else {
              return '%'
            }
          },
          offsetCenter:[0, '60%'],
          textStyle: {       // 其余属性默认使用全局文本样式，
            color: 'auto',
            fontWeight: 'bolder',
            fontSize: 20
          }
        },
        data:[{value:sh, name: name}]
      }
    ]
  };
  myChart4.setOption(option4);
}


function fainFall(data,is) {
  var ff,color_data,name;
  if(is){
    ff=data;
    color_data =[[0, '#48b'], [0.2, '#228b22'], [1, '#ff4500']];
    name="雨量";
  } else{
    ff='';
    color_data =[[0.2, '#ccc'], [0.8, '#ccc'], [1, '#ccc']];
    name="暂无数据";
  }
  // 基于准备好的dom，初始化echarts图表
  var myChart5 = echarts.init(document.getElementById('main5'));
    $("#main5").on('click', function (par) {
        var a = $(".zd-active").html();
        setGoToWhere("fainfall",a);
    });
  //引入代码
  var option5 = {
    tooltip : {
      formatter: "{a} <br/>{b} : {c}mm"
    },
    toolbox: {
      show : false,
      feature : {
        mark : {show: true},
        restore : {show: true},
        saveAsImage : {show: true}
      }
    },
    series : [
      {
        name:'当前数据',
        type:'gauge',
        center : ['49.7%', '58%'],
        radius:'105%',
        min:0,
        max:100,
        splitNumber: 5,       // 分割段数，默认为5
        axisLine: {            // 坐标轴线
          lineStyle: {
            color: color_data,       // 属性lineStyle控制线条样式
            width: 6
          }
        },
        axisTick: {            // 坐标轴小标记
          splitNumber: 10,   // 每份split细分多少段
          length :12,        // 属性length控制线长
          lineStyle: {       // 属性lineStyle控制线条样式
            color: 'auto'
          }
        },
        axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
          textStyle: {       // 其余属性默认使用全局文本样式，
            color: 'auto'
          }
        },
        splitLine: {           // 分隔线
          show: true,        // 默认显示，属性show控制显示与否
          length :20,         // 属性length控制线长
          lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            color: 'auto'
          }
        },
        pointer : {
          width : 5
        },
        title : {
          show : true,
          offsetCenter: [0, '-30%'],       // x, y，单位px
          textStyle: {       // 其余属性默认使用全局文本样式，
            fontWeight: 'bolder'
          }
        },
        detail : {
          formatter: function (value) {
            if(is){
              return value+'mm'
            }
            else {
              return 'mm'
            }
          },
          offsetCenter:[0, '60%'],
          textStyle: {       // 其余属性默认使用全局文本样式，
            color: 'auto',
            fontWeight: 'bolder',
            fontSize: 20
          }
        },
        data:[{value:ff, name: name}]
      }
    ]
  };
  myChart5.setOption(option5);
}


function pre(data,is) {
  var pre,color_data,name;
  if(is){
    pre=data;
    color_data =[[0.5, '#48b'], [0.8, '#228b22'], [1, '#ff4500']];
    name="气压";
  } else{
    pre='';
    color_data =[[0.2, '#ccc'], [0.8, '#ccc'], [1, '#ccc']];
    name="暂无数据";
  }
  // 基于准备好的dom，初始化echarts图表
  var myChart6 = echarts.init(document.getElementById('main6'));
    $("#main6").on('click', function (par) {
        var a = $(".zd-active").html();
        setGoToWhere("pressure",a);
    });
  //引入代码
  var option6 = {
    tooltip : {
      formatter: "{a} <br/>{b} : {c}hpa"
    },
    toolbox: {
      show : false,
      feature : {
        mark : {show: true},
        restore : {show: true},
        saveAsImage : {show: true}
      }
    },
    series : [
      {
        name:'当前数据',
        type:'gauge',
        center : ['49.7%', '58%'],
        radius:'105%',
        min:300,
        max:1300,
        splitNumber: 5,       // 分割段数，默认为5
        axisLine: {            // 坐标轴线
          lineStyle: {
            color: color_data,       // 属性lineStyle控制线条样式
            width: 6
          }
        },
        axisTick: {            // 坐标轴小标记
          splitNumber: 10,   // 每份split细分多少段
          length :12,        // 属性length控制线长
          lineStyle: {       // 属性lineStyle控制线条样式
            color: 'auto'
          }
        },
        axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
          textStyle: {       // 其余属性默认使用全局文本样式，
            color: 'auto'
          }
        },
        splitLine: {           // 分隔线
          show: true,        // 默认显示，属性show控制显示与否
          length :20,         // 属性length控制线长
          lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            color: 'auto'
          }
        },
        pointer : {
          width : 5
        },
        title : {
          show : true,
          offsetCenter: [0, '-30%'],       // x, y，单位px
          textStyle: {       // 其余属性默认使用全局文本样式，
            fontWeight: 'bolder'
          }
        },
        detail : {
          formatter: function (value) {
            if(is){
              return value+'hpa'
            }
            else {
              return 'hpa'
            }
          },
          offsetCenter:[0, '60%'],
          textStyle: {       // 其余属性默认使用全局文本样式，
            color: 'auto',
            fontWeight: 'bolder',
            fontSize: 20
          }
        },
        data:[{value:pre, name: name}]
      }
    ]
  };
  myChart6.setOption(option6);
}


function eff(data,is) {
  var eff,color_data,name;
  if(is){
    eff=data;
    color_data =[[0.4, '#48b'], [0.8, '#228b22'], [1, '#ff4500']];
    name="光合有效辐射";
  } else{
    eff='';
    color_data =[[0.2, '#ccc'], [0.8, '#ccc'], [1, '#ccc']];
    name="暂无数据";
  }
  // 基于准备好的dom，初始化echarts图表
  var myChart7 = echarts.init(document.getElementById('main7'));
    $("#main7").on('click', function (par) {
        var a = $(".zd-active").html();
        setGoToWhere("effradiation",a);
    });
  //引入代码
  var option7 = {
    tooltip : {
      formatter: "{a} <br/>{b} : {c}W/m2"
    },
    toolbox: {
      show : false,
      feature : {
        mark : {show: true},
        restore : {show: true},
        saveAsImage : {show: true}
      }
    },
    series : [
      {
        name:'当前数据',
        type:'gauge',
        center : ['49.7%', '58%'],
        radius:'105%',
        min:0,
        max:1000,
        splitNumber: 5,       // 分割段数，默认为5
        axisLine: {            // 坐标轴线
          lineStyle: {
            color: color_data,       // 属性lineStyle控制线条样式
            width: 6
          }
        },
        axisTick: {            // 坐标轴小标记
          splitNumber: 10,   // 每份split细分多少段
          length :12,        // 属性length控制线长
          lineStyle: {       // 属性lineStyle控制线条样式
            color: 'auto'
          }
        },
        axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
          textStyle: {       // 其余属性默认使用全局文本样式，
            color: 'auto'
          }
        },
        splitLine: {           // 分隔线
          show: true,        // 默认显示，属性show控制显示与否
          length :20,         // 属性length控制线长
          lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            color: 'auto'
          }
        },
        pointer : {
          width : 5
        },
        title : {
          show : true,
          offsetCenter: [0, '-30%'],       // x, y，单位px
          textStyle: {       // 其余属性默认使用全局文本样式，
            fontWeight: 'bolder'
          }
        },
        detail : {
          formatter: function (value) {
            if(is){
              return value+'W/m2'
            }
            else {
              return 'W/m2'
            }
          },
          offsetCenter:[0, '60%'],
          textStyle: {       // 其余属性默认使用全局文本样式，
            color: 'auto',
            fontWeight: 'bolder',
            fontSize: 20
          }
        },
        data:[{value:eff, name: name}]
      }
    ]
  };
  myChart7.setOption(option7);
}



function winds(data,is) {
  var winds,color_data,name;
  if(is){
    winds=data;
    color_data =[[0.1, '#48b'], [0.2, '#228b22'], [1, '#ff4500']];
    name="风速";
  } else{
    winds='';
    color_data =[[0.2, '#ccc'], [0.8, '#ccc'], [1, '#ccc']];
    name="暂无数据";
  }
  // 基于准备好的dom，初始化echarts图表
  var myChart8 = echarts.init(document.getElementById('main8'));
    $("#main8").on('click', function (par) {
        var a = $(".zd-active").html();
        setGoToWhere("windspecd",a);
    });
  //引入代码
  var option8 = {
    tooltip : {
      formatter: "{a} <br/>{b} : {c}m/s"
    },
    toolbox: {
      show : false,
      feature : {
        mark : {show: true},
        restore : {show: true},
        saveAsImage : {show: true}
      }
    },
    series : [
      {
        name:'当前数据',
        type:'gauge',
        center : ['49.7%', '58%'],
        radius:'105%',
        min:0,
        max:50,
        splitNumber: 5,       // 分割段数，默认为5
        axisLine: {            // 坐标轴线
          lineStyle: {
            color: color_data,       // 属性lineStyle控制线条样式
            width: 6
          }
        },
        axisTick: {            // 坐标轴小标记
          splitNumber: 10,   // 每份split细分多少段
          length :12,        // 属性length控制线长
          lineStyle: {       // 属性lineStyle控制线条样式
            color: 'auto'
          }
        },
        axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
          textStyle: {       // 其余属性默认使用全局文本样式，
            color: 'auto'
          }
        },
        splitLine: {           // 分隔线
          show: true,        // 默认显示，属性show控制显示与否
          length :20,         // 属性length控制线长
          lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            color: 'auto'
          }
        },
        pointer : {
          width : 5
        },
        title : {
          show : true,
          offsetCenter: [0, '-30%'],       // x, y，单位px
          textStyle: {       // 其余属性默认使用全局文本样式，
            fontWeight: 'bolder'
          }
        },
        detail : {
          formatter: function (value) {
            if(is){
              return value+'m/s'
            }
            else {
              return 'm/s'
            }
          },
          offsetCenter:[0, '60%'],
          textStyle: {       // 其余属性默认使用全局文本样式，
            color: 'auto',
            fontWeight: 'bolder',
            fontSize: 20
          }
        },
        data:[{value:winds, name: name}]
      }
    ]
  };
  myChart8.setOption(option8);
}
function windDir(data,is) {
  var winddir ,color_data,name;
  if(is){
    winddir =data;
    color_data =[[0.2, '#228b22'], [0.8, '#228b22'], [1, '#228b22']];
    name="风向";
  } else{
    winddir ='';
    color_data =[[0.2, '#ccc'], [0.8, '#ccc'], [1, '#ccc']];
    name="暂无数据";
  }
  // 基于准备好的dom，初始化echarts图表
  var myChart9 = echarts.init(document.getElementById('main9'));
    $("#main9").on('click', function (par) {
        var a = $(".zd-active").html();
        setGoToWhere("winddir",a);
    });
  //引入代码
  var option9 = {
    tooltip : {
      formatter: "{a} <br/>{b} : {c}"
    },
    toolbox: {
      show : false,
      feature : {
        mark : {show: true},
        restore : {show: true},
        saveAsImage : {show: true}
      }
    },
    series : [
      {
        name:'当前数据',
        type:'gauge',
        center : ['49.7%', '53%'],
        radius:'100%',
        startAngle: 270, //开始角度 左侧角度
        endAngle: -89,
        min:0,
        max:100,
        splitNumber: 8,       // 分割段数，默认为5
        axisLine: {            // 坐标轴线
          lineStyle: {
            color: color_data,       // 属性lineStyle控制线条样式
            width: 6
          }
        },
        axisTick: {            // 坐标轴小标记
          splitNumber: 1,   // 每份split细分多少段
          length :0,        // 属性length控制线长
          lineStyle: {       // 属性lineStyle控制线条样式
            color: 'auto'
          }
        },
        axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
          textStyle: {       // 其余属性默认使用全局文本样式，
            color: 'auto'
          },
          formatter:function (value) {
            var obj=(3.6*value);
            if (337.5<=obj || obj<=22.5){
              return "南"
            }else if (22.5<obj && obj<=67.5){
              return "西南"
            }else if(67.5<obj && obj<=112.5){
              return "西"
            }else if(112.5<obj && obj<=157.5){
              return "西北"
            }else if(157.5<obj && obj<=202.5){
              return "北"
            }else if(202.5<obj && obj<=247.5){
              return "东北"
            }else if(247.5<obj && obj<=292.5){
              return "东"
            }else if(292.5<obj && obj<=337.5){
              return "东南"
            }
          }
        },
        splitLine: {           // 分隔线
          show: true,        // 默认显示，属性show控制显示与否
          length :15,         // 属性length控制线长
          lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            color: 'auto'
          }
        },
        pointer : {
          width : 5
        },
        title : {
          show : true,
          offsetCenter: [0, '-30%'],       // x, y，单位px
          textStyle: {       // 其余属性默认使用全局文本样式，
            fontWeight: 'bolder'
          }
        },
        detail : {

          formatter:function () {
            return ''
          },
          textStyle: {       // 其余属性默认使用全局文本样式，
            color: 'auto',
            fontWeight: 'bolder',
            fontSize: 20
          }
        },
        data:[{value:winddir , name: name}]
      }
    ]
  };
  myChart9.setOption(option9);
}

function setGoToWhere(where,mac) {
    //console.log("-------------------------------------------------"+where);
    //console.log(window.location);
    location="qx-sub-microclimate.html?type="+where+"&mac="+mac;
}

var color=[ '#ff7f50', '#ff7c4b', '#da70d6', '#32cd32',
  '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500',
  '#1e90ff', '#7b68ee', '#00fa9a',
  '#6b8e23',  '#3cb371', '#b8860b', '#30e0e0' ];

var option1;
var option2;
var myChart1;
var myChart2;
// 10天逐时
function byHour(dataTime,data) {
  var time,dateHour;
  time=dataTime;
  dateHour=data;
  // 基于准备好的dom，初始化echarts图表
  myChart1 = echarts.init(document.getElementById('by-hour'));
  option1 = {
    color:[
      color[1] ,
      'red','blue'],
    tooltip : {
      trigger: 'axis',
      feature : {
        mark : {show: true},
        dataView : {show: true, readOnly: false},
        magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
        restore : {show: true},
        saveAsImage : {show: true}
      }
    },
    dataZoom : {
      show : true,
      realtime: true,
      start :0,
      end : 80,
      showDetail:true,
      handleColor: '#548cba'//h滑动图标的颜色
    },
    xAxis : [
      {
        type: 'category',
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
        //数据可置空
        // data:dataTime,
        data : [

          '2017-08-26',

          '2017-08-27',

          '2017-08-28',

          '2017-08-29',

          '2017-08-30',

          '2017-08-31',

          '2017-09-01',

          '2017-09-02',

          '2017-09-03',

          '2017-09-04',

          '2017-09-05',

          '2017-09-06',

          '2017-09-07',

          '2017-09-08',

          '2017-09-09',

          '2017-09-10',

          '2017-09-11',

          '2017-09-12',

          '2017-09-13',

          '2017-09-14',

          '2017-09-15',

          '2017-09-16',

          '2017-09-17',

          '2017-09-18',

          '2017-09-19',

          '2017-09-20',

          '2017-09-21',

          '2017-09-22',

          '2017-09-23',

          '2017-09-24',

          '2017-09-25',

          '2017-09-26',

          '2017-09-27',

          '2017-09-28',

          '2017-09-29',

          '2017-09-30',

          '2017-10-01',

          '2017-10-02',

          '2017-10-03',

          '2017-10-04',

          '2017-10-05',

          '2017-10-06',

          '2017-10-07',

          '2017-10-08',

          '2017-10-09',

          '2017-10-10',

          '2017-10-11',

          '2017-10-12',

          '2017-10-13',

          '2017-10-14',

          '2017-10-15',

          '2017-10-16',

          '2017-10-17',

          '2017-10-18',

          '2017-10-19',

          '2017-10-20',

          '2017-10-21',

          '2017-10-22',

          '2017-10-23',

          '2017-10-24',

          '2017-10-25',

          '2017-10-26',

          '2017-10-27',

          '2017-10-28',

          '2017-10-29',

          '2017-10-30',

          '2017-10-31',

          '2017-11-01',

          '2017-11-02',

          '2017-11-03',

          '2017-11-04',

          '2017-11-05',

          '2017-11-06',

          '2017-11-07',

          '2017-11-08',

          '2017-11-09',

          '2017-11-10',

          '2017-11-11',

          '2017-11-12',

          '2017-11-13',

          '2017-11-14',

          '2017-11-15',

          '2017-11-16',

          '2017-11-17',

          '2017-11-18',

          '2017-11-19',

          '2017-11-20',

          '2017-11-21',

          '2017-11-22',

          '2017-11-23',

          '2017-11-24',

          '2017-11-25',

          '2017-11-26',

          '2017-11-27',

          '2017-11-28',

          '2017-11-29',

          '2017-11-30',

          '2017-12-01',

          '2017-12-02',

          '2017-12-03'

        ]
      }
    ],
    yAxis : [
      {
        type : 'value',
        axisLine:{
          lineStyle:{
            type:'solid',
            color:'#4187bb'
          }
        },
        scale:true,
        precision: 1,
        splitNumber: 9,
        boundaryGap: [0.05, 0.05],
        splitArea : {show : true},
        axisLabel : {
          textStyle:{
            color: '#333'
          },
          formatter: '{value} °C'
        },
        axisTick:{
          inside:true
        }
      }
    ],
    series : [
      {
        name:'10天逐时',
        type:'line',
        barMaxWidth:6,
        //数据可置空
        // data:dateHour,
        data:[

          '22.9',

          '17.5',

          '15.8',

          '19.0',

          '18.6',

          '22.3',

          '18.6',

          '24.9',

          '21.4',

          '18.2',

          '24.8',

          '22.6',

          '22.4',

          '16.2',

          '18.3',

          '21.3',

          '21.1',

          '20.5',

          '22.5',

          '20.4',

          '23.1',

          '13.6',

          '21.8',

          '21.1',

          '22.5',

          '23.3',

          '23.7',

          '11.3',

          '13.0',

          '17.5',

          '19.4',

          '19.0',

          '21.0',

          '10.6',

          '5.3',

          '13.3',

          '11.2',

          '14.6',

          '9.9',

          '14.0',

          '12.5',

          '15.0',

          '17.3',

          '14.9',

          '16.9',

          '15.6',

          '12.4',

          '11.8',

          '14.8',

          '9.8',

          '11.3',

          '14.9',

          '17.1',

          '16.2',

          '17.4',

          '15.8',

          '16.7',

          '18.4',

          '14.7',

          '12.3',

          '19.2',

          '22.2',

          '14.6',

          '16.1',

          '10.4',

          '10.5',

          '17.3',

          '9.5',

          '17.4',

          '17.4',

          '24.7',

          '19.5',

          '21.0',

          '12.6',

          '12.2',

          '-',

          '14.3',

          '13.0',

          '14.2',

          '14.7',

          '15.2'

        ]
      },

      /*
       */
    ]
  };

    myChart1.setOption(option1);
}

//每时逐分钟
function byMinute(dataTime,data) {
  var time,dateMinute;
  time=dataTime;
  dateMinute=data;
  // 基于准备好的dom，初始化echarts图表
  myChart2 = echarts.init(document.getElementById('by-minute'));
  option2 = {
    color:[
      color[1] ,
      'red','blue'],
    tooltip : {
      trigger: 'axis',
      feature : {
        mark : {show: true},
        dataView : {show: true, readOnly: false},
        magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
        restore : {show: true},
        saveAsImage : {show: true}
      }
    },
    dataZoom : {
      show : true,
      realtime: true,
      start :0,
      end : 80,
      showDetail:true,
      handleColor: '#548cba'//h滑动图标的颜色
    },
    xAxis : [
      {
        type: 'category',
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
        //数据可置空
        // data:time
        data : [

          '2017-08-26',

          '2017-08-27',

          '2017-08-28',

          '2017-08-29',

          '2017-08-30',

          '2017-08-31',

          '2017-09-01',

          '2017-09-02',

          '2017-09-03',

          '2017-09-04',

          '2017-09-05',

          '2017-09-06',

          '2017-09-07',

          '2017-09-08',

          '2017-09-09',

          '2017-09-10',

          '2017-09-11',

          '2017-09-12',

          '2017-09-13',

          '2017-09-14',

          '2017-09-15',

          '2017-09-16',

          '2017-09-17',

          '2017-09-18',

          '2017-09-19',

          '2017-09-20',

          '2017-09-21',

          '2017-09-22',

          '2017-09-23',

          '2017-09-24',

          '2017-09-25',

          '2017-09-26',

          '2017-09-27',

          '2017-09-28',

          '2017-09-29',

          '2017-09-30',

          '2017-10-01',

          '2017-10-02',

          '2017-10-03',

          '2017-10-04',

          '2017-10-05',

          '2017-10-06',

          '2017-10-07',

          '2017-10-08',

          '2017-10-09',

          '2017-10-10',

          '2017-10-11',

          '2017-10-12',

          '2017-10-13',

          '2017-10-14',

          '2017-10-15',

          '2017-10-16',

          '2017-10-17',

          '2017-10-18',

          '2017-10-19',

          '2017-10-20',

          '2017-10-21',

          '2017-10-22',

          '2017-10-23',

          '2017-10-24',

          '2017-10-25',

          '2017-10-26',

          '2017-10-27',

          '2017-10-28',

          '2017-10-29',

          '2017-10-30',

          '2017-10-31',

          '2017-11-01',

          '2017-11-02',

          '2017-11-03',

          '2017-11-04',

          '2017-11-05',

          '2017-11-06',

          '2017-11-07',

          '2017-11-08',

          '2017-11-09',

          '2017-11-10',

          '2017-11-11',

          '2017-11-12',

          '2017-11-13',

          '2017-11-14',

          '2017-11-15',

          '2017-11-16',

          '2017-11-17',

          '2017-11-18',

          '2017-11-19',

          '2017-11-20',

          '2017-11-21',

          '2017-11-22',

          '2017-11-23',

          '2017-11-24',

          '2017-11-25',

          '2017-11-26',

          '2017-11-27',

          '2017-11-28',

          '2017-11-29',

          '2017-11-30',

          '2017-12-01',

          '2017-12-02',

          '2017-12-03',

        ]
      }
    ],
    yAxis : [
      {
        type : 'value',
        axisLine:{
          lineStyle:{
            type:'solid',
            color:'#4187bb'
          }
        },
        scale:true,
        precision: 1,
        splitNumber: 9,
        boundaryGap: [0.05, 0.05],
        splitArea : {show : true},
        axisLabel : {
          textStyle:{
            color: '#333'
          },
          formatter: '{value} °C'
        },
        axisTick:{
          inside:true
        }
      }
    ],
    series : [
      {
        name:'每时逐分钟',
        type:'line',
        barMaxWidth:6,
        // data:dateMinute,
        data:[

          '22.9',

          '17.5',

          '15.8',

          '19.0',

          '18.6',

          '22.3',

          '18.6',

          '24.9',

          '21.4',

          '18.2',

          '24.8',

          '22.6',

          '22.4',

          '16.2',

          '18.3',

          '21.3',

          '21.1',

          '20.5',

          '22.5',

          '20.4',

          '23.1',

          '13.6',

          '21.8',

          '21.1',

          '22.5',

          '23.3',

          '23.7',

          '11.3',

          '13.0',

          '17.5',

          '19.4',

          '19.0',

          '21.0',

          '10.6',

          '5.3',

          '13.3',

          '11.2',

          '14.6',

          '9.9',

          '14.0',

          '12.5',

          '15.0',

          '17.3',

          '14.9',

          '16.9',

          '15.6',

          '12.4',

          '11.8',

          '14.8',

          '9.8',

          '11.3',

          '14.9',

          '17.1',

          '16.2',

          '17.4',

          '15.8',

          '16.7',

          '18.4',

          '14.7',

          '12.3',

          '19.2',

          '22.2',

          '14.6',

          '16.1',

          '10.4',

          '10.5',

          '17.3',

          '9.5',

          '17.4',

          '17.4',

          '24.7',

          '19.5',

          '21.0',

          '12.6',

          '12.2',

          '-',

          '14.3',

          '13.0',

          '14.2',

          '14.7',

          '15.2'

        ]
      },

      /*
       */
    ]
  };

    myChart2.setOption(option2);
}