var stepNum = 1;//默认为第一步
var stepTotal = $(".stepBox li").size();//总步骤

$(function(){
	//上一步
	$(".previous").on("click",function(){
		if(stepNum>=1){
			stepNum--;	
			firstStep(stepNum);
			lastStep(stepNum);
			showSteps(stepNum)
			showStepPane(stepNum);
		}
		
	})
	//下一步
	$(".next").on("click",function(){
		if(stepNum < stepTotal){
			stepNum++;
			firstStep(stepNum);
			lastStep(stepNum);
			showSteps(stepNum)
			showStepPane(stepNum);
			
		}
		
	})
})

//判断是否为第一步
function firstStep(stepNum){
	if(stepNum <= 1){
		$(".previous").removeClass("clickable");
	}else{
		$(".previous").addClass("clickable");
	}
}

//判断是否为最后一步
function lastStep(stepNum){
	if(stepNum >= stepTotal){
		$(".next").removeClass("clickable");
//		$(".next").find("span").html("Finish");
	}else{
		$(".next").addClass("clickable");
//		$(".next").find("span").html("下一步");
	}
}

//显示对应的内容
function showStepPane(stepNum){
	if(stepNum <= stepTotal && stepNum >=1){
		$(".formWizardMain").find(".stepPane").removeClass("active");
		$(".formWizardMain").find(".stepPane").each(function(i,e){
			var stepPaneNum = $(this).attr("data-step");
			if(stepPaneNum == stepNum){
				$(this).addClass("active");
			}
		});
	}	
}


//显示对应的step
function showSteps(stepNum){
	if(stepNum <= stepTotal && stepNum >=1){
		$(".formWizardStep ul").find("li").removeClass("active");
		$(".formWizardStep ul").find("li").removeClass("complete");
		$(".formWizardStep ul").find("li").each(function(i,e){
			var stepNo = $(this).attr("data-step");
			if(stepNo == stepNum){
				$(this).addClass("active");
				for(var j=1; j<stepNum; j++){
					$(".formWizardStep ul").find("li").eq(j-1).addClass("complete");
				}
				
			}
		});
	}	
}

