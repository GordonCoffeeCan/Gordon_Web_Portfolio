// JavaScript Document
var canvas7, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function initPage7() {
	canvas7 = document.getElementById("canvas_Page7");
	anim_container = document.getElementById("animation_container_Page7");
	dom_overlay_container = document.getElementById("dom_overlay_container_Page7");
	images = images||{};
	ss = ss||{};
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleCompletePage7);
	loader.loadManifest(lib_page7.properties.manifest);
}
function handleFileLoadPage7(evt) {	
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }	
}
function handleCompletePage7(evt) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var queue = evt.target;
	var ssMetadata = lib_page7.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib_page7.InteractiveResume();
	stage = new createjs.Stage(canvas7);
	stage.addChild(exportRoot);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		createjs.Ticker.setFPS(lib_page7.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib_page7.properties.width, h = lib_page7.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}			
			canvas7.width = w*pRatio*sRatio;			
			canvas7.height = h*pRatio*sRatio;
			canvas7.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';				
			canvas7.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;		
		}
	}
	makeResponsive(false,'both',false,2);	
	fnStartAnimation();
}