$(function(){
	$(".draggableList li").draggable({
		appendTo: "body",
		helper: "clone"
	});
	
	$("#draggableFirst ul").droppable({
//		activeClass: "ui-state-default",
//		hoverClass: "ui-state-hover",
		accept: ".draggableListItem",
		drop: function( event, ui ) {
			$( "<li></li>" ).text( ui.draggable.text() ).appendTo( this );
		}
	}).sortable({
		items: "li",
		placeholder: "portlet-placeholder",
//		sort: function() {
//			$( this ).removeClass( "ui-state-default" );
//		}
	});
	
	$("#draggableSecond ul").droppable({
//		activeClass: "ui-state-default",
//		hoverClass: "ui-state-hover",
		accept: ".draggableListItem2",
		drop: function( event, ui ) {
			$( "<li></li>" ).text( ui.draggable.text() ).appendTo( this );
		}
	}).sortable({
		items: "li",
		placeholder: "portlet-placeholder",
//		sort: function() {
//			$( this ).removeClass( "ui-state-default" );
//		}
	});
	
	$("#draggableContentMain ul").droppable({
//		activeClass: "ui-state-default",
//		hoverClass: "ui-state-hover",
		accept: ".draggableListItem",
		drop: function( event, ui ) {
			var list = ui.draggable.text();
			var content = '<li><div class="draggableItem"><i class="fa fa-calendar-o"></i><span>'+ list +'</span><b class="fa fa-close closebtn"></b></div><div class="draggableItemContent">这是'+ list +'部分的内容</div></li>';
			$(this).append(content);
		}
	}).sortable({
		items: "li",
		placeholder: "portlet-placeholder2",
		sort: function() {
			$( this ).removeClass( "ui-state-default" );
		}
	});
})
