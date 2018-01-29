(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"movermono enterframe_atlas_", frames: [[719,0,201,307],[839,309,74,74],[0,0,717,349],[719,309,118,147]]}
];


// symbols:



(lib.malo20002 = function() {
	this.spriteSheet = ss["movermono enterframe_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.stop = function() {
	this.spriteSheet = ss["movermono enterframe_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.toroscopia = function() {
	this.spriteSheet = ss["movermono enterframe_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.zapachano = function() {
	this.spriteSheet = ss["movermono enterframe_atlas_"];
	this.gotoAndStop(3);
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


(lib.stop_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.stop();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.stop_1, new cjs.Rectangle(0,0,74,74), null);


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


(lib.torito = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.box = new lib.box();
	this.box.parent = this;
	this.box.setTransform(82.7,40.2,1,1,0,0,0,21.9,22.3);
	this.box.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

	// Layer 1
	this.instance = new lib.toroscopia();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.23,0.23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.torito, new cjs.Rectangle(0,0,165.2,80.4), null);


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
(lib.movermonoenterframe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		direccion = ""
		 
		raiz = this;
		
		speed = 8;
		
		
		stage.enableMouseOver();
		this.uparrow.addEventListener("mouseover", moverarriba.bind(this));
		
		function moverarriba()
		{
			//alert(huerta1)
		
			direccion = "up"
			console.log(direccion)
		}
		this.uparrow.addEventListener("mouseout", moverout.bind(this));
		
		function moverout()
		{
			//alert(huerta1)
		
			direccion = ""
			console.log(direccion)
		}
		
		this.dwarrow.addEventListener("mouseover", moverabajo.bind(this));
		
		
		function moverabajo()
		{
			//alert(huerta1)
			direccion =  "dw"
		console.log(direccion)
		}
		
		this.dwarrow.addEventListener("mouseout", moverout2.bind(this));
		
		function moverout2()
		{
			//alert(huerta1)
		
			direccion = ""
			console.log(direccion)
		}
		
		
		
		this.derarrow.addEventListener("mouseover", moverder.bind(this));
		
		function moverder()
		{
			//alert(huerta1)
			direccion = "der"
		console.log(direccion)
		}
		
		this.derarrow.addEventListener("mouseout", moverout3.bind(this));
		
		function moverout3()
		{
			//alert(huerta1)
		
			direccion = ""
			console.log(direccion)
		}
		
		this.izqarrow.addEventListener("mouseover", moverizq.bind(this));
		
		function moverizq()
		{
			//alert(huerta1)
			direccion = "izq"
		console.log(direccion)
		}
		
		this.izqarrow.addEventListener("mouseout", moverout4.bind(this));
		
		function moverout4()
		{
			//alert(huerta1)
		
			direccion = ""
			console.log(direccion)
		}
		
		createjs.Ticker.on("tick", mover);
		
		function mover(){
			if(direccion == "up"){
				console.log("funcion up")
				raiz.mono1.y -=speed;
			}else if(direccion == "dw"){
				console.log("down func")
				raiz.mono1.y +=speed;
			}else if(direccion == "der"){
				console.log("no move")
				raiz.mono1.x +=speed;
			}else if(direccion == "izq"){
				console.log("izquierda")
				raiz.mono1.x -=speed;
			}else if(direccion == ""){
				console.log("derecha")
				raiz.mono1.y -=0;
			}
			
			
		}
		
		
		this.on("tick" , update2.bind(this));
		function update2(evt)
		{
			//this.caveman.x ++;
			//this.mono1.x += 2
			var pt = this.mono1.localToLocal(this.mono1.dot1.x ,
				this.mono1.dot1.y , this.toro.box);
			if(this.toro.box.hitTest(pt.x , pt.y))
			{
				//alert("collision")
				console.log("pego");
				this.mono1.gotoAndPlay("hit");
				this.toro.x +=2;
				
			}
		}
		
		this.on("tick" , update3.bind(this));
		function update3(evt)
		{
			//this.caveman.x ++;
			//this.mono1.x += 2
			var pt = this.mono1.localToLocal(this.mono1.dot1.x ,
				this.mono1.dot1.y , this.malo1.box);
			if(this.malo1.hitTest(pt.x , pt.y))
			{
				//alert("collision")
				console.log("pego");
				this.mono1.gotoAndPlay("hit");
				this.malo1.x += 2;
				
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.mono1 = new lib.settler();
	this.mono1.parent = this;
	this.mono1.setTransform(86,279,0.77,0.77,0,0,0,57,73.5);

	this.timeline.addTween(cjs.Tween.get(this.mono1).wait(1));

	// Layer 1
	this.stoper = new lib.stop_1();
	this.stoper.parent = this;
	this.stoper.setTransform(744,360,1,1,0,0,0,37,37);

	this.malo1 = new lib.malo1();
	this.malo1.parent = this;
	this.malo1.setTransform(526.8,74,1,1,0,0,0,32.1,49.1);

	this.toro = new lib.torito();
	this.toro.parent = this;
	this.toro.setTransform(476.4,420,1,1,0,0,0,82.6,40.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.toro},{t:this.malo1},{t:this.stoper}]}).wait(1));

	// Layer 2
	this.derarrow = new lib.arrow();
	this.derarrow.parent = this;
	this.derarrow.setTransform(841.8,311.6,0.578,0.578,90,0,0,0.1,0.1);
	this.derarrow.alpha = 0.449;

	this.izqarrow = new lib.arrow();
	this.izqarrow.parent = this;
	this.izqarrow.setTransform(652.2,404.7,0.578,0.578,-90,0,0,0.1,0.1);
	this.izqarrow.alpha = 0.449;

	this.dwarrow = new lib.arrow();
	this.dwarrow.parent = this;
	this.dwarrow.setTransform(793.6,453,0.578,0.578,180);
	this.dwarrow.alpha = 0.449;

	this.uparrow = new lib.arrow();
	this.uparrow.parent = this;
	this.uparrow.setTransform(700.4,263.3,0.578,0.578);
	this.uparrow.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.uparrow},{t:this.dwarrow},{t:this.izqarrow},{t:this.derarrow}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(492.1,274.9,813.2,441.6);
// library properties:
lib.properties = {
	id: '0212A24F6AAC35459244A2C1F735CD6C',
	width: 900,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/movermono enterframe_atlas_.png?1499131622560", id:"movermono enterframe_atlas_"}
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
an.compositions['0212A24F6AAC35459244A2C1F735CD6C'] = {
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