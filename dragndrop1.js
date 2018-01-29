(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.coazon = function() {
	this.initialize(img.coazon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,91);// helper functions:

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


(lib.xdrag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0033CC").s().p("ABGCSQgHgEgEgNQgEgRgEgFQgGgIgRgIQgNgJgLgRIgOgbIgPARQgTAUgMAJQgTAPgSADQgRAEgHgIQgGgHADgJQADgJAHgGIAOgKQAJgGAEgFIAJgOQAFgJAEgDIANgGQAIgEAEgEQACgDABgEQgNgSgTgWQgcghgTgKIgTgJQgLgGgGgGQgHgHgCgLQgCgLAHgHQALgLASAJIAMAHIAMAJIAXANQANAHAHAIQAFAFAGALIAJAQQAFAHAKAJIAPAPIADgCQALgIA2gzQAngkAggIQAZgGAGAOQAEAGgDAIQgDAHgHAFQgFADgIAEIgOAFQgRAHgUATQgVAWgLAKIgUASQgMAKgGAIIADAFIANAaQAHAOAJAIIAPAMQALAHAFAFQAPAOAEAWQADASgIAJQgEAGgHACIgFABQgEAAgEgCg");
	this.shape.setTransform(0.3,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.xdrag, new cjs.Rectangle(-15.9,-13.8,32.5,29.7), null);


(lib.mc_box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AiphyIFTAAIAADlIlTAAg");
	this.shape.setTransform(17,11.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CC00").s().p("AipBzIAAjlIFTAAIAADlg");
	this.shape_1.setTransform(17,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_box, new cjs.Rectangle(-1,-1,36,25), null);


(lib.mc_target = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.box = new lib.mc_box();
	this.box.parent = this;
	this.box.setTransform(22.1,20.5,0.765,1,0,0,0,16.9,11.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AElAAQAAB5hWBWQhWBWh5AAQh4AAhWhWQhVhWAAh5QAAh4BVhWQBWhWB4AAQB5AABWBWQBWBWAAB4g");
	this.shape.setTransform(20.6,20.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0033CC").s().p("AjODOQhWhVAAh5QAAh4BWhWQBWhVB4AAQB5AABWBVQBVBWAAB4QAAB5hVBVQhWBXh5AAQh4AAhWhXgAiZByIFSAAIAAjlIlSAAg");
	this.shape_1.setTransform(20.6,20.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.box}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_target, new cjs.Rectangle(-9.7,-9.6,60.5,60.5), null);


(lib.coazon_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.dot = new lib.xdrag();
	this.dot.parent = this;
	this.dot.setTransform(2.4,0.9,0.542,0.542,0,0,0,0.3,1);

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// Layer 1
	this.instance = new lib.coazon();
	this.instance.parent = this;
	this.instance.setTransform(-40,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.coazon_1, new cjs.Rectangle(-40,-44,83,91), null);


// stage content:
(lib.dragndrop1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		createjs.Touch.enable(stage);
		
		this.card.on("mousedown", onMouseDown.bind(this));
		this.card.on("pressmove", onMouseMove.bind(this));
		this.card.on("pressup", onMouseUp.bind(this));
		this.card.objective = this.objective;
			
		function onMouseDown (evt){
			console.log("algito");
			var item = evt.currentTarget;
			item.offset = {x:0,y:0};
			
			var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
			item.offset.x = pt.x - item.x;
			item.offset.y = pt.y - item.y;
			item.drag = true;
			
			
		}
		function onMouseUp (evt){
			console.log("algito2");
			var item = evt.currentTarget;
			
			var pt = item.localToGlobal(item.dot.x , item.dot.y, item.objective.box);
			
			if(item.objective.box.hitTest(pt.x,pt.y))
			{
				console.log = "hittesting";
				item.x = item.objective.x;
				item.y = item.objective.y;
			}
		}
		function onMouseMove (evt){
			console.log("algito3");
			var item = evt.currentTarget;
			if(item.drag)
			{
				var pt = item.parent.globalToLocal(evt.stageX , evt.stageY);
				item.x = pt.x -item.offset.x;
				item.y = pt.y -item.offset.y;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.card = new lib.coazon_1();
	this.card.parent = this;
	this.card.setTransform(93,132,0.94,0.94);

	this.objective = new lib.mc_target();
	this.objective.parent = this;
	this.objective.setTransform(431.2,210.2,2.733,2.733,0,0,0,20.6,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.objective},{t:this.card}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(330.4,290.6,457,200.5);
// library properties:
lib.properties = {
	id: '5396D98C03F4214C986E8BE5C4CDFC10',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/coazon.png?1504679551104", id:"coazon"}
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
an.compositions['5396D98C03F4214C986E8BE5C4CDFC10'] = {
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