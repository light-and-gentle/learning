/**
 * Created by mt on 2017-12-7.
 */
var itemsOnPage=10;
$(function () {
  $('.classify-list-content').on('click','li',function () {
    var recipient = $(this).data('whatever');
    $(this).addClass('classify-active').siblings().removeClass('classify-active');
    $('.current-classify').text(recipient)
      queryDoc();
  })

    $("input.search-btn").on('click',function () {
        queryDoc(1);
    });
//  分页

    $('#light-pagination').pagination({
        items:100,        //总条数
        itemsOnPage:itemsOnPage,   //每页显示条数
        cssStyle: 'light-theme',
        onPageClick:queryDoc,
        onInit:queryDoc
    });
});

function queryDoc(pageNumber) {
    // console.log(pageNumber+"页码下标")
    var type = $(".classify-active").data("type");
    if (pageNumber == undefined) {
        pageNumber = 1;
        // console.log(pageNumber+"要查询的页数")
    }
    // console.log(type +"leixing");
    // console.log(pageNumber)
    // console.log(itemsOnPage)
    var keyWord = $("input.search-t").val();
    //console.log(keyWord);
    if (keyWord != "") {
        console.log("keyWord为非空字符串")
        keyWordQuery(keyWord,pageNumber, itemsOnPage, type)
    } else {
        normalQuery(pageNumber, itemsOnPage, type);
    }
}

function normalQuery(pageNumber,size,type){
    console.log("开始查询")
    $.ajax({
        url:realPath+"product/query-by-type",
        data:{
            index:pageNumber,
            size:  size,
            type:type,
            states: [3],
        },
        dataType:"json",
        success:function(data){
            console.log(data);
            var innerStr="";
            $("#light-pagination").pagination('updateItems', data.count);
            for(var i = 0;i<data.list.length;i++){
                var str1=data.list[i].time.indexOf(" ");
                innerStr = innerStr+"<li>" +
                    "<span title='"+data.list[i].title+"' onclick=\"showDocIframe('" + data.list[i].title + "','"+data.list[i].url+"')\">"+data.list[i].title+"</span>" +
                    "<span class='time'>"+data.list[i].time.substr(0,str1)+"</span>" +
                    "</li>"
            }
            if (data.count == 0){
                innerStr="暂无最新数据"
                $(".page-content").hide();
            }else{
                $(".page-content").show();
            }
            $("ul.info-doc-list").html(innerStr);
            if (data.count != 0) {
                showDocIframe("'" + data.list[0].title + "'",data.list[0].url);
            }
        }
    });
}

//根据关键字查询
function keyWordQuery(keyWord,pageNumber,size,type) {
    $.ajax({
        url:realPath+"product/query-by-key",
        data:{
            keyWord:keyWord,
            index:pageNumber,
            size:  size,
            type:type,
            states:[3],
        },
        dataType:"json",
        success:function(data){
            console.log(data);
            console.log(data.error)
            if(data.error== undefined) {
                var innerStr = ""
                $("#light-pagination").pagination('updateItems', data.count);
                for (var i = 0; i < data.list.length; i++) {
                    var str1 = data.list[i].time.indexOf(" ");
                    innerStr = innerStr + "<li>" +
                        "<span title='" + data.list[i].title + "' onclick=\"showDocIframe('" + data.list[i].title + "','" + data.list[i].url + "')\">" + data.list[i].title + "</span>" +
                        "<span class='time'>" + data.list[i].time.substr(0, str1) + "</span>" +
                        "</li>"
                }
                if (data.count == 0){
                    innerStr="暂无最新数据"
                    $(".page-content").hide();
                }else{
                    $(".page-content").show();
                }
                $("ul.info-doc-list").html(innerStr)
                if (data.count != 0) {
                    showDocIframe("'" + data.list[0].title + "'",data.list[0].url);
                }
            }else{
                alert(data.error);
            }
        }
    });
}

function showDocIframe(title, docFileUrl){
    //$("#iframeWord").attr("src", "http://doc.fw121.com/?furl=http://39.104.56.35:12001/static/word/"+name);
    $("#iframeWord").attr("src", "http://doc.fw121.com/?furl="+docFileUrl);
}

function showDoc(title, docFileUrl){
    window.dialog = $("#docDiv").clone().dialog({
        title: title,
        width : 1000,
        height : 700,
        modal : true
    });
//		    $("iframe",dialog).attr("scrolling","no");
    $("iframe",dialog).attr("frameborder","0");
    $("iframe",dialog).attr("height","100%");
    $("iframe",dialog).attr("width","100%");
    docFileUrl = "http://doc.fw121.com/?furl=" + docFileUrl;
    $("iframe",dialog).attr("src", docFileUrl);
}