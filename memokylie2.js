(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"memokylie2_atlas_", frames: [[179,452,177,224],[537,452,177,224],[406,226,177,224],[406,0,177,224],[0,0,225,225],[0,453,177,224],[358,452,177,224],[764,197,160,200],[764,0,194,195],[0,679,100,100],[585,0,177,224],[227,226,177,224],[0,227,177,224],[227,0,177,224],[585,226,177,224],[716,452,177,224],[179,678,153,204]]}
];


// symbols:



(lib.AdorableKitten = function() {
	this.spriteSheet = ss["memokylie2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Chara = function() {
	this.spriteSheet = ss["memokylie2_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Creeper = function() {
	this.spriteSheet = ss["memokylie2_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Fluttershy = function() {
	this.spriteSheet = ss["memokylie2_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.fondo = function() {
	this.spriteSheet = ss["memokylie2_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Frisk = function() {
	this.spriteSheet = ss["memokylie2_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Grumpy = function() {
	this.spriteSheet = ss["memokylie2_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hojita = function() {
	this.spriteSheet = ss["memokylie2_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.logomzt = function() {
	this.spriteSheet = ss["memokylie2_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.LOGONEW = function() {
	this.spriteSheet = ss["memokylie2_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Papyrus = function() {
	this.spriteSheet = ss["memokylie2_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.PinkiePie = function() {
	this.spriteSheet = ss["memokylie2_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Sans = function() {
	this.spriteSheet = ss["memokylie2_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.SonicandBSonic = function() {
	this.spriteSheet = ss["memokylie2_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Steve = function() {
	this.spriteSheet = ss["memokylie2_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Tails = function() {
	this.spriteSheet = ss["memokylie2_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.tarjetaBack = function() {
	this.spriteSheet = ss["memokylie2_atlas_"];
	this.gotoAndStop(16);
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000033").ss(2,1,1).p("ABbBdQgmAng1AAQg0AAgmgnQglgmAAg3QAAg2AlgnQAmgmA0AAQA1AAAmAmQAlAnAAA2QAAA3glAmg");
	this.shape.setTransform(17,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004993").s().p("Ag9AwQgagUAAgcQAAgbAagUQAZgUAkAAQAlAAAZAUQAaAUAAAbQAAAcgaAUQgZAUglAAQgkAAgZgUg");
	this.shape_1.setTransform(16.2,11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0054A8").s().p("AhaBdQglgmAAg3QAAg2AlgnQAmgmA0AAQA1AAAlAmQAmAnAAA2QAAA3gmAmQglAng1AAQg0AAgmgngAhFhPQgaAUAAAcQAAAcAaATQAZAUAlAAQAkAAAZgUQAagTAAgcQAAgcgagUQgZgUgkAAQglAAgZAUg");
	this.shape_2.setTransform(17,14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000033").ss(2,1,1).p("AhIhsQAfgXApAAQA1AAAmAmQAAABABABABvhCQARAeAAAkQAAATgEAQABkBTQgEAFgFAFQgmAng1AAQgwAAgkghAhyA8QgNgbAAghQAAgqAXgi");
	this.shape_3.setTransform(17,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0054A8").s().p("AhUBjIAxgtIAlgfIALAIQAnAaArAXIAFADIgKAKQglAng1AAQgwAAgkghgAh/AAQAAgqAXghQAWAfAmAgQgkAdgeAmIgDAFQgOgbAAghgAA6gWIA1gsQARAeAAAkQAAASgEARQgfgfgjgagAhIhsQAfgXApAAQA1AAAlAnIACABQgnALgpAZQgfgVg1ggg");
	this.shape_4.setTransform(17,15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#993300").s().p("AieCXQgGgKAEgUQAJgjAmgwIADgFQAeglAkgeQgmgggWgfQgRgagHgYIAUgDIAkAVQA1AfAfAVQApgZAngLIARgEIAGAFQAGAEAAAMIgKAIIg1AsQAjAbAfAeQAVAUASAWQgEAMgFAEQgHAGgOAAQgDAAgegQIgFgDQgrgXgngaIgLgIIgkAgIgyAsQg6A4gEASg");
	this.shape_5.setTransform(17,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.2,0.3,27.6,28.4);


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
	this.shape.graphics.f("#0066CC").s().p("AggCRQgMgPgGgZQgGgXgCgeQgCgeAAgdQAAgYACgaQACgaAGgXQAGgXAMgOQAMgPAUAAQAVAAAMAPQAMAOAGAXQAGAXACAaQACAaAAAYQAAAdgCAeQgCAegGAXQgGAZgMAPQgMAOgVAAQgUAAgMgOgAgLh8QgFANgDAcQgDAdAAAvQAAA2ADAgQADAgAFAOQAFANAGAAQAHAAAFgNQAFgOAEggQADggAAg2QAAgvgDgdQgEgcgFgNQgFgNgHAAIAAAAQgGAAgFANg");
	this.shape.setTransform(73.3,48.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AgjCfIgCgBIgBgBIACgCIABgCIAOgMQADgCAAgDIABgHIAAkBIgBgGQAAgEgDgBIgOgNIgBgCIgCgCIABgCIACAAIBHAAIACAAIABACIgCACIgBACIgOANQgDABAAAEIgBAGIAAEBIABAHQAAADADACIAOAMIABACIACACIgBABIgCABg");
	this.shape_1.setTransform(61.5,48.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066CC").s().p("AgaCQQgMgRgGgZQgGgZgCgdQgCgdAAgaIABgkIADgoQADgVAHgRQAGgRALgKQALgKAQAAQAGgBAGADIALAHIAEABIADABIAEgBIAFgEIAFgFIAEgBQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAIABAGIAABlIgBACIgCACIgCgCIgCgDIgFgcQgEgPgFgNQgFgNgHgJQgHgIgJAAQgNAAgFAfQgFAgABBDQAAAvABAdQACAdAEAPQAEAPAFAFQAGAGAHgBQAIAAAGgIQAFgHAEgMIAHgYIAEgVIABgJIABgDIADgBIACABIABADQAAAfgEAXQgFAYgKAMQgLAMgVAAQgSAAgMgPg");
	this.shape_2.setTransform(50.4,48.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066CC").s().p("AgjCfIgCgBIgBgBIACgCIABgCIAOgMQADgCAAgDIABgHIAAkBIgBgGQAAgEgDgBIgOgNIgBgCIgCgCIABgCIACAAIBHAAIACAAIABACIgCACIgBACIgOANQgDABAAAEIgBAGIAAEBIABAHQAAADADACIAOAMIABACIACACIgBABIgCABg");
	this.shape_3.setTransform(39.2,48.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066CC").s().p("AAiCfQgDAAgDgCQgDgDgBgFIg0jnIgBAAIAADTQAAADABAEIADAEIANANIACACQAAAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIgBABIgCABIg8AAIgCgBIgBgBIABgCIACgCIALgMIAEgFIABgHIAAkBIgBgGIgEgFIgLgNIgCgCIgBgDIABgBIACAAIA2AAQABAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIACAGIApC1IABAAIAAieIgBgGIgDgFIgMgNIgDgCQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIABgBIACAAIA8AAIACAAIABABIgBADIgCACIgLANIgDAFIgCAGIAAEbQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgDABg");
	this.shape_4.setTransform(26.6,48.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066CC").s().p("AgjCfIgCgBIgBgBIACgCIABgCIAOgMQADgCAAgDIABgHIAAkBIgBgGQAAgEgDgBIgOgNIgBgCIgCgCIABgCIACAAIBHAAIACAAIABACIgCACIgBACIgOANQgDABAAAEIgBAGIAAEBIABAHQAAADADACIAOAMIABACIACACIgBABIgCABg");
	this.shape_5.setTransform(14,48.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmCBQgPgNgHgVQgHgWgDgbQgCgaAAgbQAAgVACgXQADgXAHgVQAHgVAPgNQAPgNAXAAQAYAAAPANQAPANAHAVQAHAVADAXQACAXAAAVQAAAbgCAaQgDAbgHAWQgHAVgPANQgPANgYABQgXgBgPgNgAAPBwQAFgMAFgdQADgdAAgwQAAgqgDgaQgFgagFgMQgHgLgIAAQgHAAgGALQgHAMgDAaQgEAaAAAqQAAAwAEAdQADAdAHAMQAGAMAHAAQAIAAAHgMg");
	this.shape_6.setTransform(79.5,47.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqCPIgCgBIgBgBIACgCIACgCIAQgLIAEgFIABgGIAAjmIgBgGIgEgEIgQgLIgCgCIgCgCIABgBIACgBIBVAAIACABIABABIgBACIgDACIgQALIgEAEIgBAGIAADmIABAGIAEAFIAQALIADACIABACIgBABIgCABg");
	this.shape_7.setTransform(65.4,47.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggCAQgOgOgHgXQgHgWgCgaQgDgaAAgYIABggQABgSAEgSQADgSAIgPQAIgPANgJQANgKATAAQAHAAAHACQAHACAGAEIAFACIAEAAIAFgBIAFgDIAGgEIAFgCQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABABIABAFIAABaIgBADIgDABIgDgCIgBgDIgHgZQgEgOgGgLQgGgMgJgHQgIgIgKAAQgRAAgGAcQgFAdAAA8QAAApACAaQADAbAEANQAFAOAGAEQAHAFAJAAQAJAAAHgHQAHgIAEgKQAFgLADgKIAFgTIABgJIABgCIAEgBIADABIABADQAAAcgGAVQgFAUgNALQgNAMgYAAQgWgBgPgOg");
	this.shape_8.setTransform(52.2,47.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgqCPIgCgBIgBgBIACgCIACgCIAQgLIAEgFIABgGIAAjmIgBgGIgEgEIgQgLIgCgCIgCgCIABgBIACgBIBVAAIACABIABABIgBACIgDACIgQALIgEAEIgBAGIAADmIABAGIAEAFIAQALIADACIABACIgBABIgCABg");
	this.shape_9.setTransform(38.9,47.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAoCPQgEAAgDgDQgDgCgBgFIg/jOIgBAAIAAC8QAAAEABACQABADADACIAPALIACACIACACIgBABIgCABIhJAAIgCgBIgBgBIACgCIACgCIAOgLIADgFQACgCAAgEIAAjmQAAgDgCgCQgBgDgCgCIgOgLIgCgCIgCgCIABgBIACgBIBCAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABIADAFIAxCiIABAAIAAiOIgBgFIgEgFIgPgLIgDgCIgBgCIABgBIACgBIBIAAIADABIABABIgCACIgCACIgOALQgCACgBADQgCACAAADIAAD9QAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgEABg");
	this.shape_10.setTransform(23.9,47.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgqCPIgCgBIgBgBIACgCIACgCIAQgLIAEgFIABgGIAAjmIgBgGIgEgEIgQgLIgCgCIgCgCIABgBIACgBIBVAAIACABIABABIgBACIgDACIgQALIgEAEIgBAGIAADmIABAGIAEAFIAQALIADACIABACIgBABIgCABg");
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
	this.shape_18.graphics.f().s("#000033").ss(5,1,1).p("AJqjNQAgAYAoAMIAAFvQgvAMgmAcQgnAegPAjIxXAAQgNgtgvgkQgfgYgmgMIAAl0QAmgMAfgYQAvgjANgtIRbAAQAIA4A3Apg");
	this.shape_18.setTransform(46.7,48.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AowEvQgNgugvgjQgfgYglgMIAAlzQAlgNAfgXQAvgjANguIRbAAQAIA4A2ApQAhAZAoAMIAAFuQgwAMglAcQgnAdgPAkg");
	this.shape_19.setTransform(46.7,48.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000033").ss(5,1,1).p("AKyipIAAFvQgvAMgmAcQgnAegPAjIxXAAQgNgtgvgkQgfgYgmgMIAAl0QAmgMAfgYQAvgjANgtIRbAAQAIA4A3ApQAgAYAoAMg");
	this.shape_20.setTransform(46.7,48.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4695D9").s().p("AowEvQgNgugvgjQgfgYglgMIAAlzQAlgNAfgXQAvgjANguIRbAAQAIA4A2ApQAhAZAoAMIAAFuQgwAMglAcQgnAdgPAkg");
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
	this.shape_82.graphics.f("#FF0000").s().p("AgaAdQgMgKABgRQAAgHADgIQADgIAGgFQAGgHAKgDQAIgDALAAQAOAAAKAGQAEADAAAFQAAACgBADQgDABgDAAQgHAAgDgIIgCgGIgDgCQgDgCgFAAQgGAAgFADQgEACgDAEQgDAEgDAGQgDAKAAAIQAAAIADAHQAEAIAFAFQAIAJAMAAQAKAAAHgGQADgDADgHIACABQgDAKgIAEQgHAEgNAAQgVAAgMgLg");
	this.shape_82.setTransform(26,202.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgCACgDQABgCABgEIAAgMIAAgWIAAgOQAAgDgCgCIgFgEIgHgBIAAgCIAdgDIAAAzIABAIIAAAIQABADACADQAEACAHABIAAACgAgGgyQgDgBABgEQgBgDADgDQADgCADAAQAEAAADACQACADAAADQAAAEgCABQgDADgEAAQgDAAgDgDg");
	this.shape_83.setTransform(18.9,199.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF0000").s().p("AAHAoIAAgDQAGAAADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgOQgBgFgCgDQgDgEgEgBQgFgCgFAAQgFAAgFACQgFACgDADQgDAEgBAFIgBAQIAAAQIAAAHIABAJQABADACACQADACAIABIAAADIguAAIAAgDQAGAAADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDQgCgCgCgBIgHgCIAAgCIAcgCIACAJIAAACQANgLARAAQANAAAIAFQAIAFAAAKIAAAmIABAJQABADADACQADACAHABIAAADg");
	this.shape_84.setTransform(10.7,202.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOAMgLQAQgOAUAAQAVAAAQAOQAMALAAAOQAAAPgMALQgOAOgXAAQgWAAgOgOgAgVgbQgIALAAAQQAAAPAIALQAJAMANAAQAFAAAGgCQAFgDAEgFQAEgFADgIQACgIAAgHQAAgGgCgIQgDgIgFgFQgIgKgMAAQgLAAgKAKg");
	this.shape_85.setTransform(-0.4,202.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF0000").s().p("AgZA9IgIgDIgDgBQgFABgCAEIgCAAIAAgmIADAAQAEAPAGAIQAMAQARAAQALgBAIgGQAIgIAAgKIgCgKQgCgFgDgDQgDgEgFgDIgQgJIgPgGIgJgGQgJgIAAgNQAAgIAEgGQADgHAGgGQAMgIAPgBIAIACIALADIAHACIAEAAQADABABgFIADAAIABAkIgDAAIgFgNQgCgFgDgEQgFgHgGgEQgGgCgIAAQgLAAgHAGIgEAHIgCAHQAAAQAXAKIAOAGQARAGAHAIQAJAJAAAOQAAAHgEAJQgGAKgKAGQgLAFgPABQgNgBgMgEg");
	this.shape_86.setTransform(-11.5,200);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF0000").s().p("AgjA2QgEgCAAgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQACgBADAAIAHABIAEACIADAAQAGAAAEgJIADgHQACgEAAgDQAAgDgDgIIgXgtIgDgHIgEgIIgDgDQgCgCgEgBIAAgCIAoAAIAAACIgGACQgEACAAAEQAAAEAEAJIARAmIAPggQAGgMAAgFQAAgEgDgDQgCgCgFgBIAAgCIAeAAIAAACIgHADQgDABgBACIgKATIgeA/QgEAMgEADQgGAGgIAAQgGAAgDgCg");
	this.shape_87.setTransform(-26.8,204);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF0000").s().p("AgiBCIAAhqQAAgKgDgFQgEgEgJAAIAAgDIAggDIAAA9QAFgFADgCQAJgFAJAAQAQAAAMAJQAPAKAAAUQAAATgOAMQgMAKgTAAQgJAAgHgCIgGgDIgEAAQgFAAgEAHgAgHgKQgFADgCAFQgEAHAAARQAAAKABAIQABAJADADQACAFAEACQAGADAFAAQAMAAAJgLQAIgKAAgRQAAgIgDgIQgCgIgFgEQgFgFgEgCQgFgCgFAAQgFAAgGADg");
	this.shape_88.setTransform(-37.2,200);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAFgFQADgDAFgCIALgDIAOgDIAGgDIAFgFIABgIQAAgKgEgFQgDgDgCgBIgHgBQgEAAgEABQgDACgBAEIgDAFQgCAEgFAAQgEAAgDgCQgCgCAAgDQAAgEAIgEIAKgCIALgBIANABQAHABAFADQAHADACAGIAAAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgKAFIgGAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAFAAAEgDQAEgCACgFQADgGAAgMIAAgOIgLAGg");
	this.shape_89.setTransform(-46.5,202.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF0000").s().p("AhAA/IAAgDIAKgBIAGgEQAEgDABgEIABgOIAAhDIgBgOQgBgEgEgDIgGgEIgKgCIAAgBIBEAAIANAAQAMABAJADQAGAFAEAFQAEAGAAAIQAAAMgJAHIgHAFIgLAEIAQADQAFACAFADQAGAEAEAHQAEAHAAAIQAAAJgEAHQgEAGgHAFQgFAEgJABQgJACgPAAgAgTAkIABALIAEAHQAFAFAMAAQARAAAKgIQAKgHAAgPQAAgIgEgGQgDgHgEgEQgKgFgTgBIgTAAgAgTgEIAIAAIAMgBIAJgBIAGgDQAFgEADgFQADgGAAgHQAAgGgDgGQgCgHgGgDQgEgEgGgBIgPgBIgKAAg");
	this.shape_90.setTransform(-59,200);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF0000").s().p("AgjA2QgEgCAAgDQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQACgBADAAIAHABIAEACIADAAQAGAAAEgJIADgHQACgEAAgDQAAgDgEgIIgVgtIgEgHIgEgIIgDgDQgCgCgEgBIAAgCIAoAAIAAACIgGACQgEACAAAEQAAAEAFAJIAQAmIAPggQAGgMAAgFQAAgEgDgDQgCgCgFgBIAAgCIAdAAIAAACIgGADIgEADIgKATIgeA/QgFAMgDADQgGAGgIAAQgGAAgDgCg");
	this.shape_91.setTransform(158.7,180.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FF0000").s().p("AgiBCIAAhqQAAgKgEgFQgDgEgJAAIAAgDIAggDIAAA9QAFgFADgCQAIgFAKAAQAQAAAMAJQAPAKAAAUQAAATgOAMQgMAKgTAAQgJAAgHgCIgGgDIgEAAQgGAAgDAHgAgHgKQgFADgCAFQgEAHAAARQAAAKABAIQACAJACADQACAFAEACQAGADAFAAQAMAAAIgLQAJgKAAgRQAAgIgDgIQgDgIgEgEQgFgFgEgCQgFgCgFAAQgFAAgGADg");
	this.shape_92.setTransform(148.3,176.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAFgFQAEgDAEgCIALgDIAOgDIAHgDIAEgFIABgIQAAgKgEgFQgCgDgDgBIgHgBQgEAAgEABQgDACgBAEIgDAFQgCAEgFAAQgEAAgDgCQgCgCAAgDQAAgEAIgEIAKgCIALgBIANABQAHABAFADQAHADACAGIAAAJIAAAhIABALQACAHAGAAIAGgBIAEgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgKAFIgGAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAFAAAFgDQAEgCACgFQAEgGgBgMIAAgOIgLAGg");
	this.shape_93.setTransform(139,178.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FF0000").s().p("AgiBCIAAhqQAAgKgEgFQgDgEgJAAIAAgDIAggDIAAA9QAEgFAEgCQAJgFAJAAQARAAALAJQAPAKAAAUQAAATgOAMQgMAKgTAAQgJAAgHgCIgGgDIgEAAQgGAAgEAHgAgGgKQgGADgCAFQgEAHAAARQAAAKABAIQACAJACADQACAFAFACQAEADAGAAQAMAAAIgLQAJgKAAgRQAAgIgDgIQgDgIgEgEQgEgFgFgCQgFgCgFAAQgFAAgFADg");
	this.shape_94.setTransform(128.2,176.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FF0000").s().p("AgMAmIgGgCIgCAAQgEAAgCADIgCAAIAAgaIACAAQADAJAEAGQAIAKALAAQAGAAAFgDQAFgEAAgHQAAgGgEgEIgFgEIgKgGQgNgFgFgEQgGgGAAgHQAAgJAGgGQAIgGAMAAQAEAAAFABIADACIADAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABgBIACAAIABAVIgCAAIgDgHQgBgDgCgCIgIgFQgEgCgDAAQgGAAgEADQgEAEAAAFQAAAFADAEQAEADAIADIAKAFQAKADAFAFQAFAGAAAIQAAAKgHAGQgJAHgMAAQgGAAgHgCg");
	this.shape_95.setTransform(113.8,178.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQADgCABgDQABgCABgEIABgMIAAgWIgBgOQgBgDgBgCIgFgEIgHgBIAAgCIAdgDIAAAzIABAHIAAAJQABADACADQADACAIABIAAACgAgGgyQgCgBAAgEQAAgDACgDQADgCADAAQAEAAACACQAEADAAADQAAAEgEABQgCADgEAAQgDAAgDgDg");
	this.shape_96.setTransform(107.3,176);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF0000").s().p("AAHBAIAAgCIAIgBIAEgDQACgDABgEIABgLIAAgdIgBgLIgEgFQgGgGgJAAQgZAAAAAiIAAAPIABAHIAAAJQABADADACQADACAHABIAAACIguAAIAAgCQAGAAADgCQADgBABgDQACgCAAgFIABgMIAAhHIgBgNQAAgEgCgCIgFgEIgHgBIAAgCIAegDIAAA+IAHgGIAHgEQAHgDAJAAQAMAAAJAEQAFAEADAEQACAEAAAJIAAAbIAAAHIABAJQAAADADACQADACAIABIAAACg");
	this.shape_97.setTransform(99.2,176);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FF0000").s().p("AglAwQgGgFAAgIQAAgGAEgEQAFgEAGAAQAFAAADACQADACAAAFIAAABIgCAAIgEgEIgEgBQgEAAgDADQgDADAAAFQAAAHAIAFQAJAFANAAQANAAAJgFQAIgGAAgIQAAgHgFgDQgGgEgLAAIgPAAQgLAAgGgEQgGgFAAgGQAAgGAGgDIANgEQgJgEgFgGQgFgGAAgHQAAgJAIgHQAFgFAGgCQAGgCAHAAQAJAAAKAGQAFgEAEgBQAEgBAFAAQAFAAADABQAEADAAADQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQgBAAAAAAQgBAAAAAAQgEAAgCgDIgDgDQgCgCgDAAQgEAAgFAEQAJAJAAAJQAAAMgMAHQgGAEgHABIgNABQgPABAAAFQAAAGANAAIAQAAQAKAAAGACQAGABAFADQAJAGAAALQAAAMgLAGQgLAHgUAAQgXAAgJgIgAgRgvQgCADgBAFQgCAFAAAFQAAAKAFAGQAFAGAHAAQAHAAAEgGQAEgGAAgLQAAgMgFgGQgEgFgGAAQgHAAgFAGg");
	this.shape_98.setTransform(84.1,180.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF0000").s().p("AAHAoIAAgDQAGAAADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgOIgDgIQgDgEgEgBQgFgCgFAAQgFAAgFACQgFACgDADQgDAEgBAFIgBAQIAAAQIAAAHIABAJQABADACACQADACAIABIAAADIguAAIAAgDQAGAAADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgCQgCgDgCgBIgHgCIAAgCIAcgCIACAKIAAABQANgLARAAQANAAAIAFQAIAFAAAKIAAAmIABAJQABADADACQADACAHABIAAADg");
	this.shape_99.setTransform(73.8,178.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgCACgDQABgCABgEIAAgMIAAgWIAAgOQgBgDgBgCIgFgEIgHgBIAAgCIAdgDIAAAzIABAHIAAAJQABADACADQADACAIABIAAACgAgGgyQgDgBABgEQgBgDADgDQADgCADAAQAEAAADACQADADAAADQAAAEgDABQgDADgEAAQgDAAgDgDg");
	this.shape_100.setTransform(65.6,176);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgBABgDQABgCABgFIABgMIAAhHIgBgNQgBgEgCgCQgBgDgDgBIgHgBIAAgCIAdgDIAABlIAAAHIABAJQABADADACQACACAIABIAAACg");
	this.shape_101.setTransform(60.3,176);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FF0000").s().p("AAFBAIAAgCIAGgBQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAgCgDgDIgCgCIgZgZIgGAGIAAAHIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgCQACgBACgDQABgCABgFIAAgMIAAhHIAAgNQgBgEgCgCQgCgDgCgBIgHgBIAAgCIAegDIAABaIATgSIAHgIQACgCAAgDQAAgEgFgCIgGgBIAAgCIAnAAIAAACQgIAAgEADQgFACgIAGIgEAEIgKALIAaAbIAEAEIAFAEIAIAHIAGADIAKACIAAACg");
	this.shape_102.setTransform(52.7,176);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF0000").s().p("AgaAdQgLgKAAgRQAAgHACgIQAEgIAFgFQAHgHAJgDQAKgDAJAAQAPAAAJAGQAFADABAFQgBACgCADQgCABgDAAQgHAAgDgIIgDgGIgCgCQgEgCgEAAQgGAAgEADQgFACgDAEQgDAEgDAGQgEAKABAIQAAAIADAHQADAIAGAFQAIAJAMAAQAKAAAHgGQADgDADgHIADABQgFAKgHAEQgIAEgMAAQgVAAgMgLg");
	this.shape_103.setTransform(42.6,178.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgCACgDQABgCABgEIAAgMIAAgWIAAgOQgBgDgBgCIgFgEIgHgBIAAgCIAdgDIAAAzIABAHIAAAJQABADACADQADACAIABIAAACgAgGgyQgDgBABgEQgBgDADgDQADgCADAAQAEAAADACQADADAAADQAAAEgDABQgDADgEAAQgDAAgDgDg");
	this.shape_104.setTransform(35.4,176);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FF0000").s().p("AgMAwQgDgDgCgDIgBgLIAAg2IgLAAIAAgCQAHgBAGgGIAFgHIAFgJIABgCIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QABAKACADQACADADABQAEABAEABQAEgBAEgBIAGgHIACACQgEAFgGADQgGACgJAAQgMAAgFgDg");
	this.shape_105.setTransform(30.5,177.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FF0000").s().p("AgaAdQgMgKAAgRQAAgHADgIQAEgIAFgFQAHgHAJgDQAKgDAJAAQAQAAAIAGQAFADABAFQAAACgDADQgCABgDAAQgHAAgDgIIgDgGIgCgCQgEgCgEAAQgGAAgEADQgFACgDAEQgEAEgBAGQgFAKAAAIQABAIADAHQAEAIAFAFQAIAJAMAAQAKAAAHgGQADgDADgHIADABQgFAKgHAEQgIAEgNAAQgUAAgMgLg");
	this.shape_106.setTransform(17.5,178.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgCACgDQACgCAAgEIAAgMIAAgWIAAgOQAAgDgCgCIgFgEIgHgBIAAgCIAdgDIAAAzIABAHIAAAJQABADACADQAEACAHABIAAACgAgGgyQgDgBABgEQgBgDADgDQADgCADAAQAEAAADACQACADAAADQAAAEgCABQgDADgEAAQgDAAgDgDg");
	this.shape_107.setTransform(10.3,176);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FF0000").s().p("AAHAoIAAgDQAGAAADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgOIgDgIQgDgEgEgBQgFgCgFAAQgFAAgFACQgFACgDADQgDAEgBAFIgBAQIAAAQIAAAHIABAJQABADACACQADACAIABIAAADIguAAIAAgDQAGAAADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgCIgEgEIgHgCIAAgCIAcgCIACAKIAAABQANgLARAAQANAAAIAFQAIAFAAAKIAAAmIABAJQABADADACQADACAHABIAAADg");
	this.shape_108.setTransform(2.2,178.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOAMgLQAQgOAUAAQAVAAAQAOQAMALAAAOQAAAPgMALQgOAOgXAAQgWAAgOgOgAgVgbQgIALAAAQQAAAPAIALQAJAMANAAQAFAAAGgCQAFgDAEgFQAEgFADgIQACgIAAgHQAAgGgCgIQgDgIgFgFQgIgKgMAAQgLAAgKAKg");
	this.shape_109.setTransform(-9,178.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FF0000").s().p("AgZA9IgIgDIgDgBQgFABgCAEIgCAAIAAgmIADAAQAEAPAGAIQAMAQARAAQALgBAIgGQAIgIAAgKIgCgKQgCgFgDgDQgDgEgFgDIgQgJIgPgGIgJgGQgJgIAAgNQAAgIAEgGQADgIAGgFQAMgIAPgBIAIACIALADIAHACIAEAAQADABABgFIADAAIABAkIgDAAIgFgNQgCgFgDgEQgFgHgGgEQgGgCgIAAQgLAAgHAGIgEAHIgCAHQAAAQAXAKIAOAGQARAGAHAIQAJAJAAAOQAAAHgEAJQgGAKgKAGQgLAFgPAAQgNAAgMgEg");
	this.shape_110.setTransform(-20,176.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FF0000").s().p("AAHBAIAAgCIAIgBIAEgDQACgDABgEIABgLIAAgdIgBgLIgEgFQgGgGgJAAQgZAAAAAiIAAAPIABAHIAAAJQABADADACQADACAHABIAAACIguAAIAAgCQAGAAADgCQADgBABgDQACgCAAgFIABgMIAAhHIgBgNQAAgEgCgCQgCgDgDgBIgHgBIAAgCIAegDIAAA+IAHgGIAHgEQAHgDAJAAQAMAAAJAEQAFAEADAEQACAEAAAJIAAAbIAAAHIABAJQAAADADACQADACAIABIAAACg");
	this.shape_111.setTransform(-36.5,176);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FF0000").s().p("AgNAwQgCgDgBgDIgCgLIAAg2IgLAAIAAgCQAHgBAGgGIAFgHIAFgJIABgCIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QABAKACADQACADADABQADABAEABQAFgBAEgBIAGgHIACACQgDAFgHADQgGACgKAAQgLAAgGgDg");
	this.shape_112.setTransform(-44.5,177.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgCACgDQABgCABgEIAAgMIAAgWIAAgOQAAgDgCgCIgFgEIgHgBIAAgCIAdgDIAAAzIABAHIAAAJQABADACADQAEACAHABIAAACgAgGgyQgDgBABgEQgBgDADgDQADgCADAAQAEAAADACQACADAAADQAAAEgCABQgDADgEAAQgDAAgDgDg");
	this.shape_113.setTransform(-50.4,176);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FF0000").s().p("AAWAnIgWg8IgcA8IgDAAIgVg3IgDgGQgDgJgEgCIgHgDIAAgCIApAAIAAACQgMABAAAHQAAAEAFALIAMAhIASgoQACgEAAgDQAAgJgLAAIAAgCIAoAAIAAACIgIACQgDACAAAEQAAADACAGIAOAnIAQgjQADgHAAgDQAAgFgEgDIgHgDIAAgCIAfAAIAAACQgFAAgDADIgFAFIgFAJIgCAEIgZA2g");
	this.shape_114.setTransform(-59.4,178.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOANgLQAPgOAUAAQAWAAAPAOQAMALAAAOQAAAPgMALQgPAOgWAAQgVAAgPgOgAgVgbQgIALAAAQQAAAPAIALQAKAMAMAAQAFAAAFgCQAGgDAEgFQAEgFADgIQACgIAAgHQAAgGgCgIQgDgIgFgFQgJgKgLAAQgMAAgJAKg");
	this.shape_115.setTransform(-77.1,178.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FF0000").s().p("AgNAwQgCgDgBgDIgBgLIAAg2IgMAAIAAgCQAHgBAGgGIAFgHIAFgJIABgCIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QAAAKADADQACADADABQAEABADABQAFgBADgBIAHgHIACACQgDAFgHADQgGACgKAAQgLAAgGgDg");
	this.shape_116.setTransform(-84.9,177.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOANgLQAPgOAUAAQAWAAAPAOQAMALAAAOQAAAPgMALQgPAOgWAAQgVAAgPgOgAgVgbQgIALAAAQQAAAPAIALQAKAMAMAAQAFAAAFgCQAGgDAEgFQAEgFADgIQACgIAAgHQAAgGgCgIQgDgIgFgFQgJgKgLAAQgMAAgJAKg");
	this.shape_117.setTransform(-93.7,178.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FF0000").s().p("AAHBAIAAgCIAIgBIAEgDQACgDABgEIABgLIAAgdIgBgLIgEgFQgGgGgJAAQgZAAAAAiIAAAPIABAHIAAAJQABADADACQADACAHABIAAACIguAAIAAgCQAGAAADgCQADgBABgDQACgCAAgFIABgMIAAhHIgBgNQAAgEgCgCIgFgEIgHgBIAAgCIAegDIAAA+IAHgGIAHgEQAHgDAJAAQAMAAAJAEQAFAEADAEQACAEAAAJIAAAbIAAAHIABAJQAAADADACQADACAIABIAAACg");
	this.shape_118.setTransform(-104.9,176);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FF0000").s().p("AgyA6IAAgCQAGgBADgBQADgBACgEIABgGIABgMIAAg/QgBgKgDgEQgEgFgJAAIAAgCIAfgEIABAIIAAACQAIgFAGgBQAHgCAIAAQAPAAAMAIQAGAFAEAIQAEAIAAAKQAAAKgEAHQgEAJgHAGQgNAIgQAAQgHAAgGgCQgFgCgHgFIAAARIAAAGIABAJQAAADACACQAEADAHABIAAACgAgFgyQgFACgDAEQgDAEgBAHIgBATIABASQABAGADAEQADAEAFACQAFACADAAQAMAAAHgJQAGgGACgHQADgHAAgIQAAgIgDgHQgCgIgFgFQgHgKgMAAQgEAAgFADg");
	this.shape_119.setTransform(-116.3,180.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAGgFQACgDAFgCIALgDIAOgDIAGgDIAFgFIABgIQAAgKgFgFQgBgDgDgBIgHgBQgEAAgEABQgCACgCAEIgDAFQgCAEgFAAQgEAAgCgCQgDgCAAgDQAAgEAHgEIALgCIAMgBIAMABQAHABAFADQAHADACAGIAAAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAFAAAFgDQADgCACgFQADgGAAgMIAAgOIgLAGg");
	this.shape_120.setTransform(-131.2,178.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FF0000").s().p("AgMAmIgGgCIgCAAQgEAAgCADIgCAAIAAgaIACAAQADAJAEAGQAIAKALAAQAGAAAFgDQAFgEAAgHQAAgGgEgEIgFgEIgKgGQgNgFgFgEQgGgGAAgHQAAgJAGgGQAIgGAMAAQAEAAAFABIADACIADAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABgBIACAAIABAVIgCAAIgDgHQgBgDgCgCIgIgFQgEgCgDAAQgGAAgEADQgEAEAAAFQAAAFADAEQAEADAIADIAKAFQAKADAFAFQAFAGAAAIQAAAKgHAGQgJAHgMAAQgGAAgHgCg");
	this.shape_121.setTransform(-145.4,178.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgCACgDQACgCAAgEIAAgMIAAgWIAAgOQgBgDgCgCIgEgEIgHgBIAAgCIAdgDIAAAzIAAAHIABAJQABADADADQADACAHABIAAACgAgGgyQgCgBgBgEQABgDACgDQADgCADAAQAEAAACACQADADAAADQAAAEgDABQgCADgEAAQgEAAgCgDg");
	this.shape_122.setTransform(-151.8,176);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FF0000").s().p("AgMAmIgGgCIgCAAQgEAAgCADIgCAAIAAgaIACAAQADAJAEAGQAIAKALAAQAGAAAFgDQAFgEAAgHQAAgGgEgEIgFgEIgKgGQgNgFgFgEQgGgGAAgHQAAgJAGgGQAIgGAMAAQAEAAAFABIADACIADAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABgBIACAAIABAVIgCAAIgDgHQgBgDgCgCIgIgFQgEgCgDAAQgGAAgEADQgEAEAAAFQAAAFADAEQAEADAIADIAKAFQAKADAFAFQAFAGAAAIQAAAKgHAGQgJAHgMAAQgGAAgHgCg");
	this.shape_123.setTransform(-163.5,178.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgCACgDQACgCAAgEIAAgMIAAgWIAAgOQAAgDgCgCIgFgEIgHgBIAAgCIAdgDIAAAzIAAAHIABAJQABADACADQAEACAHABIAAACgAgGgyQgCgBgBgEQABgDACgDQADgCADAAQAEAAADACQACADAAADQAAAEgCABQgDADgEAAQgEAAgCgDg");
	this.shape_124.setTransform(-170,176);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FF0000").s().p("AAHBAIAAgCIAIgBIAEgDQACgDABgEIABgLIAAgdIgBgLIgEgFQgGgGgJAAQgZAAAAAiIAAAPIABAHIAAAJQABADADACQADACAHABIAAACIguAAIAAgCQAGAAADgCQADgBABgDQACgCAAgFIABgMIAAhHIgBgNQAAgEgCgCQgCgDgDgBIgHgBIAAgCIAegDIAAA+IAHgGIAHgEQAHgDAJAAQAMAAAJAEQAFAEADAEQACAEAAAJIAAAbIAAAHIABAJQAAADADACQADACAIABIAAACg");
	this.shape_125.setTransform(-178.2,176);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FF0000").s().p("AghA/IAAgDIAKgBIAGgEQAEgDABgFIABgNIAAhdIgOAAQgQABgIAEQgIACgFAHQgFAHgDALIgCAAIACgiICNAAIACAiIgDAAQgDgNgGgHQgGgGgLgDQgKgCgXgBIAABdQAAAJABAEQABAFADADIAHAEIAKABIAAADg");
	this.shape_126.setTransform(-191.2,176.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FF0000").s().p("AgaAdQgMgKAAgRQAAgHADgIQAEgIAFgFQAHgHAJgDQAKgDAJAAQAPAAAJAGQAFADABAFQgBACgCADQgCABgDAAQgHAAgDgIIgDgGIgCgCQgEgCgEAAQgGAAgEADQgFACgDAEQgDAEgDAGQgDAKgBAIQABAIADAHQADAIAGAFQAIAJAMAAQAKAAAHgGQADgDADgHIADABQgFAKgHAEQgIAEgNAAQgUAAgMgLg");
	this.shape_127.setTransform(70.9,130.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgDQABgCABgFIAAgMIAAgXIAAgMQgBgDgBgDIgFgDIgHgCIAAgCIAdgDIAAA0IABAGIAAAJQABAEACABQADADAIABIAAACgAgGgxQgDgCABgEQgBgDADgDQADgCADAAQAEAAADACQADADAAADQAAAEgDACQgDACgEAAQgDAAgDgCg");
	this.shape_128.setTransform(63.8,128.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FF0000").s().p("AAHAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIABgMIAAgSIgBgPIgDgHQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDAEgBAEIgBAPIAAARIAAAHIABAJQABADACACQADACAIACIAAABIguAAIAAgBQAGgBADgBQACgCACgDQABgCABgFIAAgMIAAgVIAAgNQgBgEgCgDIgEgDIgHgBIAAgCIAcgEIACAKIAAACQANgMARAAQANAAAIAGQAIAFAAAKIAAAmIABAJQABADADACQADACAHACIAAABg");
	this.shape_129.setTransform(55.6,130.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOAMgLQAQgOAUAAQAVAAAPAOQANALAAAOQAAAPgMALQgOAOgXAAQgWAAgOgOgAgVgbQgIALAAAQQAAAPAIALQAJAMAMAAQAGAAAGgCQAFgDAEgFQAEgFACgIQADgIAAgHQAAgGgDgIQgDgIgEgFQgJgKgLAAQgLAAgKAKg");
	this.shape_130.setTransform(44.5,130.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FF0000").s().p("AgZA9IgIgDIgDAAQgFgBgCAFIgCAAIAAglIADAAQAEAOAGAIQAMAPARAAQALABAIgIQAIgGAAgMIgCgJQgCgFgDgEQgDgDgFgDIgQgIIgPgHIgJgGQgJgJAAgMQAAgHAEgIQADgGAGgFQAMgKAPABIAIAAIALADIAHADIAEABQADAAABgFIADAAIABAkIgDAAIgFgNQgCgFgDgDQgFgIgGgDQgGgEgIAAQgLABgHAGIgEAHIgCAIQAAAPAXAJIAOAGQARAIAHAHQAJAJAAANQAAAIgEAJQgGAKgKAGQgLAGgPgBQgNABgMgFg");
	this.shape_131.setTransform(33.4,128.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FF0000").s().p("AAUA4QgIAEgHACQgGACgIAAQgQAAgLgIQgHgGgEgHQgDgJAAgJQAAgKADgIQAFgIAHgGQAMgJARAAQAGAAAGADQAGACAIAEIAAghQgBgKgEgFQgDgEgJAAIAAgCIAggDIAABpQAAAJAEAFQAEAEAIABIAAACIgeADIgBgJgAgWgEQgFAFgDAHQgCAHAAAJQAAAHACAIQADAIAFAFQAHAKAMAAQAEgBAFgCQAEgDAEgEQADgEABgGQACgHAAgMQAAgNgCgGQgBgFgDgFQgDgDgFgCQgFgCgEAAQgLAAgIAJg");
	this.shape_132.setTransform(17,128.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FF0000").s().p("AAHAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIABgMIAAgSIgBgPIgDgHQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDAEgBAEIgBAPIAAARIAAAHIABAJQABADACACQADACAIACIAAABIguAAIAAgBQAGgBADgBQACgCACgDQABgCABgFIAAgMIAAgVIAAgNQgBgEgCgDIgEgDIgHgBIAAgCIAcgEIACAKIAAACQANgMARAAQANAAAIAGQAIAFAAAKIAAAmIABAJQABADADACQADACAHACIAAABg");
	this.shape_133.setTransform(5.7,130.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAFgFQADgDAEgCIAMgDIAOgDIAHgDIAEgFIABgIQAAgKgEgFQgCgDgDgBIgHgBQgEAAgDABQgEACgCAEIgCAFQgCAEgFAAQgEAAgDgCQgCgCAAgDQAAgEAIgEIAKgCIALgBIANABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAGAAIAGgBIAEgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgKAFIgGAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAFAAAFgDQAEgCACgFQAEgGgBgMIAAgOIgLAGg");
	this.shape_134.setTransform(-4,130.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FF0000").s().p("AgaAdQgMgKAAgRQAAgHAEgIQADgIAGgFQAGgHAJgDQAKgDAKAAQAPAAAIAGQAGADAAAFQAAACgCADQgDABgDAAQgHAAgDgIIgCgGIgDgCQgDgCgFAAQgGAAgFADQgEACgDAEQgDAEgCAGQgFAKAAAIQABAIADAHQADAIAGAFQAIAJAMAAQAKAAAHgGQADgDADgHIADABQgFAKgHAEQgIAEgNAAQgUAAgMgLg");
	this.shape_135.setTransform(-18.9,130.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgDQACgCAAgFIAAgMIAAgXIAAgMQAAgDgCgDIgFgDIgHgCIAAgCIAdgDIAAA0IAAAGIABAJQABAEACABQAEADAHABIAAACgAgGgxQgCgCgBgEQABgDACgDQADgCADAAQAEAAADACQACADAAADQAAAEgCACQgDACgEAAQgEAAgCgCg");
	this.shape_136.setTransform(-26,128.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FF0000").s().p("AAHAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIABgMIAAgSIgBgPIgDgHQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDAEgBAEIgBAPIAAARIAAAHIABAJQABADACACQADACAIACIAAABIguAAIAAgBQAGgBADgBQACgCACgDQABgCABgFIAAgMIAAgVIAAgNQgBgEgCgDIgEgDIgHgBIAAgCIAcgEIACAKIAAACQANgMARAAQANAAAIAGQAIAFAAAKIAAAmIABAJQABADADACQADACAHACIAAABg");
	this.shape_137.setTransform(-34.2,130.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOANgLQAPgOAUAAQAWAAAPAOQAMALAAAOQAAAPgMALQgOAOgXAAQgWAAgOgOgAgVgbQgIALAAAQQAAAPAIALQAJAMANAAQAGAAAFgCQAFgDAEgFQAEgFADgIQACgIAAgHQAAgGgCgIQgEgIgEgFQgIgKgMAAQgLAAgKAKg");
	this.shape_138.setTransform(-45.3,130.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FF0000").s().p("AgZA9IgIgDIgDAAQgFgBgCAFIgCAAIAAglIADAAQAEAOAGAIQAMAPARAAQALABAIgIQAIgGAAgMIgCgJQgCgFgDgEQgDgDgFgDIgQgIIgPgHIgJgGQgJgJAAgMQAAgHAEgIQADgGAGgFQAMgKAPABIAIAAIALADIAHADIAEABQADAAABgFIADAAIABAkIgDAAIgFgNQgCgFgDgDQgFgIgGgDQgGgEgIAAQgLABgHAGIgEAHIgCAIQAAAPAXAJIAOAGQARAIAHAHQAJAJAAANQAAAIgEAJQgGAKgKAGQgLAGgPgBQgNABgMgFg");
	this.shape_139.setTransform(-56.3,128.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FF0000").s().p("AgjA2QgEgCAAgDQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQACgBADAAIAHABIAEACIADAAQAGAAAEgJIADgHQACgEAAgDQAAgDgEgIIgVgtIgEgHIgEgIIgDgDQgCgCgEgBIAAgCIAoAAIAAACIgGACQgEACAAAEQAAAEAFAJIAQAmIAPggQAGgMAAgFQAAgEgDgDQgCgCgFgBIAAgCIAdAAIAAACIgGADIgEADIgKATIgeA/QgFAMgDADQgGAGgIAAQgGAAgDgCg");
	this.shape_140.setTransform(-71.7,132.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FF0000").s().p("AgiBCIAAhqQAAgKgDgFQgEgEgJAAIAAgDIAggDIAAA9QAFgFAEgCQAHgFALAAQAPAAANAJQAOAKAAAUQAAATgOAMQgMAKgTAAQgJAAgHgCIgGgDIgEAAQgFAAgFAHgAgHgKQgEADgDAFQgEAHAAARQAAAKACAIQAAAJACADQADAFAEACQAFADAFAAQANAAAJgLQAIgKAAgRQAAgIgDgIQgDgIgFgEQgDgFgGgCQgEgCgFAAQgGAAgFADg");
	this.shape_141.setTransform(-82,128.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgMAAgGgEQgHgFAAgJQAAgHAGgFQACgDAEgCIANgDIANgDIAGgDIAFgFIABgIQAAgKgFgFQgCgDgCgBIgGgBQgFAAgEABQgCACgDAEIgCAFQgCAEgGAAQgDAAgCgCQgDgCAAgDQAAgEAHgEIAKgCIANgBIAMABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAEAAAGgDQADgCACgFQADgGABgMIAAgOIgMAGg");
	this.shape_142.setTransform(-91.4,130.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FF0000").s().p("AhAA+IAAgBIAKgCIAHgEQADgDABgFIABgNIAAhDIgBgNQgBgFgDgDIgHgEIgKgCIAAgCIBEAAIANAAQANABAHAFQAIADADAHQAEAFAAAHQAAAMgIAJIgIAEIgLAEIAQAEQAGABAEACQAHAFAEAHQADAHAAAIQAAAJgEAGQgEAIgGAEQgHADgIACQgJACgQgBgAgTAjIABALIAEAHQAFAHAMAAQARgBAKgHQAKgJgBgOQAAgHgDgHQgCgHgGgDQgJgHgTABIgTAAgAgTgEIAJAAIALgBIAJgCIAGgDQAGgDADgGQACgFAAgGQAAgHgCgHQgDgGgFgEQgFgCgFgBIgQgBIgKAAg");
	this.shape_143.setTransform(-103.9,128.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FF0000").s().p("AgIAIQgEgDAAgFQAAgDAEgEQAEgDAEAAQAFAAAEADQAEAEAAADQAAAFgEADQgEADgFAAQgEAAgEgDg");
	this.shape_144.setTransform(159,214.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FF0000").s().p("AgjA2QgEgCAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQACgBADAAIAGABIAFACIADAAQAGAAAEgJIADgHQADgEAAgDQgBgDgEgIIgVgtIgEgHIgEgIIgDgDQgCgCgEgBIAAgCIAoAAIAAACIgGACQgEACAAAEQAAAEAFAJIAQAmIAPggQAGgMAAgFQAAgEgDgDQgDgCgEgBIAAgCIAdAAIAAACIgGADIgEADIgKATIgeA/QgFAMgDADQgGAGgIAAQgGAAgDgCg");
	this.shape_145.setTransform(152.1,213.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FF0000").s().p("AgjAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgWIgBgNQAAgEgCgDIgFgDIgHgBIAAgDIAbgDQACAJAAAGQAEgHAEgCQAIgGALAAQAHABAEACQADACAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDAAQgEAAgCgDIgDgDQgEgDgFAAQgIAAgDAHQgEAIAAAPIAAAQIABAHIAAAJQABADACACQADACAHACIAAACg");
	this.shape_146.setTransform(143.9,211.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FF0000").s().p("AglAwQgGgFAAgIQAAgGAEgEQAFgEAGAAQAFAAADACQADACAAAFIAAABIgCAAIgEgEIgEgBQgEAAgDADQgDADAAAFQAAAHAIAFQAJAFANAAQANAAAJgFQAIgGAAgIQAAgHgFgDQgGgEgLAAIgPAAQgLAAgGgEQgGgFAAgGQAAgGAGgDIANgEQgJgEgFgGQgFgGAAgHQAAgJAIgHQAFgFAGgCQAGgCAHAAQAJAAAKAGQAFgEAEgBQAEgBAFAAQAFAAADABQAEADAAADQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgEAAgCgDIgDgDQgCgCgDAAQgEAAgFAEQAJAJAAAJQAAAMgMAHQgGAEgHABIgNABQgPABAAAFQAAAGANAAIAQAAQAKAAAGACQAGABAFADQAJAGAAALQAAAMgLAGQgLAHgUAAQgXAAgJgIgAgRgvQgCADgBAFQgCAFAAAFQAAAKAFAGQAFAGAHAAQAHAAAEgGQAEgGAAgLQAAgMgFgGQgEgFgGAAQgHAAgFAGg");
	this.shape_147.setTransform(135.9,213.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FF0000").s().p("AAHAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgPIgDgHQgDgEgEgBQgFgCgFAAQgFAAgFACQgFACgDADQgDAFgBAEIgBAQIAAAQIAAAHIABAJQABADACACQADACAIACIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDIgEgDIgHgBIAAgDIAcgDIACAKIAAACQANgMARAAQANABAIAFQAIAFAAAKIAAAmIABAJQABADADACQADACAHACIAAACg");
	this.shape_148.setTransform(125.7,211.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgMAAgGgEQgHgFAAgJQAAgHAGgFQADgDADgCIANgDIANgDQAFgBABgCIAFgFIABgIQAAgKgFgFQgCgDgCgBIgGgBQgFAAgDABQgEACgCAEIgCAFQgCAEgGAAQgDAAgCgCQgDgCAAgDQAAgEAHgEIAKgCIANgBIAMABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAGAAIAFgBIAFgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAGAAAFgDQADgCACgFQAEgGAAgMIAAgOIgMAGg");
	this.shape_149.setTransform(116,211.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FF0000").s().p("AgjAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgWIgBgNQAAgEgCgDIgFgDIgHgBIAAgDIAbgDQACAJAAAGQAEgHAEgCQAIgGALAAQAHABAEACQADACAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDAAQgEAAgCgDIgDgDQgEgDgFAAQgIAAgDAHQgEAIAAAPIAAAQIABAHIAAAJQABADACACQADACAHACIAAACg");
	this.shape_150.setTransform(101.9,211.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FF0000").s().p("AgMAmIgGgCIgCAAQgEAAgCADIgCAAIAAgaIACAAQADAJAEAGQAIAKALAAQAGAAAFgDQAFgEAAgHQAAgGgEgEIgFgEIgKgGQgNgFgFgEQgGgGAAgHQAAgJAGgGQAIgGAMAAIAJABIADACIADAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABgBIACAAIABAVIgCAAIgDgHQgBgDgCgCIgIgFQgEgCgDAAQgGAAgEADQgEAEAAAFQAAAFADAEQAEADAIADIAKAFQAKADAFAFQAFAGAAAIQAAAKgHAGQgJAHgMAAQgGAAgHgCg");
	this.shape_151.setTransform(77.9,211.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FF0000").s().p("AAXAcQgOAMgRAAQgNAAgHgGQgJgFABgKIAAgfIAAgHIgBgJQgBgDgDgCQgCgCgJgCIAAgCIAgAAIAAAuIAAAOQABAFACADQACADAFACQAEACAGAAQAEAAAFgCQAGgCACgEQADgDABgFIACgPIAAgRIgBgHIgBgJIgDgFQgDgCgHgCIAAgCIAeAAIAAAxIABANQABAEABACQACADACABIAIACIAAACIgdADQgBgGAAgGg");
	this.shape_152.setTransform(68.5,212);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgBACgEQACgCAAgEIAAgMIAAgWIAAgOQgBgDgCgCIgEgEIgHgBIAAgCIAdgDIAAAzIAAAHIABAJQABAEADACQADACAHABIAAACgAgGgxQgCgDgBgDQABgEACgCQADgCADAAQAEAAADACQACACAAAEQAAADgCADQgDACgEAAQgEAAgCgCg");
	this.shape_153.setTransform(49.3,209.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FF0000").s().p("AgjAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgWIgBgNQAAgEgCgDQgCgCgDgBIgHgBIAAgDIAbgDQACAJAAAGQAEgHAEgCQAIgGALAAQAHABAEACQADACAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDAAQgEAAgCgDIgDgDQgEgDgFAAQgIAAgDAHQgEAIAAAPIAAAQIABAHIAAAJQABADACACQADACAHACIAAACg");
	this.shape_154.setTransform(43.1,211.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FF0000").s().p("AgQAlQgJgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAHACQAHADAGAFQAHAHAAAMIg8AAIgBAGQAAAHADAIQADAIAEAFQAFAFAHADQAGADAIAAQAFAAAFgCQAFgCAEgDQADgDADgHIACABQgCALgKAFQgIAFgPAAQgMAAgKgDgAgNgfQgGAHgCAKIAsAAQAAgJgEgFQgDgEgEgDQgFgCgFAAQgIAAgHAGg");
	this.shape_155.setTransform(34.4,211.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FF0000").s().p("AgMAmIgGgCIgCAAQgEAAgCADIgCAAIAAgaIACAAQADAJAEAGQAIAKALAAQAGAAAFgDQAFgEAAgHQAAgGgEgEIgFgEIgKgGQgNgFgFgEQgGgGAAgHQAAgJAGgGQAIgGAMAAIAJABIADACIADAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABgBIACAAIABAVIgCAAIgDgHQgBgDgCgCIgIgFQgEgCgDAAQgGAAgEADQgEAEAAAFQAAAFADAEQAEADAIADIAKAFQAKADAFAFQAFAGAAAIQAAAKgHAGQgJAHgMAAQgGAAgHgCg");
	this.shape_156.setTransform(25.9,211.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FF0000").s().p("AgMAmIgGgCIgCAAQgEAAgCADIgCAAIAAgaIACAAQADAJAEAGQAIAKALAAQAGAAAFgDQAFgEAAgHQAAgGgEgEIgFgEIgKgGQgNgFgFgEQgGgGAAgHQAAgJAGgGQAIgGAMAAIAJABIADACIADAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABgBIACAAIABAVIgCAAIgDgHQgBgDgCgCIgIgFQgEgCgDAAQgGAAgEADQgEAEAAAFQAAAFADAEQAEADAIADIAKAFQAKADAFAFQAFAGAAAIQAAAKgHAGQgJAHgMAAQgGAAgHgCg");
	this.shape_157.setTransform(12.9,211.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgBACgEQACgCAAgEIAAgMIAAgWIAAgOQAAgDgCgCIgFgEIgHgBIAAgCIAdgDIAAAzIAAAHIABAJQABAEADACQADACAHABIAAACgAgGgxQgCgDgBgDQABgEACgCQADgCADAAQAEAAADACQACACAAAEQAAADgCADQgDACgEAAQgEAAgCgCg");
	this.shape_158.setTransform(6.5,209.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAIACQAHADAFAFQAHAHAAAMIg8AAIgBAGQAAAHACAIQADAIAFAFQAFAFAGADQAGADAJAAQAFAAAFgCQAFgCADgDQAEgDADgHIACABQgDALgIAFQgKAFgPAAQgMAAgIgDgAgNgfQgGAHgCAKIAsAAQgBgJgCgFQgDgEgFgDQgFgCgFAAQgIAAgHAGg");
	this.shape_159.setTransform(-6.4,211.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FF0000").s().p("AAHAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgPIgDgHQgDgEgEgBQgFgCgFAAQgFAAgFACQgFACgDADQgDAFgBAEIgBAQIAAAQIAAAHIABAJQABADACACQADACAIACIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDQgCgCgCgBIgHgBIAAgDIAcgDIACAKIAAACQANgMARAAQANABAIAFQAIAFAAAKIAAAmIABAJQABADADACQADACAHACIAAACg");
	this.shape_160.setTransform(-33.3,211.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FF0000").s().p("AgQAlQgJgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAHACQAHADAGAFQAHAHAAAMIg8AAIgBAGQAAAHACAIQADAIAFAFQAFAFAGADQAHADAIAAQAFAAAFgCQAFgCAEgDQADgDADgHIACABQgDALgIAFQgKAFgOAAQgMAAgKgDgAgNgfQgHAHgBAKIAsAAQAAgJgEgFQgDgEgEgDQgFgCgFAAQgIAAgHAGg");
	this.shape_161.setTransform(-43.8,211.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FF0000").s().p("AAWAnIgWg8IgcA8IgDAAIgVg3IgDgGQgDgJgEgDIgHgCIAAgCIApAAIAAACQgMABAAAHQAAAEAFALIAMAhIASgoQACgEAAgDQAAgJgLAAIAAgCIAoAAIAAACIgIACQgDACAAAEQAAADACAGIAOAnIAQgjQADgHAAgEQAAgEgEgDIgHgDIAAgCIAfAAIAAACQgFAAgDADIgFAFIgFAJIgCAEIgZA2g");
	this.shape_162.setTransform(-66.2,211.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FF0000").s().p("AgjAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgWIgBgNQAAgEgCgDIgFgDIgHgBIAAgDIAbgDQACAJAAAGQAEgHAEgCQAIgGALAAQAHABAEACQADACAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDAAQgEAAgCgDIgDgDQgEgDgFAAQgIAAgDAHQgEAIAAAPIAAAQIABAHIAAAJQABADACACQADACAHACIAAACg");
	this.shape_163.setTransform(-81.9,211.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAFgFQAEgDADgCIAMgDIAOgDQAFgBACgCIAEgFIABgIQAAgKgEgFQgCgDgDgBIgGgBQgFAAgDABQgEACgCAEIgCAFQgCAEgGAAQgDAAgDgCQgCgCAAgDQAAgEAIgEIAJgCIAMgBIANABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAGAAIAGgBIAEgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgKAFIgGAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAGAAAEgDQAEgCACgFQADgGAAgMIAAgOIgLAGg");
	this.shape_164.setTransform(-89.9,211.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FF0000").s().p("AgQAlQgJgEgGgHQgJgLAAgPQAAgTARgMQAMgIAOAAQAJAAAHACQAHADAGAFQAHAHAAAMIg8AAIgBAGQAAAHADAIQADAIAEAFQAFAFAHADQAFADAJAAQAFAAAFgCQAFgCAEgDQADgDADgHIACABQgCALgKAFQgIAFgPAAQgMAAgKgDgAgNgfQgGAHgCAKIAsAAQgBgJgDgFQgDgEgEgDQgFgCgFAAQgIAAgHAGg");
	this.shape_165.setTransform(-99.8,211.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FF0000").s().p("AgyA6IAAgCQAGgBADgBQADgBACgEIABgGIABgMIAAg/QgBgKgDgEQgEgFgJAAIAAgCIAfgEIABAIIAAACQAIgFAGgBQAGgCAJAAQAPAAAMAIQAGAFAEAIQAEAIABAKQgBAKgEAHQgEAJgHAGQgNAIgQAAQgHAAgGgCQgFgCgHgFIAAARIAAAGIABAJQAAADACACQAEADAHABIAAACgAgFgyQgFACgDAEQgDAEgBAHIgBATIABASQABAGADAEQADAEAFACQAFACADAAQAMAAAHgJQAGgGACgHQADgHAAgIQAAgIgDgHQgCgIgFgFQgHgKgMAAQgEAAgFADg");
	this.shape_166.setTransform(-110.4,213.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FF0000").s().p("AgyA6IAAgCQAHgBACgBQADgBABgEIACgGIAAgMIAAg/QAAgKgDgEQgEgFgIAAIAAgCIAegEIABAIIAAACQAIgFAHgBQAFgCAIAAQAQAAALAIQAHAFAFAIQADAIAAAKQAAAKgDAHQgFAJgIAGQgMAIgQAAQgHAAgFgCQgGgCgIgFIAAARIAAAGIABAJQABADADACQACADAJABIAAACgAgFgyQgFACgDAEQgDAEgCAHIgBATIABASQACAGADAEQADAEAFACQAFACAEAAQAKAAAJgJQAFgGADgHQACgHAAgIQAAgIgCgHQgDgIgFgFQgIgKgKAAQgFAAgFADg");
	this.shape_167.setTransform(-121.6,213.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgMAAgGgEQgHgFAAgJQAAgHAFgFQAEgDADgCIANgDIANgDQAFgBACgCIAEgFIABgIQAAgKgFgFQgCgDgCgBIgGgBQgFAAgDABQgDACgDAEIgCAFQgCAEgGAAQgDAAgDgCQgCgCAAgDQAAgEAHgEIAKgCIAMgBIANABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAGAAIAGgBIAEgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAGAAAEgDQAEgCACgFQAEgGAAgMIAAgOIgMAGg");
	this.shape_168.setTransform(-131.2,211.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FF0000").s().p("AgMAmIgGgCIgCAAQgEAAgCADIgCAAIAAgaIACAAQADAJAEAGQAIAKALAAQAGAAAFgDQAFgEAAgHQAAgGgEgEIgFgEIgKgGQgNgFgFgEQgGgGAAgHQAAgJAGgGQAIgGAMAAIAJABIADACIADAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABgBIACAAIABAVIgCAAIgDgHQgBgDgCgCIgIgFQgEgCgDAAQgGAAgEADQgEAEAAAFQAAAFADAEQAEADAIADIAKAFQAKADAFAFQAFAGAAAIQAAAKgHAGQgJAHgMAAQgGAAgHgCg");
	this.shape_169.setTransform(-139.9,211.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgBACgEQACgCAAgEIAAgMIAAgWIAAgOQgBgDgCgCIgEgEIgHgBIAAgCIAdgDIAAAzIAAAHIABAJQABAEADACQADACAHABIAAACgAgGgxQgCgDgBgDQABgEACgCQADgCADAAQAEAAACACQADACAAAEQAAADgDADQgCACgEAAQgEAAgCgCg");
	this.shape_170.setTransform(-146.4,209.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FF0000").s().p("AAUA4QgIAEgHACQgGACgIAAQgQAAgLgIQgHgGgEgHQgDgIAAgKQAAgKADgIQAFgIAHgGQAMgIARgBQAGAAAGACQAGADAIAFIAAgiQgBgKgEgEQgDgFgJAAIAAgCIAggDIAABoQAAALAEAEQAEAFAIgBIAAADIgeADIgBgJgAgWgEQgFAFgDAHQgCAIAAAHQAAAIACAIQADAHAFAGQAHAKAMAAQAEAAAFgDQAEgCAEgEQADgFABgHQACgGAAgMQAAgNgCgGQgBgGgDgEQgDgDgFgCQgFgCgEAAQgLAAgIAJg");
	this.shape_171.setTransform(-154.4,209.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FF0000").s().p("AgMAwQgDgDgCgDIgBgLIAAg3IgLAAIAAgBQAHgCAGgFIAFgHIAFgJIABgDIADAAIAAAYIAaAAIAAADIgaAAIAAA1QABAJACAEQACADADABQAEABAEABQAEgBAEgBIAGgHIACACQgEAFgGADQgGACgJAAQgMAAgFgDg");
	this.shape_172.setTransform(-167.9,210.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgMAAgGgEQgHgFAAgJQAAgHAFgFQAEgDADgCIANgDIANgDQAFgBACgCIAEgFIABgIQAAgKgFgFQgCgDgCgBIgGgBQgFAAgDABQgDACgDAEIgCAFQgCAEgGAAQgDAAgDgCQgCgCAAgDQAAgEAHgEIAKgCIAMgBIANABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAGAAIAGgBIAEgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAGAAAEgDQAEgCACgFQAEgGAAgMIAAgOIgMAGg");
	this.shape_173.setTransform(-175.3,211.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FF0000").s().p("AgNAwQgCgDgBgDIgCgLIAAg3IgLAAIAAgBQAHgCAGgFIAFgHIAFgJIABgDIADAAIAAAYIAaAAIAAADIgaAAIAAA1QABAJACAEQACADADABQADABAEABQAFgBAEgBIAGgHIACACQgDAFgHADQgGACgKAAQgLAAgGgDg");
	this.shape_174.setTransform(-193.9,210.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FF0000").s().p("AgMAmIgGgCIgCAAQgEAAgCADIgCAAIAAgaIACAAQADAJAEAGQAIAKALAAQAGAAAFgDQAFgEAAgHQAAgGgEgEIgFgEIgKgGQgNgFgFgEQgGgGAAgHQAAgJAGgGQAIgGAMAAIAJABIADACIADAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABgBIACAAIABAVIgCAAIgDgHQgBgDgCgCIgIgFQgEgCgDAAQgGAAgEADQgEAEAAAFQAAAFADAEQAEADAIADIAKAFQAKADAFAFQAFAGAAAIQAAAKgHAGQgJAHgMAAQgGAAgHgCg");
	this.shape_175.setTransform(273.7,188);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgBABgDQACgCAAgFIABgMIAAhHIgBgNQgBgEgCgCQgCgDgCgBIgHgBIAAgCIAdgDIAABlIAAAHIABAJQABADADACQADACAHABIAAACg");
	this.shape_176.setTransform(267.2,185.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgBABgDQABgCABgFIABgMIAAgXIgBgMQAAgEgDgCQgBgDgDAAIgHgCIAAgCIAdgDIAAA0IABAHIAAAJQABADADABQACADAIABIAAACgAgGgyQgCgCAAgDQAAgEACgCQADgCADAAQAEAAACACQAEACAAAEQAAADgEACQgCADgEAAQgDAAgDgDg");
	this.shape_177.setTransform(262,185.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FF0000").s().p("AgyA6IAAgCQAHgBACgBQADgBABgEIACgGIAAgMIAAg/QABgKgEgEQgEgFgIAAIAAgCIAegEIABAIIAAACQAIgFAHgBQAGgCAHAAQAQAAALAIQAHAFAFAIQADAIABAKQgBAKgDAHQgFAJgIAGQgMAIgQAAQgHAAgFgCQgGgCgIgFIAAARIAAAGIABAJQABADADACQACADAJABIAAACgAgFgyQgFACgDAEQgDAEgCAHIgBATIABASQACAGADAEQADAEAFACQAEACAFAAQAKAAAJgJQAFgGADgHQACgHAAgIQAAgIgCgHQgDgIgEgFQgJgKgKAAQgFAAgFADg");
	this.shape_178.setTransform(253.6,189.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FF0000").s().p("AAXAcQgOAMgRAAQgNAAgHgGQgJgFABgKIAAgfIAAgHIgBgJQgBgDgDgCQgCgCgJgCIAAgCIAgAAIAAAuIAAAOQABAFACADQACADAFACQAEACAGAAQAEAAAFgCQAGgCACgEQADgDABgFIACgPIAAgRIgBgHIgBgJIgDgFQgDgCgHgCIAAgCIAeAAIAAAxIABANQABAEABACQACADACABIAIACIAAACIgdADQgBgGAAgGg");
	this.shape_179.setTransform(242.6,188.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FF0000").s().p("AgyA6IAAgCQAGgBADgBQADgBACgEIABgGIAAgMIAAg/QAAgKgDgEQgEgFgJAAIAAgCIAfgEIABAIIAAACQAIgFAGgBQAHgCAHAAQAQAAALAIQAIAFADAIQAFAIAAAKQAAAKgFAHQgEAJgIAGQgLAIgRAAQgHAAgGgCQgFgCgHgFIAAARIAAAGIABAJQAAADACACQAEADAIABIAAACgAgFgyQgFACgDAEQgDAEgBAHIgBATIABASQABAGADAEQADAEAFACQAEACAEAAQALAAAJgJQAFgGACgHQADgHAAgIQAAgIgDgHQgCgIgEgFQgJgKgKAAQgFAAgFADg");
	this.shape_180.setTransform(231.4,189.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAOAAQAJAAAIACQAGADAFAFQAIAHAAAMIg9AAIAAAGQAAAHACAIQAEAIAEAFQAFAFAGADQAHADAHAAQAGAAAFgCQAFgCADgDQAEgDADgHIACABQgDALgIAFQgKAFgPAAQgMAAgIgDgAgNgfQgHAHgBAKIAsAAQAAgJgDgFQgDgEgFgDQgFgCgFAAQgIAAgHAGg");
	this.shape_181.setTransform(215.7,188);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FF0000").s().p("AgNAvQgCgCgBgDIgBgLIAAg3IgMAAIAAgBQAHgCAGgFIAFgHIAFgIIAAgEIAEAAIAAAYIAaAAIAAADIgaAAIAAA1QAAAKADAEQACACADABQAEABADAAQAFAAADgBIAHgGIABABQgCAGgHACQgGACgKABQgLAAgGgFg");
	this.shape_182.setTransform(208.6,186.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgBABgDQABgCABgFIABgMIAAgXIgBgMQgBgEgBgCIgFgDIgHgCIAAgCIAdgDIAAA0IABAHIAAAJQABADACABQADADAIABIAAACgAgGgyQgCgCAAgDQAAgEACgCQADgCADAAQAEAAACACQAEACAAAEQAAADgEACQgCADgEAAQgDAAgDgDg");
	this.shape_183.setTransform(202.7,185.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FF0000").s().p("AAWAnIgWg8IgcA8IgDAAIgVg2IgDgHQgDgJgEgCIgHgDIAAgCIApAAIAAACQgMAAAAAIQAAAEAFAMIAMAhIASgpQACgFAAgDQAAgHgLgBIAAgCIAoAAIAAACIgIACQgDACAAAEQAAADACAGIAOAoIAQgjQADgIAAgEQAAgFgEgCIgHgDIAAgCIAfAAIAAACQgFAAgDADIgFAEIgFAKIgCAFIgZA1g");
	this.shape_184.setTransform(182.5,188);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FF0000").s().p("AgMAmIgGgCIgCAAQgEAAgCADIgCAAIAAgaIACAAQADAJAEAGQAIAKALAAQAGAAAFgDQAFgEAAgHQAAgGgEgEIgFgEIgKgGQgNgFgFgEQgGgGAAgHQAAgJAGgGQAIgGAMAAIAJABIADACIADAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABgBIACAAIABAVIgCAAIgDgHQgBgDgCgCIgIgFQgEgCgDAAQgGAAgEADQgEAEAAAFQAAAFADAEQAEADAIADIAKAFQAKADAFAFQAFAGAAAIQAAAKgHAGQgJAHgMAAQgGAAgHgCg");
	this.shape_185.setTransform(166.6,188);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAGgFQACgDAFgCIALgDIAOgDIAGgDIAFgFIABgIQAAgKgEgFQgDgDgCgBIgHgBQgEAAgEABQgDACgBAEIgDAFQgCAEgFAAQgEAAgCgCQgDgCAAgDQAAgEAIgEIAKgCIALgBIANABQAHABAFADQAHADACAGIAAAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgKAFIgGAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAFAAAEgDQAEgCACgFQADgGAAgMIAAgOIgLAGg");
	this.shape_186.setTransform(158.7,188);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FF0000").s().p("AAHBAIAAgCIAIgBIAEgDQACgDABgEIABgLIAAgdIgBgLIgEgFQgGgGgJAAQgZAAAAAiIAAAPIABAHIAAAJQABADADACQADACAHABIAAACIguAAIAAgCQAGAAADgCQADgBABgDQACgCAAgFIABgMIAAhHIgBgNQAAgEgCgCQgCgDgDgBIgHgBIAAgCIAegDIAAA+IAHgGIAHgEQAHgDAJAAQAMAAAJAEQAFAEADAEQACAEAAAJIAAAbIAAAHIABAJQAAADADACQADACAIABIAAACg");
	this.shape_187.setTransform(148,185.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FF0000").s().p("AgQAlQgJgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAHACQAHADAGAFQAHAHAAAMIg8AAIgBAGQAAAHADAIQACAIAFAFQAFAFAGADQAHADAIAAQAFAAAFgCQAFgCAEgDQADgDADgHIACABQgDALgIAFQgKAFgOAAQgMAAgKgDgAgNgfQgHAHgBAKIAsAAQAAgJgEgFQgDgEgEgDQgFgCgFAAQgIAAgHAGg");
	this.shape_188.setTransform(132.1,188);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FF0000").s().p("AAPA+IAAgCIAKgBIAHgEQADgDABgEIABgOIAAgiIhJAAIAAAiQAAAJABAFQABAEADADIAHAEIAKABIAAACIhDAAIAAgCIAKgBIAGgEQAEgDABgEIABgOIAAhCIgBgPQgBgEgEgDIgGgEIgKgBIAAgDIBDAAIAAADIgKABIgHAEQgDADgBAEQgBAFAAAKIAAAdIBJAAIAAgdIgBgPQgBgEgDgDIgHgEIgKgBIAAgDIBDAAIAAADIgKABIgGAEQgEADgBAEIgBAPIAABCIABAOQABAEAEADIAGAEIAKABIAAACg");
	this.shape_189.setTransform(118.6,185.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FF0000").s().p("AgIAIQgEgEAAgEQAAgEAEgDQAEgDAEAAQAFAAAEADQAEADAAAEQAAAEgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_190.setTransform(101.9,191);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FF0000").s().p("AgMAmIgGgCIgCAAQgEAAgCADIgCAAIAAgaIACAAQADAJAEAGQAIAKALAAQAGAAAFgDQAFgEAAgHQAAgGgEgEIgFgEIgKgGQgNgFgFgEQgGgGAAgHQAAgJAGgGQAIgGAMAAIAJABIADACIADAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABgBIACAAIABAVIgCAAIgDgHQgBgDgCgCIgIgFQgEgCgDAAQgGAAgEADQgEAEAAAFQAAAFADAEQAEADAIADIAKAFQAKADAFAFQAFAGAAAIQAAAKgHAGQgJAHgMAAQgGAAgHgCg");
	this.shape_191.setTransform(95.6,188);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FF0000").s().p("AgjAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgVIgBgNQAAgEgCgCQgCgDgDgBIgHgBIAAgCIAbgEQACAJAAAFQAEgFAEgDQAIgFALgBQAHAAAEADQADACAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDAAQgEAAgCgCIgDgDQgEgDgFAAQgIgBgDAJQgEAHAAAPIAAAQIABAHIAAAJQABADACACQADACAHABIAAACg");
	this.shape_192.setTransform(88.1,188);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FF0000").s().p("AgQAlQgJgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAHACQAHADAGAFQAHAHAAAMIg8AAIgBAGQAAAHADAIQADAIAEAFQAFAFAGADQAHADAIAAQAFAAAFgCQAFgCAEgDQADgDADgHIACABQgCALgKAFQgIAFgPAAQgMAAgKgDgAgNgfQgGAHgCAKIAsAAQAAgJgEgFQgDgEgEgDQgFgCgFAAQgIAAgHAGg");
	this.shape_193.setTransform(79.4,188);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FF0000").s().p("AgyA6IAAgCQAGgBADgBQADgBACgEIABgGIABgMIAAg/QgBgKgDgEQgEgFgJAAIAAgCIAfgEIABAIIAAACQAIgFAGgBQAGgCAJAAQAPAAALAIQAIAFADAIQAFAIAAAKQAAAKgFAHQgEAJgHAGQgNAIgQAAQgHAAgGgCQgFgCgHgFIAAARIAAAGIABAJQAAADACACQADADAIABIAAACgAgFgyQgFACgDAEQgDAEgBAHIgBATIABASQABAGADAEQADAEAFACQAEACAEAAQAMAAAHgJQAGgGACgHQADgHAAgIQAAgIgDgHQgCgIgEgFQgJgKgLAAQgEAAgFADg");
	this.shape_194.setTransform(68.8,189.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FF0000").s().p("AgyA6IAAgCQAHgBACgBQADgBABgEIACgGIABgMIAAg/QAAgKgEgEQgEgFgIAAIAAgCIAegEIABAIIAAACQAIgFAHgBQAFgCAJAAQAPAAAMAIQAGAFAFAIQADAIAAAKQAAAKgDAHQgFAJgIAGQgLAIgRAAQgHAAgFgCQgGgCgIgFIAAARIAAAGIABAJQABADADACQACADAIABIAAACgAgFgyQgFACgDAEQgDAEgCAHIgBATIABASQACAGADAEQADAEAFACQAFACAEAAQAKAAAIgJQAGgGADgHQACgHAAgIQAAgIgCgHQgDgIgFgFQgHgKgMAAQgEAAgFADg");
	this.shape_195.setTransform(57.6,189.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgBABgDQABgCABgFIABgMIAAgXIgBgMQgBgEgCgCQgBgDgDAAIgHgCIAAgCIAdgDIAAA0IAAAHIABAJQABADADABQACADAIABIAAACgAgGgyQgDgCAAgDQAAgEADgCQADgCADAAQAEAAACACQADACABAEQgBADgDACQgCADgEAAQgEAAgCgDg");
	this.shape_196.setTransform(49.5,185.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgBABgDQABgCABgFIABgMIAAhHIgBgNQgBgEgBgCIgFgEIgHgBIAAgCIAdgDIAABlIABAHIAAAJQABADACACQADACAIABIAAACg");
	this.shape_197.setTransform(44.3,185.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FF0000").s().p("AgMAmIgGgCIgCAAQgEAAgCADIgCAAIAAgaIACAAQADAJAEAGQAIAKALAAQAGAAAFgDQAFgEAAgHQAAgGgEgEIgFgEIgKgGQgNgFgFgEQgGgGAAgHQAAgJAGgGQAIgGAMAAIAJABIADACIADAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABgBIACAAIABAVIgCAAIgDgHQgBgDgCgCIgIgFQgEgCgDAAQgGAAgEADQgEAEAAAFQAAAFADAEQAEADAIADIAKAFQAKADAFAFQAFAGAAAIQAAAKgHAGQgJAHgMAAQgGAAgHgCg");
	this.shape_198.setTransform(38,188);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FF0000").s().p("AgjBMIBAiYIAHAAIhACYg");
	this.shape_199.setTransform(30.7,186.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FF0000").s().p("AgMAmIgGgCIgCAAQgEAAgCADIgCAAIAAgaIACAAQADAJAEAGQAIAKALAAQAGAAAFgDQAFgEAAgHQAAgGgEgEIgFgEIgKgGQgNgFgFgEQgGgGAAgHQAAgJAGgGQAIgGAMAAIAJABIADACIADAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABgBIACAAIABAVIgCAAIgDgHQgBgDgCgCIgIgFQgEgCgDAAQgGAAgEADQgEAEAAAFQAAAFADAEQAEADAIADIAKAFQAKADAFAFQAFAGAAAIQAAAKgHAGQgJAHgMAAQgGAAgHgCg");
	this.shape_200.setTransform(24.1,188);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FF0000").s().p("AgjAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgVIgBgNQAAgEgCgCQgCgDgDgBIgHgBIAAgCIAbgEQACAJAAAFQAEgFAEgDQAIgFALgBQAHAAAEADQADACAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDAAQgEAAgCgCIgDgDQgEgDgFAAQgIgBgDAJQgEAHAAAPIAAAQIABAHIAAAJQABADACACQADACAHABIAAACg");
	this.shape_201.setTransform(16.7,188);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FF0000").s().p("AgQAlQgJgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAHACQAHADAGAFQAHAHAAAMIg8AAIgBAGQAAAHACAIQADAIAFAFQAFAFAGADQAHADAIAAQAFAAAFgCQAFgCAEgDQADgDADgHIACABQgDALgIAFQgKAFgOAAQgMAAgKgDgAgNgfQgGAHgCAKIAsAAQAAgJgEgFQgDgEgEgDQgFgCgFAAQgIAAgHAGg");
	this.shape_202.setTransform(7.9,188);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FF0000").s().p("AAFBAIAAgCIAGgBQABAAAAgBQABAAAAAAQAAgBABgBQAAAAAAgBQAAgCgDgDIgCgCIgZgZIgGAGIAAAHIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgCQACgBACgDQABgCABgFIAAgMIAAhHIAAgNQgBgEgCgCQgCgDgCgBIgHgBIAAgCIAegDIAABaIATgSIAHgIQACgCAAgDQAAgEgFgCIgGgBIAAgCIAnAAIAAACQgIAAgEADQgFACgIAGIgEAEIgKALIAaAbIAEAEIAFAEIAIAHIAGADIAKACIAAACg");
	this.shape_203.setTransform(-1.9,185.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FF0000").s().p("AgQAlQgJgEgGgHQgJgLAAgPQAAgTARgMQAMgIAOAAQAJAAAHACQAIADAEAFQAIAHAAAMIg9AAIAAAGQAAAHADAIQADAIAEAFQAFAFAHADQAFADAIAAQAGAAAFgCQAFgCAEgDQADgDADgHIACABQgCALgKAFQgIAFgPAAQgMAAgKgDgAgNgfQgHAHgBAKIAsAAQgBgJgDgFQgDgEgEgDQgFgCgFAAQgIAAgHAGg");
	this.shape_204.setTransform(-21.6,188);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FF0000").s().p("AAHAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgSIgBgPIgDgHQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDAEgBAEIgBAPIAAARIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgNQgBgEgCgCQgCgDgCgBIgHgBIAAgCIAcgEIACALIAAABQANgMARAAQANAAAIAGQAIAFAAAKIAAAmIABAJQABADADACQADACAHABIAAACg");
	this.shape_205.setTransform(-31.9,188);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FF0000").s().p("AgMAmIgGgCIgCAAQgEAAgCADIgCAAIAAgaIACAAQADAJAEAGQAIAKALAAQAGAAAFgDQAFgEAAgHQAAgGgEgEIgFgEIgKgGQgNgFgFgEQgGgGAAgHQAAgJAGgGQAIgGAMAAIAJABIADACIADAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABgBIACAAIABAVIgCAAIgDgHQgBgDgCgCIgIgFQgEgCgDAAQgGAAgEADQgEAEAAAFQAAAFADAEQAEADAIADIAKAFQAKADAFAFQAFAGAAAIQAAAKgHAGQgJAHgMAAQgGAAgHgCg");
	this.shape_206.setTransform(-41.3,188);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FF0000").s().p("AgkBAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAguIgPAAIAAgDIAPAAIAAgXQAAgHACgFQADgFAGgEQAFgEAHgCQAIgBAJAAQAIgBAFADQAFADAAAEQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQgCACgDAAIgFgBIgEgEQgDgFgCgBQgCgBgDgBIgIACIgEAEQgCACgBAFIgBAMIAAAYIAUAAIAAADIgUAAIAAAvIAAAHIABAJQABADACACQACACAIABIAAACg");
	this.shape_207.setTransform(-52.5,185.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOAMgLQAQgOAUAAQAVAAAPAOQANALAAAOQAAAPgMALQgPAOgWAAQgVAAgPgOgAgUgbQgJALAAAQQAAAPAIALQAKAMALAAQAHAAAEgCQAGgDAEgFQAEgFACgIQADgIAAgHQAAgGgDgIQgDgIgEgFQgJgKgLAAQgLAAgJAKg");
	this.shape_208.setTransform(-62,188);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FF0000").s().p("AgjAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgVIgBgNQAAgEgCgCQgCgDgDgBIgHgBIAAgCIAbgEQACAJAAAFQAEgFAEgDQAIgFALgBQAHAAAEADQADACAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDAAQgEAAgCgCIgDgDQgEgDgFAAQgIgBgDAJQgEAHAAAPIAAAQIABAHIAAAJQABADACACQADACAHABIAAACg");
	this.shape_209.setTransform(-76.6,188);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgBABgDQABgCABgFIABgMIAAgXIgBgMQgBgEgBgCIgFgDIgHgCIAAgCIAdgDIAAA0IABAHIAAAJQABADACABQADADAIABIAAACgAgGgyQgCgCAAgDQAAgEACgCQADgCADAAQAEAAACACQAEACAAAEQAAADgEACQgCADgEAAQgDAAgDgDg");
	this.shape_210.setTransform(-83,185.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FF0000").s().p("AAUA4QgIAEgGACQgGACgJAAQgPAAgMgIQgHgFgDgJQgFgIAAgJQAAgKAFgIQAEgIAHgGQANgJAPAAQAIABAFACQAGACAHAEIAAghQAAgKgDgFQgEgEgJAAIAAgCIAggEIAABqQABAKADAEQAEAEAJABIAAABIgfAFIgBgKgAgWgEQgFAFgCAHQgEAHAAAJQAAAHADAIQADAIAEAFQAIAJAMAAQAEABAFgDQAFgDADgEQADgEABgGQACgHgBgMQABgNgCgGQgBgFgDgEQgDgEgFgCQgEgCgEAAQgMAAgIAJg");
	this.shape_211.setTransform(-131.3,185.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FF0000").s().p("AAHAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgSIgBgPIgDgHQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDAEgBAEIgBAPIAAARIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgNQgBgEgCgCQgCgDgCgBIgHgBIAAgCIAcgEIACALIAAABQANgMARAAQANAAAIAGQAIAFAAAKIAAAmIABAJQABADADACQADACAHABIAAACg");
	this.shape_212.setTransform(-142.7,188);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAFgFQAEgDADgCIAMgDIAOgDIAHgDIAEgFIABgIQAAgKgEgFQgCgDgDgBIgGgBQgFAAgDABQgEACgCAEIgCAFQgCAEgGAAQgDAAgDgCQgCgCAAgDQAAgEAIgEIAJgCIAMgBIANABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAGAAIAGgBIAEgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgKAFIgGAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAGAAAEgDQAEgCACgFQADgGAAgMIAAgOIgLAGg");
	this.shape_213.setTransform(-152.4,188);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FF0000").s().p("AgPAWQAIgCADgDQAEgDACgEQAFgHAAgFIgFABQgEAAgEgDQgEgDAAgFQAAgEAEgEQAEgDAEAAQAGAAAEAEQADAFAAAHQAAAHgDAGQgEAHgGAFQgHAEgJACg");
	this.shape_214.setTransform(-165.4,192.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FF0000").s().p("AgMAmIgGgCIgCAAQgEAAgCADIgCAAIAAgaIACAAQADAJAEAGQAIAKALAAQAGAAAFgDQAFgEAAgHQAAgGgEgEIgFgEIgKgGQgNgFgFgEQgGgGAAgHQAAgJAGgGQAIgGAMAAIAJABIADACIADAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABgBIACAAIABAVIgCAAIgDgHQgBgDgCgCIgIgFQgEgCgDAAQgGAAgEADQgEAEAAAFQAAAFADAEQAEADAIADIAKAFQAKADAFAFQAFAGAAAIQAAAKgHAGQgJAHgMAAQgGAAgHgCg");
	this.shape_215.setTransform(-171.6,188);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FF0000").s().p("AgQAlQgJgEgGgHQgJgLAAgPQAAgTARgMQAMgIAOAAQAJAAAHACQAHADAGAFQAHAHAAAMIg8AAIgBAGQAAAHADAIQADAIAEAFQAFAFAHADQAFADAJAAQAFAAAFgCQAFgCAEgDQADgDADgHIACABQgCALgKAFQgIAFgPAAQgMAAgKgDgAgNgfQgGAHgCAKIAsAAQgBgJgDgFQgDgEgEgDQgFgCgFAAQgIAAgHAGg");
	this.shape_216.setTransform(-180.4,188);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FF0000").s().p("AgyA6IAAgCQAGgBADgBQADgBACgEIABgGIABgMIAAg/QgBgKgDgEQgEgFgJAAIAAgCIAfgEIABAIIAAACQAIgFAGgBQAGgCAJAAQAPAAAMAIQAGAFAEAIQAEAIABAKQgBAKgEAHQgEAJgHAGQgNAIgQAAQgHAAgGgCQgFgCgHgFIAAARIAAAGIABAJQAAADACACQAEADAHABIAAACgAgFgyQgFACgDAEQgDAEgBAHIgBATIABASQABAGADAEQADAEAFACQAFACADAAQAMAAAHgJQAGgGACgHQADgHAAgIQAAgIgDgHQgCgIgFgFQgHgKgMAAQgEAAgFADg");
	this.shape_217.setTransform(-190.9,189.6);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgBABgDQACgCAAgFIABgMIAAgXIgBgMQgBgEgCgCQgCgDgCAAIgHgCIAAgCIAdgDIAAA0IAAAHIABAJQABADADABQADADAHABIAAACgAgGgyQgDgCAAgDQAAgEADgCQADgCADAAQAEAAACACQADACAAAEQAAADgDACQgCADgEAAQgDAAgDgDg");
	this.shape_218.setTransform(-199,185.5);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FF0000").s().p("AgjAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgVIgBgNQAAgEgCgCQgCgDgDgBIgHgBIAAgCIAbgEQACAJAAAFQAEgFAEgDQAIgFALgBQAHAAAEADQADACAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDAAQgEAAgCgCIgDgDQgEgDgFAAQgIgBgDAJQgEAHAAAPIAAAQIABAHIAAAJQABADACACQADACAHABIAAACg");
	this.shape_219.setTransform(-205.2,188);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FF0000").s().p("AgNAvQgCgCgBgDIgBgLIAAg3IgMAAIAAgBQAHgCAGgFIAFgHIAFgIIABgEIADAAIAAAYIAaAAIAAADIgaAAIAAA1QAAAKADAEQACACADABQAEABADAAQAFAAADgBIAHgGIACABQgDAGgHACQgGACgKABQgLAAgGgFg");
	this.shape_220.setTransform(-211.4,186.9);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FF0000").s().p("AgMAmIgGgCIgCAAQgEAAgCADIgCAAIAAgaIACAAQADAJAEAGQAIAKALAAQAGAAAFgDQAFgEAAgHQAAgGgEgEIgFgEIgKgGQgNgFgFgEQgGgGAAgHQAAgJAGgGQAIgGAMAAIAJABIADACIADAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABgBIACAAIABAVIgCAAIgDgHQgBgDgCgCIgIgFQgEgCgDAAQgGAAgEADQgEAEAAAFQAAAFADAEQAEADAIADIAKAFQAKADAFAFQAFAGAAAIQAAAKgHAGQgJAHgMAAQgGAAgHgCg");
	this.shape_221.setTransform(-218.3,188);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FF0000").s().p("AgQAlQgJgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAHACQAHADAGAFQAHAHAAAMIg8AAIgBAGQAAAHADAIQADAIAEAFQAFAFAGADQAHADAIAAQAFAAAFgCQAFgCAEgDQADgDADgHIACABQgCALgKAFQgIAFgPAAQgMAAgKgDgAgNgfQgGAHgCAKIAsAAQAAgJgEgFQgDgEgEgDQgFgCgFAAQgIAAgHAGg");
	this.shape_222.setTransform(-232.5,188);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FF0000").s().p("AgMAvQgDgCgCgDIgBgLIAAg3IgLAAIAAgBQAHgCAGgFIAFgHIAEgIIACgEIADAAIAAAYIAaAAIAAADIgaAAIAAA1QABAKACAEQACACADABQADABAFAAQAEAAAEgBIAGgGIACABQgEAGgGACQgGACgJABQgMAAgFgFg");
	this.shape_223.setTransform(-239.6,186.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgDQACgCAAgFIAAgMIAAgXIAAgMQgBgEgCgCQgCgDgCAAIgHgCIAAgCIAdgDIAAA0IAAAHIABAJQABADADABQADADAHABIAAACgAgGgyQgCgCgBgDQABgEACgCQADgCADAAQAEAAACACQADACAAAEQAAADgDACQgCADgEAAQgEAAgCgDg");
	this.shape_224.setTransform(-245.4,185.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FF0000").s().p("AAHBAIAAgCIAIgBIAEgDQACgDABgEIABgLIAAgdIgBgLIgEgFQgGgGgJAAQgZAAAAAiIAAAPIABAHIAAAJQABADADACQADACAHABIAAACIguAAIAAgCQAGAAADgCQADgBABgDQACgCAAgFIABgMIAAhHIgBgNQAAgEgCgCQgCgDgDgBIgHgBIAAgCIAegDIAAA+IAHgGIAHgEQAHgDAJAAQAMAAAJAEQAFAEADAEQACAEAAAJIAAAbIAAAHIABAJQAAADADACQADACAIABIAAACg");
	this.shape_225.setTransform(-253.6,185.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FF0000").s().p("AAWAnIgWg8IgcA8IgDAAIgVg2IgDgHQgDgJgEgCIgHgDIAAgCIApAAIAAACQgMAAAAAIQAAAEAFAMIAMAhIASgpQACgFAAgDQAAgHgLgBIAAgCIAoAAIAAACIgIACQgDACAAAEQAAADACAGIAOAoIAQgjQADgIAAgEQAAgFgEgCIgHgDIAAgCIAfAAIAAACQgFAAgDADIgFAEIgFAKIgCAFIgZA1g");
	this.shape_226.setTransform(-265.7,188);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FF0000").s().p("AAHBAIAAgCIAIgBIAEgDQACgDABgEIABgLIAAgdIgBgLIgEgFQgGgGgJAAQgZAAAAAiIAAAPIABAHIAAAJQABADADACQADACAHABIAAACIguAAIAAgCQAGAAADgCQADgBABgDQACgCAAgFIABgMIAAhHIgBgNQAAgEgCgCIgFgEIgHgBIAAgCIAegDIAAA+IAHgGIAHgEQAHgDAJAAQAMAAAJAEQAFAEADAEQACAEAAAJIAAAbIAAAHIABAJQAAADADACQADACAIABIAAACg");
	this.shape_227.setTransform(-283.4,185.5);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FF0000").s().p("AgMAvQgDgCgCgDIgBgLIAAg3IgLAAIAAgBQAHgCAGgFIAFgHIAEgIIACgEIADAAIAAAYIAaAAIAAADIgaAAIAAA1QABAKACAEQACACADABQADABAFAAQAEAAAEgBIAGgGIACABQgDAGgHACQgGACgJABQgMAAgFgFg");
	this.shape_228.setTransform(-291.3,186.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgBABgDQABgCABgFIABgMIAAgXIgBgMQgBgEgBgCIgFgDIgHgCIAAgCIAdgDIAAA0IABAHIAAAJQABADACABQADADAIABIAAACgAgGgyQgCgCAAgDQAAgEACgCQADgCADAAQAEAAACACQAEACAAAEQAAADgEACQgCADgEAAQgDAAgDgDg");
	this.shape_229.setTransform(-297.2,185.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FF0000").s().p("AAWAnIgWg8IgcA8IgDAAIgVg2IgDgHQgDgJgEgCIgHgDIAAgCIApAAIAAACQgMAAAAAIQAAAEAFAMIAMAhIASgpQACgFAAgDQAAgHgLgBIAAgCIAoAAIAAACIgIACQgDACAAAEQAAADACAGIAOAoIAQgjQADgIAAgEQAAgFgEgCIgHgDIAAgCIAfAAIAAACQgFAAgDADIgFAEIgFAKIgCAFIgZA1g");
	this.shape_230.setTransform(-306.2,188);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FF0000").s().p("AgMAmIgGgCIgCAAQgEAAgCADIgCAAIAAgaIACAAQADAJAEAGQAIAKALAAQAGAAAFgDQAFgEAAgHQAAgGgEgEIgFgEIgKgGQgNgFgFgEQgGgGAAgHQAAgJAGgGQAIgGAMAAIAJABIADACIADAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABgBIACAAIABAVIgCAAIgDgHQgBgDgCgCIgIgFQgEgCgDAAQgGAAgEADQgEAEAAAFQAAAFADAEQAEADAIADIAKAFQAKADAFAFQAFAGAAAIQAAAKgHAGQgJAHgMAAQgGAAgHgCg");
	this.shape_231.setTransform(262.3,164.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FF0000").s().p("AgNAvQgCgCgBgDIgBgLIAAg3IgMAAIAAgBQAHgCAGgFIAFgHIAFgIIABgEIADAAIAAAYIAaAAIAAADIgaAAIAAA1QAAAKADAEQACACADABQAEABADAAQAFAAADgBIAHgGIACABQgDAGgHACQgGACgKABQgLAAgGgFg");
	this.shape_232.setTransform(256.2,163.1);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FF0000").s().p("AgjAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgVIgBgNQAAgEgCgCQgCgDgDgBIgHgCIAAgBIAbgEQACAJAAAGQAEgGAEgEQAIgEALgBQAHAAAEADQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDABQgEgBgCgCIgDgDQgEgDgFgBQgIAAgDAJQgEAHAAAPIAAAQIABAHIAAAJQABADACACQADACAHABIAAACg");
	this.shape_233.setTransform(249.3,164.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOAMgLQAQgOAUAAQAVAAAPAOQANALAAAOQAAAPgMALQgPAOgWAAQgVAAgPgOgAgUgbQgJALAAAQQAAAPAIALQAKAMALAAQAHAAAEgCQAGgDAEgFQAEgFACgIQADgIAAgHQAAgGgDgIQgDgIgEgFQgJgKgLAAQgLAAgJAKg");
	this.shape_234.setTransform(239.9,164.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FF0000").s().p("AAHBAIAAgCIAIgBIAEgDQACgDABgEIABgLIAAgdIgBgLIgEgFQgGgGgJAAQgZAAAAAiIAAAPIABAHIAAAJQABADADACQADACAHABIAAACIguAAIAAgCQAGAAADgCQADgBABgDQACgCAAgFIABgMIAAhHIgBgNQAAgEgCgCQgCgDgDgBIgHgBIAAgCIAegDIAAA+IAHgGIAHgEQAHgDAJAAQAMAAAJAEQAFAEADAEQACAEAAAJIAAAbIAAAHIABAJQAAADADACQADACAIABIAAACg");
	this.shape_235.setTransform(228.8,161.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FF0000").s().p("AgMAmIgGgCIgCAAQgEAAgCADIgCAAIAAgaIACAAQADAJAEAGQAIAKALAAQAGAAAFgDQAFgEAAgHQAAgGgEgEIgFgEIgKgGQgNgFgFgEQgGgGAAgHQAAgJAGgGQAIgGAMAAIAJABIADACIADAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABgBIACAAIABAVIgCAAIgDgHQgBgDgCgCIgIgFQgEgCgDAAQgGAAgEADQgEAEAAAFQAAAFADAEQAEADAIADIAKAFQAKADAFAFQAFAGAAAIQAAAKgHAGQgJAHgMAAQgGAAgHgCg");
	this.shape_236.setTransform(219.4,164.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FF0000").s().p("AAFBAIAAgCIAGgBQABAAAAgBQABAAAAAAQAAgBABgBQAAAAAAgBQAAgCgDgDIgCgCIgZgZIgGAGIAAAHIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgCQACgBACgDQABgCABgFIAAgMIAAhHIAAgNQgBgEgCgCQgCgDgCgBIgHgBIAAgCIAegDIAABaIATgSIAHgIQACgCAAgDQAAgEgFgCIgGgBIAAgCIAnAAIAAACQgIAAgEADQgFACgIAGIgEAEIgKALIAaAbIAEAEIAFAEIAIAHIAGADIAKACIAAACg");
	this.shape_237.setTransform(205.2,161.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FF0000").s().p("AgaAdQgLgKAAgRQAAgHACgIQAEgIAFgFQAHgHAJgDQAJgDAKAAQAPAAAKAGQAEADAAAFQAAACgCADQgCABgDAAQgHAAgDgIIgDgGIgCgCQgEgCgEAAQgGAAgEADQgFACgDAEQgEAEgCAGQgDAKAAAIQAAAIADAHQADAIAGAFQAIAJAMAAQAKAAAHgGQADgDADgHIACABQgEAKgHAEQgIAEgMAAQgVAAgMgLg");
	this.shape_238.setTransform(195,164.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAFgFQAEgDADgCIAMgDIAOgDIAHgDIAEgFIABgIQAAgKgEgFQgCgDgDgBIgGgBQgFAAgDABQgEACgCAEIgCAFQgCAEgGAAQgDAAgDgCQgCgCAAgDQAAgEAIgEIAKgCIALgBIANABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAGAAIAGgBIAEgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgKAFIgGAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAGAAAEgDQAEgCACgFQADgGAAgMIAAgOIgLAGg");
	this.shape_239.setTransform(186.4,164.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgDQACgCAAgFIAAgMIAAhHIAAgNQAAgEgCgCQgCgDgDgBIgHgBIAAgCIAdgDIAABlIABAHIAAAJQABADACACQAEACAHABIAAACg");
	this.shape_240.setTransform(178.7,161.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FF0000").s().p("AgiBCIAAhqQAAgKgDgFQgEgEgJAAIAAgDIAggDIAAA9QAFgFADgCQAIgFAKAAQAQAAAMAJQAPAKAAAUQAAATgOAMQgMAKgTAAQgJAAgHgCIgGgDIgEAAQgGAAgDAHgAgHgKQgFADgCAFQgEAHAAARQAAAKABAIQACAJACADQACAFAEACQAFADAGAAQAMAAAJgLQAIgKAAgRQAAgIgDgIQgDgIgEgEQgFgFgEgCQgFgCgFAAQgFAAgGADg");
	this.shape_241.setTransform(170.4,161.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FF0000").s().p("AgOAWQAGgCAEgDQAEgDACgEQAFgHAAgFIgFABQgEAAgEgDQgEgDAAgFQAAgEAEgEQAEgDAEAAQAGAAAEAEQAEAFgBAHQABAHgEAGQgEAHgGAFQgHAEgJACg");
	this.shape_242.setTransform(157.2,168.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FF0000").s().p("AgjAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgVIgBgNQAAgEgCgCQgCgDgDgBIgHgCIAAgBIAbgEQACAJAAAGQAEgGAEgEQAIgEALgBQAHAAAEADQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDABQgEgBgCgCIgDgDQgEgDgFgBQgIAAgDAJQgEAHAAAPIAAAQIABAHIAAAJQABADACACQADACAHABIAAACg");
	this.shape_243.setTransform(151.1,164.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAOAAQAJAAAIACQAGADAFAFQAIAHAAAMIg9AAIAAAGQAAAHACAIQAEAIAEAFQAFAFAGADQAHADAHAAQAGAAAFgCQAFgCADgDQAEgDADgHIACABQgDALgIAFQgKAFgPAAQgMAAgIgDgAgNgfQgHAHgBAKIAsAAQAAgJgDgFQgDgEgFgDQgFgCgFAAQgIAAgHAGg");
	this.shape_244.setTransform(142.3,164.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FF0000").s().p("AgMAvQgDgCgCgDIgBgLIAAg3IgKAAIAAgBQAGgCAGgFIAFgHIAEgIIACgEIADAAIAAAYIAaAAIAAADIgaAAIAAA1QABAKACAEQACACADABQADABAFAAQAEAAAEgBIAGgGIACABQgEAGgGACQgGACgJABQgMAAgFgFg");
	this.shape_245.setTransform(135.3,163.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgLAAgHgEQgHgFAAgJQAAgHAGgFQACgDAFgCIAMgDIANgDIAGgDIAFgFIABgIQAAgKgFgFQgCgDgCgBIgGgBQgFAAgEABQgCACgCAEIgDAFQgCAEgGAAQgDAAgCgCQgDgCAAgDQAAgEAHgEIAKgCIANgBIAMABQAHABAFADQAGADADAGIAAAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAEAAAGgDQADgCACgFQADgGABgMIAAgOIgMAGg");
	this.shape_246.setTransform(127.9,164.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAIACQAHADAEAFQAIAHAAAMIg8AAIgBAGQAAAHACAIQADAIAFAFQAFAFAGADQAGADAIAAQAGAAAFgCQAFgCADgDQAEgDADgHIACABQgDALgIAFQgKAFgPAAQgMAAgIgDgAgNgfQgGAHgCAKIAsAAQAAgJgDgFQgEgEgEgDQgFgCgFAAQgIAAgHAGg");
	this.shape_247.setTransform(117.9,164.2);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FF0000").s().p("AAWAnIgWg8IgcA8IgDAAIgVg2IgDgHQgDgJgEgCIgHgDIAAgCIApAAIAAACQgMAAAAAIQAAAEAFAMIAMAhIASgpQACgFAAgDQAAgHgLgBIAAgCIAoAAIAAACIgIACQgDACAAAEQAAADACAGIAOAoIAQgjQADgIAAgEQAAgFgEgCIgHgDIAAgCIAfAAIAAACQgFAAgDADIgFAEIgFAKIgCAFIgZA1g");
	this.shape_248.setTransform(106.8,164.2);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FF0000").s().p("AgMAmIgGgCIgCAAQgEAAgCADIgCAAIAAgaIACAAQADAJAEAGQAIAKALAAQAGAAAFgDQAFgEAAgHQAAgGgEgEIgFgEIgKgGQgNgFgFgEQgGgGAAgHQAAgJAGgGQAIgGAMAAIAJABIADACIADAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABgBIACAAIABAVIgCAAIgDgHQgBgDgCgCIgIgFQgEgCgDAAQgGAAgEADQgEAEAAAFQAAAFADAEQAEADAIADIAKAFQAKADAFAFQAFAGAAAIQAAAKgHAGQgJAHgMAAQgGAAgHgCg");
	this.shape_249.setTransform(96.3,164.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FF0000").s().p("AgiBMIA/iYIAHAAIhACYg");
	this.shape_250.setTransform(89,162.7);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FF0000").s().p("AgNAvQgCgCgBgDIgBgLIAAg3IgMAAIAAgBQAHgCAGgFIAFgHIAFgIIABgEIADAAIAAAYIAaAAIAAADIgaAAIAAA1QAAAKADAEQACACADABQAEABADAAQAFAAADgBIAHgGIACABQgDAGgHACQgGACgKABQgLAAgGgFg");
	this.shape_251.setTransform(83.8,163.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FF0000").s().p("AgjAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgVIgBgNQAAgEgCgCQgCgDgDgBIgHgCIAAgBIAbgEQACAJAAAGQAEgGAEgEQAIgEALgBQAHAAAEADQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDABQgEgBgCgCIgDgDQgEgDgFgBQgIAAgDAJQgEAHAAAPIAAAQIABAHIAAAJQABADACACQADACAHABIAAACg");
	this.shape_252.setTransform(77,164.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgDQABgCABgFIAAgMIAAgXIAAgMQgBgEgBgCQgCgDgDAAIgHgCIAAgCIAdgDIAAA0IABAHIAAAJQABADACABQADADAIABIAAACgAgGgyQgDgCABgDQgBgDADgDQADgCADAAQAEAAADACQADADAAADQAAADgDACQgDADgEAAQgDAAgDgDg");
	this.shape_253.setTransform(70.5,161.7);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FF0000").s().p("AAHBAIAAgCIAIgBIAEgDQACgDABgEIABgLIAAgdIgBgLIgEgFQgGgGgJAAQgZAAAAAiIAAAPIABAHIAAAJQABADADACQADACAHABIAAACIguAAIAAgCQAGAAADgCQADgBABgDQACgCAAgFIABgMIAAhHIgBgNQAAgEgCgCQgCgDgDgBIgHgBIAAgCIAegDIAAA+IAHgGIAHgEQAHgDAJAAQAMAAAJAEQAFAEADAEQACAEAAAJIAAAbIAAAHIABAJQAAADADACQADACAIABIAAACg");
	this.shape_254.setTransform(62.3,161.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FF0000").s().p("AgMAmIgGgCIgCAAQgEAAgCADIgCAAIAAgaIACAAQADAJAEAGQAIAKALAAQAGAAAFgDQAFgEAAgHQAAgGgEgEIgFgEIgKgGQgNgFgFgEQgGgGAAgHQAAgJAGgGQAIgGAMAAIAJABIADACIADAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABgBIACAAIABAVIgCAAIgDgHQgBgDgCgCIgIgFQgEgCgDAAQgGAAgEADQgEAEAAAFQAAAFADAEQAEADAIADIAKAFQAKADAFAFQAFAGAAAIQAAAKgHAGQgJAHgMAAQgGAAgHgCg");
	this.shape_255.setTransform(52.9,164.2);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FF0000").s().p("AgXAHIAAgNIAvAAIAAANg");
	this.shape_256.setTransform(46.4,164.1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FF0000").s().p("AgNAvQgDgCgBgDIAAgLIAAg3IgLAAIAAgBQAGgCAGgFIAGgHIADgIIABgEIAFAAIAAAYIAZAAIAAADIgZAAIAAA1QgBAKADAEQACACAEABQADABADAAQAFAAADgBIAHgGIABABQgDAGgGACQgGACgKABQgLAAgGgFg");
	this.shape_257.setTransform(41.4,163.1);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FF0000").s().p("AgQAlQgJgEgGgHQgJgLAAgPQAAgTARgMQAMgIAOAAQAJAAAHACQAIADAEAFQAIAHAAAMIg9AAIAAAGQAAAHADAIQADAIAEAFQAFAFAHADQAFADAIAAQAGAAAFgCQAFgCAEgDQADgDADgHIACABQgCALgKAFQgIAFgPAAQgMAAgKgDgAgNgfQgHAHgBAKIAsAAQgBgJgDgFQgDgEgEgDQgFgCgFAAQgIAAgHAGg");
	this.shape_258.setTransform(27.9,164.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FF0000").s().p("AgMAvQgEgCgBgDIgBgLIAAg3IgKAAIAAgBQAGgCAGgFIAGgHIADgIIABgEIAFAAIAAAYIAZAAIAAADIgZAAIAAA1QgBAKADAEQACACAEABQACABAFAAQAEAAADgBIAHgGIABABQgDAGgGACQgGACgJABQgMAAgFgFg");
	this.shape_259.setTransform(20.8,163.1);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgDQACgCAAgFIAAgMIAAgXIAAgMQAAgEgCgCQgCgDgDAAIgHgCIAAgCIAdgDIAAA0IABAHIAAAJQABADACABQAEADAHABIAAACgAgGgyQgCgCgBgDQABgDACgDQADgCADAAQAEAAADACQACADAAADQAAADgCACQgDADgEAAQgEAAgCgDg");
	this.shape_260.setTransform(14.9,161.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FF0000").s().p("AAHBAIAAgCIAIgBIAEgDQACgDABgEIABgLIAAgdIgBgLIgEgFQgGgGgJAAQgZAAAAAiIAAAPIABAHIAAAJQABADADACQADACAHABIAAACIguAAIAAgCQAGAAADgCQADgBABgDQACgCAAgFIABgMIAAhHIgBgNQAAgEgCgCQgCgDgDgBIgHgBIAAgCIAegDIAAA+IAHgGIAHgEQAHgDAJAAQAMAAAJAEQAFAEADAEQACAEAAAJIAAAbIAAAHIABAJQAAADADACQADACAIABIAAACg");
	this.shape_261.setTransform(6.7,161.6);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FF0000").s().p("AAWAnIgWg8IgcA8IgDAAIgVg2IgDgHQgDgJgEgCIgHgDIAAgCIApAAIAAACQgMAAAAAIQAAAEAFAMIAMAhIASgpQACgFAAgDQAAgHgLgBIAAgCIAoAAIAAACIgIACQgDACAAAEQAAADACAGIAOAoIAQgjQADgIAAgEQAAgFgEgCIgHgDIAAgCIAfAAIAAACQgFAAgDADIgFAEIgFAKIgCAFIgZA1g");
	this.shape_262.setTransform(-5.3,164.2);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAFgFQADgDAEgCIAMgDIAOgDIAHgDIAEgFIABgIQAAgKgEgFQgCgDgDgBIgHgBQgEAAgDABQgEACgCAEIgCAFQgCAEgFAAQgEAAgDgCQgCgCAAgDQAAgEAIgEIAKgCIALgBIANABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAGAAIAGgBIAEgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgKAFIgGAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAFAAAFgDQAEgCACgFQAEgGgBgMIAAgOIgLAGg");
	this.shape_263.setTransform(-21.6,164.2);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FF0000").s().p("AgOAWQAGgCAEgDQAEgDACgEQAFgHAAgFIgFABQgEAAgEgDQgEgDAAgFQAAgEAEgEQAEgDAEAAQAGAAAEAEQAEAFgBAHQABAHgEAGQgEAHgGAFQgHAEgJACg");
	this.shape_264.setTransform(-34.5,168.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FF0000").s().p("AgQAlQgJgEgGgHQgJgLAAgPQAAgTARgMQAMgIAOAAQAJAAAHACQAIADAEAFQAIAHAAAMIg9AAIAAAGQAAAHADAIQADAIAEAFQAFAFAHADQAGADAHAAQAGAAAFgCQAFgCADgDQAEgDADgHIACABQgCALgKAFQgIAFgQAAQgMAAgJgDgAgNgfQgHAHgBAKIAsAAQgBgJgDgFQgCgEgFgDQgFgCgFAAQgIAAgHAGg");
	this.shape_265.setTransform(-42,164.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgDQACgCAAgFIAAgMIAAgXIAAgMQAAgEgDgCQgCgDgCAAIgHgCIAAgCIAdgDIAAA0IAAAHIABAJQABADADABQADADAHABIAAACgAgGgyQgCgCgBgDQABgDACgDQADgCADAAQAEAAADACQACADAAADQAAADgCACQgDADgEAAQgEAAgCgDg");
	this.shape_266.setTransform(-49.3,161.7);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FF0000").s().p("AAUA4QgIAEgHACQgGACgHAAQgRAAgKgIQgIgFgEgIQgEgJAAgJQAAgKAEgJQAFgHAIgGQAMgJAQAAQAGABAGACQAGACAIAEIAAghQAAgKgFgFQgDgEgJAAIAAgCIAhgEIAABqQgBAKAEAEQAEAEAIABIAAABIgeAFIgBgKgAgWgEQgFAFgDAHQgDAHAAAJQABAHACAIQADAIAEAFQAIAJALAAQAFABAFgDQAFgDADgEQADgEABgGQABgHABgMQgBgNgBgGQgBgFgEgEQgCgEgFgCQgEgCgFAAQgLAAgIAJg");
	this.shape_267.setTransform(-57.4,161.8);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOAMgLQAQgOAUAAQAVAAAPAOQANALAAAOQAAAPgMALQgPAOgWAAQgVAAgPgOgAgUgbQgJALAAAQQAAAPAIALQAJAMAMAAQAHAAAEgCQAGgDAEgFQAEgFACgIQADgIAAgHQAAgGgDgIQgDgIgEgFQgJgKgLAAQgMAAgIAKg");
	this.shape_268.setTransform(-68.7,164.2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FF0000").s().p("AAHBAIAAgCIAIgBIAEgDQACgDABgEIABgLIAAgdIgBgLIgEgFQgGgGgJAAQgZAAAAAiIAAAPIABAHIAAAJQABADADACQADACAHABIAAACIguAAIAAgCQAGAAADgCQADgBABgDQACgCAAgFIABgMIAAhHIgBgNQAAgEgCgCQgCgDgDgBIgHgBIAAgCIAegDIAAA+IAHgGIAHgEQAHgDAJAAQAMAAAJAEQAFAEADAEQACAEAAAJIAAAbIAAAHIABAJQAAADADACQADACAIABIAAACg");
	this.shape_269.setTransform(-90.9,161.6);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FF0000").s().p("AgQAlQgJgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAHACQAHADAGAFQAHAHAAAMIg8AAIgBAGQAAAHACAIQADAIAFAFQAFAFAGADQAHADAIAAQAFAAAFgCQAFgCAEgDQADgDADgHIACABQgDALgIAFQgKAFgOAAQgMAAgKgDgAgNgfQgHAHgBAKIAsAAQAAgJgEgFQgDgEgEgDQgFgCgFAAQgIAAgHAGg");
	this.shape_270.setTransform(-106.8,164.2);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FF0000").s().p("AAXAcQgNAMgSAAQgMAAgJgGQgIgFAAgKIAAgfIAAgHIgBgJQAAgDgCgCQgEgCgIgCIAAgCIAgAAIAAAuIAAAOQABAFACADQADADADACQAFACAFAAQAFAAAFgCQAFgCADgEQADgDACgFIABgPIAAgRIgBgHIAAgJIgEgFQgCgCgJgCIAAgCIAfAAIAAAxIABANQAAAEACACQACADACABIAHACIAAACIgcADQgCgGABgGg");
	this.shape_271.setTransform(-117.2,164.2);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgDQABgCABgFIAAgMIAAhHIAAgNQgBgEgBgCQgCgDgDgBIgHgBIAAgCIAdgDIAABlIABAHIAAAJQABADACACQADACAIABIAAACg");
	this.shape_272.setTransform(-125.2,161.6);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FF0000").s().p("AgiBCIAAhqQAAgKgEgFQgDgEgJAAIAAgDIAggDIAAA9QAEgFAEgCQAJgFAJAAQARAAAMAJQAOAKAAAUQAAATgOAMQgMAKgTAAQgJAAgHgCIgGgDIgEAAQgGAAgEAHgAgGgKQgFADgDAFQgEAHAAARQAAAKACAIQABAJACADQACAFAFACQAEADAGAAQAMAAAIgLQAJgKAAgRQAAgIgDgIQgDgIgFgEQgEgFgFgCQgEgCgFAAQgFAAgFADg");
	this.shape_273.setTransform(-133.6,161.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FF0000").s().p("AAUA4QgIAEgHACQgGACgHAAQgRAAgKgIQgIgFgEgIQgEgJAAgJQAAgKAEgJQAFgHAIgGQAMgJAQAAQAGABAGACQAGACAIAEIAAghQAAgKgFgFQgDgEgJAAIAAgCIAhgEIAABqQgBAKAEAEQAEAEAIABIAAABIgeAFIgBgKgAgWgEQgFAFgDAHQgDAHAAAJQABAHACAIQADAIAEAFQAIAJALAAQAFABAFgDQAFgDADgEQADgEABgGQABgHABgMQgBgNgBgGQgBgFgEgEQgCgEgFgCQgEgCgFAAQgLAAgIAJg");
	this.shape_274.setTransform(-149.6,161.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FF0000").s().p("AgQAlQgJgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAHACQAHADAGAFQAHAHAAAMIg8AAIgBAGQAAAHACAIQADAIAFAFQAFAFAGADQAHADAIAAQAFAAAFgCQAFgCAEgDQADgDADgHIACABQgDALgIAFQgKAFgOAAQgMAAgKgDgAgNgfQgHAHgBAKIAsAAQAAgJgEgFQgDgEgEgDQgFgCgFAAQgIAAgHAGg");
	this.shape_275.setTransform(-160.4,164.2);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FF0000").s().p("AgyA6IAAgCQAHgBACgBQADgBABgEIACgGIABgMIAAg/QAAgKgEgEQgEgFgIAAIAAgCIAegEIABAIIAAACQAIgFAGgBQAHgCAIAAQAPAAAMAIQAHAFAEAIQADAIAAAKQAAAKgDAHQgFAJgHAGQgMAIgRAAQgHAAgFgCQgGgCgIgFIAAARIAAAGIACAJQAAADADACQADADAHABIAAACgAgFgyQgFACgDAEQgDAEgBAHIgCATIACASQABAGADAEQADAEAFACQAFACADAAQAMAAAHgJQAGgGACgHQADgHAAgIQAAgIgDgHQgCgIgFgFQgHgKgMAAQgEAAgFADg");
	this.shape_276.setTransform(-170.9,165.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FF0000").s().p("AgyA6IAAgCQAHgBACgBQADgBABgEIACgGIABgMIAAg/QAAgKgEgEQgEgFgIAAIAAgCIAegEIABAIIAAACQAIgFAGgBQAHgCAIAAQAPAAAMAIQAHAFAEAIQADAIAAAKQAAAKgDAHQgFAJgHAGQgMAIgRAAQgHAAgFgCQgGgCgIgFIAAARIAAAGIACAJQAAADADACQADADAHABIAAACgAgFgyQgFACgDAEQgDAEgBAHIgCATIACASQABAGADAEQADAEAFACQAFACADAAQAMAAAHgJQAGgGACgHQADgHAAgIQAAgIgDgHQgCgIgFgFQgHgKgMAAQgEAAgFADg");
	this.shape_277.setTransform(-182.1,165.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgDQACgCAAgFIAAgMIAAgXIAAgMQAAgEgDgCQgCgDgCAAIgHgCIAAgCIAdgDIAAA0IAAAHIABAJQABADADABQADADAHABIAAACgAgGgyQgCgCgBgDQABgDACgDQADgCADAAQAEAAADACQACADAAADQAAADgCACQgDADgEAAQgEAAgCgDg");
	this.shape_278.setTransform(-190.2,161.7);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FF0000").s().p("AgnAnIAAgCIA5hJIgWAAQgIAAgFACQgEABgEAEQgDAEgDAGIgCAAIACgTIBFAAIAAACIg6BIIAPAAIASgBQAIgBAEgCQAJgDAEgMIACABIgCAVg");
	this.shape_279.setTransform(-197.1,164.2);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FF0000").s().p("AAHAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgSIgBgPIgDgHQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDAEgBAEIgBAPIAAARIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgNQgBgEgCgCIgEgEIgHgCIAAgBIAcgEQACAFAAAGIAAABQANgMARAAQANAAAIAGQAIAFAAAKIAAAmIABAJQABADADACQADACAHABIAAACg");
	this.shape_280.setTransform(-206.9,164.1);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FF0000").s().p("AAWAcQgNAMgQAAQgNAAgJgGQgHgFgBgKIAAgfIAAgHIgBgJQAAgDgDgCQgDgCgHgCIAAgCIAeAAIAAAuIABAOQABAFACADQACADAEACQAFACAFAAQAFAAAFgCQAGgCADgEQADgDAAgFIABgPIAAgRIAAgHIgBgJIgDgFQgCgCgJgCIAAgCIAfAAIAAAxIABANQAAAEACACQACADADABIAGACIAAACIgcADQgBgGgBgGg");
	this.shape_281.setTransform(-218.1,164.2);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FF0000").s().p("AAHAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgSIgBgPIgDgHQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDAEgBAEIgBAPIAAARIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgNQgBgEgCgCQgCgDgCgBIgHgCIAAgBIAcgEIACALIAAABQANgMARAAQANAAAIAGQAIAFAAAKIAAAmIABAJQABADADACQADACAHABIAAACg");
	this.shape_282.setTransform(-234.5,164.1);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAGgFQACgDAFgCIALgDIAOgDIAGgDIAFgFIABgIQAAgKgFgFQgBgDgDgBIgHgBQgEAAgEABQgCACgCAEIgDAFQgCAEgFAAQgEAAgCgCQgDgCAAgDQAAgEAHgEIALgCIAMgBIAMABQAHABAFADQAHADACAGIAAAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAFAAAFgDQADgCACgFQADgGAAgMIAAgOIgLAGg");
	this.shape_283.setTransform(-244.2,164.2);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FF0000").s().p("AgMAmIgGgCIgCAAQgEAAgCADIgCAAIAAgaIACAAQADAJAEAGQAIAKALAAQAGAAAFgDQAFgEAAgHQAAgGgEgEIgFgEIgKgGQgNgFgFgEQgGgGAAgHQAAgJAGgGQAIgGAMAAIAJABIADACIADAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABgBIACAAIABAVIgCAAIgDgHQgBgDgCgCIgIgFQgEgCgDAAQgGAAgEADQgEAEAAAFQAAAFADAEQAEADAIADIAKAFQAKADAFAFQAFAGAAAIQAAAKgHAGQgJAHgMAAQgGAAgHgCg");
	this.shape_284.setTransform(-258.3,164.2);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FF0000").s().p("AgjAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgVIgBgNQAAgEgCgCQgCgDgDgBIgHgCIAAgBIAbgEQACAJAAAGQAEgGAEgEQAIgEALgBQAHAAAEADQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDABQgEgBgCgCIgDgDQgEgDgFgBQgIAAgDAJQgEAHAAAPIAAAQIABAHIAAAJQABADACACQADACAHABIAAACg");
	this.shape_285.setTransform(-265.8,164.1);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgMAAgGgEQgHgFAAgJQAAgHAGgFQADgDADgCIANgDIANgDIAGgDIAFgFIABgIQAAgKgFgFQgCgDgCgBIgGgBQgFAAgDABQgEACgCAEIgCAFQgCAEgGAAQgDAAgCgCQgDgCAAgDQAAgEAHgEIAKgCIANgBIAMABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAGAAIAFgBIAFgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAFAAAGgDQADgCACgFQAEgGAAgMIAAgOIgMAGg");
	this.shape_286.setTransform(-273.7,164.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FF0000").s().p("AgQAlQgJgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAHACQAHADAGAFQAHAHAAAMIg8AAIgBAGQAAAHACAIQADAIAFAFQAFAFAGADQAHADAIAAQAFAAAFgCQAFgCAEgDQADgDADgHIACABQgDALgIAFQgKAFgOAAQgMAAgKgDgAgNgfQgHAHgBAKIAsAAQAAgJgEgFQgDgEgEgDQgFgCgFAAQgIAAgHAGg");
	this.shape_287.setTransform(-283.7,164.2);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FF0000").s().p("AAWAnIgWg8IgcA8IgDAAIgVg2IgDgHQgDgJgEgCIgHgDIAAgCIApAAIAAACQgMAAAAAIQAAAEAFAMIAMAhIASgpQACgFAAgDQAAgHgLgBIAAgCIAoAAIAAACIgIACQgDACAAAEQAAADACAGIAOAoIAQgjQADgIAAgEQAAgFgEgCIgHgDIAAgCIAfAAIAAACQgFAAgDADIgFAEIgFAKIgCAFIgZA1g");
	this.shape_288.setTransform(-294.9,164.2);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAIACQAHADAEAFQAIAHAAAMIg9AAIAAAGQAAAHACAIQADAIAFAFQAFAFAGADQAGADAIAAQAGAAAFgCQAFgCADgDQAEgDADgHIACABQgDALgIAFQgKAFgPAAQgMAAgIgDgAgNgfQgGAHgCAKIAsAAQAAgJgDgFQgEgEgEgDQgFgCgFAAQgIAAgHAGg");
	this.shape_289.setTransform(252.9,140.3);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FF0000").s().p("AAPA/IAAgDIAKgBIAHgEQADgDABgFIABgNIAAgiIhJAAIAAAiQAAAJABAEQABAFADADIAHAEIAKABIAAADIhDAAIAAgDIAKgBIAGgEQAEgDABgFIABgNIAAhCIgBgPQgBgEgEgDIgGgEIgKgCIAAgBIBDAAIAAABIgKACIgHAEQgDADgBAEQgBAFAAAKIAAAcIBJAAIAAgcIgBgPQgBgEgDgDIgHgEIgKgCIAAgBIBDAAIAAABIgKACIgGAEQgEADgBAEIgBAPIAABCIABANQABAFAEADIAGAEIAKABIAAADg");
	this.shape_290.setTransform(239.4,137.9);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FF0000").s().p("AgIAIQgEgEAAgEQAAgEAEgDQAEgDAEAAQAFAAAEADQAEADAAAEQAAAEgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_291.setTransform(222.7,143.2);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FF0000").s().p("AgMAwQgEgDgBgDIgBgLIAAg2IgKAAIAAgCQAGgBAGgGIAGgHIADgJIABgCIAFAAIAAAXIAZAAIAAAEIgZAAIAAA0QgBAKADADQACADAEABQACABAFABQAEgBADgBIAHgHIABACQgDAFgGADQgGACgJAAQgMAAgFgDg");
	this.shape_292.setTransform(210.2,139.2);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FF0000").s().p("AgiBCIAAhqQAAgKgEgFQgDgEgJAAIAAgDIAggDIAAA9QAEgFAFgCQAHgFALAAQAQAAAMAJQAOAKAAAUQAAATgOAMQgMAKgTAAQgJAAgHgCIgGgDIgEAAQgGAAgEAHgAgGgKQgFADgDAFQgEAHAAARQAAAKACAIQABAJABADQADAFAFACQAFADAEAAQANAAAIgLQAJgKAAgRQAAgIgDgIQgDgIgFgEQgDgFgGgCQgEgCgFAAQgGAAgEADg");
	this.shape_293.setTransform(196,137.9);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FF0000").s().p("AgjAoIAAgDQAGAAADgCQADgBABgDQACgCAAgFIABgLIAAgWIgBgNQAAgEgCgCIgFgEIgHgCIAAgCIAbgCQACAHAAAGQAEgFAEgEQAIgEALAAQAHgBAEADQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDAAQgEAAgCgCIgDgDQgEgEgFAAQgIABgDAHQgEAJAAAOIAAAQIABAHIAAAJQABADACACQADACAHABIAAADg");
	this.shape_294.setTransform(187.2,140.2);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAIACQAHADAFAFQAHAHAAAMIg8AAIgBAGQAAAHACAIQADAIAFAFQAFAFAGADQAHADAIAAQAFAAAFgCQAFgCADgDQAEgDADgHIACABQgDALgIAFQgKAFgPAAQgMAAgIgDgAgNgfQgGAHgCAKIAsAAQgBgJgCgFQgDgEgFgDQgFgCgFAAQgIAAgHAGg");
	this.shape_295.setTransform(161.9,140.3);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FF0000").s().p("AglAwQgGgFAAgIQAAgGAEgEQAFgEAGAAQAFAAADACQADACAAAFIAAABIgCAAIgEgEIgEgBQgEAAgDADQgDADAAAFQAAAHAIAFQAJAFANAAQANAAAJgFQAIgGAAgIQAAgHgFgDQgGgEgLAAIgPAAQgLAAgGgEQgGgFAAgGQAAgGAGgDIANgEQgJgEgFgGQgFgGAAgHQAAgJAIgHQAFgFAGgCQAGgCAHAAQAJAAAKAGQAFgEAEgBQAEgBAFAAQAFAAADABQAEADAAADQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgEAAgCgDIgDgDQgCgCgDAAQgEAAgFAEQAJAJAAAJQAAAMgMAHQgGAEgHABIgNABQgPABAAAFQAAAGANAAIAQAAQAKAAAGACQAGABAFADQAJAGAAALQAAAMgLAGQgLAHgUAAQgXAAgJgIgAgRgvQgCADgBAFQgCAFAAAFQAAAKAFAGQAFAGAHAAQAHAAAEgGQAEgGAAgLQAAgMgFgGQgEgFgGAAQgHAAgFAGg");
	this.shape_296.setTransform(153.1,141.9);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FF0000").s().p("AgjAoIAAgDQAGAAADgCQADgBABgDQACgCAAgFIABgLIAAgWIgBgNQAAgEgCgCIgFgEIgHgCIAAgCIAbgCQACAHAAAGQAEgFAEgEQAIgEALAAQAHgBAEADQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDAAQgEAAgCgCIgDgDQgEgEgFAAQgIABgDAHQgEAJAAAOIAAAQIABAHIAAAJQABADACACQADACAHABIAAADg");
	this.shape_297.setTransform(144.8,140.2);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAFgFQADgDAEgCIAMgDIAOgDIAHgDIAEgFIABgIQAAgKgEgFQgCgDgDgBIgHgBQgEAAgDABQgEACgBAEIgDAFQgCAEgFAAQgEAAgDgCQgCgCAAgDQAAgEAIgEIAKgCIALgBIANABQAHABAFADQAGADADAGIAAAJIAAAhIABALQACAHAGAAIAGgBIAEgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgKAFIgGAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAFAAAFgDQAEgCACgFQAEgGgBgMIAAgOIgLAGg");
	this.shape_298.setTransform(136.8,140.3);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FF0000").s().p("AAUA4QgIAFgHABQgFACgIAAQgRAAgKgIQgIgFgEgJQgDgHAAgKQAAgKADgJQAFgHAIgGQAMgIAQAAQAGAAAGABQAGADAIAFIAAgiQAAgKgFgEQgDgFgJAAIAAgCIAhgEIAABpQAAALADAEQAEAFAIgBIAAADIgeADIgBgJgAgWgEQgFAFgDAHQgCAIAAAHQgBAJADAHQADAIAFAFQAHAKALAAQAFAAAFgDQAEgCAEgEQADgFABgHQABgGABgMQgBgNgBgGQgBgGgEgDQgCgEgFgCQgFgCgEAAQgLAAgIAJg");
	this.shape_299.setTransform(115.8,137.9);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgMAAgGgEQgHgFAAgJQAAgHAFgFQAEgDADgCIANgDIANgDIAHgDIAEgFIABgIQAAgKgFgFQgCgDgCgBIgGgBQgFAAgDABQgDACgDAEIgCAFQgCAEgGAAQgDAAgDgCQgCgCAAgDQAAgEAHgEIAKgCIAMgBIANABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAGAAIAGgBIAEgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgKAFIgGAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAGAAAEgDQAEgCACgFQAEgGAAgMIAAgOIgMAGg");
	this.shape_300.setTransform(94.7,140.3);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FF0000").s().p("AgQAlQgJgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAHACQAHADAGAFQAHAHAAAMIg8AAIgBAGQAAAHADAIQADAIAEAFQAFAFAGADQAHADAIAAQAFAAAFgCQAFgCAEgDQADgDADgHIACABQgCALgKAFQgIAFgPAAQgMAAgKgDgAgNgfQgGAHgCAKIAsAAQAAgJgEgFQgDgEgEgDQgFgCgFAAQgIAAgHAGg");
	this.shape_301.setTransform(79.4,140.3);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgBABgDQABgCABgFIABgMIAAhHIgBgNQgBgEgCgCQgBgDgDgBIgHgBIAAgCIAdgDIAABlIAAAHIABAJQABADADACQACACAIABIAAACg");
	this.shape_302.setTransform(72,137.7);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgCACgDQACgCAAgEIAAgMIAAgWIAAgOQAAgDgDgCIgEgEIgHgBIAAgCIAdgDIAAAzIAAAHIABAJQABADADADQADACAHABIAAACgAgGgyQgCgBgBgEQABgDACgDQADgCADAAQAEAAADACQACADAAADQAAAEgCABQgDADgEAAQgEAAgCgDg");
	this.shape_303.setTransform(66.8,137.8);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FF0000").s().p("AAlAoIAAgDQAGAAADgCQADgBABgDQACgCAAgFIAAgLIAAgRIAAgPQgBgFgCgDQgFgIgMAAQgNAAgGAJQgFAHAAAQIAAAQIAAAHIABAJQABADACACQADACAIABIAAADIgtAAIAAgDQAGAAADgCIAEgEIACgHIAAgLIAAgQIAAgQQgBgFgDgDQgCgEgEgBQgEgDgFAAQgGAAgGADQgFADgDAEQgDADgBAGQgBAFAAAJIAAAPIAAAHIABAJQABADACACQADACAIABIAAADIguAAIAAgDQAGAAADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgCIgEgEIgHgCIAAgCIAdgCIACAMQAHgGAIgEQAIgCAJAAQAKAAAGADQADAEAFAGQAIgHAJgEQAIgCAJAAQAMgBAIAHQAIAFAAAKIAAAeIAAAHIABAJIADAFQADACAIABIAAADg");
	this.shape_304.setTransform(55.6,140.2);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FF0000").s().p("AAUA4QgIAFgGABQgHACgIAAQgPAAgMgIQgHgFgDgJQgEgHAAgKQAAgKAEgJQAEgHAHgGQAMgIAQAAQAIAAAFABQAGADAHAFIAAgiQAAgKgEgEQgDgFgJAAIAAgCIAggEIAABpQABALADAEQAEAFAIgBIAAADIgeADIgBgJgAgWgEQgFAFgCAHQgDAIAAAHQAAAJACAHQADAIAFAFQAHAKAMAAQAEAAAFgDQAFgCADgEQADgFABgHQABgGAAgMQAAgNgBgGQgBgGgDgDQgDgEgFgCQgFgCgDAAQgMAAgIAJg");
	this.shape_305.setTransform(28.6,137.9);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAIACQAHADAFAFQAHAHAAAMIg8AAIgBAGQAAAHACAIQADAIAFAFQAFAFAGADQAHADAIAAQAFAAAFgCQAFgCADgDQAEgDADgHIACABQgDALgIAFQgKAFgPAAQgMAAgIgDgAgNgfQgGAHgCAKIAsAAQgBgJgCgFQgDgEgFgDQgFgCgFAAQgIAAgHAGg");
	this.shape_306.setTransform(17.9,140.3);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgBABgDQABgCABgFIABgMIAAhHIgBgNQgBgEgBgCIgFgEIgHgBIAAgCIAdgDIAABlIABAHIAAAJQABADACACQADACAIABIAAACg");
	this.shape_307.setTransform(10.6,137.7);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FF0000").s().p("AgyA6IAAgCQAHgBACgBQADgBABgEIACgGIAAgMIAAg/QAAgKgDgEQgEgFgIAAIAAgCIAegEIABAIIAAACQAIgFAHgBQAFgCAIAAQAQAAALAIQAHAFAFAIQADAIAAAKQAAAKgDAHQgFAJgIAGQgMAIgQAAQgHAAgFgCQgGgCgIgFIAAARIAAAGIABAJQABADADACQACADAJABIAAACgAgFgyQgFACgDAEQgDAEgCAHIgBATIABASQACAGADAEQADAEAFACQAFACAEAAQALAAAIgJQAFgGADgHQACgHAAgIQAAgIgCgHQgDgIgEgFQgJgKgKAAQgFAAgFADg");
	this.shape_308.setTransform(2.2,141.9);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FF0000").s().p("AAlAoIAAgDQAGAAADgCQADgBABgDQACgCAAgFIAAgLIAAgRIAAgPQgBgFgCgDQgFgIgMAAQgNAAgGAJQgFAHAAAQIAAAQIAAAHIABAJQABADACACQADACAIABIAAADIgtAAIAAgDQAGAAADgCIAEgEIACgHIAAgLIAAgQIAAgQQgBgFgDgDQgCgEgEgBQgEgDgFAAQgGAAgGADQgFADgDAEQgDADgBAGQgBAFAAAJIAAAPIAAAHIABAJQABADACACQADACAIABIAAADIguAAIAAgDQAGAAADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgCIgEgEIgHgCIAAgCIAdgCIACAMQAHgGAIgEQAIgCAJAAQAKAAAGADQADAEAFAGQAIgHAJgEQAIgCAJAAQAMgBAIAHQAIAFAAAKIAAAeIAAAHIABAJIADAFQADACAIABIAAADg");
	this.shape_309.setTransform(-11.8,140.2);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FF0000").s().p("AAUA4QgIAFgHABQgGACgIAAQgQAAgLgIQgHgFgEgJQgDgHAAgKQAAgKADgJQAFgHAHgGQAMgIARAAQAGAAAGABQAGADAIAFIAAgiQgBgKgEgEQgDgFgJAAIAAgCIAggEIAABpQAAALAEAEQAEAFAIgBIAAADIgeADIgBgJgAgWgEQgFAFgDAHQgCAIAAAHQAAAJACAHQADAIAFAFQAHAKAMAAQAEAAAFgDQAEgCAEgEQADgFABgHQACgGAAgMQAAgNgCgGQgBgGgDgDQgDgEgFgCQgFgCgEAAQgLAAgIAJg");
	this.shape_310.setTransform(-31.1,137.9);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FF0000").s().p("AAHBAIAAgCIAIgBIAEgDQACgDABgEIABgLIAAgdIgBgLIgEgFQgGgGgJAAQgZAAAAAiIAAAPIABAHIAAAJQABADADACQADACAHABIAAACIguAAIAAgCQAGAAADgCQADgBABgDQACgCAAgFIABgMIAAhHIgBgNQAAgEgCgCIgFgEIgHgBIAAgCIAegDIAAA+IAHgGIAHgEQAHgDAJAAQAMAAAJAEQAFAEADAEQACAEAAAJIAAAbIAAAHIABAJQAAADADACQADACAIABIAAACg");
	this.shape_311.setTransform(-62.4,137.7);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FF0000").s().p("AgMAwQgDgDgCgDIgBgLIAAg2IgLAAIAAgCQAHgBAGgGIAFgHIAEgJIACgCIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QABAKACADQACADADABQADABAFABQAEgBAEgBIAGgHIACACQgEAFgGADQgGACgJAAQgMAAgFgDg");
	this.shape_312.setTransform(-70.4,139.2);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FF0000").s().p("AAHAoIAAgDQAGAAADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgOIgDgIQgDgEgEgBQgFgCgFAAQgFAAgFACQgFACgDADQgDAEgBAFIgBAQIAAAQIAAAHIABAJQABADACACQADACAIABIAAADIguAAIAAgDQAGAAADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgCIgEgEIgHgCIAAgCIAcgCIACAKIAAABQANgLARAAQANAAAIAFQAIAFAAAKIAAAmIABAJQABADADACQADACAHABIAAADg");
	this.shape_313.setTransform(-102.9,140.2);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOANgLQAPgOAUAAQAWAAAPAOQAMALAAAOQAAAPgMALQgOAOgXAAQgVAAgPgOgAgVgbQgIALAAAQQAAAPAIALQAJAMANAAQAGAAAEgCQAGgDAEgFQAEgFADgIQACgIAAgHQAAgGgCgIQgDgIgFgFQgIgKgMAAQgMAAgJAKg");
	this.shape_314.setTransform(-114.1,140.3);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FF0000").s().p("AgQAlQgJgEgGgHQgJgLAAgPQAAgTARgMQAMgIAOAAQAJAAAHACQAIADAEAFQAIAHAAAMIg9AAIAAAGQAAAHADAIQADAIAEAFQAFAFAHADQAFADAIAAQAGAAAFgCQAFgCAEgDQADgDADgHIACABQgCALgKAFQgIAFgPAAQgMAAgKgDgAgNgfQgHAHgBAKIAsAAQgBgJgDgFQgDgEgEgDQgFgCgFAAQgIAAgHAGg");
	this.shape_315.setTransform(-130.1,140.3);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgBABgDQABgCABgFIABgMIAAhHIgBgNQgBgEgBgCIgFgEIgHgBIAAgCIAdgDIAABlIABAHIAAAJQABADACACQADACAIABIAAACg");
	this.shape_316.setTransform(-137.5,137.7);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAIACQAHADAFAFQAHAHAAAMIg8AAIgBAGQAAAHACAIQADAIAFAFQAFAFAGADQAGADAJAAQAFAAAFgCQAFgCADgDQAEgDADgHIACABQgDALgIAFQgKAFgPAAQgMAAgIgDgAgNgfQgGAHgCAKIAsAAQgBgJgCgFQgDgEgFgDQgFgCgFAAQgIAAgHAGg");
	this.shape_317.setTransform(-145,140.3);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FF0000").s().p("AAFBAIAAgCIAGgBQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAgCgDgDIgCgCIgZgZIgGAGIAAAHIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgCQACgBACgDQABgCABgFIAAgMIAAhHIAAgNQgBgEgCgCIgEgEIgHgBIAAgCIAegDIAABaIATgSIAHgIQACgCAAgDQAAgEgFgCIgGgBIAAgCIAnAAIAAACQgIAAgEADQgFACgIAGIgEAEIgKALIAaAbIAEAEIAFAEIAIAHIAGADIAKACIAAACg");
	this.shape_318.setTransform(-154.8,137.7);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FF0000").s().p("AgNAwQgCgDgBgDIgBgLIAAg2IgMAAIAAgCQAHgBAGgGIAFgHIAFgJIAAgCIAEAAIAAAXIAaAAIAAAEIgaAAIAAA0QAAAKADADQACADADABQAEABADABQAFgBADgBIAHgHIABACQgCAFgHADQgGACgKAAQgLAAgGgDg");
	this.shape_319.setTransform(-175.7,139.2);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FF0000").s().p("AgjAoIAAgDQAGAAADgCQADgBABgDQACgCAAgFIABgLIAAgWIgBgNQAAgEgCgCIgFgEIgHgCIAAgCIAbgCQACAHAAAGQAEgFAEgEQAIgEALAAQAHgBAEADQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDAAQgEAAgCgCIgDgDQgEgEgFAAQgIABgDAHQgEAJAAAOIAAAQIABAHIAAAJQABADACACQADACAHABIAAADg");
	this.shape_320.setTransform(-182.6,140.2);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOAMgLQAQgOAUAAQAVAAAPAOQANALAAAOQAAAPgMALQgPAOgWAAQgVAAgPgOgAgUgbQgJALAAAQQAAAPAIALQAJAMAMAAQAHAAAEgCQAGgDAEgFQAEgFACgIQADgIAAgHQAAgGgDgIQgDgIgEgFQgJgKgLAAQgMAAgIAKg");
	this.shape_321.setTransform(-192,140.3);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FF0000").s().p("AAHBAIAAgCIAIgBIAEgDQACgDABgEIABgLIAAgdIgBgLIgEgFQgGgGgJAAQgZAAAAAiIAAAPIABAHIAAAJQABADADACQADACAHABIAAACIguAAIAAgCQAGAAADgCQADgBABgDQACgCAAgFIABgMIAAhHIgBgNQAAgEgCgCIgFgEIgHgBIAAgCIAegDIAAA+IAHgGIAHgEQAHgDAJAAQAMAAAJAEQAFAEADAEQACAEAAAJIAAAbIAAAHIABAJQAAADADACQADACAIABIAAACg");
	this.shape_322.setTransform(-203.1,137.7);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FF0000").s().p("AgMAmIgGgCIgCAAQgEAAgCADIgCAAIAAgaIACAAQADAJAEAGQAIAKALAAQAGAAAFgDQAFgEAAgHQAAgGgEgEIgFgEIgKgGQgNgFgFgEQgGgGAAgHQAAgJAGgGQAIgGAMAAQAEAAAFABIADACIADAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABgBIACAAIABAVIgCAAIgDgHQgBgDgCgCIgIgFQgEgCgDAAQgGAAgEADQgEAEAAAFQAAAFADAEQAEADAIADIAKAFQAKADAFAFQAFAGAAAIQAAAKgHAGQgJAHgMAAQgGAAgHgCg");
	this.shape_323.setTransform(-212.5,140.3);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgLAAgHgEQgHgFAAgJQAAgHAGgFQACgDAFgCIAMgDIANgDIAGgDIAFgFIABgIQAAgKgFgFQgCgDgCgBIgHgBQgEAAgEABQgCACgCAEIgDAFQgCAEgGAAQgDAAgCgCQgDgCAAgDQAAgEAHgEIAKgCIANgBIAMABQAHABAFADQAGADADAGIAAAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAEAAAGgDQADgCACgFQADgGABgMIAAgOIgMAGg");
	this.shape_324.setTransform(-225.8,140.3);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FF0000").s().p("AgMAmIgGgCIgCAAQgEAAgCADIgCAAIAAgaIACAAQADAJAEAGQAIAKALAAQAGAAAFgDQAFgEAAgHQAAgGgEgEIgFgEIgKgGQgNgFgFgEQgGgGAAgHQAAgJAGgGQAIgGAMAAQAEAAAFABIADACIADAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABgBIACAAIABAVIgCAAIgDgHQgBgDgCgCIgIgFQgEgCgDAAQgGAAgEADQgEAEAAAFQAAAFADAEQAEADAIADIAKAFQAKADAFAFQAFAGAAAIQAAAKgHAGQgJAHgMAAQgGAAgHgCg");
	this.shape_325.setTransform(-240,140.3);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgCACgDQACgCAAgEIAAgMIAAgWIAAgOQAAgDgDgCIgEgEIgHgBIAAgCIAdgDIAAAzIAAAHIABAJQABADADADQADACAHABIAAACgAgGgyQgCgBgBgEQABgDACgDQADgCADAAQAEAAADACQACADAAADQAAAEgCABQgDADgEAAQgEAAgCgDg");
	this.shape_326.setTransform(-246.4,137.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FF0000").s().p("AgMAmIgGgCIgCAAQgEAAgCADIgCAAIAAgaIACAAQADAJAEAGQAIAKALAAQAGAAAFgDQAFgEAAgHQAAgGgEgEIgFgEIgKgGQgNgFgFgEQgGgGAAgHQAAgJAGgGQAIgGAMAAQAEAAAFABIADACIADAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABgBIACAAIABAVIgCAAIgDgHQgBgDgCgCIgIgFQgEgCgDAAQgGAAgEADQgEAEAAAFQAAAFADAEQAEADAIADIAKAFQAKADAFAFQAFAGAAAIQAAAKgHAGQgJAHgMAAQgGAAgHgCg");
	this.shape_327.setTransform(-258.1,140.3);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FF0000").s().p("AAHAoIAAgDQAGAAADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgOIgDgIQgDgEgEgBQgFgCgFAAQgFAAgFACQgFACgDADQgDAEgBAFIgBAQIAAAQIAAAHIABAJQABADACACQADACAIABIAAADIguAAIAAgDQAGAAADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgCIgEgEIgHgCIAAgCIAcgCIACAKIAAABQANgLARAAQANAAAIAFQAIAFAAAKIAAAmIABAJQABADADACQADACAHABIAAADg");
	this.shape_328.setTransform(-267.5,140.2);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgLAAgHgEQgHgFAAgJQAAgHAGgFQACgDAEgCIANgDIANgDIAGgDIAFgFIABgIQAAgKgFgFQgCgDgCgBIgGgBQgFAAgEABQgCACgDAEIgCAFQgCAEgGAAQgDAAgCgCQgDgCAAgDQAAgEAHgEIAKgCIANgBIAMABQAHABAFADQAHADABAGIABAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAEAAAGgDQADgCACgFQADgGABgMIAAgOIgMAGg");
	this.shape_329.setTransform(-277.2,140.3);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FF0000").s().p("AgMAmIgGgCIgCAAQgEAAgCADIgCAAIAAgaIACAAQADAJAEAGQAIAKALAAQAGAAAFgDQAFgEAAgHQAAgGgEgEIgFgEIgKgGQgNgFgFgEQgGgGAAgHQAAgJAGgGQAIgGAMAAQAEAAAFABIADACIADAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABgBIACAAIABAVIgCAAIgDgHQgBgDgCgCIgIgFQgEgCgDAAQgGAAgEADQgEAEAAAFQAAAFADAEQAEADAIADIAKAFQAKADAFAFQAFAGAAAIQAAAKgHAGQgJAHgMAAQgGAAgHgCg");
	this.shape_330.setTransform(-2,116.4);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FF0000").s().p("AAHAoIAAgDQAGAAADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgOIgDgIQgDgEgEgBQgFgCgFAAQgFAAgFACQgFACgDADQgDAEgBAFIgBAQIAAAQIAAAHIABAJQABADACACQADACAIABIAAADIguAAIAAgDQAGAAADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgCIgEgEIgHgCIAAgCIAcgCIACAKIAAABQANgLARAAQANAAAIAFQAIAFAAAKIAAAmIABAJQABADADACQADACAHABIAAADg");
	this.shape_331.setTransform(-11.4,116.4);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAFgFQADgDAEgCIAMgDIAOgDIAHgDIAEgFIABgIQAAgKgEgFQgCgDgDgBIgHgBQgEAAgDABQgEACgCAEIgCAFQgCAEgFAAQgEAAgDgCQgCgCAAgDQAAgEAIgEIAKgCIALgBIANABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAGAAIAGgBIAEgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgKAFIgGAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAFAAAFgDQAEgCACgFQAEgGgBgMIAAgOIgLAGg");
	this.shape_332.setTransform(-21.1,116.4);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FF0000").s().p("AgZA9IgIgDIgDgBQgFABgCAEIgCAAIAAgmIADAAQAEAPAGAIQAMAQARAAQALgBAIgGQAIgIAAgKIgCgKQgCgFgDgDQgDgEgFgDIgQgJIgPgGIgJgGQgJgIAAgNQAAgIAEgGQADgHAGgGQAMgIAPgBIAIACIALADIAHACIAEAAQADABABgFIADAAIABAkIgDAAIgFgNQgCgFgDgEQgFgHgGgEQgGgCgIAAQgLAAgHAGIgEAHIgCAHQAAAQAXAKIAOAGQARAGAHAIQAJAJAAAOQAAAHgEAJQgGAKgKAGQgLAFgPAAQgNAAgMgEg");
	this.shape_333.setTransform(-31.7,114.1);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FF0000").s().p("AAHAoIAAgDQAGAAADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgOQgBgFgCgDQgDgEgEgBQgFgCgFAAQgFAAgFACQgFACgDADQgDAEgBAFIgBAQIAAAQIAAAHIABAJQABADACACQADACAIABIAAADIguAAIAAgDQAGAAADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgCQgCgDgCgBIgHgCIAAgCIAcgCIACAKIAAABQANgLARAAQANAAAIAFQAIAFAAAKIAAAmIABAJQABADADACQADACAHABIAAADg");
	this.shape_334.setTransform(248.3,212.2);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgBABgDQACgCAAgFIABgMIAAhHIgBgNQgBgEgCgCIgEgEIgHgBIAAgCIAdgDIAABlIAAAHIABAJQABADADACQADACAHABIAAACg");
	this.shape_335.setTransform(234.8,209.7);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgBABgDQABgCABgFIABgMIAAhHIgBgNQAAgEgDgCQgBgDgDgBIgHgBIAAgCIAdgDIAABlIABAHIAAAJQABADACACQADACAIABIAAACg");
	this.shape_336.setTransform(229.6,209.7);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQADgCABgDQACgCAAgEIAAgMIAAgWIAAgOQgBgDgCgCIgEgEIgHgBIAAgCIAdgDIAAAzIAAAHIABAJQABADADADQADACAHABIAAACgAgGgyQgCgBgBgEQABgDACgDQADgCADAAQAEAAACACQADADAAADQAAAEgDABQgCADgEAAQgEAAgCgDg");
	this.shape_337.setTransform(224.4,209.8);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FF0000").s().p("AgjAoIAAgDQAGAAADgCQADgBABgDQACgCAAgFIABgLIAAgWIgBgNQAAgEgCgCQgCgDgDgBIgHgCIAAgCIAbgCQACAHAAAGQAEgFAEgEQAIgEALAAQAHgBAEADQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDAAQgEAAgCgCIgDgDQgEgEgFAAQgIABgDAHQgEAJAAAOIAAAQIABAHIAAAJQABADACACQADACAHABIAAADg");
	this.shape_338.setTransform(202.1,212.2);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FF0000").s().p("AgjAoIAAgDQAGAAADgCQADgBABgDQACgCAAgFIABgLIAAgWIgBgNQAAgEgCgCQgCgDgDgBIgHgCIAAgCIAbgCQACAHAAAGQAEgFAEgEQAIgEALAAQAHgBAEADQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDAAQgEAAgCgCIgDgDQgEgEgFAAQgIABgDAHQgEAJAAAOIAAAQIABAHIAAAJQABADACACQADACAHABIAAADg");
	this.shape_339.setTransform(178.2,212.2);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAOAAQAJAAAIACQAGADAFAFQAIAHAAAMIg9AAIAAAGQAAAHACAIQADAIAFAFQAFAFAHADQAGADAHAAQAGAAAFgCQAFgCADgDQAEgDADgHIACABQgCALgKAFQgJAFgPAAQgLAAgJgDgAgNgfQgHAHgBAKIAsAAQAAgJgDgFQgDgEgFgDQgFgCgFAAQgIAAgHAGg");
	this.shape_340.setTransform(169.4,212.3);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAIACQAHADAFAFQAHAHAAAMIg8AAIgBAGQAAAHACAIQADAIAFAFQAFAFAGADQAGADAJAAQAFAAAFgCQAFgCADgDQAEgDADgHIACABQgDALgIAFQgKAFgOAAQgNAAgIgDgAgNgfQgGAHgCAKIAsAAQgBgJgCgFQgDgEgFgDQgFgCgFAAQgIAAgHAGg");
	this.shape_341.setTransform(107.5,212.3);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FF0000").s().p("AAFBAIAAgCIAGgBQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAgCgDgDIgCgCIgZgZIgGAGIAAAHIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgCQACgBACgDQABgCABgFIAAgMIAAhHIAAgNQgBgEgCgCIgEgEIgHgBIAAgCIAegDIAABaIATgSIAHgIQACgCAAgDQAAgEgFgCIgGgBIAAgCIAnAAIAAACQgIAAgEADQgFACgIAGIgEAEIgKALIAaAbIAEAEIAFAEIAIAHIAGADIAKACIAAACg");
	this.shape_342.setTransform(75.5,209.7);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FF0000").s().p("AgaAdQgMgKAAgRQAAgHAEgIQADgIAGgFQAGgHAJgDQAKgDAKAAQAPAAAIAGQAGADAAAFQAAACgCADQgDABgDAAQgHAAgDgIIgCgGIgDgCQgEgCgEAAQgGAAgFADQgEACgDAEQgDAEgCAGQgFAKAAAIQAAAIAEAHQADAIAGAFQAIAJAMAAQAKAAAHgGQADgDADgHIADABQgEAKgIAEQgHAEgOAAQgUAAgMgLg");
	this.shape_343.setTransform(65.4,212.3);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FF0000").s().p("AgiBCIAAhqQAAgKgDgFQgEgEgJAAIAAgDIAggDIAAA9QAFgFAEgCQAHgFAKAAQAQAAAMAJQAPAKAAAUQAAATgOAMQgMAKgTAAQgJAAgHgCIgGgDIgEAAQgFAAgEAHgAgHgKQgEADgDAFQgEAHAAARQAAAKABAIQABAJACADQADAFAEACQAGADAEAAQANAAAJgLQAIgKAAgRQAAgIgDgIQgCgIgFgEQgFgFgEgCQgFgCgFAAQgFAAgGADg");
	this.shape_344.setTransform(46,209.9);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FF0000").s().p("AAFBAIAAgCIAGgBQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAgCgDgDIgCgCIgZgZIgGAGIAAAHIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgCQACgBACgDQABgCABgFIAAgMIAAhHIAAgNQgBgEgCgCIgEgEIgHgBIAAgCIAegDIAABaIATgSIAHgIQACgCAAgDQAAgEgFgCIgGgBIAAgCIAnAAIAAACQgIAAgEADQgFACgIAGIgEAEIgKALIAaAbIAEAEIAFAEIAIAHIAGADIAKACIAAACg");
	this.shape_345.setTransform(5.1,209.7);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FF0000").s().p("AgaAdQgMgKAAgRQAAgHADgIQAEgIAFgFQAHgHAJgDQAKgDAJAAQAQAAAIAGQAFADABAFQAAACgDADQgCABgDAAQgHAAgDgIIgDgGIgCgCQgEgCgEAAQgGAAgFADQgEACgDAEQgEAEgBAGQgFAKAAAIQABAIADAHQAEAIAFAFQAIAJAMAAQAKAAAHgGQADgDADgHIADABQgFAKgHAEQgIAEgNAAQgUAAgMgLg");
	this.shape_346.setTransform(-5,212.3);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOAMgLQAQgOAUAAQAVAAAPAOQANALAAAOQAAAPgMALQgPAOgWAAQgWAAgOgOgAgUgbQgJALAAAQQAAAPAIALQAJAMAMAAQAGAAAGgCQAFgDAEgFQAEgFACgIQADgIAAgHQAAgGgDgIQgDgIgEgFQgJgKgLAAQgLAAgJAKg");
	this.shape_347.setTransform(-15,212.3);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FF0000").s().p("AAFBAIAAgCIAGgBQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAgCgDgDIgCgCIgZgZIgGAGIAAAHIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgCQACgBACgDQABgCABgFIAAgMIAAhHIAAgNQgBgEgCgCIgEgEIgHgBIAAgCIAegDIAABaIATgSIAHgIQACgCAAgDQAAgEgFgCIgGgBIAAgCIAnAAIAAACQgIAAgEADQgFACgIAGIgEAEIgKALIAaAbIAEAEIAFAEIAIAHIAGADIAKACIAAACg");
	this.shape_348.setTransform(-36.8,209.7);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FF0000").s().p("AgkA2QgDgCAAgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQACgBAEAAIAGABIAEACIACAAQAHAAAEgJIADgHQADgEgBgDQAAgDgDgIIgXgtIgCgHIgFgIIgDgDQgDgCgEgBIAAgCIAqAAIAAACIgHACQgEACAAAEQAAAEAEAJIARAmIAPggQAGgMAAgFQAAgEgDgDQgDgCgFgBIAAgCIAfAAIAAACIgHADIgFADIgJATIgeA/QgEAMgEADQgGAGgJAAQgFAAgEgCg");
	this.shape_349.setTransform(-52.2,213.9);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FF0000").s().p("AgiBCIAAhqQAAgKgDgFQgEgEgJAAIAAgDIAggDIAAA9QAEgFAFgCQAHgFALAAQAPAAAMAJQAPAKAAAUQAAATgOAMQgMAKgTAAQgJAAgHgCIgGgDIgEAAQgFAAgEAHgAgHgKQgEADgDAFQgEAHAAARQAAAKABAIQABAJACADQADAFAEACQAFADAFAAQANAAAJgLQAIgKAAgRQAAgIgDgIQgCgIgGgEQgDgFgGgCQgEgCgFAAQgGAAgFADg");
	this.shape_350.setTransform(-62.6,209.9);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FF0000").s().p("AglAwQgGgFAAgIQAAgGAEgEQAFgEAGAAQAFAAADACQADACAAAFIAAABIgCAAIgEgEIgEgBQgEAAgDADQgDADAAAFQAAAHAIAFQAJAFANAAQANAAAJgFQAIgGAAgIQAAgHgFgDQgGgEgLAAIgPAAQgLAAgGgEQgGgFAAgGQAAgGAGgDIANgEQgJgEgFgGQgFgGAAgHQAAgJAIgHQAFgFAGgCQAGgCAHAAQAJAAAKAGQAFgEAEgBQAEgBAFAAQAFAAADABQAEADAAADQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgEAAgCgDIgDgDQgCgCgDAAQgEAAgFAEQAJAJAAAJQAAAMgMAHQgGAEgHABIgNABQgPABAAAFQAAAGANAAIAQAAQAKAAAGACQAGABAFADQAJAGAAALQAAAMgLAGQgLAHgUAAQgXAAgJgIgAgRgvQgCADgBAFQgCAFAAAFQAAAKAFAGQAFAGAHAAQAHAAAEgGQAEgGAAgLQAAgMgFgGQgEgFgGAAQgHAAgFAGg");
	this.shape_351.setTransform(-77.3,213.9);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FF0000").s().p("AAUA4QgIAFgGABQgHACgIAAQgPAAgMgIQgHgFgDgJQgEgHgBgKQABgKAEgJQAEgHAHgGQAMgIAQAAQAIAAAFABQAGADAHAFIAAgiQAAgKgDgEQgEgFgJAAIAAgCIAggEIAABpQABALADAEQAEAFAJgBIAAADIgfADIgBgJgAgWgEQgFAFgCAHQgDAIgBAHQAAAJADAHQADAIAFAFQAHAKAMAAQAEAAAFgDQAFgCADgEQADgFABgHQABgGAAgMQAAgNgBgGQgBgGgDgDQgDgEgFgCQgFgCgDAAQgMAAgIAJg");
	this.shape_352.setTransform(-103.8,209.9);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FF0000").s().p("AAWAcQgNAMgQAAQgNAAgJgGQgHgFgBgKIAAgfIAAgHIgBgJQAAgDgCgCQgEgCgHgCIAAgCIAeAAIAAAuIABAOQABAFACADQACADAEACQAFACAFAAQAFAAAFgCQAFgCADgEQAEgDABgFIAAgPIAAgRIAAgHIAAgJQgCgDgCgCQgCgCgJgCIAAgCIAfAAIAAAxIABANQAAAEACACQACADADABIAGACIAAACIgcADQgBgGgBgGg");
	this.shape_353.setTransform(-115.2,212.3);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgDQACgCAAgFIAAgMIAAhHIAAgNQAAgEgCgCIgFgEIgHgBIAAgCIAdgDIAABlIAAAHIABAJQABADACACQAEACAHABIAAACg");
	this.shape_354.setTransform(-123.2,209.7);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FF0000").s().p("AgaAdQgMgKAAgRQABgHADgIQADgIAGgFQAGgHAKgDQAIgDALAAQAPAAAIAGQAGADgBAFQAAACgBADQgDABgDAAQgHAAgDgIIgCgGIgDgCQgEgCgEAAQgGAAgFADQgEACgDAEQgDAEgCAGQgEAKgBAIQAAAIAEAHQAEAIAFAFQAIAJAMAAQAKAAAHgGQADgDADgHIACABQgDAKgIAEQgHAEgOAAQgUAAgMgLg");
	this.shape_355.setTransform(-130.3,212.3);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FF0000").s().p("AAHAoIAAgDQAGAAADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgOIgDgIQgDgEgEgBQgFgCgFAAQgFAAgFACQgFACgDADQgDAEgBAFIgBAQIAAAQIAAAHIABAJQABADACACQADACAIABIAAADIguAAIAAgDQAGAAADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgCIgEgEIgHgCIAAgCIAcgCQACAFAAAFIAAABQANgLARAAQANAAAIAFQAIAFAAAKIAAAmIABAJQABADADACQADACAHABIAAADg");
	this.shape_356.setTransform(-140.3,212.2);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQADgCABgDQACgCAAgEIABgMIAAgWIgBgOQgBgDgCgCIgEgEIgHgBIAAgCIAdgDIAAAzIAAAHIABAJQABADADADQADACAHABIAAACgAgGgyQgDgBAAgEQAAgDADgDQADgCADAAQAEAAACACQADADAAADQAAAEgDABQgCADgEAAQgDAAgDgDg");
	this.shape_357.setTransform(-148.6,209.8);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FF0000").s().p("AgPAWQAHgCAFgDQADgDACgEQAEgHABgFIgFABQgFAAgDgDQgEgDAAgFQAAgEAEgEQADgDAEAAQAHAAAEAEQADAFABAHQgBAHgDAGQgEAHgHAFQgGAEgIACg");
	this.shape_358.setTransform(-159.1,216.5);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FF0000").s().p("AgUBNIABgEQAIgMAEgJQAEgJADgKIACgRIABgQIgCgSQgBgQgEgLQgFgLgKgRIgBgCIADAAQAPAOAIAPQAHALAEANQAEALAAALQAAALgEANQgEANgHAKIgJAOIgOAQg");
	this.shape_359.setTransform(-165.5,210.8);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FF0000").s().p("AAFBAIAAgCIAGgBQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAgCgDgDIgCgCIgZgZIgGAGIAAAHIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgCQACgBACgDQABgCABgFIAAgMIAAhHIAAgNQgBgEgCgCIgEgEIgHgBIAAgCIAegDIAABaIATgSIAHgIQACgCAAgDQAAgEgFgCIgGgBIAAgCIAnAAIAAACQgIAAgEADQgFACgIAGIgEAEIgKALIAaAbIAEAEIAFAEIAIAHIAGADIAKACIAAACg");
	this.shape_360.setTransform(-180.5,209.7);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FF0000").s().p("AgaAdQgMgKAAgRQAAgHAEgIQADgIAGgFQAGgHAJgDQAKgDAKAAQAPAAAIAGQAGADAAAFQAAACgCADQgDABgDAAQgHAAgDgIIgCgGIgDgCQgEgCgEAAQgGAAgFADQgEACgDAEQgDAEgCAGQgFAKAAAIQAAAIAEAHQADAIAGAFQAIAJAMAAQAKAAAHgGQADgDADgHIADABQgEAKgIAEQgHAEgOAAQgUAAgMgLg");
	this.shape_361.setTransform(-190.7,212.3);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgBABgDQACgCAAgFIABgMIAAhHIgBgNQgBgEgCgCIgEgEIgHgBIAAgCIAdgDIAABlIAAAHIABAJQABADADACQADACAHABIAAACg");
	this.shape_362.setTransform(-208.9,209.7);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FF0000").s().p("AgiBCIAAhqQAAgKgEgFQgDgEgJAAIAAgDIAggDIAAA9QAEgFAEgCQAJgFAKAAQAQAAAMAJQAOAKAAAUQAAATgOAMQgMAKgTAAQgJAAgHgCIgGgDIgEAAQgFAAgFAHgAgGgKQgFADgDAFQgEAHAAARQAAAKACAIQABAJABADQADAFAFACQAFADAEAAQANAAAIgLQAJgKAAgRQAAgIgDgIQgDgIgFgEQgEgFgFgCQgEgCgFAAQgGAAgEADg");
	this.shape_363.setTransform(-217.2,209.9);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FF0000").s().p("AgaA+QgCgCgBgCQABgDACgEIADgEIA2hcIgsAAIgJABIgGABIgEAGQgDACgDAHIgBABIgCAAIAKglIACAAQAAABAAABQABAAAAABQAAAAAAABQABAAAAAAIAHABIA+AAIgyBwIgCAFQgCAEgCABQgCABgEAAQgDAAgDgCg");
	this.shape_364.setTransform(-233.2,209.9);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FF0000").s().p("AASBNQgPgPgIgPQgHgLgEgMQgEgNAAgLQAAgJAEgNQAEgNAHgLIAJgPIAOgOIADAAIgBACQgIANgEAJQgEAKgDAKIgBAQIgCAPIACASQABAQAEAMQAFAMAKAPIABAEg");
	this.shape_365.setTransform(-240.9,210.8);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FF0000").s().p("AAWAcQgNAMgRAAQgNAAgHgGQgJgFABgKIAAgfIAAgHIgBgJQgBgDgDgCQgCgCgJgCIAAgCIAgAAIAAAuIAAAOQABAFACADQADADAEACQAEACAGAAQAEAAAFgCQAGgCADgEQACgDABgFIABgPIAAgRIAAgHIgBgJQAAgDgDgCQgDgCgHgCIAAgCIAeAAIAAAxIABANQABAEABACQACADACABIAIACIAAACIgdADQgCgGAAgGg");
	this.shape_366.setTransform(-263.3,212.3);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQADgCABgDQABgCABgEIABgMIAAgWIgBgOQgBgDgCgCQgBgCgDgCIgHgBIAAgCIAdgDIAAAzIAAAHIABAJQABADADADQACACAIABIAAACgAgGgyQgDgBAAgEQAAgDADgDQADgCADAAQAEAAACACQADADABADQgBAEgDABQgCADgEAAQgEAAgCgDg");
	this.shape_367.setTransform(-271.3,209.8);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FF0000").s().p("AAUA4QgIAFgGABQgGACgJAAQgPAAgMgIQgHgFgDgJQgEgHgBgKQABgKAEgJQAEgHAHgGQANgIAPAAQAIAAAFABQAGADAHAFIAAgiQAAgKgDgEQgEgFgJAAIAAgCIAggEIAABpQABALADAEQAEAFAJgBIAAADIgfADIgBgJgAgWgEQgFAFgCAHQgEAIAAAHQAAAJADAHQADAIAEAFQAIAKAMAAQAEAAAFgDQAFgCADgEQADgFABgHQABgGAAgMQAAgNgBgGQgBgGgDgDQgDgEgFgCQgEgCgEAAQgMAAgIAJg");
	this.shape_368.setTransform(-279.4,209.9);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgLAAgHgEQgHgFAAgJQAAgHAGgFQACgDAFgCIAMgDIANgDIAGgDIAFgFIABgIQAAgKgFgFQgCgDgCgBIgHgBQgEAAgEABQgCACgCAEIgDAFQgCAEgGAAQgDAAgCgCQgDgCAAgDQAAgEAHgEIAKgCIANgBIAMABQAHABAFADQAGADADAGIAAAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAEAAAGgDQADgCACgFQADgGABgMIAAgOIgMAGg");
	this.shape_369.setTransform(-289.3,212.3);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FF0000").s().p("AgNAvQgCgCgBgDIgBgLIAAg3IgMAAIAAgBQAHgCAGgFIAFgHIAFgIIABgEIADAAIAAAYIAaAAIAAADIgaAAIAAA1QAAAJADAFQACACADABQAEABADAAQAFAAAEgBIAGgHIACACQgDAGgHACQgGACgKABQgLAAgGgFg");
	this.shape_370.setTransform(264.7,187.3);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgLAAgHgEQgHgFAAgJQAAgHAGgFQACgDAFgCIAMgDIANgDIAGgDIAFgFIABgIQAAgKgFgFQgCgDgCgBIgHgBQgEAAgEABQgCACgCAEIgDAFQgCAEgGAAQgDAAgCgCQgDgCAAgDQAAgEAHgEIAKgCIANgBIAMABQAHABAFADQAGADADAGIAAAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAEAAAGgDQADgCACgFQADgGABgMIAAgOIgMAGg");
	this.shape_371.setTransform(249.8,188.4);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FF0000").s().p("AgNAvQgCgCgBgDIgBgLIAAg3IgMAAIAAgBQAHgCAGgFIAFgHIAFgIIABgEIADAAIAAAYIAaAAIAAADIgaAAIAAA1QAAAJADAFQACACADABQAEABADAAQAFAAAEgBIAGgHIACACQgDAGgHACQgGACgKABQgLAAgGgFg");
	this.shape_372.setTransform(199.9,187.3);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FF0000").s().p("AgkBAIAAgBQAGgBADgBQACgCACgDQABgCABgFIAAgMIAAguIgPAAIAAgEIAPAAIAAgWQAAgIACgEQADgFAGgEQAFgDAHgCQAIgCAJAAQAIgBAFADQAFACAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAIgFgBIgEgEQgDgFgCgBQgCgBgDgBIgIACIgEAEQgCACgBAEIgBANIAAAXIAUAAIAAAEIgUAAIAAAvIAAAHIABAJQABADACACQACACAIACIAAABg");
	this.shape_373.setTransform(189.3,185.8);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FF0000").s().p("AgNAvQgCgCgBgDIgCgLIAAg3IgLAAIAAgBQAHgCAGgFIAFgHIAFgIIABgEIADAAIAAAYIAaAAIAAADIgaAAIAAA1QABAJACAFQACACADABQADABAEAAQAFAAAEgBIAGgHIACACQgDAGgHACQgGACgKABQgLAAgGgFg");
	this.shape_374.setTransform(166.5,187.3);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FF0000").s().p("AAXAcQgNAMgSAAQgNAAgHgGQgJgFAAgKIAAgfIAAgHIAAgJQgBgDgCgCQgEgCgIgCIAAgCIAgAAIAAAuIAAAOQABAFACADQADADAEACQAEACAFAAQAFAAAFgCQAFgCADgEQADgDACgFIABgPIAAgRIgBgHIAAgJIgEgFQgDgCgIgCIAAgCIAfAAIAAAxIABANQAAAEACACQACADACABIAHACIAAACIgcADQgBgGAAgGg");
	this.shape_375.setTransform(157.7,188.4);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FF0000").s().p("AgNAvQgDgCAAgDIgBgLIAAg3IgLAAIAAgBQAGgCAGgFIAGgHIADgIIABgEIAFAAIAAAYIAZAAIAAADIgZAAIAAA1QAAAJACAFQACACAEABQADABADAAQAFAAADgBIAHgHIABACQgDAGgGACQgGACgKABQgLAAgGgFg");
	this.shape_376.setTransform(125.9,187.3);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FF0000").s().p("AgQAlQgJgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAHACQAHADAGAFQAHAHAAAMIg8AAIgBAGQAAAHADAIQACAIAFAFQAFAFAGADQAHADAIAAQAFAAAFgCQAFgCAEgDQADgDADgHIACABQgDALgIAFQgKAFgOAAQgMAAgKgDgAgNgfQgHAHgBAKIAsAAQAAgJgEgFQgDgEgEgDQgFgCgFAAQgIAAgHAGg");
	this.shape_377.setTransform(117.7,188.4);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FF0000").s().p("AglAwQgGgFAAgIQAAgGAEgEQAFgEAGAAQAFAAADACQADACAAAFIAAABIgCAAIgEgEIgEgBQgEAAgDADQgDADAAAFQAAAHAIAFQAJAFANAAQANAAAJgFQAIgGAAgIQAAgHgFgDQgGgEgLAAIgPAAQgLAAgGgEQgGgFAAgGQAAgGAGgDIANgEQgJgEgFgGQgFgGAAgHQAAgJAIgHQAFgFAGgCQAGgCAHAAQAJAAAKAGQAFgEAEgBQAEgBAFAAQAFAAADABQAEADAAADQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQgEAAgCgDIgDgDQgCgCgDAAQgEAAgFAEQAJAJAAAJQAAAMgMAHQgGAEgHABIgNABQgPABAAAFQAAAGANAAIAQAAQAKAAAGACQAGABAFADQAJAGAAALQAAAMgLAGQgLAHgUAAQgXAAgJgIgAgRgvQgCADgBAFQgCAFAAAFQAAAKAFAGQAFAGAHAAQAHAAAEgGQAEgGAAgLQAAgMgFgGQgEgFgGAAQgHAAgFAGg");
	this.shape_378.setTransform(108.9,190);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FF0000").s().p("AgjAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIABgMIAAgVIgBgNQAAgEgCgDIgFgDIgHgBIAAgCIAbgEQACAIAAAHQAEgHAEgCQAIgFALgBQAHAAAEADQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDABQgEgBgCgCIgDgDQgEgDgFAAQgIgBgDAJQgEAHAAAPIAAAQIABAHIAAAJQABADACACQADACAHACIAAABg");
	this.shape_379.setTransform(95.2,188.3);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAFgFQADgDAFgCIALgDIAOgDIAGgDIAFgFIABgIQAAgKgEgFQgDgDgCgBIgHgBQgEAAgEABQgCACgCAEIgDAFQgCAEgFAAQgEAAgDgCQgCgCAAgDQAAgEAIgEIAKgCIALgBIANABQAHABAFADQAHADACAGIAAAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgKAFIgGAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAFAAAFgDQADgCACgFQADgGAAgMIAAgOIgLAGg");
	this.shape_380.setTransform(68.7,188.4);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FF0000").s().p("AgyA6IAAgCQAGgBADgBQADgBACgEIABgGIAAgMIAAg/QAAgKgDgEQgEgFgJAAIAAgCIAfgEIABAIIAAACQAIgFAGgBQAGgCAIAAQAQAAALAIQAIAFADAIQAFAIAAAKQAAAKgFAHQgEAJgHAGQgNAIgQAAQgHAAgGgCQgFgCgHgFIAAARIAAAGIABAJQAAADACACQADADAIABIAAACgAgFgyQgFACgDAEQgDAEgBAHIgBATIABASQABAGADAEQADAEAFACQAEACAEAAQAMAAAHgJQAGgGACgHQADgHAAgIQAAgIgDgHQgCgIgEgFQgJgKgLAAQgEAAgFADg");
	this.shape_381.setTransform(52.6,190);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FF0000").s().p("AgNAvQgCgCgBgDIgBgLIAAg3IgMAAIAAgBQAHgCAGgFIAFgHIAFgIIABgEIADAAIAAAYIAaAAIAAADIgaAAIAAA1QAAAJADAFQACACADABQAEABADAAQAFAAADgBIAHgHIACACQgDAGgHACQgGACgKABQgLAAgGgFg");
	this.shape_382.setTransform(18.6,187.3);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FF0000").s().p("AgkBAIAAgBQAGgBADgBQACgCACgDQABgCABgFIAAgMIAAguIgPAAIAAgEIAPAAIAAgWQAAgIACgEQADgFAGgEQAFgDAHgCQAIgCAJAAQAIgBAFADQAFACAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAIgFgBIgEgEQgDgFgCgBQgCgBgDgBIgIACIgEAEQgCACgBAEIgBANIAAAXIAUAAIAAAEIgUAAIAAAvIAAAHIABAJQABADACACQACACAIACIAAABg");
	this.shape_383.setTransform(7.9,185.8);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgDQABgCABgFIAAgMIAAgXIAAgMQAAgDgCgDIgFgDIgHgCIAAgCIAdgDIAAA0IABAGIAAAJQABAEACABQAEADAHABIAAACgAgGgxQgDgCABgEQgBgDADgDQADgCADAAQAEAAADACQADADAAADQAAAEgDACQgDACgEAAQgDAAgDgCg");
	this.shape_384.setTransform(1.3,185.9);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FF0000").s().p("AAUA4QgIAEgGACQgGACgJAAQgPAAgMgIQgHgGgDgHQgFgJAAgJQAAgKAFgIQAEgIAHgGQANgJAPAAQAIAAAFADQAGACAHAEIAAghQAAgKgDgFQgEgEgJAAIAAgCIAggDIAABpQABAJADAFQAEAEAJABIAAABIgfAEIgBgJgAgWgEQgFAFgCAHQgEAHAAAJQAAAHADAIQADAIAEAFQAIAJAMAAQAEAAAFgCQAFgDADgDQADgFABgGQACgHgBgMQABgNgCgGQgBgFgDgFQgDgDgFgCQgEgCgEAAQgMAAgIAJg");
	this.shape_385.setTransform(-12.1,186);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FF0000").s().p("AgMAvQgDgCgCgDIgBgLIAAg3IgLAAIAAgBQAHgCAGgFIAFgHIAEgIIACgEIADAAIAAAYIAaAAIAAADIgaAAIAAA1QABAJACAFQACACADABQADABAFAAQAEAAAEgBIAGgHIACACQgEAGgGACQgGACgJABQgMAAgFgFg");
	this.shape_386.setTransform(-29.9,187.3);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgDQACgCAAgFIAAgMIAAhHIAAgNQgBgEgCgCIgEgEIgHgBIAAgCIAdgDIAABlIAAAHIABAJQABADADACQADACAHABIAAACg");
	this.shape_387.setTransform(-35.7,185.8);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FF0000").s().p("AgiBCIAAhqQAAgKgEgFQgDgEgJAAIAAgDIAggDIAAA9QAEgFAEgCQAJgFAKAAQAQAAAMAJQAOAKAAAUQAAATgOAMQgMAKgTAAQgJAAgHgCIgGgDIgEAAQgFAAgFAHgAgGgKQgFADgDAFQgEAHAAARQAAAKACAIQABAJABADQADAFAFACQAFADAEAAQANAAAIgLQAJgKAAgRQAAgIgDgIQgDgIgFgEQgEgFgFgCQgEgCgFAAQgGAAgEADg");
	this.shape_388.setTransform(-79.5,186);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgMAAgGgEQgHgFAAgJQAAgHAGgFQADgDADgCIANgDIANgDIAGgDIAFgFIABgIQAAgKgFgFQgCgDgCgBIgGgBQgFAAgDABQgEACgCAEIgCAFQgCAEgGAAQgDAAgCgCQgDgCAAgDQAAgEAHgEIAKgCIANgBIAMABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAGAAIAFgBIAFgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAFAAAGgDQADgCACgFQAEgGAAgMIAAgOIgMAGg");
	this.shape_389.setTransform(-105.4,188.4);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FF0000").s().p("AgaAdQgMgKABgRQAAgHADgIQADgIAGgFQAGgHAKgDQAIgDALAAQAOAAAKAGQAEADAAAFQAAACgBADQgDABgDAAQgHAAgDgIIgCgGIgDgCQgDgCgFAAQgGAAgFADQgEACgDAEQgDAEgDAGQgDAKAAAIQAAAIADAHQAEAIAFAFQAIAJAMAAQAKAAAHgGQADgDADgHIACABQgDAKgIAEQgHAEgNAAQgVAAgMgLg");
	this.shape_390.setTransform(-114.9,188.4);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOAMgLQAQgOAUAAQAVAAAPAOQANALAAAOQAAAPgMALQgPAOgWAAQgWAAgOgOgAgUgbQgJALAAAQQAAAPAIALQAJAMAMAAQAGAAAGgCQAFgDAEgFQAEgFACgIQADgIAAgHQAAgGgDgIQgDgIgEgFQgJgKgLAAQgLAAgJAKg");
	this.shape_391.setTransform(-141.5,188.4);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgBABgDQABgCABgFIABgMIAAgXIgBgMQgBgDgBgDIgFgDIgHgCIAAgCIAdgDIAAA0IABAGIAAAJQABAEACABQADADAIABIAAACgAgGgxQgCgCAAgEQAAgDACgDQADgCADAAQAEAAACACQAEADAAADQAAAEgEACQgCACgEAAQgDAAgDgCg");
	this.shape_392.setTransform(-149.6,185.9);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FF0000").s().p("AgNAvQgCgCgBgDIgBgLIAAg3IgMAAIAAgBQAHgCAGgFIAFgHIAFgIIAAgEIAEAAIAAAYIAaAAIAAADIgaAAIAAA1QAAAJADAFQACACADABQAEABADAAQAFAAADgBIAHgHIABACQgCAGgHACQgGACgKABQgLAAgGgFg");
	this.shape_393.setTransform(-154.6,187.3);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgLAAgHgEQgHgFAAgJQAAgHAGgFQACgDAFgCIAMgDIANgDIAGgDIAFgFIABgIQAAgKgFgFQgCgDgCgBIgHgBQgEAAgEABQgCACgCAEIgDAFQgCAEgGAAQgDAAgCgCQgDgCAAgDQAAgEAHgEIAKgCIANgBIAMABQAHABAFADQAGADADAGIAAAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAEAAAGgDQADgCACgFQADgGABgMIAAgOIgMAGg");
	this.shape_394.setTransform(-161.9,188.4);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FF0000").s().p("AgNAvQgCgCgBgDIgBgLIAAg3IgMAAIAAgBQAHgCAGgFIAFgHIAFgIIABgEIADAAIAAAYIAaAAIAAADIgaAAIAAA1QAAAJADAFQACACADABQAEABADAAQAFAAADgBIAHgHIACACQgDAGgHACQgGACgKABQgLAAgGgFg");
	this.shape_395.setTransform(-191.6,187.3);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FF0000").s().p("AgQAlQgJgEgGgHQgJgLAAgPQAAgTARgMQAMgIAOAAQAJAAAHACQAHADAGAFQAHAHAAAMIg8AAIgBAGQAAAHADAIQADAIAEAFQAFAFAHADQAFADAJAAQAFAAAFgCQAFgCAEgDQADgDADgHIACABQgCALgKAFQgIAFgPAAQgMAAgKgDgAgNgfQgGAHgCAKIAsAAQgBgJgDgFQgDgEgEgDQgFgCgFAAQgIAAgHAGg");
	this.shape_396.setTransform(-199.7,188.4);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FF0000").s().p("AAUA4QgIAEgGACQgHACgIAAQgPAAgMgIQgHgGgEgHQgDgJAAgJQAAgKADgIQAFgIAHgGQAMgJAQAAQAIAAAFADQAGACAHAEIAAghQAAgKgEgFQgDgEgJAAIAAgCIAggDIAABpQABAJADAFQAEAEAIABIAAABIgeAEIgBgJgAgWgEQgFAFgCAHQgDAHAAAJQAAAHACAIQADAIAFAFQAHAJAMAAQAEAAAFgCQAFgDADgDQADgFABgGQABgHAAgMQAAgNgBgGQgBgFgDgFQgDgDgFgCQgFgCgDAAQgMAAgIAJg");
	this.shape_397.setTransform(-209.9,186);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FF0000").s().p("AgBAXIgEgcIgBgHQAAgEACgDQABgDADAAQADAAACADQACADAAAEIgBAHIgFAcg");
	this.shape_398.setTransform(-230.1,181.9);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FF0000").s().p("AgjAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIABgMIAAgVIgBgNQAAgEgCgDIgFgDIgHgBIAAgCIAbgEQACAIAAAHQAEgHAEgCQAIgFALgBQAHAAAEADQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDABQgEgBgCgCIgDgDQgEgDgFAAQgIgBgDAJQgEAHAAAPIAAAQIABAHIAAAJQABADACACQADACAHACIAAABg");
	this.shape_399.setTransform(-235.2,188.3);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FF0000").s().p("AgyA6IAAgCQAGgBADgBQADgBABgEIACgGIAAgMIAAg/QABgKgEgEQgEgFgJAAIAAgCIAfgEIABAIIAAACQAIgFAHgBQAGgCAHAAQAQAAALAIQAIAFADAIQAFAIAAAKQAAAKgFAHQgEAJgIAGQgLAIgRAAQgHAAgGgCQgFgCgIgFIAAARIAAAGIABAJQABADACACQAEADAIABIAAACgAgFgyQgFACgDAEQgDAEgCAHIgBATIABASQACAGADAEQADAEAFACQAEACAFAAQAKAAAJgJQAFgGADgHQACgHAAgIQAAgIgCgHQgDgIgEgFQgJgKgKAAQgFAAgFADg");
	this.shape_400.setTransform(-254.5,190);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#FF0000").s().p("AgjAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIABgMIAAgVIgBgNQAAgEgCgDIgFgDIgHgBIAAgCIAbgEQACAIAAAHQAEgHAEgCQAIgFALgBQAHAAAEADQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDABQgEgBgCgCIgDgDQgEgDgFAAQgIgBgDAJQgEAHAAAPIAAAQIABAHIAAAJQABADACACQADACAHACIAAABg");
	this.shape_401.setTransform(-282.9,188.3);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#FF0000").s().p("AgaAdQgLgKAAgRQAAgHACgIQAEgIAFgFQAHgHAKgDQAIgDAKAAQAPAAAKAGQAEADAAAFQAAACgCADQgCABgDAAQgHAAgDgIIgDgGIgCgCQgDgCgFAAQgGAAgEADQgFACgDAEQgEAEgCAGQgDAKAAAIQgBAIAEAHQADAIAGAFQAIAJAMAAQAKAAAHgGQADgDADgHIACABQgDAKgIAEQgHAEgNAAQgVAAgMgLg");
	this.shape_402.setTransform(-291.2,188.4);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FF0000").s().p("AAHA+IAAgBQAKgBAEgCQAGgEAAgGQAAgEgDgHIgBgDIgKgWIgtAAIgGANIgDAGQgEAJgBAGQAAAEACACQACADADADQAEACAGABIAAABIguAAIAAgBQAFgBAEgCQAFgCAEgFIAGgJIAJgSIAmhWIAEAAIAuBgIAIAQQADAEAEACIAGADIAKACIAAABgAgfAIIAqAAIgWgug");
	this.shape_403.setTransform(261.4,162.2);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#FF0000").s().p("AAHAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIABgMIAAgSIgBgPIgDgHQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDAEgBAEIgBAPIAAARIAAAHIABAJQABADACACQADACAIACIAAABIguAAIAAgBQAGgBADgBQACgCACgDQABgCABgFIAAgMIAAgVIAAgNQgBgEgCgDIgEgDIgHgBIAAgCIAcgEIACAKIAAACQANgMARAAQANAAAIAGQAIAFAAAKIAAAmIABAJQABADADACQADACAHACIAAABg");
	this.shape_404.setTransform(218.9,164.5);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOAMgLQAQgOAUAAQAVAAAPAOQANALAAAOQAAAPgMALQgOAOgXAAQgWAAgOgOgAgVgbQgIALAAAQQAAAPAIALQAJAMAMAAQAGAAAGgCQAFgDAEgFQAEgFACgIQADgIAAgHQAAgGgDgIQgDgIgEgFQgJgKgLAAQgLAAgKAKg");
	this.shape_405.setTransform(207.8,164.5);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#FF0000").s().p("AgaAdQgLgKgBgRQAAgHADgIQAEgIAFgFQAHgHAJgDQAKgDAJAAQAPAAAJAGQAFADABAFQgBACgCADQgCABgDAAQgHAAgDgIIgDgGIgCgCQgEgCgEAAQgGAAgEADQgFACgDAEQgDAEgDAGQgEAKAAAIQABAIADAHQADAIAGAFQAIAJAMAAQAKAAAHgGQADgDADgHIADABQgFAKgHAEQgIAEgNAAQgUAAgMgLg");
	this.shape_406.setTransform(197.8,164.5);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#FF0000").s().p("AgXA+QgIgDgFgDQgEgEgCgEQgCgDAAgFQAAgDADgEQACgCAFAAQADAAACACQACACAAAEIAAADIAAAEQAAAHAFAEQAFAFAJAAQAOAAAJgMQAFgGADgJQADgJAAgJQAAgOgGgHQgGgJgLAAQgGABgFAEQgGAFgDAHIgDAAIAThCQANADANAAIAMgBIAIgCIgCAHQgCADgDACQgFAEgMAAIgWgCIgMAoQAGgEAEgBQAEgBAGgBQAQAAALAKQAFAFADAFQACAGAAAHQAAAJgFAKQgHAMgMAHQgMAIgPAAQgIAAgIgCg");
	this.shape_407.setTransform(165.1,162.2);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#FF0000").s().p("AgdA+IAAgBIAKgCQAEgBADgDQACgCABgDIABgMIAAhWIgIABIgNgBIAAgCIADAAQAIAAAHgDQAHgCAIgFIACgCIADAAIAABkQAAAHABAFQABAEADACQAFAEALABIAAABg");
	this.shape_408.setTransform(149.6,162.2);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#FF0000").s().p("AgjAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIABgMIAAgVIgBgNQAAgEgCgDIgFgDIgHgBIAAgCIAbgEQACAIAAAHQAEgHAEgCQAIgFALgBQAHAAAEADQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDABQgEgBgCgCIgDgDQgEgDgFAAQgIgBgDAJQgEAHAAAPIAAAQIABAHIAAAJQABADACACQADACAHACIAAABg");
	this.shape_409.setTransform(135.3,164.5);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAIACQAGADAFAFQAIAHAAAMIg9AAIAAAGQAAAHACAIQAEAIAEAFQAFAFAGADQAHADAHAAQAGAAAFgCQAFgCADgDQAEgDADgHIACABQgDALgIAFQgKAFgPAAQgMAAgIgDgAgNgfQgHAHgBAKIAsAAQAAgJgDgFQgDgEgFgDQgFgCgFAAQgIAAgHAGg");
	this.shape_410.setTransform(126.6,164.5);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#FF0000").s().p("AgMAvQgDgCgCgDIgBgLIAAg3IgLAAIAAgBQAHgCAGgFIAFgHIAEgIIACgEIADAAIAAAYIAaAAIAAADIgaAAIAAA1QABAJACAFQACACAEABQACABAFAAQAEAAAEgBIAGgHIACACQgEAGgGACQgGACgJABQgMAAgFgFg");
	this.shape_411.setTransform(119.5,163.4);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FF0000").s().p("AgkBAIAAgBQAGgBADgBQACgCACgDQABgCABgFIAAgMIAAguIgPAAIAAgEIAPAAIAAgWQAAgIACgEQADgFAGgEQAFgDAHgDQAIgBAJAAQAIgBAFADQAFACAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAIgFgBIgEgEQgDgFgCgBQgCgBgDgBIgIACIgEAEQgCACgBAEIgBANIAAAXIAUAAIAAAEIgUAAIAAAvIAAAHIABAJQABADACACQACACAIACIAAABg");
	this.shape_412.setTransform(114.3,162);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FF0000").s().p("AAUA4QgIAEgGACQgGACgIAAQgQAAgMgIQgHgGgDgHQgFgJAAgJQAAgKAFgIQAEgIAHgGQANgJAPAAQAIAAAFADQAGACAHAEIAAghQAAgKgDgFQgEgEgJAAIAAgCIAhgDIAABpQAAAJADAFQAEAEAJABIAAACIgfADIgBgJgAgWgEQgFAFgCAHQgEAHAAAJQAAAHADAIQADAIAEAFQAIAKAMAAQAEgBAFgCQAFgDADgEQADgEABgGQACgHgBgMQABgNgCgGQgBgFgDgFQgDgDgFgCQgEgCgEAAQgMAAgIAJg");
	this.shape_413.setTransform(80.6,162.2);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOANgLQAPgOAUAAQAWAAAPAOQAMALAAAOQAAAPgMALQgPAOgWAAQgVAAgPgOgAgUgbQgJALAAAQQAAAPAIALQAKAMALAAQAGAAAFgCQAGgDAEgFQAEgFADgIQACgIAAgHQAAgGgCgIQgDgIgFgFQgJgKgLAAQgMAAgIAKg");
	this.shape_414.setTransform(69.3,164.5);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgBABgDQACgCAAgFIABgMIAAhHIgBgNQgBgEgCgCIgEgEIgHgBIAAgCIAdgDIAABlIAAAHIABAJQABADADACQADACAHABIAAACg");
	this.shape_415.setTransform(61.1,162);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#FF0000").s().p("AgyA6IAAgCQAGgBADgBQADgBACgEIABgGIAAgMIAAg/QAAgKgDgEQgEgFgJAAIAAgCIAfgEIABAIIAAACQAIgFAGgBQAHgCAHAAQAQAAALAIQAIAFADAIQAFAIAAAKQAAAKgFAHQgEAJgIAGQgLAIgRAAQgHAAgGgCQgFgCgHgFIAAARIAAAGIAAAJQABADACACQAEADAIABIAAACgAgFgyQgFACgDAEQgDAEgCAHIAAATIAAASQACAGADAEQADAEAFACQAEACAEAAQALAAAJgJQAFgGACgHQADgHAAgIQAAgIgDgHQgCgIgEgFQgJgKgKAAQgFAAgFADg");
	this.shape_416.setTransform(52.7,166.1);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#FF0000").s().p("AADAnIAAgCIAGgBQADgBAAgDQAAgDgEgFIgCgDIgKgPIgNAPIgGAGQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAFAJABIAAACIgdAAIAAgCIAEgBIAFgDQAEgDAHgGIASgVIgTgYQgGgJgDgCQgDgCgGgCIAAgCIApAAIAAACIgFACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIAAADIAEAHIADAEIAFAJIANgOIAEgGIACgDQAAgFgGgBIAAgCIAcAAIAAACQgHACgFADQgGADgGAIIgPAQIAWAcQAFAGAEADIAEADIAGABIAAACg");
	this.shape_417.setTransform(42.5,164.5);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FF0000").s().p("AgQAlQgJgEgGgHQgJgLAAgPQAAgTARgMQAMgIAOAAQAJAAAHACQAIADAEAFQAIAHAAAMIg9AAIAAAGQAAAHADAIQADAIAEAFQAFAFAHADQAFADAIAAQAGAAAFgCQAFgCAEgDQADgDADgHIACABQgCALgKAFQgIAFgPAAQgMAAgKgDgAgNgfQgHAHgBAKIAsAAQgBgJgDgFQgDgEgEgDQgFgCgFAAQgIAAgHAGg");
	this.shape_418.setTransform(32.8,164.5);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FF0000").s().p("AAUA4QgIAEgGACQgHACgIAAQgPAAgMgIQgHgGgDgHQgEgJgBgJQABgKAEgIQAEgIAHgGQAMgJAQAAQAIAAAFADQAGACAHAEIAAghQAAgKgDgFQgEgEgJAAIAAgCIAggDIAABpQABAJADAFQAEAEAJABIAAACIgfADIgBgJgAgWgEQgFAFgCAHQgDAHgBAJQAAAHADAIQADAIAFAFQAHAKAMAAQAEgBAFgCQAFgDADgEQADgEABgGQABgHAAgMQAAgNgBgGQgBgFgDgFQgDgDgFgCQgFgCgDAAQgMAAgIAJg");
	this.shape_419.setTransform(17.3,162.2);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FF0000").s().p("AAHAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIABgMIAAgSIgBgPIgDgHQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDAEgBAEIgBAPIAAARIAAAHIABAJQABADACACQADACAIACIAAABIguAAIAAgBQAGgBADgBQACgCACgDQABgCABgFIAAgMIAAgVIAAgNQgBgEgCgDIgEgDIgHgBIAAgCIAcgEIACAKIAAACQANgMARAAQANAAAIAGQAIAFAAAKIAAAmIABAJQABADADACQADACAHACIAAABg");
	this.shape_420.setTransform(5.9,164.5);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgMAAgGgEQgHgFAAgJQAAgHAFgFQAEgDADgCIANgDIANgDIAHgDIAEgFIABgIQAAgKgFgFQgCgDgCgBIgGgBQgFAAgDABQgDACgDAEIgCAFQgCAEgGAAQgDAAgDgCQgCgCAAgDQAAgEAHgEIAKgCIAMgBIANABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAGAAIAGgBIAEgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAGAAAEgDQAEgCACgFQAEgGAAgMIAAgOIgMAGg");
	this.shape_421.setTransform(-3.8,164.5);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#FF0000").s().p("AgOAWQAGgCAFgDQADgDACgEQAEgHABgFIgFABQgEAAgEgDQgEgDAAgFQAAgEAEgEQADgDAEAAQAHAAAEAEQADAFAAAHQAAAHgDAGQgEAHgHAFQgGAEgIACg");
	this.shape_422.setTransform(-16.8,168.7);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FF0000").s().p("AglAwQgGgFAAgIQAAgGAEgEQAFgEAGAAQAFAAADACQADACAAAFIAAABIgCAAIgEgEIgEgBQgEAAgDADQgDADAAAFQAAAHAIAFQAJAFANAAQANAAAJgFQAIgGAAgIQAAgHgFgDQgGgEgLAAIgPAAQgLAAgGgEQgGgFAAgGQAAgGAGgDIANgEQgJgEgFgGQgFgGAAgHQAAgJAIgHQAFgFAGgCQAGgCAHAAQAJAAAKAGQAFgEAEgBQAEgBAFAAQAFAAADABQAEADAAADQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQgEAAgCgDIgDgDQgCgCgDAAQgEAAgFAEQAJAJAAAJQAAAMgMAHQgGAEgHABIgNABQgPABAAAFQAAAGANAAIAQAAQAKAAAGACQAGABAFADQAJAGAAALQAAAMgLAGQgLAHgUAAQgXAAgJgIgAgRgvQgCADgBAFQgCAFAAAFQAAAKAFAGQAFAGAHAAQAHAAAEgGQAEgGAAgLQAAgMgFgGQgEgFgGAAQgHAAgFAGg");
	this.shape_423.setTransform(-23.4,166.1);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#FF0000").s().p("AAHAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIABgMIAAgSIgBgPIgDgHQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDAEgBAEIgBAPIAAARIAAAHIABAJQABADACACQADACAIACIAAABIguAAIAAgBQAGgBADgBQACgCACgDQABgCABgFIAAgMIAAgVIAAgNQgBgEgCgDIgEgDIgHgBIAAgCIAcgEQACAGAAAEIAAACQANgMARAAQANAAAIAGQAIAFAAAKIAAAmIABAJQABADADACQADACAHACIAAABg");
	this.shape_424.setTransform(-33.7,164.5);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgDQABgCABgFIAAgMIAAgXIAAgMQAAgDgCgDIgFgDIgHgCIAAgCIAdgDIAAA0IABAGIAAAJQABAEACABQAEADAHABIAAACgAgGgxQgDgCABgEQgBgDADgDQADgCADAAQAEAAADACQACADAAADQAAAEgCACQgDACgEAAQgDAAgDgCg");
	this.shape_425.setTransform(-41.9,162);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#FF0000").s().p("AgNAvQgDgCgBgDIAAgLIAAg3IgLAAIAAgBQAGgCAGgFIAGgHIADgIIABgEIAFAAIAAAYIAZAAIAAADIgZAAIAAA1QgBAJADAFQACACAEABQACABAEAAQAFAAADgBIAHgHIABACQgDAGgGACQgGACgKABQgLAAgGgFg");
	this.shape_426.setTransform(-46.8,163.4);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#FF0000").s().p("AgkBAIAAgBQAGgBADgBQACgCACgDQABgCABgFIAAgMIAAguIgPAAIAAgEIAPAAIAAgWQAAgIACgEQADgFAGgEQAFgDAHgDQAIgBAJAAQAIgBAFADQAFACAAAFQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQgCACgDAAIgFgBIgEgEQgDgFgCgBQgCgBgDgBIgIACIgEAEQgCACgBAEIgBANIAAAXIAUAAIAAAEIgUAAIAAAvIAAAHIABAJQABADACACQACACAIACIAAABg");
	this.shape_427.setTransform(-66.5,162);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#FF0000").s().p("AAHAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIABgMIAAgSIgBgPIgDgHQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDAEgBAEIgBAPIAAARIAAAHIABAJQABADACACQADACAIACIAAABIguAAIAAgBQAGgBADgBQACgCACgDQABgCABgFIAAgMIAAgVIAAgNQgBgEgCgDIgEgDIgHgBIAAgCIAcgEIACAKIAAACQANgMARAAQANAAAIAGQAIAFAAAKIAAAmIABAJQABADADACQADACAHACIAAABg");
	this.shape_428.setTransform(-76,164.5);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgBABgDQACgCAAgFIABgMIAAgXIgBgMQgBgDgCgDIgEgDIgHgCIAAgCIAdgDIAAA0IAAAGIABAJQABAEADABQADADAHABIAAACgAgGgxQgDgCAAgEQAAgDADgDQADgCADAAQAEAAACACQADADAAADQAAAEgDACQgCACgEAAQgDAAgDgCg");
	this.shape_429.setTransform(-84.2,162);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#FF0000").s().p("AAUA4QgIAEgHACQgFACgJAAQgQAAgLgIQgHgGgEgHQgDgJAAgJQAAgKADgIQAFgIAIgGQALgJARAAQAGAAAGADQAGACAIAEIAAghQAAgKgFgFQgDgEgJAAIAAgCIAggDIAABpQAAAJAEAFQAEAEAIABIAAACIgeADIgBgJgAgWgEQgFAFgDAHQgCAHAAAJQgBAHADAIQADAIAFAFQAHAKALAAQAFgBAFgCQAEgDAEgEQADgEABgGQACgHAAgMQAAgNgCgGQgBgFgEgFQgCgDgFgCQgFgCgEAAQgLAAgIAJg");
	this.shape_430.setTransform(-97.6,162.2);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#FF0000").s().p("AAHAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIABgMIAAgSIgBgPQgBgEgCgDQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDAEgBAEIgBAPIAAARIAAAHIABAJQABADACACQADACAIACIAAABIguAAIAAgBQAGgBADgBQACgCACgDQABgCABgFIAAgMIAAgVIAAgNQgBgEgCgDQgCgCgCgBIgHgBIAAgCIAcgEIACAKIAAACQANgMARAAQANAAAIAGQAIAFAAAKIAAAmIABAJQABADADACQADACAHACIAAABg");
	this.shape_431.setTransform(-109,164.5);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgLAAgHgEQgHgFAAgJQAAgHAGgFQACgDAFgCIAMgDIANgDIAGgDIAFgFIABgIQAAgKgFgFQgCgDgCgBIgHgBQgEAAgEABQgCACgCAEIgDAFQgCAEgGAAQgDAAgCgCQgDgCAAgDQAAgEAHgEIAKgCIANgBIAMABQAHABAFADQAGADADAGIAAAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAEAAAGgDQADgCACgFQADgGABgMIAAgOIgMAGg");
	this.shape_432.setTransform(-118.7,164.5);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#FF0000").s().p("AglAwQgGgFAAgIQAAgGAEgEQAFgEAGAAQAFAAADACQADACAAAFIAAABIgCAAIgEgEIgEgBQgEAAgDADQgDADAAAFQAAAHAIAFQAJAFANAAQANAAAJgFQAIgGAAgIQAAgHgFgDQgGgEgLAAIgPAAQgLAAgGgEQgGgFAAgGQAAgGAGgDIANgEQgJgEgFgGQgFgGAAgHQAAgJAIgHQAFgFAGgCQAGgCAHAAQAJAAAKAGQAFgEAEgBQAEgBAFAAQAFAAADABQAEADAAADQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQgEAAgCgDIgDgDQgCgCgDAAQgEAAgFAEQAJAJAAAJQAAAMgMAHQgGAEgHABIgNABQgPABAAAFQAAAGANAAIAQAAQAKAAAGACQAGABAFADQAJAGAAALQAAAMgLAGQgLAHgUAAQgXAAgJgIgAgRgvQgCADgBAFQgCAFAAAFQAAAKAFAGQAFAGAHAAQAHAAAEgGQAEgGAAgLQAAgMgFgGQgEgFgGAAQgHAAgFAGg");
	this.shape_433.setTransform(-133.2,166.1);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#FF0000").s().p("AAHAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIABgMIAAgSIgBgPIgDgHQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDAEgBAEIgBAPIAAARIAAAHIABAJQABADACACQADACAIACIAAABIguAAIAAgBQAGgBADgBQACgCACgDQABgCABgFIAAgMIAAgVIAAgNQgBgEgCgDIgEgDIgHgBIAAgCIAcgEQACAGAAAEIAAACQANgMARAAQANAAAIAGQAIAFAAAKIAAAmIABAJQABADADACQADACAHACIAAABg");
	this.shape_434.setTransform(-143.5,164.5);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgBABgDQACgCAAgFIABgMIAAgXIgBgMQgBgDgCgDIgEgDIgHgCIAAgCIAdgDIAAA0IAAAGIABAJQABAEADABQADADAHABIAAACgAgGgxQgDgCAAgEQAAgDADgDQADgCADAAQAEAAACACQADADAAADQAAAEgDACQgCACgEAAQgDAAgDgCg");
	this.shape_435.setTransform(-151.7,162);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgLAAgHgEQgHgFAAgJQAAgHAGgFQACgDAFgCIAMgDIANgDIAGgDIAFgFIABgIQAAgKgFgFQgCgDgCgBIgHgBQgEAAgEABQgCACgCAEIgDAFQgCAEgGAAQgDAAgCgCQgDgCAAgDQAAgEAHgEIAKgCIANgBIAMABQAHABAFADQAGADADAGIAAAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAEAAAGgDQADgCACgFQADgGABgMIAAgOIgMAGg");
	this.shape_436.setTransform(-177.2,164.5);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FF0000").s().p("AgkBAIAAgBQAGgBADgBQACgCACgDQABgCABgFIAAgMIAAguIgPAAIAAgEIAPAAIAAgWQAAgIACgEQADgFAGgEQAFgDAHgDQAIgBAJAAQAIgBAFADQAFACAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAIgFgBIgEgEQgDgFgCgBQgCgBgDgBIgIACIgEAEQgCACgBAEIgBANIAAAXIAUAAIAAAEIgUAAIAAAvIAAAHIABAJQABADACACQACACAIACIAAABg");
	this.shape_437.setTransform(-189.5,162);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#FF0000").s().p("AgMAvQgDgCgCgDIgBgLIAAg3IgLAAIAAgBQAHgCAGgFIAFgHIAFgIIABgEIADAAIAAAYIAaAAIAAADIgaAAIAAA1QABAJACAFQACACADABQAEABAEAAQAEAAAEgBIAGgHIACACQgEAGgGACQgGACgJABQgMAAgFgFg");
	this.shape_438.setTransform(-201.2,163.4);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#FF0000").s().p("AgjAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIABgMIAAgVIgBgNQAAgEgCgDIgFgDIgHgBIAAgCIAbgEQACAIAAAHQAEgHAEgCQAIgFALgBQAHAAAEADQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDABQgEgBgCgCIgDgDQgEgDgFAAQgIgBgDAJQgEAHAAAPIAAAQIABAHIAAAJQABADACACQADACAHACIAAABg");
	this.shape_439.setTransform(-208,164.5);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#FF0000").s().p("AgMAvQgDgCgCgDIgBgLIAAg3IgLAAIAAgBQAHgCAGgFIAFgHIAEgIIACgEIADAAIAAAYIAaAAIAAADIgaAAIAAA1QABAJACAFQACACADABQADABAFAAQAEAAAEgBIAGgHIACACQgEAGgGACQgGACgJABQgMAAgFgFg");
	this.shape_440.setTransform(-223.4,163.4);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#FF0000").s().p("AgOAWQAHgCAEgDQADgDACgEQAEgHABgFIgFABQgFAAgDgDQgEgDAAgFQAAgEAEgEQADgDAFAAQAGAAAEAEQADAFAAAHQAAAHgDAGQgEAHgGAFQgHAEgIACg");
	this.shape_441.setTransform(-242.2,168.7);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#FF0000").s().p("AgkA2QgDgCAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQACgBAEAAIAFABIAFACIACAAQAHAAAEgJIADgHQACgEABgDQAAgDgFgIIgWgtIgCgHIgFgIIgDgDQgDgCgEgBIAAgCIAqAAIAAACIgHACQgEACAAAEQAAAEAEAJIARAmIAPggQAGgMAAgFQAAgEgDgDQgDgCgFgBIAAgCIAeAAIAAACIgGADIgFADIgJATIgdA/QgFAMgEADQgGAGgJAAQgFAAgEgCg");
	this.shape_442.setTransform(-249,166.2);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgDQACgCAAgFIAAgMIAAhHIAAgNQgBgEgCgCIgEgEIgHgBIAAgCIAdgDIAABlIAAAHIABAJQABADADACQADACAHABIAAACg");
	this.shape_443.setTransform(-256.2,162);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#FF0000").s().p("AAUA4QgIAEgHACQgGACgHAAQgQAAgLgIQgIgGgDgHQgFgJAAgJQAAgKAFgIQAEgIAIgGQAMgJAPAAQAIAAAFADQAGACAHAEIAAghQAAgKgDgFQgEgEgJAAIAAgCIAhgDIAABpQgBAJAEAFQAEAEAJABIAAACIgfADIgBgJgAgWgEQgFAFgDAHQgDAHAAAJQABAHACAIQADAIAEAFQAIAKALAAQAFgBAFgCQAEgDAEgEQADgEABgGQABgHAAgMQAAgNgBgGQgBgFgEgFQgCgDgFgCQgEgCgFAAQgLAAgIAJg");
	this.shape_444.setTransform(-264.3,162.2);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FF0000").s().p("AAWAcQgNAMgQAAQgNAAgJgGQgHgFAAgKIAAgfIAAgHIgCgJQAAgDgDgCQgDgCgHgCIAAgCIAeAAIAAAuIABAOQABAFACADQACADAEACQAFACAGAAQAEAAAFgCQAFgCAEgEQACgDABgFIABgPIAAgRIAAgHIgBgJIgDgFQgDgCgHgCIAAgCIAeAAIAAAxIABANQABAEABACQACADADABIAHACIAAACIgdADQgBgGgBgGg");
	this.shape_445.setTransform(-275.6,164.6);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOAMgLQAQgOAUAAQAVAAAQAOQAMALAAAOQAAAPgMALQgOAOgXAAQgWAAgOgOgAgVgbQgIALAAAQQAAAPAIALQAJAMANAAQAFAAAGgCQAFgDAEgFQAEgFADgIQACgIAAgHQAAgGgCgIQgDgIgFgFQgIgKgMAAQgLAAgKAKg");
	this.shape_446.setTransform(-286.6,164.5);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgDQABgCABgFIAAgMIAAhHIAAgNQAAgEgCgCIgFgEIgHgBIAAgCIAdgDIAABlIABAHIAAAJQABADACACQAEACAHABIAAACg");
	this.shape_447.setTransform(-294.8,162);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQADgCABgDQABgCABgEIABgMIAAgWIgBgOQAAgCgDgDQgBgCgDgBIgHgCIAAgCIAdgDIAAAzIABAIIAAAJQABACADACQACADAIABIAAACgAgGgyQgCgCAAgDQAAgDACgDQADgCADAAQAEAAACACQAEADAAADQAAADgEACQgCADgEAAQgDAAgDgDg");
	this.shape_448.setTransform(262,138.1);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#FF0000").s().p("AgOAWQAHgCAEgDQADgDACgEQAEgHABgFIgFABQgEAAgEgDQgEgDAAgFQAAgEAEgEQADgDAFAAQAGAAAEAEQADAFAAAHQAAAHgDAGQgEAHgGAFQgHAEgIACg");
	this.shape_449.setTransform(240.2,144.8);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#FF0000").s().p("AglAwQgGgFAAgIQAAgGAEgEQAFgEAGAAQAFAAADACQADACAAAFIAAABIgCAAIgEgEIgEgBQgEAAgDADQgDADAAAFQAAAHAIAFQAJAFANAAQANAAAJgFQAIgGAAgIQAAgHgFgDQgGgEgLAAIgPAAQgLAAgGgEQgGgFAAgGQAAgGAGgDIANgEQgJgEgFgGQgFgGAAgHQAAgJAIgHQAFgFAGgCQAGgCAHAAQAJAAAKAGQAFgEAEgBQAEgBAFAAQAFAAADABQAEADAAADQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgEAAgCgDIgDgDQgCgCgDAAQgEAAgFAEQAJAJAAAJQAAAMgMAHQgGAEgHABIgNABQgPABAAAFQAAAGANAAIAQAAQAKAAAGACQAGABAFADQAJAGAAALQAAAMgLAGQgLAHgUAAQgXAAgJgIgAgRgvQgCADgBAFQgCAFAAAFQAAAKAFAGQAFAGAHAAQAHAAAEgGQAEgGAAgLQAAgMgFgGQgEgFgGAAQgHAAgFAGg");
	this.shape_450.setTransform(233.6,142.2);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#FF0000").s().p("AAHAoIAAgDQAGAAADgCQADgBABgDQACgCAAgEIABgMIAAgTIgBgOIgDgIQgDgEgEgBQgFgCgFAAQgFAAgFACQgFACgDADQgDAEgBAFIgBAQIAAAQIAAAHIABAJQABADACACQADADAIAAIAAADIguAAIAAgDQAGAAADgCQACgBACgDQABgCABgEIAAgMIAAgWIAAgNQgBgEgCgCIgEgEIgHgCIAAgCIAcgCIACAKIAAABQANgLARAAQANgBAIAGQAIAFAAAKIAAAmIABAJQABADADACQADADAHAAIAAADg");
	this.shape_451.setTransform(223.4,140.6);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgCACgDQACgCAAgEIAAgMIAAgWIAAgOQAAgCgCgDIgFgDIgHgCIAAgCIAdgDIAAAzIABAIIAAAJQABACACACQAEADAHABIAAACgAgGgyQgCgCgBgDQABgDACgDQADgCADAAQAEAAADACQACADAAADQAAADgCACQgDADgEAAQgEAAgCgDg");
	this.shape_452.setTransform(215.2,138.1);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#FF0000").s().p("AgCAnIgbg3QgFgOgDgCIgDgCIgGgCIAAgCIApAAIAAACIgGACQgDACAAAEIABAFIADAKIARAlIARgmQADgJAAgEQAAgFgDgCIgGgCIAAgCIAcAAIAAACQgFABgEAEQgEAEgGANIgYA1g");
	this.shape_453.setTransform(208.2,140.6);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOANgLQAPgOAUAAQAWAAAPAOQAMALAAAOQAAAPgMALQgOAOgXAAQgWAAgOgOgAgVgbQgIALAAAQQAAAPAIALQAJAMANAAQAGAAAFgCQAFgDAEgFQAEgFADgIQACgIAAgHQAAgGgCgIQgEgIgEgFQgIgKgMAAQgLAAgKAKg");
	this.shape_454.setTransform(198.1,140.6);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#FF0000").s().p("AAlAoIAAgDQAGAAADgCQADgBABgDQACgCAAgEIAAgMIAAgRIAAgPQgBgEgCgEQgFgIgMAAQgNAAgGAJQgFAHAAAQIAAAQIAAAHIABAJQABADACACQADADAIAAIAAADIgtAAIAAgDQAGAAADgCIAEgEIACgGIAAgMIAAgQIAAgQQgBgFgDgDQgCgDgEgDQgEgCgFAAQgGABgGACQgFACgDAFQgDADgBAGQgBAFAAAJIAAAPIAAAHIABAJQABADACACQADADAIAAIAAADIguAAIAAgDQAGAAADgCQACgBACgDQABgCABgEIAAgMIAAgWIAAgNQgBgEgCgCIgEgFIgHgBIAAgCIAdgCIACAMQAHgGAIgEQAIgCAJAAQAKAAAGADQADADAFAHQAIgHAJgEQAIgCAJAAQAMAAAIAFQAIAHAAAJIAAAeIAAAHIABAJIADAFQADADAIAAIAAADg");
	this.shape_455.setTransform(184,140.6);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#FF0000").s().p("AgyA6IAAgCQAHgBACgBQADgBABgEIACgGIABgMIAAg/QAAgKgEgEQgEgFgIAAIAAgCIAegEIABAIIAAACQAIgFAHgBQAFgCAJAAQAPAAAMAIQAGAFAFAIQADAIAAAKQAAAKgDAHQgFAJgIAGQgLAIgRAAQgHAAgFgCQgGgCgIgFIAAARIAAAGIABAJQABADADACQACADAJABIAAACgAgFgyQgFACgDAEQgDAEgCAHIgBATIABASQACAGADAEQADAEAFACQAFACAEAAQAKAAAJgJQAFgGADgHQACgHAAgIQAAgIgCgHQgDgIgFgFQgHgKgMAAQgEAAgFADg");
	this.shape_456.setTransform(164.3,142.2);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOAMgLQAQgOAUAAQAVAAAPAOQANALAAAOQAAAPgMALQgPAOgWAAQgWAAgOgOgAgUgbQgJALAAAQQAAAPAIALQAJAMAMAAQAGAAAGgCQAFgDAEgFQAEgFACgIQADgIAAgHQAAgGgDgIQgDgIgEgFQgJgKgLAAQgLAAgJAKg");
	this.shape_457.setTransform(153.3,140.6);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#FF0000").s().p("AgMAwQgEgDgBgDIAAgLIAAg2IgLAAIAAgCQAGgBAGgGIAGgHIADgJIABgCIAFAAIAAAXIAZAAIAAAEIgZAAIAAA0QgBAKADADQACADAEABQACABAFABQAEgBADgBIAHgGIABABQgDAFgGADQgGADgJgBQgMAAgFgDg");
	this.shape_458.setTransform(145.4,139.5);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgBABgDQABgCABgFIABgMIAAhHIgBgNQAAgEgDgCQgBgDgDgBIgHgBIAAgCIAdgDIAABlIABAHIAAAJQABADADACQACACAIABIAAACg");
	this.shape_459.setTransform(126.6,138.1);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgDQABgCABgFIAAgMIAAhHIAAgNQgBgEgBgCIgFgEIgHgBIAAgCIAdgDIAABlIABAHIAAAJQABADACACQADACAIABIAAACg");
	this.shape_460.setTransform(121.4,138.1);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQADgCABgDQABgCABgEIABgMIAAgWIgBgOQgBgCgCgDQgBgCgDgBIgHgCIAAgCIAdgDIAAAzIAAAIIABAJQABACADACQACADAIABIAAACgAgGgyQgDgCAAgDQAAgDADgDQADgCADAAQAEAAACACQADADABADQgBADgDACQgCADgEAAQgDAAgDgDg");
	this.shape_461.setTransform(116.1,138.1);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#FF0000").s().p("AAWAnIgWg8IgcA8IgDAAIgVg2IgDgHQgDgJgEgCIgHgDIAAgCIApAAIAAACQgMAAAAAIQAAAEAFALIAMAhIASgoQACgEAAgDQAAgJgLAAIAAgCIAoAAIAAACIgIACQgDACAAAEQAAAEACAFIAOAnIAQgiQADgIAAgDQAAgFgEgDIgHgDIAAgCIAfAAIAAACQgFAAgDADIgFAEIgFAKIgCAFIgZA1g");
	this.shape_462.setTransform(107.1,140.6);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#FF0000").s().p("AgjAoIAAgDQAGAAADgCQADgBABgDQACgCAAgEIABgMIAAgWIgBgNQAAgEgCgCIgFgEIgHgCIAAgCIAbgCQACAHAAAGQAEgFAEgEQAIgEALAAQAHgBAEADQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDAAQgEAAgCgCIgDgDQgEgEgFAAQgIABgDAHQgEAJAAAOIAAAQIABAHIAAAJQABADACACQADADAHAAIAAADg");
	this.shape_463.setTransform(91.4,140.6);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#FF0000").s().p("AgQAlQgJgEgGgHQgJgLAAgPQAAgTARgMQAMgIAOAAQAJAAAHACQAIADAEAFQAIAHAAAMIg9AAIAAAGQAAAHADAIQADAIAEAFQAFAFAHADQAGADAHAAQAGAAAFgCQAFgCADgDQAEgDADgHIACABQgCALgKAFQgIAFgQAAQgMAAgJgDgAgNgfQgHAHgBAKIAsAAQgBgJgDgFQgCgEgFgDQgFgCgFAAQgIAAgHAGg");
	this.shape_464.setTransform(82.7,140.6);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#FF0000").s().p("AgyA6IAAgCQAHgBACgBQADgBABgEIACgGIABgMIAAg/QAAgKgEgEQgEgFgIAAIAAgCIAegEIABAIIAAACQAIgFAGgBQAHgCAIAAQAPAAAMAIQAHAFAEAIQADAIAAAKQAAAKgDAHQgFAJgHAGQgMAIgRAAQgHAAgFgCQgGgCgIgFIAAARIAAAGIACAJQAAADADACQADADAHABIAAACgAgFgyQgFACgDAEQgDAEgBAHIgCATIACASQABAGADAEQADAEAFACQAFACADAAQAMAAAHgJQAGgGADgHQACgHAAgIQAAgIgCgHQgDgIgFgFQgHgKgMAAQgEAAgFADg");
	this.shape_465.setTransform(72.1,142.2);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#FF0000").s().p("AgjAoIAAgDQAGAAADgCQADgBABgDQACgCAAgEIABgMIAAgWIgBgNQAAgEgCgCIgFgEIgHgCIAAgCIAbgCQACAHAAAGQAEgFAEgEQAIgEALAAQAHgBAEADQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDAAQgEAAgCgCIgDgDQgEgEgFAAQgIABgDAHQgEAJAAAOIAAAQIABAHIAAAJQABADACACQADADAHAAIAAADg");
	this.shape_466.setTransform(43.8,140.6);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#FF0000").s().p("AgaAdQgMgKAAgRQAAgHADgIQAEgIAFgFQAHgHAJgDQAKgDAJAAQAQAAAIAGQAFADABAFQAAACgDADQgCABgDAAQgHAAgDgIIgDgGIgCgCQgEgCgEAAQgGAAgFADQgEACgDAEQgEAEgBAGQgFAKAAAIQABAIADAHQAEAIAFAFQAIAJAMAAQAKAAAHgGQADgDADgHIADABQgFAKgHAEQgIAEgNAAQgUAAgMgLg");
	this.shape_467.setTransform(35.5,140.6);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAFgFQAEgDAEgCIALgDIAOgDIAHgDIAEgFIABgIQAAgKgEgFQgCgDgDgBIgHgBQgEAAgEABQgDACgBAEIgDAFQgCAEgFAAQgEAAgDgCQgCgCAAgDQAAgEAIgEIAKgCIALgBIANABQAHABAFADQAHADACAGIAAAJIAAAhIABALQACAHAHAAIAFgBIAEgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgKAFIgGAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAFAAAFgDQAEgCACgFQAEgGgBgMIAAgOIgLAGg");
	this.shape_468.setTransform(21.5,140.6);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#FF0000").s().p("AgPAWQAIgCADgDQAEgDACgEQAEgHABgFIgFABQgFAAgDgDQgEgDAAgFQAAgEAEgEQAEgDADAAQAHAAAEAEQAEAFAAAHQAAAHgEAGQgEAHgHAFQgFAEgKACg");
	this.shape_469.setTransform(8.5,144.8);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#FF0000").s().p("AgjAoIAAgDQAGAAADgCQADgBABgDQACgCAAgEIABgMIAAgWIgBgNQAAgEgCgCIgFgEIgHgCIAAgCIAbgCQACAHAAAGQAEgFAEgEQAIgEALAAQAHgBAEADQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDAAQgEAAgCgCIgDgDQgEgEgFAAQgIABgDAHQgEAJAAAOIAAAQIABAHIAAAJQABADACACQADADAHAAIAAADg");
	this.shape_470.setTransform(2.4,140.6);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#FF0000").s().p("AgQAlQgJgEgGgHQgJgLAAgPQAAgTARgMQAMgIAOAAQAJAAAHACQAIADAEAFQAIAHAAAMIg9AAIAAAGQAAAHADAIQADAIAEAFQAFAFAHADQAFADAIAAQAGAAAFgCQAFgCAEgDQADgDADgHIACABQgCALgKAFQgIAFgPAAQgMAAgKgDgAgNgfQgHAHgBAKIAsAAQgBgJgDgFQgDgEgEgDQgFgCgFAAQgIAAgHAGg");
	this.shape_471.setTransform(-6.3,140.6);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgBABgDQABgCABgFIABgMIAAhHIgBgNQAAgEgDgCQgBgDgDgBIgHgBIAAgCIAdgDIAABlIABAHIAAAJQABADACACQADACAIABIAAACg");
	this.shape_472.setTransform(-31.8,138.1);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgMAAgGgEQgHgFAAgJQAAgHAFgFQAEgDADgCIANgDIANgDIAHgDIAEgFIABgIQAAgKgFgFQgCgDgCgBIgGgBQgFAAgDABQgDACgDAEIgCAFQgCAEgGAAQgDAAgDgCQgCgCAAgDQAAgEAHgEIAKgCIAMgBIANABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAGAAIAGgBIAEgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAGAAAEgDQAEgCACgFQAEgGAAgMIAAgOIgMAGg");
	this.shape_473.setTransform(-55.1,140.6);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#FF0000").s().p("AgkBBIAAgDQAGAAADgCQACgBACgDQABgCABgEIAAgMIAAgvIgPAAIAAgDIAPAAIAAgXQAAgIACgFQADgEAGgEQAFgDAHgDQAIgCAJAAQAIABAFACQAFACAAAEQAAABAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAIgFgBIgEgFQgDgEgCgBQgCgBgDAAIgIABIgEADQgCADgBAFIgBALIAAAZIAUAAIAAADIgUAAIAAAvIAAAHIABAJQABADACACQACADAIAAIAAADg");
	this.shape_474.setTransform(-67.5,138.1);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#FF0000").s().p("AAFBAIAAgCIAGgBQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAgCgDgDIgCgCIgZgZIgGAGIAAAHIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgCQACgBACgDQABgCABgFIAAgMIAAhHIAAgNQgBgEgCgCIgEgEIgHgBIAAgCIAegDIAABaIATgSIAHgIQACgCAAgDQAAgEgFgCIgGgBIAAgCIAnAAIAAACQgIAAgEADQgFACgIAGIgEAEIgKALIAaAbIAEAEIAFAEIAIAHIAGADIAKACIAAACg");
	this.shape_475.setTransform(-100.6,138.1);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#FF0000").s().p("AgaAdQgLgKAAgRQAAgHACgIQAEgIAFgFQAHgHAKgDQAIgDAKAAQAPAAAKAGQAEADAAAFQAAACgCADQgCABgDAAQgHAAgDgIIgDgGIgCgCQgDgCgFAAQgGAAgEADQgFACgDAEQgEAEgCAGQgDAKAAAIQgBAIAEAHQADAIAGAFQAIAJAMAAQAKAAAHgGQADgDADgHIACABQgDAKgIAEQgHAEgNAAQgVAAgMgLg");
	this.shape_476.setTransform(-110.7,140.6);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOAMgLQAQgOAUAAQAVAAAPAOQANALAAAOQAAAPgMALQgPAOgWAAQgWAAgOgOgAgUgbQgJALAAAQQAAAPAIALQAJAMAMAAQAGAAAGgCQAFgDAEgFQAEgFACgIQADgIAAgHQAAgGgDgIQgDgIgEgFQgJgKgLAAQgLAAgJAKg");
	this.shape_477.setTransform(-120.8,140.6);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgDQACgCAAgFIAAgMIAAhHIAAgNQAAgEgDgCIgEgEIgHgBIAAgCIAdgDIAABlIAAAHIABAJQABADADACQADACAHABIAAACg");
	this.shape_478.setTransform(-129,138.1);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#FF0000").s().p("AgjAoIAAgDQAGAAADgCQADgBABgDQACgCAAgEIABgMIAAgWIgBgNQAAgEgCgCIgFgEIgHgCIAAgCIAbgCQACAHAAAGQAEgFAEgEQAIgEALAAQAHgBAEADQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDAAQgEAAgCgCIgDgDQgEgEgFAAQgIABgDAHQgEAJAAAOIAAAQIABAHIAAAJQABADACACQADADAHAAIAAADg");
	this.shape_479.setTransform(-170.8,140.6);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#FF0000").s().p("AgMAwQgDgDgCgDIgBgLIAAg2IgLAAIAAgCQAHgBAGgGIAFgHIAEgJIACgCIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QABAKACADQACADADABQADABAFABQAEgBAEgBIAGgGIACABQgEAFgGADQgGADgJgBQgMAAgFgDg");
	this.shape_480.setTransform(-188.3,139.5);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#FF0000").s().p("AAHAoIAAgDQAGAAADgCQADgBABgDQACgCAAgEIABgMIAAgTIgBgOIgDgIQgDgEgEgBQgFgCgFAAQgFAAgFACQgFACgDADQgDAEgBAFIgBAQIAAAQIAAAHIABAJQABADACACQADADAIAAIAAADIguAAIAAgDQAGAAADgCQACgBACgDQABgCABgEIAAgMIAAgWIAAgNQgBgEgCgCIgEgEIgHgCIAAgCIAcgCQACAFAAAFIAAABQANgLARAAQANgBAIAGQAIAFAAAKIAAAmIABAJQABADADACQADADAHAAIAAADg");
	this.shape_481.setTransform(-202.4,140.6);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQADgCABgDQACgCAAgEIABgMIAAgWIgBgOQgBgCgCgDIgEgDIgHgCIAAgCIAdgDIAAAzIAAAIIABAJQABACADACQADADAHABIAAACgAgGgyQgDgCAAgDQAAgDADgDQADgCADAAQAEAAACACQADADAAADQAAADgDACQgCADgEAAQgDAAgDgDg");
	this.shape_482.setTransform(-210.7,138.1);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#FF0000").s().p("AgNAwQgDgDgBgDIAAgLIAAg2IgLAAIAAgCQAGgBAGgGIAGgHIADgJIABgCIAFAAIAAAXIAZAAIAAAEIgZAAIAAA0QgBAKADADQACADAEABQACABAEABQAFgBADgBIAHgGIABABQgDAFgGADQgGADgKgBQgLAAgGgDg");
	this.shape_483.setTransform(-226.8,139.5);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgCACgDQABgCABgEIAAgMIAAgWIAAgOQAAgCgCgDIgFgDIgHgCIAAgCIAdgDIAAAzIABAIIAAAJQABACACACQAEADAHABIAAACgAgGgyQgDgCABgDQgBgDADgDQADgCADAAQAEAAADACQACADAAADQAAADgCACQgDADgEAAQgDAAgDgDg");
	this.shape_484.setTransform(-232.7,138.1);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#FF0000").s().p("AAWAnIgWg8IgcA8IgDAAIgVg2IgDgHQgDgJgEgCIgHgDIAAgCIApAAIAAACQgMAAAAAIQAAAEAFALIAMAhIASgoQACgEAAgDQAAgJgLAAIAAgCIAoAAIAAACIgIACQgDACAAAEQAAAEACAFIAOAnIAQgiQADgIAAgDQAAgFgEgDIgHgDIAAgCIAfAAIAAACQgFAAgDADIgFAEIgFAKIgCAFIgZA1g");
	this.shape_485.setTransform(-241.7,140.6);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#FF0000").s().p("AAHAoIAAgDQAGAAADgCQADgBABgDQACgCAAgEIABgMIAAgTIgBgOIgDgIQgDgEgEgBQgFgCgFAAQgFAAgFACQgFACgDADQgDAEgBAFIgBAQIAAAQIAAAHIABAJQABADACACQADADAIAAIAAADIguAAIAAgDQAGAAADgCQACgBACgDQABgCABgEIAAgMIAAgWIAAgNQgBgEgCgCIgEgEIgHgCIAAgCIAcgCIACAKIAAABQANgLARAAQANgBAIAGQAIAFAAAKIAAAmIABAJQABADADACQADADAHAAIAAADg");
	this.shape_486.setTransform(-259.4,140.6);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#FF0000").s().p("AAHBAIAAgCIAIgBIAEgDQACgDABgEIABgLIAAgdIgBgLIgEgFQgGgGgJAAQgZAAAAAiIAAAPIABAHIAAAJQABADADACQADACAHABIAAACIguAAIAAgCQAGAAADgCQADgBABgDQACgCAAgFIABgMIAAhHIgBgNQAAgEgCgCIgFgEIgHgBIAAgCIAegDIAAA+IAHgGIAHgEQAHgDAJAAQAMAAAJAEQAFAEADAEQACAEAAAJIAAAbIAAAHIABAJQAAADADACQADACAIABIAAACg");
	this.shape_487.setTransform(-280.2,138.1);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#FF0000").s().p("AAmA/IglhhIglBhIgFAAIgvhiIgDgGIgFgKQgCgDgEgCIgFgCIgIgBIAAgCIBCAAIAAACQgKgBgDACQgDABgCACQgBADAAADQAAAEADAGIADAHIAgBEIAXg7QAEgLAAgHIgBgIIgFgGQgDgCgDgBIgJgBIAAgCIBCAAIAAACIgJAAIgFABQgDACgCAEQgCADAAADQAAADADAJIAaBHIAdg9QAGgOAAgIQAAgIgGgEQgEgBgHAAIAAgCIAwAAIAAACIgKACQgEACgDAEQgGAHgIAQIgrBbg");
	this.shape_488.setTransform(-297.2,138.3);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#FF0000").s().p("AgjAoIAAgDQAGAAADgCQADgBABgDQACgCAAgEIABgMIAAgWIgBgNQAAgEgCgCIgFgEIgHgCIAAgCIAbgCQACAHAAAGQAEgFAEgEQAIgEALAAQAHgBAEADQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDAAQgEAAgCgCIgDgDQgEgEgFAAQgIABgDAHQgEAJAAAOIAAAQIABAHIAAAJQABADACACQADADAHAAIAAADg");
	this.shape_489.setTransform(16.9,116.7);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAIACQAHADAFAFQAHAHAAAMIg9AAIAAAGQAAAHACAIQADAIAFAFQAFAFAGADQAGADAIAAQAGAAAFgCQAFgCADgDQAEgDADgHIACABQgDALgIAFQgKAFgPAAQgMAAgIgDgAgNgfQgGAHgCAKIAsAAQAAgJgDgFQgEgEgEgDQgFgCgFAAQgIAAgHAGg");
	this.shape_490.setTransform(8.1,116.8);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#FF0000").s().p("AgQAlQgJgEgGgHQgJgLAAgPQAAgTARgMQAMgIAOAAQAJAAAHACQAHADAGAFQAHAHAAAMIg8AAIgBAGQAAAHADAIQADAIAEAFQAFAFAHADQAFADAJAAQAFAAAFgCQAFgCAEgDQADgDADgHIACABQgCALgKAFQgIAFgPAAQgMAAgKgDgAgNgfQgGAHgCAKIAsAAQgBgJgDgFQgDgEgEgDQgFgCgFAAQgIAAgHAGg");
	this.shape_491.setTransform(-22.4,116.8);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#FF0000").s().p("AgjAoIAAgDQAGAAADgCQADgBABgDQACgCAAgEIABgMIAAgWIgBgNQAAgEgCgCIgFgEIgHgCIAAgCIAbgCQACAHAAAGQAEgFAEgEQAIgEALAAQAHgBAEADQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDAAQgEAAgCgCIgDgDQgEgEgFAAQgIABgDAHQgEAJAAAOIAAAQIABAHIAAAJQABADACACQADADAHAAIAAADg");
	this.shape_492.setTransform(-30.8,116.7);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#FF0000").s().p("AgSA+QgVgGgMgQQgMgQAAgVQAAgQAHgPQAHgNANgJQAJgHANgDQAOgFAMAAQANAAAOAFIAIACIAFABQAAAAABAAQAAAAABAAQAAgBABAAQAAgBABAAIACgDIACAAIACApIgDAAIgCgEIgGgOQgEgHgHgGQgGgFgHgCQgGgCgIAAQgMgBgHAFQgIAEgHAHQgGAHgEAKQgGANAAAQQAAAOAEAMQAEALAIAJQAOAOAXAAQAMAAAKgDQAJgEAFgHQAGgHADgOIADABQgCAOgHAJQgHAIgMAEQgMAFgPAAQgOgBgNgDg");
	this.shape_493.setTransform(-41.6,114.4);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#FF0000").s().p("AgkA2QgDgCAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQACgBADAAIAGABIAFACIADAAQAGAAAEgJIADgHQADgEAAgDQAAgDgFgIIgVgtIgEgHIgEgIIgDgDQgDgCgDgBIAAgCIAoAAIAAACIgGACQgEACAAAEQAAAEAFAJIAQAmIAPggQAGgMAAgFQAAgEgDgDQgDgCgEgBIAAgCIAdAAIAAACIgGADIgEADIgKATIgdA/QgGAMgDADQgGAGgJAAQgFAAgEgCg");
	this.shape_494.setTransform(126.5,213.9);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#FF0000").s().p("AAWAcQgNAMgQAAQgOAAgHgGQgJgFABgKIAAgfIAAgHIgBgJQgBgDgDgCQgCgCgJgCIAAgCIAgAAIAAAuIAAAOQABAFACADQADADAEACQAEACAGAAQAEAAAFgCQAGgCADgEQACgDABgFIABgPIAAgRIAAgHIgBgJQAAgDgDgCQgDgCgHgCIAAgCIAeAAIAAAxIABANQABAEABACQACADACABIAIACIAAACIgdADQgCgGAAgGg");
	this.shape_495.setTransform(94,212.3);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#FF0000").s().p("AgiBCIAAhqQAAgKgEgFQgDgEgJAAIAAgDIAggDIAAA9QAEgFAEgCQAJgFAJAAQARAAAMAJQAOAKAAAUQAAATgOAMQgMAKgTAAQgJAAgHgCIgGgDIgEAAQgGAAgEAHgAgGgKQgFADgDAFQgEAHAAARQAAAKACAIQABAJACADQACAFAFACQAEADAGAAQAMAAAIgLQAJgKAAgRQAAgIgDgIQgDgIgFgEQgEgFgEgCQgFgCgFAAQgFAAgFADg");
	this.shape_496.setTransform(82.8,209.9);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#FF0000").s().p("AAHAoIAAgDQAGAAADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgOQgBgFgCgDQgDgEgEgBQgFgCgFAAQgFAAgFACQgFACgDADQgDAEgBAFIgBAQIAAAQIAAAHIABAJQABADACACQADACAIABIAAADIguAAIAAgDQAGAAADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgCQgCgDgCgBIgHgCIAAgCIAcgCIACAKIAAABQANgLARAAQANAAAIAFQAIAFAAAKIAAAmIABAJQABADADACQADACAHABIAAADg");
	this.shape_497.setTransform(11.1,212.2);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#FF0000").s().p("AAIA/IAAgDQAJgBADgCQAHgDAAgGQAAgEgDgGIgCgEIgKgWIgtAAIgFANIgDAFQgFAKABAHQAAADACADQABADADABQAEADAHAAIAAADIgwAAIAAgDQAGAAAEgCQAEgCAEgFIAHgKIAIgRIAmhVIAGAAIAtBfIAJAPQADAFADADIAGACIAJABIAAADgAgfAJIApAAIgUgvg");
	this.shape_498.setTransform(-1.9,209.9);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAOAAQAJAAAIACQAGADAFAFQAIAHAAAMIg9AAIAAAGQAAAHACAIQADAIAFAFQAFAFAHADQAGADAHAAQAGAAAFgCQAFgCADgDQAEgDADgHIACABQgCALgKAFQgJAFgPAAQgLAAgJgDgAgNgfQgHAHgBAKIAsAAQAAgJgDgFQgDgEgFgDQgFgCgFAAQgIAAgHAGg");
	this.shape_499.setTransform(-146.5,212.3);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#FF0000").s().p("AgkBAIAAgBQAGgBADgBQACgCACgDQABgCABgFIAAgMIAAguIgPAAIAAgEIAPAAIAAgWQAAgIACgEQADgFAGgEQAFgDAHgCQAIgCAJAAQAIgBAFADQAFACAAAFQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQgCACgDAAIgFgBIgEgEQgDgFgCgBQgCgBgDgBIgIACIgEAEQgCACgBAEIgBANIAAAXIAUAAIAAAEIgUAAIAAAvIAAAHIABAJQABADACACQACACAIACIAAABg");
	this.shape_500.setTransform(273,185.8);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOANgLQAPgOAUAAQAWAAAPAOQAMALAAAOQAAAPgMALQgOAOgXAAQgVAAgPgOgAgVgbQgIALAAAQQAAAPAIALQAJAMANAAQAGAAAFgCQAFgDAEgFQAEgFADgIQACgIAAgHQAAgGgCgIQgDgIgFgFQgIgKgMAAQgMAAgJAKg");
	this.shape_501.setTransform(263.5,188.4);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#FF0000").s().p("AgNAvQgCgCgBgDIgCgLIAAg3IgLAAIAAgBQAHgCAGgFIAFgHIAFgIIABgEIADAAIAAAYIAaAAIAAADIgaAAIAAA1QABAJACAFQACACADABQADABAFAAQAEAAAEgBIAGgHIACACQgDAGgHACQgGACgKABQgLAAgGgFg");
	this.shape_502.setTransform(250.2,187.3);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgDQACgCAAgFIAAgMIAAgXIAAgMQAAgDgCgDIgFgDIgHgCIAAgCIAdgDIAAA0IABAGIAAAJQABAEACABQAEADAHABIAAACgAgGgxQgDgCABgEQgBgDADgDQADgCADAAQAEAAADACQADADAAADQAAAEgDACQgDACgEAAQgDAAgDgCg");
	this.shape_503.setTransform(212.4,185.9);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#FF0000").s().p("AAlAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIAAgMIAAgQIAAgPQgBgFgCgDQgFgHgMAAQgNAAgGAIQgFAHAAAPIAAARIAAAHIABAJQABADACACQADACAIACIAAABIgtAAIAAgBQAGgBADgBIAEgFIACgHIAAgMIAAgQIAAgPQgBgFgDgDQgCgDgEgDQgEgBgFAAQgGgBgGADQgFADgDAEQgDAEgBAFQgBAFAAAIIAAAQIAAAHIABAJQABADACACQADACAIACIAAABIguAAIAAgBQAGgBADgBQACgCACgDQABgCABgFIAAgMIAAgVIAAgOQgBgDgCgDIgEgEIgHAAIAAgCIAdgEIACANQAHgGAIgDQAIgEAJAAQAKAAAGAFQADADAFAGQAIgHAJgDQAIgEAJAAQAMABAIAFQAIAHAAAJIAAAeIAAAHIABAJIADAFQADACAIACIAAABg");
	this.shape_504.setTransform(201.2,188.3);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#FF0000").s().p("AgNAvQgCgCgBgDIgBgLIAAg3IgLAAIAAgBQAGgCAGgFIAGgHIADgIIABgEIAFAAIAAAYIAZAAIAAADIgZAAIAAA1QAAAJACAFQACACAEABQADABADAAQAFAAADgBIAHgHIABACQgDAGgGACQgGACgKABQgLAAgGgFg");
	this.shape_505.setTransform(155.1,187.3);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#FF0000").s().p("AAlAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIAAgMIAAgQIAAgPQgBgFgCgDQgFgHgMAAQgNAAgGAIQgFAHAAAPIAAARIAAAHIABAJQABADACACQADACAIACIAAABIgtAAIAAgBQAGgBADgBIAEgFIACgHIAAgMIAAgQIAAgPQgBgFgDgDQgCgDgEgDQgEgBgFAAQgGgBgGADQgFADgDAEQgDAEgBAFQgBAFAAAIIAAAQIAAAHIABAJQABADACACQADACAIACIAAABIguAAIAAgBQAGgBADgBQACgCACgDQABgCABgFIAAgMIAAgVIAAgOQgBgDgCgDIgEgEIgHAAIAAgCIAdgEIACANQAHgGAIgDQAIgEAJAAQAKAAAGAFQADADAFAGQAIgHAJgDQAIgEAJAAQAMABAIAFQAIAHAAAJIAAAeIAAAHIABAJIADAFQADACAIACIAAABg");
	this.shape_506.setTransform(124.6,188.3);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#FF0000").s().p("AgMAvQgEgCgBgDIgBgLIAAg3IgKAAIAAgBQAGgCAGgFIAGgHIADgIIABgEIAFAAIAAAYIAZAAIAAADIgZAAIAAA1QAAAJACAFQACACAEABQACABAFAAQAEAAAEgBIAGgHIABACQgDAGgGACQgGACgJABQgMAAgFgFg");
	this.shape_507.setTransform(87.5,187.3);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#FF0000").s().p("AAlAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIAAgMIAAgQIAAgPQgBgFgCgDQgFgHgMAAQgNAAgGAIQgFAHAAAPIAAARIAAAHIABAJQABADACACQADACAIACIAAABIgtAAIAAgBQAGgBADgBIAEgFIACgHIAAgMIAAgQIAAgPQgBgFgDgDQgCgDgEgDQgEgBgFAAQgGgBgGADQgFADgDAEQgDAEgBAFQgBAFAAAIIAAAQIAAAHIABAJQABADACACQADACAIACIAAABIguAAIAAgBQAGgBADgBQACgCACgDQABgCABgFIAAgMIAAgVIAAgOQgBgDgCgDIgEgEIgHAAIAAgCIAdgEIACANQAHgGAIgDQAIgEAJAAQAKAAAGAFQADADAFAGQAIgHAJgDQAIgEAJAAQAMABAIAFQAIAHAAAJIAAAeIAAAHIABAJIADAFQADACAIACIAAABg");
	this.shape_508.setTransform(43.2,188.3);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAOAAQAJAAAIACQAGADAFAFQAIAHAAAMIg9AAIAAAGQAAAHACAIQADAIAFAFQAFAFAHADQAGADAHAAQAGAAAFgCQAFgCADgDQAEgDADgHIACABQgCALgKAFQgJAFgPAAQgLAAgJgDgAgNgfQgHAHgBAKIAsAAQAAgJgDgFQgDgEgFgDQgFgCgFAAQgIAAgHAGg");
	this.shape_509.setTransform(-23.6,188.4);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#FF0000").s().p("AgaAdQgLgKAAgRQAAgHACgIQAEgIAFgFQAHgHAKgDQAJgDAJAAQAPAAAKAGQAEADAAAFQAAACgCADQgCABgDAAQgHAAgDgIIgDgGIgCgCQgDgCgFAAQgGAAgEADQgFACgDAEQgEAEgCAGQgDAKAAAIQgBAIAEAHQADAIAGAFQAIAJAMAAQAKAAAHgGQADgDADgHIACABQgEAKgHAEQgHAEgNAAQgVAAgMgLg");
	this.shape_510.setTransform(-49.4,188.4);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAOAAQAJAAAIACQAGADAFAFQAIAHAAAMIg9AAIAAAGQAAAHACAIQADAIAFAFQAFAFAHADQAGADAHAAQAGAAAFgCQAFgCADgDQAEgDADgHIACABQgCALgKAFQgJAFgPAAQgLAAgJgDgAgNgfQgHAHgBAKIAsAAQAAgJgDgFQgDgEgFgDQgFgCgFAAQgIAAgHAGg");
	this.shape_511.setTransform(-71.8,188.4);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#FF0000").s().p("AAFBAIAAgCIAGgBQABAAAAgBQABAAAAAAQAAgBABgBQAAAAAAgBQAAgCgDgDIgCgCIgZgZIgGAGIAAAHIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgCQACgBACgDQABgCABgFIAAgMIAAhHIAAgNQgBgEgCgCIgEgEIgHgBIAAgCIAegDIAABaIATgSIAHgIQACgCAAgDQAAgEgFgCIgGgBIAAgCIAnAAIAAACQgIAAgEADQgFACgIAGIgEAEIgKALIAaAbIAEAEIAFAEIAIAHIAGADIAKACIAAACg");
	this.shape_512.setTransform(-81.6,185.8);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgMAAgGgEQgHgFAAgJQAAgHAGgFQACgDAEgCIANgDIANgDIAGgDIAFgFIABgIQAAgKgFgFQgCgDgCgBIgGgBQgFAAgEABQgCACgDAEIgCAFQgCAEgGAAQgDAAgCgCQgDgCAAgDQAAgEAHgEIAKgCIANgBIAMABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAEAAAGgDQADgCACgFQADgGABgMIAAgOIgMAGg");
	this.shape_513.setTransform(-91.4,188.4);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#FF0000").s().p("AAUA4QgIAEgHACQgFACgIAAQgRAAgKgIQgIgGgEgHQgDgJAAgJQAAgKADgIQAFgIAIgGQAMgJAQAAQAGAAAGADQAGACAIAEIAAghQAAgKgFgFQgDgEgJAAIAAgCIAhgDIAABpQAAAJADAFQAEAEAIABIAAABIgeAEIgBgJgAgWgEQgFAFgDAHQgCAHAAAJQgBAHADAIQADAIAEAFQAIAJALAAQAFAAAFgCQAEgDAEgDQADgFABgGQABgHABgMQgBgNgBgGQgBgFgEgFQgCgDgFgCQgFgCgEAAQgLAAgIAJg");
	this.shape_514.setTransform(-112.8,186);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#FF0000").s().p("AgMAvQgEgCgBgDIgBgLIAAg3IgKAAIAAgBQAGgCAGgFIAGgHIADgIIABgEIAFAAIAAAYIAZAAIAAADIgZAAIAAA1QgBAJADAFQACACAEABQACABAFAAQAEAAADgBIAHgHIABACQgDAGgGACQgGACgJABQgMAAgFgFg");
	this.shape_515.setTransform(-146.6,187.3);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#FF0000").s().p("Ag3A+IAAgBQAFgBAEgBQAFgCACgCQADgCACgGIABgNIAAhDIgBgMQgBgIgIgEQgEgCgIgBIAAgCIBsAAIADAfIgCAAIgFgLQgFgHgJgFQgFgDgGAAIgTgBIgPAAIAAA2IAEAAQASAAAIgIQAEgDACgEIACgLIACAAIAAA2IgDAAQgBgJgDgFQgCgFgGgEQgEgBgGgBQgGgBgJAAIAAAkIABANQABAFADADIAGAEIAKACIAAABg");
	this.shape_516.setTransform(-191.2,186);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#FF0000").s().p("AgkBAIAAgBQAGgBADgBQACgCACgDQABgCABgFIAAgMIAAguIgPAAIAAgEIAPAAIAAgWQAAgIACgEQADgFAGgEQAFgDAHgCQAIgCAJAAQAIgBAFADQAFACAAAFQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQgCACgDAAIgFgBIgEgEQgDgFgCgBQgCgBgDgBIgIACIgEAEQgCACgBAEIgBANIAAAXIAUAAIAAAEIgUAAIAAAvIAAAHIABAJQABADACACQACACAIACIAAABg");
	this.shape_517.setTransform(-231.4,185.8);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#FF0000").s().p("AgjAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIABgMIAAgVIgBgNQAAgEgCgDQgCgCgDgBIgHgBIAAgCIAbgEQACAIAAAHQAEgHAEgCQAIgFALgBQAHAAAEADQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDABQgEgBgCgCIgDgDQgEgDgFAAQgIgBgDAJQgEAHAAAPIAAAQIABAHIAAAJQABADACACQADACAHACIAAABg");
	this.shape_518.setTransform(-239,188.3);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#FF0000").s().p("AgCAnIgbg4QgFgNgDgCIgDgDIgGgBIAAgCIApAAIAAACIgGACQgEACABAEIABAGIADAKIAQAkIARgmQAEgJAAgEQAAgFgDgCIgGgCIAAgCIAdAAIAAACQgGACgDADQgFAEgGANIgYA1g");
	this.shape_519.setTransform(-256.9,188.4);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#FF0000").s().p("Ag+A+IAAgBIAKgCIAGgEQADgDACgFIABgNIAAhDIgBgNQgCgFgDgDIgGgEIgKgCIAAgCIBwAAIABAfIgCAAQgBgIgEgFQgDgFgGgEQgFgDgGgBQgHgBgLAAIgXAAIAAA3IAGAAQAKAAADgCQAFgBADgDQADgDACgDIACgLIACAAIAAAxIgCAAQgBgIgCgEQgCgEgDgDQgDgDgFgBQgEgBgIAAIgGAAIAAAUIABASQAAAGACAEQAEAGAHADQAHAEALAAQANgBAJgCQAIgDAFgGQAEgEADgFIAEgNIACAAIgBAkg");
	this.shape_520.setTransform(-268,186);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAOAAQAJAAAIACQAGADAFAFQAIAHAAAMIg9AAIAAAGQAAAHACAIQADAIAFAFQAFAFAHADQAGADAHAAQAGAAAFgCQAFgCADgDQAEgDADgHIACABQgCALgKAFQgJAFgPAAQgLAAgJgDgAgNgfQgHAHgBAKIAsAAQgBgJgCgFQgDgEgFgDQgFgCgFAAQgIAAgHAGg");
	this.shape_521.setTransform(-285.1,188.4);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#FF0000").s().p("AgjAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIABgMIAAgVIgBgNQAAgEgCgDQgCgCgDgBIgHgBIAAgCIAbgEQACAIAAAHQAEgHAEgCQAIgFALgBQAHAAAEADQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDABQgEgBgCgCIgDgDQgEgDgFAAQgIgBgDAJQgEAHAAAPIAAAQIABAHIAAAJQABADACACQADACAHACIAAABg");
	this.shape_522.setTransform(268.6,164.5);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAFgFQADgDAFgCIALgDIAOgDIAGgDIAFgFIABgIQAAgKgEgFQgDgDgCgBIgHgBQgEAAgEABQgDACgBAEIgDAFQgCAEgFAAQgEAAgDgCQgCgCAAgDQAAgEAIgEIAKgCIALgBIANABQAHABAFADQAHADACAGIAAAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgKAFIgGAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAFAAAFgDQADgCACgFQADgGAAgMIAAgOIgLAGg");
	this.shape_523.setTransform(206.8,164.5);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#FF0000").s().p("AgMAvQgEgCgBgDIAAgLIAAg3IgLAAIAAgBQAGgCAGgFIAGgHIADgIIABgEIAFAAIAAAYIAZAAIAAADIgZAAIAAA1QgBAJADAFQACACAEABQACABAFAAQAEAAADgBIAHgHIABACQgDAGgGACQgGACgJABQgMAAgFgFg");
	this.shape_524.setTransform(199.4,163.4);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#FF0000").s().p("AgNAvQgDgCAAgDIgBgLIAAg3IgLAAIAAgBQAGgCAGgFIAGgHIAEgIIAAgEIAFAAIAAAYIAZAAIAAADIgZAAIAAA1QAAAJACAFQACACAEABQADABADAAQAFAAADgBIAHgHIABACQgDAGgGACQgGACgKABQgLAAgGgFg");
	this.shape_525.setTransform(193.8,163.4);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgMAAgGgEQgHgFAAgJQAAgHAGgFQADgDADgCIANgDIANgDIAHgDIAEgFIABgIQAAgKgFgFQgCgDgCgBIgGgBQgFAAgDABQgEACgCAEIgCAFQgCAEgGAAQgDAAgCgCQgDgCAAgDQAAgEAHgEIAKgCIANgBIAMABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAGAAIAFgBIAFgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAFAAAGgDQADgCACgFQAEgGAAgMIAAgOIgMAGg");
	this.shape_526.setTransform(150.6,164.5);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#FF0000").s().p("AAlAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIAAgMIAAgQIAAgPQgBgFgCgDQgFgHgMAAQgNAAgGAIQgFAHAAAPIAAARIAAAHIABAJQABADACACQADACAIACIAAABIgtAAIAAgBQAGgBADgBIAEgFIACgHIAAgMIAAgQIAAgPQgBgFgDgDQgCgDgEgDQgEgBgFAAQgGgBgGADQgFADgDAEQgDAEgBAFQgBAFAAAIIAAAQIAAAHIABAJQABADACACQADACAIACIAAABIguAAIAAgBQAGgBADgBQACgCACgDQABgCABgFIAAgMIAAgVIAAgOQgBgDgCgDIgEgEIgHAAIAAgCIAdgEIACANQAHgGAIgDQAIgEAJAAQAKAAAGAFQADADAFAGQAIgHAJgDQAIgEAJAAQAMABAIAFQAIAHAAAJIAAAeIAAAHIABAJIADAFQADACAIACIAAABg");
	this.shape_527.setTransform(137,164.5);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgMAAgGgEQgHgFAAgJQAAgHAFgFQAEgDADgCIANgDIANgDIAHgDIAEgFIABgIQAAgKgFgFQgCgDgCgBIgGgBQgFAAgDABQgDACgDAEIgCAFQgCAEgGAAQgDAAgDgCQgCgCAAgDQAAgEAIgEIAJgCIAMgBIANABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAGAAIAGgBIAEgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAGAAAEgDQAEgCACgFQAEgGAAgMIAAgOIgMAGg");
	this.shape_528.setTransform(111.4,164.5);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#FF0000").s().p("AAHAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIABgMIAAgSIgBgPIgDgHQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDAEgBAEIgBAPIAAARIAAAHIABAJQABADACACQADACAIACIAAABIguAAIAAgBQAGgBADgBQACgCACgDQABgCABgFIAAgMIAAgVIAAgNQgBgEgCgDQgCgCgCgBIgHgBIAAgCIAcgEIACAKIAAACQANgMARAAQANAAAIAGQAIAFAAAKIAAAmIABAJQABADADACQADACAHACIAAABg");
	this.shape_529.setTransform(95.4,164.5);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgDQABgCABgFIABgMIAAgXIgBgMQgBgDgBgDIgFgDIgHgCIAAgCIAdgDIAAA0IABAGIAAAJQABAEACABQADADAIABIAAACgAgGgxQgDgCABgEQgBgDADgDQADgCADAAQAEAAADACQADADAAADQAAAEgDACQgDACgEAAQgDAAgDgCg");
	this.shape_530.setTransform(87.2,162);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#FF0000").s().p("AgCAnIgag4QgHgNgCgCIgDgDIgFgBIAAgCIAoAAIAAACIgGACQgDACgBAEIABAGIAFAKIAQAkIARgmQADgJAAgEQAAgFgDgCIgGgCIAAgCIAcAAIAAACQgFACgEADQgEAEgGANIgZA1g");
	this.shape_531.setTransform(57.6,164.5);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgDQACgCAAgFIAAgMIAAgXIAAgMQAAgDgCgDIgFgDIgHgCIAAgCIAdgDIAAA0IAAAGIABAJQABAEACABQAEADAHABIAAACgAgGgxQgCgCgBgEQABgDACgDQADgCADAAQAEAAADACQACADAAADQAAAEgCACQgDACgEAAQgEAAgCgCg");
	this.shape_532.setTransform(50.5,162);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#FF0000").s().p("AglAwQgGgFAAgIQAAgGAEgEQAFgEAGAAQAFAAADACQADACAAAFIAAABIgCAAIgEgEIgEgBQgEAAgDADQgDADAAAFQAAAHAIAFQAJAFANAAQANAAAJgFQAIgGAAgIQAAgHgFgDQgGgEgLAAIgPAAQgLAAgGgEQgGgFAAgGQAAgGAGgDIANgEQgJgEgFgGQgFgGAAgHQAAgJAIgHQAFgFAGgCQAGgCAHAAQAJAAAKAGQAFgEAEgBQAEgBAFAAQAFAAADABQAEADAAADQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgEAAgCgDIgDgDQgCgCgDAAQgEAAgFAEQAJAJAAAJQAAAMgMAHQgGAEgHABIgNABQgPABAAAFQAAAGANAAIAQAAQAKAAAGACQAGABAFADQAJAGAAALQAAAMgLAGQgLAHgUAAQgXAAgJgIgAgRgvQgCADgBAFQgCAFAAAFQAAAKAFAGQAFAGAHAAQAHAAAEgGQAEgGAAgLQAAgMgFgGQgEgFgGAAQgHAAgFAGg");
	this.shape_533.setTransform(-23.6,166.1);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#FF0000").s().p("AAYA+IAAgBIAJgCIAHgEQADgDABgFQACgEAAgJIAAhRIg1BtIgDAAIg1hsIAABQIABANQACAFADADIAHAEIAJACIAAABIgxAAIAAgBIAKgCIAHgEQADgDACgFIABgNIAAhDIAAgHQgBgHgCgEQgDgEgEgCQgFgCgIgBIAAgCIAuAAIAsBhIAwhhIAqAAIAAACIgJACQgDABgDADIgEAEIgCAGIAAALIAABDQgBAJACAFQABAFAEACQAFAFAKABIAAABg");
	this.shape_534.setTransform(-47,162.2);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgBABgDQABgCABgFIABgMIAAgXIgBgMQAAgDgDgDQgBgCgDgBIgHgCIAAgCIAdgDIAAA0IABAGIAAAJQABAEACABQADADAIABIAAACgAgGgxQgCgCAAgEQAAgDACgDQADgCADAAQAEAAACACQAEADAAADQAAAEgEACQgCACgEAAQgDAAgDgCg");
	this.shape_535.setTransform(-93.9,162);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#FF0000").s().p("Ag3A+IAAgBQAFgBAEgBQAFgCACgCQADgCACgGIABgNIAAhDIgBgMQgBgIgIgEQgEgCgIgBIAAgCIBsAAIADAfIgCAAIgFgLQgFgHgJgFQgFgDgGAAIgTgBIgPAAIAAA2IAEAAQASAAAIgIQAEgDACgEIACgLIACAAIAAA2IgDAAQgBgJgDgFQgCgFgGgEQgEgBgGgBQgGgBgJAAIAAAkIABANQABAFADADIAGAEIAKACIAAABg");
	this.shape_536.setTransform(-165.6,162.2);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#FF0000").s().p("Ag5A+IAAgBIAJgCIAHgEQADgDABgFIABgNIAAhDIAAgMIgDgHQgCgDgFgCQgEgCgHgBIAAAAIAAgCIA+AAQARABAHABQAIABAGAFQAPAKABAQQgBARgPAIQgHADgMAAIgRABIgTAAIAAAhQgBAJACAEQABAFADADIAHAEIAIACIAAABgAgMgBIAKAAQAJAAAGgBQAGgBAEgFQAKgHAAgOQAAgHgDgHQgDgGgFgEQgHgFgJAAIgJAAIgJAAg");
	this.shape_537.setTransform(-214.3,162.2);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#FF0000").s().p("AgNAvQgCgCgBgDIgBgLIAAg3IgMAAIAAgBQAHgCAGgFIAFgHIAFgIIAAgEIAEAAIAAAYIAaAAIAAADIgaAAIAAA1QAAAJADAFQACACADABQAEABADAAQAFAAADgBIAHgHIABACQgCAGgHACQgGACgKABQgLAAgGgFg");
	this.shape_538.setTransform(-243.2,163.4);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#FF0000").s().p("AgMAvQgEgCgBgDIgBgLIAAg3IgKAAIAAgBQAGgCAGgFIAGgHIADgIIABgEIAFAAIAAAYIAZAAIAAADIgZAAIAAA1QgBAJADAFQACACAEABQACABAFAAQAEAAADgBIAHgHIABACQgDAGgGACQgGACgJABQgMAAgFgFg");
	this.shape_539.setTransform(-248.8,163.4);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgBABgDQABgCABgFIABgMIAAgXIgBgMQgBgDgCgDQgBgCgDgBIgHgCIAAgCIAdgDIAAA0IAAAGIABAJQABAEADABQACADAIABIAAACgAgGgxQgDgCAAgEQAAgDADgDQADgCADAAQAEAAACACQADADABADQgBAEgDACQgCACgEAAQgEAAgCgCg");
	this.shape_540.setTransform(-254.7,162);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#FF0000").s().p("Ag+A+IAAgBQAKgBAGgFQADgDACgFIABgNIAAhDIgBgOQgCgFgDgDQgDgCgEgBIgJgCIAAgCIBCAAIAAACIgJACQgDABgDACQgEADgBAFQgBAFAAAJIAAA0IABASQAAAGACAEQAEAGAHADQAHAEALAAQANgBAJgCQAIgDAFgGQAEgEADgGIAEgNIACAAIgBAlg");
	this.shape_541.setTransform(-263.5,162.2);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#FF0000").s().p("AAYA+IAAgBIAKgCIAGgEQADgDABgFQACgEAAgJIAAhRIg1BtIgCAAIg2hsIAABQIABANQABAFAEADIAGAEIAKACIAAABIgxAAIAAgBIAKgCIAHgEQADgDABgFIABgNIAAhDIAAgHQAAgHgCgEQgDgEgEgCQgFgCgIgBIAAgCIAuAAIAsBhIAvhhIArAAIAAACIgJACQgDABgEADIgDAEIgBAGIgBALIAABDQAAAJABAFQABAFADACQAGAFAKABIAAABg");
	this.shape_542.setTransform(-294.2,162.2);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#FF0000").s().p("AgkBBIAAgDQAGAAADgCQACgBACgDQABgCABgEIAAgMIAAgvIgPAAIAAgDIAPAAIAAgXQAAgIACgFQADgEAGgEQAFgDAHgDQAIgCAJAAQAIABAFACQAFACAAAEQAAABAAABQAAABAAAAQAAABgBAAQAAABgBAAQgCACgDAAIgFgBIgEgFQgDgEgCgBQgCgBgDAAIgIABIgEADQgCADgBAFIgBALIAAAZIAUAAIAAADIgUAAIAAAvIAAAHIABAJQABADACACQACADAIAAIAAADg");
	this.shape_543.setTransform(276.1,138.1);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#FF0000").s().p("AgQAlQgJgEgGgHQgJgLAAgPQAAgTARgMQAMgIAOAAQAJAAAHACQAIADAEAFQAIAHAAAMIg9AAIAAAGQAAAHADAIQADAIAEAFQAFAFAHADQAGADAHAAQAGAAAFgCQAFgCADgDQAEgDADgHIACABQgCALgKAFQgIAFgQAAQgMAAgJgDgAgNgfQgHAHgBAKIAsAAQgBgJgDgFQgCgEgFgDQgFgCgFAAQgIAAgHAGg");
	this.shape_544.setTransform(235.7,140.6);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#FF0000").s().p("AgNAwQgCgDgBgDIgCgLIAAg2IgLAAIAAgCQAHgBAGgGIAFgHIAFgJIABgCIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QABAKACADQACADADABQADABAEABQAFgBAEgBIAGgGIACABQgDAFgHADQgGADgJgBQgMAAgGgDg");
	this.shape_545.setTransform(228.6,139.5);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#FF0000").s().p("AgaAdQgLgKAAgRQAAgHACgIQAEgIAFgFQAHgHAKgDQAIgDAKAAQAPAAAKAGQAEADAAAFQAAACgBADQgDABgDAAQgHAAgDgIIgDgGIgCgCQgDgCgFAAQgGAAgEADQgFACgDAEQgEAEgCAGQgDAKAAAIQgBAIAEAHQADAIAGAFQAIAJAMAAQAKAAAHgGQADgDADgHIACABQgDAKgIAEQgHAEgNAAQgVAAgMgLg");
	this.shape_546.setTransform(220.9,140.6);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAFgFQAEgDAEgCIALgDIAOgDIAHgDIAEgFIABgIQAAgKgEgFQgCgDgDgBIgHgBQgEAAgEABQgDACgBAEIgDAFQgCAEgFAAQgEAAgDgCQgCgCAAgDQAAgEAIgEIAKgCIALgBIANABQAHABAFADQAHADACAGIAAAJIAAAhIABALQACAHAHAAIAFgBIAEgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgKAFIgGAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAEAAAFgDQAEgCACgFQAEgGgBgMIAAgOIgLAGg");
	this.shape_547.setTransform(212.3,140.6);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgMAAgGgEQgHgFAAgJQAAgHAGgFQADgDADgCIANgDIANgDIAGgDIAFgFIABgIQAAgKgFgFQgCgDgCgBIgGgBQgFAAgEABQgCACgDAEIgCAFQgCAEgGAAQgDAAgCgCQgDgCAAgDQAAgEAHgEIAKgCIANgBIAMABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAEAAAGgDQADgCACgFQADgGABgMIAAgOIgMAGg");
	this.shape_548.setTransform(195.7,140.6);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#FF0000").s().p("AAHBAIAAgCIAIgBIAEgDQACgDABgEIABgLIAAgdIgBgLIgEgFQgGgGgJAAQgZAAAAAiIAAAPIABAHIAAAJQABADADACQADACAHABIAAACIguAAIAAgCQAGAAADgCQADgBABgDQACgCAAgFIABgMIAAhHIgBgNQAAgEgCgCIgFgEIgHgBIAAgCIAegDIAAA+IAHgGIAHgEQAHgDAJAAQAMAAAJAEQAFAEADAEQACAEAAAJIAAAbIAAAHIABAJQAAADADACQADACAIABIAAACg");
	this.shape_549.setTransform(185.1,138.1);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAGgFQACgDAFgCIALgDIAOgDIAGgDIAFgFIABgIQAAgKgFgFQgBgDgDgBIgHgBQgEAAgEABQgCACgCAEIgDAFQgCAEgFAAQgEAAgCgCQgDgCAAgDQAAgEAHgEIALgCIAMgBIAMABQAHABAFADQAHADACAGIAAAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAFAAAFgDQADgCACgFQADgGAAgMIAAgOIgLAGg");
	this.shape_550.setTransform(144.6,140.6);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#FF0000").s().p("AAHBAIAAgCIAIgBIAEgDQACgDABgEIABgLIAAgdIgBgLIgEgFQgGgGgJAAQgZAAAAAiIAAAPIABAHIAAAJQABADADACQADACAHABIAAACIguAAIAAgCQAGAAADgCQADgBABgDQACgCAAgFIABgMIAAhHIgBgNQAAgEgCgCIgFgEIgHgBIAAgCIAegDIAAA+IAHgGIAHgEQAHgDAJAAQAMAAAJAEQAFAEADAEQACAEAAAJIAAAbIAAAHIABAJQAAADADACQADACAIABIAAACg");
	this.shape_551.setTransform(101.8,138.1);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#FF0000").s().p("AgNAwQgCgDgBgDIgBgLIAAg2IgMAAIAAgCQAHgBAGgGIAFgHIAFgJIABgCIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QAAAKADADQACADADABQAEABADABQAFgBADgBIAHgGIACABQgDAFgHADQgGADgKgBQgLAAgGgDg");
	this.shape_552.setTransform(93.8,139.5);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAOAAQAJAAAIACQAGADAFAFQAIAHAAAMIg9AAIAAAGQAAAHACAIQADAIAFAFQAFAFAHADQAGADAHAAQAGAAAFgCQAFgCADgDQAEgDADgHIACABQgCALgJAFQgKAFgPAAQgLAAgJgDgAgNgfQgHAHgBAKIAsAAQAAgJgDgFQgDgEgFgDQgFgCgFAAQgIAAgHAGg");
	this.shape_553.setTransform(57.8,140.6);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOAMgLQAQgOAUAAQAVAAAPAOQANALAAAOQAAAPgMALQgOAOgXAAQgWAAgOgOgAgUgbQgJALAAAQQAAAPAIALQAJAMAMAAQAGAAAGgCQAFgDAEgFQAEgFACgIQADgIAAgHQAAgGgDgIQgDgIgEgFQgJgKgLAAQgLAAgJAKg");
	this.shape_554.setTransform(36.4,140.6);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#FF0000").s().p("AAUA4QgIAFgHABQgGACgHAAQgRAAgKgIQgIgFgEgJQgEgHAAgKQAAgKAEgJQAFgHAIgGQAMgIAQAAQAGAAAGACQAGABAIAGIAAgiQAAgKgFgFQgDgEgJAAIAAgCIAhgEIAABpQgBALAEAEQAEAFAIgBIAAACIgeAFIgBgKgAgWgEQgFAEgDAIQgDAIAAAHQABAJACAHQADAHAEAGQAIAKALgBQAFAAAFgCQAFgDADgEQADgEABgHQABgGABgMQgBgNgBgGQgBgGgEgDQgCgEgFgCQgEgCgFAAQgLAAgIAJg");
	this.shape_555.setTransform(20,138.3);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#FF0000").s().p("AAHAoIAAgDQAGAAADgCQADgBABgDQACgCAAgEIABgMIAAgTIgBgOIgDgIQgDgEgEgBQgFgCgFAAQgFAAgFACQgFACgDADQgDAEgBAFIgBAQIAAAQIAAAHIABAJQABADACACQADADAIAAIAAADIguAAIAAgDQAGAAADgCQACgBACgDQABgCABgEIAAgMIAAgWIAAgNQgBgEgCgCIgEgEIgHgCIAAgCIAcgCIACAKIAAABQANgLARAAQANgBAIAGQAIAFAAAKIAAAmIABAJQABADADACQADADAHAAIAAADg");
	this.shape_556.setTransform(8.7,140.6);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgMAAgGgEQgHgFAAgJQAAgHAGgFQADgDADgCIANgDIANgDIAGgDIAFgFIABgIQAAgKgFgFQgCgDgCgBIgGgBQgFAAgDABQgEACgCAEIgCAFQgCAEgGAAQgDAAgCgCQgDgCAAgDQAAgEAHgEIAKgCIANgBIAMABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAGAAIAGgBIAEgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAFAAAGgDQADgCACgFQAEgGAAgMIAAgOIgMAGg");
	this.shape_557.setTransform(-1,140.6);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#FF0000").s().p("AgjA2QgEgCAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQACgBADAAIAGABIAFACIADAAQAGAAAEgJIADgHQADgEAAgDQgBgDgEgIIgVgtIgEgHIgEgIIgDgDQgCgCgEgBIAAgCIAoAAIAAACIgGACQgEACAAAEQAAAEAFAJIAQAmIAPggQAGgMAAgFQAAgEgDgDQgDgCgEgBIAAgCIAdAAIAAACIgGADIgEADIgKATIgeA/QgFAMgDADQgGAGgIAAQgGAAgDgCg");
	this.shape_558.setTransform(-15.8,142.3);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#FF0000").s().p("AAHAoIAAgDQAGAAADgCQADgBABgDQACgCAAgEIABgMIAAgTIgBgOIgDgIQgDgEgEgBQgFgCgFAAQgFAAgFACQgFACgDADQgDAEgBAFIgBAQIAAAQIAAAHIABAJQABADACACQADADAIAAIAAADIguAAIAAgDQAGAAADgCQACgBACgDQABgCABgEIAAgMIAAgWIAAgNQgBgEgCgCIgEgEIgHgCIAAgCIAcgCIACAKIAAABQANgLARAAQANgBAIAGQAIAFAAAKIAAAmIABAJQABADADACQADADAHAAIAAADg");
	this.shape_559.setTransform(-25.9,140.6);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#FF0000").s().p("AAXAcQgOAMgRAAQgNAAgHgGQgJgFABgKIAAgfIAAgHIgBgJQgBgDgDgCQgCgCgJgCIAAgCIAgAAIAAAuIAAAOQABAFACADQACADAFACQAEACAGAAQAEAAAFgCQAGgCACgEQADgDABgFIACgPIAAgRIgBgHIgBgJQgBgDgCgCQgDgCgHgCIAAgCIAeAAIAAAxIABANQABAEABACQACADACABIAIACIAAACIgdADQgBgGAAgGg");
	this.shape_560.setTransform(-72.4,140.7);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#FF0000").s().p("AglAwQgGgFAAgIQAAgGAEgEQAFgEAGAAQAFAAADACQADACAAAFIAAABIgCAAIgEgEIgEgBQgEAAgDADQgDADAAAFQAAAHAIAFQAJAFANAAQANAAAJgFQAIgGAAgIQAAgHgFgDQgGgEgLAAIgPAAQgLAAgGgEQgGgFAAgGQAAgGAGgDIANgEQgJgEgFgGQgFgGAAgHQAAgJAIgHQAFgFAGgCQAGgCAHAAQAJAAAKAGQAFgEAEgBQAEgBAFAAQAFAAADABQAEADAAADQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgEAAgCgDIgDgDQgCgCgDAAQgEAAgFAEQAJAJAAAJQAAAMgMAHQgGAEgHABIgNABQgPABAAAFQAAAGANAAIAQAAQAKAAAGACQAGABAFADQAJAGAAALQAAAMgLAGQgLAHgUAAQgXAAgJgIgAgRgvQgCADgBAFQgCAFAAAFQAAAKAFAGQAFAGAHAAQAHAAAEgGQAEgGAAgLQAAgMgFgGQgEgFgGAAQgHAAgFAGg");
	this.shape_561.setTransform(-98.7,142.2);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#FF0000").s().p("Ag5A/IAAgDIAKgBIAGgEQADgDABgEIABgOIAAhCIAAgNIgDgHQgDgDgEgCQgEgCgGAAIgBAAIAAgCIA+AAQAQAAAIABQAIABAGAFQAQAKAAAQQAAARgQAIQgIADgKABIgSAAIgTAAIAAAhQAAAJABAFQABAEADADIAHAEIAIABIAAADgAgMgBIAKAAQAJAAAGgCQAGgBAEgDQAKgJAAgNQAAgIgDgFQgDgHgFgEQgHgEgIgBIgKAAIgJAAg");
	this.shape_562.setTransform(-119.1,138.3);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAOAAQAJAAAIACQAGADAFAFQAIAHAAAMIg9AAIAAAGQAAAHACAIQADAIAFAFQAFAFAHADQAGADAHAAQAGAAAFgCQAFgCADgDQAEgDADgHIACABQgCALgKAFQgJAFgPAAQgLAAgJgDgAgNgfQgHAHgBAKIAsAAQAAgJgDgFQgDgEgFgDQgFgCgFAAQgIAAgHAGg");
	this.shape_563.setTransform(-135.7,140.6);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#FF0000").s().p("AAlAoIAAgDQAGAAADgCQADgBABgDQACgCAAgEIAAgMIAAgRIAAgPQgBgEgCgEQgFgIgMAAQgNAAgGAJQgFAHAAAQIAAAQIAAAHIABAJQABADACACQADADAIAAIAAADIgtAAIAAgDQAGAAADgCIAEgEIACgGIAAgMIAAgQIAAgQQgBgFgDgDQgCgDgEgDQgEgCgFAAQgGABgGACQgFACgDAFQgDADgBAGQgBAFAAAJIAAAPIAAAHIABAJQABADACACQADADAIAAIAAADIguAAIAAgDQAGAAADgCQACgBACgDQABgCABgEIAAgMIAAgWIAAgNQgBgEgCgCIgEgFIgHgBIAAgCIAdgCIACAMQAHgGAIgEQAIgCAJAAQAKAAAGADQADADAFAHQAIgHAJgEQAIgCAJAAQAMAAAIAFQAIAHAAAJIAAAeIAAAHIABAJIADAFQADADAIAAIAAADg");
	this.shape_564.setTransform(-163.4,140.6);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#FF0000").s().p("AgkBBIAAgDQAGAAADgCQACgBACgDQABgCABgEIAAgMIAAgvIgPAAIAAgDIAPAAIAAgXQAAgIACgFQADgEAGgEQAFgDAHgDQAIgCAJAAQAIABAFACQAFACAAAEQAAABAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAIgFgBIgEgFQgDgEgCgBQgCgBgDAAIgIABIgEADQgCADgBAFIgBALIAAAZIAUAAIAAADIgUAAIAAAvIAAAHIABAJQABADACACQACADAIAAIAAADg");
	this.shape_565.setTransform(-183.6,138.1);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgMAAgGgEQgHgFAAgJQAAgHAGgFQACgDAEgCIANgDIANgDIAGgDIAFgFIABgIQAAgKgFgFQgCgDgCgBIgGgBQgFAAgEABQgCACgDAEIgCAFQgCAEgGAAQgDAAgCgCQgDgCAAgDQAAgEAHgEIAKgCIANgBIAMABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAEAAAGgDQADgCACgFQADgGABgMIAAgOIgMAGg");
	this.shape_566.setTransform(-197.1,140.6);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgCACgDQACgCAAgEIAAgMIAAgWIAAgOQAAgCgCgDIgFgDIgHgCIAAgCIAdgDIAAAzIAAAIIABAJQABACACACQAEADAHABIAAACgAgGgyQgCgCgBgDQABgDACgDQADgCADAAQAEAAADACQACADAAADQAAADgCACQgDADgEAAQgEAAgCgDg");
	this.shape_567.setTransform(-217.7,138.1);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#FF0000").s().p("AgkA2QgDgCAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQACgBAEAAIAFABIAFACIACAAQAHAAAEgJIADgHQACgEAAgDQAAgDgDgIIgXgtIgCgHIgFgIIgDgDQgCgCgFgBIAAgCIAqAAIAAACIgHACQgEACAAAEQAAAEAEAJIARAmIAPggQAGgMAAgFQAAgEgDgDQgDgCgFgBIAAgCIAfAAIAAACIgHADIgFADIgJATIgdA/QgFAMgEADQgGAGgJAAQgFAAgEgCg");
	this.shape_568.setTransform(-230,142.3);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#FF0000").s().p("AAHBAIAAgCIAIgBIAEgDQACgDABgEIABgLIAAgdIgBgLIgEgFQgGgGgJAAQgZAAAAAiIAAAPIABAHIAAAJQABADADACQADACAHABIAAACIguAAIAAgCQAGAAADgCQADgBABgDQACgCAAgFIABgMIAAhHIgBgNQAAgEgCgCIgFgEIgHgBIAAgCIAegDIAAA+IAHgGIAHgEQAHgDAJAAQAMAAAJAEQAFAEADAEQACAEAAAJIAAAbIAAAHIABAJQAAADADACQADACAIABIAAACg");
	this.shape_569.setTransform(-240.2,138.1);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#FF0000").s().p("AgMAmIgGgCIgCAAQgEAAgCADIgCAAIAAgaIACAAQADAJAEAGQAIAKALAAQAGAAAFgDQAFgEAAgHQAAgGgEgEIgFgEIgKgGQgNgFgFgEQgGgGAAgHQAAgJAGgGQAIgGAMAAIAJABIADACIADAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABgBIACAAIABAVIgCAAIgDgHQgBgDgCgCIgIgFQgEgCgDAAQgGAAgEADQgEAEAAAFQAAAFADAEQAEADAIADIAKAFQAKADAFAFQAFAGAAAIQAAAKgHAGQgJAHgMAAQgGAAgHgCg");
	this.shape_570.setTransform(-249.6,140.6);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAOAAQAJAAAIACQAGADAFAFQAIAHAAAMIg9AAIAAAGQAAAHACAIQAEAIAEAFQAFAFAGADQAHADAHAAQAGAAAFgCQAFgCADgDQAEgDADgHIACABQgDALgIAFQgKAFgPAAQgMAAgIgDgAgNgfQgHAHgBAKIAsAAQAAgJgDgFQgDgEgFgDQgFgCgFAAQgIAAgHAGg");
	this.shape_571.setTransform(-265.8,140.6);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#FF0000").s().p("AgMAwQgEgDgBgDIgBgLIAAg2IgKAAIAAgCQAGgBAGgGIAGgHIADgJIABgCIAFAAIAAAXIAZAAIAAAEIgZAAIAAA0QgBAKADADQACADAEABQACABAFABQAEgBADgBIAHgGIABABQgDAFgGADQgGADgJgBQgMAAgFgDg");
	this.shape_572.setTransform(-278.5,139.5);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#FF0000").s().p("AAXAcQgNAMgSAAQgMAAgJgGQgIgFAAgKIAAgfIAAgHIgBgJQAAgDgCgCQgEgCgIgCIAAgCIAgAAIAAAuIAAAOQABAFACADQADADADACQAFACAFAAQAFAAAFgCQAFgCADgEQADgDACgFIABgPIAAgRIgBgHIAAgJQgBgDgDgCQgCgCgJgCIAAgCIAfAAIAAAxIABANQAAAEACACQACADACABIAHACIAAACIgcADQgCgGABgGg");
	this.shape_573.setTransform(-287.3,140.7);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#FF0000").s().p("Ag3A/IAAgDQAFAAAEgBQAFgCACgCQADgDACgEIABgOIAAhCIgBgNQgBgIgIgEQgEgCgIAAIAAgCIBsAAIADAdIgCABIgFgKQgFgJgJgEQgFgCgGgCIgTAAIgPAAIAAA1IAEAAQASAAAIgHQAEgDACgEIACgMIACABIAAA2IgDAAQgBgJgDgFQgCgFgGgDQgEgCgGgBQgGgBgJAAIAAAkIABAOQABAEADADIAGAEIAKABIAAADg");
	this.shape_574.setTransform(-303.5,138.3);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#FF0000").s().p("AgkA2QgDgCAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQACgBAEAAIAFABIAFACIACAAQAHAAAEgJIADgHQACgEABgDQAAgDgFgIIgWgtIgCgHIgFgIIgDgDQgDgCgEgBIAAgCIAqAAIAAACIgHACQgEACAAAEQAAAEAEAJIARAmIAPggQAGgMAAgFQAAgEgDgDQgDgCgFgBIAAgCIAeAAIAAACIgGADIgFADIgJATIgdA/QgFAMgEADQgGAGgJAAQgFAAgEgCg");
	this.shape_575.setTransform(21.9,118.4);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#FF0000").s().p("AAHBAIAAgCIAIgBIAEgDQACgDABgEIABgLIAAgdIgBgLIgEgFQgGgGgJAAQgZAAAAAiIAAAPIABAHIAAAJQABADADACQADACAHABIAAACIguAAIAAgCQAGAAADgCQADgBABgDQACgCAAgFIABgMIAAhHIgBgNQAAgEgCgCIgFgEIgHgBIAAgCIAegDIAAA+IAHgGIAHgEQAHgDAJAAQAMAAAJAEQAFAEADAEQACAEAAAJIAAAbIAAAHIABAJQAAADADACQADACAIABIAAACg");
	this.shape_576.setTransform(11.7,114.2);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#FF0000").s().p("AgMAmIgGgCIgCAAQgEAAgCADIgCAAIAAgaIACAAQADAJAEAGQAIAKALAAQAGAAAFgDQAFgEAAgHQAAgGgEgEIgFgEIgKgGQgNgFgFgEQgGgGAAgHQAAgJAGgGQAIgGAMAAIAJABIADACIADAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABgBIACAAIABAVIgCAAIgDgHQgBgDgCgCIgIgFQgEgCgDAAQgGAAgEADQgEAEAAAFQAAAFADAEQAEADAIADIAKAFQAKADAFAFQAFAGAAAIQAAAKgHAGQgJAHgMAAQgGAAgHgCg");
	this.shape_577.setTransform(2.3,116.8);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAIACQAHADAEAFQAIAHAAAMIg9AAIAAAGQAAAHACAIQADAIAFAFQAFAFAGADQAGADAIAAQAGAAAFgCQAFgCADgDQAEgDADgHIACABQgDALgIAFQgKAFgPAAQgMAAgIgDgAgNgfQgGAHgCAKIAsAAQAAgJgDgFQgEgEgEgDQgFgCgFAAQgIAAgHAGg");
	this.shape_578.setTransform(-13.9,116.8);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#FF0000").s().p("AgMAwQgEgDgBgDIgBgLIAAg2IgKAAIAAgCQAGgBAGgGIAGgHIADgJIABgCIAFAAIAAAXIAZAAIAAAEIgZAAIAAA0QAAAKACADQACADAEABQACABAFABQAEgBAEgBIAGgGIABABQgDAFgGADQgGADgJgBQgMAAgFgDg");
	this.shape_579.setTransform(-21,115.7);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#FF0000").s().p("Ag3A/IAAgDQAFAAAEgBQAFgBACgDQADgDACgEIABgOIAAhCIgBgNQgBgIgIgEQgEgCgIAAIAAgCIBsAAIADAeIgCAAIgFgKQgFgJgJgEQgFgCgGgCIgTgBIgPAAIAAA2IAEAAQASAAAIgHQAEgDACgEIACgMIACABIAAA2IgDAAQgBgJgDgFQgCgFgGgDQgEgCgGgBQgGgBgJAAIAAAkIABAOQABAEADADIAGAEIAKABIAAADg");
	this.shape_580.setTransform(-51.6,114.4);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#FF0000").s().p("AAWAnIgWg8IgcA8IgDAAIgVg2IgDgHQgDgJgEgCIgHgDIAAgCIApAAIAAACQgMAAAAAIQAAAEAFALIAMAiIASgpQACgEAAgDQAAgJgLAAIAAgCIAoAAIAAACIgIACQgDACAAAEQAAAEACAFIAOAoIAQgkQADgHAAgDQAAgFgEgDIgHgDIAAgCIAfAAIAAACQgFAAgDADIgFAEIgFAKIgCAEIgZA2g");
	this.shape_581.setTransform(178.9,215.8);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#FF0000").s().p("AAUA4QgIAFgHABQgGACgHAAQgRAAgKgIQgIgFgEgJQgEgHABgKQgBgKAEgJQAFgHAIgGQAMgIAQAAQAGAAAGABQAGACAIAGIAAgiQAAgKgFgFQgDgEgJAAIAAgCIAhgEIAABpQgBALAEAEQAEAFAIgBIAAACIgeAFIgBgKgAgWgEQgFAEgDAIQgDAIAAAHQABAJACAHQADAHAEAGQAIAKALgBQAFAAAFgCQAFgDADgEQADgEABgHQABgGABgMQgBgNgBgGQgBgGgEgDQgCgEgFgCQgEgCgFAAQgLAAgIAJg");
	this.shape_582.setTransform(166.7,213.4);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#FF0000").s().p("AgQAlQgJgEgGgHQgJgLAAgPQAAgTARgMQAMgIAOAAQAJAAAIACQAHADAEAFQAIAHAAAMIg9AAIAAAGQAAAHADAIQADAIAEAFQAFAFAHADQAGADAHAAQAGAAAFgCQAFgCADgDQAEgDADgHIACABQgCALgKAFQgIAFgQAAQgMAAgJgDgAgNgfQgHAHgBAKIAsAAQgBgJgCgFQgDgEgFgDQgFgCgFAAQgIAAgHAGg");
	this.shape_583.setTransform(150.6,215.8);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#FF0000").s().p("AgNAwQgCgDgBgDIgCgLIAAg2IgLAAIAAgCQAHgBAGgGIAFgHIAFgJIABgCIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QABAKACADQACADADABQADABAEABQAFgBAEgBIAGgGIACABQgDAFgHADQgGADgKgBQgLAAgGgDg");
	this.shape_584.setTransform(132.3,214.7);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#FF0000").s().p("AgMAwQgDgDgCgDIgBgLIAAg2IgLAAIAAgCQAHgBAGgGIAFgHIAFgJIABgCIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QABAKACADQACADADABQAEABAEABQAEgBAEgBIAGgGIACABQgEAFgGADQgGADgJgBQgMAAgFgDg");
	this.shape_585.setTransform(98.9,214.7);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#FF0000").s().p("AAUA4QgIAFgHABQgGACgIAAQgQAAgLgIQgHgFgEgJQgDgHAAgKQAAgKADgJQAFgHAHgGQAMgIARAAQAGAAAGABQAGACAIAGIAAgiQgBgKgEgFQgDgEgJAAIAAgCIAggEIAABpQAAALAEAEQAEAFAIgBIAAACIgeAFIgBgKgAgWgEQgFAEgDAIQgCAIAAAHQAAAJACAHQADAHAFAGQAHAKAMgBQAEAAAFgCQAEgDAEgEQADgEABgHQACgGAAgMQAAgNgCgGQgBgGgDgDQgDgEgFgCQgFgCgEAAQgLAAgIAJg");
	this.shape_586.setTransform(0.4,213.4);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#FF0000").s().p("AgNAwQgDgDAAgDIgBgLIAAg2IgLAAIAAgCQAGgBAGgGIAGgHIADgJIABgCIAFAAIAAAXIAZAAIAAAEIgZAAIAAA0QAAAKACADQACADAEABQADABADABQAFgBADgBIAHgGIABABQgDAFgGADQgGADgKgBQgLAAgGgDg");
	this.shape_587.setTransform(-103.2,214.7);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#FF0000").s().p("AgjAoIAAgDQAGAAADgCQADgBABgDQACgCAAgEIABgMIAAgWIgBgNQAAgEgCgCQgCgDgDgBIgHgCIAAgCIAbgCQACAHAAAGQAEgFAEgEQAIgEALAAQAHgBAEADQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDAAQgEAAgCgCIgDgDQgEgEgFAAQgIABgDAHQgEAJAAAOIAAAQIABAHIAAAJQABADACACQADADAHAAIAAADg");
	this.shape_588.setTransform(-222.3,215.7);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#FF0000").s().p("AgyA6IAAgCQAGgBADgBQADgBACgEIABgGIAAgMIAAg/QAAgKgDgEQgEgFgJAAIAAgCIAfgEIABAIIAAACQAIgFAGgBQAHgCAHAAQAQAAALAIQAIAFADAIQAFAIAAAKQAAAKgFAHQgEAJgIAGQgLAIgRAAQgHAAgGgCQgFgCgHgFIAAARIAAAGIAAAJQABADACACQAEADAIABIAAACgAgFgyQgFACgDAEQgDAEgCAHIAAATIAAASQACAGADAEQADAEAFACQAEACAEAAQALAAAJgJQAFgGACgHQADgHAAgIQAAgIgDgHQgCgIgEgFQgJgKgKAAQgFAAgFADg");
	this.shape_589.setTransform(-241.6,217.4);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgCABgCQACgDAAgEIABgMIAAgWIgBgNQgBgDgCgDIgEgEIgHgBIAAgCIAdgDIAAA0IAAAGIABAJQABAEADACQADACAHABIAAACgAgGgxQgDgCAAgEQAAgEADgCQADgCADAAQAEAAACACQADACAAAEQAAAEgDACQgCACgEAAQgDAAgDgCg");
	this.shape_590.setTransform(251,189.4);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#FF0000").s().p("AgOAWQAGgCAFgDQADgDACgEQAFgHAAgFIgFABQgFAAgDgDQgEgDAAgFQAAgEAEgEQADgDAFAAQAGAAAEAEQAEAFgBAHQABAHgEAGQgEAHgGAFQgGAEgJACg");
	this.shape_591.setTransform(214.2,196.1);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgCACgCQABgDABgEIAAgMIAAgWIAAgNQgBgDgBgDIgFgEIgHgBIAAgCIAdgDIAAA0IABAGIAAAJQABAEACACQADACAIABIAAACgAgGgxQgDgCABgEQgBgEADgCQADgCADAAQAEAAADACQADACAAAEQAAAEgDACQgDACgEAAQgDAAgDgCg");
	this.shape_592.setTransform(201.5,189.4);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#FF0000").s().p("AgMAvQgDgCgCgDIgBgLIAAg3IgLAAIAAgBQAHgCAGgFIAFgHIAFgIIABgEIADAAIAAAYIAaAAIAAADIgaAAIAAA1QABAJACAFQACACADABQAEACAEgBQAEABAEgCIAGgHIACACQgEAFgGADQgGADgJAAQgMAAgFgFg");
	this.shape_593.setTransform(185.3,190.8);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#FF0000").s().p("AAlAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIAAgLIAAgRIAAgPQgBgEgCgEQgFgIgMABQgNgBgGAJQgFAHAAAPIAAARIAAAHIABAJQABADACACQADADAIABIAAABIgtAAIAAgBQAGgBADgBIAEgFIACgHIAAgLIAAgRIAAgPQgBgFgDgDQgCgDgEgCQgEgCgFAAQgGAAgGACQgFADgDAEQgDADgBAGQgBAFAAAIIAAAQIAAAHIABAJQABADACACQADADAIABIAAABIguAAIAAgBQAGgBADgBQACgCACgDQABgCABgFIAAgLIAAgWIAAgOQgBgDgCgDIgEgDIgHgBIAAgCIAdgEIACANQAHgGAIgDQAIgEAJAAQAKAAAGAFQADADAFAGQAIgHAJgDQAIgEAJAAQAMAAAIAHQAIAFAAAKIAAAeIAAAHIABAJIADAFQADADAIABIAAABg");
	this.shape_594.setTransform(168.1,191.8);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOANgLQAPgOAUAAQAWAAAPAOQAMALAAAOQAAAPgMALQgOAOgXAAQgWAAgOgOgAgVgbQgIALAAAQQAAAPAIALQAJAMANAAQAGAAAFgCQAFgDAEgFQAEgFADgIQACgIAAgHQAAgGgCgIQgEgIgEgFQgIgKgMAAQgLAAgKAKg");
	this.shape_595.setTransform(154,191.9);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#FF0000").s().p("AgjAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIABgLIAAgWIgBgNQAAgEgCgDIgFgDIgHgBIAAgCIAbgEQACAIAAAHQAEgHAEgCQAIgGALAAQAHABAEACQADACAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDABQgEgBgCgCIgDgDQgEgEgFABQgIgBgDAJQgEAHAAAPIAAAQIABAHIAAAJQABADACACQADADAHABIAAABg");
	this.shape_596.setTransform(144.9,191.8);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#FF0000").s().p("AgkBAIAAgBQAGgBADgBQACgCACgDQABgCABgFIAAgLIAAgvIgPAAIAAgEIAPAAIAAgVQAAgJACgFQADgEAGgEQAFgDAHgCQAIgCAJAAQAIAAAFACQAFADAAAEQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAIgFgBIgEgEQgDgFgCgBQgCgBgDgBIgIACIgEAEQgCACgBAEIgBANIAAAXIAUAAIAAAEIgUAAIAAAvIAAAHIABAJQABADACACQACADAIABIAAABg");
	this.shape_597.setTransform(139,189.3);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#FF0000").s().p("AgQAlQgJgEgGgHQgJgLAAgPQAAgTARgMQAMgIAOAAQAJAAAHACQAIADAFAFQAHAHAAAMIg8AAIgBAGQAAAHADAIQADAIAEAFQAFAFAHADQAFADAJAAQAFAAAFgCQAFgCAEgDQADgDADgHIACABQgCALgKAFQgIAFgPAAQgMAAgKgDgAgNgfQgGAHgCAKIAsAAQgBgJgDgFQgDgEgEgDQgFgCgFAAQgIAAgHAGg");
	this.shape_598.setTransform(124.7,191.9);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#FF0000").s().p("AAUA4QgIAEgGACQgHACgIAAQgPAAgMgIQgHgGgEgHQgDgJAAgJQAAgKADgIQAFgIAHgGQAMgJAQAAQAIAAAFACQAGADAHAEIAAghQAAgKgEgEQgDgFgJAAIAAgCIAggDIAABpQABAJADAFQAEAFAIAAIAAACIgeADIgBgJgAgWgEQgFAEgCAIQgDAHAAAJQAAAHACAIQADAHAFAGQAHAKAMAAQAEgBAFgCQAFgDADgDQADgFABgGQABgHAAgMQAAgNgBgGQgBgFgDgFQgDgDgFgCQgFgCgDAAQgMAAgIAJg");
	this.shape_599.setTransform(114.6,189.5);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgCABgCQACgDAAgEIABgMIAAgWIgBgNQgBgDgCgDIgEgEIgHgBIAAgCIAdgDIAAA0IAAAGIABAJQABAEADACQADACAHABIAAACgAgGgxQgDgCAAgEQAAgEADgCQADgCADAAQAEAAACACQADACAAAEQAAAEgDACQgCACgEAAQgDAAgDgCg");
	this.shape_600.setTransform(106.1,189.4);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#FF0000").s().p("AAIA/IAAgCQAJgBADgDQAHgDAAgGQAAgEgDgHIgCgDIgKgWIgtAAIgFANIgDAFQgFALABAFQAAAEACADQABACADACQAEADAHABIAAACIgwAAIAAgCQAGgBAEgCQAEgCAEgFIAHgJIAJgSIAlhWIAGAAIAtBgIAJAQQADAEADACIAGADIAJACIAAACgAgfAIIApAAIgUgug");
	this.shape_601.setTransform(88.5,189.5);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#FF0000").s().p("AAUA4QgIAEgHACQgGACgHAAQgQAAgLgIQgIgGgDgHQgFgJAAgJQAAgKAFgIQAEgIAIgGQAMgJAPAAQAIAAAFACQAGADAHAEIAAghQABgKgEgEQgEgFgJAAIAAgCIAhgDIAABpQgBAJAEAFQAEAFAJAAIAAACIgfADIgBgJgAgWgEQgFAEgDAIQgDAHAAAJQABAHACAIQADAHAEAGQAIAKALAAQAFgBAFgCQAEgDAEgDQADgFABgGQABgHAAgMQAAgNgBgGQgBgFgEgFQgCgDgFgCQgEgCgFAAQgLAAgIAJg");
	this.shape_602.setTransform(60.6,189.5);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#FF0000").s().p("AAXAcQgNAMgSAAQgNAAgHgGQgJgFABgKIAAgfIAAgHIgBgJQgBgDgCgCQgEgCgIgCIAAgCIAgAAIAAAuIAAAOQABAFACADQADADAEACQAEACAFAAQAFAAAFgCQAFgCADgEQADgDACgFIABgPIAAgRIgBgHIAAgJIgEgFQgDgCgHgCIAAgCIAeAAIAAAxIABANQAAAEACACQACADACABIAIACIAAACIgdADQgBgGAAgGg");
	this.shape_603.setTransform(49.2,191.9);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#FF0000").s().p("AgjAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIABgLIAAgWIgBgNQAAgEgCgDIgFgDIgHgBIAAgCIAbgEQACAIAAAHQAEgHAEgCQAIgGALAAQAHABAEACQADACAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDABQgEgBgCgCIgDgDQgEgEgFABQgIgBgDAJQgEAHAAAPIAAAQIABAHIAAAJQABADACACQADADAHABIAAABg");
	this.shape_604.setTransform(40.2,191.8);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#FF0000").s().p("AgkA2QgDgCAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQACgBADAAIAGABIAFACIADAAQAGAAAEgJIADgHQADgEAAgDQAAgDgFgIIgVgtIgEgHIgEgIIgDgDQgDgCgDgBIAAgCIAoAAIAAACIgGACQgEACAAAEQAAAEAFAJIAQAmIAPggQAGgMAAgFQAAgEgDgDQgDgCgEgBIAAgCIAdAAIAAACIgGADIgFADIgJATIgdA/QgGAMgDADQgGAGgIAAQgGAAgEgCg");
	this.shape_605.setTransform(26.6,193.5);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgDQACgCAAgFIAAgMIAAhHIAAgNQAAgEgCgCIgFgEIgHgBIAAgCIAdgDIAABlIABAHIAAAJQABADACACQAEACAHABIAAACg");
	this.shape_606.setTransform(19.4,189.3);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#FF0000").s().p("AgjAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIABgLIAAgWIgBgNQAAgEgCgDIgFgDIgHgBIAAgCIAbgEQACAIAAAHQAEgHAEgCQAIgGALAAQAHABAEACQADACAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDABQgEgBgCgCIgDgDQgEgEgFABQgIgBgDAJQgEAHAAAPIAAAQIABAHIAAAJQABADACACQADADAHABIAAABg");
	this.shape_607.setTransform(13.2,191.8);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#FF0000").s().p("AgCAnIgag4QgHgNgCgDIgDgCIgFgBIAAgCIAoAAIAAACIgGACQgDACgBAEIABAGIAFAKIAQAkIAQgnQAEgIAAgEQAAgFgDgCIgGgCIAAgCIAdAAIAAACQgGACgEADQgEAEgGANIgZA1g");
	this.shape_608.setTransform(-4.6,191.9);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#FF0000").s().p("AAHAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIABgLIAAgTIgBgPIgDgHQgDgEgEgBQgFgCgFAAQgFAAgFACQgFACgDADQgDAFgBAEIgBAPIAAARIAAAHIABAJQABADACACQADADAIABIAAABIguAAIAAgBQAGgBADgBQACgCACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDIgEgDIgHgBIAAgCIAcgEQACAGAAAEIAAACQANgMARAAQANABAIAFQAIAFAAAKIAAAmIABAJQABADADACQADADAHABIAAABg");
	this.shape_609.setTransform(-40,191.8);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgCACgCQABgDABgEIAAgMIAAgWIAAgNQAAgDgCgDIgFgEIgHgBIAAgCIAdgDIAAA0IABAGIAAAJQABAEACACQAEACAHABIAAACgAgGgxQgDgCABgEQgBgEADgCQADgCADAAQAEAAADACQACACAAAEQAAAEgCACQgDACgEAAQgDAAgDgCg");
	this.shape_610.setTransform(-48.2,189.4);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#FF0000").s().p("AgNAvQgDgCAAgDIgBgLIAAg3IgLAAIAAgBQAGgCAGgFIAGgHIADgIIABgEIAFAAIAAAYIAZAAIAAADIgZAAIAAA1QAAAJACAFQACACAEABQADACADgBQAFABADgCIAHgHIABACQgDAFgGADQgGADgKAAQgLAAgGgFg");
	this.shape_611.setTransform(-158.1,190.8);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgCACgCQABgDABgEIAAgMIAAgWIAAgNQgBgDgBgDIgFgEIgHgBIAAgCIAdgDIAAA0IABAGIAAAJQABAEACACQADACAIABIAAACgAgGgxQgDgCABgEQgBgEADgCQADgCADAAQAEAAADACQADACAAAEQAAAEgDACQgDACgEAAQgDAAgDgCg");
	this.shape_612.setTransform(-163.9,189.4);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAFgFQAEgDAEgCIALgDIAOgDIAHgDIAEgFIABgIQAAgKgEgFQgCgDgDgBIgHgBQgEAAgEABQgDACgBAEIgDAFQgCAEgFAAQgEAAgDgCQgCgCAAgDQAAgEAIgEIAKgCIALgBIANABQAHABAFADQAHADACAGIAAAJIAAAhIABALQACAHAGAAIAGgBIAEgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgKAFIgGAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAFAAAFgDQAEgCACgFQAEgGgBgMIAAgOIgLAGg");
	this.shape_613.setTransform(-170.6,191.9);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#FF0000").s().p("AgjAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIABgLIAAgWIgBgNQAAgEgCgDIgFgDIgHgBIAAgCIAbgEQACAIAAAHQAEgHAEgCQAIgGALAAQAHABAEACQADACAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDABQgEgBgCgCIgDgDQgEgEgFABQgIgBgDAJQgEAHAAAPIAAAQIABAHIAAAJQABADACACQADADAHABIAAABg");
	this.shape_614.setTransform(-179.3,191.8);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#FF0000").s().p("AgMAvQgDgCgCgDIgBgLIAAg3IgLAAIAAgBQAHgCAGgFIAFgHIAFgIIABgEIADAAIAAAYIAaAAIAAADIgaAAIAAA1QABAJACAFQACACADABQAEACAEgBQAEABAEgCIAGgHIACACQgEAFgGADQgGADgJAAQgMAAgFgFg");
	this.shape_615.setTransform(-185.5,190.8);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgCABgCQABgDABgEIABgMIAAgWIgBgNQgBgDgCgDIgEgEIgHgBIAAgCIAdgDIAAA0IAAAGIABAJQABAEADACQACACAIABIAAACgAgGgxQgDgCAAgEQAAgEADgCQADgCADAAQAEAAACACQADACABAEQgBAEgDACQgCACgEAAQgEAAgCgCg");
	this.shape_616.setTransform(-205.6,189.4);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#FF0000").s().p("AgNAvQgCgCgBgDIgCgLIAAg3IgLAAIAAgBQAHgCAGgFIAFgHIAFgIIABgEIADAAIAAAYIAaAAIAAADIgaAAIAAA1QABAJACAFQACACADABQADACAEgBQAFABAEgCIAGgHIACACQgDAFgHADQgGADgKAAQgLAAgGgFg");
	this.shape_617.setTransform(-210.6,190.8);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgCACgCQACgDAAgEIAAgMIAAgWIAAgNQAAgDgCgDIgFgEIgHgBIAAgCIAdgDIAAA0IAAAGIABAJQABAEACACQAEACAHABIAAACgAgGgxQgCgCgBgEQABgEACgCQADgCADAAQAEAAADACQACACAAAEQAAAEgCACQgDACgEAAQgEAAgCgCg");
	this.shape_618.setTransform(-224,189.4);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#FF0000").s().p("AAHAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIABgLIAAgTIgBgPIgDgHQgDgEgEgBQgFgCgFAAQgFAAgFACQgFACgDADQgDAFgBAEIgBAPIAAARIAAAHIABAJQABADACACQADADAIABIAAABIguAAIAAgBQAGgBADgBQACgCACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDIgEgDIgHgBIAAgCIAcgEIACAKIAAACQANgMARAAQANABAIAFQAIAFAAAKIAAAmIABAJQABADADACQADADAHABIAAABg");
	this.shape_619.setTransform(-232.2,191.8);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOANgLQAPgOAUAAQAWAAAPAOQAMALAAAOQAAAPgMALQgOAOgXAAQgWAAgOgOgAgVgbQgIALAAAQQAAAPAIALQAJAMANAAQAGAAAFgCQAFgDAEgFQAEgFADgIQACgIAAgHQAAgGgCgIQgEgIgEgFQgIgKgMAAQgLAAgKAKg");
	this.shape_620.setTransform(-243.3,191.9);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAFgFQAEgDADgCIAMgDIAOgDIAHgDIAEgFIABgIQAAgKgEgFQgCgDgDgBIgGgBQgFAAgDABQgEACgCAEIgCAFQgCAEgGAAQgDAAgDgCQgCgCAAgDQAAgEAIgEIAJgCIAMgBIANABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAGAAIAGgBIAEgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgKAFIgGAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAGAAAEgDQAEgCACgFQADgGAAgMIAAgOIgLAGg");
	this.shape_621.setTransform(-261.8,191.9);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#FF0000").s().p("AgMAvQgDgCgCgDIgBgLIAAg3IgLAAIAAgBQAHgCAGgFIAFgHIAFgIIABgEIADAAIAAAYIAaAAIAAADIgaAAIAAA1QABAJACAFQACACADABQAEACAEgBQAEABAEgCIAGgHIACACQgEAFgGADQgGADgJAAQgMAAgFgFg");
	this.shape_622.setTransform(-269.2,190.8);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#FF0000").s().p("AAHAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIABgLIAAgTIgBgPIgDgHQgDgEgEgBQgFgCgFAAQgFAAgFACQgFACgDADQgDAFgBAEIgBAPIAAARIAAAHIABAJQABADACACQADADAIABIAAABIguAAIAAgBQAGgBADgBQACgCACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDIgEgDIgHgBIAAgCIAcgEIACAKIAAACQANgMARAAQANABAIAFQAIAFAAAKIAAAmIABAJQABADADACQADADAHABIAAABg");
	this.shape_623.setTransform(-278,191.8);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#FF0000").s().p("AAHAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIABgMIAAgSIgBgPQgBgEgCgDQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDADQgDAFgBAEIgBAPIAAARIAAAHIABAJQABADACACQADADAIABIAAABIguAAIAAgBQAGgBADgBQACgCACgDQABgCABgFIAAgMIAAgVIAAgNQgBgEgCgDIgEgDIgHgBIAAgCIAcgEIACAKIAAACQANgMARAAQANABAIAFQAIAFAAAKIAAAmIABAJQABADADACQADADAHABIAAABg");
	this.shape_624.setTransform(233,168);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#FF0000").s().p("AgCAnIgbg4QgFgNgDgDIgDgCIgGgBIAAgCIApAAIAAACIgGACQgEACABAEIABAGIADAKIAQAkIARgnQAEgIAAgEQAAgFgDgCIgGgCIAAgCIAdAAIAAACQgGACgDADQgFAEgGANIgYA1g");
	this.shape_625.setTransform(213.3,168);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#FF0000").s().p("AAUA4QgIAEgGACQgHACgIAAQgPAAgMgIQgHgGgEgHQgDgJAAgJQAAgKADgIQAFgIAHgGQAMgJAQAAQAIAAAFACQAGADAHAEIAAghQAAgKgEgEQgDgFgJAAIAAgCIAggDIAABpQABAJADAFQAEAFAJAAIAAACIgfADIgBgJgAgWgEQgFAEgCAIQgDAHAAAJQAAAHACAIQADAHAFAGQAHAKAMAAQAEgBAFgCQAFgDADgDQADgFABgGQABgHAAgMQAAgNgBgGQgBgFgDgFQgDgDgFgCQgFgCgDAAQgMAAgIAJg");
	this.shape_626.setTransform(188.4,165.7);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#FF0000").s().p("AAHAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIABgMIAAgSIgBgPIgDgHQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDADQgDAFgBAEIgBAPIAAARIAAAHIABAJQABADACACQADADAIABIAAABIguAAIAAgBQAGgBADgBQACgCACgDQABgCABgFIAAgMIAAgVIAAgNQgBgEgCgDIgEgDIgHgBIAAgCIAcgEIACAKIAAACQANgMARAAQANABAIAFQAIAFAAAKIAAAmIABAJQABADADACQADADAHABIAAABg");
	this.shape_627.setTransform(177,168);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#FF0000").s().p("AgCAnIgag4QgGgNgDgDIgDgCIgFgBIAAgCIAoAAIAAACIgGACQgEACAAAEIABAGIAFAKIAQAkIARgnQADgIAAgEQAAgFgDgCIgGgCIAAgCIAcAAIAAACQgFACgEADQgEAEgGANIgZA1g");
	this.shape_628.setTransform(137.8,168);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgCACgCQACgDAAgEIAAgMIAAgXIAAgMQAAgDgDgDIgEgEIgHgBIAAgCIAdgDIAAA0IAAAGIABAJQABAEADACQADACAHABIAAACgAgGgxQgCgCgBgEQABgEACgCQADgCADAAQAEAAADACQACACAAAEQAAAEgCACQgDACgEAAQgEAAgCgCg");
	this.shape_629.setTransform(130.7,165.5);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#FF0000").s().p("AgMAvQgEgCgBgDIgBgLIAAg3IgKAAIAAgBQAGgCAGgFIAGgHIADgIIABgEIAFAAIAAAYIAZAAIAAADIgZAAIAAA1QAAAJACAFQACACAEABQACACAFgBQAEABAEgCIAGgHIABACQgDAFgGADQgGADgJAAQgMAAgFgFg");
	this.shape_630.setTransform(125.7,166.9);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#FF0000").s().p("AAHAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIABgMIAAgSIgBgPIgDgHQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDADQgDAFgBAEIgBAPIAAARIAAAHIABAJQABADACACQADADAIABIAAABIguAAIAAgBQAGgBADgBQACgCACgDQABgCABgFIAAgMIAAgVIAAgNQgBgEgCgDIgEgDIgHgBIAAgCIAcgEIACAKIAAACQANgMARAAQANABAIAFQAIAFAAAKIAAAmIABAJQABADADACQADADAHABIAAABg");
	this.shape_631.setTransform(89.3,168);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#FF0000").s().p("AgkA2QgDgCAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQACgBAEAAIAFABIAFACIACAAQAHAAAEgJIADgHQACgEABgDQAAgDgFgIIgVgtIgDgHIgFgIIgDgDQgDgCgEgBIAAgCIAqAAIAAACIgHACQgEACAAAEQAAAEAEAJIARAmIAPggQAGgMAAgFQAAgEgDgDQgDgCgFgBIAAgCIAeAAIAAACIgGADIgFADIgJATIgdA/QgFAMgEADQgGAGgJAAQgFAAgEgCg");
	this.shape_632.setTransform(66.4,169.7);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAFgFQAEgDADgCIAMgDIAOgDIAHgDIAEgFIABgIQAAgKgEgFQgCgDgDgBIgGgBQgFAAgDABQgEACgCAEIgCAFQgCAEgFAAQgEAAgDgCQgCgCAAgDQAAgEAIgEIAJgCIAMgBIANABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAGAAIAGgBIAEgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgKAFIgGAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAGAAAEgDQAEgCACgFQADgGAAgMIAAgOIgLAGg");
	this.shape_633.setTransform(57.7,168);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#FF0000").s().p("AgjAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIABgMIAAgVIgBgNQAAgEgCgDIgFgDIgHgBIAAgCIAbgEQACAIAAAHQAEgHAEgCQAIgGALAAQAHABAEACQADACAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDABQgEgBgCgCIgDgDQgEgEgFABQgIgBgDAJQgEAHAAAPIAAAQIABAHIAAAJQABADACACQADADAHABIAAABg");
	this.shape_634.setTransform(49.1,168);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#FF0000").s().p("AgNAvQgCgCgBgDIgBgLIAAg3IgMAAIAAgBQAHgCAGgFIAFgHIAFgIIABgEIADAAIAAAYIAaAAIAAADIgaAAIAAA1QAAAJADAFQACACADABQAEACADgBQAFABAEgCIAGgHIACACQgDAFgHADQgGADgKAAQgLAAgGgFg");
	this.shape_635.setTransform(42.9,166.9);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#FF0000").s().p("AgjAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIABgMIAAgVIgBgNQAAgEgCgDIgFgDIgHgBIAAgCIAbgEQACAIAAAHQAEgHAEgCQAIgGALAAQAHABAEACQADACAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDABQgEgBgCgCIgDgDQgEgEgFABQgIgBgDAJQgEAHAAAPIAAAQIABAHIAAAJQABADACACQADADAHABIAAABg");
	this.shape_636.setTransform(36.1,168);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOANgLQAPgOAUAAQAWAAAPAOQAMALAAAOQAAAPgMALQgOAOgXAAQgWAAgOgOgAgVgbQgIALAAAQQAAAPAIALQAJAMANAAQAGAAAFgCQAFgDAEgFQAEgFADgIQACgIAAgHQAAgGgCgIQgEgIgEgFQgIgKgMAAQgLAAgKAKg");
	this.shape_637.setTransform(26.7,168);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#FF0000").s().p("AgPAWQAIgCADgDQAEgDACgEQAEgHABgFIgFABQgFAAgDgDQgEgDAAgFQAAgEAEgEQAEgDADAAQAHAAAEAEQAEAFAAAHQAAAHgEAGQgEAHgHAFQgFAEgKACg");
	this.shape_638.setTransform(-24.3,172.2);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#FF0000").s().p("AAlAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIAAgMIAAgQIAAgPQgBgEgCgEQgFgIgMABQgNgBgGAJQgFAHAAAPIAAARIAAAHIABAJQABADACACQADADAIABIAAABIgtAAIAAgBQAGgBADgBIAEgFIACgHIAAgMIAAgQIAAgPQgBgFgDgDQgCgDgEgCQgEgCgFAAQgGAAgGACQgFADgDAEQgDADgBAGQgBAFAAAIIAAAQIAAAHIABAJQABADACACQADADAIABIAAABIguAAIAAgBQAGgBADgBQACgCACgDQABgCABgFIAAgMIAAgVIAAgOQgBgDgCgDIgEgDIgHgBIAAgCIAdgEIACANQAHgGAIgDQAIgEAJAAQAKAAAGAFQADADAFAGQAIgHAJgDQAIgEAJAAQAMAAAIAHQAIAFAAAKIAAAeIAAAHIABAJIADAFQADADAIABIAAABg");
	this.shape_639.setTransform(-35.4,168);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgCABgCQACgDAAgEIABgMIAAgXIgBgMQgBgDgCgDIgEgEIgHgBIAAgCIAdgDIAAA0IAAAGIABAJQABAEADACQADACAHABIAAACgAgGgxQgDgCAAgEQAAgEADgCQADgCADAAQAEAAACACQADACAAAEQAAAEgDACQgCACgEAAQgDAAgDgCg");
	this.shape_640.setTransform(-51.8,165.5);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#FF0000").s().p("AgkBAIAAgBQAGgBADgBQACgCACgDQABgCABgFIAAgMIAAguIgPAAIAAgEIAPAAIAAgVQAAgJACgFQADgEAGgEQAFgDAHgCQAIgCAJAAQAIAAAFACQAFADAAAEQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAIgFgBIgEgEQgDgFgCgBQgCgBgDAAIgIABIgEAEQgCACgBAEIgBANIAAAXIAUAAIAAAEIgUAAIAAAvIAAAHIABAJQABADACACQACADAIABIAAABg");
	this.shape_641.setTransform(-56.4,165.5);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#FF0000").s().p("AgMAvQgEgCgBgDIgBgLIAAg3IgKAAIAAgBQAGgCAGgFIAGgHIADgIIABgEIAFAAIAAAYIAZAAIAAADIgZAAIAAA1QgBAJADAFQACACAEABQACACAFgBQAEABADgCIAHgHIABACQgDAFgGADQgGADgJAAQgMAAgFgFg");
	this.shape_642.setTransform(-89,166.9);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#FF0000").s().p("AgkBAIAAgBQAGgBADgBQACgCACgDQABgCABgFIAAgMIAAguIgPAAIAAgEIAPAAIAAgVQAAgJACgFQADgEAGgEQAFgDAHgCQAIgCAJAAQAIAAAFACQAFADAAAEQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQgCACgDAAIgFgBIgEgEQgDgFgCgBQgCgBgDAAIgIABIgEAEQgCACgBAEIgBANIAAAXIAUAAIAAAEIgUAAIAAAvIAAAHIABAJQABADACACQACADAIABIAAABg");
	this.shape_643.setTransform(-99.7,165.5);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#FF0000").s().p("AgNAvQgDgCgBgDIAAgLIAAg3IgLAAIAAgBQAGgCAGgFIAGgHIADgIIABgEIAFAAIAAAYIAZAAIAAADIgZAAIAAA1QgBAJADAFQACACAEABQACACAEgBQAFABADgCIAHgHIABACQgDAFgGADQgGADgKAAQgLAAgGgFg");
	this.shape_644.setTransform(-122.4,166.9);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#FF0000").s().p("AAlAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIAAgMIAAgQIAAgPQgBgEgCgEQgFgIgMABQgNgBgGAJQgFAHAAAPIAAARIAAAHIABAJQABADACACQADADAIABIAAABIgtAAIAAgBQAGgBADgBIAEgFIACgHIAAgMIAAgQIAAgPQgBgFgDgDQgCgDgEgCQgEgCgFAAQgGAAgGACQgFADgDAEQgDADgBAGQgBAFAAAIIAAAQIAAAHIABAJQABADACACQADADAIABIAAABIguAAIAAgBQAGgBADgBQACgCACgDQABgCABgFIAAgMIAAgVIAAgOQgBgDgCgDIgEgDIgHgBIAAgCIAdgEIACANQAHgGAIgDQAIgEAJAAQAKAAAGAFQADADAFAGQAIgHAJgDQAIgEAJAAQAMAAAIAHQAIAFAAAKIAAAeIAAAHIABAJIADAFQADADAIABIAAABg");
	this.shape_645.setTransform(-152.9,168);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#FF0000").s().p("AgNAvQgDgCgBgDIAAgLIAAg3IgLAAIAAgBQAGgCAGgFIAGgHIADgIIABgEIAFAAIAAAYIAZAAIAAADIgZAAIAAA1QgBAJADAFQACACAEABQACACAEgBQAFABADgCIAHgHIABACQgDAFgGADQgGADgKAAQgLAAgGgFg");
	this.shape_646.setTransform(-169.2,166.9);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOANgLQAPgOAUAAQAWAAAOAOQANALAAAOQAAAPgMALQgPAOgWAAQgVAAgPgOgAgUgbQgJALAAAQQAAAPAIALQAKAMALAAQAGAAAFgCQAGgDAEgFQAEgFACgIQADgIAAgHQAAgGgDgIQgCgIgFgFQgJgKgLAAQgMAAgIAKg");
	this.shape_647.setTransform(-189,168);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#FF0000").s().p("AAWAcQgNAMgQAAQgOAAgHgGQgIgFAAgKIAAgfIAAgHIgBgJQgBgDgDgCQgCgCgJgCIAAgCIAfAAIAAAuIABAOQABAFACADQADADAEACQAEACAGAAQAEAAAFgCQAGgCADgEQACgDABgFIABgPIAAgRIAAgHIgBgJQAAgDgDgCQgDgCgHgCIAAgCIAeAAIAAAxIABANQABAEABACQACADADABIAHACIAAACIgdADQgCgGAAgGg");
	this.shape_648.setTransform(-220.2,168.1);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOANgLQAPgOAUAAQAWAAAPAOQAMALAAAOQAAAPgMALQgOAOgXAAQgWAAgOgOgAgVgbQgIALAAAQQAAAPAIALQAJAMANAAQAGAAAFgCQAFgDAEgFQAEgFADgIQACgIAAgHQAAgGgCgIQgEgIgEgFQgIgKgMAAQgLAAgKAKg");
	this.shape_649.setTransform(-231.2,168);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#FF0000").s().p("AgjAnIAAgBQAGgBADgBQADgCABgDQACgCAAgFIABgMIAAgVIgBgNQAAgEgCgDIgFgDIgHgBIAAgCIAbgEQACAIAAAHQAEgHAEgCQAIgGALAAQAHABAEACQADACAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCABgDABQgEgBgCgCIgDgDQgEgEgFABQgIgBgDAJQgEAHAAAPIAAAQIABAHIAAAJQABADACACQADADAHABIAAABg");
	this.shape_650.setTransform(-240.3,168);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#FF0000").s().p("AghA+IAAgBIAKgCIAGgEQAEgDABgFIABgNIAAhdIgOAAQgQACgIADQgIACgFAHQgFAHgDALIgCAAIACgjICNAAIACAjIgDAAQgDgNgGgGQgGgIgLgCQgKgDgXAAIAABdQAAAJABAEQABAFADADIAHAEIAKACIAAABg");
	this.shape_651.setTransform(-262.8,165.7);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#FF0000").s().p("AAHAnIAAgCQAGAAADgCQADgBABgDQACgCAAgEIABgNIAAgSIgBgOIgDgIQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDADgBAFIgBAQIAAAQIAAAHIABAJQABADACACQADADAIAAIAAACIguAAIAAgCQAGAAADgCQACgBACgDQABgCABgEIAAgNIAAgVIAAgNQgBgEgCgCIgEgEIgHgCIAAgCIAcgCIACAKIAAABQANgLARAAQANgBAIAGQAIAFAAAKIAAAmIABAJQABADADACQADADAHAAIAAACg");
	this.shape_652.setTransform(259.9,144.1);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOANgLQAPgOAUAAQAWAAAOAOQANALAAAOQAAAPgMALQgPAOgWAAQgVAAgPgOgAgUgbQgJALAAAQQAAAPAIALQAKAMALAAQAGAAAFgCQAGgDAEgFQAEgFADgIQACgIAAgHQAAgGgCgIQgDgIgFgFQgJgKgLAAQgMAAgIAKg");
	this.shape_653.setTransform(248.8,144.1);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgCACgDQABgCABgEIAAgMIAAgXIAAgMQgBgDgBgDIgFgDIgHgCIAAgCIAdgDIAAAzIABAIIAAAJQABACACACQADADAIABIAAACgAgGgyQgDgCABgDQgBgDADgDQADgCADAAQAEAAADACQADADAAADQAAADgDACQgDADgEAAQgDAAgDgDg");
	this.shape_654.setTransform(240.6,141.6);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#FF0000").s().p("AgNAwQgCgDgBgDIgBgLIAAg2IgLAAIAAgCQAGgBAGgGIAGgHIADgJIABgCIAFAAIAAAXIAZAAIAAAEIgZAAIAAA0QAAAKACADQACADAEABQADACADAAQAFAAADgCIAHgGIABABQgDAGgGACQgGADgKgBQgLAAgGgDg");
	this.shape_655.setTransform(235.7,143);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgCACgDQABgCABgEIABgMIAAgXIgBgMQgBgDgBgDIgFgDIgHgCIAAgCIAdgDIAAAzIABAIIAAAJQABACACACQADADAIABIAAACgAgGgyQgDgCABgDQgBgDADgDQADgCADAAQAEAAADACQADADAAADQAAADgDACQgDADgEAAQgDAAgDgDg");
	this.shape_656.setTransform(229.8,141.6);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#FF0000").s().p("AgyA6IAAgCQAHgBACgBQADgBABgEIACgGIAAgMIAAg/QABgKgEgEQgEgFgIAAIAAgCIAegEIABAIIAAACQAIgFAHgBQAGgCAHAAQAQAAALAIQAHAFAFAIQADAIAAAKQAAAKgDAHQgFAJgIAGQgMAIgQAAQgHAAgFgCQgGgCgIgFIAAARIAAAGIABAJQABADADACQACADAJABIAAACgAgFgyQgFACgDAEQgDAEgCAHIgBATIABASQACAGADAEQADAEAFACQAEACAFAAQAKAAAJgJQAFgGADgHQACgHAAgIQAAgIgCgHQgDgIgEgFQgJgKgKAAQgFAAgFADg");
	this.shape_657.setTransform(202.8,145.7);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#FF0000").s().p("AAUA4QgIAFgGABQgHACgHAAQgQAAgLgIQgIgFgDgJQgFgIAAgJQAAgKAFgJQAEgHAHgGQANgJAPABQAIAAAFACQAGABAHAGIAAgiQAAgKgDgFQgEgEgJAAIAAgCIAhgEIAABqQAAAKADAEQAEAEAJAAIAAACIgfAFIgBgKgAgWgEQgFAEgCAIQgEAIAAAHQABAJACAHQADAHAEAGQAIAJALAAQAFAAAFgCQAEgDAEgEQADgEABgHQACgGgBgMQABgNgCgGQgBgFgEgEQgCgEgFgCQgEgCgEAAQgMAAgIAJg");
	this.shape_658.setTransform(182.2,141.8);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#FF0000").s().p("AgjAnIAAgCQAGAAADgCQADgBABgDQACgCAAgEIABgNIAAgVIgBgNQAAgEgCgCIgFgEIgHgCIAAgCIAbgCQACAHAAAGQAEgGAEgDQAIgEALAAQAHAAAEACQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDgBQgEABgCgDIgDgDQgEgDgFgBQgIABgDAHQgEAJAAAOIAAAQIABAHIAAAJQABADACACQADADAHAAIAAACg");
	this.shape_659.setTransform(167.5,144.1);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#FF0000").s().p("AgNAwQgCgDgBgDIgBgLIAAg2IgMAAIAAgCQAHgBAGgGIAFgHIAFgJIABgCIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QAAAKADADQACADADABQAEACADAAQAFAAADgCIAHgGIACABQgDAGgHACQgGADgKgBQgLAAgGgDg");
	this.shape_660.setTransform(100.5,143);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQADgCABgDQABgCABgEIABgMIAAgXIgBgMQAAgDgDgDQgBgCgDgBIgHgCIAAgCIAdgDIAAAzIABAIIAAAJQABACACACQADADAIABIAAACgAgGgyQgCgCAAgDQAAgDACgDQADgCADAAQAEAAACACQAEADAAADQAAADgEACQgCADgEAAQgDAAgDgDg");
	this.shape_661.setTransform(94.6,141.6);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#FF0000").s().p("AAWAnIgWg8IgcA8IgDAAIgVg2IgDgHQgDgJgEgCIgHgDIAAgCIApAAIAAACQgMAAAAAIQAAAEAFALIAMAiIASgpQACgFAAgDQAAgHgLgBIAAgCIAoAAIAAACIgIACQgDACAAAEQAAADACAGIAOAoIAQgjQADgIAAgDQAAgFgEgDIgHgDIAAgCIAfAAIAAACQgFAAgDADIgFAEIgFAKIgCAFIgZA1g");
	this.shape_662.setTransform(85.6,144.1);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#FF0000").s().p("AgkA2QgDgCAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQACgBAEAAIAFABIAFACIACAAQAHAAAEgJIADgHQACgEABgDQgBgDgDgIIgXgtIgCgHIgFgIIgDgDQgCgCgFgBIAAgCIAqAAIAAACIgHACQgEACAAAEQAAAEAEAJIARAmIAPggQAGgMAAgFQAAgEgDgDQgDgCgFgBIAAgCIAfAAIAAACIgHADQgDABgCACIgJATIgdA/QgFAMgEADQgGAGgJAAQgFAAgEgCg");
	this.shape_663.setTransform(61.6,145.8);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#FF0000").s().p("AAUA4QgIAFgGABQgGACgJAAQgPAAgLgIQgIgFgDgJQgFgIAAgJQAAgKAFgJQAEgHAHgGQANgJAPABQAIAAAFACQAGABAHAGIAAgiQAAgKgDgFQgEgEgJAAIAAgCIAggEIAABqQABAKADAEQAEAEAJAAIAAACIgfAFIgBgKgAgWgEQgFAEgCAIQgEAIAAAHQAAAJADAHQADAHAEAGQAIAJAMAAQAEAAAFgCQAFgDADgEQADgEABgHQACgGgBgMQABgNgCgGQgBgFgDgEQgDgEgFgCQgEgCgEAAQgMAAgIAJg");
	this.shape_664.setTransform(42.4,141.8);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#FF0000").s().p("AgMAmIgGgCIgCAAQgEAAgCADIgCAAIAAgaIACAAQADAJAEAGQAIAKALAAQAGAAAFgDQAFgEAAgHQAAgGgEgEIgFgEIgKgGQgNgFgFgEQgGgGAAgHQAAgJAGgGQAIgGAMAAIAJABIADACIADAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABgBIACAAIABAVIgCAAIgDgHQgBgDgCgCIgIgFQgEgCgDAAQgGAAgEADQgEAEAAAFQAAAFADAEQAEADAIADIAKAFQAKADAFAFQAFAGAAAIQAAAKgHAGQgJAHgMAAQgGAAgHgCg");
	this.shape_665.setTransform(27.5,144.1);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgCACgDQACgCAAgEIAAgMIAAgXIAAgMQgBgDgCgDIgEgDIgHgCIAAgCIAdgDIAAAzIAAAIIABAJQABACADACQADADAHABIAAACgAgGgyQgCgCgBgDQABgDACgDQADgCADAAQAEAAADACQACADAAADQAAADgCACQgDADgEAAQgEAAgCgDg");
	this.shape_666.setTransform(21,141.6);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#FF0000").s().p("AgMAwQgDgDgCgDIgBgLIAAg2IgLAAIAAgCQAHgBAGgGIAFgHIAFgJIABgCIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QABAKACADQACADADABQAEACAEAAQAEAAAEgCIAGgGIACABQgEAGgGACQgGADgJgBQgMAAgFgDg");
	this.shape_667.setTransform(-0.5,143);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOAMgLQAQgOAUAAQAVAAAPAOQANALAAAOQAAAPgMALQgOAOgXAAQgWAAgOgOgAgVgbQgIALAAAQQAAAPAIALQAJAMAMAAQAGAAAGgCQAFgDAEgFQAEgFACgIQADgIAAgHQAAgGgDgIQgDgIgEgFQgJgKgLAAQgLAAgKAKg");
	this.shape_668.setTransform(-20.3,144.1);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#FF0000").s().p("AgMAmIgGgCIgCAAQgEAAgCADIgCAAIAAgaIACAAQADAJAEAGQAIAKALAAQAGAAAFgDQAFgEAAgHQAAgGgEgEIgFgEIgKgGQgNgFgFgEQgGgGAAgHQAAgJAGgGQAIgGAMAAIAJABIADACIADAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABgBIACAAIABAVIgCAAIgDgHQgBgDgCgCIgIgFQgEgCgDAAQgGAAgEADQgEAEAAAFQAAAFADAEQAEADAIADIAKAFQAKADAFAFQAFAGAAAIQAAAKgHAGQgJAHgMAAQgGAAgHgCg");
	this.shape_669.setTransform(-35,144.1);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#FF0000").s().p("AgCAnIgbg3QgGgOgCgCIgDgCIgFgCIAAgCIAoAAIAAACIgGACQgDACgBAEIABAGIAFAJIAPAlIARgmQAEgJAAgEQAAgFgDgCIgGgCIAAgCIAdAAIAAACQgGABgDAEQgFAEgGANIgZA1g");
	this.shape_670.setTransform(-52.9,144.1);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgCACgDQABgCABgEIAAgMIAAgXIAAgMQgBgDgBgDIgFgDIgHgCIAAgCIAdgDIAAAzIABAIIAAAJQABACACACQADADAIABIAAACgAgGgyQgDgCABgDQgBgDADgDQADgCADAAQAEAAADACQADADAAADQAAADgDACQgDADgEAAQgDAAgDgDg");
	this.shape_671.setTransform(-60,141.6);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#FF0000").s().p("AgjA2QgEgCAAgDQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQACgBADAAIAHABIAEACIADAAQAGAAAEgJIADgHQACgEAAgDQAAgDgEgIIgVgtIgEgHIgEgIIgDgDQgCgCgEgBIAAgCIAoAAIAAACIgGACQgEACAAAEQAAAEAFAJIAQAmIAPggQAGgMAAgFQAAgEgDgDQgCgCgFgBIAAgCIAdAAIAAACIgGADQgCABgCACIgKATIgeA/QgFAMgDADQgGAGgIAAQgGAAgDgCg");
	this.shape_672.setTransform(-77.5,145.8);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#FF0000").s().p("AgyA6IAAgCQAHgBACgBQADgBABgEIACgGIAAgMIAAg/QABgKgEgEQgEgFgIAAIAAgCIAegEIABAIIAAACQAIgFAHgBQAGgCAHAAQAQAAALAIQAHAFAFAIQADAIAAAKQAAAKgDAHQgFAJgIAGQgMAIgQAAQgHAAgFgCQgGgCgIgFIAAARIAAAGIABAJQABADADACQACADAJABIAAACgAgFgyQgFACgDAEQgDAEgCAHIgBATIABASQACAGADAEQADAEAFACQAEACAFAAQAKAAAJgJQAFgGADgHQACgHAAgIQAAgIgCgHQgDgIgEgFQgJgKgKAAQgFAAgFADg");
	this.shape_673.setTransform(-87.9,145.7);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#FF0000").s().p("AAlAnIAAgCQAGAAADgCQADgBABgDQACgCAAgEIAAgNIAAgQIAAgPQgBgEgCgEQgFgHgMgBQgNAAgGAJQgFAHAAAQIAAAQIAAAHIABAJQABADACACQADADAIAAIAAACIgtAAIAAgCQAGAAADgCIAEgEIACgGIAAgNIAAgPIAAgQQgBgFgDgDQgCgEgEgCQgEgCgFAAQgGABgGACQgFACgDAFQgDADgBAGQgBAFAAAJIAAAPIAAAHIABAJQABADACACQADADAIAAIAAACIguAAIAAgCQAGAAADgCQACgBACgDQABgCABgEIAAgNIAAgVIAAgOQgBgDgCgCIgEgFIgHgBIAAgCIAdgCIACAMQAHgGAIgEQAIgCAJAAQAKAAAGADQADADAFAHQAIgHAJgEQAIgCAJAAQAMAAAIAFQAIAHAAAJIAAAeIAAAHIABAJIADAFQADADAIAAIAAACg");
	this.shape_674.setTransform(-101.9,144.1);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#FF0000").s().p("AAWAcQgNAMgQAAQgNAAgJgGQgHgFgBgKIAAgfIAAgHIgBgJQAAgDgCgCQgEgCgHgCIAAgCIAeAAIAAAuIABAOQABAFACADQACADAEACQAFACAFAAQAFAAAFgCQAFgCADgEQAEgDABgFIAAgPIAAgRIAAgHIAAgJIgEgFQgCgCgJgCIAAgCIAfAAIAAAxIABANQAAAEACACQACADADABIAGACIAAACIgcADQgBgGgBgGg");
	this.shape_675.setTransform(-116.1,144.2);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#FF0000").s().p("AgjAnIAAgCQAGAAADgCQADgBABgDQACgCAAgEIABgNIAAgVIgBgNQAAgEgCgCIgFgEIgHgCIAAgCIAbgCQACAHAAAGQAEgGAEgDQAIgEALAAQAHAAAEACQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDgBQgEABgCgDIgDgDQgEgDgFgBQgIABgDAHQgEAJAAAOIAAAQIABAHIAAAJQABADACACQADADAHAAIAAACg");
	this.shape_676.setTransform(-125.1,144.1);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#FF0000").s().p("AgjA8QgPgGgKgKQgGgHgEgLQgEgKAAgMQAAgQAHgOQAGgOAMgJQALgHANgEQANgFANAAIAQABIAPAFIAGACIAEABQAEAAACgFIADAAIACAnIgDAAQgHgUgMgJQgLgKgQAAQgLgBgJAFQgJAEgIAKQgQAVAAAZQABANADAKQAEALAHAJQAOAQAUAAQAHAAAHgCQAIgDAEgGQAGgGAAgKQAAgKgFgDQgGgEgNgBIAAgCIBDAAIAAACQgKACgDABQgEACgCADQgBAEAAAMIAAAKIAAACIgGgBQgCAAgDADQgJAFgNACQgMAEgNAAQgRgBgPgFg");
	this.shape_677.setTransform(-136.6,141.8);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#FF0000").s().p("AgPAWQAIgCADgDQAEgDACgEQAEgHABgFIgFABQgFAAgDgDQgEgDAAgFQAAgEAEgEQAEgDADAAQAHAAAEAEQAEAFAAAHQAAAHgEAGQgEAHgHAFQgFAEgKACg");
	this.shape_678.setTransform(-153,148.3);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#FF0000").s().p("AAlAnIAAgCQAGAAADgCQADgBABgDQACgCAAgEIAAgNIAAgQIAAgPQgBgEgCgEQgFgHgMgBQgNAAgGAJQgFAHAAAQIAAAQIAAAHIABAJQABADACACQADADAIAAIAAACIgtAAIAAgCQAGAAADgCIAEgEIACgGIAAgNIAAgPIAAgQQgBgFgDgDQgCgEgEgCQgEgCgFAAQgGABgGACQgFACgDAFQgDADgBAGQgBAFAAAJIAAAPIAAAHIABAJQABADACACQADADAIAAIAAACIguAAIAAgCQAGAAADgCQACgBACgDQABgCABgEIAAgNIAAgVIAAgOQgBgDgCgCIgEgFIgHgBIAAgCIAdgCIACAMQAHgGAIgEQAIgCAJAAQAKAAAGADQADADAFAHQAIgHAJgEQAIgCAJAAQAMAAAIAFQAIAHAAAJIAAAeIAAAHIABAJIADAFQADADAIAAIAAACg");
	this.shape_679.setTransform(-173.8,144.1);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAFgFQADgDAFgCIALgDIAOgDIAGgDIAFgFIABgIQAAgKgEgFQgDgDgCgBIgHgBQgEAAgEABQgDACgBAEIgDAFQgCAEgFAAQgEAAgDgCQgCgCAAgDQAAgEAIgEIAKgCIALgBIANABQAHABAFADQAHADACAGIAAAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgKAFIgGAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAFAAAEgDQAEgCACgFQADgGAAgMIAAgOIgLAGg");
	this.shape_680.setTransform(-186.5,144.1);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#FF0000").s().p("AAHAnIAAgCQAGAAADgCQADgBABgDQACgCAAgEIABgNIAAgSIgBgOIgDgIQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDADgBAFIgBAQIAAAQIAAAHIABAJQABADACACQADADAIAAIAAACIguAAIAAgCQAGAAADgCQACgBACgDQABgCABgEIAAgNIAAgVIAAgNQgBgEgCgCIgEgEIgHgCIAAgCIAcgCIACAKIAAABQANgLARAAQANgBAIAGQAIAFAAAKIAAAmIABAJQABADADACQADADAHAAIAAACg");
	this.shape_681.setTransform(-197.1,144.1);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#FF0000").s().p("AgMAmIgGgCIgCAAQgEAAgCADIgCAAIAAgaIACAAQADAJAEAGQAIAKALAAQAGAAAFgDQAFgEAAgHQAAgGgEgEIgFgEIgKgGQgNgFgFgEQgGgGAAgHQAAgJAGgGQAIgGAMAAIAJABIADACIADAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABgBIACAAIABAVIgCAAIgDgHQgBgDgCgCIgIgFQgEgCgDAAQgGAAgEADQgEAEAAAFQAAAFADAEQAEADAIADIAKAFQAKADAFAFQAFAGAAAIQAAAKgHAGQgJAHgMAAQgGAAgHgCg");
	this.shape_682.setTransform(-211.8,144.1);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQADgCABgDQABgCABgEIABgMIAAgXIgBgMQgBgDgCgDQgBgCgDgBIgHgCIAAgCIAdgDIAAAzIAAAIIABAJQABACADACQACADAIABIAAACgAgGgyQgDgCAAgDQAAgDADgDQADgCADAAQAEAAACACQADADABADQgBADgDACQgCADgEAAQgEAAgCgDg");
	this.shape_683.setTransform(-218.2,141.6);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#FF0000").s().p("AgNAwQgCgDgBgDIgBgLIAAg2IgMAAIAAgCQAHgBAGgGIAFgHIAFgJIAAgCIAEAAIAAAXIAaAAIAAAEIgaAAIAAA0QAAAKADADQACADADABQAEACADAAQAFAAADgCIAHgGIABABQgCAGgHACQgGADgKgBQgLAAgGgDg");
	this.shape_684.setTransform(-250.9,143);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#FF0000").s().p("AgjAnIAAgCQAGAAADgCQADgBABgDQACgCAAgEIABgNIAAgVIgBgNQAAgEgCgCIgFgEIgHgCIAAgCIAbgCQACAHAAAGQAEgGAEgDQAIgEALAAQAHAAAEACQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDgBQgEABgCgDIgDgDQgEgDgFgBQgIABgDAHQgEAJAAAOIAAAQIABAHIAAAJQABADACACQADADAHAAIAAACg");
	this.shape_685.setTransform(-283.7,144.1);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#FF0000").s().p("AghA+IAAgCIAKgBIAGgEQAEgDABgEIABgOIAAhcIgOAAQgQAAgIADQgIADgFAHQgFAHgDAKIgCAAIACghICNAAIACAhIgDAAQgDgMgGgHQgGgGgLgDQgKgDgXABIAABcQAAAJABAFQABAEADADIAHAEIAKABIAAACg");
	this.shape_686.setTransform(-295,141.8);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#FF0000").s().p("AgkA2QgDgCAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQACgBADAAIAGABIAFACIADAAQAGAAAEgJIADgHQADgEAAgDQAAgDgFgIIgVgtIgEgHIgEgIIgDgDQgDgCgDgBIAAgCIAoAAIAAACIgGACQgEACAAAEQAAAEAFAJIAQAmIAPggQAGgMAAgFQAAgEgDgDQgDgCgEgBIAAgCIAdAAIAAACIgGADQgCABgCACIgKATIgdA/QgGAMgDADQgGAGgIAAQgGAAgEgCg");
	this.shape_687.setTransform(15.8,121.9);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#FF0000").s().p("AgyA6IAAgCQAGgBADgBQADgBACgEIABgGIAAgMIAAg/QAAgKgDgEQgEgFgJAAIAAgCIAfgEIABAIIAAACQAIgFAGgBQAHgCAHAAQAQAAALAIQAIAFADAIQAFAIAAAKQAAAKgFAHQgEAJgHAGQgMAIgRAAQgHAAgGgCQgFgCgHgFIAAARIAAAGIAAAJQABADACACQAEADAIABIAAACgAgFgyQgFACgDAEQgDAEgCAHIAAATIAAASQACAGADAEQADAEAFACQAEACAEAAQALAAAJgJQAFgGACgHQADgHAAgIQAAgIgDgHQgCgIgEgFQgJgKgKAAQgFAAgFADg");
	this.shape_688.setTransform(5.5,121.9);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#FF0000").s().p("AAlAnIAAgCQAGAAADgCQADgBABgDQACgCAAgEIAAgNIAAgQIAAgPQgBgEgCgEQgFgHgMgBQgNAAgGAJQgFAHAAAQIAAAQIAAAHIABAJQABADACACQADADAIAAIAAACIgtAAIAAgCQAGAAADgCIAEgEIACgGIAAgNIAAgPIAAgQQgBgFgDgDQgCgEgEgCQgEgCgFAAQgGABgGACQgFACgDAFQgDADgBAGQgBAFAAAJIAAAPIAAAHIABAJQABADACACQADADAIAAIAAACIguAAIAAgCQAGAAADgCQACgBACgDQABgCABgEIAAgNIAAgVIAAgOQgBgDgCgCIgEgFIgHgBIAAgCIAdgCIACAMQAHgGAIgEQAIgCAJAAQAKAAAGADQADADAFAHQAIgHAJgEQAIgCAJAAQAMAAAIAFQAIAHAAAJIAAAeIAAAHIABAJIADAFQADADAIAAIAAACg");
	this.shape_689.setTransform(-8.6,120.2);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#FF0000").s().p("AgjAnIAAgCQAGAAADgCQADgBABgDQACgCAAgEIABgNIAAgVIgBgNQAAgEgCgCIgFgEIgHgCIAAgCIAbgCQACAHAAAGQAEgGAEgDQAIgEALAAQAHAAAEACQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDgBQgEABgCgDIgDgDQgEgDgFgBQgIABgDAHQgEAJAAAOIAAAQIABAHIAAAJQABADACACQADADAHAAIAAACg");
	this.shape_690.setTransform(-31.8,120.2);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#FF0000").s().p("AgjA8QgPgGgKgKQgGgHgEgLQgEgKAAgMQAAgQAHgOQAHgOALgJQAKgHANgEQANgFAOAAIAQABIAPAFIAGACIAEABQAEAAACgFIAEAAIABAoIgDAAQgHgVgMgJQgKgKgRAAQgLgBgJAFQgJAEgIAKQgPAVgBAZQAAANAEAKQAEALAHAJQAOAQAUAAQAHAAAIgCQAGgDAFgGQAGgGAAgKQAAgKgFgDQgGgEgNgBIAAgCIBDAAIAAACQgJACgEABQgEACgCADQgCAEAAAMIABAKIAAACIgGgBQgCAAgDADQgKAFgMACQgMAEgMAAQgTgBgOgFg");
	this.shape_691.setTransform(-43.2,117.9);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#FF0000").s().p("AgNAvQgCgCgBgDIgBgLIAAg3IgMAAIAAgBQAHgCAGgFIAFgHIAFgJIABgDIADAAIAAAYIAaAAIAAADIgaAAIAAA1QAAAJADAFQACACADABQAEACADgBQAFABADgCIAHgHIACACQgDAFgHADQgGADgKAAQgLgBgGgEg");
	this.shape_692.setTransform(-10.7,211.8);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgBABgEQABgBABgFIABgMIAAgWIgBgOQAAgDgDgCQgBgDgDgBIgHgBIAAgCIAdgDIAAAzIABAHIAAAJQABADACADQADACAIABIAAACgAgGgxQgCgCAAgEQAAgEACgCQADgCADAAQAEAAACACQAEACAAAEQAAAEgEACQgCACgEAAQgDAAgDgCg");
	this.shape_693.setTransform(-16.5,210.4);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#FF0000").s().p("AgaAdQgMgKABgRQAAgHADgIQADgIAGgFQAGgHAKgDQAIgDALAAQAOAAAKAGQAEADAAAFQAAACgBADQgDABgDAAQgHAAgDgIIgCgGIgDgCQgDgCgFAAQgGAAgFADQgEACgDAEQgDAEgCAGQgEAKAAAIQAAAIADAHQAEAIAFAFQAIAJAMAAQAKAAAHgGQADgDADgHIACABQgDAKgIAEQgHAEgNAAQgVAAgMgLg");
	this.shape_694.setTransform(251,189);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgBACgDQACgCAAgFIAAgMIAAgXIAAgMQAAgDgCgDQgCgDgDAAIgHgCIAAgCIAdgDIAAA0IABAHIAAAJQABACACACQAEADAHABIAAACgAgGgyQgDgCABgDQgBgDADgDQADgCADAAQAEAAADACQADADAAADQAAADgDACQgDADgEAAQgDAAgDgDg");
	this.shape_695.setTransform(243.9,186.5);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#FF0000").s().p("AgNAwQgDgDgBgDIAAgLIAAg2IgLAAIAAgCQAGgBAGgGIAGgHIADgIIABgDIAFAAIAAAXIAZAAIAAAEIgZAAIAAA0QgBAKADADQACADAEABQACACAEAAQAFAAADgCIAHgGIABABQgDAGgGACQgGACgKABQgLgBgGgDg");
	this.shape_696.setTransform(238.9,187.9);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#FF0000").s().p("AgjAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgVIgBgNQAAgEgCgCQgCgDgDgBIgHgCIAAgBIAbgDQACAIAAAFQAEgFAEgEQAIgEALAAQAHAAAEACQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDgBQgEABgCgDIgDgDQgEgDgFgBQgIAAgDAJQgEAIAAAOIAAAQIABAHIAAAJQABADACACQADACAHABIAAACg");
	this.shape_697.setTransform(232.1,189);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#FF0000").s().p("AgCAnIgbg3QgFgOgDgCIgDgCIgGgCIAAgCIApAAIAAACIgGACQgEACABAEIABAGIADAJIAQAlIARgmQAEgJAAgEQAAgFgDgCIgGgCIAAgCIAdAAIAAACQgGABgDAEQgFAEgGANIgYA1g");
	this.shape_698.setTransform(214.2,189);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#FF0000").s().p("AgiBCIAAhqQAAgKgEgFQgDgEgJAAIAAgDIAggDIAAA9QAEgFAEgCQAJgFAKAAQAQAAAMAJQAOAKAAAUQAAATgOAMQgMAKgTAAQgJAAgHgCIgGgDIgEAAQgFAAgFAHgAgGgKQgFADgDAFQgEAHAAARQAAAKACAIQABAJACADQACAFAFACQAFADAFAAQAMAAAIgLQAJgKAAgRQAAgIgDgIQgDgIgFgEQgEgFgFgCQgEgCgFAAQgGAAgEADg");
	this.shape_699.setTransform(183.7,186.7);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#FF0000").s().p("AAlAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIAAgNIAAgQIAAgPQgBgEgCgEQgFgHgMgBQgNABgGAIQgFAHAAAPIAAARIAAAHIABAJQABADACACQADACAIABIAAACIgtAAIAAgCQAGAAADgBIAEgFIACgGIAAgNIAAgQIAAgPQgBgFgDgDQgCgEgEgCQgEgCgFAAQgGABgGACQgFACgDAFQgDADgBAGQgBAFAAAJIAAAPIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgOQgBgDgCgCIgEgFIgHgBIAAgBIAdgDIACAMQAHgGAIgDQAIgDAJAAQAKAAAGADQADADAFAHQAIgHAJgDQAIgDAJAAQAMAAAIAFQAIAHAAAJIAAAeIAAAHIABAJIADAFQADACAIABIAAACg");
	this.shape_700.setTransform(169.9,189);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#FF0000").s().p("AgjAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgVIgBgNQAAgEgCgCQgCgDgDgBIgHgCIAAgBIAbgDQACAIAAAFQAEgFAEgEQAIgEALAAQAHAAAEACQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDgBQgEABgCgDIgDgDQgEgDgFgBQgIAAgDAJQgEAIAAAOIAAAQIABAHIAAAJQABADACACQADACAHABIAAACg");
	this.shape_701.setTransform(130.8,189);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#FF0000").s().p("AgkA2QgDgCAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQACgBADAAIAGABIAFACIADAAQAGAAAEgJIADgHQADgEAAgDQAAgDgFgIIgVgtIgEgHIgEgIIgDgDQgDgCgDgBIAAgCIAoAAIAAACIgGACQgEACAAAEQAAAEAFAJIAQAmIAPggQAGgMAAgFQAAgEgDgDQgDgCgEgBIAAgCIAdAAIAAACIgGADQgCABgCACIgKATIgdA/QgGAMgDADQgGAGgJAAQgFAAgEgCg");
	this.shape_702.setTransform(100,190.7);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgBACgDQABgCABgFIAAgMIAAgXIAAgMQAAgDgCgDQgCgDgDAAIgHgCIAAgCIAdgDIAAA0IABAHIAAAJQABACACACQAEADAHABIAAACgAgGgyQgDgCABgDQgBgDADgDQADgCADAAQAEAAADACQACADAAADQAAADgCACQgDADgEAAQgDAAgDgDg");
	this.shape_703.setTransform(70.2,186.5);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#FF0000").s().p("AAHAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgSIgBgOIgDgIQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDAEgBAEIgBAPIAAARIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgNQgBgEgCgCQgCgDgCgBIgHgCIAAgBIAcgDIACAKIAAABQANgMARABQANgBAIAGQAIAFAAAKIAAAmIABAJQABADADACQADACAHABIAAACg");
	this.shape_704.setTransform(34,189);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgBACgDQACgCAAgFIAAgMIAAgXIAAgMQAAgDgCgDQgCgDgDAAIgHgCIAAgCIAdgDIAAA0IAAAHIABAJQABACACACQAEADAHABIAAACgAgGgyQgCgCAAgDQAAgDACgDQADgCADAAQAEAAADACQACADAAADQAAADgCACQgDADgEAAQgEAAgCgDg");
	this.shape_705.setTransform(25.7,186.5);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#FF0000").s().p("AgjAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgVIgBgNQAAgEgCgCQgCgDgDgBIgHgCIAAgBIAbgDQACAIAAAFQAEgFAEgEQAIgEALAAQAHAAAEACQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDgBQgEABgCgDIgDgDQgEgDgFgBQgIAAgDAJQgEAIAAAOIAAAQIABAHIAAAJQABADACACQADACAHABIAAACg");
	this.shape_706.setTransform(19.5,189);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#FF0000").s().p("AgMAwQgEgDgBgDIgBgLIAAg2IgKAAIAAgCQAGgBAGgGIAGgHIADgIIABgDIAFAAIAAAXIAZAAIAAAEIgZAAIAAA0QAAAKACADQACADAEABQACACAFAAQAEAAAEgCIAGgGIABABQgDAGgGACQgGACgJABQgMgBgFgDg");
	this.shape_707.setTransform(-21,187.9);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#FF0000").s().p("AgNAwQgDgDAAgDIgBgLIAAg2IgLAAIAAgCQAGgBAGgGIAGgHIADgIIABgDIAFAAIAAAXIAZAAIAAAEIgZAAIAAA0QAAAKACADQACADAEABQADACADAAQAFAAADgCIAHgGIABABQgDAGgGACQgGACgKABQgLgBgGgDg");
	this.shape_708.setTransform(-48.7,187.9);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#FF0000").s().p("AgMAwQgDgDgCgDIgBgLIAAg2IgLAAIAAgCQAHgBAGgGIAFgHIAEgIIACgDIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QABAKACADQACADADABQADACAFAAQAEAAAEgCIAGgGIACABQgEAGgGACQgGACgJABQgMgBgFgDg");
	this.shape_709.setTransform(-83.9,187.9);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#FF0000").s().p("AgjAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgVIgBgNQAAgEgCgCQgCgDgDgBIgHgCIAAgBIAbgDQACAIAAAFQAEgFAEgEQAIgEALAAQAHAAAEACQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDgBQgEABgCgDIgDgDQgEgDgFgBQgIAAgDAJQgEAIAAAOIAAAQIABAHIAAAJQABADACACQADACAHABIAAACg");
	this.shape_710.setTransform(-99.9,189);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#FF0000").s().p("AgjAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgVIgBgNQAAgEgCgCQgCgDgDgBIgHgCIAAgBIAbgDQACAIAAAFQAEgFAEgEQAIgEALAAQAHAAAEACQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDgBQgEABgCgDIgDgDQgEgDgFgBQgIAAgDAJQgEAIAAAOIAAAQIABAHIAAAJQABADACACQADACAHABIAAACg");
	this.shape_711.setTransform(-129.6,189);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#FF0000").s().p("AAHAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgSIgBgOIgDgIQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDAEgBAEIgBAPIAAARIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgNQgBgEgCgCQgCgDgCgBIgHgCIAAgBIAcgDIACAKIAAABQANgMARABQANgBAIAGQAIAFAAAKIAAAmIABAJQABADADACQADACAHABIAAACg");
	this.shape_712.setTransform(-159.1,189);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQADgBABgDQABgCABgFIABgMIAAgXIgBgMQAAgDgDgDQgBgDgDAAIgHgCIAAgCIAdgDIAAA0IABAHIAAAJQABACACACQADADAIABIAAACgAgGgyQgCgCAAgDQAAgDACgDQADgCADAAQAEAAACACQAEADAAADQAAADgEACQgCADgEAAQgDAAgDgDg");
	this.shape_713.setTransform(-167.3,186.5);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#FF0000").s().p("AAHAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgSIgBgOIgDgIQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDAEgBAEIgBAPIAAARIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgNQgBgEgCgCQgCgDgCgBIgHgCIAAgBIAcgDIACAKIAAABQANgMARABQANgBAIAGQAIAFAAAKIAAAmIABAJQABADADACQADACAHABIAAACg");
	this.shape_714.setTransform(-188.4,189);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgBACgDQACgCAAgFIAAgMIAAgXIAAgMQAAgDgDgDQgCgDgCAAIgHgCIAAgCIAdgDIAAA0IAAAHIABAJQABACADACQADADAHABIAAACgAgGgyQgCgCgBgDQABgDACgDQADgCADAAQAEAAADACQACADAAADQAAADgCACQgDADgEAAQgEAAgCgDg");
	this.shape_715.setTransform(-207.7,186.5);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#FF0000").s().p("AgjAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgVIgBgNQAAgEgCgCQgCgDgDgBIgHgCIAAgBIAbgDQACAIAAAFQAEgFAEgEQAIgEALAAQAHAAAEACQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDgBQgEABgCgDIgDgDQgEgDgFgBQgIAAgDAJQgEAIAAAOIAAAQIABAHIAAAJQABADACACQADACAHABIAAACg");
	this.shape_716.setTransform(-238.7,189);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#FF0000").s().p("AAEAnIAAgCIAFgBQADgCAAgDQAAgCgEgFIgCgDIgKgPIgOAPIgEAGQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAEAJACIAAACIgeAAIAAgCIAGgBIADgDQAFgCAGgIIATgUIgUgZQgFgHgEgDQgDgDgFgBIAAgCIApAAIAAACIgGACQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIABADIAFAHIACAEIAGAJIAMgOIAEgGIACgEQAAgEgGgBIAAgCIAbAAIAAACQgGABgFAEQgGAEgGAGIgOARIAUAbQAFAHAFADIAFADIAEABIAAACg");
	this.shape_717.setTransform(-258.6,189);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAIACQAHADAFAFQAHAHAAAMIg8AAIgBAGQAAAHACAIQADAIAFAFQAFAFAGADQAGADAJAAQAFAAAFgCQAFgCADgDQAEgDADgHIACABQgDALgIAFQgKAFgPAAQgMAAgIgDgAgNgfQgGAHgCAKIAsAAQgBgJgCgFQgEgEgEgDQgFgCgFAAQgIAAgHAGg");
	this.shape_718.setTransform(-268.3,189);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgBACgDQACgCAAgFIAAgMIAAgXIAAgMQgBgDgCgDQgCgDgCAAIgHgCIAAgCIAdgDIAAA0IAAAHIABAJQABACADACQADADAHABIAAACgAgGgyQgCgCgBgDQABgDACgDQADgCADAAQAEAAACACQADADAAADQAAADgDACQgCADgEAAQgEAAgCgDg");
	this.shape_719.setTransform(-288.6,186.5);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#FF0000").s().p("AgkBAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAguIgPAAIAAgDIAPAAIAAgXQAAgHACgFQADgFAGgEQAFgEAHgCQAIgCAJAAQAIABAFACQAFADAAAEQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAIgFgBIgEgFQgDgEgCgBQgCgCgDAAIgIACIgEAEQgCACgBAFIgBALIAAAZIAUAAIAAADIgUAAIAAAvIAAAHIABAJQABADACACQACACAIABIAAACg");
	this.shape_720.setTransform(274,162.6);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#FF0000").s().p("AgkA2QgDgCAAgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQACgBAEAAIAFABIAFACIACAAQAHAAAEgJIADgHQACgEAAgDQAAgDgDgIIgXgtIgCgHIgFgIIgDgDQgCgCgFgBIAAgCIAqAAIAAACIgHACQgEACAAAEQAAAEAEAJIARAmIAPggQAGgMAAgFQAAgEgDgDQgDgCgFgBIAAgCIAfAAIAAACIgHADQgDABgCACIgJATIgdA/QgFAMgEADQgGAGgJAAQgFAAgEgCg");
	this.shape_721.setTransform(249.2,166.8);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#FF0000").s().p("AAHAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgSIgBgOIgDgIQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDAEgBAEIgBAPIAAARIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgNQgBgEgCgCQgCgDgCgBIgHgCIAAgBIAcgDIACAKIAAABQANgMARABQANgBAIAGQAIAFAAAKIAAAmIABAJQABADADACQADACAHABIAAACg");
	this.shape_722.setTransform(239.1,165.1);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#FF0000").s().p("AAlAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIAAgNIAAgQIAAgPQgBgEgCgEQgFgHgMAAQgNAAgGAIQgFAHAAAPIAAARIAAAHIABAJQABADACACQADACAIABIAAACIgtAAIAAgCQAGAAADgBIAEgFIACgGIAAgNIAAgQIAAgPQgBgFgDgDQgCgEgEgCQgEgCgFABQgGAAgGACQgFACgDAFQgDADgBAGQgBAFAAAJIAAAPIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgOQgBgDgCgCIgEgFIgHgBIAAgBIAdgDIACAMQAHgGAIgDQAIgDAJAAQAKAAAGAEQADACAFAHQAIgHAJgDQAIgDAJAAQAMAAAIAFQAIAHAAAJIAAAeIAAAHIABAJIADAFQADACAIABIAAACg");
	this.shape_723.setTransform(215.7,165.1);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#FF0000").s().p("AgNAwQgDgDgBgDIAAgLIAAg2IgLAAIAAgCQAGgBAGgGIAGgHIADgIIABgDIAFAAIAAAXIAZAAIAAAEIgZAAIAAA0QgBAKADAEQACACAEABQADACADAAQAFAAADgCIAHgGIABABQgDAGgGACQgGACgKAAQgLABgGgEg");
	this.shape_724.setTransform(180,164.1);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAIACQAHADAFAFQAHAHAAAMIg8AAIgBAGQAAAHACAIQADAIAFAFQAFAFAGADQAGADAJAAQAFAAAFgCQAFgCAEgDQADgDADgHIACABQgDALgIAFQgKAFgPAAQgMAAgIgDgAgNgfQgGAHgCAKIAsAAQgBgJgCgFQgDgEgFgDQgFgCgFAAQgIAAgHAGg");
	this.shape_725.setTransform(171.8,165.2);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAIACQAHADAFAFQAHAHAAAMIg8AAIgBAGQAAAHACAIQADAIAFAFQAFAFAGADQAHADAIAAQAFAAAFgCQAFgCADgDQAEgDADgHIACABQgDALgIAFQgKAFgOAAQgNAAgIgDgAgNgfQgGAHgCAKIAsAAQgBgJgCgFQgDgEgFgDQgFgCgFAAQgIAAgHAGg");
	this.shape_726.setTransform(157,165.2);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#FF0000").s().p("AAHAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgSIgBgOQgBgFgCgDQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDAEgBAEIgBAPIAAARIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgNQgBgEgCgCQgCgDgCgBIgHgCIAAgBIAcgDIACAKIAAABQANgMARABQANgBAIAGQAIAFAAAKIAAAmIABAJQABADADACQADACAHABIAAACg");
	this.shape_727.setTransform(114.2,165.1);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgBACgDQACgCAAgFIAAgMIAAgXIAAgMQAAgDgDgDQgCgDgCAAIgHgCIAAgCIAdgDIAAA0IAAAHIABAJQABACADACQADADAHABIAAACgAgGgyQgCgCgBgDQABgDACgDQADgCADAAQAEAAADACQACADAAADQAAADgCACQgDADgEAAQgEAAgCgDg");
	this.shape_728.setTransform(105.9,162.7);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#FF0000").s().p("AhAA+IAAgCIAKgBIAHgEQADgDABgEIABgOIAAhCIgBgPQgBgEgDgDIgHgEIgKgBIAAgDIBEAAIANAAQANACAHAEQAIAEADAFQAEAGAAAIQAAALgJAJIgHAEIgLAEIAQADQAGACAEADQAHAEADAHQAEAHAAAJQAAAIgEAGQgEAIgGAEQgHADgIACQgJABgPAAgAgTAjIABAMIAEAGQAFAHAMgBQARABAKgJQAKgHAAgOQAAgJgEgGQgCgHgGgDQgJgHgTAAIgTAAgAgTgEIAIAAIAMgBIAJgBIAGgEQAGgDADgGQACgFAAgGQAAgIgCgGQgEgGgFgEQgEgDgGAAIgPgBIgKAAg");
	this.shape_729.setTransform(86.2,162.8);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#FF0000").s().p("AgjAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgVIgBgNQAAgEgCgCQgCgDgDgBIgHgCIAAgBIAbgDQACAIAAAFQAEgFAEgEQAIgEALAAQAHAAAEACQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDgBQgEABgCgDIgDgDQgEgDgFgBQgIAAgDAIQgEAJAAAOIAAAQIABAHIAAAJQABADACACQADACAHABIAAACg");
	this.shape_730.setTransform(65,165.1);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAIACQAHADAEAFQAIAHAAAMIg9AAIAAAGQAAAHACAIQADAIAFAFQAFAFAGADQAGADAIAAQAGAAAFgCQAFgCADgDQAEgDADgHIACABQgDALgIAFQgKAFgPAAQgMAAgIgDgAgNgfQgGAHgCAKIAsAAQAAgJgDgFQgEgEgEgDQgFgCgFAAQgIAAgHAGg");
	this.shape_731.setTransform(56.3,165.2);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#FF0000").s().p("AgMAwQgEgDgBgDIgBgLIAAg2IgKAAIAAgCQAGgBAGgGIAGgHIADgIIABgDIAFAAIAAAXIAZAAIAAAEIgZAAIAAA0QAAAKACAEQACACAEABQACACAFAAQAEAAAEgCIAGgGIABABQgDAGgGACQgGACgJAAQgMABgFgEg");
	this.shape_732.setTransform(38,164.1);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#FF0000").s().p("AgjAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgVIgBgNQAAgEgCgCQgCgDgDgBIgHgCIAAgBIAbgDQACAIAAAFQAEgFAEgEQAIgEALAAQAHAAAEACQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDgBQgEABgCgDIgDgDQgEgDgFgBQgIAAgDAIQgEAJAAAOIAAAQIABAHIAAAJQABADACACQADACAHABIAAACg");
	this.shape_733.setTransform(20,165.1);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgBACgDQABgCABgFIAAgMIAAgXIAAgMQAAgDgCgDQgCgDgDAAIgHgCIAAgCIAdgDIAAA0IABAHIAAAJQABACACACQAEADAHABIAAACgAgGgyQgDgCABgDQgBgDADgDQADgCADAAQAEAAADACQACADAAADQAAADgCACQgDADgEAAQgDAAgDgDg");
	this.shape_734.setTransform(-10.4,162.7);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#FF0000").s().p("AAHAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgSIgBgOIgDgIQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDAEgBAEIgBAPIAAARIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgNQgBgEgCgCQgCgDgCgBIgHgCIAAgBIAcgDIACAKIAAABQANgMARABQANgBAIAGQAIAFAAAKIAAAmIABAJQABADADACQADACAHABIAAACg");
	this.shape_735.setTransform(-35.1,165.1);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#FF0000").s().p("AgNAwQgDgDgBgDIAAgLIAAg2IgLAAIAAgCQAGgBAGgGIAGgHIADgIIABgDIAFAAIAAAXIAZAAIAAAEIgZAAIAAA0QgBAKADAEQACACAEABQACACAEAAQAFAAADgCIAHgGIABABQgDAGgGACQgGACgKAAQgLABgGgEg");
	this.shape_736.setTransform(-63.5,164.1);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgBACgDQACgCAAgFIAAgMIAAgXIAAgMQAAgDgCgDQgCgDgDAAIgHgCIAAgCIAdgDIAAA0IAAAHIABAJQABACACACQAEADAHABIAAACgAgGgyQgCgCgBgDQABgDACgDQADgCADAAQAEAAADACQACADAAADQAAADgCACQgDADgEAAQgEAAgCgDg");
	this.shape_737.setTransform(-83.6,162.7);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#FF0000").s().p("AgjAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgVIgBgNQAAgEgCgCQgCgDgDgBIgHgCIAAgBIAbgDQACAIAAAFQAEgFAEgEQAIgEALAAQAHAAAEACQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDgBQgEABgCgDIgDgDQgEgDgFgBQgIAAgDAIQgEAJAAAOIAAAQIABAHIAAAJQABADACACQADACAHABIAAACg");
	this.shape_738.setTransform(-89.8,165.1);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#FF0000").s().p("AgMAwQgDgDgCgDIgBgLIAAg2IgLAAIAAgCQAHgBAGgGIAFgHIAEgIIACgDIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QABAKACAEQACACADABQADACAFAAQAEAAAEgCIAGgGIACABQgEAGgGACQgGACgJAAQgMABgFgEg");
	this.shape_739.setTransform(-96,164.1);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#FF0000").s().p("AAlAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIAAgNIAAgQIAAgPQgBgEgCgEQgFgHgMAAQgNAAgGAIQgFAHAAAPIAAARIAAAHIABAJQABADACACQADACAIABIAAACIgtAAIAAgCQAGAAADgBIAEgFIACgGIAAgNIAAgQIAAgPQgBgFgDgDQgCgEgEgCQgEgCgFABQgGAAgGACQgFACgDAFQgDADgBAGQgBAFAAAJIAAAPIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgOQgBgDgCgCIgEgFIgHgBIAAgBIAdgDIACAMQAHgGAIgDQAIgDAJAAQAKAAAGAEQADACAFAHQAIgHAJgDQAIgDAJAAQAMAAAIAFQAIAHAAAJIAAAeIAAAHIABAJIADAFQADACAIABIAAACg");
	this.shape_740.setTransform(-117.5,165.1);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#FF0000").s().p("AAUA4QgIAEgGACQgGACgJAAQgPAAgMgIQgHgFgDgJQgFgHAAgKQAAgKAFgJQAEgHAHgGQANgJAPABQAIAAAFACQAGABAHAGIAAgiQAAgKgDgFQgEgEgJAAIAAgCIAggEIAABqQABAKADAEQAEAEAJAAIAAACIgfAFIgBgKgAgWgEQgFAFgCAHQgEAHAAAIQAAAJADAHQADAHAEAGQAIAJAMAAQAEABAFgDQAFgCADgFQADgEABgHQACgGgBgMQABgNgCgGQgBgFgDgEQgDgEgFgCQgEgCgEAAQgMAAgIAJg");
	this.shape_741.setTransform(-166.4,162.8);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#FF0000").s().p("AAHAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgSIgBgOIgDgIQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDAEgBAEIgBAPIAAARIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgNQgBgEgCgCQgCgDgCgBIgHgCIAAgBIAcgDIACAKIAAABQANgMARABQANgBAIAGQAIAFAAAKIAAAmIABAJQABADADACQADACAHABIAAACg");
	this.shape_742.setTransform(-177.8,165.1);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAFgFQAEgDADgCIAMgDIAOgDIAHgDIAEgFIABgIQAAgKgEgFQgCgDgDgBIgGgBQgFAAgDABQgEACgCAEIgCAFQgCAEgGAAQgDAAgDgCQgCgCAAgDQAAgEAIgEIAJgCIAMgBIANABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAGAAIAGgBIAEgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgKAFIgGAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAGAAAEgDQAEgCACgFQADgGAAgMIAAgOIgLAGg");
	this.shape_743.setTransform(-187.5,165.2);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgDQACgCAAgFIAAgMIAAhHIAAgNQAAgEgDgCQgCgDgCgBIgHgBIAAgCIAdgDIAABlIAAAHIABAJQABADADACQADACAHABIAAACg");
	this.shape_744.setTransform(-200.5,162.6);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQADgBABgDQABgCABgFIABgMIAAgXIgBgMQgBgDgBgDIgFgDIgHgCIAAgCIAdgDIAAA0IABAHIAAAJQABACACACQADADAIABIAAACgAgGgyQgCgCAAgDQAAgDACgDQADgCADAAQAEAAACACQAEADAAADQAAADgEACQgCADgEAAQgDAAgDgDg");
	this.shape_745.setTransform(-223.9,162.7);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#FF0000").s().p("AgMAwQgDgDgCgDIgBgLIAAg2IgLAAIAAgCQAHgBAGgGIAFgHIAEgIIACgDIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QABAKACAEQACACADABQADACAFAAQAEAAAEgCIAGgGIACABQgEAGgGACQgGACgJAAQgMABgFgEg");
	this.shape_746.setTransform(-228.8,164.1);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#FF0000").s().p("AgjAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgVIgBgNQAAgEgCgCQgCgDgDgBIgHgCIAAgBIAbgDQACAIAAAFQAEgFAEgEQAIgEALAAQAHAAAEACQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDgBQgEABgCgDIgDgDQgEgDgFgBQgIAAgDAIQgEAJAAAOIAAAQIABAHIAAAJQABADACACQADACAHABIAAACg");
	this.shape_747.setTransform(-235.6,165.1);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#FF0000").s().p("AgCAnIgbg3QgFgOgDgCIgDgCIgGgCIAAgCIApAAIAAACIgGACQgDACAAAEIABAGIADAKIAQAkIASgmQADgJAAgEQAAgFgDgCIgGgCIAAgCIAcAAIAAACQgFABgEAEQgEAEgGANIgYA1g");
	this.shape_748.setTransform(-253.5,165.2);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAIACQAHADAFAFQAHAHAAAMIg8AAIgBAGQAAAHACAIQADAIAFAFQAFAFAGADQAGADAJAAQAFAAAFgCQAFgCADgDQAEgDADgHIACABQgDALgIAFQgKAFgPAAQgMAAgIgDgAgNgfQgGAHgCAKIAsAAQgBgJgCgFQgEgEgEgDQgFgCgFAAQgIAAgHAGg");
	this.shape_749.setTransform(-268.3,165.2);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#FF0000").s().p("AgjAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgVIgBgNQAAgEgCgCIgFgEIgHgCIAAgBIAbgDQACAIAAAFQAEgFAEgEQAIgEALAAQAHAAAEACQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDgBQgEABgCgDIgDgDQgEgDgFgBQgIAAgDAIQgEAJAAAOIAAAQIABAHIAAAJQABADACACQADACAHABIAAACg");
	this.shape_750.setTransform(-276.6,165.1);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#FF0000").s().p("AAlAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIAAgNIAAgQIAAgPQgBgEgCgEQgFgHgMAAQgNAAgGAIQgFAHAAAPIAAARIAAAHIABAJQABADACACQADACAIABIAAACIgtAAIAAgCQAGAAADgBIAEgFIACgGIAAgNIAAgQIAAgPQgBgFgDgDQgCgEgEgCQgEgCgFABQgGAAgGACQgFACgDAFQgDADgBAGQgBAFAAAJIAAAPIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgOQgBgDgCgCIgEgFIgHgBIAAgBIAdgDIACAMQAHgGAIgDQAIgDAJAAQAKAAAGAEQADACAFAHQAIgHAJgDQAIgDAJAAQAMAAAIAFQAIAHAAAJIAAAeIAAAHIABAJIADAFQADACAIABIAAACg");
	this.shape_751.setTransform(-300.1,165.1);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#FF0000").s().p("AAXAcQgNAMgSAAQgMAAgJgGQgHgFgBgKIAAgfIAAgHIgBgJQAAgDgCgCQgDgCgIgCIAAgCIAeAAIAAAuIABAOQABAFACADQADADADACQAFACAFAAQAFAAAFgCQAFgCADgEQAEgDABgFIABgPIAAgRIgBgHIAAgJIgEgFQgCgCgJgCIAAgCIAfAAIAAAxIABANQAAAEACACQACADACABIAHACIAAACIgcADQgCgGABgGg");
	this.shape_752.setTransform(261.8,141.3);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgMAAgGgEQgHgFAAgJQAAgHAGgFQACgDAEgCIANgDIANgDQAEgBACgCIAFgFIABgIQAAgKgFgFQgCgDgCgBIgGgBQgFAAgDABQgDACgDAEIgCAFQgCAEgGAAQgDAAgCgCQgDgCAAgDQAAgEAHgEIAKgCIANgBIAMABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAEAAAGgDQADgCACgFQADgGABgMIAAgOIgMAGg");
	this.shape_753.setTransform(228.6,141.3);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#FF0000").s().p("AgMAvQgDgCgCgDIgBgLIAAg3IgLAAIAAgBQAHgCAGgFIAFgHIAEgJIACgDIAEAAIAAAYIAZAAIAAADIgZAAIAAA1QAAAJACAEQACADADABQADABAFAAQAEAAAEgBIAGgHIACACQgEAFgGADQgGACgJAAQgMAAgFgEg");
	this.shape_754.setTransform(204.6,140.2);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#FF0000").s().p("AAHAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgOIgDgIQgDgEgEgBQgFgCgFAAQgFAAgFACQgFACgDADQgDAFgBAEIgBAQIAAAQIAAAHIABAJQABADACACQADACAIACIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDIgEgDIgHgBIAAgDIAcgCIACAJIAAACQANgMARABQANAAAIAFQAIAFAAAKIAAAmIABAJQABADADACQADACAHACIAAACg");
	this.shape_755.setTransform(172,141.2);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#FF0000").s().p("AgNAvQgCgCgBgDIgCgLIAAg3IgLAAIAAgBQAHgCAGgFIAFgHIAFgJIABgDIADAAIAAAYIAaAAIAAADIgaAAIAAA1QABAJACAEQACADADABQADABAEAAQAFAAAEgBIAGgHIACACQgDAFgHADQgGACgKAAQgLAAgGgEg");
	this.shape_756.setTransform(153,140.2);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#FF0000").s().p("AgQAlQgJgEgGgHQgJgLAAgPQAAgTARgMQAMgIAOAAQAJAAAHACQAIADAEAFQAIAHAAAMIg9AAIAAAGQAAAHADAIQADAIAEAFQAFAFAHADQAGADAHAAQAGAAAFgCQAFgCADgDQAEgDADgHIACABQgCALgKAFQgIAFgQAAQgLAAgKgDgAgNgfQgHAHgBAKIAsAAQgBgJgDgFQgCgEgFgDQgFgCgFAAQgIAAgHAGg");
	this.shape_757.setTransform(96.6,141.3);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#FF0000").s().p("AgNAvQgCgCgBgDIgCgLIAAg3IgLAAIAAgBQAHgCAGgFIAFgHIAFgJIABgDIADAAIAAAYIAaAAIAAADIgaAAIAAA1QABAJACAEQACADADABQADABAFAAQAEAAAEgBIAGgHIACACQgDAFgHADQgGACgJAAQgMAAgGgEg");
	this.shape_758.setTransform(89.6,140.2);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#FF0000").s().p("AgjAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgWIgBgNQAAgEgCgDIgFgDIgHgBIAAgDIAbgCQACAIAAAGQAEgHAEgCQAIgGALABQAHAAAEACQADACAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDAAQgEAAgCgDIgDgDQgEgDgFAAQgIAAgDAHQgEAIAAAPIAAAQIABAHIAAAJQABADACACQADACAHACIAAACg");
	this.shape_759.setTransform(73.6,141.2);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#FF0000").s().p("AgaAdQgMgKAAgRQAAgHADgIQAEgIAFgFQAHgHAJgDQAKgDAJAAQAPAAAJAGQAFADABAFQgBACgCADQgCABgDAAQgHAAgDgIIgDgGIgCgCQgEgCgEAAQgGAAgEADQgFACgDAEQgDAEgDAGQgEAKABAIQAAAIADAHQADAIAGAFQAIAJAMAAQAKAAAHgGQADgDADgHIADABQgFAKgHAEQgIAEgNAAQgUAAgMgLg");
	this.shape_760.setTransform(54.3,141.3);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAFgFQADgDAFgCIALgDIAOgDQAEgBACgCIAFgFIABgIQAAgKgEgFQgDgDgCgBIgHgBQgEAAgEABQgCACgCAEIgDAFQgCAEgFAAQgEAAgDgCQgCgCAAgDQAAgEAIgEIAKgCIALgBIANABQAHABAFADQAHADACAGIAAAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgKAFIgGAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAFAAAFgDQADgCACgFQADgGAAgMIAAgOIgLAGg");
	this.shape_761.setTransform(36.7,141.3);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#FF0000").s().p("AAHAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgOIgDgIQgDgEgEgBQgFgCgFAAQgFAAgFACQgFACgDADQgDAFgBAEIgBAQIAAAQIAAAHIABAJQABADACACQADACAIACIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDQgCgCgCgBIgHgBIAAgDIAcgCIACAJIAAACQANgMARABQANAAAIAFQAIAFAAAKIAAAmIABAJQABADADACQADACAHACIAAACg");
	this.shape_762.setTransform(26.1,141.2);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgBACgEQABgCABgEIABgMIAAgWIgBgOQgBgDgBgCIgFgEIgHgBIAAgCIAdgDIAAAzIABAHIAAAJQABAEACACQADACAIABIAAACgAgGgxQgDgDABgDQgBgEADgCQADgCADAAQAEAAADACQADACAAAEQAAADgDADQgDACgEAAQgDAAgDgCg");
	this.shape_763.setTransform(17.9,138.8);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#FF0000").s().p("AgkA2QgDgCAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQACgBAEAAIAFABIAFACIACAAQAHAAAEgJIADgHQACgEABgDQAAgDgFgIIgVgtIgDgHIgFgIIgDgDQgDgCgEgBIAAgCIAqAAIAAACIgHACQgEACAAAEQAAAEAFAJIAQAmIAPggQAGgMAAgFQAAgEgDgDQgDgCgFgBIAAgCIAeAAIAAACIgGADIgFADIgJATIgdA/QgGAMgDADQgGAGgJAAQgFAAgEgCg");
	this.shape_764.setTransform(5.6,142.9);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQADgBABgEQACgCAAgEIABgMIAAgWIgBgOQgBgDgCgCIgEgEIgHgBIAAgCIAdgDIAAAzIAAAHIABAJQABAEADACQADACAHABIAAACgAgGgxQgDgDAAgDQAAgEADgCQADgCADAAQAEAAACACQADACAAAEQAAADgDADQgCACgEAAQgDAAgDgCg");
	this.shape_765.setTransform(-30.2,138.8);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#FF0000").s().p("AAlAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIAAgLIAAgRIAAgPQgBgFgCgDQgFgIgMAAQgNAAgGAJQgFAHAAAQIAAAQIAAAHIABAJQABADACACQADACAIACIAAACIgtAAIAAgCQAGgBADgCIAEgEIACgHIAAgLIAAgQIAAgQQgBgFgDgDQgCgDgEgCQgEgCgFgBQgGAAgGADQgFACgDAFQgDAEgBAFQgBAFAAAIIAAAQIAAAHIABAJQABADACACQADACAIACIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDIgEgDIgHgBIAAgDIAdgCIACAMQAHgGAIgEQAIgCAJAAQAKgBAGAEQADAEAFAGQAIgHAJgEQAIgCAJAAQAMgBAIAHQAIAFAAAKIAAAeIAAAHIABAJIADAFQADACAIACIAAACg");
	this.shape_766.setTransform(-41.4,141.2);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#FF0000").s().p("AgMAvQgEgCgBgDIgBgLIAAg3IgKAAIAAgBQAGgCAGgFIAGgHIADgJIABgDIAFAAIAAAYIAZAAIAAADIgZAAIAAA1QgBAJADAEQACADAEABQACABAFAAQAEAAADgBIAHgHIABACQgDAFgGADQgGACgJAAQgMAAgFgEg");
	this.shape_767.setTransform(-63.4,140.2);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgMAAgGgEQgHgFAAgJQAAgHAGgFQADgDADgCIANgDIANgDQAFgBABgCIAFgFIABgIQAAgKgFgFQgCgDgCgBIgGgBQgFAAgDABQgEACgCAEIgCAFQgCAEgGAAQgDAAgCgCQgDgCAAgDQAAgEAHgEIAKgCIANgBIAMABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAGAAIAFgBIAFgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAFAAAGgDQADgCACgFQAEgGAAgMIAAgOIgMAGg");
	this.shape_768.setTransform(-70.8,141.3);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#FF0000").s().p("AAHAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgOIgDgIQgDgEgEgBQgFgCgFAAQgFAAgFACQgFACgDADQgDAFgBAEIgBAQIAAAQIAAAHIABAJQABADACACQADACAIACIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDIgEgDIgHgBIAAgDIAcgCQACAEAAAFIAAACQANgMARABQANAAAIAFQAIAFAAAKIAAAmIABAJQABADADACQADACAHACIAAACg");
	this.shape_769.setTransform(-81.4,141.2);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAFgFQADgDAFgCIALgDIAOgDQAEgBACgCIAFgFIABgIQAAgKgEgFQgDgDgCgBIgHgBQgEAAgEABQgDACgBAEIgDAFQgCAEgFAAQgEAAgDgCQgCgCAAgDQAAgEAIgEIAKgCIALgBIANABQAHABAFADQAHADACAGIAAAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgKAFIgGAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAFAAAEgDQAEgCACgFQADgGAAgMIAAgOIgLAGg");
	this.shape_770.setTransform(-91.1,141.3);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#FF0000").s().p("AgjAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgWIgBgNQAAgEgCgDIgFgDIgHgBIAAgDIAbgCQACAIAAAGQAEgHAEgCQAIgGALABQAHAAAEACQADACAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDAAQgEAAgCgDIgDgDQgEgDgFAAQgIAAgDAHQgEAIAAAPIAAAQIABAHIAAAJQABADACACQADACAHACIAAACg");
	this.shape_771.setTransform(-144.3,141.2);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#FF0000").s().p("AgPAWQAIgCADgDQAEgDACgEQAEgHABgFIgFABQgFAAgDgDQgEgDAAgFQAAgEAEgEQAEgDADAAQAHAAAEAEQAEAFAAAHQAAAHgEAGQgEAHgHAFQgGAEgJACg");
	this.shape_772.setTransform(-177,145.5);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgDQABgCABgFIAAgMIAAhHIAAgNQgBgEgBgCIgFgEIgHgBIAAgCIAdgDIAABlIABAHIAAAJQABADACACQADACAIABIAAACg");
	this.shape_773.setTransform(-187.3,138.7);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAFgFQAEgDAEgCIALgDIAOgDIAHgDIAEgFIABgIQAAgKgEgFQgCgDgDgBIgHgBQgEAAgEABQgDACgBAEIgDAFQgCAEgFAAQgEAAgDgCQgCgCAAgDQAAgEAIgEIAKgCIALgBIANABQAHABAFADQAHADACAGIAAAJIAAAhIABALQACAHAGAAIAGgBIAEgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgKAFIgGAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAFAAAFgDQAEgCACgFQAEgGgBgMIAAgOIgLAGg");
	this.shape_774.setTransform(-194,141.3);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#FF0000").s().p("AgNAvQgCgCgBgDIgBgLIAAg3IgMAAIAAgBQAHgCAGgFIAFgHIAFgJIAAgDIAEAAIAAAYIAaAAIAAADIgaAAIAAA1QAAAJADAEQACADADABQAEABADAAQAFAAADgBIAHgHIABACQgCAFgHADQgGACgKAAQgLAAgGgEg");
	this.shape_775.setTransform(-201.4,140.2);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgLAAgHgEQgHgFAAgJQAAgHAGgFQACgDAFgCIAMgDIANgDQAEgBACgCIAFgFIABgIQAAgKgFgFQgCgDgCgBIgHgBQgEAAgEABQgCACgCAEIgDAFQgCAEgGAAQgDAAgCgCQgDgCAAgDQAAgEAHgEIAKgCIANgBIAMABQAHABAFADQAGADADAGIAAAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAEAAAGgDQADgCACgFQADgGABgMIAAgOIgMAGg");
	this.shape_776.setTransform(-214.1,141.3);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgBACgEQACgCAAgEIAAgMIAAgWIAAgOQAAgDgDgCIgEgEIgHgBIAAgCIAdgDIAAAzIAAAHIABAJQABAEADACQADACAHABIAAACgAgGgxQgCgDgBgDQABgEACgCQADgCADAAQAEAAADACQACACAAAEQAAADgCADQgDACgEAAQgEAAgCgCg");
	this.shape_777.setTransform(-234.7,138.8);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#FF0000").s().p("AgjAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgWIgBgNQAAgEgCgDIgFgDIgHgBIAAgDIAbgCQACAIAAAGQAEgHAEgCQAIgGALABQAHAAAEACQADACAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDAAQgEAAgCgDIgDgDQgEgDgFAAQgIAAgDAHQgEAIAAAPIAAAQIABAHIAAAJQABADACACQADACAHACIAAACg");
	this.shape_778.setTransform(-264.9,141.2);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#FF0000").s().p("AgkA2QgDgCAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQACgBADAAIAGABIAFACIADAAQAGAAAEgJIADgHQADgEAAgDQAAgDgFgIIgVgtIgEgHIgEgIIgDgDQgDgCgDgBIAAgCIAoAAIAAACIgGACQgEACAAAEQAAAEAFAJIAQAmIAPggQAGgMAAgFQAAgEgDgDQgDgCgEgBIAAgCIAdAAIAAACIgGADIgFADIgJATIgdA/QgGAMgDADQgGAGgJAAQgFAAgEgCg");
	this.shape_779.setTransform(-273.1,142.9);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#FF0000").s().p("AgyA6IAAgCQAHgBACgBQADgBABgEIACgGIABgMIAAg/QAAgKgEgEQgEgFgIAAIAAgCIAegEIABAIIAAACQAIgFAHgBQAFgCAJAAQAPAAAMAIQAGAFAFAIQADAIAAAKQAAAKgDAHQgFAJgIAGQgLAIgRAAQgHAAgFgCQgGgCgIgFIAAARIAAAGIABAJQABADADACQACADAIABIAAACgAgFgyQgFACgDAEQgDAEgCAHIgBATIABASQACAGADAEQADAEAFACQAFACAEAAQAKAAAIgJQAGgGADgHQACgHAAgIQAAgIgCgHQgDgIgFgFQgHgKgMAAQgEAAgFADg");
	this.shape_780.setTransform(-283.5,142.9);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAFgFQAEgDAEgCIALgDIAOgDIAHgDIAEgFIABgIQAAgKgEgFQgCgDgDgBIgHgBQgEAAgEABQgDACgBAEIgDAFQgCAEgFAAQgEAAgDgCQgCgCAAgDQAAgEAIgEIAKgCIALgBIANABQAHABAFADQAHADACAGIAAAJIAAAhIABALQACAHAGAAIAGgBIAEgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgKAFIgGAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAFAAAFgDQAEgCACgFQAEgGgBgMIAAgOIgLAGg");
	this.shape_781.setTransform(-293,141.3);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#FF0000").s().p("Ag5A/IAAgCIAKgCIAGgEQADgDACgFIAAgNIAAhDIAAgMIgDgHQgDgEgDgBQgFgCgGgBIgBAAIAAgBIA+AAQAQgBAIACQAIACAHAEQAPAKAAAQQAAARgPAIQgJADgKABIgSAAIgTAAIAAAhQAAAJABAEQABAFADADIAHAEIAIACIAAACgAgMgBIAKAAQAJAAAGgCQAFgBAFgDQAKgJAAgNQAAgIgDgFQgDgHgGgEQgGgFgIgBIgKAAIgJAAg");
	this.shape_782.setTransform(-304.1,138.9);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#FF0000").s().p("AAXAcQgNAMgSAAQgNAAgIgGQgHgFgBgKIAAgfIAAgHIgBgJQAAgDgCgCQgDgCgIgCIAAgCIAeAAIAAAuIABAOQABAFACADQADADADACQAFACAFAAQAFAAAFgCQAFgCADgEQAEgDABgFIABgPIAAgRIgBgHIAAgJIgEgFQgCgCgJgCIAAgCIAfAAIAAAxIABANQAAAEACACQACADACABIAHACIAAACIgcADQgCgGABgGg");
	this.shape_783.setTransform(4.4,117.5);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#FF0000").s().p("AgjAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgWIgBgNQAAgEgCgDIgFgDIgHgBIAAgDIAbgCQACAIAAAGQAEgHAEgCQAIgGALABQAHAAAEACQADACAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDAAQgEAAgCgDIgDgDQgEgDgFAAQgIAAgDAHQgEAIAAAPIAAAQIABAHIAAAJQABADACACQADACAHACIAAACg");
	this.shape_784.setTransform(-4.6,117.4);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgLAAgHgEQgHgFAAgJQAAgHAGgFQACgDAFgCIAMgDIANgDQAEgBACgCIAFgFIABgIQAAgKgFgFQgCgDgCgBIgHgBQgEAAgEABQgCACgCAEIgDAFQgCAEgGAAQgDAAgCgCQgDgCAAgDQAAgEAHgEIAKgCIANgBIAMABQAHABAFADQAGADADAGIAAAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAEAAAGgDQADgCACgFQADgGABgMIAAgOIgMAGg");
	this.shape_785.setTransform(-32.8,117.4);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#FF0000").s().p("Ag5A/IAAgCIAKgCIAGgEQADgDABgFIABgNIAAhDIAAgMIgDgHQgDgEgEgBQgEgCgGgBIgBAAIAAgBIA+AAQARgBAHACQAIACAGAEQAPAKABAQQgBARgPAIQgHADgMABIgRAAIgTAAIAAAhQgBAJACAEQABAFADADIAHAEIAIACIAAACgAgMgBIAKAAQAJAAAGgCQAGgBAEgDQAKgJAAgNQAAgIgDgGQgDgGgFgEQgHgFgJgBIgJAAIgJAAg");
	this.shape_786.setTransform(-43.8,115.1);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#FF0000").s().p("AgjAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgWIgBgNQAAgEgCgDQgCgCgDgBIgHgBIAAgDIAbgDQACAIAAAHQAEgHAEgCQAIgGALAAQAHABAEACQADACAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDAAQgEAAgCgDIgDgDQgEgEgFABQgIAAgDAIQgEAHAAAPIAAAQIABAHIAAAJQABADACACQADADAHABIAAACg");
	this.shape_787.setTransform(166,212.9);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#FF0000").s().p("AgMAvQgDgCgCgDIgBgLIAAg3IgLAAIAAgBQAHgCAGgFIAFgHIAFgJIABgDIADAAIAAAYIAaAAIAAADIgaAAIAAA1QABAJACAFQACACADABQAEACAEgBQAEABAEgCIAGgHIACACQgEAFgGADQgGADgJAAQgMgBgFgEg");
	this.shape_788.setTransform(122.3,211.8);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgBABgEQACgBAAgFIABgMIAAgWIgBgOQgBgDgCgCIgEgEIgHgBIAAgCIAdgDIAAAzIAAAHIABAJQABADADADQADACAHABIAAACgAgGgxQgDgCAAgEQAAgEADgCQADgCADAAQAEAAACACQADACAAAEQAAAEgDACQgCACgEAAQgDAAgDgCg");
	this.shape_789.setTransform(116.5,210.4);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#FF0000").s().p("AAWAnIgWg8IgcA8IgDAAIgVg3IgDgGQgDgJgEgDIgHgCIAAgCIApAAIAAACQgMAAAAAIQAAAEAFAMIAMAgIASgoQACgEAAgDQAAgJgLAAIAAgCIAoAAIAAACIgIACQgDACAAAEQAAAEACAFIAOAnIAQgjQADgHAAgEQAAgEgEgDIgHgDIAAgCIAfAAIAAACQgFAAgDADIgFAFIgFAJIgCAEIgZA2g");
	this.shape_790.setTransform(107.4,212.9);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#FF0000").s().p("AgjAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgWIgBgNQAAgEgCgDQgCgCgDgBIgHgBIAAgDIAbgDQACAIAAAHQAEgHAEgCQAIgGALAAQAHABAEACQADACAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDAAQgEAAgCgDIgDgDQgEgEgFABQgIAAgDAIQgEAHAAAPIAAAQIABAHIAAAJQABADACACQADADAHABIAAACg");
	this.shape_791.setTransform(91.7,212.9);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#FF0000").s().p("AgkBBIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgvIgPAAIAAgEIAPAAIAAgVQAAgIACgGQADgEAGgEQAFgDAHgCQAIgCAJAAQAIAAAFACQAFADAAAEQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAIgFgBIgEgEQgDgFgCgBQgCgCgDABIgIABIgEADQgCADgBAEIgBANIAAAXIAUAAIAAAEIgUAAIAAAvIAAAHIABAJQABADACACQACADAIABIAAACg");
	this.shape_792.setTransform(58.5,210.4);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#FF0000").s().p("AAUA4QgIAEgHACQgFACgJAAQgQAAgLgIQgHgGgEgHQgDgJAAgJQAAgKADgIQAFgIAIgGQALgJARAAQAGAAAGACQAGACAIAFIAAghQAAgKgFgEQgDgFgJAAIAAgCIAggDIAABoQAAAKAEAFQAEAFAIAAIAAACIgeADIgBgJgAgWgEQgFAFgDAHQgCAIAAAIQgBAHADAIQADAHAFAGQAHAKAMAAQAEgBAFgCQAEgCAEgEQADgFABgGQACgHAAgMQAAgNgCgGQgBgFgDgFQgDgDgFgCQgFgCgEAAQgLAAgIAJg");
	this.shape_793.setTransform(43.7,210.6);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#FF0000").s().p("AAHAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgPIgDgHQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDADQgDAEgBAFIgBAPIAAARIAAAHIABAJQABADACACQADADAIABIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDIgEgDIgHgBIAAgDIAcgDIACAKIAAACQANgMARAAQANABAIAFQAIAFAAAKIAAAmIABAJQABADADACQADADAHABIAAACg");
	this.shape_794.setTransform(32.3,212.9);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#FF0000").s().p("AgNAvQgCgCgBgDIgCgLIAAg3IgLAAIAAgBQAHgCAGgFIAFgHIAFgJIABgDIADAAIAAAYIAaAAIAAADIgaAAIAAA1QABAJACAFQACACADABQADACAEgBQAFABAEgCIAGgHIACACQgDAFgHADQgGADgKAAQgLgBgGgEg");
	this.shape_795.setTransform(-39.1,211.8);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#FF0000").s().p("AAHAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgPIgDgHQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDADQgDAEgBAFIgBAPIAAARIAAAHIABAJQABADACACQADADAIABIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDIgEgDIgHgBIAAgDIAcgDIACAKIAAACQANgMARAAQANABAIAFQAIAFAAAKIAAAmIABAJQABADADACQADADAHABIAAACg");
	this.shape_796.setTransform(-53.3,212.9);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#FF0000").s().p("AgCAnIgbg4QgGgNgCgDIgDgCIgFgBIAAgCIAoAAIAAACIgGACQgDACgBAEIABAFIAFALIAPAkIARgnQAEgIAAgEQAAgFgDgCIgGgCIAAgCIAdAAIAAACQgGACgDADQgFAEgGANIgZA1g");
	this.shape_797.setTransform(-97,212.9);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgEQACgBAAgFIAAgMIAAgWIAAgOQgBgDgCgCIgEgEIgHgBIAAgCIAdgDIAAAzIAAAHIABAJQABADADADQADACAHABIAAACgAgGgxQgCgCgBgEQABgEACgCQADgCADAAQAEAAACACQADACAAAEQAAAEgDACQgCACgEAAQgEAAgCgCg");
	this.shape_798.setTransform(-104.1,210.4);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#FF0000").s().p("AgjAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgWIgBgNQAAgEgCgDIgFgDIgHgBIAAgDIAbgDQACAIAAAHQAEgHAEgCQAIgGALAAQAHABAEACQADACAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDAAQgEAAgCgDIgDgDQgEgEgFABQgIAAgDAIQgEAHAAAPIAAAQIABAHIAAAJQABADACACQADADAHABIAAACg");
	this.shape_799.setTransform(-164.4,212.9);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#FF0000").s().p("AAWAnIgWg8IgcA8IgDAAIgVg3IgDgGQgDgJgEgDIgHgCIAAgCIApAAIAAACQgMAAAAAIQAAAEAFAMIAMAgIASgoQACgEAAgDQAAgJgLAAIAAgCIAoAAIAAACIgIACQgDACAAAEQAAAEACAFIAOAnIAQgjQADgHAAgEQAAgEgEgDIgHgDIAAgCIAfAAIAAACQgFAAgDADIgFAFIgFAJIgCAEIgZA2g");
	this.shape_800.setTransform(-195.5,212.9);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#FF0000").s().p("AgSA+QgVgGgMgQQgMgQAAgVQAAgRAHgOQAHgOANgIQAJgHANgDQAOgFAMAAQANAAAOAFIAIACIAFABQAAAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIACgDIACAAIACApIgDAAIgCgEIgGgOQgEgHgHgHQgGgEgHgCQgGgCgIgBQgMAAgHAFQgIAEgHAHQgGAHgEAKQgGANAAAQQAAAOAEAMQAEAMAIAHQAOAPAXAAQAMAAAKgDQAJgFAFgGQAGgIADgNIADABQgCAPgHAIQgHAIgMAEQgMAFgPAAQgOAAgNgEg");
	this.shape_801.setTransform(208.7,186.7);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#FF0000").s().p("AgjAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgVIgBgNQAAgEgCgCIgFgEIgHgCIAAgBIAbgDQACAIAAAFQAEgFAEgEQAIgEALAAQAHAAAEACQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDgBQgEABgCgDIgDgDQgEgDgFgBQgIAAgDAJQgEAIAAAOIAAAQIABAHIAAAJQABADACACQADACAHABIAAACg");
	this.shape_802.setTransform(151.8,189);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#FF0000").s().p("AgZA9IgIgDIgDAAQgFgBgCAFIgCAAIAAgmIADAAQAEAPAGAIQAMAPARAAQALAAAIgGQAIgIAAgKIgCgKQgCgFgDgDQgDgEgFgDIgQgIIgPgHIgJgGQgJgJAAgMQAAgHAEgIQADgHAGgFQAMgJAPAAIAIABIALAEIAHACIAEABQADgBABgEIADAAIABAkIgDAAIgFgNQgCgFgDgDQgFgIgGgDQgGgDgIgBQgLAAgHAHIgEAHIgCAIQAAAPAXAKIAOAFQARAIAHAHQAJAJAAANQAAAJgEAHQgGALgKAGQgLAGgPAAQgNAAgMgFg");
	this.shape_803.setTransform(113.4,186.7);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#FF0000").s().p("AgNAwQgCgDgBgDIgBgLIAAg2IgMAAIAAgCQAHgBAGgGIAFgHIAFgIIAAgDIAEAAIAAAXIAaAAIAAAEIgaAAIAAA0QAAAKADADQACADADABQAEACADAAQAFAAADgCIAHgGIABABQgCAGgHACQgGACgKABQgLgBgGgDg");
	this.shape_804.setTransform(100.1,187.9);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgLAAgHgEQgHgFAAgJQAAgHAGgFQACgDAFgCIAMgDIANgDIAGgDIAFgFIABgIQAAgKgFgFQgCgDgCgBIgHgBQgEAAgEABQgCACgCAEIgDAFQgCAEgGAAQgDAAgCgCQgDgCAAgDQAAgEAHgEIAKgCIANgBIAMABQAHABAFADQAGADADAGIAAAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAEAAAGgDQADgCACgFQADgGABgMIAAgOIgMAGg");
	this.shape_805.setTransform(92.8,189);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAFgFQADgDAFgCIALgDIAOgDIAHgDIAEgFIABgIQAAgKgEgFQgCgDgDgBIgHgBQgEAAgDABQgEACgCAEIgCAFQgCAEgFAAQgEAAgDgCQgCgCAAgDQAAgEAIgEIAKgCIALgBIANABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAGAAIAGgBIAEgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgKAFIgGAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAFAAAFgDQAEgCACgFQAEgGgBgMIAAgOIgLAGg");
	this.shape_806.setTransform(50.4,189);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgDQACgCAAgFIAAgMIAAhHIAAgNQAAgEgCgCQgCgDgDgBIgHgBIAAgCIAdgDIAABlIAAAHIABAJQABADACACQAEACAHABIAAACg");
	this.shape_807.setTransform(16.7,186.5);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#FF0000").s().p("AgiBCIAAhqQAAgKgEgFQgDgEgJAAIAAgDIAggDIAAA9QAFgFADgCQAJgFAJAAQAQAAAMAJQAPAKAAAUQAAATgOAMQgMAKgTAAQgJAAgHgCIgGgDIgEAAQgGAAgDAHgAgHgKQgFADgCAFQgEAHAAARQAAAKABAIQACAJACADQACAFAEACQAGADAFAAQAMAAAJgLQAIgKAAgRQAAgIgDgIQgDgIgEgEQgFgFgEgCQgFgCgFAAQgFAAgGADg");
	this.shape_808.setTransform(8.4,186.7);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgBACgDQABgCABgFIAAgMIAAgXIAAgMQgBgDgBgDQgCgDgDAAIgHgCIAAgCIAdgDIAAA0IABAHIAAAJQABACACACQADADAIABIAAACgAgGgyQgDgCABgDQgBgDADgDQADgCADAAQAEAAADACQADADAAADQAAADgDACQgDADgEAAQgDAAgDgDg");
	this.shape_809.setTransform(-8.7,186.5);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOANgLQAPgOAUAAQAWAAAPAOQAMALAAAOQAAAPgMALQgPAOgWAAQgVAAgPgOgAgVgbQgIALAAAQQAAAPAIALQAKAMAMAAQAFAAAFgCQAGgDAEgFQAEgFADgIQACgIAAgHQAAgGgCgIQgDgIgFgFQgJgKgLAAQgMAAgJAKg");
	this.shape_810.setTransform(-25.8,189);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#FF0000").s().p("AAUA4QgIAEgGACQgHACgIAAQgPAAgMgIQgHgFgEgJQgDgHAAgKQAAgKADgJQAFgHAHgGQAMgJAQABQAIAAAFACQAGABAHAGIAAgiQAAgKgEgFQgDgEgJAAIAAgCIAggEIAABqQABAKADAEQAEAEAIAAIAAACIgeAFIgBgKgAgWgEQgFAFgCAHQgDAHAAAJQAAAIACAHQADAHAFAGQAHAJAMAAQAEABAFgDQAFgCADgFQADgEABgGQABgHAAgMQAAgNgBgGQgBgFgDgEQgDgEgFgCQgFgCgDAAQgMAAgIAJg");
	this.shape_811.setTransform(-49.7,186.7);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#FF0000").s().p("AAHAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgSIgBgOIgDgIQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDAEgBAEIgBAPIAAARIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgNQgBgEgCgCIgEgEIgHgCIAAgBIAcgDQACAEAAAGIAAABQANgMARABQANgBAIAGQAIAFAAAKIAAAmIABAJQABADADACQADACAHABIAAACg");
	this.shape_812.setTransform(-168.2,189);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQADgBABgDQACgCAAgFIABgMIAAgXIgBgMQgBgDgCgDQgCgDgCAAIgHgCIAAgCIAdgDIAAA0IAAAHIABAJQABACADACQADADAHABIAAACgAgGgyQgDgCAAgDQAAgDADgDQADgCADAAQAEAAACACQADADAAADQAAADgDACQgCADgEAAQgDAAgDgDg");
	this.shape_813.setTransform(-198.5,186.5);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#FF0000").s().p("AgZA9IgIgDIgDAAQgFgBgCAFIgCAAIAAgmIADAAQAEAPAGAIQAMAPARAAQALAAAIgGQAIgIAAgKIgCgKQgCgFgDgDQgDgEgFgDIgQgIIgPgHIgJgGQgJgJAAgMQAAgHAEgIQADgHAGgFQAMgJAPAAIAIABIALAEIAHACIAEABQADgBABgEIADAAIABAkIgDAAIgFgNQgCgFgDgDQgFgIgGgDQgGgDgIgBQgLAAgHAHIgEAHIgCAIQAAAPAXAKIAOAFQARAIAHAHQAJAJAAANQAAAJgEAHQgGALgKAGQgLAGgPAAQgNAAgMgFg");
	this.shape_814.setTransform(-232.9,186.7);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#FF0000").s().p("AgaAdQgMgKAAgRQAAgHADgIQAEgIAFgFQAHgHAJgDQAKgDAJAAQAPAAAJAGQAFADABAFQgBACgCADQgCABgDAAQgHAAgDgIIgDgGIgCgCQgEgCgEAAQgGAAgEADQgFACgDAEQgDAEgDAGQgEAKAAAIQABAIADAHQADAIAGAFQAIAJAMAAQAKAAAHgGQADgDADgHIADABQgFAKgHAEQgIAEgNAAQgUAAgMgLg");
	this.shape_815.setTransform(-253.5,189);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQADgBABgDQACgCAAgFIABgMIAAgXIgBgMQgBgDgCgDQgCgDgCAAIgHgCIAAgCIAdgDIAAA0IAAAHIABAJQABACADACQADADAHABIAAACgAgGgyQgDgCAAgDQAAgDADgDQADgCADAAQAEAAACACQADADAAADQAAADgDACQgCADgEAAQgDAAgDgDg");
	this.shape_816.setTransform(-260.6,186.5);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#FF0000").s().p("AAXA+IAAgCIAKgBIAHgEQAEgDAAgEQACgFAAgJIAAhRIg1BtIgDAAIg1hsIAABQIABAOQACAEADADIAHAEIAJABIAAACIgxAAIAAgCIAKgBIAHgEQADgDACgEIABgOIAAhCIAAgIQgBgIgCgCQgCgFgFgCQgFgCgIAAIAAgDIAuAAIAsBhIAwhhIAqAAIAAADIgJABQgDABgDADIgEAEIgCAGIgBAMIAABCQABAJABAFQABAFAEACQAFAFAKAAIAAACg");
	this.shape_817.setTransform(-290.8,186.7);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQADgBABgDQABgCABgFIABgMIAAgXIgBgMQgBgDgCgDQgBgDgDAAIgHgCIAAgCIAdgDIAAA0IAAAHIABAJQABACADACQACADAIABIAAACgAgGgyQgDgCAAgDQAAgDADgDQADgCADAAQAEAAACACQADADABADQgBADgDACQgCADgEAAQgDAAgDgDg");
	this.shape_818.setTransform(241.2,162.7);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#FF0000").s().p("AAUA4QgIAEgGACQgHACgIAAQgPAAgMgIQgHgFgDgJQgEgHgBgKQABgKAEgJQAEgHAHgGQAMgJAQABQAIAAAFACQAGABAHAGIAAgiQAAgKgDgFQgEgEgJAAIAAgCIAggEIAABqQABAKADAEQAEAEAJAAIAAACIgfAFIgBgKgAgWgEQgFAFgCAHQgDAHgBAIQAAAJADAHQADAHAFAGQAHAJAMAAQAEABAFgDQAFgCADgFQADgEABgHQABgGAAgMQAAgNgBgGQgBgFgDgEQgDgEgFgCQgFgCgDAAQgMAAgIAJg");
	this.shape_819.setTransform(214.4,162.8);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#FF0000").s().p("AAHAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgSIgBgOIgDgIQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDAEgBAEIgBAPIAAARIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgNQgBgEgCgCIgEgEIgHgCIAAgBIAcgDQACAEAAAGIAAABQANgMARABQANgBAIAGQAIAFAAAKIAAAmIABAJQABADADACQADACAHABIAAACg");
	this.shape_820.setTransform(203,165.1);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAIACQAHADAFAFQAHAHAAAMIg8AAIgBAGQAAAHACAIQADAIAFAFQAFAFAGADQAGADAJAAQAFAAAFgCQAFgCAEgDQADgDADgHIACABQgDALgIAFQgKAFgOAAQgNAAgIgDgAgNgfQgGAHgCAKIAsAAQgBgJgCgFQgDgEgFgDQgFgCgFAAQgIAAgHAGg");
	this.shape_821.setTransform(192.5,165.2);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgBACgDQACgCAAgFIAAgMIAAgXIAAgMQAAgDgCgDQgDgDgCAAIgHgCIAAgCIAdgDIAAA0IAAAHIABAJQABACADACQADADAHABIAAACgAgGgyQgCgCgBgDQABgDACgDQADgCADAAQAEAAADACQACADAAADQAAADgCACQgDADgEAAQgEAAgCgDg");
	this.shape_822.setTransform(185.1,162.7);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#FF0000").s().p("Ag3A+IAAgCQAFABAEgCQAFgCACgCQADgCACgFIABgOIAAhCIgBgNQgBgIgIgEQgEgCgIAAIAAgDIBsAAIADAfIgCAAIgFgKQgFgJgJgEQgFgCgGgBIgTgBIgPAAIAAA2IAEAAQASAAAIgIQAEgDACgEIACgLIACAAIAAA2IgDAAQgBgJgDgFQgCgFgGgDQgEgCgGgBQgGgBgJAAIAAAkIABAOQABAEADADIAGAEIAKABIAAACg");
	this.shape_823.setTransform(169.5,162.8);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#FF0000").s().p("AgkA2QgDgCAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQACgBAEAAIAFABIAFACIACAAQAHAAAEgJIADgHQACgEABgDQAAgDgFgIIgVgtIgDgHIgFgIIgDgDQgDgCgEgBIAAgCIAqAAIAAACIgHACQgEACAAAEQAAAEAFAJIAQAmIAPggQAGgMAAgFQAAgEgDgDQgDgCgFgBIAAgCIAeAAIAAACIgGADQgDABgCACIgJATIgdA/QgFAMgEADQgGAGgJAAQgFAAgEgCg");
	this.shape_824.setTransform(153.7,166.8);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#FF0000").s().p("Ag6A+IAAgCIAKgBIAHgEQADgDACgEIABgOIAAhCIgBgNIgDgHQgCgDgEgCQgFgCgHAAIgBAAIAAgDIA/AAQARAAAHACQAIABAHAFQAPAKgBAQQABARgPAIQgJADgLAAIgRABIgUAAIAAAhQABAJABAFQABAEADADIAHAEIAJABIAAACgAgNgBIALAAQAJAAAGgCQAFAAAFgFQAKgHAAgOQAAgIgDgFQgDgHgGgEQgGgEgJgBIgKAAIgJAAg");
	this.shape_825.setTransform(120.8,162.8);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#FF0000").s().p("AgNAwQgCgDgBgDIgBgLIAAg2IgMAAIAAgCQAHgBAGgGIAFgHIAFgIIABgDIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QAAAKADAEQACACADABQAEACADAAQAFAAADgCIAHgGIACABQgDAGgHACQgGACgKAAQgLABgGgEg");
	this.shape_826.setTransform(91.9,164.1);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#FF0000").s().p("AgMAwQgDgDgCgDIgBgLIAAg2IgLAAIAAgCQAHgBAGgGIAFgHIAFgIIABgDIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QABAKACAEQACACADABQAEACAEAAQAEAAAEgCIAGgGIACABQgEAGgGACQgGACgJAAQgMABgFgEg");
	this.shape_827.setTransform(86.3,164.1);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQADgBABgDQACgCAAgFIABgMIAAgXIgBgMQgBgDgCgDQgCgDgCAAIgHgCIAAgCIAdgDIAAA0IAAAHIABAJQABACADACQADADAHABIAAACgAgGgyQgDgCAAgDQAAgDADgDQADgCADAAQAEAAACACQADADAAADQAAADgDACQgCADgEAAQgDAAgDgDg");
	this.shape_828.setTransform(80.5,162.7);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#FF0000").s().p("Ag+A+IAAgCQAKAAAGgFQADgDACgEIABgOIAAhCIgBgPQgCgFgDgDQgDgCgEgBIgJgBIAAgDIBCAAIAAADIgJABQgDABgDACQgEADgBAFQgBAEAAALIAAAzIABASQAAAGACAEQAEAGAHAEQAHACALAAQANAAAJgCQAIgDAFgGQAEgEADgFIAEgOIACAAIgBAlg");
	this.shape_829.setTransform(71.6,162.8);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#FF0000").s().p("AgkA2QgDgCAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQACgBAEAAIAFABIAFACIACAAQAHAAAEgJIADgHQACgEABgDQAAgDgFgIIgVgtIgDgHIgFgIIgDgDQgDgCgEgBIAAgCIAqAAIAAACIgHACQgEACAAAEQAAAEAFAJIAQAmIAPggQAGgMAAgFQAAgEgDgDQgDgCgEgBIAAgCIAdAAIAAACIgGADQgDABgCACIgJATIgdA/QgGAMgDADQgGAGgJAAQgFAAgEgCg");
	this.shape_830.setTransform(55.1,166.8);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#FF0000").s().p("AAYA+IAAgCIAKgBIAGgEQADgDACgEQABgFAAgJIAAhRIg1BtIgCAAIg2hsIAABQIABAOQACAEACADIAHAEIAKABIAAACIgwAAIAAgCIAJgBIAHgEQADgDABgEIABgOIAAhCIAAgIQAAgIgCgCQgDgFgEgCQgFgCgHAAIAAgDIAtAAIAtBhIAuhhIAsAAIAAADIgKABQgEABgDADIgDAEIgBAGIgBAMIAABCQAAAJABAFQABAFADACQAGAFALAAIAAACg");
	this.shape_831.setTransform(40.9,162.8);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#FF0000").s().p("AgkBAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAguIgPAAIAAgDIAPAAIAAgXQAAgHACgFQADgFAGgEQAFgEAHgCQAIgCAJAAQAIABAFACQAFADAAAEQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQgCACgDAAIgFgBIgEgFQgDgEgCgBQgCgCgDAAIgIACIgEAEQgCACgBAFIgBALIAAAZIAUAAIAAADIgUAAIAAAvIAAAHIABAJQABADACACQACACAIABIAAACg");
	this.shape_832.setTransform(24,162.6);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOANgLQAPgOAUAAQAVAAAPAOQANALAAAOQAAAPgMALQgPAOgWAAQgVAAgPgOgAgUgbQgJALAAAQQAAAPAIALQAKAMALAAQAHAAAEgCQAGgDAEgFQAEgFACgIQADgIAAgHQAAgGgDgIQgDgIgEgFQgJgKgLAAQgLAAgJAKg");
	this.shape_833.setTransform(14.5,165.2);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#FF0000").s().p("AgMAwQgDgDgCgDIgBgLIAAg2IgLAAIAAgCQAHgBAGgGIAFgHIAFgIIABgDIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QABAKACAEQACACADABQAEACAEAAQAEAAAEgCIAGgGIACABQgEAGgGACQgGACgJAAQgMABgFgEg");
	this.shape_834.setTransform(-23.5,164.1);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#FF0000").s().p("AgaAdQgMgKABgRQAAgHADgIQADgIAGgFQAGgHAKgDQAIgDALAAQAOAAAKAGQAEADAAAFQAAACgBADQgDABgDAAQgHAAgDgIIgCgGIgDgCQgDgCgFAAQgGAAgFADQgEACgDAEQgDAEgDAGQgDAKAAAIQAAAIADAHQAEAIAFAFQAIAJAMAAQAKAAAHgGQADgDADgHIACABQgDAKgIAEQgHAEgNAAQgVAAgMgLg");
	this.shape_835.setTransform(-77.1,165.2);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#FF0000").s().p("AgNAwQgCgDgBgDIgBgLIAAg2IgMAAIAAgCQAHgBAGgGIAFgHIAFgIIABgDIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QAAAKADAEQACACADABQAEACADAAQAFAAADgCIAHgGIACABQgDAGgHACQgGACgKAAQgLABgGgEg");
	this.shape_836.setTransform(-158.3,164.1);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#FF0000").s().p("AgkBAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAguIgPAAIAAgDIAPAAIAAgXQAAgHACgFQADgFAGgEQAFgEAHgCQAIgCAJAAQAIABAFACQAFADAAAEQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQgCACgDAAIgFgBIgEgFQgDgEgCgBQgCgCgDAAIgIACIgEAEQgCACgBAFIgBALIAAAZIAUAAIAAADIgUAAIAAAvIAAAHIABAJQABADACACQACACAIABIAAACg");
	this.shape_837.setTransform(-168.9,162.6);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOANgLQAPgOAUAAQAWAAAPAOQAMALAAAOQAAAPgMALQgPAOgWAAQgVAAgPgOgAgVgbQgIALAAAQQAAAPAIALQAKAMAMAAQAFAAAFgCQAGgDAEgFQAEgFADgIQACgIAAgHQAAgGgCgIQgDgIgFgFQgJgKgLAAQgMAAgJAKg");
	this.shape_838.setTransform(-215.7,165.2);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#FF0000").s().p("AAUA4QgIAEgGACQgHACgIAAQgPAAgMgIQgHgFgDgJQgEgHgBgKQABgKAEgJQAEgHAHgGQAMgJAQABQAIAAAFACQAGABAHAGIAAgiQAAgKgDgFQgEgEgJAAIAAgCIAggEIAABqQABAKADAEQAEAEAJAAIAAACIgfAFIgBgKgAgWgEQgFAFgCAHQgDAHgBAIQAAAJADAHQADAHAFAGQAHAJAMAAQAEABAFgDQAFgCADgFQADgEABgHQABgGAAgMQAAgNgBgGQgBgFgDgEQgDgEgFgCQgFgCgDAAQgMAAgIAJg");
	this.shape_839.setTransform(-232,162.8);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#FF0000").s().p("AAHAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgSIgBgOIgDgIQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDAEgBAEIgBAPIAAARIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgNQgBgEgCgCQgCgDgCgBIgHgCIAAgBIAcgDIACAKIAAABQANgMARABQANgBAIAGQAIAFAAAKIAAAmIABAJQABADADACQADACAHABIAAACg");
	this.shape_840.setTransform(-243.4,165.1);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#FF0000").s().p("AgjA2QgEgCAAgDQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQACgBADAAIAHABIAEACIADAAQAGAAAEgJIADgHQACgEAAgDQAAgDgEgIIgVgtIgEgHIgEgIIgDgDQgCgCgEgBIAAgCIAoAAIAAACIgGACQgEACAAAEQAAAEAFAJIAQAmIAPggQAGgMAAgFQAAgEgDgDQgDgCgEgBIAAgCIAdAAIAAACIgGADQgCABgCACIgKATIgeA/QgFAMgDADQgGAGgIAAQgGAAgDgCg");
	this.shape_841.setTransform(-267.9,166.8);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#FF0000").s().p("AAHAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgSIgBgOIgDgIQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDAEgBAEIgBAPIAAARIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgNQgBgEgCgCIgEgEIgHgCIAAgBIAcgDQACAEAAAGIAAABQANgMARABQANgBAIAGQAIAFAAAKIAAAmIABAJQABADADACQADACAHABIAAACg");
	this.shape_842.setTransform(-278,165.1);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#FF0000").s().p("AgMAvQgEgCgBgDIgBgLIAAg3IgKAAIAAgBQAGgCAGgFIAGgHIADgJIABgDIAFAAIAAAYIAZAAIAAADIgZAAIAAA1QAAAJACAEQACADAEABQACABAFAAQAEAAAEgBIAGgHIABACQgDAFgGADQgGACgJAAQgMAAgFgEg");
	this.shape_843.setTransform(263.4,140.2);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgMAAgGgEQgHgFAAgJQAAgHAFgFQAEgDADgCIANgDIANgDQAFgBACgCIAEgFIABgIQAAgKgFgFQgCgDgCgBIgGgBQgFAAgDABQgDACgDAEIgCAFQgCAEgGAAQgDAAgDgCQgCgCAAgDQAAgEAIgEIAJgCIAMgBIANABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAGAAIAGgBIAEgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgKAFIgGAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAGAAAEgDQAEgCACgFQAEgGAAgMIAAgOIgMAGg");
	this.shape_844.setTransform(248.6,141.3);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#FF0000").s().p("Ag+A/IAAgCIAKgCIAGgEQADgDACgFIABgNIAAhDIgBgNQgCgFgDgDIgGgEIgKgCIAAgBIBwAAIABAeIgCAAQgBgIgEgFQgDgFgGgEQgFgDgGgBQgHgBgLgBIgXAAIAAA3IAGAAQAKAAADgBQAFgBADgCQADgDACgEIACgKIACAAIAAAvIgCAAQgBgGgCgFQgCgEgDgDQgDgDgFgBQgEgBgIAAIgGAAIAAAUIABASQAAAGACAEQAEAGAHADQAHADALAAQANAAAJgCQAIgDAFgGQAEgEADgFIAEgNIACAAIgBAlg");
	this.shape_845.setTransform(237,138.9);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgLAAgHgEQgHgFAAgJQAAgHAGgFQACgDAFgCIALgDIAOgDQAEgBACgCIAFgFIABgIQAAgKgFgFQgBgDgDgBIgHgBQgEAAgEABQgCACgCAEIgDAFQgCAEgFAAQgEAAgCgCQgDgCAAgDQAAgEAHgEIALgCIAMgBIAMABQAHABAFADQAHADACAGIAAAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAFAAAFgDQADgCACgFQADgGABgMIAAgOIgMAGg");
	this.shape_846.setTransform(205.8,141.3);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#FF0000").s().p("AgkBBIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgvIgPAAIAAgEIAPAAIAAgVQAAgIACgGQADgEAGgEQAFgDAHgCQAIgCAJgBQAIAAAFADQAFACAAAEQAAABAAABQAAABAAAAQAAABgBAAQAAABgBAAQgCACgDAAIgFgBIgEgEQgDgFgCgBQgCgCgDABIgIABIgEADQgCADgBAEIgBAMIAAAYIAUAAIAAAEIgUAAIAAAvIAAAHIABAJQABADACACQACACAIACIAAACg");
	this.shape_847.setTransform(171.9,138.7);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgLAAgHgEQgHgFAAgJQAAgHAGgFQACgDAFgCIAMgDIANgDQAEgBACgCIAFgFIABgIQAAgKgFgFQgCgDgCgBIgGgBQgFAAgEABQgCACgCAEIgDAFQgCAEgGAAQgDAAgCgCQgDgCAAgDQAAgEAHgEIAKgCIANgBIAMABQAHABAFADQAGADADAGIAAAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAEAAAGgDQADgCACgFQADgGABgMIAAgOIgMAGg");
	this.shape_848.setTransform(158.5,141.3);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQADgBABgEQABgCABgEIABgMIAAgWIgBgOQAAgDgDgCQgBgDgDgBIgHgBIAAgCIAdgDIAAAzIABAHIAAAJQABAEADACQACACAIABIAAACgAgGgxQgCgDAAgDQAAgEACgCQADgCADAAQAEAAACACQAEACAAAEQAAADgEADQgCACgEAAQgDAAgDgCg");
	this.shape_849.setTransform(137.8,138.8);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#FF0000").s().p("AgPBNIAAgDQAJAAAGgDIAAiOQgGgBgJgBIAAgCIAfAAIAACYg");
	this.shape_850.setTransform(125.8,139.8);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#FF0000").s().p("AgdA/IAAgCIAKgCQAEgBADgDQACgCABgEIABgLIAAhWIgIAAIgNgBIAAgBIADAAQAIAAAHgCQAHgDAIgFIACgBIADAAIAABjQAAAHABAEQABAFADACQAFAEALABIAAACg");
	this.shape_851.setTransform(118.2,138.9);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAOAAQAJAAAIACQAGADAFAFQAIAHAAAMIg9AAIAAAGQAAAHACAIQAEAIAEAFQAFAFAGADQAHADAHAAQAGAAAFgCQAFgCADgDQAEgDADgHIACABQgDALgIAFQgKAFgPAAQgMAAgIgDgAgNgfQgHAHgBAKIAsAAQAAgJgDgFQgDgEgFgDQgFgCgFAAQgIAAgHAGg");
	this.shape_852.setTransform(102.7,141.3);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#FF0000").s().p("AgPBNIAAiYIAfAAIAAACQgJABgGABIAACOQAGADAJAAIAAADg");
	this.shape_853.setTransform(67.8,139.8);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#FF0000").s().p("AgPAWQAHgCAFgDQADgDACgEQAEgHABgFIgFABQgFAAgDgDQgEgDAAgFQAAgEAEgEQAEgDADAAQAHAAAEAEQADAFABAHQgBAHgDAGQgEAHgHAFQgFAEgKACg");
	this.shape_854.setTransform(61.3,145.5);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAOAAQAJAAAHACQAIADAEAFQAIAHAAAMIg9AAIAAAGQAAAHADAIQADAIAEAFQAFAFAHADQAGADAHAAQAGAAAFgCQAFgCADgDQAEgDADgHIACABQgCALgKAFQgIAFgQAAQgMAAgIgDgAgNgfQgHAHgBAKIAsAAQgBgJgDgFQgCgEgFgDQgFgCgFAAQgIAAgHAGg");
	this.shape_855.setTransform(53.9,141.3);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQADgBABgEQABgCABgEIABgMIAAgWIgBgOQAAgDgDgCQgBgDgDgBIgHgBIAAgCIAdgDIAAAzIABAHIAAAJQABAEADACQACACAIABIAAACgAgGgxQgCgDAAgDQAAgEACgCQADgCADAAQAEAAACACQAEACAAAEQAAADgEADQgCACgEAAQgDAAgDgCg");
	this.shape_856.setTransform(46.5,138.8);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#FF0000").s().p("Ag5A/IAAgCIAKgCIAGgEQADgDACgFIABgNIAAhDIgBgMIgDgHQgDgEgDgBQgFgCgGgBIgBAAIAAgBIA+AAQAQgBAIACQAIACAHAEQAPAKAAAQQAAARgPAIQgIADgLABIgSAAIgTAAIAAAhQAAAJABAEQABAFADADIAHAEIAJACIAAACgAgMgBIAKAAQAJAAAGgCQAFgBAFgDQAKgJAAgNQAAgIgDgFQgDgHgGgEQgGgFgIgBIgKAAIgJAAg");
	this.shape_857.setTransform(37.9,138.9);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#FF0000").s().p("AAHAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgOIgDgIQgDgEgEgBQgFgCgFAAQgFAAgFACQgFACgDADQgDAFgBAEIgBAQIAAAQIAAAHIABAJQABADACACQADACAIACIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDIgEgDIgHgBIAAgDIAcgCIACAJIAAACQANgMARABQANAAAIAFQAIAFAAAKIAAAmIABAJQABADADACQADACAHACIAAACg");
	this.shape_858.setTransform(10.9,141.2);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgMAAgGgEQgHgFAAgJQAAgHAGgFQADgDADgCIANgDIANgDQAFgBACgCIAEgFIABgIQAAgKgFgFQgCgDgCgBIgGgBQgFAAgDABQgEACgCAEIgCAFQgCAEgGAAQgDAAgCgCQgDgCAAgDQAAgEAHgEIAKgCIANgBIAMABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAGAAIAFgBIAFgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAFAAAGgDQADgCACgFQAEgGAAgMIAAgOIgMAGg");
	this.shape_859.setTransform(1.2,141.3);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#FF0000").s().p("AhKA/IAAgCIAKgCIAGgEQADgDACgFIABgNIAAhDIgBgPQgCgEgEgDQgFgEgKgBIAAgBIA6AAIAXAAQAWACAPAJQAPAJAIAPQAIAPAAAPQAAANgEALQgFAMgIAHQgMAKgRAEQgNACgOAAgAgdAfIABAOQABAFADADQAHAHAPAAQAMAAAJgEQAJgEAIgHQAHgJADgKQAEgLAAgLQAAgMgEgMQgFgLgIgKQgMgLgQgFQgIgCgNAAIgNAAg");
	this.shape_860.setTransform(-17.7,138.9);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgMAAgGgEQgHgFAAgJQAAgHAGgFQACgDAEgCIANgDIANgDQAEgBACgCIAFgFIABgIQAAgKgFgFQgCgDgCgBIgGgBQgFAAgEABQgCACgDAEIgCAFQgCAEgGAAQgDAAgCgCQgDgCAAgDQAAgEAHgEIAKgCIANgBIAMABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAEAAAGgDQADgCACgFQADgGABgMIAAgOIgMAGg");
	this.shape_861.setTransform(-35.1,141.3);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#FF0000").s().p("AAHAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgOIgDgIQgDgEgEgBQgFgCgFAAQgFAAgFACQgFACgDADQgDAFgBAEIgBAQIAAAQIAAAHIABAJQABADACACQADACAIACIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDIgEgDIgHgBIAAgDIAcgCIACAJIAAACQANgMARABQANAAAIAFQAIAFAAAKIAAAmIABAJQABADADACQADACAHACIAAACg");
	this.shape_862.setTransform(-45.7,141.2);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#FF0000").s().p("AAlAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIAAgLIAAgRIAAgPQgBgFgCgDQgFgIgMAAQgNAAgGAJQgFAHAAAQIAAAQIAAAHIABAJQABADACACQADACAIACIAAACIgtAAIAAgCQAGgBADgCIAEgEIACgHIAAgLIAAgQIAAgQQgBgFgDgDQgCgDgEgCQgEgCgFgBQgGAAgGADQgFACgDAFQgDAEgBAFQgBAFAAAIIAAAQIAAAHIABAJQABADACACQADACAIACIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDIgEgDIgHgBIAAgDIAdgCIACAMQAHgGAIgEQAIgCAJAAQAKgBAGAEQADAEAFAGQAIgHAJgEQAIgCAJAAQAMgBAIAHQAIAFAAAKIAAAeIAAAHIABAJIADAFQADACAIACIAAACg");
	this.shape_863.setTransform(-69.6,141.2);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#FF0000").s().p("AAHAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgOQgBgFgCgDQgDgEgEgBQgFgCgFAAQgFAAgFACQgFACgDADQgDAFgBAEIgBAQIAAAQIAAAHIABAJQABADACACQADACAIACIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDQgCgCgCgBIgHgBIAAgDIAcgCIACAJIAAACQANgMARABQANAAAIAFQAIAFAAAKIAAAmIABAJQABADADACQADACAHACIAAACg");
	this.shape_864.setTransform(-103.6,141.2);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQADgBABgEQABgCABgEIABgMIAAgWIgBgOQgBgDgBgCIgFgEIgHgBIAAgCIAdgDIAAAzIABAHIAAAJQABAEACACQADACAIABIAAACgAgGgxQgCgDAAgDQAAgEACgCQADgCADAAQAEAAACACQAEACAAAEQAAADgEADQgCACgEAAQgDAAgDgCg");
	this.shape_865.setTransform(-111.8,138.8);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#FF0000").s().p("Ag6A/IAAgCIAKgCIAHgEQAEgDAAgFIACgNIAAhDIgBgMIgDgHQgDgEgEgBQgEgCgHgBIgBAAIAAgBIA/AAQARgBAHACQAIACAGAEQAQAKgBAQQABARgQAIQgHADgMABIgRAAIgUAAIAAAhQABAJABAEQABAFADADIAHAEIAJACIAAACgAgNgBIALAAQAJAAAGgCQAFgBAFgDQAKgJAAgNQAAgIgDgFQgDgHgGgEQgGgFgJgBIgKAAIgJAAg");
	this.shape_866.setTransform(-120.5,138.9);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#FF0000").s().p("AAlAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIAAgLIAAgRIAAgPQgBgFgCgDQgFgIgMAAQgNAAgGAJQgFAHAAAQIAAAQIAAAHIABAJQABADACACQADACAIACIAAACIgtAAIAAgCQAGgBADgCIAEgEIACgHIAAgLIAAgQIAAgQQgBgFgDgDQgCgDgEgCQgEgCgFgBQgGAAgGADQgFACgDAFQgDAEgBAFQgBAFAAAIIAAAQIAAAHIABAJQABADACACQADACAIACIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDIgEgDIgHgBIAAgDIAdgCIACAMQAHgGAIgEQAIgCAJAAQAKgBAGAEQADAEAFAGQAIgHAJgEQAIgCAJAAQAMgBAIAHQAIAFAAAKIAAAeIAAAHIABAJIADAFQADACAIACIAAACg");
	this.shape_867.setTransform(-150.4,141.2);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#FF0000").s().p("AgkBBIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgvIgPAAIAAgEIAPAAIAAgVQAAgIACgGQADgEAGgEQAFgDAHgCQAIgCAJgBQAIAAAFADQAFACAAAEQAAABAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAIgFgBIgEgEQgDgFgCgBQgCgCgDABIgIABIgEADQgCADgBAEIgBAMIAAAYIAUAAIAAAEIgUAAIAAAvIAAAHIABAJQABADACACQACACAIACIAAACg");
	this.shape_868.setTransform(-208.2,138.7);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#FF0000").s().p("AgQAlQgJgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAHACQAHADAGAFQAHAHAAAMIg8AAIgBAGQAAAHADAIQADAIAEAFQAFAFAGADQAHADAIAAQAFAAAFgCQAFgCAEgDQADgDADgHIACABQgCALgKAFQgIAFgPAAQgMAAgKgDgAgNgfQgGAHgCAKIAsAAQAAgJgEgFQgDgEgEgDQgFgCgFAAQgIAAgHAGg");
	this.shape_869.setTransform(-227.5,141.3);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQADgBABgEQABgCABgEIABgMIAAgWIgBgOQgBgDgCgCQgBgDgDgBIgHgBIAAgCIAdgDIAAAzIAAAHIABAJQABAEADACQACACAIABIAAACgAgGgxQgDgDAAgDQAAgEADgCQADgCADAAQAEAAACACQADACABAEQgBADgDADQgCACgEAAQgEAAgCgCg");
	this.shape_870.setTransform(-234.9,138.8);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#FF0000").s().p("Ag5A/IAAgCIAJgCIAHgEQADgDABgFIABgNIAAhDIAAgMIgDgHQgCgEgFgBQgEgCgHgBIAAAAIAAgBIA+AAQARgBAHACQAIACAGAEQAPAKABAQQgBARgPAIQgHADgMABIgRAAIgTAAIAAAhQgBAJACAEQABAFADADIAHAEIAIACIAAACgAgMgBIAKAAQAJAAAGgCQAGgBAEgDQAKgJAAgNQAAgIgDgFQgDgHgFgEQgHgFgJgBIgJAAIgJAAg");
	this.shape_871.setTransform(-243.5,138.9);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQADgBABgEQABgCABgEIABgMIAAgWIgBgOQgBgDgBgCIgFgEIgHgBIAAgCIAdgDIAAAzIABAHIAAAJQABAEACACQADACAIABIAAACgAgGgxQgCgDAAgDQAAgEACgCQADgCADAAQAEAAACACQAEACAAAEQAAADgEADQgCACgEAAQgDAAgDgCg");
	this.shape_872.setTransform(-267.5,138.8);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#FF0000").s().p("AAHAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgOQgBgFgCgDQgDgEgEgBQgFgCgFAAQgFAAgFACQgFACgDADQgDAFgBAEIgBAQIAAAQIAAAHIABAJQABADACACQADACAIACIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDIgEgDIgHgBIAAgDIAcgCIACAJIAAACQANgMARABQANAAAIAFQAIAFAAAKIAAAmIABAJQABADADACQADACAHACIAAACg");
	this.shape_873.setTransform(-286.4,141.2);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQADgBABgEQABgCABgEIABgMIAAgWIgBgOQAAgDgDgCQgBgDgDgBIgHgBIAAgCIAdgDIAAAzIABAHIAAAJQABAEACACQADACAIABIAAACgAgGgxQgCgDAAgDQAAgEACgCQADgCADAAQAEAAACACQAEACAAAEQAAADgEADQgCACgEAAQgDAAgDgCg");
	this.shape_874.setTransform(-294.6,138.8);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#FF0000").s().p("Ag6A/IAAgCIAKgCIAHgEQAEgDAAgFIABgNIAAhDIAAgMIgDgHQgDgEgEgBQgEgCgHgBIgBAAIAAgBIA/AAQARgBAHACQAIACAGAEQAPAKAAAQQAAARgPAIQgHADgMABIgRAAIgUAAIAAAhQABAJABAEQABAFADADIAHAEIAIACIAAACgAgNgBIALAAQAJAAAGgCQAFgBAFgDQAKgJAAgNQAAgIgDgFQgDgHgFgEQgHgFgJgBIgKAAIgJAAg");
	this.shape_875.setTransform(-303.3,138.9);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#FF0000").s().p("AgQAlQgJgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAHACQAHADAGAFQAHAHAAAMIg8AAIgBAGQAAAHADAIQADAIAEAFQAFAFAGADQAHADAIAAQAFAAAFgCQAFgCAEgDQADgDADgHIACABQgCALgKAFQgIAFgPAAQgMAAgKgDgAgNgfQgGAHgCAKIAsAAQAAgJgEgFQgDgEgEgDQgFgCgFAAQgIAAgHAGg");
	this.shape_876.setTransform(22.2,117.4);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQADgBABgEQABgCABgEIABgMIAAgWIgBgOQgBgDgCgCQgBgDgDgBIgHgBIAAgCIAdgDIAAAzIAAAHIABAJQABAEADACQACACAIABIAAACgAgGgxQgDgDAAgDQAAgEADgCQADgCADAAQAEAAACACQADACABAEQgBADgDADQgCACgEAAQgEAAgCgCg");
	this.shape_877.setTransform(14.9,114.9);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#FF0000").s().p("Ag5A/IAAgCIAKgCIAGgEQADgDABgFIABgNIAAhDIAAgMIgDgHQgCgEgFgBQgEgCgHgBIAAAAIAAgBIA+AAQARgBAHACQAIACAGAEQAPAKABAQQgBARgPAIQgHADgMABIgRAAIgTAAIAAAhQgBAJACAEQABAFADADIAHAEIAIACIAAACgAgMgBIAKAAQAJAAAGgCQAGgBAEgDQAKgJAAgNQAAgIgDgGQgDgGgFgEQgHgFgJgBIgJAAIgJAAg");
	this.shape_878.setTransform(6.2,115.1);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQADgBABgEQABgCABgEIABgMIAAgWIgBgOQgBgDgBgCIgFgEIgHgBIAAgCIAdgDIAAAzIABAHIAAAJQABAEACACQADACAIABIAAACgAgGgxQgCgDAAgDQAAgEACgCQADgCADAAQAEAAACACQAEACAAAEQAAADgEADQgCACgEAAQgDAAgDgCg");
	this.shape_879.setTransform(-17.8,114.9);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#FF0000").s().p("AAHAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgPIgDgHQgDgEgEgBQgFgCgFAAQgFAAgFACQgFACgDADQgDAFgBAEIgBAQIAAAQIAAAHIABAJQABADACACQADACAIACIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDIgEgDIgHgBIAAgDIAcgCIACAJIAAACQANgLARAAQANAAAIAFQAIAFAAAKIAAAmIABAJQABADADACQADACAHACIAAACg");
	this.shape_880.setTransform(-36.6,117.4);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQADgBABgEQABgCABgEIABgMIAAgWIgBgOQAAgDgDgCQgBgDgDgBIgHgBIAAgCIAdgDIAAAzIABAHIAAAJQABAEACACQADACAIABIAAACgAgGgxQgCgDAAgDQAAgEACgCQADgCADAAQAEAAACACQAEACAAAEQAAADgEADQgCACgEAAQgDAAgDgCg");
	this.shape_881.setTransform(-44.9,114.9);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#FF0000").s().p("Ag5A/IAAgCIAKgCIAGgEQADgDACgFIAAgNIAAhDIAAgMIgDgHQgDgEgDgBQgFgCgGgBIgBAAIAAgBIA+AAQAQgBAIACQAIACAHAEQAPAKAAAQQAAARgPAIQgJADgKABIgSAAIgTAAIAAAhQAAAJABAEQABAFADADIAHAEIAIACIAAACgAgMgBIAKAAQAJAAAGgCQAFgBAFgDQAKgJAAgNQAAgIgDgGQgDgGgGgEQgGgFgIgBIgKAAIgJAAg");
	this.shape_882.setTransform(-53.5,115.1);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgEQABgBABgFIAAgMIAAgWIAAgOQAAgDgCgCIgFgEIgHgBIAAgCIAdgDIAAAzIABAHIAAAJQABADACADQAEACAHABIAAACgAgGgxQgDgCABgEQgBgEADgCQADgCADAAQAEAAADACQACACAAAEQAAAEgCACQgDACgEAAQgDAAgDgCg");
	this.shape_883.setTransform(108.9,210.4);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#FF0000").s().p("AAUA4QgIAEgHACQgGACgHAAQgQAAgLgIQgIgGgDgHQgFgJAAgJQAAgKAFgIQAEgIAIgGQAMgJAQAAQAHAAAFACQAGACAHAFIAAghQAAgKgDgEQgEgFgJAAIAAgCIAhgDIAABoQgBAKAEAFQAEAFAJAAIAAACIgfADIgBgJgAgWgEQgFAFgDAHQgDAIAAAIQABAHACAIQADAHAEAGQAIAKALAAQAFgBAFgCQAFgCADgEQADgFABgGQABgHAAgMQAAgNgBgGQgBgFgEgFQgCgDgFgCQgEgCgFAAQgLAAgIAJg");
	this.shape_884.setTransform(80.4,210.6);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgBABgEQABgBABgFIABgMIAAgWIgBgOQgBgDgCgCQgBgDgDgBIgHgBIAAgCIAdgDIAAAzIAAAHIABAJQABADADADQACACAIABIAAACgAgGgxQgDgCAAgEQAAgEADgCQADgCADAAQAEAAACACQADACABAEQgBAEgDACQgCACgEAAQgEAAgCgCg");
	this.shape_885.setTransform(72,210.4);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#FF0000").s().p("AAUA4QgIAEgGACQgHACgIAAQgPAAgMgIQgHgGgDgHQgEgJgBgJQABgKAEgIQAEgIAHgGQAMgJAQAAQAIAAAFACQAGACAHAFIAAghQAAgKgDgEQgEgFgJAAIAAgCIAggDIAABoQABAKADAFQAEAFAJAAIAAACIgfADIgBgJgAgWgEQgFAFgCAHQgDAIgBAIQAAAHADAIQADAHAFAGQAHAKAMAAQAEgBAFgCQAFgCADgEQADgFABgGQABgHAAgMQAAgNgBgGQgBgFgDgFQgDgDgFgCQgFgCgDAAQgMAAgIAJg");
	this.shape_886.setTransform(51,210.6);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#FF0000").s().p("AAHAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgPIgDgHQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDADQgDAEgBAFIgBAPIAAARIAAAHIABAJQABADACACQADADAIABIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDIgEgDIgHgBIAAgDIAcgDQACAFAAAFIAAACQANgMARAAQANABAIAFQAIAFAAAKIAAAmIABAJQABADADACQADADAHABIAAACg");
	this.shape_887.setTransform(39.7,212.9);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#FF0000").s().p("AAUA4QgIAEgGACQgHACgIAAQgPAAgMgIQgHgGgDgHQgEgJgBgJQABgKAEgIQAEgIAHgGQAMgJAQAAQAIAAAFACQAGACAHAFIAAghQAAgKgDgEQgEgFgJAAIAAgCIAggDIAABoQABAKADAFQAEAFAJAAIAAACIgfADIgBgJgAgWgEQgFAFgCAHQgDAIgBAIQAAAHADAIQADAHAFAGQAHAKAMAAQAEgBAFgCQAFgCADgEQADgFABgGQABgHAAgMQAAgNgBgGQgBgFgDgFQgDgDgFgCQgFgCgDAAQgMAAgIAJg");
	this.shape_888.setTransform(14.1,210.6);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#FF0000").s().p("AAHAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgPIgDgHQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDADQgDAEgBAFIgBAPIAAARIAAAHIABAJQABADACACQADADAIABIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDIgEgDIgHgBIAAgDIAcgDQACAFAAAFIAAACQANgMARAAQANABAIAFQAIAFAAAKIAAAmIABAJQABADADACQADADAHABIAAACg");
	this.shape_889.setTransform(2.8,212.9);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgEQACgBAAgFIAAgMIAAgWIAAgOQAAgDgDgCIgEgEIgHgBIAAgCIAdgDIAAAzIAAAHIABAJQABADADADQADACAHABIAAACgAgGgxQgCgCgBgEQABgEACgCQADgCADAAQAEAAADACQACACAAAEQAAAEgCACQgDACgEAAQgEAAgCgCg");
	this.shape_890.setTransform(-15.1,210.4);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#FF0000").s().p("AgMAvQgDgCgCgDIgBgLIAAg3IgLAAIAAgBQAHgCAGgFIAFgHIAEgJIACgDIADAAIAAAYIAaAAIAAADIgaAAIAAA1QABAJACAFQACACADABQADACAFgBQAEABAEgCIAGgHIACACQgEAFgGADQgGADgJAAQgMgBgFgEg");
	this.shape_891.setTransform(-38.9,211.8);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#FF0000").s().p("AAAAXIgGgbIAAgIQAAgEACgDQABgDADAAQADAAACADQACADAAAEIgBAIIgFAbg");
	this.shape_892.setTransform(-84.8,206.5);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#FF0000").s().p("AgjAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgWIgBgNQAAgEgCgDIgFgDIgHgBIAAgDIAbgDQACAIAAAHQAEgHAEgCQAIgGALAAQAHABAEACQADACAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDAAQgEAAgCgDIgDgDQgEgEgFABQgIAAgDAIQgEAHAAAPIAAAQIABAHIAAAJQABADACACQADADAHABIAAACg");
	this.shape_893.setTransform(-89.9,212.9);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#FF0000").s().p("AgjAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgWIgBgNQAAgEgCgDIgFgDIgHgBIAAgDIAbgDQACAIAAAHQAEgHAEgCQAIgGALAAQAHABAEACQADACAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDAAQgEAAgCgDIgDgDQgEgEgFABQgIAAgDAIQgEAHAAAPIAAAQIABAHIAAAJQABADACACQADADAHABIAAACg");
	this.shape_894.setTransform(-130.7,212.9);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAOAAQAJAAAIACQAHADAEAFQAIAHAAAMIg9AAIAAAGQAAAHADAIQADAIAEAFQAFAFAHADQAGADAHAAQAGAAAFgCQAFgCADgDQAEgDADgHIACABQgCALgKAFQgIAFgQAAQgMAAgIgDgAgNgfQgHAHgBAKIAsAAQgBgJgCgFQgDgEgFgDQgFgCgFAAQgIAAgHAGg");
	this.shape_895.setTransform(262.7,189);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#FF0000").s().p("AgMAwQgEgDgBgDIgBgLIAAg2IgKAAIAAgCQAGgBAGgGIAGgHIADgIIABgDIAFAAIAAAXIAZAAIAAAEIgZAAIAAA0QAAAKACADQACADAEABQACACAFAAQAEAAAEgCIAGgGIABABQgDAGgGACQgGACgJABQgMgBgFgDg");
	this.shape_896.setTransform(239.6,187.9);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#FF0000").s().p("AgMAwQgDgDgCgDIgBgLIAAg2IgKAAIAAgCQAGgBAGgGIAGgHIADgIIACgDIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QABAKACADQACADADABQADACAFAAQAEAAAEgCIAGgGIACABQgEAGgGACQgGACgJABQgMgBgFgDg");
	this.shape_897.setTransform(207.7,187.9);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#FF0000").s().p("AAUA4QgIAEgGACQgHACgIAAQgPAAgMgIQgHgFgDgJQgEgHgBgKQABgKAEgJQAEgHAHgGQAMgJAQABQAIAAAFACQAGABAHAGIAAgiQAAgKgDgFQgEgEgJAAIAAgCIAggEIAABqQABAKADAEQAEAEAJAAIAAACIgfAFIgBgKgAgWgEQgFAFgCAHQgDAHgBAJQAAAIADAHQADAHAFAGQAHAJAMAAQAEABAFgDQAFgCADgFQADgEABgGQABgHAAgMQAAgNgBgGQgBgFgDgEQgDgEgFgCQgFgCgDAAQgMAAgIAJg");
	this.shape_898.setTransform(193.7,186.7);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAGgFQACgDAFgCIALgDIAOgDIAGgDIAFgFIABgIQAAgKgEgFQgDgDgCgBIgHgBQgEAAgEABQgCACgCAEIgDAFQgCAEgFAAQgEAAgCgCQgDgCAAgDQAAgEAIgEIAKgCIALgBIANABQAHABAFADQAHADACAGIAAAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgKAFIgGAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAFAAAEgDQAEgCACgFQADgGAAgMIAAgOIgLAGg");
	this.shape_899.setTransform(172.6,189);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQADgBABgDQABgCABgFIABgMIAAgXIgBgMQgBgDgCgDQgBgDgDAAIgHgCIAAgCIAdgDIAAA0IAAAHIABAJQABACADACQACADAIABIAAACgAgGgyQgDgCAAgDQAAgDADgDQADgCADAAQAEAAACACQADADABADQgBADgDACQgCADgEAAQgEAAgCgDg");
	this.shape_900.setTransform(137.3,186.5);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAIACQAHADAFAFQAHAHAAAMIg8AAIgBAGQAAAHACAIQADAIAFAFQAFAFAGADQAHADAIAAQAFAAAFgCQAFgCAEgDQADgDADgHIACABQgDALgIAFQgKAFgPAAQgMAAgIgDgAgNgfQgGAHgCAKIAsAAQgBgJgCgFQgDgEgFgDQgFgCgFAAQgIAAgHAGg");
	this.shape_901.setTransform(122.3,189);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#FF0000").s().p("AAUA4QgIAEgHACQgFACgIAAQgRAAgKgIQgIgFgEgJQgDgHAAgKQAAgKADgJQAFgHAIgGQAMgJAQABQAGAAAGACQAGABAIAGIAAgiQAAgKgFgFQgDgEgJAAIAAgCIAhgEIAABqQAAAKADAEQAEAEAIAAIAAACIgeAFIgBgKgAgWgEQgFAFgDAHQgCAHAAAJQgBAIADAHQADAHAEAGQAIAJALAAQAFABAFgDQAEgCAEgFQADgEABgGQABgHABgMQgBgNgBgGQgBgFgEgEQgCgEgFgCQgFgCgEAAQgLAAgIAJg");
	this.shape_902.setTransform(49.6,186.7);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#FF0000").s().p("AAAAXIgGgcIAAgHQAAgEACgDQACgDACAAQADAAACADQACADAAAEIAAAHIgGAcg");
	this.shape_903.setTransform(-82.5,182.6);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgBACgDQABgCABgFIAAgMIAAgXIAAgMQgBgDgBgDQgCgDgDAAIgHgCIAAgCIAdgDIAAA0IABAHIAAAJQABACACACQADADAIABIAAACgAgGgyQgDgCABgDQgBgDADgDQADgCADAAQAEAAADACQADADAAADQAAADgDACQgDADgEAAQgDAAgDgDg");
	this.shape_904.setTransform(-271.9,186.5);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#FF0000").s().p("AgaAdQgMgKAAgRQAAgHADgIQAEgIAFgFQAHgHAJgDQAKgDAJAAQAPAAAJAGQAFADABAFQgBACgCADQgCABgDAAQgHAAgDgIIgDgGIgCgCQgEgCgEAAQgGAAgEADQgFACgDAEQgDAEgDAGQgEAKAAAIQABAIADAHQADAIAGAFQAIAJAMAAQAKAAAHgGQADgDADgHIADABQgFAKgHAEQgIAEgNAAQgUAAgMgLg");
	this.shape_905.setTransform(-284.6,189);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#FF0000").s().p("AgkBAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAguIgPAAIAAgDIAPAAIAAgXQAAgHACgFQADgFAGgEQAFgEAHgCQAIgCAJABQAIAAAFACQAFADAAADQAAABAAABQAAABAAAAQAAABgBAAQAAABgBAAQgCACgDAAIgFgBIgEgFQgDgEgCgBQgCgCgDAAIgIACIgEAEQgCACgBAFIgBALIAAAZIAUAAIAAADIgUAAIAAAvIAAAHIABAJQABADACACQACACAIABIAAACg");
	this.shape_906.setTransform(-296.3,186.5);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAGgFQACgDAFgCIALgDIAOgDIAGgDIAFgFIABgIQAAgKgEgFQgDgDgCgBIgHgBQgEAAgEABQgCACgCAEIgDAFQgCAEgFAAQgEAAgCgCQgDgCAAgDQAAgEAIgEIAKgCIAMgBIAMABQAHABAFADQAHADACAGIAAAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgKAFIgGAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAFAAAEgDQAEgCACgFQADgGAAgMIAAgOIgLAGg");
	this.shape_907.setTransform(257.7,165.2);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAGgFQACgDAFgCIALgDIAOgDIAGgDIAFgFIABgIQAAgKgEgFQgDgDgCgBIgHgBQgEAAgEABQgDACgBAEIgDAFQgCAEgFAAQgEAAgCgCQgDgCAAgDQAAgEAIgEIAKgCIALgBIANABQAHABAFADQAHADACAGIAAAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgKAFIgGAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAFAAAEgDQAEgCACgFQADgGAAgMIAAgOIgLAGg");
	this.shape_908.setTransform(201.9,165.2);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#FF0000").s().p("AghA+IAAgCIAKgBIAGgEQAEgDABgEIABgOIAAhcIgOAAQgQABgIACQgIADgFAHQgFAGgDALIgCAAIACgiICNAAIACAiIgDAAQgDgMgGgHQgGgGgLgDQgKgDgXABIAABcQAAAJABAFQABAEADADIAHAEIAKABIAAACg");
	this.shape_909.setTransform(189.5,162.8);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#FF0000").s().p("AgaAdQgMgKAAgRQAAgHAEgIQADgIAGgFQAGgHAJgDQAKgDAKAAQAPAAAIAGQAGADAAAFQAAACgCADQgDABgDAAQgHAAgDgIIgCgGIgDgCQgDgCgFAAQgGAAgFADQgEACgDAEQgDAEgCAGQgFAKAAAIQAAAIAEAHQADAIAGAFQAIAJAMAAQAKAAAHgGQADgDADgHIADABQgEAKgIAEQgHAEgOAAQgUAAgMgLg");
	this.shape_910.setTransform(114.4,165.2);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#FF0000").s().p("AgjA2QgEgCAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQACgBADAAIAHABIAEACIADAAQAGAAAEgJIADgHQADgEAAgDQgBgDgEgIIgVgtIgEgHIgEgIIgDgDQgCgCgEgBIAAgCIAoAAIAAACIgGACQgEACAAAEQAAAEAFAJIAQAmIAPggQAGgMAAgFQAAgEgDgDQgDgCgEgBIAAgCIAdAAIAAACIgGADQgCABgCACIgKATIgeA/QgFAMgDADQgGAGgIAAQgGAAgDgCg");
	this.shape_911.setTransform(54.4,166.8);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#FF0000").s().p("AgiBCIAAhqQAAgKgDgFQgEgEgJAAIAAgDIAggDIAAA9QAEgFAFgCQAHgFALAAQAPAAANAJQAOAKAAAUQAAATgOAMQgMAKgTAAQgJAAgHgCIgGgDIgEAAQgFAAgEAHgAgHgKQgEADgDAFQgEAHAAARQAAAKABAIQABAJACADQADAFAEACQAFADAFAAQANAAAJgLQAIgKAAgRQAAgIgDgIQgCgIgGgEQgDgFgGgCQgEgCgFAAQgGAAgFADg");
	this.shape_912.setTransform(44.1,162.8);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#FF0000").s().p("AAWAnIgWg8IgcA8IgDAAIgVg2IgDgHQgDgJgEgCIgHgDIAAgCIApAAIAAACQgMAAAAAIQAAAEAFAMIAMAhIASgpQACgEAAgEQAAgHgLgBIAAgCIAoAAIAAACIgIACQgDACAAAEQAAADACAGIAOAoIAQgjQADgIAAgDQAAgGgEgCIgHgDIAAgCIAfAAIAAACQgFAAgDADIgFAEIgFAKIgCAFIgZA1g");
	this.shape_913.setTransform(15.9,165.2);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#FF0000").s().p("AgkA2QgDgCAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQACgBAEAAIAFABIAFACIACAAQAHAAAEgJIADgHQACgEABgDQAAgDgFgIIgVgtIgDgHIgFgIIgDgDQgDgCgEgBIAAgCIAqAAIAAACIgHACQgEACAAAEQAAAEAFAJIAQAmIAPggQAGgMAAgFQAAgEgDgDQgDgCgFgBIAAgCIAeAAIAAACIgGADQgDABgCACIgJATIgdA/QgGAMgDADQgGAGgJAAQgFAAgEgCg");
	this.shape_914.setTransform(-33.6,166.8);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgDQACgCAAgFIAAgMIAAhHIAAgNQAAgEgDgCQgCgDgCgBIgHgBIAAgCIAdgDIAABlIAAAHIABAJQABADADACQADACAHABIAAACg");
	this.shape_915.setTransform(-40.8,162.6);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOANgLQAPgOAUAAQAWAAAPAOQAMALAAAOQAAAPgMALQgOAOgXAAQgVAAgPgOgAgVgbQgIALAAAQQAAAPAIALQAJAMANAAQAGAAAEgCQAGgDAEgFQAEgFADgIQACgIAAgHQAAgGgCgIQgDgIgFgFQgIgKgMAAQgMAAgJAKg");
	this.shape_916.setTransform(-105.5,165.2);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#FF0000").s().p("AAlAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIAAgNIAAgQIAAgPQgBgEgCgEQgFgHgMAAQgNAAgGAIQgFAHAAAPIAAARIAAAHIABAJQABADACACQADACAIABIAAACIgtAAIAAgCQAGAAADgBIAEgFIACgGIAAgNIAAgQIAAgPQgBgFgDgDQgCgEgEgCQgEgCgFABQgGAAgGACQgFACgDAFQgDADgBAGQgBAFAAAJIAAAPIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgOQgBgDgCgCIgEgFIgHgBIAAgBIAdgDIACAMQAHgGAIgDQAIgDAJAAQAKAAAGAEQADACAFAHQAIgHAJgDQAIgDAJAAQAMAAAIAFQAIAHAAAJIAAAeIAAAHIABAJIADAFQADACAIABIAAACg");
	this.shape_917.setTransform(-162.1,165.1);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#FF0000").s().p("AAWAnIgWg8IgcA8IgDAAIgVg2IgDgHQgDgJgEgCIgHgDIAAgCIApAAIAAACQgMAAAAAIQAAAEAFAMIAMAhIASgpQACgEAAgEQAAgHgLgBIAAgCIAoAAIAAACIgIACQgDACAAAEQAAADACAGIAOAoIAQgjQADgIAAgDQAAgGgEgCIgHgDIAAgCIAfAAIAAACQgFAAgDADIgFAEIgFAKIgCAFIgZA1g");
	this.shape_918.setTransform(-204.7,165.2);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#FF0000").s().p("AgQAlQgJgEgGgHQgJgLAAgPQAAgTARgMQAMgIAOAAQAJAAAHACQAIADAEAFQAIAHAAAMIg9AAIAAAGQAAAHADAIQADAIAEAFQAFAFAHADQAGADAHAAQAGAAAFgCQAFgCADgDQAEgDADgHIACABQgCALgKAFQgIAFgQAAQgMAAgJgDgAgNgfQgHAHgBAKIAsAAQgBgJgDgFQgCgEgFgDQgFgCgFAAQgIAAgHAGg");
	this.shape_919.setTransform(-260.2,165.2);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgDQACgCAAgFIAAgMIAAhHIAAgNQgBgEgCgCQgCgDgCgBIgHgBIAAgCIAdgDIAABlIAAAHIABAJQABADADACQADACAHABIAAACg");
	this.shape_920.setTransform(-267.6,162.6);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgBACgDQABgCABgFIAAgMIAAgXIAAgMQgBgDgBgDQgCgDgDAAIgHgCIAAgCIAdgDIAAA0IABAHIAAAJQABACACACQADADAIABIAAACgAgGgyQgDgCABgDQgBgDADgDQADgCADAAQAEAAADACQADADAAADQAAADgDACQgDADgEAAQgDAAgDgDg");
	this.shape_921.setTransform(-272.8,162.7);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#FF0000").s().p("AAXA+IAAgCIALgBIAGgEQAEgDABgEQABgFAAgJIAAhRIg1BtIgCAAIg2hsIAABQIABAOQABAEADADIAHAEIAKABIAAACIgwAAIAAgCIAKgBIAGgEQADgDABgEIABgOIAAhCIAAgIQAAgIgCgCQgDgFgEgCQgFgCgHAAIAAgDIAtAAIAtBhIAuhhIAsAAIAAADIgKABQgEABgDADIgDAEIgBAGIgCAMIAABCQAAAJACAFQABAFADACQAGAFALAAIAAACg");
	this.shape_922.setTransform(-285,162.8);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOAMgLQAQgOAUAAQAVAAAPAOQANALAAAOQAAAPgMALQgPAOgWAAQgWAAgOgOgAgUgbQgJALAAAQQAAAPAIALQAJAMAMAAQAHAAAFgCQAFgDAEgFQAEgFACgIQADgIAAgHQAAgGgDgIQgDgIgEgFQgJgKgLAAQgLAAgJAKg");
	this.shape_923.setTransform(28.2,117.4);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#FF0000").s().p("Ag5A/IAAgCIAKgCIAGgEQADgDACgFIAAgNIAAhDIAAgMIgDgHQgDgEgEgBQgEgCgGgBIgBAAIAAgBIA+AAQAQgBAIACQAIACAHAEQAPAKAAAQQAAARgPAIQgJADgKABIgSAAIgTAAIAAAhQAAAJABAEQABAFADADIAHAEIAIACIAAACgAgMgBIAKAAQAJAAAGgCQAGgBAEgDQAKgJAAgNQAAgIgDgGQgDgGgFgEQgHgFgIgBIgKAAIgJAAg");
	this.shape_924.setTransform(9.2,115.1);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#FF0000").s().p("AghA/IAAgCIAKgCIAGgEQAEgDABgFIABgNIAAhdIgOAAQgQABgIAEQgIACgFAHQgFAHgDALIgCAAIACgiICNAAIACAiIgDAAQgDgNgGgGQgGgIgLgCQgKgCgXgBIAABdQAAAJABAEQABAFADADIAHAEIAKACIAAACg");
	this.shape_925.setTransform(-37.1,115.1);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#FF0000").s().p("AAXA/IAAgCIAKgCIAHgEQAEgDABgFQABgEAAgJIAAhRIg1BuIgCAAIg2hsIAABPIABANQABAFADADIAHAEIAKACIAAACIgwAAIAAgCIAKgCIAGgEQADgDABgFIABgNIAAhDIAAgIQAAgGgCgEQgDgEgEgCQgFgCgHgBIAAgBIAtAAIAtBhIAuhhIAsAAIAAABIgKACQgEABgDADIgDAEIgCAGIgBALIAABDQAAAJACAFQABAEADADQAGAFALABIAAACg");
	this.shape_926.setTransform(-87.1,115.1);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#FF0000").s().p("AgjAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgVIgBgNQAAgEgCgCIgFgEIgHgCIAAgCIAbgCQACAHAAAGQAEgGAEgDQAIgEALAAQAHAAAEACQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDgBQgEABgCgDIgDgDQgEgDgFgBQgIABgDAHQgEAJAAAOIAAAQIABAHIAAAJQABADACACQADADAHAAIAAACg");
	this.shape_927.setTransform(220.5,207.5);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#FF0000").s().p("AgMAwQgEgDgBgDIgBgLIAAg2IgKAAIAAgCQAGgBAGgGIAGgHIADgJIABgCIAFAAIAAAXIAZAAIAAAEIgZAAIAAA0QgBAKADADQACADAEABQACACAFAAQAEAAADgCIAHgGIABABQgDAGgGACQgGADgJgBQgMAAgFgDg");
	this.shape_928.setTransform(214.3,206.5);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#FF0000").s().p("AAHAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgSIgBgOIgDgIQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDADgBAFIgBAQIAAAQIAAAHIABAJQABADACACQADADAIAAIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgNQgBgEgCgCIgEgEIgHgCIAAgCIAcgCIACAKIAAABQANgLARAAQANgBAIAGQAIAFAAAKIAAAmIABAJQABADADACQADADAHAAIAAACg");
	this.shape_929.setTransform(205.5,207.5);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#FF0000").s().p("AgMAwQgEgDgBgDIgBgLIAAg2IgKAAIAAgCQAGgBAGgGIAGgHIADgJIABgCIAFAAIAAAXIAZAAIAAAEIgZAAIAAA0QgBAKADADQACADAEABQACACAFAAQAEAAADgCIAHgGIABABQgDAGgGACQgGADgJgBQgMAAgFgDg");
	this.shape_930.setTransform(151.3,206.5);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#FF0000").s().p("AAHAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgSIgBgOIgDgIQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDADgBAFIgBAQIAAAQIAAAHIABAJQABADACACQADADAIAAIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgNQgBgEgCgCIgEgEIgHgCIAAgCIAcgCIACAKIAAABQANgLARAAQANgBAIAGQAIAFAAAKIAAAmIABAJQABADADACQADADAHAAIAAACg");
	this.shape_931.setTransform(120.4,207.5);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#FF0000").s().p("AAUA4QgIAFgGABQgGACgJAAQgPAAgMgIQgHgFgDgJQgFgIAAgJQAAgKAFgJQAEgHAHgGQANgJAPABQAIAAAFACQAGABAHAGIAAgiQAAgKgDgFQgEgEgJAAIAAgCIAggEIAABqQABAKADAEQAEAEAJAAIAAACIgfAFIgBgKgAgWgEQgFAEgCAIQgEAIAAAHQAAAJADAHQADAHAEAGQAIAJAMAAQAEAAAFgCQAFgDADgEQADgEABgHQACgGgBgMQABgNgCgGQgBgFgDgEQgDgEgFgCQgEgCgEAAQgMAAgIAJg");
	this.shape_932.setTransform(104,205.2);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#FF0000").s().p("AAHAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgSIgBgOIgDgIQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDADgBAFIgBAQIAAAQIAAAHIABAJQABADACACQADADAIAAIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgNQgBgEgCgCQgCgDgCgBIgHgCIAAgCIAcgCIACAKIAAABQANgLARAAQANgBAIAGQAIAFAAAKIAAAmIABAJQABADADACQADADAHAAIAAACg");
	this.shape_933.setTransform(92.7,207.5);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#FF0000").s().p("AAlAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIAAgNIAAgQIAAgPQgBgEgCgEQgFgHgMgBQgNAAgGAJQgFAHAAAQIAAAQIAAAHIABAJQABADACACQADADAIAAIAAACIgtAAIAAgCQAGAAADgBIAEgFIACgGIAAgNIAAgPIAAgQQgBgFgDgDQgCgEgEgCQgEgCgFAAQgGABgGACQgFACgDAFQgDADgBAGQgBAFAAAJIAAAPIAAAHIABAJQABADACACQADADAIAAIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgOQgBgDgCgCIgEgFIgHgBIAAgCIAdgCIACAMQAHgGAIgEQAIgCAJAAQAKAAAGADQADADAFAHQAIgHAJgEQAIgCAJAAQAMAAAIAFQAIAHAAAJIAAAeIAAAHIABAJIADAFQADADAIAAIAAACg");
	this.shape_934.setTransform(49.2,207.5);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#FF0000").s().p("AgMAwQgDgDgCgDIgBgLIAAg2IgLAAIAAgCQAHgBAGgGIAFgHIAFgJIABgCIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QABAKACADQACADADABQAEACAEAAQAEAAAEgCIAGgGIACABQgEAGgGACQgGADgJgBQgMAAgFgDg");
	this.shape_935.setTransform(-5.9,206.5);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#FF0000").s().p("AgkBAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAguIgPAAIAAgDIAPAAIAAgXQAAgHACgFQADgFAGgEQAFgEAHgCQAIgCAJAAQAIABAFACQAFADAAADQAAABAAABQAAABAAAAQAAABgBAAQAAABgBAAQgCACgDAAIgFgBIgEgFQgDgEgCgBQgCgCgDAAIgIACIgEADQgCADgBAFIgBALIAAAZIAUAAIAAADIgUAAIAAAvIAAAHIABAJQABADACACQACADAIAAIAAACg");
	this.shape_936.setTransform(-16.5,205);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#FF0000").s().p("AgMAwQgDgDgCgDIgBgLIAAg2IgLAAIAAgCQAHgBAGgGIAFgHIAEgJIACgCIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QABAKACADQACADADABQADACAFAAQAEAAAEgCIAGgGIACABQgEAGgGACQgGADgJgBQgMAAgFgDg");
	this.shape_937.setTransform(-39.3,206.5);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#FF0000").s().p("AgjAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgVIgBgNQAAgEgCgCIgFgEIgHgCIAAgCIAbgCQACAHAAAGQAEgGAEgDQAIgEALAAQAHAAAEACQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDgBQgEABgCgDIgDgDQgEgDgFgBQgIABgDAHQgEAJAAAOIAAAQIABAHIAAAJQABADACACQADADAHAAIAAACg");
	this.shape_938.setTransform(-46.2,207.5);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#FF0000").s().p("AgNAwQgDgDAAgDIgBgLIAAg2IgLAAIAAgCQAGgBAGgGIAGgHIADgJIABgCIAFAAIAAAXIAZAAIAAAEIgZAAIAAA0QAAAKACADQACADAEABQADACADAAQAFAAADgCIAHgGIABABQgDAGgGACQgGADgKgBQgLAAgGgDg");
	this.shape_939.setTransform(-100.9,206.5);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#FF0000").s().p("AgMAwQgEgDgBgDIgBgLIAAg2IgKAAIAAgCQAGgBAGgGIAGgHIADgJIABgCIAFAAIAAAXIAZAAIAAAEIgZAAIAAA0QAAAKACADQACADAEABQACACAFAAQAEAAAEgCIAGgGIABABQgDAGgGACQgGADgJgBQgMAAgFgDg");
	this.shape_940.setTransform(-111.9,206.5);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#FF0000").s().p("AAlAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIAAgNIAAgQIAAgPQgBgEgCgEQgFgHgMgBQgNAAgGAJQgFAHAAAQIAAAQIAAAHIABAJQABADACACQADADAIAAIAAACIgtAAIAAgCQAGAAADgBIAEgFIACgGIAAgNIAAgPIAAgQQgBgFgDgDQgCgEgEgCQgEgCgFAAQgGABgGACQgFACgDAFQgDADgBAGQgBAFAAAJIAAAPIAAAHIABAJQABADACACQADADAIAAIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgOQgBgDgCgCIgEgFIgHgBIAAgCIAdgCIACAMQAHgGAIgEQAIgCAJAAQAKAAAGADQADADAFAHQAIgHAJgEQAIgCAJAAQAMAAAIAFQAIAHAAAJIAAAeIAAAHIABAJIADAFQADADAIAAIAAACg");
	this.shape_941.setTransform(-155.5,207.5);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#FF0000").s().p("AAHAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgSIgBgOIgDgIQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDADgBAFIgBAQIAAAQIAAAHIABAJQABADACACQADADAIAAIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgNQgBgEgCgCQgCgDgCgBIgHgCIAAgCIAcgCIACAKIAAABQANgLARAAQANgBAIAGQAIAFAAAKIAAAmIABAJQABADADACQADADAHAAIAAACg");
	this.shape_942.setTransform(-178.8,207.5);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#FF0000").s().p("AgjAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgVIgBgNQAAgEgCgCIgFgEIgHgCIAAgCIAbgCQACAHAAAGQAEgGAEgDQAIgEALAAQAHAAAEACQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDgBQgEABgCgDIgDgDQgEgDgFgBQgIABgDAHQgEAJAAAOIAAAQIABAHIAAAJQABADACACQADADAHAAIAAACg");
	this.shape_943.setTransform(-193.3,207.5);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#FF0000").s().p("AgNAwQgCgDgBgDIgCgLIAAg2IgLAAIAAgCQAHgBAGgGIAFgHIAFgJIABgCIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QABAKACADQACADADABQADACAEAAQAFAAAEgCIAGgGIACABQgDAGgHACQgGADgKgBQgLAAgGgDg");
	this.shape_944.setTransform(-270,206.5);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#FF0000").s().p("AgNAwQgDgDAAgDIgBgLIAAg2IgLAAIAAgCQAGgBAGgGIAGgHIADgJIABgCIAFAAIAAAXIAZAAIAAAEIgZAAIAAA0QAAAKACADQACADAEABQADACADAAQAFAAADgCIAHgGIABABQgDAGgGACQgGADgKgBQgLAAgGgDg");
	this.shape_945.setTransform(-280.9,206.5);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#FF0000").s().p("AgNAwQgCgDgBgDIgCgLIAAg2IgLAAIAAgCQAHgBAGgGIAFgHIAFgJIABgCIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QAAAKADADQACADADABQADACAEAAQAFAAAEgCIAGgGIACABQgDAGgHACQgGADgKgBQgLAAgGgDg");
	this.shape_946.setTransform(-306.9,206.5);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#FF0000").s().p("AAlAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIAAgLIAAgRIAAgPQgBgFgCgDQgFgIgMABQgNgBgGAJQgFAHAAAPIAAARIAAAHIABAJQABADACACQADADAIABIAAACIgtAAIAAgCQAGgBADgCIAEgEIACgHIAAgLIAAgRIAAgPQgBgFgDgDQgCgDgEgCQgEgCgFAAQgGAAgGACQgFADgDAEQgDAEgBAFQgBAFAAAIIAAAQIAAAHIABAJQABADACACQADADAIABIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDIgEgDIgHgBIAAgDIAdgDIACANQAHgGAIgEQAIgDAJAAQAKAAAGAFQADADAFAGQAIgHAJgEQAIgDAJAAQAMAAAIAHQAIAFAAAKIAAAeIAAAHIABAJIADAFQADADAIABIAAACg");
	this.shape_947.setTransform(242.4,183.6);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgMAAgGgEQgHgFAAgJQAAgHAFgFQAEgDADgCIANgDIANgDIAHgDIAEgFIABgIQAAgKgEgFQgDgDgCgBIgGgBQgFAAgDABQgDACgDAEIgCAFQgCAEgGAAQgDAAgDgCQgCgCAAgDQAAgEAHgEIAKgCIAMgBIANABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAGAAIAGgBIAEgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAGAAAEgDQAEgCACgFQAEgGAAgMIAAgOIgMAGg");
	this.shape_948.setTransform(170.8,183.7);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#FF0000").s().p("AgNAvQgCgCgBgDIgBgLIAAg3IgMAAIAAgBQAHgCAGgFIAFgHIAFgJIABgDIADAAIAAAYIAaAAIAAADIgaAAIAAA1QAAAJADAFQACACADABQAEACADgBQAFABADgCIAHgHIABACQgCAFgHADQgGADgKAAQgLgBgGgEg");
	this.shape_949.setTransform(131.2,182.6);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOANgLQAPgOAUAAQAWAAAOAOQANALAAAOQAAAPgMALQgPAOgWAAQgVAAgPgOgAgUgbQgJALAAAQQAAAPAIALQAKAMAMAAQAFAAAFgCQAGgDAEgFQAEgFACgIQADgIAAgHQAAgGgDgIQgCgIgFgFQgJgKgLAAQgMAAgIAKg");
	this.shape_950.setTransform(117,183.7);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgDQABgCABgFIAAgMIAAhHIAAgNQAAgEgCgCIgFgEIgHgBIAAgCIAdgDIAABlIABAHIAAAJQABADACACQAEACAHABIAAACg");
	this.shape_951.setTransform(101.2,181.1);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAFgFQADgDAEgCIAMgDIAOgDIAHgDIAEgFIABgIQAAgKgEgFQgCgDgDgBIgHgBQgEAAgDABQgEACgCAEIgCAFQgCAEgFAAQgEAAgDgCQgCgCAAgDQAAgEAIgEIAKgCIALgBIANABQAHABAFADQAGADADAGIAAAJIAAAhIABALQACAHAGAAIAGgBIAEgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgKAFIgGAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAFAAAFgDQAEgCACgFQAEgGgBgMIAAgOIgLAGg");
	this.shape_952.setTransform(94.5,183.7);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgBABgEQABgBABgFIABgMIAAgWIgBgOQAAgDgDgCQgBgDgDgBIgHgBIAAgCIAdgDIAAAzIABAHIAAAJQABADADADQACACAIABIAAACgAgGgxQgCgCAAgEQAAgEACgCQADgCADAAQAEAAACACQAEACAAAEQAAAEgEACQgCACgEAAQgDAAgDgCg");
	this.shape_953.setTransform(73.9,181.2);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgMAAgGgEQgHgFAAgJQAAgHAFgFQAEgDADgCIANgDIANgDIAHgDIAEgFIABgIQAAgKgEgFQgDgDgCgBIgGgBQgFAAgDABQgDACgDAEIgCAFQgCAEgGAAQgDAAgDgCQgCgCAAgDQAAgEAHgEIAKgCIAMgBIANABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAGAAIAGgBIAEgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAGAAAEgDQAEgCACgFQAEgGAAgMIAAgOIgMAGg");
	this.shape_954.setTransform(45.2,183.7);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#FF0000").s().p("AgSA+QgVgGgMgQQgMgQAAgWQAAgPAHgOQAHgOANgKQAJgGANgEQAOgDAMAAQANAAAOADIAIADIAFABQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABgBIACgDIACAAIACApIgDAAIgCgEIgGgNQgEgIgHgHQgGgEgHgDQgGgCgIABQgMAAgHAEQgIAEgHAHQgGAHgEAKQgGANAAAQQAAAPAEALQAEALAIAIQAOAPAXAAQAMAAAKgEQAJgEAFgGQAGgHADgNIADAAQgCAOgHAJQgHAIgMAFQgMADgPAAQgOABgNgEg");
	this.shape_955.setTransform(21.9,181.3);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#FF0000").s().p("AAUA4QgIAEgHACQgGACgIAAQgQAAgLgIQgHgGgEgHQgDgJAAgJQAAgKADgIQAFgIAHgGQAMgJARAAQAGAAAGACQAGACAIAFIAAghQgBgKgEgEQgDgFgJAAIAAgCIAggDIAABoQAAAKAEAFQAEAFAIAAIAAACIgeADIgBgJgAgWgEQgFAEgDAIQgCAIAAAIQAAAHACAIQADAHAFAGQAHAKAMAAQAEgBAFgCQAEgCAEgEQADgFABgGQACgHAAgMQAAgNgCgGQgBgFgDgFQgDgDgFgCQgFgCgEAAQgLAAgIAJg");
	this.shape_956.setTransform(-1.4,181.3);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#FF0000").s().p("AAHAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgPIgDgHQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDADQgDAEgBAFIgBAPIAAARIAAAHIABAJQABADACACQADADAIABIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDIgEgDIgHgBIAAgDIAcgDIACAKIAAACQANgMARAAQANABAIAFQAIAFAAAKIAAAmIABAJQABADADACQADADAHABIAAACg");
	this.shape_957.setTransform(-12.8,183.6);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#FF0000").s().p("AAUA4QgIAEgHACQgGACgIAAQgQAAgLgIQgHgGgEgHQgDgJAAgJQAAgKADgIQAFgIAHgGQAMgJARAAQAGAAAGACQAGACAIAFIAAghQgBgKgEgEQgDgFgJAAIAAgCIAggDIAABoQAAAKAEAFQAEAFAIAAIAAACIgeADIgBgJgAgWgEQgFAEgDAIQgCAIAAAIQAAAHACAIQADAHAFAGQAHAKAMAAQAEgBAFgCQAEgCAEgEQADgFABgGQACgHAAgMQAAgNgCgGQgBgFgDgFQgDgDgFgCQgFgCgEAAQgLAAgIAJg");
	this.shape_958.setTransform(-79.3,181.3);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#FF0000").s().p("AAHAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgPIgDgHQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDADQgDAEgBAFIgBAPIAAARIAAAHIABAJQABADACACQADADAIABIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDIgEgDIgHgBIAAgDIAcgDIACAKIAAACQANgMARAAQANABAIAFQAIAFAAAKIAAAmIABAJQABADADACQADADAHABIAAACg");
	this.shape_959.setTransform(-90.6,183.6);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#FF0000").s().p("AgrA1QgJgGgBgMIgBgOIAAg3IgBgOQgBgEgEgEIgGgDIgKgCIAAgCIBDAAIAAACIgKACQgEABgCACQgEAEgBAEQgBAFAAALIAAAzQAAANABAFQABAGADAFQAFAGAIAEQAHADAKAAQALAAAKgDQAKgDAHgFQAEgDACgEQACgDAAgHIABgRIAAgyIgBgOQgCgEgDgEIgGgDIgKgCIAAgCIAwAAIAAACIgKACIgGADQgEAEgBAEIgBAOIAAA4QAAAOgCAFQgCAHgHAEQgPAMgdAAQgdAAgOgLg");
	this.shape_960.setTransform(-104.4,181.5);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#FF0000").s().p("AgNAvQgDgCAAgDIgBgLIAAg3IgLAAIAAgBQAGgCAGgFIAGgHIADgJIABgDIAFAAIAAAYIAZAAIAAADIgZAAIAAA1QAAAJACAFQACACAEABQADACADgBQAFABADgCIAHgHIABACQgDAFgGADQgGADgKAAQgLgBgGgEg");
	this.shape_961.setTransform(-141,182.6);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#FF0000").s().p("AgNAvQgDgCAAgDIgBgLIAAg3IgLAAIAAgBQAGgCAGgFIAGgHIADgJIABgDIAFAAIAAAYIAZAAIAAADIgZAAIAAA1QAAAJACAFQACACAEABQADACADgBQAFABADgCIAHgHIABACQgDAFgGADQgGADgKAAQgLgBgGgEg");
	this.shape_962.setTransform(-163,182.6);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgDQACgCAAgFIAAgMIAAhHIAAgNQAAgEgDgCIgEgEIgHgBIAAgCIAdgDIAABlIAAAHIABAJQABADADACQADACAHABIAAACg");
	this.shape_963.setTransform(-190.6,181.1);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#FF0000").s().p("AgkBBIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgvIgPAAIAAgEIAPAAIAAgVQAAgIACgGQADgEAGgEQAFgDAHgCQAIgCAJAAQAIAAAFACQAFADAAAEQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAIgFgBIgEgEQgDgFgCgBQgCgCgDABIgIABIgEADQgCADgBAEIgBANIAAAXIAUAAIAAAEIgUAAIAAAvIAAAHIABAJQABADACACQACADAIABIAAACg");
	this.shape_964.setTransform(-209.6,181.1);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#FF0000").s().p("AgNAvQgCgCgBgDIgBgLIAAg3IgMAAIAAgBQAHgCAGgFIAFgHIAFgJIAAgDIAEAAIAAAYIAaAAIAAADIgaAAIAAA1QAAAJADAFQACACADABQAEACADgBQAFABADgCIAHgHIABACQgCAFgHADQgGADgKAAQgLgBgGgEg");
	this.shape_965.setTransform(-232.4,182.6);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#FF0000").s().p("AAHAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgPIgDgHQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDADQgDAEgBAFIgBAPIAAARIAAAHIABAJQABADACACQADADAIABIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDIgEgDIgHgBIAAgDIAcgDIACAKIAAACQANgMARAAQANABAIAFQAIAFAAAKIAAAmIABAJQABADADACQADADAHABIAAACg");
	this.shape_966.setTransform(-246.6,183.6);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAGgFQACgDAFgCIALgDIAOgDIAGgDIAFgFIABgIQAAgKgFgFQgBgDgDgBIgHgBQgEAAgEABQgCACgCAEIgDAFQgCAEgFAAQgEAAgCgCQgDgCAAgDQAAgEAHgEIALgCIAMgBIAMABQAHABAFADQAHADACAGIAAAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAFAAAFgDQADgCACgFQADgGAAgMIAAgOIgLAGg");
	this.shape_967.setTransform(-256.3,183.7);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#FF0000").s().p("AAlAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIAAgLIAAgRIAAgPQgBgFgCgDQgFgIgMABQgNgBgGAJQgFAHAAAPIAAARIAAAHIABAJQABADACACQADADAIABIAAACIgtAAIAAgCQAGgBADgCIAEgEIACgHIAAgLIAAgRIAAgPQgBgFgDgDQgCgDgEgCQgEgCgFAAQgGAAgGACQgFADgDAEQgDAEgBAFQgBAFAAAIIAAAQIAAAHIABAJQABADACACQADADAIABIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDIgEgDIgHgBIAAgDIAdgDIACANQAHgGAIgEQAIgDAJAAQAKAAAGAFQADADAFAGQAIgHAJgEQAIgDAJAAQAMAAAIAHQAIAFAAAKIAAAeIAAAHIABAJIADAFQADADAIABIAAACg");
	this.shape_968.setTransform(-269.9,183.6);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#FF0000").s().p("AAWAcQgNAMgQAAQgOAAgHgGQgIgFAAgKIAAgfIAAgHIgBgJQgBgDgDgCQgCgCgJgCIAAgCIAfAAIAAAuIABAOQABAFACADQADADAEACQAEACAGAAQAEAAAFgCQAGgCADgEQACgDABgFIABgPIAAgRIAAgHIgBgJQAAgDgDgCQgDgCgHgCIAAgCIAeAAIAAAxIABANQABAEABACQACADADABIAHACIAAACIgdADQgCgGAAgGg");
	this.shape_969.setTransform(-284.1,183.7);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#FF0000").s().p("AgMAvQgEgCgBgDIgBgLIAAg3IgKAAIAAgBQAGgCAGgFIAGgHIADgJIABgDIAFAAIAAAYIAZAAIAAADIgZAAIAAA1QAAAJACAFQACACAEABQACACAFgBQAEABAEgCIAGgHIABACQgDAGgGACQgGADgJAAQgMgBgFgEg");
	this.shape_970.setTransform(269.7,158.7);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgEQACgBAAgFIAAgMIAAgWIAAgOQAAgDgCgCIgFgEIgHgBIAAgCIAdgDIAAAzIABAHIAAAJQABADACADQAEACAHABIAAACgAgGgxQgDgCABgEQgBgEADgCQADgCADAAQAEAAADACQACACAAAEQAAAEgCACQgDACgEAAQgDAAgDgCg");
	this.shape_971.setTransform(248.8,157.3);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#FF0000").s().p("AgkBBIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgvIgPAAIAAgEIAPAAIAAgVQAAgIACgGQADgEAGgEQAFgDAHgCQAIgCAJAAQAIAAAFACQAFADAAAEQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQgCACgDAAIgFgBIgEgEQgDgFgCgBQgCgCgDABIgIABIgEADQgCADgBAEIgBANIAAAXIAUAAIAAAEIgUAAIAAAvIAAAHIABAJQABADACACQACADAIABIAAACg");
	this.shape_972.setTransform(244.2,157.3);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#FF0000").s().p("AgNAvQgCgCgBgDIgBgLIAAg3IgMAAIAAgBQAHgCAGgFIAFgHIAFgJIABgDIADAAIAAAYIAaAAIAAADIgaAAIAAA1QAAAJADAFQACACADABQAEACADgBQAFABADgCIAHgHIACACQgDAGgHACQgGADgKAAQgLgBgGgEg");
	this.shape_973.setTransform(211.6,158.7);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgBABgEQABgBABgFIABgMIAAgWIgBgOQgBgDgBgCIgFgEIgHgBIAAgCIAdgDIAAAzIABAHIAAAJQABADACADQADACAIABIAAACgAgGgxQgCgCAAgEQAAgEACgCQADgCADAAQAEAAACACQAEACAAAEQAAAEgEACQgCACgEAAQgDAAgDgCg");
	this.shape_974.setTransform(192.8,157.3);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#FF0000").s().p("AAHAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgPIgDgHQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDADQgDAEgBAFIgBAQIAAAQIAAAHIABAJQABADACACQADADAIABIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDIgEgDIgHgBIAAgDIAcgDQACAFAAAFIAAACQANgMARAAQANABAIAFQAIAFAAAKIAAAmIABAJQABADADACQADADAHABIAAACg");
	this.shape_975.setTransform(174.2,159.8);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#FF0000").s().p("AAlAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIAAgLIAAgRIAAgPQgBgFgCgDQgFgIgMABQgNgBgGAJQgFAHAAAQIAAAQIAAAHIABAJQABADACACQADADAIABIAAACIgtAAIAAgCQAGgBADgCIAEgEIACgHIAAgLIAAgQIAAgQQgBgFgDgDQgCgDgEgCQgEgCgFAAQgGAAgGACQgFADgDAEQgDADgBAGQgBAFAAAIIAAAQIAAAHIABAJQABADACACQADADAIABIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDIgEgDIgHgBIAAgDIAdgDIACANQAHgGAIgEQAIgDAJAAQAKAAAGAFQADADAFAGQAIgHAJgEQAIgDAJAAQAMAAAIAHQAIAFAAAKIAAAeIAAAHIABAJIADAFQADADAIABIAAACg");
	this.shape_976.setTransform(150.9,159.8);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#FF0000").s().p("AAXAcQgNAMgSAAQgNAAgIgGQgHgFgBgKIAAgfIAAgHIgBgJQAAgDgCgCQgDgCgIgCIAAgCIAfAAIAAAuIAAAOQABAFACADQADADADACQAFACAFAAQAFAAAFgCQAFgCADgEQAEgDABgFIABgPIAAgRIgBgHIAAgJIgEgFQgCgCgJgCIAAgCIAfAAIAAAxIABANQAAAEACACQACADACABIAHACIAAACIgcADQgCgGABgGg");
	this.shape_977.setTransform(136.7,159.9);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#FF0000").s().p("AAHAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgPIgDgHQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDADQgDAEgBAFIgBAQIAAAQIAAAHIABAJQABADACACQADADAIABIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDIgEgDIgHgBIAAgDIAcgDIACAKIAAACQANgMARAAQANABAIAFQAIAFAAAKIAAAmIABAJQABADADACQADADAHABIAAACg");
	this.shape_978.setTransform(109.1,159.8);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAIACQAHADAEAFQAIAHAAAMIg9AAIAAAGQAAAHACAIQADAIAFAFQAFAFAGADQAGADAJAAQAFAAAFgCQAFgCADgDQAEgDADgHIACABQgDALgIAFQgKAFgPAAQgMAAgIgDgAgNgfQgGAHgCAKIAsAAQAAgJgDgFQgEgEgEgDQgFgCgFAAQgIAAgHAGg");
	this.shape_979.setTransform(98.6,159.8);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#FF0000").s().p("AgkBBIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgvIgPAAIAAgEIAPAAIAAgVQAAgIACgGQADgEAGgEQAFgDAHgCQAIgCAJAAQAIAAAFACQAFADAAAEQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQgCACgDAAIgFgBIgEgEQgDgFgCgBQgCgCgDABIgIABIgEADQgCADgBAEIgBANIAAAXIAUAAIAAAEIgUAAIAAAvIAAAHIABAJQABADACACQACADAIABIAAACg");
	this.shape_980.setTransform(72.2,157.3);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAIACQAHADAFAFQAHAHAAAMIg8AAIgBAGQAAAHACAIQADAIAFAFQAFAFAGADQAGADAJAAQAFAAAFgCQAFgCAEgDQADgDADgHIACABQgDALgIAFQgKAFgPAAQgMAAgIgDgAgNgfQgGAHgCAKIAsAAQgBgJgCgFQgDgEgFgDQgFgCgFAAQgIAAgHAGg");
	this.shape_981.setTransform(58,159.8);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#FF0000").s().p("AgMAvQgEgCgBgDIgBgLIAAg3IgKAAIAAgBQAGgCAGgFIAGgHIADgJIABgDIAFAAIAAAYIAZAAIAAADIgZAAIAAA1QgBAJADAFQACACAEABQACACAFgBQAEABADgCIAHgHIABACQgDAGgGACQgGADgJAAQgMgBgFgEg");
	this.shape_982.setTransform(39.7,158.7);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#FF0000").s().p("AgjAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgWIgBgNQAAgEgCgDIgFgDIgHgBIAAgDIAbgDQACAIAAAHQAEgHAEgCQAIgGALAAQAHABAEACQADACAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDAAQgEAAgCgDIgDgDQgEgEgFABQgIAAgDAIQgEAHAAAPIAAAQIABAHIAAAJQABADACACQADADAHABIAAACg");
	this.shape_983.setTransform(27.4,159.8);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#FF0000").s().p("AAHAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgPIgDgHQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDADQgDAEgBAFIgBAQIAAAQIAAAHIABAJQABADACACQADADAIABIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDIgEgDIgHgBIAAgDIAcgDIACAKIAAACQANgMARAAQANABAIAFQAIAFAAAKIAAAmIABAJQABADADACQADADAHABIAAACg");
	this.shape_984.setTransform(1.6,159.8);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#FF0000").s().p("AAlAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIAAgLIAAgRIAAgPQgBgFgCgDQgFgIgMABQgNgBgGAJQgFAHAAAQIAAAQIAAAHIABAJQABADACACQADADAIABIAAACIgtAAIAAgCQAGgBADgCIAEgEIACgHIAAgLIAAgQIAAgQQgBgFgDgDQgCgDgEgCQgEgCgFAAQgGAAgGACQgFADgDAEQgDADgBAGQgBAFAAAIIAAAQIAAAHIABAJQABADACACQADADAIABIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDIgEgDIgHgBIAAgDIAdgDIACANQAHgGAIgEQAIgDAJAAQAKAAAGAFQADADAFAGQAIgHAJgEQAIgDAJAAQAMAAAIAHQAIAFAAAKIAAAeIAAAHIABAJIADAFQADADAIABIAAACg");
	this.shape_985.setTransform(-21.7,159.8);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#FF0000").s().p("AAHBAIAAgCIAIgBIAEgDQACgDABgEIABgLIAAgdIgBgLIgEgFQgGgGgJAAQgZAAAAAiIAAAPIABAHIAAAJQABADADACQADACAHABIAAACIguAAIAAgCQAGAAADgCQADgBABgDQACgCAAgFIABgMIAAhHIgBgNQAAgEgCgCIgFgEIgHgBIAAgCIAegDIAAA+IAHgGIAHgEQAHgDAJAAQAMAAAJAEQAFAEADAEQACAEAAAJIAAAbIAAAHIABAJQAAADADACQADACAIABIAAACg");
	this.shape_986.setTransform(-46.9,157.3);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#FF0000").s().p("AgNAvQgCgCgBgDIgCgLIAAg3IgLAAIAAgBQAHgCAGgFIAFgHIAFgJIABgDIADAAIAAAYIAaAAIAAADIgaAAIAAA1QABAJACAFQACACADABQADACAEgBQAFABAEgCIAGgHIACACQgDAGgHACQgGADgKAAQgLgBgGgEg");
	this.shape_987.setTransform(-60.3,158.7);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#FF0000").s().p("AgjAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgWIgBgNQAAgEgCgDIgFgDIgHgBIAAgDIAbgDQACAIAAAHQAEgHAEgCQAIgGALAAQAHABAEACQADACAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDAAQgEAAgCgDIgDgDQgEgEgFABQgIAAgDAIQgEAHAAAPIAAAQIABAHIAAAJQABADACACQADADAHABIAAACg");
	this.shape_988.setTransform(-74.7,159.8);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#FF0000").s().p("AgkBBIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgvIgPAAIAAgEIAPAAIAAgVQAAgIACgGQADgEAGgEQAFgDAHgCQAIgCAJAAQAIAAAFACQAFADAAAEQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAIgFgBIgEgEQgDgFgCgBQgCgCgDABIgIABIgEADQgCADgBAEIgBANIAAAXIAUAAIAAAEIgUAAIAAAvIAAAHIABAJQABADACACQACADAIABIAAACg");
	this.shape_989.setTransform(-85.8,157.3);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#FF0000").s().p("AAHBAIAAgCIAIgBIAEgDQACgDABgEIABgLIAAgdIgBgLIgEgFQgGgGgJAAQgZAAAAAiIAAAPIABAHIAAAJQABADADACQADACAHABIAAACIguAAIAAgCQAGAAADgCQADgBABgDQACgCAAgFIABgMIAAhHIgBgNQAAgEgCgCIgFgEIgHgBIAAgCIAegDIAAA+IAHgGIAHgEQAHgDAJAAQAMAAAJAEQAFAEADAEQACAEAAAJIAAAbIAAAHIABAJQAAADADACQADACAIABIAAACg");
	this.shape_990.setTransform(-110.4,157.3);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#FF0000").s().p("AgNAvQgDgCgBgDIAAgLIAAg3IgLAAIAAgBQAGgCAGgFIAGgHIADgJIABgDIAFAAIAAAYIAZAAIAAADIgZAAIAAA1QgBAJADAFQACACAEABQACACAEgBQAFABADgCIAHgHIABACQgDAGgGACQgGADgKAAQgLgBgGgEg");
	this.shape_991.setTransform(-118.4,158.7);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#FF0000").s().p("AAHAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgPIgDgHQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDADQgDAEgBAFIgBAQIAAAQIAAAHIABAJQABADACACQADADAIABIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDIgEgDIgHgBIAAgDIAcgDIACAKIAAACQANgMARAAQANABAIAFQAIAFAAAKIAAAmIABAJQABADADACQADADAHABIAAACg");
	this.shape_992.setTransform(-154.7,159.8);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#FF0000").s().p("AAHAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgPIgDgHQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDADQgDAEgBAFIgBAQIAAAQIAAAHIABAJQABADACACQADADAIABIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDIgEgDIgHgBIAAgDIAcgDIACAKIAAACQANgMARAAQANABAIAFQAIAFAAAKIAAAmIABAJQABADADACQADADAHABIAAACg");
	this.shape_993.setTransform(-190.1,159.8);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("#FF0000").s().p("AgjAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgWIgBgNQAAgEgCgDIgFgDIgHgBIAAgDIAbgDQACAIAAAHQAEgHAEgCQAIgGALAAQAHABAEACQADACAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDAAQgEAAgCgDIgDgDQgEgEgFABQgIAAgDAIQgEAHAAAPIAAAQIABAHIAAAJQABADACACQADADAHABIAAACg");
	this.shape_994.setTransform(-262.9,159.8);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgMAAgGgEQgHgFAAgJQAAgHAGgFQACgDAEgCIANgDIANgDIAGgDIAFgFIABgIQAAgKgFgFQgCgDgCgBIgGgBQgFAAgEABQgCACgDAEIgCAFQgCAEgGAAQgDAAgCgCQgDgCAAgDQAAgEAHgEIAKgCIANgBIAMABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAEAAAGgDQADgCACgFQADgGABgMIAAgOIgMAGg");
	this.shape_995.setTransform(-270.9,159.8);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#FF0000").s().p("AAHBAIAAgCIAIgBIAEgDQACgDABgEIABgLIAAgdIgBgLIgEgFQgGgGgJAAQgZAAAAAiIAAAPIABAHIAAAJQABADADACQADACAHABIAAACIguAAIAAgCQAGAAADgCQADgBABgDQACgCAAgFIABgMIAAhHIgBgNQAAgEgCgCIgFgEIgHgBIAAgCIAegDIAAA+IAHgGIAHgEQAHgDAJAAQAMAAAJAEQAFAEADAEQACAEAAAJIAAAbIAAAHIABAJQAAADADACQADACAIABIAAACg");
	this.shape_996.setTransform(-281.5,157.3);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#FF0000").s().p("AgSA+QgVgGgMgQQgMgQAAgWQAAgPAHgOQAHgOANgKQAJgGANgEQAOgDAMAAQANAAAOADIAIADIAFABQAAAAABAAQABAAAAAAQABgBAAAAQAAAAABgBIACgDIACAAIACApIgDAAIgCgEIgGgNQgEgIgHgHQgGgEgHgDQgGgBgIgBQgMABgHAEQgIAEgHAHQgGAHgEAKQgGANAAAQQAAAPAEALQAEALAIAJQAOAOAXAAQAMAAAKgEQAJgEAFgGQAGgHADgNIADAAQgCAOgHAJQgHAIgMAFQgMADgPAAQgOABgNgEg");
	this.shape_997.setTransform(-294.2,157.5);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#FF0000").s().p("AgSA+QgVgGgMgQQgMgQAAgVQAAgRAHgOQAHgOANgIQAJgHANgDQAOgFAMAAQANAAAOAFIAIACIAFABQAAAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIACgDIACAAIACApIgDAAIgCgEIgGgOQgEgHgHgHQgGgEgHgCQgGgCgIgBQgMAAgHAFQgIAEgHAHQgGAHgEAKQgGANAAAQQAAAPAEALQAEAMAIAHQAOAPAXAAQAMAAAKgDQAJgFAFgGQAGgIADgNIADABQgCAPgHAIQgHAIgMAEQgMAFgPAAQgOAAgNgEg");
	this.shape_998.setTransform(-33.1,109.7);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#FF0000").s().p("AAUA4QgIAEgGACQgHACgIAAQgPAAgMgIQgHgGgDgHQgEgJAAgJQAAgKAEgIQAEgIAHgGQAMgJAQAAQAIAAAFACQAGADAHAEIAAghQAAgKgEgEQgDgFgJAAIAAgCIAggDIAABpQABAJADAFQAEAFAIAAIAAACIgeADIgBgJgAgWgEQgFAEgCAIQgDAHAAAJQAAAHACAIQADAHAFAGQAHAKAMAAQAEgBAFgCQAFgDADgDQADgFABgGQABgHAAgMQAAgNgBgGQgBgFgDgFQgDgDgFgCQgFgCgDAAQgMAAgIAJg");
	this.shape_999.setTransform(57,210.7);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#FF0000").s().p("AAXAcQgNAMgSAAQgMAAgJgGQgIgFAAgKIAAgfIAAgHIAAgJQgBgDgCgCQgEgCgIgCIAAgCIAgAAIAAAuIAAAOQABAFACADQADADADACQAFACAFAAQAFAAAFgCQAFgCADgEQADgDACgFIABgPIAAgRIgBgHIAAgJIgEgFQgCgCgJgCIAAgCIAfAAIAAAxIABANQAAAEACACQACADACABIAHACIAAACIgcADQgCgGABgGg");
	this.shape_1000.setTransform(34.5,213.1);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#FF0000").s().p("AAUA4QgIAEgHACQgGACgHAAQgQAAgLgIQgIgGgDgHQgFgJAAgJQAAgKAFgIQAEgIAIgGQAMgJAPAAQAIAAAFACQAGADAHAEIAAghQAAgKgDgEQgEgFgJAAIAAgCIAhgDIAABpQgBAJAEAFQAEAFAJAAIAAACIgfADIgBgJgAgWgEQgFAEgDAIQgDAHAAAJQABAHACAIQADAHAEAGQAIAKALAAQAFgBAFgCQAEgDAEgDQADgFABgGQABgHAAgMQAAgNgBgGQgBgFgEgFQgCgDgFgCQgEgCgFAAQgLAAgIAJg");
	this.shape_1001.setTransform(-20.8,210.7);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#FF0000").s().p("AgrA1QgJgGgBgMIgBgPIAAg2IgBgOQgBgFgEgDIgGgEIgKgBIAAgCIBDAAIAAACIgKABQgEACgCACQgEADgBAFQgBAEAAAMIAAAzQAAANABAFQABAGADAFQAFAGAIAEQAHADAKAAQALAAAKgDQAKgDAHgFQAEgDACgEQACgDAAgHIABgRIAAgyIgBgOQgCgFgDgDIgGgEIgKgBIAAgCIAwAAIAAACIgKABIgGAEQgEADgBAFIgBAOIAAA4QAAAOgCAFQgCAGgHAGQgPALgdAAQgdAAgOgLg");
	this.shape_1002.setTransform(-45.9,210.8);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#FF0000").s().p("AgNAvQgCgCgBgDIgBgLIAAg3IgMAAIAAgBQAHgCAGgFIAFgHIAFgIIAAgEIAEAAIAAAYIAaAAIAAADIgaAAIAAA1QAAAJADAFQACACADABQAEACADgBQAFABADgCIAHgHIABACQgCAFgHADQgGADgKAAQgLAAgGgFg");
	this.shape_1003.setTransform(-82.6,211.9);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#FF0000").s().p("AgNAwQgCgDgBgDIgBgLIAAg2IgMAAIAAgCQAHgBAGgGIAFgHIAFgJIABgCIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QAAAKADADQACADADABQAEACADAAQAFAAADgCIAHgGIABABQgCAGgHACQgGADgKgBQgLAAgGgDg");
	this.shape_1004.setTransform(260.8,188);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#FF0000").s().p("AAHAnIAAgCQAGAAADgCQADgBABgDQACgCAAgEIABgNIAAgSIgBgOIgDgIQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDADgBAFIgBAQIAAAQIAAAHIABAJQABADACACQADADAIAAIAAACIguAAIAAgCQAGAAADgCQACgBACgDQABgCABgEIAAgNIAAgVIAAgNQgBgEgCgCQgCgDgCgBIgHgCIAAgCIAcgCIACAKIAAABQANgLARAAQANgBAIAGQAIAFAAAKIAAAmIABAJQABADADACQADADAHAAIAAACg");
	this.shape_1005.setTransform(252,189.1);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgCACgDQACgCAAgEIAAgMIAAgXIAAgMQgBgDgCgDIgEgDIgHgCIAAgCIAdgDIAAAzIAAAIIABAJQABACADACQADADAHABIAAACgAgGgyQgCgCgBgDQABgDACgDQADgCADAAQAEAAACACQADADAAADQAAADgDACQgCADgEAAQgEAAgCgDg");
	this.shape_1006.setTransform(243.7,186.6);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAFgFQADgDAFgCIALgDIAOgDIAGgDIAFgFIABgIQAAgKgEgFQgDgDgCgBIgHgBQgEAAgEABQgCACgCAEIgDAFQgCAEgFAAQgEAAgDgCQgCgCAAgDQAAgEAIgEIAKgCIAMgBIAMABQAHABAFADQAHADACAGIAAAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgKAFIgGAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAFAAAEgDQAEgCACgFQADgGAAgMIAAgOIgLAGg");
	this.shape_1007.setTransform(221.2,189.1);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#FF0000").s().p("AgkBAIAAgCQAGAAADgCQACgBACgDQABgCABgEIAAgNIAAguIgPAAIAAgDIAPAAIAAgXQAAgHACgFQADgFAGgEQAFgEAHgCQAIgCAJAAQAIABAFACQAFADAAADQAAABAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAIgFgBIgEgFQgDgEgCgBQgCgCgDAAIgIACIgEADQgCADgBAFIgBALIAAAZIAUAAIAAADIgUAAIAAAvIAAAHIABAJQABADACACQACADAIAAIAAACg");
	this.shape_1008.setTransform(214.2,186.6);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#FF0000").s().p("AAHAnIAAgCQAGAAADgCQADgBABgDQACgCAAgEIABgNIAAgSIgBgOIgDgIQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDADgBAFIgBAQIAAAQIAAAHIABAJQABADACACQADADAIAAIAAACIguAAIAAgCQAGAAADgCQACgBACgDQABgCABgEIAAgNIAAgVIAAgNQgBgEgCgCQgCgDgCgBIgHgCIAAgCIAcgCIACAKIAAABQANgLARAAQANgBAIAGQAIAFAAAKIAAAmIABAJQABADADACQADADAHAAIAAACg");
	this.shape_1009.setTransform(169.6,189.1);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#FF0000").s().p("AAXAcQgNAMgSAAQgMAAgJgGQgIgFAAgKIAAgfIAAgHIAAgJQgBgDgCgCQgEgCgIgCIAAgCIAgAAIAAAuIAAAOQABAFACADQADADADACQAFACAFAAQAFAAAFgCQAFgCADgEQADgDACgFIABgPIAAgRIgBgHIAAgJIgEgFQgCgCgJgCIAAgCIAfAAIAAAxIABANQAAAEACACQACADACABIAHACIAAACIgcADQgCgGABgGg");
	this.shape_1010.setTransform(132.1,189.2);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQADgCABgDQACgCAAgEIABgMIAAgXIgBgMQgBgDgCgDIgEgDIgHgCIAAgCIAdgDIAAAzIAAAIIABAJQABACADACQADADAHABIAAACgAgGgyQgDgCAAgDQAAgDADgDQADgCADAAQAEAAACACQADADAAADQAAADgDACQgCADgEAAQgDAAgDgDg");
	this.shape_1011.setTransform(81.8,186.6);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#FF0000").s().p("AgkBAIAAgCQAGAAADgCQACgBACgDQABgCABgEIAAgNIAAguIgPAAIAAgDIAPAAIAAgXQAAgHACgFQADgFAGgEQAFgEAHgCQAIgCAJAAQAIABAFACQAFADAAADQAAABAAABQAAABAAAAQAAABgBAAQAAABgBAAQgCACgDAAIgFgBIgEgFQgDgEgCgBQgCgCgDAAIgIACIgEADQgCADgBAFIgBALIAAAZIAUAAIAAADIgUAAIAAAvIAAAHIABAJQABADACACQACADAIAAIAAACg");
	this.shape_1012.setTransform(30.4,186.6);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#FF0000").s().p("AgNAwQgCgDgBgDIgBgLIAAg2IgMAAIAAgCQAHgBAGgGIAFgHIAFgJIABgCIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QAAAKADADQACADADABQAEACADAAQAFAAADgCIAHgGIACABQgDAGgHACQgGADgKgBQgLAAgGgDg");
	this.shape_1013.setTransform(-46.2,188);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQADgCABgDQABgCABgEIABgMIAAgXIgBgMQgBgDgBgDIgFgDIgHgCIAAgCIAdgDIAAAzIABAIIAAAJQABACACACQADADAIABIAAACgAgGgyQgCgCAAgDQAAgDACgDQADgCADAAQAEAAACACQAEADAAADQAAADgEACQgCADgEAAQgDAAgDgDg");
	this.shape_1014.setTransform(-65,186.6);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#FF0000").s().p("Ag3A+IAAgCQAFABAEgCQAFgCACgCQADgDACgEIABgOIAAhCIgBgNQgBgIgIgEQgEgCgIAAIAAgCIBsAAIADAeIgCAAIgFgKQgFgJgJgEQgFgCgGgCIgTAAIgPAAIAAA2IAEAAQASgBAIgHQAEgDACgEIACgMIACABIAAA2IgDAAQgBgJgDgFQgCgFgGgDQgEgCgGgBQgGgBgJAAIAAAkIABAOQABAEADADIAGAEIAKABIAAACg");
	this.shape_1015.setTransform(-109.5,186.8);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#FF0000").s().p("AgkBAIAAgCQAGAAADgCQACgBACgDQABgCABgEIAAgNIAAguIgPAAIAAgDIAPAAIAAgXQAAgHACgFQADgFAGgEQAFgEAHgCQAIgCAJAAQAIABAFACQAFADAAADQAAABAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAIgFgBIgEgFQgDgEgCgBQgCgCgDAAIgIACIgEADQgCADgBAFIgBALIAAAZIAUAAIAAADIgUAAIAAAvIAAAHIABAJQABADACACQACADAIAAIAAACg");
	this.shape_1016.setTransform(-156,186.6);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#FF0000").s().p("AgNAwQgCgDgBgDIgCgLIAAg2IgLAAIAAgCQAHgBAGgGIAFgHIAFgJIABgCIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QABAKACADQACADADABQADACAEAAQAFAAAEgCIAGgGIACABQgDAGgHACQgGADgKgBQgLAAgGgDg");
	this.shape_1017.setTransform(-214.6,188);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#FF0000").s().p("AgNAwQgCgDgBgDIgCgLIAAg2IgLAAIAAgCQAHgBAGgGIAFgHIAFgJIABgCIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QABAKACADQACADADABQADACAEAAQAFAAAEgCIAGgGIACABQgDAGgHACQgGADgKgBQgLAAgGgDg");
	this.shape_1018.setTransform(-236.7,188);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#FF0000").s().p("AAWAcQgNAMgQAAQgNAAgJgGQgHgFgBgKIAAgfIAAgHIgBgJQAAgDgDgCQgDgCgHgCIAAgCIAeAAIAAAuIABAOQABAFACADQACADAEACQAFACAFAAQAFAAAFgCQAFgCAEgEQADgDAAgFIABgPIAAgRIAAgHIgBgJIgDgFQgCgCgJgCIAAgCIAfAAIAAAxIABANQAAAEACACQACADADABIAGACIAAACIgcADQgBgGgBgGg");
	this.shape_1019.setTransform(-269.4,189.2);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#FF0000").s().p("AgNAwQgDgDgBgDIAAgLIAAg2IgLAAIAAgCQAGgBAGgGIAGgHIADgJIABgCIAFAAIAAAXIAZAAIAAAEIgZAAIAAA0QgBAKADADQACADAEABQACACAEAAQAFAAADgCIAHgGIABABQgDAGgGACQgGADgKgBQgLAAgGgDg");
	this.shape_1020.setTransform(-277.2,188);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOANgLQAPgOAUAAQAWAAAOAOQANALAAAOQAAAPgMALQgPAOgWAAQgVAAgPgOgAgUgbQgJALAAAQQAAAPAIALQAKAMALAAQAGAAAFgCQAGgDAEgFQAEgFADgIQACgIAAgHQAAgGgCgIQgDgIgFgFQgJgKgLAAQgMAAgIAKg");
	this.shape_1021.setTransform(268.6,165.3);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("#FF0000").s().p("AgNAwQgCgDgBgDIgBgLIAAg2IgMAAIAAgCQAHgBAGgGIAFgHIAFgIIABgDIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QAAAKADADQACADADABQAEACADAAQAFAAADgCIAHgGIABABQgCAGgHACQgGADgKgBQgLAAgGgDg");
	this.shape_1022.setTransform(260.8,164.2);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#FF0000").s().p("AgjA2QgEgCAAgDQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQACgBADAAIAHABIAEACIADAAQAGAAAEgJIADgHQACgEAAgDQAAgDgDgIIgWgtIgEgHIgEgIIgDgDQgCgCgEgBIAAgCIAoAAIAAACIgGACQgEACAAAEQAAAEAFAJIAQAmIAPggQAGgMAAgFQAAgEgDgDQgCgCgFgBIAAgCIAdAAIAAACIgGADQgCABgCACIgKATIgeA/QgFAMgDADQgGAGgIAAQgGAAgDgCg");
	this.shape_1023.setTransform(247.8,166.9);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("#FF0000").s().p("AAHAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgSIgBgOIgDgIQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDADgBAFIgBAQIAAAQIAAAHIABAJQABADACACQADADAIAAIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgNQgBgEgCgCIgEgEIgHgCIAAgBIAcgDIACAKIAAABQANgLARAAQANgBAIAGQAIAFAAAKIAAAmIABAJQABADADACQADADAHAAIAAACg");
	this.shape_1024.setTransform(228,165.2);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#FF0000").s().p("AgjAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgVIgBgNQAAgEgCgCIgFgEIgHgCIAAgBIAbgDQACAHAAAGQAEgGAEgDQAIgEALAAQAHAAAEACQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDgBQgEABgCgDIgDgDQgEgDgFgBQgIABgDAHQgEAJAAAOIAAAQIABAHIAAAJQABADACACQADADAHAAIAAACg");
	this.shape_1025.setTransform(218.8,165.2);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("#FF0000").s().p("AAWAcQgNAMgQAAQgNAAgJgGQgHgFgBgKIAAgfIAAgHIgBgJQAAgDgDgCQgDgCgHgCIAAgCIAeAAIAAAuIABAOQABAFACADQACADAEACQAFACAFAAQAFAAAFgCQAGgCADgEQADgDABgFIAAgPIAAgRIAAgHIAAgJIgEgFQgCgCgJgCIAAgCIAfAAIAAAxIABANQAAAEACACQACADADABIAGACIAAACIgcADQgBgGgBgGg");
	this.shape_1026.setTransform(209.4,165.3);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#FF0000").s().p("AgUBNQgGgDAAgFQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABgBQABAAAAAAQAFAAACAGIABAEQADAGAHAAQADAAACgBQADgCACgDIACgIIAAgNIAAg4QAAgLgEgEQgDgEgIAAIAAgDIAfgDIAABEIAAAPQgBAJgEAGQgHAMgSAAQgKAAgGgDgAALhCQgDgCAAgDQAAgEADgCQADgCAEAAQADAAADACQADACAAAEQAAADgDACQgDADgDAAQgFAAgCgDg");
	this.shape_1027.setTransform(189.1,164.4);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("#FF0000").s().p("AAHAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgSIgBgOIgDgIQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDADgBAFIgBAQIAAAQIAAAHIABAJQABADACACQADADAIAAIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgNQgBgEgCgCIgEgEIgHgCIAAgBIAcgDQACAEAAAGIAAABQANgLARAAQANgBAIAGQAIAFAAAKIAAAmIABAJQABADADACQADADAHAAIAAACg");
	this.shape_1028.setTransform(163,165.2);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#FF0000").s().p("AgjAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgVIgBgNQAAgEgCgCIgFgEIgHgCIAAgBIAbgDQACAHAAAGQAEgGAEgDQAIgEALAAQAHAAAEACQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDgBQgEABgCgDIgDgDQgEgDgFgBQgIABgDAHQgEAJAAAOIAAAQIABAHIAAAJQABADACACQADADAHAAIAAACg");
	this.shape_1029.setTransform(126.6,165.2);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("#FF0000").s().p("AAlAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIAAgNIAAgQIAAgPQgBgEgCgEQgFgHgMgBQgNAAgGAJQgFAHAAAQIAAAQIAAAHIABAJQABADACACQADADAIAAIAAACIgtAAIAAgCQAGAAADgBIAEgFIACgGIAAgNIAAgPIAAgQQgBgFgDgDQgCgEgEgCQgEgCgFAAQgGABgGACQgFACgDAFQgDADgBAGQgBAFAAAJIAAAPIAAAHIABAJQABADACACQADADAIAAIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgOQgBgDgCgCIgEgFIgHgBIAAgBIAdgDIACAMQAHgGAIgDQAIgDAJAAQAKAAAGADQADADAFAHQAIgHAJgDQAIgDAJAAQAMAAAIAFQAIAHAAAJIAAAeIAAAHIABAJIADAFQADADAIAAIAAACg");
	this.shape_1030.setTransform(94,165.2);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#FF0000").s().p("AgjA2QgEgCAAgDQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQACgBADAAIAHABIAEACIADAAQAGAAAEgJIADgHQACgEAAgDQAAgDgEgIIgVgtIgEgHIgEgIIgDgDQgCgCgEgBIAAgCIAoAAIAAACIgGACQgEACAAAEQAAAEAFAJIAQAmIAPggQAGgMAAgFQAAgEgDgDQgCgCgFgBIAAgCIAeAAIAAACIgHADQgCABgCACIgKATIgeA/QgFAMgDADQgGAGgIAAQgGAAgDgCg");
	this.shape_1031.setTransform(66,166.9);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("#FF0000").s().p("AgQAlQgJgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAHACQAHADAGAFQAHAHAAAMIg8AAIgBAGQAAAHADAIQACAIAFAFQAFAFAGADQAHADAIAAQAFAAAFgCQAFgCAEgDQADgDADgHIACABQgDALgIAFQgKAFgOAAQgMAAgKgDgAgNgfQgGAHgCAKIAsAAQAAgJgEgFQgDgEgEgDQgFgCgFAAQgIAAgHAGg");
	this.shape_1032.setTransform(56.5,165.3);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#FF0000").s().p("AgNAwQgDgDAAgDIgBgLIAAg2IgLAAIAAgCQAGgBAGgGIAGgHIADgIIABgDIAFAAIAAAXIAZAAIAAAEIgZAAIAAA0QgBAKADADQACADAEABQACACAEAAQAFAAADgCIAHgGIABABQgDAGgGACQgGADgKgBQgLAAgGgDg");
	this.shape_1033.setTransform(38.2,164.2);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f("#FF0000").s().p("AgOAWQAGgCAEgDQAEgDACgEQAFgHAAgFIgFABQgFAAgDgDQgEgDAAgFQAAgEAEgEQADgDAFAAQAGAAAEAEQAEAFgBAHQABAHgEAGQgEAHgGAFQgGAEgJACg");
	this.shape_1034.setTransform(27,169.5);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#FF0000").s().p("AAUA4QgIAFgGABQgHACgIAAQgPAAgMgIQgHgFgDgJQgEgIgBgJQABgKAEgJQAEgHAHgGQAMgJAQABQAIAAAFACQAGABAHAGIAAgiQAAgKgDgFQgEgEgJAAIAAgCIAggEIAABpQABALADAEQAEAEAJAAIAAACIgfAFIgBgKgAgWgEQgFAEgCAIQgDAIgBAHQAAAJADAHQADAHAFAGQAHAJAMAAQAEAAAFgCQAFgDADgEQADgEABgHQABgGAAgMQAAgNgBgGQgBgFgDgEQgDgEgFgCQgFgCgDAAQgMAAgIAJg");
	this.shape_1035.setTransform(19.1,162.9);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f("#FF0000").s().p("AAHAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgSIgBgOIgDgIQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDADgBAFIgBAQIAAAQIAAAHIABAJQABADACACQADADAIAAIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgNQgBgEgCgCIgEgEIgHgCIAAgBIAcgDQACAEAAAGIAAABQANgLARAAQANgBAIAGQAIAFAAAKIAAAmIABAJQABADADACQADADAHAAIAAACg");
	this.shape_1036.setTransform(7.7,165.2);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#FF0000").s().p("AgjAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgVIgBgNQAAgEgCgCIgFgEIgHgCIAAgBIAbgDQACAHAAAGQAEgGAEgDQAIgEALAAQAHAAAEACQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDgBQgEABgCgDIgDgDQgEgDgFgBQgIABgDAHQgEAJAAAOIAAAQIABAHIAAAJQABADACACQADADAHAAIAAACg");
	this.shape_1037.setTransform(-23.6,165.2);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f("#FF0000").s().p("AgjAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgVIgBgNQAAgEgCgCIgFgEIgHgCIAAgBIAbgDQACAHAAAGQAEgGAEgDQAIgEALAAQAHAAAEACQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDgBQgEABgCgDIgDgDQgEgDgFgBQgIABgDAHQgEAJAAAOIAAAQIABAHIAAAJQABADACACQADADAHAAIAAACg");
	this.shape_1038.setTransform(-39.8,165.2);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#FF0000").s().p("AAUA4QgIAFgGABQgHACgIAAQgPAAgMgIQgHgFgDgJQgEgIgBgJQABgKAEgJQAEgHAHgGQAMgJAQABQAIAAAFACQAGABAHAGIAAgiQAAgKgDgFQgEgEgJAAIAAgCIAggEIAABpQABALADAEQAEAEAJAAIAAACIgfAFIgBgKgAgWgEQgFAEgCAIQgDAIgBAHQAAAJADAHQADAHAFAGQAHAJAMAAQAEAAAFgCQAFgDADgEQADgEABgHQABgGAAgMQAAgNgBgGQgBgFgDgEQgDgEgFgCQgFgCgDAAQgMAAgIAJg");
	this.shape_1039.setTransform(-58.8,162.9);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f("#FF0000").s().p("AAHAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgSIgBgOIgDgIQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDADgBAFIgBAQIAAAQIAAAHIABAJQABADACACQADADAIAAIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgNQgBgEgCgCIgEgEIgHgCIAAgBIAcgDQACAEAAAGIAAABQANgLARAAQANgBAIAGQAIAFAAAKIAAAmIABAJQABADADACQADADAHAAIAAACg");
	this.shape_1040.setTransform(-70.1,165.2);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#FF0000").s().p("AgrA1QgJgHgBgLIgBgPIAAg2IgBgOQgBgEgEgDIgGgFIgKgBIAAgCIBDAAIAAACIgKABQgEACgCADQgEADgBAEQgBAFAAALIAAAyQAAANABAGQABAFADAFQAFAIAIADQAHADAKAAQALAAAKgCQAKgEAHgFQAEgDACgEQACgEAAgFIABgSIAAgyIgBgOQgCgEgDgDIgGgFIgKgBIAAgCIAwAAIAAACIgKABIgGAFQgEADgBAEIgBAOIAAA5QAAAMgCAHQgCAGgHAFQgPALgdAAQgdAAgOgLg");
	this.shape_1041.setTransform(-83.8,163.1);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f("#FF0000").s().p("AgNAwQgCgDgBgDIgBgLIAAg2IgMAAIAAgCQAHgBAGgGIAFgHIAFgIIABgDIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QAAAKADADQACADADABQAEACADAAQAFAAADgCIAHgGIACABQgDAGgHACQgGADgKgBQgLAAgGgDg");
	this.shape_1042.setTransform(-120.5,164.2);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("#FF0000").s().p("AgNAwQgCgDgBgDIgBgLIAAg2IgMAAIAAgCQAHgBAGgGIAFgHIAFgIIABgDIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QAAAKADADQACADADABQAEACADAAQAFAAADgCIAHgGIACABQgDAGgHACQgGADgKgBQgLAAgGgDg");
	this.shape_1043.setTransform(-142.5,164.2);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f("#FF0000").s().p("AAHAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgSIgBgOIgDgIQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDADgBAFIgBAQIAAAQIAAAHIABAJQABADACACQADADAIAAIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgNQgBgEgCgCQgCgDgCgBIgHgCIAAgBIAcgDIACAKIAAABQANgLARAAQANgBAIAGQAIAFAAAKIAAAmIABAJQABADADACQADADAHAAIAAACg");
	this.shape_1044.setTransform(-151.3,165.2);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQADgCABgCQABgDABgEIABgMIAAgXIgBgNQgBgCgBgDIgFgDIgHgCIAAgCIAdgDIAAA0IABAHIAAAJQABACACACQADADAIABIAAACgAgGgyQgCgCAAgDQAAgDACgDQADgCADAAQAEAAACACQAEADAAADQAAADgEACQgCADgEAAQgDAAgDgDg");
	this.shape_1045.setTransform(-159.5,162.8);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f("#FF0000").s().p("AgkBAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAguIgPAAIAAgDIAPAAIAAgXQAAgHACgFQADgFAGgEQAFgEAHgCQAIgCAJAAQAIABAFACQAFADAAADQAAABAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAIgFgBIgEgFQgDgEgCgBQgCgCgDAAIgIACIgEAEQgCACgBAFIgBALIAAAZIAUAAIAAADIgUAAIAAAvIAAAHIABAJQABADACACQACADAIAAIAAACg");
	this.shape_1046.setTransform(-196.7,162.7);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("#FF0000").s().p("AAFBAIAAgCIAGgBQABAAAAgBQABAAAAAAQAAgBABgBQAAAAAAgBQAAgCgDgDIgCgCIgZgZIgGAGIAAAHIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgCQACgBACgDQABgCABgFIAAgMIAAhHIAAgNQgBgEgCgCIgEgEIgHgBIAAgCIAegDIAABaIATgSIAHgIQACgCAAgDQAAgEgFgCIgGgBIAAgCIAnAAIAAACQgIAAgEADQgFACgIAGIgEAEIgKALIAaAbIAEAEIAFAEIAIAHIAGADIAKACIAAACg");
	this.shape_1047.setTransform(-211.1,162.7);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQADgCABgCQABgDABgEIABgMIAAgXIgBgNQgBgCgBgDIgFgDIgHgCIAAgCIAdgDIAAA0IABAHIAAAJQABACACACQADADAIABIAAACgAgGgyQgCgCAAgDQAAgDACgDQADgCADAAQAEAAACACQAEADAAADQAAADgEACQgCADgEAAQgDAAgDgDg");
	this.shape_1048.setTransform(-227,162.8);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#FF0000").s().p("AgjAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgVIgBgNQAAgEgCgCQgCgDgDgBIgHgCIAAgBIAbgDQACAHAAAGQAEgGAEgDQAIgEALAAQAHAAAEACQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDgBQgEABgCgDIgDgDQgEgDgFgBQgIABgDAHQgEAJAAAOIAAAQIABAHIAAAJQABADACACQADADAHAAIAAACg");
	this.shape_1049.setTransform(-233.2,165.2);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f("#FF0000").s().p("Ag3A+IAAgCQAFABAEgCQAFgCACgCQADgDACgEIABgOIAAhCIgBgNQgBgIgIgEQgEgCgIAAIAAgCIBsAAIADAeIgCAAIgFgKQgFgJgJgEQgFgCgGgBIgTgBIgPAAIAAA2IAEAAQASgBAIgHQAEgDACgEIACgMIACABIAAA2IgDAAQgBgJgDgFQgCgFgGgDQgEgCgGgBQgGgBgJAAIAAAkIABAOQABAEADADIAGAEIAKABIAAACg");
	this.shape_1050.setTransform(-242.6,162.9);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("#FF0000").s().p("AgjAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgVIgBgNQAAgEgCgCIgFgEIgHgCIAAgBIAbgDQACAHAAAGQAEgGAEgDQAIgEALAAQAHAAAEACQADADAAADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDgBQgEABgCgDIgDgDQgEgDgFgBQgIABgDAHQgEAJAAAOIAAAQIABAHIAAAJQABADACACQADADAHAAIAAACg");
	this.shape_1051.setTransform(-257.7,165.2);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f("#FF0000").s().p("AgMAwQgEgDgBgDIgBgLIAAg2IgKAAIAAgCQAGgBAGgGIAGgHIADgIIABgDIAFAAIAAAXIAZAAIAAAEIgZAAIAAA0QgBAKADADQACADAEABQACACAFAAQAEAAADgCIAHgGIABABQgDAGgGACQgGADgJgBQgMAAgFgDg");
	this.shape_1052.setTransform(-273.5,164.2);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("#FF0000").s().p("AgkBAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAguIgPAAIAAgDIAPAAIAAgXQAAgHACgFQADgFAGgEQAFgEAHgCQAIgCAJAAQAIABAFACQAFADAAADQAAABAAABQAAABAAAAQAAABgBAAQAAABgBAAQgCACgDAAIgFgBIgEgFQgDgEgCgBQgCgCgDAAIgIACIgEAEQgCACgBAFIgBALIAAAZIAUAAIAAADIgUAAIAAAvIAAAHIABAJQABADACACQACADAIAAIAAACg");
	this.shape_1053.setTransform(-278.8,162.7);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f("#FF0000").s().p("AAIA+IAAgCQAJgBADgBQAHgEAAgGQAAgEgDgGIgBgEIgLgWIgtAAIgFANIgDAGQgEAJAAAHQAAADABACQACAEADACQAEACAHAAIAAACIgvAAIAAgCQAFAAAEgCQAEgCAFgFIAGgKIAIgRIAmhVIAFAAIAuBfIAIAPQADAFAEADIAGACIAKABIAAACgAgfAIIApAAIgUgug");
	this.shape_1054.setTransform(-290.2,162.9);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("#FF0000").s().p("AgIAIQgEgDAAgFQAAgDAEgEQAEgDAEAAQAFAAAEADQAEAEAAADQAAAFgEADQgEADgFAAQgEAAgEgDg");
	this.shape_1055.setTransform(262.3,144.3);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f("#FF0000").s().p("AgMAvQgEgCgBgDIgBgLIAAg3IgKAAIAAgBQAGgCAGgFIAGgHIADgJIABgDIAFAAIAAAYIAZAAIAAADIgZAAIAAA1QAAAJACAFQACACAEABQACACAFgBQAEABAEgCIAGgHIABACQgDAFgGADQgGADgJAAQgMgBgFgEg");
	this.shape_1056.setTransform(233.3,140.3);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("#FF0000").s().p("AAUA4QgIAEgGACQgGACgIAAQgQAAgMgIQgHgGgDgHQgFgJAAgJQAAgKAFgIQAEgIAHgGQANgJAPAAQAIAAAFACQAGACAHAFIAAghQAAgKgDgEQgEgFgJAAIAAgCIAhgDIAABoQAAAKADAFQAEAFAJAAIAAACIgfADIgBgJgAgWgEQgFAEgCAIQgEAIAAAIQAAAHADAIQADAHAEAGQAIAKAMAAQAEgBAFgCQAFgCADgEQADgFABgGQACgHgBgMQABgNgCgGQgBgFgDgFQgDgDgFgCQgEgCgEAAQgMAAgIAJg");
	this.shape_1057.setTransform(207.5,139);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f("#FF0000").s().p("AAHAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgPIgDgHQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDADQgDAEgBAFIgBAPIAAARIAAAHIABAJQABADACACQADADAIABIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDQgCgCgCgBIgHgBIAAgDIAcgDIACAKIAAACQANgMARAAQANABAIAFQAIAFAAAKIAAAmIABAJQABADADACQADADAHABIAAACg");
	this.shape_1058.setTransform(196.2,141.3);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgMAAgGgEQgHgFAAgJQAAgHAGgFQADgDADgCIANgDIANgDIAHgDIAEgFIABgIQAAgKgFgFQgCgDgCgBIgGgBQgFAAgDABQgEACgCAEIgCAFQgCAEgGAAQgDAAgCgCQgDgCAAgDQAAgEAHgEIAKgCIANgBIAMABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAGAAIAGgBIAEgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAFAAAGgDQADgCACgFQAEgGAAgMIAAgOIgMAGg");
	this.shape_1059.setTransform(93,141.4);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f("#FF0000").s().p("AgNAvQgCgCgBgDIgBgLIAAg3IgMAAIAAgBQAHgCAGgFIAFgHIAFgJIABgDIADAAIAAAYIAaAAIAAADIgaAAIAAA1QAAAJADAFQACACADABQAEACADgBQAFABAEgCIAGgHIACACQgDAFgHADQgGADgKAAQgLgBgGgEg");
	this.shape_1060.setTransform(85.6,140.3);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#FF0000").s().p("AgyA6IAAgCQAHgBACgBQADgBABgEIACgGIABgMIAAg/QAAgKgEgEQgEgFgIAAIAAgCIAegEIABAIIAAACQAIgFAHgBQAFgCAJAAQAPAAAMAIQAGAFAFAIQADAIAAAKQAAAKgDAHQgFAJgIAGQgLAIgRAAQgHAAgFgCQgGgCgIgFIAAARIAAAGIABAJQABADADACQACADAIABIAAACgAgFgyQgFACgDAEQgDAEgCAHIgBATIABASQACAGADAEQADAEAFACQAFACAEAAQAKAAAIgJQAGgGADgHQACgHAAgIQAAgIgCgHQgDgIgFgFQgHgKgLAAQgFAAgFADg");
	this.shape_1061.setTransform(58.1,143);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f("#FF0000").s().p("AAlAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIAAgLIAAgRIAAgPQgBgFgCgDQgFgIgMABQgNgBgGAJQgFAHAAAPIAAARIAAAHIABAJQABADACACQADADAIABIAAACIgtAAIAAgCQAGgBADgCIAEgEIACgHIAAgLIAAgRIAAgPQgBgFgDgDQgCgDgEgCQgEgCgFAAQgGAAgGACQgFADgDAEQgDADgBAGQgBAFAAAIIAAAQIAAAHIABAJQABADACACQADADAIABIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDIgEgDIgHgBIAAgDIAdgDIACANQAHgGAIgEQAIgDAJAAQAKAAAGAFQADADAFAGQAIgHAJgEQAIgDAJAAQAMAAAIAHQAIAFAAAKIAAAeIAAAHIABAJIADAFQADADAIABIAAACg");
	this.shape_1062.setTransform(13.1,141.3);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#FF0000").s().p("AAUA4QgIAEgHACQgFACgJAAQgQAAgLgIQgHgGgEgHQgDgJAAgJQAAgKADgIQAFgIAIgGQALgJARAAQAGAAAGACQAGACAIAFIAAghQAAgKgFgEQgDgFgJAAIAAgCIAggDIAABoQAAAKAEAFQAEAFAIAAIAAACIgeADIgBgJgAgWgEQgFAEgDAIQgCAIAAAIQgBAHADAIQADAHAFAGQAHAKALAAQAFgBAFgCQAEgCAEgEQADgFABgGQACgHAAgMQAAgNgCgGQgBgFgEgFQgCgDgFgCQgFgCgEAAQgLAAgIAJg");
	this.shape_1063.setTransform(-6.3,139);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f("#FF0000").s().p("AgNAvQgDgCgBgDIAAgLIAAg3IgLAAIAAgBQAGgCAGgFIAGgHIADgJIABgDIAFAAIAAAYIAZAAIAAADIgZAAIAAA1QgBAJADAFQACACAEABQACACAEgBQAFABADgCIAHgHIABACQgDAFgGADQgGADgKAAQgLgBgGgEg");
	this.shape_1064.setTransform(-57.2,140.3);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#FF0000").s().p("AgMAmIgGgCIgCAAQgEAAgCADIgCAAIAAgaIACAAQADAJAEAGQAIAKALAAQAGAAAFgDQAFgEAAgHQAAgGgEgEIgFgEIgKgGQgNgFgFgEQgGgGAAgHQAAgJAGgGQAIgGAMAAIAJABIADACIADAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABgBIACAAIABAVIgCAAIgDgHQgBgDgCgCIgIgFQgEgCgDAAQgGAAgEADQgEAEAAAFQAAAFADAEQAEADAIADIAKAFQAKADAFAFQAFAGAAAIQAAAKgHAGQgJAHgMAAQgGAAgHgCg");
	this.shape_1065.setTransform(-260.1,141.4);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgEQACgBAAgFIAAgMIAAgWIAAgOQgBgDgCgCIgEgEIgHgBIAAgCIAdgDIAAAzIAAAHIABAJQABADADADQADACAHABIAAACgAgGgxQgDgCAAgEQAAgEADgCQADgCADAAQAEAAACACQADACAAAEQAAAEgDACQgCACgEAAQgEAAgCgCg");
	this.shape_1066.setTransform(-266.6,138.9);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("#FF0000").s().p("Ag3A/IAAgCQAFAAAEgCQAFgBACgDQADgDACgFIABgNIAAhDIgBgMQgBgIgIgEQgEgCgIgBIAAgCIBsAAIADAeIgCABIgFgLQgFgHgJgFQgFgCgGgCIgTgBIgPAAIAAA2IAEAAQASABAIgIQAEgDACgEIACgMIACABIAAA2IgDAAQgBgJgDgFQgCgGgGgDQgEgBgGAAQgGgCgJAAIAAAkIABANQABAFADADIAGAEIAKACIAAACg");
	this.shape_1067.setTransform(-282.2,139);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f("#FF0000").s().p("AAFBAIAAgCIAGgBQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAgCgDgDIgCgCIgZgZIgGAGIAAAHIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgCQACgBACgDQABgCABgFIAAgMIAAhHIAAgNQgBgEgCgCQgCgDgCgBIgHgBIAAgCIAegDIAABaIATgSIAHgIQACgCAAgDQAAgEgFgCIgGgBIAAgCIAnAAIAAACQgIAAgEADQgFACgIAGIgEAEIgKALIAaAbIAEAEIAFAEIAIAHIAGADIAKACIAAACg");
	this.shape_1068.setTransform(4.6,115);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("#FF0000").s().p("AgMAmIgGgCIgCAAQgEAAgCADIgCAAIAAgaIACAAQADAJAEAGQAIAKALAAQAGAAAFgDQAFgEAAgHQAAgGgEgEIgFgEIgKgGQgNgFgFgEQgGgGAAgHQAAgJAGgGQAIgGAMAAIAJABIADACIADAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABgBIACAAIABAVIgCAAIgDgHQgBgDgCgCIgIgFQgEgCgDAAQgGAAgEADQgEAEAAAFQAAAFADAEQAEADAIADIAKAFQAKADAFAFQAFAGAAAIQAAAKgHAGQgJAHgMAAQgGAAgHgCg");
	this.shape_1069.setTransform(-4.8,117.5);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgBABgEQACgBAAgFIABgMIAAgWIgBgOQgBgDgCgCIgEgEIgHgBIAAgCIAdgDIAAAzIAAAHIABAJQABADADADQADACAHABIAAACgAgGgxQgDgCAAgEQAAgEADgCQADgCADAAQAEAAACACQADACAAAEQAAAEgDACQgCACgEAAQgDAAgDgCg");
	this.shape_1070.setTransform(-11.3,115);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("#FF0000").s().p("AgjAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgWIgBgNQAAgEgCgDQgCgCgDgBIgHgBIAAgDIAbgDQACAJAAAGQAEgHAEgCQAIgGALAAQAHABAEACQADACAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDAAQgEAAgCgDIgDgDQgEgEgFABQgIAAgDAIQgEAHAAAPIAAAQIABAHIAAAJQABADACACQADADAHABIAAACg");
	this.shape_1071.setTransform(-17.5,117.5);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f("#FF0000").s().p("Ag3A/IAAgCQAFAAAEgCQAFgBACgDQADgDACgFIABgNIAAhDIgBgMQgBgIgIgEQgEgCgIgBIAAgBIBsAAIADAdIgCABIgFgLQgFgHgJgFQgFgCgGgCIgTgBIgPAAIAAA2IAEAAQASABAIgIQAEgDACgEIACgMIACABIAAA2IgDAAQgBgJgDgFQgCgGgGgDQgEgBgGAAQgGgCgJAAIAAAkIABANQABAFADADIAGAEIAKACIAAACg");
	this.shape_1072.setTransform(-26.9,115.2);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("#FF0000").s().p("AgjAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgWIgBgNQAAgEgCgDIgFgDIgHgBIAAgDIAbgDQACAJAAAGQAEgHAEgCQAIgGALAAQAHABAEACQADACAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDAAQgEAAgCgDIgDgDQgEgEgFABQgIAAgDAIQgEAHAAAPIAAAQIABAHIAAAJQABADACACQADADAHABIAAACg");
	this.shape_1073.setTransform(85.8,212);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f("#FF0000").s().p("AgjA2QgEgCAAgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQACgBAEAAIAGABIAEACIACAAQAHAAAEgJIADgHQADgEgBgDQAAgDgDgIIgXgtIgCgHIgFgIIgDgDQgDgCgEgBIAAgCIApAAIAAACIgGACQgEACAAAEQAAAEAEAJIARAmIAPggQAGgMAAgFQAAgEgDgDQgCgCgGgBIAAgCIAfAAIAAACIgHADQgDABgBACIgKATIgeA/QgEAMgEADQgGAGgIAAQgGAAgDgCg");
	this.shape_1074.setTransform(55.5,213.7);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#FF0000").s().p("AAHAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgPQgBgEgCgDQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDADQgDAEgBAFIgBAQIAAAQIAAAHIABAJQABADACACQADADAIABIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDQgCgCgCgBIgHgBIAAgDIAcgDIACAKIAAACQANgMARAAQANABAIAFQAIAFAAAKIAAAmIABAJQABADADACQADADAHABIAAACg");
	this.shape_1075.setTransform(21.5,212);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgLAAgHgEQgHgFAAgJQAAgHAGgFQACgDAFgCIAMgDIANgDIAGgDIAFgFIABgIQAAgKgFgFQgCgDgCgBIgGgBQgFAAgEABQgCACgCAEIgDAFQgCAEgGAAQgDAAgCgCQgDgCAAgDQAAgEAHgEIAKgCIANgBIAMABQAHABAFADQAGADADAGIAAAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAEAAAGgDQADgCACgFQADgGABgMIAAgOIgMAGg");
	this.shape_1076.setTransform(11.8,212);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#FF0000").s().p("AAWAnIgWg8IgcA8IgDAAIgVg3IgDgGQgDgJgEgDIgHgCIAAgCIApAAIAAACQgMABAAAHQAAAEAFAMIAMAgIASgoQACgEAAgDQAAgJgLAAIAAgCIAoAAIAAACIgIACQgDACAAAEQAAAEACAFIAOAnIAQgjQADgHAAgEQAAgEgEgDIgHgDIAAgCIAfAAIAAACQgFAAgDADIgFAFIgFAJIgCAEIgZA2g");
	this.shape_1077.setTransform(-91.3,212);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOANgLQAPgOAUAAQAWAAAOAOQANALAAAOQAAAPgMALQgPAOgWAAQgVAAgPgOgAgUgbQgJALAAAQQAAAPAIALQAKAMALAAQAGAAAFgCQAGgDAEgFQAEgFACgIQADgIAAgHQAAgGgDgIQgCgIgFgFQgJgKgLAAQgMAAgIAKg");
	this.shape_1078.setTransform(-103.5,212);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#FF0000").s().p("AgMAvQgEgCgBgDIgBgLIAAg3IgKAAIAAgBQAGgCAGgFIAGgHIADgJIABgDIAFAAIAAAYIAZAAIAAADIgZAAIAAA1QgBAJADAFQACACAEABQACACAFgBQAEABADgCIAHgHIABACQgDAFgGADQgGADgJAAQgMgBgFgEg");
	this.shape_1079.setTransform(-162.4,210.9);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQADgBABgDQACgCAAgFIABgMIAAgXIgBgMQgBgDgCgDQgCgDgCAAIgHgCIAAgCIAdgDIAAA0IAAAHIABAJQABADADABQADADAHABIAAACgAgGgyQgDgCAAgDQAAgDADgDQADgCADAAQAEAAACACQADADAAADQAAADgDACQgCADgEAAQgDAAgDgDg");
	this.shape_1080.setTransform(258.7,185.6);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#FF0000").s().p("AgMAwQgDgDgCgDIgBgLIAAg2IgLAAIAAgCQAHgBAGgGIAFgHIAFgIIABgDIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QABAKACAEQACACADABQAEACAEAAQAEAAAEgCIAGgGIACABQgEAGgGACQgGACgJAAQgMAAgFgDg");
	this.shape_1081.setTransform(253.7,187);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f("#FF0000").s().p("AgNAwQgDgDgBgDIAAgLIAAg2IgLAAIAAgCQAGgBAGgGIAGgHIADgIIABgDIAFAAIAAAXIAZAAIAAAEIgZAAIAAA0QgBAKADAEQACACAEABQADACADAAQAFAAADgCIAHgGIABABQgDAGgGACQgGACgKAAQgLAAgGgDg");
	this.shape_1082.setTransform(195.7,187);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#FF0000").s().p("AgyA6IAAgCQAGgBADgBQADgBACgEIABgGIABgMIAAg/QgBgKgDgEQgEgFgJAAIAAgCIAfgEIABAIIAAACQAIgFAGgBQAHgCAIAAQAPAAAMAIQAGAFAFAIQADAIAAAKQAAAKgDAHQgFAJgHAGQgNAIgQAAQgHAAgGgCQgFgCgHgFIAAARIAAAGIABAJQAAADACACQAEADAHABIAAACgAgFgyQgFACgDAEQgDAEgBAHIgBATIABASQABAGADAEQADAEAFACQAFACADAAQAMAAAHgJQAGgGACgHQADgHAAgIQAAgIgDgHQgCgIgFgFQgHgKgMAAQgEAAgFADg");
	this.shape_1083.setTransform(110.9,189.7);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f("#FF0000").s().p("AgBAXIgEgcIgBgHQAAgEACgDQACgDACAAQADAAACADQACADAAAEIgBAHIgFAcg");
	this.shape_1084.setTransform(98.6,181.7);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQADgBABgDQACgCAAgFIABgMIAAgXIgBgMQgBgDgCgDQgCgDgCAAIgHgCIAAgCIAdgDIAAA0IAAAHIABAJQABADADABQADADAHABIAAACgAgGgyQgDgCAAgDQAAgDADgDQADgCADAAQAEAAACACQADADAAADQAAADgDACQgCADgEAAQgDAAgDgDg");
	this.shape_1085.setTransform(79.6,185.6);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f("#FF0000").s().p("AgkBAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAguIgPAAIAAgDIAPAAIAAgXQAAgHACgFQADgFAGgEQAFgEAHgCQAIgCAJAAQAIABAFACQAFADAAADQAAABAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAIgFgBIgEgFQgDgEgCgBQgCgCgDAAIgIACIgEAEQgCACgBAFIgBAMIAAAYIAUAAIAAADIgUAAIAAAvIAAAHIABAJQABADACACQACACAIABIAAACg");
	this.shape_1086.setTransform(75,185.6);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#FF0000").s().p("Ag5A+IAAgCIAKgBIAGgEQADgDACgEIABgOIAAhCIgBgNIgDgHQgDgDgDgCQgFgCgGAAIgBAAIAAgDIA+AAQAQAAAIACQAIABAHAFQAPAKAAAQQAAARgPAIQgJADgKAAIgSABIgTAAIAAAhQAAAJABAFQABAEADADIAHAEIAJABIAAACgAgMgBIAKAAQAJAAAGgCQAFAAAFgFQAKgHAAgOQAAgIgDgFQgDgHgGgEQgGgEgIgBIgKAAIgJAAg");
	this.shape_1087.setTransform(46.4,185.8);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f("#FF0000").s().p("AgMAwQgDgDgCgDIgBgLIAAg2IgLAAIAAgCQAHgBAGgGIAFgHIAFgIIABgDIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QABAKACAEQACACADABQAEACAEAAQAEAAAEgCIAGgGIACABQgEAGgGACQgGACgJAAQgMAAgFgDg");
	this.shape_1088.setTransform(8.5,187);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#FF0000").s().p("AAUA4QgIAEgHACQgFACgIAAQgRAAgKgIQgIgFgEgJQgDgHAAgKQAAgKADgJQAFgHAIgGQAMgJAQABQAGAAAGACQAGABAIAGIAAgiQAAgKgFgFQgDgEgJAAIAAgCIAhgEIAABqQAAAKADAEQAEAEAIAAIAAACIgeAFIgBgKgAgWgEQgFAFgDAHQgCAHAAAIQgBAJADAHQADAHAEAGQAIAJALAAQAFABAFgDQAEgCAEgFQADgEABgHQABgGABgMQgBgNgBgGQgBgFgEgEQgCgEgFgCQgFgCgEAAQgLAAgIAJg");
	this.shape_1089.setTransform(-33.2,185.8);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQACgBACgDQACgCAAgFIAAgMIAAgXIAAgMQAAgDgDgDQgCgDgCAAIgHgCIAAgCIAdgDIAAA0IAAAHIABAJQABADADABQADADAHABIAAACgAgGgyQgCgCgBgDQABgDACgDQADgCADAAQAEAAADACQACADAAADQAAADgCACQgDADgEAAQgEAAgCgDg");
	this.shape_1090.setTransform(-75.9,185.6);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#FF0000").s().p("AgkBAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAguIgPAAIAAgDIAPAAIAAgXQAAgHACgFQADgFAGgEQAFgEAHgCQAIgCAJAAQAIABAFACQAFADAAADQAAABAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAIgFgBIgEgFQgDgEgCgBQgCgCgDAAIgIACIgEAEQgCACgBAFIgBAMIAAAYIAUAAIAAADIgUAAIAAAvIAAAHIABAJQABADACACQACACAIABIAAACg");
	this.shape_1091.setTransform(-80.5,185.6);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f("#FF0000").s().p("AAUA4QgIAEgGACQgHACgHAAQgQAAgLgIQgIgFgDgJQgFgHAAgKQAAgKAFgJQAEgHAHgGQANgJAPABQAIAAAFACQAGABAHAGIAAgiQAAgKgDgFQgEgEgJAAIAAgCIAhgEIAABqQAAAKADAEQAEAEAJAAIAAACIgfAFIgBgKgAgWgEQgFAFgCAHQgEAHAAAIQABAJACAHQADAHAEAGQAIAJALAAQAFABAFgDQAEgCAEgFQADgEABgHQACgGgBgMQABgNgCgGQgBgFgEgEQgCgEgFgCQgEgCgEAAQgMAAgIAJg");
	this.shape_1092.setTransform(-126.5,185.8);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#FF0000").s().p("AAHAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIABgNIAAgSIgBgOQgBgFgCgDQgDgDgEgCQgFgCgFAAQgFAAgFACQgFACgDAEQgDAEgBAEIgBAPIAAARIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgNQgBgEgCgCQgCgDgCgBIgHgCIAAgBIAcgDIACAKIAAABQANgMARABQANgBAIAGQAIAFAAAKIAAAmIABAJQABADADACQADACAHABIAAACg");
	this.shape_1093.setTransform(-137.8,188.1);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f("#FF0000").s().p("AgPBMIAAgCQAJAAAGgDIAAiNQgGgCgJgBIAAgDIAfAAIAACYg");
	this.shape_1094.setTransform(-162,186.6);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#FF0000").s().p("AgdA+IAAgCIAKgBQAEgBADgCQACgDABgDIABgLIAAhXIgIAAIgNAAIAAgCIADAAQAIAAAHgDQAHgCAIgFIACgCIADAAIAABkQAAAHABAFQABAEADACQAFAEALAAIAAACg");
	this.shape_1095.setTransform(-169.6,185.8);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f("#FF0000").s().p("AgPBMIAAiYIAfAAIAAADQgJABgGACIAACNQAGADAJAAIAAACg");
	this.shape_1096.setTransform(-177.1,186.6);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#FF0000").s().p("AgUBNQgGgDAAgFQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQABAAABAAQAEAAACAGIACAEQACAGAHAAQACAAADgBQAEgCABgDIABgIIABgNIAAg4QAAgLgDgEQgFgEgHAAIAAgDIAfgDIAABEIAAAPQgBAJgEAGQgHAMgSAAQgKAAgGgDgAAKhCQgCgCAAgDQAAgEADgCQADgCADAAQAFAAADACQACACAAAEQAAADgCACQgDADgFAAQgEAAgDgDg");
	this.shape_1097.setTransform(-216.4,187.2);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f("#FF0000").s().p("AgNAwQgCgDgBgDIgBgLIAAg2IgMAAIAAgCQAHgBAGgGIAFgHIAFgIIABgDIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QAAAKADAEQACACADABQAEACADAAQAFAAADgCIAHgGIACABQgDAGgHACQgGACgKAAQgLAAgGgDg");
	this.shape_1098.setTransform(-281.6,187);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOAMgLQAQgOAUAAQAWAAAOAOQANALAAAOQAAAPgMALQgOAOgXAAQgWAAgOgOgAgVgbQgIALAAAQQAAAPAIALQAKAMALAAQAGAAAGgCQAFgDAEgFQAEgFACgIQADgIAAgHQAAgGgDgIQgDgIgEgFQgIgKgMAAQgLAAgKAKg");
	this.shape_1099.setTransform(-290.3,188.1);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f("#FF0000").s().p("AAxA+IhhhrIAABPIABAOQABAEADADIAHAEIAJABIAAACIgwAAIAAgCIAKgBIAHgEQACgDACgEIABgOIAAhDIgBgOQgCgEgCgDIgHgEIgKgBIAAgDIAoAAIBVBfIAAhBIgBgPQgCgEgDgDIgHgEIgKgBIAAgDIAxAAIAAADQgLgBgFAGQgDADgCAEIgBAOIAABfg");
	this.shape_1100.setTransform(-304,185.8);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#FF0000").s().p("AgkA2QgDgCAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQACgBAEAAIAFABIAFACIACAAQAHAAAEgJIADgHQACgEAAgDQAAgDgDgIIgXgtIgCgHIgFgIIgDgDQgCgCgFgBIAAgCIAqAAIAAACIgHACQgEACAAAEQAAAEAEAJIARAmIAPggQAGgMAAgFQAAgEgDgDQgDgCgFgBIAAgCIAfAAIAAACIgHADQgDABgCACIgJATIgdA/QgFAMgEADQgGAGgJAAQgFAAgEgCg");
	this.shape_1101.setTransform(255.5,165.9);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f("#FF0000").s().p("AgiBCIAAhqQAAgKgDgFQgEgEgJAAIAAgDIAggDIAAA9QAFgFAEgCQAHgFALAAQAPAAANAJQAOAKAAAUQAAATgOAMQgMAKgTAAQgJAAgHgCIgGgDIgEAAQgFAAgFAHgAgHgKQgEADgDAFQgEAHAAARQAAAKACAIQABAJABADQADAFAEACQAFADAFAAQANAAAJgLQAIgKAAgRQAAgIgDgIQgDgIgFgEQgDgFgGgCQgEgCgFAAQgGAAgFADg");
	this.shape_1102.setTransform(245.1,161.9);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#FF0000").s().p("AAUA4QgIAEgHACQgFACgJAAQgQAAgLgIQgHgFgEgJQgDgHAAgKQAAgKADgJQAFgHAIgGQALgJARABQAGAAAGACQAGABAIAGIAAgiQAAgKgFgFQgDgEgJAAIAAgCIAggEIAABqQAAAKAEAEQAEAEAIAAIAAACIgeAFIgBgKgAgWgEQgFAFgDAHQgCAHAAAJQgBAIADAHQADAHAFAGQAHAJALAAQAFABAFgDQAEgCAEgFQADgEABgGQACgHAAgMQAAgNgCgGQgBgFgEgEQgCgEgFgCQgFgCgEAAQgLAAgIAJg");
	this.shape_1103.setTransform(229.1,161.9);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f("#FF0000").s().p("AgQAlQgJgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAHACQAHADAGAFQAHAHAAAMIg8AAIgBAGQAAAHACAIQADAIAFAFQAFAFAGADQAHADAIAAQAFAAAFgCQAFgCAEgDQADgDADgHIACABQgDALgIAFQgKAFgOAAQgMAAgKgDgAgNgfQgGAHgCAKIAsAAQAAgJgEgFQgDgEgEgDQgFgCgFAAQgIAAgHAGg");
	this.shape_1104.setTransform(195.6,164.3);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#FF0000").s().p("AAWAcQgNAMgQAAQgNAAgJgGQgHgFAAgKIAAgfIAAgHIgCgJQAAgDgDgCQgDgCgHgCIAAgCIAeAAIAAAuIABAOQABAFACADQACADAEACQAFACAGAAQAEAAAFgCQAFgCAEgEQADgDAAgFIABgPIAAgRIAAgHIgBgJIgDgFQgDgCgHgCIAAgCIAeAAIAAAxIABANQABAEABACQACADADABIAHACIAAACIgdADQgBgGgBgGg");
	this.shape_1105.setTransform(167.6,164.3);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f("#FF0000").s().p("AAlAnIAAgCQAGAAADgBQADgCABgDQACgCAAgEIAAgNIAAgQIAAgPQgBgEgCgEQgFgHgMgBQgNABgGAIQgFAHAAAPIAAARIAAAHIABAJQABADACACQADACAIABIAAACIgtAAIAAgCQAGAAADgBIAEgFIACgGIAAgNIAAgQIAAgPQgBgFgDgDQgCgEgEgCQgEgCgFAAQgGABgGACQgFACgDAFQgDADgBAGQgBAFAAAJIAAAPIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgBQACgCACgDQABgCABgEIAAgNIAAgVIAAgOQgBgDgCgCIgEgFIgHgBIAAgBIAdgDIACAMQAHgGAIgDQAIgDAJAAQAKAAAGADQADADAFAHQAIgHAJgDQAIgDAJAAQAMAAAIAFQAIAHAAAJIAAAeIAAAHIABAJIADAFQADACAIABIAAACg");
	this.shape_1106.setTransform(131,164.2);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("#FF0000").s().p("AASBMQgPgOgIgPQgHgLgEgNQgEgMAAgKQAAgLAEgNQAEgNAHgKIAJgPIAOgPIADAAIgBADQgIANgEAJQgEAJgDAKIgBARIgCAPIACATQABAQAEALQAFAMAKAPIABADg");
	this.shape_1107.setTransform(85.1,162.8);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f("#FF0000").s().p("AgMAwQgDgDgCgDIgBgLIAAg2IgLAAIAAgCQAHgBAGgGIAFgHIAFgIIABgDIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QABAKACADQACADADABQAEACAEAAQAEAAAEgCIAGgGIACABQgEAGgGACQgGACgJABQgMgBgFgDg");
	this.shape_1108.setTransform(45.4,163.2);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f("#FF0000").s().p("AAWAnIgWg8IgcA8IgDAAIgVg2IgDgHQgDgJgEgCIgHgDIAAgCIApAAIAAACQgMAAAAAIQAAAEAFALIAMAiIASgpQACgEAAgEQAAgHgLgBIAAgCIAoAAIAAACIgIACQgDACAAAEQAAADACAGIAOAoIAQgjQADgIAAgDQAAgGgEgCIgHgDIAAgCIAfAAIAAACQgFAAgDADIgFAEIgFAKIgCAFIgZA1g");
	this.shape_1109.setTransform(-14,164.3);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f("#FF0000").s().p("AAFBAIAAgCIAGgBQABAAAAgBQABAAAAAAQAAgBABgBQAAAAAAgBQAAgCgDgDIgCgCIgZgZIgGAGIAAAHIAAAHIABAJQABADACACQADACAIABIAAACIguAAIAAgCQAGAAADgCQACgBACgDQABgCABgFIAAgMIAAhHIAAgNQgBgEgCgCQgCgDgCgBIgHgBIAAgCIAegDIAABaIATgSIAHgIQACgCAAgDQAAgEgFgCIgGgBIAAgCIAnAAIAAACQgIAAgEADQgFACgIAGIgEAEIgKALIAaAbIAEAEIAFAEIAIAHIAGADIAKACIAAACg");
	this.shape_1110.setTransform(-119.7,161.7);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f("#FF0000").s().p("AgjA2QgEgCAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQACgBADAAIAGABIAFACIADAAQAGAAAEgJIADgHQADgEAAgDQgBgDgEgIIgVgtIgEgHIgEgIIgDgDQgCgCgEgBIAAgCIAoAAIAAACIgGACQgEACAAAEQAAAEAFAJIAQAmIAPggQAGgMAAgFQAAgEgDgDQgDgCgEgBIAAgCIAdAAIAAACIgGADQgCABgCACIgKATIgeA/QgFAMgDADQgGAGgIAAQgGAAgDgCg");
	this.shape_1111.setTransform(-159.8,165.9);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgMAAgGgEQgHgFAAgJQAAgHAFgFQAEgDADgCIANgDIANgDIAHgDIAEgFIABgIQAAgKgFgFQgCgDgCgBIgGgBQgFAAgDABQgDACgDAEIgCAFQgCAEgGAAQgDAAgDgCQgCgCAAgDQAAgEAHgEIAKgCIAMgBIANABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAGAAIAGgBIAEgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAFAAQAGAAAEgDQAEgCACgFQAEgGAAgMIAAgOIgMAGg");
	this.shape_1112.setTransform(-168.5,164.3);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f("#FF0000").s().p("AAUA4QgIAEgHACQgFACgJAAQgQAAgLgIQgHgFgEgJQgDgHAAgKQAAgKADgJQAFgHAIgGQALgJARABQAGAAAGACQAGABAIAGIAAgiQAAgKgFgFQgDgEgJAAIAAgCIAggEIAABqQAAAKAEAEQAEAEAIAAIAAACIgeAFIgBgKgAgWgEQgFAFgDAHQgCAHAAAJQgBAIADAHQADAHAFAGQAHAJALAAQAFABAFgDQAEgCAEgFQADgEABgGQACgHAAgMQAAgNgCgGQgBgFgEgEQgCgEgFgCQgFgCgEAAQgLAAgIAJg");
	this.shape_1113.setTransform(-247.5,161.9);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f("#FF0000").s().p("AgkAaQgGgFgDgHQgDgHAAgHQAAgOANgLQAPgOAUAAQAWAAAOAOQANALAAAOQAAAPgMALQgPAOgWAAQgVAAgPgOgAgUgbQgJALAAAQQAAAPAIALQAKAMALAAQAGAAAFgCQAGgDAEgFQAEgFACgIQADgIAAgHQAAgGgDgIQgCgIgFgFQgJgKgLAAQgLAAgJAKg");
	this.shape_1114.setTransform(-264.2,164.3);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f("#FF0000").s().p("AAWAnIgWg8IgcA8IgDAAIgVg2IgDgHQgDgJgEgCIgHgDIAAgCIApAAIAAACQgMAAAAAIQAAAEAFALIAMAiIASgpQACgEAAgEQAAgHgLgBIAAgCIAoAAIAAACIgIACQgDACAAAEQAAADACAGIAOAoIAQgjQADgIAAgDQAAgGgEgCIgHgDIAAgCIAfAAIAAACQgFAAgDADIgFAEIgFAKIgCAFIgZA1g");
	this.shape_1115.setTransform(-276.1,164.3);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f("#FF0000").s().p("AgNAwQgCgDgBgDIgBgLIAAg2IgMAAIAAgCQAHgBAGgGIAFgHIAFgIIABgDIADAAIAAAXIAaAAIAAAEIgaAAIAAA0QAAAKADADQACADADABQAEACADAAQAFAAADgCIAHgGIACABQgDAGgHACQgGACgKABQgLgBgGgDg");
	this.shape_1116.setTransform(-285.2,163.2);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#FF0000").s().p("AgNAwQgCgDgBgDIgBgLIAAg2IgMAAIAAgCQAHgCAGgFIAFgHIAFgJIAAgDIAEAAIAAAYIAaAAIAAAEIgaAAIAAA0QAAAKADADQACADADABQAEABADABQAFgBADgBIAHgHIABACQgCAFgHADQgGACgKAAQgLAAgGgDg");
	this.shape_1117.setTransform(222.5,139.3);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f("#FF0000").s().p("AgaAdQgLgKAAgRQAAgHACgIQAEgIAFgFQAHgHAKgDQAJgDAJAAQAPAAAKAGQAEADAAAFQAAACgCADQgCABgDAAQgHAAgDgIIgDgGIgCgCQgDgCgFAAQgGAAgEADQgFACgDAEQgEAEgCAGQgDAKAAAIQgBAIAEAHQADAIAGAFQAIAJAMAAQAKAAAHgGQADgDADgHIACABQgEAKgHAEQgHAEgNAAQgVAAgMgLg");
	this.shape_1118.setTransform(192.2,140.4);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f("#FF0000").s().p("AAXA/IAAgCIAKgCIAHgEQAEgDAAgFQACgEAAgJIAAhRIg1BuIgDAAIg1hsIAABPIABANQACAFACADIAIAEIAJACIAAACIgxAAIAAgCIALgCIAGgEQADgDACgFIABgNIAAhDIAAgIQgBgGgCgEQgCgEgFgCQgFgCgIgBIAAgBIAuAAIAtBhIAvhhIArAAIAAABIgKACQgDABgDADIgEAEIgCAGIgBALIAABDQABAJABAFQABAEAEADQAFAFALABIAAACg");
	this.shape_1119.setTransform(152.1,138);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f("#FF0000").s().p("AAHAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgPIgDgHQgDgEgEgBQgFgCgFAAQgFAAgFACQgFACgDADQgDAFgBAEIgBAQIAAAQIAAAHIABAJQABADACACQADACAIACIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDIgEgDIgHgBIAAgDIAcgDIACAKIAAACQANgMARAAQANABAIAFQAIAFAAAKIAAAmIABAJQABADADACQADACAHACIAAACg");
	this.shape_1120.setTransform(131.7,140.3);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f("#FF0000").s().p("AAUA4QgIAEgHACQgGACgHAAQgRAAgKgIQgIgGgEgHQgDgIgBgKQABgKADgIQAFgIAIgGQAMgIAQgBQAGAAAGACQAGADAIAEIAAghQAAgKgFgEQgDgFgJAAIAAgCIAhgDIAABoQgBALAEAEQAEAFAIgBIAAADIgeADIgBgJgAgWgEQgFAFgDAHQgCAIAAAHQAAAIACAIQADAIAEAFQAIAKALAAQAFAAAFgDQAFgCADgEQADgFABgHQABgGABgMQgBgNgBgGQgBgGgEgEQgCgDgFgCQgEgCgFAAQgLAAgIAJg");
	this.shape_1121.setTransform(110,138);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQACgBACgDQACgCAAgFIAAgMIAAhHIAAgNQAAgEgCgCIgFgEIgHgBIAAgCIAdgDIAABlIAAAHIABAJQABADADACQADACAHABIAAACg");
	this.shape_1122.setTransform(92,137.8);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#FF0000").s().p("AgMAwQgDgDgCgDIgBgLIAAg2IgLAAIAAgCQAHgCAGgFIAFgHIAEgJIACgDIADAAIAAAYIAaAAIAAAEIgaAAIAAA0QABAKACADQACADAEABQACABAFABQAEgBAEgBIAGgHIACACQgEAFgGADQgGACgJAAQgMAAgFgDg");
	this.shape_1123.setTransform(63.3,139.3);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f("#FF0000").s().p("AAHAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgTIgBgPIgDgHQgDgEgEgBQgFgCgFAAQgFAAgFACQgFACgDADQgDAFgBAEIgBAQIAAAQIAAAHIABAJQABADACACQADACAIACIAAACIguAAIAAgCQAGgBADgCQACgBACgDQABgCABgFIAAgLIAAgWIAAgNQgBgEgCgDIgEgDIgHgBIAAgDIAcgDIACAKIAAACQANgMARAAQANABAIAFQAIAFAAAKIAAAmIABAJQABADADACQADACAHACIAAACg");
	this.shape_1124.setTransform(54.5,140.3);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f("#FF0000").s().p("AAOAlQgDgCgEgFIgJAHQgHADgJAAQgLAAgIgEQgGgFAAgJQAAgHAGgFQACgDAFgCIALgDIAOgDQAEgBACgCIAFgFIABgIQAAgKgFgFQgBgDgDgBIgHgBQgEAAgEABQgCACgCAEIgDAFQgCAEgFAAQgEAAgCgCQgDgCAAgDQAAgEAHgEIALgCIAMgBIAMABQAHABAFADQAHADACAGIAAAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgOAAQgHAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAFAAAFgDQADgCACgFQADgGAAgMIAAgOIgLAGg");
	this.shape_1125.setTransform(-17.8,140.4);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f("#FF0000").s().p("AgMAwQgEgDgBgDIgBgLIAAg2IgKAAIAAgCQAGgCAGgFIAGgHIADgJIABgDIAFAAIAAAYIAZAAIAAAEIgZAAIAAA0QgBAKADADQACADAEABQACABAFABQAEgBADgBIAHgHIABACQgDAFgGADQgGACgJAAQgMAAgFgDg");
	this.shape_1126.setTransform(-39.5,139.3);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f("#FF0000").s().p("AgNAwQgCgDgBgDIgBgLIAAg2IgMAAIAAgCQAHgCAGgFIAFgHIAFgJIAAgDIAEAAIAAAYIAaAAIAAAEIgaAAIAAA0QAAAKADADQACADADABQAEABADABQAFgBADgBIAHgHIABACQgCAFgHADQgGACgKAAQgLAAgGgDg");
	this.shape_1127.setTransform(-65.5,139.3);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAPAAQAIAAAIACQAHADAFAFQAHAHAAAMIg8AAIgBAGQAAAHACAIQADAIAFAFQAFAFAGADQAGADAJAAQAFAAAFgCQAFgCADgDQAEgDADgHIACABQgDALgIAFQgKAFgPAAQgMAAgIgDgAgNgfQgGAHgCAKIAsAAQgBgJgCgFQgDgEgFgDQgFgCgFAAQgIAAgHAGg");
	this.shape_1128.setTransform(-86.5,140.4);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#FF0000").s().p("AgMAwQgEgDgBgDIgBgLIAAg2IgKAAIAAgCQAGgCAGgFIAGgHIADgJIABgDIAFAAIAAAYIAZAAIAAAEIgZAAIAAA0QgBAKADADQACADAEABQACABAFABQAEgBADgBIAHgHIABACQgDAFgGADQgGACgJAAQgMAAgFgDg");
	this.shape_1129.setTransform(-93.5,139.3);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f("#FF0000").s().p("AgaAdQgMgKAAgRQAAgHAEgIQADgIAGgFQAGgHAJgDQAKgDAKAAQAPAAAIAGQAGADAAAFQAAACgCADQgDABgDAAQgHAAgDgIIgCgGIgDgCQgDgCgFAAQgGAAgFADQgEACgDAEQgDAEgCAGQgFAKAAAIQABAIADAHQADAIAGAFQAIAJAMAAQAKAAAHgGQADgDADgHIADABQgFAKgHAEQgIAEgNAAQgUAAgMgLg");
	this.shape_1130.setTransform(-101.2,140.4);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#FF0000").s().p("AgjAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgWIgBgNQAAgEgCgDIgFgDIgHgBIAAgDIAbgDQACAJAAAGQAEgHAEgCQAIgGALAAQAHABAEACQADACAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDAAQgEAAgCgDIgDgDQgEgDgFAAQgIAAgDAHQgEAIAAAPIAAAQIABAHIAAAJQABADACACQADACAHACIAAACg");
	this.shape_1131.setTransform(-118.5,140.3);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f("#FF0000").s().p("AgNAwQgCgDgBgDIgBgLIAAg2IgMAAIAAgCQAHgCAGgFIAFgHIAFgJIAAgDIAEAAIAAAYIAaAAIAAAEIgaAAIAAA0QAAAKADADQACADADABQAEABADABQAFgBADgBIAHgHIABACQgCAFgHADQgGACgKAAQgLAAgGgDg");
	this.shape_1132.setTransform(-180.2,139.3);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#FF0000").s().p("AgjAoIAAgCQAGgBADgCQADgBABgDQACgCAAgFIABgLIAAgWIgBgNQAAgEgCgDIgFgDIgHgBIAAgDIAbgDQACAJAAAGQAEgHAEgCQAIgGALAAQAHABAEACQADACAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDAAQgEAAgCgDIgDgDQgEgDgFAAQgIAAgDAHQgEAIAAAPIAAAQIABAHIAAAJQABADACACQADACAHACIAAACg");
	this.shape_1133.setTransform(-210.6,140.3);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f("#FF0000").s().p("AgjA2QgEgCAAgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQACgBADAAIAHABIAEACIACAAQAHAAAEgJIADgHQADgEgBgDQAAgDgDgIIgXgtIgDgHIgEgIIgDgDQgDgCgEgBIAAgCIApAAIAAACIgGACQgEACAAAEQAAAEAEAJIARAmIAPggQAGgMAAgFQAAgEgDgDQgCgCgGgBIAAgCIAfAAIAAACIgHADQgDABgBACIgKATIgeA/QgEAMgEADQgGAGgIAAQgGAAgDgCg");
	this.shape_1134.setTransform(-228.5,142);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f("#FF0000").s().p("AAOAlQgDgCgDgFIgKAHQgHADgJAAQgMAAgGgEQgHgFAAgJQAAgHAGgFQACgDAEgCIANgDIANgDQAEgBACgCIAFgFIABgIQAAgKgFgFQgCgDgCgBIgGgBQgFAAgEABQgCACgDAEIgCAFQgCAEgGAAQgDAAgCgCQgDgCAAgDQAAgEAHgEIAKgCIANgBIAMABQAHABAFADQAGADACAGIABAJIAAAhIABALQACAHAHAAIAEgBIAFgEIACABQgEAJgNAAQgIAAgFgDgAgEABIgLAFIgFAFQgFAFAAAHQAAAGAEAEQAEAEAGAAQAEAAAGgDQADgCACgFQADgGABgMIAAgOIgMAGg");
	this.shape_1135.setTransform(-237.2,140.4);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f("#FF0000").s().p("AgPAlQgKgEgGgHQgJgLAAgPQAAgTARgMQAMgIAOAAQAJAAAIACQAGADAFAFQAIAHAAAMIg9AAIAAAGQAAAHACAIQAEAIAEAFQAFAFAGADQAHADAHAAQAGAAAFgCQAFgCADgDQAEgDADgHIACABQgCALgJAFQgKAFgPAAQgMAAgIgDgAgNgfQgHAHgBAKIAsAAQAAgJgDgFQgDgEgFgDQgFgCgFAAQgIAAgHAGg");
	this.shape_1136.setTransform(-269,140.4);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f("#FF0000").s().p("AghA/IAAgCIAKgCIAGgEQAEgDABgFIABgNIAAhdIgOAAQgQABgIAEQgIACgFAHQgFAHgDALIgCAAIACgiICNAAIACAiIgDAAQgDgNgGgGQgGgIgLgCQgKgCgXgBIAABdQAAAJABAEQABAFADADIAHAEIAKACIAAACg");
	this.shape_1137.setTransform(-292.3,138);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f("#FF0000").s().p("AgCAnIgag4QgHgNgCgDIgDgCIgFgBIAAgCIAoAAIAAACIgGACQgDACgBAEIABAFIAFAKIAQAlIARgnQADgIAAgEQAAgFgDgCIgGgCIAAgCIAcAAIAAACQgFABgEAEQgEAEgGANIgZA1g");
	this.shape_1138.setTransform(-5.9,116.5);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#FF0000").s().p("AgNAwQgCgDgBgDIgBgLIAAg3IgMAAIAAgBQAHgCAGgFIAFgHIAFgJIABgDIADAAIAAAYIAaAAIAAADIgaAAIAAA1QAAAJADAEQACADADABQAEABADABQAFgBADgBIAHgHIACACQgDAFgHADQgGACgKAAQgLAAgGgDg");
	this.shape_1139.setTransform(-22.4,115.4);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f("#FF0000").s().p("AgZA9IgIgDIgDgBQgFABgCAEIgCAAIAAglIADAAQAEAOAGAIQAMAQARAAQALAAAIgIQAIgHAAgKIgCgKQgCgFgDgEQgDgDgFgDIgQgJIgPgGIgJgGQgJgIAAgNQAAgIAEgGQADgIAGgEQAMgJAPAAIAIABIALACIAHADIAEAAQADABABgFIADAAIABAkIgDAAIgFgNQgCgFgDgEQgFgHgGgEQgGgCgIAAQgLAAgHAGIgEAHIgCAHQAAAQAXAJIAOAHQARAGAHAIQAJAKAAANQAAAHgEAJQgGAKgKAGQgLAFgPAAQgNAAgMgEg");
	this.shape_1140.setTransform(-31.1,114.2);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#FF0000").s().p("AgCAnIgag3QgGgOgDgCIgDgCIgFgCIAAgCIAoAAIAAACIgGACQgEACAAAEIACAFIADAKIARAlIARgnQADgIAAgEQAAgFgDgCIgGgCIAAgCIAcAAIAAACQgFABgEAEQgEAEgGANIgZA1g");
	this.shape_1141.setTransform(43.4,200.9);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f("#FF0000").s().p("AAUA4QgIAFgGABQgHACgIAAQgPAAgMgIQgHgFgEgJQgDgHAAgKQAAgKADgJQAFgHAHgGQAMgIAQAAQAIAAAFABQAGACAHAGIAAgiQAAgKgEgFQgDgEgJAAIAAgCIAggEIAABpQABALADAEQAEAFAIgBIAAACIgeAFIgBgKgAgWgEQgFAEgCAIQgDAIAAAHQAAAJACAHQADAHAFAGQAHAKAMgBQAEAAAFgCQAFgDADgEQADgEABgHQABgGAAgMQAAgNgBgGQgBgGgDgDQgDgEgFgCQgFgCgDAAQgMAAgIAJg");
	this.shape_1142.setTransform(-82.5,198.6);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGgBADgBQADgCABgDQACgCAAgEIABgMIAAgWIgBgOQgBgCgCgDIgEgEIgHgBIAAgCIAdgDIAAAzIAAAIIABAJQABACADACQADADAHABIAAACgAgGgyQgDgCAAgDQAAgDADgDQADgCADAAQAEAAACACQADADAAADQAAADgDACQgCADgEAAQgDAAgDgDg");
	this.shape_1143.setTransform(162.8,174.6);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f("#FF0000").s().p("AgNAwQgDgDgBgDIAAgLIAAg2IgLAAIAAgCQAGgBAGgGIAGgHIADgJIABgCIAFAAIAAAXIAZAAIAAAEIgZAAIAAA0QgBAKADADQACADAEABQACABAEABQAFgBADgBIAHgGIABABQgDAFgGADQgGADgKgBQgLAAgGgDg");
	this.shape_1144.setTransform(152.5,176);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#FF0000").s().p("AggA/IAAgDIAKgBIAGgEQADgDABgEIABgOIAAhCIgBgPQgBgEgDgDIgGgEIgKgBIAAgCIBBAAIAAACIgJABIgHAEQgEAEgBAGIAAAMIAABCIABAMIACAHQADADAEACIALACIAAADg");
	this.shape_1145.setTransform(145.4,174.7);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f("#FF0000").s().p("AAmA/IglhhIglBhIgFAAIgvhiIgDgGIgFgKQgCgDgEgCIgFgCIgIgBIAAgCIBCAAIAAACQgKgBgDACQgDABgCACQgBADAAADQAAAEADAGIADAHIAgBEIAXg7QAEgLAAgGIgBgJIgFgGQgDgCgDgBIgJgBIAAgCIBCAAIAAACIgJAAIgFABQgDACgCAEQgCADAAADQAAADADAJIAaBHIAdg9QAGgOAAgIQAAgIgGgEQgEgBgHAAIAAgCIAwAAIAAACIgKACQgEACgDAEQgGAHgIAQIgrBbg");
	this.shape_1146.setTransform(124.9,174.7);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#FF0000").s().p("AAmA/IglhhIglBhIgFAAIgvhiIgDgGIgFgKQgCgDgEgCIgFgCIgIgBIAAgCIBCAAIAAACQgKgBgDACQgDABgCACQgBADAAADQAAAEADAGIADAHIAgBEIAXg7QAEgLAAgGIgBgJIgFgGQgDgCgDgBIgJgBIAAgCIBCAAIAAACIgJAAIgFABQgDACgCAEQgCADAAADQAAADADAJIAaBHIAdg9QAGgOAAgIQAAgIgGgEQgEgBgHAAIAAgCIAwAAIAAACIgKACQgEACgDAEQgGAHgIAQIgrBbg");
	this.shape_1147.setTransform(102.4,174.7);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f("#FF0000").s().p("AAmA/IglhhIglBhIgFAAIgvhiIgDgGIgFgKQgCgDgEgCIgFgCIgIgBIAAgCIBCAAIAAACQgKgBgDACQgDABgCACQgBADAAADQAAAEADAGIADAHIAgBEIAXg7QAEgLAAgGIgBgJIgFgGQgDgCgDgBIgJgBIAAgCIBCAAIAAACIgJAAIgFABQgDACgCAEQgCADAAADQAAADADAJIAaBHIAdg9QAGgOAAgIQAAgIgGgEQgEgBgHAAIAAgCIAwAAIAAACIgKACQgEACgDAEQgGAHgIAQIgrBbg");
	this.shape_1148.setTransform(79.8,174.7);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#FF0000").s().p("AAmA/IglhhIglBhIgFAAIgvhiIgDgGIgFgKQgCgDgEgCIgFgCIgIgBIAAgCIBCAAIAAACQgKgBgDACQgDABgCACQgBADAAADQAAAEADAGIADAHIAgBEIAXg7QAEgLAAgGIgBgJIgFgGQgDgCgDgBIgJgBIAAgCIBCAAIAAACIgJAAIgFABQgDACgCAEQgCADAAADQAAADADAJIAaBHIAdg9QAGgOAAgIQAAgIgGgEQgEgBgHAAIAAgCIAwAAIAAACIgKACQgEACgDAEQgGAHgIAQIgrBbg");
	this.shape_1149.setTransform(57.3,174.7);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f("#FF0000").s().p("AAmA/IglhhIglBhIgFAAIgvhiIgDgGIgFgKQgCgDgEgCIgFgCIgIgBIAAgCIBCAAIAAACQgKgBgDACQgDABgCACQgBADAAADQAAAEADAGIADAHIAgBEIAXg7QAEgLAAgGIgBgJIgFgGQgDgCgDgBIgJgBIAAgCIBCAAIAAACIgJAAIgFABQgDACgCAEQgCADAAADQAAADADAJIAaBHIAdg9QAGgOAAgIQAAgIgGgEQgEgBgHAAIAAgCIAwAAIAAACIgKACQgEACgDAEQgGAHgIAQIgrBbg");
	this.shape_1150.setTransform(34.7,174.7);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#FF0000").s().p("AAmA/IglhhIglBhIgFAAIgvhiIgDgGIgFgKQgCgDgEgCIgFgCIgIgBIAAgCIBCAAIAAACQgKgBgDACQgDABgCACQgBADAAADQAAAEADAGIADAHIAgBEIAXg7QAEgLAAgGIgBgJIgFgGQgDgCgDgBIgJgBIAAgCIBCAAIAAACIgJAAIgFABQgDACgCAEQgCADAAADQAAADADAJIAaBHIAdg9QAGgOAAgIQAAgIgGgEQgEgBgHAAIAAgCIAwAAIAAACIgKACQgEACgDAEQgGAHgIAQIgrBbg");
	this.shape_1151.setTransform(12.2,174.7);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f("#FF0000").s().p("AAmA/IglhhIglBhIgFAAIgvhiIgDgGIgFgKQgCgDgEgCIgFgCIgIgBIAAgCIBCAAIAAACQgKgBgDACQgDABgCACQgBADAAADQAAAEADAGIADAHIAgBEIAXg7QAEgLAAgGIgBgJIgFgGQgDgCgDgBIgJgBIAAgCIBCAAIAAACIgJAAIgFABQgDACgCAEQgCADAAADQAAADADAJIAaBHIAdg9QAGgOAAgIQAAgIgGgEQgEgBgHAAIAAgCIAwAAIAAACIgKACQgEACgDAEQgGAHgIAQIgrBbg");
	this.shape_1152.setTransform(-10.3,174.7);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f("#FF0000").s().p("AAmA/IglhhIglBhIgFAAIgvhiIgDgGIgFgKQgCgDgEgCIgFgCIgIgBIAAgCIBCAAIAAACQgKgBgDACQgDABgCACQgBADAAADQAAAEADAGIADAHIAgBEIAXg7QAEgLAAgGIgBgJIgFgGQgDgCgDgBIgJgBIAAgCIBCAAIAAACIgJAAIgFABQgDACgCAEQgCADAAADQAAADADAJIAaBHIAdg9QAGgOAAgIQAAgIgGgEQgEgBgHAAIAAgCIAwAAIAAACIgKACQgEACgDAEQgGAHgIAQIgrBbg");
	this.shape_1153.setTransform(-32.9,174.7);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f("#FF0000").s().p("AAmA/IglhhIglBhIgFAAIgvhiIgDgGIgFgKQgCgDgEgCIgFgCIgIgBIAAgCIBCAAIAAACQgKgBgDACQgDABgCACQgBADAAADQAAAEADAGIADAHIAgBEIAXg7QAEgLAAgGIgBgJIgFgGQgDgCgDgBIgJgBIAAgCIBCAAIAAACIgJAAIgFABQgDACgCAEQgCADAAADQAAADADAJIAaBHIAdg9QAGgOAAgIQAAgIgGgEQgEgBgHAAIAAgCIAwAAIAAACIgKACQgEACgDAEQgGAHgIAQIgrBbg");
	this.shape_1154.setTransform(-55.4,174.7);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f("#FF0000").s().p("AAmA/IglhhIglBhIgFAAIgvhiIgDgGIgFgKQgCgDgEgCIgFgCIgIgBIAAgCIBCAAIAAACQgKgBgDACQgDABgCACQgBADAAADQAAAEADAGIADAHIAgBEIAXg7QAEgLAAgGIgBgJIgFgGQgDgCgDgBIgJgBIAAgCIBCAAIAAACIgJAAIgFABQgDACgCAEQgCADAAADQAAADADAJIAaBHIAdg9QAGgOAAgIQAAgIgGgEQgEgBgHAAIAAgCIAwAAIAAACIgKACQgEACgDAEQgGAHgIAQIgrBbg");
	this.shape_1155.setTransform(-77.9,174.7);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f("#FF0000").s().p("AAmA/IglhhIglBhIgFAAIgvhiIgDgGIgFgKQgCgDgEgCIgFgCIgIgBIAAgCIBCAAIAAACQgKgBgDACQgDABgCACQgBADAAADQAAAEADAGIADAHIAgBEIAXg7QAEgLAAgGIgBgJIgFgGQgDgCgDgBIgJgBIAAgCIBCAAIAAACIgJAAIgFABQgDACgCAEQgCADAAADQAAADADAJIAaBHIAdg9QAGgOAAgIQAAgIgGgEQgEgBgHAAIAAgCIAwAAIAAACIgKACQgEACgDAEQgGAHgIAQIgrBbg");
	this.shape_1156.setTransform(-100.5,174.7);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f("#FF0000").s().p("AAmA/IglhhIglBhIgFAAIgvhiIgDgGIgFgKQgCgDgEgCIgFgCIgIgBIAAgCIBCAAIAAACQgKgBgDACQgDABgCACQgBADAAADQAAAEADAGIADAHIAgBEIAXg7QAEgLAAgGIgBgJIgFgGQgDgCgDgBIgJgBIAAgCIBCAAIAAACIgJAAIgFABQgDACgCAEQgCADAAADQAAADADAJIAaBHIAdg9QAGgOAAgIQAAgIgGgEQgEgBgHAAIAAgCIAwAAIAAACIgKACQgEACgDAEQgGAHgIAQIgrBbg");
	this.shape_1157.setTransform(-123,174.7);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f("#FF0000").s().p("AAmA/IglhhIglBhIgFAAIgvhiIgDgGIgFgKQgCgDgEgCIgFgCIgIgBIAAgCIBCAAIAAACQgKgBgDACQgDABgCACQgBADAAADQAAAEADAGIADAHIAgBEIAXg7QAEgLAAgGIgBgJIgFgGQgDgCgDgBIgJgBIAAgCIBCAAIAAACIgJAAIgFABQgDACgCAEQgCADAAADQAAADADAJIAaBHIAdg9QAGgOAAgIQAAgIgGgEQgEgBgHAAIAAgCIAwAAIAAACIgKACQgEACgDAEQgGAHgIAQIgrBbg");
	this.shape_1158.setTransform(-145.5,174.7);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f("#FF0000").s().p("AAmA/IglhhIglBhIgFAAIgvhiIgDgGIgFgKQgCgDgEgCIgFgCIgIgBIAAgCIBCAAIAAACQgKgBgDACQgDABgCACQgBADAAADQAAAEADAGIADAHIAgBEIAXg7QAEgLAAgGIgBgJIgFgGQgDgCgDgBIgJgBIAAgCIBCAAIAAACIgJAAIgFABQgDACgCAEQgCADAAADQAAADADAJIAaBHIAdg9QAGgOAAgIQAAgIgGgEQgEgBgHAAIAAgCIAwAAIAAACIgKACQgEACgDAEQgGAHgIAQIgrBbg");
	this.shape_1159.setTransform(-168.1,174.7);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f("#FF0000").s().p("AAmA/IglhhIglBhIgFAAIgvhiIgDgGIgFgKQgCgDgEgCIgFgCIgIgBIAAgCIBCAAIAAACQgKgBgDACQgDABgCACQgBADAAADQAAAEADAGIADAHIAgBEIAXg7QAEgLAAgGIgBgJIgFgGQgDgCgDgBIgJgBIAAgCIBCAAIAAACIgJAAIgFABQgDACgCAEQgCADAAADQAAADADAJIAaBHIAdg9QAGgOAAgIQAAgIgGgEQgEgBgHAAIAAgCIAwAAIAAACIgKACQgEACgDAEQgGAHgIAQIgrBbg");
	this.shape_1160.setTransform(-190.6,174.7);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f("#FF0000").s().p("AAmA/IglhhIglBhIgFAAIgvhiIgDgGIgFgKQgCgDgEgCIgFgCIgIgBIAAgCIBCAAIAAACQgKgBgDACQgDABgCACQgBADAAADQAAAEADAGIADAHIAgBEIAXg7QAEgLAAgGIgBgJIgFgGQgDgCgDgBIgJgBIAAgCIBCAAIAAACIgJAAIgFABQgDACgCAEQgCADAAADQAAADADAJIAaBHIAdg9QAGgOAAgIQAAgIgGgEQgEgBgHAAIAAgCIAwAAIAAACIgKACQgEACgDAEQgGAHgIAQIgrBbg");
	this.shape_1161.setTransform(-213.1,174.7);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f("#FF0000").s().p("AAmA/IglhhIglBhIgFAAIgvhiIgDgGIgFgKQgCgDgEgCIgFgCIgIgBIAAgCIBCAAIAAACQgKgBgDACQgDABgCACQgBADAAADQAAAEADAGIADAHIAgBEIAXg7QAEgLAAgGIgBgJIgFgGQgDgCgDgBIgJgBIAAgCIBCAAIAAACIgJAAIgFABQgDACgCAEQgCADAAADQAAADADAJIAaBHIAdg9QAGgOAAgIQAAgIgGgEQgEgBgHAAIAAgCIAwAAIAAACIgKACQgEACgDAEQgGAHgIAQIgrBbg");
	this.shape_1162.setTransform(-235.7,174.7);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f("#FF0000").s().p("AAmA/IglhhIglBhIgFAAIgvhiIgDgGIgFgKQgCgDgEgCIgFgCIgIgBIAAgCIBCAAIAAACQgKgBgDACQgDABgCACQgBADAAADQAAAEADAGIADAHIAgBEIAXg7QAEgLAAgGIgBgJIgFgGQgDgCgDgBIgJgBIAAgCIBCAAIAAACIgJAAIgFABQgDACgCAEQgCADAAADQAAADADAJIAaBHIAdg9QAGgOAAgIQAAgIgGgEQgEgBgHAAIAAgCIAwAAIAAACIgKACQgEACgDAEQgGAHgIAQIgrBbg");
	this.shape_1163.setTransform(-258.2,174.7);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f("#FF0000").s().p("AAIA/IAAgDQAJgBADgCQAHgDAAgGQAAgEgDgGIgCgEIgKgWIgtAAIgFANIgDAGQgFAJABAHQAAADACACQABAEADABQAEADAHAAIAAADIgwAAIAAgDQAGAAAEgCQAEgCAEgFIAHgKIAIgRIAmhVIAGAAIAtBfIAJAPQACAFAEADIAGACIAJABIAAADgAgfAJIApAAIgUgvg");
	this.shape_1164.setTransform(-276.9,174.7);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f("#FF0000").s().p("AgNAvQgCgCgBgDIgCgLIAAg3IgLAAIAAgBQAHgCAGgFIAFgHIAFgIIABgEIADAAIAAAYIAaAAIAAADIgaAAIAAA1QABAJACAFQACACADABQADACAFgBQAEABAEgCIAGgHIACACQgDAFgHADQgGADgKAAQgLAAgGgFg");
	this.shape_1165.setTransform(29.3,128.2);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f("#FF0000").s().p("AgMAvQgDgCgCgDIgBgLIAAg3IgLAAIAAgBQAHgCAGgFIAGgHIADgIIACgEIADAAIAAAYIAaAAIAAADIgaAAIAAA1QABAJACAFQACACADABQADACAFgBQAEABAEgCIAGgHIACACQgEAFgGADQgGADgJAAQgMAAgFgFg");
	this.shape_1166.setTransform(23.7,128.2);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f("#FF0000").s().p("AgWBAIAAgCQAGAAADgCQADgCABgCQABgDABgEIABgMIAAgWIgBgNQgBgDgBgDIgFgEIgHgBIAAgCIAdgDIAAA0IABAGIAAAJQABAEACACQADACAIABIAAACgAgGgxQgCgCAAgEQAAgEACgCQADgCADAAQAEAAACACQAEACAAAEQAAAEgEACQgCACgEAAQgDAAgDgCg");
	this.shape_1167.setTransform(17.8,126.8);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f("#FF0000").s().p("AAGA+IAAgBQAJgBADgCQADgBABgEQgBgEgEgFIgIgKIgJgLIgXgYIgHAEIAAAfQAAAJABAEQABAFAEADIAGAEIAKACIAAABIhDAAIAAgBIAKgCIAHgEQADgDABgFIABgNIAAhDIgBgNQgBgFgDgDIgHgEIgKgCIAAgCIBDAAIAAACIgKACIgGAEQgEADgBAFQgBAEAAAJIAAAhIArgmIAJgIQAAgBAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgFgFgBQgCgCgGgBIAAgCIAtAAIAAACIgIACIgHADIgOALIghAcIAvA1IAHAHQAGAHAHAEIAHAEIAJACIAAABg");
	this.shape_1168.setTransform(8.1,127);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f("#FF0000").s().p("AAUA4QgIAEgGACQgHACgHAAQgQAAgLgIQgIgGgDgHQgFgJAAgJQAAgKAFgIQAEgIAHgGQANgJAPAAQAIAAAFACQAGADAHAEIAAghQAAgKgDgEQgEgFgJAAIAAgCIAhgDIAABpQAAAJADAFQAEAFAJAAIAAACIgfADIgBgJgAgWgEQgFAEgCAIQgEAHAAAJQABAHACAIQADAHAEAGQAIAKALAAQAFgBAFgCQAEgDAEgDQADgFABgGQACgHgBgMQABgNgCgGQgBgFgEgFQgCgDgFgCQgEgCgEAAQgMAAgIAJg");
	this.shape_1169.setTransform(-64.4,127);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f("#FF0000").s().p("AAHA+IAAgBQAKgBAEgDQAGgDAAgGQAAgEgDgHIgBgDIgKgWIgtAAIgGANIgDAFQgEALgBAFQAAAEACADQACACADACQAEADAGABIAAABIguAAIAAgBQAFgBAEgCQAEgCAFgFIAGgJIAIgSIAnhWIAEAAIAuBgIAIAQQAEAEADACIAGADIAKACIAAABgAgfAJIApAAIgVgvg");
	this.shape_1170.setTransform(-77.6,127);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_143},{t:this.shape_142,p:{x:-91.4,y:130.8}},{t:this.shape_141,p:{x:-82,y:128.4}},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138,p:{x:-45.3,y:130.8}},{t:this.shape_137,p:{x:-34.2,y:130.7}},{t:this.shape_136,p:{x:-26,y:128.3}},{t:this.shape_135,p:{x:-18.9,y:130.8}},{t:this.shape_134,p:{x:-4,y:130.8}},{t:this.shape_133,p:{x:5.7,y:130.7}},{t:this.shape_132,p:{x:17,y:128.4}},{t:this.shape_131,p:{x:33.4,y:128.4}},{t:this.shape_130,p:{x:44.5,y:130.8}},{t:this.shape_129,p:{x:55.6,y:130.7}},{t:this.shape_128,p:{x:63.8,y:128.3}},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125,p:{x:-178.2,y:176}},{t:this.shape_124,p:{x:-170,y:176}},{t:this.shape_123,p:{x:-163.5,y:178.5}},{t:this.shape_122,p:{x:-151.8,y:176}},{t:this.shape_121,p:{x:-145.4,y:178.5}},{t:this.shape_120,p:{x:-131.2,y:178.5}},{t:this.shape_119,p:{x:-116.3,y:180.1}},{t:this.shape_118,p:{x:-104.9,y:176}},{t:this.shape_117,p:{x:-93.7,y:178.5}},{t:this.shape_116},{t:this.shape_115,p:{x:-77.1,y:178.5}},{t:this.shape_114,p:{x:-59.4,y:178.5}},{t:this.shape_113},{t:this.shape_112,p:{x:-44.5,y:177.4}},{t:this.shape_111,p:{x:-36.5,y:176}},{t:this.shape_110,p:{x:-20,y:176.2}},{t:this.shape_109,p:{x:-9,y:178.5}},{t:this.shape_108,p:{x:2.2,y:178.5}},{t:this.shape_107},{t:this.shape_106,p:{x:17.5,y:178.5}},{t:this.shape_105,p:{x:30.5,y:177.4}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102,p:{x:52.7,y:176}},{t:this.shape_101,p:{x:60.3,y:176}},{t:this.shape_100,p:{x:65.6,y:176}},{t:this.shape_99},{t:this.shape_98,p:{x:84.1,y:180.1}},{t:this.shape_97,p:{x:99.2,y:176}},{t:this.shape_96,p:{x:107.3,y:176}},{t:this.shape_95,p:{x:113.8,y:178.5}},{t:this.shape_94,p:{x:128.2,y:176.2}},{t:this.shape_93,p:{x:139,y:178.5}},{t:this.shape_92,p:{x:148.3,y:176.2}},{t:this.shape_91,p:{x:158.7,y:180.2}},{t:this.shape_90},{t:this.shape_89,p:{x:-46.5,y:202.4}},{t:this.shape_88},{t:this.shape_87,p:{x:-26.8,y:204}},{t:this.shape_86},{t:this.shape_85,p:{x:-0.4,y:202.4}},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82,p:{x:26,y:202.4}}]},1).to({state:[{t:this.shape_333},{t:this.shape_332,p:{x:-21.1,y:116.4}},{t:this.shape_331},{t:this.shape_330},{t:this.shape_110,p:{x:-287.8,y:137.9}},{t:this.shape_329},{t:this.shape_328,p:{x:-267.5,y:140.2}},{t:this.shape_327},{t:this.shape_326,p:{x:-246.4,y:137.8}},{t:this.shape_325},{t:this.shape_324,p:{x:-225.8,y:140.3}},{t:this.shape_323},{t:this.shape_322,p:{x:-203.1,y:137.7}},{t:this.shape_321,p:{x:-192,y:140.3}},{t:this.shape_320},{t:this.shape_319},{t:this.shape_123,p:{x:-164.2,y:140.3}},{t:this.shape_318,p:{x:-154.8,y:137.7}},{t:this.shape_317,p:{x:-145,y:140.3}},{t:this.shape_316},{t:this.shape_315,p:{x:-130.1,y:140.3}},{t:this.shape_112,p:{x:-121.9,y:139.2}},{t:this.shape_314,p:{x:-114.1,y:140.3}},{t:this.shape_313,p:{x:-102.9,y:140.2}},{t:this.shape_114,p:{x:-85.2,y:140.3}},{t:this.shape_122,p:{x:-76.2,y:137.8}},{t:this.shape_312},{t:this.shape_311,p:{x:-62.4,y:137.7}},{t:this.shape_142,p:{x:-46.4,y:140.3}},{t:this.shape_310},{t:this.shape_100,p:{x:-23.1,y:137.8}},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307,p:{x:10.6,y:137.7}},{t:this.shape_306,p:{x:17.9,y:140.3}},{t:this.shape_305},{t:this.shape_121,p:{x:43.3,y:140.3}},{t:this.shape_304},{t:this.shape_303,p:{x:66.8,y:137.8}},{t:this.shape_302,p:{x:72,y:137.7}},{t:this.shape_301,p:{x:79.4,y:140.3}},{t:this.shape_300,p:{x:94.7,y:140.3}},{t:this.shape_108,p:{x:104.4,y:140.2}},{t:this.shape_299},{t:this.shape_101,p:{x:129.2,y:137.7}},{t:this.shape_298,p:{x:136.8,y:140.3}},{t:this.shape_297,p:{x:144.8,y:140.2}},{t:this.shape_296,p:{x:153.1,y:141.9}},{t:this.shape_295,p:{x:161.9,y:140.3}},{t:this.shape_85,p:{x:177.8,y:140.3}},{t:this.shape_294,p:{x:187.2,y:140.2}},{t:this.shape_293,p:{x:196,y:137.9}},{t:this.shape_124,p:{x:204.4,y:137.8}},{t:this.shape_292,p:{x:210.2,y:139.2}},{t:this.shape_95,p:{x:216.4,y:140.3}},{t:this.shape_291,p:{x:222.7,y:143.2}},{t:this.shape_290},{t:this.shape_289,p:{x:252.9,y:140.3}},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286,p:{x:-273.7,y:164.2}},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283,p:{x:-244.2,y:164.2}},{t:this.shape_282},{t:this.shape_281,p:{x:-218.1,y:164.2}},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276,p:{x:-170.9,y:165.8}},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273,p:{x:-133.6,y:161.8}},{t:this.shape_272,p:{x:-125.2,y:161.6}},{t:this.shape_271,p:{x:-117.2,y:164.2}},{t:this.shape_270,p:{x:-106.8,y:164.2}},{t:this.shape_269},{t:this.shape_117,p:{x:-79.8,y:164.2}},{t:this.shape_268,p:{x:-68.7,y:164.2}},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265,p:{x:-42,y:164.2}},{t:this.shape_264},{t:this.shape_263,p:{x:-21.6,y:164.2}},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258,p:{x:27.9,y:164.2}},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254,p:{x:62.3,y:161.6}},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244,p:{x:142.3,y:164.2}},{t:this.shape_243},{t:this.shape_242,p:{x:157.2,y:168.4}},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238,p:{x:195,y:164.2}},{t:this.shape_237,p:{x:205.2,y:161.6}},{t:this.shape_236},{t:this.shape_235,p:{x:228.8,y:161.6}},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231,p:{x:262.3,y:164.2}},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227,p:{x:-283.4,y:185.5}},{t:this.shape_226},{t:this.shape_225,p:{x:-253.6,y:185.5}},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222,p:{x:-232.5,y:188}},{t:this.shape_221,p:{x:-218.3,y:188}},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216,p:{x:-180.4,y:188}},{t:this.shape_215,p:{x:-171.6,y:188}},{t:this.shape_214,p:{x:-165.4,y:192.2}},{t:this.shape_213,p:{x:-152.4,y:188}},{t:this.shape_212},{t:this.shape_211},{t:this.shape_120,p:{x:-115.5,y:188}},{t:this.shape_119,p:{x:-100.6,y:189.6}},{t:this.shape_89,p:{x:-89.7,y:188}},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208,p:{x:-62,y:188}},{t:this.shape_207},{t:this.shape_206,p:{x:-41.3,y:188}},{t:this.shape_205},{t:this.shape_204,p:{x:-21.6,y:188}},{t:this.shape_134,p:{x:-11.7,y:188}},{t:this.shape_203,p:{x:-1.9,y:185.5}},{t:this.shape_202,p:{x:7.9,y:188}},{t:this.shape_201},{t:this.shape_200,p:{x:24.1,y:188}},{t:this.shape_199},{t:this.shape_198,p:{x:38,y:188}},{t:this.shape_197,p:{x:44.3,y:185.5}},{t:this.shape_196},{t:this.shape_195,p:{x:57.6,y:189.6}},{t:this.shape_194},{t:this.shape_193,p:{x:79.4,y:188}},{t:this.shape_192},{t:this.shape_191,p:{x:95.6,y:188}},{t:this.shape_190,p:{x:101.9,y:191}},{t:this.shape_189,p:{x:118.6,y:185.7}},{t:this.shape_188,p:{x:132.1,y:188}},{t:this.shape_187,p:{x:148,y:185.5}},{t:this.shape_186,p:{x:158.7,y:188}},{t:this.shape_185,p:{x:166.6,y:188}},{t:this.shape_184},{t:this.shape_118,p:{x:194.5,y:185.5}},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181,p:{x:215.7,y:188}},{t:this.shape_180,p:{x:231.4,y:189.6}},{t:this.shape_179,p:{x:242.6,y:188.1}},{t:this.shape_178,p:{x:253.6,y:189.6}},{t:this.shape_177},{t:this.shape_176,p:{x:267.2,y:185.5}},{t:this.shape_175,p:{x:273.7,y:188}},{t:this.shape_174},{t:this.shape_125,p:{x:-185.9,y:209.4}},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170,p:{x:-146.4,y:209.4}},{t:this.shape_169,p:{x:-139.9,y:211.9}},{t:this.shape_168,p:{x:-131.2,y:211.9}},{t:this.shape_167,p:{x:-121.6,y:213.5}},{t:this.shape_166,p:{x:-110.4,y:213.5}},{t:this.shape_165,p:{x:-99.8,y:211.9}},{t:this.shape_164},{t:this.shape_163,p:{x:-81.9,y:211.9}},{t:this.shape_162,p:{x:-66.2,y:211.9}},{t:this.shape_97,p:{x:-54.1,y:209.4}},{t:this.shape_161,p:{x:-43.8,y:211.9}},{t:this.shape_160,p:{x:-33.3,y:211.9}},{t:this.shape_111,p:{x:-16.7,y:209.4}},{t:this.shape_159,p:{x:-6.4,y:211.9}},{t:this.shape_158},{t:this.shape_157,p:{x:12.9,y:211.9}},{t:this.shape_156,p:{x:25.9,y:211.9}},{t:this.shape_155,p:{x:34.4,y:211.9}},{t:this.shape_154},{t:this.shape_153},{t:this.shape_130,p:{x:57.5,y:211.9}},{t:this.shape_152,p:{x:68.5,y:212}},{t:this.shape_151,p:{x:77.9,y:211.9}},{t:this.shape_115,p:{x:92.6,y:211.9}},{t:this.shape_150,p:{x:101.9,y:211.9}},{t:this.shape_149,p:{x:116,y:211.9}},{t:this.shape_148,p:{x:125.7,y:211.9}},{t:this.shape_147,p:{x:135.9,y:213.5}},{t:this.shape_146,p:{x:143.9,y:211.9}},{t:this.shape_145,p:{x:152.1,y:213.6}},{t:this.shape_144,p:{x:159,y:214.9}}]},1).to({state:[{t:this.shape_493},{t:this.shape_492},{t:this.shape_491,p:{x:-22.4,y:116.8}},{t:this.shape_270,p:{x:-12.8,y:116.8}},{t:this.shape_178,p:{x:-2.4,y:118.4}},{t:this.shape_490,p:{x:8.1,y:116.8}},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487,p:{x:-280.2,y:138.1}},{t:this.shape_244,p:{x:-269.9,y:140.6}},{t:this.shape_486,p:{x:-259.4}},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483,p:{x:-226.8,y:139.5}},{t:this.shape_322,p:{x:-218.8,y:138.1}},{t:this.shape_482,p:{x:-210.7,y:138.1}},{t:this.shape_481,p:{x:-202.4,y:140.6}},{t:this.shape_480,p:{x:-188.3,y:139.5}},{t:this.shape_311,p:{x:-180.3,y:138.1}},{t:this.shape_479,p:{x:-170.8,y:140.6}},{t:this.shape_317,p:{x:-162.5,y:140.6}},{t:this.shape_301,p:{x:-152.8,y:140.6}},{t:this.shape_94,p:{x:-137.3,y:138.3}},{t:this.shape_478,p:{x:-129,y:138.1}},{t:this.shape_477},{t:this.shape_476,p:{x:-110.7,y:140.6}},{t:this.shape_475},{t:this.shape_169,p:{x:-91.7,y:140.6}},{t:this.shape_115,p:{x:-77.1,y:140.6}},{t:this.shape_474,p:{x:-67.5,y:138.1}},{t:this.shape_473,p:{x:-55.1,y:140.6}},{t:this.shape_166,p:{x:-40.2,y:142.2}},{t:this.shape_472,p:{x:-31.8,y:138.1}},{t:this.shape_120,p:{x:-24.1,y:140.6}},{t:this.shape_91,p:{x:-15.4,y:142.3}},{t:this.shape_471},{t:this.shape_470,p:{x:2.4}},{t:this.shape_469,p:{x:8.5,y:144.8}},{t:this.shape_468,p:{x:21.5,y:140.6}},{t:this.shape_467,p:{x:35.5,y:140.6}},{t:this.shape_466,p:{x:43.8}},{t:this.shape_306,p:{x:52.1,y:140.6}},{t:this.shape_181,p:{x:61.8,y:140.6}},{t:this.shape_465},{t:this.shape_464,p:{x:82.7,y:140.6}},{t:this.shape_463,p:{x:91.4,y:140.6}},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460,p:{x:121.4,y:138.1}},{t:this.shape_459,p:{x:126.6,y:138.1}},{t:this.shape_157,p:{x:138.4,y:140.6}},{t:this.shape_458,p:{x:145.4,y:139.5}},{t:this.shape_457,p:{x:153.3}},{t:this.shape_456},{t:this.shape_455,p:{x:184,y:140.6}},{t:this.shape_454,p:{x:198.1,y:140.6}},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451,p:{x:223.4,y:140.6}},{t:this.shape_450,p:{x:233.6,y:142.2}},{t:this.shape_449},{t:this.shape_187,p:{x:253.8,y:138.1}},{t:this.shape_448,p:{x:262}},{t:this.shape_156,p:{x:268.5,y:140.6}},{t:this.shape_151,p:{x:276.1,y:140.6}},{t:this.shape_447,p:{x:-294.8,y:162}},{t:this.shape_446,p:{x:-286.6,y:164.5}},{t:this.shape_445,p:{x:-275.6,y:164.6}},{t:this.shape_444,p:{x:-264.3}},{t:this.shape_443,p:{x:-256.2,y:162}},{t:this.shape_442,p:{x:-249}},{t:this.shape_441,p:{x:-242.2,y:168.7}},{t:this.shape_215,p:{x:-230.4,y:164.5}},{t:this.shape_440},{t:this.shape_142,p:{x:-216,y:164.5}},{t:this.shape_439,p:{x:-208}},{t:this.shape_438,p:{x:-201.2,y:163.4}},{t:this.shape_437},{t:this.shape_302,p:{x:-184.9,y:162}},{t:this.shape_436},{t:this.shape_206,p:{x:-169.3,y:164.5}},{t:this.shape_227,p:{x:-159.9,y:162}},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429,p:{x:-84.2}},{t:this.shape_428,p:{x:-76}},{t:this.shape_427},{t:this.shape_307,p:{x:-61.9,y:162}},{t:this.shape_89,p:{x:-54.2,y:164.5}},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424,p:{x:-33.7,y:164.5}},{t:this.shape_423},{t:this.shape_422,p:{x:-16.8,y:168.7}},{t:this.shape_421,p:{x:-3.8,y:164.5}},{t:this.shape_420,p:{x:5.9}},{t:this.shape_419},{t:this.shape_418,p:{x:32.8,y:164.5}},{t:this.shape_417},{t:this.shape_416,p:{x:52.7,y:166.1}},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_295,p:{x:90.8,y:164.5}},{t:this.shape_93,p:{x:106.1,y:164.5}},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409,p:{x:135.3,y:164.5}},{t:this.shape_408},{t:this.shape_291,p:{x:157.5,y:167.5}},{t:this.shape_407},{t:this.shape_200,p:{x:179.9,y:164.5}},{t:this.shape_265,p:{x:188.4,y:164.5}},{t:this.shape_406},{t:this.shape_405,p:{x:207.8,y:164.5}},{t:this.shape_404,p:{x:218.9}},{t:this.shape_132,p:{x:230.3,y:162.2}},{t:this.shape_198,p:{x:239.6,y:164.5}},{t:this.shape_190,p:{x:245.9,y:167.5}},{t:this.shape_403},{t:this.shape_402,p:{x:-291.2,y:188.4}},{t:this.shape_401,p:{x:-282.9}},{t:this.shape_315,p:{x:-274.5,y:188.4}},{t:this.shape_222,p:{x:-264.9,y:188.4}},{t:this.shape_400,p:{x:-254.5,y:190}},{t:this.shape_159,p:{x:-244,y:188.4}},{t:this.shape_399,p:{x:-235.2}},{t:this.shape_398},{t:this.shape_191,p:{x:-224.8,y:188.4}},{t:this.shape_397},{t:this.shape_396,p:{x:-199.7,y:188.4}},{t:this.shape_395},{t:this.shape_130,p:{x:-183.7,y:188.4}},{t:this.shape_137,p:{x:-172.5,y:188.3}},{t:this.shape_394},{t:this.shape_393,p:{x:-154.6}},{t:this.shape_392,p:{x:-149.6,y:185.9}},{t:this.shape_391,p:{x:-141.5,y:188.4}},{t:this.shape_133,p:{x:-130.3,y:188.3}},{t:this.shape_390,p:{x:-114.9,y:188.4}},{t:this.shape_389,p:{x:-105.4,y:188.4}},{t:this.shape_129,p:{x:-95.7,y:188.3}},{t:this.shape_388},{t:this.shape_161,p:{x:-69,y:188.4}},{t:this.shape_125,p:{x:-53.1,y:185.8}},{t:this.shape_286,p:{x:-42.4,y:188.4}},{t:this.shape_387,p:{x:-35.7,y:185.8}},{t:this.shape_386},{t:this.shape_193,p:{x:-22.8,y:188.4}},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_118,p:{x:26.5,y:185.8}},{t:this.shape_258,p:{x:36.9,y:188.4}},{t:this.shape_381,p:{x:52.6,y:190}},{t:this.shape_197,p:{x:61,y:185.8}},{t:this.shape_380},{t:this.shape_145,p:{x:77.4,y:190}},{t:this.shape_216,p:{x:86.5,y:188.4}},{t:this.shape_379,p:{x:95.2}},{t:this.shape_378,p:{x:108.9,y:190}},{t:this.shape_377},{t:this.shape_376},{t:this.shape_185,p:{x:132.1,y:188.4}},{t:this.shape_109,p:{x:146.7,y:188.4}},{t:this.shape_375,p:{x:157.7,y:188.4}},{t:this.shape_374},{t:this.shape_314,p:{x:179.8,y:188.4}},{t:this.shape_373,p:{x:189.3}},{t:this.shape_372},{t:this.shape_111,p:{x:207.9,y:185.8}},{t:this.shape_204,p:{x:218.2,y:188.4}},{t:this.shape_293,p:{x:233.8,y:186}},{t:this.shape_101,p:{x:242.1,y:185.8}},{t:this.shape_371,p:{x:249.8,y:188.4}},{t:this.shape_175,p:{x:257.8,y:188.4}},{t:this.shape_370},{t:this.shape_297,p:{x:-297.9,y:212.2}},{t:this.shape_369,p:{x:-289.3,y:212.3}},{t:this.shape_368},{t:this.shape_367,p:{x:-271.3}},{t:this.shape_366,p:{x:-263.3,y:212.3}},{t:this.shape_121,p:{x:-253.8,y:212.3}},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363,p:{x:-217.2,y:209.9}},{t:this.shape_362},{t:this.shape_85,p:{x:-200.7,y:212.3}},{t:this.shape_361},{t:this.shape_360},{t:this.shape_95,p:{x:-171.6,y:212.3}},{t:this.shape_359},{t:this.shape_358,p:{x:-159.1,y:216.5}},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355,p:{x:-130.3,y:212.3}},{t:this.shape_354,p:{x:-123.2,y:209.7}},{t:this.shape_353},{t:this.shape_352},{t:this.shape_124,p:{x:-95.8,y:209.8}},{t:this.shape_328,p:{x:-87.5,y:212.2}},{t:this.shape_351,p:{x:-77.3,y:213.9}},{t:this.shape_350,p:{x:-62.6,y:209.9}},{t:this.shape_349},{t:this.shape_348},{t:this.shape_313,p:{x:-26.2,y:212.2}},{t:this.shape_347,p:{x:-15,y:212.3}},{t:this.shape_346,p:{x:-5,y:212.3}},{t:this.shape_345,p:{x:5.1,y:209.7}},{t:this.shape_326,p:{x:12.8,y:209.8}},{t:this.shape_108,p:{x:21,y:212.2}},{t:this.shape_296,p:{x:31.2,y:213.9}},{t:this.shape_344,p:{x:46,y:209.9}},{t:this.shape_324,p:{x:56.8,y:212.3}},{t:this.shape_343,p:{x:65.4,y:212.3}},{t:this.shape_342,p:{x:75.5,y:209.7}},{t:this.shape_292,p:{x:89.2,y:211.2}},{t:this.shape_97,p:{x:97.2,y:209.7}},{t:this.shape_341,p:{x:107.5,y:212.3}},{t:this.shape_82,p:{x:122.3,y:212.3}},{t:this.shape_294,p:{x:130.6,y:212.2}},{t:this.shape_188,p:{x:138.9,y:212.3}},{t:this.shape_165,p:{x:148.6,y:212.3}},{t:this.shape_180,p:{x:158.9,y:213.9}},{t:this.shape_340,p:{x:169.4,y:212.3}},{t:this.shape_339},{t:this.shape_138,p:{x:192.7,y:212.3}},{t:this.shape_338},{t:this.shape_318,p:{x:216.8,y:209.7}},{t:this.shape_337},{t:this.shape_336,p:{x:229.6,y:209.7}},{t:this.shape_335,p:{x:234.8,y:209.7}},{t:this.shape_96,p:{x:240.1,y:209.8}},{t:this.shape_334,p:{x:248.3}},{t:this.shape_147,p:{x:258.5,y:213.9}},{t:this.shape_303,p:{x:270.6,y:209.8}}]},1).to({state:[{t:this.shape_580},{t:this.shape_478,p:{x:-43.5,y:114.2}},{t:this.shape_375,p:{x:-35.4,y:116.8}},{t:this.shape_483,p:{x:-26.6,y:115.7}},{t:this.shape_579},{t:this.shape_578,p:{x:-13.9,y:116.8}},{t:this.shape_479,p:{x:-5.2,y:116.7}},{t:this.shape_577,p:{x:2.3,y:116.8}},{t:this.shape_576,p:{x:11.7,y:114.2}},{t:this.shape_575},{t:this.shape_574},{t:this.shape_387,p:{x:-295.4,y:138.1}},{t:this.shape_573},{t:this.shape_572},{t:this.shape_480,p:{x:-272.9,y:139.5}},{t:this.shape_571,p:{x:-265.8,y:140.6}},{t:this.shape_470,p:{x:-257.1}},{t:this.shape_570,p:{x:-249.6,y:140.6}},{t:this.shape_569,p:{x:-240.2,y:138.1}},{t:this.shape_568},{t:this.shape_567},{t:this.shape_169,p:{x:-211.3,y:140.6}},{t:this.shape_566,p:{x:-197.1,y:140.6}},{t:this.shape_565},{t:this.shape_418,p:{x:-176.9,y:140.6}},{t:this.shape_564,p:{x:-163.4,y:140.6}},{t:this.shape_369,p:{x:-149.8,y:140.6}},{t:this.shape_354,p:{x:-143,y:138.1}},{t:this.shape_563},{t:this.shape_562},{t:this.shape_301,p:{x:-108.3,y:140.6}},{t:this.shape_561},{t:this.shape_263,p:{x:-89.5,y:140.6}},{t:this.shape_157,p:{x:-81.6,y:140.6}},{t:this.shape_560},{t:this.shape_156,p:{x:-63,y:140.6}},{t:this.shape_400,p:{x:-48.4,y:142.2}},{t:this.shape_457,p:{x:-37.1}},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554,p:{x:36.4,y:140.6}},{t:this.shape_486,p:{x:47.5}},{t:this.shape_553,p:{x:57.8,y:140.6}},{t:this.shape_117,p:{x:73.7,y:140.6}},{t:this.shape_474,p:{x:83.2,y:138.1}},{t:this.shape_552,p:{x:93.8,y:139.5}},{t:this.shape_551,p:{x:101.8,y:138.1}},{t:this.shape_491,p:{x:112.1,y:140.6}},{t:this.shape_455,p:{x:131,y:140.6}},{t:this.shape_550,p:{x:144.6,y:140.6}},{t:this.shape_448,p:{x:151.3}},{t:this.shape_451,p:{x:159.6,y:140.6}},{t:this.shape_467,p:{x:175,y:140.6}},{t:this.shape_549,p:{x:185.1,y:138.1}},{t:this.shape_548,p:{x:195.7,y:140.6}},{t:this.shape_466,p:{x:203.7}},{t:this.shape_547,p:{x:212.3,y:140.6}},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544,p:{x:235.7,y:140.6}},{t:this.shape_463,p:{x:244.5,y:140.6}},{t:this.shape_151,p:{x:251.9,y:140.6}},{t:this.shape_454,p:{x:266.5,y:140.6}},{t:this.shape_543,p:{x:276.1,y:138.1}},{t:this.shape_542},{t:this.shape_442,p:{x:-280.1}},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_307,p:{x:-238.3,y:162}},{t:this.shape_315,p:{x:-230.9,y:164.5}},{t:this.shape_537},{t:this.shape_391,p:{x:-202.7,y:164.5}},{t:this.shape_428,p:{x:-191.6}},{t:this.shape_145,p:{x:-181.4,y:166.2}},{t:this.shape_536},{t:this.shape_439,p:{x:-156.2}},{t:this.shape_128,p:{x:-150,y:162}},{t:this.shape_289,p:{x:-142.6,y:164.5}},{t:this.shape_420,p:{x:-132.1}},{t:this.shape_444,p:{x:-120.7}},{t:this.shape_221,p:{x:-111.5,y:164.5}},{t:this.shape_487,p:{x:-102.1,y:162}},{t:this.shape_535},{t:this.shape_276,p:{x:-85.8,y:166.1}},{t:this.shape_429,p:{x:-72.1}},{t:this.shape_215,p:{x:-65.6,y:164.5}},{t:this.shape_534},{t:this.shape_134,p:{x:-32.4,y:164.5}},{t:this.shape_533},{t:this.shape_392,p:{x:-16.9,y:162}},{t:this.shape_238,p:{x:-9.7,y:164.5}},{t:this.shape_190,p:{x:-2.7,y:167.5}},{t:this.shape_131,p:{x:10.9,y:162.2}},{t:this.shape_322,p:{x:22,y:162}},{t:this.shape_258,p:{x:32.4,y:164.5}},{t:this.shape_197,p:{x:45.2,y:162}},{t:this.shape_532},{t:this.shape_531},{t:this.shape_244,p:{x:66.7,y:164.5}},{t:this.shape_206,p:{x:75.5,y:164.5}},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_200,p:{x:124.7,y:164.5}},{t:this.shape_527},{t:this.shape_526,p:{x:150.6,y:164.5}},{t:this.shape_460,p:{x:157.4,y:162}},{t:this.shape_459,p:{x:162.6,y:162}},{t:this.shape_135,p:{x:175.1,y:164.5}},{t:this.shape_138,p:{x:185.1,y:164.5}},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523,p:{x:206.8,y:164.5}},{t:this.shape_450,p:{x:215.6,y:166.1}},{t:this.shape_341,p:{x:224.5,y:164.5}},{t:this.shape_404,p:{x:240.3}},{t:this.shape_204,p:{x:250.6,y:164.5}},{t:this.shape_324,p:{x:260.6,y:164.5}},{t:this.shape_522},{t:this.shape_438,p:{x:-303.4,y:187.3}},{t:this.shape_311,p:{x:-295.4,y:185.8}},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_222,p:{x:-247.8,y:188.4}},{t:this.shape_518},{t:this.shape_517},{t:this.shape_409,p:{x:-225.6,y:188.3}},{t:this.shape_181,p:{x:-217.2,y:188.4}},{t:this.shape_464,p:{x:-207.6,y:188.4}},{t:this.shape_516},{t:this.shape_130,p:{x:-180.1,y:188.4}},{t:this.shape_401,p:{x:-170.7}},{t:this.shape_396,p:{x:-162.4,y:188.4}},{t:this.shape_198,p:{x:-153.6,y:188.4}},{t:this.shape_515},{t:this.shape_421,p:{x:-133.9,y:188.4}},{t:this.shape_137,p:{x:-124.2,y:188.3}},{t:this.shape_514},{t:this.shape_393,p:{x:-98.8}},{t:this.shape_513,p:{x:-91.4,y:188.4}},{t:this.shape_512,p:{x:-81.6,y:185.8}},{t:this.shape_511},{t:this.shape_191,p:{x:-63,y:188.4}},{t:this.shape_510,p:{x:-49.4,y:188.4}},{t:this.shape_213,p:{x:-39.9,y:188.4}},{t:this.shape_399,p:{x:-32}},{t:this.shape_509,p:{x:-23.6,y:188.4}},{t:this.shape_347,p:{x:-7.8,y:188.4}},{t:this.shape_373,p:{x:1.7}},{t:this.shape_283,p:{x:14.1,y:188.4}},{t:this.shape_133,p:{x:23.9,y:188.3}},{t:this.shape_136,p:{x:32,y:185.9}},{t:this.shape_508},{t:this.shape_120,p:{x:56.9,y:188.4}},{t:this.shape_336,p:{x:63.6,y:185.8}},{t:this.shape_185,p:{x:70,y:188.4}},{t:this.shape_214,p:{x:76.3,y:192.6}},{t:this.shape_507},{t:this.shape_111,p:{x:95.4,y:185.8}},{t:this.shape_490,p:{x:105.8,y:188.4}},{t:this.shape_506},{t:this.shape_268,p:{x:138.8,y:188.4}},{t:this.shape_175,p:{x:148.2,y:188.4}},{t:this.shape_505},{t:this.shape_381,p:{x:168.3,y:190}},{t:this.shape_379,p:{x:177.9}},{t:this.shape_115,p:{x:187.1,y:188.4}},{t:this.shape_504},{t:this.shape_503},{t:this.shape_424,p:{x:220.6,y:188.3}},{t:this.shape_216,p:{x:230.9,y:188.4}},{t:this.shape_129,p:{x:241.4,y:188.3}},{t:this.shape_502},{t:this.shape_501,p:{x:263.5,y:188.4}},{t:this.shape_500},{t:this.shape_227,p:{x:-156.8,y:209.7}},{t:this.shape_499,p:{x:-146.5,y:212.3}},{t:this.shape_297,p:{x:-137.7,y:212.2}},{t:this.shape_346,p:{x:-124.3,y:212.3}},{t:this.shape_118,p:{x:-114.2,y:209.7}},{t:this.shape_142,p:{x:-103.5,y:212.3}},{t:this.shape_294,p:{x:-95.6,y:212.2}},{t:this.shape_351,p:{x:-87.3,y:213.9}},{t:this.shape_265,p:{x:-78.4,y:212.3}},{t:this.shape_95,p:{x:-69.7,y:212.3}},{t:this.shape_273,p:{x:-55.3,y:209.9}},{t:this.shape_193,p:{x:-44.8,y:212.3}},{t:this.shape_367,p:{x:-37.3}},{t:this.shape_313,p:{x:-29.1,y:212.2}},{t:this.shape_296,p:{x:-18.8,y:213.9}},{t:this.shape_498},{t:this.shape_497},{t:this.shape_147,p:{x:21.4,y:213.9}},{t:this.shape_165,p:{x:30.2,y:212.3}},{t:this.shape_335,p:{x:37.7,y:209.7}},{t:this.shape_105,p:{x:49,y:211.2}},{t:this.shape_97,p:{x:57,y:209.7}},{t:this.shape_340,p:{x:67.3,y:212.3}},{t:this.shape_496,p:{x:82.8,y:209.9}},{t:this.shape_495},{t:this.shape_334,p:{x:105.2}},{t:this.shape_108,p:{x:116.4,y:212.2}},{t:this.shape_494}]},1).to({state:[{t:this.shape_691},{t:this.shape_690,p:{x:-31.8,y:120.2}},{t:this.shape_445,p:{x:-22.7,y:120.3}},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685,p:{x:-283.7,y:144.1}},{t:this.shape_271,p:{x:-274.7,y:144.2}},{t:this.shape_509,p:{x:-264.4,y:144.1}},{t:this.shape_684},{t:this.shape_109,p:{x:-243,y:144.1}},{t:this.shape_225,p:{x:-226.4,y:141.6}},{t:this.shape_683},{t:this.shape_682,p:{x:-211.8,y:144.1}},{t:this.shape_681},{t:this.shape_680,p:{x:-186.5,y:144.1}},{t:this.shape_679},{t:this.shape_499,p:{x:-160.4,y:144.1}},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676,p:{x:-125.1,y:144.1}},{t:this.shape_675},{t:this.shape_674,p:{x:-101.9,y:144.1}},{t:this.shape_673},{t:this.shape_672,p:{x:-77.5,y:145.8}},{t:this.shape_101,p:{x:-65.2,y:141.6}},{t:this.shape_671},{t:this.shape_670,p:{x:-52.9,y:144.1}},{t:this.shape_317,p:{x:-43.7,y:144.1}},{t:this.shape_669,p:{x:-35,y:144.1}},{t:this.shape_668,p:{x:-20.3,y:144.1}},{t:this.shape_152,p:{x:-9.4,y:144.2}},{t:this.shape_667,p:{x:-0.5,y:143}},{t:this.shape_569,p:{x:12.8,y:141.6}},{t:this.shape_666},{t:this.shape_665,p:{x:27.5,y:144.1}},{t:this.shape_664},{t:this.shape_120,p:{x:52.8,y:144.1}},{t:this.shape_663},{t:this.shape_577,p:{x:69.7,y:144.1}},{t:this.shape_662},{t:this.shape_661,p:{x:94.6,y:141.6}},{t:this.shape_660,p:{x:100.5,y:143}},{t:this.shape_187,p:{x:108.5,y:141.6}},{t:this.shape_89,p:{x:124.5,y:144.1}},{t:this.shape_570,p:{x:137.8,y:144.1}},{t:this.shape_405,p:{x:147.1,y:144.1}},{t:this.shape_281,p:{x:158.1,y:144.2}},{t:this.shape_659,p:{x:167.5,y:144.1}},{t:this.shape_658},{t:this.shape_270,p:{x:192.4,y:144.1}},{t:this.shape_657},{t:this.shape_130,p:{x:214.1,y:144.1}},{t:this.shape_169,p:{x:223.5,y:144.1}},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653,p:{x:248.8,y:144.1}},{t:this.shape_652,p:{x:259.9,y:144.1}},{t:this.shape_144,p:{x:268.1,y:147.1}},{t:this.shape_651},{t:this.shape_551,p:{x:-249.7,y:165.5}},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648,p:{x:-220.2,y:168.1}},{t:this.shape_351,p:{x:-209.9,y:169.6}},{t:this.shape_549,p:{x:-200.2,y:165.5}},{t:this.shape_647,p:{x:-189,y:168}},{t:this.shape_375,p:{x:-178,y:168.1}},{t:this.shape_646},{t:this.shape_645},{t:this.shape_314,p:{x:-138.8,y:168}},{t:this.shape_231,p:{x:-129.4,y:168}},{t:this.shape_644},{t:this.shape_321,p:{x:-109.2,y:168}},{t:this.shape_643},{t:this.shape_642},{t:this.shape_487,p:{x:-81,y:165.5}},{t:this.shape_159,p:{x:-70.7,y:168}},{t:this.shape_641},{t:this.shape_640},{t:this.shape_478,p:{x:-46.6,y:165.5}},{t:this.shape_639},{t:this.shape_638},{t:this.shape_322,p:{x:-10.7,y:165.5}},{t:this.shape_396,p:{x:-0.4,y:168}},{t:this.shape_195,p:{x:15.3,y:169.6}},{t:this.shape_637,p:{x:26.7,y:168}},{t:this.shape_636,p:{x:36.1,y:168}},{t:this.shape_635},{t:this.shape_634,p:{x:49.1,y:168}},{t:this.shape_633,p:{x:57.7,y:168}},{t:this.shape_632},{t:this.shape_221,p:{x:74.6,y:168}},{t:this.shape_631,p:{x:89.3,y:168}},{t:this.shape_193,p:{x:99.6,y:168}},{t:this.shape_147,p:{x:109.2,y:169.6}},{t:this.shape_332,p:{x:118.4,y:168}},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_340,p:{x:146.9,y:168}},{t:this.shape_469,p:{x:154.3,y:172.2}},{t:this.shape_547,p:{x:167.3,y:168}},{t:this.shape_627,p:{x:177,y:168}},{t:this.shape_626},{t:this.shape_216,p:{x:203.9,y:168}},{t:this.shape_625},{t:this.shape_155,p:{x:222.5,y:168}},{t:this.shape_624},{t:this.shape_286,p:{x:-287.7,y:191.9}},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621,p:{x:-261.8,y:191.9}},{t:this.shape_98,p:{x:-253,y:193.5}},{t:this.shape_620,p:{x:-243.3,y:191.9}},{t:this.shape_619,p:{x:-232.2,y:191.8}},{t:this.shape_618},{t:this.shape_215,p:{x:-217.6,y:191.9}},{t:this.shape_617},{t:this.shape_616},{t:this.shape_467,p:{x:-198.5,y:191.9}},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613,p:{x:-170.6,y:191.9}},{t:this.shape_612},{t:this.shape_611},{t:this.shape_206,p:{x:-151.9,y:191.9}},{t:this.shape_242,p:{x:-145.7,y:196.1}},{t:this.shape_200,p:{x:-133.9,y:191.9}},{t:this.shape_366,p:{x:-124.7,y:191.9}},{t:this.shape_343,p:{x:-114.6,y:191.9}},{t:this.shape_311,p:{x:-104.5,y:189.3}},{t:this.shape_213,p:{x:-88.5,y:191.9}},{t:this.shape_198,p:{x:-80.6,y:191.9}},{t:this.shape_94,p:{x:-66.2,y:189.5}},{t:this.shape_244,p:{x:-55.7,y:191.9}},{t:this.shape_610},{t:this.shape_609},{t:this.shape_378,p:{x:-29.7,y:193.5}},{t:this.shape_268,p:{x:-14.7,y:191.9}},{t:this.shape_608},{t:this.shape_315,p:{x:4.5,y:191.9}},{t:this.shape_607},{t:this.shape_606,p:{x:19.4,y:189.3}},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_181,p:{x:70.8,y:191.9}},{t:this.shape_601},{t:this.shape_191,p:{x:99.8,y:191.9}},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598,p:{x:124.7,y:191.9}},{t:this.shape_597},{t:this.shape_596,p:{x:144.9,y:191.8}},{t:this.shape_595,p:{x:154,y:191.9}},{t:this.shape_594},{t:this.shape_593},{t:this.shape_227,p:{x:193.3,y:189.3}},{t:this.shape_592},{t:this.shape_185,p:{x:208,y:191.9}},{t:this.shape_591,p:{x:214.2,y:196.1}},{t:this.shape_118,p:{x:227.8,y:189.3}},{t:this.shape_165,p:{x:238.1,y:191.9}},{t:this.shape_590},{t:this.shape_175,p:{x:257.5,y:191.9}},{t:this.shape_589},{t:this.shape_161,p:{x:-231,y:215.8}},{t:this.shape_588,p:{x:-222.3,y:215.7}},{t:this.shape_97,p:{x:-213,y:213.2}},{t:this.shape_369,p:{x:-202.4,y:215.8}},{t:this.shape_400,p:{x:-192.9,y:217.4}},{t:this.shape_157,p:{x:-183.2,y:215.8}},{t:this.shape_552,p:{x:-170.9,y:214.7}},{t:this.shape_125,p:{x:-162.9,y:213.2}},{t:this.shape_258,p:{x:-152.6,y:215.8}},{t:this.shape_564,p:{x:-133.7,y:215.7}},{t:this.shape_454,p:{x:-119.6,y:215.8}},{t:this.shape_156,p:{x:-110.2,y:215.8}},{t:this.shape_587},{t:this.shape_346,p:{x:-91,y:215.8}},{t:this.shape_93,p:{x:-81.5,y:215.8}},{t:this.shape_416,p:{x:-71.9,y:217.4}},{t:this.shape_324,p:{x:-61.1,y:215.8}},{t:this.shape_350,p:{x:-51.8,y:213.4}},{t:this.shape_387,p:{x:-43.4,y:213.2}},{t:this.shape_204,p:{x:-36,y:215.8}},{t:this.shape_263,p:{x:-20.7,y:215.8}},{t:this.shape_451,p:{x:-11,y:215.7}},{t:this.shape_586},{t:this.shape_106,p:{x:15.7,y:215.8}},{t:this.shape_85,p:{x:25.7,y:215.8}},{t:this.shape_455,p:{x:39.8,y:215.7}},{t:this.shape_178,p:{x:53.8,y:217.4}},{t:this.shape_490,p:{x:64.4,y:215.8}},{t:this.shape_458,p:{x:72.5,y:214.7}},{t:this.shape_295,p:{x:79.6,y:215.8}},{t:this.shape_481,p:{x:90.1,y:215.7}},{t:this.shape_585},{t:this.shape_138,p:{x:112.2,y:215.8}},{t:this.shape_474,p:{x:121.7,y:213.2}},{t:this.shape_584,p:{x:132.3,y:214.7}},{t:this.shape_111,p:{x:140.3,y:213.2}},{t:this.shape_583,p:{x:150.6,y:215.8}},{t:this.shape_582},{t:this.shape_581},{t:this.shape_134,p:{x:190.4,y:215.8}},{t:this.shape_463,p:{x:198.3,y:215.7}},{t:this.shape_543,p:{x:205.9,y:213.2}},{t:this.shape_151,p:{x:211.8,y:215.8}}]},1).to({state:[{t:this.shape_786},{t:this.shape_785},{t:this.shape_400,p:{x:-23.2,y:119}},{t:this.shape_87,p:{x:-12.8,y:119.1}},{t:this.shape_784},{t:this.shape_783,p:{x:4.4,y:117.5}},{t:this.shape_669,p:{x:13.8,y:117.4}},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_375,p:{x:-255.9,y:141.3}},{t:this.shape_665,p:{x:-246.4,y:141.3}},{t:this.shape_777},{t:this.shape_577,p:{x:-228.3,y:141.3}},{t:this.shape_776,p:{x:-214.1,y:141.3}},{t:this.shape_775,p:{x:-201.4}},{t:this.shape_774,p:{x:-194,y:141.3}},{t:this.shape_773,p:{x:-187.3,y:138.7}},{t:this.shape_478,p:{x:-182.1,y:138.7}},{t:this.shape_772,p:{x:-177,y:145.5}},{t:this.shape_119,p:{x:-163.6,y:142.9}},{t:this.shape_315,p:{x:-153,y:141.3}},{t:this.shape_771,p:{x:-144.3,y:141.2}},{t:this.shape_118,p:{x:-135,y:138.7}},{t:this.shape_168,p:{x:-124.4,y:141.3}},{t:this.shape_166,p:{x:-114.9,y:142.9}},{t:this.shape_570,p:{x:-105.2,y:141.3}},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_391,p:{x:-55.5,y:141.3}},{t:this.shape_766,p:{x:-41.4}},{t:this.shape_765},{t:this.shape_390,p:{x:-23.1,y:141.3}},{t:this.shape_613,p:{x:-13.6,y:141.3}},{t:this.shape_460,p:{x:-6.9,y:138.7}},{t:this.shape_336,p:{x:-1.7,y:138.7}},{t:this.shape_764,p:{x:5.6,y:142.9}},{t:this.shape_763},{t:this.shape_762,p:{x:26.1}},{t:this.shape_761},{t:this.shape_82,p:{x:45.3,y:141.3}},{t:this.shape_760},{t:this.shape_445,p:{x:64.1,y:141.3}},{t:this.shape_759,p:{x:73.6,y:141.2}},{t:this.shape_149,p:{x:82.2,y:141.3}},{t:this.shape_758},{t:this.shape_757,p:{x:96.6,y:141.3}},{t:this.shape_169,p:{x:110.8,y:141.3}},{t:this.shape_342,p:{x:120.2,y:138.7}},{t:this.shape_341,p:{x:130,y:141.3}},{t:this.shape_307,p:{x:137.5,y:138.7}},{t:this.shape_258,p:{x:144.9,y:141.3}},{t:this.shape_756},{t:this.shape_501,p:{x:160.9,y:141.3}},{t:this.shape_755,p:{x:172}},{t:this.shape_162,p:{x:189.7,y:141.3}},{t:this.shape_170,p:{x:198.7,y:138.8}},{t:this.shape_754},{t:this.shape_97,p:{x:212.6,y:138.7}},{t:this.shape_753},{t:this.shape_157,p:{x:241.9,y:141.3}},{t:this.shape_318,p:{x:251.3,y:138.7}},{t:this.shape_752},{t:this.shape_447,p:{x:270,y:138.7}},{t:this.shape_443,p:{x:275.2,y:138.7}},{t:this.shape_751,p:{x:-300.1}},{t:this.shape_268,p:{x:-286,y:165.2}},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_204,p:{x:-244.4,y:165.2}},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745,p:{x:-223.9}},{t:this.shape_238,p:{x:-216.7,y:165.2}},{t:this.shape_550,p:{x:-207.3,y:165.2}},{t:this.shape_744,p:{x:-200.5,y:162.6}},{t:this.shape_743},{t:this.shape_742,p:{x:-177.8,y:165.1}},{t:this.shape_741},{t:this.shape_296,p:{x:-150.9,y:166.8}},{t:this.shape_244,p:{x:-142.1,y:165.2}},{t:this.shape_314,p:{x:-131.6,y:165.2}},{t:this.shape_740,p:{x:-117.5}},{t:this.shape_340,p:{x:-104.2,y:165.2}},{t:this.shape_739},{t:this.shape_738,p:{x:-89.8,y:165.1}},{t:this.shape_737,p:{x:-83.6}},{t:this.shape_476,p:{x:-76.5,y:165.2}},{t:this.shape_736},{t:this.shape_235,p:{x:-55.5,y:162.6}},{t:this.shape_621,p:{x:-44.9,y:165.2}},{t:this.shape_735,p:{x:-35.1,y:165.1}},{t:this.shape_225,p:{x:-18.6,y:162.6}},{t:this.shape_734},{t:this.shape_231,p:{x:-3.9,y:165.2}},{t:this.shape_344,p:{x:10.4,y:162.8}},{t:this.shape_733,p:{x:20,y:165.1}},{t:this.shape_554,p:{x:29.2,y:165.2}},{t:this.shape_732},{t:this.shape_187,p:{x:46,y:162.6}},{t:this.shape_731,p:{x:56.3,y:165.2}},{t:this.shape_730,p:{x:65,y:165.1}},{t:this.shape_291,p:{x:71.2,y:168.1}},{t:this.shape_729},{t:this.shape_265,p:{x:98.4,y:165.2}},{t:this.shape_728,p:{x:105.9}},{t:this.shape_727,p:{x:114.2,y:165.1}},{t:this.shape_351,p:{x:124.4,y:166.8}},{t:this.shape_221,p:{x:137.7,y:165.2}},{t:this.shape_203,p:{x:147.2,y:162.6}},{t:this.shape_726},{t:this.shape_197,p:{x:164.5,y:162.6}},{t:this.shape_725,p:{x:171.8,y:165.2}},{t:this.shape_724},{t:this.shape_283,p:{x:187.4,y:165.2}},{t:this.shape_459,p:{x:194.1,y:162.6}},{t:this.shape_422,p:{x:199.2,y:169.4}},{t:this.shape_723,p:{x:215.7}},{t:this.shape_526,p:{x:229.4,y:165.2}},{t:this.shape_722,p:{x:239.1,y:165.1}},{t:this.shape_721},{t:this.shape_115,p:{x:264.5,y:165.2}},{t:this.shape_720},{t:this.shape_125,p:{x:-296.8,y:186.5}},{t:this.shape_719},{t:this.shape_215,p:{x:-282.1,y:189}},{t:this.shape_718,p:{x:-268.3,y:189}},{t:this.shape_717},{t:this.shape_416,p:{x:-248.3,y:190.6}},{t:this.shape_716},{t:this.shape_578,p:{x:-230.4,y:189}},{t:this.shape_206,p:{x:-221.6,y:189}},{t:this.shape_200,p:{x:-214,y:189}},{t:this.shape_715,p:{x:-207.7}},{t:this.shape_347,p:{x:-199.5,y:189}},{t:this.shape_714,p:{x:-188.4,y:189}},{t:this.shape_198,p:{x:-179,y:189}},{t:this.shape_713,p:{x:-167.3,y:186.5}},{t:this.shape_712,p:{x:-159.1,y:189}},{t:this.shape_402,p:{x:-149,y:189}},{t:this.shape_85,p:{x:-139,y:189}},{t:this.shape_711},{t:this.shape_195,p:{x:-120.6,y:190.6}},{t:this.shape_454,p:{x:-109.2,y:189}},{t:this.shape_710,p:{x:-99.9}},{t:this.shape_213,p:{x:-91.2,y:189}},{t:this.shape_709,p:{x:-83.9,y:187.9}},{t:this.shape_193,p:{x:-76.8,y:189}},{t:this.shape_120,p:{x:-61.5,y:189}},{t:this.shape_708,p:{x:-48.7}},{t:this.shape_138,p:{x:-40.8,y:189}},{t:this.shape_130,p:{x:-29.8,y:189}},{t:this.shape_707,p:{x:-21}},{t:this.shape_111,p:{x:-13,y:186.5}},{t:this.shape_672,p:{x:-2.8,y:190.7}},{t:this.shape_147,p:{x:11.6,y:190.6}},{t:this.shape_706,p:{x:19.5}},{t:this.shape_705},{t:this.shape_704,p:{x:34,y:189}},{t:this.shape_190,p:{x:42.1,y:192}},{t:this.shape_189,p:{x:58.8,y:186.7}},{t:this.shape_703,p:{x:70.2,y:186.5}},{t:this.shape_191,p:{x:76.6,y:189}},{t:this.shape_289,p:{x:90.5,y:189}},{t:this.shape_702},{t:this.shape_155,p:{x:109.1,y:189}},{t:this.shape_185,p:{x:117.8,y:189}},{t:this.shape_701,p:{x:130.8}},{t:this.shape_216,p:{x:139.1,y:189}},{t:this.shape_175,p:{x:147.9,y:189}},{t:this.shape_553,p:{x:156.4,y:189}},{t:this.shape_700,p:{x:169.9,y:189}},{t:this.shape_699},{t:this.shape_176,p:{x:192.1,y:186.5}},{t:this.shape_165,p:{x:199.4,y:189}},{t:this.shape_698},{t:this.shape_181,p:{x:223.3,y:189}},{t:this.shape_697,p:{x:232.1,y:189}},{t:this.shape_696,p:{x:238.9}},{t:this.shape_695},{t:this.shape_694},{t:this.shape_93,p:{x:260.5,y:189}},{t:this.shape_272,p:{x:267.2,y:186.5}},{t:this.shape_156,p:{x:-28.1,y:212.9}},{t:this.shape_387,p:{x:-21.8,y:210.4}},{t:this.shape_693},{t:this.shape_692},{t:this.shape_151,p:{x:-4.5,y:212.9}}]},1).to({state:[{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_345,p:{x:-25.4,y:114.9}},{t:this.shape_879},{t:this.shape_418,p:{x:-10.4,y:117.4}},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_342,p:{x:-275.1,y:138.7}},{t:this.shape_872},{t:this.shape_315,p:{x:-260.1,y:141.3}},{t:this.shape_871},{t:this.shape_870,p:{x:-234.9,y:138.8}},{t:this.shape_869},{t:this.shape_441,p:{x:-220.1,y:145.5}},{t:this.shape_868,p:{x:-208.2,y:138.7}},{t:this.shape_366,p:{x:-200.7,y:141.3}},{t:this.shape_354,p:{x:-192.5,y:138.7}},{t:this.shape_460,p:{x:-187.3,y:138.7}},{t:this.shape_762,p:{x:-173.7}},{t:this.shape_168,p:{x:-163.1,y:141.3}},{t:this.shape_867},{t:this.shape_301,p:{x:-137.1,y:141.3}},{t:this.shape_866},{t:this.shape_865,p:{x:-111.8,y:138.8}},{t:this.shape_864},{t:this.shape_318,p:{x:-92.4,y:138.7}},{t:this.shape_776,p:{x:-82.3,y:141.3}},{t:this.shape_863},{t:this.shape_731,p:{x:-56.2,y:141.3}},{t:this.shape_862},{t:this.shape_861,p:{x:-35.1,y:141.3}},{t:this.shape_860},{t:this.shape_170,p:{x:-6.5,y:138.8}},{t:this.shape_859},{t:this.shape_858},{t:this.shape_598,p:{x:21.2,y:141.3}},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855,p:{x:53.9,y:141.3}},{t:this.shape_854},{t:this.shape_853},{t:this.shape_755,p:{x:75.7}},{t:this.shape_109,p:{x:86.9,y:141.3}},{t:this.shape_775,p:{x:95.6}},{t:this.shape_852,p:{x:102.7,y:141.3}},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849,p:{x:137.8,y:138.8}},{t:this.shape_169,p:{x:144.3,y:141.3}},{t:this.shape_848},{t:this.shape_847},{t:this.shape_490,p:{x:178.7,y:141.3}},{t:this.shape_766,p:{x:192.2}},{t:this.shape_846},{t:this.shape_459,p:{x:212.5,y:138.7}},{t:this.shape_544,p:{x:219.9,y:141.3}},{t:this.shape_845},{t:this.shape_844},{t:this.shape_759,p:{x:256.6,y:141.2}},{t:this.shape_843},{t:this.shape_225,p:{x:271.4,y:138.7}},{t:this.shape_416,p:{x:-300.5,y:166.8}},{t:this.shape_321,p:{x:-289.2,y:165.2}},{t:this.shape_842,p:{x:-278}},{t:this.shape_841},{t:this.shape_421,p:{x:-253.1,y:165.2}},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_742,p:{x:-204.6,y:165.1}},{t:this.shape_222,p:{x:-194.2,y:165.2}},{t:this.shape_314,p:{x:-178.4,y:165.2}},{t:this.shape_837},{t:this.shape_836},{t:this.shape_187,p:{x:-150.3,y:162.6}},{t:this.shape_578,p:{x:-139.9,y:165.2}},{t:this.shape_723,p:{x:-121.1}},{t:this.shape_324,p:{x:-107.5,y:165.2}},{t:this.shape_737,p:{x:-100.7}},{t:this.shape_735,p:{x:-92.5,y:165.1}},{t:this.shape_835},{t:this.shape_125,p:{x:-67,y:162.6}},{t:this.shape_389,p:{x:-56.4,y:165.2}},{t:this.shape_738,p:{x:-48.4,y:165.1}},{t:this.shape_680,p:{x:-39.8,y:165.2}},{t:this.shape_390,p:{x:-31.2,y:165.2}},{t:this.shape_834},{t:this.shape_270,p:{x:-16.4,y:165.2}},{t:this.shape_733,p:{x:-7.6,y:165.1}},{t:this.shape_200,p:{x:-0.2,y:165.2}},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828,p:{x:80.5}},{t:this.shape_827},{t:this.shape_826},{t:this.shape_336,p:{x:96.9,y:162.6}},{t:this.shape_188,p:{x:104.2,y:165.2}},{t:this.shape_825,p:{x:120.8}},{t:this.shape_138,p:{x:132.4,y:165.2}},{t:this.shape_722,p:{x:143.6,y:165.1}},{t:this.shape_824},{t:this.shape_823},{t:this.shape_730,p:{x:178.9,y:165.1}},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820,p:{x:203,y:165.1}},{t:this.shape_819},{t:this.shape_198,p:{x:223.7,y:165.2}},{t:this.shape_111,p:{x:233,y:162.6}},{t:this.shape_818},{t:this.shape_381,p:{x:249.3,y:166.8}},{t:this.shape_745,p:{x:263}},{t:this.shape_191,p:{x:269.5,y:165.2}},{t:this.shape_817},{t:this.shape_120,p:{x:-276.1,y:189}},{t:this.shape_378,p:{x:-267.3,y:190.6}},{t:this.shape_816,p:{x:-260.6}},{t:this.shape_815,p:{x:-253.5,y:189}},{t:this.shape_190,p:{x:-246.5,y:192}},{t:this.shape_814,p:{x:-232.9}},{t:this.shape_487,p:{x:-221.7,y:186.5}},{t:this.shape_165,p:{x:-211.4,y:189}},{t:this.shape_813,p:{x:-198.5}},{t:this.shape_185,p:{x:-192.1,y:189}},{t:this.shape_89,p:{x:-177.9,y:189}},{t:this.shape_812,p:{x:-168.2,y:189}},{t:this.shape_289,p:{x:-152.5,y:189}},{t:this.shape_714,p:{x:-142,y:189}},{t:this.shape_571,p:{x:-131.7,y:189}},{t:this.shape_710,p:{x:-123}},{t:this.shape_296,p:{x:-114.7,y:190.6}},{t:this.shape_159,p:{x:-105.8,y:189}},{t:this.shape_696,p:{x:-97.7}},{t:this.shape_703,p:{x:-92.7,y:186.5}},{t:this.shape_82,p:{x:-85.6,y:189}},{t:this.shape_286,p:{x:-70.8,y:189}},{t:this.shape_712,p:{x:-61,y:189}},{t:this.shape_811},{t:this.shape_175,p:{x:-35,y:189}},{t:this.shape_810},{t:this.shape_135,p:{x:-15.7,y:189}},{t:this.shape_809,p:{x:-8.7}},{t:this.shape_468,p:{x:-1,y:189}},{t:this.shape_808},{t:this.shape_807,p:{x:16.7,y:186.5}},{t:this.shape_553,p:{x:24.1,y:189}},{t:this.shape_496,p:{x:39.6,y:186.7}},{t:this.shape_806,p:{x:50.4,y:189}},{t:this.shape_203,p:{x:60.2,y:186.5}},{t:this.shape_161,p:{x:70,y:189}},{t:this.shape_706,p:{x:78.8}},{t:this.shape_805,p:{x:92.8,y:189}},{t:this.shape_804,p:{x:100.1,y:187.9}},{t:this.shape_803,p:{x:113.4,y:186.7}},{t:this.shape_375,p:{x:124.4,y:189.1}},{t:this.shape_147,p:{x:134.7,y:190.6}},{t:this.shape_523,p:{x:143.8,y:189}},{t:this.shape_802,p:{x:151.8,y:189}},{t:this.shape_510,p:{x:159.8,y:189}},{t:this.shape_152,p:{x:169.7,y:189.1}},{t:this.shape_363,p:{x:180.6,y:186.7}},{t:this.shape_202,p:{x:191.1,y:189}},{t:this.shape_801},{t:this.shape_117,p:{x:221.3,y:189}},{t:this.shape_701,p:{x:230.7}},{t:this.shape_704,p:{x:239.9,y:189}},{t:this.shape_258,p:{x:250.2,y:189}},{t:this.shape_697,p:{x:258.9,y:189}},{t:this.shape_469,p:{x:265,y:193.2}},{t:this.shape_800},{t:this.shape_322,p:{x:-183.5,y:210.4}},{t:this.shape_244,p:{x:-173.1,y:212.9}},{t:this.shape_799,p:{x:-164.4,y:212.9}},{t:this.shape_181,p:{x:-156,y:212.9}},{t:this.shape_157,p:{x:-141.9,y:212.9}},{t:this.shape_311,p:{x:-132.5,y:210.4}},{t:this.shape_193,p:{x:-122.2,y:212.9}},{t:this.shape_101,p:{x:-109.3,y:210.4}},{t:this.shape_798,p:{x:-104.1,y:210.4}},{t:this.shape_797},{t:this.shape_464,p:{x:-87.9,y:212.9}},{t:this.shape_156,p:{x:-79.1,y:212.9}},{t:this.shape_115,p:{x:-64.5,y:212.9}},{t:this.shape_796,p:{x:-53.3,y:212.9}},{t:this.shape_795,p:{x:-39.1}},{t:this.shape_227,p:{x:-31.2,y:210.4}},{t:this.shape_265,p:{x:-20.8,y:212.9}},{t:this.shape_151,p:{x:-6.7,y:212.9}},{t:this.shape_204,p:{x:1.8,y:212.9}},{t:this.shape_106,p:{x:11.2,y:212.9}},{t:this.shape_85,p:{x:21.2,y:212.9}},{t:this.shape_794,p:{x:32.3,y:212.9}},{t:this.shape_793},{t:this.shape_792,p:{x:58.5,y:210.4}},{t:this.shape_606,p:{x:63.1,y:210.4}},{t:this.shape_268,p:{x:71.3,y:212.9}},{t:this.shape_647,p:{x:82.3,y:212.9}},{t:this.shape_791},{t:this.shape_790,p:{x:107.4,y:212.9}},{t:this.shape_789,p:{x:116.5,y:210.4}},{t:this.shape_788},{t:this.shape_118,p:{x:130.3,y:210.4}},{t:this.shape_97,p:{x:146.9,y:210.4}},{t:this.shape_155,p:{x:157.2,y:212.9}},{t:this.shape_787,p:{x:166,y:212.9}}]},1).to({state:[{t:this.shape_926},{t:this.shape_865,p:{x:-74.9,y:114.9}},{t:this.shape_354,p:{x:-69.7,y:114.9}},{t:this.shape_509,p:{x:-62.3,y:117.4}},{t:this.shape_570,p:{x:-53.6,y:117.4}},{t:this.shape_925,p:{x:-37.1,y:115.1}},{t:this.shape_776,p:{x:-24.7,y:117.4}},{t:this.shape_870,p:{x:-18,y:114.9}},{t:this.shape_387,p:{x:-12.8,y:114.9}},{t:this.shape_169,p:{x:-6.3,y:117.4}},{t:this.shape_924},{t:this.shape_771,p:{x:19,y:117.4}},{t:this.shape_923},{t:this.shape_162,p:{x:40.5,y:117.4}},{t:this.shape_855,p:{x:51.6,y:117.4}},{t:this.shape_759,p:{x:60.4,y:117.4}},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920,p:{x:-267.6,y:162.6}},{t:this.shape_919},{t:this.shape_215,p:{x:-251.5,y:165.2}},{t:this.shape_825,p:{x:-236}},{t:this.shape_738,p:{x:-226.1,y:165.1}},{t:this.shape_668,p:{x:-217,y:165.2}},{t:this.shape_918},{t:this.shape_204,p:{x:-193.5,y:165.2}},{t:this.shape_733,p:{x:-184.8,y:165.1}},{t:this.shape_469,p:{x:-178.7,y:169.4}},{t:this.shape_917},{t:this.shape_85,p:{x:-148,y:165.2}},{t:this.shape_730,p:{x:-138.6,y:165.1}},{t:this.shape_499,p:{x:-130.3,y:165.2}},{t:this.shape_343,p:{x:-115.5,y:165.2}},{t:this.shape_916},{t:this.shape_751,p:{x:-91.4}},{t:this.shape_740,p:{x:-74.2}},{t:this.shape_314,p:{x:-60.1,y:165.2}},{t:this.shape_842,p:{x:-49}},{t:this.shape_915},{t:this.shape_914},{t:this.shape_237,p:{x:-18.2,y:162.6}},{t:this.shape_742,p:{x:-7.5,y:165.1}},{t:this.shape_647,p:{x:3.6,y:165.2}},{t:this.shape_913},{t:this.shape_735,p:{x:27.9,y:165.1}},{t:this.shape_912},{t:this.shape_911},{t:this.shape_187,p:{x:69.8,y:162.6}},{t:this.shape_713,p:{x:78,y:162.7}},{t:this.shape_206,p:{x:84.4,y:165.2}},{t:this.shape_722,p:{x:99.1,y:165.1}},{t:this.shape_728,p:{x:107.3}},{t:this.shape_910},{t:this.shape_203,p:{x:124.6,y:162.6}},{t:this.shape_714,p:{x:135.2,y:165.1}},{t:this.shape_298,p:{x:145.8,y:165.2}},{t:this.shape_723,p:{x:158.5}},{t:this.shape_725,p:{x:171.8,y:165.2}},{t:this.shape_909},{t:this.shape_908},{t:this.shape_745,p:{x:208.6}},{t:this.shape_807,p:{x:213.8,y:162.6}},{t:this.shape_200,p:{x:220.3,y:165.2}},{t:this.shape_358,p:{x:226.5,y:169.4}},{t:this.shape_828,p:{x:237.1}},{t:this.shape_198,p:{x:243.5,y:165.2}},{t:this.shape_907},{t:this.shape_906,p:{x:-296.3,y:186.5}},{t:this.shape_816,p:{x:-291.7}},{t:this.shape_905},{t:this.shape_708,p:{x:-276.9}},{t:this.shape_904},{t:this.shape_405,p:{x:-263.8,y:189}},{t:this.shape_712,p:{x:-252.6,y:189}},{t:this.shape_324,p:{x:-242,y:189}},{t:this.shape_101,p:{x:-235.3,y:186.5}},{t:this.shape_467,p:{x:-222.8,y:189}},{t:this.shape_227,p:{x:-212.7,y:186.5}},{t:this.shape_613,p:{x:-202.1,y:189}},{t:this.shape_701,p:{x:-194.1}},{t:this.shape_286,p:{x:-185.5,y:189}},{t:this.shape_476,p:{x:-176.9,y:189}},{t:this.shape_696,p:{x:-169.2}},{t:this.shape_544,p:{x:-162.1,y:189}},{t:this.shape_697,p:{x:-153.4,y:189}},{t:this.shape_813,p:{x:-141.8}},{t:this.shape_820,p:{x:-133.6,y:189}},{t:this.shape_814,p:{x:-117.1}},{t:this.shape_161,p:{x:-106.8,y:189}},{t:this.shape_378,p:{x:-97.2,y:190.6}},{t:this.shape_213,p:{x:-88.1,y:189}},{t:this.shape_903,p:{x:-82.5,y:182.6}},{t:this.shape_191,p:{x:-77.1,y:189}},{t:this.shape_803,p:{x:-62.4,y:186.7}},{t:this.shape_130,p:{x:-51.4,y:189}},{t:this.shape_704,p:{x:-40.2,y:189}},{t:this.shape_809,p:{x:-32.1}},{t:this.shape_815,p:{x:-24.9,y:189}},{t:this.shape_709,p:{x:-11.9,y:187.9}},{t:this.shape_118,p:{x:-3.9,y:186.5}},{t:this.shape_181,p:{x:6.4,y:189}},{t:this.shape_189,p:{x:25.4,y:186.7}},{t:this.shape_340,p:{x:38.9,y:189}},{t:this.shape_902},{t:this.shape_147,p:{x:59.7,y:190.6}},{t:this.shape_155,p:{x:68.6,y:189}},{t:this.shape_125,p:{x:79.2,y:186.5}},{t:this.shape_347,p:{x:90.3,y:189}},{t:this.shape_296,p:{x:100.5,y:190.6}},{t:this.shape_185,p:{x:113.8,y:189}},{t:this.shape_901},{t:this.shape_802,p:{x:131.1,y:189}},{t:this.shape_900},{t:this.shape_301,p:{x:144.6,y:189}},{t:this.shape_175,p:{x:153.4,y:189}},{t:this.shape_772,p:{x:159.6,y:193.2}},{t:this.shape_899,p:{x:172.6,y:189}},{t:this.shape_812,p:{x:182.3,y:189}},{t:this.shape_898},{t:this.shape_897},{t:this.shape_111,p:{x:215.7,y:186.5}},{t:this.shape_222,p:{x:226.1,y:189}},{t:this.shape_896},{t:this.shape_715,p:{x:244.5}},{t:this.shape_707,p:{x:250.4}},{t:this.shape_744,p:{x:255.3,y:186.5}},{t:this.shape_895},{t:this.shape_346,p:{x:-159.4,y:212.9}},{t:this.shape_97,p:{x:-149.3,y:210.4}},{t:this.shape_142,p:{x:-138.6,y:212.9}},{t:this.shape_894,p:{x:-130.7,y:212.9}},{t:this.shape_93,p:{x:-122,y:212.9}},{t:this.shape_402,p:{x:-113.4,y:212.9}},{t:this.shape_795,p:{x:-105.7}},{t:this.shape_464,p:{x:-98.7,y:212.9}},{t:this.shape_893,p:{x:-89.9,y:212.9}},{t:this.shape_892},{t:this.shape_157,p:{x:-79.5,y:212.9}},{t:this.shape_363,p:{x:-65.1,y:210.6}},{t:this.shape_265,p:{x:-54.6,y:212.9}},{t:this.shape_156,p:{x:-45.8,y:212.9}},{t:this.shape_891},{t:this.shape_792,p:{x:-27.2,y:210.4}},{t:this.shape_799,p:{x:-21.3,y:212.9}},{t:this.shape_890,p:{x:-15.1,y:210.4}},{t:this.shape_159,p:{x:-7.7,y:212.9}},{t:this.shape_889},{t:this.shape_888},{t:this.shape_186,p:{x:30,y:212.9}},{t:this.shape_887,p:{x:39.7,y:212.9}},{t:this.shape_886},{t:this.shape_151,p:{x:65.7,y:212.9}},{t:this.shape_885},{t:this.shape_884},{t:this.shape_193,p:{x:90.6,y:212.9}},{t:this.shape_102,p:{x:101.2,y:210.4}},{t:this.shape_883,p:{x:108.9,y:210.4}},{t:this.shape_82,p:{x:116,y:212.9}},{t:this.shape_318,p:{x:126.1,y:210.4}}]},1).to({state:[{t:this.shape_998},{t:this.shape_225,p:{x:-20.4,y:109.5}},{t:this.shape_621,p:{x:-9.8,y:112.1}},{t:this.shape_730,p:{x:-1.8,y:112}},{t:this.shape_371,p:{x:6.8,y:112.1}},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_774,p:{x:-254.3,y:159.8}},{t:this.shape_369,p:{x:-239.8,y:159.8}},{t:this.shape_302,p:{x:-233.1,y:157.3}},{t:this.shape_682,p:{x:-226.6,y:159.8}},{t:this.shape_446,p:{x:-217.3,y:159.8}},{t:this.shape_102,p:{x:-200.7,y:157.3}},{t:this.shape_993},{t:this.shape_637,p:{x:-179,y:159.8}},{t:this.shape_790,p:{x:-166.7,y:159.8}},{t:this.shape_992},{t:this.shape_613,p:{x:-138.7,y:159.8}},{t:this.shape_669,p:{x:-130.7,y:159.8}},{t:this.shape_991},{t:this.shape_990},{t:this.shape_161,p:{x:-100.1,y:159.8}},{t:this.shape_989},{t:this.shape_798,p:{x:-81.2,y:157.3}},{t:this.shape_988},{t:this.shape_665,p:{x:-67.3,y:159.8}},{t:this.shape_987},{t:this.shape_986},{t:this.shape_179,p:{x:-35.9,y:159.9}},{t:this.shape_985},{t:this.shape_566,p:{x:-8.1,y:159.8}},{t:this.shape_984},{t:this.shape_208,p:{x:18.1,y:159.8}},{t:this.shape_983,p:{x:27.4,y:159.8}},{t:this.shape_982},{t:this.shape_187,p:{x:47.6,y:157.3}},{t:this.shape_981,p:{x:58,y:159.8}},{t:this.shape_980},{t:this.shape_805,p:{x:79.3,y:159.8}},{t:this.shape_354,p:{x:86,y:157.3}},{t:this.shape_773,p:{x:91.2,y:157.3}},{t:this.shape_979},{t:this.shape_978,p:{x:109.1,y:159.8}},{t:this.shape_576,p:{x:125.7,y:157.3}},{t:this.shape_977},{t:this.shape_976},{t:this.shape_89,p:{x:164.5,y:159.8}},{t:this.shape_975},{t:this.shape_591,p:{x:182.3,y:164}},{t:this.shape_974},{t:this.shape_577,p:{x:199.3,y:159.8}},{t:this.shape_973},{t:this.shape_125,p:{x:219.6,y:157.3}},{t:this.shape_315,p:{x:229.9,y:159.8}},{t:this.shape_972},{t:this.shape_971},{t:this.shape_894,p:{x:255.3,y:159.8}},{t:this.shape_570,p:{x:262.7,y:159.8}},{t:this.shape_970},{t:this.shape_569,p:{x:-295.1,y:181.1}},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_109,p:{x:-224.5,y:183.7}},{t:this.shape_964},{t:this.shape_93,p:{x:-202.6,y:183.7}},{t:this.shape_460,p:{x:-195.9,y:181.1}},{t:this.shape_963},{t:this.shape_789,p:{x:-180.1,y:181.2}},{t:this.shape_887,p:{x:-171.8,y:183.6}},{t:this.shape_962},{t:this.shape_620,p:{x:-155.1,y:183.7}},{t:this.shape_961,p:{x:-141,y:182.6}},{t:this.shape_551,p:{x:-133,y:181.1}},{t:this.shape_301,p:{x:-122.7,y:183.7}},{t:this.shape_960,p:{x:-104.4,y:181.5}},{t:this.shape_959},{t:this.shape_958},{t:this.shape_340,p:{x:-69.1,y:183.7}},{t:this.shape_893,p:{x:-60.3,y:183.6}},{t:this.shape_296,p:{x:-52,y:185.3}},{t:this.shape_787,p:{x:-44.1,y:183.6}},{t:this.shape_595,p:{x:-35,y:183.7}},{t:this.shape_648,p:{x:-24,y:183.7}},{t:this.shape_957,p:{x:-12.8,y:183.6}},{t:this.shape_956},{t:this.shape_144,p:{x:6.6,y:186.6}},{t:this.shape_955},{t:this.shape_549,p:{x:34.6,y:181.1}},{t:this.shape_954},{t:this.shape_799,p:{x:53.2,y:183.6}},{t:this.shape_550,p:{x:61.8,y:183.7}},{t:this.shape_953},{t:this.shape_169,p:{x:80.4,y:183.7}},{t:this.shape_952,p:{x:94.5,y:183.7}},{t:this.shape_951},{t:this.shape_157,p:{x:107.7,y:183.7}},{t:this.shape_950,p:{x:117,y:183.7}},{t:this.shape_949,p:{x:131.2,y:182.6}},{t:this.shape_487,p:{x:139.1,y:181.1}},{t:this.shape_216,p:{x:149.5,y:183.7}},{t:this.shape_792,p:{x:163.7,y:181.1}},{t:this.shape_948,p:{x:170.8,y:183.7}},{t:this.shape_197,p:{x:177.5,y:181.1}},{t:this.shape_101,p:{x:182.7,y:181.1}},{t:this.shape_222,p:{x:190.1,y:183.7}},{t:this.shape_796,p:{x:200.6,y:183.6}},{t:this.shape_322,p:{x:217.2,y:181.1}},{t:this.shape_152,p:{x:228.2,y:183.7}},{t:this.shape_947},{t:this.shape_513,p:{x:256,y:183.7}},{t:this.shape_794,p:{x:265.7,y:183.6}},{t:this.shape_946},{t:this.shape_311,p:{x:-298.9,y:205}},{t:this.shape_283,p:{x:-288.3,y:207.6}},{t:this.shape_945},{t:this.shape_944,p:{x:-270,y:206.5}},{t:this.shape_227,p:{x:-262,y:205}},{t:this.shape_265,p:{x:-251.7,y:207.6}},{t:this.shape_166,p:{x:-235.9,y:209.2}},{t:this.shape_472,p:{x:-227.6,y:205}},{t:this.shape_120,p:{x:-219.9,y:207.6}},{t:this.shape_672,p:{x:-211.2,y:209.2}},{t:this.shape_258,p:{x:-202.1,y:207.6}},{t:this.shape_943},{t:this.shape_942},{t:this.shape_213,p:{x:-168.2,y:207.6}},{t:this.shape_941},{t:this.shape_165,p:{x:-142.1,y:207.6}},{t:this.shape_156,p:{x:-133.4,y:207.6}},{t:this.shape_134,p:{x:-119.2,y:207.6}},{t:this.shape_940,p:{x:-111.9,y:206.5}},{t:this.shape_939},{t:this.shape_118,p:{x:-92.9,y:205}},{t:this.shape_193,p:{x:-82.6,y:207.6}},{t:this.shape_151,p:{x:-68.5,y:207.6}},{t:this.shape_660,p:{x:-61.5,y:206.5}},{t:this.shape_286,p:{x:-54.1,y:207.6}},{t:this.shape_938},{t:this.shape_937},{t:this.shape_85,p:{x:-26.1,y:207.6}},{t:this.shape_936},{t:this.shape_935},{t:this.shape_97,p:{x:2.1,y:205}},{t:this.shape_553,p:{x:12.4,y:207.6}},{t:this.shape_98,p:{x:27.4,y:209.2}},{t:this.shape_324,p:{x:36.5,y:207.6}},{t:this.shape_934},{t:this.shape_204,p:{x:62.5,y:207.6}},{t:this.shape_358,p:{x:69.9,y:211.8}},{t:this.shape_633,p:{x:82.9,y:207.6}},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_454,p:{x:131.5,y:207.6}},{t:this.shape_667,p:{x:140.3,y:206.5}},{t:this.shape_930},{t:this.shape_111,p:{x:159.2,y:205}},{t:this.shape_725,p:{x:169.6,y:207.6}},{t:this.shape_815,p:{x:184.3,y:207.6}},{t:this.shape_130,p:{x:194.3,y:207.6}},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_138,p:{x:229.6,y:207.6}},{t:this.shape_336,p:{x:237.7,y:205}},{t:this.shape_447,p:{x:243,y:205}},{t:this.shape_142,p:{x:250.6,y:207.6}},{t:this.shape_141,p:{x:260,y:205.2}},{t:this.shape_478,p:{x:268.4,y:205}},{t:this.shape_757,p:{x:275.7,y:207.6}}]},1).to({state:[{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_1068},{t:this.shape_1067},{t:this.shape_787,p:{x:-272.8,y:141.3}},{t:this.shape_1066},{t:this.shape_1065},{t:this.shape_102,p:{x:-250.7,y:138.8}},{t:this.shape_789,p:{x:-237.7,y:138.9}},{t:this.shape_682,p:{x:-231.2,y:141.4}},{t:this.shape_961,p:{x:-218.8,y:140.3}},{t:this.shape_311,p:{x:-210.9,y:138.8}},{t:this.shape_193,p:{x:-200.5,y:141.4}},{t:this.shape_276,p:{x:-184.8,y:143}},{t:this.shape_447,p:{x:-176.4,y:138.8}},{t:this.shape_142,p:{x:-168.8,y:141.4}},{t:this.shape_764,p:{x:-160,y:143}},{t:this.shape_324,p:{x:-150.7,y:141.4}},{t:this.shape_273,p:{x:-141.3,y:139}},{t:this.shape_443,p:{x:-132.9,y:138.8}},{t:this.shape_418,p:{x:-125.6,y:141.4}},{t:this.shape_467,p:{x:-110.8,y:141.4}},{t:this.shape_227,p:{x:-100.7,y:138.8}},{t:this.shape_613,p:{x:-90.1,y:141.4}},{t:this.shape_983,p:{x:-82.1,y:141.3}},{t:this.shape_286,p:{x:-73.5,y:141.4}},{t:this.shape_346,p:{x:-64.9,y:141.4}},{t:this.shape_1064,p:{x:-57.2,y:140.3}},{t:this.shape_544,p:{x:-50.1,y:141.4}},{t:this.shape_894,p:{x:-41.3,y:141.3}},{t:this.shape_213,p:{x:-27.3,y:141.4}},{t:this.shape_957,p:{x:-17.6,y:141.3}},{t:this.shape_1063},{t:this.shape_1062},{t:this.shape_948,p:{x:26.8,y:141.4}},{t:this.shape_890,p:{x:33.5,y:138.9}},{t:this.shape_796,p:{x:41.7,y:141.3}},{t:this.shape_1061},{t:this.shape_893,p:{x:67.7,y:141.3}},{t:this.shape_117,p:{x:76.8,y:141.4}},{t:this.shape_1060},{t:this.shape_1059},{t:this.shape_147,p:{x:101.8,y:143}},{t:this.shape_115,p:{x:111.5,y:141.4}},{t:this.shape_794,p:{x:122.6,y:141.3}},{t:this.shape_798,p:{x:130.8,y:138.9}},{t:this.shape_669,p:{x:137.2,y:141.4}},{t:this.shape_949,p:{x:144.2,y:140.3}},{t:this.shape_950,p:{x:157.5,y:141.4}},{t:this.shape_792,p:{x:167,y:138.8}},{t:this.shape_960,p:{x:182.4,y:139.2}},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_464,p:{x:217.7,y:141.4}},{t:this.shape_799,p:{x:226.5,y:141.3}},{t:this.shape_1056,p:{x:233.3,y:140.3}},{t:this.shape_93,p:{x:240.7,y:141.4}},{t:this.shape_460,p:{x:247.4,y:138.8}},{t:this.shape_598,p:{x:254.8,y:141.4}},{t:this.shape_1055},{t:this.shape_1054},{t:this.shape_1053},{t:this.shape_1052},{t:this.shape_315,p:{x:-266.4,y:165.3}},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_665,p:{x:-220.5,y:165.3}},{t:this.shape_1047},{t:this.shape_1046},{t:this.shape_680,p:{x:-189.6,y:165.3}},{t:this.shape_307,p:{x:-182.9,y:162.7}},{t:this.shape_302,p:{x:-177.7,y:162.7}},{t:this.shape_577,p:{x:-171.2,y:165.3}},{t:this.shape_1045},{t:this.shape_1044},{t:this.shape_1043},{t:this.shape_668,p:{x:-134.6,y:165.3}},{t:this.shape_1042},{t:this.shape_254,p:{x:-112.5,y:162.7}},{t:this.shape_258,p:{x:-102.2,y:165.3}},{t:this.shape_1041},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_289,p:{x:-48.6,y:165.3}},{t:this.shape_1038},{t:this.shape_378,p:{x:-31.5,y:166.9}},{t:this.shape_1037},{t:this.shape_647,p:{x:-14.4,y:165.3}},{t:this.shape_281,p:{x:-3.5,y:165.3}},{t:this.shape_1036},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_118,p:{x:46.2,y:162.7}},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_341,p:{x:80.5,y:165.3}},{t:this.shape_1030},{t:this.shape_92,p:{x:107.8,y:162.9}},{t:this.shape_899,p:{x:118.6,y:165.3}},{t:this.shape_1029},{t:this.shape_203,p:{x:135.9,y:162.7}},{t:this.shape_268,p:{x:151.8,y:165.3}},{t:this.shape_1028},{t:this.shape_186,p:{x:178.9,y:165.3}},{t:this.shape_1027},{t:this.shape_405,p:{x:198.4,y:165.3}},{t:this.shape_1026},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_202,p:{x:238.3,y:165.3}},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_690,p:{x:-293.7,y:189.1}},{t:this.shape_718,p:{x:-285.4,y:189.1}},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_685,p:{x:-260,y:189.1}},{t:this.shape_652,p:{x:-250.8,y:189.1}},{t:this.shape_1018},{t:this.shape_347,p:{x:-228.8,y:189.1}},{t:this.shape_1017},{t:this.shape_235,p:{x:-206.6,y:186.6}},{t:this.shape_265,p:{x:-196.3,y:189.1}},{t:this.shape_570,p:{x:-182.2,y:189.1}},{t:this.shape_445,p:{x:-173,y:189.2}},{t:this.shape_676,p:{x:-163.6,y:189.1}},{t:this.shape_1016},{t:this.shape_134,p:{x:-148.9,y:189.1}},{t:this.shape_510,p:{x:-140.3,y:189.1}},{t:this.shape_161,p:{x:-131.1,y:189.1}},{t:this.shape_144,p:{x:-123.6,y:192.1}},{t:this.shape_1015},{t:this.shape_659,p:{x:-100.1,y:189.1}},{t:this.shape_661,p:{x:-93.9,y:186.6}},{t:this.shape_169,p:{x:-87.5,y:189.1}},{t:this.shape_512,p:{x:-78,y:186.6}},{t:this.shape_1014},{t:this.shape_157,p:{x:-58.6,y:189.1}},{t:this.shape_1013},{t:this.shape_225,p:{x:-38.2,y:186.6}},{t:this.shape_204,p:{x:-27.9,y:189.1}},{t:this.shape_387,p:{x:-15,y:186.6}},{t:this.shape_89,p:{x:-7.4,y:189.1}},{t:this.shape_156,p:{x:0.6,y:189.1}},{t:this.shape_667,p:{x:7.6,y:188}},{t:this.shape_138,p:{x:20.8,y:189.1}},{t:this.shape_1012},{t:this.shape_944,p:{x:41,y:188}},{t:this.shape_187,p:{x:49,y:186.6}},{t:this.shape_159,p:{x:59.3,y:189.1}},{t:this.shape_165,p:{x:74.3,y:189.1}},{t:this.shape_1011},{t:this.shape_450,p:{x:89.2,y:190.7}},{t:this.shape_125,p:{x:98.9,y:186.6}},{t:this.shape_940,p:{x:107.7,y:188}},{t:this.shape_111,p:{x:121.1,y:186.6}},{t:this.shape_1010},{t:this.shape_674,p:{x:146.3,y:189.1}},{t:this.shape_120,p:{x:159.9,y:189.1}},{t:this.shape_1009},{t:this.shape_151,p:{x:179,y:189.1}},{t:this.shape_660,p:{x:191.4,y:188}},{t:this.shape_130,p:{x:199.3,y:189.1}},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_197,p:{x:227.9,y:186.6}},{t:this.shape_101,p:{x:233.1,y:186.6}},{t:this.shape_1006},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_653,p:{x:268.6,y:189.1}},{t:this.shape_1003},{t:this.shape_97,p:{x:-74.6,y:210.5}},{t:this.shape_244,p:{x:-64.2,y:213}},{t:this.shape_1002},{t:this.shape_631,p:{x:-32.2,y:213}},{t:this.shape_1001},{t:this.shape_181,p:{x:-10.7,y:213}},{t:this.shape_636,p:{x:-1.9,y:213}},{t:this.shape_296,p:{x:6.4,y:214.6}},{t:this.shape_634,p:{x:14.3,y:213}},{t:this.shape_208,p:{x:23.5,y:213}},{t:this.shape_1000},{t:this.shape_627,p:{x:45.6,y:213}},{t:this.shape_999}]},1).to({state:[{t:this.shape_1140},{t:this.shape_1139},{t:this.shape_578,p:{x:-15.3,y:116.5}},{t:this.shape_1138},{t:this.shape_852,p:{x:3.3,y:116.5}},{t:this.shape_1137},{t:this.shape_549,p:{x:-279.3,y:137.8}},{t:this.shape_1136},{t:this.shape_276,p:{x:-253.2,y:142}},{t:this.shape_335,p:{x:-244.9,y:137.8}},{t:this.shape_1135},{t:this.shape_1134},{t:this.shape_509,p:{x:-219.4,y:140.4}},{t:this.shape_1133},{t:this.shape_170,p:{x:-199.1,y:137.9}},{t:this.shape_169,p:{x:-192.6,y:140.4}},{t:this.shape_1132},{t:this.shape_487,p:{x:-172.3,y:137.8}},{t:this.shape_165,p:{x:-161.9,y:140.4}},{t:this.shape_476,p:{x:-147.2,y:140.4}},{t:this.shape_322,p:{x:-137.1,y:137.8}},{t:this.shape_134,p:{x:-126.4,y:140.4}},{t:this.shape_1131},{t:this.shape_861,p:{x:-109.8,y:140.4}},{t:this.shape_1130},{t:this.shape_1129},{t:this.shape_1128},{t:this.shape_163,p:{x:-77.7,y:140.3}},{t:this.shape_1127},{t:this.shape_311,p:{x:-57.5,y:137.8}},{t:this.shape_774,p:{x:-46.9,y:140.4}},{t:this.shape_1126},{t:this.shape_343,p:{x:-27.3,y:140.4}},{t:this.shape_1125},{t:this.shape_160,p:{x:-8.1,y:140.3}},{t:this.shape_94,p:{x:8,y:138}},{t:this.shape_571,p:{x:18.6,y:140.4}},{t:this.shape_135,p:{x:33.3,y:140.4}},{t:this.shape_454,p:{x:43.3,y:140.4}},{t:this.shape_1124},{t:this.shape_1123},{t:this.shape_150,p:{x:69.5,y:140.3}},{t:this.shape_115,p:{x:78.6,y:140.4}},{t:this.shape_773,p:{x:86.7,y:137.8}},{t:this.shape_1122},{t:this.shape_855,p:{x:99.3,y:140.4}},{t:this.shape_1121},{t:this.shape_849,p:{x:123.4,y:137.9}},{t:this.shape_1120},{t:this.shape_1119},{t:this.shape_870,p:{x:164.3,y:137.9}},{t:this.shape_148,p:{x:172.5,y:140.3}},{t:this.shape_244,p:{x:182.8,y:140.4}},{t:this.shape_1118},{t:this.shape_146,p:{x:200.5,y:140.3}},{t:this.shape_613,p:{x:209.2,y:140.4}},{t:this.shape_868,p:{x:217.3,y:137.8}},{t:this.shape_1117},{t:this.shape_144,p:{x:227.5,y:143.3}},{t:this.shape_925,p:{x:242.8,y:138}},{t:this.shape_227,p:{x:255.8,y:137.8}},{t:this.shape_553,p:{x:266.2,y:140.4}},{t:this.shape_1116},{t:this.shape_1115},{t:this.shape_1114},{t:this.shape_1113},{t:this.shape_464,p:{x:-237.3,y:164.3}},{t:this.shape_906,p:{x:-228.4,y:161.7}},{t:this.shape_369,p:{x:-221.3,y:164.3}},{t:this.shape_445,p:{x:-211.7,y:164.3}},{t:this.shape_920,p:{x:-203.6,y:161.7}},{t:this.shape_709,p:{x:-197.7,y:163.2}},{t:this.shape_167,p:{x:-184.6,y:165.9}},{t:this.shape_307,p:{x:-176.2,y:161.7}},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_289,p:{x:-150.7,y:164.3}},{t:this.shape_697,p:{x:-141.9,y:164.2}},{t:this.shape_215,p:{x:-129.1,y:164.3}},{t:this.shape_1110},{t:this.shape_703,p:{x:-112.1,y:161.8}},{t:this.shape_812,p:{x:-103.9,y:164.2}},{t:this.shape_206,p:{x:-94.4,y:164.3}},{t:this.shape_680,p:{x:-80.3,y:164.3}},{t:this.shape_802,p:{x:-72.3,y:164.2}},{t:this.shape_317,p:{x:-64,y:164.3}},{t:this.shape_237,p:{x:-48,y:161.7}},{t:this.shape_742,p:{x:-37.4,y:164.2}},{t:this.shape_391,p:{x:-26.3,y:164.3}},{t:this.shape_1109},{t:this.shape_735,p:{x:-2,y:164.2}},{t:this.shape_806,p:{x:14,y:164.3}},{t:this.shape_200,p:{x:22,y:164.3}},{t:this.shape_803,p:{x:36.7,y:161.9}},{t:this.shape_1108},{t:this.shape_270,p:{x:52.5,y:164.3}},{t:this.shape_670,p:{x:61.9,y:164.3}},{t:this.shape_981,p:{x:71,y:164.3}},{t:this.shape_1107},{t:this.shape_93,p:{x:92.6,y:164.3}},{t:this.shape_722,p:{x:107.7,y:164.2}},{t:this.shape_548,p:{x:118.3,y:164.3}},{t:this.shape_1106},{t:this.shape_265,p:{x:144.3,y:164.3}},{t:this.shape_198,p:{x:158.5,y:164.3}},{t:this.shape_1105},{t:this.shape_296,p:{x:177.9,y:165.9}},{t:this.shape_378,p:{x:186.7,y:165.9}},{t:this.shape_1104},{t:this.shape_191,p:{x:204.3,y:164.3}},{t:this.shape_804,p:{x:211.3,y:163.2}},{t:this.shape_181,p:{x:218.4,y:164.3}},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101},{t:this.shape_1100},{t:this.shape_1099},{t:this.shape_1098},{t:this.shape_355,p:{x:-274.7,y:188.1}},{t:this.shape_187,p:{x:-264.6,y:185.6}},{t:this.shape_473,p:{x:-248.6,y:188.1}},{t:this.shape_185,p:{x:-240.7,y:188.1}},{t:this.shape_89,p:{x:-226.5,y:188.1}},{t:this.shape_1097},{t:this.shape_130,p:{x:-207.1,y:188.1}},{t:this.shape_203,p:{x:-195.8,y:185.6}},{t:this.shape_161,p:{x:-186,y:188.1}},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_324,p:{x:-147.5,y:188.1}},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_402,p:{x:-111.2,y:188.1}},{t:this.shape_208,p:{x:-101.2,y:188.1}},{t:this.shape_714,p:{x:-90,y:188.1}},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_738,p:{x:-69.4,y:188.1}},{t:this.shape_700,p:{x:-57.2,y:188.1}},{t:this.shape_499,p:{x:-43.9,y:188.1}},{t:this.shape_1089},{t:this.shape_347,p:{x:-16.8,y:188.1}},{t:this.shape_712,p:{x:-5.7,y:188.1}},{t:this.shape_1088},{t:this.shape_125,p:{x:16.5,y:185.6}},{t:this.shape_340,p:{x:26.8,y:188.1}},{t:this.shape_903,p:{x:38.6,y:181.7}},{t:this.shape_1087},{t:this.shape_733,p:{x:56.3,y:188.1}},{t:this.shape_321,p:{x:65.4,y:188.1}},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_197,p:{x:84.8,y:185.6}},{t:this.shape_725,p:{x:92.2,y:188.1}},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_300,p:{x:121.7,y:188.1}},{t:this.shape_351,p:{x:130.5,y:189.7}},{t:this.shape_583,p:{x:139.4,y:188.1}},{t:this.shape_704,p:{x:155.3,y:188.1}},{t:this.shape_204,p:{x:165.6,y:188.1}},{t:this.shape_952,p:{x:175.5,y:188.1}},{t:this.shape_730,p:{x:183.5,y:188.1}},{t:this.shape_1082},{t:this.shape_111,p:{x:203.7,y:185.6}},{t:this.shape_202,p:{x:214,y:188.1}},{t:this.shape_175,p:{x:228.1,y:188.1}},{t:this.shape_159,p:{x:236.6,y:188.1}},{t:this.shape_82,p:{x:246,y:188.1}},{t:this.shape_1081},{t:this.shape_1080},{t:this.shape_950,p:{x:266.8,y:188.1}},{t:this.shape_727,p:{x:278,y:188.1}},{t:this.shape_1079},{t:this.shape_118,p:{x:-154.4,y:209.5}},{t:this.shape_421,p:{x:-143.8,y:212}},{t:this.shape_1064,p:{x:-136.4,y:210.9}},{t:this.shape_213,p:{x:-123.6,y:212}},{t:this.shape_354,p:{x:-116.9,y:209.5}},{t:this.shape_460,p:{x:-111.7,y:209.5}},{t:this.shape_1078},{t:this.shape_1077},{t:this.shape_157,p:{x:-81,y:212}},{t:this.shape_87,p:{x:-67.3,y:213.7}},{t:this.shape_268,p:{x:-57.4,y:212}},{t:this.shape_783,p:{x:-46.4,y:212.1}},{t:this.shape_1056,p:{x:-32.2,y:210.9}},{t:this.shape_647,p:{x:-24.3,y:212}},{t:this.shape_510,p:{x:-8.9,y:212}},{t:this.shape_97,p:{x:1.1,y:209.5}},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_147,p:{x:31.7,y:213.6}},{t:this.shape_598,p:{x:40.6,y:212}},{t:this.shape_1074},{t:this.shape_138,p:{x:65.4,y:212}},{t:this.shape_648,p:{x:76.4,y:212.1}},{t:this.shape_1073},{t:this.shape_156,p:{x:98.6,y:212}},{t:this.shape_318,p:{x:108,y:209.5}},{t:this.shape_883,p:{x:115.6,y:209.5}},{t:this.shape_978,p:{x:123.9,y:212}},{t:this.shape_151,p:{x:133.3,y:212}}]},1).to({state:[{t:this.shape_1170},{t:this.shape_1169},{t:this.shape_268,p:{x:-53.4,y:129.3}},{t:this.shape_596,p:{x:-44,y:129.3}},{t:this.shape_421,p:{x:-35.3,y:129.3}},{t:this.shape_363,p:{x:-26,y:127}},{t:this.shape_335,p:{x:-17.6,y:126.8}},{t:this.shape_244,p:{x:-10.2,y:129.3}},{t:this.shape_1168},{t:this.shape_1167},{t:this.shape_1166},{t:this.shape_1165},{t:this.shape_583,p:{x:36.3,y:129.3}},{t:this.shape_619,p:{x:46.8,y:129.3}},{t:this.shape_1164},{t:this.shape_1163},{t:this.shape_1162},{t:this.shape_1161},{t:this.shape_1160},{t:this.shape_1159},{t:this.shape_1158},{t:this.shape_1157},{t:this.shape_1156},{t:this.shape_1155},{t:this.shape_1154},{t:this.shape_1153},{t:this.shape_1152},{t:this.shape_1151},{t:this.shape_1150},{t:this.shape_1149},{t:this.shape_1148},{t:this.shape_1147},{t:this.shape_1146},{t:this.shape_1145},{t:this.shape_1144},{t:this.shape_1143},{t:this.shape_156,p:{x:169.3,y:177.1}},{t:this.shape_480,p:{x:181.6,y:176}},{t:this.shape_118,p:{x:189.6,y:174.5}},{t:this.shape_181,p:{x:199.9,y:177.1}},{t:this.shape_455,p:{x:218.8,y:177}},{t:this.shape_347,p:{x:232.9,y:177.1}},{t:this.shape_151,p:{x:242.3,y:177.1}},{t:this.shape_584,p:{x:249.3,y:176}},{t:this.shape_89,p:{x:-92.4,y:200.9}},{t:this.shape_1142},{t:this.shape_85,p:{x:-71.5,y:200.9}},{t:this.shape_588,p:{x:-62.2,y:200.9}},{t:this.shape_134,p:{x:-53.5,y:200.9}},{t:this.shape_94,p:{x:-44.2,y:198.6}},{t:this.shape_197,p:{x:-35.8,y:198.4}},{t:this.shape_159,p:{x:-28.4,y:200.9}},{t:this.shape_483,p:{x:-14.9,y:199.8}},{t:this.shape_97,p:{x:-6.9,y:198.4}},{t:this.shape_482,p:{x:1.3,y:198.4}},{t:this.shape_451,p:{x:9.5,y:200.9}},{t:this.shape_378,p:{x:19.8,y:202.5}},{t:this.shape_340,p:{x:34,y:200.9}},{t:this.shape_1141},{t:this.shape_161,p:{x:52.5,y:200.9}},{t:this.shape_463,p:{x:61.3,y:200.9}}]},1).wait(1));

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgqiASCQm/AAAAh2IAAw+QAAh3G/AAMBVFAAAQG/AAAAB3IAAQ+QAAB2m/AAg");
	mask.setTransform(-16,115.4);

	// Capa 3
	this.instance = new lib.hojita();
	this.instance.parent = this;
	this.instance.setTransform(-338,97,4.041,0.661);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-333,98.4,634.1,130.8);


(lib.Animar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.tarjetaBack();
	this.instance.parent = this;
	this.instance.setTransform(-70,-81,0.86,0.84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-81,131.6,171.4);


(lib._50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhCBaIAAivIAzAAIAAAZQANgSAKgFQAKgGANAAQATAAARAJIgRAoQgOgHgLAAQgMAAgIAFQgHAFgFAPQgEAOAAArIAAA3g");
	this.shape.setTransform(81.4,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhOBNQgSgPAAgWQAAgPAJgMQAIgLAPgGQAPgGAcgFQAlgGAPgFIAAgFQAAgNgIgGQgHgFgVAAQgPAAgHAFQgIAEgGANIgxgIQAIgaAVgMQAUgMAoAAQAjAAATAHQARAIAIALQAHALAAAfIgBA1QABAXACALQADALAHANIg2AAIgGgOIgBgFQgOALgRAGQgOAGgSAAQggAAgTgPgAgBAKQgXAFgHAEQgKAGgBAKQAAAKAJAHQAJAHANAAQAOAAANgIQAKgHADgJQACgGAAgQIAAgKQgKADgWAEg");
	this.shape_1.setTransform(61.1,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AhHBuQgWgQAAgXIAAgGIA/AHQACAJAFAEQAIAFAQAAQAVAAAKgFQAIgFADgIQADgGAAgPIAAgZQgZAcgkAAQgqAAgYgeQgTgXAAgjQAAgsAZgXQAZgYAlAAQAmABAYAcIAAgZIA0AAIAACdQgBAfgGAPQgFAQgMAIQgLAJgRAGQgSAEgcAAQg0AAgWgPgAgfhMQgNANAAAaQAAAdANAMQAMANATAAQAUgBANgNQAOgMAAgbQAAgbgOgNQgNgNgTAAQgUAAgMANg");
	this.shape_2.setTransform(37.4,26.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Ag+BSQgQgHgHgPQgIgOAAgZIAAhuIA3AAIAABRQAAAkADAJQADAIAIAFQAIAFAMAAQANAAALgHQALgHAEgJQAEgKAAgkIAAhLIA3AAIAACvIgzAAIAAgbQgLAPgSAIQgSAIgUAAQgVAAgRgIg");
	this.shape_3.setTransform(13.5,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AhDBnQgXgUAAgnIA2gFQABAVAGAIQAKAOASAAQATAAAHgKQAJgJgBgeIAAibIA6AAIAACYQAAAegGARQgJAVgWANQgVAMgjAAQgrAAgWgUg");
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
	this.shape_11.graphics.f("#0066FF").s().p("AowEvQgNgtgvgkQgfgYglgLIAAl1QAlgMAfgYQAvgiANguIRbAAQAIA4A3ApQAgAYAoAMIAAFvQgwAMgmAdQgmAdgQAjg");
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


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();


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

	this.instance_1 = new lib.AdorableKitten();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23.9,46.8,0.846,0.82,0,0,-53.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.846,skewY:-53.599999999999994,x:23.9,y:46.8,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.805,skewY:-18.6,x:6.1,y:15,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.723,skewY:0,x:-1,y:-3,scaleY:0.759}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:68.7,y:75.3},1).to({_off:true,scaleX:0.85,scaleY:0.82,skewY:-53.6,x:23.9,y:46.8},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-5.3,131.5,171.4);


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

	this.instance_1 = new lib.AdorableKitten();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23.9,46.8,0.846,0.82,0,0,-53.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.846,skewY:-53.599999999999994,x:23.9,y:46.8,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.805,skewY:-18.6,x:6.1,y:15,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.761,skewY:0,x:-3,y:0,scaleY:0.754}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:68.7,y:75.3},1).to({_off:true,scaleX:0.85,scaleY:0.82,skewY:-53.6,x:23.9,y:46.8},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-5.3,131.5,171.4);


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

	this.instance_1 = new lib.Sans();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.5,36.2,0.743,0.756,0,0,-46.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.743,scaleY:0.756,skewY:-46.3,x:19.5,y:36.2}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.78,scaleY:0.81,skewY:-11.7,x:5.6,y:10.6}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.767,scaleY:0.765,skewY:0,x:0,y:-5}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:65.4,y:75.3},1).to({_off:true,scaleX:0.74,scaleY:0.76,skewY:-46.3,x:19.5,y:36.2},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-5.3,131.5,171.4);


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

	this.instance_1 = new lib.Sans();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.5,36.2,0.743,0.756,0,0,-46.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.743,scaleY:0.756,skewY:-46.3,x:19.5,y:36.2}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.703,scaleY:0.73,skewY:-11.6,x:11.3,y:17.4}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.754,scaleY:0.755,skewY:0,x:-1,y:-4}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:65.4,y:75.3},1).to({_off:true,scaleX:0.74,scaleY:0.76,skewY:-46.3,x:19.5,y:36.2},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-5.3,131.5,171.4);


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

	this.instance_1 = new lib.Papyrus();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23,65,0.944,0.82,0,0,-54.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.944,skewY:-54.900000000000006,x:23,y:65,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.786,skewY:-25.6,x:10.6,y:22.5,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.754,skewY:0,x:-5,y:-5,scaleY:0.781}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:68.7,y:75.3},1).to({_off:true,scaleX:0.94,scaleY:0.82,skewY:-54.9,x:23,y:65},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-5.3,131.5,171.4);


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

	this.instance_1 = new lib.Papyrus();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23,65,0.944,0.82,0,0,-54.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.944,skewY:-54.900000000000006,x:23,y:65,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.786,skewY:-25.6,x:10.6,y:22.5,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.779,skewY:0,x:-4,y:-6,scaleY:0.764}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:68.7,y:75.3},1).to({_off:true,scaleX:0.94,scaleY:0.82,skewY:-54.9,x:23,y:65},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-5.3,131.5,171.4);


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

	this.instance_1 = new lib.Fluttershy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.7,65.1,0.932,0.82,0,0,-57.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.932,skewY:-57.7,x:28.7,y:65.1,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.72,skewY:-24.8,x:14.8,y:20.6,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.755,skewY:0,x:-4,y:-6,scaleY:0.775}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:68.7,y:75.3},1).to({_off:true,scaleX:0.93,scaleY:0.82,skewY:-57.7,x:28.7,y:65.1},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-5.3,131.5,171.4);


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

	this.instance_1 = new lib.Fluttershy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.7,65.1,0.932,0.82,0,0,-57.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.932,skewY:-57.7,x:28.7,y:65.1,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.72,skewY:-24.8,x:14.8,y:20.6,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.766,skewY:0,x:-4,y:-5,scaleY:0.764}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:68.7,y:75.3},1).to({_off:true,scaleX:0.93,scaleY:0.82,skewY:-57.7,x:28.7,y:65.1},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-5.3,131.5,171.4);


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

	this.instance_1 = new lib.Creeper();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33.2,49.8,0.811,0.82,0,0,-59.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{scaleX:0.811,skewY:-59.4,x:33.2,y:49.8,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.807,skewY:-21.8,x:7.4,y:19.3,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.752,skewY:0,x:-1,y:-5,scaleY:0.764}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:65.4},1).to({scaleX:0.98,skewY:119.9,x:62,y:75.6},1).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-5.3,131.5,171.4);


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

	this.instance_1 = new lib.Creeper();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33.2,49.8,0.811,0.82,0,0,-59.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{scaleX:0.811,skewY:-59.4,x:33.2,y:49.8,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.807,skewY:-21.8,x:7.4,y:19.3,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.774,skewY:0,x:-5,y:-5,scaleY:0.76}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:65.4},1).to({scaleX:0.98,skewY:119.9,x:62,y:75.6},1).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-5.3,131.5,171.4);


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

	this.instance_1 = new lib.Chara();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.3,45.3,0.774,0.82,0,0,-53.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.774,skewY:-53.400000000000006,x:28.3,y:45.3,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.783,skewY:-29.5,x:11.5,y:27.3,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.788,skewY:0,x:-5,y:-5,scaleY:0.766}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:65.8},1).to({_off:true,scaleX:0.77,scaleY:0.82,skewY:-53.4,x:28.3,y:45.3},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-5.3,131.5,171.4);


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

	this.instance_1 = new lib.Chara();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.3,45.3,0.774,0.82,0,0,-53.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.774,skewY:-53.400000000000006,x:28.3,y:45.3,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.783,skewY:-29.5,x:11.5,y:27.3,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.765,skewY:0,x:-3,y:-4,scaleY:0.763}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:65.8},1).to({_off:true,scaleX:0.77,scaleY:0.82,skewY:-53.4,x:28.3,y:45.3},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-5.3,131.5,171.4);


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

	this.instance_1 = new lib.Frisk();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.4,45.8,0.8,0.813,0,0,-52.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.8,scaleY:0.813,skewY:-52.20000000000001,x:26.4,y:45.8}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.872,scaleY:0.775,skewY:-26.6,x:4.2,y:31.3}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.781,scaleY:0.771,skewY:0,x:-5,y:-6}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60.1,x:65.8},1).to({_off:true,scaleX:0.8,scaleY:0.81,skewY:-52.2,x:26.4,y:45.8},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-5.3,131.5,171.4);


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

	this.instance_1 = new lib.Frisk();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.4,45.8,0.8,0.813,0,0,-52.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.8,scaleY:0.813,skewY:-52.20000000000001,x:26.4,y:45.8}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.872,scaleY:0.775,skewY:-26.6,x:4.2,y:31.3}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.74,scaleY:0.753,skewY:0,x:0,y:-4}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60.1,x:65.8},1).to({_off:true,scaleX:0.8,scaleY:0.81,skewY:-52.2,x:26.4,y:45.8},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-5.3,131.5,171.4);


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

	this.instance_1 = new lib.PinkiePie();
	this.instance_1.parent = this;
	this.instance_1.setTransform(31.9,54.6,0.909,0.82,0,0,-57.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.909,skewY:-57.8,x:31.9,y:54.6,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.842,skewY:-27.1,x:7.4,y:25,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.75,skewY:0,x:-4,y:-6,scaleY:0.786}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:68.7,y:75.3},1).to({_off:true,scaleX:0.91,scaleY:0.82,skewY:-57.8,x:31.9,y:54.6},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-5.3,131.5,171.4);


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

	this.instance_1 = new lib.PinkiePie();
	this.instance_1.parent = this;
	this.instance_1.setTransform(31.9,54.6,0.909,0.82,0,0,-57.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.909,skewY:-57.8,x:31.9,y:54.6,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.842,skewY:-27.1,x:7.4,y:25,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.753,skewY:0,x:0,y:-6,scaleY:0.764}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:68.7,y:75.3},1).to({_off:true,scaleX:0.91,scaleY:0.82,skewY:-57.8,x:31.9,y:54.6},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-5.3,131.5,171.4);


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

	this.instance_1 = new lib.Tails();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.5,60.7,0.89,0.738,0,-7,-54.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{scaleX:0.89,scaleY:0.738,skewX:-7,skewY:-54.7,x:16.5,y:60.7}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.816,scaleY:0.82,skewX:0,skewY:-17.7,x:5.4,y:15.2}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.725,scaleY:0.768,skewX:0,skewY:0,x:0,y:-5}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:66,y:75.3},1).to({scaleX:0.98,skewY:119.9,x:63.3,y:74.8},1).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-5.3,131.5,171.4);


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

	this.instance_1 = new lib.Tails();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.5,60.7,0.89,0.738,0,-7,-54.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{scaleX:0.89,scaleY:0.738,skewX:-7,skewY:-54.7,x:16.5,y:60.7}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.816,scaleY:0.82,skewX:0,skewY:-17.7,x:5.4,y:15.2}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.772,scaleY:0.768,skewX:0,skewY:0,x:-4,y:-8}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:66,y:75.3},1).to({scaleX:0.98,skewY:119.9,x:63.3,y:74.8},1).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-5.3,131.5,171.4);


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

	this.instance_1 = new lib.Grumpy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.5,48.2,0.81,0.82,0,0,-54.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.81,skewY:-54.2,x:28.5,y:48.2,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.686,skewY:-24.2,x:16.9,y:19.3,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.778,skewY:0,x:-4,y:0,scaleY:0.748}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:65.8,y:75.3},1).to({_off:true,scaleX:0.81,scaleY:0.82,skewY:-54.2,x:28.5,y:48.2},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-5.3,131.5,171.4);


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

	this.instance_1 = new lib.Grumpy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.5,48.2,0.81,0.82,0,0,-54.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.81,skewY:-54.2,x:28.5,y:48.2,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.686,skewY:-24.2,x:16.9,y:19.3,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.769,skewY:0,x:-4,y:-5,scaleY:0.771}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:65.8,y:75.3},1).to({_off:true,scaleX:0.81,scaleY:0.82,skewY:-54.2,x:28.5,y:48.2},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-5.3,131.5,171.4);


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
	this.shape.setTransform(372,61.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ag4BBQgZgYAAgoQAAgmAXgZQAXgaAnAAQAgAAAXAYQAXAXAAAhQAAARgLACIgkAEIg6AFQACALAMAGQAJAFANAAQAPAAAPgIIANgJQADACAJAQQAIAQAAAEQAAAAAAABQAAAAAAAAQAAABgBABQAAAAgBABQgVAWgrAAQgoAAgagYgAgUgkQgHAJAAALQABAFAEAAQANAAAZgEQAHgBgBgCQABgLgJgIQgHgIgJAAQgLAAgHAJg");
	this.shape_1.setTransform(357.3,61.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAfBUQgFgBAAgGIAAgYIABgZIgBgTIAAgRQAAgYgUAAQgGAAgJAGQgJAHAAAFIAABcQAAAGgGAAIgYABQgUAAgGgBQgGgBAAgEIABgpIAAgnQAAgqgHgZIAAgCQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAIAdgEIAfgFQACAAABAMQABAKACAAIAAAAIAAAAQgCAAAUgLQATgMAPAAQAWAAAPAKQAQAMAAAVIAAA1IAAAiIAAAhQAAAFgFAAIgZABQgVAAgFgBg");
	this.shape_2.setTransform(338.3,61.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Ag9A/QgYgYAAglQAAgnAXgZQAXgYAnAAQAmAAAYAYQAYAYAAAmQAAAngYAYQgXAYgnAAQglAAgYgYgAgVgXQgIAKAAANQAAAOAIAJQAJALAMAAQANAAAJgLQAIgJAAgOQAAgNgIgKQgJgLgNAAQgMAAgJALg");
	this.shape_3.setTransform(319.3,61.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgZB1QgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIgBgGIABgiIAAgkQAAgwgEgcIAAgEQAAgEAFAAIAPABIANABIAPgBIAPgBQAEABAAADIAAAEQgEAgAAAsIABAlIAAAlQAAAEgFAAQgFABgVAAQgTAAgGgBgAgWhBQgLgJAAgOQAAgMAMgJQAJgIAMAAQAOAAAKAIQAKAIAAANQAAAfgiAAQgMAAgKgIg");
	this.shape_4.setTransform(305.3,58.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgqA/QgZgZAAgmQAAgkAZgaQAYgZAlgBQAZABATAKQAFACAAADIgFAUIgHAVQAAABAAABQgBAAAAABQgBAAAAAAQAAABgBAAIgKgDQgKgDgGAAQgQAAgJAJQgIAKAAAOQAAAPAJAKQAKAIAQAAQAHAAAKgEIAJgDQADAAAEAVQAEAUAAAGQAAAHgVAEQgQAFgKAAQglgBgYgZg");
	this.shape_5.setTransform(293.3,61.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgqA/QgZgZAAgmQAAgkAZgaQAYgZAlgBQAZABATAKQAFACAAADIgFAUIgHAVQAAABAAABQgBAAAAABQgBAAAAAAQAAABgBAAIgKgDQgKgDgGAAQgQAAgJAJQgIAKAAAOQAAAPAJAKQAKAIAQAAQAHAAAKgEIAJgDQADAAAEAVQAEAUAAAGQAAAHgVAEQgQAFgKAAQglgBgYgZg");
	this.shape_6.setTransform(278.8,61.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAeBRQgEgBAAgDIgBgKQgBgHgCgBIAAAAIAAAAQABABgSALQgTALgQAAQgtAAgIgpQgEgSAAgkQAAgnAGgWQACgHAFAAIAYAAIAYAAQAFAAAAAEIAAAEQgEAYAAAYQAAAcACALQADATAUAAQAGAAAJgHQAJgGAAgIIAAhUQAAgGABgBQABgCAFAAIAaABIAZAAQAFgBABADIAAAEIgBAmIgBAlIABAlIAAAkQAAAFgEACQgGABgVAAIgagBg");
	this.shape_7.setTransform(261.2,62);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AguBUQgGgBAAgFIABgpIAAgoQgBgogHgaIAAgCQAAgBAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIAcgEIAcgFQACAAABALQAAAKADABIAAAAIAAAAQgCgBAQgIQARgJAOAAQAKAAAAAEIgBAOIgBAOIAAANIAAANQAAAHgHAAIgKAAIgJgBQgOAAgFAFQgGAEABAMIAAAXIABAWIAAAPIABAOQgBAFgFAAIgYABIgagBg");
	this.shape_8.setTransform(244.6,61.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgsBLIABgiIABgiQAAgHgJAAIgCAAIgCAAQgHAAAAgEIABgJIAAgIIAAgLIgBgLQAAgDALgBQAGAAABgDQABgHgBgOIAAgVQAAgTAEAAIANACIANACIAaADQAEABAAACIgBAVIgBAVQAAAIAFAAIASAAIASgBQABAAABAAQAAABABAAQAAAAABABQAAAAAAABIgBAMIgBALIAAAMIAAAMQAAADgFAAIgLAAIgMgBIgMAAQgDAAAAAIIAAAMIAAAMQAAAPADAFQAFAHAOAAIAMgCIALgCQAEAAAAAEIgCAQIgBAPIgBAGIgGAEQgWAMgaAAQgxAAAAglg");
	this.shape_9.setTransform(231,59.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgpBKQgMgTAAgEQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIAYgEQAPgFAAgLQAAgIgIgKIgRgRQgIgMAAgOQAAgZAagSQAWgQAaAAQADAAALASQALASAAADQAAACgDADIgJgBQgKAAgHAEQgJAFAAAKQAAAGAJAJQANAOADAEQAJANAAAPQAAAIgDAKQgEALgGAFQgNALgRAHQgRAIgPAAQgEAAgMgSg");
	this.shape_10.setTransform(218,61.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AAfBUQgFgBAAgGIAAgYIABgZIgBgTIAAgRQAAgYgUAAQgGAAgJAGQgJAHAAAFIAABcQAAAGgGAAIgYABQgUAAgGgBQgGgBAAgEIABgpIAAgnQAAgqgHgZIAAgCQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAIAdgEIAfgFQACAAABAMQABAKACAAIAAAAIAAAAQgCAAAUgLQATgMAPAAQAWAAAPAKQAQAMAAAVIAAA1IAAAiIAAAhQAAAFgFAAIgZABQgVAAgFgBg");
	this.shape_11.setTransform(201.8,61.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgfB3QgFgBAAgEIABgeQAEhFAAgVIgCg3IgBg3QAAgEAEAAIAQABIAPABIAQgBIAPgBQAFAAAAAEIgCA3IgCA3IABA8IABA8QAAABAAABQAAABAAAAQAAABgBAAQAAAAAAABIgFAAQgLACgSAAQgYAAgHgCg");
	this.shape_12.setTransform(186.8,58.1);

	this.jugar_btn = new lib._50();
	this.jugar_btn.name = "jugar_btn";
	this.jugar_btn.parent = this;
	this.jugar_btn.setTransform(278.1,327.2,1.022,0.758,0,0,0,33.3,25.3);
	new cjs.ButtonHelper(this.jugar_btn, 0, 1, 2, false, new lib._50(), 3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgNBJQgGgGAAgJQAAgIAGgGQAGgGAHAAQAJAAAGAGQAFAGAAAIQAAAJgFAGQgGAFgJAAQgHAAgGgFgAgJAeIgDgiIgHgsIgBgJQAAgFADgFQADgFAFgDQAFgCAEAAQAFAAAFADQAFACADAFQADAFAAAGIgBALIgIAvIgBAcg");
	this.shape_13.setTransform(430.5,239);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_14.setTransform(420.7,241.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_15.setTransform(408.4,241.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_16.setTransform(395.5,241.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_17.setTransform(382.4,241.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgOA2IglhQIgDgEIgEgCIgIgBIAAgUIBCAAIAAAUIgDAAQgGAAgCABQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAABIABAFIAQApIASgpIACgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAgBgBQgBgBgGAAIgFAAIAAgUIA6AAIAAAUIgJABIgDADIgFAGIgkBNg");
	this.shape_18.setTransform(369.2,241.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AghBJQgPgGgHgKQgHgJAAgKQAAgLAIgJQAHgKARgGQgOgGgGgJQgIgKAAgMQABgMAGgJQAHgKANgGQAOgGARAAQAXAAAQAKQAQAKAAAQQAAAKgGAJQgGAIgNAHQAQAHAKALQAHAJAAANQAAAUgQANQgSAOgdAAQgTAAgOgGgAgYAYQgFAGAAAGQAAAEAEAFQADAEAHADQAGADAJAAQAJAAAHgDQAHgCADgEQADgEAAgEQAAgGgEgDQgFgFgNgGIgPgGQgLAFgFAHgAgRgyQgGAEAAAGQAAAFADADQAFAFAMAFIAMAFIAEgEIAFgHIADgGIAAgFQABgGgHgEQgFgFgLAAQgKAAgGAEg");
	this.shape_19.setTransform(347.5,239.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AguBNIAAgUIAPAAQAJAAACgBIADgEQACgCAAgIIAAhUIgfAAIAAgWIAUgDIAWgFIAMgEIAKAAIAAB2QAAAHABACQABABAAABQAAAAABABQAAAAABAAQAAABABAAQACABAHABIAPAAIAAAUg");
	this.shape_20.setTransform(333.1,239);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_21.setTransform(311.2,241.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgFBHQgIgCgFgFQgGgEgCgGQgCgFAAgLIAAgyIgRAAIAAgWQAJgCAGgGQAHgFAEgHQADgHACgMIAUAAIAAAmIAjAAIAAAXIgjAAIAAAlQAAAMABAFQACADADACQAFADAGAAQAMAAALgHIAAAXQgKAEgHACQgIACgJAAQgKAAgHgDg");
	this.shape_22.setTransform(299.5,239.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AguA4IAAgVIAGAAQAGAAABgBIADgCIAAgIIAAgwIgQAAIAAgWQASgBATgIIAKAAIAAAQQAIgJAHgDQAGgEAGAAQAFAAAFACQAEADACAEQADAGAAAEQAAAIgFAFQgEAGgJgBIgDAAIgIgCIgEgBQgDAAgHAEIAAApQAAAGABACQAAAAABAAQAAABAAAAQAAAAABABQAAAAABAAIAIABIAFAAIAAAVg");
	this.shape_23.setTransform(289.7,241.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAZA2QgIgEgFgGQgKAHgIADQgJADgJAAQgPAAgKgJQgKgJAAgNQAAgHAEgGQAEgGAGgFQAHgDANgEQAOgDATgCIAAgIIgBgKQgBgDgEgBQgCgCgFAAIgGABIgFADIgEAHQgCAHgFADQgEADgFAAQgIAAgEgFQgEgEgBgGQABgIAEgFQAGgIANgFQAMgFAPAAQAOAAALAFQAKAFAEAHQAFAHAAAOIAAAmQAAAHABACQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQADABAEAAIAIgBIAAAVQgKADgIAAQgLAAgGgDgAgLAMQgGACgCADQgDADAAADQAAAFADADQAEADAFAAQAEAAAFgCIAJgGIAAgTQgOACgFADg");
	this.shape_24.setTransform(277.7,241.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_25.setTransform(264.7,241.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgsApQgQgPAAgaQAAgQAHgNQAIgMAOgHQAOgIARAAQATAAANAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgcAAgQgQgAgLgcQgFADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgHgJQgGgIgKAAQgFAAgGAEg");
	this.shape_26.setTransform(251.1,241.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgOA2IglhQIgEgEIgDgCIgIgBIAAgUIBCAAIAAAUIgDAAQgGAAgCABQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABIAAAFIARApIASgpIABgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQgCgBgGAAIgGAAIAAgUIA7AAIAAAUIgIABIgFADIgDAGIglBNg");
	this.shape_27.setTransform(237.5,241.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_28.setTransform(226.9,238.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgfA2QgHgDgFgEQgEgEgCgGQgCgGAAgJIAAgsIgBgIIgCgCIgIgBIgGAAIAAgVIA0gBIAABGIAAAKQABACADACQACABAEAAQAFAAAGgCIAMgIIAAgqIAAgHIgDgDIgGgBIgHAAIAAgVIA0gBIAABNIAAAIQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAQABABAGAAIAGAAIAAAVIgwABIAAgNQgKAHgJAEQgJADgKAAQgIAAgGgCg");
	this.shape_29.setTransform(215.3,241.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgDBRIAAgWIAEAAIAJgBIACgBQABgCAAgGIAAgZQgJAGgGACQgHACgIAAQgTAAgMgOQgPgSAAgYQAAgQAHgNQAGgOAMgHQALgIANABQAIAAAGACQAIADAKAGIAGgIIAXAAIAAB8QAAAGABACIADACIAIABIAFAAIAAAWgAgPgzQgFADgCAGQgDAIAAALQAAALADAHQACAGAFADQAFAEAEAAIAJgCIAKgFIAAgkQAAgJgCgDQgBgDgFgCQgEgEgFAAQgGAAgFAFg");
	this.shape_30.setTransform(201.3,243.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_31.setTransform(187.5,241.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_32.setTransform(167.6,241.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_33.setTransform(155.3,241.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgnBLQgLgHgGgNQgHgOAAgQQAAgRAHgNQAHgNALgHQAKgHAOAAQAHAAAHACQAFABAIAFIAAgaIgPAAIAAgVQAMgBAJgDQAIgCAKgDIAKAAIAAB+QAAAHABACIADACQABABAHAAIAFAAIAAAVIgvACIAAgLQgLAGgGADQgIACgIABQgMgBgLgGgAgPgEQgEAEgEAFQgDAIAAALQABAPAGAJQAGAIAIgBIAGAAIAMgIIAAgkQAAgHgCgDQAAgCgFgEQgFgDgEAAQgGAAgGAEg");
	this.shape_34.setTransform(141.8,238.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_35.setTransform(127.9,241.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgfA2QgHgDgFgEQgEgEgCgGQgCgGAAgJIAAgsIgBgIIgCgCIgIgBIgGAAIAAgVIA0gBIAABGIAAAKQABACADACQACABAEAAQAFAAAGgCIAMgIIAAgqIAAgHIgDgDIgGgBIgHAAIAAgVIA0gBIAABNIAAAIQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAQABABAGAAIAGAAIAAAVIgwABIAAgNQgKAHgJAEQgJADgKAAQgIAAgGgCg");
	this.shape_36.setTransform(114.1,241.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhEBMIAAgVIAFAAQAHAAACgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBIABgJIAAhTIgBgJQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAIgHgBIgHAAIAAgVIBPAAQAQAAAKADQAKADAHAGQAHAHAEAIQAEAJAAAKQAAATgPANQgPANgaAAIgZAAIAAAcIAAAHQAAABABAAQAAABABAAQAAAAABABQAAAAABAAIAGABIAHAAIAAAVgAgMgHIAMAAQAMAAAFgCQAGgDADgFQAEgFAAgHQAAgLgJgGQgGgEgLAAIgQAAg");
	this.shape_37.setTransform(99.7,239.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#663300").s().p("AgdANIAAgZIA7AAIAAAZg");
	this.shape_38.setTransform(80.2,241.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("AgNAPQgHgGAAgJQAAgHAHgGQAFgGAIAAQAJAAAFAGQAGAGABAHQgBAJgGAGQgFAFgJAAQgIAAgFgFg");
	this.shape_39.setTransform(72.4,244.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("AghBJQgPgHgHgKQgIgJAAgKQABgHAFgFQAFgGAHAAQAIAAAFAFQADADADAIQADAKADADQACADAGADQAGACAGAAQAGAAAHgDQAGgDADgFQADgGAAgHQAAgNgLgHQgIgFgPAAIgIAAIAAgUIAIAAQAMAAAGgCQAFgCAEgEQADgFAAgFQAAgIgGgFQgGgHgNAAQgJAAgHADQgGADgDAFQgEAFAAAJIgXAAIAAgEQAAgOAHgLQAFgKAOgGQAOgHAQAAQARAAAOAGQANAGAGAJQAHAJAAAKQAAAIgFAHQgDAHgIAFQgEAEgJADQAIABAGADQAHACAFAFQAEAFADAGQACAGAAAHQABANgIAKQgHALgPAHQgPAHgTAAQgTAAgOgGg");
	this.shape_40.setTransform(61.1,239.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_41.setTransform(197.4,201.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgaBmQgHgDgEgGQgEgFAAgGQAAgGAEgEQAGgEAFAAQAFAAADACQAEADAGAGQADAEADAAQADAAACgDQACgDAAgIIAAheIgQAAIAAgVQALAAAKgDQAKgCAKgFIAKAAIAAB0QgBARgEAIQgFAJgLAGQgLAFgOAAQgLAAgJgDgAAIhGQgGgGAAgIQAAgJAGgFQAGgGAIAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgGgGg");
	this.shape_42.setTransform(185.3,201.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAZA2QgIgEgFgGQgKAHgIADQgJADgJAAQgPAAgKgJQgKgJAAgNQAAgHAEgGQAEgGAGgFQAHgDANgEQAOgDATgCIAAgIIgBgKQgBgDgEgBQgCgCgFAAIgGABIgFADIgEAHQgCAHgFADQgEADgFAAQgIAAgEgFQgEgEgBgGQABgIAEgFQAGgIANgFQAMgFAPAAQAOAAALAFQAKAFAEAHQAFAHAAAOIAAAmQAAAHABACQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQADABAEAAIAIgBIAAAVQgKADgIAAQgLAAgGgDgAgLAMQgGACgCADQgDADAAADQAAAFADADQAEADAFAAQAEAAAFgCIAJgGIAAgTQgOACgFADg");
	this.shape_43.setTransform(176.9,201.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAEA4IAAgVIAIAAQABgBABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAgHIAAgmQAAgJgBgBQgEgEgFgBQgEABgFACQgFACgKAGIAAAqQABAIABABQACACAGAAIADAAIAAAVIhAAAIAAgVIAEAAQAHAAACgBIADgCIAAgGIAAgyIgQAAIAAgVQAUgDARgHIALAAIAAAPQALgJAJgCQAJgEAJAAQAKAAAJAEQAIAFADAHQAEAGAAANIAAAsIABAIIACADIAIAAIAGAAIAAAVg");
	this.shape_44.setTransform(162.9,201.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAOgHQAOgIASAAQASAAAOAHQAOAIAHAMQAIANAAAQQAAAZgQAQQgRAQgcAAQgcAAgQgQgAgKgcQgGADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgGgJQgHgIgKAAQgFAAgFAEg");
	this.shape_45.setTransform(148.1,201.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_46.setTransform(135.4,201.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AguA4IAAgVIAGAAQAGAAABgBIADgCIAAgIIAAgwIgQAAIAAgVQASgCATgIIAKAAIAAAQQAIgJAHgDQAGgEAGAAQAFAAAFADQAEACACAFQADAEAAAGQAAAGgFAGQgEAGgJAAIgDAAIgIgDIgEgBQgDAAgHAEIAAApQAAAGABABQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIAIABIAFAAIAAAVg");
	this.shape_47.setTransform(124.8,201.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_48.setTransform(112.7,201.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("Ag+BRIAAgWIAEAAIAJgBIADgCIABgIIAAhhIgRAAIAAgVIAUgDQAJgCAIgFIAKAAIAAANQANgIAFgCQAHgCAIgBQATAAAMAPQAOAQAAAZQgBAYgLAQQgOASgYAAQgHAAgGgBIgKgGIAAAVIAAAIIACACIAIABIAFAAIAAAWgAgKgtIAAAkQAAAIABACQABAEAEADQAEABAEAAQAJABAGgJQAGgHAAgRQAAgPgFgHQgFgIgHAAQgIAAgKAIg");
	this.shape_49.setTransform(99,203.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AghBQIAAgVIAEAAQAHAAACgBIADgCIABgIIAAhhIgRAAIAAgVQAUgBATgIIAMAAIAAB/IAAAHQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQACABAHAAIAEAAIAAAVg");
	this.shape_50.setTransform(452,171.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_51.setTransform(441.5,173.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_52.setTransform(421.6,173.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_53.setTransform(409.3,173.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAEA4IAAgVIAIgBQABAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAgHIAAgmQAAgJgBgBQgDgFgGAAQgFAAgEADQgFACgJAGIAAAqQgBAIACABQABACAHAAIADAAIAAAVIhAAAIAAgVIAEAAQAHAAACgBIADgCIAAgHIAAgxIgQAAIAAgWQAUgCARgHIAKAAIAAAPQAMgJAJgCQAIgEAKAAQAKAAAJAFQAHAEAEAHQAEAGAAANIAAAsIABAIIACACIAIABIAFAAIAAAVg");
	this.shape_54.setTransform(387.8,173.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_55.setTransform(373.5,173.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_56.setTransform(363.1,171.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgfA2QgHgDgFgEQgEgEgCgGQgCgGAAgJIAAgsIgBgIIgCgCIgIgBIgGAAIAAgVIA0gBIAABGIAAAKQABACADACQACABAEAAQAFAAAGgCIAMgIIAAgqIAAgHIgDgDIgGgBIgHAAIAAgVIA0gBIAABNIAAAIQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAQABABAGAAIAGAAIAAAVIgwABIAAgNQgKAHgJAEQgJADgKAAQgIAAgGgCg");
	this.shape_57.setTransform(351.5,174);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgDBRIAAgWIAEAAIAJgBIACgCQABgBAAgGIAAgYQgJAFgGACQgHACgIAAQgTAAgMgPQgPgRAAgYQAAgQAHgOQAGgNAMgHQALgHANAAQAIgBAGADQAIACAKAHIAGgJIAXAAIAAB8QAAAHABACIADACIAIABIAFAAIAAAWgAgPg0QgFAEgCAGQgDAIAAALQAAAKADAIQACAGAFADQAFAEAEAAIAJgBIAKgGIAAgkQAAgIgCgEQgBgDgFgCQgEgDgFAAQgGAAgFADg");
	this.shape_58.setTransform(337.5,176.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAYA2QgGgEgFgGQgLAHgIADQgJADgIAAQgQAAgKgJQgJgJAAgNQgBgHAEgGQADgGAHgFQAGgDAPgEQANgDATgCIAAgIIgBgKQgBgDgDgBQgDgCgEAAIgHABIgEADIgFAHQgDAHgEADQgEADgGAAQgGAAgFgFQgFgEAAgGQAAgIAFgFQAGgIAMgFQANgFAOAAQAPAAALAFQAKAFAFAHQADAHAAAOIAAAmQAAAHABACQABABAAAAQAAABAAAAQABABAAAAQABAAAAABQADABADAAIAIgBIAAAVQgJADgJAAQgJAAgIgDgAgMAMQgFACgDADQgCADAAADQAAAFADADQADADAGAAQAEAAAEgCIAKgGIAAgTQgOACgGADg");
	this.shape_59.setTransform(316.3,173.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgFBHQgIgCgFgFQgGgFgCgFQgCgFAAgKIAAgzIgRAAIAAgWQAJgCAGgFQAHgGAEgHQADgIACgLIAUAAIAAAlIAjAAIAAAYIgjAAIAAAkQAAAOABAEQACADADACQAFADAGAAQAMAAALgHIAAAXQgKAEgHACQgIACgJAAQgKAAgHgDg");
	this.shape_60.setTransform(304.5,172.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_61.setTransform(293.5,173.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_62.setTransform(281.2,173.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgFBHQgIgCgFgFQgGgFgCgFQgCgFAAgKIAAgzIgRAAIAAgWQAJgCAGgFQAHgGAEgHQADgIACgLIAUAAIAAAlIAjAAIAAAYIgjAAIAAAkQAAAOABAEQACADADACQAFADAGAAQAMAAALgHIAAAXQgKAEgHACQgIACgJAAQgKAAgHgDg");
	this.shape_63.setTransform(269.5,172.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAEA4IAAgVIAJgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAgHIAAgmQAAgJgCgBQgDgFgFAAQgFAAgEADQgGACgIAGIAAAqQAAAIABABQABACAHAAIADAAIAAAVIg/AAIAAgVIACAAQAIAAACgBIADgCIABgHIAAgxIgQAAIAAgWQATgCARgHIAKAAIAAAPQANgJAIgCQAJgEAIAAQALAAAJAFQAHAEAEAHQAEAGAAANIAAAsIAAAIIAEACIAHABIAFAAIAAAVg");
	this.shape_64.setTransform(257,173.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAOgHQAPgIARAAQASAAAOAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgcAAgQgQgAgKgcQgGADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgGgJQgHgIgKAAQgFAAgFAEg");
	this.shape_65.setTransform(242.2,173.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_66.setTransform(228.8,173.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_67.setTransform(208.8,173.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAZA2QgHgEgGgGQgKAHgIADQgJADgJAAQgPAAgKgJQgKgJAAgNQAAgHAEgGQADgGAHgFQAHgDANgEQAOgDATgCIAAgIIgBgKQgCgDgDgBQgCgCgFAAIgGABIgFADIgEAHQgCAHgFADQgEADgFAAQgIAAgEgFQgEgEgBgGQABgIAEgFQAGgIANgFQALgFAQAAQAOAAAKAFQALAFAEAHQAEAHABAOIAAAmQAAAHABACQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQADABAEAAIAIgBIAAAVQgKADgIAAQgLAAgGgDgAgLAMQgGACgCADQgDADAAADQAAAFADADQADADAGAAQADAAAGgCIAJgGIAAgTQgOACgFADg");
	this.shape_68.setTransform(196.6,173.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgFBHQgIgCgFgFQgGgFgCgFQgCgFAAgKIAAgzIgRAAIAAgWQAJgCAGgFQAHgGAEgHQADgIACgLIAUAAIAAAlIAjAAIAAAYIgjAAIAAAkQAAAOABAEQACADADACQAFADAGAAQAMAAALgHIAAAXQgKAEgHACQgIACgJAAQgKAAgHgDg");
	this.shape_69.setTransform(184.8,172.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AguA4IAAgVIAGAAQAGAAABgBIADgCIAAgIIAAgwIgQAAIAAgWQASAAATgJIAKAAIAAAQQAIgJAHgDQAGgEAGAAQAFAAAFADQAEACACAEQADAFAAAGQAAAGgFAGQgEAGgJAAIgDAAIgIgDIgEgBQgDAAgHAEIAAApQAAAGABABQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIAIABIAFAAIAAAVg");
	this.shape_70.setTransform(175,173.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_71.setTransform(162.9,173.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_72.setTransform(152.5,171.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_73.setTransform(141.9,173.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAYA2QgHgEgEgGQgLAHgIADQgJADgIAAQgQAAgKgJQgJgJAAgNQgBgHAEgGQADgGAHgFQAGgDAOgEQAOgDATgCIAAgIIgBgKQgCgDgCgBQgDgCgEAAIgHABIgFADIgEAHQgDAHgEADQgEADgGAAQgGAAgFgFQgFgEAAgGQAAgIAFgFQAGgIANgFQAMgFAPAAQAOAAALAFQAKAFAEAHQAFAHAAAOIAAAmQAAAHAAACQABABAAAAQAAABAAAAQABABAAAAQABAAAAABQADABADAAIAJgBIAAAVQgKADgIAAQgKAAgIgDgAgLAMQgGACgCADQgDADAAADQAAAFADADQADADAGAAQAEAAAEgCIAKgGIAAgTQgOACgFADg");
	this.shape_74.setTransform(129,173.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_75.setTransform(110.9,171.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgNBMQgLgDgLgIIgEALIgRAAIgKg7IAUgFQAHASAQAMQAPAMARAAQAIAAAGgCQAFgCADgDQADgEgBgEQAAgHgGgEQgHgFgPgFIgZgHIgQgGQgJgFgGgEQgFgFgDgHQgEgIAAgJQAAgMAGgKQAIgKANgHQAOgGAQAAQASAAARAKIAEgHIAQAAIAMAzIgUAGQgKgTgNgIQgNgJgOAAQgIAAgGAEQgFAEgBAFQAAAFAGAFQAEAEANAEIAdAIQAYAHAKALQALAMAAAPQAAAUgQAOQgSAPgaAAQgLAAgKgDg");
	this.shape_76.setTransform(99.4,171.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF0000").s().p("AgdANIAAgZIA7AAIAAAZg");
	this.shape_77.setTransform(80.2,173.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF0000").s().p("AgNAPQgHgGAAgJQAAgHAHgGQAFgGAIAAQAJAAAFAGQAGAGABAHQgBAJgGAGQgFAFgJAAQgIAAgFgFg");
	this.shape_78.setTransform(72.4,177.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF0000").s().p("AAnBQIgBgFIhkAAIAAgVQAXgPAigcQAQgNAGgLQAEgIAAgIQAAgKgIgGQgIgHgMAAQgKAAgIAEQgHADgEAHQgEAHAAAHIAAAIIgWACIgBgLQAAgQAIgMQAHgLAQgIQAPgHASAAQARAAAOAGQAOAHAIAKQAHALAAALQAAAMgFAKQgGAMgNAJQgMALgmAXIAkAAQAJAAADgBIAEgDIADgKIABgFIAVAAIgKA4g");
	this.shape_79.setTransform(61.1,171.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_80.setTransform(357.9,121.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAYA2QgHgEgFgGQgLAHgHADQgJADgIAAQgQAAgKgJQgJgJAAgNQAAgHADgGQADgGAHgFQAGgDAPgEQANgDATgCIAAgIIgBgKQgBgDgDgBQgDgCgFAAIgGABIgEADIgFAHQgDAHgEADQgEADgGAAQgGAAgFgFQgFgEABgGQgBgIAFgFQAGgIAMgFQAMgFAPAAQAPAAAKAFQALAFAFAHQADAHAAAOIAAAmQAAAHABACQABABAAAAQAAABAAAAQABABAAAAQABAAABABQACABADAAIAIgBIAAAVQgJADgJAAQgKAAgHgDgAgMAMQgFACgDADQgCADAAADQAAAFADADQADADAGAAQADAAAFgCIAKgGIAAgTQgNACgHADg");
	this.shape_81.setTransform(345.7,121.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgFBIQgIgDgFgFQgGgEgCgGQgCgFAAgLIAAgzIgRAAIAAgVQAJgCAGgGQAHgFAEgHQADgHACgMIAUAAIAAAmIAjAAIAAAWIgjAAIAAAmQAAANABADQACAEADACQAFADAGAAQAMAAALgHIAAAXQgKAFgHACQgIABgJAAQgKAAgHgCg");
	this.shape_82.setTransform(333.9,119.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AguA4IAAgVIAGAAQAGAAABgBIADgCIAAgHIAAgyIgQAAIAAgVQASAAATgJIAKAAIAAAQQAIgJAHgEQAGgDAGAAQAFAAAFACQAEADACAEQADAFAAAFQAAAIgFAFQgEAFgJAAIgDAAIgIgCIgEgBQgDAAgHAEIAAAqQAAAFABACQAAAAABAAQAAABAAAAQAAAAABABQAAAAABAAQACABAGAAIAFAAIAAAVg");
	this.shape_83.setTransform(324,121.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAYA2QgHgEgEgGQgLAHgIADQgJADgIAAQgQAAgKgJQgJgJAAgNQgBgHAEgGQADgGAHgFQAGgDAOgEQAOgDATgCIAAgIIgBgKQgCgDgCgBQgDgCgEAAIgHABIgFADIgEAHQgDAHgEADQgEADgGAAQgGAAgFgFQgFgEAAgGQAAgIAFgFQAGgIANgFQAMgFAPAAQAOAAALAFQAKAFAEAHQAFAHAAAOIAAAmQAAAHABACQAAABAAAAQAAABAAAAQABABAAAAQABAAAAABQADABADAAIAJgBIAAAVQgKADgIAAQgKAAgIgDgAgLAMQgGACgDADQgCADAAADQAAAFADADQADADAGAAQAEAAAFgCIAJgGIAAgTQgOACgFADg");
	this.shape_84.setTransform(312.1,121.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_85.setTransform(299.1,121.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_86.setTransform(278.4,121.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgnBLQgKgHgIgNQgGgOAAgRQAAgQAHgNQAHgNAKgHQALgHAOAAQAHAAAHACQAFACAIAEIAAgaIgPAAIAAgVQANgCAIgCQAJgCAJgDIAKAAIAAB+QAAAHABACIACACQACABAHAAIAFAAIAAAVIgvACIAAgMQgLAIgGACQgIADgIAAQgMAAgLgHgAgPgEQgFAEgDAFQgCAIAAALQAAAPAGAJQAGAIAIAAIAGgBIAMgHIAAglQAAgHgCgCQgBgEgEgDQgFgDgFAAQgGAAgFAEg");
	this.shape_87.setTransform(264.9,118.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AguA4IAAgVIAGAAQAGAAABgBIADgCIAAgHIAAgyIgQAAIAAgVQASAAATgJIAKAAIAAAQQAIgJAHgEQAGgDAGAAQAFAAAFACQAEADACAEQADAFAAAFQAAAIgFAFQgEAFgJAAIgDAAIgIgCIgEgBQgDAAgHAEIAAAqQAAAFABACQAAAAABAAQAAABAAAAQAAAAABABQAAAAABAAQACABAGAAIAFAAIAAAVg");
	this.shape_88.setTransform(245.2,121.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAZA2QgIgEgEgGQgLAHgIADQgJADgJAAQgPAAgKgJQgKgJABgNQAAgHADgGQAEgGAGgFQAGgDAOgEQAOgDATgCIAAgIIgBgKQgBgDgEgBQgCgCgEAAIgHABIgFADIgEAHQgDAHgEADQgEADgGAAQgGAAgFgFQgEgEgBgGQABgIAEgFQAGgIANgFQAMgFAPAAQAOAAALAFQAKAFAEAHQAFAHAAAOIAAAmQAAAHABACQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQADABAEAAIAIgBIAAAVQgKADgIAAQgLAAgGgDgAgLAMQgGACgCADQgDADAAADQAAAFADADQAEADAFAAQAEAAAFgCIAJgGIAAgTQgOACgFADg");
	this.shape_89.setTransform(233.3,121.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("Ag9BQIAAgVIADAAIAJAAIACgDQACgCAAgGIAAhhIgQAAIAAgVIATgEQAJgBAIgFIALAAIAAANQAMgIAFgCQAHgDAIAAQATAAAMAPQAOAQAAAZQAAAYgNAPQgNATgYAAQgHAAgFgBIgMgHIAAAWIABAIIADADIAHAAIAFAAIAAAVgAgLgtIAAAjQAAAJACADQABADAEACQAEACAEAAQAKAAAFgHQAGgIAAgQQAAgQgFgIQgFgHgHAAQgIAAgLAIg");
	this.shape_90.setTransform(219.4,123.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AAFA4IAAgVIAIAAQAAgBABAAQAAAAABAAQAAgBAAAAQABgBAAAAQABgCAAgFIAAgoQAAgIgBgCQgDgDgGAAQgEAAgFABQgFACgKAHIAAArQABAGABADQACABAFAAIAEAAIAAAVIg/AAIAAgVIADAAQAHAAACgBIADgCIAAgGIAAgzIgPAAIAAgVQATgCARgHIALAAIAAAPQALgIAJgEQAIgDAJAAQALAAAIAEQAJAFADAHQAEAHAAAMIAAAtIABAHIACADIAIAAIAGAAIAAAVg");
	this.shape_91.setTransform(197.3,121.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgfA2QgHgDgFgEQgEgEgCgGQgCgGAAgJIAAgsIgBgIIgCgCIgIgBIgGAAIAAgVIA0gBIAABGIAAAKQABACADACQACABAEAAQAFAAAGgCIAMgIIAAgqIAAgHIgDgDIgGgBIgHAAIAAgVIA0gBIAABNIAAAIQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAQABABAGAAIAGAAIAAAVIgwABIAAgNQgKAHgJAEQgJADgKAAQgIAAgGgCg");
	this.shape_92.setTransform(182,121.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AAYA2QgGgEgFgGQgLAHgIADQgJADgIAAQgQAAgKgJQgJgJAAgNQAAgHADgGQADgGAHgFQAGgDAPgEQANgDATgCIAAgIIgBgKQgBgDgDgBQgDgCgEAAIgHABIgEADIgFAHQgDAHgEADQgEADgGAAQgGAAgFgFQgFgEABgGQgBgIAFgFQAGgIAMgFQANgFAOAAQAPAAAKAFQALAFAFAHQADAHAAAOIAAAmQAAAHABACQABABAAAAQAAABAAAAQABABAAAAQABAAABABQACABADAAIAIgBIAAAVQgJADgJAAQgKAAgHgDgAgMAMQgFACgDADQgCADAAADQAAAFADADQADADAGAAQAEAAAEgCIAKgGIAAgTQgNACgHADg");
	this.shape_93.setTransform(160.7,121.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_94.setTransform(147.5,121.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgFBIQgIgDgFgFQgGgEgCgGQgCgFAAgLIAAgzIgRAAIAAgVQAJgCAGgGQAHgFAEgHQADgHACgMIAUAAIAAAmIAjAAIAAAWIgjAAIAAAmQAAANABADQACAEADACQAFADAGAAQAMAAALgHIAAAXQgKAFgHACQgIABgJAAQgKAAgHgCg");
	this.shape_95.setTransform(135.9,119.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AghBQIAAgVIAEAAQAHAAACgBIADgCIABgIIAAhhIgRAAIAAgVQAUgBATgIIAMAAIAAB/IAAAHQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQACABAHAAIAEAAIAAAVg");
	this.shape_96.setTransform(127.1,118.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAOgHQAPgIARAAQASAAAOAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgcAAgQgQgAgKgcQgGADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgGgJQgHgIgKAAQgFAAgFAEg");
	this.shape_97.setTransform(116.2,121.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgQBMIguh1IgFgJIgEgDIgIgBIAAgVIBIAAIAAAVIgCAAIgJAAQgBAAAAABQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQAAABAAAAQgBABAAAAIADAKIAaBLIAdhNIACgIQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQgCgBgHAAIgFAAIAAgVIA8AAIAAAVQgIAAgCABQgEADgEAKIgtB0g");
	this.shape_98.setTransform(101.1,119.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF0000").s().p("AgdANIAAgZIA7AAIAAAZg");
	this.shape_99.setTransform(81.4,121.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF0000").s().p("AgNAPQgHgGAAgJQAAgHAHgGQAFgGAIAAQAIAAAHAGQAFAGABAHQgBAJgFAGQgHAFgIAAQgIAAgFgFg");
	this.shape_100.setTransform(73.6,124.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF0000").s().p("AguBOIAAgVIAPAAQAJAAACgCIADgDQACgDAAgHIAAhVIgfAAIAAgVIAUgCIAWgGIAMgEIAKAAIAAB2QAAAIABABQAAABABABQAAAAABABQAAAAABAAQAAABABAAQACACAHAAIAPAAIAAAVg");
	this.shape_101.setTransform(62.9,119.1);

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

	// Capa 5
	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(0,0,0,0.498)").s().p("EgtrAcMQgyAAAAgyMAAAg07QAAgyAyAAIBGAAIAAhGQAAgyAyAAMBZfAAAQAyAAAAAyMAAAAt9Qg6BshPBuQhoCQhqBaQhYBlhZA/g");
	this.shape_103.setTransform(278.7,189.2);

	var maskedShapeInstanceList = [this.shape_103];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_103).wait(1));

}).prototype = getMCSymbolPrototype(lib.instructions, new cjs.Rectangle(-6.7,8.8,582.8,349.8), null);


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

	this.instance_1 = new lib.SonicandBSonic();
	this.instance_1.parent = this;
	this.instance_1.setTransform(34.5,60.6,0.74,0.65,0,0,-57.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.74,scaleY:0.65,skewY:-57.599999999999994,x:34.5,y:60.6}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.814,scaleY:0.8,skewY:-18.5,x:5.7,y:17.3}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.78,scaleY:0.771,skewY:0,x:-5,y:-8}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:65.8},1).to({_off:true,scaleX:0.74,scaleY:0.65,skewY:-57.6,x:34.5,y:60.6},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-5.3,131.5,171.4);


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

	this.instance_1 = new lib.SonicandBSonic();
	this.instance_1.parent = this;
	this.instance_1.setTransform(36.4,61.8,0.694,0.61,0,0,-57.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.694,scaleY:0.61,skewY:-57.599999999999994,x:36.4,y:61.8}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.712,scaleY:0.7,skewY:-18.5,x:13,y:25}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.779,scaleY:0.74,skewY:0,x:-5,y:-2}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:65.8},1).to({_off:true,scaleX:0.69,scaleY:0.61,skewY:-57.6,x:36.4,y:61.8},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-5.3,131.5,171.4);


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

	this.instance_1 = new lib.Steve();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33,50.4,0.863,0.82,0,0,-54.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.863,skewY:-54.8,x:33,y:50.4,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.836,skewY:-24.1,x:6.3,y:20.4,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.762,skewY:0,x:-6,y:-6,scaleY:0.775}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:68.7,y:75.3},1).to({_off:true,scaleX:0.86,scaleY:0.82,skewY:-54.8,x:33,y:50.4},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-5.3,131.5,171.4);


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

	this.instance_1 = new lib.Steve();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33,50.4,0.863,0.82,0,0,-54.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.863,skewY:-54.8,x:33,y:50.4,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.836,skewY:-24.1,x:6.3,y:20.4,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.749,skewY:0,x:-1,y:-4,scaleY:0.761}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:68.7,y:75.3},1).to({_off:true,scaleX:0.86,scaleY:0.82,skewY:-54.8,x:33,y:50.4},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-5.3,131.5,171.4);


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

}).prototype = getMCSymbolPrototype(lib.espantosax, new cjs.Rectangle(-16.7,17.9,262.6,89.6), null);


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
			window.open("memokylie3.html", "_self");
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
	this.nextlevel.setTransform(279.2,251.2,1,1,0,0,0,33.4,25.3);
	new cjs.ButtonHelper(this.nextlevel, 0, 1, 2, false, new lib._50(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape.setTransform(431.4,193.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_1.setTransform(419.1,193.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghBQIAAgVIAEAAQAHAAACgBIACgCIABgIIAAhhIgQAAIAAgVQAUgBATgIIALAAIAAB/IABAHQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQACABAHAAIAEAAIAAAVg");
	this.shape_2.setTransform(409,191);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_3.setTransform(401.1,191);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_4.setTransform(390.5,193.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghBSIAAgVIAGAAIAIAAIACgCIABgGIAAg0IgRAAIAAgUIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgegzIAYgVQAJgJAIAAQAHAAAFAEQAEAFAAAHQAAAFgEAFQgEAFgKACIgiAIg");
	this.shape_5.setTransform(380,190.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgwBQIAAgVIAFAAQAHAAABgBIACgCIABgIIAAg1IgQAAIAAgXIAQAAIAAgLQAAgMAEgIQAFgJALgGQAMgFAOAAQAQAAAKAHQAJAHAAAIQAAAHgEAEQgEAEgHAAIgGgBIgEgCIgGgGIgFgEIgDgBQgEAAgCADQgCADAAALIAAALIASAAIAAAXIgSAAIAAA1IAAAIIADACIAHABIAGAAIAAAVg");
	this.shape_6.setTransform(373.1,191);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_7.setTransform(363.5,191);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnBLQgLgHgGgOQgHgNAAgRQAAgQAHgMQAHgOALgHQAKgHAOAAQAHAAAHACQAFACAIAEIAAgaIgPAAIAAgWQAMgBAJgCQAIgBAKgFIAKAAIAAB+QAAAIABACIADACQABABAHAAIAFAAIAAAVIgvABIAAgLQgLAHgGADQgIACgIAAQgMABgLgHgAgPgEQgEAEgEAFQgCAIgBALQABAPAGAKQAGAGAIABIAGgCIAMgGIAAglQAAgHgCgCQgBgEgEgDQgFgDgFAAQgFAAgGAEg");
	this.shape_8.setTransform(352.3,191.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_9.setTransform(323.9,193.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAZA2QgHgEgGgGQgLAHgHADQgJADgJAAQgPAAgKgJQgKgJAAgNQABgHADgGQADgGAHgFQAHgDANgEQAOgDATgCIAAgIIgBgKQgCgDgDgBQgCgCgFAAIgGABIgFADIgEAHQgCAHgFADQgEADgFAAQgIAAgEgFQgEgEAAgGQAAgIAEgFQAGgIAMgFQAMgFAPAAQAPAAAKAFQALAFAEAHQAEAHAAAOIAAAmQAAAHACACQAAABAAAAQAAABABAAQAAABAAAAQABAAABABQACABAEAAIAHgBIAAAVQgJADgJAAQgJAAgHgDgAgMAMQgFACgCADQgDADAAADQAAAFADADQADADAGAAQADAAAGgCIAJgGIAAgTQgNACgHADg");
	this.shape_10.setTransform(311.7,193.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAoA4IAAgVQAHAAABgBIADgCQABgBAAgGIAAgnQAAgHgBgCIgDgEQgDgBgEAAQgEAAgFACQgFACgKAGIAAAqQAAAGABABQABABAAAAQAAABABAAQAAAAAAABQABAAAAAAQACABAHAAIAAAVIg7AAIAAgVQAHAAACgBIADgDIAAgHIAAglQAAgIgBgDQgDgFgGABIgGABQgEAAgDACIgJAGIgCABIAAAqIAAAHIADADIAGABIADAAIAAAVIg/AAIAAgVIAEAAQAHAAABgBQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBQABgBAAgGIAAgxIgQAAIAAgUQAUgCARgIIAKAAIAAAPQAJgIAKgDQAKgEAKAAQAHAAAGACQAFACAEADQAEADADAFQAKgHAKgEQAKgEAKAAQAJAAAHADQAHADAEAGQAFAGABAFIABAMIAAAtQAAAFABABQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQABABAHAAIAEAAIAAAVg");
	this.shape_11.setTransform(294.1,193.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_12.setTransform(269.2,193.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_13.setTransform(256.9,193.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZBmQgJgDgDgGQgEgFAAgGQAAgGAEgEQAGgEAGAAQADAAAEACQAFADAFAGQADAEADAAQADAAACgDQACgDAAgIIAAheIgQAAIAAgVQALAAAKgDQAKgCAKgFIAKAAIAAB0QgBARgEAIQgFAJgLAGQgLAFgOAAQgMAAgHgDgAAIhGQgGgGAAgIQAAgJAGgFQAGgGAIAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgGgGg");
	this.shape_14.setTransform(244.8,193.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAZA2QgIgEgEgGQgLAHgIADQgJADgJAAQgPAAgKgJQgKgJABgNQAAgHADgGQAEgGAGgFQAGgDAOgEQAOgDATgCIAAgIIgBgKQgBgDgEgBQgCgCgEAAIgHABIgFADIgEAHQgDAHgEADQgEADgGAAQgGAAgFgFQgEgEgBgGQABgIAEgFQAGgIANgFQAMgFAPAAQAOAAALAFQAKAFAEAHQAFAHAAAOIAAAmQAAAHABACQAAABAAAAQAAABAAAAQABABAAAAQABAAAAABQADABAEAAIAIgBIAAAVQgKADgIAAQgLAAgGgDgAgLAMQgGACgCADQgDADAAADQAAAFADADQAEADAFAAQAEAAAFgCIAJgGIAAgTQgOACgFADg");
	this.shape_15.setTransform(236.4,193.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAEA4IAAgVIAIAAQABgBABAAQAAAAABAAQAAgBAAAAQABgBAAAAQABgCAAgFIAAgoQAAgHgCgDQgDgDgFAAQgEAAgFACQgGACgIAGIAAArQAAAHABACQABABAHAAIADAAIAAAVIg/AAIAAgVIACAAQAIAAACgBIADgCIABgGIAAgzIgQAAIAAgUQATgDARgHIAKAAIAAAPQAMgJAJgDQAIgDAKAAQAKAAAJAEQAHAFAEAHQAEAGAAANIAAAtIAAAHIAEADIAHAAIAFAAIAAAVg");
	this.shape_16.setTransform(222.4,193.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAPgHQAOgIARAAQATAAANAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgbAAgRgQgAgKgcQgGADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgGgJQgHgIgKAAQgFAAgFAEg");
	this.shape_17.setTransform(207.6,193.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_18.setTransform(194.9,193.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AguA4IAAgVIAGAAQAGAAABgBIADgCIAAgHIAAgyIgQAAIAAgUQASgBATgJIAKAAIAAAQQAIgJAHgEQAGgDAGAAQAFAAAFACQAEADACAFQADAFAAAFQAAAGgFAGQgEAFgJABIgDAAIgIgDIgEgBQgDAAgHAEIAAAqQAAAFABABQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIAIABIAFAAIAAAVg");
	this.shape_19.setTransform(184.3,193.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_20.setTransform(172.2,193.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag+BQIAAgVIAEAAIAJAAIADgDIABgIIAAhhIgRAAIAAgVIAUgDQAJgCAIgFIAKAAIAAANQANgIAFgCQAHgCAHgBQAUAAAMAPQAOAQgBAZQABAYgMAQQgOASgXAAQgIAAgGgBIgKgHIAAAWIAAAIIACADIAIAAIAFAAIAAAVgAgKgtIAAAjQgBAJACACQACAEAEACQADACAFAAQAIABAGgJQAGgHAAgQQAAgQgFgHQgFgIgHAAQgIAAgKAIg");
	this.shape_21.setTransform(158.5,195.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAFA4IAAgVIAIAAQAAgBABAAQAAAAABAAQAAgBAAAAQABgBAAAAQABgCAAgFIAAgoQAAgHgCgDQgDgDgFAAQgFAAgEACQgGACgIAGIAAArQAAAHABACQABABAHAAIADAAIAAAVIg/AAIAAgVIACAAQAIAAACgBIADgCIABgGIAAgzIgQAAIAAgUQATgDARgHIAKAAIAAAPQANgJAIgDQAJgDAIAAQALAAAJAEQAHAFAEAHQAEAGAAANIAAAtIAAAHIAEADIAHAAIAFAAIAAAVg");
	this.shape_22.setTransform(136.4,193.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgsApQgQgPAAgaQAAgQAHgNQAIgMANgHQAOgIASAAQATAAANAHQAOAIAIAMQAHANAAAQQAAAZgQAQQgRAQgcAAQgcAAgQgQgAgLgcQgFADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgHgJQgGgIgKAAQgFAAgGAEg");
	this.shape_23.setTransform(121.6,193.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_24.setTransform(108.3,193.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAnBQIgBgFIhkAAIAAgVQAXgPAigcQAQgNAGgLQAEgIAAgIQAAgKgIgGQgIgHgMAAQgKAAgIAEQgHADgEAHQgEAHAAAHIAAAIIgWACIgBgLQAAgQAIgMQAHgLAQgIQAPgHASAAQARAAAOAGQAOAHAIAKQAHALAAALQAAAMgFAKQgGAMgNAJQgMALgmAXIAkAAQAJAAADgBIAEgDIADgKIABgFIAVAAIgKA4g");
	this.shape_25.setTransform(399.3,159);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AghBQIAAgVIAEAAQAHAAACgBIACgCIACgIIAAhhIgRAAIAAgVQAUgBATgIIALAAIAAB/IABAHQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQACABAHAAIAEAAIAAAVg");
	this.shape_26.setTransform(380.7,158.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_27.setTransform(370.2,161);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgOA2IglhQIgDgEIgEgCIgIgBIAAgUIBCAAIAAAUIgDAAQgGAAgCABQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAABIABAFIAQApIASgpIACgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAgBgBQgBgBgGAAIgFAAIAAgUIA6AAIAAAUIgJABIgDADIgFAGIgkBNg");
	this.shape_28.setTransform(357.1,161.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_29.setTransform(346.4,158.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAFA4IAAgVIAHgBQABAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAQABgCAAgGIAAgmQAAgIgBgDQgDgEgGAAQgEABgFABQgFACgKAHIAAAqQABAIABABQACACAFAAIAEAAIAAAVIhAAAIAAgVIAEAAQAHAAACgBIADgCIAAgHIAAgyIgQAAIAAgVQAUgCARgHIALAAIAAAPQAMgIAIgEQAIgDAKAAQAKAAAIAFQAJAEADAHQAEAHAAAMIAAAsIABAIIACACIAIABIAGAAIAAAVg");
	this.shape_30.setTransform(334.9,160.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AghBQIAAgVIAFAAQAGAAACgBIADgCIABgIIAAhhIgRAAIAAgVQAUgBAUgIIALAAIAAB/IAAAHQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQACABAHAAIAEAAIAAAVg");
	this.shape_31.setTransform(315.8,158.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_32.setTransform(305.3,161);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAZA2QgHgEgGgGQgLAHgHADQgJADgJAAQgPAAgKgJQgKgJAAgNQAAgHAEgGQADgGAHgFQAHgDANgEQAOgDATgCIAAgIIgBgKQgCgDgDgBQgCgCgFAAIgGABIgFADIgEAHQgCAHgFADQgEADgFAAQgIAAgEgFQgEgEgBgGQABgIAEgFQAGgIANgFQALgFAQAAQAOAAAKAFQALAFAEAHQAEAHABAOIAAAmQAAAHABACQAAABAAAAQAAABABAAQAAABAAAAQABAAABABQACABAEAAIAIgBIAAAVQgKADgIAAQgLAAgGgDgAgLAMQgGACgCADQgDADAAADQAAAFADADQADADAGAAQADAAAGgCIAJgGIAAgTQgOACgFADg");
	this.shape_33.setTransform(284.8,161);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AguA4IAAgVIAGAAQAGAAABgBIADgCIAAgIIAAgxIgQAAIAAgVQASgBATgIIAKAAIAAAQQAIgJAHgEQAGgDAGAAQAFAAAFACQAEADACAEQADAFAAAFQAAAIgFAFQgEAGgJgBIgDAAIgIgCIgEgBQgDAAgHAEIAAApQAAAGABACQAAAAABAAQAAABAAAAQAAAAABABQAAAAABAAIAIABIAFAAIAAAVg");
	this.shape_34.setTransform(273.5,160.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAPgHQAOgIARAAQATAAANAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgbAAgRgQgAgLgcQgFADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgHgJQgGgIgKAAQgFAAgGAEg");
	this.shape_35.setTransform(260.9,161);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAEBQIAAgVIAEAAIAGgBIADgCIAAgIIAAgmQAAgHgBgCQgBgCgCgCQgCgBgEAAQgFAAgFACQgFACgIAFIAAArIAAAIIADACIAHABIACAAIAAAVIhAAAIAAgVIAHAAQAFAAABgBIADgCIAAgHIAAhiIgQAAIAAgVQAKgBALgCQALgDAJgDIALAAIAAA8QAKgGAIgDQAIgDAIAAQAKAAAIAFQAIAEAEAHQAEAHAAAKIAAAtIABAJQAAAAAAABQAAAAABABQAAAAABAAQAAAAABABIAIAAIAFAAIAAAVg");
	this.shape_36.setTransform(246.5,158.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAYA2QgHgEgFgGQgLAHgHADQgJADgJAAQgPAAgKgJQgKgJAAgNQABgHADgGQAEgGAGgFQAHgDAOgEQANgDATgCIAAgIIgBgKQgCgDgDgBQgCgCgFAAIgGABIgEADIgFAHQgDAHgEADQgEADgFAAQgIAAgEgFQgFgEABgGQgBgIAFgFQAGgIAMgFQAMgFAPAAQAPAAAKAFQALAFAFAHQADAHAAAOIAAAmQAAAHABACQABABAAAAQAAABAAAAQABABAAAAQABAAABABQACABADAAIAIgBIAAAVQgJADgJAAQgJAAgIgDgAgMAMQgFACgDADQgCADAAADQAAAFADADQAEADAFAAQADAAAFgCIAKgGIAAgTQgNACgHADg");
	this.shape_37.setTransform(232.4,161);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAZA2QgHgEgGgGQgLAHgHADQgJADgJAAQgPAAgKgJQgKgJAAgNQABgHADgGQADgGAHgFQAHgDANgEQAOgDATgCIAAgIIgBgKQgCgDgDgBQgCgCgFAAIgGABIgFADIgEAHQgCAHgFADQgEADgFAAQgIAAgEgFQgEgEAAgGQAAgIAEgFQAGgIAMgFQAMgFAPAAQAPAAAKAFQALAFAFAHQADAHAAAOIAAAmQAAAHACACQAAABAAAAQAAABABAAQAAABAAAAQABAAABABQACABAEAAIAHgBIAAAVQgJADgJAAQgJAAgHgDgAgMAMQgFACgCADQgDADAAADQAAAFADADQAEADAFAAQADAAAGgCIAJgGIAAgTQgNACgHADg");
	this.shape_38.setTransform(211.8,161);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgFBIQgIgDgFgFQgGgEgCgGQgCgFAAgLIAAgzIgRAAIAAgVQAJgCAGgGQAHgFAEgHQADgHACgMIAUAAIAAAmIAjAAIAAAWIgjAAIAAAmQAAAMABAFQACADADACQAFADAGAAQAMAAALgHIAAAXQgKAEgHADQgIABgJAAQgKAAgHgCg");
	this.shape_39.setTransform(200,159.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAFA4IAAgVIAIgBQAAAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAQABgCAAgGIAAgmQAAgIgBgDQgDgEgGAAQgFABgEABQgFACgKAHIAAAqQAAAIACABQACACAFAAIAEAAIAAAVIg/AAIAAgVIACAAQAIAAACgBIADgCIAAgHIAAgyIgPAAIAAgVQATgCARgHIALAAIAAAPQAMgIAIgEQAJgDAIAAQALAAAIAFQAJAEADAHQAEAHAAAMIAAAsIAAAIIADACIAIABIAGAAIAAAVg");
	this.shape_40.setTransform(187.5,160.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_41.setTransform(173.1,161);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgFBIQgIgDgFgFQgGgEgCgGQgCgFAAgLIAAgzIgRAAIAAgVQAJgCAGgGQAHgFAEgHQADgHACgMIAUAAIAAAmIAjAAIAAAWIgjAAIAAAmQAAAMABAFQACADADACQAFADAGAAQAMAAALgHIAAAXQgKAEgHADQgIABgJAAQgKAAgHgCg");
	this.shape_42.setTransform(161.5,159.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAEA4IAAgVIAIgBQABAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAQABgCAAgGIAAgmQAAgIgBgDQgEgEgFAAQgEABgFABQgFACgKAHIAAAqQABAIABABQACACAGAAIADAAIAAAVIhAAAIAAgVIAEAAQAHAAACgBIADgCIAAgHIAAgyIgQAAIAAgVQAUgCARgHIALAAIAAAPQALgIAJgEQAJgDAJAAQAKAAAJAFQAIAEADAHQAEAHAAAMIAAAsIABAIIACACIAIABIAGAAIAAAVg");
	this.shape_43.setTransform(148.9,160.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgkBMIAAgVIAGAAQAGAAACgBIADgDIABgIIAAhUQAAgHgBgCQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAQgBgBgGAAIgHAAIAAgVIBJAAIAAAVIgHAAIgHABQgBAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQgBACAAAHIAABTQAAAHABACQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQADABAEAAIAIAAIAAAVg");
	this.shape_44.setTransform(136.6,158.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF0000").s().p("AgTBnIAAgoIAnAAIAAAogAgKAyIgKhoIAAgwIApAAIAAAwIgKBog");
	this.shape_45.setTransform(388.6,127.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF0000").s().p("AgvBMIAAiUIAkAAIAAAVQAKgPAGgFQAIgEAJAAQAOAAAMAHIgMAiQgKgGgIAAQgJAAgFAFQgFAEgDAMQgEAMAAAlIAAAug");
	this.shape_46.setTransform(379.4,130.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF0000").s().p("Ag4BBQgNgMAAgTQAAgNAGgKQAGgKALgEQAKgFAVgEQAbgGALgEIAAgEQgBgMgFgEQgGgFgOAAQgLAAgGAEQgFAEgEALIgkgHQAGgWAOgKQAPgKAdAAQAaAAANAGQANAHAFAJQAFAKAAAaIAAAtQAAATACAJQACAKAFAKIgnAAIgEgLIgCgFQgKAKgLAFQgLAFgNAAQgXAAgNgNgAgBAJQgQAEgFADQgHAFAAAIQgBAJAHAGQAFAGAKAAQAKAAAKgHQAHgGACgHQABgFABgPIAAgHIgYAGg");
	this.shape_47.setTransform(364.8,130.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF0000").s().p("AgzBdQgQgMAAgVIAAgEIAtAGQACAHAEADQAFAFALgBQAQAAAIgEQAFgEACgGQACgFAAgNIAAgWQgRAYgaAAQgfAAgRgaQgOgTAAgeQAAglASgUQASgUAbABQAbAAASAYIAAgWIAlAAIAACFQAAAbgFANQgEANgIAIQgIAHgNAEQgNAEgUABQglAAgQgOgAgWhBQgJALAAAXQAAAYAJAKQAJALANAAQAOAAAKgLQAKgLAAgWQAAgXgKgLQgJgMgPAAQgNABgJAKg");
	this.shape_48.setTransform(347.6,133.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF0000").s().p("AgsBGQgMgHgGgMQgFgLAAgWIAAheIAoAAIAABGQAAAeACAHQACAHAGAEQAFAEAJABQAJgBAIgFQAIgGADgIQADgIAAggIAAg/IAoAAIAACVIglAAIAAgXQgIANgNAGQgNAIgOgBQgPAAgMgGg");
	this.shape_49.setTransform(330.3,130.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF0000").s().p("AgVCEIgOgDIAGgiIAGABIAEABQAGAAAEgDQAEgDABgDQACgEAAgSIAAiOIAmAAIAACQQAAAdgEALQgDAMgLAHQgLAGgPAAIgNgBgAgChgIAAgkIAmAAIAAAkg");
	this.shape_50.setTransform(315.8,130.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF0000").s().p("AgvBMIAAiUIAkAAIAAAVQAKgPAGgFQAIgEAJAAQAOAAAMAHIgMAiQgKgGgIAAQgJAAgFAFQgFAEgDAMQgEAMAAAlIAAAug");
	this.shape_51.setTransform(301,130.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF0000").s().p("AgmBFQgSgKgKgRQgKgTAAgYQAAgUAKgSQAKgTASgKQARgJAVAAQAiAAAVAWQAWAWAAAhQAAAigWAVQgWAXghAAQgUAAgSgJgAgZghQgLAMAAAVQAAAWALAMQALALAOAAQAQAAAKgLQAKgMAAgWQAAgWgKgLQgKgMgQAAQgOAAgLAMg");
	this.shape_52.setTransform(285.6,130.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF0000").s().p("AhIBpIAAjOIAlAAIAAAWQAHgLANgHQAMgHAOAAQAaAAASAUQASAVAAAkQAAAlgSAUQgTAVgaAAQgLAAgKgFQgKgFgLgMIAABMgAgXg9QgKALAAAWQAAAZAKALQAKAMAOAAQANAAAKgLQAJgKAAgZQAAgYgKgLQgJgMgOAAQgNAAgKAMg");
	this.shape_53.setTransform(268.3,133.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF0000").s().p("AgtBBQgSgMgGgVIAogGQADALAHAHQAIAFANABQAPgBAIgFQAFgEAAgHQAAgEgCgDQgDgDgLgDQgvgKgMgJQgSgLAAgWQAAgTAPgNQAQgNAgAAQAdAAAPAKQAPAKAGAUIglAGQgDgJgGgEQgHgFgMAAQgPAAgHAEQgEAEAAAFQAAAEAEADQAFAEAfAHQAfAHANALQAMAJAAATQAAAUgRAPQgRAPgiAAQgdAAgSgNg");
	this.shape_54.setTransform(242.7,130.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0000").s().p("Ag4BBQgNgMAAgTQAAgNAGgKQAGgKALgEQAKgFAVgEQAbgGALgEIAAgEQgBgMgFgEQgGgFgOAAQgLAAgGAEQgFAEgEALIgkgHQAGgWAOgKQAPgKAdAAQAaAAANAGQANAHAFAJQAFAKAAAaIAAAtQAAATACAJQACAKAFAKIgnAAIgEgLIgCgFQgKAKgLAFQgLAFgNAAQgXAAgNgNgAgBAJQgQAEgFADQgHAFAAAIQgBAJAHAGQAFAGAKAAQAKAAAKgHQAHgGACgHQABgFABgPIAAgHIgYAGg");
	this.shape_55.setTransform(227.1,130.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF0000").s().p("AgTBnIAAiVIAnAAIAACVgAgThCIAAgkIAnAAIAAAkg");
	this.shape_56.setTransform(215,127.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF0000").s().p("AgyA5QgUgVAAgkQAAgkAUgUQATgVAhAAQAbAAARAMQAQAMAGAYIgnAGQgBgLgIgGQgGgGgMAAQgNAAgJAKQgJAKAAAYQAAAZAJAMQAJALAOgBQALABAHgHQAIgGACgPIAoAGQgHAbgRANQgRAOgdAAQggAAgTgVg");
	this.shape_57.setTransform(203.3,130.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF0000").s().p("Ag4BBQgNgMAAgTQAAgNAGgKQAGgKALgEQAKgFAVgEQAbgGALgEIAAgEQgBgMgFgEQgGgFgOAAQgLAAgGAEQgFAEgEALIgkgHQAGgWAOgKQAPgKAdAAQAaAAANAGQANAHAFAJQAFAKAAAaIAAAtQAAATACAJQACAKAFAKIgnAAIgEgLIgCgFQgKAKgLAFQgLAFgNAAQgXAAgNgNgAgBAJQgQAEgFADQgHAFAAAIQgBAJAHAGQAFAGAKAAQAKAAAKgHQAHgGACgHQABgFABgPIAAgHIgYAGg");
	this.shape_58.setTransform(187,130.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF0000").s().p("AgvBMIAAiUIAkAAIAAAVQAKgPAGgFQAIgEAJAAQAOAAAMAHIgMAiQgKgGgIAAQgJAAgFAFQgFAEgDAMQgEAMAAAlIAAAug");
	this.shape_59.setTransform(174.5,130.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF0000").s().p("AgvBdQgYgNgMgaQgMgZAAgdQAAggANgZQAOgZAagNQATgKAdAAQAmAAAWAPQAVARAHAcIgqAHQgEgOgMgJQgMgJgSAAQgaAAgQARQgRASAAAhQAAAkARASQAQATAZAAQAOAAANgFQANgFAJgIIAAgaIgvAAIAAghIBZAAIAABRQgNANgZAJQgYAJgaAAQgfAAgYgNg");
	this.shape_60.setTransform(156.4,127.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000066").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_61.setTransform(332,100);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000066").s().p("AgsApQgQgPAAgaQAAgQAHgNQAIgMANgHQAOgIASAAQATAAANAHQAOAIAIAMQAHANAAAQQAAAZgQAQQgRAQgcAAQgcAAgQgQgAgLgcQgFADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgHgJQgGgIgKAAQgFAAgGAEg");
	this.shape_62.setTransform(319.2,100);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000066").s().p("AgmBQQgNgEgGgGQgFgGgBgGQAAgGAFgFQAEgFAOgGQgJgDgEgFQgGgFABgGQgBgHAGgGQAFgGAKgFQgGgEgDgEQgDgFgCgGQgCgFAAgGQAAgRAOgLQANgMAWAAQAIAAAJADQAHABAGAFQAHgIAFgEQAGgDAHAAQAGAAAEAEQADAEAAAFQAAAGgDADQgEAEgFAAIgDAAIgFAAQgDAAgCACQAGAKAAAJQAAAKgGAJQgGAJgKAFQgLAEgOAAIgJAAIgIgBIgFACIgCAEQABADAGABIAtAHQAUACAJAIQAJAJAAAKQAAALgGAIQgIAIgPAGQgPAFgWAAQgVAAgOgEgAgcAwQgCACABADQgBAGAKADQAIACANAAQAKAAAHgBQAIgCADgDQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQgBgEgDgCQgDgBgNgCIgfgEIgIAHgAgQgzQgEAGAAAJQAAAHAEAFQAEAFAHAAQAGAAAEgFQAFgFAAgIQAAgIgFgGQgEgFgFAAQgIAAgEAFg");
	this.shape_63.setTransform(305.9,102.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000066").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_64.setTransform(292.7,100);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000066").s().p("AgfA2QgHgDgFgEQgEgEgCgGQgCgGAAgJIAAgsQAAgGgBgCIgCgCIgIgBIgGAAIAAgVIA0gBIAABGIAAAKQABACADACQACABAEAAQAFAAAGgCIAMgIIAAgqIAAgHIgDgDIgGgBIgHAAIAAgVIA0gBIAABNIAAAIQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAQABABAGAAIAGAAIAAAVIgwABIAAgNQgKAHgJAEQgJADgKAAQgIAAgGgCg");
	this.shape_65.setTransform(278.9,100.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000066").s().p("AgaBmQgHgDgEgGQgEgFAAgGQAAgGAEgEQAGgEAFAAQAFAAADACQAEADAGAGQADAEADAAQADAAACgDQACgDAAgIIAAheIgQAAIAAgVQALAAAKgDQAKgCAKgFIAKAAIAAB0QgBARgEAIQgFAJgLAGQgLAFgOAAQgLAAgJgDgAAIhGQgGgGAAgIQAAgJAGgFQAGgGAIAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgGgGg");
	this.shape_66.setTransform(265.9,100);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000066").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAOgHQAPgIARAAQASAAAOAHQAOAIAIAMQAHANAAAQQAAAZgQAQQgRAQgcAAQgbAAgRgQgAgKgcQgGADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgGgJQgHgIgKAAQgFAAgFAEg");
	this.shape_67.setTransform(256.9,100);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000066").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_68.setTransform(243.5,100);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000066").s().p("AgnBLQgLgHgGgOQgHgNAAgQQAAgRAHgNQAHgNALgHQAKgHAOAAQAHAAAHACQAFABAIAFIAAgaIgPAAIAAgVQAMgBAJgCQAIgDAKgDIAKAAIAAB+QAAAHABACIADACQABABAHAAIAFAAIAAAVIgvACIAAgLQgLAGgGADQgIACgIABQgMgBgLgGgAgPgEQgEADgEAHQgDAHAAALQABAPAGAJQAGAIAIgBIAGgBIAMgHIAAgkQAAgHgCgDQAAgCgFgEQgFgDgEAAQgGAAgGAEg");
	this.shape_69.setTransform(230,97.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000066").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_70.setTransform(218.8,97.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000066").s().p("AgOA2IglhQIgDgEIgEgCIgIgBIAAgVIBCAAIAAAVIgCAAQgHAAgBACQgBAAAAAAQgBABAAAAQAAABAAAAQgBAAAAABIACAFIAPApIASgpIACgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAgBAAQgBgCgGAAIgFAAIAAgVIA6AAIAAAVIgJABIgDADIgEAGIgkBNg");
	this.shape_71.setTransform(207.9,100.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_72.setTransform(474.4,72.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAPgHQAOgIARAAQATAAANAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgbAAgRgQgAgLgcQgFADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgHgJQgGgIgKAAQgFAAgGAEg");
	this.shape_73.setTransform(461.6,72.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AghBQIAAgVIAFAAQAGAAACgBIACgCIABgIIAAhhIgQAAIAAgVQAUgBAUgIIAKAAIAAB/IABAHQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQACABAHAAIAEAAIAAAVg");
	this.shape_74.setTransform(451.1,69.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_75.setTransform(433,72.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgnBLQgKgHgIgNQgGgOAAgQQAAgRAHgNQAGgNALgHQAMgHANAAQAIAAAFACQAGABAIAFIAAgaIgPAAIAAgVQANgBAIgDQAJgCAJgDIALAAIAAB+QAAAHABACIABACQACABAHAAIAFAAIAAAVIgwACIAAgLQgJAGgIADQgHACgIABQgNgBgKgGgAgOgEQgFAEgEAFQgCAIAAALQgBAPAHAJQAFAIAJgBIAGAAIAMgIIAAgkQAAgHgBgDQgCgCgEgEQgFgDgFAAQgFAAgFAEg");
	this.shape_76.setTransform(419.5,70.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgsApQgQgPAAgaQAAgQAHgNQAIgMANgHQAOgIASAAQASAAAOAHQAOAIAIAMQAHANAAAQQAAAZgQAQQgRAQgcAAQgcAAgQgQgAgLgcQgFADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgGgJQgHgIgKAAQgFAAgGAEg");
	this.shape_77.setTransform(397.6,72.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgFBHQgIgCgFgFQgGgEgCgGQgCgFAAgLIAAgyIgRAAIAAgWQAJgCAGgGQAHgFAEgHQADgHACgMIAUAAIAAAlIAjAAIAAAYIgjAAIAAAlQAAAMABAFQACADADACQAFADAGAAQAMAAALgHIAAAXQgKAEgHACQgIACgJAAQgKAAgHgDg");
	this.shape_78.setTransform(385.5,70.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAEA4IAAgVIAIgBQABAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAQABgBAAgHIAAgmQAAgJgBgBQgDgFgGAAQgFAAgEACQgFACgJAHIAAAqQgBAIACABQABACAHAAIADAAIAAAVIhAAAIAAgVIAEAAQAHAAACgBIADgCIAAgHIAAgxIgQAAIAAgWQAUgCARgHIAKAAIAAAPQAMgIAJgDQAIgEAKAAQAKAAAJAFQAHAEAEAHQAEAHAAAMIAAAsIABAIIACACIAIABIAFAAIAAAVg");
	this.shape_79.setTransform(372.9,72.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_80.setTransform(358.6,72.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_81.setTransform(348.2,69.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AAoA4IAAgVQAHAAABgBIADgCQABgCAAgFIAAgnQAAgHgBgCIgDgEQgDgBgEgBQgEAAgFACQgFACgKAHIAAApQAAAHABACQABAAAAAAQAAABABAAQAAAAAAABQABAAAAAAQACABAHAAIAAAVIg7AAIAAgVQAHAAACgBIADgCIAAgJIAAgjQAAgKgBgCQgDgEgGgBIgGABQgEABgDACIgJAFIgCACIAAApIAAAJIADACIAGABIADAAIAAAVIg/AAIAAgVIAEAAQAHAAABgBQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABgCAAgHIAAgvIgQAAIAAgWQAUgCARgHIAKAAIAAAPQAJgIAKgDQAKgEAKAAQAHAAAGACQAFACAEADQAEADADAGQAKgJAKgDQAKgEAKAAQAJAAAHAEQAHADAEAFQAFAFABAHIABALIAAAsQAAAGABACQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAQABABAHAAIAEAAIAAAVg");
	this.shape_82.setTransform(333,72.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_83.setTransform(317.8,69.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_84.setTransform(307.2,72.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgsApQgQgPAAgaQAAgQAHgNQAIgMANgHQAOgIASAAQASAAAOAHQAOAIAIAMQAHANAAAQQAAAZgQAQQgRAQgcAAQgcAAgQgQgAgLgcQgFADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgGgJQgHgIgKAAQgFAAgGAEg");
	this.shape_85.setTransform(293.6,72.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAEA4IAAgVIAIgBQABAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAQABgBAAgHIAAgmQAAgJgBgBQgDgFgGAAQgFAAgEACQgFACgJAHIAAAqQgBAIACABQABACAHAAIADAAIAAAVIhAAAIAAgVIAEAAQAHAAACgBIADgCIAAgHIAAgxIgQAAIAAgWQAUgCARgHIAKAAIAAAPQAMgIAJgDQAIgEAKAAQAKAAAJAFQAHAEAEAHQAEAHAAAMIAAAsIABAIIADACIAHABIAFAAIAAAVg");
	this.shape_86.setTransform(279.3,72.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAPgHQAOgIARAAQATAAANAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgbAAgRgQgAgLgcQgFADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgHgJQgGgIgKAAQgFAAgGAEg");
	this.shape_87.setTransform(264.5,72.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_88.setTransform(251.2,72.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAFA4IAAgVIAHgBQABAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAQABgBAAgHIAAgmQAAgJgBgBQgDgFgGAAQgEAAgFACQgFACgKAHIAAAqQABAIABABQACACAFAAIAEAAIAAAVIhAAAIAAgVIAEAAQAHAAACgBIADgCIAAgHIAAgxIgQAAIAAgWQAUgCARgHIALAAIAAAPQALgIAJgDQAIgEAKAAQAKAAAIAFQAJAEADAHQAEAHAAAMIAAAsIABAIIACACIAIABIAGAAIAAAVg");
	this.shape_89.setTransform(229.6,72.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_90.setTransform(215.2,72.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgfA2QgHgDgFgEQgEgEgCgGQgCgGAAgJIAAgsIgBgIIgCgCIgIgBIgGAAIAAgVIA0gBIAABGIAAAKQABACADACQACABAEAAQAFAAAGgCIAMgIIAAgqIAAgHIgDgDIgGgBIgHAAIAAgVIA0gBIAABNIAAAIQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAQABABAGAAIAGAAIAAAVIgwABIAAgNQgKAHgJAEQgJADgKAAQgIAAgGgCg");
	this.shape_91.setTransform(201.4,72.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AAABPQgIgDgIgGIgGAJIgYAAIAAiBIgQAAIAAgVQAWgCASgHIALAAIAAA6QAJgFAGgDQAHgCAHAAQASAAANAOQAOAPAAAaQAAAbgOAPQgPAQgTABQgJgBgGgCgAAAgEIgLAFIAAAiQAAAJACAEQABAEAEADQAEACAFAAQAIAAAGgIQAGgIABgRQgBgPgFgJQgFgFgHgBIgIACg");
	this.shape_92.setTransform(186.8,70.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AAFA4IAAgVIAIgBQAAAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAQABgBAAgHIAAgmQAAgJgCgBQgDgFgFAAQgFAAgEACQgGACgJAHIAAAqQAAAIACABQABACAGAAIAEAAIAAAVIg/AAIAAgVIACAAQAIAAACgBIADgCIABgHIAAgxIgQAAIAAgWQATgCARgHIAKAAIAAAPQANgIAIgDQAJgEAIAAQALAAAIAFQAJAEADAHQAEAHAAAMIAAAsIAAAIIAEACIAHABIAFAAIAAAVg");
	this.shape_93.setTransform(165.5,72.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgfA2QgHgDgFgEQgEgEgCgGQgCgGAAgJIAAgsIgBgIIgCgCIgIgBIgGAAIAAgVIA0gBIAABGIAAAKQABACADACQACABAEAAQAFAAAGgCIAMgIIAAgqIAAgHIgDgDIgGgBIgHAAIAAgVIA0gBIAABNIAAAIQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAQABABAGAAIAGAAIAAAVIgwABIAAgNQgKAHgJAEQgJADgKAAQgIAAgGgCg");
	this.shape_94.setTransform(150.3,72.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_95.setTransform(129.5,72.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_96.setTransform(117.1,72.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAFA4IAAgVIAIgBQAAAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAQABgBAAgHIAAgmQAAgJgBgBQgDgFgGAAQgEAAgFACQgFACgKAHIAAAqQABAIABABQACACAFAAIAEAAIAAAVIg/AAIAAgVIADAAQAHAAACgBIADgCIAAgHIAAgxIgPAAIAAgWQATgCARgHIALAAIAAAPQALgIAJgDQAIgEAJAAQALAAAIAFQAJAEADAHQAEAHAAAMIAAAsIAAAIIADACIAIABIAGAAIAAAVg");
	this.shape_97.setTransform(103.2,72.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_98.setTransform(88.9,72.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_99.setTransform(78.5,69.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AglBPIAAgVIAFAAQAIAAACgBIADgEQABgCAAgHIAAhZQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAIgDgBQgHAAgHAEQgGAFgGAHIgJASIgUgHIATg2IAOAAIACAFIBUAAIACgFIAPAAIATA2IgUAHIgKgSQgGgIgIgEQgFgEgGAAIgDABQgCACAAAEIAABXIABAKIACADIADABIANABIAAAVg");
	this.shape_100.setTransform(66.5,70.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF0000").s().p("AgRBsQgGgIAAgMQAAgLAGgKQAGgJAKAAQAKAAAHAJQAGAIAAALQAAAMgHAJQgGAJgKAAQgKAAgGgIgAgEAqQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgFQAAgIgKg/IgHg3QAAgLAHgGQAHgIAMAAQAMAAAGAIQAHAIAAALQAAAGgLBEIgHAwIAAAHIgEABg");
	this.shape_101.setTransform(372.4,37.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FF0000").s().p("AgmBKQgSgYgBgxQAAgwARgYQARgaAbAAQAZAAAOAVQAOAWAAAnIAAANIg+AAIAAA5QAAALAFAHQADAGAHAAQALAAAGgJQAHgJAAgQQAAgJACgBQABgCAJAAQAHAAADACQABACAAAFQABAWgOARQgPARgXAAQgaAAgSgYgAgFhCIAAAuIASAAIAAguQAAgNgJAAQgJAAAAANg");
	this.shape_102.setTransform(349.4,39.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF0000").s().p("AgPBzQgKgJAAgSIAAiRIgFAAIgDgBIgBgDIAAgKIABgEIADgBQALgBAKgKQAJgKACgLIACgFQAAAAAAAAQABAAAAAAQABgBABAAQAAAAABAAIAJAAQAEAAAAAFIAAAhIAJAAQAFAAAAAEIAAAKQAAAFgFAAIgJAAIAACRQAAAHAHADQADACABACIABAIIgBAEIgDABg");
	this.shape_103.setTransform(326.3,37.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF0000").s().p("AAUBhQgJgHAAgMIAAiFQAAgKgJgBQgEABgIAGIAACCQAAAFAGADQADACAAAEIAAAHQAAAFgIAAIgxAAQgBAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAgEIAAgGQAAgEACgCQAEgBABgDQABgCAAgHIAAiIQAAgGgFgCQgCgBAAgEIAAgHQgBgEAEAAIAuAAIAEABIAAADIAAAPQAQgVAWAAQAOAAAJAKQAHAJAAAOIAACGQAAAEADADQAEACAAAIQAAAGgBABQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAg");
	this.shape_104.setTransform(302.6,39.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FF0000").s().p("AgmBKQgSgYAAgxQAAgwAQgYQASgaAaAAQAYAAAPAVQAOAWAAAnIAAANIg+AAIAAA5QAAALAFAHQADAGAHAAQAKAAAHgJQAHgJAAgQQAAgJACgBQABgCAIAAQAJAAABACQACACAAAFQAAAWgNARQgPARgXAAQgaAAgSgYgAgFhCIAAAuIASAAIAAguQAAgNgJAAQgJAAAAANg");
	this.shape_105.setTransform(276.3,39.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FF0000").s().p("AgaByQgEgBAAgEIAAgIQAAgFAEgCIAEgDIABgEIAAiuQAAgFgFgBQgEgCAAgGIAAgHQAAgFAGABIAqAAIAFAAQABAAAAAFIAADDQAAAHAEACQADABAAADIAAAIQAAAEgGABg");
	this.shape_106.setTransform(253.3,38);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FF0000").s().p("AgmBKQgTgYABgxQAAgwARgYQAQgaAcAAQAYAAAOAVQAPAWAAAnIAAANIg/AAIAAA5QAAALAEAHQAEAGAHAAQAKAAAHgJQAGgJABgQQAAgJABgBQACgCAIAAQAIAAADACQACACAAAFQgBAWgOARQgOARgXAAQgZAAgTgYgAgFhCIAAAuIASAAIAAguQAAgNgJAAQgJAAAAANg");
	this.shape_107.setTransform(230.3,39.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FF0000").s().p("AghBJQgQgYAAguQAAghAIgWQAIgXALgLQAMgLAQAAQAUAAANANQALAOAAASQAAAJgEAGQgEAHgIAAQgIAAgEgGQgFgGAAgJIABgJIABgKQAAgEgDgCQgDgDgDAAQgDAAgDADQgCADAAAEIAACHQAAAFADAEQADADAFAAQAHAAAEgJQAEgIAAgOIAAgEQAAgHADgCQACgBAHAAQAFAAADACQABACAAAHQABAWgLAQQgMAQgVAAQgXAAgQgZg");
	this.shape_108.setTransform(205.7,39.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FF0000").s().p("AAABgQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgBAAgGIABgHIADgEQABAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAIAAgEIgKgeIgKASQgFAMAAAEQgBACAEABQADACAAAEIAAAEIgBAHQAAAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgbAAIgEgBIgBgDIAAgJQABgDADgBQAEgDADgEIAag5IgdhUQgCgFgDgDIgDgDQgBgBAAgKQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIAzAAIADAAQABABAAAFIAAAEQABAEgDACQgDACAAAEIAAACIAKAdIAJgRIABgDQAGgKgBgEQAAAAAAAAQAAgBAAAAQgBgBAAAAQgBgBgBAAIgCgDIgBgHQAAgBAAgBQAAgBAAgBQAAAAABgBQAAAAAAAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIAbAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAIABAHIgBAHQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQgDABgCAFIgbA5IAdBXQABADAEADQADACAAAEIAAAIIgBADIgFABg");
	this.shape_109.setTransform(180.9,39.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FF0000").s().p("AgyByQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBgCABgHQgBgGAGgBQAHgEAAgFIAAivQAAgDgGgCQgEgCgBgCQgBgCAAgGQAAgGABAAQABgBAEAAIBZAAIAEABQACABABAEIAHAkIAAAEQABAEgHAAQgIAAgDgCQgCgBgCgHQgEgOgEgEQgDgFgEAAIgKAAIAABQIAKAAQAEAAACgCQACgBABgGIADgMQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAQALAAABABQACABAAAGIAAAuQAAAFgCABQgBABgIAAQgEAAgBgBQgCgDgCgIQgBgHgCgCQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBgBgBAAIgLAAIAABiIAIAAQAHgBACgDQADgFAGgSQADgHACgDQACgCAHAAQAIAAABAFIgBAGIgFAfIgCALQgCABgFABg");
	this.shape_110.setTransform(156,38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.nextlevel},{t:this.instance}]}).wait(1));

	// Capa 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgjmAaeQgqAAAAgvMAAAgxLQAAguAqAAMBKcAAAQApAAAAAuMAAAAqtQgwBkhCBmQhtCqhxBZg");
	mask.setTransform(252.7,169.4);

	// Actions
	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#660066").s().p("EgkTAWqQgoAAAAgqMAAAgr/QAAgqAoAAMBInAAAQAoAAAAAqMAAAAmNQgvBZg/BbQhsCZhtBPg");
	this.shape_111.setTransform(267.2,156.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_111).wait(1));

}).prototype = getMCSymbolPrototype(lib.triunfo, new cjs.Rectangle(-20.9,11.9,580.7,290), null);


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
	this.button_12iturbide.setTransform(605.7,187.4,0.9,1.3,0,0,0,133.1,22.9);

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
	this.button_8morelos.setTransform(624,252,1.089,1.3,0,0,0,133.1,22.9);

	this.button_7obregon = new lib.ans_vhuerta_btn();
	this.button_7obregon.name = "button_7obregon";
	this.button_7obregon.parent = this;
	this.button_7obregon.setTransform(610.2,312.5,1,1.3,0,0,0,133.1,22.9);

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
	this.shape.setTransform(-480,119.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000033").s().p("AhJBnIAAhRIAEAAQASAAAIgHQAIgIABgSQACggAEgNQAEgMANgMQAWgXAnAAIAYAAIAABRQgRAAgFAHQgHAGgBAQQgGA7gnAZQgWAMgnAAg");
	this.shape_1.setTransform(536.6,383.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000033").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_2.setTransform(522.9,379.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_3.setTransform(510.7,378.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAheQAAgQgIgKQgIgJgNAAQgLAAgJAIQgJAJAAALQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJABgIAAQgtAAgfgeg");
	this.shape_4.setTransform(491.7,383.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000033").s().p("AgpCMIAAjHIg/AAIAAhQIDRAAIAABQIg/AAIAADHg");
	this.shape_5.setTransform(469.2,379.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAhfQAAgPgIgKQgIgJgNAAQgLAAgJAJQgJAIAAALQAAANAIAJQAIAHAMABQAJgBAJgEIAABPQgJABgIAAQgtAAgfgeg");
	this.shape_6.setTransform(562.3,318.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAnAAQAKAAAOACIAABSQgIgFgHAAQgUAAAAAfIAABhg");
	this.shape_7.setTransform(545,318.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAhfQAAgPgIgKQgIgJgNAAQgLAAgJAJQgJAIAAALQAAANAIAJQAIAHAMABQAJgBAJgEIAABPQgJABgIAAQgtAAgfgeg");
	this.shape_8.setTransform(524.2,318.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000033").s().p("AANCMIAAhsQAAgNgDgFQgCgEgIAAQgMAAAAATIAABvIhNAAIAAkXIBNAAIAABWQASgPAUAAQAdAAASAWQARAVAAAjIAACCg");
	this.shape_9.setTransform(501.2,314.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000033").s().p("AhnBpQgrgqAAg+QAAg+ArgqQArgrA+AAQA+AAApAqQAdAdAMAzIhZAGQgPgugqAAQgaAAgRATQgRASAAAcQAAAbARASQARASAaAAQAZAAAQgQQAQgPACgeIBYACQgJBEgmAlQgnAlg9AAQg9AAgqgqg");
	this.shape_10.setTransform(474.1,314.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000033").s().p("AAVCMIgviGIAihGIBQAAIglBKIA3CCgAhpCMIAAkXIBNAAIAAEXg");
	this.shape_11.setTransform(532.4,249.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000033").s().p("AhJBnIAAhRIAEAAQASAAAIgHQAIgIABgSQACggAEgNQAEgMANgMQAWgXAnAAIAYAAIAABRQgRAAgFAHQgHAGgBAQQgGA7gnAZQgWAMgnAAg");
	this.shape_12.setTransform(511.9,253.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_13.setTransform(498.1,248.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAnAAQAKAAAOACIAABSQgIgFgHAAQgUAAAAAfIAABhg");
	this.shape_14.setTransform(486.5,253.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000033").s().p("AheCPIAAisQAAgxAdggQAfggAtAAQAyAAAiArIhEAyQgGgQgOAAQgTAAAAAbIAAAiIAbAAIAABKIgbAAIAABJg");
	this.shape_15.setTransform(470.2,249.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000033").s().p("Ag9CPIAAhCQAPAGAMAAQAlAAALgqQgUAMgTAAQgdAAgSgVQgTgVAAggIAAiBIBOAAIAABuQgBASAOABQAPgBAAgUIAAhsIBNAAIAAC2QAAAygdAgQgjAlgvAAQgVAAgVgIg");
	this.shape_16.setTransform(588.1,193.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000033").s().p("AhqCOIAAiqQAAguAZgeQAOgRAWgKQAVgKAXAAQAtAAAfAfQAgAeAAAuQAAAqgfAfQggAggqAAIgUgCIAAhTQAKAIAIAAQAMgBAJgIQAIgJAAgMQAAgMgJgJQgIgIgMgBQgdABAAApIAACmg");
	this.shape_17.setTransform(565.1,192.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000033").s().p("AA/BoIAAhtQABgNgDgFQgDgFgHAAQgNAAAAAXIAABtIhLAAIAAhtQgBgNgCgFQgDgFgHAAQgNAAAAAXIAABtIhMAAIAAh9QAAgiAXgYQAXgYAhAAQAiAAAaAdQAfgdAeAAQAmAAAXAcQASAVAAAqIAAB0g");
	this.shape_18.setTransform(536.5,188.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000033").s().p("AhFBIQgVgYAAgsIAAhrIBMAAIAAByQAAASAOAAQAOAAAAgSIAAhyIBNAAIAABxQAAAogaAbQgbAbgmAAQgrAAgaggg");
	this.shape_19.setTransform(508.8,189.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAnAAQAKAAAOACIAABSQgIgFgHAAQgUAAAAAfIAABhg");
	this.shape_20.setTransform(491.9,188.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000033").s().p("AhPBnQgogrAAg9QAAg+AogqQApgpA7AAQAVAAAZAJIAABTQgTgKgRAAQgdAAgRATQgTASAAAcQAAAeARARQARASAdAAQASAAAAgLQAAgIgMAAIgUAAIAAg/IBQAAQAZAfAAAjQAAApgeAcQgeAcgsAAQg4AAgngsg");
	this.shape_21.setTransform(471.5,184.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000033").s().p("AAPBoIAAhyQgBgSgOAAQgOAAAAASIAAByIhMAAIAAhxQAAgoAbgbQAagbAlAAQAsAAAbAfQAUAZAAAsIAABrg");
	this.shape_22.setTransform(741.1,123.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000033").s().p("AhLBMQgegfAAgsQgBgsAgggQAfgeAtAAQAsgBAeAfQAeAeAAAsIgBAOIhzAAQgCgJAAgHQAAgKAEgJIAmAAQgEgYgWAAQgOAAgJANQgIAMgBATQAAATAJANQAJAMANgBQALAAALgLIArA1QgeAYglgBQgtAAgfgeg");
	this.shape_23.setTransform(718.3,123.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000033").s().p("AAvCNQgaAAgWgMQgXgMgOgVQgRgaAAgsIAAimIBLAAIAABOIAjAAIAABQIgjAAQAAAYAIAJQAIAKAUAAIAABQIgJAAg");
	this.shape_24.setTransform(699.5,120.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000033").s().p("AAvCNQgaAAgWgMQgXgMgOgVQgRgaAAgsIAAimIBLAAIAABOIAjAAIAABQIgjAAQAAAYAIAJQAIAKAUAAIAABQIgJAAg");
	this.shape_25.setTransform(685.4,120.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_26.setTransform(672.3,119.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000033").s().p("AAbCMIg+iaIBHh9IBWAAIhKB/IBJCYgAh4CMIAAkXIBTAAIAAEXg");
	this.shape_27.setTransform(654.1,120.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000033").s().p("AhKBMQgfgfgBgsQAAgsAgggQAfgeAsAAQAtgBAfAfQAdAeAAAsIgBAOIhzAAQgCgJAAgHQAAgKADgJIAnAAQgFgYgVAAQgNAAgKANQgJAMAAATQAAATAJANQAJAMANgBQAMAAAKgLIAsA1QgfAYglgBQgtAAgegeg");
	this.shape_28.setTransform(617.2,123.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000033").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_29.setTransform(599.4,120.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000033").s().p("AgtCEQgWgKgOgRQgZgeAAgvIAAipIBNAAIAACmQAAApAdAAQAMAAAIgIQAJgJAAgMQAAgMgIgJQgIgIgMAAQgIAAgLAHIAAhTIAUgCQArAAAfAgQAfAfAAArQAAAsggAfQgfAfgtAAQgXAAgVgKg");
	this.shape_30.setTransform(581.5,120.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAheQAAgQgIgKQgIgJgNAAQgLAAgJAIQgJAJAAALQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJACgIAAQgtgBgfgeg");
	this.shape_31.setTransform(556.1,123.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAnAAQAKAAAOACIAABSQgIgFgHAAQgUAAAAAfIAABhg");
	this.shape_32.setTransform(538.8,123.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000033").s().p("AhLBLQgggfAAgsQAAgsAggfQAggeAtAAQArAAAgAfQAeAfAAArQABAsggAfQggAfgsAAQgrAAgggfgAgUgVQgJAJAAAMQAAANAJAJQAIAJAMAAQAMAAAJgJQAJgJAAgNQAAgMgJgJQgJgJgMAAQgMAAgIAJg");
	this.shape_33.setTransform(519.2,123.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000033").s().p("AhKBvQgggfAAgsQAAgrAfgfQAfggArAAIATACIAABTQgJgHgJAAQgMAAgHAIQgJAJAAAMQAAAMAJAJQAIAIAMAAQAdAAAAgpIAAimIBNAAIAACpQAAAvgZAeQgOARgWAKQgWAKgXAAQgsAAgfgfg");
	this.shape_34.setTransform(495,120.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000033").s().p("AATCPIAAiuQAAgQgEgHQgEgGgKAAQgTAAAAAdIAAAiIAXAAIAABKIgXAAIAABCIhTAAIAAixQAAgzAcgdQAcgcAyAAQAyAAAXAaQAYAZAAA3IAACzg");
	this.shape_35.setTransform(470.8,119.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000033").s().p("AhKBLQgfgfAAgtQAAgrAfgfQAfgfArAAQAmAAAeAYQAdAZAIAmIhPACQgJgNgPAAQgNAAgIAJQgJAIAAANQABAMAIAKQAKAIAMABQATgBAIgWIBMgDQgDAtgdAcQgfAcgqAAQgsAAgfgfg");
	this.shape_36.setTransform(701,59.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_37.setTransform(683.1,54.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000033").s().p("AAPBoIAAhyQAAgSgPAAQgNAAAAASIAAByIhNAAIAAhxQAAgoAagbQAbgbAlAAQAsAAAaAfQAVAZAAAsIAABrg");
	this.shape_38.setTransform(665.7,58.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000033").s().p("AhLBLQgfgfgBgsQABgsAfgfQAfgeAtAAQAsAAAgAfQAeAfAAArQAAAsgfAfQgfAfgtAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAIgJAAgNQAAgMgIgJQgJgJgMAAQgLAAgJAJg");
	this.shape_39.setTransform(642.7,59.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000033").s().p("AhICJIAAhQQAMAHAJAAQALAAAIgGQAHgGAAgKQAAgGgMgVQgTgfAAghQAAgoAdgcQAbgdAnAAQARAAARAGIAABQQgJgEgFAAQgKAAgGAHQgHAHAAAKQAAAJAHANIAHALQARAdAAAbQAAApgdAcQgdAdgpAAQgUAAgUgKg");
	this.shape_40.setTransform(622.2,55.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000033").s().p("AgFCMIAAhIIAMAAQANAAAFgDQAFgEABgIQgBgNgUAAIgPAAIAAhKQAWAAgBgPQABgPgVAAIgPAAIAADMIhTAAIAAkXIBlAAQBaAAAABHQAAAjgfAYQAtASAAAyQAAAngbAWQgMALgPAEQgPAFgZAAg");
	this.shape_41.setTransform(602.7,55.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000033").s().p("AhUB5QgagbAAglQAAgqAlgdQgUgZAAgaQAAghAXgYQAYgYAgAAQAhAAAXAXQAYAXgBAgIAAAKIhAAAQgBgVgMAAQgMAAAAAMQAAAEADAFIA0BOIA0AAIAAANQABAZgMAWIAnA8IhJAAIgJgKQgXARgZAAQgmAAgbgagAgsA4QAAAJAFAHQAHAGAIAAQAHAAAIgFIgZgiQgLAHABAKg");
	this.shape_42.setTransform(573.6,55.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000033").s().p("AhKBLQgfgfAAgtQAAgrAfgfQAggfAqAAQAnAAAdAYQAdAZAIAmIhPACQgKgNgPAAQgMAAgIAJQgIAIAAANQgBAMAKAKQAJAIALABQAUgBAIgWIBMgDQgDAtgeAcQgdAcgrAAQgsAAgfgfg");
	this.shape_43.setTransform(545.9,59.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_44.setTransform(528,54.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000033").s().p("AAPBoIAAhyQAAgSgPAAQgNAAAAASIAAByIhNAAIAAhxQAAgoAagbQAagbAmAAQAsAAAaAfQAVAZAAAsIAABrg");
	this.shape_45.setTransform(510.6,58.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000033").s().p("AhLBLQgfgfgBgsQABgsAfgfQAggeAsAAQAsAAAgAfQAeAfAAArQAAAsgfAfQgfAfgtAAQgrAAgggfgAgUgVQgJAJAAAMQAAANAJAJQAIAJAMAAQAMAAAJgJQAJgJgBgNQABgMgJgJQgJgJgMAAQgMAAgIAJg");
	this.shape_46.setTransform(487.5,59.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000033").s().p("AhICJIAAhQQAMAHAJAAQALAAAIgGQAHgGAAgKQAAgGgMgVQgTgfAAghQAAgoAdgcQAbgdAnAAQARAAARAGIAABQQgJgEgFAAQgKAAgGAHQgHAHAAAKQAAAJAHANIAHALQARAdAAAbQAAApgdAcQgdAdgpAAQgUAAgUgKg");
	this.shape_47.setTransform(467,55.3);

	this.button_1 = new lib.cerrar();
	this.button_1.name = "button_1";
	this.button_1.parent = this;
	this.button_1.setTransform(971.9,-36.3,2,2,0,0,0,19.4,20.3);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.cerrar(), 3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#990000").s().p("AhfB8QAAgqApAAQAqAAAAAqQAAApgqAAQgpAAAAgpgAhKAvIAAhLIAiAAQAHAhAXAAQAdAAAAg4QAAhYglAAQgeAAAAArQAAAMACAVIgkgLQgEgTAAgKQAAg9BRgBQBlABAABiQAAApgZAbQgZAdgkAAQgXAAgZgSIAAAig");
	this.shape_48.setTransform(307.9,-60.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#990000").s().p("AhrAGQAAg4AgglQAgglAwAAQBmAAAACEIh8AAQAABdAvAAQAsAAAAg0IgBgRIAjAKQgGBThbAAQh2AAAAh3gAgQgnIgBAVIAzAAQAAhSgaAAQgVAAgDA9g");
	this.shape_49.setTransform(283.8,-56.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#990000").s().p("Ag/CnIAegVIAAAIQAAAcANAAQAPAAAAgUQAAgMgRgdIAAjrQAfgBA2gGIAADwIABAhIgOAoQgQAQgiAAQgxAAgOgpgAgWiwQAAgfAnAAQAoAAAAAfQAAAfgoAAQgnAAAAgfg");
	this.shape_50.setTransform(263.1,-56.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#990000").s().p("Ah+A2QAAg1BFgTQA/gUAAgdQAAgkgkAAQgqAAAAAjQAAALAHATIgrgIIgBgVQAAg4BmgBQBiABgBA0IAACPQAAAWAPAAQAFAAAIgEIAIAVQgfANgeAAQgsAAgLgcQgUAdgpAAQhKgBgBhGgAgNgHQgaAOAAAmQgBAuATAAQAaABAAgvIAAhDQgIAJgKAGg");
	this.shape_51.setTransform(246.3,-56.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#990000").s().p("AAaB6IAAiuQAAgagPAAQgOAAgLAWQgMAUAAAdIAACBIhVAAIAAjtQAsAAApgGIAAAtQAggtAuABQA8gBAAA9IAAC2g");
	this.shape_52.setTransform(219,-57);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#990000").s().p("Ah1AAQAAh7B1AAQB2AAAAB7QAAB8h2AAQh1AAAAh8gAgcAAQAABnAcAAQAcAAABhnQgBhmgcAAQgcAAAABmg");
	this.shape_53.setTransform(192.3,-56.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#990000").s().p("AhoAsIAsgJIAAAPQgBAUASAQQARAQAXAAQAfgBAAgaQAAgRgygWQhLggAAgzQAAghAdgWQAdgWAsABQBRAAAIBCIgpAIQgBg2gxAAQgeAAABAaQgBASA0AVQBQAhAAAxQAABQhmAAQhrAAAAhQg");
	this.shape_54.setTransform(167.7,-56.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#990000").s().p("AhYB6IAAjtIAQABQAeAAAngHIAAAnQAUgnAfAAQApAAAAAuQAAAMgEAPIgEAUIg7AAIAFgVQAEgKAAgHQAAgPgLAAQgIAAgIAUQgHATAAAWIAACOg");
	this.shape_55.setTransform(146.9,-57);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#990000").s().p("AhrAGQAAg4AgglQAgglAvAAQBoAAAACEIh9AAQAABdAuAAQAtAAAAg0IAAgRIAiAKQgFBThcAAQh2AAAAh3gAgQgnIgBAVIAyAAQABhSgZAAQgWAAgDA9g");
	this.shape_56.setTransform(123.5,-56.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#990000").s().p("AhwCiIAAk8QAkgBAygGIAAAkQAYgkAiAAQAlAAAWAiQAWAiAAA4QAAB9hUAAQghAAgWgaIAABkgAgbgmQAABbAbAAQAYAAAAhbQAAhYgXgBQgcABAABYg");
	this.shape_57.setTransform(98.9,-52.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#990000").s().p("AhrAGQAAg4AgglQAgglAvAAQBoAAAACEIh9AAQAABdAuAAQAtAAAAg0IAAgRIAiAKQgFBThcAAQh2AAAAh3gAgQgnIgBAVIAyAAQABhSgZAAQgWAAgDA9g");
	this.shape_58.setTransform(58.7,-56.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#990000").s().p("AgxBnIAAicIgdAAIAAgbIAdAAIAAgqQAsgMAogXIAABNIAmAAIAAAbIgmAAIAACnQABAPAJAAQAIAAABgKIAZACQgKAlg2AAQhAAAAAg3g");
	this.shape_59.setTransform(39,-60.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#990000").s().p("AhoAsIAsgJIAAAPQAAAUARAQQARAQAXAAQAfgBAAgaQAAgRgygWQhLggAAgzQAAghAdgWQAdgWAsABQBRAAAIBCIgpAIQgBg2gxAAQgeAAABAaQAAASAzAVQBQAhAAAxQAABQhmAAQhrAAAAhQg");
	this.shape_60.setTransform(19.6,-56.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#990000").s().p("AhrAGQAAg4AgglQAfglAxAAQBmAAABCEIh9AAQAABdAuAAQAtAAAAg0IgBgRIAjAKQgFBThcAAQh2AAAAh3gAgQgnIgBAVIAzAAQAAhSgaAAQgWAAgCA9g");
	this.shape_61.setTransform(-4,-56.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#990000").s().p("AhoAsIAtgJIgCAPQABAUARAQQARAQAYAAQAdgBAAgaQAAgRgwgWQhMggAAgzQAAghAdgWQAdgWAtABQBQAAAIBCIgqAIQABg2gyAAQgdAAgBAaQABASAzAVQBQAhAAAxQAABQhmAAQhrAAAAhQg");
	this.shape_62.setTransform(-42,-56.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#990000").s().p("AhrAGQAAg4AgglQAfglAxAAQBmAAAACEIh8AAQAABdAuAAQAtAAAAg0IgBgRIAjAKQgFBThcAAQh2AAAAh3gAgQgnIgBAVIAzAAQAAhSgaAAQgWAAgCA9g");
	this.shape_63.setTransform(-65.6,-56.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#990000").s().p("AAaB6IAAiuQAAgagPAAQgOAAgLAWQgMAUAAAdIAACBIhVAAIAAjtQAsAAApgGIAAAtQAggtAuABQA8gBAAA9IAAC2g");
	this.shape_64.setTransform(-105.8,-57);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#990000").s().p("AhrAGQAAg4AgglQAgglAvAAQBoAAAACEIh9AAQAABdAuAAQAtAAAAg0IgBgRIAjAKQgGBThbAAQh2AAAAh3gAgQgnIgBAVIAzAAQAAhSgZAAQgWAAgDA9g");
	this.shape_65.setTransform(-131.5,-56.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#990000").s().p("AgqClIAAjsQAoAAAtgHIAADzgAgmiFQAAgfAnAAQAoAAAAAfQAAAfgoAAQgnAAAAgfg");
	this.shape_66.setTransform(-150.4,-61.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#990000").s().p("AhwA/IAAi0QArgCArgEIAAC4QAAAXAPAAQAmAAAAhTIAAh2QArgCAqgEIAADyIhVAAIAAgmQgdArgvAAQg/AAAAg9g");
	this.shape_67.setTransform(-170.8,-56.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#990000").s().p("AASCFIgRABQiOAAgBilQAAimCPAAQCNAAAACpQAABuhIAmQALAdAQAAQAUAAgCgZIAAgGIAZAJIABAMQgBA7g3AAQg2AAgNhBgAgfBVQAJAYAVAAQAHgBAJgFQgGgjgRAAQgNAAgKARgAAiA+QALgogBg6QABhPgKgcQgJgdgaAAQgZAAgJAeQgKAdAABNQAAA+AHAfQAQgXAUgBQAVABAOAcg");
	this.shape_68.setTransform(-200.1,-57.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#990000").s().p("AhfBDQAAgpAZgbQAZgdAkAAQAXgBAZATIAAgjIAkAAIAABMIgiAAQgHghgXgBQgdABAAA4QAABXAmABQAdAAAAgrQAAgMgCgVIAkAKQAEAVAAAJQAAA9hRAAQhlAAAAhigAANh7QAAgpAqAAQApAAAAApQAAAqgpAAQgqAAAAgqg");
	this.shape_69.setTransform(-227.8,-52.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000033").s().p("AhJBoIAAhRIAEAAQASAAAIgIQAIgIABgSQACgfAEgNQAEgNANgNQAWgWAnABIAYAAIAABRQgRAAgFAFQgHAHgBAQQgGA8gnAYQgWANgnAAg");
	this.shape_70.setTransform(-60.1,383.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000033").s().p("AhFBIQgVgYAAgsIAAhrIBMAAIAAByQAAASAOAAQAOAAAAgSIAAhyIBNAAIAABxQAAAogaAbQgbAbgmAAQgrAAgaggg");
	this.shape_71.setTransform(-79.1,383.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAoAAQAJAAAOACIAABSQgIgFgGAAQgWAAABAfIAABhg");
	this.shape_72.setTransform(-96,382.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000033").s().p("Ag9CPIAAhDQAQAHALAAQAlAAAKgqQgSAMgUAAQgdAAgSgVQgSgVAAghIAAiAIBMAAIAABuQAAASAOAAQAPABAAgVIAAhsIBMAAIAAC1QABAzgdAgQgiAlgwAAQgVAAgVgIg");
	this.shape_73.setTransform(-115.2,388);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000033").s().p("AhqCOIAAipQAAgvAZgeQAOgRAWgKQAVgKAXAAQAtAAAfAfQAgAfAAAsQAAArgfAfQgfAggrAAIgUgBIAAhUQAKAIAIgBQAMAAAJgJQAIgIAAgMQAAgNgJgHQgIgKgMABQgdgBAAApIAACng");
	this.shape_74.setTransform(-138.2,386.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000033").s().p("AhLBMQgfgfAAgtQAAgrAfggQAfgeAsAAQAxAAAdAcQAdAeAAAxIAABkIhNAAIAAheQAAgQgIgJQgIgKgNAAQgLAAgJAJQgJAIAAAMQAAANAIAHQAIAJAMgBQAJAAAJgEIAABOQgJACgIABQgtAAgfgfg");
	this.shape_75.setTransform(-163.6,383.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000033").s().p("AhnCPIAAitQAAgbAGgRQAFgSANgPQAPgQAWgKQAWgJAXAAQAqAAAdAcQAdAdAAAqQAAAqgZAYQgYAYgwAAIgMAAIAAhJQAZAAgBgTQABgSgTAAQgTAAAAAYIAAC2g");
	this.shape_76.setTransform(-186.3,379);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000033").s().p("AhLBMQgegeAAguQgBgrAggfQAfggAtAAQAsAAAfAfQAdAeAAAsIgBAOIhzAAQgCgJAAgGQAAgLADgJIAnAAQgFgYgVAAQgNAAgKANQgIAMgBATQAAATAJAMQAJAMANABQALAAALgMIAsA0QgfAYglAAQgsAAgggeg");
	this.shape_77.setTransform(-24.4,318.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_78.setTransform(-42.3,313.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000033").s().p("AhmCPIAAitQgBgbAGgRQAFgSANgPQAPgQAWgKQAWgJAXAAQAqAAAdAcQAdAdABAqQAAAqgaAYQgYAYgwAAIgMAAIAAhJQAZAAgBgTQABgSgTAAQgTAAAAAYIAAC2g");
	this.shape_79.setTransform(-59.3,314.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000033").s().p("AhKBMQgggeAAguQAAgrAggfQAfggAsAAQAtAAAfAfQAdAeAAAsIAAAOIh0AAQgCgJAAgGQAAgLADgJIAmAAQgDgYgWAAQgNAAgKANQgJAMAAATQABATAIAMQAJAMANABQAMAAAKgMIAsA0QgfAYglAAQgtAAgegeg");
	this.shape_80.setTransform(-93.9,318.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_81.setTransform(-111.8,313.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000033").s().p("AAVCMIguiGIAhhGIBQAAIgmBKIA4CCgAhpCMIAAkXIBMAAIAAEXg");
	this.shape_82.setTransform(-127.6,314.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000033").s().p("AAOBoIAAhyQAAgSgOAAQgOAAAAASIAAByIhMAAIAAhxQAAgoAbgbQAZgbAmAAQAsAAAbAfQAUAZAAAsIAABrg");
	this.shape_83.setTransform(-151.8,318.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_84.setTransform(-169.3,313.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000033").s().p("AhnCPIAAitQAAgbAGgRQAFgSANgPQAPgQAWgKQAWgJAXAAQAqAAAdAcQAdAdAAAqQAAAqgZAYQgYAYgwAAIgMAAIAAhJQAZAAgBgTQABgSgTAAQgTAAAAAYIAAC2g");
	this.shape_85.setTransform(-186.3,314.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000033").s().p("AhJBnIAAhRIAEAAQASAAAIgHQAIgIABgSQACggAEgNQAEgMANgMQAWgXAnAAIAYAAIAABRQgRAAgFAHQgHAGgBAQQgGA7gnAZQgWAMgnAAg");
	this.shape_86.setTransform(-126.5,253.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000033").s().p("AAOBoIAAhyQAAgSgOAAQgOAAAAASIAAByIhMAAIAAhxQAAgoAbgbQAZgbAmAAQAsAAAbAfQAUAZAAAsIAABrg");
	this.shape_87.setTransform(-145.5,253.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAheQAAgQgIgKQgIgJgNAAQgLAAgJAJQgJAIAAALQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJACgIgBQgtAAgfgeg");
	this.shape_88.setTransform(-169.8,253.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000033").s().p("AhICJIAAhQQAMAHAJAAQALAAAIgGQAHgGAAgKQAAgGgMgVQgTgfAAghQAAgoAdgcQAbgdAnAAQARAAARAGIAABQQgJgEgFAAQgKAAgGAHQgHAHAAAKQAAAJAHANIAHALQARAdAAAbQAAApgdAcQgdAdgpAAQgUAAgUgKg");
	this.shape_89.setTransform(-190.3,249.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000033").s().p("Ag9CPIAAhCQAPAGAMAAQAlAAALgqQgUAMgTAAQgdAAgSgVQgTgVAAggIAAiBIBOAAIAABuQgBASAOABQAPgBAAgUIAAhsIBNAAIAAC2QAAAygdAgQgjAlgvAAQgVAAgVgIg");
	this.shape_90.setTransform(-30.2,193.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000033").s().p("AANCMIAAhsQAAgNgDgFQgCgEgIAAQgMAAAAATIAABvIhNAAIAAkXIBNAAIAABVQASgOAUAAQAdAAASAWQARAVAAAjIAACCg");
	this.shape_91.setTransform(-52.6,184.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000033").s().p("AhJBnIAAhRIAEAAQASAAAIgHQAIgIABgSQACggAEgNQAEgMANgMQAWgXAnAAIAYAAIAABRQgRAAgFAHQgHAGgBAQQgGA7gnAZQgWAMgnAAg");
	this.shape_92.setTransform(-71.4,189.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAnAAQAKAAAOACIAABSQgIgFgHAAQgVAAABAfIAABhg");
	this.shape_93.setTransform(-84.7,188.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000033").s().p("AhKBMQgggfAAgsQABgsAfggQAfgeAsAAQAtgBAeAfQAfAeAAAsIgBANIhzAAQgDgIAAgHQAAgKAEgJIAlAAQgEgYgVAAQgOAAgIANQgKAMABATQAAATAIANQAJAMANgBQALAAALgLIAsA1QgfAYglgBQgtAAgegeg");
	this.shape_94.setTransform(-104,188.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000033").s().p("AAvCNQgaAAgWgMQgXgMgOgVQgRgaAAgsIAAimIBLAAIAABOIAjAAIAABQIgjAAQAAAYAIAJQAIAKAUAAIAABQIgJAAg");
	this.shape_95.setTransform(-122.8,185.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000033").s().p("AAvCNQgaAAgWgMQgXgMgOgVQgRgaAAgsIAAimIBLAAIAABOIAjAAIAABQIgjAAQAAAYAIAJQAIAKAUAAIAABQIgJAAg");
	this.shape_96.setTransform(-136.9,185.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000033").s().p("AhFBIQgVgYAAgsIAAhrIBNAAIAAByQAAASANAAQAOAAAAgSIAAhyIBNAAIAABxQAAAogaAbQgbAbgmAAQgrAAgaggg");
	this.shape_97.setTransform(-155.2,189.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000033").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_98.setTransform(-172.6,184.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000033").s().p("AhfCPIAAisQABgxAeggQAeggAsAAQAzAAAjArIhFAyQgGgQgOAAQgSAAAAAbIAAAiIAaAAIAABKIgaAAIAABJg");
	this.shape_99.setTransform(-187.1,184.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000033").s().p("AhLBMQgegfAAgsQAAgsAfggQAfgeAtAAQAsgBAeAfQAeAeABAsIgCANIhyAAQgDgIAAgHQAAgKAEgJIAlAAQgEgYgVAAQgOAAgIANQgJAMAAATQgBATAJANQAJAMANgBQALAAALgLIAsA1QgfAYglgBQgsAAgggeg");
	this.shape_100.setTransform(-116.3,123.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000033").s().p("AhehpIBJAAIAVA3IAXg3IBIAAIhfDTg");
	this.shape_101.setTransform(-136.1,124.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000033").s().p("AhLBMQgegfAAgsQgBgsAgggQAfgeAtAAQAsgBAeAfQAeAeAAAsIgBANIhzAAQgCgIAAgHQAAgKADgJIAnAAQgFgYgVAAQgOAAgJANQgIAMgBATQAAATAJANQAJAMANgBQALAAALgLIAsA1QgfAYglgBQgtAAgfgeg");
	this.shape_102.setTransform(-155.7,123.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000033").s().p("AAvCNQgaAAgWgMQgXgMgOgVQgRgaAAgsIAAimIBLAAIAABOIAjAAIAABQIgjAAQAAAYAIAJQAIAKAUAAIAABQIgJAAg");
	this.shape_103.setTransform(-174.5,120.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000033").s().p("AhICJIAAhQQAMAHAJAAQALAAAIgGQAHgGAAgKQAAgGgMgVQgTgfAAghQAAgoAdgcQAbgdAnAAQARAAARAGIAABQQgJgEgFAAQgKAAgGAHQgHAHAAAKQAAAJAHANIAHALQARAdAAAbQAAApgdAcQgdAdgpAAQgUAAgUgKg");
	this.shape_104.setTransform(-190.3,120.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAnAAQAKAAAOACIAABSQgIgFgHAAQgUAAAAAfIAABhg");
	this.shape_105.setTransform(-52.1,58.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000033").s().p("AhKBMQgggfAAgsQAAgsAgggQAfgeAsAAQAtgBAfAfQAdAeAAAsIAAANIh0AAQgCgIAAgHQAAgKADgJIAmAAQgDgYgWAAQgNAAgKANQgJAMAAATQABATAIANQAJAMANgBQAMAAAKgLIAsA1QgfAYglgBQgtAAgegeg");
	this.shape_106.setTransform(-71.4,59.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000033").s().p("AhqCOIAAiqQAAguAZgeQAOgRAWgKQAVgKAXAAQAtAAAfAfQAgAfAAAsQAAAqgfAgQgfAggrAAIgUgCIAAhTQAKAIAIAAQAMgBAJgIQAIgJAAgMQAAgMgJgJQgIgIgMgBQgdABAAApIAACmg");
	this.shape_107.setTransform(-95,62.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000033").s().p("AhLBMQgfgfAAgsQABgsAfggQAfgeAsAAQAtgBAeAfQAfAeAAAsIgBANIhzAAQgDgIAAgHQAAgKAEgJIAlAAQgEgYgVAAQgOAAgIANQgJAMAAATQgBATAJANQAJAMANgBQAMAAAKgLIAsA1QgfAYglgBQgsAAgggeg");
	this.shape_108.setTransform(-118.9,59.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000033").s().p("AhKBMQgggfAAgsQABgsAfggQAfgeAsAAQAtgBAfAfQAeAeAAAsIgBANIhzAAQgDgIAAgHQAAgKADgJIAmAAQgDgYgWAAQgNAAgJANQgKAMABATQAAATAIANQAJAMANgBQAMAAAKgLIAsA1QgfAYglgBQgtAAgegeg");
	this.shape_109.setTransform(-142.1,59.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAoAAQAJAAAOACIAABSQgIgFgGAAQgWAAABAfIAABhg");
	this.shape_110.setTransform(-159.5,58.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000033").s().p("AhnBpQgrgqAAg+QAAg+ArgqQArgrA+AAQA+AAApAqQAdAdAMAzIhZAGQgPgugqAAQgaAAgRATQgRASAAAcQAAAbARASQARASAaAAQAZAAAQgQQAQgPACgeIBYACQgJBEgmAlQgmAlg+AAQg9AAgqgqg");
	this.shape_111.setTransform(-183.2,55.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.button_1},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	// Capa 2
	this.instance = new lib.fondo();
	this.instance.parent = this;
	this.instance.setTransform(-242,-82,5.552,2.393);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-597.6,45.6,235.4,148);


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

	// obregon2_mc
	this.obregon2_mc = new lib.obregon2();
	this.obregon2_mc.name = "obregon2_mc";
	this.obregon2_mc.parent = this;
	this.obregon2_mc.setTransform(1083.2,250.1,1,1,0,0,0,70.3,75.4);

	this.timeline.addTween(cjs.Tween.get(this.obregon2_mc).to({_off:true},1).wait(1));

	// victoria2_mc
	this.victoria2_mc = new lib.victoria2();
	this.victoria2_mc.name = "victoria2_mc";
	this.victoria2_mc.parent = this;
	this.victoria2_mc.setTransform(869.7,348.1);

	this.timeline.addTween(cjs.Tween.get(this.victoria2_mc).to({_off:true},1).wait(1));

	// huerta2_mc
	this.huerta2_mc = new lib.huerta2();
	this.huerta2_mc.name = "huerta2_mc";
	this.huerta2_mc.parent = this;
	this.huerta2_mc.setTransform(1012.9,1.7);

	this.timeline.addTween(cjs.Tween.get(this.huerta2_mc).to({_off:true},1).wait(1));

	// hidalgo2_mc
	this.hidalgo2_mc = new lib.hidalgo2();
	this.hidalgo2_mc.name = "hidalgo2_mc";
	this.hidalgo2_mc.parent = this;
	this.hidalgo2_mc.setTransform(1012.9,348.1);

	this.timeline.addTween(cjs.Tween.get(this.hidalgo2_mc).to({_off:true},1).wait(1));

	// iturbide2_mc
	this.iturbide2_mc = new lib.iturbide2();
	this.iturbide2_mc.name = "iturbide2_mc";
	this.iturbide2_mc.parent = this;
	this.iturbide2_mc.setTransform(934.7,76.7,1,1,0,0,0,65,75);

	this.timeline.addTween(cjs.Tween.get(this.iturbide2_mc).to({_off:true},1).wait(1));

	// zapata2_mc
	this.zapata2_mc = new lib.zapata2();
	this.zapata2_mc.name = "zapata2_mc";
	this.zapata2_mc.parent = this;
	this.zapata2_mc.setTransform(944.7,247.1,1,1,0,0,0,75,72.4);

	this.timeline.addTween(cjs.Tween.get(this.zapata2_mc).to({_off:true},1).wait(1));

	// villa2_mc
	this.villa2_mc = new lib.villa2();
	this.villa2_mc.name = "villa2_mc";
	this.villa2_mc.parent = this;
	this.villa2_mc.setTransform(790.2,420.9,1,1,0,0,0,67,72.8);

	this.timeline.addTween(cjs.Tween.get(this.villa2_mc).to({_off:true},1).wait(1));

	// iturbide1_mc
	this.iturbide1_mc = new lib.iturbide1();
	this.iturbide1_mc.name = "iturbide1_mc";
	this.iturbide1_mc.parent = this;
	this.iturbide1_mc.setTransform(580.8,348.1);

	this.timeline.addTween(cjs.Tween.get(this.iturbide1_mc).to({_off:true},1).wait(1));

	// ana2_mc
	this.ana2_mc = new lib.santaana2();
	this.ana2_mc.name = "ana2_mc";
	this.ana2_mc.parent = this;
	this.ana2_mc.setTransform(508.9,420.1,1,1,0,0,0,70.3,72);

	this.timeline.addTween(cjs.Tween.get(this.ana2_mc).to({_off:true},1).wait(1));

	// madero2_mc
	this.madero2_mc = new lib.madero2();
	this.madero2_mc.name = "madero2_mc";
	this.madero2_mc.parent = this;
	this.madero2_mc.setTransform(351.5,421,1,1,0,0,0,55.1,72.9);

	this.timeline.addTween(cjs.Tween.get(this.madero2_mc).to({_off:true},1).wait(1));

	// morelos2_mc
	this.morelos2_mc = new lib.morelos2();
	this.morelos2_mc.name = "morelos2_mc";
	this.morelos2_mc.parent = this;
	this.morelos2_mc.setTransform(209.2,422.5,1,1,0,0,0,55,74.4);

	this.timeline.addTween(cjs.Tween.get(this.morelos2_mc).to({_off:true},1).wait(1));

	// moctezuma2_mc
	this.moctezuma2_mc = new lib.moctezuma2();
	this.moctezuma2_mc.name = "moctezuma2_mc";
	this.moctezuma2_mc.parent = this;
	this.moctezuma2_mc.setTransform(77.6,422.6,1,1,0,0,0,66.4,74.5);

	this.timeline.addTween(cjs.Tween.get(this.moctezuma2_mc).to({_off:true},1).wait(1));

	// ana1_mc
	this.ana1_mc = new lib.santaana1();
	this.ana1_mc.name = "ana1_mc";
	this.ana1_mc.parent = this;
	this.ana1_mc.setTransform(723.2,175);

	this.timeline.addTween(cjs.Tween.get(this.ana1_mc).to({_off:true},1).wait(1));

	// moctezuma1_mc
	this.moctezuma1_mc = new lib.moctezuma1();
	this.moctezuma1_mc.name = "moctezuma1_mc";
	this.moctezuma1_mc.parent = this;
	this.moctezuma1_mc.setTransform(647.2,249.7,1,1,0,0,0,66.4,75);

	this.timeline.addTween(cjs.Tween.get(this.moctezuma1_mc).to({_off:true},1).wait(1));

	// victoria1_mc
	this.victoria1_mc = new lib.victoria1();
	this.victoria1_mc.name = "victoria1_mc";
	this.victoria1_mc.parent = this;
	this.victoria1_mc.setTransform(438.6,175);

	this.timeline.addTween(cjs.Tween.get(this.victoria1_mc).to({_off:true},1).wait(1));

	// morelos1_mc
	this.morelos1_mc = new lib.morelos1();
	this.morelos1_mc.name = "morelos1_mc";
	this.morelos1_mc.parent = this;
	this.morelos1_mc.setTransform(296.4,175);

	this.timeline.addTween(cjs.Tween.get(this.morelos1_mc).to({_off:true},1).wait(1));

	// obregon1_mc
	this.obregon1_mc = new lib.obregon1();
	this.obregon1_mc.name = "obregon1_mc";
	this.obregon1_mc.parent = this;
	this.obregon1_mc.setTransform(224.5,249.1,1,1,0,0,0,70.3,74.4);

	this.timeline.addTween(cjs.Tween.get(this.obregon1_mc).to({_off:true},1).wait(1));

	// diaz2_mc
	this.diaz2_mc = new lib.porfirio2();
	this.diaz2_mc.name = "diaz2_mc";
	this.diaz2_mc.parent = this;
	this.diaz2_mc.setTransform(76.7,247.5,1,1,0,0,0,65.5,72.8);

	this.timeline.addTween(cjs.Tween.get(this.diaz2_mc).to({_off:true},1).wait(1));

	// zapata1_mc
	this.zapata1_mc = new lib.zapata1();
	this.zapata1_mc.name = "zapata1_mc";
	this.zapata1_mc.parent = this;
	this.zapata1_mc.setTransform(798,74,1,1,0,0,0,75,72);

	this.timeline.addTween(cjs.Tween.get(this.zapata1_mc).to({_off:true},1).wait(1));

	// diaz1_mc
	this.diaz1_mc = new lib.porfirio1();
	this.diaz1_mc.name = "diaz1_mc";
	this.diaz1_mc.parent = this;
	this.diaz1_mc.setTransform(646.3,73.7,1,1,0,0,0,65.5,72);

	this.timeline.addTween(cjs.Tween.get(this.diaz1_mc).to({_off:true},1).wait(1));

	// hidalgo1_mc
	this.hidalgo1_mc = new lib.hidago1();
	this.hidalgo1_mc.name = "hidalgo1_mc";
	this.hidalgo1_mc.parent = this;
	this.hidalgo1_mc.setTransform(507,74,1,1,0,0,0,68.4,72);

	this.timeline.addTween(cjs.Tween.get(this.hidalgo1_mc).to({_off:true},1).wait(1));

	// madero1_mc
	this.madero1_mc = new lib.madero1();
	this.madero1_mc.name = "madero1_mc";
	this.madero1_mc.parent = this;
	this.madero1_mc.setTransform(296.4,2);

	this.timeline.addTween(cjs.Tween.get(this.madero1_mc).to({_off:true},1).wait(1));

	// villa1_mc
	this.villa1_mc = new lib.villa1();
	this.villa1_mc.name = "villa1_mc";
	this.villa1_mc.parent = this;
	this.villa1_mc.setTransform(221.2,73.7,1,1,0,0,0,67,72);

	this.timeline.addTween(cjs.Tween.get(this.villa1_mc).to({_off:true},1).wait(1));

	// huerta1_mc
	this.huerta1_mc = new lib.huerta1();
	this.huerta1_mc.name = "huerta1_mc";
	this.huerta1_mc.parent = this;
	this.huerta1_mc.setTransform(79.6,75.7,1,1,0,0,0,68.4,74);

	this.timeline.addTween(cjs.Tween.get(this.huerta1_mc).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,-3.6,1133.2,517.7);


// stage content:
(lib.memokylie2 = function(mode,startPosition,loop) {
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
				inicio  = 3
				
		puntos = 0
		levantado1 = 0
		levantado2 = 0
		intentos = 19
		respuesta = 0
				raiz.gotoAndStop(0)
				//raiz.memorama.play()
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
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
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

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(675,380);
	this.___camera___instance.depth = 0;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(2));

	// Layer 5
	this.menurespuestas = new lib.personajesmenu();
	this.menurespuestas.name = "menurespuestas";
	this.menurespuestas.parent = this;
	this.menurespuestas.setTransform(443.1,329.7,1,1,0,0,0,159.4,212.8);
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
	this.triunfo.setTransform(1176.2,688.4,0.603,0.603,0,0,0,282.1,181.2);

	this.instrucciones = new lib.instructions();
	this.instrucciones.name = "instrucciones";
	this.instrucciones.parent = this;
	this.instrucciones.setTransform(670.4,311.9,1,1,0,0,0,282.1,181.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instrucciones},{t:this.triunfo}]},1).wait(1));

	// Layer 1
	this.inicio_btn = new lib.inicio();
	this.inicio_btn.name = "inicio_btn";
	this.inicio_btn.parent = this;
	this.inicio_btn.setTransform(674.2,379.4,2,2,0,0,0,46.3,46.3);
	new cjs.ButtonHelper(this.inicio_btn, 0, 1, 2);

	this.instance = new lib.LOGONEW();
	this.instance.parent = this;
	this.instance.setTransform(23,681,0.755,0.755);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUC1QgJgIAAgNQAAgMAJgIQAIgJAMAAQAMAAAJAJQAJAIAAAMQAAANgJAIQgJAJgMAAQgMAAgIgJgAgEBWIgYjZIgCgVQAAgRAKgKQAIgKANAAQAMAAAJAKQAJAKAAAUIgBASIgZDZg");
	this.shape.setTransform(813.2,610.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxB6QgJgCgFAAQgGAAgEAHIgJAAIAAhYIAJAAQAIAlAVATQAVATAZAAQATAAAMgKQALgLAAgQQAAgSgNgNQgNgMgmgUQgngSgMgQQgMgPAAgXQAAgfAVgUQAVgUAhAAQANAAAVAGQAOAEAEAAQAFAAACgCQACgCAEgGIAIAAIAABTIgIAAQgLgngPgOQgRgPgXAAQgTAAgMAKQgLAKAAAMQAAAPAIALQAJALAZAMIAmAUQA3AZAAAsQAAAhgZAVQgaAUgfAAQgWAAgdgIg");
	this.shape_1.setTransform(793.7,616.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAhB3QgHgJgBgVQglAdgJAFQgPAGgQAAQgaAAgQgSQgRgRAAgdQAAgRAIgNQALgSAcgRQAbgPA+gXIAAgJQAAglgLgOQgMgOgVAAQgRAAgKAKQgKAIAAAMIAAAQQAAAMgGAHQgGAHgLgBQgKAAgGgGQgGgIAAgLQAAgXAXgUQAYgTArAAQAfAAAVALQAQAIAIASQAFALAAAkIAABSQAAAkABAIQABAHAEADQACADAFAAQAEAAADgCQAGgDAQgRIAAAQQgeAogcAAQgNAAgIgKgAgaAAQgVAMgJANQgKANAAAPQAAAUAMANQAMAMAPAAQAUAAAggbIAAhcQgnAPgMAGg");
	this.shape_2.setTransform(771.3,616.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABZB+IAAgJIAFAAQAQAAAJgGQAGgFACgJQACgFAAgVIAAhpQAAgegHgMQgLgSgXABQgPgBgNAIQgPAHgVATIAAADIAAALIAAB1QAAAZADAHQADAFAIAFQAIAEASAAIAAAJIh7AAIAAgJQAVAAAIgFQAHgFADgKQABgEAAgWIAAhpQAAgegJgNQgMgRgVAAQgOAAgPAIQgVALgNAPIAACDQAAAYAEAIQADAHAHAEQAGADAUAAIAAAJIh6AAIAAgJQASAAAGgDQAHgEADgIQAEgJAAgWIAAhdQAAgogDgMQgCgKgDgCQgFgEgHAAQgHAAgLAEIgDgJIBJgfIAMAAIAAA0IAggeQAMgKAOgGQAOgGAOAAQAXAAAPAOQARANAGAZQAcgfASgLQATgJAUgBQAUABAPAJQAPALAKAWQAFAQABAhIAABpQAAAXADAJQADAFAHAFQAHAEARAAIAAAJg");
	this.shape_3.setTransform(736.9,616.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhHBgQgggjAAg6QAAg+AhgjQAfgkAxABQApAAAaAbQAbAbAAAuIipAAQAAA2AaAeQAcAgAiAAQAZgBASgNQASgNALggIAJAGQgGAkgaAeQgcAfgpAAQgrAAgfgjgAgshdQgSARgDAfIBxAAQgBgXgEgKQgIgPgNgJQgNgIgOAAQgWAAgRARg");
	this.shape_4.setTransform(689.7,616.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAsDDIAAgjQgTASgQAJQgRAIgUAAQgoAAgegiQgegiAAg1QAAg0AhgrQAhgsA1AAQAfAAAWAUIAAgtQAAgqgDgKQgBgJgFgEQgEgDgGAAQgIAAgLAEIgEgKIBJgeIANAAIAAEcQAAArACAKQACAJAFAEQADAEAHAAQAHAAAMgFIADAJIhJAfgAg2gbQgZAbAAA1QAAA2AYAdQAXAdAdAAQAYAAAXgYIAAh/QgCgRgIgPQgJgPgNgIQgMgIgNAAQgXAAgSAWg");
	this.shape_5.setTransform(664.5,610.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AANB+IAAgJIAFAAQARAAAHgFQAHgGADgKQABgEAAgVIAAhkQAAghgJgPQgJgQgUABQgfAAggAiIAACBQAAAZADAGQAEAIAHAEQAGADAUAAIAAAJIh5AAIAAgJIAFAAQATAAAGgKQAHgJAAgbIAAhaQAAgsgCgLQgCgJgEgDQgFgEgHAAQgHAAgKAEIgFgJIBLgfIALAAIAAA0QArg0AnAAQAUABAOAJQAPAKAIAYQAGAQAAAhIAABoQAAAXAEAJQADAGAHAEQAGAEASAAIAAAJg");
	this.shape_6.setTransform(636,616.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhHBgQgggjAAg6QAAg+AhgjQAfgkAxABQApAAAaAbQAbAbAAAuIipAAQAAA2AaAeQAcAgAiAAQAZgBASgNQASgNALggIAJAGQgGAkgaAeQgcAfgpAAQgrAAgfgjgAgshdQgSARgDAfIBxAAQgBgXgFgKQgGgPgOgJQgNgIgNAAQgXAAgRARg");
	this.shape_7.setTransform(610.3,616.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhYB+IAAgJQATAAAJgGQAHgFADgJQABgFAAgVIAAheQAAgrgCgIQgCgIgEgEQgFgEgHAAQgIAAgLAEIgDgJIBLgfIALAAIAAA3QAeg3AhAAQAOABAKAIQAKAJAAAMQgBAKgGAIQgIAHgJAAQgJAAgMgJQgMgKgFAAQgFABgGAFQgMALgMAZIAAB1QAAAVAFAKQADAHAJAFQAIAFARAAIAAAJg");
	this.shape_8.setTransform(589.1,616.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiAC5IAAgKIAHAAQAOABALgGQAFgDADgHQADgGAAgbIAAjoQAAgYgCgGQgDgHgEgDQgFgDgIAAQgHAAgJAEIgEgJIBMgeIALAAIAAA5QASggAUgNQASgNAVAAQAlAAAZAdQAeAjAAA5QAAA/gkApQgeAiguAAQgTAAgOgFQgLgEgNgMIAABKQAAAaACAHQADAGAIAEQAIAEATAAIAAAKgAgJiLQgKAFgVAYIAABcQgBAdADAJQADAQAPALQAPAMAVAAQAbAAAQgVQAXgbAAgxQAAg4gZgfQgSgVgXAAQgNAAgMAHg");
	this.shape_9.setTransform(564.8,622.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAhB3QgHgJgBgVQglAdgJAFQgPAGgQAAQgaAAgQgSQgRgRAAgdQAAgRAIgNQALgSAcgRQAbgPA+gXIAAgJQAAglgLgOQgMgOgVAAQgRAAgKAKQgKAIAAAMIAAAQQAAAMgGAHQgGAHgLgBQgKAAgGgGQgGgIAAgLQAAgXAXgUQAYgTArAAQAfAAAVALQAQAIAIASQAFALAAAkIAABSQAAAkABAIQABAHAEADQACADAFAAQAEAAADgCQAGgDAQgRIAAAQQgeAogcAAQgNAAgIgKgAgaAAQgVAMgJANQgKANAAAPQAAAUAMANQAMAMAPAAQAUAAAggbIAAhcQgnAPgMAGg");
	this.shape_10.setTransform(540.8,616.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhaBWQgcglAAgvQAAghARghQARgiAbgPQAcgQAdAAQA4AAAiAqQAdAkAAAvQAAAggQAiQgQAigcARQgcARghAAQg3AAghgsgAgkhnQgOAIgJAVQgJAVAAAiQAAA0AWAnQAVAnAiAAQAaAAARgVQARgWAAg0QAAhBgcglQgUgagcAAQgOAAgPAJg");
	this.shape_11.setTransform(908.6,572.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgxB6QgJgCgFAAQgGAAgEAHIgJAAIAAhYIAJAAQAIAlAVATQAVATAZAAQATAAAMgKQALgLAAgQQAAgSgNgNQgNgMgmgUQgngSgMgQQgMgPAAgXQAAgfAVgUQAVgUAhAAQANAAAVAGQAOAEAEAAQAFAAACgCQACgCAEgGIAIAAIAABTIgIAAQgLgngPgOQgRgPgXAAQgTAAgMAKQgLAKAAAMQAAAPAIALQAJALAZAMIAmAUQA3AZAAAsQAAAhgZAVQgaAUgfAAQgWAAgdgIg");
	this.shape_12.setTransform(870.8,572.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhIBgQgfgiAAg7QAAg+AhgjQAfgjAxAAQApgBAaAcQAbAbAAAuIipAAQAAA1AaAgQAbAeAjAAQAZABASgNQASgOALggIAJAFQgGAlgbAfQgbAegoAAQgsgBgggigAgthdQgRARgDAfIBxAAQgCgXgEgKQgGgPgOgJQgNgIgNgBQgXAAgSASg");
	this.shape_13.setTransform(847.8,572.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgpC7QgWgIgXgPIAAj+QAAgqgCgKQgCgJgEgEQgFgDgGAAQgIAAgLAEIgEgKIBKgeIAMAAIAACzQAkgyAoAAQAmAAAcAgQAdAhAAA3QAABBgsAoQglAjguAAQgVAAgWgIgAgOgUQgLAGgRAPIAACTQAOANAPAHQANAHAQAAQAYAAAVgbQAVgbAAgzQAAgvgVgYQgVgagbAAQgNAAgOAHg");
	this.shape_14.setTransform(820.6,566.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAhB4QgHgJgBgXQglAegJAFQgPAGgQAAQgaAAgQgRQgRgSAAgcQAAgTAIgNQALgRAcgRQAbgPA+gXIAAgJQAAgmgLgNQgMgOgVAAQgRAAgKAKQgKAIAAAMIAAAQQAAAMgGAHQgGAHgLAAQgKgBgGgGQgGgIAAgLQAAgYAXgTQAYgTArAAQAfAAAVALQAQAIAIASQAFALAAAkIAABTQAAAjABAIQABAHAEAEQACACAFAAQAEAAADgCQAGgDAQgRIAAAPQgeApgcAAQgNAAgIgJgAgaAAQgVAMgJANQgKANAAAPQAAATAMAOQAMAMAPAAQAUAAAggbIAAhcQgnAPgMAGg");
	this.shape_15.setTransform(796.6,572.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgxB6QgJgCgFAAQgGAAgEAHIgJAAIAAhYIAJAAQAIAlAVATQAVATAZAAQATAAAMgKQALgLAAgQQAAgSgNgNQgNgMgmgUQgngSgMgQQgMgPAAgXQAAgfAVgUQAVgUAhAAQANAAAVAGQAOAEAEAAQAFAAACgCQACgCAEgGIAIAAIAABTIgIAAQgLgngPgOQgRgPgXAAQgTAAgMAKQgLAKAAAMQAAAPAIALQAJALAZAMIAmAUQA3AZAAAsQAAAhgZAVQgaAUgfAAQgWAAgdgIg");
	this.shape_16.setTransform(773.1,572.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhIBgQgfgiAAg7QAAg+AggjQAhgjAvAAQAqgBAbAcQAaAbAAAuIipAAQAAA1AbAgQAaAeAkAAQAYABASgNQARgOANggIAIAFQgFAlgcAfQgbAegoAAQgsgBgggigAgthdQgRARgDAfIBxAAQgCgXgDgKQgIgPgMgJQgOgIgNgBQgXAAgSASg");
	this.shape_17.setTransform(736.4,572.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAzB/IAAg0QgfAigRAJQgQAJgSAAQgVAAgPgMQgPgMgGgTQgGgTAAgiIAAhtQAAgRgEgHQgEgHgHgDQgHgEgUAAIAAgKIBWAAIAACkQAAAiANALQALALARAAQALAAAPgIQAOgHAUgUIAAiLQAAgVgHgHQgIgHgYgBIAAgKIBUAAIAACUQAAArACAKQACAJAEAEQAEAEAGAAQAJAAAKgFIAEAJIhKAfg");
	this.shape_18.setTransform(710.1,573.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAEC5IAAgKIAFAAQAPAAAIgEQAFgDAEgHQADgIAAgWIAAhqQgZAdgSALQgRAKgUAAQgjAAgcggQgcghAAg1QAAg/AlgnQAlgnA0AAQAOAAANAEQANAEAKAJQAQgIAOgJIAJAAIAAE7QAAAXADAHQAEAHAHAEQAGADAUAAIAAAKgAg9iMQgVAZAAA0QAAAyAWAZQAVAZAfAAQAPAAAMgGQANgHAMgQIAAhyQAAgUgFgMQgGgMgNgIQgNgIgQAAQgeAAgWAag");
	this.shape_19.setTransform(683.6,578.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhaBWQgcglAAgvQAAghARghQARgiAbgPQAcgQAdAAQA4AAAiAqQAdAkAAAvQAAAggQAiQgQAigcARQgcARghAAQg3AAghgsgAgkhnQgOAIgJAVQgJAVAAAiQAAA0AWAnQAVAnAiAAQAaAAARgVQARgWAAg0QAAhBgcglQgUgagcAAQgOAAgPAJg");
	this.shape_20.setTransform(641.4,572.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag5C/IAAgKQARAAAGgDQAGgDADgJQAEgIAAgWIAAjfQAAgqgBgJQgDgJgDgEQgFgDgGAAQgIAAgKADIgFgJIBIgeIANAAIAAFGQAAAXADAHQAEAHAGAFQAIADASAAIAAAKg");
	this.shape_21.setTransform(620.3,566);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAhB4QgHgJgBgXQglAegJAFQgPAGgQAAQgaAAgQgRQgRgSAAgcQAAgTAIgNQALgRAcgRQAbgPA+gXIAAgJQAAgmgLgNQgMgOgVAAQgRAAgKAKQgKAIAAAMIAAAQQAAAMgGAHQgGAHgLAAQgKgBgGgGQgGgIAAgLQAAgYAXgTQAYgTArAAQAfAAAVALQAQAIAIASQAFALAAAkIAABTQAAAjABAIQABAHAEAEQACACAFAAQAEAAADgCQAGgDAQgRIAAAPQgeApgcAAQgNAAgIgJgAgaAAQgVAMgJANQgKANAAAPQAAATAMAOQAMAMAPAAQAUAAAggbIAAhcQgnAPgMAGg");
	this.shape_22.setTransform(587.3,572.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgpC7QgWgIgXgPIAAj+QAAgqgCgKQgCgJgEgEQgFgDgGAAQgIAAgLAEIgEgKIBKgeIAMAAIAACzQAkgyAoAAQAmAAAcAgQAdAhAAA3QAABBgsAoQglAjguAAQgVAAgWgIgAgOgUQgLAGgRAPIAACTQAOANAPAHQANAHAQAAQAYAAAVgbQAVgbAAgzQAAgvgVgYQgVgagbAAQgNAAgOAHg");
	this.shape_23.setTransform(559.4,566.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhIBgQgfgiAAg7QAAg+AggjQAhgjAvAAQAqgBAbAcQAaAbAAAuIipAAQAAA1AbAgQAaAeAkAAQAYABASgNQARgOANggIAIAFQgFAlgcAfQgbAegoAAQgsgBgggigAgthdQgRARgDAfIBxAAQgCgXgDgKQgIgPgMgJQgOgIgNgBQgXAAgSASg");
	this.shape_24.setTransform(534.8,572.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAzB/IAAg0QgfAigRAJQgQAJgSAAQgVAAgPgMQgPgMgGgTQgGgTAAgiIAAhtQAAgRgEgHQgEgHgHgDQgHgEgUAAIAAgKIBWAAIAACkQAAAiANALQALALARAAQALAAAPgIQAOgHAUgUIAAiLQAAgVgHgHQgIgHgYgBIAAgKIBUAAIAACUQAAArACAKQACAJAEAEQAEAEAGAAQAJAAAKgFIAEAJIhKAfg");
	this.shape_25.setTransform(508.5,573.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhYB/IAAgKQATAAAJgGQAHgFADgJQABgFAAgVIAAheQAAgrgCgIQgCgJgEgDQgFgEgHAAQgIAAgLAEIgDgJIBLgfIALAAIAAA4QAeg4AhAAQAOABAKAIQAKAJAAAMQgBALgGAHQgIAHgJAAQgKAAgLgJQgMgKgFAAQgFAAgGAGQgMALgMAZIAAB1QAAAUAFALQADAHAJAFQAIAFARAAIAAAKg");
	this.shape_26.setTransform(486,572.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AiKC2IAAgKIAOAAQAXAAAKgPQAFgJAAgeIAAjqQAAgjgHgJQgKgLgVAAIgOAAIAAgKICGAAQAwAAAcAKQAcAKATAYQAUAYAAAhQAAAsgdAcQgeAbg2AAQgNAAgOgCIghgGIAABrQAAAiAIAIQAKAMATAAIAOAAIAAAKgAgiiaIAACXQAOADALAAIASACQAcAAAUgVQAVgWAAgiQAAgXgKgVQgKgVgRgJQgSgLgXAAQgMAAgWAGg");
	this.shape_27.setTransform(460.7,566.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgUC0QgKgKABgVIABgSIAYjYIAJAAIAYDYIACAWQgBAQgIALQgJAKgNAAQgLAAgJgKgAgUiLQgIgIAAgMQAAgMAIgJQAJgJALAAQANAAAJAJQAIAJAAAMQAAAMgIAIQgKAKgMgBQgLABgJgKg");
	this.shape_28.setTransform(436.8,577.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance},{t:this.inicio_btn}]}).to({state:[]},1).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABsD0QBFgFAAhEIAAAAIAAlTQAAhDhFgGIAAAAIAAhvQDmACAAC/IAAAAIAAE1QAADGjmAFIAAAAgAiPCUIAAk2QgBi2DhgHIAAAAIAABuQhCAHAABCIAAAAIAAFTQAABEBCAFIAAAAIAABtQjfgHgBjGgAffFUImDqlICnAAIGFKlgAZZFUICxk+IBMCBIhYC9gAVIFUIAAh1IDMAAIAAB1gASUFUIAAqlICcAAIAAKlgAOiFUIAAqlICTAAIAAKlgALJFUIh5l3IAAkuIAsAAIB0HRIBznRIAtAAIAAEyIh9FzgAGtFUIAAqlICSAAIAAKlgAl9FUIAAqlICTAAIAAKlgApWFUIh5l3IAAkuIAsAAIB0HRIBznRIAtAAIAAEyIh9FzgAtyFUIAAqlICSAAIAAKlgAyKFUIAAh1IDLAAIAAB1gA0/FUIAAqlICdAAIAAKlgA4xFUIAAqlICTAAIAAKlgA8KFUIh4l3IAAkuIAsAAIB0HRIBynRIAtAAIAAEyIh8FzgEggmAFUIAAqlICSAAIAAKlgEAkYAAzIg5AmIAVhCIg2gqIBFAAIAZhBIAVBCIBFADIg4AnIASBDgEgkbAAzIg5AmIAVhCIg2gqIBFAAIAZhBIAVBCIBFADIg4AnIASBDgAVIAsIAAhxIDAAAIAABxgAyKAsIAAhxIDAAAIAABxgAeFioIBPipIClAAIirErgAVIjgIAAhxIDMAAIAABxgAyKjgIAAhxIDLAAIAABxg");
	mask.setTransform(675.2,143.2);

	// Layer 3
	this.instance_1 = new lib.hojita();
	this.instance_1.parent = this;
	this.instance_1.setTransform(924.6,75.1,1,2.474,90.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

	// Layer 6
	this.ans = new cjs.Text("7", "27px 'Arial'", "#FFFFFF");
	this.ans.name = "ans";
	this.ans.textAlign = "center";
	this.ans.lineHeight = 32;
	this.ans.parent = this;
	this.ans.setTransform(1545.1,288.4,1.85,1.85);

	this.trys = new cjs.Text("7", "27px 'Arial'", "#FFFFFF");
	this.trys.name = "trys";
	this.trys.textAlign = "center";
	this.trys.lineHeight = 32;
	this.trys.parent = this;
	this.trys.setTransform(1416.2,36.8,1.85,1.85);

	this.equis = new lib.espantosax();
	this.equis.name = "equis";
	this.equis.parent = this;
	this.equis.setTransform(1031.3,602.4,1.25,1.25,0,0,0,0,0.1);

	this.score = new cjs.Text("7", "27px 'Arial'", "#FFFFFF");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 32;
	this.score.parent = this;
	this.score.setTransform(1509.6,466.5,1.85,1.85);

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
	this.instance_2 = new lib.PinkiePie();
	this.instance_2.parent = this;
	this.instance_2.setTransform(875.8,440.6,0.89,0.895,-18.7);

	this.instance_3 = new lib.Grumpy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(317.7,240,0.898,0.919,3.7);

	this.instance_4 = new lib.Sans();
	this.instance_4.parent = this;
	this.instance_4.setTransform(878,236,0.928,0.927);

	this.instance_5 = new lib.tarjetaBack();
	this.instance_5.parent = this;
	this.instance_5.setTransform(135,362.2,1.11,1.11,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).to({state:[]},1).wait(1));

	// Layer 7
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,1,1).p("EBq6g80Ih5AAIhmAAIiOAAIhmAAIiPAAIhmAAIiOAAIhmAAIiPAAIhmAAIiOAAIhmAAIiPAAIhmAAIiOAAIhmAAIiPAAIhlAAIiPAAIhmAAIiOAAIhnAAIiOAAIhmAAIiPAAIhmAAIiOAAIiVAAIg/AAIhnAAIiOAAIhmAAIiBAAIgOAAIhlAAIiPAAIhmAAIiPAAIhlAAIiPAAIhmAAIiOAAIhnAAIiOAAIhmAAIiPAAIhlAAIiPAAIhmAAIiOAAIhnAAIiOAAIhmAAIiPAAIhlAAIiPAAIgOAAEBq6g80IAAgfEBq6A81IAAh/IAAraIAAoNIAArfIAAoLIAArgIAAoJIAArdIAAoNIAArdIAAoNIAAreIAAoNIAAhxEA1DA9UIBfAAICPAAIBmAAICPAAIBmAAICOAAIBmAAICPAAIBmAAICOAAIBmAAICPAAIBlAAICPAAIBmAAICPAAIBmAAICOAAIBmAAICPAAIBmAAICOAAIBmAAICPAAIBlAAICPgBIBmAAICOAAIAfAAEAAyg80IiAAAIgOAAIhlAAIiPAAIhmAAIiOAAIhnAAIiOAAIhmAAIiPAAIhmAAIiOAAIhmAAIiOAAIhmAAIiPAAIhmAAIiOAAIhmAAIiPAAIhmAAIiPAAIhlAAIiPAAIhmAAIiPAAIhlAAIiPAAIhmAAIiOAAIhmAAIiPAAIhmAAIiOAAIhmAAIiPAAIhmAAIiOAAIhnAAIiNAAIhnAAIiOAAIhmAAIiPAAIhmAAIiOAAIhmAAIiPAAIhmAAIiOAAIhnAAIiNAAIhnAAIiOAAIhmAAIiPAAIiUAAIAAL5IAALeIAAILIAALfIAAIOIAALaIAAIPIAALdIAAIMIAALeIAAIMIAALeIAAAfIBgAAICPAAIBlAAICPAAIBmAAICPAAIBmAAICPAAIBlAAICPAAIBmAAICOAAIBmAAICOAAIBnAAICOAAIBmAAICPAAIBlAAICPAAIBmAAICPAAIBlAAICPAAIBmAAICPgBIBmAAICOAAIBmAAICPAAIBmABICOgBIBmAAICOAAIBmAAICPAAIBmAAICOAAIBnABICOgBIBmAAICPAAIBmAAICOAAIBmAAICPAAIBlABICPgBIBmAAICOAAIBnAAICOAAIBmAAICPAAIBlABICPgBIBlAAICOAAIBnAAICOAAIBmAAICPAAIBlABICPgBIBmAAICPAAIBlAAICPAAIBmABICOAAIBnAAICOAAIBmAAICPAAIBlAAICPAAIBmAAICOAAIBmAAICPAAIBmAAICOAAIDbAAEA1DA81IAAAf");
	this.shape_29.setTransform(672.2,379.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0E1B45").s().p("EBoGA9ZIAHgpICtt3IAALaIgfCdIiOAAICOAAIgHApgEBkRA9ZIAHgoMAGighlIAALgIkTWEIiPABICPgBIgIApgEgdHA9ZIAIgpICPAAIiPAAMAXvh6HICPAAIiPAAIAAAAICPAAIAAAAMgXvB6HIgIApgEgg7A9ZIAHgpICPAAIiPAAMAXvh6HICPAAIiPAAIAAAAICPAAIAAAAMgXvB6HIgIApgEgkwA9ZIAIgpICOAAIiOAAMAXvh6HICOAAIiOAAIAAAAICOAAIAAAAMgXvB6HIgHApgEgolA9ZIAIgpICPAAIiPAAMAXvh6HICPAAIiPAAIAAAAICPAAIAAAAMgXvB6HIgIApgEgsZA9ZIAIgpICPAAIiPAAMAXvh6HICOAAIiOAAIAAAAICOAAIAAAAMgXuB6HIgIApgEgwNA9ZIAIgpICOAAIiOAAMAXuh6HICPAAIiPAAIAAAAICPAAIAAAAMgXvB6HIgHApgEg0BA9ZIAHgpICPAAIiPAAMAXvh6HICPAAIiPAAIAAAAICPAAIAAAAMgXvB6HIgIApgEg32A9ZIAIgpICOAAIiOAAMAXvh6HICOAAIiOAAIAAAAICOAAIAAAAMgXvB6HIgIApgEg7rA9ZIAIgpICPAAIiPAAMAXvh6HICPAAIiPAAIAAAAICPAAIAAAAMgXvB6HIgIApgEA1CAMGIAALfMgHOAlMIiPAAgEAnwA8xMANShETIAALdMgLDA42gEAj8A8xMARGhX9IAALeMgO3BMfgEBgkA8xMAKWg1PIAALgMgIHApvgEBcwA8xMAOKhI1IAALdMgL8A9YgEBY7A8xMAR/hcgIAALeMgPwBRCgEBVHA8xMAVzhwKIAALdMgTlBktgEBRSA8xMAXvh6IIB5AAIAABxMgXZB4XgEBNdA8xMAXwh6IICOAAMgXvB6IgEBJpA8xMAXvh6IICPAAMgXvB6IgEBF1A8xMAXvh6IICOAAMgXvB6IgEBCAA8xMAXvh6IICPAAMgXvB6IgEA+MA8xMAXvh6IICOAAMgXvB6IgEA6XA8xMAXvh6IICPAAMgXvB6IgEA2iA8xMAXwh6IICOAAMgXvB6IgEAvaA8xIFo8+IAALbIjaRjgEAgIA8xMAU6hrnIAALfMgSrBgIgEAcUA8xMAXvh6IIA/AAIAAGTMgWgBz1gEgvSg9XICPAAMgXvB6HIiOABgEhN1g9XICOAAMgXvB6HIiPABgEhpZA8xMAXvh6IICPAAMgXvB6IgEAYfA8wMAXuh6HICPAAMgXvB6HgEAkwg9XICPAAIiPAAIAAAAICPAAIAAAAMgXvB6HIiPAAgEAVeg9XICPAAIiPAAIAAAAICPAAIAAAAMgXuB6HIiPAAgEAGMg9XICPAAIiPAAIAAAAICPAAIAAAAMgXuB6HIiPAAgEg/YA8wMAXvh6HICPAAMgXvB6HgEhDMA8wMAXvh6HICPAAMgXvB6HgEhK1A8wMAXvh6HICPAAMgXvB6HgEhOpA8wMAXvh6HICOAAMgXvB6HgEhSeA8wMAXvh6HICPgBMgXvB6IgEhWSA8wMAXvh6HICOAAMgXvB6HgEhaHA8wMAXvh6HICPAAMgXvB6HgEhd7A8wMAXvh6HICOgBMgXvB6IgEhhwA8wMAXvh6HICOAAMgXvB6HgEBqbA8wgEBmnA8wgEAUqA8wMAXvh6HIAOAAICBAAMgXvB6HgEAQ2A8wMAXvh6HICPAAIiPAAIAAAAICPAAIAAAAMgXwB6HgEAJNA8wMAXvh6HICPAAIiPAAIAAAAICPAAIAAAAMgXvB6HgEAFZA8wMAXvh6HICOAAIiOAAIAAAAICOAAIAAAAMgXvB6HgEABkA8wMAXvh6HICOAAIiOAAIAAAAICOAAIAAAAMgXvB6HgEgGEA8wMAXuh6HICOAAIiOAAIAAAAICOAAIAAAAMgXuB6HgEgJ5A8wMAXuh6HICPAAIiPAAIAAAAICPAAIAAAAMgXuB6HgEgNtA8wMAXuh6HICOAAIiOAAIAAAAICOAAIAAAAMgXuB6HgEgVWA8wMAXuh6HICOAAIiOAAIAAAAICOAAIAAAAMgXtB6HgEgZKA8wMAXuh6HIAOAAICAAAMgXuB6HgEgc/A8wgEgkoA8wgEgodA8wgEgsRA8wgEgz6A8wgEg3uA8wgEA1DAw0MAVahuLICPAAMgXpB5pgEhq5AwzMAVbhuKICOAAMgXpB5ogEA1DAdKMARmhahICPAAMgT1Bl/gEhq5AdKMARmhahICPAAMgT1Bl/gEA1DAJhMANyhG4ICOAAMgQABSVgEhq5AJgMANyhG3ICOAAMgQABSVgEA1DgKIMAJ9gzPICOAAMgMLA+pgEhq5gKIMAJ9gzPICOAAMgMLA+pgEA1Dgd1IGI/iICPAAMgIXArBgEhq5gd1IGJ/iICOAAMgIXArBgEA1DgxeICUr5ICOAAIkiXXgEhq5gxeICUr5ICPAAIkjXXgEAsZg9XIAOAAIgOAAgEAolg9XgEAkwg9XgEAg8g9XgEAdIg9XgEAZTg9XgEAVeg9XgEARqg9XgEAN1g9XgEAKBg9XgEAGMg9XgEACYg9XgEgBcg9XIAOAAIgOAAgEgFQg9XgEgJFg9XgEgM5g9XgEgQug9XgEgUig9XgEgYXg9XgEgcLg9XgEgf/g9XgEgj0g9Xg");
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
	color: "#000033",
	opacity: 1.00,
	manifest: [
		{src:"images/memokylie2_atlas_.png", id:"memokylie2_atlas_"}
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


// Virtual camera API : 

AdobeAn.VirtualCamera = new function() {
	var _camera = new Object();
	function VirtualCamera(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined )
	{
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VirtualCamera.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VirtualCamera.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VirtualCamera.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VirtualCamera.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VirtualCamera.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VirtualCamera.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VirtualCamera.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VirtualCamera.prototype.resetZoom = function() {
	this.setZoom(100);
};

VirtualCamera.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VirtualCamera.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VirtualCamera.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VirtualCamera.prototype.resetRotation = function() {
this.setRotation(0);
};

VirtualCamera.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VirtualCamera.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VirtualCamera.prototype.getZDepth = function() {
	return this.camera.depth;
}
VirtualCamera.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VirtualCamera.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VirtualCamera.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
if(this.camera.pinToObject != undefined) {
this.camera.pinToObject.pinOffsetX = offsetX;
this.camera.pinToObject.pinOffsetY = offsetY;
this.camera.pinToObject.pinOffsetZ = offsetZ;
}
};

VirtualCamera.prototype.unpinCamera = function() {
this.camera.pinToObject = undefined;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VirtualCamera(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
VirtualCamera.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;