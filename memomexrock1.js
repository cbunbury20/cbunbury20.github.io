(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"memomexrock1_atlas_", frames: [[410,0,181,228],[593,0,181,228],[227,0,181,228],[959,0,30,40],[776,0,181,228],[0,0,225,225],[0,227,181,228],[183,230,181,228],[732,657,160,200],[366,230,181,228],[549,230,181,228],[183,460,181,228],[732,460,194,195],[915,230,100,100],[366,460,181,228],[732,230,181,228],[0,457,181,228],[549,460,181,225]]}
];


// symbols:



(lib.aqualung = function() {
	this.spriteSheet = ss["memomexrock1_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.axel = function() {
	this.spriteSheet = ss["memomexrock1_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bono = function() {
	this.spriteSheet = ss["memomexrock1_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.calaverita = function() {
	this.spriteSheet = ss["memomexrock1_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.clapton = function() {
	this.spriteSheet = ss["memomexrock1_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.fondo = function() {
	this.spriteSheet = ss["memomexrock1_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.gilmore = function() {
	this.spriteSheet = ss["memomexrock1_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.heatfield = function() {
	this.spriteSheet = ss["memomexrock1_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hojita = function() {
	this.spriteSheet = ss["memomexrock1_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.jagger = function() {
	this.spriteSheet = ss["memomexrock1_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.kieds = function() {
	this.spriteSheet = ss["memomexrock1_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.kurt = function() {
	this.spriteSheet = ss["memomexrock1_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.logomzt = function() {
	this.spriteSheet = ss["memomexrock1_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.LOGONEW = function() {
	this.spriteSheet = ss["memomexrock1_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.morrison = function() {
	this.spriteSheet = ss["memomexrock1_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.ozzy = function() {
	this.spriteSheet = ss["memomexrock1_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.plant = function() {
	this.spriteSheet = ss["memomexrock1_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.rockcard = function() {
	this.spriteSheet = ss["memomexrock1_atlas_"];
	this.gotoAndStop(17);
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


(lib.x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Capa 1
	this.instance = new lib.calaverita();
	this.instance.parent = this;
	this.instance.setTransform(6,1,0.71,0.71);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABbBdQgmAng1AAQg0AAgmgnQglgmAAg3QAAg2AlgnQAmgmA0AAQA1AAAmAmQAlAnAAA2QAAA3glAmg");
	this.shape.setTransform(17,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AhaBdQglgmAAg3QAAg2AlgnQAmgmA0AAQA1AAAlAmQAmAnAAA2QAAA3gmAmQglAng1AAQg0AAgmgngAhFhPQgaAUAAAcQAAAcAaATQAZAUAlAAQAkAAAZgUQAagTAAgcQAAgcgagUQgZgUgkAAQglAAgZAUg");
	this.shape_1.setTransform(17,14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#990000").ss(2,1,1).p("AhIhsQAfgXApAAQA1AAAmAmQAAABABABABvhCQARAeAAAkQAAATgEAQABkBTQgEAFgFAFQgmAng1AAQgwAAgkghAhyA8QgNgbAAghQAAgqAXgi");
	this.shape_2.setTransform(17,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AieCXQgGgKAEgUQAJgjAmgwIADgFQAeglAkgeQgmgggWgfQgRgagHgYIAUgDIAkAVQA1AfAfAVQApgZAngLIARgEIAGAFQAGAEAAAMIgKAIIg1AsQAjAbAfAeQAVAUASAWQgEAMgFAEQgHAGgOAAQgDAAgegQIgFgDQgrgXgngaIgLgIIgkAgIgyAsQg6A4gEASg");
	this.shape_3.setTransform(17,17.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhUBjIAxgtIAlgfIALAIQAnAaArAXIAFADIgKAKQglAng1AAQgwAAgkghgAh/AAQAAgqAXghQAWAfAmAgQgkAdgeAmIgDAFQgOgbAAghgAA6gWIA1gsQARAeAAAkQAAASgEARQgfgfgjgagAhIhsQAfgXApAAQA1AAAlAnIACABQgnALgpAZQgfgVg1ggg");
	this.shape_4.setTransform(17,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.2,0.3,27.6,29.1);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgQCiQgGgEgDAAQgCAAgCAFQgEAHgMAAQgFAAgBgBQgCgCgCgGIgKhFIgCgOQAAgFALAAQAPAAACADQADAEAFAOQASAyARAAQAIAAADgFQAFgFAAgHQgBgNgIgSIgXgnQggg1gNgdQgOggAAggQAAgkAQgXQAQgVAYAAQAPAAAWAOIAHgJQAEgFAGAAIALABQACACABAHIAMBGIABAGQAAAEgCABQgDACgJgBQgLAAgCgCQgDgDgKgUQgSgpgNAAQgKAAAAAOQAAATAdAzQAkA8ALAbQALAbAAAiQAAAngTAVQgSAVgYAAQgNAAgOgIg");
	this.shape.setTransform(198.9,51.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AhKClQgEABgCgDQgBgCgBgMQAAgGAIgEQALgFAAgIIAAj/QAAgEgJgDQgGgDgCgDQgBgCAAgJQAAgJABgBQACgCAGAAICCAAQAEAAADACQACACABAGIALA1IAAAFQAAAGgJAAQgMAAgDgDQgEgCgDgKQgHgTgEgHQgFgIgGAAIgNAAIAAB2IANAAQAHAAACgDQACgCACgIQACgPACgCQACgDADAAQAQAAADABQABABAAAJIAABDQAAAHgBACQgCACgMAAQgHAAgCgDQgCgCgCgMQgDgMgCgCQgCgCgEAAIgQAAIAACNIAKAAQAKAAAFgGQADgFAJgbQADgMAEgDQADgEAJAAQAOAAAAAJIgCAHIgHAuQgCANgCADQgBADgHgBg");
	this.shape_1.setTransform(182.2,51.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AAQClQgGABAAgLIAAgMQABgEAHgDQAIgDAAgIIAAisIgkCKIgXAAIgkiGIAACoQAAAHAHAEQAJAFAAAMQAAANgJgBIgsAAQgIAAAAgMQAAgJAGgFIAGgFQACgDAAgGIAAjsQAAgKgCgFQgCgFgGgDQgGgEAAgEIAAgIQABgKABgCQABgDAEAAIBMAAIAhB/IAgh/IBJAAQAHAAADADQACACAAAJQAAAHgCAEQgBADgGADQgGADgBACQgBADAAAGIAADzIABAIQABACAGADQAHAEAAAGQAAAQgBACQgBACgGgBg");
	this.shape_2.setTransform(161.4,51.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AAAClQgEABAAgJQAAgJABgDQABgCAEgEQAHgEAAgHQAAgHgEgbIgyAAIgDATIAAADQgCAFAAAFQAAAIAJAEQAGADABADQABADAAAHQAAAIgBACQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAIg2AAQgFAAAAgJQAAgLAHgHQAHgHABgGIAmjxIABgJQAAgHgJgFQgEgDAAgIQAAgLACgDQABgDAFAAIBNAAQAIABACAGQADAHADAXIADARIAhDgQADARAJAIIAEAFQABAAAAAIQAAAKgCACQgBADgFgBgAgqBHIAtAAIgWifg");
	this.shape_3.setTransform(138.8,51.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("ABHCqQgDgCgFgEQgOgOgNgEQgSAYgbAAQgqAAgbgyQgagxAAhEQAAhNAegvQAegwApAAQATAAAQAKQAFAEADgBQADAAACgGQADgHAGAAIADAAIAGABQAHAAABAJIAOBBIABAOQAAAGgKAAQgLAAgDgDQgDgCgJgTQgMgZgKgJQgJgLgLABQgbAAAAAsIAADbQAAAZAQAAQAPAAAAgZIAAhrQAAgKgHgDQgHgCAAgLQAAgKACgCQABgDAHAAIBXAAQAGAAADADQABABAAAJIAAALQgCADgGABQgGADgBAIIAACMQAAAMgCADQgBADgHAAIgJAAg");
	this.shape_4.setTransform(117.8,51.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgQCiQgGgEgDABQgDAAgBADQgDAIgNAAQgFAAgBgBQgCgCgBgGIgKhFIgDgNQAAgHALAAQAPAAACAFQADADAFAOQASAyARAAQAHAAAFgFQADgFAAgIQABgMgKgSIgWgoQggg0gOgeQgNgeAAghQAAglAQgVQAQgWAXAAQAQAAAWAPIAHgKQAEgFAGAAIALABQADACABAHIAKBFIABAHQAAAEgBABQgDABgJAAQgLAAgDgDQgDgCgIgTQgTgqgNAAQgKAAAAAPQAAASAdAzQAkA8ALAbQALAbAAAiQAAAngTAVQgTAVgXAAQgOAAgNgIg");
	this.shape_5.setTransform(189.3,-0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AhhCmQgHAAAAgOQAAgKABgCQABgCAGgCIAGgDQACgDAAgFIAAj2QAAgJgLgGQgGgCAAgHIAAgJQAAgHABgCQACgBAFAAIBoAAQAtAAAbAcQAbAeAAAzQAAAdgIAXQgIAVgNAKQgNALgQAHQgRAGgSABIgZAAIAABEQAAAMAKADQAEACACAEQACADAAAIQAAAJgCABQgCACgGABgAgMAdIANAAQAIAAAGgIQAFgIAAgSIAAhnQAAghgWgBIgKAAg");
	this.shape_6.setTransform(169.9,-0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AhhCmQgHAAAAgOQAAgKABgCQABgCAGgCIAGgDQACgDAAgFIAAj2QAAgJgLgGQgGgCAAgHIAAgJQAAgHABgCQACgBAFAAIBoAAQAtAAAbAcQAbAeAAAzQAAAdgIAXQgIAVgNAKQgNALgQAHQgRAGgSABIgZAAIAABEQAAAMAKADQAEACACAEQACADAAAIQAAAJgCABQgCACgGABgAgMAdIANAAQAIAAAGgIQAFgIAAgSIAAhnQAAghgWgBIgKAAg");
	this.shape_7.setTransform(147.1,-0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AAACmQgEgBAAgHQAAgKABgDQABgCAEgDQAHgFAAgHQAAgHgEgaIgyAAIgDATIAAACQgCAFAAAFQAAAHAJAGQAGACABADQABADAAAGQAAAJgBACQAAAAAAABQgBAAAAAAQgBAAgBAAQAAABgBAAIg2AAQgFAAAAgKQAAgLAHgHQAHgGABgIIAmjwIABgKQAAgGgJgFQgEgCAAgJQAAgLACgDQABgDAFABIBNAAQAIgBACAIQADAGADAXIADARIAhDhQADAQAJAJIAEAEQABAAAAAIQAAAKgCACQgBADgFAAgAgqBHIAtAAIgWifg");
	this.shape_8.setTransform(125.7,-0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AgRCiQgFgEgDAAQgCAAgCAFQgDAHgNAAQgFAAgCgBQgCgCgBgGIgJhFIgCgOQAAgFAKAAQAPAAADADQADAEAEAOQASAyASAAQAGAAAEgFQAEgFAAgHQAAgNgJgSIgVgnQghg1gNgdQgOggAAggQAAgkAQgXQAQgVAXAAQAQAAAWAOIAHgJQAEgFAGAAIAMABQABACABAHIALBGIACAGQgBAEgCABQgCACgJgBQgKAAgDgCQgEgDgJgUQgRgpgOAAQgKAAAAAOQAAATAeAzQAjA8ALAbQALAbAAAiQAAAngTAVQgTAVgXAAQgOAAgOgIg");
	this.shape_9.setTransform(222.1,51.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgdCaQgTgQgOgoQgOgnAAg+QAAg6AMgjQALgjATgTQASgTAYAAQAOAAALAIQAEADACAAQADAAAEgGQAEgFADAAIALAAQAEAAACADQACADAAAMIAFBBIAAAFQAAAGgCAEQgDACgHAAQgJABgEgGQgDgEgDgSQgJgsgPgBQgNABAAAgIAADlQAAAYANAAQASAAACgnQAAgLAEgEQAEgFALAAQAJAAADAEQADADAAAJQAAAegRATQgSATgaAAQgYAAgUgQg");
	this.shape_10.setTransform(206,51.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AgzClQgFABAAgFQAAgPABgDQABgDAGgCQALgEAAgIIAAjyQAAgJgCgEQgCgEgHgDIgGgFQgCgBAAgGIAAgKQAAgHAHAAIBhAAQAGAAACACQABABAAAIQAAAKgBADQgBADgEAAQgNADAAANIAAD2QAAAIAKAEQAGADABADIABAHIAAAIQAAAHgBAAQgBABgGAAg");
	this.shape_11.setTransform(191.1,51.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AAKClQgEABgCgCQgBgCAAgOQABgGAFgEQAHgFgBgFIAAiAIgfAAIAACBQgBAGAGAEQAFAFABAIQgBAKgBACQgBACgEgBIhaAAQgEAAgBgCQgBgBAAgNQAAgGABgBQABgDAEgCQAJgFAAgHIAAj3QAAgGgIgFQgHgGAAgLQAAgKACgCQABgDAHAAIBUAAQAFABACACQACABAAAIIAAAJQgBAEgEADQgHADABAJIAABmIAfAAIAAhmIgBgIIgEgDQgFgDAAgJQAAgMABgCQABgDAFAAIBZAAQAGAAABADQABACAAALQAAAIgBABIgIAFQgIAEAAAJIAAD0QAAAKAJAFQAHAFAAAEIAAAMQAAAFgCABQgBABgFAAg");
	this.shape_12.setTransform(173.4,51.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AhhClQgHABAAgNQAAgLABgCQABgCAGgCIAGgDQACgDAAgEIAAj3QAAgJgLgFQgGgEAAgGIAAgJQAAgHABgBQACgCAFgBIBoAAQAtABAbAdQAbAcAAA0QAAAdgIAWQgIAWgNAKQgNALgQAHQgRAHgSAAIgZAAIAABEQAAAMAKADQAEACACAEQACADAAAJQAAAHgCACQgCACgGAAgAgMAdIANAAQAIAAAGgIQAFgIAAgSIAAhmQAAgjgWAAIgKAAg");
	this.shape_13.setTransform(150.2,51.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AArClQgKABgGgMQgHgLABgQIAAhTQAAgYgYAAIgJAAIAABlIAAAKQACADAEACQAGAEgBAIQAAAMgCADQgCADgGgBIhWAAQgIAAABgKIAAgNQAAgEAEgBQAMgEgBgNIAAjwQAAgNgKgDQgEgBgBgCQgCgBAAgJQAAgQAJAAIBwAAQAiAAAbAaQAaAaAAAqQAAA9g+ASQA5ANAAA7IAAAwQAAAGAFAEQAFADAAAIQAAAMgCACQgBADgGgBgAgMgDIAMAAQAUAAABgoIAAhCQAAgSgHgHQgGgHgNAAIgHAAg");
	this.shape_14.setTransform(107.5,51.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("ABHCqQgDgCgFgEQgOgOgNgEQgSAYgaAAQgrAAgbgyQgagxgBhEQAAhNAfgvQAegwAqAAQASAAAPAKQAGAEACgBQAEAAACgGQADgHAGAAIACAAIAHABQAHAAACAJIAMBBIADAOQAAAGgLAAQgLAAgDgDQgDgCgKgTQgLgZgKgJQgJgLgLABQgbAAAAAsIAADbQAAAZAPAAQAQAAAAgZIAAhrQAAgKgHgDQgHgCAAgLQAAgKACgCQACgDAGAAIBXAAQAGAAACADQADABAAAJIgBALQgCADgFABQgIADAAAIIAACMQAAAMgBADQgCADgHAAIgJAAg");
	this.shape_15.setTransform(85,51.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AAoCmIhQi7IAACQQAAAIALAFQAIAEAAAHIAAARQgBACgGAAIg2AAQgEgBgBgDQgBgDAAgNQAAgFAFgCQALgFAAgGIAAjyQAAgIgCgFQgBgEgGgDQgFgDgCgCQgCgDAAgIQAAgOAIAAIA5AAIBECgIAAh3QAAgJgKgEQgGgDgCgEQgCgDAAgJQAAgHABgBQACgCADABIA5AAQAFAAAAANQAAAHgBACQgBACgEACQgHADgCACQgBAEAAAEIAAEjg");
	this.shape_16.setTransform(202.7,-0.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AhKB7QgbgvAAhLQAAhLAbgwQAcgvAuAAQAeAAAXAUQAWAVANAlQAOAlAAA5QAABHgbAwQgbAwgwAAQgvAAgbgvgAgLiMQgFAHAAAJIAAD3QAAAMAFAHQAFAGAGAAQAHAAAFgHQAEgHAAgJIAAj1QAAgagQAAQgGAAgFAGg");
	this.shape_17.setTransform(181.5,-0.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AgzCmQgFAAAAgFQAAgPABgDQABgEAGgBQALgEAAgIIAAjzQAAgIgCgEQgCgEgHgDIgGgFQgCgCAAgEIAAgLQAAgGAHAAIBhAAQAGgBACACQABACAAAHQAAALgBACQgBADgEABQgNACAAAOIAAD1QAAAIAKAEQAGAEABACIABAIIAAAIQAAAGgBAAQgBACgGAAg");
	this.shape_18.setTransform(164.2,-0.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AgsCmQgGgBgBgCQgCgCAAgJQAAgMAHgCQAGgCACgDQABgDAAgFIAAkLIgJAAQgFABgDAFQgDAGgDAbQgBAMgDADQgDADgJAAQgJAAgDgCQgCgDAAgGIAAgHIACgwQABgJACgCQADgDAJABICWAAQAHgBABACIACAMIAEAqIAAAKQAAAGgBAEQgCADgIAAQgLAAgCgCQgEgCgBgLQgEgSgEgLQgDgMgGAAIgGAAIAAEHQAAALAJAEQAFACABADQABADAAAHQAAALgCACQgBACgHAAg");
	this.shape_19.setTransform(148.1,-0.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AhKB7QgbgvAAhLQAAhLAbgwQAcgvAuAAQAeAAAXAUQAWAVANAlQAOAlAAA5QAABHgbAwQgbAwgwAAQgvAAgbgvgAgLiMQgFAHAAAJIAAD3QAAAMAFAHQAFAGAGAAQAHAAAFgHQAEgHAAgJIAAj1QAAgagQAAQgGAAgFAGg");
	this.shape_20.setTransform(126.9,-0.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AAQCmQgGAAAAgLIAAgMQABgEAHgDQAIgDAAgIIAAisIgkCKIgXAAIgkiGIAACnQAAAJAHADQAJAFAAALQAAAOgJAAIgsAAQgIAAAAgNQAAgJAGgEIAGgHQACgCAAgGIAAjsQAAgKgCgFQgCgGgGgDQgGgDAAgEIAAgIIACgMQABgDAEABIBMAAIAhB+IAgh+IBJAAQAHgBADADQACACAAAIQAAAJgCADQgBADgGADQgGADgBACQgBADAAAHIAADyIABAIQABACAGADQAHADAAAHQAAAQgBACQgBACgGAAg");
	this.shape_21.setTransform(103.5,-0.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgJCGQgHgEgDAAQgDAAAAAEQgBAGgCACQgBABgJAAQgHAAgCgCQgCgCgBgGIgKg4IgBgGQAAgFAOgBQAHABADACQADABAEAJQAQAiANAAQAJAAAAgMQAAgJgGgPQgGgPgUghQgVgigJgXQgKgZAAgYQAAggAOgQQAOgQAUAAQAKAAANAHQAHAEACAAQADAAABgFQABgEACgBQADgBAIAAQAFAAABABQACABABAFIALA5IABAFQAAAGgLAAQgIAAgDgCQgDgCgFgIQgFgKgKgMQgKgNgHAAQgDAAgCADQgDACAAAEQAAALAdAxQAaAqAJAXQAKAZAAAeQAAAggOASQgOASgTAAQgMAAgMgJg");
	this.shape_22.setTransform(195,53.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AgvB9QgUgQgLgeQgLgcAAgyQAAhGAZglQAZgkAnAAQAmAAAaAiQAaAjAABEQAABIgaAnQgaAlgmAAQgcAAgTgSgAgPhVIAACqQAAAeAPAAQAPAAAAgeIAAiwQAAgZgPAAQgPAAAAAfg");
	this.shape_23.setTransform(177.8,53.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AgJCGQgHgEgDAAQgDAAAAAEQgBAGgCACQgBABgJAAQgHAAgCgCQgCgCgBgGIgKg4IgBgGQAAgFAOgBQAHABADACQADABAEAJQAQAiANAAQAJAAAAgMQAAgJgGgPQgGgPgUghQgVgigJgXQgKgZAAgYQAAggAOgQQAOgQAUAAQAKAAANAHQAHAEACAAQADAAABgFQABgEACgBQADgBAIAAQAFAAABABQACABABAFIALA5IABAFQAAAGgLAAQgIAAgDgCQgDgCgFgIQgFgKgKgMQgKgNgHAAQgDAAgCADQgDACAAAEQAAALAdAxQAaAqAJAXQAKAZAAAeQAAAggOASQgOASgTAAQgMAAgMgJg");
	this.shape_24.setTransform(160.9,53.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("Ag5CNQgIAAAAgHIAAgMQAAgFAEgCQAHgDAAgIIAAjNQAAgHgFgDIgGgFQgBgBAAgKQAAgHACgCQACgBAFgBIA4AAQADAAABACQABACAAAJIAAAqQADgFADgNQAIgaAIgGQAHgIAJABQANAAAGALQAGAMAAARQAAAngVAAQgLAAgGgNQgDgHgEAAQgJAAAAAUIAACjQAAAIAHADQAHAEAAAHIAAAKQAAAFgBABQgBABgFAAg");
	this.shape_25.setTransform(146.7,53.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AhGCAQgNgNAAgkIAAi8IgEgCQgFgCgBgCQgBgDAAgGIgBgHQAAgGACgCQABgCAHAAIA/AAQAFABABABQABABAAAGIAADJQAAAaAOAAQALAAAFgJIAAi9QABgIgIgEQgDgBgBgCIAAgQQgBgHAIAAIBCAAQAEAAACABQABACAAAFIAADqQgBAHAGACQAHAEAAAJQAAAMgBACQgBACgGgBIg+AAQgGAAgCgBQgCgDgBgHIAAgFIAAgKQgfAdgXABQgTAAgMgOg");
	this.shape_26.setTransform(128.7,53.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AgJCGQgHgEgDAAQgDAAAAAEQgBAGgCABQgBACgJAAQgHAAgCgCQgCgCgBgGIgKg5IgBgFQAAgFAOAAQAHAAADACQADABAEAJQAQAhANABQAJgBAAgKQAAgKgGgPQgGgOgUgiQgVgigJgYQgKgXAAgYQAAghAOgQQAOgQAUAAQAKAAANAHQAHAEACAAQADAAABgFQABgEACgBQADgBAIAAQAFAAABABQACABABAFIALA6IABAEQAAAGgLAAQgIAAgDgCQgDgCgFgIQgFgKgKgMQgKgNgHAAQgDAAgCADQgDACAAAFQAAAKAdAxQAaAqAJAXQAKAZAAAeQAAAggOASQgOASgTAAQgMAAgMgJg");
	this.shape_27.setTransform(185.4,1.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AgMCRIAAALQAAAIgHAAIhFAAQgEAAAAgFIAAgOQAAgCAEgDQAIgDAAgKIAAkCQAAgKgIgCQgEAAAAgGIAAgKQAAgEABgCQABgBAFAAIBCAAQAHAAAAAHIAAA+QAUgVAWAAQAbAAASAeQASAdAABWQAABSgSAdQgSAdgaAAQgVAAgWgWgAgHhMQgFAFAAAEIAAC4QAAAFAFADQAEADAFAAQAHAAAFgIQAEgHAAgMIAAiaQAAgagOAAQgGAAgFADg");
	this.shape_28.setTransform(168,-0.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("Ag4BsQgbgkAAhGQAAhGAZglQAZglAoAAQAiAAAWAfQAVAfAAA6IAAATIhbAAIAABSQAAASAGAJQAGAJAKAAQAQAAAJgNQAJgOABgWQAAgNACgCQACgDANABQALgBADADQADACAAAJQAAAfgVAaQgUAYgiAAQglAAgcgjgAgHhgIAABDIAbAAIAAhDQAAgUgOAAQgNAAAAAUg");
	this.shape_29.setTransform(148.4,1.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AAiCnQgHAAAAgLIgBgEIgaiQIgZCTQgCAJgBACQgCABgEAAIgkAAQgFAAgDgVIgBgGIgxkIQgCgJgGgEQgHgDAAgGIAAgQQAAgEAHAAIBRAAQADAAACACQACACAAAIIgBALQAAACgEADQgDAEAAAEIABAMIAaCJIAQhYIgKg2QgBgHgHgHQgEgFAAgEIAAgOQgBgGAHAAIBTAAQADAAACACQABACAAAHQAAALgBACIgFAEQgHAEAAADIACANIAXCDIAZiIIABgEQAAgJgLgFQgFgDgBgLIAAgEIAAgCQAAgFAIAAIAuAAQAFAAACACQABABABAGIgBAEIAAAIQgBAEgGAEQgGAEgCAJIgxENQgDAQgCADQgBADgGAAg");
	this.shape_30.setTransform(126,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:138.8}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_3,p:{x:128.8}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:206}},{t:this.shape_9}]},25).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_10,p:{x:110.2}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},29).wait(37));

	// Layer 1
	this.instance = new lib.logomzt();
	this.instance.parent = this;
	this.instance.setTransform(-73,-36,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-36,281.8,126.8);


(lib.inicio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AggCRQgMgPgGgZQgGgXgCgeQgCgeAAgdQAAgYACgaQACgaAGgXQAGgXAMgOQAMgPAUAAQAVAAAMAPQAMAOAGAXQAGAXACAaQACAaAAAYQAAAdgCAeQgCAegGAXQgGAZgMAPQgMAOgVAAQgUAAgMgOgAgLh8QgFANgDAcQgDAdAAAvQAAA2ADAgQADAgAFAOQAFANAGAAQAHAAAFgNQAFgOAEggQADggAAg2QAAgvgDgdQgEgcgFgNQgFgNgHAAIAAAAQgGAAgFANg");
	this.shape.setTransform(73.3,48.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgjCfIgCgBIgBgBIACgCIABgCIAOgMQADgCAAgDIABgHIAAkBIgBgGQAAgEgDgBIgOgNIgBgCIgCgCIABgCIACAAIBHAAIACAAIABACIgCACIgBACIgOANQgDABAAAEIgBAGIAAEBIABAHQAAADADACIAOAMIABACIACACIgBABIgCABg");
	this.shape_1.setTransform(61.5,48.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgaCQQgMgRgGgZQgGgZgCgdQgCgdAAgaIABgkIADgoQADgVAHgRQAGgRALgKQALgKAQAAQAGgBAGADIALAHIAEABIADABIAEgBIAFgEIAFgFIAEgBQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAIABAGIAABlIgBACIgCACIgCgCIgCgDIgFgcQgEgPgFgNQgFgNgHgJQgHgIgJAAQgNAAgFAfQgFAgABBDQAAAvABAdQACAdAEAPQAEAPAFAFQAGAGAHgBQAIAAAGgIQAFgHAEgMIAHgYIAEgVIABgJIABgDIADgBIACABIABADQAAAfgEAXQgFAYgKAMQgLAMgVAAQgSAAgMgPg");
	this.shape_2.setTransform(50.4,48.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgjCfIgCgBIgBgBIACgCIABgCIAOgMQADgCAAgDIABgHIAAkBIgBgGQAAgEgDgBIgOgNIgBgCIgCgCIABgCIACAAIBHAAIACAAIABACIgCACIgBACIgOANQgDABAAAEIgBAGIAAEBIABAHQAAADADACIAOAMIABACIACACIgBABIgCABg");
	this.shape_3.setTransform(39.2,48.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAiCfQgDAAgDgCQgDgDgBgFIg0jnIgBAAIAADTQAAADABAEIADAEIANANIACACQAAAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIgBABIgCABIg8AAIgCgBIgBgBIABgCIACgCIALgMIAEgFIABgHIAAkBIgBgGIgEgFIgLgNIgCgCIgBgDIABgBIACAAIA2AAQABAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIACAGIApC1IABAAIAAieIgBgGIgDgFIgMgNIgDgCQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIABgBIACAAIA8AAIACAAIABABIgBADIgCACIgLANIgDAFIgCAGIAAEbQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgDABg");
	this.shape_4.setTransform(26.6,48.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgjCfIgCgBIgBgBIACgCIABgCIAOgMQADgCAAgDIABgHIAAkBIgBgGQAAgEgDgBIgOgNIgBgCIgCgCIABgCIACAAIBHAAIACAAIABACIgCACIgBACIgOANQgDABAAAEIgBAGIAAEBIABAHQAAADADACIAOAMIABACIACACIgBABIgCABg");
	this.shape_5.setTransform(14,48.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgmCBQgPgNgHgVQgHgWgDgbQgCgaAAgbQAAgVACgXQADgXAHgVQAHgVAPgNQAPgNAXAAQAYAAAPANQAPANAHAVQAHAVADAXQACAXAAAVQAAAbgCAaQgDAbgHAWQgHAVgPANQgPANgYABQgXgBgPgNgAAPBwQAFgMAFgdQADgdAAgwQAAgqgDgaQgFgagFgMQgHgLgIAAQgHAAgGALQgHAMgDAaQgEAaAAAqQAAAwAEAdQADAdAHAMQAGAMAHAAQAIAAAHgMg");
	this.shape_6.setTransform(79.5,47.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgqCPIgCgBIgBgBIACgCIACgCIAQgLIAEgFIABgGIAAjmIgBgGIgEgEIgQgLIgCgCIgCgCIABgBIACgBIBVAAIACABIABABIgBACIgDACIgQALIgEAEIgBAGIAADmIABAGIAEAFIAQALIADACIABACIgBABIgCABg");
	this.shape_7.setTransform(65.4,47.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AggCAQgOgOgHgXQgHgWgCgaQgDgaAAgYIABggQABgSAEgSQADgSAIgPQAIgPANgJQANgKATAAQAHAAAHACQAHACAGAEIAFACIAEAAIAFgBIAFgDIAGgEIAFgCQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABABIABAFIAABaIgBADIgDABIgDgCIgBgDIgHgZQgEgOgGgLQgGgMgJgHQgIgIgKAAQgRAAgGAcQgFAdAAA8QAAApACAaQADAbAEANQAFAOAGAEQAHAFAJAAQAJAAAHgHQAHgIAEgKQAFgLADgKIAFgTIABgJIABgCIAEgBIADABIABADQAAAcgGAVQgFAUgNALQgNAMgYAAQgWgBgPgOg");
	this.shape_8.setTransform(52.2,47.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgqCPIgCgBIgBgBIACgCIACgCIAQgLIAEgFIABgGIAAjmIgBgGIgEgEIgQgLIgCgCIgCgCIABgBIACgBIBVAAIACABIABABIgBACIgDACIgQALIgEAEIgBAGIAADmIABAGIAEAFIAQALIADACIABACIgBABIgCABg");
	this.shape_9.setTransform(38.9,47.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAoCPQgEAAgDgDQgDgCgBgFIg/jOIgBAAIAAC8QAAAEABACQABADADACIAPALIACACIACACIgBABIgCABIhJAAIgCgBIgBgBIACgCIACgCIAOgLIADgFQACgCAAgEIAAjmQAAgDgCgCQgBgDgCgCIgOgLIgCgCIgCgCIABgBIACgBIBCAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABIADAFIAxCiIABAAIAAiOIgBgFIgEgFIgPgLIgDgCIgBgCIABgBIACgBIBIAAIADABIABABIgCACIgCACIgOALQgCACgBADQgCACAAADIAAD9QAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgEABg");
	this.shape_10.setTransform(23.9,47.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgqCPIgCgBIgBgBIACgCIACgCIAQgLIAEgFIABgGIAAjmIgBgGIgEgEIgQgLIgCgCIgCgCIABgBIACgBIBVAAIACABIABABIgBACIgDACIgQALIgEAEIgBAGIAADmIABAGIAEAFIAQALIADACIABACIgBABIgCABg");
	this.shape_11.setTransform(8.8,47.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC6600").s().p("AgjCYQgNgQgHgZQgHgZgCgfQgCggAAgfQAAgZACgaQACgcAHgYQAHgZANgOQANgQAWgBQAWABAOAQQANAOAHAZQAHAYACAcQACAaAAAZQAAAfgCAgQgCAfgHAZQgHAZgNAQQgOAPgWAAQgWAAgNgPgAgMiDQgGAOgDAeQgEAfAAAxQAAA5AEAhQADAiAGAOQAFAOAHABQAHgBAGgOQAGgOADgiQAEghAAg5QAAgxgEgfQgDgegGgOQgGgNgHAAIAAAAQgHAAgFANg");
	this.shape_12.setTransform(76.7,48.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC6600").s().p("AgmCnIgCgBIgBgBIABgCIACgCIAPgNQADgDABgCIABgIIAAkNIgBgHQgBgEgDgCIgPgMIgCgCIgBgDIABgCIACgBIBNAAIADABIAAACIgBADIgCACIgPAMQgDACgBAEIgBAHIAAENIABAIQABACADADIAPANIACACIABACIAAABIgDABg");
	this.shape_13.setTransform(63.8,48.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC6600").s().p("AgdCWQgNgQgGgaQgHgbgCgfQgCgeAAgcIABglQABgVADgVQADgWAHgRQAHgTAMgKQANgLARgBQAGAAAGADQAHADAFAEIAFACIAEAAIAEgBIAFgDIAFgFIAFgDQAAAAAAABQABAAAAAAQABAAAAABQAAAAABABIAAAFIAABrIAAACIgDABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIgBgDQgCgPgEgQQgEgPgFgOQgGgNgIgJQgHgJgKAAQgPgBgFAiQgFAhAABHQAAAwACAfQACAfAEAQQAFAPAFAGQAGAFAJABQAIgBAGgIQAHgIAEgNIAHgZIAEgWIACgKIABgCIADgBIADABIAAACQABAhgFAZQgFAYgMANQgMANgWAAQgVAAgNgRg");
	this.shape_14.setTransform(51.7,48.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC6600").s().p("AgmCnIgCgBIgBgBIABgCIACgCIAPgNQADgDABgCIABgIIAAkNIgBgHQgBgEgDgCIgPgMIgCgCIgBgDIABgCIACgBIBNAAIADABIAAACIgBADIgCACIgPAMQgDACgBAEIgBAHIAAENIABAIQABACADADIAPANIACACIABACIAAABIgDABg");
	this.shape_15.setTransform(39.5,48.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CC6600").s().p("AAkCnQgDAAgDgCQgDgEAAgFIg6jyIgBAAIAADdIABAHIAEAFIANAOIADACQAAAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIgBABIgCABIhCAAIgCgBIgBgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAIACgCIANgNIADgGQACgCgBgFIAAkNQABgEgCgDIgDgGIgNgMIgCgCIgBgDIABgCIACgBIA8AAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABIACAFIAtC/IABAAIAAimIgBgHQgBgDgDgCIgNgNIgDgCIgBgDIABgCIACgBIBCAAIACABIABACIgBADIgCACIgNAMIgDAGQgBADAAAEIAAEpIgBADQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAg");
	this.shape_16.setTransform(25.7,48.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC6600").s().p("AgmCnIgCgBIgBgBIABgCIACgCIAPgNQADgDABgCIABgIIAAkNIgBgHQgBgEgDgCIgPgMIgCgCIgBgDIABgCIACgBIBNAAIADABIAAACIgBADIgCACIgPAMQgDACgBAEIgBAHIAAENIABAIQABACADADIAPANIACACIABACIAAABIgDABg");
	this.shape_17.setTransform(12,48.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).wait(1));

	// Capa 3
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AJqjNQAgAYAoAMIAAFvQgvAMgmAcQgnAegPAjIxXAAQgNgtgvgkQgfgYgmgMIAAl0QAmgMAfgYQAvgjANgtIRbAAQAIA4A3Apg");
	this.shape_18.setTransform(46.7,48.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AowEvQgNgugvgjQgfgYglgMIAAlzQAlgNAfgXQAvgjANguIRbAAQAIA4A2ApQAhAZAoAMIAAFuQgwAMglAcQgnAdgPAkg");
	this.shape_19.setTransform(46.7,48.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AKyipIAAFvQgvAMgmAcQgnAegPAjIxXAAQgNgtgvgkQgfgYgmgMIAAl0QAmgMAfgYQAvgjANgtIRbAAQAIA4A3ApQAgAYAoAMg");
	this.shape_20.setTransform(46.7,48.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCCC").s().p("AowEvQgNgugvgjQgfgYglgMIAAlzQAlgNAfgXQAvgjANguIRbAAQAIA4A2ApQAhAZAoAMIAAFuQgwAMglAcQgnAdgPAkg");
	this.shape_21.setTransform(46.7,48.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18}]}).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.7,15.4,142.9,65.6);


(lib.hit5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000033").s().p("A7zDKIAAmTMA3nAAAIAAGTg");
	this.shape.setTransform(210.5,18.2,1.191,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.118)").s().p("AbmhCQBNAggBAiQABAjhNAggA8yAAQABgbAwgaIAABsQgwgbgBgcg");
	this.shape_1.setTransform(184.3,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.hit2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("An+AAIP9AA");
	this.shape.setTransform(58.5,41.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(102,51,0,0)").s().p("An9CvQgyAAAAhGIAAjRQAAhGAyAAIP7AAQAyAAAABGIAADRQAABGgyAAg");
	this.shape_1.setTransform(59,42.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.hit2, new cjs.Rectangle(3,25,112,35), null);


(lib.estre3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AANAYIgEgDQgCgCAAgDQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQACgCADABIAFADIABAFQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAIgDABIgCAAgAAFAJIgBgBIgLgLIgKgKQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQABgCACgCQACgCADABQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIAIARIAGAKIACABIgBABIgCABIAAABIgBgBg");
	this.shape.setTransform(23.1,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AANAYIgEgDQgCgCABgDQgBAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQACgCADABIAFADIABAFQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgDABIgCAAgAAFAJIgBgBIgLgLIgKgKQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgCADgCQADgCACABQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIAIARIAHAKIABABIgBABIgCABIAAAAIgBAAg");
	this.shape_1.setTransform(20.9,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAIAXIgHgHIgBgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAIACgCIACABQAFADACgBQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBgBIgDgCIgJgEIgJgFIgGgEQgEgFAAgDQABgEADgCIADgCIACAAIAAgBIAAgBIABgCIABAAIABAAIAHAHIAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIgBABIgCgBIgFgCQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAIgBABIABABQABABAJADIALAGQADACADADQAEAFAAAEQAAAEgDACIgEABIgCAAIAAABIAAABIAAACIgCABg");
	this.shape_2.setTransform(18.9,4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AADAVQgGgBgIgKQgHgKgBgGQAAgIAFgEQAFgEAGACQAFACAGAIIACADIgLAIIAHAMIAEADIAEgBQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgDgCgDIgBgDIACgCIACAAIABABQADAEAAAFQAAAGgEADQgEADgEAAIgFgBgAgLgPQgBABAAAAQAAAAAAABQAAABAAAAQAAABABABIAHAJIAEgDIgHgJQgBgBAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_3.setTransform(16.1,6.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AAHAYIgBgBIAAgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgVgbIgBgBIgCABIgBgCIAAgCIAAAAIAHgGIACAAIABABIAEAGIgBgDIgBgHIACgCQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAIADAEQAEAFgDACQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIgCAAQgBAAAAAAQAAABAAAAQAAABABAAQAAABABABIAQAVIACABQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAIABACIABABIgBABIgLAIIgBAAIgBgBg");
	this.shape_4.setTransform(13,8.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAGAWQgEAAgEgDQgEgCgFgHQgHgKgBgGQAAgIAFgEQAGgEAGACQAHACAHAJQAHAJABAIQAAAIgFAEQgDACgEAAIgCAAgAgMgPQgCACAEAEIAQAWQAEAEACgBQACgCgDgEIgRgXQgBgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_5.setTransform(10.3,10.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAHAYIgBgBIAAgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgVgbIgBgBIgCABIgBgCIAAgCIAAAAIAHgGIACAAIABABIAEAGIgBgDIgBgHIACgCQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAIADAEQAEAFgDACQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIgCAAQgBAAAAAAQAAABAAAAQAAABABAAQAAABABABIAQAVIACABQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAIABACIABABIgBABIgLAIIgBAAIgBgBg");
	this.shape_6.setTransform(7.2,13);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAHAYIgBgBIAAgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgVgbIgBgBIgCABIgBgCIAAgCIAAAAIAHgGIACAAIABABIAEAGIgBgDIgBgHIACgCQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAIADAEQAEAFgDACQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBIgCAAQgBAAAAAAQAAABAAAAQABABAAAAQAAABABABIAQAVIACABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAABAAIABACIABABIgBABIgLAIIgBAAIgBgBg");
	this.shape_7.setTransform(4.5,15.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AADAVQgGgBgIgKQgHgKgBgGQAAgIAFgEQAFgEAGACQAFACAGAIIACADIgLAIIAHAMIAEADIAEgBQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgDgCgDIgBgDIACgCIACAAIABABQADAEAAAFQAAAGgEADQgEADgEAAIgFgBgAgLgPQgBABAAAAQAAAAAAABQAAABAAAAQAAABABABIAHAJIAEgDIgHgJQgBgBAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_8.setTransform(1.9,17.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AAEAYQgHgDgJgLQgJgLAAgJQgBgIAFgEQAEgDAFABQAFAAAFAEQAFAEAFAHQAJAKABAJQABAIgGAFQgDACgDAAIgHgBgAgOgSQgCABADAEIAYAfQAAABABAAQAAABABAAQAAAAABAAQAAAAABgBIABgCIgBgCIgYgfIgDgDIAAAAIgCABg");
	this.shape_9.setTransform(-3.7,21.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3F3F58").s().p("AgBAvIg5AmIAVhCIg2gqIBFAAIAYhAIAVBCIBFADIg4AnIASBDg");
	this.shape_10.setTransform(9.2,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.estre2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAPAXQgDAAgCgCIgCgFQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAgBIAEgBQADAAACADQACACAAADQAAABAAAAQAAABAAABQgBAAAAABQAAAAAAAAIgEACIgBgBgAAFAJIgNgLIgKgKQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgDACgCQADgCACAAQADABACACIAJAQIAHAJIABACIgBAAIgCACIAAAAg");
	this.shape.setTransform(22.1,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AACAYQgEgBgFgGQgFgGAAgEQgBgEAEgFIADgHIgEgFQgBgBAAAAQgBAAAAAAQAAgBgBABQAAAAgBAAQgCACADAEIACADIgBACIgDAEQgDACgDgDQgDgDABgFQABgFAEgEQAEgDADgBQADgBADAAQADABACADIAVAXIABAAIACAAIABACIgBACIgCADQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBIgCAGIgCAEQgCACgEAAIgBAAgAgEAAQABACAEAFIAFAFQAAAAABAAQAAABABAAQAAAAAAgBQABAAAAAAQACgCgDgDIgLgMQgCADABACg");
	this.shape_1.setTransform(20,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgMARQgLgNgBgEQgBgGAEgEQACgCAGABIgEgFIgCgBIgBAAIgBAAIgBgBIAAgBIAAgBIAJgHIABgBIABABIAfAkQAAAAABAAQAAAAAAAAQAAABABAAQAAgBABAAIABABIABABIAAABIgJAIIgBABIgBgBIgBgBQAAAFgCACQgDADgDAAQgHAAgKgMgAgNgIIgBACIABACIASAVIACACIACgBIABgBIAAgCIgVgXIgCAAg");
	this.shape_2.setTransform(16.8,4.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAFAaQgDAAgDgFIgVgXIgBgBQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIgBgBIgBgBIgBgBIABgBIAJgHIAAgBIABABIAWAZQABABAAAAQABABABAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIgUgXIgCAAIgCgBIgCgCIAAgBIAJgIIABAAIABABIAZAdIADABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIACACIAAABIgJAHIgBABIgBgBIgBgBIgBgBQgBAIgDACQAAABgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_3.setTransform(13.4,7.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AAKAbQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAABAAIABgDQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABIADAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBIgDgCIgdgVIgDgDIgCAAIgBgBIgBgBIgBgBIABgBIAJgIIABgBIABABIABABIAAABIABACIABACIAPAMIgJgRIAAAAIgBgBIgCgBIgBAAIgCgCIAAgCIAFgEIABAAIABABIAAABIAAABIABAEIAQAaIAFAJIABAFIgBAFIgDADIgEACQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_4.setTransform(10,11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AACAYQgEgBgFgGQgFgGAAgEQgBgEAEgFIADgHIgEgFQgBgBAAAAQgBAAAAAAQAAgBgBABQAAAAgBAAQgCACADAEIACADIgBACIgDAEQgDACgDgDQgDgDABgFQABgFAEgEQAEgDADgBQADgBADAAQADABACADIAVAXIABAAIACAAIABACIgBACIgCADQgBABAAAAQgBAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBIgCAGIgCAEQgCACgEAAIgBAAgAgEAAQABACAEAFIAFAFQAAAAABAAQAAABABAAQAAAAAAgBQABAAAAAAQACgCgDgDIgLgMQgCADABACg");
	this.shape_5.setTransform(7.5,13.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AACAaIgBgBIAAgCIAAgBIgBgDIgWgYQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBAAAAAAIgBAAIgCgCIABgBIAIgIIABAAIABAAIACADQAAgGAEgEQADgCADAAQADABABADIAWAYIACAAIACACIACACIgBAAIgIAHQAAAAgBAAQAAAAgBgBQgBAAAAAAQgBgBAAAAIgVgYQgBgBAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAIAUAYQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIABABIABABQABABAAAAQAAAAAAAAQAAABgBAAQAAAAAAABIgKAIIAAABIgCgBg");
	this.shape_6.setTransform(2.1,18.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAMAZIgBgBQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAABgBIAAgBIgWgaQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIgCgBIgBgCIABgBIAIgIIABAAIAaAeIABAAIABABQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIABACQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIgKAJIgBAAgAgVgOQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAEgFQABgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQABABgBAAQAAABAAAAQgBADgCACIgEACIgBgBg");
	this.shape_7.setTransform(-0.7,19.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AALAaIgJgHIgCgCIABgBIADgCIADABQAIAFACgCIABgCIgBgCQgBgCgEgBIgHgCIgOgGQgGgDgDgDQgEgFgBgEQAAgFADgCQACgCAEgBIAAgCIABgCIACAAIABAAIAJAIIABAAIAAACIgBABIgCABIgEgBQgHgEgCACQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQACACAKAEIAPAFQAFADADADQAFAFAAAFQAAAFgDACQgCACgDABIgBAAIAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAABIgBABIgCgCg");
	this.shape_8.setTransform(-3.1,21.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3F3F58").s().p("AgBAvIg5AmIAVhCIg2gqIBFAAIAYhAIAVBCIBFADIg4AnIASBDg");
	this.shape_9.setTransform(9.2,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.estre1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop()*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAOAWIgEgCQgCgDAAgCQgBgBAAAAQAAgBABgBQAAAAAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAABAAQACAAACACQAAABABAAQAAABAAAAQAAABAAABQABAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgDABIgBAAgAAEAIIgLgLIgKgJQgBAAAAgBQAAAAAAAAQgBgBAAgBQAAAAABgBQAAgCACgCQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQADAAACACIAIAPIAHAJIAAABIAAABIgCABIAAABIgCgBg");
	this.shape.setTransform(21.8,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAIAVIgHgGIgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABgBAAAAIACgBIACABQAFACACgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIgDgCIgJgDIgJgEQgEgCgCgCQgEgEABgEQAAgDACgCIAEgCIABAAIAAgBIAAgBIACgCIAAAAIABAAIAIAGIAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBABIgBABIgCgBIgEgBQgBAAAAgBQgBAAgBAAQAAABAAAAQgBAAAAAAIAAABIAAABQABACAJACIAKAFQAEACADADQAEAEAAADQAAAEgCACIgEACIgCAAIAAABIAAABIAAACIgCAAg");
	this.shape_1.setTransform(20,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AADAUQgFgCgIgIQgHgJgBgGQgBgIAFgEQAFgEAFACQAFACAGAHIACACIgKAJIAHAKIAEADIADgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQgBgDgCgCIgBgDIACgBIABgBIACABQADAEAAAFQABAFgEADQgEADgFAAIgEAAgAgLgNQgBAAAAABQAAAAAAABQAAAAAAAAQAAABABAAIAHAJIADgDIgHgJIgCgBIgBABg");
	this.shape_2.setTransform(17.5,5.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAIAXIgBgCIgBgBQAAAAABAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgUgYIgCgBIgBAAIgBgBIgBgCIAAAAIAHgGIABgBIABACIAFAFIgBgDQgCgEAAgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABAAIADADQAEAFgDACQgBAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgCgBQAAAAAAABQAAAAAAAAQAAABAAAAQAAABABABIAQATQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIACABIABABIABABIgBABIgJAIIgBAAIgBAAg");
	this.shape_3.setTransform(14.6,7.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AAHAUQgEAAgEgCQgEgCgFgGQgHgJgBgGQgBgIAFgEQAFgEAHACQAFABAHAJQAIAJABAGQABAIgFAEQgDACgDAAIgCAAgAgLgNQgCABADAEIARAUQADAEACgCQACgBgEgEIgRgVIgDgCIgBABg");
	this.shape_4.setTransform(12,9.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAIAXIgBgCIgBgBQAAAAABAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgUgYIgCgBIgBAAIgBgBIgBgCIAAAAIAHgGIABgBIABACIAFAFIgBgDQgCgEAAgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABAAIADADQAEAFgDACQgBAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgCgBQAAAAAAABQAAAAAAAAQAAABAAAAQAAABABABIAQATQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIACABIABABIABABIgBABIgJAIIgBAAIgBAAg");
	this.shape_5.setTransform(9.2,12.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAIAXIgBgCIgBgBQAAAAABAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgUgYIgCgBIgBAAIgBgBIgBgCIAAAAIAHgGIABgBIABACIAFAFIgBgDQgCgEAAgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAAAAABAAIADADQAEAFgDACQgBAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgCgBQAAAAAAABQAAAAAAAAQAAABAAAAQAAABABABIAQATQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIACABIABABIABABIgBABIgJAIIgBAAIgBAAg");
	this.shape_6.setTransform(6.8,14.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AADAUQgFgCgIgIQgHgJgBgGQgBgIAFgEQAFgEAFACQAFACAGAHIACACIgKAJIAHAKIAEADIADgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQgBgDgCgCIgBgDIACgBIABgBIACABQADAEAAAFQABAFgEADQgEADgFAAIgEAAgAgLgNQgBAAAAABQAAAAAAABQAAAAAAAAQAAABABAAIAHAJIADgDIgHgJIgCgBIgBABg");
	this.shape_7.setTransform(4.3,16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAIAaQgFgBgCgDIgBgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAEgBIADACIACACIABACIACABIACgBQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAIAAgCIgEgGIgEgEQgEgFgDgBQAAAAgBAAQAAAAAAAAQAAAAgBAAQgBAAAAAAQgDACACAFIAAABIgBABIgBABQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBIgBAAIgQgVIAMgKIACgCIAAgBIABgBIABAAIABAAIABABIAEAFIAAACIgBABIgLAKIAGAHQABgDADgCQAEgFAGACQAHABAFAGQAFAFgBAHQAAAHgFAEQgEADgEAAIgCAAg");
	this.shape_8.setTransform(-1,20.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgCAKIgDgFIgCgEIACgBIABgCIADgCIABgBIAAgCIAAgBIABgBIACAAIADAEIACAFIgBABIgCACIgEACIgBADIABABIgBAAIgCACg");
	this.shape_9.setTransform(-5.1,24.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3F3F58").s().p("AgBAvIg5AmIAVhCIg2gqIBFAAIAYhAIAVBCIBFADIg4AnIASBDg");
	this.shape_10.setTransform(9.2,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.cerrar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgBgEIBbBMABQhSQghgigvAAQgtAAgiAiQgDAEgEAEIBVBGIBRhOQAiAiAAAwQAAApgYAfQgFAFgFAFQghAjgvAAQgtAAgigjQgDgDgEgEQgaggAAgrQAAgqAaggAhWBLIBVhP");
	this.shape.setTransform(26.3,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ag6CGQhCAAAAhCIAAiGQAAhDBCAAIB0AAQBDAAAABDIAACGQAABChDAAg");
	this.shape_1.setTransform(26.3,13.2);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14,0.8,24.7,25.3);


(lib.bios = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{huerta:1,villa:2,diaz:3,ana:4,iturbide:5,victoria:6,moctezuma:7,madero:8,obregon:9,morelos:10,hidalgo:11,zapata:12});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_1 = function() {
		realpuntos = realpuntos +1
	}
	this.frame_2 = function() {
		realpuntos = realpuntos +1
		//alert(realpuntos)
	}
	this.frame_3 = function() {
		realpuntos = realpuntos +1
	}
	this.frame_4 = function() {
		realpuntos = realpuntos +1
	}
	this.frame_5 = function() {
		realpuntos = realpuntos +1
	}
	this.frame_6 = function() {
		realpuntos = realpuntos +1
	}
	this.frame_7 = function() {
		realpuntos = realpuntos +1
	}
	this.frame_8 = function() {
		realpuntos = realpuntos +1
	}
	this.frame_9 = function() {
		realpuntos = realpuntos +1
	}
	this.frame_10 = function() {
		realpuntos = realpuntos +1
	}
	this.frame_11 = function() {
		realpuntos = realpuntos +1
		//alert(realpuntos)
	}
	this.frame_12 = function() {
		realpuntos = realpuntos +1
		//alert(realpuntos)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000033").s().p("AgSATIAAgkIAkAAIAAAkg");
	this.shape.setTransform(141.1,206.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000033").s().p("AgjBBQgSgJgJgRQgJgRAAgXQAAgSAJgSQAJgRARgJQARgJATAAQAgAAAUAVQAUAUAAAfQAAAggUAUQgVAVgfAAQgSAAgRgIgAgYgfQgKALAAAUQAAAVAKALQAKALAOAAQAPAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgPAAQgOAAgKALg");
	this.shape_1.setTransform(129.1,201.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000033").s().p("AgyBPQgRgTAAgkQAAgiARgTQAQgSAaAAQAWAAARAUIAAhGIAlAAIAADAIgiAAIAAgVQgJANgLAFQgMAGgLAAQgYAAgRgTgAgUgIQgJAJAAAVQAAAWAGALQAJAOAPAAQANAAAJgLQAJgLAAgVQAAgYgJgKQgJgLgNABQgNgBgIALg");
	this.shape_2.setTransform(112.3,198.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000033").s().p("AAbBIIAAhIQAAgVgDgHQgCgHgFgEQgGgDgHAAQgJAAgHAFQgIAGgDAIQgDAIAAAXIAABAIglAAIAAiMIAjAAIAAAVQASgYAbABQAMAAAKAEQAKAFAGAGQAFAHACAIQACAKAAAPIAABXg");
	this.shape_3.setTransform(96.1,201);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000033").s().p("AgyAxQgOgTAAgdQAAghASgUQASgUAcAAQAeAAASAVQASAUgBAqIhbAAQAAAQAJAKQAIAIAMABQAJAAAGgFQAGgFADgLIAlAHQgIAUgPAKQgPALgXAAQgkAAgRgYgAgSgjQgIAJAAAPIA3AAQgBgQgIgJQgHgHgMAAQgLgBgIAJg");
	this.shape_4.setTransform(80.3,201.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000033").s().p("AgRBhIAAiMIAkAAIAACMgAgRg+IAAgiIAkAAIAAAig");
	this.shape_5.setTransform(69.2,198.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000033").s().p("AgsBIIAAiMIAiAAIAAAUQAJgOAGgEQAHgEAJAAQAMgBAMAIIgLAfQgKgFgIAAQgHgBgGAFQgEAEgDAMQgDAKAAAjIAAAsg");
	this.shape_6.setTransform(61.2,201);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000033").s().p("AgNBcQgMgGgIgMIAAAVIgiAAIAAjAIAlAAIAABGQARgUAWAAQAaAAAQASQARATAAAhQAAAlgRATQgRATgYAAQgLAAgMgGgAgWgIQgJAJAAAVQAAAWAHAKQAKAPAPAAQAMAAAJgLQAIgKAAgWQAAgYgIgKQgJgLgNABQgNAAgJAKg");
	this.shape_7.setTransform(47,198.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000033").s().p("AgpBBQgMgFgFgMQgFgLAAgUIAAhYIAlAAIAABBQAAAcACAHQACAGAGAFQAFADAJAAQAIABAIgGQAHgFADgIQADgIAAgcIAAg8IAlAAIAACMIgjAAIAAgWQgHAMgNAGQgLAGgOAAQgOABgLgHg");
	this.shape_8.setTransform(30.1,201.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000033").s().p("AgvA2QgSgTAAgjQAAgiASgSQATgUAeAAQAaAAAOALQAQALAGAWIgkAHQgCgLgHgGQgGgFgKAAQgNAAgJAKQgHAJgBAWQABAYAHAKQAJALANAAQAKAAAIgGQAGgGADgPIAkAGQgFAZgRANQgQANgbAAQgeAAgSgTg");
	this.shape_9.setTransform(14.7,201.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000033").s().p("AgrA9QgQgLgFgUIAlgGQACALAHAGQAIAGAMAAQAOAAAHgGQAFgEAAgFQAAgFgDgDQgCgCgKgCQgsgLgMgHQgQgLAAgUQAAgTAOgLQAOgNAfAAQAbAAAOAJQAOAKAGASIgjAGQgDgIgGgEQgGgFgLAAQgOAAgHAFQgEADAAAEQAAAEAEADQAFADAcAIQAeAGAMAJQALAKAAARQAAAUgQANQgQAOgfAAQgcAAgRgMg");
	this.shape_10.setTransform(-0.9,201.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000033").s().p("AgyAxQgOgTAAgdQAAghASgUQASgUAcAAQAeAAASAVQASAUgBAqIhbAAQAAAQAJAKQAIAIAMABQAJAAAGgFQAGgFADgLIAlAHQgIAUgPAKQgPALgXAAQgkAAgRgYgAgSgjQgIAJAAAPIA3AAQgBgQgIgJQgHgHgMAAQgLgBgIAJg");
	this.shape_11.setTransform(-15.7,201.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000033").s().p("AgyBPQgRgTAAgkQAAgiARgTQAQgSAaAAQAWAAARAUIAAhGIAlAAIAADAIgiAAIAAgVQgJANgLAFQgMAGgLAAQgYAAgRgTgAgUgIQgJAJAAAVQAAAWAGALQAJAOAPAAQANAAAJgLQAJgLAAgVQAAgYgJgKQgJgLgNABQgNgBgIALg");
	this.shape_12.setTransform(-31.6,198.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000033").s().p("AgrA9QgQgLgFgUIAlgGQACALAHAGQAIAGAMAAQAOAAAHgGQAFgEAAgFQAAgFgDgDQgCgCgKgCQgsgLgMgHQgQgLAAgUQAAgTAOgLQAOgNAfAAQAbAAAOAJQAOAKAGASIgjAGQgDgIgGgEQgGgFgLAAQgOAAgHAFQgEADAAAEQAAAEAEADQAFADAcAIQAeAGAMAJQALAKAAARQAAAUgQANQgQAOgfAAQgcAAgRgMg");
	this.shape_13.setTransform(-54.8,201.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000033").s().p("Ag0A9QgNgMAAgRQAAgMAGgJQAGgKAKgEQAKgEATgEQAZgFAKgFIAAgDQAAgLgFgEQgFgFgOABQgKAAgFADQgGAEgDAKIgigGQAGgVAOgKQAOgJAbAAQAYAAAMAGQAMAGAFAJQAFAJAAAYIgBAqQAAATACAIQACAJAFAKIglAAIgDgLIgCgEQgJAJgLAEQgKAFgMAAQgWAAgMgMgAAAAIQgQAEgEADQgIAFAAAIQAAAIAGAFQAGAGAJAAQAJAAAJgHQAHgEACgIQABgEAAgOIAAgHIgVAFg");
	this.shape_14.setTransform(-69.5,201.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000033").s().p("Ag7BgIgDgdQAJACAHAAQANAAAGgIQAGgIADgLIg1iMIAnAAIAhBjIAhhjIAmAAIgxCGIgJAZQgFAMgFAGQgEAHgFAEQgFAEgJACQgIADgLgBQgKABgLgDg");
	this.shape_15.setTransform(-84.6,204);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000033").s().p("Ag0A9QgNgMAAgRQAAgMAGgJQAGgKAKgEQAKgEATgEQAZgFAKgFIAAgDQAAgLgFgEQgFgFgOABQgKAAgFADQgGAEgDAKIgigGQAGgVAOgKQAOgJAbAAQAYAAAMAGQAMAGAFAJQAFAJAAAYIgBAqQAAATACAIQACAJAFAKIglAAIgDgLIgCgEQgJAJgLAEQgKAFgMAAQgWAAgMgMgAAAAIQgQAEgEADQgIAFAAAIQAAAIAGAFQAGAGAJAAQAJAAAJgHQAHgEACgIQABgEAAgOIAAgHIgVAFg");
	this.shape_16.setTransform(-99.4,201.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000033").s().p("AgPBGIg4iLIAmAAIAbBHIAHAXIADgMIAEgLIAbhHIAmAAIg4CLg");
	this.shape_17.setTransform(-114.5,201.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000033").s().p("AgyAxQgOgTAAgdQAAghASgUQASgUAcAAQAeAAASAVQASAUgBAqIhbAAQAAAQAJAKQAIAIAMABQAJAAAGgFQAGgFADgLIAlAHQgIAUgPAKQgPALgXAAQgkAAgRgYgAgSgjQgIAJAAAPIA3AAQgBgQgIgJQgHgHgMAAQgLgBgIAJg");
	this.shape_18.setTransform(-137.1,201.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000033").s().p("AgpBBQgMgFgFgMQgFgLAAgUIAAhYIAlAAIAABBQAAAcACAHQACAGAGAFQAFADAJAAQAIABAIgGQAHgFADgIQADgIAAgcIAAg8IAlAAIAACMIgjAAIAAgWQgHAMgNAGQgLAGgOAAQgOABgLgHg");
	this.shape_19.setTransform(-152.7,201.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000033").s().p("AAfBiIAAhGQgIAJgKAGQgLAFgMAAQgYAAgPgSQgSgUAAgkQAAgiARgSQARgTAZAAQANAAAKAGQALAGAHAMIAAgVIAjAAIAADAgAgUg5QgJALAAAXQAAAWAJAKQAIAKAMAAQANAAAKgMQAJgKAAgXQAAgVgIgKQgKgLgNAAQgMAAgJALg");
	this.shape_20.setTransform(-169.4,203.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000033").s().p("AgrA+QgQgMgFgUIAlgFQACAKAHAGQAIAFAMABQAOgBAHgFQAFgDAAgHQAAgEgDgCQgCgEgKgCQgsgJgMgIQgQgLAAgUQAAgSAOgNQAOgMAfAAQAbAAAOAKQAOAIAGATIgjAHQgDgJgGgEQgGgFgLABQgOAAgHADQgEADAAAFQAAAEAEADQAFADAcAIQAeAGAMAKQALAIAAATQAAASgQAOQgQAOgfAAQgcAAgRgLg");
	this.shape_21.setTransform(144.5,168.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000033").s().p("AgyAxQgOgTAAgdQAAgiASgTQASgUAcAAQAeAAASAUQASAVgBApIhbAAQAAARAJAKQAIAJAMAAQAJgBAGgEQAGgFADgKIAlAFQgIAVgPALQgPAKgXAAQgkAAgRgYgAgSgjQgIAJAAAPIA3AAQgBgQgIgIQgHgJgMABQgLAAgIAIg");
	this.shape_22.setTransform(129.7,168.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000033").s().p("AgyBPQgRgUAAgiQAAgjARgSQAQgTAaAAQAWAAARAUIAAhGIAlAAIAADAIgiAAIAAgVQgJANgLAFQgMAGgLAAQgYAAgRgTgAgUgIQgJAJAAAVQAAAWAGAKQAJAPAPAAQANAAAJgLQAJgLAAgVQAAgZgJgJQgJgKgNAAQgNAAgIAKg");
	this.shape_23.setTransform(113.8,165.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000033").s().p("Ag0A+QgNgNAAgRQAAgMAGgKQAGgIAKgFQAKgFATgDQAZgFAKgFIAAgDQAAgLgFgEQgFgEgOAAQgKAAgFADQgGAEgDAKIgigHQAGgTAOgKQAOgKAbAAQAYAAAMAGQAMAFAFAKQAFAIAAAZIgBAqQAAASACAKQACAIAFAKIglAAIgDgLIgCgEQgJAJgLAEQgKAFgMAAQgWAAgMgLgAAAAJQgQADgEADQgIAFAAAIQAAAIAGAFQAGAGAJAAQAJAAAJgHQAHgEACgIQABgFAAgNIAAgHIgVAGg");
	this.shape_24.setTransform(98.4,168.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000033").s().p("AgyBPQgRgUAAgiQAAgjARgSQAQgTAaAAQAWAAARAUIAAhGIAlAAIAADAIgiAAIAAgVQgJANgLAFQgMAGgLAAQgYAAgRgTgAgUgIQgJAJAAAVQAAAWAGAKQAJAPAPAAQANAAAJgLQAJgLAAgVQAAgZgJgJQgJgKgNAAQgNAAgIAKg");
	this.shape_25.setTransform(82.4,165.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000033").s().p("AgSBgIAAiKIAkAAIAACKgAgSg+IAAghIAkAAIAAAhg");
	this.shape_26.setTransform(70.7,165.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000033").s().p("AgRBgIAAi/IAkAAIAAC/g");
	this.shape_27.setTransform(63.2,165.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000033").s().p("Ag0A+QgNgNAAgRQAAgMAGgKQAGgIAKgFQAKgFATgDQAZgFAKgFIAAgDQAAgLgFgEQgFgEgOAAQgKAAgFADQgGAEgDAKIgigHQAGgTAOgKQAOgKAbAAQAYAAAMAGQAMAFAFAKQAFAIAAAZIgBAqQAAASACAKQACAIAFAKIglAAIgDgLIgCgEQgJAJgLAEQgKAFgMAAQgWAAgMgLgAAAAJQgQADgEADQgIAFAAAIQAAAIAGAFQAGAGAJAAQAJAAAJgHQAHgEACgIQABgFAAgNIAAgHIgVAGg");
	this.shape_28.setTransform(51.9,168.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000033").s().p("AAbBHIAAhHQAAgVgDgHQgCgHgFgDQgGgEgHAAQgJAAgHAFQgIAFgDAJQgDAJAAAWIAAA/IglAAIAAiKIAjAAIAAAUQASgXAbgBQAMABAKAEQAKAFAGAGQAFAHACAJQACAIAAAQIAABWg");
	this.shape_29.setTransform(36.2,168);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000033").s().p("AgjBAQgSgIgJgRQgJgRAAgXQAAgSAJgRQAJgSARgJQARgJATAAQAgAAAUAUQAUAVAAAfQAAAfgUAWQgVAUgfAAQgSAAgRgJgAgYgfQgKALAAAUQAAAVAKALQAKALAOAAQAPAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgPAAQgOAAgKALg");
	this.shape_30.setTransform(19.8,168.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000033").s().p("AgrA+QgQgMgFgUIAlgFQACAKAHAGQAIAFAMABQAOgBAHgFQAFgDAAgHQAAgEgDgCQgCgEgKgCQgsgJgMgIQgQgLAAgUQAAgSAOgNQAOgMAfAAQAbAAAOAKQAOAIAGATIgjAHQgDgJgGgEQgGgFgLABQgOAAgHADQgEADAAAFQAAAEAEADQAFADAcAIQAeAGAMAKQALAIAAATQAAASgQAOQgQAOgfAAQgcAAgRgLg");
	this.shape_31.setTransform(3.7,168.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000033").s().p("AgsBHIAAiKIAiAAIAAAUQAJgOAGgFQAHgEAJgBQAMAAAMAIIgLAgQgKgHgIABQgHAAgGAEQgEAEgDALQgDAMAAAiIAAArg");
	this.shape_32.setTransform(-7.7,168);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000033").s().p("AgyAxQgOgTAAgdQAAgiASgTQASgUAcAAQAeAAASAUQASAVgBApIhbAAQAAARAJAKQAIAJAMAAQAJgBAGgEQAGgFADgKIAlAFQgIAVgPALQgPAKgXAAQgkAAgRgYgAgSgjQgIAJAAAPIA3AAQgBgQgIgIQgHgJgMABQgLAAgIAIg");
	this.shape_33.setTransform(-21.6,168.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000033").s().p("AhDBiIAAjAIAiAAIAAAUQAHgKALgHQAMgGANAAQAYAAARATQARATAAAjQAAAhgRAUQgRATgZAAQgKAAgKgFQgJgEgKgLIAABGgAgWg6QgJALAAAVQAAAYAKAJQAJAMAMAAQANAAAJgKQAIgKAAgXQAAgXgIgKQgJgLgNAAQgNAAgJAKg");
	this.shape_34.setTransform(-36.8,170.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000033").s().p("AgrA+QgQgMgFgUIAlgFQACAKAHAGQAIAFAMABQAOgBAHgFQAFgDAAgHQAAgEgDgCQgCgEgKgCQgsgJgMgIQgQgLAAgUQAAgSAOgNQAOgMAfAAQAbAAAOAKQAOAIAGATIgjAHQgDgJgGgEQgGgFgLABQgOAAgHADQgEADAAAFQAAAEAEADQAFADAcAIQAeAGAMAKQALAIAAATQAAASgQAOQgQAOgfAAQgcAAgRgLg");
	this.shape_35.setTransform(-60.8,168.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000033").s().p("Ag0A+QgNgNAAgRQAAgMAGgKQAGgIAKgFQAKgFATgDQAZgFAKgFIAAgDQAAgLgFgEQgFgEgOAAQgKAAgFADQgGAEgDAKIgigHQAGgTAOgKQAOgKAbAAQAYAAAMAGQAMAFAFAKQAFAIAAAZIgBAqQAAASACAKQACAIAFAKIglAAIgDgLIgCgEQgJAJgLAEQgKAFgMAAQgWAAgMgLgAAAAJQgQADgEADQgIAFAAAIQAAAIAGAFQAGAGAJAAQAJAAAJgHQAHgEACgIQABgFAAgNIAAgHIgVAGg");
	this.shape_36.setTransform(-75.4,168.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000033").s().p("AgSBgIAAi/IAkAAIAAC/g");
	this.shape_37.setTransform(-86.7,165.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000033").s().p("AgyAxQgOgTAAgdQAAgiASgTQASgUAcAAQAeAAASAUQASAVgBApIhbAAQAAARAJAKQAIAJAMAAQAJgBAGgEQAGgFADgKIAlAFQgIAVgPALQgPAKgXAAQgkAAgRgYgAgSgjQgIAJAAAPIA3AAQgBgQgIgIQgHgJgMABQgLAAgIAIg");
	this.shape_38.setTransform(-105.6,168.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000033").s().p("AgyBPQgRgUAAgiQAAgjARgSQAQgTAaAAQAWAAARAUIAAhGIAlAAIAADAIgiAAIAAgVQgJANgLAFQgMAGgLAAQgYAAgRgTgAgUgIQgJAJAAAVQAAAWAGAKQAJAPAPAAQANAAAJgLQAJgLAAgVQAAgZgJgJQgJgKgNAAQgNAAgIAKg");
	this.shape_39.setTransform(-121.5,165.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000033").s().p("Ag0A+QgNgNAAgRQAAgMAGgKQAGgIAKgFQAKgFATgDQAZgFAKgFIAAgDQAAgLgFgEQgFgEgOAAQgKAAgFADQgGAEgDAKIgigHQAGgTAOgKQAOgKAbAAQAYAAAMAGQAMAFAFAKQAFAIAAAZIgBAqQAAASACAKQACAIAFAKIglAAIgDgLIgCgEQgJAJgLAEQgKAFgMAAQgWAAgMgLgAAAAJQgQADgEADQgIAFAAAIQAAAIAGAFQAGAGAJAAQAJAAAJgHQAHgEACgIQABgFAAgNIAAgHIgVAGg");
	this.shape_40.setTransform(-144.4,168.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000033").s().p("AAbBHIAAhHQAAgVgDgHQgCgHgFgDQgGgEgHAAQgJAAgHAFQgIAFgDAJQgDAJAAAWIAAA/IglAAIAAiKIAjAAIAAAUQASgXAbgBQAMABAKAEQAKAFAGAGQAFAHACAJQACAIAAAQIAABWg");
	this.shape_41.setTransform(-160.2,168);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000033").s().p("AgpBCQgMgHgFgLQgFgLAAgUIAAhXIAlAAIAABAQAAAcACAHQACAHAGAEQAFADAJAAQAIAAAIgEQAHgGADgIQADgHAAgeIAAg6IAlAAIAACKIgjAAIAAgUQgHALgNAGQgLAHgOgBQgOAAgLgFg");
	this.shape_42.setTransform(-176.7,168.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000033").s().p("Ag0A9QgNgLAAgSQAAgMAGgJQAGgJAKgFQAKgEATgEQAZgFAKgFIAAgDQAAgKgFgFQgFgFgOABQgKgBgFAEQgGAEgDAKIgigGQAGgVAOgJQAOgKAbAAQAYAAAMAGQAMAGAFAJQAFAIAAAZIgBAqQAAATACAIQACAJAFAKIglAAIgDgLIgCgEQgJAJgLAEQgKAFgMAAQgWAAgMgMgAAAAJQgQADgEADQgIAFAAAIQAAAIAGAFQAGAGAJAAQAJAAAJgHQAHgEACgIQABgEAAgOIAAgHIgVAGg");
	this.shape_43.setTransform(269.3,135.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000033").s().p("AgyBPQgRgTAAgjQAAgjARgSQAQgTAaAAQAWAAARAUIAAhGIAlAAIAADAIgiAAIAAgVQgJANgLAFQgMAGgLAAQgYAAgRgTgAgUgIQgJAJAAAVQAAAWAGALQAJAOAPAAQANAAAJgLQAJgLAAgVQAAgYgJgKQgJgKgNAAQgNAAgIAKg");
	this.shape_44.setTransform(253.2,132.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000033").s().p("Ag0A9QgNgLAAgSQAAgMAGgJQAGgJAKgFQAKgEATgEQAZgFAKgFIAAgDQAAgKgFgFQgFgFgOABQgKgBgFAEQgGAEgDAKIgigGQAGgVAOgJQAOgKAbAAQAYAAAMAGQAMAGAFAJQAFAIAAAZIgBAqQAAATACAIQACAJAFAKIglAAIgDgLIgCgEQgJAJgLAEQgKAFgMAAQgWAAgMgMgAAAAJQgQADgEADQgIAFAAAIQAAAIAGAFQAGAGAJAAQAJAAAJgHQAHgEACgIQABgEAAgOIAAgHIgVAGg");
	this.shape_45.setTransform(237.8,135.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000033").s().p("AgvA2QgSgTAAgjQAAghASgTQATgUAeAAQAaAAAPALQAPALAGAWIgkAHQgCgLgHgGQgGgFgKAAQgNAAgJAKQgHAJgBAWQABAYAHAKQAJALANAAQAKAAAIgGQAGgGADgPIAkAGQgGAZgQANQgQANgbAAQgeAAgSgTg");
	this.shape_46.setTransform(223,135.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000033").s().p("Ag0A9QgNgLAAgSQAAgMAGgJQAGgJAKgFQAKgEATgEQAZgFAKgFIAAgDQAAgKgFgFQgFgFgOABQgKgBgFAEQgGAEgDAKIgigGQAGgVAOgJQAOgKAbAAQAYAAAMAGQAMAGAFAJQAFAIAAAZIgBAqQAAATACAIQACAJAFAKIglAAIgDgLIgCgEQgJAJgLAEQgKAFgMAAQgWAAgMgMgAAAAJQgQADgEADQgIAFAAAIQAAAIAGAFQAGAGAJAAQAJAAAJgHQAHgEACgIQABgEAAgOIAAgHIgVAGg");
	this.shape_47.setTransform(200.3,135.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000033").s().p("AgyAxQgOgTAAgdQAAghASgUQASgUAcAAQAeAAASAVQASAUgBAqIhbAAQAAAQAJAKQAIAIAMABQAJAAAGgFQAGgFADgLIAlAGQgIAVgPALQgPAKgXAAQgkAAgRgYgAgSgjQgIAJAAAPIA3AAQgBgQgIgIQgHgIgMAAQgLgBgIAJg");
	this.shape_48.setTransform(177.7,135.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000033").s().p("AgFBdQgIgDgEgGQgEgFgBgJQgBgHAAgTIAAg8IgRAAIAAgeIARAAIAAgbIAkgWIAAAxIAZAAIAAAeIgZAAIAAA3QAAARABADQAAADADACQADACADAAQAFAAAKgEIADAdQgNAFgQAAQgKAAgHgDg");
	this.shape_49.setTransform(165.9,132.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000033").s().p("AAbBIIAAhIQAAgVgDgHQgCgHgFgDQgGgEgHAAQgJAAgHAFQgIAGgDAIQgDAJAAAWIAABAIglAAIAAiMIAjAAIAAAVQASgYAbABQAMAAAKAEQAKAFAGAGQAFAHACAIQACAKAAAPIAABXg");
	this.shape_50.setTransform(153.2,135);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000033").s().p("AgyAxQgOgTAAgdQAAghASgUQASgUAcAAQAeAAASAVQASAUgBAqIhbAAQAAAQAJAKQAIAIAMABQAJAAAGgFQAGgFADgLIAlAGQgIAVgPALQgPAKgXAAQgkAAgRgYgAgSgjQgIAJAAAPIA3AAQgBgQgIgIQgHgIgMAAQgLgBgIAJg");
	this.shape_51.setTransform(137.3,135.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000033").s().p("AAbBIIAAhIQAAgVgDgHQgCgHgFgDQgGgEgHAAQgJAAgHAFQgIAGgDAIQgDAJAAAWIAABAIglAAIAAiMIAjAAIAAAVQASgYAbABQAMAAAKAEQAKAFAGAGQAFAHACAIQACAKAAAPIAABXg");
	this.shape_52.setTransform(121.7,135);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000033").s().p("AgSBhIAAiMIAkAAIAACMgAgSg+IAAgiIAkAAIAAAig");
	this.shape_53.setTransform(109.7,132.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000033").s().p("AgFBdQgIgDgEgGQgEgFgBgJQgBgHAAgTIAAg8IgRAAIAAgeIARAAIAAgbIAkgWIAAAxIAZAAIAAAeIgZAAIAAA3QAAARABADQAAADADACQADACADAAQAFAAAKgEIADAdQgNAFgQAAQgKAAgHgDg");
	this.shape_54.setTransform(101.5,132.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000033").s().p("AgsBIIAAiMIAiAAIAAAVQAJgPAGgEQAHgEAJAAQAMgBAMAIIgLAfQgKgFgIAAQgHgBgGAFQgEAEgDAMQgDAKAAAjIAAAsg");
	this.shape_55.setTransform(92.8,135);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000033").s().p("AgyAxQgOgTAAgdQAAghASgUQASgUAcAAQAeAAASAVQASAUgBAqIhbAAQAAAQAJAKQAIAIAMABQAJAAAGgFQAGgFADgLIAlAGQgIAVgPALQgPAKgXAAQgkAAgRgYgAgSgjQgIAJAAAPIA3AAQgBgQgIgIQgHgIgMAAQgLgBgIAJg");
	this.shape_56.setTransform(78.8,135.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000033").s().p("AhDBiIAAjAIAiAAIAAAUQAHgKALgHQAMgGANAAQAYAAARATQARATAAAjQAAAigRATQgRATgZAAQgKAAgKgFQgJgEgKgMIAABHgAgWg5QgJAKAAAUQAAAYAKAKQAJAMAMAAQANAAAJgLQAIgJAAgXQAAgXgIgKQgJgLgNAAQgNAAgJALg");
	this.shape_57.setTransform(63.7,137.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000033").s().p("AAbBIIAAhIQAAgVgDgHQgCgHgFgDQgGgEgHAAQgJAAgHAFQgIAGgDAIQgDAJAAAWIAABAIglAAIAAiMIAjAAIAAAVQASgYAbABQAMAAAKAEQAKAFAGAGQAFAHACAIQACAKAAAPIAABXg");
	this.shape_58.setTransform(39.3,135);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000033").s().p("AgkBbQgRgIgJgRQgJgRAAgYQAAgTAJgQQAJgRAQgJQARgJAUAAQAfAAAVAUQAUAVAAAeQAAAggUAVQgVAVgfAAQgSAAgSgJgAgXgEQgKAKAAAVQAAAVAKALQAJALAOAAQAOAAAKgLQAKgLAAgVQAAgVgKgKQgKgLgOAAQgOAAgJALgAgSg7IASgoIApAAIgkAog");
	this.shape_59.setTransform(22.9,132.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000033").s().p("AgSBhIAAiMIAlAAIAACMgAgSg+IAAgiIAlAAIAAAig");
	this.shape_60.setTransform(10.8,132.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000033").s().p("AguA2QgTgTAAgjQAAghATgTQASgUAeAAQAaAAAPALQAPALAGAWIgkAHQgCgLgHgGQgGgFgLAAQgMAAgJAKQgIAJAAAWQAAAYAIAKQAJALANAAQALAAAGgGQAHgGADgPIAkAGQgFAZgRANQgQANgbAAQgeAAgRgTg");
	this.shape_61.setTransform(-0.3,135.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000033").s().p("Ag0A9QgNgLAAgSQAAgMAGgJQAGgJAKgFQAKgEATgEQAZgFAKgFIAAgDQAAgKgFgFQgFgFgOABQgKgBgFAEQgGAEgDAKIgigGQAGgVAOgJQAOgKAbAAQAYAAAMAGQAMAGAFAJQAFAIAAAZIgBAqQAAATACAIQACAJAFAKIglAAIgDgLIgCgEQgJAJgLAEQgKAFgMAAQgWAAgMgMgAAAAJQgQADgEADQgIAFAAAIQAAAIAGAFQAGAGAJAAQAJAAAJgHQAHgEACgIQABgEAAgOIAAgHIgVAGg");
	this.shape_62.setTransform(-15.4,135.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000033").s().p("ABCBIIAAhQQAAgVgEgGQgFgHgLAAQgHAAgIAFQgGAEgEAJQgCAKAAASIAABEIgkAAIAAhMQgBgVgCgGQgCgFgDgEQgFgCgHAAQgIAAgHAFQgHAEgDAIQgDAKAAASIAABFIglAAIAAiMIAiAAIAAATQASgVAaAAQANAAAKAFQAJAGAGAKQAKgKAKgGQALgFAMAAQAQAAAKAGQALAGAFAMQAEAJAAAUIAABZg");
	this.shape_63.setTransform(-35,135);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000033").s().p("AgsBIIAAiMIAiAAIAAAVQAJgPAGgEQAHgEAJAAQAMgBAMAIIgLAfQgKgFgIAAQgHgBgGAFQgEAEgDAMQgDAKAAAjIAAAsg");
	this.shape_64.setTransform(-51.1,135);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000033").s().p("AgkBBQgRgJgJgRQgJgRAAgXQAAgSAJgSQAJgRARgJQAQgJAUAAQAgAAAUAVQAUAUAAAfQAAAggUAUQgVAVgfAAQgSAAgSgIgAgYgfQgJALgBAUQABAVAJALQAKALAOAAQAPAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgPAAQgOAAgKALg");
	this.shape_65.setTransform(-65.6,135.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000033").s().p("AgaBiIAAhuIgUAAIAAgdIAUAAIAAgKQAAgSAEgJQAEgIAKgGQAJgFAQAAQAPAAAPAFIgFAZQgIgCgJAAQgIAAgDAEQgEAEAAAKIAAAKIAcAAIAAAdIgcAAIAABug");
	this.shape_66.setTransform(-77.9,132.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000033").s().p("AAbBIIAAhIQAAgVgDgHQgCgHgFgDQgGgEgHAAQgJAAgHAFQgIAGgDAIQgDAJAAAWIAABAIglAAIAAiMIAjAAIAAAVQASgYAbABQAMAAAKAEQAKAFAGAGQAFAHACAIQACAKAAAPIAABXg");
	this.shape_67.setTransform(-91.1,135);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000033").s().p("AgRBhIAAiMIAjAAIAACMgAgRg+IAAgiIAjAAIAAAig");
	this.shape_68.setTransform(-103.1,132.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000033").s().p("Ag0BYQgNgMAAgRQAAgMAGgKQAGgJAKgFQAKgFATgDQAZgFAKgFIAAgDQAAgKgFgEQgFgFgOAAQgKAAgFAEQgGAEgDAJIgigGQAGgUAOgKQAOgJAbAAQAYAAAMAGQAMAFAFAKQAFAIAAAYIgBArQAAASACAJQACAJAFAKIglAAIgDgLIgCgFQgJAKgLAEQgKAFgMAAQgWAAgMgMgAAAAjQgQAEgEADQgIAFAAAIQAAAIAGAFQAGAGAJAAQAJAAAJgHQAHgFACgHQABgFAAgNIAAgHIgVAFgAgSg7IASgoIApAAIgkAog");
	this.shape_69.setTransform(-121.9,132.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000033").s().p("AgsBIIAAiMIAiAAIAAAVQAJgPAGgEQAHgEAJAAQAMgBAMAIIgLAfQgKgFgIAAQgHgBgGAFQgEAEgDAMQgDAKAAAjIAAAsg");
	this.shape_70.setTransform(-133.6,135);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000033").s().p("AgyAxQgOgTAAgdQAAghASgUQASgUAcAAQAeAAASAVQASAUgBAqIhbAAQAAAQAJAKQAIAIAMABQAJAAAGgFQAGgFADgLIAlAGQgIAVgPALQgPAKgXAAQgkAAgRgYgAgSgjQgIAJAAAPIA3AAQgBgQgIgIQgHgIgMAAQgLgBgIAJg");
	this.shape_71.setTransform(-147.5,135.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000033").s().p("AguA2QgTgTAAgjQAAghATgTQASgUAeAAQAZAAAQALQAPALAGAWIgkAHQgCgLgHgGQgGgFgLAAQgNAAgHAKQgJAJABAWQgBAYAJAKQAIALANAAQAKAAAHgGQAHgGADgPIAkAGQgGAZgPANQgQANgcAAQgdAAgSgTg");
	this.shape_72.setTransform(-162.1,135.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000033").s().p("AgyAxQgOgTAAgdQAAghASgUQASgUAcAAQAeAAASAVQASAUgBAqIhbAAQAAAQAJAKQAIAIAMABQAJAAAGgFQAGgFADgLIAlAGQgIAVgPALQgPAKgXAAQgkAAgRgYgAgSgjQgIAJAAAPIA3AAQgBgQgIgIQgHgIgMAAQgLgBgIAJg");
	this.shape_73.setTransform(-177.5,135.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000033").s().p("AgsBIIAAiMIAiAAIAAAVQAJgPAGgEQAHgEAJAAQAMgBAMAIIgLAfQgKgFgIAAQgHgBgGAFQgEAEgDAMQgDAKAAAjIAAAsg");
	this.shape_74.setTransform(-189,135);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000033").s().p("Ag0A9QgNgLAAgSQAAgMAGgJQAGgJAKgFQAKgEATgEQAZgFAKgFIAAgDQAAgKgFgFQgFgFgOABQgKgBgFAEQgGAEgDAKIgigGQAGgVAOgJQAOgKAbAAQAYAAAMAGQAMAGAFAJQAFAIAAAZIgBAqQAAATACAIQACAJAFAKIglAAIgDgLIgCgEQgJAJgLAEQgKAFgMAAQgWAAgMgMgAAAAJQgQADgEADQgIAFAAAIQAAAIAGAFQAGAGAJAAQAJAAAJgHQAHgEACgIQABgEAAgOIAAgHIgVAGg");
	this.shape_75.setTransform(-202.8,135.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000033").s().p("AhDBiIAAjAIAiAAIAAAUQAHgKALgHQAMgGANAAQAYAAARATQARATAAAjQAAAigRATQgRATgZAAQgKAAgKgFQgJgEgKgMIAABHgAgWg5QgJAKAAAUQAAAYAKAKQAJAMAMAAQANAAAJgLQAIgJAAgXQAAgXgIgKQgJgLgNAAQgNAAgJALg");
	this.shape_76.setTransform(-218.1,137.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000033").s().p("Ag0A9QgNgLAAgSQAAgMAGgJQAGgJAKgFQAKgEATgEQAZgFAKgFIAAgDQAAgKgFgFQgFgFgOABQgKgBgFAEQgGAEgDAKIgigGQAGgVAOgJQAOgKAbAAQAYAAAMAGQAMAGAFAJQAFAIAAAZIgBAqQAAATACAIQACAJAFAKIglAAIgDgLIgCgEQgJAJgLAEQgKAFgMAAQgWAAgMgMgAAAAJQgQADgEADQgIAFAAAIQAAAIAGAFQAGAGAJAAQAJAAAJgHQAHgEACgIQABgEAAgOIAAgHIgVAGg");
	this.shape_77.setTransform(-234.3,135.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000033").s().p("AgaBiIAAiLIAkAAIAACLgAgdg6IASgnIApAAIgjAng");
	this.shape_78.setTransform(-252.2,132.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000033").s().p("AgpBCQgMgHgFgLQgFgLAAgUIAAhYIAlAAIAABBQAAAdACAGQACAGAGAFQAFADAJAAQAIAAAIgEQAHgGADgIQADgHAAgdIAAg8IAlAAIAACMIgjAAIAAgVQgHALgNAGQgLAGgOAAQgOAAgLgFg");
	this.shape_79.setTransform(-265.1,135.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000033").s().p("AAfBiIAAhGQgHAJgLAGQgLAFgMAAQgYAAgPgSQgSgUAAgkQAAgiARgSQARgTAZAAQANAAAKAGQALAGAHAMIAAgVIAjAAIAADAgAgUg5QgJALAAAXQAAAWAIAKQAJAKAMAAQAMAAALgMQAJgKAAgXQAAgVgJgKQgJgLgMAAQgNAAgJALg");
	this.shape_80.setTransform(-281.8,137.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000033").s().p("AA2BhIgRgtIhLAAIgRAtIgpAAIBLjBIAoAAIBODBgAgbAUIA0AAIgahHg");
	this.shape_81.setTransform(-299.5,132.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF0000").s().p("AgKAJIAAgRIAVAAIAAARg");
	this.shape_82.setTransform(255.5,216);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF0000").s().p("AgfArQgLgIgDgPIATgDQABAKAHAFQAHAFAMAAQANAAAHgEQAGgFAAgGQAAgGgGgDQgEgCgPgDQgUgFgIgDQgIgDgEgGQgEgGAAgHQAAgGADgGQAEgFAGgEQAEgDAIgCQAHgCAJAAQAMAAAKAEQAKADAFAGQAEAFACAKIgSACQgCgIgGgEQgGgEgKAAQgNAAgFAEQgGADAAAFQAAAEADACQACADAFACIAPAEQAUAEAIADQAIACAFAGQAEAGAAAIQAAAIgFAIQgGAHgKAEQgKAEgOAAQgUAAgMgIg");
	this.shape_83.setTransform(247,212);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF0000").s().p("AgpArQgJgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIAQgCQAWgDALgDIABgEQgBgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQACgKAGgGQAGgHALgDQALgEANAAQAPAAAJADQAIADAEAFQAEAEADAHIABAPIAAAVQAAAXABAGQABAGADAGIgUAAQgDgFAAgHQgLAIgJADQgJADgLAAQgSAAgLgIgAgEAGIgQADQgFACgCAEQgDADAAAFQAAAGAFAFQAGAEAMAAQAJAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_84.setTransform(235.7,212);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF0000").s().p("AghAmQgPgNAAgYQABgPAFgMQAGgMANgGQALgGAOAAQASAAAMAIQAMAIADAPIgTADQgCgKgHgFQgHgFgJAAQgOAAgJAJQgIAJAAASQAAAUAIAJQAJAIANAAQALAAAIgGQAHgGACgMIASACQgCARgNAKQgNAJgSAAQgWAAgNgNg");
	this.shape_85.setTransform(224.8,212);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF0000").s().p("AgIBDIAAhgIARAAIAABggAgIgvIAAgTIARAAIAAATg");
	this.shape_86.setTransform(216.6,210.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF0000").s().p("AAaAyIAAg6QAAgKgCgFQgCgFgFgDQgGgDgIAAQgLAAgIAGQgJAHAAATIAAA0IgTAAIAAhgIARAAIAAANQAMgQAWAAQAKAAAJAEQAIADAEAFQAFAFABAHIABAQIAAA7g");
	this.shape_87.setTransform(208.2,211.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF0000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_88.setTransform(196.3,212);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF0000").s().p("AghAmQgOgNgBgYQAAgPAHgMQAFgMANgGQAMgGANAAQASAAAMAIQALAIAEAPIgTADQgDgKgGgFQgGgFgKAAQgNAAgKAJQgIAJAAASQAAAUAIAJQAJAIANAAQALAAAIgGQAHgGACgMIATACQgEARgMAKQgNAJgSAAQgWAAgNgNg");
	this.shape_89.setTransform(185.3,212);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF0000").s().p("AgIBDIAAhgIARAAIAABggAgIgvIAAgTIARAAIAAATg");
	this.shape_90.setTransform(177.2,210.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF0000").s().p("AgfArQgLgIgDgPIATgDQABAKAHAFQAHAFAMAAQANAAAHgEQAGgFAAgGQAAgGgGgDQgEgCgPgDQgUgFgIgDQgIgDgEgGQgEgGAAgHQAAgGADgGQAEgFAGgEQAEgDAIgCQAHgCAJAAQAMAAAKAEQAKADAFAGQAEAFACAKIgSACQgCgIgGgEQgGgEgKAAQgNAAgFAEQgGADAAAFQAAAEADACQACADAFACIAPAEQAUAEAIADQAIACAFAGQAEAGAAAIQAAAIgFAIQgGAHgKAEQgKAEgOAAQgUAAgMgIg");
	this.shape_91.setTransform(163.4,212);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FF0000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIARgCQAVgDALgDIAAgEQABgKgGgEQgIgGgNAAQgNAAgGAEQgHAEgDAKIgSgCQADgKAFgGQAGgHALgDQALgEANAAQAPAAAIADQAJADAFAFQADAEACAHIACAPIAAAVQAAAXABAGQAAAGAEAGIgTAAQgDgFgBgHQgLAIgKADQgIADgLAAQgTAAgJgIgAgEAGIgQADQgFACgDAEQgCADAAAFQAAAGAGAFQAFAEAMAAQAJAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_92.setTransform(152.1,212);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF0000").s().p("AA4AyIAAg8QAAgKgBgFQgCgEgFgDQgEgCgHAAQgMAAgHAGQgJAHAAAPIAAA4IgRAAIAAg+QAAgLgFgGQgEgFgLAAQgIAAgHADQgGAEgEAHQgCAHAAANIAAAyIgTAAIAAhgIARAAIAAANQAFgHAIgEQAJgFALAAQAMAAAJAFQAHAEADAIQANgRAVAAQARAAAIAIQAJAIAAARIAABCg");
	this.shape_93.setTransform(137.3,211.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FF0000").s().p("AgfArQgLgIgDgPIATgDQABAKAHAFQAHAFAMAAQANAAAHgEQAGgFAAgGQAAgGgGgDQgEgCgPgDQgUgFgIgDQgIgDgEgGQgEgGAAgHQAAgGADgGQAEgFAGgEQAEgDAIgCQAHgCAJAAQAMAAAKAEQAKADAFAGQAEAFACAKIgSACQgCgIgGgEQgGgEgKAAQgNAAgFAEQgGADAAAFQAAAEADACQACADAFACIAPAEQAUAEAIADQAIACAFAGQAEAGAAAIQAAAIgFAIQgGAHgKAEQgKAEgOAAQgUAAgMgIg");
	this.shape_94.setTransform(116.9,212);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FF0000").s().p("AgpArQgJgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIAQgCQAWgDALgDIABgEQgBgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQACgKAGgGQAGgHALgDQALgEANAAQAPAAAJADQAIADAEAFQAEAEADAHIABAPIAAAVQAAAXABAGQABAGADAGIgUAAQgDgFAAgHQgLAIgJADQgJADgLAAQgSAAgLgIgAgEAGIgQADQgFACgCAEQgDADAAAFQAAAGAFAFQAGAEAMAAQAJAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_95.setTransform(105.6,212);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FF0000").s().p("AgYA+QgLgHgGgLQgGgMAAgPQAAgOAFgLQAGgMALgGQALgHAOAAQAJABAIAEQAHADAFAGIAAgwIATAAIAACFIgRAAIAAgNQgLAPgUAAQgNAAgLgGgAgUgKQgIAJAAASQAAATAJAJQAJAKALgBQANAAAIgIQAJgJAAgSQAAgTgJgKQgJgJgNAAQgLAAgJAJg");
	this.shape_96.setTransform(93.3,210.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF0000").s().p("AAaAyIAAg6QAAgKgCgFQgCgFgFgDQgGgDgIAAQgLAAgIAGQgJAHAAATIAAA0IgTAAIAAhgIARAAIAAANQAMgQAWAAQAKAAAJAEQAIADAEAFQAFAFABAHIABAQIAAA7g");
	this.shape_97.setTransform(81.7,211.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FF0000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIARgCQAVgDALgDIAAgEQABgKgGgEQgIgGgNAAQgNAAgGAEQgHAEgDAKIgSgCQADgKAFgGQAGgHALgDQALgEANAAQAPAAAIADQAJADAFAFQADAEACAHIACAPIAAAVQAAAXABAGQAAAGAEAGIgTAAQgDgFgBgHQgLAIgKADQgIADgLAAQgTAAgJgIgAgEAGIgQADQgFACgDAEQgCADAAAFQAAAGAGAFQAFAEAMAAQAJAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_98.setTransform(69.8,212);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF0000").s().p("AgeA2IAAAMIgRAAIAAiFIATAAIAAAwQAMgOARAAQAKAAAKAEQAJAEAGAGQAGAHADAJQADAJAAAKQAAAZgOANQgOAOgUAAQgSAAgMgOgAgVgKQgJAKAAAQQAAASAGAIQAIAMAQAAQALABAJgKQAJgJAAgTQAAgRgJgKQgIgJgMAAQgMAAgJAJg");
	this.shape_99.setTransform(58.1,210.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF0000").s().p("AgfArQgLgIgDgPIATgDQABAKAHAFQAHAFAMAAQANAAAHgEQAGgFAAgGQAAgGgGgDQgEgCgPgDQgUgFgIgDQgIgDgEgGQgEgGAAgHQAAgGADgGQAEgFAGgEQAEgDAIgCQAHgCAJAAQAMAAAKAEQAKADAFAGQAEAFACAKIgSACQgCgIgGgEQgGgEgKAAQgNAAgFAEQgGADAAAFQAAAEADACQACADAFACIAPAEQAUAEAIADQAIACAFAGQAEAGAAAIQAAAIgFAIQgGAHgKAEQgKAEgOAAQgUAAgMgIg");
	this.shape_100.setTransform(40.5,212);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF0000").s().p("AgpArQgJgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIAQgCQAXgDAKgDIABgEQgBgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQACgKAHgGQAFgHALgDQALgEANAAQAOAAAKADQAIADAEAFQAFAEACAHIABAPIAAAVQgBAXABAGQACAGADAGIgUAAQgCgFgBgHQgKAIgKADQgJADgLAAQgSAAgLgIgAgEAGIgQADQgFACgCAEQgDADAAAFQAAAGAFAFQAHAEALAAQAJAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_101.setTransform(29.2,212);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FF0000").s().p("AgIBDIAAiFIASAAIAACFg");
	this.shape_102.setTransform(20.8,210.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF0000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_103.setTransform(6.6,212);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF0000").s().p("AgYA+QgLgHgGgLQgGgMAAgPQAAgOAFgLQAGgMALgGQALgHAOAAQAJABAIAEQAHADAFAGIAAgwIATAAIAACFIgRAAIAAgNQgLAPgUAAQgNAAgLgGgAgUgKQgIAJAAASQAAATAJAJQAJAKALgBQANAAAIgIQAJgJAAgSQAAgTgJgKQgJgJgNAAQgLAAgJAJg");
	this.shape_104.setTransform(-5.7,210.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FF0000").s().p("AgpArQgJgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIARgCQAVgDALgDIABgEQAAgKgGgEQgHgGgOAAQgNAAgGAEQgGAEgEAKIgSgCQADgKAFgGQAGgHALgDQALgEANAAQAPAAAIADQAKADAEAFQADAEADAHIABAPIAAAVQAAAXABAGQABAGADAGIgUAAQgDgFAAgHQgLAIgKADQgIADgLAAQgTAAgKgIgAgEAGIgQADQgFACgDAEQgCADAAAFQAAAGAGAFQAFAEAMAAQAJAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_105.setTransform(-23.3,212);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FF0000").s().p("AAaAyIAAg6QAAgKgCgFQgCgFgFgDQgGgDgIAAQgLAAgIAGQgJAHAAATIAAA0IgTAAIAAhgIARAAIAAANQAMgQAWAAQAKAAAJAEQAIADAEAFQAFAFABAHIABAQIAAA7g");
	this.shape_106.setTransform(-35.2,211.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FF0000").s().p("AgYAvQgJgEgEgFQgEgFgCgHQgBgFAAgKIAAg8IATAAIAAA1IABARQACAHAGAEQAFAEAJAAQAHAAAIgEQAHgEADgHQADgGAAgNIAAgzIATAAIAABgIgRAAIAAgOQgNAQgVAAQgKAAgIgCg");
	this.shape_107.setTransform(-47.2,212.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FF0000").s().p("AAbBDIAAg9QgBgMgGgFQgGgGgLAAQgIAAgHADQgHAFgEAGQgCAGAAALIAAA1IgTAAIAAiFIATAAIAAAwQAMgOAUAAQAMAAAKAFQAJAEADAHQAFAIAAAOIAAA9g");
	this.shape_108.setTransform(-65,210.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FF0000").s().p("AgfArQgLgIgDgPIATgDQABAKAHAFQAHAFAMAAQANAAAHgEQAGgFAAgGQAAgGgGgDQgEgCgPgDQgUgFgIgDQgIgDgEgGQgEgGAAgHQAAgGADgGQAEgFAGgEQAEgDAIgCQAHgCAJAAQAMAAAKAEQAKADAFAGQAEAFACAKIgSACQgCgIgGgEQgGgEgKAAQgNAAgFAEQgGADAAAFQAAAEADACQACADAFACIAPAEQAUAEAIADQAIACAFAGQAEAGAAAIQAAAIgFAIQgGAHgKAEQgKAEgOAAQgUAAgMgIg");
	this.shape_109.setTransform(-76.4,212);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FF0000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIARgCQAVgDALgDIAAgEQABgKgGgEQgIgGgNAAQgNAAgGAEQgHAEgDAKIgSgCQADgKAFgGQAGgHALgDQALgEANAAQAPAAAIADQAJADAFAFQADAEACAHIACAPIAAAVQAAAXABAGQAAAGAEAGIgUAAQgCgFgBgHQgLAIgKADQgIADgLAAQgTAAgJgIgAgEAGIgQADQgFACgDAEQgCADAAAFQAAAGAGAFQAFAEAMAAQAJAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_110.setTransform(-87.7,212);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FF0000").s().p("AgJBDIAAiFIASAAIAACFg");
	this.shape_111.setTransform(-96.1,210.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FF0000").s().p("AgeBAQgOgGgIgKQgIgLAAgNIATgBQABAJAFAHQAFAGALAFQAKADAMABQAMAAAJgDQAJgEAEgFQAFgFAAgHQAAgGgFgFQgEgEgJgEIgbgGQgVgEgIgDQgLgGgGgHQgFgIAAgJQAAgJAGgKQAHgIANgFQAMgFAQAAQAQABANAFQANAEAHAJQAHAKABAMIgUABQgBgNgKgGQgJgHgRAAQgSAAgIAGQgJAGAAAIQAAAIAGAEQAGAFAYAFQAZAFAJAEQANADAHAJQAGAIAAALQAAALgHAKQgHAJgNAFQgNAFgRABQgTgBgPgFg");
	this.shape_112.setTransform(-105.7,210.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FF0000").s().p("AAaAyIAAg6QAAgKgCgFQgCgFgFgDQgGgDgIAAQgLAAgIAGQgJAHAAATIAAA0IgTAAIAAhgIARAAIAAANQAMgQAWAAQAKAAAJAEQAIADAEAFQAFAFABAHIABAQIAAA7g");
	this.shape_113.setTransform(-124.7,211.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FF0000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_114.setTransform(-136.7,212);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FF0000").s().p("AgiAmQgNgNAAgYQAAgPAFgMQAHgMALgGQANgGANAAQASAAAMAIQAMAIACAPIgSADQgDgKgGgFQgHgFgJAAQgOAAgIAJQgJAJAAASQAAAUAJAJQAIAIANAAQALAAAHgGQAIgGACgMIASACQgDARgMAKQgNAJgSAAQgWAAgOgNg");
	this.shape_115.setTransform(-147.6,212);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FF0000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_116.setTransform(-165.3,212);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FF0000").s().p("AgCA/QgGgDgCgEQgCgFgBgPIAAg3IgNAAIAAgMIANAAIAAgZIASgJIAAAiIATAAIAAAMIgTAAIAAA4QAAAHABACIAEADQACACAEAAIAIgBIADAPIgOABQgLAAgEgDg");
	this.shape_117.setTransform(-174,210.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FF0000").s().p("AAaAyIAAg6QAAgKgCgFQgCgFgFgDQgGgDgIAAQgLAAgIAGQgJAHAAATIAAA0IgTAAIAAhgIARAAIAAANQAMgQAWAAQAKAAAJAEQAIADAEAFQAFAFABAHIABAQIAAA7g");
	this.shape_118.setTransform(-183.2,211.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FF0000").s().p("AgYAvQgJgEgEgFQgEgFgCgHQgBgFAAgKIAAg8IATAAIAAA1IABARQACAHAGAEQAFAEAJAAQAHAAAIgEQAHgEADgHQADgGAAgNIAAgzIATAAIAABgIgRAAIAAgOQgNAQgVAAQgKAAgIgCg");
	this.shape_119.setTransform(-195.2,212.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FF0000").s().p("AgfA6QgKgKAAgUIASgDQABAQAGAGQAGAFAKAAQAHAAAFgDQAGgDACgFQACgFAAgMIAAhbIAUAAIAABaQAAARgEAJQgFAJgKAFQgKAFgNAAQgUAAgLgKg");
	this.shape_120.setTransform(-207,210.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FF0000").s().p("AgKAJIAAgRIAVAAIAAARg");
	this.shape_121.setTransform(-220.6,216);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FF0000").s().p("AgfArQgLgIgDgPIATgDQABAKAHAFQAHAFAMAAQANAAAHgEQAGgFAAgGQAAgGgGgDQgEgCgPgDQgUgFgIgDQgIgDgEgGQgEgGAAgHQAAgGADgGQAEgFAGgEQAEgDAIgCQAHgCAJAAQAMAAAKAEQAKADAFAGQAEAFACAKIgSACQgCgIgGgEQgGgEgKAAQgNAAgFAEQgGADAAAFQAAAEADACQACADAFACIAPAEQAUAEAIADQAIACAFAGQAEAGAAAIQAAAIgFAIQgGAHgKAEQgKAEgOAAQgUAAgMgIg");
	this.shape_122.setTransform(-229.1,212);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FF0000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_123.setTransform(-240.4,212);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FF0000").s().p("AgYA+QgLgHgGgLQgGgMAAgPQAAgOAFgLQAGgMALgGQALgHAOAAQAJABAIAEQAHADAFAGIAAgwIATAAIAACFIgRAAIAAgNQgLAPgUAAQgNAAgLgGgAgUgKQgIAJAAASQAAATAJAJQAJAKALgBQANAAAIgIQAJgJAAgSQAAgTgJgKQgJgJgNAAQgLAAgJAJg");
	this.shape_124.setTransform(-252.7,210.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FF0000").s().p("AgIBDIAAhgIARAAIAABggAgIgvIAAgTIARAAIAAATg");
	this.shape_125.setTransform(-260.7,210.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FF0000").s().p("AAaAyIAAg6QAAgKgCgFQgCgFgFgDQgGgDgIAAQgLAAgIAGQgJAHAAATIAAA0IgTAAIAAhgIARAAIAAANQAMgQAWAAQAKAAAJAEQAIADAEAFQAFAFABAHIABAQIAAA7g");
	this.shape_126.setTransform(-269.1,211.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FF0000").s().p("AgYAvQgJgEgEgFQgEgFgCgHQgBgFAAgKIAAg8IATAAIAAA1IABARQACAHAGAEQAFAEAJAAQAHAAAIgEQAHgEADgHQADgGAAgNIAAgzIATAAIAABgIgRAAIAAgOQgNAQgVAAQgKAAgIgCg");
	this.shape_127.setTransform(-281.1,212.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FF0000").s().p("AgfArQgLgIgDgPIATgDQABAKAHAFQAHAFAMAAQANAAAHgEQAGgFAAgGQAAgGgGgDQgEgCgPgDQgUgFgIgDQgIgDgEgGQgEgGAAgHQAAgGADgGQAEgFAGgEQAEgDAIgCQAHgCAJAAQAMAAAKAEQAKADAFAGQAEAFACAKIgSACQgCgIgGgEQgGgEgKAAQgNAAgFAEQgGADAAAFQAAAEADACQACADAFACIAPAEQAUAEAIADQAIACAFAGQAEAGAAAIQAAAIgFAIQgGAHgKAEQgKAEgOAAQgUAAgMgIg");
	this.shape_128.setTransform(247.6,188.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FF0000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_129.setTransform(236.3,188.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FF0000").s().p("AgYA+QgLgGgGgMQgGgLAAgPQAAgPAFgLQAGgMALgGQALgHAOAAQAJAAAIAFQAHADAFAGIAAgwIATAAIAACFIgRAAIAAgNQgLAPgUAAQgNAAgLgGgAgUgKQgIAJAAATQAAASAJAJQAJAKALgBQANAAAIgIQAJgJAAgSQAAgTgJgJQgJgKgNAAQgLAAgJAJg");
	this.shape_130.setTransform(224,186.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FF0000").s().p("AgpArQgJgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIAQgCQAXgDAKgDIABgEQgBgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQACgKAHgGQAFgHALgDQALgEANAAQAOAAAKADQAIADAEAFQAFAEACAHIAAAPIAAAVQABAXAAAGQACAGADAGIgUAAQgCgFgBgHQgKAIgKADQgJADgLAAQgSAAgLgIgAgEAGIgQADQgFACgCAEQgDADAAAFQAAAGAFAFQAHAEALAAQAJAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_131.setTransform(212.4,188.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FF0000").s().p("AgCA/QgGgDgCgEQgCgFgBgPIAAg3IgNAAIAAgMIANAAIAAgZIASgJIAAAiIATAAIAAAMIgTAAIAAA4QAAAHABACIAEADQACACAEAAIAIgBIADAPIgOABQgLAAgEgDg");
	this.shape_132.setTransform(203.6,186.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FF0000").s().p("AgfArQgLgIgDgPIATgDQABAKAHAFQAHAFAMAAQANAAAHgEQAGgFAAgGQAAgGgGgDQgEgCgPgDQgUgFgIgDQgIgDgEgGQgEgGAAgHQAAgGADgGQAEgFAGgEQAEgDAIgCQAHgCAJAAQAMAAAKAEQAKADAFAGQAEAFACAKIgSACQgCgIgGgEQgGgEgKAAQgNAAgFAEQgGADAAAFQAAAEADACQACADAFACIAPAEQAUAEAIADQAIACAFAGQAEAGAAAIQAAAIgFAIQgGAHgKAEQgKAEgOAAQgUAAgMgIg");
	this.shape_133.setTransform(195.1,188.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FF0000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_134.setTransform(183.8,188.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FF0000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_135.setTransform(165.9,188.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FF0000").s().p("AgYA+QgLgGgGgMQgGgLAAgPQAAgPAFgLQAGgMALgGQALgHAOAAQAJAAAIAFQAHADAFAGIAAgwIATAAIAACFIgRAAIAAgNQgLAPgUAAQgNAAgLgGgAgUgKQgIAJAAATQAAASAJAJQAJAKALgBQANAAAIgIQAJgJAAgSQAAgTgJgJQgJgKgNAAQgLAAgJAJg");
	this.shape_136.setTransform(153.6,186.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FF0000").s().p("AgdAyIAAhgIARAAIAAAOQAGgKAGgDQAEgEAHAAQAJAAAKAGIgGAPQgHgEgHAAQgGAAgEAEQgFADgCAGQgDAIAAALIAAAyg");
	this.shape_137.setTransform(139.3,188.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FF0000").s().p("AgYAvQgJgEgEgFQgEgFgCgHQgBgFAAgKIAAg8IATAAIAAA1IABASQACAGAGAEQAFAEAJAAQAHAAAIgEQAHgEADgGQADgHAAgMIAAg0IATAAIAABhIgRAAIAAgPQgNAQgVAAQgKAAgIgCg");
	this.shape_138.setTransform(128.8,188.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FF0000").s().p("AgfArQgLgIgDgPIATgDQABAKAHAFQAHAFAMAAQANAAAHgEQAGgFAAgGQAAgGgGgDQgEgCgPgDQgUgFgIgDQgIgDgEgGQgEgGAAgHQAAgGADgGQAEgFAGgEQAEgDAIgCQAHgCAJAAQAMAAAKAEQAKADAFAGQAEAFACAKIgSACQgCgIgGgEQgGgEgKAAQgNAAgFAEQgGADAAAFQAAAEADACQACADAFACIAPAEQAUAEAIADQAIACAFAGQAEAGAAAIQAAAIgFAIQgGAHgKAEQgKAEgOAAQgUAAgMgIg");
	this.shape_139.setTransform(117.5,188.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FF0000").s().p("AgIBDIAAiFIASAAIAACFg");
	this.shape_140.setTransform(103.8,186.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FF0000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_141.setTransform(95.5,188.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FF0000").s().p("AAaAyIAAg6QAAgKgCgFQgCgFgFgDQgGgDgIAAQgLAAgIAGQgJAHAAATIAAA0IgTAAIAAhgIARAAIAAANQAMgQAWAAQAKAAAJAEQAIADAEAFQAFAFABAHIABAQIAAA7g");
	this.shape_142.setTransform(77.6,188.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FF0000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_143.setTransform(65.6,188.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FF0000").s().p("AgpArQgJgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIAQgCQAXgDAKgDIAAgEQAAgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQACgKAHgGQAFgHALgDQALgEANAAQAOAAAKADQAJADADAFQAFAEACAHIAAAPIAAAVQAAAXABAGQABAGAEAGIgTAAQgEgFAAgHQgKAIgKADQgJADgLAAQgSAAgLgIgAgDAGIgRADQgFACgCAEQgDADAAAFQAAAGAFAFQAHAEAKAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_144.setTransform(47.8,188.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FF0000").s().p("AgIBDIAAhgIARAAIAABggAgIgvIAAgTIARAAIAAATg");
	this.shape_145.setTransform(39.4,186.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FF0000").s().p("AgiAmQgNgNAAgYQAAgPAFgMQAGgMAMgGQANgGANAAQASAAAMAIQAMAIACAPIgSADQgDgKgGgFQgGgFgKAAQgOAAgIAJQgJAJAAASQAAAUAJAJQAIAIANAAQALAAAHgGQAIgGACgMIASACQgDARgMAKQgNAJgSAAQgWAAgOgNg");
	this.shape_146.setTransform(32,188.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FF0000").s().p("AAaAyIAAg6QAAgKgCgFQgCgFgFgDQgGgDgIAAQgLAAgIAGQgJAHAAATIAAA0IgTAAIAAhgIARAAIAAANQAMgQAWAAQAKAAAJAEQAIADAEAFQAFAFABAHIABAQIAAA7g");
	this.shape_147.setTransform(20.3,188.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FF0000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_148.setTransform(8.3,188.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FF0000").s().p("AghAmQgOgNgBgYQAAgPAHgMQAFgMANgGQAMgGANAAQASAAAMAIQAMAIADAPIgTADQgCgKgHgFQgGgFgKAAQgOAAgJAJQgIAJAAASQAAAUAIAJQAJAIANAAQALAAAIgGQAHgGACgMIATACQgDARgNAKQgNAJgSAAQgWAAgNgNg");
	this.shape_149.setTransform(-2.6,188.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FF0000").s().p("AgfArQgLgIgDgPIATgDQABAKAHAFQAHAFAMAAQANAAAHgEQAGgFAAgGQAAgGgGgDQgEgCgPgDQgUgFgIgDQgIgDgEgGQgEgGAAgHQAAgGADgGQAEgFAGgEQAEgDAIgCQAHgCAJAAQAMAAAKAEQAKADAFAGQAEAFACAKIgSACQgCgIgGgEQgGgEgKAAQgNAAgFAEQgGADAAAFQAAAEADACQACADAFACIAPAEQAUAEAIADQAIACAFAGQAEAGAAAIQAAAIgFAIQgGAHgKAEQgKAEgOAAQgUAAgMgIg");
	this.shape_150.setTransform(-13.8,188.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FF0000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_151.setTransform(-25.1,188.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FF0000").s().p("AgJBDIAAiFIASAAIAACFg");
	this.shape_152.setTransform(-33.5,186.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FF0000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_153.setTransform(-41.8,188.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FF0000").s().p("AgYA+QgLgGgGgMQgGgLAAgPQAAgPAFgLQAGgMALgGQALgHAOAAQAJAAAIAFQAHADAFAGIAAgwIATAAIAACFIgRAAIAAgNQgLAPgUAAQgNAAgLgGgAgUgKQgIAJAAATQAAASAJAJQAJAKALgBQANAAAIgIQAJgJAAgSQAAgTgJgJQgJgKgNAAQgLAAgJAJg");
	this.shape_154.setTransform(-54.1,186.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FF0000").s().p("AgpArQgJgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIAQgCQAXgDAKgDIABgEQgBgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQACgKAHgGQAFgHALgDQALgEANAAQAOAAAKADQAIADAEAFQAFAEACAHIAAAPIAAAVQAAAXABAGQACAGADAGIgUAAQgCgFgBgHQgKAIgKADQgJADgLAAQgSAAgLgIgAgEAGIgQADQgFACgCAEQgDADAAAFQAAAGAFAFQAHAEAKAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_155.setTransform(-65.7,188.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FF0000").s().p("AgoBCIgDgPIALABQAHAAADgCQAFgBABgEIAHgMIABgEIgqhgIAVAAIAWA4IAHAVIAJgVIAXg4IATAAIgqBhQgHAQgDAGQgFAJgHADQgGAEgJAAQgGAAgGgCg");
	this.shape_156.setTransform(-82.8,190.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FF0000").s().p("AgpArQgJgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIAQgCQAXgDAKgDIAAgEQAAgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQACgKAHgGQAFgHALgDQALgEANAAQAOAAAKADQAJADADAFQAFAEABAHIABAPIAAAVQAAAXABAGQABAGAEAGIgTAAQgEgFAAgHQgKAIgKADQgJADgLAAQgSAAgLgIgAgDAGIgRADQgFACgCAEQgDADAAAFQAAAGAFAFQAHAEAKAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_157.setTransform(-100.3,188.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FF0000").s().p("AgIBDIAAhgIARAAIAABggAgIgvIAAgTIARAAIAAATg");
	this.shape_158.setTransform(-108.6,186.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FF0000").s().p("AghAmQgOgNgBgYQAAgPAHgMQAFgMANgGQAMgGANAAQASAAAMAIQAMAIADAPIgTADQgCgKgHgFQgGgFgKAAQgOAAgJAJQgIAJAAASQAAAUAIAJQAJAIANAAQALAAAIgGQAHgGACgMIASACQgCARgNAKQgNAJgSAAQgWAAgNgNg");
	this.shape_159.setTransform(-116,188.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FF0000").s().p("AAaAyIAAg6QAAgKgCgFQgCgFgFgDQgGgDgIAAQgLAAgIAGQgJAHAAATIAAA0IgTAAIAAhgIARAAIAAANQAMgQAWAAQAKAAAJAEQAIADAEAFQAFAFABAHIABAQIAAA7g");
	this.shape_160.setTransform(-127.7,188.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FF0000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIAQgCQAWgDALgDIAAgEQABgKgGgEQgHgGgOAAQgNAAgGAEQgHAEgDAKIgSgCQADgKAGgGQAFgHALgDQALgEANAAQAOAAAJADQAJADAFAFQADAEACAHIABAPIAAAVQAAAXABAGQACAGADAGIgTAAQgDgFgBgHQgKAIgLADQgIADgLAAQgTAAgJgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAFAFQAHAEAKAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_161.setTransform(-139.7,188.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FF0000").s().p("AgPBEIAAhTIgRAAIAAgNIARAAIAAgKQAAgKACgFQADgGAHgEQAFgEANAAIASABIgEAPIgLgBQgIAAgDADQgEADAAAJIAAAJIAWAAIAAANIgWAAIAABTg");
	this.shape_162.setTransform(-148.1,186.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FF0000").s().p("AAaAyIAAg6QAAgKgCgFQgCgFgFgDQgGgDgIAAQgLAAgIAGQgJAHAAATIAAA0IgTAAIAAhgIARAAIAAANQAMgQAWAAQAKAAAJAEQAIADAEAFQAFAFABAHIABAQIAAA7g");
	this.shape_163.setTransform(-157.6,188.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FF0000").s().p("AgIBDIAAhgIARAAIAABggAgIgvIAAgTIARAAIAAATg");
	this.shape_164.setTransform(-165.9,186.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FF0000").s().p("AgJBDIAAiFIASAAIAACFg");
	this.shape_165.setTransform(-176.7,186.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FF0000").s().p("AgIBDIAAhgIARAAIAABggAgIgvIAAgTIARAAIAAATg");
	this.shape_166.setTransform(-181.4,186.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FF0000").s().p("AgiAmQgOgNABgYQAAgPAFgMQAHgMALgGQAMgGAOAAQASAAAMAIQALAIADAPIgSADQgDgKgGgFQgHgFgJAAQgNAAgJAJQgJAJAAASQAAAUAJAJQAIAIANAAQALAAAHgGQAIgGACgMIATACQgEARgMAKQgNAJgSAAQgWAAgOgNg");
	this.shape_167.setTransform(-188.8,188.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FF0000").s().p("AgSBEIAAhhIASAAIAABhgAgSgpIANgZIAYAAIgWAZg");
	this.shape_168.setTransform(-196.6,186.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FF0000").s().p("AgPBEIAAhTIgQAAIAAgNIAQAAIAAgKQAAgKACgFQADgGAHgEQAFgEANAAIARABIgCAPIgLgBQgJAAgEADQgDADAAAJIAAAJIAVAAIAAANIgVAAIAABTg");
	this.shape_169.setTransform(-202.9,186.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FF0000").s().p("AgIBDIAAhgIARAAIAABggAgIgvIAAgTIARAAIAAATg");
	this.shape_170.setTransform(-208.8,186.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FF0000").s().p("AgYA+QgLgGgGgMQgGgLAAgPQAAgPAFgLQAGgMALgGQALgHAOAAQAJAAAIAFQAHADAFAGIAAgwIATAAIAACFIgRAAIAAgNQgLAPgUAAQgNAAgLgGgAgUgKQgIAJAAATQAAASAJAJQAJAKALgBQANAAAIgIQAJgJAAgSQAAgTgJgJQgJgKgNAAQgLAAgJAJg");
	this.shape_171.setTransform(-217.6,186.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FF0000").s().p("AgYAvQgJgEgEgFQgEgFgCgHQgBgFAAgKIAAg8IATAAIAAA1IABASQACAGAGAEQAFAEAJAAQAHAAAIgEQAHgEADgGQADgHAAgMIAAg0IATAAIAABhIgRAAIAAgPQgNAQgVAAQgKAAgIgCg");
	this.shape_172.setTransform(-235.2,188.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FF0000").s().p("AgfArQgLgIgDgPIATgDQABAKAHAFQAHAFAMAAQANAAAHgEQAGgFAAgGQAAgGgGgDQgEgCgPgDQgUgFgIgDQgIgDgEgGQgEgGAAgHQAAgGADgGQAEgFAGgEQAEgDAIgCQAHgCAJAAQAMAAAKAEQAKADAFAGQAEAFACAKIgSACQgCgIgGgEQgGgEgKAAQgNAAgFAEQgGADAAAFQAAAEADACQACADAFACIAPAEQAUAEAIADQAIACAFAGQAEAGAAAIQAAAIgFAIQgGAHgKAEQgKAEgOAAQgUAAgMgIg");
	this.shape_173.setTransform(-246.5,188.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FF0000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_174.setTransform(-263.7,188.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FF0000").s().p("AgYA+QgLgGgGgMQgGgLAAgPQAAgPAFgLQAGgMALgGQALgHAOAAQAJAAAIAFQAHADAFAGIAAgwIATAAIAACFIgRAAIAAgNQgLAPgUAAQgNAAgLgGgAgUgKQgIAJAAATQAAASAJAJQAJAKALgBQANAAAIgIQAJgJAAgSQAAgTgJgJQgJgKgNAAQgLAAgJAJg");
	this.shape_175.setTransform(-276,186.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FF0000").s().p("AgfArQgLgIgDgPIATgDQABAKAHAFQAHAFAMAAQANAAAHgEQAGgFAAgGQAAgGgGgDQgEgCgPgDQgUgFgIgDQgIgDgEgGQgEgGAAgHQAAgGADgGQAEgFAGgEQAEgDAIgCQAHgCAJAAQAMAAAKAEQAKADAFAGQAEAFACAKIgSACQgCgIgGgEQgGgEgKAAQgNAAgFAEQgGADAAAFQAAAEADACQACADAFACIAPAEQAUAEAIADQAIACAFAGQAEAGAAAIQAAAIgFAIQgGAHgKAEQgKAEgOAAQgUAAgMgIg");
	this.shape_176.setTransform(276.3,165);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FF0000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIARgCQAVgDALgDIAAgEQABgKgGgEQgHgGgOAAQgNAAgGAEQgHAEgDAKIgSgCQADgKAFgGQAGgHALgDQALgEANAAQAPAAAIADQAJADAFAFQADAEACAHIABAPIAAAVQAAAXACAGQAAAGAEAGIgTAAQgDgFgBgHQgLAIgKADQgIADgLAAQgSAAgKgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAGAFQAGAEAKAAQAKAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_177.setTransform(265,165);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FF0000").s().p("AghAmQgPgNAAgYQABgPAFgMQAGgMANgGQALgGAOAAQASAAAMAIQAMAIADAPIgTADQgCgKgHgFQgHgFgJAAQgOAAgJAJQgIAJAAASQAAAUAIAJQAJAIANAAQALAAAHgGQAIgGACgMIASACQgCARgNAKQgNAJgSAAQgWAAgNgNg");
	this.shape_178.setTransform(254,165);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FF0000").s().p("AgIBDIAAhgIARAAIAABggAgIgwIAAgSIARAAIAAASg");
	this.shape_179.setTransform(245.9,163.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FF0000").s().p("AgCA/QgGgDgCgEQgDgFABgPIAAg3IgOAAIAAgMIAOAAIAAgZIARgJIAAAiIATAAIAAAMIgTAAIAAA4QAAAHABACIADADQADACAEAAIAIgBIADAPIgOABQgKAAgFgDg");
	this.shape_180.setTransform(240.7,163.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FF0000").s().p("AgkA4QgOgNAAgZQAAgXAOgOQAPgNAWAAQAWAAAOANQAOAOAAAWIAAAFIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAIQgMAJgTgBQgYABgOgNgAgUgLQgJAIgBALIA9AAQgBgLgGgGQgJgKgOAAQgMAAgJAIgAgKgqIANgZIAZAAIgXAZg");
	this.shape_181.setTransform(231.5,163.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FF0000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_182.setTransform(219.6,165);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FF0000").s().p("AgwBEIAAiFIASAAIAAANQAGgIAIgDQAHgFAKAAQAOABAMAGQAKAHAFALQAHAMgBAOQAAAPgGALQgGAMgMAGQgMAGgMAAQgIAAgIgEQgHgDgGgFIAAAvgAgVgsQgKAJAAATQAAARAJAJQAJAKAMgBQAMABAJgKQAJgJAAgSQAAgTgIgJQgKgJgLAAQgMAAgJAKg");
	this.shape_183.setTransform(208,166.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FF0000").s().p("AgoBCIgDgPIAMABQAGAAAEgCQADgBACgEIAGgMIACgEIgqhgIAVAAIAWA4IAHAVIAIgVIAYg4IATAAIgrBhQgGAQgDAGQgFAJgGADQgHAEgJAAQgFAAgHgCg");
	this.shape_184.setTransform(190.5,167);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FF0000").s().p("AgfArQgLgIgDgPIATgDQABAKAHAFQAHAFAMAAQANAAAHgEQAGgFAAgGQAAgGgGgDQgEgCgPgDQgUgFgIgDQgIgDgEgGQgEgGAAgHQAAgGADgGQAEgFAGgEQAEgDAIgCQAHgCAJAAQAMAAAKAEQAKADAFAGQAEAFACAKIgSACQgCgIgGgEQgGgEgKAAQgNAAgFAEQgGADAAAFQAAAEADACQACADAFACIAPAEQAUAEAIADQAIACAFAGQAEAGAAAIQAAAIgFAIQgGAHgKAEQgKAEgOAAQgUAAgMgIg");
	this.shape_185.setTransform(173.7,165);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FF0000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIARgCQAVgDALgDIAAgEQABgKgGgEQgHgGgOAAQgNAAgGAEQgHAEgDAKIgSgCQADgKAFgGQAGgHALgDQALgEANAAQAPAAAIADQAJADAFAFQADAEACAHIABAPIAAAVQAAAXACAGQAAAGAEAGIgTAAQgDgFgBgHQgLAIgKADQgIADgLAAQgSAAgKgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAGAFQAGAEAKAAQAKAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_186.setTransform(162.4,165);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FF0000").s().p("AgYA+QgLgGgGgMQgGgMAAgOQAAgPAFgLQAGgMALgGQALgGAOgBQAJAAAIAFQAHADAFAGIAAgwIATAAIAACFIgRAAIAAgMQgLAOgUAAQgNAAgLgGgAgUgKQgIAJAAATQAAASAJAJQAJAKALgBQANAAAIgIQAJgJAAgSQAAgTgJgJQgJgKgNAAQgLAAgJAJg");
	this.shape_187.setTransform(150.1,163.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FF0000").s().p("AAaAyIAAg6QAAgKgCgFQgCgFgFgDQgGgDgIAAQgLAAgIAGQgJAHAAATIAAA0IgTAAIAAhgIARAAIAAANQAMgQAWAAQAKAAAJAEQAIADAEAFQAFAFABAHIABAQIAAA7g");
	this.shape_188.setTransform(138.5,164.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FF0000").s().p("AgYAvQgJgEgEgFQgEgFgCgHQgBgFAAgKIAAg8IATAAIAAA1IABASQACAGAGAEQAFADAJAAQAHAAAIgDQAHgEADgGQADgHAAgMIAAg0IATAAIAABhIgRAAIAAgPQgNAQgVAAQgKAAgIgCg");
	this.shape_189.setTransform(126.5,165.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FF0000").s().p("AgPBEIAAhTIgRAAIAAgNIARAAIAAgKQAAgKACgFQADgGAHgEQAFgEANAAIARABIgDAPIgKgBQgJAAgEADQgDADAAAJIAAAJIAVAAIAAANIgVAAIAABTg");
	this.shape_190.setTransform(118.1,163.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FF0000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_191.setTransform(108.6,165);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FF0000").s().p("AgdAyIAAhgIARAAIAAAOQAGgKAGgDQAEgEAHAAQAJAAAKAGIgGAPQgHgEgHAAQgGAAgEAEQgFADgCAGQgDAIAAALIAAAyg");
	this.shape_192.setTransform(100,164.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FF0000").s().p("AgwBEIAAiFIASAAIAAANQAGgIAIgDQAHgFAKAAQAPABALAGQAKAHAGALQAFAMAAAOQAAAPgGALQgGAMgLAGQgMAGgNAAQgJAAgHgEQgHgDgFgFIAAAvgAgVgsQgKAJAAATQABARAIAJQAJAKANgBQALABAJgKQAJgJAAgSQAAgTgJgJQgJgJgLAAQgLAAgKAKg");
	this.shape_193.setTransform(89.9,166.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FF0000").s().p("AgfArQgLgIgDgPIATgDQABAKAHAFQAHAFAMAAQANAAAHgEQAGgFAAgGQAAgGgGgDQgEgCgPgDQgUgFgIgDQgIgDgEgGQgEgGAAgHQAAgGADgGQAEgFAGgEQAEgDAIgCQAHgCAJAAQAMAAAKAEQAKADAFAGQAEAFACAKIgSACQgCgIgGgEQgGgEgKAAQgNAAgFAEQgGADAAAFQAAAEADACQACADAFACIAPAEQAUAEAIADQAIACAFAGQAEAGAAAIQAAAIgFAIQgGAHgKAEQgKAEgOAAQgUAAgMgIg");
	this.shape_194.setTransform(72.2,165);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FF0000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_195.setTransform(60.9,165);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FF0000").s().p("AAaAyIAAg6QAAgKgCgFQgCgFgFgDQgGgDgIAAQgLAAgIAGQgJAHAAATIAAA0IgTAAIAAhgIARAAIAAANQAMgQAWAAQAKAAAJAEQAIADAEAFQAFAFABAHIABAQIAAA7g");
	this.shape_196.setTransform(49,164.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FF0000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_197.setTransform(37,165);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FF0000").s().p("AgIBDIAAhgIARAAIAABggAgIgwIAAgSIARAAIAAASg");
	this.shape_198.setTransform(28.7,163.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FF0000").s().p("AgiAmQgOgNABgYQAAgPAFgMQAHgMALgGQAMgGAOAAQASAAAMAIQALAIADAPIgSADQgCgKgHgFQgHgFgJAAQgNAAgJAJQgJAJAAASQAAAUAJAJQAIAIANAAQALAAAHgGQAIgGACgMIATACQgEARgMAKQgNAJgSAAQgWAAgOgNg");
	this.shape_199.setTransform(21.3,165);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FF0000").s().p("AAaAyIAAg6QAAgKgCgFQgCgFgFgDQgGgDgIAAQgLAAgIAGQgJAHAAATIAAA0IgTAAIAAhgIARAAIAAANQAMgQAWAAQAKAAAJAEQAIADAEAFQAFAFABAHIABAQIAAA7g");
	this.shape_200.setTransform(9.6,164.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FF0000").s().p("AgpArQgJgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIAQgCQAWgDALgDIABgEQgBgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQACgKAGgGQAGgHALgDQALgEANAAQAPAAAJADQAIADAEAFQAEAEADAHIABAPIAAAVQAAAXABAGQABAGADAGIgUAAQgDgFAAgHQgLAIgJADQgJADgLAAQgSAAgLgIgAgEAGIgQADQgFACgCAEQgDADAAAFQAAAGAFAFQAGAEAMAAQAJAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_201.setTransform(-2.4,165);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FF0000").s().p("AgiAmQgOgNABgYQAAgPAFgMQAHgMALgGQAMgGAOAAQASAAAMAIQALAIADAPIgSADQgDgKgGgFQgHgFgJAAQgNAAgJAJQgJAJAAASQAAAUAJAJQAIAIANAAQALAAAHgGQAIgGACgMIATACQgEARgMAKQgNAJgSAAQgWAAgOgNg");
	this.shape_202.setTransform(-13.3,165);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FF0000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_203.setTransform(-31,165);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FF0000").s().p("AgYA+QgLgGgGgMQgGgMAAgOQAAgPAFgLQAGgMALgGQALgGAOgBQAJAAAIAFQAHADAFAGIAAgwIATAAIAACFIgRAAIAAgMQgLAOgUAAQgNAAgLgGgAgUgKQgIAJAAATQAAASAJAJQAJAKALgBQANAAAIgIQAJgJAAgSQAAgTgJgJQgJgKgNAAQgLAAgJAJg");
	this.shape_204.setTransform(-43.3,163.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FF0000").s().p("AAaAyIAAg6QAAgKgCgFQgCgFgFgDQgGgDgIAAQgLAAgIAGQgJAHAAATIAAA0IgTAAIAAhgIARAAIAAANQAMgQAWAAQAKAAAJAEQAIADAEAFQAFAFABAHIABAQIAAA7g");
	this.shape_205.setTransform(-54.9,164.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FF0000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_206.setTransform(-66.9,165);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FF0000").s().p("AgIBDIAAhgIARAAIAABggAgIgwIAAgSIARAAIAAASg");
	this.shape_207.setTransform(-75.2,163.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FF0000").s().p("AgeA2IAAAMIgRAAIAAiFIATAAIAAAwQAMgNARgBQAKABAKADQAJAEAGAHQAGAGADAJQADAIAAALQAAAZgOANQgOAOgUAAQgSAAgMgOgAgVgJQgJAJAAARQAAARAGAIQAIAMAQAAQALABAJgKQAJgJAAgSQAAgTgJgJQgIgJgMAAQgMAAgJAKg");
	this.shape_208.setTransform(-83.3,163.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FF0000").s().p("AgIBDIAAhgIARAAIAABggAgIgwIAAgSIARAAIAAASg");
	this.shape_209.setTransform(-91.9,163.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FF0000").s().p("AgdAyIAAhgIARAAIAAAOQAGgKAGgDQAEgEAHAAQAJAAAKAGIgGAPQgHgEgHAAQgGAAgEAEQgFADgCAGQgDAIAAALIAAAyg");
	this.shape_210.setTransform(-97,164.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FF0000").s().p("AgiAmQgOgNABgYQAAgPAFgMQAHgMALgGQAMgGAOAAQASAAAMAIQALAIADAPIgSADQgDgKgGgFQgHgFgJAAQgNAAgJAJQgJAJAAASQAAAUAJAJQAIAIANAAQALAAAHgGQAIgGACgMIATACQgEARgMAKQgNAJgSAAQgWAAgOgNg");
	this.shape_211.setTransform(-106.5,165);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FF0000").s().p("AgfArQgLgIgDgPIATgDQABAKAHAFQAHAFAMAAQANAAAHgEQAGgFAAgGQAAgGgGgDQgEgCgPgDQgUgFgIgDQgIgDgEgGQgEgGAAgHQAAgGADgGQAEgFAGgEQAEgDAIgCQAHgCAJAAQAMAAAKAEQAKADAFAGQAEAFACAKIgSACQgCgIgGgEQgGgEgKAAQgNAAgFAEQgGADAAAFQAAAEADACQACADAFACIAPAEQAUAEAIADQAIACAFAGQAEAGAAAIQAAAIgFAIQgGAHgKAEQgKAEgOAAQgUAAgMgIg");
	this.shape_212.setTransform(-117.7,165);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FF0000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_213.setTransform(-128.9,165);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FF0000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_214.setTransform(-146.8,165);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FF0000").s().p("AgdAyIAAhgIARAAIAAAOQAGgKAGgDQAEgEAHAAQAJAAAKAGIgGAPQgHgEgHAAQgGAAgEAEQgFADgCAGQgDAIAAALIAAAyg");
	this.shape_215.setTransform(-155.5,164.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FF0000").s().p("AgYAvQgJgEgEgFQgEgFgCgHQgBgFAAgKIAAg8IATAAIAAA1IABASQACAGAGAEQAFADAJAAQAHAAAIgDQAHgEADgGQADgHAAgMIAAg0IATAAIAABhIgRAAIAAgPQgNAQgVAAQgKAAgIgCg");
	this.shape_216.setTransform(-166,165.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FF0000").s().p("AgYA+QgLgGgGgMQgGgMAAgOQAAgPAFgLQAGgMALgGQALgGAOgBQAJAAAIAFQAHADAFAGIAAgwIATAAIAACFIgRAAIAAgMQgLAOgUAAQgNAAgLgGgAgUgKQgIAJAAATQAAASAJAJQAJAKALgBQANAAAIgIQAJgJAAgSQAAgTgJgJQgJgKgNAAQgLAAgJAJg");
	this.shape_217.setTransform(-178.2,163.3);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FF0000").s().p("AAWBDIgjgxIgNALIAAAmIgTAAIAAiFIATAAIAABMIAsgnIAYAAIgqAjIAuA9g");
	this.shape_218.setTransform(-194.4,163.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FF0000").s().p("AgiAmQgOgNABgYQAAgPAFgMQAHgMALgGQAMgGAOAAQASAAAMAIQALAIADAPIgSADQgDgKgGgFQgHgFgJAAQgNAAgJAJQgJAJAAASQAAAUAJAJQAIAIANAAQALAAAHgGQAIgGACgMIATACQgEARgMAKQgNAJgSAAQgWAAgOgNg");
	this.shape_219.setTransform(-205.5,165);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FF0000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_220.setTransform(-217.2,165);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FF0000").s().p("AgdAyIAAhgIARAAIAAAOQAGgKAGgDQAEgEAHAAQAJAAAKAGIgGAPQgHgEgHAAQgGAAgEAEQgFADgCAGQgDAIAAALIAAAyg");
	this.shape_221.setTransform(-225.9,164.9);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FF0000").s().p("AgIBDIAAiFIASAAIAACFg");
	this.shape_222.setTransform(-238.7,163.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FF0000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_223.setTransform(-247.1,165);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FF0000").s().p("AgYA+QgLgGgGgMQgGgMAAgOQAAgPAFgLQAGgMALgGQALgGAOgBQAJAAAIAFQAHADAFAGIAAgwIATAAIAACFIgRAAIAAgMQgLAOgUAAQgNAAgLgGgAgUgKQgIAJAAATQAAASAJAJQAJAKALgBQANAAAIgIQAJgJAAgSQAAgTgJgJQgJgKgNAAQgLAAgJAJg");
	this.shape_224.setTransform(-259.4,163.3);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FF0000").s().p("AgpArQgJgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIAQgCQAWgDALgDIABgEQgBgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQACgKAGgGQAGgHALgDQALgEANAAQAPAAAJADQAIADAEAFQAEAEADAHIABAPIAAAVQAAAXAAAGQACAGADAGIgUAAQgDgFAAgHQgLAIgJADQgJADgLAAQgSAAgLgIgAgEAGIgQADQgFACgCAEQgDADAAAFQAAAGAFAFQAGAEAMAAQAJAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_225.setTransform(-276.9,165);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FF0000").s().p("AgYA+QgLgGgGgMQgGgMAAgOQAAgPAFgLQAGgMALgGQALgGAOgBQAJAAAIAFQAHADAFAGIAAgwIATAAIAACFIgRAAIAAgMQgLAOgUAAQgNAAgLgGgAgUgKQgIAJAAATQAAASAJAJQAJAKALgBQANAAAIgIQAJgJAAgSQAAgTgJgJQgJgKgNAAQgLAAgJAJg");
	this.shape_226.setTransform(-289.2,163.3);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FF0000").s().p("AgIBDIAAhgIARAAIAABggAgIgwIAAgSIARAAIAAASg");
	this.shape_227.setTransform(-297.2,163.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FF0000").s().p("AgIAxIgqhhIAUAAIAYA5IAGAUIAHgSIAZg7IATAAIgqBhg");
	this.shape_228.setTransform(-304.9,165.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FF0000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_229.setTransform(274.4,141.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FF0000").s().p("AgYA+QgLgGgGgMQgGgMAAgOQAAgPAFgLQAGgMALgGQALgGAOgBQAJAAAIAFQAHADAFAGIAAgwIATAAIAACFIgRAAIAAgMQgLAOgUAAQgNAAgLgGgAgUgKQgIAJAAATQAAASAJAKQAJAJALAAQANAAAIgJQAJgJAAgSQAAgTgJgJQgJgKgNAAQgLAAgJAJg");
	this.shape_230.setTransform(262.1,139.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FF0000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_231.setTransform(244.6,141.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FF0000").s().p("AgJBDIAAiFIASAAIAACFg");
	this.shape_232.setTransform(236.2,139.7);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FF0000").s().p("AgIBDIAAhgIARAAIAABggAgIgwIAAgSIARAAIAAASg");
	this.shape_233.setTransform(231.4,139.7);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FF0000").s().p("AgCA/QgGgDgCgEQgDgFAAgPIAAg3IgNAAIAAgMIANAAIAAgZIASgJIAAAiIAUAAIAAAMIgUAAIAAA4QAAAHACACIADADQACACAEAAIAJgBIACAPIgOABQgLAAgEgDg");
	this.shape_234.setTransform(226.2,139.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FF0000").s().p("AgfArQgLgIgDgPIATgDQABAKAHAFQAHAFAMAAQANAAAHgEQAGgFAAgGQAAgGgGgDQgEgCgPgDQgUgFgIgDQgIgDgEgGQgEgGAAgHQAAgGADgGQAEgFAGgEQAEgDAIgCQAHgCAJAAQAMAAAKAEQAKADAFAGQAEAFACAKIgSACQgCgIgGgEQgGgEgKAAQgNAAgFAEQgGADAAAFQAAAEADACQACADAFACIAPAEQAUAEAIADQAIACAFAGQAEAGAAAIQAAAIgFAIQgGAHgKAEQgKAEgOAAQgUAAgMgIg");
	this.shape_235.setTransform(217.7,141.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FF0000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_236.setTransform(206.4,141.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FF0000").s().p("AgIBDIAAiFIASAAIAACFg");
	this.shape_237.setTransform(192,139.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FF0000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_238.setTransform(183.7,141.5);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FF0000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_239.setTransform(165.8,141.5);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FF0000").s().p("AgIAxIgqhgIAUAAIAYA4IAGAUIAHgTIAZg5IATAAIgqBgg");
	this.shape_240.setTransform(154.5,141.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FF0000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_241.setTransform(143.1,141.5);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FF0000").s().p("AgJBDIAAiFIASAAIAACFg");
	this.shape_242.setTransform(134.7,139.7);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FF0000").s().p("AgIBDIAAiFIASAAIAACFg");
	this.shape_243.setTransform(129.9,139.7);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FF0000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_244.setTransform(115.7,141.5);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FF0000").s().p("AgYAvQgJgEgEgFQgEgFgCgHQgBgFAAgKIAAg7IATAAIAAA0IABASQACAGAGAEQAFAEAJgBQAHABAIgEQAHgEADgGQADgHAAgMIAAgzIATAAIAABgIgRAAIAAgPQgNARgVAAQgKAAgIgDg");
	this.shape_245.setTransform(103.7,141.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FF0000").s().p("AAdBEIAAgwQgEAGgIADQgIAEgJAAQgTAAgOgNQgOgPAAgWQAAgPAGgMQAFgMAMgFQALgHANAAQATAAAMAQIAAgNIARAAIAACFgAgTgtQgJAJAAATQAAASAJAKQAJAJAMAAQAMAAAJgJQAIgJAAgRQAAgUgJgJQgJgKgMAAQgMAAgIAJg");
	this.shape_246.setTransform(91.4,143.3);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FF0000").s().p("AgfArQgLgIgDgPIATgDQABAKAHAFQAHAFAMAAQANAAAHgEQAGgFAAgGQAAgGgGgDQgEgCgPgDQgUgFgIgDQgIgDgEgGQgEgGAAgHQAAgGADgGQAEgFAGgEQAEgDAIgCQAHgCAJAAQAMAAAKAEQAKADAFAGQAEAFACAKIgSACQgCgIgGgEQgGgEgKAAQgNAAgFAEQgGADAAAFQAAAEADACQACADAFACIAPAEQAUAEAIADQAIACAFAGQAEAGAAAIQAAAIgFAIQgGAHgKAEQgKAEgOAAQgUAAgMgIg");
	this.shape_247.setTransform(74.4,141.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FF0000").s().p("AgiA3QgPgRAAgmQAAgXAGgOQAFgPALgIQALgIAQAAQAMAAAKAFQAJAEAGAIQAGAJAEALQADAMAAATQAAAYgFAOQgGAPgLAIQgLAIgRAAQgVAAgNgOgAgUgsQgKAMAAAgQAAAhAJALQAJALAMAAQANAAAJgLQAIgLABghQgBgggIgLQgJgLgNAAQgMAAgIAKg");
	this.shape_248.setTransform(63.1,139.8);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FF0000").s().p("AghA8QgMgJgCgQIASgBQACALAHAFQAHAFAKAAQAIAAAGgDQAHgEAEgGQAEgGADgJQACgKABgLIAAgDQgGAIgKAFQgKAFgKAAQgTAAgOgMQgNgLABgUQAAgVANgMQAOgNAUAAQAOAAANAIQAMAHAHANQAGANAAAYQAAAZgGAPQgHAQgMAIQgNAIgPAAQgSAAgMgJgAgVgtQgJAJAAAOQAAANAJAIQAJAHAMAAQANAAAIgHQAJgIAAgOQAAgOgJgJQgJgIgMAAQgMAAgJAJg");
	this.shape_249.setTransform(51.2,139.8);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FF0000").s().p("AgoBCIgDgPIALABQAHAAADgCQAFgBABgEIAHgMIABgEIgqhgIAUAAIAXA4IAIAVIAIgVIAXg4IATAAIgqBhQgHAQgDAGQgFAJgHADQgGAEgJAAQgFAAgHgCg");
	this.shape_250.setTransform(34.1,143.5);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FF0000").s().p("AgfArQgLgIgDgPIATgDQABAKAHAFQAHAFAMAAQANAAAHgEQAGgFAAgGQAAgGgGgDQgEgCgPgDQgUgFgIgDQgIgDgEgGQgEgGAAgHQAAgGADgGQAEgFAGgEQAEgDAIgCQAHgCAJAAQAMAAAKAEQAKADAFAGQAEAFACAKIgSACQgCgIgGgEQgGgEgKAAQgNAAgFAEQgGADAAAFQAAAEADACQACADAFACIAPAEQAUAEAIADQAIACAFAGQAEAGAAAIQAAAIgFAIQgGAHgKAEQgKAEgOAAQgUAAgMgIg");
	this.shape_251.setTransform(17.2,141.5);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FF0000").s().p("AgiA3QgPgRAAgmQAAgXAFgOQAGgPALgIQALgIAQAAQAMAAAJAFQAKAEAGAIQAGAJADALQAEAMAAATQAAAYgGAOQgFAPgLAIQgLAIgRAAQgVAAgNgOgAgUgsQgJAMAAAgQgBAhAJALQAJALAMAAQANAAAJgLQAJgLgBghQABgggJgLQgJgLgNAAQgMAAgIAKg");
	this.shape_252.setTransform(5.9,139.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FF0000").s().p("AgkA5QgOgMAAgSQAAgNAIgIQAIgIAOgEQgMgDgGgHQgFgHAAgKQAAgPAMgKQAMgKATAAQAUAAAMALQAMAKAAAPQAAAJgFAHQgGAHgLADQAOAEAHAIQAIAJAAANQAAARgOAMQgOAMgXAAQgWAAgOgMgAgVAIQgJAIAAAMQAAAHAEAGQADAHAIADQAIAEAHAAQAOAAAJgIQAIgHAAgMQAAgMgJgIQgJgHgNAAQgNAAgIAHgAgRgwQgHAGAAAJQAAAJAHAGQAHAGAKAAQALAAAHgGQAHgGAAgJQAAgJgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_253.setTransform(-6,139.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FF0000").s().p("AgfArQgLgIgDgPIATgDQABAKAHAFQAHAFAMAAQANAAAHgEQAGgFAAgGQAAgGgGgDQgEgCgPgDQgUgFgIgDQgIgDgEgGQgEgGAAgHQAAgGADgGQAEgFAGgEQAEgDAIgCQAHgCAJAAQAMAAAKAEQAKADAFAGQAEAFACAKIgSACQgCgIgGgEQgGgEgKAAQgNAAgFAEQgGADAAAFQAAAEADACQACADAFACIAPAEQAUAEAIADQAIACAFAGQAEAGAAAIQAAAIgFAIQgGAHgKAEQgKAEgOAAQgUAAgMgIg");
	this.shape_254.setTransform(-23.4,141.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FF0000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_255.setTransform(-34.7,141.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FF0000").s().p("AgIBDIAAiFIASAAIAACFg");
	this.shape_256.setTransform(-43.1,139.7);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FF0000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_257.setTransform(-57.3,141.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FF0000").s().p("AgYA+QgLgGgGgMQgGgMAAgOQAAgPAFgLQAGgMALgGQALgGAOgBQAJAAAIAFQAHADAFAGIAAgwIATAAIAACFIgRAAIAAgMQgLAOgUAAQgNAAgLgGgAgUgKQgIAJAAATQAAASAJAKQAJAJALAAQANAAAIgJQAJgJAAgSQAAgTgJgJQgJgKgNAAQgLAAgJAJg");
	this.shape_258.setTransform(-69.6,139.8);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FF0000").s().p("AAWBDIgjgxIgNALIAAAmIgTAAIAAiFIATAAIAABMIAsgnIAXAAIgpAjIAuA9g");
	this.shape_259.setTransform(-85.8,139.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FF0000").s().p("AgiAmQgOgNAAgYQABgPAFgMQAHgMALgGQAMgGAOAAQASAAAMAIQAMAIACAPIgSADQgCgKgHgFQgHgFgJAAQgOAAgIAJQgJAJAAASQAAAUAJAJQAIAIANAAQALAAAHgGQAIgGACgMIASACQgCARgNAKQgNAJgSAAQgWAAgOgNg");
	this.shape_260.setTransform(-96.9,141.5);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FF0000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_261.setTransform(-108.6,141.5);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FF0000").s().p("AgdAyIAAhgIARAAIAAAOQAGgKAGgDQAEgEAHAAQAJAAAKAGIgGAPQgHgEgHAAQgGAAgEAEQgFADgCAGQgDAIAAALIAAAyg");
	this.shape_262.setTransform(-117.3,141.4);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FF0000").s().p("AgJBDIAAiFIASAAIAACFg");
	this.shape_263.setTransform(-130.1,139.7);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FF0000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_264.setTransform(-138.5,141.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FF0000").s().p("AgYA+QgLgGgGgMQgGgMAAgOQAAgPAFgLQAGgMALgGQALgGAOgBQAJAAAIAFQAHADAFAGIAAgwIATAAIAACFIgRAAIAAgMQgLAOgUAAQgNAAgLgGgAgUgKQgIAJAAATQAAASAJAKQAJAJALAAQANAAAIgJQAJgJAAgSQAAgTgJgJQgJgKgNAAQgLAAgJAJg");
	this.shape_265.setTransform(-150.8,139.8);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FF0000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIARgCQAVgDALgDIAAgEQABgKgGgEQgIgGgNAAQgNAAgGAEQgHAEgDAKIgSgCQADgKAFgGQAGgHALgDQALgEANAAQAPAAAIADQAJADAFAFQADAEACAHIACAPIAAAVQAAAXABAGQAAAGAEAGIgUAAQgCgFgBgHQgLAIgKADQgIADgLAAQgTAAgJgIgAgEAGIgQADQgFACgDAEQgCADAAAFQAAAGAGAFQAFAEAMAAQAJAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_266.setTransform(-168.3,141.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FF0000").s().p("AgJBDIAAiFIASAAIAACFg");
	this.shape_267.setTransform(-176.7,139.7);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FF0000").s().p("AgIBDIAAiFIASAAIAACFg");
	this.shape_268.setTransform(-181.5,139.7);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FF0000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_269.setTransform(-189.8,141.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FF0000").s().p("AgdAyIAAhgIARAAIAAAOQAGgKAGgDQAEgEAHAAQAJAAAKAGIgGAPQgHgEgHAAQgGAAgEAEQgFADgCAGQgDAIAAALIAAAyg");
	this.shape_270.setTransform(-198.5,141.4);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FF0000").s().p("AgCA/QgGgDgCgEQgDgFABgPIAAg3IgOAAIAAgMIAOAAIAAgZIARgJIAAAiIATAAIAAAMIgTAAIAAA4QAAAHABACIADADQADACAEAAIAIgBIADAPIgOABQgKAAgFgDg");
	this.shape_271.setTransform(-205.7,139.9);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FF0000").s().p("AgfArQgLgIgDgPIATgDQABAKAHAFQAHAFAMAAQANAAAHgEQAGgFAAgGQAAgGgGgDQgEgCgPgDQgUgFgIgDQgIgDgEgGQgEgGAAgHQAAgGADgGQAEgFAGgEQAEgDAIgCQAHgCAJAAQAMAAAKAEQAKADAFAGQAEAFACAKIgSACQgCgIgGgEQgGgEgKAAQgNAAgFAEQgGADAAAFQAAAEADACQACADAFACIAPAEQAUAEAIADQAIACAFAGQAEAGAAAIQAAAIgFAIQgGAHgKAEQgKAEgOAAQgUAAgMgIg");
	this.shape_272.setTransform(-214.3,141.5);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FF0000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_273.setTransform(-225.6,141.5);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FF0000").s().p("AAaAyIAAg6QAAgKgCgFQgCgFgFgDQgGgDgIAAQgLAAgIAGQgJAHAAATIAAA0IgTAAIAAhgIARAAIAAANQAMgQAWAAQAKAAAJAEQAIADAEAFQAFAFABAHIABAQIAAA7g");
	this.shape_274.setTransform(-243.5,141.4);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FF0000").s().p("AgoArQgKgIAAgMQAAgHAEgGQADgGAGgDQAGgDAIgCIAQgCQAXgDAKgDIAAgEQAAgKgFgEQgIgGgNAAQgNAAgGAEQgHAEgCAKIgTgCQADgKAGgGQAFgHALgDQALgEANAAQAOAAAJADQAKADADAFQAFAEABAHIABAPIAAAVQAAAXABAGQABAGAEAGIgTAAQgEgFAAgHQgKAIgLADQgIADgLAAQgTAAgJgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAFAFQAGAEALAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_275.setTransform(-255.4,141.5);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FF0000").s().p("AgdAyIAAhgIARAAIAAAOQAGgKAGgDQAEgEAHAAQAJAAAKAGIgGAPQgHgEgHAAQgGAAgEAEQgFADgCAGQgDAIAAALIAAAyg");
	this.shape_276.setTransform(-264.1,141.4);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FF0000").s().p("AggA+QgMgIAAgQIASACQABAIAFADQAIAFALAAQANAAAHgFQAHgEADgJQABgEAAgQQgMAMgSAAQgXAAgMgOQgNgPAAgTQAAgOAGgMQAFgMAMgGQAKgGAPgBQATABAMAOIAAgMIASAAIAABTQAAAXgFAJQgFAJgMAGQgLAGgRAAQgTgBgMgHgAgUguQgJAJAAASQAAATAJAIQAIAIANABQANgBAIgIQAKgIgBgTQABgSgKgIQgJgKgMAAQgMAAgJAJg");
	this.shape_277.setTransform(-274.8,143.4);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FF0000").s().p("AgpArQgJgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIAQgCQAXgDAKgDIAAgEQAAgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQACgKAHgGQAFgHALgDQALgEANAAQAOAAAKADQAJADADAFQAFAEABAHIABAPIAAAVQAAAXABAGQABAGAEAGIgTAAQgEgFAAgHQgKAIgKADQgJADgLAAQgSAAgLgIgAgDAGIgRADQgFACgCAEQgDADAAAFQAAAGAFAFQAHAEAKAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_278.setTransform(-292.4,141.5);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FF0000").s().p("AgIBDIAAiFIASAAIAACFg");
	this.shape_279.setTransform(-300.8,139.7);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FF0000").s().p("AgoAiQgLgNAAgUQAAgXAOgOQAOgOAXAAQAXAAAPAPQAOAOAAAdIhJAAQAAALAHAGQAHAHAJAAQAHAAAEgEQAFgDADgHIAdAEQgGAOgMAIQgMAHgSAAQgcAAgOgRgAgPgYQgGAGAAALIArAAQAAgLgGgGQgHgGgJAAQgIAAgHAGg");
	this.shape_280.setTransform(25.6,118);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FF0000").s().p("AghArQgOgIgEgOIAegEQACAIAFAEQAGADAKAAQALAAAFgDQAFgDAAgEQAAgDgCgCIgKgDQgjgHgJgGQgOgHAAgOQAAgMALgJQAMgJAYAAQAWAAALAHQALAGAEANIgbAFQgCgGgFgDQgFgDgJAAQgLAAgFADQgDACgBADQAAADADACQAFACAWAFQAYAEAJAHQAJAGAAAMQAAAOgNAJQgNAKgYAAQgWAAgNgIg");
	this.shape_281.setTransform(13.4,118);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FF0000").s().p("AgcAtQgOgGgHgMQgIgLAAgQQAAgNAIgMQAHgMAOgGQANgHAPAAQAZAAAQAPQARAOgBAVQAAAWgQAOQgQAPgZAAQgOAAgOgGgAgSgVQgIAIAAANQAAAPAIAHQAHAIALAAQALAAAIgIQAIgHAAgPQAAgNgIgIQgIgIgLAAQgLAAgHAIg");
	this.shape_282.setTransform(1.2,118);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FF0000").s().p("AAgBDIgWgdQgLgQgFgEQgEgEgFgCQgFgBgLAAIgGAAIAAA4IgfAAIAAiFIBBAAQAYAAALAEQALADAHAKQAHAIAAAMQAAAPgLAKQgKAJgUADQAKAFAHAGQAGAGALAQIATAagAglgKIAXAAQAVAAAGgBQAFgCAEgEQADgEAAgGQAAgGgEgFQgFgEgHgBIgWAAIgYAAg");
	this.shape_283.setTransform(-12.4,116.2);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FF0000").s().p("AgOBDIAAiFIAdAAIAACFg");
	this.shape_284.setTransform(-29.8,116.2);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FF0000").s().p("AAWAxIgWgfIgXAfIgiAAIAogxIgngvIAkAAIAUAaIAUgaIAiAAIgmAuIAqAyg");
	this.shape_285.setTransform(-38.8,118.1);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FF0000").s().p("AArBDIgNgeIg9AAIgMAeIghAAIA8iFIAfAAIA+CFgAgVAOIApAAIgUgxg");
	this.shape_286.setTransform(-52.5,116.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FF0000").s().p("AgJBDIAAiFIATAAIAACFg");
	this.shape_287.setTransform(93.6,206.7);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FF0000").s().p("AgYA+QgLgGgGgMQgGgMAAgPQAAgOAFgLQAGgMALgGQALgHAOABQAJAAAIADQAHAEAFAGIAAgwIATAAIAACFIgRAAIAAgNQgLAPgUAAQgNAAgLgGgAgUgKQgIAJAAASQAAATAJAJQAJAJALAAQANABAIgJQAJgJAAgSQAAgTgJgKQgJgJgNAAQgLAAgJAJg");
	this.shape_288.setTransform(50.3,206.8);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FF0000").s().p("AglA4QgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAWQAAATgGAKQgHALgMAGQgMAFgPAAQgWAAgPgMgAgWgJQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgSgKgJQgJgKgOABQgNgBgJAKgAgJgqIANgaIAYAAIgXAag");
	this.shape_289.setTransform(20.8,206.8);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FF0000").s().p("AgYAvQgJgEgEgFQgEgFgCgHQgBgFAAgLIAAg7IATAAIAAA1IABARQACAHAGAEQAFADAJABQAHgBAIgDQAHgEADgHQADgGAAgNIAAgzIATAAIAABgIgRAAIAAgOQgNAQgVAAQgKAAgIgCg");
	this.shape_290.setTransform(-6.7,208.7);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FF0000").s().p("AgPBEIAAhTIgQAAIAAgNIAQAAIAAgKQAAgKACgFQADgGAHgEQAGgEAMAAIASABIgDAPIgMgBQgIAAgEADQgDADAAAJIAAAJIAVAAIAAANIgVAAIAABTg");
	this.shape_291.setTransform(-15,206.6);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FF0000").s().p("AgYAvQgJgEgEgFQgEgFgCgHQgBgFAAgLIAAg7IATAAIAAA1IABARQACAHAGAEQAFADAJABQAHgBAIgDQAHgEADgHQADgGAAgNIAAgzIATAAIAABgIgRAAIAAgOQgNAQgVAAQgKAAgIgCg");
	this.shape_292.setTransform(-54.4,208.7);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FF0000").s().p("AgoBCIgDgPIALABQAHAAAEgCQADgBACgEIAHgMIABgEIgqhgIAVAAIAWA4IAHAVIAIgVIAYg4IATAAIgrBhQgGAQgDAGQgFAJgGADQgHAEgJAAQgGAAgGgCg");
	this.shape_293.setTransform(-71.5,210.5);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FF0000").s().p("AgIBDIAAiFIARAAIAACFg");
	this.shape_294.setTransform(-108,206.7);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FF0000").s().p("AgYA+QgLgGgGgMQgGgMAAgPQAAgOAFgLQAGgMALgGQALgHAOABQAJAAAIADQAHAEAFAGIAAgwIATAAIAACFIgRAAIAAgNQgLAPgUAAQgNAAgLgGgAgUgKQgIAJAAASQAAATAJAJQAJAJALAAQANABAIgJQAJgJAAgSQAAgTgJgKQgJgJgNAAQgLAAgJAJg");
	this.shape_295.setTransform(-178.8,206.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FF0000").s().p("AgCA/QgGgDgCgEQgCgFAAgPIAAg3IgOAAIAAgMIAOAAIAAgZIASgJIAAAiIATAAIAAAMIgTAAIAAA4QAAAHABACIACADQADACAEAAIAJgBIACAPIgOABQgKAAgFgDg");
	this.shape_296.setTransform(-245.6,206.9);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FF0000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIARgCQAVgDALgDIAAgEQABgKgGgEQgHgGgOAAQgNAAgGAEQgHAEgDAKIgSgCQADgKAFgGQAGgHALgDQALgEANAAQAPAAAIADQAJADAFAFQADAEACAHIACAPIAAAVQAAAXABAGQAAAGAEAGIgTAAQgDgFgBgHQgLAIgKADQgIADgLAAQgTAAgJgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAGAFQAFAEAMAAQAJAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_297.setTransform(252.5,185);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FF0000").s().p("AgpA9QgJgIAAgMQAAgHAEgGQADgGAHgDQAFgEAIgCIAQgCQAWgDALgDIABgEQgBgKgFgEQgIgFgNgBQgNAAgGAFQgGAEgDAKIgTgCQACgKAGgHQAGgGALgEQALgDANAAQAPAAAJADQAIADAEAEQAEAFADAGIABAPIAAAWQAAAXABAGQABAGADAFIgUAAQgDgEAAgHQgLAHgJAEQgJACgLAAQgSAAgLgHgAgEAYIgQADQgFACgCADQgDAEAAAEQAAAHAGAEQAFAFAMAAQAJAAAIgFQAJgEAEgHQADgGAAgLIAAgFQgKAEgUACgAgJgqIAMgaIAZAAIgXAag");
	this.shape_298.setTransform(222.6,183.3);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FF0000").s().p("AggA+QgMgIAAgQIASADQABAHAFADQAIAFAMAAQAMAAAHgFQAHgEADgJQABgFAAgQQgNANgRAAQgXAAgMgOQgNgPAAgTQAAgOAGgMQAFgMAMgGQALgHAOAAQATAAAMAOIAAgLIASAAIAABTQAAAWgFAKQgFAJgMAGQgMAFgPABQgUAAgMgIgAgUguQgJAJAAASQAAATAJAHQAJAKAMAAQANAAAIgKQAKgHgBgTQABgRgKgJQgIgKgNAAQgMAAgJAJg");
	this.shape_299.setTransform(210.4,186.9);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FF0000").s().p("AgCA/QgGgDgCgEQgCgFAAgPIAAg3IgOAAIAAgMIAOAAIAAgZIASgJIAAAiIATAAIAAAMIgTAAIAAA4QAAAHABACIACADQADACAEAAIAJgBIACAPIgOABQgKAAgFgDg");
	this.shape_300.setTransform(166.1,183.4);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FF0000").s().p("AgCA/QgGgDgCgEQgCgFgBgPIAAg3IgNAAIAAgMIANAAIAAgZIASgJIAAAiIATAAIAAAMIgTAAIAAA4QAAAHABACIAEADQACACAEAAIAIgBIADAPIgOABQgKAAgFgDg");
	this.shape_301.setTransform(105.3,183.4);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FF0000").s().p("AgpArQgJgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIAQgCQAWgDALgDIABgEQgBgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQACgKAGgGQAGgHALgDQALgEANAAQAPAAAJADQAIADAEAFQAEAEADAHIABAPIAAAVQAAAXABAGQABAGADAGIgUAAQgDgFAAgHQgLAIgJADQgJADgLAAQgSAAgLgIgAgEAGIgQADQgFACgCAEQgDADAAAFQAAAGAGAFQAFAEAMAAQAJAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_302.setTransform(61.5,185);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FF0000").s().p("AghAmQgPgNAAgYQABgPAFgMQAGgMAMgGQAMgGAOAAQASAAAMAIQAMAIADAPIgTADQgCgKgHgFQgHgFgJAAQgOAAgJAJQgIAJAAASQAAAUAIAJQAJAIANAAQALAAAHgGQAIgGACgMIASACQgCARgNAKQgNAJgSAAQgWAAgNgNg");
	this.shape_303.setTransform(50.6,185);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FF0000").s().p("AgYAvQgJgEgEgFQgEgFgCgHQgBgFAAgKIAAg8IATAAIAAA1QAAANABAEQACAHAGAEQAFAEAJAAQAHAAAIgEQAHgEADgHQADgGAAgNIAAgzIATAAIAABgIgRAAIAAgOQgNAQgVAAQgKAAgIgCg");
	this.shape_304.setTransform(23.3,185.2);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FF0000").s().p("AA5AyIAAg8QAAgKgCgFQgCgEgFgDQgFgCgGAAQgMAAgIAGQgHAHgBAPIAAA4IgRAAIAAg+QAAgLgFgGQgFgFgKAAQgIAAgGADQgHAEgEAHQgDAHAAANIAAAyIgTAAIAAhgIASAAIAAANQAFgHAIgEQAJgFAMAAQALAAAJAFQAGAEADAIQAOgRAVAAQARAAAJAIQAIAIABARIAABCg");
	this.shape_305.setTransform(8.5,184.9);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FF0000").s().p("AgCA/QgGgDgCgEQgDgFAAgPIAAg3IgNAAIAAgMIANAAIAAgZIATgJIAAAiIATAAIAAAMIgTAAIAAA4QAAAHABACIACADQADACAEAAIAJgBIACAPIgOABQgKAAgFgDg");
	this.shape_306.setTransform(-21.2,183.4);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FF0000").s().p("AgoArQgKgIAAgMQAAgHAEgGQADgGAGgDQAGgDAIgCIAQgCQAXgDAKgDIAAgEQAAgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQADgKAGgGQAFgHALgDQALgEANAAQAOAAAJADQAKADADAFQAFAEABAHIABAPIAAAVQAAAXABAGQABAGAEAGIgTAAQgEgFAAgHQgKAIgLADQgIADgLAAQgTAAgJgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAFAFQAGAEALAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_307.setTransform(-63.7,185);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FF0000").s().p("AgCA/QgGgDgCgEQgCgFgBgPIAAg3IgNAAIAAgMIANAAIAAgZIASgJIAAAiIATAAIAAAMIgTAAIAAA4QAAAHABACIAEADQACACAEAAIAIgBIADAPIgOABQgKAAgFgDg");
	this.shape_308.setTransform(-79.6,183.4);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FF0000").s().p("AghA+QgMgIABgQIASADQABAHAGADQAGAFANAAQAMAAAHgFQAHgEACgJQACgFAAgQQgMANgSAAQgXAAgMgOQgNgPAAgTQAAgOAFgMQAHgMAKgGQAMgHAOAAQATAAAMAOIAAgLIASAAIAABTQAAAWgFAKQgFAJgMAGQgLAFgQABQgUAAgNgIgAgUguQgJAJABASQgBATAJAHQAJAKAMAAQANAAAIgKQAJgHAAgTQAAgRgJgJQgIgKgOAAQgLAAgJAJg");
	this.shape_309.setTransform(-153.5,186.9);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FF0000").s().p("AgoArQgKgIAAgMQAAgHAEgGQADgGAGgDQAGgDAIgCIAQgCQAXgDAKgDIAAgEQAAgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQADgKAGgGQAFgHALgDQALgEANAAQAOAAAJADQAKADADAFQAFAEABAHIABAPIAAAVQAAAXABAGQABAGAEAGIgTAAQgEgFAAgHQgKAIgLADQgIADgLAAQgTAAgJgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAFAFQAGAEALAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_310.setTransform(-193.8,185);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FF0000").s().p("AgYAvQgJgEgEgFQgEgFgCgHQgBgFAAgKIAAg8IATAAIAAA1QAAANABAEQACAHAGAEQAFAEAJAAQAHAAAIgEQAHgEADgHQADgGAAgNIAAgzIATAAIAABgIgRAAIAAgOQgNAQgVAAQgKAAgIgCg");
	this.shape_311.setTransform(-205.8,185.2);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FF0000").s().p("AAdBFIAAgxQgEAGgIADQgIAEgJAAQgTAAgOgOQgOgNAAgYQAAgOAGgMQAFgLAMgHQALgFANgBQATABAMAPIAAgNIARAAIAACGgAgTgtQgJAJAAATQAAASAJAJQAJAKAMgBQAMAAAJgIQAIgJAAgSQAAgTgJgKQgJgKgMABQgMgBgIAKg");
	this.shape_312.setTransform(-218,186.8);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FF0000").s().p("AglA4QgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPANQAOAOAAAVQAAATgGALQgHALgMAGQgMAFgPAAQgWABgPgNgAgWgJQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgSgKgJQgJgKgOAAQgNAAgJAKgAgJgqIANgaIAYAAIgXAag");
	this.shape_313.setTransform(-259.5,183.3);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FF0000").s().p("AghAmQgPgNAAgYQABgPAFgMQAGgMAMgGQAMgGAOAAQASAAAMAIQAMAIADAPIgTADQgCgKgHgFQgHgFgJAAQgOAAgJAJQgIAJAAASQAAAUAIAJQAJAIANAAQALAAAHgGQAIgGACgMIASACQgCARgNAKQgNAJgSAAQgWAAgNgNg");
	this.shape_314.setTransform(-275.2,185);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FF0000").s().p("AghAmQgPgNAAgYQABgPAFgMQAGgMAMgGQAMgGAOAAQASAAAMAIQAMAIADAPIgTADQgCgKgHgFQgHgFgJAAQgOAAgJAJQgIAJAAASQAAAUAIAJQAJAIANAAQALAAAHgGQAIgGACgMIASACQgCARgNAKQgNAJgSAAQgWAAgNgNg");
	this.shape_315.setTransform(-309.8,185);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FF0000").s().p("AgoArQgKgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIAQgCQAXgDAKgDIAAgEQAAgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQADgKAGgGQAFgHALgDQALgEANAAQAOAAAJADQAKADADAFQAFAEABAHIABAPIAAAVQAAAXABAGQABAGAEAGIgTAAQgEgFAAgHQgKAIgKADQgJADgLAAQgTAAgJgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAFAFQAGAEALAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_316.setTransform(246.3,161.5);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FF0000").s().p("AgvBDIAAiFIAUAAIAAB1IBLAAIAAAQg");
	this.shape_317.setTransform(234.8,159.7);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FF0000").s().p("AgKAKIAAgSIAVAAIAAASg");
	this.shape_318.setTransform(219.6,165.5);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FF0000").s().p("AA5AyIAAg8QgBgKgBgFQgCgEgFgDQgEgCgHAAQgMAAgIAGQgHAHAAAPIAAA4IgSAAIAAg+QAAgLgFgGQgEgFgLAAQgIAAgGADQgIAEgCAHQgEAHAAANIAAAyIgTAAIAAhgIARAAIAAANQAGgHAJgEQAIgFAMAAQALAAAJAFQAHAEACAIQAOgRAVAAQAQAAAKAIQAJAIAAARIAABCg");
	this.shape_319.setTransform(185,161.4);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FF0000").s().p("AgCA/QgGgDgCgEQgCgFAAgPIAAg3IgOAAIAAgMIAOAAIAAgZIASgJIAAAiIATAAIAAAMIgTAAIAAA4QAAAHABACIACADQADACAEAAIAJgBIACAPIgOABQgKAAgFgDg");
	this.shape_320.setTransform(86.1,159.9);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FF0000").s().p("AgiAmQgOgNABgYQgBgPAHgMQAGgMAMgGQALgGAOAAQASAAAMAIQALAIADAPIgSADQgDgKgGgFQgHgFgJAAQgNAAgKAJQgIAJAAASQAAAUAIAJQAJAIANAAQALAAAIgGQAHgGACgMIATACQgEARgMAKQgNAJgSAAQgWAAgOgNg");
	this.shape_321.setTransform(25.5,161.5);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FF0000").s().p("AgpArQgJgIAAgMQAAgHADgGQAEgGAHgDQAFgDAIgCIARgCQAWgDAKgDIABgEQAAgKgGgEQgHgGgOAAQgNAAgGAEQgGAEgEAKIgSgCQADgKAFgGQAGgHALgDQALgEANAAQAPAAAJADQAIADAEAFQAFAEACAHIABAPIAAAVQAAAXABAGQABAGADAGIgUAAQgDgFAAgHQgKAIgKADQgJADgLAAQgTAAgKgIgAgEAGIgQADQgFACgCAEQgDADAAAFQAAAGAGAFQAFAEAMAAQAJAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_322.setTransform(-2.9,161.5);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FF0000").s().p("AA5AyIAAg8QgBgKgBgFQgCgEgFgDQgEgCgHAAQgMAAgIAGQgHAHAAAPIAAA4IgSAAIAAg+QAAgLgFgGQgEgFgLAAQgIAAgGADQgIAEgCAHQgEAHAAANIAAAyIgTAAIAAhgIARAAIAAANQAGgHAJgEQAIgFAMAAQALAAAIAFQAIAEACAIQAOgRAVAAQAQAAAKAIQAJAIAAARIAABCg");
	this.shape_323.setTransform(-64.3,161.4);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FF0000").s().p("AggA+QgNgIAAgQIATADQABAHAFADQAIAFALAAQAMAAAIgFQAHgEADgJQABgFAAgQQgNANgRAAQgXAAgNgOQgMgPAAgTQAAgOAGgMQAGgMAKgGQAMgHAOAAQATAAANAPIAAgMIARAAIAABTQAAAWgFAKQgGAJgLAGQgMAFgQABQgTgBgMgHgAgUguQgJAJAAASQAAATAJAIQAIAJANAAQANAAAJgJQAJgIAAgTQAAgRgJgJQgKgKgNAAQgLAAgJAJg");
	this.shape_324.setTransform(-178.7,163.4);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FF0000").s().p("AgoBCIgCgPIAKABQAHAAADgCQAFgBACgEIAGgMIABgEIgqhgIAUAAIAYA4IAHAVIAIgVIAXg4IATAAIgqBhQgHAQgDAGQgFAJgHADQgGAEgJAAQgFAAgHgCg");
	this.shape_325.setTransform(-195.5,163.5);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FF0000").s().p("AgpArQgJgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIAQgCQAWgDALgDIABgEQgBgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQACgKAGgGQAGgHALgDQALgEANAAQAPAAAJADQAIADAEAFQAEAEADAHIABAPIAAAVQAAAXAAAGQACAGADAGIgUAAQgDgFAAgHQgLAIgJADQgJADgLAAQgSAAgLgIgAgEAGIgQADQgFACgCAEQgDADAAAFQAAAGAFAFQAGAEAMAAQAJAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_326.setTransform(-260.7,161.5);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FF0000").s().p("AgCA/QgGgDgCgEQgDgFAAgPIAAg3IgNAAIAAgMIANAAIAAgZIASgJIAAAiIAUAAIAAAMIgUAAIAAA4QABAHABACIADADQACACAEAAIAJgBIACAPIgOABQgLAAgEgDg");
	this.shape_327.setTransform(-285,159.9);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FF0000").s().p("AghAmQgPgNAAgYQABgPAFgMQAGgMAMgGQAMgGAOAAQASAAAMAIQAMAIADAPIgTADQgCgKgHgFQgHgFgJAAQgOAAgJAJQgIAJAAASQAAAUAIAJQAJAIANAAQALAAAHgGQAIgGACgMIASACQgCARgNAKQgNAJgSAAQgWAAgNgNg");
	this.shape_328.setTransform(-309.8,161.5);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FF0000").s().p("AgoArQgKgIAAgMQAAgHAEgGQADgGAGgDQAGgDAIgCIAQgCQAWgDALgDIAAgEQABgKgGgEQgHgGgOAAQgNAAgGAEQgHAEgDAKIgSgCQADgKAGgGQAFgHALgDQALgEANAAQAOAAAJADQAJADAFAFQADAEACAHIABAPIAAAVQAAAXABAGQACAGADAGIgTAAQgDgFgBgHQgKAIgLADQgIADgLAAQgTAAgJgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAFAFQAHAEAKAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_329.setTransform(273.9,138);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FF0000").s().p("AgYBCQgJgEgEgFQgEgFgCgHQgBgFAAgKIAAg8IATAAIAAA1IABASQACAGAGAEQAFADAJAAQAHAAAIgDQAHgEADgGQADgHAAgMIAAg0IATAAIAABhIgRAAIAAgPQgNAQgVAAQgKAAgIgCgAgKgqIANgZIAYAAIgXAZg");
	this.shape_330.setTransform(235.6,136.3);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FF0000").s().p("AA4AyIAAg8QABgKgCgFQgCgEgFgDQgFgCgGAAQgMAAgHAGQgJAHABAPIAAA4IgSAAIAAg+QAAgLgFgGQgFgFgKAAQgIAAgHADQgHAEgCAHQgDAHAAANIAAAyIgUAAIAAhgIARAAIAAANQAGgHAJgEQAIgFALAAQANAAAHAFQAHAEAEAIQANgRAVAAQARAAAIAIQAKAIgBARIAABCg");
	this.shape_331.setTransform(220.8,137.9);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FF0000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_332.setTransform(182,138);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FF0000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_333.setTransform(131.9,138);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FF0000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_334.setTransform(84.2,138);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FF0000").s().p("AgiAmQgNgNAAgYQAAgPAFgMQAGgMAMgGQANgGANAAQASAAAMAIQAMAIACAPIgSADQgDgKgGgFQgGgFgKAAQgOAAgIAJQgJAJAAASQAAAUAJAJQAIAIANAAQALAAAHgGQAIgGACgMIASACQgDARgMAKQgNAJgSAAQgWAAgOgNg");
	this.shape_335.setTransform(68.5,138);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FF0000").s().p("AA5AyIAAg8QgBgKgBgFQgCgEgFgDQgEgCgHAAQgMAAgHAGQgIAHAAAPIAAA4IgSAAIAAg+QAAgLgFgGQgFgFgKAAQgIAAgGADQgIAEgCAHQgEAHAAANIAAAyIgTAAIAAhgIARAAIAAANQAGgHAJgEQAIgFAMAAQAMAAAHAFQAIAEACAIQAOgRAVAAQAQAAAJAIQAKAIAAARIAABCg");
	this.shape_336.setTransform(31.2,137.9);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FF0000").s().p("AggA+QgNgIAAgQIATACQABAIAFADQAHAFAMAAQANAAAHgFQAHgEADgJQABgEAAgQQgNAMgRAAQgXAAgNgOQgMgPAAgTQAAgOAGgMQAFgLAMgHQAKgGAPgBQATABAMAOIAAgMIASAAIAABTQAAAWgFAKQgGAKgLAFQgLAGgRAAQgTgBgMgHgAgUguQgJAJAAASQAAATAJAIQAIAIANABQANgBAIgIQAKgIgBgTQABgSgKgIQgJgKgMAAQgMAAgJAJg");
	this.shape_337.setTransform(-17.5,139.9);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FF0000").s().p("AgdAyIAAhgIARAAIAAAOQAGgKAGgDQAEgEAHAAQAJAAAKAGIgGAPQgHgEgHAAQgGAAgEAEQgFADgCAGQgDAIAAALIAAAyg");
	this.shape_338.setTransform(-60.5,137.9);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FF0000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_339.setTransform(-71,138);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FF0000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_340.setTransform(-110.3,138);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FF0000").s().p("AgdAyIAAhgIARAAIAAAOQAGgKAGgDQAEgEAHAAQAJAAAKAGIgGAPQgHgEgHAAQgGAAgEAEQgFADgCAGQgDAIAAALIAAAyg");
	this.shape_341.setTransform(-123.8,137.9);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FF0000").s().p("AgpArQgJgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIAQgCQAWgDALgDIABgEQgBgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQACgKAGgGQAGgHALgDQALgEANAAQAPAAAJADQAIADAEAFQAEAEADAHIABAPIAAAVQAAAXAAAGQACAGADAGIgUAAQgDgFAAgHQgLAIgJADQgJADgLAAQgSAAgLgIgAgEAGIgQADQgFACgCAEQgDADAAAFQAAAGAFAFQAGAEAMAAQAJAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_342.setTransform(-134.2,138);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FF0000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_343.setTransform(-158.1,138);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FF0000").s().p("AgJBDIAAiFIATAAIAACFg");
	this.shape_344.setTransform(-166.5,136.2);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FF0000").s().p("AA4AyIAAg8QABgKgCgFQgCgEgFgDQgFgCgGAAQgMAAgHAGQgJAHABAPIAAA4IgSAAIAAg+QAAgLgFgGQgFgFgKAAQgIAAgHADQgHAEgCAHQgDAHAAANIAAAyIgUAAIAAhgIARAAIAAANQAGgHAJgEQAIgFALAAQANAAAHAFQAHAEAEAIQANgRAVAAQARAAAIAIQAKAIgBARIAABCg");
	this.shape_345.setTransform(-187.3,137.9);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FF0000").s().p("AgKAQQAGgDACgEQACgEABgIIgKAAIAAgTIAUAAIAAATQAAAKgEAGQgEAGgIAEg");
	this.shape_346.setTransform(-205.2,143.3);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FF0000").s().p("AgCA/QgGgDgCgEQgDgFABgPIAAg3IgOAAIAAgMIAOAAIAAgZIASgJIAAAiIASAAIAAAMIgSAAIAAA4QAAAHAAACIADADQADACAEAAIAIgBIADAPIgOABQgLAAgEgDg");
	this.shape_347.setTransform(-222.9,136.4);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FF0000").s().p("AAaAyIAAg6QAAgKgCgFQgCgFgFgDQgGgDgIAAQgLAAgIAGQgJAHAAATIAAA0IgTAAIAAhgIARAAIAAANQAMgQAWAAQAKAAAJAEQAIADAEAFQAFAFABAHIABAQIAAA7g");
	this.shape_348.setTransform(-232.1,137.9);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FF0000").s().p("AgpArQgJgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIAQgCQAWgDALgDIABgEQgBgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQACgKAGgGQAGgHALgDQALgEANAAQAPAAAJADQAIADAEAFQAEAEADAHIABAPIAAAVQAAAXAAAGQACAGADAGIgUAAQgDgFAAgHQgLAIgJADQgJADgLAAQgSAAgLgIgAgEAGIgQADQgFACgCAEQgDADAAAFQAAAGAFAFQAGAEAMAAQAJAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_349.setTransform(-244,138);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FF0000").s().p("AAaAyIAAg6QAAgKgCgFQgCgFgFgDQgGgDgIAAQgLAAgIAGQgJAHAAATIAAA0IgTAAIAAhgIARAAIAAANQAMgQAWAAQAKAAAJAEQAIADAEAFQAFAFABAHIABAQIAAA7g");
	this.shape_350.setTransform(-261.9,137.9);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FF0000").s().p("AgoArQgKgIAAgMQAAgHAEgGQADgGAGgDQAGgDAIgCIAQgCQAXgDAKgDIAAgEQAAgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQADgKAGgGQAFgHALgDQALgEANAAQAOAAAJADQAKADADAFQAFAEABAHIABAPIAAAVQAAAXABAGQABAGAEAGIgTAAQgEgFAAgHQgKAIgLADQgIADgLAAQgTAAgJgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAFAFQAGAEALAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_351.setTransform(-273.9,138);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FF0000").s().p("AgiAmQgNgNAAgYQAAgPAFgMQAGgMAMgGQANgGANAAQASAAAMAIQAMAIACAPIgSADQgCgKgHgFQgGgFgKAAQgOAAgIAJQgJAJAAASQAAAUAJAJQAIAIANAAQALAAAHgGQAIgGACgMIASACQgDARgMAKQgNAJgSAAQgWAAgOgNg");
	this.shape_352.setTransform(-284.8,138);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FF0000").s().p("Ag4BDIAAiFIBuAAIAAAPIhaAAIAAAqIBUAAIAAAOIhUAAIAAAuIBdAAIAAAQg");
	this.shape_353.setTransform(-308.1,136.2);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FF0000").s().p("AAVAyIAAgyQAAgPgBgEQgCgFgFgCQgEgDgGAAQgGAAgHAEQgGADgCAGQgCAGAAAQIAAAsIgeAAIAAhgIAcAAIAAAOQAOgRAVAAQAKAAAIADQAIADAFAFQAEAFABAGQACAGAAALIAAA8g");
	this.shape_354.setTransform(45.5,114.4);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FF0000").s().p("AgcAtQgOgGgHgMQgIgLABgQQgBgNAIgMQAHgMAOgGQAMgHAQAAQAZAAARAPQAPAOAAAVQAAAWgQAOQgQAPgZAAQgOAAgOgGgAgSgVQgIAIAAANQAAAPAIAHQAHAIALAAQALAAAIgIQAIgHAAgPQAAgNgIgIQgIgIgLAAQgLAAgHAIg");
	this.shape_355.setTransform(32.5,114.5);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FF0000").s().p("AgiArQgNgIgEgOIAegEQACAIAFAEQAGADAJAAQAMAAAFgDQAFgDAAgEQAAgDgCgCIgLgDQgigHgKgGQgNgHAAgOQAAgMALgJQAMgJAYAAQAWAAALAHQALAGAEANIgbAFQgDgGgEgDQgGgDgIAAQgLAAgFADQgDACgBADQAAADADACQAFACAWAFQAYAEAJAHQAJAGAAAMQAAAOgNAJQgNAKgZAAQgVAAgOgIg");
	this.shape_356.setTransform(19.6,114.5);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FF0000").s().p("AgjAyIAAhgIAbAAIAAANQAIgJAEgEQAGgDAHAAQAKAAAJAFIgJAXQgIgFgFAAQgHAAgEADQgDADgDAIQgCAIAAAYIAAAeg");
	this.shape_357.setTransform(10.6,114.4);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FF0000").s().p("AgoA3QgNgOAAgYQAAgYANgMQANgNAUgBQASAAAOAOIAAgwIAdAAIAACFIgbAAIAAgOQgHAIgJAEQgJAEgJAAQgTAAgOgNgAgQgGQgHAHAAAPQAAAPAFAHQAHAKALAAQALAAAHgIQAHgHAAgPQAAgRgHgHQgHgGgLgBQgJABgHAGg");
	this.shape_358.setTransform(-13.1,112.8);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FF0000").s().p("AAVAyIAAgyQAAgPgBgEQgCgFgFgCQgEgDgGAAQgGAAgHAEQgGADgCAGQgCAGAAAQIAAAsIgeAAIAAhgIAcAAIAAAOQAOgRAVAAQAKAAAIADQAIADAFAFQAEAFABAGQACAGAAALIAAA8g");
	this.shape_359.setTransform(-26,114.4);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FF0000").s().p("AArBDIgNgeIg8AAIgNAeIghAAIA8iFIAgAAIA9CFgAgVAOIApAAIgUgxg");
	this.shape_360.setTransform(-40.3,112.7);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FF0000").s().p("AAVAyIAAgyQAAgPgBgEQgCgFgFgCQgEgDgGAAQgGAAgHAEQgGADgCAGQgCAGAAAQIAAAsIgeAAIAAhgIAcAAIAAAOQAOgRAVAAQAKAAAIADQAIADAFAFQAEAFABAGQACAGAAALIAAA8g");
	this.shape_361.setTransform(-59.7,114.4);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FF0000").s().p("AgpArQgKgIAAgNQAAgIAEgGQAFgHAIgCQAIgEAPgCQAUgEAIgDIAAgCQAAgIgEgDQgEgDgLAAQgIAAgEADQgFACgCAHIgbgEQAEgOALgHQALgHAWAAQATAAAJAEQAKAEAEAHQAEAGAAARIAAAdQAAANABAGQABAGAEAHIgdAAIgDgIIgBgDQgHAHgJADQgHADgKAAQgRAAgKgIgAAAAGQgMACgEACQgGAEAAAGQAAAFAFAEQAFAEAHAAQAHAAAHgFQAFgDACgFQABgEAAgJIAAgFIgRAEg");
	this.shape_362.setTransform(-72.3,114.5);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FF0000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIARgCQAVgDALgDIABgEQAAgKgGgEQgHgGgOAAQgNAAgGAEQgGAEgEAKIgSgCQADgKAFgGQAGgHALgDQALgEANAAQAPAAAIADQAKADAEAFQADAEADAHIABAPIAAAVQAAAXABAGQABAGADAGIgUAAQgDgFAAgHQgLAIgKADQgIADgLAAQgTAAgJgIgAgEAGIgQADQgFACgDAEQgCADAAAFQAAAGAGAFQAFAEAMAAQAJAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_363.setTransform(217.5,208.5);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FF0000").s().p("AgwBFIAAiGIASAAIAAAMQAGgHAIgEQAHgDAKAAQAOgBAMAHQAKAGAFAMQAHAMgBANQAAAPgGALQgGAMgMAHQgLAGgNAAQgIAAgIgEQgHgDgGgFIAAAwgAgVgtQgKAKAAATQABASAIAIQAJAJANAAQALAAAJgJQAJgJAAgTQAAgSgJgKQgIgJgMAAQgMAAgJAKg");
	this.shape_364.setTransform(205.9,210.3);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FF0000").s().p("AgPBEIAAhTIgRAAIAAgNIARAAIAAgKQAAgKACgFQADgGAHgEQAFgEANAAIARABIgDAPIgKgBQgJAAgDADQgEADAAAJIAAAJIAWAAIAAANIgWAAIAABTg");
	this.shape_365.setTransform(92.1,206.6);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FF0000").s().p("AgCA/QgGgDgCgEQgDgFAAgPIAAg3IgNAAIAAgMIANAAIAAgZIATgJIAAAiIATAAIAAAMIgTAAIAAA4QAAAHABACIADADQACACAEAAIAJgBIACAPIgOABQgKAAgFgDg");
	this.shape_366.setTransform(44.1,206.9);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FF0000").s().p("AAaBDIAAg9QABgMgHgFQgGgGgLAAQgHAAgIAEQgHAEgEAGQgDAGAAALIAAA1IgTAAIAAiFIATAAIAAAwQAOgNATAAQAMgBAJAFQAJAEAFAHQADAIAAAOIAAA9g");
	this.shape_367.setTransform(19.4,206.7);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FF0000").s().p("AgoArQgKgIAAgMQAAgHAEgGQADgGAGgDQAGgDAIgCIAQgCQAXgDAKgDIAAgEQAAgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQADgKAGgGQAFgHALgDQALgEANAAQAOAAAJADQAKADADAFQAFAEABAHIABAPIAAAVQAAAXABAGQABAGAEAGIgTAAQgEgFAAgHQgKAIgKADQgJADgLAAQgTAAgJgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAFAFQAGAEALAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_368.setTransform(1.5,208.5);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FF0000").s().p("AgYA+QgLgGgGgMQgGgMAAgPQAAgOAFgLQAGgMALgGQALgHAOABQAJAAAIADQAHAEAFAGIAAgwIATAAIAACFIgRAAIAAgNQgLAPgUAAQgNAAgLgGgAgUgKQgIAJAAASQAAATAJAJQAJAJALAAQANABAIgJQAJgJAAgSQAAgTgJgKQgJgJgNAAQgLAAgJAJg");
	this.shape_369.setTransform(-33.5,206.8);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FF0000").s().p("AA5AyIAAg8QgBgKgBgFQgCgEgFgDQgEgCgHAAQgMAAgHAGQgIAHAAAPIAAA4IgSAAIAAg+QAAgLgFgGQgFgFgKAAQgIAAgGADQgIAEgCAHQgEAHAAANIAAAyIgTAAIAAhgIARAAIAAANQAGgHAJgEQAIgFAMAAQAMAAAHAFQAIAEACAIQAOgRAVAAQAQAAAJAIQAKAIgBARIAABCg");
	this.shape_370.setTransform(-53.9,208.4);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FF0000").s().p("AgeA2IAAAMIgRAAIAAiFIATAAIAAAvQAMgMARAAQAKAAAKADQAJAEAGAGQAGAHADAJQADAJAAAKQAAAZgOANQgOAOgUAAQgSAAgMgOgAgVgKQgJAKAAAQQAAASAGAIQAIAMAQAAQALAAAJgJQAJgJAAgTQAAgSgJgJQgIgJgMAAQgMAAgJAJg");
	this.shape_371.setTransform(-80.5,206.8);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FF0000").s().p("AgpA9QgJgIAAgMQAAgHAEgGQADgGAHgDQAFgEAIgCIAQgCQAXgDAKgDIAAgEQAAgJgFgFQgIgFgNAAQgNgBgGAFQgGAEgDAKIgTgCQACgLAHgFQAFgHALgEQALgDANAAQAOAAAKADQAJADADAEQAFAFABAGIABAPIAAAWQAAAXABAGQABAGAEAFIgTAAQgEgFAAgGQgKAHgKAEQgJACgLAAQgSABgLgIgAgDAYIgRADQgFACgCADQgDAEAAAEQAAAHAFAEQAHAFAKAAQAKAAAIgFQAJgEAEgHQADgGAAgLIAAgFQgKAEgTACgAgJgqIAMgaIAZAAIgXAag");
	this.shape_372.setTransform(-97.6,206.8);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FF0000").s().p("AgUBVIADgOIAJABQAGAAACgDQACgDAAgOIAAhlIATAAIAABmQABASgGAHQgHAJgPAAQgHAAgHgCgAAChDIAAgTIATAAIAAATg");
	this.shape_373.setTransform(-154.8,208.7);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FF0000").s().p("AA4AyIAAg8QABgKgCgFQgCgEgFgDQgFgCgGAAQgMAAgHAGQgJAHAAAPIAAA4IgRAAIAAg+QAAgLgFgGQgEgFgLAAQgIAAgHADQgGAEgEAHQgCAHAAANIAAAyIgTAAIAAhgIAQAAIAAANQAGgHAIgEQAJgFALAAQANAAAHAFQAHAEAEAIQANgRAVAAQARAAAIAIQAJAIAAARIAABCg");
	this.shape_374.setTransform(-176.9,208.4);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FF0000").s().p("AgYA+QgLgGgGgMQgGgMAAgPQAAgOAFgLQAGgMALgGQALgHAOABQAJAAAIADQAHAEAFAGIAAgwIATAAIAACFIgRAAIAAgNQgLAPgUAAQgNAAgLgGgAgUgKQgIAJAAASQAAATAJAJQAJAJALAAQANABAIgJQAJgJAAgSQAAgTgJgKQgJgJgNAAQgLAAgJAJg");
	this.shape_375.setTransform(-243.5,206.8);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FF0000").s().p("AgYAvQgJgEgEgFQgEgFgCgHQgBgFAAgLIAAg7IATAAIAAA1QAAANABAEQACAHAGAEQAFADAJABQAHgBAIgDQAHgEADgHQADgGAAgNIAAgzIATAAIAABgIgRAAIAAgOQgNAQgVAAQgKAAgIgCg");
	this.shape_376.setTransform(-285,208.7);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FF0000").s().p("AAdAwIgXgdIgGgJIgcAmIgXAAIAogxIglgvIAYAAIARAXIAHALIAIgKIATgYIAWAAIgmAuIApAyg");
	this.shape_377.setTransform(255.6,185.1);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FF0000").s().p("AgoBCIgDgPIALABQAHAAAEgCQADgBACgEIAHgMIABgEIgqhgIAVAAIAWA4IAHAVIAJgVIAXg4IATAAIgqBhQgHAQgDAGQgFAJgGADQgHAEgJAAQgGAAgGgCg");
	this.shape_378.setTransform(167.5,187);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FF0000").s().p("AgoArQgKgIAAgMQAAgHAEgGQADgGAGgDQAGgDAIgCIAQgCQAXgDAKgDIAAgEQAAgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQADgKAGgGQAFgHALgDQALgEANAAQAOAAAKADQAJADADAFQAFAEABAHIABAPIAAAVQAAAXABAGQABAGAEAGIgTAAQgEgFAAgHQgKAIgKADQgJADgLAAQgTAAgJgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAFAFQAGAEALAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_379.setTransform(150,185);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FF0000").s().p("AgIAwIgqhgIAUAAIAYA6IAGATIAHgSIAZg7IATAAIgqBgg");
	this.shape_380.setTransform(138.7,185.1);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FF0000").s().p("AgpArQgJgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIAQgCQAXgDAKgDIABgEQgBgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQACgKAHgGQAFgHALgDQALgEANAAQAOAAAKADQAJADADAFQAFAEABAHIABAPIAAAVQAAAXABAGQABAGAEAGIgTAAQgEgFAAgHQgKAIgKADQgJADgLAAQgSAAgLgIgAgDAGIgRADQgFACgCAEQgDADAAAFQAAAGAFAFQAHAEAKAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_381.setTransform(116.6,185);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FF0000").s().p("AA5AyIAAg8QgBgKgBgFQgCgEgFgDQgEgCgHAAQgMAAgHAGQgIAHAAAPIAAA4IgSAAIAAg+QAAgLgFgGQgFgFgKAAQgIAAgGADQgIAEgCAHQgEAHAAANIAAAyIgTAAIAAhgIARAAIAAANQAGgHAJgEQAIgFAMAAQAMAAAHAFQAIAEACAIQAOgRAVAAQAQAAAJAIQAKAIgBARIAABCg");
	this.shape_382.setTransform(67.2,184.9);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FF0000").s().p("AgpArQgJgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIARgCQAVgDALgDIABgEQgBgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQACgKAGgGQAGgHALgDQALgEANAAQAPAAAJADQAIADAEAFQAEAEADAHIABAPIAAAVQAAAXAAAGQACAGADAGIgUAAQgDgFAAgHQgLAIgJADQgJADgLAAQgSAAgLgIgAgEAGIgQADQgFACgCAEQgDADAAAFQAAAGAFAFQAGAEAMAAQAJAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_383.setTransform(46.2,185);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FF0000").s().p("AgYBCQgJgEgEgFQgEgFgCgHQgBgFAAgKIAAg8IATAAIAAA1QAAANABAEQACAHAGAEQAFAEAJAAQAHAAAIgEQAHgEADgHQADgGAAgNIAAgzIATAAIAABgIgRAAIAAgOQgNAQgVAAQgKAAgIgCgAgKgqIANgaIAYAAIgXAag");
	this.shape_384.setTransform(8,183.3);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FF0000").s().p("AgvBFIAAiGIARAAIAAAMQAGgHAHgDQAIgEAKgBQAPAAALAHQAKAGAGAMQAFAMAAANQABAPgHALQgGAMgLAHQgMAGgNAAQgJAAgHgEQgIgDgEgFIAAAwgAgVgtQgKAKAAATQABASAIAIQAJAKANgBQALABAJgKQAJgJAAgTQAAgSgJgJQgIgKgMABQgLgBgKAKg");
	this.shape_385.setTransform(-84.6,186.8);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FF0000").s().p("AgYA+QgLgHgGgLQgGgMAAgPQAAgOAFgLQAGgMALgGQALgHAOAAQAJABAIAEQAHADAFAGIAAgwIATAAIAACFIgRAAIAAgNQgLAPgUAAQgNAAgLgGgAgUgKQgIAJAAASQAAATAJAJQAJAKALgBQANAAAIgIQAJgJAAgSQAAgTgJgKQgJgJgNAAQgLAAgJAJg");
	this.shape_386.setTransform(-190.4,183.3);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FF0000").s().p("AAbBDIAAg9QAAgMgHgFQgGgGgLAAQgIAAgHADQgHAFgEAGQgCAGAAALIAAA1IgTAAIAAiFIATAAIAAAwQANgOATAAQAMAAAJAFQAKAEADAHQAFAIAAAOIAAA9g");
	this.shape_387.setTransform(-230.5,183.2);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FF0000").s().p("AA5AyIAAg8QgBgKgBgFQgCgEgFgDQgEgCgHAAQgMAAgHAGQgIAHAAAPIAAA4IgSAAIAAg+QAAgLgFgGQgFgFgKAAQgIAAgGADQgIAEgCAHQgEAHAAANIAAAyIgTAAIAAhgIARAAIAAANQAGgHAJgEQAIgFAMAAQAMAAAHAFQAIAEACAIQAOgRAVAAQAQAAAJAIQAKAIgBARIAABCg");
	this.shape_388.setTransform(-268.1,184.9);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FF0000").s().p("AgwBFIAAiGIASAAIAAAMQAGgHAIgDQAHgEAKgBQAOAAAMAHQAKAGAFAMQAHAMgBANQAAAPgGALQgGAMgMAHQgLAGgNAAQgIAAgIgEQgHgDgGgFIAAAwgAgVgtQgKAKAAATQABASAIAIQAJAKANgBQALABAJgKQAJgJAAgTQAAgSgJgJQgJgKgLABQgMgBgJAKg");
	this.shape_389.setTransform(-319.7,186.8);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FF0000").s().p("AgYBCQgJgEgEgFQgEgFgCgHQgBgFAAgKIAAg8IATAAIAAA1IABASQACAGAGAEQAFAEAJAAQAHAAAIgEQAHgEADgGQADgHAAgMIAAg0IATAAIAABhIgRAAIAAgPQgNAQgVAAQgKAAgIgCgAgKgqIANgZIAYAAIgXAZg");
	this.shape_390.setTransform(252.1,159.8);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FF0000").s().p("AAdBFIAAgxQgEAGgIADQgIAEgJAAQgTAAgOgOQgOgNAAgXQAAgPAGgMQAFgLAMgGQALgGANgBQATAAAMAQIAAgNIARAAIAACGgAgTgtQgJAJAAATQAAASAJAJQAJAKAMgBQAMAAAJgIQAIgJAAgSQAAgTgJgJQgJgLgMABQgMgBgIAKg");
	this.shape_391.setTransform(192.1,163.3);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FF0000").s().p("AgoA9QgKgIAAgMQAAgHADgGQAEgGAGgDQAGgEAIgCIARgCQAVgDALgDIAAgEQABgKgGgEQgIgFgNgBQgNAAgGAFQgHAEgDAKIgSgCQADgKAFgHQAGgGALgEQALgDANAAQAPAAAIADQAJADAFAEQADAFACAGIACAPIAAAWQAAAXABAGQAAAGAEAGIgUAAQgCgFgBgHQgLAIgKADQgIACgLAAQgTAAgJgHgAgEAYIgQADQgFACgDADQgCAEAAAFQAAAGAGAEQAFAFAMAAQAJAAAJgFQAIgDAEgIQADgFAAgMIAAgGQgKAEgUADgAgKgqIAOgZIAYAAIgXAZg");
	this.shape_392.setTransform(163.8,159.8);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FF0000").s().p("AgCA/QgGgDgCgEQgCgFgBgPIAAg3IgNAAIAAgMIANAAIAAgZIASgJIAAAiIATAAIAAAMIgTAAIAAA4QAAAHABACIAEADQACACAEAAIAIgBIADAPIgOABQgLAAgEgDg");
	this.shape_393.setTransform(50.1,159.9);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FF0000").s().p("AA4AyIAAg8QAAgKgBgFQgCgEgFgDQgFgCgGAAQgMAAgIAGQgHAHgBAPIAAA4IgRAAIAAg+QAAgLgFgGQgEgFgLAAQgIAAgHADQgHAEgDAHQgCAHAAANIAAAyIgTAAIAAhgIARAAIAAANQAFgHAIgEQAJgFALAAQAMAAAJAFQAGAEAEAIQANgRAVAAQAQAAAKAIQAIAIABARIAABCg");
	this.shape_394.setTransform(14.1,161.4);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FF0000").s().p("AghAmQgOgNgBgYQAAgPAHgMQAFgMANgGQAMgGANAAQASAAAMAIQALAIAEAPIgTADQgDgKgGgFQgGgFgKAAQgNAAgKAJQgIAJAAASQAAAUAIAJQAJAIANAAQALAAAIgGQAHgGACgMIATACQgEARgMAKQgNAJgSAAQgWAAgNgNg");
	this.shape_395.setTransform(-11.8,161.5);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FF0000").s().p("AgIBDIAAhgIARAAIAABggAgIgvIAAgTIARAAIAAATg");
	this.shape_396.setTransform(-19.9,159.7);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FF0000").s().p("AglA4QgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPANQAOAOAAAVQAAAUgGAKQgHALgMAFQgMAHgPgBQgWABgPgNgAgWgJQgKAJAAASQAAASAKAKQAJAJANAAQAOAAAJgJQAKgKAAgTQAAgRgKgJQgJgKgOAAQgNAAgJAKgAgJgqIANgZIAYAAIgXAZg");
	this.shape_397.setTransform(-34.3,159.8);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FF0000").s().p("AgIBDIAAhgIARAAIAABggAgIgvIAAgTIARAAIAAATg");
	this.shape_398.setTransform(-70.1,159.7);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FF0000").s().p("AgPBEIAAhTIgRAAIAAgNIARAAIAAgKQAAgKACgFQADgGAHgEQAFgEANAAIARABIgDAPIgKgBQgJAAgEADQgDADAAAJIAAAJIAVAAIAAANIgVAAIAABTg");
	this.shape_399.setTransform(-74.9,159.6);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FF0000").s().p("AgIBDIAAhgIARAAIAABggAgIgvIAAgTIARAAIAAATg");
	this.shape_400.setTransform(-110.6,159.7);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#FF0000").s().p("AA4AyIAAg8QAAgKgBgFQgCgEgFgDQgEgCgHAAQgMAAgIAGQgIAHAAAPIAAA4IgRAAIAAg+QAAgLgFgGQgEgFgLAAQgIAAgHADQgGAEgEAHQgCAHAAANIAAAyIgTAAIAAhgIARAAIAAANQAFgHAIgEQAJgFALAAQAMAAAJAFQAHAEADAIQANgRAVAAQARAAAIAIQAJAIAAARIAABCg");
	this.shape_401.setTransform(-180.4,161.4);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#FF0000").s().p("AghAmQgOgNgBgYQAAgPAHgMQAFgMANgGQAMgGANAAQASAAAMAIQALAIAEAPIgTADQgDgKgGgFQgGgFgKAAQgNAAgKAJQgIAJAAASQAAAUAIAJQAJAIANAAQALAAAIgGQAHgGACgMIATACQgEARgMAKQgNAJgSAAQgWAAgNgNg");
	this.shape_402.setTransform(-211.1,161.5);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FF0000").s().p("AgIBDIAAhgIARAAIAABggAgIgvIAAgTIARAAIAAATg");
	this.shape_403.setTransform(-219.2,159.7);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#FF0000").s().p("AA5AyIAAg8QgBgKgBgFQgCgEgFgDQgEgCgHAAQgMAAgHAGQgIAHAAAPIAAA4IgSAAIAAg+QAAgLgFgGQgFgFgKAAQgIAAgGADQgIAEgCAHQgEAHAAANIAAAyIgTAAIAAhgIARAAIAAANQAGgHAJgEQAIgFAMAAQAMAAAHAFQAIAEACAIQAOgRAVAAQAQAAAJAIQAKAIgBARIAABCg");
	this.shape_404.setTransform(-253.2,161.4);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#FF0000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_405.setTransform(-274.1,161.5);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#FF0000").s().p("AgIBDIAAhgIARAAIAABggAgIgvIAAgTIARAAIAAATg");
	this.shape_406.setTransform(-294.4,159.7);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#FF0000").s().p("AgPBEIAAhTIgRAAIAAgNIARAAIAAgKQAAgKACgFQADgGAHgEQAFgEANAAIASABIgEAPIgLgBQgIAAgDADQgEADAAAJIAAAJIAWAAIAAANIgWAAIAABTg");
	this.shape_407.setTransform(-299.3,159.6);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#FF0000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_408.setTransform(-308.8,161.5);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#FF0000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_409.setTransform(273.6,138);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FF0000").s().p("AgzBDIAAiFIBnAAIAAAPIhSAAIAAAqIBHAAIAAAPIhHAAIAAA9g");
	this.shape_410.setTransform(130.2,136.2);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#FF0000").s().p("AAXBDIgkgxIgOALIAAAmIgSAAIAAiFIASAAIAABMIAsgnIAZAAIgqAjIAuA9g");
	this.shape_411.setTransform(112.7,136.2);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FF0000").s().p("AgwBEIAAiFIASAAIAAANQAGgIAIgDQAHgFAKAAQAPABAKAGQALAHAFALQAHAMAAAOQgBAPgGALQgGAMgMAGQgMAGgMAAQgIAAgIgEQgHgDgGgFIAAAvgAgVgsQgKAJAAATQAAARAKAJQAIAKAMgBQAMABAJgKQAJgJAAgSQAAgTgIgJQgKgJgLAAQgLAAgKAKg");
	this.shape_412.setTransform(84.2,139.8);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FF0000").s().p("AgCA/QgGgDgCgEQgCgFAAgPIAAg3IgOAAIAAgMIAOAAIAAgZIARgJIAAAiIATAAIAAAMIgTAAIAAA4QAAAHABACIAEADQACACAEAAIAIgBIADAPIgOABQgKAAgFgDg");
	this.shape_413.setTransform(33.3,136.4);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FF0000").s().p("AAaBDIAAg+QABgLgHgGQgGgFgLAAQgIAAgHADQgHAFgDAGQgEAFAAAMIAAA1IgTAAIAAiFIATAAIAAAwQAOgOATAAQAMABAJAEQAJAEAFAIQADAHAAANIAAA+g");
	this.shape_414.setTransform(8.7,136.2);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FF0000").s().p("AgpArQgJgIAAgMQAAgHADgGQAEgGAHgDQAFgDAIgCIARgCQAWgDAKgDIABgEQAAgKgGgEQgHgGgOAAQgNAAgGAEQgGAEgEAKIgSgCQADgKAFgGQAGgHALgDQALgEANAAQAPAAAJADQAIADAEAFQAFAEACAHIABAPIAAAVQAAAXABAGQABAGADAGIgUAAQgDgFAAgHQgKAIgKADQgJADgLAAQgTAAgKgIgAgEAGIgQADQgFACgCAEQgDADAAAFQAAAGAGAFQAFAEAMAAQAJAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_415.setTransform(-9.2,138);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#FF0000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_416.setTransform(-31.9,138);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#FF0000").s().p("AgCA/QgGgDgCgEQgCgFgBgPIAAg3IgNAAIAAgMIANAAIAAgZIASgJIAAAiIATAAIAAAMIgTAAIAAA4QAAAHABACIAEADQACACAEAAIAIgBIADAPIgOABQgLAAgEgDg");
	this.shape_417.setTransform(-81.2,136.4);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FF0000").s().p("AgpArQgJgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIAQgCQAXgDAKgDIABgEQgBgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQACgKAHgGQAFgHALgDQALgEANAAQAOAAAKADQAIADAEAFQAFAEACAHIAAAPIAAAVQAAAXABAGQACAGADAGIgUAAQgCgFgBgHQgKAIgKADQgJADgLAAQgSAAgLgIgAgEAGIgQADQgFACgCAEQgDADAAAFQAAAGAFAFQAHAEAKAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_418.setTransform(-120.2,138);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FF0000").s().p("AgCA/QgGgDgCgEQgCgFgBgPIAAg3IgNAAIAAgMIANAAIAAgZIASgJIAAAiIATAAIAAAMIgTAAIAAA4QAAAHABACIAEADQACACAEAAIAIgBIADAPIgOABQgLAAgEgDg");
	this.shape_419.setTransform(-128.9,136.4);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FF0000").s().p("AggA+QgMgIAAgQIASACQABAIAFADQAIAFALAAQANAAAHgFQAHgEADgJQABgEAAgQQgMAMgSAAQgXAAgMgOQgNgPAAgTQAAgOAGgMQAFgLAMgHQAKgGAPgBQATABAMAOIAAgMIASAAIAABTQAAAWgFAKQgFAKgMAFQgLAGgRAAQgTgBgMgHgAgUguQgJAJAAASQAAATAJAIQAIAIANABQANgBAIgIQAKgIgBgTQABgSgKgIQgJgKgMAAQgMAAgJAJg");
	this.shape_420.setTransform(-155.1,139.9);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FF0000").s().p("AgfArQgLgIgDgPIATgDQABAKAHAFQAHAFAMAAQANAAAHgEQAGgFAAgGQAAgGgGgDQgEgCgPgDQgUgFgIgDQgIgDgEgGQgEgGAAgHQAAgGADgGQAEgFAGgEQAEgDAIgCQAHgCAJAAQAMAAAKAEQAKADAFAGQAEAFACAKIgSACQgCgIgGgEQgGgEgKAAQgNAAgFAEQgGADAAAFQAAAEADACQACADAFACIAPAEQAUAEAIADQAIACAFAGQAEAGAAAIQAAAIgFAIQgGAHgKAEQgKAEgOAAQgUAAgMgIg");
	this.shape_421.setTransform(-172.1,138);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#FF0000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_422.setTransform(-183.4,138);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FF0000").s().p("AgVBVIAEgOIAJABQAGAAACgDQACgDAAgOIAAhlIATAAIAABmQABASgGAHQgHAJgPAAQgHAAgIgCgAAChDIAAgTIATAAIAAATg");
	this.shape_423.setTransform(-212.1,138.2);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#FF0000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_424.setTransform(-219.3,138);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FF0000").s().p("AgfArQgLgIgDgPIATgDQABAKAHAFQAHAFAMAAQANAAAHgEQAGgFAAgGQAAgGgGgDQgEgCgPgDQgUgFgIgDQgIgDgEgGQgEgGAAgHQAAgGADgGQAEgFAGgEQAEgDAIgCQAHgCAJAAQAMAAAKAEQAKADAFAGQAEAFACAKIgSACQgCgIgGgEQgGgEgKAAQgNAAgFAEQgGADAAAFQAAAEADACQACADAFACIAPAEQAUAEAIADQAIACAFAGQAEAGAAAIQAAAIgFAIQgGAHgKAEQgKAEgOAAQgUAAgMgIg");
	this.shape_425.setTransform(-254.5,138);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#FF0000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_426.setTransform(-288.5,138);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#FF0000").s().p("Ag/BDIAAiFIA2AAQARAAAJACQANACAJAIQAMAIAGAOQAHAOgBASQAAAOgDANQgFALgGAIQgGAHgIAFQgHAEgLACQgLADgNAAgAgqAzIAhAAQAOAAAJgDQAIgCAFgFQAIgFADgLQAFgLAAgOQAAgVgIgMQgIgLgLgEQgIgDgSAAIggAAg");
	this.shape_427.setTransform(-301.9,136.2);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#FF0000").s().p("AghAtQgJgEgDgIQgEgHgBgOIAAg8IAeAAIAAAsQAAAUACAEQABAEAFADQAEADAGAAQAHAAAFgEQAGgDADgGQACgFAAgUIAAgoIAeAAIAABgIgcAAIAAgPQgGAIgKAEQgJAEgKABQgMAAgJgFg");
	this.shape_428.setTransform(43.3,114.7);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#FF0000").s().p("AA1AyIAAg3QAAgOgDgEQgFgGgIAAQgGAAgGADQgFAEgCAGQgDAGAAANIAAAvIgdAAIAAg1QAAgOgBgEQgCgEgDgCQgDgCgGAAQgGAAgGADQgGADgCAGQgCAHgBANIAAAvIgdAAIAAhgIAcAAIAAANQAOgQAUAAQAKAAAJAEQAGAEAFAIQAIgIAIgEQAJgEAJAAQAMAAAJAFQAJAEAEAIQADAHAAAOIAAA9g");
	this.shape_429.setTransform(14,114.4);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#FF0000").s().p("AgOBDIAAhgIAdAAIAABggAgOgqIAAgYIAdAAIAAAYg");
	this.shape_430.setTransform(-4.3,112.7);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#FF0000").s().p("AgjA8QgSgIgJgRQgJgQAAgTQAAgVAKgQQAKgQAUgJQAOgGAVgBQAdAAAQALQAQAKAFATIgfAFQgDgKgJgGQgJgFgOAAQgTgBgMAMQgMALAAAXQAAAWAMAMQAMAMATAAQAKAAAKgDQAJgDAHgFIAAgRIgjAAIAAgWIBDAAIAAA0QgKAJgTAGQgSAHgTgBQgXAAgSgJg");
	this.shape_431.setTransform(-15.8,112.7);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#FF0000").s().p("AgOBDIAAhgIAdAAIAABggAgOgqIAAgYIAdAAIAAAYg");
	this.shape_432.setTransform(-46,112.7);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#FF0000").s().p("AgMAxIgthgIAfAAIAVAwIAFAQIADgIIAEgIIAVgwIAeAAIgsBgg");
	this.shape_433.setTransform(-55.1,114.6);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#FF0000").s().p("AhABDIAAiFIA5AAQASAAALADQANADAJAJQAKAJAGAMQAEANAAASQAAARgEAMQgGAOgLAKQgIAGgNAEQgLADgQAAgAghAtIAXAAQANAAAFgCQAIgCAFgDQAFgEADgKQADgIAAgQQAAgPgDgIQgDgIgGgFQgFgEgJgCQgGgCgTABIgOAAg");
	this.shape_434.setTransform(-80.4,112.7);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#FF0000").s().p("AAXBDIgkgyIgOALIAAAnIgSAAIAAiFIASAAIAABLIAsgmIAZAAIgqAjIAuA9g");
	this.shape_435.setTransform(13.9,210.2);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#FF0000").s().p("AgoArQgKgIAAgMQAAgHAEgGQADgGAGgDQAGgDAIgCIAQgCQAXgDAKgDIAAgEQAAgKgFgEQgIgGgNAAQgNAAgGAEQgHAEgCAKIgTgCQADgKAGgGQAFgHALgDQALgEANAAQAOAAAJADQAKADADAFQAFAEABAHIABAPIAAAVQAAAXABAGQABAGAEAGIgTAAQgEgFAAgHQgKAIgKADQgJADgLAAQgTAAgJgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAFAFQAGAEALAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_436.setTransform(271.5,188.5);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FF0000").s().p("AA5AyIAAg8QAAgKgCgFQgCgEgFgDQgFgCgGAAQgMAAgIAGQgHAHgBAPIAAA4IgRAAIAAg+QAAgLgFgGQgFgFgKAAQgIAAgGADQgHAEgEAHQgDAHAAANIAAAyIgSAAIAAhgIARAAIAAANQAFgHAIgEQAJgFAMAAQALAAAJAFQAGAEADAIQAOgRAVAAQARAAAJAIQAIAIABARIAABCg");
	this.shape_437.setTransform(111.1,188.4);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#FF0000").s().p("AgYAvQgJgEgEgFQgEgFgCgHQgBgFAAgKIAAg8IATAAIAAA1QAAANABAFQACAGAGAEQAFAEAJAAQAHAAAIgEQAHgEADgGQADgHAAgMIAAg0IATAAIAABhIgRAAIAAgPQgNAQgVAAQgKAAgIgCg");
	this.shape_438.setTransform(-7.8,188.7);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#FF0000").s().p("AgpArQgJgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIARgCQAVgDALgDIABgEQAAgKgGgEQgHgGgOAAQgNAAgGAEQgGAEgEAKIgSgCQADgKAFgGQAGgHALgDQALgEANAAQAPAAAIADQAKADAEAFQADAEADAHIABAPIAAAVQAAAXABAGQABAGADAGIgUAAQgDgFAAgHQgLAIgKADQgIADgLAAQgTAAgKgIgAgEAGIgQADQgFACgDAEQgCADAAAFQAAAGAGAFQAFAEAMAAQAJAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_439.setTransform(-19.7,188.5);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#FF0000").s().p("AghAmQgOgNgBgYQAAgPAHgMQAFgMANgGQAMgGANAAQASAAAMAIQALAIAEAPIgTADQgCgKgHgFQgGgFgKAAQgNAAgKAJQgIAJAAASQAAAUAIAJQAJAIANAAQALAAAIgGQAHgGACgMIATACQgDARgNAKQgNAJgSAAQgWAAgNgNg");
	this.shape_440.setTransform(-30.6,188.5);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#FF0000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIAQgCQAWgDALgDIAAgEQABgKgGgEQgHgGgOAAQgNAAgGAEQgHAEgDAKIgSgCQADgKAGgGQAFgHALgDQALgEANAAQAOAAAJADQAJADAFAFQADAEACAHIABAPIAAAVQAAAXABAGQACAGADAGIgTAAQgDgFgBgHQgKAIgLADQgIADgLAAQgTAAgJgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAFAFQAHAEAKAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_441.setTransform(-174.8,188.5);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#FF0000").s().p("AghAmQgOgNgBgYQAAgPAHgMQAFgMANgGQAMgGANAAQASAAAMAIQALAIAEAPIgTADQgCgKgHgFQgGgFgKAAQgNAAgKAJQgIAJAAASQAAAUAIAJQAJAIANAAQALAAAIgGQAHgGACgMIATACQgDARgNAKQgNAJgSAAQgWAAgNgNg");
	this.shape_442.setTransform(212.9,165);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#FF0000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIARgCQAVgDALgDIAAgEQABgKgGgEQgIgGgNAAQgNAAgGAEQgHAEgDAKIgSgCQADgKAFgGQAGgHALgDQALgEANAAQAPAAAIADQAJADAFAFQADAEACAHIACAPIAAAVQAAAXABAGQAAAGAEAGIgTAAQgDgFgBgHQgLAIgKADQgIADgLAAQgSAAgKgIgAgEAGIgQADQgFACgDAEQgCADAAAFQAAAGAGAFQAFAEAMAAQAJAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_443.setTransform(190.4,165);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#FF0000").s().p("AgCA/QgGgDgCgEQgDgFABgPIAAg3IgOAAIAAgMIAOAAIAAgZIASgJIAAAiIATAAIAAAMIgTAAIAAA4QAAAHAAACIADADQADACAEAAIAJgBIACAPIgOABQgLAAgEgDg");
	this.shape_444.setTransform(181.6,163.4);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FF0000").s().p("AA4AyIAAg8QAAgKgBgFQgCgEgFgDQgEgCgHAAQgMAAgIAGQgHAHgBAPIAAA4IgRAAIAAg+QAAgLgFgGQgEgFgLAAQgIAAgHADQgHAEgDAHQgCAHAAANIAAAyIgTAAIAAhgIARAAIAAANQAFgHAIgEQAJgFALAAQAMAAAJAFQAGAEAEAIQANgRAVAAQAQAAAKAIQAIAIABARIAABCg");
	this.shape_445.setTransform(157.7,164.9);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#FF0000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIAQgCQAWgDALgDIAAgEQABgKgGgEQgHgGgOAAQgNAAgGAEQgHAEgDAKIgSgCQADgKAGgGQAFgHALgDQALgEANAAQAOAAAJADQAJADAFAFQADAEACAHIABAPIAAAVQAAAXABAGQACAGADAGIgTAAQgDgFgBgHQgKAIgLADQgIADgLAAQgTAAgJgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAFAFQAHAEAKAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_446.setTransform(-137.9,165);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#FF0000").s().p("AgiAmQgNgNAAgYQAAgPAFgMQAHgMALgGQANgGANAAQASAAAMAIQAMAIACAPIgSADQgDgKgGgFQgHgFgJAAQgOAAgIAJQgJAJAAASQAAAUAJAJQAIAIANAAQALAAAHgGQAIgGACgMIASACQgDARgMAKQgNAJgSAAQgWAAgOgNg");
	this.shape_447.setTransform(-167.9,165);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#FF0000").s().p("AgYAvQgJgEgEgFQgEgFgCgHQgBgFAAgKIAAg8IATAAIAAA1QAAANABAFQACAGAGAEQAFADAJAAQAHAAAIgDQAHgEADgGQADgHAAgMIAAg0IATAAIAABhIgRAAIAAgPQgNAQgVAAQgKAAgIgCg");
	this.shape_448.setTransform(-262,165.2);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#FF0000").s().p("AgPBEIAAhTIgRAAIAAgNIARAAIAAgKQAAgKACgFQADgGAHgEQAGgEAMAAIASABIgEAPIgLgBQgIAAgDADQgEADAAAJIAAAJIAWAAIAAANIgWAAIAABTg");
	this.shape_449.setTransform(-270.4,163.1);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#FF0000").s().p("AAbBDIAAg+QAAgLgHgGQgGgFgLAAQgHAAgIADQgHAEgEAHQgDAFAAAMIAAA1IgSAAIAAiFIASAAIAAAwQAOgOATAAQAMABAJAEQAJAEAFAIQADAHAAANIAAA+g");
	this.shape_450.setTransform(248.4,139.7);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#FF0000").s().p("AgeA2IAAAMIgRAAIAAiFIATAAIAAAwQAMgNARgBQAKABAKADQAJAEAGAHQAGAGADAJQADAJAAAKQAAAZgOAOQgOANgUAAQgSAAgMgOgAgVgJQgJAJAAARQAAARAGAIQAIANAQAAQALAAAJgJQAJgKAAgSQAAgTgJgJQgIgJgMAAQgMAAgJAKg");
	this.shape_451.setTransform(218.8,139.8);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#FF0000").s().p("AgpArQgJgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIAQgCQAXgDAKgDIABgEQgBgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQACgKAHgGQAFgHALgDQALgEANAAQAOAAAKADQAIADAEAFQAFAEACAHIABAPIAAAVQgBAXABAGQACAGADAGIgUAAQgCgFgBgHQgKAIgKADQgJADgLAAQgSAAgLgIgAgEAGIgQADQgFACgCAEQgDADAAAFQAAAGAFAFQAHAEAKAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_452.setTransform(206.5,141.5);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#FF0000").s().p("AgpArQgJgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIAQgCQAWgDALgDIABgEQgBgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQACgKAGgGQAGgHALgDQALgEANAAQAPAAAJADQAIADAEAFQAEAEADAHIABAPIAAAVQAAAXAAAGQACAGADAGIgUAAQgDgFAAgHQgLAIgJADQgJADgLAAQgSAAgLgIgAgEAGIgQADQgFACgCAEQgDADAAAFQAAAGAFAFQAGAEAMAAQAJAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_453.setTransform(156.5,141.5);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#FF0000").s().p("AgeA2IAAAMIgRAAIAAiFIATAAIAAAwQAMgNARgBQAKABAKADQAJAEAGAHQAGAGADAJQADAJAAAKQAAAZgOAOQgOANgUAAQgSAAgMgOgAgVgJQgJAJAAARQAAARAGAIQAIANAQAAQALAAAJgJQAJgKAAgSQAAgTgJgJQgIgJgMAAQgMAAgJAKg");
	this.shape_454.setTransform(140,139.8);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#FF0000").s().p("AgeA2IAAAMIgRAAIAAiFIATAAIAAAwQAMgNARgBQAKABAKADQAJAEAGAHQAGAGADAJQADAJAAAKQAAAZgOAOQgOANgUAAQgSAAgMgOgAgVgJQgJAJAAARQAAARAGAIQAIANAQAAQALAAAJgJQAJgKAAgSQAAgTgJgJQgIgJgMAAQgMAAgJAKg");
	this.shape_455.setTransform(74.4,139.8);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#FF0000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIARgCQAVgDALgDIAAgEQABgKgGgEQgHgGgOAAQgNAAgGAEQgHAEgDAKIgSgCQADgKAGgGQAFgHALgDQALgEANAAQAPAAAIADQAJADAFAFQADAEACAHIABAPIAAAVQAAAXACAGQAAAGAEAGIgTAAQgDgFgBgHQgLAIgKADQgIADgLAAQgSAAgKgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAGAFQAGAEAKAAQAKAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_456.setTransform(56.2,141.5);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#FF0000").s().p("AghA+QgMgIAAgQIATACQABAIAGADQAGAFANAAQALAAAIgFQAHgEACgJQACgEAAgQQgMAMgSAAQgXAAgNgOQgMgPAAgTQAAgOAFgMQAHgMAKgGQALgGAPgBQATABANAOIAAgMIARAAIAABTQAAAXgFAJQgGAJgLAGQgMAGgPAAQgUgBgNgHgAgUguQgIAJAAASQAAATAIAIQAJAIAMABQANgBAJgIQAIgIABgTQgBgSgIgIQgKgKgNAAQgLAAgJAJg");
	this.shape_457.setTransform(-68.3,143.4);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#FF0000").s().p("AgvBEIAAiFIARAAIAAANQAGgIAHgDQAIgFAKAAQAOABALAGQALAGAGAMQAFAMABAOQAAAPgHALQgGAMgLAGQgNAGgMAAQgJAAgHgEQgIgDgEgFIAAAvgAgVgsQgJAJAAATQAAASAJAJQAIAJAMAAQAMAAAJgJQAJgKAAgSQAAgTgJgJQgIgJgMAAQgMAAgJAKg");
	this.shape_458.setTransform(-135.7,143.3);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#FF0000").s().p("AgdAyIAAhgIARAAIAAAOQAGgKAGgDQAEgEAHAAQAJAAAKAGIgGAPQgHgEgHAAQgGAAgEAEQgFADgCAGQgDAIAAALIAAAyg");
	this.shape_459.setTransform(-177,141.4);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#FF0000").s().p("AgwBEIAAiFIASAAIAAANQAGgIAIgDQAHgFAKAAQAOABAMAGQAKAGAFAMQAHAMgBAOQAAAPgGALQgGAMgMAGQgMAGgMAAQgIAAgIgEQgHgDgGgFIAAAvgAgVgsQgKAJAAATQAAASAJAJQAJAJAMAAQAMAAAJgJQAJgKAAgSQAAgTgIgJQgKgJgLAAQgMAAgJAKg");
	this.shape_460.setTransform(-187.1,143.3);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#FF0000").s().p("AgpArQgJgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIAQgCQAXgDAKgDIAAgEQAAgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQACgKAHgGQAFgHALgDQALgEANAAQAOAAAKADQAJADADAFQAFAEABAHIABAPIAAAVQAAAXABAGQABAGAEAGIgTAAQgEgFAAgHQgKAIgKADQgJADgLAAQgSAAgLgIgAgDAGIgRADQgFACgCAEQgDADAAAFQAAAGAFAFQAHAEAKAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_461.setTransform(-265,141.5);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#FF0000").s().p("AgjA8QgPgIgJgRQgIgRAAgSQAAgVAJgPQAKgRAQgHQASgJASABQAYAAAQAKQAPAKAGASIgUAFQgFgPgKgHQgKgGgQAAQgQgBgNAIQgLAIgFAMQgFAMAAAOQAAAQAGANQAFAMAMAHQAMAGANAAQASAAALgIQAMgJAEgRIAVAEQgGAXgRALQgRAMgYgBQgXAAgQgJg");
	this.shape_462.setTransform(-278.6,139.7);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#FF0000").s().p("AgjAyIAAhgIAcAAIAAANQAGgJAFgEQAFgDAIAAQAKAAAJAFIgJAXQgIgFgGAAQgGAAgEADQgDADgDAIQgDAIABAYIAAAeg");
	this.shape_463.setTransform(34.2,117.9);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#FF0000").s().p("AghAtQgJgEgDgIQgEgIAAgNIAAg8IAdAAIAAAsQAAAUABAEQACAEAFADQAEADAGAAQAHAAAFgEQAHgDACgGQACgFAAgUIAAgoIAeAAIAABgIgcAAIAAgPQgGAHgKAFQgJAEgKABQgMAAgJgFg");
	this.shape_464.setTransform(22.7,118.2);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#FF0000").s().p("AgcAtQgOgGgHgMQgHgLAAgQQAAgNAHgMQAHgMAOgGQAMgHAQAAQAZAAARAPQAQAOAAAVQgBAWgQAOQgQAPgZAAQgOAAgOgGgAgSgVQgIAIAAANQAAAPAIAHQAIAIAKAAQAMAAAHgIQAIgHAAgPQAAgNgIgIQgHgIgMAAQgKAAgIAIg");
	this.shape_465.setTransform(9.6,118);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#FF0000").s().p("AgKBAQgJgEgHgJIAAAPIgbAAIAAiFIAdAAIAAAwQANgNATgBQATAAAOANQANANABAYQgBAYgNAOQgOANgTAAQgIAAgKgEgAgRgFQgHAGAAAOQAAAQAGAHQAHAKALAAQAKAAAIgIQAGgGAAgQQAAgRgHgGQgGgIgLAAQgKAAgHAIg");
	this.shape_466.setTransform(-3.2,116.3);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#FF0000").s().p("Ag1AzQgVgSABggQAAgUAGgNQAGgLAJgIQAJgIAKgEQAPgFASAAQAhAAAVASQAVATgBAfQABAhgVASQgUASgiAAQghAAgUgSgAgegiQgMALAAAXQABAXALALQAMAMASAAQATAAALgMQANgLAAgXQAAgXgNgLQgLgMgTAAQgSAAgMAMg");
	this.shape_467.setTransform(-30.3,116.2);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#FF0000").s().p("AgvBDIgCgUIAMABQALAAAFgGQAEgFADgIIgqhgIAfAAIAaBEIAahEIAeAAIgnBcIgHARQgEAJgEAEQgDAFgEACQgEADgHACQgGABgJAAIgRgBg");
	this.shape_468.setTransform(-50.7,120);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#FF0000").s().p("AgxAxIAAgVIAqgoIAOgPIgMAAIgoAAIAAgUIBbAAIAAASIgqAqIgOANIAOAAIAuAAIAAAXg");
	this.shape_469.setTransform(-62,118.1);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#FF0000").s().p("AgxAxIAAgVIAqgoIAOgPIgMAAIgoAAIAAgUIBbAAIAAASIgqAqIgOANIAOAAIAuAAIAAAXg");
	this.shape_470.setTransform(-72.7,118.1);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#FF0000").s().p("Ag1AzQgVgSAAggQABgUAGgNQAFgLAKgIQAIgIAMgEQAOgFASAAQAiAAAUASQAVATAAAfQAAAhgVASQgUASgiAAQghAAgUgSgAgegiQgLALAAAXQgBAXAMALQANAMARAAQASAAAMgMQAMgLAAgXQAAgXgMgLQgLgMgTAAQgSAAgMAMg");
	this.shape_471.setTransform(-86.3,116.2);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#FF0000").s().p("AghAmQgPgNAAgYQABgPAGgMQAFgMAMgGQAMgGAOAAQASAAAMAIQAMAIADAPIgTADQgCgKgHgFQgHgFgJAAQgOAAgJAJQgIAJAAASQAAAUAIAJQAJAIANAAQALAAAHgGQAIgGACgMIASACQgCARgNAKQgNAJgSAAQgWAAgNgNg");
	this.shape_472.setTransform(208.6,208.5);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#FF0000").s().p("AgvBFIAAiGIARAAIAAAMQAGgHAHgEQAIgDAKAAQAOgBALAHQALAGAFAMQAGAMABANQAAAPgHALQgGAMgMAHQgMAGgMAAQgIAAgIgEQgIgDgFgFIAAAwgAgVgtQgJAKAAATQgBASAKAIQAIAJAMAAQAMAAAJgJQAJgJAAgTQAAgSgIgKQgKgJgLAAQgMAAgJAKg");
	this.shape_473.setTransform(89.8,210.3);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#FF0000").s().p("AAWBDIgjgyIgNALIAAAnIgTAAIAAiFIATAAIAABLIAsgmIAXAAIgpAjIAuA9g");
	this.shape_474.setTransform(-96.5,206.7);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#FF0000").s().p("AAaBDIAAg9QABgMgHgFQgGgGgLAAQgIAAgHAEQgHAEgDAGQgEAGAAALIAAA1IgTAAIAAiFIATAAIAAAwQAOgNATAAQAMgBAJAFQAJAEAFAHQADAIAAAOIAAA9g");
	this.shape_475.setTransform(-155.1,206.7);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#FF0000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIAQgCQAWgDALgDIAAgEQABgKgGgEQgHgGgOAAQgNAAgGAEQgHAEgDAKIgSgCQADgKAGgGQAFgHALgDQALgEANAAQAOAAAJADQAJADAFAFQADAEACAHIABAPIAAAVQAAAXABAGQACAGADAGIgTAAQgDgFgBgHQgLAIgKADQgIADgLAAQgTAAgJgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAFAFQAHAEAKAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_476.setTransform(-258.9,208.5);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#FF0000").s().p("AAaBDIAAg9QAAgMgFgFQgHgGgLAAQgIAAgHAEQgHAEgDAGQgEAGAAALIAAA1IgTAAIAAiFIATAAIAAAwQANgNAUAAQAMgBAJAFQAKAEAEAHQADAIAAAOIAAA9g");
	this.shape_477.setTransform(-282.8,206.7);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#FF0000").s().p("AgoBCIgCgPIALABQAGAAADgCQAFgBACgEIAFgMIACgEIgqhgIAUAAIAYA4IAHAVIAHgVIAYg4IATAAIgrBhQgGAQgDAGQgFAJgHADQgGAEgJAAQgGAAgGgCg");
	this.shape_478.setTransform(243.5,187);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#FF0000").s().p("AgpArQgJgIAAgMQAAgHADgGQAEgGAHgDQAFgDAIgCIARgCQAWgDAKgDIABgEQAAgKgGgEQgHgGgOAAQgNAAgGAEQgGAEgEAKIgSgCQADgKAFgGQAGgHALgDQALgEANAAQAPAAAJADQAIADAFAFQAEAEACAHIABAPIAAAVQAAAXABAGQABAGADAGIgUAAQgDgFAAgHQgKAIgKADQgJADgLAAQgTAAgKgIgAgEAGIgQADQgFACgCAEQgDADAAAFQAAAGAGAFQAFAEAMAAQAJAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_479.setTransform(232,185);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#FF0000").s().p("AAWAwIgSg4IgEgRIgWBJIgTAAIgjhgIAUAAIASA3IAHAWIAFgVIASg4IATAAIAQA3IAFAUIAHgUIATg3IASAAIgjBgg");
	this.shape_480.setTransform(218.3,185.1);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#FF0000").s().p("AAWBDIgjgyIgNALIAAAnIgTAAIAAiFIATAAIAABLIAsgmIAYAAIgqAjIAuA9g");
	this.shape_481.setTransform(153.4,183.2);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#FF0000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIARgCQAVgDALgDIAAgEQABgKgGgEQgHgGgOAAQgNAAgGAEQgHAEgDAKIgSgCQADgKAFgGQAGgHALgDQALgEANAAQAPAAAIADQAJADAFAFQADAEACAHIACAPIAAAVQAAAXABAGQAAAGAEAGIgUAAQgCgFgBgHQgLAIgKADQgIADgLAAQgTAAgJgIgAgEAGIgQADQgFACgDAEQgCADAAAFQAAAGAGAFQAFAEAMAAQAJAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_482.setTransform(31.5,185);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#FF0000").s().p("AgoBCIgCgPIALABQAGAAADgCQAFgBACgEIAFgMIACgEIgqhgIAUAAIAYA4IAHAVIAHgVIAYg4IATAAIgrBhQgGAQgDAGQgFAJgHADQgGAEgJAAQgGAAgGgCg");
	this.shape_483.setTransform(-44.1,187);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#FF0000").s().p("AgCA/QgGgDgCgEQgDgFABgPIAAg3IgOAAIAAgMIAOAAIAAgZIASgJIAAAiIASAAIAAAMIgSAAIAAA4QAAAHAAACIADADQADACAEAAIAIgBIADAPIgOABQgLAAgEgDg");
	this.shape_484.setTransform(-96.5,183.4);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#FF0000").s().p("AgSBDIAAhgIASAAIAABggAgSgpIANgaIAYAAIgWAag");
	this.shape_485.setTransform(-112.3,183.2);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#FF0000").s().p("AA5AyIAAg8QAAgKgCgFQgCgEgFgDQgFgCgGAAQgMAAgIAGQgHAHgBAPIAAA4IgRAAIAAg+QAAgLgFgGQgFgFgKAAQgIAAgHADQgGAEgEAHQgDAHAAANIAAAyIgSAAIAAhgIARAAIAAANQAFgHAIgEQAJgFAMAAQALAAAJAFQAGAEADAIQAOgRAVAAQARAAAJAIQAIAIABARIAABCg");
	this.shape_486.setTransform(-178.8,184.9);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#FF0000").s().p("AggA+QgMgIAAgQIASADQABAHAFADQAIAFALAAQANAAAHgFQAHgEADgJQABgFAAgQQgMANgSAAQgXAAgMgOQgNgPAAgTQAAgOAGgMQAFgMAMgGQAKgHAPAAQATAAAMAPIAAgMIASAAIAABTQAAAWgFAKQgFAJgMAGQgLAFgRABQgTgBgMgHgAgUguQgJAJAAASQAAATAJAIQAIAJANAAQANAAAIgJQAKgIgBgTQABgRgKgJQgJgKgMAAQgMAAgJAJg");
	this.shape_487.setTransform(193.6,163.4);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#FF0000").s().p("AgoArQgKgIAAgMQAAgHAEgGQADgGAGgDQAGgDAIgCIAQgCQAXgDAKgDIAAgEQAAgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQADgKAGgGQAFgHALgDQALgEANAAQAOAAAKADQAJADADAFQAFAEABAHIABAPIAAAVQAAAXABAGQABAGAEAGIgTAAQgEgFAAgHQgKAIgLADQgIADgLAAQgTAAgJgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAFAFQAHAEAKAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_488.setTransform(182,161.5);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#FF0000").s().p("AgvBFIAAiGIARAAIAAAMQAGgHAHgDQAIgFAKAAQAOAAALAHQALAGAFAMQAGALABAPQAAAOgHAMQgGAMgLAGQgNAGgMAAQgIAAgIgEQgIgDgFgFIAAAwgAgVgsQgJAJAAATQgBARAKAJQAIAKAMgBQAMABAJgKQAJgJAAgSQAAgTgIgJQgKgKgLABQgMgBgJALg");
	this.shape_489.setTransform(170.4,163.3);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#FF0000").s().p("AgoBCIgCgPIALABQAGAAAEgCQADgBADgEIAFgMIACgEIgqhgIAUAAIAYA4IAGAVIAIgVIAYg4IATAAIgrBhQgGAQgDAGQgFAJgGADQgHAEgJAAQgGAAgGgCg");
	this.shape_490.setTransform(152.9,163.5);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#FF0000").s().p("AA5AyIAAg8QAAgKgCgFQgCgEgFgDQgFgCgGAAQgMAAgIAGQgHAHgBAPIAAA4IgRAAIAAg+QAAgLgFgGQgFgFgKAAQgIAAgGADQgHAEgEAHQgDAHAAANIAAAyIgTAAIAAhgIASAAIAAANQAFgHAIgEQAJgFAMAAQAMAAAIAFQAGAEADAIQAOgRAVAAQARAAAJAIQAIAIABARIAABCg");
	this.shape_491.setTransform(138.5,161.4);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#FF0000").s().p("AA5AyIAAg8QgBgKgBgFQgCgEgFgDQgEgCgHAAQgMAAgIAGQgHAHAAAPIAAA4IgSAAIAAg+QAAgLgFgGQgEgFgLAAQgIAAgGADQgIAEgCAHQgEAHAAANIAAAyIgTAAIAAhgIASAAIAAANQAFgHAJgEQAIgFAMAAQALAAAJAFQAHAEACAIQAOgRAVAAQAQAAAKAIQAJAIAAARIAABCg");
	this.shape_492.setTransform(120.6,161.4);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#FF0000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIARgCQAVgDALgDIAAgEQABgKgGgEQgIgGgNAAQgNAAgGAEQgHAEgDAKIgSgCQADgKAFgGQAGgHALgDQALgEANAAQAPAAAIADQAJADAFAFQADAEACAHIACAPIAAAVQAAAXABAGQAAAGAEAGIgUAAQgCgFgBgHQgLAIgKADQgIADgLAAQgSAAgKgIgAgEAGIgQADQgFACgDAEQgCADAAAFQAAAGAGAFQAFAEAMAAQAJAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_493.setTransform(84.2,161.5);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#FF0000").s().p("AgUBVIADgOIAJABQAGAAACgDQADgDAAgOIAAhlIATAAIAABmQgBASgFAHQgHAJgOAAQgIAAgHgCgAADhDIAAgTIATAAIAAATg");
	this.shape_494.setTransform(26.9,161.7);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#FF0000").s().p("AghAmQgOgNgBgYQAAgPAHgMQAFgMANgGQAMgGANAAQASAAAMAIQAMAIADAPIgTADQgCgKgHgFQgGgFgKAAQgOAAgJAJQgIAJAAASQAAAUAIAJQAJAIANAAQALAAAIgGQAHgGACgMIASACQgCARgNAKQgNAJgSAAQgWAAgNgNg");
	this.shape_495.setTransform(-44.9,161.5);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#FF0000").s().p("AgpA9QgJgIAAgMQAAgHAEgGQADgGAHgDQAFgEAIgCIAQgCQAXgDAKgDIABgEQgBgKgFgEQgIgFgNgBQgNAAgGAFQgGAEgDAKIgTgCQACgKAHgHQAFgGALgEQALgDANAAQAOAAAKADQAIADAEAEQAFAFACAGIAAAPIAAAWQAAAXABAGQACAGADAGIgUAAQgCgFgBgHQgKAIgKADQgJACgLAAQgSAAgLgHgAgEAYIgQADQgFACgCADQgDAEAAAFQAAAGAFAEQAHAFAKAAQAKAAAIgFQAJgDAEgIQADgFAAgMIAAgGQgKAEgUADgAgJgqIAMgZIAZAAIgXAZg");
	this.shape_496.setTransform(-73.4,159.8);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#FF0000").s().p("AgCA/QgGgDgCgEQgDgFABgPIAAg3IgOAAIAAgMIAOAAIAAgZIASgJIAAAiIASAAIAAAMIgSAAIAAA4QAAAHAAACIADADQADACAEAAIAIgBIADAPIgOABQgLAAgEgDg");
	this.shape_497.setTransform(-82.1,159.9);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#FF0000").s().p("AgeA2IAAAMIgRAAIAAiFIATAAIAAAwQAMgOARAAQAKAAAKAEQAJAEAGAHQAGAGADAJQADAJAAAKQAAAZgOANQgOAOgUAAQgSAAgMgOgAgVgJQgJAJAAARQAAARAGAIQAIAMAQAAQALABAJgKQAJgJAAgSQAAgSgJgKQgIgJgMAAQgMAAgJAKg");
	this.shape_498.setTransform(-102.9,159.8);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#FF0000").s().p("AgpArQgJgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIAQgCQAXgDAKgDIABgEQgBgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQACgKAHgGQAFgHALgDQALgEANAAQAOAAAKADQAIADAEAFQAFAEACAHIAAAPIAAAVQAAAXABAGQACAGADAGIgUAAQgCgFgBgHQgKAIgKADQgJADgLAAQgSAAgLgIgAgEAGIgQADQgFACgCAEQgDADAAAFQAAAGAFAFQAHAEAKAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_499.setTransform(-121.1,161.5);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#FF0000").s().p("AgdAyIAAhgIARAAIAAAOQAGgKAGgDQAEgEAHAAQAJAAAKAGIgGAPQgHgEgHAAQgGAAgEAEQgFADgCAGQgDAIAAALIAAAyg");
	this.shape_500.setTransform(-265.9,161.4);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#FF0000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIAQgCQAWgDALgDIAAgEQABgKgGgEQgHgGgOAAQgNAAgGAEQgHAEgDAKIgSgCQADgKAGgGQAFgHALgDQALgEANAAQAOAAAJADQAJADAFAFQADAEACAHIABAPIAAAVQAAAXABAGQACAGADAGIgTAAQgDgFgBgHQgLAIgKADQgIADgLAAQgTAAgJgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAFAFQAHAEAKAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_501.setTransform(-306.2,161.5);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#FF0000").s().p("AgiAmQgOgNABgYQgBgPAHgMQAGgMAMgGQALgGAOAAQASAAAMAIQALAIADAPIgSADQgDgKgGgFQgHgFgJAAQgNAAgKAJQgIAJAAASQAAAUAIAJQAJAIANAAQALAAAIgGQAHgGACgMIATACQgEARgMAKQgNAJgSAAQgWAAgOgNg");
	this.shape_502.setTransform(248.7,138);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#FF0000").s().p("AgdAyIAAhgIARAAIAAAOQAGgKAGgDQAEgEAHAAQAJAAAKAGIgGAPQgHgEgHAAQgGAAgEAEQgFADgCAGQgDAIAAALIAAAyg");
	this.shape_503.setTransform(228.3,137.9);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#FF0000").s().p("AgdAyIAAhgIARAAIAAAOQAGgKAGgDQAEgEAHAAQAJAAAKAGIgGAPQgHgEgHAAQgGAAgEAEQgFADgCAGQgDAIAAALIAAAyg");
	this.shape_504.setTransform(119.7,137.9);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#FF0000").s().p("AgVBVIAEgOIAJABQAGAAACgDQADgDAAgOIAAhlIASAAIAABmQAAASgFAHQgHAJgPAAQgHAAgIgCgAADhDIAAgTIASAAIAAATg");
	this.shape_505.setTransform(99.7,138.2);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#FF0000").s().p("AA5AyIAAg8QgBgKgBgFQgCgEgFgDQgFgCgGAAQgMAAgHAGQgJAHABAPIAAA4IgSAAIAAg+QAAgLgFgGQgFgFgKAAQgIAAgGADQgIAEgCAHQgDAHgBANIAAAyIgTAAIAAhgIARAAIAAANQAGgHAJgEQAIgFAMAAQAMAAAHAFQAIAEACAIQAOgRAVAAQAQAAAJAIQAKAIgBARIAABCg");
	this.shape_506.setTransform(77.6,137.9);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#FF0000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIARgCQAVgDALgDIAAgEQABgKgGgEQgHgGgOAAQgNAAgGAEQgHAEgDAKIgSgCQADgKAFgGQAGgHALgDQALgEANAAQAPAAAIADQAJADAFAFQADAEACAHIACAPIAAAVQAAAXABAGQAAAGAEAGIgUAAQgCgFgBgHQgLAIgKADQgIADgLAAQgSAAgKgIgAgEAGIgQADQgFACgDAEQgCADAAAFQAAAGAGAFQAFAEAMAAQAJAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_507.setTransform(56.7,138);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#FF0000").s().p("AAbBDIAAg+QgBgLgFgGQgHgFgLAAQgIAAgHADQgHAFgDAGQgDAFAAAMIAAA1IgTAAIAAiFIATAAIAAAwQAMgOAUAAQAMABAKAEQAIAEAEAIQAFAHAAANIAAA+g");
	this.shape_508.setTransform(11.4,136.2);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#FF0000").s().p("AgdAyIAAhgIARAAIAAAOQAGgKAGgDQAEgEAHAAQAJAAAKAGIgGAPQgHgEgHAAQgGAAgEAEQgFADgCAGQgDAIAAALIAAAyg");
	this.shape_509.setTransform(-55.8,137.9);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#FF0000").s().p("AgwBEIAAiFIASAAIAAANQAGgIAIgDQAHgFAKAAQAPABAKAGQALAHAFALQAHAMAAAOQgBAPgGALQgGAMgMAGQgMAGgMAAQgIAAgIgEQgHgDgGgFIAAAvgAgVgsQgKAJAAATQAAARAJAJQAJAKAMgBQAMABAJgKQAJgJAAgSQAAgTgIgJQgKgJgLAAQgLAAgKAKg");
	this.shape_510.setTransform(-77.8,139.8);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#FF0000").s().p("AgwAxIAAgOIBGhGIgVAAIgtAAIAAgNIBaAAIAAALIg7A9IgMALIAYgBIAyAAIAAAPg");
	this.shape_511.setTransform(-157.6,138.1);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#FF0000").s().p("AgJBDIAAiFIASAAIAACFg");
	this.shape_512.setTransform(-195.2,136.2);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#FF0000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIARgCQAVgDALgDIAAgEQABgKgGgEQgHgGgOAAQgNAAgGAEQgHAEgDAKIgSgCQADgKAFgGQAGgHALgDQALgEANAAQAPAAAIADQAJADAFAFQADAEACAHIABAPIAAAVQAAAXACAGQAAAGAEAGIgTAAQgDgFgBgHQgLAIgKADQgIADgLAAQgSAAgKgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAGAFQAGAEAKAAQAKAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_513.setTransform(-245.3,138);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#FF0000").s().p("AgeA2IAAAMIgRAAIAAiFIATAAIAAAwQAMgNARgBQAKABAKADQAJAEAGAHQAGAGADAJQADAIAAALQAAAZgOANQgOAOgUAAQgSAAgMgOgAgVgJQgJAJAAARQAAARAGAIQAIAMAQAAQALABAJgKQAJgJAAgSQAAgTgJgJQgIgJgMAAQgMAAgJAKg");
	this.shape_514.setTransform(-257,136.3);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#FF0000").s().p("AgpArQgJgIAAgMQAAgHADgGQAEgGAHgDQAFgDAIgCIARgCQAWgDAKgDIABgEQAAgKgGgEQgIgGgNAAQgNAAgGAEQgGAEgEAKIgSgCQADgKAFgGQAGgHALgDQALgEANAAQAPAAAJADQAIADAEAFQAFAEACAHIABAPIAAAVQAAAXABAGQABAGADAGIgUAAQgDgFAAgHQgKAIgKADQgJADgLAAQgTAAgKgIgAgEAGIgQADQgFACgCAEQgDADAAAFQAAAGAGAFQAFAEAMAAQAJAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_515.setTransform(-275.2,138);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#FF0000").s().p("AgvBDIAAiFIAVAAIAAB1IBKAAIAAAQg");
	this.shape_516.setTransform(-286.7,136.2);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#FF0000").s().p("AgEBBQgGgDgDgDQgDgEgBgGIgBgTIAAgpIgOAAIAAgUIAOAAIAAgUIAcgPIAAAjIAUAAIAAAUIgUAAIAAAmIABAOQAAABAAAAQABABAAAAQAAAAABABQAAAAAAAAQADACADAAQAEAAAHgDIADAUQgLAEgNAAQgIAAgFgCg");
	this.shape_517.setTransform(45.9,112.9);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#FF0000").s().p("Ag6BDIAAiFIAyAAQAbAAAJACQANADAJAKQAJAKAAAQQAAAMgFAJQgFAHgJAFQgIAFgHABQgLACgVABIgUAAIAAAygAgbgGIARAAQASAAAFgBQAHgCAEgFQADgFAAgFQAAgIgFgEQgFgGgHAAQgGgBgQAAIgPAAg");
	this.shape_518.setTransform(4.5,112.7);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#FF0000").s().p("AgEBBQgGgDgDgDQgDgEgBgGIgBgTIAAgpIgOAAIAAgUIAOAAIAAgUIAdgPIAAAjIATAAIAAAUIgTAAIAAAmIAAAOQAAABAAAAQABABAAAAQAAAAABABQAAAAAAAAQACACAEAAQADAAAIgDIADAUQgKAEgNAAQgJAAgFgCg");
	this.shape_519.setTransform(-12.5,112.9);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#FF0000").s().p("AgjAyIAAhgIAbAAIAAANQAHgJAFgEQAFgDAIAAQAKAAAJAFIgJAXQgHgFgHAAQgGAAgEADQgEADgCAIQgCAIgBAYIAAAeg");
	this.shape_520.setTransform(-19.4,114.4);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#FF0000").s().p("AgKBAQgJgEgHgIIAAAOIgcAAIAAiFIAeAAIAAAwQAOgOARAAQAUABAOANQANANAAAXQAAAZgNANQgOANgTAAQgJAAgJgEgAgRgGQgHAGAAAQQAAAOAFAHQAIALALAAQALAAAGgIQAHgGAAgQQAAgRgHgHQgHgGgKgBQgKABgHAGg");
	this.shape_521.setTransform(-42.6,112.8);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#FF0000").s().p("AAgBDIgWgdQgLgQgFgEQgEgEgFgCQgFgBgLAAIgGAAIAAA4IgfAAIAAiFIBBAAQAYAAALAEQALADAHAJQAHAKAAALQAAAQgLAJQgKAJgUADQAKAFAHAGQAGAGALAQIATAagAglgJIAXAAQAVAAAGgCQAFgBAEgFQADgEAAgGQAAgGgEgFQgFgEgHgBIgWAAIgYAAg");
	this.shape_522.setTransform(-69.6,112.7);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#FF0000").s().p("AgKAKQgFgDAAgHQAAgEAFgEQAEgFAGAAQAGAAAFAFQAFADAAAFQAAAHgFADQgFAEgGAAQgGAAgEgEg");
	this.shape_523.setTransform(-212.6,215.8);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#FF0000").s().p("AAgAvQgEgEgFgGQgKAHgJAEQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAHgHQAIgGANgDIANgCIASgEIARgEQgBgKgEgEQgEgEgMAAQgKgBgGADQgFACgEAGIgGAHQgCABgFAAQgFAAgDgCQgEgCAAgFQAAgGAGgGQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHADAIIADAJQAAAEgEAEQgFADgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAEADQAFAEAJAAQAHAAAHgDQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_524.setTransform(-222.3,212.1);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#FF0000").s().p("AAaAvQgDgEAAgHIAAgpQAAgMgFgHQgDgGgMgBQgHAAgGAFQgHADgDAIQgBAFAAAOIAAAgQAAAHgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgEQAEgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAIgIAIgFQAIgEAMAAQALAAAJAEQAJAFAEAIQADAEABAGIABANIAAAuQAAAHgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_525.setTransform(-235.1,212.1);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#FF0000").s().p("AgQBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAHAAQAGAAADAEQAEADAAAHIAABHQAAAIgEAEQgDAEgGAAQgHAAgDgEgAgVgtQAAgBADgEIAFgIQAEgGADgCQADgCAFAAIAOAAQAGAAAAABIgGAGIgMAKIgHAGQgGADgHAAQgFAAAAgDg");
	this.shape_526.setTransform(-243.8,210.3);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#FF0000").s().p("AgXAvQgKgEgIgGQgHgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAALAEQAKADAIAIQAHAGAEAJQAEAJAAALQAAALgEAKQgEAJgHAHQgIAHgKADQgLAEgNAAQgMAAgLgEgAgOgcQgHAFgDAHQgEAHABAJQgBAKAEAHQADAHAHAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNAAQgIgBgGAEg");
	this.shape_527.setTransform(-253.8,212.1);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgDgEAAQgHAAgDAEQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_528.setTransform(-263.6,212.1);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEABADACQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_529.setTransform(-275.2,212.1);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#FF0000").s().p("AAWA2IAAgqQAAgMgEgGQgDgGgMAAQgHAAgFAEQgHADgDAGQgCAGAAAOIAAAhQAAAHgEAEQgEAFgGAAQgPAAAAgQIAAhrQAAgIAEgDQADgFAIAAQAGAAAEAFQAEADAAAIIAAAlQAFgGAGgDQAEgDAGgBQAGgCAHgBQALABAJAEQAIAEAFAHQADAFABAFIABAMIAAAwQAAAHgEAEQgEAFgGAAQgPAAAAgQg");
	this.shape_530.setTransform(-288,210.2);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#FF0000").s().p("AAgAvQgDgEgGgGQgKAGgKAEQgIAEgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAIgHQAHgGANgDIANgCIASgDIAQgFQAAgKgEgEQgEgEgMAAQgLAAgFACQgGACgDAGIgGAHQgBACgGgBQgFABgDgDQgEgDAAgEQAAgHAGgFQAFgHALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAOIAAAOIgBAOQAAAHAEAIIACAJQAAAFgEACQgEAEgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAGAEADQAFAEAJABQAHAAAIgEQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_531.setTransform(231.6,187.9);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgHIAAhsQAAgHADgDQAEgEAGgBQAGABAEAEQAEADAAAHIAABsQAAAHgEAEQgEAFgGAAQgGAAgDgFg");
	this.shape_532.setTransform(222.4,186);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#FF0000").s().p("AAhAvQgFgEgFgGQgKAGgJAEQgJAEgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAHgHQAIgGANgDIAOgCIARgDIARgFQgBgKgEgEQgEgEgNAAQgJAAgGACQgFACgEAGIgGAHQgCACgFgBQgFABgDgDQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAAOIAAAOIAAAOQAAAHACAIIADAJQAAAFgEACQgFAEgFAAQgEAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAGAEADQAFAEAIABQAIAAAHgEQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_533.setTransform(207.8,187.9);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#FF0000").s().p("AAbAvQgFgEAAgHIAAgpQAAgMgDgHQgFgGgLgBQgHAAgGAFQgGADgEAIQgCAFAAAOIAAAgQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgEQAEgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAHgIAKgEQAHgFAMAAQALAAAJAFQAJAEAFAIQACAEABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_534.setTransform(189.7,187.9);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#FF0000").s().p("AgXBBQgKgEgIgHQgHgGgEgKQgEgJAAgLQAAgMAEgIQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALADAHAHQAIAHAEAJQAEAIAAAMQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgKQgHAEgDAGQgEAIABAKQgBAKAEAHQADAHAHAEQAGAEAIAAQANAAAHgJQAIgIAAgPQAAgQgIgHQgHgJgNAAQgHAAgHAEgAgUgtQAAgBADgEIAEgIQAEgGAEgCQADgCAFAAIAOAAQAGAAgBABIgFAGIgMAKIgIAGQgFADgHAAQgFAAAAgDg");
	this.shape_535.setTransform(176.7,186.1);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEADAAAGQAAAGgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_536.setTransform(167.3,186.1);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgXQAAgOAHgMQAHgMAMgGQANgHARAAQALAAAKADQAJADAGAEQAHAFADAFQAEAFAAAEQAAAFgEADQgEADgFAAQgEAAgCgBIgGgGQgFgHgGgDQgFgEgJAAQgMAAgIAJQgHAJAAAOQAAAHACAGQACAGADAEQAEAEAGACQAFACAFAAQAJAAAGgDQAGgEAFgHQACgEAEgCQADgDAEAAQAFAAAEAEQADADAAAEQAAAFgDAFQgDAFgHAFQgGAFgKADQgKADgNAAQgZAAgPgOg");
	this.shape_537.setTransform(158.1,187.8);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgXQAAgOAHgMQAHgMAMgGQANgHARAAQALAAAKADQAJADAGAEQAHAFADAFQAEAFAAAEQAAAFgEADQgEADgFAAQgEAAgCgBIgGgGQgFgHgGgDQgFgEgJAAQgMAAgIAJQgHAJAAAOQAAAHACAGQACAGADAEQAEAEAGACQAFACAFAAQAJAAAGgDQAGgEAFgHQACgEAEgCQADgDAEAAQAFAAAEAEQADADAAAEQAAAFgDAFQgDAFgHAFQgGAFgKADQgKADgNAAQgZAAgPgOg");
	this.shape_538.setTransform(145.4,187.8);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEADAAAGQAAAGgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_539.setTransform(136.2,186.1);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#FF0000").s().p("AAhBBQgEgDAAgHIAAgCQgFAFgGAEQgGAEgHACQgFACgHAAQgLAAgIgFQgJgDgHgIQgGgGgDgKQgEgKAAgLQAAgWANgNQANgNAWAAQALAAAIADQAJAEAIAIIAAglQAAgIADgDQAEgEAGgBQAHAAAEAEQADAEAAAHIAABtQAAAHgDADQgFAFgGAAQgFAAgEgFgAgNgJQgHAEgDAGQgDAHAAAKQAAALADAGQAEAIAGADQAHAEAGAAQAHAAAHgEQAGgDAEgHQADgHABgLQgBgKgDgHQgEgGgGgEQgHgEgHABQgHAAgGADg");
	this.shape_540.setTransform(126.2,186);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#FF0000").s().p("AAgAvQgDgEgGgGQgKAGgKAEQgIAEgMAAQgLAAgJgEQgIgEgFgGQgEgHAAgIQAAgKAHgHQAIgGANgDIANgCIASgDIARgFQgBgKgEgEQgEgEgMAAQgKAAgGACQgFACgEAGIgGAHQgCACgFgBQgFABgDgDQgEgDAAgEQAAgHAGgFQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAOIAAAOIgBAOQAAAHADAIIADAJQAAAFgEACQgFAEgFAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAGAEADQAGAEAIABQAHAAAHgEQAIgDADgFQADgGABgNIAAgDIgTAEg");
	this.shape_541.setTransform(113.5,187.9);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#FF0000").s().p("AgmAlQgPgOAAgXQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_542.setTransform(95.5,187.9);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgHIAAhsQAAgHADgDQAEgEAGgBQAGABAEAEQAEADAAAHIAABsQAAAHgEAEQgEAFgGAAQgGAAgDgFg");
	this.shape_543.setTransform(86.3,186);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#FF0000").s().p("AgEBEIgKgEIgGgEIgIgHIAAACQAAAHgEADQgEAFgFAAQgGAAgEgFQgEgDAAgHIAAhsQAAgIAEgDQADgEAHgBQAGABADAEQAEADAAAHIAAAmQAJgIAHgDQAJgEAMAAQAOAAAKAGQALAFAGAMQAGAKAAAPQAAAMgDAJQgEAKgGAGQgGAIgJADQgJAFgLAAQgGgBgGgBgAgNgJQgGAEgEAGQgEAIABAKQAAAPAIAIQAHAIAMAAQAKAAAJgIQAHgIAAgQQAAgKgDgHQgEgGgFgEQgGgDgIAAQgHAAgHADg");
	this.shape_544.setTransform(77.2,186);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEADAAAGQAAAGgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_545.setTransform(67.3,186.1);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEgBQgHABgDADQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_546.setTransform(60.4,187.9);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEgBQgHABgDADQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_547.setTransform(51.3,187.9);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#FF0000").s().p("AgmAlQgPgOAAgXQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_548.setTransform(39.6,187.9);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgwIgEAAQgGAAgDgCQgEgDAAgEQAAgEAEgCQADgDAHAAIADAAIAAgOIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGAAADADQADACAAAEQAAAGgEABQgFACgIAAIgGAAIAAAtIABAJQAAAEACACQACABAFAAIAHgBIAHAAQADAAADACQADADAAADQAAAGgIADQgIAEgOAAQgMAAgHgEg");
	this.shape_549.setTransform(29.8,186.2);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#FF0000").s().p("AAhAvQgFgEgEgGQgLAGgKAEQgIAEgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAIgHQAHgGANgDIAOgCIARgDIAQgFQAAgKgEgEQgEgEgNAAQgKAAgFACQgFACgFAGIgFAHQgBACgGgBQgFABgDgDQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAIAAAOIAAAOIAAAOQAAAHADAIIACAJQAAAFgEACQgEAEgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAGAFADQAFAEAHABQAIAAAIgEQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_550.setTransform(14,187.9);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#FF0000").s().p("AAbAvQgFgEAAgHIAAgpQAAgMgDgHQgEgGgMgBQgHAAgGAFQgGADgDAIQgDAFAAAOIAAAgQAAAHgDAEQgEAEgHAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIAEgEQADgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAHgIAJgEQAIgFAMAAQALAAAJAFQAJAEAEAIQADAEABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_551.setTransform(1.2,187.9);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#FF0000").s().p("AAcAvQgEgEAAgGIAAgEIgLAKQgGAEgGACQgGABgJAAQgKABgIgEQgIgEgEgGQgGgJAAgPIAAgwQAAgHAEgEQADgEAHAAQAHAAADAEQAEAEAAAHIAAAnQAAAJACAGQACAFAEAEQAFAEAHgBQAHAAAFgDQAHgEADgGQACgGAAgRIAAgeQABgHAEgEQADgEAHAAQAGAAAEAEQAEAEAAAHIAABIQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_552.setTransform(-11.7,187.9);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEgBQgHABgDADQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_553.setTransform(-27.6,187.9);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#FF0000").s().p("AgWAvQgLgEgHgGQgIgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAALAEQAKADAIAIQAHAGAEAJQAEAJAAALQAAALgEAJQgEAKgHAHQgIAHgKADQgLAEgNAAQgMAAgKgEgAgOgbQgGADgEAIQgDAHgBAJQABAKADAHQAEAIAGAEQAGADAIAAQANAAAHgJQAIgIAAgPQAAgPgIgIQgHgJgNAAQgIAAgGAFg");
	this.shape_554.setTransform(-39.4,187.9);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#FF0000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgHADgEQAFgDAGAAQAFAAAFADQADAEAAAGIAAADQAIgIAJgEQAIgEAKAAQAOAAALAGQALAGAHALQAGAMAAAPQAAAMgEAJQgDAJgHAGQgGAHgKAEQgIADgLABQgLgBgIgEQgIgEgIgIIAAAlQAAAQgNAAQgJAAgCgEgAgTgpQgHAHgBAQQABAPAHAIQAIAIALAAQAIAAAGgEQAGgDAEgHQADgHAAgKQAAgKgDgHQgEgHgFgEQgHgEgIABQgKAAgJAIg");
	this.shape_555.setTransform(-52.4,189.7);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#FF0000").s().p("AgWAvQgLgEgHgGQgIgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAAKAEQALADAHAIQAIAGAEAJQAEAJAAALQAAALgEAJQgEAKgIAHQgHAHgLADQgKAEgNAAQgMAAgKgEgAgOgbQgHADgDAIQgDAHgBAJQABAKADAHQADAIAHAEQAGADAIAAQANAAAIgJQAHgIAAgPQAAgPgHgIQgIgJgNAAQgHAAgHAFg");
	this.shape_556.setTransform(-71.2,187.9);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#FF0000").s().p("AAhBBQgEgDAAgHIAAgCQgFAFgGAEQgGAEgHACQgFACgHAAQgLAAgIgFQgKgDgGgIQgGgGgEgKQgDgKAAgLQAAgWANgNQANgNAWAAQALAAAIADQAJAEAIAIIAAglQAAgIADgDQAEgEAHgBQAGAAAEAEQADAEAAAHIAABtQAAAHgDADQgFAFgFAAQgGAAgEgFgAgNgJQgHAEgDAGQgDAHAAAKQAAALADAGQAEAIAGADQAHAEAGAAQAHAAAHgEQAGgDAEgHQADgHABgLQgBgKgDgHQgEgGgGgEQgHgEgHABQgHAAgGADg");
	this.shape_557.setTransform(-84.7,186);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEADAAAGQAAAGgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_558.setTransform(-94,186.1);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgXQAAgOAHgMQAHgMAMgGQANgHARAAQALAAAKADQAJADAGAEQAHAFADAFQAEAFAAAEQAAAFgEADQgEADgFAAQgEAAgCgBIgGgGQgFgHgGgDQgFgEgJAAQgMAAgIAJQgHAJAAAOQAAAHACAGQACAGADAEQAEAEAGACQAFACAFAAQAJAAAGgDQAGgEAFgHQACgEAEgCQADgDAEAAQAFAAAEAEQADADAAAEQAAAFgDAFQgDAFgHAFQgGAFgKADQgKADgNAAQgZAAgPgOg");
	this.shape_559.setTransform(-103.3,187.8);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEADAAAGQAAAGgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_560.setTransform(-112.5,186.1);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#FF0000").s().p("AAcAvQgEgEAAgGIAAgEIgLAKQgFAEgHACQgGABgJAAQgKABgIgEQgIgEgEgGQgGgJAAgPIAAgwQAAgHAEgEQAEgEAGAAQAGAAAFAEQADAEAAAHIAAAnQABAJABAGQACAFAEAEQAEAEAIgBQAGAAAHgDQAGgEADgGQADgGgBgRIAAgeQAAgHAFgEQAEgEAGAAQAGAAAEAEQAEAEAAAHIAABIQAAAGgEAEQgEAEgFAAQgHAAgDgEg");
	this.shape_561.setTransform(-121.8,187.9);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#FF0000").s().p("AgbAvQgKgEgGgGQgFgHAAgGQAAgEADgDQAEgDAEAAQAFAAACACIAFAFQAEAHAHADQAGADAKABQAIgBAFgDQAGgDAAgFQAAgGgGgDQgFgDgNgDQgOgDgKgDQgJgDgFgGQgGgGAAgIQAAgHAFgHQAGgHAJgEQALgEANAAQALAAAIACQAJACAHAEQAFADAEAEQACAEAAAEQABAEgEADQgEADgFAAQgFAAgDgDIgHgGQgDgEgFgCQgEgCgHAAQgIAAgEADQgGADAAAEQABAEADADIALAEIAQAEQAOACAIAEQAIADAEAGQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgLgEg");
	this.shape_562.setTransform(-134.2,187.9);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#FF0000").s().p("AgmAlQgPgOAAgXQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_563.setTransform(-151.7,187.9);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#FF0000").s().p("AgbAvQgKgEgGgGQgFgHAAgGQAAgEADgDQAEgDAEAAQAFAAACACIAFAFQAEAHAHADQAGADAKABQAIgBAFgDQAGgDAAgFQAAgGgGgDQgFgDgNgDQgOgDgKgDQgJgDgFgGQgGgGAAgIQAAgHAFgHQAGgHAJgEQALgEANAAQALAAAIACQAJACAHAEQAFADAEAEQACAEAAAEQABAEgEADQgEADgFAAQgFAAgDgDIgHgGQgDgEgFgCQgEgCgHAAQgIAAgEADQgGADAAAEQABAEADADIALAEIAQAEQAOACAIAEQAIADAEAGQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgLgEg");
	this.shape_564.setTransform(-163.9,187.9);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#FF0000").s().p("AgmAlQgPgOAAgXQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_565.setTransform(-181.4,187.9);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgwIgEAAQgGAAgDgCQgEgDAAgEQAAgEAEgCQADgDAHAAIADAAIAAgOIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGAAADADQADACAAAEQAAAGgEABQgFACgIAAIgGAAIAAAtIABAJQAAAEACACQACABAFAAIAHgBIAHAAQADAAADACQADADAAADQAAAGgIADQgIAEgOAAQgMAAgHgEg");
	this.shape_566.setTransform(-191.1,186.2);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#FF0000").s().p("AAbAvQgFgEAAgHIAAgpQAAgMgDgHQgEgGgMgBQgHAAgGAFQgGADgDAIQgDAFAAAOIAAAgQAAAHgDAEQgEAEgHAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIAEgEQADgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAHgIAJgEQAIgFAMAAQALAAAJAFQAJAEAEAIQADAEABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_567.setTransform(-201.7,187.9);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#FF0000").s().p("AgmAlQgPgOAAgXQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_568.setTransform(-214.6,187.9);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#FF0000").s().p("AA5AvQgFgEAAgIIAAgpIgBgNQgBgFgDgDQgEgDgGgBQgGAAgFAEQgFADgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgFgEQgDgEAAgIIAAgnIgBgOQgBgGgDgDQgDgDgIgBQgOAAgEAJQgFAIABAQIAAAhQAAAIgFAEQgEAEgGAAQgHAAgDgEQgFgEAAgIIAAhGQAAgIAEgDQAEgEAGAAQAFAAAEADQAEAEAAAGIAAADQAIgJAIgDQAJgDAKgBQALABAHADQAHAEAGAIQAGgIAJgEQAJgDAKgBQALAAAJAFQAIAEAEAHQAEAHAAAOIAAAwQAAAIgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_569.setTransform(-230.4,187.9);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#FF0000").s().p("AgmAlQgPgOAAgXQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_570.setTransform(-246.2,187.9);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgwIgEAAQgGAAgDgCQgEgDAAgEQAAgEAEgCQADgDAHAAIADAAIAAgOIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGAAADADQADACAAAEQAAAGgEABQgFACgIAAIgGAAIAAAtIABAJQAAAEACACQACABAFAAIAHgBIAHAAQADAAADACQADADAAADQAAAGgIADQgIAEgOAAQgMAAgHgEg");
	this.shape_571.setTransform(-256,186.2);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#FF0000").s().p("AgaAvQgMgEgFgGQgFgHAAgGQAAgEADgDQADgDAGAAQAEAAADACIAEAFQAEAHAHADQAGADAJABQAJgBAGgDQAFgDAAgFQAAgGgFgDQgHgDgLgDQgQgDgIgDQgKgDgGgGQgFgGAAgIQAAgHAFgHQAFgHALgEQAKgEAOAAQAJAAAKACQAIACAGAEQAGADADAEQAEAEAAAEQgBAEgDADQgDADgHAAQgEAAgDgDIgHgGQgDgEgEgCQgFgCgGAAQgJAAgFADQgEADAAAEQAAAEADADIAKAEIARAEQANACAJAEQAIADAFAGQAEAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgPAAgLgEg");
	this.shape_572.setTransform(-266,187.9);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEADAAAGQAAAGgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_573.setTransform(-274.7,186.1);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEgBQgHABgDADQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_574.setTransform(-281.6,187.9);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgwIgEAAQgGAAgDgCQgEgDAAgEQAAgEAEgCQADgDAHAAIADAAIAAgOIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGAAADADQADACAAAEQAAAGgEABQgFACgIAAIgGAAIAAAtIABAJQAAAEACACQACABAFAAIAHgBIAHAAQADAAADACQADADAAADQAAAGgIADQgIAEgOAAQgMAAgHgEg");
	this.shape_575.setTransform(-290.4,186.2);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#FF0000").s().p("AgOAaQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAgDAFgCQALgHAAgIQgGgBgFgCQgFgEAAgHQAAgFAFgFQAFgDAGAAQAFgBAEADQAEADACAEQACAFAAAGQAAAJgEAHQgEAJgHAEQgFAEgFAAQgEAAgCgBg");
	this.shape_576.setTransform(220,168.7);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#FF0000").s().p("AAgAvQgDgEgGgGQgKAGgKAEQgIAEgMAAQgLAAgJgEQgIgEgFgGQgEgHAAgIQAAgJAHgIQAIgGANgDIANgCIASgDIAQgFQAAgKgEgEQgEgEgMgBQgKABgGACQgFACgEAGIgGAHQgCACgFgBQgFABgDgDQgEgDAAgEQAAgHAGgFQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAOIAAAOIgBAOQAAAHADAIIADAJQAAAFgEACQgFAEgFAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAGAFAIAAQAHAAAHgEQAIgDADgFQADgGAAgNIAAgDIgSAEg");
	this.shape_577.setTransform(210.3,163.7);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgXQAAgOAHgMQAHgMAMgGQANgHARAAQALAAAKADQAJADAGAEQAHAFADAFQAEAFAAAEQAAAFgEADQgEADgFAAQgEAAgCgBIgGgGQgFgHgGgDQgFgEgJAAQgMAAgIAJQgHAJAAAOQAAAHACAGQACAGADAEQAEAEAGACQAFACAFAAQAJAAAGgDQAGgEAFgHQACgEAEgCQADgDAEAAQAFAAAEAEQADADAAAEQAAAFgDAFQgDAFgHAFQgGAFgKADQgKADgNAAQgZAAgPgOg");
	this.shape_578.setTransform(197.5,163.6);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_579.setTransform(188.3,161.9);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgwIgEAAQgGAAgDgCQgEgDAAgEQAAgEAEgCQADgDAHAAIADAAIAAgOIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABADIAAALIAAAQIALAAQAGAAADADQADACAAAEQAAAGgEABQgFACgIAAIgGAAIAAAuIABAJQAAADACABQACACAFAAIAHgBIAHAAQADAAADACQADADAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_580.setTransform(182,162);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#FF0000").s().p("AgaAvQgLgFgGgFQgFgHAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAFQAFAHAGADQAGAEAKAAQAIAAAFgEQAGgDAAgFQAAgGgGgDQgFgDgNgDQgPgDgIgDQgKgDgFgGQgGgFAAgJQAAgIAFgGQAGgHAKgEQAJgEAOAAQALAAAIACQAKACAFAEQAGADADAEQADAEAAAEQAAAFgDACQgEADgFAAQgEAAgEgCIgHgHQgDgEgEgCQgFgCgHAAQgHAAgFADQgGADAAAEQABAEADADIALAEIAQAEQANACAJAEQAIAEAFAFQAEAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgKgEg");
	this.shape_581.setTransform(172,163.7);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#FF0000").s().p("AgQBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAHAAQAGAAADAEQAEADAAAHIAABHQAAAIgEAEQgDAEgGAAQgHAAgDgEgAgVgtQAAgBADgEIAFgIQAEgGADgCQADgCAFAAIAOAAQAGAAAAABIgGAGIgMAKIgHAGQgGADgHAAQgFAAAAgDg");
	this.shape_582.setTransform(164,161.9);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgwIgEAAQgGAAgDgCQgEgDAAgEQAAgEAEgCQADgDAHAAIADAAIAAgOIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABADIAAALIAAAQIALAAQAGAAADADQADACAAAEQAAAGgEABQgFACgIAAIgGAAIAAAuIABAJQAAADACABQACACAFAAIAHgBIAHAAQADAAADACQADADAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_583.setTransform(157,162);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDADQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_584.setTransform(148.5,163.7);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#FF0000").s().p("AAhAvQgFgEgEgGQgLAGgKAEQgIAEgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgJAIgIQAHgGANgDIAOgCIARgDIAQgFQAAgKgEgEQgEgEgNgBQgKABgFACQgFACgFAGIgFAHQgBACgGgBQgFABgDgDQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAIAAAOIAAAOIAAAOQAAAHADAIIACAJQAAAFgEACQgEAEgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAFAEQAFAFAHAAQAIAAAIgEQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_585.setTransform(136.9,163.7);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#FF0000").s().p("AAhBCQgEgEAAgHIAAgDQgGAGgFAEQgGAEgGACQgGABgIAAQgKAAgJgDQgJgFgGgHQgGgGgEgKQgDgKAAgLQAAgWANgNQAOgNAUAAQAMAAAJADQAIAEAIAIIAAglQAAgIAEgEQADgDAHAAQAGAAADADQAEAEAAAHIAABtQAAAHgEAEQgEADgFAAQgGAAgEgDgAgNgJQgGAEgDAGQgEAIAAAJQAAALAEAGQADAIAHADQAFAEAHAAQAHAAAHgEQAGgDAEgHQAEgHgBgLQABgJgEgIQgEgGgGgEQgHgEgHABQgHAAgGADg");
	this.shape_586.setTransform(118.1,161.8);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#FF0000").s().p("AAhAvQgFgEgEgGQgLAGgKAEQgIAEgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgJAIgIQAHgGANgDIAOgCIARgDIAQgFQAAgKgEgEQgEgEgNgBQgKABgFACQgFACgFAGIgFAHQgBACgGgBQgFABgDgDQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAIAAAOIAAAOIAAAOQAAAHADAIIACAJQAAAFgEACQgEAEgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAFAEQAFAFAHAAQAIAAAIgEQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_587.setTransform(105.4,163.7);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#FF0000").s().p("AAhBCQgEgEAAgHIAAgDQgGAGgFAEQgGAEgGACQgGABgIAAQgKAAgJgDQgJgFgGgHQgGgGgEgKQgDgKAAgLQAAgWANgNQAOgNAUAAQAMAAAJADQAIAEAIAIIAAglQAAgIAEgEQADgDAHAAQAGAAADADQAEAEAAAHIAABtQAAAHgEAEQgEADgFAAQgGAAgEgDgAgNgJQgGAEgDAGQgEAIAAAJQAAALAEAGQADAIAHADQAFAEAHAAQAHAAAHgEQAGgDAEgHQAEgHgBgLQABgJgEgIQgEgGgGgEQgHgEgHABQgHAAgGADg");
	this.shape_588.setTransform(92,161.8);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_589.setTransform(82.7,161.9);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#FF0000").s().p("AgJBCQgEgFAAgHIAAhsQAAgHADgEQAEgDAGAAQAGAAAEADQAEAEAAAHIAABsQAAAHgEAFQgEADgGAAQgGAAgDgDg");
	this.shape_590.setTransform(76.9,161.8);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#FF0000").s().p("AAhAvQgFgEgEgGQgLAGgJAEQgJAEgMAAQgLAAgIgEQgJgEgEgGQgFgHAAgIQAAgJAIgIQAHgGANgDIAOgCIARgDIARgFQgBgKgEgEQgEgEgNgBQgKABgFACQgGACgEAGIgFAHQgBACgGgBQgFABgDgDQgEgDAAgEQAAgHAFgFQAGgHALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAIAAAOIAAAOIAAAOQAAAHADAIIACAJQAAAFgEACQgFAEgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAFAEQAFAFAHAAQAIAAAIgEQAGgDAEgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_591.setTransform(67.7,163.7);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgXQAAgOAHgMQAHgMAMgGQANgHARAAQALAAAKADQAJADAGAEQAHAFADAFQAEAFAAAEQAAAFgEADQgEADgFAAQgEAAgCgBIgGgGQgFgHgGgDQgFgEgJAAQgMAAgIAJQgHAJAAAOQAAAHACAGQACAGADAEQAEAEAGACQAFACAFAAQAJAAAGgDQAGgEAFgHQACgEAEgCQADgDAEAAQAFAAAEAEQADADAAAEQAAAFgDAFQgDAFgHAFQgGAFgKADQgKADgNAAQgZAAgPgOg");
	this.shape_592.setTransform(55,163.6);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#FF0000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADABAAAFQAAADgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_593.setTransform(37,163.7);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#FF0000").s().p("AA5AvQgFgEAAgIIAAgpIgBgNQgBgFgDgDQgEgEgGAAQgGAAgFAEQgFACgDAGQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgFgEQgDgEAAgIIAAgnIgBgOQgBgGgDgDQgDgEgIAAQgOAAgEAJQgFAIABAQIAAAhQAAAIgFAEQgEAEgGAAQgHAAgDgEQgFgEAAgIIAAhGQAAgIAEgDQAEgEAGAAQAFAAAFAEQADADAAAGIAAADQAIgJAIgDQAJgDAKgBQALABAHADQAHAEAGAIQAGgIAJgEQAJgDAKgBQALAAAJAFQAIAEAEAHQAEAHAAAOIAAAwQAAAIgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_594.setTransform(21.2,163.7);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDADQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_595.setTransform(7.7,163.7);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#FF0000").s().p("AgWAvQgLgEgHgGQgIgHgEgKQgEgJAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALADAHAIQAIAGAEAKQAEAIAAALQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgbQgHADgDAIQgDAHgBAJQABAKADAHQADAIAHADQAGAEAIAAQANAAAIgJQAHgIAAgPQAAgPgHgIQgIgJgNAAQgHAAgHAFg");
	this.shape_596.setTransform(-4.1,163.7);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#FF0000").s().p("AAaAvQgEgEAAgHIAAgpQAAgNgDgGQgFgHgLAAQgHAAgGAFQgHADgDAHQgCAGAAAOIAAAgQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgDQAEgEAGAAQAEAAADABIAFAGQACADAAAEIAAADQAIgJAJgDQAHgFAMAAQALAAAJAFQAJAEAFAHQACAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_597.setTransform(-17.1,163.7);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#FF0000").s().p("AgnBDQgKAAgFgEQgEgEAAgIIAAhkQAAgHACgDQACgEAEgCQAEgBAHAAIBRAAQAHAAAEACQAEADAAAFQAAAFgEADQgEADgHAAIhFAAIAAAhIA/AAQAIAAADACQADADABAFQgBAEgDADQgDACgIAAIg/AAIAAAmIBHAAQAIAAADAEQAEACAAAGQAAAEgEADQgDADgIAAg");
	this.shape_598.setTransform(-30.3,161.8);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#FF0000").s().p("AgKAKQgFgEAAgGQAAgFAFgDQAEgFAGAAQAGAAAFAFQAFADAAAFQAAAGgFAEQgFAEgGAAQgGAAgEgEg");
	this.shape_599.setTransform(-46.6,167.4);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#FF0000").s().p("AAaAvQgDgEAAgHIAAgpQAAgNgFgGQgDgHgMAAQgHAAgGAFQgHADgDAHQgBAGAAAOIAAAgQAAAHgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgDQAEgEAGAAQAEAAADABIAFAGQACADAAAEIAAADQAIgJAIgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_600.setTransform(-56.4,163.7);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#FF0000").s().p("AgWAvQgLgEgHgGQgIgHgEgKQgEgJAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALADAHAIQAIAGAEAKQAEAIAAALQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgbQgHADgDAIQgDAHgBAJQABAKADAHQADAIAHADQAGAEAIAAQANAAAIgJQAHgIAAgPQAAgPgHgIQgIgJgNAAQgHAAgHAFg");
	this.shape_601.setTransform(-69.4,163.7);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#FF0000").s().p("AgaAvQgLgFgGgFQgFgHAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAFQAFAHAGADQAGAEAKAAQAIAAAFgEQAGgDAAgFQAAgGgGgDQgFgDgNgDQgPgDgIgDQgKgDgFgGQgGgFAAgJQAAgIAFgGQAGgHAKgEQAJgEAOAAQALAAAIACQAKACAFAEQAGADADAEQADAEAAAEQAAAFgDACQgEADgGAAQgDAAgEgCIgHgHQgDgEgEgCQgFgCgHAAQgHAAgFADQgGADAAAEQABAEADADIALAEIAQAEQANACAJAEQAIAEAFAFQAEAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgKgEg");
	this.shape_602.setTransform(-81.8,163.7);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_603.setTransform(-90.5,161.9);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDADQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_604.setTransform(-97.4,163.7);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDADQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_605.setTransform(-106.5,163.7);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#FF0000").s().p("AgXAvQgKgEgIgGQgHgHgEgKQgEgJAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAIAAALQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgbQgHADgDAIQgDAHAAAJQAAAKADAHQADAIAHADQAGAEAIAAQANAAAHgJQAIgIAAgPQAAgPgIgIQgHgJgNAAQgIAAgGAFg");
	this.shape_606.setTransform(-118.3,163.7);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#FF0000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgCgFgDgDQgEgEgGAAQgGAAgFAEQgFACgDAGQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgEgEQgFgEAAgIIAAgnIgBgOQAAgGgDgDQgEgEgGAAQgOAAgFAJQgEAIgBAQIAAAhQAAAIgDAEQgFAEgGAAQgGAAgFgEQgEgEAAgIIAAhGQAAgIAEgDQAEgEAFAAQAHAAADAEQAFADAAAGIAAADQAHgJAJgDQAIgDAKgBQALABAIADQAGAEAFAIQAIgIAIgEQAIgDALgBQALAAAIAFQAJAEAEAHQAEAHAAAOIAAAwQAAAIgEAEQgFAEgGAAQgHAAgEgEg");
	this.shape_607.setTransform(-134.2,163.7);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#FF0000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgCgFgDgDQgEgEgGAAQgGAAgFAEQgFACgDAGQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgEgEQgFgEAAgIIAAgnIgBgOQAAgGgDgDQgEgEgGAAQgPAAgEAJQgEAIgBAQIAAAhQAAAIgDAEQgFAEgGAAQgGAAgFgEQgEgEAAgIIAAhGQAAgIAEgDQAEgEAFAAQAHAAADAEQAFADAAAGIAAADQAHgJAJgDQAIgDAKgBQALABAIADQAGAEAFAIQAIgIAIgEQAIgDALgBQALAAAIAFQAJAEAEAHQAEAHAAAOIAAAwQAAAIgEAEQgFAEgGAAQgHAAgEgEg");
	this.shape_608.setTransform(-158.5,163.7);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_609.setTransform(-170.9,161.9);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#FF0000").s().p("AgWBVQgHgEABgGQAAgEACgDQAEgDAFAAIABABIAFAAIADAAQAGAAACgEQABgEAAgKIAAhUQAAgHAEgEQAEgDAHAAQAFAAAFADQADAEAAAHIAABVIAAAOIgCAIQgHARgWgBQgOAAgGgCgAAGhBQgFgEAAgFQAAgGAFgDQADgEAHABQAFAAAFADQADADAAAGQAAAFgDAEQgFADgFAAQgHAAgDgDg");
	this.shape_610.setTransform(-178.2,163.7);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#FF0000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADABAAAFQAAADgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_611.setTransform(-191.3,163.7);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#FF0000").s().p("AAhBCQgEgEAAgHIAAgDQgGAGgFAEQgGAEgHACQgFABgHAAQgLAAgJgDQgIgFgHgHQgGgGgDgKQgEgKAAgLQAAgWAOgNQANgNAVAAQALAAAJADQAIAEAIAIIAAglQAAgIADgEQAEgDAGAAQAHAAADADQAEAEAAAHIAABtQAAAHgEAEQgDADgHAAQgFAAgEgDgAgNgJQgGAEgDAGQgEAIAAAJQAAALAEAGQADAIAGADQAGAEAHAAQAIAAAGgEQAGgDAEgHQAEgHAAgLQAAgJgEgIQgEgGgGgEQgGgEgIABQgHAAgGADg");
	this.shape_612.setTransform(-204.7,161.8);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#FF0000").s().p("AgWAvQgLgEgHgGQgIgHgEgKQgEgJAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAIAAALQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgbQgGADgEAIQgDAHgBAJQABAKADAHQAEAIAGADQAGAEAIAAQANAAAIgJQAHgIAAgPQAAgPgHgIQgIgJgNAAQgHAAgHAFg");
	this.shape_613.setTransform(-222.9,163.7);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgXQAAgOAHgMQAHgMAMgGQANgHARAAQALAAAKADQAJADAGAEQAHAFADAFQAEAFAAAEQAAAFgEADQgEADgFAAQgEAAgCgBIgGgGQgFgHgGgDQgFgEgJAAQgMAAgIAJQgHAJAAAOQAAAHACAGQACAGADAEQAEAEAGACQAFACAFAAQAJAAAGgDQAGgEAFgHQACgEAEgCQADgDAEAAQAFAAAEAEQADADAAAEQAAAFgDAFQgDAFgHAFQgGAFgKADQgKADgNAAQgZAAgPgOg");
	this.shape_614.setTransform(-235.8,163.6);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_615.setTransform(-245,161.9);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgwIgEAAQgGAAgDgCQgEgDAAgEQAAgEAEgCQADgDAHAAIADAAIAAgOIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABADIAAALIAAAQIALAAQAGAAADADQADACAAAEQAAAGgEABQgFACgIAAIgGAAIAAAuIABAJQAAADACABQACACAFAAIAHgBIAHAAQADAAADACQADADAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_616.setTransform(-251.3,162);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#FF0000").s().p("AgmA3QgPgOAAgXQAAgMADgIQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAJQAAAJgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEAAADACQADACAAAEQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgIQgHAGgBAMIAzAAQgBgMgHgGQgHgHgLAAQgKAAgHAHgAgTgtQAAgBADgEIAFgIQAEgGADgCQADgCAFAAIAOAAQAGAAAAABIgGAGIgMAKIgHAGQgGADgHAAQgFAAAAgDg");
	this.shape_617.setTransform(-261.8,161.9);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#FF0000").s().p("AgWAvQgLgEgHgGQgIgHgEgKQgEgJAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALADAHAIQAIAGAEAKQAEAIAAALQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgbQgHADgDAIQgDAHgBAJQABAKADAHQADAIAHADQAGAEAIAAQANAAAIgJQAHgIAAgPQAAgPgHgIQgIgJgNAAQgHAAgHAFg");
	this.shape_618.setTransform(-274.6,163.7);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#FF0000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgIAEgDQADgEAHABQAGAAAEADQADAEAAAGIAAAEQAIgJAJgEQAJgEAJAAQAOAAALAGQALAGAGALQAHAMAAAPQAAAMgEAJQgEAJgGAGQgHAHgJAEQgIADgLABQgLgBgIgEQgJgEgHgJIAAAmQAAAQgNAAQgJAAgCgEgAgTgpQgHAHgBAQQABAPAHAIQAJAIALAAQAHAAAGgEQAGgDADgHQAEgGAAgLQAAgKgDgHQgEgHgGgEQgGgEgHABQgLgBgJAJg");
	this.shape_619.setTransform(-287.5,165.5);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#FF0000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgKgEgAgOgcQgGAFgEAHQgDAHgBAJQABAKADAHQAEAHAGAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNAAQgHAAgHADg");
	this.shape_620.setTransform(257.3,139.5);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgXQAAgOAHgMQAHgMAMgGQANgHARAAQALAAAKADQAJADAGAEQAHAFADAFQAEAFAAAEQAAAFgEADQgEADgFAAQgEAAgCgBIgGgGQgFgHgGgDQgFgEgJAAQgMAAgIAJQgHAJAAAOQAAAHACAGQACAGADAEQAEAEAGACQAFACAFAAQAJAAAGgDQAGgEAFgHQACgEAEgCQADgDAEAAQAFAAAEAEQADADAAAEQAAAFgDAFQgDAFgHAFQgGAFgKADQgKADgNAAQgZAAgPgOg");
	this.shape_621.setTransform(244.5,139.5);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEADgGABQgFgBgEgDg");
	this.shape_622.setTransform(235.3,137.7);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#FF0000").s().p("AgbBCQgMgEgGgGQgGgGAAgFQAAgFADgDQAEgDAFABQAGAAAFAEIAFAFIAFAEIAHADIAKABQAKAAAGgCQAGgEADgEQACgFABgFIAAgSQgGAHgJAFQgJAEgLAAQgOAAgLgGQgKgHgGgLQgGgLAAgPQAAgMAEgJQADgIAHgGQAGgHAJgDQAIgDAKAAQALAAAJAEQAJAEAIAIIAAgCQAAgHAEgEQADgEAGAAQAIABADAFQADAEAAAJIAABHQAAANgDAJQgDAJgHAGQgHAFgLADQgKAEgQAAQgOgBgMgDgAgTgqQgHAJAAAPQAAAPAHAGQAIAIALAAQAHABAHgEQAGgDAEgGQAEgGAAgLQAAgOgIgJQgIgJgMAAQgLABgIAHg");
	this.shape_623.setTransform(225.3,141.4);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#FF0000").s().p("AAgBBQgDgEgGgHQgKAHgKAEQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgIQAAgKAHgHQAIgHANgDIANgCIASgEIAQgEQAAgJgEgEQgEgFgMAAQgKAAgGADQgGACgDAGIgGAGQgCABgFAAQgFAAgDgCQgEgCAAgEQAAgHAGgGQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAANIAAAPIgBAOQAAAHAEAIIACAJQAAAEgEADQgEAEgGAAQgEAAgFgEgAADAXIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAGAEAIAAQAHAAAIgDQAGgDAEgFQADgGAAgNIAAgEIgSAFgAgSgtQAAgBADgEIAEgIQAEgGADgCQADgCAFAAIAPAAQAFAAAAABIgGAGIgMAKIgHAGQgGADgHAAQgFAAABgDg");
	this.shape_624.setTransform(212.6,137.7);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDAEQgDADgDAFIgDAOIgBARIAAAVQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_625.setTransform(202.2,139.5);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAgvIgEAAQgGABgDgDQgEgDAAgEQAAgDAEgDQADgCAHgBIADAAIAAgPIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGABADACQADADAAADQAAAFgEADQgFABgIAAIgGAAIAAAtIABAJQAAADACADQACABAFAAIAHAAIAHgBQADAAADACQADADAAAEQAAAGgIADQgIADgOAAQgMAAgHgEg");
	this.shape_626.setTransform(193.5,137.8);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDAEQgDADgDAFIgDAOIgBARIAAAVQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_627.setTransform(179.9,139.5);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#FF0000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAHgKADQgLAEgNAAQgMAAgKgEgAgOgcQgGAFgEAHQgDAHgBAJQABAKADAHQAEAHAGAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNAAQgHAAgHADg");
	this.shape_628.setTransform(168.1,139.5);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#FF0000").s().p("AgbAvQgLgFgFgFQgFgHAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAGQAEAGAHADQAGADAJAAQAJAAAGgDQAFgDAAgFQAAgGgFgDQgHgDgLgDQgPgDgKgDQgJgDgGgGQgFgFAAgJQAAgIAFgGQAFgHAKgEQALgEAOAAQAJAAAKACQAJACAGAEQAFADAEAEQADAEAAAEQgBAEgDADQgDADgHAAQgEAAgDgDIgHgGQgDgDgFgCQgEgDgGAAQgIAAgGADQgEADAAAEQgBAEAEACIAKAFIARAEQANADAJADQAIADAEAGQAFAFAAAHQAAAKgGAIQgFAHgMAEQgLAEgPAAQgPAAgMgEg");
	this.shape_629.setTransform(155.8,139.5);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEAAADADQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_630.setTransform(143.7,139.5);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgXQAAgOAHgMQAHgMAMgGQANgHARAAQALAAAKADQAJADAGAEQAHAFADAFQAEAFAAAEQAAAFgEADQgEADgFAAQgEAAgCgBIgGgGQgFgHgGgDQgFgEgJAAQgMAAgIAJQgHAJAAAOQAAAHACAGQACAGADAEQAEAEAGACQAFACAFAAQAJAAAGgDQAGgEAFgHQACgEAEgCQADgDAEAAQAFAAAEAEQADADAAAEQAAAFgDAFQgDAFgHAFQgGAFgKADQgKADgNAAQgZAAgPgOg");
	this.shape_631.setTransform(130.9,139.5);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#FF0000").s().p("AAcAvQgEgEAAgGIAAgEIgKAKQgHAEgGACQgGACgIgBQgLAAgIgDQgIgEgFgGQgFgJAAgPIAAgwQAAgIAEgDQADgEAHAAQAGAAAEAEQAFADAAAIIAAAnQgBAJACAGQACAGAFADQAEADAHAAQAHAAAFgDQAHgEADgHQACgFABgQIAAgfQAAgIADgDQAFgEAGAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgDAEgHAAQgGAAgDgEg");
	this.shape_632.setTransform(118.2,139.5);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#FF0000").s().p("AgbAvQgLgFgFgFQgFgHAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAGQAEAGAHADQAGADAJAAQAJAAAGgDQAFgDAAgFQAAgGgFgDQgHgDgLgDQgPgDgKgDQgJgDgGgGQgFgFAAgJQAAgIAFgGQAFgHAKgEQALgEAOAAQAJAAAKACQAJACAGAEQAFADAEAEQADAEAAAEQgBAEgDADQgDADgHAAQgEAAgDgDIgHgGQgDgDgEgCQgFgDgGAAQgIAAgGADQgEADAAAEQgBAEAEACIAKAFIARAEQANADAJADQAIADAEAGQAFAFAAAHQAAAKgGAIQgFAHgMAEQgLAEgPAAQgPAAgMgEg");
	this.shape_633.setTransform(105.8,139.5);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#FF0000").s().p("AgvBDQgGgCAAgGQAAgFADgCQADgCAGAAIAEAAIAFABQAFAAADgCQACgBADgDIAFgKIADgFIgkhMQgDgIAAgCIACgHQACgCADgBQADgDAEAAQAGAAADAEQAEADACAHIAXA9IAXg5IAFgLQACgDADgCQACgCAFAAIAGACQADACACACIABAGIgBAEIgDAHIglBUQgFALgEAHQgEAHgHADQgIADgNABQgNgBgGgCg");
	this.shape_634.setTransform(88.6,141.4);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#FF0000").s().p("AAgAvQgDgEgGgGQgKAGgKAFQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgHQAAgLAHgHQAIgGANgCIANgDIASgEIAQgDQAAgLgEgEQgEgFgMABQgKgBgGADQgGADgDAFIgGAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHAEAIIACAKQAAAEgEADQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAEAEQAGADAIAAQAHABAIgEQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_635.setTransform(71.3,139.5);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#FF0000").s().p("AAaAvQgEgEABgIIAAgoQgBgMgDgHQgFgGgLgBQgHAAgGAEQgHAFgDAHQgBAFgBAOIAAAfQAAAIgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgEQAEgDAGAAQAEAAADACIAFAFQACADAAAEIAAADQAIgIAJgFQAHgEAMAAQALAAAJAEQAJAFAFAIQACAEABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_636.setTransform(58.5,139.5);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#FF0000").s().p("AAhAvQgEgEgFgGQgLAGgJAFQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgHQAAgLAIgHQAHgGANgCIAOgDIARgEIARgDQgBgLgEgEQgEgFgNABQgJgBgGADQgFADgFAFIgFAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHACAIIADAKQAAAEgEADQgFADgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAFAEQAFADAHAAQAIABAHgEQAIgDADgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_637.setTransform(45.7,139.5);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#FF0000").s().p("AgJAxIgFgGIgGgMIgbg5IgCgFIgCgEIAAgEIABgFIAFgEQADgCAEAAQAHAAADADQADAFADAIIAWA4IAZg7QADgHADgDQACgDAGAAQAGAAAEADQADADAAAFIAAADIgCAFIgCAEIgbA6IgDAHIgEAHIgGAEQgDACgFAAQgFAAgEgCg");
	this.shape_638.setTransform(33.9,139.5);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDAEQgDADgDAFIgDAOIgBARIAAAVQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_639.setTransform(24.3,139.5);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEADgGABQgFgBgEgDg");
	this.shape_640.setTransform(16.1,137.7);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#FF0000").s().p("AAbAvQgEgEgBgIIAAgoQAAgMgDgHQgEgGgMgBQgHAAgGAEQgGAFgDAHQgCAFgBAOIAAAfQAAAIgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgEQADgDAGAAQAEAAADACIAFAFQACADAAAEIAAADQAHgIAJgFQAIgEAMAAQALAAAJAEQAJAFAEAIQADAEABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgHAAgDgEg");
	this.shape_641.setTransform(6.7,139.5);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEAAADADQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_642.setTransform(-11.5,139.5);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#FF0000").s().p("AAhBBQgEgDAAgHIAAgCQgFAFgGAEQgGAEgHABQgFADgHAAQgLAAgIgFQgKgDgGgIQgGgHgEgJQgDgJAAgLQAAgXANgNQANgNAWAAQALAAAIAEQAJADAIAIIAAglQAAgHADgEQAEgFAHAAQAGABAEADQADADAAAIIAABtQAAAHgDADQgFAFgFAAQgGAAgEgFgAgNgIQgHADgDAGQgDAIAAAKQAAAJADAIQAEAGAGAEQAHAEAGAAQAHAAAHgEQAGgDAEgHQADgHABgKQgBgLgDgHQgEgGgGgEQgHgEgHAAQgHABgGAEg");
	this.shape_643.setTransform(-24.9,137.7);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDAEQgDADgDAFIgDAOIgBARIAAAVQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_644.setTransform(-40.6,139.5);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#FF0000").s().p("AgXAvQgKgEgIgGQgHgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgLgEgAgOgcQgGAFgEAHQgDAHAAAJQAAAKADAHQAEAHAGAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNAAQgHAAgHADg");
	this.shape_645.setTransform(-52.4,139.5);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAgvIgEAAQgGABgDgDQgEgDAAgEQAAgDAEgDQADgCAHgBIADAAIAAgPIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGABADACQADADAAADQAAAFgEADQgFABgIAAIgGAAIAAAtIABAJQAAADACADQACABAFAAIAHAAIAHgBQADAAADACQADADAAAEQAAAGgIADQgIADgOAAQgMAAgHgEg");
	this.shape_646.setTransform(-62.4,137.8);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEADgGABQgFgBgEgDg");
	this.shape_647.setTransform(-69.4,137.7);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#FF0000").s().p("AgaAvQgLgFgGgFQgFgHAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAGQAFAGAGADQAGADAKAAQAIAAAFgDQAGgDAAgFQAAgGgGgDQgFgDgNgDQgPgDgIgDQgKgDgFgGQgGgFAAgJQAAgIAFgGQAGgHAKgEQAJgEAOAAQALAAAIACQAKACAFAEQAGADADAEQADAEAAAEQAAAEgDADQgEADgGAAQgDAAgEgDIgHgGQgDgDgEgCQgFgDgHAAQgHAAgFADQgGADAAAEQABAEADACIALAFIAQAEQANADAJADQAIADAFAGQAEAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgPAAgKgEg");
	this.shape_648.setTransform(-78.2,139.5);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#FF0000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgKgEgAgOgcQgHAFgDAHQgEAHAAAJQAAAKAEAHQADAHAHAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNAAQgIAAgGADg");
	this.shape_649.setTransform(-90.4,139.5);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#FF0000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgIAEgDQADgEAHAAQAFAAAEAFQAEADAAAHIAAACQAJgIAIgEQAJgEAJAAQAOAAALAGQALAGAGALQAHAMAAAPQAAAMgEAIQgEAKgGAGQgHAHgIAEQgJAEgLAAQgKAAgJgFQgJgFgHgHIAAAlQAAARgNAAQgJgBgCgEgAgTgqQgHAJAAAPQAAAPAHAIQAJAIALAAQAHAAAGgEQAGgEADgFQAEgIAAgKQAAgKgDgHQgDgHgHgEQgGgEgHAAQgLABgJAHg");
	this.shape_650.setTransform(-103.4,141.4);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#FF0000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgCgFgDgDQgEgDgGgBQgGAAgFADQgFAEgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgEgEQgFgEAAgIIAAgnIgBgPQAAgFgDgDQgEgDgGgBQgPABgEAIQgEAIgBAQIAAAhQAAAIgDAEQgFAEgGAAQgGAAgFgEQgEgEAAgIIAAhHQAAgGAEgEQAEgEAFAAQAHAAADADQAFAEAAAGIAAADQAHgJAJgDQAIgDAKAAQALAAAIADQAGAEAFAIQAIgIAIgEQAIgDALAAQALAAAIADQAJAFAEAHQAEAHAAAOIAAAwQAAAIgEAEQgFAEgGAAQgHAAgEgEg");
	this.shape_651.setTransform(-119.8,139.5);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#FF0000").s().p("AgXAvQgKgEgIgGQgHgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgLgEgAgOgcQgGAFgEAHQgEAHAAAJQAAAKAEAHQAEAHAGAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNAAQgIAAgGADg");
	this.shape_652.setTransform(-135.8,139.5);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgXQAAgOAHgMQAHgMAMgGQANgHARAAQALAAAKADQAJADAGAEQAHAFADAFQAEAFAAAEQAAAFgEADQgEADgFAAQgEAAgCgBIgGgGQgFgHgGgDQgFgEgJAAQgMAAgIAJQgHAJAAAOQAAAHACAGQACAGADAEQAEAEAGACQAFACAFAAQAJAAAGgDQAGgEAFgHQACgEAEgCQADgDAEAAQAFAAAEAEQADADAAAEQAAAFgDAFQgDAFgHAFQgGAFgKADQgKADgNAAQgZAAgPgOg");
	this.shape_653.setTransform(-148.6,139.5);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#FF0000").s().p("AgvBDQgGgCAAgGQAAgFADgCQADgCAGAAIAEAAIAFABQAFAAADgCQACgBADgDIAFgKIADgFIgkhMQgDgIAAgCIACgHQACgCADgBQADgDAEAAQAGAAADAEQAEADACAHIAXA9IAXg5IAFgLQACgDADgCQACgCAFAAIAGACQADACACACIABAGIgBAEIgDAHIglBUQgFALgEAHQgEAHgHADQgIADgNABQgNgBgGgCg");
	this.shape_654.setTransform(-166.4,141.4);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEAAADADQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_655.setTransform(-183.7,139.5);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAgvIgEAAQgGABgDgDQgEgDAAgEQAAgDAEgDQADgCAHgBIADAAIAAgPIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGABADACQADADAAADQAAAFgEADQgFABgIAAIgGAAIAAAtIABAJQAAADACADQACABAFAAIAHAAIAHgBQADAAADACQADADAAAEQAAAGgIADQgIADgOAAQgMAAgHgEg");
	this.shape_656.setTransform(-193.4,137.8);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#FF0000").s().p("AAaAvQgDgEAAgIIAAgoQAAgMgFgHQgDgGgMgBQgHAAgGAEQgHAFgDAHQgBAFAAAOIAAAfQAAAIgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgEQAEgDAGAAQAEAAADACIAFAFQACADAAAEIAAADQAIgIAIgFQAIgEAMAAQALAAAJAEQAJAFAEAIQADAEABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_657.setTransform(-204,139.5);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#FF0000").s().p("AAhAvQgFgEgEgGQgLAGgKAFQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgHQAAgLAIgHQAHgGANgCIAOgDIARgEIAQgDQAAgLgEgEQgEgFgNABQgKgBgFADQgFADgFAFIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHADAIIACAKQAAAEgEADQgEADgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAFAEQAFADAHAAQAIABAIgEQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_658.setTransform(-216.8,139.5);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAgvIgEAAQgGABgDgDQgEgDAAgEQAAgDAEgDQADgCAHgBIADAAIAAgPIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGABADACQADADAAADQAAAFgEADQgFABgIAAIgGAAIAAAtIABAJQAAADACADQACABAFAAIAHAAIAHgBQADAAADACQADADAAAEQAAAGgIADQgIADgOAAQgMAAgHgEg");
	this.shape_659.setTransform(-226.6,137.8);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#FF0000").s().p("AAaAvQgDgEAAgIIAAgoQAAgMgFgHQgEgGgLgBQgHAAgGAEQgHAFgDAHQgBAFAAAOIAAAfQAAAIgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgEQAEgDAGAAQAEAAADACIAFAFQACADAAAEIAAADQAIgIAJgFQAHgEAMAAQALAAAJAEQAJAFAFAIQACAEABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_660.setTransform(-237.2,139.5);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#FF0000").s().p("AAhAvQgFgEgEgGQgLAGgJAFQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgHQAAgLAIgHQAHgGANgCIAOgDIARgEIARgDQgBgLgEgEQgEgFgNABQgKgBgFADQgGADgEAFIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHACAIIADAKQAAAEgEADQgFADgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAFAEQAFADAHAAQAIABAHgEQAHgDAEgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_661.setTransform(-250,139.5);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgXQAAgOAHgMQAHgMAMgGQANgHARAAQALAAAKADQAJADAGAEQAHAFADAFQAEAFAAAEQAAAFgEADQgEADgFAAQgEAAgCgBIgGgGQgFgHgGgDQgFgEgJAAQgMAAgIAJQgHAJAAAOQAAAHACAGQACAGADAEQAEAEAGACQAFACAFAAQAJAAAGgDQAGgEAFgHQACgEAEgCQADgDAEAAQAFAAAEAEQADADAAAEQAAAFgDAFQgDAFgHAFQgGAFgKADQgKADgNAAQgZAAgPgOg");
	this.shape_662.setTransform(-262.8,139.5);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#FF0000").s().p("AgJBBQgEgDAAgIIAAhrQAAgIADgDQAEgFAGAAQAGAAAEAFQAEADAAAIIAABrQAAAIgEADQgEAFgGAAQgGAAgDgFg");
	this.shape_663.setTransform(-277.3,137.7);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#FF0000").s().p("AgnBDQgLAAgEgEQgEgEAAgIIAAhlQAAgFACgEQABgEAFgBQAEgCAHAAIBRAAQAHAAAEADQADADAAAEQAAAFgDADQgEADgHAAIhFAAIAAAgIA/AAQAIABADADQADADABAEQgBADgDADQgDADgIAAIg/AAIAAAmIBHAAQAIAAADADQAEAEAAAEQAAAFgEADQgDADgIAAg");
	this.shape_664.setTransform(-286.9,137.7);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#FF0000").s().p("AAaAvQgDgEgBgHIAAgpQABgMgEgHQgFgGgLgBQgHAAgGAFQgHADgDAIQgBAFgBAOIAAAgQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgEQAEgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAIgIAJgFQAHgEAMAAQALAAAJAEQAJAFAFAIQACAEABAGIABANIAAAuQAAAHgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_665.setTransform(60.3,115.3);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_666.setTransform(50.9,113.5);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#FF0000").s().p("AAgAvQgDgEgGgGQgKAHgKAEQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAIgHQAHgGANgDIANgCIASgEIAQgEQAAgKgEgEQgEgEgMAAQgLgBgFADQgGACgEAGIgFAHQgBABgGAAQgFAAgDgCQgEgCAAgFQAAgGAGgGQAFgHALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHAEAIIACAJQAAAEgEAEQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAEADQAFAEAJAAQAHAAAIgDQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_667.setTransform(41.7,115.3);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#FF0000").s().p("AgEBEIgKgEIgGgEIgIgHIAAACQAAAHgEADQgEAFgFAAQgGAAgEgFQgEgDAAgHIAAhsQAAgIAEgDQADgFAHAAQAGAAADAFQAEADAAAHIAAAmQAJgHAHgEQAJgEAMAAQAOAAAKAGQALAFAGAMQAGAKAAAPQAAAMgEAJQgDAKgGAGQgGAIgJADQgJAFgLAAQgGgBgGgBgAgNgJQgGAEgEAGQgDAIAAAKQAAAPAHAIQAIAIAMAAQAKAAAJgIQAHgIAAgQQAAgKgDgHQgDgGgGgEQgGgDgIAAQgHAAgHADg");
	this.shape_668.setTransform(28.9,113.5);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#FF0000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAALAEQAKADAIAIQAHAGAEAJQAEAJAAALQAAALgEAKQgEAJgHAHQgIAHgKADQgLAEgNAAQgMAAgKgEgAgOgcQgGAFgEAHQgDAHgBAJQABAKADAHQAEAHAGAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNgBQgIAAgGAEg");
	this.shape_669.setTransform(15.5,115.3);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#FF0000").s().p("AAoBDQgFgCgCgEIgFgIIgkgyIgaAWIAAAcQAAAIgEAEQgEAFgHAAQgEAAgEgCQgDgDgCgDQgCgCAAgEIAAgJIAAhjQAAgJADgDQAFgFAHAAQAHAAAFAFQADADAAAJIAAAvIA9g4IAHgFQADgDAGAAQAGAAAFAEQADADAAAGQABAFgIAGIgmAfIAsA2IAHAKQADAEgBAEQAAAEgDAEQgFADgHABQgGgBgEgCg");
	this.shape_670.setTransform(2.1,113.5);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgwIgEAAQgGABgDgDQgEgCAAgFQAAgEAEgCQADgCAHgBIADAAIAAgOIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGABADACQADACAAAEQAAAGgEABQgFACgIAAIgGAAIAAAtIABAJQAAAEACACQACABAFAAIAHgBIAHAAQADAAADACQADADAAAEQAAAFgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_671.setTransform(-14.9,113.6);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgDgEAAQgHAAgDAEQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_672.setTransform(-23.4,115.3);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#FF0000").s().p("AAcAvQgEgEAAgGIAAgEIgKAKQgHAEgGACQgGACgIgBQgLABgIgEQgIgEgFgGQgFgJAAgPIAAgwQAAgHAEgEQADgEAHAAQAGAAAEAEQAFAEAAAHIAAAnQgBAJACAGQACAFAFAEQADADAIAAQAGAAAHgDQAGgEADgGQACgGABgRIAAgeQAAgHADgEQAFgEAGAAQAGAAAEAEQAEAEAAAHIAABIQAAAGgEAEQgDAEgGAAQgHAAgDgEg");
	this.shape_673.setTransform(-35.2,115.3);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#FF0000").s().p("AAoBDQgFgCgCgEIgFgIIgkgyIgaAWIAAAcQABAIgFAEQgEAFgHAAQgEAAgEgCQgDgDgDgDQgBgCAAgEIAAgJIAAhjQAAgJADgDQAFgFAHAAQAHAAAFAFQADADAAAJIAAAvIA8g4IAIgFQAEgDAFAAQAGAAAEAEQAEADAAAGQAAAFgGAGIgnAfIAsA2IAHAKQACAEAAAEQAAAEgDAEQgEADgHABQgHgBgEgCg");
	this.shape_674.setTransform(-48.5,113.5);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#FF0000").s().p("AgKAKQgFgDAAgHQAAgFAFgEQAEgEAGAAQAGAAAFAEQAFAEAAAFQAAAHgFADQgFAEgGAAQgGAAgEgEg");
	this.shape_675.setTransform(36.8,217.5);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#FF0000").s().p("AgaAuQgLgDgGgHQgFgGAAgGQAAgEADgDQADgDAGAAQAEAAACACIAFAFQAFAHAGAEQAGADAJAAQAJAAAGgDQAFgEAAgEQAAgHgFgDQgHgDgMgDQgPgDgIgEQgKgCgGgGQgFgGAAgIQAAgHAFgHQAFgHALgEQAKgEANAAQAKAAAKACQAIACAGADQAGAEADAEQAEAEAAAEQAAAFgEACQgDADgHAAQgEAAgDgCIgHgHQgDgDgEgDQgFgCgHAAQgIAAgEADQgFADgBAEQAAAEAEACIAKAFIARAEQANADAJAEQAIADAFAFQAEAFAAAHQAAAKgGAIQgFAHgMAEQgLAEgPAAQgPAAgLgFg");
	this.shape_676.setTransform(28.7,213.8);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#FF0000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_677.setTransform(16.6,213.8);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgvIgEAAQgGAAgDgDQgEgCAAgEQAAgEAEgDQADgCAHAAIADAAIAAgQIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGAAADACQADADAAAEQAAAEgEACQgFADgIAAIgGAAIAAAtIABAJQAAACACACQACACAFABIAHgCIAHAAQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_678.setTransform(6.8,212.1);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#FF0000").s().p("AAaAvQgDgEAAgIIAAgoQAAgNgFgGQgDgHgMABQgHAAgGAEQgHAEgDAGQgBAGAAAPIAAAeQAAAIgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgDQAEgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAIgJAIgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_679.setTransform(-3.8,213.8);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#FF0000").s().p("AAgAvQgEgDgFgIQgKAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgDIARgFQgBgJgEgFQgEgFgMAAQgKAAgGADQgFADgEAFIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAGgGQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHADAIIADAKQAAADgEADQgFAEgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAEAEQAFAFAJAAQAHgBAHgDQAIgDADgFQADgGABgNIAAgEIgSAFg");
	this.shape_680.setTransform(-16.6,213.8);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgvIgEAAQgGAAgDgDQgEgCAAgEQAAgEAEgDQADgCAHAAIADAAIAAgQIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGAAADACQADADAAAEQAAAEgEACQgFADgIAAIgGAAIAAAtIABAJQAAACACACQACACAFABIAHgCIAHAAQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_681.setTransform(-26.4,212.1);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#FF0000").s().p("AAaAvQgDgEAAgIIAAgoQAAgNgFgGQgEgHgLABQgHAAgGAEQgHAEgDAGQgBAGAAAPIAAAeQAAAIgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgDQAEgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAIgJAJgDQAHgFAMAAQALAAAJAFQAJAEAFAHQACAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_682.setTransform(-37,213.8);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#FF0000").s().p("AAgAvQgDgDgGgIQgKAIgKADQgIAEgMAAQgLAAgJgEQgIgEgFgHQgEgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgDIAQgFQAAgJgEgFQgEgFgMAAQgKAAgGADQgFADgEAFIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAGgGQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHADAIIADAKQAAADgEADQgFAEgFAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAGAFAIAAQAHgBAHgDQAIgDADgFQADgGAAgNIAAgEIgSAFg");
	this.shape_683.setTransform(-49.8,213.8);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#FF0000").s().p("AgaAuQgLgDgGgHQgFgGAAgGQAAgEADgDQADgDAGAAQAEAAACACIAFAGQAFAGAGAEQAGADAJAAQAJAAAGgDQAFgEAAgEQAAgHgFgDQgHgDgMgDQgPgDgIgEQgKgCgGgGQgFgGAAgIQAAgHAFgHQAFgHALgEQAKgEANAAQAKAAAKACQAIACAGADQAGAEADAEQAEAEAAAEQAAAEgEADQgDADgHAAQgEAAgDgCIgHgHQgDgEgEgBQgFgDgHAAQgIAAgEADQgFADgBAEQAAAEAEACIAKAFIARAEQANACAJAFQAIADAFAFQAEAFAAAHQAAAKgGAIQgFAHgMAEQgLAEgPAAQgPAAgLgFg");
	this.shape_684.setTransform(239.7,189.6);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#FF0000").s().p("AgmAlQgPgOAAgXQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADABQADADAAAEQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_685.setTransform(227.6,189.6);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgBgEAAQgHAAgDACQgDADgDAGIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_686.setTransform(217.8,189.6);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#FF0000").s().p("AgXAvQgKgDgIgIQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgbQgHAEgDAGQgEAIABAJQgBAKAEAHQADAHAHAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgHAAgHAEg");
	this.shape_687.setTransform(206,189.6);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#FF0000").s().p("AgWBUQgHgDAAgGQABgEADgDQACgDAGAAIACAAIADAAIAFABQAFAAACgEQABgEAAgKIAAhTQAAgIAEgEQAEgEAGAAQAGAAAFAEQADAEAAAIIAABTIAAAPIgCAJQgHAPgXAAQgNAAgGgDgAAFhBQgEgDAAgGQAAgGAEgDQAFgDAFgBQAGAAAFADQADAEAAAGQAAAGgDADQgFADgGAAQgFAAgFgDg");
	this.shape_688.setTransform(195.1,189.7);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#FF0000").s().p("AgmAlQgPgOAAgXQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADABQADADAAAEQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_689.setTransform(187.4,189.6);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#FF0000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgBgEgEgEQgDgEgIABQgFAAgFADQgFADgDAFQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgGAAgDgEQgEgEgBgIIAAgnIgBgPQAAgEgDgEQgEgEgGABQgOgBgFAJQgEAJgBAOIAAAiQAAAIgDAEQgFAEgGAAQgGAAgFgEQgEgEAAgIIAAhHQAAgGAEgEQADgEAGAAQAGAAAFAEQADADABAGIAAACQAHgHAJgEQAIgDAKAAQALAAAIADQAGAEAFAHQAIgHAIgEQAIgDAKAAQAMAAAIADQAJAEAEAIQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgGAAgFgEg");
	this.shape_690.setTransform(171.5,189.6);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#FF0000").s().p("AgaAuQgMgDgFgHQgFgGAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAGQAEAGAHAEQAGADAJAAQAJAAAGgDQAFgEAAgEQAAgHgFgDQgHgDgLgDQgPgDgJgEQgKgCgGgGQgFgGAAgIQAAgHAFgHQAFgHALgEQAKgEAOAAQAJAAAKACQAJACAGADQAFAEAEAEQADAEAAAEQgBAEgDADQgDADgHAAQgEAAgDgCIgHgHQgDgEgFgBQgEgDgGAAQgIAAgGADQgEADAAAEQgBAEAEACIAKAFIARAEQANACAJAFQAIADAEAFQAFAFAAAHQAAAKgGAIQgFAHgMAEQgLAEgPAAQgPAAgLgFg");
	this.shape_691.setTransform(150.8,189.6);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#FF0000").s().p("AgXAvQgKgDgIgIQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgbQgHAEgDAGQgEAIABAJQgBAKAEAHQADAHAHAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgIAAgGAEg");
	this.shape_692.setTransform(138.6,189.6);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#FF0000").s().p("AgJBCQgEgEAAgIIAAhrQAAgIADgEQAEgDAGAAQAGAAAEADQAEAEAAAIIAABrQAAAIgEAEQgEADgGAAQgGAAgDgDg");
	this.shape_693.setTransform(129.2,187.8);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#FF0000").s().p("AgmAlQgPgOAAgXQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADABQADADAAAEQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_694.setTransform(114.6,189.6);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#FF0000").s().p("AAhBCQgEgEAAgHIAAgDQgFAHgGADQgGADgHACQgFACgIAAQgKAAgJgDQgIgEgHgHQgGgIgDgJQgEgKAAgKQAAgXAOgNQANgNAUAAQAMAAAJADQAIAFAIAHIAAglQAAgHAEgFQADgDAGAAQAHAAADADQAEADAAAIIAABtQAAAHgEAEQgDADgHAAQgFAAgEgDgAgNgIQgGADgDAHQgEAGAAALQAAAJAEAIQADAGAHAFQAFADAHAAQAHAAAHgDQAGgEAEgHQADgHAAgKQAAgKgDgIQgEgGgGgEQgHgDgHgBQgHAAgGAFg");
	this.shape_695.setTransform(101.2,187.8);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#FF0000").s().p("AgWAvQgLgDgHgIQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgbQgGAEgEAGQgDAIgBAJQABAKADAHQAEAHAGAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgIAAgGAEg");
	this.shape_696.setTransform(83,189.6);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#FF0000").s().p("AAaAvQgDgEAAgIIAAgoQAAgNgFgGQgDgHgMABQgHAAgGADQgHAEgDAHQgBAGAAAPIAAAeQAAAIgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgDQAEgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAIgJAIgEQAIgEAMAAQALAAAJAEQAJAFAEAHQADAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_697.setTransform(70,189.6);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#FF0000").s().p("AAcAvQgEgDAAgIIAAgCIgKAJQgHAEgGACQgGABgIABQgLgBgIgDQgIgEgFgHQgFgHAAgPIAAgxQAAgHAEgEQADgEAHAAQAGAAAEAEQAFAEAAAHIAAAnQgBAJACAFQACAHAFADQADAEAIAAQAGAAAHgFQAGgDADgHQACgEABgRIAAgfQAAgHADgEQAFgEAGAAQAGAAAEAEQAEAEAAAHIAABHQAAAIgEADQgDAEgGAAQgHAAgDgEg");
	this.shape_698.setTransform(57.1,189.6);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#FF0000").s().p("AAgAvQgDgDgGgIQgKAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgDIAQgEQAAgKgEgFQgEgFgMAAQgKAAgGADQgGACgDAGIgGAHQgCACgFAAQgFAAgDgDQgEgCAAgFQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHAEAIIACAKQAAADgEADQgEAEgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAFAEAFQAGADAIABQAHgBAIgDQAGgDAEgFQADgGAAgNIAAgEIgSAFg");
	this.shape_699.setTransform(38.9,189.6);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#FF0000").s().p("AgbBCQgMgEgGgGQgGgFAAgGQAAgFADgDQAEgCAFAAQAGgBAFAFIAFAFIAFAEIAHADIAKABQAKAAAGgDQAGgCADgGQACgEABgGIAAgSQgGAJgJAEQgJAEgLAAQgOAAgLgHQgKgGgGgMQgGgKAAgPQAAgLAEgKQADgJAHgGQAGgGAJgDQAIgDAKAAQALAAAJAEQAJAEAIAJIAAgDQAAgHAEgEQADgDAGAAQAIgBADAGQADAEAAAJIAABHQAAANgDAJQgDAJgHAGQgHAFgLADQgKADgQAAQgOAAgMgDgAgTgqQgHAIAAAQQAAAPAHAGQAIAJALgBQAHAAAHgDQAGgEAEgFQAEgHAAgJQAAgPgIgJQgIgJgMAAQgLAAgIAIg");
	this.shape_700.setTransform(19.7,191.5);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#FF0000").s().p("AgXAvQgKgDgHgIQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGAKgEQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgbQgGAEgEAGQgEAIAAAJQAAAKAEAHQAEAHAGAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgIAAgGAEg");
	this.shape_701.setTransform(6.9,189.6);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#FF0000").s().p("AgJBCQgEgEAAgIIAAhrQAAgIADgEQAEgDAGAAQAGAAAEADQAEAEAAAIIAABrQAAAIgEAEQgEADgGAAQgGAAgDgDg");
	this.shape_702.setTransform(-2.5,187.8);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#FF0000").s().p("AgWAvQgLgDgHgIQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgbQgGAEgEAGQgDAIgBAJQABAKADAHQAEAHAGAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgHAAgHAEg");
	this.shape_703.setTransform(-11.9,189.6);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAguIgEAAQgGgBgDgCQgEgCAAgEQAAgFAEgCQADgDAHABIADAAIAAgQIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGgBADADQADACAAAFQAAAEgEADQgFACgIAAIgGAAIAAAtIABAJQAAACACACQACADAFAAIAHgBIAHgBQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_704.setTransform(-21.8,187.9);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#FF0000").s().p("AAgAvQgDgDgGgIQgKAIgKADQgIAEgMAAQgLAAgJgEQgIgEgFgHQgEgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgDIAQgEQAAgKgEgFQgEgFgMAAQgKAAgGADQgFACgEAGIgGAHQgCACgFAAQgFAAgDgDQgEgCAAgFQAAgGAGgHQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHADAIIADAKQAAADgEADQgFAEgFAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAFAEAFQAGADAIABQAHgBAHgDQAIgDADgFQADgGAAgNIAAgEIgSAFg");
	this.shape_705.setTransform(-31.8,189.6);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#FF0000").s().p("AA5AvQgFgEAAgIIAAgpIgBgNQgBgEgDgEQgEgEgGABQgGAAgFADQgFADgDAFQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgFgEQgDgEAAgIIAAgnIgBgPQgBgEgDgEQgDgEgIABQgOgBgEAJQgFAJABAOIAAAiQAAAIgFAEQgEAEgGAAQgHAAgDgEQgFgEAAgIIAAhHQAAgGAEgEQAEgEAGAAQAFAAAEAEQAEADAAAGIAAACQAIgHAIgEQAJgDAKAAQALAAAHADQAHAEAGAHQAGgHAJgEQAJgDAKAAQALAAAJADQAIAEAEAIQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_706.setTransform(-47.7,189.6);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#FF0000").s().p("AAcAvQgEgDAAgIIAAgCIgKAJQgHAEgGACQgGABgIABQgLgBgIgDQgIgEgFgHQgFgHAAgPIAAgxQAAgHAEgEQADgEAHAAQAGAAAEAEQAFAEAAAHIAAAnQgBAJACAFQACAHAFADQAEAEAHAAQAHAAAFgFQAHgDADgHQACgEABgRIAAgfQAAgHADgEQAFgEAGAAQAGAAAEAEQAEAEAAAHIAABHQAAAIgEADQgDAEgHAAQgGAAgDgEg");
	this.shape_707.setTransform(-63.6,189.6);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#FF0000").s().p("AAhAvQgFgDgEgIQgLAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAIgIQAHgGANgCIAOgDIARgDIAQgEQAAgKgEgFQgEgFgNAAQgKAAgFADQgFACgFAGIgFAHQgBACgGAAQgFAAgDgDQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHADAIIACAKQAAADgEADQgEAEgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAFAFAFQAFADAHABQAIgBAIgDQAGgDAEgFQADgGAAgNIAAgEIgSAFg");
	this.shape_708.setTransform(-76.4,189.6);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgBgEAAQgHAAgDACQgDADgDAGIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_709.setTransform(-86.3,189.6);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAguIgEAAQgGgBgDgCQgEgCAAgEQAAgFAEgCQADgDAHABIADAAIAAgQIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGgBADADQADACAAAFQAAAEgEADQgFACgIAAIgGAAIAAAtIABAJQAAACACACQACADAFAAIAHgBIAHgBQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_710.setTransform(-95.1,187.9);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#FF0000").s().p("AAgAvQgDgDgGgIQgKAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgDIAQgEQAAgKgEgFQgEgFgMAAQgKAAgGADQgGACgDAGIgGAHQgCACgFAAQgFAAgDgDQgEgCAAgFQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHAEAIIACAKQAAADgEADQgEAEgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAFAEAFQAGADAIABQAHgBAIgDQAGgDAEgFQADgGAAgNIAAgEIgSAFg");
	this.shape_711.setTransform(-110.9,189.6);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#FF0000").s().p("AAhBCQgEgEAAgHIAAgDQgFAHgGADQgGADgHACQgFACgHAAQgLAAgIgDQgKgEgGgHQgGgIgEgJQgDgKAAgKQAAgXANgNQANgNAWAAQALAAAIADQAJAFAIAHIAAglQAAgHADgFQAEgDAHAAQAGAAAEADQADADAAAIIAABtQAAAHgDAEQgFADgFAAQgGAAgEgDgAgNgIQgHADgDAHQgDAGAAALQAAAJADAIQAEAGAGAFQAHADAGAAQAHAAAHgDQAGgEAEgHQADgHABgKQgBgKgDgIQgEgGgGgEQgHgDgHgBQgHAAgGAFg");
	this.shape_712.setTransform(-124.3,187.8);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#FF0000").s().p("AAbAvQgFgEAAgIIAAgoQAAgNgDgGQgFgHgLABQgHAAgGADQgGAEgEAHQgCAGAAAPIAAAeQAAAIgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgDQAEgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAHgJAKgEQAHgEAMAAQALAAAJAEQAJAFAFAHQACAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_713.setTransform(-137.1,189.6);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#FF0000").s().p("AAcAvQgEgDAAgIIAAgCIgLAJQgFAEgHACQgGABgJABQgKgBgIgDQgIgEgEgHQgGgHAAgPIAAgxQAAgHAEgEQAEgEAGAAQAGAAAFAEQADAEAAAHIAAAnQABAJABAFQACAHAEADQAEAEAIAAQAGAAAHgFQAGgDADgHQADgEgBgRIAAgfQAAgHAFgEQAEgEAGAAQAGAAAEAEQAEAEAAAHIAABHQAAAIgEADQgEAEgFAAQgGAAgEgEg");
	this.shape_714.setTransform(-150.1,189.6);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#FF0000").s().p("AgPBCQgEgEAAgIIAAhBIgIAAQgHAAgDgCQgEgDAAgEQAAgJAPAAIAHAAIAAgIQAAgLADgHQADgHAJgEQAHgCAOAAQAZAAAAAKQAAAEgDACQgCACgEAAIgGAAIgHAAQgHAAgDADQgCAFAAAHIAAAGIAHAAQARAAAAAIQAAAHgFABQgEACgIAAIgHAAIAABBQAAAIgEAEQgEADgFAAQgGAAgEgDg");
	this.shape_715.setTransform(-159.8,187.8);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#FF0000").s().p("AgXAvQgKgDgIgIQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgbQgHAEgDAGQgEAIABAJQgBAKAEAHQADAHAHAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgHAAgHAEg");
	this.shape_716.setTransform(-170.2,189.6);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgBgEAAQgHAAgDACQgDADgDAGIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_717.setTransform(-179.9,189.6);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#FF0000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgHADgEQAEgDAGAAQAHgBADAEQAEAEAAAHIAAADQAIgJAJgEQAJgEAKAAQANAAALAGQALAGAGALQAHALAAARQAAALgDAIQgFAKgGAHQgGAGgJAEQgJAEgKgBQgLABgJgFQgJgEgHgJIAAAmQAAAQgOAAQgHABgDgFgAgSgqQgJAIABARQgBAPAJAGQAHAJALAAQAIAAAGgDQAGgFAEgFQADgIAAgKQAAgKgDgHQgDgHgGgEQgHgDgIgBQgKAAgIAIg");
	this.shape_718.setTransform(-191.7,191.5);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#FF0000").s().p("AAhAvQgFgDgEgIQgLAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAIgIQAHgGANgCIAOgDIARgDIARgEQgBgKgEgFQgEgFgNAAQgKAAgFADQgGACgEAGIgFAHQgBACgGAAQgFAAgDgDQgEgCAAgFQAAgGAFgHQAGgGALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAKQAAADgEADQgFAEgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAFAFAFQAFADAHABQAIgBAHgDQAHgDAEgFQAEgGAAgNIAAgEIgSAFg");
	this.shape_719.setTransform(-210.4,189.6);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#FF0000").s().p("AAbAvQgEgEgBgIIAAgoQAAgNgEgGQgDgHgMABQgHAAgGADQgGAEgDAHQgCAGgBAPIAAAeQAAAIgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgDQADgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAHgJAJgEQAIgEAMAAQALAAAJAEQAJAFAEAHQADAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgHAAgDgEg");
	this.shape_720.setTransform(-223.2,189.6);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#FF0000").s().p("AAcAvQgEgDAAgIIAAgCIgKAJQgHAEgGACQgGABgJABQgKgBgIgDQgIgEgFgHQgFgHAAgPIAAgxQAAgHAEgEQAEgEAGAAQAHAAADAEQAEAEABAHIAAAnQAAAJABAFQACAHAEADQAFAEAHAAQAHAAAFgFQAHgDADgHQADgEAAgRIAAgfQAAgHADgEQAEgEAHAAQAGAAAEAEQAEAEAAAHIAABHQAAAIgEADQgDAEgHAAQgFAAgEgEg");
	this.shape_721.setTransform(-236.2,189.6);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#FF0000").s().p("AgmAlQgPgOAAgXQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADABQADADAAAEQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_722.setTransform(-254.3,189.6);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#FF0000").s().p("AAhBCQgEgEAAgHIAAgDQgGAHgFADQgGADgHACQgFACgHAAQgLAAgJgDQgIgEgHgHQgGgIgDgJQgEgKAAgKQAAgXAOgNQAMgNAWAAQALAAAJADQAIAFAIAHIAAglQAAgHADgFQAEgDAGAAQAHAAADADQAEADAAAIIAABtQAAAHgEAEQgDADgHAAQgFAAgEgDgAgNgIQgGADgDAHQgEAGAAALQAAAJAEAIQADAGAGAFQAGADAHAAQAIAAAGgDQAGgEAEgHQAEgHAAgKQAAgKgEgIQgEgGgGgEQgGgDgIgBQgHAAgGAFg");
	this.shape_723.setTransform(-267.7,187.8);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#FF0000").s().p("AgXAvQgKgDgIgIQgHgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgcQgGAEgEAHQgDAIAAAJQAAAKADAHQAEAHAGAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgHAAgHADg");
	this.shape_724.setTransform(270.2,165.4);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAguIgEAAQgGgBgDgCQgEgDAAgDQAAgEAEgDQADgDAHABIADAAIAAgQIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABAEIAAAJIAAASIALAAQAGgBADADQADADAAAEQAAAFgEACQgFACgIAAIgGAAIAAAsIABAJQAAADACADQACACAFAAIAHgBIAHgBQADAAADADQADACAAAEQAAAFgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_725.setTransform(260.3,163.7);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#FF0000").s().p("AAcAvQgEgDAAgIIAAgDIgLAKQgFAEgHACQgGABgJABQgKgBgIgDQgIgEgEgHQgGgHAAgPIAAgxQAAgIAEgDQAEgEAGAAQAHAAAEAEQADADAAAIIAAAnQAAAJACAFQACAHAEADQAFADAHABQAHAAAGgFQAGgDADgHQACgEAAgRIAAgfQAAgIAFgDQAEgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAIgEADQgEAEgFAAQgGAAgEgEg");
	this.shape_726.setTransform(237,165.4);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#FF0000").s().p("AAhBBQgEgDAAgHIAAgCQgFAGgGADQgGADgGACQgGACgIAAQgKAAgJgEQgIgEgHgGQgGgIgEgJQgDgKAAgKQAAgXAOgNQANgNAUAAQAMAAAJAEQAIAEAIAHIAAglQAAgHAEgFQADgEAGAAQAHABADADQAEAEAAAHIAABtQAAAHgEADQgEAEgGAAQgFAAgEgEgAgNgIQgGADgDAHQgEAGAAALQAAAKAEAHQADAHAHAEQAFADAHAAQAHAAAHgDQAGgEAEgHQAEgHgBgKQABgKgEgIQgEgGgGgEQgHgDgHgBQgHAAgGAFg");
	this.shape_727.setTransform(223.5,163.6);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#FF0000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgcQgHAEgDAHQgEAIAAAJQAAAKAEAHQADAHAHAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgIAAgGADg");
	this.shape_728.setTransform(210.6,165.4);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgBgEgBQgHAAgDADQgDAEgDAFIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_729.setTransform(200.9,165.4);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#FF0000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgHADgEQAFgDAFgBQAHAAADAFQAEADAAAHIAAACQAJgIAIgEQAJgEAKAAQANAAALAGQALAGAHALQAGAMAAAQQAAALgDAIQgEAKgHAHQgGAGgKAEQgIADgKAAQgLABgJgFQgJgFgHgHIAAAlQAAAQgOABQgHAAgDgFgAgSgqQgJAJABAQQgBAPAJAGQAHAJALAAQAIAAAGgDQAGgEAEgGQADgIAAgKQAAgKgDgHQgEgHgFgEQgHgDgIgBQgKABgIAHg");
	this.shape_730.setTransform(189.1,167.3);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#FF0000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgcQgGAEgEAHQgDAIgBAJQABAKADAHQAEAHAGAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgIAAgGADg");
	this.shape_731.setTransform(170.3,165.4);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#FF0000").s().p("AAhBBQgEgDAAgHIAAgCQgFAGgGADQgGADgHACQgFACgHAAQgLAAgIgEQgJgEgHgGQgGgIgDgJQgEgKAAgKQAAgXAOgNQAMgNAWAAQALAAAIAEQAJAEAIAHIAAglQAAgHADgFQAEgEAGAAQAHABADADQAEAEAAAHIAABtQAAAHgEADQgDAEgHAAQgFAAgEgEgAgNgIQgHADgDAHQgDAGAAALQAAAKADAHQAEAHAGAEQAHADAGAAQAIAAAGgDQAGgEAEgHQAEgHAAgKQAAgKgEgIQgEgGgGgEQgGgDgIgBQgHAAgGAFg");
	this.shape_732.setTransform(156.7,163.6);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#FF0000").s().p("AgXAvQgKgDgIgIQgHgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgcQgHAEgDAHQgEAIABAJQgBAKAEAHQADAHAHAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgHAAgHADg");
	this.shape_733.setTransform(143.9,165.4);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAguIgEAAQgGgBgDgCQgEgDAAgDQAAgEAEgDQADgDAHABIADAAIAAgQIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABAEIAAAJIAAASIALAAQAGgBADADQADADAAAEQAAAFgEACQgFACgIAAIgGAAIAAAsIABAJQAAADACADQACACAFAAIAHgBIAHgBQADAAADADQADACAAAEQAAAFgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_734.setTransform(133.9,163.7);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#FF0000").s().p("AgOAaQAAAAgBgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgFAFgCQALgFAAgKQgGAAgFgCQgFgEAAgGQAAgHAFgDQAFgFAGAAQAFAAAEADQAEADACAEQACAEAAAIQAAAHgEAJQgEAHgHAFQgFAFgFgBQgEAAgCgBg");
	this.shape_735.setTransform(121.1,170.5);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#FF0000").s().p("AgaBAQgEgEAAgIQAAgGADgKIAJgYQAHgNAKgPQAIgPANgOIg3AAQgJAAgEgDQgEgDAAgGQAAgGAEgCQAFgCAIAAIBFAAQAKAAAFADQAEADAAAGQAAAEgFAGIgMAOQgHAIgHALQgHAMgGAPIgEAMIgCAMIgCAMQgCAJgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_736.setTransform(111.9,163.7);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#FF0000").s().p("AgkBEQgIAAgFgFQgEgDAAgFQAAgDADgGQADgFADgEIAZgVIAQgMIAOgKQAFgFADgGQADgGAAgFQAAgFgDgFQgDgFgGgDQgFgCgGAAQgNAAgIALIgEAHQgCAGgDAEQgDADgGAAQgGAAgDgDQgDgDAAgFQAAgHADgHQADgGAHgGQAGgGAKgDQAKgEANABQAPgBALAFQAIADAFAFQAGAFADAHQADAGAAAIQAAALgGAJQgHAJgHAFIgWARQgPAKgGAHIgFAGIA2AAQAIAAAEADQAFADAAAFQAAAEgEADQgDAEgHAAg");
	this.shape_737.setTransform(98.9,163.5);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#FF0000").s().p("AgaAuQgLgDgGgHQgFgGAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAGQAFAGAGAEQAGACAKAAQAIAAAFgCQAGgEAAgEQAAgHgGgDQgFgDgNgDQgPgDgIgEQgKgCgFgGQgGgGAAgIQAAgIAFgGQAGgHAKgEQAJgEAOAAQALAAAIACQAKACAFADQAGAEADAEQADAEAAAEQAAAEgDADQgEADgFAAQgEAAgEgDIgHgGQgDgDgEgCQgFgDgHAAQgHAAgFADQgGADAAAEQABAEADACIALAFIAQAEQANADAJAEQAIACAFAGQAEAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgKgFg");
	this.shape_738.setTransform(81.1,165.4);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#FF0000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgcQgHAEgDAHQgEAIAAAJQAAAKAEAHQADAHAHAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgIAAgGADg");
	this.shape_739.setTransform(68.9,165.4);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#FF0000").s().p("AgJBBQgEgDAAgIIAAhrQAAgIADgEQAEgEAGAAQAGAAAEAEQAEAEAAAIIAABrQAAAIgEADQgEAEgGAAQgGAAgDgEg");
	this.shape_740.setTransform(59.5,163.6);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#FF0000").s().p("AAgAvQgEgDgEgIQgLAHgJAFQgJADgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIAOgDIARgEIARgDQgBgLgEgEQgEgFgNABQgJAAgGACQgFADgEAFIgGAHQgCACgFAAQgFAAgDgDQgEgDAAgEQAAgGAFgHQAGgGALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAJAAAOIAAAOIAAANQAAAHACAIIADAKQAAADgEAEQgFADgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAGAFAEQAEADAIAAQAIAAAHgDQAIgDADgFQADgGABgNIAAgEIgSAFg");
	this.shape_741.setTransform(44.9,165.4);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#FF0000").s().p("AAbAvQgFgEAAgIIAAgoQAAgNgDgGQgFgGgLAAQgHAAgGADQgGAFgEAGQgCAGAAAPIAAAeQAAAIgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgEQAEgDAGAAQAEAAADACIAFAEQACAEAAAEIAAADQAHgJAKgEQAHgEAMAAQALAAAJAEQAJAFAFAHQACAFABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_742.setTransform(26.8,165.4);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADACAAAEQAAAEgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_743.setTransform(13.9,165.4);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgBgEgBQgHAAgDADQgDAEgDAFIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_744.setTransform(4.1,165.4);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADACAAAEQAAAEgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_745.setTransform(-7.6,165.4);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#FF0000").s().p("AAcAvQgEgDAAgIIAAgDIgLAKQgFAEgHACQgGABgJABQgKgBgIgDQgIgEgEgHQgGgHAAgPIAAgxQAAgIAEgDQADgEAHAAQAHAAAEAEQADADAAAIIAAAnQAAAJACAFQACAHAEADQAFADAHABQAHAAAFgFQAHgDADgHQACgEAAgRIAAgfQAAgIAFgDQAEgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAIgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_746.setTransform(-20.4,165.4);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#FF0000").s().p("AA5AvQgFgEAAgIIAAgpIgBgNQgBgFgDgDQgDgEgIABQgFAAgFACQgFAEgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgFgEQgDgEAAgIIAAgnIgBgPQgBgEgDgEQgDgEgIABQgOAAgEAIQgFAJABAOIAAAiQgBAIgEAEQgDAEgHAAQgGAAgEgEQgFgEAAgIIAAhHQAAgGAEgEQADgEAHAAQAGAAAEADQADAEAAAGIAAACQAIgHAIgEQAJgEAKABQALgBAHAEQAHAEAGAHQAGgHAJgEQAJgEAJABQAMAAAJADQAIAEAEAIQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_747.setTransform(-36.1,165.4);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADACAAAEQAAAEgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_748.setTransform(-57.2,165.4);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#FF0000").s().p("AAcAvQgEgDAAgIIAAgDIgKAKQgHAEgGACQgGABgIABQgLgBgIgDQgIgEgFgHQgFgHAAgPIAAgxQAAgIAEgDQAEgEAGAAQAGAAAEAEQAFADAAAIIAAAnQAAAJABAFQACAHAFADQAEADAHABQAHAAAFgFQAHgDADgHQADgEAAgRIAAgfQAAgIADgDQAEgEAHAAQAGAAAEAEQAEADAAAIIAABHQAAAIgEADQgDAEgHAAQgFAAgEgEg");
	this.shape_749.setTransform(-70,165.4);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#FF0000").s().p("AAgBBQgDgFAAgHIAAgjQgIAGgJAEQgJAEgKAAQgNABgLgHQgLgGgHgLQgGgLAAgPQAAgQAGgMQAHgLALgGQALgGAOAAQAKAAAJAEQAJAEAHAIIAAgCQAAgHAEgEQADgDAGgBQAGABAEADQAEADAAAIIAABrQAAARgOAAQgIAAgCgFgAgTgqQgHAJAAAQQAAAKAEAHQADAGAGAEQAGADAHAAQAHAAAHgDQAGgEAEgGQAEgIAAgKQAAgHgDgHQgCgGgEgEQgEgDgFgDQgFgCgFAAQgLABgIAHg");
	this.shape_750.setTransform(-83.6,167.3);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#FF0000").s().p("AgbAuQgKgDgGgHQgFgGAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAGQAEAGAHAEQAGACAKAAQAIAAAFgCQAGgEAAgEQAAgHgGgDQgFgDgNgDQgOgDgKgEQgJgCgFgGQgGgGAAgIQAAgIAFgGQAGgHAJgEQAKgEAOAAQALAAAIACQAKACAFADQAGAEADAEQADAEAAAEQABAEgEADQgEADgFAAQgEAAgEgDIgHgGQgDgDgFgCQgEgDgHAAQgHAAgFADQgGADAAAEQABAEADACIALAFIAQAEQANADAJAEQAIACAEAGQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgLgFg");
	this.shape_751.setTransform(-101.2,165.4);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#FF0000").s().p("AAhAvQgFgDgEgIQgLAHgKAFQgIADgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAIgIQAHgGANgCIAOgDIARgEIAQgDQAAgLgEgEQgEgFgNABQgKAAgFACQgFADgFAFIgFAHQgBACgGAAQgFAAgDgDQgEgDAAgEQAAgGAFgHQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAJAAAOIAAAOIAAANQAAAHADAIIACAKQAAADgEAEQgEADgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAGAFAEQAFADAHAAQAIAAAIgDQAGgDAEgFQADgGAAgNIAAgEIgSAFg");
	this.shape_752.setTransform(-113.3,165.4);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#FF0000").s().p("AAhBBQgEgDAAgHIAAgCQgGAGgFADQgGADgGACQgGACgIAAQgKAAgJgEQgJgEgGgGQgGgIgEgJQgDgKAAgKQAAgXANgNQAOgNAUAAQAMAAAJAEQAIAEAIAHIAAglQAAgHAEgFQADgEAHAAQAGABADADQAEAEAAAHIAABtQAAAHgEADQgEAEgFAAQgGAAgEgEgAgNgIQgGADgDAHQgEAGAAALQAAAKAEAHQADAHAHAEQAFADAHAAQAHAAAHgDQAGgEAEgHQAEgHgBgKQABgKgEgIQgEgGgGgEQgHgDgHgBQgHAAgGAFg");
	this.shape_753.setTransform(-126.7,163.6);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#FF0000").s().p("AAaAvQgDgEAAgIIAAgoQAAgNgFgGQgEgGgLAAQgHAAgGADQgHAFgDAGQgBAGAAAPIAAAeQAAAIgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgEQAEgDAGAAQAEAAADACIAFAEQACAEAAAEIAAADQAIgJAJgEQAHgEAMAAQALAAAJAEQAJAFAFAHQACAFABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_754.setTransform(-139.6,165.4);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADACAAAEQAAAEgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_755.setTransform(-152.4,165.4);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#FF0000").s().p("AgvBDQgGgCAAgHQAAgEADgCQADgDAGAAIAEABIAFAAQAFAAADgBQACgBADgDIAFgJIADgGIgkhMQgDgHAAgEIACgFQACgDADgCQADgCAEAAQAGABADADQAEAEACAGIAXA8IAXg4IAFgKQACgEADgCQACgBAFgBIAGACQADACACADIABAEIgBAGIgDAGIglBUQgFALgEAHQgEAGgHAEQgIAEgNAAQgNAAgGgDg");
	this.shape_756.setTransform(-164.4,167.3);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADACAAAEQAAAEgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_757.setTransform(-175.9,165.4);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#FF0000").s().p("AgJBBQgEgDAAgIIAAhrQAAgIADgEQAEgEAGAAQAGAAAEAEQAEAEAAAIIAABrQAAAIgEADQgEAEgGAAQgGAAgDgEg");
	this.shape_758.setTransform(-185.1,163.6);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#FF0000").s().p("AgaAuQgLgDgGgHQgFgGAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAGQAFAGAGAEQAGACAKAAQAIAAAFgCQAGgEAAgEQAAgHgGgDQgFgDgNgDQgPgDgIgEQgKgCgFgGQgGgGAAgIQAAgIAFgGQAGgHAKgEQAJgEAOAAQALAAAIACQAKACAFADQAGAEADAEQADAEAAAEQAAAEgDADQgEADgGAAQgDAAgEgDIgHgGQgDgDgEgCQgFgDgHAAQgHAAgFADQgGADAAAEQABAEADACIALAFIAQAEQANADAJAEQAIACAFAGQAEAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgKgFg");
	this.shape_759.setTransform(-199.2,165.4);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#FF0000").s().p("AAhAvQgFgDgEgIQgLAHgJAFQgJADgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAIgIQAHgGANgCIAOgDIARgEIARgDQgBgLgEgEQgEgFgNABQgKAAgFACQgGADgEAFIgFAHQgBACgGAAQgFAAgDgDQgEgDAAgEQAAgGAFgHQAGgGALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAJAAAOIAAAOIAAANQAAAHACAIIADAKQAAADgEAEQgFADgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAGAFAEQAFADAHAAQAIAAAHgDQAHgDAEgFQAEgGAAgNIAAgEIgSAFg");
	this.shape_760.setTransform(-211.3,165.4);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#FF0000").s().p("AgJBBQgEgDAAgIIAAhrQAAgIADgEQAEgEAGAAQAGAAAEAEQAEAEAAAIIAABrQAAAIgEADQgEAEgGAAQgGAAgDgEg");
	this.shape_761.setTransform(-220.6,163.6);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADACAAAEQAAAEgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_762.setTransform(-235.2,165.4);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#FF0000").s().p("AAhBBQgEgDAAgHIAAgCQgFAGgGADQgGADgGACQgGACgIAAQgKAAgJgEQgIgEgHgGQgGgIgEgJQgDgKAAgKQAAgXAOgNQANgNAUAAQAMAAAJAEQAIAEAIAHIAAglQAAgHAEgFQADgEAGAAQAHABADADQAEAEAAAHIAABtQAAAHgEADQgEAEgGAAQgFAAgEgEgAgNgIQgGADgDAHQgEAGAAALQAAAKAEAHQADAHAHAEQAFADAHAAQAHAAAHgDQAGgEAEgHQAEgHgBgKQABgKgEgIQgEgGgGgEQgHgDgHgBQgHAAgGAFg");
	this.shape_763.setTransform(-248.6,163.6);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#FF0000").s().p("AAaAvQgDgEAAgIIAAgoQgBgNgEgGQgDgGgMAAQgHAAgGADQgGAFgDAGQgCAGAAAPIAAAeQgBAIgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgEQADgDAGAAQAEAAADACIAFAEQACAEAAAEIAAADQAIgJAIgEQAIgEAMAAQALAAAJAEQAJAFAEAHQADAFABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_764.setTransform(-266.8,165.4);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#FF0000").s().p("AAgAvQgDgDgGgIQgKAHgKAFQgIADgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAIgIQAHgGANgCIANgDIASgEIAQgDQAAgLgEgEQgEgFgMABQgLAAgFACQgGADgEAFIgFAHQgBACgGAAQgFAAgDgDQgEgDAAgEQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAJAAAOIAAAOIgBANQAAAHAEAIIACAKQAAADgEAEQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAGAEAEQAFADAJAAQAHAAAIgDQAGgDAEgFQAEgGgBgNIAAgEIgSAFg");
	this.shape_765.setTransform(-279.6,165.4);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#FF0000").s().p("AgJBBQgEgDAAgIIAAhrQAAgIADgEQAEgEAGAAQAGAAAEAEQAEAEAAAIIAABrQAAAIgEADQgEAEgGAAQgGAAgDgEg");
	this.shape_766.setTransform(-288.8,163.6);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#FF0000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgHADgEQAFgDAFgBQAGAAAFAFQADADAAAHIAAACQAJgIAIgEQAIgEAKAAQAOAAALAGQALAGAHALQAGAMAAAQQAAALgEAIQgDAKgHAHQgGAGgKAEQgIADgLAAQgKABgJgFQgIgFgIgHIAAAlQAAAQgOABQgHAAgDgFgAgTgqQgIAJAAAQQAAAPAIAGQAJAJAKAAQAIAAAGgDQAGgEAEgGQADgIAAgKQAAgKgDgHQgEgHgFgEQgHgDgIgBQgKABgJAHg");
	this.shape_767.setTransform(-298.2,167.3);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_768.setTransform(264.9,141.3);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#FF0000").s().p("AgbAuQgLgEgFgGQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAFQAFAHAGADQAGAEAJAAQAJAAAFgEQAGgDAAgEQAAgHgGgDQgFgDgMgDQgPgDgKgEQgJgCgFgGQgGgFAAgJQAAgIAFgGQAFgHAKgEQALgEAOAAQAJAAAJACQAJACAHADQAFAEAEAEQACAEAAAEQAAAFgDACQgEADgFAAQgEAAgEgCIgHgHQgDgEgFgCQgEgCgGAAQgIAAgGADQgEADAAAEQAAAEADADIAKAEIARAEQAOADAIAEQAIADAEAFQAFAFAAAHQAAALgGAHQgFAHgMAEQgLAEgQAAQgOAAgMgFg");
	this.shape_769.setTransform(247.3,141.3);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_770.setTransform(235.2,141.3);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#FF0000").s().p("AAhAvQgEgEgFgHQgLAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgIQAAgJAHgIQAIgGANgDIAOgCIARgDIARgFQgBgJgEgFQgEgEgNgBQgJABgGACQgFACgFAGIgFAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAJQAAAFgEACQgFAEgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAFAEQAFAFAHAAQAIgBAHgDQAIgDADgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_771.setTransform(217.2,141.3);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#FF0000").s().p("AAhBCQgEgEAAgHIAAgDQgGAHgFADQgGAEgGACQgGABgIAAQgKAAgJgDQgIgFgHgHQgGgGgDgKQgEgKAAgLQAAgWAOgNQANgNAUAAQAMAAAJADQAIAFAIAHIAAglQAAgIAEgEQADgDAGAAQAHgBADAEQAEADAAAIIAABtQAAAHgEAEQgDADgHAAQgFAAgEgDgAgNgJQgGAEgDAHQgEAHAAAJQAAALAEAGQADAHAHAFQAFADAHAAQAHAAAHgDQAGgEAEgHQADgHAAgLQAAgJgDgIQgEgGgGgEQgHgDgHAAQgHAAgGADg");
	this.shape_772.setTransform(203.8,139.4);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_773.setTransform(194.5,139.5);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#FF0000").s().p("AgJAwIgFgFIgGgMIgbg5IgCgFIgCgEIAAgEIABgFIAFgEQADgCAEAAQAHAAADAEQADADADAIIAWA4IAZg5QADgIADgDQACgDAGAAQAGAAAEAEQADADAAAEIAAAEIgCAEIgCAEIgbA6IgDAHIgEAHIgGAEQgDACgFAAQgFAAgEgDg");
	this.shape_774.setTransform(185.7,141.3);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#FF0000").s().p("AAhAvQgFgEgEgHQgLAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgIQAAgJAIgIQAHgGANgDIANgCIASgDIAQgFQAAgJgEgFQgEgEgMgBQgLABgFACQgGACgEAGIgFAHQgBABgGAAQgFAAgDgCQgEgDAAgEQAAgHAGgFQAFgHALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAPIAAANIgBAOQABAHADAIIACAJQAAAFgEACQgEAEgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAFAEQAEAFAIAAQAIgBAIgDQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_775.setTransform(168.3,141.3);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgvIgEAAQgGAAgDgDQgEgCAAgEQAAgEAEgDQADgCAHAAIADAAIAAgPIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGAAADACQADADAAAEQAAAEgEACQgFACgIABIgGAAIAAAtIABAJQAAACACACQACACAFAAIAHgBIAHAAQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_776.setTransform(158.5,139.6);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDACQgDADgDAGIgDANIgBATIAAAVQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_777.setTransform(150,141.3);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#FF0000").s().p("AgXAvQgKgEgIgHQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgbQgHADgDAHQgDAIAAAJQAAAKADAHQADAIAHADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgIAAgGAFg");
	this.shape_778.setTransform(138.2,141.3);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#FF0000").s().p("AAcAvQgEgEAAgHIAAgCIgLAJQgFAEgHACQgGACgIAAQgLAAgIgEQgIgEgEgHQgGgHAAgQIAAgwQAAgIAEgDQAEgEAGAAQAGAAAFAEQADADAAAIIAAAnQABAJABAFQACAGAFAEQADADAIAAQAGAAAHgDQAGgEADgGQADgFgBgSIAAgeQAAgIAFgDQAEgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgFAAQgHAAgDgEg");
	this.shape_779.setTransform(107.2,141.3);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#FF0000").s().p("AgbAuQgKgEgGgGQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAACACIAFAFQAEAHAHADQAGAEAKAAQAIAAAFgEQAGgDAAgEQAAgHgGgDQgFgDgMgDQgPgDgKgEQgJgCgFgGQgGgFAAgJQAAgIAFgGQAGgHAJgEQALgEAOAAQAKAAAIACQAJACAHADQAFAEAEAEQACAEAAAEQABAFgEACQgEADgFAAQgFAAgDgCIgHgHQgDgEgFgCQgEgCgGAAQgJAAgEADQgGADAAAEQABAEADADIALAEIAQAEQAOADAIAEQAIADAEAFQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgLgFg");
	this.shape_780.setTransform(94.9,141.3);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#FF0000").s().p("AgXAvQgKgEgIgHQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALADAHAIQAIAGAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgbQgHADgDAHQgEAIABAJQgBAKAEAHQADAIAHADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgHAAgHAFg");
	this.shape_781.setTransform(77.3,141.3);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgvIgEAAQgGAAgDgDQgEgCAAgEQAAgEAEgDQADgCAHAAIADAAIAAgPIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGAAADACQADADAAAEQAAAEgEACQgFACgIABIgGAAIAAAtIABAJQAAACACACQACACAFAAIAHgBIAHAAQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_782.setTransform(67.3,139.6);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#FF0000").s().p("AgbAuQgLgEgFgGQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAFQAFAHAGADQAGAEAJAAQAJAAAGgEQAFgDAAgEQAAgHgFgDQgHgDgLgDQgPgDgKgEQgJgCgGgGQgFgFAAgJQAAgIAFgGQAFgHAKgEQALgEAOAAQAKAAAJACQAJACAGADQAFAEAEAEQACAEAAAEQAAAFgDACQgDADgGAAQgFAAgDgCIgHgHQgDgEgFgCQgEgCgGAAQgIAAgGADQgEADAAAEQgBAEAEADIAKAEIARAEQAOADAIAEQAIADAEAFQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgOAAgMgFg");
	this.shape_783.setTransform(57.3,141.3);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_784.setTransform(45.2,141.3);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#FF0000").s().p("AAcAvQgEgEAAgHIAAgCIgKAJQgGAEgHACQgGACgIAAQgLAAgIgEQgIgEgFgHQgFgHAAgQIAAgwQAAgIAEgDQADgEAHAAQAGAAAFAEQADADAAAIIAAAnQABAJABAFQACAGAFAEQADADAIAAQAGAAAHgDQAGgEADgGQACgFAAgSIAAgeQAAgIAEgDQAFgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgFAAQgHAAgDgEg");
	this.shape_785.setTransform(32.4,141.3);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#FF0000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgIAEgDQADgEAHABQAFAAAEADQAEAEAAAGIAAAEQAJgJAIgEQAJgEAJAAQAOAAALAGQALAGAGALQAHAMAAAPQAAAMgEAJQgEAJgGAHQgHAGgIAEQgJADgLAAQgKAAgJgEQgJgEgHgJIAAAmQAAAQgNAAQgJABgCgFgAgTgpQgHAHAAAQQAAAQAHAHQAJAIALAAQAHAAAGgDQAGgFADgGQAEgGAAgLQAAgKgDgHQgDgHgHgEQgGgDgHAAQgLgBgJAJg");
	this.shape_786.setTransform(19.5,143.1);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#FF0000").s().p("AAhAvQgFgEgEgHQgLAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgIQAAgJAIgIQAHgGANgDIAOgCIARgDIAQgFQAAgJgEgFQgEgEgNgBQgKABgFACQgFACgFAGIgFAHQgBABgGAAQgFAAgDgCQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHADAIIACAJQAAAFgEACQgEAEgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAFAEQAFAFAHAAQAIgBAIgDQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_787.setTransform(6.4,141.3);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#FF0000").s().p("AgOAaQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgEAFgBQALgHAAgJQgGAAgFgCQgFgEAAgGQAAgGAFgFQAFgEAGABQAFAAAEACQAEACACAFQACAFAAAGQAAAJgEAHQgEAJgHAEQgFAEgFAAQgEABgCgCg");
	this.shape_788.setTransform(-8.7,146.3);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#FF0000").s().p("AgWAvQgLgEgHgHQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgbQgGADgEAHQgDAIgBAJQABAKADAHQAEAIAGADQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgPgHgIQgIgJgNAAQgHAAgHAFg");
	this.shape_789.setTransform(-17.7,141.3);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgvIgEAAQgGAAgDgDQgEgCAAgEQAAgEAEgDQADgCAHAAIADAAIAAgPIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGAAADACQADADAAAEQAAAEgEACQgFACgIABIgGAAIAAAtIABAJQAAACACACQACACAFAAIAHgBIAHAAQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_790.setTransform(-27.7,139.6);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_791.setTransform(-47.4,139.5);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#FF0000").s().p("AAhBCQgEgEAAgHIAAgDQgFAHgGADQgGAEgGACQgGABgIAAQgKAAgJgDQgIgFgHgHQgGgGgEgKQgDgKAAgLQAAgWAOgNQANgNAUAAQAMAAAJADQAIAFAIAHIAAglQAAgIAEgEQADgDAGAAQAHgBADAEQAEADAAAIIAABtQAAAHgEAEQgEADgGAAQgFAAgEgDgAgNgJQgGAEgDAHQgEAHAAAJQAAALAEAGQADAHAHAFQAFADAHAAQAHAAAHgDQAGgEAEgHQAEgHgBgLQABgJgEgIQgEgGgGgEQgHgDgHAAQgHAAgGADg");
	this.shape_792.setTransform(-57.3,139.4);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#FF0000").s().p("AAhAvQgFgEgEgHQgLAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgIQAAgJAIgIQAHgGANgDIAOgCIARgDIARgFQgBgJgEgFQgEgEgNgBQgKABgFACQgGACgEAGIgFAHQgBABgGAAQgFAAgDgCQgEgDAAgEQAAgHAFgFQAGgHALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAJQAAAFgEACQgFAEgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAFAEQAFAFAHAAQAIgBAHgDQAHgDAEgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_793.setTransform(-70,141.3);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#FF0000").s().p("AgbBCQgMgEgGgFQgGgHAAgGQAAgEADgDQAEgDAFAAQAGAAAFAFIAFAFIAFAFIAHACIAKABQAKAAAGgCQAGgEADgFQACgEABgGIAAgSQgGAJgJAEQgJAEgLAAQgOAAgLgHQgKgGgGgMQgGgKAAgPQAAgLAEgJQADgJAHgHQAGgGAJgDQAIgDAKAAQALAAAJAEQAJAEAIAJIAAgEQAAgGAEgEQADgEAGABQAIAAADAEQADAFAAAJIAABIQAAAMgDAJQgDAJgHAGQgHAGgLADQgKACgQAAQgOABgMgEgAgTgpQgHAHAAAPQAAAQAHAHQAIAHALABQAHgBAHgDQAGgEAEgFQAEgHAAgKQAAgPgIgIQgIgIgMAAQgLgBgIAJg");
	this.shape_794.setTransform(-82.9,143.1);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#FF0000").s().p("AgXAvQgKgEgIgHQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgbQgHADgDAHQgDAIAAAJQAAAKADAHQADAIAHADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgIAAgGAFg");
	this.shape_795.setTransform(-95.8,141.3);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDACQgDADgDAGIgDANIgBATIAAAVQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_796.setTransform(-105.5,141.3);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#FF0000").s().p("AAhBCQgEgEAAgHIAAgDQgGAHgFADQgGAEgGACQgGABgIAAQgKAAgIgDQgKgFgGgHQgGgGgEgKQgDgKAAgLQAAgWANgNQANgNAVAAQAMAAAIADQAJAFAIAHIAAglQAAgIAEgEQADgDAHAAQAGgBAEAEQADADAAAIIAABtQAAAHgDAEQgFADgFAAQgGAAgEgDgAgNgJQgGAEgEAHQgDAHAAAJQAAALADAGQAEAHAGAFQAHADAGAAQAIAAAGgDQAGgEAEgHQADgHAAgLQAAgJgDgIQgEgGgGgEQgGgDgIAAQgHAAgGADg");
	this.shape_797.setTransform(-117.9,139.4);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#FF0000").s().p("AgOAaQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgEAFgBQALgHAAgJQgGAAgFgCQgFgEAAgGQAAgGAFgFQAFgEAGABQAFAAAEACQAEACACAFQACAFAAAGQAAAJgEAHQgEAJgHAEQgFAEgFAAQgEABgCgCg");
	this.shape_798.setTransform(-133,146.3);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#FF0000").s().p("AAgAvQgEgEgFgHQgKAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgIQAAgJAHgIQAIgGANgDIAOgCIARgDIARgFQgBgJgEgFQgEgEgNgBQgJABgGACQgFACgEAGIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAJQAAAFgEACQgFAEgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAEAEQAFAFAIAAQAIgBAHgDQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_799.setTransform(-142.7,141.3);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgvIgEAAQgGAAgDgDQgEgCAAgEQAAgEAEgDQADgCAHAAIADAAIAAgPIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGAAADACQADADAAAEQAAAEgEACQgFACgIABIgGAAIAAAtIABAJQAAACACACQACACAFAAIAHgBIAHAAQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_800.setTransform(-152.5,139.6);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_801.setTransform(-163,141.3);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#FF0000").s().p("AgWAvQgLgEgHgHQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgbQgGADgEAHQgDAIgBAJQABAKADAHQAEAIAGADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgIAAgGAFg");
	this.shape_802.setTransform(-175.8,141.3);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#FF0000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgIADgDQAFgEAGABQAFAAAFADQADAEAAAGIAAAEQAIgJAJgEQAIgEAKAAQAOAAALAGQALAGAHALQAGAMAAAPQAAAMgEAJQgDAJgHAHQgGAGgKAEQgIADgLAAQgLAAgIgEQgIgEgIgJIAAAmQAAAQgNAAQgJABgCgFgAgTgpQgHAHgBAQQABAQAHAHQAIAIALAAQAIAAAGgDQAGgFAEgGQADgGAAgLQAAgKgDgHQgEgHgFgEQgHgDgIAAQgKgBgJAJg");
	this.shape_803.setTransform(-188.7,143.1);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#FF0000").s().p("AgOAaQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgEAFgBQALgHAAgJQgGAAgFgCQgFgEAAgGQAAgGAFgFQAFgEAGABQAFAAAEACQAEACACAFQACAFAAAGQAAAJgEAHQgEAJgHAEQgFAEgFAAQgEABgCgCg");
	this.shape_804.setTransform(-204.4,146.3);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_805.setTransform(-213.4,141.3);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgvIgEAAQgGAAgDgDQgEgCAAgEQAAgEAEgDQADgCAHAAIADAAIAAgPIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGAAADACQADADAAAEQAAAEgEACQgFACgIABIgGAAIAAAtIABAJQAAACACACQACACAFAAIAHgBIAHAAQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_806.setTransform(-223.2,139.6);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#FF0000").s().p("AAaAvQgDgEAAgHIAAgpQAAgNgFgGQgDgHgMAAQgHABgGAEQgGAEgDAGQgCAGAAAOIAAAgQAAAHgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAEAAADABIAFAGQACACAAAFIAAADQAIgJAIgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_807.setTransform(-233.8,141.3);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_808.setTransform(-246.6,141.3);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#FF0000").s().p("AAhBCQgEgEAAgHIAAgDQgGAHgFADQgGAEgGACQgGABgIAAQgKAAgJgDQgJgFgGgHQgGgGgEgKQgDgKAAgLQAAgWANgNQAOgNAUAAQAMAAAIADQAJAFAIAHIAAglQAAgIAEgEQADgDAHAAQAGgBAEAEQADADAAAIIAABtQAAAHgDAEQgEADgGAAQgGAAgEgDgAgNgJQgGAEgEAHQgDAHAAAJQAAALADAGQAEAHAHAFQAFADAHAAQAIAAAGgDQAGgEAEgHQADgHAAgLQAAgJgDgIQgEgGgGgEQgGgDgIAAQgHAAgGADg");
	this.shape_809.setTransform(-260,139.4);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_810.setTransform(-269.3,139.5);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#FF0000").s().p("AgbAuQgKgEgGgGQgFgGAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAFQAEAHAHADQAGAEAKAAQAIAAAFgEQAGgDAAgEQAAgHgGgDQgFgDgNgDQgOgDgKgEQgJgCgFgGQgGgFAAgJQAAgIAFgGQAGgHAJgEQAKgEAOAAQALAAAIACQAKACAFADQAGAEADAEQADAEAAAEQABAFgEACQgEADgFAAQgEAAgEgCIgHgHQgDgEgFgCQgEgCgHAAQgHAAgFADQgGADAAAEQABAEADADIALAEIAQAEQANADAJAEQAIADAEAFQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgLgFg");
	this.shape_811.setTransform(-278.1,141.3);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_812.setTransform(-286.8,139.5);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#FF0000").s().p("AgtBDQgJAAgEgCQgEgDgBgDQgCgEAAgHIAAhhQAAgJAFgFQAEgDAKAAIApAAQAPAAALACQALADAKAHQAYASAAAkQAAALgDALQgCAKgFAIQgFAHgIAHQgGAFgIACQgHADgIACIgTABgAgiAtIAYAAIALAAIAJgCIAIgEQAQgMAAgbQAAgTgHgLQgHgKgKgCQgKgDgNAAIgVAAg");
	this.shape_813.setTransform(-297.3,139.4);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#FF0000").s().p("AAbAvQgEgEgBgIIAAgoQAAgNgEgGQgDgHgMABQgHAAgGADQgGAFgDAGQgCAGgBAPIAAAeQAAAIgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAHgJAJgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgHAAgDgEg");
	this.shape_814.setTransform(46.8,117.1);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#FF0000").s().p("AgXAvQgKgDgIgIQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAALAEQAKAEAIAHQAHAGAEAKQAEAIAAALQAAALgEAJQgEAKgHAHQgIAHgKADQgLAEgNAAQgMAAgLgEgAgOgbQgHAEgDAGQgDAIAAAJQAAAKADAHQADAIAHADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgIABgGAEg");
	this.shape_815.setTransform(33.8,117.1);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#FF0000").s().p("AgaAuQgLgDgGgHQgFgGAAgGQAAgEADgDQADgDAGAAQAEAAACACIAFAFQAFAHAGAEQAGADAKAAQAIAAAGgDQAFgEAAgEQAAgHgFgDQgHgDgMgDQgPgDgIgEQgKgCgGgGQgFgGAAgIQAAgHAFgHQAFgHALgEQAKgEANAAQAKAAAKACQAIACAGADQAGAEADAEQAEAEAAAEQAAAFgEACQgDADgHAAQgEAAgDgCIgHgHQgDgDgEgDQgFgCgHAAQgIAAgFADQgEADgBAEQAAAEAEACIAKAFIARAEQANADAJAEQAIADAFAFQAEAFAAAHQAAAKgGAIQgFAHgMAEQgLAEgPAAQgPAAgLgFg");
	this.shape_816.setTransform(21.5,117.1);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgIIAAhGQAAgHAEgEQADgEAGAAQAGAAAEAEQAEAEAAAHIAABGQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_817.setTransform(12.8,115.3);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgCQgGgBgEAAQgHAAgDACQgDADgDAGIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_818.setTransform(5.9,117.1);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgCQgGgBgEAAQgHAAgDACQgDADgDAGIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_819.setTransform(-3.2,117.1);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#FF0000").s().p("AgWAvQgLgDgHgIQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAALAEQAKAEAIAHQAHAGAEAKQAEAIAAALQAAALgEAJQgEAKgHAHQgIAHgKADQgLAEgNAAQgMAAgKgEgAgOgbQgGAEgEAGQgDAIgBAJQABAKADAHQAEAIAGADQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgPgHgIQgIgJgNAAQgHABgHAEg");
	this.shape_820.setTransform(-15,117.1);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#FF0000").s().p("AAxBAQgDgEAAgHIAAhcIgZBVIgEAMQgCAEgDADQgFADgHAAQgFAAgDgCQgEgCgCgDIgDgHIgDgIIgYhVIAABcQgBAHgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgHIAAhqQAAgIAFgDQAGgDAJAAIAJAAIAMABQAFABACAEIADALIAWBJIAWhJIAFgLQACgEADgBIANgBIAKAAQAIAAAGADQAFADAAAIIAABqQAAAHgEAEQgEAEgHAAQgGAAgEgEg");
	this.shape_821.setTransform(-30.5,115.3);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#FF0000").s().p("AA4AvQgEgEAAgIIAAgpIgBgNQAAgEgEgEQgEgDgGAAQgGAAgFADQgFACgDAGQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgEgEQgFgEAAgIIAAgnIgBgOQAAgFgDgEQgDgDgIAAQgOgBgEAJQgEAJAAAOIAAAiQAAAIgFAEQgEAEgGAAQgHAAgEgEQgEgEAAgIIAAhGQAAgHAEgEQAEgEAFAAQAHAAADAEQAFADAAAGIAAACQAHgHAIgEQAJgEAKAAQALAAAIAEQAHAEAEAHQAIgHAIgEQAJgEAKAAQALABAIAEQAJADAEAIQAEAGAAAPIAAAwQAAAIgEAEQgEAEgHAAQgHAAgEgEg");
	this.shape_822.setTransform(-54.2,117.1);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgIIAAhGQAAgHAEgEQADgEAGAAQAGAAAEAEQAEAEAAAHIAABGQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_823.setTransform(-66.6,115.3);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#FF0000").s().p("AgaBBQgKgFgHgJIgFgLQgCgIAAgGQAAgGAEgEQAFgDAFAAQAHAAADADQADAEACAGIADAMQACADAFADQAEAEAHAAQAUgBAAgaIAAhJQAAgIAEgFQAEgDAHAAQAIAAAEADQAEAFAAAIIAABFIgBAQQgBAHgDAGQgFALgMAGQgMAGgRAAQgPABgLgFg");
	this.shape_824.setTransform(-76.3,115.2);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#FF0000").s().p("AAgAvQgEgEgFgGQgKAGgJAFQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAHgHQAIgGANgDIANgCIASgDIARgFQgBgKgEgEQgEgEgMgBQgKABgGACQgFACgEAGIgGAHQgCACgFgBQgFABgDgDQgEgDAAgEQAAgHAGgFQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAOIAAAPIgBANQAAAHADAIIADAJQAAAFgEADQgFADgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAGAEADQAFAEAJABQAHAAAHgEQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_825.setTransform(227.7,208.6);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#FF0000").s().p("AgWAvQgLgEgHgGQgIgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAALAEQAKADAIAIQAHAGAEAJQAEAJAAALQAAALgEAJQgEAKgHAHQgIAHgKADQgLAEgNAAQgMAAgKgEgAgOgbQgGADgEAIQgDAHgBAJQABAKADAHQAEAIAGAEQAGADAIAAQANAAAIgJQAHgIAAgPQAAgPgHgIQgIgJgNAAQgHAAgHAFg");
	this.shape_826.setTransform(196.5,208.6);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#FF0000").s().p("AgbAvQgLgEgFgGQgFgHAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAFQAEAHAHADQAGADAJABQAJgBAGgDQAFgDAAgFQAAgGgFgDQgHgDgLgDQgPgDgKgDQgJgDgGgGQgFgGAAgIQAAgHAFgHQAFgHAKgEQALgEAOAAQAJAAAKACQAJACAGAEQAFADAEAEQADAEAAAEQgBAEgDADQgDADgHAAQgEAAgDgDIgHgGQgDgEgFgCQgEgCgGAAQgIAAgGADQgEADAAAEQgBAEAEADIAKAEIARAEQANACAJAEQAIADAFAGQAEAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgPAAgMgEg");
	this.shape_827.setTransform(184.1,208.6);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#FF0000").s().p("AgWAvQgLgEgHgGQgIgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAAKAEQALADAHAIQAIAGAEAJQAEAJAAALQAAALgEAJQgEAKgIAHQgHAHgLADQgKAEgNAAQgMAAgKgEgAgOgbQgHADgDAIQgEAHAAAJQAAAKAEAHQADAIAHAEQAGADAIAAQANAAAIgJQAHgIAAgPQAAgPgHgIQgIgJgNAAQgIAAgGAFg");
	this.shape_828.setTransform(166.5,208.6);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#FF0000").s().p("AgaAvQgLgEgGgGQgFgHAAgGQAAgEADgDQADgDAGAAQAEAAACACIAFAFQAFAHAGADQAGADAKABQAIgBAFgDQAGgDAAgFQAAgGgGgDQgGgDgMgDQgPgDgIgDQgKgDgGgGQgFgGAAgIQAAgHAFgHQAGgHAKgEQAJgEAOAAQAKAAAKACQAIACAGAEQAGADADAEQADAEABAEQAAAEgEADQgEADgGAAQgDAAgEgDIgHgGQgDgEgEgCQgFgCgHAAQgHAAgFADQgFADgBAEQAAAEAEADIALAEIAQAEQANACAJAEQAIADAFAGQAEAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgQAAgKgEg");
	this.shape_829.setTransform(154.1,208.6);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#FF0000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgCgFgDgDQgEgDgGgBQgGAAgFAEQgFADgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgEgEQgFgEAAgIIAAgnIgBgOQAAgGgDgDQgEgDgGgBQgPAAgEAJQgEAIAAAQIAAAhQAAAIgEAEQgFAEgGAAQgGAAgFgEQgEgEAAgIIAAhGQAAgIAEgDQAEgEAFAAQAHAAADADQAFAEAAAGIAAADQAHgJAJgDQAIgDAKgBQALABAIADQAGAEAFAIQAIgIAIgEQAIgDALgBQALAAAIAFQAJAEAEAHQAEAHAAAOIAAAwQAAAIgEAEQgFAEgGAAQgHAAgEgEg");
	this.shape_830.setTransform(133.1,208.6);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#FF0000").s().p("AgWAvQgLgEgIgGQgHgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGALgEQAKgEAMAAQANAAAKAEQALADAHAIQAIAGAEAJQAEAJAAALQAAALgEAJQgEAKgIAHQgHAHgLADQgKAEgNAAQgMAAgKgEgAgOgbQgGADgEAIQgEAHAAAJQAAAKAEAHQAEAIAGAEQAGADAIAAQANAAAIgJQAHgIAAgPQAAgPgHgIQgIgJgNAAQgIAAgGAFg");
	this.shape_831.setTransform(117.1,208.6);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#FF0000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgHAEgEQAEgDAFAAQAGAAAEADQAEAEAAAGIAAADQAJgIAIgEQAJgEAKAAQANAAALAGQALAGAGALQAHAMAAAPQAAAMgDAJQgFAJgGAGQgHAHgIAEQgJADgKABQgMgBgIgEQgIgEgIgJIAAAmQAAAQgOAAQgHAAgDgEgAgSgpQgIAHAAAQQAAAPAIAIQAHAIAMAAQAHAAAGgEQAGgDADgHQAEgHAAgKQAAgKgDgHQgDgHgHgEQgGgEgHABQgLAAgIAIg");
	this.shape_832.setTransform(95.6,210.4);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#FF0000").s().p("AA5AvQgFgEAAgIIAAgpIgBgNQgBgFgDgDQgDgDgIgBQgFAAgFAEQgFADgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgFgEQgDgEAAgIIAAgnIgBgOQgBgGgDgDQgDgDgIgBQgOAAgEAJQgFAIABAQIAAAhQgBAIgEAEQgDAEgHAAQgGAAgEgEQgFgEAAgIIAAhGQAAgIAEgDQADgEAHAAQAGAAAEADQADAEAAAGIAAADQAIgJAIgDQAJgDAKgBQALABAHADQAHAEAGAIQAGgIAJgEQAJgDAJgBQAMAAAJAFQAIAEAEAHQAEAHAAAOIAAAwQAAAIgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_833.setTransform(79.1,208.6);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#FF0000").s().p("AgXAvQgKgEgIgGQgHgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAAKAEQALADAHAIQAIAGAEAJQAEAJAAALQAAALgEAJQgEAKgIAHQgHAHgLADQgKAEgNAAQgMAAgLgEgAgOgbQgGADgEAIQgDAHAAAJQAAAKADAHQAEAIAGAEQAGADAIAAQANAAAHgJQAIgIAAgPQAAgPgIgIQgHgJgNAAQgHAAgHAFg");
	this.shape_834.setTransform(63.2,208.6);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#FF0000").s().p("AAaAvQgDgEAAgHIAAgpQAAgMgFgHQgDgGgMgBQgHAAgGAFQgHADgDAIQgBAFAAAOIAAAgQAAAHgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgEQAEgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAIgIAIgEQAIgFAMAAQALAAAJAFQAJAEAEAIQADAEABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_835.setTransform(32.2,208.6);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#FF0000").s().p("AAhAvQgFgEgEgGQgLAGgKAFQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAIgHQAHgGANgDIAOgCIARgDIAQgFQAAgKgEgEQgEgEgNgBQgKABgFACQgFACgFAGIgFAHQgBACgGgBQgFABgDgDQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAIAAAOIAAAPIAAANQAAAHADAIIACAJQAAAFgEADQgEADgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAGAFADQAFAEAHABQAIAAAIgEQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_836.setTransform(19.4,208.6);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#FF0000").s().p("AgbBCQgMgEgGgFQgGgGAAgHQAAgEADgDQAEgCAFgBQAGABAFAEIAFAFIAFAFIAHACIAKABQAKAAAGgCQAGgDADgFQACgFABgFIAAgSQgGAHgJAFQgJAEgLAAQgOAAgLgGQgKgHgGgLQgGgLAAgPQAAgLAEgJQADgKAHgFQAGgHAJgDQAIgDAKAAQALAAAJAEQAJAEAIAIIAAgDQAAgGAEgEQADgDAGAAQAIAAADAEQADAFAAAJIAABIQAAAMgDAJQgDAJgHAGQgHAFgLAEQgKACgQAAQgOAAgMgDgAgTgpQgHAHAAAPQAAAQAHAHQAIAHALABQAHAAAHgEQAGgEAEgFQAEgHAAgKQAAgOgIgJQgIgJgMABQgLAAgIAIg");
	this.shape_837.setTransform(-2.6,210.4);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#FF0000").s().p("AAcAvQgEgEAAgGIAAgEIgKAKQgHAEgGACQgGABgIAAQgLABgIgEQgIgEgFgGQgFgJAAgPIAAgwQAAgHAEgEQADgEAHAAQAGAAAEAEQAFAEAAAHIAAAnQgBAJACAGQACAFAFAEQADAEAIgBQAGAAAHgDQAGgEADgGQACgGABgRIAAgeQAAgHADgEQAFgEAGAAQAGAAAEAEQAEAEAAAHIAABIQAAAGgEAEQgDAEgGAAQgHAAgDgEg");
	this.shape_838.setTransform(-20.8,208.6);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#FF0000").s().p("AgaAvQgLgEgGgGQgFgHAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAFQAFAHAGADQAGADAKABQAIgBAFgDQAGgDAAgFQAAgGgGgDQgFgDgNgDQgPgDgIgDQgKgDgFgGQgGgGAAgIQAAgHAFgHQAGgHAKgEQAJgEAOAAQALAAAIACQAKACAFAEQAGADADAEQADAEAAAEQAAAEgDADQgEADgGAAQgDAAgEgDIgHgGQgDgEgEgCQgFgCgHAAQgHAAgFADQgGADAAAEQABAEADADIALAEIAQAEQANACAJAEQAIADAFAGQAEAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgKgEg");
	this.shape_839.setTransform(-33.2,208.6);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#FF0000").s().p("AgvBDQgGgDAAgFQAAgFADgCQADgCAGAAIAEAAIAFABQAFgBADgBQACgBADgEIAFgJIADgFIgkhNQgDgHAAgCIACgHQACgCADgBQADgCAEAAQAGAAADADQAEAEACAGIAXA9IAXg4IAFgMQACgEADgBQACgBAFAAIAGABQADABACADIABAGIgBAEIgDAHIglBVQgFAKgEAHQgEAGgHAEQgIADgNAAQgNAAgGgCg");
	this.shape_840.setTransform(-50.4,210.4);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#FF0000").s().p("AgbAvQgLgEgFgGQgFgHAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAFQAFAHAGADQAGADAJABQAJgBAFgDQAGgDAAgFQAAgGgGgDQgFgDgMgDQgPgDgKgDQgJgDgFgGQgGgGAAgIQAAgHAFgHQAFgHAKgEQALgEAOAAQAJAAAJACQAJACAHAEQAFADAEAEQACAEAAAEQAAAEgDADQgEADgFAAQgEAAgEgDIgHgGQgDgEgFgCQgEgCgGAAQgJAAgFADQgEADAAAEQAAAEADADIAKAEIARAEQAOACAIAEQAIADAEAGQAFAFAAAHQAAALgGAHQgFAHgMAEQgLAEgQAAQgOAAgMgEg");
	this.shape_841.setTransform(-67.2,208.6);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#FF0000").s().p("AAgAvQgDgEgGgGQgKAGgKAFQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAIgHQAHgGANgDIANgCIASgDIAQgFQAAgKgEgEQgEgEgMgBQgLABgFACQgGACgEAGIgFAHQgBACgGgBQgFABgDgDQgEgDAAgEQAAgHAGgFQAFgHALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAOIAAAPIgBANQAAAHAEAIIACAJQAAAFgEADQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAGAEADQAFAEAJABQAHAAAIgEQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_842.setTransform(-79.3,208.6);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#FF0000").s().p("AgXAvQgKgEgIgGQgHgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAALAEQAKADAIAIQAHAGAEAJQAEAJAAALQAAALgEAJQgEAKgHAHQgIAHgKADQgLAEgNAAQgMAAgLgEgAgOgbQgHADgDAIQgDAHAAAJQAAAKADAHQADAIAHAEQAGADAIAAQANAAAHgJQAIgIAAgPQAAgPgIgIQgHgJgNAAQgIAAgGAFg");
	this.shape_843.setTransform(-104.8,208.6);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#FF0000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgHADgEQAFgDAFAAQAGAAAFADQADAEAAAGIAAADQAJgIAIgEQAIgEAKAAQAOAAALAGQALAGAHALQAGAMAAAPQAAAMgEAJQgDAJgHAGQgGAHgKAEQgIADgLABQgKgBgJgEQgIgEgIgJIAAAmQAAAQgOAAQgHAAgDgEgAgTgpQgIAHAAAQQAAAPAIAIQAJAIAKAAQAIAAAGgEQAGgDAEgHQADgHAAgKQAAgKgDgHQgEgHgFgEQgHgEgIABQgKAAgJAIg");
	this.shape_844.setTransform(-117.7,210.4);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#FF0000").s().p("AgaAvQgLgEgGgGQgFgHAAgGQAAgEADgDQADgDAGAAQAEAAACACIAFAFQAFAHAGADQAGADAJABQAJgBAGgDQAFgDAAgFQAAgGgFgDQgHgDgMgDQgPgDgIgDQgKgDgGgGQgFgGAAgIQAAgHAFgHQAFgHALgEQAKgEANAAQAKAAAKACQAIACAGAEQAGADADAEQAEAEAAAEQAAAEgEADQgDADgHAAQgEAAgDgDIgHgGQgDgEgEgCQgFgCgHAAQgIAAgFADQgEADgBAEQAAAEAEADIAKAEIARAEQANACAJAEQAIADAFAGQAEAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgPAAgLgEg");
	this.shape_845.setTransform(-148.6,208.6);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#FF0000").s().p("AAgAvQgEgEgFgGQgKAGgJAFQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAHgHQAIgGANgDIAOgCIARgDIARgFQgBgKgEgEQgEgEgNgBQgJABgGACQgFACgEAGIgGAHQgCACgFgBQgFABgDgDQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAAOIAAAPIAAANQAAAHACAIIADAJQAAAFgEADQgFADgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAGAEADQAFAEAIABQAIAAAHgEQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_846.setTransform(-160.7,208.6);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#FF0000").s().p("AgmAlQgPgOAAgXQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_847.setTransform(-184.6,208.6);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#FF0000").s().p("AAhBBQgEgDAAgHIAAgDQgGAGgFAEQgGAEgHACQgFACgHAAQgLAAgJgFQgIgDgHgIQgGgGgDgKQgEgKAAgLQAAgWAOgNQANgNAVAAQALAAAJADQAIAEAIAIIAAglQAAgIADgDQAEgEAGgBQAHAAADAEQAEAEAAAHIAABtQAAAHgEADQgDAFgHAAQgFAAgEgFgAgNgJQgGAEgDAGQgEAHAAAKQAAALAEAGQADAIAGADQAGAEAHAAQAIAAAGgEQAGgDAEgHQAEgHAAgLQAAgKgEgHQgEgGgGgEQgGgEgIABQgHAAgGADg");
	this.shape_848.setTransform(-198,206.7);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#FF0000").s().p("AglAwQgIAAgEgCQgEgDAAgGQAAgEADgDIAMgLIARgRIAOgNIAKgLIAHgIIgpAAQgJAAgFgBQgEgBAAgGQAAgEADgDQAEgDAGAAIBBAAQAJAAAFADQAEACAAAGIgBAEIgCAEIgDADIgFAFIgzAyIA3AAQAHAAADADQAEACAAAFQAAAEgEADQgDADgHgBg");
	this.shape_849.setTransform(-215.3,208.6);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#FF0000").s().p("AgmAlQgPgOAAgXQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_850.setTransform(-227,208.6);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#FF0000").s().p("AgJAwIgFgFIgGgMIgbg5IgCgFIgCgEIAAgEIABgFIAFgEQADgCAEAAQAHAAADADQADAFADAIIAWA3IAZg5QADgIADgDQACgDAGAAQAGAAAEADQADADAAAFIAAAEIgCAEIgCAEIgbA6IgDAHIgEAHIgGAEQgDACgFAAQgFAAgEgDg");
	this.shape_851.setTransform(-238.8,208.6);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#FF0000").s().p("AAgAvQgDgEgGgGQgKAGgKAFQgIADgMAAQgLAAgJgEQgIgEgFgGQgEgHAAgIQAAgKAHgHQAIgGANgDIANgCIASgDIAQgFQAAgKgEgEQgEgEgMgBQgKABgGACQgFACgEAGIgGAHQgCACgFgBQgFABgDgDQgEgDAAgEQAAgHAGgFQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAOIAAAPIgBANQAAAHADAIIADAJQAAAFgEADQgFADgFAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAGAEADQAGAEAIABQAHAAAHgEQAIgDADgFQADgGAAgNIAAgDIgSAEg");
	this.shape_852.setTransform(-250.5,208.6);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgwIgEAAQgGAAgDgCQgEgDAAgEQAAgEAEgCQADgDAHAAIADAAIAAgOIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGAAADADQADACAAAEQAAAGgEABQgFACgIAAIgGAAIAAAtIABAJQAAAEACABQACACAFAAIAHgBIAHAAQADAAADACQADADAAADQAAAGgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_853.setTransform(-269.2,206.9);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#FF0000").s().p("AAgAvQgDgEgGgGQgKAGgKAEQgIAEgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgJAHgIQAIgGANgDIANgCIASgDIAQgFQAAgKgEgEQgEgEgMgBQgKABgGACQgGACgDAGIgGAHQgCACgFgBQgFABgDgDQgEgDAAgEQAAgHAGgFQAFgHALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAOIAAAOIgBAOQAAAHAEAIIACAJQAAAFgEACQgEAEgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAGAFAIAAQAHAAAIgEQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_854.setTransform(293.6,184.4);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#FF0000").s().p("AAgAvQgDgEgGgGQgKAGgKAEQgIAEgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgJAHgIQAIgGANgDIANgCIASgDIAQgFQAAgKgEgEQgEgEgMgBQgKABgGACQgGACgDAGIgGAHQgCACgFgBQgFABgDgDQgEgDAAgEQAAgHAGgFQAFgHALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAOIAAAOIgBAOQAAAHAEAIIACAJQAAAFgEACQgEAEgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAGAFAIAAQAHAAAIgEQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_855.setTransform(275.6,184.4);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#FF0000").s().p("AAcBBQgEgEAAgHIAAgDIgLAKQgFAEgHACQgGABgIAAQgLAAgIgDQgIgEgFgHQgFgIAAgPIAAgwQAAgIAEgDQADgEAHAAQAGAAAFAEQADADAAAIIAAAnQABAJABAFQACAGAFAEQADADAIAAQAGAAAHgEQAGgDADgHQACgFAAgSIAAgdQABgIADgDQAFgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgFAAQgHAAgDgEgAgUgtQAAgBADgEIAFgIQADgGAEgCQADgCAFAAIAOAAQAFAAAAABIgGAGIgLAKIgIAGQgFADgHAAQgFAAAAgDg");
	this.shape_856.setTransform(232.7,182.6);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#FF0000").s().p("AA5AvQgFgEAAgIIAAgpIgBgNQgBgFgDgDQgDgEgIAAQgFAAgFAEQgFACgDAGQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgGAAgEgEQgDgEAAgIIAAgnIgBgOQgBgGgDgDQgEgEgGAAQgOAAgFAJQgFAIAAAQIAAAhQAAAIgDAEQgEAEgHAAQgGAAgEgEQgFgEAAgIIAAhGQAAgIAEgDQADgEAHAAQAFAAAFAEQADADAAAGIAAADQAIgJAIgDQAJgDAKgBQALABAHADQAHAEAGAIQAGgIAJgEQAJgDAJgBQAMAAAJAFQAIAEAEAHQAEAHAAAOIAAAwQAAAIgEAEQgEAEgHAAQgGAAgEgEg");
	this.shape_857.setTransform(216.7,184.4);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#FF0000").s().p("AAcAvQgEgEAAgGIAAgDIgLAJQgFAEgHACQgGABgJAAQgKAAgIgDQgIgEgEgGQgGgJAAgPIAAgwQAAgIAEgDQAEgEAGAAQAGAAAFAEQADADAAAIIAAAnQABAJABAGQACAFAEAEQAEAEAIgBQAGAAAHgDQAGgEADgGQADgFgBgSIAAgeQAAgIAFgDQAEgEAGAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgEAEgFAAQgHAAgDgEg");
	this.shape_858.setTransform(195.4,184.4);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#FF0000").s().p("AgaAvQgLgFgGgFQgFgHAAgGQAAgEADgDQADgDAGAAQAEAAACACIAFAFQAFAHAGADQAGAEAJAAQAJAAAGgEQAFgDAAgFQAAgGgFgDQgHgDgMgDQgPgDgIgDQgKgDgGgGQgFgFAAgJQAAgIAFgGQAFgHALgEQAKgEANAAQAKAAAKACQAIACAGAEQAGADADAEQAEAEAAAEQAAAFgEACQgDADgHAAQgEAAgDgCIgHgHQgDgEgEgCQgFgCgHAAQgIAAgFADQgEADgBAEQAAAEAEADIAKAEIARAEQANACAJAEQAIAEAFAFQAEAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgPAAgLgEg");
	this.shape_859.setTransform(183,184.4);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#FF0000").s().p("AAhBCQgEgEAAgHIAAgDQgGAGgFAEQgGAEgGACQgGABgIAAQgKABgJgEQgJgFgGgHQgGgGgEgKQgDgKAAgLQAAgWANgNQAOgNAUAAQAMAAAIADQAJAEAIAIIAAglQAAgIAEgEQADgDAHAAQAGAAAEADQADAEAAAHIAABtQAAAHgDAEQgEAEgGgBQgGABgEgEgAgNgJQgGAEgEAGQgDAIAAAJQAAALADAGQAEAIAHADQAFAEAHAAQAIAAAGgEQAGgDAEgHQADgHAAgLQAAgJgDgIQgEgGgGgEQgGgEgIABQgHAAgGADg");
	this.shape_860.setTransform(152.2,182.5);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#FF0000").s().p("AAhBCQgEgEAAgHIAAgDQgGAGgFAEQgGAEgGACQgGABgIAAQgKABgJgEQgJgFgGgHQgGgGgEgKQgDgKAAgLQAAgWANgNQAOgNAUAAQAMAAAJADQAIAEAIAIIAAglQAAgIAEgEQADgDAHAAQAGAAADADQAEAEAAAHIAABtQAAAHgEAEQgEAEgFgBQgGABgEgEgAgNgJQgGAEgDAGQgEAIAAAJQAAALAEAGQADAIAHADQAFAEAHAAQAHAAAHgEQAGgDAEgHQAEgHgBgLQABgJgEgIQgEgGgGgEQgHgEgHABQgHAAgGADg");
	this.shape_861.setTransform(133.4,182.5);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#FF0000").s().p("AAgAvQgEgEgFgGQgKAGgJAEQgJAEgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgJAHgIQAIgGANgDIAOgCIARgDIARgFQgBgKgEgEQgEgEgMgBQgKABgGACQgFACgEAGIgGAHQgCACgFgBQgFABgDgDQgEgDAAgEQAAgHAGgFQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAOIAAAOIAAAOQAAAHACAIIADAJQAAAFgEACQgFAEgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAEAEQAFAFAJAAQAHAAAHgEQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_862.setTransform(120.6,184.4);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#FF0000").s().p("AAhBCQgEgEAAgHIAAgDQgFAGgGAEQgGAEgHACQgFABgHAAQgLABgIgEQgJgFgHgHQgGgGgDgKQgEgKAAgLQAAgWAOgNQAMgNAWAAQALAAAIADQAJAEAIAIIAAglQAAgIADgEQAEgDAGAAQAHAAADADQAEAEAAAHIAABtQAAAHgEAEQgDAEgHgBQgFABgEgEgAgNgJQgHAEgDAGQgDAIAAAJQAAALADAGQAEAIAGADQAHAEAGAAQAIAAAGgEQAGgDAEgHQAEgHAAgLQAAgJgEgIQgEgGgGgEQgGgEgIABQgHAAgGADg");
	this.shape_863.setTransform(107.2,182.5);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#FF0000").s().p("AgJBCQgEgFAAgHIAAhsQAAgHADgEQAEgDAGAAQAGAAAEADQAEAEAAAHIAABsQAAAHgEAFQgEAEgGgBQgGABgDgEg");
	this.shape_864.setTransform(92.2,182.5);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#FF0000").s().p("AAgAvQgDgEgGgGQgKAGgKAEQgIAEgMAAQgLAAgJgEQgIgEgFgGQgEgHAAgIQAAgJAHgIQAIgGANgDIANgCIASgDIAQgFQAAgKgEgEQgEgEgMgBQgKABgGACQgFACgEAGIgGAHQgBACgGgBQgFABgDgDQgEgDAAgEQAAgHAGgFQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAOIAAAOIgBAOQAAAHADAIIADAJQAAAFgEACQgFAEgFAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAGAFAIAAQAHAAAHgEQAIgDADgFQADgGAAgNIAAgDIgSAEg");
	this.shape_865.setTransform(82.9,184.4);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#FF0000").s().p("AAgAvQgEgEgFgGQgKAGgJAEQgJAEgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgJAHgIQAIgGANgDIANgCIASgDIARgFQgBgKgEgEQgEgEgMgBQgKABgGACQgFACgEAGIgGAHQgCACgFgBQgFABgDgDQgEgDAAgEQAAgHAGgFQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAOIAAAOIgBAOQAAAHADAIIADAJQAAAFgEACQgFAEgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAEAEQAFAFAJAAQAHAAAHgEQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_866.setTransform(52.2,184.4);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#FF0000").s().p("AgJBCQgEgFAAgHIAAhsQAAgHADgEQAEgDAGAAQAGAAAEADQAEAEAAAHIAABsQAAAHgEAFQgEAEgGgBQgGABgDgEg");
	this.shape_867.setTransform(43,182.5);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#FF0000").s().p("AgWAvQgLgEgHgGQgIgHgEgKQgEgJAAgLQAAgLAEgJQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAAKAEQALADAHAIQAIAGAEAKQAEAIAAALQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgbQgHADgDAIQgEAHAAAJQAAAKAEAHQADAIAHADQAGAEAIAAQANAAAIgJQAHgIAAgPQAAgPgHgIQgIgJgNAAQgIAAgGAFg");
	this.shape_868.setTransform(18.9,184.4);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#FF0000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgIAEgDQADgEAHABQAFAAAFADQADAEAAAGIAAAEQAJgJAIgEQAJgEAJAAQAOAAALAGQALAGAGALQAHAMAAAPQAAAMgEAJQgEAJgGAGQgHAHgIAEQgJADgLAAQgKAAgJgEQgJgEgHgJIAAAmQAAAQgNAAQgJAAgCgEgAgTgpQgHAHAAAQQAAAPAHAIQAJAIALAAQAHAAAGgEQAGgDADgHQAEgGAAgLQAAgKgDgHQgDgHgHgEQgGgEgHABQgLgBgJAJg");
	this.shape_869.setTransform(6,186.2);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#FF0000").s().p("AgXAvQgKgEgIgGQgHgHgEgKQgEgJAAgLQAAgLAEgJQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAAKAEQALADAHAIQAIAGAEAKQAEAIAAALQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgbQgGADgEAIQgDAHAAAJQAAAKADAHQAEAIAGADQAGAEAIAAQANAAAHgJQAIgIAAgPQAAgPgIgIQgHgJgNAAQgHAAgHAFg");
	this.shape_870.setTransform(-12.8,184.4);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#FF0000").s().p("AAhBCQgEgEAAgHIAAgDQgGAGgFAEQgGAEgGACQgGABgIAAQgKABgJgEQgJgFgGgHQgGgGgEgKQgDgKAAgLQAAgWANgNQAOgNAUAAQAMAAAJADQAIAEAIAIIAAglQAAgIAEgEQADgDAHAAQAGAAADADQAEAEAAAHIAABtQAAAHgEAEQgEAEgFgBQgGABgEgEgAgNgJQgGAEgDAGQgEAIAAAJQAAALAEAGQADAIAHADQAFAEAHAAQAHAAAHgEQAGgDAEgHQAEgHgBgLQABgJgEgIQgEgGgGgEQgHgEgHABQgHAAgGADg");
	this.shape_871.setTransform(-26.4,182.5);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#FF0000").s().p("AAaAvQgDgEAAgHIAAgpQAAgNgFgGQgEgHgLAAQgHAAgGAFQgHADgDAHQgBAGAAAOIAAAgQAAAHgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgDQAEgEAGAAQAEAAADABIAFAGQACADAAAEIAAADQAIgJAJgDQAHgFAMAAQALAAAJAFQAJAEAFAHQACAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_872.setTransform(-39.2,184.4);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#FF0000").s().p("AAcAvQgEgEAAgGIAAgDIgLAJQgFAEgHACQgGABgIAAQgLAAgIgDQgIgEgFgGQgFgJAAgPIAAgwQAAgIAEgDQADgEAHAAQAGAAAFAEQADADAAAIIAAAnQABAJABAGQACAFAFAEQADAEAIgBQAGAAAHgDQAGgEADgGQACgFAAgSIAAgeQAAgIAEgDQAFgEAGAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgEAEgFAAQgHAAgDgEg");
	this.shape_873.setTransform(-52.2,184.4);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#FF0000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgBgFgEgDQgDgEgIAAQgFAAgFAEQgFACgDAGQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgGAAgDgEQgEgEgBgIIAAgnIgBgOQAAgGgDgDQgEgEgGAAQgOAAgFAJQgEAIgBAQIAAAhQAAAIgDAEQgFAEgGAAQgGAAgFgEQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAFAEQADADAAAGIAAADQAIgJAJgDQAIgDAKgBQALABAIADQAGAEAFAIQAIgIAIgEQAIgDAKgBQAMAAAIAFQAJAEAEAHQAEAHAAAOIAAAwQAAAIgEAEQgFAEgGAAQgGAAgFgEg");
	this.shape_874.setTransform(-67.9,184.4);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#FF0000").s().p("AgJBCQgEgFAAgHIAAhsQAAgHADgEQAEgDAGAAQAGAAAEADQAEAEAAAHIAABsQAAAHgEAFQgEAEgGgBQgGABgDgEg");
	this.shape_875.setTransform(-85.6,182.5);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#FF0000").s().p("AAaAvQgDgEAAgHIAAgpQAAgNgFgGQgEgHgLAAQgHAAgGAFQgHADgDAHQgBAGAAAOIAAAgQAAAHgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgDQAEgEAGAAQAEAAADABIAFAGQACADAAAEIAAADQAIgJAJgDQAHgFAMAAQALAAAJAFQAJAEAFAHQACAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_876.setTransform(-113,184.4);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#FF0000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADABAAAFQAAADgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_877.setTransform(-125.8,184.4);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#FF0000").s().p("AgvBDQgGgDAAgFQAAgFADgDQADgBAGAAIAEAAIAFABQAFgBADgBQACgBADgEIAFgJIADgFIgkhNQgDgGAAgEIACgGQACgCADgBQADgCAEAAQAGgBADAEQAEADACAHIAXA9IAXg4IAFgMQACgEADgBQACgBAFAAIAGABQADABACADIABAGIgBAEIgDAHIglBVQgFAKgEAHQgEAHgHADQgIADgNAAQgNABgGgDg");
	this.shape_878.setTransform(-143.6,186.2);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#FF0000").s().p("AAaAvQgDgEAAgHIAAgpQgBgNgEgGQgDgHgMAAQgHAAgGAFQgGADgDAHQgCAGAAAOIAAAgQgBAHgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAEAAADABIAFAGQACADAAAEIAAADQAIgJAIgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_879.setTransform(-161,184.4);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#FF0000").s().p("AgJBCQgEgFAAgHIAAhsQAAgHADgEQAEgDAGAAQAGAAAEADQAEAEAAAHIAABsQAAAHgEAFQgEAEgGgBQgGABgDgEg");
	this.shape_880.setTransform(-176.2,182.5);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#FF0000").s().p("AgEBEIgKgEIgGgEIgIgIIAAADQAAAHgEAEQgEAEgFgBQgGABgEgEQgEgEAAgHIAAhsQAAgIAEgEQADgDAHAAQAGAAADADQAEAEAAAHIAAAmQAJgIAHgDQAJgEAMAAQAOAAAKAGQALAFAGAMQAGAKAAAPQAAAMgEAKQgDAJgGAGQgGAHgJAFQgJAEgLgBQgGAAgGgBgAgNgJQgGAEgEAGQgDAIAAAKQAAAPAHAIQAIAIAMAAQAKAAAJgIQAHgJAAgPQAAgJgDgIQgDgGgGgEQgGgDgIAAQgHAAgHADg");
	this.shape_881.setTransform(-185.3,182.5);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#FF0000").s().p("AAcAvQgEgEAAgGIAAgDIgKAJQgHAEgGACQgGABgIAAQgLAAgIgDQgIgEgFgGQgFgJAAgPIAAgwQAAgIAEgDQAEgEAGAAQAGAAAEAEQAFADAAAIIAAAnQAAAJABAGQACAFAFAEQAEAEAHgBQAHAAAFgDQAHgEADgGQADgFAAgSIAAgeQAAgIADgDQAEgEAHAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgDAEgHAAQgFAAgEgEg");
	this.shape_882.setTransform(-198.7,184.4);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#FF0000").s().p("AgtBDQgJAAgEgCQgEgCgBgEQgCgFAAgGIAAhhQAAgJAFgFQAEgDAKAAIApAAQAPAAALACQALADAKAHQAYASAAAkQAAALgDALQgCAJgFAJQgFAHgIAHQgGAFgIACQgHADgIACIgTABgAgiAtIAYAAIALAAIAJgCIAIgEQAQgMAAgbQAAgTgHgKQgHgLgKgCQgKgCgNgBIgVAAg");
	this.shape_883.setTransform(-212.8,182.5);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#FF0000").s().p("AAaAvQgDgEAAgHIAAgpQAAgNgFgGQgDgHgMAAQgHAAgGAFQgGADgDAHQgCAGAAAOIAAAgQAAAHgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAEAAADABIAFAGQACADAAAEIAAADQAIgJAIgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_884.setTransform(-232.9,184.4);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#FF0000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADABAAAFQAAADgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_885.setTransform(-245.7,184.4);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#FF0000").s().p("AgaAvQgMgFgFgFQgFgHAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAFQAEAHAHADQAGAEAJAAQAJAAAGgEQAFgDAAgFQAAgGgFgDQgHgDgLgDQgQgDgIgDQgKgDgGgGQgFgFAAgJQAAgIAFgGQAFgHALgEQAKgEAOAAQAJAAAKACQAIACAGAEQAGADADAEQAEAEAAAEQgBAFgDACQgDADgHAAQgEAAgDgCIgHgHQgDgEgEgCQgFgCgGAAQgJAAgFADQgEADAAAEQAAAEADADIAKAEIARAEQANACAJAEQAIAEAFAFQAEAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgPAAgLgEg");
	this.shape_886.setTransform(-263.3,184.4);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#FF0000").s().p("AgXAvQgKgEgIgGQgHgHgEgKQgEgJAAgLQAAgLAEgJQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAAKAEQALADAHAIQAIAGAEAKQAEAIAAALQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgbQgHADgDAIQgEAHABAJQgBAKAEAHQADAIAHADQAGAEAIAAQANAAAHgJQAIgIAAgPQAAgPgIgIQgHgJgNAAQgHAAgHAFg");
	this.shape_887.setTransform(-275.5,184.4);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#FF0000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgIAEgDQADgEAHABQAFAAAFADQADAEAAAGIAAAEQAIgJAJgEQAIgEAKAAQAOAAALAGQALAGAHALQAGAMAAAPQAAAMgEAJQgEAJgGAGQgHAHgJAEQgIADgLAAQgLAAgIgEQgJgEgHgJIAAAmQAAAQgNAAQgJAAgCgEgAgTgpQgHAHgBAQQABAPAHAIQAJAIAKAAQAIAAAGgEQAGgDADgHQAEgGAAgLQAAgKgDgHQgEgHgGgEQgGgEgIABQgKgBgJAJg");
	this.shape_888.setTransform(-307,186.2);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#FF0000").s().p("AgmA3QgPgOAAgXQAAgMADgIQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAJQAAAJgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEAAADACQADACAAAEQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgIQgHAGgBAMIAzAAQgBgMgHgGQgHgHgLAAQgKAAgHAHgAgTgtQAAgBADgEIAFgIQAEgGADgCQADgCAFAAIAOAAQAGAAAAABIgGAGIgMAKIgHAGQgGADgHAAQgFAAAAgDg");
	this.shape_889.setTransform(-320.3,182.6);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#FF0000").s().p("AAbAvQgEgEAAgHIAAgpQgBgNgEgGQgDgHgMAAQgHABgGAEQgGAEgDAGQgCAGAAAOIAAAgQgBAHgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAEAAADABIAFAFQACADAAAFIAAADQAIgJAIgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgHAAgDgEg");
	this.shape_890.setTransform(295.7,160.2);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#FF0000").s().p("AgWAvQgLgEgHgGQgIgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgbQgGADgEAHQgDAIgBAJQABAKADAHQAEAIAGADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgIAAgGAFg");
	this.shape_891.setTransform(282.8,160.2);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_892.setTransform(261.4,160.2);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_893.setTransform(252.1,158.4);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#FF0000").s().p("AgXAvQgKgEgIgGQgHgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALADAHAIQAIAGAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgbQgHADgDAHQgEAIABAJQgBAKAEAHQADAIAHADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgHAAgHAFg");
	this.shape_894.setTransform(225.3,160.2);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#FF0000").s().p("AgJAwIgFgFIgGgMIgbg5IgCgFIgCgEIAAgEIABgFIAFgEQADgCAEAAQAHAAADAEQADADADAIIAWA4IAZg5QADgIADgDQACgDAGAAQAGAAAEAEQADADAAAEIAAAEIgCAEIgCAEIgbA6IgDAHIgEAHIgGAEQgDACgFAAQgFAAgEgDg");
	this.shape_895.setTransform(213.3,160.2);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_896.setTransform(195.8,160.2);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#FF0000").s().p("AgbAuQgKgEgGgFQgFgHAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAFQAEAHAHADQAGAEAKAAQAIAAAFgEQAGgDAAgEQAAgHgGgDQgFgDgNgDQgOgDgKgEQgJgCgFgGQgGgFAAgJQAAgIAFgGQAGgHAJgEQAKgEAOAAQALAAAIACQAKACAGADQAFAEADAEQADAEAAAEQABAFgEACQgEADgFAAQgEAAgEgCIgHgHQgDgEgFgCQgEgCgHAAQgHAAgFADQgGADAAAEQABAEADADIALAEIAQAEQANADAJAEQAIADAEAFQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgLgFg");
	this.shape_897.setTransform(183.6,160.2);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#FF0000").s().p("AgXAvQgKgEgIgGQgHgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgbQgHADgDAHQgEAIABAJQgBAKAEAHQADAIAHADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgIAAgGAFg");
	this.shape_898.setTransform(166,160.2);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_899.setTransform(156.6,158.4);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_900.setTransform(138.2,158.4);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#FF0000").s().p("AAbAvQgFgEAAgHIAAgpQAAgNgDgGQgFgHgLAAQgHABgGAEQgGAEgEAGQgCAGAAAOIAAAgQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgDQAEgEAGAAQAEAAADABIAFAFQACADAAAFIAAADQAHgJAKgDQAHgFAMAAQALAAAJAFQAJAEAFAHQACAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_901.setTransform(128.8,160.2);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_902.setTransform(119.4,158.4);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#FF0000").s().p("AAaAvQgDgEAAgHIAAgpQAAgNgFgGQgDgHgMAAQgHABgGAEQgHAEgDAGQgBAGAAAOIAAAgQAAAHgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAEAAADABIAFAFQACADAAAFIAAADQAIgJAIgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_903.setTransform(104.7,160.2);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#FF0000").s().p("AAcAvQgEgEAAgGIAAgDIgKAJQgHAEgGACQgGACgIAAQgLAAgIgEQgIgEgFgGQgFgIAAgQIAAgwQAAgIAEgDQADgEAHAAQAGAAAEAEQAFADAAAIIAAAnQgBAJACAFQACAGAFAEQADADAIAAQAGAAAHgEQAGgDADgGQACgFABgSIAAgeQAAgIADgDQAFgEAGAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgDAEgGAAQgHAAgDgEg");
	this.shape_904.setTransform(91.7,160.2);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_905.setTransform(73.6,160.2);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#FF0000").s().p("AAhBCQgEgEAAgHIAAgDQgFAHgGADQgGAEgHACQgFABgHAAQgLAAgIgDQgKgFgGgHQgGgGgEgKQgDgKAAgLQAAgWANgNQANgNAWAAQALAAAIADQAJAFAIAHIAAglQAAgIADgEQAEgDAHAAQAGgBAEAEQADADAAAIIAABtQAAAHgDAEQgFADgFAAQgGAAgEgDgAgNgJQgHAEgDAHQgDAHAAAJQAAALADAGQAEAHAGAFQAHADAGAAQAHAAAHgDQAGgEAEgHQADgHABgLQgBgJgDgIQgEgGgGgEQgHgDgHAAQgHAAgGADg");
	this.shape_906.setTransform(60.2,158.3);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#FF0000").s().p("AgaAuQgLgEgGgFQgFgHAAgGQAAgEADgDQADgDAGAAQAEAAACACIAFAFQAFAHAGADQAGAEAKAAQAIAAAFgEQAGgDAAgEQAAgHgGgDQgGgDgMgDQgPgDgIgEQgKgCgGgGQgFgFAAgJQAAgIAFgGQAGgHAKgEQAJgEAOAAQAKAAAKACQAIACAGADQAGAEADAEQADAEABAEQAAAFgEACQgEADgGAAQgDAAgEgCIgHgHQgDgEgEgCQgFgCgHAAQgHAAgFADQgFADgBAEQAAAEAEADIALAEIAQAEQANADAJAEQAIADAFAFQAEAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgQAAgKgFg");
	this.shape_907.setTransform(47.9,160.2);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_908.setTransform(35.8,160.2);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#FF0000").s().p("AAhBCQgEgEAAgHIAAgDQgFAHgGADQgGAEgHACQgFABgHAAQgLAAgIgDQgKgFgGgHQgGgGgDgKQgEgKAAgLQAAgWANgNQANgNAWAAQALAAAIADQAJAFAIAHIAAglQAAgIADgEQAEgDAHAAQAGgBAEAEQADADAAAIIAABtQAAAHgDAEQgFADgFAAQgGAAgEgDgAgNgJQgHAEgDAHQgDAHAAAJQAAALADAGQAEAHAGAFQAHADAGAAQAHAAAHgDQAGgEAEgHQADgHABgLQgBgJgDgIQgEgGgGgEQgHgDgHAAQgHAAgGADg");
	this.shape_909.setTransform(22.4,158.3);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#FF0000").s().p("AAIAaQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgDAFgDQAGgDACgDQADgDABgGIgBAAQgGAAgFgDQgFgEAAgGQAAgGAFgEQAEgDAHAAQAIgBAFAGQAFAFAAAKQAAAIgEAJQgFAHgGAFQgGAEgFABQgEAAgCgCgAglAaQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgEAEgCQAGgDADgDQADgDABgGIgCAAQgGAAgEgDQgFgEAAgGQAAgGAFgEQAEgDAHAAQAIgBAFAGQAFAFAAAKQAAAJgEAHQgFAIgGAFQgGAEgGABQgDAAgCgCg");
	this.shape_910.setTransform(5.6,154.1);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#FF0000").s().p("AAbAvQgFgEAAgHIAAgpQAAgNgDgGQgFgHgLAAQgHABgGAEQgGAEgEAGQgCAGAAAOIAAAgQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgDQAEgEAGAAQAEAAADABIAFAFQACADAAAFIAAADQAHgJAKgDQAHgFAMAAQALAAAJAFQAJAEAFAHQACAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_911.setTransform(-5.6,160.2);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#FF0000").s().p("AgmA3QgPgOAAgXQAAgMADgIQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAJQAAAJgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEAAADACQADACAAAEQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgIQgHAGgBAMIAzAAQgBgMgHgGQgHgHgLAAQgKAAgHAHgAgTgtQAAgBADgEIAFgIQAEgGADgCQADgCAFAAIAOAAQAGAAAAABIgGAGIgMAKIgHAGQgGADgHAAQgFAAAAgDg");
	this.shape_912.setTransform(-18.4,158.4);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_913.setTransform(-27.7,158.4);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#FF0000").s().p("AgEBEIgKgDIgGgGIgIgHIAAADQAAAHgEAEQgDADgHAAQgFAAgEgDQgEgEAAgHIAAhsQAAgIADgEQAEgDAGAAQAHAAADADQAEAEAAAHIAAAmQAJgIAHgDQAJgEAMAAQAOAAALAGQAKAFAGAMQAGAKAAAPQAAAMgDAKQgEAJgGAGQgGAHgJAFQgJADgLAAQgGABgGgCgAgNgJQgGAEgEAHQgEAHABAKQgBAPAJAIQAHAIAMAAQAKAAAIgIQAIgIAAgQQAAgJgDgHQgEgHgFgEQgGgDgIAAQgHAAgHADg");
	this.shape_914.setTransform(-37,158.3);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#FF0000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgBgEgEgEQgDgEgIAAQgFABgFADQgFACgDAGQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgGAAgDgEQgEgEgBgIIAAgnIgBgOQAAgFgDgEQgEgEgGAAQgOAAgFAJQgEAJgBAOIAAAiQAAAIgDAEQgFAEgGAAQgGAAgFgEQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAFAEQADADAAAGIAAACQAIgIAJgDQAIgEAKAAQALAAAIAEQAGAEAFAHQAIgHAIgEQAIgEAKAAQAMAAAIAFQAJADAEAIQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgGAAgFgEg");
	this.shape_915.setTransform(-53.5,160.2);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#FF0000").s().p("AAhAvQgFgEgEgGQgLAHgKADQgIAEgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgJAIgIQAHgGANgDIANgCIASgDIAQgFQAAgJgEgFQgEgEgNgBQgKABgFACQgGACgEAGIgFAHQgBABgGAAQgFAAgDgCQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAAPIAAANIgBAOQABAHADAIIACAJQAAAFgEACQgEAEgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAFAEQAEAFAIAAQAIgBAIgDQAGgDAEgFQAEgGgBgNIAAgEIgSAFg");
	this.shape_916.setTransform(-69.3,160.2);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#FF0000").s().p("AAcAvQgEgEAAgGIAAgDIgKAJQgHAEgGACQgGACgIAAQgLAAgIgEQgIgEgFgGQgFgIAAgQIAAgwQAAgIAEgDQADgEAHAAQAGAAAEAEQAFADAAAIIAAAnQgBAJACAFQACAGAFAEQADADAIAAQAGAAAHgEQAGgDADgGQACgFABgSIAAgeQAAgIADgDQAFgEAGAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgDAEgGAAQgHAAgDgEg");
	this.shape_917.setTransform(-95,160.2);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#FF0000").s().p("AALAWQgFgGAAgKQAAgGADgGQACgGAEgEQAFgFAEgDQAFgCAEAAQADAAACABQABAAAAABQAAABAAAAQABABAAAAQAAABAAAAQAAAFgEACQgGACgDAEQgDADAAAFIABAAQAGAAAFAEQAEAEAAAGQAAAFgEAEQgFAFgHAAQgIgBgFgFgAgiAWQgFgGAAgKQAAgHAEgIQAFgIAGgFQAHgFAFABQADAAACABQAAAAABABQAAABAAAAQABABAAAAQAAABAAAAQAAAFgEACQgGACgDAEQgDADgBAFIACAAQAGAAAFAEQAEAEAAAGQAAAFgEAEQgFAFgHAAQgIgBgFgFg");
	this.shape_918.setTransform(-114,154.1);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#FF0000").s().p("AgXAvQgKgEgIgGQgHgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALADAHAIQAIAGAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgbQgGADgEAHQgDAIAAAJQAAAKADAHQAEAIAGADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgHAAgHAFg");
	this.shape_919.setTransform(-130.7,160.2);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#FF0000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgBgEgEgEQgEgEgHAAQgFABgFADQgFACgDAGQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgEgEQgFgEAAgIIAAgnIgBgOQAAgFgDgEQgEgEgGAAQgPAAgEAJQgEAJgBAOIAAAiQAAAIgDAEQgFAEgGAAQgGAAgFgEQgEgEAAgIIAAhGQAAgIAEgDQAEgEAFAAQAHAAADAEQAFADAAAGIAAACQAHgIAJgDQAIgEAKAAQALAAAIAEQAGAEAFAHQAIgHAIgEQAIgEAKAAQAMAAAIAFQAJADAEAIQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgGAAgFgEg");
	this.shape_920.setTransform(-146.7,160.2);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#FF0000").s().p("AgXAvQgKgEgIgGQgHgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALADAHAIQAIAGAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgbQgGADgEAHQgDAIAAAJQAAAKADAHQAEAIAGADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgHAAgHAFg");
	this.shape_921.setTransform(-162.7,160.2);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#FF0000").s().p("AAgAvQgEgEgFgGQgKAHgJADQgJAEgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgJAHgIQAIgGANgDIANgCIASgDIARgFQgBgJgEgFQgEgEgMgBQgKABgGACQgFACgEAGIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAGgFQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHADAIIADAJQAAAFgEACQgFAEgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAEAEQAFAFAJAAQAHgBAHgDQAIgDADgFQADgGABgNIAAgEIgSAFg");
	this.shape_922.setTransform(-193.5,160.2);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#FF0000").s().p("AAaAvQgDgEAAgHIAAgpQAAgNgFgGQgDgHgMAAQgHABgGAEQgHAEgDAGQgBAGAAAOIAAAgQAAAHgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgDQAEgEAGAAQAEAAADABIAFAFQACADAAAFIAAADQAIgJAIgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_923.setTransform(-206.3,160.2);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_924.setTransform(-219.1,160.2);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#FF0000").s().p("AAcAvQgEgEAAgGIAAgDIgKAJQgHAEgGACQgGACgIAAQgLAAgIgEQgIgEgFgGQgFgIAAgQIAAgwQAAgIAEgDQADgEAHAAQAGAAAEAEQAFADAAAIIAAAnQgBAJACAFQACAGAFAEQAEADAHAAQAHAAAFgEQAHgDADgGQACgFABgSIAAgeQAAgIADgDQAFgEAGAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgDAEgHAAQgGAAgDgEg");
	this.shape_925.setTransform(-231.9,160.2);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#FF0000").s().p("AgbAuQgLgEgFgFQgFgHAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAFQAEAHAHADQAGAEAJAAQAJAAAGgEQAFgDAAgEQAAgHgFgDQgHgDgLgDQgPgDgKgEQgJgCgGgGQgFgFAAgJQAAgIAFgGQAFgHAKgEQALgEAOAAQAJAAAKACQAJACAGADQAFAEAEAEQADAEAAAEQgBAFgDACQgDADgHAAQgEAAgDgCIgHgHQgDgEgFgCQgEgCgGAAQgIAAgGADQgEADAAAEQgBAEAEADIAKAEIARAEQANADAJAEQAIADAEAFQAFAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgPAAgMgFg");
	this.shape_926.setTransform(-244.3,160.2);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_927.setTransform(-261.7,160.2);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#FF0000").s().p("AAcAvQgEgEAAgGIAAgDIgLAJQgGAEgGACQgGACgJAAQgKAAgIgEQgIgEgEgGQgGgIAAgQIAAgwQAAgIAEgDQADgEAHAAQAHAAADAEQAEADAAAIIAAAnQAAAJACAFQACAGAEAEQAFADAHAAQAHAAAFgEQAHgDADgGQACgFAAgSIAAgeQABgIAEgDQADgEAHAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_928.setTransform(-274.5,160.2);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#FF0000").s().p("AAgBBQgDgEAAgJIAAgjQgIAHgJAFQgJADgKAAQgNAAgLgGQgLgGgHgMQgGgKAAgQQAAgPAGgMQAHgLALgGQALgGAOAAQAKAAAJAEQAJAEAHAJIAAgEQAAgGAEgEQADgEAGABQAGgBAEAEQAEAEAAAGIAABrQAAASgOgBQgIABgCgFgAgTgpQgHAIAAAPQAAALAEAGQADAHAGAEQAGADAHAAQAHAAAHgDQAGgEAEgHQAEgGAAgLQAAgIgDgFQgCgHgEgDQgEgFgFgCQgFgBgFAAQgLgBgIAJg");
	this.shape_929.setTransform(-288.1,162);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#FF0000").s().p("AgkBDQgIAAgFgDQgEgEAAgFQAAgDADgGQADgGADgCIAZgWIAQgMIAOgKQAFgFADgFQADgHAAgEQAAgHgDgEQgDgFgGgCQgFgDgGAAQgNAAgIALIgEAHQgCAGgDADQgDAEgGAAQgGAAgDgDQgDgDAAgFQAAgHADgHQADgGAHgGQAGgGAKgDQAKgEANAAQAPAAALAFQAIADAFAFQAGAFADAHQADAGAAAIQAAALgGAKQgHAIgHAFIgWAQQgPALgGAHIgFAGIA2AAQAIAAAEADQAFADAAAFQAAAFgEACQgDADgHAAg");
	this.shape_930.setTransform(-306,158.3);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#FF0000").s().p("AgbBCQgNgEgIgGQgIgIgEgKQgDgLgBgPIAAhAQABgJAEgEQAEgDAHAAQAHAAAEADQAEAEAAAJIAABBQABALADAIQACAIAIADQAHAFAMAAQASgBAIgHQAHgKABgQIAAhCQAAgJAEgEQAEgDAHAAQAHAAAFADQADAEAAAJIAABAQABAPgEALQgDAKgKAJQgJAGgLADQgKADgQAAQgQAAgNgDg");
	this.shape_931.setTransform(-320.7,158.3);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#FF0000").s().p("AAhBBQgEgDAAgHIAAgCQgFAFgGAEQgGADgHADQgFACgHAAQgLAAgIgFQgJgDgHgIQgGgHgDgJQgEgJAAgMQAAgWAOgNQAMgNAWAAQALAAAIAEQAJADAIAIIAAglQAAgIADgDQAEgFAGAAQAHAAADAEQAEADAAAIIAABtQAAAHgEADQgDAFgHAAQgFAAgEgFgAgNgJQgHAEgCAGQgEAHAAAKQAAAKAEAHQADAIAGADQAHAEAGAAQAIAAAGgEQAGgDAEgHQAEgHAAgLQAAgKgEgHQgEgGgGgEQgGgDgIAAQgHAAgGADg");
	this.shape_932.setTransform(273.7,134.2);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#FF0000").s().p("AAgAvQgEgEgFgGQgKAHgJAEQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAHgHQAIgGANgDIANgCIASgEIARgDQgBgLgEgEQgEgEgMAAQgKgBgGADQgFACgEAGIgGAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAGgGQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHADAIIADAJQAAAEgEAEQgFADgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAEAEQAFADAJAAQAHAAAHgDQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_933.setTransform(255.6,136);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#FF0000").s().p("AAhBBQgEgDAAgHIAAgCQgFAFgGAEQgGADgHADQgFACgHAAQgLAAgIgFQgJgDgHgIQgGgHgDgJQgEgJAAgMQAAgWAOgNQAMgNAWAAQALAAAIAEQAJADAIAIIAAglQAAgIADgDQAEgFAGAAQAHAAADAEQAEADAAAIIAABtQAAAHgEADQgDAFgHAAQgFAAgEgFgAgNgJQgHAEgDAGQgDAHAAAKQAAAKADAHQAEAIAGADQAHAEAGAAQAIAAAGgEQAGgDAEgHQAEgHAAgLQAAgKgEgHQgEgGgGgEQgGgDgIAAQgHAAgGADg");
	this.shape_934.setTransform(242.2,134.2);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#FF0000").s().p("AAbAvQgFgEAAgHIAAgpQAAgMgDgHQgEgGgMgBQgHAAgGAFQgGADgDAIQgDAFAAAOIAAAgQAAAHgDAEQgEAEgHAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIAEgEQADgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAHgIAJgFQAIgEAMAAQALAAAJAEQAJAFAFAIQACAEABAGIABANIAAAuQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_935.setTransform(229.4,136);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#FF0000").s().p("AAgAvQgDgEgGgGQgKAHgKAEQgIADgMAAQgLAAgJgEQgIgEgFgGQgEgHAAgIQAAgKAHgHQAIgGANgDIANgCIASgEIAQgDQAAgLgEgEQgEgEgMAAQgKgBgGADQgFACgEAGIgGAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAGgGQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHADAIIADAJQAAAEgEAEQgFADgFAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAEAEQAGADAIAAQAHAAAHgDQAIgDADgFQADgGAAgNIAAgDIgSAEg");
	this.shape_936.setTransform(216.6,136);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#FF0000").s().p("AgDBEIgKgEIgHgEIgIgHIAAACQAAAHgDADQgFAFgFAAQgHAAgDgFQgEgDAAgHIAAhsQAAgIAEgDQADgFAHAAQAGAAAEAFQADADAAAHIAAAmQAIgHAIgEQAJgEALAAQAOAAALAGQALAFAGAMQAGAKAAAPQAAAMgEAJQgDAKgGAGQgGAIgJADQgJAFgLAAQgHgBgEgBgAgMgJQgHAEgEAGQgEAIAAAKQABAPAHAIQAIAIAMAAQALAAAIgIQAHgIAAgQQAAgKgDgHQgEgGgFgEQgGgDgIAAQgIAAgFADg");
	this.shape_937.setTransform(203.8,134.2);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#FF0000").s().p("AAhAvQgFgEgEgGQgLAHgJAEQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAIgHQAHgGANgDIAOgCIARgEIARgDQgBgLgEgEQgEgEgNAAQgKgBgFADQgGACgEAGIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAFgGQAGgHALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHACAIIADAJQAAAEgEAEQgFADgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAFAEQAFADAHAAQAIAAAHgDQAHgDAEgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_938.setTransform(185.1,136);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgHIAAhsQAAgHADgDQAEgFAGAAQAGAAAEAFQAEADAAAHIAABsQAAAHgEAEQgEAFgGAAQgGAAgDgFg");
	this.shape_939.setTransform(175.9,134.2);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEABADACQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_940.setTransform(161.3,136);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#FF0000").s().p("AAhBBQgEgDAAgHIAAgCQgFAFgGAEQgGADgGADQgGACgIAAQgKAAgJgFQgIgDgHgIQgGgHgEgJQgDgJAAgMQAAgWAOgNQANgNAUAAQAMAAAJAEQAIADAIAIIAAglQAAgIAEgDQADgFAGAAQAHAAADAEQAEADAAAIIAABtQAAAHgEADQgEAFgGAAQgFAAgEgFgAgNgJQgGAEgDAGQgEAHAAAKQAAAKAEAHQADAIAHADQAFAEAHAAQAHAAAHgEQAGgDAEgHQAEgHgBgLQABgKgEgHQgEgGgGgEQgHgDgHAAQgHAAgGADg");
	this.shape_941.setTransform(147.9,134.2);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEABADACQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_942.setTransform(129.8,136);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgwIgEAAQgGABgDgDQgEgCAAgFQAAgEAEgCQADgCAHgBIADAAIAAgOIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGABADACQADACAAAEQAAAGgEABQgFACgIAAIgGAAIAAAtIABAJQAAAEACACQACABAFAAIAHAAIAHgBQADAAADACQADADAAAEQAAAFgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_943.setTransform(120,134.3);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#FF0000").s().p("AAaAvQgDgEAAgHIAAgpQgBgMgEgHQgDgGgMgBQgHAAgGAFQgGADgDAIQgCAFAAAOIAAAgQgBAHgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIAEgEQADgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAIgIAIgFQAIgEAMAAQALAAAJAEQAJAFAEAIQADAEABAGIABANIAAAuQAAAHgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_944.setTransform(109.4,136);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#FF0000").s().p("AAgAvQgDgEgGgGQgKAHgKAEQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAIgHQAHgGANgDIANgCIASgEIAQgDQAAgLgEgEQgEgEgMAAQgLgBgFADQgGACgEAGIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAGgGQAFgHALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHAEAIIACAJQAAAEgEAEQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAEAEQAGADAIAAQAHAAAIgDQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_945.setTransform(96.6,136);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgwIgEAAQgGABgDgDQgEgCAAgFQAAgEAEgCQADgCAHgBIADAAIAAgOIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGABADACQADACAAAEQAAAGgEABQgFACgIAAIgGAAIAAAtIABAJQAAAEACACQACABAFAAIAHAAIAHgBQADAAADACQADADAAAEQAAAFgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_946.setTransform(86.8,134.3);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#FF0000").s().p("AAaAvQgDgEAAgHIAAgpQAAgMgFgHQgDgGgMgBQgHAAgGAFQgGADgDAIQgCAFAAAOIAAAgQAAAHgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIAEgEQADgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAIgIAIgFQAIgEAMAAQALAAAJAEQAJAFAEAIQADAEABAGIABANIAAAuQAAAHgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_947.setTransform(76.2,136);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#FF0000").s().p("AAhAvQgFgEgEgGQgLAHgKAEQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAIgHQAHgGANgDIANgCIASgEIAQgDQAAgLgEgEQgEgEgMAAQgLgBgFADQgGACgEAGIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAGgGQAFgHALgEQAMgEAQAAQASAAALAEQALAEAEAIQAFAJAAANIAAAPIgBANQABAHADAIIACAJQAAAEgEAEQgEADgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAFAEQAEADAIAAQAIAAAIgDQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_948.setTransform(63.4,136);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEABADACQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_949.setTransform(23.3,136);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#FF0000").s().p("AAhBBQgEgDAAgHIAAgCQgGAFgFAEQgGADgHADQgFACgHAAQgLAAgJgFQgIgDgHgIQgGgHgDgJQgEgJAAgMQAAgWAOgNQANgNAVAAQALAAAJAEQAIADAIAIIAAglQAAgIADgDQAEgFAGAAQAHAAADAEQAEADAAAIIAABtQAAAHgEADQgDAFgHAAQgFAAgEgFgAgNgJQgGAEgDAGQgEAHAAAKQAAAKAEAHQADAIAHADQAFAEAHAAQAIAAAGgEQAGgDAEgHQAEgHAAgLQAAgKgEgHQgEgGgGgEQgGgDgIAAQgHAAgGADg");
	this.shape_950.setTransform(9.9,134.2);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgHIAAhsQAAgHADgDQAEgFAGAAQAGAAAEAFQAEADAAAHIAABsQAAAHgEAEQgEAFgGAAQgGAAgDgFg");
	this.shape_951.setTransform(-5.1,134.2);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgHIAAhsQAAgHADgDQAEgFAGAAQAGAAAEAFQAEADAAAHIAABsQAAAHgEAEQgEAFgGAAQgGAAgDgFg");
	this.shape_952.setTransform(-16.3,134.2);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEABADACQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_953.setTransform(-25.5,136);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#FF0000").s().p("AgXAvQgKgEgIgGQgHgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAALAEQAKADAIAIQAHAGAEAJQAEAJAAALQAAALgEAKQgEAJgHAHQgIAHgKADQgLAEgNAAQgMAAgLgEgAgOgcQgHAFgDAHQgEAHABAJQgBAKAEAHQADAHAHAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNgBQgIAAgGAEg");
	this.shape_954.setTransform(-43.7,136);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#FF0000").s().p("AAaAvQgDgEAAgHIAAgpQgBgMgEgHQgDgGgMgBQgHAAgGAFQgGADgDAIQgCAFAAAOIAAAgQgBAHgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIAEgEQADgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAIgIAIgFQAIgEAMAAQALAAAJAEQAJAFAEAIQADAEABAGIABANIAAAuQAAAHgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_955.setTransform(-56.6,136);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#FF0000").s().p("AgsBDQgKAAgEgEQgFgEAAgIIAAhlQAAgIAFgEQAEgEAKAAIAxAAIATABQAIABAGADQAGADAEAFQAEAEADAFQACAFAAAGQAAAUgXAKQAeAHAAAYQAAAMgHAJQgGAJgLAEQgHADgKABIgVABgAggAuIAhAAQAfAAAAgTQAAgLgIgEQgIgEgQAAIggAAgAgggLIAdAAQALAAAGgCQAGgCAEgFQACgEAAgFQAAgKgIgEQgIgDgQAAIgaAAg");
	this.shape_956.setTransform(-83.5,134.2);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#FF0000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAALAEQAKADAIAIQAHAGAEAJQAEAJAAALQAAALgEAKQgEAJgHAHQgIAHgKADQgLAEgNAAQgMAAgKgEgAgOgcQgGAFgEAHQgDAHgBAJQABAKADAHQAEAHAGAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNgBQgIAAgGAEg");
	this.shape_957.setTransform(-103.3,136);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#FF0000").s().p("AA5AvQgFgEAAgIIAAgpIgBgNQgBgEgDgEQgDgDgIgBQgFAAgFADQgFAEgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgFgEQgDgEAAgIIAAgnIgBgPQgBgFgDgDQgDgDgIgBQgOAAgEAJQgFAIABAQIAAAhQgBAIgEAEQgDAEgHAAQgGAAgEgEQgFgEAAgIIAAhGQAAgIAEgDQADgEAHAAQAGAAAEADQADAEAAAGIAAADQAIgJAIgDQAJgDAKgBQALABAHADQAHAEAGAIQAGgIAJgEQAJgDAJgBQAMAAAJAEQAIAFAEAHQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_958.setTransform(-119.3,136);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#FF0000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAALAEQAKADAIAIQAHAGAEAJQAEAJAAALQAAALgEAKQgEAJgHAHQgIAHgKADQgLAEgNAAQgMAAgKgEgAgOgcQgGAFgEAHQgDAHgBAJQABAKADAHQAEAHAGAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNgBQgIAAgGAEg");
	this.shape_959.setTransform(-135.3,136);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#FF0000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAALAEQAKADAIAIQAHAGAEAJQAEAJAAALQAAALgEAKQgEAJgHAHQgIAHgKADQgLAEgNAAQgMAAgKgEgAgOgcQgGAFgEAHQgDAHgBAJQABAKADAHQAEAHAGAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNgBQgHAAgHAEg");
	this.shape_960.setTransform(-166.2,136);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#FF0000").s().p("AAhBBQgEgDAAgHIAAgCQgFAFgGAEQgGADgHADQgFACgHAAQgLAAgIgFQgJgDgHgIQgGgHgDgJQgEgJAAgMQAAgWANgNQANgNAWAAQALAAAIAEQAJADAIAIIAAglQAAgIADgDQAEgFAGAAQAHAAAEAEQADADAAAIIAABtQAAAHgDADQgFAFgGAAQgFAAgEgFgAgNgJQgHAEgDAGQgDAHAAAKQAAAKADAHQAEAIAGADQAHAEAGAAQAHAAAHgEQAGgDAEgHQADgHABgLQgBgKgDgHQgEgGgGgEQgHgDgHAAQgHAAgGADg");
	this.shape_961.setTransform(-179.8,134.2);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgXQAAgOAHgMQAHgMAMgGQANgHARAAQALAAAKADQAJADAGAEQAHAFADAFQAEAFAAAEQAAAFgEADQgEADgFAAQgEAAgCgBIgGgGQgFgHgGgDQgFgEgJAAQgMAAgIAJQgHAJAAAOQAAAHACAGQACAGADAEQAEAEAGACQAFACAFAAQAJAAAGgDQAGgEAFgHQACgEAEgCQADgDAEAAQAFAAAEAEQADADAAAEQAAAFgDAFQgDAFgHAFQgGAFgKADQgKADgNAAQgZAAgPgOg");
	this.shape_962.setTransform(-198.3,136);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#FF0000").s().p("AgXAvQgKgEgIgGQgHgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAALAEQAKADAIAIQAHAGAEAJQAEAJAAALQAAALgEAKQgEAJgHAHQgIAHgKADQgLAEgNAAQgMAAgLgEgAgOgcQgHAFgDAHQgEAHABAJQgBAKAEAHQADAHAHAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNgBQgIAAgGAEg");
	this.shape_963.setTransform(-211.1,136);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#FF0000").s().p("AAaAvQgDgEAAgHIAAgpQgBgMgEgHQgDgGgMgBQgHAAgGAFQgGADgDAIQgCAFAAAOIAAAgQgBAHgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIAEgEQADgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAIgIAIgFQAIgEAMAAQALAAAJAEQAJAFAEAIQADAEABAGIABANIAAAuQAAAHgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_964.setTransform(-224,136);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#FF0000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAALAEQAKADAIAIQAHAGAEAJQAEAJAAALQAAALgEAKQgEAJgHAHQgIAHgKADQgLAEgNAAQgMAAgKgEgAgOgcQgGAFgEAHQgDAHgBAJQABAKADAHQAEAHAGAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNgBQgIAAgGAEg");
	this.shape_965.setTransform(-237,136);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgXQAAgOAHgMQAHgMAMgGQANgHARAAQALAAAKADQAJADAGAEQAHAFADAFQAEAFAAAEQAAAFgEADQgEADgFAAQgEAAgCgBIgGgGQgFgHgGgDQgFgEgJAAQgMAAgIAJQgHAJAAAOQAAAHACAGQACAGADAEQAEAEAGACQAFACAFAAQAJAAAGgDQAGgEAFgHQACgEAEgCQADgDAEAAQAFAAAEAEQADADAAAEQAAAFgDAFQgDAFgHAFQgGAFgKADQgKADgNAAQgZAAgPgOg");
	this.shape_966.setTransform(-249.9,136);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#FF0000").s().p("AgXAvQgKgEgIgGQgHgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAAKAEQALADAHAIQAIAGAEAJQAEAJAAALQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgLgEgAgOgcQgHAFgDAHQgEAHABAJQgBAKAEAHQADAHAHAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNgBQgHAAgHAEg");
	this.shape_967.setTransform(-277.3,136);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#FF0000").s().p("AgWBVQgHgEAAgGQABgEADgDQACgDAGAAIACAAIADAAIAFABQAFAAACgEQABgEAAgKIAAhUQAAgHAEgDQAEgEAGgBQAGABAFAEQADADAAAHIAABVIAAAOIgCAIQgHAQgXABQgNAAgGgDgAAFhBQgEgDAAgGQAAgFAEgEQAFgEAFAAQAGABAFADQADADAAAGQAAAGgDADQgFADgGAAQgFAAgFgDg");
	this.shape_968.setTransform(-288.2,136.1);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEABADACQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_969.setTransform(-295.9,136);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#FF0000").s().p("AAyBAQgFgEAAgHIAAhcIgYBVIgEAMQgCAEgEADQgEADgHAAQgFAAgDgCQgEgCgCgDIgEgHIgCgIIgZhVIAABcQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhqQAAgIAFgDQAFgDAJAAIAKAAIANABQADABACAEIAFALIAVBJIAXhJIADgLQACgEAFgBIAMgBIAJAAQAKAAAFADQAFADAAAIIAABqQAAAHgEAEQgEAEgGAAQgHAAgDgEg");
	this.shape_970.setTransform(-311.2,134.3);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#FF0000").s().p("AgXAvQgKgEgIgGQgHgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAAKAEQALADAHAIQAIAGAEAJQAEAJAAALQAAALgEAJQgEAKgIAHQgHAHgLADQgKAEgNAAQgMAAgLgEgAgOgbQgHADgDAIQgEAHABAJQgBAKAEAHQADAIAHAEQAGADAIAAQANAAAHgJQAIgIAAgPQAAgPgIgIQgHgJgNAAQgHAAgHAFg");
	this.shape_971.setTransform(66.5,111.8);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#FF0000").s().p("AgaAvQgLgEgGgGQgFgHAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAFQAFAHAGADQAGADAKABQAIgBAFgDQAGgDAAgFQAAgGgGgDQgFgDgNgDQgPgDgIgDQgKgDgFgGQgGgGAAgIQAAgHAFgHQAGgHAKgEQAJgEAOAAQALAAAIACQAKACAFAEQAGADADAEQADAEAAAEQAAAEgDADQgEADgGAAQgDAAgEgDIgHgGQgDgEgEgCQgFgCgHAAQgHAAgFADQgGADAAAEQABAEADADIALAEIAQAEQANACAJAEQAIADAFAGQAEAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgKgEg");
	this.shape_972.setTransform(54.1,111.8);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#FF0000").s().p("AAaAwQgEgDgCgEIgEgLIgQgvIgPAvQgDAKgEAGQgDAFgKAAQgEAAgEgCQgDgBgCgDIgEgHIgDgHIgXg7QgDgIAAgEQAAgDADgEQAEgDAFAAQAHAAADADQADAEACAJIATA2IARgzIAEgLQABgCAEgDQAEgDAFAAQAGAAAEADQADACACAEIAEAKIARAzIATg2IADgJIAEgFQACgCAGAAQAFAAAEADQADAEAAADQAAAFgDAHIgXA7IgFALQgCADgDADQgEADgGAAQgHAAgDgDg");
	this.shape_973.setTransform(39.6,111.8);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#FF0000").s().p("AgmAlQgPgOAAgXQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_974.setTransform(24.8,111.8);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#FF0000").s().p("AAmBBQgEgEAAgJIAAgtIhDAAIAAAtQAAAJgEAEQgEAEgHABQgHgBgFgEQgEgEAAgJIAAhoQAAgJAEgDQAFgEAHgBQAHABAEAEQAEADAAAJIAAAnIBDAAIAAgnQAAgJAEgDQAEgEAHgBQAHABAEAEQAFADAAAJIAABoQAAAJgFAEQgEAEgHABQgHgBgEgEg");
	this.shape_975.setTransform(10.3,110);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#FF0000").s().p("AAhBBQgEgDAAgHIAAgDQgGAGgFAEQgGAEgHACQgFACgHAAQgLAAgJgFQgIgDgHgIQgGgGgDgKQgEgKAAgLQAAgWAOgNQANgNAVAAQALAAAJADQAIAEAIAIIAAglQAAgIADgDQAEgEAGgBQAHAAADAEQAEAEAAAHIAABtQAAAHgEADQgDAFgHAAQgFAAgEgFgAgNgJQgGAEgDAGQgEAHAAAKQAAALAEAGQADAIAGADQAGAEAHAAQAIAAAGgEQAGgDAEgHQAEgHAAgLQAAgKgEgHQgEgGgGgEQgGgEgIABQgHAAgGADg");
	this.shape_976.setTransform(-10.3,110);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#FF0000").s().p("AgJAwIgFgFIgGgMIgbg5IgCgFIgCgEIAAgEIABgFIAFgEQADgCAEAAQAHAAADADQADAFADAIIAWA3IAZg5QADgIADgDQACgDAGAAQAGAAAEADQADADAAAFIAAAEIgCAEIgCAEIgbA6IgDAHIgEAHIgGAEQgDACgFAAQgFAAgEgDg");
	this.shape_977.setTransform(-28.4,111.8);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#FF0000").s().p("AAgAvQgEgEgFgGQgKAGgJAEQgJAEgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAHgHQAIgGANgDIANgCIASgDIARgFQgBgKgEgEQgEgEgMgBQgKABgGACQgFACgEAGIgGAHQgCACgFgBQgFABgDgDQgEgDAAgEQAAgHAGgFQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAOIAAAOIgBAOQAAAHADAIIADAJQAAAFgEACQgFAEgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAGAEADQAFAEAJABQAHAAAHgEQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_978.setTransform(-40,111.8);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#FF0000").s().p("AgtBDQgJAAgEgCQgEgCgBgEQgCgFAAgGIAAhhQAAgKAFgEQAEgDAKAAIApAAQAPAAALACQALADAKAHQAYASAAAkQAAAMgDAKQgCAJgFAJQgFAHgIAHQgGAFgIACQgHADgIACIgTABgAgiAtIAYAAIALAAIAJgCIAIgEQAQgMAAgbQAAgTgHgKQgHgLgKgCQgKgCgNgBIgVAAg");
	this.shape_979.setTransform(-54,110);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgHIAAhsQAAgHADgDQAEgEAGgBQAGABAEAEQAEADAAAHIAABsQAAAHgEAEQgEAFgGAAQgGAAgDgFg");
	this.shape_980.setTransform(-70.5,110);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#FF0000").s().p("AAcAvQgEgEAAgGIAAgEIgLAKQgFAEgHACQgGABgJAAQgKABgIgEQgIgEgEgGQgGgJAAgPIAAgwQAAgHAEgEQAEgEAGAAQAGAAAFAEQADAEAAAHIAAAnQABAJABAGQACAFAEAEQAEAEAIgBQAGAAAHgDQAGgEADgGQADgGgBgRIAAgeQAAgHAFgEQAEgEAGAAQAGAAAEAEQAEAEAAAHIAABIQAAAGgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_981.setTransform(-79.9,111.8);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#FF0000").s().p("AAgAvQgEgEgFgGQgKAGgJAEQgJAEgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAHgHQAIgGANgDIANgCIASgDIARgFQgBgKgEgEQgEgEgMgBQgKABgGACQgFACgEAGIgGAHQgCACgFgBQgFABgDgDQgEgDAAgEQAAgHAGgFQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAOIAAAOIgBAOQAAAHADAIIADAJQAAAFgEACQgFAEgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAGAEADQAFAEAJABQAHAAAHgEQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_982.setTransform(-92.7,111.8);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#FF0000").s().p("Ag2BAQgDgEAAgIIAAhnQgBgJAFgEQAFgDAKAAIAnAAQARAAAKACQAKACAGAGQAIAFADAIQADAHABAKQAAAUgPAKQgOAKgdAAIgcAAIAAAmQABAJgFAEQgFAEgGAAQgHAAgFgEgAgbgGIAWAAQAJAAAIgCQAHgCAEgFQAEgEAAgIQAAgJgGgFQgHgGgTAAIgWAAg");
	this.shape_983.setTransform(-105,110.1);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#FF0000").s().p("AAaAvQgEgEABgIIAAgoQgBgMgDgHQgFgGgLgBQgHAAgGAEQgHAFgDAHQgCAFABAPIAAAeQgBAIgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgEQAEgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAIgIAJgFQAHgEAMAAQALAAAJAEQAJAFAFAIQACAEABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_984.setTransform(231.3,194.9);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#FF0000").s().p("AgXBBQgKgEgIgHQgHgGgEgKQgEgJAAgLQAAgMAEgIQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALADAHAHQAIAHAEAJQAEAIAAAMQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgKQgGAEgEAGQgEAIAAAKQAAAKAEAHQAEAHAGAEQAGAEAIAAQANAAAIgJQAHgIAAgPQAAgQgHgHQgIgJgNAAQgIAAgGAEgAgUgtQAAgBADgEIAEgIQAEgGAEgCQADgCAFAAIAOAAQAFAAAAABIgGAGIgLAKIgIAGQgGADgGAAQgFAAAAgDg");
	this.shape_985.setTransform(218.4,193.1);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#FF0000").s().p("AAhAvQgEgEgFgGQgLAGgJAFQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAHgHQAIgGANgDIAOgCIARgEIARgDQgBgLgEgEQgEgFgNABQgJgBgGADQgFADgFAFIgFAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHACAIIADAJQAAAFgEADQgFADgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAFAEQAFADAHAAQAIABAHgEQAIgDADgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_986.setTransform(174.4,194.9);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#FF0000").s().p("AgPBBQgEgDAAgIIAAhBIgIAAQgHAAgDgDQgEgCAAgEQAAgJAPAAIAHAAIAAgHQAAgMADgHQADgHAJgDQAHgEAOAAQAZAAAAALQAAADgDADQgCACgEAAIgGAAIgHgBQgHAAgDAFQgCAEAAAHIAAAGIAHAAQARAAAAAJQAAAFgFACQgEACgIAAIgHAAIAABBQAAAIgEADQgEAFgFAAQgGAAgEgFg");
	this.shape_987.setTransform(165.2,193);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#FF0000").s().p("AgaAvQgLgFgGgFQgFgHAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAGQAFAGAGAEQAGACAKAAQAIAAAFgCQAGgEAAgFQAAgGgGgDQgFgDgNgDQgPgDgIgDQgKgDgFgGQgGgGAAgIQAAgIAFgGQAGgHAKgEQAJgEAOAAQALAAAIACQAKACAFAEQAGADADAEQADAEAAAEQAAAEgDADQgEADgGAAQgDAAgEgDIgHgGQgDgDgEgCQgFgDgHAAQgHAAgFADQgGADAAAEQABAEADACIALAFIAQAEQANADAJADQAIADAFAGQAEAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgPAAgKgEg");
	this.shape_988.setTransform(155.4,194.9);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAgvIgEAAQgGABgDgDQgEgDAAgEQAAgDAEgDQADgCAHgBIADAAIAAgPIAAgJQAAgDACgDQACgCADgCQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGABADACQADADAAADQAAAFgEADQgFABgIAAIgGAAIAAAtIABAJQAAADACADQACABAFABIAHgBIAHgBQADAAADACQADADAAAEQAAAGgIADQgIADgOAAQgMAAgHgEg");
	this.shape_989.setTransform(140.3,193.2);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#FF0000").s().p("AAhAvQgEgEgFgGQgLAGgJAFQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAIgHQAHgGANgDIAOgCIARgEIARgDQgBgLgEgEQgEgFgNABQgJgBgGADQgFADgFAFIgFAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHACAIIADAJQAAAFgEADQgFADgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAFAEQAFADAHAAQAIABAHgEQAIgDADgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_990.setTransform(130.3,194.9);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#FF0000").s().p("AgbAvQgLgFgFgFQgFgHAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAGQAFAGAGAEQAGACAJAAQAJAAAGgCQAFgEAAgFQAAgGgFgDQgHgDgLgDQgPgDgKgDQgJgDgGgGQgFgGAAgIQAAgIAFgGQAFgHAKgEQALgEAOAAQAKAAAIACQAJACAHAEQAFADAEAEQADAEAAAEQgBAEgDADQgDADgGAAQgFAAgDgDIgHgGQgDgDgFgCQgEgDgGAAQgIAAgGADQgEADAAAEQgBAEAEACIAKAFIARAEQAOADAIADQAIADAEAGQAFAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgPAAQgPAAgMgEg");
	this.shape_991.setTransform(118.1,194.9);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#FF0000").s().p("AAgAvQgDgEgGgGQgKAGgKAFQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAIgHQAHgGANgDIANgCIASgEIAQgDQAAgLgEgEQgEgFgMABQgLgBgFADQgGADgDAFIgGAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHAEAIIACAJQAAAFgEADQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAEAEQAFADAJAAQAHABAIgEQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_992.setTransform(94.8,194.9);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAgvIgEAAQgGABgDgDQgEgDAAgEQAAgDAEgDQADgCAHgBIADAAIAAgPIAAgJQAAgDACgDQACgCADgCQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGABADACQADADAAADQAAAFgEADQgFABgIAAIgGAAIAAAtIABAJQAAADACADQACABAFABIAHgBIAHgBQADAAADACQADADAAAEQAAAGgIADQgIADgOAAQgMAAgHgEg");
	this.shape_993.setTransform(85,193.2);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("#FF0000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAHgKADQgLAEgNAAQgMAAgKgEgAgOgcQgGAFgEAHQgDAHgBAJQABAKADAHQAEAHAGAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNAAQgIAAgGADg");
	this.shape_994.setTransform(74.4,194.9);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAgvIgEAAQgGABgDgDQgEgDAAgEQAAgDAEgDQADgCAHgBIADAAIAAgPIAAgJQAAgDACgDQACgCADgCQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGABADACQADADAAADQAAAFgEADQgFABgIAAIgGAAIAAAtIABAJQAAADACADQACABAFABIAHgBIAHgBQADAAADACQADADAAAEQAAAGgIADQgIADgOAAQgMAAgHgEg");
	this.shape_995.setTransform(64.5,193.2);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDAEQgDADgDAFIgDANIgBASIAAAVQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_996.setTransform(51,194.9);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#FF0000").s().p("AAbAvQgEgEgBgIIAAgoQAAgMgDgHQgEgGgMgBQgHAAgGAEQgGAFgDAHQgCAFgBAPIAAAeQAAAIgDAEQgEAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgEQADgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAHgIAJgFQAIgEAMAAQALAAAJAEQAJAFAEAIQADAEABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgHAAgDgEg");
	this.shape_997.setTransform(26.5,194.9);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAgvIgEAAQgGABgDgDQgEgDAAgEQAAgDAEgDQADgCAHgBIADAAIAAgPIAAgJQAAgDACgDQACgCADgCQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGABADACQADADAAADQAAAFgEADQgFABgIAAIgGAAIAAAtIABAJQAAADACADQACABAFABIAHgBIAHgBQADAAADACQADADAAAEQAAAGgIADQgIADgOAAQgMAAgHgEg");
	this.shape_998.setTransform(3.9,193.2);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#FF0000").s().p("AgDBEIgLgEIgGgEIgIgHIAAACQAAAHgEADQgDAFgHAAQgFAAgEgFQgEgDAAgHIAAhsQAAgHADgEQAEgFAGAAQAHAAADAFQAEADAAAHIAAAmQAIgHAJgEQAIgEALAAQAOAAAMAGQAKAGAGALQAGAKAAAQQAAALgDAJQgDAKgHAGQgGAIgJADQgJAFgLAAQgGAAgFgCgAgMgIQgHADgEAGQgDAIgBAKQAAAPAJAIQAHAIAMAAQAKAAAIgIQAIgJAAgPQAAgJgDgIQgDgGgGgDQgGgEgIgBQgIABgFAEg");
	this.shape_999.setTransform(-6.7,193);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#FF0000").s().p("AAgAvQgEgEgFgGQgKAGgJAFQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAHgHQAIgGANgDIAOgCIARgEIARgDQgBgLgEgEQgEgFgNABQgJgBgGADQgFADgEAFIgGAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHACAIIADAJQAAAFgEADQgFADgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAEAEQAFADAIAAQAIABAHgEQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_1000.setTransform(-38.3,194.9);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDAEQgDADgDAFIgDANIgBASIAAAVQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1001.setTransform(-48.2,194.9);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#FF0000").s().p("AAhAvQgFgEgEgGQgLAGgKAFQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAIgHQAHgGANgDIANgCIASgEIAQgDQAAgLgEgEQgEgFgNABQgKgBgFADQgGADgEAFIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAJAAANIAAAPIgBANQABAHADAIIACAJQAAAFgEADQgEADgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAFAEQAEADAIAAQAIABAIgEQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_1002.setTransform(-59.9,194.9);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#FF0000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgIAEgDQAEgEAFAAQAGAAAEAFQAEADAAAHIAAACQAJgIAIgEQAJgEAKAAQANAAALAGQALAGAGALQAHAMAAAPQAAAMgDAIQgFAKgGAGQgHAHgIAEQgJAEgKAAQgMAAgIgFQgIgFgIgHIAAAlQAAARgOAAQgHgBgDgEgAgSgqQgIAJAAAPQAAAPAIAIQAHAIAMAAQAHAAAGgEQAGgEADgFQAEgIAAgKQAAgKgDgHQgDgHgHgEQgGgEgHAAQgLABgIAHg");
	this.shape_1003.setTransform(-72.7,196.7);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#FF0000").s().p("AgbAvQgKgFgGgFQgFgHAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAGQAEAGAHAEQAGACAKAAQAIAAAFgCQAGgEAAgFQAAgGgGgDQgFgDgNgDQgOgDgKgDQgJgDgFgGQgGgGAAgIQAAgIAFgGQAGgHAJgEQAKgEAOAAQALAAAIACQAKACAFAEQAGADADAEQADAEAAAEQABAEgEADQgEADgFAAQgEAAgEgDIgHgGQgDgDgFgCQgEgDgHAAQgHAAgFADQgGADAAAEQABAEADACIALAFIAQAEQANADAJADQAIADAEAGQAFAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgPAAgLgEg");
	this.shape_1004.setTransform(-90.9,194.9);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#FF0000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgKgEgAgOgcQgHAFgDAHQgDAHgBAJQABAKADAHQADAHAHAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNAAQgHAAgHADg");
	this.shape_1005.setTransform(-103.1,194.9);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#FF0000").s().p("AAaBBQgEgEAAgHIAAgqQAAgMgDgGQgFgGgLAAQgHAAgGAEQgHAEgDAGQgCAFAAAQIAAAfQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgDQAEgEAGAAQAEAAADACIAFAFQACADAAAEIAAADQAIgIAJgEQAHgFAMAAQALAAAJAFQAJAEAFAIQACAEABAGIABAMIAAAvQAAAHgEAEQgEAEgGAAQgGAAgFgEgAgmgqQgCgCAAgEQAAgEACgFQACgEAFgCQAEgDAFAAIAJABIAKAEIAIAEIAGAAIAFgBIADgFQABgFAEAAQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQABACAAADQAAAFgFAHQgEAGgJAAIgIgBIgJgEIgJgDIgHgBQgGAAgCAGQgCAFgDAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_1006.setTransform(-116.1,193);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#FF0000").s().p("AAhAvQgEgEgFgGQgLAGgJAFQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAHgHQAIgGANgDIAOgCIARgEIARgDQgBgLgEgEQgEgFgNABQgJgBgGADQgFADgFAFIgFAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHACAIIADAJQAAAFgEADQgFADgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAFAEQAFADAHAAQAIABAHgEQAIgDADgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_1007.setTransform(-128.9,194.9);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#FF0000").s().p("AgbA8QgNgHgGgOQgEgHgBgKQgCgJAAgLQAAgMACgLQACgMADgHQAGgOAMgHQAMgGAQAAQAKAAAJACQAJADAGAGQAHAGAFAJQAIAPAAAbQAAAPgCAKQgDALgFAJQgHALgMAFQgLAHgOgBQgPABgMgJgAgSglQgGAMAAAZQAAARACALQADALAFAFQAGAGAIAAQAKAAAFgGQAGgGACgKQACgMAAgQQAAgRgCgLQgDgKgFgFQgGgGgJAAQgNAAgFAMg");
	this.shape_1008.setTransform(-146.9,193.1);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#FF0000").s().p("AAQBCQgEgEAAgHIAAgRIg0AAQgKAAgFgEQgEgEAAgHIAAgDIACgEIAEgEIADgEIA3hAIAJgJQAEgDAEAAQAQAAABAQIAABGIAEAAQAIAAAFACQAFABgBAHQAAAFgDADQgEACgIAAIgGAAIAAARQgBAHgDAEQgEADgGAAQgGAAgDgDgAggASIAsAAIAAg1g");
	this.shape_1009.setTransform(-159.6,193);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#FF0000").s().p("AAaAvQgEgEAAgIIAAgoQAAgMgDgHQgFgGgLgBQgHAAgGAEQgHAFgDAHQgCAFAAAPIAAAeQAAAIgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgEQAEgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAIgIAJgFQAHgEAMAAQALAAAJAEQAJAFAFAIQACAEABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_1010.setTransform(-177.7,194.9);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDAEQgDADgDAFIgDANIgBASIAAAVQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1011.setTransform(-206.3,194.9);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#FF0000").s().p("AAcAvQgEgEAAgGIAAgEIgKAKQgHAEgGACQgGACgIgBQgLAAgIgDQgIgEgFgGQgFgJAAgPIAAgwQAAgIAEgDQAEgEAGAAQAGAAAEAEQAFADAAAIIAAAnQAAAJABAGQACAGAFADQAEADAHABQAHgBAFgDQAHgEADgHQADgFAAgQIAAgfQAAgIADgDQAEgEAHAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgDAEgHAAQgFAAgEgEg");
	this.shape_1012.setTransform(-218.1,194.9);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAgvIgEAAQgGABgDgDQgEgDAAgEQAAgDAEgDQADgCAHgBIADAAIAAgPIAAgJQAAgDACgDQACgCADgCQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGABADACQADADAAADQAAAFgEADQgFABgIAAIgGAAIAAAtIABAJQAAADACADQACABAFABIAHgBIAHgBQADAAADACQADADAAAEQAAAGgIADQgIADgOAAQgMAAgHgEg");
	this.shape_1013.setTransform(-241,193.2);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEAAADADQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_1014.setTransform(-256.8,194.9);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#FF0000").s().p("AAhBBQgEgDAAgHIAAgCQgFAFgGAEQgGAEgHABQgFADgHAAQgLAAgIgFQgJgDgHgIQgGgHgDgJQgEgJAAgLQAAgXANgNQANgNAWAAQALAAAIAEQAJADAIAIIAAglQAAgHADgEQAEgFAGAAQAHABAEADQADADAAAIIAABtQAAAHgDADQgFAFgGAAQgFAAgEgFgAgNgIQgHADgDAGQgDAIAAAJQAAAKADAIQAEAGAGAEQAHAEAGAAQAHAAAHgEQAGgDAEgHQADgHABgLQgBgKgDgHQgEgGgGgEQgHgEgHAAQgHABgGAEg");
	this.shape_1015.setTransform(-270.2,193);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#FF0000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAALAEQAKADAIAIQAHAGAEAJQAEAJAAALQAAALgEAKQgEAJgHAHQgIAHgKADQgLAEgNAAQgMAAgKgEgAgOgcQgGAFgEAHQgDAHgBAJQABAKADAHQAEAHAGAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNgBQgHABgHADg");
	this.shape_1016.setTransform(276.1,170.7);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#FF0000").s().p("AAhBBQgEgDAAgHIAAgCQgFAFgGAEQgGADgHADQgFACgHAAQgLAAgIgFQgJgDgHgIQgGgHgDgJQgEgJAAgLQAAgXANgNQANgNAWAAQALAAAIAEQAJADAIAIIAAglQAAgIADgDQAEgFAGAAQAHAAAEAEQADADAAAIIAABtQAAAHgDADQgFAFgGAAQgFAAgEgFgAgNgJQgHAEgDAGQgDAIAAAJQAAAKADAHQAEAIAGADQAHAEAGAAQAHAAAHgEQAGgDAEgHQADgHABgLQgBgKgDgHQgEgGgGgEQgHgDgHAAQgHAAgGADg");
	this.shape_1017.setTransform(262.6,168.8);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#FF0000").s().p("AAgAvQgDgEgGgGQgKAHgKAEQgIADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAHgHQAIgGANgDIANgCIASgEIARgEQgBgKgEgEQgEgEgMAAQgKgBgGADQgFACgEAGIgGAHQgBABgGAAQgFAAgDgCQgEgCAAgFQAAgGAGgGQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHADAIIADAJQAAAEgEAEQgFADgFAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAEADQAGAEAIAAQAHAAAHgDQAIgDADgFQADgGABgNIAAgDIgTAEg");
	this.shape_1018.setTransform(249.9,170.7);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#FF0000").s().p("AAhAvQgFgEgEgGQgLAHgJAEQgJADgMAAQgLAAgIgEQgJgEgEgGQgFgHAAgIQAAgKAIgHQAHgGANgDIAOgCIARgEIARgEQgBgKgEgEQgEgEgNAAQgKgBgFADQgGACgEAGIgFAHQgBABgGAAQgFAAgDgCQgEgCAAgFQAAgGAFgGQAGgHALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHADAIIACAJQAAAEgEAEQgFADgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAFADQAFAEAHAAQAIAAAIgDQAGgDAEgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_1019.setTransform(228.3,170.7);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#FF0000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgHADgEQAEgEAGAAQAHABADAEQAEADAAAGIAAADQAIgIAJgEQAJgEAKAAQANAAALAGQALAGAGALQAHALAAAQQAAAMgDAIQgFAKgGAGQgGAHgJAEQgJADgKABQgLgBgJgEQgJgFgHgHIAAAlQAAARgOAAQgHgBgDgEgAgSgqQgJAJABAPQgBAPAJAIQAHAIAMAAQAHAAAGgEQAGgDAEgHQADgHAAgKQAAgKgDgHQgDgHgGgEQgHgDgHAAQgLAAgIAHg");
	this.shape_1020.setTransform(215.5,172.5);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#FF0000").s().p("AAhAvQgEgEgFgGQgLAHgJAEQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAHgHQAIgGANgDIAOgCIARgEIARgEQgBgKgEgEQgEgEgNAAQgJgBgGADQgFACgFAGIgFAHQgCABgFAAQgFAAgDgCQgEgCAAgFQAAgGAFgGQAGgHALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHACAIIADAJQAAAEgEAEQgFADgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAFADQAFAEAHAAQAIAAAHgDQAIgDADgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_1021.setTransform(183.9,170.7);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("#FF0000").s().p("AAXA2IAAgqQgBgMgEgGQgDgGgMAAQgHAAgFAEQgHADgDAGQgCAGAAAOIAAAhQAAAHgEAEQgEAFgHAAQgOAAAAgQIAAhsQAAgHAEgDQAEgFAGAAQAHAAAEAFQAEADAAAHIAAAmQAFgGAGgDQAEgDAGgBQAGgCAIgBQAKABAJAEQAIAEAFAHQADAFABAFIABAMIAAAwQAAAHgEAEQgEAFgGAAQgOAAAAgQg");
	this.shape_1022.setTransform(171.1,168.8);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#FF0000").s().p("AgXAvQgKgEgIgGQgHgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAAKAEQALADAHAIQAIAGAEAJQAEAJAAALQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgLgEgAgOgcQgGAFgEAHQgDAHAAAJQAAAKADAHQAEAHAGAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNgBQgHABgHADg");
	this.shape_1023.setTransform(152.8,170.7);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("#FF0000").s().p("AAbAvQgFgEAAgHIAAgpQAAgMgDgHQgEgGgMgBQgHAAgGAFQgGADgDAIQgDAFAAAOIAAAgQAAAHgDAEQgEAEgHAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIAEgEQADgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAHgIAKgFQAHgEAMAAQALAAAJAEQAJAFAEAIQADAEABAGIABANIAAAuQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1024.setTransform(139.8,170.7);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#FF0000").s().p("AgvBDQgGgDAAgFQAAgFADgCQADgCAGAAIAEAAIAFABQAFgBADgBQACgBADgEIAFgJIADgFIgkhMQgDgIAAgCIACgHQACgCADgBQADgCAEgBQAGAAADAEQAEAEACAGIAXA9IAXg5IAFgLQACgEADgBQACgCAFAAIAGACQADABACADIABAGIgBAEIgDAHIglBUQgFALgEAHQgEAGgHAEQgIADgNABQgNgBgGgCg");
	this.shape_1025.setTransform(121.9,172.5);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("#FF0000").s().p("AAbBDIgHgJIgYglIgQAOIAAATQAAAIgEADQgFAFgFAAQgHAAgEgFQgDgEAAgHIAAhqQAAgIADgEQAEgFAHAAQAGAAAEAFQAEADAAAIIAAA8IAfgdIAJgHQADgCAFgBQAFABAEADQADADAAAEQAAAGgLAJIgPALIAdAoIAFAHIABAEQAAAHgEADQgDADgGABQgGgBgDgCg");
	this.shape_1026.setTransform(105.2,168.8);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#FF0000").s().p("AgXAvQgKgEgIgGQgHgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAAKAEQALADAHAIQAIAGAEAJQAEAJAAALQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgLgEgAgOgcQgGAFgEAHQgEAHAAAJQAAAKAEAHQAEAHAGAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNgBQgIABgGADg");
	this.shape_1027.setTransform(80.2,170.7);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("#FF0000").s().p("AAhBBQgEgDAAgHIAAgCQgGAFgFAEQgGADgGADQgGACgIAAQgKAAgJgFQgJgDgGgIQgGgHgEgJQgDgJAAgLQAAgXANgNQAOgNAUAAQAMAAAIAEQAJADAIAIIAAglQAAgIAEgDQADgFAHAAQAGAAAEAEQADADAAAIIAABtQAAAHgDADQgEAFgGAAQgGAAgEgFgAgNgJQgGAEgEAGQgDAIAAAJQAAAKADAHQAEAIAHADQAFAEAHAAQAIAAAGgEQAGgDAEgHQADgHAAgLQAAgKgDgHQgEgGgGgEQgGgDgIAAQgHAAgGADg");
	this.shape_1028.setTransform(34.3,168.8);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#FF0000").s().p("AAhAvQgFgEgEgGQgLAHgKAEQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAIgHQAHgGANgDIANgCIASgEIAQgEQAAgKgEgEQgEgEgNAAQgKgBgFADQgGACgEAGIgFAHQgBABgGAAQgFAAgDgCQgEgCAAgFQAAgGAFgGQAGgHALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAJAAANIAAAPIgBANQABAHADAIIACAJQAAAEgEAEQgEADgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAFADQAEAEAJAAQAHAAAIgDQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_1029.setTransform(16.2,170.7);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgDgEAAQgHAAgDAEQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1030.setTransform(0,170.7);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#FF0000").s().p("AAhAvQgFgEgEgGQgLAHgKAEQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAIgHQAHgGANgDIAOgCIARgEIAQgEQAAgKgEgEQgEgEgNAAQgKgBgFADQgFACgFAGIgFAHQgBABgGAAQgFAAgDgCQgEgCAAgFQAAgGAFgGQAGgHALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHADAIIACAJQAAAEgEAEQgEADgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAFADQAFAEAHAAQAIAAAIgDQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_1031.setTransform(-11.6,170.7);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("#FF0000").s().p("AAhBBQgEgDAAgHIAAgCQgGAFgFAEQgGADgGADQgGACgIAAQgKAAgJgFQgJgDgGgIQgGgHgEgJQgDgJAAgLQAAgXANgNQAOgNAUAAQAMAAAJAEQAIADAIAIIAAglQAAgIAEgDQADgFAHAAQAGAAADAEQAEADAAAIIAABtQAAAHgEADQgEAFgFAAQgGAAgEgFgAgNgJQgGAEgDAGQgEAIAAAJQAAAKAEAHQADAIAHADQAFAEAHAAQAHAAAHgEQAGgDAEgHQAEgHgBgLQABgKgEgHQgEgGgGgEQgHgDgHAAQgHAAgGADg");
	this.shape_1032.setTransform(-25,168.8);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#FF0000").s().p("AAaAvQgDgEAAgHIAAgpQAAgMgFgHQgEgGgLgBQgHAAgGAFQgHADgDAIQgBAFAAAOIAAAgQAAAHgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgEQAEgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAIgIAJgFQAHgEAMAAQALAAAJAEQAJAFAFAIQACAEABAGIABANIAAAuQAAAHgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_1033.setTransform(-37.9,170.7);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f("#FF0000").s().p("AgbBCQgMgEgGgGQgGgFAAgHQAAgEADgDQAEgCAFgBQAGABAFAEIAFAFIAFAFIAHACIAKABQAKAAAGgCQAGgEADgEQACgFABgFIAAgSQgGAHgJAFQgJAEgLAAQgOAAgLgGQgKgHgGgLQgGgLAAgPQAAgMAEgIQADgKAHgFQAGgHAJgDQAIgDAKAAQALAAAJAEQAJAEAIAIIAAgDQAAgGAEgEQADgEAGAAQAIABADAFQADAEAAAJIAABIQAAAMgDAJQgDAJgHAGQgHAGgLADQgKADgQAAQgOgBgMgDgAgTgqQgHAJAAAPQAAAPAHAHQAIAHALAAQAHAAAHgDQAGgEAEgFQAEgGAAgLQAAgOgIgJQgIgJgMABQgLAAgIAHg");
	this.shape_1034.setTransform(-63.6,172.5);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#FF0000").s().p("AgaAvQgMgFgFgFQgFgHAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAGQAEAGAHADQAGADAJAAQAJAAAGgDQAFgDAAgFQAAgGgFgDQgHgDgLgDQgQgDgIgDQgKgDgGgGQgFgGAAgIQAAgHAFgHQAFgHALgEQAKgEAOAAQAJAAAKACQAIACAGAEQAGADADAEQAEAEAAAEQgBAFgDACQgDADgHAAQgEAAgDgDIgHgGQgDgDgEgDQgFgCgGAAQgJAAgFADQgEADAAAEQAAAEADADIAKAEIARAEQANACAJAEQAIAEAFAFQAEAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgPAAgLgEg");
	this.shape_1035.setTransform(-99.5,170.7);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f("#FF0000").s().p("AAgBBQgEgEgFgHQgKAHgJAEQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgIQAAgKAHgHQAIgHANgDIANgCIASgEIARgEQgBgJgEgEQgEgFgMAAQgKAAgGADQgFACgEAGIgGAGQgCABgFAAQgFAAgDgCQgEgCAAgEQAAgHAGgGQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAANIAAAPIgBAOQAAAHADAIIADAJQAAAEgEADQgFAEgFAAQgEAAgFgEgAAEAXIgQADQgFABgEADQgEADAAAGQAAAFAEAEQAFAEAJAAQAHAAAHgDQAIgDADgFQADgGABgNIAAgEIgSAFgAgTgtQAAgBAEgEIAEgIQAEgGADgCQAEgCAEAAIAPAAQAFAAAAABIgGAGIgMAKIgHAGQgGADgHAAQgFAAAAgDg");
	this.shape_1036.setTransform(-111.6,168.9);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#FF0000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgBgEgEgEQgEgDgHgBQgFAAgFADQgFAEgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgEgEQgFgEAAgIIAAgnIgBgPQAAgFgDgDQgEgDgGgBQgPAAgEAJQgEAJgBAPIAAAhQAAAIgDAEQgFAEgGAAQgGAAgFgEQgEgEAAgIIAAhGQAAgIAEgDQAEgEAFAAQAHAAADADQAFAEAAAGIAAADQAHgJAJgDQAIgDAKgBQALABAIADQAGAEAFAIQAIgIAIgEQAIgDAKgBQAMAAAIAEQAJAFAEAHQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgGAAgFgEg");
	this.shape_1037.setTransform(-127.4,170.7);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f("#FF0000").s().p("AAgAvQgEgEgFgGQgKAHgJAEQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAHgHQAIgGANgDIAOgCIARgEIARgEQgBgKgEgEQgEgEgNAAQgJgBgGADQgFACgEAGIgGAHQgCABgFAAQgFAAgDgCQgEgCAAgFQAAgGAFgGQAGgHALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHACAIIADAJQAAAEgEAEQgFADgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAEADQAFAEAIAAQAIAAAHgDQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_1038.setTransform(-148.6,170.7);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#FF0000").s().p("AAhBBQgEgDAAgHIAAgCQgGAFgFAEQgGADgHADQgFACgHAAQgLAAgJgFQgIgDgHgIQgGgHgDgJQgEgJAAgLQAAgXAOgNQANgNAVAAQALAAAJAEQAIADAIAIIAAglQAAgIADgDQAEgFAGAAQAHAAADAEQAEADAAAIIAABtQAAAHgEADQgDAFgHAAQgFAAgEgFgAgNgJQgGAEgDAGQgEAIAAAJQAAAKAEAHQADAIAGADQAGAEAHAAQAIAAAGgEQAGgDAEgHQAEgHAAgLQAAgKgEgHQgEgGgGgEQgGgDgIAAQgHAAgGADg");
	this.shape_1039.setTransform(-162,168.8);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f("#FF0000").s().p("AAbAvQgFgEAAgHIAAgpQAAgMgDgHQgFgGgLgBQgHAAgGAFQgGADgEAIQgCAFAAAOIAAAgQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgEQAEgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAHgIAKgFQAHgEAMAAQALAAAJAEQAJAFAFAIQACAEABAGIABANIAAAuQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1040.setTransform(-174.8,170.7);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#FF0000").s().p("AgDBEIgKgEIgHgEIgIgHIAAACQAAAHgDADQgFAFgFAAQgHAAgDgFQgEgDAAgHIAAhsQAAgIADgDQAEgFAHAAQAGAAAEAFQADADAAAHIAAAmQAIgHAJgEQAIgEALAAQAOAAALAGQALAFAGAMQAGAKAAAQQAAALgEAJQgDAKgGAGQgGAIgJADQgJAFgLAAQgHgBgEgBgAgMgJQgHAEgEAGQgDAIgBAKQABAPAHAIQAIAIAMAAQALAAAHgIQAIgIAAgQQAAgJgDgIQgDgGgGgEQgGgDgIAAQgIAAgFADg");
	this.shape_1041.setTransform(-200.4,168.8);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f("#FF0000").s().p("AAgAvQgEgEgFgGQgKAHgJAEQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAHgHQAIgGANgDIANgCIASgEIARgEQgBgKgEgEQgEgEgMAAQgKgBgGADQgFACgEAGIgGAHQgCABgFAAQgFAAgDgCQgEgCAAgFQAAgGAGgGQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHADAIIADAJQAAAEgEAEQgFADgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAEADQAFAEAJAAQAHAAAHgDQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_1042.setTransform(-219.1,170.7);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("#FF0000").s().p("AgbAvQgLgFgFgFQgFgHAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAGQAEAGAHADQAGADAJAAQAJAAAGgDQAFgDAAgFQAAgGgFgDQgHgDgLgDQgPgDgKgDQgJgDgGgGQgFgGAAgIQAAgHAFgHQAFgHAKgEQALgEAOAAQAJAAAKACQAJACAGAEQAFADAEAEQADAEAAAEQgBAFgDACQgDADgHAAQgEAAgDgDIgHgGQgDgDgFgDQgEgCgGAAQgIAAgGADQgEADAAAEQgBAEAEADIAKAEIARAEQANACAJAEQAIAEAEAFQAFAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgPAAgMgEg");
	this.shape_1043.setTransform(-242.5,170.7);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgHIAAhsQAAgHADgDQAEgFAGAAQAGAAAEAFQAEADAAAHIAABsQAAAHgEAEQgEAFgGAAQgGAAgDgFg");
	this.shape_1044.setTransform(-263.8,168.8);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("#FF0000").s().p("AAgAvQgDgEgGgGQgKAHgKAEQgIADgMAAQgLAAgJgEQgIgEgFgGQgEgHAAgIQAAgKAHgHQAIgGANgDIANgCIASgEIAQgEQAAgKgEgEQgEgEgMAAQgKgBgGADQgFACgEAGIgGAHQgCABgFAAQgFAAgDgCQgEgCAAgFQAAgGAGgGQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHADAIIADAJQAAAEgEAEQgFADgFAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAEADQAGAEAIAAQAHAAAHgDQAIgDADgFQADgGAAgNIAAgDIgSAEg");
	this.shape_1045.setTransform(-280.2,170.7);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f("#FF0000").s().p("AgsBDQgKAAgEgEQgFgEAAgIIAAhlQAAgIAFgFQAEgDAKAAIAxAAIATABQAIABAGADQAGADAEAFQAEAEADAFQACAFAAAGQAAAUgXAKQAeAHAAAYQAAAMgHAJQgGAJgLAFQgHACgKABIgVABgAggAuIAhAAQAfAAAAgUQAAgKgIgEQgIgEgQAAIggAAgAgggLIAdAAQALAAAGgCQAGgCAEgFQACgEAAgFQAAgKgIgEQgIgDgQAAIgaAAg");
	this.shape_1046.setTransform(-306.7,168.8);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("#FF0000").s().p("AgaAuQgLgDgGgHQgFgGAAgGQAAgEADgDQADgDAGAAQAEAAACACIAFAGQAFAGAGAEQAGACAKAAQAIAAAFgCQAGgEAAgEQAAgHgGgDQgGgDgMgDQgPgDgIgEQgKgCgGgGQgFgGAAgIQAAgHAFgHQAGgHAKgEQAJgEAOAAQAKAAAKACQAIACAGADQAGAEADAEQADAEABAEQAAAEgEADQgEADgGAAQgDAAgEgDIgHgGQgDgDgEgCQgFgDgHAAQgHAAgFADQgGADAAAEQAAAEAEACIALAFIAQAEQANADAJAEQAIACAFAGQAEAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgQAAgKgFg");
	this.shape_1047.setTransform(276.1,146.5);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f("#FF0000").s().p("AgXAvQgKgDgIgIQgHgGgEgJQgEgKAAgLQAAgKAEgKQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgcQgGAEgEAHQgEAIAAAJQAAAKAEAHQAEAHAGAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgIAAgGADg");
	this.shape_1048.setTransform(263.8,146.5);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#FF0000").s().p("AAhAvQgFgDgEgIQgLAHgKAFQgIADgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAIgIQAHgGANgCIANgDIASgEIAQgDQAAgLgEgEQgEgFgNABQgKAAgFACQgGADgEAFIgFAHQgBACgGAAQgFAAgDgDQgEgDAAgEQAAgGAFgHQAGgGALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAJAAAOIAAAOIgBANQABAHADAIIACAKQAAADgEAEQgEADgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAGAFAEQAEADAIAAQAIAAAIgDQAGgDAEgFQAEgGgBgNIAAgEIgSAFg");
	this.shape_1049.setTransform(239.8,146.5);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f("#FF0000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgKAEgKQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgcQgGAEgEAHQgDAIgBAJQABAKADAHQAEAHAGAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgHAAgHADg");
	this.shape_1050.setTransform(221.7,146.5);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAguIgEAAQgGgBgDgCQgEgDAAgDQAAgEAEgDQADgDAHABIADAAIAAgQIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABAEIAAAJIAAASIALAAQAGgBADADQADADAAAEQAAAFgEACQgFACgIAAIgGAAIAAAtIABAIQAAADACADQACACAFAAIAHgBIAHgBQADAAADADQADACAAAEQAAAFgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_1051.setTransform(211.7,144.8);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f("#FF0000").s().p("AAbAvQgEgEgBgIIAAgoQAAgNgEgGQgDgGgMAAQgHAAgGADQgGAFgDAGQgCAGgBAPIAAAeQAAAIgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgEQADgDAGAAQAEAAADACIAFAEQACAEAAAEIAAADQAHgJAJgEQAIgEAMAAQALAAAJAEQAJAFAEAHQADAFABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgHAAgDgEg");
	this.shape_1052.setTransform(201.1,146.5);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("#FF0000").s().p("AAcAvQgEgDAAgIIAAgDIgKAKQgHAEgGACQgGABgJABQgKgBgIgDQgIgEgFgHQgFgHAAgPIAAgxQAAgIAEgDQAEgEAGAAQAHAAADAEQAEADABAIIAAAnQAAAJABAFQACAHAEADQAFADAHABQAHAAAFgFQAHgDADgHQADgEAAgRIAAgfQAAgIAEgDQADgEAHAAQAGAAAEAEQAEADAAAIIAABHQAAAIgEADQgDAEgHAAQgFAAgEgEg");
	this.shape_1053.setTransform(188.2,146.5);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f("#FF0000").s().p("AgWBUQgHgDABgGQAAgEACgDQAEgDAFAAIABAAIAFAAIADABQAGAAACgEQABgEAAgKIAAhTQAAgIAEgDQAEgFAHAAQAFAAAFAFQADADAAAIIAABTIAAAPIgCAJQgHAQgWAAQgOgBgGgDgAAGhBQgFgEAAgFQAAgFAFgEQADgDAHgBQAFAAAFADQADAEAAAGQAAAFgDAEQgFADgFAAQgHAAgDgDg");
	this.shape_1054.setTransform(177.3,146.6);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("#FF0000").s().p("AgOAaQAAAAgBgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgFAFgCQALgFAAgKQgGAAgFgCQgFgEAAgGQAAgHAFgDQAFgFAGAAQAFAAAEADQAEADACAEQACAEAAAIQAAAHgEAJQgEAHgHAFQgFAFgFgBQgEAAgCgBg");
	this.shape_1055.setTransform(167.2,151.6);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f("#FF0000").s().p("AAbAvQgEgEAAgIIAAgoQgBgNgEgGQgDgGgMAAQgHAAgGADQgGAFgDAGQgCAGAAAPIAAAeQgBAIgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgEQADgDAGAAQAEAAADACIAFAEQACAEAAAEIAAADQAIgJAIgEQAIgEAMAAQALAAAJAEQAJAFAEAHQADAFABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgHAAgDgEg");
	this.shape_1056.setTransform(145.4,146.5);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("#FF0000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgKAEgKQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgcQgGAEgEAHQgDAIgBAJQABAKADAHQAEAHAGAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgIAAgGADg");
	this.shape_1057.setTransform(132.5,146.5);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAguIgEAAQgGgBgDgCQgEgDAAgDQAAgEAEgDQADgDAHABIADAAIAAgQIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABAEIAAAJIAAASIALAAQAGgBADADQADADAAAEQAAAFgEACQgFACgIAAIgGAAIAAAtIABAIQAAADACADQACACAFAAIAHgBIAHgBQADAAADADQADACAAAEQAAAFgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_1058.setTransform(122.5,144.8);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("#FF0000").s().p("AglA+QgKgFgHgKQgGgJAAgIQAAgFAEgEQAEgDAGAAQAFAAADACQAEAEACAFIAGAKQAEAEAGAEQAGACAKAAQANAAAJgFQAIgGABgJQgBgGgFgEQgEgFgHgCQgIgCgLgCQgQgDgMgFQgLgDgHgJQgGgHAAgMQAAgLAHgIQAGgJAOgFQANgEARgBQAOAAAKADQALAEAGAFQAHAFADAFQAEAGgBAGQAAAEgDAEQgFAEgFAAQgGAAgCgCQgDgDgEgFQgEgIgGgEQgFgEgMAAQgMAAgIAFQgHAEAAAHQgBADADAEQADADAEABIAJAEIAOADIAXAGQALADAHAFQAIADAEAIQAEAGAAALQAAAMgHAJQgIALgNAFQgOAGgTgBQgWABgPgIg");
	this.shape_1059.setTransform(111.3,144.7);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f("#FF0000").s().p("AgbBCQgMgEgGgGQgGgFAAgGQAAgFADgDQAEgCAFAAQAGgBAFAFIAFAFIAFAEIAHADIAKABQAKAAAGgDQAGgCADgGQACgEABgGIAAgSQgGAJgJAEQgJAEgLAAQgOAAgLgHQgKgGgGgMQgGgKAAgPQAAgLAEgKQADgIAHgGQAGgHAJgDQAIgDAKAAQALAAAJAEQAJAEAIAIIAAgCQAAgHAEgEQADgDAGgBQAIAAADAGQADAEAAAJIAABHQAAANgDAJQgDAJgHAGQgHAFgLADQgKADgQABQgOAAgMgEgAgTgqQgHAJAAAPQAAAPAHAGQAIAJALgBQAHAAAHgDQAGgDAEgGQAEgGAAgKQAAgQgIgIQgIgJgMAAQgLABgIAHg");
	this.shape_1060.setTransform(91.7,148.4);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgFQAAgGAEgEQAEgDAFAAQAGAAAEADQAEAEAAAGQAAAFgEADQgEADgGAAQgFAAgEgDg");
	this.shape_1061.setTransform(69.4,144.7);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f("#FF0000").s().p("AgXAvQgKgDgIgIQgHgGgEgJQgEgKAAgLQAAgKAEgKQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgcQgHAEgDAHQgEAIABAJQgBAKAEAHQADAHAHAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgHAAgHADg");
	this.shape_1062.setTransform(48.5,146.5);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEABQgHAAgDACQgDAEgDAFIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1063.setTransform(38.7,146.5);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f("#FF0000").s().p("AgaAuQgLgDgGgHQgFgGAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAGQAFAGAGAEQAGACAKAAQAIAAAFgCQAGgEAAgEQAAgHgGgDQgFgDgNgDQgPgDgIgEQgKgCgFgGQgGgGAAgIQAAgHAFgHQAGgHAKgEQAJgEAOAAQALAAAIACQAKACAFADQAGAEADAEQADAEAAAEQAAAEgDADQgEADgGAAQgDAAgEgDIgHgGQgDgDgEgCQgFgDgHAAQgHAAgFADQgGADAAAEQABAEADACIALAFIAQAEQANADAJAEQAIACAFAGQAEAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgKgFg");
	this.shape_1064.setTransform(22.2,146.5);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#FF0000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgKAEgKQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgcQgHAEgDAHQgEAIAAAJQAAAKAEAHQADAHAHAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgIAAgGADg");
	this.shape_1065.setTransform(9.9,146.5);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f("#FF0000").s().p("AAhBBQgEgDAAgHIAAgCQgGAGgFADQgGADgGACQgGACgIAAQgKAAgIgEQgKgEgGgGQgGgIgEgJQgDgKAAgKQAAgXANgNQANgNAVAAQAMAAAIAEQAJAEAIAHIAAglQAAgHAEgFQADgEAHAAQAGABAEADQADAEAAAHIAABtQAAAHgDADQgFAEgFAAQgGAAgEgEgAgNgIQgGADgEAHQgDAGAAALQAAAKADAHQAEAHAGAEQAHADAGAAQAIAAAGgDQAGgEAEgHQADgHAAgKQAAgKgDgIQgEgGgGgEQgGgDgIgBQgHAAgGAFg");
	this.shape_1066.setTransform(-27.5,144.7);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAguIgEAAQgGgBgDgCQgEgDAAgDQAAgEAEgDQADgDAHABIADAAIAAgQIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABAEIAAAJIAAASIALAAQAGgBADADQADADAAAEQAAAFgEACQgFACgIAAIgGAAIAAAtIABAIQAAADACADQACACAFAAIAHgBIAHgBQADAAADADQADACAAAEQAAAFgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_1067.setTransform(-55.3,144.8);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f("#FF0000").s().p("AAgAvQgEgDgFgIQgKAHgJAFQgJADgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgEIARgDQgBgLgEgEQgEgFgMABQgKAAgGACQgFADgEAFIgGAHQgCACgFAAQgFAAgDgDQgEgDAAgEQAAgGAGgHQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAJAAAOIAAAOIgBANQAAAHADAIIADAKQAAADgEAEQgFADgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAGAEAEQAFADAJAAQAHAAAHgDQAIgDADgFQADgGABgNIAAgEIgSAFg");
	this.shape_1068.setTransform(-78.7,146.5);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAguIgEAAQgGgBgDgCQgEgDAAgDQAAgEAEgDQADgDAHABIADAAIAAgQIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABAEIAAAJIAAASIALAAQAGgBADADQADADAAAEQAAAFgEACQgFACgIAAIgGAAIAAAtIABAIQAAADACADQACACAFAAIAHgBIAHgBQADAAADADQADACAAAEQAAAFgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_1069.setTransform(-88.5,144.8);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f("#FF0000").s().p("AAbAvQgFgEAAgIIAAgoQAAgNgDgGQgEgGgMAAQgHAAgGADQgGAFgDAGQgDAGAAAPIAAAeQAAAIgDAEQgEAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgEQADgDAGAAQAEAAADACIAFAEQACAEAAAEIAAADQAHgJAJgEQAIgEAMAAQALAAAJAEQAJAFAEAHQADAFABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1070.setTransform(-99.1,146.5);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("#FF0000").s().p("AAgAvQgDgDgGgIQgKAHgKAFQgIADgMAAQgLAAgJgEQgIgEgFgHQgEgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgEIAQgDQAAgLgEgEQgEgFgMABQgKAAgGACQgFADgEAFIgGAHQgCACgFAAQgFAAgDgDQgEgDAAgEQAAgGAGgHQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAJAAAOIAAAOIgBANQAAAHADAIIADAKQAAADgEAEQgFADgFAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAGAEAEQAGADAIAAQAHAAAHgDQAIgDADgFQADgGAAgNIAAgEIgSAFg");
	this.shape_1071.setTransform(-111.9,146.5);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEABQgHAAgDACQgDAEgDAFIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1072.setTransform(-157.4,146.5);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("#FF0000").s().p("AgJBBQgEgDAAgIIAAhrQAAgIADgEQAEgEAGAAQAGAAAEAEQAEAEAAAIIAABrQAAAIgEADQgEAEgGAAQgGAAgDgEg");
	this.shape_1073.setTransform(-197.5,144.7);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f("#FF0000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgKAEgKQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgcQgGAEgEAHQgDAIgBAJQABAKADAHQAEAHAGAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgIAAgGADg");
	this.shape_1074.setTransform(-212.2,146.5);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#FF0000").s().p("AAgAvQgEgDgFgIQgKAHgJAFQgJADgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgEIARgDQgBgLgEgEQgEgFgMABQgKAAgGACQgFADgEAFIgGAHQgCACgFAAQgFAAgDgDQgEgDAAgEQAAgGAGgHQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAJAAAOIAAAOIgBANQAAAHADAIIADAKQAAADgEAEQgFADgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAGAEAEQAFADAJAAQAHAAAHgDQAIgDADgFQADgGABgNIAAgEIgSAFg");
	this.shape_1075.setTransform(-238.5,146.5);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEABQgHAAgDACQgDAEgDAFIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1076.setTransform(-248.4,146.5);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#FF0000").s().p("AgDBEIgKgDIgHgGIgIgGIAAACQAAAHgDADQgFAEgFAAQgHAAgDgEQgEgDAAgHIAAhsQAAgHAEgFQADgEAHAAQAGAAAEAEQADAEAAAHIAAAmQAIgIAIgDQAJgEALAAQAOAAALAGQALAGAGALQAGAKAAAQQAAALgEAKQgDAJgGAHQgGAGgJAEQgJAEgLAAQgHAAgEgBgAgMgIQgHADgEAHQgEAHAAAKQABAPAHAIQAIAIAMAAQALAAAIgIQAHgJAAgOQAAgLgDgGQgEgHgFgDQgGgFgIAAQgIAAgFAFg");
	this.shape_1077.setTransform(-260.2,144.7);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f("#FF0000").s().p("AgJBBQgEgDAAgIIAAhrQAAgIADgEQAEgEAGAAQAGAAAEAEQAEAEAAAIIAABrQAAAIgEADQgEAEgGAAQgGAAgDgEg");
	this.shape_1078.setTransform(-282.5,144.7);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#FF0000").s().p("AgPBDQgLgCgHgEQgJgEgGgHQgHgHgDgHQgFgIgCgJQgDgJABgKQgBgPAGgNQAFgNAKgJQAKgJAOgEQANgGAPAAQATABAOAGQAPAHAHAJQAIAJAAAJQAAAFgDADQgFAEgEAAQgHAAgCgCIgHgJQgHgKgIgFQgIgFgMAAQgSAAgLANQgMANAAAWQAAAPAGALQAFALAIAEQAJAGAMgBQANAAAKgFQAJgGAFgLIAEgJQAEgDAGAAQAFAAAFADQADADAAAFQAAAHgDAIQgDAHgJAHQgHAIgMAEQgMAFgQgBQgMAAgJgCg");
	this.shape_1079.setTransform(-306.1,144.7);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDADQgDADgDAGIgDAOIgBARIAAAVQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1080.setTransform(42.9,122.3);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADADAAADQAAAEgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_1081.setTransform(31.2,122.3);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f("#FF0000").s().p("AgbBCQgMgEgGgGQgGgGAAgFQAAgFADgDQAEgDAFABQAGgBAFAFIAFAFIAFAEIAHADIAKABQAKAAAGgDQAGgDADgEQACgFABgGIAAgSQgGAJgJAEQgJAEgLAAQgOAAgLgGQgKgHgGgLQgGgLAAgPQAAgMAEgJQADgIAHgGQAGgHAJgDQAIgDAKAAQALAAAJAEQAJAEAIAIIAAgCQAAgHAEgEQADgDAGgBQAIAAADAGQADAEAAAJIAABHQAAANgDAJQgDAJgHAGQgHAFgLADQgKAEgQAAQgOAAgMgEgAgTgqQgHAJAAAPQAAAPAHAGQAIAJALgBQAHABAHgEQAGgDAEgGQAEgGAAgKQAAgQgIgIQgIgJgMAAQgLABgIAHg");
	this.shape_1082.setTransform(18.3,124.2);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#FF0000").s().p("AgbBCQgMgEgGgGQgGgGAAgFQAAgFADgDQAEgDAFABQAGgBAFAFIAFAFIAFAEIAHADIAKABQAKAAAGgDQAGgDADgEQACgFABgGIAAgSQgGAJgJAEQgJAEgLAAQgOAAgLgGQgKgHgGgLQgGgLAAgPQAAgMAEgJQADgIAHgGQAGgHAJgDQAIgDAKAAQALAAAJAEQAJAEAIAIIAAgCQAAgHAEgEQADgDAGgBQAIAAADAGQADAEAAAJIAABHQAAANgDAJQgDAJgHAGQgHAFgLADQgKAEgQAAQgOAAgMgEgAgTgqQgHAJAAAPQAAAPAHAGQAIAJALgBQAHABAHgEQAGgDAEgGQAEgGAAgKQAAgQgIgIQgIgJgMAAQgLABgIAHg");
	this.shape_1083.setTransform(5.4,124.2);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f("#FF0000").s().p("AAhAvQgFgDgEgIQgLAHgKAFQgIADgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgLAIgHQAHgGANgCIAOgDIARgEIAQgDQAAgLgEgEQgEgFgNABQgKAAgFACQgFADgFAFIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHADAIIACAKQAAADgEAEQgEADgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAFAFQAFADAHAAQAIABAIgEQAGgDAEgFQADgGAAgNIAAgEIgSAFg");
	this.shape_1084.setTransform(-7.1,122.3);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#FF0000").s().p("AgaBBQgKgFgHgJIgFgMQgCgGAAgGQAAgHAEgDQAFgEAGAAQAGAAADAEQADADACAGIAEALQABAFAFADQADACAIAAQAUABAAgbIAAhJQAAgIAEgEQAEgFAIAAQAGAAAFAFQAEAEAAAIIAABGIgBAPQAAAGgEAHQgFALgMAGQgMAHgRAAQgPAAgLgFg");
	this.shape_1085.setTransform(-20.3,120.5);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADADAAADQAAAEgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_1086.setTransform(-37.5,122.3);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#FF0000").s().p("AAbBDIgHgJIgYglIgQAOIAAAUQAAAGgEAEQgFAEgFABQgHgBgEgEQgDgDAAgIIAAhqQAAgIADgEQAEgEAHgBQAGAAAEAFQAEAEAAAHIAAA8IAfgdIAJgIQADgCAFAAQAFAAAEAEQADADAAAEQAAAFgLAKIgPALIAdAoIAFAHIABAEQAAAGgEAEQgDAEgGAAQgGAAgDgDg");
	this.shape_1087.setTransform(-48.7,120.5);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEADgGAAQgFAAgEgDg");
	this.shape_1088.setTransform(-58.2,120.5);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#FF0000").s().p("AgbAuQgKgDgGgHQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAACACIAFAFQAEAHAHAEQAGADAKAAQAIAAAFgDQAGgEAAgEQAAgHgGgDQgFgDgMgDQgPgDgKgEQgJgCgFgGQgGgGAAgIQAAgHAFgHQAGgHAJgEQALgEAOAAQAKAAAIACQAJACAHADQAFAEAEAEQACAEAAAEQABAFgEACQgEADgFAAQgFAAgDgCIgHgHQgDgDgFgDQgEgCgGAAQgJAAgEADQgGADAAAEQABAEADACIALAFIAQAEQAOADAIAEQAIADAEAFQAFAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgPAAgLgFg");
	this.shape_1089.setTransform(13.4,213.8);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f("#FF0000").s().p("AAhAvQgFgDgEgIQgLAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAIgIQAHgGANgCIANgDIASgDIAQgFQAAgJgEgFQgEgFgMAAQgLAAgFADQgGADgEAFIgFAHQgBABgGAAQgFAAgDgCQgEgDAAgEQAAgHAFgGQAGgGALgEQAMgEAQAAQASAAALAEQALAEAEAIQAFAIAAAPIAAANIgBAOQABAHADAIIACAKQAAADgEADQgEAEgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAFAEQAEAFAIAAQAIgBAIgDQAGgDAEgFQAEgGgBgNIAAgEIgSAFg");
	this.shape_1090.setTransform(1.3,213.8);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDACQgDADgDAGIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1091.setTransform(-8.6,213.8);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f("#FF0000").s().p("AgvBDQgGgDAAgGQAAgEADgDQADgCAGAAIAEABIAFAAQAFABADgCQACgBADgDIAFgJIADgGIgkhNQgDgHAAgDIACgFQACgDADgCQADgBAEAAQAGAAADADQAEADACAHIAXA8IAXg3IAFgLQACgFADgBQACgCAFABIAGABQADABACAEIABAEIgBAGIgDAGIglBVQgFALgEAGQgEAHgHADQgIAEgNgBQgNAAgGgCg");
	this.shape_1092.setTransform(-51.4,215.7);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#FF0000").s().p("AAhAvQgFgDgFgIQgKAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIAOgDIARgDIARgEQgBgKgEgFQgEgFgNAAQgJAAgGADQgFACgEAGIgGAHQgCACgFAAQgFAAgDgDQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAKQAAADgEADQgFAEgFAAQgEAAgEgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAFAEAFQAFADAIABQAIgBAHgDQAIgDADgFQADgGABgNIAAgEIgSAFg");
	this.shape_1093.setTransform(250.6,189.6);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgIIAAhGQAAgHAEgEQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEAEAAAGQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_1094.setTransform(228.7,187.8);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#FF0000").s().p("AgbAuQgLgDgFgHQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAGQAFAGAGAEQAGADAJAAQAJAAAFgDQAGgEAAgEQAAgHgGgDQgFgDgMgDQgPgDgKgEQgJgCgFgGQgGgGAAgIQAAgHAFgHQAFgHAKgEQALgEAOAAQAJAAAJACQAJACAHADQAFAEAEAEQACAEAAAEQAAAEgDADQgEADgFAAQgEAAgEgCIgHgHQgDgEgFgBQgEgDgGAAQgJAAgFADQgEADAAAEQAAAEADACIAKAFIARAEQAOACAIAFQAIADAEAFQAFAFAAAHQAAAKgGAIQgFAHgMAEQgLAEgQAAQgOAAgMgFg");
	this.shape_1095.setTransform(219.9,189.6);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f("#FF0000").s().p("AAcBBQgEgEAAgHIAAgDIgKAKQgHAEgGACQgGABgIAAQgLAAgIgDQgIgEgFgHQgFgIAAgPIAAgwQAAgIAEgDQAEgEAGAAQAGAAAEAEQAFADAAAIIAAAnQAAAJABAFQACAGAFAEQAEADAHAAQAHAAAFgEQAHgDADgHQADgFAAgSIAAgdQAAgIADgDQAEgEAHAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgDAEgHAAQgFAAgEgEgAgUgtQAAgBADgEIAFgIQAEgGADgCQADgCAFAAIAOAAQAGAAAAABIgGAGIgMAKIgHAGQgHADgHAAQgEAAAAgDg");
	this.shape_1096.setTransform(207.6,187.8);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#FF0000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgBgEgEgEQgEgEgGABQgGAAgFADQgFADgDAFQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgEgEQgFgEAAgIIAAgnIgBgPQAAgEgDgEQgEgEgGABQgPgBgEAJQgEAJgBAOIAAAiQAAAIgDAEQgFAEgGAAQgGAAgFgEQgEgEAAgIIAAhHQAAgGAEgEQAEgEAFAAQAHAAADAEQAFADAAAGIAAACQAHgHAJgEQAIgDAKAAQALAAAIADQAGAEAFAHQAIgHAIgEQAIgDAKAAQAMAAAIADQAJAEAEAIQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgGAAgFgEg");
	this.shape_1097.setTransform(191.7,189.6);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f("#FF0000").s().p("AgbAuQgLgDgFgHQgFgGAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAGQAEAGAHAEQAGADAJAAQAJAAAGgDQAFgEAAgEQAAgHgFgDQgHgDgLgDQgPgDgKgEQgJgCgGgGQgFgGAAgIQAAgHAFgHQAFgHAKgEQALgEAOAAQAJAAAKACQAJACAGADQAFAEAEAEQADAEAAAEQgBAEgDADQgDADgHAAQgEAAgDgCIgHgHQgDgEgFgBQgEgDgGAAQgIAAgGADQgEADAAAEQgBAEAEACIAKAFIARAEQANACAJAFQAIADAEAFQAFAFAAAHQAAAKgGAIQgFAHgMAEQgLAEgPAAQgPAAgMgFg");
	this.shape_1098.setTransform(158,189.6);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#FF0000").s().p("AAhBCQgEgEAAgHIAAgDQgFAHgGADQgGADgHACQgFACgHAAQgLAAgIgDQgJgEgHgHQgGgIgDgJQgEgKAAgKQAAgXANgNQANgNAWAAQALAAAIADQAJAFAIAHIAAglQAAgHADgFQAEgDAGAAQAHAAAEADQADADAAAIIAABtQAAAHgDAEQgFADgGAAQgFAAgEgDgAgNgIQgHADgDAHQgDAGAAALQAAAJADAIQAEAGAGAFQAHADAGAAQAHAAAHgDQAGgEAEgHQADgHABgKQgBgKgDgIQgEgGgGgEQgHgDgHgBQgHAAgGAFg");
	this.shape_1099.setTransform(127.1,187.8);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f("#FF0000").s().p("AAhBCQgEgEAAgHIAAgDQgFAHgGADQgGADgHACQgFACgHAAQgLAAgIgDQgKgEgGgHQgGgIgEgJQgDgKAAgKQAAgXANgNQANgNAWAAQALAAAIADQAJAFAIAHIAAglQAAgHADgFQAEgDAHAAQAGAAAEADQADADAAAIIAABtQAAAHgDAEQgFADgFAAQgGAAgEgDgAgNgIQgHADgDAHQgDAGAAALQAAAJADAIQAEAGAGAFQAHADAGAAQAHAAAHgDQAGgEAEgHQADgHABgKQgBgKgDgIQgEgGgGgEQgHgDgHgBQgHAAgGAFg");
	this.shape_1100.setTransform(82.2,187.8);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgIIAAhGQAAgHAEgEQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEAEAAAGQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_1101.setTransform(72.9,187.8);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f("#FF0000").s().p("AAgAvQgDgDgGgIQgKAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAIgIQAHgGANgCIANgDIASgDIAQgEQAAgKgEgFQgEgFgMAAQgLAAgFADQgGACgEAGIgFAHQgBACgGAAQgFAAgDgDQgEgCAAgFQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHAEAIIACAKQAAADgEADQgEAEgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAFAEAFQAGADAIABQAHgBAIgDQAGgDAEgFQAEgGgBgNIAAgEIgSAFg");
	this.shape_1102.setTransform(57.9,189.6);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#FF0000").s().p("AgJBCQgEgEAAgIIAAhrQAAgIADgEQAEgDAGAAQAGAAAEADQAEAEAAAIIAABrQAAAIgEAEQgEADgGAAQgGAAgDgDg");
	this.shape_1103.setTransform(18,187.8);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f("#FF0000").s().p("AAgAvQgDgDgGgIQgKAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgDIAQgEQAAgKgEgFQgEgFgMAAQgKAAgGADQgGACgDAGIgGAHQgCACgFAAQgFAAgDgDQgEgCAAgFQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHAEAIIACAKQAAADgEADQgEAEgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAFAEAFQAGADAIABQAHgBAIgDQAGgDAEgFQADgGAAgNIAAgEIgSAFg");
	this.shape_1104.setTransform(3.4,189.6);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#FF0000").s().p("AgaAuQgLgDgGgHQgFgGAAgGQAAgEADgDQADgDAGAAQAEAAACACIAFAGQAFAGAGAEQAGADAKAAQAIAAAFgDQAGgEAAgEQAAgHgGgDQgGgDgMgDQgPgDgIgEQgKgCgGgGQgFgGAAgIQAAgHAFgHQAGgHAKgEQAJgEAOAAQAKAAAKACQAIACAGADQAGAEADAEQADAEABAEQAAAEgEADQgEADgGAAQgDAAgEgCIgHgHQgDgEgEgBQgFgDgHAAQgHAAgFADQgFADgBAEQAAAEAEACIALAFIAQAEQANACAJAFQAIADAFAFQAEAFAAAHQAAAKgGAIQgFAHgMAEQgLAEgPAAQgQAAgKgFg");
	this.shape_1105.setTransform(-14.2,189.6);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f("#FF0000").s().p("AAhAvQgEgDgFgIQgLAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIAOgDIARgDIARgEQgBgKgEgFQgEgFgNAAQgJAAgGADQgFACgFAGIgFAHQgCACgFAAQgFAAgDgDQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAKQAAADgEADQgFAEgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAFAFAFQAFADAHABQAIgBAHgDQAIgDADgFQAEgGAAgNIAAgEIgSAFg");
	this.shape_1106.setTransform(-26.3,189.6);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgIIAAhGQAAgHAEgEQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEAEAAAGQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_1107.setTransform(-35.5,187.8);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f("#FF0000").s().p("AgbAuQgLgDgFgHQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAGQAFAGAGAEQAGADAJAAQAJAAAGgDQAFgEAAgEQAAgHgFgDQgHgDgLgDQgPgDgKgEQgJgCgGgGQgFgGAAgIQAAgHAFgHQAFgHAKgEQALgEAOAAQAJAAAJACQAJACAHADQAFAEAEAEQACAEAAAEQAAAEgDADQgDADgGAAQgFAAgDgCIgHgHQgDgEgFgBQgEgDgGAAQgIAAgGADQgEADAAAEQgBAEAEACIAKAFIARAEQAOACAIAFQAIADAEAFQAFAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgOAAgMgFg");
	this.shape_1108.setTransform(-97,189.6);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f("#FF0000").s().p("AgbA9QgNgIgGgOQgEgIgBgJQgCgJAAgLQAAgNACgKQACgMADgHQAGgOAMgHQAMgHAQABQAKAAAJADQAJACAGAHQAHAFAFAJQAIAPAAAaQAAAPgCALQgDALgFAJQgHALgMAFQgLAHgOAAQgPgBgMgHgAgSglQgGAMAAAZQAAARACALQADALAFAFQAGAGAIAAQAKAAAFgGQAGgGACgLQACgLAAgQQAAgRgCgLQgDgKgFgGQgGgFgJAAQgNAAgFAMg");
	this.shape_1109.setTransform(-109.1,187.8);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f("#FF0000").s().p("AgdA/QgMgFgGgJQgHgJABgMQAAgZAbgIQgWgJAAgTQAAgJAGgIQAFgIAMgFQAKgFAPABQAMAAAJACQAKADAGAFQAGAFADAGQADAGAAAHQAAAKgFAGQgFAIgLAEQAJADAGAEQAFAFAEAHQADAGAAAHQgBAMgGAKQgGAJgMAFQgNAGgQAAQgRAAgNgGgAgRAJQgIAHABALQgBAHAEAGQADAFAGADQAGADAGAAQAIAAAFgDQAHgDACgFQAEgGAAgHQAAgHgEgFQgDgGgGgCQgGgDgHAAQgKAAgHAFgAgPgtQgGAFAAAJQAAAIAGAFQAGAFAJAAQAFAAAEgCQAEgBADgCQADgDACgDQABgDAAgEQAAgGgDgEQgDgFgEgCQgFgCgHAAQgJAAgGAFg");
	this.shape_1110.setTransform(-121.8,187.8);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f("#FF0000").s().p("AgaAuQgLgDgGgHQgFgGAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAGQAFAGAGAEQAGADAKAAQAIAAAFgDQAGgEAAgEQAAgHgGgDQgFgDgNgDQgPgDgIgEQgKgCgFgGQgGgGAAgIQAAgHAFgHQAGgHAKgEQAJgEAOAAQALAAAIACQAKACAFADQAGAEADAEQADAEAAAEQAAAEgDADQgEADgGAAQgDAAgEgCIgHgHQgDgEgEgBQgFgDgHAAQgHAAgFADQgGADAAAEQABAEADACIALAFIAQAEQANACAJAFQAIADAFAFQAEAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgPAAgKgFg");
	this.shape_1111.setTransform(-139.4,189.6);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f("#FF0000").s().p("AgWAvQgLgDgHgIQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgbQgHAEgDAGQgEAIAAAJQAAAKAEAHQADAHAHAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgIAAgGAEg");
	this.shape_1112.setTransform(-151.6,189.6);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f("#FF0000").s().p("AgJBCQgEgEAAgIIAAhrQAAgIADgEQAEgDAGAAQAGAAAEADQAEAEAAAIIAABrQAAAIgEAEQgEADgGAAQgGAAgDgDg");
	this.shape_1113.setTransform(-161,187.8);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f("#FF0000").s().p("AAhBCQgEgEAAgHIAAgDQgGAHgFADQgGADgGACQgGACgIAAQgKAAgIgDQgKgEgGgHQgGgIgEgJQgDgKAAgKQAAgXANgNQANgNAVAAQAMAAAIADQAJAFAIAHIAAglQAAgHAEgFQADgDAHAAQAGAAAEADQADADAAAIIAABtQAAAHgDAEQgFADgFAAQgGAAgEgDgAgNgIQgGADgEAHQgDAGAAALQAAAJADAIQAEAGAGAFQAHADAGAAQAIAAAGgDQAGgEAEgHQADgHAAgKQAAgKgDgIQgEgGgGgEQgGgDgIgBQgHAAgGAFg");
	this.shape_1114.setTransform(-189,187.8);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f("#FF0000").s().p("AgaAuQgLgDgGgHQgFgGAAgGQAAgEADgDQADgDAGAAQAEAAACACIAFAGQAFAGAGAEQAGADAJAAQAJAAAGgDQAFgEAAgEQAAgHgFgDQgHgDgMgDQgPgDgIgEQgKgCgGgGQgFgGAAgIQAAgHAFgHQAFgHALgEQAKgEANAAQAKAAAKACQAIACAGADQAGAEADAEQAEAEAAAEQAAAEgEADQgDADgHAAQgEAAgDgCIgHgHQgDgEgEgBQgFgDgHAAQgIAAgFADQgEADgBAEQAAAEAEACIAKAFIARAEQANACAJAFQAIADAFAFQAEAFAAAHQAAAKgGAIQgFAHgMAEQgLAEgPAAQgPAAgLgFg");
	this.shape_1115.setTransform(-201.3,189.6);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f("#FF0000").s().p("AAhBCQgEgEAAgHIAAgDQgGAHgFADQgGADgHACQgFACgHAAQgLAAgJgDQgIgEgHgHQgGgIgDgJQgEgKAAgKQAAgXAOgNQANgNAVAAQALAAAJADQAIAFAIAHIAAglQAAgHADgFQAEgDAGAAQAHAAADADQAEADAAAIIAABtQAAAHgEAEQgDADgHAAQgFAAgEgDgAgNgIQgGADgDAHQgEAGAAALQAAAJAEAIQADAGAGAFQAGADAHAAQAIAAAGgDQAGgEAEgHQAEgHAAgKQAAgKgEgIQgEgGgGgEQgGgDgIgBQgHAAgGAFg");
	this.shape_1116.setTransform(-226.8,187.8);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#FF0000").s().p("AAgAvQgEgDgFgIQgKAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIAOgDIARgDIARgEQgBgKgEgFQgEgFgNAAQgJAAgGADQgFACgEAGIgGAHQgCACgFAAQgFAAgDgDQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAKQAAADgEADQgFAEgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAFAEAFQAFADAIABQAIgBAHgDQAIgDADgFQADgGABgNIAAgEIgSAFg");
	this.shape_1117.setTransform(-244.9,189.6);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f("#FF0000").s().p("AgaAuQgLgDgGgHQgFgGAAgGQAAgEADgDQADgDAGAAQAEAAACACIAFAGQAFAGAGAEQAGADAJAAQAJAAAGgDQAFgEAAgEQAAgHgFgDQgHgDgMgDQgPgDgIgEQgKgCgGgGQgFgGAAgIQAAgHAFgHQAFgHALgEQAKgEANAAQAKAAAKACQAIACAGADQAGAEADAEQAEAEAAAEQAAAEgEADQgDADgHAAQgEAAgDgCIgHgHQgDgEgEgBQgFgDgHAAQgIAAgFADQgEADgBAEQAAAEAEACIAKAFIARAEQANACAJAFQAIADAFAFQAEAFAAAHQAAAKgGAIQgFAHgMAEQgLAEgPAAQgPAAgLgFg");
	this.shape_1118.setTransform(-257.1,189.6);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f("#FF0000").s().p("AgXAvQgKgDgIgIQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgbQgGAEgEAGQgDAIAAAJQAAAKADAHQAEAHAGAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgHAAgHAEg");
	this.shape_1119.setTransform(-269.3,189.6);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgIIAAhGQAAgHAEgEQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEAEAAAGQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_1120.setTransform(-286.3,187.8);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f("#FF0000").s().p("AAcAxQgDgDgEgFIgVgbIgUAbIgIAIQgDACgFAAQgFAAgEgDQgEgDAAgEQAAgEAFgIIAbgeIgYgbQgFgIAAgEQgBgEAEgDQAEgDAFAAQAGAAADADIAIAIIARAVIASgVIAIgIQADgDAFAAQAGAAAEADQADADAAAEIgBAFIgFAHIgXAbIAaAeQAGAJAAADQAAAEgEADQgDADgGAAQgFAAgEgCg");
	this.shape_1121.setTransform(-294.8,189.6);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f("#FF0000").s().p("AgmAlQgPgOAAgXQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADABQADADAAAEQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_1122.setTransform(-306.5,189.6);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#FF0000").s().p("AgaAuQgLgDgGgHQgFgGAAgGQAAgEADgDQADgDAGAAQAEAAACACIAFAGQAFAGAGAEQAGACAKAAQAIAAAGgCQAFgEAAgEQAAgHgFgDQgHgDgMgDQgPgDgIgEQgKgCgGgGQgFgGAAgIQAAgIAFgGQAFgHALgEQAKgEANAAQAKAAAKACQAIACAGADQAGAEADAEQAEAEAAAEQAAAEgEADQgDADgHAAQgEAAgDgDIgHgGQgDgDgEgCQgFgDgHAAQgIAAgFADQgEADgBAEQAAAEAEACIAKAFIARAEQANADAJAEQAIACAFAGQAEAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgPAAgLgFg");
	this.shape_1123.setTransform(231.6,165.4);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f("#FF0000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgcQgGAEgEAHQgDAIgBAJQABAKADAHQAEAHAGAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgHAAgHADg");
	this.shape_1124.setTransform(214,165.4);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f("#FF0000").s().p("AAhBBQgEgDAAgHIAAgCQgFAGgGADQgGADgHACQgFACgHAAQgLAAgIgEQgJgEgHgGQgGgIgDgJQgEgKAAgKQAAgXANgNQANgNAWAAQALAAAIAEQAJAEAIAHIAAglQAAgHADgFQAEgEAGAAQAHABAEADQADAEAAAHIAABtQAAAHgDADQgFAEgGAAQgFAAgEgEgAgNgIQgHADgDAHQgDAGAAALQAAAKADAHQAEAHAGAEQAHADAGAAQAHAAAHgDQAGgEAEgHQADgHABgKQgBgKgDgIQgEgGgGgEQgHgDgHgBQgHAAgGAFg");
	this.shape_1125.setTransform(200.5,163.6);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f("#FF0000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgcQgHAEgDAHQgDAIgBAJQABAKADAHQADAHAHAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgHAAgHADg");
	this.shape_1126.setTransform(152.9,165.4);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f("#FF0000").s().p("AAgAvQgDgDgGgIQgKAHgKAFQgIADgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgEIAQgDQAAgLgEgEQgEgFgMABQgKAAgGACQgGADgDAFIgGAHQgCACgFAAQgFAAgDgDQgEgDAAgEQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAJAAAOIAAAOIgBANQAAAHAEAIIACAKQAAADgEAEQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAGAEAEQAGADAIAAQAHAAAIgDQAGgDAEgFQADgGAAgNIAAgEIgSAFg");
	this.shape_1127.setTransform(128.9,165.4);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f("#FF0000").s().p("AAWA2IAAgqQAAgMgDgGQgFgGgLAAQgGAAgHAEQgGADgDAGQgCAGAAAOIAAAhQAAAIgEADQgEAEgHAAQgOAAAAgPIAAhrQAAgIAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAIIAAAlQAFgFAFgEQAGgDAFgCQAGgCAHAAQAMAAAIAFQAIADAFAJQADAEABAFIABAMIAAAwQAAAIgEADQgEAEgGAAQgPAAAAgPg");
	this.shape_1128.setTransform(116.1,163.6);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#FF0000").s().p("AAcAvQgEgDAAgIIAAgDIgLAKQgFAEgHACQgGABgJABQgKgBgIgDQgIgEgEgHQgGgHAAgPIAAgxQAAgIAEgDQAEgEAGAAQAGAAAFAEQADADAAAIIAAAnQABAJABAFQACAHAEADQAEADAIABQAGAAAHgFQAGgDADgHQADgEgBgRIAAgfQAAgIAFgDQAEgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAIgEADQgEAEgFAAQgHAAgDgEg");
	this.shape_1129.setTransform(85.2,165.4);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f("#FF0000").s().p("AgaAuQgMgDgFgHQgFgGAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAGQAEAGAHAEQAGACAJAAQAJAAAGgCQAFgEAAgEQAAgHgFgDQgHgDgLgDQgQgDgIgEQgKgCgGgGQgFgGAAgIQAAgIAFgGQAFgHALgEQAKgEAOAAQAJAAAKACQAIACAGADQAGAEADAEQAEAEAAAEQgBAEgDADQgDADgHAAQgEAAgDgDIgHgGQgDgDgEgCQgFgDgGAAQgJAAgFADQgEADAAAEQAAAEADACIAKAFIARAEQANADAJAEQAIACAFAGQAEAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgPAAgLgFg");
	this.shape_1130.setTransform(54,165.4);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#FF0000").s().p("AAhBBQgEgDAAgHIAAgCQgFAGgGADQgGADgHACQgFACgHAAQgLAAgIgEQgJgEgHgGQgGgIgDgJQgEgKAAgKQAAgXAOgNQAMgNAWAAQALAAAIAEQAJAEAIAHIAAglQAAgHADgFQAEgEAGAAQAHABADADQAEAEAAAHIAABtQAAAHgEADQgDAEgHAAQgFAAgEgEgAgNgIQgHADgCAHQgEAGAAALQAAAKAEAHQADAHAGAEQAHADAGAAQAIAAAGgDQAGgEAEgHQAEgHAAgKQAAgKgEgIQgEgGgGgEQgGgDgIgBQgHAAgGAFg");
	this.shape_1131.setTransform(28.5,163.6);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f("#FF0000").s().p("AAbAvQgFgEAAgIIAAgoQAAgNgDgGQgEgGgMAAQgHAAgGADQgGAFgDAGQgDAGAAAPIAAAeQAAAIgDAEQgEAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgEQADgDAGAAQAEAAADACIAFAEQACAEAAAEIAAADQAHgJAJgEQAIgEAMAAQALAAAJAEQAJAFAFAHQACAFABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1132.setTransform(15.6,165.4);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#FF0000").s().p("AAgAvQgDgDgGgIQgKAHgKAFQgIADgMAAQgLAAgJgEQgIgEgFgHQgEgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgEIAQgDQAAgLgEgEQgEgFgMABQgKAAgGACQgFADgEAFIgGAHQgCACgFAAQgFAAgDgDQgEgDAAgEQAAgGAGgHQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAJAAAOIAAAOIgBANQAAAHADAIIADAKQAAADgEAEQgFADgFAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAGAEAEQAGADAIAAQAHAAAHgDQAIgDADgFQADgGAAgNIAAgEIgSAFg");
	this.shape_1133.setTransform(2.8,165.4);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f("#FF0000").s().p("AgDBEIgKgDIgHgGIgIgGIAAACQAAAHgDADQgFAEgFAAQgHAAgDgEQgEgDAAgHIAAhsQAAgHAEgFQADgEAHAAQAGAAAEAEQADAEAAAHIAAAmQAIgIAIgDQAJgEALAAQAOAAALAGQALAGAGALQAGAKAAAQQAAALgEAJQgDAKgGAHQgGAGgJAEQgJAEgLAAQgHAAgEgBgAgMgIQgHADgEAHQgEAHAAAKQABAPAHAIQAIAIAMAAQALAAAIgIQAHgJAAgOQAAgLgDgGQgEgHgFgDQgGgFgIAAQgIAAgFAFg");
	this.shape_1134.setTransform(-10,163.6);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f("#FF0000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgcQgHAEgDAHQgDAIgBAJQABAKADAHQADAHAHAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgHAAgHADg");
	this.shape_1135.setTransform(-65.8,165.4);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f("#FF0000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgHAEgEQADgDAHgBQAGAAAEAFQADADAAAHIAAACQAIgIAJgEQAJgEAJAAQAOAAALAGQALAGAGALQAHAMAAAQQAAALgEAIQgEAKgGAHQgHAGgJAEQgIADgLAAQgLABgIgFQgJgFgHgHIAAAlQAAAQgNABQgJAAgCgFgAgTgqQgHAJgBAQQABAPAHAGQAJAJALAAQAHAAAGgDQAGgEADgGQAEgIAAgKQAAgKgDgHQgEgHgGgEQgGgDgHgBQgLABgJAHg");
	this.shape_1136.setTransform(-78.7,167.3);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f("#FF0000").s().p("AgaAuQgLgDgGgHQgFgGAAgGQAAgEADgDQADgDAGAAQAEAAACACIAFAGQAFAGAGAEQAGACAKAAQAIAAAFgCQAGgEAAgEQAAgHgGgDQgGgDgMgDQgPgDgIgEQgKgCgGgGQgFgGAAgIQAAgIAFgGQAGgHAKgEQAJgEAOAAQAKAAAKACQAIACAGADQAGAEADAEQADAEABAEQAAAEgEADQgEADgGAAQgDAAgEgDIgHgGQgDgDgEgCQgFgDgHAAQgHAAgFADQgFADgBAEQAAAEAEACIALAFIAQAEQANADAJAEQAIACAFAGQAEAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgQAAgKgFg");
	this.shape_1137.setTransform(-97,165.4);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f("#FF0000").s().p("AAhAvQgEgDgFgIQgLAHgJAFQgJADgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIAOgDIARgEIARgDQgBgLgEgEQgEgFgNABQgJAAgGACQgFADgFAFIgFAHQgCACgFAAQgFAAgDgDQgEgDAAgEQAAgGAFgHQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAJAAAOIAAAOIAAANQAAAHACAIIADAKQAAADgEAEQgFADgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAGAFAEQAFADAHAAQAIAAAHgDQAIgDADgFQAEgGAAgNIAAgEIgSAFg");
	this.shape_1138.setTransform(-109.1,165.4);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgBgEgBQgHAAgDADQgDAEgDAFIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1139.setTransform(-174.2,165.4);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f("#FF0000").s().p("AgaAuQgLgDgGgHQgFgGAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAGQAFAGAGAEQAGACAKAAQAIAAAFgCQAGgEAAgEQAAgHgGgDQgFgDgNgDQgPgDgIgEQgKgCgFgGQgGgGAAgIQAAgIAFgGQAGgHAKgEQAJgEAOAAQALAAAIACQAKACAFADQAGAEADAEQADAEAAAEQAAAEgDADQgEADgGAAQgDAAgEgDIgHgGQgDgDgEgCQgFgDgHAAQgHAAgFADQgGADAAAEQABAEADACIALAFIAQAEQANADAJAEQAIACAFAGQAEAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgKgFg");
	this.shape_1140.setTransform(-211.4,165.4);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgBgEgBQgHAAgDADQgDAEgDAFIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1141.setTransform(-220.7,165.4);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f("#FF0000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgHAEgEQADgDAHgBQAFAAAEAFQAEADAAAHIAAACQAJgIAIgEQAJgEAJAAQAOAAALAGQALAGAGALQAHAMAAAQQAAALgEAIQgEAKgGAHQgHAGgIAEQgJADgLAAQgKABgJgFQgJgFgHgHIAAAlQAAAQgNABQgJAAgCgFgAgTgqQgHAJAAAQQAAAPAHAGQAJAJALAAQAHAAAGgDQAGgEADgGQAEgIAAgKQAAgKgDgHQgDgHgHgEQgGgDgHgBQgLABgJAHg");
	this.shape_1142.setTransform(-245.1,167.3);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f("#FF0000").s().p("Ag2BAQgDgEAAgIIAAhnQAAgJAEgEQAEgDALAAIAnAAQARAAAKACQAKACAGAGQAIAFADAIQADAHABAKQAAAUgPAKQgOAKgdAAIgcAAIAAAmQABAJgFAEQgEAEgHAAQgHAAgFgEgAgbgGIAWAAQAJAAAIgCQAHgCAEgFQAEgEAAgIQAAgJgGgFQgHgGgTAAIgWAAg");
	this.shape_1143.setTransform(-284,163.7);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f("#FF0000").s().p("AgJBCQgEgFAAgHIAAhsQAAgHADgEQAEgDAGAAQAGAAAEADQAEAEAAAHIAABsQAAAHgEAFQgEADgGAAQgGAAgDgDg");
	this.shape_1144.setTransform(250.6,139.4);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#FF0000").s().p("AgJBCQgEgFAAgHIAAhsQAAgHADgEQAEgDAGAAQAGAAAEADQAEAEAAAHIAABsQAAAHgEAFQgEADgGAAQgGAAgDgDg");
	this.shape_1145.setTransform(244.8,139.4);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f("#FF0000").s().p("AAXA2IAAgqQAAgMgFgFQgDgHgMAAQgHAAgGAEQgGAEgDAFQgCAGAAAOIAAAhQAAAHgEAFQgEADgHAAQgOAAAAgPIAAhsQAAgHAEgEQAEgDAGAAQAHAAAEADQAEAEAAAHIAAAmQAFgFAGgEQAEgDAGgCQAGgBAIAAQAKAAAJADQAIAFAFAIQADAEABAGIABALIAAAwQAAAHgEAFQgEADgGAAQgOAAAAgPg");
	this.shape_1146.setTransform(229.7,139.4);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#FF0000").s().p("AgPBEQgLgCgHgFQgIgFgIgGQgFgGgEgJQgFgHgCgJQgCgJgBgKQABgPAFgNQAGgNAJgJQAKgJAOgFQAOgEAOAAQASgBAPAHQAPAGAHAKQAIAJAAAJQAAAFgDADQgFAEgEAAQgHAAgCgDIgIgIQgFgKgJgFQgIgFgMAAQgSAAgLANQgMAMAAAXQAAAPAFALQAFALAKAEQAIAFAMABQANAAAKgGQAJgGAFgLIAFgJQADgDAGAAQAFAAAFADQADAEAAAEQABAHgEAIQgEAHgHAHQgIAHgMAFQgMAEgQAAQgLAAgKgBg");
	this.shape_1147.setTransform(215.2,139.4);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f("#FF0000").s().p("AAmBBQgEgEAAgJIAAgtIhDAAIAAAtQAAAJgEAEQgEAEgHAAQgHAAgFgEQgEgEAAgJIAAhoQAAgJAEgEQAFgDAHAAQAHAAAEADQAEAEAAAJIAAAnIBDAAIAAgnQAAgJAEgEQAEgDAHAAQAHAAAEADQAFAEAAAJIAABoQAAAJgFAEQgEAEgHAAQgHAAgEgEg");
	this.shape_1148.setTransform(173.2,139.4);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#FF0000").s().p("AAhBCQgEgEAAgHIAAgDQgFAHgGADQgGAEgHACQgFABgHAAQgLAAgIgDQgJgFgHgHQgGgGgDgKQgEgKAAgLQAAgWAOgNQAMgNAWAAQALAAAIADQAJAFAIAHIAAglQAAgIADgEQAEgDAGAAQAHgBADAEQAEADAAAIIAABtQAAAHgEAEQgDADgHAAQgFAAgEgDgAgNgJQgHAEgCAHQgEAHAAAJQAAALAEAGQADAHAGAFQAHADAGAAQAIAAAGgDQAGgEAEgHQAEgHAAgLQAAgJgEgIQgEgGgGgEQgGgDgIAAQgHAAgGADg");
	this.shape_1149.setTransform(152.7,139.4);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f("#FF0000").s().p("AAoBCQgDgCgDgEIgHgJIgMgSQgHgKgFgGQgFgFgFgCQgGgCgIAAIgLAAIAAArQAAAJgEAEQgFAEgGAAQgIAAgEgEQgEgEAAgJIAAhmQAAgJAFgEQAEgDAKAAIAyAAIASAAIANADQAHADAGAFQAGAFADAHQACAGAAAHQAAAPgKAJQgJAIgUAEQAIAEAIAHIANARQAGAIAEAHQADAHAAACQAAADgCACQgCADgDACQgDABgFAAQgGAAgDgCgAgggKIAcAAQALAAAHgCQAIgCADgEQAEgEABgHQgBgFgDgFQgDgEgGgCQgFgCgPAAIgdAAg");
	this.shape_1150.setTransform(126.7,139.5);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#FF0000").s().p("AAhAvQgFgEgFgHQgKAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgIQAAgJAHgIQAIgGANgDIAOgCIARgDIARgFQgBgJgEgFQgEgEgNgBQgJABgGACQgFACgEAGIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAJQAAAFgEACQgFAEgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAEAEQAFAFAIAAQAIgBAHgDQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_1151.setTransform(75.5,141.3);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f("#FF0000").s().p("AAgAvQgEgEgEgHQgLAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgIQAAgJAHgIQAIgGANgDIAOgCIARgDIARgFQgBgJgEgFQgEgEgNgBQgJABgGACQgFACgEAGIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAJQAAAFgEACQgFAEgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAFAEQAEAFAIAAQAIgBAHgDQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_1152.setTransform(49.9,141.3);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f("#FF0000").s().p("AAbAvQgFgEAAgHIAAgpQAAgNgDgGQgFgHgLAAQgHABgGAEQgGAEgEAGQgCAGAAAOIAAAgQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgDQAEgEAGAAQAEAAADABIAFAGQACACAAAFIAAADQAHgJAKgDQAHgFAMAAQALAAAJAFQAJAEAFAHQACAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1153.setTransform(31.3,141.3);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f("#FF0000").s().p("AgXAvQgKgEgIgHQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgbQgHADgDAHQgEAIABAJQgBAKAEAHQADAIAHADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgHAAgHAFg");
	this.shape_1154.setTransform(9,141.3);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f("#FF0000").s().p("AgPBCQgEgFAAgHIAAhBIgIAAQgHAAgDgCQgEgDAAgEQAAgJAPAAIAHAAIAAgIQAAgMADgGQADgHAJgDQAHgDAOAAQAZAAAAAKQAAAEgDACQgCACgEABIgGgBIgHAAQgHAAgDADQgCAEAAAIIAAAGIAHAAQARAAAAAJQAAAFgFADQgEABgIAAIgHAAIAABBQAAAHgEAFQgEADgFAAQgGAAgEgDg");
	this.shape_1155.setTransform(-0.4,139.4);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f("#FF0000").s().p("AgJBCQgEgFAAgHIAAhsQAAgHADgEQAEgDAGAAQAGAAAEADQAEAEAAAHIAABsQAAAHgEAFQgEADgGAAQgGAAgDgDg");
	this.shape_1156.setTransform(-13.1,139.4);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f("#FF0000").s().p("AAgAvQgDgEgGgHQgKAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgIQAAgJAHgIQAIgGANgDIANgCIASgDIAQgFQAAgJgEgFQgEgEgMgBQgKABgGACQgGACgDAGIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAGgFQAFgHALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHAEAIIACAJQAAAFgEACQgEAEgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAGAFAIAAQAHgBAIgDQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_1157.setTransform(-22.3,141.3);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f("#FF0000").s().p("AAgAvQgDgEgGgHQgKAIgKADQgIAEgMAAQgLAAgJgEQgIgEgFgHQgEgGAAgIQAAgJAHgIQAIgGANgDIANgCIASgDIAQgFQAAgJgEgFQgEgEgMgBQgKABgGACQgFACgEAGIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAGgFQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHADAIIADAJQAAAFgEACQgFAEgFAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAGAFAIAAQAHgBAHgDQAIgDADgFQADgGAAgNIAAgDIgSAEg");
	this.shape_1158.setTransform(-53,141.3);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f("#FF0000").s().p("AAhBCQgEgEAAgHIAAgDQgFAHgGADQgGAEgHACQgFABgHAAQgLAAgIgDQgJgFgHgHQgGgGgDgKQgEgKAAgLQAAgWANgNQANgNAWAAQALAAAIADQAJAFAIAHIAAglQAAgIADgEQAEgDAGAAQAHgBAEAEQADADAAAIIAABtQAAAHgDAEQgFADgGAAQgFAAgEgDgAgNgJQgHAEgDAHQgDAHAAAJQAAALADAGQAEAHAGAFQAHADAGAAQAHAAAHgDQAGgEAEgHQADgHABgLQgBgJgDgIQgEgGgGgEQgHgDgHAAQgHAAgGADg");
	this.shape_1159.setTransform(-66.4,139.4);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f("#FF0000").s().p("AAbAvQgEgEgBgHIAAgpQAAgNgEgGQgDgHgMAAQgHABgGAEQgGAEgDAGQgCAGgBAOIAAAgQAAAHgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAEAAADABIAFAGQACACAAAFIAAADQAHgJAJgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgHAAgDgEg");
	this.shape_1160.setTransform(-79.2,141.3);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f("#FF0000").s().p("AAgAvQgDgEgGgHQgKAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgIQAAgJAHgIQAIgGANgDIANgCIASgDIAQgFQAAgJgEgFQgEgEgMgBQgKABgGACQgGACgDAGIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAGgFQAFgHALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHAEAIIACAJQAAAFgEACQgEAEgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAGAFAIAAQAHgBAIgDQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_1161.setTransform(-92,141.3);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f("#FF0000").s().p("AgEBEIgJgDIgHgGIgIgHIAAADQAAAHgDAEQgEADgGAAQgHAAgDgDQgEgEAAgHIAAhsQAAgIAEgEQADgDAHAAQAGAAAEADQADAEAAAHIAAAmQAJgIAHgDQAJgEALAAQAOAAALAGQALAFAGAMQAGAKAAAPQAAAMgEAKQgDAJgGAGQgGAHgJAFQgJADgLAAQgHABgFgCgAgNgJQgGAEgEAHQgEAHAAAKQABAPAHAIQAIAIAMAAQAKAAAJgIQAHgIAAgQQAAgJgDgHQgEgHgFgEQgGgDgIAAQgIAAgGADg");
	this.shape_1162.setTransform(-104.8,139.4);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f("#FF0000").s().p("AAgAvQgDgEgGgHQgKAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgIQAAgJAHgIQAIgGANgDIANgCIASgDIAQgFQAAgJgEgFQgEgEgMgBQgKABgGACQgGACgDAGIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAGgFQAFgHALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHAEAIIACAJQAAAFgEACQgEAEgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAGAFAIAAQAHgBAIgDQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_1163.setTransform(-123.5,141.3);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f("#FF0000").s().p("AgbAuQgLgEgFgGQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAFQAFAHAGADQAGAEAJAAQAJAAAGgEQAFgDAAgEQAAgHgFgDQgHgDgLgDQgPgDgKgEQgJgCgGgGQgFgFAAgJQAAgIAFgGQAFgHAKgEQALgEAOAAQAJAAAJACQAJACAHADQAFAEAEAEQACAEAAAEQAAAFgDACQgDADgGAAQgFAAgDgCIgHgHQgDgEgFgCQgEgCgGAAQgIAAgGADQgEADAAAEQgBAEAEADIAKAEIARAEQAOADAIAEQAIADAEAFQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgOAAgMgFg");
	this.shape_1164.setTransform(-135.7,141.3);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f("#FF0000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgCgEgDgEQgEgEgGAAQgGABgFADQgFACgDAGQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgEgEQgFgEAAgIIAAgnIgBgOQAAgFgDgEQgEgEgGAAQgPAAgEAJQgEAJgBAOIAAAiQAAAIgDAEQgFAEgGAAQgGAAgFgEQgEgEAAgIIAAhGQAAgIAEgDQAEgEAFAAQAHAAADAEQAFADAAAGIAAACQAHgIAJgDQAIgEAKAAQALAAAIAEQAGAEAFAHQAIgHAIgEQAIgEALAAQALAAAIAFQAJADAEAIQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgHAAgEgEg");
	this.shape_1165.setTransform(-163.9,141.3);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f("#FF0000").s().p("AAgAvQgDgEgGgHQgKAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgIQAAgJAHgIQAIgGANgDIANgCIASgDIAQgFQAAgJgEgFQgEgEgMgBQgKABgGACQgGACgDAGIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAGgFQAFgHALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHAEAIIACAJQAAAFgEACQgEAEgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAGAFAIAAQAHgBAIgDQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_1166.setTransform(-179.8,141.3);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f("#FF0000").s().p("AgPBCQgEgFAAgHIAAhBIgIAAQgHAAgDgCQgEgDAAgEQAAgJAPAAIAHAAIAAgIQAAgMADgGQADgHAJgDQAHgDAOAAQAZAAAAAKQAAAEgDACQgCACgEABIgGgBIgHAAQgHAAgDADQgCAEAAAIIAAAGIAHAAQARAAAAAJQAAAFgFADQgEABgIAAIgHAAIAABBQAAAHgEAFQgEADgFAAQgGAAgEgDg");
	this.shape_1167.setTransform(-189,139.4);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f("#FF0000").s().p("AgJBCQgEgFAAgHIAAhsQAAgHADgEQAEgDAGAAQAGAAAEADQAEAEAAAHIAABsQAAAHgEAFQgEADgGAAQgGAAgDgDg");
	this.shape_1168.setTransform(-213.9,139.4);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f("#FF0000").s().p("AAhBCQgEgEAAgHIAAgDQgFAHgGADQgGAEgHACQgFABgHAAQgLAAgIgDQgJgFgHgHQgGgGgDgKQgEgKAAgLQAAgWANgNQANgNAWAAQALAAAIADQAJAFAIAHIAAglQAAgIADgEQAEgDAGAAQAHgBAEAEQADADAAAIIAABtQAAAHgDAEQgFADgGAAQgFAAgEgDgAgNgJQgHAEgDAHQgDAHAAAJQAAALADAGQAEAHAGAFQAHADAGAAQAHAAAHgDQAGgEAEgHQADgHABgLQgBgJgDgIQgEgGgGgEQgHgDgHAAQgHAAgGADg");
	this.shape_1169.setTransform(-241.9,139.4);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f("#FF0000").s().p("AglAwQgIAAgEgCQgEgDAAgGQAAgDADgEIAMgMIARgQIAOgNIAKgLIAHgHIgpAAQgJAAgFgCQgEgBAAgGQAAgEADgDQAEgCAGAAIBBAAQAJAAAFACQAEACAAAGIgBAEIgCAEIgDADIgFAFIgzAyIA3AAQAHAAADADQAEACAAAFQAAAEgEADQgDACgHAAg");
	this.shape_1170.setTransform(-259.2,141.3);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f("#FF0000").s().p("AgKBDQgEgCgDgEIgFgIIgDgJIglhWIgCgFIgCgEIAAgFQAAgFAEgEQAEgDAHAAQAIgBADAFQADAEAEAKIAiBZIAihaIAFgKQABgDADgCQADgCAGAAQAEAAADABIAFAFQACADAAACIAAAFIgCAFIgCAEIglBXIgEAJIgFAIQgCAEgEACQgFADgGgBQgFABgFgDg");
	this.shape_1171.setTransform(-284.1,139.4);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f("#FF0000").s().p("AgbAuQgKgDgGgHQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAACACIAFAFQAEAHAHAEQAGADAKAAQAIAAAFgDQAGgEAAgEQAAgHgGgDQgFgDgNgDQgOgDgKgEQgJgCgFgGQgGgGAAgIQAAgHAFgHQAGgHAJgEQALgEANAAQALAAAIACQAJACAHADQAFAEAEAEQACAEAAAEQABAFgEACQgEADgFAAQgFAAgDgCIgHgHQgDgDgFgDQgEgCgHAAQgIAAgEADQgGADABAEQAAAEADACIALAFIAQAEQAOADAIAEQAIADAEAFQAFAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgPAAgLgFg");
	this.shape_1172.setTransform(56.6,117.1);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f("#FF0000").s().p("AAhBCQgEgEAAgHIAAgDQgGAHgFADQgGADgGACQgGACgIAAQgKAAgJgDQgJgFgGgGQgGgIgEgJQgDgJAAgMQAAgWANgNQAOgNAUAAQAMAAAJADQAIAFAIAHIAAglQAAgHAEgFQADgDAHAAQAGgBAEAEQADADAAAIIAABtQAAAHgDAEQgFADgFAAQgGAAgEgDgAgNgJQgGAEgDAHQgEAGAAALQAAAJAEAHQADAHAHAFQAFADAHAAQAHAAAHgDQAGgEAEgHQAEgHgBgKQABgKgEgIQgEgGgGgEQgHgDgHgBQgHABgGADg");
	this.shape_1173.setTransform(38,115.2);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f("#FF0000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_1174.setTransform(25.3,117.1);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f("#FF0000").s().p("AAoBDQgFgCgCgFIgFgHIgkgxIgZAVIAAAbQgBAJgEAFQgEADgHAAQgEAAgEgCQgEgBgBgEQgCgCAAgDIgBgKIAAhjQAAgIAFgFQAEgDAHAAQAHAAAEADQAFAFAAAIIAAAvIA8g3IAHgHQADgBAFAAQAHgBAFAEQADAEABAEQAAAGgIAGIglAgIArA1IAHAKQACAEABAEQAAAFgFADQgDAEgIgBQgGABgEgDg");
	this.shape_1175.setTransform(5.5,115.2);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f("#FF0000").s().p("AgvBDQgGgDAAgGQAAgEADgDQADgCAGAAIAEABIAFAAQAFABADgCQACgBADgDIAFgJIADgGIgkhNQgDgHAAgDIACgFQACgDADgCQADgBAEAAQAGAAADADQAEADACAHIAXA8IAXg3IAFgLQACgFADgBQACgCAFABIAGABQADABACAEIABAEIgBAGIgDAGIglBVQgFALgEAGQgEAHgHADQgIAEgNgBQgNAAgGgCg");
	this.shape_1176.setTransform(-14.2,118.9);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f("#FF0000").s().p("AAbAvQgFgEAAgIIAAgoQAAgNgDgGQgEgHgMABQgHAAgGADQgGAFgDAGQgDAGAAAPIAAAeQAAAIgDAEQgEAEgHAAQgGAAgEgEQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAHgJAJgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1177.setTransform(-26.2,117.1);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f("#FF0000").s().p("AgXAvQgKgDgIgIQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAALAEQAKAEAIAHQAHAGAEAKQAEAIAAALQAAALgEAJQgEAKgHAHQgIAHgKADQgLAEgNAAQgMAAgLgEgAgOgbQgHAEgDAGQgEAIABAJQgBAKAEAHQADAIAHADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgIABgGAEg");
	this.shape_1178.setTransform(-39.2,117.1);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f("#FF0000").s().p("AAXA2IAAgqQgBgMgEgFQgDgHgMAAQgHAAgFAEQgHAEgDAFQgCAGAAAOIAAAhQAAAHgEAFQgEADgHAAQgOAAAAgPIAAhsQAAgHAEgEQAEgDAGAAQAHAAAEADQAEAEAAAHIAAAmQAFgGAGgDQAEgDAGgCQAGgBAIAAQAKAAAJADQAIAFAFAIQADAEABAGIABALIAAAwQAAAHgEAFQgEADgGAAQgOAAAAgPg");
	this.shape_1179.setTransform(-52.1,115.2);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAguIgEAAQgGAAgDgDQgEgCAAgEQAAgEAEgDQADgCAHAAIADAAIAAgQIAAgJQAAgEACgCQACgDADgBQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGAAADACQADADAAAEQAAAEgEACQgFADgIAAIgGAAIAAAtIABAJQAAACACACQACACAFABIAHgCIAHAAQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_1180.setTransform(-62.1,115.4);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f("#FF0000").s().p("AAbAvQgFgEAAgIIAAgoQAAgNgDgGQgFgHgLABQgHAAgGADQgGAFgEAGQgCAGAAAPIAAAeQAAAIgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgIIAAhGQAAgIADgDQAEgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAHgJAKgDQAHgFAMAAQALAAAJAFQAJAEAFAHQACAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1181.setTransform(-72.7,117.1);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f("#FF0000").s().p("AAyBEQgDgBgCgCIgEgGIgDgHIgIgRIg9AAIgHARQgFAKgDAEQgDAEgHgBQgFAAgFgDQgEgEAAgFIABgGIADgIIAnhWIAEgJIAFgIIAHgHQAFgBAGAAQAGAAAEABIAHAGIAFAHIAEALIAoBVQAFALAAAEQAAAEgEAFQgFADgGAAQgEABgCgCgAgXAOIAtAAIgWg2g");
	this.shape_1182.setTransform(-86.9,115.2);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f("#FF0000").s().p("AgJAJQgEgEAAgFQAAgEAEgDQAEgEAFAAQAFAAAFAEQAEADAAAEQAAAFgEAEQgFADgFAAQgFAAgEgDg");
	this.shape_1183.setTransform(201.6,202.1);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f("#FF0000").s().p("AgTApQgJgEgHgFQgHgGgDgIQgDgIAAgKQAAgJADgIQAEgIAGgGQAGgGAKgDQAJgDAKAAQALAAAJADQAJADAHAGQAHAGADAIQADAIAAAJQAAAKgDAIQgEAIgGAGQgHAFgJAEQgJADgLAAQgKAAgJgDgAgMgYQgFADgDAHQgDAGAAAIQAAAJADAGQACAGAGAEQAFADAHAAQALAAAHgIQAGgHAAgNQAAgNgGgGQgHgIgLAAQgGAAgGADg");
	this.shape_1184.setTransform(194,198.9);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f("#FF0000").s().p("AgTBJQgGgDAAgFQAAgDADgDQACgCAFAAIABAAIAEAAIADAAQAFAAACgDQABgEAAgIIAAhIQAAgHADgDQAEgDAFAAQAGAAADADQAEADAAAHIAABIIgBANIgCAHQgGAOgTAAQgLAAgGgDgAAEg4QgDgDAAgFQAAgFAEgDQADgDAFAAQAFAAAEADQAEADAAAFQAAAFgEADQgEADgFAAQgFAAgEgDg");
	this.shape_1185.setTransform(184.6,198.9);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f("#FF0000").s().p("AgIA4QgDgDAAgGIAAg9QAAgHADgDQADgDAFAAQAFAAAEADQADADAAAGIAAA+QAAAGgDADQgEAEgFAAQgFAAgDgEgAgIgoQgDgDAAgFQAAgFADgDQAEgDAEAAQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAQgEAAgEgDg");
	this.shape_1186.setTransform(180.9,197.3);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f("#FF0000").s().p("AAUAvIAAglQAAgKgEgEQgDgGgKAAQgGAAgGADQgFADgCAFQgDAFAAAMIAAAdQAAAGgCAEQgEADgGAAQgMAAAAgNIAAhdQAAgGADgEQADgDAGAAQAGAAAEADQACAEAAAGIAAAgQAGgFAEgCQAEgDAFgBQAFgCAHAAQAJAAAHAEQAIADAEAHQADAEAAAFIABAKIAAApQAAAHgDADQgEADgGAAQgLAAAAgNg");
	this.shape_1187.setTransform(172.8,197.2);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f("#FF0000").s().p("AAYApQgDgEAAgFIAAgDIgJAIQgFAEgGABQgFACgHAAQgJAAgHgEQgIgCgEgHQgEgGAAgNIAAgqQAAgGADgEQAEgDAFAAQAGAAADADQAEAEAAAGIAAAhQAAAIABAFQACAGADACQAEADAHAAQAFAAAFgDQAGgDACgFQACgGAAgOIAAgaQAAgGAEgEQADgDAGAAQAFAAAEADQADAEAAAGIAAA9QAAAHgDADQgDADgFAAQgFAAgEgDg");
	this.shape_1188.setTransform(156.9,198.9);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f("#FF0000").s().p("AgXAoQgJgDgFgGQgFgFABgGQAAgDACgCQADgDAFAAQAEAAACACIAEAEQAEAGAFADQAGADAIAAQAHAAAFgDQAFgDgBgEQAAgFgEgDQgGgDgKgCQgNgDgHgDQgIgCgGgFQgEgFAAgHQgBgGAFgHQAEgFAKgEQAIgDAMAAQAJAAAHABQAIADAFADQAGADACADQADAEAAADQAAADgDADQgDADgFgBQgEAAgCgCIgHgGQgCgDgFgBQgDgCgGAAQgGAAgFADQgFABAAAFQAAADAEACIAJAEIAOADQALADAIADQAHADAEAEQADAEAAAHQAAAIgEAHQgGAGgJADQgKAEgNAAQgNAAgKgEg");
	this.shape_1189.setTransform(146.2,198.9);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgJADgIQADgIAHgGQAGgGAJgDQAJgDALAAQAOAAAKAFQALAGAFAIQAFAIAAAJQAAAIgFACQgGADgJAAIgwAAQAAAHAEAFQADAGAGADQAFADAGgBIAIAAIAHgDIAGgFIAIgFQACgCADAAQAEAAACACQADACAAADQAAADgDAEQgDAEgFAEQgFADgIADQgIACgLAAQgXAAgNgMgAgNgXQgGAGgCALIAsAAQgBgLgGgGQgGgFgJAAQgJAAgFAFg");
	this.shape_1190.setTransform(131,198.9);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f("#FF0000").s().p("AAcA5QgDgDAAgGIAAgCIgJAIIgLAFQgFABgHAAQgIAAgIgDQgIgDgFgGQgGgHgDgIQgCgIAAgKQAAgTALgLQALgMATAAQAKAAAHAEQAHADAHAGIAAggQAAgGADgEQADgDAGAAQAFAAADADQADADAAAGIAABfQAAAGgDADQgDADgFAAQgFAAgEgDgAgLgHQgGADgCAFQgDAHgBAIQABAJADAGQADAGAFADQAGADAFAAQAGAAAGgCQAFgDADgHQAEgGAAgJQAAgJgEgGQgDgFgFgDQgGgEgGAAQgGAAgFAEg");
	this.shape_1191.setTransform(119.3,197.2);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgJADgIQADgIAHgGQAGgGAJgDQAJgDALAAQAOAAAKAFQALAGAFAIQAFAIAAAJQAAAIgFACQgGADgJAAIgwAAQAAAHAEAFQADAGAGADQAFADAGgBIAIAAIAHgDIAGgFIAIgFQACgCADAAQAEAAACACQADACAAADQAAADgDAEQgDAEgFAEQgFADgIADQgIACgLAAQgXAAgNgMgAgNgXQgGAGgCALIAsAAQgBgLgGgGQgGgFgJAAQgJAAgFAFg");
	this.shape_1192.setTransform(103.6,198.9);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f("#FF0000").s().p("AgIA3QgHgDgBgGQgCgGAAgKIAAgpIgEAAQgFAAgDgCQgCgCAAgEQAAgDACgCQADgCAGAAIADAAIAAgNIABgJQAAgDABgCIAEgDIAGgCQAFAAADADQADACAAADIAAAJIAAAPIAKAAQAFAAADACQACACAAADQAAAFgEABQgEACgGAAIgGAAIAAAnIABAIQAAADADABQABACAEAAIAGgBIAGAAQADAAACACQACACAAADQABAFgHADQgGADgNAAQgLAAgFgEg");
	this.shape_1193.setTransform(95.1,197.4);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f("#FF0000").s().p("AgeAoQgDgDAAgGIAAg7QAAgPAMAAQAGAAADADQADAEAAAHQAEgHAFgEQAEgDAIAAQAHAAAIADQAHAEAAAFQAAAEgDADQgDACgEAAIgGgBIgKgCQgFABgDACQgDADgBAEIgDAMIgBAPIAAATQAAAGgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_1194.setTransform(87.8,198.9);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgJADgIQADgIAHgGQAGgGAJgDQAJgDALAAQAOAAAKAFQALAGAFAIQAFAIAAAJQAAAIgFACQgGADgJAAIgwAAQAAAHAEAFQADAGAGADQAFADAGgBIAIAAIAHgDIAGgFIAIgFQACgCADAAQAEAAACACQADACAAADQAAADgDAEQgDAEgFAEQgFADgIADQgIACgLAAQgXAAgNgMgAgNgXQgGAGgCALIAsAAQgBgLgGgGQgGgFgJAAQgJAAgFAFg");
	this.shape_1195.setTransform(77.5,198.9);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f("#FF0000").s().p("AAYApQgDgEAAgFIAAgDIgJAIQgFAEgGABQgFACgHAAQgJAAgHgEQgIgCgEgHQgEgGAAgNIAAgqQAAgGADgEQAEgDAFAAQAGAAADADQAEAEAAAGIAAAhQAAAIABAFQACAGADACQAEADAHAAQAFAAAFgDQAGgDACgFQACgGAAgOIAAgaQAAgGAEgEQADgDAGAAQAFAAAEADQADAEAAAGIAAA9QAAAHgDADQgDADgFAAQgFAAgEgDg");
	this.shape_1196.setTransform(66.4,198.9);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f("#FF0000").s().p("AAwAoQgDgDAAgHIAAgjIAAgMQgCgEgDgDQgCgCgHAAQgEAAgFACQgEADgDAEQgCAGAAAMIAAAdQAAAHgEADQgDAEgGAAQgFAAgDgEQgDgDgBgHIAAghIgBgNQAAgFgDgCQgDgDgFAAQgNAAgEAHQgDAIAAAMIAAAdQAAAHgEADQgEAEgGAAQgFAAgEgEQgDgDAAgHIAAg9QAAgGADgDQAEgDAEAAQAFAAAEADQAEADgBAFIAAACQAHgGAIgEQAGgDAKAAQAJAAAGADQAHAEAEAGQAGgGAHgEQAIgDAIAAQAKAAAIADQAHAEADAHQAEAFAAANIAAApQAAAHgEADQgDAEgGAAQgGAAgEgEg");
	this.shape_1197.setTransform(52.8,198.9);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f("#FF0000").s().p("AAdApIgIgJQgKAGgIADQgHADgLAAQgJAAgIgEQgHgDgDgFQgFgGAAgHQAAgJAHgGQAGgFAMgCIALgCIAPgDIAPgDQgBgJgDgEQgEgEgKAAQgJAAgFACQgFADgDAEIgFAGQgBACgFAAQgEgBgDgCQgDgCAAgEQAAgGAEgFQAFgGAKgDQAKgDAOAAQAPAAAKADQAKAEAEAHQADAHAAAMIAAAMIAAAMQAAAGADAHIACAIQgBAEgDADQgEACgEAAQgEAAgDgDgAADAEIgOADQgEABgDACQgDADgBAFQAAAFAFAEQAEADAHAAQAGAAAGgDQAHgDACgFQAEgEAAgMIAAgDIgQAEg");
	this.shape_1198.setTransform(34.3,198.9);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgLAGgLQAGgKALgFQALgGAPAAQAKAAAIACQAIADAFAEQAGADADAFQADAFAAADQAAAEgEADQgDADgFAAQgDgBgCgBIgEgFQgFgGgFgDQgFgCgHAAQgKAAgHAHQgHAIAAALQAAAGACAFQACAGADADQADAEAFACQAEABAFAAQAHAAAGgCQAFgEAEgFIAFgGQADgDADABQAFAAADACQADAEAAADQAAAEgDAFQgDAEgFAFQgGADgJAEQgIACgLAAQgWAAgNgMg");
	this.shape_1199.setTransform(23.2,198.9);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f("#FF0000").s().p("AgIA4QgDgDAAgGIAAg9QAAgHADgDQADgDAFAAQAFAAAEADQADADAAAGIAAA+QAAAGgDADQgEAEgFAAQgFAAgDgEgAgIgoQgDgDAAgFQAAgFADgDQAEgDAEAAQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAQgEAAgEgDg");
	this.shape_1200.setTransform(15.2,197.3);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f("#FF0000").s().p("AgXA5QgKgDgGgFQgFgFAAgFQAAgFADgCQADgDAEAAQAGABAEAEIAEAFIAFADIAGADIAIAAQAJAAAFgDQAFgBADgFQACgEAAgFIABgQQgGAIgIADQgHAEgJAAQgNAAgJgFQgJgGgFgKQgFgJAAgNQAAgKADgIQADgHAFgGQAGgGAHgCQAIgDAIAAQAKAAAIADQAHAEAHAIIAAgEQAAgFADgDQADgDAFAAQAIAAACAEQACAEAAAIIAAA+QAAAKgCAJQgDAHgGAFQgGAFgJACQgJADgNAAQgNAAgKgDgAgQgkQgHAHAAANQAAANAHAGQAHAHAJAAQAGAAAGgDQAFgDAEgEQADgHAAgIQAAgNgHgHQgGgIgLAAQgKAAgGAHg");
	this.shape_1201.setTransform(6.6,200.5);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f("#FF0000").s().p("AAcA4IgIgIQgIAFgJADQgIADgKAAQgJABgIgEQgHgDgEgFQgDgGAAgHQgBgJAHgGQAHgGAKgDIANgBIAOgEIAPgDQgBgIgDgDQgDgFgMAAQgIAAgFACQgEADgEAEIgFAGQgBABgFAAQgEAAgDgCQgDgCAAgEQAAgFAFgFQAEgGAKgDQAKgDANAAQARAAAJADQAKADADAHQAEAIAAAKIAAAOIAAALQAAAGADAHIABAIQABAEgEADQgDACgFAAQgEAAgEgDgAADAUIgNACQgEABgEADQgEACAAAFQABAGAEADQAEADAHABQAGAAAHgEQAFgDAEgEQADgEAAgMIAAgDIgQAEgAgQgnIACgEIAFgHQAEgFACgCQACgBAFgBIAMAAQAFAAAAABIgFAGIgKAJIgGAEQgGACgGABQgBAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_1202.setTransform(-4.5,197.3);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f("#FF0000").s().p("AgdAoQgEgDAAgGIAAg7QAAgPAMAAQAGAAADADQADAEAAAHQAFgHAEgEQAEgDAHAAQAJAAAHADQAHAEAAAFQAAAEgDADQgDACgDAAIgHgBIgJgCQgGABgDACQgDADgCAEIgDAMIAAAPIAAATQAAAGgDADQgEAEgFAAQgGAAgDgEg");
	this.shape_1203.setTransform(-13.5,198.9);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f("#FF0000").s().p("AgIA3QgHgDgBgGQgCgGAAgKIAAgpIgEAAQgEAAgDgCQgEgCAAgEQAAgDAEgCQADgCAFAAIADAAIAAgNIABgJQgBgDACgCIAEgDIAGgCQAFAAADADQADACAAADIABAJIAAAPIAJAAQAFAAADACQACACABADQAAAFgFABQgDACgIAAIgEAAIAAAnIAAAIQABADACABQABACAEAAIAGgBIAGAAQADAAACACQADACAAADQAAAFgHADQgGADgNAAQgLAAgFgEg");
	this.shape_1204.setTransform(-21.2,197.4);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f("#FF0000").s().p("AAcApIgIgJQgIAGgJADQgHADgLAAQgJAAgIgEQgGgDgFgFQgDgGAAgHQAAgJAGgGQAHgFAKgCIANgCIAPgDIAOgDQgBgJgDgEQgDgEgMAAQgIAAgFACQgFADgDAEIgFAGQgBACgFAAQgEgBgDgCQgDgCAAgEQAAgGAFgFQAEgGAKgDQAKgDANAAQARAAAJADQAJAEAEAHQAEAHAAAMIAAAMIAAAMQAAAGACAHIACAIQABAEgEADQgEACgEAAQgEAAgEgDgAADAEIgNADQgFABgDACQgDADAAAFQAAAFADAEQAFADAHAAQAGAAAHgDQAGgDADgFQADgEAAgMIAAgDIgQAEg");
	this.shape_1205.setTransform(-35,198.9);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f("#FF0000").s().p("AgIA5QgDgEAAgGIAAhdQAAgGADgEQADgDAFAAQAFAAAEADQADAEAAAGIAABdQAAAHgDADQgEADgFAAQgFAAgDgDg");
	this.shape_1206.setTransform(-43,197.2);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgJADgIQADgIAHgGQAGgGAJgDQAJgDALAAQAOAAAKAFQALAGAFAIQAFAIAAAJQAAAIgFACQgGADgJAAIgwAAQAAAHAEAFQADAGAGADQAFADAGgBIAIAAIAHgDIAGgFIAIgFQACgCADAAQAEAAACACQADACAAADQAAADgDAEQgDAEgFAEQgFADgIADQgIACgLAAQgXAAgNgMgAgNgXQgGAGgCALIAsAAQgBgLgGgGQgGgFgJAAQgJAAgFAFg");
	this.shape_1207.setTransform(-55.8,198.9);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f("#FF0000").s().p("AAdA5QgEgDAAgGIAAgCIgKAIIgKAFQgFABgGAAQgKAAgHgDQgIgDgFgGQgFgHgDgIQgEgIAAgKQAAgTAMgLQAMgMASAAQAKAAAHAEQAHADAHAGIAAggQAAgGAEgEQADgDAFAAQAFAAAEADQACADAAAGIAABfQAAAGgCADQgEADgFAAQgFAAgDgDgAgMgHQgEADgEAFQgDAHAAAIQAAAJADAGQAEAGAFADQAGADAFAAQAHAAAFgCQAGgDADgHQADgGAAgJQAAgJgDgGQgDgFgGgDQgFgEgHAAQgGAAgGAEg");
	this.shape_1208.setTransform(-67.4,197.2);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f("#FF0000").s().p("AAcApIgIgJQgIAGgJADQgHADgLAAQgJAAgIgEQgGgDgFgFQgDgGAAgHQAAgJAGgGQAHgFAKgCIANgCIAPgDIAOgDQgBgJgDgEQgDgEgMAAQgIAAgFACQgFADgDAEIgFAGQgBACgFAAQgEgBgDgCQgDgCAAgEQAAgGAFgFQAEgGAKgDQAKgDANAAQARAAAJADQAJAEAEAHQAEAHAAAMIAAAMIAAAMQAAAGACAHIACAIQABAEgEADQgEACgEAAQgEAAgEgDgAADAEIgNADQgFABgDACQgDADAAAFQAAAFADAEQAFADAHAAQAGAAAHgDQAGgDADgFQADgEAAgMIAAgDIgQAEg");
	this.shape_1209.setTransform(-83.2,198.9);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgLAGgLQAGgKALgFQALgGAPAAQAKAAAIACQAIADAFAEQAGADADAFQADAFAAADQAAAEgEADQgDADgFAAQgDgBgCgBIgEgFQgFgGgFgDQgFgCgHAAQgKAAgHAHQgHAIAAALQAAAGACAFQACAGADADQADAEAFACQAEABAFAAQAHAAAGgCQAFgEAEgFIAFgGQADgDADABQAFAAADACQADAEAAADQAAAEgDAFQgDAEgFAFQgGADgJAEQgIACgLAAQgWAAgNgMg");
	this.shape_1210.setTransform(-94.3,198.9);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f("#FF0000").s().p("AgdAoQgEgDAAgGIAAg7QAAgPAMAAQAHAAACADQADAEAAAHQAFgHAEgEQAEgDAIAAQAHAAAIADQAHAEAAAFQAAAEgDADQgDACgEAAIgGgBIgKgCQgFABgDACQgDADgBAEIgEAMIAAAPIAAATQAAAGgDADQgEAEgFAAQgGAAgDgEg");
	this.shape_1211.setTransform(-102.8,198.9);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgJADgIQADgIAHgGQAGgGAJgDQAJgDALAAQAOAAAKAFQALAGAFAIQAFAIAAAJQAAAIgFACQgGADgJAAIgwAAQAAAHAEAFQADAGAGADQAFADAGgBIAIAAIAHgDIAGgFIAIgFQACgCADAAQAEAAACACQADACAAADQAAADgDAEQgDAEgFAEQgFADgIADQgIACgLAAQgXAAgNgMgAgNgXQgGAGgCALIAsAAQgBgLgGgGQgGgFgJAAQgJAAgFAFg");
	this.shape_1212.setTransform(-113,198.9);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgLAGgLQAGgKALgFQALgGAPAAQAKAAAIACQAIADAFAEQAGADADAFQADAFAAADQAAAEgEADQgDADgFAAQgDgBgCgBIgEgFQgFgGgFgDQgFgCgHAAQgKAAgHAHQgHAIAAALQAAAGACAFQACAGADADQADAEAFACQAEABAFAAQAHAAAGgCQAFgEAEgFIAFgGQADgDADABQAFAAADACQADAEAAADQAAAEgDAFQgDAEgFAFQgGADgJAEQgIACgLAAQgWAAgNgMg");
	this.shape_1213.setTransform(-124.1,198.9);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f("#FF0000").s().p("AAcApIgHgJQgJAGgJADQgIADgKAAQgKAAgGgEQgHgDgFgFQgEgGAAgHQABgJAGgGQAHgFALgCIALgCIAQgDIAOgDQAAgJgEgEQgEgEgLAAQgIAAgFACQgEADgEAEIgFAGQgBACgFAAQgEgBgDgCQgDgCAAgEQAAgGAEgFQAFgGAKgDQAKgDANAAQARAAAJADQAJAEAFAHQADAHAAAMIAAAMIAAAMQAAAGACAHIADAIQAAAEgEADQgEACgEAAQgEAAgEgDgAADAEIgOADQgDABgEACQgEADABAFQAAAFADAEQAFADAHAAQAGAAAGgDQAGgDADgFQAEgEAAgMIAAgDIgQAEg");
	this.shape_1214.setTransform(-135.2,198.9);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.f("#FF0000").s().p("AAXAoQgEgDAAgGIAAgkQAAgKgDgFQgDgHgKABQgGAAgGADQgFAEgDAFQgBAGAAALIAAAcQAAAGgEADQgDAEgGAAQgFAAgEgEQgDgDAAgGIAAg+QAAgGADgDQADgDAFAAQAEAAACABQADABACAEQABACAAAEIAAADQAHgIAHgEQAHgDAKAAQAKAAAIADQAHAFAEAGQADAEAAAFIABAMIAAAnQAAAGgDADQgEAEgFAAQgGAAgDgEg");
	this.shape_1215.setTransform(-151,198.9);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgJADgIQADgIAHgGQAGgGAJgDQAJgDALAAQAOAAAKAFQALAGAFAIQAFAIAAAJQAAAIgFACQgGADgJAAIgwAAQAAAHAEAFQADAGAGADQAFADAGgBIAIAAIAHgDIAGgFIAIgFQACgCADAAQAEAAACACQADACAAADQAAADgDAEQgDAEgFAEQgFADgIADQgIACgLAAQgXAAgNgMgAgNgXQgGAGgCALIAsAAQgBgLgGgGQgGgFgJAAQgJAAgFAFg");
	this.shape_1216.setTransform(-162.1,198.9);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.f("#FF0000").s().p("AgHAqIgFgFIgFgKIgYgyIgCgDIgBgFIAAgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQABgBAAAAQACgDACgBQADgBADAAQAGAAACADQADADADAIIATAvIAVgyQADgGADgDQACgCAFAAQAEAAAEACQADAEABADIgBADIgBAEIgDAEIgXAyIgCAGIgFAGIgEAEQgDABgEAAQgEAAgDgCg");
	this.shape_1217.setTransform(-172.5,198.9);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.f("#FF0000").s().p("AAdApIgIgJQgKAGgIADQgHADgLAAQgJAAgHgEQgIgDgDgFQgFgGAAgHQABgJAGgGQAHgFALgCIALgCIAPgDIAPgDQgBgJgDgEQgEgEgKAAQgJAAgFACQgEADgEAEIgFAGQgBACgFAAQgEgBgDgCQgDgCAAgEQAAgGAEgFQAFgGAKgDQAKgDAOAAQAPAAAKADQAKAEAEAHQADAHAAAMIAAAMIAAAMQAAAGADAHIACAIQgBAEgDADQgEACgEAAQgEAAgDgDgAADAEIgOADQgEABgDACQgDADgBAFQAAAFAEAEQAFADAHAAQAGAAAGgDQAHgDACgFQAEgEAAgMIAAgDIgQAEg");
	this.shape_1218.setTransform(-182.7,198.9);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgJADgIQADgIAHgGQAGgGAJgDQAJgDALAAQAOAAAKAFQALAGAFAIQAFAIAAAJQAAAIgFACQgGADgJAAIgwAAQAAAHAEAFQADAGAGADQAFADAGgBIAIAAIAHgDIAGgFIAIgFQACgCADAAQAEAAACACQADACAAADQAAADgDAEQgDAEgFAEQgFADgIADQgIACgLAAQgXAAgNgMgAgNgXQgGAGgCALIAsAAQgBgLgGgGQgGgFgJAAQgJAAgFAFg");
	this.shape_1219.setTransform(-193.8,198.9);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.f("#FF0000").s().p("AATAvIAAglQAAgKgDgEQgDgGgLAAQgFAAgFADQgGADgCAFQgCAFAAAMIAAAdQAAAGgEAEQgDADgGAAQgMAAAAgNIAAhdQAAgGADgEQADgDAGAAQAGAAADADQAEAEAAAGIAAAgQAFgFAEgCQAFgDAEgBQAFgCAGAAQAKAAAHAEQAIADADAHQADAEABAFIABAKIAAApQAAAHgDADQgDADgHAAQgMAAAAgNg");
	this.shape_1220.setTransform(-204.9,197.2);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.f("#FF0000").s().p("AAXAoQgEgDAAgGIAAgkQAAgKgDgFQgDgHgKABQgGAAgGADQgFAEgDAFQgBAGAAALIAAAcQAAAGgEADQgDAEgGAAQgFAAgEgEQgDgDAAgGIAAg+QAAgGADgDQADgDAFAAQAEAAACABQADABACAEQABACAAAEIAAADQAHgIAHgEQAHgDAKAAQAKAAAIADQAHAFAEAGQADAEAAAFIABAMIAAAnQAAAGgDADQgEAEgFAAQgGAAgDgEg");
	this.shape_1221.setTransform(-220.8,198.9);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.f("#FF0000").s().p("AgIA4QgDgDAAgGIAAg9QAAgHADgDQADgDAFAAQAFAAAEADQADADAAAGIAAA+QAAAGgDADQgEAEgFAAQgFAAgDgEgAgIgoQgDgDAAgFQAAgFADgDQAEgDAEAAQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAQgEAAgEgDg");
	this.shape_1222.setTransform(-228.9,197.3);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.f("#FF0000").s().p("AgXApQgJgEgFgFQgEgGgBgFQAAgEAEgCQADgDAEAAQAEAAACACIAEAEQAEAGAFADQAFADAIAAQAIAAAFgDQAEgDABgDQAAgHgGgCQgEgCgLgDQgMgDgJgDQgHgCgFgFQgFgFgBgHQAAgHAFgFQAFgGAIgDQAJgEAMAAQAJAAAIACQAHACAGACQAEADADAEQADAEAAADQAAADgDADQgDADgFAAQgEgBgDgCIgGgFQgCgEgEgCQgEgBgGAAQgGAAgFACQgEADAAAEQAAADADACIAIAEIAPADQALACAIAEQAHADAEAEQAEAFAAAFQgBAKgFAGQgEAHgKADQgKADgNAAQgNAAgKgDg");
	this.shape_1223.setTransform(301,177.6);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f("#FF0000").s().p("AgdApQgEgDAAgHIAAg8QAAgOAMAAQAGAAADAEQADACAAAIQAFgIAEgCQAEgEAHAAQAJAAAHAEQAHACAAAHQAAAEgDACQgDACgDABIgHgCIgJgCQgGAAgDADQgDACgCAGIgDALIAAAQIAAASQAAAHgDADQgEADgFAAQgGAAgDgDg");
	this.shape_1224.setTransform(292.9,177.6);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.f("#FF0000").s().p("AAcApIgIgJQgIAGgJADQgHADgLAAQgJAAgIgDQgGgDgFgGQgDgGAAgHQAAgIAGgGQAHgGAKgCIANgCIAPgDIAOgDQgBgJgDgEQgDgEgMAAQgIAAgFACQgFACgDAFIgFAGQgBABgFABQgEAAgDgCQgDgDAAgEQAAgFAFgGQAEgFAKgDQAKgEANAAQARAAAJADQAJADAEAIQAEAHAAAMIAAAMIAAAMQAAAGACAGIACAJQABAEgEADQgEACgEAAQgEAAgEgDgAADAEIgNADQgFABgDACQgDADAAAFQAAAFADADQAFAEAHAAQAGAAAHgDQAGgDADgFQADgEAAgLIAAgEIgQAEg");
	this.shape_1225.setTransform(282.7,177.6);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgJADgIQADgIAHgGQAGgGAJgDQAJgDALAAQAOAAAKAFQALAFAFAJQAFAJAAAIQAAAIgFACQgGACgJABIgwAAQAAAGAEAGQADAGAGADQAFADAGAAIAIgBIAHgDIAGgEIAIgHQACgBADAAQAEAAACACQADACAAADQAAADgDAEQgDAEgFADQgFAEgIADQgIACgLAAQgXAAgNgMgAgNgWQgGAFgCALIAsAAQgBgLgGgFQgGgGgJAAQgJAAgFAGg");
	this.shape_1226.setTransform(271.6,177.6);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.f("#FF0000").s().p("AgIA3QgGgDgCgGQgCgGAAgKIAAgpIgEAAQgEAAgEgCQgDgCAAgEQAAgDADgCQADgCAGAAIADAAIAAgNIABgJQgBgDACgCIAEgDIAGgCQAFAAADADQADACAAADIAAAJIAAAPIAKAAQAFAAADACQADACAAADQAAAFgFABQgDACgIAAIgFAAIAAAnIABAIQABADACABQABACAEAAIAGgBIAGAAQADAAACACQADACAAADQAAAFgHADQgGADgNAAQgLAAgFgEg");
	this.shape_1227.setTransform(263.1,176.1);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgJADgIQADgIAHgGQAGgGAJgDQAJgDALAAQAOAAAKAFQALAFAFAJQAFAJAAAIQAAAIgFACQgGACgJABIgwAAQAAAGAEAGQADAGAGADQAFADAGAAIAIgBIAHgDIAGgEIAIgHQACgBADAAQAEAAACACQADACAAADQAAADgDAEQgDAEgFADQgFAEgIADQgIACgLAAQgXAAgNgMgAgNgWQgGAFgCALIAsAAQgBgLgGgFQgGgGgJAAQgJAAgFAGg");
	this.shape_1228.setTransform(249.3,177.6);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.f("#FF0000").s().p("AAcA5QgDgDAAgGIAAgCIgJAIIgLAFQgFABgHAAQgIAAgIgDQgIgDgFgGQgGgHgDgIQgCgIAAgKQAAgTALgLQALgMATAAQAKAAAHAEQAHADAHAGIAAggQAAgGADgEQADgDAGAAQAFAAADADQADADAAAGIAABfQAAAGgDADQgDADgFAAQgFAAgEgDgAgLgHQgGADgCAFQgDAHgBAIQABAJADAGQADAGAFADQAGADAFAAQAGAAAGgCQAFgDADgHQAEgGAAgJQAAgJgEgGQgDgFgFgDQgGgEgGAAQgGAAgFAEg");
	this.shape_1229.setTransform(237.7,175.9);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.f("#FF0000").s().p("AAXApQgEgEAAgGIAAgjQAAgLgDgFQgDgHgKAAQgGABgGADQgFADgDAHQgBAFAAAMIAAAbQAAAHgEADQgDADgGAAQgFAAgEgDQgDgEAAgGIAAg+QAAgGADgDQADgDAFAAQAEAAACACQADABACACQABADAAAEIAAACQAHgHAHgDQAHgEAKAAQAKAAAIAEQAHAEAEAGQADAEAAAFIABALIAAAoQAAAHgDADQgEADgFAAQgGAAgDgDg");
	this.shape_1230.setTransform(221.8,177.6);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.f("#FF0000").s().p("AgTA4QgJgDgHgGQgHgGgDgHQgDgJAAgJQAAgLADgGQAEgIAGgHQAGgGAKgDQAJgCAKAAQALAAAJACQAJAEAHAFQAHAHADAIQADAGAAALQAAAJgDAJQgEAHgGAGQgHAGgJADQgJAEgLAAQgKAAgJgEgAgMgIQgFADgDAFQgDAHAAAJQAAAIADAGQACAHAGADQAFADAHABQALgBAHgHQAGgHAAgNQAAgOgGgGQgHgIgLABQgGgBgGAEgAgRgmIACgFIAFgHQADgGADgBQACgCAFAAIAMAAQAFAAAAACIgGAEIgKAJIgGAGQgFACgGAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape_1231.setTransform(210.6,176);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.f("#FF0000").s().p("AgIA4QgDgDAAgGIAAg9QAAgHADgDQADgDAFAAQAFAAAEADQADADAAAGIAAA+QAAAGgDADQgEAEgFAAQgFAAgDgEgAgIgoQgDgDAAgFQAAgFADgDQAEgDAEAAQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAQgEAAgEgDg");
	this.shape_1232.setTransform(202.5,176);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgMAGgKQAGgKALgGQALgFAPAAQAKAAAIACQAIACAFAEQAGAEADAFQADAEAAAEQAAAEgEADQgDACgFAAQgDABgCgCIgEgEQgFgHgFgCQgFgEgHAAQgKAAgHAIQgHAHAAAMQAAAHACAFQACAFADAEQADADAFACQAEABAFAAQAHAAAGgDQAFgDAEgGIAFgFQADgCADgBQAFAAADADQADAEAAADQAAAEgDAFQgDAFgFADQgGAEgJAEQgIACgLAAQgWAAgNgMg");
	this.shape_1233.setTransform(194.4,177.6);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.f("#FF0000").s().p("AAXApQgEgEAAgGIAAgjQAAgLgDgFQgDgHgKAAQgGABgGADQgFADgDAHQgBAFAAAMIAAAbQAAAHgEADQgDADgGAAQgFAAgEgDQgDgEAAgGIAAg+QAAgGADgDQADgDAFAAQAEAAACACQADABACACQABADAAAEIAAACQAHgHAHgDQAHgEAKAAQAKAAAIAEQAHAEAEAGQADAEAAAFIABALIAAAoQAAAHgDADQgEADgFAAQgGAAgDgDg");
	this.shape_1234.setTransform(183.3,177.6);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.f("#FF0000").s().p("AAcApIgIgJQgIAGgJADQgIADgKAAQgKAAgGgDQgHgDgFgGQgDgGAAgHQAAgIAGgGQAHgGALgCIAMgCIAPgDIAOgDQAAgJgEgEQgDgEgMAAQgIAAgFACQgFACgDAFIgFAGQgBABgFABQgEAAgDgCQgDgDAAgEQAAgFAFgGQAEgFAKgDQAKgEANAAQAQAAAKADQAJADAFAIQADAHAAAMIAAAMIAAAMQAAAGACAGIACAJQAAAEgDADQgEACgEAAQgEAAgEgDgAADAEIgNADQgEABgEACQgEADABAFQAAAFADADQAFAEAHAAQAGAAAHgDQAFgDAEgFQADgEAAgLIAAgEIgQAEg");
	this.shape_1235.setTransform(172.1,177.6);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgMAGgKQAGgKALgGQALgFAPAAQAKAAAIACQAIACAFAEQAGAEADAFQADAEAAAEQAAAEgEADQgDACgFAAQgDABgCgCIgEgEQgFgHgFgCQgFgEgHAAQgKAAgHAIQgHAHAAAMQAAAHACAFQACAFADAEQADADAFACQAEABAFAAQAHAAAGgDQAFgDAEgGIAFgFQADgCADgBQAFAAADADQADAEAAADQAAAEgDAFQgDAFgFADQgGAEgJAEQgIACgLAAQgWAAgNgMg");
	this.shape_1236.setTransform(161,177.6);

	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgJADgIQADgIAHgGQAGgGAJgDQAJgDALAAQAOAAAKAFQALAFAFAJQAFAJAAAIQAAAIgFACQgGACgJABIgwAAQAAAGAEAGQADAGAGADQAFADAGAAIAIgBIAHgDIAGgEIAIgHQACgBADAAQAEAAACACQADACAAADQAAADgDAEQgDAEgFADQgFAEgIADQgIACgLAAQgXAAgNgMgAgNgWQgGAFgCALIAsAAQgBgLgGgFQgGgGgJAAQgJAAgFAGg");
	this.shape_1237.setTransform(145.3,177.6);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.f("#FF0000").s().p("AgeApQgDgDAAgHIAAg8QAAgOAMAAQAGAAADAEQADACAAAIQAFgIAEgCQAEgEAHAAQAJAAAHAEQAHACAAAHQAAAEgDACQgDACgDABIgHgCIgJgCQgGAAgDADQgDACgCAGIgCALIgBAQIAAASQAAAHgEADQgDADgGAAQgFAAgEgDg");
	this.shape_1238.setTransform(136.7,177.6);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.f("#FF0000").s().p("AgDA7IgIgDIgGgEIgHgGIAAACQAAAGgDADQgEADgFAAQgFAAgDgDQgDgDAAgGIAAheQAAgGADgEQADgDAFAAQAGAAADADQADADAAAGIAAAhQAHgGAHgDQAHgEAKAAQANAAAJAFQAJAGAFAJQAFAJAAANQAAAKgCAIQgDAJgGAGQgFAGgIADQgIADgJAAIgKgBgAgLgHQgGADgDAGQgDAGAAAJQAAANAHAHQAHAGAKAAQAJAAAHgHQAHgHAAgNQAAgJgDgGQgDgFgFgDQgFgEgHAAQgGAAgGAEg");
	this.shape_1239.setTransform(126.4,175.9);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgJADgIQADgIAHgGQAGgGAJgDQAJgDALAAQAOAAAKAFQALAFAFAJQAFAJAAAIQAAAIgFACQgGACgJABIgwAAQAAAGAEAGQADAGAGADQAFADAGAAIAIgBIAHgDIAGgEIAIgHQACgBADAAQAEAAACACQADACAAADQAAADgDAEQgDAEgFADQgFAEgIADQgIACgLAAQgXAAgNgMgAgNgWQgGAFgCALIAsAAQgBgLgGgFQgGgGgJAAQgJAAgFAGg");
	this.shape_1240.setTransform(115,177.6);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.f("#FF0000").s().p("AgIA5QgDgEAAgGIAAhdQAAgGADgEQADgDAFAAQAFAAAEADQADAEAAAGIAABdQAAAHgDADQgEADgFAAQgFAAgDgDg");
	this.shape_1241.setTransform(107,175.9);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.f("#FF0000").s().p("AghAvQgNgMAAgTQAAgLADgGQADgIAHgHQAGgGAJgDQAJgCALAAQAOAAAKAEQALAGAFAJQAFAIAAAIQAAAIgFACQgGADgJAAIgwAAQAAAHAEAGQADAGAGADQAFACAGAAIAIgBIAHgCIAGgFIAIgGQACgCADAAQAEAAACADQADACAAACQAAAEgDAEQgDADgFAEQgFADgIADQgIADgLAAQgXAAgNgNgAgNgHQgGAFgCAKIAsAAQgBgKgGgFQgGgGgJABQgJgBgFAGgAgQgmIACgFIAFgHQADgGADgBQACgCAFAAIAMAAQAFAAAAACIgGAEIgKAJIgGAGQgFACgGAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape_1242.setTransform(98.9,176);

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgMAGgKQAGgKALgGQALgFAPAAQAKAAAIACQAIACAFAEQAGAEADAFQADAEAAAEQAAAEgEADQgDACgFAAQgDABgCgCIgEgEQgFgHgFgCQgFgEgHAAQgKAAgHAIQgHAHAAAMQAAAHACAFQACAFADAEQADADAFACQAEABAFAAQAHAAAGgDQAFgDAEgGIAFgFQADgCADgBQAFAAADADQADAEAAADQAAAEgDAFQgDAFgFADQgGAEgJAEQgIACgLAAQgWAAgNgMg");
	this.shape_1243.setTransform(87.8,177.6);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgJADgIQADgIAHgGQAGgGAJgDQAJgDALAAQAOAAAKAFQALAFAFAJQAFAJAAAIQAAAIgFACQgGACgJABIgwAAQAAAGAEAGQADAGAGADQAFADAGAAIAIgBIAHgDIAGgEIAIgHQACgBADAAQAEAAACACQADACAAADQAAADgDAEQgDAEgFADQgFAEgIADQgIACgLAAQgXAAgNgMgAgNgWQgGAFgCALIAsAAQgBgLgGgFQgGgGgJAAQgJAAgFAGg");
	this.shape_1244.setTransform(72.1,177.6);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.f("#FF0000").s().p("AgIA3QgHgDgBgGQgCgGAAgKIAAgpIgEAAQgFAAgDgCQgCgCAAgEQAAgDACgCQADgCAGAAIADAAIAAgNIABgJQAAgDABgCIAEgDIAGgCQAFAAADADQADACAAADIAAAJIAAAPIAKAAQAFAAADACQACACAAADQAAAFgEABQgEACgGAAIgGAAIAAAnIABAIQAAADADABQABACAEAAIAGgBIAGAAQADAAACACQACACAAADQABAFgHADQgGADgNAAQgLAAgFgEg");
	this.shape_1245.setTransform(63.6,176.1);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.f("#FF0000").s().p("AAXApQgEgEAAgGIAAgjQAAgLgDgFQgDgHgKAAQgGABgGADQgFADgDAHQgBAFAAAMIAAAbQAAAHgEADQgDADgGAAQgFAAgEgDQgDgEAAgGIAAg+QAAgGADgDQADgDAFAAQAEAAACACQADABACACQABADAAAEIAAACQAHgHAHgDQAHgEAKAAQAKAAAIAEQAHAEAEAGQADAEAAAFIABALIAAAoQAAAHgDADQgEADgFAAQgGAAgDgDg");
	this.shape_1246.setTransform(54.4,177.6);

	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgJADgIQADgIAHgGQAGgGAJgDQAJgDALAAQAOAAAKAFQALAFAFAJQAFAJAAAIQAAAIgFACQgGACgJABIgwAAQAAAGAEAGQADAGAGADQAFADAGAAIAIgBIAHgDIAGgEIAIgHQACgBADAAQAEAAACACQADACAAADQAAADgDAEQgDAEgFADQgFAEgIADQgIACgLAAQgXAAgNgMgAgNgWQgGAFgCALIAsAAQgBgLgGgFQgGgGgJAAQgJAAgFAGg");
	this.shape_1247.setTransform(43.2,177.6);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.f("#FF0000").s().p("AAwApQgDgEAAgGIAAgkIAAgMQgCgDgDgDQgCgDgHAAQgEAAgFADQgEACgDAEQgCAFAAANIAAAeQAAAGgEAEQgDADgGAAQgFAAgDgDQgEgEAAgGIAAgiIgBgNQAAgEgDgDQgDgDgFAAQgNAAgEAHQgDAHAAANIAAAeQAAAGgEAEQgDADgHAAQgFAAgEgDQgDgEAAgGIAAg9QAAgHADgDQAEgDAEAAQAFAAAEADQADADAAAFIAAACQAHgGAIgDQAHgEAJAAQAJAAAHAEQAFADAFAGQAGgGAHgDQAHgEAJAAQAKAAAHAEQAIADADAHQAEAGAAAMIAAAqQAAAGgEAEQgEADgFAAQgGAAgEgDg");
	this.shape_1248.setTransform(29.5,177.6);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgJADgIQADgIAHgGQAGgGAJgDQAJgDALAAQAOAAAKAFQALAFAFAJQAFAJAAAIQAAAIgFACQgGACgJABIgwAAQAAAGAEAGQADAGAGADQAFADAGAAIAIgBIAHgDIAGgEIAIgHQACgBADAAQAEAAACACQADACAAADQAAADgDAEQgDAEgFADQgFAEgIADQgIACgLAAQgXAAgNgMgAgNgWQgGAFgCALIAsAAQgBgLgGgFQgGgGgJAAQgJAAgFAGg");
	this.shape_1249.setTransform(15.6,177.6);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.f("#FF0000").s().p("AgIA3QgHgDgBgGQgCgGAAgKIAAgpIgEAAQgEAAgDgCQgEgCAAgEQAAgDAEgCQADgCAFAAIADAAIAAgNIABgJQgBgDACgCIAEgDIAGgCQAFAAADADQADACAAADIABAJIAAAPIAJAAQAFAAADACQACACABADQAAAFgFABQgDACgIAAIgEAAIAAAnIAAAIQABADACABQABACAEAAIAGgBIAGAAQADAAACACQADACAAADQAAAFgHADQgGADgNAAQgLAAgFgEg");
	this.shape_1250.setTransform(7.2,176.1);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.f("#FF0000").s().p("AgXApQgKgEgEgFQgFgGABgFQAAgEADgCQADgDAEAAQAEAAACACIAEAEQAEAGAFADQAGADAHAAQAIAAAFgDQAFgDgBgDQAAgHgEgCQgGgCgKgDQgMgDgIgDQgIgCgGgFQgEgFAAgHQgBgHAFgFQAEgGAKgDQAIgEAMAAQAJAAAIACQAHACAFACQAFADADAEQADAEAAADQAAADgDADQgDADgFAAQgEgBgCgCIgHgFQgDgEgEgCQgDgBgGAAQgGAAgFACQgEADgBAEQABADADACIAJAEIAOADQALACAIAEQAHADAEAEQADAFABAFQAAAKgGAGQgEAHgKADQgKADgNAAQgNAAgKgDg");
	this.shape_1251.setTransform(-1.5,177.6);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.f("#FF0000").s().p("AgIA4QgDgDAAgGIAAg9QAAgHADgDQADgDAFAAQAFAAAEADQADADAAAGIAAA+QAAAGgDADQgEAEgFAAQgFAAgDgEgAgIgoQgDgDAAgFQAAgFADgDQAEgDAEAAQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAQgEAAgEgDg");
	this.shape_1252.setTransform(-9,176);

	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.f("#FF0000").s().p("AgeApQgDgDAAgHIAAg8QAAgOAMAAQAGAAADAEQADACAAAIQAEgIAFgCQAEgEAHAAQAJAAAHAEQAHACAAAHQAAAEgDACQgDACgEABIgGgCIgJgCQgGAAgDADQgDACgCAGIgCALIgBAQIAAASQAAAHgEADQgDADgGAAQgFAAgEgDg");
	this.shape_1253.setTransform(-15.1,177.6);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.f("#FF0000").s().p("AgJA3QgFgDgCgGQgCgGAAgKIAAgpIgDAAQgGAAgCgCQgDgCAAgEQAAgDADgCQADgCAFAAIADAAIAAgNIAAgJQABgDABgCIAEgDIAGgCQAFAAADADQACACABADIABAJIAAAPIAJAAQAFAAADACQADACgBADQAAAFgDABQgFACgHAAIgEAAIAAAnIAAAIQAAADACABQACACAEAAIAGgBIAGAAQADAAACACQACACAAADQAAAFgGADQgHADgMAAQgKAAgHgEg");
	this.shape_1254.setTransform(-22.7,176.1);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.f("#FF0000").s().p("AAdApIgIgJQgJAGgJADQgHADgLAAQgKAAgGgDQgIgDgDgGQgFgGAAgHQABgIAGgGQAHgGALgCIALgCIAQgDIAOgDQAAgJgEgEQgEgEgLAAQgIAAgFACQgEACgEAFIgFAGQgBABgFABQgEAAgDgCQgDgDAAgEQAAgFAEgGQAFgFAKgDQAKgEANAAQARAAAJADQAJADAFAIQADAHAAAMIAAAMIAAAMQAAAGACAGIADAJQAAAEgEADQgDACgFAAQgEAAgDgDgAADAEIgOADQgDABgEACQgDADAAAFQAAAFADADQAFAEAHAAQAGAAAGgDQAHgDACgFQAEgEAAgLIAAgEIgQAEg");
	this.shape_1255.setTransform(-36.5,177.6);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.f("#FF0000").s().p("AgIA5QgDgEAAgGIAAhdQAAgGADgEQADgDAFAAQAFAAAEADQADAEAAAGIAABdQAAAHgDADQgEADgFAAQgFAAgDgDg");
	this.shape_1256.setTransform(-44.5,175.9);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.f("#FF0000").s().p("AAXApQgEgEAAgGIAAgjQAAgLgDgFQgDgHgKAAQgGABgGADQgFADgDAHQgBAFAAAMIAAAbQAAAHgEADQgDADgGAAQgFAAgEgDQgDgEAAgGIAAg+QAAgGADgDQADgDAFAAQAEAAACACQADABACACQABADAAAEIAAACQAHgHAHgDQAHgEAKAAQAKAAAIAEQAHAEAEAGQADAEAAAFIABALIAAAoQAAAHgDADQgEADgFAAQgGAAgDgDg");
	this.shape_1257.setTransform(-57.3,177.6);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.f("#FF0000").s().p("AgTApQgJgDgHgGQgHgGgDgIQgDgJAAgJQAAgJADgIQAEgIAGgGQAGgGAKgDQAJgDAKAAQALAAAJADQAJADAHAGQAHAGADAIQADAIAAAJQAAAJgDAJQgEAIgGAGQgHAGgJADQgJADgLAAQgKAAgJgDgAgMgXQgFADgDAGQgDAHAAAHQAAAIADAHQACAGAGADQAFAEAHAAQALAAAHgHQAGgIAAgNQAAgMgGgIQgHgHgLAAQgGAAgGAEg");
	this.shape_1258.setTransform(-68.5,177.6);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgMAGgKQAGgKALgGQALgFAPAAQAKAAAIACQAIACAFAEQAGAEADAFQADAEAAAEQAAAEgEADQgDACgFAAQgDABgCgCIgEgEQgFgHgFgCQgFgEgHAAQgKAAgHAIQgHAHAAAMQAAAHACAFQACAFADAEQADADAFACQAEABAFAAQAHAAAGgDQAFgDAEgGIAFgFQADgCADgBQAFAAADADQADAEAAADQAAAEgDAFQgDAFgFADQgGAEgJAEQgIACgLAAQgWAAgNgMg");
	this.shape_1259.setTransform(-79.8,177.6);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f("#FF0000").s().p("AgXApQgJgEgFgFQgEgGgBgFQAAgEAEgCQADgDAEAAQAEAAACACIAEAEQAEAGAFADQAFADAIAAQAIAAAFgDQAEgDAAgDQABgHgGgCQgEgCgLgDQgMgDgJgDQgHgCgFgFQgFgFgBgHQAAgHAFgFQAFgGAIgDQAJgEAMAAQAJAAAIACQAHACAFACQAFADADAEQADAEAAADQAAADgDADQgDADgFAAQgEgBgDgCIgGgFQgCgEgEgCQgEgBgGAAQgGAAgFACQgEADAAAEQAAADADACIAIAEIAPADQALACAIAEQAHADAEAEQAEAFAAAFQgBAKgFAGQgEAHgKADQgKADgNAAQgNAAgKgDg");
	this.shape_1260.setTransform(-95,177.6);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f("#FF0000").s().p("AgTApQgJgDgHgGQgHgGgDgIQgDgJAAgJQAAgJADgIQAEgIAGgGQAGgGAKgDQAJgDAKAAQALAAAJADQAJADAHAGQAHAGADAIQADAIAAAJQAAAJgDAJQgEAIgGAGQgHAGgJADQgJADgLAAQgKAAgJgDgAgMgXQgFADgDAGQgDAHAAAHQAAAIADAHQACAGAGADQAFAEAHAAQALAAAHgHQAGgIAAgNQAAgMgGgIQgHgHgLAAQgGAAgGAEg");
	this.shape_1261.setTransform(-105.6,177.6);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.f("#FF0000").s().p("AgIA4QgDgDAAgGIAAg9QAAgHADgDQADgDAFAAQAFAAAEADQADADAAAGIAAA+QAAAGgDADQgEAEgFAAQgFAAgDgEgAgIgoQgDgDAAgFQAAgFADgDQAEgDAEAAQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAQgEAAgEgDg");
	this.shape_1262.setTransform(-113.7,176);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.f("#FF0000").s().p("AAwApQgDgEAAgGIAAgkIAAgMQgCgDgDgDQgCgDgHAAQgEAAgFADQgEACgDAEQgCAFAAANIAAAeQAAAGgEAEQgDADgGAAQgFAAgDgDQgEgEAAgGIAAgiIgBgNQAAgEgDgDQgDgDgFAAQgNAAgEAHQgDAHAAANIAAAeQAAAGgEAEQgDADgHAAQgFAAgEgDQgDgEAAgGIAAg9QAAgHADgDQAEgDAEAAQAFAAAEADQADADAAAFIAAACQAHgGAHgDQAIgEAJAAQAJAAAHAEQAFADAFAGQAGgGAHgDQAHgEAJAAQAKAAAHAEQAIADADAHQAEAGAAAMIAAAqQAAAGgEAEQgEADgFAAQgGAAgEgDg");
	this.shape_1263.setTransform(-124.4,177.6);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgJADgIQADgIAHgGQAGgGAJgDQAJgDALAAQAOAAAKAFQALAFAFAJQAFAJAAAIQAAAIgFACQgGACgJABIgwAAQAAAGAEAGQADAGAGADQAFADAGAAIAIgBIAHgDIAGgEIAIgHQACgBADAAQAEAAACACQADACAAADQAAADgDAEQgDAEgFADQgFAEgIADQgIACgLAAQgXAAgNgMgAgNgWQgGAFgCALIAsAAQgBgLgGgFQgGgGgJAAQgJAAgFAGg");
	this.shape_1264.setTransform(-138.3,177.6);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f("#FF0000").s().p("AgeApQgDgDAAgHIAAg8QAAgOAMAAQAGAAADAEQADACAAAIQAFgIAEgCQAEgEAHAAQAJAAAHAEQAHACAAAHQAAAEgDACQgDACgDABIgHgCIgJgCQgGAAgDADQgDACgCAGIgCALIgBAQIAAASQAAAHgEADQgDADgGAAQgFAAgEgDg");
	this.shape_1265.setTransform(-146.8,177.6);

	this.shape_1266 = new cjs.Shape();
	this.shape_1266.graphics.f("#FF0000").s().p("AgtA4QgCgDAAgIIAAhcQAAgGADgDQADgDAFAAQAFAAAEADQADADAAAGIAAACQAHgHAHgDQAIgEAJAAQALAAAKAFQAJAGAGAKQAFAJAAAOQAAAKgDAHQgDAIgGAGQgFAGgIADQgIADgIAAQgKAAgHgDQgIgFgGgGIAAAgQAAAOgMAAQgHAAgCgEgAgQgkQgHAHAAAOQAAANAHAGQAHAHAJAAQAHAAAFgDQAFgDADgFQAEgHAAgJQAAgIgDgGQgDgGgGgDQgFgEgHAAQgJAAgHAHg");
	this.shape_1266.setTransform(-157.1,179.2);

	this.shape_1267 = new cjs.Shape();
	this.shape_1267.graphics.f("#FF0000").s().p("AgXApQgJgEgFgFQgFgGABgFQAAgEACgCQADgDAFAAQAEAAACACIAEAEQAEAGAFADQAGADAIAAQAHAAAFgDQAFgDgBgDQAAgHgEgCQgGgCgKgDQgNgDgHgDQgIgCgGgFQgEgFAAgHQgBgHAFgFQAEgGAKgDQAIgEAMAAQAJAAAHACQAIACAFACQAGADACAEQADAEAAADQAAADgDADQgDADgFAAQgEgBgCgCIgHgFQgCgEgFgCQgDgBgGAAQgGAAgFACQgFADAAAEQAAADAEACIAJAEIAOADQALACAIAEQAHADAEAEQADAFAAAFQAAAKgEAGQgGAHgJADQgKADgNAAQgNAAgKgDg");
	this.shape_1267.setTransform(-172.9,177.6);

	this.shape_1268 = new cjs.Shape();
	this.shape_1268.graphics.f("#FF0000").s().p("AgTApQgJgDgHgGQgHgGgDgIQgDgJAAgJQAAgJADgIQAEgIAGgGQAGgGAKgDQAJgDAKAAQALAAAJADQAJADAHAGQAHAGADAIQADAIAAAJQAAAJgDAJQgEAIgGAGQgHAGgJADQgJADgLAAQgKAAgJgDgAgMgXQgFADgDAGQgDAHAAAHQAAAIADAHQACAGAGADQAFAEAHAAQALAAAHgHQAGgIAAgNQAAgMgGgIQgHgHgLAAQgGAAgGAEg");
	this.shape_1268.setTransform(-183.5,177.6);

	this.shape_1269 = new cjs.Shape();
	this.shape_1269.graphics.f("#FF0000").s().p("AgIA5QgDgEAAgGIAAhdQAAgGADgEQADgDAFAAQAFAAAEADQADAEAAAGIAABdQAAAHgDADQgEADgFAAQgFAAgDgDg");
	this.shape_1269.setTransform(-191.6,175.9);

	this.shape_1270 = new cjs.Shape();
	this.shape_1270.graphics.f("#FF0000").s().p("AgXApQgJgEgFgFQgEgGgBgFQAAgEAEgCQADgDAEAAQAEAAACACIAEAEQAEAGAFADQAFADAIAAQAIAAAFgDQAEgDAAgDQABgHgGgCQgEgCgLgDQgMgDgJgDQgHgCgFgFQgFgFgBgHQAAgHAFgFQAFgGAIgDQAJgEAMAAQAJAAAIACQAHACAFACQAFADADAEQADAEAAADQAAADgDADQgDADgFAAQgEgBgDgCIgGgFQgCgEgEgCQgEgBgGAAQgGAAgFACQgEADAAAEQAAADADACIAIAEIAPADQALACAIAEQAHADAEAEQAEAFAAAFQgBAKgFAGQgEAHgKADQgKADgNAAQgNAAgKgDg");
	this.shape_1270.setTransform(-203.9,177.6);

	this.shape_1271 = new cjs.Shape();
	this.shape_1271.graphics.f("#FF0000").s().p("AgTApQgJgDgHgGQgHgGgDgIQgDgJAAgJQAAgJADgIQAEgIAGgGQAGgGAKgDQAJgDAKAAQALAAAJADQAJADAHAGQAHAGADAIQADAIAAAJQAAAJgDAJQgEAIgGAGQgHAGgJADQgJADgLAAQgKAAgJgDgAgMgXQgFADgDAGQgDAHAAAHQAAAIADAHQACAGAGADQAFAEAHAAQALAAAHgHQAGgIAAgNQAAgMgGgIQgHgHgLAAQgGAAgGAEg");
	this.shape_1271.setTransform(-214.5,177.6);

	this.shape_1272 = new cjs.Shape();
	this.shape_1272.graphics.f("#FF0000").s().p("AAcA5QgDgDAAgGIAAgCIgJAIIgLAFQgFABgHAAQgIAAgIgDQgIgDgFgGQgGgHgDgIQgCgIAAgKQAAgTALgLQALgMATAAQAJAAAIAEQAHADAHAGIAAggQAAgGADgEQAEgDAFAAQAFAAADADQADADABAGIAABfQgBAGgDADQgDADgFAAQgFAAgEgDgAgLgHQgGADgCAFQgDAHAAAIQAAAJADAGQADAGAFADQAGADAFAAQAHAAAFgCQAFgDADgHQAEgGAAgJQAAgJgEgGQgDgFgFgDQgFgEgHAAQgGAAgFAEg");
	this.shape_1272.setTransform(-226.2,175.9);

	this.shape_1273 = new cjs.Shape();
	this.shape_1273.graphics.f("#FF0000").s().p("AgTApQgJgDgHgGQgHgGgDgIQgDgJAAgJQAAgJADgIQAEgIAGgGQAGgGAKgDQAJgDAKAAQALAAAJADQAJADAHAGQAHAGADAIQADAIAAAJQAAAJgDAJQgEAIgGAGQgHAGgJADQgJADgLAAQgKAAgJgDgAgMgXQgFADgDAGQgDAHAAAHQAAAIADAHQACAGAGADQAFAEAHAAQALAAAHgHQAGgIAAgNQAAgMgGgIQgHgHgLAAQgGAAgGAEg");
	this.shape_1273.setTransform(-237.4,177.6);

	this.shape_1274 = new cjs.Shape();
	this.shape_1274.graphics.f("#FF0000").s().p("AgJA3QgFgDgCgGQgCgGAAgKIAAgpIgDAAQgGAAgCgCQgDgCgBgEQABgDADgCQADgCAFAAIADAAIAAgNIAAgJQABgDABgCIAEgDIAGgCQAFAAADADQACACABADIABAJIAAAPIAJAAQAFAAADACQACACAAADQAAAFgDABQgFACgHAAIgEAAIAAAnIAAAIQAAADACABQACACAEAAIAGgBIAGAAQADAAACACQACACABADQgBAFgGADQgHADgMAAQgKAAgHgEg");
	this.shape_1274.setTransform(-246,176.1);

	this.shape_1275 = new cjs.Shape();
	this.shape_1275.graphics.f("#FF0000").s().p("AgTApQgJgDgHgGQgHgGgDgIQgDgJAAgJQAAgJADgIQAEgIAGgGQAGgGAKgDQAJgDAKAAQALAAAJADQAJADAHAGQAHAGADAIQADAIAAAJQAAAJgDAJQgEAIgGAGQgHAGgJADQgJADgLAAQgKAAgJgDgAgMgXQgFADgDAGQgDAHAAAHQAAAIADAHQACAGAGADQAFAEAHAAQALAAAHgHQAGgIAAgNQAAgMgGgIQgHgHgLAAQgGAAgGAEg");
	this.shape_1275.setTransform(-259.8,177.6);

	this.shape_1276 = new cjs.Shape();
	this.shape_1276.graphics.f("#FF0000").s().p("AAdA5QgEgDAAgGIAAgCIgKAIIgKAFQgFABgGAAQgKAAgHgDQgHgDgGgGQgFgHgDgIQgEgIAAgKQAAgTAMgLQAMgMASAAQAKAAAHAEQAHADAHAGIAAggQAAgGAEgEQADgDAFAAQAGAAADADQACADAAAGIAABfQAAAGgCADQgEADgFAAQgFAAgDgDgAgMgHQgEADgEAFQgDAHAAAIQAAAJADAGQAEAGAFADQAFADAGAAQAHAAAFgCQAGgDACgHQAEgGAAgJQAAgJgEgGQgCgFgGgDQgFgEgHAAQgGAAgGAEg");
	this.shape_1276.setTransform(-271.6,175.9);

	this.shape_1277 = new cjs.Shape();
	this.shape_1277.graphics.f("#FF0000").s().p("AAXApQgEgEAAgGIAAgjQAAgLgDgFQgDgHgKAAQgGABgGADQgFADgDAHQgBAFAAAMIAAAbQAAAHgEADQgDADgGAAQgFAAgEgDQgDgEAAgGIAAg+QAAgGADgDQADgDAFAAQAEAAACACQADABACACQABADAAAEIAAACQAHgHAHgDQAHgEAKAAQAKAAAIAEQAHAEAEAGQADAEAAAFIABALIAAAoQAAAHgDADQgEADgFAAQgGAAgDgDg");
	this.shape_1277.setTransform(-282.7,177.6);

	this.shape_1278 = new cjs.Shape();
	this.shape_1278.graphics.f("#FF0000").s().p("AAdApIgIgJQgJAGgJADQgHADgLAAQgKAAgGgDQgIgDgDgGQgFgGAAgHQABgIAGgGQAHgGALgCIALgCIAQgDIAOgDQAAgJgEgEQgEgEgLAAQgIAAgFACQgEACgEAFIgFAGQgBABgFABQgEAAgDgCQgDgDAAgEQAAgFAEgGQAFgFAKgDQAKgEANAAQARAAAJADQAJADAFAIQADAHAAAMIAAAMIAAAMQAAAGACAGIADAJQAAAEgEADQgDACgFAAQgEAAgDgDgAADAEIgOADQgDABgEACQgDADAAAFQAAAFADADQAFAEAHAAQAGAAAGgDQAHgDACgFQAEgEAAgLIAAgEIgQAEg");
	this.shape_1278.setTransform(-293.9,177.6);

	this.shape_1279 = new cjs.Shape();
	this.shape_1279.graphics.f("#FF0000").s().p("AAXApQgEgEAAgGIAAgjQAAgLgDgFQgDgHgKAAQgGABgGADQgFADgDAHQgBAFAAAMIAAAbQAAAHgEADQgDADgGAAQgFAAgEgDQgDgEAAgGIAAg+QAAgGADgDQADgDAFAAQAEAAACACQADABACACQABADAAAEIAAACQAHgHAHgDQAHgEAKAAQAKAAAIAEQAHAEAEAGQADAEAAAFIABALIAAAoQAAAHgDADQgEADgFAAQgGAAgDgDg");
	this.shape_1279.setTransform(-305.1,177.6);

	this.shape_1280 = new cjs.Shape();
	this.shape_1280.graphics.f("#FF0000").s().p("AAdApIgIgJQgKAGgIADQgHADgLAAQgJAAgIgDQgHgDgDgGQgFgGAAgHQAAgIAHgGQAGgGALgCIAMgCIAPgDIAPgDQgBgJgDgEQgEgEgKAAQgJAAgFACQgFACgDAFIgFAGQgBABgFABQgEAAgDgCQgDgDAAgEQAAgFAEgGQAFgFAKgDQAKgEAOAAQAPAAAKADQAKADADAIQAEAHAAAMIAAAMIAAAMQAAAGADAGIACAJQgBAEgDADQgEACgEAAQgEAAgDgDgAADAEIgOADQgEABgDACQgDADgBAFQAAAFAFADQAEAEAHAAQAGAAAGgDQAHgDACgFQAEgEAAgLIAAgEIgQAEg");
	this.shape_1280.setTransform(-316.2,177.6);

	this.shape_1281 = new cjs.Shape();
	this.shape_1281.graphics.f("#FF0000").s().p("AgXA5QgKgDgGgFQgFgFAAgGQAAgDADgCQADgEAEAAQAGAAAEAFIAEAEIAFAEIAGACIAIABQAJAAAFgCQAFgCADgFQACgEAAgFIABgQQgGAHgIAFQgHADgJAAQgNAAgJgGQgJgFgFgKQgFgJAAgNQAAgKADgIQADgHAFgGQAGgGAHgCQAIgDAIAAQAKAAAIAEQAHADAHAHIAAgCQAAgGADgDQADgDAFAAQAIAAACAEQACAEAAAIIAAA9QAAAMgCAHQgDAIgGAFQgGAFgJACQgJADgNAAQgNAAgKgDgAgQgkQgHAHAAANQAAANAHAGQAHAHAJAAQAGAAAGgDQAFgDAEgEQADgHAAgIQAAgNgHgIQgGgHgLAAQgKAAgGAHg");
	this.shape_1281.setTransform(-327.4,179.2);

	this.shape_1282 = new cjs.Shape();
	this.shape_1282.graphics.f("#FF0000").s().p("AAdApIgIgJQgJAGgJADQgHADgLAAQgKAAgGgEQgIgDgDgFQgFgGAAgGQABgJAGgHQAHgFALgCIALgCIAQgDIAOgEQAAgIgEgEQgEgEgLAAQgIAAgFACQgEADgEAEIgFAGQgBACgFgBQgEAAgDgBQgDgDAAgEQAAgGAEgFQAFgGAKgDQAKgDANAAQARAAAJADQAJADAFAIQADAHAAAMIAAAMIAAAMQAAAGACAHIADAIQAAADgEADQgEADgEAAQgEAAgDgDgAADAEIgOADQgDABgEADQgDACAAAFQAAAFADAEQAFADAHAAQAGAAAGgDQAHgDACgEQAEgFAAgMIAAgCIgQADg");
	this.shape_1282.setTransform(273.5,156.3);

	this.shape_1283 = new cjs.Shape();
	this.shape_1283.graphics.f("#FF0000").s().p("AgXAoQgJgDgFgGQgFgFAAgFQABgEADgDQADgCAEAAQAEAAACACIAEAFQADAFAGADQAGADAHAAQAIAAAFgDQAFgDgBgDQAAgGgEgDQgGgDgKgCQgNgCgHgDQgJgDgFgFQgEgFAAgHQgBgGAFgHQAEgFAKgEQAIgDAMAAQAJAAAIACQAHABAFADQAFADADAEQADADAAAEQAAAEgDACQgDACgFABQgEAAgDgCIgGgHQgDgCgEgDQgDgCgGAAQgHAAgEAEQgEACgBADQABAEADACIAIADIAPAEQAMADAHADQAHACAEAFQADAFABAFQAAAJgGAHQgEAGgKADQgKAEgNAAQgNAAgKgEg");
	this.shape_1283.setTransform(263,156.3);

	this.shape_1284 = new cjs.Shape();
	this.shape_1284.graphics.f("#FF0000").s().p("AgTApQgJgEgHgFQgHgGgDgIQgDgJAAgJQAAgJADgIQAEgIAGgGQAGgGAKgDQAJgDAKAAQALAAAJADQAJADAHAGQAHAGADAIQADAIAAAJQAAAJgDAJQgEAIgGAGQgHAFgJAEQgJADgLAAQgKAAgJgDgAgMgXQgFADgDAGQgDAGAAAIQAAAIADAHQACAGAGADQAFAEAHAAQALAAAHgHQAGgIAAgNQAAgMgGgIQgHgHgLAAQgGAAgGAEg");
	this.shape_1284.setTransform(252.3,156.3);

	this.shape_1285 = new cjs.Shape();
	this.shape_1285.graphics.f("#FF0000").s().p("AgJA3QgFgDgCgGQgCgGAAgKIAAgpIgDAAQgGAAgCgCQgDgCAAgEQAAgDADgCQADgCAFAAIADAAIAAgNIAAgJQABgDABgCIAEgDIAGgCQAFAAADADQACACABADIABAJIAAAPIAJAAQAFAAADACQADACgBADQAAAFgDABQgFACgHAAIgEAAIAAAnIAAAIQAAADACABQACACAEAAIAGgBIAGAAQADAAACACQACACABADQgBAFgGADQgHADgMAAQgKAAgHgEg");
	this.shape_1285.setTransform(243.7,154.8);

	this.shape_1286 = new cjs.Shape();
	this.shape_1286.graphics.f("#FF0000").s().p("AgIA4QgDgDAAgGIAAg9QAAgHADgDQADgDAFAAQAFAAAEADQADADAAAGIAAA+QAAAGgDADQgEAEgFAAQgFAAgDgEgAgIgoQgDgDAAgFQAAgFADgDQAEgDAEAAQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAQgEAAgEgDg");
	this.shape_1286.setTransform(237.6,154.7);

	this.shape_1287 = new cjs.Shape();
	this.shape_1287.graphics.f("#FF0000").s().p("AAZAqIgHgHIgSgXIgSAXIgGAHQgDACgEAAQgFAAgDgDQgDgCAAgDQAAgEAEgHIAXgbIgUgXQgFgGAAgEQAAgDADgDQADgCAFAAQAFAAADACIAGAHIAPATIAPgTIAIgHQACgCAFAAQAFAAADACQADADAAADIgBAFIgFAFIgUAXIAXAbQAGAHgBAEQABADgEACQgDADgFAAQgEAAgDgCg");
	this.shape_1287.setTransform(230.3,156.3);

	this.shape_1288 = new cjs.Shape();
	this.shape_1288.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgJADgIQADgIAHgGQAGgGAJgDQAJgDALAAQAOAAAKAFQALAGAFAIQAFAIAAAKQAAAGgFADQgGADgJgBIgwAAQAAAHAEAHQADAFAGADQAFACAGABIAIgBIAHgDIAGgFIAIgGQACgBADAAQAEAAACACQADACAAADQAAADgDAEQgDAEgFAEQgFADgIACQgIADgLAAQgXAAgNgMgAgNgXQgGAGgCALIAsAAQgBgLgGgGQgGgFgJAAQgJAAgFAFg");
	this.shape_1288.setTransform(220.1,156.3);

	this.shape_1289 = new cjs.Shape();
	this.shape_1289.graphics.f("#FF0000").s().p("AgTApQgJgEgHgFQgHgGgDgIQgDgJAAgJQAAgJADgIQAEgIAGgGQAGgGAKgDQAJgDAKAAQALAAAJADQAJADAHAGQAHAGADAIQADAIAAAJQAAAJgDAJQgEAIgGAGQgHAFgJAEQgJADgLAAQgKAAgJgDgAgMgXQgFADgDAGQgDAGAAAIQAAAIADAHQACAGAGADQAFAEAHAAQALAAAHgHQAGgIAAgNQAAgMgGgIQgHgHgLAAQgGAAgGAEg");
	this.shape_1289.setTransform(204.3,156.3);

	this.shape_1290 = new cjs.Shape();
	this.shape_1290.graphics.f("#FF0000").s().p("AgIA4QgDgDAAgGIAAg9QAAgHADgDQADgDAFAAQAFAAAEADQADADAAAGIAAA+QAAAGgDADQgEAEgFAAQgFAAgDgEgAgIgoQgDgDAAgFQAAgFADgDQAEgDAEAAQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAQgEAAgEgDg");
	this.shape_1290.setTransform(196.2,154.7);

	this.shape_1291 = new cjs.Shape();
	this.shape_1291.graphics.f("#FF0000").s().p("AgeAoQgDgDAAgGIAAg8QAAgOAMAAQAGAAADADQADAEAAAGQAFgGAEgEQAEgDAHAAQAJAAAHADQAHAEAAAFQAAAEgDADQgDADgDgBIgHgBIgJgBQgGgBgDADQgDADgCAFIgCALIgBAQIAAASQAAAGgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_1291.setTransform(190.2,156.3);

	this.shape_1292 = new cjs.Shape();
	this.shape_1292.graphics.f("#FF0000").s().p("AAcApIgIgJQgIAGgJADQgIADgKAAQgJAAgIgEQgHgDgEgFQgDgGAAgGQgBgJAHgHQAHgFAKgCIANgCIAOgDIAPgEQgBgIgDgEQgDgEgLAAQgJAAgFACQgEADgEAEIgFAGQgBACgFgBQgEAAgDgBQgDgDAAgEQAAgGAFgFQAEgGAKgDQAKgDAOAAQAQAAAJADQAKADADAIQAEAHAAAMIAAAMIAAAMQAAAGADAHIABAIQABADgEADQgDADgFAAQgEAAgEgDgAADAEIgNADQgEABgEADQgEACAAAFQABAFAEAEQAEADAHAAQAGAAAHgDQAFgDAEgEQADgFAAgMIAAgCIgQADg");
	this.shape_1292.setTransform(180,156.3);

	this.shape_1293 = new cjs.Shape();
	this.shape_1293.graphics.f("#FF0000").s().p("AgJA3QgGgDgBgGQgCgGAAgKIAAgpIgEAAQgEAAgEgCQgCgCAAgEQAAgDACgCQADgCAGAAIADAAIAAgNIAAgJQAAgDACgCIAEgDIAGgCQAFAAADADQADACAAADIAAAJIAAAPIAKAAQAFAAADACQACACAAADQAAAFgDABQgEACgHAAIgGAAIAAAnIABAIQABADABABQACACAEAAIAGgBIAGAAQADAAACACQADACgBADQAAAFgGADQgGADgNAAQgKAAgHgEg");
	this.shape_1293.setTransform(171.5,154.8);

	this.shape_1294 = new cjs.Shape();
	this.shape_1294.graphics.f("#FF0000").s().p("AgIA4QgDgDAAgGIAAg9QAAgHADgDQADgDAFAAQAFAAAEADQADADAAAGIAAA+QAAAGgDADQgEAEgFAAQgFAAgDgEgAgIgoQgDgDAAgFQAAgFADgDQAEgDAEAAQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAQgEAAgEgDg");
	this.shape_1294.setTransform(165.4,154.7);

	this.shape_1295 = new cjs.Shape();
	this.shape_1295.graphics.f("#FF0000").s().p("AgIA5QgDgEAAgGIAAhdQAAgGADgEQADgDAFAAQAFAAAEADQADAEAAAGIAABdQAAAHgDADQgEADgFAAQgFAAgDgDg");
	this.shape_1295.setTransform(160.4,154.6);

	this.shape_1296 = new cjs.Shape();
	this.shape_1296.graphics.f("#FF0000").s().p("AgTApQgJgEgHgFQgHgGgDgIQgDgJAAgJQAAgJADgIQAEgIAGgGQAGgGAKgDQAJgDAKAAQALAAAJADQAJADAHAGQAHAGADAIQADAIAAAJQAAAJgDAJQgEAIgGAGQgHAFgJAEQgJADgLAAQgKAAgJgDgAgMgXQgFADgDAGQgDAGAAAIQAAAIADAHQACAGAGADQAFAEAHAAQALAAAHgHQAGgIAAgNQAAgMgGgIQgHgHgLAAQgGAAgGAEg");
	this.shape_1296.setTransform(152.2,156.3);

	this.shape_1297 = new cjs.Shape();
	this.shape_1297.graphics.f("#FF0000").s().p("AgXAoQgKgDgEgGQgEgFgBgFQAAgEADgDQAEgCAEAAQAEAAACACIAEAFQADAFAGADQAFADAJAAQAHAAAFgDQAEgDABgDQAAgGgGgDQgEgDgLgCQgMgCgJgDQgHgDgFgFQgGgFAAgHQABgGAEgHQAEgFAJgEQAJgDAMAAQAJAAAHACQAIABAGADQAEADADAEQADADAAAEQAAAEgDACQgDACgFABQgEAAgCgCIgHgHQgCgCgEgDQgEgCgGAAQgHAAgEAEQgFACABADQgBAEAEACIAIADIAPAEQAMADAHADQAHACAEAFQADAFAAAFQAAAJgEAHQgGAGgJADQgKAEgNAAQgNAAgKgEg");
	this.shape_1297.setTransform(141.5,156.3);

	this.shape_1298 = new cjs.Shape();
	this.shape_1298.graphics.f("#FF0000").s().p("AAXAoQgEgDAAgGIAAgkQAAgKgDgGQgDgFgKAAQgGAAgGADQgFAEgDAGQgBAEAAAMIAAAcQAAAGgEADQgDAEgGAAQgFAAgEgEQgDgDAAgGIAAg+QAAgGADgDQADgDAFAAQAEAAACACQADAAACADQABADAAAEIAAACQAHgHAHgEQAHgDAKAAQAKAAAIADQAHAEAEAHQADAEAAAFIABAMIAAAnQAAAGgDADQgEAEgFAAQgGAAgDgEg");
	this.shape_1298.setTransform(126.3,156.3);

	this.shape_1299 = new cjs.Shape();
	this.shape_1299.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgJADgIQADgIAHgGQAGgGAJgDQAJgDALAAQAOAAAKAFQALAGAFAIQAFAIAAAKQAAAGgFADQgGADgJgBIgwAAQAAAHAEAHQADAFAGADQAFACAGABIAIgBIAHgDIAGgFIAIgGQACgBADAAQAEAAACACQADACAAADQAAADgDAEQgDAEgFAEQgFADgIACQgIADgLAAQgXAAgNgMgAgNgXQgGAGgCALIAsAAQgBgLgGgGQgGgFgJAAQgJAAgFAFg");
	this.shape_1299.setTransform(115.1,156.3);

	this.shape_1300 = new cjs.Shape();
	this.shape_1300.graphics.f("#FF0000").s().p("AAdApIgJgJQgJAGgIADQgIADgKAAQgJAAgIgEQgGgDgFgFQgDgGAAgGQgBgJAHgHQAGgFALgCIANgCIAOgDIAPgEQgBgIgDgEQgDgEgLAAQgJAAgFACQgFADgDAEIgFAGQgBACgFgBQgEAAgDgBQgDgDAAgEQAAgGAFgFQAEgGAKgDQAKgDAOAAQAQAAAJADQAKADADAIQAEAHAAAMIAAAMIAAAMQAAAGADAHIABAIQAAADgDADQgDADgFAAQgEAAgDgDgAADAEIgNADQgFABgDADQgEACAAAFQAAAFAFAEQAEADAHAAQAGAAAHgDQAFgDAEgEQADgFAAgMIAAgCIgQADg");
	this.shape_1300.setTransform(99.3,156.3);

	this.shape_1301 = new cjs.Shape();
	this.shape_1301.graphics.f("#FF0000").s().p("AgeAoQgDgDAAgGIAAg8QAAgOAMAAQAGAAADADQADAEAAAGQAFgGAEgEQAEgDAHAAQAJAAAHADQAHAEAAAFQAAAEgDADQgDADgDgBIgHgBIgJgBQgGgBgDADQgDADgCAFIgCALIgBAQIAAASQAAAGgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_1301.setTransform(90.8,156.3);

	this.shape_1302 = new cjs.Shape();
	this.shape_1302.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgJADgIQADgIAHgGQAGgGAJgDQAJgDALAAQAOAAAKAFQALAGAFAIQAFAIAAAKQAAAGgFADQgGADgJgBIgwAAQAAAHAEAHQADAFAGADQAFACAGABIAIgBIAHgDIAGgFIAIgGQACgBADAAQAEAAACACQADACAAADQAAADgDAEQgDAEgFAEQgFADgIACQgIADgLAAQgXAAgNgMgAgNgXQgGAGgCALIAsAAQgBgLgGgGQgGgFgJAAQgJAAgFAFg");
	this.shape_1302.setTransform(80.5,156.3);

	this.shape_1303 = new cjs.Shape();
	this.shape_1303.graphics.f("#FF0000").s().p("AgeAoQgDgDAAgGIAAg8QAAgOAMAAQAHAAACADQADAEAAAGQAEgGAFgEQAEgDAIAAQAHAAAIADQAHAEAAAFQAAAEgDADQgDADgEgBIgGgBIgKgBQgFgBgDADQgDADgBAFIgEALIAAAQIAAASQAAAGgDADQgEAEgGAAQgFAAgEgEg");
	this.shape_1303.setTransform(71.9,156.3);

	this.shape_1304 = new cjs.Shape();
	this.shape_1304.graphics.f("#FF0000").s().p("AgeAoQgDgDAAgGIAAg8QAAgOAMAAQAGAAADADQADAEAAAGQAEgGAFgEQAEgDAIAAQAHAAAIADQAHAEAAAFQAAAEgDADQgDADgEgBIgGgBIgJgBQgGgBgDADQgDADgBAFIgDALIgBAQIAAASQAAAGgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_1304.setTransform(64,156.3);

	this.shape_1305 = new cjs.Shape();
	this.shape_1305.graphics.f("#FF0000").s().p("AAdApIgJgJQgJAGgIADQgIADgKAAQgJAAgIgEQgGgDgEgFQgEgGgBgGQAAgJAHgHQAGgFALgCIAMgCIAPgDIAPgEQgBgIgDgEQgDgEgLAAQgJAAgFACQgFADgDAEIgFAGQgBACgFgBQgEAAgDgBQgDgDAAgEQAAgGAEgFQAFgGAKgDQAKgDAOAAQAPAAAKADQAKADADAIQAEAHAAAMIAAAMIAAAMQAAAGADAHIACAIQgBADgDADQgDADgFAAQgEAAgDgDgAADAEIgOADQgEABgDADQgDACgBAFQAAAFAFAEQAEADAHAAQAGAAAGgDQAHgDACgEQAEgFAAgMIAAgCIgQADg");
	this.shape_1305.setTransform(53.8,156.3);

	this.shape_1306 = new cjs.Shape();
	this.shape_1306.graphics.f("#FF0000").s().p("AghAgQgNgMAAgTQAAgNAGgKQAGgKALgGQALgFAPAAQAKAAAIACQAIADAFAEQAGAEADAEQADAEAAAEQAAAEgEACQgDADgFABQgDAAgCgCIgEgEQgFgHgFgCQgFgDgHAAQgKgBgHAIQgHAHAAANQAAAGACAFQACAFADAEQADADAFACQAEACAFAAQAHAAAGgEQAFgCAEgHIAFgFQADgDADAAQAFABADADQADADAAADQAAAEgDAFQgDAEgFAEQgGAFgJACQgIADgLAAQgWAAgNgMg");
	this.shape_1306.setTransform(42.6,156.3);

	this.shape_1307 = new cjs.Shape();
	this.shape_1307.graphics.f("#FF0000").s().p("AAdApIgIgJQgJAGgJADQgHADgLAAQgKAAgGgEQgIgDgDgFQgFgGAAgGQABgJAGgHQAHgFALgCIALgCIAQgDIAOgEQAAgIgEgEQgEgEgLAAQgIAAgFACQgEADgEAEIgFAGQgBACgFgBQgEAAgDgBQgDgDAAgEQAAgGAEgFQAFgGAKgDQAKgDANAAQARAAAJADQAJADAFAIQADAHAAAMIAAAMIAAAMQAAAGACAHIADAIQAAADgEADQgDADgFAAQgEAAgDgDgAADAEIgOADQgDABgEADQgDACAAAFQAAAFADAEQAFADAHAAQAGAAAGgDQAHgDACgEQAEgFAAgMIAAgCIgQADg");
	this.shape_1307.setTransform(26.9,156.3);

	this.shape_1308 = new cjs.Shape();
	this.shape_1308.graphics.f("#FF0000").s().p("AAXAoQgEgDAAgGIAAgkQAAgKgDgGQgDgFgKAAQgGAAgGADQgFAEgDAGQgBAEAAAMIAAAcQAAAGgEADQgDAEgGAAQgFAAgEgEQgDgDAAgGIAAg+QAAgGADgDQADgDAFAAQAEAAACACQADAAACADQABADAAAEIAAACQAHgHAHgEQAHgDAKAAQAKAAAIADQAHAEAEAHQADAEAAAFIABAMIAAAnQAAAGgDADQgEAEgFAAQgGAAgDgEg");
	this.shape_1308.setTransform(15.8,156.3);

	this.shape_1309 = new cjs.Shape();
	this.shape_1309.graphics.f("#FF0000").s().p("AAYApQgDgEAAgFIAAgDQgFAFgEADQgFADgGACQgFACgHAAQgJAAgHgEQgIgCgEgHQgEgGAAgNIAAgqQAAgHADgDQAEgDAFAAQAGAAADADQAEADAAAHIAAAhQAAAIABAFQACAGADACQAEADAHAAQAFAAAFgDQAGgDACgGQACgEAAgPIAAgaQAAgHAEgDQADgDAGAAQAFAAAEADQADADAAAHIAAA9QAAAHgDADQgDADgFAAQgFAAgEgDg");
	this.shape_1309.setTransform(4.6,156.3);

	this.shape_1310 = new cjs.Shape();
	this.shape_1310.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgJADgIQADgIAHgGQAGgGAJgDQAJgDALAAQAOAAAKAFQALAGAFAIQAFAIAAAKQAAAGgFADQgGADgJgBIgwAAQAAAHAEAHQADAFAGADQAFACAGABIAIgBIAHgDIAGgFIAIgGQACgBADAAQAEAAACACQADACAAADQAAADgDAEQgDAEgFAEQgFADgIACQgIADgLAAQgXAAgNgMgAgNgXQgGAGgCALIAsAAQgBgLgGgGQgGgFgJAAQgJAAgFAFg");
	this.shape_1310.setTransform(-11.3,156.3);

	this.shape_1311 = new cjs.Shape();
	this.shape_1311.graphics.f("#FF0000").s().p("AAcA5QgDgDAAgGIAAgCIgJAIIgLAFQgFABgHAAQgIAAgIgDQgIgDgFgGQgGgHgDgIQgCgIAAgKQAAgTALgLQALgMATAAQAKAAAHAEQAHADAHAGIAAggQAAgGADgEQADgDAGAAQAFAAADADQADADAAAGIAABfQAAAGgDADQgDADgFAAQgFAAgEgDgAgLgHQgGADgCAFQgDAHgBAIQABAJADAGQADAGAFADQAGADAFAAQAGAAAGgCQAFgDADgHQAEgGAAgJQAAgJgEgGQgDgFgFgDQgGgEgGAAQgGAAgFAEg");
	this.shape_1311.setTransform(-22.9,154.6);

	this.shape_1312 = new cjs.Shape();
	this.shape_1312.graphics.f("#FF0000").s().p("AgTApQgJgEgHgFQgHgGgDgIQgDgJAAgJQAAgJADgIQAEgIAGgGQAGgGAKgDQAJgDAKAAQALAAAJADQAJADAHAGQAHAGADAIQADAIAAAJQAAAJgDAJQgEAIgGAGQgHAFgJAEQgJADgLAAQgKAAgJgDgAgMgXQgFADgDAGQgDAGAAAIQAAAIADAHQACAGAGADQAFAEAHAAQALAAAHgHQAGgIAAgNQAAgMgGgIQgHgHgLAAQgGAAgGAEg");
	this.shape_1312.setTransform(-38.7,156.3);

	this.shape_1313 = new cjs.Shape();
	this.shape_1313.graphics.f("#FF0000").s().p("AAwAoQgDgDAAgGIAAgkIAAgLQgCgFgDgCQgCgDgHAAQgEAAgFADQgEACgDAEQgCAGAAANIAAAdQAAAGgEADQgDAEgGAAQgFAAgDgEQgDgDgBgGIAAgiIgBgNQAAgEgDgDQgDgDgFAAQgNAAgEAHQgDAHAAANIAAAeQAAAGgEADQgEAEgGAAQgFAAgEgEQgDgDAAgGIAAg+QAAgFADgEQAEgDAEAAQAFAAAEADQAEADgBAFIAAACQAHgHAIgDQAGgDAKAAQAJAAAGADQAHADAEAHQAGgHAHgDQAHgDAJAAQAKAAAIADQAHAEADAGQAEAHAAAMIAAAqQAAAGgEADQgDAEgGAAQgGAAgEgEg");
	this.shape_1313.setTransform(-52.5,156.3);

	this.shape_1314 = new cjs.Shape();
	this.shape_1314.graphics.f("#FF0000").s().p("AgTApQgJgEgHgFQgHgGgDgIQgDgJAAgJQAAgJADgIQAEgIAGgGQAGgGAKgDQAJgDAKAAQALAAAJADQAJADAHAGQAHAGADAIQADAIAAAJQAAAJgDAJQgEAIgGAGQgHAFgJAEQgJADgLAAQgKAAgJgDgAgMgXQgFADgDAGQgDAGAAAIQAAAIADAHQACAGAGADQAFAEAHAAQALAAAHgHQAGgIAAgNQAAgMgGgIQgHgHgLAAQgGAAgGAEg");
	this.shape_1314.setTransform(-66.4,156.3);

	this.shape_1315 = new cjs.Shape();
	this.shape_1315.graphics.f("#FF0000").s().p("AghAgQgNgMAAgTQAAgNAGgKQAGgKALgGQALgFAPAAQAKAAAIACQAIADAFAEQAGAEADAEQADAEAAAEQAAAEgEACQgDADgFABQgDAAgCgCIgEgEQgFgHgFgCQgFgDgHAAQgKgBgHAIQgHAHAAANQAAAGACAFQACAFADAEQADADAFACQAEACAFAAQAHAAAGgEQAFgCAEgHIAFgFQADgDADAAQAFABADADQADADAAADQAAAEgDAFQgDAEgFAEQgGAFgJACQgIADgLAAQgWAAgNgMg");
	this.shape_1315.setTransform(-77.6,156.3);

	this.shape_1316 = new cjs.Shape();
	this.shape_1316.graphics.f("#FF0000").s().p("AgIA4QgDgDAAgGIAAg9QAAgHADgDQADgDAFAAQAFAAAEADQADADAAAGIAAA+QAAAGgDADQgEAEgFAAQgFAAgDgEgAgIgoQgDgDAAgFQAAgFADgDQAEgDAEAAQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAQgEAAgEgDg");
	this.shape_1316.setTransform(-90.2,154.7);

	this.shape_1317 = new cjs.Shape();
	this.shape_1317.graphics.f("#FF0000").s().p("AgXAoQgKgDgEgGQgFgFABgFQAAgEADgDQADgCAEAAQAEAAACACIAEAFQAEAFAFADQAGADAHAAQAIAAAFgDQAFgDgBgDQAAgGgEgDQgGgDgKgCQgMgCgIgDQgIgDgGgFQgEgFAAgHQgBgGAFgHQAEgFAKgEQAIgDAMAAQAJAAAIACQAHABAFADQAFADADAEQADADAAAEQAAAEgDACQgDACgFABQgEAAgCgCIgHgHQgDgCgEgDQgDgCgGAAQgGAAgFAEQgEACgBADQABAEADACIAJADIAOAEQALADAIADQAHACAEAFQADAFAAAFQABAJgGAHQgEAGgKADQgKAEgNAAQgNAAgKgEg");
	this.shape_1317.setTransform(-97.8,156.3);

	this.shape_1318 = new cjs.Shape();
	this.shape_1318.graphics.f("#FF0000").s().p("AAdApIgIgJQgKAGgIADQgHADgLAAQgJAAgHgEQgIgDgDgFQgFgGAAgGQABgJAGgHQAHgFALgCIALgCIAPgDIAPgEQgBgIgDgEQgEgEgKAAQgJAAgFACQgEADgEAEIgFAGQgBACgFgBQgEAAgDgBQgDgDAAgEQAAgGAEgFQAFgGAKgDQAKgDAOAAQAPAAAKADQAKADAEAIQADAHAAAMIAAAMIAAAMQAAAGADAHIACAIQgBADgDADQgEADgEAAQgEAAgDgDgAADAEIgOADQgEABgDADQgDACgBAFQAAAFAEAEQAFADAHAAQAGAAAGgDQAHgDACgEQAEgFAAgMIAAgCIgQADg");
	this.shape_1318.setTransform(-108.4,156.3);

	this.shape_1319 = new cjs.Shape();
	this.shape_1319.graphics.f("#FF0000").s().p("AAxAoQgEgDAAgGIAAgkIgBgLQgBgFgCgCQgDgDgGAAQgFAAgEADQgFACgDAEQgCAGAAANIAAAdQAAAGgEADQgDAEgGAAQgFAAgDgEQgDgDAAgGIAAgiIgBgNQgBgEgDgDQgCgDgHAAQgMAAgDAHQgFAHAAANIAAAeQABAGgEADQgEAEgFAAQgGAAgDgEQgEgDAAgGIAAg+QAAgFADgEQADgDAGAAQAFAAADADQADADAAAFIAAACQAHgHAIgDQAHgDAIAAQAKAAAGADQAHADAEAHQAGgHAHgDQAHgDAJAAQAKAAAIADQAHAEAEAGQADAHAAAMIAAAqQAAAGgDADQgFAEgFAAQgFAAgEgEg");
	this.shape_1319.setTransform(-122.1,156.3);

	this.shape_1320 = new cjs.Shape();
	this.shape_1320.graphics.f("#FF0000").s().p("AAdApIgJgJQgJAGgIADQgIADgKAAQgJAAgIgEQgGgDgEgFQgEgGgBgGQAAgJAHgHQAGgFALgCIAMgCIAPgDIAPgEQgBgIgDgEQgDgEgLAAQgJAAgFACQgFADgDAEIgFAGQgBACgFgBQgEAAgDgBQgDgDAAgEQAAgGAEgFQAFgGAKgDQAKgDAOAAQAPAAAKADQAKADADAIQAEAHAAAMIAAAMIAAAMQAAAGADAHIABAIQAAADgDADQgDADgFAAQgEAAgDgDgAADAEIgOADQgEABgDADQgDACgBAFQAAAFAFAEQAEADAHAAQAGAAAGgDQAHgDACgEQAEgFAAgMIAAgCIgQADg");
	this.shape_1320.setTransform(-140.6,156.3);

	this.shape_1321 = new cjs.Shape();
	this.shape_1321.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgJADgIQADgIAHgGQAGgGAJgDQAJgDALAAQAOAAAKAFQALAGAFAIQAFAIAAAKQAAAGgFADQgGADgJgBIgwAAQAAAHAEAHQADAFAGADQAFACAGABIAIgBIAHgDIAGgFIAIgGQACgBADAAQAEAAACACQADACAAADQAAADgDAEQgDAEgFAEQgFADgIACQgIADgLAAQgXAAgNgMgAgNgXQgGAGgCALIAsAAQgBgLgGgGQgGgFgJAAQgJAAgFAFg");
	this.shape_1321.setTransform(-151.7,156.3);

	this.shape_1322 = new cjs.Shape();
	this.shape_1322.graphics.f("#FF0000").s().p("AgeAoQgDgDAAgGIAAg8QAAgOAMAAQAHAAACADQADAEAAAGQAEgGAFgEQAEgDAIAAQAHAAAIADQAHAEAAAFQAAAEgDADQgDADgEgBIgGgBIgKgBQgFgBgDADQgDADgBAFIgEALIAAAQIAAASQAAAGgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_1322.setTransform(-160.3,156.3);

	this.shape_1323 = new cjs.Shape();
	this.shape_1323.graphics.f("#FF0000").s().p("AghAgQgNgMAAgTQAAgNAGgKQAGgKALgGQALgFAPAAQAKAAAIACQAIADAFAEQAGAEADAEQADAEAAAEQAAAEgEACQgDADgFABQgDAAgCgCIgEgEQgFgHgFgCQgFgDgHAAQgKgBgHAIQgHAHAAANQAAAGACAFQACAFADAEQADADAFACQAEACAFAAQAHAAAGgEQAFgCAEgHIAFgFQADgDADAAQAFABADADQADADAAADQAAAEgDAFQgDAEgFAEQgGAFgJACQgIADgLAAQgWAAgNgMg");
	this.shape_1323.setTransform(-170.6,156.3);

	this.shape_1324 = new cjs.Shape();
	this.shape_1324.graphics.f("#FF0000").s().p("AAdApIgIgJQgKAGgIADQgHADgLAAQgJAAgHgEQgIgDgDgFQgFgGAAgGQABgJAGgHQAHgFALgCIALgCIAPgDIAPgEQgBgIgDgEQgEgEgKAAQgJAAgFACQgEADgEAEIgFAGQgBACgFgBQgEAAgDgBQgDgDAAgEQAAgGAEgFQAFgGAKgDQAKgDAOAAQAPAAAKADQAKADAEAIQADAHAAAMIAAAMIAAAMQAAAGADAHIACAIQgBADgDADQgEADgEAAQgEAAgDgDgAADAEIgOADQgEABgDADQgDACgBAFQAAAFAEAEQAFADAHAAQAGAAAGgDQAHgDACgEQAEgFAAgMIAAgCIgQADg");
	this.shape_1324.setTransform(-186.3,156.3);

	this.shape_1325 = new cjs.Shape();
	this.shape_1325.graphics.f("#FF0000").s().p("AAdA5QgEgDAAgGIAAgCIgKAIIgKAFQgFABgGAAQgKAAgHgDQgIgDgFgGQgFgHgDgIQgEgIAAgKQAAgTAMgLQAMgMASAAQAKAAAHAEQAHADAHAGIAAggQAAgGAEgEQADgDAFAAQAFAAAEADQACADAAAGIAABfQAAAGgCADQgEADgFAAQgFAAgDgDgAgMgHQgEADgEAFQgDAHAAAIQAAAJADAGQAEAGAFADQAGADAFAAQAHAAAFgCQAGgDADgHQADgGAAgJQAAgJgDgGQgDgFgGgDQgFgEgHAAQgGAAgGAEg");
	this.shape_1325.setTransform(-197.9,154.6);

	this.shape_1326 = new cjs.Shape();
	this.shape_1326.graphics.f("#FF0000").s().p("AAXAoQgEgDAAgGIAAgkQAAgKgDgGQgDgFgKAAQgGAAgGADQgFAEgDAGQgBAEAAAMIAAAcQAAAGgEADQgDAEgGAAQgFAAgEgEQgDgDAAgGIAAg+QAAgGADgDQADgDAFAAQAEAAACACQADAAACADQABADAAAEIAAACQAHgHAHgEQAHgDAKAAQAKAAAIADQAHAEAEAHQADAEAAAFIABAMIAAAnQAAAGgDADQgEAEgFAAQgGAAgDgEg");
	this.shape_1326.setTransform(-209.1,156.3);

	this.shape_1327 = new cjs.Shape();
	this.shape_1327.graphics.f("#FF0000").s().p("AAcApIgHgJQgJAGgJADQgIADgKAAQgKAAgGgEQgHgDgFgFQgEgGAAgGQABgJAGgHQAHgFALgCIALgCIAQgDIAOgEQAAgIgEgEQgEgEgLAAQgIAAgFACQgEADgEAEIgFAGQgBACgFgBQgEAAgDgBQgDgDAAgEQAAgGAEgFQAFgGAKgDQAKgDANAAQARAAAJADQAJADAFAIQADAHAAAMIAAAMIAAAMQAAAGACAHIADAIQAAADgEADQgEADgEAAQgEAAgEgDgAADAEIgOADQgDABgEADQgEACABAFQAAAFADAEQAFADAHAAQAGAAAGgDQAGgDADgEQAEgFAAgMIAAgCIgQADg");
	this.shape_1327.setTransform(-220.2,156.3);

	this.shape_1328 = new cjs.Shape();
	this.shape_1328.graphics.f("#FF0000").s().p("AgDA7IgIgDIgGgEIgHgGIAAACQAAAGgDADQgEADgFAAQgFAAgDgDQgDgDAAgGIAAheQAAgGADgEQADgDAFAAQAGAAADADQADADAAAGIAAAhQAHgGAHgDQAHgEAKAAQANAAAJAFQAJAGAFAJQAFAJAAANQAAAKgCAIQgDAJgGAGQgFAGgIADQgIADgJAAIgKgBgAgLgHQgGADgDAGQgDAGAAAJQAAANAHAHQAHAGAKAAQAJAAAHgHQAHgHAAgNQAAgJgDgGQgDgFgFgDQgFgEgHAAQgGAAgGAEg");
	this.shape_1328.setTransform(-231.4,154.6);

	this.shape_1329 = new cjs.Shape();
	this.shape_1329.graphics.f("#FF0000").s().p("AAcApIgIgJQgJAGgIADQgIADgKAAQgJAAgIgEQgGgDgFgFQgDgGAAgGQgBgJAHgHQAGgFALgCIANgCIAOgDIAPgEQgBgIgDgEQgDgEgLAAQgJAAgFACQgFADgDAEIgFAGQgBACgFgBQgEAAgDgBQgDgDAAgEQAAgGAFgFQAEgGAKgDQAKgDAOAAQAQAAAJADQAKADADAIQAEAHAAAMIAAAMIAAAMQAAAGADAHIABAIQAAADgDADQgDADgFAAQgEAAgEgDgAADAEIgNADQgFABgDADQgEACAAAFQAAAFAFAEQAEADAHAAQAGAAAHgDQAFgDAEgEQADgFAAgMIAAgCIgQADg");
	this.shape_1329.setTransform(-247.6,156.3);

	this.shape_1330 = new cjs.Shape();
	this.shape_1330.graphics.f("#FF0000").s().p("AghAgQgNgMAAgTQAAgNAGgKQAGgKALgGQALgFAPAAQAKAAAIACQAIADAFAEQAGAEADAEQADAEAAAEQAAAEgEACQgDADgFABQgDAAgCgCIgEgEQgFgHgFgCQgFgDgHAAQgKgBgHAIQgHAHAAANQAAAGACAFQACAFADAEQADADAFACQAEACAFAAQAHAAAGgEQAFgCAEgHIAFgFQADgDADAAQAFABADADQADADAAADQAAAEgDAFQgDAEgFAEQgGAFgJACQgIADgLAAQgWAAgNgMg");
	this.shape_1330.setTransform(-258.8,156.3);

	this.shape_1331 = new cjs.Shape();
	this.shape_1331.graphics.f("#FF0000").s().p("AgIA4QgDgDAAgGIAAg9QAAgHADgDQADgDAFAAQAFAAAEADQADADAAAGIAAA+QAAAGgDADQgEAEgFAAQgFAAgDgEgAgIgoQgDgDAAgFQAAgFADgDQAEgDAEAAQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAQgEAAgEgDg");
	this.shape_1331.setTransform(-266.7,154.7);

	this.shape_1332 = new cjs.Shape();
	this.shape_1332.graphics.f("#FF0000").s().p("AgXAoQgJgDgFgGQgFgFAAgFQABgEADgDQADgCAEAAQAEAAACACIAEAFQAEAFAFADQAGADAHAAQAIAAAFgDQAFgDgBgDQAAgGgEgDQgGgDgKgCQgNgCgHgDQgIgDgGgFQgEgFAAgHQgBgGAFgHQAEgFAKgEQAIgDAMAAQAJAAAIACQAHABAFADQAFADADAEQADADAAAEQAAAEgDACQgDACgFABQgEAAgDgCIgGgHQgDgCgEgDQgDgCgGAAQgHAAgEAEQgEACgBADQABAEADACIAIADIAPAEQAMADAHADQAHACAEAFQADAFABAFQAAAJgGAHQgEAGgKADQgKAEgNAAQgNAAgKgEg");
	this.shape_1332.setTransform(-274.3,156.3);

	this.shape_1333 = new cjs.Shape();
	this.shape_1333.graphics.f("#FF0000").s().p("AAdA5IgIgJQgJAFgJAEQgHACgLAAQgKAAgGgDQgIgDgDgFQgFgHAAgGQABgJAGgGQAHgGALgCIALgDIAQgDIAOgDQAAgHgEgFQgEgDgLAAQgIAAgFABQgEADgEAFIgFAFQgBABgFAAQgEAAgDgCQgDgBAAgEQAAgGAEgFQAFgGAKgDQAKgDANgBQARAAAJAEQAJADAFAIQADAGAAAMIAAAMIAAANQAAAFACAHIADAJQAAADgEADQgDACgFAAQgEAAgDgCgAADAUIgOADQgDABgEACQgDADAAAEQAAAFADAEQAFADAHAAQAGAAAGgDQAHgDACgEQAEgFAAgLIAAgDIgQAEgAgPgmIACgFIAEgGQADgGADgCQADgCAEABIAMAAQAFAAAAABIgGAEIgKAJIgGAGQgFABgGAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAg");
	this.shape_1333.setTransform(-284.9,154.7);

	this.shape_1334 = new cjs.Shape();
	this.shape_1334.graphics.f("#FF0000").s().p("AgIA5QgDgEAAgGIAAhdQAAgGADgEQADgDAFAAQAFAAAEADQADAEAAAGIAABdQAAAHgDADQgEADgFAAQgFAAgDgDg");
	this.shape_1334.setTransform(-292.9,154.6);

	this.shape_1335 = new cjs.Shape();
	this.shape_1335.graphics.f("#FF0000").s().p("AghAgQgNgMAAgTQAAgNAGgKQAGgKALgGQALgFAPAAQAKAAAIACQAIADAFAEQAGAEADAEQADAEAAAEQAAAEgEACQgDADgFABQgDAAgCgCIgEgEQgFgHgFgCQgFgDgHAAQgKgBgHAIQgHAHAAANQAAAGACAFQACAFADAEQADADAFACQAEACAFAAQAHAAAGgEQAFgCAEgHIAFgFQADgDADAAQAFABADADQADADAAADQAAAEgDAFQgDAEgFAEQgGAFgJACQgIADgLAAQgWAAgNgMg");
	this.shape_1335.setTransform(-300.6,156.3);

	this.shape_1336 = new cjs.Shape();
	this.shape_1336.graphics.f("#FF0000").s().p("AgoA6QgGgCAAgGQAAgDADgCQACgDAFAAIAEABIAEABIAHgCIAEgDIAFgJIACgEIgehDQgDgFAAgDQAAgDACgCIAEgEQADgBADAAQAFAAADADQADADACAFIAUA0IAUgwIAEgJIAEgFIAGgBIAGABQACABACADIABAEIgBAFIgCAFIghBJQgEAKgEAFQgDAGgGADQgHADgLAAQgLAAgFgCg");
	this.shape_1336.setTransform(292.7,136.6);

	this.shape_1337 = new cjs.Shape();
	this.shape_1337.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgJADgIQADgIAHgGQAGgGAJgDQAJgDALAAQAOAAAKAFQALAGAFAIQAFAIAAAJQAAAIgFACQgGADgJAAIgwAAQAAAHAEAGQADAFAGADQAFADAGgBIAIAAIAHgDIAGgFIAIgFQACgCADAAQAEAAACACQADACAAADQAAADgDAEQgDAEgFAEQgFADgIADQgIACgLAAQgXAAgNgMgAgNgXQgGAGgCALIAsAAQgBgLgGgGQgGgFgJAAQgJAAgFAFg");
	this.shape_1337.setTransform(277.6,135);

	this.shape_1338 = new cjs.Shape();
	this.shape_1338.graphics.f("#FF0000").s().p("AgeAoQgDgDAAgGIAAg7QAAgPAMAAQAHAAACADQADAEAAAHQAEgHAFgEQAEgDAIAAQAHAAAIADQAHAEAAAFQAAAEgDADQgDACgEAAIgGgBIgKgCQgFABgDACQgDADgBAEIgEAMIAAAPIAAATQAAAGgEADQgDAEgFAAQgGAAgEgEg");
	this.shape_1338.setTransform(269,135);

	this.shape_1339 = new cjs.Shape();
	this.shape_1339.graphics.f("#FF0000").s().p("AgDA7IgIgDIgGgEIgHgGIAAACQAAAGgDADQgEADgFAAQgFAAgDgDQgDgDAAgGIAAheQAAgGADgEQADgDAFAAQAGAAADADQADADAAAGIAAAhQAHgGAHgDQAHgEAKAAQANAAAJAFQAJAGAFAJQAFAJAAANQAAAKgCAIQgDAJgGAGQgFAGgIADQgIADgJAAIgKgBgAgLgHQgGADgDAGQgDAGAAAJQAAANAHAHQAHAGAKAAQAJAAAHgHQAHgHAAgNQAAgJgDgGQgDgFgFgDQgFgEgHAAQgGAAgGAEg");
	this.shape_1339.setTransform(258.8,133.3);

	this.shape_1340 = new cjs.Shape();
	this.shape_1340.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgJADgIQADgIAHgGQAGgGAJgDQAJgDALAAQAOAAAKAFQALAGAFAIQAFAIAAAJQAAAIgFACQgGADgJAAIgwAAQAAAHAEAGQADAFAGADQAFADAGgBIAIAAIAHgDIAGgFIAIgFQACgCADAAQAEAAACACQADACAAADQAAADgDAEQgDAEgFAEQgFADgIADQgIACgLAAQgXAAgNgMgAgNgXQgGAGgCALIAsAAQgBgLgGgGQgGgFgJAAQgJAAgFAFg");
	this.shape_1340.setTransform(247.4,135);

	this.shape_1341 = new cjs.Shape();
	this.shape_1341.graphics.f("#FF0000").s().p("AgIA5QgDgEAAgGIAAhdQAAgGADgEQADgDAFAAQAFAAAEADQADAEAAAGIAABdQAAAHgDADQgEADgFAAQgFAAgDgDg");
	this.shape_1341.setTransform(239.3,133.3);

	this.shape_1342 = new cjs.Shape();
	this.shape_1342.graphics.f("#FF0000").s().p("AghAvQgNgLAAgVQAAgJADgIQADgIAHgFQAGgHAJgCQAJgDALAAQAOAAAKAEQALAGAFAJQAFAIAAAIQAAAIgFADQgGACgJAAIgwAAQAAAHAEAGQADAFAGADQAFADAGAAIAIAAIAHgEIAGgEIAIgGQACgBADgBQAEAAACACQADADAAADQAAACgDAFQgDAEgFADQgFADgIADQgIACgLAAQgXAAgNgMgAgNgHQgGAGgCAKIAsAAQgBgKgGgGQgGgFgJgBQgJABgFAFgAgQgnIACgEIAFgHQADgFADgCQACgBAFgBIAMAAQAFAAAAABIgGAGIgKAJIgGAEQgFACgGABQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_1342.setTransform(231.3,133.4);

	this.shape_1343 = new cjs.Shape();
	this.shape_1343.graphics.f("#FF0000").s().p("AghAgQgNgMAAgTQAAgMAGgLQAGgKALgFQALgGAPAAQAKAAAIACQAIADAFADQAGAEADAFQADAFAAADQAAAEgEADQgDADgFAAQgDgBgCgBIgEgFQgFgGgFgDQgFgCgHAAQgKAAgHAHQgHAIAAAMQAAAFACAFQACAGADADQADAEAFACQAEABAFAAQAHAAAGgCQAFgEAEgFIAFgGQADgDADABQAFAAADACQADAEAAADQAAAEgDAFQgDAEgFAFQgGADgJAEQgIACgLAAQgWAAgNgMg");
	this.shape_1343.setTransform(220.1,135);

	this.shape_1344 = new cjs.Shape();
	this.shape_1344.graphics.f("#FF0000").s().p("AAdApIgIgJQgKAGgIADQgHADgLAAQgJAAgIgEQgHgDgDgFQgFgGAAgHQAAgJAHgGQAGgFAMgCIALgCIAPgDIAPgDQgBgJgDgEQgEgEgKAAQgJAAgFACQgFADgDAEIgFAGQgBACgFAAQgEgBgDgCQgDgCAAgEQAAgGAEgFQAFgGAKgDQAKgDAOAAQAPAAAKADQAKAEADAHQAEAHAAAMIAAAMIAAAMQAAAGADAHIACAIQgBAEgDADQgEACgEAAQgEAAgDgDgAADAEIgOADQgEABgDACQgDADgBAFQAAAFAFAEQAEADAHAAQAGAAAGgDQAHgDACgFQAEgEAAgMIAAgCIgQADg");
	this.shape_1344.setTransform(204.4,135);

	this.shape_1345 = new cjs.Shape();
	this.shape_1345.graphics.f("#FF0000").s().p("AgIA5QgDgEAAgGIAAhdQAAgGADgEQADgDAFAAQAFAAAEADQADAEAAAGIAABdQAAAHgDADQgEADgFAAQgFAAgDgDg");
	this.shape_1345.setTransform(196.4,133.3);

	this.shape_1346 = new cjs.Shape();
	this.shape_1346.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgJADgIQADgIAHgGQAGgGAJgDQAJgDALAAQAOAAAKAFQALAGAFAIQAFAIAAAJQAAAIgFACQgGADgJAAIgwAAQAAAHAEAGQADAFAGADQAFADAGgBIAIAAIAHgDIAGgFIAIgFQACgCADAAQAEAAACACQADACAAADQAAADgDAEQgDAEgFAEQgFADgIADQgIACgLAAQgXAAgNgMgAgNgXQgGAGgCALIAsAAQgBgLgGgGQgGgFgJAAQgJAAgFAFg");
	this.shape_1346.setTransform(183.7,135);

	this.shape_1347 = new cjs.Shape();
	this.shape_1347.graphics.f("#FF0000").s().p("AAcA5QgDgDAAgGIAAgCIgJAIIgLAFQgFABgHAAQgIAAgIgDQgIgDgFgGQgGgHgDgIQgCgIAAgKQAAgTALgLQALgMATAAQAJAAAIAEQAHADAHAGIAAggQAAgGADgEQAEgDAFAAQAFAAADADQADADABAGIAABfQgBAGgDADQgDADgFAAQgFAAgEgDgAgLgHQgGADgCAFQgDAHAAAIQAAAJADAGQADAGAFADQAGADAFAAQAHAAAFgCQAFgDADgHQAEgGAAgJQAAgJgEgGQgDgFgFgDQgFgEgHAAQgGAAgFAEg");
	this.shape_1347.setTransform(172.1,133.3);

	this.shape_1348 = new cjs.Shape();
	this.shape_1348.graphics.f("#FF0000").s().p("AgTApQgJgEgHgFQgHgGgDgIQgDgIAAgKQAAgJADgIQAEgIAGgGQAGgGAKgDQAJgDAKAAQALAAAJADQAJADAHAGQAHAGADAIQADAIAAAJQAAAKgDAIQgEAIgGAGQgHAFgJAEQgJADgLAAQgKAAgJgDgAgMgYQgFADgDAHQgDAHAAAHQAAAJADAGQACAGAGAEQAFADAHAAQALAAAHgIQAGgHAAgNQAAgNgGgGQgHgIgLAAQgGAAgGADg");
	this.shape_1348.setTransform(156.2,135);

	this.shape_1349 = new cjs.Shape();
	this.shape_1349.graphics.f("#FF0000").s().p("AgeAoQgDgDAAgGIAAg7QAAgPAMAAQAGAAADADQADAEAAAHQAEgHAFgEQAEgDAHAAQAJAAAHADQAHAEAAAFQAAAEgDADQgDACgEAAIgGgBIgJgCQgGABgDACQgDADgCAEIgCAMIgBAPIAAATQAAAGgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_1349.setTransform(147.8,135);

	this.shape_1350 = new cjs.Shape();
	this.shape_1350.graphics.f("#FF0000").s().p("AgDA7IgIgDIgGgEIgHgGIAAACQAAAGgDADQgEADgFAAQgFAAgDgDQgDgDAAgGIAAheQAAgGADgEQADgDAFAAQAGAAADADQADADAAAGIAAAhQAHgGAHgDQAHgEAKAAQANAAAJAFQAJAGAFAJQAFAJAAANQAAAKgCAIQgDAJgGAGQgFAGgIADQgIADgJAAIgKgBgAgLgHQgGADgDAGQgDAGAAAJQAAANAHAHQAHAGAKAAQAJAAAHgHQAHgHAAgNQAAgJgDgGQgDgFgFgDQgFgEgHAAQgGAAgGAEg");
	this.shape_1350.setTransform(137.6,133.3);

	this.shape_1351 = new cjs.Shape();
	this.shape_1351.graphics.f("#FF0000").s().p("AAxAoQgEgDAAgHIAAgjIgBgMQgBgEgDgDQgDgCgGAAQgEAAgEACQgFADgDAEQgCAGAAAMIAAAdQAAAHgEADQgEAEgFAAQgFAAgDgEQgDgDgBgHIAAghIgBgNQAAgFgDgCQgDgDgFAAQgNAAgDAHQgEAIgBAMIAAAdQAAAHgDADQgEAEgGAAQgFAAgEgEQgDgDAAgHIAAg9QAAgGADgDQAEgDAFAAQAEAAAEADQAEADgBAFIAAACQAHgGAIgEQAGgDAKAAQAJAAAGADQAHAEAEAGQAGgGAHgEQAIgDAIAAQAKAAAIADQAHAEAEAHQADAFAAANIAAApQAAAHgDADQgEAEgGAAQgGAAgDgEg");
	this.shape_1351.setTransform(123.3,135);

	this.shape_1352 = new cjs.Shape();
	this.shape_1352.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgJADgIQADgIAHgGQAGgGAJgDQAJgDALAAQAOAAAKAFQALAGAFAIQAFAIAAAJQAAAIgFACQgGADgJAAIgwAAQAAAHAEAGQADAFAGADQAFADAGgBIAIAAIAHgDIAGgFIAIgFQACgCADAAQAEAAACACQADACAAADQAAADgDAEQgDAEgFAEQgFADgIADQgIACgLAAQgXAAgNgMgAgNgXQgGAGgCALIAsAAQgBgLgGgGQgGgFgJAAQgJAAgFAFg");
	this.shape_1352.setTransform(109.5,135);

	this.shape_1353 = new cjs.Shape();
	this.shape_1353.graphics.f("#FF0000").s().p("AgIA4QgDgDAAgGIAAg9QAAgHADgDQADgDAFAAQAFAAAEADQADADAAAGIAAA+QAAAGgDADQgEAEgFAAQgFAAgDgEgAgIgoQgDgDAAgFQAAgFADgDQAEgDAEAAQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAQgEAAgEgDg");
	this.shape_1353.setTransform(101.5,133.4);

	this.shape_1354 = new cjs.Shape();
	this.shape_1354.graphics.f("#FF0000").s().p("AAwAoQgDgDAAgHIAAgjIAAgMQgBgEgEgDQgCgCgHAAQgEAAgFACQgEADgCAEQgDAGAAAMIAAAdQAAAHgEADQgDAEgGAAQgFAAgDgEQgEgDAAgHIAAghIgBgNQAAgFgDgCQgDgDgGAAQgMAAgEAHQgDAIAAAMIAAAdQgBAHgDADQgDAEgHAAQgFAAgEgEQgDgDAAgHIAAg9QAAgGADgDQAEgDAEAAQAFAAAEADQAEADAAAFIAAACQAGgGAHgEQAIgDAJAAQAJAAAHADQAFAEAFAGQAGgGAHgEQAHgDAJAAQAKAAAHADQAIAEADAHQAEAFAAANIAAApQAAAHgEADQgEAEgFAAQgFAAgFgEg");
	this.shape_1354.setTransform(90.8,135);

	this.shape_1355 = new cjs.Shape();
	this.shape_1355.graphics.f("#FF0000").s().p("AAcApIgHgJQgJAGgJADQgIADgKAAQgKAAgGgEQgHgDgFgFQgDgGgBgHQABgJAGgGQAHgFALgCIALgCIAQgDIAOgDQAAgJgEgEQgEgEgLAAQgIAAgFACQgEADgEAEIgFAGQgBACgFAAQgEgBgDgCQgDgCAAgEQAAgGAFgFQAEgGAKgDQAKgDANAAQARAAAJADQAJAEAFAHQADAHAAAMIAAAMIAAAMQAAAGACAHIADAIQAAAEgEADQgEACgEAAQgEAAgEgDgAADAEIgOADQgDABgEACQgEADABAFQAAAFADAEQAFADAHAAQAGAAAHgDQAFgDADgFQAEgEAAgMIAAgCIgQADg");
	this.shape_1355.setTransform(72.3,135);

	this.shape_1356 = new cjs.Shape();
	this.shape_1356.graphics.f("#FF0000").s().p("AgIA4QgDgDAAgGIAAg9QAAgHADgDQADgDAFAAQAFAAAEADQADADAAAGIAAA+QAAAGgDADQgEAEgFAAQgFAAgDgEgAgIgoQgDgDAAgFQAAgFADgDQAEgDAEAAQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAQgEAAgEgDg");
	this.shape_1356.setTransform(64.3,133.4);

	this.shape_1357 = new cjs.Shape();
	this.shape_1357.graphics.f("#FF0000").s().p("AgeAoQgDgDAAgGIAAg7QAAgPAMAAQAHAAACADQADAEAAAHQAEgHAFgEQAEgDAHAAQAJAAAHADQAHAEAAAFQAAAEgDADQgDACgEAAIgGgBIgJgCQgGABgDACQgDADgCAEIgCAMIgBAPIAAATQAAAGgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_1357.setTransform(58.3,135);

	this.shape_1358 = new cjs.Shape();
	this.shape_1358.graphics.f("#FF0000").s().p("AgTApQgJgEgHgFQgHgGgDgIQgDgIAAgKQAAgJADgIQAEgIAGgGQAGgGAKgDQAJgDAKAAQALAAAJADQAJADAHAGQAHAGADAIQADAIAAAJQAAAKgDAIQgEAIgGAGQgHAFgJAEQgJADgLAAQgKAAgJgDgAgMgYQgFADgDAHQgDAHAAAHQAAAJADAGQACAGAGAEQAFADAHAAQALAAAHgIQAGgHAAgNQAAgNgGgGQgHgIgLAAQgGAAgGADg");
	this.shape_1358.setTransform(48,135);

	this.shape_1359 = new cjs.Shape();
	this.shape_1359.graphics.f("#FF0000").s().p("AgJA3QgFgDgCgGQgCgGAAgKIAAgpIgDAAQgGAAgCgCQgDgCAAgEQAAgDADgCQADgCAFAAIADAAIAAgNIAAgJQABgDABgCIAEgDIAGgCQAFAAADADQACACABADIABAJIAAAPIAJAAQAFAAADACQADACgBADQAAAFgDABQgFACgHAAIgEAAIAAAnIAAAIQAAADACABQACACAEAAIAGgBIAGAAQADAAACACQACACABADQgBAFgGADQgHADgMAAQgKAAgHgEg");
	this.shape_1359.setTransform(39.4,133.5);

	this.shape_1360 = new cjs.Shape();
	this.shape_1360.graphics.f("#FF0000").s().p("AgXAoQgJgDgFgGQgEgFAAgGQAAgDACgCQADgDAFAAQAEAAACACIAEAFQADAFAGADQAFADAJAAQAHAAAFgDQAFgDAAgEQgBgFgFgDQgEgDgLgCQgMgDgIgDQgJgCgEgFQgGgFAAgHQABgGAEgHQAEgFAKgEQAIgDAMAAQAJAAAHABQAIADAGADQAFADACADQADAEAAADQAAADgDADQgDADgFgBQgEAAgCgCIgHgGQgDgCgEgCQgDgCgGAAQgHAAgEADQgFABABAFQAAADADACIAJAEIAOADQAMADAHADQAHACAEAFQAEAEgBAHQAAAIgEAHQgGAGgJADQgKAEgNAAQgNAAgKgEg");
	this.shape_1360.setTransform(30.7,135);

	this.shape_1361 = new cjs.Shape();
	this.shape_1361.graphics.f("#FF0000").s().p("AgIA4QgDgDAAgGIAAg9QAAgHADgDQADgDAFAAQAFAAAEADQADADAAAGIAAA+QAAAGgDADQgEAEgFAAQgFAAgDgEgAgIgoQgDgDAAgFQAAgFADgDQAEgDAEAAQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAQgEAAgEgDg");
	this.shape_1361.setTransform(23.2,133.4);

	this.shape_1362 = new cjs.Shape();
	this.shape_1362.graphics.f("#FF0000").s().p("AATAvIAAglQAAgKgDgEQgEgGgJAAQgGAAgGADQgFADgDAFQgCAFAAAMIAAAdQAAAGgCAEQgEADgGAAQgMAAAAgNIAAhdQAAgGADgEQADgDAGAAQAGAAAEADQACAEAAAGIAAAgQAFgFAFgCQAFgDAEgBQAFgCAHAAQAJAAAHAEQAHADAFAHQADAEAAAFIABAKIAAApQAAAHgDADQgEADgFAAQgNAAAAgNg");
	this.shape_1362.setTransform(15.1,133.3);

	this.shape_1363 = new cjs.Shape();
	this.shape_1363.graphics.f("#FF0000").s().p("AAdApIgIgJQgKAGgIADQgHADgLAAQgJAAgIgEQgHgDgDgFQgFgGAAgHQAAgJAHgGQAGgFALgCIAMgCIAPgDIAPgDQgBgJgDgEQgEgEgKAAQgJAAgFACQgFADgDAEIgFAGQgBACgFAAQgEgBgDgCQgDgCAAgEQAAgGAEgFQAFgGAKgDQAKgDAOAAQAPAAAKADQAKAEADAHQAEAHAAAMIAAAMIAAAMQAAAGADAHIACAIQgBAEgDADQgEACgEAAQgEAAgDgDgAADAEIgOADQgEABgDACQgDADgBAFQAAAFAFAEQAEADAHAAQAGAAAGgDQAHgDACgFQAEgEAAgMIAAgCIgQADg");
	this.shape_1363.setTransform(-0.8,135);

	this.shape_1364 = new cjs.Shape();
	this.shape_1364.graphics.f("#FF0000").s().p("AgIA5QgDgEAAgGIAAhdQAAgGADgEQADgDAFAAQAFAAAEADQADAEAAAGIAABdQAAAHgDADQgEADgFAAQgFAAgDgDg");
	this.shape_1364.setTransform(-8.8,133.3);

	this.shape_1365 = new cjs.Shape();
	this.shape_1365.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgJADgIQADgIAHgGQAGgGAJgDQAJgDALAAQAOAAAKAFQALAGAFAIQAFAIAAAJQAAAIgFACQgGADgJAAIgwAAQAAAHAEAGQADAFAGADQAFADAGgBIAIAAIAHgDIAGgFIAIgFQACgCADAAQAEAAACACQADACAAADQAAADgDAEQgDAEgFAEQgFADgIADQgIACgLAAQgXAAgNgMgAgNgXQgGAGgCALIAsAAQgBgLgGgGQgGgFgJAAQgJAAgFAFg");
	this.shape_1365.setTransform(-21.5,135);

	this.shape_1366 = new cjs.Shape();
	this.shape_1366.graphics.f("#FF0000").s().p("AAcA5QgDgDAAgGIAAgCIgJAIIgLAFQgFABgHAAQgIAAgIgDQgIgDgFgGQgGgHgDgIQgCgIAAgKQAAgTALgLQALgMATAAQAJAAAIAEQAHADAHAGIAAggQAAgGADgEQAEgDAFAAQAFAAADADQADADABAGIAABfQgBAGgDADQgDADgFAAQgFAAgEgDgAgLgHQgGADgCAFQgDAHAAAIQAAAJADAGQADAGAFADQAGADAFAAQAHAAAFgCQAFgDADgHQAEgGAAgJQAAgJgEgGQgDgFgFgDQgFgEgHAAQgGAAgFAEg");
	this.shape_1366.setTransform(-33.1,133.3);

	this.shape_1367 = new cjs.Shape();
	this.shape_1367.graphics.f("#FF0000").s().p("AgXAoQgKgDgEgGQgEgFgBgGQAAgDADgCQAEgDAEAAQAEAAACACIAEAFQADAFAGADQAFADAJAAQAHAAAFgDQAEgDABgEQAAgFgGgDQgEgDgLgCQgMgDgJgDQgHgCgFgFQgGgFAAgHQABgGAEgHQAEgFAJgEQAJgDAMAAQAJAAAHABQAIADAGADQAEADADADQADAEAAADQAAADgDADQgDADgFgBQgEAAgDgCIgGgGQgCgCgEgCQgEgCgGAAQgHAAgEADQgFABABAFQgBADAEACIAIAEIAPADQAMADAHADQAHACAEAFQADAEAAAHQAAAIgEAHQgGAGgJADQgKAEgNAAQgNAAgKgEg");
	this.shape_1367.setTransform(-48.4,135);

	this.shape_1368 = new cjs.Shape();
	this.shape_1368.graphics.f("#FF0000").s().p("AAcApIgIgJQgIAGgJADQgIADgKAAQgJAAgIgEQgHgDgEgFQgDgGAAgHQgBgJAHgGQAHgFAKgCIANgCIAOgDIAPgDQgBgJgDgEQgDgEgMAAQgIAAgFACQgEADgEAEIgFAGQgBACgFAAQgEgBgDgCQgDgCAAgEQAAgGAFgFQAEgGAKgDQAKgDANAAQARAAAJADQAKAEADAHQAEAHAAAMIAAAMIAAAMQAAAGACAHIACAIQABAEgEADQgDACgFAAQgEAAgEgDgAADAEIgNADQgEABgEACQgEADAAAFQABAFAEAEQAEADAHAAQAGAAAHgDQAFgDAEgFQADgEAAgMIAAgCIgQADg");
	this.shape_1368.setTransform(-59,135);

	this.shape_1369 = new cjs.Shape();
	this.shape_1369.graphics.f("#FF0000").s().p("AgJA3QgGgDgBgGQgCgGAAgKIAAgpIgEAAQgEAAgEgCQgCgCAAgEQAAgDACgCQADgCAGAAIADAAIAAgNIAAgJQAAgDACgCIAEgDIAGgCQAFAAADADQACACABADIAAAJIAAAPIAKAAQAFAAADACQACACAAADQAAAFgDABQgEACgHAAIgGAAIAAAnIABAIQABADABABQACACAEAAIAGgBIAGAAQADAAACACQADACgBADQAAAFgGADQgGADgNAAQgKAAgHgEg");
	this.shape_1369.setTransform(-67.5,133.5);

	this.shape_1370 = new cjs.Shape();
	this.shape_1370.graphics.f("#FF0000").s().p("AgXAoQgKgDgEgGQgEgFgBgGQAAgDADgCQADgDAFAAQAEAAACACIAEAFQADAFAGADQAFADAIAAQAIAAAFgDQAEgDABgEQAAgFgGgDQgEgDgLgCQgMgDgJgDQgHgCgFgFQgGgFAAgHQABgGAEgHQAFgFAIgEQAJgDAMAAQAJAAAHABQAIADAGADQAEADADADQADAEAAADQAAADgDADQgDADgFgBQgEAAgDgCIgGgGQgCgCgEgCQgEgCgGAAQgGAAgFADQgFABABAFQgBADAEACIAIAEIAPADQAMADAHADQAHACAEAFQAEAEAAAHQgBAIgFAHQgEAGgKADQgKAEgNAAQgNAAgKgEg");
	this.shape_1370.setTransform(-76.2,135);

	this.shape_1371 = new cjs.Shape();
	this.shape_1371.graphics.f("#FF0000").s().p("AgIA4QgDgDAAgGIAAg9QAAgHADgDQADgDAFAAQAFAAAEADQADADAAAGIAAA+QAAAGgDADQgEAEgFAAQgFAAgDgEgAgIgoQgDgDAAgFQAAgFADgDQAEgDAEAAQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAQgEAAgEgDg");
	this.shape_1371.setTransform(-83.7,133.4);

	this.shape_1372 = new cjs.Shape();
	this.shape_1372.graphics.f("#FF0000").s().p("AgeAoQgDgDAAgGIAAg7QAAgPAMAAQAGAAADADQADAEAAAHQAFgHAEgEQAEgDAHAAQAJAAAHADQAHAEAAAFQAAAEgDADQgDACgDAAIgHgBIgJgCQgGABgDACQgDADgCAEIgCAMIgBAPIAAATQAAAGgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_1372.setTransform(-89.7,135);

	this.shape_1373 = new cjs.Shape();
	this.shape_1373.graphics.f("#FF0000").s().p("AgeAoQgDgDAAgGIAAg7QAAgPAMAAQAGAAADADQADAEAAAHQAEgHAFgEQAEgDAIAAQAHAAAIADQAHAEAAAFQAAAEgDADQgDACgEAAIgGgBIgKgCQgFABgDACQgDADgBAEIgDAMIgBAPIAAATQAAAGgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_1373.setTransform(-97.6,135);

	this.shape_1374 = new cjs.Shape();
	this.shape_1374.graphics.f("#FF0000").s().p("AAcApIgIgJQgIAGgJADQgIADgKAAQgKAAgGgEQgHgDgFgFQgDgGAAgHQAAgJAGgGQAHgFALgCIAMgCIAPgDIAOgDQAAgJgEgEQgDgEgMAAQgIAAgFACQgFADgDAEIgFAGQgBACgFAAQgEgBgDgCQgDgCAAgEQAAgGAFgFQAEgGAKgDQAKgDANAAQAQAAAKADQAJAEAFAHQADAHAAAMIAAAMIAAAMQAAAGACAHIACAIQAAAEgDADQgEACgEAAQgEAAgEgDgAADAEIgNADQgEABgEACQgEADABAFQAAAFADAEQAFADAHAAQAGAAAHgDQAFgDAEgFQADgEAAgMIAAgCIgQADg");
	this.shape_1374.setTransform(-107.8,135);

	this.shape_1375 = new cjs.Shape();
	this.shape_1375.graphics.f("#FF0000").s().p("AgIA3QgHgDgBgGQgCgGAAgKIAAgpIgEAAQgEAAgEgCQgDgCAAgEQAAgDADgCQAEgCAFAAIADAAIAAgNIABgJQAAgDABgCIAEgDIAGgCQAFAAADADQADACAAADIAAAJIAAAPIAKAAQAFAAADACQADACAAADQgBAFgEABQgEACgGAAIgGAAIAAAnIABAIQABADACABQABACAEAAIAGgBIAGAAQADAAACACQACACAAADQABAFgHADQgGADgNAAQgLAAgFgEg");
	this.shape_1375.setTransform(-116.3,133.5);

	this.shape_1376 = new cjs.Shape();
	this.shape_1376.graphics.f("#FF0000").s().p("AgIA4QgDgDAAgGIAAg9QAAgHADgDQADgDAFAAQAFAAAEADQADADAAAGIAAA+QAAAGgDADQgEAEgFAAQgFAAgDgEgAgIgoQgDgDAAgFQAAgFADgDQAEgDAEAAQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAQgEAAgEgDg");
	this.shape_1376.setTransform(-122.4,133.4);

	this.shape_1377 = new cjs.Shape();
	this.shape_1377.graphics.f("#FF0000").s().p("AAYApQgDgEAAgFIAAgDIgJAIQgFAEgGABQgFACgHAAQgJAAgHgEQgIgCgEgHQgEgGAAgNIAAgqQAAgGADgEQAEgDAFAAQAGAAADADQAEAEAAAGIAAAhQAAAIABAFQACAGADACQAEADAHAAQAFAAAFgDQAGgDACgFQACgGAAgOIAAgaQAAgGAEgEQADgDAGAAQAFAAAEADQADAEAAAGIAAA9QAAAHgDADQgDADgFAAQgFAAgEgDg");
	this.shape_1377.setTransform(-130.6,135);

	this.shape_1378 = new cjs.Shape();
	this.shape_1378.graphics.f("#FF0000").s().p("AgXA5QgKgDgGgFQgFgFAAgGQAAgEADgCQADgDAEAAQAGABAEAEIAEAEIAFAEIAGADIAIAAQAJAAAFgDQAFgBADgFQACgEAAgFIABgQQgGAIgIADQgHAEgJAAQgNAAgJgGQgJgFgFgKQgFgJAAgNQAAgKADgIQADgHAFgGQAGgGAHgCQAIgDAIAAQAKAAAIADQAHAEAHAIIAAgEQAAgFADgDQADgDAFAAQAIAAACAEQACAEAAAIIAAA+QAAALgCAIQgDAHgGAFQgGAFgJACQgJADgNAAQgNAAgKgDgAgQgkQgHAHAAANQAAANAHAGQAHAHAJAAQAGAAAGgDQAFgDAEgEQADgHAAgIQAAgNgHgHQgGgIgLAAQgKAAgGAHg");
	this.shape_1378.setTransform(-142.3,136.6);

	this.shape_1379 = new cjs.Shape();
	this.shape_1379.graphics.f("#FF0000").s().p("AgXAoQgJgDgFgGQgFgFABgGQAAgDACgCQADgDAFAAQAEAAACACIAEAFQAEAFAFADQAGADAIAAQAHAAAFgDQAFgDgBgEQAAgFgEgDQgGgDgKgCQgNgDgHgDQgIgCgGgFQgEgFAAgHQgBgGAFgHQAEgFAKgEQAIgDAMAAQAJAAAHABQAIADAFADQAGADACADQADAEAAADQAAADgDADQgDADgFgBQgEAAgCgCIgHgGQgCgCgFgCQgDgCgGAAQgGAAgFADQgFABAAAFQAAADAEACIAJAEIAOADQALADAIADQAHACAEAFQADAEAAAHQAAAIgEAHQgGAGgJADQgKAEgNAAQgNAAgKgEg");
	this.shape_1379.setTransform(-157.6,135);

	this.shape_1380 = new cjs.Shape();
	this.shape_1380.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgJADgIQADgIAHgGQAGgGAJgDQAJgDALAAQAOAAAKAFQALAGAFAIQAFAIAAAJQAAAIgFACQgGADgJAAIgwAAQAAAHAEAGQADAFAGADQAFADAGgBIAIAAIAHgDIAGgFIAIgFQACgCADAAQAEAAACACQADACAAADQAAADgDAEQgDAEgFAEQgFADgIADQgIACgLAAQgXAAgNgMgAgNgXQgGAGgCALIAsAAQgBgLgGgGQgGgFgJAAQgJAAgFAFg");
	this.shape_1380.setTransform(-168.2,135);

	this.shape_1381 = new cjs.Shape();
	this.shape_1381.graphics.f("#FF0000").s().p("AgeAoQgDgDAAgGIAAg7QAAgPAMAAQAGAAADADQADAEAAAHQAEgHAFgEQAEgDAIAAQAHAAAIADQAHAEAAAFQAAAEgDADQgDACgEAAIgGgBIgJgCQgGABgDACQgDADgCAEIgCAMIgBAPIAAATQAAAGgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_1381.setTransform(-176.7,135);

	this.shape_1382 = new cjs.Shape();
	this.shape_1382.graphics.f("#FF0000").s().p("AgTApQgJgEgHgFQgHgGgDgIQgDgIAAgKQAAgJADgIQAEgIAGgGQAGgGAKgDQAJgDAKAAQALAAAJADQAJADAHAGQAHAGADAIQADAIAAAJQAAAKgDAIQgEAIgGAGQgHAFgJAEQgJADgLAAQgKAAgJgDgAgMgYQgFADgDAHQgDAHAAAHQAAAJADAGQACAGAGAEQAFADAHAAQALAAAHgIQAGgHAAgNQAAgNgGgGQgHgIgLAAQgGAAgGADg");
	this.shape_1382.setTransform(-187,135);

	this.shape_1383 = new cjs.Shape();
	this.shape_1383.graphics.f("#FF0000").s().p("AgTBJQgGgDAAgFQAAgDADgDQACgCAFAAIABAAIAEAAIADAAQAFAAACgDQABgEAAgIIAAhIQAAgHADgDQAEgDAFAAQAGAAADADQAEADAAAHIAABIIgBANIgCAHQgGAOgTAAQgLAAgGgDgAAEg4QgDgDAAgFQAAgFAEgDQADgDAFAAQAFAAAEADQAEADAAAFQAAAFgEADQgEADgFAAQgFAAgEgDg");
	this.shape_1383.setTransform(-196.4,135);

	this.shape_1384 = new cjs.Shape();
	this.shape_1384.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgJADgIQADgIAHgGQAGgGAJgDQAJgDALAAQAOAAAKAFQALAGAFAIQAFAIAAAJQAAAIgFACQgGADgJAAIgwAAQAAAHAEAGQADAFAGADQAFADAGgBIAIAAIAHgDIAGgFIAIgFQACgCADAAQAEAAACACQADACAAADQAAADgDAEQgDAEgFAEQgFADgIADQgIACgLAAQgXAAgNgMgAgNgXQgGAGgCALIAsAAQgBgLgGgGQgGgFgJAAQgJAAgFAFg");
	this.shape_1384.setTransform(-203.2,135);

	this.shape_1385 = new cjs.Shape();
	this.shape_1385.graphics.f("#FF0000").s().p("AAwAoQgDgDAAgHIAAgjIAAgMQgBgEgEgDQgCgCgHAAQgEAAgFACQgEADgCAEQgDAGAAAMIAAAdQAAAHgEADQgDAEgGAAQgFAAgDgEQgDgDAAgHIAAghIgCgNQAAgFgDgCQgDgDgGAAQgMAAgEAHQgDAIAAAMIAAAdQgBAHgDADQgDAEgHAAQgFAAgEgEQgDgDAAgHIAAg9QAAgGADgDQADgDAFAAQAGAAADADQAEADAAAFIAAACQAGgGAHgEQAHgDAJAAQAKAAAHADQAFAEAFAGQAGgGAHgEQAIgDAIAAQALAAAGADQAIAEADAHQAEAFAAANIAAApQAAAHgEADQgEAEgFAAQgGAAgEgEg");
	this.shape_1385.setTransform(-216.9,135);

	this.shape_1386 = new cjs.Shape();
	this.shape_1386.graphics.f("#FF0000").s().p("AgXAoQgJgDgFgGQgEgFgBgGQAAgDAEgCQADgDAEAAQAEAAACACIAEAFQAEAFAFADQAFADAIAAQAIAAAFgDQAEgDAAgEQABgFgGgDQgEgDgLgCQgMgDgJgDQgHgCgFgFQgFgFgBgHQAAgGAFgHQAFgFAIgEQAJgDAMAAQAJAAAIABQAHADAFADQAFADADADQADAEAAADQAAADgDADQgDADgFgBQgEAAgDgCIgGgGQgCgCgEgCQgEgCgGAAQgGAAgFADQgEABAAAFQAAADADACIAIAEIAPADQALADAIADQAHACAEAFQAEAEAAAHQgBAIgFAHQgEAGgKADQgKAEgNAAQgNAAgKgEg");
	this.shape_1386.setTransform(-234.9,135);

	this.shape_1387 = new cjs.Shape();
	this.shape_1387.graphics.f("#FF0000").s().p("AgTApQgJgEgHgFQgHgGgDgIQgDgIAAgKQAAgJADgIQAEgIAGgGQAGgGAKgDQAJgDAKAAQALAAAJADQAJADAHAGQAHAGADAIQADAIAAAJQAAAKgDAIQgEAIgGAGQgHAFgJAEQgJADgLAAQgKAAgJgDgAgMgYQgFADgDAHQgDAHAAAHQAAAJADAGQACAGAGAEQAFADAHAAQALAAAHgIQAGgHAAgNQAAgNgGgGQgHgIgLAAQgGAAgGADg");
	this.shape_1387.setTransform(-245.5,135);

	this.shape_1388 = new cjs.Shape();
	this.shape_1388.graphics.f("#FF0000").s().p("AgIA5QgDgEAAgGIAAhdQAAgGADgEQADgDAFAAQAFAAAEADQADAEAAAGIAABdQAAAHgDADQgEADgFAAQgFAAgDgDg");
	this.shape_1388.setTransform(-253.6,133.3);

	this.shape_1389 = new cjs.Shape();
	this.shape_1389.graphics.f("#FF0000").s().p("AghAgQgNgMAAgUQAAgJADgIQADgIAHgGQAGgGAJgDQAJgDALAAQAOAAAKAFQALAGAFAIQAFAIAAAJQAAAIgFACQgGADgJAAIgwAAQAAAHAEAGQADAFAGADQAFADAGgBIAIAAIAHgDIAGgFIAIgFQACgCADAAQAEAAACACQADACAAADQAAADgDAEQgDAEgFAEQgFADgIADQgIACgLAAQgXAAgNgMgAgNgXQgGAGgCALIAsAAQgBgLgGgGQgGgFgJAAQgJAAgFAFg");
	this.shape_1389.setTransform(-266.4,135);

	this.shape_1390 = new cjs.Shape();
	this.shape_1390.graphics.f("#FF0000").s().p("AAdA5QgEgDAAgGIAAgCIgKAIIgKAFQgFABgGAAQgKAAgHgDQgIgDgFgGQgFgHgDgIQgEgIAAgKQAAgTAMgLQAMgMASAAQAKAAAHAEQAHADAHAGIAAggQAAgGAEgEQADgDAFAAQAFAAAEADQACADAAAGIAABfQAAAGgCADQgEADgFAAQgFAAgDgDgAgMgHQgEADgEAFQgDAHAAAIQAAAJADAGQAEAGAFADQAGADAFAAQAHAAAFgCQAGgDADgHQADgGAAgJQAAgJgDgGQgDgFgGgDQgFgEgHAAQgGAAgGAEg");
	this.shape_1390.setTransform(-278,133.3);

	this.shape_1391 = new cjs.Shape();
	this.shape_1391.graphics.f("#FF0000").s().p("AgTApQgJgEgHgFQgHgGgDgIQgDgIAAgKQAAgJADgIQAEgIAGgGQAGgGAKgDQAJgDAKAAQALAAAJADQAJADAHAGQAHAGADAIQADAIAAAJQAAAKgDAIQgEAIgGAGQgHAFgJAEQgJADgLAAQgKAAgJgDgAgMgYQgFADgDAHQgDAHAAAHQAAAJADAGQACAGAGAEQAFADAHAAQALAAAHgIQAGgHAAgNQAAgNgGgGQgHgIgLAAQgGAAgGADg");
	this.shape_1391.setTransform(-293.8,135);

	this.shape_1392 = new cjs.Shape();
	this.shape_1392.graphics.f("#FF0000").s().p("AAXAoQgEgDAAgGIAAgkQAAgKgDgFQgDgHgKABQgGAAgGADQgFAEgDAFQgBAGAAALIAAAcQAAAGgEADQgDAEgGAAQgFAAgEgEQgDgDAAgGIAAg+QAAgGADgDQADgDAFAAQAEAAACABQADABACAEQABACAAAEIAAADQAHgIAHgEQAHgDAKAAQAKAAAIADQAHAFAEAGQADAEAAAFIABAMIAAAnQAAAGgDADQgEAEgFAAQgGAAgDgEg");
	this.shape_1392.setTransform(-305.1,135);

	this.shape_1393 = new cjs.Shape();
	this.shape_1393.graphics.f("#FF0000").s().p("AgXA5QgMgDgGgGQgHgGgDgJQgEgKAAgNIAAg3QAAgHAEgDQADgEAHAAQAGAAAEAEQADADAAAHIAAA4QAAAKACAHQADAGAGAEQAHAEAKAAQAQAAAHgIQAGgHAAgPIAAg5QAAgHAEgDQAEgEAFAAQAHAAADAEQAEADAAAHIAAA3QAAAOgDAJQgDAJgJAHQgHAGgJADQgKACgNAAQgOAAgLgDg");
	this.shape_1393.setTransform(-317.8,133.3);

	this.shape_1394 = new cjs.Shape();
	this.shape_1394.graphics.f("#FF0000").s().p("AAXAoQgEgDAAgGIAAgkQAAgKgDgGQgDgFgKAAQgGgBgGAEQgFAEgDAFQgBAFAAAMIAAAcQAAAGgEADQgDAEgGAAQgFAAgEgEQgDgDAAgGIAAg+QAAgGADgDQADgDAFAAQAEAAACABQADABACADQABADAAAEIAAACQAHgHAHgEQAHgDAKAAQAKAAAIADQAHAFAEAGQADAEAAAFIABAMIAAAnQAAAGgDADQgEAEgFAAQgGAAgDgEg");
	this.shape_1394.setTransform(36.7,113.6);

	this.shape_1395 = new cjs.Shape();
	this.shape_1395.graphics.f("#FF0000").s().p("AgTApQgJgDgHgGQgHgGgDgIQgDgIAAgKQAAgJADgIQAEgIAGgGQAGgGAKgDQAJgDAKAAQALAAAJADQAJADAHAGQAHAGADAIQADAIAAAJQAAAKgDAIQgEAIgGAGQgHAGgJADQgJADgLAAQgKAAgJgDgAgMgXQgFACgDAHQgDAHAAAHQAAAIADAHQACAGAGADQAFAEAHAAQALAAAHgHQAGgIAAgNQAAgMgGgIQgHgHgLAAQgGAAgGAEg");
	this.shape_1395.setTransform(25.5,113.6);

	this.shape_1396 = new cjs.Shape();
	this.shape_1396.graphics.f("#FF0000").s().p("AgIA3QgHgDgBgGQgCgGAAgKIAAgpIgEAAQgEAAgEgCQgCgCgBgEQABgDACgCQAEgCAFAAIADAAIAAgNIABgJQAAgDABgCIAEgDIAGgCQAFAAADADQADACAAADIAAAJIAAAPIAKAAQAFAAADACQADACAAADQgBAFgEABQgEACgGAAIgGAAIAAAnIABAIQABADACABQABACAEAAIAGgBIAGAAQADAAACACQACACAAADQABAFgHADQgGADgNAAQgLAAgFgEg");
	this.shape_1396.setTransform(16.9,112.1);

	this.shape_1397 = new cjs.Shape();
	this.shape_1397.graphics.f("#FF0000").s().p("AgtA5QgCgFAAgGIAAhdQAAgGADgDQADgDAFAAQAFAAAEADQADADAAAGIAAACQAHgHAHgEQAIgDAJAAQALAAAKAFQAJAFAGAKQAFAKAAAOQAAAKgDAHQgDAIgGAGQgFAGgIADQgIADgIAAQgKAAgHgEQgIgDgGgIIAAAhQAAAOgMAAQgHAAgCgDgAgQgkQgHAHAAAOQAAANAHAGQAHAHAJAAQAHAAAFgDQAFgDADgGQAEgGAAgIQAAgJgDgGQgDgHgGgCQgFgEgHAAQgJAAgHAHg");
	this.shape_1397.setTransform(7.7,115.2);

	this.shape_1398 = new cjs.Shape();
	this.shape_1398.graphics.f("#FF0000").s().p("AAcApIgHgJQgJAGgJADQgIADgKAAQgKAAgGgEQgHgDgFgFQgEgGAAgGQABgJAGgHQAHgFALgCIALgCIAQgDIAOgEQAAgIgEgEQgEgEgLAAQgIAAgFACQgEADgEAEIgFAGQgBABgFAAQgEAAgDgCQgDgCAAgEQAAgGAEgFQAFgGAKgDQAKgDANAAQARAAAJADQAJADAFAIQADAHAAAMIAAAMIAAAMQAAAGACAHIADAIQAAADgEADQgEADgEAAQgEAAgEgDgAADAEIgOADQgDABgEADQgEACABAFQAAAFADAEQAFADAHAAQAGAAAGgDQAGgDADgEQAEgFAAgMIAAgCIgQADg");
	this.shape_1398.setTransform(-3.8,113.6);

	this.shape_1399 = new cjs.Shape();
	this.shape_1399.graphics.f("#FF0000").s().p("AgIA5QgDgEAAgGIAAhdQAAgGADgEQADgDAFAAQAFAAAEADQADAEAAAGIAABdQAAAHgDADQgEADgFAAQgFAAgDgDg");
	this.shape_1399.setTransform(-11.8,112);

	this.shape_1400 = new cjs.Shape();
	this.shape_1400.graphics.f("#FF0000").s().p("AgNA6QgJgBgHgEQgHgEgGgGIgJgMQgEgHgCgHQgBgIAAgJQAAgNAEgLQAFgLAJgIQAIgIAMgEQAMgEAMAAQAQAAANAGQAMAFAHAJQAHAIAAAHQAAAEgDADQgEADgEAAQgFAAgDgCQgDgCgDgFQgFgJgHgEQgHgEgLAAQgPAAgKALQgKALAAATQAAAOAEAJQAFAJAIAEQAIAFAJAAQAMAAAIgFQAIgGAEgJQACgFACgDQADgDAGAAQAEAAAEADQADADAAAFQAAAFgDAHQgDAGgHAGQgGAGgLAEQgKAEgOAAQgKAAgIgCg");
	this.shape_1400.setTransform(-21.1,112);

	this.shape_1401 = new cjs.Shape();
	this.shape_1401.graphics.f("#FF0000").s().p("AghAgQgNgMAAgTQAAgNAGgKQAGgKALgGQALgFAPAAQAKAAAIACQAIACAFAFQAGAEADAEQADAFAAADQAAAEgEACQgDAEgFAAQgDAAgCgCIgEgFQgFgFgFgDQgFgDgHAAQgKgBgHAIQgHAIAAAMQAAAGACAFQACAFADAEQADADAFACQAEABAFABQAHAAAGgEQAFgCAEgHIAFgFQADgCADAAQAFAAADADQADADAAADQAAAEgDAFQgDAEgFAFQgGADgJADQgIADgLAAQgWAAgNgMg");
	this.shape_1401.setTransform(-38.3,113.6);

	this.shape_1402 = new cjs.Shape();
	this.shape_1402.graphics.f("#FF0000").s().p("AgIA4QgDgDAAgGIAAg9QAAgHADgDQADgDAFAAQAFAAAEADQADADAAAGIAAA+QAAAGgDADQgEAEgFAAQgFAAgDgEgAgIgoQgDgDAAgFQAAgFADgDQAEgDAEAAQAFAAAEADQADADAAAFQAAAFgDADQgEADgFAAQgEAAgEgDg");
	this.shape_1402.setTransform(-46.2,112);

	this.shape_1403 = new cjs.Shape();
	this.shape_1403.graphics.f("#FF0000").s().p("AgeAoQgDgDAAgGIAAg8QAAgOAMAAQAHAAACADQADADAAAHQAEgHAFgDQAEgDAIAAQAHAAAIADQAHADAAAGQAAAFgDACQgDADgEgBIgGgBIgKgBQgFgBgDADQgDADgBAEIgEAMIAAAPIAAATQAAAGgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_1403.setTransform(-52.3,113.6);

	this.shape_1404 = new cjs.Shape();
	this.shape_1404.graphics.f("#FF0000").s().p("AgiA6QgIAAgEgDQgEgEAAgHIAAhXQAAgFACgDQABgDAEgCQAEgBAFAAIBHAAQAGAAADACQADADAAAEQAAAEgDADQgDACgGAAIg8AAIAAAdIA3AAQAGAAADACQADADAAADQAAADgDADQgDACgGAAIg3AAIAAAiIA+AAQAGAAADACQADADAAAEQAAAEgDADQgDACgGAAg");
	this.shape_1404.setTransform(-62.7,112);

	this.shape_1405 = new cjs.Shape();
	this.shape_1405.graphics.f("#FF0000").s().p("AgKAKQgFgEAAgGQAAgEAFgFQAEgEAGAAQAGAAAFAEQAFAEAAAFQAAAGgFAEQgFAEgGAAQgGAAgEgEg");
	this.shape_1405.setTransform(40.6,214);

	this.shape_1406 = new cjs.Shape();
	this.shape_1406.graphics.f("#FF0000").s().p("AgWAvQgLgDgHgIQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgcQgGAFgEAGQgDAIgBAJQABAKADAHQAEAHAGAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgHAAgHADg");
	this.shape_1406.setTransform(31.9,210.3);

	this.shape_1407 = new cjs.Shape();
	this.shape_1407.graphics.f("#FF0000").s().p("AgmAlQgPgOAAgXQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEABADABQADADAAAEQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_1407.setTransform(19.1,210.3);

	this.shape_1408 = new cjs.Shape();
	this.shape_1408.graphics.f("#FF0000").s().p("AgbBCQgMgEgGgFQgGgGAAgGQAAgFADgDQAEgCAFAAQAGgBAFAFIAFAFIAFAEIAHADIAKABQAKAAAGgDQAGgCADgGQACgEABgGIAAgSQgGAJgJAEQgJAEgLAAQgOAAgLgHQgKgGgGgMQgGgKAAgPQAAgLAEgKQADgJAHgGQAGgGAJgDQAIgDAKAAQALAAAJAEQAJAEAIAJIAAgDQAAgHAEgEQADgDAGgBQAIAAADAGQADAEAAAJIAABHQAAANgDAJQgDAJgHAGQgHAFgLADQgKADgQAAQgOAAgMgDgAgTgqQgHAIAAAQQAAAPAHAGQAIAJALAAQAHgBAHgDQAGgEAEgFQAEgHAAgJQAAgQgIgIQgIgJgMAAQgLAAgIAIg");
	this.shape_1408.setTransform(6.2,212.2);

	this.shape_1409 = new cjs.Shape();
	this.shape_1409.graphics.f("#FF0000").s().p("AgXAvQgKgDgIgIQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgcQgHAFgDAGQgDAIAAAJQAAAKADAHQADAHAHAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgIAAgGADg");
	this.shape_1409.setTransform(-6.7,210.3);

	this.shape_1410 = new cjs.Shape();
	this.shape_1410.graphics.f("#FF0000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgHADgEQAFgDAFgBQAGAAAFAEQADAEAAAHIAAADQAJgJAIgEQAIgEAKAAQAOAAALAGQALAGAHALQAGALAAARQAAALgEAIQgDAKgHAHQgGAGgKAEQgIAEgLgBQgKABgJgFQgIgEgIgJIAAAmQAAAQgOAAQgHABgDgFgAgTgqQgIAIAAARQAAAPAIAGQAJAJAKAAQAIAAAGgDQAGgFAEgFQADgIAAgKQAAgKgDgHQgEgHgFgEQgHgDgIgBQgKAAgJAIg");
	this.shape_1410.setTransform(-19.6,212.2);

	this.shape_1411 = new cjs.Shape();
	this.shape_1411.graphics.f("#FF0000").s().p("AAgAvQgDgDgGgIQgKAIgKADQgIAEgMAAQgLAAgJgEQgIgEgFgHQgEgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgEIAQgDQAAgKgEgFQgEgFgMAAQgKAAgGADQgFACgEAGIgGAHQgCACgFAAQgFAAgDgDQgEgDAAgEQAAgGAGgHQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHADAIIADAKQAAADgEADQgFAEgFAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAFAEAFQAGADAIAAQAHAAAHgDQAIgDADgFQADgGAAgNIAAgEIgSAFg");
	this.shape_1411.setTransform(-32.7,210.3);

	this.shape_1412 = new cjs.Shape();
	this.shape_1412.graphics.f("#FF0000").s().p("AgbAuQgLgDgFgHQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAGQAFAGAGAEQAGACAJAAQAJAAAGgCQAFgEAAgEQAAgHgFgDQgHgDgLgDQgPgDgKgEQgJgCgGgGQgFgGAAgIQAAgHAFgHQAFgHAKgEQALgEAOAAQAJAAAJACQAJACAHADQAFAEAEAEQACAEAAAEQAAAEgDADQgDADgGAAQgFAAgDgCIgHgHQgDgEgFgBQgEgDgGAAQgIAAgGADQgEADAAAEQgBAEAEACIAKAFIARAEQAOACAIAFQAIADAEAFQAFAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgOAAgMgFg");
	this.shape_1412.setTransform(-63.3,210.3);

	this.shape_1413 = new cjs.Shape();
	this.shape_1413.graphics.f("#FF0000").s().p("AAbAvQgFgEAAgIIAAgoQAAgNgDgGQgFgGgLAAQgHAAgGADQgGAFgDAGQgDAGAAAPIAAAeQAAAIgDAEQgEAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgEQADgDAGAAQAEAAADACIAFAEQACAEAAAEIAAADQAHgJAKgEQAHgEAMAAQALAAAJAEQAJAFAEAHQADAFABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1413.setTransform(272.1,186.1);

	this.shape_1414 = new cjs.Shape();
	this.shape_1414.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADACAAAFQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_1414.setTransform(259.3,186.1);

	this.shape_1415 = new cjs.Shape();
	this.shape_1415.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADACAAAFQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_1415.setTransform(228.3,186.1);

	this.shape_1416 = new cjs.Shape();
	this.shape_1416.graphics.f("#FF0000").s().p("AAcAvQgEgDAAgIIAAgDIgLAKQgGAEgGACQgGABgJABQgKgBgIgDQgIgEgEgHQgGgHAAgPIAAgxQAAgIAEgDQADgEAHAAQAHAAADAEQAEADAAAIIAAAnQAAAJACAFQACAHAEADQAFADAHABQAHAAAFgFQAHgDADgHQACgEAAgRIAAgfQABgIAEgDQADgEAHAAQAGAAAEAEQAEADAAAIIAABHQAAAIgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_1416.setTransform(215.5,186.1);

	this.shape_1417 = new cjs.Shape();
	this.shape_1417.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_1417.setTransform(192.7,184.3);

	this.shape_1418 = new cjs.Shape();
	this.shape_1418.graphics.f("#FF0000").s().p("AgaAuQgLgDgGgHQgFgGAAgGQAAgEADgDQADgDAGAAQAEAAACACIAFAGQAFAGAGAEQAGACAKAAQAIAAAGgCQAFgEAAgEQAAgHgFgDQgHgDgMgDQgPgDgIgEQgKgCgGgGQgFgGAAgIQAAgIAFgGQAFgHALgEQAKgEANAAQAKAAAKACQAIACAGADQAGAEADAEQAEAEAAAEQAAAEgEADQgDADgHAAQgEAAgDgCIgHgHQgDgDgEgCQgFgDgHAAQgIAAgFADQgEADgBAEQAAAEAEACIAKAFIARAEQANADAJAEQAIACAFAGQAEAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgPAAgLgFg");
	this.shape_1418.setTransform(183.9,186.1);

	this.shape_1419 = new cjs.Shape();
	this.shape_1419.graphics.f("#FF0000").s().p("AgbAuQgKgDgGgHQgFgGAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAGQAEAGAHAEQAGACAKAAQAIAAAFgCQAGgEAAgEQAAgHgGgDQgFgDgNgDQgOgDgKgEQgJgCgFgGQgGgGAAgIQAAgIAFgGQAGgHAJgEQAKgEAOAAQALAAAIACQAKACAGADQAFAEADAEQADAEAAAEQABAEgEADQgEADgFAAQgEAAgEgCIgHgHQgDgDgFgCQgEgDgHAAQgHAAgFADQgGADAAAEQABAEADACIALAFIAQAEQANADAJAEQAIACAEAGQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgLgFg");
	this.shape_1419.setTransform(149.9,186.1);

	this.shape_1420 = new cjs.Shape();
	this.shape_1420.graphics.f("#FF0000").s().p("AAhBCQgEgEAAgHIAAgCQgFAGgGADQgGADgHACQgFACgHAAQgLAAgIgDQgJgFgHgGQgGgIgDgJQgEgKAAgKQAAgXAOgNQAMgNAWAAQALAAAJAEQAIAEAIAHIAAglQAAgHADgFQAEgEAGABQAHAAADADQAEAEAAAHIAABtQAAAHgEAEQgDADgHAAQgFAAgEgDgAgNgIQgHADgDAHQgDAGAAALQAAAKADAHQAEAHAGAEQAHADAGAAQAIAAAGgDQAGgEAEgHQAEgHAAgKQAAgKgEgIQgEgGgGgEQgGgDgIgBQgHAAgGAFg");
	this.shape_1420.setTransform(124.3,184.3);

	this.shape_1421 = new cjs.Shape();
	this.shape_1421.graphics.f("#FF0000").s().p("AAgAvQgEgDgFgIQgKAHgJAFQgJADgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIAOgDIARgEIARgDQgBgLgEgEQgEgFgMABQgKAAgGACQgFADgEAFIgGAHQgCACgFAAQgFAAgDgDQgEgDAAgEQAAgGAGgHQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAJAAAOIAAAOIgBANQAAAHADAIIADAKQAAADgEAEQgFADgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAGAEAEQAFADAJAAQAHAAAHgDQAIgDADgFQADgGABgNIAAgEIgSAFg");
	this.shape_1421.setTransform(111.6,186.1);

	this.shape_1422 = new cjs.Shape();
	this.shape_1422.graphics.f("#FF0000").s().p("AAhBCQgEgEAAgHIAAgCQgGAGgFADQgGADgHACQgFACgHAAQgLAAgJgDQgIgFgHgGQgGgIgDgJQgEgKAAgKQAAgXAOgNQANgNAVAAQALAAAJAEQAIAEAIAHIAAglQAAgHADgFQAEgEAGABQAHAAADADQAEAEAAAHIAABtQAAAHgEAEQgDADgHAAQgFAAgEgDgAgNgIQgGADgDAHQgEAGAAALQAAAKAEAHQADAHAGAEQAGADAHAAQAIAAAGgDQAGgEAEgHQAEgHAAgKQAAgKgEgIQgEgGgGgEQgGgDgIgBQgHAAgGAFg");
	this.shape_1422.setTransform(72.9,184.3);

	this.shape_1423 = new cjs.Shape();
	this.shape_1423.graphics.f("#FF0000").s().p("AgXBBQgKgEgHgGQgGgGgDgGQgEgHAAgEQAAgFAEgDQAEgEAGAAIAGACIADADQAGANAGAGQAGAHALAAQAGAAAGgDQAGgDAEgGQAEgFAAgHQAAgLgHgGQgHgGgLAAIgGAAIgGABQgFAAgEgDQgDgCAAgEQAAgEAEgDQAEgDAHAAIAFAAQAIAAAHgFQAHgFAAgJQAAgHgFgFQgGgFgIAAQgHAAgEABQgEACgDADIgEAGIgEAIIgEADIgGABQgEAAgEgDQgDgDAAgFQAAgFADgFQADgFAHgFQAGgFAJgDQAKgDALAAQAKAAAIADQAIACAHAFQAGAEADAGQADAGAAAHQAAAKgEAGQgFAHgJAGQAJAEAFAEQAGAFADAGQADAGAAAHQAAAIgEAIQgEAHgIAHQgHAGgKADQgKAEgMAAQgMAAgKgEg");
	this.shape_1423.setTransform(54.9,184.3);

	this.shape_1424 = new cjs.Shape();
	this.shape_1424.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADACAAAFQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_1424.setTransform(36.8,186.1);

	this.shape_1425 = new cjs.Shape();
	this.shape_1425.graphics.f("#FF0000").s().p("AAhBCQgEgEAAgHIAAgCQgGAGgFADQgGADgGACQgGACgIAAQgKAAgIgDQgKgFgGgGQgGgIgEgJQgDgKAAgKQAAgXANgNQANgNAVAAQAMAAAIAEQAJAEAIAHIAAglQAAgHAEgFQADgEAHABQAGAAAEADQADAEAAAHIAABtQAAAHgDAEQgFADgFAAQgGAAgEgDgAgNgIQgGADgEAHQgDAGAAALQAAAKADAHQAEAHAGAEQAHADAGAAQAIAAAGgDQAGgEAEgHQADgHABgKQgBgKgDgIQgEgGgGgEQgGgDgIgBQgHAAgGAFg");
	this.shape_1425.setTransform(23.4,184.3);

	this.shape_1426 = new cjs.Shape();
	this.shape_1426.graphics.f("#FF0000").s().p("AgbAuQgKgDgGgHQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAGQAFAGAGAEQAGACAKAAQAIAAAFgCQAGgEAAgEQAAgHgGgDQgFgDgMgDQgPgDgKgEQgJgCgFgGQgGgGAAgIQAAgIAFgGQAGgHAJgEQALgEAOAAQAKAAAIACQAJACAHADQAFAEAEAEQACAEAAAEQABAEgEADQgEADgFAAQgFAAgDgCIgHgHQgDgDgFgCQgEgDgGAAQgJAAgEADQgGADAAAEQABAEADACIALAFIAQAEQAOADAIAEQAIACAEAGQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgLgFg");
	this.shape_1426.setTransform(5.8,186.1);

	this.shape_1427 = new cjs.Shape();
	this.shape_1427.graphics.f("#FF0000").s().p("AAhBBQgFgEgEgHQgLAHgKAEQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgIQAAgKAIgHQAHgHANgDIANgCIASgEIAQgEQAAgJgEgEQgEgFgNAAQgKAAgFADQgGACgEAGIgFAGQgBABgGAAQgFAAgDgCQgEgCAAgEQAAgHAFgGQAGgGALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAANIAAAPIgBAOQABAHADAIIACAJQAAAEgEADQgEAEgFAAQgFAAgEgEgAADAXIgPADQgFABgEADQgEADAAAGQAAAFAFAEQAEAEAIAAQAIAAAIgDQAGgDAEgFQAEgGgBgNIAAgEIgSAFgAgSgtQAAgBACgEIAFgIQAEgGADgCQAEgCAEAAIAOAAQAGAAAAABIgGAGIgLAKIgIAGQgGADgHAAQgFAAABgDg");
	this.shape_1427.setTransform(-6.3,184.3);

	this.shape_1428 = new cjs.Shape();
	this.shape_1428.graphics.f("#FF0000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgCgFgDgDQgEgEgGABQgGAAgFACQgFAEgDAFQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgEgEQgFgEAAgIIAAgnIgBgPQAAgEgDgEQgEgEgGABQgPAAgEAIQgEAJgBAOIAAAiQAAAIgDAEQgFAEgGAAQgGAAgFgEQgEgEAAgIIAAhHQAAgGAEgEQAEgEAFAAQAHAAADADQAFAEAAAGIAAACQAHgHAJgEQAIgEAKABQALgBAIAEQAGAEAFAHQAIgHAIgEQAIgEALABQALAAAIADQAJAEAEAIQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgHAAgEgEg");
	this.shape_1428.setTransform(-22.2,186.1);

	this.shape_1429 = new cjs.Shape();
	this.shape_1429.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADACAAAFQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_1429.setTransform(-43.3,186.1);

	this.shape_1430 = new cjs.Shape();
	this.shape_1430.graphics.f("#FF0000").s().p("AAhBCQgEgEAAgHIAAgCQgGAGgFADQgGADgGACQgGACgIAAQgKAAgIgDQgKgFgGgGQgGgIgEgJQgDgKAAgKQAAgXANgNQANgNAVAAQAMAAAIAEQAJAEAIAHIAAglQAAgHAEgFQADgEAHABQAGAAAEADQADAEAAAHIAABtQAAAHgDAEQgFADgFAAQgGAAgEgDgAgNgIQgGADgEAHQgDAGAAALQAAAKADAHQAEAHAGAEQAHADAGAAQAIAAAGgDQAGgEAEgHQADgHAAgKQAAgKgDgIQgEgGgGgEQgGgDgIgBQgHAAgGAFg");
	this.shape_1430.setTransform(-56.7,184.3);

	this.shape_1431 = new cjs.Shape();
	this.shape_1431.graphics.f("#FF0000").s().p("AgaAuQgLgDgGgHQgFgGAAgGQAAgEADgDQADgDAGAAQAEAAACACIAFAGQAFAGAGAEQAGACAJAAQAJAAAGgCQAFgEAAgEQAAgHgFgDQgHgDgMgDQgPgDgIgEQgKgCgGgGQgFgGAAgIQAAgIAFgGQAFgHALgEQAKgEANAAQAKAAAKACQAIACAGADQAGAEADAEQAEAEAAAEQAAAEgEADQgDADgHAAQgEAAgDgCIgHgHQgDgDgEgCQgFgDgHAAQgIAAgFADQgEADgBAEQAAAEAEACIAKAFIARAEQANADAJAEQAIACAFAGQAEAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgPAAgLgFg");
	this.shape_1431.setTransform(-74.4,186.1);

	this.shape_1432 = new cjs.Shape();
	this.shape_1432.graphics.f("#FF0000").s().p("AgJAxIgFgGIgGgLIgbg6IgCgEIgCgFIAAgEIABgFIAFgEQADgCAEAAQAHAAADADQADAFADAHIAWA5IAZg7QADgHADgDQACgDAGAAQAGAAAEADQADADAAAFIAAADIgCAFIgCAEIgbA7IgDAGIgEAHIgGAEQgDACgFAAQgFAAgEgCg");
	this.shape_1432.setTransform(-98.7,186.1);

	this.shape_1433 = new cjs.Shape();
	this.shape_1433.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDADQgDAEgDAFIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1433.setTransform(-120.2,186.1);

	this.shape_1434 = new cjs.Shape();
	this.shape_1434.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAguIgEAAQgGgBgDgCQgEgDAAgDQAAgEAEgDQADgDAHABIADAAIAAgQIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGgBADADQADADAAAEQAAAFgEACQgFACgIAAIgGAAIAAAsIABAKQAAACACADQACACAFAAIAHgBIAHgBQADAAADADQADACAAAEQAAAFgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_1434.setTransform(-129,184.4);

	this.shape_1435 = new cjs.Shape();
	this.shape_1435.graphics.f("#FF0000").s().p("AgXAvQgKgDgIgIQgHgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAKQAEAJAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgcQgHAEgDAHQgEAIABAJQgBAKAEAHQADAHAHAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgHAAgHADg");
	this.shape_1435.setTransform(-163,186.1);

	this.shape_1436 = new cjs.Shape();
	this.shape_1436.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAguIgEAAQgGgBgDgCQgEgDAAgDQAAgEAEgDQADgDAHABIADAAIAAgQIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGgBADADQADADAAAEQAAAFgEACQgFACgIAAIgGAAIAAAsIABAKQAAACACADQACACAFAAIAHgBIAHgBQADAAADADQADACAAAEQAAAFgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_1436.setTransform(-172.9,184.4);

	this.shape_1437 = new cjs.Shape();
	this.shape_1437.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_1437.setTransform(-180,184.3);

	this.shape_1438 = new cjs.Shape();
	this.shape_1438.graphics.f("#FF0000").s().p("AAcAxQgDgDgEgFIgVgbIgUAbIgIAIQgDACgFAAQgGAAgDgDQgEgDAAgEQAAgEAFgHIAaggIgXgbQgFgHAAgEQgBgEAEgDQAEgDAFAAQAFAAAEADIAHAIIASAVIASgVIAIgIQADgDAFAAQAGAAAEADQADADAAAEIgBAFIgFAGIgXAbIAaAgQAGAHAAAEQAAAEgEADQgEADgFAAQgFAAgEgCg");
	this.shape_1438.setTransform(-188.5,186.1);

	this.shape_1439 = new cjs.Shape();
	this.shape_1439.graphics.f("#FF0000").s().p("AAaAvQgDgEAAgIIAAgoQAAgNgFgGQgDgGgMAAQgHAAgGADQgGAFgDAGQgCAGAAAPIAAAeQAAAIgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgEQADgDAGAAQAEAAADACIAFAEQACAEAAAEIAAADQAIgJAIgEQAIgEAMAAQALAAAJAEQAJAFAEAHQADAFABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_1439.setTransform(-218.5,186.1);

	this.shape_1440 = new cjs.Shape();
	this.shape_1440.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDADQgDAEgDAFIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1440.setTransform(-241.2,186.1);

	this.shape_1441 = new cjs.Shape();
	this.shape_1441.graphics.f("#FF0000").s().p("AgbBCQgMgEgGgGQgGgFAAgGQAAgFADgDQAEgCAFAAQAGgBAFAFIAFAFIAFAEIAHADIAKABQAKAAAGgDQAGgCADgGQACgEABgGIAAgSQgGAJgJAEQgJAEgLAAQgOAAgLgHQgKgGgGgMQgGgKAAgPQAAgLAEgKQADgIAHgGQAGgHAJgDQAIgDAKAAQALAAAJAEQAJAEAIAIIAAgCQAAgHAEgEQADgDAGgBQAIAAADAGQADAEAAAJIAABHQAAANgDAJQgDAJgHAGQgHAFgLADQgKADgQABQgOAAgMgEgAgTgqQgHAJAAAPQAAAPAHAGQAIAJALgBQAHAAAHgDQAGgDAEgGQAEgGAAgKQAAgQgIgIQgIgJgMAAQgLABgIAHg");
	this.shape_1441.setTransform(-253.3,188);

	this.shape_1442 = new cjs.Shape();
	this.shape_1442.graphics.f("#FF0000").s().p("AAaAvQgDgEAAgIIAAgoQAAgNgFgGQgDgGgMAAQgHAAgGADQgHAFgDAGQgBAGAAAPIAAAeQAAAIgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgEQAEgDAGAAQAEAAADACIAFAEQACAEAAAEIAAADQAIgJAIgEQAIgEAMAAQALAAAJAEQAJAFAEAHQADAFABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_1442.setTransform(-271.5,186.1);

	this.shape_1443 = new cjs.Shape();
	this.shape_1443.graphics.f("#FF0000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAKQAEAJAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgcQgHAEgDAHQgDAIgBAJQABAKADAHQADAHAHAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgHAAgHADg");
	this.shape_1443.setTransform(-284.5,186.1);

	this.shape_1444 = new cjs.Shape();
	this.shape_1444.graphics.f("#FF0000").s().p("AgvBDQgGgCAAgHQAAgEADgCQADgCAGgBIAEABIAFABQAFAAADgCQACgBADgDIAFgJIADgGIgkhMQgDgIAAgCIACgGQACgDADgCQADgCAEAAQAGABADADQAEADACAHIAXA9IAXg5IAFgLQACgDADgCQACgBAFgBIAGACQADACACADIABAEIgBAFIgDAHIglBUQgFALgEAHQgEAHgHADQgIAEgNAAQgNAAgGgDg");
	this.shape_1444.setTransform(278.4,163.8);

	this.shape_1445 = new cjs.Shape();
	this.shape_1445.graphics.f("#FF0000").s().p("AAhBBQgEgDAAgHIAAgCQgGAFgFAEQgGADgGACQgGACgIABQgKgBgJgEQgJgEgGgGQgGgIgEgJQgDgJAAgLQAAgXANgNQAOgNAUAAQAMAAAJAEQAIAEAIAHIAAglQAAgHAEgEQADgFAHAAQAGABADADQAEAEAAAHIAABtQAAAHgEADQgEAEgFABQgGgBgEgEgAgNgIQgGADgDAGQgEAIAAAKQAAAKAEAHQADAGAHAEQAFAEAHAAQAHAAAHgEQAGgDAEgHQAEgHgBgKQABgLgEgHQgEgGgGgEQgHgEgHAAQgHAAgGAFg");
	this.shape_1445.setTransform(247.7,160.1);

	this.shape_1446 = new cjs.Shape();
	this.shape_1446.graphics.f("#FF0000").s().p("AAhBBQgEgDAAgHIAAgCQgFAFgGAEQgGADgGACQgGACgIABQgKgBgJgEQgIgEgHgGQgGgIgEgJQgDgJAAgLQAAgXAOgNQANgNAUAAQAMAAAJAEQAIAEAIAHIAAglQAAgHAEgEQADgFAGAAQAHABADADQAEAEAAAHIAABtQAAAHgEADQgEAEgGABQgFgBgEgEgAgNgIQgGADgDAGQgEAIAAAKQAAAKAEAHQADAGAHAEQAFAEAHAAQAHAAAHgEQAGgDAEgHQAEgHgBgKQABgLgEgHQgEgGgGgEQgHgEgHAAQgHAAgGAFg");
	this.shape_1446.setTransform(228.4,160.1);

	this.shape_1447 = new cjs.Shape();
	this.shape_1447.graphics.f("#FF0000").s().p("AAaAvQgEgEABgIIAAgoQgBgMgDgHQgFgGgLAAQgHAAgGADQgHAFgDAHQgCAFABAPIAAAeQgBAIgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgEQAEgDAGAAQAEAAADACIAFAEQACADAAAFIAAADQAIgIAJgFQAHgEAMAAQALAAAJAEQAJAFAFAIQACAEABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_1447.setTransform(215.6,161.9);

	this.shape_1448 = new cjs.Shape();
	this.shape_1448.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADADAAADQAAAEgDAEQgDAFgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_1448.setTransform(202.8,161.9);

	this.shape_1449 = new cjs.Shape();
	this.shape_1449.graphics.f("#FF0000").s().p("AgJAxIgFgGIgGgLIgbg6IgCgEIgCgFIAAgEIABgFIAFgEQADgCAEAAQAHAAADADQADAEADAIIAWA5IAZg7QADgHADgDQACgDAGAAQAGAAAEADQADADAAAFIAAADIgCAFIgCAEIgbA7IgDAGIgEAHIgGAEQgDACgFAAQgFAAgEgCg");
	this.shape_1449.setTransform(190.9,161.9);

	this.shape_1450 = new cjs.Shape();
	this.shape_1450.graphics.f("#FF0000").s().p("AgbAvQgLgFgFgGQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAGQAFAGAGAEQAGACAJAAQAJAAAGgCQAFgEAAgFQAAgGgFgDQgHgDgLgDQgPgDgKgDQgJgDgGgGQgFgFAAgJQAAgIAFgGQAFgHAKgEQALgEAOAAQAKAAAJACQAIACAHAEQAFADAEAEQACAEAAAEQAAAEgDADQgDADgGAAQgFAAgDgDIgHgGQgDgDgFgCQgEgDgGAAQgIAAgGADQgEADAAAEQgBAEAEACIAKAFIARAEQAOADAIAEQAIACAEAGQAFAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgOAAgMgEg");
	this.shape_1450.setTransform(173.9,161.9);

	this.shape_1451 = new cjs.Shape();
	this.shape_1451.graphics.f("#FF0000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgCgFgDgDQgDgDgIAAQgFAAgFACQgFADgDAFQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgGAAgEgEQgDgEAAgIIAAgnIgCgPQAAgEgDgEQgEgDgGAAQgOAAgFAIQgFAIAAAQIAAAhQAAAIgDAEQgEAEgHAAQgGAAgEgEQgFgEAAgIIAAhHQAAgGAEgEQADgEAHAAQAFAAAFADQADAEAAAGIAAACQAIgHAJgEQAIgEAKABQALgBAIAEQAHAEAEAHQAIgHAIgEQAIgEAKABQAMAAAIADQAJAFAEAHQAEAGAAAPIAAAwQAAAIgEAEQgEAEgHAAQgGAAgFgEg");
	this.shape_1451.setTransform(146,161.9);

	this.shape_1452 = new cjs.Shape();
	this.shape_1452.graphics.f("#FF0000").s().p("AAbBDIgHgJIgYglIgQAOIAAAUQAAAGgEAEQgFAEgFABQgHgBgEgEQgDgDAAgIIAAhpQAAgJADgEQAEgEAHgBQAGAAAEAFQAEAEAAAHIAAA8IAfgdIAJgIQADgCAFAAQAFAAAEAEQADADAAAEQAAAFgLAKIgPALIAdAoIAFAHIABAEQAAAGgEAEQgDAEgGAAQgGAAgDgDg");
	this.shape_1452.setTransform(125.4,160.1);

	this.shape_1453 = new cjs.Shape();
	this.shape_1453.graphics.f("#FF0000").s().p("AgXAvQgKgDgIgIQgHgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgcQgHAFgDAGQgDAIAAAJQAAAKADAHQADAHAHAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNAAQgIAAgGADg");
	this.shape_1453.setTransform(100.4,161.9);

	this.shape_1454 = new cjs.Shape();
	this.shape_1454.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADADAAADQAAAEgDAEQgDAFgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_1454.setTransform(73.6,161.9);

	this.shape_1455 = new cjs.Shape();
	this.shape_1455.graphics.f("#FF0000").s().p("AAhBBQgEgDAAgHIAAgCQgGAFgFAEQgGADgHACQgFACgIABQgKgBgJgEQgIgEgHgGQgGgIgDgJQgEgJAAgLQAAgXAOgNQANgNAUAAQAMAAAJAEQAIAEAIAHIAAglQAAgHAEgEQADgFAGAAQAHABADADQAEAEAAAHIAABtQAAAHgEADQgDAEgHABQgFgBgEgEgAgNgIQgGADgDAGQgEAIAAAKQAAAKAEAHQADAGAHAEQAFAEAHAAQAHAAAHgEQAGgDAEgHQADgHAAgKQAAgLgDgHQgEgGgGgEQgHgEgHAAQgHAAgGAFg");
	this.shape_1455.setTransform(60.2,160.1);

	this.shape_1456 = new cjs.Shape();
	this.shape_1456.graphics.f("#FF0000").s().p("AAgAvQgDgDgGgIQgKAHgKAFQgIADgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgLAIgHQAHgGANgCIANgDIASgEIAQgDQAAgLgEgEQgEgFgMABQgLAAgFACQgGADgEAFIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHAEAIIACAKQAAADgEAEQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAFQAGADAIAAQAHABAIgEQAGgDAEgFQAEgGgBgNIAAgEIgSAFg");
	this.shape_1456.setTransform(42.2,161.9);

	this.shape_1457 = new cjs.Shape();
	this.shape_1457.graphics.f("#FF0000").s().p("AAhBBQgEgDAAgHIAAgCQgGAFgFAEQgGADgGACQgGACgIABQgKgBgIgEQgKgEgGgGQgGgIgEgJQgDgJAAgLQAAgXANgNQANgNAVAAQAMAAAIAEQAJAEAIAHIAAglQAAgHAEgEQADgFAHAAQAGABAEADQADAEAAAHIAABtQAAAHgDADQgFAEgFABQgGgBgEgEgAgNgIQgGADgEAGQgDAIAAAKQAAAKADAHQAEAGAGAEQAHAEAGAAQAIAAAGgEQAGgDAEgHQADgHABgKQgBgLgDgHQgEgGgGgEQgGgEgIAAQgHAAgGAFg");
	this.shape_1457.setTransform(28.8,160.1);

	this.shape_1458 = new cjs.Shape();
	this.shape_1458.graphics.f("#FF0000").s().p("AAaAvQgDgEAAgIIAAgoQAAgMgFgHQgDgGgMAAQgHAAgGADQgGAFgDAHQgCAFAAAPIAAAeQAAAIgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgEQADgDAGAAQAEAAADACIAFAEQACADAAAFIAAADQAIgIAIgFQAIgEAMAAQALAAAJAEQAJAFAEAIQADAEABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_1458.setTransform(15.9,161.9);

	this.shape_1459 = new cjs.Shape();
	this.shape_1459.graphics.f("#FF0000").s().p("AAgAvQgEgDgEgIQgLAHgJAFQgJADgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgLAHgHQAIgGANgCIAOgDIARgEIARgDQgBgLgEgEQgEgFgNABQgJAAgGACQgFADgEAFIgGAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHACAIIADAKQAAADgEAEQgFADgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAEAFQAFADAIAAQAIABAHgEQAIgDADgFQADgGABgNIAAgEIgSAFg");
	this.shape_1459.setTransform(3.1,161.9);

	this.shape_1460 = new cjs.Shape();
	this.shape_1460.graphics.f("#FF0000").s().p("AgDBEIgKgEIgHgFIgIgGIAAACQAAAHgDADQgFAEgGABQgGgBgDgEQgEgDAAgHIAAhsQAAgHADgEQAEgFAGAAQAHAAAEAFQADADAAAHIAAAmQAIgIAJgDQAIgEALAAQAOAAAMAGQAKAFAGAMQAGAKAAAQQAAALgEAJQgCAKgHAHQgGAGgJAEQgJAEgLABQgHAAgEgCgAgMgIQgHADgEAGQgDAIgBAKQAAAPAIAIQAIAIAMAAQALAAAHgIQAIgJAAgOQAAgKgDgIQgDgGgGgDQgGgFgIAAQgIAAgFAFg");
	this.shape_1460.setTransform(-9.7,160.1);

	this.shape_1461 = new cjs.Shape();
	this.shape_1461.graphics.f("#FF0000").s().p("AAhAvQgFgDgEgIQgLAHgKAFQgIADgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgLAIgHQAHgGANgCIANgDIASgEIAQgDQAAgLgEgEQgEgFgNABQgKAAgFACQgGADgEAFIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAJAAANIAAAPIgBANQABAHADAIIACAKQAAADgEAEQgEADgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAFAFQAEADAIAAQAIABAIgEQAGgDAEgFQAEgGgBgNIAAgEIgSAFg");
	this.shape_1461.setTransform(-28.4,161.9);

	this.shape_1462 = new cjs.Shape();
	this.shape_1462.graphics.f("#FF0000").s().p("AgJBBQgEgDAAgIIAAhrQAAgIADgDQAEgFAGAAQAGAAAEAFQAEADAAAIIAABrQAAAIgEADQgEAEgGABQgGgBgDgEg");
	this.shape_1462.setTransform(-37.6,160.1);

	this.shape_1463 = new cjs.Shape();
	this.shape_1463.graphics.f("#FF0000").s().p("AAbAvQgFgEAAgIIAAgoQAAgMgDgHQgEgGgMAAQgHAAgGADQgGAFgDAHQgDAFAAAPIAAAeQAAAIgDAEQgEAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgEQADgDAGAAQAEAAADACIAFAEQACADAAAFIAAADQAHgIAJgFQAIgEAMAAQALAAAJAEQAJAFAEAIQADAEABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1463.setTransform(-52.3,161.9);

	this.shape_1464 = new cjs.Shape();
	this.shape_1464.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADADAAADQAAAEgDAEQgDAFgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_1464.setTransform(-65.2,161.9);

	this.shape_1465 = new cjs.Shape();
	this.shape_1465.graphics.f("#FF0000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgcQgHAFgDAGQgDAIgBAJQABAKADAHQADAHAHAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNAAQgHAAgHADg");
	this.shape_1465.setTransform(-83.3,161.9);

	this.shape_1466 = new cjs.Shape();
	this.shape_1466.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAgvIgEAAQgGAAgDgCQgEgDAAgEQAAgDAEgDQADgCAHAAIADAAIAAgQIAAgJQAAgDACgDQACgCADgCQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAASIALAAQAGAAADACQADADAAADQAAAFgEADQgFABgIAAIgGAAIAAAtIABAJQAAAEACACQACACAFAAIAHgBIAHgBQADAAADACQADADAAAEQAAAFgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_1466.setTransform(-93.3,160.2);

	this.shape_1467 = new cjs.Shape();
	this.shape_1467.graphics.f("#FF0000").s().p("AgJBBQgEgDAAgIIAAhrQAAgIADgDQAEgFAGAAQAGAAAEAFQAEADAAAIIAABrQAAAIgEADQgEAEgGABQgGgBgDgEg");
	this.shape_1467.setTransform(-100.3,160.1);

	this.shape_1468 = new cjs.Shape();
	this.shape_1468.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADADAAADQAAAEgDAEQgDAFgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_1468.setTransform(-109.5,161.9);

	this.shape_1469 = new cjs.Shape();
	this.shape_1469.graphics.f("#FF0000").s().p("AAcAvQgEgDAAgIIAAgDIgKAKQgHAEgGACQgGABgJAAQgKAAgIgDQgIgEgFgHQgFgHAAgPIAAgxQAAgIAEgDQAEgEAGAAQAHAAADAEQAEADABAIIAAAnQAAAJABAFQACAHAEADQAFADAHABQAHAAAFgFQAHgDADgHQADgFAAgQIAAgfQAAgIADgDQAEgEAHAAQAGAAAEAEQAEADAAAIIAABHQAAAIgEADQgDAEgHAAQgFAAgEgEg");
	this.shape_1469.setTransform(-122.3,161.9);

	this.shape_1470 = new cjs.Shape();
	this.shape_1470.graphics.f("#FF0000").s().p("AgJAxIgFgGIgGgLIgbg6IgCgEIgCgFIAAgEIABgFIAFgEQADgCAEAAQAHAAADADQADAEADAIIAWA5IAZg7QADgHADgDQACgDAGAAQAGAAAEADQADADAAAFIAAADIgCAFIgCAEIgbA7IgDAGIgEAHIgGAEQgDACgFAAQgFAAgEgCg");
	this.shape_1470.setTransform(-134.7,161.9);

	this.shape_1471 = new cjs.Shape();
	this.shape_1471.graphics.f("#FF0000").s().p("AAhAvQgFgDgEgIQgLAHgKAFQgIADgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgLAIgHQAHgGANgCIANgDIASgEIAQgDQAAgLgEgEQgEgFgNABQgKAAgFACQgGADgEAFIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAJAAANIAAAPIgBANQABAHADAIIACAKQAAADgEAEQgEADgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAFAFQAEADAIAAQAIABAIgEQAGgDAEgFQAEgGgBgNIAAgEIgSAFg");
	this.shape_1471.setTransform(-152.1,161.9);

	this.shape_1472 = new cjs.Shape();
	this.shape_1472.graphics.f("#FF0000").s().p("AAWA2IAAgqQAAgMgDgGQgFgGgLAAQgHAAgFAEQgHAEgDAFQgCAGAAAOIAAAhQAAAIgEADQgEAEgGABQgPgBAAgPIAAhrQAAgIAEgDQADgFAIAAQAGAAAEAFQAEADAAAIIAAAlQAFgFAFgEQAGgDAFgCQAGgCAHAAQALAAAJAFQAIADAFAIQADAFABAFIABAMIAAAwQAAAIgEADQgEAEgGABQgPgBAAgPg");
	this.shape_1472.setTransform(-164.9,160.1);

	this.shape_1473 = new cjs.Shape();
	this.shape_1473.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADADAAADQAAAEgDAEQgDAFgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_1473.setTransform(-183.1,161.9);

	this.shape_1474 = new cjs.Shape();
	this.shape_1474.graphics.f("#FF0000").s().p("AgaAvQgMgFgFgGQgFgGAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAGQAEAGAHAEQAGACAJAAQAJAAAGgCQAFgEAAgFQAAgGgFgDQgHgDgLgDQgQgDgIgDQgKgDgGgGQgFgFAAgJQAAgIAFgGQAFgHALgEQAKgEAOAAQAJAAAKACQAIACAGAEQAGADADAEQAEAEAAAEQgBAEgDADQgDADgHAAQgEAAgDgDIgHgGQgDgDgEgCQgFgDgGAAQgJAAgFADQgEADAAAEQAAAEADACIAKAFIARAEQANADAJAEQAIACAFAGQAEAFAAAHQAAAKgGAIQgFAHgMAEQgLAEgPAAQgPAAgLgEg");
	this.shape_1474.setTransform(-195.3,161.9);

	this.shape_1475 = new cjs.Shape();
	this.shape_1475.graphics.f("#FF0000").s().p("AgJBBQgEgDAAgIIAAhrQAAgIADgDQAEgFAGAAQAGAAAEAFQAEADAAAIIAABrQAAAIgEADQgEAEgGABQgGgBgDgEg");
	this.shape_1475.setTransform(-209.4,160.1);

	this.shape_1476 = new cjs.Shape();
	this.shape_1476.graphics.f("#FF0000").s().p("AAhAvQgFgDgEgIQgLAHgKAFQgIADgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgLAIgHQAHgGANgCIAOgDIARgEIAQgDQAAgLgEgEQgEgFgNABQgKAAgFACQgFADgFAFIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHADAIIACAKQAAADgEAEQgEADgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAFAFQAFADAHAAQAIABAIgEQAGgDAEgFQADgGAAgNIAAgEIgSAFg");
	this.shape_1476.setTransform(-218.6,161.9);

	this.shape_1477 = new cjs.Shape();
	this.shape_1477.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEADgGAAQgFAAgEgDg");
	this.shape_1477.setTransform(-227.9,160.1);

	this.shape_1478 = new cjs.Shape();
	this.shape_1478.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDADQgDADgDAGIgDAOIgBARIAAAVQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1478.setTransform(-246.9,161.9);

	this.shape_1479 = new cjs.Shape();
	this.shape_1479.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADADAAADQAAAEgDAEQgDAFgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_1479.setTransform(-258.5,161.9);

	this.shape_1480 = new cjs.Shape();
	this.shape_1480.graphics.f("#FF0000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgCgFgDgDQgDgDgIAAQgFAAgFACQgFADgDAFQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgGAAgEgEQgDgEAAgIIAAgnIgCgPQAAgEgDgEQgEgDgGAAQgOAAgFAIQgFAIAAAQIAAAhQAAAIgDAEQgEAEgHAAQgGAAgEgEQgFgEAAgIIAAhHQAAgGAEgEQADgEAHAAQAFAAAFADQADAEAAAGIAAACQAIgHAJgEQAIgEAKABQALgBAHAEQAIAEAEAHQAIgHAIgEQAIgEAKABQAMAAAIADQAJAFAEAHQAEAGAAAPIAAAwQAAAIgEAEQgEAEgHAAQgGAAgFgEg");
	this.shape_1480.setTransform(-274.3,161.9);

	this.shape_1481 = new cjs.Shape();
	this.shape_1481.graphics.f("#FF0000").s().p("AgXAvQgKgDgIgIQgHgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgcQgHAFgDAGQgEAIABAJQgBAKAEAHQADAHAHAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNAAQgIAAgGADg");
	this.shape_1481.setTransform(-290.3,161.9);

	this.shape_1482 = new cjs.Shape();
	this.shape_1482.graphics.f("#FF0000").s().p("AAhAvQgEgDgFgIQgLAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIAOgDIARgDIARgFQgBgJgEgFQgEgFgNAAQgJAAgGADQgFADgFAFIgFAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAFgGQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAKQAAAEgEACQgFAEgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAFAEQAFAFAHAAQAIgBAHgDQAIgDADgFQAEgGAAgNIAAgEIgSAFg");
	this.shape_1482.setTransform(241.5,137.8);

	this.shape_1483 = new cjs.Shape();
	this.shape_1483.graphics.f("#FF0000").s().p("AA5AvQgFgEAAgIIAAgpIgBgNQAAgEgEgEQgEgDgGAAQgGAAgFADQgFACgDAGQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgEgEQgFgEAAgIIAAgnIgBgOQAAgFgDgEQgDgDgIAAQgOgBgEAJQgEAJAAAOIAAAiQAAAIgFAEQgEAEgGAAQgHAAgEgEQgEgEAAgIIAAhHQAAgGAEgEQAEgEAFAAQAHAAADAEQAFADAAAGIAAACQAHgHAIgEQAJgEAKAAQALAAAIAEQAHAEAFAHQAHgHAIgEQAJgEAKAAQALABAIAEQAJADAEAIQAEAGAAAPIAAAwQAAAIgEAEQgEAEgHAAQgHAAgDgEg");
	this.shape_1483.setTransform(205.4,137.8);

	this.shape_1484 = new cjs.Shape();
	this.shape_1484.graphics.f("#FF0000").s().p("AAbAvQgEgEAAgHIAAgpQgBgNgEgGQgDgHgMABQgHAAgGADQgGAFgDAGQgCAGAAAPIAAAfQgBAHgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgHIAAhIQAAgHAEgDQADgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAIgJAIgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgHAAgDgEg");
	this.shape_1484.setTransform(184.1,137.8);

	this.shape_1485 = new cjs.Shape();
	this.shape_1485.graphics.f("#FF0000").s().p("AAcAvQgEgDAAgIIAAgCIgKAJQgHAEgGACQgGACgIAAQgLAAgIgEQgIgEgFgHQgFgHAAgPIAAgxQAAgHAEgEQAEgEAGAAQAGAAAEAEQAFAEAAAHIAAAnQAAAJABAFQACAGAFAEQAEAEAHAAQAHgBAFgEQAHgDADgGQADgFAAgSIAAgeQAAgHADgEQAEgEAHAAQAGAAAEAEQAEAEAAAHIAABHQAAAIgEADQgDAEgHAAQgFAAgEgEg");
	this.shape_1485.setTransform(171.2,137.8);

	this.shape_1486 = new cjs.Shape();
	this.shape_1486.graphics.f("#FF0000").s().p("AAaAvQgDgEAAgHIAAgpQAAgNgFgGQgDgHgMABQgHAAgGADQgHAFgDAGQgBAGAAAPIAAAfQAAAHgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgHIAAhIQAAgHAEgDQADgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAIgJAIgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_1486.setTransform(152.8,137.8);

	this.shape_1487 = new cjs.Shape();
	this.shape_1487.graphics.f("#FF0000").s().p("AgWAvQgLgDgHgIQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAKQAEAIAAALQAAALgEAJQgEAKgIAHQgHAHgLADQgKAEgNAAQgMAAgKgEgAgOgbQgHAEgDAGQgDAIgBAJQABAKADAHQADAIAHADQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgPgHgIQgIgJgNAAQgHABgHAEg");
	this.shape_1487.setTransform(139.9,137.8);

	this.shape_1488 = new cjs.Shape();
	this.shape_1488.graphics.f("#FF0000").s().p("AAgAvQgDgDgGgIQgKAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgDIAQgFQAAgJgEgFQgEgFgMAAQgKAAgGADQgGADgDAFIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAGgGQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHAEAIIACAKQAAAEgEACQgEAEgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAGAFAIAAQAHgBAIgDQAGgDAEgFQADgGAAgNIAAgEIgSAFg");
	this.shape_1488.setTransform(103.3,137.8);

	this.shape_1489 = new cjs.Shape();
	this.shape_1489.graphics.f("#FF0000").s().p("AAcAvQgEgDAAgIIAAgCIgLAJQgFAEgHACQgGACgIAAQgLAAgIgEQgIgEgFgHQgFgHAAgPIAAgxQAAgHAEgEQADgEAHAAQAGAAAFAEQADAEAAAHIAAAnQABAJABAFQACAGAFAEQADAEAIAAQAGgBAHgEQAGgDADgGQACgFAAgSIAAgeQAAgHAEgEQAFgEAGAAQAGAAAEAEQAEAEAAAHIAABHQAAAIgEADQgEAEgFAAQgHAAgDgEg");
	this.shape_1489.setTransform(90.5,137.8);

	this.shape_1490 = new cjs.Shape();
	this.shape_1490.graphics.f("#FF0000").s().p("AAgAvQgDgDgGgIQgKAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgDIAQgFQAAgJgEgFQgEgFgMAAQgKAAgGADQgGADgDAFIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAGgGQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHAEAIIACAKQAAAEgEACQgEAEgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAGAFAIAAQAHgBAIgDQAGgDAEgFQADgGAAgNIAAgEIgSAFg");
	this.shape_1490.setTransform(59.6,137.8);

	this.shape_1491 = new cjs.Shape();
	this.shape_1491.graphics.f("#FF0000").s().p("AAgAvQgDgDgGgIQgKAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgDIAQgFQAAgJgEgFQgEgFgMAAQgKAAgGADQgGADgDAFIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAGgGQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHAEAIIACAKQAAAEgEACQgEAEgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAGAFAIAAQAHgBAIgDQAGgDAEgFQADgGAAgNIAAgEIgSAFg");
	this.shape_1491.setTransform(35.8,137.8);

	this.shape_1492 = new cjs.Shape();
	this.shape_1492.graphics.f("#FF0000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEAEAAAGIAABIQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_1492.setTransform(13.9,136);

	this.shape_1493 = new cjs.Shape();
	this.shape_1493.graphics.f("#FF0000").s().p("AAhAvQgEgDgFgIQgLAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIAOgDIARgDIARgFQgBgJgEgFQgEgFgNAAQgJAAgGADQgFADgFAFIgFAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAFgGQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAKQAAAEgEACQgFAEgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAFAEQAFAFAHAAQAIgBAHgDQAIgDADgFQAEgGAAgNIAAgEIgSAFg");
	this.shape_1493.setTransform(-6.9,137.8);

	this.shape_1494 = new cjs.Shape();
	this.shape_1494.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAguIgEAAQgGAAgDgDQgEgCAAgEQAAgEAEgDQADgCAHAAIADAAIAAgQIAAgJQAAgEACgCQACgDADgBQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGAAADACQADADAAAEQAAAEgEACQgFADgIAAIgGAAIAAAtIABAJQAAACACACQACACAFABIAHgCIAHAAQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_1494.setTransform(-16.7,136.1);

	this.shape_1495 = new cjs.Shape();
	this.shape_1495.graphics.f("#FF0000").s().p("AA4AvQgEgEAAgIIAAgpIgBgNQAAgEgEgEQgEgDgGAAQgGAAgFADQgFACgDAGQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgEgEQgFgEAAgIIAAgnIgBgOQAAgFgDgEQgDgDgIAAQgOgBgEAJQgEAJAAAOIAAAiQAAAIgFAEQgEAEgGAAQgHAAgEgEQgEgEAAgIIAAhHQAAgGAEgEQAEgEAFAAQAHAAADAEQAFADAAAGIAAACQAHgHAIgEQAJgEAKAAQALAAAIAEQAHAEAEAHQAIgHAIgEQAJgEAKAAQALABAIAEQAJADAEAIQAEAGAAAPIAAAwQAAAIgEAEQgEAEgHAAQgHAAgEgEg");
	this.shape_1495.setTransform(-43,137.8);

	this.shape_1496 = new cjs.Shape();
	this.shape_1496.graphics.f("#FF0000").s().p("AAhAvQgFgDgEgIQgLAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAIgIQAHgGANgCIAOgDIARgDIARgFQgBgJgEgFQgEgFgNAAQgKAAgFADQgGADgEAFIgFAHQgBABgGAAQgFAAgDgCQgEgDAAgEQAAgHAFgGQAGgGALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAKQAAAEgEACQgFAEgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAFAEQAFAFAHAAQAIgBAHgDQAHgDAEgFQAEgGAAgNIAAgEIgSAFg");
	this.shape_1496.setTransform(-64.2,137.8);

	this.shape_1497 = new cjs.Shape();
	this.shape_1497.graphics.f("#FF0000").s().p("AAhBCQgEgEAAgHIAAgDQgFAHgGADQgGADgGACQgGACgIAAQgKAAgJgDQgIgFgHgGQgGgIgEgJQgDgJAAgMQAAgWAOgNQANgNAUAAQAMAAAJADQAIAFAIAHIAAglQAAgHAEgFQADgDAGAAQAHgBADAEQAEADAAAIIAABtQAAAHgEAEQgEADgGAAQgFAAgEgDgAgNgJQgGAEgDAHQgEAGAAALQAAAJAEAHQADAHAHAFQAFADAHAAQAHAAAHgDQAGgEAEgHQAEgHgBgKQABgKgEgIQgEgGgGgEQgHgDgHAAQgHgBgGAEg");
	this.shape_1497.setTransform(-77.6,135.9);

	this.shape_1498 = new cjs.Shape();
	this.shape_1498.graphics.f("#FF0000").s().p("AAaAvQgDgEAAgHIAAgpQgBgNgEgGQgDgHgMABQgHAAgGADQgGAFgDAGQgCAGAAAPIAAAfQgBAHgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgHIAAhIQAAgHAEgDQADgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAIgJAIgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_1498.setTransform(-90.4,137.8);

	this.shape_1499 = new cjs.Shape();
	this.shape_1499.graphics.f("#FF0000").s().p("AAhAvQgEgDgFgIQgLAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIAOgDIARgDIARgFQgBgJgEgFQgEgFgNAAQgJAAgGADQgFADgFAFIgFAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAFgGQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAKQAAAEgEACQgFAEgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAFAEQAFAFAHAAQAIgBAHgDQAIgDADgFQAEgGAAgNIAAgEIgSAFg");
	this.shape_1499.setTransform(-103.2,137.8);

	this.shape_1500 = new cjs.Shape();
	this.shape_1500.graphics.f("#FF0000").s().p("AgDBEIgLgDIgGgGIgIgHIAAADQAAAHgEAEQgDADgHAAQgFAAgEgDQgEgEAAgHIAAhsQAAgHADgFQAEgDAGAAQAHAAADADQAEAEAAAHIAAAmQAIgHAJgEQAIgEALAAQAOAAAMAGQAKAGAGALQAGAKAAAPQAAAMgDAKQgDAJgHAHQgGAGgJAFQgJADgLAAQgGABgFgCgAgMgJQgHAEgEAHQgDAHgBAKQAAAPAJAIQAHAIAMAAQAKAAAIgIQAIgIAAgPQAAgLgDgGQgDgHgGgEQgGgEgIABQgIgBgFAEg");
	this.shape_1500.setTransform(-116,135.9);

	this.shape_1501 = new cjs.Shape();
	this.shape_1501.graphics.f("#FF0000").s().p("AAgAvQgDgDgGgIQgKAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAIgIQAHgGANgCIANgDIASgDIAQgFQAAgJgEgFQgEgFgMAAQgLAAgFADQgGADgEAFIgFAHQgBABgGAAQgFAAgDgCQgEgDAAgEQAAgHAGgGQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHAEAIIACAKQAAAEgEACQgEAEgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAFAFAJAAQAHgBAIgDQAGgDAEgFQAEgGgBgNIAAgEIgSAFg");
	this.shape_1501.setTransform(-134.7,137.8);

	this.shape_1502 = new cjs.Shape();
	this.shape_1502.graphics.f("#FF0000").s().p("AgJBCQgEgFAAgHIAAhsQAAgHADgEQAEgDAGAAQAGAAAEADQAEAEAAAHIAABsQAAAHgEAFQgEADgGAAQgGAAgDgDg");
	this.shape_1502.setTransform(-143.9,135.9);

	this.shape_1503 = new cjs.Shape();
	this.shape_1503.graphics.f("#FF0000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_1503.setTransform(-158.5,137.8);

	this.shape_1504 = new cjs.Shape();
	this.shape_1504.graphics.f("#FF0000").s().p("AAhBCQgEgEAAgHIAAgDQgGAHgFADQgGADgGACQgGACgIAAQgKAAgIgDQgKgFgGgGQgGgIgEgJQgDgJAAgMQAAgWANgNQANgNAVAAQAMAAAIADQAJAFAIAHIAAglQAAgHAEgFQADgDAHAAQAGgBAEAEQADADAAAIIAABtQAAAHgDAEQgFADgFAAQgGAAgEgDgAgNgJQgGAEgEAHQgDAGAAALQAAAJADAHQAEAHAGAFQAHADAGAAQAIAAAGgDQAGgEAEgHQADgHAAgKQAAgKgDgIQgEgGgGgEQgGgDgIAAQgHgBgGAEg");
	this.shape_1504.setTransform(-171.9,135.9);

	this.shape_1505 = new cjs.Shape();
	this.shape_1505.graphics.f("#FF0000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_1505.setTransform(-190,137.8);

	this.shape_1506 = new cjs.Shape();
	this.shape_1506.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAguIgEAAQgGAAgDgDQgEgCAAgEQAAgEAEgDQADgCAHAAIADAAIAAgQIAAgJQAAgEACgCQACgDADgBQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGAAADACQADADAAAEQAAAEgEACQgFADgIAAIgGAAIAAAtIABAJQAAACACACQACACAFABIAHgCIAHAAQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_1506.setTransform(-199.8,136.1);

	this.shape_1507 = new cjs.Shape();
	this.shape_1507.graphics.f("#FF0000").s().p("AAbAvQgFgEAAgHIAAgpQAAgNgDgGQgFgHgLABQgHAAgGADQgGAFgEAGQgCAGAAAPIAAAfQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhIQAAgHADgDQAEgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAHgJAKgDQAHgFAMAAQALAAAJAFQAJAEAFAHQACAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1507.setTransform(-210.4,137.8);

	this.shape_1508 = new cjs.Shape();
	this.shape_1508.graphics.f("#FF0000").s().p("AAgAvQgEgDgFgIQgKAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgDIARgFQgBgJgEgFQgEgFgMAAQgKAAgGADQgFADgEAFIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAGgGQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHADAIIADAKQAAAEgEACQgFAEgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAEAEQAFAFAJAAQAHgBAHgDQAIgDADgFQADgGABgNIAAgEIgSAFg");
	this.shape_1508.setTransform(-223.2,137.8);

	this.shape_1509 = new cjs.Shape();
	this.shape_1509.graphics.f("#FF0000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAguIgEAAQgGAAgDgDQgEgCAAgEQAAgEAEgDQADgCAHAAIADAAIAAgQIAAgJQAAgEACgCQACgDADgBQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGAAADACQADADAAAEQAAAEgEACQgFADgIAAIgGAAIAAAtIABAJQAAACACACQACACAFABIAHgCIAHAAQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_1509.setTransform(-233,136.1);

	this.shape_1510 = new cjs.Shape();
	this.shape_1510.graphics.f("#FF0000").s().p("AAbAvQgFgEAAgHIAAgpQAAgNgDgGQgEgHgMABQgHAAgGADQgGAFgDAGQgDAGAAAPIAAAfQAAAHgDAEQgEAEgHAAQgGAAgEgEQgEgEAAgHIAAhIQAAgHAEgDQADgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAHgJAJgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1510.setTransform(-243.6,137.8);

	this.shape_1511 = new cjs.Shape();
	this.shape_1511.graphics.f("#FF0000").s().p("AAgAvQgDgDgGgIQgKAIgKADQgIAEgMAAQgLAAgJgEQgIgEgFgHQgEgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgDIAQgFQAAgJgEgFQgEgFgMAAQgKAAgGADQgFADgEAFIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAGgGQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHADAIIADAKQAAAEgEACQgFAEgFAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAGAFAIAAQAHgBAHgDQAIgDADgFQADgGAAgNIAAgEIgSAFg");
	this.shape_1511.setTransform(-256.4,137.8);

	this.shape_1512 = new cjs.Shape();
	this.shape_1512.graphics.f("#FF0000").s().p("AgQBDQgJgCgJgEQgHgFgHgGQgHgHgDgIQgFgHgCgJQgCgJAAgKQgBgPAGgNQAFgNALgJQAKgJANgFQANgEAPAAQATAAAOAGQAOAGAJAKQAHAJAAAJQAAAFgEADQgDAEgGAAQgFAAgEgDIgGgIQgGgKgJgFQgIgFgMAAQgSAAgMANQgLAMAAAXQAAAPAGALQAFALAIAEQAJAGAMAAQANgBAKgFQAJgGAFgLIAEgJQADgDAHAAQAFAAAEADQAFAEAAAEQgBAHgDAIQgDAHgJAHQgHAHgMAFQgMAFgQgBQgMAAgKgCg");
	this.shape_1512.setTransform(-270.7,135.9);

	this.shape_1513 = new cjs.Shape();
	this.shape_1513.graphics.f("#FF0000").s().p("AAhBCQgEgEAAgHIAAgDQgGAHgFADQgGADgHACQgFACgHAAQgLAAgJgDQgIgEgHgHQgGgIgDgJQgEgKAAgKQAAgXAOgNQANgNAVAAQALAAAJADQAIAFAIAHIAAglQAAgHADgFQAEgDAGAAQAHAAADADQAEADAAAIIAABtQAAAHgEAEQgDADgHAAQgFAAgEgDgAgNgIQgGADgDAHQgEAGAAALQAAAJAEAIQADAGAHAFQAFADAHAAQAIAAAGgDQAGgEAEgHQAEgHAAgKQAAgKgEgIQgEgGgGgEQgGgDgIgBQgHAAgGAFg");
	this.shape_1513.setTransform(58.1,111.7);

	this.shape_1514 = new cjs.Shape();
	this.shape_1514.graphics.f("#FF0000").s().p("AgmAlQgPgOAAgXQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEABADABQADADAAAEQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_1514.setTransform(39.6,113.6);

	this.shape_1515 = new cjs.Shape();
	this.shape_1515.graphics.f("#FF0000").s().p("AgPBCQgEgEAAgIIAAhBIgIAAQgHAAgDgDQgEgCAAgEQAAgJAPAAIAHAAIAAgIQAAgLADgHQADgHAJgEQAHgCAOAAQAZAAAAAKQAAAEgDACQgCACgEABIgGgBIgHAAQgHAAgDADQgCAFAAAHIAAAGIAHAAQARAAAAAIQAAAHgFABQgEACgIAAIgHAAIAABBQAAAIgEAEQgEADgFAAQgGAAgEgDg");
	this.shape_1515.setTransform(23.9,111.7);

	this.shape_1516 = new cjs.Shape();
	this.shape_1516.graphics.f("#FF0000").s().p("AgmAlQgPgOAAgXQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEABADABQADADAAAEQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_1516.setTransform(6.1,113.6);

	this.shape_1517 = new cjs.Shape();
	this.shape_1517.graphics.f("#FF0000").s().p("AAmBBQgEgEAAgJIAAgtIhDAAIAAAtQAAAJgEAEQgEAFgHgBQgHABgFgFQgEgEAAgJIAAhoQAAgIAEgFQAFgDAHAAQAHAAAEADQAEAFAAAIIAAAmIBDAAIAAgmQAAgIAEgFQAEgDAHAAQAHAAAEADQAFAFAAAIIAABoQAAAJgFAEQgEAFgHgBQgHABgEgFg");
	this.shape_1517.setTransform(-8.4,111.7);

	this.shape_1518 = new cjs.Shape();
	this.shape_1518.graphics.f("#FF0000").s().p("AgaAuQgLgDgGgHQgFgGAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAGQAFAGAGAEQAGACAKAAQAIAAAFgCQAGgEAAgEQAAgHgGgDQgFgDgNgDQgPgDgIgEQgKgCgFgGQgGgGAAgIQAAgHAFgHQAGgHAKgEQAJgEAOAAQALAAAIACQAKACAFADQAGAEADAEQADAEAAAEQAAAEgDADQgEADgGAAQgDAAgEgCIgHgHQgDgEgEgBQgFgDgHAAQgHAAgFADQgGADAAAEQABAEADACIALAFIAQAEQANACAJAFQAIADAFAFQAEAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgPAAgKgFg");
	this.shape_1518.setTransform(-27.8,113.6);

	this.shape_1519 = new cjs.Shape();
	this.shape_1519.graphics.f("#FF0000").s().p("AgmAlQgPgOAAgXQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEABADABQADADAAAEQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_1519.setTransform(-39.9,113.6);

	this.shape_1520 = new cjs.Shape();
	this.shape_1520.graphics.f("#FF0000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgBgEgEgEQgDgEgIABQgFAAgFACQgFAEgDAFQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgGAAgDgEQgEgEgBgIIAAgnIgBgPQAAgEgDgEQgEgEgGABQgOgBgFAJQgEAJgBAOIAAAiQAAAIgDAEQgFAEgGAAQgGAAgFgEQgEgEAAgIIAAhHQAAgGAEgEQADgEAGAAQAGAAAFAEQADADAAAGIAAACQAIgHAJgEQAIgDAKAAQALAAAIADQAGAEAFAHQAIgHAIgEQAIgDAKAAQAMAAAIAEQAJADAEAIQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgGAAgFgEg");
	this.shape_1520.setTransform(-55.7,113.6);

	this.shape_1521 = new cjs.Shape();
	this.shape_1521.graphics.f("#FF0000").s().p("AAgAvQgEgDgFgIQgKAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgEIARgDQgBgKgEgFQgEgFgMAAQgKAAgGADQgFADgEAFIgGAHQgCACgFAAQgFAAgDgDQgEgCAAgFQAAgGAGgHQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHADAIIADAKQAAADgEADQgFAEgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAFAEAFQAFADAJAAQAHAAAHgDQAIgDADgFQADgGABgNIAAgEIgSAFg");
	this.shape_1521.setTransform(-71.5,113.6);

	this.shape_1522 = new cjs.Shape();
	this.shape_1522.graphics.f("#FF0000").s().p("AgaBBQgKgFgGgJIgGgLQgCgIAAgFQAAgHAEgEQAFgDAFAAQAHAAADADQADAEACAGIADAMQACADAEAEQAFADAHAAQAUgBAAgaIAAhJQAAgIAEgFQAEgDAHAAQAIAAAEADQAEAFAAAIIAABGIgBAPQgBAGgDAHQgFALgMAGQgMAHgRgBQgPABgLgFg");
	this.shape_1522.setTransform(-84.7,111.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_286},{t:this.shape_285},{t:this.shape_284,p:{x:-29.8,y:116.2}},{t:this.shape_283},{t:this.shape_282,p:{x:1.2,y:118}},{t:this.shape_281,p:{x:13.4}},{t:this.shape_280,p:{x:25.6,y:118}},{t:this.shape_279},{t:this.shape_278,p:{x:-292.4}},{t:this.shape_277},{t:this.shape_276,p:{x:-264.1,y:141.4}},{t:this.shape_275},{t:this.shape_274,p:{x:-243.5,y:141.4}},{t:this.shape_273,p:{x:-225.6,y:141.5}},{t:this.shape_272,p:{x:-214.3,y:141.5}},{t:this.shape_271,p:{x:-205.7,y:139.9}},{t:this.shape_270,p:{x:-198.5,y:141.4}},{t:this.shape_269,p:{x:-189.8,y:141.5}},{t:this.shape_268},{t:this.shape_267,p:{x:-176.7,y:139.7}},{t:this.shape_266},{t:this.shape_265,p:{x:-150.8}},{t:this.shape_264,p:{x:-138.5,y:141.5}},{t:this.shape_263,p:{x:-130.1,y:139.7}},{t:this.shape_262,p:{x:-117.3,y:141.4}},{t:this.shape_261,p:{x:-108.6,y:141.5}},{t:this.shape_260,p:{x:-96.9}},{t:this.shape_259},{t:this.shape_258,p:{x:-69.6}},{t:this.shape_257,p:{x:-57.3,y:141.5}},{t:this.shape_256,p:{x:-43.1,y:139.7}},{t:this.shape_255,p:{x:-34.7,y:141.5}},{t:this.shape_254,p:{x:-23.4,y:141.5}},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251,p:{x:17.2,y:141.5}},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247,p:{x:74.4,y:141.5}},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244,p:{x:115.7,y:141.5}},{t:this.shape_243,p:{x:129.9,y:139.7}},{t:this.shape_242,p:{x:134.7,y:139.7}},{t:this.shape_241,p:{x:143.1,y:141.5}},{t:this.shape_240},{t:this.shape_239,p:{x:165.8,y:141.5}},{t:this.shape_238,p:{x:183.7,y:141.5}},{t:this.shape_237,p:{x:192,y:139.7}},{t:this.shape_236,p:{x:206.4,y:141.5}},{t:this.shape_235,p:{x:217.7,y:141.5}},{t:this.shape_234,p:{x:226.2,y:139.9}},{t:this.shape_233},{t:this.shape_232,p:{x:236.2,y:139.7}},{t:this.shape_231,p:{x:244.6,y:141.5}},{t:this.shape_230,p:{x:262.1}},{t:this.shape_229,p:{x:274.4,y:141.5}},{t:this.shape_228},{t:this.shape_227,p:{x:-297.2,y:163.2}},{t:this.shape_226},{t:this.shape_225,p:{x:-276.9,y:165}},{t:this.shape_224,p:{x:-259.4,y:163.3}},{t:this.shape_223,p:{x:-247.1,y:165}},{t:this.shape_222,p:{x:-238.7,y:163.2}},{t:this.shape_221,p:{x:-225.9,y:164.9}},{t:this.shape_220,p:{x:-217.2,y:165}},{t:this.shape_219},{t:this.shape_218,p:{x:-194.4,y:163.2}},{t:this.shape_217,p:{x:-178.2,y:163.3}},{t:this.shape_216},{t:this.shape_215,p:{x:-155.5,y:164.9}},{t:this.shape_214,p:{x:-146.8,y:165}},{t:this.shape_213,p:{x:-128.9,y:165}},{t:this.shape_212,p:{x:-117.7,y:165}},{t:this.shape_211},{t:this.shape_210,p:{x:-97,y:164.9}},{t:this.shape_209,p:{x:-91.9,y:163.2}},{t:this.shape_208,p:{x:-83.3,y:163.3}},{t:this.shape_207,p:{x:-75.2,y:163.2}},{t:this.shape_206,p:{x:-66.9,y:165}},{t:this.shape_205,p:{x:-54.9,y:164.9}},{t:this.shape_204,p:{x:-43.3,y:163.3}},{t:this.shape_203,p:{x:-31,y:165}},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200,p:{x:9.6,y:164.9}},{t:this.shape_199},{t:this.shape_198,p:{x:28.7,y:163.2}},{t:this.shape_197,p:{x:37,y:165}},{t:this.shape_196,p:{x:49,y:164.9}},{t:this.shape_195,p:{x:60.9,y:165}},{t:this.shape_194,p:{x:72.2,y:165}},{t:this.shape_193},{t:this.shape_192,p:{x:100,y:164.9}},{t:this.shape_191,p:{x:108.6,y:165}},{t:this.shape_190,p:{x:118.1,y:163.1}},{t:this.shape_189,p:{x:126.5,y:165.2}},{t:this.shape_188,p:{x:138.5,y:164.9}},{t:this.shape_187,p:{x:150.1,y:163.3}},{t:this.shape_186,p:{x:162.4,y:165}},{t:this.shape_185,p:{x:173.7,y:165}},{t:this.shape_184,p:{x:190.5,y:167}},{t:this.shape_183,p:{x:208,y:166.8}},{t:this.shape_182,p:{x:219.6,y:165}},{t:this.shape_181},{t:this.shape_180,p:{x:240.7,y:163.4}},{t:this.shape_179,p:{x:245.9,y:163.2}},{t:this.shape_178},{t:this.shape_177,p:{x:265,y:165}},{t:this.shape_176,p:{x:276.3,y:165}},{t:this.shape_175},{t:this.shape_174,p:{x:-263.7,y:188.5}},{t:this.shape_173,p:{x:-246.5,y:188.5}},{t:this.shape_172,p:{x:-235.2,y:188.7}},{t:this.shape_171},{t:this.shape_170,p:{x:-208.8,y:186.7}},{t:this.shape_169,p:{x:-202.9}},{t:this.shape_168,p:{x:-196.6,y:186.7}},{t:this.shape_167,p:{x:-188.8,y:188.5}},{t:this.shape_166,p:{x:-181.4,y:186.7}},{t:this.shape_165,p:{x:-176.7,y:186.7}},{t:this.shape_164,p:{x:-165.9,y:186.7}},{t:this.shape_163,p:{x:-157.6,y:188.4}},{t:this.shape_162,p:{x:-148.1,y:186.6}},{t:this.shape_161,p:{x:-139.7,y:188.5}},{t:this.shape_160,p:{x:-127.7,y:188.4}},{t:this.shape_159,p:{x:-116,y:188.5}},{t:this.shape_158,p:{x:-108.6,y:186.7}},{t:this.shape_157,p:{x:-100.3,y:188.5}},{t:this.shape_156,p:{x:-82.8,y:190.5}},{t:this.shape_155,p:{x:-65.7,y:188.5}},{t:this.shape_154,p:{x:-54.1,y:186.8}},{t:this.shape_153,p:{x:-41.8,y:188.5}},{t:this.shape_152,p:{x:-33.5,y:186.7}},{t:this.shape_151,p:{x:-25.1,y:188.5}},{t:this.shape_150,p:{x:-13.8,y:188.5}},{t:this.shape_149,p:{x:-2.6,y:188.5}},{t:this.shape_148,p:{x:8.3,y:188.5}},{t:this.shape_147,p:{x:20.3,y:188.4}},{t:this.shape_146,p:{x:32,y:188.5}},{t:this.shape_145,p:{x:39.4,y:186.7}},{t:this.shape_144,p:{x:47.8,y:188.5}},{t:this.shape_143,p:{x:65.6,y:188.5}},{t:this.shape_142,p:{x:77.6,y:188.4}},{t:this.shape_141,p:{x:95.5,y:188.5}},{t:this.shape_140,p:{x:103.8,y:186.7}},{t:this.shape_139,p:{x:117.5,y:188.5}},{t:this.shape_138,p:{x:128.8,y:188.7}},{t:this.shape_137,p:{x:139.3,y:188.4}},{t:this.shape_136,p:{x:153.6,y:186.8}},{t:this.shape_135,p:{x:165.9,y:188.5}},{t:this.shape_134,p:{x:183.8,y:188.5}},{t:this.shape_133,p:{x:195.1,y:188.5}},{t:this.shape_132,p:{x:203.6,y:186.9}},{t:this.shape_131},{t:this.shape_130,p:{x:224,y:186.8}},{t:this.shape_129,p:{x:236.3,y:188.5}},{t:this.shape_128,p:{x:247.6,y:188.5}},{t:this.shape_127,p:{x:-281.1,y:212.2}},{t:this.shape_126,p:{x:-269.1,y:211.9}},{t:this.shape_125,p:{x:-260.7,y:210.2}},{t:this.shape_124,p:{x:-252.7,y:210.3}},{t:this.shape_123,p:{x:-240.4,y:212}},{t:this.shape_122,p:{x:-229.1,y:212}},{t:this.shape_121},{t:this.shape_120,p:{x:-207,y:210.3}},{t:this.shape_119,p:{x:-195.2,y:212.2}},{t:this.shape_118,p:{x:-183.2,y:211.9}},{t:this.shape_117,p:{x:-174,y:210.4}},{t:this.shape_116,p:{x:-165.3,y:212}},{t:this.shape_115,p:{x:-147.6,y:212}},{t:this.shape_114,p:{x:-136.7,y:212}},{t:this.shape_113,p:{x:-124.7,y:211.9}},{t:this.shape_112},{t:this.shape_111,p:{x:-96.1,y:210.2}},{t:this.shape_110,p:{x:-87.7,y:212}},{t:this.shape_109,p:{x:-76.4,y:212}},{t:this.shape_108},{t:this.shape_107,p:{x:-47.2,y:212.2}},{t:this.shape_106,p:{x:-35.2,y:211.9}},{t:this.shape_105,p:{x:-23.3,y:212}},{t:this.shape_104,p:{x:-5.7,y:210.3}},{t:this.shape_103,p:{x:6.6,y:212}},{t:this.shape_102,p:{x:20.8,y:210.2}},{t:this.shape_101},{t:this.shape_100,p:{x:40.5,y:212}},{t:this.shape_99,p:{x:58.1,y:210.3}},{t:this.shape_98,p:{x:69.8,y:212}},{t:this.shape_97,p:{x:81.7,y:211.9}},{t:this.shape_96,p:{x:93.3,y:210.3}},{t:this.shape_95},{t:this.shape_94,p:{x:116.9,y:212}},{t:this.shape_93},{t:this.shape_92,p:{x:152.1,y:212}},{t:this.shape_91,p:{x:163.4,y:212}},{t:this.shape_90,p:{x:177.2,y:210.2}},{t:this.shape_89,p:{x:185.3,y:212}},{t:this.shape_88,p:{x:196.3,y:212}},{t:this.shape_87,p:{x:208.2,y:211.9}},{t:this.shape_86,p:{x:216.6,y:210.2}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83,p:{x:247,y:212}},{t:this.shape_82,p:{x:255.5,y:216}}]},1).to({state:[{t:this.shape_284,p:{x:-81.2,y:112.7}},{t:this.shape_362,p:{x:-72.3}},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358,p:{x:-13.1}},{t:this.shape_280,p:{x:-0.4,y:114.5}},{t:this.shape_357,p:{x:10.6}},{t:this.shape_356},{t:this.shape_355,p:{x:32.5}},{t:this.shape_354,p:{x:45.5,y:114.4}},{t:this.shape_353},{t:this.shape_256,p:{x:-298.9,y:136.2}},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_132,p:{x:-252.8,y:136.4}},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347,p:{x:-222.9,y:136.4}},{t:this.shape_244,p:{x:-214.2,y:138}},{t:this.shape_346,p:{x:-205.2,y:143.3}},{t:this.shape_345},{t:this.shape_209,p:{x:-176,y:136.2}},{t:this.shape_263,p:{x:-171.3,y:136.2}},{t:this.shape_344},{t:this.shape_343,p:{x:-158.1}},{t:this.shape_274,p:{x:-146.2,y:137.9}},{t:this.shape_342},{t:this.shape_341,p:{x:-123.8,y:137.9}},{t:this.shape_207,p:{x:-118.7,y:136.2}},{t:this.shape_340,p:{x:-110.3}},{t:this.shape_184,p:{x:-92.9,y:140}},{t:this.shape_242,p:{x:-79.4,y:136.2}},{t:this.shape_339,p:{x:-71}},{t:this.shape_338,p:{x:-60.5,y:137.9}},{t:this.shape_187,p:{x:-52.2,y:136.3}},{t:this.shape_198,p:{x:-37.5,y:136.2}},{t:this.shape_205,p:{x:-29.2,y:137.9}},{t:this.shape_337},{t:this.shape_243,p:{x:-8.9,y:136.2}},{t:this.shape_241,p:{x:-0.5,y:138}},{t:this.shape_251,p:{x:10.8,y:138}},{t:this.shape_336,p:{x:31.2,y:137.9}},{t:this.shape_238,p:{x:46,y:138}},{t:this.shape_247,p:{x:57.3,y:138}},{t:this.shape_335},{t:this.shape_237,p:{x:75.8,y:136.2}},{t:this.shape_334,p:{x:84.2,y:138}},{t:this.shape_236,p:{x:102.1,y:138}},{t:this.shape_232,p:{x:110.4,y:136.2}},{t:this.shape_276,p:{x:123.3,y:137.9}},{t:this.shape_333,p:{x:131.9,y:138}},{t:this.shape_159,p:{x:143.7,y:138}},{t:this.shape_218,p:{x:154.8,y:136.2}},{t:this.shape_146,p:{x:171.1,y:138}},{t:this.shape_332,p:{x:182,y:138}},{t:this.shape_200,p:{x:194,y:137.9}},{t:this.shape_331,p:{x:220.8,y:137.9}},{t:this.shape_330},{t:this.shape_235,p:{x:247,y:138}},{t:this.shape_179,p:{x:254.8,y:136.2}},{t:this.shape_149,p:{x:262.9,y:138}},{t:this.shape_329,p:{x:273.9}},{t:this.shape_328},{t:this.shape_229,p:{x:-298.9,y:161.5}},{t:this.shape_165,p:{x:-290.5,y:159.7}},{t:this.shape_327},{t:this.shape_166,p:{x:-279.8,y:159.7}},{t:this.shape_167,p:{x:-271.6,y:161.5}},{t:this.shape_326},{t:this.shape_115,p:{x:-243,y:161.5}},{t:this.shape_270,p:{x:-233.6,y:161.4}},{t:this.shape_223,p:{x:-224.9,y:161.5}},{t:this.shape_261,p:{x:-213,y:161.5}},{t:this.shape_325},{t:this.shape_324},{t:this.shape_262,p:{x:-168,y:161.4}},{t:this.shape_155,p:{x:-159.3,y:161.5}},{t:this.shape_196,p:{x:-147.4,y:161.4}},{t:this.shape_154,p:{x:-135.8,y:159.8}},{t:this.shape_164,p:{x:-127,y:159.7}},{t:this.shape_255,p:{x:-118.7,y:161.5}},{t:this.shape_212,p:{x:-107.4,y:161.5}},{t:this.shape_161,p:{x:-96,y:161.5}},{t:this.shape_194,p:{x:-84.7,y:161.5}},{t:this.shape_323},{t:this.shape_213,p:{x:-49.5,y:161.5}},{t:this.shape_222,p:{x:-41.2,y:159.7}},{t:this.shape_239,p:{x:-32.8,y:161.5}},{t:this.shape_136,p:{x:-21.2,y:159.8}},{t:this.shape_168,p:{x:-10.9,y:159.7}},{t:this.shape_322,p:{x:-2.9,y:161.5}},{t:this.shape_185,p:{x:8.4,y:161.5}},{t:this.shape_321,p:{x:25.5,y:161.5}},{t:this.shape_231,p:{x:36.4,y:161.5}},{t:this.shape_188,p:{x:48.4,y:161.4}},{t:this.shape_206,p:{x:66.3,y:161.5}},{t:this.shape_176,p:{x:77.6,y:161.5}},{t:this.shape_320},{t:this.shape_220,p:{x:94.9,y:161.5}},{t:this.shape_173,p:{x:106.2,y:161.5}},{t:this.shape_130,p:{x:123.1,y:159.8}},{t:this.shape_214,p:{x:135.4,y:161.5}},{t:this.shape_150,p:{x:146.7,y:161.5}},{t:this.shape_221,p:{x:162.6,y:161.4}},{t:this.shape_158,p:{x:167.7,y:159.7}},{t:this.shape_271,p:{x:173.2,y:159.9}},{t:this.shape_319,p:{x:185}},{t:this.shape_203,p:{x:199.8,y:161.5}},{t:this.shape_139,p:{x:211.1,y:161.5}},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316,p:{x:246.3,y:161.5}},{t:this.shape_315},{t:this.shape_177,p:{x:-298.9,y:185}},{t:this.shape_163,p:{x:-286.9,y:184.9}},{t:this.shape_314},{t:this.shape_145,p:{x:-267.8,y:183.2}},{t:this.shape_313,p:{x:-259.5}},{t:this.shape_160,p:{x:-247.5,y:184.9}},{t:this.shape_225,p:{x:-229.6,y:185}},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310,p:{x:-193.8,y:185}},{t:this.shape_152,p:{x:-185.5,y:183.2}},{t:this.shape_127,p:{x:-177.1,y:185.2}},{t:this.shape_147,p:{x:-165.1,y:184.9}},{t:this.shape_309},{t:this.shape_195,p:{x:-135.3,y:185}},{t:this.shape_133,p:{x:-124,y:185}},{t:this.shape_119,p:{x:-106.7,y:185.2}},{t:this.shape_142,p:{x:-94.7,y:184.9}},{t:this.shape_308},{t:this.shape_215,p:{x:-72.4,y:184.9}},{t:this.shape_307,p:{x:-63.7,y:185}},{t:this.shape_156,p:{x:-52.2,y:187}},{t:this.shape_174,p:{x:-41.1,y:185}},{t:this.shape_89,p:{x:-29.3,y:185}},{t:this.shape_306,p:{x:-21.2,y:183.4}},{t:this.shape_197,p:{x:-12.4,y:185}},{t:this.shape_305,p:{x:8.5,y:184.9}},{t:this.shape_304},{t:this.shape_128,p:{x:34.6,y:185}},{t:this.shape_125,p:{x:42.5,y:183.2}},{t:this.shape_303},{t:this.shape_302},{t:this.shape_140,p:{x:69.9,y:183.2}},{t:this.shape_151,p:{x:84.2,y:185}},{t:this.shape_126,p:{x:96.2,y:184.9}},{t:this.shape_301,p:{x:105.3,y:183.4}},{t:this.shape_210,p:{x:112.5,y:184.9}},{t:this.shape_148,p:{x:121.2,y:185}},{t:this.shape_107,p:{x:139,y:185.2}},{t:this.shape_118,p:{x:151,y:184.9}},{t:this.shape_300,p:{x:166.1,y:183.4}},{t:this.shape_191,p:{x:174.9,y:185}},{t:this.shape_99,p:{x:187.1,y:183.3}},{t:this.shape_182,p:{x:198.7,y:185}},{t:this.shape_299},{t:this.shape_298},{t:this.shape_113,p:{x:234.6,y:184.9}},{t:this.shape_297},{t:this.shape_153,p:{x:-309.6,y:208.5}},{t:this.shape_117,p:{x:-300.5,y:206.9}},{t:this.shape_192,p:{x:-293.2,y:208.4}},{t:this.shape_129,p:{x:-284.6,y:208.5}},{t:this.shape_143,p:{x:-266.7,y:208.5}},{t:this.shape_106,p:{x:-254.8,y:208.4}},{t:this.shape_296,p:{x:-245.6,y:206.9}},{t:this.shape_137,p:{x:-238.4,y:208.4}},{t:this.shape_141,p:{x:-229.7,y:208.5}},{t:this.shape_102,p:{x:-215.4,y:206.7}},{t:this.shape_123,p:{x:-207,y:208.5}},{t:this.shape_122,p:{x:-195.7,y:208.5}},{t:this.shape_295,p:{x:-178.8}},{t:this.shape_116,p:{x:-166.5,y:208.5}},{t:this.shape_109,p:{x:-155.2,y:208.5}},{t:this.shape_135,p:{x:-137.9,y:208.5}},{t:this.shape_100,p:{x:-126.6,y:208.5}},{t:this.shape_180,p:{x:-118,y:206.9}},{t:this.shape_90,p:{x:-112.8,y:206.7}},{t:this.shape_294,p:{x:-108,y:206.7}},{t:this.shape_114,p:{x:-99.7,y:208.5}},{t:this.shape_94,p:{x:-88.4,y:208.5}},{t:this.shape_293},{t:this.shape_292,p:{x:-54.4}},{t:this.shape_97,p:{x:-42.4,y:208.4}},{t:this.shape_105,p:{x:-30.5,y:208.5}},{t:this.shape_291},{t:this.shape_290,p:{x:-6.7}},{t:this.shape_91,p:{x:4.7,y:208.5}},{t:this.shape_86,p:{x:12.5,y:206.7}},{t:this.shape_289},{t:this.shape_87,p:{x:32.8,y:208.4}},{t:this.shape_288,p:{x:50.3}},{t:this.shape_134,p:{x:62.6,y:208.5}},{t:this.shape_103,p:{x:80.5,y:208.5}},{t:this.shape_111,p:{x:88.8,y:206.7}},{t:this.shape_287,p:{x:93.6,y:206.7}},{t:this.shape_88,p:{x:102,y:208.5}},{t:this.shape_83,p:{x:113.3,y:208.5}},{t:this.shape_82,p:{x:121.8,y:212.5}}]},1).to({state:[{t:this.shape_434},{t:this.shape_362,p:{x:-66.9}},{t:this.shape_433},{t:this.shape_432},{t:this.shape_358,p:{x:-36.7}},{t:this.shape_431},{t:this.shape_430},{t:this.shape_284,p:{x:1.6,y:112.7}},{t:this.shape_429},{t:this.shape_355,p:{x:30.2}},{t:this.shape_428},{t:this.shape_357,p:{x:54.8}},{t:this.shape_427},{t:this.shape_426},{t:this.shape_243,p:{x:-274.2,y:136.2}},{t:this.shape_255,p:{x:-265.8,y:138}},{t:this.shape_425},{t:this.shape_331,p:{x:-234.1,y:137.9}},{t:this.shape_424},{t:this.shape_423},{t:this.shape_239,p:{x:-202.5,y:138}},{t:this.shape_338,p:{x:-192.1,y:137.9}},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_189,p:{x:-142.9,y:138.2}},{t:this.shape_227,p:{x:-134.5,y:136.2}},{t:this.shape_419},{t:this.shape_418,p:{x:-120.2,y:138}},{t:this.shape_276,p:{x:-109.7,y:137.9}},{t:this.shape_270,p:{x:-102.6,y:137.9}},{t:this.shape_209,p:{x:-97.5,y:136.2}},{t:this.shape_272,p:{x:-89.8,y:138}},{t:this.shape_417},{t:this.shape_155,p:{x:-72.5,y:138}},{t:this.shape_254,p:{x:-61.2,y:138}},{t:this.shape_204,p:{x:-44.2,y:136.3}},{t:this.shape_416},{t:this.shape_263,p:{x:-17.6,y:136.2}},{t:this.shape_415,p:{x:-9.2}},{t:this.shape_414},{t:this.shape_207,p:{x:17.1,y:136.2}},{t:this.shape_251,p:{x:24.7,y:138}},{t:this.shape_413},{t:this.shape_231,p:{x:42.1,y:138}},{t:this.shape_262,p:{x:52.5,y:137.9}},{t:this.shape_198,p:{x:57.6,y:136.2}},{t:this.shape_329,p:{x:66}},{t:this.shape_412},{t:this.shape_179,p:{x:92.2,y:136.2}},{t:this.shape_160,p:{x:100.6,y:137.9}},{t:this.shape_411,p:{x:112.7,y:136.2}},{t:this.shape_410},{t:this.shape_242,p:{x:138.7,y:136.2}},{t:this.shape_220,p:{x:147.1,y:138}},{t:this.shape_184,p:{x:158.6,y:140}},{t:this.shape_187,p:{x:169.4,y:136.3}},{t:this.shape_147,p:{x:187.7,y:137.9}},{t:this.shape_214,p:{x:199.6,y:138}},{t:this.shape_247,p:{x:216.8,y:138}},{t:this.shape_203,p:{x:228.2,y:138}},{t:this.shape_237,p:{x:236.6,y:136.2}},{t:this.shape_197,p:{x:245,y:138}},{t:this.shape_235,p:{x:262.2,y:138}},{t:this.shape_409},{t:this.shape_136,p:{x:-321.1,y:159.8}},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_142,p:{x:-286.1,y:161.4}},{t:this.shape_405},{t:this.shape_404},{t:this.shape_172,p:{x:-238.4,y:161.7}},{t:this.shape_212,p:{x:-227.1,y:161.5}},{t:this.shape_403},{t:this.shape_402},{t:this.shape_157,p:{x:-200.2,y:161.5}},{t:this.shape_222,p:{x:-191.8,y:159.7}},{t:this.shape_401},{t:this.shape_273,p:{x:-165.5,y:161.5}},{t:this.shape_126,p:{x:-153.6,y:161.4}},{t:this.shape_306,p:{x:-144.5,y:159.9}},{t:this.shape_269,p:{x:-135.7,y:161.5}},{t:this.shape_194,p:{x:-118.5,y:161.5}},{t:this.shape_400,p:{x:-110.6}},{t:this.shape_118,p:{x:-102.3,y:161.4}},{t:this.shape_191,p:{x:-90.4,y:161.5}},{t:this.shape_399},{t:this.shape_398,p:{x:-70.1}},{t:this.shape_232,p:{x:-65.3,y:159.7}},{t:this.shape_182,p:{x:-56.9,y:161.5}},{t:this.shape_185,p:{x:-45.6,y:161.5}},{t:this.shape_397},{t:this.shape_162,p:{x:-24.8,y:159.6}},{t:this.shape_396,p:{x:-19.9}},{t:this.shape_395,p:{x:-11.8}},{t:this.shape_98,p:{x:-0.9,y:161.5}},{t:this.shape_394},{t:this.shape_264,p:{x:29,y:161.5}},{t:this.shape_113,p:{x:40.9,y:161.4}},{t:this.shape_393},{t:this.shape_257,p:{x:58.8,y:161.5}},{t:this.shape_176,p:{x:76,y:161.5}},{t:this.shape_170,p:{x:83.9,y:159.7}},{t:this.shape_244,p:{x:92.2,y:161.5}},{t:this.shape_106,p:{x:104.2,y:161.4}},{t:this.shape_130,p:{x:115.8,y:159.8}},{t:this.shape_153,p:{x:128.1,y:161.5}},{t:this.shape_319,p:{x:149}},{t:this.shape_392},{t:this.shape_173,p:{x:175.1,y:161.5}},{t:this.shape_391},{t:this.shape_138,p:{x:204.3,y:161.7}},{t:this.shape_241,p:{x:216.3,y:161.5}},{t:this.shape_336,p:{x:237.3,y:161.4}},{t:this.shape_390},{t:this.shape_150,p:{x:263.4,y:161.5}},{t:this.shape_166,p:{x:271.2,y:159.7}},{t:this.shape_89,p:{x:279.4,y:161.5}},{t:this.shape_144,p:{x:290.3,y:161.5}},{t:this.shape_389},{t:this.shape_105,p:{x:-308.1,y:185}},{t:this.shape_221,p:{x:-297.7,y:184.9}},{t:this.shape_225,p:{x:-289,y:185}},{t:this.shape_388},{t:this.shape_119,p:{x:-253.3,y:185.2}},{t:this.shape_159,p:{x:-241.5,y:185}},{t:this.shape_387},{t:this.shape_129,p:{x:-218.6,y:185}},{t:this.shape_139,p:{x:-207.3,y:185}},{t:this.shape_386},{t:this.shape_238,p:{x:-178.1,y:185}},{t:this.shape_133,p:{x:-160.8,y:185}},{t:this.shape_107,p:{x:-149.5,y:185.2}},{t:this.shape_128,p:{x:-138.2,y:185}},{t:this.shape_322,p:{x:-120.8,y:185}},{t:this.shape_124,p:{x:-109.2,y:183.3}},{t:this.shape_236,p:{x:-96.9,y:185}},{t:this.shape_385},{t:this.shape_132,p:{x:-75.8,y:183.4}},{t:this.shape_123,p:{x:-67.1,y:185}},{t:this.shape_122,p:{x:-55.8,y:185}},{t:this.shape_229,p:{x:-38.5,y:185}},{t:this.shape_109,p:{x:-27.2,y:185}},{t:this.shape_305,p:{x:-6.8,y:184.9}},{t:this.shape_384},{t:this.shape_100,p:{x:19.3,y:185}},{t:this.shape_164,p:{x:27.1,y:183.2}},{t:this.shape_167,p:{x:35.3,y:185}},{t:this.shape_383},{t:this.shape_382},{t:this.shape_223,p:{x:82,y:185}},{t:this.shape_104,p:{x:93.6,y:183.3}},{t:this.shape_158,p:{x:102.3,y:183.2}},{t:this.shape_234,p:{x:107.9,y:183.4}},{t:this.shape_381,p:{x:116.6,y:185}},{t:this.shape_117,p:{x:125.8,y:183.4}},{t:this.shape_145,p:{x:130.9,y:183.2}},{t:this.shape_380,p:{x:138.7,y:185.1}},{t:this.shape_379},{t:this.shape_378},{t:this.shape_96,p:{x:184.2,y:183.3}},{t:this.shape_213,p:{x:196.5,y:185}},{t:this.shape_215,p:{x:212.9,y:184.9}},{t:this.shape_206,p:{x:221.6,y:185}},{t:this.shape_190,p:{x:231.1,y:183.1}},{t:this.shape_165,p:{x:235.9,y:183.2}},{t:this.shape_195,p:{x:244.2,y:185}},{t:this.shape_377},{t:this.shape_125,p:{x:263.4,y:183.2}},{t:this.shape_313,p:{x:271.7}},{t:this.shape_97,p:{x:283.7,y:184.9}},{t:this.shape_346,p:{x:292.6,y:190.3}},{t:this.shape_376},{t:this.shape_87,p:{x:-273,y:208.4}},{t:this.shape_177,p:{x:-261.1,y:208.5}},{t:this.shape_375},{t:this.shape_174,p:{x:-231.2,y:208.5}},{t:this.shape_294,p:{x:-216.9,y:206.7}},{t:this.shape_116,p:{x:-208.5,y:208.5}},{t:this.shape_94,p:{x:-197.2,y:208.5}},{t:this.shape_374,p:{x:-176.9}},{t:this.shape_151,p:{x:-162,y:208.5}},{t:this.shape_373},{t:this.shape_114,p:{x:-145.3,y:208.5}},{t:this.shape_210,p:{x:-134.9,y:208.4}},{t:this.shape_148,p:{x:-126.2,y:208.5}},{t:this.shape_91,p:{x:-114.9,y:208.5}},{t:this.shape_372},{t:this.shape_140,p:{x:-89.2,y:206.7}},{t:this.shape_371},{t:this.shape_292,p:{x:-68.9}},{t:this.shape_370},{t:this.shape_369},{t:this.shape_143,p:{x:-21.2,y:208.5}},{t:this.shape_102,p:{x:-6.9,y:206.7}},{t:this.shape_368},{t:this.shape_367},{t:this.shape_90,p:{x:27.8,y:206.7}},{t:this.shape_83,p:{x:35.5,y:208.5}},{t:this.shape_366},{t:this.shape_88,p:{x:52.8,y:208.5}},{t:this.shape_192,p:{x:63.2,y:208.4}},{t:this.shape_86,p:{x:68.4,y:206.7}},{t:this.shape_316,p:{x:76.7,y:208.5}},{t:this.shape_365,p:{x:92.1,y:206.6}},{t:this.shape_290,p:{x:100.5}},{t:this.shape_141,p:{x:112.5,y:208.5}},{t:this.shape_135,p:{x:130.4,y:208.5}},{t:this.shape_152,p:{x:138.7,y:206.7}},{t:this.shape_295,p:{x:152.7}},{t:this.shape_134,p:{x:165,y:208.5}},{t:this.shape_111,p:{x:179.3,y:206.7}},{t:this.shape_92,p:{x:187.7,y:208.5}},{t:this.shape_364},{t:this.shape_363,p:{x:217.5,y:208.5}},{t:this.shape_137,p:{x:227.9,y:208.4}},{t:this.shape_103,p:{x:236.6,y:208.5}},{t:this.shape_288,p:{x:248.2}},{t:this.shape_82,p:{x:257.6,y:212.5}}]},1).to({state:[{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_281,p:{x:-16.3}},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_354,p:{x:44.1,y:117.9}},{t:this.shape_280,p:{x:56.5,y:118}},{t:this.shape_462},{t:this.shape_461},{t:this.shape_196,p:{x:-253,y:141.4}},{t:this.shape_301,p:{x:-243.9,y:139.9}},{t:this.shape_310,p:{x:-235.2,y:141.5}},{t:this.shape_188,p:{x:-223.2,y:141.4}},{t:this.shape_117,p:{x:-214.1,y:139.9}},{t:this.shape_257,p:{x:-205.3,y:141.5}},{t:this.shape_460},{t:this.shape_459,p:{x:-177,y:141.4}},{t:this.shape_209,p:{x:-171.9,y:139.7}},{t:this.shape_163,p:{x:-163.5,y:141.4}},{t:this.shape_260,p:{x:-151.8}},{t:this.shape_207,p:{x:-144.4,y:139.7}},{t:this.shape_458},{t:this.shape_278,p:{x:-124.1}},{t:this.shape_222,p:{x:-115.8,y:139.7}},{t:this.shape_184,p:{x:-101.9,y:143.5}},{t:this.shape_267,p:{x:-88.4,y:139.7}},{t:this.shape_244,p:{x:-80,y:141.5}},{t:this.shape_457},{t:this.shape_241,p:{x:-56.1,y:141.5}},{t:this.shape_160,p:{x:-44.1,y:141.4}},{t:this.shape_265,p:{x:-32.5}},{t:this.shape_110,p:{x:-20.2,y:141.5}},{t:this.shape_341,p:{x:-9.8,y:141.4}},{t:this.shape_198,p:{x:-4.7,y:139.7}},{t:this.shape_261,p:{x:3.7,y:141.5}},{t:this.shape_258,p:{x:21.2}},{t:this.shape_238,p:{x:33.5,y:141.5}},{t:this.shape_263,p:{x:47.8,y:139.7}},{t:this.shape_456},{t:this.shape_455},{t:this.shape_381,p:{x:86,y:141.5}},{t:this.shape_147,p:{x:97.9,y:141.4}},{t:this.shape_230,p:{x:109.5}},{t:this.shape_225,p:{x:121.8,y:141.5}},{t:this.shape_454},{t:this.shape_287,p:{x:148.1,y:139.7}},{t:this.shape_453},{t:this.shape_89,p:{x:168.2,y:141.5}},{t:this.shape_411,p:{x:179.3,y:139.7}},{t:this.shape_173,p:{x:195.2,y:141.5}},{t:this.shape_452},{t:this.shape_451},{t:this.shape_92,p:{x:230.4,y:141.5}},{t:this.shape_300,p:{x:239.6,y:139.9}},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448,p:{x:-262,y:165.2}},{t:this.shape_236,p:{x:-250,y:165}},{t:this.shape_338,p:{x:-239.6,y:164.9}},{t:this.shape_255,p:{x:-230.9,y:165}},{t:this.shape_142,p:{x:-219,y:164.9}},{t:this.shape_242,p:{x:-204.7,y:163.2}},{t:this.shape_239,p:{x:-196.3,y:165}},{t:this.shape_150,p:{x:-185,y:165}},{t:this.shape_447,p:{x:-167.9,y:165}},{t:this.shape_276,p:{x:-158.5,y:164.9}},{t:this.shape_229,p:{x:-149.8,y:165}},{t:this.shape_446},{t:this.shape_224,p:{x:-126.3,y:163.3}},{t:this.shape_231,p:{x:-114,y:165}},{t:this.shape_270,p:{x:-103.5,y:164.9}},{t:this.shape_223,p:{x:-94.9,y:165}},{t:this.shape_139,p:{x:-83.6,y:165}},{t:this.shape_217,p:{x:-66.6,y:163.3}},{t:this.shape_213,p:{x:-54.3,y:165}},{t:this.shape_294,p:{x:-45.9,y:163.2}},{t:this.shape_133,p:{x:-32.3,y:165}},{t:this.shape_220,p:{x:-20.9,y:165}},{t:this.shape_126,p:{x:-8.9,y:164.9}},{t:this.shape_179,p:{x:-0.5,y:163.2}},{t:this.shape_204,p:{x:7.5,y:163.3}},{t:this.shape_214,p:{x:19.8,y:165}},{t:this.shape_203,p:{x:37.6,y:165}},{t:this.shape_208,p:{x:49.9,y:163.3}},{t:this.shape_128,p:{x:60.9,y:165}},{t:this.shape_146,p:{x:72.1,y:165}},{t:this.shape_189,p:{x:82.9,y:165.2}},{t:this.shape_262,p:{x:93.4,y:164.9}},{t:this.shape_197,p:{x:102.1,y:165}},{t:this.shape_187,p:{x:119.6,y:163.3}},{t:this.shape_206,p:{x:131.9,y:165}},{t:this.shape_140,p:{x:140.3,y:163.2}},{t:this.shape_445},{t:this.shape_195,p:{x:172.5,y:165}},{t:this.shape_444},{t:this.shape_443},{t:this.shape_232,p:{x:198.7,y:163.2}},{t:this.shape_442},{t:this.shape_191,p:{x:223.8,y:165}},{t:this.shape_118,p:{x:235.7,y:164.9}},{t:this.shape_157,p:{x:-303.7,y:188.5}},{t:this.shape_138,p:{x:-291.8,y:188.7}},{t:this.shape_221,p:{x:-281.3,y:188.4}},{t:this.shape_174,p:{x:-272.6,y:188.5}},{t:this.shape_182,p:{x:-260.7,y:188.5}},{t:this.shape_102,p:{x:-252.3,y:186.7}},{t:this.shape_155,p:{x:-243.9,y:188.5}},{t:this.shape_122,p:{x:-232.7,y:188.5}},{t:this.shape_130,p:{x:-215.7,y:186.8}},{t:this.shape_151,p:{x:-203.4,y:188.5}},{t:this.shape_109,p:{x:-186.2,y:188.5}},{t:this.shape_441},{t:this.shape_306,p:{x:-165.6,y:186.9}},{t:this.shape_307,p:{x:-156.9,y:188.5}},{t:this.shape_113,p:{x:-144.9,y:188.4}},{t:this.shape_86,p:{x:-136.5,y:186.7}},{t:this.shape_100,p:{x:-128.8,y:188.5}},{t:this.shape_331,p:{x:-114.4,y:188.4}},{t:this.shape_153,p:{x:-99.6,y:188.5}},{t:this.shape_169,p:{x:-84.1}},{t:this.shape_161,p:{x:-75.8,y:188.5}},{t:this.shape_165,p:{x:-67.4,y:186.7}},{t:this.shape_94,p:{x:-59.7,y:188.5}},{t:this.shape_129,p:{x:-48.3,y:188.5}},{t:this.shape_440,p:{x:-30.6,y:188.5}},{t:this.shape_439},{t:this.shape_438,p:{x:-7.8,y:188.7}},{t:this.shape_91,p:{x:3.6,y:188.5}},{t:this.shape_363,p:{x:15,y:188.5}},{t:this.shape_215,p:{x:25.4,y:188.4}},{t:this.shape_123,p:{x:34.1,y:188.5}},{t:this.shape_106,p:{x:46,y:188.4}},{t:this.shape_234,p:{x:61.1,y:186.9}},{t:this.shape_148,p:{x:69.8,y:188.5}},{t:this.shape_210,p:{x:80.3,y:188.4}},{t:this.shape_192,p:{x:87.4,y:188.4}},{t:this.shape_143,p:{x:96.1,y:188.5}},{t:this.shape_437},{t:this.shape_116,p:{x:125.9,y:188.5}},{t:this.shape_296,p:{x:135.1,y:186.9}},{t:this.shape_114,p:{x:143.8,y:188.5}},{t:this.shape_141,p:{x:161.7,y:188.5}},{t:this.shape_97,p:{x:173.6,y:188.4}},{t:this.shape_152,p:{x:187.9,y:186.7}},{t:this.shape_105,p:{x:196.3,y:188.5}},{t:this.shape_135,p:{x:214.2,y:188.5}},{t:this.shape_83,p:{x:225.5,y:188.5}},{t:this.shape_115,p:{x:236.7,y:188.5}},{t:this.shape_134,p:{x:247.6,y:188.5}},{t:this.shape_87,p:{x:259.6,y:188.4}},{t:this.shape_436},{t:this.shape_96,p:{x:-51.1,y:210.3}},{t:this.shape_103,p:{x:-38.8,y:212}},{t:this.shape_111,p:{x:-30.4,y:210.2}},{t:this.shape_137,p:{x:-17.6,y:211.9}},{t:this.shape_88,p:{x:-8.9,y:212}},{t:this.shape_149,p:{x:2.8,y:212}},{t:this.shape_435,p:{x:13.9,y:210.2}},{t:this.shape_82,p:{x:21.6,y:216}}]},1).to({state:[{t:this.shape_522},{t:this.shape_282,p:{x:-55.9,y:114.5}},{t:this.shape_521},{t:this.shape_280,p:{x:-30.4,y:114.5}},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_284,p:{x:14.3,y:112.7}},{t:this.shape_362,p:{x:23.2}},{t:this.shape_354,p:{x:35.7,y:114.4}},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_200,p:{x:-233.4,y:137.9}},{t:this.shape_224,p:{x:-221.8,y:136.3}},{t:this.shape_307,p:{x:-209.5,y:138}},{t:this.shape_512},{t:this.shape_257,p:{x:-186.8,y:138}},{t:this.shape_217,p:{x:-175.2,y:136.3}},{t:this.shape_511},{t:this.shape_244,p:{x:-146.3,y:138}},{t:this.shape_183,p:{x:-134,y:139.8}},{t:this.shape_241,p:{x:-122.4,y:138}},{t:this.shape_267,p:{x:-114,y:136.2}},{t:this.shape_140,p:{x:-109.2,y:136.2}},{t:this.shape_179,p:{x:-104.4,y:136.2}},{t:this.shape_196,p:{x:-96,y:137.9}},{t:this.shape_510},{t:this.shape_186,p:{x:-66.2,y:138}},{t:this.shape_509},{t:this.shape_105,p:{x:-47.1,y:138}},{t:this.shape_305,p:{x:-26.2,y:137.9}},{t:this.shape_448,p:{x:-11.4,y:138.2}},{t:this.shape_447,p:{x:0.4,y:138}},{t:this.shape_508},{t:this.shape_343,p:{x:23.3}},{t:this.shape_194,p:{x:34.6,y:138}},{t:this.shape_263,p:{x:48.3,y:136.2}},{t:this.shape_507},{t:this.shape_506},{t:this.shape_238,p:{x:92.5,y:138}},{t:this.shape_505},{t:this.shape_340,p:{x:109.2}},{t:this.shape_504},{t:this.shape_208,p:{x:134.6,y:136.3}},{t:this.shape_177,p:{x:146.2,y:138}},{t:this.shape_188,p:{x:158.1,y:137.9}},{t:this.shape_204,p:{x:169.7,y:136.3}},{t:this.shape_415,p:{x:182}},{t:this.shape_187,p:{x:199.6,y:136.3}},{t:this.shape_236,p:{x:211.9,y:138}},{t:this.shape_503},{t:this.shape_339,p:{x:236.9}},{t:this.shape_502},{t:this.shape_411,p:{x:259.7,y:136.2}},{t:this.shape_501},{t:this.shape_163,p:{x:-294.2,y:161.4}},{t:this.shape_154,p:{x:-282.6,y:159.8}},{t:this.shape_500},{t:this.shape_334,p:{x:-257.2,y:161.5}},{t:this.shape_294,p:{x:-248.9,y:159.7}},{t:this.shape_242,p:{x:-244.1,y:159.7}},{t:this.shape_136,p:{x:-230.1,y:159.8}},{t:this.shape_229,p:{x:-217.8,y:161.5}},{t:this.shape_400,p:{x:-203.5}},{t:this.shape_160,p:{x:-195.1,y:161.4}},{t:this.shape_190,p:{x:-185.6,y:159.6}},{t:this.shape_232,p:{x:-180.8,y:159.7}},{t:this.shape_438,p:{x:-172.5,y:161.7}},{t:this.shape_223,p:{x:-160.5,y:161.5}},{t:this.shape_147,p:{x:-148.6,y:161.4}},{t:this.shape_115,p:{x:-136.8,y:161.5}},{t:this.shape_398,p:{x:-129.4}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_459,p:{x:-92.7,y:161.4}},{t:this.shape_396,p:{x:-87.6}},{t:this.shape_497},{t:this.shape_496},{t:this.shape_142,p:{x:-61.4,y:161.4}},{t:this.shape_170,p:{x:-53,y:159.7}},{t:this.shape_495},{t:this.shape_161,p:{x:-33.9,y:161.5}},{t:this.shape_395,p:{x:-16.3}},{t:this.shape_341,p:{x:-6.8,y:161.4}},{t:this.shape_213,p:{x:1.8,y:161.5}},{t:this.shape_333,p:{x:13.8,y:161.5}},{t:this.shape_494},{t:this.shape_172,p:{x:36.4,y:161.7}},{t:this.shape_126,p:{x:48.4,y:161.4}},{t:this.shape_271,p:{x:57.5,y:159.9}},{t:this.shape_332,p:{x:66.3,y:161.5}},{t:this.shape_493},{t:this.shape_120,p:{x:101,y:159.8}},{t:this.shape_166,p:{x:109.2,y:159.7}},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_206,p:{x:205.9,y:161.5}},{t:this.shape_138,p:{x:223.7,y:161.7}},{t:this.shape_118,p:{x:235.7,y:161.4}},{t:this.shape_261,p:{x:247.6,y:161.5}},{t:this.shape_130,p:{x:265.2,y:159.8}},{t:this.shape_195,p:{x:277.5,y:161.5}},{t:this.shape_165,p:{x:-298.9,y:183.2}},{t:this.shape_255,p:{x:-290.5,y:185}},{t:this.shape_185,p:{x:-279.2,y:185}},{t:this.shape_176,p:{x:-262.5,y:185}},{t:this.shape_239,p:{x:-251.1,y:185}},{t:this.shape_113,p:{x:-239.2,y:184.9}},{t:this.shape_164,p:{x:-230.8,y:183.2}},{t:this.shape_124,p:{x:-222.8,y:183.3}},{t:this.shape_231,p:{x:-210.5,y:185}},{t:this.shape_173,p:{x:-199.2,y:185}},{t:this.shape_486},{t:this.shape_322,p:{x:-164,y:185}},{t:this.shape_150,p:{x:-152.7,y:185}},{t:this.shape_157,p:{x:-135.4,y:185}},{t:this.shape_338,p:{x:-124.9,y:184.9}},{t:this.shape_296,p:{x:-119.1,y:183.4}},{t:this.shape_485},{t:this.shape_139,p:{x:-105.1,y:185}},{t:this.shape_484},{t:this.shape_158,p:{x:-91.3,y:183.2}},{t:this.shape_159,p:{x:-83.1,y:185}},{t:this.shape_220,p:{x:-72.2,y:185}},{t:this.shape_133,p:{x:-60.9,y:185}},{t:this.shape_483},{t:this.shape_104,p:{x:-27.3,y:183.3}},{t:this.shape_145,p:{x:-18.5,y:183.2}},{t:this.shape_128,p:{x:-10.8,y:185}},{t:this.shape_365,p:{x:-1.9,y:183.1}},{t:this.shape_276,p:{x:5,y:184.9}},{t:this.shape_107,p:{x:13.6,y:185.2}},{t:this.shape_347,p:{x:22.8,y:183.4}},{t:this.shape_482},{t:this.shape_99,p:{x:43.8,y:183.3}},{t:this.shape_152,p:{x:51.8,y:183.2}},{t:this.shape_174,p:{x:60.2,y:185}},{t:this.shape_122,p:{x:71.5,y:185}},{t:this.shape_96,p:{x:88.5,y:183.3}},{t:this.shape_151,p:{x:100.8,y:185}},{t:this.shape_102,p:{x:109.1,y:183.2}},{t:this.shape_270,p:{x:121.9,y:184.9}},{t:this.shape_214,p:{x:130.6,y:185}},{t:this.shape_167,p:{x:142.4,y:185}},{t:this.shape_481},{t:this.shape_346,p:{x:161,y:190.3}},{t:this.shape_109,p:{x:175.2,y:185}},{t:this.shape_132,p:{x:183.8,y:183.4}},{t:this.shape_418,p:{x:192.6,y:185}},{t:this.shape_125,p:{x:201,y:183.2}},{t:this.shape_262,p:{x:207.8,y:184.9}},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_180,p:{x:257.8,y:183.4}},{t:this.shape_203,p:{x:266.5,y:185}},{t:this.shape_477},{t:this.shape_148,p:{x:-270.9,y:208.5}},{t:this.shape_476},{t:this.shape_380,p:{x:-247.5,y:208.6}},{t:this.shape_143,p:{x:-236.3,y:208.5}},{t:this.shape_106,p:{x:-224.3,y:208.4}},{t:this.shape_141,p:{x:-206.4,y:208.5}},{t:this.shape_100,p:{x:-195.1,y:208.5}},{t:this.shape_135,p:{x:-177.8,y:208.5}},{t:this.shape_111,p:{x:-169.5,y:206.7}},{t:this.shape_475},{t:this.shape_90,p:{x:-146.7,y:206.7}},{t:this.shape_117,p:{x:-141.2,y:206.9}},{t:this.shape_221,p:{x:-128,y:208.4}},{t:this.shape_197,p:{x:-119.4,y:208.5}},{t:this.shape_89,p:{x:-107.6,y:208.5}},{t:this.shape_474},{t:this.shape_134,p:{x:-86,y:208.5}},{t:this.shape_215,p:{x:-75.5,y:208.4}},{t:this.shape_191,p:{x:-66.9,y:208.5}},{t:this.shape_374,p:{x:-45.9}},{t:this.shape_155,p:{x:-31.1,y:208.5}},{t:this.shape_94,p:{x:-19.8,y:208.5}},{t:this.shape_440,p:{x:-2.7,y:208.5}},{t:this.shape_182,p:{x:8.3,y:208.5}},{t:this.shape_97,p:{x:20.2,y:208.4}},{t:this.shape_153,p:{x:32.2,y:208.5}},{t:this.shape_321,p:{x:43.9,y:208.5}},{t:this.shape_86,p:{x:51.3,y:206.7}},{t:this.shape_288,p:{x:59.3}},{t:this.shape_129,p:{x:71.6,y:208.5}},{t:this.shape_473},{t:this.shape_123,p:{x:101.4,y:208.5}},{t:this.shape_210,p:{x:111.9,y:208.4}},{t:this.shape_287,p:{x:122.9,y:206.7}},{t:this.shape_116,p:{x:131.2,y:208.5}},{t:this.shape_91,p:{x:142.5,y:208.5}},{t:this.shape_87,p:{x:159.9,y:208.4}},{t:this.shape_114,p:{x:171.8,y:208.5}},{t:this.shape_192,p:{x:188.2,y:208.4}},{t:this.shape_88,p:{x:196.9,y:208.5}},{t:this.shape_472},{t:this.shape_435,p:{x:219.7,y:206.7}},{t:this.shape_103,p:{x:230.3,y:208.5}},{t:this.shape_137,p:{x:240.7,y:208.4}},{t:this.shape_83,p:{x:248.7,y:208.5}},{t:this.shape_82,p:{x:257.2,y:212.5}}]},1).to({state:[{t:this.shape_674},{t:this.shape_673},{t:this.shape_672,p:{x:-23.4,y:115.3}},{t:this.shape_671,p:{x:-14.9,y:113.6}},{t:this.shape_670},{t:this.shape_669,p:{x:15.5,y:115.3}},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666,p:{x:50.9,y:113.5}},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663,p:{x:-277.3,y:137.7}},{t:this.shape_662,p:{x:-262.8,y:139.5}},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655,p:{x:-183.7,y:139.5}},{t:this.shape_654},{t:this.shape_653,p:{x:-148.6,y:139.5}},{t:this.shape_652,p:{x:-135.8,y:139.5}},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642,p:{x:-11.5,y:139.5}},{t:this.shape_641},{t:this.shape_640,p:{x:16.1,y:137.7}},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631,p:{x:130.9,y:139.5}},{t:this.shape_630,p:{x:143.7,y:139.5}},{t:this.shape_629},{t:this.shape_628,p:{x:168.1,y:139.5}},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624,p:{x:212.6,y:137.7}},{t:this.shape_623},{t:this.shape_622,p:{x:235.3,y:137.7}},{t:this.shape_621,p:{x:244.5,y:139.5}},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617,p:{x:-261.8,y:161.9}},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614,p:{x:-235.8,y:163.6}},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611,p:{x:-191.3,y:163.7}},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602,p:{x:-81.8,y:163.7}},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593,p:{x:37,y:163.7}},{t:this.shape_592,p:{x:55,y:163.6}},{t:this.shape_591},{t:this.shape_590,p:{x:76.9,y:161.8}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584,p:{x:148.5,y:163.7}},{t:this.shape_583},{t:this.shape_582,p:{x:164,y:161.9}},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578,p:{x:197.5,y:163.6}},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559,p:{x:-103.3,y:187.8}},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553,p:{x:-27.6,y:187.9}},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547,p:{x:51.3,y:187.9}},{t:this.shape_546,p:{x:60.4,y:187.9}},{t:this.shape_545,p:{x:67.3,y:186.1}},{t:this.shape_544},{t:this.shape_543,p:{x:86.3,y:186}},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539,p:{x:136.2,y:186.1}},{t:this.shape_538,p:{x:145.4,y:187.8}},{t:this.shape_537,p:{x:158.1,y:187.8}},{t:this.shape_536,p:{x:167.3,y:186.1}},{t:this.shape_535},{t:this.shape_534,p:{x:189.7,y:187.9}},{t:this.shape_533},{t:this.shape_532,p:{x:222.4,y:186}},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529,p:{x:-275.2,y:212.1}},{t:this.shape_528,p:{x:-263.6,y:212.1}},{t:this.shape_527},{t:this.shape_526,p:{x:-243.8,y:210.3}},{t:this.shape_525},{t:this.shape_524,p:{x:-222.3,y:212.1}},{t:this.shape_523,p:{x:-212.6,y:215.8}}]},1).to({state:[{t:this.shape_824},{t:this.shape_823,p:{x:-66.6}},{t:this.shape_822},{t:this.shape_821,p:{x:-30.5,y:115.3}},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817,p:{x:12.8}},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812,p:{x:-286.8}},{t:this.shape_811},{t:this.shape_810,p:{x:-269.3,y:139.5}},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807,p:{x:-233.8}},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797,p:{x:-117.9}},{t:this.shape_796},{t:this.shape_795,p:{x:-95.8}},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791,p:{x:-47.4,y:139.5}},{t:this.shape_578,p:{x:-38.2,y:141.2}},{t:this.shape_790},{t:this.shape_789,p:{x:-17.7}},{t:this.shape_788},{t:this.shape_787,p:{x:6.4}},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784,p:{x:45.2}},{t:this.shape_783},{t:this.shape_782,p:{x:67.3,y:139.6}},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_559,p:{x:125.4,y:141.2}},{t:this.shape_778,p:{x:138.2}},{t:this.shape_777,p:{x:150,y:141.3}},{t:this.shape_776,p:{x:158.5,y:139.6}},{t:this.shape_775},{t:this.shape_774,p:{x:185.7,y:141.3}},{t:this.shape_773,p:{x:194.5,y:139.5}},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770,p:{x:235.2}},{t:this.shape_769},{t:this.shape_768,p:{x:264.9}},{t:this.shape_590,p:{x:274.1,y:139.4}},{t:this.shape_767,p:{x:-298.2}},{t:this.shape_766,p:{x:-288.8,y:163.6}},{t:this.shape_765,p:{x:-279.6,y:165.4}},{t:this.shape_764,p:{x:-266.8,y:165.4}},{t:this.shape_763},{t:this.shape_762,p:{x:-235.2,y:165.4}},{t:this.shape_761,p:{x:-220.6,y:163.6}},{t:this.shape_760,p:{x:-211.3}},{t:this.shape_759,p:{x:-199.2}},{t:this.shape_758,p:{x:-185.1,y:163.6}},{t:this.shape_757,p:{x:-175.9,y:165.4}},{t:this.shape_756,p:{x:-164.4,y:167.3}},{t:this.shape_755,p:{x:-152.4,y:165.4}},{t:this.shape_754,p:{x:-139.6,y:165.4}},{t:this.shape_753},{t:this.shape_752,p:{x:-113.3,y:165.4}},{t:this.shape_751},{t:this.shape_750,p:{x:-83.6}},{t:this.shape_749},{t:this.shape_748,p:{x:-57.2,y:165.4}},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745,p:{x:-7.6,y:165.4}},{t:this.shape_744,p:{x:4.1}},{t:this.shape_743,p:{x:13.9,y:165.4}},{t:this.shape_742,p:{x:26.8,y:165.4}},{t:this.shape_741},{t:this.shape_740,p:{x:59.5,y:163.6}},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733,p:{x:143.9}},{t:this.shape_732,p:{x:156.7,y:163.6}},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729,p:{x:200.9}},{t:this.shape_728},{t:this.shape_727,p:{x:223.5,y:163.6}},{t:this.shape_726},{t:this.shape_538,p:{x:249.8,y:165.4}},{t:this.shape_725,p:{x:260.3}},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722,p:{x:-254.3}},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719,p:{x:-210.4}},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712,p:{x:-124.3}},{t:this.shape_711,p:{x:-110.9}},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707,p:{x:-63.6}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704,p:{x:-21.8,y:187.9}},{t:this.shape_703},{t:this.shape_702,p:{x:-2.5}},{t:this.shape_701},{t:this.shape_700,p:{x:19.7}},{t:this.shape_526,p:{x:30.4,y:187.8}},{t:this.shape_699,p:{x:38.9}},{t:this.shape_698,p:{x:57.1,y:189.6}},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694,p:{x:114.6}},{t:this.shape_693,p:{x:129.2,y:187.8}},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689,p:{x:187.4}},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686,p:{x:217.8}},{t:this.shape_685,p:{x:227.6}},{t:this.shape_684},{t:this.shape_537,p:{x:-62.5,y:213.8}},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678,p:{x:6.8}},{t:this.shape_677,p:{x:16.6,y:213.8}},{t:this.shape_676},{t:this.shape_675,p:{x:36.8}}]},1).to({state:[{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_545,p:{x:-19.6,y:110}},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_534,p:{x:79.4,y:111.8}},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_672,p:{x:-265.5,y:136}},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_666,p:{x:-189.1,y:134.2}},{t:this.shape_961},{t:this.shape_960},{t:this.shape_662,p:{x:-148.1,y:136}},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_669,p:{x:-69.6,y:136}},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953,p:{x:-25.5,y:136}},{t:this.shape_952,p:{x:-16.3,y:134.2}},{t:this.shape_951,p:{x:-5.1,y:134.2}},{t:this.shape_582,p:{x:1.4,y:134.2}},{t:this.shape_950},{t:this.shape_949,p:{x:23.3,y:136}},{t:this.shape_528,p:{x:35,y:136}},{t:this.shape_653,p:{x:50.7,y:136}},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944,p:{x:109.4,y:136}},{t:this.shape_943},{t:this.shape_942,p:{x:129.8,y:136}},{t:this.shape_941},{t:this.shape_940,p:{x:161.3,y:136}},{t:this.shape_939,p:{x:175.9,y:134.2}},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.shape_529,p:{x:287.1,y:136}},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_631,p:{x:-175.5,y:160.1}},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_782,p:{x:-105,y:158.5}},{t:this.shape_917},{t:this.shape_776,p:{x:-79.1,y:158.5}},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912,p:{x:-18.4,y:158.4}},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_621,p:{x:147.3,y:160.1}},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_590,p:{x:234.7,y:158.3}},{t:this.shape_774,p:{x:243.4,y:160.2}},{t:this.shape_893},{t:this.shape_892},{t:this.shape_777,p:{x:273,y:160.2}},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889,p:{x:-320.3,y:182.6}},{t:this.shape_888},{t:this.shape_810,p:{x:-297.6,y:182.6}},{t:this.shape_614,p:{x:-288.4,y:184.3}},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_526,p:{x:-169.7,y:182.6}},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_611,p:{x:-94.8,y:184.4}},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_584,p:{x:30.7,y:184.4}},{t:this.shape_867},{t:this.shape_866},{t:this.shape_592,p:{x:70.2,y:184.3}},{t:this.shape_865},{t:this.shape_864},{t:this.shape_791,p:{x:97.9,y:182.6}},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_593,p:{x:165.6,y:184.4}},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_602,p:{x:244.9,y:184.4}},{t:this.shape_773,p:{x:253.7,y:182.6}},{t:this.shape_578,p:{x:262.9,y:184.3}},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_553,p:{x:-260.4,y:208.6}},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_543,p:{x:-170,y:206.7}},{t:this.shape_846},{t:this.shape_845},{t:this.shape_617,p:{x:-131,y:206.8}},{t:this.shape_844},{t:this.shape_843},{t:this.shape_559,p:{x:-92,y:208.5}},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_547,p:{x:9.5,y:208.6}},{t:this.shape_836},{t:this.shape_835},{t:this.shape_538,p:{x:50.3,y:208.5}},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_546,p:{x:107.4,y:208.6}},{t:this.shape_831},{t:this.shape_830},{t:this.shape_539,p:{x:145.5,y:206.8}},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_537,p:{x:209.2,y:208.5}},{t:this.shape_536,p:{x:218.5,y:206.8}},{t:this.shape_825},{t:this.shape_532,p:{x:237,y:206.7}},{t:this.shape_523,p:{x:243.2,y:212.3}}]},1).to({state:[{t:this.shape_821,p:{x:-70.1,y:120.6}},{t:this.shape_1088,p:{x:-58.2,y:120.5}},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_1084,p:{x:-7.1,y:122.3}},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_1080,p:{x:42.9,y:122.3}},{t:this.shape_1079},{t:this.shape_762,p:{x:-291.7,y:146.5}},{t:this.shape_1078},{t:this.shape_757,p:{x:-273.3,y:146.5}},{t:this.shape_1077},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_732,p:{x:-225.8,y:144.7}},{t:this.shape_1074},{t:this.shape_1073},{t:this.shape_526,p:{x:-191,y:144.7}},{t:this.shape_727,p:{x:-182.4,y:144.7}},{t:this.shape_755,p:{x:-169,y:146.5}},{t:this.shape_1072},{t:this.shape_756,p:{x:-142.4,y:148.4}},{t:this.shape_578,p:{x:-124.6,y:146.5}},{t:this.shape_1071,p:{x:-111.9,y:146.5}},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_1068,p:{x:-78.7,y:146.5}},{t:this.shape_742,p:{x:-65.9,y:146.5}},{t:this.shape_1067},{t:this.shape_748,p:{x:-45.5,y:146.5}},{t:this.shape_1066,p:{x:-27.5,y:144.7}},{t:this.shape_745,p:{x:-14.1,y:146.5}},{t:this.shape_766,p:{x:0.5,y:144.7}},{t:this.shape_1065},{t:this.shape_1064},{t:this.shape_1063},{t:this.shape_1062},{t:this.shape_761,p:{x:57.8,y:144.7}},{t:this.shape_758,p:{x:63.6,y:144.7}},{t:this.shape_1061},{t:this.shape_764,p:{x:78.8,y:146.5}},{t:this.shape_1060,p:{x:91.7,y:148.4}},{t:this.shape_1059},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_1056},{t:this.shape_743,p:{x:158.2,y:146.5}},{t:this.shape_1055},{t:this.shape_1054},{t:this.shape_1053},{t:this.shape_1052},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049,p:{x:239.8,y:146.5}},{t:this.shape_740,p:{x:254.4,y:144.7}},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046},{t:this.shape_953,p:{x:-292.9,y:170.7}},{t:this.shape_1045},{t:this.shape_671,p:{x:-270.2,y:169}},{t:this.shape_1044},{t:this.shape_949,p:{x:-254.6,y:170.7}},{t:this.shape_1043},{t:this.shape_952,p:{x:-228.3,y:168.8}},{t:this.shape_1042},{t:this.shape_1041},{t:this.shape_524,p:{x:-187.6,y:170.7}},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037},{t:this.shape_1036},{t:this.shape_1035},{t:this.shape_951,p:{x:-85.3,y:168.8}},{t:this.shape_942,p:{x:-76.1,y:170.7}},{t:this.shape_1034},{t:this.shape_940,p:{x:-50.7,y:170.7}},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_666,p:{x:7,y:168.9}},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_529,p:{x:47.7,y:170.7}},{t:this.shape_939,p:{x:56.9,y:168.8}},{t:this.shape_672,p:{x:70.5,y:170.7}},{t:this.shape_1027},{t:this.shape_559,p:{x:93,y:170.6}},{t:this.shape_1026},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_944,p:{x:196.7,y:170.7}},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_528,p:{x:240,y:170.7}},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_628,p:{x:-231,y:194.9}},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_655,p:{x:-190.6,y:194.9}},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_652,p:{x:-20.1,y:194.9}},{t:this.shape_999},{t:this.shape_998},{t:this.shape_642,p:{x:13.7,y:194.9}},{t:this.shape_997},{t:this.shape_630,p:{x:39.3,y:194.9}},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_663,p:{x:104,y:193}},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_640,p:{x:146.7,y:193.1}},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_538,p:{x:187.1,y:194.8}},{t:this.shape_537,p:{x:199.7,y:194.8}},{t:this.shape_622,p:{x:209,y:193.1}},{t:this.shape_985},{t:this.shape_984},{t:this.shape_523,p:{x:241.1,y:198.6}}]},1).to({state:[{t:this.shape_1182},{t:this.shape_1181},{t:this.shape_1180,p:{x:-62.1,y:115.4}},{t:this.shape_1179},{t:this.shape_1178},{t:this.shape_1177},{t:this.shape_1176},{t:this.shape_1175},{t:this.shape_823,p:{x:16}},{t:this.shape_1174,p:{x:25.3,y:117.1}},{t:this.shape_1173},{t:this.shape_817,p:{x:47.9}},{t:this.shape_1172},{t:this.shape_1171},{t:this.shape_795,p:{x:-271.3}},{t:this.shape_1170},{t:this.shape_1169},{t:this.shape_784,p:{x:-228.5}},{t:this.shape_1168,p:{x:-213.9,y:139.4}},{t:this.shape_787,p:{x:-204.7}},{t:this.shape_1167},{t:this.shape_1166},{t:this.shape_1165},{t:this.shape_778,p:{x:-148}},{t:this.shape_1164},{t:this.shape_1163},{t:this.shape_1162},{t:this.shape_1161},{t:this.shape_1160},{t:this.shape_1159},{t:this.shape_1158},{t:this.shape_592,p:{x:-35,y:141.2}},{t:this.shape_1157},{t:this.shape_1156,p:{x:-13.1,y:139.4}},{t:this.shape_812,p:{x:-7.3}},{t:this.shape_1155},{t:this.shape_1154},{t:this.shape_777,p:{x:20.8,y:141.3}},{t:this.shape_1153},{t:this.shape_810,p:{x:40.6,y:139.5}},{t:this.shape_1152},{t:this.shape_807,p:{x:62.7}},{t:this.shape_1151},{t:this.shape_797,p:{x:93.6}},{t:this.shape_770,p:{x:107}},{t:this.shape_1150},{t:this.shape_768,p:{x:140}},{t:this.shape_1149},{t:this.shape_1148},{t:this.shape_789,p:{x:187.9}},{t:this.shape_776,p:{x:198.5,y:139.6}},{t:this.shape_1147},{t:this.shape_1146},{t:this.shape_791,p:{x:239,y:139.5}},{t:this.shape_1145,p:{x:244.8,y:139.4}},{t:this.shape_1144,p:{x:250.6,y:139.4}},{t:this.shape_773,p:{x:256.4,y:139.5}},{t:this.shape_1143},{t:this.shape_757,p:{x:-271.7,y:165.4}},{t:this.shape_767,p:{x:-258.6}},{t:this.shape_1142},{t:this.shape_755,p:{x:-232.3,y:165.4}},{t:this.shape_1141},{t:this.shape_1140},{t:this.shape_733,p:{x:-193.6}},{t:this.shape_725,p:{x:-183}},{t:this.shape_1139},{t:this.shape_765,p:{x:-164.4,y:165.4}},{t:this.shape_1066,p:{x:-146.3,y:163.6}},{t:this.shape_748,p:{x:-132.9,y:165.4}},{t:this.shape_758,p:{x:-118.3,y:163.6}},{t:this.shape_1138},{t:this.shape_1137},{t:this.shape_1136},{t:this.shape_1135},{t:this.shape_578,p:{x:-53,y:165.4}},{t:this.shape_760,p:{x:-40.3}},{t:this.shape_759,p:{x:-28.2}},{t:this.shape_1134},{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_1131},{t:this.shape_1068,p:{x:41.9,y:165.4}},{t:this.shape_1130},{t:this.shape_750,p:{x:71.6}},{t:this.shape_1129},{t:this.shape_745,p:{x:98,y:165.4}},{t:this.shape_1128},{t:this.shape_1127},{t:this.shape_740,p:{x:143.5,y:163.6}},{t:this.shape_1126},{t:this.shape_1060,p:{x:165.8,y:167.3}},{t:this.shape_744,p:{x:177.9}},{t:this.shape_1071,p:{x:187.8,y:165.4}},{t:this.shape_1125},{t:this.shape_1124},{t:this.shape_1123},{t:this.shape_743,p:{x:243.8,y:165.4}},{t:this.shape_729,p:{x:255.5}},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_704,p:{x:-279.3,y:187.9}},{t:this.shape_1119},{t:this.shape_1118},{t:this.shape_1117},{t:this.shape_1116},{t:this.shape_722,p:{x:-213.4}},{t:this.shape_1115},{t:this.shape_1114},{t:this.shape_694,p:{x:-175.6}},{t:this.shape_1113},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_1110},{t:this.shape_1109},{t:this.shape_1108},{t:this.shape_700,p:{x:-79.4}},{t:this.shape_686,p:{x:-67.3}},{t:this.shape_719,p:{x:-57.4}},{t:this.shape_559,p:{x:-44.8,y:189.6}},{t:this.shape_1107},{t:this.shape_1106},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1103},{t:this.shape_711,p:{x:27.2}},{t:this.shape_538,p:{x:45.2,y:189.6}},{t:this.shape_1102},{t:this.shape_702,p:{x:67.1}},{t:this.shape_1101},{t:this.shape_1100},{t:this.shape_699,p:{x:95.6}},{t:this.shape_712,p:{x:108.3}},{t:this.shape_1099},{t:this.shape_689,p:{x:140.5}},{t:this.shape_1098},{t:this.shape_707,p:{x:170.4}},{t:this.shape_1097},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094,p:{x:228.7,y:187.8}},{t:this.shape_537,p:{x:237.9,y:189.6}},{t:this.shape_1093},{t:this.shape_693,p:{x:265.1,y:187.8}},{t:this.shape_685,p:{x:274.4}},{t:this.shape_1092},{t:this.shape_590,p:{x:-37,y:212}},{t:this.shape_677,p:{x:-27.8,y:213.8}},{t:this.shape_678,p:{x:-17.3}},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.shape_675,p:{x:21.6}}]},1).to({state:[{t:this.shape_1404},{t:this.shape_1403},{t:this.shape_1402},{t:this.shape_1401},{t:this.shape_1400},{t:this.shape_1399},{t:this.shape_1398},{t:this.shape_1397},{t:this.shape_1396},{t:this.shape_1395},{t:this.shape_1394},{t:this.shape_1393},{t:this.shape_1392},{t:this.shape_1391},{t:this.shape_1390},{t:this.shape_1389},{t:this.shape_1388},{t:this.shape_1387},{t:this.shape_1386},{t:this.shape_1385},{t:this.shape_1384},{t:this.shape_1383},{t:this.shape_1382},{t:this.shape_1381},{t:this.shape_1380},{t:this.shape_1379},{t:this.shape_1378},{t:this.shape_1377},{t:this.shape_1376},{t:this.shape_1375},{t:this.shape_1374},{t:this.shape_1373},{t:this.shape_1372},{t:this.shape_1371},{t:this.shape_1370},{t:this.shape_1369},{t:this.shape_1368},{t:this.shape_1367},{t:this.shape_1366},{t:this.shape_1365},{t:this.shape_1364},{t:this.shape_1363},{t:this.shape_1362},{t:this.shape_1361},{t:this.shape_1360},{t:this.shape_1359},{t:this.shape_1358},{t:this.shape_1357},{t:this.shape_1356},{t:this.shape_1355},{t:this.shape_1354},{t:this.shape_1353},{t:this.shape_1352},{t:this.shape_1351},{t:this.shape_1350},{t:this.shape_1349},{t:this.shape_1348},{t:this.shape_1347},{t:this.shape_1346},{t:this.shape_1345},{t:this.shape_1344},{t:this.shape_1343},{t:this.shape_1342},{t:this.shape_1341},{t:this.shape_1340},{t:this.shape_1339},{t:this.shape_1338},{t:this.shape_1337},{t:this.shape_1336},{t:this.shape_1335},{t:this.shape_1334},{t:this.shape_1333},{t:this.shape_1332},{t:this.shape_1331},{t:this.shape_1330},{t:this.shape_1329},{t:this.shape_1328},{t:this.shape_1327},{t:this.shape_1326},{t:this.shape_1325},{t:this.shape_1324},{t:this.shape_1323},{t:this.shape_1322},{t:this.shape_1321},{t:this.shape_1320},{t:this.shape_1319},{t:this.shape_1318},{t:this.shape_1317},{t:this.shape_1316},{t:this.shape_1315},{t:this.shape_1314},{t:this.shape_1313},{t:this.shape_1312},{t:this.shape_1311},{t:this.shape_1310},{t:this.shape_1309},{t:this.shape_1308},{t:this.shape_1307},{t:this.shape_1306},{t:this.shape_1305},{t:this.shape_1304},{t:this.shape_1303},{t:this.shape_1302},{t:this.shape_1301},{t:this.shape_1300},{t:this.shape_1299},{t:this.shape_1298},{t:this.shape_1297},{t:this.shape_1296},{t:this.shape_1295},{t:this.shape_1294},{t:this.shape_1293},{t:this.shape_1292},{t:this.shape_1291},{t:this.shape_1290},{t:this.shape_1289},{t:this.shape_1288},{t:this.shape_1287},{t:this.shape_1286},{t:this.shape_1285},{t:this.shape_1284},{t:this.shape_1283},{t:this.shape_1282},{t:this.shape_1281},{t:this.shape_1280},{t:this.shape_1279},{t:this.shape_1278},{t:this.shape_1277},{t:this.shape_1276},{t:this.shape_1275},{t:this.shape_1274},{t:this.shape_1273},{t:this.shape_1272},{t:this.shape_1271},{t:this.shape_1270},{t:this.shape_1269},{t:this.shape_1268},{t:this.shape_1267},{t:this.shape_1266},{t:this.shape_1265},{t:this.shape_1264},{t:this.shape_1263},{t:this.shape_1262},{t:this.shape_1261},{t:this.shape_1260},{t:this.shape_1259},{t:this.shape_1258},{t:this.shape_1257},{t:this.shape_1256},{t:this.shape_1255},{t:this.shape_1254},{t:this.shape_1253},{t:this.shape_1252},{t:this.shape_1251},{t:this.shape_1250},{t:this.shape_1249},{t:this.shape_1248},{t:this.shape_1247},{t:this.shape_1246},{t:this.shape_1245},{t:this.shape_1244},{t:this.shape_1243},{t:this.shape_1242},{t:this.shape_1241},{t:this.shape_1240},{t:this.shape_1239},{t:this.shape_1238},{t:this.shape_1237},{t:this.shape_1236},{t:this.shape_1235},{t:this.shape_1234},{t:this.shape_1233},{t:this.shape_1232},{t:this.shape_1231},{t:this.shape_1230},{t:this.shape_1229},{t:this.shape_1228},{t:this.shape_1227},{t:this.shape_1226},{t:this.shape_1225},{t:this.shape_1224},{t:this.shape_1223},{t:this.shape_1222},{t:this.shape_1221},{t:this.shape_1220},{t:this.shape_1219},{t:this.shape_1218},{t:this.shape_1217},{t:this.shape_1216},{t:this.shape_1215},{t:this.shape_1214},{t:this.shape_1213},{t:this.shape_1212},{t:this.shape_1211},{t:this.shape_1210},{t:this.shape_1209},{t:this.shape_1208},{t:this.shape_1207},{t:this.shape_1206},{t:this.shape_1205},{t:this.shape_1204},{t:this.shape_1203},{t:this.shape_1202},{t:this.shape_1201},{t:this.shape_1200},{t:this.shape_1199},{t:this.shape_1198},{t:this.shape_1197},{t:this.shape_1196},{t:this.shape_1195},{t:this.shape_1194},{t:this.shape_1193},{t:this.shape_1192},{t:this.shape_1191},{t:this.shape_1190},{t:this.shape_1189},{t:this.shape_1188},{t:this.shape_1187},{t:this.shape_1186},{t:this.shape_1185},{t:this.shape_1184},{t:this.shape_1183}]},1).to({state:[{t:this.shape_1522},{t:this.shape_1521},{t:this.shape_1520},{t:this.shape_1519},{t:this.shape_1518},{t:this.shape_1517},{t:this.shape_1516},{t:this.shape_704,p:{x:16.6,y:111.9}},{t:this.shape_1515},{t:this.shape_1094,p:{x:30.3,y:111.8}},{t:this.shape_1514},{t:this.shape_693,p:{x:48.8,y:111.7}},{t:this.shape_1513},{t:this.shape_1512},{t:this.shape_1511},{t:this.shape_1510},{t:this.shape_1509},{t:this.shape_1508},{t:this.shape_1507},{t:this.shape_1506},{t:this.shape_1505},{t:this.shape_1504},{t:this.shape_1503},{t:this.shape_1502},{t:this.shape_1501},{t:this.shape_1500},{t:this.shape_1499},{t:this.shape_1498},{t:this.shape_1497},{t:this.shape_1496},{t:this.shape_1495},{t:this.shape_1174,p:{x:-27.2,y:137.8}},{t:this.shape_1494},{t:this.shape_1493},{t:this.shape_1168,p:{x:2.3,y:135.9}},{t:this.shape_1156,p:{x:8.1,y:135.9}},{t:this.shape_1492},{t:this.shape_631,p:{x:23.1,y:137.7}},{t:this.shape_1491},{t:this.shape_1145,p:{x:50.4,y:135.9}},{t:this.shape_1490},{t:this.shape_621,p:{x:77.6,y:137.7}},{t:this.shape_1489},{t:this.shape_1488},{t:this.shape_1144,p:{x:112.5,y:135.9}},{t:this.shape_614,p:{x:127,y:137.7}},{t:this.shape_1487},{t:this.shape_1486},{t:this.shape_1485},{t:this.shape_1484},{t:this.shape_1483},{t:this.shape_677,p:{x:221.2,y:137.8}},{t:this.shape_1180,p:{x:231.7,y:136.1}},{t:this.shape_1482},{t:this.shape_590,p:{x:250.7,y:135.9}},{t:this.shape_592,p:{x:-303.1,y:161.9}},{t:this.shape_1481},{t:this.shape_1480},{t:this.shape_1479},{t:this.shape_1478},{t:this.shape_578,p:{x:-237.1,y:161.9}},{t:this.shape_1477},{t:this.shape_1476},{t:this.shape_1475},{t:this.shape_1474},{t:this.shape_1473},{t:this.shape_1472},{t:this.shape_1471},{t:this.shape_1470},{t:this.shape_1469},{t:this.shape_1468},{t:this.shape_1467},{t:this.shape_1466},{t:this.shape_1465},{t:this.shape_1464},{t:this.shape_1463},{t:this.shape_1462},{t:this.shape_1461},{t:this.shape_1460},{t:this.shape_1459},{t:this.shape_1458},{t:this.shape_1457},{t:this.shape_1456},{t:this.shape_1455},{t:this.shape_1454},{t:this.shape_1080,p:{x:90.7,y:161.9}},{t:this.shape_1453},{t:this.shape_559,p:{x:113.2,y:161.9}},{t:this.shape_1452},{t:this.shape_1451},{t:this.shape_624,p:{x:161.8,y:160.1}},{t:this.shape_1450},{t:this.shape_1449},{t:this.shape_1448},{t:this.shape_1447},{t:this.shape_1446},{t:this.shape_1088,p:{x:238.4,y:160.1}},{t:this.shape_1445},{t:this.shape_1084,p:{x:261.1,y:161.9}},{t:this.shape_1444},{t:this.shape_538,p:{x:-297.4,y:186.1}},{t:this.shape_1443},{t:this.shape_1442},{t:this.shape_1441},{t:this.shape_1440},{t:this.shape_1049,p:{x:-231.3,y:186.1}},{t:this.shape_1439},{t:this.shape_912,p:{x:-200.4,y:184.3}},{t:this.shape_1438},{t:this.shape_1437},{t:this.shape_1436},{t:this.shape_1435},{t:this.shape_752,p:{x:-144.8,y:186.1}},{t:this.shape_1434},{t:this.shape_1433},{t:this.shape_765,p:{x:-110.4,y:186.1}},{t:this.shape_1432},{t:this.shape_889,p:{x:-86.5,y:184.3}},{t:this.shape_1431},{t:this.shape_1430},{t:this.shape_1429},{t:this.shape_1428},{t:this.shape_1427},{t:this.shape_1426},{t:this.shape_1425},{t:this.shape_1424},{t:this.shape_1423},{t:this.shape_1422},{t:this.shape_617,p:{x:86.3,y:184.3}},{t:this.shape_537,p:{x:98.9,y:186.1}},{t:this.shape_1421},{t:this.shape_1420},{t:this.shape_1068,p:{x:137.7,y:186.1}},{t:this.shape_1419},{t:this.shape_756,p:{x:166.7,y:188}},{t:this.shape_1418},{t:this.shape_1417},{t:this.shape_1060,p:{x:202,y:188}},{t:this.shape_1416},{t:this.shape_1415},{t:this.shape_754,p:{x:241.1,y:186.1}},{t:this.shape_1414},{t:this.shape_1413},{t:this.shape_1412},{t:this.shape_698,p:{x:-50.9,y:210.3}},{t:this.shape_1411},{t:this.shape_1410},{t:this.shape_1409},{t:this.shape_1408},{t:this.shape_1407},{t:this.shape_1406},{t:this.shape_1405}]},1).wait(1));

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgqiASCQm/AAAAh2IAAw+QAAh3G/AAMBVFAAAQG/AAAAB3IAAQ+QAAB2m/AAg");
	mask.setTransform(-16,115.4);

	// Capa 3
	this.instance = new lib.hojita();
	this.instance.parent = this;
	this.instance.setTransform(-338,97,4.037,0.661);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-333,98.4,634.1,130.7);


(lib.Animar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.instance = new lib.rockcard();
	this.instance.parent = this;
	this.instance.setTransform(-62,-72,0.74,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-72,134,168.8);


(lib._50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000033").s().p("AhCBaIAAivIAzAAIAAAZQANgSAKgFQAKgGANAAQATAAARAJIgRAoQgOgHgLAAQgMAAgIAFQgHAFgFAPQgEAOAAArIAAA3g");
	this.shape.setTransform(81.4,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000033").s().p("AhOBNQgSgPAAgWQAAgPAJgMQAIgLAPgGQAPgGAcgFQAlgGAPgFIAAgFQAAgNgIgGQgHgFgVAAQgPAAgHAFQgIAEgGANIgxgIQAIgaAVgMQAUgMAoAAQAjAAATAHQARAIAIALQAHALAAAfIgBA1QABAXACALQADALAHANIg2AAIgGgOIgBgFQgOALgRAGQgOAGgSAAQggAAgTgPgAgBAKQgXAFgHAEQgKAGgBAKQAAAKAJAHQAJAHANAAQAOAAANgIQAKgHADgJQACgGAAgQIAAgKQgKADgWAEg");
	this.shape_1.setTransform(61.1,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000033").s().p("AhHBuQgWgQAAgXIAAgGIA/AHQACAJAFAEQAIAFAQAAQAVAAAKgFQAIgFADgIQADgGAAgPIAAgZQgZAcgkAAQgqAAgYgeQgTgXAAgjQAAgsAZgXQAZgYAlAAQAmABAYAcIAAgZIA0AAIAACdQgBAfgGAPQgFAQgMAIQgLAJgRAGQgSAEgcAAQg0AAgWgPgAgfhMQgNANAAAaQAAAdANAMQAMANATAAQAUgBANgNQAOgMAAgbQAAgbgOgNQgNgNgTAAQgUAAgMANg");
	this.shape_2.setTransform(37.4,26.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000033").s().p("Ag+BSQgQgHgHgPQgIgOAAgZIAAhuIA3AAIAABRQAAAkADAJQADAIAIAFQAIAFAMAAQANAAALgHQALgHAEgJQAEgKAAgkIAAhLIA3AAIAACvIgzAAIAAgbQgLAPgSAIQgSAIgUAAQgVAAgRgIg");
	this.shape_3.setTransform(13.5,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000033").s().p("AhDBnQgXgUAAgnIA2gFQABAVAGAIQAKAOASAAQATAAAHgKQAJgJgBgeIAAibIA6AAIAACYQAAAegGARQgJAVgWANQgVAMgjAAQgrAAgWgUg");
	this.shape_4.setTransform(-11,20.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhCBaIAAivIAzAAIAAAZQANgSAKgFQAKgGANAAQATAAARAJIgRAoQgOgHgLAAQgMAAgIAFQgHAFgFAPQgEAOAAArIAAA3g");
	this.shape_5.setTransform(81.4,23.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhOBNQgSgPAAgWQAAgPAJgMQAIgLAPgGQAPgGAcgFQAlgGAPgFIAAgFQAAgNgIgGQgHgFgVAAQgPAAgHAFQgIAEgGANIgxgIQAIgaAVgMQAUgMAoAAQAjAAATAHQARAIAIALQAHALAAAfIgBA1QABAXACALQADALAHANIg2AAIgGgOIgBgFQgOALgRAGQgOAGgSAAQggAAgTgPgAgBAKQgXAFgHAEQgKAGgBAKQAAAKAJAHQAJAHANAAQAOAAANgIQAKgHADgJQACgGAAgQIAAgKQgKADgWAEg");
	this.shape_6.setTransform(61.1,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhHBuQgWgQAAgXIAAgGIA/AHQACAJAFAEQAIAFAQAAQAVAAAKgFQAIgFADgIQADgGAAgPIAAgZQgZAcgkAAQgqAAgYgeQgTgXAAgjQAAgsAZgXQAZgYAlAAQAmABAYAcIAAgZIA0AAIAACdQgBAfgGAPQgFAQgMAIQgLAJgRAGQgSAEgcAAQg0AAgWgPgAgfhMQgNANAAAaQAAAdANAMQAMANATAAQAUgBANgNQAOgMAAgbQAAgbgOgNQgNgNgTAAQgUAAgMANg");
	this.shape_7.setTransform(37.4,26.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag+BSQgQgHgHgPQgIgOAAgZIAAhuIA3AAIAABRQAAAkADAJQADAIAIAFQAIAFAMAAQANAAALgHQALgHAEgJQAEgKAAgkIAAhLIA3AAIAACvIgzAAIAAgbQgLAPgSAIQgSAIgUAAQgVAAgRgIg");
	this.shape_8.setTransform(13.5,23.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhDBnQgXgUAAgnIA2gFQABAVAGAIQAKAOASAAQATAAAHgKQAJgJgBgeIAAibIA6AAIAACYQAAAegGARQgJAVgWANQgVAMgjAAQgrAAgWgUg");
	this.shape_9.setTransform(-11,20.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[]},2).wait(1));

	// Capa 2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("Aqxi6QAmgMAfgYQAvgjANgtIRbAAQAIA4A3ApQAgAYAoAMIAAFvQgvAMgmAcQgnAdgPAkIxXAAQgNgugvgjQgfgYgmgLg");
	this.shape_10.setTransform(36.7,22.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AowEvQgNgtgvgkQgfgYglgLIAAl1QAlgMAfgYQAvgiANguIRbAAQAIA4A3ApQAgAYAoAMIAAFvQgwAMgmAdQgmAdgQAjg");
	this.shape_11.setTransform(36.7,22.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#660033").ss(4.4,1,1).p("ACOkTIkbAAAiNEUIEbAA");
	this.shape_12.setTransform(36.3,20);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#660066").s().p("ABnEUIkbAAIg1AAQiMAAhjg8Qhkg9AAhWIAAiJQAAhWBkg8QBjg9CMAAIA1AAIEbAAICCAAQCNAABkA9QBjA8AABWIAACJQAABWhjA9QhkA8iNAAg");
	this.shape_13.setTransform(40.2,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.7,-10.2,142.9,65.6);


(lib.zapata2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		zapata2 = 0
		this.stop()
	}
	this.frame_4 = function() {
		zapata2 = 1
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Capa 1
	this.instance = new lib.Animar1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(68.8,75.7);

	this.instance_1 = new lib.heatfield();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23.9,46.8,0.846,0.82,0,0,-53.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.846,skewY:-53.599999999999994,x:23.9,y:46.8,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.805,skewY:-18.6,x:6.1,y:15,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.727,skewY:0,x:5,y:5,scaleY:0.727}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:68.7,y:75.3},1).to({_off:true,scaleX:0.85,scaleY:0.82,skewY:-53.6,x:23.9,y:46.8},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.8,3.7,134,168.8);


(lib.zapata1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		zapata1 = 0
		this.stop()
	}
	this.frame_4 = function() {
		zapata1 = 1
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Capa 1
	this.instance = new lib.Animar1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(68.8,75.7);

	this.instance_1 = new lib.heatfield();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23.9,46.8,0.846,0.82,0,0,-53.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.846,skewY:-53.599999999999994,x:23.9,y:46.8,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.805,skewY:-18.6,x:6.1,y:15,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.727,skewY:0,x:9,y:4,scaleY:0.727}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:68.7,y:75.3},1).to({_off:true,scaleX:0.85,scaleY:0.82,skewY:-53.6,x:23.9,y:46.8},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.8,3.7,134,168.8);


(lib.villa2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		villa2 = 0
		this.stop()
	}
	this.frame_4 = function() {
		villa2 = 1
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Capa 1
	this.instance = new lib.Animar1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(68.8,75.7);

	this.instance_1 = new lib.aqualung();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.5,36.2,0.743,0.756,0,0,-46.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.743,scaleY:0.756,skewY:-46.3,x:19.5,y:36.2}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.722,scaleY:0.75,skewY:-11.6,x:9.9,y:15.6}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.727,scaleY:0.727,skewY:0,x:8,y:7}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:65.4,y:75.3},1).to({_off:true,scaleX:0.74,scaleY:0.76,skewY:-46.3,x:19.5,y:36.2},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.8,3.7,134,168.8);


(lib.villa1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		villa1 = 0
		this.stop();
	}
	this.frame_4 = function() {
		villa1 = 1
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Capa 1
	this.instance = new lib.Animar1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(68.8,75.7);

	this.instance_1 = new lib.aqualung();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.5,36.2,0.743,0.756,0,0,-46.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.743,scaleY:0.756,skewY:-46.3,x:19.5,y:36.2}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.722,scaleY:0.75,skewY:-11.6,x:9.9,y:15.6}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.727,scaleY:0.727,skewY:0,x:9,y:5}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:65.4,y:75.3},1).to({_off:true,scaleX:0.74,scaleY:0.76,skewY:-46.3,x:19.5,y:36.2},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.8,3.7,134,168.8);


(lib.victoria2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		victoria2 = 0
		this.stop()
	}
	this.frame_4 = function() {
		victoria2=1
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Capa 1
	this.instance = new lib.Animar1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(68.8,75.7);

	this.instance_1 = new lib.kurt();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23,65,0.944,0.82,0,0,-54.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.944,skewY:-54.900000000000006,x:23,y:65,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.786,skewY:-25.6,x:10.6,y:22.5,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.768,skewY:0,x:4,y:6,scaleY:0.732}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:68.7,y:75.3},1).to({_off:true,scaleX:0.94,scaleY:0.82,skewY:-54.9,x:23,y:65},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.8,3.7,134,168.8);


(lib.victoria1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		victoria1 = 0
		this.stop()
	}
	this.frame_4 = function() {
		victoria1 = 1
		
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Capa 1
	this.instance = new lib.Animar1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(68.8,75.7);

	this.instance_1 = new lib.kurt();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23,65,0.944,0.82,0,0,-54.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.944,skewY:-54.900000000000006,x:23,y:65,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.786,skewY:-25.6,x:10.6,y:22.5,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.727,skewY:0,x:7,y:4,scaleY:0.727}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:68.7,y:75.3},1).to({_off:true,scaleX:0.94,scaleY:0.82,skewY:-54.9,x:23,y:65},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.8,3.7,134,168.8);


(lib.santaana2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		ana2=0
		this.stop()
	}
	this.frame_4 = function() {
		ana2=1
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Capa 1
	this.instance = new lib.Animar1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(68.8,75.7);

	this.instance_1 = new lib.ozzy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.7,65.1,0.932,0.82,0,0,-57.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.932,skewY:-57.7,x:28.7,y:65.1,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.72,skewY:-24.8,x:14.8,y:20.6,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.74,skewY:0,x:8,y:9,scaleY:0.706}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:68.7,y:75.3},1).to({_off:true,scaleX:0.93,scaleY:0.82,skewY:-57.7,x:28.7,y:65.1},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.8,3.7,134,168.8);


(lib.santaana1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		ana1=0
		this.stop()
	}
	this.frame_4 = function() {
		ana1=1
		
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Capa 1
	this.instance = new lib.Animar1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(68.8,75.7);

	this.instance_1 = new lib.ozzy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.7,65.1,0.932,0.82,0,0,-57.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.932,skewY:-57.7,x:28.7,y:65.1,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.72,skewY:-24.8,x:14.8,y:20.6,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.727,skewY:0,x:9,y:3,scaleY:0.727}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:68.7,y:75.3},1).to({_off:true,scaleX:0.93,scaleY:0.82,skewY:-57.7,x:28.7,y:65.1},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.8,3.7,134,168.8);


(lib.porfirio2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		diaz2 = 0
		this.stop()
	}
	this.frame_4 = function() {
		diaz2 =1
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Capa 1
	this.instance = new lib.Animar1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(68.8,75.7);

	this.instance_1 = new lib.gilmore();
	this.instance_1.parent = this;
	this.instance_1.setTransform(40.5,56.7,0.622,0.63,0,0,-59.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.622,scaleY:0.63,skewY:-59.400000000000006,x:40.5,y:56.7}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.807,scaleY:0.82,skewY:-21.8,x:7.4,y:19.3}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.727,scaleY:0.727,skewY:0,x:7,y:5}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:65.4},1).to({_off:true,scaleX:0.62,scaleY:0.63,skewY:-59.4,x:40.5,y:56.7},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.8,3.7,134,168.8);


(lib.porfirio1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		diaz1 = 0
		this.stop()
	}
	this.frame_4 = function() {
		diaz1 = 1
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Capa 1
	this.instance = new lib.Animar1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(68.8,75.7);

	this.instance_1 = new lib.gilmore();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33.2,49.8,0.811,0.82,0,0,-59.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.811,skewY:-59.400000000000006,x:33.2,y:49.8,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.807,skewY:-21.8,x:7.4,y:19.3,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.727,skewY:0,x:7,y:2,scaleY:0.727}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:65.4},1).to({_off:true,scaleX:0.81,scaleY:0.82,skewY:-59.4,x:33.2,y:49.8},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.8,3.7,134,168.8);


(lib.obregon2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		obregon2 = 0
		this.stop()
	}
	this.frame_4 = function() {
		obregon2 =1
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Capa 1
	this.instance = new lib.Animar1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(68.8,75.7);

	this.instance_1 = new lib.jagger();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.3,45.3,0.774,0.82,0,0,-53.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.774,skewY:-53.400000000000006,x:28.3,y:45.3,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.783,skewY:-29.5,x:11.5,y:27.3,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.727,skewY:0,x:6,y:6,scaleY:0.727}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:65.8},1).to({_off:true,scaleX:0.77,scaleY:0.82,skewY:-53.4,x:28.3,y:45.3},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.8,3.7,134,168.8);


(lib.obregon1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		obregon1 = 0
		this.stop()
	}
	this.frame_4 = function() {
		obregon1 = 1
		
		
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Capa 1
	this.instance = new lib.Animar1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(68.8,75.7);

	this.instance_1 = new lib.jagger();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.3,45.3,0.774,0.82,0,0,-53.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.774,skewY:-53.400000000000006,x:28.3,y:45.3,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.783,skewY:-29.5,x:11.5,y:27.3,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.727,skewY:0,x:8,y:6,scaleY:0.727}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:65.8},1).to({_off:true,scaleX:0.77,scaleY:0.82,skewY:-53.4,x:28.3,y:45.3},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.8,3.7,134,168.8);


(lib.morelos2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		morelos2 =0
		this.stop()
	}
	this.frame_4 = function() {
		morelos2=1
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Capa 1
	this.instance = new lib.Animar1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(68.8,75.7);

	this.instance_1 = new lib.kieds();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.4,45.8,0.8,0.813,0,0,-52.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.8,scaleY:0.813,skewY:-52.20000000000001,x:26.4,y:45.8}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.872,scaleY:0.775,skewY:-26.6,x:4.2,y:31.3}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.786,scaleY:0.74,skewY:0,x:3,y:5}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60.1,x:65.8},1).to({_off:true,scaleX:0.8,scaleY:0.81,skewY:-52.2,x:26.4,y:45.8},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.8,3.7,134,168.8);


(lib.morelos1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		morelos1 =0
		this.stop()
	}
	this.frame_4 = function() {
		morelos1 =1
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Capa 1
	this.instance = new lib.Animar1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(68.8,75.7);

	this.instance_1 = new lib.kieds();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.4,45.8,0.8,0.813,0,0,-52.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.8,scaleY:0.813,skewY:-52.20000000000001,x:26.4,y:45.8}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.872,scaleY:0.775,skewY:-26.6,x:4.2,y:31.3}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.719,scaleY:0.718,skewY:0,x:7,y:6}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60.1,x:65.8},1).to({_off:true,scaleX:0.8,scaleY:0.81,skewY:-52.2,x:26.4,y:45.8},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.8,3.7,134,168.8);


(lib.moctezuma2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		moctezuma2 = 0
		this.stop()
	}
	this.frame_4 = function() {
		moctezuma2=1
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Capa 1
	this.instance = new lib.Animar1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(68.8,75.7);

	this.instance_1 = new lib.morrison();
	this.instance_1.parent = this;
	this.instance_1.setTransform(31.9,54.6,0.909,0.82,0,0,-57.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.909,skewY:-57.8,x:31.9,y:54.6,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.842,skewY:-27.1,x:7.4,y:25,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.727,skewY:0,x:7,y:6,scaleY:0.727}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:68.7,y:75.3},1).to({_off:true,scaleX:0.91,scaleY:0.82,skewY:-57.8,x:31.9,y:54.6},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.8,3.7,134,168.8);


(lib.moctezuma1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		moctezuma1 = 0
		this.stop()
	}
	this.frame_4 = function() {
		moctezuma1 = 1
		
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Capa 1
	this.instance = new lib.Animar1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(68.8,75.7);

	this.instance_1 = new lib.morrison();
	this.instance_1.parent = this;
	this.instance_1.setTransform(31.9,54.6,0.909,0.82,0,0,-57.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.909,skewY:-57.8,x:31.9,y:54.6,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.842,skewY:-27.1,x:7.4,y:25,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.727,skewY:0,x:9,y:7,scaleY:0.727}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:68.7,y:75.3},1).to({_off:true,scaleX:0.91,scaleY:0.82,skewY:-57.8,x:31.9,y:54.6},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.8,3.7,134,168.8);


(lib.madero2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		madero2 = 0
		this.stop()
	}
	this.frame_4 = function() {
		madero2 = 1
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Capa 1
	this.instance = new lib.Animar1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(68.8,75.7);

	this.instance_1 = new lib.bono();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.5,60.7,0.89,0.738,0,-7,-54.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{scaleX:0.89,scaleY:0.738,skewX:-7,skewY:-54.7,x:16.5,y:60.7}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.755,scaleY:0.76,skewX:0,skewY:-17.6,x:9.8,y:19.8}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.727,scaleY:0.727,skewX:0,skewY:0,x:8,y:6}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:66,y:75.3},1).to({scaleX:0.98,skewY:119.9,x:63.3,y:74.8},1).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.8,3.7,134,168.8);


(lib.madero1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		madero1 = 0
		this.stop()
	}
	this.frame_4 = function() {
		madero1 = 1
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Capa 1
	this.instance = new lib.Animar1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(68.8,75.7);

	this.instance_1 = new lib.bono();
	this.instance_1.parent = this;
	this.instance_1.setTransform(22.5,62.8,0.782,0.65,0,-6.8,-54.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{scaleX:0.782,scaleY:0.65,skewX:-6.8,skewY:-54.7,x:22.5,y:62.8}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.746,scaleY:0.75,skewX:0,skewY:-17.6,x:10.5,y:20.6}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.727,scaleY:0.727,skewX:0,skewY:0,x:7,y:5}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:66,y:75.3},1).to({scaleX:0.98,skewY:119.9,x:63.3,y:74.8},1).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.8,3.7,134,168.8);


(lib.iturbide2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		iturbide2 =0
		this.stop()
	}
	this.frame_4 = function() {
		iturbide2=1
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Capa 1
	this.instance = new lib.Animar1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(68.8,75.7);

	this.instance_1 = new lib.plant();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.5,48.2,0.81,0.82,0,0,-54.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.81,skewY:-54.2,x:28.5,y:48.2,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.686,skewY:-24.2,x:16.9,y:19.3,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.727,skewY:0,x:7,y:3,scaleY:0.727}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:65.8,y:75.3},1).to({_off:true,scaleX:0.81,scaleY:0.82,skewY:-54.2,x:28.5,y:48.2},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.8,3.7,134,168.8);


(lib.iturbide1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		iturbide1 =0
		this.stop()
	}
	this.frame_4 = function() {
		iturbide1 =1
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Capa 1
	this.instance = new lib.Animar1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(68.8,75.7);

	this.instance_1 = new lib.plant();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.5,48.2,0.81,0.82,0,0,-54.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.81,skewY:-54.2,x:28.5,y:48.2,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.686,skewY:-24.2,x:16.9,y:19.3,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.727,skewY:0,x:9,y:8,scaleY:0.727}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:65.8,y:75.3},1).to({_off:true,scaleX:0.81,scaleY:0.82,skewY:-54.2,x:28.5,y:48.2},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.8,3.7,134,168.8);


(lib.instructions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.jugar_btn.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3()
		{
			inicio=1
			this.visible=0
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgpBKQgMgTAAgEQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIAYgEQAPgFAAgLQAAgIgIgKIgRgRQgIgMAAgOQAAgZAagSQAWgQAaAAQADAAALASQALASAAADQAAACgDADIgJgBQgKAAgHAEQgJAFAAAKQAAAGAJAJQANAOADAEQAJANAAAPQAAAIgDAKQgEALgGAFQgNALgRAHQgRAIgPAAQgEAAgMgSg");
	this.shape.setTransform(372,47.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ag4BBQgZgYAAgoQAAgmAXgZQAXgaAnAAQAgAAAXAYQAXAXAAAhQAAARgLACIgkAEIg6AFQACALAMAGQAJAFANAAQAPAAAPgIIANgJQADACAJAQQAIAQAAAEQAAAAAAABQAAAAAAAAQAAABgBABQAAAAgBABQgVAWgrAAQgoAAgagYgAgUgkQgHAJAAALQABAFAEAAQANAAAZgEQAHgBgBgCQABgLgJgIQgHgIgJAAQgLAAgHAJg");
	this.shape_1.setTransform(357.3,47.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAfBUQgFgBAAgGIAAgZIABgYIgBgTIAAgSQAAgXgUAAQgGAAgJAGQgJAGAAAHIAABbQAAAGgGABIgYAAQgUAAgGgBQgGgBAAgFIABgoIAAgnQAAgrgHgYIAAgDQAAAAAAgBQAAgBAAAAQABgBAAAAQABAAAAAAIAdgEIAfgFQACgBABAMQABALACAAIAAAAIAAAAQgCAAAUgLQATgMAPAAQAWAAAPAKQAQAMAAAVIAAA2IAAAhIAAAhQAAAFgFABIgZAAQgVAAgFgBg");
	this.shape_2.setTransform(338.3,48);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Ag9A/QgYgYAAglQAAgnAXgZQAXgYAnAAQAmAAAYAYQAYAYAAAmQAAAngYAYQgXAYgnAAQglAAgYgYgAgVgXQgIAKAAANQAAAOAIAJQAJALAMAAQANAAAJgLQAIgJAAgOQAAgNgIgKQgJgLgNAAQgMAAgJALg");
	this.shape_3.setTransform(319.3,48);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgZB1QgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAIgBgFIABgjIAAgkQAAgwgEgdIAAgDQAAgDAFAAIAPABIANABIAPgBIAPgBQAEAAAAADIAAADQgEAiAAArIABAlIAAAkQAAAEgFABQgFABgVAAQgTAAgGgBgAgWhBQgLgJAAgNQAAgNAMgKQAJgHAMAAQAOAAAKAIQAKAJAAANQAAAdgiAAQgMAAgKgHg");
	this.shape_4.setTransform(305.3,44.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgqA/QgZgZAAgmQAAgkAZgaQAYgaAlAAQAZAAATAMQAFABAAADIgFAUIgHAVQAAABAAABQgBAAAAABQgBAAAAAAQAAAAgBAAIgKgCQgKgDgGAAQgQAAgJAKQgIAIAAAPQAAAPAJAJQAKAJAQAAQAHAAAKgDIAJgFQADAAAEAXQAEATAAAGQAAAHgVAFQgQADgKAAQglABgYgag");
	this.shape_5.setTransform(293.3,48);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgqA/QgZgZAAgmQAAgkAZgaQAYgaAlAAQAZAAATAMQAFABAAADIgFAUIgHAVQAAABAAABQgBAAAAABQgBAAAAAAQAAAAgBAAIgKgCQgKgDgGAAQgQAAgJAKQgIAIAAAPQAAAPAJAJQAKAJAQAAQAHAAAKgDIAJgFQADAAAEAXQAEATAAAGQAAAHgVAFQgQADgKAAQglABgYgag");
	this.shape_6.setTransform(278.8,48);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAeBRQgEgBAAgDIgBgKQgBgHgCgBIAAAAIAAAAQABABgSAKQgTAMgQAAQgtAAgIgoQgEgUAAgiQAAgnAGgXQACgHAFAAIAYAAIAYAAQAFAAAAAFIAAADQgEAXAAAYQAAAdACALQADATAUAAQAGAAAJgHQAJgHAAgGIAAhVQAAgGABgBQABgCAFAAIAaAAIAZAAQAFABABACIAAAEIgBAmIgBAlIABAlIAAAkQAAAGgEAAQgGACgVAAIgagBg");
	this.shape_7.setTransform(261.2,48.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AguBUQgGgBAAgFIABgpIAAgoQgBgogHgaIAAgCQAAgBAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIAcgEIAcgFQACAAABALQAAAKADABIAAAAIAAAAQgCgBAQgIQARgJAOAAQAKAAAAAEIgBAOIgBAOIAAANIAAANQAAAHgHAAIgKAAIgJgBQgOAAgFAFQgGAEABAMIAAAXIABAWIAAAPIABAOQgBAFgFAAIgYABIgagBg");
	this.shape_8.setTransform(244.6,48);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgsBLIABgiIABgiQAAgHgJAAIgCAAIgCAAQgHAAAAgEIABgJIAAgIIAAgLIgBgLQAAgDALgBQAGAAABgDQABgHgBgOIAAgVQAAgTAEAAIANACIANACIAaADQAEABAAACIgBAVIgBAVQAAAIAFAAIASAAIASgBQABAAABAAQAAABABAAQAAAAABABQAAAAAAABIgBAMIgBALIAAAMIAAAMQAAADgFAAIgLAAIgMgBIgMAAQgDAAAAAIIAAAMIAAAMQAAAPADAFQAFAHAOAAIAMgCIALgCQAEAAAAAEIgCAQIgBAPIgBAGIgGAEQgWAMgaAAQgxAAAAglg");
	this.shape_9.setTransform(231,45.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgpBKQgMgTAAgEQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIAYgEQAPgFAAgLQAAgIgIgKIgRgRQgIgMAAgOQAAgZAagSQAWgQAaAAQADAAALASQALASAAADQAAACgDADIgJgBQgKAAgHAEQgJAFAAAKQAAAGAJAJQANAOADAEQAJANAAAPQAAAIgDAKQgEALgGAFQgNALgRAHQgRAIgPAAQgEAAgMgSg");
	this.shape_10.setTransform(218,47.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AAfBUQgFgBAAgGIAAgZIABgYIgBgTIAAgSQAAgXgUAAQgGAAgJAGQgJAGAAAHIAABbQAAAGgGABIgYAAQgUAAgGgBQgGgBAAgFIABgoIAAgnQAAgrgHgYIAAgDQAAAAAAgBQAAgBAAAAQABgBAAAAQABAAAAAAIAdgEIAfgFQACgBABAMQABALACAAIAAAAIAAAAQgCAAAUgLQATgMAPAAQAWAAAPAKQAQAMAAAVIAAA2IAAAhIAAAhQAAAFgFABIgZAAQgVAAgFgBg");
	this.shape_11.setTransform(201.8,48);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgfB3QgFgBAAgEIABgeQAEhFAAgVIgCg3IgBg3QAAgEAEAAIAQABIAPABIAQgBIAPgBQAFAAAAAEIgCA3IgCA3IABA8IABA8QAAABAAABQAAABAAAAQAAABgBAAQAAABAAAAIgFAAQgLACgSAAQgYAAgHgCg");
	this.shape_12.setTransform(186.8,44.4);

	this.jugar_btn = new lib._50();
	this.jugar_btn.name = "jugar_btn";
	this.jugar_btn.parent = this;
	this.jugar_btn.setTransform(278.1,327.2,1.022,0.758,0,0,0,33.3,25.3);
	new cjs.ButtonHelper(this.jugar_btn, 0, 1, 2, false, new lib._50(), 3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgNBJQgGgGAAgJQAAgIAGgGQAGgGAHAAQAJAAAGAGQAFAGAAAIQAAAJgFAGQgGAFgJAAQgHAAgGgFgAgJAeIgDgiIgHgsIgBgJQAAgFADgFQADgFAFgDQAFgCAEAAQAFAAAFADQAFACADAFQADAFAAAGIgBALIgIAvIgBAcg");
	this.shape_13.setTransform(430.5,249.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_14.setTransform(420.7,251.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_15.setTransform(408.4,251.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_16.setTransform(395.5,251.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_17.setTransform(382.4,251.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgOA2IglhQIgDgEIgEgCIgIgBIAAgUIBCAAIAAAUIgDAAQgGAAgCABQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAABIABAFIAQAqIASgqIACgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAgBgBQgBgBgGAAIgFAAIAAgUIA6AAIAAAUIgJABIgDADIgFAGIgkBNg");
	this.shape_18.setTransform(369.2,251.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AghBJQgPgGgHgKQgHgJAAgKQAAgLAIgJQAHgKARgGQgOgGgGgJQgIgKAAgMQABgMAGgJQAHgKANgGQAOgGARAAQAXAAAQAKQAQAKAAAQQAAAKgGAJQgGAIgNAHQAQAHAKALQAHAJAAANQAAAUgQANQgSAOgdAAQgTAAgOgGgAgYAYQgFAGAAAGQAAAEAEAFQADAEAHADQAGADAJAAQAJAAAHgDQAHgCADgEQADgEAAgEQAAgGgEgDQgFgFgNgGIgPgGQgLAFgFAHgAgRgyQgGAEAAAGQAAAFADADQAFAFAMAFIAMAFIAEgEIAFgHIADgGIAAgFQABgGgHgEQgFgFgLAAQgKAAgGAEg");
	this.shape_19.setTransform(347.5,249.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AguBNIAAgUIAPAAQAJAAACgBIADgEQACgDAAgHIAAhUIgfAAIAAgWIAUgCIAWgGIAMgEIAKAAIAAB2QAAAHABACQABABAAABQAAAAABABQAAAAABAAQAAABABAAQACACAHAAIAPAAIAAAUg");
	this.shape_20.setTransform(333.1,249.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_21.setTransform(311.2,251.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AgFBIQgIgDgFgFQgGgEgCgGQgCgFAAgLIAAgzIgRAAIAAgVQAJgCAGgGQAHgFAEgHQADgHACgMIAUAAIAAAmIAjAAIAAAWIgjAAIAAAmQAAAMABAFQACADADACQAFADAGAAQAMAAALgHIAAAXQgKAEgHACQgIACgJAAQgKAAgHgCg");
	this.shape_22.setTransform(299.5,249.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AguA4IAAgVIAGAAQAGAAABgBIADgCIAAgHIAAgyIgQAAIAAgVQASgBATgIIAKAAIAAAQQAIgJAHgEQAGgDAGAAQAFAAAFACQAEADACAEQADAFAAAFQAAAIgFAFQgEAGgJgBIgDAAIgIgCIgEgBQgDAAgHAEIAAAqQAAAFABACQAAAAABAAQAAABAAAAQAAAAABABQAAAAABAAIAIABIAFAAIAAAVg");
	this.shape_23.setTransform(289.7,251.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AAZA2QgIgEgFgGQgKAHgIADQgJADgJAAQgPAAgKgJQgKgJAAgNQAAgHAEgGQAEgGAGgFQAHgDANgEQAOgDATgCIAAgIIgBgKQgBgDgEgBQgCgCgFAAIgGABIgFADIgEAHQgCAHgFADQgEADgFAAQgIAAgEgFQgEgEgBgGQABgIAEgFQAGgIANgFQAMgFAPAAQAOAAALAFQAKAFAEAHQAFAHAAAOIAAAmQAAAHABACQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQADABAEAAIAIgBIAAAVQgKADgIAAQgLAAgGgDgAgLAMQgGACgCADQgDADAAADQAAAFADADQAEADAFAAQAEAAAFgCIAJgGIAAgTQgOACgFADg");
	this.shape_24.setTransform(277.7,251.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_25.setTransform(264.7,251.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAIgMAOgHQAOgIARAAQATAAANAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgcAAgQgQgAgLgcQgFADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgHgJQgGgIgKAAQgFAAgGAEg");
	this.shape_26.setTransform(251.1,251.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgOA2IglhQIgEgEIgDgCIgIgBIAAgUIBCAAIAAAUIgDAAQgGAAgCABQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABIAAAFIARAqIASgqIABgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQgCgBgGAAIgGAAIAAgUIA7AAIAAAUIgIABIgFADIgDAGIglBNg");
	this.shape_27.setTransform(237.5,251.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_28.setTransform(226.9,248.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgfA2QgHgDgFgEQgEgEgCgGQgCgGAAgJIAAgsIgBgIIgCgCIgIgBIgGAAIAAgVIA0gBIAABGIAAAKQABACADACQACABAEAAQAFAAAGgCIAMgIIAAgqIAAgHIgDgDIgGgBIgHAAIAAgVIA0gBIAABNIAAAIQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAQABABAGAAIAGAAIAAAVIgwABIAAgNQgKAHgJAEQgJADgKAAQgIAAgGgCg");
	this.shape_29.setTransform(215.3,251.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgDBQIAAgVIAEAAIAJgBIACgBQABgCAAgGIAAgZQgJAGgGACQgHACgIAAQgTAAgMgOQgPgSAAgXQAAgRAHgNQAGgOAMgHQALgIANABQAIAAAGACQAIADAKAGIAGgIIAXAAIAAB8QAAAGABACIADACIAIABIAFAAIAAAVgAgPgzQgFADgCAGQgDAJAAALQAAAKADAHQACAGAFADQAFAEAEAAIAJgCIAKgFIAAgkQAAgJgCgDQgBgDgFgCQgEgEgFAAQgGAAgFAFg");
	this.shape_30.setTransform(201.3,253.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_31.setTransform(187.5,251.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_32.setTransform(167.6,251.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_33.setTransform(155.3,251.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AgnBLQgLgHgGgNQgHgOAAgRQAAgQAHgNQAHgNALgHQAKgHAOAAQAHAAAHACQAFACAIAEIAAgaIgPAAIAAgVQAMgCAJgCQAIgCAKgDIAKAAIAAB+QAAAHABACIADACQABABAHAAIAFAAIAAAVIgvACIAAgMQgLAIgGACQgIACgIABQgMgBgLgGgAgPgEQgEAEgEAFQgDAIAAALQABAPAGAJQAGAIAIAAIAGgBIAMgHIAAglQAAgHgCgCQAAgDgFgEQgFgDgEAAQgGAAgGAEg");
	this.shape_34.setTransform(141.8,249.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_35.setTransform(127.9,251.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AgfA2QgHgDgFgEQgEgEgCgGQgCgGAAgJIAAgsIgBgIIgCgCIgIgBIgGAAIAAgVIA0gBIAABGIAAAKQABACADACQACABAEAAQAFAAAGgCIAMgIIAAgqIAAgHIgDgDIgGgBIgHAAIAAgVIA0gBIAABNIAAAIQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAQABABAGAAIAGAAIAAAVIgwABIAAgNQgKAHgJAEQgJADgKAAQgIAAgGgCg");
	this.shape_36.setTransform(114.1,251.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AhEBMIAAgVIAFAAQAHAAACgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBIABgJIAAhTIgBgJQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAIgHgBIgHAAIAAgVIBPAAQAQAAAKADQAKADAHAGQAHAHAEAIQAEAJAAAKQAAATgPANQgPANgaAAIgZAAIAAAcIAAAHQAAABABAAQAAABABAAQAAAAABABQAAAAABAAIAGABIAHAAIAAAVgAgMgHIAMAAQAMAAAFgCQAGgDADgFQAEgFAAgHQAAgLgJgGQgGgEgLAAIgQAAg");
	this.shape_37.setTransform(99.7,249.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("AgdANIAAgZIA7AAIAAAZg");
	this.shape_38.setTransform(80.2,251.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("AgNAPQgHgGAAgJQAAgHAHgGQAFgGAIAAQAJAAAFAGQAGAGABAHQgBAJgGAGQgFAFgJAAQgIAAgFgFg");
	this.shape_39.setTransform(72.4,255.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("AghBJQgPgHgHgKQgIgJAAgKQABgHAFgFQAFgGAHAAQAIAAAFAFQADADADAIQADAKADADQACADAGADQAGACAGAAQAGAAAHgDQAGgDADgFQADgGAAgHQAAgNgLgHQgIgFgPAAIgIAAIAAgUIAIAAQAMAAAGgCQAFgCAEgEQADgFAAgFQAAgIgGgFQgGgHgNAAQgJAAgHADQgGADgDAFQgEAFAAAJIgXAAIAAgEQAAgOAHgLQAFgKAOgGQAOgHAQAAQARAAAOAGQANAGAGAJQAHAJAAAKQAAAIgFAHQgDAHgIAFQgEAEgJADQAIABAGADQAHACAFAFQAEAFADAGQACAGAAAHQABANgIAKQgHALgPAHQgPAHgTAAQgTAAgOgGg");
	this.shape_40.setTransform(61.1,249.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_41.setTransform(197.4,198.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AgaBmQgHgDgEgGQgEgFAAgGQAAgGAEgEQAGgEAFAAQAFAAADACQAEADAGAGQADAEADAAQADAAACgDQACgDAAgIIAAheIgQAAIAAgVQALAAAKgDQAKgCAKgFIAKAAIAAB0QgBARgEAIQgFAJgLAGQgLAFgOAAQgLAAgJgDgAAIhGQgGgGAAgIQAAgJAGgFQAGgGAIAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgGgGg");
	this.shape_42.setTransform(185.3,198.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AAZA2QgIgEgFgGQgKAHgIADQgJADgJAAQgPAAgKgJQgKgJAAgNQAAgHAEgGQAEgGAGgFQAHgDANgEQAOgDATgCIAAgIIgBgKQgBgDgEgBQgCgCgFAAIgGABIgFADIgEAHQgCAHgFADQgEADgFAAQgIAAgEgFQgEgEgBgGQABgIAEgFQAGgIANgFQAMgFAPAAQAOAAALAFQAKAFAEAHQAFAHAAAOIAAAmQAAAHABACQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQADABAEAAIAIgBIAAAVQgKADgIAAQgLAAgGgDgAgLAMQgGACgCADQgDADAAADQAAAFADADQAEADAFAAQAEAAAFgCIAJgGIAAgTQgOACgFADg");
	this.shape_43.setTransform(176.9,198.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AAEA4IAAgVIAIgBQABAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgCAAgGIAAgmQAAgJgBgBQgEgFgFAAQgEAAgFACQgFADgKAGIAAAqQABAIABABQACACAGAAIADAAIAAAVIhAAAIAAgVIAEAAQAHAAACgBIADgCIAAgHIAAgxIgQAAIAAgWQAUgCARgHIALAAIAAAPQALgIAJgDQAJgEAJAAQAKAAAJAFQAIAEADAHQAEAGAAANIAAAsIABAIIACACIAIABIAGAAIAAAVg");
	this.shape_44.setTransform(162.9,198.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAOgHQAOgIASAAQASAAAOAHQAOAIAHAMQAIANAAAQQAAAZgQAQQgRAQgcAAQgcAAgQgQgAgKgcQgGADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgGgJQgHgIgKAAQgFAAgFAEg");
	this.shape_45.setTransform(148.1,198.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_46.setTransform(135.4,198.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AguA4IAAgVIAGAAQAGAAABgBIADgCIAAgIIAAgwIgQAAIAAgWQASgBATgIIAKAAIAAAQQAIgJAHgDQAGgEAGAAQAFAAAFADQAEACACAEQADAGAAAEQAAAIgFAFQgEAGgJgBIgDAAIgIgCIgEgBQgDAAgHAEIAAApQAAAGABABQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIAIABIAFAAIAAAVg");
	this.shape_47.setTransform(124.8,198.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_48.setTransform(112.7,198.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("Ag+BRIAAgWIAEAAIAJgBIADgCIABgIIAAhhIgRAAIAAgVIAUgEQAJgCAIgDIAKAAIAAAMQANgIAFgCQAHgDAIABQATAAAMAOQAOAQAAAZQgBAYgLAPQgOATgYAAQgHAAgGgCIgKgFIAAAVIAAAIIACACIAIABIAFAAIAAAWgAgKgtIAAAkQAAAIABADQABADAEADQAEACAEAAQAJgBAGgHQAGgIAAgRQAAgPgFgHQgFgIgHAAQgIAAgKAIg");
	this.shape_49.setTransform(99,200.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AghBQIAAgVIAEAAQAHAAACgBIADgCIABgIIAAhhIgRAAIAAgVQAUgBATgIIAMAAIAAB/IAAAHQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQACABAHAAIAEAAIAAAVg");
	this.shape_50.setTransform(452,168.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_51.setTransform(441.5,171);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_52.setTransform(421.6,171);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_53.setTransform(409.3,171);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("AAEA4IAAgVIAIgBQABAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAQABgBAAgHIAAgmQAAgJgBgBQgDgFgGAAQgFAAgEACQgFACgJAHIAAAqQgBAIACABQABACAHAAIADAAIAAAVIhAAAIAAgVIAEAAQAHAAACgBIADgCIAAgHIAAgxIgQAAIAAgWQAUgCARgHIAKAAIAAAPQAMgIAJgDQAIgEAKAAQAKAAAJAFQAHAEAEAHQAEAHAAAMIAAAsIABAIIACACIAIABIAFAAIAAAVg");
	this.shape_54.setTransform(387.8,170.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_55.setTransform(373.5,171);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_56.setTransform(363.1,168.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("AgfA2QgHgDgFgEQgEgEgCgGQgCgGAAgJIAAgsIgBgIIgCgCIgIgBIgGAAIAAgVIA0gBIAABGIAAAKQABACADACQACABAEAAQAFAAAGgCIAMgIIAAgqIAAgHIgDgDIgGgBIgHAAIAAgVIA0gBIAABNIAAAIQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAQABABAGAAIAGAAIAAAVIgwABIAAgNQgKAHgJAEQgJADgKAAQgIAAgGgCg");
	this.shape_57.setTransform(351.5,171.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333333").s().p("AgDBRIAAgWIAEAAIAJgBIACgBQABgCAAgGIAAgZQgJAGgGACQgHACgIAAQgTAAgMgOQgPgSAAgYQAAgQAHgNQAGgOAMgHQALgIANABQAIAAAGACQAIADAKAGIAGgJIAXAAIAAB9QAAAGABACIADACIAIABIAFAAIAAAWgAgPgzQgFADgCAGQgDAIAAALQAAALADAHQACAGAFADQAFAEAEAAIAJgCIAKgFIAAgkQAAgJgCgDQgBgDgFgCQgEgEgFAAQgGAAgFAFg");
	this.shape_58.setTransform(337.5,173.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("AAYA2QgGgEgFgGQgLAHgIADQgJADgIAAQgQAAgKgJQgJgJAAgNQgBgHAEgGQADgGAHgFQAGgDAPgEQANgDATgCIAAgIIgBgKQgBgDgDgBQgDgCgEAAIgHABIgEADIgFAHQgDAHgEADQgEADgGAAQgGAAgFgFQgFgEAAgGQAAgIAFgFQAGgIAMgFQANgFAOAAQAPAAALAFQAKAFAFAHQADAHAAAOIAAAmQAAAHABACQABABAAAAQAAABAAAAQABABAAAAQABAAAAABQADABADAAIAIgBIAAAVQgJADgJAAQgJAAgIgDgAgMAMQgFACgDADQgCADAAADQAAAFADADQADADAGAAQAEAAAEgCIAKgGIAAgTQgOACgGADg");
	this.shape_59.setTransform(316.3,171);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("AgFBHQgIgCgFgFQgGgEgCgGQgCgFAAgLIAAgyIgRAAIAAgWQAJgCAGgGQAHgFAEgHQADgHACgMIAUAAIAAAlIAjAAIAAAYIgjAAIAAAlQAAAMABAFQACADADACQAFADAGAAQAMAAALgHIAAAXQgKAEgHACQgIACgJAAQgKAAgHgDg");
	this.shape_60.setTransform(304.5,169.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_61.setTransform(293.5,171);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_62.setTransform(281.2,171);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333333").s().p("AgFBHQgIgCgFgFQgGgEgCgGQgCgFAAgLIAAgyIgRAAIAAgWQAJgCAGgGQAHgFAEgHQADgHACgMIAUAAIAAAlIAjAAIAAAYIgjAAIAAAlQAAAMABAFQACADADACQAFADAGAAQAMAAALgHIAAAXQgKAEgHACQgIACgJAAQgKAAgHgDg");
	this.shape_63.setTransform(269.5,169.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#333333").s().p("AAEA4IAAgVIAJgBQAAAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAQABgBAAgHIAAgmQAAgJgCgBQgDgFgFAAQgFAAgEACQgGACgIAHIAAAqQAAAIABABQABACAHAAIADAAIAAAVIg/AAIAAgVIACAAQAIAAACgBIADgCIABgHIAAgxIgQAAIAAgWQATgCARgHIAKAAIAAAPQANgIAIgDQAJgEAIAAQALAAAJAFQAHAEAEAHQAEAHAAAMIAAAsIAAAIIAEACIAHABIAFAAIAAAVg");
	this.shape_64.setTransform(257,170.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAOgHQAPgIARAAQASAAAOAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgcAAgQgQgAgKgcQgGADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgGgJQgHgIgKAAQgFAAgFAEg");
	this.shape_65.setTransform(242.2,171);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#333333").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_66.setTransform(228.8,171);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_67.setTransform(208.8,171);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#333333").s().p("AAZA2QgHgEgGgGQgKAHgIADQgJADgJAAQgPAAgKgJQgKgJAAgNQAAgHAEgGQADgGAHgFQAHgDANgEQAOgDATgCIAAgIIgBgKQgCgDgDgBQgCgCgFAAIgGABIgFADIgEAHQgCAHgFADQgEADgFAAQgIAAgEgFQgEgEgBgGQABgIAEgFQAGgIANgFQALgFAQAAQAOAAAKAFQALAFAEAHQAEAHABAOIAAAmQAAAHABACQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQADABAEAAIAIgBIAAAVQgKADgIAAQgLAAgGgDgAgLAMQgGACgCADQgDADAAADQAAAFADADQADADAGAAQADAAAGgCIAJgGIAAgTQgOACgFADg");
	this.shape_68.setTransform(196.6,171);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("AgFBHQgIgCgFgFQgGgEgCgGQgCgFAAgLIAAgyIgRAAIAAgWQAJgCAGgGQAHgFAEgHQADgHACgMIAUAAIAAAlIAjAAIAAAYIgjAAIAAAlQAAAMABAFQACADADACQAFADAGAAQAMAAALgHIAAAXQgKAEgHACQgIACgJAAQgKAAgHgDg");
	this.shape_69.setTransform(184.8,169.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#333333").s().p("AguA4IAAgVIAGAAQAGAAABgBIADgCIAAgIIAAgwIgQAAIAAgWQASgBATgIIAKAAIAAAQQAIgJAHgDQAGgEAGAAQAFAAAFACQAEADACAEQADAGAAAEQAAAIgFAFQgEAGgJgBIgDAAIgIgCIgEgBQgDAAgHAEIAAApQAAAGABACQAAAAABAAQAAABAAAAQAAAAABABQAAAAABAAIAIABIAFAAIAAAVg");
	this.shape_70.setTransform(175,170.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_71.setTransform(162.9,171);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCQABgCAAgEIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_72.setTransform(152.5,168.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_73.setTransform(141.9,171);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#333333").s().p("AAYA2QgHgEgEgGQgLAHgIADQgJADgIAAQgQAAgKgJQgJgJAAgNQgBgHAEgGQADgGAHgFQAGgDAOgEQAOgDATgCIAAgIIgBgKQgCgDgCgBQgDgCgEAAIgHABIgFADIgEAHQgDAHgEADQgEADgGAAQgGAAgFgFQgFgEAAgGQAAgIAFgFQAGgIANgFQAMgFAPAAQAOAAALAFQAKAFAEAHQAFAHAAAOIAAAmQAAAHAAACQABABAAAAQAAABAAAAQABABAAAAQABAAAAABQADABADAAIAJgBIAAAVQgKADgIAAQgKAAgIgDgAgLAMQgGACgCADQgDADAAADQAAAFADADQADADAGAAQAEAAAEgCIAKgGIAAgTQgOACgFADg");
	this.shape_74.setTransform(129,171);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_75.setTransform(110.9,168.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("AgNBMQgLgDgLgIIgEALIgRAAIgKg7IAUgFQAHASAQAMQAPAMARAAQAIAAAGgCQAFgCADgDQADgEgBgEQAAgHgGgEQgHgFgPgFIgZgHIgQgGQgJgFgGgEQgFgFgDgHQgEgIAAgJQAAgMAGgKQAIgKANgHQAOgGAQAAQASAAARAKIAEgHIAQAAIAMAzIgUAGQgKgTgNgIQgNgJgOAAQgIAAgGAEQgFAEgBAFQAAAFAGAFQAEAEANAEIAdAIQAYAHAKALQALAMAAAPQAAAUgQAOQgSAPgaAAQgLAAgKgDg");
	this.shape_76.setTransform(99.4,168.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF0000").s().p("AgdANIAAgZIA7AAIAAAZg");
	this.shape_77.setTransform(80.2,171);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF0000").s().p("AgNAPQgHgGAAgJQAAgHAHgGQAFgGAIAAQAJAAAFAGQAGAGABAHQgBAJgGAGQgFAFgJAAQgIAAgFgFg");
	this.shape_78.setTransform(72.4,174.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF0000").s().p("AAnBQIgBgFIhkAAIAAgVQAXgPAigcQAQgNAGgLQAEgIAAgIQAAgKgIgGQgIgHgMAAQgKAAgIAEQgHADgEAHQgEAHAAAHIAAAIIgWACIgBgLQAAgQAIgMQAHgLAQgIQAPgHASAAQARAAAOAGQAOAHAIAKQAHALAAALQAAAMgFAKQgGAMgNAJQgMALgmAXIAkAAQAJAAADgBIAEgDIADgKIABgFIAVAAIgKA4g");
	this.shape_79.setTransform(61.1,169);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_80.setTransform(357.9,113.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#333333").s().p("AAYA2QgHgEgFgGQgLAHgHADQgJADgIAAQgQAAgKgJQgJgJAAgNQAAgHADgGQADgGAHgFQAGgDAPgEQANgDATgCIAAgIIgBgKQgBgDgDgBQgDgCgFAAIgGABIgEADIgFAHQgDAHgEADQgEADgGAAQgGAAgFgFQgFgEABgGQgBgIAFgFQAGgIAMgFQAMgFAPAAQAPAAAKAFQALAFAFAHQADAHAAAOIAAAmQAAAHABACQABABAAAAQAAABAAAAQABABAAAAQABAAABABQACABADAAIAIgBIAAAVQgJADgJAAQgKAAgHgDgAgMAMQgFACgDADQgCADAAADQAAAFADADQADADAGAAQADAAAFgCIAKgGIAAgTQgNACgHADg");
	this.shape_81.setTransform(345.7,113);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("AgFBHQgIgCgFgFQgGgFgCgFQgCgFAAgLIAAgyIgRAAIAAgWQAJgCAGgGQAHgFAEgHQADgIACgLIAUAAIAAAlIAjAAIAAAYIgjAAIAAAlQAAAMABAFQACADADACQAFADAGAAQAMAAALgHIAAAXQgKAEgHACQgIACgJAAQgKAAgHgDg");
	this.shape_82.setTransform(333.9,111.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#333333").s().p("AguA4IAAgVIAGAAQAGAAABgBIADgCIAAgIIAAgwIgQAAIAAgWQASgBATgIIAKAAIAAAQQAIgJAHgDQAGgEAGAAQAFAAAFADQAEACACAEQADAGAAAEQAAAIgFAFQgEAGgJgBIgDAAIgIgCIgEgBQgDAAgHAEIAAApQAAAGABABQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIAIABIAFAAIAAAVg");
	this.shape_83.setTransform(324,113);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#333333").s().p("AAYA2QgHgEgEgGQgLAHgIADQgJADgIAAQgQAAgKgJQgJgJAAgNQgBgHAEgGQADgGAHgFQAGgDAOgEQAOgDATgCIAAgIIgBgKQgCgDgCgBQgDgCgEAAIgHABIgFADIgEAHQgDAHgEADQgEADgGAAQgGAAgFgFQgFgEAAgGQAAgIAFgFQAGgIANgFQAMgFAPAAQAOAAALAFQAKAFAEAHQAFAHAAAOIAAAmQAAAHABACQAAABAAAAQAAABAAAAQABABAAAAQABAAAAABQADABADAAIAJgBIAAAVQgKADgIAAQgKAAgIgDgAgLAMQgGACgDADQgCADAAADQAAAFADADQADADAGAAQAEAAAFgCIAJgGIAAgTQgOACgFADg");
	this.shape_84.setTransform(312.1,113);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#333333").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_85.setTransform(299.1,113.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_86.setTransform(278.4,113.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#333333").s().p("AgnBLQgKgHgIgOQgGgNAAgQQAAgRAHgNQAHgNAKgHQALgHAOAAQAHAAAHACQAFABAIAFIAAgaIgPAAIAAgVQANgBAIgCQAJgDAJgDIAKAAIAAB9QAAAIABACIACACQACABAHAAIAFAAIAAAVIgvACIAAgLQgLAGgGADQgIACgIAAQgMAAgLgGgAgPgEQgFADgDAHQgCAHAAALQAAAPAGAJQAGAIAIgBIAGgBIAMgHIAAgkQAAgHgCgDQgBgCgEgEQgFgDgFAAQgGAAgFAEg");
	this.shape_87.setTransform(264.9,110.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#333333").s().p("AguA4IAAgVIAGAAQAGAAABgBIADgCIAAgIIAAgwIgQAAIAAgWQASgBATgIIAKAAIAAAQQAIgJAHgDQAGgEAGAAQAFAAAFADQAEACACAEQADAGAAAEQAAAIgFAFQgEAGgJgBIgDAAIgIgCIgEgBQgDAAgHAEIAAApQAAAGABABQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIAIABIAFAAIAAAVg");
	this.shape_88.setTransform(245.2,113);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#333333").s().p("AAZA2QgIgEgEgGQgLAHgIADQgJADgJAAQgPAAgKgJQgKgJABgNQAAgHADgGQAEgGAGgFQAGgDAOgEQAOgDATgCIAAgIIgBgKQgBgDgEgBQgCgCgEAAIgHABIgFADIgEAHQgDAHgEADQgEADgGAAQgGAAgFgFQgEgEgBgGQABgIAEgFQAGgIANgFQAMgFAPAAQAOAAALAFQAKAFAEAHQAFAHAAAOIAAAmQAAAHABACQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQADABAEAAIAIgBIAAAVQgKADgIAAQgLAAgGgDgAgLAMQgGACgCADQgDADAAADQAAAFADADQAEADAFAAQAEAAAFgCIAJgGIAAgTQgOACgFADg");
	this.shape_89.setTransform(233.3,113);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#333333").s().p("Ag9BRIAAgWIADAAIAJgBIACgCQACgCAAgGIAAhhIgQAAIAAgVIATgEQAJgCAIgDIALAAIAAAMQAMgIAFgCQAHgDAIABQATAAAMAOQAOAQAAAZQAAAYgNAPQgNATgYAAQgHAAgFgCIgMgFIAAAVIABAIIADACIAHABIAFAAIAAAWgAgLgtIAAAkQAAAIACADQABADAEADQAEACAEAAQAKgBAFgHQAGgIAAgRQAAgPgFgHQgFgIgHAAQgIAAgLAIg");
	this.shape_90.setTransform(219.4,115.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("AAFA4IAAgVIAIgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgCAAgGIAAgmQAAgJgBgBQgDgFgGAAQgEAAgFACQgFADgKAGIAAAqQABAIABABQACACAFAAIAEAAIAAAVIg/AAIAAgVIADAAQAHAAACgBIADgCIAAgHIAAgxIgPAAIAAgWQATgCARgHIALAAIAAAPQALgIAJgDQAIgEAJAAQALAAAIAFQAJAEADAHQAEAGAAANIAAAsIABAIIACACIAIABIAGAAIAAAVg");
	this.shape_91.setTransform(197.3,113);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AgfA2QgHgDgFgEQgEgEgCgGQgCgGAAgJIAAgsIgBgIIgCgCIgIgBIgGAAIAAgVIA0gBIAABGIAAAKQABACADACQACABAEAAQAFAAAGgCIAMgIIAAgqIAAgHIgDgDIgGgBIgHAAIAAgVIA0gBIAABNIAAAIQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAQABABAGAAIAGAAIAAAVIgwABIAAgNQgKAHgJAEQgJADgKAAQgIAAgGgCg");
	this.shape_92.setTransform(182,113.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#333333").s().p("AAYA2QgGgEgFgGQgLAHgIADQgJADgIAAQgQAAgKgJQgJgJAAgNQAAgHADgGQADgGAHgFQAGgDAPgEQANgDATgCIAAgIIgBgKQgBgDgDgBQgDgCgEAAIgHABIgEADIgFAHQgDAHgEADQgEADgGAAQgGAAgFgFQgFgEABgGQgBgIAFgFQAGgIAMgFQANgFAOAAQAPAAAKAFQALAFAFAHQADAHAAAOIAAAmQAAAHABACQABABAAAAQAAABAAAAQABABAAAAQABAAABABQACABADAAIAIgBIAAAVQgJADgJAAQgKAAgHgDgAgMAMQgFACgDADQgCADAAADQAAAFADADQADADAGAAQAEAAAEgCIAKgGIAAgTQgNACgHADg");
	this.shape_93.setTransform(160.7,113);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_94.setTransform(147.5,113.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#333333").s().p("AgFBHQgIgCgFgFQgGgFgCgFQgCgFAAgLIAAgyIgRAAIAAgWQAJgCAGgGQAHgFAEgHQADgIACgLIAUAAIAAAlIAjAAIAAAYIgjAAIAAAlQAAAMABAFQACADADACQAFADAGAAQAMAAALgHIAAAXQgKAEgHACQgIACgJAAQgKAAgHgDg");
	this.shape_95.setTransform(135.9,111.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AghBQIAAgVIAEAAQAHAAACgBIADgCIABgIIAAhhIgRAAIAAgVQAUgBATgIIAMAAIAAB/IAAAHQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQACABAHAAIAEAAIAAAVg");
	this.shape_96.setTransform(127.1,110.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAOgHQAPgIARAAQASAAAOAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgcAAgQgQgAgKgcQgGADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgGgJQgHgIgKAAQgFAAgFAEg");
	this.shape_97.setTransform(116.2,113.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#333333").s().p("AgQBMIguh1IgFgJIgEgDIgIgBIAAgVIBIAAIAAAVIgCAAIgJAAQgBAAAAABQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQAAABAAAAQgBABAAAAIADAKIAaBLIAdhNIACgIQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQgCgBgHAAIgFAAIAAgVIA8AAIAAAVQgIAAgCABQgEADgEAKIgtB0g");
	this.shape_98.setTransform(101.1,110.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF0000").s().p("AgdANIAAgZIA7AAIAAAZg");
	this.shape_99.setTransform(81.4,113);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF0000").s().p("AgNAPQgHgGAAgJQAAgHAHgGQAFgGAIAAQAIAAAHAGQAFAGABAHQgBAJgFAGQgHAFgIAAQgIAAgFgFg");
	this.shape_100.setTransform(73.6,116.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF0000").s().p("AguBNIAAgUIAPAAQAJAAACgBIADgEQACgDAAgHIAAhUIgfAAIAAgWIAUgDIAWgFIAMgFIAKAAIAAB3QAAAHABACQAAABABABQAAAAABABQAAAAABAAQAAABABAAQACABAHABIAPAAIAAAUg");
	this.shape_101.setTransform(62.9,110.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.jugar_btn},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 4
	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(51,0,0,0.349)").s().p("AjeCAQANiNAmgsQAlgsC5hTQBdgqBWghQiFETiwCWQg3Avg1AcIgqATQAAg+AHhGg");
	this.shape_102.setTransform(553.1,332.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_102).wait(1));

	// Capa 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgsvAbQQgyAAAAgyMAAAg07QAAgyAyAAMBZfAAAQAyAAAAAyMAAAAt9Qg6BshPBuQiEC3iHBfg");
	mask.setTransform(284.7,183.2);

	// Capa 2
	this.instance = new lib.fondo();
	this.instance.parent = this;
	this.instance.setTransform(-6.6,7.8,2.599,1.564);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa 5
	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(0,0,0,0.498)").s().p("EgsvAbQQgyAAAAgyMAAAg07QAAgyAyAAMBZfAAAQAyAAAAAyMAAAAt9Qg6BshPBuQiEC3iHBfg");
	this.shape_103.setTransform(272.7,195.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_103).wait(1));

}).prototype = getMCSymbolPrototype(lib.instructions, new cjs.Rectangle(-18.7,8.8,594.8,360.8), null);


(lib.huerta2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		huerta2 = 0
		this.stop()
	}
	this.frame_4 = function() {
		huerta2 = 1
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Capa 1
	this.instance = new lib.Animar1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(68.8,75.7);

	this.instance_1 = new lib.axel();
	this.instance_1.parent = this;
	this.instance_1.setTransform(34.5,60.6,0.74,0.65,0,0,-57.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.74,scaleY:0.65,skewY:-57.599999999999994,x:34.5,y:60.6}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.773,scaleY:0.76,skewY:-18.5,x:8.6,y:20.4}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.727,scaleY:0.727,skewY:0,x:2,y:2}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:65.8},1).to({_off:true,scaleX:0.74,scaleY:0.65,skewY:-57.6,x:34.5,y:60.6},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.8,3.7,134,168.8);


(lib.huerta1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{dos:1});

	// timeline functions:
	this.frame_0 = function() {
		huerta1 = 0
		this.stop();
	}
	this.frame_4 = function() {
		huerta1 = 1
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Capa 1
	this.instance = new lib.Animar1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(68.8,75.7);

	this.instance_1 = new lib.axel();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30.8,58.4,0.831,0.73,0,0,-57.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.831,scaleY:0.73,skewY:-57.599999999999994,x:30.8,y:58.4}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.835,scaleY:0.82,skewY:-18.6,x:4.2,y:15.8}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.727,scaleY:0.727,skewY:0,x:3,y:2}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:65.8},1).to({_off:true,scaleX:0.83,scaleY:0.73,skewY:-57.6,x:30.8,y:58.4},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.8,3.7,134,168.8);


(lib.hidalgo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		hidalgo2 = 0
		this.stop()
	}
	this.frame_4 = function() {
		hidalgo2=1
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Capa 1
	this.instance = new lib.Animar1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(68.8,75.7);

	this.instance_1 = new lib.clapton();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33,50.4,0.863,0.82,0,0,-54.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.863,skewY:-54.8,x:33,y:50.4,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.836,skewY:-24.1,x:6.3,y:20.4,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.727,skewY:0,x:7,y:5,scaleY:0.727}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:68.7,y:75.3},1).to({_off:true,scaleX:0.86,scaleY:0.82,skewY:-54.8,x:33,y:50.4},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.8,3.7,134,168.8);


(lib.hidago1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		hidalgo1 = 0
		this.stop()
	}
	this.frame_4 = function() {
		hidalgo1 = 1
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Capa 1
	this.instance = new lib.Animar1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(68.8,75.7);

	this.instance_1 = new lib.clapton();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33,50.4,0.863,0.82,0,0,-54.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.863,skewY:-54.8,x:33,y:50.4,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.836,skewY:-24.1,x:6.3,y:20.4,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.727,skewY:0,x:7,y:1,scaleY:0.727}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:68.7,y:75.3},1).to({_off:true,scaleX:0.86,scaleY:0.82,skewY:-54.8,x:33,y:50.4},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.8,3.7,134,168.8);


(lib.espantosax = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.x18 = new lib.x();
	this.x18.name = "x18";
	this.x18.parent = this;
	this.x18.setTransform(66.5,99.1,1,1,0,0,0,18.9,20.3);

	this.x17 = new lib.x();
	this.x17.name = "x17";
	this.x17.parent = this;
	this.x17.setTransform(33.2,99.1,1,1,0,0,0,18.9,20.3);

	this.x16 = new lib.x();
	this.x16.name = "x16";
	this.x16.parent = this;
	this.x16.setTransform(-1,99.1,1,1,0,0,0,18.9,20.3);

	this.x15 = new lib.x();
	this.x15.name = "x15";
	this.x15.parent = this;
	this.x15.setTransform(196.1,69.1,1,1,0,0,0,18.9,20.3);

	this.x14 = new lib.x();
	this.x14.name = "x14";
	this.x14.parent = this;
	this.x14.setTransform(163.9,69.1,1,1,0,0,0,18.9,20.3);

	this.x13 = new lib.x();
	this.x13.name = "x13";
	this.x13.parent = this;
	this.x13.setTransform(129.9,69.1,1,1,0,0,0,18.9,20.3);

	this.x12 = new lib.x();
	this.x12.name = "x12";
	this.x12.parent = this;
	this.x12.setTransform(96.4,69.1,1,1,0,0,0,18.9,20.3);

	this.x11 = new lib.x();
	this.x11.name = "x11";
	this.x11.parent = this;
	this.x11.setTransform(63.7,69.1,1,1,0,0,0,18.9,20.3);

	this.x10 = new lib.x();
	this.x10.name = "x10";
	this.x10.parent = this;
	this.x10.setTransform(32.3,68,1,1,0,0,0,18.9,20.3);

	this.x9 = new lib.x();
	this.x9.name = "x9";
	this.x9.parent = this;
	this.x9.setTransform(0.1,68,1,1,0,0,0,18.9,20.3);

	this.x8 = new lib.x();
	this.x8.name = "x8";
	this.x8.parent = this;
	this.x8.setTransform(234,37.9,1,1,0,0,0,18.9,20.3);

	this.x7 = new lib.x();
	this.x7.name = "x7";
	this.x7.parent = this;
	this.x7.setTransform(200.6,37.9,1,1,0,0,0,18.9,20.3);

	this.x6 = new lib.x();
	this.x6.name = "x6";
	this.x6.parent = this;
	this.x6.setTransform(167.8,37.9,1,1,0,0,0,18.9,20.3);

	this.x5 = new lib.x();
	this.x5.name = "x5";
	this.x5.parent = this;
	this.x5.setTransform(132,37.9,1,1,0,0,0,18.9,20.3);

	this.x4 = new lib.x();
	this.x4.name = "x4";
	this.x4.parent = this;
	this.x4.setTransform(99.9,37.9,1,1,0,0,0,18.9,20.3);

	this.x3 = new lib.x();
	this.x3.name = "x3";
	this.x3.parent = this;
	this.x3.setTransform(65.1,37.9,1,1,0,0,0,18.9,20.3);

	this.x2 = new lib.x();
	this.x2.name = "x2";
	this.x2.parent = this;
	this.x2.setTransform(32.4,37.9,1,1,0,0,0,18.9,20.3);

	this.x1 = new lib.x();
	this.x1.name = "x1";
	this.x1.parent = this;
	this.x1.setTransform(-19.3,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.x1},{t:this.x2},{t:this.x3},{t:this.x4},{t:this.x5},{t:this.x6},{t:this.x7},{t:this.x8},{t:this.x9},{t:this.x10},{t:this.x11},{t:this.x12},{t:this.x13},{t:this.x14},{t:this.x15},{t:this.x16},{t:this.x17},{t:this.x18}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.espantosax, new cjs.Rectangle(-16.7,17.9,262.6,90.3), null);


(lib.delay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_14 = function() {
		if (huerta1 == 1 && villa1 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.villa1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos	
		} else if (huerta1 == 1 && villa2 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.villa2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta1 == 1 && madero1 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.madero1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta1 == 1 && madero2 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.madero2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta1 == 1 && diaz1 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta1 == 1 && diaz2 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta1 == 1 && ana1 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta1 == 1 && ana2 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta1 == 1 && moctezuma1 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta1 == 1 && moctezuma2 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta1 == 1 && obregon1 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.obregon1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta1 == 1 && obregon2 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.obregon2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta1 == 1 && victoria1 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.victoria1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta1 == 1 && victoria2 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.victoria2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta1 == 1 && iturbide1 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta1 == 1 && iturbide2 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta1 == 1 && morelos1 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.morelos1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta1 == 1 && morelos2 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.morelos2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta1 == 1 && hidalgo1 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta1 == 1 && hidalgo2 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta2 == 1 && villa2 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.villa2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta1 == 1 && zapata1 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta1 == 1 && zapata2 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta2 == 1 && villa1 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.villa1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta2 == 1 && madero1 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.madero1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta2 == 1 && madero2 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.madero2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta2 == 1 && diaz1 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta2 == 1 && diaz2 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta2 == 1 && ana1 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta2 == 1 && ana2 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
		} else if (huerta2 == 1 && moctezuma1 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta2 == 1 && moctezuma2 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta2 == 1 && obregon1 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.obregon1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta2 == 1 && obregon2 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.obregon2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta2 == 1 && victoria1 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.victoria1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta2 == 1 && victoria2 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.victoria2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta2 == 1 && iturbide1 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta2 == 1 && iturbide2 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta2 == 1 && morelos1 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.morelos1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta2 == 1 && morelos2 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.morelos2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta2 == 1 && hidalgo1 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta2 == 1 && hidalgo2 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta2 == 1 && zapata1 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (huerta2 == 1 && zapata2 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		}
		//villa votando 
		else if (villa1 == 1 && madero1 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.villa1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero2 == 1 && villa2 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.villa2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa1 == 1 && madero1 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.madero1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa1 == 1 && madero2 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.madero2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa1 == 1 && diaz1 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa1 == 1 && diaz2 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa1 == 1 && ana1 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa1 == 1 && ana2 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa1 == 1 && moctezuma1 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa1 == 1 && moctezuma2 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa1 == 1 && obregon1 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.obregon1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa1 == 1 && obregon2 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.obregon2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa1 == 1 && victoria1 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.victoria1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa1 == 1 && victoria2 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.victoria2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa1 == 1 && iturbide1 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa1 == 1 && iturbide2 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa1 == 1 && morelos1 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.morelos1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa1 == 1 && morelos2 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.morelos2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa1 == 1 && hidalgo1 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa1 == 1 && hidalgo2 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa1 == 1 && zapata2 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa1 == 1 && zapata1 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa2 == 1 && madero1 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.madero1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa2 == 1 && madero2 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.madero2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa2 == 1 && diaz1 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa2 == 1 && diaz2 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa2 == 1 && ana1 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa2 == 1 && ana2 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa2 == 1 && moctezuma1 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa2 == 1 && moctezuma2 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa2 == 1 && obregon1 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.obregon1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa2 == 1 && obregon2 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.obregon2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa2 == 1 && victoria1 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.victoria1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa2 == 1 && victoria2 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.victoria2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa2 == 1 && iturbide1 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa2 == 1 && iturbide2 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa2 == 1 && morelos1 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.morelos1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa2 == 1 && morelos2 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.morelos2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa2 == 1 && hidalgo1 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa2 == 1 && hidalgo2 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		}else if (villa2 == 1 && zapata1 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		}else if (villa2 == 1 && zapata2 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		}
		
		//votando maderoo 1
		else if (madero2 == 1 && villa2 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.villa2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa1 == 1 && madero1 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.madero1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (villa1 == 1 && madero2 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.madero2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero1 == 1 && diaz1 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero1 == 1 && diaz2 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero1 == 1 && ana1 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero1 == 1 && ana2 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero1 == 1 && moctezuma1 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero1 == 1 && moctezuma2 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero1 == 1 && obregon1 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.obregon1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero1 == 1 && obregon2 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.obregon2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero1 == 1 && victoria1 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.victoria1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero1 == 1 && victoria2 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.victoria2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero1 == 1 && iturbide1 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero1 == 1 && iturbide2 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero1 == 1 && morelos1 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.morelos1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero1 == 1 && morelos2 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.morelos2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero1 == 1 && hidalgo1 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero1 == 1 && hidalgo2 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		
		} else if (madero1 == 1 && zapata1 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero2 == 1 && zapata2 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero2 == 1 && zapata1 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero1 == 1 && zapata2 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero2 == 1 && diaz1 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero2 == 1 && diaz2 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero2 == 1 && ana1 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero2 == 1 && ana2 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero2 == 1 && moctezuma1 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero2 == 1 && moctezuma2 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero2 == 1 && obregon1 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.obregon1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero2 == 1 && obregon2 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.obregon2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero2 == 1 && victoria1 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.victoria1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero2 == 1 && victoria2 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.victoria2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero2 == 1 && iturbide1 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero2 == 1 && iturbide2 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero2 == 1 && morelos1 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.morelos1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero2 == 1 && morelos2 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.morelos2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero2 == 1 && hidalgo1 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (madero2 == 1 && hidalgo2 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		}
		
		 else if (diaz2 == 1 && zapata1 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			 intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz2 == 1 && zapata2 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz1 == 1 && zapata1 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz1 == 1 && zapata2 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz2 == 1 && iturbide1 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz2 == 1 && iturbide2 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz2 == 1 && morelos1 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.morelos1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz2 == 1 && morelos2 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.morelos2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz2 == 1 && obregon1 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.obregon1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz2 == 1 && obregon2 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.obregon2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz2 == 1 && victoria1 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.victoria1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz2 == 1 && victoria2 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.victoria2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		}else if (diaz2 == 1 && ana1 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz2 == 1 && ana2 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz2 == 1 && moctezuma1 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz2 == 1 && moctezuma2 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		}  else if (diaz1 == 1 && hidalgo1 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz1 == 1 && hidalgo2 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz2 == 1 && madero1 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.madero1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz2 == 1 && madero2 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.madero2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz1 == 1 && iturbide1 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz1 == 1 && iturbide2 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz1 == 1 && morelos1 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.morelos1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz1 == 1 && morelos2 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.morelos2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		}else if (diaz1 == 1 && obregon1 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.obregon1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz1 == 1 && obregon2 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.obregon2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz1 == 1 && victoria1 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.victoria1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz1 == 1 && victoria2 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.victoria2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz1 == 1 && ana1 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz1 == 1 && ana2 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz1 == 1 && moctezuma1 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz1 == 1 && moctezuma2 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz1 == 1 && villa2 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.villa2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz1 == 1 && madero1 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.madero1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz1 == 1 && madero2 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.madero2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		}  else if (diaz1 == 1 && hidalgo1 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz1 == 1 && hidalgo2 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz2 == 1 && hidalgo1 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (diaz2 == 1 && hidalgo2 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} 
		
		//votar hidalgo
		
		else if (hidalgo2 == 1 && zapata1 == 1) {
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (hidalgo2 == 1 && zapata2 == 1) {
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (hidalgo1 == 1 && zapata1 == 1) {
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (hidalgo1 == 1 && zapata2 == 1) {
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (hidalgo2 == 1 && iturbide1 == 1) {
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (hidalgo2 == 1 && iturbide2 == 1) {
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (hidalgo2 == 1 && morelos1 == 1) {
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			raiz.memorama.morelos1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (hidalgo2 == 1 && morelos2 == 1) {
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			raiz.memorama.morelos2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (hidalgo2 == 1 && obregon1 == 1) {
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			raiz.memorama.obregon1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (hidalgo2 == 1 && obregon2 == 1) {
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			raiz.memorama.obregon2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (hidalgo2 == 1 && victoria1 == 1) {
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			raiz.memorama.victoria1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (hidalgo2 == 1 && victoria2 == 1) {
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			raiz.memorama.victoria2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		}else if (hidalgo2 == 1 && ana1 == 1) {
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (hidalgo2 == 1 && ana2 == 1) {
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (hidalgo2 == 1 && moctezuma1 == 1) {
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (hidalgo2 == 1 && moctezuma2 == 1) {
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (hidalgo2 == 1 && madero1 == 1) {
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			raiz.memorama.madero1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (hidalgo2 == 1 && madero2 == 1) {
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			raiz.memorama.madero2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (hidalgo1 == 1 && iturbide1 == 1) {
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (hidalgo1 == 1 && iturbide2 == 1) {
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (hidalgo1 == 1 && morelos1 == 1) {
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			raiz.memorama.morelos1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (hidalgo1 == 1 && morelos2 == 1) {
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			raiz.memorama.morelos2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		}else if (hidalgo1 == 1 && obregon1 == 1) {
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			raiz.memorama.obregon1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (hidalgo1 == 1 && obregon2 == 1) {
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			raiz.memorama.obregon2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (hidalgo1 == 1 && victoria1 == 1) {
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			raiz.memorama.victoria1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (hidalgo1 == 1 && victoria2 == 1) {
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			raiz.memorama.victoria2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (hidalgo1 == 1 && ana1 == 1) {
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (hidalgo1 == 1 && ana2 == 1) {
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (hidalgo1 == 1 && moctezuma1 == 1) {
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (hidalgo1 == 1 && moctezuma2 == 1) {
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} 
		
		
		//votar zapata
		
		 else if (zapata2 == 1 && iturbide1 == 1) {
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
			 intentos = intentos -1
			raiz.trys.text = intentos
		} else if (zapata2 == 1 && iturbide2 == 1) {
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (zapata2 == 1 && morelos1 == 1) {
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			raiz.memorama.morelos1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (zapata2 == 1 && morelos2 == 1) {
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			raiz.memorama.morelos2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (zapata2 == 1 && obregon1 == 1) {
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			raiz.memorama.obregon1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (zapata2 == 1 && obregon2 == 1) {
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			raiz.memorama.obregon2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (zapata2 == 1 && victoria1 == 1) {
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			raiz.memorama.victoria1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (zapata2 == 1 && victoria2 == 1) {
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			raiz.memorama.victoria2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		}else if (zapata2 == 1 && ana1 == 1) {
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (zapata2 == 1 && ana2 == 1) {
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (zapata2 == 1 && moctezuma1 == 1) {
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (zapata2 == 1 && moctezuma2 == 1) {
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (zapata1 == 1 && iturbide1 == 1) {
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (zapata1 == 1 && iturbide2 == 1) {
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (zapata1 == 1 && morelos1 == 1) {
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			raiz.memorama.morelos1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (zapata1 == 1 && morelos2 == 1) {
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			raiz.memorama.morelos2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		}else if (zapata1 == 1 && obregon1 == 1) {
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			raiz.memorama.obregon1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (zapata1 == 1 && obregon2 == 1) {
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			raiz.memorama.obregon2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (zapata1 == 1 && victoria1 == 1) {
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			raiz.memorama.victoria1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (zapata1 == 1 && victoria2 == 1) {
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			raiz.memorama.victoria2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (zapata1 == 1 && ana1 == 1) {
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (zapata1 == 1 && ana2 == 1) {
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (zapata1 == 1 && moctezuma1 == 1) {
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (zapata1 == 1 && moctezuma2 == 1) {
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} 
		
		//votar obregon
		
		 else if (obregon2 == 1 && iturbide1 == 1) {
			raiz.memorama.obregon2_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
			 intentos = intentos -1
			raiz.trys.text = intentos
		} else if (obregon2 == 1 && iturbide2 == 1) {
			raiz.memorama.obregon2_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (obregon2 == 1 && morelos1 == 1) {
			raiz.memorama.obregon2_mc.gotoAndStop(0)
			raiz.memorama.morelos1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (obregon2 == 1 && morelos2 == 1) {
			raiz.memorama.obregon2_mc.gotoAndStop(0)
			raiz.memorama.morelos2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (obregon2 == 1 && victoria1 == 1) {
			raiz.memorama.obregon2_mc.gotoAndStop(0)
			raiz.memorama.victoria1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (obregon2 == 1 && victoria2 == 1) {
			raiz.memorama.obregon2_mc.gotoAndStop(0)
			raiz.memorama.victoria2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		}else if (obregon2 == 1 && ana1 == 1) {
			raiz.memorama.obregon2_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (obregon2 == 1 && ana2 == 1) {
			raiz.memorama.obregon2_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (obregon2 == 1 && moctezuma1 == 1) {
			raiz.memorama.obregon2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (obregon2 == 1 && moctezuma2 == 1) {
			raiz.memorama.obregon2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (obregon1 == 1 && iturbide1 == 1) {
			raiz.memorama.obregon1_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (obregon1 == 1 && iturbide2 == 1) {
			raiz.memorama.obregon1_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (obregon1 == 1 && morelos1 == 1) {
			raiz.memorama.obregon1_mc.gotoAndStop(0)
			raiz.memorama.morelos1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (obregon1 == 1 && morelos2 == 1) {
			raiz.memorama.obregon1_mc.gotoAndStop(0)
			raiz.memorama.morelos2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (obregon1 == 1 && victoria1 == 1) {
			raiz.memorama.obregon1_mc.gotoAndStop(0)
			raiz.memorama.victoria1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (obregon1 == 1 && victoria2 == 1) {
			raiz.memorama.obregon1_mc.gotoAndStop(0)
			raiz.memorama.victoria2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (obregon1 == 1 && ana1 == 1) {
			raiz.memorama.obregon1_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (obregon1 == 1 && ana2 == 1) {
			raiz.memorama.obregon1_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (obregon1 == 1 && moctezuma1 == 1) {
			raiz.memorama.obregon1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (obregon1 == 1 && moctezuma2 == 1) {
			raiz.memorama.obregon1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} 
		
		//votar morelos
		
		 else if (morelos2 == 1 && iturbide1 == 1) {
			raiz.memorama.morelos2_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
			 intentos = intentos -1
			raiz.trys.text = intentos
		} else if (morelos2 == 1 && iturbide2 == 1) {
			raiz.memorama.morelos2_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (morelos2 == 1 && victoria1 == 1) {
			raiz.memorama.morelos2_mc.gotoAndStop(0)
			raiz.memorama.victoria1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (morelos2 == 1 && victoria2 == 1) {
			raiz.memorama.morelos2_mc.gotoAndStop(0)
			raiz.memorama.victoria2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		}else if (morelos2 == 1 && ana1 == 1) {
			raiz.memorama.morelos2_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (morelos2 == 1 && ana2 == 1) {
			raiz.memorama.morelos2_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (morelos2 == 1 && moctezuma1 == 1) {
			raiz.memorama.morelos2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (morelos2 == 1 && moctezuma2 == 1) {
			raiz.memorama.morelos2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (morelos1 == 1 && iturbide1 == 1) {
			raiz.memorama.morelos1_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (morelos1 == 1 && iturbide2 == 1) {
			raiz.memorama.morelos1_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (morelos1 == 1 && victoria1 == 1) {
			raiz.memorama.morelos1_mc.gotoAndStop(0)
			raiz.memorama.victoria1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (morelos1 == 1 && victoria2 == 1) {
			raiz.memorama.morelos1_mc.gotoAndStop(0)
			raiz.memorama.victoria2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (morelos1 == 1 && ana1 == 1) {
			raiz.memorama.morelos1_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (morelos1 == 1 && ana2 == 1) {
			raiz.memorama.morelos1_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (morelos1 == 1 && moctezuma1 == 1) {
			raiz.memorama.morelos1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (morelos1 == 1 && moctezuma2 == 1) {
			raiz.memorama.morelos1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		
		} 
		
		//votar victoria
		
		 else if (victoria2 == 1 && iturbide1 == 1) {
			raiz.memorama.victoria2_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
			 intentos = intentos -1
			raiz.trys.text = intentos
		} else if (victoria2 == 1 && iturbide2 == 1) {
			raiz.memorama.victoria2_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		}else if (victoria2 == 1 && ana1 == 1) {
			raiz.memorama.victoria2_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (victoria2 == 1 && ana2 == 1) {
			raiz.memorama.victoria2_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (victoria2 == 1 && moctezuma1 == 1) {
			raiz.memorama.victoria2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (victoria2 == 1 && moctezuma2 == 1) {
			raiz.memorama.victoria2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (victoria1 == 1 && iturbide1 == 1) {
			raiz.memorama.victoria1_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (victoria1 == 1 && iturbide2 == 1) {
			raiz.memorama.victoria1_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (victoria1 == 1 && ana1 == 1) {
			raiz.memorama.victoria1_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (victoria1 == 1 && ana2 == 1) {
			raiz.memorama.victoria1_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (victoria1 == 1 && moctezuma1 == 1) {
			raiz.memorama.victoria1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (victoria1 == 1 && moctezuma2 == 1) {
			raiz.memorama.victoria1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} 
		
		//votar victoria
		
		 else if (moctezuma2 == 1 && iturbide1 == 1) {
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
			 intentos = intentos -1
			raiz.trys.text = intentos
		} else if (moctezuma2 == 1 && iturbide2 == 1) {
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		}else if (moctezuma2 == 1 && ana1 == 1) {
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (moctezuma2 == 1 && ana2 == 1) {
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (moctezuma1 == 1 && iturbide1 == 1) {
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (moctezuma1 == 1 && iturbide2 == 1) {
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (moctezuma1 == 1 && ana1 == 1) {
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (moctezuma1 == 1 && ana2 == 1) {
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		}
		
		//votar ana
		
		 else if (ana2 == 1 && iturbide1 == 1) {
			raiz.memorama.ana2_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
			 intentos = intentos -1
			raiz.trys.text = intentos
		} else if (ana2 == 1 && iturbide2 == 1) {
			raiz.memorama.ana2_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (ana1 == 1 && iturbide1 == 1) {
			raiz.memorama.ana1_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		} else if (ana1 == 1 && iturbide2 == 1) {
			raiz.memorama.ana1_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
			intentos = intentos -1
			raiz.trys.text = intentos
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// Layer 1
	this.instance = new lib.Tween1();
	this.instance.parent = this;
	this.instance.setTransform(535.7,586.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:713.8,y:583.5},7).to({x:535.7,y:586.1},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(462.7,550.1,281.8,126.8);


(lib.ans_vhuerta_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hit5();
	this.instance.parent = this;
	this.instance.setTransform(161.2,24.6,1,1,0,0,0,184.3,22.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.hit5(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.6,-0.2,424,40.4);


(lib.achivements = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.estre3 = new lib.estre3();
	this.estre3.name = "estre3";
	this.estre3.parent = this;
	this.estre3.setTransform(37.5,1.3);

	this.estre2 = new lib.estre2();
	this.estre2.name = "estre2";
	this.estre2.parent = this;
	this.estre2.setTransform(18.8,0.8);

	this.estre1 = new lib.estre1();
	this.estre1.name = "estre1";
	this.estre1.parent = this;
	this.estre1.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.estre1},{t:this.estre2},{t:this.estre3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.achivements, null, null);


(lib.triunfo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.nextlevel.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("memomexrock2.html", "_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa 1
	this.instance = new lib.achivements();
	this.instance.parent = this;
	this.instance.setTransform(93.7,303.5,3.12,3.12,0,0,0,28.4,9.3);

	this.nextlevel = new lib._50();
	this.nextlevel.name = "nextlevel";
	this.nextlevel.parent = this;
	this.nextlevel.setTransform(279.2,319.4,1,1,0,0,0,33.4,25.3);
	new cjs.ButtonHelper(this.nextlevel, 0, 1, 2, false, new lib._50(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape.setTransform(442.8,265.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_1.setTransform(430.5,265.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AghBQIAAgVIAFAAQAGAAACgBIACgCIABgIIAAhhIgQAAIAAgVQAUgBAUgIIALAAIAAB/IAAAHQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQACABAHAAIAEAAIAAAVg");
	this.shape_2.setTransform(420.4,263.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_3.setTransform(412.5,263.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_4.setTransform(401.9,265.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AghBSIAAgVIAGAAIAIAAIACgCQABgCAAgEIAAg0IgRAAIAAgUIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgegzIAYgVQAJgJAIAAQAHAAAFAEQAEAFAAAHQAAAFgEAFQgEAFgKACIgiAIg");
	this.shape_5.setTransform(391.5,263);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgwBQIAAgVIAFAAQAHAAABgBIACgCIABgIIAAg1IgQAAIAAgXIAQAAIAAgLQAAgMAEgIQAFgJALgGQAMgFAOAAQAQAAAKAHQAJAHAAAIQAAAHgEAEQgEAEgHAAIgGgBIgEgCIgGgGIgFgEIgDgBQgEAAgCADQgCADAAALIAAALIASAAIAAAXIgSAAIAAA1IAAAIIADACIAHABIAGAAIAAAVg");
	this.shape_6.setTransform(384.5,263.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_7.setTransform(374.9,263.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgnBLQgKgHgIgNQgGgOAAgRQAAgQAHgNQAGgNALgHQAMgHANAAQAIAAAFACQAGACAIAEIAAgaIgPAAIAAgVQANgCAIgCQAJgCAJgDIALAAIAAB+QAAAHAAACIACACQACABAHAAIAFAAIAAAVIgwACIAAgMQgJAIgIACQgHADgIAAQgNAAgKgHgAgOgEQgGAEgCAFQgDAIAAALQgBAPAHAJQAGAHAIABIAGgBIAMgHIAAglQAAgHgBgCQgCgEgEgDQgFgDgFAAQgFAAgFAEg");
	this.shape_8.setTransform(363.7,263.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_9.setTransform(335.3,265.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AAYA2QgGgEgFgGQgLAHgIADQgJADgIAAQgQAAgKgJQgJgJAAgNQAAgHADgGQADgGAHgFQAGgDAPgEQANgDATgCIAAgIIgBgKQgBgDgDgBQgDgCgEAAIgHABIgEADIgFAHQgDAHgEADQgEADgGAAQgGAAgFgFQgFgEABgGQgBgIAFgFQAGgIAMgFQANgFAOAAQAPAAALAFQAKAFAFAHQADAHAAAOIAAAmQAAAHABACQABABAAAAQAAABAAAAQABABAAAAQABAAABABQACABADAAIAIgBIAAAVQgJADgJAAQgJAAgIgDgAgMAMQgFACgDADQgCADAAADQAAAFADADQADADAGAAQAEAAAEgCIAKgGIAAgTQgNACgHADg");
	this.shape_10.setTransform(323.1,265.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AAoA4IAAgVQAHAAABgBIADgCQABgBAAgGIAAgnQAAgHgBgCIgDgEQgDgCgEABQgEAAgFABQgFACgKAHIAAAqQAAAGABACQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQACABAHAAIAAAVIg7AAIAAgVQAHAAACgBIADgCIAAgIIAAgkQAAgKgBgCQgDgEgGAAIgGAAQgEABgDACIgJAGIgCABIAAAqIAAAIIADACIAGABIADAAIAAAVIg/AAIAAgVIAEAAQAHAAABgBQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABgCAAgGIAAgxIgQAAIAAgUQAUgCARgIIAKAAIAAAPQAJgHAKgEQAKgEAKAAQAHAAAGACQAFACAEADQAEADADAGQAKgJAKgDQAKgEAKAAQAJAAAHADQAHAEAEAFQAFAFABAHIABALIAAAtQAAAFABACQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAQABABAHAAIAEAAIAAAVg");
	this.shape_11.setTransform(305.5,265.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_12.setTransform(273,265.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_13.setTransform(260.7,265.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgZBmQgJgDgDgGQgEgFAAgGQAAgGAFgEQAEgEAHAAQADAAAFACQAEADAFAGQADAEADAAQACAAACgDQADgDAAgIIAAheIgQAAIAAgVQALAAAKgDQAJgCALgFIAJAAIAAB0QAAARgEAIQgFAJgLAGQgLAFgOAAQgMAAgHgDgAAIhGQgGgGAAgIQAAgJAGgFQAGgGAIAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgGgGg");
	this.shape_14.setTransform(248.6,265.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AAYA2QgGgEgFgGQgLAHgIADQgJADgIAAQgQAAgKgJQgJgJAAgNQgBgHAEgGQADgGAHgFQAHgDAOgEQANgDATgCIAAgIIgBgKQgBgDgDgBQgDgCgEAAIgHABIgEADIgFAHQgDAHgEADQgEADgGAAQgGAAgFgFQgFgEAAgGQAAgIAFgFQAGgIAMgFQANgFAOAAQAPAAALAFQAKAFAFAHQADAHAAAOIAAAmQAAAHABACQABABAAAAQAAABAAAAQABABAAAAQABAAAAABQADABADAAIAIgBIAAAVQgJADgJAAQgJAAgIgDgAgMAMQgFACgDADQgCADAAADQAAAFADADQADADAGAAQAEAAAEgCIAKgGIAAgTQgOACgGADg");
	this.shape_15.setTransform(240.2,265.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AAEA4IAAgVIAIAAQABgBABAAQAAAAABAAQAAgBAAAAQABgBAAAAQABgCAAgFIAAgoQAAgIgBgCQgDgDgGAAQgFAAgEABQgFACgJAHIAAArQgBAGACADQABABAHAAIADAAIAAAVIhAAAIAAgVIAEAAQAHAAACgBIADgCIAAgHIAAgyIgQAAIAAgUQAUgDARgHIAKAAIAAAPQAMgIAJgEQAIgDAKAAQAKAAAJAEQAHAFAEAHQAEAHAAAMIAAAtIABAHIADADIAHAAIAFAAIAAAVg");
	this.shape_16.setTransform(226.2,265.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAPgHQAOgIARAAQATAAANAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgbAAgRgQgAgLgcQgFADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgHgJQgGgIgKAAQgFAAgGAEg");
	this.shape_17.setTransform(211.4,265.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_18.setTransform(198.7,265.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AguA4IAAgVIAGAAQAGAAABgBIADgCIAAgHIAAgyIgQAAIAAgUQASgBATgJIAKAAIAAAQQAIgJAHgEQAGgDAGAAQAFAAAFACQAEADACAFQADAEAAAFQAAAIgFAFQgEAFgJAAIgDAAIgIgCIgEgBQgDAAgHAEIAAAqQAAAFABACQAAAAABAAQAAABAAAAQAAAAABABQAAAAABAAQACABAGAAIAFAAIAAAVg");
	this.shape_19.setTransform(188.1,265.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_20.setTransform(176,265.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("Ag+BQIAAgVIAEAAIAJAAIACgDIABgIIAAhhIgQAAIAAgVIAVgEQAHgBAJgFIALAAIAAANQAMgIAGgCQAGgDAHAAQAUAAAMAPQANAQAAAZQABAYgMAPQgOATgXAAQgIAAgGgBIgLgHIAAAWIABAIIACADIAIAAIAFAAIAAAVgAgLgtIAAAjQABAJABADQABADAFACQADACAFAAQAIAAAGgHQAGgIAAgQQAAgQgFgIQgFgHgIAAQgHAAgLAIg");
	this.shape_21.setTransform(162.3,268.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AAEA4IAAgVIAIAAQABgBABAAQAAAAABAAQAAgBAAAAQABgBAAAAQABgCAAgFIAAgoQAAgIgCgCQgDgDgFAAQgFAAgEABQgGACgIAHIAAArQgBAGACADQACABAGAAIADAAIAAAVIhAAAIAAgVIADAAQAIAAACgBIADgCIABgHIAAgyIgRAAIAAgUQAUgDARgHIAKAAIAAAPQAMgIAJgEQAIgDAKAAQAKAAAJAEQAHAFAEAHQAEAHAAAMIAAAtIABAHIADADIAHAAIAFAAIAAAVg");
	this.shape_22.setTransform(140.2,265.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAIgMANgHQAOgIASAAQASAAAOAHQAOAIAIAMQAHANAAAQQAAAZgQAQQgRAQgcAAQgbAAgRgQgAgKgcQgGADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgGgJQgHgIgKAAQgFAAgFAEg");
	this.shape_23.setTransform(125.4,265.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_24.setTransform(112.1,265.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AAnBQIgBgFIhkAAIAAgVQAXgPAigcQAQgNAGgLQAEgIAAgIQAAgKgIgGQgIgHgMAAQgKAAgIAEQgHADgEAHQgEAHAAAHIAAAIIgWACIgBgLQAAgQAIgMQAHgLAQgIQAPgHASAAQARAAAOAGQAOAHAIAKQAHALAAALQAAAMgFAKQgGAMgNAJQgMALgmAXIAkAAQAJAAADgBIAEgDIADgKIABgFIAVAAIgKA4g");
	this.shape_25.setTransform(406.9,231.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AghBQIAAgVIAFAAQAGAAACgBIADgCIAAgIIAAhhIgQAAIAAgVQAUgBAUgIIALAAIAAB/IAAAHQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQACABAHAAIAEAAIAAAVg");
	this.shape_26.setTransform(388.3,230.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_27.setTransform(377.8,233.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgOA2IglhQIgDgEIgEgCIgIgBIAAgVIBCAAIAAAVIgCAAQgHAAgBACQgBAAAAAAQgBABAAAAQAAABAAAAQAAAAAAABIABAFIAQApIASgpIABgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQgCgCgGAAIgGAAIAAgVIA7AAIAAAVIgIABIgFADIgDAGIgkBNg");
	this.shape_28.setTransform(364.7,233.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_29.setTransform(354,230.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AAEA4IAAgVIAJgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgCAAgGIAAgmQAAgJgCgBQgDgFgFAAQgFAAgEACQgGADgIAGIAAAqQAAAIABABQABACAHAAIADAAIAAAVIg/AAIAAgVIACAAQAIAAACgBIADgCIABgHIAAgxIgQAAIAAgWQATgCARgHIAKAAIAAAPQANgIAIgDQAJgEAIAAQALAAAJAFQAHAEAEAHQAEAGAAANIAAAsIAAAIIAEACIAHABIAFAAIAAAVg");
	this.shape_30.setTransform(342.5,233.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AghBQIAAgVIAEAAQAHAAACgBIACgCIABgIIAAhhIgQAAIAAgVQAUgBATgIIALAAIAAB/IABAHQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQACABAHAAIAEAAIAAAVg");
	this.shape_31.setTransform(323.4,230.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_32.setTransform(312.9,233.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AAYA2QgGgEgFgGQgLAHgIADQgJADgIAAQgQAAgKgJQgJgJAAgNQgBgHAEgGQADgGAHgFQAGgDAPgEQANgDATgCIAAgIIgBgKQgBgDgDgBQgDgCgEAAIgHABIgEADIgFAHQgDAHgEADQgEADgGAAQgGAAgFgFQgFgEAAgGQAAgIAFgFQAGgIANgFQAMgFAOAAQAPAAALAFQAKAFAFAHQADAHAAAOIAAAmQAAAHABACQABABAAAAQAAABAAAAQABABAAAAQABAAAAABQADABADAAIAJgBIAAAVQgKADgJAAQgJAAgIgDgAgMAMQgFACgDADQgCADAAADQAAAFADADQADADAGAAQAEAAAEgCIAKgGIAAgTQgOACgGADg");
	this.shape_33.setTransform(292.4,233.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AguA4IAAgVIAGAAQAGAAABgBIADgCIAAgIIAAgwIgQAAIAAgWQASgBATgIIAKAAIAAAQQAIgJAHgDQAGgEAGAAQAFAAAFADQAEACACAEQADAGAAAEQAAAIgFAFQgEAGgJgBIgDAAIgIgCIgEgBQgDAAgHAEIAAApQAAAGABACQAAAAABAAQAAABAAAAQAAAAABABQAAAAABAAIAIABIAFAAIAAAVg");
	this.shape_34.setTransform(281.1,233.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAIgMANgHQAOgIASAAQASAAAOAHQAOAIAIAMQAHANAAAQQAAAZgQAQQgRAQgcAAQgbAAgRgQgAgKgcQgGADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgGgJQgHgIgKAAQgFAAgFAEg");
	this.shape_35.setTransform(268.5,233.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AAEBQIAAgVIAEAAIAGgBIADgCIAAgIIAAgmQAAgHgBgCIgDgEQgCgBgEAAQgFAAgFACQgFACgIAFIAAArIAAAIIADACIAHABIACAAIAAAVIhAAAIAAgVIAHAAQAFAAABgBIADgCIAAgHIAAhiIgQAAIAAgVQAKgBALgCQALgDAJgDIALAAIAAA8QAKgGAIgDQAIgDAIAAQAKAAAIAFQAIAEAEAHQAEAHAAAKIAAAtIABAJQAAAAAAABQAAAAABAAQAAABABAAQAAAAABABIAIAAIAFAAIAAAVg");
	this.shape_36.setTransform(254.1,230.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AAZA2QgIgEgEgGQgLAHgIADQgJADgJAAQgPAAgKgJQgKgJABgNQAAgHADgGQAEgGAGgFQAGgDAOgEQAOgDATgCIAAgIIgBgKQgBgDgEgBQgCgCgEAAIgHABIgFADIgEAHQgDAHgEADQgEADgGAAQgGAAgFgFQgEgEgBgGQABgIAEgFQAGgIANgFQAMgFAPAAQAOAAALAFQAKAFAEAHQAFAHAAAOIAAAmQAAAHABACQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQADABAEAAIAIgBIAAAVQgKADgIAAQgLAAgGgDgAgLAMQgGACgCADQgDADAAADQAAAFADADQAEADAFAAQAEAAAFgCIAJgGIAAgTQgOACgFADg");
	this.shape_37.setTransform(240,233.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AAYA2QgHgEgEgGQgLAHgIADQgJADgIAAQgQAAgKgJQgJgJAAgNQgBgHAEgGQADgGAHgFQAGgDAOgEQAOgDATgCIAAgIIgBgKQgCgDgCgBQgDgCgEAAIgHABIgFADIgEAHQgDAHgEADQgEADgGAAQgGAAgFgFQgFgEAAgGQAAgIAFgFQAGgIANgFQAMgFAPAAQAOAAALAFQAKAFAEAHQAFAHAAAOIAAAmQAAAHAAACQABABAAAAQAAABAAAAQABABAAAAQABAAAAABQADABAEAAIAIgBIAAAVQgKADgIAAQgKAAgIgDgAgLAMQgGACgDADQgCADAAADQAAAFADADQADADAGAAQAEAAAEgCIAKgGIAAgTQgOACgFADg");
	this.shape_38.setTransform(219.4,233.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AgFBHQgIgCgFgFQgGgFgCgFQgCgFAAgLIAAgyIgRAAIAAgWQAJgCAGgGQAHgFAEgHQADgIACgLIAUAAIAAAlIAjAAIAAAYIgjAAIAAAlQAAAMABAFQACADADACQAFADAGAAQAMAAALgHIAAAXQgKAEgHACQgIACgJAAQgKAAgHgDg");
	this.shape_39.setTransform(207.6,231.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AAEA4IAAgVIAIgBQABAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgCAAgGIAAgmQAAgJgCgBQgDgFgFAAQgFAAgEACQgGADgIAGIAAAqQgBAIACABQACACAGAAIADAAIAAAVIhAAAIAAgVIADAAQAIAAACgBIADgCIABgHIAAgxIgRAAIAAgWQAUgCARgHIAKAAIAAAPQAMgIAJgDQAIgEAKAAQAKAAAJAFQAHAEAEAHQAEAGAAANIAAAsIABAIIADACIAHABIAFAAIAAAVg");
	this.shape_40.setTransform(195.1,233.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_41.setTransform(180.7,233.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AgFBHQgIgCgFgFQgGgFgCgFQgCgFAAgLIAAgyIgRAAIAAgWQAJgCAGgGQAHgFAEgHQADgIACgLIAUAAIAAAlIAjAAIAAAYIgjAAIAAAlQAAAMABAFQACADADACQAFADAGAAQAMAAALgHIAAAXQgKAEgHACQgIACgJAAQgKAAgHgDg");
	this.shape_42.setTransform(169.1,231.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AAFA4IAAgVIAIgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgCAAgGIAAgmQAAgJgCgBQgDgFgFAAQgFAAgEACQgGADgJAGIAAAqQAAAIACABQABACAGAAIAEAAIAAAVIg/AAIAAgVIACAAQAIAAACgBIADgCIABgHIAAgxIgQAAIAAgWQATgCARgHIAKAAIAAAPQANgIAIgDQAJgEAIAAQALAAAIAFQAJAEADAHQAEAGAAANIAAAsIAAAIIAEACIAHABIAFAAIAAAVg");
	this.shape_43.setTransform(156.5,233.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AgkBMIAAgVIAGAAQAGAAACgBIADgDIABgIIAAhUQAAgHgBgCQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAQgBgBgGAAIgHAAIAAgVIBJAAIAAAVIgHAAIgHABQgBAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQgBACAAAHIAABTQAAAHABACQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAABQADABAEAAIAIAAIAAAVg");
	this.shape_44.setTransform(144.2,231.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF0000").s().p("AgTBnIAAgnIAnAAIAAAngAgKAyIgKhoIAAgwIApAAIAAAwIgKBog");
	this.shape_45.setTransform(396.2,199.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF0000").s().p("AgvBMIAAiUIAkAAIAAAVQAKgPAGgFQAIgEAJAAQAOAAAMAHIgMAiQgKgGgIAAQgJAAgFAFQgFAEgDAMQgEAMAAAlIAAAug");
	this.shape_46.setTransform(387,202.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF0000").s().p("Ag4BCQgNgNAAgUQAAgMAGgKQAGgKALgEQALgFAUgEQAbgFAKgFIAAgEQAAgMgFgEQgFgFgQAAQgKAAgGAEQgFAEgFALIgjgHQAGgVAPgLQAOgKAeAAQAZAAANAGQANAGAFAKQAGAJAAAaIgBAtQAAAUACAJQACAKAFALIgnAAIgEgMIgBgFQgKAKgMAFQgLAFgNAAQgWAAgOgMgAAAAJQgRAEgFADQgIAFAAAJQABAIAFAGQAHAGAJAAQAKAAAJgHQAIgFACgIQACgFgBgPIAAgHIgWAGg");
	this.shape_47.setTransform(372.4,202.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF0000").s().p("AgzBdQgQgNAAgTIAAgFIAtAGQACAHAEADQAFAFALgBQAQAAAIgEQAFgEACgGQACgFAAgNIAAgWQgRAYgaAAQgfAAgRgaQgOgTAAgdQAAgmASgUQASgUAbAAQAbAAASAZIAAgWIAlAAIAACFQAAAbgFANQgEANgIAHQgIAIgNAEQgNAFgUAAQglgBgQgNgAgWhAQgJAKAAAXQAAAYAJAKQAJALANAAQAOAAAKgLQAKgKAAgXQAAgXgKgLQgJgMgPAAQgNAAgJAMg");
	this.shape_48.setTransform(355.2,205.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF0000").s().p("AgsBGQgMgHgGgMQgFgMAAgVIAAheIAoAAIAABFQAAAfACAHQACAHAGAEQAFAEAJAAQAJAAAIgFQAIgGADgIQADgIAAggIAAg/IAoAAIAACVIglAAIAAgWQgIALgNAIQgNAGgOAAQgPABgMgHg");
	this.shape_49.setTransform(337.9,202.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF0000").s().p("AgVCEIgOgDIAGgiIAGABIAEABQAGAAAEgDQAEgDABgDQACgEAAgSIAAiOIAmAAIAACQQAAAdgEALQgDAMgLAHQgLAGgPAAIgNgBgAgChgIAAgkIAmAAIAAAkg");
	this.shape_50.setTransform(323.4,202.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF0000").s().p("AgvBMIAAiUIAkAAIAAAVQAKgPAGgFQAIgEAJAAQAOAAAMAHIgMAiQgKgGgIAAQgJAAgFAFQgFAEgDAMQgEAMAAAlIAAAug");
	this.shape_51.setTransform(308.6,202.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF0000").s().p("AgmBFQgSgKgLgRQgJgSAAgaQAAgTAJgSQALgTARgJQASgKAVAAQAiAAAWAWQAVAWAAAhQAAAigVAVQgWAXgiAAQgTAAgTgJgAgZghQgKALAAAWQAAAWAKAMQAKALAPAAQAPAAALgLQALgMAAgWQAAgVgLgMQgLgMgPAAQgPAAgKAMg");
	this.shape_52.setTransform(293.2,202.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF0000").s().p("AhIBpIAAjOIAlAAIAAAWQAHgLANgHQAMgHAOAAQAaAAASAUQASAVAAAkQAAAlgSAUQgTAVgaAAQgLAAgKgFQgKgFgLgMIAABMgAgXg9QgKALAAAWQAAAZAKALQAKAMAOAAQANAAAKgLQAJgKAAgZQAAgYgKgLQgJgMgOAAQgNAAgKAMg");
	this.shape_53.setTransform(275.9,205.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF0000").s().p("AgtBCQgSgNgGgVIAogGQADAMAHAFQAIAHANAAQAPAAAIgHQAFgDAAgHQAAgFgCgDQgDgCgLgCQgvgLgMgJQgSgLAAgVQAAgUAPgNQAQgNAgAAQAdAAAPAKQAPAKAGATIglAHQgDgIgGgFQgHgFgMAAQgPAAgHAEQgEADAAAFQAAAFAEADQAFADAfAIQAfAHANAKQAMAKAAATQAAAUgRAPQgRAPgiAAQgdAAgSgMg");
	this.shape_54.setTransform(250.3,202.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0000").s().p("Ag4BCQgNgNAAgUQAAgMAGgKQAGgKALgEQALgFAUgEQAbgFAKgFIAAgEQABgMgGgEQgGgFgPAAQgKAAgGAEQgFAEgFALIgjgHQAGgVAPgLQAOgKAeAAQAZAAANAGQANAGAFAKQAGAJAAAaIgBAtQAAAUACAJQACAKAFALIgnAAIgEgMIgBgFQgKAKgMAFQgLAFgNAAQgWAAgOgMgAAAAJQgRAEgFADQgIAFAAAJQABAIAFAGQAHAGAJAAQAKAAAKgHQAHgFACgIQACgFgBgPIAAgHIgWAGg");
	this.shape_55.setTransform(234.7,202.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF0000").s().p("AgTBnIAAiVIAnAAIAACVgAgThCIAAgkIAnAAIAAAkg");
	this.shape_56.setTransform(222.6,199.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF0000").s().p("AgyA5QgTgVgBgkQABgkATgUQAUgVAgAAQAbAAAQAMQARAMAHAYIgnAHQgDgMgGgGQgIgGgKAAQgPAAgIAKQgJAKAAAYQAAAZAJALQAJALAOAAQALAAAIgFQAHgHADgQIAmAHQgFAagSAOQgRAOgdAAQggAAgTgVg");
	this.shape_57.setTransform(210.9,202.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF0000").s().p("Ag4BCQgNgNAAgUQAAgMAGgKQAGgKALgEQALgFAUgEQAbgFAKgFIAAgEQABgMgGgEQgGgFgPAAQgKAAgGAEQgFAEgFALIgjgHQAGgVAPgLQAOgKAeAAQAZAAANAGQANAGAFAKQAGAJAAAaIgBAtQAAAUACAJQACAKAFALIgnAAIgEgMIgBgFQgKAKgMAFQgLAFgNAAQgWAAgOgMgAAAAJQgRAEgFADQgIAFAAAJQABAIAFAGQAHAGAJAAQAKAAAKgHQAHgFACgIQACgFgBgPIAAgHIgWAGg");
	this.shape_58.setTransform(194.6,202.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF0000").s().p("AgvBMIAAiUIAkAAIAAAVQAKgPAGgFQAIgEAJAAQAOAAAMAHIgMAiQgKgGgIAAQgJAAgFAFQgFAEgDAMQgEAMAAAlIAAAug");
	this.shape_59.setTransform(182.1,202.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF0000").s().p("AgvBdQgYgOgMgZQgMgZAAgdQAAggANgZQAOgZAagNQATgLAdABQAmgBAWARQAVAQAHAcIgqAHQgEgOgMgJQgMgJgSAAQgaAAgQARQgRARAAAiQAAAkARASQAQATAZAAQAOAAANgFQANgGAJgGIAAgbIgvAAIAAghIBZAAIAABRQgNAMgZAKQgYAKgagBQgfAAgYgNg");
	this.shape_60.setTransform(164,199.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("AgOAPQgFgGgBgJQABgHAFgGQAHgGAHAAQAJAAAFAGQAHAGAAAHQAAAJgHAGQgFAFgJAAQgHAAgHgFg");
	this.shape_61.setTransform(387.2,175.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("AABBQIAAgVIAEAAIAFgBIABgCQAAgBgDgFIgMgQIgNAKIAAAGIABAGIACACIAFABIADAAIAAAVIg+AAIAAgVIAFAAIAIgBIADgDIAAgJIAAhfIgQAAIAAgVQASgBAXgIIAKAAIAABhIAUgSIAEgCIABgCQAAAAgBAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgGgBIgEAAIAAgVIBDAAIAAAVIgKABIgMAGIgVAQIAeAjQAEAGADABQADABAJAAIAAAVg");
	this.shape_62.setTransform(376.5,169.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333333").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_63.setTransform(362.3,172.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAOgHQAPgIARAAQASAAAOAHQAOAIAIAMQAHANAAAQQAAAZgQAQQgRAQgcAAQgbAAgRgQgAgKgcQgGADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgGgJQgHgIgKAAQgFAAgFAEg");
	this.shape_64.setTransform(348.7,172.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333333").s().p("AAiBMIgvhBIgNAAIAAAeIABAKQAAAAAAABQAAAAABABQAAAAABABQAAAAABAAIAHABIAHAAIAAAVIhLAAIAAgVIAHAAIAIgBIADgDIABgJIAAhVIgBgHIgCgCQgDgCgEAAIgDAAIgGAAIAAgVIBeAAIAUABQALACAIAGQAIAFAGAJQAEAIAAALQAAARgMALQgMAKgSADIAgAlIABABIAGAGIAFACIAHABIAHAAIAAAVgAgagLIAWAAQANAAAGgCQAHgDADgEQAEgFAAgGQAAgGgEgFQgDgEgFgCQgGgCgMAAIgZAAg");
	this.shape_65.setTransform(333.5,170.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_66.setTransform(310.2,172.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#333333").s().p("AgnBLQgKgHgIgOQgGgNAAgQQAAgRAHgMQAHgOAKgHQALgHAOAAQAIAAAGACQAFACAIAEIAAgaIgPAAIAAgWQANgBAIgBQAJgDAJgEIALAAIAAB+QAAAIAAACIACACQACABAHAAIAFAAIAAAVIgvABIAAgKQgLAGgGADQgIADgIgBQgMAAgLgGgAgPgEQgEADgEAHQgCAHAAALQAAAPAGAKQAFAGAJAAIAGgBIAMgHIAAgkQAAgHgCgDQgBgDgEgDQgFgDgFAAQgGAAgFAEg");
	this.shape_67.setTransform(296.8,169.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#333333").s().p("AAYA2QgGgEgFgGQgLAHgIADQgJADgIAAQgQAAgKgJQgJgJAAgNQAAgHADgGQADgGAHgFQAGgDAPgEQANgDATgCIAAgIIgBgKQgBgDgDgBQgDgCgEAAIgHABIgEADIgFAHQgDAHgEADQgEADgGAAQgGAAgFgFQgFgEABgGQgBgIAFgFQAGgIAMgFQANgFAOAAQAPAAAKAFQALAFAFAHQADAHAAAOIAAAmQAAAHABACQABABAAAAQAAABAAAAQABABAAAAQABAAABABQACABADAAIAIgBIAAAVQgJADgJAAQgKAAgHgDgAgMAMQgFACgDADQgCADAAADQAAAFADADQADADAGAAQAEAAAEgCIAKgGIAAgTQgNACgHADg");
	this.shape_68.setTransform(275.4,172.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_69.setTransform(264.9,169.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#333333").s().p("AguA4IAAgVIAGAAQAGAAABgBIADgCIAAgIIAAgwIgQAAIAAgVQASgCATgIIAKAAIAAAQQAIgJAHgDQAGgEAGAAQAFAAAFADQAEACACAFQADAEAAAGQAAAGgFAGQgEAGgJAAIgDAAIgIgDIgEgBQgDAAgHAEIAAApQAAAGABABQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIAIABIAFAAIAAAVg");
	this.shape_70.setTransform(256,172.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAOgHQAPgIARAAQASAAAOAHQAOAIAIAMQAHANAAAQQAAAZgQAQQgRAQgcAAQgbAAgRgQgAgKgcQgGADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgGgJQgHgIgKAAQgFAAgFAEg");
	this.shape_71.setTransform(243.4,172.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AgFBHQgIgCgFgEQgGgGgCgFQgCgFAAgKIAAgzIgRAAIAAgVQAJgDAGgFQAHgGAEgHQADgHACgMIAUAAIAAAlIAjAAIAAAYIgjAAIAAAkQAAAOABADQACAEADACQAFADAGAAQAMAAALgHIAAAXQgKAFgHABQgIACgJAAQgKAAgHgDg");
	this.shape_72.setTransform(231.3,170.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_73.setTransform(220.4,172.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_74.setTransform(210.7,169.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#333333").s().p("AAEBQIAAgVIAEAAIAGgBIADgCIAAgIIAAgmQAAgHgBgCIgDgEQgCgBgEAAQgFAAgFACQgFACgIAFIAAArIAAAIIADACIAHABIACAAIAAAVIhAAAIAAgVIAHAAQAFAAABgBIADgCIAAgHIAAhiIgQAAIAAgVQAKgBALgCQALgDAJgDIALAAIAAA8QAKgGAIgDQAIgDAIAAQAKAAAIAFQAIAEAEAHQAEAHAAAKIAAAtIABAJQAAAAAAABQAAAAABAAQAAABABAAQAAABABAAIAIAAIAFAAIAAAVg");
	this.shape_75.setTransform(199,169.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("AAZA2QgHgEgGgGQgKAHgIADQgJADgJAAQgPAAgKgJQgKgJAAgNQAAgHAEgGQADgGAHgFQAHgDANgEQAOgDATgCIAAgIIgBgKQgCgDgDgBQgCgCgFAAIgGABIgFADIgEAHQgCAHgFADQgEADgFAAQgIAAgEgFQgEgEgBgGQABgIAEgFQAGgIANgFQALgFAQAAQAOAAAKAFQALAFAEAHQAEAHABAOIAAAmQAAAHABACQAAABAAAAQAAABABAAQAAABAAAAQABAAABABQACABAEAAIAIgBIAAAVQgKADgIAAQgLAAgGgDgAgLAMQgGACgCADQgDADAAADQAAAFADADQADADAGAAQADAAAGgCIAJgGIAAgTQgOACgFADg");
	this.shape_76.setTransform(177.3,172.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AghBQIAAgVIAFAAQAGAAACgBIACgCIABgIIAAhhIgQAAIAAgVQAUgBAUgIIALAAIAAB/IAAAHQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQACABAHAAIAEAAIAAAVg");
	this.shape_77.setTransform(167,169.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_78.setTransform(461,144.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#333333").s().p("AgnBLQgKgHgIgOQgGgNAAgQQAAgRAHgNQAHgNAKgHQALgHAOAAQAIAAAGACQAFABAIAFIAAgaIgPAAIAAgWQANAAAIgCQAJgCAJgFIALAAIAAB+QAAAIAAACIACACQACABAHAAIAFAAIAAAVIgvACIAAgLQgLAGgGADQgIADgIgBQgMAAgLgGgAgPgEQgEADgEAHQgCAHAAALQAAAPAGAJQAFAIAJgBIAGgBIAMgHIAAgkQAAgHgCgDQgBgDgEgDQgFgDgFAAQgGAAgFAEg");
	this.shape_79.setTransform(447.5,142.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAIgMANgHQAOgIASAAQASAAAOAHQAOAIAIAMQAHANAAAQQAAAZgQAQQgRAQgcAAQgbAAgRgQgAgKgcQgGADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgGgJQgHgIgKAAQgFAAgFAEg");
	this.shape_80.setTransform(425.6,144.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#333333").s().p("AgFBHQgIgCgFgFQgGgFgCgFQgCgFAAgKIAAgzIgRAAIAAgWQAJgCAGgFQAHgGAEgHQADgIACgLIAUAAIAAAlIAjAAIAAAYIgjAAIAAAkQAAAOABAEQACADADACQAFADAGAAQAMAAALgHIAAAXQgKAEgHACQgIACgJAAQgKAAgHgDg");
	this.shape_81.setTransform(413.5,142.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("AAEA4IAAgVIAIgBQABAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAgHIAAgmQAAgJgBgBQgEgFgFAAQgEAAgFADQgFACgKAGIAAAqQABAIABABQACACAFAAIAEAAIAAAVIhAAAIAAgVIAEAAQAHAAACgBIADgCIAAgHIAAgxIgQAAIAAgWQAUgCARgHIALAAIAAAPQALgJAJgCQAJgEAJAAQAKAAAIAFQAJAEADAHQAEAGAAANIAAAsIABAIIACACIAIABIAGAAIAAAVg");
	this.shape_82.setTransform(400.9,144.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_83.setTransform(386.6,144.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_84.setTransform(376.2,142.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#333333").s().p("AAoA4IAAgVQAHAAABgBIADgCQABgCAAgFIAAgnQAAgHgBgCIgDgEQgDgCgEAAQgEAAgFADQgFACgKAGIAAApQAAAHABABQABABAAAAQAAABABAAQAAAAAAABQABAAAAAAQACABAHAAIAAAVIg7AAIAAgVQAHAAACgBIADgDIAAgIIAAgkQAAgIgBgDQgDgFgGAAIgGABQgEABgDACIgJAFIgCACIAAApIAAAIIADADIAGABIADAAIAAAVIg/AAIAAgVIAEAAQAHAAABgBQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBQABgBAAgHIAAgvIgQAAIAAgWQAUgCARgHIAKAAIAAAPQAJgHAKgEQAKgEAKAAQAHAAAGACQAFACAEADQAEADADAFQAKgHAKgEQAKgEAKAAQAJAAAHAEQAHADAEAFQAFAGABAGIABALIAAAsQAAAGABABQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQABABAHAAIAEAAIAAAVg");
	this.shape_85.setTransform(361,144.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_86.setTransform(345.8,142.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#333333").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_87.setTransform(335.2,144.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAIgMANgHQAOgIASAAQASAAAOAHQAOAIAIAMQAHANAAAQQAAAZgQAQQgRAQgcAAQgbAAgRgQgAgKgcQgGADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgGgJQgHgIgKAAQgFAAgFAEg");
	this.shape_88.setTransform(321.6,144.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#333333").s().p("AAFA4IAAgVIAIgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAgHIAAgmQAAgJgCgBQgDgFgFAAQgFAAgEADQgGACgJAGIAAAqQAAAIACABQABACAGAAIAEAAIAAAVIg/AAIAAgVIACAAQAIAAACgBIADgCIABgHIAAgxIgQAAIAAgWQATgCARgHIALAAIAAAPQAMgJAIgCQAJgEAIAAQALAAAIAFQAJAEADAHQAEAGAAANIAAAsIAAAIIAEACIAHABIAGAAIAAAVg");
	this.shape_89.setTransform(307.3,144.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAIgMAOgHQAOgIARAAQATAAANAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgcAAgQgQgAgLgcQgFADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgHgJQgGgIgKAAQgFAAgGAEg");
	this.shape_90.setTransform(292.5,144.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_91.setTransform(279.2,144.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AAFA4IAAgVIAIgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAgHIAAgmQAAgJgBgBQgDgFgGAAQgEAAgFADQgFACgKAGIAAAqQABAIABABQACACAFAAIAEAAIAAAVIg/AAIAAgVIADAAQAHAAACgBIADgCIAAgHIAAgxIgPAAIAAgWQATgCARgHIALAAIAAAPQALgJAJgCQAIgEAJAAQALAAAIAFQAJAEADAHQAEAGAAANIAAAsIAAAIIADACIAIABIAGAAIAAAVg");
	this.shape_92.setTransform(257.6,144.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_93.setTransform(243.2,144.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("AgfA2QgHgDgFgEQgEgEgCgGQgCgGAAgJIAAgsIgBgIIgCgCIgIgBIgGAAIAAgVIA0gBIAABGIAAAKQABACADACQACABAEAAQAFAAAGgCIAMgIIAAgqIAAgHIgDgDIgGgBIgHAAIAAgVIA0gBIAABNIAAAIQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAQABABAGAAIAGAAIAAAVIgwABIAAgNQgKAHgJAEQgJADgKAAQgIAAgGgCg");
	this.shape_94.setTransform(229.3,144.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#333333").s().p("AgBBPQgHgDgIgGIgGAJIgYAAIAAiBIgQAAIAAgWQAVgBATgIIALAAIAAA8QAJgHAGgBQAHgDAHAAQASAAANAOQAOAQAAAZQAAAagOAQQgPARgUgBQgIABgHgDgAgBgEQgFACgFADIAAAiQAAAKABADQACAEAEACQAEADAEAAQAKAAAFgHQAHgKgBgQQABgQgGgIQgFgGgIAAIgIACg");
	this.shape_95.setTransform(214.8,142.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AAEA4IAAgVIAJgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAgHIAAgmQAAgJgCgBQgDgFgFAAQgFAAgEADQgGACgIAGIAAAqQAAAIABABQABACAHAAIADAAIAAAVIg/AAIAAgVIACAAQAIAAACgBIADgCIABgHIAAgxIgQAAIAAgWQATgCARgHIAKAAIAAAPQANgJAIgCQAJgEAIAAQALAAAJAFQAHAEAEAHQAEAGAAANIAAAsIAAAIIAEACIAHABIAFAAIAAAVg");
	this.shape_96.setTransform(193.5,144.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("AgfA2QgHgDgFgEQgEgEgCgGQgCgGAAgJIAAgsIgBgIIgCgCIgIgBIgGAAIAAgVIA0gBIAABGIAAAKQABACADACQACABAEAAQAFAAAGgCIAMgIIAAgqIAAgHIgDgDIgGgBIgHAAIAAgVIA0gBIAABNIAAAIQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAQABABAGAAIAGAAIAAAVIgwABIAAgNQgKAHgJAEQgJADgKAAQgIAAgGgCg");
	this.shape_97.setTransform(178.3,144.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_98.setTransform(157.5,144.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_99.setTransform(145.1,144.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#333333").s().p("AAFA4IAAgVIAIgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAgHIAAgmQAAgJgBgBQgDgFgGAAQgFAAgEADQgFACgKAGIAAAqQAAAIACABQACACAFAAIAEAAIAAAVIg/AAIAAgVIADAAQAHAAACgBIADgCIAAgHIAAgxIgPAAIAAgWQATgCARgHIALAAIAAAPQAMgJAIgCQAJgEAIAAQALAAAIAFQAJAEADAHQAEAGAAANIAAAsIAAAIIADACIAIABIAGAAIAAAVg");
	this.shape_100.setTransform(131.2,144.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_101.setTransform(116.9,144.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_102.setTransform(106.5,142.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#333333").s().p("AgkBPIAAgVIAEAAQAHAAACgBIAEgEQABgCAAgHIAAhZQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAIgEgBQgGAAgGAEQgIAFgFAHIgJASIgUgHIASg2IAPAAIABAFIBWAAIACgFIAOAAIATA2IgVAHIgJgSQgGgIgHgEQgGgEgGAAIgEABIgBAGIAABXIABAKIACADIAEABIAMABIAAAVg");
	this.shape_103.setTransform(94.5,142.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF0000").s().p("AgRBsQgGgIAAgMQAAgMAGgJQAGgIAKgBQAKAAAHAJQAGAIAAALQAAAMgHAJQgGAJgKAAQgKAAgGgIgAgEArQAAAAgBgBQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgFQAAgIgKg/IgHg3QAAgLAHgGQAHgIAMAAQAMAAAGAIQAHAIAAALQAAAGgLBDIgHAyIAAAGIgEACg");
	this.shape_104.setTransform(380,110.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FF0000").s().p("AgmBKQgSgYAAgxQgBgvASgZQARgaAbAAQAXAAAPAVQAPAWAAAnIAAANIg/AAIAAA5QAAALAFAHQADAGAHAAQALAAAGgJQAGgJABgQQAAgIABgCQACgBAIAAQAJAAABABQACABABAHQAAAVgOARQgPARgXAAQgZAAgTgYgAgFhCIAAAvIASAAIAAgvQAAgNgJAAQgJAAAAANg");
	this.shape_105.setTransform(357,111.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FF0000").s().p("AgPBzQgKgJAAgSIAAiRIgFAAIgDgBIgBgDIAAgKIABgEIADgBQALgBAKgKQAJgKACgLIACgFQAAAAAAAAQABAAAAgBQABAAABAAQAAAAABAAIAJAAQAEAAAAAFIAAAhIAJAAQAFAAAAAEIAAAKQAAAFgFAAIgJAAIAACRQAAAHAHADQADACABACIABAIIgBAEIgDABg");
	this.shape_106.setTransform(333.9,110);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FF0000").s().p("AAUBhQgIgHAAgMIAAiEQAAgMgJAAQgGAAgHAHIAACCQABAFAFADQACABAAAFIAAAHQAAAFgGAAIgzAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAgEIAAgGQAAgDADgCQADgDABgCQABgCAAgHIAAiIQAAgFgFgDQgDgBAAgEIAAgGQABgFAEAAIAtAAIAEABIAAAEIAAAOQARgVAVAAQAPAAAHAJQAIAKAAAPIAACFQAAAEADADQAEACAAAIQAAAGgBABQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAgBAAg");
	this.shape_107.setTransform(310.2,111.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FF0000").s().p("AgmBKQgTgYABgxQAAgvARgZQAQgaAcAAQAYAAAOAVQAPAWAAAnIAAANIg/AAIAAA5QAAALAEAHQAEAGAHAAQAKAAAHgJQAGgJABgQQAAgIABgCQACgBAIAAQAIAAADABQACABAAAHQgBAVgOARQgOARgXAAQgZAAgTgYgAgFhCIAAAvIASAAIAAgvQAAgNgJAAQgJAAAAANg");
	this.shape_108.setTransform(283.9,111.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FF0000").s().p("AgaBxQgEAAAAgEIAAgIQAAgFAEgCIADgCIABgGIAAisQAAgFgDgCQgFgDAAgFIAAgHQAAgFAFABIArAAIAFAAQABABAAAEIAADDQAAAHAEABQADACAAADIAAAIQAAAEgGAAg");
	this.shape_109.setTransform(260.9,110.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FF0000").s().p("AgmBKQgSgYgBgxQAAgvARgZQASgaAaAAQAYAAAPAVQAOAWAAAnIAAANIg+AAIAAA5QAAALAFAHQADAGAHAAQALAAAGgJQAHgJAAgQQAAgIACgCQABgBAJAAQAHAAACABQACABAAAHQABAVgOARQgPARgXAAQgaAAgSgYgAgFhCIAAAvIASAAIAAgvQAAgNgJAAQgJAAAAANg");
	this.shape_110.setTransform(237.9,111.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FF0000").s().p("AgiBJQgPgYAAguQAAghAIgWQAIgXALgLQAMgLAQAAQAVAAALANQAMAOAAASQAAAJgEAHQgEAGgIAAQgIAAgFgGQgEgGAAgJIABgKIABgJQAAgEgCgDQgDgCgEAAQgDAAgDADQgCADAAADIAACHQAAAFADAEQACAEAGABQAHgBAEgIQADgJABgOIAAgDQAAgIACgBQADgCAGAAQAHAAABACQACACAAAHQAAAWgLAQQgLAQgVAAQgYAAgQgZg");
	this.shape_111.setTransform(213.3,111.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FF0000").s().p("AAABgQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgBAAgFIABgIIAEgEQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBIAAgDIgJgeIgKASQgHAMAAADQABADADACQADABAAADIAAAFIAAAHQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAgBAAIgbAAIgDgBIAAgEIAAgIQAAgDACgBQAGgDACgEIAag4IgchWQgCgEgEgDIgDgDQgBgBAAgJQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIA0AAIADAAQACABAAAFIAAAEQAAAFgDABQgDADAAADIAAACIAJAdIAJgSIACgCQAFgKABgEQAAAAgBAAQAAgBAAAAQgBgBAAAAQgBgBgBAAIgDgCIAAgIQAAgCAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIAcAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAIAAAHIAAAHQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQgDACgCAEIgcA4IAeBYQABADAEADQADACAAAEIAAAHIgBAEIgEABg");
	this.shape_112.setTransform(188.5,111.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FF0000").s().p("AgyBxQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgCgCAAgHQABgGAEgCQAIgDAAgGIAAiuQAAgCgGgDQgFgCAAgBQgBgDAAgGQAAgFABgBQABgBAEAAIBYAAIAGABIACAFIAHAlIABADQgBAEgGAAQgIAAgCgCQgDgBgDgIQgEgNgDgEQgDgFgEAAIgJAAIAABQIAJAAQAEAAACgCQACgBABgGIACgMQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQALAAACABQABABAAAGIAAAuQAAAEgBACQgCABgHAAQgFAAgCgBQgCgDgBgHQgCgIgBgBQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAIgLAAIAABhIAHAAQAHAAADgDQACgFAGgSQACgHADgDQADgCAGAAQAJAAgBAGIAAAEIgGAhIgCAKQAAABgGAAg");
	this.shape_113.setTransform(163.6,110.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.nextlevel},{t:this.instance}]}).wait(1));

	// Capa 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgsvAbQQgyAAAAgyMAAAg07QAAgyAyAAMBZfAAAQAyAAAAAyMAAAAt9Qg6BshPBuQiEC3iHBfg");
	mask.setTransform(284.7,183.2);

	// Capa 2
	this.instance_1 = new lib.fondo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(74,70,1.828,1.312);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.triunfo, new cjs.Rectangle(-13.3,70,580.7,287.7), null);


(lib.personajesmenu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* _root.cheat_btn._alpha = 40
		_root.cheat_btn.enabled = 0
		
		_root.joker._alpha = 40
		_root.joker.enabled = 0
		
		_root.habilitar_cards()
		stop();
		*/
		this.stop()
	}
	this.frame_1 = function() {
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.button_1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			intentos = intentos - 2
			raiz.trys.text = intentos
			raiz.score.text = puntos
			//raiz.menurespuestas.gotoAndStop(0);
			this.gotoAndStop(0);
			
		}
		
		
		
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		//boton huerta
		this.button_2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			
			if(huerta1 == 3 && huerta2==3 && respuesta == "huerta"){
			
			puntos = puntos + 1
				
				raiz.score.text = puntos
				
			this.gotoAndStop(0);
			}else if (respuesta == "villa"){
				raiz.memorama.villa1_mc.gotoAndStop(0)
				raiz.memorama.villa2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "madero"){
				raiz.memorama.madero1_mc.gotoAndStop(0)
				raiz.memorama.madero2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
			}else if (respuesta == "diaz"){
				raiz.memorama.diaz1_mc.gotoAndStop(0)
				raiz.memorama.diaz2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "hidalgo"){
				raiz.memorama.hidalgo1_mc.gotoAndStop(0)
				raiz.memorama.hidalgo2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "zapata"){
				raiz.memorama.zapata1_mc.gotoAndStop(0)
				raiz.memorama.zapata2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "obregon"){
				raiz.memorama.obregon1_mc.gotoAndStop(0)
				raiz.memorama.obregon2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "morelos"){
				raiz.memorama.morelos1_mc.gotoAndStop(0)
				raiz.memorama.morelos2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "victoria"){
				raiz.memorama.victoria1_mc.gotoAndStop(0)
				raiz.memorama.victoria2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "moctezuma"){
				raiz.memorama.moctezuma1_mc.gotoAndStop(0)
				raiz.memorama.moctezuma2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "ana"){
				raiz.memorama.ana1_mc.gotoAndStop(0)
				raiz.memorama.ana2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "iturbide"){
				raiz.memorama.iturbide1_mc.gotoAndStop(0)
				raiz.memorama.iturbide2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}
		
				raiz.bios.gotoAndStop("huerta")
		}
		//boton villa 
		this.button_3.addEventListener("click", fl_ClickToGoToAndStopAtFrame_9.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_9()
		{
		
			if(villa1 == 3 && villa2 ==3 && respuesta == "villa"){
			puntos = puntos + 1
				raiz.score.text = puntos
			this.gotoAndStop(0);
			}else if (respuesta == "huerta"){
				raiz.memorama.huerta1_mc.gotoAndStop(0)
				raiz.memorama.huerta2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "madero"){
				raiz.memorama.madero1_mc.gotoAndStop(0)
				raiz.memorama.madero2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "hidalgo"){
				raiz.memorama.hidalgo1_mc.gotoAndStop(0)
				raiz.memorama.hidalgo2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "diaz"){
				raiz.memorama.diaz1_mc.gotoAndStop(0)
				raiz.memorama.diaz2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "zapata"){
				raiz.memorama.zapata1_mc.gotoAndStop(0)
				raiz.memorama.zapata2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "obregon"){
				raiz.memorama.obregon1_mc.gotoAndStop(0)
				raiz.memorama.obregon2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "morelos"){
				raiz.memorama.morelos1_mc.gotoAndStop(0)
				raiz.memorama.morelos2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "victoria"){
				raiz.memorama.victoria1_mc.gotoAndStop(0)
				raiz.memorama.victoria2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "moctezuma"){
				raiz.memorama.moctezuma1_mc.gotoAndStop(0)
				raiz.memorama.moctezuma2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "ana"){
				raiz.memorama.ana1_mc.gotoAndStop(0)
				raiz.memorama.ana2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "iturbide"){
				raiz.memorama.iturbide1_mc.gotoAndStop(0)
				raiz.memorama.iturbide2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}
			raiz.bios.gotoAndStop("villa")
		}
		
		//boton madero 
		this.button_4madero.addEventListener("click", fl_ClickToGoToAndStopAtFrame_10.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_10()
		{
		
			if(madero1 == 3 && madero2 ==3 && respuesta == "madero"){
			puntos = puntos + 1
				raiz.score.text = puntos
			this.gotoAndStop(0);
			}else if (respuesta == "huerta"){
				raiz.memorama.huerta1_mc.gotoAndStop(0)
				raiz.memorama.huerta2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "villa"){
				raiz.memorama.villa1_mc.gotoAndStop(0)
				raiz.memorama.villa2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "hidalgo"){
				raiz.memorama.hidalgo1_mc.gotoAndStop(0)
				raiz.memorama.hidalgo2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "diaz"){
				raiz.memorama.diaz1_mc.gotoAndStop(0)
				raiz.memorama.diaz2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "zapata"){
				raiz.memorama.zapata1_mc.gotoAndStop(0)
				raiz.memorama.zapata2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "obregon"){
				raiz.memorama.obregon1_mc.gotoAndStop(0)
				raiz.memorama.obregon2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "morelos"){
				raiz.memorama.morelos1_mc.gotoAndStop(0)
				raiz.memorama.morelos2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "victoria"){
				raiz.memorama.victoria1_mc.gotoAndStop(0)
				raiz.memorama.victoria2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "moctezuma"){
				raiz.memorama.moctezuma1_mc.gotoAndStop(0)
				raiz.memorama.moctezuma2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "ana"){
				raiz.memorama.ana1_mc.gotoAndStop(0)
				raiz.memorama.ana2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "iturbide"){
				raiz.memorama.iturbide1_mc.gotoAndStop(0)
				raiz.memorama.iturbide2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}
			raiz.bios.gotoAndStop("madero")
		}
		
		//boton hidalgo
		this.button_4hidalgo.addEventListener("click", fl_ClickToGoToAndStopAtFrame_11.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_11()
		{
			
			if(hidalgo1 == 3 && hidalgo2 ==3 && respuesta == "hidalgo"){
			puntos = puntos + 1
				raiz.score.text = puntos
			this.gotoAndStop(0);
			}else if (respuesta == "huerta"){
				raiz.memorama.huerta1_mc.gotoAndStop(0)
				raiz.memorama.huerta2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "villa"){
				raiz.memorama.villa1_mc.gotoAndStop(0)
				raiz.memorama.villa2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "madero"){
				raiz.memorama.madero1_mc.gotoAndStop(0)
				raiz.memorama.madero2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "diaz"){
				raiz.memorama.diaz1_mc.gotoAndStop(0)
				raiz.memorama.diaz2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "zapata"){
				raiz.memorama.zapata1_mc.gotoAndStop(0)
				raiz.memorama.zapata2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "obregon"){
				raiz.memorama.obregon1_mc.gotoAndStop(0)
				raiz.memorama.obregon2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "morelos"){
				raiz.memorama.morelos1_mc.gotoAndStop(0)
				raiz.memorama.morelos2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "victoria"){
				raiz.memorama.victoria1_mc.gotoAndStop(0)
				raiz.memorama.victoria2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "moctezuma"){
				raiz.memorama.moctezuma1_mc.gotoAndStop(0)
				raiz.memorama.moctezuma2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "ana"){
				raiz.memorama.ana1_mc.gotoAndStop(0)
				raiz.memorama.ana2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "iturbide"){
				raiz.memorama.iturbide1_mc.gotoAndStop(0)
				raiz.memorama.iturbide2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}
			raiz.bios.gotoAndStop("hidalgo")
		}
		
		//boton diaz button_5diaz
		this.button_5diaz.addEventListener("click", fl_ClickToGoToAndStopAtFrame_12.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_12()
		{
			
			if(diaz1 == 3 && diaz2 ==3 && respuesta == "diaz"){
			puntos = puntos + 1
				raiz.score.text = puntos
			this.gotoAndStop(0);
			}else if (respuesta == "huerta"){
				raiz.memorama.huerta1_mc.gotoAndStop(0)
				raiz.memorama.huerta2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "villa"){
				raiz.memorama.villa1_mc.gotoAndStop(0)
				raiz.memorama.villa2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "madero"){
				raiz.memorama.madero1_mc.gotoAndStop(0)
				raiz.memorama.madero2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "hidalgo"){
				raiz.memorama.hidalgo1_mc.gotoAndStop(0)
				raiz.memorama.hidalgo2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "zapata"){
				raiz.memorama.zapata1_mc.gotoAndStop(0)
				raiz.memorama.zapata2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "obregon"){
				raiz.memorama.obregon1_mc.gotoAndStop(0)
				raiz.memorama.obregon2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "morelos"){
				raiz.memorama.morelos1_mc.gotoAndStop(0)
				raiz.memorama.morelos2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "victoria"){
				raiz.memorama.victoria1_mc.gotoAndStop(0)
				raiz.memorama.victoria2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "moctezuma"){
				raiz.memorama.moctezuma1_mc.gotoAndStop(0)
				raiz.memorama.moctezuma2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "ana"){
				raiz.memorama.ana1_mc.gotoAndStop(0)
				raiz.memorama.ana2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "iturbide"){
				raiz.memorama.iturbide1_mc.gotoAndStop(0)
				raiz.memorama.iturbide2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}
			raiz.bios.gotoAndStop("diaz")
		}
		
		//button_6zapata boton zapata 
		
		this.button_6zapata.addEventListener("click", fl_ClickToGoToAndStopAtFrame_13.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_13()
		{
			
			if(zapata1 == 3 && zapata2 ==3 && respuesta == "zapata"){
			puntos = puntos + 1
				raiz.score.text = puntos
			this.gotoAndStop(0);
			}else if (respuesta == "huerta"){
				raiz.memorama.huerta1_mc.gotoAndStop(0)
				raiz.memorama.huerta2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "villa"){
				raiz.memorama.villa1_mc.gotoAndStop(0)
				raiz.memorama.villa2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "madero"){
				raiz.memorama.madero1_mc.gotoAndStop(0)
				raiz.memorama.madero2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "hidalgo"){
				raiz.memorama.hidalgo1_mc.gotoAndStop(0)
				raiz.memorama.hidalgo2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "diaz"){
				raiz.memorama.diaz1_mc.gotoAndStop(0)
				raiz.memorama.diaz2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "obregon"){
				raiz.memorama.obregon1_mc.gotoAndStop(0)
				raiz.memorama.obregon2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "morelos"){
				raiz.memorama.morelos1_mc.gotoAndStop(0)
				raiz.memorama.morelos2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "victoria"){
				raiz.memorama.victoria1_mc.gotoAndStop(0)
				raiz.memorama.victoria2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "moctezuma"){
				raiz.memorama.moctezuma1_mc.gotoAndStop(0)
				raiz.memorama.moctezuma2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "ana"){
				raiz.memorama.ana1_mc.gotoAndStop(0)
				raiz.memorama.ana2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "iturbide"){
				raiz.memorama.iturbide1_mc.gotoAndStop(0)
				raiz.memorama.iturbide2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}
			raiz.bios.gotoAndStop("zapata")
		}
		
		//boton 7 obregon   button_7obregon
		
		this.button_7obregon.addEventListener("click", fl_ClickToGoToAndStopAtFrame_14.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_14()
		{
			
			if(obregon1 == 3 && obregon2 ==3 && respuesta == "obregon"){
			puntos = puntos + 1
				raiz.score.text = puntos
			this.gotoAndStop(0);
			}else if (respuesta == "huerta"){
				raiz.memorama.huerta1_mc.gotoAndStop(0)
				raiz.memorama.huerta2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "villa"){
				raiz.memorama.villa1_mc.gotoAndStop(0)
				raiz.memorama.villa2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "madero"){
				raiz.memorama.madero1_mc.gotoAndStop(0)
				raiz.memorama.madero2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "hidalgo"){
				raiz.memorama.hidalgo1_mc.gotoAndStop(0)
				raiz.memorama.hidalgo2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "diaz"){
				raiz.memorama.diaz1_mc.gotoAndStop(0)
				raiz.memorama.diaz2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}
			else if (respuesta == "zapata"){
				raiz.memorama.zapata1_mc.gotoAndStop(0)
				raiz.memorama.zapata2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "morelos"){
				raiz.memorama.morelos1_mc.gotoAndStop(0)
				raiz.memorama.morelos2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "victoria"){
				raiz.memorama.victoria1_mc.gotoAndStop(0)
				raiz.memorama.victoria2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "moctezuma"){
				raiz.memorama.moctezuma1_mc.gotoAndStop(0)
				raiz.memorama.moctezuma2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "ana"){
				raiz.memorama.ana1_mc.gotoAndStop(0)
				raiz.memorama.ana2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "iturbide"){
				raiz.memorama.iturbide1_mc.gotoAndStop(0)
				raiz.memorama.iturbide2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}
			raiz.bios.gotoAndStop("obregon")
		}
		
		
		//boton 8 morelos button_8morelos
		
		this.button_8morelos.addEventListener("click", fl_ClickToGoToAndStopAtFrame_15.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_15()
		{
			
			if(morelos1 == 3 && morelos2 ==3 && respuesta == "morelos"){
			puntos = puntos + 1
				raiz.score.text = puntos
			this.gotoAndStop(0);
			}else if (respuesta == "huerta"){
				raiz.memorama.huerta1_mc.gotoAndStop(0)
				raiz.memorama.huerta2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "villa"){
				raiz.memorama.villa1_mc.gotoAndStop(0)
				raiz.memorama.villa2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "madero"){
				raiz.memorama.madero1_mc.gotoAndStop(0)
				raiz.memorama.madero2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "hidalgo"){
				raiz.memorama.hidalgo1_mc.gotoAndStop(0)
				raiz.memorama.hidalgo2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "diaz"){
				raiz.memorama.diaz1_mc.gotoAndStop(0)
				raiz.memorama.diaz2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}
			else if (respuesta == "zapata"){
				raiz.memorama.zapata1_mc.gotoAndStop(0)
				raiz.memorama.zapata2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "obregon"){
				raiz.memorama.obregon1_mc.gotoAndStop(0)
				raiz.memorama.obregon2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "victoria"){
				raiz.memorama.victoria1_mc.gotoAndStop(0)
				raiz.memorama.victoria2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "moctezuma"){
				raiz.memorama.moctezuma1_mc.gotoAndStop(0)
				raiz.memorama.moctezuma2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "ana"){
				raiz.memorama.ana1_mc.gotoAndStop(0)
				raiz.memorama.ana2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "iturbide"){
				raiz.memorama.iturbide1_mc.gotoAndStop(0)
				raiz.memorama.iturbide2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}
			raiz.bios.gotoAndStop("morelos")
		}
		
		
		//boton guadalupe vic button_9victoria 
		this.button_9victoria.addEventListener("click", fl_ClickToGoToAndStopAtFrame_16.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_16()
		{
			
			if(victoria1 == 3 && victoria2 ==3 && respuesta == "victoria"){
			puntos = puntos + 1
				raiz.score.text = puntos
			this.gotoAndStop(0);
			}else if (respuesta == "huerta"){
				raiz.memorama.huerta1_mc.gotoAndStop(0)
				raiz.memorama.huerta2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "villa"){
				raiz.memorama.villa1_mc.gotoAndStop(0)
				raiz.memorama.villa2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "madero"){
				raiz.memorama.madero1_mc.gotoAndStop(0)
				raiz.memorama.madero2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "hidalgo"){
				raiz.memorama.hidalgo1_mc.gotoAndStop(0)
				raiz.memorama.hidalgo2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "diaz"){
				raiz.memorama.diaz1_mc.gotoAndStop(0)
				raiz.memorama.diaz2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}
			else if (respuesta == "zapata"){
				raiz.memorama.zapata1_mc.gotoAndStop(0)
				raiz.memorama.zapata2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "obregon"){
				raiz.memorama.obregon1_mc.gotoAndStop(0)
				raiz.memorama.obregon2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "morelos"){
				raiz.memorama.morelos1_mc.gotoAndStop(0)
				raiz.memorama.morelos2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "moctezuma"){
				raiz.memorama.moctezuma1_mc.gotoAndStop(0)
				raiz.memorama.moctezuma2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "ana"){
				raiz.memorama.ana1_mc.gotoAndStop(0)
				raiz.memorama.ana2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "iturbide"){
				raiz.memorama.iturbide1_mc.gotoAndStop(0)
				raiz.memorama.iturbide2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}
			raiz.bios.gotoAndStop("victoria")
		}
		
		//boton 10 button_10moctezuma
		
		this.button_10moctezuma.addEventListener("click", eventomoctezuma.bind(this));
		
		function eventomoctezuma()
		{
			
			if(moctezuma1 == 3 && moctezuma2 ==3 && respuesta == "moctezuma"){
			puntos = puntos + 1
				raiz.score.text = puntos
			this.gotoAndStop(0);
			}else if (respuesta == "huerta"){
				raiz.memorama.huerta1_mc.gotoAndStop(0)
				raiz.memorama.huerta2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "villa"){
				raiz.memorama.villa1_mc.gotoAndStop(0)
				raiz.memorama.villa2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "madero"){
				raiz.memorama.madero1_mc.gotoAndStop(0)
				raiz.memorama.madero2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "hidalgo"){
				raiz.memorama.hidalgo1_mc.gotoAndStop(0)
				raiz.memorama.hidalgo2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "diaz"){
				raiz.memorama.diaz1_mc.gotoAndStop(0)
				raiz.memorama.diaz2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}
			else if (respuesta == "zapata"){
				raiz.memorama.zapata1_mc.gotoAndStop(0)
				raiz.memorama.zapata2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "obregon"){
				raiz.memorama.obregon1_mc.gotoAndStop(0)
				raiz.memorama.obregon2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "morelos"){
				raiz.memorama.morelos1_mc.gotoAndStop(0)
				raiz.memorama.morelos2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "victoria"){
				raiz.memorama.victoria1_mc.gotoAndStop(0)
				raiz.memorama.victoria2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "ana"){
				raiz.memorama.ana1_mc.gotoAndStop(0)
				raiz.memorama.ana2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "iturbide"){
				raiz.memorama.iturbide1_mc.gotoAndStop(0)
				raiz.memorama.iturbide2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}
			raiz.bios.gotoAndStop("moctezuma")
		}
		
		// boton once 11 button_11ana
		this.button_11ana.addEventListener("click", eventoana.bind(this));
		
		function eventoana()
		{
			
			if(ana1 == 3 && ana2 ==3 && respuesta == "ana"){
			puntos = puntos + 1
				raiz.score.text = puntos
			this.gotoAndStop(0);
			}else if (respuesta == "ana"){
				raiz.memorama.ana1_mc.gotoAndStop(0)
				raiz.memorama.ana2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "villa"){
				raiz.memorama.villa1_mc.gotoAndStop(0)
				raiz.memorama.villa2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "madero"){
				raiz.memorama.madero1_mc.gotoAndStop(0)
				raiz.memorama.madero2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "hidalgo"){
				raiz.memorama.hidalgo1_mc.gotoAndStop(0)
				raiz.memorama.hidalgo2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "diaz"){
				raiz.memorama.diaz1_mc.gotoAndStop(0)
				raiz.memorama.diaz2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}
			else if (respuesta == "zapata"){
				raiz.memorama.zapata1_mc.gotoAndStop(0)
				raiz.memorama.zapata2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "obregon"){
				raiz.memorama.obregon1_mc.gotoAndStop(0)
				raiz.memorama.obregon2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "morelos"){
				raiz.memorama.morelos1_mc.gotoAndStop(0)
				raiz.memorama.morelos2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "victoria"){
				raiz.memorama.victoria1_mc.gotoAndStop(0)
				raiz.memorama.victoria2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "moctezuma"){
				raiz.memorama.moctezuma1_mc.gotoAndStop(0)
				raiz.memorama.moctezuma2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "iturbide"){
				raiz.memorama.iturbide1_mc.gotoAndStop(0)
				raiz.memorama.iturbide2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}
			raiz.bios.gotoAndStop("ana")
		}
		
		//boton 12 button_12iturbide 
		this.button_12iturbide.addEventListener("click", eventoiturbide.bind(this));
		
		function eventoiturbide()
		{
		
			if(iturbide1 == 3 && iturbide2 ==3 && respuesta == "iturbide"){
				
			puntos = puntos + 1
				raiz.score.text = puntos
			this.gotoAndStop(0);
			}else if (respuesta == "ana"){
				raiz.memorama.ana1_mc.gotoAndStop(0)
				raiz.memorama.ana2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "villa"){
				raiz.memorama.villa1_mc.gotoAndStop(0)
				raiz.memorama.villa2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "madero"){
				raiz.memorama.madero1_mc.gotoAndStop(0)
				raiz.memorama.madero2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "hidalgo"){
				raiz.memorama.hidalgo1_mc.gotoAndStop(0)
				raiz.memorama.hidalgo2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "diaz"){
				raiz.memorama.diaz1_mc.gotoAndStop(0)
				raiz.memorama.diaz2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}
			else if (respuesta == "zapata"){
				raiz.memorama.zapata1_mc.gotoAndStop(0)
				raiz.memorama.zapata2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "obregon"){
				raiz.memorama.obregon1_mc.gotoAndStop(0)
				raiz.memorama.obregon2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "morelos"){
				raiz.memorama.morelos1_mc.gotoAndStop(0)
				raiz.memorama.morelos2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "victoria"){
				raiz.memorama.victoria1_mc.gotoAndStop(0)
				raiz.memorama.victoria2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "moctezuma"){
				raiz.memorama.moctezuma1_mc.gotoAndStop(0)
				raiz.memorama.moctezuma2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}else if (respuesta == "ana"){
				raiz.memorama.ana1_mc.gotoAndStop(0)
				raiz.memorama.ana2_mc.gotoAndStop(0)
				this.gotoAndStop(0);
				respuesta = ""
				
			}
			raiz.bios.gotoAndStop("iturbide")
		}
		/* _root.cheat_btn._alpha = 100
		_root.cheat_btn.enabled = 1
		
		_root.joker._alpha = 100
		_root.joker.enabled = 1
		
		_root.levantado1 = 0
		_root.levantado2 = 0
		_root.nohabilitar_cards()
		_root.peronajesmenu.boton1.enabled=1
		_root.peronajesmenu.boton2.enabled=1
		_root.peronajesmenu.boton3.enabled=1
		_root.peronajesmenu.boton4.enabled=1
		_root.peronajesmenu.boton5.enabled=1
		_root.peronajesmenu.boton6.enabled=1
		_root.peronajesmenu.boton7.enabled=1
		_root.peronajesmenu.boton8.enabled=1
		_root.peronajesmenu.boton9.enabled=1
		_root.peronajesmenu.boton10.enabled=1
		_root.peronajesmenu.boton11.enabled=1
		_root.peronajesmenu.boton12.enabled=1
		_root.peronajesmenu.boton13.enabled=1*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Capa 3
	this.button_12iturbide = new lib.ans_vhuerta_btn();
	this.button_12iturbide.name = "button_12iturbide";
	this.button_12iturbide.parent = this;
	this.button_12iturbide.setTransform(605.7,183.7,0.9,1.3,0,0,0,133.1,22.9);

	this.button_11ana = new lib.ans_vhuerta_btn();
	this.button_11ana.name = "button_11ana";
	this.button_11ana.parent = this;
	this.button_11ana.setTransform(-13.6,185.2,1.208,1.3,0,0,0,132.9,22.9);

	this.button_10moctezuma = new lib.ans_vhuerta_btn();
	this.button_10moctezuma.name = "button_10moctezuma";
	this.button_10moctezuma.parent = this;
	this.button_10moctezuma.setTransform(-32.1,314.7,1.089,1.3,0,0,0,132.9,22.9);

	this.button_9victoria = new lib.ans_vhuerta_btn();
	this.button_9victoria.name = "button_9victoria";
	this.button_9victoria.parent = this;
	this.button_9victoria.setTransform(-38.3,383.6,1.089,1.3,0,0,0,132.9,22.9);

	this.button_8morelos = new lib.ans_vhuerta_btn();
	this.button_8morelos.name = "button_8morelos";
	this.button_8morelos.parent = this;
	this.button_8morelos.setTransform(624,248.3,1.089,1.3,0,0,0,133.1,22.9);

	this.button_7obregon = new lib.ans_vhuerta_btn();
	this.button_7obregon.name = "button_7obregon";
	this.button_7obregon.parent = this;
	this.button_7obregon.setTransform(610.2,312.7,1,1.3,0,0,0,133.1,22.9);

	this.button_6zapata = new lib.ans_vhuerta_btn();
	this.button_6zapata.name = "button_6zapata";
	this.button_6zapata.parent = this;
	this.button_6zapata.setTransform(608.2,123.5,1,1.3,0,0,0,133.1,22.9);

	this.button_5diaz = new lib.ans_vhuerta_btn();
	this.button_5diaz.name = "button_5diaz";
	this.button_5diaz.parent = this;
	this.button_5diaz.setTransform(-54.3,56.2,1,1.3,0,0,0,133.1,22.9);

	this.button_4hidalgo = new lib.ans_vhuerta_btn();
	this.button_4hidalgo.name = "button_4hidalgo";
	this.button_4hidalgo.parent = this;
	this.button_4hidalgo.setTransform(-24,123.8,1.158,1.3,0,0,0,132.9,22.9);

	this.button_4madero = new lib.ans_vhuerta_btn();
	this.button_4madero.name = "button_4madero";
	this.button_4madero.parent = this;
	this.button_4madero.setTransform(609.7,383.6,1,1.3,0,0,0,133.1,22.9);

	this.button_3 = new lib.ans_vhuerta_btn();
	this.button_3.name = "button_3";
	this.button_3.parent = this;
	this.button_3.setTransform(-45.9,252.3,1,1.3,0,0,0,133.1,22.9);

	this.button_2 = new lib.ans_vhuerta_btn();
	this.button_2.name = "button_2";
	this.button_2.parent = this;
	this.button_2.setTransform(608.2,52.9,1,1.3,0,0,0,133.1,22.8);

	this.boton12 = new lib.hit2();
	this.boton12.name = "boton12";
	this.boton12.parent = this;
	this.boton12.setTransform(120.6,523.3,2.506,0.427,0,0,0,58.1,39.1);
	this.boton12.alpha = 0;

	this.boton11 = new lib.hit2();
	this.boton11.name = "boton11";
	this.boton11.parent = this;
	this.boton11.setTransform(105.6,474.2,2.28,0.427,0,0,0,58.1,38.9);
	this.boton11.alpha = 0;

	this.boton10 = new lib.hit2();
	this.boton10.name = "boton10";
	this.boton10.parent = this;
	this.boton10.setTransform(168.6,425.1,3.494,0.427,0,0,0,58.1,39);
	this.boton10.alpha = 0;

	this.boton9 = new lib.hit2();
	this.boton9.name = "boton9";
	this.boton9.parent = this;
	this.boton9.setTransform(114.6,373,2.412,0.427,0,0,0,58.1,39);
	this.boton9.alpha = 0;

	this.boton8 = new lib.hit2();
	this.boton8.name = "boton8";
	this.boton8.parent = this;
	this.boton8.setTransform(99.7,323,2.148,0.427,0,0,0,58.1,39.3);
	this.boton8.alpha = 0;

	this.boton5 = new lib.hit2();
	this.boton5.name = "boton5";
	this.boton5.parent = this;
	this.boton5.setTransform(66.5,171.6,1.606,0.427,0,0,0,58.1,39.1);
	this.boton5.alpha = 0;

	this.boton1 = new lib.hit2();
	this.boton1.name = "boton1";
	this.boton1.parent = this;
	this.boton1.setTransform(74.9,-27.8,1.751,0.427,0,0,0,58.1,39.1);
	this.boton1.alpha = 0;

	this.boton2 = new lib.hit2();
	this.boton2.name = "boton2";
	this.boton2.parent = this;
	this.boton2.setTransform(151.6,22.3,3.166,0.427,0,0,0,58.1,39.1);
	this.boton2.alpha = 0;

	this.boton3 = new lib.hit2();
	this.boton3.name = "boton3";
	this.boton3.parent = this;
	this.boton3.setTransform(185.6,74.9,3.723,0.427,0,0,0,58.1,39.1);
	this.boton3.alpha = 0;

	this.boton4 = new lib.hit2();
	this.boton4.name = "boton4";
	this.boton4.parent = this;
	this.boton4.setTransform(87.6,122.5,1.939,0.427,0,0,0,58.1,39);
	this.boton4.alpha = 0;

	this.boton6 = new lib.hit2();
	this.boton6.name = "boton6";
	this.boton6.parent = this;
	this.boton6.setTransform(116.6,222.7,2.506,0.427,0,0,0,58.1,39.1);
	this.boton6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.boton6},{t:this.boton4},{t:this.boton3},{t:this.boton2},{t:this.boton1},{t:this.boton5},{t:this.boton8},{t:this.boton9},{t:this.boton10},{t:this.boton11},{t:this.boton12},{t:this.button_2},{t:this.button_3},{t:this.button_4madero},{t:this.button_4hidalgo},{t:this.button_5diaz},{t:this.button_6zapata},{t:this.button_7obregon},{t:this.button_8morelos},{t:this.button_9victoria},{t:this.button_10moctezuma},{t:this.button_11ana},{t:this.button_12iturbide}]},1).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyYLcIRr2rQALgRANgDQAWgDAQAlQAzB9ACDcIABC0QABBnAMBKQAgDICAC4QB0CpCzCEQEPp/FjpOQAPAMgEAZQgDATgOAXQlKIfj6JYQgPAlgUAHQgbAJgkglQimilhMhiQh5idgsiYQgZhYgIhzQgDg5gCiZQgCkPgziJIumSqQgyBBgUAbQgmA0gZAtIgQAaQgJAOgLAIQgMAJgQACIgGAAQgMAAgKgIg");
	this.shape.setTransform(-447.5,119.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAPBoIAAhyQAAgSgPAAQgNAAAAASIAAByIhNAAIAAhxQAAgoAagbQAbgbAlAAQAsAAAaAfQAVAZAAAsIAABrg");
	this.shape_1.setTransform(802.1,382.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhLBLQgfgfgBgsQABgsAfgfQAfgeAtAAQAsAAAgAfQAfAfAAArQgBAsgfAfQgfAfgtAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAJgJgBgNQABgMgJgJQgJgJgMAAQgLAAgJAJg");
	this.shape_2.setTransform(779,383.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhJBnIAAhRIAEAAQASAAAIgHQAIgIABgSQACggAEgNQAEgMANgMQAWgXAnAAIAYAAIAABRQgRAAgFAHQgHAGgBAQQgGA7gnAZQgWAMgnAAg");
	this.shape_3.setTransform(759.6,383.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAABMQgdAcgeAAQgnAAgXgcQgSgWAAgpIAAh0IBMAAIAABtQAAANADAFQADAFAHAAQAMAAAAgXIAAhtIBNAAIAABtQgBANADAFQADAFAHAAQANAAAAgXIAAhtIBMAAIAAB9QAAAigXAYQgXAYghAAQgiAAgbgcg");
	this.shape_4.setTransform(735.8,383.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhLBMQgegfAAgsQAAgsAfggQAfgeAtAAQAsgBAeAfQAeAeABAsIgCAOIhyAAQgDgJAAgHQAAgKAEgKIAmAAQgFgXgVAAQgOAAgIANQgJAMAAATQgBATAJANQAJAMANgBQALAAALgLIArA1QgeAYglgBQgsAAgggeg");
	this.shape_5.setTransform(708.1,383.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AATCMIAAkXIBTAAIAAEXgAhlCMIAAkXIBUAAIAABkIAWAAIAABJIgWAAIAABqg");
	this.shape_6.setTransform(683.4,379.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhLBvQgfgfAAgsQAAgrAfgfQAfggArAAIAUACIAABTQgKgHgJAAQgMAAgHAIQgJAJAAAMQAAAMAJAJQAIAIAMAAQAdAAAAgpIAAimIBNAAIAACpQAAAvgZAeQgOARgWAKQgWAKgXAAQgsAAgggfg");
	this.shape_7.setTransform(647.4,379.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_8.setTransform(629.4,378.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhehpIBJAAIAVA3IAYg3IBHAAIhfDTg");
	this.shape_9.setTransform(615.3,383.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAheQAAgQgIgKQgIgJgNAAQgLAAgJAIQgJAJAAALQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJABgIAAQgtAAgfgeg");
	this.shape_10.setTransform(594.3,383.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgkCMIAAhTIANAAQBIABAAg8QAAg6hHAAIgcAAIAADHIhTAAIAAkXIBtAAQBGABAoAfQAwAnAABDQAAA+gpAoQgpAphAAAIgYgBg");
	this.shape_11.setTransform(568.1,379.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_12.setTransform(535.4,379.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhFBIQgVgYAAgsIAAhrIBNAAIAAByQAAASANAAQAOAAAAgSIAAhyIBNAAIAABxQAAAogaAbQgbAbgmAAQgrAAgaggg");
	this.shape_13.setTransform(518,383.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAheQAAgQgIgKQgIgJgNAAQgLAAgJAIQgJAJAAALQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJABgIAAQgtAAgfgeg");
	this.shape_14.setTransform(493.7,383.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhmCPIAAitQgBgbAGgRQAFgSANgPQAPgQAWgKQAWgJAXAAQAqAAAeAcQAdAdAAAqQAAAqgaAYQgZAYgvAAIgMAAIAAhJQAYAAAAgTQAAgSgSAAQgUAAAAAYIAAC2g");
	this.shape_15.setTransform(471,379);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAnAAQAJAAAPACIAABSQgIgFgHAAQgUAAgBAfIAABhg");
	this.shape_16.setTransform(678,318.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhLBMQgegfAAgsQgBgsAgggQAfgeAtAAQAsgBAfAfQAdAeAAAsIgBAOIhzAAQgCgJAAgHQAAgKADgKIAnAAQgFgXgVAAQgNAAgKANQgIAMgBATQAAATAJANQAJAMANgBQALAAALgLIArA1QgeAYglgBQgsAAgggeg");
	this.shape_17.setTransform(658.7,318.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgtCQIAAhGQAPAJAQAAQATAAAMgOQAKgOABgZIAAhMQAAgggaAAQgLAAgHAJQgJAIAAALQAAAMAIAHQAIAIALAAQAHAAAIgDIAABFQgRAGgOAAQgmAAgZgcQgagbAAgpQAAgsAfgeQAfgeAsAAQAYAAAWAKQAWAJAMARQAVAaAAAzIAABDQAAA2geAjQggAigwAAQgQAAgXgIg");
	this.shape_18.setTransform(634.3,322.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgtCQIAAhGQAPAJAPAAQAUAAAMgOQAKgOABgZIAAhMQAAgggaAAQgLAAgHAJQgJAIAAALQAAAMAIAHQAIAIALAAQAHAAAIgDIAABFQgRAGgPAAQglAAgZgcQgagbAAgpQAAgsAfgeQAfgeAsAAQAYAAAWAKQAWAJAMARQAVAaAAAzIAABDQAAA2gfAjQgfAigxAAQgPAAgXgIg");
	this.shape_19.setTransform(610.1,322.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAhfQAAgPgIgKQgIgJgNAAQgLAAgJAJQgJAIAAALQAAANAIAJQAIAHAMABQAJgBAJgEIAABPQgJABgIAAQgtAAgfgeg");
	this.shape_20.setTransform(585.6,318.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag2CLIAAhRQAGADAFAAQARAAAAgbIAAiwIBSAAIAAC7QAAArgZAcQgYAbgkAAQgLAAgOgEg");
	this.shape_21.setTransform(566.4,314.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAVCMIgviGIAihGIBQAAIglBKIA3CCgAhpCMIAAkXIBNAAIAAEXg");
	this.shape_22.setTransform(541,314.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhKBLQgfgfAAgtQAAgrAfgfQAggfAqAAQAmAAAeAYQAdAZAIAmIhPACQgJgNgQAAQgMAAgIAJQgJAIAAANQAAAMAJAKQAKAIAMABQATgBAIgWIBMgDQgDAtgeAcQgeAcgqAAQgsAAgfgfg");
	this.shape_23.setTransform(516.4,318.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_24.setTransform(498.5,313.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("ABBCPIAAi1QAAgNgCgFQgCgEgHAAQgNAAAAAVIAAC2IhSAAIAAi1QAAgNgCgFQgCgEgGAAQgNAAAAAWIAAC1IhTAAIAAjIQAAgmAXgYQAWgXAkAAQAsAAAWAnQAOgVAQgJQAQgJAYAAQAmAAAUAXQAUAYAAAtIAADBg");
	this.shape_25.setTransform(475.4,314.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhJBnIAAhRIAEAAQASAAAIgHQAIgIABgSQACggAEgNQAEgMANgMQAWgXAnAAIAYAAIAABRQgRAAgFAHQgHAGgBAQQgGA7gnAZQgWAMgnAAg");
	this.shape_26.setTransform(728.2,253.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_27.setTransform(714.4,248.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AhKBvQgggfAAgsQAAgrAfgfQAfggArAAIATACIAABTQgJgHgJAAQgMAAgHAIQgKAJABAMQgBAMAKAJQAIAIALAAQAeAAAAgpIAAimIBNAAIAACpQAAAvgZAeQgOARgWAKQgVAKgYAAQgsAAgfgfg");
	this.shape_28.setTransform(695.8,249.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhLBMQgegfAAgsQAAgsAfggQAfgeAtAAQAsgBAeAfQAeAeABAsIgCAOIhyAAQgDgJAAgHQAAgKAEgJIAmAAQgFgYgVAAQgOAAgIANQgJAMAAATQgBATAJANQAJAMANgBQALAAALgLIArA1QgeAYglgBQgsAAgggeg");
	this.shape_29.setTransform(672.5,253.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_30.setTransform(654.6,248.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAbCMIg+iaIBHh9IBWAAIhLB/IBKCYgAh4CMIAAkXIBTAAIAAEXg");
	this.shape_31.setTransform(636.5,249.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("Ag9CPIAAhCQAPAGAMAAQAlAAALgqQgUAMgTAAQgcAAgTgVQgTgVAAggIAAiBIBOAAIAABuQAAASANABQAPgBAAgUIAAhsIBMAAIAAC2QAAAygcAgQgjAlgvAAQgVAAgVgIg");
	this.shape_32.setTransform(599.7,258.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAOBoIAAhyQAAgSgOAAQgOAAAAASIAAByIhMAAIAAhxQAAgoAbgbQAZgbAmAAQAsAAAbAfQAUAZAAAsIAABrg");
	this.shape_33.setTransform(577.2,253.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhLBLQgggfABgsQgBgsAggfQAfgeAuAAQArAAAfAfQAfAfABArQAAAsggAfQggAfgsAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAIAJAMAAQAMAAAJgJQAIgJAAgNQAAgMgIgJQgJgJgMAAQgMAAgIAJg");
	this.shape_34.setTransform(554.2,253.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AANCMIAAhsQAAgNgDgFQgCgEgIAAQgMAAAAATIAABvIhNAAIAAkXIBNAAIAABWQASgPAUAAQAdAAASAWQARAVAAAjIAACCg");
	this.shape_35.setTransform(531.2,249.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAvCNQgaAAgWgMQgXgMgOgVQgRgaAAgsIAAimIBLAAIAABOIAjAAIAABQIgjAAQAAAYAIAJQAIAKAUAAIAABQIgJAAg");
	this.shape_36.setTransform(512.9,249.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAPBoIAAhyQAAgSgPAAQgOAAAAASIAAByIhMAAIAAhxQAAgoAbgbQAagbAlAAQAsAAAbAfQAUAZAAAsIAABrg");
	this.shape_37.setTransform(494.5,253.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AATCPIAAiuQAAgQgEgHQgEgGgKAAQgTAAAAAdIAAAiIAXAAIAABKIgXAAIAABCIhTAAIAAixQAAgzAcgdQAcgcAyAAQAyAAAXAaQAYAZAAA3IAACzg");
	this.shape_38.setTransform(470.8,249.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAvCNQgaAAgWgMQgXgMgOgVQgRgaAAgsIAAimIBLAAIAABOIAjAAIAABQIgjAAQAAAYAIAJQAIAKAUAAIAABQIgJAAg");
	this.shape_39.setTransform(682.5,185.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAOBoIAAhyQABgSgPAAQgNAAAAASIAAByIhNAAIAAhxQAAgoAagbQAagbAmAAQAsAAAaAfQAVAZAAAsIAABrg");
	this.shape_40.setTransform(664.1,188.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAhfQAAgPgIgKQgIgJgNAAQgLAAgJAJQgJAIAAALQAAANAIAJQAIAHAMABQAJgBAJgEIAABPQgJABgIAAQgtAAgfgeg");
	this.shape_41.setTransform(639.8,188.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_42.setTransform(622,184.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AhnCPIAAitQAAgbAGgRQAFgSAOgPQAOgQAWgKQAXgJAWAAQArAAAdAcQAcAdAAAqQAAAqgaAYQgXAYgxAAIgLAAIAAhJQAYAAAAgTQAAgSgSAAQgTAAgBAYIAAC2g");
	this.shape_43.setTransform(605,184.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAvCNQgaAAgWgMQgXgMgOgVQgRgaAAgsIAAimIBLAAIAABOIAjAAIAABQIgjAAQAAAYAIAJQAIAKAUAAIAABQIgJAAg");
	this.shape_44.setTransform(574.8,185.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAoAAQAIAAAPACIAABSQgIgFgGAAQgWAAAAAfIAABhg");
	this.shape_45.setTransform(562.2,188.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AhLBMQgegfAAgsQAAgsAfggQAfgeAtAAQAsgBAeAfQAeAeABAsIgCAOIhyAAQgDgJAAgHQAAgKAEgJIAlAAQgEgYgVAAQgOAAgIANQgJAMAAATQgBATAJANQAJAMANgBQALAAALgLIArA1QgeAYglgBQgsAAgggeg");
	this.shape_46.setTransform(542.9,188.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgtCEQgWgKgOgRQgZgeAAgvIAAipIBNAAIAACmQAAApAdAAQAMAAAIgIQAJgJAAgMQAAgMgIgJQgIgIgMAAQgIAAgLAHIAAhTIAUgCQArAAAfAgQAfAfAAArQAAAsggAfQgfAfgtAAQgXAAgVgKg");
	this.shape_47.setTransform(519.3,185.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AhLBLQgfgfgBgsQABgsAfgfQAggeAsAAQAsAAAgAfQAeAfAAArQAAAsgfAfQgfAfgtAAQgrAAgggfgAgUgVQgJAJAAAMQAAANAJAJQAIAJAMAAQAMAAAJgJQAJgJgBgNQABgMgJgJQgJgJgMAAQgMAAgIAJg");
	this.shape_48.setTransform(495.2,188.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAZCMIgohaIAAhHIAGAAQAaAAAAgXQAAgUgdAAIgPAAIAADMIhTAAIAAkXIBrAAQAvAAAbAYQAeAbAAAqQAAAqglAcIAwB0g");
	this.shape_49.setTransform(472.3,184.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AhLBvQgfgfAAgsQAAgrAfgfQAgggAqAAIAUACIAABTQgKgHgJAAQgLAAgJAIQgIAJgBAMQABAMAIAJQAKAIALAAQAdAAAAgpIAAimIBNAAIAACpQAAAvgZAeQgOARgVAKQgXAKgWAAQgtAAgggfg");
	this.shape_50.setTransform(714.2,120.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_51.setTransform(696.3,120.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AhLBMQgegfAAgsQAAgsAfggQAfgeAtAAQAsgBAeAfQAeAeABAsIgCAOIhyAAQgDgJAAgHQAAgKAEgJIAmAAQgFgYgVAAQgOAAgIANQgJAMAAATQgBATAJANQAJAMANgBQALAAALgLIArA1QgeAYglgBQgsAAgggeg");
	this.shape_52.setTransform(678.8,123.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_53.setTransform(660.9,119.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("Ag2COIAAitQAAgdAKgVQAMgaAagRQAZgRAcAAIAIABIAABQIgDAAQgPAAgIAJQgIAKAAASIAAAHIAiAAIAABPIgiAAIAABPg");
	this.shape_54.setTransform(648.2,119.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAvCNQgaAAgWgMQgXgMgOgVQgRgaAAgsIAAimIBLAAIAABOIAjAAIAABQIgjAAQAAAYAIAJQAIAKAUAAIAABQIgJAAg");
	this.shape_55.setTransform(633.4,120.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AhKBMQgggfAAgsQAAgsAgggQAfgeAsAAQAtgBAfAfQAdAeAAAsIAAAOIh0AAQgCgJAAgHQAAgKADgJIAmAAQgDgYgWAAQgNAAgKANQgJAMAAATQABATAIANQAJAMANgBQAMAAAKgLIAsA1QgfAYglgBQgtAAgegeg");
	this.shape_56.setTransform(614.9,123.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AATCMIAAkXIBTAAIAAEXgAhlCMIAAkXIBUAAIAABkIAWAAIAABJIgWAAIAABqg");
	this.shape_57.setTransform(590.2,120.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AhJBnIAAhRIAEAAQASAAAIgHQAIgIABgSQACggAEgNQAEgMANgMQAWgXAnAAIAYAAIAABRQgRAAgFAHQgHAGgBAQQgGA7gnAZQgWAMgnAAg");
	this.shape_58.setTransform(559.1,124.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AhKBMQgggfAAgsQABgsAfggQAfgeAsAAQAtgBAeAfQAfAeAAAsIgBAOIhzAAQgDgJAAgHQAAgKAEgJIAlAAQgEgYgVAAQgOAAgIANQgKAMABATQAAATAIANQAJAMANgBQALAAALgLIAsA1QgfAYglgBQgtAAgegeg");
	this.shape_59.setTransform(540,123.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AA/BoIAAhtQAAgNgCgFQgDgFgHAAQgMAAAAAXIAABtIhNAAIAAhtQABgNgDgFQgDgFgHAAQgNAAAAAXIAABtIhMAAIAAh9QAAgiAXgYQAXgYAhAAQAiAAAaAdQAfgdAdAAQAnAAAXAcQASAVAAAqIAAB0g");
	this.shape_60.setTransform(512,123.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAheQAAgQgIgKQgIgJgNAAQgLAAgJAIQgJAJAAALQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJACgIAAQgtgBgfgeg");
	this.shape_61.setTransform(482.8,123.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("Ag3CLIAAhRQAHADAFAAQAQAAABgbIAAiwIBSAAIAAC7QAAArgZAcQgYAbgkAAQgLAAgPgEg");
	this.shape_62.setTransform(463.6,120.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AhKBMQgggfAAgsQABgsAfggQAfgeAsAAQAtgBAeAfQAfAeAAAsIgBAOIhzAAQgDgJAAgHQAAgKAEgJIAlAAQgEgYgVAAQgOAAgIANQgKAMABATQAAATAIANQAJAMANgBQALAAALgLIAsA1QgfAYglgBQgtAAgegeg");
	this.shape_63.setTransform(603.4,59.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AhJBnIAAhRIAEAAQASAAAIgHQAIgIABgSQACggAEgNQAEgMANgMQAWgXAnAAIAYAAIAABRQgRAAgFAHQgHAGgBAQQgGA7gnAZQgWAMgnAAg");
	this.shape_64.setTransform(584,59.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AhLBLQgggfAAgsQAAgsAggfQAggeAtAAQArAAAgAfQAeAfAAArQABAsggAfQggAfgsAAQgrAAgggfgAgUgVQgJAJAAAMQAAANAJAJQAIAJAMAAQAMAAAJgJQAJgJAAgNQAAgMgJgJQgJgJgMAAQgMAAgIAJg");
	this.shape_65.setTransform(564.7,59.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAYCMIgnhaIAAhHIAGAAQAaAAAAgXQAAgUgdAAIgPAAIAADMIhUAAIAAkXIBrAAQAwAAAbAYQAeAbAAAqQAAAqglAcIAwB0g");
	this.shape_66.setTransform(541.8,55.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_67.setTransform(511.3,55.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAPBmIAAg9QAAgWgPAAQgNAAAAATIAABAIhNAAIAAg2QAAgTAHgMQAHgMARgJQgRgLgHgNQgHgMAAgTIAAgqIBNAAIAAA0QAAAIAEAFQAEAFAFAAQAPAAAAgSIAAg0IBMAAIAAAtQAAATgFAMQgGAMgOAJQAOAIAGALQAFAMAAASIAAA5g");
	this.shape_68.setTransform(494.2,59.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AATCPIAAiuQAAgQgEgHQgEgGgKAAQgTAAAAAdIAAAiIAXAAIAABKIgXAAIAABCIhTAAIAAixQAAgzAcgdQAcgcAyAAQAyAAAXAaQAYAZAAA3IAACzg");
	this.shape_69.setTransform(470.8,55);

	this.button_1 = new lib.cerrar();
	this.button_1.name = "button_1";
	this.button_1.parent = this;
	this.button_1.setTransform(971.9,-36.3,2,2,0,0,0,19.4,20.3);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.cerrar(), 3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#990000").s().p("AhfB8QAAgqApAAQAqAAAAAqQAAApgqAAQgpAAAAgpgAhKAvIAAhLIAiAAQAHAhAXAAQAdAAAAg4QAAhYglAAQgeAAAAArQAAAMACAVIgkgLQgEgTAAgKQAAg9BRgBQBlABAABiQAAApgZAbQgZAdgkAAQgXAAgZgSIAAAig");
	this.shape_70.setTransform(307.9,-60.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#990000").s().p("AhrAGQAAg4AgglQAgglAwAAQBmAAAACEIh8AAQAABdAvAAQAsAAAAg0IgBgRIAjAKQgGBThbAAQh2AAAAh3gAgQgnIgBAVIAzAAQAAhSgaAAQgVAAgDA9g");
	this.shape_71.setTransform(283.8,-56.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#990000").s().p("Ag/CnIAegVIAAAIQAAAcANAAQAPAAAAgUQAAgMgRgdIAAjrQAfgBA2gGIAADwIABAhIgOAoQgQAQgiAAQgxAAgOgpgAgWiwQAAgfAnAAQAoAAAAAfQAAAfgoAAQgnAAAAgfg");
	this.shape_72.setTransform(263.1,-56.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#990000").s().p("Ah+A2QAAg1BFgTQA/gUAAgdQAAgkgkAAQgqAAAAAjQAAALAHATIgrgIIgBgVQAAg4BmgBQBiABgBA0IAACPQAAAWAPAAQAFAAAIgEIAIAVQgfANgeAAQgsAAgLgcQgUAdgpAAQhKgBgBhGgAgNgHQgaAOAAAmQgBAuATAAQAaABAAgvIAAhDQgIAJgKAGg");
	this.shape_73.setTransform(246.3,-56.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#990000").s().p("AAaB6IAAiuQAAgagPAAQgOAAgLAWQgMAUAAAdIAACBIhVAAIAAjtQAsAAApgGIAAAtQAggtAuABQA8gBAAA9IAAC2g");
	this.shape_74.setTransform(219,-57);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#990000").s().p("Ah1AAQAAh7B1AAQB2AAAAB7QAAB8h2AAQh1AAAAh8gAgcAAQAABnAcAAQAcAAABhnQgBhmgcAAQgcAAAABmg");
	this.shape_75.setTransform(192.3,-56.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#990000").s().p("AhoAsIAsgJIAAAPQgBAUASAQQARAQAXAAQAfgBAAgaQAAgRgygWQhLggAAgzQAAghAdgWQAdgWAsABQBRAAAIBCIgpAIQgBg2gxAAQgeAAABAaQgBASA0AVQBQAhAAAxQAABQhmAAQhrAAAAhQg");
	this.shape_76.setTransform(167.7,-56.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#990000").s().p("AhYB6IAAjtIAQABQAeAAAngHIAAAnQAUgnAfAAQApAAAAAuQAAAMgEAPIgEAUIg7AAIAFgVQAEgKAAgHQAAgPgLAAQgIAAgIAUQgHATAAAWIAACOg");
	this.shape_77.setTransform(146.9,-57);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#990000").s().p("AhrAGQAAg4AgglQAgglAvAAQBoAAAACEIh9AAQAABdAuAAQAtAAAAg0IAAgRIAiAKQgFBThcAAQh2AAAAh3gAgQgnIgBAVIAyAAQABhSgZAAQgWAAgDA9g");
	this.shape_78.setTransform(123.5,-56.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#990000").s().p("AhwCiIAAk8QAkgBAygGIAAAkQAYgkAiAAQAlAAAWAiQAWAiAAA4QAAB9hUAAQghAAgWgaIAABkgAgbgmQAABbAbAAQAYAAAAhbQAAhYgXgBQgcABAABYg");
	this.shape_79.setTransform(98.9,-52.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#990000").s().p("AhrAGQAAg4AgglQAgglAvAAQBoAAAACEIh9AAQAABdAuAAQAtAAAAg0IAAgRIAiAKQgFBThcAAQh2AAAAh3gAgQgnIgBAVIAyAAQABhSgZAAQgWAAgDA9g");
	this.shape_80.setTransform(58.7,-56.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#990000").s().p("AgxBnIAAicIgdAAIAAgbIAdAAIAAgqQAsgMAogXIAABNIAmAAIAAAbIgmAAIAACnQABAPAJAAQAIAAABgKIAZACQgKAlg2AAQhAAAAAg3g");
	this.shape_81.setTransform(39,-60.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#990000").s().p("AhoAsIAsgJIAAAPQAAAUARAQQARAQAXAAQAfgBAAgaQAAgRgygWQhLggAAgzQAAghAdgWQAdgWAsABQBRAAAIBCIgpAIQgBg2gxAAQgeAAABAaQAAASAzAVQBQAhAAAxQAABQhmAAQhrAAAAhQg");
	this.shape_82.setTransform(19.6,-56.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#990000").s().p("AhrAGQAAg4AgglQAfglAxAAQBmAAABCEIh9AAQAABdAuAAQAtAAAAg0IgBgRIAjAKQgFBThcAAQh2AAAAh3gAgQgnIgBAVIAzAAQAAhSgaAAQgWAAgCA9g");
	this.shape_83.setTransform(-4,-56.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#990000").s().p("AhoAsIAtgJIgCAPQABAUARAQQARAQAYAAQAdgBAAgaQAAgRgwgWQhMggAAgzQAAghAdgWQAdgWAtABQBQAAAIBCIgqAIQABg2gyAAQgdAAgBAaQABASAzAVQBQAhAAAxQAABQhmAAQhrAAAAhQg");
	this.shape_84.setTransform(-42,-56.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#990000").s().p("AhrAGQAAg4AgglQAfglAxAAQBmAAAACEIh8AAQAABdAuAAQAtAAAAg0IgBgRIAjAKQgFBThcAAQh2AAAAh3gAgQgnIgBAVIAzAAQAAhSgaAAQgWAAgCA9g");
	this.shape_85.setTransform(-65.6,-56.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#990000").s().p("AAaB6IAAiuQAAgagPAAQgOAAgLAWQgMAUAAAdIAACBIhVAAIAAjtQAsAAApgGIAAAtQAggtAuABQA8gBAAA9IAAC2g");
	this.shape_86.setTransform(-105.8,-57);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#990000").s().p("AhrAGQAAg4AgglQAgglAvAAQBoAAAACEIh9AAQAABdAuAAQAtAAAAg0IgBgRIAjAKQgGBThbAAQh2AAAAh3gAgQgnIgBAVIAzAAQAAhSgZAAQgWAAgDA9g");
	this.shape_87.setTransform(-131.5,-56.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#990000").s().p("AgqClIAAjsQAoAAAtgHIAADzgAgmiFQAAgfAnAAQAoAAAAAfQAAAfgoAAQgnAAAAgfg");
	this.shape_88.setTransform(-150.4,-61.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#990000").s().p("AhwA/IAAi0QArgCArgEIAAC4QAAAXAPAAQAmAAAAhTIAAh2QArgCAqgEIAADyIhVAAIAAgmQgdArgvAAQg/AAAAg9g");
	this.shape_89.setTransform(-170.8,-56.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#990000").s().p("AASCFIgRABQiOAAgBilQAAimCPAAQCNAAAACpQAABuhIAmQALAdAQAAQAUAAgCgZIAAgGIAZAJIABAMQgBA7g3AAQg2AAgNhBgAgfBVQAJAYAVAAQAHgBAJgFQgGgjgRAAQgNAAgKARgAAiA+QALgogBg6QABhPgKgcQgJgdgaAAQgZAAgJAeQgKAdAABNQAAA+AHAfQAQgXAUgBQAVABAOAcg");
	this.shape_90.setTransform(-200.1,-57.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#990000").s().p("AhfBDQAAgpAZgbQAZgdAkAAQAXgBAZATIAAgjIAkAAIAABMIgiAAQgHghgXgBQgdABAAA4QAABXAmABQAdAAAAgrQAAgMgCgVIAkAKQAEAVAAAJQAAA9hRAAQhlAAAAhigAANh7QAAgpAqAAQApAAAAApQAAAqgpAAQgqAAAAgqg");
	this.shape_91.setTransform(-227.8,-52.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AAPBoIAAhyQAAgSgPAAQgNAAAAASIAAByIhNAAIAAhxQAAgoAbgbQAagbAlAAQAsAAAaAfQAVAZAAAsIAABrg");
	this.shape_92.setTransform(11.9,382.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_93.setTransform(-5.6,378.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AhLBMQgfgfAAgtQAAgrAfggQAfgeAsAAQAxAAAdAcQAdAeAAAxIAABkIhNAAIAAheQAAgQgIgJQgIgKgNAAQgLAAgJAJQgJAIAAAMQAAANAIAHQAIAJAMgBQAJAAAJgEIAABOQgJACgIABQgtAAgfgfg");
	this.shape_94.setTransform(-24.6,383.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgtCEQgWgKgOgRQgZgeAAgvIAAipIBNAAIAACmQAAApAdAAQAMAAAIgIQAJgJAAgMQAAgMgIgJQgIgIgMAAQgIAAgLAHIAAhTIAUgCQArAAAfAgQAfAfAAAqQAAAtggAfQgfAfgtAAQgXAAgVgKg");
	this.shape_95.setTransform(-48.2,379.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AhLBLQgfgfgBgsQABgsAfgfQAfgeAuAAQArAAAgAfQAeAfAAArQAAAsgfAfQgfAfgtAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAJgJgBgNQABgMgJgJQgJgJgMAAQgLAAgJAJg");
	this.shape_96.setTransform(-72.4,383.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AAbCMIg+iaIBHh9IBWAAIhLB/IBKCYgAh4CMIAAkXIBTAAIAAEXg");
	this.shape_97.setTransform(-96.2,379.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AAvCNQgaAAgWgMQgXgMgOgVQgRgaAAgsIAAimIBLAAIAABOIAjAAIAABQIgjAAQAAAYAIAJQAIAKAUAAIAABQIgJAAg");
	this.shape_98.setTransform(-128.7,379.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAoAAQAIAAAPACIAABSQgIgFgGAAQgWAAAAAfIAABhg");
	this.shape_99.setTransform(-141.3,382.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AhFBIQgVgYAAgsIAAhrIBMAAIAAByQAAASAOAAQAOAAAAgSIAAhyIBNAAIAABxQAAAogaAbQgbAbgmAAQgrAAgaggg");
	this.shape_100.setTransform(-160.5,383.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AAbCMIg+iaIBHh9IBWAAIhLB/IBKCYgAh4CMIAAkXIBTAAIAAEXg");
	this.shape_101.setTransform(-184,379.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AAPBoIAAhyQAAgSgPAAQgOAAAAASIAAByIhMAAIAAhxQAAgoAbgbQAagbAlAAQAsAAAbAfQAUAZAAAsIAABrg");
	this.shape_102.setTransform(15.7,318.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AhLBLQgfgfAAgsQAAgsAfgfQAfgeAuAAQArAAAfAfQAgAfAAArQgBAsgfAfQggAfgsAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAIgJAAgNQAAgMgIgJQgJgJgMAAQgLAAgJAJg");
	this.shape_103.setTransform(-7.3,318.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AhJBoIAAhRIAEAAQASAAAIgIQAIgIABgSQACgfAEgNQAEgNANgNQAWgWAnABIAYAAIAABRQgRAAgFAFQgHAHgBAQQgGA8gnAYQgWANgnAAg");
	this.shape_104.setTransform(-26.7,318.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_105.setTransform(-40.6,313.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAoAAQAIAAAPACIAABSQgIgFgGAAQgWAAAAAfIAABhg");
	this.shape_106.setTransform(-52.2,318.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAnAAQAKAAAOACIAABSQgIgFgHAAQgUAAAAAfIAABhg");
	this.shape_107.setTransform(-65.7,318.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AhLBLQgggfAAgsQAAgsAggfQAggeAtAAQArAAAgAfQAeAfAAArQABAsggAfQgfAfgtAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAIAJAMAAQAMAAAJgJQAJgJAAgNQAAgMgJgJQgJgJgMAAQgMAAgIAJg");
	this.shape_108.setTransform(-85.2,318.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("ABACPIAAi1QAAgNgBgFQgCgEgHAAQgNAAAAAVIAAC2IhSAAIAAi1QABgNgDgFQgCgEgHAAQgMAAAAAWIAAC1IhTAAIAAjIQAAgmAXgYQAXgXAjAAQAsAAAWAnQAOgVAQgJQAQgJAYAAQAmAAAUAXQAUAYAAAtIAADBg");
	this.shape_109.setTransform(-114,314.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("ABABoIAAhtQgBgNgCgFQgDgFgHAAQgNAAAAAXIAABtIhMAAIAAhtQAAgNgCgFQgDgFgHAAQgMAAAAAXIAABtIhNAAIAAh9QAAgiAXgYQAXgYAhAAQAiAAAaAdQAegdAeAAQAnAAAXAcQASAVAAAqIAAB0g");
	this.shape_110.setTransform(-157.7,318.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_111.setTransform(-180.2,313.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("Ag3CLIAAhRQAHADAFAAQAQAAAAgbIAAiwIBSAAIAAC7QABArgYAcQgZAbgkAAQgLAAgPgEg");
	this.shape_112.setTransform(-193.7,314.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AAOBoIAAhyQAAgSgOAAQgNAAAAASIAAByIhNAAIAAhxQAAgoAagbQAagbAmAAQAsAAAaAfQAVAZAAAsIAABrg");
	this.shape_113.setTransform(31.5,253.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AhLBLQgggfAAgsQAAgsAggfQAggeAtAAQArAAAgAfQAeAfAAArQABAsggAfQggAfgsAAQgrAAgggfgAgUgVQgJAJAAAMQAAANAJAJQAIAJAMAAQAMAAAJgJQAJgJAAgNQAAgMgJgJQgJgJgMAAQgMAAgIAJg");
	this.shape_114.setTransform(8.5,253.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AhJBnIAAhRIAEAAQASAAAIgHQAIgIABgSQACggAEgNQAEgMANgMQAWgXAnAAIAYAAIAABRQgRAAgFAHQgHAGgBAQQgGA7gnAZQgWAMgnAAg");
	this.shape_115.setTransform(-10.9,253.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAnAAQAKAAAOACIAABSQgIgFgHAAQgUAAAAAfIAABhg");
	this.shape_116.setTransform(-24.2,253.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AhKBMQgggfAAgsQAAgsAgggQAfgeAsAAQAtgBAfAfQAdAeAAAsIAAANIh0AAQgCgIAAgHQAAgKADgJIAmAAQgDgYgWAAQgNAAgKANQgJAMAAATQABATAIANQAJAMANgBQAMAAAKgLIAsA1QgfAYglgBQgtAAgegeg");
	this.shape_117.setTransform(-43.5,253.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AhKBvQgggfAAgsQAAgrAfgfQAgggAqAAIATACIAABTQgJgHgJAAQgMAAgHAIQgKAJABAMQgBAMAKAJQAJAIAKAAQAeAAAAgpIAAimIBNAAIAACpQAAAvgZAeQgOARgWAKQgVAKgYAAQgsAAgfgfg");
	this.shape_118.setTransform(-67.8,249.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAPBoIAAhyQAAgSgPAAQgOAAAAASIAAByIhMAAIAAhxQAAgoAbgbQAagbAlAAQAsAAAbAfQAUAZAAAsIAABrg");
	this.shape_119.setTransform(-90.9,253.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AATCPIAAiuQAAgQgEgHQgEgGgKAAQgTAAAAAdIAAAiIAXAAIAABKIgXAAIAABCIhTAAIAAixQAAgzAcgdQAcgcAyAAQAyAAAXAaQAYAZAAA3IAACzg");
	this.shape_120.setTransform(-114.7,249.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AAOBoIAAhyQAAgSgOAAQgNAAAAASIAAByIhNAAIAAhxQAAgoAagbQAagbAmAAQAsAAAaAfQAVAZAAAsIAABrg");
	this.shape_121.setTransform(-148.9,253.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAheQAAgQgIgKQgIgJgNAAQgLAAgJAJQgJAIAAALQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJACgIgBQgtAAgfgeg");
	this.shape_122.setTransform(-173.2,253.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgpCMIAAkXIBTAAIAAEXg");
	this.shape_123.setTransform(-192,249.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AhKBMQgggfAAgsQAAgsAgggQAfgeAsAAQAtgBAfAfQAeAeAAAsIgBANIh0AAQgCgIAAgHQAAgKADgJIAmAAQgDgYgWAAQgNAAgJANQgKAMABATQAAATAIANQAJAMANgBQAMAAAKgLIAsA1QgfAYglgBQgtAAgegeg");
	this.shape_124.setTransform(95.1,188.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AAOBoIAAhyQAAgSgOAAQgNAAAAASIAAByIhNAAIAAhxQAAgoAagbQAagbAmAAQAsAAAaAfQAVAZAAAsIAABrg");
	this.shape_125.setTransform(72,188.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAnAAQAKAAAOACIAABSQgIgFgHAAQgUAAAAAfIAABhg");
	this.shape_126.setTransform(55,188.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AhGBIQgUgYAAgsIAAhrIBNAAIAAByQAAASANAAQAPAAAAgSIAAhyIBMAAIAABxQAAAogbAbQgaAbgmAAQgrAAgbggg");
	this.shape_127.setTransform(35.8,189.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AhLBLQgfgfgBgsQABgsAfgfQAggeAtAAQArAAAgAfQAeAfAAArQAAAsgfAfQgfAfgtAAQgrAAgggfgAgUgVQgJAJAAAMQAAANAJAJQAIAJAMAAQAMAAAJgJQAJgJgBgNQABgMgJgJQgJgJgMAAQgMAAgIAJg");
	this.shape_128.setTransform(12.8,188.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgtCEQgWgKgOgRQgZgeAAgvIAAipIBNAAIAACmQAAApAdAAQAMAAAIgIQAJgJAAgMQAAgMgIgJQgIgIgMAAQgIAAgLAHIAAhTIAUgCQArAAAfAgQAfAfAAAqQAAAtggAfQgfAfgtAAQgXAAgVgKg");
	this.shape_129.setTransform(-10.8,185.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AhJBnIAAhRIAEAAQASAAAIgHQAIgIABgSQACggAEgNQAEgMANgMQAWgXAnAAIAYAAIAABRQgRAAgFAHQgHAGgBAQQgGA7gnAZQgWAMgnAAg");
	this.shape_130.setTransform(-30.9,189.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AhFBIQgVgYAAgsIAAhrIBNAAIAAByQAAASANAAQAOAAAAgSIAAhyIBNAAIAABxQAAAogaAbQgbAbgmAAQgrAAgaggg");
	this.shape_131.setTransform(-49.9,189.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AhnBoQgrgrAAg9QAAg9ArgqQAsgrA9AAQA8AAAqArQArAsAAA7QAAA9grArQgrArg9AAQg8AAgrgrgAgrgtQgSATAAAaQAAAaASATQATATAYAAQAaAAASgTQASgSAAgbQAAgagSgTQgSgTgaAAQgZAAgSATg");
	this.shape_132.setTransform(-77.1,184.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("Ag9CPIAAhCQAQAGALAAQAlAAAKgqQgSAMgUAAQgdAAgSgVQgSgVAAggIAAiBIBMAAIAABuQAAASAOABQAPgBAAgUIAAhsIBMAAIAAC2QABAygdAgQgiAlgwAAQgVAAgVgIg");
	this.shape_133.setTransform(-114.8,193.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AhgBmIA+h7IhBAAIAAhQIC+AAIg/B7IBIAAIAABQg");
	this.shape_134.setTransform(-136.3,188.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AhgBmIA+h7IhAAAIAAhQIC8AAIg/B7IBIAAIAABQg");
	this.shape_135.setTransform(-157.1,188.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AhnBoQgrgrAAg9QAAg9ArgqQAsgrA9AAQA8AAAqArQArAsAAA7QAAA9grArQgrArg9AAQg8AAgrgrgAgrgtQgSATAAAaQAAAaASATQATATAYAAQAaAAASgTQASgSAAgbQAAgagSgTQgSgTgaAAQgZAAgSATg");
	this.shape_136.setTransform(-183.1,184.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AAPBoIAAhyQAAgSgPAAQgOAAAAASIAAByIhMAAIAAhxQAAgoAbgbQAagbAlAAQAsAAAbAfQAUAZAAAsIAABrg");
	this.shape_137.setTransform(45.1,123.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AhLBLQgfgfgBgsQABgsAfgfQAfgeAuAAQArAAAfAfQAgAfAAArQgBAsgfAfQgfAfgtAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAIgJAAgNQAAgMgIgJQgJgJgMAAQgLAAgJAJg");
	this.shape_138.setTransform(22,123.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AAvCNQgaAAgWgMQgXgMgOgVQgRgaAAgsIAAimIBLAAIAABOIAjAAIAABQIgjAAQAAAYAIAJQAIAKAUAAIAABQIgJAAg");
	this.shape_139.setTransform(3.2,120.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AhqCOIAAiqQAAguAZgeQAOgRAWgKQAVgKAXAAQAtAAAfAfQAgAfAAAsQAAAqgfAgQgfAggrAAIgUgCIAAhTQAKAIAIAAQAMgBAJgIQAIgJAAgMQAAgMgJgJQgIgIgMgBQgdABAAApIAACmg");
	this.shape_140.setTransform(-15.6,127.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAheQAAgQgIgKQgIgJgNAAQgLAAgJAIQgJAJAAALQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJACgIAAQgtgBgfgeg");
	this.shape_141.setTransform(-41,123.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_142.setTransform(-58.8,120.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AhnBpQgrgqAAg+QAAg+ArgqQArgrA+AAQA+AAApAqQAdAdAMAzIhZAGQgPgugqAAQgaAAgRATQgRASAAAcQAAAbARASQARASAaAAQAZAAAQgQQAQgPACgeIBYACQgJBEgmAlQgmAlg+AAQg9AAgqgqg");
	this.shape_143.setTransform(-80.7,120.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AAWCMIgwiGIAihGIBQAAIglBKIA3CCgAhpCMIAAkXIBMAAIAAEXg");
	this.shape_144.setTransform(-116.7,120.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AhKBLQgfgfAAgtQAAgrAfgfQAfgfArAAQAmAAAeAZQAdAYAHAmIhNACQgLgNgPAAQgMAAgIAJQgJAIAAANQAAAMAJAKQAJAIAMABQAUgBAIgWIBMgDQgDAtgeAcQgeAcgqABQgsgBgfgfg");
	this.shape_145.setTransform(-141.3,123.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_146.setTransform(-159.2,119.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAoAAQAIAAAPACIAABSQgIgFgGAAQgWAAAAAfIAABhg");
	this.shape_147.setTransform(-170.8,123.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AAOCMQgsAAgZgWQgYgWAAgqIAAhtQAAgoAXgWQAXgWApAAIBIAAIAABQIg1AAQgVAAgBAOQABAJAEADQAFADAOAAIAtAAIAAA9Ig2AAQgLAAgEADQgFAEAAAHQAAAJAFADQAEADAPAAIA4AAIAABQg");
	this.shape_148.setTransform(-188.7,120.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAnAAQAJAAAPACIAABSQgIgFgHAAQgUAAgBAfIAABhg");
	this.shape_149.setTransform(56,58.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AhFBIQgVgYAAgsIAAhrIBNAAIAAByQAAASANAAQAPAAAAgSIAAhyIBMAAIAABxQAAAogaAbQgbAbgmAAQgrAAgaggg");
	this.shape_150.setTransform(36.8,59.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AhLBLQgggfAAgsQAAgsAggfQAggeAtAAQArAAAgAfQAeAfAAArQABAsggAfQgfAfgtAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAIAJAMAAQAMAAAJgJQAJgJAAgNQAAgMgJgJQgJgJgMAAQgMAAgIAJg");
	this.shape_151.setTransform(13.8,59.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("ABABoIAAhtQgBgNgCgFQgDgFgHAAQgNAAAAAXIAABtIhMAAIAAhtQAAgNgCgFQgDgFgHAAQgMAAAAAXIAABtIhNAAIAAh9QAAgiAXgYQAXgYAhAAQAiAAAaAdQAegdAeAAQAnAAAXAcQASAVAAAqIAAB0g");
	this.shape_152.setTransform(-14.2,58.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_153.setTransform(-36.5,55.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_154.setTransform(-48.7,54.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AhPBnQgogrAAg9QAAg+AogqQApgpA7AAQAVAAAZAIIAABUQgTgKgRAAQgdAAgRATQgTASAAAcQAAAeARARQARASAdAAQASAAAAgLQAAgIgMAAIgUAAIAAg/IBQAAQAZAfAAAjQAAApgeAcQgeAcgsAAQg4AAgngsg");
	this.shape_155.setTransform(-67.3,55.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AhKBvQgggfAAgsQAAgrAfgfQAfggArAAIATACIAABTQgJgHgJAAQgMAAgHAIQgKAJABAMQgBAMAKAJQAIAIALAAQAeAAAAgpIAAimIBNAAIAACpQAAAvgZAeQgOARgWAKQgVAKgYAAQgsAAgfgfg");
	this.shape_156.setTransform(-103.4,55.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_157.setTransform(-121.4,54.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AhehpIBJAAIAVA3IAXg3IBIAAIhfDTg");
	this.shape_158.setTransform(-135.5,59.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAhfQAAgPgIgKQgIgJgNAAQgLAAgJAIQgJAKAAAKQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJABgIAAQgtAAgfgeg");
	this.shape_159.setTransform(-156.6,59.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgkCMIAAhTIANAAQBIABAAg8QAAg6hHAAIgcAAIAADHIhTAAIAAkXIBsAAQBHABAoAfQAwAnAABDQAAA+gpAoQgpApg/AAIgZgBg");
	this.shape_160.setTransform(-182.7,55.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.button_1},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	// Capa 2
	this.instance = new lib.fondo();
	this.instance.parent = this;
	this.instance.setTransform(-242,-82,5.552,2.393);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-565.1,45.6,235.4,148);


(lib.memoramas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.huerta1_mc.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2()
		
		{
			
				//alert(huerta1)
			if(huerta1 == 0 && inicio == 1){
			this.huerta1_mc.gotoAndPlay(1)
			
			}
		}
		
		this.huerta2_mc.addEventListener("click", fl_MouseClickHandler_8.bind(this));
		
		function fl_MouseClickHandler_8()
		
		{
			
				//alert(huerta2)
			if(huerta2 == 0&& inicio == 1){
			this.huerta2_mc.gotoAndPlay(1)
			
			}
		}
		
		this.villa1_mc.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3()
		{
			if(villa1 == 0&& inicio == 1){
			this.villa1_mc.gotoAndPlay(1)
			}
		}
		
		this.villa2_mc.addEventListener("click", fl_MouseClickHandler_9.bind(this));
		
		function fl_MouseClickHandler_9()
		{
			if(villa2 == 0&& inicio == 1){
			this.villa2_mc.gotoAndPlay(1)
			}
		}
		
		this.madero1_mc.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4()
		{
			if(madero1==0&& inicio == 1){
			this.madero1_mc.gotoAndPlay(1)
			}
		}
		
		this.madero2_mc.addEventListener("click", fl_MouseClickHandler_10.bind(this));
		
		function fl_MouseClickHandler_10()
		{
			if(madero2==0&& inicio == 1){
			this.madero2_mc.gotoAndPlay(1)
			}
		}
		
		this.hidalgo1_mc.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		
		function fl_MouseClickHandler_5()
		{
			if(hidalgo1==0&& inicio == 1){
			this.hidalgo1_mc.gotoAndPlay(1)
			}
		}
		
		this.hidalgo2_mc.addEventListener("click", fl_MouseClickHandler_11.bind(this));
		
		function fl_MouseClickHandler_11()
		{
			if(hidalgo2==0&& inicio == 1){
			this.hidalgo2_mc.gotoAndPlay(1)
			}
		}
		
		this.diaz1_mc.addEventListener("click", fl_MouseClickHandler_6.bind(this));
		
		function fl_MouseClickHandler_6()
		{
			if(diaz1==0&& inicio == 1){
			this.diaz1_mc.gotoAndPlay(1)
			}
		}
		this.diaz2_mc.addEventListener("click", fl_MouseClickHandler_12.bind(this));
		
		function fl_MouseClickHandler_12()
		{
			if(diaz2==0&& inicio == 1){
			this.diaz2_mc.gotoAndPlay(1)
			}
		}
		
		this.zapata1_mc.addEventListener("click", fl_MouseClickHandler_7.bind(this));
		
		function fl_MouseClickHandler_7()
		{
			if(zapata1==0&& inicio == 1){
			this.zapata1_mc.gotoAndPlay(1)
			}
		}
		
		this.zapata2_mc.addEventListener("click", fl_MouseClickHandler_13.bind(this));
		
		function fl_MouseClickHandler_13()
		{
			if(zapata2==0&& inicio == 1){
			this.zapata2_mc.gotoAndPlay(1)
			}
		}
		
		this.obregon1_mc.addEventListener("click", fl_MouseClickHandler_14.bind(this));
		
		function fl_MouseClickHandler_14()
		{
			if(obregon1==0&& inicio == 1){
			this.obregon1_mc.gotoAndPlay(1)
			}
		}
		
		this.obregon2_mc.addEventListener("click", fl_MouseClickHandler_15.bind(this));
		
		function fl_MouseClickHandler_15()
		{
			if(obregon2==0&& inicio == 1){
			this.obregon2_mc.gotoAndPlay(1)
			}
		}
		this.morelos1_mc.addEventListener("click", fl_MouseClickHandler_16.bind(this));
		
		function fl_MouseClickHandler_16()
		{
			if(morelos1==0&& inicio == 1){
			this.morelos1_mc.gotoAndPlay(1)
			}
		}
		
		this.morelos2_mc.addEventListener("click", fl_MouseClickHandler_17.bind(this));
		
		function fl_MouseClickHandler_17()
		{
			if(morelos2==0&& inicio == 1){
			this.morelos2_mc.gotoAndPlay(1)
			}
		}
		
		this.victoria1_mc.addEventListener("click", fl_MouseClickHandler_18.bind(this));
		
		function fl_MouseClickHandler_18()
		{
			if(victoria1==0&& inicio == 1){
			this.victoria1_mc.gotoAndPlay(1)
			}
		}
		
		this.victoria2_mc.addEventListener("click", fl_MouseClickHandler_19.bind(this));
		
		function fl_MouseClickHandler_19()
		{
			if(victoria2==0&& inicio == 1){
			this.victoria2_mc.gotoAndPlay(1)
			}
		}
		
		this.moctezuma1_mc.addEventListener("click", fl_MouseClickHandler_20.bind(this));
		
		function fl_MouseClickHandler_20()
		{
			if(moctezuma1==0&& inicio == 1){
			this.moctezuma1_mc.gotoAndPlay(1)
			}
		}
		
		this.moctezuma2_mc.addEventListener("click", fl_MouseClickHandler_21.bind(this));
		
		function fl_MouseClickHandler_21()
		{
			if(moctezuma2==0&& inicio == 1){
			this.moctezuma2_mc.gotoAndPlay(1)
			}
		}
		
		this.ana1_mc.addEventListener("click", fl_MouseClickHandler_22.bind(this));
		
		function fl_MouseClickHandler_22()
		{
			if(ana1==0&& inicio == 1){
			this.ana1_mc.gotoAndPlay(1)
			}
		}
		
		this.ana2_mc.addEventListener("click", fl_MouseClickHandler_23.bind(this));
		
		function fl_MouseClickHandler_23()
		{
			if(ana2==0&& inicio == 1){
			this.ana2_mc.gotoAndPlay(1)
			}
		}
		
		this.iturbide1_mc.addEventListener("click", fl_MouseClickHandler_24.bind(this));
		
		function fl_MouseClickHandler_24()
		{
			if(iturbide1==0&& inicio == 1){
			this.iturbide1_mc.gotoAndPlay(1)
			}
		}
		
		this.iturbide2_mc.addEventListener("click", fl_MouseClickHandler_25.bind(this));
		
		function fl_MouseClickHandler_25()
		{
			if(iturbide2==0&& inicio == 1){
			this.iturbide2_mc.gotoAndPlay(1)
			}
		}
		
		 
		
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Capa 1
	this.obregon2_mc = new lib.obregon2();
	this.obregon2_mc.name = "obregon2_mc";
	this.obregon2_mc.parent = this;
	this.obregon2_mc.setTransform(1083.2,250.1,1,1,0,0,0,70.3,75.4);

	this.victoria2_mc = new lib.victoria2();
	this.victoria2_mc.name = "victoria2_mc";
	this.victoria2_mc.parent = this;
	this.victoria2_mc.setTransform(869.7,348.1);

	this.huerta2_mc = new lib.huerta2();
	this.huerta2_mc.name = "huerta2_mc";
	this.huerta2_mc.parent = this;
	this.huerta2_mc.setTransform(1081.3,75.7,1,1,0,0,0,68.4,74);

	this.hidalgo2_mc = new lib.hidalgo2();
	this.hidalgo2_mc.name = "hidalgo2_mc";
	this.hidalgo2_mc.parent = this;
	this.hidalgo2_mc.setTransform(1012.9,348.1);

	this.iturbide2_mc = new lib.iturbide2();
	this.iturbide2_mc.name = "iturbide2_mc";
	this.iturbide2_mc.parent = this;
	this.iturbide2_mc.setTransform(934.7,76.7,1,1,0,0,0,65,75);

	this.zapata2_mc = new lib.zapata2();
	this.zapata2_mc.name = "zapata2_mc";
	this.zapata2_mc.parent = this;
	this.zapata2_mc.setTransform(371.4,420.5,1,1,0,0,0,75,72.4);

	this.villa2_mc = new lib.villa2();
	this.villa2_mc.name = "villa2_mc";
	this.villa2_mc.parent = this;
	this.villa2_mc.setTransform(790.2,420.9,1,1,0,0,0,67,72.8);

	this.iturbide1_mc = new lib.iturbide1();
	this.iturbide1_mc.name = "iturbide1_mc";
	this.iturbide1_mc.parent = this;
	this.iturbide1_mc.setTransform(645.8,422.5,1,1,0,0,0,65,74.4);

	this.ana2_mc = new lib.santaana2();
	this.ana2_mc.name = "ana2_mc";
	this.ana2_mc.parent = this;
	this.ana2_mc.setTransform(508.9,420.1,1,1,0,0,0,70.3,72);

	this.madero2_mc = new lib.madero2();
	this.madero2_mc.name = "madero2_mc";
	this.madero2_mc.parent = this;
	this.madero2_mc.setTransform(924.8,247.4,1,1,0,0,0,55.1,72.9);

	this.morelos2_mc = new lib.morelos2();
	this.morelos2_mc.name = "morelos2_mc";
	this.morelos2_mc.parent = this;
	this.morelos2_mc.setTransform(209.2,422.5,1,1,0,0,0,55,74.4);

	this.moctezuma2_mc = new lib.moctezuma2();
	this.moctezuma2_mc.name = "moctezuma2_mc";
	this.moctezuma2_mc.parent = this;
	this.moctezuma2_mc.setTransform(77.6,76.2,1,1,0,0,0,66.4,74.5);

	this.ana1_mc = new lib.santaana1();
	this.ana1_mc.name = "ana1_mc";
	this.ana1_mc.parent = this;
	this.ana1_mc.setTransform(723.2,175);

	this.moctezuma1_mc = new lib.moctezuma1();
	this.moctezuma1_mc.name = "moctezuma1_mc";
	this.moctezuma1_mc.parent = this;
	this.moctezuma1_mc.setTransform(647.2,249.7,1,1,0,0,0,66.4,75);

	this.victoria1_mc = new lib.victoria1();
	this.victoria1_mc.name = "victoria1_mc";
	this.victoria1_mc.parent = this;
	this.victoria1_mc.setTransform(438.6,175);

	this.morelos1_mc = new lib.morelos1();
	this.morelos1_mc.name = "morelos1_mc";
	this.morelos1_mc.parent = this;
	this.morelos1_mc.setTransform(296.4,175);

	this.obregon1_mc = new lib.obregon1();
	this.obregon1_mc.name = "obregon1_mc";
	this.obregon1_mc.parent = this;
	this.obregon1_mc.setTransform(224.5,249.1,1,1,0,0,0,70.3,74.4);

	this.diaz2_mc = new lib.porfirio2();
	this.diaz2_mc.name = "diaz2_mc";
	this.diaz2_mc.parent = this;
	this.diaz2_mc.setTransform(76.7,247.5,1,1,0,0,0,65.5,72.8);

	this.zapata1_mc = new lib.zapata1();
	this.zapata1_mc.name = "zapata1_mc";
	this.zapata1_mc.parent = this;
	this.zapata1_mc.setTransform(798,74,1,1,0,0,0,75,72);

	this.diaz1_mc = new lib.porfirio1();
	this.diaz1_mc.name = "diaz1_mc";
	this.diaz1_mc.parent = this;
	this.diaz1_mc.setTransform(646.3,73.7,1,1,0,0,0,65.5,72);

	this.hidalgo1_mc = new lib.hidago1();
	this.hidalgo1_mc.name = "hidalgo1_mc";
	this.hidalgo1_mc.parent = this;
	this.hidalgo1_mc.setTransform(507,74,1,1,0,0,0,68.4,72);

	this.madero1_mc = new lib.madero1();
	this.madero1_mc.name = "madero1_mc";
	this.madero1_mc.parent = this;
	this.madero1_mc.setTransform(296.4,2);

	this.villa1_mc = new lib.villa1();
	this.villa1_mc.name = "villa1_mc";
	this.villa1_mc.parent = this;
	this.villa1_mc.setTransform(221.2,73.7,1,1,0,0,0,67,72);

	this.huerta1_mc = new lib.huerta1();
	this.huerta1_mc.name = "huerta1_mc";
	this.huerta1_mc.parent = this;
	this.huerta1_mc.setTransform(79.6,422.1,1,1,0,0,0,68.4,74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.huerta1_mc},{t:this.villa1_mc},{t:this.madero1_mc},{t:this.hidalgo1_mc},{t:this.diaz1_mc},{t:this.zapata1_mc},{t:this.diaz2_mc},{t:this.obregon1_mc},{t:this.morelos1_mc},{t:this.victoria1_mc},{t:this.moctezuma1_mc},{t:this.ana1_mc},{t:this.moctezuma2_mc},{t:this.morelos2_mc},{t:this.madero2_mc},{t:this.ana2_mc},{t:this.iturbide1_mc},{t:this.villa2_mc},{t:this.zapata2_mc},{t:this.iturbide2_mc},{t:this.hidalgo2_mc},{t:this.huerta2_mc},{t:this.victoria2_mc},{t:this.obregon2_mc}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(18,5.4,1135.6,515.1);


// stage content:
(lib.memomexrock1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		realpuntos =0
		runonce = 0
		 huerta1 = 0
		huerta2 = 0
		 villa1 = 0
		villa2 = 0
		 madero1 = 0
		madero2 = 0
		hidalgo1 = 0
		 hidalgo2 = 0
		 diaz1 = 0
		 diaz2 = 0
		 zapata1 = 0
		zapata2 = 0
		obregon1 = 0
		 obregon2 = 0
		morelos1 = 0
		 morelos2 = 0
		 victoria1 = 0
		victoria2 = 0
		 moctezuma1 = 0
		 moctezuma2 = 0
		 ana1=0
		 ana2=0
		iturbide1 =0
		 iturbide2 =0
		 
		 inicio=3
		
		raiz = this;
		
		tarjeta1 =0
		tarjeta2 =0
		
		
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.inicio_btn.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			//alert(huerta1)
			inicio=1
			this.gotoAndStop(3);
		}
		this.stop();
	}
	this.frame_1 = function() {
		inicio = 0
		puntos = 0
		levantado1 = 0
		levantado2 = 0
		intentos = 19
		respuesta = 0
		
		
		
		
		
		this.score.text = puntos
		this.trys.text = intentos
		this.ans.text = respuesta
		function flip() {
			gameOver()
			equisIntentos()
			if (huerta1 == 1 && huerta2 == 1) {
				raiz.menurespuestas.gotoAndStop(1)
				//puntos = puntos + 1
				//alert("huerta true")
				puntos = puntos + 1
				raiz.score.text = puntos
				respuesta = "huerta"
				raiz.ans.text = respuesta
				huerta1 = 3
				huerta2 = 3
		
			} else if (villa1 == 1 && villa2 == 1) {
				//alert("villa1 y 2")
				raiz.menurespuestas.gotoAndStop(1)
				//puntos = puntos + 1
				//alert("villa true")
				puntos = puntos + 1
				raiz.score.text = puntos
				respuesta = "villa"
				raiz.ans.text = respuesta
				villa1 = 3
				villa2 = 3
		
				//_root.peronajesmenu.gotoAndStop(2)
			} else if (madero1 == 1 && madero2 == 1) {
				//alert("madero1 y 2")
				raiz.menurespuestas.gotoAndStop(1)
				//puntos = puntos + 1
				//alert("madero true")
				puntos = puntos + 1
				raiz.score.text = puntos
				respuesta = "madero"
				madero1 = 3
				madero2 = 3
		
				//_root.peronajesmenu.gotoAndStop(2)
			} else if (hidalgo1 == 1 && hidalgo2 == 1) {
				//alert("hidalgo 1 y 2")
				raiz.menurespuestas.gotoAndStop(1)
				//puntos = puntos + 1
				//alert("hidalgo true")
				puntos = puntos + 1
				raiz.score.text = puntos
				respuesta = "hidalgo"
				hidalgo1 = 3
				hidalgo2 = 3
		
				//_root.peronajesmenu.gotoAndStop(2)
			} else if (diaz1 == 1 && diaz2 == 1) {
				//alert("diaz 1 y 2")
				raiz.menurespuestas.gotoAndStop(1)
				//puntos = puntos + 1
				//alert("diaz true")
				puntos = puntos + 1
				raiz.score.text = puntos
				respuesta = "diaz"
				diaz1 = 3
				diaz2 = 3
		
				//_root.peronajesmenu.gotoAndStop(2)
			} else if (zapata1 == 1 && zapata2 == 1) {
				//alert("zapata 1 y 2")
				raiz.menurespuestas.gotoAndStop(1)
				//puntos = puntos + 1
				//alert("zapata true")
				puntos = puntos + 1
				raiz.score.text = puntos
				respuesta = "zapata"
				zapata1 = 3
				zapata2 = 3
		
				//_root.peronajesmenu.gotoAndStop(2)
			} else if (obregon1 == 1 && obregon2 == 1) {
				//alert("obregon 1 y 2")
				raiz.menurespuestas.gotoAndStop(1)
				//puntos = puntos + 1
				//alert("obregon true")
				puntos = puntos + 1
				raiz.score.text = puntos
				respuesta = "obregon"
				obregon1 = 3
				obregon2 = 3
		
				//_root.peronajesmenu.gotoAndStop(2)
			} else if (morelos1 == 1 && morelos2 == 1) {
				//alert("morelos 1 y 2")
				raiz.menurespuestas.gotoAndStop(1)
				//puntos = puntos + 1
				//alert("morelos true")
				puntos = puntos + 1
				raiz.score.text = puntos
				respuesta = "morelos"
				morelos1 = 3
				morelos2 = 3
		
				//_root.peronajesmenu.gotoAndStop(2)
			} else if (victoria1 == 1 && victoria2 == 1) {
				//alert("victoria 1 y 2")
				raiz.menurespuestas.gotoAndStop(1)
				//puntos = puntos + 1
				//alert("victoria true")
				puntos = puntos + 1
				raiz.score.text = puntos
				respuesta = "victoria"
				victoria1 = 3
				victoria2 = 3
		
				//_root.peronajesmenu.gotoAndStop(2)
			} else if (moctezuma1 == 1 && moctezuma2 == 1) {
				//alert("moctezuma 1 y 2")
				raiz.menurespuestas.gotoAndStop(1)
				//puntos = puntos + 1
				//alert("moctezuma true")
				puntos = puntos + 1
				raiz.score.text = puntos
				respuesta = "moctezuma"
				moctezuma1 = 3
				moctezuma2 = 3
		
				//_root.peronajesmenu.gotoAndStop(2)
			} else if (ana1 == 1 && ana2 == 1) {
				//alert("ana 1 y 2")
				raiz.menurespuestas.gotoAndStop(1)
				//puntos = puntos + 1
				//alert("ana true")
				puntos = puntos + 1
				raiz.score.text = puntos
				respuesta = "ana"
				ana1 = 3
				ana2 = 3
		
				//_root.peronajesmenu.gotoAndStop(2)
			} else if (iturbide1 == 1 && iturbide2 == 1) {
				//alert("itrubide 1 y 2")
				raiz.menurespuestas.gotoAndStop(1)
				//puntos = puntos + 1
				//alert("iturbide true")
				puntos = puntos + 1
				raiz.score.text = puntos
				respuesta = "iturbide"
		
				iturbide1 = 3
				iturbide2 = 3
				//_root.peronajesmenu.gotoAndStop(2)
			}
		
		
		
			//votando huerta
			else if (huerta1 == 1 && villa1 == 1) {
		
				raiz.delay.play()
				//raiz.memorama.huerta1_mc.gotoAndStop(0)
				//raiz.memorama.villa1_mc.gotoAndStop(0)
			} else if (huerta1 == 1 && villa2 == 1) {
				//alert("votando villa")
				raiz.delay.play()
				//raiz.memorama.huerta1_mc.gotoAndStop(0)
				//raiz.memorama.villa1_mc.gotoAndStop(0)
			} else if (huerta1 == 1 && madero1 == 1) {
				raiz.delay.play()
				//raiz.memorama.huerta1_mc.gotoAndStop(0)
				//raiz.memorama.villa1_mc.gotoAndStop(0)
			} else if (huerta1 == 1 && madero2 == 1) {
				raiz.delay.play()
				//raiz.memorama.huerta1_mc.gotoAndStop(0)
				//raiz.memorama.villa1_mc.gotoAndStop(0)
			} else if (huerta1 == 1 && diaz1 == 1) {
				raiz.delay.play()
				//raiz.memorama.huerta1_mc.gotoAndStop(0)
				//raiz.memorama.villa1_mc.gotoAndStop(0)
			} else if (huerta1 == 1 && diaz2 == 1) {
				raiz.delay.play()
				//raiz.memorama.huerta1_mc.gotoAndStop(0)
				//raiz.memorama.villa1_mc.gotoAndStop(0)
			} else if (huerta1 == 1 && ana1 == 1) {
				raiz.delay.play()
				//raiz.memorama.huerta1_mc.gotoAndStop(0)
				//raiz.memorama.villa1_mc.gotoAndStop(0)
			} else if (huerta1 == 1 && ana2 == 1) {
				raiz.delay.play()
				//raiz.memorama.huerta1_mc.gotoAndStop(0)
				//raiz.memorama.villa1_mc.gotoAndStop(0)
			} else if (huerta1 == 1 && moctezuma1 == 1) {
				raiz.delay.play()
				//raiz.memorama.huerta1_mc.gotoAndStop(0)
				//raiz.memorama.villa1_mc.gotoAndStop(0)
			} else if (huerta1 == 1 && moctezuma2 == 1) {
				raiz.delay.play()
			} else if (huerta1 == 1 && obregon1 == 1) {
				raiz.delay.play()
			} else if (huerta1 == 1 && obregon2 == 1) {
				raiz.delay.play()
			} else if (huerta1 == 1 && victoria1 == 1) {
				raiz.delay.play()
			} else if (huerta1 == 1 && victoria2 == 1) {
				raiz.delay.play()
			} else if (huerta1 == 1 && iturbide1 == 1) {
				raiz.delay.play()
			} else if (huerta1 == 1 && iturbide2 == 1) {
				raiz.delay.play()
			} else if (huerta1 == 1 && morelos1 == 1) {
				raiz.delay.play()
			} else if (huerta1 == 1 && morelos2 == 1) {
				raiz.delay.play()
			} else if (huerta1 == 1 && hidalgo1 == 1) {
				raiz.delay.play()
			} else if (huerta1 == 1 && hidalgo2 == 1) {
				raiz.delay.play()
			} else if (huerta1 == 1 && zapata1 == 1) {
				raiz.delay.play()
			} else if (huerta1 == 1 && zapata2 == 1) {
				raiz.delay.play()
			}
		
			//botando huerta 2
			else if (huerta2 == 1 && villa1 == 1) {
				raiz.delay.play()
			} else if (huerta2 == 1 && villa2 == 1) {
				raiz.delay.play()
			} else if (huerta2 == 1 && madero1 == 1) {
				raiz.delay.play()
			} else if (huerta2 == 1 && madero2 == 1) {
				raiz.delay.play()
			} else if (huerta2 == 1 && diaz1 == 1) {
				raiz.delay.play()
			} else if (huerta2 == 1 && diaz2 == 1) {
				raiz.delay.play()
			} else if (huerta2 == 1 && ana1 == 1) {
				raiz.delay.play()
			} else if (huerta2 == 1 && ana2 == 1) {
				raiz.delay.play()
			} else if (huerta2 == 1 && moctezuma1 == 1) {
				raiz.delay.play()
			} else if (huerta2 == 1 && moctezuma2 == 1) {
				raiz.delay.play()
			} else if (huerta2 == 1 && obregon1 == 1) {
				raiz.delay.play()
			} else if (huerta2 == 1 && obregon2 == 1) {
				raiz.delay.play()
			} else if (huerta2 == 1 && victoria1 == 1) {
				raiz.delay.play()
			} else if (huerta2 == 1 && victoria2 == 1) {
				raiz.delay.play()
			} else if (huerta2 == 1 && iturbide1 == 1) {
				raiz.delay.play()
			} else if (huerta2 == 1 && iturbide2 == 1) {
				raiz.delay.play()
			} else if (huerta2 == 1 && morelos1 == 1) {
				raiz.delay.play()
			} else if (huerta2 == 1 && morelos2 == 1) {
				raiz.delay.play()
			} else if (huerta2 == 1 && hidalgo1 == 1) {
				raiz.delay.play()
			} else if (huerta2 == 1 && hidalgo2 == 1) {
				raiz.delay.play()
			} else if (huerta2 == 1 && zapata1 == 1) {
				raiz.delay.play()
			} else if (huerta2 == 1 && zapata2 == 1) {
				raiz.delay.play()
		
				//villa botando 
			} else if (villa1 == 1 && madero1 == 1) {
				//alert("votando madero")
				raiz.delay.play()
			} else if (villa1 == 1 && madero2 == 1) {
				raiz.delay.play()
			} else if (villa1 == 1 && diaz1 == 1) {
				raiz.delay.play()
			} else if (villa1 == 1 && diaz2 == 1) {
				raiz.delay.play()
			} else if (villa1 == 1 && ana1 == 1) {
				raiz.delay.play()
			} else if (villa1 == 1 && ana2 == 1) {
				raiz.delay.play()
			} else if (villa1 == 1 && moctezuma1 == 1) {
				raiz.delay.play()
			} else if (villa1 == 1 && moctezuma2 == 1) {
				raiz.delay.play()
			} else if (villa1 == 1 && obregon1 == 1) {
				raiz.delay.play()
			} else if (villa1 == 1 && obregon2 == 1) {
				raiz.delay.play()
			} else if (villa1 == 1 && victoria1 == 1) {
				raiz.delay.play()
			} else if (villa1 == 1 && victoria2 == 1) {
				raiz.delay.play()
			} else if (villa1 == 1 && morelos1 == 1) {
				raiz.delay.play()
			} else if (villa1 == 1 && morelos2 == 1) {
				raiz.delay.play()
			} else if (villa1 == 1 && iturbide1 == 1) {
				raiz.delay.play()
			} else if (villa1 == 1 && iturbide2 == 1) {
				raiz.delay.play()
			} else if (villa1 == 1 && hidalgo1 == 1) {
				raiz.delay.play()
			} else if (villa1 == 1 && hidalgo2 == 1) {
				raiz.delay.play()
			} else if (villa1 == 1 && zapata1 == 1) {
				raiz.delay.play()
			} else if (villa1 == 1 && zapata2 == 1) {
				raiz.delay.play()
			}
		
			//votando villa2 
			//villa botando 
			else if (villa2 == 1 && madero1 == 1) {
				raiz.delay.play()
			} else if (villa2 == 1 && madero2 == 1) {
				raiz.delay.play()
			} else if (villa2 == 1 && diaz1 == 1) {
				raiz.delay.play()
			} else if (villa2 == 1 && diaz2 == 1) {
				raiz.delay.play()
			} else if (villa2 == 1 && ana1 == 1) {
				raiz.delay.play()
			} else if (villa2 == 1 && ana2 == 1) {
				raiz.delay.play()
			} else if (villa2 == 1 && moctezuma1 == 1) {
				raiz.delay.play()
			} else if (villa2 == 1 && moctezuma2 == 1) {
				raiz.delay.play()
			} else if (villa2 == 1 && obregon1 == 1) {
				raiz.delay.play()
			} else if (villa2 == 1 && obregon2 == 1) {
				raiz.delay.play()
			} else if (villa2 == 1 && victoria1 == 1) {
				raiz.delay.play()
			} else if (villa2 == 1 && victoria2 == 1) {
				raiz.delay.play()
			} else if (villa2 == 1 && morelos1 == 1) {
				raiz.delay.play()
			} else if (villa2 == 1 && morelos2 == 1) {
				raiz.delay.play()
			} else if (villa2 == 1 && iturbide1 == 1) {
				raiz.delay.play()
			} else if (villa2 == 1 && iturbide2 == 1) {
				raiz.delay.play()
			} else if (villa2 == 1 && hidalgo1 == 1) {
				raiz.delay.play()
			} else if (villa2 == 1 && hidalgo2 == 1) {
				raiz.delay.play()
			} else if (villa2 == 1 && zapata1 == 1) {
				raiz.delay.play()
			} else if (villa2 == 1 && zapata2 == 1) {
				raiz.delay.play()
			}
		
			//madero votando 
			else if (madero1 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (madero1 == 1 && huerta2 == 1) {
				raiz.delay.play()
			} else if (madero1 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (madero1 == 1 && diaz1 == 1) {
				raiz.delay.play()
			} else if (madero1 == 1 && diaz2 == 1) {
				raiz.delay.play()
			} else if (madero1 == 1 && ana1 == 1) {
				raiz.delay.play()
			} else if (madero1 == 1 && ana2 == 1) {
				raiz.delay.play()
			} else if (madero1 == 1 && moctezuma1 == 1) {
				raiz.delay.play()
			} else if (madero1 == 1 && moctezuma2 == 1) {
				raiz.delay.play()
			} else if (madero1 == 1 && obregon1 == 1) {
				raiz.delay.play()
			} else if (madero1 == 1 && obregon2 == 1) {
				raiz.delay.play()
			} else if (madero1 == 1 && victoria1 == 1) {
				raiz.delay.play()
			} else if (madero1 == 1 && victoria2 == 1) {
				raiz.delay.play()
			} else if (madero1 == 1 && morelos1 == 1) {
				raiz.delay.play()
			} else if (madero1 == 1 && morelos2 == 1) {
				raiz.delay.play()
			} else if (madero1 == 1 && iturbide1 == 1) {
				raiz.delay.play()
			} else if (madero1 == 1 && iturbide2 == 1) {
				raiz.delay.play()
			} else if (madero1 == 1 && hidalgo1 == 1) {
				raiz.delay.play()
			} else if (madero1 == 1 && hidalgo2 == 1) {
				raiz.delay.play()
			} else if (madero2 == 1 && zapata1 == 1) {
				raiz.delay.play()
			} else if (madero2 == 1 && zapata2 == 1) {
				raiz.delay.play()
			} else if (madero1 == 1 && zapata1 == 1) {
				raiz.delay.play()
			} else if (madero1 == 1 && zapata2 == 1) {
				raiz.delay.play()
			}
		
			//votandomadero 2 
			else if (madero2 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (madero2 == 1 && huerta2 == 1) {
				raiz.delay.play()
			} else if (madero2 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (madero2 == 1 && diaz1 == 1) {
				raiz.delay.play()
			} else if (madero2 == 1 && diaz2 == 1) {
				raiz.delay.play()
			} else if (madero2 == 1 && ana1 == 1) {
				raiz.delay.play()
			} else if (madero2 == 1 && ana2 == 1) {
				raiz.delay.play()
			} else if (madero2 == 1 && moctezuma1 == 1) {
				raiz.delay.play()
			} else if (madero2 == 1 && moctezuma2 == 1) {
				raiz.delay.play()
			} else if (madero2 == 1 && obregon1 == 1) {
				raiz.delay.play()
			} else if (madero2 == 1 && obregon2 == 1) {
				raiz.delay.play()
			} else if (madero2 == 1 && victoria1 == 1) {
				raiz.delay.play()
			} else if (madero2 == 1 && victoria2 == 1) {
				raiz.delay.play()
			} else if (madero2 == 1 && morelos1 == 1) {
				raiz.delay.play()
			} else if (madero2 == 1 && morelos2 == 1) {
				raiz.delay.play()
			} else if (madero2 == 1 && iturbide1 == 1) {
				raiz.delay.play()
			} else if (madero2 == 1 && iturbide2 == 1) {
				raiz.delay.play()
			} else if (madero2 == 1 && hidalgo1 == 1) {
				raiz.delay.play()
			} else if (madero2 == 1 && hidalgo2 == 1) {
				raiz.delay.play()
			} else if (madero2 == 1 && zapata1 == 1) {
				raiz.delay.play()
			} else if (madero2 == 1 && zapata2 == 1) {
				raiz.delay.play()
			}
		
		
			//votando diaz
			else if (diaz1 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (diaz1 == 1 && huerta2 == 1) {
				raiz.delay.play()
			} else if (diaz1 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (diaz1 == 1 && ana1 == 1) {
				raiz.delay.play()
			} else if (diaz1 == 1 && ana2 == 1) {
				raiz.delay.play()
			} else if (diaz1 == 1 && moctezuma1 == 1) {
				raiz.delay.play()
			} else if (diaz1 == 1 && moctezuma2 == 1) {
				raiz.delay.play()
			} else if (diaz1 == 1 && obregon1 == 1) {
				raiz.delay.play()
			} else if (diaz1 == 1 && obregon2 == 1) {
				raiz.delay.play()
			} else if (diaz1 == 1 && victoria1 == 1) {
				raiz.delay.play()
			} else if (diaz1 == 1 && victoria2 == 1) {
				raiz.delay.play()
			} else if (diaz1 == 1 && morelos1 == 1) {
				raiz.delay.play()
			} else if (diaz1 == 1 && morelos2 == 1) {
				raiz.delay.play()
			} else if (diaz1 == 1 && iturbide1 == 1) {
				raiz.delay.play()
			} else if (diaz1 == 1 && iturbide2 == 1) {
				raiz.delay.play()
			} else if (diaz1 == 1 && hidalgo1 == 1) {
				raiz.delay.play()
			} else if (diaz1 == 1 && hidalgo2 == 1) {
				raiz.delay.play()
			} else if (diaz1 == 1 && zapata1 == 1) {
				raiz.delay.play()
			} else if (diaz1 == 1 && zapata2 == 1) {
				raiz.delay.play()
			}
		
			//votando diaz 2 
			else if (diaz2 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (diaz2 == 1 && huerta2 == 1) {
				raiz.delay.play()
			} else if (diaz2 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (diaz2 == 1 && ana1 == 1) {
				raiz.delay.play()
			} else if (diaz2 == 1 && ana2 == 1) {
				raiz.delay.play()
			} else if (diaz2 == 1 && moctezuma1 == 1) {
				raiz.delay.play()
			} else if (diaz2 == 1 && moctezuma2 == 1) {
				raiz.delay.play()
			} else if (diaz2 == 1 && obregon1 == 1) {
				raiz.delay.play()
			} else if (diaz2 == 1 && obregon2 == 1) {
				raiz.delay.play()
			} else if (diaz2 == 1 && victoria1 == 1) {
				raiz.delay.play()
			} else if (diaz2 == 1 && victoria2 == 1) {
				raiz.delay.play()
			} else if (diaz2 == 1 && morelos1 == 1) {
				raiz.delay.play()
			} else if (diaz2 == 1 && morelos2 == 1) {
				raiz.delay.play()
			} else if (diaz2 == 1 && iturbide1 == 1) {
				raiz.delay.play()
			} else if (diaz2 == 1 && iturbide2 == 1) {
				raiz.delay.play()
			} else if (diaz2 == 1 && hidalgo1 == 1) {
				raiz.delay.play()
			} else if (diaz2 == 1 && hidalgo2 == 1) {
				raiz.delay.play()
			} else if (diaz2 == 1 && zapata1 == 1) {
				raiz.delay.play()
			} else if (diaz2 == 1 && zapata2 == 1) {
				raiz.delay.play()
			}
		
			//votando ana
		
			//votando ana
			else if (ana1 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (ana1 == 1 && huerta2 == 1) {
				raiz.delay.play()
			} else if (ana1 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (ana1 == 1 && moctezuma1 == 1) {
				raiz.delay.play()
			} else if (ana1 == 1 && moctezuma2 == 1) {
				raiz.delay.play()
			} else if (ana1 == 1 && obregon1 == 1) {
				raiz.delay.play()
			} else if (ana1 == 1 && obregon2 == 1) {
				raiz.delay.play()
			} else if (ana1 == 1 && victoria1 == 1) {
				raiz.delay.play()
			} else if (ana1 == 1 && victoria2 == 1) {
				raiz.delay.play()
			} else if (ana1 == 1 && morelos1 == 1) {
				raiz.delay.play()
			} else if (ana1 == 1 && morelos2 == 1) {
				raiz.delay.play()
			} else if (ana1 == 1 && iturbide1 == 1) {
				raiz.delay.play()
			} else if (ana1 == 1 && iturbide2 == 1) {
				raiz.delay.play()
			} else if (ana1 == 1 && hidalgo1 == 1) {
				raiz.delay.play()
			} else if (ana1 == 1 && hidalgo2 == 1) {
				raiz.delay.play()
			} else if (ana1 == 1 && zapata1 == 1) {
				raiz.delay.play()
			} else if (ana1 == 1 && zapata2 == 1) {
				raiz.delay.play()
			}
		
			//votando ana 2 
			else if (ana2 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (diaz2 == 1 && huerta2 == 1) {
				raiz.delay.play()
			} else if (ana2 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (ana2 == 1 && moctezuma1 == 1) {
				raiz.delay.play()
			} else if (ana2 == 1 && moctezuma2 == 1) {
				raiz.delay.play()
			} else if (ana2 == 1 && obregon1 == 1) {
				raiz.delay.play()
			} else if (ana2 == 1 && obregon2 == 1) {
				raiz.delay.play()
			} else if (ana2 == 1 && victoria1 == 1) {
				raiz.delay.play()
			} else if (ana2 == 1 && victoria2 == 1) {
				raiz.delay.play()
			} else if (ana2 == 1 && morelos1 == 1) {
				raiz.delay.play()
			} else if (ana2 == 1 && morelos2 == 1) {
				raiz.delay.play()
			} else if (ana2 == 1 && iturbide1 == 1) {
				raiz.delay.play()
			} else if (ana2 == 1 && iturbide2 == 1) {
				raiz.delay.play()
			} else if (ana2 == 1 && hidalgo1 == 1) {
				raiz.delay.play()
			} else if (ana2 == 1 && hidalgo2 == 1) {
				raiz.delay.play()
			} else if (ana2 == 1 && zapata1 == 1) {
				raiz.delay.play()
			} else if (ana2 == 1 && zapata2 == 1) {
				raiz.delay.play()
			}
		
			//votando hidalgo
			else if (hidalgo1 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (hidalgo1 == 1 && huerta2 == 1) {
				raiz.delay.play()
			} else if (hidalgo1 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (hidalgo1 == 1 && moctezuma1 == 1) {
				raiz.delay.play()
			} else if (hidalgo1 == 1 && moctezuma2 == 1) {
				raiz.delay.play()
			} else if (hidalgo1 == 1 && obregon1 == 1) {
				raiz.delay.play()
			} else if (hidalgo1 == 1 && obregon2 == 1) {
				raiz.delay.play()
			} else if (hidalgo1 == 1 && victoria1 == 1) {
				raiz.delay.play()
			} else if (hidalgo1 == 1 && victoria2 == 1) {
				raiz.delay.play()
			} else if (hidalgo1 == 1 && morelos1 == 1) {
				raiz.delay.play()
			} else if (hidalgo1 == 1 && morelos2 == 1) {
				raiz.delay.play()
			} else if (hidalgo1 == 1 && iturbide1 == 1) {
				raiz.delay.play()
			} else if (hidalgo1 == 1 && iturbide2 == 1) {
				raiz.delay.play()
			} else if (hidalgo1 == 1 && zapata1 == 1) {
				raiz.delay.play()
			} else if (hidalgo1 == 1 && zapata2 == 1) {
				raiz.delay.play()
			}
		
			//votando hidalgo 2 
			else if (hidalgo2 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (diaz2 == 1 && huerta2 == 1) {
				raiz.delay.play()
			} else if (hidalgo2 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (hidalgo2 == 1 && moctezuma1 == 1) {
				raiz.delay.play()
			} else if (hidalgo2 == 1 && moctezuma2 == 1) {
				raiz.delay.play()
			} else if (hidalgo2 == 1 && obregon1 == 1) {
				raiz.delay.play()
			} else if (hidalgo2 == 1 && obregon2 == 1) {
				raiz.delay.play()
			} else if (hidalgo2 == 1 && victoria1 == 1) {
				raiz.delay.play()
			} else if (hidalgo2 == 1 && victoria2 == 1) {
				raiz.delay.play()
			} else if (hidalgo2 == 1 && morelos1 == 1) {
				raiz.delay.play()
			} else if (hidalgo2 == 1 && morelos2 == 1) {
				raiz.delay.play()
			} else if (hidalgo2 == 1 && iturbide1 == 1) {
				raiz.delay.play()
			} else if (hidalgo2 == 1 && iturbide2 == 1) {
				raiz.delay.play()
			} else if (hidalgo2 == 1 && zapata1 == 1) {
				raiz.delay.play()
			} else if (hidalgo2 == 1 && zapata2 == 1) {
				raiz.delay.play()
			} else if (hidalgo1 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (hidalgo1 == 1 && huerta2 == 1) {
				raiz.delay.play()
			} else if (hidalgo1 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (hidalgo1 == 1 && moctezuma1 == 1) {
				raiz.delay.play()
			} else if (hidalgo1 == 1 && moctezuma2 == 1) {
				raiz.delay.play()
		
				//zapata1 votando
		
			} else if (zapata1 == 1 && obregon1 == 1) {
				raiz.delay.play()
			} else if (zapata1 == 1 && obregon2 == 1) {
				raiz.delay.play()
			} else if (zapata1 == 1 && victoria1 == 1) {
				raiz.delay.play()
			} else if (zapata1 == 1 && victoria2 == 1) {
				raiz.delay.play()
			} else if (zapata1 == 1 && morelos1 == 1) {
				raiz.delay.play()
			} else if (zapata1 == 1 && morelos2 == 1) {
				raiz.delay.play()
			} else if (zapata1 == 1 && iturbide1 == 1) {
				raiz.delay.play()
			} else if (zapata1 == 1 && iturbide2 == 1) {
				raiz.delay.play()
			} else if (zapata1 == 1 && hidalgo1 == 1) {
				raiz.delay.play()
			} else if (zapata1 == 1 && hidalgo2 == 1) {
				raiz.delay.play()
			} else if (zapata1 == 1 && moctezuma1 == 1) {
				raiz.delay.play()
			} else if (zapata1 == 1 && moctezuma2 == 1) {
				raiz.delay.play()
			} else if (zapata1 == 1 && villa2 == 1) {
				raiz.delay.play()
			}
		
			//votando zapata 2 
			else if (zapata2 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (diaz2 == 1 && huerta2 == 1) {
				raiz.delay.play()
			} else if (zapata2 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (zapata2 == 1 && zapata1 == 1) {
				raiz.delay.play()
			} else if (zapata2 == 1 && zapata2 == 1) {
				raiz.delay.play()
			} else if (zapata2 == 1 && moctezuma1 == 1) {
				raiz.delay.play()
			} else if (zapata2 == 1 && moctezuma2 == 1) {
				raiz.delay.play()
			} else if (zapata2 == 1 && obregon1 == 1) {
				raiz.delay.play()
			} else if (zapata2 == 1 && obregon2 == 1) {
				raiz.delay.play()
			} else if (zapata2 == 1 && victoria1 == 1) {
				raiz.delay.play()
			} else if (zapata2 == 1 && victoria2 == 1) {
				raiz.delay.play()
			} else if (zapata2 == 1 && morelos1 == 1) {
				raiz.delay.play()
			} else if (zapata2 == 1 && morelos2 == 1) {
				raiz.delay.play()
			} else if (zapata2 == 1 && iturbide1 == 1) {
				raiz.delay.play()
			} else if (zapata2 == 1 && iturbide2 == 1) {
				raiz.delay.play()
			} else if (zapata2 == 1 && hidalgo1 == 1) {
				raiz.delay.play()
			} else if (zapata2 == 1 && hidalgo2 == 1) {
				raiz.delay.play()
			}
		
			//votando obregon 1
			else if (obregon1 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (obregon1 == 1 && huerta2 == 1) {
				raiz.delay.play()
			} else if (obregon1 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (obregon1 == 1 && moctezuma1 == 1) {
				raiz.delay.play()
			} else if (obregon1 == 1 && moctezuma2 == 1) {
				raiz.delay.play()
			} else if (obregon1 == 1 && obregon1 == 1) {
				raiz.delay.play()
			} else if (obregon1 == 1 && obregon2 == 1) {
				raiz.delay.play()
			} else if (obregon1 == 1 && victoria1 == 1) {
				raiz.delay.play()
			} else if (obregon1 == 1 && victoria2 == 1) {
				raiz.delay.play()
			} else if (obregon1 == 1 && morelos1 == 1) {
				raiz.delay.play()
			} else if (obregon1 == 1 && morelos2 == 1) {
				raiz.delay.play()
			} else if (obregon1 == 1 && iturbide1 == 1) {
				raiz.delay.play()
			} else if (obregon1 == 1 && iturbide2 == 1) {
				raiz.delay.play()
			} else if (obregon1 == 1 && hidalgo1 == 1) {
				raiz.delay.play()
			} else if (obregon1 == 1 && hidalgo2 == 1) {
				raiz.delay.play()
			}
		
			//votando ana 2 
			else if (obregon2 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (diaz2 == 1 && huerta2 == 1) {
				raiz.delay.play()
			} else if (obregon2 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (obregon2 == 1 && obregon1 == 1) {
				raiz.delay.play()
			} else if (obregon2 == 1 && obregon2 == 1) {
				raiz.delay.play()
			} else if (obregon2 == 1 && moctezuma1 == 1) {
				raiz.delay.play()
			} else if (obregon2 == 1 && moctezuma2 == 1) {
				raiz.delay.play()
			} else if (obregon2 == 1 && obregon1 == 1) {
				raiz.delay.play()
			} else if (obregon2 == 1 && obregon2 == 1) {
				raiz.delay.play()
			} else if (obregon2 == 1 && victoria1 == 1) {
				raiz.delay.play()
			} else if (obregon2 == 1 && victoria2 == 1) {
				raiz.delay.play()
			} else if (obregon2 == 1 && morelos1 == 1) {
				raiz.delay.play()
			} else if (obregon2 == 1 && morelos2 == 1) {
				raiz.delay.play()
			} else if (obregon2 == 1 && iturbide1 == 1) {
				raiz.delay.play()
			} else if (obregon2 == 1 && iturbide2 == 1) {
				raiz.delay.play()
			} else if (obregon2 == 1 && hidalgo1 == 1) {
				raiz.delay.play()
			} else if (obregon2 == 1 && hidalgo2 == 1) {
				raiz.delay.play()
			}
		
			//votando morelos 
			else if (morelos1 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (morelos1 == 1 && huerta2 == 1) {
				raiz.delay.play()
			} else if (morelos1 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (morelos1 == 1 && moctezuma1 == 1) {
				raiz.delay.play()
			} else if (morelos1 == 1 && moctezuma2 == 1) {
				raiz.delay.play()
			} else if (morelos1 == 1 && morelos1 == 1) {
				raiz.delay.play()
			} else if (morelos1 == 1 && morelos2 == 1) {
				raiz.delay.play()
			} else if (morelos1 == 1 && victoria1 == 1) {
				raiz.delay.play()
			} else if (morelos1 == 1 && victoria2 == 1) {
				raiz.delay.play()
			} else if (morelos1 == 1 && morelos1 == 1) {
				raiz.delay.play()
			} else if (morelos1 == 1 && morelos2 == 1) {
				raiz.delay.play()
			} else if (morelos1 == 1 && iturbide1 == 1) {
				raiz.delay.play()
			} else if (morelos1 == 1 && iturbide2 == 1) {
				raiz.delay.play()
			} else if (morelos1 == 1 && morelos1 == 1) {
				raiz.delay.play()
			} else if (morelos1 == 1 && hidalgo2 == 1) {
				raiz.delay.play()
			} else if (morelos1 == 1 && morelos1 == 1) {
				raiz.delay.play()
			} else if (morelos1 == 1 && morelos2 == 1) {
				raiz.delay.play()
			}
		
			//votando ana 2 
			else if (morelos2 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (diaz2 == 1 && huerta2 == 1) {
				raiz.delay.play()
			} else if (morelos2 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (morelos2 == 1 && morelos1 == 1) {
				raiz.delay.play()
			} else if (morelos2 == 1 && morelos2 == 1) {
				raiz.delay.play()
			} else if (morelos2 == 1 && moctezuma1 == 1) {
				raiz.delay.play()
			} else if (morelos2 == 1 && moctezuma2 == 1) {
				raiz.delay.play()
			} else if (morelos2 == 1 && morelos1 == 1) {
				raiz.delay.play()
			} else if (morelos2 == 1 && morelos2 == 1) {
				raiz.delay.play()
			} else if (morelos2 == 1 && victoria1 == 1) {
				raiz.delay.play()
			} else if (morelos2 == 1 && victoria2 == 1) {
				raiz.delay.play()
			} else if (morelos2 == 1 && morelos1 == 1) {
				raiz.delay.play()
			} else if (morelos2 == 1 && morelos2 == 1) {
				raiz.delay.play()
			} else if (morelos2 == 1 && iturbide1 == 1) {
				raiz.delay.play()
			} else if (morelos2 == 1 && iturbide2 == 1) {
				raiz.delay.play()
			} else if (morelos2 == 1 && morelos1 == 1) {
				raiz.delay.play()
			} else if (morelos2 == 1 && hidalgo2 == 1) {
				raiz.delay.play()
			}
		
			//votando victoria
			else if (victoria1 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (victoria1 == 1 && huerta2 == 1) {
				raiz.delay.play()
			} else if (victoria1 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (victoria1 == 1 && moctezuma1 == 1) {
				raiz.delay.play()
			} else if (victoria1 == 1 && moctezuma2 == 1) {
				raiz.delay.play()
			} else if (victoria1 == 1 && victoria1 == 1) {
				raiz.delay.play()
			} else if (victoria1 == 1 && victoria2 == 1) {
				raiz.delay.play()
			} else if (victoria1 == 1 && victoria1 == 1) {
				raiz.delay.play()
			} else if (victoria1 == 1 && victoria2 == 1) {
				raiz.delay.play()
			} else if (victoria1 == 1 && victoria1 == 1) {
				raiz.delay.play()
			} else if (victoria1 == 1 && victoria2 == 1) {
				raiz.delay.play()
			} else if (victoria1 == 1 && iturbide1 == 1) {
				raiz.delay.play()
			} else if (victoria1 == 1 && iturbide2 == 1) {
				raiz.delay.play()
			} else if (victoria1 == 1 && victoria1 == 1) {
				raiz.delay.play()
			} else if (victoria1 == 1 && hidalgo2 == 1) {
				raiz.delay.play()
			}
		
			//votando victoria 2 
			else if (victoria2 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (diaz2 == 1 && huerta2 == 1) {
				raiz.delay.play()
			} else if (victoria2 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (victoria2 == 1 && victoria1 == 1) {
				raiz.delay.play()
			} else if (victoria2 == 1 && victoria2 == 1) {
				raiz.delay.play()
			} else if (victoria2 == 1 && moctezuma1 == 1) {
				raiz.delay.play()
			} else if (victoria2 == 1 && moctezuma2 == 1) {
				raiz.delay.play()
			} else if (victoria2 == 1 && victoria1 == 1) {
				raiz.delay.play()
			} else if (victoria2 == 1 && victoria2 == 1) {
				raiz.delay.play()
			} else if (victoria2 == 1 && victoria1 == 1) {
				raiz.delay.play()
			} else if (victoria2 == 1 && victoria2 == 1) {
				raiz.delay.play()
			} else if (victoria2 == 1 && victoria1 == 1) {
				raiz.delay.play()
			} else if (victoria2 == 1 && victoria2 == 1) {
				raiz.delay.play()
			} else if (victoria2 == 1 && iturbide1 == 1) {
				raiz.delay.play()
			} else if (victoria2 == 1 && iturbide2 == 1) {
				raiz.delay.play()
			} else if (victoria2 == 1 && victoria1 == 1) {
				raiz.delay.play()
			} else if (victoria2 == 1 && hidalgo2 == 1) {
				raiz.delay.play()
			}
		
			//votando iturbide
			else if (iturbide1 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (iturbide1 == 1 && huerta2 == 1) {
				raiz.delay.play()
			} else if (iturbide1 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (iturbide1 == 1 && moctezuma1 == 1) {
				raiz.delay.play()
			} else if (iturbide1 == 1 && moctezuma2 == 1) {
				raiz.delay.play()
			} else if (iturbide1 == 1 && iturbide1 == 1) {
				raiz.delay.play()
			} else if (iturbide1 == 1 && iturbide2 == 1) {
				raiz.delay.play()
			} else if (iturbide1 == 1 && iturbide1 == 1) {
				raiz.delay.play()
			} else if (iturbide1 == 1 && iturbide2 == 1) {
				raiz.delay.play()
			} else if (iturbide1 == 1 && iturbide1 == 1) {
				raiz.delay.play()
			} else if (iturbide1 == 1 && iturbide2 == 1) {
				raiz.delay.play()
			} else if (iturbide1 == 1 && iturbide1 == 1) {
				raiz.delay.play()
			} else if (iturbide1 == 1 && iturbide2 == 1) {
				raiz.delay.play()
			} else if (iturbide1 == 1 && iturbide1 == 1) {
				raiz.delay.play()
			} else if (iturbide1 == 1 && hidalgo2 == 1) {
				raiz.delay.play()
			} else if (iturbide1 == 1 && iturbide1 == 1) {
				raiz.delay.play()
			} else if (iturbide1 == 1 && iturbide2 == 1) {
				raiz.delay.play()
			}
		
			//votando victoria 2 
			else if (iturbide2 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (diaz2 == 1 && huerta2 == 1) {
				raiz.delay.play()
			} else if (iturbide2 == 1 && huerta1 == 1) {
				raiz.delay.play()
			} else if (iturbide2 == 1 && iturbide1 == 1) {
				raiz.delay.play()
			} else if (iturbide2 == 1 && iturbide2 == 1) {
				raiz.delay.play()
			} else if (iturbide2 == 1 && moctezuma1 == 1) {
				raiz.delay.play()
			} else if (iturbide2 == 1 && moctezuma2 == 1) {
				raiz.delay.play()
			} else if (iturbide2 == 1 && iturbide1 == 1) {
				raiz.delay.play()
			} else if (iturbide2 == 1 && iturbide2 == 1) {
				raiz.delay.play()
			} else if (iturbide2 == 1 && iturbide1 == 1) {
				raiz.delay.play()
			} else if (iturbide2 == 1 && iturbide2 == 1) {
				raiz.delay.play()
			} else if (iturbide2 == 1 && iturbide1 == 1) {
				raiz.delay.play()
			} else if (iturbide2 == 1 && iturbide2 == 1) {
				raiz.delay.play()
			} else if (iturbide2 == 1 && iturbide1 == 1) {
				raiz.delay.play()
			} else if (iturbide2 == 1 && iturbide2 == 1) {
				raiz.delay.play()
			} else if (iturbide2 == 1 && iturbide1 == 1) {
				raiz.delay.play()
			} else if (iturbide2 == 1 && hidalgo2 == 1) {
				raiz.delay.play()
			} else if (iturbide2 == 1 && iturbide1 == 1) {
				raiz.delay.play()
			} else if (iturbide2 == 1 && iturbide2 == 1) {
				raiz.delay.play()
			}
		
			triunfito()
		
		
		
		
		
		
			if (inicio == 0) {
				nohabilitar_cards()
			}
			
		}
		
		
		function nohabilitar_cards() {
		
			raiz.memorama.ana1_mc.enabled = 0;
			raiz.memorama.ana2_mc.enabled = 0;
			raiz.memorama.diaz1_mc.enabled = 0;
			raiz.memorama.diaz2_mc.enabled = 0;
			raiz.memorama.hidalgo1_mc.enabled = 0;
			raiz.memorama.hidalgo2_mc.enabled = 0;
		
			raiz.memorama.huerta1_mc.enabled = false;
			r.memorama.huerta2_mc.enabled = false;
			//alert("no habilitar")
			raiz.memorama.iturbide1_mc.enabled = 0;
			raiz.memorama.iturbide2_mc.enabled = 0;
			raiz.memorama.madero1_mc.enabled = 0;
			raiz.memorama.madero2_mc.enabled = 0;
			raiz.memorama.moctezuma1_mc.enabled = 0;
			raiz.memorama.moctezuma2_mc.enabled = 0;
			raiz.memorama.morelos1_mc.enabled = 0;
			raiz.memorama.morelos2_mc.enabled = 0;
			raiz.memorama.obregon1_mc.enabled = 0;
			raiz.memorama.obregon2_mc.enabled = 0;
			raiz.memorama.victoria1_mc.enabled = 0;
			raiz.memorama.victoria2_mc.enabled = 0;
			raiz.memorama.villa1_mc.enabled = 0;
			raiz.memorama.villa2_mc.enabled = 0;
			raiz.memorama.zapata1_mc.enabled = 0;
			raiz.memorama.zapata2_mc.enabled = 0;
		
		}
		
		function gameOver() {
			//alert("game over dentro")
			if (intentos < 0) {
				//alert("game over dentro")
			window.open("memomexrock1.html", "_self");
				//inicio=3
			}
		}
		/*function biosmc(){
			if (respuesta == "huerta"){
				alert("huerta")
				raiz.bios.gotoAndStop("huerta")
			}else if (respuesta == "villa"){
				raiz.bios.gotoAndStop(2)
			}else if (respuesta == "diaz"){
				raiz.bios.gotoAndStop(3)
			}else if (respuesta == "ana"){
				raiz.bios.gotoAndStop(4)
			}else if (respuesta == "iturbide"){
				raiz.bios.gotoAndStop("iturbide")
			}else if (respuesta == "moctezuma"){
				raiz.bios.gotoAndStop("moctezuma")
			}else if (respuesta == "madero"){
				raiz.bios.gotoAndStop("madero")
			}else if (respuesta == "victoria"){
				raiz.bios.gotoAndStop("victoria")
			}else if (respuesta == "morelos"){
				raiz.bios.gotoAndStop("morelos")
			}else if (respuesta == "hidalgo"){
				raiz.bios.gotoAndStop("hidalgo")
			}else if (respuesta == "zapata"){
				raiz.bios.gotoAndStop("zapata")
			}
		}*/
		
		function triunfito(){
		if(	realpuntos >= 12){
			//this.triunfo.visible =1
			raiz.triunfo.visible =1
		}
			
			
		}
		
		function equisIntentos() {
			//alert("game over dentro")
			if (intentos == 19) {
				//alert("game over dentro")
				raiz.equis.x1.gotoAndStop(0)
				raiz.equis.x2.gotoAndStop(0)
				raiz.equis.x3.gotoAndStop(0)
				raiz.equis.x4.gotoAndStop(0)
				raiz.equis.x5.gotoAndStop(0)
				raiz.equis.x6.gotoAndStop(0)
				raiz.equis.x7.gotoAndStop(0)
				raiz.equis.x8.gotoAndStop(0)
				raiz.equis.x9.gotoAndStop(0)
				raiz.equis.x10.gotoAndStop(0)
				raiz.equis.x11.gotoAndStop(0)
				raiz.equis.x12.gotoAndStop(0)
				raiz.equis.x13.gotoAndStop(0)
				raiz.equis.x14.gotoAndStop(0)
				raiz.equis.x15.gotoAndStop(0)
				raiz.equis.x16.gotoAndStop(0)
				raiz.equis.x17.gotoAndStop(0)
				raiz.equis.x18.gotoAndStop(0)
		
			} else if (intentos == 18) {
				raiz.equis.x1.gotoAndStop(1)
				raiz.equis.x2.gotoAndStop(0)
				raiz.equis.x3.gotoAndStop(0)
				raiz.equis.x4.gotoAndStop(0)
				raiz.equis.x5.gotoAndStop(0)
				raiz.equis.x6.gotoAndStop(0)
				raiz.equis.x7.gotoAndStop(0)
				raiz.equis.x8.gotoAndStop(0)
				raiz.equis.x9.gotoAndStop(0)
				raiz.equis.x10.gotoAndStop(0)
				raiz.equis.x11.gotoAndStop(0)
				raiz.equis.x12.gotoAndStop(0)
				raiz.equis.x13.gotoAndStop(0)
				raiz.equis.x14.gotoAndStop(0)
				raiz.equis.x15.gotoAndStop(0)
				raiz.equis.x16.gotoAndStop(0)
				raiz.equis.x17.gotoAndStop(0)
				raiz.equis.x18.gotoAndStop(0)
			} else if (intentos == 17) {
				raiz.equis.x1.gotoAndStop(1)
				raiz.equis.x2.gotoAndStop(1)
				raiz.equis.x3.gotoAndStop(0)
				raiz.equis.x4.gotoAndStop(0)
				raiz.equis.x5.gotoAndStop(0)
				raiz.equis.x6.gotoAndStop(0)
				raiz.equis.x7.gotoAndStop(0)
				raiz.equis.x8.gotoAndStop(0)
				raiz.equis.x9.gotoAndStop(0)
				raiz.equis.x10.gotoAndStop(0)
				raiz.equis.x11.gotoAndStop(0)
				raiz.equis.x12.gotoAndStop(0)
				raiz.equis.x13.gotoAndStop(0)
				raiz.equis.x14.gotoAndStop(0)
				raiz.equis.x15.gotoAndStop(0)
				raiz.equis.x16.gotoAndStop(0)
				raiz.equis.x17.gotoAndStop(0)
				raiz.equis.x18.gotoAndStop(0)
			}else if (intentos == 16) {
				raiz.equis.x1.gotoAndStop(1)
				raiz.equis.x2.gotoAndStop(1)
				raiz.equis.x3.gotoAndStop(1)
				raiz.equis.x4.gotoAndStop(0)
				raiz.equis.x5.gotoAndStop(0)
				raiz.equis.x6.gotoAndStop(0)
				raiz.equis.x7.gotoAndStop(0)
				raiz.equis.x8.gotoAndStop(0)
				raiz.equis.x9.gotoAndStop(0)
				raiz.equis.x10.gotoAndStop(0)
				raiz.equis.x11.gotoAndStop(0)
				raiz.equis.x12.gotoAndStop(0)
				raiz.equis.x13.gotoAndStop(0)
				raiz.equis.x14.gotoAndStop(0)
				raiz.equis.x15.gotoAndStop(0)
				raiz.equis.x16.gotoAndStop(0)
				raiz.equis.x17.gotoAndStop(0)
				raiz.equis.x18.gotoAndStop(0)
			}else if (intentos == 15) {
				raiz.equis.x1.gotoAndStop(1)
				raiz.equis.x2.gotoAndStop(1)
				raiz.equis.x3.gotoAndStop(1)
				raiz.equis.x4.gotoAndStop(1)
				raiz.equis.x5.gotoAndStop(0)
				raiz.equis.x6.gotoAndStop(0)
				raiz.equis.x7.gotoAndStop(0)
				raiz.equis.x8.gotoAndStop(0)
				raiz.equis.x9.gotoAndStop(0)
				raiz.equis.x10.gotoAndStop(0)
				raiz.equis.x11.gotoAndStop(0)
				raiz.equis.x12.gotoAndStop(0)
				raiz.equis.x13.gotoAndStop(0)
				raiz.equis.x14.gotoAndStop(0)
				raiz.equis.x15.gotoAndStop(0)
				raiz.equis.x16.gotoAndStop(0)
				raiz.equis.x17.gotoAndStop(0)
				raiz.equis.x18.gotoAndStop(0)
			}else if (intentos == 14) {
				raiz.equis.x1.gotoAndStop(1)
				raiz.equis.x2.gotoAndStop(1)
				raiz.equis.x3.gotoAndStop(1)
				raiz.equis.x4.gotoAndStop(1)
				raiz.equis.x5.gotoAndStop(1)
				raiz.equis.x6.gotoAndStop(0)
				raiz.equis.x7.gotoAndStop(0)
				raiz.equis.x8.gotoAndStop(0)
				raiz.equis.x9.gotoAndStop(0)
				raiz.equis.x10.gotoAndStop(0)
				raiz.equis.x11.gotoAndStop(0)
				raiz.equis.x12.gotoAndStop(0)
				raiz.equis.x13.gotoAndStop(0)
				raiz.equis.x14.gotoAndStop(0)
				raiz.equis.x15.gotoAndStop(0)
				raiz.equis.x16.gotoAndStop(0)
				raiz.equis.x17.gotoAndStop(0)
				raiz.equis.x18.gotoAndStop(0)
			}else if (intentos == 13) {
				raiz.equis.x1.gotoAndStop(1)
				raiz.equis.x2.gotoAndStop(1)
				raiz.equis.x3.gotoAndStop(1)
				raiz.equis.x4.gotoAndStop(1)
				raiz.equis.x5.gotoAndStop(1)
				raiz.equis.x6.gotoAndStop(1)
				raiz.equis.x7.gotoAndStop(0)
				raiz.equis.x8.gotoAndStop(0)
				raiz.equis.x9.gotoAndStop(0)
				raiz.equis.x10.gotoAndStop(0)
				raiz.equis.x11.gotoAndStop(0)
				raiz.equis.x12.gotoAndStop(0)
				raiz.equis.x13.gotoAndStop(0)
				raiz.equis.x14.gotoAndStop(0)
				raiz.equis.x15.gotoAndStop(0)
				raiz.equis.x16.gotoAndStop(0)
				raiz.equis.x17.gotoAndStop(0)
				raiz.equis.x18.gotoAndStop(0)
			}else if (intentos == 12) {
				raiz.equis.x1.gotoAndStop(1)
				raiz.equis.x2.gotoAndStop(1)
				raiz.equis.x3.gotoAndStop(1)
				raiz.equis.x4.gotoAndStop(1)
				raiz.equis.x5.gotoAndStop(1)
				raiz.equis.x6.gotoAndStop(1)
				raiz.equis.x7.gotoAndStop(1)
				raiz.equis.x8.gotoAndStop(0)
				raiz.equis.x9.gotoAndStop(0)
				raiz.equis.x10.gotoAndStop(0)
				raiz.equis.x11.gotoAndStop(0)
				raiz.equis.x12.gotoAndStop(0)
				raiz.equis.x13.gotoAndStop(0)
				raiz.equis.x14.gotoAndStop(0)
				raiz.equis.x15.gotoAndStop(0)
				raiz.equis.x16.gotoAndStop(0)
				raiz.equis.x17.gotoAndStop(0)
				raiz.equis.x18.gotoAndStop(0)
			}else if (intentos == 11) {
				raiz.equis.x1.gotoAndStop(1)
				raiz.equis.x2.gotoAndStop(1)
				raiz.equis.x3.gotoAndStop(1)
				raiz.equis.x4.gotoAndStop(1)
				raiz.equis.x5.gotoAndStop(1)
				raiz.equis.x6.gotoAndStop(1)
				raiz.equis.x7.gotoAndStop(1)
				raiz.equis.x8.gotoAndStop(1)
				raiz.equis.x9.gotoAndStop(0)
				raiz.equis.x10.gotoAndStop(0)
				raiz.equis.x11.gotoAndStop(0)
				raiz.equis.x12.gotoAndStop(0)
				raiz.equis.x13.gotoAndStop(0)
				raiz.equis.x14.gotoAndStop(0)
				raiz.equis.x15.gotoAndStop(0)
				raiz.equis.x16.gotoAndStop(0)
				raiz.equis.x17.gotoAndStop(0)
				raiz.equis.x18.gotoAndStop(0)
			}else if (intentos == 10) {
				raiz.equis.x1.gotoAndStop(1)
				raiz.equis.x2.gotoAndStop(1)
				raiz.equis.x3.gotoAndStop(1)
				raiz.equis.x4.gotoAndStop(1)
				raiz.equis.x5.gotoAndStop(1)
				raiz.equis.x6.gotoAndStop(1)
				raiz.equis.x7.gotoAndStop(1)
				raiz.equis.x8.gotoAndStop(1)
				raiz.equis.x9.gotoAndStop(1)
				raiz.equis.x10.gotoAndStop(0)
				raiz.equis.x11.gotoAndStop(0)
				raiz.equis.x12.gotoAndStop(0)
				raiz.equis.x13.gotoAndStop(0)
				raiz.equis.x14.gotoAndStop(0)
				raiz.equis.x15.gotoAndStop(0)
				raiz.equis.x16.gotoAndStop(0)
				raiz.equis.x17.gotoAndStop(0)
				raiz.equis.x18.gotoAndStop(0)
			}else if (intentos == 9) {
				raiz.equis.x1.gotoAndStop(1)
				raiz.equis.x2.gotoAndStop(1)
				raiz.equis.x3.gotoAndStop(1)
				raiz.equis.x4.gotoAndStop(1)
				raiz.equis.x5.gotoAndStop(1)
				raiz.equis.x6.gotoAndStop(1)
				raiz.equis.x7.gotoAndStop(1)
				raiz.equis.x8.gotoAndStop(1)
				raiz.equis.x9.gotoAndStop(1)
				raiz.equis.x10.gotoAndStop(1)
				raiz.equis.x11.gotoAndStop(0)
				raiz.equis.x12.gotoAndStop(0)
				raiz.equis.x13.gotoAndStop(0)
				raiz.equis.x14.gotoAndStop(0)
				raiz.equis.x15.gotoAndStop(0)
				raiz.equis.x16.gotoAndStop(0)
				raiz.equis.x17.gotoAndStop(0)
				raiz.equis.x18.gotoAndStop(0)
			}else if (intentos == 8) {
				raiz.equis.x1.gotoAndStop(1)
				raiz.equis.x2.gotoAndStop(1)
				raiz.equis.x3.gotoAndStop(1)
				raiz.equis.x4.gotoAndStop(1)
				raiz.equis.x5.gotoAndStop(1)
				raiz.equis.x6.gotoAndStop(1)
				raiz.equis.x7.gotoAndStop(1)
				raiz.equis.x8.gotoAndStop(1)
				raiz.equis.x9.gotoAndStop(1)
				raiz.equis.x10.gotoAndStop(1)
				raiz.equis.x11.gotoAndStop(1)
				raiz.equis.x12.gotoAndStop(0)
				raiz.equis.x13.gotoAndStop(0)
				raiz.equis.x14.gotoAndStop(0)
				raiz.equis.x15.gotoAndStop(0)
				raiz.equis.x16.gotoAndStop(0)
				raiz.equis.x17.gotoAndStop(0)
				raiz.equis.x18.gotoAndStop(0)
			}else if (intentos == 7) {
				raiz.equis.x1.gotoAndStop(1)
				raiz.equis.x2.gotoAndStop(1)
				raiz.equis.x3.gotoAndStop(1)
				raiz.equis.x4.gotoAndStop(1)
				raiz.equis.x5.gotoAndStop(1)
				raiz.equis.x6.gotoAndStop(1)
				raiz.equis.x7.gotoAndStop(1)
				raiz.equis.x8.gotoAndStop(1)
				raiz.equis.x9.gotoAndStop(1)
				raiz.equis.x10.gotoAndStop(1)
				raiz.equis.x11.gotoAndStop(1)
				raiz.equis.x12.gotoAndStop(1)
				raiz.equis.x13.gotoAndStop(0)
				raiz.equis.x14.gotoAndStop(0)
				raiz.equis.x15.gotoAndStop(0)
				raiz.equis.x16.gotoAndStop(0)
				raiz.equis.x17.gotoAndStop(0)
				raiz.equis.x18.gotoAndStop(0)
			}else if (intentos == 6) {
				raiz.equis.x1.gotoAndStop(1)
				raiz.equis.x2.gotoAndStop(1)
				raiz.equis.x3.gotoAndStop(1)
				raiz.equis.x4.gotoAndStop(1)
				raiz.equis.x5.gotoAndStop(1)
				raiz.equis.x6.gotoAndStop(1)
				raiz.equis.x7.gotoAndStop(1)
				raiz.equis.x8.gotoAndStop(1)
				raiz.equis.x9.gotoAndStop(1)
				raiz.equis.x10.gotoAndStop(1)
				raiz.equis.x11.gotoAndStop(1)
				raiz.equis.x12.gotoAndStop(1)
				raiz.equis.x13.gotoAndStop(1)
				raiz.equis.x14.gotoAndStop(0)
				raiz.equis.x15.gotoAndStop(0)
				raiz.equis.x16.gotoAndStop(0)
				raiz.equis.x17.gotoAndStop(0)
				raiz.equis.x18.gotoAndStop(0)
			}else if (intentos == 5) {
				raiz.equis.x1.gotoAndStop(1)
				raiz.equis.x2.gotoAndStop(1)
				raiz.equis.x3.gotoAndStop(1)
				raiz.equis.x4.gotoAndStop(1)
				raiz.equis.x5.gotoAndStop(1)
				raiz.equis.x6.gotoAndStop(1)
				raiz.equis.x7.gotoAndStop(1)
				raiz.equis.x8.gotoAndStop(1)
				raiz.equis.x9.gotoAndStop(1)
				raiz.equis.x10.gotoAndStop(1)
				raiz.equis.x11.gotoAndStop(1)
				raiz.equis.x12.gotoAndStop(1)
				raiz.equis.x13.gotoAndStop(1)
				raiz.equis.x14.gotoAndStop(1)
				raiz.equis.x15.gotoAndStop(0)
				raiz.equis.x16.gotoAndStop(0)
				raiz.equis.x17.gotoAndStop(0)
				raiz.equis.x18.gotoAndStop(0)
			}else if (intentos == 4) {
				raiz.equis.x1.gotoAndStop(1)
				raiz.equis.x2.gotoAndStop(1)
				raiz.equis.x3.gotoAndStop(1)
				raiz.equis.x4.gotoAndStop(1)
				raiz.equis.x5.gotoAndStop(1)
				raiz.equis.x6.gotoAndStop(1)
				raiz.equis.x7.gotoAndStop(1)
				raiz.equis.x8.gotoAndStop(1)
				raiz.equis.x9.gotoAndStop(1)
				raiz.equis.x10.gotoAndStop(1)
				raiz.equis.x11.gotoAndStop(1)
				raiz.equis.x12.gotoAndStop(1)
				raiz.equis.x13.gotoAndStop(1)
				raiz.equis.x14.gotoAndStop(1)
				raiz.equis.x15.gotoAndStop(1)
				raiz.equis.x16.gotoAndStop(0)
				raiz.equis.x17.gotoAndStop(0)
				raiz.equis.x18.gotoAndStop(0)
			}else if (intentos == 3) {
				raiz.equis.x1.gotoAndStop(1)
				raiz.equis.x2.gotoAndStop(1)
				raiz.equis.x3.gotoAndStop(1)
				raiz.equis.x4.gotoAndStop(1)
				raiz.equis.x5.gotoAndStop(1)
				raiz.equis.x6.gotoAndStop(1)
				raiz.equis.x7.gotoAndStop(1)
				raiz.equis.x8.gotoAndStop(1)
				raiz.equis.x9.gotoAndStop(1)
				raiz.equis.x10.gotoAndStop(1)
				raiz.equis.x11.gotoAndStop(1)
				raiz.equis.x12.gotoAndStop(1)
				raiz.equis.x13.gotoAndStop(1)
				raiz.equis.x14.gotoAndStop(1)
				raiz.equis.x15.gotoAndStop(1)
				raiz.equis.x16.gotoAndStop(1)
				raiz.equis.x17.gotoAndStop(0)
				raiz.equis.x18.gotoAndStop(0)
			}else if (intentos == 2) {
				raiz.equis.x1.gotoAndStop(1)
				raiz.equis.x2.gotoAndStop(1)
				raiz.equis.x3.gotoAndStop(1)
				raiz.equis.x4.gotoAndStop(1)
				raiz.equis.x5.gotoAndStop(1)
				raiz.equis.x6.gotoAndStop(1)
				raiz.equis.x7.gotoAndStop(1)
				raiz.equis.x8.gotoAndStop(1)
				raiz.equis.x9.gotoAndStop(1)
				raiz.equis.x10.gotoAndStop(1)
				raiz.equis.x11.gotoAndStop(1)
				raiz.equis.x12.gotoAndStop(1)
				raiz.equis.x13.gotoAndStop(1)
				raiz.equis.x14.gotoAndStop(1)
				raiz.equis.x15.gotoAndStop(1)
				raiz.equis.x16.gotoAndStop(1)
				raiz.equis.x17.gotoAndStop(1)
				raiz.equis.x18.gotoAndStop(0)
			}
			else if (intentos == 1) {
				raiz.equis.x1.gotoAndStop(1)
				raiz.equis.x2.gotoAndStop(1)
				raiz.equis.x3.gotoAndStop(1)
				raiz.equis.x4.gotoAndStop(1)
				raiz.equis.x5.gotoAndStop(1)
				raiz.equis.x6.gotoAndStop(1)
				raiz.equis.x7.gotoAndStop(1)
				raiz.equis.x8.gotoAndStop(1)
				raiz.equis.x9.gotoAndStop(1)
				raiz.equis.x10.gotoAndStop(1)
				raiz.equis.x11.gotoAndStop(1)
				raiz.equis.x12.gotoAndStop(1)
				raiz.equis.x13.gotoAndStop(1)
				raiz.equis.x14.gotoAndStop(1)
				raiz.equis.x15.gotoAndStop(1)
				raiz.equis.x16.gotoAndStop(1)
				raiz.equis.x17.gotoAndStop(1)
				raiz.equis.x18.gotoAndStop(1)
			}
		}
		
		
		
			/* Enter Frame Event
		During the animation, whenever player enters a new frame a function having your custom code will execute.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute everytime the player enters a new frame.
		*/
			createjs.Ticker.on("tick", flip);
		
		createjs.Ticker.on("tick", flip);
		this.delay.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("https://www.facebook.com/mazatlanonline.net/", "_blank");
		}
		this.triunfo.visible = 0
		this.memorama.huerta1_mc.gotoAndStop(1)
		this.memorama.huerta2_mc.gotoAndStop(1)
		this.memorama.villa1_mc.gotoAndStop(1)
		this.memorama.villa2_mc.gotoAndStop(1)
		this.memorama.moctezuma1_mc.gotoAndStop(1)
		this.memorama.moctezuma2_mc.gotoAndStop(1)
		this.memorama.victoria1_mc.gotoAndStop(1)
		this.memorama.victoria2_mc.gotoAndStop(1)
		this.memorama.iturbide1_mc.gotoAndStop(1)
		this.memorama.iturbide2_mc.gotoAndStop(1)
		this.memorama.obregon1_mc.gotoAndStop(1)
		this.memorama.obregon2_mc.gotoAndStop(1)
		this.memorama.madero1_mc.gotoAndStop(1)
		this.memorama.madero2_mc.gotoAndStop(1)
		this.memorama.ana1_mc.gotoAndStop(1)
		this.memorama.ana2_mc.gotoAndStop(1)
		this.memorama.morelos1_mc.gotoAndStop(1)
		this.memorama.morelos2_mc.gotoAndStop(1)
		this.memorama.hidalgo1_mc.gotoAndStop(1)
		this.memorama.hidalgo2_mc.gotoAndStop(1)
		this.memorama.zapata1_mc.gotoAndStop(1)
		this.memorama.zapata2_mc.gotoAndStop(1)
		this.memorama.diaz1_mc.gotoAndStop(1)
		this.memorama.diaz2_mc.gotoAndStop(1)
		this.menurespuestas.gotoAndStop(0)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 5
	this.menurespuestas = new lib.personajesmenu();
	this.menurespuestas.name = "menurespuestas";
	this.menurespuestas.parent = this;
	this.menurespuestas.setTransform(453.1,312,1,1,0,0,0,159.4,212.8);
	this.menurespuestas._off = true;

	this.timeline.addTween(cjs.Tween.get(this.menurespuestas).wait(1).to({_off:false},0).wait(1));

	// Actions
	this.delay = new lib.delay();
	this.delay.name = "delay";
	this.delay.parent = this;
	this.delay.setTransform(-331.9,161.2,0.89,0.89,0,0,0,47.1,26.9);
	this.delay._off = true;

	this.timeline.addTween(cjs.Tween.get(this.delay).wait(1).to({_off:false},0).wait(1));

	// Layer 9
	this.triunfo = new lib.triunfo();
	this.triunfo.name = "triunfo";
	this.triunfo.parent = this;
	this.triunfo.setTransform(1164.3,621.3,0.787,0.787,0,0,0,282.1,181.3);

	this.instrucciones = new lib.instructions();
	this.instrucciones.name = "instrucciones";
	this.instrucciones.parent = this;
	this.instrucciones.setTransform(670.4,311.9,1,1,0,0,0,282.1,181.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instrucciones},{t:this.triunfo}]},1).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABsD0QBFgFAAhEIAAAAIAAlTQAAhDhFgGIAAAAIAAhvQDmACAAC/IAAAAIAAE1QAADGjmAFIAAAAgAiPCUIAAk2QgBi2DhgHIAAAAIAABuQhCAHAABCIAAAAIAAFTQAABEBCAFIAAAAIAABtQjfgHgBjGgAffFUImDqlICnAAIGFKlgAZZFUICxk+IBMCBIhYC9gAVIFUIAAh1IDMAAIAAB1gASUFUIAAqlICcAAIAAKlgAOiFUIAAqlICTAAIAAKlgALJFUIh5l3IAAkuIAsAAIB0HRIBznRIAtAAIAAEyIh9FzgAGtFUIAAqlICSAAIAAKlgAl9FUIAAqlICTAAIAAKlgApWFUIh5l3IAAkuIAsAAIB0HRIBznRIAtAAIAAEyIh9FzgAtyFUIAAqlICSAAIAAKlgAyKFUIAAh1IDLAAIAAB1gA0/FUIAAqlICdAAIAAKlgA4xFUIAAqlICTAAIAAKlgA8KFUIh4l3IAAkuIAsAAIB0HRIBynRIAtAAIAAEyIh8FzgEggmAFUIAAqlICSAAIAAKlgEAkYAAzIg5AmIAVhCIg2gqIBFAAIAZhBIAVBCIBFADIg4AnIASBDgEgkbAAzIg5AmIAVhCIg2gqIBFAAIAZhBIAVBCIBFADIg4AnIASBDgAVIAsIAAhxIDAAAIAABxgAyKAsIAAhxIDAAAIAABxgAeFioIBPipIClAAIirErgAVIjgIAAhxIDMAAIAABxgAyKjgIAAhxIDLAAIAABxg");
	mask.setTransform(675.2,143.2);

	// Layer 3
	this.instance = new lib.hojita();
	this.instance.parent = this;
	this.instance.setTransform(924.6,75.1,1,2.474,90.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// Layer 6
	this.ans = new cjs.Text("7", "27px 'Arial'", "#FFFFFF");
	this.ans.name = "ans";
	this.ans.textAlign = "center";
	this.ans.lineHeight = 32;
	this.ans.parent = this;
	this.ans.setTransform(1450.9,414.2,1.85,1.85);

	this.trys = new cjs.Text("7", "27px 'Arial'", "#FFFFFF");
	this.trys.name = "trys";
	this.trys.textAlign = "center";
	this.trys.lineHeight = 32;
	this.trys.parent = this;
	this.trys.setTransform(1465.3,244.1,1.85,1.85);

	this.equis = new lib.espantosax();
	this.equis.name = "equis";
	this.equis.parent = this;
	this.equis.setTransform(1031.3,602.4,1.25,1.25,0,0,0,0,0.1);

	this.score = new cjs.Text("7", "27px 'Arial'", "#FFFFFF");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 32;
	this.score.parent = this;
	this.score.setTransform(1457.9,69.9,1.85,1.85);

	this.memorama = new lib.memoramas();
	this.memorama.name = "memorama";
	this.memorama.parent = this;
	this.memorama.setTransform(502.9,380.5,1.15,1.15,0,0,0,431.9,321.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.memorama},{t:this.score},{t:this.equis},{t:this.trys},{t:this.ans}]},1).wait(1));

	// Layer 4
	this.bios = new lib.bios();
	this.bios.name = "bios";
	this.bios.parent = this;
	this.bios.setTransform(756.2,607.1,1,1,0,0,0,61,90.5);
	this.bios._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bios).wait(1).to({_off:false},0).wait(1));

	// Layer 8
	this.instance_1 = new lib.heatfield();
	this.instance_1.parent = this;
	this.instance_1.setTransform(243.3,204.9,1.2,1.2,3.7);

	this.instance_2 = new lib.ozzy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(859.5,300.4,1.2,1.2,-17.2);

	this.instance_3 = new lib.gilmore();
	this.instance_3.parent = this;
	this.instance_3.setTransform(990,179,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).to({state:[]},1).wait(1));

	// Layer 1
	this.instance_4 = new lib.LOGONEW();
	this.instance_4.parent = this;
	this.instance_4.setTransform(23,681,0.755,0.755);

	this.inicio_btn = new lib.inicio();
	this.inicio_btn.name = "inicio_btn";
	this.inicio_btn.parent = this;
	this.inicio_btn.setTransform(674.2,379.4,2,2,0,0,0,46.3,46.3);
	new cjs.ButtonHelper(this.inicio_btn, 0, 1, 2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUC1QgJgIAAgNQAAgMAJgIQAJgJALAAQAMAAAJAJQAJAIAAAMQAAANgJAIQgJAJgMAAQgLAAgJgJgAgEBWIgYjZIgBgVQAAgRAJgKQAIgKAMAAQANAAAJAKQAJAKAAAUIgBASIgZDZg");
	this.shape.setTransform(776.1,610.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxB6QgJgCgFAAQgGAAgEAHIgJAAIAAhYIAJAAQAIAlAVATQAVATAZAAQATAAAMgKQALgLAAgQQAAgSgNgNQgNgMgmgUQgngSgMgQQgMgPAAgXQAAgfAVgUQAVgUAhAAQANAAAVAGQAOAEAEAAQAFAAACgCQACgCAEgGIAIAAIAABTIgIAAQgLgngPgOQgRgPgXAAQgTAAgMAKQgLAKAAAMQAAAPAIALQAJALAZAMIAmAUQA3AZAAAsQAAAhgZAVQgaAUgfAAQgWAAgdgIg");
	this.shape_1.setTransform(756.6,616.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAhB3QgHgJgBgVQglAdgJAFQgPAGgQAAQgaAAgQgSQgRgRAAgdQAAgRAIgNQALgSAcgRQAbgPA+gXIAAgJQAAglgLgOQgMgOgVAAQgRAAgKAKQgKAIAAAMIAAAQQAAAMgGAHQgGAHgLgBQgKAAgGgGQgGgIAAgLQAAgXAXgUQAYgTArAAQAfAAAVALQAQAIAIASQAFALAAAkIAABSQAAAkABAIQABAHAEADQACADAFAAQAEAAADgCQAGgDAQgRIAAAQQgeAogcAAQgNAAgIgKgAgaAAQgVAMgJANQgKANAAAPQAAAUAMANQAMAMAPAAQAUAAAggbIAAhcQgnAPgMAGg");
	this.shape_2.setTransform(734.2,616.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABZB+IAAgJIAFAAQAQAAAJgGQAGgFACgJQACgFAAgVIAAhpQAAgegHgMQgLgSgXABQgPgBgNAIQgPAHgUATIgBADIABALIAAB1QAAAZACAHQADAFAIAFQAIAEASAAIAAAJIh7AAIAAgJQAUAAAJgFQAHgFADgKQABgEAAgWIAAhpQAAgegIgNQgMgRgWAAQgOAAgOAIQgXALgMAPIAACDQAAAYAEAIQADAHAHAEQAGADAUAAIAAAJIh6AAIAAgJQARAAAHgDQAHgEAEgIQADgJAAgWIAAhdQAAgogDgMQgBgKgFgCQgDgEgIAAQgHAAgLAEIgDgJIBKgfIALAAIAAA0IAggeQAMgKAOgGQAOgGAOAAQAWAAAQAOQARANAGAZQAbgfAUgLQATgJATgBQAUABAPAJQAPALAKAWQAFAQAAAhIAABpQAAAXAEAJQACAFAIAFQAHAEAQAAIAAAJg");
	this.shape_3.setTransform(699.8,616.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhHBgQgggjAAg6QAAg+AhgjQAfgkAxABQApAAAaAbQAbAbAAAuIipAAQAAA2AaAeQAcAgAiAAQAZgBASgNQASgNALggIAJAGQgGAkgaAeQgcAfgoAAQgsAAgfgjgAgshdQgSARgDAfIBxAAQgBgXgFgKQgGgPgOgJQgNgIgOAAQgWAAgRARg");
	this.shape_4.setTransform(652.6,616.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AArDDIAAgjQgRASgRAJQgRAIgUAAQgoAAgegiQgegiAAg1QAAg0AhgrQAigsAzAAQAgAAAVAUIAAgtQAAgqgCgKQgCgJgEgEQgEgDgHAAQgGAAgMAEIgDgKIBJgeIAMAAIAAEcQAAArACAKQACAJAEAEQAFAEAFAAQAIAAAMgFIADAJIhJAfgAg3gbQgYAbAAA1QAAA2AXAdQAYAdAdAAQAXAAAXgYIAAh/QgBgRgIgPQgJgPgNgIQgMgIgNAAQgXAAgTAWg");
	this.shape_5.setTransform(627.4,610.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AANB+IAAgJIAFAAQARAAAHgFQAHgGADgKQABgEAAgVIAAhkQAAghgJgPQgJgQgUABQgfAAggAiIAACBQAAAZADAGQAEAIAHAEQAGADAUAAIAAAJIh5AAIAAgJIAFAAQATAAAGgKQAHgJAAgbIAAhaQAAgsgCgLQgCgJgEgDQgFgEgHAAQgHAAgKAEIgFgJIBLgfIALAAIAAA0QArg0AnAAQAUABAOAJQAPAKAIAYQAGAQAAAhIAABoQAAAXAEAJQADAGAHAEQAGAEASAAIAAAJg");
	this.shape_6.setTransform(598.9,616.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhIBgQgfgjAAg6QAAg+AggjQAhgkAvABQAqAAAbAbQAaAbAAAuIipAAQAAA2AaAeQAbAgAjAAQAZgBASgNQASgNALggIAJAGQgGAkgbAeQgbAfgoAAQgsAAgggjgAgthdQgRARgDAfIBxAAQgCgXgEgKQgGgPgNgJQgOgIgNAAQgXAAgSARg");
	this.shape_7.setTransform(573.2,616.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhYB+IAAgJQATAAAJgGQAHgFADgJQABgFAAgVIAAheQAAgrgCgIQgBgIgFgEQgFgEgHAAQgJAAgKAEIgDgJIBLgfIALAAIAAA3QAeg3AhAAQAOABAKAIQAKAJgBAMQAAAKgGAIQgIAHgJAAQgJAAgMgJQgMgKgFAAQgFABgGAFQgMALgMAZIAAB1QAAAVAFAKQADAHAJAFQAIAFARAAIAAAJg");
	this.shape_8.setTransform(552,616.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiAC5IAAgKIAHAAQAOABALgGQAFgDADgHQADgGAAgbIAAjoQAAgYgDgGQgBgHgFgDQgFgDgIAAQgHAAgKAEIgDgJIBMgeIALAAIAAA5QASggAUgNQASgNAVAAQAlAAAZAdQAeAjAAA5QAAA/gkApQgfAigtAAQgTAAgPgFQgKgEgNgMIAABKQAAAaACAHQAEAGAHAEQAIAEATAAIAAAKgAgJiLQgKAFgVAYIAABcQAAAdACAJQAEAQAOALQAPAMAVAAQAbAAARgVQAVgbAAgxQAAg4gYgfQgSgVgXAAQgNAAgMAHg");
	this.shape_9.setTransform(527.7,622.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAhB3QgHgJgBgVQglAdgJAFQgPAGgQAAQgaAAgQgSQgRgRAAgdQAAgRAIgNQALgSAcgRQAbgPA+gXIAAgJQAAglgLgOQgMgOgVAAQgRAAgKAKQgKAIAAAMIAAAQQAAAMgGAHQgGAHgLgBQgKAAgGgGQgGgIAAgLQAAgXAXgUQAYgTArAAQAfAAAVALQAQAIAIASQAFALAAAkIAABSQAAAkABAIQABAHAEADQACADAFAAQAEAAADgCQAGgDAQgRIAAAQQgeAogcAAQgNAAgIgKgAgaAAQgVAMgJANQgKANAAAPQAAAUAMANQAMAMAPAAQAUAAAggbIAAhcQgnAPgMAGg");
	this.shape_10.setTransform(503.7,616.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhaBWQgcglAAgvQAAghARghQARgiAbgPQAcgQAdAAQA4AAAiAqQAdAkAAAvQAAAggQAiQgQAigcARQgcARghAAQg3AAghgsgAgkhnQgOAIgJAVQgJAVAAAiQAAA0AWAnQAVAnAiAAQAaAAARgVQARgWAAg0QAAhBgcglQgUgagcAAQgOAAgPAJg");
	this.shape_11.setTransform(871.5,572.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgxB6QgJgCgFAAQgGAAgEAHIgJAAIAAhYIAJAAQAIAlAVATQAVATAZAAQATAAAMgKQALgLAAgQQAAgSgNgNQgNgMgmgUQgngSgMgQQgMgPAAgXQAAgfAVgUQAVgUAhAAQANAAAVAGQAOAEAEAAQAFAAACgCQACgCAEgGIAIAAIAABTIgIAAQgLgngPgOQgRgPgXAAQgTAAgMAKQgLAKAAAMQAAAPAIALQAJALAZAMIAmAUQA3AZAAAsQAAAhgZAVQgaAUgfAAQgWAAgdgIg");
	this.shape_12.setTransform(833.7,572.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhIBgQgfgiAAg7QAAg+AggjQAhgjAvAAQAqgBAbAcQAaAbAAAuIipAAQAAA1AbAgQAaAeAkAAQAYABASgNQARgOANggIAIAFQgFAlgcAfQgbAegoAAQgsgBgggigAgthdQgRARgDAfIBxAAQgCgXgDgKQgIgPgMgJQgOgIgNgBQgXAAgSASg");
	this.shape_13.setTransform(810.7,572.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgpC7QgWgIgXgPIAAj+QAAgqgCgKQgCgJgEgEQgFgDgGAAQgIAAgLAEIgEgKIBKgeIAMAAIAACzQAkgyAoAAQAmAAAcAgQAdAhAAA3QAABBgsAoQglAjguAAQgVAAgWgIgAgOgUQgLAGgRAPIAACTQAOANAPAHQANAHAQAAQAYAAAVgbQAVgbAAgzQAAgvgVgYQgVgagbAAQgNAAgOAHg");
	this.shape_14.setTransform(783.5,566.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAhB4QgHgJgBgXQglAegJAFQgPAGgQAAQgaAAgQgRQgRgSAAgcQAAgTAIgNQALgRAcgRQAbgPA+gXIAAgJQAAgmgLgNQgMgOgVAAQgRAAgKAKQgKAIAAAMIAAAQQAAAMgGAHQgGAHgLAAQgKgBgGgGQgGgIAAgLQAAgYAXgTQAYgTArAAQAfAAAVALQAQAIAIASQAFALAAAkIAABTQAAAjABAIQABAHAEAEQACACAFAAQAEAAADgCQAGgDAQgRIAAAPQgeApgcAAQgNAAgIgJgAgaAAQgVAMgJANQgKANAAAPQAAATAMAOQAMAMAPAAQAUAAAggbIAAhcQgnAPgMAGg");
	this.shape_15.setTransform(759.5,572.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgxB6QgJgCgFAAQgGAAgEAHIgJAAIAAhYIAJAAQAIAlAVATQAVATAZAAQATAAAMgKQALgLAAgQQAAgSgNgNQgNgMgmgUQgngSgMgQQgMgPAAgXQAAgfAVgUQAVgUAhAAQANAAAVAGQAOAEAEAAQAFAAACgCQACgCAEgGIAIAAIAABTIgIAAQgLgngPgOQgRgPgXAAQgTAAgMAKQgLAKAAAMQAAAPAIALQAJALAZAMIAmAUQA3AZAAAsQAAAhgZAVQgaAUgfAAQgWAAgdgIg");
	this.shape_16.setTransform(736,572.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhHBgQgggiAAg7QAAg+AggjQAggjAxAAQApgBAbAcQAaAbAAAuIipAAQAAA1AbAgQAbAeAjAAQAYABASgNQASgOAMggIAIAFQgFAlgbAfQgcAegpAAQgrgBgfgigAgshdQgSARgDAfIBxAAQgBgXgEgKQgIgPgNgJQgNgIgOgBQgWAAgRASg");
	this.shape_17.setTransform(699.3,572.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAzB/IAAg0QgfAigRAJQgQAJgSAAQgVAAgPgMQgPgMgGgTQgGgTAAgiIAAhtQAAgRgEgHQgEgHgHgDQgHgEgUAAIAAgKIBWAAIAACkQAAAiANALQALALARAAQALAAAPgIQAOgHAUgUIAAiLQAAgVgHgHQgIgHgYgBIAAgKIBUAAIAACUQAAArACAKQACAJAEAEQAEAEAGAAQAJAAAKgFIAEAJIhKAfg");
	this.shape_18.setTransform(673,573.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAEC5IAAgKIAFAAQAPAAAIgEQAFgDAEgHQADgIAAgWIAAhqQgZAdgSALQgRAKgUAAQgjAAgcggQgcghAAg1QAAg/AlgnQAlgnA0AAQAOAAANAEQANAEAKAJQAQgIAOgJIAJAAIAAE7QAAAXADAHQAEAHAHAEQAGADAUAAIAAAKgAg9iMQgVAZAAA0QAAAyAWAZQAVAZAfAAQAPAAAMgGQANgHAMgQIAAhyQAAgUgFgMQgGgMgNgIQgNgIgQAAQgeAAgWAag");
	this.shape_19.setTransform(646.5,578.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhaBWQgcglAAgvQAAghARghQARgiAbgPQAcgQAdAAQA4AAAiAqQAdAkAAAvQAAAggQAiQgQAigcARQgcARghAAQg3AAghgsgAgkhnQgOAIgJAVQgJAVAAAiQAAA0AWAnQAVAnAiAAQAaAAARgVQARgWAAg0QAAhBgcglQgUgagcAAQgOAAgPAJg");
	this.shape_20.setTransform(604.3,572.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag5C/IAAgKQARAAAGgDQAGgDADgJQAEgIAAgWIAAjfQAAgqgCgJQgCgJgDgEQgFgDgHAAQgGAAgLADIgFgJIBIgeIANAAIAAFGQAAAXAEAHQACAHAHAFQAHADAUAAIAAAKg");
	this.shape_21.setTransform(583.2,566);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAhB4QgHgJgBgXQglAegJAFQgPAGgQAAQgaAAgQgRQgRgSAAgcQAAgTAIgNQALgRAcgRQAbgPA+gXIAAgJQAAgmgLgNQgMgOgVAAQgRAAgKAKQgKAIAAAMIAAAQQAAAMgGAHQgGAHgLAAQgKgBgGgGQgGgIAAgLQAAgYAXgTQAYgTArAAQAfAAAVALQAQAIAIASQAFALAAAkIAABTQAAAjABAIQABAHAEAEQACACAFAAQAEAAADgCQAGgDAQgRIAAAPQgeApgcAAQgNAAgIgJgAgaAAQgVAMgJANQgKANAAAPQAAATAMAOQAMAMAPAAQAUAAAggbIAAhcQgnAPgMAGg");
	this.shape_22.setTransform(550.2,572.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgpC7QgWgIgXgPIAAj+QAAgqgCgKQgCgJgEgEQgFgDgGAAQgIAAgLAEIgEgKIBKgeIAMAAIAACzQAkgyAoAAQAmAAAcAgQAdAhAAA3QAABBgsAoQglAjguAAQgVAAgWgIgAgOgUQgLAGgRAPIAACTQAOANAPAHQANAHAQAAQAYAAAVgbQAVgbAAgzQAAgvgVgYQgVgagbAAQgNAAgOAHg");
	this.shape_23.setTransform(522.3,566.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhHBgQgggiAAg7QAAg+AhgjQAfgjAxAAQApgBAbAcQAaAbAAAuIipAAQAAA1AbAgQAbAeAjAAQAYABASgNQASgOAMggIAIAFQgFAlgbAfQgcAegpAAQgrgBgfgigAgshdQgSARgDAfIBxAAQgBgXgEgKQgIgPgNgJQgNgIgOgBQgWAAgRASg");
	this.shape_24.setTransform(497.7,572.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAzB/IAAg0QgfAigRAJQgQAJgSAAQgVAAgPgMQgPgMgGgTQgGgTAAgiIAAhtQAAgRgEgHQgEgHgHgDQgHgEgUAAIAAgKIBWAAIAACkQAAAiANALQALALARAAQALAAAPgIQAOgHAUgUIAAiLQAAgVgHgHQgIgHgYgBIAAgKIBUAAIAACUQAAArACAKQACAJAEAEQAEAEAGAAQAJAAAKgFIAEAJIhKAfg");
	this.shape_25.setTransform(471.4,573.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhYB/IAAgKQATAAAJgGQAHgFADgJQABgFAAgVIAAheQAAgrgCgIQgBgJgFgDQgFgEgHAAQgJAAgKAEIgDgJIBLgfIALAAIAAA4QAeg4AhAAQAOABAKAIQAKAJgBAMQAAALgGAHQgIAHgJAAQgJAAgMgJQgMgKgFAAQgFAAgGAGQgMALgMAZIAAB1QAAAUAFALQADAHAJAFQAIAFARAAIAAAKg");
	this.shape_26.setTransform(448.9,572.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AiKC2IAAgKIAOAAQAXAAAKgPQAFgJAAgeIAAjqQAAgjgHgJQgKgLgVAAIgOAAIAAgKICGAAQAwAAAcAKQAcAKATAYQAUAYAAAhQAAAsgdAcQgeAbg2AAQgNAAgOgCIghgGIAABrQAAAiAIAIQAKAMATAAIAOAAIAAAKgAgiiaIAACXQAOADALAAIASACQAcAAAUgVQAVgWAAgiQAAgXgKgVQgKgVgRgJQgSgLgXAAQgMAAgWAGg");
	this.shape_27.setTransform(423.6,566.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgUC0QgJgKAAgVIABgSIAYjYIAJAAIAYDYIABAWQAAAQgJALQgJAKgMAAQgMAAgIgKgAgTiLQgJgIAAgMQAAgMAJgJQAIgJALAAQANAAAIAJQAJAJAAAMQAAAMgJAIQgIAKgNgBQgLABgIgKg");
	this.shape_28.setTransform(399.7,577.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.inicio_btn},{t:this.instance_4}]}).to({state:[]},1).wait(1));

	// Layer 7
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,1,1).p("EBq6g80Ih5AAIhmAAIiOAAIhmAAIiPAAIhmAAIiOAAIhmAAIiPAAIhmAAIiOAAIhmAAIiPAAIhmAAIiOAAIhmAAIiPAAIhlAAIiPAAIhmAAIiOAAIhnAAIiOAAIhmAAIiPAAIhmAAIiOAAIiVAAIg/AAIhnAAIiOAAIhmAAIiBAAIgOAAIhlAAIiPAAIhmAAIiPAAIhlAAIiPAAIhmAAIiOAAIhnAAIiOAAIhmAAIiPAAIhlAAIiPAAIhmAAIiOAAIhnAAIiOAAIhmAAIiPAAIhlAAIiPAAIgOAAEBq6g80IAAgfEBq6A81IAAh/IAAraIAAoNIAArfIAAoLIAArgIAAoJIAArdIAAoNIAArdIAAoNIAAreIAAoNIAAhxEA1DA9UIBfAAICPAAIBmAAICPAAIBmAAICOAAIBmAAICPAAIBmAAICOAAIBmAAICPAAIBlAAICPAAIBmAAICPAAIBmAAICOAAIBmAAICPAAIBmAAICOAAIBmAAICPAAIBlAAICPgBIBmAAICOAAIAfAAEAAyg80IiAAAIgOAAIhlAAIiPAAIhmAAIiOAAIhnAAIiOAAIhmAAIiPAAIhmAAIiOAAIhmAAIiOAAIhmAAIiPAAIhmAAIiOAAIhmAAIiPAAIhmAAIiPAAIhlAAIiPAAIhmAAIiPAAIhlAAIiPAAIhmAAIiOAAIhmAAIiPAAIhmAAIiOAAIhmAAIiPAAIhmAAIiOAAIhnAAIiNAAIhnAAIiOAAIhmAAIiPAAIhmAAIiOAAIhmAAIiPAAIhmAAIiOAAIhnAAIiNAAIhnAAIiOAAIhmAAIiPAAIiUAAIAAL5IAALeIAAILIAALfIAAIOIAALaIAAIPIAALdIAAIMIAALeIAAIMIAALeIAAAfIBgAAICPAAIBlAAICPAAIBmAAICPAAIBmAAICPAAIBlAAICPAAIBmAAICOAAIBmAAICOAAIBnAAICOAAIBmAAICPAAIBlAAICPAAIBmAAICPAAIBlAAICPAAIBmAAICPgBIBmAAICOAAIBmAAICPAAIBmABICOgBIBmAAICOAAIBmAAICPAAIBmAAICOAAIBnABICOgBIBmAAICPAAIBmAAICOAAIBmAAICPAAIBlABICPgBIBmAAICOAAIBnAAICOAAIBmAAICPAAIBlABICPgBIBlAAICOAAIBnAAICOAAIBmAAICPAAIBlABICPgBIBmAAICPAAIBlAAICPAAIBmABICOAAIBnAAICOAAIBmAAICPAAIBlAAICPAAIBmAAICOAAIBmAAICPAAIBmAAICOAAIDbAAEA1DA81IAAAf");
	this.shape_29.setTransform(672.2,379.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("EBoGA9ZIAHgpICtt3IAALaIgfCdIiOAAICOAAIgHApgEBkRA9ZIAHgoMAGighlIAALgIkTWEIiPABICPgBIgIApgEgdHA9ZIAIgpICPAAIiPAAMAXvh6HICPAAIiPAAIAAAAICPAAIAAAAMgXvB6HIgIApgEgg7A9ZIAHgpICPAAIiPAAMAXvh6HICPAAIiPAAIAAAAICPAAIAAAAMgXvB6HIgIApgEgkwA9ZIAIgpICOAAIiOAAMAXvh6HICOAAIiOAAIAAAAICOAAIAAAAMgXvB6HIgHApgEgolA9ZIAIgpICPAAIiPAAMAXvh6HICPAAIiPAAIAAAAICPAAIAAAAMgXvB6HIgIApgEgsZA9ZIAIgpICPAAIiPAAMAXvh6HICOAAIiOAAIAAAAICOAAIAAAAMgXuB6HIgIApgEgwNA9ZIAIgpICOAAIiOAAMAXuh6HICPAAIiPAAIAAAAICPAAIAAAAMgXvB6HIgHApgEg0BA9ZIAHgpICPAAIiPAAMAXvh6HICPAAIiPAAIAAAAICPAAIAAAAMgXvB6HIgIApgEg32A9ZIAIgpICOAAIiOAAMAXvh6HICOAAIiOAAIAAAAICOAAIAAAAMgXvB6HIgIApgEg7rA9ZIAIgpICPAAIiPAAMAXvh6HICPAAIiPAAIAAAAICPAAIAAAAMgXvB6HIgIApgEA1CAMGIAALfMgHOAlMIiPAAgEAnwA8xMANShETIAALdMgLDA42gEAj8A8xMARGhX9IAALeMgO3BMfgEBgkA8xMAKWg1PIAALgMgIHApvgEBcwA8xMAOKhI1IAALdMgL8A9YgEBY7A8xMAR/hcgIAALeMgPwBRCgEBVHA8xMAVzhwKIAALdMgTlBktgEBRSA8xMAXvh6IIB5AAIAABxMgXZB4XgEBNdA8xMAXwh6IICOAAMgXvB6IgEBJpA8xMAXvh6IICPAAMgXvB6IgEBF1A8xMAXvh6IICOAAMgXvB6IgEBCAA8xMAXvh6IICPAAMgXvB6IgEA+MA8xMAXvh6IICOAAMgXvB6IgEA6XA8xMAXvh6IICPAAMgXvB6IgEA2iA8xMAXwh6IICOAAMgXvB6IgEAvaA8xIFo8+IAALbIjaRjgEAgIA8xMAU6hrnIAALfMgSrBgIgEAcUA8xMAXvh6IIA/AAIAAGTMgWgBz1gEgvSg9XICPAAMgXvB6HIiOABgEhN1g9XICOAAMgXvB6HIiPABgEhpZA8xMAXvh6IICPAAMgXvB6IgEAYfA8wMAXuh6HICPAAMgXvB6HgEAkwg9XICPAAIiPAAIAAAAICPAAIAAAAMgXvB6HIiPAAgEAVeg9XICPAAIiPAAIAAAAICPAAIAAAAMgXuB6HIiPAAgEAGMg9XICPAAIiPAAIAAAAICPAAIAAAAMgXuB6HIiPAAgEg/YA8wMAXvh6HICPAAMgXvB6HgEhDMA8wMAXvh6HICPAAMgXvB6HgEhK1A8wMAXvh6HICPAAMgXvB6HgEhOpA8wMAXvh6HICOAAMgXvB6HgEhSeA8wMAXvh6HICPgBMgXvB6IgEhWSA8wMAXvh6HICOAAMgXvB6HgEhaHA8wMAXvh6HICPAAMgXvB6HgEhd7A8wMAXvh6HICOgBMgXvB6IgEhhwA8wMAXvh6HICOAAMgXvB6HgEBqbA8wgEBmnA8wgEAUqA8wMAXvh6HIAOAAICBAAMgXvB6HgEAQ2A8wMAXvh6HICPAAIiPAAIAAAAICPAAIAAAAMgXwB6HgEAJNA8wMAXvh6HICPAAIiPAAIAAAAICPAAIAAAAMgXvB6HgEAFZA8wMAXvh6HICOAAIiOAAIAAAAICOAAIAAAAMgXvB6HgEABkA8wMAXvh6HICOAAIiOAAIAAAAICOAAIAAAAMgXvB6HgEgGEA8wMAXuh6HICOAAIiOAAIAAAAICOAAIAAAAMgXuB6HgEgJ5A8wMAXuh6HICPAAIiPAAIAAAAICPAAIAAAAMgXuB6HgEgNtA8wMAXuh6HICOAAIiOAAIAAAAICOAAIAAAAMgXuB6HgEgVWA8wMAXuh6HICOAAIiOAAIAAAAICOAAIAAAAMgXtB6HgEgZKA8wMAXuh6HIAOAAICAAAMgXuB6HgEgc/A8wgEgkoA8wgEgodA8wgEgsRA8wgEgz6A8wgEg3uA8wgEA1DAw0MAVahuLICPAAMgXpB5pgEhq5AwzMAVbhuKICOAAMgXpB5ogEA1DAdKMARmhahICPAAMgT1Bl/gEhq5AdKMARmhahICPAAMgT1Bl/gEA1DAJhMANyhG4ICOAAMgQABSVgEhq5AJgMANyhG3ICOAAMgQABSVgEA1DgKIMAJ9gzPICOAAMgMLA+pgEhq5gKIMAJ9gzPICOAAMgMLA+pgEA1Dgd1IGI/iICPAAMgIXArBgEhq5gd1IGJ/iICOAAMgIXArBgEA1DgxeICUr5ICOAAIkiXXgEhq5gxeICUr5ICPAAIkjXXgEAsZg9XIAOAAIgOAAgEAolg9XgEAkwg9XgEAg8g9XgEAdIg9XgEAZTg9XgEAVeg9XgEARqg9XgEAN1g9XgEAKBg9XgEAGMg9XgEACYg9XgEgBcg9XIAOAAIgOAAgEgFQg9XgEgJFg9XgEgM5g9XgEgQug9XgEgUig9XgEgYXg9XgEgcLg9XgEgf/g9XgEgj0g9Xg");
	this.shape_30.setTransform(672.2,382.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(662,365.9,1370.4,789.8);
// library properties:
lib.properties = {
	id: 'EB97120119CEBA419A67D43BE8DB75E5',
	width: 1350,
	height: 760,
	fps: 24,
	color: "#333333",
	opacity: 1.00,
	manifest: [
		{src:"images/memomexrock1_atlas_.png", id:"memomexrock1_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['EB97120119CEBA419A67D43BE8DB75E5'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;