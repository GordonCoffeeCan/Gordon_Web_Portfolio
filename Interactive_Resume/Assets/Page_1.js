(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.StageSpliteLine_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("EhOHAAAMCcPAAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.StageSpliteLine_mc, new cjs.Rectangle(-501,-1,1002,2), null);


(lib.imGordon_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AA4B9IAAiUQABgigMgPQgLgQgYAAQgRAAgPAJQgPAKgSASIAACwIgpAAIAAjyIAiAAIADAjIACAAQARgSAUgLQATgMAYgBQAmABATAYQASAYgBAvIAACZg");
	this.shape.setTransform(103.3,38.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Ag3BwQgZgPgPgcQgQgcAAgpQAAgoAQgbQAPgdAZgPQAagQAdAAQAeAAAaAQQAZAPAPAdQAQAbABAoQgBApgQAcQgPAcgZAPQgaAPgeABQgdgBgagPgAgkhRQgPAMgJAWQgJAVAAAaQAAArAUAZQATAZAeABQAggBATgZQATgZAAgrQAAgagJgVQgIgWgQgMQgQgLgVgBQgUABgQALg");
	this.shape_1.setTransform(76,39.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AhOCUQgbghgBg9QABgnAPgcQAOgdAYgPQAYgQAcAAQAUAAAQAIQAQAHAPANIgCgpIAAheIAqAAIAAFjIgjAAIgDgdIgCAAQgOAOgSALQgUAKgUAAQgvgBgagggAgcgaQgRALgIAUQgKAVAAAcQAAArASAZQARAYAfAAQARAAAPgIQAPgIAPgRIAAh+QgPgNgOgHQgPgFgPAAQgTAAgPAMg");
	this.shape_2.setTransform(47.7,33.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AhCB9IAAjyIAiAAIADAsIACAAQAMgXASgNQARgOAVgBQAHABAHABIAMAEIgIAkIgLgDIgNgBQgPAAgQANQgRAMgMAfIAACbg");
	this.shape_3.setTransform(28.6,38.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("Ag2BwQgagPgQgcQgPgcgBgpQABgoAPgbQAQgdAagPQAYgQAeAAQAeAAAaAQQAZAPAPAdQAQAbAAAoQAAApgQAcQgPAcgZAPQgaAPgeABQgegBgYgPgAgjhRQgQAMgJAWQgJAVAAAaQAAArATAZQAUAZAeABQAggBATgZQASgZABgrQAAgagIgVQgKgWgPgMQgQgLgVgBQgUABgPALg");
	this.shape_4.setTransform(4.3,39.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("Ag1CVQghgUgTgmQgTgmAAg1QABg0ATgmQATgmAigUQAigVAsAAQAWAAARAGQASAGAOAJQANAJAKALIgYAaQgNgNgQgJQgRgIgYAAQggAAgZAQQgYAQgNAdQgOAeAAApQAAAoANAeQANAeAYARQAYAQAiAAQASAAAQgFQAQgFAKgKIAAhVIhGAAIAAghIBsAAIAACJQgRAQgaAKQgaALghABQgrgBghgUg");
	this.shape_5.setTransform(-25,34.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AB/B9IAAiUQAAgigLgPQgMgQgWAAQgOAAgQAJQgOAKgRASIAACwIgoAAIAAiUQAAgigLgPQgLgQgYAAQgNAAgPAJQgQAKgRASIAACwIgpAAIAAjyIAiAAIAEAjIABAAQAQgSATgLQATgMAWgBQAbABAQAMQAPAMAIAWQATgVATgMQAUgNAWgBQAlABASAYQATAYAAAvIAACZg");
	this.shape_6.setTransform(-70.6,38.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgLBBIgIhTIgCguIArAAIgCAuIgIBTg");
	this.shape_7.setTransform(-97.7,23.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgUCkIAAlHIApAAIAAFHg");
	this.shape_8.setTransform(-110.3,34.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.imGordon_mc, new cjs.Rectangle(-160.5,0,321.2,66.9), null);


(lib.hi_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgKCpIAAjvIAUAAIAADvgAgNiGQgFgFgBgJQABgJAFgGQAFgFAIAAQAIAAAHAFQAFAGAAAJQAAAJgFAFQgHAFgIABQgIgBgFgFg");
	this.shape.setTransform(15.8,34.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("ABYClIAAilIivAAIAAClIgXAAIAAlJIAXAAIAACRICvAAIAAiRIAXAAIAAFJg");
	this.shape_1.setTransform(-5.7,34.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hi_mc, new cjs.Rectangle(-23.6,0,47.2,66.9), null);


(lib.Page_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.parent.stop();
	}
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(44).call(this.frame_44).wait(1));

	// UpperText
	this.UpperText_mc = new lib.hi_mc();
	this.UpperText_mc.parent = this;
	this.UpperText_mc.setTransform(20.1,-28.5,1,1,0,0,0,20.1,23.2);
	this.UpperText_mc.alpha = 0;
	this.UpperText_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.UpperText_mc).wait(15).to({_off:false},0).to({y:-44,alpha:1},19,cjs.Ease.get(0.01)).wait(11));

	// LowerText
	this.LowerText_mc = new lib.imGordon_mc();
	this.LowerText_mc.parent = this;
	this.LowerText_mc.setTransform(95.5,7.8,1,1,0,0,0,95.5,23.2);
	this.LowerText_mc.alpha = 0;
	this.LowerText_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.LowerText_mc).wait(25).to({_off:false},0).to({y:28,alpha:1},19,cjs.Ease.get(0.01)).wait(1));

	// SplitLine
	this.instance = new lib.StageSpliteLine_mc();
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,0.1,1,0,0,0,0,0.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:0,scaleX:0.22,y:0,alpha:0.172},0).wait(1).to({scaleX:0.27,alpha:0.245},0).wait(1).to({scaleX:0.31,alpha:0.3},0).wait(1).to({scaleX:0.34,alpha:0.347},0).wait(1).to({scaleX:0.37,alpha:0.388},0).wait(1).to({scaleX:0.4,alpha:0.425},0).wait(1).to({scaleX:0.42,alpha:0.459},0).wait(1).to({scaleX:0.44,alpha:0.491},0).wait(1).to({scaleX:0.46,alpha:0.52},0).wait(1).to({scaleX:0.48,alpha:0.548},0).wait(1).to({scaleX:0.5,alpha:0.574},0).wait(1).to({scaleX:0.52,alpha:0.599},0).wait(1).to({scaleX:0.54,alpha:0.623},0).wait(1).to({scaleX:0.55,alpha:0.646},0).wait(1).to({scaleX:0.57,alpha:0.667},0).wait(1).to({scaleX:0.58,alpha:0.688},0).wait(1).to({scaleX:0.6,alpha:0.708},0).wait(1).to({scaleX:0.61,alpha:0.727},0).wait(1).to({scaleX:0.62,alpha:0.746},0).wait(1).to({scaleX:0.63,alpha:0.764},0).wait(1).to({scaleX:0.65,alpha:0.781},0).wait(1).to({scaleX:0.66,alpha:0.797},0).wait(1).to({scaleX:0.67,alpha:0.813},0).wait(1).to({scaleX:0.68,alpha:0.828},0).wait(1).to({scaleX:0.69,alpha:0.843},0).wait(1).to({scaleX:0.7,alpha:0.857},0).wait(1).to({scaleX:0.71,alpha:0.87},0).wait(1).to({scaleX:0.72,alpha:0.883},0).wait(1).to({scaleX:0.73,alpha:0.895},0).wait(1).to({scaleX:0.74,alpha:0.907},0).wait(1).to({scaleX:0.74,alpha:0.918},0).wait(1).to({scaleX:0.75,alpha:0.929},0).wait(1).to({scaleX:0.76,alpha:0.939},0).wait(1).to({scaleX:0.76,alpha:0.948},0).wait(1).to({scaleX:0.77,alpha:0.957},0).wait(1).to({scaleX:0.78,alpha:0.965},0).wait(1).to({scaleX:0.78,alpha:0.972},0).wait(1).to({scaleX:0.79,alpha:0.979},0).wait(1).to({scaleX:0.79,alpha:0.985},0).wait(1).to({scaleX:0.79,alpha:0.99},0).wait(1).to({scaleX:0.8,alpha:0.994},0).wait(1).to({scaleX:0.8,alpha:0.997},0).wait(1).to({scaleX:0.8,alpha:0.999},0).wait(1).to({regY:0.1,scaleX:0.8,y:0.1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-0.5,100.1,1);


// stage content:
(lib.InteractiveResume = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 1
	this.instance = new lib.Page_0_mc();
	this.instance.parent = this;
	this.instance.setTransform(500,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(950,199.5,100.1,1);
// library properties:
lib.properties = {
	width: 1000,
	height: 200,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib_page1 = lib_page1||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib_page1, images, createjs, ss, AdobeAn;