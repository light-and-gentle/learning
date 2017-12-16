/**
 * Created by gc on 2017-12-13.
 */
var pageNumber = 1; //默认要查询的页码
var size = 10;      //默认要查询的每页的大小
var type = null;    //默认查询全部  --0旬报 1春播转报 2秋收秋种 3干旱监测信息 4气候影响评价 5天气预报
                      //               6农用天气预报 7秋粮产量预报 8短期气候预测 9农气科普 10农技知识
var status = [3];     //默认查询0未发布   -- 0未发布 1待审核 2审核未通过 3已发布

$(function () {
    //获取请求的参数
    var url = location.search;
    //console.log(url);
    type = url.split("=")[1];
    //  分页
    $('#light-pagination').pagination({
        items: 0,
        itemsOnPage: 10,
        cssStyle: 'light-theme',
        onPageClick:queryAll,
        onInit:queryAll
    });
  $('.category').on('click','span',function () {
    $(this).addClass('lb-active').parents('.category').find('span').not($(this)).removeClass('lb-active');
    type = $(this).data("type");
    console.log(type);
      queryAll(1);
  });
  $('.add-btn').on('click',function () {
    parent.document.getElementById('subpage').setAttribute('src','zz-compile-add.html');
  });
    queryAll();

});

function queryAll(index){
    console.log(index);
    if(index != undefined){
        pageNumber = index;
    }
  $.ajax({
      url:realPath+"product/query-by-type",
      data:{
          index:pageNumber,
          size:  size,
          type:type,
          states : [status] ,
      },
      dataType:"json",
      success:function(data){
        console.log(data);
        var inner = "";
          $("#light-pagination").pagination('updateItems', data.count);
        for (var i = 0;i<data.list.length;i++){
          var a = data.list[i].state;
          var b = getStateName(a);
          var c = data.list[i].type;
          var d = getTypeName(c);
          var t = data.list[i].time;
          var ind = t.lastIndexOf(".");
          var time = t.substr(0,ind);
          inner=inner+"<tr title='"+data.list[i].describe+"'><td>"+data.list[i].title+"</td><td>"+time+"</td>" +
              "<td class='product-state' data-type='"+a+"'>"+b+"</td><td class='product-type' data-type='"+c+"'>"+d+"</td>" +
              "<td><span class='share-btn' title='分享' data-sid='"+data.list[i].id+"'></span>" +
              "<div class=\"jiathis_style_24x24\"  onmouseover=\"setShare(\'"+data.list[i].url+"\')\">" +
              "      <a class=\"jiathis_button_weixin\"></a></div>" +
              "      <script type=\"text/javascript\">function setShare(url) {  jiathis_config.url =encodeURI(url); } var jiathis_config={hideMore:false,};</script><script type=\"text/javascript\" src=\"http://v3.jiathis.com/code/jia.js\" charset=\"utf-8\"></script>"+
              "</td></tr>";
        }
          if(data.count == 0){
              inner="<tr><td colspan='5'>暂无数据<td></tr>";
          }

        $("tbody").html(inner);
      }
  })
}

function getStateName(a) {
    var b;
    if (a == 0){
        b = "未发布"
    }else if(a == 1){
        b = "待审核"
    }else if(a == 2){
        b = "审核未通过"
    }else {
        b ="已发布"
    }
    return b;
}

function getTypeName(c){
    var d;
    if(c == 0){
        d = "旬报";
    }else if(c == 1){
        d = "春播专报";
    }else if(c == 2){
        d = "秋收秋种";
    }else if(c == 3){
        d = "干旱监测信息";
    }else if(c == 4){
        d = "气候影响评价"
    }else if(c == 5){
        d = "天气预报";
    }else if(c == 6){
        d = "农用天气预报";
    }else if(c == 7){
        d = "秋粮产量预报";
    }else if(c == 8){
        d = "短期气候预测";
    }else if(c == 9){
        d = "农气科普";
    }else if(c == 10){
        d = "农技知识";
    }
    return d;
}
//删除product
function deleteProduct(id){
    console.log(id);
    $.ajax({
        url:realPath+"product/deleteProduct",
        data:{
            id:id,
        },
        dataType:"json",
        success:function(data){
            queryAll(1);
        }
    });

}