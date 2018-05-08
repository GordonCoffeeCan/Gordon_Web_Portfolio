(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"Page_6_atlas_", frames: [[0,0,564,486],[566,252,182,92],[566,0,188,250]]}
];


// symbols:



(lib.Computer = function() {
	this.spriteSheet = ss["Page_6_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.GamePad2 = function() {
	this.spriteSheet = ss["Page_6_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.NoteBook = function() {
	this.spriteSheet = ss["Page_6_atlas_"];
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


(lib.TextAnimShort = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgLBIIAAiQIAXAAIAACQg");
	var mask_graphics_1 = new cjs.Graphics().p("AhJBJIAAiQICTAAIAACQg");
	var mask_graphics_2 = new cjs.Graphics().p("AiIBJIAAiQIERAAIAACQg");
	var mask_graphics_3 = new cjs.Graphics().p("AjGBJIAAiQIGNAAIAACQg");
	var mask_graphics_4 = new cjs.Graphics().p("AkEBJIAAiQIIJAAIAACQg");
	var mask_graphics_5 = new cjs.Graphics().p("AlCBJIAAiQIKFAAIAACQg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-1.2,y:7.3}).wait(1).to({graphics:mask_graphics_1,x:5,y:7.3}).wait(1).to({graphics:mask_graphics_2,x:11.3,y:7.3}).wait(1).to({graphics:mask_graphics_3,x:17.5,y:7.3}).wait(1).to({graphics:mask_graphics_4,x:23.7,y:7.3}).wait(1).to({graphics:mask_graphics_5,x:29.9,y:7.3}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AkIAOIAAgaIIRAAIAAAag");
	this.shape.setTransform(26.5,8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,6.7,0,2.7);


(lib.TextAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgLBIIAAiQIAXAAIAACQg");
	var mask_graphics_1 = new cjs.Graphics().p("AhJBIIAAiPICTAAIAACPg");
	var mask_graphics_2 = new cjs.Graphics().p("AiIBIIAAiPIERAAIAACPg");
	var mask_graphics_3 = new cjs.Graphics().p("AjGBIIAAiPIGNAAIAACPg");
	var mask_graphics_4 = new cjs.Graphics().p("AkEBIIAAiPIIJAAIAACPg");
	var mask_graphics_5 = new cjs.Graphics().p("AlCBIIAAiPIKFAAIAACPg");
	var mask_graphics_6 = new cjs.Graphics().p("AmBBIIAAiPIMDAAIAACPg");
	var mask_graphics_7 = new cjs.Graphics().p("Am/BIIAAiPIN/AAIAACPg");
	var mask_graphics_8 = new cjs.Graphics().p("An9BIIAAiPIP7AAIAACPg");
	var mask_graphics_9 = new cjs.Graphics().p("Ao8BJIAAiQIR5AAIAACQg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-1.2,y:7.3}).wait(1).to({graphics:mask_graphics_1,x:5,y:7.2}).wait(1).to({graphics:mask_graphics_2,x:11.3,y:7.2}).wait(1).to({graphics:mask_graphics_3,x:17.5,y:7.2}).wait(1).to({graphics:mask_graphics_4,x:23.7,y:7.2}).wait(1).to({graphics:mask_graphics_5,x:29.9,y:7.2}).wait(1).to({graphics:mask_graphics_6,x:36.2,y:7.2}).wait(1).to({graphics:mask_graphics_7,x:42.4,y:7.2}).wait(1).to({graphics:mask_graphics_8,x:48.6,y:7.2}).wait(1).to({graphics:mask_graphics_9,x:54.9,y:7.2}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AoqAOIAAgaIRVAAIAAAag");
	this.shape.setTransform(55.5,8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,6.7,0,2.7);


(lib.SpikePlatform_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AkGBiIAAhnIBChcIBCBcIBChcIBABcIBChcIBBBcIBChcIBCBcIAABng");
	this.shape.setTransform(26.3,9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52.6,19.7);


(lib.Platform_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AkGA0IAAhnIINAAIAABng");
	this.shape.setTransform(26.3,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52.6,10.5);


(lib.Notebook_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.NoteBook();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Notebook_mc, new cjs.Rectangle(0,0,188,250), null);


(lib.Gamepad2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.GamePad2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Gamepad2_mc, new cjs.Rectangle(0,0,182,92), null);


(lib.FakePlayer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhFBGIAAiLICLAAIAACLg");
	this.shape.setTransform(7,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.Computer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Computer();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Computer_mc, new cjs.Rectangle(0,0,564,486), null);


(lib.NotebookAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AF9BbQgKgDgGgFQgFgGAAgJQAAgGAEgFQADgFAHgEIAAgBQgEgCgDgEQgCgEAAgGQAAgGADgFQADgFAFgDIAAgBQgFgDgFgHQgDgGAAgJQAAgLAFgIQAGgIAJgEQAKgEAKAAIAIAAIAIACIAkAAIAAAVIgQAAIADAGIABAHQgBAMgFAGQgFAIgIADQgKAEgLAAIgFgBIgHgBQAAAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAIgBAEQAAAEADACQAEACAIAAIAQAAQASAAAKAGQAJAGABANQgBAKgGAIQgHAIgMAFQgNAEgRAAQgMAAgIgCgAGBA7IgBAFQAAAFAGADQAGADAKAAQAKAAAGgDQAHgEAAgFQAAgFgEgBQgEgCgIAAIgKAAIgIAAIgFgBIgFAFgAGKgZQgEAEAAAHQAAAJAEAEQAEADAFAAQAHAAADgDQAEgEAAgJQAAgHgEgEQgDgEgHAAQgFAAgEAEgADnAyQgKgEgIgGIAOgTQAHAGAGACQAGADAHAAQAGAAADgCQADgDAAgEQAAgDgDgCIgHgEIgKgEQgGgCgHgEQgFgEgEgEQgEgGAAgIQAAgOAKgJQAKgIARAAQAMAAAIAEQAJADAHAFIgOASIgKgGQgGgDgFAAQgFAAgDADQgDABABAEQgBADADADIAHADIAKAEIAMAGQAGACAFAGQAEAGgBAJQAAAJgEAHQgFAHgJAEQgJAEgOABQgJgBgLgDgACKAvQgLgGgHgLQgGgMgBgQQABgPAGgMQAHgMALgGQAKgGAMAAQAOAAAKAGQAJAGAEALQAFALAAANIAAAGIgBAGIg8AAQADALAGAFQAHAFAKAAQAGAAAFgBIALgFIAKARQgIAGgJADQgKACgIABQgPgBgLgGgACUgWQgFAFgCAJIAkAAQABgIgEgFQgFgGgJAAQgHAAgFAFgAiFAvQgLgGgHgLQgGgMgBgQQABgPAGgMQAHgMALgGQAKgGAMAAQAOAAAKAGQAJAGAEALQAFALAAANIAAAGIgBAGIg7AAQABALAHAFQAIAFAKAAQAFAAAFgBIALgFIAJARQgHAGgKADQgIACgKABQgOgBgLgGgAh6gWQgGAFgBAJIAjAAQAAgIgDgFQgFgGgJAAQgGAAgFAFgAmkAyQgHgEgDgHQgEgHAAgIQAAgQANgIQANgJAdgDQAAgGgDgEQgEgEgIAAQgGAAgHACIgNAHIgKgTQAJgGALgEQAKgDALAAQAUAAAKALQAKALAAAXIAAA3IgYAAIgCgKIAAAAQgHAGgHADQgIADgIABQgIgBgHgDgAmQAMQgGAEAAAFQAAAFADADQADACAGAAQAFAAADgCIAHgHIAAgRQgPACgGAFgAoTAuQgOgIgIgOQgIgPAAgVQgBgWAJgPQAJgPAPgIQAOgIARAAQAOAAALAFQAKAFAHAHIgRASQgEgFgGgCQgGgDgIAAQgKAAgIAFQgHAFgFAJQgEAKgBANQAAATAKALQAJALASAAIAIgBQAEgBACgCIAAgWIgVAAIAAgXIAwAAIAAA7QgIAGgLAFQgMAEgNABQgSAAgPgIgAIVAzIAAg5QAAgKgDgEQgDgFgGABQgGAAgEACQgEADgFAEIAABCIgdAAIAAhiIAYAAIACANIAAAAQAHgHAIgEQAIgEAKAAQAPAAAIAKQAHALAAATIAAA8gAE3AzIAAhiIAdAAIAABigAgFAzIAAiBIAkAAQAUAAAPAHQAPAHAHAOQAJAOgBAWQABAWgJAOQgHAPgOAHQgPAHgTAAgAAYAbIAGAAQALABAIgEQAIgFAEgJQAGgJAAgPQAAgPgGgJQgEgJgIgEQgIgDgLAAIgGAAgAjPAzIAAg5QAAgKgDgEQgCgFgHABQgDAAgFACQgEACgFAFIAABCIgdAAIAAg5QAAgKgDgEQgDgFgGABQgEAAgEACQgEACgFAFIAABCIgeAAIAAhiIAYAAIACANIABAAQAGgGAIgFQAGgEALAAQAKAAAHAEQAGAEAEAIQAGgHAHgEQAIgFAKAAQAQAAAIAKQAHALAAATIAAA8gAE5hCQgEgEAAgHQAAgHAEgEQAFgEAIAAQAHAAAFAEQAFAEAAAHQAAAHgFAEQgFAEgHAAQgIAAgFgEg");
	this.shape.setTransform(104,37.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(85));

	// Layer 12
	this.instance = new lib.TextAnimShort("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(78.5,189.4,1,1,0,0,0,29.9,7.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(72).to({_off:false},0).wait(13));

	// Layer 11
	this.instance_1 = new lib.TextAnim("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(178.1,173,1,1,0,0,0,129.5,7.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(63).to({_off:false},0).wait(22));

	// Layer 10
	this.instance_2 = new lib.TextAnim("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(178.1,156.8,1,1,0,0,0,129.5,7.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({_off:false},0).wait(31));

	// Layer 9
	this.instance_3 = new lib.TextAnim("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(178.1,140.5,1,1,0,0,0,129.5,7.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(45).to({_off:false},0).wait(40));

	// Layer 8
	this.instance_4 = new lib.TextAnim("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(178.1,124.3,1,1,0,0,0,129.5,7.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(36).to({_off:false},0).wait(49));

	// Layer 7
	this.instance_5 = new lib.TextAnim("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(178.1,108,1,1,0,0,0,129.5,7.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(27).to({_off:false},0).wait(58));

	// Layer 6
	this.instance_6 = new lib.TextAnim("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(178.1,91.8,1,1,0,0,0,129.5,7.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).wait(67));

	// Layer 5
	this.instance_7 = new lib.TextAnim("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(178.1,75.5,1,1,0,0,0,129.5,7.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({_off:false},0).wait(76));

	// Text
	this.instance_8 = new lib.TextAnim("synched",0,false);
	this.instance_8.parent = this;
	this.instance_8.setTransform(178.1,59.3,1,1,0,0,0,129.5,7.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(85));

	// Layer 1
	this.instance_9 = new lib.Notebook_mc();
	this.instance_9.parent = this;
	this.instance_9.setTransform(94,125,1,1,0,0,0,94,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,188,250);


(lib.GamePad2Anim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Gamepad2_mc();
	this.instance.parent = this;
	this.instance.setTransform(101.7,77.1,1,1,-37.2,0,0,91,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:91.1,regY:46,rotation:-13.5,x:101.8,y:77},4).to({regX:91,regY:46.1,rotation:-37.2,x:101.7,y:77.1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.4,-14.6,200.6,183.3);


(lib.GameAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxpKKIAA0TMAjTAAAIAAUTg");
	mask.setTransform(113,65);

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.498)").s().p("A1ZPAIAA9/MAqzAAAIAAd/g");
	this.shape.setTransform(118.7,72.9);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(99).to({_off:false},0).to({_off:true},3).wait(1).to({_off:false},0).to({_off:true},3).wait(1).to({_off:false},0).to({_off:true},3).wait(1).to({_off:false},0).to({_off:true},3).wait(1));

	// Layer 5
	this.instance = new lib.SpikePlatform_mc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(610.9,60.3,1,1,0,0,0,26.3,9.8);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({x:72.7},80).wait(21));

	// Layer 4
	this.instance_1 = new lib.Platform_mc("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(448.3,94.8,1,1,0,0,0,26.3,5.2);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({x:-89.9},80).wait(21));

	// Layer 3
	this.instance_2 = new lib.Platform_mc("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(285.6,45.2,1,1,0,0,0,26.3,5.2);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({x:-252.5},80).wait(21));

	// Player
	this.instance_3 = new lib.FakePlayer_mc("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(65.3,112.6,1,1,0,0,0,7,7);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({startPosition:0},0).wait(16).to({startPosition:0},0).to({y:2.6},9).to({y:33.1},5).wait(5).to({startPosition:0},0).to({y:-16.9},11).to({y:83.1},10).wait(5).to({startPosition:0},0).to({y:3.1},12).to({y:43.1},7).wait(21));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AxpA0IAAhnMAjTAAAIAABng");
	this.shape_1.setTransform(113,124.8);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(115));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,105.6,226,24.5);


(lib.CodeAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AATBBIgYgvIgQAAIAAAvIgeAAIAAiBIAvAAQANAAAMADQALAEAHAJQAGAJAAAQQABAOgHAJQgGAIgKAFIAdA0gAgVgEIAPAAQALAAAFgFQAHgFgBgJQABgKgHgEQgFgEgLAAIgPAAg");
	this.shape.setTransform(5.2,118.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AAXA3QgIgKAAgSIAAg9IAeAAIAAA4QAAALADAEQADAFAGgBQAFAAAFgCIAIgJIAAhAIAdAAIAABiIgXAAIgDgOIgBAAQgFAIgIAEQgHAEgKAAQgQAAgIgLgAggBAIgagvIgQAAIAAAvIgeAAIAAiCIAvAAQAOAAAMAEQALAEAHAJQAHAJAAAPQAAAOgHAKQgFAIgLAFIAdA0gAhKgGIAQAAQALAAAGgEQAGgFAAgKQAAgJgGgEQgGgEgLAAIgQAAg");
	this.shape_1.setTransform(10.5,118.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AghA3QgIgKAAgSIAAg9IAdAAIAAA4QAAALADAEQAEAFAFgBQAFAAAEgCIAIgJIAAhAIAeAAIAABiIgYAAIgCgOIgBAAQgGAIgIAEQgGAEgKAAQgQAAgHgLgACEBAIAAg6QAAgKgCgDQgEgFgFAAQgGAAgEADQgEADgFAEIAABCIgdAAIAAhiIAXAAIACAMIABAAQAHgGAHgEQAIgFAKABQAQAAAIAKQAHALAAARIAAA+gAhaBAIgZgvIgQAAIAAAvIgeAAIAAiCIAvAAQAOAAAMAEQALAEAHAJQAGAJAAAPQABAOgHAKQgGAIgKAFIAdA0gAiDgGIAPAAQAMAAAFgEQAHgFgBgKQABgJgHgEQgFgEgMAAIgPAAg");
	this.shape_2.setTransform(16.2,118.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("ACgAxQgHgXAAgaQAAgZAHgWQAHgXAMgVIATAIQgMAUgFAVQgEAWAAAUQAAAVAEAWQAFAVAMAUIgTAHQgMgUgHgWgAhFAvQgIgLAAgSIAAg9IAeAAIAAA5QAAAKADAEQADAFAGAAQAFAAAFgCIAIgJIAAhBIAcAAIAABiIgWAAIgDgNIgBAAQgFAHgIAEQgHAFgKAAQgRAAgHgLgABhA3IAAg5QAAgKgDgEQgDgEgGAAQgGAAgEACQgEADgFAEIAABCIgdAAIAAhiIAYAAIACANIABAAQAGgGAIgEQAIgFAKAAQAPAAAIAKQAHALAAATIAAA8gAh9A3IgagvIgQAAIAAAvIgeAAIAAiBIAvAAQAOAAAMADQALAFAHAJQAHAIAAAQQAAAOgHAJQgFAJgLAFIAeAzgAingOIAPAAQAMAAAGgFQAGgFAAgJQAAgKgGgEQgGgDgMAAIgPAAg");
	this.shape_3.setTransform(19.8,119.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AC5BUQALgUAFgVQAFgWAAgVQAAgUgFgWQgFgVgLgUIASgIQANAVAHAXQAHAWAAAZQAAAagHAXQgHAWgNAUgACAAxQgHgXAAgaQAAgZAHgWQAGgXANgVIASAIQgLAUgFAVQgFAWAAAUQAAAVAFAWQAFAVALAUIgSAHQgNgUgGgWgAhlAvQgIgLAAgSIAAg9IAeAAIAAA5QAAAKADAEQADAFAGAAQAFAAAEgCIAJgJIAAhBIAdAAIAABiIgYAAIgCgNIgBAAQgGAHgHAEQgIAFgKAAQgQAAgHgLgABBA3IAAg5QAAgKgDgEQgDgEgGAAQgGAAgEACQgEADgFAEIAABCIgdAAIAAhiIAYAAIACANIAAAAQAHgGAIgEQAHgFAKAAQAQAAAIAKQAHALAAATIAAA8gAieA3IgZgvIgQAAIAAAvIgeAAIAAiBIAvAAQAOAAAMADQALAFAHAJQAHAIAAAQQAAAOgHAJQgGAJgKAFIAdAzgAjHgOIAPAAQAMAAAGgFQAGgFAAgJQAAgKgGgEQgGgDgMAAIgPAAg");
	this.shape_4.setTransform(23,119.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("ADdBNQAKgEAHgGQAFgHAAgHIgBAAIgBAAQgHAAgEgFQgGgEAAgIQAAgIAGgEQAFgEAHgBQAKABAGAHQAEAHAAANQAAARgJALQgIAMgTAGgACYBSQALgTAFgWQAGgVgBgUQABgWgGgWQgFgVgLgUIASgHQANAVAHAWQAHAWAAAbQAAAZgHAWQgHAWgNAVgABfAvQgHgWAAgZQAAgbAHgWQAHgWAMgVIATAHQgMAUgFAVQgEAWAAAWQAAAUAEAVQAFAWAMATIgTAIQgMgVgHgWgAiGAtQgIgKAAgSIAAg9IAeAAIAAA4QAAALADAEQADAFAGgBQAFAAAFgCIAIgJIAAhAIAdAAIAABiIgXAAIgDgOIgBAAQgFAIgIAEQgHAEgKAAQgRAAgHgLgAAgA2IAAg5QAAgLgDgDQgDgFgGAAQgGAAgEADQgEADgFAEIAABCIgcAAIAAhiIAYAAIACAMIABAAQAFgGAIgEQAIgFAKABQAPAAAIAKQAHALAAASIAAA9gAi+A2IgagvIgQAAIAAAvIgeAAIAAiCIAvAAQAOAAAMAEQALAEAHAJQAHAJAAAPQAAAOgHAKQgFAJgLAEIAeA0gAjogQIAPAAQAMAAAGgEQAGgFAAgKQAAgJgGgEQgGgEgMAAIgPAAgADlgNQgFgFgBgIQABgIAFgFQAFgFAHAAQAJAAAEAFQAFAFABAIQgBAIgFAFQgEAGgJgBQgHABgFgGg");
	this.shape_5.setTransform(26.3,119.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},59).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_2}]},4).to({state:[{t:this.shape_3}]},4).to({state:[{t:this.shape_4}]},4).to({state:[{t:this.shape_5}]},4).wait(11));

	// Layer 7
	this.instance = new lib.TextAnimShort("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(29.9,96.9,1,1,0,0,0,29.9,7.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({_off:false},0).wait(45));

	// Layer 6
	this.instance_1 = new lib.TextAnim("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(159.5,82.8,1,1,0,0,0,129.5,7.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36).to({_off:false},0).wait(54));

	// Layer 5
	this.instance_2 = new lib.TextAnim("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(159.5,68.8,1,1,0,0,0,129.5,7.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(27).to({_off:false},0).wait(63));

	// Layer 4
	this.instance_3 = new lib.TextAnim("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(159.5,54.8,1,1,0,0,0,129.5,7.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).wait(72));

	// Layer 3
	this.instance_4 = new lib.TextAnim("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(159.5,40.8,1,1,0,0,0,129.5,7.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(81));

	// Layer 2
	this.instance_5 = new lib.TextAnim("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(129.5,26.8,1,1,0,0,0,129.5,7.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(90));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("ACWBBQgLgGgHgMQgGgLgBgRQABgQAGgLQAHgLALgGQAKgHAMAAQAOAAAKAHQAJAGAFAKQAEAKAAAOIAAAHIgBAFIg7AAQACALAHAGQAHAFAKAAQAFAAAFgCIALgFIAKASQgIAFgJADQgJADgJAAQgPAAgLgGgAChgFQgGAFgBAJIAjAAQABgJgEgEQgEgFgJAAQgHAAgFAEgAAXA5QgLgNAAgZQAAgQAGgLQAFgLAKgHQAJgGALAAQAIAAAGADQAFADAFAFIgBgQIAAghIAdAAIAACLIgYAAIgCgKIAAAAQgGAFgHAEQgHADgHAAQgTAAgKgOgAAvgBQgFAGAAAOQAAAOAEAHQAFAHAJAAQAEAAAEgCQAEgCAEgFIAAgnQgEgEgEgBIgIgCQgIAAgFAHgAhKBBQgLgGgHgMQgHgLAAgRQAAgQAHgLQAHgMALgGQALgGAMAAQANAAALAGQALAGAHAMQAGALABAQQgBARgGALQgHAMgLAGQgLAGgNAAQgMAAgLgGgAhAAAQgFAGAAANQAAANAFAIQAEAHAJAAQAJAAAFgHQAFgIAAgNQAAgNgFgGQgFgIgJAAQgJAAgEAIgAi3A/QgOgHgIgPQgIgPAAgWQAAgUAIgQQAJgPAOgIQAOgIARAAQAMAAAKAFQAKAFAHAHIgRASQgFgEgFgDQgFgDgHAAQgJAAgHAGQgHAEgFAKQgEAJAAAMQAAAVAJALQAIALAPAAQAIAAAGgDQAGgEAEgFIAQASQgIAJgKAFQgLAFgMAAQgRAAgOgIg");
	this.shape_6.setTransform(21.4,7.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.9,28.8);


(lib.Page_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Code
	this.instance = new lib.CodeAnim_mc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(172.2,104.6,1,1,0,0,0,118.4,67.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).wait(89).to({startPosition:89},0).to({regY:67,scaleX:0.49,scaleY:0.49,y:104.5,alpha:0,startPosition:9},10).to({_off:true},1).wait(124));

	// Game
	this.instance_1 = new lib.GameAnim_mc("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(170.1,103.2,0.443,0.443,0,0,0,113.7,60);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(158).to({_off:false},0).to({regX:113.8,scaleX:1,scaleY:1,x:170.2,y:103.1,alpha:1,startPosition:11},11).wait(103).to({startPosition:114},0).to({regX:113.7,scaleX:0.44,scaleY:0.44,x:170.1,y:103.2,alpha:0,startPosition:11},10).wait(1));

	// NoteBook
	this.instance_2 = new lib.NotebookAnim_mc("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-57.1,204.1,1,1,-15,0,0,93.9,125.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(283));

	// GamePad
	this.instance_3 = new lib.Gamepad2_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(344.1,246.1,1,1,-22.2,0,0,91,46);

	this.instance_4 = new lib.GamePad2Anim_mc("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(344,246.1,1,1,0,0,0,101.6,77);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},174).wait(109));

	// Cable
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(5,2,1).p("AknHNQgpghgsgzQhYhogMhcQgQh3Blg9QByhFEAANQEWAOBvgvQB4gzAAiVQAAiAh3goQglgMgtgDIglABQABAAmmAAIgRAA");
	this.shape.setTransform(359.8,171.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(283));

	// Anim
	this.instance_5 = new lib.Computer_mc();
	this.instance_5.parent = this;
	this.instance_5.setTransform(169.3,145.9,0.6,0.6,0,0,0,281.9,243);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(283));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180.2,0,625.8,349.1);


// stage content:
(lib.InteractiveResume = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 1
	this.instance = new lib.Page_6_mc();
	this.instance.parent = this;
	this.instance.setTransform(500,175,1,1.003,0,0,0,132.7,174.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(687.1,175,625.9,350);
// library properties:
lib.properties = {
	width: 1000,
	height: 350,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Page_6_atlas_.png?1525749513247", id:"Page_6_atlas_"}
	],
	preloads: []
};




})(lib_page6 = lib_page6||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib_page6, images, createjs, ss, AdobeAn;