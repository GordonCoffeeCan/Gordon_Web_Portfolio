(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


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


(lib.scrollMouse_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhQDUIASgSIA9A9IA8g9IATASIhPBQgAhQCNIASgTIA9A9IA8g9IATATIhPBPgAgEBnQgxAAgigiQgigjAAguIAAiiQAAgwAigiQAigjAxAAIAJAAQAxAAAiAjQAiAiAAAwIAACiQAAAugiAjQgiAigxAAgAhFjuQgaAbAAAlIAACiQAAAkAaAbQAbAaAmAAIAJAAQAmAAAbgaQAagbAAgkIAAiiQAAglgagbQgbgbgmAAIgJAAQgmAAgbAbgAgMiDIAAhDIAZAAIAABDg");
	this.shape.setTransform(12.2,29.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.scrollMouse_mc, new cjs.Rectangle(0,0,24.5,58.3), null);


(lib.scrollMouseAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_129 = function() {
		this.gotoAndPlay(70);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(129).call(this.frame_129).wait(1));

	// Layer 1
	this.instance = new lib.scrollMouse_mc();
	this.instance.parent = this;
	this.instance.setTransform(0,-12.7,1,1.034,0,0,0,12.2,58.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({regY:58.2,scaleY:1,x:0.1,y:-15.2},0).to({alpha:0.648},50).wait(1).to({regY:29.1,y:-44.3},0).wait(1).to({scaleY:1,y:-44.2},0).wait(1).to({scaleY:1,y:-44},0).wait(1).to({scaleY:1,y:-43.8},0).wait(1).to({scaleY:1,y:-43.6},0).wait(1).to({scaleY:1.01,y:-43.3},0).wait(1).to({scaleY:1.01,y:-43},0).wait(1).to({scaleY:1.01,y:-42.6},0).wait(1).to({scaleY:1.01,y:-42.2},0).wait(1).to({scaleY:1.02,y:-41.7},0).wait(1).to({scaleY:1.02,y:-41.2},0).wait(1).to({scaleY:1.03,y:-40.7},0).wait(1).to({scaleY:1.03,y:-40.1},0).wait(1).to({scaleY:1.03,y:-39.5},0).wait(1).to({scaleY:1.04,y:-38.7},0).wait(1).to({scaleY:1.05,y:-37.9},0).wait(1).to({scaleY:1.05,y:-37},0).wait(1).to({scaleY:1.06,y:-36},0).wait(1).to({scaleY:1.07,y:-34.7},0).wait(1).to({regY:58.1,scaleY:1.09,y:0},0).wait(1).to({regY:29.1,scaleX:1.07,scaleY:0.99,y:-28.6},0).wait(1).to({scaleX:1.1,scaleY:0.94,y:-27.4},0).wait(1).to({scaleX:1.12,scaleY:0.91,x:0,y:-26.5},0).wait(1).to({scaleX:1.14,scaleY:0.89,y:-25.8},0).wait(1).to({scaleX:1.15,scaleY:0.87,y:-25.2},0).wait(1).to({scaleX:1.16,scaleY:0.85,y:-24.6},0).wait(1).to({scaleX:1.17,scaleY:0.83,y:-24.2},0).wait(1).to({scaleX:1.19,scaleY:0.82,y:-23.7},0).wait(1).to({scaleX:1.19,scaleY:0.8,y:-23.3},0).wait(1).to({regX:12.1,regY:58.1,scaleX:1.2,scaleY:0.79,y:-0.1},0).wait(1).to({regX:12.2,regY:29.1,scaleX:1.18,scaleY:0.83,x:0.1,y:-24.1},0).wait(1).to({scaleX:1.15,scaleY:0.87,y:-25.2},0).wait(1).to({scaleX:1.13,scaleY:0.9,y:-26.2},0).wait(1).to({scaleX:1.11,scaleY:0.93,x:0.2,y:-27.1},0).wait(1).to({scaleX:1.09,scaleY:0.96,y:-28},0).wait(1).to({scaleX:1.07,scaleY:0.99,y:-28.8},0).wait(1).to({scaleX:1.05,scaleY:1.02,y:-29.6},0).wait(1).to({scaleX:1.03,scaleY:1.05,y:-30.3},0).wait(1).to({scaleX:1.01,scaleY:1.07,y:-31},0).wait(1).to({regY:58.1,scaleX:1,scaleY:1.09,x:0.1,y:0},0).wait(1).to({regY:29.1,scaleY:1.08,y:-32.8},0).wait(1).to({scaleY:1.07,y:-34},0).wait(1).to({scaleY:1.07,y:-35.1},0).wait(1).to({scaleY:1.06,y:-36.1},0).wait(1).to({scaleY:1.05,y:-37},0).wait(1).to({scaleY:1.05,y:-38},0).wait(1).to({scaleY:1.04,y:-38.8},0).wait(1).to({scaleY:1.03,y:-39.6},0).wait(1).to({scaleY:1.03,y:-40.3},0).wait(1).to({scaleY:1.02,y:-40.9},0).wait(1).to({scaleY:1.02,y:-41.6},0).wait(1).to({scaleY:1.01,y:-42.1},0).wait(1).to({scaleY:1.01,y:-42.6},0).wait(1).to({scaleY:1.01,y:-43},0).wait(1).to({scaleY:1.01,y:-43.4},0).wait(1).to({scaleY:1,y:-43.7},0).wait(1).to({scaleY:1,y:-43.9},0).wait(1).to({scaleY:1,y:-44},0).wait(1).to({scaleY:1,y:-44.2},0).wait(1).to({regY:58.2,y:-15.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,-73,24.5,60.3);


// stage content:
(lib.InteractiveResume = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.scrollMouseAnim_mc();
	this.instance.parent = this;
	this.instance.setTransform(500,31.9,1,1,0,0,0,0,-42.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(987.8,39.3,24.4,60.3);
// library properties:
lib.properties = {
	width: 1000,
	height: 75,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib_ScrollDown = lib_ScrollDown||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib_ScrollDown, images, createjs, ss, AdobeAn;