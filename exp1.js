(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"exp1_atlas_", frames: [[0,0,201,307],[0,309,118,147]]}
];


// symbols:



(lib.malo20002 = function() {
	this.spriteSheet = ss["exp1_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.zapachano = function() {
	this.spriteSheet = ss["exp1_atlas_"];
	this.gotoAndStop(1);
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


(lib.equis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990066").s().p("AATAoQgHgDgJgKIgGgHIAAAAIgKAMQgFAFgHABQgHAAgFgDQgGgEgCgIQgBgIACgIQACgGAGgEIAAgBQgIgHgBgIQgBgHAEgGQAEgGAGgBQAMgEATAPIABACIANgGQAIgDAFAAQAIABAFAHQAEAHgBAIQgBAIgGAFQAIAHACAGQACAFgBAGQgCAGgEAEQgGAGgIAAIgHgBg");
	this.shape.setTransform(-0.2,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.equis, new cjs.Rectangle(-4.8,-4.5,9.3,8.2), null);


(lib.box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AjajeIG1AAIAAG9Im1AAg");
	this.shape.setTransform(21.9,22.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990066").s().p("AjaDfIAAm9IG1AAIAAG9g");
	this.shape_1.setTransform(21.9,22.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.box, new cjs.Rectangle(-1,-1,45.7,46.6), null);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgVGpQgZgFAAgtQgKk4AYlAQACgfAJgQQAHgLAMgFQALgGALADIAAgJIgKgKIgRgHQgTgIgLAFQgKAbgnAbQgvAigMAOQgKAMgJAUIgPAhQgdBBg5AtQgcAYgWgJQgRgHAAgXQAAgXANgQQAGgHAYgVQATgRAHgOQAEgHAEgPIAHgWQAJgSATgTIAiggQAYgVAugvQApgnAmgMQAhgKAZAJQAPAFAKALIAGAKQAOgFAMAFQANAHAFAUIACAIQAWAWANAcQALAWALApQANAvAHARQASAqA5BGQA5BHASAoQAKAXgDAOQgBAKgGAIQgHAJgKAAQgQABgSgWQgMgPgggzQgagpgWgWIgfgbQgTgRgKgNQgVgcgRhTQgHgggJgYQgJAJgMAFQgpE4AJE1QABAYgJATQgHASgPAAIgGgBg");
	this.shape.setTransform(70.6,40.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AI1orIAJAAIAARzIxyAAIAAgcIgJAAIAAxzIRyAAgAITorIAiAAAo0IsIAAgQ");
	this.shape_1.setTransform(80,35.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990066").s().p("Ao0JIIAAgcIAAgQIAAAQIgJAAIAAxzIRyAAIAAAcIgiAAIAiAAIAJAAIAARzg");
	this.shape_2.setTransform(80,35.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(21.6,-23.7,116.9,118.8), null);


(lib.settler = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{hit:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 2
	this.dot1 = new lib.equis();
	this.dot1.parent = this;
	this.dot1.setTransform(64.8,95.5,1,1,0,0,0,4.6,4);
	this.dot1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.dot1).wait(1).to({alpha:1},0).wait(1));

	// Layer 1
	this.instance = new lib.zapachano();
	this.instance.parent = this;
	this.instance.setTransform(113.9,0,0.965,1,0,0,180);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgXBUIAAh2IgnAAIAAgxIB9AAIAAAxIgmAAIAAB2g");
	this.shape.setTransform(73.2,113);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgYBUIAAinIAxAAIAACng");
	this.shape_1.setTransform(62.6,113);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AALBUIAAinIAyAAIAACngAg8BUIAAinIAyAAIAAA8IANAAIAAArIgNAAIAABAg");
	this.shape_2.setTransform(50.7,113);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113.9,147);


(lib.malo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.box = new lib.box();
	this.box.parent = this;
	this.box.setTransform(34.4,61,1,1,0,0,0,21.9,22.3);
	this.box.alpha = 0.012;

	this.instance = new lib.malo20002();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.32,0.32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.box}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.malo1, new cjs.Rectangle(0,0,64.3,98.3), null);


// stage content:
(lib.exp1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		raiz = this;
		uno = "nombre"
		console.log(uno)
		uno = this.malo1
		console.log(uno)
		
		this.dwarrow.addEventListener("click", moverabajo.bind(this));
		
		
		function moverabajo()
		{
			//alert(huerta1)
			direccion =  "dw"
			//this.malo1.y += 5
		    uno.y += 5
		console.log(direccion)
		}
		
		this.dwarrow2.addEventListener("click", moverabajo2.bind(this));
		
		
		function moverabajo2()
		{
			uno = this.mono1
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.dwarrow2 = new lib.arrow();
	this.dwarrow2.parent = this;
	this.dwarrow2.setTransform(531.8,75.1,0.578,0.578,180);
	this.dwarrow2.alpha = 0.449;

	this.mono1 = new lib.settler();
	this.mono1.parent = this;
	this.mono1.setTransform(306.6,231.5,0.77,0.77,0,0,0,57,73.5);

	this.dwarrow = new lib.arrow();
	this.dwarrow.parent = this;
	this.dwarrow.setTransform(521.8,356.1,0.578,0.578,180);
	this.dwarrow.alpha = 0.449;

	this.malo1 = new lib.malo1();
	this.malo1.parent = this;
	this.malo1.setTransform(166,96.1,1,1,0,0,0,32.1,49.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.malo1},{t:this.dwarrow},{t:this.mono1},{t:this.dwarrow2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(408.9,220.5,385.2,349.1);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/exp1_atlas_.png?1489625700650", id:"exp1_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;