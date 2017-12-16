

function gettemp(obj) {
    //console.log("获取当前"+obj);
    $.ajax({
        url:base+"/surface_data/search",
        data:"station="+obj+"&token=c372adf83d67bb21b8e7767e923ec0fc",
        //type:"post",
        dataType:"JSON",
        success:function(data){
          //  console.log("获取当前结果"+ data)
            //console.log(data);
            var date=new Date(data.observTime);
            var time=date.getHours()+":"+date.getMinutes();
            $(".time span").html(time + " 实况");
            $(".zs.h em").html(data.rh+"%");
        //    console.log(data.windDir10);
            $(".zs.w span").html(getWinddirName(data.windDir10));
            $(".zs.w em").html(data.windSpeed10/10+"m/s");
            $(".tem span").html(data.temp/10);
            var temp = data.temp/10;
            //console.log(temp);
            var a = (temp) * 0.8 + 40;
            //console.log(a);
            $(".c").css("height",a+"px");
        }
    })
}
function get7DaysForecast(obj) {
    //console.log(obj);
    $.ajax({
        url:base+"/f7/search",
        data:"station="+obj+"&token=c372adf83d67bb21b8e7767e923ec0fc",
        dataType:"JSON",
        success:function(data){
            //console.log(data);
            var temp = new Array(data.length/2);
            var temp1 = new Array(data.length/2);
            //湿度折线
            var rh = new Array(data.length/2);
            var rh1 = new Array(data.length/2);
            //风速折线
            var windSpeed = new Array(data.length/2);
            var windSpeed1= new Array(data.length/2);
            //能见度折线
            var vis = new Array(data.length/2);
            var vis1 = new Array(data.length/2);
            //设置日期X轴
            var dataXzhou= new Array(data.length/2);
            for(var i=0;i<data.length/2;i++){
                temp[i]=data[i*2].temp;
                temp1[i]=data[i*2+1].temp-1;
                rh[i] = data[i*2].rh;
                rh1[i] = data[i*2+1].rh;
                var a = ""+data[i*2].windDir;
                var b = a.split(".",1);
                windSpeed[i] = {value:data[i*2].windSpeed,symbol:"image://dataImg/f"+b+".png"};
                var a1 = ""+data[i].windDir;
                var b1 = a1.split(".",1);
                windSpeed1[i] = {value:data[i*2+1].windSpeed,symbol:"image://dataImg/f"+b1+".png"};
                vis[i] = data[i*2].vis;
                vis1[i] = data[i*2+1].vis;
                var x=data[i*2].reportDay;
                dataXzhou[i]=x;

            }
            console.log(windSpeed)
            sevenDaysOption.xAxis.data=dataXzhou;
            sevenDaysOption.legend.selected={'温度':true,'湿度':false,'风速风向':false,'能见度':false,"晚上温度":true,'晚上湿度':false,'晚上风速风向':false,'晚上能见度':false};
            sevenDaysOption.series[0].data=temp;
            sevenDaysOption.series[4].data=temp1;
            myChart.setOption(sevenDaysOption);
            myChart.on('legendselectchanged', function (params) {

                if(params.name=="温度"){
                    var option=$(".tab-active").data('option');
                    //console.log("却认当前状态" +option );
                    if(option == "greenhouseOption"){
                        //console.log("却认当前状态后进入封装方法")
                        for (var i = 0; i < data.length/2; i++) {
                            //console.log(getTheHutsForecast(data[i].reportDay, data[i].weatherPhenomenon, data[i].temp))
                            temp[i] = getTheHutsForecast(data[i*2].reportDay, data[i*2].weatherPhenomenon, data[i*2].temp);
                            temp1[i] = getTheHutsForecast(data[i*2+1].reportDay, data[i*2+1].weatherPhenomenon, data[i*2+1].temp);
                            //console.log(data[i].temp);
                        }
                        //console.log(temp);
                    }
                    sevenDaysOption.yAxis.axisLabel.formatter = '{value}℃'
                    sevenDaysOption.legend.selected = {'温度':true,'湿度':false,'风速风向':false,'能见度':false,"晚上温度":true,'晚上湿度':false,'晚上风速风向':false,'晚上能见度':false};
                    sevenDaysOption.series[0].data = temp
                    sevenDaysOption.series[4].data=temp1;
                }else if(params.name=="湿度"){
                    sevenDaysOption.yAxis.axisLabel.formatter='{value}%'
                    sevenDaysOption.legend.selected={'温度':false,'湿度':true,'风速风向':false,'能见度':false,"晚上温度":false,'晚上湿度':true,'晚上风速风向':false,'晚上能见度':false};
                    sevenDaysOption.series[1].data=rh;
                    sevenDaysOption.series[5].data=rh1;
                }else if(params.name=="风速风向"){
                    sevenDaysOption.yAxis.axisLabel.formatter='{value}级'
                    sevenDaysOption.legend.selected={'温度':false,'湿度':false,'风速风向':true,'能见度':false,"晚上温度":false,'晚上湿度':false,'晚上风速风向':true,'晚上能见度':false};
                    sevenDaysOption.series[2].data=windSpeed;
                    sevenDaysOption.series[6].data=windSpeed1;
                }else {
                    sevenDaysOption.yAxis.axisLabel.formatter='{value}km'
                    sevenDaysOption.legend.selected={'温度':false,'湿度':false,'风速风向':false,'能见度':true,"晚上温度":false,'晚上湿度':false,'晚上风速风向':false,'晚上能见度':true};
                    sevenDaysOption.series[3].data=vis;
                    sevenDaysOption.series[7].data=vis1;
                }
                myChart.setOption(sevenDaysOption);
            });
            //console.log(data);
            var date=new Date(data[1].fcstDate);
            var month=date.getMonth()+1;
            var day = date.getDate();
            //console.log(day);
            //console.log(data[0].reportDay.substr(6,2));
            $(".yubaoyitian li h1").eq(0).html(data[0].reportDay.substr(6,2)+"日晚上");
            $(".yubaoyitian li h1").eq(1).html(data[1].reportDay.substr(6,2)+"日白天");
            //更改天气图标
            $(".yubaoyitian .n00").css("background-image","url('wIcon/"+data[0].weatherPhenomenon+".png')");
            $(".yubaoyitian .n01").css("background-image","url('wIcon/"+data[1].weatherPhenomenon+".png')");
            //console.log(data[1].weatherPhenomenon);
            //修改天气文字说明左侧
            $(".yubaoyitian .wea").eq(0).attr("title",getWeatherName(data[0].weatherPhenomenon));
            $(".yubaoyitian .wea").eq(0).html(getWeatherName(data[0].weatherPhenomenon));
            //修改天气文字说明右侧
            $(".yubaoyitian .wea").eq(1).attr("title",getWeatherName(data[1].weatherPhenomenon));
            $(".yubaoyitian .wea").eq(1).html(getWeatherName(data[1].weatherPhenomenon));
            //修改温度
            $(".yubaoyitian .tem span").eq(0).html(data[0].temp);
            $(".yubaoyitian .tem span").eq(1).html(data[1].temp);
            //获取风向
            var a = ""+data[0].windDir;
            var b = a.split(".",1);
            //console.log("风向"+b[0]);
            $(".yubaoyitian .win .NW+span").attr("title",getWinddirName(b));
            $(".yubaoyitian .win .NW").css("background-image","url('dataImg/f"+b+".png')");
            a = ""+data[1].windDir;
            b = a.split(".",1);
            $(".yubaoyitian .win .SE").css("background-image","url('dataImg/f"+b+".png')");
            $(".yubaoyitian .win .SE+span").attr("title",getWinddirName(b));
            //获取风速
            $(".yubaoyitian .win .NW+span").html(data[0].windSpeed+"级");
            $(".yubaoyitian .win .SE+span").html(data[1].windSpeed+"级");
            //温度折线
        }
    })
}
/*success : function(result) {
    //绑定事件
    myChart.on('legendselectchanged', function (params) {
        var data=[];
        if(params.name=="1~3"){
            for ( var int = 0; int < 3; int++) {
                data.push(result[int].basinRain);
            }
            option.legend.selected={'1~3':true,'24~72':false};
            option.xAxis.data=["1","2","3"];
            option.series[0].data=data;
        }else{
            for ( var int = 3; int < result.length; int++) {
                data.push(result[int].basinRain);
            }
            option.legend.selected={'1~3':false,'24~72':true};
            option.xAxis.data=["12","24","72"];
            option.series[1].data=data;
        }
        myChart.setOption(option);
    });
    //初始化为1~3
    var data=[];
    for ( var int = 0; int < 3; int++) {
        data.push(result[int].basinRain);
    }
    option.series[0].data=data;
    myChart.setOption(option);*/

//获取天气名称
function getWeatherName(type){
    if (type==0){
        return "晴";
    }else if (type==1){
        return "多云";
    }else if (type==2){
        return "阴";
    }else if (type==3){
        return "阵雨";
    }else if (type==4){
        return "雷阵雨";
    }else if (type==5){
        return "雷阵雨伴有冰雹";
    }else if (type==6){
        return "雨夹雪";
    }else if (type==7){
        return "小雨";
    }else if (type==8){
        return "中雨";
    }else if (type==9){
        return "大雨";
    }else if (type==10){
        return "暴雨";
    }else if (type==11){
        return "大暴雨";
    }else if (type==12){
        return "特大暴雨";
    }else if (type==13){
        return "阵雪";
    }else if (type==14){
        return "小雪";
    }else if (type==15){
        return "中雪";
    }else if (type==16){
        return "大雪";
    }else if (type==17){
        return "暴雪";
    }else if (type==18){
        return "雾";
    }else if (type==19){
        return "冻雨";
    }else if (type==20){
        return "沙尘暴";
    }else if (type==21){
        return "小到中雨";
    }else if (type==22){
        return "中到大雨";
    }else if (type==23){
        return "大到暴雨";
    }else if (type==24){
        return "暴雨到大暴雨";
    }else if (type==25){
        return "大暴雨到特大暴雨";
    }else if (type==26){
        return "小到中雪";
    }else if (type==27){
        return "中到大雪";
    }else if (type==28){
        return "大到暴雪";
    }else if (type==29){
        return "浮尘";
    }else if (type==30){
        return "扬沙";
    }else if (type==31){
        return "强沙尘暴";
    }else if (type==53){
        return "霾";
    }
}

//获取风向名称
function getWinddirName(obj){
    if (337.5<=obj || obj<=22.5){
        return "南风"
    }else if (22.5<obj && obj<=67.5){
        return "西南风"
    }else if(67.5<obj && obj<=112.5){
        return "西风"
    }else if(112.5<obj && obj<=157.5){
        return "西北风"
    }else if(157.5<obj && obj<=202.5){
        return "北风"
    }else if(202.5<obj && obj<=247.5){
        return "东北风"
    }else if(247.5<obj && obj<=292.5){
        return "东风"
    }else if(292.5<obj && obj<=337.5){
        return "东南风"
    }
}




