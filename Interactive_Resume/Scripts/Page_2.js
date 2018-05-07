(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"Page_2_atlas_", frames: [[0,432,234,245],[0,0,298,216],[0,218,302,212]]}
];


// symbols:



(lib._3DCube_icon = function() {
	this.spriteSheet = ss["Page_2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Controller_icon = function() {
	this.spriteSheet = ss["Page_2_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Program_icon = function() {
	this.spriteSheet = ss["Page_2_atlas_"];
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


(lib.StageSpliteLine_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(0.1,1,1).p("EhOHAAAMCcPAAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.StageSpliteLine_mc, new cjs.Rectangle(-501,-1,1002,2), null);


(lib.Program_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Program_icon();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Program_mc, new cjs.Rectangle(0,0,241.6,169.6), null);


(lib.Controller_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Controller_icon();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Controller_mc, new cjs.Rectangle(0,0,238.4,172.8), null);


(lib._3DCube_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._3DCube_icon();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._3DCube_mc, new cjs.Rectangle(0,0,187.2,196), null);


(lib._3dartist_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhCB8IAAjyIAiAAIADAtIACAAQAMgYASgNQARgNAVAAQAIgBAGACIAMADIgIAkIgLgCIgNgBQgQgBgPANQgQANgNAeIAACbg");
	this.shape.setTransform(459.8,103.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgsBwQgbgPgPgcQgPgdgBgoQABgnAPgcQAPgcAZgQQAZgPAbAAQAvABAZAdQAZAfAAA0IgBANIgBAJIiiAAQACAnAWAYQAVAWAjAAQARAAAPgEQAOgGAOgJIAOAbQgPAKgUAIQgUAHgZAAQgfAAgagPgABDgRQAAglgQgUQgPgTgdgBQgQAAgPAJQgPAKgLAQQgKASgCAYICBAAIAAAAg");
	this.shape_1.setTransform(436.8,103.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AB/B8IAAiTQAAgigLgQQgMgPgWAAQgOAAgQAKQgOAJgRATIAACuIgoAAIAAiTQAAgigLgQQgLgPgYAAQgNAAgPAKQgQAJgRATIAACuIgpAAIAAjyIAiAAIAEAjIABAAQAQgRATgMQATgLAWAAQAbAAAQAMQAPAMAIAWQATgVATgNQAUgMAWAAQAlAAASAYQATAYAAAuIAACZg");
	this.shape_2.setTransform(403.6,103.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AB/B8IAAiTQAAgigLgQQgMgPgWAAQgOAAgQAKQgOAJgRATIAACuIgoAAIAAiTQAAgigLgQQgLgPgYAAQgNAAgPAKQgQAJgRATIAACuIgpAAIAAjyIAiAAIAEAjIABAAQAQgRATgMQATgLAWAAQAbAAAQAMQAPAMAIAWQATgVATgNQAUgMAWAAQAlAAASAYQATAYAAAuIAACZg");
	this.shape_3.setTransform(362.2,103.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("Ag8B3QgPgIgKgPQgJgQAAgWQAAgnAkgUQAkgWBMgJQAAgPgEgOQgEgOgLgIQgLgJgUAAQgUAAgTAHQgSAJgOAJIgRgcQARgMAZgJQAYgJAdgBQAsAAAUAbQAUAaAAAvIAACTIgiAAIgDgdIgBAAQgSAPgUAKQgTAKgXAAQgUAAgRgIgAgJAIQgYAJgLALQgKAMAAAPQABAVAMAJQAMAKASgBQAQABAQgJQAQgIARgQIAAhDQgoAFgXAIg");
	this.shape_4.setTransform(328.1,103.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AhCB8IAAjyIAiAAIADAtIACAAQAMgYASgNQARgNAVAAQAIgBAGACIAMADIgIAkIgLgCIgNgBQgQgBgPANQgQANgNAeIAACbg");
	this.shape_5.setTransform(310.4,103.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("Ag/CtQgWgIgNgOQgNgPAAgVQAAgQAKgOQAJgOARgLIAAgCQgJgGgGgJQgGgKgBgOQABgQAIgKQAIgMAKgGIAAgCQgNgLgJgQQgJgRgBgWQAAgbANgTQAMgTAVgLQAVgKAZAAQAKAAAIABQAJACAGACIBVAAIAAAgIgyAAQAJAIAFANQAGANAAAQQAAAagMATQgMATgUAKQgUALgYAAQgJAAgKgCQgJgDgJgEQgGAGgFAGQgEAGAAAKQgBAMAKAHQAJAHAZAAIAuAAQAqAAAWAPQAVANAAAfQAAAWgPATQgPAUgcALQgbAMglAAQgegBgXgHgAhFBZQgGAKAAALQAAAUATAKQASAMAiAAQAWAAARgHQASgHAJgLQAKgMAAgNQAAgQgNgHQgMgHgYABIgpAAIgQgBIgQgEQgNAKgGALgAgviGQgOAPgBAaQABAbAOAPQAPAQAWAAQAVAAAOgQQAPgPAAgbQAAgagPgPQgOgPgVAAQgWAAgPAPg");
	this.shape_6.setTransform(287.8,109.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("Ag2BwQgagOgQgcQgPgdgBgpQABgoAPgcQAQgcAagPQAZgPAdAAQAfAAAYAPQAaAPAQAcQAPAcAAAoQAAApgPAdQgQAcgaAOQgYAPgfAAQgdAAgZgPgAgjhQQgQAMgJAVQgJAUAAAbQABAqASAaQAUAZAeAAQAgAAATgZQASgaABgqQAAgbgIgUQgJgVgQgMQgQgMgVAAQgUAAgPAMg");
	this.shape_7.setTransform(260.9,103.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AhCB8IAAjyIAiAAIAEAtIABAAQAMgYARgNQASgNAVAAQAIgBAGACIAMADIgIAkIgLgCIgMgBQgQgBgRANQgPANgNAeIAACbg");
	this.shape_8.setTransform(241.3,103.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AhuCkIAAlHIBlAAQAkAAAaAJQAbAJAPAWQAPAVABAjQgBAjgPAXQgPAVgbALQgbALgjAAIg7AAIAACCgAhEAAIA2AAQApAAAWgPQAUgRAAgjQABgigWgPQgVgOgpAAIg2AAg");
	this.shape_9.setTransform(217.4,99.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgsBwQgbgPgPgcQgPgdgBgoQABgnAPgcQAQgcAYgQQAZgPAbAAQAvABAZAdQAZAfAAA0IgBANIgBAJIijAAQADAnAWAYQAVAWAiAAQASAAAPgEQAOgGAOgJIAOAbQgPAKgUAIQgUAHgYAAQghAAgZgPgABDgRQAAglgQgUQgPgTgdgBQgQAAgPAJQgPAKgLAQQgJASgDAYICBAAIAAAAg");
	this.shape_10.setTransform(179.6,103.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AB/B8IAAiTQAAgigLgQQgMgPgWAAQgOAAgQAKQgOAJgRATIAACuIgoAAIAAiTQAAgigLgQQgLgPgYAAQgNAAgPAKQgQAJgRATIAACuIgpAAIAAjyIAiAAIAEAjIABAAQAQgRATgMQATgLAWAAQAbAAAQAMQAPAMAIAWQATgVATgNQAUgMAWAAQAlAAASAYQATAYAAAuIAACZg");
	this.shape_11.setTransform(146.4,103.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("Ag8B3QgPgIgKgPQgJgQAAgWQAAgnAkgUQAkgWBMgJQAAgPgEgOQgEgOgLgIQgLgJgUAAQgUAAgTAHQgSAJgOAJIgRgcQARgMAZgJQAYgJAdgBQAsAAAUAbQAUAaAAAvIAACTIgiAAIgDgdIgBAAQgSAPgUAKQgTAKgXAAQgUAAgRgIgAgJAIQgYAJgLALQgKAMAAAPQABAVAMAJQAMAKASgBQAQABAQgJQAQgIARgQIAAhDQgoAFgXAIg");
	this.shape_12.setTransform(112.4,103.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("Ag1CVQghgUgTgmQgTgmAAg1QABg0ATgmQATgmAigUQAigVAsAAQAWAAARAGQASAGAOAJQANAJAKALIgYAaQgNgNgQgJQgRgIgYAAQggAAgZAQQgYAQgNAdQgOAeAAApQAAAoANAeQANAeAYARQAYAQAiAAQASAAAQgFQAQgFAKgKIAAhVIhGAAIAAghIBsAAIAACJQgRAQgaAKQgaALghABQgrgBghgUg");
	this.shape_13.setTransform(84.3,99.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AglAvQAWgJALgQQALgPAAgUIgCAAIgDAAQgLAAgIgHQgJgHAAgOQAAgOAJgIQAJgHALAAQARAAAJANQAJANAAAWQAAAggSAYQgRAYgeANg");
	this.shape_14.setTransform(52.9,117.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AhCB8IAAjyIAiAAIADAtIACAAQAMgYASgNQARgNAVAAQAIgBAGACIAMADIgIAkIgLgCIgNgBQgQgBgPANQgQANgNAeIAACbg");
	this.shape_15.setTransform(43.1,103.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgsBwQgbgPgPgcQgPgdgBgoQABgnAPgcQAPgcAZgQQAZgPAbAAQAvABAZAdQAZAfAAA0IgBANIgBAJIiiAAQACAnAWAYQAVAWAjAAQARAAAPgEQAOgGAOgJIAOAbQgPAKgUAIQgUAHgZAAQgfAAgagPgABDgRQAAglgQgUQgPgTgdgBQgQAAgPAJQgPAKgLAQQgJASgDAYICBAAIAAAAg");
	this.shape_16.setTransform(20.1,103.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AA4B8IAAiTQABgigMgQQgLgPgYAAQgRAAgPAKQgPAJgSATIAACuIgpAAIAAjyIAiAAIADAjIACAAQARgRAUgMQATgLAYAAQAmAAATAYQASAYgBAuIAACZg");
	this.shape_17.setTransform(-6,103.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("Ag/CtQgWgIgNgOQgNgPAAgVQAAgQAKgOQAJgOARgLIAAgCQgJgGgGgJQgGgKgBgOQABgQAIgKQAIgMAKgGIAAgCQgNgLgJgQQgJgRgBgWQAAgbANgTQAMgTAVgLQAVgKAZAAQAKAAAIABQAJACAGACIBVAAIAAAgIgyAAQAJAIAFANQAGANAAAQQAAAagMATQgMATgUAKQgUALgYAAQgJAAgKgCQgJgDgJgEQgGAGgFAGQgEAGAAAKQgBAMAKAHQAJAHAZAAIAuAAQAqAAAWAPQAVANAAAfQAAAWgPATQgPAUgcALQgbAMglAAQgegBgXgHgAhFBZQgGAKAAALQAAAUATAKQASAMAiAAQAWAAARgHQASgHAJgLQAKgMAAgNQAAgQgNgHQgMgHgYABIgpAAIgQgBIgQgEQgNAKgGALgAgviGQgOAPgBAaQABAbAOAPQAPAQAWAAQAVAAAOgQQAPgPAAgbQAAgagPgPQgOgPgVAAQgWAAgPAPg");
	this.shape_18.setTransform(-31.6,109.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgUCtIAAjyIAoAAIAADygAgTh+QgJgIAAgMQAAgLAJgIQAHgGAMgBQAMABAIAGQAIAIAAALQAAAMgIAIQgIAHgMAAQgMAAgHgHg");
	this.shape_19.setTransform(-51.1,98.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgwB2QgXgKgSgOIAVgcQAPANARAJQASAHAUABQAYgBAMgLQAMgKAAgRQAAgMgIgIQgIgJgNgGIgZgLQgSgFgRgIQgQgJgLgNQgKgNgBgVQAAgTAKgPQAKgQATgJQASgJAaAAQAXAAATAIQATAIAOAMIgTAZQgMgJgOgGQgOgGgQgBQgWABgLAKQgKAKAAAOQAAAMAHAHQAIAHANAGIAZALQASAFARAKQAQAGALAOQALAOABAXQAAAUgKAQQgLAQgUALQgTAJgdAAQgZAAgYgJg");
	this.shape_20.setTransform(-67.9,103.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgsBwQgbgPgPgcQgPgdgBgoQABgnAPgcQAPgcAZgQQAZgPAbAAQAvABAZAdQAZAfAAA0IgBANIgBAJIijAAQADAnAWAYQAVAWAiAAQASAAAPgEQAOgGAOgJIAOAbQgPAKgUAIQgUAHgZAAQgfAAgagPgABDgRQAAglgQgUQgPgTgdgBQgQAAgPAJQgPAKgLAQQgJASgDAYICBAAIAAAAg");
	this.shape_21.setTransform(-90.5,103.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("Ah1CkIAAlHIBSAAQBLAAAnAqQAnAqAABPQAABNgnArQgnArhKABgAhMCCIAmAAQA4AAAdgjQAcgiAAg9QAAg/gcghQgdggg4gBIgmAAg");
	this.shape_22.setTransform(-117.5,99.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgtBwQgagPgPgcQgQgdAAgoQAAgnAQgcQAQgcAYgQQAZgPAbAAQAvABAZAdQAZAfAAA0IAAANIgCAJIijAAQADAnAWAYQAVAWAiAAQASAAAPgEQAOgGAOgJIAPAbQgQAKgUAIQgTAHgZAAQghAAgagPgABDgRQAAglgQgUQgPgTgdgBQgRAAgOAJQgPAKgKAQQgKASgDAYICBAAIAAAAg");
	this.shape_23.setTransform(-156,103.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AB/B8IAAiTQAAgigLgQQgMgPgWAAQgOAAgQAKQgOAJgRATIAACuIgoAAIAAiTQAAgigLgQQgLgPgYAAQgNAAgPAKQgQAJgRATIAACuIgpAAIAAjyIAiAAIAEAjIABAAQAQgRATgMQATgLAWAAQAbAAAQAMQAPAMAIAWQATgVATgNQAUgMAWAAQAlAAASAYQATAYAAAuIAACZg");
	this.shape_24.setTransform(-189.2,103.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("Ag8B3QgPgIgKgPQgJgQAAgWQAAgnAkgUQAkgWBMgJQAAgPgEgOQgEgOgLgIQgLgJgUAAQgUAAgTAHQgSAJgOAJIgRgcQARgMAZgJQAYgJAdgBQAsAAAUAbQAUAaAAAvIAACTIgiAAIgDgdIgBAAQgSAPgUAKQgTAKgXAAQgUAAgRgIgAgJAIQgYAJgLALQgKAMAAAPQABAVAMAJQAMAKASgBQAQABAQgJQAQgIARgQIAAhDQgoAFgXAIg");
	this.shape_25.setTransform(-223.2,103.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("Ag1CVQghgUgTgmQgTgmAAg1QABg0ATgmQATgmAigUQAigVAsAAQAWAAARAGQASAGAOAJQANAJAKALIgYAaQgNgNgQgJQgRgIgYAAQggAAgZAQQgYAQgNAdQgOAeAAApQAAAoANAeQANAeAYARQAYAQAiAAQASAAAQgFQAQgFAKgKIAAhVIhGAAIAAghIBsAAIAACJQgRAQgaAKQgaALghABQgrgBghgUg");
	this.shape_26.setTransform(-251.3,99.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AglAvQAWgJALgQQALgPAAgUIgCAAIgDAAQgLAAgIgHQgJgHAAgOQAAgOAJgIQAJgHALAAQARAAAJANQAJANAAAWQAAAggSAYQgRAYgeANg");
	this.shape_27.setTransform(-282.7,117.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgXCIQgQgWABglIAAiFIgkAAIAAgfIAmgDIAFhDIAhAAIAABDIBCAAIAAAiIhCAAIAACGQAAAWAJAMQAIANAVAAQAGAAAIgDIANgDIAIAeQgKAEgMADQgLACgMAAQglAAgQgWg");
	this.shape_28.setTransform(-297.7,100.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgwB2QgXgKgSgOIAVgcQAPANARAJQASAHAUABQAYgBAMgLQAMgKAAgRQAAgMgIgIQgIgJgNgGIgZgLQgSgFgRgIQgQgJgLgNQgKgNgBgVQAAgTAKgPQAKgQATgJQASgJAaAAQAXAAATAIQATAIAOAMIgTAZQgMgJgOgGQgOgGgQgBQgWABgLAKQgKAKAAAOQAAAMAHAHQAIAHANAGIAZALQASAFARAKQAQAGALAOQALAOABAXQAAAUgKAQQgLAQgUALQgTAJgdAAQgZAAgYgJg");
	this.shape_29.setTransform(-317,103.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgUCtIAAjyIAoAAIAADygAgUh+QgHgIgBgMQABgLAHgIQAJgGALgBQAMABAIAGQAIAIABALQgBAMgIAIQgIAHgMAAQgLAAgJgHg");
	this.shape_30.setTransform(-333.4,98.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AgXCIQgQgWABglIAAiFIgkAAIAAgfIAmgDIAFhDIAhAAIAABDIBCAAIAAAiIhCAAIAACGQAAAWAJAMQAIANAVAAQAGAAAIgDIANgDIAIAeIgWAHQgLACgMAAQglAAgQgWg");
	this.shape_31.setTransform(-347.8,100.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AhCB8IAAjyIAiAAIAEAtIABAAQAMgYARgNQASgNAVAAQAIgBAGACIAMADIgIAkIgLgCIgNgBQgPgBgRANQgPANgNAeIAACbg");
	this.shape_32.setTransform(-363.1,103.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("ABbCkIgghkIh2AAIggBkIgqAAIBulHIAuAAIBwFHgAAwAeIgPgwIgRg4IgPg3IgCAAIgPA3IgRA4IgQAwIBhAAg");
	this.shape_33.setTransform(-387.3,99.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("Ah1CkIAAlHIBSAAQBLAAAnAqQAnAqAABPQAABNgnArQgnArhKABgAhMCCIAmAAQA4AAAdgjQAcgiAAg9QAAg/gcghQgdggg4gBIgmAAg");
	this.shape_34.setTransform(-425.3,99.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("Ag+CYQgagOgQgSIAVgbQAOAQAUALQATALAdAAQAcAAASgPQASgQAAgbQAAgTgJgPQgKgOgXgHQgVgJglABIAAgfQAhAAAUgIQATgIAJgNQAIgNAAgRQgBgYgOgNQgOgOgZAAQgUAAgQAJQgSAJgOAPIgWgaQASgSAXgLQAWgLAdgBQAaAAAWAKQAVAKAMARQANATAAAZQgBAdgPATQgQATgaAKIAAABQAUAFAPAKQAQALAJAQQAIAQABAWQgBAdgOAUQgNAUgYAMQgXAKgeAAQglAAgZgNg");
	this.shape_35.setTransform(-454.5,100.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("Ag8B3QgPgIgKgQQgJgPAAgVQAAgoAkgVQAkgWBMgHQAAgQgEgOQgEgOgLgIQgLgJgUgBQgUABgTAIQgSAHgOALIgRgdQARgLAZgKQAYgKAdgBQAsABAUAbQAUAbAAAtIAACVIgiAAIgDgdIgBAAQgSAOgUAKQgTAKgXABQgUAAgRgJgAgJAIQgYAIgLAMQgKAMAAAQQABAUAMAJQAMAKASAAQAQAAAQgJQAQgIARgQIAAhCQgoAEgXAIg");
	this.shape_36.setTransform(38.1,39.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AB/B9IAAiUQAAgigLgPQgMgQgWAAQgOAAgQAJQgOAKgRASIAACwIgoAAIAAiUQAAgigLgPQgLgQgYAAQgNAAgPAJQgQAKgRASIAACwIgpAAIAAjyIAiAAIAEAjIABAAQAQgSATgLQATgMAWgBQAbABAQAMQAPAMAIAWQATgVATgMQAUgNAWgBQAlABASAYQATAYAAAvIAACZg");
	this.shape_37.setTransform(-5,38.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AgLBBIgJhTIgBguIArAAIgBAuIgIBTg");
	this.shape_38.setTransform(-32.1,23.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AgUCkIAAlHIApAAIAAFHg");
	this.shape_39.setTransform(-44.8,34.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._3dartist_mc, new cjs.Rectangle(-495.6,0,991.3,131.7), null);


(lib.ProgramAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhoOqIAA9TIDRAAIAAdTg");
	var mask_graphics_9 = new cjs.Graphics().p("AhhPaQhagpgZg6QgSgnh3lOQh7laAAgXQAAg8A0hcQBKiFAOgkQAbhLAQh/QARiEgKhbQAskSBZhXQApgpA/gQQAxgMBXAAQBtAAA2AiIA5AqQArAhAvAaQAVALAaAIQANADAFANQASAsgcB4QgXBogRAaQgOBQgyBDQgbAjgnAnQg4BCgrC7QgkChAABrQAAAsAgA5IBGB5QBnC/AAEOQAABCgEAZQgGAlgUARQgjAdieAAQiEABhigvg");
	var mask_graphics_19 = new cjs.Graphics().p("AlMP6Qg9gZiDhrQgMgKgQhYQgUhrgHgUQgSg3gHhQQgEg+AAh9IAAgmIAAgsQAAgdAAgbQgCgrAIhWQAIhdABg2QAAhLgLhiQgJhhgBhQQAAkPC0i6QBKhNBYgrQBHgjA+gFIATgBQgEAAgKgEIgBgBQAcgLDMArQDpAxA8AdQBCAiBMBsQBTB4AABgQAAB2geCaQAAA3ACBbQgBBhgMCwQAAAhgRAUQgTAVgDAaQgJBLADBQQAEBDgRBNIgaB5QgtEDh7BVQg+ArhlASQhXAPiTAAQiuAAhTghg");
	var mask_graphics_29 = new cjs.Graphics().p("AAOObQjKgJguAAIg6ABIhgAGQhOAFg5AAQhHAAgagKQg1gVglhMQhhjIgWhlQgQhGAAikQAAhfAHgpQAMg2ALg/QAKg5AGh2IAGh8QAPiyALg4QAgieBShfQBfhuBPghQBLgfCcgBQDGALARAGQAfANAjAWQAZAQBRAYQAWAHEpBDQDfAzAtAjQBSBAAZAnQANATAAAXQAAA1gRCDQgPB6gKAqIgzDSQgoC7gHCQIgWBiQgUBYgIARQg/CGgYArIg3BiQgZApgbASQg1AmirAAQgVAAjLgIg");
	var mask_graphics_39 = new cjs.Graphics().p("ArCN7QhhgMgxgXQgzgYgNgrQgIgZgohoQgghVgKgpQgOg4gahKIgnh4QgsiMAAiFQAAjFAZiYQAHgqArh7QAuiAAihIQA+iCApgkQAjghBIgDICCgFQB2gDBGAAQC4AABZAKQA+AHDTApQA0AJCCAlQCKAnBBAZQCAAvCJBrQCnCBB2CuIAHAFQAGAOAIAaQAJAeAWA/QAfBSAJBEQADAcAAAmQAABJgZA3QgSArhUCxQg4B9iBBnQgkAchCAuQg+ApgVATQh3Bnj3AAQgvAAjdARQjbAShZAAQjYAAi1gXg");
	var mask_graphics_49 = new cjs.Graphics().p("A0bOxIAA9hMAo3AAAIAAdhg");
	var mask_graphics_90 = new cjs.Graphics().p("ArCN7QhhgMgxgXQgzgYgNgrQgIgZgohoQgghVgKgpQgOg4gahKIgnh4QgsiMAAiFQAAjFAZiYQAHgqArh7QAuiAAihIQA+iCApgkQAjghBIgDICCgFQB2gDBGAAQC4AABZAKQA+AHDTApQA0AJCCAlQCKAnBBAZQCAAvCJBrQCnCBB2CuIAHAFQAGAOAIAaQAJAeAWA/QAfBSAJBEQADAcAAAmQAABJgZA3QgSArhUCxQg4B9iBBnQgkAchCAuQg+ApgVATQh3Bnj3AAQgvAAjdARQjbAShZAAQjYAAi1gXg");
	var mask_graphics_94 = new cjs.Graphics().p("AAOObQjKgJguAAIg6ABIhgAGQhOAFg5AAQhHAAgagKQg1gVglhMQhhjIgWhlQgQhGAAikQAAhfAHgpQAMg2ALg/QAKg5AGh2IAGh8QAPiyALg4QAgieBShfQBfhuBPghQBLgfCcgBQDGALARAGQAfANAjAWQAZAQBRAYQAWAHEpBDQDfAzAtAjQBSBAAZAnQANATAAAXQAAA1gRCDQgPB6gKAqIgzDSQgoC7gHCQIgWBiQgUBYgIARQg/CGgYArIg3BiQgZApgbASQg1AmirAAQgVAAjLgIg");
	var mask_graphics_98 = new cjs.Graphics().p("AlMP6Qg9gZiDhrQgMgKgQhYQgUhrgHgUQgSg3gHhQQgEg+AAh9IAAgmIAAgsQAAgdAAgbQgCgrAIhWQAIhdABg2QAAhLgLhiQgJhhgBhQQAAkPC0i6QBKhNBYgrQBHgjA+gFIATgBQgEAAgKgEIgBgBQAcgLDMArQDpAxA8AdQBCAiBMBsQBTB4AABgQAAB2geCaQAAA3ACBbQgBBhgMCwQAAAhgRAUQgTAVgDAaQgJBLADBQQAEBDgRBNIgaB5QgtEDh7BVQg+ArhlASQhXAPiTAAQiuAAhTghg");
	var mask_graphics_102 = new cjs.Graphics().p("AhhPaQhagpgZg6QgSgnh3lOQh7laAAgXQAAg8A0hcQBKiFAOgkQAbhLAQh/QARiEgKhbQAskSBZhXQApgpA/gQQAxgMBXAAQBtAAA2AiIA5AqQArAhAvAaQAVALAaAIQANADAFANQASAsgcB4QgXBogRAaQgOBQgyBDQgbAjgnAnQg4BCgrC7QgkChAABrQAAAsAgA5IBGB5QBnC/AAEOQAABCgEAZQgGAlgUARQgjAdieAAQiEABhigvg");
	var mask_graphics_106 = new cjs.Graphics().p("AhoOqIAA9TIDRAAIAAdTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-17.4,y:80.7}).wait(9).to({graphics:mask_graphics_9,x:20.9,y:78.8}).wait(10).to({graphics:mask_graphics_19,x:41.1,y:77.4}).wait(10).to({graphics:mask_graphics_29,x:64.1,y:87.6}).wait(10).to({graphics:mask_graphics_39,x:94.5,y:84.6}).wait(10).to({graphics:mask_graphics_49,x:122.8,y:82.5}).wait(41).to({graphics:mask_graphics_90,x:94.5,y:84.6}).wait(4).to({graphics:mask_graphics_94,x:64.1,y:87.6}).wait(4).to({graphics:mask_graphics_98,x:41.1,y:77.4}).wait(4).to({graphics:mask_graphics_102,x:20.9,y:78.8}).wait(4).to({graphics:mask_graphics_106,x:-17.4,y:80.7}).wait(4));

	// Layer 1
	this.instance = new lib.Program_mc();
	this.instance.parent = this;
	this.instance.setTransform(120.8,84.8,1,1,0,0,0,120.8,84.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.controllerAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Controller_mc();
	this.instance.parent = this;
	this.instance.setTransform(119.2,86.4,1,1,0,0,0,119.2,86.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.05,scaleY:1.05,y:76.5},9,cjs.Ease.get(0.01)).to({regY:86.3,rotation:-5.7,x:119.3},5,cjs.Ease.get(0.01)).to({regX:119.3,rotation:9.3,x:119.4,y:76.6},5,cjs.Ease.get(0.01)).to({regX:119.2,rotation:-5.7,x:119.3,y:76.5},5,cjs.Ease.get(0.01)).to({regX:119.3,rotation:9.3,x:119.4,y:76.6},5,cjs.Ease.get(0.01)).to({regX:119.2,regY:86.4,rotation:0,x:119.2,y:76.5},5,cjs.Ease.get(0.01)).to({scaleX:1,scaleY:1,y:86.4},10,cjs.Ease.get(0.01)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,238.4,172.8);


(lib._3DCubeAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._3DCube_mc();
	this.instance.parent = this;
	this.instance.setTransform(93.6,196,1,1,0,0,0,93.6,196);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:93.5,regY:196.2,scaleX:1.18,scaleY:0.7,x:93.5,y:196.2},5).to({regX:93.6,regY:196,scaleX:1,scaleY:1.16,x:93.6,y:196.1},6).to({regX:93.5,regY:196.1,scaleX:1.12,scaleY:0.91,x:93.5,y:196.3},5).to({regX:93.6,regY:195.8,scaleX:1,scaleY:1.08,x:93.6,y:196},6).to({regX:93.5,regY:196.1,scaleX:1.03,scaleY:0.91,x:93.5,y:196.3},7).to({regX:93.6,regY:195.8,scaleX:1,scaleY:1.03,x:93.6,y:196.1},10).to({regY:196,scaleY:1,y:196},7,cjs.Ease.get(0.01)).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,187.2,196);


(lib.Page_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// anim
	this.instance = new lib.ProgramAnim_mc();
	this.instance.parent = this;
	this.instance.setTransform(242.8,-96.2,1,1,0,0,0,120.8,84.8);

	this.instance_1 = new lib._3DCubeAnim_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-245.3,-102,1,1,0,0,0,93.6,98);

	this.instance_2 = new lib.controllerAnim_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-15,-94.6,1,1,0,0,0,119.2,86.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// SplitLine
	this.LowerText_mc = new lib._3dartist_mc();
	this.LowerText_mc.parent = this;
	this.LowerText_mc.setTransform(95.5,28,1,1,0,0,0,95.5,23.2);

	this.instance_3 = new lib.StageSpliteLine_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0.1,1,1,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.LowerText_mc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Page_1_mc, new cjs.Rectangle(-500,-200,1000.1,336.5), null);


// stage content:
(lib.InteractiveResume = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 1
	this.instance = new lib.Page_1_mc();
	this.instance.parent = this;
	this.instance.setTransform(500,211.7,1,1,0,0,0,0,-31.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,233.5,1000.1,336.5);
// library properties:
lib.properties = {
	width: 1000,
	height: 380,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Page_2_atlas_.png?1525572109358", id:"Page_2_atlas_"}
	],
	preloads: []
};




})(lib_page2 = lib_page2||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib_page2, images, createjs, ss, AdobeAn;