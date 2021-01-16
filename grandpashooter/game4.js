(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"game4_atlas_1", frames: [[0,0,944,937],[946,0,944,937],[1024,939,443,101],[802,939,220,275],[1469,939,361,72],[0,939,800,600],[1892,181,74,74],[1892,0,144,179]]}
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



(lib.CachedBmp_3 = function() {
	this.initialize(ss["game4_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["game4_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["game4_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.empireship = function() {
	this.initialize(ss["game4_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ligthsaber = function() {
	this.initialize(ss["game4_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.spacio3 = function() {
	this.initialize(ss["game4_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.stop = function() {
	this.initialize(ss["game4_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.xwing = function() {
	this.initialize(ss["game4_atlas_1"]);
	this.gotoAndStop(7);
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

	// Layer_1
	this.instance = new lib.stop();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stop_1, new cjs.Rectangle(0,0,74,74), null);


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
	this.dot1.alpha = 0.2695;

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
	this.box.alpha = 0.3594;

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

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("ABFDhQgRgIgNgbQgcg7AChqQADiGgHglQgEAPgUAbQgVAagEAQQgFAagEAMQgGAUgOAEQgOACgLgMQgLgLgCgQQgGgmAYgpQANgZAhgoQAZgdAOgIQALgHANgCQAOgBALAGQAZANAEAxIgBCsQAABnAcA/IAHAQQADAKgDAIQgDALgNADIgKACQgHAAgGgDg");
	this.shape.setTransform(35.3853,-18.6929);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AB6DwIj1gEQgfgBgLgLQgLgNAGgVQAFgQAPgTQBQhkBIhRIAYgbQAMgQAFgPQAHgSgCgSQgBgTgMgNQhBgZhIgDQgpgBgGgUQgDgKAGgKQAGgJAKgFQANgFAdADIA5AGQAgADAQAEQAbAGATANQAfAWALAqQAKAogOAnQgJAagUAcQgMAPgcAgIh4CIIDYAJQArACACAXQACAQgSAIQgOAHgTAAIgCAAg");
	this.shape_1.setTransform(52.1886,-87.4013);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066CC").s().p("AidDNQgLgEgGgJQgHgKADgKQAFgOAagJQCGgrCNgFQgqgug8gQQgagHgmgCIhDgDQglgCgDgVQgBgLAMgKQAKgHAQgEQBUgXBdgIQgQgpgYgsIi2gJQgagBgIgMQgFgIAEgLQAEgKAKgFQAMgHAcAAICEABQAkABAQAHQAfANAYAvQAiBBgMAvIgGATQgCAKACAIQADAJAKAIIATAMQATAOAKAXQALAWgDAYQgCAXgOALQgJAIgXADIkBAmQgNACgKAAQgMAAgHgDg");
	this.shape_2.setTransform(47.9352,-154.3861);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066CC").s().p("AChCwQgCgTABgjIABgzIljgFQgXgBgJgHQgLgKAAgbIgBhcQABgeAMgIQAKgIAOAFQANAFAGAMQAJARgFAiQgFAjAFAPIFTAIIABhBQABhLgGglQgJgwAVgLQALgGANAFQANAFAGAMQAJAPAAAiIABCxQAOAGACAMQACAJgGAIQgEAHgIADIAAAUIgBBEQgCAngHAdIglAFQgKgVgEgdg");
	this.shape_3.setTransform(32.6661,-232.4386);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066CC").s().p("AAVD3QgygJgfgWQgVgQgSgcQgMgSgRgjQgLgWgBgTQAAgXAQgIQANgGAOAJQANAIAIAOQAEAJAFATQAFATAFAJQAQAgApANQAgAKAtgDQAVgBAKgGQARgKAHgaQAIgaABg2QABgkgFgVQgGgegUgPQgSgPgfgBQgQgBgmAFQhOAKhRgHQgdgDgLgLQgKgLAAgeIABhSQAAgiANgNQAMgLAhAAIDTACQAtABADAYQABAQgRAJQgOAHgUABIjPAJIAAA+IDKgJIAdAAQAQAAAMAEQAsAOAVA0QANAgAEA8QAEBGgKAmQgPA9grAbQgeATgtAAQgTAAgWgDg");
	this.shape_4.setTransform(48.8843,-298.1677);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066CC").s().p("AAQD4QgbgCgWgFQg6gPgagpQgTgdgBgvQgBgbADg3IgBgwQABgcAEgUQAHgeAjg1QAUgfAOgQQAVgYAXgLQAWgMAhgCQAUgBAmADQAVABAJAIQALAMgJARQgKARgRAEQgMADgWgBQgYgBgKABQg1AIglBRQgPAfgLAiQAyAIAZAIQAnAMAbATQAoAgAPA3QAOA0gNA1QgGAagNAJQgKAGgXAAIg0gBgAhLAjQgFA2AHAeQADAPAGAKQANAbAbAJQARAFAagCIAsgEQgBgGACgfQABgXgHgNQgEgHgJgJIgPgPIgGgIQgEgFgDgCQgEgDgKgCQgegHgHgDIgUgJQgHgDgFAAQgFAAgEACg");
	this.shape_5.setTransform(44.4613,-382.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066CC").s().p("AheDsQgDgKADgLQACgKARgbQAPgYATgtIAGgOIgjAHQgdAFgYgBQgTgBgLgGQgPgKABgPQACgVAlgJICFgfIACgBQAXghAogyQA5hGAWgqIlJgNQgbgBgIgNQgFgJAFgLQAEgKAJgFQAMgHAdAAIE+ADQAeAAANAJQATAMAAAcQgBAYgMAZQgWAshGBSIgcAiIAJACQALAEAGAIQAGAJgCAKQgEASghAHIgnAKQgIANgFAMIgRAwQgKAdgIAQQgMAYgTAQQgVARgYABQgIgGgCgLg");
	this.shape_6.setTransform(52.7934,-453.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

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
(lib.game4 = function(mode,startPosition,loop,reversed) {
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
					alert("s")
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
				alert("collision")
				this.enemy1.x = -1000
				
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
				alert("collision")
				this.enemy2.x = -1000
				
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
				alert("collision")
				this.enemy3.x = -1000
				
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// title
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(471.45,40.6,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(456.45,28.6,0.5,0.5);

	this.inicio_btn = new lib.invisible_btn();
	this.inicio_btn.name = "inicio_btn";
	this.inicio_btn.setTransform(715.85,399.6,2.4085,6.086,0,0,0,0.1,0.3);
	new cjs.ButtonHelper(this.inicio_btn, 0, 1, 2, false, new lib.invisible_btn(), 3);

	this.instance_2 = new lib.CachedBmp_1();
	this.instance_2.setTransform(589.35,530.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.inicio_btn},{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).wait(1));

	// game
	this.enemy3 = new lib.enemy1();
	this.enemy3.name = "enemy3";
	this.enemy3.setTransform(532.85,53.3,1,1,0,0,0,41.8,52.3);

	this.enemy2 = new lib.enemy1();
	this.enemy2.name = "enemy2";
	this.enemy2.setTransform(838.75,53.3,1,1,0,0,0,41.8,52.3);

	this.shoot_btn = new lib.stop_1();
	this.shoot_btn.name = "shoot_btn";
	this.shoot_btn.setTransform(1228.8,489.25,1,1,0,0,0,37,37);

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
	this.enemy1.setTransform(686.8,53.3,1,1,0,0,0,41.8,52.3);

	this.player = new lib.player();
	this.player.name = "player";
	this.player.setTransform(645,501.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.player},{t:this.enemy1},{t:this.instance_4},{t:this.instance_3},{t:this.der_btn},{t:this.izq_btn},{t:this.shoot_btn},{t:this.enemy2},{t:this.enemy3}]},1).wait(1));

	// fondo
	this.instance_5 = new lib.space1();
	this.instance_5.setTransform(680.25,316.45,1.6873,0.9072,0,0,0,400.1,344.4);
	this.instance_5.filters = [new cjs.ColorFilter(0.69, 0.69, 0.69, 1, 0, 0, 0, 0)];
	this.instance_5.cache(-2,-2,804,693);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:400,scaleX:1.6978,scaleY:0.9128,x:676.4,y:315.4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(672.3,316,683.2,482.29999999999995);
// library properties:
lib.properties = {
	id: '628C606C3BCADA44B595D100DB45B765',
	width: 1350,
	height: 630,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/game4_atlas_1.png?1610758233347", id:"game4_atlas_1"}
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