(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"game5_atlas_1", frames: [[946,1101,733,456],[946,0,1011,497],[1681,1355,333,207],[1681,1101,340,252],[0,0,944,937],[0,939,944,937],[946,1559,443,101],[1748,957,160,122],[1748,499,220,275],[1391,1564,361,72],[946,499,800,600],[1894,776,74,74],[1748,776,144,179]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_22 = function() {
	this.initialize(ss["game5_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["game5_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["game5_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["game5_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["game5_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["game5_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["game5_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.blaster = function() {
	this.initialize(ss["game5_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.empireship = function() {
	this.initialize(ss["game5_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.ligthsaber = function() {
	this.initialize(ss["game5_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.spacio3 = function() {
	this.initialize(ss["game5_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.stop = function() {
	this.initialize(ss["game5_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.xwing = function() {
	this.initialize(ss["game5_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_22();
	this.instance.setTransform(67.95,3.1,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_21();
	this.instance_1.setTransform(-1.5,-1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1.5,-1.5,505.5,248.5), null);


(lib.stop_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.blaster();
	this.instance.setTransform(-21,0,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.stop();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stop_1, new cjs.Rectangle(-21,0,142.4,108.6), null);


(lib.space1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.spacio3();
	this.instance.setTransform(0,0,1,1.1475);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.space1, new cjs.Rectangle(0,0,800,688.5), null);


(lib.lasersito = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CC00").ss(5,1,1).p("AGlAGIAAg8AGliIIAAh/AGfEIIAAilAmeAGIAAg8AmeiIIAAh/AmkEIIAAil");
	this.shape.setTransform(42.05,26.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00CC00").ss(5,1,1).p("AGliIIAAh/AGlAGIAAg8AGfEIIAAilAmeiIIAAh/AmeAGIAAg8AmkEIIAAil");
	this.shape_1.setTransform(42.05,26.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,89.1,57.8);


(lib.equis = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990066").s().p("AATAoQgHgDgJgKIgGgHIAAAAIgKAMQgFAFgHABQgHAAgFgDQgGgEgCgIQgBgIACgIQACgGAGgEIAAgBQgIgHgBgIQgBgHAEgGQAEgGAGgBQAMgEATAPIABACIANgGQAIgDAFAAQAIABAFAHQAEAHgBAIQgBAIgGAFQAIAHACAGQACAFgBAGQgCAGgEAEQgGAGgIAAIgHgBg");
	this.shape.setTransform(-0.1779,-0.4225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.equis, new cjs.Rectangle(-4.8,-4.5,9.3,8.2), null);


(lib.box = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {muerte:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AjajeIG1AAIAAG9Im1AAg");
	this.shape.setTransform(21.85,22.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990066").s().p("AjaDfIAAm9IG1AAIAAG9g");
	this.shape_1.setTransform(21.85,22.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,45.7,46.6);


(lib.aimalos = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_1 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_2 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_3 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_4 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_5 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_6 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_7 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_8 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_9 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_10 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_11 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_12 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_13 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_14 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_15 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_16 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_17 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_18 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_19 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_20 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_21 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_22 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_23 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_24 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_25 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_26 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_27 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_28 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_29 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_30 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_31 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_32 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_33 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_34 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_35 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_36 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_37 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_38 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_39 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_40 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_41 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_42 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_43 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_44 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_45 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_46 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_47 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_48 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_49 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_50 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_51 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_52 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_53 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_54 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_55 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_56 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_57 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_58 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_59 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_60 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_61 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_62 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_63 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_64 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_65 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_66 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_67 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_68 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_69 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_70 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_71 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_72 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_73 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_74 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_75 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_76 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_77 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_78 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_79 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_80 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_81 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_82 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_83 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_84 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_85 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_86 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_87 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_88 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_89 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_90 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_91 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_92 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_93 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_94 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_95 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_96 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_97 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_98 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_99 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_100 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_101 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_102 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_103 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_104 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_105 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_106 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_107 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_108 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_109 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_110 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_111 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_112 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_113 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_114 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_115 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_116 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_117 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_118 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_119 = function() {
		raiz.enemy1.x += speedm1
		raiz.enemy2.x += speedm1
		raiz.enemy3.x += speedm1
	}
	this.frame_120 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_121 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_122 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_123 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_124 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_125 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_126 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_127 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_128 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_129 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_130 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_131 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_132 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_133 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_134 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_135 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_136 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_137 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_138 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_139 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_140 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_141 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_142 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_143 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_144 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_145 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_146 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_147 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_148 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_149 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_150 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_151 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_152 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_153 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_154 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_155 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_156 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_157 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_158 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_159 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_160 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_161 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_162 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_163 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_164 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_165 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_166 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_167 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_168 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_169 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_170 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_171 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_172 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_173 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_174 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_175 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_176 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_177 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_178 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_179 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_180 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_181 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_182 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_183 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_184 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_185 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_186 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_187 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_188 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_189 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_190 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_191 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_192 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_193 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_194 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_195 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_196 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_197 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_198 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_199 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_200 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_201 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_202 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_203 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_204 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_205 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_206 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_207 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_208 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_209 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_210 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_211 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_212 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_213 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_214 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_215 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_216 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_217 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_218 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_219 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_220 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_221 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_222 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_223 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_224 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_225 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_226 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_227 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_228 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_229 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_230 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_231 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_232 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_233 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_234 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_235 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_236 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_237 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_238 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}
	this.frame_239 = function() {
		raiz.enemy1.x -= speedm1
		raiz.enemy2.x -= speedm1
		raiz.enemy3.x -= speedm1
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(1).call(this.frame_18).wait(1).call(this.frame_19).wait(1).call(this.frame_20).wait(1).call(this.frame_21).wait(1).call(this.frame_22).wait(1).call(this.frame_23).wait(1).call(this.frame_24).wait(1).call(this.frame_25).wait(1).call(this.frame_26).wait(1).call(this.frame_27).wait(1).call(this.frame_28).wait(1).call(this.frame_29).wait(1).call(this.frame_30).wait(1).call(this.frame_31).wait(1).call(this.frame_32).wait(1).call(this.frame_33).wait(1).call(this.frame_34).wait(1).call(this.frame_35).wait(1).call(this.frame_36).wait(1).call(this.frame_37).wait(1).call(this.frame_38).wait(1).call(this.frame_39).wait(1).call(this.frame_40).wait(1).call(this.frame_41).wait(1).call(this.frame_42).wait(1).call(this.frame_43).wait(1).call(this.frame_44).wait(1).call(this.frame_45).wait(1).call(this.frame_46).wait(1).call(this.frame_47).wait(1).call(this.frame_48).wait(1).call(this.frame_49).wait(1).call(this.frame_50).wait(1).call(this.frame_51).wait(1).call(this.frame_52).wait(1).call(this.frame_53).wait(1).call(this.frame_54).wait(1).call(this.frame_55).wait(1).call(this.frame_56).wait(1).call(this.frame_57).wait(1).call(this.frame_58).wait(1).call(this.frame_59).wait(1).call(this.frame_60).wait(1).call(this.frame_61).wait(1).call(this.frame_62).wait(1).call(this.frame_63).wait(1).call(this.frame_64).wait(1).call(this.frame_65).wait(1).call(this.frame_66).wait(1).call(this.frame_67).wait(1).call(this.frame_68).wait(1).call(this.frame_69).wait(1).call(this.frame_70).wait(1).call(this.frame_71).wait(1).call(this.frame_72).wait(1).call(this.frame_73).wait(1).call(this.frame_74).wait(1).call(this.frame_75).wait(1).call(this.frame_76).wait(1).call(this.frame_77).wait(1).call(this.frame_78).wait(1).call(this.frame_79).wait(1).call(this.frame_80).wait(1).call(this.frame_81).wait(1).call(this.frame_82).wait(1).call(this.frame_83).wait(1).call(this.frame_84).wait(1).call(this.frame_85).wait(1).call(this.frame_86).wait(1).call(this.frame_87).wait(1).call(this.frame_88).wait(1).call(this.frame_89).wait(1).call(this.frame_90).wait(1).call(this.frame_91).wait(1).call(this.frame_92).wait(1).call(this.frame_93).wait(1).call(this.frame_94).wait(1).call(this.frame_95).wait(1).call(this.frame_96).wait(1).call(this.frame_97).wait(1).call(this.frame_98).wait(1).call(this.frame_99).wait(1).call(this.frame_100).wait(1).call(this.frame_101).wait(1).call(this.frame_102).wait(1).call(this.frame_103).wait(1).call(this.frame_104).wait(1).call(this.frame_105).wait(1).call(this.frame_106).wait(1).call(this.frame_107).wait(1).call(this.frame_108).wait(1).call(this.frame_109).wait(1).call(this.frame_110).wait(1).call(this.frame_111).wait(1).call(this.frame_112).wait(1).call(this.frame_113).wait(1).call(this.frame_114).wait(1).call(this.frame_115).wait(1).call(this.frame_116).wait(1).call(this.frame_117).wait(1).call(this.frame_118).wait(1).call(this.frame_119).wait(1).call(this.frame_120).wait(1).call(this.frame_121).wait(1).call(this.frame_122).wait(1).call(this.frame_123).wait(1).call(this.frame_124).wait(1).call(this.frame_125).wait(1).call(this.frame_126).wait(1).call(this.frame_127).wait(1).call(this.frame_128).wait(1).call(this.frame_129).wait(1).call(this.frame_130).wait(1).call(this.frame_131).wait(1).call(this.frame_132).wait(1).call(this.frame_133).wait(1).call(this.frame_134).wait(1).call(this.frame_135).wait(1).call(this.frame_136).wait(1).call(this.frame_137).wait(1).call(this.frame_138).wait(1).call(this.frame_139).wait(1).call(this.frame_140).wait(1).call(this.frame_141).wait(1).call(this.frame_142).wait(1).call(this.frame_143).wait(1).call(this.frame_144).wait(1).call(this.frame_145).wait(1).call(this.frame_146).wait(1).call(this.frame_147).wait(1).call(this.frame_148).wait(1).call(this.frame_149).wait(1).call(this.frame_150).wait(1).call(this.frame_151).wait(1).call(this.frame_152).wait(1).call(this.frame_153).wait(1).call(this.frame_154).wait(1).call(this.frame_155).wait(1).call(this.frame_156).wait(1).call(this.frame_157).wait(1).call(this.frame_158).wait(1).call(this.frame_159).wait(1).call(this.frame_160).wait(1).call(this.frame_161).wait(1).call(this.frame_162).wait(1).call(this.frame_163).wait(1).call(this.frame_164).wait(1).call(this.frame_165).wait(1).call(this.frame_166).wait(1).call(this.frame_167).wait(1).call(this.frame_168).wait(1).call(this.frame_169).wait(1).call(this.frame_170).wait(1).call(this.frame_171).wait(1).call(this.frame_172).wait(1).call(this.frame_173).wait(1).call(this.frame_174).wait(1).call(this.frame_175).wait(1).call(this.frame_176).wait(1).call(this.frame_177).wait(1).call(this.frame_178).wait(1).call(this.frame_179).wait(1).call(this.frame_180).wait(1).call(this.frame_181).wait(1).call(this.frame_182).wait(1).call(this.frame_183).wait(1).call(this.frame_184).wait(1).call(this.frame_185).wait(1).call(this.frame_186).wait(1).call(this.frame_187).wait(1).call(this.frame_188).wait(1).call(this.frame_189).wait(1).call(this.frame_190).wait(1).call(this.frame_191).wait(1).call(this.frame_192).wait(1).call(this.frame_193).wait(1).call(this.frame_194).wait(1).call(this.frame_195).wait(1).call(this.frame_196).wait(1).call(this.frame_197).wait(1).call(this.frame_198).wait(1).call(this.frame_199).wait(1).call(this.frame_200).wait(1).call(this.frame_201).wait(1).call(this.frame_202).wait(1).call(this.frame_203).wait(1).call(this.frame_204).wait(1).call(this.frame_205).wait(1).call(this.frame_206).wait(1).call(this.frame_207).wait(1).call(this.frame_208).wait(1).call(this.frame_209).wait(1).call(this.frame_210).wait(1).call(this.frame_211).wait(1).call(this.frame_212).wait(1).call(this.frame_213).wait(1).call(this.frame_214).wait(1).call(this.frame_215).wait(1).call(this.frame_216).wait(1).call(this.frame_217).wait(1).call(this.frame_218).wait(1).call(this.frame_219).wait(1).call(this.frame_220).wait(1).call(this.frame_221).wait(1).call(this.frame_222).wait(1).call(this.frame_223).wait(1).call(this.frame_224).wait(1).call(this.frame_225).wait(1).call(this.frame_226).wait(1).call(this.frame_227).wait(1).call(this.frame_228).wait(1).call(this.frame_229).wait(1).call(this.frame_230).wait(1).call(this.frame_231).wait(1).call(this.frame_232).wait(1).call(this.frame_233).wait(1).call(this.frame_234).wait(1).call(this.frame_235).wait(1).call(this.frame_236).wait(1).call(this.frame_237).wait(1).call(this.frame_238).wait(1).call(this.frame_239).wait(3));

	// Layer_1
	this.instance = new lib.CachedBmp_20();
	this.instance.setTransform(15.95,11.25,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_19();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(242));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182.5,126);


(lib.mensaje = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {mensajito:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_9 = function() {
		//this.stop()
	}
	this.frame_49 = function() {
		//alert("url")
			window.open("nivel2.html", "_self");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(40).call(this.frame_49).wait(1));

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(251.15,122.8,0.01,0.01,0,0,0,250.2,120);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:251.3,regY:122.8,scaleX:0.145,scaleY:0.145,x:251.3,y:123.15},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:251.5,y:123.55},0).wait(1).to({scaleX:0.435,scaleY:0.435,x:251.6,y:123.95},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:251.8,y:124.35},0).wait(1).to({scaleX:0.725,scaleY:0.725,x:251.95,y:124.8},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:252.15,y:125.2},0).wait(1).to({scaleX:1.015,scaleY:1.015,x:252.3,y:125.55},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:252.5,y:126},0).wait(41));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.6,-18.1,586.3000000000001,288.3);


(lib.invisible_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.dot1 = new lib.equis();
	this.dot1.name = "dot1";
	this.dot1.setTransform(-6.3,15.45,14.4275,14.0935,0,0,0,0.1,0.1);
	this.dot1.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.dot1).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwAGkIAAtHMAgBAAAIAANHg");
	this.shape.setTransform(-6.475,-11.95);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.9,-53.9,204.9,119.4);


(lib.enemy1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.box = new lib.box();
	this.box.name = "box";
	this.box.setTransform(40.35,55.1,1.8,1.8,0,0,0,21.9,22.4);
	this.box.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

	// Layer_1
	this.instance = new lib.empireship();
	this.instance.setTransform(0,0,0.38,0.38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.enemy1, new cjs.Rectangle(0,0,83.6,104.5), null);


(lib.player = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {disparando:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		disparando = 0
		this.stop();
	}
	this.frame_1 = function() {
		disparando = 1
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(8));

	// Layer_2
	this.hit = new lib.invisible_btn();
	this.hit.name = "hit";
	this.hit.setTransform(49.8,-12.5,0.4573,0.4573);
	this.hit._off = true;
	new cjs.ButtonHelper(this.hit, 0, 1, 2, false, new lib.invisible_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.hit).wait(2).to({_off:false},0).wait(1).to({y:-92.5},0).wait(1).to({y:-162.5},0).wait(1).to({y:-234.5},0).wait(1).to({y:-309.5},0).wait(1).to({y:-383.5},0).wait(1).to({y:-459.5},0).wait(1));

	// lasers
	this.instance = new lib.lasersito();
	this.instance.setTransform(48.1,63.5,1,1,0,0,0,42.1,26.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:42,x:48,y:-10.75},0).wait(1).to({y:-85.05},0).wait(1).to({y:-159.35},0).wait(1).to({y:-233.6},0).wait(1).to({y:-307.9},0).wait(1).to({y:-382.2},0).wait(1).to({y:-456.5},0).wait(1));

	// xwing_png
	this.instance_1 = new lib.xwing();
	this.instance_1.setTransform(0,0,0.6694,0.6694);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-485.4,96.4,605.3);


// stage content:
(lib.game5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		pspeed = 0;
		raiz=this;
		direccion ="";
		bala1 = this.mc_disparo1
		disparando = 0
		speedm1 = 5;
		deadenemies = 0;
		
		
		
		document.onkeydown = function(e) {
		        var key = e.keyCode;
		        if (key===37) {//left arrow pressed
		//alert("leftawwrrow")
					pspeed = 12;
			direccion = "izq";
			mover()
		        } else if (key===39) {//right arrow pressed
		//alert("rigttawwrrow")
					pspeed = 12;
			direccion = "der";
			mover()
		        }else if (key===83) {//right arrow pressed
		
				raiz.player.gotoAndPlay("disparando")
					//alert("s")
				}
		
		}
		
		 window.addEventListener("keyup", function(e){
			
				
		        
		           // alert("keyup")
					pspeed =0
			//direccion = "izq";
			mover()
		        }
				);
		
		this.stop()
		
		
		this.shoot_btn.addEventListener("click", fl_MouseClickHandler2.bind(this));
		
		//this.theButton.name = "theButton";
		 
		function fl_MouseClickHandler2()
		{
			
		this.player.gotoAndPlay("disparando")
		
		
		
		}
		
		
		this.inicio_btn.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		//this.theButton.name = "theButton";
		 
		function fl_MouseClickHandler()
		{
			
		this.gotoAndStop(1)
			
		}
		
		//izq_btn
		
		this.der_btn.addEventListener("mouseover", moverder.bind(this));
		
		function moverder() {
		
			
			pspeed = 12;
			direccion = "der";
			mover()
			
		}
		
		
		this.der_btn.addEventListener("mouseout", moverout3.bind(this));
		
		function moverout3() {
			
			direccion = "stop"
			mover()
			//console.log(direccion)
		}
		
		this.izq_btn.addEventListener("mouseover", moverizq.bind(this));
		
		function moverizq() {
			pspeed = 12;
			direccion = "izq";
			mover()
			
		}
		
		
		this.izq_btn.addEventListener("mouseout", moverout4.bind(this));
		
		function moverout4() {
			
			direccion = "stop"
			mover()
			//console.log(direccion)
		}
		
		
		createjs.Ticker.on("tick", mover);
		
		function mover() {
			if(deadenemies >= 3){
				//alert("mensajito")
			raiz.mensaje.gotoAndPlay("mensajito")
				deadenemies =0
				}else{
			console.log("muertito");
				}
			
		   
			 if (direccion == "der") {
				//console.log("no move")
				raiz.player.x += pspeed;
			} else if (direccion == "izq") {
				//console.log("izquierda")
				raiz.player.x -= pspeed;
			} else if (direccion == "stop") {
				//console.log("stop")
				raiz.player.y -= 0;
			
		}else{
			console.log("muertito");
		
		}
		
		
		
		}
		//this.mc_disparo1.x = 500
		
		
		this.on("tick", update2.bind(this));
		function update2(evt) {
			//this.caveman.x ++;
			//this.mono1.x += 2
			var pt = this.mono1.localToLocal(this.mono1.dot1.x,
				this.mono1.dot1.y, this.malo1.box);
			if (this.malo1.box.hitTest(pt.x, pt.y)) {
				//alert("collision")
				//console.log("pego");
				//this.mono1.gotoAndPlay("hit");
				//this.mono1.gotoAndPlay("muerte");
				raiz.mono1.monolifebar.scaleX -= danio;
				//morido();
				//muerto = 1;
				
			}
		}
		this.on("tick", update2.bind(this));
		function update2(evt) {
			//alert("collision")
			//this.caveman.x ++;
			//this.mono1.x += 2
			var pt = this.player.hit.localToLocal(this.player.hit.dot1.x,
				this.player.hit.dot1.y, this.enemy1.box);
			if (this.enemy1.box.hitTest(pt.x, pt.y)) {
				//alert("collision")
				this.enemy1.x = -1000
				deadenemies ++
				//alert(deadenemies)
				raiz.player.gotoAndStop(0)
			}
		}
		
		this.on("tick", update3.bind(this));
		function update3(evt) {
			//alert("collision")
			//this.caveman.x ++;
			//this.mono1.x += 2
			var pt = this.player.hit.localToLocal(this.player.hit.dot1.x,
				this.player.hit.dot1.y, this.enemy2.box);
			if (this.enemy2.box.hitTest(pt.x, pt.y)) {
				//alert("collision")
				this.enemy2.x = -1000
				deadenemies ++
				//alert(deadenemies)
				raiz.player.gotoAndStop(0)
			}
		}
		
		this.on("tick", update4.bind(this));
		function update4(evt) {
			//alert("collision")
			//this.caveman.x ++;
			//this.mono1.x += 2
			var pt = this.player.hit.localToLocal(this.player.hit.dot1.x,
				this.player.hit.dot1.y, this.enemy3.box);
			if (this.enemy3.box.hitTest(pt.x, pt.y)) {
				//alert("collision")
				this.enemy3.x = -1000
				deadenemies ++
				//alert(deadenemies)
				raiz.player.gotoAndStop(0)
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// title
	this.instance = new lib.CachedBmp_18();
	this.instance.setTransform(471.45,40.6,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_17();
	this.instance_1.setTransform(456.45,28.6,0.5,0.5);

	this.inicio_btn = new lib.invisible_btn();
	this.inicio_btn.name = "inicio_btn";
	this.inicio_btn.setTransform(715.85,399.6,2.4085,6.086,0,0,0,0.1,0.3);
	new cjs.ButtonHelper(this.inicio_btn, 0, 1, 2, false, new lib.invisible_btn(), 3);

	this.instance_2 = new lib.CachedBmp_16();
	this.instance_2.setTransform(589.35,530.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.inicio_btn},{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).wait(1));

	// js
	this.ai = new lib.aimalos();
	this.ai.name = "ai";
	this.ai.setTransform(-28.6,752.75,1,1,0,0,0,91.3,63);
	this.ai._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ai).wait(1).to({_off:false},0).wait(1));

	// game
	this.mensaje = new lib.mensaje();
	this.mensaje.name = "mensaje";
	this.mensaje.setTransform(675.05,315,1,1,0,0,0,251.2,122.8);

	this.enemy3 = new lib.enemy1();
	this.enemy3.name = "enemy3";
	this.enemy3.setTransform(53.9,53.3,1,1,0,0,0,41.8,52.3);

	this.enemy2 = new lib.enemy1();
	this.enemy2.name = "enemy2";
	this.enemy2.setTransform(359.8,53.3,1,1,0,0,0,41.8,52.3);

	this.shoot_btn = new lib.stop_1();
	this.shoot_btn.name = "shoot_btn";
	this.shoot_btn.setTransform(1258.25,481.5,1,1,0,0,0,37,37);
	this.shoot_btn.alpha = 0.6992;

	this.izq_btn = new lib.invisible_btn();
	this.izq_btn.name = "izq_btn";
	this.izq_btn.setTransform(145.65,579.55,1,1,0,0,0,-6.5,-12);
	new cjs.ButtonHelper(this.izq_btn, 0, 1, 2, false, new lib.invisible_btn(), 3);

	this.der_btn = new lib.invisible_btn();
	this.der_btn.name = "der_btn";
	this.der_btn.setTransform(1211.6,582.95,1,1,0,0,0,-6.5,-12);
	new cjs.ButtonHelper(this.der_btn, 0, 1, 2, false, new lib.invisible_btn(), 3);

	this.instance_3 = new lib.ligthsaber();
	this.instance_3.setTransform(1305.1,616,0.51,1,180);

	this.instance_4 = new lib.ligthsaber();
	this.instance_4.setTransform(53,541,0.51,1);

	this.enemy1 = new lib.enemy1();
	this.enemy1.name = "enemy1";
	this.enemy1.setTransform(207.85,53.3,1,1,0,0,0,41.8,52.3);

	this.player = new lib.player();
	this.player.name = "player";
	this.player.setTransform(645,501.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.player},{t:this.enemy1},{t:this.instance_4},{t:this.instance_3},{t:this.der_btn},{t:this.izq_btn},{t:this.shoot_btn},{t:this.enemy2},{t:this.enemy3},{t:this.mensaje}]},1).wait(1));

	// fondo
	this.instance_5 = new lib.space1();
	this.instance_5.setTransform(680.25,316.45,1.6873,0.9072,0,0,0,400.1,344.4);
	this.instance_5.filters = [new cjs.ColorFilter(0.69, 0.69, 0.69, 1, 0, 0, 0, 0)];
	this.instance_5.cache(-2,-2,804,693);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:400,scaleX:1.6978,scaleY:0.9128,x:676.4,y:315.4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(555.1,316,800.4,499.79999999999995);
// library properties:
lib.properties = {
	id: '628C606C3BCADA44B595D100DB45B765',
	width: 1350,
	height: 630,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/game5_atlas_1.png?1610773713535", id:"game5_atlas_1"}
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
an.compositions['628C606C3BCADA44B595D100DB45B765'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;