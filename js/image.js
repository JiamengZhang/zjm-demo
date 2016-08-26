var images;//图片组
var imglist;//图片集合

/*
 * 拍照
 * imglist为图片数组，格式为xx,xx,xx
 */
function takephoto(){
	if(imglist){
		var imglist1 = imglist.split(',');
		var imgnum = imglist1.length;//显示图片的个数
		if(imgnum >= 3){//判读图片个数，图片最多不能超过三张
			toast(0,5,"上传图片不能超过三张！",2000);
		}else{
			appcan.window.confirm({
		       	title : "提示",
		        content : "请选择操作方式",
		        buttons : ['相册','拍照','取消'],
		        callback : function(err, data, dataType, optId) {
		            if(data == '0'){//调取相册信息
		                getImg();
		            }else if(data == '1'){//调取照相机
		                getCamera();
		            }else if(data == '2'){//取消
								
		            }
		        }
		    });
       	}
   	}else{
       	appcan.window.confirm({
	       	title : "提示",
	        content : "请选择操作方式",
	        buttons : ['相册','拍照','取消'],
	        callback : function(err, data, dataType, optId) {
	            if(data == '0'){//调取相册信息
	                getImg();
	            }else if(data == '1'){//调取照相机
	                getCamera();
	            }else if(data == '2'){//取消
							
	            }
	        }
	    });
    }
}

/**
 * 打开本地相册
 */
function getImg(){ 
	//使用uexImage插件
	var max = 3;//图片选择的最大个数
	if(imglist){
		var imglist2 = imglist.split(',');
	    var imgnum1 = imglist2.length;//显示图片的个数
	    max = 3-imgnum1;
	}
	
	var data={
        min: 1,
        max: max,
        quality: 0.8,
        detailedInfo: false
    }
    var json=JSON.stringify(data);
    uexImage.openPicker(json);
    uexImage.onPickerClosed=function(info){
    	var msg = eval('('+info+')');
        //imglist = msg.data;
        for(var i=0; i<msg.data.length; i++){
        	if(imglist == '' || imglist == null){//组成图片组，字符串格式，格式为XX,YY
				imglist = msg.data[i];
			}else{
				imglist = imglist+','+msg.data[i];
			}
			
			var name = msg.data[i].replace(/^.+\/([^\/]+)$/, "$1");
			//图片加入到数组arr_img
       		setlist(msg.data[i], name);
			//将图片转换为字节流格式
			fun_arr1_img(name, msg.data[i]);
        }
        
      	var imglist1 = imglist.split(',');
        var imgnum = imglist1.length;//显示图片的个数
        
        $(".ss_images_box > ul").html('');
        var imglistview = '';
		for(var i=0; i<imgnum; i++){
			imglistview += '<li><img class="ss_images" src="'+imglist1[i]+'" /><div class="ss_delete_box"><span class="fa fa-trash fa-x-1 ub ub-ac ub-pe" onclick="deleteimg(this);"></span></div></li>';
		}	
		$(".ss_images_box > ul").append(imglistview);
    }
}

/**
 * 照相机
 */
function getCamera(){
	//安卓机相机回调函数
	uexCamera.cbOpenInternal=function(opId, dataType, data){
		if(imglist == '' || imglist == null){//组成图片组，格式为XX,YY
			imglist = data;
		}else{
			imglist = imglist+','+data;
		}
		
		$(".ss_images_box > ul").append('<li><img class="ss_images" src="'+data+'" /><div class="ss_delete_box"><span class="fa fa-trash fa-x-1 ub ub-ac ub-pe" onclick="deleteimg(this);"></span></div></li>');
		
		var name = data.replace(/^.+\/([^\/]+)$/, "$1");
		//图片加入到数组arr_img
        setlist(data, name);
		//将图片转换为字节流格式
		fun_arr1_img(name,data);
    }
	
	
	//ios相机回调函数
	uexCamera.cbOpen = function(opId,dataType,data){
		if(imglist == '' || imglist == null){//组成图片组，格式为XX,YY
			imglist = data;
		}else{
			imglist = imglist+','+data;
		}
		
		$(".ss_images_box > ul").append('<li><img class="ss_images" src="'+data+'" /><div class="ss_delete_box"><span class="fa fa-trash fa-x-1 ub ub-ac ub-pe" onclick="deleteimg(this);"></span></div></li>');
		
		var name = data.replace(/^.+\/([^\/]+)$/, "$1");
		//图片加入到数组arr_img
        setlist(data, name);
		//将图片转换为字节流格式
		fun_arr1_img(name,data);
	};
	
	//打开相机,根据平台判断
	uexWidgetOne.getPlatform();//获取平台版本
	uexWidgetOne.cbGetPlatform = function(opId, dataType, data) {
		if (data == 1) {
			//是android
            uexCamera.openInternal(0,30);
		}else if(data == 0){
			//是IOS
            uexCamera.open(0,30);
        }
    };
}

/**
 * 删除图片
 */
function deleteimg(obj){
	appcan.window.confirm({
		title : "提示",
	    content : "是否删除该图片？",
	    buttons : ['确定','取消'],
	    callback : function(err, data, dataType, optId) {
	        if(data == '0'){//确定
	        	var n = $(".ss_images_box .ss_delete_box span").index(obj);//获取图片对应的位置
				//删除imglist数组中的对应的数据
				var imglist1 = imglist.split(',');
				imglist1.splice(n,1);
				imglist = imglist1.join();
				
				arr_img.splice(n,1);//删除图片数组
				arr1_img.splice(n,1);//删除字节流数组
				
				$(obj).parent().parent().remove();//删除图片
			}else if(data == '1'){//取消
	        	
	        }
	    }
	});
}

/**
 * 生成8为随机数
 */
function MathRand(){
	var Num="";
	for(var i=0; i<8; i++){
		Num+=Math.floor(Math.random()*10);
	}
	return Num;
}

/**
 * 运单规则
 */
function ewbNoRules(obj){
	if(szreg.test(obj)){
       return true;  
    }else{
         return false;
    }
}

//将图片数组转换为字节流 arr1_img赋值
function fun_arr1_img(name,data){
	convertImgToBase64(data, function(data1) {
		data1=data1.replace("data:image/png;base64,","");
		arr1_img.push({
			"fileName" : name,
        	"fileString" : data1
    	});
	});
}

/**
 * 图片转换base64方法
 * @param {Object} url
 * @param {Object} callback
 * @param {Object} outputFormat
 */
function convertImgToBase64(url, callback, outputFormat) {

    var canvas = document.createElement('CANVAS'),
        ctx = canvas.getContext('2d'),
        img = new Image;
    img.crossOrigin = 'Anonymous';
    
    img.onload = function() {
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL(outputFormat || 'image/png');
        callback.call(this, dataURL);
        canvas = null;
    };
    
    img.src = url;
}

//图片显示列表,imgurl表示图片路径
function setlist(imgurl,name){
	//图片表  图片加入到数组
	arr_img.push({
		"fileString" : imgurl,
		"fileName" : name
	});
}