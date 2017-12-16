$(function(){
	findProduct('',[3],1,7);
});

/**
 * 查询服务产品
 * @param type   产品类型
 * @param states 状态
 * @param index  第几页
 * @param size	 每页条数
 */
function findProduct(type,states,index,size){
	$.ajax({
		type : "get",
		async:false,
		url : base+"/product/query-by-type",
		data:{'type':type,'states':states,'index':index,'size':size},
		success : function(result) { 
			var content="";
            $("#light-pagination").pagination('updateItems', result.count);
			for ( var number in result.list) {
				content+='<tr><td onclick="showPDF(\''+result.list[number].url+'\')">'+result.list[number].title+'</td><td>'+result.list[number].time+'</td><td>'+result.list[number].stateText+'</td><td>'+result.list[number].typeText+'</td><td> <div class="jiathis_style_24x24"  onmouseover="setShare(\''+result.list[number].url+'\')"><a class="jiathis_button_weixin"></a></div><script type="text/javascript">function setShare(url) {  jiathis_config.url =encodeURI(url); } var jiathis_config={hideMore:false,};</script><script type="text/javascript" src="http://v3.jiathis.com/code/jia.js" charset="utf-8"></script><span class="del-btn" title="删除"  onclick="deleteProduct('+result.list[number].id+')"></span></td></tr>';
			}
			if(content==""){
				content="<tr><td colspan='5'>暂无数据<td></tr>";
			}
			$("#content").html(content);
			$("#light-pagination").pagination('updateItems', result.count);
		}
	});
}



/**
 * 查看PDF
 */
function showPDF(name){
	location.href=base+"static/pdf/"+name;

}

/**
 * 修改服务状态
 * @param state
 * @param id
 */
function updateProductState(state,describe,id){
	$.ajax({
		type : "get",
		async:false,
		url : base+"/product/updateProductState",
		data:{'state':state,'id':id,'describe':describe},
		success : function(result) { 
			if(result>0){
				alert("操作成功!");
				location.reload();
			}else{
				alert("操作失败,请稍后重试!");
			}
		}
	});
}

/**
 * 删除服务产品
 * @param id
 */
function deleteProduct(id){
	$.ajax({
		type : "get",
		async:false,
		url : base+"/product/deleteProduct",
		data:{'id':id},
		success : function(result) { 
			if(result>0){
				alert("操作成功!");
				location.reload();
			}else{
				alert("操作失败,请稍后重试!");
			}
		}
	});
}

/**
 * 显示描述窗体
 */
function ONPass(id){
	$("#describediv").show();
	$("#id").val(id);
}

/**
 * 确认不通过
 * @param state
 * @param describe
 * @param id
 */
function confirm(){
	updateProductState(2,$("#describe").val(),$("#id").val());
}

/**
 * 分享二维码
 * @param url
 */


