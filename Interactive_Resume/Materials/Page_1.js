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


(lib.StageSpliteLine_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,2,1).p("EhOHAAAMCcPAAA");

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


(lib.Page_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// UpperText
	this.UpperText_mc = new lib.hi_mc();
	this.UpperText_mc.parent = this;
	this.UpperText_mc.setTransform(20.1,-44,1,1,0,0,0,20.1,23.2);

	this.timeline.addTween(cjs.Tween.get(this.UpperText_mc).wait(1));

	// LowerText
	this.LowerText_mc = new lib.imGordon_mc();
	this.LowerText_mc.parent = this;
	this.LowerText_mc.setTransform(95.5,28,1,1,0,0,0,95.5,23.2);

	this.timeline.addTween(cjs.Tween.get(this.LowerText_mc).wait(1));

	// SplitLine
	this.instance = new lib.StageSpliteLine_mc();
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,0.8,1,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Page_1_mc, new cjs.Rectangle(-400.5,-67.2,801,138.9), null);


// stage content:
(lib.InteractiveResume = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 1
	this.instance = new lib.Page_1_mc();
	this.instance.parent = this;
	this.instance.setTransform(500,77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(599.5,89.8,801,138.9);
// library properties:
lib.properties = {
	width: 1000,
	height: 160,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib_page1 = lib_page1||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib_page1, images, createjs, ss, AdobeAn;