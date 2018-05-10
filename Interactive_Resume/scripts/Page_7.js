(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"Page_7_atlas_", frames: [[0,0,801,269],[291,271,290,276],[906,0,116,562],[0,610,779,116],[0,271,289,337],[0,728,117,435],[781,271,123,608]]}
];


// symbols:



(lib.BrooklynBridge = function() {
	this.spriteSheet = ss["Page_7_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Calender2018 = function() {
	this.spriteSheet = ss["Page_7_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.EmpireStateBuilding = function() {
	this.spriteSheet = ss["Page_7_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.NYU_Logo = function() {
	this.spriteSheet = ss["Page_7_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.NYUGate = function() {
	this.spriteSheet = ss["Page_7_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.StatuesOfLiberty = function() {
	this.spriteSheet = ss["Page_7_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.WorldTradeCenter = function() {
	this.spriteSheet = ss["Page_7_atlas_"];
	this.gotoAndStop(6);
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


(lib.WorldTradeCenter_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.WorldTradeCenter();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.WorldTradeCenter_mc, new cjs.Rectangle(0,0,123,608), null);


(lib.StatueOfLiberty_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.StatuesOfLiberty();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.StatueOfLiberty_mc, new cjs.Rectangle(0,0,117,435), null);


(lib.NYULogo_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.NYU_Logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.NYULogo_mc, new cjs.Rectangle(0,0,779,116), null);


(lib.NYUGate_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.NYUGate();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.NYUGate_mc, new cjs.Rectangle(0,0,289,337), null);


(lib.EmpireStateBuilding_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.EmpireStateBuilding();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.EmpireStateBuilding_mc, new cjs.Rectangle(0,0,116,562), null);


(lib.calendar2018_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Calender2018();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.calendar2018_mc, new cjs.Rectangle(0,0,290,276), null);


(lib.BrooklynBridge_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BrooklynBridge();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BrooklynBridge_mc, new cjs.Rectangle(0,0,801,269), null);


(lib.WorldTradeCenterAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.WorldTradeCenter_mc();
	this.instance.parent = this;
	this.instance.setTransform(46.1,456,0.75,0.7,0,0,0,61.5,608.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:61.4,regY:607.9,scaleY:0.79,skewX:-2.5,y:455.9},19).to({regX:61.5,regY:608.1,scaleY:0.7,skewX:0,y:456},20).to({regX:61.4,regY:607.9,scaleY:0.79,skewX:2.5,x:46.2,y:455.9},20).to({regX:61.5,regY:608.1,scaleY:0.7,skewX:0,x:46.1,y:456},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,30.4,92.3,425.6);


(lib.StatueOfLibertiyAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.StatueOfLiberty_mc();
	this.instance.parent = this;
	this.instance.setTransform(44,326.2,0.75,0.7,0,0,0,58.6,435.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:58.4,regY:434.9,scaleY:0.8,skewX:-3,x:43.9},19).to({regX:58.6,regY:435.1,scaleY:0.7,skewX:0,x:44},20).to({regX:58.4,regY:434.8,scaleY:0.8,skewX:3},20).to({regX:58.6,regY:435.1,scaleY:0.7,skewX:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,21.7,87.8,304.5);


(lib.NYUGateAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.NYUGate_mc();
	this.instance.parent = this;
	this.instance.setTransform(108.5,252.8,0.75,0.682,0,0,0,144.6,337.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:144.5,regY:336.9,scaleY:0.81,skewX:-3},19).to({regX:144.6,regY:337.1,scaleY:0.68,skewX:0},20).to({regX:144.5,regY:336.9,scaleY:0.81,skewX:3},20).to({regX:144.6,regY:337.1,scaleY:0.68,skewX:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,23,216.8,229.8);


(lib.NYUAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.NYULogo_mc();
	this.instance.parent = this;
	this.instance.setTransform(314.6,46.9,0.808,0.808,0,0,0,389.4,58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({scaleX:0.85,scaleY:0.85,x:319.9,y:45.6},10,cjs.Ease.get(-0.01)).to({scaleX:0.81,scaleY:0.81,x:314.6,y:46.9},10).to({scaleX:0.85,scaleY:0.85,x:319.9,y:45.6},10).to({scaleX:0.81,scaleY:0.81,x:314.6,y:46.9},10,cjs.Ease.get(0.01)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,629.4,93.7);


(lib.EmpireStateBuildingAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.EmpireStateBuilding_mc();
	this.instance.parent = this;
	this.instance.setTransform(43.5,421.5,0.75,0.713,0,0,0,58,562.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:57.8,regY:561.9,scaleY:0.79,skewX:-3.3,x:43.6},19).to({regX:58,regY:562.1,scaleY:0.71,skewX:0,x:43.5},20).to({regY:561.8,scaleY:0.79,skewX:3.3,x:43.6,y:421.6},20).to({regY:562.1,scaleY:0.71,skewX:0,x:43.5,y:421.5},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,21,87,400.5);


(lib.Calender2018Anim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.calendar2018_mc();
	this.instance.parent = this;
	this.instance.setTransform(124.4,118,0.855,0.855,0,0,0,145.5,138);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({regX:145.4,regY:138.1,rotation:-10,y:118.1},10,cjs.Ease.get(-0.01)).to({regX:145.5,regY:138,rotation:5},10).to({regX:145.4,regY:138.1,rotation:-5},10).to({regX:145.5,regY:138,rotation:0,y:118},10,cjs.Ease.get(0.01)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,248,236);


(lib.BrooklynBridgeAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BrooklynBridge_mc();
	this.instance.parent = this;
	this.instance.setTransform(300.5,201.8,0.75,0.676,0,0,0,400.6,269.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:400.4,regY:268.6,scaleY:0.82,skewX:-3.3,y:201.7},19).to({regX:400.6,regY:269.1,scaleY:0.68,skewX:0,y:201.8},20).to({regX:400.4,regY:268.6,scaleY:0.82,skewX:3.3,x:300.4,y:201.7},20).to({regX:400.6,regY:269.1,scaleY:0.68,skewX:0,x:300.5,y:201.8},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,20,600.8,181.8);


(lib.Page_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// anim
	this.instance = new lib.NYUAnim_mc();
	this.instance.parent = this;
	this.instance.setTransform(0.1,69.1,1,1,0,0,0,314.7,46.9);

	this.instance_1 = new lib.BrooklynBridgeAnim_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-59.5,-90.8,1,1,0,0,0,300.4,110.9);

	this.instance_2 = new lib.NYUGateAnim_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(208.4,-114.9,1,1,0,0,0,108.4,137.8);

	this.instance_3 = new lib.EmpireStateBuildingAnim_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(341.7,-200.1,1,1,0,0,0,43.5,221.3);

	this.instance_4 = new lib.StatueOfLibertiyAnim_mc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-69,-152.2,1,1,0,0,0,43.9,173.9);

	this.instance_5 = new lib.Calender2018Anim_mc();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-235.5,-225.2,1,1,0,0,0,124.4,118);

	this.instance_6 = new lib.WorldTradeCenterAnim_mc();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-11.9,-212.7,1,1,0,0,0,46.1,243.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Page_7_mc, new cjs.Rectangle(-359.9,-425.6,745.1,541.5), null);


// stage content:
(lib.InteractiveResume = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 1
	this.instance = new lib.Page_7_mc();
	this.instance.parent = this;
	this.instance.setTransform(500,321.3,1,1,0,0,0,12.6,-154.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(627.5,349.6,745.1,541.5);
// library properties:
lib.properties = {
	width: 1000,
	height: 598,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Page_7_atlas_.png?1525896030698", id:"Page_7_atlas_"}
	],
	preloads: []
};




})(lib_page7 = lib_page7||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib_page7, images, createjs, ss, AdobeAn;