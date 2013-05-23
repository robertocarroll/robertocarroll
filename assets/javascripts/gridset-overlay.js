// Gridset Overlay JS

gs = {

	init: function () {
		
		if (window.location.href.match('gridset=show')) gs.show();
	
		gs.bind(document, 'keydown', function (e) { 
		
			if (!e) var e = window.event;
		
			if(e.metaKey || e.ctrlKey) {
				
				switch (e.which || e.keyCode) {
					case 71:
					
						var gw = document.getElementById('gridsetoverlaywrap');
					
						if (!gw) gs.show();
						else gs.remove(gw);
						
						gs.prevent(e);
						break;
						
				}
				
			}
		
		
		});
	
	},
	
	remove: function (gw) {
	
		document.body.removeChild(gw);
		
		if(window.detachEvent) window.detachEvent('onresize', gs.width);
		else window.removeEventListener('resize', gs.width, false);
	
	},
	
	width: function () {
		
		var swv = document.getElementById('gridscreenwidthval');
		if (swv) swv.innerHTML = window.innerWidth + 'px';
		
	},

	show: function () {
	
		var p = ['d','t','m'],
			c = [4,3,2],
			w = [1100,768,320],
			b = document.getElementsByTagName('body')[0],
			gw = '<div id="gridwrap"><div id="gridscreenwidthwrap"><p id="gridscreenwidth">Screen width: <strong id="gridscreenwidthval"></strong></p></div><div id="gridoverlay" class="wrapper">',
		
			k = 0, breaks = '',
			
			styles = '<style id="gridsetoverlaystyles" type="text/css">#gridsetoverlaywrap{position:static;}#gridwrap{display:block;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;pointer-events:none;font-family:Helvetica, Arial, sans-serif !important;}#gridoverlay{position:relative;height:100%;overflow:hidden !important;background:none !important;}#gridoverlay div{display:block;position:static;height:100%;color:#bcbcff;}#gridoverlay .gridset{position:absolute;width:100%;height:100%;top:0;left:0;opacity:0.7;}#gridoverlay .gridset div{text-align:left;font-size:10px !important;border-right:1px solid #bcbcff;border-left:1px solid #bcbcff;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}#gridoverlay div small{width:100%;display:block;text-align:center;color:#7D80DB;font-weight:700 !important;border-bottom:1px solid #bcbcff;border-top:1px solid #bcbcff;padding-top:0 !important;background-color:rgb(240,240,255) !important;text-transform:none !important;height:22px !important;line-height:22px !important;text-style:normal !important;}#gridoverlay .gridset:nth-child(2) div{border-style:dashed;padding-top:23px;}#gridoverlay .gridset:nth-child(2) small{border-style:dashed;}#gridoverlay .gridset:nth-child(3) div{border-style:dotted;padding-top:45px;}#gridoverlay .gridset:nth-child(3) small{border-style:dotted;}#gridsetoverlaywrap .noshow{display:none;}#gridscreenwidthwrap{display:block !important;width:100% !important;position:absolute !important;bottom:0 !important;left:0 !important;height:30px !important;border-top:1px solid #7D80DB !important;opacity:0.7 !important;background-color:rgb(240,240,255) !important;}#gridscreenwidth{display:block !important;width:100% !important;text-align:center !important;font-size:12px !important;line-height:1 !important;padding-top:8px !important;font-family:Helvetica, Arial, sans-serif !important; margin: 0 !important;color:#7D80DB !important;}@media only screen and (max-width:767px) {#gridsetoverlaywrap [class*=m1],#gridsetoverlaywrap [class*=m2],#gridsetoverlaywrap .m-all{display:block;float:left;margin-right:-100%;}#gridsetoverlaywrap [class*=m1]{width:38.25297783340304%;margin-left:0%;}#gridsetoverlaywrap [class*=m2]{width:61.59077216659695%;margin-left:38.252977833403%;}#gridsetoverlaywrap .m-hide{display:none !important;}}@media only screen and (min-width:768px) and (max-width:1099px) {#gridsetoverlaywrap [class*=t1],#gridsetoverlaywrap [class*=t2],#gridsetoverlaywrap [class*=t3],#gridsetoverlaywrap .t-all{display:block;float:left;margin-right:-100%;}#gridsetoverlaywrap [class*=t1]{width:30.901699302197535%;margin-left:0%;}#gridsetoverlaywrap [class*=t2]{width:19.098300204302085%;margin-left:30.901699302198%;}#gridsetoverlaywrap [class*=t3]{width:50.00000049350038%;margin-left:49.9999995065%;}#gridsetoverlaywrap .t-hide{display:none !important;}}@media only screen and (min-width:1100px) {#gridsetoverlaywrap [class*=d1],#gridsetoverlaywrap [class*=d2],#gridsetoverlaywrap [class*=d3],#gridsetoverlaywrap [class*=d4],#gridsetoverlaywrap .d-all{display:block;float:left;margin-right:-100%;}#gridsetoverlaywrap [class*=d1]{width:27.639320200883223%;margin-left:0%;}#gridsetoverlaywrap [class*=d2]{width:17.0820390644912%;margin-left:27.639320200883%;}#gridsetoverlaywrap [class*=d3]{width:10.55728058645084%;margin-left:44.721359265374%;}#gridsetoverlaywrap [class*=d4]{width:44.721360148174746%;margin-left:55.278639851825%;}#gridsetoverlaywrap .d-hide{display:none !important;}}</style>';
						
		while (p[k]) {
		
			var hides = '', 
				l = 0;
		
			if (w[k] != breaks && k == 0) gw += '<div>';
			else if (w[k] != breaks) gw += '</div><div>';
		
			while (p[l]) {
		
				if (l != k && w[l] != w[k]) hides += p[l] + '-hide ';
				l++;			
		
			}
		
			gw += '<div class="gridset ' + hides + '"><div class="'+p[k]+'1"><small>'+p[k]+'1</small></div>';
		
			var i = 1;
		
			while (i++ < c[k]) gw += '<div class="'+p[k]+i+'"><small>'+p[k]+i+'</small></div>';
		
			gw += '</div>';
		
			if (k == w.length - 1) gw += '</div>';
		
			breaks = w[k];
		
			k++;
		
		}
		
		gw += '</div></div>';
		
		var newgw = document.createElement('div');
		
		newgw.id = 'gridsetoverlaywrap';
		
		newgw.innerHTML = gw + styles;
		
		b.appendChild(newgw);
		
		gs.width();
		gs.bind(window, 'resize', gs.width);
	
	},
	
	bind : function (t, e, f) {
		
		if (t.attachEvent) t.attachEvent('on' + e, f);
		else t.addEventListener(e, f, false);
	
	},
	
	prevent : function (e) {
	
		if (e.preventDefault) e.preventDefault();
		else event.returnValue = false;
	
	}


};

gs.init();

$(document).ready(function(){$(".time").text(function(index,value){returnMath.round(parseFloat(value));});});