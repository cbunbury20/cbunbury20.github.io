(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"memomexstarwars3_atlas_", frames: [[0,227,177,224],[281,881,30,40],[227,0,184,230],[358,458,177,224],[0,0,225,225],[0,679,177,224],[537,678,177,224],[375,684,160,200],[179,458,177,224],[179,232,177,224],[413,0,177,224],[537,226,177,224],[179,684,194,195],[179,881,100,100],[358,232,177,224],[0,453,177,224],[537,452,177,224],[592,0,177,224]]}
];


// symbols:



(lib.Ackbar = function() {
	this.spriteSheet = ss["memomexstarwars3_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.calaverita = function() {
	this.spriteSheet = ss["memomexstarwars3_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cameracard = function() {
	this.spriteSheet = ss["memomexstarwars3_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Dooku = function() {
	this.spriteSheet = ss["memomexstarwars3_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.fondo = function() {
	this.spriteSheet = ss["memomexstarwars3_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Gamorean = function() {
	this.spriteSheet = ss["memomexstarwars3_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Greedo = function() {
	this.spriteSheet = ss["memomexstarwars3_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hojita = function() {
	this.spriteSheet = ss["memomexstarwars3_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Hux = function() {
	this.spriteSheet = ss["memomexstarwars3_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Jango = function() {
	this.spriteSheet = ss["memomexstarwars3_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.JarJar = function() {
	this.spriteSheet = ss["memomexstarwars3_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.K2SO = function() {
	this.spriteSheet = ss["memomexstarwars3_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.logomzt = function() {
	this.spriteSheet = ss["memomexstarwars3_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.LOGONEW = function() {
	this.spriteSheet = ss["memomexstarwars3_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.MazKanata = function() {
	this.spriteSheet = ss["memomexstarwars3_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Phasma = function() {
	this.spriteSheet = ss["memomexstarwars3_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.RoyalGuard = function() {
	this.spriteSheet = ss["memomexstarwars3_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Tarkin = function() {
	this.spriteSheet = ss["memomexstarwars3_atlas_"];
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


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhKBvQgggfAAgsQAAgrAfgfQAfggArAAIATACIAABTQgJgHgJAAQgLAAgJAIQgJAJABAMQgBAMAJAJQAJAIALAAQAeAAAAgpIAAimIBNAAIAACpQAAAvgZAeQgOARgWAKQgVAKgYAAQgsAAgfgfg");
	this.shape.setTransform(292.3,196.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAoAAQAIAAAPACIAABSQgIgFgGAAQgWAAAAAfIAABhg");
	this.shape_1.setTransform(274.9,200.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhLBMQgfgfAAgtQAAgsAfgeQAfgfAsgBQAxABAdAdQAdAcAAAyIAABkIhNAAIAAhfQAAgPgIgKQgIgJgNAAQgLAAgJAIQgJAKAAAKQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJABgIAAQgtAAgfgeg");
	this.shape_2.setTransform(254.1,200.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhGBIQgUgYAAgsIAAhrIBNAAIAAByQAAASANAAQAPAAAAgSIAAhyIBMAAIAABxQAAAogbAbQgaAbgmAAQgrAAgbggg");
	this.shape_3.setTransform(231,201);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhPBnQgogrAAg9QAAg+AogqQApgpA7AAQAVAAAZAJIAABTQgTgKgRAAQgdAAgRATQgTASAAAcQAAAeARARQARASAdAAQASAAAAgLQAAgIgMAAIgUAAIAAg/IBQAAQAZAfAAAjQAAApgeAcQgeAcgsAAQg4AAgngsg");
	this.shape_4.setTransform(207.1,196.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_5.setTransform(177.5,196.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhLBMQgfgfAAgtQAAgsAfgeQAfgfAsgBQAxABAdAdQAdAcAAAyIAABkIhNAAIAAhfQAAgPgIgKQgIgJgNAAQgLAAgJAIQgJAKAAAKQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJABgIAAQgtAAgfgeg");
	this.shape_6.setTransform(158.5,200.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag9CPIAAhCQAPAGAMAAQAlAAALgqQgUAMgTAAQgdAAgSgVQgTgVAAggIAAiBIBOAAIAABuQgBASAOABQAPgBAAgUIAAhsIBNAAIAAC2QAAAygdAgQgjAlgvAAQgVAAgVgIg");
	this.shape_7.setTransform(135.4,205.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhLBLQgfgfgBgsQABgsAfgfQAfgeAtAAQAsAAAgAfQAeAfAAArQAAAsgfAfQgfAfgtAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAJgJgBgNQABgMgJgJQgJgJgMAAQgLAAgJAJg");
	this.shape_8.setTransform(112.6,200.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAZCMIgohaIAAhHIAGAAQAaAAAAgXQAAgUgdAAIgPAAIAADMIhTAAIAAkXIBrAAQAvAAAbAYQAeAbAAAqQAAAqglAcIAwB0g");
	this.shape_9.setTransform(89.7,196.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAnAAQAJAAAPACIAABSQgIgFgHAAQgUAAgBAfIAABhg");
	this.shape_10.setTransform(358,135.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhLBMQgfgfAAgtQAAgsAfgeQAfgfAsgBQAxABAdAdQAdAcAAAyIAABkIhNAAIAAhfQAAgPgIgKQgIgJgNAAQgLAAgJAIQgJAKAAAKQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJABgIAAQgtAAgfgeg");
	this.shape_11.setTransform(337.2,135.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgtCEQgWgKgOgRQgZgeAAgvIAAipIBNAAIAACmQAAApAdAAQAMAAAIgIQAJgJAAgMQAAgMgIgJQgIgIgMAAQgIAAgLAHIAAhTIAUgCQArAAAfAgQAfAfAAArQAAAsggAfQgfAfgtAAQgXAAgVgKg");
	this.shape_12.setTransform(313.6,132.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAWCMIgwiGIAihGIBQAAIglBKIA3CCgAhpCMIAAkXIBMAAIAAEXg");
	this.shape_13.setTransform(291.4,131.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhKBLQgfgfAAgtQAAgrAfgfQAfgfAsAAQAlAAAeAYQAdAZAHAlIhOADQgJgNgPAAQgNAAgIAJQgJAIAAANQABAMAIAKQAKAIAMABQATgBAIgWIBMgDQgDAtgdAcQgfAdgqgBQgsAAgfgfg");
	this.shape_14.setTransform(266.9,135.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AATCPIAAiuQAAgQgEgHQgEgGgKAAQgTAAAAAdIAAAiIAXAAIAABKIgXAAIAABCIhTAAIAAixQAAgzAcgdQAcgcAyAAQAyAAAXAaQAYAZAAA3IAACzg");
	this.shape_15.setTransform(242.7,131.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_16.setTransform(213.8,131.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhLBMQgfgfAAgtQAAgsAfgeQAfgfAsgBQAxABAdAdQAdAcAAAyIAABkIhNAAIAAhfQAAgPgIgKQgIgJgNAAQgLAAgJAIQgJAKAAAKQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJABgIAAQgtAAgfgeg");
	this.shape_17.setTransform(194.8,135.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAnAAQAKAAAOACIAABSQgIgFgHAAQgUAAAAAfIAABhg");
	this.shape_18.setTransform(177.4,135.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_19.setTransform(163.4,131.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AA/BoIAAhtQAAgNgCgFQgDgFgHAAQgMAAAAAXIAABtIhMAAIAAhtQgBgNgCgFQgDgFgHAAQgNAAAAAXIAABtIhMAAIAAh9QAAgiAXgYQAXgYAhAAQAiAAAaAdQAfgdAdAAQAnAAAXAcQASAVAAAqIAAB0g");
	this.shape_20.setTransform(141.1,135.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhLBvQgfgfAAgsQAAgrAfgfQAfggArAAIAUACIAABTQgKgHgJAAQgMAAgHAIQgJAJAAAMQAAAMAJAJQAIAIAMAAQAdAAAAgpIAAimIBNAAIAACpQAAAvgZAeQgOARgVAKQgXAKgWAAQgtAAgggfg");
	this.shape_21.setTransform(112.4,132.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AATCPIAAiuQAAgQgEgHQgEgGgKAAQgTAAAAAdIAAAiIAXAAIAABKIgXAAIAABCIhTAAIAAixQAAgzAcgdQAcgcAyAAQAyAAAXAaQAYAZAAA3IAACzg");
	this.shape_22.setTransform(88.2,131.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAPBoIAAhyQAAgSgPAAQgNAAAAASIAAByIhNAAIAAhxQAAgoAagbQAagbAmAAQAsAAAaAfQAVAZAAAsIAABrg");
	this.shape_23.setTransform(399.9,70.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_24.setTransform(382.4,66.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAWCMIgwiGIAihGIBQAAIglBKIA3CCgAhpCMIAAkXIBNAAIAAEXg");
	this.shape_25.setTransform(366.6,67.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAoAAQAJAAAOACIAABSQgIgFgGAAQgWAAABAfIAABhg");
	this.shape_26.setTransform(348.1,70.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhLBMQgfgfAAgtQAAgsAfgeQAfgfAsgBQAxABAdAdQAdAcAAAyIAABkIhNAAIAAhfQAAgPgIgKQgIgJgNAAQgLAAgJAIQgJAKAAAKQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJABgIAAQgtAAgfgeg");
	this.shape_27.setTransform(327.3,70.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgpCMIAAjHIg/AAIAAhQIDRAAIAABQIg/AAIAADHg");
	this.shape_28.setTransform(304.8,67.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag2COIAAitQAAgdAKgVQAMgaAagRQAZgRAcAAIAIABIAABQIgDAAQgPAAgIAJQgIAKAAASIAAAHIAiAAIAABPIgiAAIAABPg");
	this.shape_29.setTransform(276.8,66.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("Ag2COIAAitQAAgdAKgVQAMgaAagRQAZgRAcAAIAIABIAABQIgDAAQgPAAgIAJQgIAKAAASIAAAHIAiAAIAABPIgiAAIAABPg");
	this.shape_30.setTransform(262.4,66.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AhLBLQgggfAAgsQAAgsAggfQAggeAtAAQArAAAgAfQAeAfAAArQABAsggAfQggAfgsAAQgrAAgggfgAgUgVQgJAJAAAMQAAANAJAJQAIAJAMAAQAMAAAJgJQAJgJAAgNQAAgMgJgJQgJgJgMAAQgMAAgIAJg");
	this.shape_31.setTransform(242.9,70.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("ABBCPIAAi1QgBgNgCgFQgCgEgGAAQgMAAgBAVIAAC2IhRAAIAAi1QgBgNgCgFQgCgEgGAAQgNAAAAAWIAAC1IhTAAIAAjIQAAgmAWgYQAXgXAkAAQArAAAXAnQAOgVAQgJQAQgJAYAAQAlAAAVAXQAUAYAAAtIAADBg");
	this.shape_32.setTransform(214.1,66.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhLBvQgfgfAAgsQAAgrAfgfQAgggAqAAIATACIAABTQgJgHgJAAQgLAAgJAIQgJAJAAAMQAAAMAJAJQAKAIAKAAQAeAAAAgpIAAimIBNAAIAACpQAAAvgZAeQgOARgVAKQgXAKgWAAQgtAAgggfg");
	this.shape_33.setTransform(174.1,67.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAPBoIAAhyQAAgSgPAAQgNAAAAASIAAByIhNAAIAAhxQAAgoAagbQAbgbAlAAQAsAAAaAfQAVAZAAAsIAABrg");
	this.shape_34.setTransform(150.9,70.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AhLBMQgfgfAAgtQAAgsAfgeQAfgfAsgBQAxABAdAdQAdAcAAAyIAABkIhNAAIAAhfQAAgPgIgKQgIgJgNAAQgLAAgJAIQgJAKAAAKQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJABgIAAQgtAAgfgeg");
	this.shape_35.setTransform(126.6,70.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAoAAQAJAAAOACIAABSQgIgFgGAAQgWAAABAfIAABhg");
	this.shape_36.setTransform(109.3,70.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AhPBnQgogrAAg9QAAg+AogqQApgpA7AAQAVAAAZAJIAABTQgTgKgRAAQgdAAgRATQgTASAAAcQAAAeARARQARASAdAAQASAAAAgLQAAgIgMAAIgUAAIAAg/IBQAAQAZAfAAAjQAAApgeAcQgeAcgsAAQg4AAgngsg");
	this.shape_37.setTransform(88.9,67.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAPBmIAAg9QAAgWgPAAQgNAAAAATIAABAIhNAAIAAg2QAAgTAHgMQAHgMARgJQgRgLgHgNQgHgMAAgTIAAgqIBNAAIAAA0QAAAIAEAFQAEAFAFAAQAPAAAAgSIAAg0IBMAAIAAAtQAAATgFAMQgGAMgOAJQAOAIAGALQAFAMAAASIAAA5g");
	this.shape_38.setTransform(291,6.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AhFBIQgVgYAAgsIAAhrIBNAAIAAByQAAASANAAQAPAAAAgSIAAhyIBMAAIAABxQAAAogaAbQgbAbgmAAQgrAAgaggg");
	this.shape_39.setTransform(268.6,6.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AATCMIAAkXIBTAAIAAEXgAhlCMIAAkXIBUAAIAABkIAWAAIAABJIgWAAIAABqg");
	this.shape_40.setTransform(244.2,2.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_41.setTransform(214.7,2.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AhLBMQgfgfAAgtQAAgsAfgeQAfgfAsgBQAxABAdAdQAdAcAAAyIAABkIhNAAIAAhfQAAgPgIgKQgIgJgNAAQgLAAgJAIQgJAKAAAKQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJABgIAAQgtAAgfgeg");
	this.shape_42.setTransform(195.8,6.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAnAAQAJAAAPACIAABSQgIgFgHAAQgUAAgBAfIAABhg");
	this.shape_43.setTransform(178.4,5.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AhKBMQgfgfgBgsQAAgtAggfQAfgeAsAAQAtAAAfAeQAdAeAAAtIgBANIhzAAQgCgJAAgHQAAgJADgLIAnAAQgFgXgVABQgNAAgKAMQgJAMAAATQAAATAJANQAJALANAAQAMAAAKgLIAsA1QgfAYglAAQgsAAgfgfg");
	this.shape_44.setTransform(159.1,6.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAPBoIAAhyQAAgSgPAAQgOAAAAASIAAByIhMAAIAAhxQAAgoAbgbQAagbAlAAQAsAAAbAfQAUAZAAAsIAABrg");
	this.shape_45.setTransform(136,5.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AhLBMQgegfAAgsQAAgtAfgfQAfgeAtAAQAsAAAeAeQAeAeABAtIgCANIhyAAQgDgJAAgHQAAgJAEgLIAlAAQgEgXgVABQgOAAgIAMQgJAMAAATQgBATAJANQAJALANAAQALAAALgLIArA1QgeAYglAAQgsAAgggfg");
	this.shape_46.setTransform(113.2,6.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AhPBnQgogrAAg9QAAg+AogqQApgpA7AAQAVAAAZAJIAABTQgTgKgRAAQgdAAgRATQgTASAAAcQAAAeARARQARASAdAAQASAAAAgLQAAgIgMAAIgUAAIAAg/IBQAAQAZAfAAAjQAAApgeAcQgeAcgsAAQg4AAgngsg");
	this.shape_47.setTransform(88.9,2.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAOBoIAAhyQAAgSgOAAQgNAAAAASIAAByIhNAAIAAhxQAAgoAagbQAagbAmAAQAsAAAaAfQAVAZAAAsIAABrg");
	this.shape_48.setTransform(254.7,-58.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AhLBMQgfgeAAguQAAgrAfggQAfgfAsAAQAxAAAdAdQAdAdAAAyIAABkIhNAAIAAheQAAgQgIgJQgIgKgNAAQgLAAgJAJQgJAIAAALQAAAOAIAHQAIAJAMgBQAJAAAJgEIAABOQgJADgIAAQgtAAgfgfg");
	this.shape_49.setTransform(230.4,-58.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AhLBMQgegeAAguQAAgsAfgeQAfgfAtgBQAsAAAeAfQAeAeABAsIgCAOIhyAAQgDgJAAgGQAAgLAEgJIAlAAQgEgYgVAAQgOAAgIANQgJAMAAATQgBATAJANQAJALANABQALAAALgMIArA0QgeAYglAAQgsAAgggeg");
	this.shape_50.setTransform(207.2,-58.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAoAAQAIAAAPACIAABSQgIgFgGAAQgWAAAAAfIAABhg");
	this.shape_51.setTransform(189.9,-58.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AhLBLQgggfABgsQgBgsAggfQAfgeAuAAQArAAAfAfQAgAfAAArQAAAsggAfQgfAfgtAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAIgJAAgNQAAgMgIgJQgJgJgMAAQgLAAgJAJg");
	this.shape_52.setTransform(170.3,-58.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AA/BoIAAhtQABgNgDgFQgDgFgHAAQgNAAAAAXIAABtIhLAAIAAhtQgBgNgCgFQgDgFgHAAQgNAAAAAXIAABtIhMAAIAAh9QAAgiAXgYQAXgYAhAAQAiAAAaAdQAfgdAeAAQAlAAAYAcQASAVAAAqIAAB0g");
	this.shape_53.setTransform(142.4,-58.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AhLBMQgfgeAAguQAAgrAfggQAfgfAsAAQAxAAAdAdQAdAdAAAyIAABkIhNAAIAAheQAAgQgIgJQgIgKgNAAQgLAAgJAJQgJAIAAALQAAAOAIAHQAIAJAMgBQAJAAAJgEIAABOQgJADgIAAQgtAAgfgfg");
	this.shape_54.setTransform(113.2,-58.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AhPBnQgogrAAg9QAAg+AogqQApgpA7AAQAVAAAZAJIAABTQgTgKgRAAQgdAAgRATQgTASAAAcQAAAeARARQARASAdAAQASAAAAgLQAAgIgMAAIgUAAIAAg/IBQAAQAZAfAAAjQAAApgeAcQgeAcgsAAQg4AAgngsg");
	this.shape_55.setTransform(88.9,-62.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAVCMIguiGIAhhGIBQAAIgmBKIA4CCgAhpCMIAAkXIBMAAIAAEXg");
	this.shape_56.setTransform(290,-127.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAOBoIAAhyQAAgSgOAAQgOAAAAASIAAByIhMAAIAAhxQAAgoAbgbQAZgbAmAAQAsAAAbAfQAUAZAAAsIAABrg");
	this.shape_57.setTransform(265.8,-123.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_58.setTransform(248.3,-128);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgFCMIAAhIIAMAAQANAAAFgDQAFgEAAgIQAAgNgUAAIgPAAIAAhKQAWAAgBgPQABgPgVAAIgPAAIAADMIhTAAIAAkXIBlAAQBaAAAABHQAAAjgfAYQAtASAAAyQAAAngbAWQgMALgPAEQgPAFgZAAg");
	this.shape_59.setTransform(231.4,-127.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAoAAQAIAAAPACIAABSQgIgFgGAAQgWAAAAAfIAABhg");
	this.shape_60.setTransform(202.2,-123.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AhLBMQgfgeAAguQAAgrAfggQAfgfAsAAQAxAAAdAdQAdAdAAAyIAABkIhNAAIAAheQAAgQgIgJQgIgKgNAAQgLAAgJAJQgJAIAAALQAAAOAIAHQAIAJAMgBQAJAAAJgEIAABOQgJADgIAAQgtAAgfgfg");
	this.shape_61.setTransform(181.4,-123.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("Ag2CLIAAhRQAGADAFAAQARAAAAgbIAAiwIBSAAIAAC7QAAArgZAcQgYAbgkAAQgLAAgOgEg");
	this.shape_62.setTransform(162.2,-126.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AguAbIAAg1IBdAAIAAA1g");
	this.shape_63.setTransform(141.8,-125.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAoAAQAIAAAPACIAABSQgIgFgGAAQgWAAAAAfIAABhg");
	this.shape_64.setTransform(121,-123.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AhLBMQgfgeAAguQAAgrAfggQAfgfAsAAQAxAAAdAdQAdAdAAAyIAABkIhNAAIAAheQAAgQgIgJQgIgKgNAAQgLAAgJAJQgJAIAAALQAAAOAIAHQAIAJAMgBQAJAAAJgEIAABOQgJADgIAAQgtAAgfgfg");
	this.shape_65.setTransform(100.2,-123.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("Ag3CLIAAhRQAHADAFAAQAQAAAAgbIAAiwIBTAAIAAC7QAAArgYAcQgZAbgkAAQgLAAgPgEg");
	this.shape_66.setTransform(81,-126.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#990000").s().p("AhfB8QAAgqApAAQAqAAAAAqQAAApgqAAQgpAAAAgpgAhKAvIAAhLIAiAAQAHAhAXABQAdAAAAg5QAAhYglAAQgeAAAAArQAAAMACAVIgkgLQgEgTAAgKQAAg9BRAAQBlAAAABiQAAAogZAcQgZAdgkAAQgXAAgZgSIAAAig");
	this.shape_67.setTransform(-74.7,-243.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#990000").s().p("AhrAGQAAg4AgglQAgglAwAAQBmAAAACEIh8AAQAABdAuAAQAtAAAAg0IgBgRIAjAKQgGBThbAAQh2AAAAh3gAgQgnIgBAVIAzAAQAAhSgaAAQgWAAgCA9g");
	this.shape_68.setTransform(-98.8,-239.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#990000").s().p("Ag/CnIAegVIAAAIQAAAcANAAQAPAAAAgUQAAgMgRgdIAAjsQAfAAA2gGIAADvIABAiIgOAoQgQAQgiAAQgxAAgOgpgAgWiwQAAgfAnAAQAoAAAAAfQAAAfgoAAQgnAAAAgfg");
	this.shape_69.setTransform(-119.5,-239.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#990000").s().p("Ah+A2QAAg1BFgTQA/gVAAgbQAAglgkAAQgqAAAAAjQAAALAHATIgrgIIgBgVQAAg4BmgBQBhABAAA0IAACPQAAAWAPABQAFgBAIgFIAIAWQgfANgeAAQgtAAgKgcQgUAdgpAAQhKgBgBhGgAgNgHQgaAOAAAlQgBAvATAAQAaAAAAguIAAhDQgHAJgLAGg");
	this.shape_70.setTransform(-136.3,-239.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#990000").s().p("AAaB6IAAiuQAAgagPAAQgOAAgLAWQgMAUAAAdIAACBIhVAAIAAjtQAsAAApgGIAAAtQAggtAuABQA8AAAAA8IAAC2g");
	this.shape_71.setTransform(-163.6,-239.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#990000").s().p("Ah1AAQAAh7B1AAQB2AAAAB7QAAB8h2AAQh1AAAAh8gAgcAAQAABnAcAAQAdAAAAhnQAAhmgdAAQgcAAAABmg");
	this.shape_72.setTransform(-190.3,-239.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#990000").s().p("AhoAtIAsgJIAAAOQAAAVARAPQARAQAXAAQAfgBAAgaQAAgRgygWQhLggAAgzQAAghAdgWQAdgVAsAAQBRgBAIBDIgpAIQgBg1gxgBQgeAAABAaQAAASAzAVQBQAhAAAyQAABPhmAAQhrAAAAhPg");
	this.shape_73.setTransform(-214.9,-239.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#990000").s().p("AhYB6IAAjtIAQABQAeAAAngHIAAAnQAUgnAfAAQApAAAAAuQAAAMgEAPIgEAUIg7AAIAFgVQAEgKAAgHQAAgPgLAAQgIAAgIAUQgHATAAAWIAACOg");
	this.shape_74.setTransform(-235.7,-239.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#990000").s().p("AhrAGQAAg4AgglQAfglAwAAQBoAAAACEIh9AAQAABdAvAAQAsAAAAg0IAAgRIAiAKQgFBThcAAQh2AAAAh3gAgQgnIgBAVIAyAAQAAhSgYAAQgXAAgCA9g");
	this.shape_75.setTransform(-259.1,-239.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#990000").s().p("AhwCiIAAk9QAkAAAygGIAAAkQAYgkAiAAQAlAAAWAiQAWAhAAA5QAAB9hUAAQghAAgWgaIAABkgAgbgmQAABbAbAAQAYAAAAhbQAAhYgXgBQgcABAABYg");
	this.shape_76.setTransform(-283.7,-235.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#990000").s().p("AhrAGQAAg4AgglQAfglAwAAQBoAAAACEIh9AAQAABdAvAAQAsAAAAg0IAAgRIAiAKQgFBThcAAQh2AAAAh3gAgQgnIgBAVIAyAAQAAhSgYAAQgXAAgCA9g");
	this.shape_77.setTransform(-323.9,-239.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#990000").s().p("AgxBnIAAicIgdAAIAAgbIAdAAIAAgqQAsgMAogXIAABNIAmAAIAAAbIgmAAIAACnQAAAPAKAAQAIAAABgKIAZACQgKAlg2AAQhAAAAAg3g");
	this.shape_78.setTransform(-343.6,-243);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#990000").s().p("AhoAtIAtgJIgBAOQAAAVARAPQARAQAXAAQAfgBAAgaQAAgRgygWQhLggAAgzQAAghAdgWQAdgVAsAAQBRgBAIBDIgqAIQAAg1gxgBQgdAAAAAaQAAASAzAVQBQAhAAAyQAABPhmAAQhrAAAAhPg");
	this.shape_79.setTransform(-363,-239.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#990000").s().p("AhrAGQAAg4AgglQAfglAwAAQBoAAAACEIh9AAQAABdAuAAQAtAAAAg0IgBgRIAjAKQgGBThbAAQh2AAAAh3gAgQgnIgBAVIAzAAQAAhSgZAAQgXAAgCA9g");
	this.shape_80.setTransform(-386.6,-239.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#990000").s().p("AhoAtIAsgJIgBAOQAAAVASAPQARAQAYAAQAdgBAAgaQAAgRgwgWQhMggAAgzQAAghAdgWQAdgVAtAAQBQgBAIBDIgqAIQABg1gygBQgdAAgBAaQABASAzAVQBQAhAAAyQAABPhmAAQhrAAAAhPg");
	this.shape_81.setTransform(-424.6,-239.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#990000").s().p("AhrAGQAAg4AgglQAfglAwAAQBoAAAACEIh9AAQAABdAuAAQAtAAAAg0IgBgRIAjAKQgGBThbAAQh2AAAAh3gAgQgnIgBAVIAzAAQAAhSgZAAQgXAAgCA9g");
	this.shape_82.setTransform(-448.2,-239.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#990000").s().p("AAaB6IAAiuQAAgagPAAQgOAAgLAWQgLAUAAAdIAACBIhWAAIAAjtQAsAAAqgGIAAAtQAfgtAuABQA8AAAAA8IAAC2g");
	this.shape_83.setTransform(-488.4,-239.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#990000").s().p("AhrAGQAAg4AgglQAgglAvAAQBoAAAACEIh9AAQAABdAuAAQAtAAAAg0IAAgRIAiAKQgFBThcAAQh2AAAAh3gAgQgnIgBAVIAyAAQABhSgZAAQgWAAgDA9g");
	this.shape_84.setTransform(-514.1,-239.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#990000").s().p("AgqClIAAjsQAoAAAtgHIAADzgAgmiFQAAgfAnAAQAoAAAAAfQAAAfgoAAQgnAAAAgfg");
	this.shape_85.setTransform(-533,-243.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#990000").s().p("AhwA+IAAizQArgCArgEIAAC4QAAAYAPgBQAmAAAAhTIAAh2QArgCAqgEIAADyIhVAAIAAgmQgdArgvAAQg/AAAAg+g");
	this.shape_86.setTransform(-553.4,-239.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#990000").s().p("AASCFIgRABQiOAAgBimQAAilCPAAQCNAAABCpQgBBuhIAmQALAdAQAAQAUAAgBgZIgBgGIAZAJIABAMQAAA7g4AAQg2AAgNhBgAggBVQAKAYAWAAQAGgBAJgFQgGgjgRAAQgNAAgLARgAAjA+QAKgogBg6QABhPgKgcQgJgdgaAAQgZABgJAdQgKAdAABNQAAA+AHAfQAQgXAUgBQAVAAAPAdg");
	this.shape_87.setTransform(-582.7,-240.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#990000").s().p("AhfBDQAAgpAZgbQAZgdAkAAQAXgBAZATIAAgjIAkAAIAABMIgiAAQgHghgXAAQgdAAAAA4QAABXAmABQAdAAAAgrQAAgMgCgVIAkAKQAEAVAAAJQAAA9hRABQhlgBAAhigAANh7QAAgpAqAAQApAAAAApQAAApgpAAQgqAAAAgpg");
	this.shape_88.setTransform(-610.4,-235.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AhnBoQgrgrAAg9QAAg9ArgqQAsgrA9AAQA8AAAqArQArAsAAA7QAAA9grArQgrArg9AAQg8AAgrgrgAgrgtQgSATAAAaQAAAaASATQATATAYAAQAaAAASgTQASgSAAgbQAAgagSgTQgSgTgaAAQgZAAgSATg");
	this.shape_89.setTransform(-488.1,196.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AhICJIAAhQQAMAHAJAAQALAAAIgGQAHgGAAgKQAAgGgMgVQgTgfAAghQAAgoAdgcQAbgdAnAAQARAAARAGIAABQQgJgEgFAAQgKAAgGAHQgHAHAAAKQAAAJAHANIAHALQARAdAAAbQAAApgdAcQgdAdgpAAQgUAAgUgKg");
	this.shape_90.setTransform(-512.6,196.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AhRCPIBZinIADgGQAEgHAAgGQAAgRgTAAQgHAAgGAGQgGAFAAAIQAAAJAIAHIgkA/QgXgOgMgWQgMgUAAgaQAAgpAdgdQAcgcApAAQAnAAAdAcQAcAdAAAoQAAAYgLAUIghA/IAvAAIAABRg");
	this.shape_91.setTransform(-533.2,196.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AguAbIAAg1IBdAAIAAA1g");
	this.shape_92.setTransform(-549.8,198.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AAbCMIg+iaIBHh9IBVAAIhKB/IBKCYgAh5CMIAAkXIBUAAIAAEXg");
	this.shape_93.setTransform(-566.6,196.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AhLBMQgfgeAAguQAAgrAfggQAfgeAsgBQAxAAAdAdQAdAdAAAyIAABkIhNAAIAAheQAAgQgIgJQgIgKgNAAQgLAAgJAJQgJAIAAALQAAAOAIAHQAIAJAMgBQAJAAAJgEIAABOQgJADgIAAQgtAAgfgfg");
	this.shape_94.setTransform(-367.7,135.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAvCNQgaAAgWgMQgXgMgOgVQgRgaAAgsIAAimIBLAAIAABOIAjAAIAABQIgjAAQAAAYAIAJQAIAKAUAAIAABQIgJAAg");
	this.shape_95.setTransform(-386.5,132.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AhLBMQgfgeAAguQAAgrAfggQAfgeAsgBQAxAAAdAdQAdAdAAAyIAABkIhNAAIAAheQAAgQgIgJQgIgKgNAAQgLAAgJAJQgJAIAAALQAAAOAIAHQAIAJAMgBQAJAAAJgEIAABOQgJADgIAAQgtAAgfgfg");
	this.shape_96.setTransform(-406.5,135.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AAPBoIAAhyQAAgSgPAAQgNAAAAASIAAByIhNAAIAAhxQAAgoAagbQAbgbAlAAQAsAAAaAfQAVAZAAAsIAABrg");
	this.shape_97.setTransform(-429.6,135.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AhLBMQgfgeAAguQAAgrAfggQAfgeAsgBQAxAAAdAdQAdAdAAAyIAABkIhNAAIAAheQAAgQgIgJQgIgKgNAAQgLAAgJAJQgJAIAAALQAAAOAIAHQAIAJAMgBQAJAAAJgEIAABOQgJADgIAAQgtAAgfgfg");
	this.shape_98.setTransform(-453.9,135.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AAbCMIg+iaIBHh9IBWAAIhLB/IBKCYgAh4CMIAAkXIBTAAIAAEXg");
	this.shape_99.setTransform(-477.7,132);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AguAbIAAg1IBdAAIAAA1g");
	this.shape_100.setTransform(-497.4,133.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AhgBmIA+h7IhBAAIAAhQIC+AAIg/B7IBIAAIAABQg");
	this.shape_101.setTransform(-512.5,135.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AhLBMQgfgeAAguQAAgrAfggQAfgeAsgBQAxAAAdAdQAdAdAAAyIAABkIhNAAIAAheQAAgQgIgJQgIgKgNAAQgLAAgJAJQgJAIAAALQAAAOAIAHQAIAJAMgBQAJAAAJgEIAABOQgJADgIAAQgtAAgfgfg");
	this.shape_102.setTransform(-535.7,135.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("ABACPIAAi1QAAgNgCgFQgCgEgGAAQgMAAAAAVIAAC2IhSAAIAAi1QAAgNgDgFQgCgEgHAAQgMAAAAAWIAAC1IhTAAIAAjIQAAgmAWgYQAXgXAlAAQAqAAAXAnQAOgVAQgJQAQgJAYAAQAmAAAUAXQAUAYAAAtIAADBg");
	this.shape_103.setTransform(-564.5,131.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AAvCNQgaAAgWgMQgXgMgOgVQgRgaAAgsIAAimIBLAAIAABOIAjAAIAABQIgjAAQAAAYAIAJQAIAKAUAAIAABQIgJAAg");
	this.shape_104.setTransform(-398.8,67.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AAvCNQgaAAgWgMQgXgMgOgVQgRgaAAgsIAAimIBLAAIAABOIAjAAIAABQIgjAAQAAAYAIAJQAIAKAUAAIAABQIgJAAg");
	this.shape_105.setTransform(-412.8,67.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AhKBMQgfgfgBgsQAAgtAggfQAfgeAsAAQAtAAAfAeQAdAeAAAtIgBAMIhzAAQgCgIAAgHQAAgJADgLIAnAAQgFgXgVABQgNAAgKAMQgJAMAAATQAAATAJAMQAJAMANAAQAMAAAKgLIAsA1QgfAYglAAQgsAAgfgfg");
	this.shape_106.setTransform(-431.3,70.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AhfCPIAAisQAAgxAfggQAeggAsAAQA0AAAhArIhEAyQgFgQgPAAQgSAAgBAbIAAAiIAbAAIAABKIgbAAIAABJg");
	this.shape_107.setTransform(-451.5,66.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AhLBLQgfgfgBgsQABgsAfgfQAfgeAuAAQArAAAgAfQAeAfAAArQAAAsgfAfQgfAfgtAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAJgJgBgNQABgMgJgJQgJgJgMAAQgLAAgJAJg");
	this.shape_108.setTransform(-485.5,70.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgtCQIAAhGQAPAJAPAAQAUAAALgOQALgOAAgZIAAhMQAAgggaAAQgKAAgIAJQgIAIAAALQAAAMAIAHQAHAIALAAQAIAAAHgDIAABFQgQAGgPAAQglAAgZgcQgagbAAgpQAAgsAfgeQAfgeAsAAQAYAAAWAKQAWAJAMARQAVAaAAAzIAABDQAAA2gfAjQgfAigxAAQgPAAgXgIg");
	this.shape_109.setTransform(-509.9,75.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAOBoIAAhyQAAgSgOAAQgNAAAAASIAAByIhNAAIAAhxQAAgoAagbQAagbAmAAQAsAAAaAfQAVAZAAAsIAABrg");
	this.shape_110.setTransform(-532.8,70.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AhLBMQgfgfAAgtQAAgsAfgeQAfgfAsgBQAxABAdAdQAdAcAAAyIAABkIhNAAIAAhfQAAgPgIgKQgIgJgNAAQgLAAgJAIQgJAKAAAKQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJABgIAAQgtAAgfgeg");
	this.shape_111.setTransform(-557.1,70.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("Ag3CLIAAhRQAHADAFAAQAQAAAAgbIAAiwIBSAAIAAC7QAAArgXAcQgZAbgkAAQgLAAgPgEg");
	this.shape_112.setTransform(-576.3,67.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AhLBMQgfgfAAgtQAAgsAfgeQAfgfAsgBQAxABAdAdQAdAcAAAyIAABkIhNAAIAAhfQAAgPgIgKQgIgJgNAAQgLAAgJAIQgJAKAAAKQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJABgIAAQgtAAgfgeg");
	this.shape_113.setTransform(-286.5,6.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AA/BoIAAhtQABgNgDgFQgDgFgHAAQgNAAAAAXIAABtIhLAAIAAhtQgBgNgCgFQgDgFgHAAQgNAAAAAXIAABtIhMAAIAAh9QAAgiAXgYQAXgYAhAAQAiAAAaAdQAfgdAeAAQAmAAAXAcQASAVAAAqIAAB0g");
	this.shape_114.setTransform(-314.5,5.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AhJBnIAAhRIAEAAQASAAAIgHQAIgIABgSQACgfAEgOQAEgMANgMQAWgXAnAAIAYAAIAABRQgRAAgFAHQgHAFgBARQgGA8gnAYQgWAMgnAAg");
	this.shape_115.setTransform(-338.4,6.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AhLBMQgfgfAAgtQAAgsAfgeQAfgfAsgBQAxABAdAdQAdAcAAAyIAABkIhNAAIAAhfQAAgPgIgKQgIgJgNAAQgLAAgJAIQgJAKAAAKQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJABgIAAQgtAAgfgeg");
	this.shape_116.setTransform(-359,6.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AANCMIAAhsQAAgNgDgFQgCgEgIAAQgMAAAAATIAABvIhNAAIAAkXIBNAAIAABVQASgOAUAAQAdAAASAWQARAVAAAjIAACCg");
	this.shape_117.setTransform(-382,2.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AhnCPIAAitQAAgbAGgRQAFgSANgPQAPgQAWgKQAWgJAXAAQAqAAAdAcQAdAdAAAqQABAqgaAYQgYAYgwAAIgMAAIAAhJQAZAAgBgTQABgSgTAAQgTAAAAAYIAAC2g");
	this.shape_118.setTransform(-404.1,2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAPBoIAAhyQAAgSgPAAQgNAAAAASIAAByIhNAAIAAhxQAAgoAagbQAbgbAlAAQAsAAAaAfQAVAZAAAsIAABrg");
	this.shape_119.setTransform(-438.6,5.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_120.setTransform(-456.1,1.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AhLBMQgfgfAAgtQAAgsAfgeQAfgfAsgBQAxABAdAdQAdAcAAAyIAABkIhNAAIAAhfQAAgPgIgKQgIgJgNAAQgLAAgJAIQgJAKAAAKQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJABgIAAQgtAAgfgeg");
	this.shape_121.setTransform(-475.1,6.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AAvCNQgaAAgWgMQgXgMgOgVQgRgaAAgsIAAimIBLAAIAABOIAjAAIAABQIgjAAQAAAYAIAJQAIAKAUAAIAABQIgJAAg");
	this.shape_122.setTransform(-493.9,2.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AhqCOIAAipQAAgwAZgdQAOgRAWgKQAVgKAXAAQAtAAAfAfQAgAeAAAtQAAAqgfAgQgfAggrAAIgUgCIAAhTQAKAHAIABQAMAAAJgJQAIgJAAgMQAAgMgJgJQgIgIgMgBQgdAAAAAqIAACmg");
	this.shape_123.setTransform(-512.8,9.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AhLBMQgfgfAAgtQAAgsAfgeQAfgfAsgBQAxABAdAdQAdAcAAAyIAABkIhNAAIAAhfQAAgPgIgKQgIgJgNAAQgLAAgJAIQgJAKAAAKQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJABgIAAQgtAAgfgeg");
	this.shape_124.setTransform(-538.2,6.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AhnBpQgrgqAAg+QAAg+ArgqQArgrA+AAQA+AAApAqQAdAdAMAzIhZAGQgPgugqAAQgaAAgRATQgRASAAAcQAAAbARASQARASAaAAQAZAAAQgQQAQgPACgeIBYACQgJBEgmAlQgmAlg+AAQg9AAgqgqg");
	this.shape_125.setTransform(-565.8,2.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AhFBIQgVgYAAgsIAAhrIBMAAIAAByQAAASAOAAQAOAAAAgSIAAhyIBNAAIAABxQAAAogaAbQgbAbgmAAQgrAAgaggg");
	this.shape_126.setTransform(-345,-58.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AAWCMIgwiGIAihGIBQAAIglBKIA3CCgAhpCMIAAkXIBNAAIAAEXg");
	this.shape_127.setTransform(-366.1,-62.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AhLBLQgggfAAgsQAAgsAggfQAggeAtAAQArAAAgAfQAeAfAAArQABAsggAfQggAfgsAAQgrAAgggfgAgUgVQgJAJAAAMQAAANAJAJQAIAJAMAAQAMAAAJgJQAJgJAAgNQAAgMgJgJQgJgJgMAAQgMAAgIAJg");
	this.shape_128.setTransform(-390.7,-58.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AhLBLQgfgfAAgsQAAgsAfgfQAfgeAuAAQArAAAfAfQAgAfAAArQgBAsgfAfQggAfgsAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAIgJAAgNQAAgMgIgJQgJgJgMAAQgLAAgJAJg");
	this.shape_129.setTransform(-414.1,-58.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgkCMIAAhTIANAAQBIAAAAg7QAAg5hGgBIgcAAIAADHIhUAAIAAkXIBsAAQBHAAAoAhQAwAnAABCQAAA/gpAoQgpAng/AAIgZAAg");
	this.shape_130.setTransform(-440.3,-62.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AAvCNQgaAAgWgMQgXgMgOgVQgRgaAAgsIAAimIBLAAIAABOIAjAAIAABQIgjAAQAAAYAIAJQAIAKAUAAIAABQIgJAAg");
	this.shape_131.setTransform(-474,-62.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AAOBoIAAhyQAAgSgOAAQgOAAAAASIAAByIhMAAIAAhxQAAgoAbgbQAZgbAmAAQAsAAAbAfQAUAZAAAsIAABrg");
	this.shape_132.setTransform(-492.4,-58.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AhFBIQgVgYAAgsIAAhrIBMAAIAAByQAAASAOAAQAOAAAAgSIAAhyIBNAAIAABxQAAAogaAbQgbAbgmAAQgrAAgaggg");
	this.shape_133.setTransform(-515.1,-58.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AhLBLQgggfABgsQgBgsAggfQAggeAtAAQArAAAfAfQAfAfAAArQABAsggAfQggAfgsAAQgrAAgggfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAJgJAAgNQAAgMgJgJQgJgJgMAAQgLAAgJAJg");
	this.shape_134.setTransform(-538.2,-58.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AhnBpQgrgqAAg+QAAg+ArgqQArgrA+AAQA+AAApAqQAdAdAMAzIhZAGQgPgugqAAQgaAAgRATQgRASAAAcQAAAbARASQARASAaAAQAZAAAQgQQAQgPACgeIBYACQgJBEgmAlQgmAlg+AAQg9AAgqgqg");
	this.shape_135.setTransform(-565.8,-62.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AhLBLQgfgfgBgsQABgsAfgfQAfgeAuAAQArAAAfAfQAgAfAAArQgBAsgfAfQgfAfgtAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAIgJAAgNQAAgMgIgJQgJgJgMAAQgLAAgJAJg");
	this.shape_136.setTransform(-459.9,-123.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AhLBvQgfgfAAgsQAAgrAfgfQAgggAqAAIAUACIAABTQgKgHgJAAQgLAAgJAIQgIAJgBAMQABAMAIAJQAKAIALAAQAdAAAAgpIAAimIBNAAIAACpQAAAvgZAeQgOARgVAKQgXAKgWAAQgtAAgggfg");
	this.shape_137.setTransform(-484.2,-127);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AhKBMQgfgegBguQAAgsAggeQAfgfAsgBQAtAAAfAfQAdAeAAAsIAAAOIh0AAQgCgJAAgGQAAgLADgJIAmAAQgDgYgWAAQgNAAgKANQgJAMAAATQABATAIANQAJALANABQAMAAAKgMIAsA0QgfAYglAAQgtAAgegeg");
	this.shape_138.setTransform(-507.4,-123.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AhLBMQgegeAAguQgBgsAggeQAfgfAtgBQAsAAAfAfQAdAeAAAsIgBAOIhzAAQgCgJAAgGQAAgLADgJIAnAAQgFgYgVAAQgNAAgKANQgIAMgBATQAAATAJANQAJALANABQALAAALgMIAsA0QgfAYglAAQgtAAgfgeg");
	this.shape_139.setTransform(-530.6,-123.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAnAAQAJAAAPACIAABSQgIgFgHAAQgUAAAAAfIAABhg");
	this.shape_140.setTransform(-548,-123.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AhPBnQgogrAAg9QAAg+AogqQApgpA7AAQAVAAAZAIIAABUQgTgKgRAAQgdAAgRATQgTASAAAcQAAAeARARQARASAdAAQASAAAAgLQAAgIgMAAIgUAAIAAg/IBQAAQAZAfAAAjQAAApgeAcQgeAcgsAAQg4AAgngsg");
	this.shape_141.setTransform(-568.4,-127.2);

	this.instance = new lib.fondo();
	this.instance.parent = this;
	this.instance.setTransform(-624.6,-264.6,5.552,2.393);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-624.6,-273.8,1249.2,547.6);


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
	this.shape_82.graphics.f("#FF0000").s().p("AATA7IgagmIgOALIAAAbIgeAAIAAh2IAeAAIAAA/IAhgdIAkAAIgmAeIAqA2g");
	this.shape_82.setTransform(49.4,108.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF0000").s().p("AAVAsIAAgsQAAgNgBgEQgCgEgFgDQgEgCgGAAQgGAAgHADQgGAEgCAFQgCAGAAANIAAAnIgeAAIAAhVIAcAAIAAANQAOgPAVAAQAKAAAIADQAIACAFAEQAEAFABAFQACAFAAALIAAA0g");
	this.shape_83.setTransform(36.2,109.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF0000").s().p("AgOA7IAAhUIAdAAIAABUgAgOglIAAgWIAdAAIAAAWg");
	this.shape_84.setTransform(26.7,108.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF0000").s().p("AhAA7IAAh2IA+AAQASABAIABQAJABAIAEQAGAEAFAGQAFAGAAAIQAAAIgGAHQgGAHgKADQAOADAIAHQAIAIAAAKQgBAIgFAIQgFAHgHAFQgJAFgNAAQgHABgdAAgAggAnIAdAAIATAAQAIgBAEgEQAEgEAAgGQAAgFgDgEQgEgEgFgBQgHgCgUAAIgZAAgAgggLIAUAAIAWgBQAHAAAFgDQAFgEgBgGQAAgFgDgEQgEgEgIAAIgZgBIgSAAg");
	this.shape_85.setTransform(16.2,108.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF0000").s().p("AgcALIAAgVIA5AAIAAAVg");
	this.shape_86.setTransform(-0.8,110);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF0000").s().p("AgjAsIAAhVIAbAAIAAAMQAIgIAEgDQAGgDAHAAQAKAAAJAFIgJATQgIgEgFAAQgHAAgEADQgDACgDAIQgCAGAAAVIAAAbg");
	this.shape_87.setTransform(-14.1,109.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF0000").s().p("AgpAlQgKgGAAgMQAAgHAEgFQAFgGAIgCQAIgEAPgCQAUgDAIgCIAAgDQAAgGgEgDQgEgDgLAAQgIABgEACQgFACgCAGIgbgDQAEgNALgGQALgGAWAAQATAAAJAEQAKADAEAGQAEAGAAAOIAAAaQAAALABAGQABAFAEAGIgdAAIgDgHIgBgCQgHAFgJADQgHADgKAAQgRAAgKgIgAAAAFQgMACgEACQgGADAAAFQAAAFAFADQAFAEAHAAQAHAAAHgEQAFgDACgFQABgCAAgJIAAgFIgRAEg");
	this.shape_88.setTransform(-25.1,110);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF0000").s().p("AgkAzQgMgKAAgTIAdgDQABAKADAFQAFAGAKAAQAKAAAEgEQAEgFAAgOIAAhNIAfAAIAABLQAAAPgDAHQgFALgLAGQgMAGgTABQgWgBgNgJg");
	this.shape_89.setTransform(-37.8,108.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF0000").s().p("AgcALIAAgVIA5AAIAAAVg");
	this.shape_90.setTransform(-52,110);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF0000").s().p("AgjAsIAAhVIAbAAIAAAMQAIgIAEgDQAGgDAHAAQAKAAAJAFIgJATQgIgEgFAAQgHAAgEADQgDACgDAIQgCAGAAAVIAAAbg");
	this.shape_91.setTransform(-65.3,109.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FF0000").s().p("AgpAlQgKgGAAgMQAAgHAEgFQAFgGAIgCQAIgEAPgCQAUgDAIgCIAAgDQAAgGgEgDQgEgDgLAAQgIABgEACQgFACgCAGIgbgDQAEgNALgGQALgGAWAAQATAAAJAEQAKADAEAGQAEAGAAAOIAAAaQAAALABAGQABAFAEAGIgdAAIgDgHIgBgCQgHAFgJADQgHADgKAAQgRAAgKgIgAAAAFQgMACgEACQgGADAAAFQAAAFAFADQAFAEAHAAQAHAAAHgEQAFgDACgFQABgCAAgJIAAgFIgRAEg");
	this.shape_92.setTransform(-76.3,110);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF0000").s().p("AgkAzQgMgKAAgTIAdgDQABAKADAFQAFAGAKAAQAKAAAEgEQAEgFAAgOIAAhNIAfAAIAABLQAAAPgDAHQgFALgLAGQgMAGgTABQgWgBgNgJg");
	this.shape_93.setTransform(-89,108.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FF0000").s().p("AgEBBQgGgDgDgDQgDgEgBgGIgBgTIAAgpIgOAAIAAgUIAOAAIAAgUIAcgPIAAAjIAUAAIAAAUIgUAAIAAAmIABAOQAAABAAAAQABABAAAAQAAAAABABQAAAAAAAAQADACACAAQAFAAAHgDIADAUQgLAEgNAAQgIAAgFgCg");
	this.shape_94.setTransform(36.4,112.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FF0000").s().p("AgEBBQgGgDgDgDQgDgEgCgGIAAgTIAAgpIgOAAIAAgUIAOAAIAAgUIAdgPIAAAjIAUAAIAAAUIgUAAIAAAmIAAAOQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQABACAEAAQADAAAJgDIACAUQgKAEgNAAQgIAAgGgCg");
	this.shape_95.setTransform(29.3,112.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FF0000").s().p("AgoAiQgLgNAAgUQAAgXAOgOQAOgOAXAAQAXAAAPAPQAOAOAAAdIhJAAQAAALAHAGQAHAHAJAAQAHAAAEgEQAFgDADgHIAdAEQgGAOgMAIQgMAHgSAAQgcAAgOgRgAgPgYQgGAGAAALIArAAQAAgLgGgGQgHgGgJAAQgIAAgHAGg");
	this.shape_96.setTransform(19.6,114.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF0000").s().p("Ag0BDIAAiFIBoAAIAAAXIhIAAIAAAfIA+AAIAAAWIg+AAIAAA5g");
	this.shape_97.setTransform(7.5,112.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FF0000").s().p("AgcAtQgOgGgHgMQgIgLAAgQQAAgNAIgMQAHgMAOgGQANgHAPAAQAZAAAQAPQARAOgBAVQAAAWgQAOQgQAPgZAAQgOAAgOgGgAgSgVQgIAIAAANQAAAPAIAHQAHAIALAAQALAAAIgIQAIgHAAgPQAAgNgIgIQgIgIgLAAQgLAAgHAIg");
	this.shape_98.setTransform(-11.8,114.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF0000").s().p("AgmA9QgMgJAAgNIAAgCIAiADQABAFADACQAEADAIAAQAMAAAFgDQAEgDACgEQACgDAAgJIAAgOQgOAQgTAAQgWAAgNgRQgKgMAAgTQAAgZANgMQANgNAUgBQAUABAOAQIAAgOIAbAAIAABWQAAARgDAJQgDAJgGAEQgGAFgKACQgKADgPABQgbAAgMgJgAgQgqQgHAHAAAQQAAAPAHAGQAGAHAKAAQAKAAAIgHQAHgHAAgOQAAgPgHgIQgHgGgLgBQgKABgGAGg");
	this.shape_99.setTransform(-25.2,116.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF0000").s().p("AAVAyIAAgyQAAgPgBgEQgCgFgFgCQgEgDgGAAQgGAAgHAEQgGADgCAGQgCAGAAAQIAAAsIgeAAIAAhgIAcAAIAAAOQAOgRAVAAQAKAAAIADQAIADAFAFQAEAFABAGQACAGAAALIAAA8g");
	this.shape_100.setTransform(-38,114.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF0000").s().p("AgpArQgKgIAAgNQAAgIAEgGQAFgHAIgCQAIgEAPgCQAUgEAIgDIAAgCQAAgIgEgDQgEgDgLAAQgIAAgEADQgFACgCAHIgbgEQAEgOALgHQALgHAWAAQATAAAJAEQAKAEAEAHQAEAGAAARIAAAdQAAANABAGQABAGAEAHIgdAAIgDgIIgBgDQgHAHgJADQgHADgKAAQgRAAgKgIgAAAAGQgMACgEACQgGAEAAAGQAAAFAFAEQAFAEAHAAQAHAAAHgFQAFgDACgFQABgEAAgJIAAgFIgRAEg");
	this.shape_101.setTransform(-50.6,114.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FF0000").s().p("AgkA5QgMgLAAgWIAdgDQABAMADAFQAFAHAKAAQAKAAAEgFQAEgFAAgRIAAhVIAfAAIAABTQAAARgDAJQgFAMgLAHQgMAHgTAAQgWAAgNgLg");
	this.shape_102.setTransform(-63.2,112.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF0000").s().p("AgcAuQgOgGgHgMQgIgMAAgRQAAgNAIgMQAHgNANgGQANgHAQABQAZAAAQAOQARAPgBAWQAAAXgQAPQgQAOgZAAQgOABgOgHgAgSgWQgIAIAAAOQAAAPAIAHQAHAJALAAQALAAAJgJQAHgHAAgPQAAgOgHgIQgJgIgLAAQgLAAgHAIg");
	this.shape_103.setTransform(15.5,116.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF0000").s().p("AgoA5QgNgOAAgaQAAgYANgNQANgNAUAAQASAAAOANIAAgxIAdAAIAACJIgbAAIAAgPQgHAJgJAEQgJAFgJgBQgTAAgOgNgAgQgFQgHAGAAAOQAAAQAFAIQAHALALAAQALAAAHgJQAHgHAAgQQAAgRgHgGQgHgIgLAAQgJAAgHAIg");
	this.shape_104.setTransform(2.1,114.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FF0000").s().p("AgoAjQgLgOAAgUQAAgZAOgOQAOgNAXAAQAXAAAPAOQAOAPAAAdIhJAAQAAAMAHAHQAHAGAJAAQAHAAAEgDQAFgDADgIIAdAEQgGAPgMAHQgMAIgSAAQgcAAgOgRgAgPgZQgGAHAAALIArAAQAAgMgGgGQgHgGgJAAQgIAAgHAGg");
	this.shape_105.setTransform(-10.2,116.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FF0000").s().p("AgoAjQgLgOAAgUQAAgZAOgOQAOgNAXAAQAXAAAPAOQAOAPAAAdIhJAAQAAAMAHAHQAHAGAJAAQAHAAAEgDQAFgDADgIIAdAEQgGAPgMAHQgMAIgSAAQgcAAgOgRgAgPgZQgGAHAAALIArAAQAAgMgGgGQgHgGgJAAQgIAAgHAGg");
	this.shape_106.setTransform(-22.2,116.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FF0000").s().p("AgjAzIAAhjIAcAAIAAAOQAGgKAFgDQAFgDAIAAQAKAAAJAFIgJAXQgHgEgHAAQgGAAgEADQgDADgDAIQgDAIABAYIAAAfg");
	this.shape_107.setTransform(-31.4,116);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FF0000").s().p("AgjA/QgSgKgJgRQgJgRAAgTQAAgVAKgRQAKgRAUgJQAOgHAVAAQAdAAAQALQAQALAFATIgfAFQgDgKgJgGQgJgGgOAAQgTAAgMAMQgMAMAAAWQAAAYAMAMQAMANATAAQAKAAAKgEQAJgDAHgFIAAgSIgjAAIAAgWIBDAAIAAA2QgKAJgTAGQgSAHgTAAQgXAAgSgJg");
	this.shape_108.setTransform(-44.8,114.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FF0000").s().p("AA0AyIAAg3QAAgOgCgEQgFgGgIAAQgHAAgFADQgGAEgCAGQgCAGAAANIAAAvIgcAAIAAg1QAAgOgCgEQgBgEgEgCQgDgCgGAAQgGAAgGADQgGADgCAGQgDAHAAANIAAAvIgdAAIAAhgIAbAAIAAANQAPgQAUAAQALAAAHAEQAHAEAGAIQAHgIAIgEQAJgEAJAAQAMAAAJAFQAIAEAFAIQADAHAAAOIAAA9g");
	this.shape_109.setTransform(4.3,115.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FF0000").s().p("AgiArQgNgIgEgOIAegEQACAIAFAEQAGADAJAAQAMAAAFgDQAFgDAAgEQAAgDgCgCIgLgDQgigHgKgGQgNgHAAgOQAAgMALgJQAMgJAYAAQAWAAALAHQALAGAEANIgbAFQgDgGgEgDQgGgDgIAAQgLAAgFADQgDACgBADQAAADADACQAFACAWAFQAYAEAJAHQAJAGAAAMQAAAOgNAJQgNAKgZAAQgVAAgOgIg");
	this.shape_110.setTransform(-11.4,116);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FF0000").s().p("AgpArQgKgIAAgNQAAgIAEgGQAFgHAIgCQAIgEAPgCQAUgEAIgDIAAgCQAAgIgEgDQgEgDgLAAQgIAAgEADQgFACgCAHIgbgEQAEgOALgHQALgHAWAAQATAAAJAEQAKAEAEAHQAEAGAAARIAAAdQAAANABAGQABAGAEAHIgdAAIgDgIIgBgDQgHAHgJADQgHADgKAAQgRAAgKgIgAAAAGQgMACgEACQgGAEAAAGQAAAFAFAEQAFAEAHAAQAHAAAHgFQAFgDACgFQABgEAAgJIAAgFIgRAEg");
	this.shape_111.setTransform(-23.1,116);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FF0000").s().p("AAVBDIAAg0QAAgOgBgEQgCgEgFgDQgDgBgHgBQgHAAgFADQgGAEgDAFQgDAGAAAMIAAAxIgcAAIAAiFIAcAAIAAAxQAPgOATAAQAKgBAIAEQAJADADAFQAFAFABAGQACAHgBAMIAAA5g");
	this.shape_112.setTransform(-35.5,114.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FF0000").s().p("Ag6BDIAAiFIAyAAQAbAAAJACQANADAJAKQAJAKAAAQQAAANgGAIQgEAHgJAFQgIAFgIACQgLABgTAAIgVAAIAAAzgAgbgFIARAAQASAAAFgDQAHgBADgFQAEgEAAgGQAAgIgFgFQgFgEgHgBQgGgCgQAAIgPAAg");
	this.shape_113.setTransform(-49,114.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FF0000").s().p("AAWArIgWgbIgXAbIgiAAIAogrIgngqIAkAAIAUAXIAUgXIAjAAIgnApIAqAsg");
	this.shape_114.setTransform(-0.8,110.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FF0000").s().p("AghAoQgJgDgDgHQgFgHAAgNIAAg1IAdAAIAAAnQAAASADAEQABAEAEACQAFADAGAAQAGAAAHgDQAFgEADgEQACgFAAgSIAAgkIAdAAIAABVIgbAAIAAgNQgGAHgKAEQgJAEgLAAQgLAAgJgEg");
	this.shape_115.setTransform(-13.3,110.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FF0000").s().p("AAfA8IAAg1Ig8AAIAAA1IggAAIAAh3IAgAAIAAAvIA8AAIAAgvIAeAAIAAB3g");
	this.shape_116.setTransform(-27.6,108.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FF0000").s().p("AgfBBQgOgGgKgJQgJgKgFgMQgFgNAAgPQAAgPAFgNQAFgNAKgJQAJgJAOgEQAOgGARAAQAXAAASAJQARAIAJAQQAIAPAAAVQAAAQgEAMQgFAMgKAKQgKAKgOAFQgOAEgSABQgRgBgOgEgAgRgsQgIADgFAGQgGAGgDAJQgEAJAAALQAAALAEAJQADAJAGAHQAGAGAIADQAIACAIAAQAMAAAKgEQAKgGAGgKQAGgMAAgPQAAgOgGgLQgFgLgKgGQgKgFgNAAQgJAAgIADg");
	this.shape_117.setTransform(11.2,111.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FF0000").s().p("AglA+QgKgFgHgKQgGgJAAgIQAAgFAEgEQAEgDAGAAQAFAAADACQAEAEACAEIAGALQAEAFAGACQAGADAKAAQANAAAJgFQAIgGABgJQgBgGgFgEQgEgFgHgCQgIgCgLgCQgQgDgMgFQgLgDgHgJQgGgHAAgMQAAgLAHgJQAGgIAOgFQANgEARgBQAOAAAKADQALADAGAGQAHAFADAGQAEAFgBAGQAAAEgDAEQgFAEgFAAQgGAAgCgCQgDgDgEgFQgEgHgGgFQgFgEgMAAQgMAAgIAFQgHAEAAAGQgBAFADADQADACAEACIAJAEIAOADIAXAGQALADAHAFQAIADAEAIQAEAGAAALQAAAMgHAJQgIALgNAFQgOAGgTAAQgWAAgPgIg");
	this.shape_118.setTransform(-4.3,111.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FF0000").s().p("AgkBEQgIAAgFgFQgEgDAAgFQAAgDADgGQADgGADgDIAZgVIAQgMIAOgJQAFgGADgGQADgGAAgFQAAgFgDgFQgDgFgGgDQgFgCgGAAQgNAAgIAKIgEAIQgCAGgDAEQgDADgGAAQgGAAgDgDQgDgDAAgGQAAgGADgGQADgIAHgFQAGgGAKgDQAKgEANABQAPgBALAFQAIADAFAFQAGAFADAHQADAGAAAHQAAAMgGAJQgHAJgHAFIgWARQgPALgGAGIgFAGIA2AAQAIAAAEADQAFADAAAFQAAAEgEADQgDAEgHAAg");
	this.shape_119.setTransform(-17.7,111.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FF0000").s().p("AgQALQgHAAgEgDQgEgDAAgFQAAgEAEgDQAEgDAHAAIAhAAQAHAAAEADQAEADAAAEQAAAFgEADQgEADgHAAg");
	this.shape_120.setTransform(-27.8,113.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FF0000").s().p("AAoBDQgFgCgCgEIgFgIIgkgyIgZAWIAAAcQgBAIgEAEQgEAEgHABQgEgBgEgCQgEgCgBgCQgCgDAAgEIgBgJIAAhjQAAgIAFgEQAEgFAHAAQAHAAAEAFQAFAEAAAIIAAAvIA8g4IAHgGQADgCAFAAQAHABAFADQADADAAAFQABAHgIAFIgmAfIAsA2IAHAKQACAEABAEQAAAEgFAEQgDAEgIAAQgGAAgEgDg");
	this.shape_121.setTransform(-39,111.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FF0000").s().p("AAfAzQgEgEgFgHQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgMAHgHQAHgHAMgDIAMgDIARgDIAPgFQAAgLgEgEQgEgGgMAAQgJAAgFADQgFADgEAGIgFAIQgBABgFAAQgFAAgDgCQgDgDAAgFQAAgHAFgHQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAQIAAAOQAAAIADAJIACAKQAAAEgEAEQgDADgFAAQgEAAgEgEgAADAFIgOAEQgFABgEADQgDAEAAAGQAAAGAEAEQAFAEAHAAQAHAAAHgDQAHgEADgFQADgGAAgPIAAgDIgRAEg");
	this.shape_122.setTransform(37,110.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FF0000").s().p("AgJBFQgHgEgCgHQgCgIAAgNIAAgzIgEAAQgFAAgDgDQgDgCAAgFQAAgEADgDQADgCAGAAIADAAIAAgRIABgKIACgGQABgDADgCQADgCADAAQAFAAADAEQADADABAEIABAKIAAATIAKAAQAFAAAEACQACADABAEQgBAGgEACQgEACgIAAIgFAAIAAAxIABAKIACAGQACACAEAAIAGgBIAHgBQACAAAEADQACACAAAEQAAAHgHADQgHAEgNAAQgMAAgGgFg");
	this.shape_123.setTransform(27.9,108.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FF0000").s().p("AAfAzQgEgEgFgHQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgMAHgHQAHgHAMgDIAMgDIARgDIAPgFQAAgLgEgEQgEgGgMAAQgJAAgFADQgFADgEAGIgFAIQgBABgFAAQgFAAgDgCQgDgDAAgFQAAgHAFgHQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAQIAAAOQAAAIADAJIACAKQAAAEgEAEQgDADgFAAQgEAAgEgEgAADAFIgOAEQgFABgEADQgDAEAAAGQAAAGAEAEQAFAEAHAAQAHAAAHgDQAHgEADgFQADgGAAgPIAAgDIgRAEg");
	this.shape_124.setTransform(18.5,110.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FF0000").s().p("AAZAzQgEgEAAgIIAAgtQAAgNgEgHQgDgHgLAAQgGAAgGAEQgGAEgDAIQgCAGAAAQIAAAiQAAAIgDAEQgFAEgGAAQgFAAgEgEQgDgEgBgIIAAhOQABgIADgDQADgEAGAAQADAAADABIAFAFQABAEABAFIAAADQAGgJAJgFQAIgEAKAAQALAAAIAEQAJAFADAJQADAFABAFIABAPIAAAyQAAAIgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_125.setTransform(6.6,110.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FF0000").s().p("AAfAzQgEgEgFgHQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgMAHgHQAHgHAMgDIAMgDIARgDIAPgFQAAgLgEgEQgEgGgMAAQgJAAgFADQgFADgEAGIgFAIQgBABgFAAQgFAAgDgCQgDgDAAgFQAAgHAFgHQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAQIAAAOQAAAIADAJIACAKQAAAEgEAEQgDADgFAAQgEAAgEgEgAADAFIgOAEQgFABgEADQgDAEAAAGQAAAGAEAEQAFAEAHAAQAHAAAHgDQAHgEADgFQADgGAAgPIAAgDIgRAEg");
	this.shape_126.setTransform(-5.5,110.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FF0000").s().p("AAlBJIgGgHIgFgIIgig2IgXAXIAAAfQAAAIgEAFQgFAFgGAAQgEgBgDgCQgDgCgCgDIgCgGIAAgLIAAhrQAAgKAEgEQAEgFAGABQAHgBAEAFQAEAEAAAKIAAAyIA4g8IAHgGQADgCAFAAQAGAAAEADQAEAEgBAFQAAAHgGAGIgjAiIAoA6IAHALQACAFAAAEQAAAFgDAEQgFAEgGAAQgGAAgEgDg");
	this.shape_127.setTransform(-18.2,108.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FF0000").s().p("AgPAMQgGAAgEgEQgEgDAAgFQAAgFADgDQAEgDAHAAIAfAAQAGAAAEADQAEADAAAFQAAAFgEADQgEAEgGAAg");
	this.shape_128.setTransform(-29.2,110.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FF0000").s().p("AgiA1QgHAAgEgEQgEgDAAgGQAAgDADgEIALgNIAQgSIANgOIAJgMIAHgIIgnAAQgIAAgEgCQgFgBAAgHQAAgEAEgDQADgDAGAAIA8AAQAIAAAFADQAEACAAAHIAAAEIgCAEIgDAEIgFAFIgwA3IA0AAQAGAAADADQADADAAAEQAAAFgDADQgDADgGAAg");
	this.shape_129.setTransform(-37.8,110.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FF0000").s().p("AAfAzQgEgEgFgHQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgMAHgHQAHgHAMgDIAMgDIARgDIAPgFQAAgLgEgEQgEgGgMAAQgJAAgFADQgFADgEAGIgFAIQgBABgFAAQgFAAgDgCQgDgDAAgFQAAgHAFgHQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAQIAAAOQAAAIADAJIACAKQAAAEgEAEQgDADgFAAQgEAAgEgEgAADAFIgOAEQgFABgEADQgDAEAAAGQAAAGAEAEQAFAEAHAAQAHAAAHgDQAHgEADgFQADgGAAgPIAAgDIgRAEg");
	this.shape_130.setTransform(-49,110.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FF0000").s().p("AAuBGQgDgEgBgIIAAhkIgXBcIgDANQgCAEgEAEQgDADgHAAQgEAAgEgCQgDgCgCgEIgDgHIgDgJIgWhcIAABkQAAAIgEAEQgEAEgGAAQgGAAgEgEQgDgEAAgIIAAhzQAAgKAFgDQAEgDAJAAIAJAAQAIAAAEABQAEACABAEIAEAMIAUBPIAVhPIAEgMQABgEAFgCQADgBAIAAIAJAAQAJAAAEADQAFADAAAKIAABzQAAAIgDAEQgEAEgHAAQgFAAgEgEg");
	this.shape_131.setTransform(-63.2,108.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FF0000").s().p("AgNAMIAAgXIAbAAIAAAXg");
	this.shape_132.setTransform(242.8,213.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FF0000").s().p("AgnAhQgKgNAAgTQAAgWAOgOQAOgNAVAAQAXAAANAOQAOAOAAAbIhGAAQAAALAHAGQAGAGAJAAQAHAAAEgDQAFgDACgHIAcAEQgFAOgMAHQgMAHgRAAQgbAAgOgQgAgOgXQgGAGAAAKIAqAAQgBgLgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_133.setTransform(234.1,210.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FF0000").s().p("AAUAwIAAgwQAAgOgBgEQgCgFgEgCQgEgDgGAAQgGAAgGAEQgGADgCAGQgCAGAAAOIAAArIgdAAIAAhdIAbAAIAAAOQAOgQAUAAQAJAAAIADQAIADAEAFQAEAEABAGQACAGAAALIAAA5g");
	this.shape_134.setTransform(222.1,210);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FF0000").s().p("AgoApQgJgIAAgMQAAgIAEgGQAFgGAHgCQAIgEAPgCQATgDAHgDIAAgDQAAgHgEgDQgEgDgKAAQgHAAgFADQgEACgCAHIgagEQAEgOAKgGQALgHAVAAQASAAAJAEQAJAEAEAGQAEAGAAAQIAAAcQgBAMACAGQACAGADAHIgcAAIgDgIIgBgCQgHAGgIADQgIADgJAAQgQAAgKgIgAAAAGQgMACgEACQgFADAAAGQAAAFAEAEQAFADAHAAQAGAAAIgEQAEgDACgFIABgMIAAgFQgFACgLACg");
	this.shape_135.setTransform(210.1,210.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FF0000").s().p("Ag9BAIAAh/IA7AAQARgBAIACQAJABAHAFQAHAEAEAGQAFAHAAAIQAAAJgGAHQgGAJgJADQANADAIAIQAHAIAAALQAAAJgFAJQgEAHgJAFQgIAGgMAAQgHABgbAAgAgfArIAcAAQAPAAAEgBQAHgBAEgEQAEgEAAgHQAAgGgDgEQgDgEgGgCQgHgCgTABIgYAAgAgfgMIAUAAIAUgBQAIAAAEgEQAFgEAAgGQAAgGgEgEQgEgEgHgBIgZAAIgRAAg");
	this.shape_136.setTransform(197.1,208.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FF0000").s().p("AAUBAIAAgxQAAgPgBgCQgCgFgEgBQgEgDgGAAQgGAAgGADQgFADgDAFQgCAGAAAMIAAAuIgdAAIAAh/IAdAAIAAAvQANgOASAAQAKAAAIADQAIAEAEAFQAEAEABAGQACAGAAALIAAA3g");
	this.shape_137.setTransform(177.5,208.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FF0000").s().p("AgDA+QgHgCgCgEQgDgDgCgGIgBgSIAAgnIgMAAIAAgUIAMAAIAAgTIAcgOIAAAhIAUAAIAAAUIgUAAIAAAkIABAOIACADIAFABIALgCIADATQgLADgMAAQgIAAgEgCg");
	this.shape_138.setTransform(167.8,208.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FF0000").s().p("AgiAwIAAhdIAbAAIAAAOQAGgKAFgDQAFgDAHAAQAKAAAJAFIgJAVQgHgEgGAAQgGAAgFADQgDADgCAIQgCAHAAAXIAAAdg");
	this.shape_139.setTransform(161.1,210);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FF0000").s().p("AgnApQgKgIAAgMQAAgIAEgGQAEgGAJgCQAHgEAPgCQASgDAIgDIAAgDQAAgHgEgDQgEgDgKAAQgHAAgEADQgFACgCAHIgagEQAEgOALgGQAKgHAVAAQASAAAJAEQAJAEAFAGQADAGAAAQIgBAcQABAMABAGQACAGADAHIgcAAIgDgIIgBgCQgHAGgIADQgIADgIAAQgRAAgJgIgAAAAGQgLACgFACQgFADAAAGQAAAFAEAEQAFADAHAAQAHAAAGgEQAGgDABgFQABgDAAgJIAAgFQgFACgLACg");
	this.shape_140.setTransform(150.6,210.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FF0000").s().p("Ag9BAIAAh/IA3AAQARgBAKADQANADAJAJQAJAJAFAMQAFAMAAARQAAAQgFALQgFAPgLAJQgHAGgNAEQgKADgQgBgAgfArIAWAAQAMAAAFgBQAHgCAFgEQAFgDADgJQADgJAAgPQAAgOgDgIQgDgIgFgEQgGgFgIgCQgGgBgSAAIgNAAg");
	this.shape_141.setTransform(137.6,208.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FF0000").s().p("AgnAhQgKgNAAgTQAAgWAOgOQAOgNAVAAQAXAAANAOQAOAOAAAbIhGAAQAAALAHAGQAGAGAJAAQAHAAAEgDQAFgDACgHIAcAEQgFAOgMAHQgMAHgRAAQgbAAgOgQgAgOgXQgGAGAAAKIAqAAQgBgLgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_142.setTransform(118.4,210.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FF0000").s().p("AgmA1QgNgNAAgXQAAgXAMgMQANgNAUAAQARAAANANIAAguIAcAAIAAB/IgaAAIAAgNQgHAIgJAEQgJADgIAAQgSAAgNgMgAgQgFQgGAGAAAOQAAAPAEAGQAHAKALAAQAKAAAHgHQAHgHAAgPQAAgQgHgGQgGgHgLAAQgJAAgHAHg");
	this.shape_143.setTransform(106.3,208.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FF0000").s().p("AggApQgNgIgEgNIAcgEQACAIAGADQAFAEAJAAQALAAAGgDQAEgDAAgEQAAgDgDgCQgCgCgHgBQghgHgJgFQgNgHAAgNQAAgMALgIQALgJAXAAQAVAAALAHQAKAGAEAMIgaAEQgCgFgFgDQgFgDgIAAQgLAAgFADQgDACAAADQAAACADACQAEADAWAEQAWAFAJAGQAJAGAAAMQAAAMgMAKQgNAJgYAAQgVAAgMgIg");
	this.shape_144.setTransform(88.5,210.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FF0000").s().p("AgbArQgNgGgHgLQgHgLAAgPQAAgNAHgLQAHgMANgGQAMgGAPAAQAYAAAQAOQAPAOAAAUQAAAVgPAOQgQAOgYAAQgNAAgOgGgAgRgUQgIAHAAANQAAAOAIAHQAHAIAKAAQALAAAIgIQAHgHAAgOQAAgNgHgHQgIgIgLAAQgKAAgHAIg");
	this.shape_145.setTransform(76.7,210.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FF0000").s().p("Ag9BAIAAh/IA3AAQARgBAKADQANADAJAJQAJAJAFAMQAFAMAAARQAAAQgFALQgFAPgLAJQgHAGgNAEQgKADgQgBgAgfArIAWAAQAMAAAFgBQAHgCAFgEQAFgDADgJQADgJAAgPQAAgOgDgIQgDgIgFgEQgGgFgIgCQgGgBgSAAIgNAAg");
	this.shape_146.setTransform(63.2,208.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FF0000").s().p("AgnAhQgKgNAAgTQAAgWAOgOQAOgNAVAAQAXAAANAOQAOAOAAAbIhGAAQAAALAHAGQAGAGAJAAQAHAAAEgDQAFgDACgHIAcAEQgFAOgMAHQgMAHgRAAQgbAAgOgQgAgOgXQgGAGAAAKIAqAAQgBgLgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_147.setTransform(44,210.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FF0000").s().p("AgmA1QgNgNAAgXQAAgXAMgMQANgNAUAAQARAAANANIAAguIAcAAIAAB/IgaAAIAAgNQgHAIgJAEQgJADgIAAQgSAAgNgMgAgQgFQgGAGAAAOQAAAPAEAGQAHAKALAAQAKAAAHgHQAHgHAAgPQAAgQgHgGQgGgHgLAAQgJAAgHAHg");
	this.shape_148.setTransform(31.9,208.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FF0000").s().p("AgoApQgJgIAAgMQAAgIAEgGQAFgGAHgCQAIgEAPgCQATgDAHgDIAAgDQAAgHgEgDQgEgDgKAAQgHAAgFADQgEACgCAHIgagEQAEgOAKgGQALgHAVAAQASAAAJAEQAJAEAEAGQAEAGAAAQIAAAcQgBAMACAGQACAGADAHIgcAAIgDgIIgBgCQgHAGgIADQgIADgJAAQgQAAgKgIgAAAAGQgMACgEACQgFADAAAGQAAAFAEAEQAFADAHAAQAGAAAIgEQAEgDACgFIABgMIAAgFQgFACgLACg");
	this.shape_149.setTransform(14.4,210.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FF0000").s().p("AgNBAIAAh/IAbAAIAAB/g");
	this.shape_150.setTransform(5.8,208.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FF0000").s().p("AgkA7QgMgJABgMIAAgDIAgADQABAFADACQADADAIAAQAMAAAFgDQAEgCABgEQACgDAAgJIAAgNQgNAPgSAAQgVAAgNgQQgKgNAAgRQAAgYANgMQANgNATAAQATAAANAQIAAgOIAaAAIAABTQAAARgDAIQgDAIgGAFQgGAEgIADQgKADgPAAQgaAAgLgIgAgQgoQgGAHAAAOQAAAPAGAGQAHAHAJAAQAKAAAIgHQAGgGABgOQgBgPgGgHQgIgHgKAAQgJAAgHAHg");
	this.shape_151.setTransform(-3.6,211.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FF0000").s().p("AgnAhQgKgNAAgTQAAgWAOgOQAOgNAVAAQAXAAANAOQAOAOAAAbIhGAAQAAALAHAGQAGAGAJAAQAHAAAEgDQAFgDACgHIAcAEQgFAOgMAHQgMAHgRAAQgbAAgOgQgAgOgXQgGAGAAAKIAqAAQgBgLgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_152.setTransform(-15.5,210.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FF0000").s().p("AAfBAIgWgcIgOgSQgFgEgEgCQgFgBgKgBIgGAAIAAA2IgeAAIAAh/IA/AAQAWgBALAEQALADAGAKQAGAIAAAMQAAAOgJAKQgKAIgTADQAJAFAHAFQAGAGAKAPIASAZgAgjgJIAWAAQAUAAAFgBQAGgCADgEQADgEAAgGQAAgGgEgEQgEgEgHgBIgVgBIgXAAg");
	this.shape_153.setTransform(-27.9,208.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FF0000").s().p("AgnApQgKgIAAgMQAAgIAEgGQAEgGAJgCQAHgEAPgCQASgDAIgDIAAgDQAAgHgEgDQgEgDgKAAQgHAAgEADQgFACgCAHIgagEQAEgOALgGQAKgHAVAAQASAAAJAEQAJAEAFAGQADAGAAAQIgBAcQABAMABAGQACAGADAHIgcAAIgDgIIgBgCQgHAGgIADQgIADgIAAQgRAAgJgIgAAAAGQgLACgFACQgFADAAAGQAAAFAEAEQAFADAHAAQAHAAAGgEQAGgDABgFQABgDAAgJIAAgFQgFACgLACg");
	this.shape_154.setTransform(-47.4,210.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FF0000").s().p("AgNBAIAAh/IAbAAIAAB/g");
	this.shape_155.setTransform(-56,208.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FF0000").s().p("AgbArQgNgGgHgLQgHgLAAgPQAAgNAHgLQAHgMANgGQAMgGAPAAQAYAAAQAOQAPAOAAAUQAAAVgPAOQgQAOgYAAQgNAAgOgGgAgRgUQgIAHAAANQAAAOAIAHQAHAIAKAAQALAAAIgIQAHgHAAgOQAAgNgHgHQgIgIgLAAQgKAAgHAIg");
	this.shape_156.setTransform(-70.9,210.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FF0000").s().p("AgPBTIgKgCIAFgVIAEABIADAAQAEgBADgBIAEgEIABgOIAAhYIAbAAIAABaQAAASgCAHQgDAHgIAEQgHAFgMgBIgJAAgAgBg8IAAgWIAbAAIAAAWg");
	this.shape_157.setTransform(-81.3,210.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FF0000").s().p("AgoApQgJgIAAgMQAAgIAEgGQAEgGAJgCQAHgEAPgCQASgDAIgDIAAgDQAAgHgEgDQgEgDgKAAQgIAAgDADQgFACgDAHIgZgEQAEgOALgGQAKgHAVAAQASAAAJAEQAKAEADAGQAEAGAAAQIgBAcQAAAMACAGQABAGAEAHIgcAAIgCgIIgBgCQgIAGgIADQgHADgJAAQgRAAgKgIgAAAAGQgMACgDACQgGADAAAGQAAAFAFAEQAEADAHAAQAHAAAGgEQAGgDABgFIABgMIAAgFQgFACgLACg");
	this.shape_158.setTransform(-88.6,210.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FF0000").s().p("AgKA+QgIgEgHgIIAAANIgaAAIAAh/IAcAAIAAAuQANgNARAAQAUAAAMANQANAMAAAWQAAAYgNANQgNAMgTAAQgIAAgJgDgAgQgFQgHAGAAAOQAAAPAFAGQAHAKAMAAQAJAAAHgHQAGgHAAgPQAAgQgGgGQgHgHgKAAQgKAAgGAHg");
	this.shape_159.setTransform(-100.4,208.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FF0000").s().p("AgnAhQgKgNAAgTQAAgWAOgOQAOgNAVAAQAXAAANAOQAOAOAAAbIhGAAQAAALAHAGQAGAGAJAAQAHAAAEgDQAFgDACgHIAcAEQgFAOgMAHQgMAHgRAAQgbAAgOgQgAgOgXQgGAGAAAKIAqAAQgBgLgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_160.setTransform(-118.5,210.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FF0000").s().p("AgEA+QgGgCgDgEQgCgDgBgGIgBgSIAAgnIgOAAIAAgUIAOAAIAAgTIAbgOIAAAhIATAAIAAAUIgTAAIAAAkIABAOIACADIAFABIALgCIACATQgKADgLAAQgIAAgGgCg");
	this.shape_161.setTransform(-127.6,208.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FF0000").s().p("AAUAwIAAgwQAAgOgBgEQgCgFgEgCQgEgDgGAAQgGAAgGAEQgGADgCAGQgCAGAAAOIAAArIgdAAIAAhdIAbAAIAAAOQAOgQAUAAQAJAAAIADQAIADAEAFQAEAEABAGQACAGAAALIAAA5g");
	this.shape_162.setTransform(-137.3,210);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FF0000").s().p("AgnApQgKgIAAgMQAAgIAEgGQAFgGAHgCQAIgEAPgCQATgDAHgDIAAgDQAAgHgEgDQgEgDgKAAQgHAAgFADQgEACgCAHIgagEQAEgOAKgGQALgHAVAAQASAAAJAEQAJAEAFAGQADAGAAAQIAAAcQgBAMACAGQACAGADAHIgcAAIgDgIIgBgCQgHAGgIADQgIADgJAAQgQAAgJgIgAAAAGQgLACgFACQgFADAAAGQAAAFAEAEQAFADAHAAQAGAAAHgEQAFgDACgFIABgMIAAgFQgFACgLACg");
	this.shape_163.setTransform(-149.3,210.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FF0000").s().p("AAUAwIAAgwQAAgOgBgEQgCgFgEgCQgEgDgGAAQgGAAgGAEQgGADgCAGQgCAGAAAOIAAArIgdAAIAAhdIAbAAIAAAOQAOgQAUAAQAJAAAIADQAIADAEAFQAEAEABAGQACAGAAALIAAA5g");
	this.shape_164.setTransform(-161.3,210);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FF0000").s().p("AgNBAIAAhcIAbAAIAABcgAgNgpIAAgWIAbAAIAAAWg");
	this.shape_165.setTransform(-170.5,208.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FF0000").s().p("AgnAhQgKgNAAgTQAAgWAOgOQAOgNAVAAQAXAAANAOQAOAOAAAbIhGAAQAAALAHAGQAGAGAJAAQAHAAAEgDQAFgDACgHIAcAEQgFAOgMAHQgMAHgRAAQgbAAgOgQgAgOgXQgGAGAAAKIAqAAQgBgLgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_166.setTransform(-179.2,210.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FF0000").s().p("AgiAwIAAhdIAbAAIAAAOQAGgKAFgDQAFgDAHAAQAKAAAJAFIgJAVQgHgEgGAAQgGAAgFADQgDADgCAIQgCAHAAAXIAAAdg");
	this.shape_167.setTransform(-188,210);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FF0000").s().p("AAUBAIAAgxQAAgPgBgCQgCgFgEgBQgEgDgGAAQgGAAgGADQgFADgDAFQgCAGAAAMIAAAuIgdAAIAAh/IAdAAIAAAvQANgOASAAQAKAAAIADQAIAEAEAFQAEAEABAGQACAGAAALIAAA3g");
	this.shape_168.setTransform(-204.8,208.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FF0000").s().p("AgDA+QgHgCgCgEQgEgDgBgGIgBgSIAAgnIgMAAIAAgUIAMAAIAAgTIAcgOIAAAhIATAAIAAAUIgTAAIAAAkIAAAOIADADIAFABIALgCIADATQgKADgNAAQgHAAgFgCg");
	this.shape_169.setTransform(-214.6,208.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FF0000").s().p("AgNBAIAAhcIAbAAIAABcgAgNgpIAAgWIAbAAIAAAWg");
	this.shape_170.setTransform(-220.8,208.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FF0000").s().p("AgpA3QgPgLgDgWIAdgCQADANAHAGQAJAGAMAAQAOAAAIgGQAHgFAAgHQAAgFgDgDQgDgDgIgDIgWgFQgZgFgJgHQgNgLAAgPQAAgKAFgIQAHgJAMgEQAMgFARAAQAbAAAOALQAOAKABASIgeABQgCgKgGgEQgHgEgLAAQgNAAgIAEQgEADAAAFQgBAFAFADQAGAEAUAFQAXAEAKAFQAKAFAGAHQAGAJAAAMQAAALgHAJQgHAKgNAFQgNAFgTAAQgbAAgPgMg");
	this.shape_171.setTransform(-230.7,208.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FF0000").s().p("AggApQgNgIgEgNIAcgEQACAIAGADQAFAEAJAAQALAAAGgDQAEgDAAgEQAAgDgDgCQgCgCgHgBQghgHgJgFQgNgHAAgNQAAgMALgIQALgJAXAAQAVAAALAHQAKAGAEAMIgaAEQgCgFgFgDQgFgDgIAAQgLAAgFADQgDACAAADQAAACADACQAEADAWAEQAWAFAJAGQAJAGAAAMQAAAMgMAKQgNAJgYAAQgVAAgMgIg");
	this.shape_172.setTransform(-249.2,210.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FF0000").s().p("AgbArQgNgGgHgLQgHgLAAgPQAAgNAHgLQAHgMANgGQAMgGAPAAQAYAAAQAOQAPAOAAAUQAAAVgPAOQgQAOgYAAQgNAAgOgGgAgRgUQgIAHAAANQAAAOAIAHQAHAIAKAAQALAAAIgIQAHgHAAgOQAAgNgHgHQgIgIgLAAQgKAAgHAIg");
	this.shape_173.setTransform(-260.9,210.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FF0000").s().p("AgNBAIAAh/IAbAAIAAB/g");
	this.shape_174.setTransform(-270.1,208.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FF0000").s().p("AgnAhQgKgNAAgTQAAgWAOgOQAOgNAVAAQAXAAANAOQAOAOAAAbIhGAAQAAALAHAGQAGAGAJAAQAHAAAEgDQAFgDACgHIAcAEQgFAOgMAHQgMAHgRAAQgbAAgOgQgAgOgXQgGAGAAAKIAqAAQgBgLgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_175.setTransform(299.9,187.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FF0000").s().p("AgmA1QgNgOAAgWQAAgXAMgMQANgNAUAAQARAAANANIAAguIAcAAIAAB/IgaAAIAAgNQgHAIgJAEQgJADgIAAQgSABgNgNgAgQgFQgGAGAAAOQAAAPAEAGQAHAKALAAQAKAAAHgHQAHgIAAgOQAAgQgHgGQgGgHgLAAQgJAAgHAHg");
	this.shape_176.setTransform(287.7,185.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FF0000").s().p("AgbArQgNgGgHgLQgHgLAAgPQAAgNAHgLQAHgMANgGQAMgGAPAAQAYAAAQAOQAPAOAAAUQAAAVgPAOQgQAOgYAAQgNAAgOgGgAgRgUQgIAHAAANQAAAOAIAHQAHAIAKAAQALAAAIgIQAHgHAAgOQAAgNgHgHQgIgIgLAAQgKAAgHAIg");
	this.shape_177.setTransform(269.6,187.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FF0000").s().p("AgiAwIAAhdIAbAAIAAAOQAGgKAFgDQAFgDAHAAQAKAAAJAFIgJAVQgHgEgGAAQgGAAgFADQgDADgCAIQgCAHAAAXIAAAdg");
	this.shape_178.setTransform(260.1,187.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FF0000").s().p("AgfAsQgJgEgEgIQgEgHAAgOIAAg6IAdAAIAAArQAAATABAEQACAFAEADQAEACAGAAQAHAAAFgDQAGgEACgFQACgFAAgTIAAgoIAdAAIAABdIgbAAIAAgOQgFAHgKAFQgIAEgLAAQgLAAgIgEg");
	this.shape_179.setTransform(249,187.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FF0000").s().p("AgkAkQgOgNABgXQgBgWAOgNQAOgNAYAAQATAAALAIQAMAHAFAPIgcAEQgCgHgFgEQgEgDgIAAQgKAAgGAGQgGAGgBAPQABAQAGAHQAGAHAKAAQAIAAAFgEQAGgEABgKIAcAEQgEARgMAIQgMAJgVAAQgXAAgOgNg");
	this.shape_180.setTransform(237.2,187.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FF0000").s().p("AggApQgNgIgEgNIAcgEQACAIAGADQAFAEAJAAQALAAAGgDQAEgDAAgEQAAgDgDgCQgCgCgHgBQghgHgJgFQgNgHAAgNQAAgMALgIQALgJAXAAQAVAAALAHQAKAGAEAMIgaAEQgCgFgFgDQgFgDgIAAQgLAAgFADQgDACAAADQAAACADACQAEADAWAEQAWAFAJAGQAJAGAAAMQAAAMgMAKQgNAJgYAAQgVAAgMgIg");
	this.shape_181.setTransform(225.3,187.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FF0000").s().p("AgzAxQgUgSABgeQAAgTAGgNQAFgKAJgIQAIgIALgDQAOgFARgBQAhABATARQAUASAAAfQAAAegUASQgTARghAAQgfAAgUgRgAgcggQgMALAAAVQAAAWAMALQALAMARAAQASgBALgKQALgMAAgWQAAgWgLgLQgKgLgTABQgSAAgKALg");
	this.shape_182.setTransform(211.8,185.7);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FF0000").s().p("AgiAwIAAhdIAbAAIAAAOQAGgKAFgDQAFgDAHAAQAKAAAJAFIgJAVQgHgEgGAAQgGAAgFADQgDADgCAIQgCAHAAAXIAAAdg");
	this.shape_183.setTransform(194.9,187.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FF0000").s().p("AgbArQgNgGgHgLQgHgLAAgPQAAgNAHgLQAHgMANgGQAMgGAPAAQAYAAAQAOQAPAOAAAUQAAAVgPAOQgQAOgYAAQgNAAgOgGgAgRgUQgIAHAAANQAAAOAIAHQAHAIAKAAQALAAAIgIQAHgHAAgOQAAgNgHgHQgIgIgLAAQgKAAgHAIg");
	this.shape_184.setTransform(183.8,187.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FF0000").s().p("AAUBAIAAgvQAAgPgBgEQgCgEgEgDQgEgCgGAAQgGAAgGADQgGAEgCAFQgCAFAAAQIAAAqIgdAAIAAhcIAbAAIAAAOQAOgQAUAAQAJAAAIADQAIADAEAEQAEAFABAGQACAFAAAKIAAA6gAgigpIAAgDQAAgJAFgFQAFgFAJAAIAGABIAKAEQAIADAFAAQADAAACgCQACgCABgEIANAAQAAAMgFAFQgFAFgIAAIgHgBIgKgDQgKgDgEAAQgDAAgCABQgCACAAAEg");
	this.shape_185.setTransform(171.2,185.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FF0000").s().p("AgnAhQgKgNAAgTQAAgWAOgOQAOgNAVAAQAXAAANAOQAOAOAAAbIhGAAQAAALAHAGQAGAGAJAAQAHAAAEgDQAFgDACgHIAcAEQgFAOgMAHQgMAHgRAAQgbAAgOgQgAgOgXQgGAGAAAKIAqAAQgBgLgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_186.setTransform(159.1,187.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FF0000").s().p("AgpA3QgPgLgDgWIAdgCQACANAJAGQAHAGANAAQAPAAAHgGQAHgFAAgHQAAgFgDgDQgDgDgHgDIgYgFQgXgFgKgHQgOgLAAgPQAAgKAHgIQAGgJAMgEQAMgFARAAQAbAAAOALQAOAKAAASIgdABQgCgKgHgEQgGgEgLAAQgNAAgHAEQgGADAAAFQABAFAEADQAGAEAVAFQAWAEAJAFQALAFAGAHQAGAJAAAMQAAALgHAJQgHAKgNAFQgNAFgTAAQgbAAgPgMg");
	this.shape_187.setTransform(146.4,185.7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FF0000").s().p("AgbArQgNgGgHgLQgHgLAAgPQAAgNAHgLQAHgMANgGQAMgGAPAAQAYAAAQAOQAPAOAAAUQAAAVgPAOQgQAOgYAAQgNAAgOgGgAgRgUQgIAHAAANQAAAOAIAHQAHAIAKAAQALAAAIgIQAHgHAAgOQAAgNgHgHQgIgIgLAAQgKAAgHAIg");
	this.shape_188.setTransform(127.7,187.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FF0000").s().p("AAyAwIAAg1QAAgNgDgFQgEgFgIAAQgGAAgFADQgFAEgCAGQgDAGAAAMIAAAtIgbAAIAAgyQAAgOgBgEQgCgEgDgCQgDgCgGAAQgGAAgGADQgFADgCAGQgCAGAAAMIAAAuIgdAAIAAhdIAaAAIAAANQAOgPAUAAQAKAAAIAEQAGAEAFAHQAHgHAIgEQAIgEAKAAQALAAAIAFQAJAEAEAIQADAGAAANIAAA7g");
	this.shape_189.setTransform(112.2,187.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FF0000").s().p("AgNBAIAAhcIAbAAIAABcgAgNgpIAAgWIAbAAIAAAWg");
	this.shape_190.setTransform(100.2,185.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FF0000").s().p("AgEA+QgFgCgEgEQgDgDAAgGIgBgSIAAgnIgOAAIAAgUIAOAAIAAgTIAbgOIAAAhIATAAIAAAUIgTAAIAAAkIAAAOIADADIAFABIALgCIACATQgJADgMAAQgJAAgFgCg");
	this.shape_191.setTransform(93.9,185.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FF0000").s().p("AgNBAIAAh/IAbAAIAAB/g");
	this.shape_192.setTransform(87.7,185.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FF0000").s().p("AgfA/QgJgFgEgHQgEgIAAgNIAAg6IAdAAIAAAqQAAATABAFQACAFAEADQAEACAGAAQAHAAAFgDQAGgEACgFQACgGAAgTIAAgnIAdAAIAABcIgbAAIAAgOQgFAIgKAFQgIADgLAAQgLAAgIgDgAgNgoIANgaIAfAAIgbAag");
	this.shape_193.setTransform(78.4,185.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FF0000").s().p("AgNBAIAAh/IAbAAIAAB/g");
	this.shape_194.setTransform(63.6,185.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FF0000").s().p("AgnAhQgKgNAAgTQAAgWAOgOQAOgNAVAAQAXAAANAOQAOAOAAAbIhGAAQAAALAHAGQAGAGAJAAQAHAAAEgDQAFgDACgHIAcAEQgFAOgMAHQgMAHgRAAQgbAAgOgQgAgOgXQgGAGAAAKIAqAAQgBgLgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_195.setTransform(54.9,187.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FF0000").s().p("AgnAhQgKgNAAgTQAAgWAOgOQAOgNAVAAQAXAAANAOQAOAOAAAbIhGAAQAAALAHAGQAGAGAJAAQAHAAAEgDQAFgDACgHIAcAEQgFAOgMAHQgMAHgRAAQgbAAgOgQgAgOgXQgGAGAAAKIAqAAQgBgLgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_196.setTransform(37.7,187.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FF0000").s().p("AgfAsQgJgEgEgIQgEgHAAgOIAAg6IAdAAIAAArQAAATABAEQACAFAEADQAEACAGAAQAHAAAFgDQAGgEACgFQACgFAAgTIAAgoIAdAAIAABdIgbAAIAAgOQgFAHgKAFQgIAEgLAAQgLAAgIgEg");
	this.shape_197.setTransform(25.8,187.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FF0000").s().p("AgUBBIAAhIIgPAAIAAgUIAPAAIAAgHQAAgMADgFQAEgGAHgEQAHgEAMAAQAMABALADIgDARIgOgBQgGAAgDACQgCADAAAHIAAAGIAVAAIAAAUIgVAAIAABIg");
	this.shape_198.setTransform(16.5,185.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FF0000").s().p("AgsBAIgEgTIANABQAJAAAFgFQAFgFACgIIgohdIAeAAIAZBCIAZhCIAdAAIgmBZIgGAQIgIANQgDAEgEADQgEADgHABQgFACgJAAQgIAAgHgCg");
	this.shape_199.setTransform(1.1,189.4);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FF0000").s().p("AgbArQgNgGgHgLQgHgLAAgPQAAgNAHgLQAHgMANgGQAMgGAPAAQAYAAAQAOQAPAOAAAUQAAAVgPAOQgQAOgYAAQgNAAgOgGgAgRgUQgIAHAAANQAAAOAIAHQAHAIAKAAQALAAAIgIQAHgHAAgOQAAgNgHgHQgIgIgLAAQgKAAgHAIg");
	this.shape_200.setTransform(-16.5,187.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FF0000").s().p("AgjAkQgPgNAAgXQAAgWAPgNQANgNAXAAQAUAAAMAIQALAHAFAPIgcAEQgBgHgFgEQgGgDgHAAQgKAAgGAGQgHAGABAPQgBAQAHAHQAGAHAKAAQAIAAAGgEQAEgEACgKIAdAEQgFARgMAIQgNAJgUAAQgWAAgOgNg");
	this.shape_201.setTransform(-28.4,187.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FF0000").s().p("AgNBAIAAhcIAbAAIAABcgAgNgpIAAgWIAbAAIAAAWg");
	this.shape_202.setTransform(-37.1,185.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FF0000").s().p("AgEA+QgGgCgDgEQgCgDgBgGIgBgSIAAgnIgOAAIAAgUIAOAAIAAgTIAbgOIAAAhIATAAIAAAUIgTAAIAAAkIABAOIACADIAFABIALgCIACATQgKADgLAAQgIAAgGgCg");
	this.shape_203.setTransform(-43.4,185.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FF0000").s().p("AgjAkQgOgNgBgXQABgWAOgNQAOgNAXAAQATAAALAIQAMAHAFAPIgcAEQgCgHgFgEQgEgDgIAAQgKAAgGAGQgHAGAAAPQAAAQAHAHQAHAHAJAAQAIAAAFgEQAGgEABgKIAcAEQgEARgMAIQgMAJgVAAQgWAAgOgNg");
	this.shape_204.setTransform(-52.4,187.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FF0000").s().p("AgoA7QgJgIAAgMQAAgIAEgGQAFgGAHgDQAIgEAPgCQATgEAHgDIAAgCQAAgGgEgDQgEgDgKAAQgHAAgFADQgEACgDAGIgZgEQAEgNAKgHQALgGAVAAQASAAAJAEQAKAEADAGQAEAGAAAPIAAAdQAAAMABAGQABAGAEAGIgcAAIgDgHIAAgCQgIAFgIAEQgHACgKAAQgQAAgKgHgAAAAXQgMADgEACQgFADAAAGQAAAFAFAEQAEADAHAAQAGAAAIgEQAEgEACgEIABgMIAAgGQgFACgLACgAgOgoIAOgaIAfAAIgcAag");
	this.shape_205.setTransform(-64,185.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FF0000").s().p("AgNBAIAAh/IAbAAIAAB/g");
	this.shape_206.setTransform(-72.6,185.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FF0000").s().p("AgnApQgKgIAAgMQAAgIAEgGQAEgGAJgCQAHgEAPgCQASgDAIgDIAAgDQAAgHgEgDQgEgDgKAAQgHAAgEADQgFACgCAHIgagEQAEgOALgGQAKgHAVAAQASAAAJAEQAJAEAFAGQADAGAAAQIgBAcQABAMABAGQACAGADAHIgcAAIgDgIIgBgCQgHAGgIADQgIADgIAAQgRAAgJgIgAAAAGQgLACgFACQgFADAAAGQAAAFAEAEQAFADAHAAQAHAAAGgEQAGgDABgFQABgDAAgJIAAgFQgFACgLACg");
	this.shape_207.setTransform(-81.2,187.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FF0000").s().p("AgiA6QgRgIgJgQQgIgQAAgSQAAgUAJgPQAKgQATgIQAOgHAUAAQAbAAAQALQAPAJAFATIgeAEQgDgKgIgFQgJgFgNAAQgTgBgLALQgMALABAWQgBAVAMAMQAMAMASAAQAJAAAJgEQAKgDAGgEIAAgRIgiAAIAAgVIBBAAIAAAyQgJAJgTAGQgRAFgTAAQgVABgSgJg");
	this.shape_208.setTransform(-95.1,185.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FF0000").s().p("AgbArQgNgGgHgLQgHgLAAgPQAAgNAHgLQAHgMANgGQAMgGAPAAQAYAAAQAOQAPAOAAAUQAAAVgPAOQgQAOgYAAQgNAAgOgGgAgRgUQgIAHAAANQAAAOAIAHQAHAIAKAAQALAAAIgIQAHgHAAgOQAAgNgHgHQgIgIgLAAQgKAAgHAIg");
	this.shape_209.setTransform(-115,187.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FF0000").s().p("AgNBAIAAhcIAbAAIAABcgAgNgpIAAgWIAbAAIAAAWg");
	this.shape_210.setTransform(-124.1,185.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FF0000").s().p("AgiAwIAAhdIAbAAIAAAOQAGgKAFgDQAFgDAHAAQAKAAAJAFIgJAVQgHgEgGAAQgGAAgFADQgDADgCAIQgCAHAAAXIAAAdg");
	this.shape_211.setTransform(-130.2,187.4);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FF0000").s().p("AgnAhQgKgNAAgTQAAgWAOgOQAOgNAVAAQAXAAANAOQAOAOAAAbIhGAAQAAALAHAGQAGAGAJAAQAHAAAEgDQAFgDACgHIAcAEQgFAOgMAHQgMAHgRAAQgbAAgOgQgAgOgXQgGAGAAAKIAqAAQgBgLgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_212.setTransform(-140.8,187.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FF0000").s().p("AgzBBIAAiAIAaAAIAAAPQAGgIAIgEQAJgEAKAAQASgBANANQANANAAAXQAAAWgNANQgNANgSAAQgIAAgIgDQgHgDgIgIIAAAvgAgQgmQgHAHAAAOQAAAQAHAGQAHAIAJAAQALgBAGgGQAHgHAAgPQgBgOgGgIQgHgHgKAAQgKAAgGAHg");
	this.shape_213.setTransform(-152.5,189.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FF0000").s().p("AAyAwIAAg1QAAgNgDgFQgEgFgIAAQgGAAgFADQgFAEgCAGQgDAGAAAMIAAAtIgbAAIAAgyQAAgOgBgEQgCgEgDgCQgDgCgGAAQgGAAgGADQgFADgCAGQgCAGAAAMIAAAuIgdAAIAAhdIAaAAIAAANQAOgPAUAAQAKAAAIAEQAGAEAFAHQAHgHAIgEQAIgEAKAAQALAAAIAFQAJAEAEAIQADAGAAANIAAA7g");
	this.shape_214.setTransform(-168.3,187.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FF0000").s().p("AgOBAIAAh/IAdAAIAAB/g");
	this.shape_215.setTransform(-180.2,185.7);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FF0000").s().p("AgNBAIAAh/IAbAAIAAB/g");
	this.shape_216.setTransform(-191.6,185.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FF0000").s().p("AgnAhQgKgNAAgTQAAgWAOgOQAOgNAVAAQAXAAANAOQAOAOAAAbIhGAAQAAALAHAGQAGAGAJAAQAHAAAEgDQAFgDACgHIAcAEQgFAOgMAHQgMAHgRAAQgbAAgOgQgAgOgXQgGAGAAAKIAqAAQgBgLgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_217.setTransform(-200.3,187.5);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FF0000").s().p("AgmA1QgNgOAAgWQAAgXAMgMQANgNAUAAQARAAANANIAAguIAcAAIAAB/IgaAAIAAgNQgHAIgJAEQgJADgIAAQgSABgNgNgAgQgFQgGAGAAAOQAAAPAEAGQAHAKALAAQAKAAAHgHQAHgIAAgOQAAgQgHgGQgGgHgLAAQgJAAgHAHg");
	this.shape_218.setTransform(-212.5,185.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FF0000").s().p("AgiAwIAAhdIAbAAIAAAOQAGgKAFgDQAFgDAHAAQAKAAAJAFIgJAVQgHgEgGAAQgGAAgFADQgDADgCAIQgCAHAAAXIAAAdg");
	this.shape_219.setTransform(-227.5,187.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FF0000").s().p("AgbArQgNgGgHgLQgHgLAAgPQAAgNAHgLQAHgMANgGQAMgGAPAAQAYAAAQAOQAPAOAAAUQAAAVgPAOQgQAOgYAAQgNAAgOgGgAgRgUQgIAHAAANQAAAOAIAHQAHAIAKAAQALAAAIgIQAHgHAAgOQAAgNgHgHQgIgIgLAAQgKAAgHAIg");
	this.shape_220.setTransform(-238.6,187.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FF0000").s().p("AgmA1QgNgOAAgWQAAgXAMgMQANgNAUAAQARAAANANIAAguIAcAAIAAB/IgaAAIAAgNQgHAIgJAEQgJADgIAAQgSABgNgNgAgQgFQgGAGAAAOQAAAPAEAGQAHAKALAAQAKAAAHgHQAHgIAAgOQAAgQgHgGQgGgHgLAAQgJAAgHAHg");
	this.shape_221.setTransform(-251.5,185.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FF0000").s().p("AgnApQgKgIAAgMQAAgIAEgGQAFgGAHgCQAIgEAPgCQATgDAHgDIAAgDQAAgHgEgDQgEgDgKAAQgHAAgFADQgEACgCAHIgagEQAEgOAKgGQALgHAVAAQASAAAJAEQAJAEAFAGQADAGAAAQIAAAcQgBAMACAGQACAGADAHIgcAAIgDgIIgBgCQgHAGgIADQgIADgJAAQgQAAgJgIgAAAAGQgLACgFACQgFADAAAGQAAAFAEAEQAFADAHAAQAGAAAHgEQAFgDACgFIABgMIAAgFQgFACgLACg");
	this.shape_222.setTransform(-263.2,187.5);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FF0000").s().p("AgiAwIAAhdIAbAAIAAAOQAGgKAFgDQAFgDAHAAQAKAAAJAFIgJAVQgHgEgGAAQgGAAgFADQgDADgCAIQgCAHAAAXIAAAdg");
	this.shape_223.setTransform(-272.2,187.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FF0000").s().p("AgnAhQgKgNAAgTQAAgWAOgOQAOgNAVAAQAXAAANAOQAOAOAAAbIhGAAQAAALAHAGQAGAGAJAAQAHAAAEgDQAFgDACgHIAcAEQgFAOgMAHQgMAHgRAAQgbAAgOgQgAgOgXQgGAGAAAKIAqAAQgBgLgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_224.setTransform(-282.8,187.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FF0000").s().p("AgzBBIAAiAIAbAAIAAAPQAEgIAJgEQAJgEAJAAQAUgBAMANQANANAAAXQAAAWgNANQgNANgTAAQgHAAgIgDQgHgDgHgIIAAAvgAgQgmQgHAHAAAOQAAAQAHAGQAHAIAJAAQAKgBAHgGQAGgHAAgPQABgOgIgIQgGgHgKAAQgJAAgHAHg");
	this.shape_225.setTransform(-294.4,189.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FF0000").s().p("AAyAwIAAg1QAAgNgDgFQgEgFgIAAQgGAAgFADQgFAEgCAGQgDAGAAAMIAAAtIgbAAIAAgyQAAgOgBgEQgCgEgDgCQgDgCgGAAQgGAAgGADQgFADgCAGQgCAGAAAMIAAAuIgdAAIAAhdIAaAAIAAANQAOgPAUAAQAKAAAIAEQAGAEAFAHQAHgHAIgEQAIgEAKAAQALAAAIAFQAJAEAEAIQADAGAAANIAAA7g");
	this.shape_226.setTransform(-310.2,187.4);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FF0000").s().p("Ag3BAIAAh/IBsAAIAAAVIhOAAIAAAdIBJAAIAAAVIhJAAIAAAjIBRAAIAAAVg");
	this.shape_227.setTransform(-326,185.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FF0000").s().p("AgsBAIgEgTIANABQAJAAAFgFQAFgFADgIIgphdIAeAAIAZBCIAYhCIAeAAIgmBZIgGAQIgIANQgDAEgEADQgEADgGABQgHACgIAAQgIAAgHgCg");
	this.shape_228.setTransform(282.7,166.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FF0000").s().p("AgoApQgJgIAAgMQAAgIAEgGQAEgGAJgCQAHgEAPgCQASgDAIgDIAAgDQAAgHgEgDQgEgDgKAAQgIAAgEADQgEACgDAHIgZgEQAEgOALgGQAKgHAVAAQASAAAJAEQAKAEADAGQAEAGAAAQIgBAcQAAAMACAGQABAGAEAHIgcAAIgCgIIgBgCQgIAGgIADQgHADgKAAQgQAAgKgIgAAAAGQgMACgDACQgGADAAAGQAAAFAFAEQAEADAHAAQAGAAAIgEQAFgDABgFIABgMIAAgFQgFACgLACg");
	this.shape_229.setTransform(265.6,164.8);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FF0000").s().p("AgkAkQgOgNAAgXQAAgWAOgNQAOgNAXAAQAUAAAMAIQALAHAFAPIgcAEQgBgHgFgEQgGgDgHAAQgKAAgGAGQgHAGABAPQgBAQAHAHQAGAHAKAAQAIAAAGgEQAEgEADgKIAcAEQgFARgMAIQgNAJgUAAQgXAAgOgNg");
	this.shape_230.setTransform(254.3,164.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FF0000").s().p("AgNBAIAAhcIAbAAIAABcgAgNgoIAAgYIAbAAIAAAYg");
	this.shape_231.setTransform(245.6,163.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FF0000").s().p("AgEA+QgFgCgEgEQgCgDgBgGIgBgSIAAgnIgOAAIAAgUIAOAAIAAgTIAbgOIAAAhIATAAIAAAUIgTAAIAAAkIABAOIACADIAFABIALgCIACATQgJADgMAAQgJAAgFgCg");
	this.shape_232.setTransform(239.3,163.3);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FF0000").s().p("AgkAkQgOgNABgXQgBgWAOgNQAOgNAYAAQATAAAMAIQALAHAFAPIgcAEQgCgHgFgEQgEgDgIAAQgKAAgGAGQgGAGgBAPQABAQAGAHQAHAHAJAAQAIAAAFgEQAFgEADgKIAbAEQgEARgMAIQgMAJgVAAQgXAAgOgNg");
	this.shape_233.setTransform(230.3,164.8);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FF0000").s().p("AgoA7QgJgIAAgMQAAgIAEgGQAEgGAJgDQAHgEAPgDQASgCAIgDIAAgDQAAgGgEgDQgEgDgKAAQgIAAgDACQgFADgDAGIgZgDQAEgOALgHQAKgGAVAAQASAAAJAEQAKAEAEAGQADAGAAAPIgBAdQAAAMACAGQABAGAEAGIgcAAIgCgHIgBgDQgIAHgIACQgHADgJABQgRAAgKgIgAAAAYQgMACgDACQgGADAAAFQAAAGAFADQAEAEAHAAQAHAAAGgEQAGgEABgFIABgLIAAgGQgFACgLADgAgNgnIANgaIAfAAIgbAag");
	this.shape_234.setTransform(218.7,163.1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FF0000").s().p("AgNBAIAAiAIAbAAIAACAg");
	this.shape_235.setTransform(210.1,163.1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FF0000").s().p("AgnApQgKgIAAgMQAAgIAEgGQAEgGAJgCQAHgEAPgCQASgDAIgDIAAgDQAAgHgEgDQgEgDgKAAQgIAAgDADQgFACgDAHIgZgEQAEgOALgGQAKgHAVAAQASAAAJAEQAKAEAEAGQADAGAAAQIgBAcQABAMABAGQABAGAEAHIgcAAIgCgIIgCgCQgHAGgIADQgIADgIAAQgRAAgJgIgAAAAGQgMACgDACQgGADAAAGQAAAFAEAEQAFADAHAAQAHAAAGgEQAFgDACgFIABgMIAAgFQgFACgLACg");
	this.shape_236.setTransform(201.5,164.8);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FF0000").s().p("AghA7QgSgJgIgQQgJgQAAgSQAAgTAKgQQAJgQATgIQAOgGAUAAQAbgBAQALQAPAKAFARIgdAFQgEgJgJgGQgIgFgNgBQgSABgMAKQgMALAAAVQAAAWAMAMQAMALASAAQAJAAAJgCQAKgEAHgEIAAgRIgjAAIAAgUIBBAAIAAAxQgKAIgSAHQgRAFgTABQgWgBgQgHg");
	this.shape_237.setTransform(187.7,163.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FF0000").s().p("AgoApQgJgIAAgMQAAgIAEgGQAEgGAJgCQAHgEAPgCQASgDAIgDIAAgDQAAgHgEgDQgEgDgKAAQgIAAgDADQgFACgDAHIgZgEQAEgOALgGQAKgHAVAAQASAAAJAEQAKAEADAGQAEAGAAAQIgBAcQAAAMACAGQABAGAEAHIgcAAIgCgIIgBgCQgIAGgIADQgHADgJAAQgRAAgKgIgAAAAGQgMACgDACQgGADAAAGQAAAFAFAEQAEADAHAAQAHAAAGgEQAGgDABgFIABgMIAAgFQgFACgLACg");
	this.shape_238.setTransform(168.3,164.8);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FF0000").s().p("AgjAkQgPgNAAgXQAAgWAPgNQANgNAXAAQAUAAAMAIQALAHAFAPIgcAEQgBgHgFgEQgGgDgHAAQgKAAgGAGQgHAGABAPQgBAQAHAHQAGAHAKAAQAIAAAGgEQAEgEACgKIAdAEQgFARgMAIQgNAJgUAAQgWAAgOgNg");
	this.shape_239.setTransform(157,164.8);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FF0000").s().p("AgNBAIAAhcIAbAAIAABcgAgNgoIAAgYIAbAAIAAAYg");
	this.shape_240.setTransform(148.3,163.1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FF0000").s().p("AgNBAIAAiAIAbAAIAACAg");
	this.shape_241.setTransform(142.6,163.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FF0000").s().p("AgKA9QgIgDgHgIIAAANIgaAAIAAiAIAcAAIAAAvQANgNARAAQAUAAAMAMQANANAAAWQAAAYgNAMQgNAOgTAAQgIgBgJgEgAgQgFQgHAGAAAOQAAAPAFAGQAHAKAMAAQAJAAAHgHQAGgHAAgPQAAgQgGgGQgHgHgKAAQgKAAgGAHg");
	this.shape_242.setTransform(133.7,163.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FF0000").s().p("AgfA+QgJgDgEgIQgEgHAAgOIAAg6IAdAAIAAAqQAAAUABAEQACAEAEADQAEADAGAAQAHAAAFgEQAGgDACgFQACgGAAgUIAAgmIAdAAIAABcIgbAAIAAgNQgFAHgKAEQgIAEgLABQgLgBgIgEgAgNgnIANgaIAfAAIgbAag");
	this.shape_243.setTransform(120.8,163.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FF0000").s().p("AgzBCIAAiBIAaAAIAAAPQAGgHAIgFQAJgEAKgBQASABANANQANAMAAAXQAAAWgNANQgNANgSAAQgIAAgIgDQgHgDgIgHIAAAvgAgQgmQgHAHAAAOQAAAPAHAHQAHAHAJABQALAAAGgIQAHgFAAgQQgBgPgGgHQgHgHgKAAQgKAAgGAHg");
	this.shape_244.setTransform(108.5,166.5);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FF0000").s().p("AgnAhQgKgNAAgTQAAgWAOgOQAOgNAVAAQAXAAANAOQAOAOAAAbIhGAAQAAALAHAGQAGAGAJAAQAHAAAEgDQAFgDACgHIAcAEQgFAOgMAHQgMAHgRAAQgbAAgOgQgAgOgXQgGAGAAAKIAqAAQgBgLgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_245.setTransform(96.1,164.8);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FF0000").s().p("AAfBAIgWgcIgOgTQgFgDgEgCQgFgCgKAAIgGAAIAAA2IgeAAIAAiAIA/AAQAWABALADQALADAGAKQAGAIAAAMQAAAPgJAJQgKAIgTADQAJAEAHAGQAGAGAKAQIASAYgAgjgJIAWAAQAUAAAFgBQAGgCADgEQADgDAAgHQAAgGgEgEQgEgEgHgBIgVgBIgXAAg");
	this.shape_246.setTransform(83.7,163.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FF0000").s().p("AgnApQgKgIAAgMQAAgIAEgGQAEgGAJgCQAHgEAPgCQASgDAIgDIAAgDQAAgHgEgDQgEgDgKAAQgHAAgEADQgFACgCAHIgagEQAEgOALgGQAKgHAVAAQASAAAJAEQAJAEAFAGQADAGAAAQIgBAcQABAMABAGQACAGADAHIgcAAIgDgIIgBgCQgHAGgIADQgIADgIAAQgRAAgJgIgAAAAGQgLACgFACQgFADAAAGQAAAFAEAEQAFADAHAAQAHAAAGgEQAGgDABgFQABgDAAgJIAAgFQgFACgLACg");
	this.shape_247.setTransform(64.2,164.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FF0000").s().p("AgNBAIAAiAIAbAAIAACAg");
	this.shape_248.setTransform(55.6,163.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FF0000").s().p("AgnAhQgKgNAAgTQAAgWAOgOQAOgNAVAAQAXAAANAOQAOAOAAAbIhGAAQAAALAHAGQAGAGAJAAQAHAAAEgDQAFgDACgHIAcAEQgFAOgMAHQgMAHgRAAQgbAAgOgQgAgOgXQgGAGAAAKIAqAAQgBgLgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_249.setTransform(41.2,164.8);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FF0000").s().p("AgmA0QgNgMAAgYQAAgWAMgNQANgMAUAAQARAAANANIAAgvIAcAAIAACAIgaAAIAAgNQgHAIgJADQgJAEgIABQgSAAgNgOgAgQgFQgGAGAAAOQAAAPAEAGQAHAKALAAQAKAAAHgHQAHgHAAgPQAAgQgHgGQgGgHgLAAQgJAAgHAHg");
	this.shape_250.setTransform(29,163.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FF0000").s().p("AgbArQgNgGgHgLQgHgLAAgPQAAgNAHgLQAHgMANgGQAMgGAPAAQAYAAAQAOQAPAOAAAUQAAAVgPAOQgQAOgYAAQgNAAgOgGgAgRgUQgIAHAAANQAAAOAIAHQAHAIAKAAQALAAAIgIQAHgHAAgOQAAgNgHgHQgIgIgLAAQgKAAgHAIg");
	this.shape_251.setTransform(10.9,164.8);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FF0000").s().p("AAyAwIAAg1QAAgNgDgFQgEgFgIAAQgGAAgFADQgFAEgCAGQgDAGAAAMIAAAtIgbAAIAAgyQAAgOgBgEQgCgEgDgCQgDgCgGAAQgGAAgGADQgFADgCAGQgCAGAAAMIAAAuIgdAAIAAhdIAaAAIAAANQAOgPAUAAQAKAAAIAEQAGAEAFAHQAHgHAIgEQAIgEAKAAQALAAAIAFQAJAEAEAIQADAGAAANIAAA7g");
	this.shape_252.setTransform(-4.6,164.7);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FF0000").s().p("AgnAhQgKgNAAgTQAAgWAOgOQAOgNAVAAQAXAAANAOQAOAOAAAbIhGAAQAAALAHAGQAGAGAJAAQAHAAAEgDQAFgDACgHIAcAEQgFAOgMAHQgMAHgRAAQgbAAgOgQgAgOgXQgGAGAAAKIAqAAQgBgLgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_253.setTransform(-19.5,164.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FF0000").s().p("AgiAwIAAhdIAbAAIAAAOQAGgKAFgDQAFgDAHAAQAKAAAJAFIgJAVQgHgEgGAAQgGAAgFADQgDADgCAIQgCAHAAAXIAAAdg");
	this.shape_254.setTransform(-28.3,164.7);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FF0000").s().p("AgzBCIAAiBIAbAAIAAAPQAEgHAJgFQAJgEAJgBQAUABAMANQANAMAAAXQAAAWgNANQgNANgTAAQgHAAgHgDQgIgDgHgHIAAAvgAgQgmQgHAHAAAOQAAAPAHAHQAHAHAKABQAJAAAHgIQAGgFAAgQQABgPgIgHQgGgHgKAAQgJAAgHAHg");
	this.shape_255.setTransform(-39.1,166.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FF0000").s().p("AgfAsQgJgEgEgIQgEgHAAgOIAAg6IAdAAIAAArQAAATABAEQACAFAEADQAEACAGAAQAHAAAFgDQAGgEACgFQACgFAAgTIAAgoIAdAAIAABdIgbAAIAAgOQgFAHgKAFQgIAEgLAAQgLAAgIgEg");
	this.shape_256.setTransform(-52.1,164.9);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FF0000").s().p("AgpA3QgPgLgDgWIAdgCQADANAHAGQAJAGAMAAQAPAAAHgGQAHgFAAgHQAAgFgDgDQgDgDgIgDIgWgFQgYgFgKgHQgOgLAAgPQABgKAFgIQAHgJAMgEQAMgFARAAQAbAAAOALQAOAKABASIgeABQgCgKgHgEQgFgEgMAAQgNAAgIAEQgEADgBAFQAAAFAFADQAGAEAUAFQAXAEAKAFQAKAFAGAHQAGAJAAAMQAAALgHAJQgHAKgNAFQgNAFgTAAQgbAAgPgMg");
	this.shape_257.setTransform(-65.3,163.1);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FF0000").s().p("AgiAwIAAhdIAbAAIAAAOQAGgKAFgDQAFgDAHAAQAKAAAJAFIgJAVQgHgEgGAAQgGAAgFADQgDADgCAIQgCAHAAAXIAAAdg");
	this.shape_258.setTransform(-81,164.7);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FF0000").s().p("AgnAhQgKgNAAgTQAAgWAOgOQAOgNAVAAQAXAAANAOQAOAOAAAbIhGAAQAAALAHAGQAGAGAJAAQAHAAAEgDQAFgDACgHIAcAEQgFAOgMAHQgMAHgRAAQgbAAgOgQgAgOgXQgGAGAAAKIAqAAQgBgLgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_259.setTransform(-91.6,164.8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FF0000").s().p("AgNBAIAAiAIAbAAIAACAg");
	this.shape_260.setTransform(-100.1,163.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FF0000").s().p("AgNBAIAAiAIAbAAIAACAg");
	this.shape_261.setTransform(-105.8,163.1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FF0000").s().p("AgNBAIAAhcIAbAAIAABcgAgNgoIAAgYIAbAAIAAAYg");
	this.shape_262.setTransform(-111.5,163.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FF0000").s().p("AgkAkQgNgNAAgXQAAgWANgNQAPgNAWAAQAUAAAMAIQALAHAFAPIgcAEQgCgHgEgEQgGgDgHAAQgKAAgGAGQgGAGAAAPQAAAQAGAHQAGAHAKAAQAIAAAGgEQAFgEACgKIAcAEQgFARgMAIQgMAJgVAAQgXAAgOgNg");
	this.shape_263.setTransform(-120,164.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FF0000").s().p("AAUAwIAAgwQAAgOgBgEQgCgFgEgCQgEgDgGAAQgGAAgGAEQgGADgCAGQgCAGAAAOIAAArIgdAAIAAhdIAbAAIAAAOQAOgQAUAAQAJAAAIADQAIADAEAFQAEAEABAGQACAGAAALIAAA5g");
	this.shape_264.setTransform(-132.2,164.7);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FF0000").s().p("AgnApQgKgIAAgMQAAgIAEgGQAEgGAJgCQAHgEAPgCQASgDAIgDIAAgDQAAgHgEgDQgEgDgKAAQgHAAgEADQgFACgCAHIgagEQAEgOALgGQAKgHAVAAQASAAAJAEQAJAEAFAGQADAGAAAQIgBAcQABAMABAGQACAGADAHIgcAAIgDgIIgBgCQgHAGgIADQgIADgIAAQgRAAgJgIgAAAAGQgLACgFACQgFADAAAGQAAAFAEAEQAFADAHAAQAHAAAGgEQAGgDABgFQABgDAAgJIAAgFQgFACgLACg");
	this.shape_265.setTransform(-144.2,164.8);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FF0000").s().p("AgsAxQgTgRAAgfQAAgfATgRQATgTAeABQAbgBAQAOQALAJAFAPIgeAHQgCgLgJgFQgIgHgMAAQgPAAgLALQgKAKABAXQgBAYAKAKQALAKAPAAQAMAAAIgGQAIgHAFgOIAcAIQgGAVgQAKQgPALgYAAQgdgBgSgRg");
	this.shape_266.setTransform(-157.4,163.1);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FF0000").s().p("AgbArQgNgGgHgLQgHgLAAgPQAAgNAHgLQAHgMANgGQAMgGAPAAQAYAAAQAOQAPAOAAAUQAAAVgPAOQgQAOgYAAQgNAAgOgGgAgRgUQgIAHAAANQAAAOAIAHQAHAIAKAAQALAAAIgIQAHgHAAgOQAAgNgHgHQgIgIgLAAQgKAAgHAIg");
	this.shape_267.setTransform(-176.8,164.8);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FF0000").s().p("AAyAwIAAg1QAAgNgDgFQgEgFgIAAQgGAAgFADQgFAEgCAGQgDAGAAAMIAAAtIgbAAIAAgyQAAgOgBgEQgCgEgDgCQgDgCgGAAQgGAAgGADQgFADgCAGQgCAGAAAMIAAAuIgdAAIAAhdIAaAAIAAANQAOgPAUAAQAKAAAIAEQAGAEAFAHQAHgHAIgEQAIgEAKAAQALAAAIAFQAJAEAEAIQADAGAAANIAAA7g");
	this.shape_268.setTransform(-192.3,164.7);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FF0000").s().p("AgNBAIAAhcIAbAAIAABcgAgNgoIAAgYIAbAAIAAAYg");
	this.shape_269.setTransform(-204.2,163.1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FF0000").s().p("AgEA+QgFgCgEgEQgCgDgBgGQgCgFAAgNIAAgnIgNAAIAAgUIANAAIAAgTIAcgOIAAAhIAUAAIAAAUIgUAAIAAAkIABAOIACADIAFABIALgCIACATQgKADgLAAQgJAAgFgCg");
	this.shape_270.setTransform(-210.6,163.3);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FF0000").s().p("AgNBAIAAiAIAbAAIAACAg");
	this.shape_271.setTransform(-216.8,163.1);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FF0000").s().p("AgfA+QgJgDgEgIQgEgHAAgOIAAg6IAdAAIAAAqQAAAUABAEQACAEAEADQAEADAGAAQAHAAAFgEQAGgDACgFQACgGAAgUIAAgmIAdAAIAABcIgbAAIAAgNQgFAHgKAEQgIAEgLABQgLgBgIgEgAgNgnIANgaIAfAAIgbAag");
	this.shape_272.setTransform(-226.1,163.1);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FF0000").s().p("AgNBAIAAiAIAbAAIAACAg");
	this.shape_273.setTransform(-240.9,163.1);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FF0000").s().p("AgnAhQgKgNAAgTQAAgWAOgOQAOgNAVAAQAXAAANAOQAOAOAAAbIhGAAQAAALAHAGQAGAGAJAAQAHAAAEgDQAFgDACgHIAcAEQgFAOgMAHQgMAHgRAAQgbAAgOgQgAgOgXQgGAGAAAKIAqAAQgBgLgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_274.setTransform(-249.6,164.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FF0000").s().p("AgbArQgNgGgHgLQgHgLAAgPQAAgNAHgLQAHgMANgGQAMgGAPAAQAYAAAQAOQAPAOAAAUQAAAVgPAOQgQAOgYAAQgNAAgOgGgAgRgUQgIAHAAANQAAAOAIAHQAHAIAKAAQALAAAIgIQAHgHAAgOQAAgNgHgHQgIgIgLAAQgKAAgHAIg");
	this.shape_275.setTransform(-267.2,164.8);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FF0000").s().p("AAyAwIAAg1QAAgNgDgFQgEgFgIAAQgGAAgFADQgFAEgCAGQgDAGAAAMIAAAtIgbAAIAAgyQAAgOgBgEQgCgEgDgCQgDgCgGAAQgGAAgGADQgFADgCAGQgCAGAAAMIAAAuIgdAAIAAhdIAaAAIAAANQAOgPAUAAQAKAAAIAEQAGAEAFAHQAHgHAIgEQAIgEAKAAQALAAAIAFQAJAEAEAIQADAGAAANIAAA7g");
	this.shape_276.setTransform(-282.7,164.7);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FF0000").s().p("AgbArQgNgGgHgLQgHgLAAgPQAAgNAHgLQAHgMANgGQAMgGAPAAQAYAAAQAOQAPAOAAAUQAAAVgPAOQgQAOgYAAQgNAAgOgGgAgRgUQgIAHAAANQAAAOAIAHQAHAIAKAAQALAAAIgIQAHgHAAgOQAAgNgHgHQgIgIgLAAQgKAAgHAIg");
	this.shape_277.setTransform(-298.1,164.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FF0000").s().p("AgkAkQgOgNAAgXQAAgWAOgNQAOgNAXAAQAUAAAMAIQALAHAFAPIgcAEQgCgHgEgEQgGgDgHAAQgKAAgGAGQgHAGABAPQgBAQAHAHQAGAHAKAAQAIAAAGgEQAEgEADgKIAcAEQgFARgMAIQgNAJgUAAQgXAAgOgNg");
	this.shape_278.setTransform(-310,164.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FF0000").s().p("AgbA9QgNgGgHgLQgHgLAAgQQAAgNAHgLQAHgLANgGQAMgGAPAAQAYAAAQAOQAPANAAAUQAAAWgPAOQgQANgYAAQgNABgOgGgAgRgCQgIAGAAAOQAAANAIAIQAHAHAKAAQALAAAIgHQAHgIAAgOQAAgNgHgGQgIgIgLAAQgKAAgHAIgAgNgnIANgaIAfAAIgbAag");
	this.shape_279.setTransform(301.1,140.5);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FF0000").s().p("AgNBAIAAhcIAbAAIAABcgAgNgpIAAgWIAbAAIAAAWg");
	this.shape_280.setTransform(292,140.5);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FF0000").s().p("AgMAvIgqhdIAeAAIATAvIAFAQIADgIIADgIIAVgvIAdAAIgrBdg");
	this.shape_281.setTransform(283.3,142.2);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FF0000").s().p("AgiAwIAAhdIAbAAIAAAOQAGgKAFgDQAFgDAHAAQAKAAAJAFIgJAVQgHgEgGAAQgGAAgFADQgDADgCAIQgCAHAAAXIAAAdg");
	this.shape_282.setTransform(274.4,142.1);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FF0000").s().p("AgNBAIAAhcIAbAAIAABcgAgNgpIAAgWIAbAAIAAAWg");
	this.shape_283.setTransform(266.8,140.5);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FF0000").s().p("AggApQgNgIgEgNIAcgEQACAIAGADQAFAEAJAAQALAAAGgDQAEgDAAgEQAAgDgDgCQgCgCgHgBQghgHgJgFQgNgHAAgNQAAgMALgIQALgJAXAAQAVAAALAHQAKAGAEAMIgaAEQgCgFgFgDQgFgDgIAAQgLAAgFADQgDACAAADQAAACADACQAEADAWAEQAWAFAJAGQAJAGAAAMQAAAMgMAKQgNAJgYAAQgVAAgMgIg");
	this.shape_284.setTransform(257.9,142.2);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FF0000").s().p("AgnAhQgKgNAAgTQAAgWAOgOQAOgNAVAAQAXAAANAOQAOAOAAAbIhGAAQAAALAHAGQAGAGAJAAQAHAAAEgDQAFgDACgHIAcAEQgFAOgMAHQgMAHgRAAQgbAAgOgQgAgOgXQgGAGAAAKIAqAAQgBgLgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_285.setTransform(240.9,142.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FF0000").s().p("AgfAsQgJgEgEgIQgEgHAAgOIAAg6IAdAAIAAArQAAATABAEQACAFAEADQAEACAGAAQAHAAAFgDQAGgEACgFQACgFAAgTIAAgoIAdAAIAABdIgbAAIAAgOQgFAHgKAFQgIAEgLAAQgLAAgIgEg");
	this.shape_286.setTransform(228.9,142.3);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FF0000").s().p("AAYBCIAAgwQgGAHgIAEQgJADgIAAQgSAAgMgMQgOgOAAgXQAAgWANgNQANgNATAAQAKAAAIAFQAIADAGAJIAAgPIAaAAIAACBgAgPgmQgHAHAAAQQAAAPAGAGQAIAGAIABQAKAAAHgIQAHgGABgQQgBgOgGgHQgHgHgKAAQgJAAgHAHg");
	this.shape_287.setTransform(216.2,143.9);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FF0000").s().p("AAUBAIAAgxQAAgPgBgCQgCgFgEgBQgEgDgGAAQgGAAgGADQgFADgDAFQgCAGAAALIAAAvIgdAAIAAh/IAdAAIAAAvQANgOASAAQAKAAAIADQAIAEAEAFQAEAEABAGQACAGAAALIAAA3g");
	this.shape_288.setTransform(198.1,140.5);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FF0000").s().p("AgDA+QgHgCgCgEQgDgDgCgGIgBgSIAAgnIgMAAIAAgUIAMAAIAAgTIAcgOIAAAhIAUAAIAAAUIgUAAIAAAkIAAAOIADADIAFABIALgCIADATQgLADgMAAQgHAAgFgCg");
	this.shape_289.setTransform(188.4,140.7);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FF0000").s().p("AgNBAIAAhcIAbAAIAABcgAgNgpIAAgWIAbAAIAAAWg");
	this.shape_290.setTransform(182.1,140.5);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FF0000").s().p("AgpA3QgPgLgDgWIAdgCQACANAJAGQAHAGANAAQAPAAAHgGQAHgFAAgHQAAgFgDgDQgDgDgHgDIgYgFQgYgFgJgHQgNgLAAgPQAAgKAFgIQAHgJAMgEQAMgFARAAQAbAAAOALQAOAKABASIgeABQgCgKgGgEQgHgEgLAAQgNAAgIAEQgEADAAAFQAAAFAEADQAGAEAUAFQAWAEAKAFQALAFAGAHQAGAJAAAMQAAALgHAJQgHAKgNAFQgNAFgTAAQgbAAgPgMg");
	this.shape_291.setTransform(172.2,140.5);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FF0000").s().p("AggApQgNgIgEgNIAcgEQACAIAGADQAFAEAJAAQALAAAGgDQAEgDAAgEQAAgDgDgCQgCgCgHgBQghgHgJgFQgNgHAAgNQAAgMALgIQALgJAXAAQAVAAALAHQAKAGAEAMIgaAEQgCgFgFgDQgFgDgIAAQgLAAgFADQgDACAAADQAAACADACQAEADAWAEQAWAFAJAGQAJAGAAAMQAAAMgMAKQgNAJgYAAQgVAAgMgIg");
	this.shape_292.setTransform(153.7,142.2);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FF0000").s().p("AgbArQgNgGgHgLQgHgLAAgPQAAgNAHgLQAHgMANgGQAMgGAPAAQAYAAAQAOQAPAOAAAUQAAAVgPAOQgQAOgYAAQgNAAgOgGgAgRgUQgIAHAAANQAAAOAIAHQAHAIAKAAQALAAAIgIQAHgHAAgOQAAgNgHgHQgIgIgLAAQgKAAgHAIg");
	this.shape_293.setTransform(142,142.2);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FF0000").s().p("AgNBAIAAh/IAbAAIAAB/g");
	this.shape_294.setTransform(132.9,140.5);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FF0000").s().p("AgnAhQgKgNAAgTQAAgWAOgOQAOgNAVAAQAXAAANAOQAOAOAAAbIhGAAQAAALAHAGQAGAGAJAAQAHAAAEgDQAFgDACgHIAcAEQgFAOgMAHQgMAHgRAAQgbAAgOgQgAgOgXQgGAGAAAKIAqAAQgBgLgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_295.setTransform(118.4,142.2);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FF0000").s().p("AgmA1QgNgNAAgYQAAgWAMgNQANgMAUAAQARAAANANIAAguIAcAAIAAB/IgaAAIAAgNQgHAIgJADQgJAEgIAAQgSAAgNgMgAgQgFQgGAGAAAOQAAAPAEAGQAHAKALAAQAKAAAHgHQAHgIAAgOQAAgQgHgGQgGgHgLAAQgJAAgHAHg");
	this.shape_296.setTransform(106.3,140.6);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FF0000").s().p("AgbArQgNgGgHgLQgHgLAAgPQAAgNAHgLQAHgMANgGQAMgGAPAAQAYAAAQAOQAPAOAAAUQAAAVgPAOQgQAOgYAAQgNAAgOgGgAgRgUQgIAHAAANQAAAOAIAHQAHAIAKAAQALAAAIgIQAHgHAAgOQAAgNgHgHQgIgIgLAAQgKAAgHAIg");
	this.shape_297.setTransform(88.2,142.2);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FF0000").s().p("AgiAwIAAhdIAbAAIAAAOQAGgKAFgDQAFgDAHAAQAKAAAJAFIgJAVQgHgEgGAAQgGAAgFADQgDADgCAIQgCAHAAAXIAAAdg");
	this.shape_298.setTransform(78.7,142.1);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FF0000").s().p("AgfAsQgJgEgEgIQgEgHAAgOIAAg6IAdAAIAAArQAAATABAEQACAFAEADQAEACAGAAQAHAAAFgDQAGgEACgFQACgFAAgTIAAgoIAdAAIAABdIgbAAIAAgOQgFAHgKAFQgIAEgLAAQgLAAgIgEg");
	this.shape_299.setTransform(67.5,142.3);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FF0000").s().p("AgkAkQgOgNABgXQgBgWAOgNQAOgNAYAAQATAAAMAIQALAHAFAPIgcAEQgCgHgFgEQgEgDgIAAQgKAAgGAGQgGAGgBAPQABAQAGAHQAHAHAJAAQAIAAAFgEQAFgEADgKIAbAEQgEARgMAIQgMAJgVAAQgXAAgOgNg");
	this.shape_300.setTransform(55.7,142.2);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FF0000").s().p("AggApQgNgIgEgNIAcgEQACAIAGADQAFAEAJAAQALAAAGgDQAEgDAAgEQAAgDgDgCQgCgCgHgBQghgHgJgFQgNgHAAgNQAAgMALgIQALgJAXAAQAVAAALAHQAKAGAEAMIgaAEQgCgFgFgDQgFgDgIAAQgLAAgFADQgDACAAADQAAACADACQAEADAWAEQAWAFAJAGQAJAGAAAMQAAAMgMAKQgNAJgYAAQgVAAgMgIg");
	this.shape_301.setTransform(43.8,142.2);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FF0000").s().p("AgzAxQgTgRgBgfQAAgTAHgNQAFgKAJgIQAIgHALgFQAOgEARAAQAgAAAUARQATASAAAeQAAAfgTASQgUARggAAQggAAgTgRgAgdggQgLALAAAVQAAAWALALQAMALARAAQASABAMgLQAKgMABgWQgBgWgKgLQgMgKgSgBQgSAAgLAMg");
	this.shape_302.setTransform(30.4,140.5);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FF0000").s().p("AgiAwIAAhdIAbAAIAAAOQAGgKAFgDQAFgDAHAAQAKAAAJAFIgJAVQgHgEgGAAQgGAAgFADQgDADgCAIQgCAHAAAXIAAAdg");
	this.shape_303.setTransform(13.4,142.1);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FF0000").s().p("AgbArQgNgGgHgLQgHgLAAgPQAAgNAHgLQAHgMANgGQAMgGAPAAQAYAAAQAOQAPAOAAAUQAAAVgPAOQgQAOgYAAQgNAAgOgGgAgRgUQgIAHAAANQAAAOAIAHQAHAIAKAAQALAAAIgIQAHgHAAgOQAAgNgHgHQgIgIgLAAQgKAAgHAIg");
	this.shape_304.setTransform(2.3,142.2);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FF0000").s().p("AAUBAIAAgvQAAgPgBgEQgCgEgEgDQgEgCgGAAQgGAAgGADQgGAEgCAFQgCAFAAAQIAAAqIgdAAIAAhcIAbAAIAAAOQAOgQAUAAQAJAAAIADQAIADAEAEQAEAFABAGQACAFAAAKIAAA6gAgigpIAAgDQAAgJAFgFQAFgFAJAAIAGABIAKAEQAIADAFAAQADAAACgCQACgCABgEIANAAQAAAMgFAFQgFAFgIAAIgHgBIgKgDQgKgDgEAAQgDAAgCABQgCACAAAEg");
	this.shape_305.setTransform(-10.3,140.5);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FF0000").s().p("AgnAhQgKgNAAgTQAAgWAOgOQAOgNAVAAQAXAAANAOQAOAOAAAbIhGAAQAAALAHAGQAGAGAJAAQAHAAAEgDQAFgDACgHIAcAEQgFAOgMAHQgMAHgRAAQgbAAgOgQgAgOgXQgGAGAAAKIAqAAQgBgLgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_306.setTransform(-22.3,142.2);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FF0000").s().p("AgpA3QgPgLgDgWIAdgCQADANAHAGQAJAGAMAAQAOAAAIgGQAHgFAAgHQAAgFgDgDQgDgDgIgDIgWgFQgZgFgJgHQgNgLAAgPQAAgKAFgIQAHgJAMgEQAMgFARAAQAbAAAOALQAOAKABASIgeABQgCgKgGgEQgHgEgLAAQgNAAgIAEQgEADAAAFQgBAFAFADQAGAEAUAFQAXAEAKAFQAKAFAGAHQAGAJAAAMQAAALgHAJQgHAKgNAFQgNAFgTAAQgbAAgPgMg");
	this.shape_307.setTransform(-35,140.5);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FF0000").s().p("AgbArQgNgGgHgLQgHgLAAgPQAAgNAHgLQAHgMANgGQAMgGAPAAQAYAAAQAOQAPAOAAAUQAAAVgPAOQgQAOgYAAQgNAAgOgGgAgRgUQgIAHAAANQAAAOAIAHQAHAIAKAAQALAAAIgIQAHgHAAgOQAAgNgHgHQgIgIgLAAQgKAAgHAIg");
	this.shape_308.setTransform(-53.7,142.2);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FF0000").s().p("AAUAwIAAgwQAAgOgBgEQgCgFgEgCQgEgDgGAAQgGAAgGAEQgGADgCAGQgCAGAAAOIAAArIgdAAIAAhdIAbAAIAAAOQAOgQAUAAQAJAAAIADQAIADAEAFQAEAEABAGQACAGAAALIAAA5g");
	this.shape_309.setTransform(-66.3,142.1);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FF0000").s().p("AgoApQgJgIAAgMQAAgIAEgGQAFgGAHgCQAIgEAPgCQATgDAHgDIAAgDQAAgHgEgDQgEgDgKAAQgHAAgFADQgEACgCAHIgagEQAEgOAKgGQALgHAVAAQASAAAJAEQAJAEAEAGQAEAGAAAQIAAAcQgBAMACAGQACAGADAHIgcAAIgDgIIgBgCQgHAGgIADQgIADgJAAQgQAAgKgIgAAAAGQgMACgEACQgFADAAAGQAAAFAEAEQAFADAHAAQAGAAAIgEQAEgDACgFIABgMIAAgFQgFACgLACg");
	this.shape_310.setTransform(-78.3,142.2);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FF0000").s().p("AAyAwIAAg1QAAgNgDgFQgEgFgIAAQgGAAgFADQgFAEgCAGQgDAGAAAMIAAAtIgbAAIAAgyQAAgOgBgEQgCgEgDgCQgDgCgGAAQgGAAgGADQgFADgCAGQgCAGAAAMIAAAuIgdAAIAAhdIAaAAIAAANQAOgPAUAAQAKAAAIAEQAGAEAFAHQAHgHAIgEQAIgEAKAAQALAAAIAFQAJAEAEAIQADAGAAANIAAA7g");
	this.shape_311.setTransform(-93.3,142.1);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FF0000").s().p("AgfAsQgJgEgEgIQgEgHAAgOIAAg6IAdAAIAAArQAAATABAEQACAFAEADQAEACAGAAQAHAAAFgDQAGgEACgFQACgFAAgTIAAgoIAdAAIAABdIgbAAIAAgOQgFAHgKAFQgIAEgLAAQgLAAgIgEg");
	this.shape_312.setTransform(-108.7,142.3);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FF0000").s().p("AAUBAIAAgxQAAgPgBgCQgCgFgEgBQgEgDgGAAQgGAAgGADQgFADgDAFQgCAGAAALIAAAvIgdAAIAAh/IAdAAIAAAvQANgOASAAQAKAAAIADQAIAEAEAFQAEAEABAGQACAGAAALIAAA3g");
	this.shape_313.setTransform(-121.3,140.5);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FF0000").s().p("AAUAwIAAgwQAAgOgBgEQgCgFgEgCQgEgDgGAAQgGAAgGAEQgGADgCAGQgCAGAAAOIAAArIgdAAIAAhdIAbAAIAAAOQAOgQAUAAQAJAAAIADQAIADAEAFQAEAEABAGQACAGAAALIAAA5g");
	this.shape_314.setTransform(-139.6,142.1);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FF0000").s().p("AgfAsQgJgEgEgIQgEgHAAgOIAAg6IAdAAIAAArQAAATABAEQACAFAEADQAEACAGAAQAHAAAFgDQAGgEACgFQACgFAAgTIAAgoIAdAAIAABdIgbAAIAAgOQgFAHgKAFQgIAEgLAAQgLAAgIgEg");
	this.shape_315.setTransform(-152.2,142.3);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FF0000").s().p("AgnAhQgKgNAAgTQAAgWAOgOQAOgNAVAAQAXAAANAOQAOAOAAAbIhGAAQAAALAHAGQAGAGAJAAQAHAAAEgDQAFgDACgHIAcAEQgFAOgMAHQgMAHgRAAQgbAAgOgQgAgOgXQgGAGAAAKIAqAAQgBgLgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_316.setTransform(-170,142.2);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FF0000").s().p("AgfAsQgJgEgEgIQgEgHAAgOIAAg6IAdAAIAAArQAAATABAEQACAFAEADQAEACAGAAQAHAAAFgDQAGgEACgFQACgFAAgTIAAgoIAdAAIAABdIgbAAIAAgOQgFAHgKAFQgIAEgLAAQgLAAgIgEg");
	this.shape_317.setTransform(-182,142.3);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FF0000").s().p("AgTBBIAAhJIgQAAIAAgTIAQAAIAAgHQAAgLACgHQADgFAIgEQAGgEAMABQANAAALACIgDASIgOgBQgGgBgDADQgCADAAAGIAAAHIAVAAIAAATIgVAAIAABJg");
	this.shape_318.setTransform(-191.3,140.4);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FF0000").s().p("AggApQgNgIgEgNIAcgEQACAIAGADQAFAEAJAAQALAAAGgDQAEgDAAgEQAAgDgDgCQgCgCgHgBQghgHgJgFQgNgHAAgNQAAgMALgIQALgJAXAAQAVAAALAHQAKAGAEAMIgaAEQgCgFgFgDQgFgDgIAAQgLAAgFADQgDACAAADQAAACADACQAEADAWAEQAWAFAJAGQAJAGAAAMQAAAMgMAKQgNAJgYAAQgVAAgMgIg");
	this.shape_319.setTransform(-206.8,142.2);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FF0000").s().p("AgfAsQgJgEgEgIQgEgHAAgOIAAg6IAdAAIAAArQAAATABAEQACAFAEADQAEACAGAAQAHAAAFgDQAGgEACgFQACgFAAgTIAAgoIAdAAIAABdIgbAAIAAgOQgFAHgKAFQgIAEgLAAQgLAAgIgEg");
	this.shape_320.setTransform(-218.6,142.3);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FF0000").s().p("AgbArQgNgGgHgLQgHgLAAgPQAAgNAHgLQAHgMANgGQAMgGAPAAQAYAAAQAOQAPAOAAAUQAAAVgPAOQgQAOgYAAQgNAAgOgGgAgRgUQgIAHAAANQAAAOAIAHQAHAIAKAAQALAAAIgIQAHgHAAgOQAAgNgHgHQgIgIgLAAQgKAAgHAIg");
	this.shape_321.setTransform(-231.2,142.2);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FF0000").s().p("AgNBAIAAhcIAbAAIAABcgAgNgpIAAgWIAbAAIAAAWg");
	this.shape_322.setTransform(-240.3,140.5);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FF0000").s().p("AgmA1QgNgNAAgYQAAgWAMgNQANgMAUAAQARAAANANIAAguIAcAAIAAB/IgaAAIAAgNQgHAIgJADQgJAEgIAAQgSAAgNgMgAgQgFQgGAGAAAOQAAAPAEAGQAHAKALAAQAKAAAHgHQAHgIAAgOQAAgQgHgGQgGgHgLAAQgJAAgHAHg");
	this.shape_323.setTransform(-249.7,140.6);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FF0000").s().p("AgNBAIAAhcIAbAAIAABcgAgNgpIAAgWIAbAAIAAAWg");
	this.shape_324.setTransform(-258.6,140.5);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FF0000").s().p("AgpA3QgPgLgDgWIAdgCQACANAJAGQAHAGANAAQAPAAAHgGQAHgFAAgHQAAgFgDgDQgDgDgIgDIgXgFQgXgFgKgHQgOgLAAgPQAAgKAHgIQAGgJAMgEQAMgFARAAQAbAAAOALQAOAKAAASIgdABQgCgKgHgEQgGgEgLAAQgNAAgHAEQgGADAAAFQABAFAEADQAGAEAVAFQAWAEAJAFQALAFAGAHQAGAJAAAMQAAALgHAJQgHAKgNAFQgNAFgTAAQgbAAgPgMg");
	this.shape_325.setTransform(-268.5,140.5);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FF0000").s().p("AAUBAIAAgxQAAgPgBgCQgCgFgEgBQgEgDgGAAQgGAAgGADQgFADgDAFQgCAGAAALIAAAvIgdAAIAAh/IAdAAIAAAvQANgOASAAQAKAAAIADQAIAEAEAFQAEAEABAGQACAGAAALIAAA3g");
	this.shape_326.setTransform(-287.3,140.5);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FF0000").s().p("AgEA+QgFgCgEgEQgCgDgBgGQgCgFAAgNIAAgnIgNAAIAAgUIANAAIAAgTIAcgOIAAAhIAUAAIAAAUIgUAAIAAAkIABAOIACADIAFABIALgCIACATQgKADgLAAQgJAAgFgCg");
	this.shape_327.setTransform(-297,140.7);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FF0000").s().p("AgiAwIAAhdIAbAAIAAAOQAGgKAFgDQAFgDAHAAQAKAAAJAFIgJAVQgHgEgGAAQgGAAgFADQgDADgCAIQgCAHAAAXIAAAdg");
	this.shape_328.setTransform(-303.6,142.1);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FF0000").s().p("AgoApQgJgIAAgMQAAgIAEgGQAFgGAHgCQAIgEAPgCQATgDAHgDIAAgDQAAgHgEgDQgEgDgKAAQgHAAgFADQgEACgCAHIgagEQAEgOAKgGQALgHAVAAQASAAAJAEQAJAEAEAGQAEAGAAAQIAAAcQgBAMACAGQACAGADAHIgcAAIgDgIIgBgCQgHAGgIADQgIADgJAAQgQAAgKgIgAAAAGQgMACgEACQgFADAAAGQAAAFAEAEQAFADAHAAQAGAAAIgEQAEgDACgFIABgMIAAgFQgFACgLACg");
	this.shape_329.setTransform(-314.1,142.2);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FF0000").s().p("Ag9BAIAAh/IA3AAQARgBAKADQANADAJAJQAJAJAFAMQAFAMAAARQAAAQgFALQgFAPgLAJQgHAGgNAEQgKADgQgBgAgfArIAWAAQAMAAAFgBQAHgCAFgEQAFgEADgIQADgJAAgPQAAgOgDgIQgDgIgFgEQgGgEgIgDQgGgBgSAAIgNAAg");
	this.shape_330.setTransform(-327.1,140.5);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FF0000").s().p("AgnAhQgKgNAAgTQAAgWAOgOQAOgNAVAAQAXAAANAOQAOAOAAAbIhGAAQAAALAHAGQAGAGAJAAQAHAAAEgDQAFgDACgHIAcAEQgFAOgMAHQgMAHgRAAQgbAAgOgQgAgOgXQgGAGAAAKIAqAAQgBgLgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_331.setTransform(104.7,119.6);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FF0000").s().p("AAUAwIAAgwQAAgOgBgEQgCgFgEgCQgEgDgGAAQgGAAgGAEQgGADgCAGQgCAGAAAOIAAArIgdAAIAAhdIAbAAIAAAOQAOgQAUAAQAJAAAIADQAIADAEAFQAEAEABAGQACAGAAALIAAA5g");
	this.shape_332.setTransform(92.8,119.5);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FF0000").s().p("AgNBBIAAhdIAbAAIAABdgAgNgoIAAgYIAbAAIAAAYg");
	this.shape_333.setTransform(83.6,117.8);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FF0000").s().p("AgDA+QgHgCgCgEQgDgDgCgGIgBgSIAAgnIgMAAIAAgUIAMAAIAAgTIAcgOIAAAhIAUAAIAAAUIgUAAIAAAkIABAOIACADIAFABIALgCIADATQgLADgMAAQgIAAgEgCg");
	this.shape_334.setTransform(77.3,118);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FF0000").s().p("AgoApQgJgIAAgMQAAgIAEgGQAEgGAIgCQAIgEAPgCQASgDAIgDIAAgDQAAgHgEgDQgEgDgKAAQgIAAgEADQgEACgDAHIgZgEQAEgOAKgGQALgHAVAAQASAAAJAEQAKAEADAGQAEAGAAAQIAAAcQAAAMABAGQACAGADAHIgcAAIgCgIIgBgCQgIAGgIADQgHADgKAAQgQAAgKgIgAAAAGQgMACgDACQgGADAAAGQAAAFAFAEQAEADAHAAQAGAAAIgEQAFgDABgFIABgMIAAgFQgFACgLACg");
	this.shape_335.setTransform(68.2,119.6);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FF0000").s().p("AgzBCIAAiAIAaAAIAAANQAGgGAIgFQAJgFAJAAQATAAANAOQANAMAAAXQAAAWgNANQgNANgTAAQgIAAgHgDQgHgDgHgHIAAAvgAgQgmQgHAHAAAOQAAAPAHAHQAHAHAJAAQAKABAHgIQAGgGABgPQAAgPgIgHQgGgHgKAAQgKAAgGAHg");
	this.shape_336.setTransform(56.4,121.3);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FF0000").s().p("AgNBBIAAiBIAbAAIAACBg");
	this.shape_337.setTransform(47,117.8);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FF0000").s().p("AgnApQgKgIAAgMQAAgIAEgGQAFgGAHgCQAIgEAPgCQATgDAHgDIAAgDQAAgHgEgDQgEgDgKAAQgHAAgEADQgFACgCAHIgagEQAEgOALgGQAKgHAVAAQASAAAJAEQAJAEAFAGQADAGAAAQIAAAcQAAAMABAGQACAGADAHIgcAAIgDgIIgBgCQgHAGgIADQgIADgIAAQgRAAgJgIgAAAAGQgLACgFACQgFADAAAGQAAAFAEAEQAFADAHAAQAHAAAGgEQAFgDACgFIABgMIAAgFQgFACgLACg");
	this.shape_338.setTransform(38.4,119.6);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FF0000").s().p("Ag3BBIAAiBIAvAAQAaAAAJACQAMAEAJAKQAIAJAAAQQAAALgEAIQgGAHgHAFQgIAEgHACQgLACgUAAIgTAAIAAAxgAgagFIARAAQAQAAAGgCQAGgCADgEQAEgFAAgFQAAgIgFgEQgFgEgHgBIgUgBIgPAAg");
	this.shape_339.setTransform(26.1,117.8);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FF0000").s().p("AgMAvIgqhdIAeAAIATAvIAFAQIADgIIADgIIAVgvIAdAAIgrBdg");
	this.shape_340.setTransform(7.4,119.6);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FF0000").s().p("AgnAhQgKgNAAgTQAAgWAOgOQAOgNAVAAQAXAAANAOQAOAOAAAbIhGAAQAAALAHAGQAGAGAJAAQAHAAAEgDQAFgDACgHIAcAEQgFAOgMAHQgMAHgRAAQgbAAgOgQgAgOgXQgGAGAAAKIAqAAQgBgLgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_341.setTransform(-4,119.6);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FF0000").s().p("AgnAhQgKgNAAgTQAAgWAOgOQAOgNAVAAQAXAAANAOQAOAOAAAbIhGAAQAAALAHAGQAGAGAJAAQAHAAAEgDQAFgDACgHIAcAEQgFAOgMAHQgMAHgRAAQgbAAgOgQgAgOgXQgGAGAAAKIAqAAQgBgLgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_342.setTransform(-15.5,119.6);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FF0000").s().p("AAUBBIAAgyQAAgPgBgDQgCgEgEgCQgEgCgGAAQgGAAgGADQgFADgDAFQgCAGAAALIAAAwIgdAAIAAiBIAdAAIAAAwQANgOASAAQAKAAAIADQAIAEAEAEQAEAFABAGQACAGAAALIAAA4g");
	this.shape_343.setTransform(-27.4,117.8);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FF0000").s().p("AgpA3QgPgLgDgWIAdgCQADANAHAGQAIAGANAAQAOAAAIgGQAHgFAAgHQAAgFgDgDQgDgDgHgDIgXgFQgZgFgJgHQgNgLAAgPQAAgKAFgIQAHgJAMgEQAMgFARAAQAbAAAOALQAOAKABASIgeABQgCgKgGgEQgHgEgLAAQgNAAgIAEQgEADAAAFQgBAFAFADQAGAEAUAFQAWAEALAFQAKAFAGAHQAGAJAAAMQAAALgHAJQgHAKgNAFQgNAFgTAAQgbAAgPgMg");
	this.shape_344.setTransform(-40.7,117.8);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FF0000").s().p("AgiAwIAAhdIAbAAIAAAOQAGgKAFgDQAFgDAHAAQAKAAAJAFIgJAVQgHgEgGAAQgGAAgFADQgDADgCAIQgCAHAAAXIAAAdg");
	this.shape_345.setTransform(-56.4,119.5);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FF0000").s().p("AgbArQgNgGgHgLQgHgLAAgPQAAgNAHgLQAHgMANgGQAMgGAPAAQAYAAAQAOQAPAOAAAUQAAAVgPAOQgQAOgYAAQgNAAgOgGgAgRgUQgIAHAAANQAAAOAIAHQAHAIAKAAQALAAAIgIQAHgHAAgOQAAgNgHgHQgIgIgLAAQgKAAgHAIg");
	this.shape_346.setTransform(-67.5,119.6);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FF0000").s().p("AgiAwIAAhdIAbAAIAAAOQAGgKAFgDQAFgDAHAAQAKAAAJAFIgJAVQgHgEgGAAQgGAAgFADQgDADgCAIQgCAHAAAXIAAAdg");
	this.shape_347.setTransform(-77,119.5);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FF0000").s().p("AgnAhQgKgNAAgTQAAgWAOgOQAOgNAVAAQAXAAANAOQAOAOAAAbIhGAAQAAALAHAGQAGAGAJAAQAHAAAEgDQAFgDACgHIAcAEQgFAOgMAHQgMAHgRAAQgbAAgOgQgAgOgXQgGAGAAAKIAqAAQgBgLgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_348.setTransform(-87.6,119.6);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FF0000").s().p("AgzBCIAAiAIAbAAIAAANQAEgGAJgFQAJgFAKAAQATAAAMAOQANAMAAAXQAAAWgNANQgNANgSAAQgJAAgGgDQgIgDgIgHIAAAvgAgQgmQgHAHAAAOQAAAPAHAHQAHAHAKAAQAKABAGgIQAHgGgBgPQAAgPgGgHQgHgHgKAAQgKAAgGAHg");
	this.shape_349.setTransform(-99.2,121.3);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FF0000").s().p("AAyAwIAAg1QAAgNgDgFQgEgFgIAAQgGAAgFADQgFAEgCAGQgDAGAAAMIAAAtIgbAAIAAgyQAAgOgBgEQgCgEgDgCQgDgCgGAAQgGAAgGADQgFADgCAGQgCAGAAAMIAAAuIgdAAIAAhdIAaAAIAAANQAOgPAUAAQAKAAAIAEQAGAEAFAHQAHgHAIgEQAIgEAKAAQALAAAIAFQAJAEAEAIQADAGAAANIAAA7g");
	this.shape_350.setTransform(-115,119.5);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FF0000").s().p("Ag3BBIAAiBIBsAAIAAAXIhOAAIAAAcIBJAAIAAAUIhJAAIAAAkIBRAAIAAAWg");
	this.shape_351.setTransform(-130.8,117.8);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FF0000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDAEQgDADgDAFIgDANIgBASIAAAVQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_352.setTransform(11.3,114.3);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FF0000").s().p("AAhAvQgFgEgEgGQgLAGgKAFQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAIgHQAHgGANgDIAOgCIARgEIAQgDQAAgLgEgEQgEgFgNABQgKgBgFADQgFADgFAFIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHADAIIACAJQAAAFgEADQgEADgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAFAEQAFADAHAAQAIABAIgEQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_353.setTransform(-0.4,114.3);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FF0000").s().p("AgEBEIgKgEIgGgEIgIgHIAAACQAAAHgEADQgDAFgHAAQgFAAgEgFQgEgDAAgHIAAhsQAAgHADgEQAEgFAGAAQAHAAADAFQAEADAAAHIAAAmQAJgHAHgEQAJgEAMAAQAOAAALAGQAKAGAGALQAGAKAAAQQAAALgDAJQgEAKgGAHQgGAHgJADQgJAFgLAAQgGAAgGgCgAgNgIQgGADgEAGQgEAIABAKQgBAPAJAIQAHAIAMAAQAKAAAIgIQAIgJAAgPQAAgJgDgIQgEgGgFgDQgGgEgIgBQgHABgHAEg");
	this.shape_354.setTransform(-13.2,112.5);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FF0000").s().p("AAbBDIgHgJIgYglIgQAOIAAAUQAAAHgEADQgFAFgFAAQgHAAgEgFQgDgDAAgIIAAhqQAAgIADgEQAEgEAHgBQAGAAAEAFQAEAEAAAHIAAA8IAfgdIAJgHQADgDAFAAQAFAAAEAEQADADAAAEQAAAFgLAKIgPALIAdAoIAFAHIABAEQAAAHgEADQgDAEgGAAQgGAAgDgDg");
	this.shape_355.setTransform(-25.9,112.5);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FF0000").s().p("AgmAlQgPgNAAgXQAAgOAHgMQAHgMAMgGQANgHARAAQALAAAKADQAJADAGAEQAHAFADAFQAEAFAAAEQAAAFgEADQgEADgFAAQgEAAgCgBIgGgGQgFgHgGgDQgFgEgJAAQgMAAgIAJQgHAJAAAOQAAAHACAGQACAGADAEQAEAEAGACQAFACAFAAQAJAAAGgDQAGgEAFgHQACgEAEgCQADgDAEAAQAFAAAEAEQADADAAAEQAAAFgDAFQgDAFgHAFQgGAFgKADQgKADgNAAQgZAAgPgOg");
	this.shape_356.setTransform(-38.1,114.3);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FF0000").s().p("AAyBEQgDgBgCgCIgEgGIgDgHIgIgRIg9AAIgHARQgFAKgDAEQgDAEgHAAQgFAAgFgFQgEgDAAgFIABgFIADgJIAnhWIAEgJIAFgJIAHgGQAFgCAGAAQAGAAAEACIAHAGIAFAIIAEAKIAoBWQAFAJAAAFQAAAEgEAEQgFAFgGAAQgEAAgCgCgAgXAPIAtAAIgWg3g");
	this.shape_357.setTransform(-52.2,112.5);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FF0000").s().p("AAXAoQgEgDAAgGIAAgjQAAgLgDgFQgEgGgKAAQgFAAgGAEQgFADgDAGQgBAFAAAMIAAAbQAAAGgDADQgEAEgFAAQgGAAgDgEQgEgDAAgGIAAg9QAAgGAEgDQADgEAFAAQADAAACACIAFAEQABACABAEIAAADQAFgIAIgDQAHgEAKAAQAKAAAHAEQAIAEAEAHQACAEABAEIABAMIAAAnQgBAGgDADQgDAEgFAAQgGAAgDgEg");
	this.shape_358.setTransform(6.9,113.3);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FF0000").s().p("AgIA4QgDgEAAgGIAAg9QAAgGADgDQAEgDAEAAQAFAAAEADQADADAAAGIAAA9QAAAHgDADQgEADgFAAQgEAAgEgDgAgHgoQgEgDAAgFQAAgFAEgCQADgDAEAAQAFAAAEACQADADAAAFQAAAFgDADQgEACgFAAQgEAAgDgCg");
	this.shape_359.setTransform(-1.1,111.8);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FF0000").s().p("AAYA6IgHgIIgUggIgOALIAAARQAAAHgDADQgEADgFABQgGgBgDgDQgDgDAAgHIAAhaQAAgHADgEQADgDAGAAQAGAAADADQADADAAAGIAAA0IAagZIAIgGQADgCAEAAQAFAAADADQADACAAAEQAAAFgKAIIgOAJIAZAjIAFAFIABAFQAAAEgEADQgCAEgGAAQgEAAgCgCg");
	this.shape_360.setTransform(-8,111.8);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FF0000").s().p("AgdAoQgDgDgBgGIAAg7QABgPAMAAQAGAAACAEQADADAAAHQAFgHAEgDQAEgEAHAAQAIAAAIAEQAGADABAGQAAAEgEACQgDADgDAAIgGgCIgKgBQgFAAgDACQgDADgCAFIgDALIAAAQIAAASQAAAGgDADQgEAEgFAAQgGAAgDgEg");
	this.shape_361.setTransform(-16.7,113.3);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FF0000").s().p("AAcApQgEgDgEgGQgJAGgIADQgHADgLAAQgJAAgHgEQgHgDgEgFQgEgGAAgGQAAgJAGgHQAHgFALgCIALgCIAPgDIAOgDQAAgJgDgEQgEgEgLAAQgIAAgFADQgEACgEAEIgEAGQgCACgEAAQgFAAgCgCQgEgDAAgDQAAgGAFgFQAFgGAJgDQAKgEANAAQAQAAAKAEQAJADAEAHQADAHAAAMIAAAMIAAAMQAAAGADAHIACAIQAAADgEADQgDADgFAAQgDAAgEgDgAADAEIgNADQgEABgEADQgDACAAAFQAAAFAEADQAEAEAHAAQAGAAAGgDQAGgDADgEQADgFAAgLIAAgDIgPADg");
	this.shape_362.setTransform(-26.7,113.3);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FF0000").s().p("AgIA3QgEgDAAgIIAAhSIgdAAQgHgBgDgCQgEgCAAgFQAAgEAEgDQADgDAHABIBTAAQAHgBADADQAEADAAAEQAAAFgEACQgDACgHABIgdAAIAABSQAAAIgDADQgEADgGABQgFgBgDgDg");
	this.shape_363.setTransform(-36.9,111.9);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FF0000").s().p("AAYApQgDgDAAgGIAAgDIgJAIQgFAEgGABQgFACgHAAQgJAAgHgEQgIgCgEgHQgEgHAAgMIAAgqQAAgHADgDQAEgDAFAAQAGAAADADQAEADAAAHIAAAhQAAAIABAFQACAFADADQAEADAHAAQAFAAAFgDQAGgDACgGQACgEAAgPIAAgaQAAgHAEgDQADgDAGAAQAFAAAEADQADADAAAHIAAA9QAAAHgDADQgDADgFAAQgFAAgEgDg");
	this.shape_364.setTransform(37.2,122.6);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FF0000").s().p("AAYA6IgHgIIgVgfIgNALIAAARQAAAGgEAEQgEADgEAAQgGAAgDgDQgEgDAAgHIAAhbQAAgIADgDQAEgEAGAAQAFAAAEADQADAEAAAGIAAA0IAbgZIAIgGQACgCAEAAQAFAAADADQADACAAAEQAAAFgKAIIgNAJIAZAjIAEAGIACAEQAAAFgEADQgDADgFAAQgFAAgCgCg");
	this.shape_365.setTransform(27.1,121);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FF0000").s().p("AgTApQgJgDgHgGQgHgGgDgIQgDgIAAgKQAAgJADgIQAEgIAGgGQAGgGAKgDQAJgDAKAAQALAAAJADQAJADAHAGQAHAGADAIQADAIAAAJQAAAKgDAIQgEAIgGAGQgHAGgJADQgJADgLAAQgKAAgJgDgAgMgXQgFACgDAHQgDAHAAAHQAAAIADAHQACAGAGADQAFAEAHAAQALAAAHgHQAGgIAAgNQAAgMgGgIQgHgHgLAAQgGAAgGAEg");
	this.shape_366.setTransform(15.7,122.6);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FF0000").s().p("AgTApQgJgDgHgGQgHgGgDgIQgDgIAAgKQAAgJADgIQAEgIAGgGQAGgGAKgDQAJgDAKAAQALAAAJADQAJADAHAGQAHAGADAIQADAIAAAJQAAAKgDAIQgEAIgGAGQgHAGgJADQgJADgLAAQgKAAgJgDgAgMgXQgFACgDAHQgDAHAAAHQAAAIADAHQACAGAGADQAFAEAHAAQALAAAHgHQAGgIAAgNQAAgMgGgIQgHgHgLAAQgGAAgGAEg");
	this.shape_367.setTransform(4.5,122.6);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FF0000").s().p("AgmA6QgIAAgEgCQgDgCgBgDQgCgEAAgFIAAhVQAAgHAEgEQAEgDAIAAIAkAAQAMAAAKACQAKACAIAGQAVAQAAAfQAAAKgCAJQgCAJgFAHQgEAGgHAGQgFAEgGADQgHACgHABIgQABgAgdAoIAVAAIAJgBIAIgBIAHgEQANgKAAgYQABgRgGgIQgGgJgJgCQgIgCgMAAIgSAAg");
	this.shape_368.setTransform(-7.7,121);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FF0000").s().p("AgJA3QgGgDgBgGQgCgGAAgKIAAgpIgEAAQgEAAgEgCQgCgCAAgEQAAgDACgCQADgCAGAAIADAAIAAgNIAAgJQAAgDACgCIAEgDIAGgCQAFAAADADQACACABADIAAAJIAAAPIAKAAQAFAAADACQACACAAADQAAAFgDABQgEACgHAAIgGAAIAAAnIABAIQABADABABQACACAEAAIAGgBIAGAAQADAAACACQADACgBADQAAAFgGADQgGADgNAAQgKAAgHgEg");
	this.shape_369.setTransform(-22.5,121.1);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FF0000").s().p("AAXAoQgEgDAAgGIAAgkQAAgKgDgGQgDgFgKAAQgGgBgGAEQgFAEgDAFQgBAFAAAMIAAAcQAAAGgEADQgDAEgGAAQgFAAgEgEQgDgDAAgGIAAg+QAAgGADgDQADgDAFAAQAEAAACABQADABACADQABADAAAEIAAACQAHgHAHgEQAHgDAKAAQAKAAAIADQAHAFAEAGQADAEAAAFIABAMIAAAnQAAAGgDADQgEAEgFAAQgGAAgDgEg");
	this.shape_370.setTransform(-31.7,122.6);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FF0000").s().p("AAYApQgDgDAAgGIAAgDQgFAFgEADQgFAEgGABQgFACgHAAQgJAAgHgEQgIgCgEgHQgEgHAAgMIAAgqQAAgHADgDQAEgDAFAAQAGAAADADQAEADAAAHIAAAhQAAAIABAFQACAFADADQAEADAHAAQAFAAAFgDQAGgDACgGQACgEAAgPIAAgaQAAgHAEgDQADgDAGAAQAFAAAEADQADADAAAHIAAA9QAAAHgDADQgDADgFAAQgFAAgEgDg");
	this.shape_371.setTransform(-42.9,122.6);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FF0000").s().p("AgTApQgJgDgHgGQgHgGgDgIQgDgIAAgKQAAgJADgIQAEgIAGgGQAGgGAKgDQAJgDAKAAQALAAAJADQAJADAHAGQAHAGADAIQADAIAAAJQAAAKgDAIQgEAIgGAGQgHAGgJADQgJADgLAAQgKAAgJgDgAgMgXQgFACgDAHQgDAHAAAHQAAAIADAHQACAGAGADQAFAEAHAAQALAAAHgHQAGgIAAgNQAAgMgGgIQgHgHgLAAQgGAAgGAEg");
	this.shape_372.setTransform(-54.2,122.6);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FF0000").s().p("AgNA6QgJgBgHgEQgHgEgGgGIgJgMQgEgHgCgHQgBgIAAgJQAAgNAEgLQAFgLAJgIQAIgIAMgEQAMgEAMAAQAQAAANAGQAMAFAHAJQAHAIAAAHQAAAEgDADQgEADgEAAQgFAAgDgCQgDgCgDgFQgFgJgHgEQgHgEgLAAQgPAAgKALQgKALAAATQAAAOAEAJQAFAJAIAEQAIAFAJAAQAMAAAIgFQAIgGAEgJQACgFACgDQADgDAGAAQAEAAAEADQADADAAAFQAAAFgDAHQgDAGgHAGQgGAGgLAEQgKAEgOAAQgKAAgIgCg");
	this.shape_373.setTransform(-66.6,121);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FF0000").s().p("AAbApQgFgEAAgGIAAgjQAAgLgDgGQgFgFgLAAQgHAAgGADQgGAEgEAGQgCAFAAAMIAAAbQAAAHgDADQgFADgGAAQgGAAgEgDQgEgEAAgGIAAg+QAAgGADgDQAEgDAGAAQAEAAADABIAFAEQACADAAAEIAAADQAHgIAKgDQAHgEAMAAQALAAAJAEQAJADAFAHQACAEABAFIABAMIAAAnQAAAHgEADQgEADgGAAQgGAAgEgDg");
	this.shape_374.setTransform(34.4,112.2);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FF0000").s().p("AAhApIgJgJQgLAGgKADQgIADgMAAQgLAAgIgDQgJgDgFgGQgEgGAAgGQAAgJAIgGQAHgGANgCIANgCIASgDIAQgDQAAgJgEgEQgEgEgMAAQgLAAgFACQgGADgEAEIgFAGQgBACgGAAQgFAAgDgDQgEgCAAgEQAAgFAGgGQAFgFALgEQAMgDAQAAQASAAALADQALAEAFAHQAEAHAAAMIAAAMIgBAMQABAGADAHIACAIQAAAEgEADQgEACgFAAQgFAAgEgDgAADAEIgPADQgFABgEADQgEACAAAFQAAAFAFAEQAEADAIAAQAIAAAIgDQAGgDAEgEQAEgFgBgLIAAgDIgSADg");
	this.shape_375.setTransform(21.6,112.2);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FF0000").s().p("AgmAgQgPgMAAgUQAAgJADgIQAEgIAHgGQAIgGAKgDQALgDAMAAQARAAAMAFQAMAGAFAIQAGAJAAAIQAAAIgGACQgGACgLAAIg3AAQAAAIAEAFQAEAGAGADQAGADAHAAIAJgBQAFgBAEgCIAHgEIAJgGQACgCAEAAQAEAAADACQADACAAADQAAADgDAEQgDAEgGAEQgHADgJADQgJACgMAAQgbAAgPgMgAgQgWQgHAFgBALIAzAAQgBgLgHgGQgHgFgLAAQgKAAgHAGg");
	this.shape_376.setTransform(8.9,112.2);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FF0000").s().p("AgiApQgEgDAAgHIAAg7QAAgPAOAAQAHAAADADQADAEAAAGQAGgGAFgEQAEgDAJAAQAJAAAJADQAIAEAAAFQAAAEgDADQgEADgEAAIgIgCIgKgBQgHAAgDACQgDADgDAFIgDALIgBAQIAAASQAAAHgEADQgEADgGAAQgGAAgEgDg");
	this.shape_377.setTransform(-0.9,112.2);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FF0000").s().p("AgXApQgKgDgIgGQgHgGgEgIQgEgIAAgKQAAgJAEgIQAEgIAHgGQAIgGAKgDQALgDAMAAQANAAAKADQALADAHAGQAIAGAEAIQAEAIAAAJQAAAKgEAIQgEAIgIAGQgHAGgLADQgKADgNAAQgMAAgLgDgAgOgYQgHAEgDAGQgEAHABAHQgBAJAEAGQADAGAHAEQAGADAIAAQANAAAHgHQAIgIAAgNQAAgMgIgIQgHgHgNAAQgHAAgHADg");
	this.shape_378.setTransform(-12.7,112.2);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FF0000").s().p("AA4ApQgEgEAAgGIAAgkIAAgLQgBgEgEgDQgDgDgIAAQgFAAgFACQgFADgDAEQgDAGAAANIAAAdQAAAGgEAEQgEADgHAAQgGAAgDgDQgEgEgBgGIAAgiIgBgNQAAgEgDgDQgEgDgGAAQgOAAgFAHQgEAIgBAMIAAAeQAAAGgDAEQgFADgGAAQgGAAgFgDQgEgEAAgGIAAg+QAAgGAEgDQADgDAGAAQAGAAAFADQADADAAAFIAAACQAIgHAJgDQAIgDAKAAQALAAAIADQAGAEAFAGQAIgGAIgEQAIgDAKAAQAMAAAIAEQAJADAEAHQAEAGAAAMIAAAqQAAAGgEAEQgFADgGAAQgGAAgFgDg");
	this.shape_379.setTransform(-28.7,112.2);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FF0000").s().p("AAgApIgJgJQgKAGgJADQgJADgMAAQgLAAgJgDQgIgDgEgGQgFgGAAgGQAAgJAHgGQAIgGANgCIANgCIASgDIARgDQgBgJgEgEQgEgEgMAAQgKAAgGACQgFADgEAEIgGAGQgCACgFAAQgFAAgDgDQgEgCAAgEQAAgFAGgGQAFgFALgEQALgDARAAQATAAAKADQALAEAFAHQAEAHAAAMIAAAMIgBAMQAAAGADAHIADAIQAAAEgEADQgFACgFAAQgEAAgFgDgAAEAEIgQADQgFABgEADQgEACAAAFQAAAFAEAEQAFADAJAAQAHAAAHgDQAIgDADgEQADgFABgLIAAgDIgSADg");
	this.shape_380.setTransform(-44.5,112.2);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FF0000").s().p("AgaA4QgPgEgKgIQgKgIgGgLQgFgLAAgOQAAgNAFgLQAFgLALgIQAKgIAPgEQAPgEASAAQAPAAAMADQAMADAIAFQAHAEAEAGQAEAFAAAEQAAAFgFADQgEADgGAAQgEAAgDgBQgDgBgCgDIgKgKQgEgDgGgDQgHgCgLAAQgJAAgJADQgIADgGAFQgGAFgDAIQgEAIAAAJQAAAUANALQAMALAVAAQALAAAKgCQAJgCAKgEIAAgTIgYAAQgJAAgEgCQgFgCAAgFQAAgEAEgCQAEgCAGAAIAjAAIALABQAFABADACQACADAAAGIAAAWIgBAHQgBADgDACIgIAEQgOAGgNADQgNACgPAAQgRAAgOgEg");
	this.shape_381.setTransform(-59.5,110.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_102},{t:this.shape_101,p:{x:-50.6,y:114.5}},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_101,p:{x:19.9,y:116}}]},1).to({state:[{t:this.shape_116},{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117}]},1).to({state:[{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122}]},1).to({state:[{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352}]},1).to({state:[{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358}]},1).to({state:[{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374}]},1).wait(1));

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
	this.instance = new lib.cameracard();
	this.instance.parent = this;
	this.instance.setTransform(-62,-72,0.728,0.734);

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

	this.instance_1 = new lib.Gamorean();
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

	this.instance_1 = new lib.Gamorean();
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

	this.instance_1 = new lib.Jango();
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

	this.instance_1 = new lib.Jango();
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

	this.instance_1 = new lib.K2SO();
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

	this.instance_1 = new lib.K2SO();
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

	this.instance_1 = new lib.Phasma();
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

	this.instance_1 = new lib.Phasma();
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

	this.instance_1 = new lib.Greedo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(40.5,56.7,0.622,0.63,0,0,-59.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.622,scaleY:0.63,skewY:-59.400000000000006,x:40.5,y:56.7}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.807,scaleY:0.82,skewY:-21.8,x:7.4,y:19.3}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.74,scaleY:0.74,skewY:0,x:8,y:5}}]},1).wait(1));
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

	this.instance_1 = new lib.Greedo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33.2,49.8,0.811,0.82,0,0,-59.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.811,skewY:-59.400000000000006,x:33.2,y:49.8,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.807,skewY:-21.8,x:7.4,y:19.3,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.77,skewY:0,x:4,y:0,scaleY:0.77}}]},1).wait(1));
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

	this.instance_1 = new lib.Ackbar();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.3,45.3,0.774,0.82,0,0,-53.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.774,skewY:-53.400000000000006,x:28.3,y:45.3,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.783,skewY:-29.5,x:11.5,y:27.3,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.743,skewY:0,x:6,y:6,scaleY:0.744}}]},1).wait(1));
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

	this.instance_1 = new lib.Ackbar();
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

	this.instance_1 = new lib.Tarkin();
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

	this.instance_1 = new lib.Tarkin();
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

	this.instance_1 = new lib.MazKanata();
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

	this.instance_1 = new lib.MazKanata();
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

	this.instance_1 = new lib.RoyalGuard();
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

	this.instance_1 = new lib.RoyalGuard();
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

	this.instance_1 = new lib.Hux();
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

	this.instance_1 = new lib.Hux();
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

	this.instance_1 = new lib.JarJar();
	this.instance_1.parent = this;
	this.instance_1.setTransform(34.5,60.6,0.74,0.65,0,0,-57.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.74,scaleY:0.65,skewY:-57.599999999999994,x:34.5,y:60.6}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.773,scaleY:0.76,skewY:-18.5,x:8.6,y:20.4}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.727,scaleY:0.727,skewY:0,x:12,y:8}}]},1).wait(1));
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

	this.instance_1 = new lib.JarJar();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30.8,58.4,0.831,0.73,0,0,-57.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.831,scaleY:0.73,skewY:-57.599999999999994,x:30.8,y:58.4}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.835,scaleY:0.82,skewY:-18.6,x:4.2,y:15.8}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.727,scaleY:0.727,skewY:0,x:12,y:7}}]},1).wait(1));
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

	this.instance_1 = new lib.Dooku();
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

	this.instance_1 = new lib.Dooku();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33,50.4,0.863,0.82,0,0,-54.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.863,skewY:-54.8,x:33,y:50.4,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.836,skewY:-24.1,x:6.3,y:20.4,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.727,skewY:0,x:7,y:7,scaleY:0.727}}]},1).wait(1));
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


(lib.animenu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(1));

	// Layer_1
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-692.2,273.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:624.6},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1316.8,0,1249.2,547.6);


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
			window.open("memomeamecelebs1.html", "_self");
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
	this.shape_61.graphics.f("#333333").s().p("AgOAPQgFgGAAgJQAAgHAFgGQAHgGAHAAQAJAAAFAGQAHAGgBAHQABAJgHAGQgFAFgJAAQgHAAgHgFg");
	this.shape_61.setTransform(415.7,175.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("AgnBLQgLgHgGgOQgHgNAAgQQAAgRAHgMQAHgOALgHQAKgHAOAAQAHAAAHACQAFACAIAEIAAgaIgPAAIAAgWQAMgBAJgBQAIgDAKgEIAKAAIAAB+QAAAIABACIADACQABABAHAAIAFAAIAAAVIgvABIAAgKQgLAGgGADQgIADgIgBQgMAAgLgGgAgPgEQgEADgEAHQgDAHAAALQABAPAGAKQAGAGAIAAIAGgBIAMgHIAAgkQAAgHgCgDQgBgDgEgDQgFgDgFAAQgFAAgGAEg");
	this.shape_62.setTransform(405,169.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAIgMAOgHQAOgIARAAQATAAANAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgcAAgQgQgAgLgcQgFADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgHgJQgGgIgKAAQgFAAgGAEg");
	this.shape_63.setTransform(390.6,172.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAOgHQAOgIASAAQASAAAOAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgcAAgQgQgAgKgcQgGADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgGgJQgHgIgKAAQgFAAgFAEg");
	this.shape_64.setTransform(376.7,172.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333333").s().p("AAQA2IgQgrIgPArIgeAAIgdhMIgDgIIgDgCIgHAAIAAgWIA6AAIAAAWIgCAAQgFAAgBABQAAAAAAAAQAAAAgBABQAAAAAAABQAAAAAAAAIABAFIAPAuIANgjIgDgLQgCgEgCgCQgCgCgEAAIAAgWIA2AAIAAAWIgFAAIgFABQAAAAgBAAQAAAAAAABQAAAAAAABQAAAAAAAAIABAHIANAlIANglIACgHQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQgCgBgFAAIgCAAIAAgWIAxAAIAAAWIgHAAIgDACIgDAIIgeBMg");
	this.shape_65.setTransform(360.8,172.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#333333").s().p("Ag4BJQgHgGAAgJQgBgGAFgFQAFgFAGAAQAEAAAFADQADABADADIACADIACABQABAAAAAAQABAAAAgBQABAAAAAAQABgBABAAQADgEAEgJIAEgJIglhNIgEgHIgEgCIgJgBIAAgVIBEAAIAAAVIgEAAIgIABQAAAAgBABQAAAAAAAAQAAAAAAABQgBAAAAAAIADAHIAPAoIARgoIACgGQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBQgBgBgHAAIgGAAIAAgVIA7AAIAAAVIgJABIgDABIgEAHIgyBkQgGAQgKAHQgJAGgMAAQgNAAgIgHg");
	this.shape_66.setTransform(344.9,174.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#333333").s().p("AghBQIAAgVIAEAAQAHAAACgBIACgCQACgCAAgGIAAhhIgRAAIAAgVQAUgBATgIIALAAIAAB/IABAHQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQACABAHAAIAEAAIAAAVg");
	this.shape_67.setTransform(334.4,169.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#333333").s().p("AghBQIAAgVIAEAAQAHAAACgBIACgCQABgCABgGIAAhhIgRAAIAAgVQAUgBATgIIALAAIAAB/IABAHQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQACABAHAAIAEAAIAAAVg");
	this.shape_68.setTransform(326.7,169.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAPgHQAOgIARAAQATAAANAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgbAAgRgQgAgLgcQgFADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgHgJQgGgIgKAAQgFAAgGAEg");
	this.shape_69.setTransform(315.8,172.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#333333").s().p("AAJBMIAAgVIAFAAIAKgBIADgDQABgCAAgIIAAggIg3AAIAAAgIABAKQAAAAAAABQABAAAAABQABAAAAABQABAAAAAAIAJABIAGAAIAAAVIhLAAIAAgVIAFAAIAJgBIAEgDIAAgJIAAhSIAAgKQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAAAIgIgBIgHAAIAAgVIBLAAIAAAVIgHAAIgIABQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAQgBACAAAHIAAAbIA3AAIAAgdIgBgHQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAQgCgBgHAAIgGAAIAAgVIBLAAIAAAVIgGAAQgHAAgCABIgDADIAAAJIAABSIABAKIADADQACABAIAAIAEAAIAAAVg");
	this.shape_70.setTransform(299.6,170.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_71.setTransform(277.1,172.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_72.setTransform(264.7,172.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AgnBLQgLgHgGgOQgHgNAAgQQAAgRAHgMQAHgOALgHQALgHAOAAQAHAAAGACQAFACAIAEIAAgaIgPAAIAAgWQAMgBAJgBQAIgDAKgEIAKAAIAAB+QAAAIACACIACACQABABAHAAIAFAAIAAAVIgwABIAAgKQgJAGgHADQgIADgIgBQgMAAgLgGgAgPgEQgEADgDAHQgEAHAAALQABAPAGAKQAFAGAJAAIAGgBIAMgHIAAgkQAAgHgCgDQAAgDgFgDQgFgDgEAAQgHAAgFAEg");
	this.shape_73.setTransform(251.3,169.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#333333").s().p("AAYA2QgGgEgFgGQgLAHgIADQgJADgIAAQgQAAgKgJQgJgJAAgNQgBgHAEgGQADgGAHgFQAHgDAOgEQANgDATgCIAAgIIgBgKQgBgDgDgBQgDgCgEAAIgHABIgEADIgFAHQgDAHgEADQgEADgGAAQgGAAgFgFQgFgEAAgGQAAgIAFgFQAGgIAMgFQANgFAOAAQAPAAALAFQAKAFAFAHQADAHAAAOIAAAmQABAHAAACQABABAAAAQAAABAAAAQABABAAAAQABAAAAABQADABADAAIAIgBIAAAVQgJADgJAAQgJAAgIgDgAgMAMQgFACgDADQgCADAAADQAAAFADADQADADAGAAQAEAAAEgCIAKgGIAAgTQgOACgGADg");
	this.shape_74.setTransform(237.5,172.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#333333").s().p("AgnBLQgKgHgIgOQgGgNAAgQQAAgRAHgMQAHgOAKgHQALgHAOAAQAIAAAGACQAFACAIAEIAAgaIgPAAIAAgWQANgBAIgBQAJgDAJgEIAKAAIAAB+QAAAIABACIACACQACABAHAAIAFAAIAAAVIgvABIAAgKQgLAGgGADQgIADgIgBQgMAAgLgGgAgPgEQgFADgDAHQgCAHAAALQAAAPAGAKQAGAGAIAAIAGgBIAMgHIAAgkQAAgHgCgDQgBgDgEgDQgFgDgFAAQgGAAgFAEg");
	this.shape_75.setTransform(224,169.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_76.setTransform(212.7,169.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AguA4IAAgVIAGAAQAGAAABgBIADgCIAAgIIAAgwIgQAAIAAgVQASgCATgIIAKAAIAAAQQAIgJAHgDQAGgEAGAAQAFAAAFADQAEACACAFQADAEAAAGQAAAGgFAGQgEAGgJAAIgDAAIgIgDIgEgBQgDAAgHAEIAAApQAAAGABABQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIAIABIAFAAIAAAVg");
	this.shape_77.setTransform(203.8,172.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#333333").s().p("AgBBPQgHgDgIgGIgGAJIgYAAIAAiBIgQAAIAAgWQAVgBATgIIALAAIAAA8QAJgHAGgBQAHgDAHAAQASAAANAOQAOAPAAAaQAAAagOAQQgPARgTgBQgJABgHgDgAgBgEIgKAFIAAAhQAAAKABAFQACADAEACQAEADAFAAQAIAAAGgHQAGgJAAgRQAAgQgFgIQgFgGgIAAIgIACg");
	this.shape_78.setTransform(191.1,169.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_79.setTransform(178.3,172.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#333333").s().p("AghBQIAAgVIAEAAQAHAAACgBIACgCIABgIIAAhhIgQAAIAAgVQAUgBAUgIIAKAAIAAB/IABAHQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQACABAHAAIAEAAIAAAVg");
	this.shape_80.setTransform(168.1,169.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_81.setTransform(157.7,172.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("AgmBFQgRgLgLgSQgKgTAAgVQAAgWAKgSQAKgSASgKQARgKAVAAQAVAAAQAJIAEgGIAPAAIAQA2IgVAGQgKgTgJgIQgNgMgOAAQgKAAgJAGQgJAGgFAMQgGALAAAQQAAAWAMARQANARATAAQANAAAMgHQAOgJALgQIARANQgQAWgOAJQgVAOgaAAQgVAAgRgKg");
	this.shape_82.setTransform(143.1,170.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_83.setTransform(461,144.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#333333").s().p("AgnBLQgKgHgIgOQgGgNAAgQQAAgRAHgNQAHgNAKgHQALgHAOAAQAIAAAGACQAFABAIAFIAAgaIgPAAIAAgWQANAAAIgCQAJgCAJgFIALAAIAAB+QAAAIAAACIACACQACABAHAAIAFAAIAAAVIgvACIAAgLQgLAGgGADQgIADgIgBQgMAAgLgGgAgPgEQgEADgEAHQgCAHAAALQAAAPAGAJQAFAIAJgBIAGgBIAMgHIAAgkQAAgHgCgDQgBgDgEgDQgFgDgFAAQgGAAgFAEg");
	this.shape_84.setTransform(447.5,142.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAIgMANgHQAOgIASAAQASAAAOAHQAOAIAIAMQAHANAAAQQAAAZgQAQQgRAQgcAAQgbAAgRgQgAgKgcQgGADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgGgJQgHgIgKAAQgFAAgFAEg");
	this.shape_85.setTransform(425.6,144.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#333333").s().p("AgFBHQgIgCgFgFQgGgFgCgFQgCgFAAgKIAAgzIgRAAIAAgWQAJgCAGgFQAHgGAEgHQADgIACgLIAUAAIAAAlIAjAAIAAAYIgjAAIAAAkQAAAOABAEQACADADACQAFADAGAAQAMAAALgHIAAAXQgKAEgHACQgIACgJAAQgKAAgHgDg");
	this.shape_86.setTransform(413.5,142.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#333333").s().p("AAEA4IAAgVIAIgBQABAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAgHIAAgmQAAgJgBgBQgEgFgFAAQgEAAgFADQgFACgKAGIAAAqQABAIABABQACACAFAAIAEAAIAAAVIhAAAIAAgVIAEAAQAHAAACgBIADgCIAAgHIAAgxIgQAAIAAgWQAUgCARgHIALAAIAAAPQALgJAJgCQAJgEAJAAQAKAAAIAFQAJAEADAHQAEAGAAANIAAAsIABAIIACACIAIABIAGAAIAAAVg");
	this.shape_87.setTransform(400.9,144.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_88.setTransform(386.6,144.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_89.setTransform(376.2,142.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#333333").s().p("AAoA4IAAgVQAHAAABgBIADgCQABgCAAgFIAAgnQAAgHgBgCIgDgEQgDgCgEAAQgEAAgFADQgFACgKAGIAAApQAAAHABABQABABAAAAQAAABABAAQAAAAAAABQABAAAAAAQACABAHAAIAAAVIg7AAIAAgVQAHAAACgBIADgDIAAgIIAAgkQAAgIgBgDQgDgFgGAAIgGABQgEABgDACIgJAFIgCACIAAApIAAAIIADADIAGABIADAAIAAAVIg/AAIAAgVIAEAAQAHAAABgBQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBQABgBAAgHIAAgvIgQAAIAAgWQAUgCARgHIAKAAIAAAPQAJgHAKgEQAKgEAKAAQAHAAAGACQAFACAEADQAEADADAFQAKgHAKgEQAKgEAKAAQAJAAAHAEQAHADAEAFQAFAGABAGIABALIAAAsQAAAGABABQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQABABAHAAIAEAAIAAAVg");
	this.shape_90.setTransform(361,144.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_91.setTransform(345.8,142.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_92.setTransform(335.2,144.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAIgMANgHQAOgIASAAQASAAAOAHQAOAIAIAMQAHANAAAQQAAAZgQAQQgRAQgcAAQgbAAgRgQgAgKgcQgGADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgGgJQgHgIgKAAQgFAAgFAEg");
	this.shape_93.setTransform(321.6,144.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("AAFA4IAAgVIAIgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAgHIAAgmQAAgJgCgBQgDgFgFAAQgFAAgEADQgGACgJAGIAAAqQAAAIACABQABACAGAAIAEAAIAAAVIg/AAIAAgVIACAAQAIAAACgBIADgCIABgHIAAgxIgQAAIAAgWQATgCARgHIALAAIAAAPQAMgJAIgCQAJgEAIAAQALAAAIAFQAJAEADAHQAEAGAAANIAAAsIAAAIIAEACIAHABIAGAAIAAAVg");
	this.shape_94.setTransform(307.3,144.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAIgMAOgHQAOgIARAAQATAAANAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgcAAgQgQgAgLgcQgFADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgHgJQgGgIgKAAQgFAAgGAEg");
	this.shape_95.setTransform(292.5,144.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_96.setTransform(279.2,144.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("AAFA4IAAgVIAIgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAgHIAAgmQAAgJgBgBQgDgFgGAAQgEAAgFADQgFACgKAGIAAAqQABAIABABQACACAFAAIAEAAIAAAVIg/AAIAAgVIADAAQAHAAACgBIADgCIAAgHIAAgxIgPAAIAAgWQATgCARgHIALAAIAAAPQALgJAJgCQAIgEAJAAQALAAAIAFQAJAEADAHQAEAGAAANIAAAsIAAAIIADACIAIABIAGAAIAAAVg");
	this.shape_97.setTransform(257.6,144.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_98.setTransform(243.2,144.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#333333").s().p("AgfA2QgHgDgFgEQgEgEgCgGQgCgGAAgJIAAgsIgBgIIgCgCIgIgBIgGAAIAAgVIA0gBIAABGIAAAKQABACADACQACABAEAAQAFAAAGgCIAMgIIAAgqIAAgHIgDgDIgGgBIgHAAIAAgVIA0gBIAABNIAAAIQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAQABABAGAAIAGAAIAAAVIgwABIAAgNQgKAHgJAEQgJADgKAAQgIAAgGgCg");
	this.shape_99.setTransform(229.3,144.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#333333").s().p("AgBBPQgHgDgIgGIgGAJIgYAAIAAiBIgQAAIAAgWQAVgBATgIIALAAIAAA8QAJgHAGgBQAHgDAHAAQASAAANAOQAOAQAAAZQAAAagOAQQgPARgUgBQgIABgHgDgAgBgEQgFACgFADIAAAiQAAAKABADQACAEAEACQAEADAEAAQAKAAAFgHQAHgKgBgQQABgQgGgIQgFgGgIAAIgIACg");
	this.shape_100.setTransform(214.8,142.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#333333").s().p("AAEA4IAAgVIAJgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAgHIAAgmQAAgJgCgBQgDgFgFAAQgFAAgEADQgGACgIAGIAAAqQAAAIABABQABACAHAAIADAAIAAAVIg/AAIAAgVIACAAQAIAAACgBIADgCIABgHIAAgxIgQAAIAAgWQATgCARgHIAKAAIAAAPQANgJAIgCQAJgEAIAAQALAAAJAFQAHAEAEAHQAEAGAAANIAAAsIAAAIIAEACIAHABIAFAAIAAAVg");
	this.shape_101.setTransform(193.5,144.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#333333").s().p("AgfA2QgHgDgFgEQgEgEgCgGQgCgGAAgJIAAgsIgBgIIgCgCIgIgBIgGAAIAAgVIA0gBIAABGIAAAKQABACADACQACABAEAAQAFAAAGgCIAMgIIAAgqIAAgHIgDgDIgGgBIgHAAIAAgVIA0gBIAABNIAAAIQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAQABABAGAAIAGAAIAAAVIgwABIAAgNQgKAHgJAEQgJADgKAAQgIAAgGgCg");
	this.shape_102.setTransform(178.3,144.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_103.setTransform(157.5,144.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_104.setTransform(145.1,144.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#333333").s().p("AAFA4IAAgVIAIgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAgHIAAgmQAAgJgBgBQgDgFgGAAQgFAAgEADQgFACgKAGIAAAqQAAAIACABQACACAFAAIAEAAIAAAVIg/AAIAAgVIADAAQAHAAACgBIADgCIAAgHIAAgxIgPAAIAAgWQATgCARgHIALAAIAAAPQAMgJAIgCQAJgEAIAAQALAAAIAFQAJAEADAHQAEAGAAANIAAAsIAAAIIADACIAIABIAGAAIAAAVg");
	this.shape_105.setTransform(131.2,144.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_106.setTransform(116.9,144.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_107.setTransform(106.5,142.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#333333").s().p("AgkBPIAAgVIAEAAQAHAAACgBIAEgEQABgCAAgHIAAhZQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAIgEgBQgGAAgGAEQgIAFgFAHIgJASIgUgHIASg2IAPAAIABAFIBWAAIACgFIAOAAIATA2IgVAHIgJgSQgGgIgHgEQgGgEgGAAIgEABIgBAGIAABXIABAKIACADIAEABIAMABIAAAVg");
	this.shape_108.setTransform(94.5,142.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FF0000").s().p("AgRBsQgGgIAAgMQAAgMAGgJQAGgIAKgBQAKAAAHAJQAGAIAAALQAAAMgHAJQgGAJgKAAQgKAAgGgIgAgEArQAAAAgBgBQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgFQAAgIgKg/IgHg3QAAgLAHgGQAHgIAMAAQAMAAAGAIQAHAIAAALQAAAGgLBDIgHAyIAAAGIgEACg");
	this.shape_109.setTransform(380,110.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FF0000").s().p("AgmBKQgSgYAAgxQgBgvASgZQARgaAbAAQAXAAAPAVQAPAWAAAnIAAANIg/AAIAAA5QAAALAFAHQADAGAHAAQALAAAGgJQAGgJABgQQAAgIABgCQACgBAIAAQAJAAABABQACABABAHQAAAVgOARQgPARgXAAQgZAAgTgYgAgFhCIAAAvIASAAIAAgvQAAgNgJAAQgJAAAAANg");
	this.shape_110.setTransform(357,111.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FF0000").s().p("AgPBzQgKgJAAgSIAAiRIgFAAIgDgBIgBgDIAAgKIABgEIADgBQALgBAKgKQAJgKACgLIACgFQAAAAAAAAQABAAAAgBQABAAABAAQAAAAABAAIAJAAQAEAAAAAFIAAAhIAJAAQAFAAAAAEIAAAKQAAAFgFAAIgJAAIAACRQAAAHAHADQADACABACIABAIIgBAEIgDABg");
	this.shape_111.setTransform(333.9,110);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FF0000").s().p("AAUBhQgIgHAAgMIAAiEQAAgMgJAAQgGAAgHAHIAACCQABAFAFADQACABAAAFIAAAHQAAAFgGAAIgzAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAgEIAAgGQAAgDADgCQADgDABgCQABgCAAgHIAAiIQAAgFgFgDQgDgBAAgEIAAgGQABgFAEAAIAtAAIAEABIAAAEIAAAOQARgVAVAAQAPAAAHAJQAIAKAAAPIAACFQAAAEADADQAEACAAAIQAAAGgBABQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAgBAAg");
	this.shape_112.setTransform(310.2,111.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FF0000").s().p("AgmBKQgTgYABgxQAAgvARgZQAQgaAcAAQAYAAAOAVQAPAWAAAnIAAANIg/AAIAAA5QAAALAEAHQAEAGAHAAQAKAAAHgJQAGgJABgQQAAgIABgCQACgBAIAAQAIAAADABQACABAAAHQgBAVgOARQgOARgXAAQgZAAgTgYgAgFhCIAAAvIASAAIAAgvQAAgNgJAAQgJAAAAANg");
	this.shape_113.setTransform(283.9,111.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FF0000").s().p("AgaBxQgEAAAAgEIAAgIQAAgFAEgCIADgCIABgGIAAisQAAgFgDgCQgFgDAAgFIAAgHQAAgFAFABIArAAIAFAAQABABAAAEIAADDQAAAHAEABQADACAAADIAAAIQAAAEgGAAg");
	this.shape_114.setTransform(260.9,110.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FF0000").s().p("AgmBKQgSgYgBgxQAAgvARgZQASgaAaAAQAYAAAPAVQAOAWAAAnIAAANIg+AAIAAA5QAAALAFAHQADAGAHAAQALAAAGgJQAHgJAAgQQAAgIACgCQABgBAJAAQAHAAACABQACABAAAHQABAVgOARQgPARgXAAQgaAAgSgYgAgFhCIAAAvIASAAIAAgvQAAgNgJAAQgJAAAAANg");
	this.shape_115.setTransform(237.9,111.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FF0000").s().p("AgiBJQgPgYAAguQAAghAIgWQAIgXALgLQAMgLAQAAQAVAAALANQAMAOAAASQAAAJgEAHQgEAGgIAAQgIAAgFgGQgEgGAAgJIABgKIABgJQAAgEgCgDQgDgCgEAAQgDAAgDADQgCADAAADIAACHQAAAFADAEQACAEAGABQAHgBAEgIQADgJABgOIAAgDQAAgIACgBQADgCAGAAQAHAAABACQACACAAAHQAAAWgLAQQgLAQgVAAQgYAAgQgZg");
	this.shape_116.setTransform(213.3,111.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FF0000").s().p("AAABgQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgBAAgFIABgIIAEgEQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBIAAgDIgJgeIgKASQgHAMAAADQABADADACQADABAAADIAAAFIAAAHQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAgBAAIgbAAIgDgBIAAgEIAAgIQAAgDACgBQAGgDACgEIAag4IgchWQgCgEgEgDIgDgDQgBgBAAgJQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIA0AAIADAAQACABAAAFIAAAEQAAAFgDABQgDADAAADIAAACIAJAdIAJgSIACgCQAFgKABgEQAAAAgBAAQAAgBAAAAQgBgBAAAAQgBgBgBAAIgDgCIAAgIQAAgCAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIAcAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAIAAAHIAAAHQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQgDACgCAEIgcA4IAeBYQABADAEADQADACAAAEIAAAHIgBAEIgEABg");
	this.shape_117.setTransform(188.5,111.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FF0000").s().p("AgyBxQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgCgCAAgHQABgGAEgCQAIgDAAgGIAAiuQAAgCgGgDQgFgCAAgBQgBgDAAgGQAAgFABgBQABgBAEAAIBYAAIAGABIACAFIAHAlIABADQgBAEgGAAQgIAAgCgCQgDgBgDgIQgEgNgDgEQgDgFgEAAIgJAAIAABQIAJAAQAEAAACgCQACgBABgGIACgMQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQALAAACABQABABAAAGIAAAuQAAAEgBACQgCABgHAAQgFAAgCgBQgCgDgBgHQgCgIgBgBQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAIgLAAIAABhIAHAAQAHAAADgDQACgFAGgSQACgHADgDQADgCAGAAQAJAAgBAGIAAAEIgGAhIgCAKQAAABgGAAg");
	this.shape_118.setTransform(163.6,110.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.nextlevel},{t:this.instance}]}).wait(1));

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

	// Actions
	this.button_1 = new lib.cerrar();
	this.button_1.name = "button_1";
	this.button_1.parent = this;
	this.button_1.setTransform(971.9,-36.3,2,2,0,0,0,19.4,20.3);
	this.button_1._off = true;
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.cerrar(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(1).to({_off:false},0).wait(1));

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

	this.instance = new lib.animenu();
	this.instance.parent = this;
	this.instance.setTransform(382.6,182.6,1,1,0,0,0,624.6,273.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance}]},1).wait(1));

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

	// huerta1_mc
	this.huerta1_mc = new lib.huerta1();
	this.huerta1_mc.name = "huerta1_mc";
	this.huerta1_mc.parent = this;
	this.huerta1_mc.setTransform(364.8,247.2,1,1,0,0,0,68.4,74);

	this.timeline.addTween(cjs.Tween.get(this.huerta1_mc).wait(2));

	// huerta2_mc
	this.huerta2_mc = new lib.huerta2();
	this.huerta2_mc.name = "huerta2_mc";
	this.huerta2_mc.parent = this;
	this.huerta2_mc.setTransform(1081.3,75.7,1,1,0,0,0,68.4,74);

	this.timeline.addTween(cjs.Tween.get(this.huerta2_mc).wait(2));

	// iturbide1_mc
	this.iturbide1_mc = new lib.iturbide1();
	this.iturbide1_mc.name = "iturbide1_mc";
	this.iturbide1_mc.parent = this;
	this.iturbide1_mc.setTransform(218.8,248.6,1,1,0,0,0,65,74.4);

	this.timeline.addTween(cjs.Tween.get(this.iturbide1_mc).wait(2));

	// iturbide2_mc
	this.iturbide2_mc = new lib.iturbide2();
	this.iturbide2_mc.name = "iturbide2_mc";
	this.iturbide2_mc.parent = this;
	this.iturbide2_mc.setTransform(934.7,76.7,1,1,0,0,0,65,75);

	this.timeline.addTween(cjs.Tween.get(this.iturbide2_mc).wait(2));

	// villa2_mc
	this.villa2_mc = new lib.villa2();
	this.villa2_mc.name = "villa2_mc";
	this.villa2_mc.parent = this;
	this.villa2_mc.setTransform(363.4,74.5,1,1,0,0,0,67,72.8);

	this.timeline.addTween(cjs.Tween.get(this.villa2_mc).wait(2));

	// villa1_mc
	this.villa1_mc = new lib.villa1();
	this.villa1_mc.name = "villa1_mc";
	this.villa1_mc.parent = this;
	this.villa1_mc.setTransform(221.2,73.7,1,1,0,0,0,67,72);

	this.timeline.addTween(cjs.Tween.get(this.villa1_mc).wait(2));

	// ana2_mc
	this.ana2_mc = new lib.santaana2();
	this.ana2_mc.name = "ana2_mc";
	this.ana2_mc.parent = this;
	this.ana2_mc.setTransform(508.9,420.1,1,1,0,0,0,70.3,72);

	this.timeline.addTween(cjs.Tween.get(this.ana2_mc).wait(2));

	// ana1_mc
	this.ana1_mc = new lib.santaana1();
	this.ana1_mc.name = "ana1_mc";
	this.ana1_mc.parent = this;
	this.ana1_mc.setTransform(723.2,175);

	this.timeline.addTween(cjs.Tween.get(this.ana1_mc).wait(2));

	// moctezuma2_mc
	this.moctezuma2_mc = new lib.moctezuma2();
	this.moctezuma2_mc.name = "moctezuma2_mc";
	this.moctezuma2_mc.parent = this;
	this.moctezuma2_mc.setTransform(1079.3,249.5,1,1,0,0,0,66.4,74.5);

	this.timeline.addTween(cjs.Tween.get(this.moctezuma2_mc).wait(2));

	// moctezuma1_mc
	this.moctezuma1_mc = new lib.moctezuma1();
	this.moctezuma1_mc.name = "moctezuma1_mc";
	this.moctezuma1_mc.parent = this;
	this.moctezuma1_mc.setTransform(647.2,249.7,1,1,0,0,0,66.4,75);

	this.timeline.addTween(cjs.Tween.get(this.moctezuma1_mc).wait(2));

	// victoria1_mc
	this.victoria1_mc = new lib.victoria1();
	this.victoria1_mc.name = "victoria1_mc";
	this.victoria1_mc.parent = this;
	this.victoria1_mc.setTransform(438.6,175);

	this.timeline.addTween(cjs.Tween.get(this.victoria1_mc).wait(2));

	// victoria2_mc
	this.victoria2_mc = new lib.victoria2();
	this.victoria2_mc.name = "victoria2_mc";
	this.victoria2_mc.parent = this;
	this.victoria2_mc.setTransform(869.7,348.1);

	this.timeline.addTween(cjs.Tween.get(this.victoria2_mc).wait(2));

	// morelos2_mc
	this.morelos2_mc = new lib.morelos2();
	this.morelos2_mc.name = "morelos2_mc";
	this.morelos2_mc.parent = this;
	this.morelos2_mc.setTransform(209.2,422.5,1,1,0,0,0,55,74.4);

	this.timeline.addTween(cjs.Tween.get(this.morelos2_mc).wait(2));

	// morelos1_mc
	this.morelos1_mc = new lib.morelos1();
	this.morelos1_mc.name = "morelos1_mc";
	this.morelos1_mc.parent = this;
	this.morelos1_mc.setTransform(11.2,349.7);

	this.timeline.addTween(cjs.Tween.get(this.morelos1_mc).wait(2));

	// obregon2_mc
	this.obregon2_mc = new lib.obregon2();
	this.obregon2_mc.name = "obregon2_mc";
	this.obregon2_mc.parent = this;
	this.obregon2_mc.setTransform(81.5,77.1,1,1,0,0,0,70.3,75.4);

	this.timeline.addTween(cjs.Tween.get(this.obregon2_mc).wait(2));

	// obregon1_mc
	this.obregon1_mc = new lib.obregon1();
	this.obregon1_mc.name = "obregon1_mc";
	this.obregon1_mc.parent = this;
	this.obregon1_mc.setTransform(651.1,422.5,1,1,0,0,0,70.3,74.4);

	this.timeline.addTween(cjs.Tween.get(this.obregon1_mc).wait(2));

	// diaz1_mc
	this.diaz1_mc = new lib.porfirio1();
	this.diaz1_mc.name = "diaz1_mc";
	this.diaz1_mc.parent = this;
	this.diaz1_mc.setTransform(646.3,73.7,1,1,0,0,0,65.5,72);

	this.timeline.addTween(cjs.Tween.get(this.diaz1_mc).wait(2));

	// diaz2_mc
	this.diaz2_mc = new lib.porfirio2();
	this.diaz2_mc.name = "diaz2_mc";
	this.diaz2_mc.parent = this;
	this.diaz2_mc.setTransform(76.7,247.5,1,1,0,0,0,65.5,72.8);

	this.timeline.addTween(cjs.Tween.get(this.diaz2_mc).wait(2));

	// zapata2_mc
	this.zapata2_mc = new lib.zapata2();
	this.zapata2_mc.name = "zapata2_mc";
	this.zapata2_mc.parent = this;
	this.zapata2_mc.setTransform(371.4,420.5,1,1,0,0,0,75,72.4);

	this.timeline.addTween(cjs.Tween.get(this.zapata2_mc).wait(2));

	// zapata1_mc
	this.zapata1_mc = new lib.zapata1();
	this.zapata1_mc.name = "zapata1_mc";
	this.zapata1_mc.parent = this;
	this.zapata1_mc.setTransform(798,74,1,1,0,0,0,75,72);

	this.timeline.addTween(cjs.Tween.get(this.zapata1_mc).wait(2));

	// hidalgo2_mc
	this.hidalgo2_mc = new lib.hidalgo2();
	this.hidalgo2_mc.name = "hidalgo2_mc";
	this.hidalgo2_mc.parent = this;
	this.hidalgo2_mc.setTransform(1012.9,348.1);

	this.timeline.addTween(cjs.Tween.get(this.hidalgo2_mc).wait(2));

	// hidalgo1_mc
	this.hidalgo1_mc = new lib.hidago1();
	this.hidalgo1_mc.name = "hidalgo1_mc";
	this.hidalgo1_mc.parent = this;
	this.hidalgo1_mc.setTransform(507,74,1,1,0,0,0,68.4,72);

	this.timeline.addTween(cjs.Tween.get(this.hidalgo1_mc).wait(2));

	// madero2_mc
	this.madero2_mc = new lib.madero2();
	this.madero2_mc.name = "madero2_mc";
	this.madero2_mc.parent = this;
	this.madero2_mc.setTransform(924.8,247.4,1,1,0,0,0,55.1,72.9);

	this.timeline.addTween(cjs.Tween.get(this.madero2_mc).wait(2));

	// madero1_mc
	this.madero1_mc = new lib.madero1();
	this.madero1_mc.name = "madero1_mc";
	this.madero1_mc.parent = this;
	this.madero1_mc.setTransform(723.2,348.1);

	this.timeline.addTween(cjs.Tween.get(this.madero1_mc).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(18,5.4,1135.6,516.7);


// stage content:
(lib.memomexstarwars3 = function(mode,startPosition,loop) {
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
			window.open("memomeamecelebs1.html", "_self");
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
	this.instance_1 = new lib.Ackbar();
	this.instance_1.parent = this;
	this.instance_1.setTransform(243.3,204.9,1.2,1.2,3.7);

	this.instance_2 = new lib.JarJar();
	this.instance_2.parent = this;
	this.instance_2.setTransform(859.5,300.4,1.2,1.2,-17.2);

	this.instance_3 = new lib.Greedo();
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
		{src:"images/memomexstarwars3_atlas_.png", id:"memomexstarwars3_atlas_"}
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