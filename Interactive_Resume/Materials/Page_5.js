(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"Page_5_atlas_", frames: [[0,134,164,200],[772,0,228,270],[166,134,170,168],[0,0,770,132]]}
];


// symbols:



(lib.AS3_Icon = function() {
	this.spriteSheet = ss["Page_5_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.David_Ogilvy_Icon = function() {
	this.spriteSheet = ss["Page_5_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Flash_Icon = function() {
	this.spriteSheet = ss["Page_5_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Ogilvy = function() {
	this.spriteSheet = ss["Page_5_atlas_"];
	this.gotoAndStop(3);
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


(lib.OgilvyMather_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Ogilvy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.OgilvyMather_mc, new cjs.Rectangle(0,0,770,132), null);


(lib.FlashIcon_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Flash_Icon();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.FlashIcon_mc, new cjs.Rectangle(0,0,170,168), null);


(lib.DavidOgilvy_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.David_Ogilvy_Icon();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.696,0.696);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.DavidOgilvy_mc, new cjs.Rectangle(0,0,158.7,188), null);


(lib.AS3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.AS3_Icon();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.AS3_mc, new cjs.Rectangle(0,0,164,200), null);


(lib.FlashAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// AS3
	this.instance = new lib.AS3_mc();
	this.instance.parent = this;
	this.instance.setTransform(293,200,1,1,0,0,0,82,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(76).to({regY:100,scaleX:1.02,scaleY:0.98,y:101.9},0).wait(1).to({scaleX:1.03,scaleY:0.97,y:102.7},0).wait(1).to({scaleX:1.03,scaleY:0.97,y:103.3},0).wait(1).to({scaleX:1.04,scaleY:0.96,y:103.8},0).wait(1).to({scaleX:1.04,scaleY:0.96,y:104.2},0).wait(1).to({scaleX:1.05,scaleY:0.96,y:104.5},0).wait(1).to({scaleX:1.05,scaleY:0.95,y:104.8},0).wait(1).to({scaleX:1.05,scaleY:0.95,y:104.9},0).wait(1).to({regX:82.1,regY:200,scaleX:1.05,scaleY:0.95,y:200},0).wait(1).to({regX:82,regY:100,scaleX:1.05,scaleY:0.95,x:292.9,y:104.3},0).wait(1).to({scaleX:1.04,scaleY:0.96,y:102},0).wait(1).to({scaleX:1.04,scaleY:0.96,y:98.1},0).wait(1).to({scaleX:1.03,scaleY:0.97,y:92.9},0).wait(1).to({scaleX:1.01,scaleY:0.99,y:86.4},0).wait(1).to({scaleX:1,scaleY:1,y:78.7},0).wait(1).to({scaleX:0.99,scaleY:1.01,y:70.3},0).wait(1).to({scaleX:0.97,scaleY:1.03,y:61.5},0).wait(1).to({scaleX:0.95,scaleY:1.05,y:52.9},0).wait(1).to({scaleX:0.94,scaleY:1.06,y:44.9},0).wait(1).to({scaleX:0.93,scaleY:1.08,y:37.9},0).wait(1).to({scaleX:0.91,scaleY:1.09,y:32.2},0).wait(1).to({scaleX:0.91,scaleY:1.09,y:28},0).wait(1).to({scaleX:0.9,scaleY:1.1,y:25.5},0).wait(1).to({regX:82.1,regY:200,scaleX:0.9,scaleY:1.1,x:293,y:134.6},0).wait(1).to({regX:82,regY:100,x:292.9,y:24.9},0).wait(1).to({y:25.7},0).wait(1).to({y:26.8},0).wait(1).to({y:28.5},0).wait(1).to({y:30.5},0).wait(1).to({y:32.9},0).wait(1).to({y:35.8},0).wait(1).to({y:39.1},0).wait(1).to({y:42.8},0).wait(1).to({y:47},0).wait(1).to({y:51.8},0).wait(1).to({y:57.3},0).wait(1).to({y:63.8},0).wait(1).to({y:72.1},0).wait(1).to({regX:82.1,regY:200,x:293,y:200},0).wait(1).to({regX:82,regY:100,scaleX:0.96,scaleY:1.04,x:292.9,y:96.3},0).wait(1).to({scaleX:0.99,scaleY:1.01,y:99.3},0).wait(1).to({scaleX:1.02,scaleY:0.98,y:101.6},0).wait(1).to({scaleX:1.04,scaleY:0.96,y:103.6},0).wait(1).to({scaleX:1.05,scaleY:0.95,y:105.3},0).wait(1).to({scaleX:1.07,scaleY:0.93,y:106.8},0).wait(1).to({scaleX:1.08,scaleY:0.92,y:108},0).wait(1).to({scaleX:1.09,scaleY:0.91,y:109},0).wait(1).to({scaleX:1.1,scaleY:0.9,y:109.7},0).wait(1).to({regX:82.1,regY:200,scaleX:1.1,scaleY:0.9,x:293,y:200},0).wait(1).to({regX:82,regY:100,scaleX:1.07,scaleY:0.93,x:292.9,y:107},0).wait(1).to({scaleX:1.06,scaleY:0.94,y:105.7},0).wait(1).to({scaleX:1.05,scaleY:0.95,y:104.7},0).wait(1).to({scaleX:1.04,scaleY:0.96,y:103.9},0).wait(1).to({scaleX:1.03,scaleY:0.97,y:103.2},0).wait(1).to({scaleX:1.03,scaleY:0.97,y:102.6},0).wait(1).to({scaleX:1.02,scaleY:0.98,y:102.1},0).wait(1).to({scaleX:1.02,scaleY:0.98,y:101.6},0).wait(1).to({scaleX:1.01,scaleY:0.99,y:101.2},0).wait(1).to({scaleX:1.01,scaleY:0.99,y:100.9},0).wait(1).to({scaleX:1.01,scaleY:0.99,y:100.6},0).wait(1).to({scaleX:1,scaleY:1,y:100.3},0).wait(1).to({scaleX:1,scaleY:1,y:100.2},0).wait(1).to({scaleX:1,scaleY:1,y:100},0).wait(1).to({regY:200,x:293,y:200},0).wait(11));

	// Flash
	this.instance_1 = new lib.FlashIcon_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(85,200.1,1,1,0,0,0,84.9,168.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:85,regY:84,scaleX:1.02,scaleY:0.98,x:85.1,y:117.8},0).wait(1).to({scaleX:1.03,scaleY:0.97,y:118.5},0).wait(1).to({scaleX:1.03,scaleY:0.97,y:119},0).wait(1).to({scaleX:1.04,scaleY:0.96,y:119.3},0).wait(1).to({scaleX:1.04,scaleY:0.96,y:119.6},0).wait(1).to({scaleX:1.05,scaleY:0.95,y:119.8},0).wait(1).to({scaleX:1.05,scaleY:0.95,y:120},0).wait(1).to({scaleX:1.05,scaleY:0.95,y:120.2},0).wait(1).to({regX:84.8,regY:168.1,scaleX:1.05,x:85,y:200.1},0).wait(1).to({regX:85,regY:84,scaleX:1.05,scaleY:0.95,x:85.2,y:119.5},0).wait(1).to({scaleX:1.04,scaleY:0.96,y:117.3},0).wait(1).to({scaleX:1.04,scaleY:0.96,y:113.8},0).wait(1).to({scaleX:1.03,scaleY:0.97,y:108.9},0).wait(1).to({scaleX:1.02,scaleY:0.98,y:103},0).wait(1).to({scaleX:1,scaleY:1,y:96},0).wait(1).to({scaleX:0.99,scaleY:1.01,y:88.3},0).wait(1).to({scaleX:0.97,scaleY:1.03,x:85.1,y:80.2},0).wait(1).to({scaleX:0.96,scaleY:1.04,y:72},0).wait(1).to({scaleX:0.94,scaleY:1.06,x:85.2,y:64.1},0).wait(1).to({scaleX:0.93,scaleY:1.07,x:85.1,y:56.9},0).wait(1).to({scaleX:0.92,scaleY:1.08,y:50.8},0).wait(1).to({scaleX:0.91,scaleY:1.09,y:46.1},0).wait(1).to({scaleX:0.9,scaleY:1.1,y:43.2},0).wait(1).to({regX:84.9,regY:168,scaleX:0.9,scaleY:1.1,x:85,y:134.6},0).wait(1).to({regX:85,regY:84,y:42.5},0).wait(1).to({y:43.4},0).wait(1).to({y:44.9},0).wait(1).to({y:46.9},0).wait(1).to({y:49.5},0).wait(1).to({y:52.7},0).wait(1).to({y:56.5},0).wait(1).to({y:60.9},0).wait(1).to({y:65.9},0).wait(1).to({y:71.5},0).wait(1).to({y:77.6},0).wait(1).to({y:84.3},0).wait(1).to({y:91.6},0).wait(1).to({y:99.4},0).wait(1).to({regY:168.2,x:84.9,y:200.1},0).wait(1).to({regY:84,scaleX:0.96,scaleY:1.04,y:112.8},0).wait(1).to({scaleX:0.99,scaleY:1.01,y:115.3},0).wait(1).to({scaleX:1.02,scaleY:0.98,x:85,y:117.3},0).wait(1).to({scaleX:1.04,scaleY:0.96,y:119},0).wait(1).to({scaleX:1.05,scaleY:0.95,x:84.9,y:120.5},0).wait(1).to({scaleX:1.07,scaleY:0.93,x:85,y:121.7},0).wait(1).to({scaleX:1.08,scaleY:0.92,y:122.7},0).wait(1).to({scaleX:1.09,scaleY:0.91,x:84.9,y:123.5},0).wait(1).to({scaleX:1.1,scaleY:0.9,x:85,y:124.1},0).wait(1).to({regX:84.8,regY:168.1,scaleX:1.1,scaleY:0.9,x:85.1,y:200.1},0).wait(1).to({regX:85,regY:84,scaleX:1.07,scaleY:0.93,x:85.3,y:121.9},0).wait(1).to({scaleX:1.06,scaleY:0.94,y:120.8},0).wait(1).to({scaleX:1.05,scaleY:0.95,y:120},0).wait(1).to({scaleX:1.04,scaleY:0.96,y:119.3},0).wait(1).to({scaleX:1.03,scaleY:0.97,y:118.8},0).wait(1).to({scaleX:1.03,scaleY:0.97,x:85.2,y:118.2},0).wait(1).to({scaleX:1.02,scaleY:0.98,y:117.8},0).wait(1).to({scaleX:1.02,scaleY:0.98,y:117.4},0).wait(1).to({scaleX:1.01,scaleY:0.99,y:117.1},0).wait(1).to({scaleX:1.01,scaleY:0.99,y:116.8},0).wait(1).to({scaleX:1.01,scaleY:0.99,y:116.5},0).wait(1).to({scaleX:1,scaleY:1,x:85.3,y:116.3},0).wait(1).to({scaleX:1,scaleY:1,x:85.2,y:116.1},0).wait(1).to({scaleX:1,scaleY:1,y:116},0).wait(1).to({regX:84.9,regY:168.1,x:85,y:200.1},0).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,375,200);


(lib.DavidOgilvyAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DavidOgilvy_mc();
	this.instance.parent = this;
	this.instance.setTransform(79.4,128,1,1,-8,0,0,79.3,128);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:79.4,regY:94,rotation:-7.9,x:74.9,y:94.3},0).wait(1).to({rotation:-7.7,x:75},0).wait(1).to({rotation:-7.4,x:75.2},0).wait(1).to({rotation:-6.9,x:75.4},0).wait(1).to({rotation:-6.3,x:75.8,y:94.2},0).wait(1).to({rotation:-5.5,x:76.3,y:94.1},0).wait(1).to({rotation:-4.6,x:76.8},0).wait(1).to({rotation:-3.4,x:77.5},0).wait(1).to({rotation:-2.2,x:78.3,y:94},0).wait(1).to({rotation:-0.8,x:79.1},0).wait(1).to({rotation:0.7,x:79.9,y:94.1},0).wait(1).to({rotation:2.2,x:80.8},0).wait(1).to({rotation:3.6,x:81.6},0).wait(1).to({rotation:4.9,x:82.4,y:94.2},0).wait(1).to({rotation:6,x:83,y:94.3},0).wait(1).to({rotation:6.9,x:83.5},0).wait(1).to({rotation:7.5,x:83.9,y:94.4},0).wait(1).to({rotation:7.9,x:84.1},0).wait(1).to({regY:128,rotation:8,x:79.4,y:128},0).wait(1).to({regY:94,rotation:7.9,x:84,y:94.4},0).wait(1).to({rotation:7.7},0).wait(1).to({rotation:7.4,x:83.8,y:94.3},0).wait(1).to({rotation:6.9,x:83.4},0).wait(1).to({rotation:6.3,x:83.1},0).wait(1).to({rotation:5.4,x:82.6,y:94.2},0).wait(1).to({rotation:4.5,x:82},0).wait(1).to({rotation:3.3,x:81.3,y:94.1},0).wait(1).to({rotation:2.1,x:80.6},0).wait(1).to({rotation:0.7,x:79.8,y:94},0).wait(1).to({rotation:-0.7,x:79},0).wait(1).to({rotation:-2.1,x:78.2,y:94.1},0).wait(1).to({rotation:-3.4,x:77.4},0).wait(1).to({rotation:-4.6,x:76.7,y:94.2},0).wait(1).to({rotation:-5.7,x:76.1},0).wait(1).to({rotation:-6.5,x:75.6},0).wait(1).to({rotation:-7.2,x:75.1,y:94.3},0).wait(1).to({rotation:-7.6,x:74.9},0).wait(1).to({rotation:-7.9,x:74.8},0).wait(1).to({regX:79.3,regY:128,rotation:-8,x:79.4,y:128},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.9,-9.8,183.3,208.2);


(lib.Page_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Anim
	this.instance = new lib.FlashAnim_mc();
	this.instance.parent = this;
	this.instance.setTransform(477.5,253,1,1,0,0,0,187.5,100);

	this.instance_1 = new lib.DavidOgilvyAnim_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(96.4,103.8,1,1,0,0,0,79.4,94);

	this.instance_2 = new lib.OgilvyMather_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(533,113,1,1,0,0,0,385,66);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Page_5_mc, new cjs.Rectangle(0,0,918,353), null);


// stage content:
(lib.InteractiveResume = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 1
	this.instance = new lib.Page_5_mc();
	this.instance.parent = this;
	this.instance.setTransform(500,216,1,1,0,0,0,459,209);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(541,187,918,353);
// library properties:
lib.properties = {
	width: 1000,
	height: 360,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Page_5_atlas_.png?1525712070293", id:"Page_5_atlas_"}
	],
	preloads: []
};




})(lib_page5 = lib_page5||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib_page5, images, createjs, ss, AdobeAn;