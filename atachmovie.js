(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.malo20002 = function() {
	this.initialize(img.malo20002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,307);// helper functions:

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


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AFLBOIlMDtIlJjzICBmCIGZADg");
	this.shape.setTransform(33.1,31.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AlKBIICCmCIGXADIB8GFIlMDtg");
	this.shape_1.setTransform(33.1,31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,68.2,65.1);


(lib.malito = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.malo20002();
	this.instance.parent = this;
	this.instance.setTransform(87,-43,0.32,0.32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.malito, new cjs.Rectangle(87,-43,64.3,98.3), null);


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


// stage content:
(lib.atachmovie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		settler1 = this.mc_settler1
		
		raiz = this
		/* Add Instance from Library to the Stage
		Adds an instance of the specified MovieClip or Button Library symbol to the stage.
		
		Instructions:
		Add "LibrarySymbol" as the linkage property of the symbol.
		*/
		
		// If you want to add a different symbol from the library,
		// enter a different name in the Class text field at step 2 above and in the code below.
		
		this.dwarrow.addEventListener("click", moverabajo.bind(this));
		
		
		function moverabajo()
		{
		var mc_settler1 = new lib.malito();
		this.addChild(mc_settler1);
		
			settler1.x ++
			settler1.y ++
			
		
		}
		
		this.dwarrow2.addEventListener("click", moverabajo2.bind(this));
		
		
		function moverabajo2()
		{
		this.settler1.x ++
			raiz.settler1.y ++
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Actions
	this.dwarrow2 = new lib.arrow();
	this.dwarrow2.parent = this;
	this.dwarrow2.setTransform(496.9,77.9,0.578,0.578,180);
	this.dwarrow2.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.dwarrow2).wait(1));

	// Layer 1
	this.dwarrow = new lib.Symbol1();
	this.dwarrow.parent = this;
	this.dwarrow.setTransform(275.5,200.2,1,1,0,0,0,33.1,31.5);
	new cjs.ButtonHelper(this.dwarrow, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.dwarrow).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(516.4,223.3,242.8,209.5);
// library properties:
lib.properties = {
	id: '22B20AFD5901D4488B6CE8A34147BF90',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/malo20002.png?1504679640142", id:"malo20002"}
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
an.compositions['22B20AFD5901D4488B6CE8A34147BF90'] = {
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