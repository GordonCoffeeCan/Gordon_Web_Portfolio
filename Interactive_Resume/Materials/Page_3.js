(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"Page_3_atlas_", frames: [[0,509,290,276],[418,0,294,328],[532,330,400,221],[0,330,530,177],[0,0,416,265],[714,0,310,301],[934,303,68,480]]}
];


// symbols:



(lib.Calender2012 = function() {
	this.spriteSheet = ss["Page_3_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CCTV = function() {
	this.spriteSheet = ss["Page_3_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Pailou = function() {
	this.spriteSheet = ss["Page_3_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Raffles = function() {
	this.spriteSheet = ss["Page_3_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Tiananmen = function() {
	this.spriteSheet = ss["Page_3_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Tiantan = function() {
	this.spriteSheet = ss["Page_3_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.TVTower = function() {
	this.spriteSheet = ss["Page_3_atlas_"];
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


(lib.TVTower_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.TVTower();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TVTower_mc, new cjs.Rectangle(0,0,68,480), null);


(lib.Tiantan_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tiantan();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Tiantan_mc, new cjs.Rectangle(0,0,310,301), null);


(lib.Tiananmen_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tiananmen();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Tiananmen_mc, new cjs.Rectangle(0,0,416,265), null);


(lib.Raffles_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Raffles();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Raffles_mc, new cjs.Rectangle(0,0,530,177), null);


(lib.Pailou_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Pailou();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Pailou_mc, new cjs.Rectangle(0,0,400,221), null);


(lib.CCTV_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CCTV();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.CCTV_mc, new cjs.Rectangle(0,0,294,328), null);


(lib.Calendar2009_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Calender2012();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Calendar2009_mc, new cjs.Rectangle(0,0,290,276), null);


(lib.TVTowerAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.TVTower_mc();
	this.instance.parent = this;
	this.instance.setTransform(26.6,365.7,0.758,0.709,0,0,0,35,482.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:34.8,regY:482.1,scaleY:0.78,skewX:-5,x:26.5},19).to({regX:35,regY:482.2,scaleY:0.71,skewX:0,x:26.6},20).to({regX:34.8,regY:482.1,scaleY:0.78,skewX:5,x:26.5},20).to({regX:35,regY:482.2,scaleY:0.71,skewX:0,x:26.6},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,24,51.6,340.2);


(lib.TiantanAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tiantan_mc();
	this.instance.parent = this;
	this.instance.setTransform(118.3,229.9,0.758,0.646,0,0,0,156,303.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:155.9,regY:302.9,scaleY:0.8,skewX:-6,x:118.4,y:229.8},19).to({regX:156,regY:303.1,scaleY:0.65,skewX:0,x:118.3,y:229.9},20).to({scaleY:0.8,skewX:5.8,x:118.4},20).to({scaleY:0.65,skewX:0,x:118.3},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,34.1,235.1,194.5);


(lib.TiananmenAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tiananmen_mc();
	this.instance.parent = this;
	this.instance.setTransform(158.5,202.6,0.758,0.685,0,0,0,209,267.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:208,regY:132.5,scaleY:0.69,skewX:-0.2,x:157.5,y:109.5},0).wait(1).to({scaleY:0.7,skewX:-0.3,x:157.3,y:108.7},0).wait(1).to({scaleY:0.7,skewX:-0.5,x:157,y:107.8},0).wait(1).to({scaleY:0.71,skewX:-0.6,x:156.8,y:107},0).wait(1).to({scaleY:0.72,skewX:-0.8,x:156.5,y:106.2},0).wait(1).to({scaleY:0.72,skewX:-0.9,x:156.2,y:105.3},0).wait(1).to({scaleY:0.73,skewX:-1.1,x:155.9,y:104.5},0).wait(1).to({scaleY:0.74,skewX:-1.3,x:155.6,y:103.6},0).wait(1).to({scaleY:0.74,skewX:-1.4,x:155.4,y:102.8},0).wait(1).to({scaleY:0.75,skewX:-1.6,x:155.1,y:101.9},0).wait(1).to({scaleY:0.75,skewX:-1.7,x:154.8,y:101.1},0).wait(1).to({scaleY:0.76,skewX:-1.9,x:154.5,y:100.3},0).wait(1).to({scaleY:0.77,skewX:-2.1,x:154.2,y:99.5},0).wait(1).to({scaleY:0.77,skewX:-2.2,x:153.8,y:98.7},0).wait(1).to({scaleY:0.78,skewX:-2.4,x:153.5,y:97.8},0).wait(1).to({scaleY:0.79,skewX:-2.5,x:153.2,y:97},0).wait(1).to({scaleY:0.79,skewX:-2.7,x:152.8,y:96.2},0).wait(1).to({scaleY:0.8,skewX:-2.8,x:152.5,y:95.4},0).wait(1).to({regX:209,regY:266.9,scaleY:0.8,skewX:-3,x:158.6,y:202.5},0).wait(1).to({regX:208,regY:132.5,scaleY:0.8,skewX:-2.8,x:152.5,y:95.4},0).wait(1).to({scaleY:0.79,skewX:-2.7,x:152.9,y:96.2},0).wait(1).to({scaleY:0.79,skewX:-2.5,x:153.2,y:96.9},0).wait(1).to({scaleY:0.78,skewX:-2.4,x:153.5,y:97.8},0).wait(1).to({scaleY:0.78,skewX:-2.2,x:153.8,y:98.5},0).wait(1).to({scaleY:0.77,skewX:-2.1,x:154.1,y:99.3},0).wait(1).to({scaleY:0.76,skewX:-1.9,x:154.4,y:100.1},0).wait(1).to({scaleY:0.76,skewX:-1.8,x:154.7,y:100.8},0).wait(1).to({scaleY:0.75,skewX:-1.6,x:154.9,y:101.7},0).wait(1).to({scaleY:0.75,skewX:-1.5,x:155.3,y:102.5},0).wait(1).to({scaleY:0.74,skewX:-1.3,x:155.5,y:103.2},0).wait(1).to({scaleY:0.73,skewX:-1.2,x:155.8,y:104.1},0).wait(1).to({scaleY:0.73,skewX:-1,x:156,y:104.8},0).wait(1).to({scaleY:0.72,skewX:-0.9,x:156.3,y:105.6},0).wait(1).to({scaleY:0.72,skewX:-0.7,x:156.6,y:106.4},0).wait(1).to({scaleY:0.71,skewX:-0.6,x:156.9,y:107.3},0).wait(1).to({scaleY:0.7,skewX:-0.4,x:157.1,y:108},0).wait(1).to({scaleY:0.7,skewX:-0.3,x:157.4,y:108.8},0).wait(1).to({scaleY:0.69,skewX:-0.1,x:157.6,y:109.6},0).wait(1).to({regX:209,regY:267.1,scaleY:0.69,skewX:0,x:158.5,y:202.6},0).wait(1).to({regX:208,regY:132.5,scaleY:0.69,skewX:0.1,x:158,y:109.6},0).wait(1).to({scaleY:0.7,skewX:0.3,x:158.2,y:108.8},0).wait(1).to({scaleY:0.7,skewX:0.4,x:158.5,y:108},0).wait(1).to({scaleY:0.71,skewX:0.6,x:158.7,y:107.2},0).wait(1).to({scaleY:0.72,skewX:0.7,x:159,y:106.3},0).wait(1).to({scaleY:0.72,skewX:0.9,x:159.3,y:105.6},0).wait(1).to({scaleY:0.73,skewX:1,x:159.6,y:104.8},0).wait(1).to({scaleY:0.73,skewX:1.2,x:159.8,y:104},0).wait(1).to({scaleY:0.74,skewX:1.3,x:160.1,y:103.2},0).wait(1).to({scaleY:0.75,skewX:1.5,x:160.4,y:102.4},0).wait(1).to({scaleY:0.75,skewX:1.6,x:160.7,y:101.6},0).wait(1).to({scaleY:0.76,skewX:1.8,x:161,y:100.8},0).wait(1).to({scaleY:0.76,skewX:1.9,x:161.3,y:100},0).wait(1).to({scaleY:0.77,skewX:2.1,x:161.5,y:99.3},0).wait(1).to({scaleY:0.78,skewX:2.2,x:161.8,y:98.5},0).wait(1).to({scaleY:0.78,skewX:2.4,x:162.2,y:97.7},0).wait(1).to({scaleY:0.79,skewX:2.5,x:162.5,y:96.9},0).wait(1).to({scaleY:0.79,skewX:2.7,x:162.8,y:96.1},0).wait(1).to({scaleY:0.8,skewX:2.8,x:163.1,y:95.3},0).wait(1).to({regX:208.9,regY:266.9,scaleY:0.8,skewX:3,x:158.5,y:202.5},0).wait(1).to({regX:208,regY:132.5,scaleY:0.8,skewX:2.8,x:163.2,y:95.4},0).wait(1).to({scaleY:0.79,skewX:2.7,x:162.9,y:96.2},0).wait(1).to({scaleY:0.79,skewX:2.5,x:162.5,y:96.9},0).wait(1).to({scaleY:0.78,skewX:2.4,x:162.2,y:97.8},0).wait(1).to({scaleY:0.78,skewX:2.2,x:161.9,y:98.5},0).wait(1).to({scaleY:0.77,skewX:2.1,x:161.6,y:99.3},0).wait(1).to({scaleY:0.76,skewX:1.9,x:161.3,y:100.1},0).wait(1).to({scaleY:0.76,skewX:1.8,x:161,y:100.8},0).wait(1).to({scaleY:0.75,skewX:1.6,x:160.8,y:101.7},0).wait(1).to({scaleY:0.75,skewX:1.5,x:160.4,y:102.5},0).wait(1).to({scaleY:0.74,skewX:1.3,x:160.2,y:103.2},0).wait(1).to({scaleY:0.73,skewX:1.2,x:159.9,y:104.1},0).wait(1).to({scaleY:0.73,skewX:1,x:159.6,y:104.8},0).wait(1).to({scaleY:0.72,skewX:0.9,x:159.4,y:105.6},0).wait(1).to({scaleY:0.72,skewX:0.7,x:159.1,y:106.4},0).wait(1).to({scaleY:0.71,skewX:0.6,x:158.8,y:107.3},0).wait(1).to({scaleY:0.7,skewX:0.4,x:158.6,y:108},0).wait(1).to({scaleY:0.7,skewX:0.3,x:158.3,y:108.8},0).wait(1).to({scaleY:0.69,skewX:0.1,x:158.1,y:109.6},0).wait(1).to({regX:209,regY:267.1,scaleY:0.69,skewX:0,x:158.5,y:202.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,19.6,315.5,181.6);


(lib.RafflesAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Raffles_mc();
	this.instance.parent = this;
	this.instance.setTransform(214,71.5,0.808,0.808,0,0,0,264.9,88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({scaleX:0.85,scaleY:0.85,x:214.1},10,cjs.Ease.get(-0.01)).to({scaleX:0.81,scaleY:0.81,x:214},10).to({scaleX:0.85,scaleY:0.85,x:214.1},10).to({scaleX:0.81,scaleY:0.81,x:214},10,cjs.Ease.get(0.01)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,428.2,143);


(lib.PailouAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Pailou_mc();
	this.instance.parent = this;
	this.instance.setTransform(152.5,169.1,0.758,0.655,0,0,0,201,223);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:201.3,regY:222.9,scaleY:0.8,skewX:-4,x:152.6},19).to({regX:201,regY:223,scaleY:0.66,skewX:0,x:152.5},20).to({regX:201.2,regY:222.9,scaleY:0.8,skewX:4,x:152.6},20).to({regX:201,regY:223,scaleY:0.66,skewX:0,x:152.5},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,23,303.4,144.8);


(lib.CCTVAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CCTV_mc();
	this.instance.parent = this;
	this.instance.setTransform(112.3,250.3,0.758,0.674,0,0,0,148,330.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:147.9,regY:329.9,scaleY:0.79,skewX:-6},19).to({regX:148,regY:330.1,scaleY:0.67,skewX:0},20).to({regX:147.8,regY:329.9,scaleY:0.79,skewX:6},20).to({regX:148,regY:330.1,scaleY:0.67,skewX:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,28,223,221);


(lib.CalenderAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Calendar2009_mc();
	this.instance.parent = this;
	this.instance.setTransform(124.4,118,0.855,0.855,0,0,0,145.5,138);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({regX:145.4,regY:138.1,rotation:-10,y:118.1},10,cjs.Ease.get(-0.01)).to({regX:145.5,regY:138,rotation:5},10).to({regX:145.4,regY:138.1,rotation:-5},10).to({regX:145.5,regY:138,rotation:0,y:118},10,cjs.Ease.get(0.01)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,248,236);


(lib.Page_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// anim
	this.instance = new lib.RafflesAnim_mc();
	this.instance.parent = this;
	this.instance.setTransform(47.1,87.5,1,1,0,0,0,214.1,71.5);

	this.instance_1 = new lib.TiananmenAnim_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-49.2,-99.8,1,1,0,0,0,158.5,101.3);

	this.instance_2 = new lib.CalenderAnim_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-320.5,41,1,1,0,0,0,124.4,118);

	this.instance_3 = new lib.PailouAnim_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(101.7,-83.3,1,1,0,0,0,152.5,84.5);

	this.instance_4 = new lib.TVTowerAnim_mc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(106.9,-181.3,1,1,0,0,0,26.6,182.8);

	this.instance_5 = new lib.TiantanAnim_mc();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-225.2,-113.6,1,1,0,0,0,118.3,114.9);

	this.instance_6 = new lib.CCTVAnim_mc();
	this.instance_6.parent = this;
	this.instance_6.setTransform(231.3,-123.8,1,1,0,0,0,112.3,125.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Page_3_mc, new cjs.Rectangle(-444.9,-340.1,786.8,499.2), null);


// stage content:
(lib.InteractiveResume = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 1
	this.instance = new lib.Page_3_mc();
	this.instance.parent = this;
	this.instance.setTransform(500,280.7,1,1,0,0,0,-50.7,-91.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(605.8,301.9,786.9,499.2);
// library properties:
lib.properties = {
	width: 1000,
	height: 540,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Page_3_atlas_.png?1525719681955", id:"Page_3_atlas_"}
	],
	preloads: []
};




})(lib_page3 = lib_page3||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib_page3, images, createjs, ss, AdobeAn;