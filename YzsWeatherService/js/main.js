/**
 * Created by mt on 2017-11-28.
 */

$(function () {
  //获取请求参数
  var searchStr = location.search;
  var a=searchStr.split("=");
  var b=a[1];
  $('.menu-nav a').removeClass("menu-nav-active").eq(b).addClass("menu-nav-active");
  var ulId = $('.menu-nav-active').data('whatever');
  $('#'+ulId).show().siblings('ul').hide();
  $('.sidebar img').attr('src','../img/'+ulId+'.png');
  var iframeSrc = $('#'+ulId+ ' li').eq(0).data('whatever');
  $('iframe.main-content').attr('src', iframeSrc+'.html');
  $('#'+ulId).on('click','li',function () {
    var recipient = $(this).data('whatever');
    if(recipient !==''){
      $('iframe.main-content').attr('src', recipient+'.html')
    }
    $(this).addClass('menu-sidebar-active').siblings().removeClass('menu-sidebar-active')
    setIframe()
  });
});

/**
 * 微信二维码
 */
function showImg(){ 
	$(".code").show();
} ;
function hideImg(){ 
	$(".code").hide();
};
/**
 * 页面加载完成设置iframe高度
 */
function setIframe(){
  if(document.body.clientHeight!=0){
	$('#subpage',parent.document).css("height",document.body.clientHeight);
  }
}