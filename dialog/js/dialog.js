(function(n){
//	function e(r){
//	    r != undefined && r != null && (t = n.extend({}, r));
//	}
	
	function r(r) {
		var t = {
			Content: "",
			Width: 400,
			Height: 300,
			AlertImg: 'dialog/img/alert.png'
		};
		
//		for(var i in r){
//			t[i] = r[i];
//		}
		
//		var v;
//		e(r);
		
		var h = n(window).width(),
			c = n(window).height(),
			l = (h - t.Width) / 2 + n(document).scrollLeft(),
			a = (c - t.Height) / 2 + n(document).scrollTop(),
			s = [],
			p = '';
			
		p = '<div id="Dialog" style="width: ' + t.Width + 'px;height: ' + t.Height + 'px;left: ' + l + 'px;top: ' + a + 'px;">'
			+'<div id="Container">'
			+'<table>'
			+'<tr><td><div id="AlertImg"><img src="'+ t.AlertImg +'"><\/div><\/td><\/tr>'
			+'<tr><td id="TipLine"> '+ t.Content + '<\/td><\/tr>'
			+'<\/table>'
			+'<\/div>'
			+'<\/div>';
			
		n("body").append(p);			
	}
	
	n.Dialog = {
		Alert: function (m) {
			r(m);
		}
	}
	
})(jQuery);
