  //KindEditor脚本
var editor;
$(function(){
	initKindEditor();
	getEvaluation();
});

/**
 * 初始化KindEditor
 */
function initKindEditor(){
	 editor = KindEditor.create('textarea[name="content"]',{
		 uploadJson : base+'upload/file',
    	 fileManagerJson : '../../kindeditor/jsp/file_manager_json.jsp',
         allowImageUpload : true, //打开本地上传图片功能
	 });
}

/**
 * 判断是新建还是修改
 */
function getEvaluation(){
	 var id=GetQueryString('id');
	  if(id!=null){
		  $.ajax({
				type : "get",
				async:false,
				url : base+"/product/getByIdProduct",
				data:{'id':id},
				success : function(result) { 
					$("#title").val(result.title);
					$("#type option[value='"+result.type+"']").attr("selected", true);
					editor.html(result.html);
				}
			});
	  }
}
/**
 * 保存
 * @param state
 * @returns {Boolean}
 */
function save(state){
	var title=$("#title").val();
	var Html = editor.html();
	var type=$("#type").val();
	if(title==""){
		alert("请输入标题!");
		return false;
	}
	if(Html==""){
		alert("请编辑内容!");
		return false;
	}
	if(type=="请选择"){
		alert("请选择类型!");
		return false;
	}
	Html='<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\"><html xmlns=\"http://www.w3.org/1999/xhtml"><body style="font-size: 12.0pt; font-family: 微软雅黑 !important">'+ Html + "</body></html>";
	var data="";
	var id=GetQueryString('id');
	if(id==null){
		data={'id':0,'html':Html,'title':title,'type':type,'state':state};
	}else{
		data={'id':id,'html':Html,'title':title,'type':type,'state':state};
	}
	$.ajax({
		type : "post",
		async:false,
		url : base+"/product/inserProduc",
		data:data,
		success : function(result) { 
			if(result==0){
				alert("操作异常,请稍后重试!");
			}else{
				alert("操作成功!");
				history.go(-1); 
			}
		}
	});
}

/**
 * 获取链接传参
 * @param name
 * @returns
 */
function GetQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

