$(function(){
	findDisaster('',0);
});

/**
 * 查询灾情图片
 * @param type   类型 0洪涝 1干旱 2冻害 3倒伏  4病虫害 空为全部
 * @param states 状态 0未审核 1通过 2不通过
 */ 
function findDisaster(type,state){
	$.ajax({
		type : "get",
		async:false,
		url : base+"/disaster/findDis",
		data:{'type':type,'state':state},
		success : function(result) { 
			var content="";
			for ( var number in result) {
				content+='<tr onclick="transfer(\''+result[number].img_url+'\',\''+result[number].describe+'\',\''+result[number].username+'\',\''+result[number].address+'\',\''+result[number].id+'\')"><td>'+result[number].title+'</td><td>'+result[number].time+'</td><td>'+result[number].stateText+'</td><td>'+result[number].typeText+'</td><td><span class="details" data-toggle="modal" data-target="#detailsModal" data-backdrop="static" data-whatever="'+result[number].title+'"><a href="javascript:void (0);">详情</a></span></td></tr>';
				
			}
			if(content==""){
				content="<tr><td colspan='5'>暂无数据<td></tr>";
			}
			$("#content").html(content);
		}
	});
}

/**
 * 给模态框赋值
 * @param url
 * @param describe
 * @param username
 * @param address
 * @param id
 */
function transfer(url,describe,username,address,id){
	$("#disImg").attr("src",url);
	$("#describe").html(describe);
	$("#username").html("用户名:"+username);
	$("#address").html("地址:"+address);
	$("#handle").html(' <button type="button" class="btn btn-primary btn-sure"  onclick="btnYes('+id+')">通过</button><button type="button" class="btn btn-default btn-danger" data-dismiss="modal"  onclick="btnNo('+id+')">不通过</button>');
}
/**
 * 通过
 * @param id
 */
function btnYes(id){
	$.ajax({
		type : "get",
		async:false,
		url : base+"/disaster/updateDis",
		data:{'id':id,'state':'1'},
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
 * 不通过
 * @param id
 */
function btnNo(id){
	$.ajax({
		type : "get",
		async:false,
		url : base+"/disaster/updateDis",
		data:{'id':id,'state':'2'},
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