var lat;
var lng;
var now=new Date();
var forcastWeatherCode = {0:"0",1:"1",2:"1",3:"2",4:"",5:"53",6:"58",7:"7",8:"8",9:"57",10:"56"	,11:"",12:"",13:"",14:"7",15:"7",16:"7",17:"",18:"",19:"",20:"7",21:"3",22:"3",23:"6"
	,24:"3",25:"3",26:"13",27:"5",28:"18",29:"",30:"57",31:"57",32:"57",33:"57",34:"57",35:"57",36:"",37:"",38:"",39:"",40:"18",41:"18",42:"18",43:"18",44:"18",45:"18",46:"18",47:"18"
	,48:"18",49:"18",50:"7",51:"7",52:"7",53:"7",54:"7",55:"7",56:"7",57:"7",58:"7",59:"7",60:"7",61:"7",62:"8",63:"8",64:"9",65:"9",66:"7",67:"22",68:"6",69:"6",70:"14",71:"14",72:"15"
	,73:"15",74:"16",75:"16",76:"",77:"",78:"",79:"",80:"3",81:"3",82:"3",83:"6",84:"6",85:"13",86:"13",87:"",88:"",89:"5"}

var weatherNowArray = {
	0:"晴", 1:"多云", 2:"阴", 3:"阵雨", 4:"雷阵雨", 5:"雷阵雨伴有冰雹", 6:"雨夹雪", 7:"小雨", 8:"中雨", 9:"大雨", 10:"暴雨", 11:"大暴雨",
	12:"特大暴雨", 13:"阵雪", 14:"小雪", 15:"中雪", 16: "大雪", 17:"暴雪", 18:"雾", 19:"冻雨", 20:"沙尘暴", 21:"小到中雨", 22:"中到大雨", 23:"大到暴雨",
	24:"暴雨到大暴雨", 25:"大暴雨到特大暴雨", 26:"小到中雪", 27:"中到大雪", 28:"大到暴雪", 29:"浮尘", 30:"扬沙", 31:"强沙尘暴", 53:"霾", 99:"无",999999:"晴"
}

var WeatherImg={
	0:"qing",1:"duoyun",2:"yin",3:"zhenyu",4:"leizhenyu",5:"leizhenyu_bingbao",6:"yujiaxue",7:"xiaoyu",8:"zhongyu",9:"dayu",10:"baoyu",11:"dabaoyu",
	12:"tedabaoyu",13:"zhenxue",14:"xiaoxue",15:"zhongxue",16:"daxue",17:"baoxue",18:"wu",19:"dongyu",20:"shachenbao",21:"xiao_zhongyu",22:"zhong_dayu",23:"da_baoyu",
	24:"baoyu_dabaoyu",25:"dabaoyu_tedabaoyu",26:"xiao_zhongxue",27:"zhong_daxue",28:"da_baoxue",29:"fuchen",30:"yangsha",31:"shachenbao",53:"wumai",99:"qing",999999:"qing"}


$(function(){
	$(".body_bg").height($(window).height());
	//getLocation();
	showPosition();
});

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition, showError);
	} else {
		alert("浏览器不支持地理定位。");
	}
}

function showError(error) {
	switch (error.code) {
		case error.PERMISSION_DENIED:
			alert("定位失败,用户拒绝请求地理定位");
			break;
		case error.POSITION_UNAVAILABLE:
			alert("定位失败,位置信息是不可用");
			break;
		case error.TIMEOUT:
			alert("定位失败,请求获取用户位置超时");
			break;
		case error.UNKNOWN_ERROR:
			alert("定位失败,定位系统失效");
			break;
	}
}

function showPosition(position) {
	//lat = position.coords.latitude; //纬度
	//lng = position.coords.longitude; //经度
	var lat=139.39;
	var lng=25;
	$("#lat").val(lat);
	$("#lng").val(lng);//139.129.194.103
	//alert("lng:"+lng+",lat:"+lat);

	//定位信息
	setTimeout(function () {
		var gpsPoint = new BMap.Point(lng, lat);
		BMap.Convertor.translate(gpsPoint, 0, function (point) {
			var geoc = new BMap.Geocoder();
			geoc.getLocation(point, function (rs) {
				var addComp = rs.addressComponents;
				//alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
				//$("#location").html(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
				$("#location").html("<img src=\"image/localtion2.png\">"+addComp.city + "&nbsp; " + addComp.district);
			});
		});
	}, 3000);
	//实况
	url = "http://139.129.194.103:12001/weather/surface_data?lng=" + lng + "&lat=" + lat;
	$.ajax({
		type: "get",
		url: url,
		dataType: 'json',
		contentType: "application/x-www-form-urlencoded; charset=utf-8",
		async: false,
		success: function (result) {
			var surfaceData = result;
			console.log(surfaceData);
			console.log(weatherNowArray[surfaceData.weather_now]);
			var tem=Math.round(surfaceData.temp / 10)
			$("#tem").html(tem+"°");
			$("#weatherNow").html(weatherNowArray[surfaceData.weather_now]);
			$("#temMinMax").html(surfaceData.temp_min_24/10+"~"+surfaceData.temp_max_24/10+"℃");
			if (surfaceData.rh == "999999") {
				$("#rh").html("<img src=\"image/rh.png\">--");
			} else {
				$("#rh").html("<img src=\"image/rh.png\">"+surfaceData.rh + "%");
			}
			console.log("weather_now:"+surfaceData.weather_now);
			if(now.getHours()>7 && now.getHours()<19){
				if(WeatherImg[surfaceData.weather_now]!=undefined){
					$('#imgWeather').attr('src','../trip/img/weatherImg/day/'+WeatherImg[surfaceData.weather_now]+'.png');
				}else{
					$('#imgWeather').attr('src','../trip/img/weatherImg/day/'+WeatherImg[0]+'.png');
				}
			}else{
				if(WeatherImg[surfaceData.weather_now]!=undefined){
					$('#imgWeather').attr('src','../trip/img/weatherImg/night/'+WeatherImg[surfaceData.weather_now]+'.png');
				}else{
					$('#imgWeather').attr('src','../trip/img/weatherImg/night/'+WeatherImg[0]+'.png');
				}
			}
			if(surfaceData.visible_10==999999){
				$('#visible').html('<img src="image/vis.png">能见度极好');
			}else {
				$('#visible').html('<img src="image/vis.png">'+surfaceData.visible_10);
			}

			var windDir10 = surfaceData.wind_dir_10;
			var wind_dir = "无风";
			if (windDir10 > 337.5 && windDir10 <= 360 || windDir10 >= 0 && windDir10 <= 22.5) {
				wind_dir = "北风";
			} else if (windDir10 > 22.5 && windDir10 <= 67.5) {
				wind_dir = "东北风";
			} else if (windDir10 > 67.5 && windDir10 <= 112.5) {
				wind_dir = "东风";
			} else if (windDir10 > 112.5 && windDir10 <= 157.5) {
				wind_dir = "东南风";
			} else if (windDir10 > 157.5 && windDir10 <= 202.5) {
				wind_dir = "南风";
			} else if (windDir10 > 202.5 && windDir10 <= 247.5) {
				wind_dir = "西南风";
			} else if (windDir10 > 247.5 && windDir10 <= 292.5) {
				wind_dir = "西风";
			} else if (windDir10 > 292.5 && windDir10 <= 337.5) {
				wind_dir = "西北风";
			}
			var speed = (surfaceData.wind_speed_10 - 3) / 2;
			if(speed<0){
				speed=0;
			}
			$("#wind_dir").html('<img src="image/wind_dir.png">'+wind_dir);
			$("#wind_speed").html('<img src="image/wind_speed.png">'+speed+"级");
			$("#refresh").html('数据更新时间：<b>'+ new Date(result.updateTime).toString().substr(16, 5)+'</b>');
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			console.log(errorThrown);
		}
	});


	var tems=new Array();
	//7天预报
	$.ajax({ ////https://api.weather-lab.cn/forecast/9days?lat="+lat+"&lon="+lng+"&days=1
		url:"http://api.fw121.com/f7/get?token=c372adf83d67bb21b8e7767e923ec0fc&lon="+111+"&lat="+25,
		type:"get",
		success: function (result) {
			var forecast7=result;
			console.log();
			var str="";
			for (var i=0;i<7;i++){
				str+="<li>"+
					"<span class=\"week\" id=\"reportDay0\">"+forecast7[2*i].reportDay.substr(4,2)+'/'+forecast7[2*i].reportDay.substr(6,2)+"</span>"+
					"<span class=\"wea\" id=\"forecastWeather0A\">"+weatherNowArray[forecast7[i].weatherPhenomenon]+"</span>"+
					"<span class=\"weai\" id=\"img0\"><img src=\"./image/weatherImg/day/"+WeatherImg[forecast7[i].weatherPhenomenon]+".png\">"+
					"</span>"+
					"<span class=\"week\" >"+forecast7[i].tempMax+"℃</span>"+
					"<div class=\"tree clearfix\">"+
					"<p>"+
					"</p>"+
					"</div>"+
					"<span class=\"week\" >"+forecast7[2*i].tempMin+"℃</span>"+
					"<span class=\"weai\" id=\"img1\"><img src=\"./image/weatherImg/night/"+WeatherImg[forecast7[2*i].weatherPhenomenon12]+".png\">"+
					"</span>"+
					"<span class=\"wea\" id=\"forecastWeather1B\">"+weatherNowArray[forecast7[2*i].weatherPhenomenon12]+"</span>"+
					"</li>";
			}
			$('.clearfix').html(str);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			alert(XMLHttpRequest.status);
			alert(XMLHttpRequest.readyState);
			alert(textStatus);
		},
		complete: function(XMLHttpRequest, textStatus) {
			this; // 调用本次AJAX请求时传递的options参数
		}


	})


}