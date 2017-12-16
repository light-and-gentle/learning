$(function(){
	findProduct('',[0,2],1,100);
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
			for ( var number in result.list) {
				content+='<tr title="'+result.list[number].describe+'"><td>'+result.list[number].title+'</td><td>'+result.list[number].time+'</td><td>'+result.list[number].stateText+'</td><td>'+result.list[number].typeText+'</td><td> <span class="send-btn" title="签发"  onclick="updateProductState(1,\'\','+result.list[number].id+')"></span><span class="del-btn" title="删除"  onclick="deleteProduct('+result.list[number].id+')"></span><span class="upd-btn" title="修改" onclick="updatePDF('+result.list[number].id+')"></span></td></tr>';
			}
			if(content==""){
				content="<tr><td colspan='5'>暂无数据<td></tr>";
			}
			$("#content").html(content);
		}
	});
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
 * 修改服务产品
 */
function updatePDF(id){
	$('#subpage',parent.document).attr("src","zz-compile-add.html?id="+id);
}