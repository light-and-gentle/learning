/**
 * Created by mt on 2017-11-29.
 */
var currentSid="";
var iniStation="";
$(function () {
  $('.select-area').on('click', '.qx', function () {
    var $box = $(".select-area .area-content");
    if ($box.is(':visible'))
      $(".qx-icon").removeClass('triangle-up').addClass('triangle-down');
    else
      $(".qx-icon").removeClass('triangle-down').addClass('triangle-up');
    $box.toggle(500);
  });

  //小气候站点击默认
  $('.zd-name').on('click', 'li', function () {
    $(this).addClass("zd-active").siblings().removeClass("zd-active");
    var clickSid = $(this).attr("data-sid");//渲染页面时设置自定义属性
    if (currentSid != clickSid) {
      currentSid = clickSid;
      zdClick();
    }
  });

    iniStation=function (station) {
        console.log(station+"修改位置");
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
        var outSrc=location.href;
        var lastline=outSrc.lastIndexOf("/");
        var lastPoint = outSrc.lastIndexOf(".");
        var subStr=outSrc.substr(lastline+1,lastPoint-lastline-1);
        if(subStr == "qx-microclimate") {
            var a = $("li.zd-active").data("sid");
            getSurfaceData(a);
        }else{
            goToBack();
        }
    }
  //小气候站点击滚动
  //每次移动(px)
  var Space = 15;
  if ($('.zd-name li').length > 5) $(".arrow").show();
  $(".arrow-l").on('click', function () {
    var $box = $(".zd-name");
    $box.css('left', '-=' + Space);
    var s = Math.abs(parseInt($box.css("left"))) - Space - 40;
    if (s >= $(".zd-name li:nth-child(1)").width()) {
      $box.find("li").slice(0, 1).appendTo($box);

    }
  });
  //向右滚动
  $(".arrow-r").on('click', function () {
    var $box = $(".zd-name");
    $box.css('margin-left', '+=' + Space);
    var s = Math.abs(parseInt($box.css("margin-left"))) - Space - 30;
    if (s >= $(".zd-name li:last-child").width()) {
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


  //要素实况详情点击
  $('.param').on('click','li',function () {
    $(this).addClass("param-active").siblings().removeClass('param-active');
    var typeCoulon = $(".param-active").data("type");
    var mac  = $("li.zd-active").data("sid");
    console.log("sid = "+mac);
    console.log(typeCoulon);
      var getTime= get60Minute();
      getMinute(mac,typeCoulon,getTime.beginTime,getTime.endTime);
      var getTime1 = get10Hour();
      getBy10Day(mac,typeCoulon,getTime1.beginTime,getTime1.endTime);
  });
});
function zdClick () {
    var a = $("li.zd-active").data("sid");
    getSurfaceData(a);
}