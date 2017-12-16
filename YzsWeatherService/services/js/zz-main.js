/**
 * Created by mt on 2017-12-11.
 */
$(function () {
  showHTML()
  $('.s-menu-nav a').on('click',function () {
    $(this).addClass('menu-nav-active').siblings().removeClass('menu-nav-active');
    showHTML()
  });
  $('.s-menu-sidebar').on('click','li',function () {
    var recipient = $(this).data('whatever');
    console.log(recipient);
    if(recipient !==''){
      if(recipient != "cp-service") {
          $('iframe.main-content').attr('src', recipient + '.html');
      }else if(recipient == "cp-service" || recipient == ""){
          var type = $(this).data('type');
          recipient = "cp-service";
          $(this).addClass('sub-active').siblings().removeClass('sub-active');
          $('iframe.main-content').attr('src', recipient + '.html?type='+type);
      }
    }
    $(this).addClass('s-menu-sidebar-active').siblings().removeClass('s-menu-sidebar-active')
    setIframe()
  });
});

/*
*默认展示页
* */
function showHTML() {
  var ulId = $('.menu-nav-active').data('whatever');
  if(ulId == "cpfw"){
      $('#' + ulId).show().siblings('ul').hide();
      $('#' + ulId + ' li').eq(0).addClass('s-menu-sidebar-active').siblings().removeClass('s-menu-sidebar-active');
      var iframeSrc = $('#' + ulId + ' li ul li').eq(0).data('whatever');
      console.log(iframeSrc);
      var type = $('#' + ulId + ' li ul li').eq(0).data('type');
      $('iframe.main-content').attr('src', iframeSrc + '.html?type='+type);
  }else {
      $('#' + ulId).show().siblings('ul').hide();
      $('#' + ulId + ' li').eq(0).addClass('s-menu-sidebar-active').siblings().removeClass('s-menu-sidebar-active');
      var iframeSrc = $('#' + ulId + ' li').eq(0).data('whatever');
      $('iframe.main-content').attr('src', iframeSrc + '.html');
  }
}


/**
 * 页面加载完成设置iframe高度
 */
function setIframe(){
  if(document.body.clientHeight!=0){
    $('#subpage',parent.document).css("height",document.body.clientHeight);
  }
}
/**
 * 退出
 */
function out(){
	document.cookie="usertype=";
	window.location="login.html";
}