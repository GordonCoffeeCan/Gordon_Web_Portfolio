(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"Page_4_atlas_", frames: [[0,468,564,486],[566,468,269,486],[0,0,702,466]]}
];


// symbols:



(lib.Computer = function() {
	this.spriteSheet = ss["Page_4_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Lamp = function() {
	this.spriteSheet = ss["Page_4_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Light = function() {
	this.spriteSheet = ss["Page_4_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
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


(lib.WebMouse_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AguAwIg6AiIgaAPIABg7IACjqIEACQIhUAwIBWCUIhdA1g");
	this.shape.setTransform(13.1,19.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.WebMouse_mc, new cjs.Rectangle(0,0,26.2,39.3), null);


(lib.WebCross_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,2,1).p("AhOhOIBOBOIBOhOAAAAAIBOBOAhOBOIBOhO");
	this.shape.setTransform(15.3,15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AhrBsQgsgsgBhAQABg+AsgtQAtgsA+gBQA/ABAtAsQAsAtABA+QgBBAgsAsQgtAtg/AAQg+AAgtgtg");
	this.shape_1.setTransform(15.3,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.WebCross_mc, new cjs.Rectangle(0,0,30.5,30.5), null);


(lib.WebBlock_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AnpEsIAApXIPTAAIAAJXg");
	this.shape.setTransform(49,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.WebBlock_mc, new cjs.Rectangle(0,0,98,60.1), null);


(lib.WebArrow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AhdlqIC7FqIi7Frg");
	this.shape.setTransform(9.4,36.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.WebArrow_mc, new cjs.Rectangle(0,0,18.9,72.6), null);


(lib.MouseClick_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(3,2,1).p("ABNgCIgBg4AgWA2IgxgcAAXATIgbgv");
	this.shape.setTransform(7.2,5.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.MouseClick_mc, new cjs.Rectangle(-2,-1.5,18.4,15), null);


(lib.Light_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Light();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Light_mc, new cjs.Rectangle(0,0,702,466), null);


(lib.Lamp_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Lamp();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Lamp_mc, new cjs.Rectangle(0,0,269,486), null);


(lib.Computer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Computer();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Computer_mc, new cjs.Rectangle(0,0,564,486), null);


(lib.WebAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Click
	this.instance = new lib.MouseClick_mc();
	this.instance.parent = this;
	this.instance.setTransform(79.2,99,1,1,0,0,0,7.4,5.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({_off:true},6).wait(39).to({_off:false,x:377.3,y:105.5},0).to({_off:true},6).wait(19).to({_off:false},0).to({_off:true},6).wait(34).to({_off:false,x:375.3,y:39.1},0).to({_off:true},6).wait(25));

	// Mouse
	this.instance_1 = new lib.WebMouse_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(376.9,177.3,1,1,0,0,0,13.1,19.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:95.9,y:124.3},14,cjs.Ease.get(0.01)).wait(30).to({x:395,y:132.3},15,cjs.Ease.get(0.01)).wait(55).to({x:391.8,y:64.4},10,cjs.Ease.get(0.01)).wait(25).to({x:376.9,y:177.3},10,cjs.Ease.get(0.01)).wait(1));

	// Cross
	this.instance_2 = new lib.WebCross_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(379.1,44.9,1,1,0,0,0,15.3,15.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).to({alpha:1},5).wait(100).to({alpha:0},5).to({_off:true},1).wait(15));

	// LeftArrow
	this.instance_3 = new lib.WebArrow_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(19.5,111.8,1,1,0,0,180,9.4,36.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(34).to({_off:false},0).to({alpha:1},5).wait(100).to({alpha:0},5).to({_off:true},1).wait(15));

	// RightArrow
	this.instance_4 = new lib.WebArrow_mc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(383.7,111.8,1,1,0,0,0,9.4,36.3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(34).to({_off:false},0).to({alpha:1},5).wait(100).to({alpha:0},5).to({_off:true},1).wait(15));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2cPZIAA5gMAy7AAAIAAZgg");
	mask.setTransform(182.3,98.5);

	// Layer 12
	this.instance_5 = new lib.WebBlock_mc();
	this.instance_5.parent = this;
	this.instance_5.setTransform(469.5,111.9,1.531,1.53,0,0,0,49.1,30.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(99).to({_off:false},0).to({regX:49,scaleX:2.2,scaleY:2.2,x:201.6,alpha:1},10,cjs.Ease.get(0.01)).wait(30).to({regY:30,scaleX:1,scaleY:1,x:88.3,y:103.5},10,cjs.Ease.get(0.01)).wait(11));

	// Image4
	this.instance_6 = new lib.WebBlock_mc();
	this.instance_6.parent = this;
	this.instance_6.setTransform(469.5,111.9,1.531,1.53,0,0,0,49.1,30.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(74).to({_off:false},0).to({regX:49,scaleX:2.2,scaleY:2.2,x:201.6,alpha:1},10,cjs.Ease.get(0.01)).wait(15).to({scaleX:1.53,scaleY:1.53,x:-65.6,alpha:0},10,cjs.Ease.get(0.01)).wait(51));

	// Image1
	this.instance_7 = new lib.WebBlock_mc();
	this.instance_7.parent = this;
	this.instance_7.setTransform(88.3,103.5,1,1,0,0,0,49,30);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(29).to({regY:30.1,scaleX:2.2,scaleY:2.2,x:201.6,y:111.9},10,cjs.Ease.get(0.01)).wait(35).to({scaleX:1.53,scaleY:1.53,x:-65.6,alpha:0},10,cjs.Ease.get(0.01)).wait(76));

	// Image3
	this.instance_8 = new lib.WebBlock_mc();
	this.instance_8.parent = this;
	this.instance_8.setTransform(314.8,103.5,1,1,0,0,0,49,30);

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(29).to({alpha:0},5).wait(110).to({alpha:1},5).wait(11));

	// Image2
	this.instance_9 = new lib.WebBlock_mc();
	this.instance_9.parent = this;
	this.instance_9.setTransform(201.5,103.5,1,1,0,0,0,49,30);

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(29).to({alpha:0},5).wait(110).to({alpha:1},5).wait(11));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CC33").s().p("AgeAfQgMgNAAgSQAAgRAMgNQANgMARAAQASAAAMAMQANANAAARQAAASgNANQgMAMgSAAQgRAAgNgMg");
	this.shape.setTransform(43,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AgdAfQgNgNAAgSQAAgRANgNQAMgMARAAQASAAAMAMQANANAAARQAAASgNANQgMAMgSAAQgRAAgMgMg");
	this.shape_1.setTransform(28.3,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3300").s().p("AgdAfQgNgNAAgSQAAgRANgNQAMgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	this.shape_2.setTransform(13.7,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("A/fReIAAhfMA+/AAAIAABfgA/fuVIAAjIMA+/AAAIAADIg");
	this.shape_3.setTransform(201.6,111.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,403.1,223.6);


(lib.LightAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Light_mc();
	this.instance.parent = this;
	this.instance.setTransform(351,233,1,1,0,0,0,351,233);
	this.instance.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},29).to({alpha:0.699},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,702,466);


(lib.Page_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Anim
	this.instance = new lib.Lamp_mc();
	this.instance.parent = this;
	this.instance.setTransform(404.4,145.9,0.6,0.6,0,0,0,134.8,243);

	this.instance_1 = new lib.LightAnim_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(210.7,160.3,0.6,0.6,0,0,0,350.9,233.1);

	this.instance_2 = new lib.WebAnim_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(202.6,165,0.6,0.6,0,0,0,201.5,213.6);

	this.instance_3 = new lib.Computer_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(195.2,145.9,0.6,0.6,0,0,0,281.9,243);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Page_4_mc, new cjs.Rectangle(0,0,485,300.2), null);


// stage content:
(lib.InteractiveResume = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 1
	this.instance = new lib.Page_4_mc();
	this.instance.parent = this;
	this.instance.setTransform(257.5,3.5,1,1,0,0,0,0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(757.5,155,485,300.2);
// library properties:
lib.properties = {
	width: 1000,
	height: 305,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Page_4_atlas_.png?1525664551386", id:"Page_4_atlas_"}
	],
	preloads: []
};




})(lib_page4 = lib_page4||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib_page4, images, createjs, ss, AdobeAn;