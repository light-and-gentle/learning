var map;
$(function(){
	init();
	getAlertData();
	getStationData();
});
/**
 * 初始化地图
 */
function init(){
      var zoom = 9;
      map = new T.Map('mapDiv');
      map.centerAndZoom(new T.LngLat(112.3819,38.89317), zoom);
      area('忻州市');
}

/**
 * 解析行政区划边界
 */
function area(name) {
	var localsearch = new T.LocalSearch(map, {
		onSearchComplete : localSearchResult
	});
	localsearch.search(name);
	function localSearchResult(result) {
		if (result.getArea()) {
				var pointsArr = [];
				var points = result.getArea().points;
				for ( var i = 0; i < points.length; i++) {
					var regionArr = points[i].region.split(",");
					for ( var m = 0; m < regionArr.length; m++) {
						var lnglatArr = regionArr[m].split(" ");
						var lnglat = new T.LngLat(lnglatArr[0], lnglatArr[1]);
						pointsArr.push(lnglat);
					}
				}
				 var polygon = new T.Polygon(pointsArr, {
					 	color : "#242424",
						weight : 2,
						fillOpacity:0,
						opacity : 1,
						lineStyle : "dashed",
						name:name
				}); 
				map.addOverLay(polygon);
		}
	}
}

/**
 * 获取预警数据
 */
var listAlert=[];
function getAlertData(){
	$.ajax({
		type : "get",
		async:false,
		url : "http://api.fw121.com/alert/find?token=c372adf83d67bb21b8e7767e923ec0fc&code=140",
		success : function(result) {
			for ( var index in result) {
				var city=getCityLnglat(result[index].sender.substring(0,3));
				if(city!=""){
					result[index]["lntlat"]=city.area.lonlat;
					listAlert.push(result[index]);
				}
			}
		}
	});
	getAlertMaker();
}

/**
 * 添加預警标注点
 */
listAlertMaker=[];
function getAlertMaker(){
	for ( var index in listAlert) {
		var urlimg="http://img.fw121.com/alert/"+listAlert[index].eventType+"-"+listAlert[index].severity+".png";
		 var icon = new T.Icon({
	         iconUrl: urlimg,
	         iconSize: new T.Point(40, 40),
	         iconAnchor: new T.Point(10, 25)
	     });
	     var marker = new T.Marker(new T.LngLat(listAlert[index].lntlat.split(",")[0],listAlert[index].lntlat.split(",")[1]), {icon: icon,title:listAlert[index].headline,urlimg:urlimg,description:listAlert[index].description,areaDesc:listAlert[index].areaDesc});
	     map.addOverLay(marker);
	     marker.addEventListener("click", openMarkerInfo);
	     listAlertMaker.push(marker);
	     /**
	 	 * 打开窗口
	 	 */
	 	function openMarkerInfo(e){
	 		var content="<div id='alert'><img src='"+e.target.options.urlimg+"' style='right:50px;position: absolute;' /><br><br><h3>"+e.target.options.title+"</h3><br><h4>&nbsp;&nbsp;"+e.target.options.description+"</h4><br>&nbsp;&nbsp;<h5>影响范围:</h5>"+e.target.options.areaDesc+"</div>";
		    var infoWin = new T.InfoWindow(content/*,{maxWidth:'510px',maxHeight:'300px'}*/,{autoPan:true});
		    this.openInfoWindow(infoWin);
		    $("#alert").parent().addClass("alertinfoWin");
		    /*$("#alert").parent().css("width","500px");
		    $("#alert").parent().css("height","300px");
		    $("#alert").parent().css("overflow","scroll");*/
	 	}
	}
}

/**
 * 显示或不现实预警 tdt-infowindow-content
 * @param obj
 */
function alertClick(obj){
	if(obj.checked){
		for ( var index in listAlertMaker) {
			map.addOverLay(listAlertMaker[index]);
		}
	}else{
		for ( var index in listAlertMaker) {
			map.removeOverLay(listAlertMaker[index]);
		}
	}
}

/**
 * 获取自动站数据
 */
var listStation=[];
function getStationData(){
	$.ajax({
		type : "get",
		async:false,
		url : base+"station/findStation ",
		success : function(result) { 
			listStation=result;
		}
	});
	getStationMaker();
}

/**
 * 添加自动站标注点
 */
var listStationMaker=[];
function getStationMaker(){
	for ( var index in listStation) {
		var urlimg="";
		if(listStation[index].type==0){
			urlimg="../img/spot/1.png";
		}else{
			urlimg="../img/spot/2.png";
		}
		var icon = new T.Icon({
	         iconUrl:  urlimg,
	         iconSize: new T.Point(20, 20),
	         iconAnchor: new T.Point(10, 25)
	     });
	     var marker = new T.Marker(new T.LngLat(listStation[index].lon,listStation[index].lat), {icon: icon,title:listStation[index].name,address:listStation[index].address,lonlat:listStation[index].lon+"&nbsp"+listStation[index].lat});
	     listStationMaker.push(marker);
	   marker.addEventListener("mouseover", openMarkerInfo);
	     marker.addEventListener("mouseout",closeMarkerInfo); 
	}
	/**
	 * 打开窗口
	 */
	function openMarkerInfo(e){
		var infoWin="<h3>"+e.target.options.title+"<h3/><br/><h4>"+e.target.options.address+"</h4><br/><h5>"+e.target.options.lonlat+"</h5>";
		this.openInfoWindow(infoWin);
	}
	/**
	 * 关闭窗口
	 */
	function closeMarkerInfo(e){
		this.closeInfoWindow();
	}
}

/**
 * 显示或者不显示自动站
 * @param obj
 */
function stationClick(obj){
	if(obj.checked){
		for ( var index in listStationMaker) {
			map.addOverLay(listStationMaker[index]);
		}
	}else{
		for ( var index in listStationMaker) {
			map.removeOverLay(listStationMaker[index]);
		}
	}
}




/**
 * 获取城市经信息
 */
function getCityLnglat(name){
	var data="";
	$.ajax({
		type : "get",
		async : false,
		url : 'http://www.tianditu.com/query.shtml?postStr={"keyWord":"'+name+'","level":"11","mapBound":"116.04577,39.70307,116.77361,40.09583","queryType":"1","count":"20","start":"0"}&type=query',
		success : function(result) {
			data=JSON.parse(result);
		}
	});
	return data;
}


