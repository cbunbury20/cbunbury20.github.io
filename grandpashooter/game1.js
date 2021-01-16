(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"game1_atlas_1", frames: [[0,0,944,937],[946,0,944,937],[1024,939,443,101],[802,939,220,275],[1469,939,361,72],[0,939,800,600],[1892,181,74,74],[1892,0,144,179]]}
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



(lib.CachedBmp_14 = function() {
	this.initialize(ss["game1_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["game1_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["game1_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.empireship = function() {
	this.initialize(ss["game1_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ligthsaber = function() {
	this.initialize(ss["game1_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.spacio3 = function() {
	this.initialize(ss["game1_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.stop = function() {
	this.initialize(ss["game1_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.xwing = function() {
	this.initialize(ss["game1_atlas_1"]);
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


(lib.player = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.xwing();
	this.instance.setTransform(0,0,0.6694,0.6694);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.player, new cjs.Rectangle(0,0,96.4,119.9), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CC00").ss(5,1,1).p("AGliIIAAh/AGlAGIAAg8AGfEIIAAilAmeiIIAAh/AmeAGIAAg8AmkEIIAAil");
	this.shape.setTransform(42.05,26.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lasersito, new cjs.Rectangle(-2.5,-2.5,89.1,57.8), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwAGkIAAtHMAgBAAAIAANHg");
	this.shape.setTransform(-6.475,-11.95);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.9,-53.9,204.9,84);


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

	// Layer_1
	this.instance = new lib.empireship();
	this.instance.setTransform(0,0,0.38,0.38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.enemy1, new cjs.Rectangle(0,0,83.6,104.5), null);


// stage content:
(lib.game1 = function(mode,startPosition,loop,reversed) {
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
		
		this.stop()
		
		
		this.shoot_btn.addEventListener("click", fl_MouseClickHandler2.bind(this));
		
		//this.theButton.name = "theButton";
		 
		function fl_MouseClickHandler2()
		{
			
		var mc_disparo1 = new lib.lasersito();
		this.addChild(mc_disparo1);
		
			mc_disparo1.x = this.player.x
			mc_disparo1.y = this.player.y
		
		
		
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
		
		this.mc_disparo1.x = 500
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// title
	this.instance = new lib.CachedBmp_14();
	this.instance.setTransform(471.45,40.6,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_13();
	this.instance_1.setTransform(456.45,28.6,0.5,0.5);

	this.inicio_btn = new lib.invisible_btn();
	this.inicio_btn.name = "inicio_btn";
	this.inicio_btn.setTransform(715.85,399.6,2.4085,6.086,0,0,0,0.1,0.3);
	new cjs.ButtonHelper(this.inicio_btn, 0, 1, 2, false, new lib.invisible_btn(), 3);

	this.instance_2 = new lib.CachedBmp_12();
	this.instance_2.setTransform(589.35,530.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.inicio_btn},{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).wait(1));

	// game
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

	this.enemy = new lib.enemy1();
	this.enemy.name = "enemy";
	this.enemy.setTransform(680.8,93.3,1,1,0,0,0,41.8,52.3);

	this.player = new lib.player();
	this.player.name = "player";
	this.player.setTransform(693.2,561.65,1,1,0,0,0,48.2,59.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.player},{t:this.enemy},{t:this.instance_4},{t:this.instance_3},{t:this.der_btn},{t:this.izq_btn},{t:this.shoot_btn}]},1).wait(1));

	// fondo
	this.instance_5 = new lib.space1();
	this.instance_5.setTransform(680.25,316.45,1.6873,0.9072,0,0,0,400.1,344.4);
	this.instance_5.filters = [new cjs.ColorFilter(0.69, 0.69, 0.69, 1, 0, 0, 0, 0)];
	this.instance_5.cache(-2,-2,804,693);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:400,scaleX:1.6978,scaleY:0.9128,x:676.4,y:315.4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(672.3,316,683.2,313.5);
// library properties:
lib.properties = {
	id: '628C606C3BCADA44B595D100DB45B765',
	width: 1350,
	height: 630,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/game1_atlas_1.png?1610669962250", id:"game1_atlas_1"}
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