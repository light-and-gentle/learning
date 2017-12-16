/**
 * Created by mt on 2017-4-3.
 */
//iframe的高度自适应子页面的高度
$("#iframeId").load(function () {
    var mainheight = $(this).contents().find("body").height()+120 +'px';
    $(this).height(mainheight);
});


//侧边栏收起
var sideInfoOld = 0;
$('#fold').click(function () {
    $('.sidebar').toggleClass('folded');
    $('.main-content').toggleClass('folded-main');
    $('.side-info').eq(sideInfoOld).toggleClass('active');
});
//左侧导航对应出子项，及右侧右侧默认内容
$('.side-info').click(function () {
    //侧边栏收起时默认不能点击
    if($('.sidebar').hasClass('folded') ||$(this).hasClass('active')){
        return;
    }
    $('.side-info').removeClass('active');
    $(this).addClass('active');
    sideInfoOld = $(this).index();
    //默认项
    $(this).find('.item-hook').removeClass('current').eq(0).addClass('current');
    var dataName = $(this).find('.item-hook').eq(0).data('name');
    //$("#iframeId").attr('src',dataName+'.html');
    window.location.href = dataName+'.html';
});
//点击左侧右边container的内容变化，也就是iframe的src变化
$('.item-hook').click(function (ev) {
    ev.stopPropagation();
    var dataName = $(this).data('name');
    $('.item-hook').removeClass('current');
    $(this).addClass('current');
    //跳转
    window.location.href = dataName+'.html';
    //$("#iframeId").attr('src',dataName+'.html');

});
