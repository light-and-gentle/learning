/**
 * Created by mt on 2017-12-11.
 */
var pageNumber = 1; //默认要查询的页码
var size = 10;      //默认要查询的每页的大小
var type = null;    //默认查询全部  --0旬报 1春播转报 2秋收秋种 3干旱监测信息 4气候影响评价 5天气预报
                      //               6农用天气预报 7秋粮产量预报 8短期气候预测 9农气科普 10农技知识
var status = [0,3];     //默认查询0未发布   -- 0未发布 1待审核 2审核未通过 3已发布

$(function () {
  $('.category').on('click','span',function () {
    $(this).addClass('lb-active').parents('.category').find('span').not($(this)).removeClass('lb-active');
     
  });
  $('.add-btn').on('click',function () {
    parent.document.getElementById('subpage').setAttribute('src','zz-compile-add.html');
  });
   
});
//分页
$('#light-pagination').pagination({
  items: 0,
  itemsOnPage: 7,
  cssStyle: 'light-theme'
});