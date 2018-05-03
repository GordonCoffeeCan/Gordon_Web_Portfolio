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
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("EhOHAAAMCcPAAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.StageSpliteLine_mc, new cjs.Rectangle(-501,-1,1002,2), null);


(lib.Raffles_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAvBlIAAh3QAAgVgEgKQgEgKgKgGQgKgGgNAAQgVAAgPAOQgQANAAAmIAABrIghAAIAAjEIAeAAIAAAcQAWghAoAAQASAAAOAHQAQAGAHAKQAIALACAOQACAJAAAYIAAB4g");
	this.shape.setTransform(205.9,26.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Ag6B9QgWgQABggIAgAFQACAPAKAHQAMAJAVAAQAXAAAMgJQANgJAEgRQADgKAAghQgWAaggAAQgoAAgXgeQgWgdAAgoQAAgcAKgYQAKgYAUgNQAUgNAZAAQAjAAAWAcIAAgXIAfAAIAACpQAAAugKATQgJATgUAMQgUALgdAAQgkAAgVgQgAgkheQgPASAAAkQAAAmAPARQAPASAXAAQAWAAAQgSQAQgQAAgmQAAgkgQgTQgRgSgWAAQgVAAgQASg");
	this.shape_1.setTransform(184.2,30.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgQCIIAAjEIAhAAIAADEgAgQhgIAAgnIAhAAIAAAng");
	this.shape_2.setTransform(170,22.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("Ag3BXQgUgQgGgfIAhgGQADAUANALQANALAVAAQAYAAALgKQAKgJABgNQgBgLgJgHQgHgEgbgHQgkgKgPgFQgNgHgIgMQgHgMAAgOQAAgOAGgKQAGgMAKgHQAIgGAOgEQANgEAPAAQAXAAARAHQARAGAJAMQAJALADATIghAFQgDgQgKgIQgLgJgTAAQgWABgKAHQgKAIAAAKQAAAHAEAEQAEAGAJADIAdAJQAjAJAOAHQAOAEAIAMQAIAMAAARQAAAQgKAPQgKAPgSAIQgTAIgWAAQgmAAgUgQg");
	this.shape_3.setTransform(156.2,26.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AhABNQgagcAAgvQAAgxAagcQAZgbAoAAQAoAAAZAbQAZAbAAAwIAAAIIiSAAQACAhAQARQARASAXAAQATAAANgKQANgKAHgVIAjAFQgIAegXAQQgWARgiAAQgqAAgZgagAgkg7QgQAPgBAaIBtAAQgDgZgKgMQgQgUgZAAQgWAAgQAQg");
	this.shape_4.setTransform(136.1,26.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AhvCIIAAkPIBdAAQAfAAARAEQAXAFARAOQAVATALAcQAKAcAAAlQAAAdgHAZQgHAYgLAPQgMAQgNAJQgOAJgSAEQgUAFgXAAgAhLBoIA6AAQAaAAAPgFQAPgFAJgJQANgNAHgWQAHgVAAgeQAAgqgOgYQgOgXgUgHQgOgGgfAAIg5AAg");
	this.shape_5.setTransform(112.4,22.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgbCKIAAiqIgeAAIAAgaIAeAAIAAgVQAAgUADgJQAFgNAMgIQALgIAWAAQAOAAASADIgGAdQgKgCgJAAQgPAAgHAHQgGAGAAASIAAASIAmAAIAAAaIgmAAIAACqg");
	this.shape_6.setTransform(83.2,22.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AhCBNQgZgbAAgyQAAg2AegaQAagWAjAAQApAAAaAaQAZAbAAAvQAAAlgLAWQgLAWgWAMQgWAMgaAAQgoAAgagagAgog4QgRATAAAlQAAAmARATQAQATAYAAQAZgBARgSQAQgUAAglQAAgkgQgUQgRgSgZgBQgYABgQASg");
	this.shape_7.setTransform(66.4,26.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AhABNQgagcAAgvQAAgxAagcQAZgbAoAAQAoAAAZAbQAZAbAAAwIAAAIIiSAAQACAhAQARQARASAXAAQATAAANgKQANgKAHgVIAjAFQgIAegXAQQgWARgiAAQgqAAgZgagAgkg7QgQAPgBAaIBtAAQgDgZgKgMQgQgUgZAAQgWAAgQAQg");
	this.shape_8.setTransform(34.7,26.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgECBQgKgGgEgJQgFgKAAgeIAAhwIgYAAIAAgaIAYAAIAAgxIAhgUIAABFIAhAAIAAAaIghAAIAAByQAAAOABAEQACAEAEADQAEACAIAAIAOgBIAFAdQgOADgLAAQgSAAgJgFg");
	this.shape_9.setTransform(19.2,23.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgsBeQgPgHgIgKQgHgKgDgPQgCgJAAgWIAAh5IAhAAIAABsQAAAbACAJQAEANAKAIQAKAHAPAAQAOAAANgIQANgHAGgOQAFgNAAgZIAAhpIAiAAIAADEIgeAAIAAgdQgXAignAAQgRAAgPgHg");
	this.shape_10.setTransform(3,26.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgECBQgKgGgEgJQgFgKAAgeIAAhwIgYAAIAAgaIAYAAIAAgxIAhgUIAABFIAhAAIAAAaIghAAIAAByQAAAOABAEQACAEAEADQAEACAIAAIAOgBIAFAdQgOADgLAAQgSAAgJgFg");
	this.shape_11.setTransform(-12.5,23.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgQCIIAAjEIAhAAIAADEgAgQhgIAAgnIAhAAIAAAng");
	this.shape_12.setTransform(-22.3,22.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgECBQgKgGgEgJQgFgKAAgeIAAhwIgYAAIAAgaIAYAAIAAgxIAhgUIAABFIAhAAIAAAaIghAAIAAByQAAAOABAEQACAEAEADQAEACAIAAIAOgBIAFAdQgOADgLAAQgSAAgJgFg");
	this.shape_13.setTransform(-31.5,23.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("Ag3BXQgUgQgGgfIAhgGQADAUANALQAMALAWAAQAXAAALgKQALgJAAgNQAAgLgKgHQgGgEgbgHQgkgKgOgFQgOgHgIgMQgHgMAAgOQAAgOAGgKQAGgMAKgHQAIgGAOgEQANgEAQAAQAVAAASAHQARAGAJAMQAIALADATIggAFQgCgQgLgIQgLgJgTAAQgWABgKAHQgKAIAAAKQAAAHAEAEQAEAGAJADIAcAJQAkAJAOAHQAOAEAIAMQAIAMAAARQAAAQgKAPQgKAPgSAIQgTAIgXAAQglAAgUgQg");
	this.shape_14.setTransform(-46.6,26.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AAvBlIAAh3QAAgVgEgKQgEgKgKgGQgKgGgNAAQgUAAgQAOQgPANAAAmIAABrIgiAAIAAjEIAeAAIAAAcQAWghAoAAQARAAAPAHQAPAGAIAKQAHALAEAOQABAJAAAYIAAB4g");
	this.shape_15.setTransform(-66.6,26.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgRCIIAAkPIAjAAIAAEPg");
	this.shape_16.setTransform(-82.3,22.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("Ag3BXQgUgQgGgfIAhgGQADAUANALQANALAVAAQAYAAALgKQAKgJABgNQAAgLgKgHQgHgEgcgHQgjgKgPgFQgOgHgHgMQgHgMAAgOQAAgOAGgKQAGgMAKgHQAIgGANgEQAOgEAPAAQAXAAARAHQASAGAIAMQAJALADATIghAFQgCgQgLgIQgLgJgTAAQgWABgKAHQgKAIAAAKQAAAHAEAEQAEAGAJADIAdAJQAjAJAOAHQAOAEAIAMQAIAMAAARQAAAQgKAPQgKAPgSAIQgSAIgXAAQgmAAgUgQg");
	this.shape_17.setTransform(-107.9,26.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AhABNQgagcAAgvQAAgxAagcQAZgbAoAAQAoAAAZAbQAZAbAAAwIAAAIIiSAAQACAhAQARQARASAXAAQATAAANgKQANgKAHgVIAjAFQgIAegXAQQgWARgiAAQgqAAgZgagAgkg7QgQAPgBAaIBtAAQgDgZgKgMQgQgUgZAAQgWAAgQAQg");
	this.shape_18.setTransform(-127.9,26.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgPCIIAAkPIAfAAIAAEPg");
	this.shape_19.setTransform(-142.7,22.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgbCKIAAiqIgeAAIAAgaIAeAAIAAgVQAAgUADgJQAFgNAMgIQALgIAWAAQAOAAASADIgGAdQgKgCgJAAQgPAAgHAHQgGAGAAASIAAASIAmAAIAAAaIgmAAIAACqg");
	this.shape_20.setTransform(-151.3,22.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgbCKIAAiqIgeAAIAAgaIAeAAIAAgVQAAgUADgJQAFgNAMgIQALgIAWAAQAOAAASADIgGAdQgKgCgJAAQgPAAgHAHQgGAGAAASIAAASIAmAAIAAAaIgmAAIAACqg");
	this.shape_21.setTransform(-161.8,22.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AhIBXQgSgQAAgYQAAgPAHgMQAHgMAKgHQALgGANgEQAKgCAUgDQAngFAUgGIAAgJQAAgUgKgJQgMgMgZAAQgXAAgLAJQgMAIgFAVIghgEQAFgWAKgMQAKgNATgHQAUgHAYAAQAZAAAQAGQAQAGAHAJQAIAJADAOQABAIAAAWIAAAsQAAAuADANQACAMAGALIgjAAQgFgKgCgOQgSAQgRAGQgQAHgUAAQghAAgRgQgAgHAMQgVADgIAEQgJAEgEAHQgFAHAAAJQAAANAKAJQAKAJAUAAQASAAAPgJQAPgIAHgPQAGgLAAgWIAAgMQgTAHgjAFg");
	this.shape_22.setTransform(-178.7,26.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("ABLCIIgkg4QgQgZgKgNQgLgNgHgGQgIgEgIgCQgGgCgOAAIgqAAIAAB5IgkAAIAAkPIB4AAQAkAAATAIQATAHALASQAMATAAAWQAAAdgTAUQgTATgnAFQAOAHAIAHQAPAPAPAVIAvBKgAhTgPIBNAAQAYAAAOgFQAOgFAHgLQAHgMAAgNQAAgTgNgNQgPgMgeAAIhVAAg");
	this.shape_23.setTransform(-201.6,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Raffles_mc, new cjs.Rectangle(-406.2,0,812.5,46.5), null);


(lib.imGordon_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAvBlIAAh3QAAgVgEgKQgEgKgKgGQgKgGgNAAQgUAAgQAOQgPANAAAmIAABrIgiAAIAAjEIAeAAIAAAcQAWghAoAAQARAAAPAHQAPAGAIAKQAHALAEAOQABAJAAAYIAAB4g");
	this.shape.setTransform(82.8,26.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhCBNQgZgbAAgyQAAg2AegaQAagWAjAAQApAAAaAaQAZAbAAAvQAAAlgLAWQgLAWgWAMQgWAMgaAAQgoAAgagagAgog4QgRATAAAlQAAAmARATQAQATAYAAQAZgBARgSQAQgUAAglQAAgkgQgUQgRgSgZgBQgYABgQASg");
	this.shape_1.setTransform(61.6,26.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgrB9QgUgNgLgXQgKgXgBgfQABgdAJgXQAKgYAUgNQAUgNAYAAQAQAAAPAIQANAHAJAMIAAhhIAhAAIAAEPIgeAAIAAgZQgUAdgjAAQgXAAgUgNgAgjgVQgPASAAAmQAAAmAQATQAPATAVAAQAXAAAOgSQAQgSAAglQAAgngQgTQgPgTgXAAQgVAAgPASg");
	this.shape_2.setTransform(39.8,23);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("Ag1BlIAAjEIAfAAIAAAeQALgVAKgHQAIgHANAAQARAAAQALIgLAfQgMgHgNAAQgKAAgIAGQgJAHgDAMQgGARAAAWIAABmg");
	this.shape_3.setTransform(25.1,26.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AhCBNQgZgbAAgyQAAg2AegaQAagWAjAAQApAAAaAaQAZAbAAAvQAAAlgLAWQgLAWgWAMQgWAMgaAAQgoAAgagagAgog4QgRATAAAlQAAAmARATQAQATAYAAQAZgBARgSQAQgUAAglQAAgkgQgUQgRgSgZgBQgYABgQASg");
	this.shape_4.setTransform(6.6,26.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("Ag7B8QgggSgRggQgRghAAgoQAAgnARghQAQgkAggQQAfgRAoAAQAdAAAYAKQAXAJAOARQAOARAGAcIgfAJQgHgVgJgLQgJgMgRgIQgRgHgUAAQgYAAgSAIQgSAHgLANQgLAMgGAPQgLAZABAdQAAAjAMAZQAMAZAYAMQAYALAaAAQAYAAAWgIQAWgKAMgKIAAgzIhQAAIAAgeIBzgBIAABkQgbAWgcAKQgcALgegBQgnAAghgQg");
	this.shape_5.setTransform(-18.8,22.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("ABlBlIAAh7QgBgUgDgJQgDgJgJgFQgIgGgLAAQgWAAgNAOQgOAOAAAeIAAByIggAAIAAh/QgBgXgHgLQgJgLgSAAQgPAAgLAIQgNAHgFAOQgFAPAAAbIAABlIghAAIAAjEIAdAAIAAAbQAKgOAPgJQAPgJAUAAQAWAAAOAJQANAJAGARQAXgjAmAAQAdAAAQARQAPAQAAAhIAACHg");
	this.shape_6.setTransform(-59.7,26.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgKAwIgIgyIAAgtIAlAAIAAAtIgIAyg");
	this.shape_7.setTransform(-79.3,14);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgRCIIAAkPIAjAAIAAEPg");
	this.shape_8.setTransform(-88,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.imGordon_mc, new cjs.Rectangle(-160.5,0,321.2,46.5), null);


(lib.ima_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhIBXQgSgQAAgYQAAgPAHgMQAHgMAKgHQALgGANgEQAKgCAUgDQAngFAUgGIAAgJQAAgUgKgJQgMgMgZAAQgXAAgLAJQgMAIgFAVIghgEQAFgWAKgMQAKgNATgHQAUgHAYAAQAZAAAQAGQAQAGAHAJQAIAJADAOQABAIAAAWIAAAsQAAAuADANQACAMAGALIgjAAQgFgKgCgOQgSAQgRAGQgQAHgUAAQghAAgRgQgAgHAMQgVADgIAEQgJAEgEAHQgFAHAAAJQAAANAKAJQAKAJAUAAQASAAAPgJQAPgIAHgPQAGgLAAgWIAAgMQgTAHgjAFg");
	this.shape.setTransform(29.8,26.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("ABkBlIAAh7QAAgUgDgJQgDgJgIgFQgJgGgLAAQgWAAgNAOQgOAOAAAeIAAByIghAAIAAh/QAAgXgHgLQgJgLgSAAQgOAAgMAIQgNAHgEAOQgGAPAAAbIAABlIgiAAIAAjEIAfAAIAAAbQAIgOAQgJQAPgJAUAAQAWAAAOAJQANAJAGARQAXgjAlAAQAeAAAQARQAPAQAAAhIAACHg");
	this.shape_1.setTransform(-6.9,26.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgJAwIgJgyIAAgtIAlAAIAAAtIgJAyg");
	this.shape_2.setTransform(-26.5,14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgRCIIAAkPIAjAAIAAEPg");
	this.shape_3.setTransform(-35.2,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ima_mc, new cjs.Rectangle(-42.6,0,85.3,46.5), null);


(lib.hi_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgQCIIAAjEIAhAAIAADEgAgQhgIAAgnIAhAAIAAAng");
	this.shape.setTransform(13.7,22.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("ABHCIIAAiAIiNAAIAACAIgkAAIAAkPIAkAAIAABvICNAAIAAhvIAkAAIAAEPg");
	this.shape_1.setTransform(-4.2,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hi_mc, new cjs.Rectangle(-20,0,40.1,46.5), null);


(lib.Beijing_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ag6B9QgWgQABggIAhAFQABAPAJAHQANAJAWAAQAWAAANgJQAMgJAFgRQACgKAAghQgWAagfAAQgpAAgXgeQgWgdAAgoQAAgcALgYQAJgYAUgNQAUgNAaAAQAiAAAWAcIAAgXIAfAAIAACpQAAAugJATQgKATgUAMQgUALgdAAQgjAAgWgQgAgkheQgQASAAAkQAAAmAQARQAQASAVAAQAYAAAPgSQAPgQAAgmQAAgkgPgTQgRgSgWAAQgWAAgPASg");
	this.shape.setTransform(111.3,30.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAvBlIAAh3QAAgVgEgKQgEgKgKgGQgKgGgNAAQgVAAgPAOQgPANAAAmIAABrIgiAAIAAjEIAeAAIAAAcQAWghAoAAQASAAAPAHQAOAGAIAKQAHALAEAOQABAJAAAYIAAB4g");
	this.shape_1.setTransform(90.8,26.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgQCIIAAjEIAhAAIAADEgAgQhgIAAgnIAhAAIAAAng");
	this.shape_2.setTransform(76,22.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AglCsIAHgcQAJADAGAAQALAAAEgHQAEgHABgbIAAjOIAhAAIAADPQAAAkgKAPQgMASgbAAQgOAAgMgEgAAFiIIAAgnIAhAAIAAAng");
	this.shape_3.setTransform(65.4,26.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgQCIIAAjEIAhAAIAADEgAgQhgIAAgnIAhAAIAAAng");
	this.shape_4.setTransform(59.1,22.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AhABNQgagcAAgvQAAgxAagcQAZgbAoAAQAoAAAZAbQAZAbAAAwIAAAIIiSAAQACAhAQARQARASAXAAQATAAANgKQANgKAHgVIAjAFQgIAegXAQQgWARgiAAQgqAAgZgagAgkg7QgQAPgBAaIBtAAQgDgZgKgMQgQgUgZAAQgWAAgQAQg");
	this.shape_5.setTransform(44.2,26.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AhmCIIAAkPIBmAAQAfAAASAJQATAHALASQALARAAASQAAASgKAPQgJAQgTAKQAYAGAOARQANARgBAYQAAATgHARQgJAQgMAJQgLAJgSAEQgSAFgaAAgAhCBoIBDAAQASAAAHgCQAMgCAJgFQAIgFAFgKQAFgKAAgNQABgPgJgLQgHgMgOgEQgOgEgZAAIg/AAgAhCgVIA7AAQAXAAALgDQANgEAHgJQAHgKAAgOQAAgNgHgLQgGgLgMgDQgMgEgdAAIg2AAg");
	this.shape_6.setTransform(21.5,22.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("Ag3BXQgUgQgGgfIAhgGQADAUANALQAMALAWAAQAYAAAKgKQAMgJAAgNQgBgLgJgHQgHgEgbgHQgkgKgPgFQgNgHgIgMQgHgMAAgOQAAgOAGgKQAGgMAKgHQAIgGAOgEQANgEAPAAQAXAAARAHQARAGAJAMQAIALAEATIghAFQgDgQgKgIQgLgJgTAAQgWABgKAHQgKAIAAAKQAAAHAEAEQAEAGAJADIAdAJQAjAJAOAHQAOAEAIAMQAIAMAAARQAAAQgKAPQgKAPgSAIQgTAIgWAAQgmAAgUgQg");
	this.shape_7.setTransform(-11.8,26.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgQCIIAAjEIAhAAIAADEgAgQhgIAAgnIAhAAIAAAng");
	this.shape_8.setTransform(-25.4,22.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AhABNQgagcAAgvQAAgxAagcQAZgbAoAAQAoAAAZAbQAZAbAAAwIAAAIIiSAAQACAhAQARQARASAXAAQATAAANgKQANgKAHgVIAjAFQgIAegXAQQgWARgiAAQgqAAgZgagAgkg7QgQAPgBAaIBtAAQgDgZgKgMQgQgUgZAAQgWAAgQAQg");
	this.shape_9.setTransform(-50.8,26.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("Ag0BlIAAjEIAeAAIAAAeQALgVAKgHQAIgHANAAQAQAAARALIgLAfQgMgHgNAAQgKAAgIAGQgJAHgDAMQgGARAAAWIAABmg");
	this.shape_10.setTransform(-66.1,26.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AhABNQgagcAAgvQAAgxAagcQAZgbAoAAQAoAAAZAbQAZAbAAAwIAAAIIiSAAQACAhAQARQARASAXAAQATAAANgKQANgKAHgVIAjAFQgIAegXAQQgWARgiAAQgqAAgZgagAgkg7QgQAPgBAaIBtAAQgDgZgKgMQgQgUgZAAQgWAAgQAQg");
	this.shape_11.setTransform(-84.6,26.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("ABHCIIAAiAIiNAAIAACAIgkAAIAAkPIAkAAIAABvICNAAIAAhvIAkAAIAAEPg");
	this.shape_12.setTransform(-108.8,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Beijing_mc, new cjs.Rectangle(-406.2,0,812.5,46.5), null);


(lib._3dartist_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ag1BlIAAjEIAeAAIAAAeQAMgVAKgHQAIgHAMAAQARAAARALIgLAfQgMgHgNAAQgKAAgIAGQgIAHgFAMQgFARAAAWIAABmg");
	this.shape.setTransform(384.8,26.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhABNQgagcAAgvQAAgxAagcQAZgbAoAAQAoAAAZAbQAZAbAAAwIAAAIIiSAAQACAhAQARQARASAXAAQATAAANgKQANgKAHgVIAjAFQgIAegXAQQgWARgiAAQgqAAgZgagAgkg7QgQAPgBAaIBtAAQgDgZgKgMQgQgUgZAAQgWAAgQAQg");
	this.shape_1.setTransform(366.3,26.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("ABlBlIAAh7QgBgUgDgJQgDgJgJgFQgIgGgMAAQgUAAgOAOQgOAOAAAeIAAByIghAAIAAh/QABgXgJgLQgHgLgUAAQgNAAgMAIQgMAHgGAOQgFAPAAAbIAABlIgiAAIAAjEIAeAAIAAAbQAJgOAQgJQAQgJATAAQAWAAAOAJQANAJAGARQAXgjAmAAQAdAAAQARQAQAQAAAhIAACHg");
	this.shape_2.setTransform(340.1,26.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("ABkBlIAAh7QABgUgEgJQgDgJgIgFQgJgGgMAAQgUAAgOAOQgOAOAAAeIAAByIghAAIAAh/QAAgXgIgLQgHgLgUAAQgOAAgLAIQgNAHgEAOQgGAPAAAbIAABlIgiAAIAAjEIAfAAIAAAbQAIgOAQgJQAPgJAUAAQAWAAAOAJQANAJAGARQAXgjAlAAQAeAAAQARQAQAQAAAhIAACHg");
	this.shape_3.setTransform(308.4,26.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AhIBXQgSgQAAgYQAAgPAHgMQAHgMAKgHQALgGANgEQAKgCAUgDQAngFAUgGIAAgJQAAgUgKgJQgMgMgZAAQgXAAgLAJQgMAIgFAVIghgEQAFgWAKgMQAKgNATgHQAUgHAYAAQAZAAAQAGQAQAGAHAJQAIAJADAOQABAIAAAWIAAAsQAAAuADANQACAMAGALIgjAAQgFgKgCgOQgSAQgRAGQgQAHgUAAQghAAgRgQgAgHAMQgVADgIAEQgJAEgEAHQgFAHAAAJQAAANAKAJQAKAJAUAAQASAAAPgJQAPgIAHgPQAGgLAAgWIAAgMQgTAHgjAFg");
	this.shape_4.setTransform(281.8,26.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("Ag1BlIAAjEIAfAAIAAAeQALgVAKgHQAIgHAMAAQASAAAQALIgLAfQgMgHgNAAQgKAAgIAGQgIAHgEAMQgGARAAAWIAABmg");
	this.shape_5.setTransform(266.6,26.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("Ag6B9QgWgQABggIAgAFQADAPAIAHQANAJAVAAQAXAAAMgJQANgJAEgRQADgKAAghQgWAaggAAQgoAAgXgeQgWgdAAgoQAAgcAKgYQAKgYAUgNQATgNAaAAQAjAAAWAcIAAgXIAfAAIAACpQAAAugKATQgJATgUAMQgUALgdAAQgkAAgVgQgAgkheQgPASAAAkQAAAmAPARQAPASAXAAQAWAAAQgSQAQgQAAgmQAAgkgQgTQgQgSgXAAQgWAAgPASg");
	this.shape_6.setTransform(247.5,30.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AhCBNQgZgbAAgyQAAg2AegaQAagWAjAAQApAAAaAaQAZAbAAAvQAAAlgLAWQgLAWgWAMQgWAMgaAAQgoAAgagagAgog4QgRATAAAlQAAAmARATQAQATAYAAQAZgBARgSQAQgUAAglQAAgkgQgUQgRgSgZgBQgYABgQASg");
	this.shape_7.setTransform(226.9,26.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("Ag0BlIAAjEIAeAAIAAAeQALgVAKgHQAJgHAMAAQAQAAASALIgMAfQgMgHgMAAQgLAAgIAGQgJAHgEAMQgFARAAAWIAABmg");
	this.shape_8.setTransform(211.6,26.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AhnCIIAAkPIBnAAQAaAAAOACQAUAEAOAJQANAKAJAQQAIASAAATQAAAjgWAXQgWAZg6AAIhFAAIAABugAhDgGIBFAAQAjABAPgNQAPgNAAgYQAAgRgJgNQgJgMgOgDQgJgDgYAAIhFAAg");
	this.shape_9.setTransform(191.8,22.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AhABNQgagcAAgvQAAgxAagcQAZgbAoAAQAoAAAZAbQAZAbAAAwIAAAIIiSAAQACAhAQARQARASAXAAQATAAANgKQANgKAHgVIAjAFQgIAegXAQQgWARgiAAQgqAAgZgagAgkg7QgQAPgBAaIBtAAQgDgZgKgMQgQgUgZAAQgWAAgQAQg");
	this.shape_10.setTransform(157.2,26.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("ABlBlIAAh7QAAgUgEgJQgDgJgIgFQgJgGgLAAQgWAAgNAOQgOAOAAAeIAAByIggAAIAAh/QgBgXgHgLQgJgLgSAAQgOAAgMAIQgMAHgFAOQgGAPAAAbIAABlIghAAIAAjEIAdAAIAAAbQAKgOAPgJQAQgJATAAQAWAAAOAJQANAJAGARQAXgjAmAAQAdAAAQARQAPAQAAAhIAACHg");
	this.shape_11.setTransform(131,26.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AhIBXQgSgQAAgYQAAgPAHgMQAHgMAKgHQALgGANgEQAKgCAUgDQAngFAUgGIAAgJQAAgUgKgJQgMgMgZAAQgXAAgLAJQgMAIgFAVIghgEQAFgWAKgMQAKgNATgHQAUgHAYAAQAZAAAQAGQAQAGAHAJQAIAJADAOQABAIAAAWIAAAsQAAAuADANQACAMAGALIgjAAQgFgKgCgOQgSAQgRAGQgQAHgUAAQghAAgRgQgAgHAMQgVADgIAEQgJAEgEAHQgFAHAAAJQAAANAKAJQAKAJAUAAQASAAAPgJQAPgIAHgPQAGgLAAgWIAAgMQgTAHgjAFg");
	this.shape_12.setTransform(104.4,26.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("Ag6B8QgigSgQggQgRghAAgoQAAgnARghQAQgkAfgQQAggRAnAAQAeAAAYAKQAYAJANARQANARAIAcIghAJQgGgVgJgLQgJgMgRgIQgRgHgVAAQgXAAgSAIQgSAHgLANQgLAMgGAPQgLAZAAAdQAAAjANAZQAMAZAZAMQAYALAZAAQAXAAAXgIQAWgKALgKIAAgzIhQAAIAAgeIB0gBIAABkQgaAWgdAKQgcALgegBQgnAAgggQg");
	this.shape_13.setTransform(79,22.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgTAfQAKgEAFgJQAEgJABgQIgSAAIAAgmIAlAAIAAAmQAAAUgHANQgIANgPAHg");
	this.shape_14.setTransform(48.5,37.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("Ag0BlIAAjEIAdAAIAAAeQAMgVAKgHQAJgHAMAAQAQAAASALIgMAfQgMgHgMAAQgLAAgIAGQgJAHgEAMQgFARAAAWIAABmg");
	this.shape_15.setTransform(38.5,26.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AhABNQgagcAAgvQAAgxAagcQAZgbAoAAQAoAAAZAbQAZAbAAAwIAAAIIiSAAQACAhAQARQARASAXAAQATAAANgKQANgKAHgVIAjAFQgIAegXAQQgWARgiAAQgqAAgZgagAgkg7QgQAPgBAaIBtAAQgDgZgKgMQgQgUgZAAQgWAAgQAQg");
	this.shape_16.setTransform(20,26.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AAvBlIAAh3QAAgVgEgKQgEgKgKgGQgKgGgNAAQgVAAgPAOQgPANAAAmIAABrIgiAAIAAjEIAeAAIAAAcQAWghAoAAQASAAAPAHQAOAGAIAKQAHALADAOQACAJAAAYIAAB4g");
	this.shape_17.setTransform(-1.1,26.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("Ag6B9QgWgQABggIAhAFQABAPAJAHQANAJAWAAQAWAAANgJQAMgJAFgRQACgKAAghQgWAagfAAQgpAAgWgeQgXgdAAgoQAAgcALgYQAJgYAUgNQAUgNAaAAQAhAAAXAcIAAgXIAfAAIAACpQAAAugJATQgKATgUAMQgUALgdAAQgjAAgWgQgAgkheQgQASAAAkQAAAmAQARQAQASAVAAQAYAAAPgSQAPgQAAgmQAAgkgPgTQgRgSgWAAQgVAAgQASg");
	this.shape_18.setTransform(-22.9,30.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgQCIIAAjEIAhAAIAADEgAgQhgIAAgnIAhAAIAAAng");
	this.shape_19.setTransform(-37.1,22.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("Ag3BXQgUgQgGgfIAhgGQADAUANALQANALAVAAQAXAAALgKQAMgJgBgNQABgLgLgHQgGgEgcgHQgjgKgOgFQgPgHgHgMQgHgMAAgOQAAgOAGgKQAGgMAKgHQAIgGANgEQAOgEAQAAQAVAAASAHQASAGAIAMQAJALACATIggAFQgDgQgKgIQgLgJgSAAQgYABgJAHQgKAIAAAKQAAAHAEAEQAEAGAJADIAcAJQAkAJAOAHQAOAEAIAMQAIAMAAARQAAAQgKAPQgJAPgTAIQgSAIgYAAQglAAgUgQg");
	this.shape_20.setTransform(-50.9,26.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AhABNQgagcAAgvQAAgxAagcQAZgbAoAAQAoAAAZAbQAZAbAAAwIAAAIIiSAAQACAhAQARQARASAXAAQATAAANgKQANgKAHgVIAjAFQgIAegXAQQgWARgiAAQgqAAgZgagAgkg7QgQAPgBAaIBtAAQgDgZgKgMQgQgUgZAAQgWAAgQAQg");
	this.shape_21.setTransform(-70.9,26.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AhvCIIAAkPIBdAAQAfAAARAEQAXAFARAOQAVATALAcQAKAcAAAlQAAAdgHAZQgHAYgLAPQgMAQgNAJQgOAJgSAEQgUAFgXAAgAhLBoIA6AAQAaAAAPgFQAPgFAJgJQANgNAHgWQAHgVAAgeQAAgqgOgYQgOgXgUgHQgOgGgfAAIg5AAg");
	this.shape_22.setTransform(-94.7,22.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AhABNQgagcAAgvQAAgxAagcQAZgbAoAAQAoAAAZAbQAZAbAAAwIAAAIIiSAAQACAhAQARQARASAXAAQATAAANgKQANgKAHgVIAjAFQgIAegXAQQgWARgiAAQgqAAgZgagAgkg7QgQAPgBAaIBtAAQgDgZgKgMQgQgUgZAAQgWAAgQAQg");
	this.shape_23.setTransform(-130.1,26.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("ABkBlIAAh7QAAgUgDgJQgDgJgIgFQgJgGgLAAQgWAAgNAOQgOAOAAAeIAAByIghAAIAAh/QAAgXgHgLQgJgLgSAAQgOAAgMAIQgNAHgEAOQgGAPAAAbIAABlIgiAAIAAjEIAfAAIAAAbQAIgOAQgJQAPgJAUAAQAWAAAOAJQANAJAGARQAXgjAlAAQAeAAAQARQAPAQAAAhIAACHg");
	this.shape_24.setTransform(-156.3,26.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AhIBXQgSgQAAgYQAAgPAHgMQAHgMAKgHQALgGANgEQAKgCAUgDQAngFAUgGIAAgJQAAgUgKgJQgMgMgZAAQgXAAgLAJQgMAIgFAVIghgEQAFgWAKgMQAKgNATgHQAUgHAYAAQAZAAAQAGQAQAGAHAJQAIAJADAOQABAIAAAWIAAAsQAAAuADANQACAMAGALIgjAAQgFgKgCgOQgSAQgRAGQgQAHgUAAQghAAgRgQgAgHAMQgVADgIAEQgJAEgEAHQgFAHAAAJQAAANAKAJQAKAJAUAAQASAAAPgJQAPgIAHgPQAGgLAAgWIAAgMQgTAHgjAFg");
	this.shape_25.setTransform(-182.9,26.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("Ag7B8QgggSgRggQgRghAAgoQAAgnARghQARgkAegQQAggRAnAAQAeAAAYAKQAXAJAOARQANARAIAcIghAJQgGgVgJgLQgJgMgRgIQgRgHgVAAQgXAAgSAIQgSAHgLANQgLAMgHAPQgJAZgBAdQAAAjANAZQAMAZAZAMQAXALAaAAQAYAAAWgIQAWgKALgKIAAgzIhQAAIAAgeIB0gBIAABkQgaAWgdAKQgcALgegBQgnAAghgQg");
	this.shape_26.setTransform(-208.3,22.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgTAfQAKgEAFgJQAEgJABgQIgSAAIAAgmIAlAAIAAAmQAAAUgHANQgIANgPAHg");
	this.shape_27.setTransform(-238.8,37.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgECBQgKgGgEgJQgFgKAAgeIAAhwIgYAAIAAgaIAYAAIAAgxIAhgUIAABFIAhAAIAAAaIghAAIAAByQAAAOABAEQACAEAEADQAEACAIAAIAOgBIAFAdQgOADgLAAQgSAAgJgFg");
	this.shape_28.setTransform(-249.1,23.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("Ag3BXQgUgQgGgfIAhgGQADAUANALQANALAVAAQAXAAALgKQALgJAAgNQAAgLgKgHQgGgEgcgHQgjgKgOgFQgPgHgHgMQgHgMAAgOQAAgOAGgKQAGgMAKgHQAIgGANgEQAOgEAQAAQAVAAASAHQASAGAIAMQAJALACATIggAFQgDgQgKgIQgLgJgSAAQgYABgJAHQgKAIAAAKQAAAHAEAEQAEAGAJADIAcAJQAkAJAOAHQAOAEAIAMQAIAMAAARQAAAQgKAPQgJAPgTAIQgSAIgYAAQglAAgUgQg");
	this.shape_29.setTransform(-264.2,26.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgQCIIAAjEIAhAAIAADEgAgQhgIAAgnIAhAAIAAAng");
	this.shape_30.setTransform(-277.8,22.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AgECBQgKgGgEgJQgFgKAAgeIAAhwIgYAAIAAgaIAYAAIAAgxIAhgUIAABFIAhAAIAAAaIghAAIAAByQAAAOABAEQACAEAEADQAEACAIAAIAOgBIAFAdQgOADgLAAQgSAAgJgFg");
	this.shape_31.setTransform(-287.1,23.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("Ag1BlIAAjEIAeAAIAAAeQAMgVAKgHQAIgHAMAAQARAAARALIgLAfQgMgHgNAAQgKAAgIAGQgIAHgFAMQgFARAAAWIAABmg");
	this.shape_32.setTransform(-297.4,26.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("ABWCIIgfhSIhxAAIgeBSIgmAAIBokPIAmAAIBvEPgAgSg2IgeBPIBbAAIgchLQgNgigFgWQgFAagKAag");
	this.shape_33.setTransform(-317.9,22.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AhvCIIAAkPIBdAAQAfAAARAEQAXAFARAOQAVATALAcQAKAcAAAlQAAAdgHAZQgHAYgLAPQgMAQgNAJQgOAJgSAEQgUAFgXAAgAhLBoIA6AAQAaAAAPgFQAPgFAJgJQANgNAHgWQAHgVAAgeQAAgqgOgYQgOgXgUgHQgOgGgfAAIg5AAg");
	this.shape_34.setTransform(-354.4,22.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("Ag9B1QgYgVgDgiIAhgFQAGAdAOAMQAOANAUAAQAWAAAQgQQARgQgBgZQABgXgQgOQgPgPgXgBQgIABgOADIADgcIAGAAQAVABARgMQAQgLABgXQAAgSgNgMQgMgMgTAAQgTAAgOAMQgMAMgFAYIgggGQAGghAVgSQAWgTAgAAQAVAAATAKQATAJAKARQAKAQAAASQgBASgIAPQgKAOgTAJQAZAFANARQANARAAAbQAAAjgaAZQgaAZgmAAQgkAAgYgWg");
	this.shape_35.setTransform(-379.2,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._3dartist_mc, new cjs.Rectangle(-406.2,0,812.5,46.5), null);


(lib.Page_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.goNextPage = false;
		this.goPreviousPage = false;
		
		this.stop();
		
		document.getElementById('canvas').addEventListener('mousewheel',f.bind(this));
		
		//document.getElementById('canvas').addEventListener('DOMMouseScroll',f.bind(this));
		
		function f(event){
		
		//e.detail
			this.play();
			
			if(event.wheelDelta < 0){
				this.goNextPage = true;
			}else{
				this.goPreviousPage = true;
			}
		
		}
	}
	this.frame_49 = function() {
		if(this.goNextPage){
			this.parent.gotoAndStop(this.parent.currentFrame + 1);
		}
		
		if(this.goPreviousPage){
			this.parent.gotoAndStop(this.parent.currentFrame - 1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(25).call(this.frame_49).wait(1));

	// UpperText
	this.UpperText_mc = new lib.Beijing_mc();
	this.UpperText_mc.parent = this;
	this.UpperText_mc.setTransform(20.1,-13.2,1,1,0,0,0,20.1,23.2);
	this.UpperText_mc.alpha = 0;
	this.UpperText_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.UpperText_mc).wait(9).to({_off:false},0).to({y:-29,alpha:1},9,cjs.Ease.get(0.01)).wait(12).to({y:-13.2,alpha:0},9).wait(11));

	// LowerText
	this.LowerText_mc = new lib.Raffles_mc();
	this.LowerText_mc.parent = this;
	this.LowerText_mc.setTransform(95.5,14.8,1,1,0,0,0,95.5,23.2);
	this.LowerText_mc.alpha = 0;
	this.LowerText_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.LowerText_mc).wait(15).to({_off:false},0).to({y:28,alpha:1},9,cjs.Ease.get(0.01)).to({y:14.8,alpha:0},10).wait(16));

	// SplitLine
	this.instance = new lib.StageSpliteLine_mc();
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,0.1,1,0,0,0,0,0.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,alpha:1},24,cjs.Ease.get(0.01)).to({scaleX:0.1,alpha:0},25,cjs.Ease.get(0.01)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-0.5,100.1,1);


(lib.Page_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.goNextPage = false;
		this.goPreviousPage = false;
		
		this.stop();
		
		document.getElementById('canvas').addEventListener('mousewheel',f.bind(this));
		
		//document.getElementById('canvas').addEventListener('DOMMouseScroll',f.bind(this));
		
		function f(event){
		
		//e.detail
			this.play();
			
			if(event.wheelDelta < 0){
				this.goNextPage = true;
			}else{
				this.goPreviousPage = true;
			}
		
		}
	}
	this.frame_49 = function() {
		if(this.goNextPage){
			this.parent.gotoAndStop(this.parent.currentFrame + 1);
		}
		
		if(this.goPreviousPage){
			this.parent.gotoAndStop(this.parent.currentFrame - 1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(25).call(this.frame_49).wait(1));

	// UpperText
	this.UpperText_mc = new lib.ima_mc();
	this.UpperText_mc.parent = this;
	this.UpperText_mc.setTransform(20.1,-13.2,1,1,0,0,0,20.1,23.2);
	this.UpperText_mc.alpha = 0;
	this.UpperText_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.UpperText_mc).wait(9).to({_off:false},0).to({y:-29,alpha:1},9,cjs.Ease.get(0.01)).wait(12).to({y:-13.2,alpha:0},9).wait(11));

	// LowerText
	this.LowerText_mc = new lib._3dartist_mc();
	this.LowerText_mc.parent = this;
	this.LowerText_mc.setTransform(95.5,14.8,1,1,0,0,0,95.5,23.2);
	this.LowerText_mc.alpha = 0;
	this.LowerText_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.LowerText_mc).wait(15).to({_off:false},0).to({y:28,alpha:1},9,cjs.Ease.get(0.01)).to({y:14.8,alpha:0},10).wait(16));

	// SplitLine
	this.instance = new lib.StageSpliteLine_mc();
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,0.1,1,0,0,0,0,0.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,alpha:1},24,cjs.Ease.get(0.01)).to({scaleX:0.1,alpha:0},25,cjs.Ease.get(0.01)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-0.5,100.1,1);


(lib.Page_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.parent.stop();
	}
	this.frame_24 = function() {
		this.goNextPage = false;
		
		this.stop();
		
		document.getElementById('canvas').addEventListener('mousewheel',f.bind(this));
		
		//document.getElementById('canvas').addEventListener('DOMMouseScroll',f.bind(this));
		
		function f(event){
			
			if(event.wheelDelta < 0){
				this.play();
				this.goNextPage = true;
			}
		
		}
	}
	this.frame_49 = function() {
		if(this.goNextPage){
			this.parent.gotoAndPlay(this.parent.currentFrame + 1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(25).call(this.frame_49).wait(1));

	// UpperText
	this.UpperText_mc = new lib.hi_mc();
	this.UpperText_mc.parent = this;
	this.UpperText_mc.setTransform(20.1,-13.2,1,1,0,0,0,20.1,23.2);
	this.UpperText_mc.alpha = 0;
	this.UpperText_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.UpperText_mc).wait(9).to({_off:false},0).to({y:-29,alpha:1},9,cjs.Ease.get(0.01)).wait(12).to({y:-13.2,alpha:0},9).wait(11));

	// LowerText
	this.LowerText_mc = new lib.imGordon_mc();
	this.LowerText_mc.parent = this;
	this.LowerText_mc.setTransform(95.5,14.8,1,1,0,0,0,95.5,23.2);
	this.LowerText_mc.alpha = 0;
	this.LowerText_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.LowerText_mc).wait(15).to({_off:false},0).to({y:28,alpha:1},9,cjs.Ease.get(0.01)).to({y:14.8,alpha:0},10).wait(16));

	// SplitLine
	this.instance = new lib.StageSpliteLine_mc();
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,0.1,1,0,0,0,0,0.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,alpha:1},24,cjs.Ease.get(0.01)).to({scaleX:0.1,alpha:0},25,cjs.Ease.get(0.01)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-0.5,100.1,1);


// stage content:
(lib.InteractiveResume = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Start:0});

	// timeline functions:
	this.frame_0 = function() {
		/*this.cube_mc.addEventListener("click", MouseClick.bind(this));
		
		function MouseClick(){
			console.log("clicked");
		}
		
		document.getElementById('canvas').addEventListener('mousewheel',f.bind(this));
		
		//document.getElementById('canvas').addEventListener('DOMMouseScroll',f.bind(this));
		
		function f(e){
		
		//e.detail
			console.log(e.wheelDelta);
		
		}*/
		
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Pages
	this.Page_0_mc = new lib.Page_0_mc();
	this.Page_0_mc.parent = this;
	this.Page_0_mc.setTransform(640,360);

	this.instance = new lib.Page_1_mc();
	this.instance.parent = this;
	this.instance.setTransform(640,360);

	this.instance_1 = new lib.Page_2_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Page_0_mc}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// PageIndicator
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AAUAAQAAAIgGAGQgGAGgIAAQgIAAgGgGQgFgGAAgIQAAgIAFgGQAGgFAIAAQAIAAAGAFQAGAGAAAIg");
	this.shape.setTransform(638.2,643.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1230,719.5,100.1,286.9);
// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;