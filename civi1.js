(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.zapachano = function() {
	this.initialize(img.zapachano);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,147);// helper functions:

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


(lib.settler = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.zapachano();
	this.instance.parent = this;
	this.instance.setTransform(113.9,0,0.965,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.settler, new cjs.Rectangle(0,0,113.9,147), null);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AsHGiIgegeIMlslIMmMlIgfAe");
	this.shape.setTransform(80.6,41.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990066").s().p("AsHGiIgegeIMlslIMmMkIgfAfg");
	this.shape_1.setTransform(80.6,41.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(-1,-1,163.2,85.6), null);


// stage content:
(lib.civi1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.uparrow.addEventListener("click", moverarriba.bind(this));
		
		function moverarriba()
		{
			//alert(huerta1)
		console.log("up")
			this.mono1.y += 2
		}
		
		this.dwarrow.addEventListener("click", moverabajo.bind(this));
		
		function moverabajo()
		{
			//alert(huerta1)
			this.mono1.x -= 2
		console.log("down")
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.mono1 = new lib.settler();
	this.mono1.parent = this;
	this.mono1.setTransform(259,246.5,1,1,0,0,0,57,73.5);

	this.dwarrow = new lib.arrow();
	this.dwarrow.parent = this;
	this.dwarrow.setTransform(821.2,418.4,0.578,0.578,180);

	this.uparrow = new lib.arrow();
	this.uparrow.parent = this;
	this.uparrow.setTransform(728.1,300.3,0.578,0.578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.uparrow},{t:this.dwarrow},{t:this.mono1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(652,423,619.5,245.7);
// library properties:
lib.properties = {
	id: '0212A24F6AAC35459244A2C1F735CD6C',
	width: 900,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/zapachano.png?1504679573073", id:"zapachano"}
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