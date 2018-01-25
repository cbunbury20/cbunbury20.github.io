(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"memomex14_atlas_", frames: [[585,0,153,204],[0,0,225,225],[537,206,153,204],[847,206,153,204],[423,0,160,200],[382,202,153,204],[227,197,153,204],[227,0,194,195],[895,0,100,100],[692,206,153,204],[0,227,153,204],[155,403,153,204],[310,408,153,204],[740,0,153,204],[465,412,153,204],[620,412,153,204],[775,412,153,204]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.diaz = function() {
	this.spriteSheet = ss["memomex14_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fondo = function() {
	this.spriteSheet = ss["memomex14_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.guadalupeVictoria = function() {
	this.spriteSheet = ss["memomex14_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hidalgo1 = function() {
	this.spriteSheet = ss["memomex14_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hojita = function() {
	this.spriteSheet = ss["memomex14_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.huertajpgcopia = function() {
	this.spriteSheet = ss["memomex14_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.iturbidejpgcopia = function() {
	this.spriteSheet = ss["memomex14_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.logomzt = function() {
	this.spriteSheet = ss["memomex14_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.LOGONEW = function() {
	this.spriteSheet = ss["memomex14_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.maderojpgcopia = function() {
	this.spriteSheet = ss["memomex14_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.moctezuma = function() {
	this.spriteSheet = ss["memomex14_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.morelos = function() {
	this.spriteSheet = ss["memomex14_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.obregon = function() {
	this.spriteSheet = ss["memomex14_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.santaanna = function() {
	this.spriteSheet = ss["memomex14_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.tarjetaBack = function() {
	this.spriteSheet = ss["memomex14_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Villajpgcopia = function() {
	this.spriteSheet = ss["memomex14_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.zapata = function() {
	this.spriteSheet = ss["memomex14_atlas_"];
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
	this.shape.graphics.f("#000033").s().p("AggCRQgMgPgGgZQgGgXgCgeQgCgeAAgdQAAgYACgaQACgaAGgXQAGgXAMgOQAMgPAUAAQAVAAAMAPQAMAOAGAXQAGAXACAaQACAaAAAYQAAAdgCAeQgCAegGAXQgGAZgMAPQgMAOgVAAQgUAAgMgOgAgLh8QgFANgDAcQgDAdAAAvQAAA2ADAgQADAgAFAOQAFANAGAAQAHAAAFgNQAFgOAEggQADggAAg2QAAgvgDgdQgEgcgFgNQgFgNgHAAIAAAAQgGAAgFANg");
	this.shape.setTransform(73.3,48.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000033").s().p("AgjCfIgCgBIgBgBIACgCIABgCIAOgMQADgCAAgDIABgHIAAkBIgBgGQAAgEgDgBIgOgNIgBgCIgCgCIABgCIACAAIBHAAIACAAIABACIgCACIgBACIgOANQgDABAAAEIgBAGIAAEBIABAHQAAADADACIAOAMIABACIACACIgBABIgCABg");
	this.shape_1.setTransform(61.5,48.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000033").s().p("AgaCQQgMgRgGgZQgGgZgCgdQgCgdAAgaIABgkIADgoQADgVAHgRQAGgRALgKQALgKAQAAQAGgBAGADIALAHIAEABIADABIAEgBIAFgEIAFgFIAEgBQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAIABAGIAABlIgBACIgCACIgCgCIgCgDIgFgcQgEgPgFgNQgFgNgHgJQgHgIgJAAQgNAAgFAfQgFAgABBDQAAAvABAdQACAdAEAPQAEAPAFAFQAGAGAHgBQAIAAAGgIQAFgHAEgMIAHgYIAEgVIABgJIABgDIADgBIACABIABADQAAAfgEAXQgFAYgKAMQgLAMgVAAQgSAAgMgPg");
	this.shape_2.setTransform(50.4,48.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000033").s().p("AgjCfIgCgBIgBgBIACgCIABgCIAOgMQADgCAAgDIABgHIAAkBIgBgGQAAgEgDgBIgOgNIgBgCIgCgCIABgCIACAAIBHAAIACAAIABACIgCACIgBACIgOANQgDABAAAEIgBAGIAAEBIABAHQAAADADACIAOAMIABACIACACIgBABIgCABg");
	this.shape_3.setTransform(39.2,48.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000033").s().p("AAiCfQgDAAgDgCQgDgDgBgFIg0jnIgBAAIAADTQAAADABAEIADAEIANANIACACQAAAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIgBABIgCABIg8AAIgCgBIgBgBIABgCIACgCIALgMIAEgFIABgHIAAkBIgBgGIgEgFIgLgNIgCgCIgBgDIABgBIACAAIA2AAQABAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIACAGIApC1IABAAIAAieIgBgGIgDgFIgMgNIgDgCQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIABgBIACAAIA8AAIACAAIABABIgBADIgCACIgLANIgDAFIgCAGIAAEbQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgDABg");
	this.shape_4.setTransform(26.6,48.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000033").s().p("AgjCfIgCgBIgBgBIACgCIABgCIAOgMQADgCAAgDIABgHIAAkBIgBgGQAAgEgDgBIgOgNIgBgCIgCgCIABgCIACAAIBHAAIACAAIABACIgCACIgBACIgOANQgDABAAAEIgBAGIAAEBIABAHQAAADADACIAOAMIABACIACACIgBABIgCABg");
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
	this.shape_19.graphics.f("#CC6600").s().p("AowEvQgNgugvgjQgfgYglgMIAAlzQAlgNAfgXQAvgjANguIRbAAQAIA4A2ApQAhAZAoAMIAAFuQgwAMglAcQgnAdgPAkg");
	this.shape_19.setTransform(46.7,48.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000033").ss(5,1,1).p("AKyipIAAFvQgvAMgmAcQgnAegPAjIxXAAQgNgtgvgkQgfgYgmgMIAAl0QAmgMAfgYQAvgjANgtIRbAAQAIA4A3ApQAgAYAoAMg");
	this.shape_20.setTransform(46.7,48.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#993300").s().p("AowEvQgNgugvgjQgfgYglgMIAAlzQAlgNAfgXQAvgjANguIRbAAQAIA4A2ApQAhAZAoAMIAAFuQgwAMglAcQgnAdgPAkg");
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
	this.shape_82.graphics.f("#660000").s().p("AgKAJIAAgSIAVAAIAAASg");
	this.shape_82.setTransform(-28,205);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#660000").s().p("AgKAJIAAgSIAVAAIAAASg");
	this.shape_83.setTransform(-33.9,205);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#660000").s().p("AgfArQgLgIgDgPIATgDQABAKAHAFQAHAFAMAAQANAAAHgEQAGgFAAgGQAAgGgGgDQgEgCgPgDQgUgFgIgDQgIgDgEgGQgEgGAAgHQAAgGADgGQAEgFAGgEQAEgDAIgCQAHgCAJAAQAMAAAKAEQAKADAFAGQAEAFACAKIgSACQgCgIgGgEQgGgEgKAAQgNAAgFAEQgGADAAAFQAAAEADACQACADAFACIAPAEQAUAEAIADQAIACAFAGQAEAGAAAIQAAAIgFAIQgGAHgKAEQgKAEgOAAQgUAAgMgIg");
	this.shape_84.setTransform(-42.4,201.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#660000").s().p("AgpArQgJgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIAQgCQAWgDALgDIABgEQgBgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQACgKAGgGQAGgHALgDQALgEANAAQAPAAAJADQAIADAEAFQAEAEADAHIABAPIAAAVQAAAXAAAGQACAGADAGIgUAAQgDgFAAgHQgLAIgJADQgJADgLAAQgSAAgLgIgAgEAGIgQADQgFACgCAEQgDADAAAFQAAAGAFAFQAGAEAMAAQAJAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_85.setTransform(-53.7,201.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#660000").s().p("AA4AyIAAg8QABgKgCgFQgCgEgFgDQgFgCgGAAQgMAAgHAGQgJAHABAPIAAA4IgSAAIAAg+QAAgLgFgGQgFgFgKAAQgIAAgHADQgHAEgCAHQgDAHAAANIAAAyIgUAAIAAhgIARAAIAAANQAGgHAJgEQAIgFALAAQANAAAHAFQAHAEAEAIQANgRAVAAQARAAAIAIQAKAIgBARIAABCg");
	this.shape_86.setTransform(-68.5,201);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#660000").s().p("AgfArQgLgIgDgPIATgDQABAKAHAFQAHAFAMAAQANAAAHgEQAGgFAAgGQAAgGgGgDQgEgCgPgDQgUgFgIgDQgIgDgEgGQgEgGAAgHQAAgGADgGQAEgFAGgEQAEgDAIgCQAHgCAJAAQAMAAAKAEQAKADAFAGQAEAFACAKIgSACQgCgIgGgEQgGgEgKAAQgNAAgFAEQgGADAAAFQAAAEADACQACADAFACIAPAEQAUAEAIADQAIACAFAGQAEAGAAAIQAAAIgFAIQgGAHgKAEQgKAEgOAAQgUAAgMgIg");
	this.shape_87.setTransform(-88.9,201.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#660000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_88.setTransform(-100.2,201.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#660000").s().p("AAaBCIAAg7QAAgJgCgFQgCgFgFgDQgGgDgIAAQgLAAgIAHQgJAGAAASIAAA1IgTAAIAAhgIARAAIAAAOQAMgQAWAAQAKAAAJADQAIADAEAFQAFAFABAHIABAPIAAA8gAgfgsQAAgKAGgGQAGgFAJAAQAHAAAKAFQAGACAEAAQADAAACgBQACgCABgEIANAAQAAAKgGAFQgFAFgJAAQgHAAgLgFQgGgDgDAAQgDAAgDACQgCACAAAFg");
	this.shape_89.setTransform(-112.1,199.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#660000").s().p("AgpArQgJgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIARgCQAVgDALgDIABgEQAAgKgGgEQgHgGgOAAQgNAAgGAEQgGAEgEAKIgSgCQADgKAFgGQAGgHALgDQALgEANAAQAPAAAIADQAKADAEAFQADAEADAHIABAPIAAAVQAAAXABAGQABAGADAGIgUAAQgDgFAAgHQgLAIgKADQgIADgLAAQgTAAgKgIgAgEAGIgQADQgFACgDAEQgCADAAAFQAAAGAGAFQAFAEAMAAQAJAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_90.setTransform(-124.1,201.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#660000").s().p("AgfArQgLgIgDgPIATgDQABAKAHAFQAHAFAMAAQANAAAHgEQAGgFAAgGQAAgGgGgDQgEgCgPgDQgUgFgIgDQgIgDgEgGQgEgGAAgHQAAgGADgGQAEgFAGgEQAEgDAIgCQAHgCAJAAQAMAAAKAEQAKADAFAGQAEAFACAKIgSACQgCgIgGgEQgGgEgKAAQgNAAgFAEQgGADAAAFQAAAEADACQACADAFACIAPAEQAUAEAIADQAIACAFAGQAEAGAAAIQAAAIgFAIQgGAHgKAEQgKAEgOAAQgUAAgMgIg");
	this.shape_91.setTransform(-147.3,201.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#660000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_92.setTransform(-158.6,201.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#660000").s().p("AAaBDIAAg9QAAgMgFgGQgHgFgLAAQgHAAgIAEQgHAEgDAGQgDAGAAALIAAA1IgUAAIAAiFIAUAAIAAAwQAMgNAUAAQAMgBAKAFQAIAEAEAIQAEAHABAOIAAA9g");
	this.shape_93.setTransform(-170.5,199.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#660000").s().p("AgiAmQgOgNABgYQgBgPAHgMQAGgMAMgGQALgGAOAAQASAAAMAIQALAIADAPIgSADQgDgKgGgFQgHgFgJAAQgNAAgKAJQgIAJAAASQAAAUAIAJQAJAIANAAQALAAAIgGQAHgGACgMIATACQgEARgMAKQgNAJgSAAQgWAAgOgNg");
	this.shape_94.setTransform(-181.5,201.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#660000").s().p("AgYAuQgJgDgEgFQgEgFgCgHQgBgFAAgLIAAg6IATAAIAAA0IABARQACAHAGAEQAFADAJABQAHgBAIgDQAHgEADgHQADgGAAgNIAAgyIATAAIAABfIgRAAIAAgOQgNAQgVABQgKgBgIgDg");
	this.shape_95.setTransform(-193.3,201.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#660000").s().p("AA5AyIAAg8QAAgKgCgFQgCgEgFgDQgFgCgGAAQgMAAgIAGQgHAHgBAPIAAA4IgRAAIAAg+QAAgLgFgGQgFgFgKAAQgIAAgHADQgGAEgEAHQgDAHAAANIAAAyIgSAAIAAhgIARAAIAAANQAFgHAIgEQAJgFAMAAQALAAAJAFQAGAEADAIQAOgRAVAAQARAAAJAIQAIAIABARIAABCg");
	this.shape_96.setTransform(-208.1,201);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#660000").s().p("AgdAyIAAhgIARAAIAAAOQAGgKAGgDQAEgEAHAAQAJAAAKAGIgGAPQgHgEgHAAQgGAAgEAEQgFADgCAGQgDAIAAALIAAAyg");
	this.shape_97.setTransform(-225.7,201);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#660000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_98.setTransform(-236.2,201.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#660000").s().p("AgvBEIAAiFIARAAIAAAMQAGgHAHgEQAIgDAKAAQAOAAALAGQALAGAGAMQAFALABAOQAAAPgHALQgGAMgLAHQgNAGgMAAQgJAAgHgDQgIgEgEgFIAAAvgAgVgtQgJAKAAATQAAARAJAKQAIAIAMABQAMgBAJgIQAJgKAAgTQAAgSgJgKQgIgIgMgBQgMABgJAJg");
	this.shape_99.setTransform(-247.8,202.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#660000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIARgCQAVgDALgDIAAgEQABgKgGgEQgHgGgOAAQgNAAgGAEQgHAEgDAKIgSgCQADgKAFgGQAGgHALgDQALgEANAAQAPAAAIADQAJADAFAFQADAEACAHIABAPIAAAVQAAAXACAGQAAAGAEAGIgTAAQgDgFgBgHQgLAIgKADQgIADgLAAQgSAAgKgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAGAFQAGAEAKAAQAKAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_100.setTransform(-266,201.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#660000").s().p("AAaBDIAAg9QABgMgHgGQgGgFgLAAQgIAAgHAEQgHAEgDAGQgEAGAAALIAAA1IgTAAIAAiFIATAAIAAAwQAOgNATAAQAMgBAJAFQAJAEAFAIQADAHAAAOIAAA9g");
	this.shape_101.setTransform(-277.9,199.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#660000").s().p("AghAmQgOgNgBgYQAAgPAHgMQAFgMANgGQAMgGANAAQASAAAMAIQALAIAEAPIgTADQgCgKgHgFQgGgFgKAAQgNAAgKAJQgIAJAAASQAAAUAIAJQAJAIANAAQALAAAIgGQAHgGACgMIATACQgDARgNAKQgNAJgSAAQgWAAgNgNg");
	this.shape_102.setTransform(-288.9,201.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#660000").s().p("AgYAuQgJgDgEgFQgEgFgCgHQgBgFAAgLIAAg6IATAAIAAA0IABARQACAHAGAEQAFADAJABQAHgBAIgDQAHgEADgHQADgGAAgNIAAgyIATAAIAABfIgRAAIAAgOQgNAQgVABQgKgBgIgDg");
	this.shape_103.setTransform(-300.7,201.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#660000").s().p("AgIBDIAAiFIASAAIAACFg");
	this.shape_104.setTransform(-309,199.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#660000").s().p("AgpArQgJgIAAgMQAAgHADgGQAEgGAHgDQAFgDAIgCIARgCQAWgDAKgDIABgEQAAgKgGgEQgHgGgOAAQgNAAgGAEQgGAEgEAKIgSgCQADgKAFgGQAGgHALgDQALgEANAAQAPAAAJADQAIADAEAFQAFAEACAHIABAPIAAAVQAAAXABAGQABAGADAGIgUAAQgDgFAAgHQgKAIgKADQgJADgLAAQgTAAgKgIgAgEAGIgQADQgFACgCAEQgDADAAAFQAAAGAGAFQAFAEAMAAQAJAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_105.setTransform(221.6,177.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#660000").s().p("AgJBDIAAiFIASAAIAACFg");
	this.shape_106.setTransform(213.2,175.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#660000").s().p("AgSBDIAAhgIASAAIAABggAgSgpIANgaIAYAAIgWAag");
	this.shape_107.setTransform(202.9,175.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#660000").s().p("AgfArQgLgIgDgPIATgDQABAKAHAFQAHAFAMAAQANAAAHgEQAGgFAAgGQAAgGgGgDQgEgCgPgDQgUgFgIgDQgIgDgEgGQgEgGAAgHQAAgGADgGQAEgFAGgEQAEgDAIgCQAHgCAJAAQAMAAAKAEQAKADAFAGQAEAFACAKIgSACQgCgIgGgEQgGgEgKAAQgNAAgFAEQgGADAAAFQAAAEADACQACADAFACIAPAEQAUAEAIADQAIACAFAGQAEAGAAAIQAAAIgFAIQgGAHgKAEQgKAEgOAAQgUAAgMgIg");
	this.shape_108.setTransform(193.6,177.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#660000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIARgCQAVgDALgDIAAgEQABgKgGgEQgHgGgOAAQgNAAgGAEQgHAEgDAKIgSgCQADgKAFgGQAGgHALgDQALgEANAAQAPAAAIADQAJADAFAFQADAEACAHIACAPIAAAVQAAAXABAGQAAAGAEAGIgUAAQgCgFgBgHQgLAIgKADQgIADgLAAQgTAAgJgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAGAFQAFAEAMAAQAJAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_109.setTransform(182.3,177.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#660000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_110.setTransform(164.4,177.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#660000").s().p("AgYA+QgLgHgGgLQgGgMAAgPQAAgOAFgLQAGgMALgGQALgHAOABQAJAAAIADQAHAEAFAGIAAgwIATAAIAACFIgRAAIAAgNQgLAPgUAAQgNAAgLgGgAgUgKQgIAJAAASQAAATAJAJQAJAJALAAQANABAIgJQAJgJAAgSQAAgTgJgKQgJgJgNAAQgLAAgJAJg");
	this.shape_111.setTransform(152.1,175.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#660000").s().p("AAaAyIAAg6QAAgKgCgFQgCgFgFgDQgGgDgIAAQgLAAgIAGQgJAHAAATIAAA0IgTAAIAAhgIARAAIAAANQAMgQAWAAQAKAAAJAEQAIADAEAFQAFAFABAHIABAQIAAA7g");
	this.shape_112.setTransform(140.5,177.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#660000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIAQgCQAXgDAKgDIAAgEQABgKgGgEQgHgGgOAAQgNAAgGAEQgHAEgCAKIgTgCQADgKAGgGQAFgHALgDQALgEANAAQAOAAAJADQAJADAFAFQADAEACAHIABAPIAAAVQAAAXABAGQACAGADAGIgTAAQgDgFgBgHQgKAIgLADQgIADgLAAQgTAAgJgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAFAFQAHAEAKAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_113.setTransform(128.5,177.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#660000").s().p("AghA9QgLgHgBgQIATADQABAHAGADQAGAFAMAAQAMAAAIgFQAHgFACgHQACgFAAgRQgNANgRAAQgXAAgNgPQgMgOAAgTQAAgOAFgMQAHgMAKgGQALgHAPABQATAAANANIAAgLIARAAIAABTQAAAWgFAKQgFAKgMAFQgMAFgQAAQgTABgNgJgAgUguQgIAJAAARQAAAUAIAHQAJAKAMgBQANABAJgKQAIgHABgTQgBgSgIgJQgKgJgNAAQgLAAgJAJg");
	this.shape_114.setTransform(116.3,179.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#660000").s().p("AAaAyIAAg6QAAgKgCgFQgCgFgFgDQgGgDgIAAQgLAAgIAGQgJAHAAATIAAA0IgTAAIAAhgIARAAIAAANQAMgQAWAAQAKAAAJAEQAIADAEAFQAFAFABAHIABAQIAAA7g");
	this.shape_115.setTransform(104.6,177.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#660000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_116.setTransform(92.7,177.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#660000").s().p("AgIBDIAAiFIASAAIAACFg");
	this.shape_117.setTransform(84.3,175.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#660000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_118.setTransform(76,177.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#660000").s().p("AgdAyIAAhgIARAAIAAAOQAGgKAGgDQAEgEAHAAQAJAAAKAGIgGAPQgHgEgHAAQgGAAgEAEQgFADgCAGQgDAIAAALIAAAyg");
	this.shape_119.setTransform(67.3,177.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#660000").s().p("Ag6BDIAAiFIA6AAIAXABQALACAIAFQAHAEAFAIQAFAIAAAKQAAARgNALQgMANghAAIgmAAIAAA2gAglgCIAmAAQAUgBAIgGQAJgGAAgMQAAgIgFgGQgFgGgIgCQgFgBgOAAIgmAAg");
	this.shape_120.setTransform(56.1,175.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#660000").s().p("AgpArQgJgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIAQgCQAXgDAKgDIAAgEQAAgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQACgKAHgGQAFgHALgDQALgEANAAQAOAAAKADQAJADADAFQAFAEABAHIABAPIAAAVQAAAXABAGQABAGAEAGIgTAAQgEgFAAgHQgKAIgKADQgJADgLAAQgSAAgLgIgAgDAGIgRADQgFACgCAEQgDADAAAFQAAAGAFAFQAHAEAKAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_121.setTransform(30.7,177.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#660000").s().p("AgCA/QgGgDgCgEQgDgFAAgPIAAg3IgNAAIAAgMIANAAIAAgZIASgJIAAAiIAUAAIAAAMIgUAAIAAA4QAAAHACACIADADQACACAEAAIAJgBIACAPIgOABQgLAAgEgDg");
	this.shape_122.setTransform(21.9,176);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#660000").s().p("AgoArQgKgIAAgMQAAgHAEgGQADgGAGgDQAGgDAIgCIAQgCQAXgDAKgDIAAgEQAAgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQADgKAGgGQAFgHALgDQALgEANAAQAOAAAKADQAJADADAFQAFAEABAHIABAPIAAAVQAAAXABAGQABAGAEAGIgTAAQgEgFAAgHQgKAIgKADQgJADgLAAQgTAAgJgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAFAFQAGAEALAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_123.setTransform(12.8,177.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#660000").s().p("AgvBFIAAiGIARAAIAAAMQAGgHAHgEQAIgDAKAAQAOgBALAHQALAGAGAMQAFAMABANQAAAPgHALQgGAMgMAHQgMAGgMAAQgIAAgIgDQgIgEgFgFIAAAwgAgVgtQgJAKAAATQgBASAKAIQAIAJAMAAQAMAAAJgJQAJgJAAgTQAAgSgIgKQgKgJgLAAQgMAAgJAKg");
	this.shape_124.setTransform(1.2,179.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#660000").s().p("AgpArQgJgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIARgCQAVgDALgDIABgEQAAgKgGgEQgHgGgOAAQgNAAgGAEQgGAEgEAKIgSgCQADgKAFgGQAGgHALgDQALgEANAAQAPAAAIADQAKADAEAFQADAEADAHIABAPIAAAVQAAAXABAGQABAGADAGIgUAAQgDgFAAgHQgLAIgKADQgIADgLAAQgTAAgKgIgAgEAGIgQADQgFACgDAEQgCADAAAFQAAAGAGAFQAFAEAMAAQAJAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_125.setTransform(-11.1,177.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#660000").s().p("Ag8BDIAAgQIBOhWIAQgPIhVAAIAAgQIBtAAIAAAQIhVBcIgJAJIBgAAIAAAQg");
	this.shape_126.setTransform(-23.6,175.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#660000").s().p("AgoBCIgDgPIALABQAHAAAEgCQADgBACgEIAHgMIABgEIgqhgIAVAAIAWA4IAHAVIAIgVIAYg4IATAAIgrBhQgGAQgDAGQgFAJgGADQgHAEgJAAQgGAAgGgCg");
	this.shape_127.setTransform(-41.3,179.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#660000").s().p("AAaAyIAAg6QAAgKgCgFQgCgFgFgDQgGgDgIAAQgLAAgIAGQgJAHAAATIAAA0IgTAAIAAhgIARAAIAAANQAMgQAWAAQAKAAAJAEQAIADAEAFQAFAFABAHIABAQIAAA7g");
	this.shape_128.setTransform(-58.8,177.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#660000").s().p("AglA3QgOgNAAgYQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAWQAAATgGAKQgHALgMAGQgMAFgPAAQgWAAgPgNgAgWgJQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgSgKgJQgJgJgOAAQgNAAgJAJgAgJgqIANgaIAYAAIgXAag");
	this.shape_129.setTransform(-70.7,175.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#660000").s().p("AggA9QgMgHgBgQIATADQABAHAFADQAIAFALAAQAMAAAIgFQAHgFACgHQACgFAAgRQgNANgRAAQgXAAgNgPQgMgOAAgTQAAgOAFgMQAHgMAKgGQAMgHAOABQATAAANANIAAgLIARAAIAABTQAAAWgFAKQgGAKgLAFQgMAFgQAAQgTABgMgJgAgUguQgIAJgBARQABAUAIAHQAJAKAMgBQANABAJgKQAIgHABgTQgBgSgIgJQgKgJgNAAQgLAAgJAJg");
	this.shape_130.setTransform(-83,179.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#660000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_131.setTransform(-94.6,177.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#660000").s().p("AgdAyIAAhgIARAAIAAAOQAGgKAGgDQAEgEAHAAQAJAAAKAGIgGAPQgHgEgHAAQgGAAgEAEQgFADgCAGQgDAIAAALIAAAyg");
	this.shape_132.setTransform(-103.3,177.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#660000").s().p("AgeA2IAAAMIgRAAIAAiFIATAAIAAAvQAMgMARAAQAKgBAKAEQAJAEAGAGQAGAHADAJQADAIAAALQAAAZgOANQgOAOgUAAQgSAAgMgOgAgVgKQgJAKAAAQQAAASAGAIQAIAMAQAAQALAAAJgJQAJgJAAgTQAAgSgJgJQgIgJgMAAQgMAAgJAJg");
	this.shape_133.setTransform(-113.4,175.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#660000").s().p("AgmA8QgRgJgJgQQgJgPAAgTQAAggAVgSQAUgUAgABQAVAAASAJQAQAIAKAQQAIAQABATQAAAUgKAQQgKARgRAIQgRAIgUAAQgVAAgRgJgAgkgoQgPANAAAdQAAAYAOAOQAPAOAWAAQAWAAAQgOQAPgOgBgaQAAgPgGgNQgGgMgNgHQgMgHgPAAQgVABgPANg");
	this.shape_134.setTransform(-127.9,175.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#660000").s().p("AgKAQQAGgDACgEQACgEABgIIgKAAIAAgTIAUAAIAAATQAAAKgEAGQgEAGgIAEg");
	this.shape_135.setTransform(-151.2,182.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#660000").s().p("AgpArQgJgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIAQgCQAXgDAKgDIAAgEQAAgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQACgKAHgGQAFgHALgDQALgEANAAQAOAAAKADQAJADADAFQAFAEABAHIABAPIAAAVQAAAXABAGQABAGAEAGIgTAAQgEgFAAgHQgKAIgKADQgJADgLAAQgSAAgLgIgAgDAGIgRADQgFACgCAEQgDADAAAFQAAAGAFAFQAHAEAKAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_136.setTransform(-160.1,177.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#660000").s().p("AgIBDIAAiFIASAAIAACFg");
	this.shape_137.setTransform(-168.5,175.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#660000").s().p("AgJBDIAAiFIASAAIAACFg");
	this.shape_138.setTransform(-173.3,175.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#660000").s().p("AgIBDIAAhgIARAAIAABggAgIgvIAAgTIARAAIAAATg");
	this.shape_139.setTransform(-178.1,175.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#660000").s().p("AgKBDIg7iFIAWAAIAoBhIAHAVIAIgVIAphhIAVAAIg8CFg");
	this.shape_140.setTransform(-187.3,175.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#660000").s().p("AgoArQgKgIAAgMQAAgHAEgGQADgGAGgDQAGgDAIgCIAQgCQAXgDAKgDIAAgEQAAgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQADgKAGgGQAFgHALgDQALgEANAAQAOAAAJADQAKADADAFQAFAEABAHIABAPIAAAVQAAAXABAGQABAGAEAGIgTAAQgEgFAAgHQgKAIgLADQgIADgLAAQgTAAgJgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAFAFQAGAEALAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_141.setTransform(-206.4,177.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#660000").s().p("AgdAyIAAhgIARAAIAAAOQAGgKAGgDQAEgEAHAAQAJAAAKAGIgGAPQgHgEgHAAQgGAAgEAEQgFADgCAGQgDAIAAALIAAAyg");
	this.shape_142.setTransform(-215,177.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#660000").s().p("AgCA/QgGgDgCgEQgCgFAAgPIAAg3IgOAAIAAgMIAOAAIAAgZIASgJIAAAiIATAAIAAAMIgTAAIAAA4QAAAHABACIACADQADACAEAAIAJgBIACAPIgOABQgKAAgFgDg");
	this.shape_143.setTransform(-222.2,176);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#660000").s().p("AAaAyIAAg6QAAgKgCgFQgCgFgFgDQgGgDgIAAQgLAAgIAGQgJAHAAATIAAA0IgTAAIAAhgIARAAIAAANQAMgQAWAAQAKAAAJAEQAIADAEAFQAFAFABAHIABAQIAAA7g");
	this.shape_144.setTransform(-231.4,177.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#660000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_145.setTransform(-243.3,177.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#660000").s().p("AgiAmQgNgNAAgYQAAgPAFgMQAHgMALgGQANgGANAAQASAAAMAIQAMAIACAPIgSADQgDgKgGgFQgHgFgJAAQgOAAgIAJQgJAJAAASQAAAUAJAJQAIAIANAAQALAAAHgGQAIgGACgMIASACQgDARgMAKQgNAJgSAAQgWAAgOgNg");
	this.shape_146.setTransform(-254.3,177.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#660000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_147.setTransform(-272,177.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#660000").s().p("AAaBDIAAg9QABgMgHgFQgGgGgLAAQgHAAgIAEQgHAEgEAGQgDAFAAAMIAAA1IgTAAIAAiFIATAAIAAAwQAOgNATAAQAMgBAJAFQAJAEAFAHQADAIAAAOIAAA9g");
	this.shape_148.setTransform(-283.9,175.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#660000").s().p("AghAmQgOgNgBgYQAAgPAHgMQAFgMANgGQAMgGANAAQASAAAMAIQALAIAEAPIgTADQgDgKgGgFQgGgFgKAAQgNAAgKAJQgIAJAAASQAAAUAIAJQAJAIANAAQALAAAIgGQAHgGACgMIATACQgEARgMAKQgNAJgSAAQgWAAgNgNg");
	this.shape_149.setTransform(-294.8,177.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#660000").s().p("AgYAuQgJgDgEgFQgEgFgCgHQgBgFAAgLIAAg7IATAAIAAA1IABARQACAHAGAEQAFADAJABQAHgBAIgDQAHgEADgHQADgGAAgNIAAgzIATAAIAABgIgRAAIAAgOQgNAQgVAAQgKAAgIgDg");
	this.shape_150.setTransform(-306.6,177.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#660000").s().p("AgJBDIAAiFIATAAIAACFg");
	this.shape_151.setTransform(-315,175.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#660000").s().p("AgfArQgLgIgDgPIATgDQABAKAHAFQAHAFAMAAQANAAAHgEQAGgFAAgGQAAgGgGgDQgEgCgPgDQgUgFgIgDQgIgDgEgGQgEgGAAgHQAAgGADgGQAEgFAGgEQAEgDAIgCQAHgCAJAAQAMAAAKAEQAKADAFAGQAEAFACAKIgSACQgCgIgGgEQgGgEgKAAQgNAAgFAEQgGADAAAFQAAAEADACQACADAFACIAPAEQAUAEAIADQAIACAFAGQAEAGAAAIQAAAIgFAIQgGAHgKAEQgKAEgOAAQgUAAgMgIg");
	this.shape_152.setTransform(239.3,154.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#660000").s().p("AgkA4QgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgFQAIgEAEgLIAUADQgFAOgNAIQgMAIgTAAQgYAAgOgMgAgUgLQgJAIgBAMIA9AAQgBgLgGgHQgJgKgOABQgMgBgJAIgAgKgqIANgaIAZAAIgXAag");
	this.shape_153.setTransform(228,152.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#660000").s().p("AgYAuQgJgDgEgFQgEgFgCgHQgBgFAAgKIAAg8IATAAIAAA1IABARQACAHAGAEQAFADAJABQAHgBAIgDQAHgEADgHQADgGAAgNIAAgzIATAAIAABgIgRAAIAAgOQgNAQgVAAQgKAAgIgDg");
	this.shape_154.setTransform(216,154.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#660000").s().p("AgwBFIAAiGIASAAIAAAMQAGgHAIgEQAHgDAKAAQAOgBAMAHQAKAGAFAMQAHAMgBANQAAAPgGALQgGAMgMAHQgMAGgMAAQgIAAgIgEQgHgDgGgFIAAAwgAgVgtQgKAKAAATQAAASAJAIQAJAJAMAAQAMAAAJgJQAJgJAAgTQAAgSgIgKQgKgJgLABQgMgBgJAKg");
	this.shape_155.setTransform(204.4,155.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#660000").s().p("AgfArQgLgIgDgPIATgDQABAKAHAFQAHAFAMAAQANAAAHgEQAGgFAAgGQAAgGgGgDQgEgCgPgDQgUgFgIgDQgIgDgEgGQgEgGAAgHQAAgGADgGQAEgFAGgEQAEgDAIgCQAHgCAJAAQAMAAAKAEQAKADAFAGQAEAFACAKIgSACQgCgIgGgEQgGgEgKAAQgNAAgFAEQgGADAAAFQAAAEADACQACADAFACIAPAEQAUAEAIADQAIACAFAGQAEAGAAAIQAAAIgFAIQgGAHgKAEQgKAEgOAAQgUAAgMgIg");
	this.shape_156.setTransform(192.7,154.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#660000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_157.setTransform(181.4,154.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#660000").s().p("Ag+BDIAAiFIA0AAQASAAAJACQANACAJAHQANAKAFAOQAGANABASQAAAOgFAMQgEAMgGAIQgGAHgIAFQgIAEgLACQgKADgNAAgAgqAzIAgAAQAPAAAIgCQAJgDAGgEQAHgHAEgKQADgLAAgOQAAgVgIgMQgHgLgMgDQgHgDgSgBIggAAg");
	this.shape_158.setTransform(168,152.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#660000").s().p("AgKAJIAAgRIAVAAIAAARg");
	this.shape_159.setTransform(151.1,158);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#660000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_160.setTransform(142.1,154.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#660000").s().p("AgdAyIAAhgIARAAIAAAOQAGgKAGgDQAEgEAHAAQAJAAAKAGIgGAPQgHgEgHAAQgGAAgEAEQgFADgCAGQgDAIAAALIAAAyg");
	this.shape_161.setTransform(133.4,154);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#660000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_162.setTransform(123,154.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#660000").s().p("AgYA+QgLgGgGgMQgGgMAAgPQAAgOAFgLQAGgMALgGQALgHAOABQAJAAAIADQAHAEAFAGIAAgwIATAAIAACFIgRAAIAAgNQgLAPgUAAQgNAAgLgGgAgUgKQgIAJAAASQAAATAJAJQAJAJALAAQANABAIgJQAJgJAAgSQAAgTgJgKQgJgJgNAAQgLAAgJAJg");
	this.shape_163.setTransform(110.7,152.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#660000").s().p("AgpArQgJgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIAQgCQAXgDAKgDIAAgEQAAgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQACgKAHgGQAFgHALgDQALgEANAAQAOAAAKADQAJADADAFQAFAEABAHIABAPIAAAVQAAAXABAGQABAGAEAGIgTAAQgEgFAAgHQgKAIgKADQgJADgLAAQgSAAgLgIgAgDAGIgRADQgFACgCAEQgDADAAAFQAAAGAFAFQAHAEAKAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_164.setTransform(99.1,154.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#660000").s().p("AA2BDIAAhwIgtBwIgRAAIgthxIAABxIgTAAIAAiFIAeAAIAlBeIAGATIAIgVIAlhcIAbAAIAACFg");
	this.shape_165.setTransform(84.2,152.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#660000").s().p("AgpArQgJgIAAgMQAAgHADgGQAEgGAHgDQAFgDAIgCIARgCQAWgDAKgDIABgEQAAgKgGgEQgHgGgOAAQgNAAgGAEQgGAEgEAKIgSgCQADgKAFgGQAGgHALgDQALgEANAAQAPAAAJADQAIADAFAFQAEAEACAHIABAPIAAAVQAAAXABAGQABAGADAGIgUAAQgDgFAAgHQgKAIgKADQgJADgLAAQgTAAgKgIgAgEAGIgQADQgFACgCAEQgDADAAAFQAAAGAGAFQAFAEAMAAQAJAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_166.setTransform(57.4,154.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#660000").s().p("AgdAyIAAhgIARAAIAAAOQAGgKAGgDQAEgEAHAAQAJAAAKAGIgGAPQgHgEgHAAQgGAAgEAEQgFADgCAGQgDAIAAALIAAAyg");
	this.shape_167.setTransform(42.8,154);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#660000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIARgCQAVgDALgDIAAgEQABgKgGgEQgHgGgOAAQgNAAgGAEQgHAEgDAKIgSgCQADgKAGgGQAFgHALgDQALgEANAAQAPAAAIADQAJADAFAFQADAEACAHIABAPIAAAVQAAAXACAGQAAAGAEAGIgTAAQgDgFgBgHQgLAIgKADQgIADgLAAQgSAAgKgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAGAFQAGAEAKAAQAKAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_168.setTransform(32.3,154.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#660000").s().p("AAaAyIAAg6QAAgKgCgFQgCgFgFgDQgGgDgIAAQgLAAgIAGQgJAHAAATIAAA0IgTAAIAAhgIARAAIAAANQAMgQAWAAQAKAAAJAEQAIADAEAFQAFAFABAHIABAQIAAA7g");
	this.shape_169.setTransform(20.4,154);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#660000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_170.setTransform(8.4,154.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#660000").s().p("AgIBDIAAhgIARAAIAABggAgIgvIAAgTIARAAIAAATg");
	this.shape_171.setTransform(0.1,152.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#660000").s().p("AgiAmQgOgNAAgYQABgPAFgMQAHgMALgGQAMgGAOAAQASAAAMAIQAMAIACAPIgSADQgCgKgHgFQgHgFgJAAQgOAAgIAJQgJAJAAASQAAAUAJAJQAIAIANAAQALAAAHgGQAIgGACgMIASACQgCARgNAKQgNAJgSAAQgWAAgOgNg");
	this.shape_172.setTransform(-7.3,154.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#660000").s().p("AgIBDIAAhgIARAAIAABggAgIgvIAAgTIARAAIAAATg");
	this.shape_173.setTransform(-15.5,152.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#660000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIARgCQAVgDALgDIAAgEQABgKgGgEQgIgGgNAAQgNAAgGAEQgHAEgDAKIgSgCQADgKAFgGQAGgHALgDQALgEANAAQAPAAAIADQAJADAFAFQADAEACAHIACAPIAAAVQAAAXABAGQAAAGAEAGIgUAAQgCgFgBgHQgLAIgKADQgIADgLAAQgTAAgJgIgAgEAGIgQADQgFACgDAEQgCADAAAFQAAAGAGAFQAFAEAMAAQAJAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_174.setTransform(-23.8,154.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#660000").s().p("AgdAyIAAhgIARAAIAAAOQAGgKAGgDQAEgEAHAAQAJAAAKAGIgGAPQgHgEgHAAQgGAAgEAEQgFADgCAGQgDAIAAALIAAAyg");
	this.shape_175.setTransform(-32.5,154);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#660000").s().p("AgCA/QgGgDgCgEQgDgFAAgPIAAg3IgNAAIAAgMIANAAIAAgZIASgJIAAAiIAUAAIAAAMIgUAAIAAA4QAAAHACACIADADQACACAEAAIAJgBIACAPIgOABQgLAAgEgDg");
	this.shape_176.setTransform(-39.7,152.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#660000").s().p("AgJBDIAAiFIASAAIAACFg");
	this.shape_177.setTransform(-57.2,152.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#660000").s().p("AgpArQgJgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIARgCQAVgDALgDIABgEQAAgKgGgEQgHgGgOAAQgNAAgGAEQgGAEgEAKIgSgCQADgKAFgGQAGgHALgDQALgEANAAQAPAAAIADQAKADAEAFQADAEADAHIABAPIAAAVQAAAXABAGQABAGADAGIgUAAQgDgFAAgHQgLAIgKADQgIADgLAAQgTAAgKgIgAgEAGIgQADQgFACgDAEQgCADAAAFQAAAGAGAFQAFAEAMAAQAJAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_178.setTransform(-65.6,154.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#660000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_179.setTransform(-83.4,154.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#660000").s().p("AghAmQgOgNgBgYQAAgPAHgMQAFgMANgGQAMgGANAAQASAAAMAIQAMAIADAPIgTADQgCgKgHgFQgGgFgKAAQgOAAgJAJQgIAJAAASQAAAUAIAJQAJAIANAAQALAAAIgGQAHgGACgMIASACQgCARgNAKQgNAJgSAAQgWAAgNgNg");
	this.shape_180.setTransform(-94.4,154.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#660000").s().p("AgIBDIAAhgIARAAIAABggAgIgvIAAgTIARAAIAAATg");
	this.shape_181.setTransform(-102.5,152.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#660000").s().p("AAdAwIgXgdIgGgJIgcAmIgXAAIAogxIglgvIAYAAIARAXIAHALIAIgKIATgYIAWAAIgmAuIApAyg");
	this.shape_182.setTransform(-110.2,154.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#660000").s().p("AgkA4QgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgFQAIgEAEgLIAUADQgFAOgNAIQgMAIgTAAQgYAAgOgMgAgUgLQgJAIgBAMIA9AAQgBgLgGgHQgJgKgOABQgMgBgJAIgAgKgqIANgaIAZAAIgXAag");
	this.shape_183.setTransform(-121.6,152.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#660000").s().p("AA2BDIAAhwIgtBwIgRAAIgthxIAABxIgTAAIAAiFIAeAAIAlBeIAGATIAIgVIAlhcIAbAAIAACFg");
	this.shape_184.setTransform(-136.5,152.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#660000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_185.setTransform(-157.4,154.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#660000").s().p("AgYA+QgLgGgGgMQgGgMAAgPQAAgOAFgLQAGgMALgGQALgHAOABQAJAAAIADQAHAEAFAGIAAgwIATAAIAACFIgRAAIAAgNQgLAPgUAAQgNAAgLgGgAgUgKQgIAJAAASQAAATAJAJQAJAJALAAQANABAIgJQAJgJAAgSQAAgTgJgKQgJgJgNAAQgLAAgJAJg");
	this.shape_186.setTransform(-169.7,152.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#660000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_187.setTransform(-187.3,154.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#660000").s().p("AgCA/QgGgDgCgEQgCgFgBgPIAAg3IgNAAIAAgMIANAAIAAgZIASgJIAAAiIATAAIAAAMIgTAAIAAA4QAAAHABACIAEADQACACAEAAIAIgBIADAPIgOABQgLAAgEgDg");
	this.shape_188.setTransform(-196,152.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#660000").s().p("AAaAyIAAg6QAAgKgCgFQgCgFgFgDQgGgDgIAAQgLAAgIAGQgJAHAAATIAAA0IgTAAIAAhgIARAAIAAANQAMgQAWAAQAKAAAJAEQAIADAEAFQAFAFABAHIABAQIAAA7g");
	this.shape_189.setTransform(-205.1,154);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#660000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_190.setTransform(-217.1,154.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#660000").s().p("AgYA+QgLgGgGgMQgGgMAAgPQAAgOAFgLQAGgMALgGQALgHAOABQAJAAAIADQAHAEAFAGIAAgwIATAAIAACFIgRAAIAAgNQgLAPgUAAQgNAAgLgGgAgUgKQgIAJAAASQAAATAJAJQAJAJALAAQANABAIgJQAJgJAAgSQAAgTgJgKQgJgJgNAAQgLAAgJAJg");
	this.shape_191.setTransform(-229.4,152.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#660000").s().p("AgIBDIAAhgIARAAIAABggAgIgvIAAgTIARAAIAAATg");
	this.shape_192.setTransform(-237.4,152.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#660000").s().p("AgfArQgLgIgDgPIATgDQABAKAHAFQAHAFAMAAQANAAAHgEQAGgFAAgGQAAgGgGgDQgEgCgPgDQgUgFgIgDQgIgDgEgGQgEgGAAgHQAAgGADgGQAEgFAGgEQAEgDAIgCQAHgCAJAAQAMAAAKAEQAKADAFAGQAEAFACAKIgSACQgCgIgGgEQgGgEgKAAQgNAAgFAEQgGADAAAFQAAAEADACQACADAFACIAPAEQAUAEAIADQAIACAFAGQAEAGAAAIQAAAIgFAIQgGAHgKAEQgKAEgOAAQgUAAgMgIg");
	this.shape_193.setTransform(-245.2,154.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#660000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_194.setTransform(-256.5,154.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#660000").s().p("AgdAyIAAhgIARAAIAAAOQAGgKAGgDQAEgEAHAAQAJAAAKAGIgGAPQgHgEgHAAQgGAAgEAEQgFADgCAGQgDAIAAALIAAAyg");
	this.shape_195.setTransform(-265.2,154);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#660000").s().p("AgwBFIAAiGIASAAIAAAMQAGgHAIgEQAHgDAKAAQAOgBAMAHQAKAGAFAMQAHAMgBANQAAAPgGALQgGAMgMAHQgMAGgMAAQgIAAgIgEQgHgDgGgFIAAAwgAgVgtQgKAKAAATQAAASAJAIQAJAJAMAAQAMAAAJgJQAJgJAAgTQAAgSgIgKQgKgJgLABQgMgBgJAKg");
	this.shape_196.setTransform(-275.3,155.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#660000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_197.setTransform(-293.5,154.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#660000").s().p("AgYAuQgJgDgEgFQgEgFgCgHQgBgFAAgKIAAg8IATAAIAAA1IABARQACAHAGAEQAFADAJABQAHgBAIgDQAHgEADgHQADgGAAgNIAAgzIATAAIAABgIgRAAIAAgOQgNAQgVAAQgKAAgIgDg");
	this.shape_198.setTransform(-305.5,154.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#660000").s().p("AgPBEIAAhTIgQAAIAAgNIAQAAIAAgKQAAgKACgFQADgGAHgEQAGgEAMAAIASABIgDAPIgMgBQgIAAgEADQgDADAAAJIAAAJIAVAAIAAANIgVAAIAABTg");
	this.shape_199.setTransform(-313.8,152.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#660000").s().p("AgaBYIANgZIAGgUIAFgVIABgVQAAgWgFgTQgFgUgPgbIAUAAQAPAUAJAWQAJAWAAAWQAAASgHAXQgIAYgRAYg");
	this.shape_200.setTransform(-19.7,130.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#660000").s().p("AgjA1QgPgQAAgkQAAgkAPgQQAQgRAYAAQASAAALAJQALAJAEAQIgdADQgBgIgEgEQgFgDgHAAQgIAAgGAHQgHAHgCAXQALgLAQAAQASAAANAMQANAMAAATQAAAVgNAMQgOANgWAAQgWAAgPgQgAgLAEQgGAGAAALQAAANAGAGQAHAHAIAAQAIAAAFgFQAGgGAAgNQAAgNgGgGQgGgFgJAAQgHAAgGAFg");
	this.shape_201.setTransform(-29,128.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#660000").s().p("AAEBDIAAhgQgPANgWAHIAAgXQAMgDANgKQANgJAFgNIAYAAIAACGg");
	this.shape_202.setTransform(-41.9,128.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#660000").s().p("AghA7QgQgLgBgUQAAgLAHgJQAGgIANgFQgLgEgFgIQgFgHAAgJQgBgPAMgKQAMgKAWAAQAWAAAMAKQAMAKAAAPQAAAJgGAIQgFAHgKAEQANAEAGAIQAHAJAAALQAAASgOAMQgOAMgWAAQgUAAgOgKgAgPALQgGAHABAHQgBALAHAGQAGAGAIAAQAJAAAHgGQAFgGAAgKQAAgKgFgFQgHgGgJAAQgKAAgFAGgAgMgrQgGAFAAAHQAAAIAGAEQAEAEAIAAQAIAAAFgEQAFgEAAgIQAAgHgFgFQgFgEgIAAQgIAAgEAEg");
	this.shape_203.setTransform(-53,128.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#660000").s().p("AAEBDIAAhgQgPANgWAHIAAgXQAMgDANgKQANgJAFgNIAYAAIAACGg");
	this.shape_204.setTransform(-65.8,128.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#660000").s().p("AgcANIAAgZIA5AAIAAAZg");
	this.shape_205.setTransform(-73.9,130.6);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#660000").s().p("AgkA2QgNgQAAgmQAAglAPgRQANgOAVAAQAWAAANAOQAPARAAAlQAAAmgPARQgNAOgWAAQgWAAgOgPgAgJgrQgEADgCAHQgDAKAAAXQAAAYACAJQADAIAEADQAEADAFAAQAFAAAEgDQAEgDADgHQADgKAAgYQAAgXgDgIQgDgJgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_206.setTransform(-84.1,128.8);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#660000").s().p("AgjA6QgNgLgDgQIAegDQABAJAGAFQAGAEAIAAQAJABAGgHQAGgGAAgNQAAgNgGgGQgGgFgKAAQgMgBgKAKIgYgDIAPhFIBNAAIAAAXIg3AAIgEAYQAJgFAKAAQATAAAOANQAOALAAAUQAAAQgLAOQgPARgaABQgVgBgOgJg");
	this.shape_207.setTransform(-95.8,129);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#660000").s().p("AghA7QgQgLAAgUQAAgLAGgJQAGgIAOgFQgMgEgFgIQgGgHAAgJQAAgPANgKQAMgKAVAAQAVAAAMAKQANAKAAAPQAAAJgGAIQgFAHgLAEQANAEAHAIQAGAJAAALQAAASgNAMQgNAMgXAAQgUAAgOgKgAgPALQgFAHgBAHQABALAGAGQAGAGAJAAQAIAAAGgGQAHgGAAgKQAAgKgHgFQgFgGgKAAQgJAAgGAGgAgNgrQgEAFgBAHQABAIAEAEQAFAEAIAAQAIAAAFgEQAFgEAAgIQAAgHgFgFQgFgEgIAAQgIAAgFAEg");
	this.shape_208.setTransform(-108,128.8);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#660000").s().p("AAEBDIAAhgQgPANgWAHIAAgXQAMgDANgKQANgJAFgNIAYAAIAACGg");
	this.shape_209.setTransform(-120.8,128.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#660000").s().p("AAGBYQgPgVgIgXQgJgXAAgVQAAgaALgXQAJgUANgSIAUAAQgPAbgFAUQgFATAAAWQAAAOADAQQADAQAGAOQADAKAJARg");
	this.shape_210.setTransform(-129.2,130.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#660000").s().p("AgpArQgKgIAAgNQAAgIAEgGQAFgHAIgCQAIgEAPgCQAUgEAIgDIAAgCQAAgIgEgDQgEgDgLAAQgIAAgEADQgFACgCAHIgbgEQAEgOALgHQALgHAWAAQATAAAJAEQAKAEAEAHQAEAGAAARIAAAdQAAANABAGQABAGAEAHIgdAAIgDgIIgBgDQgHAHgJADQgHADgKAAQgRAAgKgIgAAAAGQgMACgEACQgGAEAAAGQAAAFAFAEQAFAEAHAAQAHAAAHgFQAFgDACgFQABgEAAgJIAAgFIgRAEg");
	this.shape_211.setTransform(-144.9,130.6);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#660000").s().p("AgEBBQgGgDgDgDQgDgEgCgGIAAgTIAAgpIgOAAIAAgUIAOAAIAAgUIAdgPIAAAjIAUAAIAAAUIgUAAIAAAmIAAAOQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQABACADAAQAFAAAIgDIACAUQgLAEgNAAQgHAAgGgCg");
	this.shape_212.setTransform(-154.4,129);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#660000").s().p("AgjAyIAAhgIAcAAIAAANQAGgJAFgEQAGgDAHAAQAKAAAJAFIgJAXQgHgFgHAAQgGAAgEADQgEADgCAIQgCAIgBAYIAAAeg");
	this.shape_213.setTransform(-161.3,130.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#660000").s().p("AgoAiQgLgNAAgUQAAgXAOgOQAOgOAXAAQAXAAAPAPQAOAOAAAdIhJAAQAAALAHAGQAHAHAJAAQAHAAAEgEQAFgDADgHIAdAEQgGAOgMAIQgMAHgSAAQgcAAgOgRgAgPgYQgGAGAAALIArAAQAAgLgGgGQgHgGgJAAQgIAAgHAGg");
	this.shape_214.setTransform(-172.4,130.6);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#660000").s().p("AghAuQgJgFgEgIQgEgHAAgOIAAg9IAdAAIAAAtQAAATACAFQACAFAEADQAEACAHAAQAGAAAHgDQAFgEADgFQACgGAAgTIAAgqIAdAAIAABgIgbAAIAAgOQgGAHgKAFQgJAFgLgBQgLAAgJgDg");
	this.shape_215.setTransform(-184.8,130.7);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#660000").s().p("AAfBDIAAg7Ig8AAIAAA7IggAAIAAiFIAgAAIAAA0IA8AAIAAg0IAeAAIAACFg");
	this.shape_216.setTransform(-199.2,128.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#660000").s().p("AgcAtQgOgGgHgMQgHgLAAgQQAAgNAHgMQAHgMANgGQAOgHAPAAQAZAAARAPQAQAOAAAVQAAAWgRAOQgQAPgZAAQgOAAgOgGgAgTgVQgHAIAAANQAAAPAHAHQAJAIAKAAQAMAAAHgIQAIgHAAgPQAAgNgIgIQgHgIgMAAQgKAAgJAIg");
	this.shape_217.setTransform(-219.3,130.6);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#660000").s().p("AAVAyIAAgyQAAgPgBgEQgCgFgFgCQgEgDgGAAQgGAAgHAEQgGADgCAGQgCAGAAAQIAAAsIgeAAIAAhgIAcAAIAAAOQAOgRAVAAQAKAAAIADQAIADAFAFQAEAFABAGQACAGAAALIAAA8g");
	this.shape_218.setTransform(-232.5,130.5);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#660000").s().p("AgpArQgKgIAAgNQAAgIAEgGQAFgHAIgCQAIgEAPgCQAUgEAIgDIAAgCQAAgIgEgDQgEgDgLAAQgIAAgEADQgFACgCAHIgbgEQAEgOALgHQALgHAWAAQATAAAJAEQAKAEAEAHQAEAGAAARIAAAdQAAANABAGQABAGAEAHIgdAAIgDgIIgBgDQgHAHgJADQgHADgKAAQgRAAgKgIgAAAAGQgMACgEACQgGAEAAAGQAAAFAFAEQAFAEAHAAQAHAAAHgFQAFgDACgFQABgEAAgJIAAgFIgRAEg");
	this.shape_219.setTransform(-245,130.6);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#660000").s().p("AgOBDIAAhgIAdAAIAABggAgOgrIAAgXIAdAAIAAAXg");
	this.shape_220.setTransform(-253.9,128.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#660000").s().p("AgjAyIAAhgIAbAAIAAANQAIgJAEgEQAGgDAHAAQAKAAAJAFIgJAXQgIgFgFAAQgHAAgEADQgDADgDAIQgCAIAAAYIAAAeg");
	this.shape_221.setTransform(-260.2,130.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#660000").s().p("AgcAtQgOgGgHgMQgIgLAAgQQAAgNAIgMQAHgMANgGQANgHAQAAQAZAAAQAPQAQAOAAAVQAAAWgQAOQgQAPgZAAQgOAAgOgGgAgTgVQgHAIAAANQAAAPAHAHQAIAIALAAQALAAAJgIQAHgHAAgPQAAgNgHgIQgJgIgLAAQgLAAgIAIg");
	this.shape_222.setTransform(-271.7,130.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#660000").s().p("AgEBBQgGgDgDgDQgDgEgBgGIgBgTIAAgpIgOAAIAAgUIAOAAIAAgUIAcgPIAAAjIAUAAIAAAUIgUAAIAAAmIABAOQAAABAAAAQABABAAAAQAAAAABABQAAAAAAAAQACACAEAAQAEAAAHgDIADAUQgLAEgMAAQgJAAgFgCg");
	this.shape_223.setTransform(-281.8,129);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#660000").s().p("AglAlQgOgNAAgYQAAgXAOgNQAPgOAYAAQATAAANAIQAMAIAFAPIgdAFQgCgIgFgEQgFgDgIAAQgKAAgGAGQgIAHABAPQgBARAIAHQAGAHAKAAQAIAAAGgEQAFgEACgLIAdAFQgEARgNAJQgMAJgWAAQgYAAgOgOg");
	this.shape_224.setTransform(-291.2,130.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#660000").s().p("AgOBDIAAhgIAdAAIAABggAgOgrIAAgXIAdAAIAAAXg");
	this.shape_225.setTransform(-300.3,128.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#660000").s().p("AgPBDIg4iFIAiAAIAmBiIAmhiIAgAAIg3CFg");
	this.shape_226.setTransform(-310.1,128.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#660000").s().p("AgKAKIAAgSIAVAAIAAASg");
	this.shape_227.setTransform(-38.5,204);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#660000").s().p("AgIBDIAAhgIARAAIAABggAgIgwIAAgSIARAAIAAASg");
	this.shape_228.setTransform(-66.6,198.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#660000").s().p("AA4AyIAAg8QAAgKgBgFQgCgEgFgDQgFgCgGAAQgMAAgHAGQgJAHABAPIAAA4IgSAAIAAg+QAAgLgFgGQgFgFgKAAQgIAAgGADQgIAEgCAHQgDAHgBANIAAAyIgTAAIAAhgIARAAIAAANQAGgHAJgEQAIgFALAAQANAAAHAFQAIAEACAIQAOgRAVAAQAQAAAJAIQAKAIgBARIAABCg");
	this.shape_229.setTransform(-97,199.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#660000").s().p("AgIBDIAAhgIARAAIAABggAgIgwIAAgSIARAAIAAASg");
	this.shape_230.setTransform(-144.2,198.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#660000").s().p("AgCA/QgGgDgCgEQgDgFAAgPIAAg3IgNAAIAAgMIANAAIAAgZIATgJIAAAiIATAAIAAAMIgTAAIAAA4QAAAHABACIACADQADACAEAAIAJgBIACAPIgOABQgKAAgFgDg");
	this.shape_231.setTransform(-149.4,198.4);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#660000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIAQgCQAWgDALgDIAAgEQABgKgGgEQgHgGgOAAQgNAAgGAEQgHAEgDAKIgSgCQADgKAGgGQAFgHALgDQALgEANAAQAOAAAJADQAJADAFAFQADAEACAHIABAPIAAAVQAAAXABAGQACAGADAGIgTAAQgDgFgBgHQgKAIgLADQgIADgLAAQgTAAgJgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAFAFQAHAEAKAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_232.setTransform(-158.6,200);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#660000").s().p("AgIBDIAAiFIARAAIAACFg");
	this.shape_233.setTransform(-167,198.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#660000").s().p("AgYA+QgLgGgGgMQgGgMAAgOQAAgPAFgLQAGgMALgGQALgGAOgBQAJAAAIAFQAHADAFAGIAAgwIATAAIAACFIgRAAIAAgMQgLAOgUAAQgNAAgLgGgAgUgKQgIAJAAATQAAASAJAKQAJAJALAAQANAAAIgJQAJgJAAgSQAAgTgJgJQgJgKgNAAQgLAAgJAJg");
	this.shape_234.setTransform(-193.5,198.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#660000").s().p("AgYA+QgLgGgGgMQgGgMAAgOQAAgPAFgLQAGgMALgGQALgGAOgBQAJAAAIAFQAHADAFAGIAAgwIATAAIAACFIgRAAIAAgMQgLAOgUAAQgNAAgLgGgAgUgKQgIAJAAATQAAASAJAKQAJAJALAAQANAAAIgJQAJgJAAgSQAAgTgJgJQgJgKgNAAQgLAAgJAJg");
	this.shape_235.setTransform(-271.1,198.3);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#660000").s().p("AgIBDIAAhgIARAAIAABggAgIgwIAAgSIARAAIAAASg");
	this.shape_236.setTransform(-279.1,198.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#660000").s().p("AgeA2IAAAMIgRAAIAAiFIATAAIAAAwQAMgNARgBQAKABAKADQAJAEAGAHQAGAGADAJQADAJAAAKQAAAZgOAOQgOANgUAAQgSAAgMgOgAgVgJQgJAJAAARQAAARAGAIQAIANAQAAQALAAAJgJQAJgKAAgSQAAgTgJgJQgIgJgMAAQgMAAgJAKg");
	this.shape_237.setTransform(-287.2,198.3);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#660000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIAQgCQAWgDALgDIAAgEQABgKgGgEQgHgGgOAAQgNAAgGAEQgHAEgDAKIgSgCQADgKAGgGQAFgHALgDQALgEANAAQAOAAAJADQAJADAFAFQADAEACAHIABAPIAAAVQAAAXABAGQACAGADAGIgTAAQgDgFgBgHQgLAIgKADQgIADgLAAQgTAAgJgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAFAFQAHAEAKAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_238.setTransform(-299.4,200);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#660000").s().p("AAaBDIAAg+QABgLgHgGQgGgFgLAAQgHAAgIADQgHAEgEAHQgDAFAAAMIAAA1IgTAAIAAiFIATAAIAAAwQAOgOATAAQAMABAJAEQAJAEAFAIQADAHAAANIAAA+g");
	this.shape_239.setTransform(-311.3,198.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#660000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIAQgCQAWgDALgDIAAgEQABgKgGgEQgHgGgOAAQgNAAgGAEQgHAEgDAKIgSgCQADgKAGgGQAFgHALgDQALgEANAAQAOAAAJADQAJADAFAFQADAEACAHIABAPIAAAVQAAAXABAGQACAGADAGIgTAAQgDgFgBgHQgKAIgLADQgIADgLAAQgTAAgJgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAFAFQAHAEAKAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_240.setTransform(255.4,176.5);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#660000").s().p("AAbBDIAAg+QgBgLgFgGQgHgFgLAAQgIAAgHAEQgHADgEAHQgCAFAAAMIAAA1IgTAAIAAiFIATAAIAAAwQAMgOAUAAQAMABAKAEQAIAEAEAIQAFAHAAANIAAA+g");
	this.shape_241.setTransform(243.6,174.7);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#660000").s().p("AgYAuQgJgDgEgFQgEgFgCgHQgBgFAAgLIAAg6IATAAIAAA0QAAANABAFQACAGAGAEQAFAEAJgBQAHABAIgEQAHgEADgGQADgHAAgMIAAgzIATAAIAABgIgRAAIAAgPQgNARgVAAQgKAAgIgEg");
	this.shape_242.setTransform(213.6,176.7);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#660000").s().p("AAdBEIAAgvQgEAFgIAEQgIADgJAAQgTAAgOgNQgOgPAAgWQAAgPAGgMQAFgMAMgFQALgHANAAQATAAAMAQIAAgNIARAAIAACFgAgTguQgJAKAAATQAAASAJAKQAJAIAMABQAMAAAJgJQAIgJAAgRQAAgUgJgJQgJgLgMAAQgMABgIAIg");
	this.shape_243.setTransform(201.4,178.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#660000").s().p("AgYA+QgLgGgGgMQgGgMAAgOQAAgPAFgLQAGgMALgGQALgGAOgBQAJAAAIAEQAHAEAFAGIAAgwIATAAIAACFIgRAAIAAgMQgLAOgUAAQgNAAgLgGgAgUgKQgIAJAAATQAAASAJAKQAJAIALABQANAAAIgJQAJgJAAgSQAAgTgJgJQgJgKgNAAQgLAAgJAJg");
	this.shape_244.setTransform(171.5,174.8);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#660000").s().p("AghA+QgMgIABgQIASACQABAIAGADQAGAFANAAQAMAAAHgFQAHgEACgIQACgFAAgQQgMAMgSAAQgXAAgMgPQgNgOAAgTQAAgOAFgMQAGgLAMgHQALgGAOgBQATABAMAOIAAgMIASAAIAABTQAAAXgFAJQgFAJgMAGQgMAGgPgBQgUAAgNgHgAgUguQgJAJABARQgBAUAJAIQAJAIAMABQANgBAIgIQAJgIAAgTQAAgSgJgIQgIgKgNAAQgMAAgJAJg");
	this.shape_245.setTransform(128.6,178.4);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#660000").s().p("AA5AyIAAg8QAAgKgCgFQgCgEgFgDQgFgCgGAAQgMAAgIAGQgHAHgBAPIAAA4IgRAAIAAg+QAAgLgFgGQgFgFgKAAQgIAAgGADQgHAEgEAHQgDAHAAANIAAAyIgTAAIAAhgIASAAIAAANQAFgHAIgEQAJgFAMAAQALAAAJAFQAGAEADAIQAOgRAVAAQARAAAJAIQAIAIABARIAABCg");
	this.shape_246.setTransform(85.4,176.4);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#660000").s().p("AgCA/QgGgDgCgEQgDgFAAgPIAAg3IgNAAIAAgMIANAAIAAgZIATgJIAAAiIATAAIAAAMIgTAAIAAA4QAAAHABACIADADQACACAEAAIAJgBIACAPIgOABQgKAAgFgDg");
	this.shape_247.setTransform(55.8,174.9);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#660000").s().p("AgIBDIAAhgIARAAIAABggAgIgwIAAgSIARAAIAAASg");
	this.shape_248.setTransform(50.2,174.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#660000").s().p("AgiAmQgNgNAAgYQAAgPAFgMQAGgMAMgGQANgGANAAQASAAAMAIQAMAIACAPIgSADQgDgKgGgFQgGgFgKAAQgOAAgIAJQgJAJAAASQAAAUAJAJQAIAIANAAQALAAAHgGQAIgGACgMIASACQgDARgMAKQgNAJgSAAQgWAAgOgNg");
	this.shape_249.setTransform(42.8,176.5);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#660000").s().p("AgUBVIADgOIAJABQAGAAACgDQACgDAAgOIAAhlIATAAIAABmQABASgGAHQgHAJgPAAQgHAAgHgCgAAChDIAAgTIATAAIAAATg");
	this.shape_250.setTransform(14.4,176.7);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#660000").s().p("AgYA+QgLgGgGgMQgGgMAAgOQAAgPAFgLQAGgMALgGQALgGAOgBQAJAAAIAEQAHAEAFAGIAAgwIATAAIAACFIgRAAIAAgMQgLAOgUAAQgNAAgLgGgAgUgKQgIAJAAATQAAASAJAKQAJAIALABQANAAAIgJQAJgJAAgSQAAgTgJgJQgJgKgNAAQgLAAgJAJg");
	this.shape_251.setTransform(-45.7,174.8);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#660000").s().p("AgYA+QgLgGgGgMQgGgMAAgOQAAgPAFgLQAGgMALgGQALgGAOgBQAJAAAIAEQAHAEAFAGIAAgwIATAAIAACFIgRAAIAAgMQgLAOgUAAQgNAAgLgGgAgUgKQgIAJAAATQAAASAJAKQAJAIALABQANAAAIgJQAJgJAAgSQAAgTgJgJQgJgKgNAAQgLAAgJAJg");
	this.shape_252.setTransform(-81.5,174.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#660000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIAQgCQAWgDALgDIAAgEQABgKgGgEQgHgGgOAAQgNAAgGAEQgHAEgDAKIgSgCQADgKAGgGQAFgHALgDQALgEANAAQAOAAAJADQAJADAFAFQADAEACAHIABAPIAAAVQAAAXABAGQACAGADAGIgTAAQgDgFgBgHQgKAIgLADQgIADgLAAQgTAAgJgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAFAFQAHAEAKAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_253.setTransform(-105,176.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#660000").s().p("AgCA/QgGgDgCgEQgDgFABgPIAAg3IgOAAIAAgMIAOAAIAAgZIARgJIAAAiIATAAIAAAMIgTAAIAAA4QAAAHABACIADADQADACAEAAIAIgBIADAPIgOABQgKAAgFgDg");
	this.shape_254.setTransform(-184.1,174.9);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#660000").s().p("AgpArQgJgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIAQgCQAXgDAKgDIABgEQgBgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQACgKAHgGQAFgHALgDQALgEANAAQAOAAAKADQAIADAEAFQAFAEACAHIAAAPIAAAVQAAAXABAGQACAGADAGIgUAAQgCgFgBgHQgKAIgKADQgJADgLAAQgSAAgLgIgAgEAGIgQADQgFACgCAEQgDADAAAFQAAAGAFAFQAHAEAKAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_255.setTransform(-205.2,176.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#660000").s().p("AgCA/QgGgDgCgEQgDgFABgPIAAg3IgOAAIAAgMIAOAAIAAgZIASgJIAAAiIASAAIAAAMIgSAAIAAA4QAAAHAAACIADADQADACAEAAIAIgBIADAPIgOABQgLAAgEgDg");
	this.shape_256.setTransform(-213.9,174.9);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#660000").s().p("AgvBEIAAiFIARAAIAAANQAGgIAHgEQAIgEAKAAQAOABALAGQALAHAFALQAGAMABAOQAAAPgHALQgGALgMAHQgMAGgMAAQgIAAgIgDQgIgEgFgFIAAAvgAgVgsQgJAJAAATQgBASAKAJQAIAIAMABQAMgBAJgIQAJgKAAgSQAAgTgIgKQgKgIgLgBQgMAAgJALg");
	this.shape_257.setTransform(-241.8,178.3);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#660000").s().p("AA5AyIAAg8QAAgKgCgFQgCgEgFgDQgFgCgGAAQgMAAgIAGQgHAHgBAPIAAA4IgRAAIAAg+QAAgLgFgGQgFgFgKAAQgIAAgGADQgHAEgEAHQgDAHAAANIAAAyIgTAAIAAhgIASAAIAAANQAFgHAIgEQAJgFAMAAQALAAAJAFQAGAEADAIQAOgRAVAAQARAAAJAIQAIAIABARIAABCg");
	this.shape_258.setTransform(-257,176.4);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#660000").s().p("AgIBDIAAhgIARAAIAABggAgIgwIAAgSIARAAIAAASg");
	this.shape_259.setTransform(-268.4,174.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#660000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIARgCQAVgDALgDIAAgEQABgKgGgEQgHgGgOAAQgNAAgGAEQgHAEgDAKIgSgCQADgKAFgGQAGgHALgDQALgEANAAQAPAAAIADQAJADAFAFQADAEACAHIABAPIAAAVQABAXABAGQAAAGAEAGIgTAAQgDgFgBgHQgLAIgKADQgIADgLAAQgSAAgKgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAGAFQAGAEAKAAQAKAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_260.setTransform(-293.5,176.5);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#660000").s().p("AA5AyIAAg8QAAgKgCgFQgCgEgFgDQgFgCgGAAQgMAAgIAGQgHAHgBAPIAAA4IgRAAIAAg+QAAgLgFgGQgFgFgKAAQgIAAgGADQgHAEgEAHQgDAHAAANIAAAyIgTAAIAAhgIASAAIAAANQAFgHAIgEQAJgFAMAAQALAAAJAFQAGAEADAIQAOgRAVAAQARAAAJAIQAIAIABARIAABCg");
	this.shape_261.setTransform(-308.3,176.4);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#660000").s().p("AgIBDIAAhgIARAAIAABggAgIgwIAAgSIARAAIAAASg");
	this.shape_262.setTransform(238.9,151.2);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#660000").s().p("AAaAyIAAg6QAAgKgCgFQgCgFgFgDQgGgDgIAAQgLAAgIAGQgJAHAAATIAAA0IgTAAIAAhgIARAAIAAANQAMgQAWAAQAKAAAJAEQAIADAEAFQAFAFABAHIABAQIAAA7g");
	this.shape_263.setTransform(211.4,152.9);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#660000").s().p("AgIBDIAAhgIARAAIAABggAgIgwIAAgSIARAAIAAASg");
	this.shape_264.setTransform(191.1,151.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#660000").s().p("AghAmQgOgNgBgYQAAgPAHgMQAFgMANgGQAMgGANAAQASAAAMAIQAMAIADAPIgTADQgCgKgHgFQgGgFgKAAQgOAAgJAJQgIAJAAASQAAAUAIAJQAJAIANAAQALAAAIgGQAHgGACgMIATACQgDARgNAKQgNAJgSAAQgWAAgNgNg");
	this.shape_265.setTransform(183.7,153);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#660000").s().p("AgYAuQgJgDgEgFQgEgFgCgHQgBgFAAgLIAAg6IATAAIAAA0IABASQACAGAGAEQAFADAJAAQAHAAAIgDQAHgEADgGQADgHAAgNIAAgyIATAAIAABfIgRAAIAAgOQgNARgVAAQgKAAgIgEg");
	this.shape_266.setTransform(171.9,153.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#660000").s().p("AgIAwIgqhfIAUAAIAYA4IAGAUIAHgTIAZg5IATAAIgqBfg");
	this.shape_267.setTransform(143.9,153.1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#660000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_268.setTransform(132.5,153);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#660000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_269.setTransform(102.7,153);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#660000").s().p("AAaAyIAAg6QAAgKgCgFQgCgFgFgDQgGgDgIAAQgLAAgIAGQgJAHAAATIAAA0IgTAAIAAhgIARAAIAAANQAMgQAWAAQAKAAAJAEQAIADAEAFQAFAFABAHIABAQIAAA7g");
	this.shape_270.setTransform(84.8,152.9);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#660000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_271.setTransform(72.9,153);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#660000").s().p("AglA3QgOgNAAgYQAAgaARgNQAOgLAUAAQAXAAAPAOQAOAMAAAXQAAASgGALQgHALgMAGQgMAFgPABQgWAAgPgOgAgWgJQgKAJAAASQAAASAKAKQAJAJANAAQAOAAAJgJQAKgKAAgSQAAgSgKgJQgJgJgOAAQgNAAgJAJgAgJgqIANgaIAYAAIgXAag");
	this.shape_272.setTransform(55,151.3);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#660000").s().p("AgIBDIAAhgIARAAIAABggAgIgwIAAgSIARAAIAAASg");
	this.shape_273.setTransform(46.6,151.2);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#660000").s().p("AgIBDIAAhgIARAAIAABggAgIgwIAAgSIARAAIAAASg");
	this.shape_274.setTransform(28.8,151.2);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#660000").s().p("AgIAwIgqhfIAUAAIAYA4IAGAUIAHgTIAZg5IATAAIgqBfg");
	this.shape_275.setTransform(21,153.1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#660000").s().p("AAaAyIAAg6QAAgKgCgFQgCgFgFgDQgGgDgIAAQgLAAgIAGQgJAHAAATIAAA0IgTAAIAAhgIARAAIAAANQAMgQAWAAQAKAAAJAEQAIADAEAFQAFAFABAHIABAQIAAA7g");
	this.shape_276.setTransform(9.6,152.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#660000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_277.setTransform(-2.3,153);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#660000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_278.setTransform(-30.9,153);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#660000").s().p("AgoBCIgDgPIAMABQAGAAAEgCQADgBACgEIAGgMIACgEIgqhgIAVAAIAWA4IAHAVIAIgVIAYg4IATAAIgrBhQgGAQgDAGQgFAJgGADQgHAEgJAAQgFAAgHgCg");
	this.shape_279.setTransform(-58.8,155);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#660000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_280.setTransform(-76.2,153);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#660000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_281.setTransform(-95.3,153);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#660000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_282.setTransform(-112.1,153);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#660000").s().p("AgYA+QgLgGgGgMQgGgLAAgPQAAgPAFgLQAGgMALgGQALgGAOAAQAJAAAIADQAHAEAFAGIAAgwIATAAIAACFIgRAAIAAgMQgLAOgUAAQgNAAgLgGgAgUgKQgIAJAAATQAAASAJAKQAJAIALABQANAAAIgJQAJgJAAgSQAAgTgJgKQgJgJgNAAQgLAAgJAJg");
	this.shape_283.setTransform(-124.4,151.3);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#660000").s().p("AAaAyIAAg6QAAgKgCgFQgCgFgFgDQgGgDgIAAQgLAAgIAGQgJAHAAATIAAA0IgTAAIAAhgIARAAIAAANQAMgQAWAAQAKAAAJAEQAIADAEAFQAFAFABAHIABAQIAAA7g");
	this.shape_284.setTransform(-136,152.9);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#660000").s().p("AgeA2IAAAMIgRAAIAAiFIATAAIAAAvQAMgNARABQAKAAAKADQAJAEAGAGQAGAHADAJQADAIAAALQAAAZgOAOQgOANgUAAQgSAAgMgOgAgVgKQgJAKAAAQQAAASAGAIQAIANAQAAQALgBAJgIQAJgKAAgSQAAgSgJgKQgIgJgMAAQgMAAgJAJg");
	this.shape_285.setTransform(-159.5,151.3);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#660000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_286.setTransform(-177.7,153);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#660000").s().p("AA5AyIAAg8QgBgKgBgFQgCgEgFgDQgEgCgHAAQgMAAgIAGQgHAHAAAPIAAA4IgSAAIAAg+QAAgLgFgGQgEgFgLAAQgIAAgGADQgIAEgCAHQgEAHAAANIAAAyIgTAAIAAhgIARAAIAAANQAGgHAJgEQAIgFAMAAQALAAAIAFQAIAEACAIQAOgRAVAAQAQAAAKAIQAJAIAAARIAABCg");
	this.shape_287.setTransform(-192.6,152.9);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#660000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_288.setTransform(-207.6,153);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#660000").s().p("AghAmQgPgNAAgYQABgPAFgMQAGgMAMgGQAMgGAOAAQASAAAMAIQAMAIADAPIgTADQgCgKgHgFQgHgFgJAAQgOAAgJAJQgIAJAAASQAAAUAIAJQAJAIANAAQALAAAHgGQAIgGACgMIASACQgCARgNAKQgNAJgSAAQgWAAgNgNg");
	this.shape_289.setTransform(-218.5,153);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#660000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_290.setTransform(-236.2,153);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#660000").s().p("AgIBDIAAhgIARAAIAABggAgIgwIAAgSIARAAIAAASg");
	this.shape_291.setTransform(-244.5,151.2);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#660000").s().p("AgiAmQgNgNAAgYQAAgPAFgMQAGgMAMgGQANgGANAAQASAAAMAIQAMAIACAPIgSADQgDgKgGgFQgGgFgKAAQgOAAgIAJQgJAJAAASQAAAUAJAJQAIAIANAAQALAAAHgGQAIgGACgMIASACQgDARgMAKQgNAJgSAAQgWAAgOgNg");
	this.shape_292.setTransform(-251.9,153);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#660000").s().p("AgIBDIAAhgIARAAIAABggAgIgwIAAgSIARAAIAAASg");
	this.shape_293.setTransform(-260.1,151.2);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#660000").s().p("AAaAyIAAg6QAAgKgCgFQgCgFgFgDQgGgDgIAAQgLAAgIAGQgJAHAAATIAAA0IgTAAIAAhgIARAAIAAANQAMgQAWAAQAKAAAJAEQAIADAEAFQAFAFABAHIABAQIAAA7g");
	this.shape_294.setTransform(-268.5,152.9);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#660000").s().p("AgIBDIAAhgIARAAIAABggAgIgwIAAgSIARAAIAAASg");
	this.shape_295.setTransform(-276.8,151.2);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#660000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_296.setTransform(-291.1,153);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#660000").s().p("AgeBAQgOgFgIgLQgIgKAAgOIATgCQABALAFAGQAFAHALADQAKAEAMAAQAMAAAJgDQAJgDAEgFQAFgFAAgGQAAgHgFgEQgEgFgJgDIgbgHQgVgFgIgDQgLgEgGgIQgFgHAAgJQAAgLAGgIQAHgKANgEQAMgFAQABQAQAAANAEQANAFAHAKQAHAJABALIgUACQgBgNgKgHQgJgGgRAAQgSAAgIAGQgJAGAAAJQAAAGAGAFQAGAFAYAFQAZAFAJADQANAEAHAJQAGAIAAALQAAALgHAJQgHAKgNAFQgNAGgRgBQgTABgPgGg");
	this.shape_297.setTransform(-304.3,151.2);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#660000").s().p("AgYBSQAJgPADgIIAGgTIAEgUQACgKgBgKQAAgTgEgSQgGgSgNgaIATAAQAOASAHAVQAJAUAAAWQAAAQgHAVQgHAXgQAWg");
	this.shape_298.setTransform(-63.5,130.2);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#660000").s().p("AggA3QgNgLgCgPIAbgDQABAJAGAEQAFAFAIAAQAIAAAGgGQAFgFAAgKQAAgIgFgGQgGgFgIgBQgEAAgHACIADgSQAKAAAGgEQAGgFAAgHQAAgGgFgFQgEgDgGAAQgHAAgFAEQgFAEgBAJIgagEQADgMAFgGQAGgHAJgEQAKgEAMAAQATAAAMALQAKAKAAALQAAARgVAJQANADAHAHQAIAIAAAMQAAAQgOAMQgOALgUAAQgTAAgNgJg");
	this.shape_299.setTransform(-72.3,128.6);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#660000").s().p("AgvA/QABgNAIgLQAIgLAXgTQASgOAEgGQAFgHAAgHQAAgIgEgFQgFgEgJAAQgIAAgFAEQgFAFgBAKIgbgBQACgVANgIQANgJATAAQAVAAAMAKQAMAKAAAPQAAAIgDAIQgEAIgHAHQgFAGgNAKIgQAOIgFAGIA1AAIAAAXg");
	this.shape_300.setTransform(-83.7,128.5);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#660000").s().p("AgfA4QgKgHgDgQIAagDQABAIAFADQAEADAGABQAIAAAGgHQAGgIABgVQgKALgOgBQgRABgNgLQgMgLAAgTQAAgTANgLQANgMAUAAQAVAAAOAPQAOAOAAAiQAAAigPAPQgOAPgXAAQgQAAgLgIgAgPglQgFAFAAALQAAAMAGAGQAFAFAIAAQAHAAAGgFQAFgFAAgKQAAgMgGgGQgGgHgHAAQgIAAgFAGg");
	this.shape_301.setTransform(-94.7,128.6);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#660000").s().p("AAEA/IAAhZQgOAMgUAGIAAgWQAKgDAMgJQAMgJAFgLIAXAAIAAB9g");
	this.shape_302.setTransform(-106.6,128.5);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#660000").s().p("AgaAMIAAgXIA1AAIAAAXg");
	this.shape_303.setTransform(-114.2,130.2);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#660000").s().p("AgfA3QgPgKAAgTQAAgKAGgIQAFgIANgFQgLgDgFgHQgFgIAAgIQAAgOAMgIQALgKAUAAQAUAAALAKQAMAIAAAOQAAAJgGAHQgFAHgJADQAMAFAGAHQAGAHAAALQAAARgMAMQgNAKgVAAQgTAAgNgJgAgOAKQgFAHAAAHQAAAKAGAFQAGAGAHAAQAJAAAFgGQAGgFAAgKQAAgJgGgFQgFgGgJAAQgJABgFAFgAgMgoQgEAFAAAGQAAAHAEAFQAFADAHAAQAHAAAFgDQAFgFAAgHQAAgGgFgFQgFgDgHAAQgHAAgFADg");
	this.shape_304.setTransform(-123.6,128.6);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#660000").s().p("AgbA+QABgaAMgbQALgaASgVIg9AAIAAgXIBdAAIAAASQgLAKgMASQgMASgHAVQgFAVAAARg");
	this.shape_305.setTransform(-134.7,128.6);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#660000").s().p("AgfA3QgPgKAAgTQAAgKAGgIQAFgIANgFQgLgDgFgHQgFgIAAgIQAAgOAMgIQALgKAUAAQAUAAALAKQAMAIAAAOQAAAJgGAHQgFAHgJADQAMAFAGAHQAGAHAAALQAAARgMAMQgNAKgVAAQgTAAgNgJgAgOAKQgFAHAAAHQAAAKAGAFQAGAGAHAAQAJAAAFgGQAGgFAAgKQAAgJgGgFQgFgGgJAAQgJABgFAFgAgMgoQgEAFAAAGQAAAHAEAFQAFADAHAAQAHAAAFgDQAFgFAAgHQAAgGgFgFQgFgDgHAAQgHAAgFADg");
	this.shape_306.setTransform(-145.9,128.6);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#660000").s().p("AAEA/IAAhZQgOAMgUAGIAAgWQAKgDAMgJQAMgJAFgLIAXAAIAAB9g");
	this.shape_307.setTransform(-157.9,128.5);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#660000").s().p("AAFBSQgOgUgHgVQgIgVAAgUQAAgYAJgWQAJgTAMgQIATAAQgOAagEASQgGASAAATQAAAOADAPQADAPAFANIANAZg");
	this.shape_308.setTransform(-165.7,130.2);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#660000").s().p("AAfAsQgEgDgFgHQgKAHgJADQgIADgLAAQgKAAgIgDQgIgEgEgGQgEgFAAgHQAAgKAHgHQAHgGAMgCIAMgDIARgDIAPgDQAAgKgEgEQgEgEgMAAQgJAAgFACQgFADgEAFIgFAHQgBABgFAAQgFAAgDgDQgDgCAAgEQAAgGAFgGQAFgGAKgEQALgDAOAAQASAAAKADQAKAEAEAIQAEAHAAAOIAAAMIAAAOQAAAGADAHIACAJQAAADgEADQgDADgFAAQgEAAgEgDgAADAFIgOADQgFABgEACQgDAEAAAEQAAAGAEADQAFAFAHAAQAHAAAHgEQAHgDADgEQADgGAAgMIAAgEIgRAFg");
	this.shape_309.setTransform(-180.8,130.2);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#660000").s().p("AgJA9QgDgDAAgHIAAhkQAAgHADgEQAEgEAFAAQAGAAAEAEQADADAAAIIAABkQAAAHgDADQgEAEgGAAQgFAAgEgEg");
	this.shape_310.setTransform(-189.4,128.5);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#660000").s().p("AgJA9QgDgDAAgHIAAhkQAAgHADgEQAEgEAFAAQAGAAAEAEQADADAAAIIAABkQAAAHgDADQgEAEgGAAQgFAAgEgEg");
	this.shape_311.setTransform(-194.9,128.5);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#660000").s().p("AgJA9QgDgEAAgHIAAhCQAAgGADgEQAEgDAFAAQAGAAADADQAEAEAAAGIAABCQAAAHgEAEQgDADgGAAQgFAAgEgDgAgIgrQgEgDAAgGQAAgFAEgDQAEgDAEAAQAFAAAEADQAEADAAAFQAAAGgEADQgEADgFAAQgFAAgDgDg");
	this.shape_312.setTransform(-200.3,128.5);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#660000").s().p("AgJA/QgEgCgDgDIgEgIIgEgJIgihQIgCgEIgBgFIgBgEQAAgEAEgEQAEgEAGAAQAIAAADAEQADAEADAJIAgBTIAghUIAEgJIAEgFQADgCAFAAIAHACIAFAEQACADAAADIgBAEIgBAEIgCAEIgjBRIgDAJIgFAIQgCADgEACQgEACgGAAQgFAAgEgCg");
	this.shape_313.setTransform(-209.7,128.5);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#660000").s().p("AgVAsQgKgDgHgHQgHgGgEgJQgDgJAAgKQAAgKADgIQAEgJAHgGQAHgHAKgDQAKgDALAAQAMAAAKADQAKADAHAHQAHAGADAJQAEAIAAAKQAAAKgEAJQgDAJgHAGQgIAHgJADQgKADgMAAQgLAAgKgDgAgNgaQgGAEgDAHQgEAHAAAIQAAAJAEAHQADAHAGADQAGAEAHAAQAMAAAHgIQAHgIAAgOQAAgNgHgIQgHgIgMAAQgHAAgGADg");
	this.shape_314.setTransform(-227.6,130.2);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#660000").s().p("AgjAjQgOgNgBgVQABgNAGgMQAHgKAMgGQALgHAQABQAKAAAJACQAJADAGAEQAGAFADAEQADAFAAAEQAAAEgDADQgEADgFAAQgEAAgCgBIgEgGQgGgGgEgDQgGgDgJAAQgKgBgHAJQgIAHAAANQAAAIACAFQACAGAEAEQADADAFACQAFACAFAAQAIAAAGgDQAGgEAEgGQACgEADgCQADgCAEgBQAFABADADQADADAAAEQAAAEgDAFQgDAFgGAEQgGAFgJACQgJADgMAAQgXAAgOgMg");
	this.shape_315.setTransform(-239.6,130.2);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#660000").s().p("AgYAsQgLgEgFgGQgFgGAAgGQAAgDAEgDQACgDAGAAQADAAACACIAFAFQAEAGAGADQAFADAKAAQAHAAAFgDQAGgDAAgEQAAgGgGgDQgFgDgLgCQgOgDgIgEQgJgCgGgFQgEgGAAgIQgBgHAFgGQAFgGAKgEQAIgDAOAAQAJAAAIABQAJACAGADQAFAEADADQACAEAAAEQAAAEgCADQgDACgGAAQgFAAgCgCIgHgGIgHgGQgEgCgGAAQgHAAgFADQgFADAAAEQAAADAEADQADACAGACIAQADQAMADAIAEQAHACAFAGQAEAEAAAHQAAAKgGAGQgFAHgLAEQgKADgOAAQgOAAgKgDg");
	this.shape_316.setTransform(-251,130.2);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#660000").s().p("AgJA9QgDgEAAgHIAAhCQAAgGADgEQAEgDAFAAQAGAAADADQAEAEAAAGIAABCQAAAHgEAEQgDADgGAAQgFAAgEgDgAgIgrQgEgDAAgGQAAgFAEgDQAEgDAEAAQAFAAAEADQAEADAAAFQAAAGgEADQgEADgFAAQgFAAgDgDg");
	this.shape_317.setTransform(-259.1,128.5);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#660000").s().p("AgkAjQgOgNABgVQAAgNAGgMQAGgKANgGQALgHAQABQALAAAIACQAJADAGAEQAGAFADAEQADAFAAAEQAAAEgEADQgDADgFAAQgDAAgCgBIgGgGQgEgGgGgDQgFgDgIAAQgLgBgHAJQgIAHABANQAAAIABAFQACAGAEAEQADADAFACQAFACAFAAQAIAAAGgDQAGgEAEgGQADgEACgCQADgCAEgBQAFABAEADQACADAAAEQAAAEgCAFQgEAFgFAEQgHAFgJACQgJADgMAAQgYAAgOgMg");
	this.shape_318.setTransform(-267.8,130.2);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#660000").s().p("AAZAsQgEgEAAgHIAAgmQAAgLgEgGQgDgGgLAAQgHAAgFADQgGAEgDAHQgCAFAAANIAAAdQAAAHgEAEQgDADgHAAQgFAAgEgDQgDgEAAgHIAAhCQAAgHADgDQADgDAGAAIAGABIAFAEQACADAAAEIAAADQAGgIAJgEQAIgDAKAAQAKAAAJAEQAJAEADAHQADAEABAFIAAANIAAAqQAAAHgDAEQgEADgGAAQgFAAgEgDg");
	this.shape_319.setTransform(-279.7,130.2);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#660000").s().p("AAfAsQgEgDgFgHQgKAHgJADQgIADgLAAQgKAAgIgDQgIgEgEgGQgEgFAAgHQAAgKAHgHQAHgGAMgCIAMgDIARgDIAPgDQAAgKgEgEQgEgEgMAAQgJAAgFACQgFADgEAFIgFAHQgBABgFAAQgFAAgDgDQgDgCAAgEQAAgGAFgGQAFgGAKgEQALgDAOAAQASAAAKADQAKAEAEAIQAEAHAAAOIAAAMIAAAOQAAAGADAHIACAJQAAADgEADQgDADgFAAQgEAAgEgDgAADAFIgOADQgFABgEACQgDAEAAAEQAAAGAEADQAFAFAHAAQAHAAAHgEQAHgDADgEQADgGAAgMIAAgEIgRAFg");
	this.shape_320.setTransform(-291.8,130.2);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#660000").s().p("AggAsQgEgEAAgHIAAhAQAAgPANAAQAHAAADADQADAEAAAHQAFgHAFgEQAEgDAIAAQAJAAAIADQAIAEAAAGQAAAEgEADQgDADgEAAIgHgCIgKgBQgGAAgDACQgDADgCAFIgDANIgBARIAAATQAAAHgEAEQgEADgFAAQgGAAgEgDg");
	this.shape_321.setTransform(-301,130.2);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#660000").s().p("AgtA8QgEgEAAgIIAAhfQAAgFACgEQACgDAEgCQAEgCAGAAIBDAAQAIAAACADQAEADAAAEQAAAFgEACQgCADgIAAIg4AAIAAAgIAvAAQAHAAADADQADACAAAFQAAADgDADQgDACgHAAIgvAAIAAApQAAAIgEAEQgEAEgHAAQgGAAgEgEg");
	this.shape_322.setTransform(-310.8,128.6);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#660000").s().p("AgYA+QgLgHgGgLQgGgMAAgPQAAgOAFgLQAGgMALgGQALgHAOAAQAJABAIAEQAHADAFAGIAAgwIATAAIAACFIgRAAIAAgNQgLAPgUAAQgNAAgLgGgAgUgKQgIAJAAASQAAATAJAJQAJAKALgBQANAAAIgIQAJgJAAgSQAAgTgJgKQgJgJgNAAQgLAAgJAJg");
	this.shape_323.setTransform(146.4,199.1);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#660000").s().p("AgoArQgKgIAAgMQAAgHAEgGQADgGAGgDQAGgDAIgCIAQgCQAWgDALgDIAAgEQABgKgGgEQgHgGgOAAQgNAAgGAEQgHAEgDAKIgSgCQADgKAGgGQAFgHALgDQALgEANAAQAOAAAJADQAJADAFAFQADAEACAHIABAPIAAAVQAAAXABAGQACAGADAGIgTAAQgDgFgBgHQgKAIgLADQgIADgLAAQgTAAgJgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAFAFQAHAEAKAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_324.setTransform(134.8,200.8);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#660000").s().p("AgYA+QgLgHgGgLQgGgMAAgPQAAgOAFgLQAGgMALgGQALgHAOAAQAJABAIAEQAHADAFAGIAAgwIATAAIAACFIgRAAIAAgNQgLAPgUAAQgNAAgLgGgAgUgKQgIAJAAASQAAATAJAJQAJAKALgBQANAAAIgIQAJgJAAgSQAAgTgJgKQgJgJgNAAQgLAAgJAJg");
	this.shape_325.setTransform(101.1,199.1);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#660000").s().p("AgYAvQgJgEgEgFQgEgFgCgHQgBgFAAgKIAAg8IATAAIAAA1IABARQACAHAGAEQAFAEAJAAQAHAAAIgEQAHgEADgHQADgGAAgNIAAgzIATAAIAABgIgRAAIAAgOQgNAQgVAAQgKAAgIgCg");
	this.shape_326.setTransform(71.5,200.9);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#660000").s().p("AglA4QgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPANQAOAOAAAVQAAATgGALQgHALgMAGQgMAFgPAAQgWABgPgNgAgWgJQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgSgKgJQgJgKgOAAQgNAAgJAKgAgJgqIANgaIAYAAIgXAag");
	this.shape_327.setTransform(23.9,199);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#660000").s().p("AgIAwIgqhgIAUAAIAYA6IAGATIAHgSIAZg7IATAAIgqBgg");
	this.shape_328.setTransform(-10.1,200.8);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#660000").s().p("AgiAmQgOgNABgYQAAgPAFgMQAHgMALgGQAMgGAOAAQASAAAMAIQALAIADAPIgSADQgDgKgGgFQgHgFgJAAQgNAAgJAJQgJAJAAASQAAAUAJAJQAIAIANAAQALAAAHgGQAIgGACgMIATACQgEARgMAKQgNAJgSAAQgWAAgOgNg");
	this.shape_329.setTransform(-44.4,200.8);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#660000").s().p("AgkA4QgOgOAAgXQAAgYAOgOQAPgNAWAAQAWAAAOANQAOANAAAYIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgFQAIgEAEgLIAUADQgFAOgNAIQgMAJgTgBQgYABgOgNgAgUgLQgJAIgBAMIA9AAQgBgMgGgGQgJgKgOAAQgMAAgJAIgAgKgqIANgaIAZAAIgXAag");
	this.shape_330.setTransform(-102.6,199);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#660000").s().p("AgeA2IAAAMIgRAAIAAiFIATAAIAAAwQAMgOARAAQAKAAAKAEQAJAEAGAGQAGAHADAJQADAJAAAKQAAAZgOANQgOAOgUAAQgSAAgMgOgAgVgKQgJAKAAAQQAAASAGAIQAIAMAQAAQALABAJgKQAJgJAAgTQAAgRgJgKQgIgJgMAAQgMAAgJAJg");
	this.shape_331.setTransform(-119.1,199.1);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#660000").s().p("AgCA/QgGgDgCgEQgCgFgBgPIAAg3IgNAAIAAgMIANAAIAAgZIASgJIAAAiIATAAIAAAMIgTAAIAAA4QAAAHABACIAEADQACACAEAAIAIgBIADAPIgOABQgKAAgFgDg");
	this.shape_332.setTransform(-157.9,199.2);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#660000").s().p("AgwBFIAAiGIASAAIAAAMQAGgHAIgDQAHgEAKgBQAOAAAMAHQAKAGAFAMQAHAMgBANQAAAPgGALQgGAMgMAHQgMAGgMAAQgIAAgIgEQgHgDgGgFIAAAwgAgVgtQgKAKAAATQAAASAJAIQAJAKAMgBQAMABAJgKQAJgJAAgTQAAgSgIgJQgKgKgLABQgMgBgJAKg");
	this.shape_333.setTransform(-203.7,202.6);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#660000").s().p("AAdAwIgXgdIgGgJIgcAmIgXAAIApgxIgmgvIAXAAIASAXIAHALIAIgKIATgYIAXAAIgnAuIApAyg");
	this.shape_334.setTransform(-248.8,200.8);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#660000").s().p("AgkA4QgOgOAAgXQAAgYAOgOQAPgNAWAAQAWAAAOANQAOANAAAYIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgFQAIgEAEgLIAUADQgFAOgNAIQgMAJgTgBQgYABgOgNgAgUgLQgJAIgBAMIA9AAQgBgMgGgGQgJgKgOAAQgMAAgJAIgAgKgqIANgaIAZAAIgXAag");
	this.shape_335.setTransform(-260.2,199);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#660000").s().p("AgYA+QgLgHgGgLQgGgMAAgPQAAgOAFgLQAGgMALgGQALgHAOAAQAJABAIAEQAHADAFAGIAAgwIATAAIAACFIgRAAIAAgNQgLAPgUAAQgNAAgLgGgAgUgKQgIAJAAASQAAATAJAJQAJAKALgBQANAAAIgIQAJgJAAgSQAAgTgJgKQgJgJgNAAQgLAAgJAJg");
	this.shape_336.setTransform(-308.2,199.1);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#660000").s().p("AggA+QgNgIAAgQIATADQABAHAFADQAHAFAMAAQANAAAHgFQAHgEADgJQABgFAAgQQgNANgRAAQgXAAgNgOQgMgPAAgTQAAgOAGgMQAFgMAMgGQAKgHAPAAQATAAAMAPIAAgMIASAAIAABTQAAAWgFAKQgGAJgLAGQgLAFgRABQgTgBgMgHgAgUguQgJAJAAASQAAATAJAIQAIAJANAAQANAAAJgJQAJgIgBgTQABgRgJgJQgJgKgNAAQgMAAgJAJg");
	this.shape_337.setTransform(209.3,179.2);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#660000").s().p("AgwBFIAAiGIASAAIAAAMQAGgHAIgDQAHgFAKAAQAOAAAMAHQAKAGAFAMQAHALgBAPQAAAOgGAMQgGAMgMAGQgLAGgNAAQgIAAgIgEQgHgDgGgFIAAAwgAgVgsQgKAJAAATQABARAIAJQAJAKANgBQALABAJgKQAJgJAAgSQAAgTgJgJQgIgKgMABQgMgBgJALg");
	this.shape_338.setTransform(178.9,179.1);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#660000").s().p("AgpArQgJgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIAQgCQAXgDAKgDIABgEQgBgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQACgKAHgGQAFgHALgDQALgEANAAQAOAAAKADQAJADADAFQAFAEABAHIABAPIAAAVQAAAXABAGQABAGAEAGIgTAAQgEgFAAgHQgKAIgKADQgJADgLAAQgSAAgLgIgAgDAGIgRADQgFACgCAEQgDADAAAFQAAAGAFAFQAHAEAKAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_339.setTransform(149.9,177.3);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#660000").s().p("AgYA+QgLgGgGgMQgGgLAAgPQAAgPAFgLQAGgMALgGQALgHAOAAQAJAAAIAFQAHADAFAGIAAgwIATAAIAACFIgRAAIAAgNQgLAPgUAAQgNAAgLgGgAgUgKQgIAJAAATQAAASAJAJQAJAKALgBQANAAAIgIQAJgJAAgSQAAgTgJgJQgJgKgNAAQgLAAgJAJg");
	this.shape_340.setTransform(119.7,175.6);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#660000").s().p("AgYAvQgJgEgEgFQgEgFgCgHQgBgFAAgKIAAg8IATAAIAAA1IABASQACAGAGAEQAFAEAJAAQAHAAAIgEQAHgEADgGQADgHAAgMIAAg0IATAAIAABhIgRAAIAAgPQgNAQgVAAQgKAAgIgCg");
	this.shape_341.setTransform(108.1,177.4);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#660000").s().p("AgoBCIgCgPIAKABQAHAAADgCQAFgBACgEIAGgMIABgEIgqhgIAUAAIAYA4IAHAVIAIgVIAXg4IATAAIgqBhQgHAQgDAGQgFAJgHADQgGAEgJAAQgFAAgHgCg");
	this.shape_342.setTransform(97,179.3);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#660000").s().p("AAxBDIgSgoIg/AAIgRAoIgWAAIA7iFIAVAAIA/CFgAgKgaIgQAmIAyAAIgPglQgIgQgDgLQgCANgGANg");
	this.shape_343.setTransform(84.7,175.5);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#660000").s().p("AgYA+QgLgGgGgMQgGgLAAgPQAAgPAFgLQAGgMALgGQALgHAOAAQAJAAAIAFQAHADAFAGIAAgwIATAAIAACFIgRAAIAAgNQgLAPgUAAQgNAAgLgGgAgUgKQgIAJAAATQAAASAJAJQAJAKALgBQANAAAIgIQAJgJAAgSQAAgTgJgJQgJgKgNAAQgLAAgJAJg");
	this.shape_344.setTransform(42.6,175.6);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#660000").s().p("AgvBFIAAiGIARAAIAAAMQAGgHAHgDQAIgFAKAAQAOAAALAHQALAGAGAMQAFALAAAPQABAOgHAMQgGAMgLAGQgMAGgNAAQgJAAgHgEQgIgDgEgFIAAAwgAgVgsQgKAJABATQAAARAJAJQAIAKANgBQALABAJgKQAJgJAAgSQAAgTgJgJQgIgKgMABQgLgBgKALg");
	this.shape_345.setTransform(19.4,179.1);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#660000").s().p("AA4AyIAAg8QAAgKgBgFQgCgEgFgDQgFgCgGAAQgMAAgIAGQgHAHgBAPIAAA4IgRAAIAAg+QAAgLgFgGQgEgFgLAAQgIAAgHADQgHAEgDAHQgCAHAAANIAAAyIgTAAIAAhgIARAAIAAANQAFgHAIgEQAJgFALAAQAMAAAJAFQAGAEAEAIQANgRAVAAQAQAAAKAIQAIAIABARIAABCg");
	this.shape_346.setTransform(-43.5,177.2);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#660000").s().p("AglA4QgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPANQAOAOAAAVQAAAUgGAKQgHALgMAFQgMAHgPgBQgWABgPgNgAgWgJQgKAJAAASQAAASAKAKQAJAJANAAQAOAAAJgJQAKgKAAgTQAAgRgKgJQgJgKgOAAQgNAAgJAKgAgJgqIANgZIAYAAIgXAZg");
	this.shape_347.setTransform(-82.3,175.5);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#660000").s().p("AgIBDIAAhgIARAAIAABggAgIgvIAAgTIARAAIAAATg");
	this.shape_348.setTransform(-90.6,175.5);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#660000").s().p("AgCA/QgGgDgCgEQgCgFgBgPIAAg3IgNAAIAAgMIANAAIAAgZIASgJIAAAiIATAAIAAAMIgTAAIAAA4QAAAHABACIAEADQACACAEAAIAIgBIADAPIgOABQgKAAgFgDg");
	this.shape_349.setTransform(-95.8,175.7);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#660000").s().p("AgIBDIAAhgIARAAIAABggAgIgvIAAgTIARAAIAAATg");
	this.shape_350.setTransform(-101.4,175.5);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#660000").s().p("AgvBFIAAiGIARAAIAAAMQAGgHAHgDQAIgFAKAAQAOAAALAHQALAGAFAMQAGALABAPQAAAOgHAMQgGAMgMAGQgMAGgMAAQgIAAgIgEQgIgDgFgFIAAAwgAgVgsQgJAJAAATQgBARAKAJQAIAKAMgBQAMABAJgKQAJgJAAgSQAAgTgIgJQgKgKgLABQgMgBgJALg");
	this.shape_351.setTransform(-146.4,179.1);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#660000").s().p("AgYAvQgJgEgEgFQgEgFgCgHQgBgFAAgKIAAg8IATAAIAAA1IABASQACAGAGAEQAFAEAJAAQAHAAAIgEQAHgEADgGQADgHAAgMIAAg0IATAAIAABhIgRAAIAAgPQgNAQgVAAQgKAAgIgCg");
	this.shape_352.setTransform(-199.3,177.4);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#660000").s().p("AAdBFIAAgxQgEAGgIADQgIAEgJAAQgTAAgOgOQgOgNAAgXQAAgPAGgMQAFgLAMgGQALgGANgBQATAAAMAQIAAgNIARAAIAACGgAgTgtQgJAJAAATQAAASAJAJQAJAKAMgBQAMAAAJgIQAIgJAAgSQAAgTgJgJQgJgLgMABQgMgBgIAKg");
	this.shape_353.setTransform(-211.6,179.1);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#660000").s().p("AgIBDIAAhgIARAAIAABggAgIgvIAAgTIARAAIAAATg");
	this.shape_354.setTransform(-270.9,175.5);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#660000").s().p("AAdAxIgXgeIgGgJIgcAnIgXAAIApgyIgmgvIAXAAIASAXIAHALIAIgKIATgYIAWAAIgmAuIApAzg");
	this.shape_355.setTransform(-278.6,177.3);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#660000").s().p("AgkA4QgOgOAAgXQAAgYAOgOQAPgNAWAAQAWAAAOANQAOAOAAAWIAAAFIhSAAQABAQAJAJQAKAIANAAQAKAAAHgFQAIgEAEgLIAUADQgFAOgNAIQgMAJgTgBQgYABgOgNgAgUgLQgJAIgBALIA9AAQgBgKgGgHQgJgKgOAAQgMAAgJAIgAgKgqIANgZIAZAAIgXAZg");
	this.shape_356.setTransform(-290,175.5);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#660000").s().p("AA2BDIAAhvIgtBvIgRAAIgthxIAABxIgTAAIAAiFIAeAAIAlBeIAGATIAIgVIAlhcIAbAAIAACFg");
	this.shape_357.setTransform(-304.9,175.5);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#660000").s().p("AgpArQgJgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIARgCQAVgDALgDIABgEQgBgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQACgKAGgGQAGgHALgDQALgEANAAQAPAAAJADQAIADAEAFQAEAEADAHIABAPIAAAVQAAAXAAAGQACAGADAGIgUAAQgDgFAAgHQgLAIgJADQgJADgLAAQgSAAgLgIgAgEAGIgQADQgFACgCAEQgDADAAAFQAAAGAFAFQAGAEAMAAQAJAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_358.setTransform(220.8,153.8);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#660000").s().p("AgdAyIAAhgIARAAIAAAOQAGgKAGgDQAEgEAHAAQAJAAAKAGIgGAPQgHgEgHAAQgGAAgEAEQgFADgCAGQgDAIAAALIAAAyg");
	this.shape_359.setTransform(212.2,153.7);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#660000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIARgCQAVgDALgDIABgEQAAgKgGgEQgHgGgOAAQgNAAgGAEQgGAEgEAKIgSgCQADgKAFgGQAGgHALgDQALgEANAAQAPAAAIADQAKADAEAFQADAEADAHIABAPIAAAVQAAAXABAGQABAGADAGIgUAAQgDgFAAgHQgLAIgKADQgIADgLAAQgTAAgJgIgAgEAGIgQADQgFACgDAEQgCADAAAFQAAAGAGAFQAFAEAMAAQAJAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_360.setTransform(201.7,153.8);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#660000").s().p("AgwBEIAAiFIASAAIAAANQAGgIAIgDQAHgFAKAAQAOABAMAGQAKAHAFALQAHAMgBAOQAAAPgGALQgGAMgMAGQgLAGgNAAQgIAAgIgEQgHgDgGgFIAAAvgAgVgsQgKAJAAATQABARAIAJQAJAKANgBQALABAJgKQAJgJAAgSQAAgTgJgJQgIgJgMAAQgMAAgJAKg");
	this.shape_361.setTransform(190.1,155.6);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#660000").s().p("AgpArQgJgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIAQgCQAXgDAKgDIABgEQgBgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQACgKAHgGQAFgHALgDQALgEANAAQAOAAAKADQAJADADAFQAFAEABAHIABAPIAAAVQAAAXABAGQABAGAEAGIgTAAQgEgFAAgHQgKAIgKADQgJADgLAAQgSAAgLgIgAgDAGIgRADQgFACgCAEQgDADAAAFQAAAGAFAFQAHAEAKAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_362.setTransform(161.2,153.8);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#660000").s().p("AgIBDIAAiFIASAAIAACFg");
	this.shape_363.setTransform(152.8,152);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#660000").s().p("AgeA2IAAAMIgRAAIAAiFIATAAIAAAwQAMgNARgBQAKABAKADQAJAEAGAHQAGAGADAJQADAIAAALQAAAZgOANQgOAOgUAAQgSAAgMgOgAgVgJQgJAJAAARQAAARAGAIQAIAMAQAAQALABAJgKQAJgJAAgSQAAgTgJgJQgIgJgMAAQgMAAgJAKg");
	this.shape_364.setTransform(110.1,152.1);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#660000").s().p("AgoArQgKgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIAQgCQAXgDAKgDIAAgEQAAgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQADgKAGgGQAFgHALgDQALgEANAAQAOAAAJADQAKADADAFQAFAEABAHIABAPIAAAVQAAAXABAGQABAGAEAGIgTAAQgEgFAAgHQgKAIgKADQgJADgLAAQgTAAgJgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAFAFQAGAEALAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_365.setTransform(81.2,153.8);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#660000").s().p("AAbBDIAAg+QAAgLgHgGQgGgFgLAAQgHAAgIADQgHAFgEAGQgDAFAAAMIAAA1IgSAAIAAiFIASAAIAAAwQAOgOATAAQAMABAJAEQAJAEAFAIQADAHAAANIAAA+g");
	this.shape_366.setTransform(69.3,152);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#660000").s().p("AghAmQgPgNAAgYQABgPAFgMQAGgMAMgGQAMgGAOAAQASAAAMAIQAMAIADAPIgTADQgCgKgHgFQgHgFgJAAQgOAAgJAJQgIAJAAASQAAAUAIAJQAJAIANAAQALAAAHgGQAIgGACgMIASACQgCARgNAKQgNAJgSAAQgWAAgNgNg");
	this.shape_367.setTransform(58.3,153.8);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#660000").s().p("AgYAvQgJgEgEgFQgEgFgCgHQgBgFAAgKIAAg8IATAAIAAA1IABASQACAGAGAEQAFADAJAAQAHAAAIgDQAHgEADgGQADgHAAgMIAAg0IATAAIAABhIgRAAIAAgPQgNAQgVAAQgKAAgIgCg");
	this.shape_368.setTransform(46.5,153.9);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#660000").s().p("AA4AyIAAg8QAAgKgBgFQgCgEgFgDQgFgCgGAAQgMAAgHAGQgJAHABAPIAAA4IgSAAIAAg+QAAgLgFgGQgFgFgKAAQgIAAgGADQgIAEgCAHQgDAHgBANIAAAyIgTAAIAAhgIARAAIAAANQAGgHAJgEQAIgFAMAAQAMAAAHAFQAIAEACAIQAOgRAVAAQAQAAAJAIQAKAIgBARIAABCg");
	this.shape_369.setTransform(31.7,153.7);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#660000").s().p("AglA4QgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPANQAOAOAAAVQAAAUgGAKQgHALgMAFQgMAHgPgBQgWABgPgNgAgWgJQgKAJAAASQAAASAKAKQAJAJANAAQAOAAAJgJQAKgJAAgUQAAgRgKgJQgJgKgOAAQgNAAgJAKgAgJgqIANgZIAYAAIgXAZg");
	this.shape_370.setTransform(10.8,152);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#660000").s().p("AggA+QgMgIgBgQIATACQABAIAFADQAIAFALAAQAMAAAIgFQAHgEACgJQACgEAAgQQgNAMgRAAQgXAAgNgOQgMgPAAgTQAAgOAFgMQAHgLAKgHQAMgGAOgBQATABANAOIAAgMIARAAIAABTQAAAWgFAKQgGAKgLAFQgMAGgQAAQgTgBgMgHgAgUguQgIAJgBASQABATAIAIQAJAIAMABQANgBAJgIQAIgIABgTQgBgSgIgIQgKgKgNAAQgLAAgJAJg");
	this.shape_371.setTransform(-25.4,155.7);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#660000").s().p("AgYAvQgJgEgEgFQgEgFgCgHQgBgFAAgKIAAg8IATAAIAAA1IABASQACAGAGAEQAFADAJAAQAHAAAIgDQAHgEADgGQADgHAAgMIAAg0IATAAIAABhIgRAAIAAgPQgNAQgVAAQgKAAgIgCg");
	this.shape_372.setTransform(-55,153.9);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#660000").s().p("AAdBEIAAgwQgEAGgIADQgIAEgJAAQgTAAgOgOQgOgNAAgXQAAgPAGgMQAFgMAMgFQALgHANAAQATAAAMAQIAAgNIARAAIAACFgAgTgtQgJAJAAATQAAASAJAJQAJAKAMgBQAMAAAJgIQAIgJAAgSQAAgTgJgJQgJgKgMAAQgMAAgIAJg");
	this.shape_373.setTransform(-67.2,155.6);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#660000").s().p("AgdAyIAAhgIARAAIAAAOQAGgKAGgDQAEgEAHAAQAJAAAKAGIgGAPQgHgEgHAAQgGAAgEAEQgFADgCAGQgDAIAAALIAAAyg");
	this.shape_374.setTransform(-81.4,153.7);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#660000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIARgCQAVgDALgDIAAgEQABgKgGgEQgHgGgOAAQgNAAgGAEQgHAEgDAKIgSgCQADgKAFgGQAGgHALgDQALgEANAAQAPAAAIADQAJADAFAFQADAEACAHIABAPIAAAVQAAAXACAGQAAAGAEAGIgTAAQgDgFgBgHQgLAIgKADQgIADgLAAQgSAAgKgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAGAFQAGAEAKAAQAKAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_375.setTransform(-91.9,153.8);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#660000").s().p("AgCA/QgGgDgCgEQgCgFAAgPIAAg3IgOAAIAAgMIAOAAIAAgZIASgJIAAAiIATAAIAAAMIgTAAIAAA4QAAAHABACIACADQADACAEAAIAJgBIACAPIgOABQgKAAgFgDg");
	this.shape_376.setTransform(-100.6,152.2);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#660000").s().p("AgIBDIAAiFIASAAIAACFg");
	this.shape_377.setTransform(-111,152);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#660000").s().p("AgYA+QgLgGgGgMQgGgMAAgOQAAgPAFgLQAGgMALgGQALgGAOgBQAJAAAIAFQAHADAFAGIAAgwIATAAIAACFIgRAAIAAgMQgLAOgUAAQgNAAgLgGgAgUgKQgIAJAAATQAAASAJAJQAJAKALgBQANAAAIgIQAJgJAAgSQAAgTgJgJQgJgKgNAAQgLAAgJAJg");
	this.shape_378.setTransform(-160.3,152.1);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#660000").s().p("AgYA+QgLgGgGgMQgGgMAAgOQAAgPAFgLQAGgMALgGQALgGAOgBQAJAAAIAFQAHADAFAGIAAgwIATAAIAACFIgRAAIAAgMQgLAOgUAAQgNAAgLgGgAgUgKQgIAJAAATQAAASAJAJQAJAKALgBQANAAAIgIQAJgJAAgSQAAgTgJgJQgJgKgNAAQgLAAgJAJg");
	this.shape_379.setTransform(-235.5,152.1);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#660000").s().p("AgYAvQgJgEgEgFQgEgFgCgHQgBgFAAgKIAAg8IATAAIAAA1IABASQACAGAGAEQAFADAJAAQAHAAAIgDQAHgEADgGQADgHAAgMIAAg0IATAAIAABhIgRAAIAAgPQgNAQgVAAQgKAAgIgCg");
	this.shape_380.setTransform(-265,153.9);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#660000").s().p("AgYAvQgJgEgEgFQgEgFgCgHQgBgFAAgKIAAg8IATAAIAAA1IABASQACAGAGAEQAFADAJAAQAHAAAIgDQAHgEADgGQADgHAAgMIAAg0IATAAIAABhIgRAAIAAgPQgNAQgVAAQgKAAgIgCg");
	this.shape_381.setTransform(-294.8,153.9);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#660000").s().p("AgzBDIAAiFIBnAAIAAAPIhSAAIAAAqIBHAAIAAAPIhHAAIAAA9g");
	this.shape_382.setTransform(-306.9,152);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#660000").s().p("AgkBSQATgTAJgRQAKgRAEgTQAFgTABgTQAAgNgDgMQgBgMgGgQIATAAQAIAQAEARQAEARAAANQAAASgGAQQgHASgNASQgJAMgRASg");
	this.shape_383.setTransform(-85.6,130.7);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#660000").s().p("AgnA1QgLgLgBgRIAcgCIAAACQAAAJAFAEQAEAFAHAAQAJAAAIgJQAJgIAAgPQAAgIgGgEQgEgEgHAAQgFAAgFACQgGACgEAEIgXgCIAVg/IBHAAIgEAXIgvAAIgHATIAIgCIAIgBQAQAAALAJQAKAKAAAPQAAANgHANQgHAMgNAHQgOAHgNAAQgSAAgNgKg");
	this.shape_384.setTransform(-92.5,129.1);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#660000").s().p("AgSA/IAThWQgHAFgMAEQgLAEgJACIAFgWQAjgNAUgTIARAAIgeB9g");
	this.shape_385.setTransform(-103.7,128.9);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#660000").s().p("AgmA4QgJgIgCgPIAbgCQABAHADADQADAEAGAAQAHAAAEgGQAIgGAFgQQgJAFgJAAQgRAAgLgKQgKgKAAgQQAAgTANgPQAOgPAWAAQAUAAALANQALANAAAVQAAAigRAXQgSAXgaAAQgRAAgKgIgAgGgkQgIAIAAAPQAAALAEADQAFAFAFAAQAFAAAGgEQAFgDAEgHQADgIAAgIQAAgJgFgGQgEgEgHAAQgHAAgGAHg");
	this.shape_386.setTransform(-115,129);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#660000").s().p("AgSA/IAThWQgHAFgMAEQgLAEgJACIAFgWQAjgNAUgTIARAAIgeB9g");
	this.shape_387.setTransform(-126,128.9);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#660000").s().p("AgdAMIAGgXIA1AAIgGAXg");
	this.shape_388.setTransform(-135.2,130.7);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#660000").s().p("AgmA1QgMgLAAgVQAAgTAHgSQAJgYAPgLQAOgMAQAAQARAAAMALQALAMAAAVQAAASgIAVQgJAVgOAMQgNALgRAAQgRAAgLgLgAgCglQgJAJgGAXQgFASAAANQAAALADADQAEAFAGAAQAIgBAFgGQAIgIAGgZQAFgTAAgLQAAgKgDgEQgEgEgGAAQgIAAgEAGg");
	this.shape_389.setTransform(-143.8,129);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#660000").s().p("AgkA3QgLgJgDgRIAbgCQABAKAFADQAEAEAIAAQAJAAAGgGQAGgFAAgJQAAgIgFgEQgGgFgHABIgEAAIAEgUIADAAQAKAAAGgEQAHgFgBgJQAAgGgDgEQgFgDgGAAQgGAAgEAEQgFAEgDAJIgZgFQAEgNAJgIQAOgLASAAQAUAAAKAKQAKAKAAANQAAAKgHAHQgGAJgMADQAKADAEAHQAFAGgBAIQABAOgMALQgPAQgXAAQgTAAgMgJg");
	this.shape_390.setTransform(-155.2,129);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#660000").s().p("AgmA3QgLgLAAgPQAAgMAIgKQAIgJAOgEQgIgFgDgFQgEgGAAgGQAAgIAFgJQAFgIALgFQAKgFANAAQATAAALAJQAKAJAAANQAAAJgGAHQgGAHgMAFQAJAEAEAHQAFAGAAAIQAAAPgLALQgPARgZAAQgTAAgMgJgAgOALQgHAHAAAMQAAAHAEAEQAFAEAHAAQAKAAAGgIQAFgJAAgJQAAgHgEgEQgFgEgHAAQgHAAgHAHgAgDgnQgGAFAAAHQAAAGAFAEQAEADAFAAQAIAAAGgFQAFgFAAgHQAAgFgEgFQgEgDgHAAQgIAAgEAFg");
	this.shape_391.setTransform(-166.2,129);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#660000").s().p("AgSA/IAThWQgHAFgMAEQgLAEgJACIAFgWQAjgNAUgTIARAAIgeB9g");
	this.shape_392.setTransform(-177.3,128.9);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#660000").s().p("AgUBSQgIgQgEgRQgEgRAAgOQAAgRAGgRQAHgRANgSQAJgMARgSIAVAAQgTATgJARQgKARgEATQgFATgBATQAAANADAMQABAMAGAQg");
	this.shape_393.setTransform(-185.3,130.7);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#660000").s().p("AgxAtIAEgQIA4g2IguAAIAFgTIBQAAIgDAOIg5A3IAxAAIgFAUg");
	this.shape_394.setTransform(-200.5,130.7);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#660000").s().p("AgoApQgIgIAAgMQAAgNAJgIQAJgGAYgCQATgBAHgCIACgIQAAgEgEgDQgEgDgGAAQgIAAgEADQgEADgBAEIgcgBQAFgNALgGQAMgIATABQATgBAKAIQAKAGAAALIgBAJIgGAXQgEAQAAAHQAAAGACAGIgbAAIgCgKQgGAGgHADQgIADgIAAQgNAAgJgGgAAKAFQgUACgHAEQgEADgBAFQABAEADADQADADAGAAQAHAAAEgDQAGgCADgFQACgDACgJIACgEIgHACg");
	this.shape_395.setTransform(-211.3,130.7);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#660000").s().p("AgcA/IAWhaIAbAAIgVBagAgEgnIAFgXIAcAAIgGAXg");
	this.shape_396.setTransform(-218.9,128.9);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#660000").s().p("AhDA/IAeh9IAmAAIAUABQAJABAHACQAHACAGAFQAGAEAEAGQAEAGACAIQACAIAAAJQAAAUgIAPQgJAQgOAJQgKAHgQAEQgJACgSAAgAghArIAPAAQAQAAAHgCQAHgCAGgFQAJgHAGgLQAGgMAAgOQAAgOgFgGQgFgHgHgCQgFgCgNAAIgRAAg");
	this.shape_397.setTransform(-229.4,128.9);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#660000").s().p("AgeArQgMgGgFgJQgGgKAAgKQAAgYAQgPQAQgQAaABQAXgBANALQANAMAAASQAAAVgQARQgQAPgaAAQgPAAgLgEgAgKgXQgHAFgEAJQgEAJAAAHQABAKAFAGQAGAGAKgBQAKABAIgJQALgMAAgRQAAgJgGgEQgGgGgIAAQgJAAgHAFg");
	this.shape_398.setTransform(-248.2,130.7);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#660000").s().p("AgcA/IAWhaIAbAAIgVBagAgEgnIAFgXIAcAAIgGAXg");
	this.shape_399.setTransform(-256.7,128.9);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#660000").s().p("AgrAuIAVhZIAaAAIgEARQAOgTARAAQAGAAAHACIgLAUQgDgBgFAAQgHAAgHAFQgIAFgDAIQgEAGgEASIgHAcg");
	this.shape_400.setTransform(-263.2,130.6);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#660000").s().p("AgcA/IAWhaIAbAAIgVBagAgDgnIAEgXIAcAAIgGAXg");
	this.shape_401.setTransform(-270.1,128.9);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#660000").s().p("AgpBAIARhIIgPAAIAEgSIAQAAIACgJQADgMACgEQADgFAHgDQAGgEAKAAQANAAAPAEIgGASQgKgDgGAAQgFAAgCADQgCABgCAIIgBAGIAUAAIgFASIgUAAIgQBIg");
	this.shape_402.setTransform(-275.2,128.8);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#660000").s().p("AgrAuIAVhZIAaAAIgEARQAOgTARAAQAGAAAHACIgLAUQgDgBgFAAQgHAAgHAFQgIAFgDAIQgEAGgEASIgHAcg");
	this.shape_403.setTransform(-283.2,130.6);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#660000").s().p("AgeArQgMgGgFgJQgGgKAAgKQAAgYARgPQAPgQAaABQAXgBANALQANAMAAASQAAAVgQARQgQAPgbAAQgOAAgLgEgAgKgXQgHAFgEAJQgDAJgBAHQAAAKAHAGQAFAGAKgBQAKABAIgJQALgMAAgRQAAgJgGgEQgGgGgIAAQgJAAgHAFg");
	this.shape_404.setTransform(-293.8,130.7);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#660000").s().p("AhBA/IAeh9IA5AAQAQAAAJAEQAJADAFAHQAFAIAAAKQAAAJgEAJQgEAJgGAFQgGAFgHADQgHADgMABIgZABIgTAAIgMAwgAgTgFIAJAAQAWAAAIgCQAIgDAEgGQAFgFAAgHQAAgEgCgDQgDgDgEgCQgEgBgOAAIgVAAg");
	this.shape_405.setTransform(-306.4,128.9);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#660000").s().p("AgiAmQgNgNAAgYQAAgPAFgMQAHgMALgGQANgGANAAQASAAAMAIQAMAIACAPIgSADQgDgKgGgFQgHgFgJAAQgOAAgIAJQgJAJAAASQAAAUAJAJQAIAIANAAQALAAAHgGQAIgGACgMIASACQgDARgMAKQgNAJgSAAQgWAAgOgNg");
	this.shape_406.setTransform(-20.7,199.3);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#660000").s().p("AAdAwIgXgeIgGgIIgcAmIgXAAIAogxIglguIAYAAIARAWIAHALIAIgLIATgWIAWAAIgmAtIApAyg");
	this.shape_407.setTransform(-89.1,199.3);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#660000").s().p("AA2BDIAAhwIgtBwIgRAAIgthxIAABxIgTAAIAAiFIAeAAIAlBeIAGAUIAIgWIAlhcIAbAAIAACFg");
	this.shape_408.setTransform(-115.4,197.5);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#660000").s().p("AgYA+QgLgHgGgLQgGgLAAgQQAAgOAFgLQAGgMALgGQALgGAOAAQAJAAAIADQAHAEAFAGIAAgwIATAAIAACFIgRAAIAAgNQgLAPgUAAQgNAAgLgGgAgUgKQgIAJAAASQAAATAJAKQAJAIALABQANAAAIgJQAJgJAAgSQAAgTgJgKQgJgJgNAAQgLAAgJAJg");
	this.shape_409.setTransform(-148.6,197.6);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#660000").s().p("AgYA+QgLgHgGgLQgGgLAAgQQAAgOAFgLQAGgMALgGQALgGAOAAQAJAAAIADQAHAEAFAGIAAgwIATAAIAACFIgRAAIAAgNQgLAPgUAAQgNAAgLgGgAgUgKQgIAJAAASQAAATAJAKQAJAIALABQANAAAIgJQAJgJAAgSQAAgTgJgKQgJgJgNAAQgLAAgJAJg");
	this.shape_410.setTransform(-208.2,197.6);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#660000").s().p("AgwBEIAAiFIASAAIAAAMQAGgHAIgEQAHgDAKAAQAOAAAMAGQAKAGAFAMQAHALgBAOQAAAPgGALQgGAMgMAHQgMAGgMAAQgIAAgIgDQgHgEgGgFIAAAvgAgVgtQgKAKAAATQAAARAJAKQAJAIAMABQAMgBAJgIQAJgKAAgTQAAgSgIgKQgKgIgLgBQgMABgJAJg");
	this.shape_411.setTransform(-254.1,201.1);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#660000").s().p("AgYAuQgJgDgEgFQgEgFgCgHQgBgFAAgLIAAg6IATAAIAAA0IABARQACAHAGAEQAFADAJAAQAHAAAIgDQAHgEADgHQADgGAAgNIAAgyIATAAIAABfIgRAAIAAgOQgNAQgVABQgKgBgIgDg");
	this.shape_412.setTransform(-284.3,199.4);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#660000").s().p("AgzBDIAAiFIBnAAIAAAQIhSAAIAAApIBHAAIAAAPIhHAAIAAA9g");
	this.shape_413.setTransform(-296.4,197.5);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#660000").s().p("AgiA+QgOgHgGgMQgFgNAAgVIAAhMIAUAAIAABMQAAARAEAJQADAIAKAFQAJAEANAAQAVAAAKgJQAJgJAAgZIAAhMIAUAAIAABMQAAAUgFAMQgFAMgOAIQgNAHgXAAQgUAAgOgGg");
	this.shape_414.setTransform(200.9,174.1);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#660000").s().p("AgYA+QgLgHgGgLQgGgMAAgPQAAgOAFgLQAGgMALgGQALgHAOABQAJAAAIADQAHAEAFAGIAAgwIATAAIAACFIgRAAIAAgNQgLAPgUAAQgNAAgLgGgAgUgKQgIAJAAASQAAATAJAJQAJAJALAAQANABAIgJQAJgJAAgSQAAgTgJgKQgJgJgNAAQgLAAgJAJg");
	this.shape_415.setTransform(158.1,174.1);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#660000").s().p("AgCA/QgGgDgCgEQgCgFgBgPIAAg3IgNAAIAAgMIANAAIAAgZIASgJIAAAiIATAAIAAAMIgTAAIAAA4QAAAHABACIAEADQACACAEAAIAIgBIADAPIgOABQgLAAgEgDg");
	this.shape_416.setTransform(137.8,174.2);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#660000").s().p("Ag4BDIAAiFIBuAAIAAAQIhaAAIAAAoIBUAAIAAAQIhUAAIAAAtIBdAAIAAAQg");
	this.shape_417.setTransform(117.1,174);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#660000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIARgCQAVgDALgDIAAgEQABgKgGgEQgIgGgNAAQgNAAgGAEQgHAEgDAKIgSgCQADgKAFgGQAGgHALgDQALgEANAAQAPAAAIADQAJADAFAFQADAEACAHIACAPIAAAVQAAAXABAGQAAAGAEAGIgUAAQgCgFgBgHQgLAIgKADQgIADgLAAQgSAAgKgIgAgEAGIgQADQgFACgDAEQgCADAAAFQAAAGAGAFQAFAEAMAAQAJAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_418.setTransform(97.7,175.8);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#660000").s().p("AgPBEIAAhTIgRAAIAAgNIARAAIAAgKQAAgKACgFQADgGAHgEQAFgEANAAIARABIgDAPIgKgBQgJAAgEADQgDADAAAJIAAAJIAVAAIAAANIgVAAIAABTg");
	this.shape_419.setTransform(34.4,173.8);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#660000").s().p("AgvBFIAAiGIARAAIAAAMQAGgHAHgEQAIgDAKAAQAPgBALAHQAKAGAGAMQAFAMAAANQABAPgHALQgGAMgLAHQgMAGgNAAQgJAAgHgDQgIgEgEgFIAAAwgAgVgtQgKAKAAATQABASAIAIQAJAJANAAQALAAAJgJQAJgJAAgTQAAgSgJgKQgIgJgMAAQgLAAgKAKg");
	this.shape_420.setTransform(-8.1,177.6);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#660000").s().p("AgYA+QgLgHgGgLQgGgMAAgPQAAgOAFgLQAGgMALgGQALgHAOABQAJAAAIADQAHAEAFAGIAAgwIATAAIAACFIgRAAIAAgNQgLAPgUAAQgNAAgLgGgAgUgKQgIAJAAASQAAATAJAJQAJAJALAAQANABAIgJQAJgJAAgSQAAgTgJgKQgJgJgNAAQgLAAgJAJg");
	this.shape_421.setTransform(-43.5,174.1);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#660000").s().p("AgYA+QgLgHgGgLQgGgMAAgPQAAgOAFgLQAGgMALgGQALgHAOABQAJAAAIADQAHAEAFAGIAAgwIATAAIAACFIgRAAIAAgNQgLAPgUAAQgNAAgLgGgAgUgKQgIAJAAASQAAATAJAJQAJAJALAAQANABAIgJQAJgJAAgSQAAgTgJgKQgJgJgNAAQgLAAgJAJg");
	this.shape_422.setTransform(-103.1,174.1);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#660000").s().p("AgYA+QgLgHgGgLQgGgMAAgPQAAgOAFgLQAGgMALgGQALgHAOABQAJAAAIADQAHAEAFAGIAAgwIATAAIAACFIgRAAIAAgNQgLAPgUAAQgNAAgLgGgAgUgKQgIAJAAASQAAATAJAJQAJAJALAAQANABAIgJQAJgJAAgSQAAgTgJgKQgJgJgNAAQgLAAgJAJg");
	this.shape_423.setTransform(-133,174.1);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#660000").s().p("AgYA+QgLgHgGgLQgGgMAAgPQAAgOAFgLQAGgMALgGQALgHAOABQAJAAAIADQAHAEAFAGIAAgwIATAAIAACFIgRAAIAAgNQgLAPgUAAQgNAAgLgGgAgUgKQgIAJAAASQAAATAJAJQAJAJALAAQANABAIgJQAJgJAAgSQAAgTgJgKQgJgJgNAAQgLAAgJAJg");
	this.shape_424.setTransform(-149.7,174.1);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#660000").s().p("AgwBFIAAiGIASAAIAAAMQAGgHAHgEQAIgDAKAAQAPgBAKAHQALAGAFAMQAHAMAAANQgBAPgGALQgGAMgMAHQgMAGgMAAQgIAAgIgDQgIgEgFgFIAAAwgAgVgtQgJAKAAATQgBASAKAIQAIAJAMAAQAMAAAJgJQAJgJAAgTQAAgSgIgKQgKgJgLAAQgMAAgJAKg");
	this.shape_425.setTransform(-180.1,177.6);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#660000").s().p("AgfArQgLgIgDgPIATgDQABAKAHAFQAHAFAMAAQANAAAHgEQAGgFAAgGQAAgGgGgDQgEgCgPgDQgUgFgIgDQgIgDgEgGQgEgGAAgHQAAgGADgGQAEgFAGgEQAEgDAIgCQAHgCAJAAQAMAAAKAEQAKADAFAGQAEAFACAKIgSACQgCgIgGgEQgGgEgKAAQgNAAgFAEQgGADAAAFQAAAEADACQACADAFACIAPAEQAUAEAIADQAIACAFAGQAEAGAAAIQAAAIgFAIQgGAHgKAEQgKAEgOAAQgUAAgMgIg");
	this.shape_426.setTransform(252.1,152.3);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#660000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_427.setTransform(240.8,152.3);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#660000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_428.setTransform(195.4,152.3);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#660000").s().p("AgfArQgLgIgDgPIATgDQABAKAHAFQAHAFAMAAQANAAAHgEQAGgFAAgGQAAgGgGgDQgEgCgPgDQgUgFgIgDQgIgDgEgGQgEgGAAgHQAAgGADgGQAEgFAGgEQAEgDAIgCQAHgCAJAAQAMAAAKAEQAKADAFAGQAEAFACAKIgSACQgCgIgGgEQgGgEgKAAQgNAAgFAEQgGADAAAFQAAAEADACQACADAFACIAPAEQAUAEAIADQAIACAFAGQAEAGAAAIQAAAIgFAIQgGAHgKAEQgKAEgOAAQgUAAgMgIg");
	this.shape_429.setTransform(178.1,152.3);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#660000").s().p("AgYAvQgJgEgEgFQgEgFgCgHQgBgFAAgLIAAg7IATAAIAAA1IABARQACAHAGAEQAFADAJABQAHgBAIgDQAHgEADgHQADgGAAgNIAAgzIATAAIAABgIgRAAIAAgOQgNAQgVAAQgKAAgIgCg");
	this.shape_430.setTransform(166.7,152.4);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#660000").s().p("AgeBAQgOgGgIgKQgIgLAAgNIATgBQABAJAFAHQAFAGALAFQAKADAMAAQAMAAAJgCQAJgDAEgGQAFgFAAgGQAAgHgFgFQgEgEgJgEIgbgGQgVgEgIgDQgLgGgGgHQgFgIAAgIQAAgKAGgKQAHgIANgFQAMgFAQAAQAQABANAFQANAEAHAKQAHAJABAMIgUABQgBgNgKgGQgJgHgRAAQgSAAgIAGQgJAGAAAIQAAAIAGAEQAGAFAYAFQAZAEAJAFQANADAHAJQAGAIAAALQAAALgHAKQgHAJgNAFQgNAFgRABQgTgBgPgFg");
	this.shape_431.setTransform(153.6,150.5);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#660000").s().p("AgpArQgJgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIAQgCQAXgDAKgDIABgEQgBgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQACgKAHgGQAFgHALgDQALgEANAAQAOAAAKADQAIADAEAFQAFAEACAHIAAAPIAAAVQAAAXABAGQACAGADAGIgUAAQgCgFgBgHQgKAIgKADQgJADgLAAQgSAAgLgIgAgEAGIgQADQgFACgCAEQgDADAAAFQAAAGAFAFQAHAEALAAQAJAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_432.setTransform(128.7,152.3);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#660000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_433.setTransform(100,152.3);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#660000").s().p("AghA9QgMgHABgQIASADQABAHAGADQAGAFANAAQAMAAAHgFQAHgFACgHQACgGAAgQQgMANgSAAQgXAAgMgPQgNgOAAgTQAAgOAFgMQAHgMAKgGQAMgHAOABQATAAAMANIAAgLIASAAIAABTQAAAXgFAJQgFAJgMAGQgLAFgQAAQgUABgNgJgAgUguQgJAJABARQgBAUAJAHQAJAKAMgBQANABAIgKQAJgHAAgTQAAgSgJgJQgIgJgNAAQgMAAgJAJg");
	this.shape_434.setTransform(87.7,154.2);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#660000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIARgCQAVgDALgDIAAgEQABgKgGgEQgHgGgOAAQgNAAgGAEQgHAEgDAKIgSgCQADgKAFgGQAGgHALgDQALgEANAAQAPAAAIADQAJADAFAFQADAEACAHIACAPIAAAVQAAAXABAGQAAAGAEAGIgUAAQgCgFgBgHQgLAIgKADQgIADgLAAQgTAAgJgIgAgEAGIgQADQgFACgDAEQgCADAAAFQAAAGAGAFQAFAEAMAAQAJAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_435.setTransform(76.1,152.3);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#660000").s().p("AgpArQgJgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIAQgCQAXgDAKgDIABgEQgBgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQACgKAHgGQAFgHALgDQALgEANAAQAOAAAKADQAJADADAFQAFAEACAHIAAAPIAAAVQAAAXABAGQABAGAEAGIgTAAQgEgFAAgHQgKAIgKADQgJADgLAAQgSAAgLgIgAgDAGIgRADQgFACgCAEQgDADAAAFQAAAGAFAFQAHAEAKAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_436.setTransform(45.1,152.3);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#660000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_437.setTransform(10.5,152.3);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#660000").s().p("AAdAwIgXgdIgGgJIgcAmIgXAAIAogxIglgvIAXAAIASAXIAHALIAIgKIATgYIAXAAIgnAuIApAyg");
	this.shape_438.setTransform(-91.5,152.3);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#660000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_439.setTransform(-102.9,152.3);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#660000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_440.setTransform(-138.7,152.3);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#660000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_441.setTransform(-168.5,152.3);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#660000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_442.setTransform(-199.6,152.3);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#660000").s().p("AAaBDIAAg9QAAgMgFgFQgHgGgLAAQgHAAgIAEQgHAEgDAGQgDAGAAALIAAA1IgUAAIAAiFIAUAAIAAAwQAMgNAUAAQAMgBAKAFQAIAEAEAHQAEAIABAOIAAA9g");
	this.shape_443.setTransform(-211.5,150.5);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#660000").s().p("AgkAmQgOgNAAgYQAAgYAOgNQAPgOAWAAQAWAAAOAOQAOANAAAXIAAAEIhSAAQABAQAJAJQAKAIANAAQAKAAAHgEQAIgFAEgLIAUADQgFAOgNAJQgMAIgTAAQgYAAgOgNgAgUgdQgJAIgBANIA9AAQgBgMgGgHQgJgJgOAAQgMAAgJAHg");
	this.shape_444.setTransform(-272.3,152.3);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#660000").s().p("AgYAvQgJgEgEgFQgEgFgCgHQgBgFAAgLIAAg7IATAAIAAA1IABARQACAHAGAEQAFADAJABQAHgBAIgDQAHgEADgHQADgGAAgNIAAgzIATAAIAABgIgRAAIAAgOQgNAQgVAAQgKAAgIgCg");
	this.shape_445.setTransform(-284.3,152.4);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#660000").s().p("AgYBSQAJgPACgIIAHgTIAEgUQABgKAAgKQAAgTgEgSQgFgSgOgaIATAAQAOASAHAVQAJAUAAAWQAAAQgGAVQgIAXgQAWg");
	this.shape_446.setTransform(83.8,129.5);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#660000").s().p("AghAyQgOgPAAgiQAAghAPgQQAOgPAWAAQARAAAKAIQALAIADAQIgaACQgCgHgEgDQgDgEgHAAQgIAAgGAHQgGAGgCAXQALgMAOAAQARAAAMAMQANALAAASQAAATgNALQgNAMgUAAQgVAAgOgOgAgLAEQgFAFAAALQAAAMAGAGQAGAGAHAAQAHAAAGgFQAFgFAAgMQAAgMgGgGQgFgFgIAAQgHAAgGAFg");
	this.shape_447.setTransform(75.2,127.8);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#660000").s().p("AgbA+QABgaAMgbQALgaASgVIg9AAIAAgXIBdAAIAAASQgMAKgMASQgMASgGAVQgGAVABARg");
	this.shape_448.setTransform(63.9,127.8);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#660000").s().p("AgfA4QgPgMAAgSQAAgKAGgJQAFgHANgEQgLgEgFgHQgFgHAAgIQAAgOAMgKQALgJAUAAQAUAAALAJQAMAKAAAOQAAAIgGAHQgFAHgJAEQAMAEAGAGQAGAJAAAKQAAASgMAKQgNALgVAAQgTAAgNgIgAgOALQgFAGAAAHQAAAKAGAGQAGAFAHAAQAJAAAFgFQAGgGAAgKQAAgIgGgGQgFgFgJAAQgJgBgFAHgAgMgnQgEADAAAHQAAAHAEAEQAFAFAHAAQAHAAAFgFQAFgEAAgHQAAgHgFgDQgFgEgHAAQgHAAgFAEg");
	this.shape_449.setTransform(52.7,127.8);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#660000").s().p("AAEA/IAAhaQgOANgUAFIAAgVQAKgDAMgIQAMgJAFgMIAXAAIAAB9g");
	this.shape_450.setTransform(40.8,127.7);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#660000").s().p("AAHA/IAAgZIg6AAIAAgVIA+hPIAXAAIAABOIASAAIAAAWIgSAAIAAAZgAgZAQIAgAAIAAgpg");
	this.shape_451.setTransform(23.7,127.7);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#660000").s().p("AgfA5QgKgJgDgPIAagCQABAGAFAEQAEADAGAAQAIAAAGgGQAGgHABgWQgKALgOAAQgRAAgNgMQgMgKAAgTQAAgSANgMQANgMAUAAQAVAAAOAPQAOAPAAAhQAAAigPAPQgOAPgXAAQgQAAgLgHgAgPgmQgFAGAAALQAAANAGAFQAFAFAIAAQAHAAAGgFQAFgFAAgLQAAgLgGgHQgGgGgHAAQgIAAgFAFg");
	this.shape_452.setTransform(12.5,127.8);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#660000").s().p("AgaA+QAAgaAMgbQALgaASgVIg9AAIAAgXIBdAAIAAASQgMAKgMASQgMASgGAVQgGAVABARg");
	this.shape_453.setTransform(1.5,127.8);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#660000").s().p("AAEA/IAAhaQgOANgVAFIAAgVQALgDANgIQAMgJAEgMIAWAAIAAB9g");
	this.shape_454.setTransform(-10.5,127.7);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#660000").s().p("AAGBSQgPgUgHgVQgIgVAAgUQAAgYAJgWQAJgTAMgQIATAAQgOAagEASQgGASAAATQAAAOAEAPQACAPAFANIANAZg");
	this.shape_455.setTransform(-18.4,129.5);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#660000").s().p("AgmAoQgKgIAAgMQAAgHAFgGQAEgGAHgCQAIgDAOgDQATgDAHgDIAAgCQAAgHgEgDQgEgDgKAAQgHAAgEADQgEACgDAHIgZgFQAEgNALgGQAKgHAUABQASAAAJADQAJAEADAGQAEAGAAAPIAAAcQAAALABAHQABAFAEAHIgbAAIgDgIIgBgCQgHAGgIADQgHACgJAAQgQAAgJgHgAAAAFQgLADgEACQgFADAAAFQAAAGAEADQAEAEAHgBQAHAAAGgDQAFgEACgEIABgMIAAgFIgQADg");
	this.shape_456.setTransform(-33.1,129.5);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#660000").s().p("AAUAvIAAgvQAAgOgCgEQgBgEgFgCQgEgDgFAAQgGAAgGAEQgFADgCAGQgDAFAAAOIAAAqIgbAAIAAhaIAZAAIAAANQAOgPATAAQAKAAAHADQAHADAEAEQAFAFABAFQACAGgBAKIAAA4g");
	this.shape_457.setTransform(-44.7,129.4);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#660000").s().p("AAUAvIAAgvQAAgOgCgEQgBgEgFgCQgEgDgFAAQgGAAgGAEQgFADgCAGQgDAFAAAOIAAAqIgbAAIAAhaIAZAAIAAANQAOgPATAAQAKAAAHADQAHADAEAEQAFAFABAFQACAGgBAKIAAA4g");
	this.shape_458.setTransform(-56.8,129.4);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#660000").s().p("AAoA/IgMgdIg4AAIgNAdIgeAAIA4h9IAeAAIA5B9gAgTANIAlAAIgSgtg");
	this.shape_459.setTransform(-70.2,127.7);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#660000").s().p("AgmAoQgKgIAAgMQAAgHAFgGQAEgGAHgCQAIgDAOgDQATgDAHgDIAAgCQAAgHgEgDQgEgDgKAAQgHAAgEADQgEACgDAHIgZgFQAEgNALgGQAKgHAUABQASAAAJADQAJAEADAGQAEAGAAAPIAAAcQAAALABAHQABAFAEAHIgbAAIgDgIIgBgCQgHAGgIADQgHACgJAAQgQAAgJgHgAAAAFQgLADgEACQgFADAAAFQAAAGAEADQAEAEAHgBQAHAAAGgDQAFgEACgEIABgMIAAgFIgQADg");
	this.shape_460.setTransform(-87.9,129.5);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#660000").s().p("AgEA9QgGgDgCgDQgDgDgBgHIgBgRIAAgmIgNAAIAAgTIANAAIAAgSIAagPIAAAhIATAAIAAATIgTAAIAAAkQAAALABABQAAABABAAQAAABAAAAQAAABABAAQAAAAABABIAEABIALgCIADASQgKADgMAAQgIAAgFgBg");
	this.shape_461.setTransform(-96.7,128);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#660000").s().p("AAUAvIAAgvQAAgOgCgEQgCgEgEgCQgEgDgFAAQgHAAgFAEQgGADgCAGQgCAFAAAOIAAAqIgbAAIAAhaIAZAAIAAANQAOgPATAAQAJAAAIADQAHADAFAEQAEAFABAFQABAGAAAKIAAA4g");
	this.shape_462.setTransform(-106.1,129.4);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#660000").s().p("AgmAoQgKgIAAgMQAAgHAFgGQAEgGAHgCQAIgDAOgDQATgDAHgDIAAgCQAAgHgEgDQgEgDgKAAQgHAAgEADQgEACgDAHIgZgFQAEgNALgGQAKgHAUABQASAAAJADQAJAEADAGQAEAGAAAPIAAAcQAAALABAHQABAFAEAHIgbAAIgDgIIgBgCQgHAGgIADQgHACgJAAQgQAAgJgHgAAAAFQgLADgEACQgFADAAAFQAAAGAEADQAEAEAHgBQAHAAAGgDQAFgEACgEIABgMIAAgFIgQADg");
	this.shape_463.setTransform(-117.9,129.5);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#660000").s().p("AgoA2QgPgLgCgVIAcgCQADAMAHAGQAIAGAMAAQAOAAAIgGQAGgFABgHQgBgEgDgDQgDgDgHgDIgWgFQgYgFgJgGQgNgLAAgPQAAgJAGgJQAGgIAMgEQALgFARAAQAaAAAOALQAOAKAAARIgdABQgBgJgHgEQgGgFgLAAQgMAAgIAFQgFADAAAFQAAAEAFADQAFAEAVAFQAUAEALAFQAKAEAFAHQAHAIAAAMQAAALgIAJQgHAKgMAEQgNAFgSAAQgbAAgOgLg");
	this.shape_464.setTransform(-130.2,127.7);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#660000").s().p("AgmAgQgKgMAAgTQAAgVAOgNQANgNAVAAQAWAAANANQAOAOgBAaIhEAAQABALAGAFQAGAHAJgBQAGAAAFgCQAEgDACgHIAcADQgGAOgLAGQgLAIgSgBQgaAAgNgPgAgNgWQgGAFAAAKIAoAAQAAgKgGgGQgGgFgJAAQgIAAgFAGg");
	this.shape_465.setTransform(-148,129.5);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#660000").s().p("AglAzQgNgMAAgXQAAgWANgMQAMgMATAAQARAAAMANIAAguIAcAAIAAB9IgaAAIAAgOQgGAIgJAEQgIAEgIAAQgSAAgNgNgAgPgFQgGAGAAANQAAAPAEAGQAHAKALAAQAJAAAHgHQAHgHAAgOQAAgQgHgGQgGgHgKAAQgJAAgHAHg");
	this.shape_466.setTransform(-159.9,127.8);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#660000").s().p("AgtAtIAAgSIAngnIANgNIgMAAIglAAIAAgTIBVAAIAAARIgnAnIgNANIANgBIAqAAIAAAVg");
	this.shape_467.setTransform(-176.3,129.5);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#660000").s().p("AgmAgQgKgMAAgTQAAgVAOgNQANgNAVAAQAWAAANANQAOAOgBAaIhEAAQABALAGAFQAGAHAJgBQAGAAAFgCQAEgDACgHIAcADQgGAOgLAGQgLAIgSgBQgaAAgNgPgAgNgWQgGAFAAAKIAoAAQAAgKgGgGQgGgFgJAAQgIAAgFAGg");
	this.shape_468.setTransform(-187,129.5);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#660000").s().p("AgyBAIAAh8IAaAAIAAANQAFgHAIgEQAJgFAJAAQASAAANANQANAMAAAWQAAAWgNANQgNAMgSAAQgHAAgHgDQgHgDgIgHIAAAugAgQglQgGAHAAANQAAAQAGAGQAHAHAJAAQAKAAAGgGQAHgGAAgPQAAgPgHgHQgGgHgKAAQgJAAgHAHg");
	this.shape_469.setTransform(-198.2,131.1);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#660000").s().p("AgaAqQgNgGgGgKQgIgMAAgOQAAgMAIgMQAGgKANgHQAMgFAOAAQAXAAAPANQAPAOABATQgBAVgPANQgPANgXAAQgNAAgNgFgAgRgTQgHAGgBANQABANAHAIQAIAHAJAAQALAAAHgHQAIgIAAgNQAAgNgIgGQgHgIgLABQgJgBgIAIg");
	this.shape_470.setTransform(-210.6,129.5);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#660000").s().p("AgNA/IAAh9IAbAAIAAB9g");
	this.shape_471.setTransform(-219.6,127.7);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#660000").s().p("AgaAqQgNgGgHgKQgGgMAAgOQAAgMAGgMQAHgKAMgHQANgFAOAAQAYAAAPANQAOAOAAATQAAAVgOANQgPANgYAAQgNAAgNgFgAgRgTQgIAGABANQgBANAIAIQAIAHAJAAQALAAAHgHQAIgIgBgNQABgNgIgGQgHgIgLABQgJgBgIAIg");
	this.shape_472.setTransform(-234,129.5);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#660000").s().p("AgNA/IAAhaIAbAAIAABagAgNgnIAAgXIAbAAIAAAXg");
	this.shape_473.setTransform(-242.9,127.7);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#660000").s().p("AAUAvIAAgvQAAgOgCgEQgBgEgFgCQgEgDgFAAQgGAAgGAEQgFADgCAGQgDAFAAAOIAAAqIgbAAIAAhaIAZAAIAAANQAOgPATAAQAKAAAHADQAHADAEAEQAFAFABAFQACAGgBAKIAAA4g");
	this.shape_474.setTransform(-251.7,129.4);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#660000").s().p("AgaAqQgNgGgHgKQgGgMgBgOQABgMAGgMQAHgKAMgHQANgFAOAAQAXAAAQANQAPAOgBATQABAVgPANQgQANgXAAQgNAAgNgFgAgRgTQgIAGAAANQAAANAIAIQAHAHAKAAQALAAAHgHQAHgIAAgNQAAgNgHgGQgHgIgLABQgKgBgHAIg");
	this.shape_475.setTransform(-263.9,129.5);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#660000").s().p("AgEA9QgGgDgCgDQgDgDgBgHIgBgRIAAgmIgNAAIAAgTIANAAIAAgSIAagPIAAAhIATAAIAAATIgTAAIAAAkQAAALABABQAAABABAAQAAABAAAAQAAABABAAQAAAAABABIAEABIALgCIADASQgKADgMAAQgIAAgFgBg");
	this.shape_476.setTransform(-273.3,128);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#660000").s().p("AAUAvIAAgvQAAgOgCgEQgBgEgEgCQgFgDgFAAQgGAAgGAEQgFADgDAGQgCAFAAAOIAAAqIgcAAIAAhaIAaAAIAAANQAOgPAUAAQAIAAAIADQAIADAEAEQADAFACAFQACAGAAAKIAAA4g");
	this.shape_477.setTransform(-282.7,129.4);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#660000").s().p("AAoA/IgMgdIg5AAIgLAdIgfAAIA4h9IAdAAIA6B9gAgUANIAnAAIgTgtg");
	this.shape_478.setTransform(-296.1,127.7);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#660000").s().p("AgvBEIAAiFIARAAIAAANQAGgIAHgDQAIgFAKAAQAOABALAGQALAHAGALQAFAMAAAOQABAPgHALQgGAMgLAGQgMAGgNAAQgJAAgHgEQgIgDgEgFIAAAvgAgVgsQgKAJABATQAAARAJAJQAIAKANgBQALABAJgKQAJgJAAgSQAAgTgJgJQgIgJgMAAQgLAAgKAKg");
	this.shape_479.setTransform(-243.8,214.1);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#660000").s().p("Ag4BDIAAiFIBuAAIAAAPIhaAAIAAAqIBUAAIAAAOIhUAAIAAAuIBdAAIAAAQg");
	this.shape_480.setTransform(-274.9,210.5);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#660000").s().p("AgkA3QgOgNAAgYQAAgXAOgOQAPgNAWAAQAWAAAOANQAOANAAAXIAAAFIhSAAQABAQAJAIQAKAJANAAQAKAAAHgEQAIgGAEgKIAUACQgFAPgNAJQgMAIgTAAQgYgBgOgNgAgUgLQgJAIgBALIA9AAQgBgLgGgGQgJgKgOAAQgMABgJAHgAgKgqIANgZIAZAAIgXAZg");
	this.shape_481.setTransform(41.2,187);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#660000").s().p("AgIAxIgqhgIAUAAIAYA4IAGAUIAHgTIAZg5IATAAIgqBgg");
	this.shape_482.setTransform(7.2,188.8);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#660000").s().p("AghAmQgOgNgBgYQAAgPAHgMQAFgMANgGQAMgGANAAQASAAAMAIQAMAIADAPIgTADQgCgKgHgFQgGgFgKAAQgOAAgJAJQgIAJAAASQAAAUAIAJQAJAIANAAQALAAAIgGQAHgGACgMIASACQgCARgNAKQgNAJgSAAQgWAAgNgNg");
	this.shape_483.setTransform(-55.7,188.8);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#660000").s().p("AAdAxIgXgfIgGgIIgcAnIgXAAIAogyIglguIAYAAIARAWIAHALIAIgLIATgWIAWAAIgmAtIApAzg");
	this.shape_484.setTransform(-71.5,188.8);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#660000").s().p("AgkA3QgOgNAAgYQAAgXAOgOQAPgNAWAAQAWAAAOANQAOANAAAXIAAAFIhSAAQABAQAJAIQAKAJANAAQAKAAAHgEQAIgGAEgKIAUACQgFAPgNAJQgMAIgTAAQgYgBgOgNgAgUgLQgJAIgBALIA9AAQgBgLgGgGQgJgKgOAAQgMABgJAHgAgKgqIANgZIAZAAIgXAZg");
	this.shape_485.setTransform(-82.9,187);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#660000").s().p("AgYA+QgLgGgGgMQgGgMAAgOQAAgPAFgLQAGgMALgGQALgGAOgBQAJAAAIAFQAHADAFAGIAAgwIATAAIAACFIgRAAIAAgMQgLAOgUAAQgNAAgLgGgAgUgKQgIAJAAATQAAASAJAKQAJAJALAAQANAAAIgJQAJgJAAgSQAAgTgJgJQgJgKgNAAQgLAAgJAJg");
	this.shape_486.setTransform(-200.2,187.1);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#660000").s().p("AgvBEIAAiFIARAAIAAANQAGgIAHgDQAIgFAKAAQAPABALAGQAKAGAGAMQAFAMAAAOQABAPgHALQgGAMgLAGQgMAGgNAAQgJAAgHgEQgIgDgEgFIAAAvgAgVgsQgKAJAAATQABASAIAJQAJAJANAAQALAAAJgJQAJgKAAgSQAAgTgJgJQgIgJgMAAQgLAAgKAKg");
	this.shape_487.setTransform(-235.4,190.6);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#660000").s().p("AgYA+QgLgGgGgMQgGgMAAgOQAAgPAFgLQAGgMALgGQALgGAOgBQAJAAAIAFQAHADAFAGIAAgwIATAAIAACFIgRAAIAAgMQgLAOgUAAQgNAAgLgGgAgUgKQgIAJAAATQAAASAJAKQAJAJALAAQANAAAIgJQAJgJAAgSQAAgTgJgJQgJgKgNAAQgLAAgJAJg");
	this.shape_488.setTransform(-260,187.1);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#660000").s().p("AA5AyIAAg8QAAgKgCgFQgCgEgFgDQgFgCgGAAQgMAAgIAGQgHAHgBAPIAAA4IgRAAIAAg+QAAgLgFgGQgFgFgKAAQgIAAgGADQgHAEgEAHQgDAHAAANIAAAyIgTAAIAAhgIASAAIAAANQAFgHAIgEQAJgFAMAAQAMAAAIAFQAGAEADAIQAOgRAVAAQARAAAJAIQAIAIABARIAABCg");
	this.shape_489.setTransform(148,165.2);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#660000").s().p("AgYAuQgJgDgEgFQgEgFgCgHQgBgFAAgLIAAg6IATAAIAAA0IABASQACAGAGAEQAFAEAJgBQAHABAIgEQAHgEADgGQADgHAAgMIAAgzIATAAIAABgIgRAAIAAgPQgNARgVAAQgKAAgIgEg");
	this.shape_490.setTransform(132.9,165.4);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#660000").s().p("AghAmQgOgNgBgYQAAgPAHgMQAFgMANgGQAMgGANAAQASAAAMAIQAMAIADAPIgTADQgCgKgHgFQgGgFgKAAQgOAAgJAJQgIAJAAASQAAAUAIAJQAJAIANAAQALAAAIgGQAHgGACgMIASACQgCARgNAKQgNAJgSAAQgWAAgNgNg");
	this.shape_491.setTransform(87.4,165.3);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#660000").s().p("AglA3QgOgNAAgYQAAgaARgNQAOgLAUAAQAXAAAPAOQAOAMAAAWQAAATgGALQgHALgMAFQgMAHgPAAQgWgBgPgNgAgWgJQgKAJAAASQAAASAKAKQAJAJANAAQAOAAAJgJQAKgJAAgUQAAgRgKgJQgJgKgOABQgNgBgJAKgAgJgqIANgZIAYAAIgXAZg");
	this.shape_492.setTransform(1.7,163.5);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#660000").s().p("AgYAuQgJgDgEgFQgEgFgCgHQgBgFAAgLIAAg6IATAAIAAA0IABASQACAGAGAEQAFAEAJgBQAHABAIgEQAHgEADgGQADgHAAgMIAAgzIATAAIAABgIgRAAIAAgPQgNARgVAAQgKAAgIgEg");
	this.shape_493.setTransform(-27,165.4);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#660000").s().p("AgkA3QgOgNAAgYQAAgXAOgNQAPgOAWAAQAWAAAOAOQAOAMAAAXIAAAFIhSAAQABAQAJAIQAKAJANAAQAKAAAHgEQAIgGAEgKIAUACQgFAPgNAJQgMAHgTABQgYgBgOgNgAgUgLQgJAIgBALIA9AAQgBgLgGgGQgJgKgOABQgMAAgJAHgAgKgqIANgZIAZAAIgXAZg");
	this.shape_494.setTransform(-84.2,163.5);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#660000").s().p("AgYAuQgJgDgEgFQgEgFgCgHQgBgFAAgLIAAg6IATAAIAAA0IABASQACAGAGAEQAFAEAJgBQAHABAIgEQAHgEADgGQADgHAAgMIAAgzIATAAIAABgIgRAAIAAgPQgNARgVAAQgKAAgIgEg");
	this.shape_495.setTransform(-96.2,165.4);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#660000").s().p("AgwBEIAAiFIASAAIAAANQAGgIAIgEQAHgEAKAAQAOABAMAGQAKAHAFALQAHAMgBAOQAAAPgGALQgGALgMAHQgLAGgNAAQgIAAgIgDQgHgEgGgFIAAAvgAgVgsQgKAJAAATQABASAIAJQAJAIANABQALgBAJgIQAJgKAAgSQAAgTgJgKQgJgIgLgBQgMAAgJALg");
	this.shape_496.setTransform(-107.8,167.1);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#660000").s().p("AgoBCIgDgPIALABQAHAAADgCQAFgBABgEIAHgMIABgEIgqhgIAUAAIAXA4IAIAVIAIgVIAXg4IATAAIgqBhQgHAQgDAGQgFAJgHADQgGAEgJAAQgGAAgGgCg");
	this.shape_497.setTransform(-159.9,167.3);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#660000").s().p("AAaAyIAAg6QAAgKgCgFQgCgFgFgDQgGgDgIAAQgLAAgIAGQgJAHAAATIAAA0IgTAAIAAhgIARAAIAAANQAMgQAWAAQAKAAAJAEQAIADAEAFQAFAFABAHIABAQIAAA7g");
	this.shape_498.setTransform(-205.9,165.2);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#660000").s().p("AggA+QgMgIgBgQIATACQABAIAFADQAIAFALAAQAMAAAIgFQAHgEACgIQACgFAAgQQgNAMgRAAQgXAAgNgPQgMgOAAgTQAAgOAFgMQAHgLAKgHQAMgGAOgBQATABANAOIAAgMIARAAIAABTQAAAXgFAJQgGAJgLAGQgMAGgQgBQgTAAgMgHgAgUguQgIAJgBARQABAUAIAIQAJAIAMABQANgBAJgIQAIgIABgTQgBgSgIgIQgKgKgNAAQgLAAgJAJg");
	this.shape_499.setTransform(-230.1,167.2);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#660000").s().p("AAaAyIAAg6QAAgKgCgFQgCgFgFgDQgGgDgIAAQgLAAgIAGQgJAHAAATIAAA0IgTAAIAAhgIARAAIAAANQAMgQAWAAQAKAAAJAEQAIADAEAFQAFAFABAHIABAQIAAA7g");
	this.shape_500.setTransform(-271.6,165.2);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#660000").s().p("AgfArQgLgIgDgPIATgDQABAKAHAFQAHAFAMAAQANAAAHgEQAGgFAAgGQAAgGgGgDQgEgCgPgDQgUgFgIgDQgIgDgEgGQgEgGAAgHQAAgGADgGQAEgFAGgEQAEgDAIgCQAHgCAJAAQAMAAAKAEQAKADAFAGQAEAFACAKIgSACQgCgIgGgEQgGgEgKAAQgNAAgFAEQgGADAAAFQAAAEADACQACADAFACIAPAEQAUAEAIADQAIACAFAGQAEAGAAAIQAAAIgFAIQgGAHgKAEQgKAEgOAAQgUAAgMgIg");
	this.shape_501.setTransform(233.4,141.8);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#660000").s().p("AgvBEIAAiFIARAAIAAANQAGgIAHgEQAIgDAKAAQAPAAALAGQAKAHAGALQAFALAAAOQABAQgHAKQgGANgLAGQgMAGgNAAQgJAAgHgDQgIgEgEgFIAAAvgAgVgtQgKAKAAATQABARAIAKQAJAIANABQALgBAJgIQAJgKAAgTQAAgSgJgKQgIgIgMgBQgLABgKAJg");
	this.shape_502.setTransform(121,143.6);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#660000").s().p("AgoArQgKgIAAgMQAAgHADgGQAEgGAGgDQAGgDAIgCIARgCQAVgDALgDIAAgEQABgKgGgEQgIgGgNAAQgNAAgGAEQgHAEgDAKIgSgCQADgKAFgGQAGgHALgDQALgEANAAQAPAAAIADQAJADAFAFQADAEACAHIACAPIAAAVQAAAXABAGQAAAGAEAGIgTAAQgDgFgBgHQgLAIgKADQgIADgLAAQgTAAgJgIgAgDAGIgRADQgFACgDAEQgCADAAAFQAAAGAGAFQAFAEAMAAQAJAAAJgEQAIgEAEgIQADgFAAgLIAAgGQgKAEgTACg");
	this.shape_503.setTransform(80.1,141.8);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#660000").s().p("AA5AyIAAg8QgBgKgBgFQgCgEgFgDQgFgCgGAAQgMAAgHAGQgJAHABAPIAAA4IgSAAIAAg+QAAgLgFgGQgFgFgKAAQgIAAgGADQgIAEgCAHQgDAHgBANIAAAyIgTAAIAAhgIARAAIAAANQAGgHAJgEQAIgFALAAQANAAAHAFQAIAEACAIQAOgRAVAAQAQAAAJAIQAKAIgBARIAABCg");
	this.shape_504.setTransform(53.3,141.7);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#660000").s().p("AgiAmQgNgNAAgYQAAgPAFgMQAHgMALgGQANgGANAAQASAAAMAIQAMAIACAPIgSADQgDgKgGgFQgHgFgJAAQgOAAgIAJQgJAJAAASQAAAUAJAJQAIAIANAAQALAAAHgGQAIgGACgMIASACQgCARgNAKQgNAJgSAAQgWAAgOgNg");
	this.shape_505.setTransform(27.4,141.8);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#660000").s().p("AAaAyIAAg6QAAgKgCgFQgCgFgFgDQgGgDgIAAQgLAAgIAGQgJAHAAATIAAA0IgTAAIAAhgIARAAIAAANQAMgQAWAAQAKAAAJAEQAIADAEAFQAFAFABAHIABAQIAAA7g");
	this.shape_506.setTransform(-38,141.7);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#660000").s().p("AglA3QgOgNAAgYQAAgaARgNQAOgLAUAAQAXAAAPAOQAOAMAAAXQAAASgGALQgHALgMAGQgMAFgPABQgWAAgPgOgAgWgJQgKAJAAASQAAASAKAKQAJAJANAAQAOAAAJgJQAKgKAAgSQAAgSgKgJQgJgJgOAAQgNAAgJAJgAgJgqIANgaIAYAAIgXAag");
	this.shape_507.setTransform(-49.9,140);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#660000").s().p("AggA9QgNgHAAgQIATACQABAIAFADQAIAFALAAQAMAAAIgFQAHgFADgHQABgFAAgQQgNAMgRAAQgXAAgNgPQgMgOAAgTQAAgOAGgMQAGgLAKgHQAMgGAOAAQATgBANAOIAAgLIARAAIAABTQAAAXgFAJQgGAJgLAGQgMAGgQgBQgTAAgMgIgAgUguQgJAJAAARQAAAUAJAHQAIAJANAAQANAAAJgJQAJgHAAgTQAAgRgJgKQgKgJgNAAQgLAAgJAJg");
	this.shape_508.setTransform(-62.2,143.7);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#660000").s().p("AgpArQgJgIAAgMQAAgHAEgGQADgGAHgDQAFgDAIgCIAQgCQAXgDAKgDIABgEQgBgKgFgEQgIgGgNAAQgNAAgGAEQgGAEgDAKIgTgCQACgKAHgGQAFgHALgDQALgEANAAQAOAAAKADQAIADAEAFQAFAEACAHIAAAPIAAAVQAAAXABAGQACAGADAGIgUAAQgCgFgBgHQgKAIgKADQgJADgLAAQgSAAgLgIgAgEAGIgQADQgFACgCAEQgDADAAAFQAAAGAFAFQAHAEAKAAQAKAAAIgEQAJgEAEgIQADgFAAgLIAAgGQgKAEgUACg");
	this.shape_509.setTransform(-73.8,141.8);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#660000").s().p("AA4AyIAAg8QAAgKgBgFQgCgEgFgDQgFgCgGAAQgMAAgIAGQgHAHgBAPIAAA4IgRAAIAAg+QAAgLgFgGQgEgFgLAAQgIAAgHADQgHAEgDAHQgCAHAAANIAAAyIgTAAIAAhgIARAAIAAANQAFgHAIgEQAJgFALAAQAMAAAJAFQAGAEAEAIQANgRAVAAQAQAAAKAIQAIAIABARIAABCg");
	this.shape_510.setTransform(-148.3,141.7);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#660000").s().p("AgYA+QgLgGgGgMQgGgLAAgPQAAgPAFgLQAGgMALgGQALgGAOAAQAJAAAIADQAHAEAFAGIAAgwIATAAIAACFIgRAAIAAgMQgLAOgUAAQgNAAgLgGgAgUgKQgIAJAAATQAAASAJAKQAJAIALABQANAAAIgJQAJgJAAgSQAAgTgJgKQgJgJgNAAQgLAAgJAJg");
	this.shape_511.setTransform(-204.3,140.1);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#660000").s().p("AgiAmQgNgNAAgYQAAgPAFgMQAHgMALgGQANgGANAAQASAAAMAIQAMAIACAPIgSADQgDgKgGgFQgHgFgJAAQgOAAgIAJQgJAJAAASQAAAUAJAJQAIAIANAAQALAAAHgGQAIgGACgMIASACQgDARgMAKQgNAJgSAAQgWAAgOgNg");
	this.shape_512.setTransform(-219.6,141.8);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#660000").s().p("AAaAyIAAg6QAAgKgCgFQgCgFgFgDQgGgDgIAAQgLAAgIAGQgJAHAAATIAAA0IgTAAIAAhgIARAAIAAANQAMgQAWAAQAKAAAJAEQAIADAEAFQAFAFABAHIABAQIAAA7g");
	this.shape_513.setTransform(-243.3,141.7);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#660000").s().p("AglAmQgOgNAAgZQAAgaARgNQAOgLAUAAQAXAAAPAOQAOANAAAXQAAASgGAKQgHALgMAGQgMAGgPAAQgWAAgPgNgAgWgbQgKAJAAASQAAATAKAJQAJAJANAAQAOAAAJgJQAKgJAAgTQAAgRgKgKQgJgJgOAAQgNAAgJAJg");
	this.shape_514.setTransform(-255.3,141.8);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#660000").s().p("AgjA8QgQgIgHgRQgJgRAAgSQAAgVAKgQQAIgQASgHQAQgJAUABQAXAAAPAKQAQAKAHASIgVAFQgFgPgKgHQgLgGgOgBQgSAAgMAIQgLAHgFANQgFANAAANQAAAQAGANQAGANAMAGQAMAGANAAQARAAAMgIQALgJAFgRIAUAEQgGAXgRALQgQALgYAAQgZABgPgKg");
	this.shape_515.setTransform(-268.8,140);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#660000").s().p("AgYBSQAIgPADgIIAHgTIAEgUQACgKAAgKQgBgTgFgSQgEgSgOgaIASAAQAOASAJAVQAIAUAAAWQAAAQgGAVQgIAXgQAWg");
	this.shape_516.setTransform(11.1,119);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#660000").s().p("AAHA/IAAgZIg6AAIAAgVIA+hPIAXAAIAABPIASAAIAAAVIgSAAIAAAZgAgZARIAgAAIAAgqg");
	this.shape_517.setTransform(2.3,117.2);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#660000").s().p("AAEA/IAAhZQgOAMgVAGIAAgWQALgDANgJQAMgJAEgLIAWAAIAAB9g");
	this.shape_518.setTransform(-31.9,117.2);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#660000").s().p("AAEA/IAAhZQgOAMgVAGIAAgWQALgDANgJQAMgJAEgLIAWAAIAAB9g");
	this.shape_519.setTransform(-83.2,117.2);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#660000").s().p("AAGBSQgPgUgHgVQgIgVAAgUQAAgYAKgWQAIgTAMgQIATAAQgOAagFASQgEASgBATQABAOADAPQACAPAGANIALAZg");
	this.shape_520.setTransform(-91.1,119);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#660000").s().p("AgmAgQgKgNAAgSQAAgWAOgNQANgNAVABQAWAAANANQAOANgBAbIhEAAQABAKAGAHQAGAFAJAAQAGAAAFgDQAEgCACgIIAcAEQgGAOgLAHQgLAGgSAAQgaAAgNgPgAgNgWQgGAGAAAJIAoAAQAAgKgGgFQgGgGgJAAQgIAAgFAGg");
	this.shape_521.setTransform(-105.9,119);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#660000").s().p("AgJA8QgJgEgGgIIAAAOIgaAAIAAh9IAcAAIAAAuQANgNAQAAQATAAAMAMQANAMAAAVQAAAYgNAMQgMANgTAAQgHAAgJgEgAgQgFQgGAGAAANQAAAPAFAGQAHAKALAAQAJAAAGgHQAHgHAAgOQAAgQgHgGQgGgHgKAAQgJAAgHAHg");
	this.shape_522.setTransform(-134.9,117.3);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#660000").s().p("AghAuIAAhZIAaAAIAAANQAHgKAEgDQAFgCAHAAQAJAAAJAEIgJAVQgHgEgGAAQgFAAgEADQgDADgDAHQgCAHAAAWIAAAcg");
	this.shape_523.setTransform(-144.4,118.9);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#660000").s().p("AgfAqQgIgEgEgHQgDgHAAgNIAAg4IAbAAIAAApQAAASACAFQABAEAEADQAEACAGAAQAGAAAGgDQAFgEACgFQADgFAAgSIAAgmIAbAAIAABZIgaAAIAAgNQgFAHgJAEQgJAEgKAAQgKAAgJgEg");
	this.shape_524.setTransform(-155.1,119.1);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#660000").s().p("AgEA8QgGgCgCgDQgDgDgBgGIgBgRIAAgnIgNAAIAAgTIANAAIAAgTIAagNIAAAgIATAAIAAATIgTAAIAAAjQAAAMABACQAAAAABAAQAAABAAAAQAAABABAAQAAAAABAAIAEABIALgCIADATQgKADgMAAQgIAAgFgCg");
	this.shape_525.setTransform(-164.5,117.5);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#660000").s().p("AgOA/IAAh9IAcAAIAAB9g");
	this.shape_526.setTransform(-170.7,117.2);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#660000").s().p("AgmAgQgKgNAAgSQAAgWAOgNQANgNAVABQAWAAANANQAOANgBAbIhEAAQABAKAGAHQAGAFAJAAQAGAAAFgDQAEgCACgIIAcAEQgGAOgLAHQgLAGgSAAQgaAAgNgPgAgNgWQgGAGAAAJIAoAAQAAgKgGgFQgGgGgJAAQgIAAgFAGg");
	this.shape_527.setTransform(-184.7,119);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#660000").s().p("AglAzQgNgMAAgXQAAgWANgMQAMgMATAAQARAAAMANIAAguIAcAAIAAB9IgaAAIAAgOQgGAIgJAEQgIAEgIAAQgSAAgNgNgAgPgFQgGAGAAANQAAAPAEAGQAHAKALAAQAJAAAHgHQAHgHAAgOQAAgQgHgGQgGgHgKAAQgJAAgHAHg");
	this.shape_528.setTransform(-196.5,117.3);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#660000").s().p("AAUAuIAAguQAAgOgCgEQgCgEgEgDQgDgCgGAAQgGAAgGADQgFAEgCAFQgDAGAAAPIAAAoIgcAAIAAhZIAaAAIAAANQAOgPATAAQAKAAAHACQAIADADAFQAFAEABAGQABAGAAAKIAAA3g");
	this.shape_529.setTransform(-214,118.9);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#660000").s().p("AgNA/IAAhaIAbAAIAABagAgNgnIAAgXIAbAAIAAAXg");
	this.shape_530.setTransform(-222.9,117.2);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#660000").s().p("AgEA8QgGgCgCgDQgDgDgBgGIgBgRIAAgnIgNAAIAAgTIANAAIAAgTIAagNIAAAgIATAAIAAATIgTAAIAAAjQAAAMABACQAAAAABAAQAAABAAAAQAAABABAAQAAAAABAAIAEABIALgCIADATQgKADgMAAQgIAAgFgCg");
	this.shape_531.setTransform(-229,117.5);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#660000").s().p("AgfAoQgMgHgFgOIAdgDQABAHAFADQAGAEAIAAQALAAAGgDQADgDAAgEQAAAAAAgBQAAgBAAAAQgBgBAAAAQgBgBAAAAQgCgCgHgBQghgHgIgFQgMgHAAgNQAAgLAKgIQALgJAWABQAVAAAKAGQALAGADAMIgaAEQgCgGgEgCQgFgDgIAAQgKAAgFACQgDACAAAEQAAACADACQADACAWAFQAWAEAIAGQAIAGAAALQAAAMgLAJQgMAJgYAAQgUABgMgIg");
	this.shape_532.setTransform(-238.2,119);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#660000").s().p("AgfAqQgIgEgEgHQgDgHAAgNIAAg4IAbAAIAAApQAAASACAFQABAEAEADQAEACAGAAQAGAAAGgDQAFgEACgFQADgFAAgSIAAgmIAbAAIAABZIgaAAIAAgNQgFAHgJAEQgJAEgKAAQgKAAgJgEg");
	this.shape_533.setTransform(-249.6,119.1);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#660000").s().p("AgjA5QgLgIAAgMIAAgDIAfAEQABAEADACQAEACAHABQALAAAGgEQADgBACgEIABgLIAAgOQgMAPgSAAQgVAAgMgQQgKgMAAgRQAAgXANgLQANgNASAAQATAAAMAPIAAgMIAaAAIAABQQAAAQgDAHQgDAJgGAEQgFAFgJADQgKACgNAAQgaAAgLgIgAgPgnQgGAHAAAOQAAAOAGAGQAGAHAJAAQAKAAAHgHQAHgGAAgNQAAgOgHgIQgHgGgKgBQgJABgGAGg");
	this.shape_534.setTransform(-262,120.7);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#660000").s().p("AAoA/IgMgdIg4AAIgNAdIgeAAIA4h9IAdAAIA6B9gAgTANIAmAAIgTgtg");
	this.shape_535.setTransform(-275.1,117.2);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#660000").s().p("AgKAKQgFgEAAgGQAAgFAFgEQAEgEAGAAQAGAAAFAEQAFAEAAAFQAAAGgFAEQgFAEgGAAQgGAAgEgEg");
	this.shape_536.setTransform(225.5,216.4);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgcQgHAEgDAHQgEAIABAJQgBAKAEAHQADAHAHAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgHAAgHADg");
	this.shape_537.setTransform(216.8,212.7);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#660000").s().p("AgJBBQgEgDAAgIIAAhrQAAgIADgEQAEgEAGAAQAGAAAEAEQAEAEAAAIIAABrQAAAIgEADQgEAEgGAAQgGAAgDgEg");
	this.shape_538.setTransform(207.4,210.8);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgBgEgBQgHAAgDADQgDAEgDAFIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_539.setTransform(200.7,212.7);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADACAAAEQAAAEgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_540.setTransform(189.1,212.7);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#660000").s().p("AgbAuQgKgDgGgHQgFgGAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAGQAEAGAHAEQAGACAKAAQAIAAAFgCQAGgEAAgEQAAgHgGgDQgFgDgNgDQgOgDgKgEQgJgCgFgGQgGgGAAgIQAAgIAFgGQAGgHAJgEQAKgEAOAAQALAAAIACQAKACAGADQAFAEADAEQADAEAAAEQABAEgEADQgEADgFAAQgEAAgEgDIgHgGQgDgDgFgCQgEgDgHAAQgHAAgFADQgGADAAAEQABAEADACIALAFIAQAEQANADAJAEQAIACAEAGQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgLgFg");
	this.shape_541.setTransform(176.9,212.7);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#660000").s().p("AAhAvQgFgDgEgIQgLAHgKAFQgIADgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAIgIQAHgGANgCIAOgDIARgEIAQgDQAAgLgEgEQgEgFgNABQgKAAgFACQgFADgFAFIgFAHQgBACgGAAQgFAAgDgDQgEgDAAgEQAAgGAFgHQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAJAAAOIAAAOIAAANQAAAHADAIIACAKQAAADgEAEQgEADgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAGAFAEQAFADAHAAQAIAAAIgDQAGgDAEgFQADgGAAgNIAAgEIgSAFg");
	this.shape_542.setTransform(159.4,212.7);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#660000").s().p("AgWBBQgLgEgHgHQgIgGgEgKQgEgJAAgLQAAgMAEgIQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKADAHAHQAIAHAEAJQAEAIAAAMQAAALgEAJQgEAKgIAHQgHAGgKAEQgLAEgNAAQgMAAgKgEgAgOgKQgHAEgDAGQgDAIgBAKQABAKADAHQADAHAHAEQAGAEAIAAQANAAAIgJQAHgIAAgPQAAgQgHgHQgIgJgNAAQgHAAgHAEgAgUgtQAAgBADgEIAFgIQADgGAEgCQADgCAFAAIAOAAQAFAAABABIgHAGIgLAKIgIAGQgFADgHAAQgFAAAAgDg");
	this.shape_543.setTransform(141.2,210.9);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgDQAEgEAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEADgGAAQgFAAgEgDg");
	this.shape_544.setTransform(131.8,210.9);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#660000").s().p("AgmAlQgPgNAAgXQAAgOAHgMQAHgMAMgGQANgHARAAQALAAAKADQAJADAGAEQAHAFADAFQAEAFAAAEQAAAFgEADQgEADgFAAQgEAAgCgBIgGgGQgFgHgGgDQgFgEgJAAQgMAAgIAJQgHAJAAAOQAAAHACAGQACAGADAEQAEAEAGACQAFACAFAAQAJAAAGgDQAGgEAFgHQACgEAEgCQADgDAEAAQAFAAAEAEQADADAAAEQAAAFgDAFQgDAFgHAFQgGAFgKADQgKADgNAAQgZAAgPgOg");
	this.shape_545.setTransform(122.6,212.6);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADACAAAEQAAAEgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_546.setTransform(109.9,212.7);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgDIgKAKQgHAEgGACQgGABgIABQgLgBgIgDQgIgEgFgHQgFgHAAgPIAAgxQAAgIAEgDQADgEAHAAQAGAAAEAEQAFADAAAIIAAAnQgBAJACAFQACAHAFADQADADAIABQAGAAAHgFQAGgDADgHQACgEABgRIAAgfQAAgIADgDQAFgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAIgEADQgDAEgGAAQgHAAgDgEg");
	this.shape_547.setTransform(97.1,212.7);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#660000").s().p("AAgBBQgDgFAAgHIAAgjQgIAGgJAEQgJAEgKAAQgNABgLgHQgLgGgHgLQgGgLAAgPQAAgQAGgMQAHgLALgGQALgGAOAAQAKAAAJAEQAJAEAHAIIAAgCQAAgHAEgEQADgDAGgBQAGABAEADQAEADAAAIIAABrQAAARgOAAQgIAAgCgFgAgTgqQgHAJAAAQQAAAKAEAHQADAGAGAEQAGADAHAAQAHAAAHgDQAGgEAEgGQAEgIAAgKQAAgHgDgHQgCgGgEgEQgEgDgFgDQgFgCgFAAQgLABgIAHg");
	this.shape_548.setTransform(83.6,214.5);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgDQAEgEAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEADgGAAQgFAAgEgDg");
	this.shape_549.setTransform(74.3,210.9);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgBgEgBQgHAAgDADQgDAEgDAFIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_550.setTransform(67.4,212.7);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#660000").s().p("AAbAvQgFgEAAgIIAAgoQAAgNgDgGQgFgGgLAAQgHAAgGADQgGAFgEAGQgCAGAAAPIAAAeQAAAIgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgEQAEgDAGAAQAEAAADACIAFAEQACAEAAAEIAAADQAHgJAKgEQAHgEAMAAQALAAAJAEQAJAFAFAHQACAFABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_551.setTransform(55.6,212.7);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADACAAAEQAAAEgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_552.setTransform(42.8,212.7);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADACAAAEQAAAEgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_553.setTransform(24.7,212.7);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#660000").s().p("AgbAuQgKgDgGgHQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAACACIAFAGQAEAGAHAEQAGACAKAAQAIAAAFgCQAGgEAAgEQAAgHgGgDQgFgDgNgDQgOgDgKgEQgJgCgFgGQgGgGAAgIQAAgIAFgGQAGgHAJgEQALgEANAAQALAAAIACQAJACAHADQAFAEAEAEQACAEAAAEQABAEgEADQgEADgFAAQgFAAgDgDIgHgGQgDgDgFgCQgEgDgHAAQgIAAgEADQgGADAAAEQABAEADACIALAFIAQAEQAOADAIAEQAIACAEAGQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgLgFg");
	this.shape_554.setTransform(12.5,212.7);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgcQgHAEgDAHQgEAIABAJQgBAKAEAHQADAHAHAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgHAAgHADg");
	this.shape_555.setTransform(-5.1,212.7);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#660000").s().p("AAbAvQgEgEgBgIIAAgoQAAgNgEgGQgDgGgMAAQgHAAgGADQgGAFgDAGQgCAGgBAPIAAAeQAAAIgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgEQADgDAGAAQAEAAADACIAFAEQACAEAAAEIAAADQAHgJAJgEQAIgEAMAAQALAAAJAEQAJAFAEAHQADAFABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgHAAgDgEg");
	this.shape_556.setTransform(-18,212.7);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#660000").s().p("AgvBDQgGgCAAgHQAAgEADgCQADgDAGAAIAEABIAFAAQAFAAADgBQACgBADgDIAFgJIADgGIgkhMQgDgHAAgEIACgFQACgDADgCQADgCAEAAQAGABADADQAEAEACAGIAXA8IAXg4IAFgKQACgEADgCQACgBAFgBIAGACQADACACADIABAEIgBAGIgDAGIglBUQgFALgEAHQgEAGgHAEQgIAEgNAAQgNAAgGgDg");
	this.shape_557.setTransform(-36,214.5);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgcQgGAEgEAHQgDAIgBAJQABAKADAHQAEAHAGAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgIAAgGADg");
	this.shape_558.setTransform(-53.4,212.7);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#660000").s().p("AgmAlQgPgNAAgXQAAgOAHgMQAHgMAMgGQANgHARAAQALAAAKADQAJADAGAEQAHAFADAFQAEAFAAAEQAAAFgEADQgEADgFAAQgEAAgCgBIgGgGQgFgHgGgDQgFgEgJAAQgMAAgIAJQgHAJAAAOQAAAHACAGQACAGADAEQAEAEAGACQAFACAFAAQAJAAAGgDQAGgEAFgHQACgEAEgCQADgDAEAAQAFAAAEAEQADADAAAEQAAAFgDAFQgDAFgHAFQgGAFgKADQgKADgNAAQgZAAgPgOg");
	this.shape_559.setTransform(-66.2,212.6);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgDQAEgEAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEADgGAAQgFAAgEgDg");
	this.shape_560.setTransform(-75.4,210.9);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#660000").s().p("AAdAxQgEgDgEgFIgVgbIgUAbIgIAIQgDACgFAAQgFAAgEgDQgEgDAAgEQAAgEAGgHIAaggIgYgbQgFgHgBgEQAAgEAEgDQAEgDAGAAQAEAAAEADIAIAIIARAVIASgVIAIgIQADgDAFAAQAGAAAEADQADADAAAEIgBAFIgFAGIgXAbIAaAgQAGAHAAAEQAAAEgDADQgEADgGAAQgFAAgDgCg");
	this.shape_561.setTransform(-83.9,212.7);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#660000").s().p("AgmA3QgPgOAAgXQAAgMADgIQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAJQAAAJgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEAAADACQADACAAAEQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgIQgHAGgBAMIAzAAQgBgMgHgGQgHgHgLAAQgKAAgHAHgAgTgtQAAgBADgEIAFgIQAEgGADgCQADgCAFAAIAOAAQAGAAAAABIgGAGIgMAKIgHAGQgGADgHAAQgFAAAAgDg");
	this.shape_562.setTransform(-95.8,210.9);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#660000").s().p("AAxBAQgDgEAAgHIAAhcIgZBVIgEAMQgBAEgEADQgFADgHAAQgEAAgEgCQgEgCgCgDIgEgHIgCgIIgZhVIAABcQAAAHgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgHIAAhqQAAgIAFgDQAGgDAIAAIAKAAIANABQADABADAEIADALIAWBJIAWhJIAEgLQADgEADgBIANgBIAKAAQAIAAAGADQAFADAAAIIAABqQAAAHgEAEQgEAEgHAAQgFAAgFgEg");
	this.shape_563.setTransform(-111.1,210.9);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADACAAAEQAAAEgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_564.setTransform(-131.7,212.7);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgCQgFAGgGADQgGADgHACQgFACgHAAQgLAAgIgEQgJgEgHgGQgGgIgDgJQgEgKAAgKQAAgXANgNQANgNAWAAQALAAAIAEQAJAEAIAHIAAglQAAgHADgFQAEgEAGAAQAHABAEADQADAEAAAHIAABtQAAAHgDADQgFAEgGAAQgFAAgEgEgAgNgIQgHADgDAHQgDAGAAALQAAAKADAHQAEAHAGAEQAHADAGAAQAHAAAHgDQAGgEAEgHQADgHABgKQgBgKgDgIQgEgGgGgEQgHgDgHgBQgHAAgGAFg");
	this.shape_565.setTransform(-145.1,210.8);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADACAAAEQAAAEgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_566.setTransform(-163.2,212.7);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAguIgEAAQgGgBgDgCQgEgDAAgDQAAgEAEgDQADgDAHABIADAAIAAgQIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABAEIAAAJIAAASIALAAQAGgBADADQADADAAAEQAAAFgEACQgFACgIAAIgGAAIAAAsIABAJQAAADACADQACACAFAAIAHgBIAHgBQADAAADADQADACAAAEQAAAFgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_567.setTransform(-173,211);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#660000").s().p("AAaAvQgEgEAAgIIAAgoQAAgNgDgGQgFgGgLAAQgHAAgGADQgHAFgDAGQgCAGAAAPIAAAeQAAAIgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgEQAEgDAGAAQAEAAADACIAFAEQACAEAAAEIAAADQAIgJAJgEQAHgEAMAAQALAAAJAEQAJAFAFAHQACAFABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_568.setTransform(-183.6,212.7);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADACAAAEQAAAEgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_569.setTransform(-196.4,212.7);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgCQgFAGgGADQgGADgHACQgFACgHAAQgLAAgIgEQgKgEgGgGQgGgIgEgJQgDgKAAgKQAAgXANgNQANgNAWAAQALAAAIAEQAJAEAIAHIAAglQAAgHADgFQAEgEAHAAQAGABAEADQADAEAAAHIAABtQAAAHgDADQgFAEgFAAQgGAAgEgEgAgNgIQgHADgDAHQgDAGAAALQAAAKADAHQAEAHAGAEQAHADAGAAQAHAAAHgDQAGgEAEgHQADgHABgKQgBgKgDgIQgEgGgGgEQgHgDgHgBQgHAAgGAFg");
	this.shape_570.setTransform(-209.8,210.8);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgDQAEgEAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEADgGAAQgFAAgEgDg");
	this.shape_571.setTransform(-219.1,210.9);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#660000").s().p("AgbAuQgLgDgFgHQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAGQAFAGAGAEQAGACAJAAQAJAAAFgCQAGgEAAgEQAAgHgGgDQgFgDgMgDQgPgDgKgEQgJgCgFgGQgGgGAAgIQAAgIAFgGQAFgHAKgEQALgEAOAAQAJAAAJACQAJACAHADQAFAEAEAEQACAEAAAEQAAAEgDADQgEADgFAAQgEAAgEgDIgHgGQgDgDgFgCQgEgDgGAAQgJAAgFADQgEADAAAEQAAAEADACIAKAFIARAEQAOADAIAEQAIACAEAGQAFAFAAAHQAAALgGAHQgFAHgMAEQgLAEgQAAQgOAAgMgFg");
	this.shape_572.setTransform(-227.9,212.7);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADACAAAEQAAAEgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_573.setTransform(-240,212.7);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgBgEgBQgHAAgDADQgDAEgDAFIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_574.setTransform(-249.8,212.7);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#660000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgHADgEQAFgDAGgBQAFAAAFAFQADADAAAHIAAACQAIgIAJgEQAIgEAKAAQAOAAALAGQALAGAHALQAGAMAAAQQAAALgEAIQgDAKgHAHQgGAGgKAEQgIADgLAAQgLABgIgFQgIgFgIgHIAAAlQAAAQgNABQgJAAgCgFgAgTgqQgHAJgBAQQABAPAHAGQAIAJALAAQAIAAAGgDQAGgEAEgGQADgIAAgKQAAgKgDgHQgEgHgFgEQgHgDgIgBQgKABgJAHg");
	this.shape_575.setTransform(-261.6,214.5);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADACAAAEQAAAEgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_576.setTransform(-280.3,212.7);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgDIgKAKQgHAEgGACQgGABgIABQgLgBgIgDQgIgEgFgHQgFgHAAgPIAAgxQAAgIAEgDQADgEAHAAQAGAAAEAEQAFADAAAIIAAAnQgBAJACAFQACAHAFADQAEADAHABQAHAAAFgFQAHgDADgHQACgEABgRIAAgfQAAgIADgDQAFgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAIgEADQgDAEgHAAQgGAAgDgEg");
	this.shape_577.setTransform(-293.1,212.7);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#660000").s().p("AgPBBQgEgDAAgIIAAhBIgIAAQgHAAgDgDQgEgCAAgEQAAgJAPAAIAHAAIAAgHQAAgNADgGQADgHAJgEQAHgDAOAAQAZAAAAALQAAADgDADQgCADgEgBIgGAAIgHgBQgHABgDADQgCAFAAAHIAAAGIAHAAQARAAAAAIQAAAHgFABQgEACgIAAIgHAAIAABBQAAAIgEADQgEAEgFAAQgGAAgEgEg");
	this.shape_578.setTransform(-302.8,210.8);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#660000").s().p("AgOAaQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgEAFgBQALgHAAgJQgGAAgFgCQgFgEAAgGQAAgGAFgFQAFgEAGABQAFAAAEACQAEACACAFQACAFAAAGQAAAJgEAHQgEAJgHAEQgFAEgFAAQgEABgCgCg");
	this.shape_579.setTransform(278.5,193.6);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#660000").s().p("AAhAvQgFgEgEgHQgLAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgIQAAgJAIgIQAHgGANgDIAOgCIARgDIARgFQgBgJgEgFQgEgEgNgBQgKABgFACQgGACgEAGIgFAHQgBABgGAAQgFAAgDgCQgEgDAAgEQAAgHAFgFQAGgHALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAJQAAAFgEACQgFAEgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAFAEQAFAFAHAAQAIgBAHgDQAHgDAEgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_580.setTransform(268.8,188.5);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#660000").s().p("AAWA2IAAgqQAAgMgDgFQgEgHgMAAQgHAAgFAEQgHAEgDAFQgCAGAAAOIAAAhQAAAHgEAFQgEADgGAAQgPAAAAgPIAAhsQAAgHAEgEQADgDAIAAQAGAAAEADQAEAEAAAHIAAAmQAFgFAGgEQAFgDAFgCQAGgBAHAAQALAAAJADQAIAFAFAIQADAEABAGIABALIAAAwQAAAHgEAFQgEADgGAAQgPAAAAgPg");
	this.shape_581.setTransform(256,186.7);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#660000").s().p("AgmAlQgPgNAAgXQAAgOAHgMQAHgMAMgGQANgHARAAQALAAAKADQAJADAGAEQAHAFADAFQAEAFAAAEQAAAFgEADQgEADgFAAQgEAAgCgBIgGgGQgFgHgGgDQgFgEgJAAQgMAAgIAJQgHAJAAAOQAAAHACAGQACAGADAEQAEAEAGACQAFACAFAAQAJAAAGgDQAGgEAFgHQACgEAEgCQADgDAEAAQAFAAAEAEQADADAAAEQAAAFgDAFQgDAFgHAFQgGAFgKADQgKADgNAAQgZAAgPgOg");
	this.shape_582.setTransform(243.6,188.5);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#660000").s().p("AAcAvQgEgEAAgHIAAgCIgLAJQgGAEgGACQgGACgJAAQgKAAgIgEQgIgEgEgHQgGgHAAgQIAAgwQAAgIAEgDQADgEAHAAQAHAAADAEQAEADAAAIIAAAnQAAAJACAFQACAGAEAEQAFADAHAAQAHAAAFgDQAHgEADgGQACgFAAgSIAAgeQABgIAEgDQADgEAHAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_583.setTransform(230.8,188.5);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#660000").s().p("AgJBCQgEgFAAgHIAAhsQAAgHADgEQAEgDAGAAQAGAAAEADQAEAEAAAHIAABsQAAAHgEAFQgEADgGAAQgGAAgDgDg");
	this.shape_584.setTransform(221.5,186.7);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#660000").s().p("AAgAvQgDgEgGgHQgKAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgIQAAgJAIgIQAHgGANgDIANgCIASgDIAQgFQAAgJgEgFQgEgEgMgBQgLABgFACQgGACgDAGIgGAHQgBABgGAAQgFAAgDgCQgEgDAAgEQAAgHAGgFQAFgHALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHAEAIIACAJQAAAFgEACQgEAEgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAFAFAJAAQAHgBAIgDQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_585.setTransform(206.9,188.5);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#660000").s().p("AgJBCQgEgFAAgHIAAhsQAAgHADgEQAEgDAGAAQAGAAAEADQAEAEAAAHIAABsQAAAHgEAFQgEADgGAAQgGAAgDgDg");
	this.shape_586.setTransform(197.6,186.7);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#660000").s().p("AAhAvQgFgEgFgHQgKAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgIQAAgJAHgIQAIgGANgDIAOgCIARgDIARgFQgBgJgEgFQgEgEgNgBQgJABgGACQgFACgEAGIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAJQAAAFgEACQgFAEgFAAQgEAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAEAEQAFAFAIAAQAIgBAHgDQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_587.setTransform(183.1,188.5);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#660000").s().p("AgJAwIgFgFIgGgMIgbg5IgCgFIgCgEIAAgEIABgFIAFgEQADgCAEAAQAHAAADAEQADADADAIIAWA4IAZg5QADgIADgDQACgDAGAAQAGAAAEAEQADADAAAEIAAAEIgCAEIgCAEIgbA6IgDAHIgEAHIgGAEQgDACgFAAQgFAAgEgDg");
	this.shape_588.setTransform(171.2,188.5);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_589.setTransform(162.5,186.7);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#660000").s().p("AgJAwIgFgFIgGgMIgbg5IgCgFIgCgEIAAgEIABgFIAFgEQADgCAEAAQAHAAADAEQADADADAIIAWA4IAZg5QADgIADgDQACgDAGAAQAGAAAEAEQADADAAAEIAAAEIgCAEIgCAEIgbA6IgDAHIgEAHIgGAEQgDACgFAAQgFAAgEgDg");
	this.shape_590.setTransform(153.7,188.5);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#660000").s().p("AgXAvQgKgEgIgHQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALADAHAIQAIAGAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgbQgGADgEAHQgDAIAAAJQAAAKADAHQAEAIAGADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgHAAgHAFg");
	this.shape_591.setTransform(136.1,188.5);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#660000").s().p("AgJAwIgFgFIgGgMIgbg5IgCgFIgCgEIAAgEIABgFIAFgEQADgCAEAAQAHAAADAEQADADADAIIAWA4IAZg5QADgIADgDQACgDAGAAQAGAAAEAEQADADAAAEIAAAEIgCAEIgCAEIgbA6IgDAHIgEAHIgGAEQgDACgFAAQgFAAgEgDg");
	this.shape_592.setTransform(124.1,188.5);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#660000").s().p("AAcAvQgEgEAAgHIAAgCIgKAJQgHAEgGACQgGACgIAAQgLAAgIgEQgIgEgFgHQgFgHAAgQIAAgwQAAgIAEgDQADgEAHAAQAGAAAEAEQAFADAAAIIAAAnQgBAJACAFQACAGAFAEQAEADAHAAQAHAAAFgDQAHgEADgGQACgFABgSIAAgeQAAgIADgDQAFgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgDAEgHAAQgGAAgDgEg");
	this.shape_593.setTransform(111.9,188.5);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgvIgEAAQgGAAgDgDQgEgCAAgEQAAgEAEgDQADgCAHAAIADAAIAAgPIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGAAADACQADADAAAEQAAAEgEACQgFACgIABIgGAAIAAAtIABAJQAAADACABQACACAFAAIAHgBIAHAAQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_594.setTransform(101.9,186.8);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#660000").s().p("AAbAvQgEgEgBgHIAAgpQAAgNgDgGQgEgHgMAAQgHABgGAEQgGAEgDAGQgCAGgBAOIAAAgQAAAHgDAEQgEAEgHAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAEAAADABIAFAGQACACAAAFIAAADQAHgJAJgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgHAAgDgEg");
	this.shape_595.setTransform(91.3,188.5);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#660000").s().p("AAgAvQgDgEgGgHQgKAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgIQAAgJAHgIQAIgGANgDIANgCIASgDIAQgFQAAgJgEgFQgEgEgMgBQgKABgGACQgGACgDAGIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAGgFQAFgHALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHAEAIIACAJQAAAFgEACQgEAEgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAGAFAIAAQAHgBAIgDQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_596.setTransform(78.5,188.5);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#660000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgCgEgDgEQgDgEgIAAQgFABgFADQgFACgDAGQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgGAAgEgEQgDgEAAgIIAAgnIgCgOQAAgFgDgEQgEgEgGAAQgOAAgFAJQgFAJAAAOIAAAiQAAAIgDAEQgEAEgHAAQgGAAgEgEQgFgEAAgIIAAhGQAAgIAEgDQADgEAHAAQAFAAAFAEQADADAAAGIAAACQAIgIAJgDQAIgEAKAAQALAAAHAEQAIAEAEAHQAIgHAIgEQAIgEAKAAQAMAAAIAFQAJADAEAIQAEAGAAAPIAAAwQAAAIgEAEQgEAEgHAAQgGAAgFgEg");
	this.shape_597.setTransform(62.7,188.5);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#660000").s().p("AgaAuQgLgEgGgGQgFgGAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAFQAFAHAGADQAGAEAKAAQAIAAAFgEQAGgDAAgEQAAgHgGgDQgFgDgNgDQgPgDgIgEQgKgCgFgGQgGgFAAgJQAAgIAFgGQAGgHAKgEQAJgEAOAAQALAAAIACQAKACAFADQAGAEADAEQADAEAAAEQAAAFgDACQgEADgGAAQgDAAgEgCIgHgHQgDgEgEgCQgFgCgHAAQgHAAgFADQgGADAAAEQABAEADADIALAEIAQAEQANADAJAEQAIADAFAFQAEAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgKgFg");
	this.shape_598.setTransform(42,188.5);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#660000").s().p("AAhAvQgFgEgEgHQgLAIgJADQgJAEgMAAQgLAAgIgEQgJgEgEgHQgFgGAAgIQAAgJAIgIQAHgGANgDIAOgCIARgDIARgFQgBgJgEgFQgEgEgNgBQgKABgFACQgGACgEAGIgFAHQgBABgGAAQgFAAgDgCQgEgDAAgEQAAgHAFgFQAGgHALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAJQAAAFgEACQgFAEgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAFAEQAFAFAHAAQAIgBAIgDQAGgDAEgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_599.setTransform(29.9,188.5);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgvIgEAAQgGAAgDgDQgEgCAAgEQAAgEAEgDQADgCAHAAIADAAIAAgPIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGAAADACQADADAAAEQAAAEgEACQgFACgIABIgGAAIAAAtIABAJQAAADACABQACACAFAAIAHgBIAHAAQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_600.setTransform(20.1,186.8);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#660000").s().p("AgbAuQgLgEgFgGQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAFQAFAHAGADQAGAEAJAAQAJAAAGgEQAFgDAAgEQAAgHgFgDQgHgDgLgDQgPgDgKgEQgJgCgGgGQgFgFAAgJQAAgIAFgGQAFgHAKgEQALgEAOAAQAJAAAJACQAJACAHADQAFAEAEAEQADAEgBAEQAAAFgDACQgDADgGAAQgFAAgDgCIgHgHQgDgEgFgCQgEgCgGAAQgIAAgGADQgEADAAAEQgBAEAEADIAKAEIARAEQAOADAIAEQAIADAEAFQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgOAAgMgFg");
	this.shape_601.setTransform(10.1,188.5);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_602.setTransform(1.4,186.7);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgvIgEAAQgGAAgDgDQgEgCAAgEQAAgEAEgDQADgCAHAAIADAAIAAgPIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGAAADACQADADAAAEQAAAEgEACQgFACgIABIgGAAIAAAtIABAJQAAADACABQACACAFAAIAHgBIAHAAQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_603.setTransform(-4.9,186.8);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#660000").s().p("AAbAvQgFgEAAgHIAAgpQAAgNgDgGQgFgHgLAAQgHABgGAEQgGAEgEAGQgCAGAAAOIAAAgQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgDQAEgEAGAAQAEAAADABIAFAGQACACAAAFIAAADQAHgJAKgDQAHgFAMAAQALAAAJAFQAJAEAFAHQACAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_604.setTransform(-15.5,188.5);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_605.setTransform(-28.4,188.5);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgGAHgFADQgGAEgGACQgGABgIAAQgKAAgJgDQgJgFgGgHQgGgGgEgKQgDgKAAgLQAAgWANgNQAOgNAUAAQAMAAAIADQAJAFAIAHIAAglQAAgIAEgEQADgDAHAAQAGgBAEAEQADADAAAIIAABtQAAAHgDAEQgEADgGAAQgGAAgEgDgAgNgJQgGAEgEAHQgDAHAAAJQAAALADAGQAEAHAHAFQAFADAHAAQAIAAAGgDQAGgEAEgHQADgHAAgLQAAgJgDgIQgEgGgGgEQgGgDgIAAQgHAAgGADg");
	this.shape_606.setTransform(-41.8,186.7);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#660000").s().p("AAaAvQgDgEAAgHIAAgpQAAgNgFgGQgDgHgMAAQgHABgGAEQgHAEgDAGQgBAGAAAOIAAAgQAAAHgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgDQAEgEAGAAQAEAAADABIAFAGQACACAAAFIAAADQAIgJAIgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_607.setTransform(-54.6,188.5);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_608.setTransform(-67.4,188.5);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#660000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgIADgDQAFgEAFABQAHAAADADQAEAEAAAGIAAAEQAIgJAJgEQAJgEAKAAQANAAALAGQALAGAGALQAHAMAAAPQAAAMgDAJQgFAJgGAHQgHAGgIAEQgJADgKAAQgLAAgJgEQgIgEgIgJIAAAmQAAAQgOAAQgHABgDgFgAgSgpQgJAHABAQQgBAQAJAHQAHAIAMAAQAHAAAGgDQAGgFADgGQAEgGAAgLQAAgKgDgHQgDgHgHgEQgGgDgHAAQgLgBgIAJg");
	this.shape_609.setTransform(-80.2,190.4);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_610.setTransform(-93.3,188.5);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgGAHgFADQgGAEgHACQgFABgIAAQgKAAgJgDQgIgFgHgHQgGgGgDgKQgEgKAAgLQAAgWAOgNQANgNAUAAQAMAAAJADQAIAFAIAHIAAglQAAgIADgEQAEgDAGAAQAHgBADAEQAEADAAAIIAABtQAAAHgEAEQgDADgHAAQgFAAgEgDgAgNgJQgGAEgDAHQgEAHAAAJQAAALAEAGQADAHAHAFQAFADAHAAQAHAAAHgDQAGgEAEgHQADgHAAgLQAAgJgDgIQgEgGgGgEQgHgDgHAAQgHAAgGADg");
	this.shape_611.setTransform(-106.7,186.7);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#660000").s().p("AAbAvQgFgEAAgHIAAgpQAAgNgDgGQgFgHgLAAQgHABgGAEQgGAEgEAGQgCAGAAAOIAAAgQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgDQAEgEAGAAQAEAAADABIAFAGQACACAAAFIAAADQAHgJAKgDQAHgFAMAAQALAAAJAFQAJAEAFAHQACAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_612.setTransform(-119.6,188.5);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_613.setTransform(-129,186.7);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#660000").s().p("AgbAuQgKgEgGgGQgFgGAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAFQAEAHAHADQAGAEAKAAQAIAAAFgEQAGgDAAgEQAAgHgGgDQgFgDgNgDQgOgDgKgEQgJgCgFgGQgGgFAAgJQAAgIAFgGQAGgHAJgEQAKgEAOAAQALAAAIACQAKACAFADQAGAEADAEQADAEAAAEQABAFgEACQgEADgFAAQgEAAgEgCIgHgHQgDgEgFgCQgEgCgHAAQgHAAgFADQgGADAAAEQABAEADADIALAEIAQAEQANADAJAEQAIADAEAFQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgLgFg");
	this.shape_614.setTransform(-143.1,188.5);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#660000").s().p("AgWAvQgLgEgHgHQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALADAHAIQAIAGAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgbQgHADgDAHQgDAIgBAJQABAKADAHQADAIAHADQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgPgHgIQgIgJgNAAQgHAAgHAFg");
	this.shape_615.setTransform(-155.3,188.5);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#660000").s().p("AgJBCQgEgFAAgHIAAhsQAAgHADgEQAEgDAGAAQAGAAAEADQAEAEAAAHIAABsQAAAHgEAFQgEADgGAAQgGAAgDgDg");
	this.shape_616.setTransform(-164.7,186.7);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#660000").s().p("AAgAvQgDgEgGgHQgKAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgIQAAgJAHgIQAIgGANgDIANgCIASgDIAQgFQAAgJgEgFQgEgEgMgBQgKABgGACQgGACgDAGIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAGgFQAFgHALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHAEAIIACAJQAAAFgEACQgEAEgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAGAFAIAAQAHgBAIgDQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_617.setTransform(-179.3,188.5);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDACQgDADgDAGIgDANIgBATIAAAVQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_618.setTransform(-189.2,188.5);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#660000").s().p("AAgAvQgDgEgGgHQgKAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgIQAAgJAIgIQAHgGANgDIANgCIASgDIAQgFQAAgJgEgFQgEgEgMgBQgLABgFACQgGACgEAGIgFAHQgBABgGAAQgFAAgDgCQgEgDAAgEQAAgHAGgFQAFgHALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHAEAIIACAJQAAAFgEACQgEAEgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAFAFAJAAQAHgBAIgDQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_619.setTransform(-200.8,188.5);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#660000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgIAEgDQADgEAHABQAFAAAEADQAEAEAAAGIAAAEQAJgJAIgEQAJgEAJAAQAOAAALAGQALAGAGALQAHAMAAAPQAAAMgEAJQgEAJgGAHQgHAGgIAEQgJADgLAAQgKAAgJgEQgJgEgHgJIAAAmQAAAQgNAAQgJABgCgFgAgTgpQgHAHAAAQQAAAQAHAHQAJAIALAAQAHAAAGgDQAGgFADgGQAEgGAAgLQAAgKgDgHQgDgHgHgEQgGgDgHAAQgLgBgJAJg");
	this.shape_620.setTransform(-213.6,190.4);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#660000").s().p("AgaAuQgLgEgGgGQgFgGAAgGQAAgEADgDQADgDAGAAQAEAAACACIAFAFQAFAHAGADQAGAEAJAAQAJAAAGgEQAFgDAAgEQAAgHgFgDQgHgDgMgDQgPgDgIgEQgKgCgGgGQgFgFAAgJQAAgIAFgGQAFgHALgEQAKgEANAAQAKAAAKACQAIACAGADQAGAEADAEQAEAEAAAEQAAAFgEACQgDADgHAAQgEAAgDgCIgHgHQgDgEgEgCQgFgCgHAAQgIAAgFADQgEADgBAEQAAAEAEADIAKAEIARAEQANADAJAEQAIADAFAFQAEAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgPAAgLgFg");
	this.shape_621.setTransform(-231.9,188.5);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_622.setTransform(-244,188.5);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#660000").s().p("AgJBCQgEgFAAgHIAAhsQAAgHADgEQAEgDAGAAQAGAAAEADQAEAEAAAHIAABsQAAAHgEAFQgEADgGAAQgGAAgDgDg");
	this.shape_623.setTransform(-253.2,186.7);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_624.setTransform(-259,186.7);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#660000").s().p("AgmAlQgPgNAAgXQAAgOAHgMQAHgMAMgGQANgHARAAQALAAAKADQAJADAGAEQAHAFADAFQAEAFAAAEQAAAFgEADQgEADgFAAQgEAAgCgBIgGgGQgFgHgGgDQgFgEgJAAQgMAAgIAJQgHAJAAAOQAAAHACAGQACAGADAEQAEAEAGACQAFACAFAAQAJAAAGgDQAGgEAFgHQACgEAEgCQADgDAEAAQAFAAAEAEQADADAAAEQAAAFgDAFQgDAFgHAFQgGAFgKADQgKADgNAAQgZAAgPgOg");
	this.shape_625.setTransform(-268.3,188.5);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#660000").s().p("AgQBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAHAAQAGAAADAEQAEADAAAHIAABHQAAAIgEAEQgDAEgGAAQgHAAgDgEgAgVgtQAAgBADgEIAFgIQAEgGADgCQADgCAFAAIAOAAQAGAAAAABIgGAGIgMAKIgHAGQgGADgHAAQgFAAAAgDg");
	this.shape_626.setTransform(-276.8,186.7);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#660000").s().p("AgPBCQgEgFAAgHIAAhBIgIAAQgHAAgDgCQgEgDAAgEQAAgJAPAAIAHAAIAAgIQAAgMADgGQADgHAJgDQAHgDAOAAQAZAAAAAKQAAAEgDACQgCACgEABIgGgBIgHAAQgHAAgDADQgCAEAAAIIAAAGIAHAAQARAAAAAJQAAAFgFADQgEABgIAAIgHAAIAABBQAAAHgEAFQgEADgFAAQgGAAgEgDg");
	this.shape_627.setTransform(-283.6,186.7);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_628.setTransform(-290.4,186.7);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgFAHgGADQgGAEgHACQgFABgHAAQgLAAgIgDQgJgFgHgHQgGgGgDgKQgEgKAAgLQAAgWANgNQANgNAWAAQALAAAIADQAJAFAIAHIAAglQAAgIADgEQAEgDAGAAQAHgBAEAEQADADAAAIIAABtQAAAHgDAEQgFADgGAAQgFAAgEgDgAgNgJQgHAEgDAHQgDAHAAAJQAAALADAGQAEAHAGAFQAHADAGAAQAHAAAHgDQAGgEAEgHQADgHABgLQgBgJgDgIQgEgGgGgEQgHgDgHAAQgHAAgGADg");
	this.shape_629.setTransform(-300.4,186.7);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#660000").s().p("AgbAuQgLgDgFgHQgFgGAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAFQAEAHAHAEQAGADAJAAQAJAAAGgDQAFgEAAgEQAAgHgFgDQgHgDgLgDQgPgDgKgEQgJgCgGgGQgFgGAAgIQAAgHAFgHQAFgHAKgEQALgEAOAAQAJAAAKACQAJACAGADQAFAEAEAEQADAEAAAEQgBAFgDACQgDADgHAAQgEAAgDgCIgHgHQgDgDgFgDQgEgCgGAAQgIAAgGADQgEADAAAEQgBAEAEACIAKAFIARAEQANADAJAEQAIADAEAFQAFAFAAAHQAAAKgGAIQgFAHgMAEQgLAEgPAAQgPAAgMgFg");
	this.shape_630.setTransform(209.8,164.3);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#660000").s().p("AAhAvQgFgDgEgIQgLAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAIgIQAHgGANgCIAOgDIARgDIAQgFQAAgJgEgFQgEgFgNAAQgKAAgFADQgFADgFAFIgFAHQgBABgGAAQgFAAgDgCQgEgDAAgEQAAgHAFgGQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHADAIIACAKQAAADgEADQgEAEgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAFAEQAFAFAHAAQAIgBAIgDQAGgDAEgFQADgGAAgNIAAgEIgSAFg");
	this.shape_631.setTransform(197.6,164.3);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#660000").s().p("AA5AvQgFgEAAgIIAAgpIgBgNQgBgEgDgEQgEgDgGAAQgGAAgFADQgFACgDAGQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgFgEQgDgEAAgIIAAgnIgBgOQgBgFgDgEQgDgDgIAAQgOgBgEAJQgFAJABAOIAAAiQAAAIgFAEQgEAEgGAAQgHAAgDgEQgFgEAAgIIAAhHQAAgGAEgEQAEgEAGAAQAFAAAEAEQAEADAAAGIAAACQAIgHAIgEQAJgEAKAAQALAAAHAEQAHAEAGAHQAGgHAJgEQAJgEAKAAQALABAJAEQAIADAEAIQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_632.setTransform(181.8,164.3);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#660000").s().p("AgbAuQgKgDgGgHQgFgGAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAFQAEAHAHAEQAGADAKAAQAIAAAFgDQAGgEAAgEQAAgHgGgDQgFgDgNgDQgOgDgKgEQgJgCgFgGQgGgGAAgIQAAgHAFgHQAGgHAJgEQAKgEAOAAQALAAAIACQAKACAGADQAFAEADAEQADAEAAAEQABAFgEACQgEADgFAAQgEAAgEgCIgHgHQgDgDgFgDQgEgCgHAAQgHAAgFADQgGADAAAEQABAEADACIALAFIAQAEQANADAJAEQAIADAEAFQAFAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgPAAgLgFg");
	this.shape_633.setTransform(161.1,164.3);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAKQAEAIAAALQAAALgEAJQgEAKgIAHQgHAHgLADQgKAEgNAAQgMAAgKgEgAgOgbQgHAEgDAGQgDAIgBAJQABAKADAHQADAIAHADQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgPgHgIQgIgJgNAAQgHABgHAEg");
	this.shape_634.setTransform(148.9,164.3);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#660000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgIAEgDQADgDAHAAQAGAAAEADQADAEAAAGIAAAEQAIgJAJgEQAJgEAJAAQAOAAALAGQALAGAGALQAHALAAARQAAALgEAJQgEAJgGAHQgHAGgJAEQgIAEgLgBQgLABgIgFQgJgEgHgJIAAAmQAAAQgNAAQgJABgCgFgAgTgpQgHAHgBARQABAPAHAGQAJAJALAAQAHAAAGgDQAGgFADgGQAEgGAAgLQAAgKgDgHQgEgHgGgEQgGgDgHgBQgLAAgJAJg");
	this.shape_635.setTransform(135.9,166.2);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#660000").s().p("AA4AvQgEgEAAgIIAAgpIgBgNQAAgEgEgEQgEgDgGAAQgGAAgFADQgFACgDAGQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgEgEQgFgEAAgIIAAgnIAAgOQgBgFgDgEQgDgDgIAAQgOgBgEAJQgEAJAAAOIAAAiQAAAIgFAEQgEAEgGAAQgHAAgEgEQgEgEAAgIIAAhHQAAgGAEgEQAEgEAFAAQAHAAADAEQAFADAAAGIAAACQAHgHAIgEQAJgEAKAAQALAAAIAEQAHAEAEAHQAIgHAIgEQAJgEAKAAQALABAIAEQAJADAEAIQAEAGAAAPIAAAwQAAAIgEAEQgEAEgHAAQgHAAgEgEg");
	this.shape_636.setTransform(119.5,164.3);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_637.setTransform(103.6,164.3);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgHAEgEQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_638.setTransform(94.4,162.5);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgvIgEAAQgGAAgDgDQgEgCAAgEQAAgEAEgDQADgCAHAAIADAAIAAgQIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGAAADACQADADAAAEQAAAEgEACQgFADgIAAIgGAAIAAAtIABAJQAAACACACQACACAFABIAHgCIAHAAQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_639.setTransform(88.1,162.6);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#660000").s().p("AgaAuQgLgDgGgHQgFgGAAgGQAAgEADgDQADgDAGAAQAEAAACACIAFAFQAFAHAGAEQAGADAKAAQAIAAAFgDQAGgEAAgEQAAgHgGgDQgGgDgMgDQgPgDgIgEQgKgCgFgGQgGgGAAgIQAAgHAFgHQAGgHAKgEQAJgEAOAAQAKAAAKACQAIACAGADQAGAEADAEQADAEABAEQAAAFgEACQgEADgGAAQgDAAgEgCIgHgHQgDgDgEgDQgFgCgHAAQgHAAgFADQgFADgBAEQAAAEAEACIALAFIAQAEQANADAJAEQAIADAFAFQAEAFAAAHQAAAKgGAIQgFAHgMAEQgLAEgPAAQgQAAgKgFg");
	this.shape_640.setTransform(72.7,164.3);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#660000").s().p("AgXAvQgKgDgHgIQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGAKgEQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAKQAEAIAAALQAAALgEAJQgEAKgIAHQgHAHgLADQgKAEgNAAQgMAAgLgEgAgOgbQgGAEgEAGQgEAIAAAJQAAAKAEAHQAEAIAGADQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgPgHgIQgIgJgNAAQgIABgGAEg");
	this.shape_641.setTransform(60.4,164.3);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#660000").s().p("AgJBCQgEgFAAgHIAAhsQAAgHADgEQAEgDAGAAQAGAAAEADQAEAEAAAHIAABsQAAAHgEAFQgEADgGAAQgGAAgDgDg");
	this.shape_642.setTransform(51,162.5);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#660000").s().p("AAbAvQgFgEAAgIIAAgoQAAgNgDgGQgEgHgMABQgHAAgGAEQgGAEgDAGQgDAGAAAPIAAAeQAAAIgDAEQgEAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgDQADgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAHgJAJgDQAIgFAMAAQALAAAJAFQAJAEAFAHQACAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_643.setTransform(36.3,164.3);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_644.setTransform(23.5,164.3);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_645.setTransform(5.5,164.3);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgCIgLAJQgFAEgHACQgGACgJAAQgKAAgIgEQgIgEgEgHQgGgHAAgPIAAgxQAAgHAEgEQADgEAHAAQAHAAAEAEQADAEAAAHIAAAnQAAAJACAFQACAGAEAEQAFAEAHAAQAHgBAFgEQAHgDADgGQACgFAAgSIAAgeQAAgHAFgEQAEgEAGAAQAGAAAEAEQAEAEAAAHIAABHQAAAIgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_646.setTransform(-7.3,164.3);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#660000").s().p("AAgBBQgDgEAAgJIAAgiQgIAGgJAFQgJADgKAAQgNAAgLgGQgLgGgHgLQgGgLAAgPQAAgRAGgLQAHgLALgGQALgGAOAAQAKAAAJAEQAJAEAHAJIAAgEQAAgGAEgEQADgDAGAAQAGAAAEADQAEAEAAAGIAABrQAAASgOgBQgIABgCgFgAgTgpQgHAIAAAQQAAAJAEAHQADAHAGAEQAGADAHAAQAHAAAHgDQAGgEAEgHQAEgGAAgLQAAgIgDgGQgCgGgEgDQgEgEgFgDQgFgCgFAAQgLAAgIAJg");
	this.shape_647.setTransform(-20.9,166.2);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_648.setTransform(-38.9,164.3);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgFAHgGADQgGADgHACQgFACgHAAQgLAAgIgDQgKgFgGgGQgGgIgEgJQgDgJAAgMQAAgWANgNQANgNAWAAQALAAAIADQAJAFAIAHIAAglQAAgHADgFQAEgDAHAAQAGgBAEAEQADADAAAIIAABtQAAAHgDAEQgFADgFAAQgGAAgEgDgAgNgJQgHAEgDAHQgDAGAAALQAAAJADAHQAEAHAGAFQAHADAGAAQAHAAAHgDQAGgEAEgHQADgHABgKQgBgKgDgIQgEgGgGgEQgHgDgHgBQgHAAgGAEg");
	this.shape_649.setTransform(-52.3,162.5);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#660000").s().p("AgJBCQgEgFAAgHIAAhsQAAgHADgEQAEgDAGAAQAGAAAEADQAEAEAAAHIAABsQAAAHgEAFQgEADgGAAQgGAAgDgDg");
	this.shape_650.setTransform(-61.6,162.5);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_651.setTransform(-70.8,164.3);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#660000").s().p("AgDBEIgLgDIgGgGIgIgHIAAADQAAAHgEAEQgDADgHAAQgFAAgEgDQgEgEAAgHIAAhsQAAgHADgFQAEgDAGAAQAHAAADADQAEAEAAAHIAAAmQAIgHAJgEQAIgEALAAQAOAAAMAGQAKAGAGALQAGAKAAAPQAAAMgDAKQgDAJgHAHQgGAGgJAFQgJADgLAAQgGABgFgCgAgMgJQgHAEgEAHQgDAHgBAKQAAAPAJAIQAHAIAMAAQAKAAAIgIQAIgIAAgPQAAgLgDgGQgDgHgGgEQgGgEgIAAQgIAAgFAEg");
	this.shape_652.setTransform(-83.6,162.5);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_653.setTransform(-96.7,164.3);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDACQgDADgDAGIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_654.setTransform(-106.6,164.3);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_655.setTransform(-123.6,164.3);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgvIgEAAQgGAAgDgDQgEgCAAgEQAAgEAEgDQADgCAHAAIADAAIAAgQIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGAAADACQADADAAAEQAAAEgEACQgFADgIAAIgGAAIAAAtIABAJQAAACACACQACACAFABIAHgCIAHAAQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_656.setTransform(-133.4,162.6);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#660000").s().p("AAbAvQgEgEgBgIIAAgoQAAgNgEgGQgDgHgMABQgHAAgGAEQgGAEgDAGQgCAGgBAPIAAAeQAAAIgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgDQADgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAHgJAJgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgHAAgDgEg");
	this.shape_657.setTransform(-144,164.3);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#660000").s().p("AAgAvQgDgDgGgIQgKAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgDIAQgFQAAgJgEgFQgEgFgMAAQgKAAgGADQgGADgDAFIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAGgGQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHAEAIIACAKQAAADgEADQgEAEgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAGAFAIAAQAHgBAIgDQAGgDAEgFQADgGAAgNIAAgEIgSAFg");
	this.shape_658.setTransform(-156.8,164.3);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgvIgEAAQgGAAgDgDQgEgCAAgEQAAgEAEgDQADgCAHAAIADAAIAAgQIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGAAADACQADADAAAEQAAAEgEACQgFADgIAAIgGAAIAAAtIABAJQAAACACACQACACAFABIAHgCIAHAAQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_659.setTransform(-166.6,162.6);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDACQgDADgDAGIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_660.setTransform(-175.1,164.3);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAKQAEAIAAALQAAALgEAJQgEAKgIAHQgHAHgLADQgKAEgNAAQgMAAgLgEgAgOgbQgHAEgDAGQgEAIABAJQgBAKAEAHQADAIAHADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgHABgHAEg");
	this.shape_661.setTransform(-186.9,164.3);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#660000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgIADgDQAEgDAGAAQAHAAADADQAEAEAAAGIAAAEQAIgJAJgEQAJgEAKAAQANAAALAGQALAGAGALQAHALAAARQAAALgDAJQgFAJgGAHQgGAGgJAEQgJAEgKgBQgLABgJgFQgJgEgHgJIAAAmQAAAQgOAAQgHABgDgFgAgSgpQgJAHABARQgBAPAJAGQAHAJALAAQAIAAAGgDQAGgFAEgGQADgGAAgLQAAgKgDgHQgDgHgGgEQgHgDgIgBQgKAAgIAJg");
	this.shape_662.setTransform(-199.8,166.2);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#660000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgCgEgDgEQgDgDgIAAQgFAAgFADQgFACgDAGQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgGAAgEgEQgDgEAAgIIAAgnIgCgOQAAgFgDgEQgEgDgGAAQgOgBgFAJQgFAJAAAOIAAAiQAAAIgDAEQgEAEgHAAQgGAAgEgEQgFgEAAgIIAAhHQAAgGAEgEQADgEAHAAQAFAAAFAEQADADAAAGIAAACQAIgHAJgEQAIgEAKAAQALAAAHAEQAIAEAEAHQAIgHAIgEQAIgEAKAAQAMABAIAEQAJADAEAIQAEAGAAAPIAAAwQAAAIgEAEQgEAEgHAAQgGAAgFgEg");
	this.shape_663.setTransform(-216.3,164.3);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgHAEgEQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_664.setTransform(-228.7,162.5);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#660000").s().p("AAaAvQgDgEAAgIIAAgoQgBgNgEgGQgDgHgMABQgHAAgGAEQgGAEgDAGQgCAGAAAPIAAAeQgBAIgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgDQADgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAIgJAIgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_665.setTransform(-243.4,164.3);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgCIgKAJQgHAEgGACQgGACgIAAQgLAAgIgEQgIgEgFgHQgFgHAAgPIAAgxQAAgHAEgEQAEgEAGAAQAGAAAEAEQAFAEAAAHIAAAnQAAAJABAFQACAGAFAEQAEAEAHAAQAHgBAFgEQAHgDADgGQADgFAAgSIAAgeQAAgHADgEQAEgEAHAAQAGAAAEAEQAEAEAAAHIAABHQAAAIgEADQgDAEgHAAQgFAAgEgEg");
	this.shape_666.setTransform(-256.3,164.3);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_667.setTransform(-274.5,164.3);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgCIgLAJQgFAEgHACQgGACgJAAQgKAAgIgEQgIgEgEgHQgGgHAAgPIAAgxQAAgHAEgEQAEgEAGAAQAGAAAFAEQADAEAAAHIAAAnQAAAJACAFQACAGAEAEQAEAEAIAAQAGgBAHgEQAGgDADgGQADgFgBgSIAAgeQAAgHAFgEQAEgEAGAAQAGAAAEAEQAEAEAAAHIAABHQAAAIgEADQgEAEgFAAQgGAAgEgEg");
	this.shape_668.setTransform(-287.3,164.3);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#660000").s().p("AgwBAQgEgEAAgJIAAhmQAAgGABgDQACgEAFgCQAEgBAGAAIBJAAQAHAAAEACQADADABAFQgBAFgDADQgEADgHAAIg8AAIAAAiIAyAAQAHAAADADQAEACAAAFQAAAEgEADQgDACgHAAIgyAAIAAAsQAAAJgEAEQgFAEgGAAQgIAAgEgEg");
	this.shape_669.setTransform(-299.8,162.6);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#660000").s().p("AgXBQIAEgIIAIgSQAFgKADgPQADgOAAgPQAAgOgDgOQgDgOgFgKIgIgSIgEgIQAAgDAEAAQAHAAAEADQAEABAFAKIAKAQQAFAJACAIQADAIACAJQABAJAAAIQAAATgFAQQgGAQgMARQgFAKgEACQgEACgHAAQgBAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_670.setTransform(-194.6,140.7);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#660000").s().p("AgVA8QgKgDgGgGQgGgFgDgGQgDgGAAgEQAAgFADgDQAEgDAFAAQADAAADACQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAFAMAGAFQAGAHAKAAQAGAAAFgEQAGgCAEgFQADgFAAgHQAAgKgGgFQgHgHgKABIgFAAIgGAAQgGAAgCgCQgDgCAAgEQAAgDADgDQAEgCAHgBIAEAAQAIAAAHgEQAGgFAAgJQAAgGgFgFQgGgEgIgBQgFABgEABQgEABgCADQgCACgCAEIgEAHQAAABgBAAQAAAAAAABQgBAAAAAAQgBABgBAAIgGABQgEAAgCgDQgEgCAAgFQAAgFADgEQADgGAGgEQAGgEAJgDQAJgDAJAAQAKAAAIADQAHACAHAEQAFAEADAGQADAFAAAHQAAAJgEAFQgEAHgJAGQAIADAGAEQAEAFAEAFQACAGAAAGQAAAIgDAHQgEAHgHAGQgHAGgJADQgKADgLAAQgLAAgJgEg");
	this.shape_671.setTransform(-203.9,139.1);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#660000").s().p("AAOA+QgDgEAAgGIAAgQIgwAAQgJAAgFgEQgFgEAAgGIABgDIACgDIADgFIADgDIAzg8IAJgJQADgCAFAAQAPgBAAAPIAABCIAEAAQAIAAAEABQAEACABAHQAAAEgFADQgDACgIAAIgFAAIAAAQQgBAGgDAEQgDACgGAAQgFAAgEgCgAgeARIApAAIAAgxg");
	this.shape_672.setTransform(-215.9,139);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#660000").s().p("AgaA7QgMgFgGgIQgGgJAAgLQAAgXAZgHQgUgJAAgSQAAgIAFgIQAGgHAKgEQAKgFAOAAQAKAAAJADQAJACAGAFQAGAEADAHQACAFAAAGQAAAJgEAHQgFAGgKAFQAIACAGAEQAFAFADAGQADAFAAAIQAAALgGAJQgGAIgMAFQgLAFgQAAQgPAAgLgFgAgRAJQgGAGAAAKQAAAHADAFQADAFAGADQAFACAGABQAHgBAFgCQAGgDADgFQADgFAAgHQAAgHgDgFQgDgEgGgDQgGgDgGAAQgJAAgIAGgAgOgqQgGAFAAAIQAAAHAGAFQAGAFAIAAQAFAAADgBQAEgCADgCQADgCAAgDQACgDAAgEQAAgFgCgEQgDgEgFgDQgFgCgFAAQgJAAgFAFg");
	this.shape_673.setTransform(-227.7,139.1);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#660000").s().p("AAMA8QgDgDAAgHIAAhNQgYARgJAAQgEAAgDgDQgDgCAAgFQAAgDADgCIALgGQAMgFAHgFQAGgFAGgIIAHgHQABgCAFAAQAFAAADAEQADADAAAGIAABhQAAARgNAAQgGAAgEgEg");
	this.shape_674.setTransform(-240.8,139.1);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#660000").s().p("AgOALQgIAAgDgDQgEgEAAgEQAAgEAEgDQADgCAIAAIAdAAQAIAAADACQAEADAAAEQAAAEgEAEQgDADgIAAg");
	this.shape_675.setTransform(-248.8,140.7);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#660000").s().p("AgaA5QgLgHgHgNQgGgOAAgUQAAgQAEgMQAEgNAHgIQAHgIAKgFQAKgEAMAAQANAAAJAEQAKAFAFAGQAEAGAAAGQAAADgDADQgDADgEAAQgEAAgEgCQgDgDgCgEQgCgEgFgDQgFgEgHAAQgEABgFACQgFACgEAFQgHAJgBAXQAHgHAIgDQAHgEAJAAQAJAAAIAEQAIACAGAHQAGAFADAGQADAIAAAJQAAAMgGAJQgGAKgMAFQgLAGgOAAQgQAAgMgHgAgIAAQgGACgDAGQgEAFAAAIQAAALAHAIQAHAHAJABQAKAAAHgIQAGgHAAgLQAAgIgDgGQgDgFgFgDQgFgCgHAAQgFAAgFACg");
	this.shape_676.setTransform(-258.1,139.1);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#660000").s().p("AgbA7QgLgFgGgIQgGgJAAgLQAAgXAZgHQgUgJAAgSQAAgIAFgIQAFgHALgEQAKgFAOAAQALAAAJADQAIACAGAFQAGAEADAHQADAFAAAGQAAAJgFAHQgFAGgKAFQAJACAFAEQAGAFACAGQADAFAAAIQAAALgGAJQgGAIgLAFQgMAFgQAAQgPAAgMgFgAgQAJQgHAGAAAKQAAAHADAFQAEAFAEADQAGACAGABQAHgBAGgCQAFgDADgFQADgFAAgHQAAgHgDgFQgDgEgGgDQgFgDgHAAQgJAAgHAGgAgOgqQgGAFAAAIQAAAHAGAFQAGAFAIAAQAEAAAEgBQAEgCACgCQADgCACgDQABgDAAgEQAAgFgDgEQgCgEgEgDQgGgCgFAAQgIAAgGAFg");
	this.shape_677.setTransform(-270,139.1);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#660000").s().p("AgYA7QgEgDABgHQAAgFACgKIAJgWQAGgMAJgOQAIgPAMgNIg0AAQgHAAgEgCQgFgDAAgFQAAgHAFgBQAEgCAHAAIBBAAQAJAAAFADQADACAAAGQABAEgFAGIgLAMQgHAIgHAKQgGALgGAOIgDALIgDAMIgBALQgBAJgEADQgEADgGAAQgGAAgEgEg");
	this.shape_678.setTransform(-281.4,139.2);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#660000").s().p("AAMA8QgDgDAAgHIAAhNQgYARgJAAQgEAAgDgDQgDgCAAgFQAAgDADgCIALgGQAMgFAHgFQAGgFAGgIIAHgHQABgCAFAAQAFAAADAEQADADAAAGIAABhQAAARgNAAQgGAAgEgEg");
	this.shape_679.setTransform(-294.9,139.1);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#660000").s().p("AAMBSQgCgBgEgEIgGgJQgIgLgFgLQgFgKgDgLQgDgMAAgNQABgLACgMQACgLAGgLQAFgLAIgLIAGgKQAEgDACAAIAIgBQAEAAAAADIgEAIIgJASQgDAKgEAOQgEAOABAOQgBAPAEAOQAEAOADAKIAJATIAEAIQAAACgEAAIgIAAg");
	this.shape_680.setTransform(-303.1,140.7);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#660000").s().p("AAfAtQgEgEgFgGQgKAGgJAEQgIACgLAAQgKABgIgEQgIgEgEgFQgEgHAAgHQAAgJAHgHQAHgFAMgDIAMgDIARgDIAPgDQAAgKgEgEQgEgEgMAAQgJAAgFADQgFACgEAFIgFAGQgBACgFAAQgFAAgDgDQgDgCAAgEQAAgGAFgGQAFgGAKgEQALgDAOAAQASAAAKADQAKAEAEAHQAEAJAAANIAAAMIAAAOQAAAGADAHIACAJQAAAEgEADQgDACgFAAQgEAAgEgCgAADAFIgOADQgFABgEACQgDAEAAAEQAAAGAEADQAFAFAHAAQAHAAAHgEQAHgCADgGQADgFAAgMIAAgEIgRAFg");
	this.shape_681.setTransform(-125.5,118);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#660000").s().p("AgJA8QgHgEgCgGQgCgHAAgLIAAgsIgEAAQgFAAgDgCQgDgCAAgEQAAgEADgCQADgCAGAAIADAAIAAgOIAAgJIADgGQABgCADgCQADgBAEAAQAFAAADADQADACAAAEIABAJIAAAQIAJAAQAHAAACACQAEACAAAEQgBAFgEACQgEABgIAAIgFAAIAAAqIAAAJIADAFQACABAEAAIAGAAIAHgBQACAAADACQADACAAAEQAAAFgHADQgHADgNAAQgMAAgGgDg");
	this.shape_682.setTransform(-160.9,116.4);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#660000").s().p("AgkAjQgNgMAAgWQgBgNAHgMQAHgKALgHQAMgFAQAAQALAAAIACQAJADAGAEQAGAFADAEQADAFAAAEQAAAEgEADQgDADgFAAQgDAAgCgBIgGgGQgFgGgFgDQgFgEgIABQgLgBgIAJQgGAHAAANQAAAIACAFQABAFADAFQAEADAFACQAFACAFAAQAIAAAGgDQAFgEAFgGQADgEADgCQACgCAEgBQAFABAEADQADADAAAEQAAAEgDAFQgEAFgFAEQgHAFgJADQgJACgMAAQgYAAgOgMg");
	this.shape_683.setTransform(-170.7,118);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgJAEgJQADgJAHgHQAHgFAJgEQAKgEALABQAQAAALAFQALAGAGAJQAGAKAAAJQAAAHgGADQgGADgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgEIAIgHQACgCAEABQAEAAACABQADADAAADQAAADgDAEQgDAFgFADQgGAEgJADQgIACgMAAQgYAAgPgMgAgPgYQgGAGgCALIAwAAQgBgMgHgFQgGgGgKAAQgJAAgHAGg");
	this.shape_684.setTransform(-206.5,118);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#660000").s().p("AgxA9QgCgEAAgIIAAhjQAAgHADgDQAEgEAFAAQAGAAAEAEQADADAAAHIAAACQAIgIAIgDQAIgFAJAAQANAAAKAGQAKAGAGALQAGAKAAAPQAAAKgDAJQgEAIgGAGQgGAHgIADQgIADgKAAQgKAAgIgEQgIgEgHgIIAAAkQAAAPgNAAQgHAAgDgEgAgRgnQgIAIAAAPQAAANAIAIQAIAHAKAAQAGAAAGgDQAGgDADgHQAEgGAAgJQAAgKgEgGQgDgHgGgDQgFgFgHAAQgKABgIAHg");
	this.shape_685.setTransform(-218.5,119.7);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#660000").s().p("AAaAsQgDgEAAgGIAAgDQgFAGgFADQgGAEgGACQgFABgIAAQgKAAgHgDQgJgEgDgGQgGgHAAgOIAAguQABgHADgDQADgDAGAAQAHAAAEADQADAEAAAGIAAAlQAAAIACAFQABAGAFADQADADAHAAQAGAAAGgDQAGgEADgFQACgFAAgQIAAgdQAAgGAEgEQAEgDAFAAQAGAAAEADQAEADAAAHIAABDQgBAHgDADQgDADgGAAQgFAAgEgDg");
	this.shape_686.setTransform(-231,118);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#660000").s().p("AAfAtQgEgEgFgGQgKAGgJAEQgIACgLAAQgKABgIgEQgIgEgEgFQgEgHAAgHQAAgJAHgHQAHgFAMgDIAMgDIARgDIAPgDQAAgKgEgEQgEgEgMAAQgJAAgFADQgFACgEAFIgFAGQgBACgFAAQgFAAgDgDQgDgCAAgEQAAgGAFgGQAFgGAKgEQALgDAOAAQASAAAKADQAKAEAEAHQAEAJAAANIAAAMIAAAOQAAAGADAHIACAJQAAAEgEADQgDACgFAAQgEAAgEgCgAADAFIgOADQgFABgEACQgDAEAAAEQAAAGAEADQAFAFAHAAQAHAAAHgEQAHgCADgGQADgFAAgMIAAgEIgRAFg");
	this.shape_687.setTransform(-248.5,118);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#660000").s().p("AAfA9QgEgDAAgGIAAgDIgKAJIgMAFQgFACgHAAQgKAAgIgEQgIgDgGgHQgGgGgDgJQgDgJAAgKQAAgVAMgNQAMgMAUAAQALAAAIAEQAIADAHAHIAAgiQAAgHAEgEQADgEAGAAQAGAAADAEQADADAAAHIAABmQAAAGgDAEQgEADgFAAQgGAAgDgEgAgMgIQgGAEgDAGQgDAGAAAJQAAAKADAGQADAHAGAEQAGADAGAAQAHAAAGgDQAGgEADgGQAEgHAAgKQAAgJgEgHQgDgFgGgEQgGgEgHAAQgGAAgGAEg");
	this.shape_688.setTransform(-261,116.2);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#660000").s().p("AAfAtQgEgEgFgGQgKAGgJAEQgIACgLAAQgKABgIgEQgIgEgEgFQgEgHAAgHQAAgJAHgHQAHgFAMgDIAMgDIARgDIAPgDQAAgKgEgEQgEgEgMAAQgJAAgFADQgFACgEAFIgFAGQgBACgFAAQgFAAgDgDQgDgCAAgEQAAgGAFgGQAFgGAKgEQALgDAOAAQASAAAKADQAKAEAEAHQAEAJAAANIAAAMIAAAOQAAAGADAHIACAJQAAAEgEADQgDACgFAAQgEAAgEgCgAADAFIgOADQgFABgEACQgDAEAAAEQAAAGAEADQAFAFAHAAQAHAAAHgEQAHgCADgGQADgFAAgMIAAgEIgRAFg");
	this.shape_689.setTransform(-272.9,118);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#660000").s().p("AAaAsQgEgEAAgGIAAgDQgEAGgFADQgFAEgHACQgFABgJAAQgJAAgIgDQgHgEgEgGQgGgHAAgOIAAguQABgHADgDQADgDAHAAQAGAAAEADQADAEAAAGIAAAlQAAAIACAFQACAGADADQAFADAGAAQAGAAAGgDQAGgEADgFQACgFAAgQIAAgdQAAgGAEgEQAEgDAFAAQAHAAADADQADADABAHIAABDQAAAHgEADQgDADgGAAQgFAAgEgDg");
	this.shape_690.setTransform(-284.8,118);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#660000").s().p("AgYA8QgOgEgKgIQgJgJgFgMQgFgMAAgPQAAgNAFgNQAFgMAJgIQAKgJAOgEQAOgFAQAAQAPAAALAEQALADAHAFQAHAFADAGQAEAGAAAEQAAAFgEADQgEAEgGAAIgGgBIgFgEIgJgLQgDgEgHgDQgGgCgKAAQgJAAgIADQgIADgFAGQgGAGgDAIQgDAIAAAKQAAAVAMAMQALAMAUAAQAKAAAJgCQAJgCAJgFIAAgUIgXAAQgIAAgEgCQgEgCAAgFQAAgFADgCQAEgCAGAAIAhAAIAKABQAEABADACQACADAAAHIAAAYIgBAIQgBACgDADIgHAEQgNAGgMADQgMADgOAAQgQAAgNgFg");
	this.shape_691.setTransform(-299,116.2);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#660000").s().p("AgKAKQgFgEAAgGQAAgFAFgDQAEgFAGAAQAGAAAFAFQAFADAAAFQAAAGgFAEQgFAEgGAAQgGAAgEgEg");
	this.shape_692.setTransform(-35.9,219.6);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#660000").s().p("AgJBCQgEgFAAgHIAAhsQAAgHADgEQAEgDAGAAQAGAAAEADQAEAEAAAHIAABsQAAAHgEAFQgEAEgGgBQgGABgDgEg");
	this.shape_693.setTransform(-42.2,214);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgwIgEAAQgGAAgDgCQgEgDAAgEQAAgEAEgCQADgDAHAAIADAAIAAgOIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABADIAAALIAAAQIALAAQAGAAADADQADACAAAEQAAAGgEABQgFACgIAAIgGAAIAAAuIABAJQAAADACABQACACAFAAIAHgBIAHAAQADAAADACQADADAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_694.setTransform(-48.5,214.2);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAGgKAEQgIAEgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgJAIgIQAHgGANgDIANgCIASgDIAQgFQAAgKgEgEQgEgEgNgBQgKABgFACQgGACgEAGIgFAHQgBACgGgBQgFABgDgDQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAAOIAAAOIgBAOQABAHADAIIACAJQAAAFgEACQgEAEgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAFAEQAEAFAIAAQAIAAAIgEQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_695.setTransform(-58.5,215.9);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#660000").s().p("AgXBBQgKgEgIgHQgHgGgEgKQgEgJAAgLQAAgMAEgIQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALADAHAHQAIAHAEAJQAEAIAAAMQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgKQgGAEgEAGQgDAIAAAKQAAAKADAHQAEAHAGAEQAGAEAIAAQANAAAHgJQAIgIAAgPQAAgQgIgHQgHgJgNAAQgHAAgHAEgAgUgtQAAgBADgEIAEgIQAFgGADgCQADgCAFAAIAOAAQAGAAgBABIgFAGIgMAKIgIAGQgGADgGAAQgFAAAAgDg");
	this.shape_696.setTransform(-71.3,214.1);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#660000").s().p("AgJBCQgEgFAAgHIAAhsQAAgHADgEQAEgDAGAAQAGAAAEADQAEAEAAAHIAABsQAAAHgEAFQgEAEgGgBQgGABgDgEg");
	this.shape_697.setTransform(-93.4,214);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAGgKAEQgIAEgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgJAIgIQAHgGANgDIANgCIASgDIAQgFQAAgKgEgEQgEgEgNgBQgKABgFACQgGACgEAGIgFAHQgBACgGgBQgFABgDgDQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAAOIAAAOIgBAOQABAHADAIIACAJQAAAFgEACQgEAEgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAFAEQAEAFAIAAQAIAAAIgEQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_698.setTransform(-102.6,215.9);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#660000").s().p("AglAwQgIAAgEgCQgEgDAAgGQAAgEADgDIAMgLIARgRIAOgNIAKgLIAHgIIgpAAQgJAAgFgBQgEgCAAgFQAAgFADgCQAEgDAGAAIBBAAQAJAAAFADQAEACAAAGIgBAEIgCAEIgDADIgFAFIgzAyIA3AAQAHAAADADQAEACAAAFQAAAEgEADQgDADgHgBg");
	this.shape_699.setTransform(-114.5,215.9);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgwIgEAAQgGAAgDgCQgEgDAAgEQAAgEAEgCQADgDAHAAIADAAIAAgOIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABADIAAALIAAAQIALAAQAGAAADADQADACAAAEQAAAGgEABQgFACgIAAIgGAAIAAAuIABAJQAAADACABQACACAFAAIAHgBIAHAAQADAAADACQADADAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_700.setTransform(-123.6,214.2);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADABAAAFQAAADgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_701.setTransform(-134,215.9);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgDIgLAJQgFAEgHACQgGABgJAAQgKAAgIgDQgIgEgEgGQgGgJAAgPIAAgwQAAgIAEgDQADgEAHAAQAHAAAEAEQADADAAAIIAAAnQAAAJACAGQACAFAEAEQAFAEAHgBQAHAAAFgDQAHgEADgGQACgFAAgSIAAgeQAAgIAFgDQAEgEAGAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_702.setTransform(-146.8,215.9);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#660000").s().p("AA8BJIgMgHIgPgJQgPAIgVgBQgSABgOgGQgPgEgJgKQgJgJgGgOQgEgNAAgOQgBgPAGgNQAFgNAJgJQAKgJAOgFQAOgEARAAQAXgBASAJQAQAJAKAPQAIAQAAAUQAAAfgUAUIAPAHQAIAEADACQACADAAADQAAAEgDADQgDACgEAAQgDAAgGgBgAgVgxQgIADgFAGQgGAGgDAJQgEAJAAALQAAAXANAMQAMANATAAQAGAAAJgDQgFgDgHgDIgKgGQgDgBAAgEQABgCACgCQADgCADAAQAIAAAXANQAGgGAEgJQACgJAAgLQAAgOgFgLQgGgLgJgFQgLgGgMAAQgJAAgIADg");
	this.shape_703.setTransform(-161.4,214.5);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDADQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_704.setTransform(-179.7,215.9);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgKQgEgJAAgLQAAgLAEgJQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAIAAALQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgbQgGADgEAIQgDAHgBAJQABAKADAHQAEAIAGADQAGAEAIAAQANAAAHgJQAIgIAAgPQAAgPgIgIQgHgJgNAAQgIAAgGAFg");
	this.shape_705.setTransform(-191.5,215.9);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#660000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgIADgDQAFgEAGABQAFAAAFADQADAEAAAGIAAAEQAIgJAJgEQAIgEAKAAQAOAAALAGQALAGAHALQAGAMAAAPQAAAMgEAJQgDAJgHAGQgGAHgKAEQgIADgLAAQgLAAgIgEQgIgEgIgJIAAAmQAAAQgNAAQgJAAgCgEgAgTgpQgHAHgBAQQABAPAHAIQAIAIALAAQAIAAAGgEQAGgDAEgHQADgGAAgLQAAgKgDgHQgEgHgFgEQgHgEgIABQgKgBgJAJg");
	this.shape_706.setTransform(-204.5,217.7);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#660000").s().p("AgbAvQgKgFgGgFQgFgHAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAFQAEAHAHADQAGAEAKAAQAIAAAFgEQAGgDAAgFQAAgGgGgDQgFgDgNgDQgOgDgKgDQgJgDgFgGQgGgFAAgJQAAgIAFgGQAGgHAJgEQAKgEAOAAQALAAAIACQAKACAFAEQAGADADAEQADAEAAAEQABAFgEACQgEADgFAAQgEAAgEgCIgHgHQgDgEgFgCQgEgCgHAAQgHAAgFADQgGADAAAEQABAEADADIALAEIAQAEQANACAJAEQAIAEAEAFQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgLgEg");
	this.shape_707.setTransform(-222.7,215.9);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgKQgEgJAAgLQAAgLAEgJQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAAKAEQALADAHAIQAIAGAEAKQAEAIAAALQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgbQgHADgDAIQgDAHgBAJQABAKADAHQADAIAHADQAGAEAIAAQANAAAIgJQAHgIAAgPQAAgPgHgIQgIgJgNAAQgHAAgHAFg");
	this.shape_708.setTransform(-235,215.9);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgFAGgGAEQgGAEgHACQgFABgHAAQgLABgIgEQgKgFgGgHQgGgGgEgKQgDgKAAgLQAAgWANgNQANgNAWAAQALAAAIADQAJAEAIAIIAAglQAAgIADgEQAEgDAHAAQAGAAAEADQADAEAAAHIAABtQAAAHgDAEQgFAEgFgBQgGABgEgEgAgNgJQgHAEgDAGQgDAIAAAJQAAALADAGQAEAIAGADQAHAEAGAAQAHAAAHgEQAGgDAEgHQADgHABgLQgBgJgDgIQgEgGgGgEQgHgEgHABQgHAAgGADg");
	this.shape_709.setTransform(-248.5,214);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAGgKAEQgIAEgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgJAHgIQAIgGANgDIANgCIASgDIAQgFQAAgKgEgEQgEgEgMgBQgKABgGACQgGACgDAGIgGAHQgCACgFgBQgFABgDgDQgEgDAAgEQAAgHAGgFQAFgHALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAOIAAAOIgBAOQAAAHAEAIIACAJQAAAFgEACQgEAEgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAGAFAIAAQAHAAAIgEQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_710.setTransform(-261.2,215.9);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#660000").s().p("AgJAwIgFgFIgGgMIgbg5IgCgFIgCgEIAAgEIABgFIAFgEQADgCAEAAQAHAAADAEQADADADAJIAWA3IAZg5QADgIADgDQACgDAGAAQAGAAAEAEQADADAAAEIAAAEIgCAEIgCAEIgbA6IgDAHIgEAHIgGAEQgDACgFAAQgFAAgEgDg");
	this.shape_711.setTransform(-279.2,215.9);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#660000").s().p("AAaAvQgEgEAAgHIAAgpQAAgNgDgGQgFgHgLAAQgHAAgGAFQgHADgDAHQgCAGAAAOIAAAgQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgDQAEgEAGAAQAEAAADABIAFAGQACADAAAEIAAADQAIgJAJgDQAHgFAMAAQALAAAJAFQAJAEAFAHQACAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_712.setTransform(-291.1,215.9);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADABAAAFQAAADgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_713.setTransform(-303.9,215.9);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#660000").s().p("AAbAvQgFgEAAgHIAAgpQAAgNgDgGQgEgHgMAAQgHABgGAEQgGAEgDAGQgDAGAAAOIAAAgQAAAHgDAEQgEAEgHAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAEAAADABIAFAFQACADAAAFIAAADQAHgJAJgDQAIgFAMAAQALAAAJAFQAJAEAFAHQACAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_714.setTransform(193.4,191.7);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAHgKADQgIAEgMAAQgLAAgJgEQgIgEgFgGQgEgHAAgIQAAgJAHgIQAIgGANgDIANgCIASgDIAQgFQAAgJgEgFQgEgEgMgBQgKABgGACQgFACgEAGIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAGgFQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHADAIIADAJQAAAFgEACQgFAEgFAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAGAFAIAAQAHgBAHgDQAIgDADgFQADgGAAgNIAAgEIgSAFg");
	this.shape_715.setTransform(180.6,191.7);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_716.setTransform(159,191.7);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#660000").s().p("AgaAuQgLgEgGgFQgFgHAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAFQAFAHAGADQAGAEAKAAQAIAAAFgEQAGgDAAgEQAAgHgGgDQgFgDgNgDQgPgDgIgEQgKgCgFgGQgGgFAAgJQAAgIAFgGQAGgHAKgEQAJgEAOAAQALAAAIACQAKACAFADQAGAEADAEQADAEAAAEQAAAFgDACQgEADgGAAQgDAAgEgCIgHgHQgDgEgEgCQgFgCgHAAQgHAAgFADQgGADAAAEQABAEADADIALAEIAQAEQANADAJAEQAIADAFAFQAEAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgKgFg");
	this.shape_717.setTransform(141.4,191.7);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_718.setTransform(129.3,191.7);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALADAHAIQAIAGAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgbQgHADgDAHQgEAIAAAJQAAAKAEAHQADAIAHADQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgPgHgIQgIgJgNAAQgIAAgGAFg");
	this.shape_719.setTransform(110.7,191.7);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#660000").s().p("AAbBBQgFgEAAgHIAAgqQAAgMgDgGQgFgGgLAAQgHAAgGAEQgGAEgEAGQgCAFAAAQIAAAfQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgDQAEgEAGAAQAEAAADACIAFAFQACADAAAEIAAADQAHgIAKgEQAHgFAMAAQALAAAJAFQAJAEAFAIQACAEABAGIABAMIAAAvQAAAHgEAEQgEAEgGAAQgGAAgEgEgAgmgqQgCgCAAgEQAAgEACgFQACgEAFgCQAEgDAFAAIAIABIALAEIAIAEIAGAAIAFgBIADgFQABgFAEAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABABQABACAAADQAAAFgFAHQgEAGgJAAIgIgBIgJgEIgJgDIgHgBQgGAAgCAGQgCAFgDAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_720.setTransform(97.8,189.8);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#660000").s().p("AAgAvQgEgEgFgGQgKAHgJADQgJAEgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgJAHgIQAIgGANgDIAOgCIARgDIARgFQgBgJgEgFQgEgEgNgBQgJABgGACQgFACgEAGIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAJQAAAFgEACQgFAEgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAEAEQAFAFAIAAQAIgBAHgDQAIgDADgFQADgGABgNIAAgEIgSAFg");
	this.shape_721.setTransform(85,191.7);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#660000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgIADgDQAFgEAFABQAGAAAFADQADAEAAAGIAAAEQAJgJAIgEQAIgEALAAQANAAALAGQALAGAHALQAGAMAAAPQAAAMgDAJQgEAJgHAHQgGAGgKAEQgIADgKAAQgLAAgJgEQgIgEgIgJIAAAmQAAAQgOAAQgHABgDgFgAgTgpQgIAHAAAQQAAAQAIAGQAJAJAKAAQAIAAAGgDQAGgFAEgGQADgGAAgLQAAgKgDgHQgEgHgFgEQgHgDgIAAQgKgBgJAJg");
	this.shape_722.setTransform(72.2,193.5);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#660000").s().p("AgbAuQgKgEgGgFQgFgHAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAFQAEAHAHADQAGAEAKAAQAIAAAFgEQAGgDAAgEQAAgHgGgDQgFgDgMgDQgPgDgKgEQgJgCgFgGQgGgFAAgJQAAgIAFgGQAGgHAJgEQALgEAOAAQAKAAAIACQAJACAHADQAFAEAEAEQACAEAAAEQABAFgEACQgEADgFAAQgFAAgDgCIgHgHQgDgEgFgCQgEgCgGAAQgJAAgEADQgGADAAAEQABAEADADIALAEIAQAEQAOADAIAEQAIADAEAFQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgLgFg");
	this.shape_723.setTransform(59.3,191.7);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_724.setTransform(47.2,191.7);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#660000").s().p("AgbAuQgKgEgGgFQgFgHAAgGQAAgEADgDQAEgDAEAAQAFAAACACIAFAFQAFAHAGADQAGAEAKAAQAIAAAFgEQAGgDAAgEQAAgHgGgDQgFgDgNgDQgOgDgKgEQgJgCgFgGQgGgFAAgJQAAgIAFgGQAGgHAJgEQALgEANAAQALAAAIACQAJACAHADQAFAEAEAEQACAEAAAEQABAFgEACQgEADgFAAQgFAAgDgCIgHgHQgDgEgFgCQgEgCgHAAQgIAAgEADQgGADAAAEQABAEADADIALAEIAQAEQAOADAIAEQAIADAEAFQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgLgFg");
	this.shape_725.setTransform(29.6,191.7);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgbQgGADgEAHQgDAIgBAJQABAKADAHQAEAIAGADQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgPgHgIQgIgJgNAAQgHAAgHAFg");
	this.shape_726.setTransform(17.4,191.7);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_727.setTransform(-6.6,191.7);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgDIgLAJQgGAEgGACQgGACgJAAQgKAAgIgEQgIgEgEgGQgGgIAAgQIAAgwQAAgIAEgDQADgEAHAAQAHAAADAEQAEADAAAIIAAAnQAAAJACAFQACAGAEAEQAFADAHAAQAHAAAFgEQAHgDADgGQACgFAAgSIAAgeQABgIAEgDQADgEAHAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_728.setTransform(-19.4,191.7);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#660000").s().p("AAgBBQgDgEAAgJIAAgjQgIAHgJAFQgJADgKAAQgNAAgLgGQgLgGgHgMQgGgKAAgQQAAgPAGgMQAHgLALgGQALgGAOAAQAKAAAJAEQAJAEAHAJIAAgEQAAgGAEgEQADgEAGABQAGgBAEAEQAEAEAAAGIAABrQAAASgOgBQgIABgCgFgAgTgpQgHAIAAAPQAAALAEAGQADAHAGAEQAGADAHAAQAHAAAHgDQAGgEAEgHQAEgGAAgLQAAgIgDgFQgCgHgEgDQgEgFgFgCQgFgBgFAAQgLgBgIAJg");
	this.shape_729.setTransform(-32.9,193.5);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#660000").s().p("AAhAvQgEgEgFgGQgLAHgJADQgJAEgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgJAHgIQAIgGANgDIAOgCIARgDIARgFQgBgJgEgFQgEgEgNgBQgJABgGACQgFACgFAGIgFAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAJQAAAFgEACQgFAEgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAFAEQAFAFAHAAQAIgBAHgDQAIgDADgFQAEgGAAgNIAAgEIgSAFg");
	this.shape_730.setTransform(-51,191.7);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#660000").s().p("AA5AvQgFgEAAgIIAAgpIgBgNQgBgEgDgEQgDgEgIAAQgFABgFADQgFACgDAGQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgGAAgEgEQgDgEAAgIIAAgnIgBgOQgBgFgDgEQgEgEgHAAQgNAAgFAJQgFAJAAAOIAAAiQAAAIgEAEQgDAEgHAAQgGAAgEgEQgFgEAAgIIAAhGQAAgIAEgDQADgEAHAAQAFAAAFAEQADADAAAGIAAACQAIgIAIgDQAJgEAKAAQALAAAHAEQAHAEAGAHQAGgHAJgEQAJgEAJAAQAMAAAJAFQAIADAEAIQAEAGAAAPIAAAwQAAAIgEAEQgEAEgHAAQgGAAgEgEg");
	this.shape_731.setTransform(-72.6,191.7);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_732.setTransform(-88.4,191.7);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#660000").s().p("AgKBAQgFgEAAgJIAAhgIgiAAQgIAAgDgDQgEgDAAgFQAAgFAEgDQAEgDAHAAIBiAAQAIAAAEADQAEADAAAFQAAAFgEADQgEADgIAAIgiAAIAABgQAAAJgEAEQgEAEgHAAQgGAAgEgEg");
	this.shape_733.setTransform(-100.2,189.9);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALADAHAIQAIAGAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgbQgHADgDAHQgEAIABAJQgBAKAEAHQADAIAHADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgHAAgHAFg");
	this.shape_734.setTransform(-124.3,191.7);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_735.setTransform(-146.4,189.9);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#660000").s().p("AAdAwQgEgCgEgGIgVgaIgUAaIgIAIQgDADgFAAQgFAAgFgDQgDgDAAgEQAAgEAFgIIAageIgWgbQgHgHAAgGQABgDADgDQADgDAHAAQAFAAADADIAHAHIASAXIASgXIAIgHQADgDAFAAQAGAAADADQAEADAAADIgBAGIgFAHIgXAbIAaAeQAGAJAAADQAAAEgDADQgFADgFAAQgFAAgDgDg");
	this.shape_736.setTransform(-154.9,191.7);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#660000").s().p("AAyBAQgFgEAAgHIAAhcIgYBVIgEAMQgCAEgEADQgEADgHAAQgFAAgDgCQgEgCgCgDIgEgHIgCgIIgZhVIAABcQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhqQAAgIAFgDQAFgDAJAAIAKAAIANABQADABACAEIAFALIAVBJIAXhJIADgLQACgEAFgBIAMgBIAJAAQAKAAAFADQAFADAAAIIAABqQAAAHgEAEQgEAEgGAAQgHAAgDgEg");
	this.shape_737.setTransform(-182.1,189.9);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_738.setTransform(-202.7,191.7);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#660000").s().p("AgbAuQgLgEgFgFQgFgHAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAFQAFAHAGADQAGAEAJAAQAJAAAFgEQAGgDAAgEQAAgHgGgDQgFgDgMgDQgPgDgKgEQgJgCgFgGQgGgFAAgJQAAgIAFgGQAFgHAKgEQALgEAOAAQAJAAAJACQAJACAHADQAFAEAEAEQACAEAAAEQAAAFgDACQgEADgFAAQgEAAgEgCIgHgHQgDgEgFgCQgEgCgGAAQgJAAgFADQgEADAAAEQAAAEADADIAKAEIARAEQAOADAIAEQAIADAEAFQAFAFAAAHQAAALgGAHQgFAHgMAEQgLAEgQAAQgOAAgMgFg");
	this.shape_739.setTransform(-233.7,191.7);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgbQgGADgEAHQgDAIgBAJQABAKADAHQAEAIAGADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgIAAgGAFg");
	this.shape_740.setTransform(-246,191.7);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#660000").s().p("AgDBEIgKgDIgHgGIgIgHIAAADQAAAHgDAEQgFADgGAAQgGAAgDgDQgEgEAAgHIAAhsQAAgIADgEQAEgDAGAAQAHAAAEADQADAEAAAHIAAAmQAIgIAJgDQAIgEALAAQAOAAAMAGQAKAFAGAMQAGAKAAAPQAAAMgEAKQgCAJgHAGQgGAHgJAFQgJADgLAAQgHABgEgCgAgMgJQgHAEgEAHQgDAHgBAKQAAAPAIAIQAIAIAMAAQALAAAHgIQAIgIAAgQQAAgJgDgHQgDgHgGgEQgGgDgIAAQgIAAgFADg");
	this.shape_741.setTransform(-264.4,189.8);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_742.setTransform(-277.5,191.7);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgDIgKAJQgHAEgGACQgGACgIAAQgLAAgIgEQgIgEgFgGQgFgIAAgQIAAgwQAAgIAEgDQADgEAHAAQAGAAAEAEQAFADAAAIIAAAnQgBAJACAFQACAGAFAEQADADAIAAQAGAAAHgEQAGgDADgGQACgFABgSIAAgeQAAgIADgDQAFgEAGAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgDAEgGAAQgHAAgDgEg");
	this.shape_743.setTransform(-290.3,191.7);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#660000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgIAEgDQADgEAHABQAGAAAEADQADAEAAAGIAAAEQAIgJAJgEQAJgEAJAAQAOAAALAGQALAGAGALQAHAMAAAPQAAAMgEAJQgEAJgGAHQgHAGgJAEQgIADgLAAQgLAAgIgEQgJgEgHgJIAAAmQAAAQgNAAQgJABgCgFgAgTgpQgHAHgBAQQABAQAHAGQAJAJALAAQAHAAAGgDQAGgFADgGQAEgGAAgLQAAgKgDgHQgEgHgGgEQgGgDgHAAQgLgBgJAJg");
	this.shape_744.setTransform(-303.3,193.5);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#660000").s().p("AgbAvQgLgFgFgFQgFgHAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAFQAFAHAGADQAGADAJAAQAJAAAFgDQAGgDAAgFQAAgGgGgDQgFgDgMgDQgPgDgKgDQgJgDgFgGQgGgGAAgIQAAgHAFgHQAFgHAKgEQALgEAOAAQAJAAAJACQAJACAHAEQAFADAEAEQACAEAAAEQAAAFgDACQgEADgFAAQgEAAgEgDIgHgGQgDgDgFgDQgEgCgGAAQgIAAgGADQgEADAAAEQAAAEADADIAKAEIARAEQAOACAIAEQAIAEAEAFQAFAFAAAHQAAALgGAHQgFAHgMAEQgLAEgQAAQgOAAgMgEg");
	this.shape_745.setTransform(268,167.5);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAALAEQAKADAIAIQAHAGAEAJQAEAJAAALQAAALgEAKQgEAJgHAHQgIAHgKADQgLAEgNAAQgMAAgKgEgAgOgcQgGAFgEAHQgDAHgBAJQABAKADAHQAEAHAGAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNgBQgIAAgGAEg");
	this.shape_746.setTransform(255.8,167.5);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgDgEAAQgHAAgDAEQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_747.setTransform(246,167.5);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgwIgEAAQgGABgDgDQgEgCAAgFQAAgEAEgCQADgCAHgBIADAAIAAgOIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGABADACQADACAAAEQAAAGgEABQgFACgIAAIgGAAIAAAtIABAJQAAAEACACQACABAFAAIAHAAIAHgBQADAAADACQADADAAAEQAAAFgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_748.setTransform(237.2,165.8);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAALAEQAKADAIAIQAHAGAEAJQAEAJAAALQAAALgEAKQgEAJgHAHQgIAHgKADQgLAEgNAAQgMAAgKgEgAgOgcQgGAFgEAHQgDAHgBAJQABAKADAHQAEAHAGAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNgBQgHAAgHAEg");
	this.shape_749.setTransform(226.6,167.5);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#660000").s().p("AgaAvQgLgFgGgFQgFgHAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAFQAFAHAGADQAGADAKAAQAIAAAFgDQAGgDAAgFQAAgGgGgDQgFgDgNgDQgPgDgIgDQgKgDgFgGQgGgGAAgIQAAgHAFgHQAGgHAKgEQAJgEAOAAQALAAAIACQAKACAFAEQAGADADAEQADAEAAAEQAAAFgDACQgEADgGAAQgDAAgEgDIgHgGQgDgDgEgDQgFgCgHAAQgHAAgFADQgGADAAAEQABAEADADIALAEIAQAEQANACAJAEQAIAEAFAFQAEAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgKgEg");
	this.shape_750.setTransform(208.9,167.5);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAAKAEQALADAHAIQAIAGAEAJQAEAJAAALQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgKgEgAgOgcQgHAFgDAHQgEAHAAAJQAAAKAEAHQADAHAHAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNgBQgIAAgGAEg");
	this.shape_751.setTransform(196.7,167.5);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhsQAAgHADgDQAEgFAGAAQAGAAAEAFQAEADAAAHIAABsQAAAHgEAEQgEAFgGAAQgGAAgDgFg");
	this.shape_752.setTransform(187.3,165.7);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAHgKAEQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAIgHQAHgGANgDIANgCIASgEIAQgDQAAgLgEgEQgEgEgMAAQgLgBgFADQgGACgEAGIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAGgGQAFgHALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHAEAIIACAJQAAAEgEAEQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAEAEQAFADAJAAQAHAAAIgDQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_753.setTransform(172.7,167.5);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAALAEQAKADAIAIQAHAGAEAJQAEAJAAALQAAALgEAKQgEAJgHAHQgIAHgKADQgLAEgNAAQgMAAgKgEgAgOgcQgGAFgEAHQgDAHgBAJQABAKADAHQAEAHAGAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNgBQgIAAgGAEg");
	this.shape_754.setTransform(154.5,167.5);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgwIgEAAQgGABgDgDQgEgCAAgFQAAgEAEgCQADgCAHgBIADAAIAAgOIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGABADACQADACAAAEQAAAGgEABQgFACgIAAIgGAAIAAAtIABAJQAAAEACACQACABAFAAIAHAAIAHgBQADAAADACQADADAAAEQAAAFgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_755.setTransform(144.6,165.8);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgEIgLAKQgFAEgHACQgGACgJgBQgKABgIgEQgIgEgEgGQgGgJAAgPIAAgwQAAgHAEgEQADgEAHAAQAHAAAEAEQADAEAAAHIAAAnQAAAJACAGQACAFAEAEQAFADAHAAQAHAAAGgDQAGgEADgGQACgGAAgRIAAgeQAAgHAFgEQAEgEAGAAQAGAAAEAEQAEAEAAAHIAABIQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_756.setTransform(134,167.5);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#660000").s().p("AgDBEIgKgEIgHgEIgIgHIAAACQAAAHgDADQgFAFgFAAQgHAAgDgFQgEgDAAgHIAAhsQAAgIADgDQAEgFAHAAQAGAAAEAFQADADAAAHIAAAmQAIgHAJgEQAIgEALAAQAOAAAMAGQAKAFAGAMQAGAKAAAPQAAAMgEAJQgDAKgGAGQgGAIgJADQgJAFgLAAQgHgBgEgBgAgMgJQgHAEgEAGQgDAIgBAKQABAPAHAIQAIAIAMAAQALAAAHgIQAIgIAAgQQAAgKgDgHQgDgGgGgEQgGgDgIAAQgIAAgFADg");
	this.shape_757.setTransform(121.3,165.7);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_758.setTransform(111.4,165.7);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgDgEAAQgHAAgDAEQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_759.setTransform(104.5,167.5);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgwIgEAAQgGABgDgDQgEgCAAgFQAAgEAEgCQADgCAHgBIADAAIAAgOIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGABADACQADACAAAEQAAAGgEABQgFACgIAAIgGAAIAAAtIABAJQAAAEACACQACABAFAAIAHAAIAHgBQADAAADACQADADAAAEQAAAFgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_760.setTransform(95.7,165.8);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgDgEAAQgHAAgDAEQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_761.setTransform(82.2,167.5);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_762.setTransform(73.9,165.7);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#660000").s().p("AAbAvQgFgEAAgHIAAgpQAAgMgDgHQgFgGgLgBQgHAAgGAFQgGADgEAIQgCAFAAAOIAAAgQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgEQAEgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAHgIAKgFQAHgEAMAAQALAAAJAEQAJAFAFAIQACAEABAGIABANIAAAuQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_763.setTransform(64.6,167.5);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgEIgLAKQgFAEgHACQgGACgJgBQgKABgIgEQgIgEgEgGQgGgJAAgPIAAgwQAAgHAEgEQADgEAHAAQAHAAAEAEQADAEAAAHIAAAnQAAAJACAGQACAFAEAEQAFADAHAAQAHAAAFgDQAHgEADgGQACgGAAgRIAAgeQAAgHAFgEQAEgEAGAAQAGAAAEAEQAEAEAAAHIAABIQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_764.setTransform(51.6,167.5);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEABADACQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_765.setTransform(38.8,167.5);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgDgEAAQgHAAgDAEQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_766.setTransform(29,167.5);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAALAEQAKADAIAIQAHAGAEAJQAEAJAAALQAAALgEAKQgEAJgHAHQgIAHgKADQgLAEgNAAQgMAAgLgEgAgOgcQgHAFgDAHQgDAHAAAJQAAAKADAHQADAHAHAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNgBQgIAAgGAEg");
	this.shape_767.setTransform(11.8,167.5);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgDgEAAQgHAAgDAEQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_768.setTransform(2.1,167.5);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#660000").s().p("AgbBCQgMgEgGgGQgGgFAAgHQAAgEADgDQAEgCAFAAQAGAAAFAEIAFAFIAFAFIAHACIAKABQAKAAAGgCQAGgEADgEQACgFABgFIAAgSQgGAHgJAFQgJAEgLAAQgOAAgLgGQgKgHgGgLQgGgLAAgPQAAgMAEgIQADgKAHgFQAGgHAJgDQAIgDAKAAQALAAAJAEQAJAEAIAIIAAgCQAAgHAEgEQADgEAGAAQAIABADAEQADAFAAAJIAABIQAAAMgDAJQgDAJgHAGQgHAGgLADQgKADgQAAQgOgBgMgDgAgTgqQgHAJAAAOQAAAQAHAHQAIAHALAAQAHAAAHgDQAGgEAEgFQAEgGAAgLQAAgOgIgJQgIgJgMABQgLAAgIAHg");
	this.shape_769.setTransform(-10.1,169.4);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAAKAEQALADAHAIQAIAGAEAJQAEAJAAALQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgKgEgAgOgcQgHAFgDAHQgEAHAAAJQAAAKAEAHQADAHAHAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNgBQgIAAgGAEg");
	this.shape_770.setTransform(-22.9,167.5);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhsQAAgHADgDQAEgFAGAAQAGAAAEAFQAEADAAAHIAABsQAAAHgEAEQgEAFgGAAQgGAAgDgFg");
	this.shape_771.setTransform(-32.3,165.7);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#660000").s().p("AgvBDQgGgDAAgFQAAgFADgCQADgCAGAAIAEAAIAFABQAFgBADgBQACgBADgEIAFgJIADgFIgkhMQgDgIAAgCIACgHQACgCADgBQADgCAEgBQAGAAADAEQAEAEACAGIAXA9IAXg5IAFgLQACgEADgBQACgCAFAAIAGACQADABACADIABAGIgBAEIgDAHIglBUQgFALgEAHQgEAGgHAEQgIADgNABQgNgBgGgCg");
	this.shape_772.setTransform(-46.6,169.4);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAHgKAEQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAIgHQAHgGANgDIANgCIASgEIAQgDQAAgLgEgEQgEgEgNAAQgKgBgFADQgGACgEAGIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAFgGQAGgHALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAJAAANIAAAPIgBANQABAHADAIIACAJQAAAEgEAEQgEADgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAFAEQAEADAIAAQAIAAAIgDQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_773.setTransform(-63.9,167.5);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_774.setTransform(-85.8,165.7);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgDgEAAQgHAAgDAEQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_775.setTransform(-92.7,167.5);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEABADACQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_776.setTransform(-104.4,167.5);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#660000").s().p("AA5AvQgFgEAAgIIAAgpIgBgNQgBgEgDgEQgDgDgIgBQgFAAgFADQgFAEgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgFgEQgDgEAAgIIAAgnIgBgPQgBgFgDgDQgDgDgIgBQgOAAgEAJQgFAIABAQIAAAhQgBAIgEAEQgDAEgHAAQgGAAgEgEQgFgEAAgIIAAhGQAAgIAEgDQADgEAHAAQAGAAAEADQADAEAAAGIAAADQAIgJAIgDQAJgDAKgBQALABAHADQAHAEAGAIQAGgIAJgEQAJgDAJgBQAMAAAJAEQAIAFAEAHQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_777.setTransform(-120.2,167.5);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAHgKAEQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAIgHQAHgGANgDIANgCIASgEIAQgDQAAgLgEgEQgEgEgMAAQgLgBgFADQgGACgEAGIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAGgGQAFgHALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHAEAIIACAJQAAAEgEAEQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAEAEQAFADAJAAQAHAAAIgDQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_778.setTransform(-136,167.5);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAAKAEQALADAHAIQAIAGAEAJQAEAJAAALQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgLgEgAgOgcQgGAFgEAHQgEAHAAAJQAAAKAEAHQAEAHAGAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNgBQgIAAgGAEg");
	this.shape_779.setTransform(-148.8,167.5);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#660000").s().p("AAbAvQgFgEAAgHIAAgpQAAgMgDgHQgFgGgLgBQgHAAgGAFQgGADgEAIQgCAFAAAOIAAAgQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgEQAEgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAHgIAKgFQAHgEAMAAQALAAAJAEQAJAFAFAIQACAEABAGIABANIAAAuQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_780.setTransform(-161.8,167.5);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_781.setTransform(-171.2,165.7);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgwIgEAAQgGABgDgDQgEgCAAgFQAAgEAEgCQADgCAHgBIADAAIAAgOIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGABADACQADACAAAEQAAAGgEABQgFACgIAAIgGAAIAAAtIABAJQAAAEACACQACABAFAAIAHAAIAHgBQADAAADACQADADAAAEQAAAFgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_782.setTransform(-177.5,165.8);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAHgKAEQgIADgMAAQgLAAgJgEQgIgEgFgGQgEgHAAgIQAAgKAHgHQAIgGANgDIANgCIASgEIAQgDQAAgLgEgEQgEgEgMAAQgKgBgGADQgFACgEAGIgGAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAGgGQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHADAIIADAJQAAAEgEAEQgFADgFAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAEAEQAGADAIAAQAHAAAHgDQAIgDADgFQADgGAAgNIAAgDIgSAEg");
	this.shape_783.setTransform(-187.5,167.5);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhsQAAgHADgDQAEgFAGAAQAGAAAEAFQAEADAAAHIAABsQAAAHgEAEQgEAFgGAAQgGAAgDgFg");
	this.shape_784.setTransform(-196.8,165.7);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEABADACQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_785.setTransform(-211.4,167.5);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgCQgFAFgGAEQgGADgGADQgGACgIAAQgKAAgJgFQgIgDgHgIQgGgHgEgJQgDgJAAgMQAAgWAOgNQANgNAUAAQAMAAAJAEQAIADAIAIIAAglQAAgIAEgDQADgFAGAAQAHAAADAEQAEADAAAIIAABtQAAAHgEADQgEAFgGAAQgFAAgEgFgAgNgJQgGAEgDAGQgEAHAAAKQAAAKAEAHQADAIAHADQAFAEAHAAQAHAAAHgEQAGgDAEgHQAEgHgBgLQABgKgEgHQgEgGgGgEQgHgDgHAAQgHAAgGADg");
	this.shape_786.setTransform(-224.7,165.7);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEABADACQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_787.setTransform(-242.8,167.5);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgCQgFAFgGAEQgGADgGADQgGACgIAAQgKAAgJgFQgIgDgHgIQgGgHgEgJQgDgJAAgMQAAgWAOgNQANgNAUAAQAMAAAJAEQAIADAIAIIAAglQAAgIAEgDQADgFAGAAQAHAAADAEQAEADAAAIIAABtQAAAHgEADQgEAFgGAAQgFAAgEgFgAgNgJQgGAEgDAGQgEAHAAAKQAAAKAEAHQADAIAHADQAFAEAHAAQAHAAAHgEQAGgDAEgHQAEgHgBgLQABgKgEgHQgEgGgGgEQgHgDgHAAQgHAAgGADg");
	this.shape_788.setTransform(-256.2,165.7);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#660000").s().p("AAaAvQgEgEAAgHIAAgpQAAgMgDgHQgFgGgLgBQgHAAgGAFQgHADgDAIQgCAFAAAOIAAAgQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgEQAEgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAIgIAJgFQAHgEAMAAQALAAAJAEQAJAFAFAIQACAEABAGIABANIAAAuQAAAHgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_789.setTransform(-269.1,167.5);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#660000").s().p("AAhAvQgEgEgFgGQgLAHgJAEQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAHgHQAIgGANgDIAOgCIARgEIARgDQgBgLgEgEQgEgEgNAAQgJgBgGADQgFACgFAGIgFAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAFgGQAGgHALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHACAIIADAJQAAAEgEAEQgFADgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAFAEQAFADAHAAQAIAAAHgDQAIgDADgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_790.setTransform(-281.9,167.5);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgDgEAAQgHAAgDAEQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_791.setTransform(-291.8,167.5);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#660000").s().p("AgbBCQgMgEgGgGQgGgFAAgHQAAgEADgDQAEgCAFAAQAGAAAFAEIAFAFIAFAFIAHACIAKABQAKAAAGgCQAGgEADgEQACgFABgFIAAgSQgGAHgJAFQgJAEgLAAQgOAAgLgGQgKgHgGgLQgGgLAAgPQAAgMAEgIQADgKAHgFQAGgHAJgDQAIgDAKAAQALAAAJAEQAJAEAIAIIAAgCQAAgHAEgEQADgEAGAAQAIABADAEQADAFAAAJIAABIQAAAMgDAJQgDAJgHAGQgHAGgLADQgKADgQAAQgOgBgMgDgAgTgqQgHAJAAAOQAAAQAHAHQAIAHALAAQAHAAAHgDQAGgEAEgFQAEgGAAgLQAAgOgIgJQgIgJgMABQgLAAgIAHg");
	this.shape_792.setTransform(-303.9,169.4);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#660000").s().p("AgbAvQgKgEgGgGQgFgHAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAFQAEAHAHADQAGADAKABQAIgBAFgDQAGgDAAgFQAAgGgGgDQgFgDgNgDQgOgDgKgDQgJgDgFgGQgGgGAAgIQAAgHAFgHQAGgHAJgEQAKgEAOAAQALAAAIACQAKACAGAEQAFADADAEQADAEAAAEQABAEgEADQgEADgFAAQgEAAgEgDIgHgGQgDgEgFgCQgEgCgHAAQgHAAgFADQgGADAAAEQABAEADADIALAEIAQAEQANACAJAEQAIADAEAGQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgLgEg");
	this.shape_793.setTransform(221.4,143.3);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAGgKAFQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAIgHQAHgGANgDIAOgCIARgDIAQgFQAAgKgEgEQgEgEgNgBQgKABgFACQgFACgFAGIgFAHQgBACgGgBQgFABgDgDQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAIAAAOIAAAPIAAANQAAAHADAIIACAJQAAAFgEADQgEADgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAGAFADQAFAEAHABQAIAAAIgEQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_794.setTransform(209.3,143.3);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#660000").s().p("AA5AvQgFgEAAgIIAAgpIgBgNQgBgFgDgDQgEgDgGgBQgGAAgFAEQgFADgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgFgEQgDgEAAgIIAAgnIgBgOQgBgGgDgDQgDgDgIgBQgOAAgEAJQgFAIABAQIAAAhQAAAIgFAEQgEAEgGAAQgHAAgDgEQgFgEAAgIIAAhGQAAgIAEgDQAEgEAGAAQAFAAAEADQAEAEAAAGIAAADQAIgJAIgDQAJgDAKgBQALABAHADQAHAEAGAIQAGgIAJgEQAJgDAKgBQALAAAJAFQAIAEAEAHQAEAHAAAOIAAAwQAAAIgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_795.setTransform(193.5,143.3);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAALAEQAKADAIAIQAHAGAEAJQAEAJAAALQAAALgEAJQgEAKgHAHQgIAHgKADQgLAEgNAAQgMAAgKgEgAgOgbQgGADgEAIQgDAHgBAJQABAKADAHQAEAIAGAEQAGADAIAAQANAAAIgJQAHgIAAgPQAAgPgHgIQgIgJgNAAQgHAAgHAFg");
	this.shape_796.setTransform(172.2,143.3);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEADAAAGQAAAGgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_797.setTransform(162.8,141.5);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEgBQgHABgDADQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_798.setTransform(155.9,143.3);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_799.setTransform(144.2,143.3);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#660000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgHAEgEQADgDAHAAQAGAAAEADQADAEAAAGIAAADQAIgIAJgEQAJgEAJAAQAOAAALAGQALAGAGALQAHAMAAAPQAAAMgEAJQgEAJgGAGQgHAHgJAEQgIADgLABQgLgBgIgEQgJgEgHgJIAAAmQAAAQgNAAQgJAAgCgEgAgTgpQgHAHgBAQQABAPAHAIQAJAIALAAQAHAAAGgEQAGgDADgHQAEgHAAgKQAAgKgDgHQgEgHgGgEQgGgEgHABQgLAAgJAIg");
	this.shape_800.setTransform(131.4,145.2);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#660000").s().p("AA4AvQgEgEAAgIIAAgpIgBgNQAAgFgEgDQgEgDgGgBQgGAAgFAEQgFADgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgEgEQgFgEAAgIIAAgnIAAgOQgBgGgDgDQgDgDgIgBQgOAAgEAJQgEAIAAAQIAAAhQAAAIgFAEQgEAEgGAAQgHAAgEgEQgEgEAAgIIAAhGQAAgIAEgDQAEgEAFAAQAHAAADADQAFAEAAAGIAAADQAHgJAIgDQAJgDAKgBQALABAIADQAHAEAEAIQAIgIAIgEQAJgDAKgBQALAAAIAFQAJAEAEAHQAEAHAAAOIAAAwQAAAIgEAEQgEAEgHAAQgHAAgEgEg");
	this.shape_801.setTransform(115,143.3);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEADAAAGQAAAGgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_802.setTransform(102.6,141.5);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhsQAAgHADgDQAEgEAGgBQAGABAEAEQAEADAAAHIAABsQAAAHgEAEQgEAFgGAAQgGAAgDgFg");
	this.shape_803.setTransform(91.4,141.5);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_804.setTransform(82.2,143.3);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAAKAEQALADAHAIQAIAGAEAJQAEAJAAALQAAALgEAJQgEAKgIAHQgHAHgLADQgKAEgNAAQgMAAgLgEgAgOgbQgGADgEAIQgEAHAAAJQAAAKAEAHQAEAIAGAEQAGADAIAAQANAAAIgJQAHgIAAgPQAAgPgHgIQgIgJgNAAQgIAAgGAFg");
	this.shape_805.setTransform(64,143.3);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#660000").s().p("AgJAwIgFgFIgGgMIgbg5IgCgFIgCgEIAAgEIABgFIAFgEQADgCAEAAQAHAAADADQADAFADAIIAWA3IAZg5QADgIADgDQACgDAGAAQAGAAAEADQADADAAAFIAAAEIgCAEIgCAEIgbA6IgDAHIgEAHIgGAEQgDACgFAAQgFAAgEgDg");
	this.shape_806.setTransform(52,143.3);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgEIgKAKQgHAEgGACQgGABgIAAQgLABgIgEQgIgEgFgGQgFgJAAgPIAAgwQAAgHAEgEQAEgEAGAAQAGAAAEAEQAFAEAAAHIAAAnQAAAJABAGQACAFAFAEQAEAEAHgBQAHAAAFgDQAHgEADgGQADgGAAgRIAAgeQAAgHADgEQAEgEAHAAQAGAAAEAEQAEAEAAAHIAABIQAAAGgEAEQgDAEgHAAQgFAAgEgEg");
	this.shape_807.setTransform(39.8,143.3);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgwIgEAAQgGAAgDgCQgEgDAAgEQAAgEAEgCQADgDAHAAIADAAIAAgOIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGAAADADQADACAAAEQAAAGgEABQgFACgIAAIgGAAIAAAtIABAJQAAAEACABQACACAFAAIAHgBIAHAAQADAAADACQADADAAADQAAAGgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_808.setTransform(29.8,141.6);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#660000").s().p("AgOAaQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgDAFgCQALgGAAgJQgGgBgFgCQgFgEAAgHQAAgFAFgFQAFgDAGAAQAFgBAEADQAEADACAEQACAFAAAGQAAAIgEAIQgEAJgHAEQgFAEgFABQgEgBgCgBg");
	this.shape_809.setTransform(17,148.4);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAALAEQAKADAIAIQAHAGAEAJQAEAJAAALQAAALgEAJQgEAKgHAHQgIAHgKADQgLAEgNAAQgMAAgKgEgAgOgbQgGADgEAIQgDAHgBAJQABAKADAHQAEAIAGAEQAGADAIAAQANAAAIgJQAHgIAAgPQAAgPgHgIQgIgJgNAAQgHAAgHAFg");
	this.shape_810.setTransform(7.9,143.3);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEADAAAGQAAAGgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_811.setTransform(-14.1,141.5);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#660000").s().p("AAdAwQgEgCgEgGIgVgaIgUAaIgIAIQgDADgFAAQgFAAgFgDQgDgDAAgEQAAgEAFgIIAagfIgWgbQgHgHAAgFQABgDADgDQADgDAHAAQAFAAADACIAHAIIASAXIASgXIAIgIQADgCAFAAQAGAAADADQAEADAAADIgBAGIgFAGIgXAbIAaAfQAGAJAAADQAAAEgDADQgFADgFAAQgFAAgDgDg");
	this.shape_812.setTransform(-22.6,143.3);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#660000").s().p("AgmA3QgPgOAAgXQAAgMADgIQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAJQAAAJgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEAAADACQADACAAAEQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgIQgHAGgBAMIAzAAQgBgMgHgGQgHgHgLAAQgKAAgHAHgAgTgtQAAgBADgEIAFgIQAEgGADgCQADgCAFAAIAOAAQAGAAAAABIgGAGIgMAKIgHAGQgGADgHAAQgFAAAAgDg");
	this.shape_813.setTransform(-34.5,141.5);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#660000").s().p("AAyBAQgFgEAAgHIAAhcIgYBVIgEAMQgCAEgEADQgEADgHAAQgFAAgDgCQgEgCgCgDIgEgHIgCgIIgZhVIAABcQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhqQAAgIAFgDQAFgDAJAAIAKAAIANABQADABACAEIAFALIAVBJIAXhJIADgLQACgEAFgBIAMgBIAJAAQAKAAAFADQAFADAAAIIAABqQAAAHgEAEQgEAEgGAAQgHAAgDgEg");
	this.shape_814.setTransform(-49.8,141.6);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_815.setTransform(-70.4,143.3);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgDQgFAGgGAEQgGAEgHACQgFACgHAAQgLAAgIgFQgKgDgGgIQgGgGgEgKQgDgKAAgLQAAgWANgNQANgNAWAAQALAAAIADQAJAEAIAIIAAglQAAgIADgDQAEgEAHgBQAGAAAEAEQADAEAAAHIAABtQAAAHgDADQgFAFgFAAQgGAAgEgFgAgNgJQgHAEgDAGQgDAHAAAKQAAALADAGQAEAIAGADQAHAEAGAAQAHAAAHgEQAGgDAEgHQADgHABgLQgBgKgDgHQgEgGgGgEQgHgEgHABQgHAAgGADg");
	this.shape_816.setTransform(-83.8,141.5);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEADAAAGQAAAGgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_817.setTransform(-98.5,141.5);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#660000").s().p("AAaAvQgDgEAAgHIAAgpQAAgMgFgHQgDgGgMgBQgHAAgGAFQgGADgDAIQgCAFAAAOIAAAgQAAAHgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIAEgEQADgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAIgIAIgEQAIgFAMAAQALAAAJAFQAJAEAEAIQADAEABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_818.setTransform(-107.8,143.3);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAGgKAFQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAIgHQAHgGANgDIANgCIASgDIAQgFQAAgKgEgEQgEgEgNgBQgKABgFACQgGACgEAGIgFAHQgBACgGgBQgFABgDgDQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAAOIAAAPIgBANQABAHADAIIACAJQAAAFgEADQgEADgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAGAFADQAEAEAIABQAIAAAIgEQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_819.setTransform(-120.6,143.3);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAAKAEQALADAHAIQAIAGAEAJQAEAJAAALQAAALgEAJQgEAKgIAHQgHAHgLADQgKAEgNAAQgMAAgLgEgAgOgbQgGADgEAIQgDAHAAAJQAAAKADAHQAEAIAGAEQAGADAIAAQANAAAHgJQAIgIAAgPQAAgPgIgIQgHgJgNAAQgHAAgHAFg");
	this.shape_820.setTransform(-133.4,143.3);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgwIgEAAQgGAAgDgCQgEgDAAgEQAAgEAEgCQADgDAHAAIADAAIAAgOIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGAAADADQADACAAAEQAAAGgEABQgFACgIAAIgGAAIAAAtIABAJQAAAEACABQACACAFAAIAHgBIAHAAQADAAADACQADADAAADQAAAGgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_821.setTransform(-143.4,141.6);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#660000").s().p("AAgAvQgEgEgFgGQgKAGgJAFQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAHgHQAIgGANgDIANgCIASgDIARgFQgBgKgEgEQgEgEgMgBQgKABgGACQgFACgEAGIgGAHQgCACgFgBQgFABgDgDQgEgDAAgEQAAgHAGgFQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAOIAAAPIgBANQAAAHADAIIADAJQAAAFgEADQgFADgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAGAEADQAFAEAJABQAHAAAHgEQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_822.setTransform(-153.4,143.3);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhsQAAgHADgDQAEgEAGgBQAGABAEAEQAEADAAAHIAABsQAAAHgEAEQgEAFgGAAQgGAAgDgFg");
	this.shape_823.setTransform(-162.6,141.5);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgwIgEAAQgGAAgDgCQgEgDAAgEQAAgEAEgCQADgDAHAAIADAAIAAgOIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGAAADADQADACAAAEQAAAGgEABQgFACgIAAIgGAAIAAAtIABAJQAAAEACABQACACAFAAIAHgBIAHAAQADAAADACQADADAAADQAAAGgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_824.setTransform(-169,141.6);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAAKAEQALADAHAIQAIAGAEAJQAEAJAAALQAAALgEAJQgEAKgIAHQgHAHgLADQgKAEgNAAQgMAAgKgEgAgOgbQgHADgDAIQgEAHAAAJQAAAKAEAHQADAIAHAEQAGADAIAAQANAAAIgJQAHgIAAgPQAAgPgHgIQgIgJgNAAQgIAAgGAFg");
	this.shape_825.setTransform(-184.9,143.3);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#660000").s().p("AA4AvQgEgEAAgIIAAgpIgBgNQAAgFgEgDQgEgDgGgBQgGAAgFAEQgFADgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgEgEQgFgEAAgIIAAgnIgBgOQAAgGgDgDQgDgDgIgBQgOAAgEAJQgEAIAAAQIAAAhQAAAIgFAEQgEAEgGAAQgHAAgEgEQgEgEAAgIIAAhGQAAgIAEgDQAEgEAFAAQAHAAADADQAFAEAAAGIAAADQAHgJAIgDQAJgDAKgBQALABAIADQAHAEAEAIQAIgIAIgEQAJgDAKgBQALAAAIAFQAJAEAEAHQAEAHAAAOIAAAwQAAAIgEAEQgEAEgHAAQgHAAgEgEg");
	this.shape_826.setTransform(-200.9,143.3);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEADAAAGQAAAGgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_827.setTransform(-213.3,141.5);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgwIgEAAQgGAAgDgCQgEgDAAgEQAAgEAEgCQADgDAHAAIADAAIAAgOIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGAAADADQADACAAAEQAAAGgEABQgFACgIAAIgGAAIAAAtIABAJQAAAEACABQACACAFAAIAHgBIAHAAQADAAADACQADADAAADQAAAGgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_828.setTransform(-219.6,141.6);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhsQAAgHADgDQAEgEAGgBQAGABAEAEQAEADAAAHIAABsQAAAHgEAEQgEAFgGAAQgGAAgDgFg");
	this.shape_829.setTransform(-226.7,141.5);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgEIgLAKQgFAEgHACQgGABgJAAQgKABgIgEQgIgEgEgGQgGgJAAgPIAAgwQAAgHAEgEQAEgEAGAAQAGAAAFAEQADAEAAAHIAAAnQABAJABAGQACAFAEAEQAEAEAIgBQAGAAAHgDQAGgEADgGQADgGgBgRIAAgeQAAgHAFgEQAEgEAGAAQAGAAAEAEQAEAEAAAHIAABIQAAAGgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_830.setTransform(-236,143.3);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhsQAAgHADgDQAEgEAGgBQAGABAEAEQAEADAAAHIAABsQAAAHgEAEQgEAFgGAAQgGAAgDgFg");
	this.shape_831.setTransform(-250.8,141.5);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_832.setTransform(-260,143.3);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_833.setTransform(-278,143.3);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgEIgLAKQgFAEgHACQgGABgJAAQgKABgIgEQgIgEgEgGQgGgJAAgPIAAgwQAAgHAEgEQADgEAHAAQAHAAAEAEQADAEAAAHIAAAnQAAAJACAGQACAFAEAEQAFAEAHgBQAHAAAFgDQAHgEADgGQACgGAAgRIAAgeQAAgHAFgEQAEgEAGAAQAGAAAEAEQAEAEAAAHIAABIQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_834.setTransform(-290.8,143.3);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#660000").s().p("AgwBAQgEgEgBgJIAAhmQAAgGACgDQACgEAFgCQAEgBAGAAIBJAAQAHAAAEACQADADABAFQgBAFgDADQgEADgHAAIg8AAIAAAiIAyAAQAHAAADADQAEACAAAFQAAAEgEADQgDACgHAAIgyAAIAAAsQAAAJgFAEQgEAEgGAAQgIAAgEgEg");
	this.shape_835.setTransform(-303.3,141.6);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#660000").s().p("AgXBQIAEgJIAIgRQAFgLADgNQADgOAAgQQAAgOgDgPQgDgOgFgJIgIgSIgEgIQAAgDAEAAQAHAAAEADQAEACAFAJIAKARQAFAHACAJQADAIACAJQABAJAAAIQAAATgFAQQgGAQgMARQgFAJgEADQgEACgHAAQgBAAgBAAQgBAAAAgBQgBAAAAAAQAAAAAAgBg");
	this.shape_836.setTransform(-81.7,119.7);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#660000").s().p("AgaA4QgLgGgGgOQgDgHgCgJQgBgIAAgKQAAgMABgKQACgKAEgIQAFgNALgFQALgHAPAAQAKAAAHACQAJAEAGAFQAHAFADAJQAIAOAAAYQAAAOgCALQgCAKgFAIQgHAKgLAGQgKAFgNAAQgOAAgMgIgAgRgjQgFAMAAAXQAAAPACALQACAKAFAGQAGAEAHAAQAJABAFgGQAFgFACgLQACgKAAgPQAAgQgCgKQgCgKgFgEQgFgGgJAAQgMAAgFALg");
	this.shape_837.setTransform(-91,118.1);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#660000").s().p("AgiA/QgHAAgEgDQgEgEAAgFQAAgDACgFIAGgIIAYgUIAPgMIAMgIQAFgFADgGQADgFAAgFQAAgGgDgEQgDgEgFgDQgFgCgFABQgNgBgIAKIgDAHIgFAJQgDADgFAAQgFAAgEgDQgDgDAAgFQAAgFADgHQADgGAGgGQAGgFAKgDQAJgDAMAAQAOAAALAEQAHADAFAEQAFAGADAGQADAGAAAGQAAAMgGAIQgGAHgHAGIgVAPQgNALgGAFIgFAGIAzAAQAHAAAEACQAEADAAAFQAAAEgDADQgDADgHAAg");
	this.shape_838.setTransform(-102.7,118);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#660000").s().p("AgdA6QgLgGgFgIQgEgHAAgFQAAgEADgDQADgCAFAAQAIAAAEAIQAEAIAGAEQAHAEAIAAQAHAAAFgEQAHgDACgGQAEgGAAgHQgBgJgDgGQgDgFgGgCQgGgDgFAAQgJAAgDACIgKAFQgIAEgEAAQgFAAgEgCQgDgDAAgDIABgHIAIgoQABgIAFgDQADgDAJAAIAyAAQAPAAAAAKQAAAEgDADQgEADgHAAIgtAAIgGAcQAOgHALAAQAIAAAJADQAIADAGAFQAGAGAEAHQADAHABAIQgBANgGAKQgHAKgLAGQgMAGgPAAQgRAAgLgFg");
	this.shape_839.setTransform(-114.6,118.2);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#660000").s().p("AAMA9QgDgEAAgGIAAhOQgYARgJAAQgEAAgDgCQgDgEAAgDQAAgEADgDIALgFQAMgFAHgFQAGgFAGgIIAHgIQABgBAFAAQAFAAADADQADAEAAAGIAABhQAAARgNAAQgGAAgEgDg");
	this.shape_840.setTransform(-127.8,118.1);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#660000").s().p("AgOALQgIAAgDgEQgEgDAAgEQAAgDAEgDQADgEAIAAIAdAAQAIAAADAEQAEADAAADQAAAEgEADQgDAEgIAAg");
	this.shape_841.setTransform(-135.9,119.7);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#660000").s().p("AgaA5QgLgHgHgOQgGgOAAgTQAAgPAEgNQAEgMAHgJQAHgIAKgFQAKgEAMAAQANAAAJAEQAKAEAFAHQAEAGAAAGQAAAEgDADQgDACgEAAQgEAAgEgCQgDgDgCgEQgCgFgFgDQgFgCgHAAQgEgBgFADQgFADgEAEQgHAJgBAXQAHgGAIgEQAHgDAJgBQAJAAAIADQAIAEAGAFQAGAGADAHQADAHAAAJQAAALgGALQgGAJgMAGQgLAFgOAAQgQAAgMgHgAgIAAQgGACgDAGQgEAFAAAHQAAAMAHAIQAHAHAJAAQAKAAAHgGQAGgIAAgLQAAgIgDgGQgDgFgFgDQgFgCgHAAQgFAAgFACg");
	this.shape_842.setTransform(-145.1,118.1);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#660000").s().p("AgaA5QgLgHgHgOQgGgOAAgTQAAgPAEgNQAEgMAHgJQAHgIAKgFQAKgEAMAAQANAAAJAEQAKAEAFAHQAEAGAAAGQAAAEgDADQgDACgEAAQgEAAgEgCQgDgDgCgEQgCgFgFgDQgFgCgHAAQgEgBgFADQgFADgEAEQgHAJgBAXQAHgGAIgEQAHgDAJgBQAJAAAIADQAIAEAGAFQAGAGADAHQADAHAAAJQAAALgGALQgGAJgMAGQgLAFgOAAQgQAAgMgHgAgIAAQgGACgDAGQgEAFAAAHQAAAMAHAIQAHAHAJAAQAKAAAHgGQAGgIAAgLQAAgIgDgGQgDgFgFgDQgFgCgHAAQgFAAgFACg");
	this.shape_843.setTransform(-157,118.1);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#660000").s().p("AAPA9QgEgDAAgHIAAgPIgwAAQgKAAgEgEQgEgEgBgGIABgDIACgEIADgDIADgFIA0g7IAIgIQADgDAFgBQAPAAgBAPIAABBIAFAAQAHABAFACQAFABAAAHQgBAEgEACQgDADgHAAIgHAAIAAAPQAAAHgCADQgEAEgFAAQgGAAgDgEgAgeAQIApAAIAAgwg");
	this.shape_844.setTransform(-168.9,118);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#660000").s().p("AAMA9QgDgEAAgGIAAhOQgYARgJAAQgEAAgDgCQgDgEAAgDQAAgEADgDIALgFQAMgFAHgFQAGgFAGgIIAHgIQABgBAFAAQAFAAADADQADAEAAAGIAABhQAAARgNAAQgGAAgEgDg");
	this.shape_845.setTransform(-182,118.1);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#660000").s().p("AAMBSQgCgCgEgDIgGgJQgIgLgFgKQgFgLgDgMQgDgLAAgNQABgMACgLQACgLAGgLQAFgLAIgLIAGgJQAEgDACgBIAIgBQAEAAAAADIgEAJIgJASQgDAJgEANQgEAOABAPQgBAQAEAOQAEANADAKIAJASIAEAJQAAACgEAAIgIAAg");
	this.shape_846.setTransform(-190.1,119.7);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#660000").s().p("AAfAsQgEgDgFgHQgKAHgJADQgIAEgLAAQgKgBgIgDQgIgDgEgHQgEgGAAgGQAAgKAHgHQAHgGAMgCIAMgCIARgEIAPgEQAAgJgEgEQgEgEgMAAQgJAAgFACQgFADgEAFIgFAHQgBABgFAAQgFAAgDgCQgDgDAAgEQAAgGAFgGQAFgGAKgDQALgFAOAAQASAAAKAFQAKADAEAIQAEAHAAANIAAAOIAAAMQAAAHADAHIACAJQAAADgEADQgDAEgFAAQgEAAgEgEgAADAFIgOADQgFABgEADQgDACAAAGQAAAFAEAEQAFADAHAAQAHAAAHgCQAHgDADgFQADgGAAgMIAAgDIgRAEg");
	this.shape_847.setTransform(-204.8,119.7);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#660000").s().p("AA1AsQgEgEAAgHIAAgnIgBgMQgBgEgDgDQgDgDgHAAQgFAAgFACQgEADgDAFQgDAGAAAOIAAAfQAAAHgDAEQgFADgGAAQgFAAgEgDQgEgEAAgHIAAgkIAAgOQgBgFgDgDQgDgDgHAAQgNAAgDAIQgFAHAAAOIAAAgQAAAHgDAEQgFADgFAAQgGAAgFgDQgEgEAAgHIAAhCQABgHADgDQADgDAGAAQAGAAADADQAEADAAAGIAAACQAHgHAIgEQAIgDAJAAQAKAAAIADQAGAEAFAHQAHgHAHgEQAIgDAJAAQAMAAAHADQAJAEADAHQADAHAAANIAAAtQAAAHgDAEQgEADgHAAQgGAAgDgDg");
	this.shape_848.setTransform(-219.6,119.7);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#660000").s().p("AAbAsQgEgEgBgGIAAgDQgEAGgGADQgFAEgGACQgFABgJAAQgJAAgHgDQgIgEgFgGQgEgHAAgOIAAguQgBgHAEgDQAEgDAFAAQAHAAADADQAEAEAAAGIAAAlQAAAIACAFQABAGAEADQAFADAHAAQAFAAAGgDQAGgEADgFQACgFAAgQIAAgdQAAgGAEgEQADgDAHAAQAFAAAEADQAEADgBAHIAABDQAAAHgCADQgEADgFAAQgGAAgDgDg");
	this.shape_849.setTransform(-234.5,119.7);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#660000").s().p("AgiAtQgHAAgEgDQgEgDAAgFQAAgDADgDIALgLIAQgPIANgMIAJgKIAHgIIgnAAIgMgBQgFgBAAgGQAAgEAEgCQADgCAGAAIA8AAQAIAAAFACQAEACAAAGIAAAEIgCADIgDADIgFAEIgwAvIA0AAQAGAAADADQADACAAAEQAAAEgDADQgDACgGAAg");
	this.shape_850.setTransform(-245.8,119.7);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgJAEgJQADgJAHgGQAHgHAJgDQAKgDALgBQAQAAALAHQALAFAGAKQAGAIAAAKQAAAIgGADQgGACgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgFIAIgGQACgBAEgBQAEAAACACQADADAAADQAAAEgDAEQgDADgFAFQgGAEgJACQgIACgMABQgYAAgPgNgAgPgYQgGAGgCAMIAwAAQgBgMgHgGQgGgGgKAAQgJAAgHAGg");
	this.shape_851.setTransform(-256.6,119.7);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#660000").s().p("AgjAjQgOgMgBgWQABgNAGgLQAHgMAMgFQALgHAQAAQAKAAAJAEQAJACAGAEQAGAEADAFQADAFAAAEQAAAEgDADQgEADgFAAQgEAAgCgCIgEgEQgGgHgEgDQgGgDgJgBQgKABgHAHQgIAJAAANQAAAGACAGQACAGAEADQADAEAFACQAFACAFAAQAIAAAGgDQAGgEAEgGQACgEADgCQADgDAEAAQAFAAADAEQADADAAAEQAAAEgDAFQgDAFgGAFQgGAEgJACQgJAEgMAAQgXAAgOgNg");
	this.shape_852.setTransform(-275.6,119.7);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#660000").s().p("AAuA8QgDgDgBgHIAAhWIgWBPIgEALQgBAEgEADQgEADgHAAQgEAAgDgCQgEgCgCgDIgDgHIgDgHIgWhPIAABWQgBAHgDADQgEAEgGAAQgFAAgFgEQgDgDAAgHIAAhjQAAgIAFgDQAFgDAIAAIAJAAQAIAAAEACQADABACADIAEALIAUBEIAVhEIAEgLQACgDAEgBQADgCAIAAIAJAAQAIAAAGADQAEADAAAIIAABjQAAAHgDADQgEAEgGAAQgGAAgEgEg");
	this.shape_853.setTransform(-301.9,118.1);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#660000").s().p("AAaAvQgDgEgBgHIAAgpQAAgNgDgGQgFgHgLAAQgHAAgGAFQgHADgDAHQgCAGAAAOIAAAgQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgDQAEgEAGAAQAEAAADABIAFAGQACADAAAEIAAADQAIgJAJgDQAHgFAMAAQALAAAJAFQAJAEAFAHQACAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_854.setTransform(248.4,200.1);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#660000").s().p("AAgAvQgEgEgFgGQgKAGgJAEQgJAEgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgJAHgIQAIgGANgDIAOgCIARgDIARgFQgBgKgEgEQgEgEgNgBQgJABgGACQgFACgEAGIgGAHQgCACgFgBQgFABgDgDQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAAOIAAAOIAAAOQAAAHACAIIADAJQAAAFgEACQgFAEgEAAQgFAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAEAEQAFAFAIAAQAIAAAHgEQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_855.setTransform(200.2,200.1);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#660000").s().p("AgDBEIgKgEIgHgEIgIgIIAAADQAAAHgDAEQgFAEgGgBQgGABgDgEQgEgEAAgHIAAhsQAAgIADgEQAEgDAGAAQAHAAAEADQADAEAAAHIAAAmQAIgIAJgDQAIgEALAAQAOAAAMAGQAKAFAGAMQAGAKAAAPQAAAMgEAKQgCAJgHAGQgGAHgJAFQgJAEgLgBQgHAAgEgBgAgMgJQgHAEgEAGQgDAIgBAKQAAAPAIAIQAIAIAMAAQALAAAHgIQAIgJAAgPQAAgJgDgIQgDgGgGgEQgGgDgIAAQgIAAgFADg");
	this.shape_856.setTransform(187.4,198.3);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgDIgLAJQgFAEgHACQgGABgJAAQgKAAgIgDQgIgEgEgGQgGgJAAgPIAAgwQAAgIAEgDQAEgEAGAAQAGAAAFAEQADADAAAIIAAAnQABAJABAGQACAFAEAEQAEAEAIgBQAGAAAHgDQAGgEADgGQADgFgBgSIAAgeQAAgIAFgDQAEgEAGAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_857.setTransform(173.9,200.1);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#660000").s().p("AgbAvQgKgFgGgFQgFgHAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAFQAEAHAHADQAGAEAKAAQAIAAAFgEQAGgDAAgFQAAgGgGgDQgFgDgNgDQgOgDgKgDQgJgDgFgGQgGgFAAgJQAAgIAFgGQAGgHAJgEQAKgEAOAAQALAAAIACQAKACAFAEQAGADADAEQADAEAAAEQABAFgEACQgEADgFAAQgEAAgEgCIgHgHQgDgEgFgCQgEgCgHAAQgHAAgFADQgGADAAAEQABAEADADIALAEIAQAEQANACAJAEQAIAEAEAFQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgLgEg");
	this.shape_858.setTransform(161.6,200.1);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#660000").s().p("AgaAvQgLgFgGgFQgFgHAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAFQAFAHAGADQAGAEAKAAQAIAAAFgEQAGgDAAgFQAAgGgGgDQgFgDgNgDQgPgDgIgDQgKgDgFgGQgGgFAAgJQAAgIAFgGQAGgHAKgEQAJgEAOAAQALAAAIACQAKACAFAEQAGADADAEQADAEAAAEQAAAFgDACQgEADgGAAQgDAAgEgCIgHgHQgDgEgEgCQgFgCgHAAQgHAAgFADQgGADAAAEQABAEADADIALAEIAQAEQANACAJAEQAIAEAFAFQAEAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgKgEg");
	this.shape_859.setTransform(144.6,200.1);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgDIgLAJQgFAEgHACQgGABgIAAQgLAAgIgDQgIgEgFgGQgFgJAAgPIAAgwQAAgIAEgDQADgEAHAAQAGAAAFAEQADADABAIIAAAnQAAAJABAGQACAFAFAEQADAEAIgBQAGAAAHgDQAGgEADgGQACgFABgSIAAgeQgBgIAEgDQAFgEAGAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgEAEgFAAQgHAAgDgEg");
	this.shape_860.setTransform(132.3,200.1);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#660000").s().p("AgaAvQgLgFgGgFQgFgHAAgGQAAgEADgDQADgDAGAAQAEAAACACIAFAFQAFAHAGADQAGAEAKAAQAIAAAFgEQAGgDAAgFQAAgGgGgDQgGgDgMgDQgPgDgIgDQgKgDgFgGQgGgFAAgJQAAgIAFgGQAGgHAKgEQAJgEAOAAQAKAAAKACQAIACAGAEQAGADADAEQADAEABAEQAAAFgEACQgEADgGAAQgDAAgEgCIgHgHQgDgEgEgCQgFgCgHAAQgHAAgFADQgFADgBAEQAAAEAEADIALAEIAQAEQANACAJAEQAIAEAFAFQAEAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgQAAgKgEg");
	this.shape_861.setTransform(119.9,200.1);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDADQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_862.setTransform(104.8,200.1);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgKQgEgJAAgLQAAgLAEgJQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAIAAALQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgbQgGADgEAIQgDAHgBAJQABAKADAHQAEAIAGADQAGAEAIAAQANAAAIgJQAHgIAAgPQAAgPgHgIQgIgJgNAAQgHAAgHAFg");
	this.shape_863.setTransform(93,200.1);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#660000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgIAEgDQADgEAHABQAFAAAFADQADAEAAAGIAAAEQAIgJAJgEQAIgEAKAAQAOAAALAGQALAGAHALQAGAMAAAPQAAAMgEAJQgEAJgGAGQgHAHgJAEQgIADgLAAQgLAAgIgEQgIgEgIgJIAAAmQAAAQgNAAQgJAAgCgEgAgTgpQgHAHgBAQQABAPAHAIQAJAIAKAAQAIAAAGgEQAGgDADgHQAEgGAAgLQAAgKgDgHQgEgHgGgEQgGgEgIABQgKgBgJAJg");
	this.shape_864.setTransform(80,202);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgKQgEgJAAgLQAAgLAEgJQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAIAAALQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgbQgHADgDAIQgEAHABAJQgBAKAEAHQADAIAHADQAGAEAIAAQANAAAHgJQAIgIAAgPQAAgPgIgIQgHgJgNAAQgIAAgGAFg");
	this.shape_865.setTransform(61.2,200.1);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgGAGgFAEQgGAEgHACQgFABgIAAQgKABgJgEQgIgFgHgHQgGgGgDgKQgEgKAAgLQAAgWAOgNQANgNAUAAQAMAAAJADQAIAEAIAIIAAglQAAgIADgEQAEgDAGAAQAHAAADADQAEAEAAAHIAABtQAAAHgEAEQgDAEgHgBQgFABgEgEgAgNgJQgGAEgDAGQgEAIAAAJQAAALAEAGQADAIAHADQAFAEAHAAQAHAAAHgEQAGgDAEgHQADgHAAgLQAAgJgDgIQgEgGgGgEQgHgEgHABQgHAAgGADg");
	this.shape_866.setTransform(47.6,198.3);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#660000").s().p("AAhAvQgEgEgFgGQgLAGgJAEQgJAEgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgJAHgIQAIgGANgDIAOgCIARgDIARgFQgBgKgEgEQgEgEgNgBQgJABgGACQgFACgFAGIgFAHQgCACgFgBQgFABgDgDQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAIAAAOIAAAOIAAAOQAAAHACAIIADAJQAAAFgEACQgFAEgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAFAEQAFAFAHAAQAIAAAHgEQAIgDADgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_867.setTransform(34.9,200.1);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#660000").s().p("AAaAvQgDgEAAgHIAAgpQgBgNgEgGQgDgHgMAAQgHAAgGAFQgGADgDAHQgCAGAAAOIAAAgQgBAHgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAEAAADABIAFAGQACADAAAEIAAADQAIgJAIgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_868.setTransform(22.1,200.1);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#660000").s().p("AAgAvQgEgEgFgGQgKAGgJAEQgJAEgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgJAHgIQAIgGANgDIANgCIASgDIARgFQgBgKgEgEQgEgEgMgBQgKABgGACQgFACgEAGIgGAHQgCACgFgBQgFABgDgDQgEgDAAgEQAAgHAGgFQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAOIAAAOIgBAOQAAAHADAIIADAJQAAAFgEACQgFAEgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAEAEQAFAFAJAAQAHAAAHgEQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_869.setTransform(-27.9,200.1);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDADQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_870.setTransform(-37.8,200.1);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDADQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_871.setTransform(-72.2,200.1);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADABAAAFQAAADgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_872.setTransform(-83.9,200.1);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgDIgKAJQgHAEgGACQgGABgJAAQgKAAgIgDQgIgEgFgGQgFgJAAgPIAAgwQAAgIAEgDQAEgEAGAAQAHAAADAEQAEADABAIIAAAnQAAAJABAGQACAFAEAEQAFAEAHgBQAHAAAFgDQAHgEADgGQADgFAAgSIAAgeQAAgIADgDQAEgEAHAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgDAEgHAAQgFAAgEgEg");
	this.shape_873.setTransform(-96.7,200.1);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#660000").s().p("AA5AvQgFgEAAgIIAAgpIgBgNQAAgFgEgDQgEgEgGAAQgGAAgFAEQgFACgDAGQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgFgEQgEgEAAgIIAAgnIAAgOQgBgGgDgDQgDgEgIAAQgOAAgEAJQgFAIABAQIAAAhQAAAIgFAEQgEAEgGAAQgHAAgEgEQgEgEAAgIIAAhGQAAgIAEgDQAEgEAFAAQAGAAAEAEQAEADABAGIAAADQAHgJAIgDQAJgDAKgBQALABAHADQAIAEAFAIQAGgIAJgEQAJgDAKgBQALAAAJAFQAIAEAEAHQAEAHAAAOIAAAwQAAAIgEAEQgFAEgGAAQgHAAgDgEg");
	this.shape_874.setTransform(-112.4,200.1);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgKQgEgJAAgLQAAgLAEgJQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAIAAALQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgbQgHADgDAIQgEAHABAJQgBAKAEAHQADAIAHADQAGAEAIAAQANAAAHgJQAIgIAAgPQAAgPgIgIQgHgJgNAAQgIAAgGAFg");
	this.shape_875.setTransform(-133.7,200.1);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#660000").s().p("AgbBCQgMgEgGgFQgGgGAAgHQAAgEADgDQAEgCAFgBQAGABAFAEIAFAFIAFAFIAHACIAKABQAKAAAGgCQAGgEADgFQACgEABgFIAAgSQgGAHgJAFQgJAEgLAAQgOAAgLgGQgKgHgGgLQgGgLAAgPQAAgMAEgIQADgJAHgHQAGgGAJgDQAIgDAKAAQALAAAJAEQAJAEAIAJIAAgEQAAgGAEgEQADgEAGABQAIAAADAEQADAFAAAJIAABIQAAAMgDAJQgDAJgHAGQgHAGgLADQgKACgQAAQgOAAgMgDgAgTgpQgHAHAAAPQAAAQAHAHQAIAHALABQAHAAAHgEQAGgDAEgGQAEgHAAgKQAAgOgIgJQgIgIgMAAQgLgBgIAJg");
	this.shape_876.setTransform(-146.7,202);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADABAAAFQAAADgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_877.setTransform(-159.2,200.1);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#660000").s().p("AgjBEQgKAAgFgEQgEgEAAgIIAAhnQAAgIAEgEQAFgEAGAAQAIAAAEAEQAEAEAAAIIAABhIA+AAQAIAAAEADQAEADAAAFQAAAFgEADQgEADgIAAg");
	this.shape_878.setTransform(-184.4,198.1);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#660000").s().p("AgKAKQgFgEAAgGQAAgFAFgDQAEgFAGAAQAGAAAFAFQAFADAAAFQAAAGgFAEQgFAEgGAAQgGAAgEgEg");
	this.shape_879.setTransform(-200.2,203.8);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#660000").s().p("AAbAvQgFgEAAgHIAAgpQAAgNgDgGQgFgHgLAAQgHAAgGAFQgGADgEAHQgCAGAAAOIAAAgQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgDQAEgEAGAAQAEAAADABIAFAGQACADAAAEIAAADQAHgJAKgDQAHgFAMAAQALAAAJAFQAJAEAFAHQACAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_880.setTransform(-210,200.1);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgDIgLAJQgFAEgHACQgGABgJAAQgKAAgIgDQgIgEgEgGQgGgJAAgPIAAgwQAAgIAEgDQADgEAHAAQAHAAAEAEQADADAAAIIAAAnQAAAJACAGQACAFAEAEQAFAEAHgBQAHAAAFgDQAHgEADgGQACgFAAgSIAAgeQAAgIAFgDQAEgEAGAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_881.setTransform(-254.4,200.1);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgKQgEgJAAgLQAAgLAEgJQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAAKAEQALADAHAIQAIAGAEAKQAEAIAAALQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgbQgGADgEAIQgEAHAAAJQAAAKAEAHQAEAIAGADQAGAEAIAAQANAAAIgJQAHgIAAgPQAAgPgHgIQgIgJgNAAQgIAAgGAFg");
	this.shape_882.setTransform(-273.1,200.1);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADABAAAFQAAADgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_883.setTransform(-296.8,200.1);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDADQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_884.setTransform(-306.7,200.1);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAHgKADQgIAEgMAAQgLAAgJgEQgIgEgFgGQgEgHAAgIQAAgJAHgIQAIgGANgDIANgCIASgDIARgFQgBgJgEgFQgEgEgMgBQgKABgGACQgFACgEAGIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAGgFQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHADAIIADAJQAAAFgEACQgFAEgFAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAGAFAIAAQAHgBAHgDQAIgDADgFQADgGABgNIAAgEIgTAFg");
	this.shape_885.setTransform(175.2,175.9);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAHgJADQgJAEgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgJAIgIQAHgGANgDIAOgCIARgDIARgFQgBgJgEgFQgEgEgNgBQgKABgFACQgGACgEAGIgFAHQgBABgGAAQgFAAgDgCQgEgDAAgEQAAgHAFgFQAGgHALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAJQAAAFgEACQgFAEgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAFAEQAFAFAHAAQAIgBAHgDQAHgDAEgFQAEgGAAgNIAAgEIgSAFg");
	this.shape_886.setTransform(119.9,175.9);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#660000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgIADgDQAEgEAGABQAHAAADADQAEAEAAAGIAAAEQAIgJAJgEQAJgEAKAAQANAAALAGQALAGAGALQAHAMAAAPQAAAMgDAJQgFAJgGAHQgGAGgJAEQgJADgKAAQgLAAgJgEQgJgEgHgJIAAAmQAAAQgOAAQgHABgDgFgAgSgpQgJAHABAQQgBAQAJAGQAHAJALAAQAIAAAGgDQAGgFAEgGQADgGAAgLQAAgKgDgHQgDgHgGgEQgHgDgIAAQgKgBgIAJg");
	this.shape_887.setTransform(107.1,177.8);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgvIgEAAQgGAAgDgDQgEgCAAgEQAAgEAEgDQADgCAHAAIADAAIAAgPIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGAAADACQADADAAAEQAAAEgEACQgFACgIABIgGAAIAAAtIABAJQAAACACACQACACAFAAIAHgBIAHAAQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_888.setTransform(84.2,174.2);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#660000").s().p("AA5AvQgFgEAAgIIAAgpIgBgNQgBgEgDgEQgDgEgIAAQgFABgFADQgFACgDAGQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgFgEQgDgEAAgIIAAgnIgBgOQgBgFgDgEQgDgEgIAAQgOAAgEAJQgFAJABAOIAAAiQgBAIgEAEQgDAEgHAAQgGAAgEgEQgFgEAAgIIAAhGQAAgIAEgDQADgEAHAAQAGAAAEAEQADADAAAGIAAACQAIgIAIgDQAJgEAKAAQALAAAHAEQAHAEAGAHQAGgHAJgEQAJgEAJAAQAMAAAJAFQAIADAEAIQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_889.setTransform(30.5,175.9);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDACQgDADgDAGIgDANIgBATIAAAVQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_890.setTransform(11.2,175.9);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#660000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgIADgDQAFgEAGABQAFAAAFADQADAEAAAGIAAAEQAIgJAJgEQAIgEAKAAQAOAAALAGQALAGAHALQAGAMAAAPQAAAMgEAJQgDAJgHAHQgGAGgKAEQgIADgLAAQgLAAgIgEQgIgEgIgJIAAAmQAAAQgNAAQgJABgCgFgAgTgpQgHAHgBAQQABAQAHAGQAJAJAKAAQAIAAAGgDQAGgFAEgGQADgGAAgLQAAgKgDgHQgEgHgFgEQgHgDgIAAQgKgBgJAJg");
	this.shape_891.setTransform(-0.6,177.8);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAHgKADQgIAEgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgJAIgIQAHgGANgDIAOgCIARgDIAQgFQAAgJgEgFQgEgEgNgBQgKABgFACQgFACgFAGIgFAHQgBABgGAAQgFAAgDgCQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHADAIIACAJQAAAFgEACQgEAEgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAFAEQAFAFAHAAQAIgBAIgDQAGgDAEgFQADgGAAgNIAAgEIgSAFg");
	this.shape_892.setTransform(-19.3,175.9);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAHgKADQgIAEgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgJAIgIQAHgGANgDIAOgCIARgDIAQgFQAAgJgEgFQgEgEgNgBQgKABgFACQgFACgFAGIgFAHQgBABgGAAQgFAAgDgCQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHADAIIACAJQAAAFgEACQgEAEgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAFAEQAFAFAHAAQAIgBAIgDQAGgDAEgFQADgGAAgNIAAgEIgSAFg");
	this.shape_893.setTransform(-43.1,175.9);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgvIgEAAQgGAAgDgDQgEgCAAgEQAAgEAEgDQADgCAHAAIADAAIAAgPIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGAAADACQADADAAAEQAAAEgEACQgFACgIABIgGAAIAAAtIABAJQAAACACACQACACAFAAIAHgBIAHAAQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_894.setTransform(-52.9,174.2);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAHgKADQgIAEgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgJAIgIQAHgGANgDIAOgCIARgDIAQgFQAAgJgEgFQgEgEgNgBQgKABgFACQgFACgFAGIgFAHQgBABgGAAQgFAAgDgCQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHADAIIACAJQAAAFgEACQgEAEgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAFAEQAFAFAHAAQAIgBAIgDQAGgDAEgFQADgGAAgNIAAgEIgSAFg");
	this.shape_895.setTransform(-62.9,175.9);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#660000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgIADgDQAFgEAFABQAHAAADADQAEAEAAAGIAAAEQAIgJAJgEQAJgEAKAAQANAAALAGQALAGAGALQAHAMAAAPQAAAMgDAJQgFAJgGAHQgHAGgIAEQgJADgKAAQgLAAgJgEQgIgEgIgJIAAAmQAAAQgOAAQgHABgDgFgAgSgpQgJAHABAQQgBAQAJAGQAHAJAMAAQAHAAAGgDQAGgFADgGQAEgGAAgLQAAgKgDgHQgDgHgHgEQgGgDgHAAQgLgBgIAJg");
	this.shape_896.setTransform(-75.7,177.8);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#660000").s().p("AguBDQgKAAgFgEQgFgEAAgHIAAgEIADgEIAEgDIAEgGIBOhRIhDAAQgHAAgEgCQgDgDAAgFQAAgFADgDQAEgCAHAAIBWAAQARAAAAANQAAAHgCAEIgMANIhJBMIBRAAQAHAAADACQAEADAAAFQAAAFgEACQgDADgHAAg");
	this.shape_897.setTransform(-102.2,174.1);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#660000").s().p("AgvBDQgGgDAAgGQAAgEADgDQADgBAGgBIAEABIAFAAQAFABADgCQACgBADgEIAFgJIADgFIgkhNQgDgGAAgEIACgGQACgCADgCQADgBAEAAQAGgBADAEQAEADACAHIAXA8IAXg3IAFgLQACgEADgCQACgCAFABIAGABQADACACACIABAFIgBAGIgDAGIglBVQgFALgEAGQgEAHgHADQgIAEgNgBQgNABgGgDg");
	this.shape_898.setTransform(-120.5,177.8);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#660000").s().p("AAgAvQgEgEgFgGQgKAHgJADQgJAEgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgJAHgIQAIgGANgDIAOgCIARgDIARgFQgBgJgEgFQgEgEgNgBQgJABgGACQgFACgEAGIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAJQAAAFgEACQgFAEgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAEAEQAFAFAIAAQAIgBAHgDQAIgDADgFQADgGABgNIAAgEIgSAFg");
	this.shape_899.setTransform(-137.8,175.9);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_900.setTransform(-158.6,174.1);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#660000").s().p("AgKBDQgEgCgDgEIgFgIIgDgJIglhWIgCgFIgCgEIAAgFQAAgFAEgEQAEgDAHAAQAIgBADAFQADAEAEAKIAiBZIAihaIAFgKQABgDADgCQADgCAGAAQAEAAADABIAFAFQACADAAADIAAAEIgCAEIgCAFIglBXIgEAJIgFAIQgCAEgEACQgFADgGgBQgFABgFgDg");
	this.shape_901.setTransform(-168.6,174.1);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDACQgDADgDAGIgDANIgBATIAAAVQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_902.setTransform(-185.3,175.9);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgbQgHADgDAHQgEAIABAJQgBAKAEAHQADAIAHADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgIAAgGAFg");
	this.shape_903.setTransform(-197.1,175.9);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#660000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgIADgDQAFgEAFABQAHAAADADQAEAEAAAGIAAAEQAJgJAIgEQAJgEAKAAQANAAALAGQALAGAHALQAGAMAAAPQAAAMgDAJQgEAJgHAHQgGAGgKAEQgIADgKAAQgLAAgJgEQgJgEgHgJIAAAmQAAAQgOAAQgHABgDgFgAgSgpQgJAHAAAQQAAAQAJAGQAHAJALAAQAIAAAGgDQAGgFAEgGQADgGAAgLQAAgKgDgHQgEgHgFgEQgHgDgIAAQgKgBgIAJg");
	this.shape_904.setTransform(-210.1,177.8);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALADAHAIQAIAGAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgbQgGADgEAHQgEAIAAAJQAAAKAEAHQAEAIAGADQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgPgHgIQgIgJgNAAQgIAAgGAFg");
	this.shape_905.setTransform(-228.9,175.9);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAHgKADQgIAEgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgJAIgIQAHgGANgDIANgCIASgDIAQgFQAAgJgEgFQgEgEgNgBQgKABgFACQgGACgEAGIgFAHQgBABgGAAQgFAAgDgCQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAAPIAAANIgBAOQABAHADAIIACAJQAAAFgEACQgEAEgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAFAEQAEAFAIAAQAIgBAIgDQAGgDAEgFQAEgGgBgNIAAgEIgSAFg");
	this.shape_906.setTransform(-255.2,175.9);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgGAHgFADQgGAEgGACQgGABgIAAQgKAAgJgDQgJgFgGgHQgGgGgEgKQgDgKAAgLQAAgWANgNQAOgNAUAAQAMAAAIADQAJAFAIAHIAAglQAAgIAEgEQADgDAHAAQAGgBAEAEQADADAAAIIAABtQAAAHgDAEQgEADgGAAQgGAAgEgDgAgNgJQgGAEgEAHQgDAHAAAJQAAALADAGQAEAHAHAFQAFADAHAAQAIAAAGgDQAGgEAEgHQADgHAAgLQAAgJgDgIQgEgGgGgEQgGgDgIAAQgHAAgGADg");
	this.shape_907.setTransform(-268.6,174.1);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgDIgKAJQgHAEgGACQgGACgIAAQgLAAgIgEQgIgEgFgGQgFgIAAgQIAAgwQAAgIAEgDQADgEAHAAQAGAAAEAEQAFADAAAIIAAAnQgBAJACAFQACAGAFAEQAEADAHAAQAHAAAFgEQAHgDADgGQACgFABgSIAAgeQAAgIADgDQAFgEAGAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgDAEgHAAQgGAAgDgEg");
	this.shape_908.setTransform(-281.4,175.9);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#660000").s().p("AgvBDQgGgDAAgGQAAgEADgDQADgBAGgBIAEABIAFAAQAFABADgCQACgBADgEIAFgJIADgFIgkhNQgDgGAAgEIACgGQACgCADgCQADgBAEAAQAGgBADAEQAEADACAHIAXA8IAXg3IAFgLQACgEADgCQACgCAFABIAGABQADACACACIABAFIgBAGIgDAGIglBVQgFALgEAGQgEAHgHADQgIAEgNgBQgNABgGgDg");
	this.shape_909.setTransform(-294,177.8);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAHgKADQgIAEgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgJAIgIQAHgGANgDIANgCIASgDIAQgFQAAgJgEgFQgEgEgMgBQgLABgFACQgGACgEAGIgFAHQgBABgGAAQgFAAgDgCQgEgDAAgEQAAgHAGgFQAFgHALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHAEAIIACAJQAAAFgEACQgEAEgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAFAFAJAAQAHgBAIgDQAGgDAEgFQAEgGgBgNIAAgEIgSAFg");
	this.shape_910.setTransform(-305.7,175.9);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAHgKAEQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAHgHQAIgGANgDIANgCIASgEIAQgDQAAgLgEgEQgEgEgMAAQgKgBgGADQgGACgDAGIgGAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAGgGQAFgHALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHAEAIIACAJQAAAEgEAEQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAEAEQAGADAIAAQAHAAAIgDQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_911.setTransform(245.5,151.8);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#660000").s().p("AAaAvQgDgEgBgHIAAgpQAAgMgDgHQgFgGgLgBQgHAAgGAFQgHADgDAIQgCAFAAAOIAAAgQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgEQAEgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAIgIAJgFQAHgEAMAAQALAAAJAEQAJAFAFAIQACAEABAGIABANIAAAuQAAAHgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_912.setTransform(232.7,151.8);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#660000").s().p("AgOAaQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgDAFgDQALgGAAgIQgGgBgFgCQgFgEAAgHQAAgGAFgEQAFgDAGAAQAFAAAEACQAEADACAEQACAFAAAGQAAAIgEAJQgEAHgHAFQgFAEgFABQgEgBgCgBg");
	this.shape_913.setTransform(191.9,156.8);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#660000").s().p("AglAwQgIAAgEgCQgEgEAAgFQAAgEADgCIAMgMIARgRIAOgNIAKgLIAHgIIgpAAQgJABgFgCQgEgCAAgFQAAgFADgCQAEgCAGgBIBBAAQAJABAFACQAEACAAAGIgBAFIgCADIgDADIgFAFIgzAyIA3AAQAHAAADADQAEADAAAEQAAAEgEADQgDACgHAAg");
	this.shape_914.setTransform(182.9,151.8);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#660000").s().p("AAgAvQgEgEgFgGQgKAHgJAEQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAHgHQAIgGANgDIANgCIASgEIARgDQgBgLgEgEQgEgEgMAAQgKgBgGADQgFACgEAGIgGAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAGgGQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHADAIIADAJQAAAEgEAEQgFADgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAEAEQAFADAJAAQAHAAAHgDQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_915.setTransform(171,151.8);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#660000").s().p("AgtBDQgJAAgEgCQgEgCgBgEQgCgFAAgGIAAhiQAAgIAFgEQAEgEAKAAIApAAQAPAAALADQALACAKAHQAYASAAAkQAAAMgDAJQgCALgFAHQgFAIgIAHQgGAFgIADQgHADgIABIgTABgAgiAtIAYAAIALAAIAJgCIAIgEQAQgMAAgbQAAgUgHgJQgHgLgKgCQgKgCgNgBIgVAAg");
	this.shape_916.setTransform(151.2,149.9);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAAKAEQALADAHAIQAIAGAEAJQAEAJAAALQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgLgEgAgOgcQgGAFgEAHQgDAHAAAJQAAAKADAHQAEAHAGAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNgBQgHAAgHAEg");
	this.shape_917.setTransform(131.2,151.8);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#660000").s().p("AgPBBQgEgEAAgHIAAhBIgIAAQgHAAgDgDQgEgCAAgEQAAgJAPAAIAHAAIAAgHQAAgMADgHQADgHAJgDQAHgEAOAAQAZAAAAALQAAADgDADQgCACgEAAIgGAAIgHgBQgHAAgDAFQgCADAAAIIAAAGIAHAAQARAAAAAJQAAAFgFADQgEABgIAAIgHAAIAABBQAAAHgEAEQgEAFgFAAQgGAAgEgFg");
	this.shape_918.setTransform(100.2,149.9);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAAKAEQALADAHAIQAIAGAEAJQAEAJAAALQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgLgEgAgOgcQgHAFgDAHQgEAHABAJQgBAKAEAHQADAHAHAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNgBQgHAAgHAEg");
	this.shape_919.setTransform(80.4,151.8);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#660000").s().p("Ag2BAQgEgEAAgIIAAhnQABgJAEgEQAEgDALAAIAnAAQARAAAKACQAKACAGAGQAIAFADAIQADAHAAAKQAAAUgOAKQgPAKgcAAIgcAAIAAAmQABAJgFAEQgEAEgHAAQgHAAgFgEgAgbgGIAWAAQAKAAAHgCQAHgCAEgFQAEgEAAgIQAAgJgGgFQgHgGgTAAIgWAAg");
	this.shape_920.setTransform(68,150);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#660000").s().p("AAbAvQgEgEgBgHIAAgpQAAgMgEgHQgDgGgMgBQgHAAgGAFQgGADgDAIQgCAFgBAOIAAAgQAAAHgDAEQgEAEgHAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIAEgEQADgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAHgIAJgFQAIgEAMAAQALAAAJAEQAJAFAEAIQADAEABAGIABANIAAAuQAAAHgEAEQgEAEgGAAQgHAAgDgEg");
	this.shape_921.setTransform(10.3,151.8);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAHgKAEQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAHgHQAIgGANgDIANgCIASgEIAQgDQAAgLgEgEQgEgEgMAAQgKgBgGADQgGACgDAGIgGAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAGgGQAFgHALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHAEAIIACAJQAAAEgEAEQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAEAEQAGADAIAAQAHAAAIgDQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_922.setTransform(-2.5,151.8);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAAKAEQALADAHAIQAIAGAEAJQAEAJAAALQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgLgEgAgOgcQgHAFgDAHQgEAHABAJQgBAKAEAHQADAHAHAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNgBQgHAAgHAEg");
	this.shape_923.setTransform(-32.5,151.8);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#660000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgHADgEQAEgEAGAAQAHABADAEQAEADAAAHIAAACQAIgIAJgEQAJgEAKAAQANAAALAGQALAGAGALQAHALAAAQQAAAMgDAIQgFAKgGAGQgGAHgJAEQgJADgKABQgLgBgJgEQgJgFgHgHIAAAlQAAARgOAAQgHgBgDgEgAgSgqQgJAJABAPQgBAPAJAIQAHAIALAAQAIAAAGgEQAGgDAEgHQADgHAAgKQAAgKgDgHQgDgHgGgEQgHgDgIAAQgKAAgIAHg");
	this.shape_924.setTransform(-45.5,153.6);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#660000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgCgEgDgEQgDgDgIgBQgFAAgFADQgFAEgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgGAAgEgEQgDgEAAgIIAAgnIgCgPQAAgFgDgDQgEgDgGgBQgOAAgFAJQgFAIAAAQIAAAhQAAAIgDAEQgEAEgHAAQgGAAgEgEQgFgEAAgIIAAhGQAAgIAEgDQADgEAHAAQAFAAAFADQADAEAAAGIAAADQAIgJAJgDQAIgDAKgBQALABAHADQAIAEAEAIQAIgIAIgEQAIgDAKgBQAMAAAIAEQAJAFAEAHQAEAGAAAPIAAAwQAAAIgEAEQgEAEgHAAQgGAAgFgEg");
	this.shape_925.setTransform(-61.9,151.8);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_926.setTransform(-115.4,150);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#660000").s().p("AgbAvQgKgFgGgFQgFgHAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAFQAEAHAHADQAGADAKAAQAIAAAFgDQAGgDAAgFQAAgGgGgDQgFgDgNgDQgOgDgKgDQgJgDgFgGQgGgGAAgIQAAgHAFgHQAGgHAJgEQAKgEAOAAQALAAAIACQAKACAFAEQAGADADAEQADAEAAAEQABAFgEACQgEADgFAAQgEAAgEgDIgHgGQgDgDgFgDQgEgCgHAAQgHAAgFADQgGADAAAEQABAEADADIALAEIAQAEQANACAJAEQAIAEAEAFQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgLgEg");
	this.shape_927.setTransform(-124.2,151.8);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAAKAEQALADAHAIQAIAGAEAJQAEAJAAALQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgKgEgAgOgcQgHAFgDAHQgDAHgBAJQABAKADAHQADAHAHAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNgBQgHAAgHAEg");
	this.shape_928.setTransform(-136.4,151.8);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#660000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgHAEgEQADgEAHAAQAGABAEAEQADADAAAHIAAACQAIgIAJgEQAJgEAJAAQAOAAALAGQALAGAGALQAHALAAAQQAAAMgEAIQgEAKgGAGQgHAHgJAEQgIADgLABQgLgBgIgEQgJgFgHgHIAAAlQAAARgNAAQgJgBgCgEgAgTgqQgHAJgBAPQABAPAHAIQAJAIALAAQAHAAAGgEQAGgDADgHQAEgHAAgKQAAgKgDgHQgEgHgGgEQgGgDgHAAQgLAAgJAHg");
	this.shape_929.setTransform(-149.4,153.6);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAAKAEQALADAHAIQAIAGAEAJQAEAJAAALQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgLgEgAgOgcQgGAFgEAHQgEAHAAAJQAAAKAEAHQAEAHAGAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNgBQgIAAgGAEg");
	this.shape_930.setTransform(-162.8,151.8);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_931.setTransform(-218.6,150);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#660000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgHADgEQAFgEAFAAQAHABADAEQAEADAAAHIAAACQAIgIAJgEQAJgEAKAAQANAAALAGQALAGAGALQAHALAAAQQAAAMgDAIQgFAKgGAGQgHAHgIAEQgJADgKABQgLgBgJgEQgIgFgIgHIAAAlQAAARgOAAQgHgBgDgEgAgSgqQgJAJABAPQgBAPAJAIQAHAIAMAAQAHAAAGgEQAGgDADgHQAEgHAAgKQAAgKgDgHQgDgHgHgEQgGgDgHAAQgLAAgIAHg");
	this.shape_932.setTransform(-237.3,153.6);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgEIgKAKQgHAEgGACQgGACgIgBQgLABgIgEQgIgEgFgGQgFgJAAgPIAAgwQAAgHAEgEQADgEAHAAQAGAAAEAEQAFAEAAAHIAAAnQgBAJACAGQACAFAFAEQADADAIAAQAGAAAHgDQAGgEADgGQACgGABgRIAAgeQAAgHADgEQAFgEAGAAQAGAAAEAEQAEAEAAAHIAABIQAAAGgEAEQgDAEgGAAQgHAAgDgEg");
	this.shape_933.setTransform(-292.6,151.8);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#660000").s().p("AgwBAQgFgEABgJIAAhmQAAgGACgDQACgEAEgCQAEgBAHAAIBIAAQAHAAAEACQADADAAAFQAAAFgDADQgEADgHAAIg8AAIAAAiIAyAAQAHAAAEADQADACAAAFQAAAEgDADQgEACgHAAIgyAAIAAAsQAAAJgEAEQgFAEgHAAQgGAAgFgEg");
	this.shape_934.setTransform(-305.1,150);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#660000").s().p("AgZBVIAEgJIAJgTQAGgLADgPQADgPAAgQQAAgQgDgPQgEgPgFgLIgJgTIgEgJQAAgCAFAAQAHAAAFACQADADAHAKIAKASQAFAIADAJIAEASQACAJAAAKQAAAUgGASQgGAQgMATQgHAKgDACQgFADgHAAQgFAAAAgDg");
	this.shape_935.setTransform(17.8,127.6);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#660000").s().p("AgXBBQgKgEgHgGQgGgGgDgGQgEgHAAgEQAAgFAEgDQAEgEAGAAIAGACIADADQAGANAGAGQAGAHALAAQAGAAAGgDQAGgDAEgGQAEgFAAgHQAAgLgHgGQgHgGgLAAIgGAAIgGABQgFAAgEgDQgDgCAAgEQAAgEAEgDQAEgDAHAAIAFAAQAIAAAHgFQAHgFAAgJQAAgHgFgFQgGgFgIAAQgHAAgEABQgEACgDADIgEAGIgEAIIgEADIgGABQgEAAgEgDQgDgDAAgFQAAgFADgFQADgFAHgFQAGgFAJgDQAKgDALAAQAKAAAIADQAIACAHAFQAGAEADAGQADAGAAAHQAAAKgEAGQgFAHgJAGQAJAEAFAEQAGAFADAGQADAGAAAHQAAAIgEAIQgEAHgIAHQgHAGgKADQgKAEgMAAQgMAAgKgEg");
	this.shape_936.setTransform(7.9,125.8);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#660000").s().p("AANBBQgEgEAAgHIAAhTQgZASgKAAQgEAAgDgDQgEgDAAgEQAAgFAEgCIALgFQANgGAIgFQAGgGAGgHIAIgJQACgCAFAAQAFAAADAEQAEAEAAAGIAABoQAAATgPAAQgGAAgEgEg");
	this.shape_937.setTransform(-6.1,125.8);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#660000").s().p("AgbBAQgKgEgGgHQgFgHAAgGQAAgEADgDQAEgDAFAAQAEAAAEACQAEACABAFQADAFAFAEQAFADAHAAQAFAAAGgDQAFgCAEgFQAHgKACgZQgHAIgJADQgIADgKABQgKgBgIgCQgJgEgGgGQgGgGgDgHQgEgIAAgJQAAgJAEgJQAEgIAHgGQAHgHAJgDQAKgDAMgBQAMABALAEQALAEAHAIQAHAJAEAMQAEANAAAPQAAAQgEAOQgEAOgIAIQgIAKgLAEQgLAFgNgBQgNABgKgFgAgTgqQgHAHAAAMQAAANAHAHQAHAGAKAAQAGAAAGgCQAGgCAEgGQADgGAAgIQAAgGgCgFQgCgGgDgEIgIgGQgFgCgFAAQgKABgHAHg");
	this.shape_938.setTransform(-17.7,125.8);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#660000").s().p("AANBBQgEgEAAgHIAAhTQgZASgKAAQgEAAgDgDQgEgDAAgEQAAgFAEgCIALgFQANgGAIgFQAGgGAGgHIAIgJQACgCAFAAQAFAAADAEQAEAEAAAGIAABoQAAATgPAAQgGAAgEgEg");
	this.shape_939.setTransform(-31.4,125.8);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#660000").s().p("AgQALQgHAAgEgDQgEgDAAgFQAAgEAEgDQAEgDAHAAIAhAAQAHAAAEADQAEADAAAEQAAAFgEADQgEADgHAAg");
	this.shape_940.setTransform(-40.1,127.5);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#660000").s().p("AgXBBQgKgEgHgGQgGgGgDgGQgEgHAAgEQAAgFAEgDQAEgEAGAAIAGACIADADQAGANAGAGQAGAHALAAQAGAAAGgDQAGgDAEgGQAEgFAAgHQAAgLgHgGQgHgGgLAAIgGAAIgGABQgFAAgEgDQgDgCAAgEQAAgEAEgDQAEgDAHAAIAFAAQAIAAAHgFQAHgFAAgJQAAgHgFgFQgGgFgIAAQgHAAgEABIgHAFIgEAGIgEAIIgEADIgGABQgEAAgEgDQgDgDAAgFQAAgFADgFQADgFAHgFQAGgFAJgDQAKgDALAAQAKAAAIADQAIACAHAFQAGAEADAGQADAGAAAHQAAAKgEAGQgFAHgJAGQAJAEAFAEQAGAFADAGQADAGAAAHQAAAIgEAIQgEAHgIAHQgHAGgKADQgKAEgMAAQgMAAgKgEg");
	this.shape_941.setTransform(-49.9,125.8);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#660000").s().p("AgaBAQgEgEAAgIQAAgGADgKIAJgYQAHgNAKgPQAIgPANgOIg3AAQgJAAgEgDQgEgDAAgGQAAgGAEgCQAFgCAIAAIBFAAQAKAAAFADQAEADAAAGQAAAEgFAGIgMAOQgHAIgHALQgHAMgGAPIgEAMIgCAMIgCAMQgCAJgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_942.setTransform(-62.1,125.9);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#660000").s().p("AgdBAQgLgGgHgKQgGgJgBgLQAAgZAbgIQgVgJAAgSQAAgKAFgIQAHgIAKgFQAMgEAOgBQALABAKACQAJADAHAFQAGAFADAHQADAFAAAIQAAAIgFAIQgGAGgKAFQAJADAGAEQAFAFAEAGQACAHAAAIQAAALgFAJQgHAKgMAGQgNAEgRAAQgQAAgNgEgAgSAKQgGAGgBALQAAAHAEAGQADAFAGADQAGADAGAAQAHAAAHgDQAGgDADgGQADgFAAgHQAAgHgDgGQgDgFgHgDQgGgDgHAAQgKAAgIAHgAgPgtQgGAGAAAIQAAAHAGAGQAGAFAJAAQAFAAAEgCQAEgBADgCQADgCACgEQABgDAAgFQAAgEgDgFQgCgFgFgCQgGgCgGAAQgJAAgGAFg");
	this.shape_943.setTransform(-75.3,125.8);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#660000").s().p("AANBBQgEgEAAgHIAAhTQgZASgKAAQgEAAgDgDQgEgDAAgEQAAgFAEgCIALgFQANgGAIgFQAGgGAGgHIAIgJQACgCAFAAQAFAAADAEQAEAEAAAGIAABoQAAATgPAAQgGAAgEgEg");
	this.shape_944.setTransform(-89.2,125.8);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#660000").s().p("AANBXIgGgEIgIgKQgHgMgGgMQgFgLgDgMQgDgMAAgOQAAgNACgMQADgMAGgMQAGgMAHgLIAIgKQADgDADgBIAIgBQAFAAAAACIgFAKIgJATQgEAKgEAPQgDAPAAAQQAAAQADAPQAEAPAEAKIAJAUIAFAJQAAADgFAAIgIgBg");
	this.shape_945.setTransform(-98,127.6);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgDQgGAGgFAEQgGAEgGACQgGACgIAAQgKAAgIgFQgKgDgGgIQgGgGgEgKQgDgKAAgLQAAgWANgNQANgNAVAAQAMAAAIADQAJAEAIAIIAAglQAAgIAEgDQADgEAHgBQAGAAAEAEQADAEAAAHIAABtQAAAHgDADQgFAFgFAAQgGAAgEgFgAgNgJQgGAEgEAGQgDAHAAAKQAAALADAGQAEAIAGADQAHAEAGAAQAIAAAGgEQAGgDAEgHQADgHAAgLQAAgKgDgHQgEgGgGgEQgGgEgIABQgHAAgGADg");
	this.shape_946.setTransform(-148.5,125.7);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAGgKAFQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAIgHQAHgGANgDIANgCIASgDIAQgFQAAgKgEgEQgEgEgMgBQgLABgFACQgGACgEAGIgFAHQgBACgGgBQgFABgDgDQgEgDAAgEQAAgHAGgFQAFgHALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAOIAAAPIgBANQAAAHAEAIIACAJQAAAFgEADQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAGAEADQAFAEAJABQAHAAAIgEQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_947.setTransform(-161.2,127.6);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#660000").s().p("AAxBAQgDgEAAgHIAAhcIgZBVIgEAMQgCAEgEADQgEADgHAAQgEAAgEgCQgEgCgCgDIgDgHIgDgIIgYhVIAABcQAAAHgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgHIAAhqQAAgIAFgDQAFgDAKAAIAJAAIAMABQAFABACAEIADALIAWBJIAWhJIAFgLQABgEAEgBIANgBIAKAAQAJAAAFADQAFADAAAIIAABqQAAAHgEAEQgEAEgHAAQgFAAgFgEg");
	this.shape_948.setTransform(-176.5,125.8);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#660000").s().p("AgKAKQgFgDAAgHQAAgEAFgEQAEgFAGAAQAGAAAFAFQAFADAAAFQAAAHgFADQgFAEgGAAQgGAAgEgEg");
	this.shape_949.setTransform(-194.2,131.3);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#660000").s().p("AgKBBQgEgEgBgJIAAhoQABgJAEgDQAEgEAGgBQAHABAEAEQAEADAAAJIAABoQAAAJgEAEQgEAEgHABQgGgBgEgEg");
	this.shape_950.setTransform(-200.9,125.7);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAAKAEQALADAHAIQAIAGAEAJQAEAJAAALQAAALgEAJQgEAKgIAHQgHAHgLADQgKAEgNAAQgMAAgKgEgAgOgbQgHADgDAIQgDAHgBAJQABAKADAHQADAIAHAEQAGADAIAAQANAAAIgJQAHgIAAgPQAAgPgHgIQgIgJgNAAQgHAAgHAFg");
	this.shape_951.setTransform(-216.1,127.6);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#660000").s().p("AgbAvQgLgEgFgGQgFgHAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAFQAEAHAHADQAGADAJABQAJgBAGgDQAFgDAAgFQAAgGgFgDQgHgDgLgDQgPgDgKgDQgJgDgGgGQgFgGAAgIQAAgHAFgHQAFgHAKgEQALgEAOAAQAJAAAKACQAJACAGAEQAFADAEAEQADAEAAAEQgBAEgDADQgDADgHAAQgEAAgDgDIgHgGQgDgEgFgCQgEgCgGAAQgIAAgGADQgEADAAAEQgBAEAEADIAKAEIARAEQANACAJAEQAIADAEAGQAFAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgPAAgMgEg");
	this.shape_952.setTransform(-241.1,127.6);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#660000").s().p("AAbAvQgEgEgBgHIAAgpQAAgMgEgHQgDgGgMgBQgHAAgGAFQgGADgDAIQgCAFgBAOIAAAgQAAAHgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIAEgEQADgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAHgIAJgEQAIgFAMAAQALAAAJAFQAJAEAEAIQADAEABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgHAAgDgEg");
	this.shape_953.setTransform(-271.8,127.6);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAGgKAFQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAHgHQAIgGANgDIANgCIASgDIAQgFQAAgKgEgEQgEgEgMgBQgKABgGACQgGACgDAGIgGAHQgCACgFgBQgFABgDgDQgEgDAAgEQAAgHAGgFQAFgHALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAOIAAAPIgBANQAAAHAEAIIACAJQAAAFgEADQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAGAEADQAGAEAIABQAHAAAIgEQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_954.setTransform(-284.6,127.6);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEgBQgHABgDADQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_955.setTransform(-294.5,127.6);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#660000").s().p("AgwBAQgFgEABgJIAAhmQAAgGACgDQACgEAEgCQAEgBAHAAIBIAAQAHAAAEACQADADAAAFQAAAFgDADQgEADgHAAIg8AAIAAAiIAyAAQAHAAAEADQADACAAAFQAAAEgDADQgEACgHAAIgyAAIAAAsQAAAJgEAEQgFAEgHAAQgGAAgFgEg");
	this.shape_956.setTransform(-305.1,125.8);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#660000").s().p("AgKAKQgFgEAAgGQAAgEAFgFQAEgEAGAAQAGAAAFAEQAFAEAAAFQAAAGgFAEQgFAEgGAAQgGAAgEgEg");
	this.shape_957.setTransform(-40.7,217.8);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEADgGAAQgFAAgEgDg");
	this.shape_958.setTransform(-46.9,212.3);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#660000").s().p("AgJBBQgEgDAAgIIAAhrQAAgIADgDQAEgFAGAAQAGAAAEAFQAEADAAAIIAABrQAAAIgEADQgEAEgGABQgGgBgDgEg");
	this.shape_959.setTransform(-52.7,212.3);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADADAAADQAAAEgDAEQgDAFgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_960.setTransform(-61.9,214.1);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDADQgDADgDAGIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_961.setTransform(-71.8,214.1);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#660000").s().p("AAgAvQgDgDgGgIQgKAHgKAFQgIADgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgLAHgHQAIgGANgCIANgDIASgEIAQgDQAAgLgEgEQgEgFgMABQgKAAgGACQgGADgDAFIgGAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHAEAIIACAKQAAADgEAEQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAFQAGADAIAAQAHABAIgEQAGgDAEgFQADgGAAgNIAAgEIgSAFg");
	this.shape_962.setTransform(-83.5,214.1);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgDIgLAKQgGAEgGACQgGABgJAAQgKAAgIgDQgIgEgEgHQgGgHAAgPIAAgxQAAgIAEgDQADgEAHAAQAHAAADAEQAEADAAAIIAAAnQAAAJACAFQACAHAEADQAFADAHABQAHAAAFgFQAHgDADgHQACgFAAgQIAAgfQABgIAEgDQADgEAHAAQAGAAAEAEQAEADAAAIIAABHQAAAIgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_963.setTransform(-108.9,214.1);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#660000").s().p("AgDBEIgKgEIgHgFIgIgGIAAACQAAAHgDADQgFAEgFABQgHgBgDgEQgEgDAAgHIAAhsQAAgHAEgEQADgFAHAAQAGAAAEAFQADADAAAHIAAAmQAIgIAIgDQAJgEALAAQAOAAALAGQALAFAGAMQAGAKAAAQQAAALgEAJQgDAKgGAHQgGAGgJAEQgJAEgLABQgHAAgEgCgAgMgIQgHADgEAGQgEAIAAAKQABAPAHAIQAIAIAMAAQALAAAIgIQAHgJAAgOQAAgKgDgIQgEgGgFgDQgGgFgIAAQgIAAgFAFg");
	this.shape_964.setTransform(-121.6,212.3);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADADAAADQAAAEgDAEQgDAFgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_965.setTransform(-140.3,214.1);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgCQgFAFgGAEQgGADgHACQgFACgHABQgLgBgIgEQgJgEgHgGQgGgIgDgJQgEgJAAgLQAAgXANgNQANgNAWAAQALAAAIAEQAJAEAIAHIAAglQAAgHADgEQAEgFAGAAQAHABAEADQADAEAAAHIAABtQAAAHgDADQgFAEgGABQgFgBgEgEgAgNgIQgHADgDAGQgDAIAAAKQAAAJADAIQAEAGAGAEQAHAEAGAAQAHAAAHgEQAGgDAEgHQADgHABgKQgBgLgDgHQgEgGgGgEQgHgEgHAAQgHAAgGAFg");
	this.shape_966.setTransform(-153.7,212.3);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgcQgHAFgDAGQgEAIAAAJQAAAKAEAHQADAHAHAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNAAQgIAAgGADg");
	this.shape_967.setTransform(-171.9,214.1);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgCQgGAFgFAEQgGADgGACQgGACgIABQgKgBgIgEQgKgEgGgGQgGgIgEgJQgDgJAAgLQAAgXANgNQANgNAVAAQAMAAAIAEQAJAEAIAHIAAglQAAgHAEgEQADgFAHAAQAGABAEADQADAEAAAHIAABtQAAAHgDADQgFAEgFABQgGgBgEgEgAgNgIQgGADgEAGQgDAIAAAKQAAAJADAIQAEAGAGAEQAHAEAGAAQAIAAAGgEQAGgDAEgHQADgHAAgKQAAgLgDgHQgEgGgGgEQgGgEgIAAQgHAAgGAFg");
	this.shape_968.setTransform(-185.4,212.3);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#660000").s().p("AAhAvQgEgDgFgIQgLAHgJAFQgJADgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgLAHgHQAIgGANgCIAOgDIARgEIARgDQgBgLgEgEQgEgFgNABQgJAAgGACQgFADgFAFIgFAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHACAIIADAKQAAADgEAEQgFADgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAFAFQAFADAHAAQAIABAHgEQAIgDADgFQAEgGAAgNIAAgEIgSAFg");
	this.shape_969.setTransform(-198.2,214.1);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAguIgEAAQgGgBgDgCQgEgDAAgEQAAgDAEgDQADgCAHAAIADAAIAAgQIAAgJQAAgDACgDQACgCADgCQADgCAEAAQAFAAAEAEQADACABAEIAAAJIAAASIALAAQAGAAADACQADADAAADQAAAFgEADQgFABgIABIgGAAIAAAsIABAJQAAAEACACQACACAFAAIAHgBIAHgBQADAAADACQADADAAAEQAAAFgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_970.setTransform(-207.9,212.4);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#660000").s().p("AAhAvQgEgDgFgIQgLAHgJAFQgJADgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgLAHgHQAIgGANgCIAOgDIARgEIARgDQgBgLgEgEQgEgFgNABQgJAAgGACQgFADgFAFIgFAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHACAIIADAKQAAADgEAEQgFADgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAFAFQAFADAHAAQAIABAHgEQAIgDADgFQAEgGAAgNIAAgEIgSAFg");
	this.shape_971.setTransform(-218,214.1);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDADQgDADgDAGIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_972.setTransform(-227.8,214.1);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAguIgEAAQgGgBgDgCQgEgDAAgEQAAgDAEgDQADgCAHAAIADAAIAAgQIAAgJQAAgDACgDQACgCADgCQADgCAEAAQAFAAAEAEQADACABAEIAAAJIAAASIALAAQAGAAADACQADADAAADQAAAFgEADQgFABgIABIgGAAIAAAsIABAJQAAAEACACQACACAFAAIAHgBIAHgBQADAAADACQADADAAAEQAAAFgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_973.setTransform(-236.6,212.4);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#660000").s().p("AgJBBQgEgDAAgIIAAhrQAAgIADgDQAEgFAGAAQAGAAAEAFQAEADAAAIIAABrQAAAIgEADQgEAEgGABQgGgBgDgEg");
	this.shape_974.setTransform(-249,212.3);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADADAAADQAAAEgDAEQgDAFgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_975.setTransform(-258.2,214.1);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#660000").s().p("AAbAvQgEgEgBgIIAAgoQAAgMgDgHQgEgGgMAAQgHAAgGADQgGAFgDAHQgDAFAAAPIAAAeQAAAIgDAEQgEAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgEQADgDAGAAQAEAAADACIAFAEQACADAAAFIAAADQAHgIAJgFQAIgEAMAAQALAAAJAEQAJAFAEAIQADAEABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_976.setTransform(-276.4,214.1);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgcQgHAFgDAGQgEAIABAJQgBAKAEAHQADAHAHAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNAAQgIAAgGADg");
	this.shape_977.setTransform(-289.4,214.1);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#660000").s().p("AgbAvQgKgFgGgFQgFgHAAgGQAAgEADgDQAEgDAEAAQAFAAACACIAFAGQAEAGAHAEQAGACAKAAQAIAAAFgCQAGgEAAgFQAAgGgGgDQgFgDgNgDQgOgDgKgDQgJgDgFgGQgGgGAAgIQAAgIAFgGQAGgHAJgEQALgEANAAQALAAAIACQAJACAHAEQAFADAEAEQACAEAAAEQABAEgEADQgEADgFAAQgFAAgDgDIgHgGQgDgDgFgCQgEgDgHAAQgIAAgEADQgGADAAAEQABAEADACIALAFIAQAEQAOADAIADQAIADAEAGQAFAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgPAAgLgEg");
	this.shape_978.setTransform(270.4,189.9);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAHgKADQgLAEgNAAQgMAAgKgEgAgOgcQgGAFgEAHQgDAHgBAJQABAKADAHQAEAHAGAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNAAQgHAAgHADg");
	this.shape_979.setTransform(258.1,189.9);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgCQgFAFgGAEQgGAEgHABQgFADgHAAQgLAAgIgFQgJgDgHgIQgGgHgDgJQgEgJAAgLQAAgXAOgNQAMgNAWAAQALAAAIAEQAJADAIAIIAAglQAAgHADgEQAEgFAGAAQAHABAEADQADAEAAAHIAABtQAAAHgDADQgFAFgGAAQgFAAgEgFgAgNgIQgHADgDAGQgDAIAAAJQAAAKADAIQAEAGAGAEQAHAEAGAAQAHAAAHgEQAGgDAEgHQADgHABgLQgBgKgDgHQgEgGgGgEQgHgEgHAAQgHABgGAEg");
	this.shape_980.setTransform(244.6,188.1);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEADgGABQgFgBgEgDg");
	this.shape_981.setTransform(235.3,188.1);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#660000").s().p("AAaAvQgDgEAAgIIAAgoQgBgMgEgHQgDgGgMgBQgHAAgGAEQgGAFgDAHQgCAFAAAOIAAAfQgBAIgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgEQADgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAIgIAIgFQAIgEAMAAQALAAAJAEQAJAFAEAIQADAEABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_982.setTransform(226,189.9);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgEIgKAKQgHAEgGACQgGACgIgBQgLAAgIgDQgIgEgFgGQgFgJAAgPIAAgwQAAgIAEgDQAEgEAGAAQAGAAAEAEQAFADAAAIIAAAnQAAAJABAGQACAGAFADQAEADAHABQAHgBAFgDQAHgEADgHQADgFAAgQIAAgfQAAgIADgDQAEgEAHAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgDAEgHAAQgFAAgEgEg");
	this.shape_983.setTransform(213,189.9);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#660000").s().p("AgaAvQgMgFgFgFQgFgHAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAGQAEAGAHAEQAGACAJAAQAJAAAGgCQAFgEAAgFQAAgGgFgDQgHgDgLgDQgQgDgIgDQgKgDgGgGQgFgGAAgIQAAgIAFgGQAFgHALgEQAKgEAOAAQAJAAAKACQAIACAGAEQAGADADAEQAEAEAAAEQgBAEgDADQgDADgHAAQgEAAgDgDIgHgGQgDgDgEgCQgFgDgGAAQgJAAgFADQgEADAAAEQAAAEADACIAKAFIARAEQANADAJADQAIADAFAGQAEAFAAAHQAAAKgGAIQgFAHgMAEQgLAEgPAAQgPAAgLgEg");
	this.shape_984.setTransform(195.3,189.9);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgLgEgAgOgcQgHAFgDAHQgEAHABAJQgBAKAEAHQADAHAHAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNAAQgHAAgHADg");
	this.shape_985.setTransform(183,189.9);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgCQgFAFgGAEQgGAEgGABQgGADgIAAQgKAAgJgFQgIgDgHgIQgGgHgEgJQgDgJAAgLQAAgXAOgNQANgNAUAAQAMAAAJAEQAIADAIAIIAAglQAAgHAEgEQADgFAGAAQAHABADADQAEAEAAAHIAABtQAAAHgEADQgEAFgGAAQgFAAgEgFgAgNgIQgGADgDAGQgEAIAAAJQAAAKAEAIQADAGAHAEQAFAEAHAAQAHAAAHgEQAGgDAEgHQAEgHgBgLQABgKgEgHQgEgGgGgEQgHgEgHAAQgHABgGAEg");
	this.shape_986.setTransform(169.5,188.1);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAGgJAFQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAIgHQAHgGANgDIAOgCIARgEIARgDQgBgLgEgEQgEgFgNABQgKgBgFADQgGADgEAFIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHADAIIACAJQAAAFgEADQgFADgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAFAEQAFADAHAAQAIABAIgEQAGgDAEgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_987.setTransform(156.8,189.9);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAgvIgEAAQgGABgDgDQgEgDAAgEQAAgDAEgDQADgCAHgBIADAAIAAgPIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGABADACQADADAAADQAAAFgEADQgFABgIAAIgGAAIAAAtIABAJQAAADACADQACABAFABIAHgBIAHgBQADAAADACQADADAAAEQAAAGgIADQgIADgOAAQgMAAgHgEg");
	this.shape_988.setTransform(147,188.2);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#660000").s().p("AgbAvQgLgFgFgFQgFgHAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAGQAFAGAGAEQAGACAJAAQAJAAAGgCQAFgEAAgFQAAgGgFgDQgHgDgLgDQgPgDgKgDQgJgDgGgGQgFgGAAgIQAAgIAFgGQAFgHAKgEQALgEAOAAQAJAAAJACQAKACAGAEQAFADAEAEQACAEABAEQgBAEgDADQgDADgGAAQgFAAgDgDIgHgGQgDgDgFgCQgEgDgGAAQgIAAgGADQgEADAAAEQgBAEAEACIAKAFIARAEQAOADAIADQAIADAEAGQAFAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgPAAQgPAAgMgEg");
	this.shape_989.setTransform(137,189.9);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEAAADADQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_990.setTransform(124.9,189.9);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEAAADADQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_991.setTransform(106.8,189.9);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgCQgFAFgGAEQgGAEgGABQgGADgIAAQgKAAgJgFQgIgDgHgIQgGgHgEgJQgDgJAAgLQAAgXAOgNQANgNAUAAQAMAAAJAEQAIADAIAIIAAglQAAgHAEgEQADgFAHAAQAGABADADQAEAEAAAHIAABtQAAAHgEADQgEAFgFAAQgGAAgEgFgAgNgIQgGADgDAGQgEAIAAAJQAAAKAEAIQADAGAHAEQAFAEAHAAQAHAAAHgEQAGgDAEgHQAEgHgBgLQABgKgEgHQgEgGgGgEQgHgEgHAAQgHABgGAEg");
	this.shape_992.setTransform(93.4,188.1);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAHgKADQgLAEgNAAQgMAAgLgEgAgOgcQgHAFgDAHQgDAHAAAJQAAAKADAHQADAHAHAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNAAQgIAAgGADg");
	this.shape_993.setTransform(75.2,189.9);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAgvIgEAAQgGABgDgDQgEgDAAgEQAAgDAEgDQADgCAHgBIADAAIAAgPIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGABADACQADADAAADQAAAFgEADQgFABgIAAIgGAAIAAAtIABAJQAAADACADQACABAFABIAHgBIAHgBQADAAADACQADADAAAEQAAAGgIADQgIADgOAAQgMAAgHgEg");
	this.shape_994.setTransform(65.3,188.2);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#660000").s().p("AAbAvQgFgEAAgIIAAgoQAAgMgDgHQgFgGgLgBQgHAAgGAEQgGAFgEAHQgCAFAAAOIAAAfQAAAIgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgEQAEgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAHgIAKgFQAHgEAMAAQALAAAJAEQAJAFAFAIQACAEABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_995.setTransform(54.7,189.9);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEAAADADQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_996.setTransform(41.9,189.9);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEADgGABQgFgBgEgDg");
	this.shape_997.setTransform(32.6,188.1);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#660000").s().p("AA5AvQgFgEAAgIIAAgpIgBgNQgBgFgDgDQgEgDgGgBQgGAAgFADQgFAEgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgFgEQgDgEAAgIIAAgnIgBgPQgBgFgDgDQgDgDgIgBQgOABgEAIQgFAIABAQIAAAhQAAAIgFAEQgEAEgGAAQgHAAgDgEQgFgEAAgIIAAhHQAAgGAEgEQAEgEAGAAQAFAAAEADQAEAEAAAGIAAADQAIgJAIgDQAJgDAKAAQALAAAHADQAHAEAGAIQAGgIAJgEQAJgDAKAAQALAAAJADQAIAFAEAHQAEAHAAAOIAAAwQAAAIgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_998.setTransform(20.3,189.9);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEADgGABQgFgBgEgDg");
	this.shape_999.setTransform(7.9,188.1);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAHgKADQgLAEgNAAQgMAAgKgEgAgOgcQgGAFgEAHQgDAHgBAJQABAKADAHQAEAHAGAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNAAQgHAAgHADg");
	this.shape_1000.setTransform(-14.1,189.9);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#660000").s().p("AAaAvQgDgEAAgIIAAgoQAAgMgFgHQgEgGgLgBQgHAAgGAEQgHAFgDAHQgBAFAAAOIAAAfQAAAIgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgEQAEgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAIgIAJgFQAHgEAMAAQALAAAJAEQAJAFAFAIQACAEABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_1001.setTransform(-27.1,189.9);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgKgEgAgOgcQgHAFgDAHQgEAHAAAJQAAAKAEAHQADAHAHAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNAAQgIAAgGADg");
	this.shape_1002.setTransform(-40,189.9);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEAAADADQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_1003.setTransform(-65.5,189.9);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDAEQgDADgDAFIgDANIgBASIAAAVQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1004.setTransform(-75.4,189.9);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#660000").s().p("AgJBBQgEgDAAgIIAAhrQAAgIADgDQAEgFAGAAQAGAAAEAFQAEADAAAIIAABrQAAAIgEADQgEAFgGAAQgGAAgDgFg");
	this.shape_1005.setTransform(-89,188.1);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEAAADADQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_1006.setTransform(-98.2,189.9);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAHgKADQgLAEgNAAQgMAAgKgEgAgOgcQgGAFgEAHQgDAHgBAJQABAKADAHQAEAHAGAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNAAQgIAAgGADg");
	this.shape_1007.setTransform(-116.4,189.9);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDAEQgDADgDAFIgDANIgBASIAAAVQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1008.setTransform(-126.1,189.9);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#660000").s().p("AgbBCQgMgEgGgGQgGgGAAgGQAAgEADgDQAEgDAFABQAGAAAFAEIAFAFIAFAEIAHADIAKABQAKAAAGgCQAGgEADgEQACgFABgFIAAgSQgGAHgJAFQgJAEgLAAQgOAAgLgGQgKgHgGgLQgGgLAAgPQAAgMAEgJQADgIAHgGQAGgHAJgDQAIgDAKAAQALAAAJAEQAJAEAIAIIAAgCQAAgHAEgEQADgEAGAAQAIABADAFQADAEAAAJIAABHQAAANgDAJQgDAJgHAGQgHAFgLADQgKAEgQAAQgOgBgMgDgAgTgqQgHAJAAAPQAAAPAHAGQAIAIALAAQAHABAHgEQAGgDAEgGQAEgGAAgLQAAgOgIgJQgIgJgMAAQgLABgIAHg");
	this.shape_1009.setTransform(-138.2,191.8);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgLgEgAgOgcQgGAFgEAHQgEAHAAAJQAAAKAEAHQAEAHAGAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNAAQgIAAgGADg");
	this.shape_1010.setTransform(-151.1,189.9);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#660000").s().p("AgJBBQgEgDAAgIIAAhrQAAgIADgDQAEgFAGAAQAGAAAEAFQAEADAAAIIAABrQAAAIgEADQgEAFgGAAQgGAAgDgFg");
	this.shape_1011.setTransform(-160.5,188.1);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#660000").s().p("AgvBDQgGgCAAgGQAAgFADgCQADgCAGAAIAEAAIAFABQAFAAADgCQACgBADgEIAFgIIADgGIgkhMQgDgIAAgCIACgHQACgCADgBQADgDAEAAQAGAAADAEQAEADACAHIAXA9IAXg5IAFgLQACgDADgCQACgCAFAAIAGACQADACACACIABAGIgBAEIgDAHIglBUQgFALgEAHQgEAHgHADQgIADgNABQgNgBgGgCg");
	this.shape_1012.setTransform(-174.8,191.8);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#660000").s().p("AgbAvQgLgFgFgFQgFgHAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAGQAEAGAHAEQAGACAJAAQAJAAAGgCQAFgEAAgFQAAgGgFgDQgHgDgLgDQgPgDgKgDQgJgDgGgGQgFgGAAgIQAAgIAFgGQAFgHAKgEQALgEAOAAQAJAAAKACQAJACAGAEQAFADAEAEQADAEAAAEQgBAEgDADQgDADgHAAQgEAAgDgDIgHgGQgDgDgFgCQgEgDgGAAQgIAAgGADQgEADAAAEQgBAEAEACIAKAFIARAEQANADAJADQAIADAEAGQAFAFAAAHQAAAKgGAIQgFAHgMAEQgLAEgPAAQgPAAgMgEg");
	this.shape_1013.setTransform(-191.6,189.9);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAHgKADQgLAEgNAAQgMAAgLgEgAgOgcQgHAFgDAHQgEAHABAJQgBAKAEAHQADAHAHAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNAAQgIAAgGADg");
	this.shape_1014.setTransform(-203.9,189.9);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEADgGABQgFgBgEgDg");
	this.shape_1015.setTransform(-213.3,188.1);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDAEQgDADgDAFIgDANIgBASIAAAVQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1016.setTransform(-220.2,189.9);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#660000").s().p("AAgAvQgEgEgFgGQgKAGgJAFQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAHgHQAIgGANgDIAOgCIARgEIARgDQgBgLgEgEQgEgFgNABQgJgBgGADQgFADgEAFIgGAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHACAIIADAJQAAAFgEADQgFADgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAEAEQAFADAIAAQAIABAHgEQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_1017.setTransform(-231.8,189.9);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#660000").s().p("AgbAvQgLgFgFgFQgFgHAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAGQAFAGAGAEQAGACAJAAQAJAAAFgCQAGgEAAgFQAAgGgGgDQgFgDgMgDQgPgDgKgDQgJgDgFgGQgGgGAAgIQAAgIAFgGQAFgHAKgEQALgEAOAAQAJAAAJACQAJACAHAEQAFADAEAEQACAEAAAEQAAAEgDADQgEADgFAAQgEAAgEgDIgHgGQgDgDgFgCQgEgDgGAAQgJAAgFADQgEADAAAEQAAAEADACIAKAFIARAEQAOADAIADQAIADAEAGQAFAFAAAHQAAAKgGAIQgFAHgMAEQgLAEgQAAQgOAAgMgEg");
	this.shape_1018.setTransform(-244.1,189.9);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDAEQgDADgDAFIgDANIgBASIAAAVQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1019.setTransform(-253.4,189.9);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEAAADADQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_1020.setTransform(-265,189.9);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#660000").s().p("AgJAxIgFgGIgGgLIgbg6IgCgFIgCgEIAAgEIABgFIAFgEQADgCAEAAQAHAAADADQADAFADAIIAWA4IAZg7QADgHADgDQACgDAGAAQAGAAAEADQADADAAAFIAAADIgCAFIgCAEIgbA7IgDAGIgEAHIgGAEQgDACgFAAQgFAAgEgCg");
	this.shape_1021.setTransform(-276.9,189.9);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgCQgFAFgGAEQgGAEgHABQgFADgHAAQgLAAgIgFQgKgDgGgIQgGgHgEgJQgDgJAAgLQAAgXANgNQANgNAWAAQALAAAIAEQAJADAIAIIAAglQAAgHADgEQAEgFAHAAQAGABAEADQADAEAAAHIAABtQAAAHgDADQgFAFgFAAQgGAAgEgFgAgNgIQgHADgDAGQgDAIAAAJQAAAKADAIQAEAGAGAEQAHAEAGAAQAHAAAHgEQAGgDAEgHQADgHABgLQgBgKgDgHQgEgGgGgEQgHgEgHAAQgHABgGAEg");
	this.shape_1022.setTransform(-289.5,188.1);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAGgKAFQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAHgHQAIgGANgDIANgCIASgEIAQgDQAAgLgEgEQgEgFgMABQgKgBgGADQgGADgDAFIgGAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHAEAIIACAJQAAAFgEADQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAEAEQAGADAIAAQAHABAIgEQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_1023.setTransform(-302.2,189.9);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("#660000").s().p("AgbAuQgKgDgGgHQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAACACIAFAGQAFAGAGAEQAGACAKAAQAIAAAFgCQAGgEAAgEQAAgHgGgDQgFgDgMgDQgPgDgKgEQgJgCgFgGQgGgGAAgIQAAgHAFgHQAGgHAJgEQALgEAOAAQAKAAAIACQAJACAHADQAFAEAEAEQACAEAAAEQABAEgEADQgEADgFAAQgFAAgDgCIgHgHQgDgEgFgBQgEgDgGAAQgJAAgEADQgGADAAAEQABAEADACIALAFIAQAEQAOACAIAFQAIADAEAFQAFAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgPAAgLgFg");
	this.shape_1024.setTransform(164.2,165.8);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgCIgKAJQgHAEgGACQgGABgIABQgLgBgIgDQgIgEgFgHQgFgHAAgPIAAgxQAAgHAEgEQADgEAHAAQAGAAAEAEQAFAEAAAHIAAAnQgBAJACAFQACAHAFADQAEAEAHAAQAHAAAFgFQAHgDADgHQACgEABgRIAAgfQAAgHADgEQAFgEAGAAQAGAAAEAEQAEAEAAAHIAABHQAAAIgEADQgDAEgHAAQgGAAgDgEg");
	this.shape_1025.setTransform(151.9,165.8);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("#660000").s().p("AgbAuQgKgDgGgHQgFgGAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAGQAEAGAHAEQAGACAKAAQAIAAAFgCQAGgEAAgEQAAgHgGgDQgFgDgNgDQgOgDgKgEQgJgCgFgGQgGgGAAgIQAAgHAFgHQAGgHAJgEQAKgEAOAAQALAAAIACQAKACAFADQAGAEAEAEQACAEAAAEQABAEgEADQgEADgFAAQgEAAgEgCIgHgHQgDgEgFgBQgEgDgHAAQgHAAgFADQgGADAAAEQABAEADACIALAFIAQAEQANACAJAFQAIADAEAFQAFAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgPAAgLgFg");
	this.shape_1026.setTransform(139.5,165.8);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#660000").s().p("AAgAvQgDgDgGgIQgKAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgEIAQgDQAAgKgEgFQgEgFgMAAQgKAAgGADQgFADgEAFIgGAHQgBACgGAAQgFAAgDgDQgEgCAAgFQAAgGAGgHQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHADAIIADAKQAAADgEADQgFAEgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAFAEAFQAGAEAIgBQAHAAAHgDQAIgDADgFQADgGAAgNIAAgEIgRAFg");
	this.shape_1027.setTransform(122.1,165.8);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgcQgHAFgDAGQgEAIABAJQgBAKAEAHQADAHAHAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgIAAgGADg");
	this.shape_1028.setTransform(103.9,165.8);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#660000").s().p("AAaAvQgDgEAAgIIAAgoQgBgNgEgGQgDgHgMABQgHAAgGADQgGAEgDAHQgCAGAAAPIAAAeQgBAIgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgDQADgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAIgJAIgEQAIgEAMAAQALAAAJAEQAJAFAEAHQADAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_1029.setTransform(91,165.8);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgCIgKAJQgHAEgGACQgGABgIABQgLgBgIgDQgIgEgFgHQgFgHAAgPIAAgxQAAgHAEgEQAEgEAGAAQAGAAAEAEQAFAEAAAHIAAAnQAAAJABAFQACAHAFADQAEAEAHAAQAHAAAFgFQAHgDADgHQADgEAAgRIAAgfQAAgHADgEQAEgEAHAAQAGAAAEAEQAEAEAAAHIAABHQAAAIgEADQgDAEgHAAQgFAAgEgEg");
	this.shape_1030.setTransform(78,165.8);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#660000").s().p("AAhAvQgFgDgEgIQgLAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAIgIQAHgGANgCIANgDIASgEIAQgDQAAgKgEgFQgEgFgNAAQgKAAgFADQgGADgEAFIgFAHQgBACgGAAQgFAAgDgDQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAAPIAAANIgBAOQABAHADAIIACAKQAAADgEADQgEAEgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAFAFAFQAEAEAJgBQAHAAAIgDQAGgDAEgFQAEgGgBgNIAAgEIgSAFg");
	this.shape_1031.setTransform(59.8,165.8);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgcQgGAFgEAGQgDAIgBAJQABAKADAHQAEAHAGAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgHAAgHADg");
	this.shape_1032.setTransform(41.7,165.8);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#660000").s().p("AAaAvQgDgEAAgIIAAgoQAAgNgFgGQgEgHgLABQgHAAgGADQgHAEgDAHQgBAGAAAPIAAAeQAAAIgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgDQAEgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAIgJAJgEQAHgEAMAAQALAAAJAEQAJAFAFAHQACAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_1033.setTransform(28.7,165.8);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgCIgKAJQgGAEgHACQgGABgIABQgLgBgIgDQgIgEgFgHQgFgHAAgPIAAgxQAAgHAEgEQADgEAHAAQAGAAAFAEQAEAEgBAHIAAAnQABAJABAFQACAHAFADQADAEAIAAQAGAAAHgFQAGgDADgHQACgEABgRIAAgfQAAgHADgEQAFgEAGAAQAGAAAEAEQAEAEAAAHIAABHQAAAIgEADQgEAEgFAAQgHAAgDgEg");
	this.shape_1034.setTransform(15.8,165.8);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgcQgGAFgEAGQgEAIAAAJQAAAKAEAHQAEAHAGAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgIAAgGADg");
	this.shape_1035.setTransform(-2.6,165.8);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAguIgEAAQgGgBgDgCQgEgCAAgEQAAgFAEgCQADgDAHABIADAAIAAgQIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGgBADADQADACAAAFQAAAEgEADQgFACgIAAIgGAAIAAAtIABAJQAAACACACQACADAFAAIAHgBIAHgBQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_1036.setTransform(-12.5,164.1);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgcQgHAFgDAGQgEAIABAJQgBAKAEAHQADAHAHAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgHAAgHADg");
	this.shape_1037.setTransform(-23.1,165.8);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgBgEAAQgHAAgDACQgDADgDAGIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1038.setTransform(-32.8,165.8);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgBgEAAQgHAAgDACQgDADgDAGIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1039.setTransform(-41.9,165.8);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADADAAAEQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_1040.setTransform(-53.6,165.8);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#660000").s().p("AgtBDQgJAAgEgCQgEgDgBgEQgCgDAAgHIAAhiQAAgJAFgDQAEgEAKAAIApAAQAPAAALACQALADAKAHQAYASAAAkQAAALgDALQgCAJgFAIQgFAJgIAGQgGAFgIACQgHAEgIABIgTABgAgiAuIAYAAIALgBIAJgCIAIgEQAQgLAAgcQAAgUgHgKQgHgJgKgDQgKgCgNAAIgVAAg");
	this.shape_1041.setTransform(-67.6,163.9);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f("#660000").s().p("AgKAKQgFgEAAgGQAAgEAFgFQAEgEAGAAQAGAAAFAEQAFAEAAAFQAAAGgFAEQgFAEgGAAQgGAAgEgEg");
	this.shape_1042.setTransform(-84.5,169.5);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgcQgHAFgDAGQgEAIABAJQgBAKAEAHQADAHAHAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgHAAgHADg");
	this.shape_1043.setTransform(-93.3,165.8);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f("#660000").s().p("AgmAlQgPgNAAgXQAAgOAHgMQAHgMAMgGQANgHARAAQALAAAKADQAJADAGAEQAHAFADAFQAEAFAAAEQAAAFgEADQgEADgFAAQgEAAgCgBIgGgGQgFgHgGgDQgFgEgJAAQgMAAgIAJQgHAJAAAOQAAAHACAGQACAGADAEQAEAEAGACQAFACAFAAQAJAAAGgDQAGgEAFgHQACgEAEgCQADgDAEAAQAFAAAEAEQADADAAAEQAAAFgDAFQgDAFgHAFQgGAFgKADQgKADgNAAQgZAAgPgOg");
	this.shape_1044.setTransform(-106.1,165.7);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgHAEgEQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEAEAAAGQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_1045.setTransform(-115.3,164);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f("#660000").s().p("AAcAxQgDgDgEgFIgVgbIgUAbIgIAIQgDACgFAAQgFAAgEgDQgEgDAAgEQAAgEAFgIIAbgeIgYgbQgFgIAAgEQgBgEAEgDQAEgDAFAAQAFAAAEADIAIAIIARAVIASgVIAIgIQADgDAFAAQAGAAAEADQADADAAAEIgBAFIgFAHIgXAbIAaAeQAGAJAAADQAAAEgEADQgDADgGAAQgFAAgEgCg");
	this.shape_1046.setTransform(-123.8,165.8);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("#660000").s().p("AAxBAQgDgEAAgHIAAhcIgZBVIgEAMQgCAEgEADQgEADgHAAQgFAAgDgCQgEgCgCgDIgDgHIgDgIIgYhVIAABcQAAAHgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgHIAAhqQAAgIAFgDQAFgDAKAAIAJAAIAMABQAEABADAEIADALIAWBJIAWhJIAFgLQACgEADgBIANgBIAKAAQAIAAAGADQAFADAAAIIAABqQAAAHgEAEQgEAEgHAAQgFAAgFgEg");
	this.shape_1047.setTransform(-151,164);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADADAAAEQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_1048.setTransform(-171.6,165.8);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgGAHgFADQgGADgHACQgFACgIAAQgKAAgJgDQgIgEgHgHQgGgIgDgJQgEgKAAgKQAAgXAOgNQANgNAUAAQAMAAAJADQAIAFAIAHIAAglQAAgHADgFQAEgDAGAAQAHAAADADQAEADAAAIIAABtQAAAHgEAEQgDADgHAAQgFAAgEgDgAgNgIQgGADgDAHQgEAGAAALQAAAJAEAIQADAGAHAFQAFADAHAAQAHAAAHgDQAGgEAEgHQADgHAAgKQAAgKgDgIQgEgGgGgEQgHgDgHgBQgHAAgGAFg");
	this.shape_1049.setTransform(-185,163.9);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADADAAAEQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_1050.setTransform(-203.1,165.8);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAguIgEAAQgGgBgDgCQgEgCAAgEQAAgFAEgCQADgDAHABIADAAIAAgQIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGgBADADQADACAAAFQAAAEgEADQgFACgIAAIgGAAIAAAtIABAJQAAACACACQACADAFAAIAHgBIAHgBQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_1051.setTransform(-212.9,164.1);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f("#660000").s().p("AAaAvQgDgEAAgIIAAgoQAAgNgFgGQgDgHgMABQgHAAgGADQgGAEgDAHQgCAGAAAPIAAAeQAAAIgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgDQADgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAIgJAIgEQAIgEAMAAQALAAAJAEQAJAFAEAHQADAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_1052.setTransform(-223.5,165.8);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADADAAAEQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_1053.setTransform(-236.3,165.8);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgGAHgFADQgGADgGACQgGACgIAAQgKAAgJgDQgJgEgGgHQgGgIgEgJQgDgKAAgKQAAgXANgNQAOgNAUAAQAMAAAIADQAJAFAIAHIAAglQAAgHAEgFQADgDAHAAQAGAAAEADQADADAAAIIAABtQAAAHgDAEQgEADgGAAQgGAAgEgDgAgNgIQgGADgEAHQgDAGAAALQAAAJADAIQAEAGAHAFQAFADAHAAQAIAAAGgDQAGgEAEgHQADgHAAgKQAAgKgDgIQgEgGgGgEQgGgDgIgBQgHAAgGAFg");
	this.shape_1054.setTransform(-249.7,163.9);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgHAEgEQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEAEAAAGQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_1055.setTransform(-259,164);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f("#660000").s().p("AgbAuQgKgDgGgHQgFgGAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAGQAEAGAHAEQAGACAKAAQAIAAAFgCQAGgEAAgEQAAgHgGgDQgFgDgNgDQgOgDgKgEQgJgCgFgGQgGgGAAgIQAAgHAFgHQAGgHAJgEQAKgEAOAAQALAAAIACQAKACAFADQAGAEADAEQADAEAAAEQABAEgEADQgEADgFAAQgEAAgEgCIgHgHQgDgEgFgBQgEgDgHAAQgHAAgFADQgGADAAAEQABAEADACIALAFIAQAEQANACAJAFQAIADAEAFQAFAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgPAAgLgFg");
	this.shape_1056.setTransform(-267.7,165.8);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADADAAAEQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_1057.setTransform(-279.9,165.8);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgBgEAAQgHAAgDACQgDADgDAGIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1058.setTransform(-289.7,165.8);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("#660000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgHADgEQAEgDAGgBQAHABADADQAEAEAAAHIAAADQAIgJAJgEQAJgEAKAAQANAAALAGQALAGAGALQAHALAAARQAAALgDAIQgEAKgHAHQgGAGgJAEQgJAEgKgBQgLABgJgFQgJgEgHgJIAAAmQAAAQgOAAQgHABgDgFgAgSgqQgJAIABARQgBAPAJAGQAHAJALAAQAIAAAGgDQAGgFAEgFQADgIAAgKQAAgKgDgHQgDgHgGgEQgHgDgIgBQgKAAgIAIg");
	this.shape_1059.setTransform(-301.5,167.6);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f("#660000").s().p("AAaAvQgEgEAAgIIAAgoQABgNgEgGQgFgGgLAAQgHAAgGADQgHAFgDAGQgBAGgBAPIAAAeQABAIgEAEQgFAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgDQAEgEAGAAQAEAAADACIAFAEQACAEAAAEIAAADQAIgJAJgEQAHgEAMAAQALAAAJAEQAJAFAFAHQACAFABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_1060.setTransform(203,141.6);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADACAAAEQAAAEgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_1061.setTransform(190.2,141.6);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADACAAAEQAAAEgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_1062.setTransform(172.1,141.6);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDADQgDAEgDAFIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1063.setTransform(153.9,141.6);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADACAAAEQAAAEgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_1064.setTransform(142.2,141.6);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEADgGAAQgFAAgEgDg");
	this.shape_1065.setTransform(133,139.8);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f("#660000").s().p("AgJAxIgFgGIgGgLIgbg6IgCgEIgCgFIAAgEIABgFIAFgEQADgCAEAAQAHAAADAEQADAEADAHIAWA5IAZg7QADgHADgDQACgDAGAAQAGAAAEAEQADACAAAFIAAADIgCAFIgCAEIgbA7IgDAGIgEAHIgGAEQgDACgFAAQgFAAgEgCg");
	this.shape_1066.setTransform(124.2,141.6);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("#660000").s().p("AAaAvQgDgEAAgIIAAgoQAAgNgFgGQgDgGgMAAQgHAAgGADQgHAFgDAGQgBAGAAAPIAAAeQAAAIgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgDQAEgEAGAAQAEAAADACIAFAEQACAEAAAEIAAADQAIgJAIgEQAIgEAMAAQALAAAJAEQAJAFAEAHQADAFABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_1067.setTransform(112.3,141.6);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAGgLAEQgKAEgNAAQgMAAgKgEgAgOgcQgGAEgEAHQgDAIgBAJQABAKADAHQAEAHAGAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgHAAgHADg");
	this.shape_1068.setTransform(99.4,141.6);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("#660000").s().p("AgmAlQgPgNAAgXQAAgOAHgMQAHgMAMgGQANgHARAAQALAAAKADQAJADAGAEQAHAFADAFQAEAFAAAEQAAAFgEADQgEADgFAAQgEAAgCgBIgGgGQgFgHgGgDQgFgEgJAAQgMAAgIAJQgHAJAAAOQAAAHACAGQACAGADAEQAEAEAGACQAFACAFAAQAJAAAGgDQAGgEAFgHQACgEAEgCQADgDAEAAQAFAAAEAEQADADAAAEQAAAFgDAFQgDAFgHAFQgGAFgKADQgKADgNAAQgZAAgPgOg");
	this.shape_1069.setTransform(86.5,141.5);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADACAAAEQAAAEgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_1070.setTransform(68.6,141.6);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("#660000").s().p("AgbAuQgLgDgFgHQgFgGAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAGQAEAGAHAEQAGACAJAAQAJAAAGgCQAFgEAAgEQAAgHgFgDQgHgDgLgDQgPgDgKgEQgJgCgGgGQgFgGAAgIQAAgIAFgGQAFgHAKgEQALgEAOAAQAJAAAKACQAJACAGADQAFAEAEAEQADAEAAAEQgBAEgDADQgDADgHAAQgEAAgDgDIgHgGQgDgDgFgCQgEgDgGAAQgIAAgGADQgEADAAAEQgBAEAEACIAKAFIARAEQANADAJAEQAIACAFAGQAEAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgPAAgMgFg");
	this.shape_1071.setTransform(56.3,141.6);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f("#660000").s().p("AgOAaQAAAAgBgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgFAFgCQALgFAAgKQgGAAgFgCQgFgEAAgGQAAgHAFgDQAFgFAGAAQAFAAAEADQAEADACAEQACAEAAAIQAAAHgEAJQgEAHgHAFQgFAFgFgBQgEAAgCgBg");
	this.shape_1072.setTransform(24.8,146.6);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("#660000").s().p("AAbAvQgFgEAAgIIAAgoQAAgNgDgGQgFgGgLAAQgHAAgGADQgGAFgEAGQgCAGAAAPIAAAeQAAAIgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgDQAEgEAGAAQAEAAADACIAFAEQACAEAAAEIAAADQAHgJAKgEQAHgEAMAAQALAAAJAEQAJAFAFAHQACAFABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1073.setTransform(15,141.6);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEADgGAAQgFAAgEgDg");
	this.shape_1074.setTransform(-7.4,139.8);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#660000").s().p("AgmAlQgPgNAAgXQAAgOAHgMQAHgMAMgGQANgHARAAQALAAAKADQAJADAGAEQAHAFADAFQAEAFAAAEQAAAFgEADQgEADgFAAQgEAAgCgBIgGgGQgFgHgGgDQgFgEgJAAQgMAAgIAJQgHAJAAAOQAAAHACAGQACAGADAEQAEAEAGACQAFACAFAAQAJAAAGgDQAGgEAFgHQACgEAEgCQADgDAEAAQAFAAAEAEQADADAAAEQAAAFgDAFQgDAFgHAFQgGAFgKADQgKADgNAAQgZAAgPgOg");
	this.shape_1075.setTransform(-16.6,141.5);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgDIgLAKQgFAEgHACQgGABgJABQgKgBgIgDQgIgEgEgHQgGgHAAgPIAAgxQAAgIAEgDQADgEAHAAQAHAAAEAEQADADAAAIIAAAnQAAAJACAFQACAHAEADQAFADAHABQAHAAAFgFQAHgDADgHQACgEAAgRIAAgfQAAgIAFgDQAEgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAIgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_1076.setTransform(-29.4,141.6);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#660000").s().p("AgJBCQgEgEAAgIIAAhrQAAgIADgEQAEgEAGABQAGgBAEAEQAEAEAAAIIAABrQAAAIgEAEQgEADgGAAQgGAAgDgDg");
	this.shape_1077.setTransform(-38.8,139.7);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgcQgHAEgDAHQgEAIAAAJQAAAKAEAHQADAHAHAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgIAAgGADg");
	this.shape_1078.setTransform(-48.1,141.6);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#660000").s().p("AgJAxIgFgGIgGgLIgbg6IgCgEIgCgFIAAgEIABgFIAFgEQADgCAEAAQAHAAADAEQADAEADAHIAWA5IAZg7QADgHADgDQACgDAGAAQAGAAAEAEQADACAAAFIAAADIgCAFIgCAEIgbA7IgDAGIgEAHIgGAEQgDACgFAAQgFAAgEgCg");
	this.shape_1079.setTransform(-60.1,141.6);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADACAAAEQAAAEgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_1080.setTransform(-71.8,141.6);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#660000").s().p("AAoBCQgEgCgCgEIgHgJIgMgSQgHgKgGgGQgDgFgGgCQgFgCgJAAIgLAAIAAArQAAAJgEAEQgFAEgGAAQgIAAgEgEQgEgEAAgJIAAhmQAAgJAEgEQAFgDAKAAIAyAAIASAAIANADQAIADAFAFQAFAFADAHQADAGAAAHQAAAPgJAJQgKAIgUAEQAJAEAHAHIAOARQAFAIAEAHQADAHAAACQAAADgCACQgCADgEACQgDABgEAAQgGAAgDgCgAgggKIAcAAQAKAAAIgCQAHgCAFgEQADgEAAgHQAAgFgCgFQgEgEgFgCQgGgCgPAAIgdAAg");
	this.shape_1081.setTransform(-85.1,139.8);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f("#660000").s().p("AAhAvQgFgDgEgIQgLAHgKAFQgIADgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAIgIQAHgGANgCIAOgDIARgEIAQgDQAAgLgEgEQgEgFgNABQgKAAgFACQgFADgFAFIgFAHQgBACgGAAQgFAAgDgDQgEgDAAgEQAAgGAFgHQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAJAAAOIAAAOIAAANQAAAHADAIIACAKQAAADgEAEQgEADgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAFAEQAFADAHAAQAIAAAIgDQAGgDAEgFQADgGAAgNIAAgEIgSAFg");
	this.shape_1082.setTransform(-104.8,141.6);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#660000").s().p("AgJBCQgEgEAAgIIAAhrQAAgIADgEQAEgEAGABQAGgBAEAEQAEAEAAAIIAABrQAAAIgEAEQgEADgGAAQgGAAgDgDg");
	this.shape_1083.setTransform(-114,139.7);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADACAAAEQAAAEgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_1084.setTransform(-128.6,141.6);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgCQgGAGgFADQgGADgGACQgGACgIAAQgKAAgJgDQgJgFgGgGQgGgIgEgJQgDgKAAgKQAAgXANgNQAOgNAUAAQAMAAAJAEQAIAEAIAHIAAglQAAgHAEgFQADgEAHABQAGAAADADQAEAEAAAHIAABtQAAAHgEAEQgEADgFAAQgGAAgEgDgAgNgIQgGADgDAHQgEAGAAALQAAAKAEAHQADAHAHAEQAFADAHAAQAHAAAHgDQAGgEAEgHQAEgHgBgKQABgKgEgIQgEgGgGgEQgHgDgHgBQgHAAgGAFg");
	this.shape_1085.setTransform(-142,139.7);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDADQgDAEgDAFIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1086.setTransform(-157.8,141.6);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgcQgHAEgDAHQgEAIAAAJQAAAKAEAHQADAHAHAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgIAAgGADg");
	this.shape_1087.setTransform(-169.6,141.6);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgCQgGAGgFADQgGADgGACQgGACgIAAQgKAAgIgDQgKgFgGgGQgGgIgEgJQgDgKAAgKQAAgXANgNQANgNAVAAQAMAAAIAEQAJAEAIAHIAAglQAAgHAEgFQADgEAHABQAGAAAEADQADAEAAAHIAABtQAAAHgDAEQgFADgFAAQgGAAgEgDgAgNgIQgGADgEAHQgDAGAAALQAAAKADAHQAEAHAGAEQAHADAGAAQAIAAAGgDQAGgEAEgHQADgHAAgKQAAgKgDgIQgEgGgGgEQgGgDgIgBQgHAAgGAFg");
	this.shape_1088.setTransform(-183.2,139.7);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#660000").s().p("AAgAvQgDgDgGgIQgKAHgKAFQgIADgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAIgIQAHgGANgCIANgDIASgEIAQgDQAAgLgEgEQgEgFgMABQgLAAgFACQgGADgEAFIgFAHQgBACgGAAQgFAAgDgDQgEgDAAgEQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAJAAAOIAAAOIgBANQAAAHAEAIIACAKQAAADgEAEQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAEAEQAFADAJAAQAHAAAIgDQAGgDAEgFQAEgGgBgNIAAgEIgSAFg");
	this.shape_1089.setTransform(-195.9,141.6);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f("#660000").s().p("AAbAvQgFgEAAgIIAAgoQAAgNgDgGQgFgGgLAAQgHAAgGADQgGAFgEAGQgCAGAAAPIAAAeQAAAIgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgDQAEgEAGAAQAEAAADACIAFAEQACAEAAAEIAAADQAHgJAKgEQAHgEAMAAQALAAAJAEQAJAFAFAHQACAFABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1090.setTransform(-208.7,141.6);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#660000").s().p("AAgAvQgEgDgFgIQgKAHgJAFQgJADgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIAOgDIARgEIARgDQgBgLgEgEQgEgFgNABQgJAAgGACQgFADgEAFIgGAHQgCACgFAAQgFAAgDgDQgEgDAAgEQAAgGAFgHQAGgGALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAJAAAOIAAAOIAAANQAAAHACAIIADAKQAAADgEAEQgFADgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAEAEQAFADAIAAQAIAAAHgDQAIgDADgFQADgGABgNIAAgEIgSAFg");
	this.shape_1091.setTransform(-221.5,141.6);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f("#660000").s().p("AgbBCQgMgEgGgGQgGgFAAgGQAAgFADgDQAEgCAFAAQAGgBAFAFIAFAFIAFAEIAHADIAKABQAKAAAGgDQAGgCADgGQACgEABgGIAAgSQgGAJgJAEQgJAEgLAAQgOAAgLgHQgKgGgGgMQgGgKAAgPQAAgLAEgKQADgIAHgGQAGgHAJgDQAIgDAKAAQALAAAJAEQAJAEAIAIIAAgCQAAgHAEgEQADgDAGgBQAIAAADAGQADAEAAAJIAABHQAAANgDAJQgDAJgHAGQgHAFgLADQgKADgQABQgOAAgMgEgAgTgqQgHAJAAAPQAAAPAHAGQAIAJALgBQAHAAAHgDQAGgDAEgGQAEgGAAgKQAAgQgIgIQgIgJgMAAQgLABgIAHg");
	this.shape_1092.setTransform(-234.4,143.4);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#660000").s().p("AgJBCQgEgEAAgIIAAhrQAAgIADgEQAEgEAGABQAGgBAEAEQAEAEAAAIIAABrQAAAIgEAEQgEADgGAAQgGAAgDgDg");
	this.shape_1093.setTransform(-249,139.7);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADACAAAEQAAAEgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_1094.setTransform(-258.2,141.6);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADACAAAEQAAAEgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_1095.setTransform(-276.3,141.6);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f("#660000").s().p("AgwBAQgFgEAAgJIAAhmQABgGACgDQACgEAEgCQAEgBAHAAIBIAAQAIAAADACQAEADgBAFQABAFgEADQgDADgIAAIg8AAIAAAiIAyAAQAHAAAEADQADACAAAFQAAAEgDADQgEACgHAAIgyAAIAAAsQAAAJgFAEQgEAEgHAAQgGAAgFgEg");
	this.shape_1096.setTransform(-301.6,139.8);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#660000").s().p("AgXBQIAEgJIAIgRQAFgLADgOQADgOAAgPQAAgOgDgOQgDgOgFgLIgIgSIgEgIQAAgCAEAAQAHAAAEACQAEACAFAKIAKAQQAFAJACAIQADAIACAJQABAIAAAJQAAATgFAQQgGARgMAQQgFAKgEACQgEACgHAAQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAgBAAAAg");
	this.shape_1097.setTransform(-39,118);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f("#660000").s().p("AgbA7QgLgFgGgIQgGgKAAgKQAAgXAZgIQgUgIAAgSQAAgIAGgIQAEgHALgFQAKgEAOAAQALAAAIADQAJACAGAFQAGAFADAGQACAFAAAGQABAJgFAHQgFAGgKAEQAIADAGAEQAGAFACAFQADAHAAAHQAAAKgGAKQgGAIgMAFQgLAFgQAAQgPAAgMgFgAgRAJQgGAGAAALQAAAGADAFQAEAFAFADQAFACAGAAQAHAAAGgCQAFgDADgFQADgFAAgHQAAgGgDgGQgDgEgGgDQgFgDgHAAQgKAAgHAGgAgOgqQgGAFAAAIQAAAHAGAFQAGAFAIAAQAEAAAEgCQAEgBADgCQACgCABgEQACgDAAgDQAAgFgDgEQgCgEgFgCQgEgDgGAAQgIAAgGAFg");
	this.shape_1098.setTransform(-48.3,116.3);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#660000").s().p("AgiA/QgHAAgEgEQgEgDAAgFQAAgDACgFIAGgIIAYgUIAPgMIAMgIQAFgFADgFQADgGAAgFQAAgFgDgEQgDgFgFgCQgFgCgFAAQgNgBgIAKIgDAHIgFAJQgDADgFAAQgFAAgEgDQgDgCAAgFQAAgHADgGQADgGAGgFQAGgFAKgEQAJgDAMAAQAOAAALAEQAHADAFAFQAFAFADAFQADAHAAAHQAAAKgGAJQgGAIgHAEIgVAQQgNAKgGAHIgFAFIAzAAQAHAAAEADQAEADAAAEQAAAEgDADQgDADgHAAg");
	this.shape_1099.setTransform(-60,116.2);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f("#660000").s().p("AgaA8QgJgEgFgHQgFgGAAgGQAAgEADgDQADgCAFAAQAEAAAEACQADACACAFQACAEAFAEQAFACAGAAQAFAAAFgCQAFgCADgFQAHgJACgXQgHAGgIAEQgIADgIABQgJgBgIgDQgIgDgGgFQgGgGgDgHQgDgHAAgJQAAgIADgIQAEgIAGgFQAHgGAJgEQAJgDALAAQAMAAAJAEQAKAEAHAHQAHAJADALQAEAMAAAOQAAAPgEANQgEANgHAIQgHAJgKAEQgLAEgLAAQgNAAgKgEgAgSgnQgGAGAAAMQAAAMAGAGQAHAGAKAAQAFAAAFgCQAGgCADgGQAEgFAAgIQAAgFgCgFQgCgFgDgEQgEgDgEgCQgFgCgEAAQgJAAgHAHg");
	this.shape_1100.setTransform(-72.3,116.3);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#660000").s().p("AAMA8QgDgDAAgHIAAhMQgYAQgJAAQgEAAgDgDQgDgCAAgFQAAgDADgCIALgGQAMgFAHgFQAGgGAGgGIAHgIQABgCAFAAQAFAAADADQADAEAAAGIAABhQAAARgNAAQgGAAgEgEg");
	this.shape_1101.setTransform(-85.1,116.3);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f("#660000").s().p("AgPAKQgGAAgEgCQgEgDAAgFQAAgEADgDQAFgCAGAAIAfAAQAHAAAEACQADADAAAEQAAAFgDADQgEACgHAAg");
	this.shape_1102.setTransform(-93.2,118);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#660000").s().p("AgZA4QgMgHgGgMQgEgIgBgJQgBgIAAgKQAAgMABgKQACgLAEgHQAFgMALgHQALgGAPAAQAJAAAJADQAIADAGAFQAGAGAEAHQAIAPAAAZQAAAOgCAJQgCAKgFAJQgHAKgLAFQgKAGgNAAQgNAAgMgIgAgRgiQgFALAAAXQAAAPACALQACAKAFAFQAFAGAIAAQAJgBAFgFQAFgGACgJQACgLAAgPQAAgQgCgJQgCgLgFgFQgFgFgJAAQgMAAgFAMg");
	this.shape_1103.setTransform(-102.5,116.3);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f("#660000").s().p("AgaA7QgMgFgGgIQgGgKAAgKQAAgXAZgIQgUgIAAgSQAAgIAFgIQAGgHAKgFQAKgEAOAAQAKAAAJADQAJACAGAFQAGAFADAGQACAFAAAGQAAAJgEAHQgFAGgKAEQAIADAGAEQAFAFADAFQADAHAAAHQAAAKgGAKQgGAIgMAFQgLAFgQAAQgPAAgLgFgAgRAJQgGAGAAALQAAAGADAFQADAFAGADQAFACAGAAQAHAAAFgCQAGgDADgFQADgFAAgHQAAgGgDgGQgDgEgGgDQgGgDgGAAQgJAAgIAGgAgOgqQgGAFAAAIQAAAHAGAFQAGAFAIAAQAFAAADgCQAEgBADgCQADgCAAgEQACgDAAgDQAAgFgCgEQgDgEgFgCQgFgDgFAAQgJAAgFAFg");
	this.shape_1104.setTransform(-114.3,116.3);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#660000").s().p("AgaA7QgMgFgGgIQgGgKAAgKQAAgXAZgIQgUgIAAgSQAAgIAFgIQAGgHAKgFQAKgEAOAAQAKAAAKADQAIACAGAFQAGAFADAGQACAFABAGQgBAJgEAHQgFAGgKAEQAIADAGAEQAFAFADAFQADAHAAAHQAAAKgGAKQgGAIgLAFQgMAFgQAAQgPAAgLgFgAgQAJQgHAGAAALQAAAGADAFQADAFAFADQAGACAGAAQAHAAAFgCQAGgDADgFQADgFAAgHQAAgGgDgGQgDgEgGgDQgGgDgGAAQgKAAgGAGgAgOgqQgGAFAAAIQAAAHAGAFQAGAFAIAAQAFAAADgCQAEgBACgCQAEgCABgEQABgDAAgDQAAgFgCgEQgDgEgEgCQgFgDgGAAQgJAAgFAFg");
	this.shape_1105.setTransform(-126.2,116.3);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f("#660000").s().p("AAMA8QgDgDAAgHIAAhMQgYAQgJAAQgEAAgDgDQgDgCAAgFQAAgDADgCIALgGQAMgFAHgFQAGgGAGgGIAHgIQABgCAFAAQAFAAADADQADAEAAAGIAABhQAAARgNAAQgGAAgEgEg");
	this.shape_1106.setTransform(-139.3,116.3);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("#660000").s().p("AANBRQgEAAgCgDIgIgKQgHgLgFgLQgFgKgCgLQgDgLgBgOQAAgLADgMQACgLAGgLQAFgLAHgLIAIgKQACgCAEgBIAGgBQAGAAAAACIgFAJIgJASQgEAKgDAOQgDANgBAPQABAPADAOQADAOAEAKIAJASIAFAJQAAACgGAAIgGgBg");
	this.shape_1107.setTransform(-147.4,118);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f("#660000").s().p("AAZAsQgEgEAAgHIAAgmQAAgLgEgGQgDgGgLAAQgGAAgGADQgGAEgDAHQgCAFAAANIAAAdQAAAHgDAEQgFADgGAAQgFAAgEgDQgDgEgBgHIAAhCQABgHADgDQADgDAGAAIAGABIAFAEQABADABAEIAAADQAGgIAJgEQAIgDAKAAQALAAAIAEQAJAEADAHQADAEABAFIABANIAAAqQAAAHgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_1108.setTransform(-162.2,118);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f("#660000").s().p("AgVA8QgKgDgHgGQgHgHgEgIQgDgJAAgKQAAgLADgIQAEgIAHgGQAHgHAKgDQAKgEALAAQAMAAAKAEQAKADAHAHQAHAGADAIQAEAIAAALQAAAKgEAJQgDAIgHAHQgIAGgJAEQgKADgMAAQgLAAgKgEgAgNgJQgGADgDAHQgEAGAAAKQAAAJAEAGQADAIAGADQAGAEAHAAQAMAAAHgIQAHgIAAgOQAAgOgHgIQgHgHgMgBQgHABgGADgAgSgqIACgFIAEgGQAEgHADgBQADgCAFAAIANAAQAFAAAAABIgGAFIgLAKIgGAFQgGADgGAAQgBAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAgBg");
	this.shape_1109.setTransform(-174.3,116.3);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f("#660000").s().p("AgZA9QgLgDgGgGQgGgEAAgHQAAgDADgEQAEgCAEAAQAHAAAEAFIAFAEIAEAFIAHACIAJABQAJgBAGgCQAGgCADgFQACgFAAgEIAAgRQgGAHgHAEQgJAEgKAAQgNAAgKgGQgLgGgFgLQgFgKAAgOQAAgKADgJQAEgIAFgGQAGgFAJgDQAHgEAKAAQAKAAAJAFQAIADAHAIIAAgDQAAgGAEgDQADgEAFAAQAIAAADAFQACAEAAAIIAABDQAAAMgDAIQgCAJgHAFQgGAFgLADQgKADgOAAQgNAAgLgEgAgSgnQgGAIAAAOQgBAOAIAHQAHAGAKABQAGAAAHgEQAGgDAEgFQADgGAAgJQAAgOgHgJQgIgHgLgBQgKABgIAHg");
	this.shape_1110.setTransform(-186.8,119.7);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f("#660000").s().p("AgDBAIgJgEIgHgEIgHgHIAAADQAAAGgDAEQgEADgGAAQgFAAgEgDQgDgEAAgGIAAhlQAAgHADgEQAEgEAFAAQAHAAADAEQADADAAAHIAAAjQAIgHAIgDQAHgEALAAQANAAAKAGQAKAFAGALQAFAJAAAPQAAAKgDAJQgDAJgGAGQgGAHgIADQgIAEgKAAIgLgBgAgMgIQgGAEgDAGQgEAGAAAKQAAAOAIAHQAHAIALAAQAKAAAHgIQAIgHAAgPQAAgJgEgHQgDgFgFgEQgGgEgHAAQgHAAgGAEg");
	this.shape_1111.setTransform(-218.8,116.2);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f("#660000").s().p("AgdA8QgNgFgJgIQgJgJgFgMQgEgMAAgOQAAgOAFgMQAEgMAJgIQAJgJANgEQANgFAQAAQAWAAAQAIQAQAIAIAPQAIAOAAATQAAAOgEAMQgFAMgJAJQgJAJgNAEQgNAFgRAAQgQAAgNgFgAgQgpQgHADgFAGQgGAFgDAJQgDAIAAAKQAAAKADAJQADAJAGAFQAGAGAHADQAHADAIAAQALAAAJgFQAKgFAFgKQAGgKAAgPQAAgNgFgKQgFgKgKgFQgJgFgMAAQgIAAgIACg");
	this.shape_1112.setTransform(-233.2,116.2);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f("#660000").s().p("AggAsQgEgEAAgHIAAhAQAAgPANAAQAHAAADADQADAEAAAHQAFgHAFgEQAEgDAIAAQAJAAAIADQAIAEAAAGQAAAEgEADQgDADgEAAIgHgCIgKgBQgGAAgDACQgDADgCAFIgDANIgBARIAAATQAAAHgEAEQgEADgFAAQgGAAgEgDg");
	this.shape_1113.setTransform(-261.2,118);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f("#660000").s().p("AgIAtIgFgFIgFgKIgag2IgCgFIgBgEIgBgDIACgFIAEgEQADgBAEAAQAGAAADADIAFALIAVA0IAXg2IAGgKQACgCAGAAQAFAAADADQAEADAAADIgBAEIgBAEIgCAEIgaA3IgCAGIgEAGIgFAEQgEABgEAAQgFAAgDgCg");
	this.shape_1114.setTransform(-283.3,118);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f("#660000").s().p("AAuBPIgEgDIgEgFIgDgHIgHgQIg4AAIgIAQQgDAJgEAEQgCADgHAAQgFAAgFgEQgDgDAAgEIABgGIACgHIAlhRIAEgIQACgFADgDQACgDAEgCQAFgCAFgBQAGABADACQAFACACADIAEAHIAFAJIAlBQQAFAJAAAFQgBAEgEADQgEAEgGAAIgGgBgAgVAdIApAAIgUgzgAgTg5IADgFIAFgHQADgHADgBQADgCAEAAIAOAAQAFAAAAABIgFAGIgLAKIgHAEQgGADgHAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAg");
	this.shape_1115.setTransform(-301.3,114.7);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgcQgHAFgDAGQgEAIABAJQgBAKAEAHQADAHAHAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNAAQgHAAgHADg");
	this.shape_1116.setTransform(-244,214.1);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgCQgFAFgGAEQgGADgGACQgGACgIABQgKgBgJgEQgIgEgHgGQgGgIgEgJQgDgJAAgLQAAgXAOgNQANgNAUAAQAMAAAJAEQAIAEAIAHIAAglQAAgHAEgEQADgFAGAAQAHABADADQAEAEAAAHIAABtQAAAHgEADQgEAEgGABQgFgBgEgEgAgNgIQgGADgDAGQgEAIAAAKQAAAJAEAIQADAGAHAEQAFAEAHAAQAHAAAHgEQAGgDAEgHQAEgHgBgKQABgLgEgHQgEgGgGgEQgHgEgHAAQgHAAgGAFg");
	this.shape_1117.setTransform(-257.6,212.3);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f("#660000").s().p("AAaAvQgEgEAAgIIAAgoQAAgMgDgHQgFgGgLAAQgHAAgGADQgHAFgDAHQgCAFAAAPIAAAeQAAAIgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgEQAEgDAGAAQAEAAADACIAFAEQACADAAAFIAAADQAIgIAJgFQAHgEAMAAQALAAAJAEQAJAFAFAIQACAEABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_1118.setTransform(-270.4,214.1);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgDIgLAKQgFAEgHACQgGABgJAAQgKAAgIgDQgIgEgEgHQgGgHAAgPIAAgxQAAgIAEgDQAEgEAGAAQAHAAAEAEQADADAAAIIAAAnQABAJABAFQACAHAEADQAEADAIABQAGAAAHgFQAGgDADgHQADgFgBgQIAAgfQAAgIAFgDQAEgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAIgEADQgEAEgFAAQgHAAgDgEg");
	this.shape_1119.setTransform(-283.4,214.1);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f("#660000").s().p("AA4AvQgEgEAAgIIAAgpIgBgNQAAgFgEgDQgEgDgGAAQgGAAgFACQgFADgDAFQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgEgEQgFgEAAgIIAAgnIgBgPQAAgEgDgEQgDgDgIAAQgOAAgEAIQgEAIAAAQIAAAhQAAAIgFAEQgEAEgGAAQgHAAgEgEQgEgEAAgIIAAhHQAAgGAEgEQAEgEAFAAQAHAAADADQAFAEAAAGIAAACQAHgHAIgEQAJgEAKABQALgBAIAEQAHAEAEAHQAIgHAIgEQAJgEAKABQALAAAIADQAJAFAEAHQAEAGAAAPIAAAwQAAAIgEAEQgEAEgHAAQgHAAgEgEg");
	this.shape_1120.setTransform(-299,214.1);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAGgKAFQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAIgHQAHgGANgDIAOgCIARgEIAQgDQAAgLgEgEQgEgFgNABQgKgBgFADQgFADgFAFIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHADAIIACAJQAAAFgEADQgFADgEAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAFAEQAFADAHAAQAIABAIgEQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_1121.setTransform(271.9,189.9);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f("#660000").s().p("AAgAvQgEgEgFgGQgKAGgJAFQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAHgHQAIgGANgDIANgCIASgEIARgDQgBgLgEgEQgEgFgMABQgKgBgGADQgFADgEAFIgGAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAGgHQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHADAIIADAJQAAAFgEADQgFADgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAEAEQAFADAJAAQAHABAHgEQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_1122.setTransform(253.8,189.9);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAGgKAFQgIADgMAAQgLAAgJgEQgIgEgFgGQgEgHAAgIQAAgKAHgHQAIgGANgDIANgCIASgEIAQgDQAAgLgEgEQgEgFgMABQgKgBgGADQgFADgEAFIgGAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAGgHQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHADAIIADAJQAAAFgEADQgFADgFAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAEAEQAGADAIAAQAHABAHgEQAIgDADgFQADgGAAgNIAAgDIgSAEg");
	this.shape_1123.setTransform(226,189.9);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f("#660000").s().p("AgaAvQgLgFgGgFQgFgHAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAGQAFAGAGAEQAGACAKAAQAIAAAFgCQAGgEAAgFQAAgGgGgDQgFgDgNgDQgPgDgIgDQgKgDgFgGQgGgGAAgIQAAgIAFgGQAGgHAKgEQAJgEAOAAQALAAAIACQAKACAFAEQAGADADAEQADAEAAAEQAAAEgDADQgEADgFAAQgEAAgEgDIgHgGQgDgDgEgCQgFgDgHAAQgHAAgFADQgGADAAAEQABAEADACIALAFIAQAEQANADAJADQAIADAFAGQAEAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgPAAgKgEg");
	this.shape_1124.setTransform(206.2,189.9);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgEIgKAKQgHAEgGACQgGACgJgBQgKAAgIgDQgIgEgFgGQgFgJAAgPIAAgwQAAgIAEgDQAEgEAGAAQAHAAADAEQAEADABAIIAAAnQAAAJABAGQACAGAEADQAFADAHABQAHgBAFgDQAHgEADgHQADgFAAgQIAAgfQAAgIAEgDQADgEAHAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgDAEgHAAQgFAAgEgEg");
	this.shape_1125.setTransform(188.2,189.9);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f("#660000").s().p("AAgBBQgDgFAAgHIAAgjQgIAHgJADQgJAFgKAAQgNAAgLgHQgLgGgHgMQgGgKAAgQQAAgPAGgMQAHgLALgGQALgGAOAAQAKAAAJAEQAJAEAHAIIAAgCQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABrQAAAQgOABQgIgBgCgEgAgTgqQgHAJAAAPQAAAKAEAIQADAGAGADQAGAEAHAAQAHAAAHgEQAGgDAEgGQAEgIAAgKQAAgHgDgHQgCgGgEgEQgEgDgFgCQgFgCgFgBQgLABgIAHg");
	this.shape_1126.setTransform(174.6,191.8);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAHgKADQgLAEgNAAQgMAAgLgEgAgOgcQgHAFgDAHQgEAHABAJQgBAKAEAHQADAHAHAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNAAQgHAAgHADg");
	this.shape_1127.setTransform(94,189.9);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f("#660000").s().p("AA4AvQgEgEAAgIIAAgpIgBgNQAAgFgEgDQgEgDgGgBQgGAAgFADQgFAEgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgEgEQgFgEAAgIIAAgnIAAgPQgBgFgDgDQgDgDgIgBQgOABgEAIQgEAIAAAQIAAAhQAAAIgFAEQgEAEgGAAQgHAAgEgEQgEgEAAgIIAAhHQAAgGAEgEQAEgEAFAAQAHAAADADQAFAEAAAGIAAADQAHgJAIgDQAJgDAKAAQALAAAIADQAHAEAEAIQAIgIAIgEQAJgDAKAAQALAAAIADQAJAFAEAHQAEAHAAAOIAAAwQAAAIgEAEQgEAEgHAAQgHAAgEgEg");
	this.shape_1128.setTransform(78.1,189.9);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#660000").s().p("AgaAvQgLgFgGgFQgFgHAAgGQAAgEADgDQADgDAGAAQAEAAACACIAFAGQAFAGAGAEQAGACAKAAQAIAAAFgCQAGgEAAgFQAAgGgGgDQgGgDgMgDQgPgDgIgDQgKgDgGgGQgFgGAAgIQAAgIAFgGQAGgHAKgEQAJgEAOAAQAKAAAKACQAIACAGAEQAGADADAEQADAEABAEQAAAEgEADQgEADgGAAQgDAAgEgDIgHgGQgDgDgEgCQgFgDgHAAQgHAAgFADQgFADgBAEQAAAEAEACIALAFIAQAEQANADAJADQAIADAFAGQAEAFAAAHQAAAKgGAIQgFAHgMAEQgLAEgPAAQgQAAgKgEg");
	this.shape_1129.setTransform(31.7,189.9);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f("#660000").s().p("AgDBEIgKgEIgHgEIgIgHIAAACQAAAHgDADQgFAFgGAAQgGAAgDgFQgEgDAAgHIAAhsQAAgHADgEQAEgFAGAAQAHAAAEAFQADADAAAHIAAAmQAIgHAJgEQAIgEALAAQAOAAAMAGQAKAGAGALQAGAKAAAQQAAALgEAJQgCAKgHAGQgGAIgJADQgJAFgLAAQgHAAgEgCgAgMgIQgHADgEAGQgDAIgBAKQAAAPAIAIQAIAIAMAAQALAAAHgIQAIgJAAgPQAAgJgDgIQgDgGgGgDQgGgEgIgBQgIABgFAEg");
	this.shape_1130.setTransform(-2.1,188.1);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#660000").s().p("AA5AvQgFgEAAgIIAAgpIgBgNQgBgFgDgDQgDgDgIgBQgFAAgFADQgFAEgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgFgEQgDgEAAgIIAAgnIgBgPQgBgFgDgDQgDgDgIgBQgOABgEAIQgFAIABAQIAAAhQgBAIgEAEQgDAEgHAAQgGAAgEgEQgFgEAAgIIAAhHQAAgGAEgEQADgEAHAAQAGAAAEADQADAEAAAGIAAADQAIgJAIgDQAJgDAKAAQALAAAHADQAHAEAGAIQAGgIAJgEQAJgDAJAAQAMAAAJADQAIAFAEAHQAEAHAAAOIAAAwQAAAIgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_1131.setTransform(-18.5,189.9);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f("#660000").s().p("AAXA2IAAgqQAAgMgFgGQgDgGgMAAQgGAAgHAEQgGAEgDAFQgCAGAAAOIAAAhQAAAIgEADQgEAFgHAAQgOAAAAgQIAAhrQAAgIAEgDQAEgFAGAAQAHAAAEAFQAEADAAAIIAAAlQAFgGAFgDQAFgDAGgBQAGgDAIAAQALAAAIAFQAIAEAFAHQADAFABAFIABAMIAAAwQAAAIgEADQgEAFgGAAQgOAAAAgQg");
	this.shape_1132.setTransform(-47.4,188.1);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#660000").s().p("AgkBEQgIAAgFgFQgEgDAAgFQAAgEADgFQADgFADgDIAZgWIAQgMIAOgJQAFgGADgGQADgFAAgGQAAgFgDgFQgDgFgGgDQgFgCgGAAQgNAAgIAKIgEAIQgCAGgDADQgDAEgGAAQgGAAgDgDQgDgDAAgGQAAgGADgGQADgIAHgFQAGgGAKgDQAKgDANAAQAPAAALAEQAIADAFAFQAGAFADAHQADAHAAAGQAAAMgGAJQgHAIgHAGIgWARQgPALgGAGIgFAGIA2AAQAIAAAEADQAFADAAAFQAAAFgEADQgDADgHAAg");
	this.shape_1133.setTransform(-65.4,188);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgKgEgAgOgcQgHAFgDAHQgEAHAAAJQAAAKAEAHQADAHAHAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNAAQgIAAgGADg");
	this.shape_1134.setTransform(-96.7,189.9);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgEIgKAKQgHAEgGACQgGACgJgBQgKAAgIgDQgIgEgFgGQgFgJAAgPIAAgwQAAgIAEgDQAEgEAGAAQAHAAADAEQAEADABAIIAAAnQAAAJABAGQACAGAEADQAFADAHABQAHgBAFgDQAHgEADgHQADgFAAgQIAAgfQAAgIADgDQAEgEAHAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgDAEgHAAQgFAAgEgEg");
	this.shape_1135.setTransform(-140.3,189.9);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f("#660000").s().p("AAgBBQgDgFAAgHIAAgjQgIAHgJADQgJAFgKAAQgNAAgLgHQgLgGgHgMQgGgKAAgQQAAgPAGgMQAHgLALgGQALgGAOAAQAKAAAJAEQAJAEAHAIIAAgCQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABrQAAAQgOABQgIgBgCgEgAgTgqQgHAJAAAPQAAAKAEAIQADAGAGADQAGAEAHAAQAHAAAHgEQAGgDAEgGQAEgIAAgKQAAgHgDgHQgCgGgEgEQgEgDgFgCQgFgCgFgBQgLABgIAHg");
	this.shape_1136.setTransform(-153.9,191.8);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgLgEgAgOgcQgGAFgEAHQgDAHAAAJQAAAKADAHQAEAHAGAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNAAQgHAAgHADg");
	this.shape_1137.setTransform(-172.1,189.9);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f("#660000").s().p("AgWBUQgHgDAAgGQAAgEAEgDQACgDAGAAIACAAIADAAIAFABQAFAAACgEQABgEAAgKIAAhTQAAgIAEgDQAEgFAGAAQAHAAADAFQAFADAAAIIAABTIgBAPIgCAIQgHAQgXABQgNAAgGgEgAAFhBQgEgDAAgGQAAgGAEgDQAFgEAFAAQAGAAAEAEQAFADAAAGQAAAGgFADQgEADgGAAQgFAAgFgDg");
	this.shape_1138.setTransform(-183,190);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAHgKADQgLAEgNAAQgMAAgKgEgAgOgcQgGAFgEAHQgDAHgBAJQABAKADAHQAEAHAGAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNAAQgIAAgGADg");
	this.shape_1139.setTransform(-228.4,189.9);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f("#660000").s().p("AgJBBQgEgDAAgIIAAhrQAAgIADgDQAEgFAGAAQAGAAAEAFQAEADAAAIIAABrQAAAIgEADQgEAFgGAAQgGAAgDgFg");
	this.shape_1140.setTransform(-250.5,188.1);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#660000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgIAEgDQADgEAHAAQAFAAAFAFQADADAAAHIAAACQAIgIAJgEQAIgEAKAAQAOAAALAGQALAGAHALQAGAMAAAPQAAAMgEAIQgEAKgGAGQgHAHgJAEQgIAEgLAAQgLAAgIgFQgJgFgHgHIAAAlQAAARgNAAQgJgBgCgEgAgTgqQgHAJgBAPQABAPAHAIQAJAIAKAAQAIAAAGgEQAGgEADgFQAEgIAAgKQAAgKgDgHQgEgHgGgEQgGgEgIAAQgKABgJAHg");
	this.shape_1141.setTransform(-272.8,191.8);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAGgKAFQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAIgHQAHgGANgDIANgCIASgEIAQgDQAAgLgEgEQgEgFgMABQgLgBgFADQgGADgEAFIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHAEAIIACAJQAAAFgEADQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAEAEQAFADAJAAQAHABAIgEQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_1142.setTransform(-285.9,189.9);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f("#660000").s().p("AAoBFIgHgEIgFgFIgFgGIg5hOIAABOQAAAHgFAEQgDAFgHAAQgGAAgFgFQgDgEAAgHIAAhnQAAgHACgDQACgFAEgCQAEgCAGgBIAHABIAFAEIAFAFIAFAHIA7BOIAAhPQAAgHADgEQAEgFAHAAQAGAAAEAFQAFAEAAAHIAABpQgBASgRAAIgHgBg");
	this.shape_1143.setTransform(-300.4,188.1);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgcQgGAFgEAGQgDAIgBAJQABAKADAHQAEAHAGAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgIAAgGADg");
	this.shape_1144.setTransform(246.8,165.8);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#660000").s().p("AgaAuQgMgDgFgHQgFgGAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAGQAEAGAHAEQAGACAJAAQAJAAAGgCQAFgEAAgEQAAgHgFgDQgGgDgMgDQgQgDgIgEQgKgCgGgGQgFgGAAgIQAAgHAFgHQAFgHALgEQAKgEAOAAQAJAAAKACQAIACAGADQAGAEADAEQAEAEAAAEQgBAEgDADQgDADgHAAQgEAAgDgCIgHgHQgDgEgEgBQgFgDgGAAQgJAAgFADQgEADAAAEQAAAEADACIAKAFIARAEQANACAJAFQAIADAFAFQAEAFAAAHQAAAKgGAIQgFAHgMAEQgLAEgPAAQgPAAgLgFg");
	this.shape_1145.setTransform(234.4,165.8);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgCIgLAJQgFAEgHACQgGABgJABQgKgBgIgDQgIgEgEgHQgGgHAAgPIAAgxQAAgHAEgEQADgEAHAAQAHAAAEAEQADAEAAAHIAAAnQAAAJACAFQACAHAEADQAFAEAHAAQAHAAAFgFQAHgDADgHQACgEAAgRIAAgfQAAgHAFgEQAEgEAGAAQAGAAAEAEQAEAEAAAHIAABHQAAAIgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_1146.setTransform(222.2,165.8);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#660000").s().p("AgJBCQgEgEAAgIIAAhrQAAgIADgEQAEgDAGAAQAGAAAEADQAEAEAAAIIAABrQAAAIgEAEQgEADgGAAQgGAAgDgDg");
	this.shape_1147.setTransform(212.8,163.9);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f("#660000").s().p("AgOAaQAAAAgBgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgFAFgCQALgFAAgKQgGABgFgDQgFgEAAgGQAAgHAFgDQAFgFAGAAQAFABAEACQAEACACAFQACAEAAAIQAAAHgEAIQgEAJgHAEQgFAFgFgBQgEAAgCgBg");
	this.shape_1148.setTransform(170.2,170.8);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgcQgHAFgDAGQgEAIAAAJQAAAKAEAHQADAHAHAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgIAAgGADg");
	this.shape_1149.setTransform(161.1,165.8);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f("#660000").s().p("AAdAxQgEgDgEgFIgVgbIgUAbIgIAIQgDACgFAAQgFAAgFgDQgDgDAAgEQAAgEAGgIIAageIgYgbQgFgIgBgEQAAgEAEgDQADgDAHAAQAEAAAEADIAIAIIARAVIASgVIAIgIQADgDAFAAQAGAAADADQAEADAAAEIgBAFIgFAHIgXAbIAaAeQAGAJAAADQAAAEgDADQgFADgFAAQgFAAgDgCg");
	this.shape_1150.setTransform(130.6,165.8);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#660000").s().p("AAxBAQgDgEAAgHIAAhcIgZBVIgEAMQgCAEgDADQgFADgHAAQgFAAgDgCQgEgCgCgDIgDgHIgDgIIgYhVIAABcQgBAHgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgHIAAhqQAAgIAFgDQAGgDAJAAIAJAAIAMABQAFABACAEIADALIAWBJIAWhJIAFgLQACgEADgBIANgBIAKAAQAIAAAGADQAFADAAAIIAABqQAAAHgEAEQgEAEgHAAQgGAAgEgEg");
	this.shape_1151.setTransform(103.6,164);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgFAHgGADQgGADgHACQgFACgHAAQgLAAgIgDQgKgEgGgHQgGgIgEgJQgDgKAAgKQAAgXANgNQANgNAWAAQALAAAIADQAJAFAIAHIAAglQAAgHADgFQAEgDAHAAQAGAAAEADQADADAAAIIAABtQAAAHgDAEQgFADgFAAQgGAAgEgDgAgNgIQgHADgDAHQgDAGAAALQAAAJADAIQAEAGAGAFQAHADAGAAQAHAAAHgDQAGgEAEgHQADgHABgKQgBgKgDgIQgEgGgGgEQgHgDgHgBQgHAAgGAFg");
	this.shape_1152.setTransform(69.6,163.9);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f("#660000").s().p("AgaAuQgLgDgGgHQgFgGAAgGQAAgEADgDQADgDAGAAQAEAAACACIAFAGQAFAGAGAEQAGACAKAAQAIAAAFgCQAGgEAAgEQAAgHgGgDQgGgDgMgDQgPgDgIgEQgKgCgFgGQgGgGAAgIQAAgHAFgHQAGgHAKgEQAJgEAOAAQAKAAAKACQAIACAGADQAGAEADAEQADAEABAEQAAAEgEADQgEADgGAAQgDAAgEgCIgHgHQgDgEgEgBQgFgDgHAAQgHAAgFADQgFADgBAEQAAAEAEACIALAFIAQAEQANACAJAFQAIADAFAFQAEAFAAAHQAAAKgGAIQgFAHgMAEQgLAEgPAAQgQAAgKgFg");
	this.shape_1153.setTransform(52,165.8);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f("#660000").s().p("AAgAvQgDgDgGgIQgKAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAIgIQAHgGANgCIANgDIASgEIAQgDQAAgKgEgFQgEgFgMAAQgLAAgFADQgGADgEAFIgFAHQgBACgGAAQgFAAgDgDQgEgCAAgFQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHAEAIIACAKQAAADgEADQgEAEgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAFAEAFQAFAEAJgBQAHAAAIgDQAGgDAEgFQAEgGgBgNIAAgEIgSAFg");
	this.shape_1154.setTransform(18.3,165.8);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgHAEgEQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEAEAAAGQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_1155.setTransform(1.5,164);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f("#660000").s().p("AgJBCQgEgEAAgIIAAhrQAAgIADgEQAEgDAGAAQAGAAAEADQAEAEAAAIIAABrQAAAIgEAEQgEADgGAAQgGAAgDgDg");
	this.shape_1156.setTransform(-4.3,163.9);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgHAEgEQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEAEAAAGQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_1157.setTransform(-10.1,164);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f("#660000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgBgEgEgEQgDgEgIABQgFAAgFACQgFAEgDAFQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgGAAgDgEQgEgEgBgIIAAgnIgBgOQAAgFgDgEQgEgEgGABQgOgBgFAJQgEAJgBAOIAAAiQAAAIgDAEQgFAEgGAAQgGAAgFgEQgEgEAAgIIAAhHQAAgGAEgEQADgEAGAAQAGAAAFAEQADADAAAGIAAACQAIgHAJgEQAIgDAKAAQALAAAIADQAGAEAFAHQAIgHAIgEQAIgDAKAAQAMAAAIADQAJAEAEAIQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgGAAgFgEg");
	this.shape_1158.setTransform(-22.4,165.8);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgcQgHAFgDAGQgDAIgBAJQABAKADAHQADAHAHAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgHAAgHADg");
	this.shape_1159.setTransform(-55.4,165.8);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgHAEgEQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEAEAAAGQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_1160.setTransform(-64.8,164);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f("#660000").s().p("AgbBCQgMgEgGgGQgGgFAAgGQAAgFADgDQAEgCAFAAQAGgBAFAFIAFAFIAFAEIAHADIAKABQAKAAAGgDQAGgCADgGQACgEABgGIAAgSQgGAJgJAEQgJAEgLAAQgOAAgLgHQgKgGgGgMQgGgKAAgPQAAgLAEgKQADgJAHgGQAGgGAJgDQAIgDAKAAQALAAAJAEQAJAEAIAJIAAgDQAAgHAEgEQADgDAGgBQAIAAADAGQADAEAAAJIAABHQAAANgDAJQgDAJgHAGQgHAFgLADQgKADgQAAQgOAAgMgDgAgTgqQgHAIAAAQQAAAPAHAGQAIAJALgBQAHAAAHgDQAGgEAEgFQAEgHAAgJQAAgQgIgIQgIgJgMAAQgLAAgIAIg");
	this.shape_1161.setTransform(-99.9,167.6);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f("#660000").s().p("AgbAuQgKgDgGgHQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAACACIAFAGQAEAGAHAEQAGACAKAAQAIAAAFgCQAGgEAAgEQAAgHgGgDQgFgDgNgDQgOgDgKgEQgJgCgFgGQgGgGAAgIQAAgHAFgHQAGgHAJgEQALgEANAAQALAAAIACQAJACAHADQAFAEAEAEQACAEAAAEQABAEgEADQgEADgFAAQgFAAgDgCIgHgHQgDgEgFgBQgEgDgHAAQgIAAgEADQgGADAAAEQABAEADACIALAFIAQAEQAOACAIAFQAIADAEAFQAFAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgPAAgLgFg");
	this.shape_1162.setTransform(-117.5,165.8);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f("#660000").s().p("AAaAvQgDgEAAgIIAAgoQAAgNgFgGQgDgHgMABQgHAAgGADQgHAEgDAHQgBAGAAAPIAAAeQAAAIgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgDQAEgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAIgJAIgEQAIgEAMAAQALAAAJAEQAJAFAEAHQADAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_1163.setTransform(-155.9,165.8);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f("#660000").s().p("AAhAvQgFgDgEgIQgLAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAIgIQAHgGANgCIAOgDIARgEIAQgDQAAgKgEgFQgEgFgNAAQgKAAgFADQgFADgFAFIgFAHQgBACgGAAQgFAAgDgDQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHADAIIACAKQAAADgEADQgEAEgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAFAFAFQAFAEAHgBQAIAAAIgDQAGgDAEgFQADgGAAgNIAAgEIgSAFg");
	this.shape_1164.setTransform(-168.7,165.8);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f("#660000").s().p("AgbBCQgMgEgGgGQgGgFAAgGQAAgFADgDQAEgCAFAAQAGgBAFAFIAFAFIAFAEIAHADIAKABQAKAAAGgDQAGgCADgGQACgEABgGIAAgSQgGAJgJAEQgJAEgLAAQgOAAgLgHQgKgGgGgMQgGgKAAgPQAAgLAEgKQADgJAHgGQAGgGAJgDQAIgDAKAAQALAAAJAEQAJAEAIAJIAAgDQAAgHAEgEQADgDAGgBQAIAAADAGQADAEAAAJIAABHQAAANgDAJQgDAJgHAGQgHAFgLADQgKADgQAAQgOAAgMgDgAgTgqQgHAIAAAQQAAAPAHAGQAIAJALgBQAHAAAHgDQAGgEAEgFQAEgHAAgJQAAgQgIgIQgIgJgMAAQgLAAgIAIg");
	this.shape_1165.setTransform(-190.7,167.6);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f("#660000").s().p("AgbAuQgLgDgFgHQgFgGAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAGQAEAGAHAEQAGACAJAAQAJAAAGgCQAFgEAAgEQAAgHgFgDQgHgDgLgDQgPgDgKgEQgJgCgGgGQgFgGAAgIQAAgHAFgHQAFgHAKgEQALgEAOAAQAJAAAKACQAJACAGADQAFAEAEAEQADAEAAAEQgBAEgDADQgDADgHAAQgEAAgDgCIgHgHQgDgEgFgBQgEgDgGAAQgIAAgGADQgEADAAAEQgBAEAEACIAKAFIARAEQANACAJAFQAIADAEAFQAFAFAAAHQAAAKgGAIQgFAHgMAEQgLAEgPAAQgPAAgMgFg");
	this.shape_1166.setTransform(-208.3,165.8);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f("#660000").s().p("AgJBCQgEgEAAgIIAAhrQAAgIADgEQAEgDAGAAQAGAAAEADQAEAEAAAIIAABrQAAAIgEAEQgEADgGAAQgGAAgDgDg");
	this.shape_1167.setTransform(-229.9,163.9);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADADAAAEQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_1168.setTransform(-244.5,165.8);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgcQgGAFgEAGQgDAIgBAJQABAKADAHQAEAHAGAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgIAAgGADg");
	this.shape_1169.setTransform(-276.1,165.8);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f("#660000").s().p("AAaAvQgDgEAAgIIAAgoQAAgNgFgGQgDgHgMABQgHAAgGADQgHAEgDAHQgBAGAAAPIAAAeQAAAIgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgDQAEgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAIgJAIgEQAIgEAMAAQALAAAJAEQAJAFAEAHQADAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_1170.setTransform(-289.1,165.8);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgCIgKAJQgHAEgGACQgGABgIABQgLgBgIgDQgIgEgFgHQgFgHAAgPIAAgxQAAgHAEgEQADgEAHAAQAGAAAEAEQAFAEAAAHIAAAnQgBAJACAFQACAHAFADQADAEAIAAQAGAAAHgFQAGgDADgHQACgEABgRIAAgfQAAgHADgEQAFgEAGAAQAGAAAEAEQAEAEAAAHIAABHQAAAIgEADQgDAEgGAAQgHAAgDgEg");
	this.shape_1171.setTransform(-302,165.8);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgDIgLAKQgGAEgGACQgGABgJABQgKgBgIgDQgIgEgEgHQgGgHAAgPIAAgxQAAgIAEgDQADgEAHAAQAHAAADAEQAEADAAAIIAAAnQAAAJACAFQACAHAEADQAFADAHABQAHAAAFgFQAHgDADgHQACgEAAgRIAAgfQABgIAEgDQADgEAHAAQAGAAAEAEQAEADAAAIIAABHQAAAIgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_1172.setTransform(238.9,141.6);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f("#660000").s().p("AgPBCQgEgEAAgIIAAhBIgIAAQgHAAgDgDQgEgCAAgEQAAgJAPAAIAHAAIAAgHQAAgNADgGQADgHAJgEQAHgCAOAAQAZAAAAAKQAAADgDADQgCADgEgBIgGAAIgHAAQgHgBgDAEQgCAFAAAHIAAAGIAHAAQARAAAAAIQAAAHgFABQgEACgIAAIgHAAIAABBQAAAIgEAEQgEADgFAAQgGAAgEgDg");
	this.shape_1173.setTransform(229.2,139.7);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgCQgGAGgFADQgGADgHACQgFACgHAAQgLAAgJgDQgIgFgHgGQgGgIgDgJQgEgKAAgKQAAgXAOgNQANgNAVAAQALAAAJAEQAIAEAIAHIAAglQAAgHADgFQAEgEAGABQAHAAADADQAEAEAAAHIAABtQAAAHgEAEQgDADgHAAQgFAAgEgDgAgNgIQgGADgDAHQgEAGAAALQAAAKAEAHQADAHAGAEQAGADAHAAQAIAAAGgDQAGgEAEgHQAEgHAAgKQAAgKgEgIQgEgGgGgEQgGgDgIgBQgHAAgGAFg");
	this.shape_1174.setTransform(139.1,139.7);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f("#660000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgHADgEQAFgDAGgBQAFAAAFAFQADADAAAHIAAACQAIgIAJgEQAIgEAKAAQAOAAALAGQALAGAHALQAGAMAAAQQAAALgEAIQgDAKgHAHQgGAGgKAEQgIADgLAAQgLABgIgFQgIgFgIgHIAAAlQAAAQgNABQgJAAgCgFgAgTgqQgHAJgBAQQABAPAHAGQAJAJAKAAQAIAAAGgDQAGgEAEgGQADgIAAgKQAAgKgDgHQgEgHgFgEQgHgDgIgBQgKABgJAHg");
	this.shape_1175.setTransform(100.6,143.4);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgCQgFAGgGADQgGADgHACQgFACgHAAQgLAAgIgDQgKgFgGgGQgGgIgEgJQgDgKAAgKQAAgXANgNQANgNAWAAQALAAAIAEQAJAEAIAHIAAglQAAgHADgFQAEgEAHABQAGAAAEADQADAEAAAHIAABtQAAAHgDAEQgFADgFAAQgGAAgEgDgAgNgIQgHADgDAHQgDAGAAALQAAAKADAHQAEAHAGAEQAHADAGAAQAHAAAHgDQAGgEAEgHQADgHABgKQgBgKgDgIQgEgGgGgEQgHgDgHgBQgHAAgGAFg");
	this.shape_1176.setTransform(74.1,139.7);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f("#660000").s().p("AAbAvQgEgEAAgIIAAgoQgBgNgEgGQgDgGgMAAQgHAAgGADQgGAFgDAGQgCAGAAAPIAAAeQgBAIgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgDQADgEAGAAQAEAAADACIAFAEQACAEAAAEIAAADQAIgJAIgEQAIgEAMAAQALAAAJAEQAJAFAEAHQADAFABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgHAAgDgEg");
	this.shape_1177.setTransform(61.3,141.6);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgCQgGAGgFADQgGADgHACQgFACgHAAQgLAAgJgDQgIgFgHgGQgGgIgDgJQgEgKAAgKQAAgXAOgNQANgNAVAAQALAAAJAEQAIAEAIAHIAAglQAAgHADgFQAEgEAGABQAHAAADADQAEAEAAAHIAABtQAAAHgEAEQgDADgHAAQgFAAgEgDgAgNgIQgGADgDAHQgEAGAAALQAAAKAEAHQADAHAGAEQAGADAHAAQAIAAAGgDQAGgEAEgHQAEgHAAgKQAAgKgEgIQgEgGgGgEQgGgDgIgBQgHAAgGAFg");
	this.shape_1178.setTransform(23.9,139.7);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f("#660000").s().p("AAhAvQgFgDgEgIQgLAHgKAFQgIADgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAIgIQAHgGANgCIANgDIASgEIAQgDQAAgLgEgEQgEgFgNABQgKAAgFACQgGADgEAFIgFAHQgBACgGAAQgFAAgDgDQgEgDAAgEQAAgGAGgHQAFgGALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAJAAAOIAAAOIgBANQABAHADAIIACAKQAAADgEAEQgEADgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAFAEQAEADAIAAQAIAAAIgDQAGgDAEgFQAEgGgBgNIAAgEIgSAFg");
	this.shape_1179.setTransform(5.8,141.6);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f("#660000").s().p("AAWA2IAAgqQAAgMgDgFQgFgHgLAAQgHAAgFAEQgHADgDAGQgCAGAAAOIAAAhQAAAIgEAEQgEADgGAAQgPAAAAgPIAAhrQAAgIAEgEQADgEAIABQAGgBAEAEQAEAEAAAIIAAAlQAFgFAFgEQAGgDAFgCQAGgCAHAAQALAAAJAFQAIADAFAJQADAEABAGIABALIAAAwQAAAIgEAEQgEADgGAAQgPAAAAgPg");
	this.shape_1180.setTransform(-7,139.7);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgDIgLAKQgFAEgHACQgGABgJABQgKgBgIgDQgIgEgEgHQgGgHAAgPIAAgxQAAgIAEgDQAEgEAGAAQAGAAAFAEQADADAAAIIAAAnQABAJABAFQACAHAEADQAEADAIABQAGAAAHgFQAGgDADgHQADgEgBgRIAAgfQAAgIAFgDQAEgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAIgEADQgEAEgFAAQgGAAgEgEg");
	this.shape_1181.setTransform(-32.2,141.6);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f("#660000").s().p("AAgAvQgDgDgGgIQgKAHgKAFQgIADgMAAQgLAAgJgEQgIgEgFgHQgEgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgEIAQgDQAAgLgEgEQgEgFgMABQgKAAgGACQgFADgEAFIgGAHQgCACgFAAQgFAAgDgDQgEgDAAgEQAAgGAGgHQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAJAAAOIAAAOIgBANQAAAHADAIIADAKQAAADgEAEQgFADgFAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAEAEQAGADAIAAQAHAAAHgDQAIgDADgFQADgGAAgNIAAgEIgSAFg");
	this.shape_1182.setTransform(-56.1,141.6);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgcQgHAEgDAHQgEAIABAJQgBAKAEAHQADAHAHAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgIAAgGADg");
	this.shape_1183.setTransform(-80.1,141.6);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f("#660000").s().p("AgvBDQgGgCAAgHQAAgEADgCQADgDAGAAIAEABIAFAAQAFAAADgBQACgBADgDIAFgJIADgGIgkhMQgDgHAAgEIACgFQACgDADgCQADgCAEAAQAGABADADQAEAEACAGIAXA8IAXg4IAFgKQACgEADgCQACgBAFgBIAGACQADACACADIABAEIgBAGIgDAGIglBUQgFALgEAHQgEAGgHAEQgIAEgNAAQgNAAgGgDg");
	this.shape_1184.setTransform(-92.3,143.4);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgcQgHAEgDAHQgEAIABAJQgBAKAEAHQADAHAHAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgIAAgGADg");
	this.shape_1185.setTransform(-104,141.6);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f("#660000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgHADgEQAFgDAFgBQAHAAADAFQAEADAAAHIAAACQAJgIAIgEQAJgEAKAAQANAAALAGQALAGAHALQAGAMAAAQQAAALgDAIQgEAKgHAHQgGAGgKAEQgIADgKAAQgLABgJgFQgJgFgHgHIAAAlQAAAQgOABQgHAAgDgFgAgSgqQgJAJAAAQQAAAPAJAGQAHAJALAAQAIAAAGgDQAGgEAEgGQADgIAAgKQAAgKgDgHQgEgHgFgEQgHgDgIgBQgKABgIAHg");
	this.shape_1186.setTransform(-116.9,143.4);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f("#660000").s().p("AAgAvQgEgDgFgIQgKAHgJAFQgJADgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgEIARgDQgBgLgEgEQgEgFgMABQgKAAgGACQgFADgEAFIgGAHQgCACgFAAQgFAAgDgDQgEgDAAgEQAAgGAGgHQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAJAAAOIAAAOIgBANQAAAHADAIIADAKQAAADgEAEQgFADgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAEAEQAFADAJAAQAHAAAHgDQAIgDADgFQADgGABgNIAAgEIgSAFg");
	this.shape_1187.setTransform(-130,141.6);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgDIgLAKQgFAEgHACQgGABgJABQgKgBgIgDQgIgEgEgHQgGgHAAgPIAAgxQAAgIAEgDQAEgEAGAAQAGAAAFAEQADADAAAIIAAAnQABAJABAFQACAHAEADQAEADAIABQAGAAAHgFQAGgDADgHQADgEgBgRIAAgfQAAgIAFgDQAEgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAIgEADQgEAEgFAAQgGAAgEgEg");
	this.shape_1188.setTransform(-160.9,141.6);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f("#660000").s().p("AAgBBQgDgFAAgHIAAgjQgIAGgJAFQgJADgKAAQgNABgLgHQgLgGgHgLQgGgLAAgPQAAgQAGgMQAHgLALgGQALgGAOAAQAKAAAJAEQAJAEAHAIIAAgCQAAgHAEgEQADgDAGgBQAGABAEADQAEADAAAIIAABrQAAARgOAAQgIAAgCgFgAgTgqQgHAJAAAQQAAAKAEAHQADAGAGAEQAGADAHAAQAHAAAHgDQAGgEAEgGQAEgIAAgKQAAgHgDgHQgCgGgEgEQgEgDgFgDQgFgCgFAAQgLABgIAHg");
	this.shape_1189.setTransform(-174.4,143.4);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgDIgLAKQgFAEgHACQgGABgIABQgLgBgIgDQgIgEgFgHQgFgHAAgPIAAgxQAAgIAEgDQADgEAHAAQAGAAAFAEQADADAAAIIAAAnQABAJABAFQACAHAFADQADADAIABQAGAAAHgFQAGgDADgHQACgEAAgRIAAgfQAAgIAEgDQAFgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAIgEADQgEAEgFAAQgHAAgDgEg");
	this.shape_1190.setTransform(-214.2,141.6);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f("#660000").s().p("AgmAlQgPgNAAgXQAAgOAHgMQAHgMAMgGQANgHARAAQALAAAKADQAJADAGAEQAHAFADAFQAEAFAAAEQAAAFgEADQgEADgFAAQgEAAgCgBIgGgGQgFgHgGgDQgFgEgJAAQgMAAgIAJQgHAJAAAOQAAAHACAGQACAGADAEQAEAEAGACQAFACAFAAQAJAAAGgDQAGgEAFgHQACgEAEgCQADgDAEAAQAFAAAEAEQADADAAAEQAAAFgDAFQgDAFgHAFQgGAFgKADQgKADgNAAQgZAAgPgOg");
	this.shape_1191.setTransform(-227,141.5);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f("#660000").s().p("AAbAvQgFgEAAgIIAAgoQAAgNgDgGQgFgGgLAAQgHAAgGADQgGAFgEAGQgCAGAAAPIAAAeQAAAIgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgDQAEgEAGAAQAEAAADACIAFAEQACAEAAAEIAAADQAHgJAKgEQAHgEAMAAQALAAAJAEQAJAFAFAHQACAFABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1192.setTransform(-245.1,141.6);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgDIgLAKQgFAEgHACQgGABgJABQgKgBgIgDQgIgEgEgHQgGgHAAgPIAAgxQAAgIAEgDQAEgEAGAAQAGAAAFAEQADADAAAIIAAAnQAAAJACAFQACAHAEADQAEADAIABQAGAAAHgFQAGgDADgHQADgEgBgRIAAgfQAAgIAFgDQAEgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAIgEADQgEAEgFAAQgGAAgEgEg");
	this.shape_1193.setTransform(-258.1,141.6);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f("#660000").s().p("AgdA5QgLgFgEgHQgFgIgBgFQAAgDAEgDQADgEAFAAQAIAAAEAJQAEAHAGAFQAIAEAIAAQAGAAAFgDQAHgEACgGQADgGABgIQAAgIgEgFQgDgHgGgBQgFgDgGAAQgIAAgEABIgLAGQgGAFgFAAQgFAAgEgEQgDgCAAgDIABgGIAJgpQABgIADgDQAEgDAJAAIAyAAQAPAAAAAKQAAAFgDACQgEADgIAAIgtAAIgFAbQAOgGALAAQAIAAAJADQAIADAGAGQAGAFAEAGQAEAIAAAJQAAAMgHAKQgGAKgMAGQgNAGgOAAQgSAAgKgGg");
	this.shape_1194.setTransform(-12.2,116.4);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f("#660000").s().p("AgbA7QgLgFgGgIQgGgKAAgKQAAgXAZgIQgUgIAAgSQAAgIAGgIQAEgHALgFQAKgEAOAAQALAAAJADQAIACAGAFQAGAFADAGQACAFAAAGQABAJgFAHQgFAGgKAEQAIADAGAEQAGAFACAFQADAHAAAHQAAAKgGAKQgGAIgMAFQgLAFgQAAQgPAAgMgFgAgRAJQgGAGAAALQAAAGADAFQAEAFAEADQAGACAGAAQAHAAAGgCQAFgDADgFQADgFAAgHQAAgGgDgGQgDgEgGgDQgFgDgHAAQgJAAgIAGgAgOgqQgGAFAAAIQAAAHAGAFQAGAFAIAAQAFAAADgCQAEgBACgCQADgCABgEQACgDAAgDQAAgFgDgEQgCgEgEgCQgGgDgFAAQgIAAgGAFg");
	this.shape_1195.setTransform(-36.1,116.3);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f("#660000").s().p("AgOAKQgIAAgDgCQgEgDAAgFQAAgEADgDQAFgCAHAAIAdAAQAIAAADACQAEADAAAEQAAAFgEADQgDACgIAAg");
	this.shape_1196.setTransform(-57.2,118);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f("#660000").s().p("AgdA5QgLgFgFgHQgEgIAAgFQgBgDAEgDQADgEAFAAQAIAAAEAJQAEAHAGAFQAIAEAHAAQAHAAAGgDQAFgEAEgGQADgGAAgIQgBgIgDgFQgDgHgFgBQgHgDgFAAQgIAAgEABIgKAGQgIAFgEAAQgEAAgFgEQgDgCAAgDIABgGIAIgpQABgIAFgDQADgDAIAAIAzAAQAPAAAAAKQAAAFgEACQgDADgHAAIgtAAIgHAbQAOgGAMAAQAJAAAIADQAIADAGAGQAGAFAEAGQADAIABAJQgBAMgGAKQgGAKgMAGQgMAGgPAAQgSAAgKgGg");
	this.shape_1197.setTransform(-66.3,116.4);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f("#660000").s().p("AgaA5QgLgHgHgNQgGgOAAgUQAAgQAEgMQAEgMAHgJQAHgJAKgEQAKgEAMAAQANAAAJAEQAKAEAFAHQAEAGAAAGQAAADgDADQgDADgEAAQgEAAgEgCQgDgCgCgEQgCgGgFgCQgFgDgHgBQgEAAgFADQgFADgEAEQgHAJgBAXQAHgGAIgEQAHgDAJAAQAJAAAIADQAIACAGAHQAGAFADAGQADAIAAAIQAAANgGAKQgGAJgMAFQgLAGgOAAQgQAAgMgHgAgIAAQgGADgDAFQgEAFAAAHQAAAMAHAHQAHAJAJgBQAKABAHgIQAGgHAAgLQAAgIgDgFQgDgGgFgDQgFgCgHAAQgFAAgFACg");
	this.shape_1198.setTransform(-78.3,116.3);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f("#660000").s().p("AgYA7QgDgDgBgHQABgGACgJIAJgXQAGgMAJgOQAHgNANgOIgzAAQgIAAgFgCQgDgDAAgFQAAgHADgCQAFgBAIAAIBAAAQAJAAAEACQAFADAAAGQgBAEgEAFIgMAOQgGAGgGALQgIALgFAOIgDAMIgCALIgDAKQgBAKgDADQgEADgGAAQgGAAgEgEg");
	this.shape_1199.setTransform(-89.7,116.4);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f("#660000").s().p("AAMA8QgDgDAAgHIAAhMQgYAQgJAAQgEAAgDgDQgDgCAAgFQAAgDADgCIALgGQAMgFAHgFQAGgGAGgGIAHgIQABgCAFAAQAFAAADADQADAEAAAGIAABhQAAARgNAAQgGAAgEgEg");
	this.shape_1200.setTransform(-103.3,116.3);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f("#660000").s().p("AgYAsQgLgEgFgGQgFgGAAgGQAAgDAEgDQACgDAGAAQADAAACACIAFAFQAEAGAGADQAGADAJAAQAIAAAEgDQAFgDABgEQgBgGgFgDQgFgDgLgCQgOgDgIgEQgJgCgGgFQgEgGgBgIQAAgHAFgGQAFgGAKgEQAIgDAOAAQAJAAAIABQAJACAGADQAFAEADADQADAEAAAEQAAAEgDADQgEACgFAAQgEAAgDgCIgHgGIgHgGQgEgCgGAAQgHAAgFADQgFADAAAEQAAADAEADQADACAGACIAPADQANADAIAEQAHACAFAGQAEAEAAAHQAAAKgFAGQgGAHgLAEQgKADgOAAQgPAAgJgDg");
	this.shape_1201.setTransform(-125.6,118);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f("#660000").s().p("AgVAsQgKgDgHgHQgHgGgEgJQgDgJAAgKQAAgKADgIQAEgJAHgGQAHgHAKgDQAKgDALAAQAMAAAKADQAKADAHAHQAHAGADAJQAEAIAAAKQAAAKgEAJQgDAJgHAGQgIAHgJADQgKADgMAAQgLAAgKgDgAgNgaQgGAEgDAHQgEAHAAAIQAAAJAEAHQADAHAGADQAGAEAHAAQAMAAAHgIQAHgIAAgOQAAgNgHgIQgHgIgMAAQgHAAgGADg");
	this.shape_1202.setTransform(-174.8,118);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f("#660000").s().p("AAuA8QgDgDAAgHIAAhWIgYBPIgDALQgCAEgEADQgDADgHAAQgEAAgDgCQgEgCgCgDIgDgHIgCgHIgYhPIAABWQAAAHgDADQgEAEgGAAQgFAAgEgEQgEgDAAgHIAAhjQAAgIAFgDQAFgDAIAAIAJAAQAIAAAEACQADABACADIAEALIAUBEIAVhEIAEgLQABgDAEgBQAEgCAIAAIAJAAQAJAAAEADQAFADAAAIIAABjQAAAHgEADQgDAEgHAAQgFAAgEgEg");
	this.shape_1203.setTransform(-189.1,116.3);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f("#660000").s().p("AgPA8QgEgDAAgHIAAhCQAAgHAEgDQADgEAGAAQAGAAADAEQAEADAAAHIAABCQAAAHgEADQgDAEgGAAQgGAAgDgEgAgTgqIACgFIAFgGQAEgHADgBQACgCAFAAIANAAQAFAAAAABIgFAFIgLAKIgHAFQgFADgHAAQgEAAAAgDg");
	this.shape_1204.setTransform(-216.5,116.3);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f("#660000").s().p("AgkAzQgOgNAAgVQAAgLAEgIQADgIAHgHQAHgGAJgDQAKgEALAAQAQAAALAGQALAFAGAKQAGAJAAAJQAAAIgGADQgGADgKgBIg0AAQAAAIAEAHQAEAGAGADQAFACAHAAIAIgBIAIgCIAHgFIAIgHQACgBAEAAQAEAAACACQADACAAADQAAAEgDAEQgDAEgFAEQgGAEgJADQgIACgMAAQgYAAgPgNgAgPgHQgGAFgCALIAwAAQgBgLgHgFQgGgHgKAAQgJAAgHAHgAgRgqIACgFIAEgGQAEgHADgBQADgCAFAAIANAAQAFAAAAABIgGAFIgLAKIgGAFQgGADgGAAQgBAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAgBg");
	this.shape_1205.setTransform(-268.1,116.3);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f("#660000").s().p("AgYAsQgLgEgFgGQgFgGAAgGQAAgDAEgDQACgDAGAAQADAAACACIAFAFQAEAGAGADQAGADAJAAQAIAAAEgDQAFgDABgEQgBgGgFgDQgFgDgLgCQgOgDgIgEQgJgCgGgFQgEgGgBgIQAAgHAFgGQAFgGAKgEQAIgDAOAAQAJAAAIABQAJACAGADQAFAEADADQADAEAAAEQAAAEgDADQgEACgFAAQgEAAgDgCIgHgGIgHgGQgEgCgGAAQgHAAgFADQgFADAAAEQAAADAEADQADACAGACIAPADQANADAIAEQAHACAFAGQAEAEAAAHQAAAKgFAGQgGAHgLAEQgKADgOAAQgPAAgJgDg");
	this.shape_1206.setTransform(-279.5,118);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f("#660000").s().p("AgVAsQgKgDgHgHQgHgGgEgJQgDgJAAgKQAAgKADgIQAEgJAHgGQAHgHAKgDQAKgDALAAQAMAAAKADQAKADAHAHQAHAGADAJQAEAIAAAKQAAAKgEAJQgDAJgHAGQgIAHgJADQgKADgMAAQgLAAgKgDgAgNgaQgGAEgDAHQgEAHAAAIQAAAJAEAHQADAHAGADQAGAEAHAAQAMAAAHgIQAHgIAAgOQAAgNgHgIQgHgIgMAAQgHAAgGADg");
	this.shape_1207.setTransform(-291,118);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f("#660000").s().p("AgYA9QgKgEgFgJQgEgFgCgGQgCgGAAgGQABgGADgDQAEgDAGAAQAFAAAEADQACACACAHIADAKQACAEAEADQAEADAHAAQASAAAAgZIAAhEQABgIAEgEQADgEAHAAQAGAAAEAEQAFAEAAAIIAABAIgBAPQgBAGgDAGQgFAKgMAGQgKAGgQAAQgOAAgKgEg");
	this.shape_1208.setTransform(-303.4,116.2);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgcQgHAFgDAGQgDAIAAAJQAAAKADAHQADAHAHAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNAAQgIAAgGADg");
	this.shape_1209.setTransform(-216.8,214.1);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgCQgGAFgFAEQgGADgHACQgFACgHABQgLgBgJgEQgIgEgHgGQgGgIgDgJQgEgJAAgLQAAgXAOgNQANgNAVAAQALAAAJAEQAIAEAIAHIAAglQAAgHADgEQAEgFAGAAQAHABADADQAEAEAAAHIAABtQAAAHgEADQgDAEgHABQgFgBgEgEgAgNgIQgGADgDAGQgEAIAAAKQAAAJAEAIQADAGAGAEQAGAEAHAAQAIAAAGgEQAGgDAEgHQAEgHAAgKQAAgLgEgHQgEgGgGgEQgGgEgIAAQgHAAgGAFg");
	this.shape_1210.setTransform(-230.4,212.3);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f("#660000").s().p("AAgAvQgDgDgGgIQgKAHgKAFQgIADgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgLAIgHQAHgGANgCIANgDIASgEIAQgDQAAgLgEgEQgEgFgMABQgLAAgFACQgGADgEAFIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHAEAIIACAKQAAADgEAEQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAFQAFADAJAAQAHABAIgEQAGgDAEgFQAEgGgBgNIAAgEIgSAFg");
	this.shape_1211.setTransform(-243.1,214.1);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgDIgLAKQgFAEgHACQgGABgJAAQgKAAgIgDQgIgEgEgHQgGgHAAgPIAAgxQAAgIAEgDQAEgEAGAAQAHAAAEAEQADADAAAIIAAAnQAAAJACAFQACAHAEADQAEADAIABQAGAAAHgFQAGgDADgHQADgFgBgQIAAgfQAAgIAFgDQAEgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAIgEADQgEAEgFAAQgGAAgEgEg");
	this.shape_1212.setTransform(-263.5,214.1);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f("#660000").s().p("AgWBUQgHgDABgGQAAgEACgDQAEgDAFAAIABAAIAFAAIADABQAGAAACgEQABgEAAgKIAAhTQAAgIAEgDQAEgFAHAAQAFAAAFAFQADADAAAIIAABTIAAAPIgCAJQgHAQgWAAQgOAAgGgEgAAGhBQgFgDAAgGQAAgFAFgEQADgDAHgBQAFAAAFAEQADADAAAGQAAAGgDADQgFADgFAAQgHAAgDgDg");
	this.shape_1213.setTransform(-299.7,214.2);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f("#660000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgIAEgDQADgEAHAAQAFAAAEAFQAEADAAAHIAAACQAJgIAIgEQAJgEAJAAQAOAAALAGQALAGAGALQAHAMAAAPQAAAMgEAIQgEAKgGAGQgHAHgIAEQgJAEgLAAQgKAAgJgFQgJgFgHgHIAAAlQAAARgNAAQgJgBgCgEgAgTgqQgHAJAAAPQAAAPAHAIQAJAIALAAQAHAAAGgEQAGgEADgFQAEgIAAgKQAAgKgDgHQgDgHgHgEQgGgEgHAAQgLABgJAHg");
	this.shape_1214.setTransform(124.8,191.8);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgCQgFAFgGAEQgGAEgHABQgFADgHAAQgLAAgIgFQgJgDgHgIQgGgHgDgJQgEgJAAgLQAAgXAOgNQAMgNAWAAQALAAAIAEQAJADAIAIIAAglQAAgHADgEQAEgFAGAAQAHABADADQAEAEAAAHIAABtQAAAHgEADQgDAFgHAAQgFAAgEgFgAgNgIQgHADgCAGQgEAIAAAJQAAAKAEAIQADAGAGAEQAHAEAGAAQAIAAAGgEQAGgDAEgHQAEgHAAgLQAAgKgEgHQgEgGgGgEQgGgEgIAAQgHABgGAEg");
	this.shape_1215.setTransform(92.4,188.1);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.f("#660000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgBgFgEgDQgEgDgGgBQgGAAgFADQgFAEgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgEgEQgFgEAAgIIAAgnIgBgPQAAgFgDgDQgEgDgGgBQgPABgEAIQgEAIgBAQIAAAhQAAAIgDAEQgFAEgGAAQgGAAgFgEQgEgEAAgIIAAhHQAAgGAEgEQAEgEAFAAQAHAAADADQAFAEAAAGIAAADQAHgJAJgDQAIgDAKAAQALAAAIADQAGAEAFAIQAIgIAIgEQAIgDALAAQALAAAIADQAJAFAEAHQAEAHAAAOIAAAwQAAAIgEAEQgFAEgGAAQgGAAgFgEg");
	this.shape_1216.setTransform(63.9,189.9);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgLgEgAgOgcQgGAFgEAHQgDAHAAAJQAAAKADAHQAEAHAGAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNAAQgHAAgHADg");
	this.shape_1217.setTransform(47.9,189.9);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgEIgKAKQgHAEgGACQgGACgIgBQgLAAgIgDQgIgEgFgGQgFgJAAgPIAAgwQAAgIAEgDQADgEAHAAQAGAAAEAEQAFADAAAIIAAAnQgBAJACAGQACAGAFADQADADAIABQAGgBAHgDQAGgEADgHQACgFABgQIAAgfQAAgIADgDQAFgEAGAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgDAEgGAAQgHAAgDgEg");
	this.shape_1218.setTransform(9.4,189.9);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.f("#660000").s().p("AgPBBQgEgDAAgIIAAhBIgIAAQgHAAgDgDQgEgCAAgEQAAgJAPAAIAHAAIAAgHQAAgMADgHQADgHAJgDQAHgEAOAAQAZAAAAALQAAADgDADQgCACgEAAIgGAAIgHgBQgHAAgDAFQgCAEAAAHIAAAGIAHAAQARAAAAAJQAAAFgFACQgEACgIAAIgHAAIAABBQAAAIgEADQgEAFgFAAQgGAAgEgFg");
	this.shape_1219.setTransform(-0.3,188.1);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgEIgLAKQgFAEgHACQgGACgIgBQgLAAgIgDQgIgEgFgGQgFgJAAgPIAAgwQAAgIAEgDQADgEAHAAQAGAAAFAEQADADAAAIIAAAnQABAJABAGQACAGAFADQADADAIABQAGgBAHgDQAGgEADgHQACgFAAgQIAAgfQAAgIAEgDQAFgEAGAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgEAEgFAAQgHAAgDgEg");
	this.shape_1220.setTransform(-54.4,189.9);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.f("#660000").s().p("AgvBDQgGgCAAgGQAAgFADgCQADgCAGAAIAEAAIAFABQAFAAADgCQACgBADgEIAFgIIADgGIgkhMQgDgIAAgCIACgHQACgCADgBQADgDAEAAQAGAAADAEQAEADACAHIAXA9IAXg5IAFgLQACgDADgCQACgCAFAAIAGACQADACACACIABAGIgBAEIgDAHIglBUQgFALgEAHQgEAHgHADQgIADgNABQgNgBgGgCg");
	this.shape_1221.setTransform(-78.2,191.8);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.f("#660000").s().p("AgKAKQgFgDAAgHQAAgEAFgEQAEgFAGAAQAGAAAFAFQAFADAAAFQAAAHgFADQgFAEgGAAQgGAAgEgEg");
	this.shape_1222.setTransform(-109.5,193.6);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.f("#660000").s().p("AgtBDQgJAAgEgCQgEgDgBgEQgCgEAAgGIAAhiQAAgIAFgEQAEgEAKAAIApAAQAPAAALADQALACAKAHQAYASAAAkQAAAMgDAJQgCALgFAHQgFAJgIAGQgGAFgIADQgHADgIABIgTABgAgiAtIAYAAIALAAIAJgCIAIgEQAQgMAAgbQAAgUgHgJQgHgKgKgDQgKgDgNABIgVAAg");
	this.shape_1223.setTransform(-118.8,188.1);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAGgKAFQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAIgHQAHgGANgDIANgCIASgEIAQgDQAAgLgEgEQgEgFgNABQgKgBgFADQgGADgEAFIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAJAAANIAAAPIgBANQABAHADAIIACAJQAAAFgEADQgEADgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAFAEQAEADAIAAQAIABAIgEQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_1224.setTransform(-171.9,189.9);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgKgEgAgOgcQgHAFgDAHQgDAHgBAJQABAKADAHQADAHAHAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNAAQgHAAgHADg");
	this.shape_1225.setTransform(-229.6,189.9);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.f("#660000").s().p("AglAxQgIAAgEgDQgEgDAAgGQAAgDADgDIAMgMIARgRIAOgNIAKgLIAHgIIgpAAQgJABgFgCQgEgCAAgFQAAgFADgCQAEgCAGgBIBBAAQAJABAFACQAEACAAAGIgBAFIgCADIgDADIgFAFIgzAyIA3AAQAHAAADADQAEADAAAEQAAAEgEADQgDACgHABg");
	this.shape_1226.setTransform(-241.4,189.9);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgEIgLAKQgFAEgHACQgGACgIgBQgLAAgIgDQgIgEgFgGQgFgJAAgPIAAgwQAAgIAEgDQADgEAHAAQAGAAAFAEQADADAAAIIAAAnQABAJABAGQACAGAFADQADADAIABQAGgBAHgDQAGgEADgHQACgFAAgQIAAgfQAAgIAEgDQAFgEAGAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgEAEgFAAQgHAAgDgEg");
	this.shape_1227.setTransform(-259.2,189.9);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAHgKADQgLAEgNAAQgMAAgKgEgAgOgcQgGAFgEAHQgDAHgBAJQABAKADAHQAEAHAGAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNAAQgIAAgGADg");
	this.shape_1228.setTransform(-291,189.9);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.f("#660000").s().p("AAoBFIgHgEIgFgFIgFgGIg5hOIAABOQAAAHgFAEQgEAFgFAAQgIAAgDgFQgFgEAAgHIAAhnQAAgHACgDQADgFAEgCQAEgCAGgBIAHABIAGAEIAEAFIAFAHIA6BOIAAhPQAAgHAFgEQAEgFAGAAQAHAAADAFQAEAEABAHIAABpQAAASgRAAIgIgBg");
	this.shape_1229.setTransform(-305.6,188.1);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.f("#660000").s().p("AgaAuQgLgDgGgHQgFgGAAgGQAAgEADgDQADgDAGAAQAEAAACACIAFAGQAFAGAGAEQAGACAJAAQAJAAAGgCQAFgEAAgEQAAgHgFgDQgHgDgMgDQgPgDgIgEQgKgCgGgGQgFgGAAgIQAAgHAFgHQAFgHALgEQAKgEANAAQAKAAAKACQAIACAGADQAGAEADAEQAEAEAAAEQAAAEgEADQgDADgHAAQgEAAgDgCIgHgHQgDgEgEgBQgFgDgHAAQgIAAgEADQgFADgBAEQAAAEAEACIAKAFIARAEQANACAJAFQAIADAFAFQAEAFAAAHQAAAKgGAIQgFAHgMAEQgLAEgPAAQgPAAgLgFg");
	this.shape_1230.setTransform(264,165.8);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.f("#660000").s().p("AAgAvQgDgDgGgIQgKAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAIgIQAHgGANgCIANgDIASgEIAQgDQAAgKgEgFQgEgFgMAAQgLAAgFADQgGADgDAFIgGAHQgBACgGAAQgFAAgDgDQgEgCAAgFQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHAEAIIACAKQAAADgEADQgEAEgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAFAEAFQAFAEAJgBQAHAAAIgDQAGgDAEgFQAEgGgBgNIAAgEIgSAFg");
	this.shape_1231.setTransform(251.9,165.8);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.f("#660000").s().p("AgJAxIgFgGIgGgLIgbg6IgCgEIgCgFIAAgEIABgFIAFgEQADgCAEAAQAHAAADAEQADAEADAHIAWA5IAZg7QADgHADgDQACgDAGAAQAGAAAEAEQADADAAAEIAAADIgCAFIgCAEIgbA7IgDAGIgEAHIgGAEQgDACgFAAQgFAAgEgCg");
	this.shape_1232.setTransform(185.5,165.8);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.f("#660000").s().p("AgbAuQgLgDgFgHQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAGQAFAGAGAEQAGACAJAAQAJAAAGgCQAFgEAAgEQAAgHgFgDQgHgDgLgDQgPgDgKgEQgJgCgGgGQgFgGAAgIQAAgHAFgHQAFgHAKgEQALgEAOAAQAJAAAJACQAKACAGADQAFAEAEAEQADAEAAAEQgBAEgDADQgDADgGAAQgFAAgDgCIgHgHQgDgEgFgBQgEgDgGAAQgIAAgGADQgEADAAAEQgBAEAEACIAKAFIARAEQAOACAIAFQAIADAEAFQAFAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgPAAQgPAAgMgFg");
	this.shape_1233.setTransform(168.5,165.8);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.f("#660000").s().p("AAgAvQgDgDgGgIQgKAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgEIAQgDQAAgKgEgFQgEgFgMAAQgKAAgGADQgGADgDAFIgGAHQgCACgFAAQgFAAgDgDQgEgCAAgFQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHAEAIIACAKQAAADgEADQgEAEgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAFAEAFQAGAEAIgBQAHAAAIgDQAGgDAEgFQADgGAAgNIAAgEIgSAFg");
	this.shape_1234.setTransform(156.4,165.8);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.f("#660000").s().p("AAXA2IAAgqQgBgMgDgFQgFgHgLAAQgGAAgHAEQgGADgDAGQgCAGAAAOIAAAhQAAAIgEAEQgEADgHAAQgOAAAAgPIAAhrQAAgIAEgEQAEgDAGAAQAHAAAEADQAEAEAAAIIAAAlQAFgGAFgDQAGgDAFgCQAGgCAHAAQAMABAIADQAIAFAFAIQADAEABAGIABALIAAAwQAAAIgEAEQgEADgGAAQgPAAABgPg");
	this.shape_1235.setTransform(143.6,163.9);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgCIgLAJQgFAEgHACQgGABgIABQgLgBgIgDQgIgEgFgHQgFgHAAgPIAAgxQAAgHAEgEQADgEAHAAQAGAAAFAEQADAEAAAHIAAAnQABAJABAFQACAHAFADQADAEAIAAQAGAAAHgFQAGgDADgHQACgEAAgRIAAgfQABgHADgEQAFgEAGAAQAGAAAEAEQAEAEAAAHIAABHQAAAIgEADQgEAEgFAAQgHAAgDgEg");
	this.shape_1236.setTransform(118.4,165.8);

	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.f("#660000").s().p("AA5AvQgFgEAAgIIAAgpIgBgNQAAgEgEgEQgEgEgGABQgGAAgFACQgFAEgDAFQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgFgEQgDgEgBgIIAAgnIAAgOQgBgFgDgEQgDgEgIABQgOgBgEAJQgFAJABAOIAAAiQAAAIgFAEQgEAEgGAAQgHAAgEgEQgEgEAAgIIAAhHQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEADABAGIAAACQAHgHAIgEQAJgDAKAAQALAAAHADQAIAEAFAHQAGgHAJgEQAJgDAKAAQALAAAJADQAIAEAEAIQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgHAAgDgEg");
	this.shape_1237.setTransform(102.7,165.8);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.f("#660000").s().p("AAbAvQgEgEgBgIIAAgoQAAgNgDgGQgEgHgMABQgHAAgGADQgGAEgDAHQgCAGgBAPIAAAeQAAAIgDAEQgEAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgDQADgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAHgJAJgEQAIgEAMAAQALAAAJAEQAJAFAEAHQADAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgHAAgDgEg");
	this.shape_1238.setTransform(59.4,165.8);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.f("#660000").s().p("AgvBDQgGgDAAgGQAAgEADgDQADgCAGAAIAEABIAFAAQAFAAADgBQACgBADgDIAFgJIADgGIgkhNQgDgGAAgEIACgFQACgDADgCQADgCAEAAQAGABADADQAEAEACAGIAXA8IAXg4IAFgKQACgFADgBQACgBAFgBIAGACQADABACAEIABAEIgBAGIgDAGIglBUQgFAMgEAGQgEAGgHAEQgIADgNAAQgNAAgGgCg");
	this.shape_1239.setTransform(21.2,167.6);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgBgEAAQgHAAgDACQgDADgDAGIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1240.setTransform(-54.4,165.8);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.f("#660000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgHADgEQAEgDAGgBQAHABADADQAEAEAAAHIAAADQAIgJAJgEQAJgEAKAAQANAAALAGQALAGAGALQAHALAAARQAAALgDAIQgFAKgGAHQgGAGgJAEQgJAEgKgBQgLABgJgFQgJgEgHgJIAAAmQAAAQgOAAQgHABgDgFgAgSgqQgJAIABARQgBAPAJAGQAHAJALAAQAIAAAGgDQAGgFAEgFQADgIAAgKQAAgKgDgHQgDgHgGgEQgHgDgIgBQgKAAgIAIg");
	this.shape_1241.setTransform(-66.2,167.6);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgBgEAAQgHAAgDACQgDADgDAGIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1242.setTransform(-76.9,165.8);

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.f("#660000").s().p("AgbAuQgLgDgFgHQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAGQAFAGAGAEQAGACAJAAQAJAAAGgCQAFgEAAgEQAAgHgFgDQgHgDgLgDQgPgDgKgEQgJgCgGgGQgFgGAAgIQAAgHAFgHQAFgHAKgEQALgEAOAAQAJAAAJACQAJACAHADQAFAEAEAEQACAEAAAEQAAAEgDADQgDADgGAAQgFAAgDgCIgHgHQgDgEgFgBQgEgDgGAAQgIAAgGADQgEADAAAEQgBAEAEACIAKAFIARAEQAOACAIAFQAIADAEAFQAFAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgOAAgMgFg");
	this.shape_1243.setTransform(-101.1,165.8);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.f("#660000").s().p("AAhAvQgEgDgFgIQgLAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIAOgDIARgEIARgDQgBgKgEgFQgEgFgNAAQgJAAgGADQgFADgFAFIgFAHQgCACgFAAQgFAAgDgDQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAKQAAADgEADQgFAEgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAFAFAFQAFAEAHgBQAIAAAHgDQAIgDADgFQAEgGAAgNIAAgEIgSAFg");
	this.shape_1244.setTransform(-124.4,165.8);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.f("#660000").s().p("AAhAvQgEgDgFgIQgLAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIAOgDIARgEIARgDQgBgKgEgFQgEgFgNAAQgJAAgGADQgFADgFAFIgFAHQgCACgFAAQgFAAgDgDQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAKQAAADgEADQgFAEgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAFAFAFQAFAEAHgBQAIAAAHgDQAIgDADgFQAEgGAAgNIAAgEIgSAFg");
	this.shape_1245.setTransform(-142.4,165.8);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgBgEAAQgHAAgDACQgDADgDAGIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1246.setTransform(-158.3,165.8);

	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.f("#660000").s().p("AAhAvQgFgDgEgIQgLAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAIgIQAHgGANgCIAOgDIARgEIARgDQgBgKgEgFQgEgFgNAAQgKAAgFADQgGADgEAFIgFAHQgBACgGAAQgFAAgDgDQgEgCAAgFQAAgGAFgHQAGgGALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAKQAAADgEADQgFAEgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAFAFAFQAFAEAHgBQAIAAAHgDQAHgDAEgFQAEgGAAgNIAAgEIgSAFg");
	this.shape_1247.setTransform(-169.9,165.8);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgBgEAAQgHAAgDACQgDADgDAGIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1248.setTransform(-179.8,165.8);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgGAHgFADQgGADgGACQgGACgIAAQgKAAgIgDQgKgEgGgHQgGgIgEgJQgDgKAAgKQAAgXANgNQANgNAVAAQAMAAAIADQAJAFAIAHIAAglQAAgHAEgFQADgDAHAAQAGAAAEADQADADAAAIIAABtQAAAHgDAEQgFADgFAAQgGAAgEgDgAgNgIQgGADgEAHQgDAGAAALQAAAJADAIQAEAGAGAFQAHADAGAAQAIAAAGgDQAGgEAEgHQADgHAAgKQAAgKgDgIQgEgGgGgEQgGgDgIgBQgHAAgGAFg");
	this.shape_1249.setTransform(-242.1,163.9);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgcQgGAFgEAGQgDAIAAAJQAAAKADAHQAEAHAGAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgHAAgHADg");
	this.shape_1250.setTransform(-260.3,165.8);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAguIgEAAQgGgBgDgCQgEgCAAgEQAAgFAEgCQADgDAHABIADAAIAAgQIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGgBADADQADACAAAFQAAAEgEADQgFACgIAAIgGAAIAAAtIABAJQAAACACACQACADAFAAIAHgBIAHgBQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_1251.setTransform(-270.3,164.1);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgCIgLAJQgFAEgHACQgGABgIABQgLgBgIgDQgIgEgFgHQgFgHAAgPIAAgxQAAgHAEgEQADgEAHAAQAGAAAFAEQADAEAAAHIAAAnQABAJABAFQACAHAFADQADAEAIAAQAGAAAHgFQAGgDADgHQACgEAAgRIAAgfQAAgHAEgEQAFgEAGAAQAGAAAEAEQAEAEAAAHIAABHQAAAIgEADQgEAEgFAAQgHAAgDgEg");
	this.shape_1252.setTransform(-293.8,165.8);

	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.f("#660000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgHAEgEQADgDAHgBQAFABAEADQAEAEAAAHIAAADQAJgJAIgEQAJgEAJAAQAOAAALAGQALAGAGALQAHALAAARQAAALgEAIQgEAKgGAHQgHAGgIAEQgJAEgLgBQgKABgJgFQgJgEgHgJIAAAmQAAAQgNAAQgJABgCgFgAgTgqQgHAIAAARQAAAPAHAGQAJAJALAAQAHAAAGgDQAGgFADgFQAEgIAAgKQAAgKgDgHQgDgHgHgEQgGgDgHgBQgLAAgJAIg");
	this.shape_1253.setTransform(-306.8,167.6);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.f("#660000").s().p("AAgAvQgEgDgEgIQgLAHgJAFQgJADgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIAOgDIARgEIARgDQgBgLgEgEQgEgFgNABQgJAAgGACQgFADgEAFIgGAHQgCACgFAAQgFAAgDgDQgEgDAAgEQAAgGAFgHQAGgGALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAJAAAOIAAAOIAAANQAAAHACAIIADAKQAAADgEAEQgFADgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAFAEQAEADAIAAQAIAAAHgDQAIgDADgFQADgGABgNIAAgEIgSAFg");
	this.shape_1254.setTransform(226.7,141.6);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.f("#660000").s().p("AgaAuQgMgDgFgHQgFgGAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAGQAEAGAHAEQAGACAJAAQAJAAAGgCQAFgEAAgEQAAgHgFgDQgHgDgLgDQgPgDgJgEQgKgCgGgGQgFgGAAgIQAAgIAFgGQAFgHALgEQAKgEAOAAQAJAAAKACQAJACAGADQAFAEAEAEQADAEAAAEQgBAEgDADQgDADgHAAQgEAAgDgDIgHgGQgDgDgFgCQgEgDgGAAQgIAAgGADQgEADAAAEQgBAEAEACIAKAFIARAEQANADAJAEQAIACAEAGQAFAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgPAAgLgFg");
	this.shape_1255.setTransform(164.3,141.6);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.f("#660000").s().p("AAhAvQgFgDgEgIQgLAHgJAFQgJADgMAAQgLAAgIgEQgJgEgEgHQgFgGAAgHQAAgKAIgIQAHgGANgCIAOgDIARgEIARgDQgBgLgEgEQgEgFgNABQgKAAgFACQgGADgEAFIgFAHQgBACgGAAQgFAAgDgDQgEgDAAgEQAAgGAFgHQAGgGALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAJAAAOIAAAOIAAANQAAAHADAIIACAKQAAADgEAEQgFADgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAFAEQAFADAHAAQAIAAAIgDQAGgDAEgFQAEgGAAgNIAAgEIgSAFg");
	this.shape_1256.setTransform(117.2,141.6);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgDIgLAKQgFAEgHACQgGABgJABQgKgBgIgDQgIgEgEgHQgGgHAAgPIAAgxQAAgIAEgDQAEgEAGAAQAGAAAFAEQADADAAAIIAAAnQABAJABAFQACAHAEADQAEADAIABQAGAAAHgFQAGgDADgHQADgEgBgRIAAgfQAAgIAFgDQAEgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAIgEADQgEAEgFAAQgHAAgDgEg");
	this.shape_1257.setTransform(95.5,141.6);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.f("#660000").s().p("AgOAaQAAAAgBgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgFAFgCQALgFAAgKQgGAAgFgCQgFgEAAgGQAAgHAFgDQAFgFAGAAQAFAAAEADQAEADACAEQACAEAAAIQAAAHgEAJQgEAHgHAFQgFAFgFgBQgEAAgCgBg");
	this.shape_1258.setTransform(22.7,146.6);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f("#660000").s().p("AAhAvQgFgDgEgIQgLAHgKAFQgIADgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAIgIQAHgGANgCIANgDIASgEIAQgDQAAgLgEgEQgEgFgMABQgLAAgFACQgGADgEAFIgFAHQgBACgGAAQgFAAgDgDQgEgDAAgEQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAEAIQAFAJAAAOIAAAOIgBANQABAHADAIIACAKQAAADgEAEQgEADgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAFAEQAEADAIAAQAIAAAIgDQAGgDAEgFQAEgGgBgNIAAgEIgSAFg");
	this.shape_1259.setTransform(13,141.6);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgCQgGAGgFADQgGADgGACQgGACgIAAQgKAAgJgDQgJgFgGgGQgGgIgEgJQgDgKAAgKQAAgXANgNQAOgNAUAAQAMAAAIAEQAJAEAIAHIAAglQAAgHAEgFQADgEAHABQAGAAAEADQADAEAAAHIAABtQAAAHgDAEQgEADgGAAQgGAAgEgDgAgNgIQgGADgEAHQgDAGAAALQAAAKADAHQAEAHAHAEQAFADAHAAQAIAAAGgDQAGgEAEgHQADgHAAgKQAAgKgDgIQgEgGgGgEQgGgDgIgBQgHAAgGAFg");
	this.shape_1260.setTransform(-44.5,139.7);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f("#660000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgHADgEQAFgDAFgBQAHAAADAFQAEADAAAHIAAACQAIgIAJgEQAJgEAKAAQANAAALAGQALAGAGALQAHAMAAAQQAAALgDAIQgFAKgGAHQgHAGgIAEQgJADgKAAQgLABgJgFQgIgFgIgHIAAAlQAAAQgOABQgHAAgDgFgAgSgqQgJAJABAQQgBAPAJAGQAHAJAMAAQAHAAAGgDQAGgEADgGQAEgIAAgKQAAgKgDgHQgDgHgHgEQgGgDgHgBQgLABgIAHg");
	this.shape_1261.setTransform(-82.9,143.4);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgCQgGAGgFADQgGADgHACQgFACgIAAQgKAAgJgDQgIgFgHgGQgGgIgDgJQgEgKAAgKQAAgXAOgNQANgNAUAAQAMAAAJAEQAIAEAIAHIAAglQAAgHADgFQAEgEAGABQAHAAADADQAEAEAAAHIAABtQAAAHgEAEQgDADgHAAQgFAAgEgDgAgNgIQgGADgDAHQgEAGAAALQAAAKAEAHQADAHAHAEQAFADAHAAQAHAAAHgDQAGgEAEgHQADgHAAgKQAAgKgDgIQgEgGgGgEQgHgDgHgBQgHAAgGAFg");
	this.shape_1262.setTransform(-109.4,139.7);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgCQgFAGgGADQgGADgHACQgFACgHAAQgLAAgIgDQgJgFgHgGQgGgIgDgJQgEgKAAgKQAAgXAOgNQAMgNAWAAQALAAAIAEQAJAEAIAHIAAglQAAgHADgFQAEgEAGABQAHAAADADQAEAEAAAHIAABtQAAAHgEAEQgDADgHAAQgFAAgEgDgAgNgIQgHADgDAHQgDAGAAALQAAAKADAHQAEAHAGAEQAHADAGAAQAIAAAGgDQAGgEAEgHQAEgHAAgKQAAgKgEgIQgEgGgGgEQgGgDgIgBQgHAAgGAFg");
	this.shape_1263.setTransform(-159.6,139.7);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f("#660000").s().p("AAXA2IAAgqQAAgMgFgFQgDgHgMAAQgGAAgHAEQgGADgDAGQgCAGAAAOIAAAhQAAAIgEAEQgEADgHAAQgOAAAAgPIAAhrQAAgIAEgEQAEgEAGABQAHgBAEAEQAEAEAAAIIAAAlQAFgFAFgEQAFgDAGgCQAGgCAIAAQALAAAIAFQAIADAFAJQADAEABAGIABALIAAAwQAAAIgEAEQgEADgGAAQgOAAAAgPg");
	this.shape_1264.setTransform(-190.5,139.7);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f("#660000").s().p("AAhAvQgFgDgEgIQgLAHgJAFQgJADgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAIgIQAHgGANgCIAOgDIARgEIARgDQgBgLgEgEQgEgFgNABQgKAAgFACQgGADgEAFIgFAHQgBACgGAAQgFAAgDgDQgEgDAAgEQAAgGAFgHQAGgGALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAJAAAOIAAAOIAAANQAAAHACAIIADAKQAAADgEAEQgFADgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAFAEQAFADAHAAQAIAAAHgDQAHgDAEgFQAEgGAAgNIAAgEIgSAFg");
	this.shape_1265.setTransform(-239.7,141.6);

	this.shape_1266 = new cjs.Shape();
	this.shape_1266.graphics.f("#660000").s().p("AAgAvQgDgDgGgIQgKAHgKAFQgIADgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgEIAQgDQAAgLgEgEQgEgFgMABQgKAAgGACQgGADgDAFIgGAHQgCACgFAAQgFAAgDgDQgEgDAAgEQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAJAAAOIAAAOIgBANQAAAHAEAIIACAKQAAADgEAEQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAEAEQAGADAIAAQAHAAAIgDQAGgDAEgFQADgGAAgNIAAgEIgSAFg");
	this.shape_1266.setTransform(-263.5,141.6);

	this.shape_1267 = new cjs.Shape();
	this.shape_1267.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEADgGAAQgFAAgEgDg");
	this.shape_1267.setTransform(-291.2,139.8);

	this.shape_1268 = new cjs.Shape();
	this.shape_1268.graphics.f("#660000").s().p("AAaAvQgEgEAAgIIAAgoQAAgNgDgGQgFgGgLAAQgHAAgGADQgHAFgDAGQgCAGAAAPIAAAeQAAAIgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgDQAEgEAGAAQAEAAADACIAFAEQACAEAAAEIAAADQAIgJAJgEQAHgEAMAAQALAAAJAEQAJAFAFAHQACAFABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_1268.setTransform(-300.6,141.6);

	this.shape_1269 = new cjs.Shape();
	this.shape_1269.graphics.f("#660000").s().p("AgKBBQgFgEAAgIIAAhpQAAgIAFgFQAEgEAGABQAHgBAEAEQAFAFAAAIIAABpQAAAIgFAEQgEAFgHgBQgGABgEgFg");
	this.shape_1269.setTransform(-310.4,139.7);

	this.shape_1270 = new cjs.Shape();
	this.shape_1270.graphics.f("#660000").s().p("AgWA8QgJgDgGgGQgGgFgDgGQgDgGAAgEQAAgFADgDQAEgDAFAAQADAAADABQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAFAMAGAFQAGAHAKgBQAGAAAFgCQAGgDAEgFQADgFAAgHQAAgKgGgFQgHgHgKAAIgFABIgGAAQgGABgCgDQgDgCAAgEQAAgEADgCQAEgCAHgBIAEAAQAIABAHgFQAGgFAAgJQAAgGgFgFQgFgFgJAAQgFAAgEACQgEABgCADQgDACgCAEIgDAHQAAAAgBABQAAAAAAABQgBAAAAAAQgBABgBAAIgFABQgFAAgCgDQgEgDAAgEQAAgFADgEQADgFAGgFQAGgEAJgDQAJgDAKAAQAJAAAIADQAIACAFAEQAGAEADAGQADAGAAAGQAAAIgEAHQgFAGgHAGQAHADAFAEQAFAFAEAFQACAFAAAHQAAAIgDAHQgEAIgHAFQgHAFgJAEQgKADgLAAQgLAAgKgEg");
	this.shape_1270.setTransform(-116.4,116.3);

	this.shape_1271 = new cjs.Shape();
	this.shape_1271.graphics.f("#660000").s().p("AgdA5QgLgFgFgHQgEgIgBgFQAAgDAEgDQADgEAFAAQAIAAAEAJQAEAHAGAFQAHAEAJAAQAGAAAFgDQAHgEACgGQAEgGAAgIQAAgIgEgFQgDgHgGgBQgFgDgGAAQgJAAgDABIgLAGQgGAFgFAAQgEAAgFgEQgDgCAAgDIABgGIAJgpQAAgIAEgDQAEgDAJAAIAyAAQAPAAAAAKQAAAFgDACQgEADgHAAIguAAIgFAbQAOgGALAAQAIAAAJADQAIADAGAGQAHAFADAGQAEAIAAAJQAAAMgHAKQgGAKgMAGQgMAGgPAAQgSAAgKgGg");
	this.shape_1271.setTransform(-128.2,116.4);

	this.shape_1272 = new cjs.Shape();
	this.shape_1272.graphics.f("#660000").s().p("AgYA7QgDgDAAgHQAAgGACgJIAJgXQAGgMAJgOQAIgNAMgOIg0AAQgIAAgDgCQgFgDAAgFQAAgHAFgCQAEgBAHAAIBBAAQAJAAAFACQADADAAAGQABAEgFAFIgMAOQgGAGgHALQgGALgGAOIgDAMIgDALIgBAKQgBAKgEADQgEADgGAAQgGAAgEgEg");
	this.shape_1272.setTransform(-139.7,116.4);

	this.shape_1273 = new cjs.Shape();
	this.shape_1273.graphics.f("#660000").s().p("AAMA8QgDgDAAgHIAAhMQgYAQgJAAQgEAAgDgDQgDgCAAgFQAAgDADgCIALgGQAMgFAHgFQAGgGAGgGIAHgIQABgCAFAAQAFAAADADQADAEAAAGIAABhQAAARgNAAQgGAAgEgEg");
	this.shape_1273.setTransform(-153.3,116.3);

	this.shape_1274 = new cjs.Shape();
	this.shape_1274.graphics.f("#660000").s().p("AAMBRQgCAAgEgDIgHgKQgHgLgFgLQgFgKgDgLQgCgLAAgOQgBgLADgMQACgLAGgLQAFgLAHgLIAHgKQAEgCACgBIAIgBQAEAAAAACIgEAJIgIASQgEAKgEAOQgEANABAPQgBAPAEAOQAEAOAEAKIAIASIAEAJQAAACgEAAIgIgBg");
	this.shape_1274.setTransform(-161.4,118);

	this.shape_1275 = new cjs.Shape();
	this.shape_1275.graphics.f("#660000").s().p("AgZA9QgLgDgGgGQgGgEAAgHQAAgDAEgEQADgCAFAAQAFAAAFAFIAEAEIAGAFIAGACIAJABQAJgBAGgCQAGgCACgFQACgFABgEIABgRQgHAHgIAEQgIAEgKAAQgOAAgKgGQgJgGgGgLQgFgKAAgOQAAgKADgJQADgIAGgGQAGgFAIgDQAJgEAJAAQAKAAAIAFQAJADAHAIIAAgDQAAgGADgDQAEgEAFAAQAIAAACAFQADAEAAAIIAABDQAAAMgDAIQgDAJgGAFQgGAFgLADQgJADgOAAQgOAAgLgEgAgRgnQgIAIAAAOQABAOAHAHQAHAGAKABQAHAAAFgEQAHgDADgFQAEgGAAgJQAAgOgHgJQgHgHgMgBQgLABgGAHg");
	this.shape_1275.setTransform(-188.2,119.7);

	this.shape_1276 = new cjs.Shape();
	this.shape_1276.graphics.f("#660000").s().p("AAjA9QgEgEAAgIIAAgqIg9AAIAAAqQAAAIgEAEQgFAEgGAAQgHAAgDgEQgEgEAAgIIAAhhQAAgIAEgEQADgEAHAAQAHAAAEAEQAEAEAAAIIAAAkIA9AAIAAgkQAAgIAEgEQAEgEAHAAQAGAAAEAEQAEAEAAAIIAABhQAAAIgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_1276.setTransform(-237.1,116.2);

	this.shape_1277 = new cjs.Shape();
	this.shape_1277.graphics.f("#660000").s().p("AAaAsQgDgEAAgGIAAgDQgFAGgGADQgFAEgGACQgFABgIAAQgKAAgHgDQgIgEgFgGQgEgHAAgOIAAguQgBgHAEgDQAEgDAFAAQAHAAADADQAEAEAAAGIAAAlQAAAIACAFQACAGAEADQADADAIAAQAFAAAGgDQAGgEADgFQACgFAAgQIAAgdQAAgGAEgEQAEgDAGAAQAFAAAEADQAEADgBAHIAABDQAAAHgDADQgEADgFAAQgFAAgEgDg");
	this.shape_1277.setTransform(-273.1,118);

	this.shape_1278 = new cjs.Shape();
	this.shape_1278.graphics.f("#660000").s().p("AgZA9QgLgDgGgGQgGgEAAgHQAAgDADgEQAEgCAFAAQAFAAAFAFIAFAEIAEAFIAHACIAJABQAKgBAFgCQAGgCADgFQABgFABgEIABgRQgHAHgIAEQgIAEgKAAQgOAAgJgGQgKgGgGgLQgFgKAAgOQAAgKADgJQADgIAHgGQAGgFAHgDQAJgEAJAAQAKAAAIAFQAJADAHAIIAAgDQAAgGADgDQAEgEAFAAQAIAAADAFQACAEAAAIIAABDQAAAMgDAIQgDAJgGAFQgGAFgKADQgLADgNAAQgPAAgKgEgAgSgnQgHAIAAAOQAAAOAIAHQAHAGAKABQAGAAAGgEQAGgDAFgFQADgGAAgJQAAgOgHgJQgIgHgLgBQgKABgIAHg");
	this.shape_1278.setTransform(-285.7,119.7);

	this.shape_1279 = new cjs.Shape();
	this.shape_1279.graphics.f("#660000").s().p("AAuA8QgEgDAAgHIAAhWIgWBPIgEALQgCAEgDADQgEADgHAAQgEAAgDgCQgEgCgCgDIgDgHIgDgHIgWhPIAABWQgBAHgDADQgEAEgGAAQgFAAgFgEQgDgDAAgHIAAhjQAAgIAFgDQAEgDAJAAIAJAAQAIAAAEACQADABACADIAEALIAUBEIAVhEIAEgLQACgDADgBQAEgCAIAAIAJAAQAIAAAGADQAEADAAAIIAABjQAAAHgDADQgEAEgGAAQgGAAgEgEg");
	this.shape_1279.setTransform(-305.4,116.3);

	this.shape_1280 = new cjs.Shape();
	this.shape_1280.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgcQgGAFgEAGQgDAIAAAJQAAAKADAHQAEAHAGAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNAAQgHAAgHADg");
	this.shape_1280.setTransform(-201.4,214.1);

	this.shape_1281 = new cjs.Shape();
	this.shape_1281.graphics.f("#660000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgIADgDQAFgDAFgBQAHAAADAFQAEADAAAHIAAACQAIgIAJgEQAJgEAKAAQANAAALAGQALAGAGALQAHAMAAAQQAAALgDAIQgFAKgGAHQgHAGgIAEQgJAEgKAAQgLAAgJgFQgIgFgIgHIAAAlQAAARgOAAQgHAAgDgFgAgSgqQgJAJABAQQgBAPAJAGQAHAJAMAAQAHAAAGgEQAGgEADgFQAEgIAAgKQAAgKgDgHQgDgHgHgEQgGgEgHAAQgLABgIAHg");
	this.shape_1281.setTransform(-214.3,216);

	this.shape_1282 = new cjs.Shape();
	this.shape_1282.graphics.f("#660000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgCgFgDgDQgDgDgIAAQgFAAgFACQgFADgDAFQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgGAAgEgEQgDgEAAgIIAAgnIgCgPQAAgEgDgEQgEgDgGAAQgOAAgFAIQgFAIAAAQIAAAhQAAAIgDAEQgEAEgHAAQgGAAgEgEQgFgEAAgIIAAhHQAAgGAEgEQADgEAHAAQAFAAAFADQADAEAAAGIAAACQAIgHAJgEQAIgEAKABQALgBAHAEQAIAEAEAHQAHgHAJgEQAIgEAKABQAMAAAIADQAJAFAEAHQAEAGAAAPIAAAwQAAAIgEAEQgEAEgHAAQgGAAgFgEg");
	this.shape_1282.setTransform(-282,214.1);

	this.shape_1283 = new cjs.Shape();
	this.shape_1283.graphics.f("#660000").s().p("AgWBBQgLgEgHgHQgIgGgEgKQgEgJAAgLQAAgMAEgIQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALADAHAHQAIAHAEAJQAEAIAAAMQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgKQgHAEgDAGQgEAIAAAKQAAAKAEAHQADAHAHAEQAGAEAIAAQANAAAIgJQAHgIAAgPQAAgQgHgHQgIgJgNAAQgIAAgGAEgAgUgtQAAgBADgEIAFgIQADgGAEgCQADgCAFAAIAOAAQAFAAAAABIgGAGIgLAKIgIAGQgFADgHAAQgFAAAAgDg");
	this.shape_1283.setTransform(248.4,188.1);

	this.shape_1284 = new cjs.Shape();
	this.shape_1284.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgCQgGAFgFAEQgGAEgHABQgFADgHAAQgLAAgJgFQgIgDgHgIQgGgHgDgJQgEgJAAgLQAAgXAOgNQANgNAVAAQALAAAJAEQAIADAIAIIAAglQAAgHADgEQAEgFAGAAQAHABADADQAEAEAAAHIAABtQAAAHgEADQgDAFgHAAQgFAAgEgFgAgNgIQgGADgDAGQgEAIAAAJQAAAKAEAIQADAGAGAEQAGAEAHAAQAIAAAGgEQAGgDAEgHQAEgHAAgLQAAgKgEgHQgEgGgGgEQgGgEgIAAQgHABgGAEg");
	this.shape_1284.setTransform(229.1,188.1);

	this.shape_1285 = new cjs.Shape();
	this.shape_1285.graphics.f("#660000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgIADgDQAFgEAGAAQAFAAAFAFQADADAAAHIAAACQAIgIAJgEQAIgEAKAAQAOAAALAGQALAGAHALQAGAMAAAPQAAAMgEAIQgDAKgHAGQgGAHgKAEQgIAEgLAAQgLAAgIgFQgIgFgIgHIAAAlQAAARgNAAQgJgBgCgEgAgTgqQgHAJgBAPQABAPAHAIQAIAIALAAQAIAAAGgEQAGgEAEgFQADgIAAgKQAAgKgDgHQgEgHgFgEQgHgEgIAAQgKABgJAHg");
	this.shape_1285.setTransform(210.4,191.8);

	this.shape_1286 = new cjs.Shape();
	this.shape_1286.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAGgKAFQgIADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAHgHQAIgGANgDIANgCIASgEIARgDQgBgLgEgEQgEgFgMABQgKgBgGADQgFADgEAFIgGAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAGgHQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHADAIIADAJQAAAFgEADQgFADgFAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAEAEQAGADAIAAQAHABAHgEQAIgDADgFQADgGABgNIAAgDIgTAEg");
	this.shape_1286.setTransform(137.4,189.9);

	this.shape_1287 = new cjs.Shape();
	this.shape_1287.graphics.f("#660000").s().p("AAaAvQgEgEAAgIIAAgoQAAgMgDgHQgFgGgLgBQgHAAgGAEQgHAFgDAHQgCAFAAAOIAAAfQAAAIgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgEQAEgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAIgIAJgFQAHgEAMAAQALAAAJAEQAJAFAFAIQACAEABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_1287.setTransform(52.7,189.9);

	this.shape_1288 = new cjs.Shape();
	this.shape_1288.graphics.f("#660000").s().p("AgXBBQgKgEgIgHQgHgGgEgKQgEgJAAgLQAAgMAEgIQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALADAHAHQAIAHAEAJQAEAIAAAMQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgKQgHAEgDAGQgEAIABAKQgBAKAEAHQADAHAHAEQAGAEAIAAQANAAAHgJQAIgIAAgPQAAgQgIgHQgHgJgNAAQgHAAgHAEgAgUgtQAAgBADgEIAEgIQAEgGAEgCQADgCAFAAIAOAAQAGAAgBABIgFAGIgMAKIgIAGQgFADgIAAQgEAAAAgDg");
	this.shape_1288.setTransform(15.6,188.1);

	this.shape_1289 = new cjs.Shape();
	this.shape_1289.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEADgGABQgFgBgEgDg");
	this.shape_1289.setTransform(6.2,188.1);

	this.shape_1290 = new cjs.Shape();
	this.shape_1290.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAGgJAFQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAIgHQAHgGANgDIAOgCIARgEIARgDQgBgLgEgEQgEgFgNABQgKgBgFADQgGADgEAFIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHACAIIADAJQAAAFgEADQgFADgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAFAEQAFADAHAAQAIABAHgEQAHgDAEgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_1290.setTransform(-37.2,189.9);

	this.shape_1291 = new cjs.Shape();
	this.shape_1291.graphics.f("#660000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgIADgDQAEgEAGAAQAHAAADAFQAEADAAAHIAAACQAIgIAJgEQAJgEAKAAQANAAALAGQALAGAGALQAHAMAAAPQAAAMgDAIQgFAKgGAGQgGAHgJAEQgJAEgKAAQgLAAgJgFQgJgFgHgHIAAAlQAAARgOAAQgHgBgDgEgAgSgqQgJAJABAPQgBAPAJAIQAHAIALAAQAIAAAGgEQAGgEAEgFQADgIAAgKQAAgKgDgHQgDgHgGgEQgHgEgIAAQgKABgIAHg");
	this.shape_1291.setTransform(-50,191.8);

	this.shape_1292 = new cjs.Shape();
	this.shape_1292.graphics.f("#660000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgIADgDQAFgEAFAAQAHAAADAFQAEADAAAHIAAACQAIgIAJgEQAJgEAKAAQANAAALAGQALAGAGALQAHAMAAAPQAAAMgDAIQgFAKgGAGQgHAHgIAEQgJAEgKAAQgLAAgJgFQgIgFgIgHIAAAlQAAARgOAAQgHgBgDgEgAgSgqQgJAJABAPQgBAPAJAIQAHAIAMAAQAHAAAGgEQAGgEADgFQAEgIAAgKQAAgKgDgHQgDgHgHgEQgGgEgHAAQgLABgIAHg");
	this.shape_1292.setTransform(-84.7,191.8);

	this.shape_1293 = new cjs.Shape();
	this.shape_1293.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgCQgGAFgFAEQgGAEgGABQgGADgIAAQgKAAgJgFQgJgDgGgIQgGgHgEgJQgDgJAAgLQAAgXANgNQAOgNAUAAQAMAAAJAEQAIADAIAIIAAglQAAgHAEgEQADgFAHAAQAGABADADQAEAEAAAHIAABtQAAAHgEADQgEAFgFAAQgGAAgEgFgAgNgIQgGADgDAGQgEAIAAAJQAAAKAEAIQADAGAHAEQAFAEAHAAQAHAAAHgEQAGgDAEgHQAEgHgBgLQABgKgEgHQgEgGgGgEQgHgEgHAAQgHABgGAEg");
	this.shape_1293.setTransform(-116.8,188.1);

	this.shape_1294 = new cjs.Shape();
	this.shape_1294.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAGgKAFQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAIgHQAHgGANgDIAOgCIARgEIAQgDQAAgLgEgEQgEgFgNABQgKgBgFADQgFADgFAFIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHADAIIACAJQAAAFgEADQgEADgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAFAEQAFADAHAAQAIABAIgEQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_1294.setTransform(-134.9,189.9);

	this.shape_1295 = new cjs.Shape();
	this.shape_1295.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAgvIgEAAQgGABgDgDQgEgDAAgEQAAgDAEgDQADgCAHgBIADAAIAAgPIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGABADACQADADAAADQAAAFgEADQgFABgIAAIgGAAIAAAtIABAJQAAADACADQACABAFABIAHgBIAHgBQADAAADACQADADAAAEQAAAGgIADQgIADgOAAQgMAAgHgEg");
	this.shape_1295.setTransform(-144.7,188.2);

	this.shape_1296 = new cjs.Shape();
	this.shape_1296.graphics.f("#660000").s().p("AgJBBQgEgDAAgIIAAhrQAAgIADgDQAEgFAGAAQAGAAAEAFQAEADAAAIIAABrQAAAIgEADQgEAFgGAAQgGAAgDgFg");
	this.shape_1296.setTransform(-151.7,188.1);

	this.shape_1297 = new cjs.Shape();
	this.shape_1297.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAGgJAFQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAIgHQAHgGANgDIAOgCIARgEIARgDQgBgLgEgEQgEgFgNABQgKgBgFADQgGADgEAFIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHACAIIADAJQAAAFgEADQgFADgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAFAEQAFADAHAAQAIABAHgEQAHgDAEgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_1297.setTransform(-160.9,189.9);

	this.shape_1298 = new cjs.Shape();
	this.shape_1298.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgEIgLAKQgFAEgHACQgGACgJgBQgKAAgIgDQgIgEgEgGQgGgJAAgPIAAgwQAAgIAEgDQADgEAHAAQAHAAAEAEQADADAAAIIAAAnQAAAJACAGQACAGAEADQAFADAHABQAHgBAFgDQAHgEADgHQACgFAAgQIAAgfQAAgIAFgDQAEgEAGAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_1298.setTransform(-186,189.9);

	this.shape_1299 = new cjs.Shape();
	this.shape_1299.graphics.f("#660000").s().p("AgaAvQgLgFgGgFQgFgHAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAGQAFAGAGAEQAGACAKAAQAIAAAFgCQAGgEAAgFQAAgGgGgDQgFgDgNgDQgPgDgIgDQgKgDgFgGQgGgGAAgIQAAgIAFgGQAGgHAKgEQAJgEAOAAQALAAAIACQAKACAFAEQAGADADAEQADAEAAAEQAAAEgDADQgEADgGAAQgDAAgEgDIgHgGQgDgDgEgCQgFgDgHAAQgHAAgFADQgGADAAAEQABAEADACIALAFIAQAEQANADAJADQAIADAFAGQAEAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgPAAgKgEg");
	this.shape_1299.setTransform(-198.3,189.9);

	this.shape_1300 = new cjs.Shape();
	this.shape_1300.graphics.f("#660000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgIAEgDQADgEAHAAQAGAAAEAFQADADAAAHIAAACQAIgIAJgEQAJgEAJAAQAOAAALAGQALAGAGALQAHAMAAAPQAAAMgEAIQgEAKgGAGQgHAHgJAEQgIAEgLAAQgLAAgIgFQgJgFgHgHIAAAlQAAARgNAAQgJgBgCgEgAgTgqQgHAJgBAPQABAPAHAIQAJAIALAAQAHAAAGgEQAGgEADgFQAEgIAAgKQAAgKgDgHQgEgHgGgEQgGgEgHAAQgLABgJAHg");
	this.shape_1300.setTransform(-250.2,191.8);

	this.shape_1301 = new cjs.Shape();
	this.shape_1301.graphics.f("#660000").s().p("AgOAaQAAAAgBgBQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAgEAFgCQALgGAAgIQgGAAgFgDQgFgEAAgHQAAgFAFgFQAFgDAGAAQAFAAAEACQAEADACAEQACAEAAAIQAAAIgEAIQgEAHgHAFQgFAFgFAAQgEAAgCgCg");
	this.shape_1301.setTransform(-265.8,195);

	this.shape_1302 = new cjs.Shape();
	this.shape_1302.graphics.f("#660000").s().p("AgbAvQgLgFgFgFQgFgHAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAGQAFAGAGAEQAGACAJAAQAJAAAGgCQAFgEAAgFQAAgGgFgDQgHgDgLgDQgPgDgKgDQgJgDgGgGQgFgGAAgIQAAgIAFgGQAFgHAKgEQALgEAOAAQAJAAAJACQAJACAHAEQAFADAEAEQACAEAAAEQAAAEgDADQgDADgGAAQgFAAgDgDIgHgGQgDgDgFgCQgEgDgGAAQgIAAgGADQgEADAAAEQgBAEAEACIAKAFIARAEQAOADAIADQAIADAEAGQAFAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgOAAgMgEg");
	this.shape_1302.setTransform(-274.3,189.9);

	this.shape_1303 = new cjs.Shape();
	this.shape_1303.graphics.f("#660000").s().p("AAhAvQgEgEgFgGQgLAGgJAFQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAHgHQAIgGANgDIAOgCIARgEIARgDQgBgLgEgEQgEgFgNABQgJgBgGADQgFADgFAFIgFAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHACAIIADAJQAAAFgEADQgFADgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAFAEQAFADAHAAQAIABAHgEQAIgDADgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_1303.setTransform(-292.2,189.9);

	this.shape_1304 = new cjs.Shape();
	this.shape_1304.graphics.f("#660000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgIADgDQAFgEAFAAQAHAAADAFQAEADAAAHIAAACQAJgIAIgEQAJgEAKAAQANAAALAGQALAGAHALQAGAMAAAPQAAAMgDAIQgEAKgHAGQgGAHgKAEQgIAEgKAAQgLAAgJgFQgIgFgIgHIAAAlQAAARgOAAQgHgBgDgEgAgSgqQgJAJAAAPQAAAPAJAIQAHAIALAAQAIAAAGgEQAGgEAEgFQADgIAAgKQAAgKgDgHQgEgHgFgEQgHgEgIAAQgKABgIAHg");
	this.shape_1304.setTransform(-305,191.8);

	this.shape_1305 = new cjs.Shape();
	this.shape_1305.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgFAHgGADQgGADgGACQgGACgIAAQgKAAgJgDQgIgEgHgHQgGgIgEgJQgDgKAAgKQAAgXAOgNQANgNAUAAQAMAAAJADQAIAFAIAHIAAglQAAgHAEgFQADgDAHAAQAGAAADADQAEADAAAIIAABtQAAAHgEAEQgEADgFAAQgGAAgEgDgAgNgIQgGADgDAHQgEAGAAALQAAAJAEAIQADAGAHAFQAFADAHAAQAHAAAHgDQAGgEAEgHQAEgHgBgKQABgKgEgIQgEgGgGgEQgHgDgHgBQgHAAgGAFg");
	this.shape_1305.setTransform(220.3,163.9);

	this.shape_1306 = new cjs.Shape();
	this.shape_1306.graphics.f("#660000").s().p("AgyBFQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgCACgDIBXh7IAEgFQACgCADAAQADAAACACQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAACgEAGIhWB6QgEAEgEAAIgFgBgAAlA/QgIgEgEgIQgFgHAAgLQABgSAHgJQAJgIAQAAQAJAAAGACQAGABAEAFQAFAEABAGQADAHAAAJQAAASgJAIQgJAJgQAAQgJAAgHgEgAAtALQgCACgBAFQgCAGAAAIQAAALAEAHQACAFAHAAQAIAAADgGQADgFAAgNQAAgMgDgFQgDgFgIgBQgEABgEACgAhGgCQgHgEgEgHQgFgJAAgKQAAgMAEgJQADgHAHgFQAIgDALAAQAIAAAHACQAFACAFAFQAEAEACAHQACAGABAIQgBASgIAIQgKAIgPAAQgJAAgIgCgAg9g3QgCADgBAGQgCAEAAAIQAAAJACAFQABAEACADQADADAFAAQAIAAADgGQADgGAAgMQAAgMgDgGQgDgFgIAAQgFAAgDACg");
	this.shape_1306.setTransform(199.4,164.1);

	this.shape_1307 = new cjs.Shape();
	this.shape_1307.graphics.f("#660000").s().p("AgbA9QgNgIgGgOQgEgIgBgJQgCgJAAgLQAAgNACgKQACgMADgHQAGgOAMgHQAMgHAQABQAKAAAJADQAJACAGAHQAHAFAFAJQAIAPAAAaQAAAPgCALQgDALgFAJQgHALgMAFQgLAHgOAAQgPgBgMgHgAgSglQgGAMAAAZQAAARACALQADALAFAFQAGAGAIAAQAKAAAFgGQAGgGACgLQACgLAAgQQAAgRgCgLQgDgKgFgGQgGgFgJAAQgNAAgFAMg");
	this.shape_1307.setTransform(184,164);

	this.shape_1308 = new cjs.Shape();
	this.shape_1308.graphics.f("#660000").s().p("AgbBAQgKgFgGgGQgFgHAAgGQAAgEADgDQAEgDAFAAQAEAAAEADQAEACABAEQADAFAFAEQAFADAHAAQAFAAAGgCQAFgDAEgFQAHgKACgYQgHAGgJAEQgIADgKAAQgKAAgIgDQgJgDgGgGQgGgGgDgHQgEgIAAgJQAAgJAEgIQAEgJAHgHQAHgFAJgEQAKgDAMAAQAMgBALAFQALAEAHAIQAHAIAEANQAEAMAAAQQAAARgEANQgEANgIAKQgIAIgLAFQgLAEgNABQgNgBgKgEgAgTgqQgHAHAAANQAAAMAHAHQAHAHAKAAQAGgBAGgDQAGgBAEgHQADgFAAgHQAAgHgCgFQgCgFgDgFIgIgFQgFgCgFAAQgKgBgHAIg");
	this.shape_1308.setTransform(171.1,164);

	this.shape_1309 = new cjs.Shape();
	this.shape_1309.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgGAHgFADQgGADgGACQgGACgIAAQgKAAgIgDQgKgEgGgHQgGgIgEgJQgDgKAAgKQAAgXANgNQANgNAVAAQAMAAAIADQAJAFAIAHIAAglQAAgHAEgFQADgDAHAAQAGAAAEADQADADAAAIIAABtQAAAHgDAEQgFADgFAAQgGAAgEgDgAgNgIQgGADgEAHQgDAGAAALQAAAJADAIQAEAGAGAFQAHADAGAAQAIAAAGgDQAGgEAEgHQADgHABgKQgBgKgDgIQgEgGgGgEQgGgDgIgBQgHAAgGAFg");
	this.shape_1309.setTransform(134.1,163.9);

	this.shape_1310 = new cjs.Shape();
	this.shape_1310.graphics.f("#660000").s().p("AAaAvQgDgEAAgIIAAgoQAAgNgFgGQgDgHgMABQgHAAgGADQgHAEgDAHQgBAGAAAPIAAAeQAAAIgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgDQAEgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAIgJAJgEQAHgEAMAAQALAAAJAEQAJAFAFAHQACAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_1310.setTransform(80.9,165.8);

	this.shape_1311 = new cjs.Shape();
	this.shape_1311.graphics.f("#660000").s().p("AgJBCQgEgEAAgIIAAhrQAAgIADgEQAEgDAGAAQAGAAAEADQAEAEAAAIIAABrQAAAIgEAEQgEADgGAAQgGAAgDgDg");
	this.shape_1311.setTransform(40.6,163.9);

	this.shape_1312 = new cjs.Shape();
	this.shape_1312.graphics.f("#660000").s().p("AgWAvQgLgDgIgIQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGALgEQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgcQgGAFgEAGQgEAIAAAJQAAAKAEAHQAEAHAGAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgIAAgGADg");
	this.shape_1312.setTransform(13.2,165.8);

	this.shape_1313 = new cjs.Shape();
	this.shape_1313.graphics.f("#660000").s().p("AgJBCQgEgEAAgIIAAhrQAAgIADgEQAEgDAGAAQAGAAAEADQAEAEAAAIIAABrQAAAIgEAEQgEADgGAAQgGAAgDgDg");
	this.shape_1313.setTransform(-46.1,163.9);

	this.shape_1314 = new cjs.Shape();
	this.shape_1314.graphics.f("#660000").s().p("AgJBCQgEgEAAgIIAAhrQAAgIADgEQAEgDAGAAQAGAAAEADQAEAEAAAIIAABrQAAAIgEAEQgEADgGAAQgGAAgDgDg");
	this.shape_1314.setTransform(-51.9,163.9);

	this.shape_1315 = new cjs.Shape();
	this.shape_1315.graphics.f("#660000").s().p("AgKBDQgEgCgDgEIgFgHIgDgKIglhWIgCgFIgCgEIAAgFQAAgFAEgEQAEgDAHAAQAIAAADAEQADAEAEAKIAiBZIAihaIAFgKQABgDADgCQADgDAGABQAEgBADACIAFAFQACADAAACIAAAFIgCAEIgCAFIglBXIgEAKIgFAHQgCAEgEACQgFACgGAAQgFAAgFgCg");
	this.shape_1315.setTransform(-67.7,163.9);

	this.shape_1316 = new cjs.Shape();
	this.shape_1316.graphics.f("#660000").s().p("AgZBBQgLgFgGgJIgGgMQgCgHAAgFQAAgHAEgEQAEgDAGAAQAHAAADADQADAEACAGIADAMQACADAEAEQAEADAIAAQAUgBAAgaIAAhJQAAgIAEgFQAEgDAHAAQAIAAAEADQAEAFAAAIIAABGIgBAPQgBAGgDAHQgFALgMAGQgMAHgRgBQgPABgKgFg");
	this.shape_1316.setTransform(-151.6,163.9);

	this.shape_1317 = new cjs.Shape();
	this.shape_1317.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgcQgHAFgDAGQgEAIABAJQgBAKAEAHQADAHAHAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgIAAgGADg");
	this.shape_1317.setTransform(-174.6,165.8);

	this.shape_1318 = new cjs.Shape();
	this.shape_1318.graphics.f("#660000").s().p("AAcAxQgDgDgEgFIgVgbIgUAbIgIAIQgDACgFAAQgGAAgDgDQgEgDAAgEQAAgEAFgIIAageIgXgbQgFgIAAgEQgBgEAEgDQAEgDAFAAQAFAAAEADIAHAIIASAVIASgVIAIgIQADgDAFAAQAGAAAEADQADADAAAEIgBAFIgFAHIgXAbIAaAeQAGAJAAADQAAAEgEADQgEADgFAAQgFAAgEgCg");
	this.shape_1318.setTransform(-205.1,165.8);

	this.shape_1319 = new cjs.Shape();
	this.shape_1319.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgcQgGAFgEAGQgDAIgBAJQABAKADAHQAEAHAGAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgHAAgHADg");
	this.shape_1319.setTransform(-253.1,165.8);

	this.shape_1320 = new cjs.Shape();
	this.shape_1320.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgFAHgGADQgGADgHACQgFACgHAAQgLAAgIgDQgJgEgHgHQgGgIgDgJQgEgKAAgKQAAgXANgNQANgNAWAAQALAAAIADQAJAFAIAHIAAglQAAgHADgFQAEgDAGAAQAHAAAEADQADADAAAIIAABtQAAAHgDAEQgFADgGAAQgFAAgEgDgAgNgIQgHADgDAHQgDAGAAALQAAAJADAIQAEAGAGAFQAHADAGAAQAHAAAHgDQAGgEAEgHQADgHABgKQgBgKgDgIQgEgGgGgEQgHgDgHgBQgHAAgGAFg");
	this.shape_1320.setTransform(-266.6,163.9);

	this.shape_1321 = new cjs.Shape();
	this.shape_1321.graphics.f("#660000").s().p("AAaAvQgEgEAAgIIAAgoQAAgNgDgGQgFgHgLABQgHAAgGADQgHAEgDAHQgCAGAAAPIAAAeQAAAIgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgDQAEgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAIgJAJgEQAHgEAMAAQALAAAJAEQAJAFAFAHQACAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_1321.setTransform(-285.3,165.8);

	this.shape_1322 = new cjs.Shape();
	this.shape_1322.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAguIgEAAQgGgBgDgCQgEgCAAgEQAAgFAEgCQADgDAHABIADAAIAAgQIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGgBADADQADACAAAFQAAAEgEADQgFACgIAAIgGAAIAAAtIABAJQAAACACACQACADAFAAIAHgBIAHgBQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_1322.setTransform(-307.9,164.1);

	this.shape_1323 = new cjs.Shape();
	this.shape_1323.graphics.f("#660000").s().p("AAgAvQgEgDgFgIQgKAHgJAFQgJADgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIAOgDIARgEIARgDQgBgLgEgEQgEgFgMABQgKAAgGACQgFADgEAFIgGAHQgCACgFAAQgFAAgDgDQgEgDAAgEQAAgGAGgHQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAJAAAOIAAAOIAAANQAAAHACAIIADAKQAAADgEAEQgFADgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAEAEQAFADAJAAQAHAAAHgDQAIgDADgFQADgGABgNIAAgEIgSAFg");
	this.shape_1323.setTransform(212.9,141.6);

	this.shape_1324 = new cjs.Shape();
	this.shape_1324.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgDIgLAKQgFAEgHACQgGABgJABQgKgBgIgDQgIgEgEgHQgGgHAAgPIAAgxQAAgIAEgDQADgEAHAAQAHAAAEAEQADADAAAIIAAAnQAAAJACAFQACAHAEADQAFADAHABQAHAAAFgFQAHgDADgHQACgEAAgRIAAgfQAAgIAFgDQAEgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAIgEADQgEAEgFAAQgGAAgEgEg");
	this.shape_1324.setTransform(169.1,141.6);

	this.shape_1325 = new cjs.Shape();
	this.shape_1325.graphics.f("#660000").s().p("AgaAuQgLgDgGgHQgFgGAAgGQAAgEADgDQADgDAGAAQAEAAACACIAFAGQAFAGAGAEQAGACAKAAQAIAAAFgCQAGgEAAgEQAAgHgGgDQgGgDgMgDQgPgDgIgEQgKgCgGgGQgFgGAAgIQAAgIAFgGQAGgHAKgEQAJgEAOAAQAKAAAKACQAIACAGADQAGAEADAEQADAEABAEQAAAEgEADQgEADgGAAQgDAAgEgDIgHgGQgDgDgEgCQgFgDgHAAQgHAAgFADQgFADgBAEQAAAEAEACIALAFIAQAEQANADAJAEQAIACAFAGQAEAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgQAAgKgFg");
	this.shape_1325.setTransform(137.9,141.6);

	this.shape_1326 = new cjs.Shape();
	this.shape_1326.graphics.f("#660000").s().p("AAgAvQgDgDgGgIQgKAHgKAFQgIADgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAIgIQAHgGANgCIANgDIASgEIAQgDQAAgLgEgEQgEgFgMABQgLAAgFACQgGADgDAFIgGAHQgBACgGAAQgFAAgDgDQgEgDAAgEQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAJAAAOIAAAOIgBANQAAAHAEAIIACAKQAAADgEAEQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAEAEQAFADAJAAQAHAAAIgDQAGgDAEgFQAEgGgBgNIAAgEIgSAFg");
	this.shape_1326.setTransform(92.6,141.6);

	this.shape_1327 = new cjs.Shape();
	this.shape_1327.graphics.f("#660000").s().p("AgDBEIgKgDIgHgGIgIgGIAAACQAAAHgDAEQgFADgFAAQgHAAgDgDQgEgEAAgHIAAhsQAAgHAEgFQADgEAHABQAGgBAEAEQADAEAAAHIAAAmQAIgIAIgDQAJgEALAAQAOAAALAGQALAGAGALQAGAKAAAQQAAALgEAKQgDAJgGAHQgGAGgJAFQgJADgLAAQgHAAgEgBgAgMgIQgHADgEAHQgEAHAAAKQABAPAHAIQAIAIAMAAQALAAAIgIQAHgJAAgOQAAgLgDgGQgEgHgFgDQgGgFgIAAQgIAAgFAFg");
	this.shape_1327.setTransform(53,139.7);

	this.shape_1328 = new cjs.Shape();
	this.shape_1328.graphics.f("#660000").s().p("AgaAuQgLgDgGgHQgFgGAAgGQAAgEADgDQADgDAGAAQAEAAACACIAFAGQAFAGAGAEQAGACAKAAQAIAAAFgCQAGgEAAgEQAAgHgGgDQgGgDgMgDQgPgDgIgEQgKgCgGgGQgFgGAAgIQAAgIAFgGQAGgHAKgEQAJgEAOAAQAKAAAKACQAIACAGADQAGAEADAEQADAEABAEQAAAEgEADQgEADgGAAQgDAAgEgDIgHgGQgDgDgEgCQgFgDgHAAQgHAAgFADQgFADgBAEQAAAEAEACIALAFIAQAEQANADAJAEQAIACAFAGQAEAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgQAAgKgFg");
	this.shape_1328.setTransform(17.8,141.6);

	this.shape_1329 = new cjs.Shape();
	this.shape_1329.graphics.f("#660000").s().p("AgXAvQgKgDgHgIQgIgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHAKgDQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgcQgGAEgEAHQgEAIAAAJQAAAKAEAHQAEAHAGAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgIAAgGADg");
	this.shape_1329.setTransform(5.5,141.6);

	this.shape_1330 = new cjs.Shape();
	this.shape_1330.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAguIgEAAQgGgBgDgCQgEgDAAgDQAAgEAEgDQADgDAHABIADAAIAAgQIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABAEIAAAJIAAASIALAAQAGgBADADQADADAAAEQAAAFgEACQgFACgIAAIgGAAIAAAsIABAJQAAADACADQACACAFAAIAHgBIAHgBQADAAADADQADACAAAEQAAAFgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_1330.setTransform(-4.4,139.9);

	this.shape_1331 = new cjs.Shape();
	this.shape_1331.graphics.f("#660000").s().p("AgaAuQgMgDgFgHQgFgGAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAGQAEAGAHAEQAGACAJAAQAJAAAGgCQAFgEAAgEQAAgHgFgDQgHgDgLgDQgQgDgIgEQgKgCgGgGQgFgGAAgIQAAgIAFgGQAFgHALgEQAKgEAOAAQAJAAAKACQAIACAGADQAGAEADAEQAEAEAAAEQgBAEgDADQgDADgHAAQgEAAgDgDIgHgGQgDgDgEgCQgFgDgGAAQgJAAgFADQgEADAAAEQAAAEADACIAKAFIARAEQANADAJAEQAIACAFAGQAEAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgPAAgLgFg");
	this.shape_1331.setTransform(-14.4,141.6);

	this.shape_1332 = new cjs.Shape();
	this.shape_1332.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgcQgHAEgDAHQgDAIgBAJQABAKADAHQADAHAHAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgHAAgHADg");
	this.shape_1332.setTransform(-52.3,141.6);

	this.shape_1333 = new cjs.Shape();
	this.shape_1333.graphics.f("#660000").s().p("AAWA2IAAgqQAAgMgDgFQgFgHgLAAQgGAAgHAEQgGADgDAGQgCAGAAAOIAAAhQAAAIgEAEQgEADgHAAQgOAAAAgPIAAhrQAAgIAEgEQAEgEAGABQAHgBAEAEQAEAEAAAIIAAAlQAFgFAFgEQAGgDAFgCQAGgCAHAAQAMAAAIAFQAIADAFAJQADAEABAGIABALIAAAwQAAAIgEAEQgEADgGAAQgPAAAAgPg");
	this.shape_1333.setTransform(-65.2,139.7);

	this.shape_1334 = new cjs.Shape();
	this.shape_1334.graphics.f("#660000").s().p("AgaAuQgLgDgGgHQgFgGAAgGQAAgEADgDQADgDAGAAQAEAAACACIAFAGQAFAGAGAEQAGACAJAAQAJAAAGgCQAFgEAAgEQAAgHgFgDQgHgDgMgDQgPgDgIgEQgKgCgGgGQgFgGAAgIQAAgIAFgGQAFgHALgEQAKgEANAAQAKAAAKACQAIACAGADQAGAEADAEQAEAEAAAEQAAAEgEADQgDADgHAAQgEAAgDgDIgHgGQgDgDgEgCQgFgDgHAAQgIAAgFADQgEADgBAEQAAAEAEACIAKAFIARAEQANADAJAEQAIACAFAGQAEAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgPAAgLgFg");
	this.shape_1334.setTransform(-82.9,141.6);

	this.shape_1335 = new cjs.Shape();
	this.shape_1335.graphics.f("#660000").s().p("AA5AvQgFgEAAgIIAAgpIgBgNQgBgFgDgDQgDgEgIABQgFAAgFACQgFAEgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgGAAgEgEQgDgEAAgIIAAgnIgBgPQgBgEgDgEQgEgEgHABQgNAAgFAIQgFAJAAAOIAAAiQAAAIgEAEQgDAEgHAAQgGAAgEgEQgFgEAAgIIAAhHQAAgGAEgEQADgEAHAAQAFAAAFAEQADADAAAGIAAACQAIgHAIgEQAJgEAKABQALgBAHAEQAHAEAGAHQAGgHAJgEQAJgEAJABQAMAAAJADQAIAEAEAIQAEAGAAAPIAAAwQAAAIgEAEQgEAEgHAAQgGAAgEgEg");
	this.shape_1335.setTransform(-110.9,141.6);

	this.shape_1336 = new cjs.Shape();
	this.shape_1336.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgcQgHAEgDAHQgDAIAAAJQAAAKADAHQADAHAHAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgIAAgGADg");
	this.shape_1336.setTransform(-156.5,141.6);

	this.shape_1337 = new cjs.Shape();
	this.shape_1337.graphics.f("#660000").s().p("AAXA2IAAgqQgBgMgEgFQgDgHgMAAQgHAAgFAEQgHADgDAGQgCAGAAAOIAAAhQAAAIgEAEQgEADgHAAQgOAAAAgPIAAhrQAAgIAEgEQAEgEAGABQAHgBAEAEQAEAEAAAIIAAAlQAFgFAGgEQAEgDAGgCQAGgCAIAAQAKAAAJAFQAIADAFAJQADAEABAGIABALIAAAwQAAAIgEAEQgEADgGAAQgOAAAAgPg");
	this.shape_1337.setTransform(-190.7,139.7);

	this.shape_1338 = new cjs.Shape();
	this.shape_1338.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgcQgGAEgEAHQgDAIgBAJQABAKADAHQAEAHAGAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgHAAgHADg");
	this.shape_1338.setTransform(-220.7,141.6);

	this.shape_1339 = new cjs.Shape();
	this.shape_1339.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgCQgFAGgGADQgGADgGACQgGACgIAAQgKAAgJgDQgIgFgHgGQgGgIgEgJQgDgKAAgKQAAgXAOgNQANgNAUAAQAMAAAJAEQAIAEAIAHIAAglQAAgHAEgFQADgEAGABQAHAAADADQAEAEAAAHIAABtQAAAHgEAEQgEADgGAAQgFAAgEgDgAgNgIQgGADgDAHQgEAGAAALQAAAKAEAHQADAHAHAEQAFADAHAAQAHAAAHgDQAGgEAEgHQAEgHgBgKQABgKgEgIQgEgGgGgEQgHgDgHgBQgHAAgGAFg");
	this.shape_1339.setTransform(-258,139.7);

	this.shape_1340 = new cjs.Shape();
	this.shape_1340.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgcQgHAEgDAHQgEAIAAAJQAAAKAEAHQAEAHAGAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgIAAgGADg");
	this.shape_1340.setTransform(-276.3,141.6);

	this.shape_1341 = new cjs.Shape();
	this.shape_1341.graphics.f("#660000").s().p("AgbBCQgNgEgIgGQgIgIgEgKQgEgMABgPIAAg/QgBgIAFgFQAEgEAHABQAHgBAFAEQADAFAAAIIAABBQAAALADAIQAEAHAHAFQAHAEAMgBQATABAHgJQAIgJAAgRIAAhBQgBgIAFgFQAEgEAHABQAHgBAFAEQADAFAAAIIAAA/QAAARgDAKQgEAKgJAIQgIAHgMADQgLADgPAAQgQAAgNgDg");
	this.shape_1341.setTransform(-303.9,139.7);

	this.shape_1342 = new cjs.Shape();
	this.shape_1342.graphics.f("#660000").s().p("AgaA8QgJgEgFgHQgFgGAAgGQAAgEADgDQADgCAFAAQAEAAAEACQADACACAFQACAEAFAEQAFACAGAAQAFAAAFgCQAFgCADgFQAHgJACgXQgHAGgIAEQgIADgIABQgJgBgIgDQgIgDgGgFQgGgGgDgHQgDgHAAgJQAAgIADgIQAEgIAGgFQAHgGAJgEQAJgDALAAQAMAAAJAEQAKAEAHAHQAHAJADALQAEAMAAAOQAAAPgEANQgEANgHAIQgHAJgKAEQgLAEgLAAQgNAAgKgEgAgSgnQgGAGAAAMQAAAMAGAGQAHAGAKAAQAFAAAFgCQAGgCADgGQAEgFAAgIQAAgFgCgFQgCgFgDgEQgEgDgEgCQgFgCgEAAQgJAAgHAHg");
	this.shape_1342.setTransform(-72.3,116.3);

	this.shape_1343 = new cjs.Shape();
	this.shape_1343.graphics.f("#660000").s().p("AgaA8QgJgEgFgHQgFgGAAgGQAAgEADgDQADgCAFAAQAEAAAEACQADACACAFQACAEAFAEQAFACAGAAQAFAAAFgCQAFgCADgFQAHgJACgXQgHAGgIAEQgIADgIABQgJgBgIgDQgIgDgGgFQgGgGgDgHQgDgHAAgJQAAgIADgIQAEgIAGgFQAHgGAJgEQAJgDALAAQAMAAAJAEQAKAEAHAHQAHAJADALQAEAMAAAOQAAAPgEANQgEANgHAIQgHAJgKAEQgLAEgLAAQgNAAgKgEgAgSgnQgGAGAAAMQAAAMAGAGQAHAGAKAAQAFAAAFgCQAGgCADgGQAEgFAAgIQAAgFgCgFQgCgFgDgEQgEgDgEgCQgFgCgEAAQgJAAgHAHg");
	this.shape_1343.setTransform(-102.7,116.3);

	this.shape_1344 = new cjs.Shape();
	this.shape_1344.graphics.f("#660000").s().p("AgYA7QgEgDAAgHQAAgGADgJIAJgXQAGgMAJgOQAHgNANgOIgzAAQgIAAgFgCQgEgDAAgFQAAgHAEgCQAFgBAIAAIBAAAQAJAAAFACQADADAAAGQAAAEgEAFIgMAOQgGAGgGALQgIALgFAOIgDAMIgCALIgCAKQgCAKgDADQgEADgGAAQgGAAgEgEg");
	this.shape_1344.setTransform(-113.8,116.4);

	this.shape_1345 = new cjs.Shape();
	this.shape_1345.graphics.f("#660000").s().p("AgKA8QgGgEgCgGQgCgHAAgLIAAgsIgDAAQgGAAgDgCQgDgCAAgEQAAgEADgCQADgCAHAAIACAAIAAgOIAAgJIACgGQACgCADgCQADgBADAAQAGAAACADQAEACAAAEIABAJIAAAQIAJAAQAGAAADACQADACAAAEQABAFgFACQgEABgIAAIgFAAIAAAqIAAAJIACAFQACABAFAAIAHAAIAFgBQAEAAACACQADACAAAEQAAAFgHADQgHADgOAAQgLAAgHgDg");
	this.shape_1345.setTransform(-171.2,116.4);

	this.shape_1346 = new cjs.Shape();
	this.shape_1346.graphics.f("#660000").s().p("AgrA/QgJAAgFgEQgFgEAAgGIABgEIACgDIADgEIAFgEIBIhMIg+AAQgGAAgEgDQgDgDAAgEQAAgEADgDQAEgDAGAAIBRAAQAQAAAAANQgBAHgCADIgLAMIhDBHIBKAAQAHAAADACQAEADAAAEQAAAEgEADQgDADgHAAg");
	this.shape_1346.setTransform(-217.1,116.2);

	this.shape_1347 = new cjs.Shape();
	this.shape_1347.graphics.f("#660000").s().p("AAZAsQgEgEAAgHIAAgmQAAgLgEgGQgDgGgLAAQgGAAgGADQgGAEgDAHQgCAFAAANIAAAdQAAAHgDAEQgFADgFAAQgGAAgEgDQgDgEgBgHIAAhCQABgHADgDQADgDAGAAIAGABIAFAEQABADABAEIAAADQAGgIAJgEQAHgDALAAQALAAAIAEQAJAEADAHQADAEABAFIABANIAAAqQAAAHgEAEQgDADgHAAQgFAAgEgDg");
	this.shape_1347.setTransform(-246.7,118);

	this.shape_1348 = new cjs.Shape();
	this.shape_1348.graphics.f("#660000").s().p("AAfAtQgEgEgFgGQgKAGgJAEQgIACgLAAQgKABgIgEQgIgEgEgFQgEgHAAgHQAAgJAHgHQAHgFAMgDIAMgDIARgDIAPgDQAAgKgEgEQgEgEgMAAQgJAAgFADQgFACgEAFIgFAGQgBACgFAAQgFAAgDgDQgDgCAAgEQAAgGAFgGQAFgGAKgEQALgDAOAAQASAAAKADQAKAEAEAHQAEAJAAANIAAAMIAAAOQAAAGADAHIACAJQAAAEgEADQgDACgFAAQgEAAgEgCgAADAFIgOADQgFABgEACQgDAEAAAEQAAAGAEADQAFAFAHAAQAHAAAHgEQAHgCADgGQADgFAAgMIAAgEIgRAFg");
	this.shape_1348.setTransform(-258.7,118);

	this.shape_1349 = new cjs.Shape();
	this.shape_1349.graphics.f("#660000").s().p("AA1AsQgEgEAAgHIAAgnIgBgMQgBgEgDgDQgDgDgHAAQgFAAgFACQgEADgDAFQgDAGAAAOIAAAfQAAAHgDAEQgFADgGAAQgFAAgEgDQgEgEAAgHIAAgkIAAgOQgBgFgDgDQgDgDgHAAQgMAAgEAIQgFAHAAAOIAAAgQAAAHgDAEQgFADgFAAQgGAAgFgDQgEgEAAgHIAAhCQABgHADgDQADgDAGAAQAGAAADADQAEADAAAGIAAACQAHgHAIgEQAIgDAJAAQAKAAAIADQAGAEAFAHQAHgHAHgEQAIgDAJAAQAMAAAHADQAJAEADAHQADAHAAANIAAAtQAAAHgDAEQgEADgHAAQgGAAgDgDg");
	this.shape_1349.setTransform(-289.8,118);

	this.shape_1350 = new cjs.Shape();
	this.shape_1350.graphics.f("#660000").s().p("AgkA/QgKAAgEgEQgEgEAAgIIAAhdQAAgFACgEQACgDAEgCQAEgCAGAAIBLAAQAHAAAEADQADADAAAEQAAAFgDACQgEADgHAAIhAAAIAAAfIA7AAQAHAAADACQADADAAAEQAAAEgDACQgDADgHAAIg7AAIAAAkIBDAAQAGAAAEACQADADAAAFQAAAEgDADQgEADgGAAg");
	this.shape_1350.setTransform(-305,116.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197,p:{x:-293.5,y:154.1}},{t:this.shape_196},{t:this.shape_195,p:{x:-265.2,y:154}},{t:this.shape_194,p:{x:-256.5,y:154.1}},{t:this.shape_193,p:{x:-245.2,y:154.1}},{t:this.shape_192,p:{x:-237.4,y:152.3}},{t:this.shape_191,p:{x:-229.4,y:152.4}},{t:this.shape_190,p:{x:-217.1,y:154.1}},{t:this.shape_189,p:{x:-205.1,y:154}},{t:this.shape_188,p:{x:-196,y:152.5}},{t:this.shape_187,p:{x:-187.3,y:154.1}},{t:this.shape_186,p:{x:-169.7,y:152.4}},{t:this.shape_185,p:{x:-157.4,y:154.1}},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181,p:{x:-102.5,y:152.3}},{t:this.shape_180,p:{x:-94.4,y:154.1}},{t:this.shape_179,p:{x:-83.4,y:154.1}},{t:this.shape_178},{t:this.shape_177,p:{x:-57.2,y:152.3}},{t:this.shape_176},{t:this.shape_175,p:{x:-32.5,y:154}},{t:this.shape_174,p:{x:-23.8,y:154.1}},{t:this.shape_173,p:{x:-15.5,y:152.3}},{t:this.shape_172,p:{x:-7.3,y:154.1}},{t:this.shape_171,p:{x:0.1,y:152.3}},{t:this.shape_170,p:{x:8.4,y:154.1}},{t:this.shape_169,p:{x:20.4,y:154}},{t:this.shape_168,p:{x:32.3,y:154.1}},{t:this.shape_167,p:{x:42.8,y:154}},{t:this.shape_166,p:{x:57.4,y:154.1}},{t:this.shape_165,p:{x:84.2,y:152.3}},{t:this.shape_164},{t:this.shape_163,p:{x:110.7,y:152.4}},{t:this.shape_162,p:{x:123,y:154.1}},{t:this.shape_161,p:{x:133.4,y:154}},{t:this.shape_160,p:{x:142.1,y:154.1}},{t:this.shape_159,p:{x:151.1,y:158}},{t:this.shape_158},{t:this.shape_157,p:{x:181.4,y:154.1}},{t:this.shape_156,p:{x:192.7,y:154.1}},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152,p:{x:239.3,y:154.1}},{t:this.shape_151},{t:this.shape_150,p:{x:-306.6,y:177.7}},{t:this.shape_149,p:{x:-294.8,y:177.6}},{t:this.shape_148},{t:this.shape_147,p:{x:-272,y:177.6}},{t:this.shape_146,p:{x:-254.3,y:177.6}},{t:this.shape_145,p:{x:-243.3,y:177.6}},{t:this.shape_144,p:{x:-231.4,y:177.5}},{t:this.shape_143,p:{x:-222.2,y:176}},{t:this.shape_142,p:{x:-215,y:177.5}},{t:this.shape_141,p:{x:-206.4,y:177.6}},{t:this.shape_140},{t:this.shape_139,p:{x:-178.1,y:175.8}},{t:this.shape_138,p:{x:-173.3,y:175.8}},{t:this.shape_137,p:{x:-168.5,y:175.8}},{t:this.shape_136,p:{x:-160.1,y:177.6}},{t:this.shape_135,p:{x:-151.2,y:182.8}},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132,p:{x:-103.3,y:177.5}},{t:this.shape_131,p:{x:-94.6,y:177.6}},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128,p:{x:-58.8,y:177.5}},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125,p:{x:-11.1,y:177.6}},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122,p:{x:21.9,y:176}},{t:this.shape_121,p:{x:30.7,y:177.6}},{t:this.shape_120},{t:this.shape_119,p:{x:67.3,y:177.5}},{t:this.shape_118,p:{x:76,y:177.6}},{t:this.shape_117,p:{x:84.3,y:175.8}},{t:this.shape_116,p:{x:92.7,y:177.6}},{t:this.shape_115,p:{x:104.6,y:177.5}},{t:this.shape_114},{t:this.shape_113,p:{x:128.5,y:177.6}},{t:this.shape_112,p:{x:140.5,y:177.5}},{t:this.shape_111,p:{x:152.1,y:175.9}},{t:this.shape_110,p:{x:164.4,y:177.6}},{t:this.shape_109},{t:this.shape_108,p:{x:193.6,y:177.6}},{t:this.shape_107},{t:this.shape_106,p:{x:213.2,y:175.8}},{t:this.shape_105,p:{x:221.6,y:177.6}},{t:this.shape_104,p:{x:-309,y:199.3}},{t:this.shape_103},{t:this.shape_102,p:{x:-288.9,y:201.1}},{t:this.shape_101},{t:this.shape_100,p:{x:-266,y:201.1}},{t:this.shape_99},{t:this.shape_98,p:{x:-236.2,y:201.1}},{t:this.shape_97,p:{x:-225.7,y:201}},{t:this.shape_96,p:{x:-208.1,y:201}},{t:this.shape_95},{t:this.shape_94,p:{x:-181.5,y:201.1}},{t:this.shape_93},{t:this.shape_92,p:{x:-158.6,y:201.1}},{t:this.shape_91,p:{x:-147.3,y:201.1}},{t:this.shape_90,p:{x:-124.1,y:201.1}},{t:this.shape_89},{t:this.shape_88,p:{x:-100.2,y:201.1}},{t:this.shape_87,p:{x:-88.9,y:201.1}},{t:this.shape_86,p:{x:-68.5,y:201}},{t:this.shape_85,p:{x:-53.7,y:201.1}},{t:this.shape_84,p:{x:-42.4,y:201.1}},{t:this.shape_83},{t:this.shape_82,p:{x:-28,y:205}}]},1).to({state:[{t:this.shape_322},{t:this.shape_321,p:{x:-301,y:130.2}},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317,p:{x:-259.1,y:128.5}},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314,p:{x:-227.6,y:130.2}},{t:this.shape_313,p:{x:-209.7,y:128.5}},{t:this.shape_312,p:{x:-200.3,y:128.5}},{t:this.shape_311,p:{x:-194.9,y:128.5}},{t:this.shape_310,p:{x:-189.4,y:128.5}},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306,p:{x:-145.9,y:128.6}},{t:this.shape_305,p:{x:-134.7,y:128.6}},{t:this.shape_304,p:{x:-123.6,y:128.6}},{t:this.shape_303,p:{x:-114.2,y:130.2}},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300,p:{x:-83.7,y:128.5}},{t:this.shape_299,p:{x:-72.3,y:128.6}},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296,p:{x:-291.1,y:153}},{t:this.shape_295},{t:this.shape_294,p:{x:-268.5,y:152.9}},{t:this.shape_293},{t:this.shape_292,p:{x:-251.9,y:153}},{t:this.shape_291,p:{x:-244.5,y:151.2}},{t:this.shape_290,p:{x:-236.2,y:153}},{t:this.shape_289,p:{x:-218.5,y:153}},{t:this.shape_288,p:{x:-207.6,y:153}},{t:this.shape_287,p:{x:-192.6,y:152.9}},{t:this.shape_286,p:{x:-177.7,y:153}},{t:this.shape_285,p:{x:-159.5,y:151.3}},{t:this.shape_125,p:{x:-147.9,y:153}},{t:this.shape_284,p:{x:-136,y:152.9}},{t:this.shape_283,p:{x:-124.4,y:151.3}},{t:this.shape_282,p:{x:-112.1,y:153}},{t:this.shape_117,p:{x:-103.7,y:151.2}},{t:this.shape_281,p:{x:-95.3,y:153}},{t:this.shape_195,p:{x:-84.9,y:152.9}},{t:this.shape_280,p:{x:-76.2,y:153}},{t:this.shape_279},{t:this.shape_91,p:{x:-42.3,y:153}},{t:this.shape_278,p:{x:-30.9,y:153}},{t:this.shape_94,p:{x:-13.2,y:153}},{t:this.shape_277,p:{x:-2.3,y:153}},{t:this.shape_276,p:{x:9.6,y:152.9}},{t:this.shape_275},{t:this.shape_274,p:{x:28.8,y:151.2}},{t:this.shape_175,p:{x:35.6,y:152.9}},{t:this.shape_143,p:{x:41.5,y:151.4}},{t:this.shape_273,p:{x:46.6,y:151.2}},{t:this.shape_272,p:{x:55,y:151.3}},{t:this.shape_271,p:{x:72.9,y:153}},{t:this.shape_270,p:{x:84.8,y:152.9}},{t:this.shape_269,p:{x:102.7,y:153}},{t:this.shape_138,p:{x:111.1,y:151.2}},{t:this.shape_167,p:{x:123.9,y:152.9}},{t:this.shape_268,p:{x:132.5,y:153}},{t:this.shape_267,p:{x:143.9,y:153.1}},{t:this.shape_179,p:{x:155.2,y:153}},{t:this.shape_104,p:{x:163.6,y:151.2}},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264,p:{x:191.1,y:151.2}},{t:this.shape_170,p:{x:199.4,y:153}},{t:this.shape_263,p:{x:211.4,y:152.9}},{t:this.shape_90,p:{x:223.3,y:153}},{t:this.shape_161,p:{x:233.8,y:152.9}},{t:this.shape_262,p:{x:238.9,y:151.2}},{t:this.shape_160,p:{x:247.2,y:153}},{t:this.shape_261},{t:this.shape_260},{t:this.shape_87,p:{x:-282.2,y:176.5}},{t:this.shape_259,p:{x:-268.4,y:174.7}},{t:this.shape_258},{t:this.shape_257},{t:this.shape_147,p:{x:-230.2,y:176.5}},{t:this.shape_142,p:{x:-219.8,y:176.4}},{t:this.shape_256,p:{x:-213.9,y:174.9}},{t:this.shape_255,p:{x:-205.2,y:176.5}},{t:this.shape_189,p:{x:-193.3,y:176.4}},{t:this.shape_254,p:{x:-184.1,y:174.9}},{t:this.shape_197,p:{x:-175.4,y:176.5}},{t:this.shape_135,p:{x:-166.4,y:181.8}},{t:this.shape_146,p:{x:-145.8,y:176.5}},{t:this.shape_145,p:{x:-134.9,y:176.5}},{t:this.shape_96,p:{x:-119.9,y:176.4}},{t:this.shape_253},{t:this.shape_169,p:{x:-93.1,y:176.4}},{t:this.shape_252},{t:this.shape_136,p:{x:-69.2,y:176.5}},{t:this.shape_144,p:{x:-57.3,y:176.4}},{t:this.shape_251,p:{x:-45.7,y:174.8}},{t:this.shape_118,p:{x:-33.4,y:176.5}},{t:this.shape_194,p:{x:-15.5,y:176.5}},{t:this.shape_106,p:{x:-7.1,y:174.7}},{t:this.shape_190,p:{x:7.2,y:176.5}},{t:this.shape_250,p:{x:14.4,y:176.7}},{t:this.shape_187,p:{x:23.9,y:176.5}},{t:this.shape_132,p:{x:34.4,y:176.4}},{t:this.shape_249,p:{x:42.8,y:176.5}},{t:this.shape_248,p:{x:50.2,y:174.7}},{t:this.shape_247,p:{x:55.8,y:174.9}},{t:this.shape_116,p:{x:64.5,y:176.5}},{t:this.shape_246,p:{x:85.4,y:176.4}},{t:this.shape_100,p:{x:100.3,y:176.5}},{t:this.shape_84,p:{x:111.6,y:176.5}},{t:this.shape_245},{t:this.shape_119,p:{x:139.3,y:176.4}},{t:this.shape_168,p:{x:148,y:176.5}},{t:this.shape_128,p:{x:159.9,y:176.4}},{t:this.shape_244,p:{x:171.5,y:174.8}},{t:this.shape_185,p:{x:183.8,y:176.5}},{t:this.shape_243},{t:this.shape_242,p:{x:213.6,y:176.7}},{t:this.shape_162,p:{x:225.6,y:176.5}},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236,p:{x:-279.1,y:198.2}},{t:this.shape_235,p:{x:-271.1,y:198.3}},{t:this.shape_110,p:{x:-258.8,y:200}},{t:this.shape_157,p:{x:-240.9,y:200}},{t:this.shape_115,p:{x:-229,y:199.9}},{t:this.shape_122,p:{x:-213.9,y:198.4}},{t:this.shape_98,p:{x:-205.1,y:200}},{t:this.shape_234,p:{x:-193.5,y:198.3}},{t:this.shape_92,p:{x:-181.2,y:200}},{t:this.shape_233,p:{x:-167,y:198.2}},{t:this.shape_232,p:{x:-158.6,y:200}},{t:this.shape_231,p:{x:-149.4,y:198.4}},{t:this.shape_230,p:{x:-144.2,y:198.2}},{t:this.shape_112,p:{x:-135.9,y:199.9}},{t:this.shape_88,p:{x:-123.9,y:200}},{t:this.shape_121,p:{x:-112,y:200}},{t:this.shape_229},{t:this.shape_131,p:{x:-82.2,y:200}},{t:this.shape_97,p:{x:-71.7,y:199.9}},{t:this.shape_228,p:{x:-66.6,y:198.2}},{t:this.shape_102,p:{x:-58.5,y:200}},{t:this.shape_141,p:{x:-47.5,y:200}},{t:this.shape_227,p:{x:-38.5,y:204}}]},1).to({state:[{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382,p:{x:-306.9,y:152}},{t:this.shape_381},{t:this.shape_281,p:{x:-282.8,y:153.8}},{t:this.shape_380},{t:this.shape_189,p:{x:-253,y:153.7}},{t:this.shape_379},{t:this.shape_278,p:{x:-223.2,y:153.8}},{t:this.shape_152,p:{x:-211.9,y:153.8}},{t:this.shape_188,p:{x:-203.3,y:152.2}},{t:this.shape_232,p:{x:-194.6,y:153.8}},{t:this.shape_172,p:{x:-182.8,y:153.8}},{t:this.shape_174,p:{x:-171.9,y:153.8}},{t:this.shape_378,p:{x:-160.3,y:152.1}},{t:this.shape_277,p:{x:-148,y:153.8}},{t:this.shape_86,p:{x:-127,y:153.7}},{t:this.shape_230,p:{x:-115.8,y:152}},{t:this.shape_377},{t:this.shape_228,p:{x:-106.2,y:152}},{t:this.shape_376,p:{x:-100.6,y:152.2}},{t:this.shape_375,p:{x:-91.9,y:153.8}},{t:this.shape_374,p:{x:-81.4,y:153.7}},{t:this.shape_373},{t:this.shape_372},{t:this.shape_271,p:{x:-43,y:153.8}},{t:this.shape_371},{t:this.shape_100,p:{x:-13.1,y:153.8}},{t:this.shape_169,p:{x:-1.2,y:153.7}},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_108,p:{x:92.5,y:153.8}},{t:this.shape_364},{t:this.shape_166,p:{x:121.7,y:153.8}},{t:this.shape_254,p:{x:130.9,y:152.2}},{t:this.shape_90,p:{x:139.6,y:153.8}},{t:this.shape_138,p:{x:148,y:152}},{t:this.shape_363},{t:this.shape_362},{t:this.shape_91,p:{x:172.4,y:153.8}},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359,p:{x:212.2,y:153.7}},{t:this.shape_358,p:{x:220.8,y:153.8}},{t:this.shape_357,p:{x:-304.9,y:175.5}},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_292,p:{x:-262.7,y:177.3}},{t:this.shape_179,p:{x:-251.8,y:177.3}},{t:this.shape_106,p:{x:-237.5,y:175.5}},{t:this.shape_170,p:{x:-229.1,y:177.3}},{t:this.shape_353},{t:this.shape_352},{t:this.shape_269,p:{x:-187.3,y:177.3}},{t:this.shape_137,p:{x:-173,y:175.5}},{t:this.shape_268,p:{x:-164.6,y:177.3}},{t:this.shape_351},{t:this.shape_197,p:{x:-134.8,y:177.3}},{t:this.shape_195,p:{x:-124.4,y:177.2}},{t:this.shape_96,p:{x:-112.7,y:177.2}},{t:this.shape_350,p:{x:-101.4,y:175.5}},{t:this.shape_349},{t:this.shape_348,p:{x:-90.6,y:175.5}},{t:this.shape_347},{t:this.shape_256,p:{x:-67.2,y:175.7}},{t:this.shape_160,p:{x:-58.5,y:177.3}},{t:this.shape_346,p:{x:-43.5,y:177.2}},{t:this.shape_141,p:{x:-28.6,y:177.3}},{t:this.shape_175,p:{x:-18.2,y:177.2}},{t:this.shape_194,p:{x:-3.6,y:177.3}},{t:this.shape_117,p:{x:4.7,y:175.5}},{t:this.shape_345},{t:this.shape_147,p:{x:31,y:177.3}},{t:this.shape_344},{t:this.shape_190,p:{x:54.9,y:177.3}},{t:this.shape_167,p:{x:65.4,y:177.2}},{t:this.shape_227,p:{x:69.9,y:181.2}},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_145,p:{x:132,y:177.3}},{t:this.shape_339,p:{x:149.9,y:177.3}},{t:this.shape_104,p:{x:158.3,y:175.5}},{t:this.shape_338},{t:this.shape_161,p:{x:189,y:177.2}},{t:this.shape_118,p:{x:197.6,y:177.3}},{t:this.shape_337},{t:this.shape_142,p:{x:220,y:177.2}},{t:this.shape_187,p:{x:228.7,y:177.3}},{t:this.shape_87,p:{x:240,y:177.3}},{t:this.shape_116,p:{x:251.4,y:177.3}},{t:this.shape_336},{t:this.shape_185,p:{x:-295.9,y:200.8}},{t:this.shape_165,p:{x:-275,y:199}},{t:this.shape_335},{t:this.shape_334},{t:this.shape_192,p:{x:-241,y:199}},{t:this.shape_289,p:{x:-232.9,y:200.8}},{t:this.shape_110,p:{x:-222,y:200.8}},{t:this.shape_333},{t:this.shape_162,p:{x:-192.1,y:200.8}},{t:this.shape_132,p:{x:-181.7,y:200.7}},{t:this.shape_98,p:{x:-173,y:200.8}},{t:this.shape_332},{t:this.shape_105,p:{x:-149.2,y:200.8}},{t:this.shape_246,p:{x:-134.2,y:200.7}},{t:this.shape_331},{t:this.shape_181,p:{x:-111,y:199}},{t:this.shape_330},{t:this.shape_144,p:{x:-90.7,y:200.7}},{t:this.shape_84,p:{x:-73.4,y:200.8}},{t:this.shape_157,p:{x:-62.1,y:200.8}},{t:this.shape_329},{t:this.shape_92,p:{x:-33.4,y:200.8}},{t:this.shape_128,p:{x:-21.5,y:200.7}},{t:this.shape_328},{t:this.shape_173,p:{x:-2.4,y:199}},{t:this.shape_119,p:{x:4.5,y:200.7}},{t:this.shape_231,p:{x:10.3,y:199.2}},{t:this.shape_171,p:{x:15.5,y:199}},{t:this.shape_327},{t:this.shape_131,p:{x:41.7,y:200.8}},{t:this.shape_115,p:{x:53.7,y:200.7}},{t:this.shape_326},{t:this.shape_112,p:{x:83.5,y:200.7}},{t:this.shape_325},{t:this.shape_139,p:{x:109.8,y:199}},{t:this.shape_249,p:{x:118,y:200.8}},{t:this.shape_143,p:{x:126.1,y:199.2}},{t:this.shape_324},{t:this.shape_323},{t:this.shape_88,p:{x:158.7,y:200.8}},{t:this.shape_97,p:{x:169.2,y:200.7}},{t:this.shape_159,p:{x:173.7,y:204.7}}]},1).to({state:[{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473,p:{x:-242.9,y:127.7}},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466,p:{x:-159.9,y:127.8}},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_303,p:{x:33.2,y:129.5}},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_382,p:{x:-296.4,y:150.5}},{t:this.shape_445},{t:this.shape_444},{t:this.shape_277,p:{x:-254.5,y:152.3}},{t:this.shape_254,p:{x:-245.3,y:150.7}},{t:this.shape_374,p:{x:-238.1,y:152.2}},{t:this.shape_179,p:{x:-229.4,y:152.3}},{t:this.shape_443},{t:this.shape_442},{t:this.shape_359,p:{x:-189.1,y:152.2}},{t:this.shape_170,p:{x:-180.5,y:152.3}},{t:this.shape_441},{t:this.shape_191,p:{x:-151,y:150.6}},{t:this.shape_440},{t:this.shape_165,p:{x:-117.8,y:150.5}},{t:this.shape_439},{t:this.shape_438},{t:this.shape_350,p:{x:-83.8,y:150.5}},{t:this.shape_149,p:{x:-75.7,y:152.3}},{t:this.shape_160,p:{x:-64.7,y:152.3}},{t:this.shape_289,p:{x:-47,y:152.3}},{t:this.shape_85,p:{x:-36.1,y:152.3}},{t:this.shape_348,p:{x:-27.7,y:150.5}},{t:this.shape_186,p:{x:-19.7,y:150.6}},{t:this.shape_147,p:{x:-7.4,y:152.3}},{t:this.shape_437},{t:this.shape_189,p:{x:22.4,y:152.2}},{t:this.shape_106,p:{x:36.7,y:150.5}},{t:this.shape_436},{t:this.shape_122,p:{x:60.2,y:150.7}},{t:this.shape_195,p:{x:67.4,y:152.2}},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_163,p:{x:111.6,y:150.6}},{t:this.shape_192,p:{x:120.3,y:150.5}},{t:this.shape_432},{t:this.shape_159,p:{x:137.7,y:156.2}},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429,p:{x:178.1,y:152.3}},{t:this.shape_428,p:{x:195.4,y:152.3}},{t:this.shape_175,p:{x:205.9,y:152.2}},{t:this.shape_167,p:{x:213,y:152.2}},{t:this.shape_145,p:{x:221.7,y:152.3}},{t:this.shape_161,p:{x:232.1,y:152.2}},{t:this.shape_427,p:{x:240.8,y:152.3}},{t:this.shape_426,p:{x:252.1,y:152.3}},{t:this.shape_172,p:{x:-297.6,y:175.8}},{t:this.shape_174,p:{x:-286.6,y:175.8}},{t:this.shape_150,p:{x:-274.7,y:175.9}},{t:this.shape_193,p:{x:-263.4,y:175.8}},{t:this.shape_255,p:{x:-252,y:175.8}},{t:this.shape_142,p:{x:-241.6,y:175.7}},{t:this.shape_118,p:{x:-232.9,y:175.8}},{t:this.shape_169,p:{x:-221,y:175.7}},{t:this.shape_104,p:{x:-206.7,y:174}},{t:this.shape_141,p:{x:-198.3,y:175.8}},{t:this.shape_425},{t:this.shape_296,p:{x:-168.5,y:175.8}},{t:this.shape_132,p:{x:-158,y:175.7}},{t:this.shape_424},{t:this.shape_181,p:{x:-141,y:174}},{t:this.shape_423},{t:this.shape_100,p:{x:-120.7,y:175.8}},{t:this.shape_422},{t:this.shape_281,p:{x:-90.8,y:175.8}},{t:this.shape_86,p:{x:-69.9,y:175.7}},{t:this.shape_278,p:{x:-55.1,y:175.8}},{t:this.shape_421},{t:this.shape_173,p:{x:-34.7,y:174}},{t:this.shape_116,p:{x:-26.4,y:175.8}},{t:this.shape_420},{t:this.shape_358,p:{x:3.5,y:175.8}},{t:this.shape_171,p:{x:11.9,y:174}},{t:this.shape_156,p:{x:19.5,y:175.8}},{t:this.shape_419},{t:this.shape_119,p:{x:41.3,y:175.7}},{t:this.shape_271,p:{x:50,y:175.8}},{t:this.shape_144,p:{x:61.9,y:175.7}},{t:this.shape_247,p:{x:71.1,y:174.2}},{t:this.shape_269,p:{x:79.8,y:175.8}},{t:this.shape_418},{t:this.shape_417},{t:this.shape_152,p:{x:129.2,y:175.8}},{t:this.shape_416},{t:this.shape_113,p:{x:146.5,y:175.8}},{t:this.shape_415},{t:this.shape_110,p:{x:170.4,y:175.8}},{t:this.shape_108,p:{x:181.7,y:175.8}},{t:this.shape_414},{t:this.shape_128,p:{x:214.6,y:175.7}},{t:this.shape_139,p:{x:223,y:174}},{t:this.shape_111,p:{x:231,y:174.1}},{t:this.shape_98,p:{x:243.3,y:175.8}},{t:this.shape_91,p:{x:254.6,y:175.8}},{t:this.shape_135,p:{x:262.9,y:181}},{t:this.shape_413},{t:this.shape_412},{t:this.shape_268,p:{x:-272.3,y:199.3}},{t:this.shape_411},{t:this.shape_97,p:{x:-244,y:199.2}},{t:this.shape_197,p:{x:-235.3,y:199.3}},{t:this.shape_87,p:{x:-224.1,y:199.3}},{t:this.shape_230,p:{x:-216.2,y:197.5}},{t:this.shape_410},{t:this.shape_194,p:{x:-195.9,y:199.3}},{t:this.shape_115,p:{x:-184,y:199.2}},{t:this.shape_188,p:{x:-174.8,y:197.7}},{t:this.shape_190,p:{x:-166.1,y:199.3}},{t:this.shape_409},{t:this.shape_187,p:{x:-136.3,y:199.3}},{t:this.shape_408},{t:this.shape_185,p:{x:-100.5,y:199.3}},{t:this.shape_407},{t:this.shape_228,p:{x:-81.4,y:197.5}},{t:this.shape_180,p:{x:-73.2,y:199.3}},{t:this.shape_92,p:{x:-62.3,y:199.3}},{t:this.shape_88,p:{x:-44.4,y:199.3}},{t:this.shape_112,p:{x:-32.5,y:199.2}},{t:this.shape_406,p:{x:-20.7,y:199.3}},{t:this.shape_162,p:{x:-9.8,y:199.3}},{t:this.shape_267,p:{x:7.6,y:199.3}},{t:this.shape_157,p:{x:18.8,y:199.3}},{t:this.shape_146,p:{x:30.6,y:199.3}},{t:this.shape_131,p:{x:41.5,y:199.3}},{t:this.shape_84,p:{x:52.8,y:199.3}},{t:this.shape_82,p:{x:61.3,y:203.2}}]},1).to({state:[{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_473,p:{x:-126.3,y:117.2}},{t:this.shape_466,p:{x:-117.7,y:117.3}},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_305,p:{x:-71.3,y:117.3}},{t:this.shape_306,p:{x:-60.1,y:117.3}},{t:this.shape_299,p:{x:-49,y:117.3}},{t:this.shape_303,p:{x:-39.5,y:119}},{t:this.shape_518},{t:this.shape_304,p:{x:-20,y:117.3}},{t:this.shape_300,p:{x:-9.1,y:117.2}},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_290,p:{x:-231.4,y:141.8}},{t:this.shape_512},{t:this.shape_291,p:{x:-212.2,y:140}},{t:this.shape_511},{t:this.shape_288,p:{x:-192,y:141.8}},{t:this.shape_172,p:{x:-174.3,y:141.8}},{t:this.shape_286,p:{x:-163.3,y:141.8}},{t:this.shape_510},{t:this.shape_282,p:{x:-133.5,y:141.8}},{t:this.shape_428,p:{x:-115.6,y:141.8}},{t:this.shape_177,p:{x:-107.3,y:140}},{t:this.shape_283,p:{x:-93.3,y:140.1}},{t:this.shape_195,p:{x:-82.5,y:141.7}},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_175,p:{x:-21.6,y:141.7}},{t:this.shape_280,p:{x:-13,y:141.8}},{t:this.shape_250,p:{x:-5.8,y:141.9}},{t:this.shape_277,p:{x:3.8,y:141.8}},{t:this.shape_135,p:{x:12.7,y:147}},{t:this.shape_505},{t:this.shape_179,p:{x:38.3,y:141.8}},{t:this.shape_504},{t:this.shape_285,p:{x:68.5,y:140.1}},{t:this.shape_503},{t:this.shape_376,p:{x:89.3,y:140.2}},{t:this.shape_274,p:{x:94.5,y:140}},{t:this.shape_272,p:{x:102.8,y:140}},{t:this.shape_502},{t:this.shape_167,p:{x:131.1,y:141.7}},{t:this.shape_273,p:{x:136.2,y:140}},{t:this.shape_287,p:{x:147.6,y:141.7}},{t:this.shape_427,p:{x:162.5,y:141.8}},{t:this.shape_161,p:{x:172.9,y:141.7}},{t:this.shape_170,p:{x:181.6,y:141.8}},{t:this.shape_339,p:{x:199.4,y:141.8}},{t:this.shape_233,p:{x:213.7,y:140}},{t:this.shape_160,p:{x:222.1,y:141.8}},{t:this.shape_501},{t:this.shape_264,p:{x:-279.9,y:163.5}},{t:this.shape_500},{t:this.shape_429,p:{x:-260.3,y:165.3}},{t:this.shape_242,p:{x:-249,y:165.4}},{t:this.shape_142,p:{x:-238.5,y:165.2}},{t:this.shape_499},{t:this.shape_296,p:{x:-217.9,y:165.3}},{t:this.shape_498},{t:this.shape_122,p:{x:-196.8,y:163.7}},{t:this.shape_281,p:{x:-188,y:165.3}},{t:this.shape_426,p:{x:-176.7,y:165.3}},{t:this.shape_497},{t:this.shape_251,p:{x:-143.1,y:163.6}},{t:this.shape_278,p:{x:-130.8,y:165.3}},{t:this.shape_193,p:{x:-119.5,y:165.3}},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_156,p:{x:-72.9,y:165.3}},{t:this.shape_152,p:{x:-56.2,y:165.3}},{t:this.shape_271,p:{x:-44.9,y:165.3}},{t:this.shape_493},{t:this.shape_294,p:{x:-15,y:165.2}},{t:this.shape_262,p:{x:-6.6,y:163.5}},{t:this.shape_492},{t:this.shape_105,p:{x:19.6,y:165.3}},{t:this.shape_269,p:{x:37.5,y:165.3}},{t:this.shape_138,p:{x:45.8,y:163.5}},{t:this.shape_104,p:{x:50.6,y:163.5}},{t:this.shape_147,p:{x:59,y:165.3}},{t:this.shape_108,p:{x:70.3,y:165.3}},{t:this.shape_491},{t:this.shape_145,p:{x:98.4,y:165.3}},{t:this.shape_284,p:{x:110.3,y:165.2}},{t:this.shape_91,p:{x:121.6,y:165.3}},{t:this.shape_490},{t:this.shape_489},{t:this.shape_375,p:{x:162.8,y:165.3}},{t:this.shape_276,p:{x:174.8,y:165.2}},{t:this.shape_244,p:{x:186.4,y:163.6}},{t:this.shape_118,p:{x:198.7,y:165.3}},{t:this.shape_106,p:{x:212.9,y:163.5}},{t:this.shape_100,p:{x:221.3,y:165.3}},{t:this.shape_259,p:{x:-279.9,y:187}},{t:this.shape_270,p:{x:-271.6,y:188.7}},{t:this.shape_488},{t:this.shape_268,p:{x:-247.7,y:188.8}},{t:this.shape_487},{t:this.shape_197,p:{x:-223.8,y:188.8}},{t:this.shape_263,p:{x:-211.8,y:188.7}},{t:this.shape_486},{t:this.shape_194,p:{x:-187.9,y:188.8}},{t:this.shape_189,p:{x:-176,y:188.7}},{t:this.shape_406,p:{x:-164.3,y:188.8}},{t:this.shape_248,p:{x:-156.9,y:187}},{t:this.shape_255,p:{x:-148.5,y:188.8}},{t:this.shape_235,p:{x:-131,y:187.1}},{t:this.shape_190,p:{x:-118.7,y:188.8}},{t:this.shape_357,p:{x:-97.8,y:187}},{t:this.shape_485},{t:this.shape_484},{t:this.shape_236,p:{x:-63.8,y:187}},{t:this.shape_483},{t:this.shape_116,p:{x:-44.7,y:188.8}},{t:this.shape_146,p:{x:-27,y:188.8}},{t:this.shape_110,p:{x:-16.1,y:188.8}},{t:this.shape_169,p:{x:-4.2,y:188.7}},{t:this.shape_482},{t:this.shape_230,p:{x:15,y:187}},{t:this.shape_132,p:{x:21.8,y:188.7}},{t:this.shape_188,p:{x:27.7,y:187.2}},{t:this.shape_228,p:{x:32.9,y:187}},{t:this.shape_481},{t:this.shape_144,p:{x:53.1,y:188.7}},{t:this.shape_234,p:{x:64.7,y:187.1}},{t:this.shape_98,p:{x:77,y:188.8}},{t:this.shape_87,p:{x:88.3,y:188.8}},{t:this.shape_187,p:{x:99.7,y:188.8}},{t:this.shape_185,p:{x:117.6,y:188.8}},{t:this.shape_128,p:{x:129.6,y:188.7}},{t:this.shape_143,p:{x:138.7,y:187.2}},{t:this.shape_92,p:{x:147.4,y:188.8}},{t:this.shape_115,p:{x:159.4,y:188.7}},{t:this.shape_180,p:{x:171.1,y:188.8}},{t:this.shape_162,p:{x:182.1,y:188.8}},{t:this.shape_84,p:{x:193.4,y:188.8}},{t:this.shape_157,p:{x:210.7,y:188.8}},{t:this.shape_112,p:{x:222.6,y:188.7}},{t:this.shape_480},{t:this.shape_346,p:{x:-259,y:212.2}},{t:this.shape_479},{t:this.shape_131,p:{x:-232.2,y:212.3}},{t:this.shape_119,p:{x:-221.8,y:212.2}},{t:this.shape_141,p:{x:-213.1,y:212.3}},{t:this.shape_378,p:{x:-201.5,y:210.6}},{t:this.shape_88,p:{x:-189.2,y:212.3}},{t:this.shape_97,p:{x:-178.8,y:212.2}},{t:this.shape_227,p:{x:-174.3,y:216.2}}]},1).to({state:[{t:this.shape_691},{t:this.shape_690},{t:this.shape_689,p:{x:-272.9}},{t:this.shape_688,p:{x:-261}},{t:this.shape_687,p:{x:-248.5}},{t:this.shape_310,p:{x:-239.8,y:116.2}},{t:this.shape_686},{t:this.shape_685,p:{x:-218.5}},{t:this.shape_684,p:{x:-206.5}},{t:this.shape_313,p:{x:-188.7,y:116.2}},{t:this.shape_317,p:{x:-179.4,y:116.3}},{t:this.shape_683},{t:this.shape_682,p:{x:-160.9,y:116.4}},{t:this.shape_314,p:{x:-151.6,y:118}},{t:this.shape_321,p:{x:-140.6,y:118}},{t:this.shape_312,p:{x:-134.1,y:116.3}},{t:this.shape_681,p:{x:-125.5}},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669,p:{x:-299.8,y:162.6}},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629,p:{x:-300.4,y:186.7}},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626,p:{x:-276.8,y:186.7}},{t:this.shape_625,p:{x:-268.3,y:188.5}},{t:this.shape_624},{t:this.shape_623,p:{x:-253.2,y:186.7}},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618,p:{x:-189.2,y:188.5}},{t:this.shape_617},{t:this.shape_616,p:{x:-164.7,y:186.7}},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613,p:{x:-129,y:186.7}},{t:this.shape_612},{t:this.shape_611,p:{x:-106.7,y:186.7}},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606,p:{x:-41.8,y:186.7}},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602,p:{x:1.4,y:186.7}},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589,p:{x:162.5,y:186.7}},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586,p:{x:197.6,y:186.7}},{t:this.shape_585},{t:this.shape_584,p:{x:221.5,y:186.7}},{t:this.shape_583},{t:this.shape_582,p:{x:243.6,y:188.5}},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577,p:{x:-293.1,y:212.7}},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572,p:{x:-227.9,y:212.7}},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567,p:{x:-173,y:211}},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562,p:{x:-95.8,y:210.9}},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559,p:{x:-66.2,y:212.6}},{t:this.shape_558,p:{x:-53.4,y:212.7}},{t:this.shape_557,p:{x:-36,y:214.5}},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554,p:{x:12.5,y:212.7}},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545,p:{x:122.6,y:212.6}},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536,p:{x:225.5,y:216.4}}]},1).to({state:[{t:this.shape_853,p:{x:-301.9,y:118.1}},{t:this.shape_314,p:{x:-287.6,y:119.7}},{t:this.shape_852},{t:this.shape_682,p:{x:-265.7,y:118.1}},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813,p:{x:-34.5,y:141.5}},{t:this.shape_812},{t:this.shape_811},{t:this.shape_625,p:{x:-4.9,y:143.3}},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805,p:{x:64,y:143.3}},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799,p:{x:144.2,y:143.3}},{t:this.shape_798,p:{x:155.9,y:143.3}},{t:this.shape_797,p:{x:162.8,y:141.5}},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790,p:{x:-281.9,y:167.5}},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787,p:{x:-242.8,y:167.5}},{t:this.shape_786},{t:this.shape_785,p:{x:-211.4,y:167.5}},{t:this.shape_784},{t:this.shape_783,p:{x:-187.5,y:167.5}},{t:this.shape_782},{t:this.shape_781,p:{x:-171.2,y:165.7}},{t:this.shape_780},{t:this.shape_779,p:{x:-148.8,y:167.5}},{t:this.shape_778},{t:this.shape_777,p:{x:-120.2,y:167.5}},{t:this.shape_776,p:{x:-104.4,y:167.5}},{t:this.shape_775,p:{x:-92.7,y:167.5}},{t:this.shape_774,p:{x:-85.8,y:165.7}},{t:this.shape_582,p:{x:-76.6,y:167.5}},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769,p:{x:-10.1,y:169.4}},{t:this.shape_768,p:{x:2.1,y:167.5}},{t:this.shape_767},{t:this.shape_766,p:{x:29,y:167.5}},{t:this.shape_765,p:{x:38.8,y:167.5}},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762,p:{x:73.9,y:165.7}},{t:this.shape_761,p:{x:82.2,y:167.5}},{t:this.shape_760,p:{x:95.7,y:165.8}},{t:this.shape_759,p:{x:104.5,y:167.5}},{t:this.shape_758,p:{x:111.4,y:165.7}},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755,p:{x:144.6,y:165.8}},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752,p:{x:187.3,y:165.7}},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748,p:{x:237.2,y:165.8}},{t:this.shape_747,p:{x:246,y:167.5}},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_616,p:{x:-255.4,y:189.8}},{t:this.shape_740},{t:this.shape_739},{t:this.shape_611,p:{x:-216.1,y:189.8}},{t:this.shape_738},{t:this.shape_737},{t:this.shape_562,p:{x:-166.8,y:189.9}},{t:this.shape_736},{t:this.shape_735,p:{x:-146.4,y:189.9}},{t:this.shape_559,p:{x:-137.2,y:191.6}},{t:this.shape_734},{t:this.shape_536,p:{x:-115.6,y:195.4}},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_626,p:{x:-59.6,y:189.9}},{t:this.shape_730,p:{x:-51,y:191.7}},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_586,p:{x:8,y:189.8}},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724,p:{x:47.2,y:191.7}},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721,p:{x:85,y:191.7}},{t:this.shape_720},{t:this.shape_719},{t:this.shape_584,p:{x:120.1,y:189.8}},{t:this.shape_718,p:{x:129.3,y:191.7}},{t:this.shape_717},{t:this.shape_716,p:{x:159,y:191.7}},{t:this.shape_618,p:{x:170.7,y:191.7}},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713,p:{x:-303.9,y:215.9}},{t:this.shape_712},{t:this.shape_711,p:{x:-279.2,y:215.9}},{t:this.shape_589,p:{x:-270.5,y:214.1}},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708,p:{x:-235,y:215.9}},{t:this.shape_707,p:{x:-222.7,y:215.9}},{t:this.shape_706},{t:this.shape_705,p:{x:-191.5,y:215.9}},{t:this.shape_704,p:{x:-179.7,y:215.9}},{t:this.shape_703},{t:this.shape_702,p:{x:-146.8,y:215.9}},{t:this.shape_701,p:{x:-134,y:215.9}},{t:this.shape_700,p:{x:-123.6,y:214.2}},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697,p:{x:-93.4,y:214}},{t:this.shape_545,p:{x:-84.2,y:215.8}},{t:this.shape_696,p:{x:-71.3,y:214.1}},{t:this.shape_695},{t:this.shape_694,p:{x:-48.5,y:214.2}},{t:this.shape_693,p:{x:-42.2,y:214}},{t:this.shape_692,p:{x:-35.9,y:219.6}}]},1).to({state:[{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_625,p:{x:-259.1,y:127.5}},{t:this.shape_797,p:{x:-249.8,y:125.8}},{t:this.shape_952},{t:this.shape_582,p:{x:-229,y:127.5}},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949,p:{x:-194.2,y:131.3}},{t:this.shape_948,p:{x:-176.5,y:125.8}},{t:this.shape_947},{t:this.shape_946},{t:this.shape_799,p:{x:-135.1,y:127.6}},{t:this.shape_798,p:{x:-123.5,y:127.6}},{t:this.shape_805,p:{x:-113.7,y:127.6}},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_787,p:{x:-279.8,y:151.8}},{t:this.shape_785,p:{x:-261.7,y:151.8}},{t:this.shape_752,p:{x:-252.5,y:149.9}},{t:this.shape_932},{t:this.shape_775,p:{x:-225.5,y:151.8}},{t:this.shape_931},{t:this.shape_777,p:{x:-206.2,y:151.8}},{t:this.shape_776,p:{x:-190.3,y:151.8}},{t:this.shape_768,p:{x:-178.7,y:151.8}},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_760,p:{x:-108.3,y:150.1}},{t:this.shape_779,p:{x:-98.4,y:151.8}},{t:this.shape_766,p:{x:-86.6,y:151.8}},{t:this.shape_781,p:{x:-74.3,y:150}},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_761,p:{x:-20.7,y:151.8}},{t:this.shape_755,p:{x:-12.3,y:150.1}},{t:this.shape_922},{t:this.shape_921},{t:this.shape_748,p:{x:20.9,y:150.1}},{t:this.shape_765,p:{x:30.7,y:151.8}},{t:this.shape_783,p:{x:48.7,y:151.8}},{t:this.shape_920},{t:this.shape_919},{t:this.shape_759,p:{x:92.2,y:151.8}},{t:this.shape_918},{t:this.shape_774,p:{x:106.6,y:150}},{t:this.shape_747,p:{x:114.8,y:151.8}},{t:this.shape_762,p:{x:121.8,y:150}},{t:this.shape_917},{t:this.shape_916},{t:this.shape_758,p:{x:161.8,y:150}},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_769,p:{x:207,y:153.6}},{t:this.shape_790,p:{x:219.9,y:151.8}},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_606,p:{x:-242.5,y:174.1}},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_623,p:{x:-152.8,y:174.1}},{t:this.shape_616,p:{x:-147,y:174.1}},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_730,p:{x:-88.8,y:175.9}},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_586,p:{x:-28.5,y:174.1}},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_735,p:{x:18.1,y:174.1}},{t:this.shape_889},{t:this.shape_724,p:{x:46.3,y:175.9}},{t:this.shape_618,p:{x:58,y:175.9}},{t:this.shape_718,p:{x:73.7,y:175.9}},{t:this.shape_888},{t:this.shape_721,p:{x:94,y:175.9}},{t:this.shape_887},{t:this.shape_886},{t:this.shape_629,p:{x:137.9,y:174.1}},{t:this.shape_716,p:{x:151.3,y:175.9}},{t:this.shape_584,p:{x:165.9,y:174.1}},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_711,p:{x:-285.1,y:200.1}},{t:this.shape_882},{t:this.shape_697,p:{x:-263.8,y:198.3}},{t:this.shape_881},{t:this.shape_559,p:{x:-241.6,y:200.1}},{t:this.shape_613,p:{x:-232.4,y:198.3}},{t:this.shape_696,p:{x:-223,y:198.3}},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_702,p:{x:-172,y:200.1}},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_713,p:{x:-62.4,y:200.1}},{t:this.shape_700,p:{x:-46.5,y:198.4}},{t:this.shape_870},{t:this.shape_869},{t:this.shape_602,p:{x:-18.7,y:198.3}},{t:this.shape_545,p:{x:-9.5,y:200.1}},{t:this.shape_589,p:{x:-0.2,y:198.3}},{t:this.shape_705,p:{x:9.2,y:200.1}},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_693,p:{x:209.4,y:198.3}},{t:this.shape_694,p:{x:216.5,y:198.4}},{t:this.shape_701,p:{x:226.2,y:200.1}},{t:this.shape_704,p:{x:237.9,y:200.1}},{t:this.shape_854},{t:this.shape_708,p:{x:261.4,y:200.1}},{t:this.shape_707,p:{x:273.6,y:200.1}},{t:this.shape_692,p:{x:281.8,y:203.8}}]},1).to({state:[{t:this.shape_1115},{t:this.shape_310,p:{x:-291.4,y:116.2}},{t:this.shape_1114},{t:this.shape_681,p:{x:-272.2}},{t:this.shape_1113,p:{x:-261.2}},{t:this.shape_314,p:{x:-252.2,y:118}},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_321,p:{x:-207.7,y:118}},{t:this.shape_684,p:{x:-198.5}},{t:this.shape_1110},{t:this.shape_1109},{t:this.shape_1108},{t:this.shape_1107,p:{x:-147.4}},{t:this.shape_1106,p:{x:-139.3}},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101,p:{x:-85.1}},{t:this.shape_1100,p:{x:-72.3}},{t:this.shape_1099},{t:this.shape_1098},{t:this.shape_1097,p:{x:-39}},{t:this.shape_1096},{t:this.shape_577,p:{x:-289.1,y:141.6}},{t:this.shape_1095},{t:this.shape_1094,p:{x:-258.2}},{t:this.shape_1093,p:{x:-249}},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090,p:{x:-208.7}},{t:this.shape_1089,p:{x:-195.9}},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086,p:{x:-157.8}},{t:this.shape_1085},{t:this.shape_1084,p:{x:-128.6}},{t:this.shape_1083,p:{x:-114}},{t:this.shape_1082,p:{x:-104.8}},{t:this.shape_1081},{t:this.shape_1080,p:{x:-71.8}},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_1077,p:{x:-38.8}},{t:this.shape_1076},{t:this.shape_1075,p:{x:-16.6}},{t:this.shape_1074,p:{x:-7.4}},{t:this.shape_696,p:{x:2,y:139.8}},{t:this.shape_1073,p:{x:15}},{t:this.shape_1072},{t:this.shape_557,p:{x:39.1,y:143.4}},{t:this.shape_1071},{t:this.shape_1070,p:{x:68.6}},{t:this.shape_1069,p:{x:86.5}},{t:this.shape_1068},{t:this.shape_1067,p:{x:112.3}},{t:this.shape_1066,p:{x:124.2}},{t:this.shape_1065,p:{x:133}},{t:this.shape_1064,p:{x:142.2}},{t:this.shape_1063,p:{x:153.9}},{t:this.shape_567,p:{x:162.4,y:139.9}},{t:this.shape_1062,p:{x:172.1}},{t:this.shape_1061,p:{x:190.2}},{t:this.shape_1060},{t:this.shape_1059},{t:this.shape_1058,p:{x:-289.7}},{t:this.shape_1057,p:{x:-279.9}},{t:this.shape_1056,p:{x:-267.7}},{t:this.shape_1055,p:{x:-259}},{t:this.shape_1054,p:{x:-249.7}},{t:this.shape_1053,p:{x:-236.3}},{t:this.shape_1052,p:{x:-223.5}},{t:this.shape_1051,p:{x:-212.9}},{t:this.shape_1050,p:{x:-203.1}},{t:this.shape_1049,p:{x:-185}},{t:this.shape_1048,p:{x:-171.6}},{t:this.shape_1047},{t:this.shape_562,p:{x:-135.7,y:164}},{t:this.shape_1046},{t:this.shape_1045,p:{x:-115.3}},{t:this.shape_1044,p:{x:-106.1,y:165.7}},{t:this.shape_1043},{t:this.shape_1042,p:{x:-84.5}},{t:this.shape_1041},{t:this.shape_1040,p:{x:-53.6}},{t:this.shape_1039,p:{x:-41.9}},{t:this.shape_1038,p:{x:-32.8}},{t:this.shape_1037},{t:this.shape_1036,p:{x:-12.5}},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033,p:{x:28.7}},{t:this.shape_1032,p:{x:41.7}},{t:this.shape_1031},{t:this.shape_1030,p:{x:78}},{t:this.shape_1029,p:{x:91}},{t:this.shape_1028,p:{x:103.9}},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_1025,p:{x:151.9}},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022,p:{x:-289.5}},{t:this.shape_1021},{t:this.shape_1020,p:{x:-265}},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016,p:{x:-220.2}},{t:this.shape_1015,p:{x:-213.3}},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012,p:{x:-174.8}},{t:this.shape_1011,p:{x:-160.5}},{t:this.shape_1010},{t:this.shape_1009,p:{x:-138.2}},{t:this.shape_1008,p:{x:-126.1}},{t:this.shape_1007,p:{x:-116.4}},{t:this.shape_1006,p:{x:-98.2}},{t:this.shape_1005,p:{x:-89}},{t:this.shape_1004,p:{x:-75.4}},{t:this.shape_1003,p:{x:-65.5}},{t:this.shape_625,p:{x:-52.9,y:189.9}},{t:this.shape_1002,p:{x:-40}},{t:this.shape_1001,p:{x:-27.1}},{t:this.shape_1000},{t:this.shape_582,p:{x:-1.4,y:189.9}},{t:this.shape_999,p:{x:7.9}},{t:this.shape_998,p:{x:20.3}},{t:this.shape_997,p:{x:32.6}},{t:this.shape_996,p:{x:41.9}},{t:this.shape_995,p:{x:54.7}},{t:this.shape_994,p:{x:65.3}},{t:this.shape_993,p:{x:75.2}},{t:this.shape_992},{t:this.shape_991,p:{x:106.8}},{t:this.shape_990,p:{x:124.9}},{t:this.shape_989},{t:this.shape_988,p:{x:147}},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985,p:{x:183}},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982,p:{x:226}},{t:this.shape_981,p:{x:235.3}},{t:this.shape_980},{t:this.shape_979,p:{x:258.1}},{t:this.shape_978},{t:this.shape_559,p:{x:-302.2,y:214.1}},{t:this.shape_977,p:{x:-289.4}},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972,p:{x:-227.8}},{t:this.shape_971},{t:this.shape_970,p:{x:-207.9}},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965,p:{x:-140.3}},{t:this.shape_964},{t:this.shape_963},{t:this.shape_545,p:{x:-96.2,y:214.1}},{t:this.shape_962,p:{x:-83.5}},{t:this.shape_961,p:{x:-71.8}},{t:this.shape_960,p:{x:-61.9}},{t:this.shape_959,p:{x:-52.7}},{t:this.shape_958,p:{x:-46.9,y:212.3}},{t:this.shape_957,p:{x:-40.7}}]},1).to({state:[{t:this.shape_1208},{t:this.shape_1207},{t:this.shape_1206},{t:this.shape_1205},{t:this.shape_853,p:{x:-248.8,y:116.3}},{t:this.shape_687,p:{x:-234.6}},{t:this.shape_1113,p:{x:-223.6}},{t:this.shape_1204},{t:this.shape_681,p:{x:-208.5}},{t:this.shape_1203},{t:this.shape_1202},{t:this.shape_321,p:{x:-163.7,y:118}},{t:this.shape_684,p:{x:-154.5}},{t:this.shape_310,p:{x:-145.9,y:116.2}},{t:this.shape_314,p:{x:-137.1,y:118}},{t:this.shape_1201},{t:this.shape_1107,p:{x:-111.4}},{t:this.shape_1200,p:{x:-103.3}},{t:this.shape_1199},{t:this.shape_1198},{t:this.shape_1197},{t:this.shape_1196,p:{x:-57.2}},{t:this.shape_1106,p:{x:-49.2}},{t:this.shape_1195,p:{x:-36.1}},{t:this.shape_1101,p:{x:-25.4}},{t:this.shape_1194},{t:this.shape_1097,p:{x:-3}},{t:this.shape_1096},{t:this.shape_577,p:{x:-289.1,y:141.6}},{t:this.shape_1094,p:{x:-276.3}},{t:this.shape_1193},{t:this.shape_1192},{t:this.shape_1191},{t:this.shape_1190},{t:this.shape_1063,p:{x:-202.4}},{t:this.shape_1082,p:{x:-192.5}},{t:this.shape_1189,p:{x:-174.4}},{t:this.shape_1188},{t:this.shape_1084,p:{x:-148.1}},{t:this.shape_1187,p:{x:-130}},{t:this.shape_1186},{t:this.shape_1185},{t:this.shape_1184},{t:this.shape_1183},{t:this.shape_1083,p:{x:-65.4}},{t:this.shape_1182},{t:this.shape_1077,p:{x:-41.6}},{t:this.shape_1181,p:{x:-32.2}},{t:this.shape_1075,p:{x:-19.4}},{t:this.shape_1180},{t:this.shape_1179},{t:this.shape_1178},{t:this.shape_1080,p:{x:37.3}},{t:this.shape_1065,p:{x:51.9}},{t:this.shape_1177},{t:this.shape_1176},{t:this.shape_1070,p:{x:87.5}},{t:this.shape_1175},{t:this.shape_1064,p:{x:113.4}},{t:this.shape_1090,p:{x:126.2}},{t:this.shape_1174},{t:this.shape_1062,p:{x:152.5}},{t:this.shape_1073,p:{x:165.3}},{t:this.shape_1069,p:{x:178}},{t:this.shape_958,p:{x:187.3,y:139.8}},{t:this.shape_1089,p:{x:196.5}},{t:this.shape_557,p:{x:213.8,y:143.4}},{t:this.shape_1173},{t:this.shape_1172},{t:this.shape_1061,p:{x:251.7}},{t:this.shape_1171},{t:this.shape_1170},{t:this.shape_1169},{t:this.shape_1049,p:{x:-257.9}},{t:this.shape_1168},{t:this.shape_1167,p:{x:-229.9}},{t:this.shape_1028,p:{x:-220.5}},{t:this.shape_1166},{t:this.shape_1165},{t:this.shape_1039,p:{x:-178.5}},{t:this.shape_1164,p:{x:-168.7}},{t:this.shape_1163,p:{x:-155.9}},{t:this.shape_1054,p:{x:-143}},{t:this.shape_1057,p:{x:-129.6}},{t:this.shape_1162},{t:this.shape_1161,p:{x:-99.9}},{t:this.shape_1053,p:{x:-87}},{t:this.shape_1029,p:{x:-74.2}},{t:this.shape_1160},{t:this.shape_1159,p:{x:-55.4}},{t:this.shape_1056,p:{x:-43.2}},{t:this.shape_1158},{t:this.shape_1157},{t:this.shape_1156,p:{x:-4.3}},{t:this.shape_1155,p:{x:1.5}},{t:this.shape_1036,p:{x:8.5}},{t:this.shape_1154},{t:this.shape_1038,p:{x:30}},{t:this.shape_1050,p:{x:39.9}},{t:this.shape_1153},{t:this.shape_1152},{t:this.shape_1048,p:{x:83}},{t:this.shape_1151},{t:this.shape_1040,p:{x:118.9}},{t:this.shape_1150},{t:this.shape_1055,p:{x:139.1}},{t:this.shape_1044,p:{x:148.3,y:165.7}},{t:this.shape_1149,p:{x:161.1}},{t:this.shape_1148},{t:this.shape_1045,p:{x:181.8}},{t:this.shape_1033,p:{x:191.2}},{t:this.shape_625,p:{x:203.9,y:165.7}},{t:this.shape_1147,p:{x:212.8}},{t:this.shape_1146},{t:this.shape_1145},{t:this.shape_1144},{t:this.shape_1143},{t:this.shape_1142},{t:this.shape_1141},{t:this.shape_979,p:{x:-259.8}},{t:this.shape_1140,p:{x:-250.5}},{t:this.shape_1003,p:{x:-241.2}},{t:this.shape_1139,p:{x:-228.4}},{t:this.shape_982,p:{x:-215.5}},{t:this.shape_1022,p:{x:-197.2}},{t:this.shape_999,p:{x:-187.3}},{t:this.shape_1138},{t:this.shape_1137},{t:this.shape_1136},{t:this.shape_1135},{t:this.shape_996,p:{x:-127.5}},{t:this.shape_582,p:{x:-109.6,y:189.9}},{t:this.shape_1134},{t:this.shape_1001,p:{x:-83.8}},{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_1007,p:{x:-34.5}},{t:this.shape_1131,p:{x:-18.5}},{t:this.shape_1130},{t:this.shape_1008,p:{x:9.7}},{t:this.shape_991,p:{x:19.6}},{t:this.shape_1129},{t:this.shape_559,p:{x:49.3,y:189.9}},{t:this.shape_1002,p:{x:62.1}},{t:this.shape_1128},{t:this.shape_1127},{t:this.shape_990,p:{x:112.2}},{t:this.shape_1011,p:{x:121.4}},{t:this.shape_545,p:{x:136,y:189.9}},{t:this.shape_985,p:{x:148.8}},{t:this.shape_995,p:{x:161.8}},{t:this.shape_1126,p:{x:174.6}},{t:this.shape_1125},{t:this.shape_997,p:{x:197.5}},{t:this.shape_1124,p:{x:206.2}},{t:this.shape_988,p:{x:216.2}},{t:this.shape_1123,p:{x:226}},{t:this.shape_1004,p:{x:237.7}},{t:this.shape_981,p:{x:244.6}},{t:this.shape_1122,p:{x:253.8}},{t:this.shape_1121},{t:this.shape_1005,p:{x:281.1}},{t:this.shape_1120},{t:this.shape_1119},{t:this.shape_1118},{t:this.shape_1117},{t:this.shape_1116},{t:this.shape_957,p:{x:-235.3}}]},1).to({state:[{t:this.shape_1279},{t:this.shape_317,p:{x:-294.4,y:116.3}},{t:this.shape_1278},{t:this.shape_1277},{t:this.shape_684,p:{x:-261.1}},{t:this.shape_311,p:{x:-252.5,y:116.2}},{t:this.shape_1276},{t:this.shape_312,p:{x:-226.8,y:116.3}},{t:this.shape_688,p:{x:-218.1}},{t:this.shape_681,p:{x:-205.6}},{t:this.shape_310,p:{x:-197,y:116.2}},{t:this.shape_1275},{t:this.shape_314,p:{x:-176.2,y:118}},{t:this.shape_1274},{t:this.shape_1273},{t:this.shape_1272},{t:this.shape_1271},{t:this.shape_1270},{t:this.shape_1196,p:{x:-107.2}},{t:this.shape_1200,p:{x:-99.1}},{t:this.shape_1195,p:{x:-86}},{t:this.shape_1106,p:{x:-75.4}},{t:this.shape_1101,p:{x:-63.5}},{t:this.shape_1097,p:{x:-53}},{t:this.shape_1269},{t:this.shape_1268},{t:this.shape_1267},{t:this.shape_1075,p:{x:-282}},{t:this.shape_1074,p:{x:-272.7}},{t:this.shape_1266},{t:this.shape_1083,p:{x:-248.9}},{t:this.shape_1265},{t:this.shape_1077,p:{x:-225.1}},{t:this.shape_577,p:{x:-215.7,y:141.6}},{t:this.shape_1069,p:{x:-203}},{t:this.shape_1264,p:{x:-190.5}},{t:this.shape_1187,p:{x:-177.7}},{t:this.shape_1263},{t:this.shape_1084,p:{x:-146.2}},{t:this.shape_1065,p:{x:-131.7}},{t:this.shape_1090,p:{x:-122.3}},{t:this.shape_1262},{t:this.shape_1080,p:{x:-96}},{t:this.shape_1261},{t:this.shape_1070,p:{x:-70.1}},{t:this.shape_1067,p:{x:-57.3}},{t:this.shape_1260},{t:this.shape_1064,p:{x:-31.1}},{t:this.shape_1073,p:{x:-18.2}},{t:this.shape_1044,p:{x:-5.5,y:141.5}},{t:this.shape_958,p:{x:3.8,y:139.8}},{t:this.shape_1259},{t:this.shape_1258},{t:this.shape_1062,p:{x:43.1}},{t:this.shape_1086,p:{x:54.8}},{t:this.shape_1089,p:{x:64.7}},{t:this.shape_625,p:{x:82.6,y:141.5}},{t:this.shape_1257},{t:this.shape_1063,p:{x:107.3}},{t:this.shape_1256},{t:this.shape_557,p:{x:134.5,y:143.4}},{t:this.shape_1061,p:{x:152.2}},{t:this.shape_1255},{t:this.shape_567,p:{x:174.4,y:139.9}},{t:this.shape_1181,p:{x:184.3}},{t:this.shape_1066,p:{x:196.5}},{t:this.shape_558,p:{x:208.5,y:141.6}},{t:this.shape_1254},{t:this.shape_1253},{t:this.shape_1252},{t:this.shape_1033,p:{x:-280.9}},{t:this.shape_1251,p:{x:-270.3}},{t:this.shape_1250},{t:this.shape_1249},{t:this.shape_1057,p:{x:-228.7}},{t:this.shape_1167,p:{x:-214.2}},{t:this.shape_1028,p:{x:-204.8}},{t:this.shape_1161,p:{x:-191.9}},{t:this.shape_1248},{t:this.shape_1247,p:{x:-169.9}},{t:this.shape_1246},{t:this.shape_1156,p:{x:-151.6}},{t:this.shape_1245},{t:this.shape_1244},{t:this.shape_1147,p:{x:-115.1}},{t:this.shape_1243},{t:this.shape_1159,p:{x:-88.7}},{t:this.shape_1242},{t:this.shape_1241},{t:this.shape_1240},{t:this.shape_1053,p:{x:-44.5}},{t:this.shape_1163,p:{x:-31.7}},{t:this.shape_1054,p:{x:-18.8}},{t:this.shape_1050,p:{x:-5.4}},{t:this.shape_1058,p:{x:6.2}},{t:this.shape_1239},{t:this.shape_1051,p:{x:36.8}},{t:this.shape_1048,p:{x:46.6}},{t:this.shape_1238},{t:this.shape_1040,p:{x:72.2}},{t:this.shape_1039,p:{x:83.8}},{t:this.shape_1237},{t:this.shape_1236},{t:this.shape_582,p:{x:131.1,y:165.7}},{t:this.shape_1235},{t:this.shape_1234},{t:this.shape_1233},{t:this.shape_1232,p:{x:185.5}},{t:this.shape_1055,p:{x:194.3}},{t:this.shape_559,p:{x:203.5,y:165.7}},{t:this.shape_1036,p:{x:214}},{t:this.shape_1032,p:{x:223.9}},{t:this.shape_1038,p:{x:235.7}},{t:this.shape_1045,p:{x:242.6}},{t:this.shape_1231},{t:this.shape_1230},{t:this.shape_1042,p:{x:272.1}},{t:this.shape_1229},{t:this.shape_1228},{t:this.shape_1126,p:{x:-272.7}},{t:this.shape_1227},{t:this.shape_981,p:{x:-249.9}},{t:this.shape_1226},{t:this.shape_1225},{t:this.shape_994,p:{x:-213.6}},{t:this.shape_1139,p:{x:-203.7}},{t:this.shape_1131,p:{x:-187.7}},{t:this.shape_1224},{t:this.shape_1008,p:{x:-160.3}},{t:this.shape_1003,p:{x:-144.5}},{t:this.shape_1011,p:{x:-135.3}},{t:this.shape_1223},{t:this.shape_1222},{t:this.shape_669,p:{x:-99.1,y:188.2}},{t:this.shape_949,p:{x:-92.5,y:193.6}},{t:this.shape_1221},{t:this.shape_1005,p:{x:-63.8}},{t:this.shape_1220},{t:this.shape_996,p:{x:-41.6}},{t:this.shape_1009,p:{x:-29.1}},{t:this.shape_993,p:{x:-16.1}},{t:this.shape_1219,p:{x:-0.3}},{t:this.shape_1218,p:{x:9.4}},{t:this.shape_991,p:{x:22.2}},{t:this.shape_988,p:{x:38}},{t:this.shape_1217},{t:this.shape_1216},{t:this.shape_1122,p:{x:79.7}},{t:this.shape_1215},{t:this.shape_1007,p:{x:105.9}},{t:this.shape_1214},{t:this.shape_1004,p:{x:136.6}},{t:this.shape_990,p:{x:146.4}},{t:this.shape_1124,p:{x:158.5}},{t:this.shape_979,p:{x:170.9}},{t:this.shape_1012,p:{x:188.3}},{t:this.shape_965,p:{x:-307.4}},{t:this.shape_1213},{t:this.shape_960,p:{x:-289}},{t:this.shape_545,p:{x:-276.4,y:214.1}},{t:this.shape_1212},{t:this.shape_970,p:{x:-252.9}},{t:this.shape_1211},{t:this.shape_1210,p:{x:-230.4}},{t:this.shape_1209},{t:this.shape_957,p:{x:-208.1}}]},1).to({state:[{t:this.shape_1350},{t:this.shape_1349},{t:this.shape_317,p:{x:-278.2,y:116.3}},{t:this.shape_310,p:{x:-272.8,y:116.2}},{t:this.shape_312,p:{x:-267.3,y:116.3}},{t:this.shape_1348},{t:this.shape_1347},{t:this.shape_314,p:{x:-234.6,y:118}},{t:this.shape_1346},{t:this.shape_689,p:{x:-204.7}},{t:this.shape_685,p:{x:-192.5}},{t:this.shape_687,p:{x:-180.6}},{t:this.shape_1345},{t:this.shape_681,p:{x:-162.1}},{t:this.shape_1107,p:{x:-147.4}},{t:this.shape_1200,p:{x:-139.3}},{t:this.shape_1105},{t:this.shape_1344},{t:this.shape_1343},{t:this.shape_1102},{t:this.shape_1106,p:{x:-85.1}},{t:this.shape_1342},{t:this.shape_1101,p:{x:-61.4}},{t:this.shape_1100,p:{x:-48.5}},{t:this.shape_1097,p:{x:-39}},{t:this.shape_1341},{t:this.shape_1090,p:{x:-289.2}},{t:this.shape_1340},{t:this.shape_1339},{t:this.shape_1080,p:{x:-244.7}},{t:this.shape_1093,p:{x:-230.1}},{t:this.shape_1338},{t:this.shape_554,p:{x:-208.4,y:141.6}},{t:this.shape_1337},{t:this.shape_813,p:{x:-177.9,y:139.8}},{t:this.shape_1086,p:{x:-166.2}},{t:this.shape_1336},{t:this.shape_1070,p:{x:-143.7}},{t:this.shape_572,p:{x:-131.6,y:141.6}},{t:this.shape_1335},{t:this.shape_1089,p:{x:-95.1}},{t:this.shape_1334},{t:this.shape_1333},{t:this.shape_1332},{t:this.shape_1067,p:{x:-39.3}},{t:this.shape_1064,p:{x:-26.5}},{t:this.shape_1331},{t:this.shape_1330},{t:this.shape_1329},{t:this.shape_1328},{t:this.shape_557,p:{x:34.6,y:143.4}},{t:this.shape_1327},{t:this.shape_1063,p:{x:64.8}},{t:this.shape_958,p:{x:71.8,y:139.8}},{t:this.shape_1083,p:{x:77.6}},{t:this.shape_1077,p:{x:83.4}},{t:this.shape_1326},{t:this.shape_1073,p:{x:105.4}},{t:this.shape_567,p:{x:116,y:139.9}},{t:this.shape_1062,p:{x:125.8}},{t:this.shape_1325},{t:this.shape_1189,p:{x:155.5}},{t:this.shape_1324},{t:this.shape_1061,p:{x:181.9}},{t:this.shape_1264,p:{x:200.1}},{t:this.shape_1323},{t:this.shape_1322},{t:this.shape_1053,p:{x:-298.1}},{t:this.shape_1321},{t:this.shape_1155,p:{x:-275.9}},{t:this.shape_1320},{t:this.shape_1319},{t:this.shape_948,p:{x:-232.3,y:164}},{t:this.shape_562,p:{x:-217,y:164}},{t:this.shape_1318},{t:this.shape_1055,p:{x:-196.7}},{t:this.shape_625,p:{x:-187.5,y:165.7}},{t:this.shape_1317},{t:this.shape_1042,p:{x:-165.9}},{t:this.shape_1316},{t:this.shape_1025,p:{x:-138.3}},{t:this.shape_1052,p:{x:-125.4}},{t:this.shape_1251,p:{x:-114.8}},{t:this.shape_1028,p:{x:-104.9}},{t:this.shape_1247,p:{x:-86.7}},{t:this.shape_1315},{t:this.shape_1045,p:{x:-57.7}},{t:this.shape_1314},{t:this.shape_1313},{t:this.shape_1164,p:{x:-36.8}},{t:this.shape_1051,p:{x:-21}},{t:this.shape_1030,p:{x:-11.1}},{t:this.shape_1232,p:{x:1.2}},{t:this.shape_1312},{t:this.shape_1050,p:{x:31.4}},{t:this.shape_1311},{t:this.shape_582,p:{x:55.1,y:165.7}},{t:this.shape_1149,p:{x:68}},{t:this.shape_1310},{t:this.shape_1036,p:{x:91.5}},{t:this.shape_1038,p:{x:100.3}},{t:this.shape_1032,p:{x:110.1}},{t:this.shape_1167,p:{x:119.4}},{t:this.shape_1309},{t:this.shape_1048,p:{x:147.5}},{t:this.shape_1156,p:{x:156.7}},{t:this.shape_1308},{t:this.shape_1307},{t:this.shape_1306},{t:this.shape_1305},{t:this.shape_1040,p:{x:233.7}},{t:this.shape_1147,p:{x:243}},{t:this.shape_1304},{t:this.shape_1303},{t:this.shape_626,p:{x:-282.3,y:188.1}},{t:this.shape_1302},{t:this.shape_1301},{t:this.shape_1300},{t:this.shape_1020,p:{x:-237.4}},{t:this.shape_1016,p:{x:-225.7}},{t:this.shape_1002,p:{x:-216}},{t:this.shape_1299},{t:this.shape_1298},{t:this.shape_1219,p:{x:-170.2}},{t:this.shape_1297},{t:this.shape_1296},{t:this.shape_1295},{t:this.shape_1294},{t:this.shape_1293},{t:this.shape_1006,p:{x:-103.4}},{t:this.shape_1292},{t:this.shape_1008,p:{x:-72.9}},{t:this.shape_1003,p:{x:-63.1}},{t:this.shape_1291},{t:this.shape_1290},{t:this.shape_1004,p:{x:-25.5}},{t:this.shape_1123,p:{x:-15.6}},{t:this.shape_559,p:{x:-3,y:189.9}},{t:this.shape_1289},{t:this.shape_1288},{t:this.shape_995,p:{x:28.6}},{t:this.shape_1015,p:{x:43.3}},{t:this.shape_1287},{t:this.shape_994,p:{x:63.3}},{t:this.shape_996,p:{x:73.1}},{t:this.shape_1140,p:{x:82.3}},{t:this.shape_991,p:{x:91.5}},{t:this.shape_545,p:{x:104.1,y:189.9}},{t:this.shape_988,p:{x:114.6}},{t:this.shape_1218,p:{x:124.6}},{t:this.shape_1286},{t:this.shape_1011,p:{x:146.6}},{t:this.shape_1005,p:{x:157.8}},{t:this.shape_990,p:{x:167}},{t:this.shape_999,p:{x:181.6}},{t:this.shape_998,p:{x:194}},{t:this.shape_1285},{t:this.shape_997,p:{x:219.8}},{t:this.shape_1284},{t:this.shape_981,p:{x:239}},{t:this.shape_1283},{t:this.shape_970,p:{x:-307.9}},{t:this.shape_977,p:{x:-297.9}},{t:this.shape_1282},{t:this.shape_962,p:{x:-266.2}},{t:this.shape_972,p:{x:-254.5}},{t:this.shape_965,p:{x:-238.8}},{t:this.shape_959,p:{x:-229.6}},{t:this.shape_1281},{t:this.shape_1280},{t:this.shape_1210,p:{x:-188.5}},{t:this.shape_960,p:{x:-175.1}},{t:this.shape_961,p:{x:-163.4}},{t:this.shape_957,p:{x:-158.8}}]},1).wait(1));

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
	this.instance = new lib.tarjetaBack();
	this.instance.parent = this;
	this.instance.setTransform(-70.5,-77.7,0.863,0.809);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.5,-77.7,132,165);


(lib._50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#993300").s().p("AhCBaIAAivIAzAAIAAAZQANgSAKgFQAKgGANAAQATAAARAJIgRAoQgOgHgLAAQgMAAgIAFQgHAFgFAPQgEAOAAArIAAA3g");
	this.shape.setTransform(81.4,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#993300").s().p("AhOBNQgSgPAAgWQAAgPAJgMQAIgLAPgGQAPgGAcgFQAlgGAPgFIAAgFQAAgNgIgGQgHgFgVAAQgPAAgHAFQgIAEgGANIgxgIQAIgaAVgMQAUgMAoAAQAjAAATAHQARAIAIALQAHALAAAfIgBA1QABAXACALQADALAHANIg2AAIgGgOIgBgFQgOALgRAGQgOAGgSAAQggAAgTgPgAgBAKQgXAFgHAEQgKAGgBAKQAAAKAJAHQAJAHANAAQAOAAANgIQAKgHADgJQACgGAAgQIAAgKQgKADgWAEg");
	this.shape_1.setTransform(61.1,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#993300").s().p("AhHBuQgWgQAAgXIAAgGIA/AHQACAJAFAEQAIAFAQAAQAVAAAKgFQAIgFADgIQADgGAAgPIAAgZQgZAcgkAAQgqAAgYgeQgTgXAAgjQAAgsAZgXQAZgYAlAAQAmABAYAcIAAgZIA0AAIAACdQgBAfgGAPQgFAQgMAIQgLAJgRAGQgSAEgcAAQg0AAgWgPgAgfhMQgNANAAAaQAAAdANAMQAMANATAAQAUgBANgNQAOgMAAgbQAAgbgOgNQgNgNgTAAQgUAAgMANg");
	this.shape_2.setTransform(37.4,26.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#993300").s().p("Ag+BSQgQgHgHgPQgIgOAAgZIAAhuIA3AAIAABRQAAAkADAJQADAIAIAFQAIAFAMAAQANAAALgHQALgHAEgJQAEgKAAgkIAAhLIA3AAIAACvIgzAAIAAgbQgLAPgSAIQgSAIgUAAQgVAAgRgIg");
	this.shape_3.setTransform(13.5,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#993300").s().p("AhDBnQgXgUAAgnIA2gFQABAVAGAIQAKAOASAAQATAAAHgKQAJgJgBgeIAAibIA6AAIAACYQAAAegGARQgJAVgWANQgVAMgjAAQgrAAgWgUg");
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
	this.shape_11.graphics.f("#993300").s().p("AowEvQgNgtgvgkQgfgYglgLIAAl1QAlgMAfgYQAvgiANguIRbAAQAIA4A3ApQAgAYAoAMIAAFvQgwAMgmAdQgmAdgQAjg");
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

	// viewfinder
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

	this.instance_1 = new lib.zapata();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23.9,46.8,0.846,0.82,0,0,-53.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.846,skewY:-53.599999999999994,x:23.9,y:46.8}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.805,skewY:-18.6,x:6.1,y:15}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.86,skewY:0,x:-1.3,y:-4.7}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:68.7,y:75.3},1).to({_off:true,scaleX:0.85,scaleY:0.82,skewY:-53.6,x:23.9,y:46.8},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-2,132,165);


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

	this.instance_1 = new lib.zapata();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23.9,46.8,0.846,0.82,0,0,-53.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.846,skewY:-53.599999999999994,x:23.9,y:46.8}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.805,skewY:-18.6,x:6.1,y:15}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.86,skewY:0,x:-1.3,y:-4.7}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:68.7,y:75.3},1).to({_off:true,scaleX:0.85,scaleY:0.82,skewY:-53.6,x:23.9,y:46.8},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-2,132,165);


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

	this.instance_1 = new lib.Villajpgcopia();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.5,36.2,0.743,0.756,0,0,-46.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.743,scaleY:0.756,skewY:-46.3,x:19.5,y:36.2}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.78,scaleY:0.81,skewY:-11.7,x:5.6,y:10.6}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.86,scaleY:0.81,skewY:0,x:-1.7,y:-1.5}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:65.4,y:75.3},1).to({_off:true,scaleX:0.74,scaleY:0.76,skewY:-46.3,x:19.5,y:36.2},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-2,132,165);


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

	this.instance_1 = new lib.Villajpgcopia();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.5,36.2,0.743,0.756,0,0,-46.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.743,scaleY:0.756,skewY:-46.3,x:19.5,y:36.2}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.78,scaleY:0.81,skewY:-11.7,x:5.6,y:10.6}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.86,scaleY:0.81,skewY:0,x:-1.7,y:-1.5}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:65.4,y:75.3},1).to({_off:true,scaleX:0.74,scaleY:0.76,skewY:-46.3,x:19.5,y:36.2},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-2,132,165);


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

	this.instance_1 = new lib.guadalupeVictoria();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23,65,0.944,0.82,0,0,-54.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.944,skewY:-54.900000000000006,x:23,y:65}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.786,skewY:-25.6,x:10.6,y:22.5}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.86,skewY:0,x:-1.1,y:-3.6}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:68.7,y:75.3},1).to({_off:true,scaleX:0.94,scaleY:0.82,skewY:-54.9,x:23,y:65},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-2,132,165);


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

	this.instance_1 = new lib.guadalupeVictoria();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23,65,0.944,0.82,0,0,-54.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.944,skewY:-54.900000000000006,x:23,y:65}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.786,skewY:-25.6,x:10.6,y:22.5}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.86,skewY:0,x:-1.1,y:-3.6}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:68.7,y:75.3},1).to({_off:true,scaleX:0.94,scaleY:0.82,skewY:-54.9,x:23,y:65},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-2,132,165);


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

	this.instance_1 = new lib.santaanna();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.7,65.1,0.932,0.82,0,0,-57.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.932,skewY:-57.7,x:28.7,y:65.1}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.72,skewY:-24.8,x:14.8,y:20.6}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.86,skewY:0,x:-1.1,y:-2.5}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:68.7,y:75.3},1).to({_off:true,scaleX:0.93,scaleY:0.82,skewY:-57.7,x:28.7,y:65.1},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-2,132,165);


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

	this.instance_1 = new lib.santaanna();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.7,65.1,0.932,0.82,0,0,-57.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.932,skewY:-57.7,x:28.7,y:65.1}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.72,skewY:-24.8,x:14.8,y:20.6}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.86,skewY:0,x:-1.1,y:-2.5}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:68.7,y:75.3},1).to({_off:true,scaleX:0.93,scaleY:0.82,skewY:-57.7,x:28.7,y:65.1},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-2,132,165);


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

	this.instance_1 = new lib.diaz();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33.2,49.8,0.811,0.82,0,0,-59.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{scaleX:0.811,skewY:-59.4,x:33.2,y:49.8}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.807,skewY:-21.8,x:7.4,y:19.3}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.86,skewY:0,x:-1.1,y:-3.6}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:65.4},1).to({scaleX:0.98,skewY:119.9,x:62,y:75.6},1).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-2,132,165);


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

	this.instance_1 = new lib.diaz();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33.2,49.8,0.811,0.82,0,0,-59.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{scaleX:0.811,skewY:-59.4,x:33.2,y:49.8}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.807,skewY:-21.8,x:7.4,y:19.3}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.86,skewY:0,x:-1.1,y:-3.6}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:65.4},1).to({scaleX:0.98,skewY:119.9,x:62,y:75.6},1).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-2,132,165);


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

	this.instance_1 = new lib.obregon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.3,45.3,0.774,0.82,0,0,-53.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.774,skewY:-53.400000000000006,x:28.3,y:45.3}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.783,skewY:-29.5,x:11.5,y:27.3}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.86,skewY:0,x:-2.2,y:-2.2}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:65.8},1).to({_off:true,scaleX:0.77,scaleY:0.82,skewY:-53.4,x:28.3,y:45.3},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-2,132,165);


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

	this.instance_1 = new lib.obregon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.3,45.3,0.774,0.82,0,0,-53.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.774,skewY:-53.400000000000006,x:28.3,y:45.3}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.783,skewY:-29.5,x:11.5,y:27.3}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.86,skewY:0,x:-2.2,y:-2.2}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:65.8},1).to({_off:true,scaleX:0.77,scaleY:0.82,skewY:-53.4,x:28.3,y:45.3},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-2,132,165);


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

	this.instance_1 = new lib.morelos();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.4,45.8,0.8,0.813,0,0,-52.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.8,scaleY:0.813,skewY:-52.20000000000001,x:26.4,y:45.8}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.872,scaleY:0.775,skewY:-26.6,x:4.2,y:31.3}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.85,scaleY:0.8,skewY:0,x:-1.1,y:-1.2}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60.1,x:65.8},1).to({_off:true,scaleX:0.8,scaleY:0.81,skewY:-52.2,x:26.4,y:45.8},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-2,132,165);


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

	this.instance_1 = new lib.morelos();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.4,45.8,0.8,0.813,0,0,-52.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.8,scaleY:0.813,skewY:-52.20000000000001,x:26.4,y:45.8}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.872,scaleY:0.775,skewY:-26.6,x:4.2,y:31.3}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.85,scaleY:0.8,skewY:0,x:-1.1,y:-1.2}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60.1,x:65.8},1).to({_off:true,scaleX:0.8,scaleY:0.81,skewY:-52.2,x:26.4,y:45.8},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-2,132,165);


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

	this.instance_1 = new lib.moctezuma();
	this.instance_1.parent = this;
	this.instance_1.setTransform(31.9,54.6,0.909,0.82,0,0,-57.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.909,skewY:-57.8,x:31.9,y:54.6}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.842,skewY:-27.1,x:7.4,y:25}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.86,skewY:0,x:-1.1,y:-4.4}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:68.7,y:75.3},1).to({_off:true,scaleX:0.91,scaleY:0.82,skewY:-57.8,x:31.9,y:54.6},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-2,132,165);


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

	this.instance_1 = new lib.moctezuma();
	this.instance_1.parent = this;
	this.instance_1.setTransform(31.9,54.6,0.909,0.82,0,0,-57.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.909,skewY:-57.8,x:31.9,y:54.6}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.842,skewY:-27.1,x:7.4,y:25}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.86,skewY:0,x:-1.1,y:-4.4}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:68.7,y:75.3},1).to({_off:true,scaleX:0.91,scaleY:0.82,skewY:-57.8,x:31.9,y:54.6},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-2,132,165);


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

	this.instance_1 = new lib.maderojpgcopia();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.5,60.7,0.89,0.738,0,-7,-54.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{scaleX:0.89,scaleY:0.738,skewX:-7,skewY:-54.7,x:16.5,y:60.7}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.816,scaleY:0.82,skewX:0,skewY:-17.7,x:5.4,y:15.2}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.86,scaleY:0.82,skewX:0,skewY:0,x:-0.9,y:-3.8}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:66,y:75.3},1).to({scaleX:0.98,skewY:119.9,x:63.3,y:74.8},1).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-2,132,165);


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

	this.instance_1 = new lib.maderojpgcopia();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.5,60.7,0.89,0.738,0,-7,-54.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{scaleX:0.89,scaleY:0.738,skewX:-7,skewY:-54.7,x:16.5,y:60.7}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.816,scaleY:0.82,skewX:0,skewY:-17.7,x:5.4,y:15.2}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.86,scaleY:0.82,skewX:0,skewY:0,x:-0.9,y:-3.8}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:66,y:75.3},1).to({scaleX:0.98,skewY:119.9,x:63.3,y:74.8},1).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-2,132,165);


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

	this.instance_1 = new lib.iturbidejpgcopia();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.5,48.2,0.81,0.82,0,0,-54.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.81,skewY:-54.2,x:28.5,y:48.2}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.686,skewY:-24.2,x:16.9,y:19.3}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.86,skewY:0,x:-1.1,y:-2.2}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:65.8,y:75.3},1).to({_off:true,scaleX:0.81,scaleY:0.82,skewY:-54.2,x:28.5,y:48.2},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-2,132,165);


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

	this.instance_1 = new lib.iturbidejpgcopia();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.5,48.2,0.81,0.82,0,0,-54.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.81,skewY:-54.2,x:28.5,y:48.2}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.686,skewY:-24.2,x:16.9,y:19.3}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.86,skewY:0,x:-1.1,y:-2.2}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:65.8,y:75.3},1).to({_off:true,scaleX:0.81,scaleY:0.82,skewY:-54.2,x:28.5,y:48.2},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-2,132,165);


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
	this.shape.graphics.f("#663300").s().p("AgpBKQgMgTAAgEQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIAYgEQAPgFAAgLQAAgIgIgKIgRgRQgIgMAAgOQAAgZAagSQAWgQAaAAQADAAALASQALASAAADQAAACgDADIgJgBQgKAAgHAEQgJAFAAAKQAAAGAJAJQANAOADAEQAJANAAAPQAAAIgDAKQgEALgGAFQgNALgRAHQgRAIgPAAQgEAAgMgSg");
	this.shape.setTransform(372,47.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("Ag4BBQgZgYAAgoQAAgmAXgZQAXgaAnAAQAgAAAXAYQAXAXAAAhQAAARgLACIgkAEIg6AFQACALAMAGQAJAFANAAQAPAAAPgIIANgJQADACAJAQQAIAQAAAEQAAAAAAABQAAAAAAAAQAAABgBABQAAAAgBABQgVAWgrAAQgoAAgagYgAgUgkQgHAJAAALQABAFAEAAQANAAAZgEQAHgBgBgCQABgLgJgIQgHgIgJAAQgLAAgHAJg");
	this.shape_1.setTransform(357.3,47.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AAfBUQgFgBAAgGIAAgZIABgYIgBgTIAAgSQAAgXgUAAQgGAAgJAGQgJAGAAAHIAABbQAAAGgGABIgYAAQgUAAgGgBQgGgBAAgFIABgoIAAgnQAAgrgHgYIAAgDQAAAAAAgBQAAgBAAAAQABgBAAAAQABAAAAAAIAdgEIAfgFQACgBABAMQABALACAAIAAAAIAAAAQgCAAAUgLQATgMAPAAQAWAAAPAKQAQAMAAAVIAAA2IAAAhIAAAhQAAAFgFABIgZAAQgVAAgFgBg");
	this.shape_2.setTransform(338.3,48);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663300").s().p("Ag9A/QgYgYAAglQAAgnAXgZQAXgYAnAAQAmAAAYAYQAYAYAAAmQAAAngYAYQgXAYgnAAQglAAgYgYgAgVgXQgIAKAAANQAAAOAIAJQAJALAMAAQANAAAJgLQAIgJAAgOQAAgNgIgKQgJgLgNAAQgMAAgJALg");
	this.shape_3.setTransform(319.3,48);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663300").s().p("AgZB1QgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAIgBgFIABgjIAAgkQAAgwgEgdIAAgDQAAgDAFAAIAPABIANABIAPgBIAPgBQAEAAAAADIAAADQgEAiAAArIABAlIAAAkQAAAEgFABQgFABgVAAQgTAAgGgBgAgWhBQgLgJAAgNQAAgNAMgKQAJgHAMAAQAOAAAKAIQAKAJAAANQAAAdgiAAQgMAAgKgHg");
	this.shape_4.setTransform(305.3,44.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#663300").s().p("AgqA/QgZgZAAgmQAAgkAZgaQAYgaAlAAQAZAAATAMQAFABAAADIgFAUIgHAVQAAABAAABQgBAAAAABQgBAAAAAAQAAAAgBAAIgKgCQgKgDgGAAQgQAAgJAKQgIAIAAAPQAAAPAJAJQAKAJAQAAQAHAAAKgDIAJgFQADAAAEAXQAEATAAAGQAAAHgVAFQgQADgKAAQglABgYgag");
	this.shape_5.setTransform(293.3,48);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663300").s().p("AgqA/QgZgZAAgmQAAgkAZgaQAYgaAlAAQAZAAATAMQAFABAAADIgFAUIgHAVQAAABAAABQgBAAAAABQgBAAAAAAQAAAAgBAAIgKgCQgKgDgGAAQgQAAgJAKQgIAIAAAPQAAAPAJAJQAKAJAQAAQAHAAAKgDIAJgFQADAAAEAXQAEATAAAGQAAAHgVAFQgQADgKAAQglABgYgag");
	this.shape_6.setTransform(278.8,48);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#663300").s().p("AAeBRQgEgBAAgDIgBgKQgBgHgCgBIAAAAIAAAAQABABgSAKQgTAMgQAAQgtAAgIgoQgEgUAAgiQAAgnAGgXQACgHAFAAIAYAAIAYAAQAFAAAAAFIAAADQgEAXAAAYQAAAdACALQADATAUAAQAGAAAJgHQAJgHAAgGIAAhVQAAgGABgBQABgCAFAAIAaAAIAZAAQAFABABACIAAAEIgBAmIgBAlIABAlIAAAkQAAAGgEAAQgGACgVAAIgagBg");
	this.shape_7.setTransform(261.2,48.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#663300").s().p("AguBUQgGgBAAgFIABgpIAAgoQgBgogHgaIAAgCQAAgBAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIAcgEIAcgFQACAAABALQAAAKADABIAAAAIAAAAQgCgBAQgIQARgJAOAAQAKAAAAAEIgBAOIgBAOIAAANIAAANQAAAHgHAAIgKAAIgJgBQgOAAgFAFQgGAEABAMIAAAXIABAWIAAAPIABAOQgBAFgFAAIgYABIgagBg");
	this.shape_8.setTransform(244.6,48);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#663300").s().p("AgsBLIABgiIABgiQAAgHgJAAIgCAAIgCAAQgHAAAAgEIABgJIAAgIIAAgLIgBgLQAAgDALgBQAGAAABgDQABgHgBgOIAAgVQAAgTAEAAIANACIANACIAaADQAEABAAACIgBAVIgBAVQAAAIAFAAIASAAIASgBQABAAABAAQAAABABAAQAAAAABABQAAAAAAABIgBAMIgBALIAAAMIAAAMQAAADgFAAIgLAAIgMgBIgMAAQgDAAAAAIIAAAMIAAAMQAAAPADAFQAFAHAOAAIAMgCIALgCQAEAAAAAEIgCAQIgBAPIgBAGIgGAEQgWAMgaAAQgxAAAAglg");
	this.shape_9.setTransform(231,45.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#663300").s().p("AgpBKQgMgTAAgEQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIAYgEQAPgFAAgLQAAgIgIgKIgRgRQgIgMAAgOQAAgZAagSQAWgQAaAAQADAAALASQALASAAADQAAACgDADIgJgBQgKAAgHAEQgJAFAAAKQAAAGAJAJQANAOADAEQAJANAAAPQAAAIgDAKQgEALgGAFQgNALgRAHQgRAIgPAAQgEAAgMgSg");
	this.shape_10.setTransform(218,47.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#663300").s().p("AAfBUQgFgBAAgGIAAgZIABgYIgBgTIAAgSQAAgXgUAAQgGAAgJAGQgJAGAAAHIAABbQAAAGgGABIgYAAQgUAAgGgBQgGgBAAgFIABgoIAAgnQAAgrgHgYIAAgDQAAAAAAgBQAAgBAAAAQABgBAAAAQABAAAAAAIAdgEIAfgFQACgBABAMQABALACAAIAAAAIAAAAQgCAAAUgLQATgMAPAAQAWAAAPAKQAQAMAAAVIAAA2IAAAhIAAAhQAAAFgFABIgZAAQgVAAgFgBg");
	this.shape_11.setTransform(201.8,48);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#663300").s().p("AgfB3QgFgBAAgEIABgeQAEhFAAgVIgCg3IgBg3QAAgEAEAAIAQABIAPABIAQgBIAPgBQAFAAAAAEIgCA3IgCA3IABA8IABA8QAAABAAABQAAABAAAAQAAABgBAAQAAABAAAAIgFAAQgLACgSAAQgYAAgHgCg");
	this.shape_12.setTransform(186.8,44.4);

	this.jugar_btn = new lib._50();
	this.jugar_btn.parent = this;
	this.jugar_btn.setTransform(278.1,327.2,1.022,0.758,0,0,0,33.3,25.3);
	new cjs.ButtonHelper(this.jugar_btn, 0, 1, 2, false, new lib._50(), 3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgNBJQgGgGAAgJQAAgIAGgGQAGgGAHAAQAJAAAGAGQAFAGAAAIQAAAJgFAGQgGAFgJAAQgHAAgGgFgAgJAeIgDgiIgHgsIgBgJQAAgFADgFQADgFAFgDQAFgCAEAAQAFAAAFADQAFACADAFQADAFAAAGIgBALIgIAvIgBAcg");
	this.shape_13.setTransform(430.5,234.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_14.setTransform(420.7,236.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_15.setTransform(408.4,236.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_16.setTransform(395.5,236.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_17.setTransform(382.4,236.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgOA2IglhQIgDgEIgEgCIgIgBIAAgVIBCAAIAAAVIgDAAQgGAAgCABQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAABIABAFIAQApIASgpIACgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAgBgBQgBgBgGAAIgFAAIAAgVIA6AAIAAAVIgJABIgDADIgFAGIgkBNg");
	this.shape_18.setTransform(369.2,236.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AghBJQgPgGgHgKQgHgJAAgKQAAgLAIgJQAHgKARgGQgOgGgGgJQgIgKAAgMQABgMAGgJQAHgKANgGQAOgGARAAQAXAAAQAKQAQAKAAAQQAAAKgGAJQgGAIgNAHQAQAHAKALQAHAJAAANQAAAUgQANQgSAOgdAAQgTAAgOgGgAgYAYQgFAGAAAGQAAAEAEAFQADAEAHADQAGADAJAAQAJAAAHgDQAHgCADgEQADgEAAgEQAAgGgEgDQgFgFgNgGIgPgGQgLAFgFAHgAgRgyQgGAEAAAGQAAAFADADQAFAFAMAFIAMAFIAEgEIAFgHIADgGIAAgFQABgGgHgEQgFgFgLAAQgKAAgGAEg");
	this.shape_19.setTransform(347.5,234.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AguBNIAAgUIAPAAQAJAAACgBIADgEQACgDAAgHIAAhUIgfAAIAAgWIAUgDIAWgFIAMgEIAKAAIAAB2QAAAHABACQABABAAABQAAAAABABQAAAAABAAQAAABABAAQACABAHABIAPAAIAAAUg");
	this.shape_20.setTransform(333.1,234);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_21.setTransform(311.2,236.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AgFBHQgIgCgFgFQgGgEgCgGQgCgFAAgLIAAgyIgRAAIAAgWQAJgCAGgGQAHgFAEgHQADgHACgMIAUAAIAAAlIAjAAIAAAYIgjAAIAAAlQAAAMABAFQACADADACQAFADAGAAQAMAAALgHIAAAXQgKAEgHACQgIACgJAAQgKAAgHgDg");
	this.shape_22.setTransform(299.5,234.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AguA4IAAgVIAGAAQAGAAABgBIADgCIAAgIIAAgwIgQAAIAAgWQASgBATgIIAKAAIAAAQQAIgJAHgDQAGgEAGAAQAFAAAFACQAEADACAEQADAGAAAEQAAAIgFAFQgEAGgJgBIgDAAIgIgCIgEgBQgDAAgHAEIAAApQAAAGABACQAAAAABAAQAAABAAAAQAAAAABABQAAAAABAAIAIABIAFAAIAAAVg");
	this.shape_23.setTransform(289.7,236.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AAZA2QgIgEgFgGQgKAHgIADQgJADgJAAQgPAAgKgJQgKgJAAgNQAAgHAEgGQAEgGAGgFQAHgDANgEQAOgDATgCIAAgIIgBgKQgBgDgEgBQgCgCgFAAIgGABIgFADIgEAHQgCAHgFADQgEADgFAAQgIAAgEgFQgEgEgBgGQABgIAEgFQAGgIANgFQAMgFAPAAQAOAAALAFQAKAFAEAHQAFAHAAAOIAAAmQAAAHABACQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQADABAEAAIAIgBIAAAVQgKADgIAAQgLAAgGgDgAgLAMQgGACgCADQgDADAAADQAAAFADADQAEADAFAAQAEAAAFgCIAJgGIAAgTQgOACgFADg");
	this.shape_24.setTransform(277.7,236.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_25.setTransform(264.7,236.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAIgMAOgHQAOgIARAAQATAAANAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgcAAgQgQgAgLgcQgFADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgHgJQgGgIgKAAQgFAAgGAEg");
	this.shape_26.setTransform(251.1,236.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgOA2IglhQIgEgEIgDgCIgIgBIAAgVIBCAAIAAAVIgDAAQgGAAgCABQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABIAAAFIARApIASgpIABgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQgCgBgGAAIgGAAIAAgVIA7AAIAAAVIgIABIgFADIgDAGIglBNg");
	this.shape_27.setTransform(237.5,236.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_28.setTransform(226.9,233.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgfA2QgHgDgFgEQgEgEgCgGQgCgGAAgJIAAgsIgBgIIgCgCIgIgBIgGAAIAAgVIA0gBIAABGIAAAKQABACADACQACABAEAAQAFAAAGgCIAMgIIAAgqIAAgHIgDgDIgGgBIgHAAIAAgVIA0gBIAABNIAAAIQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAQABABAGAAIAGAAIAAAVIgwABIAAgNQgKAHgJAEQgJADgKAAQgIAAgGgCg");
	this.shape_29.setTransform(215.3,236.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgDBRIAAgWIAEAAIAJgBIACgBQABgCAAgGIAAgZQgJAGgGACQgHACgIAAQgTAAgMgOQgPgSAAgYQAAgQAHgNQAGgOAMgHQALgIANABQAIAAAGACQAIADAKAGIAGgJIAXAAIAAB9QAAAGABACIADACIAIABIAFAAIAAAWgAgPgzQgFADgCAGQgDAIAAALQAAALADAHQACAGAFADQAFAEAEAAIAJgCIAKgFIAAgkQAAgJgCgDQgBgDgFgCQgEgEgFAAQgGAAgFAFg");
	this.shape_30.setTransform(201.3,238.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_31.setTransform(187.5,236.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_32.setTransform(167.6,236.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_33.setTransform(155.3,236.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AgnBLQgLgHgGgNQgHgOAAgQQAAgRAHgNQAHgNALgHQAKgHAOAAQAHAAAHACQAFABAIAFIAAgaIgPAAIAAgVQAMgBAJgDQAIgCAKgDIAKAAIAAB+QAAAHABACIADACQABABAHAAIAFAAIAAAVIgvACIAAgLQgLAGgGADQgIACgIABQgMgBgLgGgAgPgEQgEAEgEAFQgDAIAAALQABAPAGAJQAGAIAIgBIAGAAIAMgIIAAgkQAAgHgCgCQAAgDgFgEQgFgDgEAAQgGAAgGAEg");
	this.shape_34.setTransform(141.8,233.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_35.setTransform(127.9,236.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AgfA2QgHgDgFgEQgEgEgCgGQgCgGAAgJIAAgsIgBgIIgCgCIgIgBIgGAAIAAgVIA0gBIAABGIAAAKQABACADACQACABAEAAQAFAAAGgCIAMgIIAAgqIAAgHIgDgDIgGgBIgHAAIAAgVIA0gBIAABNIAAAIQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAQABABAGAAIAGAAIAAAVIgwABIAAgNQgKAHgJAEQgJADgKAAQgIAAgGgCg");
	this.shape_36.setTransform(114.1,236.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AhEBMIAAgVIAFAAQAHAAACgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBIABgJIAAhTIgBgJQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAIgHgBIgHAAIAAgVIBPAAQAQAAAKADQAKADAHAGQAHAHAEAIQAEAJAAAKQAAATgPANQgPANgaAAIgZAAIAAAcIAAAHQAAABABAAQAAABABAAQAAAAABABQAAAAABAAIAGABIAHAAIAAAVgAgMgHIAMAAQAMAAAFgCQAGgDADgFQAEgFAAgHQAAgLgJgGQgGgEgLAAIgQAAg");
	this.shape_37.setTransform(99.7,234.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#663300").s().p("AgdANIAAgZIA7AAIAAAZg");
	this.shape_38.setTransform(80.2,236.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#663300").s().p("AgNAPQgHgGAAgJQAAgHAHgGQAFgGAIAAQAJAAAFAGQAGAGABAHQgBAJgGAGQgFAFgJAAQgIAAgFgFg");
	this.shape_39.setTransform(72.4,239.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#663300").s().p("AghBJQgPgHgHgKQgIgJAAgKQABgHAFgFQAFgGAHAAQAIAAAFAFQADADADAIQADAKADADQACADAGADQAGACAGAAQAGAAAHgDQAGgDADgFQADgGAAgHQAAgNgLgHQgIgFgPAAIgIAAIAAgUIAIAAQAMAAAGgCQAFgCAEgEQADgFAAgFQAAgIgGgFQgGgHgNAAQgJAAgHADQgGADgDAFQgEAFAAAJIgXAAIAAgEQAAgOAHgLQAFgKAOgGQAOgHAQAAQARAAAOAGQANAGAGAJQAHAJAAAKQAAAIgFAHQgDAHgIAFQgEAEgJADQAIABAGADQAHACAFAFQAEAFADAGQACAGAAAHQABANgIAKQgHALgPAHQgPAHgTAAQgTAAgOgGg");
	this.shape_40.setTransform(61.1,234.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_41.setTransform(197.4,187.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AgaBmQgHgDgEgGQgEgFAAgGQAAgGAEgEQAGgEAFAAQAFAAADACQAEADAGAGQADAEADAAQADAAACgDQACgDAAgIIAAheIgQAAIAAgVQALAAAKgDQAKgCAKgFIAKAAIAAB0QgBARgEAIQgFAJgLAGQgLAFgOAAQgLAAgJgDgAAIhGQgGgGAAgIQAAgJAGgFQAGgGAIAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgGgGg");
	this.shape_42.setTransform(185.3,187.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AAZA2QgIgEgFgGQgKAHgIADQgJADgJAAQgPAAgKgJQgKgJAAgNQAAgHAEgGQAEgGAGgFQAHgDANgEQAOgDATgCIAAgIIgBgKQgBgDgEgBQgCgCgFAAIgGABIgFADIgEAHQgCAHgFADQgEADgFAAQgIAAgEgFQgEgEgBgGQABgIAEgFQAGgIANgFQAMgFAPAAQAOAAALAFQAKAFAEAHQAFAHAAAOIAAAmQAAAHABACQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQADABAEAAIAIgBIAAAVQgKADgIAAQgLAAgGgDgAgLAMQgGACgCADQgDADAAADQAAAFADADQAEADAFAAQAEAAAFgCIAJgGIAAgTQgOACgFADg");
	this.shape_43.setTransform(176.9,187.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AAEA4IAAgVIAIAAQABgBABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAgGIAAgoQAAgHgBgDQgEgDgFAAQgEAAgFACQgFACgKAGIAAArQABAGABADQACABAGAAIADAAIAAAVIhAAAIAAgVIAEAAQAHAAACgBIADgCIAAgGIAAgzIgQAAIAAgUQAUgDARgHIALAAIAAAPQALgJAJgCQAJgEAJAAQAKAAAJAEQAIAFADAHQAEAGAAANIAAAtIABAHIACADIAIAAIAGAAIAAAVg");
	this.shape_44.setTransform(162.9,187.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAOgHQAOgIASAAQASAAAOAHQAOAIAHAMQAIANAAAQQAAAZgQAQQgRAQgcAAQgcAAgQgQgAgKgcQgGADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgGgJQgHgIgKAAQgFAAgFAEg");
	this.shape_45.setTransform(148.1,187.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_46.setTransform(135.4,187.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AguA4IAAgVIAGAAQAGAAABgBIADgCIAAgHIAAgyIgQAAIAAgUQASgBATgJIAKAAIAAAQQAIgJAHgDQAGgEAGAAQAFAAAFADQAEACACAFQADAEAAAGQAAAGgFAGQgEAFgJABIgDAAIgIgDIgEgBQgDAAgHAEIAAAqQAAAFABABQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIAIABIAFAAIAAAVg");
	this.shape_47.setTransform(124.8,187.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_48.setTransform(112.7,187.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("Ag+BRIAAgWIAEAAIAJAAIADgDIABgIIAAhhIgRAAIAAgVIAUgDQAJgDAIgEIAKAAIAAANQANgIAFgCQAHgCAIgBQATAAAMAPQAOAQAAAZQgBAYgLAQQgOASgYAAQgHAAgGgBIgKgHIAAAWIAAAIIACADIAIAAIAFAAIAAAWgAgKgtIAAAkQAAAIABACQABAEAEADQAEABAEAAQAJABAGgJQAGgHAAgRQAAgPgFgHQgFgIgHAAQgIAAgKAIg");
	this.shape_49.setTransform(99,189.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AghBQIAAgVIAEAAQAHAAACgBIADgCIABgIIAAhhIgRAAIAAgVQAUgBATgIIAMAAIAAB/IAAAHQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQACABAHAAIAEAAIAAAVg");
	this.shape_50.setTransform(452,157.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_51.setTransform(441.5,159.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_52.setTransform(421.6,159.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_53.setTransform(409.3,159.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("AAEA4IAAgVIAIAAQABgBABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAgHIAAgnQAAgIgBgBQgDgEgGgBQgFABgEACQgFACgJAGIAAAqQgBAIACABQABACAHAAIADAAIAAAVIhAAAIAAgVIAEAAQAHAAACgBIADgCIAAgGIAAgyIgQAAIAAgVQAUgDARgHIAKAAIAAAPQAMgJAJgCQAIgEAKAAQAKAAAJAEQAHAFAEAHQAEAGAAANIAAAsIABAIIACADIAIAAIAFAAIAAAVg");
	this.shape_54.setTransform(387.8,159.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_55.setTransform(373.5,159.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_56.setTransform(363.1,157.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("AgfA2QgHgDgFgEQgEgEgCgGQgCgGAAgJIAAgsIgBgIIgCgCIgIgBIgGAAIAAgVIA0gBIAABGIAAAKQABACADACQACABAEAAQAFAAAGgCIAMgIIAAgqIAAgHIgDgDIgGgBIgHAAIAAgVIA0gBIAABNIAAAIQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAQABABAGAAIAGAAIAAAVIgwABIAAgNQgKAHgJAEQgJADgKAAQgIAAgGgCg");
	this.shape_57.setTransform(351.5,159.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333333").s().p("AgDBRIAAgWIAEAAIAJgBIACgCQABgBAAgGIAAgYQgJAFgGACQgHACgIAAQgTAAgMgPQgPgRAAgYQAAgQAHgOQAGgNAMgHQALgHANgBQAIABAGACQAIACAKAHIAGgJIAXAAIAAB8QAAAHABABIADADIAIABIAFAAIAAAWgAgPg0QgFAEgCAGQgDAJAAAKQAAAKADAIQACAGAFADQAFAEAEAAIAJgBIAKgGIAAgkQAAgJgCgDQgBgDgFgDQgEgCgFAAQgGAAgFADg");
	this.shape_58.setTransform(337.5,162);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("AAYA2QgGgEgFgGQgLAHgIADQgJADgIAAQgQAAgKgJQgJgJAAgNQgBgHAEgGQADgGAHgFQAGgDAPgEQANgDATgCIAAgIIgBgKQgBgDgDgBQgDgCgEAAIgHABIgEADIgFAHQgDAHgEADQgEADgGAAQgGAAgFgFQgFgEAAgGQAAgIAFgFQAGgIAMgFQANgFAOAAQAPAAALAFQAKAFAFAHQADAHAAAOIAAAmQAAAHABACQABABAAAAQAAABAAAAQABABAAAAQABAAAAABQADABADAAIAIgBIAAAVQgJADgJAAQgJAAgIgDgAgMAMQgFACgDADQgCADAAADQAAAFADADQADADAGAAQAEAAAEgCIAKgGIAAgTQgOACgGADg");
	this.shape_59.setTransform(316.3,159.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("AgFBHQgIgCgFgEQgGgGgCgFQgCgFAAgKIAAgzIgRAAIAAgVQAJgDAGgFQAHgGAEgHQADgHACgMIAUAAIAAAlIAjAAIAAAYIgjAAIAAAkQAAAOABAEQACADADACQAFADAGAAQAMAAALgHIAAAXQgKAFgHABQgIACgJAAQgKAAgHgDg");
	this.shape_60.setTransform(304.5,157.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_61.setTransform(293.5,159.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_62.setTransform(281.2,159.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333333").s().p("AgFBHQgIgCgFgEQgGgGgCgFQgCgFAAgKIAAgzIgRAAIAAgVQAJgDAGgFQAHgGAEgHQADgHACgMIAUAAIAAAlIAjAAIAAAYIgjAAIAAAkQAAAOABAEQACADADACQAFADAGAAQAMAAALgHIAAAXQgKAFgHABQgIACgJAAQgKAAgHgDg");
	this.shape_63.setTransform(269.5,157.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#333333").s().p("AAEA4IAAgVIAJAAQAAgBABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAgHIAAgnQAAgIgCgBQgDgEgFgBQgFABgEACQgGACgIAGIAAAqQAAAIABABQABACAHAAIADAAIAAAVIg/AAIAAgVIACAAQAIAAACgBIADgCIABgGIAAgyIgQAAIAAgVQATgDARgHIAKAAIAAAPQANgJAIgCQAJgEAIAAQALAAAJAEQAHAFAEAHQAEAGAAANIAAAsIAAAIIAEADIAHAAIAFAAIAAAVg");
	this.shape_64.setTransform(257,159.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAOgHQAPgIARAAQASAAAOAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgcAAgQgQgAgKgcQgGADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgGgJQgHgIgKAAQgFAAgFAEg");
	this.shape_65.setTransform(242.2,159.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#333333").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_66.setTransform(228.8,159.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_67.setTransform(208.8,159.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#333333").s().p("AAZA2QgHgEgGgGQgKAHgIADQgJADgJAAQgPAAgKgJQgKgJAAgNQAAgHAEgGQADgGAHgFQAHgDANgEQAOgDATgCIAAgIIgBgKQgCgDgDgBQgCgCgFAAIgGABIgFADIgEAHQgCAHgFADQgEADgFAAQgIAAgEgFQgEgEgBgGQABgIAEgFQAGgIANgFQALgFAQAAQAOAAAKAFQALAFAEAHQAEAHABAOIAAAmQAAAHABACQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQADABAEAAIAIgBIAAAVQgKADgIAAQgLAAgGgDgAgLAMQgGACgCADQgDADAAADQAAAFADADQADADAGAAQADAAAGgCIAJgGIAAgTQgOACgFADg");
	this.shape_68.setTransform(196.6,159.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("AgFBHQgIgCgFgEQgGgGgCgFQgCgFAAgKIAAgzIgRAAIAAgVQAJgDAGgFQAHgGAEgHQADgHACgMIAUAAIAAAlIAjAAIAAAYIgjAAIAAAkQAAAOABAEQACADADACQAFADAGAAQAMAAALgHIAAAXQgKAFgHABQgIACgJAAQgKAAgHgDg");
	this.shape_69.setTransform(184.8,157.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#333333").s().p("AguA4IAAgVIAGAAQAGAAABgBIADgCIAAgIIAAgwIgQAAIAAgVQASgCATgIIAKAAIAAAQQAIgJAHgDQAGgEAGAAQAFAAAFADQAEACACAFQADAEAAAGQAAAGgFAGQgEAGgJAAIgDAAIgIgDIgEgBQgDAAgHAEIAAApQAAAGABABQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIAIABIAFAAIAAAVg");
	this.shape_70.setTransform(175,159.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_71.setTransform(162.9,159.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_72.setTransform(152.5,157.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_73.setTransform(141.9,159.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#333333").s().p("AAYA2QgHgEgEgGQgLAHgIADQgJADgIAAQgQAAgKgJQgJgJAAgNQgBgHAEgGQADgGAHgFQAGgDAOgEQAOgDATgCIAAgIIgBgKQgCgDgCgBQgDgCgEAAIgHABIgFADIgEAHQgDAHgEADQgEADgGAAQgGAAgFgFQgFgEAAgGQAAgIAFgFQAGgIANgFQAMgFAPAAQAOAAALAFQAKAFAEAHQAFAHAAAOIAAAmQAAAHAAACQABABAAAAQAAABAAAAQABABAAAAQABAAAAABQADABADAAIAJgBIAAAVQgKADgIAAQgKAAgIgDgAgLAMQgGACgCADQgDADAAADQAAAFADADQADADAGAAQAEAAAEgCIAKgGIAAgTQgOACgFADg");
	this.shape_74.setTransform(129,159.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_75.setTransform(110.9,157.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("AgNBMQgLgDgLgIIgEALIgRAAIgKg7IAUgFQAHASAQAMQAPAMARAAQAIAAAGgCQAFgCADgDQADgEgBgEQAAgHgGgEQgHgFgPgFIgZgHIgQgGQgJgFgGgEQgFgFgDgHQgEgIAAgJQAAgMAGgKQAIgKANgHQAOgGAQAAQASAAARAKIAEgHIAQAAIAMAzIgUAGQgKgTgNgIQgNgJgOAAQgIAAgGAEQgFAEgBAFQAAAFAGAFQAEAEANAEIAdAIQAYAHAKALQALAMAAAPQAAAUgQAOQgSAPgaAAQgLAAgKgDg");
	this.shape_76.setTransform(99.4,157.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#663300").s().p("AgdANIAAgZIA7AAIAAAZg");
	this.shape_77.setTransform(80.2,159.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#663300").s().p("AgNAPQgHgGAAgJQAAgHAHgGQAFgGAIAAQAJAAAFAGQAGAGABAHQgBAJgGAGQgFAFgJAAQgIAAgFgFg");
	this.shape_78.setTransform(72.4,163.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#663300").s().p("AAnBQIgBgFIhkAAIAAgVQAXgPAigcQAQgNAGgLQAEgIAAgIQAAgKgIgGQgIgHgMAAQgKAAgIAEQgHADgEAHQgEAHAAAHIAAAIIgWACIgBgLQAAgQAIgMQAHgLAQgIQAPgHASAAQARAAAOAGQAOAHAIAKQAHALAAALQAAAMgFAKQgGAMgNAJQgMALgmAXIAkAAQAJAAADgBIAEgDIADgKIABgFIAVAAIgKA4g");
	this.shape_79.setTransform(61.1,157.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_80.setTransform(357.9,116.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#333333").s().p("AAYA2QgHgEgFgGQgLAHgHADQgJADgIAAQgQAAgKgJQgJgJAAgNQAAgHADgGQADgGAHgFQAGgDAPgEQANgDATgCIAAgIIgBgKQgBgDgDgBQgDgCgFAAIgGABIgEADIgFAHQgDAHgEADQgEADgGAAQgGAAgFgFQgFgEABgGQgBgIAFgFQAGgIAMgFQAMgFAPAAQAPAAAKAFQALAFAFAHQADAHAAAOIAAAmQAAAHABACQABABAAAAQAAABAAAAQABABAAAAQABAAABABQACABADAAIAIgBIAAAVQgJADgJAAQgKAAgHgDgAgMAMQgFACgDADQgCADAAADQAAAFADADQADADAGAAQADAAAFgCIAKgGIAAgTQgNACgHADg");
	this.shape_81.setTransform(345.7,116.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("AgFBHQgIgCgFgEQgGgGgCgFQgCgFAAgKIAAgzIgRAAIAAgVQAJgDAGgFQAHgGAEgHQADgHACgMIAUAAIAAAlIAjAAIAAAYIgjAAIAAAkQAAAOABAEQACADADACQAFADAGAAQAMAAALgHIAAAXQgKAFgHABQgIACgJAAQgKAAgHgDg");
	this.shape_82.setTransform(333.9,115.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#333333").s().p("AguA4IAAgVIAGAAQAGAAABgBIADgCIAAgIIAAgwIgQAAIAAgVQASgCATgIIAKAAIAAAQQAIgJAHgDQAGgEAGAAQAFAAAFADQAEACACAFQADAEAAAGQAAAGgFAGQgEAGgJAAIgDAAIgIgDIgEgBQgDAAgHAEIAAApQAAAGABABQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIAIABIAFAAIAAAVg");
	this.shape_83.setTransform(324,116.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#333333").s().p("AAYA2QgHgEgEgGQgLAHgIADQgJADgIAAQgQAAgKgJQgJgJAAgNQgBgHAEgGQADgGAHgFQAGgDAOgEQAOgDATgCIAAgIIgBgKQgCgDgCgBQgDgCgEAAIgHABIgFADIgEAHQgDAHgEADQgEADgGAAQgGAAgFgFQgFgEAAgGQAAgIAFgFQAGgIANgFQAMgFAPAAQAOAAALAFQAKAFAEAHQAFAHAAAOIAAAmQAAAHABACQAAABAAAAQAAABAAAAQABABAAAAQABAAAAABQADABADAAIAJgBIAAAVQgKADgIAAQgKAAgIgDgAgLAMQgGACgDADQgCADAAADQAAAFADADQADADAGAAQAEAAAFgCIAJgGIAAgTQgOACgFADg");
	this.shape_84.setTransform(312.1,116.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#333333").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_85.setTransform(299.1,116.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_86.setTransform(278.4,116.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#333333").s().p("AgnBLQgKgHgIgOQgGgNAAgQQAAgRAHgMQAHgOAKgHQALgHAOAAQAHAAAHACQAFACAIAEIAAgaIgPAAIAAgWQANAAAIgCQAJgDAJgEIAKAAIAAB+QAAAIABACIACACQACABAHAAIAFAAIAAAVIgvABIAAgKQgLAGgGADQgIADgIgBQgMAAgLgGgAgPgEQgFADgDAHQgCAHAAALQAAAPAGAKQAGAGAIAAIAGgBIAMgHIAAgkQAAgHgCgDQgBgDgEgDQgFgDgFAAQgGAAgFAEg");
	this.shape_87.setTransform(264.9,114.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#333333").s().p("AguA4IAAgVIAGAAQAGAAABgBIADgCIAAgIIAAgwIgQAAIAAgVQASgCATgIIAKAAIAAAQQAIgJAHgDQAGgEAGAAQAFAAAFADQAEACACAFQADAEAAAGQAAAGgFAGQgEAGgJAAIgDAAIgIgDIgEgBQgDAAgHAEIAAApQAAAGABABQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIAIABIAFAAIAAAVg");
	this.shape_88.setTransform(245.2,116.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#333333").s().p("AAZA2QgIgEgEgGQgLAHgIADQgJADgJAAQgPAAgKgJQgKgJABgNQAAgHADgGQAEgGAGgFQAGgDAOgEQAOgDATgCIAAgIIgBgKQgBgDgEgBQgCgCgEAAIgHABIgFADIgEAHQgDAHgEADQgEADgGAAQgGAAgFgFQgEgEgBgGQABgIAEgFQAGgIANgFQAMgFAPAAQAOAAALAFQAKAFAEAHQAFAHAAAOIAAAmQAAAHABACQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQADABAEAAIAIgBIAAAVQgKADgIAAQgLAAgGgDgAgLAMQgGACgCADQgDADAAADQAAAFADADQAEADAFAAQAEAAAFgCIAJgGIAAgTQgOACgFADg");
	this.shape_89.setTransform(233.3,116.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#333333").s().p("Ag9BRIAAgWIADAAIAJgBIACgCQACgCAAgGIAAhhIgQAAIAAgVIATgDQAJgCAIgEIALAAIAAAMQAMgIAFgCQAHgCAIAAQATAAAMAOQAOAQAAAZQAAAYgNAQQgNASgYAAQgHAAgFgBIgMgGIAAAVIABAIIADACIAHABIAFAAIAAAWgAgLgtIAAAkQAAAIACACQABAEAEADQAEABAEABQAKAAAFgJQAGgHAAgRQAAgPgFgHQgFgIgHAAQgIAAgLAIg");
	this.shape_90.setTransform(219.4,119.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("AAFA4IAAgVIAIAAQAAgBABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAgHIAAgnQAAgIgBgBQgDgEgGgBQgEABgFACQgFACgKAGIAAAqQABAIABABQACACAFAAIAEAAIAAAVIg/AAIAAgVIADAAQAHAAACgBIADgCIAAgGIAAgyIgPAAIAAgVQATgDARgHIALAAIAAAPQALgJAJgCQAIgEAJAAQALAAAIAEQAJAFADAHQAEAGAAANIAAAsIABAIIACADIAIAAIAGAAIAAAVg");
	this.shape_91.setTransform(197.3,116.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AgfA2QgHgDgFgEQgEgEgCgGQgCgGAAgJIAAgsIgBgIIgCgCIgIgBIgGAAIAAgVIA0gBIAABGIAAAKQABACADACQACABAEAAQAFAAAGgCIAMgIIAAgqIAAgHIgDgDIgGgBIgHAAIAAgVIA0gBIAABNIAAAIQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAQABABAGAAIAGAAIAAAVIgwABIAAgNQgKAHgJAEQgJADgKAAQgIAAgGgCg");
	this.shape_92.setTransform(182,117);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#333333").s().p("AAYA2QgGgEgFgGQgLAHgIADQgJADgIAAQgQAAgKgJQgJgJAAgNQAAgHADgGQADgGAHgFQAGgDAPgEQANgDATgCIAAgIIgBgKQgBgDgDgBQgDgCgEAAIgHABIgEADIgFAHQgDAHgEADQgEADgGAAQgGAAgFgFQgFgEABgGQgBgIAFgFQAGgIAMgFQANgFAOAAQAPAAAKAFQALAFAFAHQADAHAAAOIAAAmQAAAHABACQABABAAAAQAAABAAAAQABABAAAAQABAAABABQACABADAAIAIgBIAAAVQgJADgJAAQgKAAgHgDgAgMAMQgFACgDADQgCADAAADQAAAFADADQADADAGAAQAEAAAEgCIAKgGIAAgTQgNACgHADg");
	this.shape_93.setTransform(160.7,116.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_94.setTransform(147.5,116.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#333333").s().p("AgFBHQgIgCgFgEQgGgGgCgFQgCgFAAgKIAAgzIgRAAIAAgVQAJgDAGgFQAHgGAEgHQADgHACgMIAUAAIAAAlIAjAAIAAAYIgjAAIAAAkQAAAOABAEQACADADACQAFADAGAAQAMAAALgHIAAAXQgKAFgHABQgIACgJAAQgKAAgHgDg");
	this.shape_95.setTransform(135.9,115.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AghBQIAAgVIAEAAQAHAAACgBIADgCIABgIIAAhhIgRAAIAAgVQAUgBATgIIAMAAIAAB/IAAAHQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQACABAHAAIAEAAIAAAVg");
	this.shape_96.setTransform(127.1,114.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAOgHQAPgIARAAQASAAAOAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgcAAgQgQgAgKgcQgGADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgGgJQgHgIgKAAQgFAAgFAEg");
	this.shape_97.setTransform(116.2,116.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#333333").s().p("AgQBMIguh1IgFgJIgEgDIgIgBIAAgVIBIAAIAAAVIgCAAIgJAAQgBAAAAABQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQAAABAAAAQgBABAAAAIADAKIAaBLIAdhNIACgIQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQgCgBgHAAIgFAAIAAgVIA8AAIAAAVQgIAAgCABQgEADgEAKIgtB0g");
	this.shape_98.setTransform(101.1,114.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#663300").s().p("AgdANIAAgZIA7AAIAAAZg");
	this.shape_99.setTransform(81.4,116.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#663300").s().p("AgNAPQgHgGAAgJQAAgHAHgGQAFgGAIAAQAIAAAHAGQAFAGABAHQgBAJgFAGQgHAFgIAAQgIAAgFgFg");
	this.shape_100.setTransform(73.6,120.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#663300").s().p("AguBNIAAgVIAPAAQAJAAACAAIADgEQACgCAAgIIAAhUIgfAAIAAgVIAUgEIAWgFIAMgFIAKAAIAAB3QAAAHABADQAAAAABABQAAAAABABQAAAAABAAQAAABABAAQACACAHgBIAPAAIAAAVg");
	this.shape_101.setTransform(62.9,114.6);

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

	this.instance_1 = new lib.huertajpgcopia();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.4,55.9,0.935,0.82,0,0,-57.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.935,skewY:-57.599999999999994,x:26.4,y:55.9}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.835,skewY:-18.6,x:4.2,y:15.8}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.86,skewY:0,x:-1.1,y:-4.6}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:65.8},1).to({_off:true,scaleX:0.94,scaleY:0.82,skewY:-57.6,x:26.4,y:55.9},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-2,132,165);


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

	this.instance_1 = new lib.huertajpgcopia();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.4,55.9,0.935,0.82,0,0,-57.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.935,skewY:-57.599999999999994,x:26.4,y:55.9}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.835,skewY:-18.6,x:4.2,y:15.8}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.86,skewY:0,x:-1.1,y:-4.6}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:65.8},1).to({_off:true,scaleX:0.94,scaleY:0.82,skewY:-57.6,x:26.4,y:55.9},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-2,132,165);


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

	this.instance_1 = new lib.hidalgo1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33,50.4,0.863,0.82,0,0,-54.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.863,skewY:-54.8,x:33,y:50.4}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.836,skewY:-24.1,x:6.3,y:20.4}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.86,skewY:0,x:-1.1,y:-5.8}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:68.7,y:75.3},1).to({_off:true,scaleX:0.86,scaleY:0.82,skewY:-54.8,x:33,y:50.4},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-2,132,165);


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

	this.instance_1 = new lib.hidalgo1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33,50.4,0.863,0.82,0,0,-54.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.863,skewY:-54.8,x:33,y:50.4}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.836,skewY:-24.1,x:6.3,y:20.4}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.86,skewY:0,x:-1.1,y:-5.8}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,skewY:60,x:68.7,y:75.3},1).to({_off:true,scaleX:0.86,scaleY:0.82,skewY:-54.8,x:33,y:50.4},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-2,132,165);


(lib.espantosax = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.x18 = new lib.x();
	this.x18.parent = this;
	this.x18.setTransform(66.5,99.1,1,1,0,0,0,18.9,20.3);

	this.x17 = new lib.x();
	this.x17.parent = this;
	this.x17.setTransform(33.2,99.1,1,1,0,0,0,18.9,20.3);

	this.x16 = new lib.x();
	this.x16.parent = this;
	this.x16.setTransform(-1,99.1,1,1,0,0,0,18.9,20.3);

	this.x15 = new lib.x();
	this.x15.parent = this;
	this.x15.setTransform(196.1,69.1,1,1,0,0,0,18.9,20.3);

	this.x14 = new lib.x();
	this.x14.parent = this;
	this.x14.setTransform(163.9,69.1,1,1,0,0,0,18.9,20.3);

	this.x13 = new lib.x();
	this.x13.parent = this;
	this.x13.setTransform(129.9,69.1,1,1,0,0,0,18.9,20.3);

	this.x12 = new lib.x();
	this.x12.parent = this;
	this.x12.setTransform(96.4,69.1,1,1,0,0,0,18.9,20.3);

	this.x11 = new lib.x();
	this.x11.parent = this;
	this.x11.setTransform(63.7,69.1,1,1,0,0,0,18.9,20.3);

	this.x10 = new lib.x();
	this.x10.parent = this;
	this.x10.setTransform(32.3,68,1,1,0,0,0,18.9,20.3);

	this.x9 = new lib.x();
	this.x9.parent = this;
	this.x9.setTransform(0.1,68,1,1,0,0,0,18.9,20.3);

	this.x8 = new lib.x();
	this.x8.parent = this;
	this.x8.setTransform(234,37.9,1,1,0,0,0,18.9,20.3);

	this.x7 = new lib.x();
	this.x7.parent = this;
	this.x7.setTransform(200.6,37.9,1,1,0,0,0,18.9,20.3);

	this.x6 = new lib.x();
	this.x6.parent = this;
	this.x6.setTransform(167.8,37.9,1,1,0,0,0,18.9,20.3);

	this.x5 = new lib.x();
	this.x5.parent = this;
	this.x5.setTransform(132,37.9,1,1,0,0,0,18.9,20.3);

	this.x4 = new lib.x();
	this.x4.parent = this;
	this.x4.setTransform(99.9,37.9,1,1,0,0,0,18.9,20.3);

	this.x3 = new lib.x();
	this.x3.parent = this;
	this.x3.setTransform(65.1,37.9,1,1,0,0,0,18.9,20.3);

	this.x2 = new lib.x();
	this.x2.parent = this;
	this.x2.setTransform(32.4,37.9,1,1,0,0,0,18.9,20.3);

	this.x1 = new lib.x();
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
	this.estre3.parent = this;
	this.estre3.setTransform(37.5,1.3);

	this.estre2 = new lib.estre2();
	this.estre2.parent = this;
	this.estre2.setTransform(18.8,0.8);

	this.estre1 = new lib.estre1();
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
			window.open("memomexlvl2.html", "_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa 1
	this.instance = new lib.achivements();
	this.instance.parent = this;
	this.instance.setTransform(93.7,303.5,3.12,3.12,0,0,0,28.4,9.3);

	this.nextlevel = new lib._50();
	this.nextlevel.parent = this;
	this.nextlevel.setTransform(279.2,319.4,1,1,0,0,0,33.4,25.3);
	new cjs.ButtonHelper(this.nextlevel, 0, 1, 2, false, new lib._50(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape.setTransform(323.1,259.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_1.setTransform(310.7,259.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AghBQIAAgVIAEAAQAHAAACgBIACgCQACgCAAgGIAAhhIgRAAIAAgVQAUgBATgIIALAAIAAB/IABAHQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQACABAHAAIAEAAIAAAVg");
	this.shape_2.setTransform(300.6,256.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_3.setTransform(292.8,256.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_4.setTransform(282.2,259.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AghBSIAAgVIAGAAIAIAAIACgCIABgGIAAg0IgRAAIAAgUIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgegzIAYgVQAJgJAIAAQAHAAAFAEQAEAFAAAHQAAAFgEAFQgEAFgKACIgiAIg");
	this.shape_5.setTransform(271.7,256.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgwBQIAAgVIAFAAQAHAAABgBIACgCIABgIIAAg1IgQAAIAAgXIAQAAIAAgLQAAgMAEgIQAFgJALgGQAMgFAOAAQAQAAAKAHQAJAHAAAIQAAAHgEAEQgEAEgHAAIgGgBIgEgCIgGgGIgFgEIgDgBQgEAAgCADQgCADAAALIAAALIASAAIAAAXIgSAAIAAA1IAAAIIADACIAHABIAGAAIAAAVg");
	this.shape_6.setTransform(264.8,256.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCQABgCAAgEIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_7.setTransform(255.1,256.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgnBLQgLgHgGgNQgHgOAAgRQAAgQAHgNQAHgNALgHQAKgHAOAAQAHAAAHACQAFACAIAEIAAgaIgPAAIAAgVQAMgCAJgCQAIgCAKgDIAKAAIAAB+QAAAHABACIADACQABABAHAAIAFAAIAAAVIgvACIAAgMQgLAIgGACQgIACgIABQgMgBgLgGgAgPgEQgEAEgEAFQgDAIAAALQABAPAGAJQAGAIAIAAIAGgBIAMgIIAAgkQAAgHgCgCQAAgDgFgEQgFgDgEAAQgGAAgGAEg");
	this.shape_8.setTransform(244,256.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_9.setTransform(394.8,226.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AAZA2QgIgEgFgGQgKAHgIADQgJADgJAAQgPAAgKgJQgKgJAAgNQAAgHAEgGQAEgGAGgFQAHgDANgEQAOgDATgCIAAgIIgBgKQgBgDgEgBQgCgCgFAAIgGABIgFADIgEAHQgCAHgFADQgEADgFAAQgIAAgEgFQgEgEgBgGQABgIAEgFQAGgIANgFQAMgFAPAAQAOAAALAFQAKAFAEAHQAEAHABAOIAAAmQAAAHABACQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQADABAEAAIAIgBIAAAVQgKADgIAAQgLAAgGgDgAgLAMQgGACgCADQgDADAAADQAAAFADADQAEADAFAAQAEAAAFgCIAJgGIAAgTQgOACgFADg");
	this.shape_10.setTransform(382.6,226.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AAoA4IAAgVQAHAAABgBIADgCQABgCAAgFIAAgnQAAgHgBgCIgDgEQgDgCgEAAQgEAAgFADQgFACgKAGIAAApQAAAHABABQAAABABAAQAAABAAAAQABAAAAABQABAAAAAAQACABAHAAIAAAVIg7AAIAAgVQAHAAACgBIADgDIAAgIIAAgkQAAgIgBgDQgDgFgGAAIgGABQgEABgDACIgJAFIgCACIAAApIAAAIIADADIAGABIADAAIAAAVIg/AAIAAgVIAEAAQAHAAABgBQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBQABgBAAgHIAAgvIgQAAIAAgWQAUgCARgHIAKAAIAAAPQAJgHAKgEQAKgEAKAAQAHAAAGACQAFACAEADQAEADADAFQAKgHAKgEQAKgEAKAAQAJAAAHAEQAHADAEAFQAFAGABAFIABAMIAAAsQAAAGABABQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQABABAHAAIAEAAIAAAVg");
	this.shape_11.setTransform(364.9,226.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_12.setTransform(332.5,226.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_13.setTransform(320.2,226.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgaBmQgHgDgEgGQgEgFAAgGQAAgGAEgEQAFgEAGAAQAFAAADACQAFADAFAGQADAEADAAQACAAADgDQACgDAAgIIAAheIgQAAIAAgVQALAAAKgDQAKgCAKgFIAKAAIAAB0QAAARgFAIQgFAJgLAGQgLAFgPAAQgKAAgJgDgAAIhGQgGgGAAgIQAAgJAGgFQAGgGAIAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgGgGg");
	this.shape_14.setTransform(308.1,226.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AAZA2QgHgEgGgGQgLAHgHADQgJADgJAAQgPAAgKgJQgKgJAAgNQAAgHAEgGQADgGAHgFQAHgDANgEQAOgDATgCIAAgIIgBgKQgCgDgDgBQgCgCgFAAIgGABIgFADIgEAHQgCAHgFADQgEADgFAAQgIAAgEgFQgEgEgBgGQABgIAEgFQAGgIANgFQALgFAQAAQAOAAAKAFQALAFAEAHQAEAHABAOIAAAmQAAAHABACQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQADABAEAAIAIgBIAAAVQgKADgIAAQgLAAgGgDgAgLAMQgGACgCADQgDADAAADQAAAFADADQADADAGAAQADAAAGgCIAJgGIAAgTQgOACgFADg");
	this.shape_15.setTransform(299.7,226.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AAFA4IAAgVIAIgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAgHIAAgmQAAgJgCgBQgDgFgFAAQgFAAgEADQgGACgJAGIAAAqQAAAIACABQABACAGAAIAEAAIAAAVIg/AAIAAgVIACAAQAIAAACgBIADgCIABgHIAAgxIgQAAIAAgWQATgCARgHIALAAIAAAPQAMgJAIgCQAJgEAIAAQALAAAIAFQAJAEADAHQAEAGAAANIAAAsIAAAIIAEACIAHABIAGAAIAAAVg");
	this.shape_16.setTransform(285.7,226.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAOgHQAPgIARAAQASAAAOAHQAOAIAIAMQAHANAAAQQAAAZgQAQQgRAQgcAAQgbAAgRgQgAgKgcQgGADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgGgJQgHgIgKAAQgFAAgFAEg");
	this.shape_17.setTransform(270.9,226.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_18.setTransform(258.1,226.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AguA4IAAgVIAGAAQAGAAABgBIADgCIAAgIIAAgwIgQAAIAAgWQASAAATgJIAKAAIAAAQQAIgJAHgDQAGgEAGAAQAFAAAFADQAEACACAEQADAFAAAGQAAAGgFAGQgEAGgJAAIgDAAIgIgDIgEgBQgDAAgHAEIAAApQAAAGABABQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIAIABIAFAAIAAAVg");
	this.shape_19.setTransform(247.6,226.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_20.setTransform(235.5,226.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("Ag9BRIAAgWIADAAIAJgBIADgCIABgIIAAhhIgQAAIAAgVIATgDQAJgDAIgDIAKAAIAAAMQANgIAFgCQAHgDAIABQATAAAMAOQAOAQAAAZQgBAYgMAQQgNASgYAAQgHAAgFgCIgLgFIAAAVIAAAIIADACIAHABIAFAAIAAAWgAgKgtIAAAkQAAAIABADQABADAEADQAEACAEAAQAKAAAFgIQAGgIAAgRQAAgPgFgHQgFgIgHAAQgIAAgKAIg");
	this.shape_21.setTransform(221.7,228.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AAFA4IAAgVIAIgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAgHIAAgmQAAgJgCgBQgCgFgGAAQgFAAgEADQgFACgKAGIAAAqQAAAIACABQACACAFAAIAEAAIAAAVIg/AAIAAgVIADAAQAHAAACgBIADgCIAAgHIAAgxIgPAAIAAgWQATgCARgHIALAAIAAAPQAMgJAIgCQAJgEAIAAQALAAAIAFQAJAEADAHQAEAGAAANIAAAsIAAAIIADACIAIABIAGAAIAAAVg");
	this.shape_22.setTransform(199.6,226.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAPgHQAOgIARAAQATAAANAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgbAAgRgQgAgLgcQgFADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgHgJQgGgIgKAAQgFAAgGAEg");
	this.shape_23.setTransform(184.9,226.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_24.setTransform(171.5,226.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AAnBQIgBgFIhkAAIAAgVQAXgPAigcQAQgNAGgLQAEgIAAgIQAAgKgIgGQgIgHgMAAQgKAAgIAEQgHADgEAHQgEAHAAAHIAAAIIgWACIgBgLQAAgQAIgMQAHgLAQgIQAPgHASAAQARAAAOAGQAOAHAIAKQAHALAAALQAAAMgFAKQgGAMgNAJQgMALgmAXIAkAAQAJAAADgBIAEgDIADgKIABgFIAVAAIgKA4g");
	this.shape_25.setTransform(412.6,197);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AghBQIAAgVIAEAAQAHAAACgBIACgCIABgIIAAhhIgQAAIAAgVQAUgBATgIIALAAIAAB/IABAHQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQACABAHAAIAEAAIAAAVg");
	this.shape_26.setTransform(394,196.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_27.setTransform(383.5,199);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgOA2IglhQIgEgEIgDgCIgIgBIAAgVIBCAAIAAAVIgDAAQgGAAgCACQAAAAAAAAQgBABAAAAQAAABAAAAQgBAAAAABIABAFIAQApIATgpIABgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQgCgCgGAAIgGAAIAAgVIA7AAIAAAVIgJABIgDADIgFAGIgkBNg");
	this.shape_28.setTransform(370.4,199.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_29.setTransform(359.7,196.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AAEA4IAAgVIAIgBQABAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgCAAgGIAAgmQAAgJgBgBQgDgFgGAAQgFAAgEACQgFADgJAGIAAAqQgBAIACABQABACAHAAIADAAIAAAVIhAAAIAAgVIAEAAQAHAAACgBIADgCIAAgHIAAgxIgQAAIAAgWQAUgCARgHIAKAAIAAAPQAMgIAJgDQAIgEAKAAQAKAAAJAFQAHAEAEAHQAEAGAAANIAAAsIABAIIACACIAIABIAFAAIAAAVg");
	this.shape_30.setTransform(348.2,198.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AghBQIAAgVIAEAAQAHAAACgBIADgCIABgIIAAhhIgRAAIAAgVQAUgBATgIIAMAAIAAB/IAAAHQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQACABAHAAIAEAAIAAAVg");
	this.shape_31.setTransform(329.1,196.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_32.setTransform(318.6,199);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AAYA2QgHgEgFgGQgLAHgHADQgJADgJAAQgPAAgKgJQgKgJAAgNQABgHADgGQAEgGAGgFQAHgDAOgEQANgDATgCIAAgIIgBgKQgCgDgCgBQgDgCgFAAIgGABIgEADIgFAHQgDAHgEADQgEADgFAAQgIAAgEgFQgFgEABgGQgBgIAFgFQAGgIAMgFQAMgFAPAAQAPAAAKAFQALAFAFAHQADAHAAAOIAAAmQAAAHABACQABABAAAAQAAABAAAAQABABAAAAQABAAABABQACABADAAIAIgBIAAAVQgJADgJAAQgJAAgIgDgAgMAMQgFACgDADQgCADAAADQAAAFADADQAEADAFAAQADAAAFgCIAKgGIAAgTQgNACgHADg");
	this.shape_33.setTransform(298.1,199);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AguA4IAAgVIAGAAQAGAAABgBIADgCIAAgIIAAgwIgQAAIAAgWQASgBATgIIAKAAIAAAQQAIgJAHgDQAGgEAGAAQAFAAAFADQAEACACAEQADAGAAAEQAAAIgFAFQgEAGgJgBIgDAAIgIgCIgEgBQgDAAgHAEIAAApQAAAGABACQAAAAABAAQAAABAAAAQAAAAABABQAAAAABAAIAIABIAFAAIAAAVg");
	this.shape_34.setTransform(286.8,198.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAIgMAOgHQAOgIARAAQASAAAOAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgbAAgRgQgAgKgcQgGADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgGgJQgHgIgKAAQgFAAgFAEg");
	this.shape_35.setTransform(274.2,199);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AAEBQIAAgVIAEAAIAGgBIADgCIAAgIIAAgmQAAgHgBgCIgDgEQgCgBgEAAQgFAAgFACQgFACgIAFIAAArIAAAIIADACIAHABIACAAIAAAVIhAAAIAAgVIAHAAQAFAAABgBIADgCIAAgHIAAhiIgQAAIAAgVQAKgBALgCQALgDAJgDIALAAIAAA8QAKgGAIgDQAIgDAIAAQAKAAAIAFQAIAEAEAHQAEAHAAAKIAAAtIABAJQAAAAAAABQAAAAABAAQAAABABAAQAAAAABABIAIAAIAFAAIAAAVg");
	this.shape_36.setTransform(259.8,196.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AAYA2QgGgEgFgGQgLAHgIADQgJADgIAAQgQAAgKgJQgJgJAAgNQAAgHADgGQADgGAHgFQAGgDAPgEQANgDATgCIAAgIIgBgKQgBgDgDgBQgDgCgEAAIgHABIgEADIgFAHQgDAHgEADQgEADgGAAQgGAAgFgFQgFgEABgGQgBgIAFgFQAGgIAMgFQANgFAOAAQAPAAAKAFQALAFAFAHQADAHAAAOIAAAmQAAAHABACQABABAAAAQAAABAAAAQABABAAAAQABAAABABQACABADAAIAIgBIAAAVQgJADgJAAQgKAAgHgDgAgMAMQgFACgDADQgCADAAADQAAAFADADQADADAGAAQAEAAAEgCIAKgGIAAgTQgNACgHADg");
	this.shape_37.setTransform(245.7,199);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AAYA2QgHgEgFgGQgLAHgHADQgJADgIAAQgQAAgKgJQgKgJAAgNQABgHADgGQAEgGAGgFQAGgDAPgEQANgDATgCIAAgIIgBgKQgBgDgDgBQgDgCgEAAIgHABIgEADIgFAHQgDAHgEADQgEADgGAAQgGAAgFgFQgFgEABgGQgBgIAFgFQAGgIAMgFQAMgFAPAAQAPAAAKAFQALAFAFAHQADAHAAAOIAAAmQAAAHABACQABABAAAAQAAABAAAAQABABAAAAQABAAABABQACABADAAIAIgBIAAAVQgJADgJAAQgKAAgHgDgAgMAMQgFACgDADQgCADAAADQAAAFADADQADADAGAAQADAAAFgCIAKgGIAAgTQgNACgHADg");
	this.shape_38.setTransform(225.1,199);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AgFBHQgIgCgFgFQgGgFgCgFQgCgFAAgLIAAgyIgRAAIAAgWQAJgCAGgGQAHgFAEgHQADgIACgLIAUAAIAAAlIAjAAIAAAYIgjAAIAAAlQAAAMABAFQACADADACQAFADAGAAQAMAAALgHIAAAXQgKAEgHACQgIACgJAAQgKAAgHgDg");
	this.shape_39.setTransform(213.3,197.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AAFA4IAAgVIAHgBQABAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgCAAgGIAAgmQAAgJgBgBQgDgFgGAAQgEAAgFACQgFADgKAGIAAAqQABAIABABQACACAFAAIAEAAIAAAVIhAAAIAAgVIAEAAQAHAAACgBIADgCIAAgHIAAgxIgQAAIAAgWQAUgCARgHIALAAIAAAPQALgIAJgDQAIgEAKAAQAKAAAIAFQAJAEADAHQAEAGAAANIAAAsIABAIIACACIAIABIAGAAIAAAVg");
	this.shape_40.setTransform(200.8,198.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_41.setTransform(186.4,199);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AgFBHQgIgCgFgFQgGgFgCgFQgCgFAAgLIAAgyIgRAAIAAgWQAJgCAGgGQAHgFAEgHQADgIACgLIAUAAIAAAlIAjAAIAAAYIgjAAIAAAlQAAAMABAFQACADADACQAFADAGAAQAMAAALgHIAAAXQgKAEgHACQgIACgJAAQgKAAgHgDg");
	this.shape_42.setTransform(174.8,197.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AAEA4IAAgVIAIgBQABAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgCAAgGIAAgmQAAgJgCgBQgDgFgFAAQgEAAgFACQgGADgIAGIAAAqQgBAIACABQACACAGAAIADAAIAAAVIhAAAIAAgVIADAAQAIAAACgBIADgCIABgHIAAgxIgRAAIAAgWQAUgCARgHIAKAAIAAAPQAMgIAJgDQAIgEAKAAQAKAAAJAFQAHAEAEAHQAEAGAAANIAAAsIABAIIADACIAHABIAFAAIAAAVg");
	this.shape_43.setTransform(162.2,198.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AgkBMIAAgVIAGAAQAGAAACgBIADgDIABgIIAAhUQAAgHgBgCQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAQgBgBgGAAIgHAAIAAgVIBJAAIAAAVIgHAAIgHABQgBAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQgBACAAAHIAABTQAAAHABACQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAABQADABAEAAIAIAAIAAAVg");
	this.shape_44.setTransform(149.9,196.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#663300").s().p("AgTBnIAAgnIAnAAIAAAngAgKAyIgKhoIAAgwIApAAIAAAwIgKBog");
	this.shape_45.setTransform(401.9,165.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#663300").s().p("AgvBMIAAiUIAkAAIAAAVQAKgPAGgFQAIgEAJAAQAOAAAMAHIgMAiQgKgGgIAAQgJAAgFAFQgFAEgDAMQgEAMAAAlIAAAug");
	this.shape_46.setTransform(392.7,168.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#663300").s().p("Ag4BCQgNgNAAgUQAAgMAGgKQAGgKALgEQAKgFAVgEQAbgFALgFIAAgEQAAgMgGgEQgFgFgPAAQgLAAgFAEQgHAEgDAKIgkgGQAGgVAOgLQAQgKAdAAQAZAAANAGQANAGAFAKQAFAJABAaIgBAtQAAAUACAJQACAKAFALIgnAAIgEgMIgBgFQgLAKgLAFQgKAFgNAAQgYAAgNgMgAAAAJQgRAEgFACQgIAGABAJQAAAIAFAGQAHAGAJAAQAKAAAJgHQAIgFACgIQACgFAAgPIAAgHIgXAGg");
	this.shape_47.setTransform(378.1,168.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#663300").s().p("AgzBdQgQgNAAgTIAAgFIAtAGQACAHAEADQAFAFALgBQAQAAAIgEQAFgEACgGQACgFAAgNIAAgWQgRAYgaAAQgfAAgRgaQgOgTAAgdQAAgmASgUQASgUAbAAQAbAAASAZIAAgWIAlAAIAACFQAAAbgFANQgEANgIAHQgIAIgNAEQgNAFgUAAQglgBgQgNgAgWhAQgJAKAAAXQAAAYAJAKQAJALANAAQAOAAAKgLQAKgKAAgXQAAgXgKgLQgJgMgPAAQgNAAgJAMg");
	this.shape_48.setTransform(360.9,171.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#663300").s().p("AgsBGQgMgHgGgMQgFgMAAgVIAAheIAoAAIAABFQAAAfACAHQACAHAGAEQAFAEAJAAQAJAAAIgFQAIgGADgIQADgIAAggIAAg/IAoAAIAACVIglAAIAAgWQgIALgNAIQgNAGgOAAQgPABgMgHg");
	this.shape_49.setTransform(343.6,168.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#663300").s().p("AgVCEIgOgDIAGgiIAGABIAEABQAGAAAEgDQAEgDABgDQACgEAAgSIAAiOIAmAAIAACQQAAAdgEALQgDAMgLAHQgLAGgPAAIgNgBgAgChgIAAgkIAmAAIAAAkg");
	this.shape_50.setTransform(329.1,168.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#663300").s().p("AgvBMIAAiUIAkAAIAAAVQAKgPAGgFQAIgEAJAAQAOAAAMAHIgMAiQgKgGgIAAQgJAAgFAFQgFAEgDAMQgEAMAAAlIAAAug");
	this.shape_51.setTransform(314.3,168.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#663300").s().p("AgmBFQgTgKgJgRQgKgSAAgZQAAgUAKgSQAJgTATgJQARgKAVAAQAiAAAVAWQAWAWAAAhQAAAigWAVQgVAXgiAAQgTAAgTgJgAgZghQgLALAAAWQAAAWALAMQAKALAPAAQAQAAAKgLQAKgMAAgWQAAgVgKgMQgKgMgQAAQgPAAgKAMg");
	this.shape_52.setTransform(298.9,168.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#663300").s().p("AhIBpIAAjOIAlAAIAAAWQAHgLANgHQAMgHAOAAQAaAAASAUQASAVAAAkQAAAlgSAUQgTAVgaAAQgLAAgKgFQgKgFgLgMIAABMgAgXg9QgKALAAAWQAAAZAKALQAKAMAOAAQANAAAKgLQAJgKAAgZQAAgYgKgLQgJgMgOAAQgNAAgKAMg");
	this.shape_53.setTransform(281.6,171.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#663300").s().p("AgtBCQgSgNgGgVIAogGQADAMAHAFQAIAHANAAQAPAAAIgHQAFgDAAgHQAAgFgCgDQgDgCgLgCQgvgLgMgJQgSgLAAgVQAAgUAPgNQAQgNAgAAQAdAAAPAKQAPAKAGATIglAHQgDgIgGgFQgHgFgMAAQgPAAgHAEQgEADAAAFQAAAFAEADQAFADAfAIQAfAHANAKQAMAKAAATQAAAUgRAPQgRAPgiAAQgdAAgSgMg");
	this.shape_54.setTransform(256,168.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#663300").s().p("Ag4BCQgNgNAAgUQAAgMAGgKQAGgKALgEQAKgFAVgEQAbgFALgFIAAgEQAAgMgGgEQgFgFgPAAQgLAAgFAEQgHAEgDAKIgkgGQAGgVAPgLQAPgKAdAAQAZAAANAGQANAGAFAKQAFAJABAaIgBAtQAAAUACAJQACAKAFALIgnAAIgEgMIgBgFQgLAKgLAFQgKAFgNAAQgYAAgNgMgAAAAJQgRAEgFACQgIAGABAJQAAAIAFAGQAHAGAJAAQAKAAAJgHQAIgFACgIQACgFAAgPIAAgHIgXAGg");
	this.shape_55.setTransform(240.4,168.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#663300").s().p("AgTBnIAAiVIAnAAIAACVgAgThCIAAgkIAnAAIAAAkg");
	this.shape_56.setTransform(228.3,165.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#663300").s().p("AgyA5QgTgVAAgkQAAgkATgUQAUgVAgAAQAbAAARAMQAQAMAGAYIgmAHQgDgMgGgGQgIgGgKAAQgPAAgIAKQgJAKAAAYQAAAZAJALQAJALAOAAQALAAAHgFQAIgHACgQIAnAHQgFAagSAOQgRAOgdAAQgfAAgUgVg");
	this.shape_57.setTransform(216.6,168.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#663300").s().p("Ag4BCQgNgNAAgUQAAgMAGgKQAGgKALgEQAKgFAVgEQAbgFALgFIAAgEQAAgMgGgEQgFgFgPAAQgLAAgFAEQgHAEgDAKIgkgGQAGgVAOgLQAQgKAdAAQAZAAANAGQANAGAFAKQAFAJABAaIgBAtQAAAUACAJQACAKAFALIgnAAIgEgMIgBgFQgLAKgLAFQgKAFgNAAQgYAAgNgMgAAAAJQgRAEgFACQgIAGABAJQAAAIAFAGQAHAGAJAAQAKAAAJgHQAIgFACgIQACgFAAgPIAAgHIgXAGg");
	this.shape_58.setTransform(200.3,168.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#663300").s().p("AgvBMIAAiUIAkAAIAAAVQAKgPAGgFQAIgEAJAAQAOAAAMAHIgMAiQgKgGgIAAQgJAAgFAFQgFAEgDAMQgEAMAAAlIAAAug");
	this.shape_59.setTransform(187.8,168.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#663300").s().p("AgvBdQgYgOgMgZQgMgZAAgdQAAggANgZQAOgZAagNQATgLAdABQAmgBAWARQAVAQAHAcIgqAHQgEgOgMgJQgMgJgSAAQgaAAgQARQgRARAAAiQAAAkARASQAQATAZAAQAOAAANgFQANgGAJgGIAAgbIgvAAIAAghIBZAAIAABRQgNAMgZAKQgYAKgagBQgfAAgYgNg");
	this.shape_60.setTransform(169.7,165.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("AgOAPQgFgGAAgJQAAgHAFgGQAHgGAHAAQAJAAAFAGQAHAGgBAHQABAJgHAGQgFAFgJAAQgHAAgHgFg");
	this.shape_61.setTransform(390.5,141.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAPgHQAOgIARAAQATAAANAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgbAAgRgQgAgLgcQgFADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgHgJQgGgIgKAAQgFAAgGAEg");
	this.shape_62.setTransform(379.7,138);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333333").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_63.setTransform(366.4,138);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_64.setTransform(355.9,135.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333333").s().p("AgBA2IAAgVIADAAIAGAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIgDgGIgOgSIgNARIgEAIQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAABABQABAAAEAAIAFAAIAAAVIg2AAIAAgVIAIAAIAFgCIAGgHIAYgbIgUgXIgHgFQgEgBgGAAIAAgWIBBAAIAAAWQgEAAgCABQAAAAAAAAQgBAAAAAAQAAABAAAAQAAABAAAAIADAGIAIANIAKgNQADgEAAgDQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgIAAIAAgWIAzAAIAAAWQgHAAgDABQgDABgEAEIgVAZIAXAYQAGAHADACQAEABAHAAIAAAVg");
	this.shape_65.setTransform(345,138.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#333333").s().p("AgnBDQgRgRAAgYQAAgQAHgMQAIgNAOgIQANgHAQAAQALAAAJAEQAJACAHAHQAHAFAEAJQAEAHABAJIABAOIhJAAQABAOAIAJQAIAJAKgBQAHABAJgFQAJgEAIgKIAPAPQgNAQgNAGQgOAGgPAAQgYAAgRgQgAgGgHQgEADgCAEQgDADgBAGIAkAAQgBgGgCgDQgCgEgEgDQgEgBgFAAQgDAAgFABgAgcg0IAXgVQAKgJAIAAQAHgBAEAFQAFAFAAAHQAAAFgEAFQgEAEgKADIgjAHg");
	this.shape_66.setTransform(331.8,135.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#333333").s().p("AAXBMIAAgVIAGAAQAGAAACgBQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBIABgHIAAhdIgmB9IgUAAIgkh5IAABcQAAADACACIADACIAHABIAHAAIAAAVIg/AAIAAgVIAHAAIAHgBQABAAAAAAQABgBAAAAQABgBAAAAQABgBAAAAIABgIIAAhVIgBgIQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAIgGgBIgJAAIAAgVIBFAAIAbBcIAahcIBHAAIAAAVIgIAAQgGAAgCACQgDADAAAHIAABWIABAHIADADQACABAEAAIAJAAIAAAVg");
	this.shape_67.setTransform(314.7,135.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_68.setTransform(290.1,138);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("AgnBLQgLgHgGgOQgHgNAAgQQAAgRAHgMQAHgOALgHQAKgHAOAAQAHAAAHACQAFACAIAEIAAgaIgPAAIAAgWQAMgBAJgBQAIgDAKgEIAKAAIAAB+QAAAIABACIADACQABABAHAAIAFAAIAAAVIgvABIAAgKQgLAGgGADQgIADgIgBQgMAAgLgGgAgPgEQgEADgEAHQgDAHAAALQABAPAGAKQAGAGAIAAIAGgBIAMgHIAAgkQAAgHgCgDQgBgDgEgDQgFgDgFAAQgFAAgGAEg");
	this.shape_69.setTransform(276.7,135.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#333333").s().p("AAZA2QgIgEgEgGQgLAHgIADQgJADgJAAQgPAAgKgJQgKgJABgNQAAgHADgGQAEgGAGgFQAGgDAOgEQAOgDATgCIAAgIIgBgKQgBgDgEgBQgCgCgEAAIgHABIgFADIgEAHQgDAHgEADQgEADgFAAQgHAAgFgFQgEgEgBgGQABgIAEgFQAGgIANgFQAMgFAPAAQAOAAALAFQAKAFAEAHQAFAHAAAOIAAAmQAAAHABACQAAABAAAAQAAABAAAAQABABAAAAQABAAAAABQADABAEAAIAIgBIAAAVQgKADgIAAQgLAAgGgDgAgLAMQgGACgCADQgDADAAADQAAAFADADQAEADAFAAQAEAAAFgCIAJgGIAAgTQgOACgFADg");
	this.shape_70.setTransform(255.3,138);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_71.setTransform(244.8,135.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AguA4IAAgVIAGAAQAGAAABgBIADgCIAAgIIAAgwIgQAAIAAgVQASgCATgIIAKAAIAAAQQAIgJAHgDQAGgEAGAAQAFAAAFADQAEACACAFQADAEAAAGQAAAGgFAGQgEAGgJAAIgDAAIgIgDIgEgBQgDAAgHAEIAAApQAAAGABABQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIAIABIAFAAIAAAVg");
	this.shape_72.setTransform(235.9,137.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAPgHQAOgIARAAQATAAANAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgbAAgRgQgAgKgcQgGADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgGgJQgHgIgKAAQgFAAgFAEg");
	this.shape_73.setTransform(223.4,138);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#333333").s().p("AgFBHQgIgCgFgEQgGgGgCgFQgCgFAAgKIAAgzIgRAAIAAgVQAJgDAGgFQAHgGAEgHQADgHACgMIAUAAIAAAlIAjAAIAAAYIgjAAIAAAkQAAAOABADQACAEADACQAFADAGAAQAMAAALgHIAAAXQgKAFgHABQgIACgJAAQgKAAgHgDg");
	this.shape_74.setTransform(211.3,136.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_75.setTransform(200.3,138);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_76.setTransform(190.6,135.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AAEBQIAAgVIAEAAIAGgBIADgCIAAgIIAAgmQAAgHgBgCIgDgEQgCgBgEAAQgFAAgFACQgFACgIAFIAAArIAAAIIADACIAHABIACAAIAAAVIhAAAIAAgVIAHAAQAFAAABgBIADgCIAAgHIAAhiIgQAAIAAgVQAKgBALgCQALgDAJgDIALAAIAAA8QAKgGAIgDQAIgDAIAAQAKAAAIAFQAIAEAEAHQAEAHAAAKIAAAtIABAJQAAAAAAABQAAAAABAAQAAABABAAQAAABABAAIAIAAIAFAAIAAAVg");
	this.shape_77.setTransform(178.9,135.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#333333").s().p("AAZA2QgHgEgGgGQgLAHgHADQgJADgJAAQgPAAgKgJQgKgJAAgNQABgHADgGQADgGAHgFQAHgDAOgEQANgDATgCIAAgIIgBgKQgCgDgDgBQgCgCgFAAIgGABIgEADIgFAHQgCAHgFADQgEADgFAAQgIAAgEgFQgEgEAAgGQAAgIAEgFQAGgIAMgFQAMgFAPAAQAPAAAKAFQALAFAEAHQAEAHAAAOIAAAmQAAAHACACQAAABAAAAQAAABABAAQAAABAAAAQABAAABABQACABAEAAIAHgBIAAAVQgJADgJAAQgJAAgHgDgAgMAMQgFACgCADQgDADAAADQAAAFADADQADADAGAAQADAAAGgCIAJgGIAAgTQgNACgHADg");
	this.shape_78.setTransform(480.9,110.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#333333").s().p("AghBQIAAgVIAEAAQAHAAACgBIACgCIABgIIAAhhIgQAAIAAgVQAUgBATgIIALAAIAAB/IABAHQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQACABAHAAIAEAAIAAAVg");
	this.shape_79.setTransform(470.6,107.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_80.setTransform(452.5,110.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#333333").s().p("AgnBLQgKgHgHgOQgHgNAAgQQAAgRAHgNQAGgNALgHQAMgHAOAAQAGAAAGACQAGABAIAFIAAgaIgPAAIAAgWQAMAAAJgCQAJgCAJgEIALAAIAAB9QAAAIABACIABACQACABAHAAIAFAAIAAAVIgwABIAAgKQgKAGgHADQgHADgIgBQgNAAgKgGgAgOgEQgGADgCAHQgDAHgBALQAAAPAHAJQAGAIAIgBIAGgBIAMgHIAAgkQAAgHgBgDQgBgDgFgDQgFgDgEAAQgHAAgEAEg");
	this.shape_81.setTransform(439.1,108.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAOgHQAPgIARAAQASAAAOAHQAOAIAIAMQAHANAAAQQAAAZgQAQQgRAQgcAAQgbAAgRgQgAgKgcQgGADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgGgJQgHgIgKAAQgFAAgFAEg");
	this.shape_82.setTransform(417.1,110.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#333333").s().p("AgFBHQgIgCgFgFQgGgFgCgFQgCgFAAgKIAAgzIgRAAIAAgWQAJgCAGgFQAHgGAEgHQADgIACgLIAUAAIAAAlIAjAAIAAAYIgjAAIAAAlQAAANABAEQACADADACQAFADAGAAQAMAAALgHIAAAXQgKAEgHACQgIACgJAAQgKAAgHgDg");
	this.shape_83.setTransform(405,108.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#333333").s().p("AAEA4IAAgVIAJgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAgHIAAgmQAAgJgCgBQgDgFgFAAQgEAAgFADQgGACgIAGIAAAqQAAAIABABQABACAHAAIADAAIAAAVIhAAAIAAgVIADAAQAIAAACgBIADgCIABgHIAAgxIgRAAIAAgWQAUgCARgHIAKAAIAAAPQAMgJAJgCQAIgEAKAAQAKAAAJAFQAHAEAEAHQAEAGAAANIAAAsIAAAIIAEACIAHABIAFAAIAAAVg");
	this.shape_84.setTransform(392.5,110.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_85.setTransform(378.2,110.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_86.setTransform(367.8,107.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#333333").s().p("AAoA4IAAgVQAHAAABgBIADgCQABgBAAgGIAAgnQAAgHgBgCIgDgEQgDgCgEAAQgEAAgFADQgFACgKAGIAAApQAAAHABABQAAABABAAQAAABABAAQAAAAAAABQABAAAAAAQACABAHAAIAAAVIg7AAIAAgVQAHAAACgBIADgDIAAgIIAAgkQAAgIgBgDQgDgFgGAAIgGABQgEABgDACIgJAFIgCACIAAApIAAAIIADADIAGABIADAAIAAAVIg/AAIAAgVIAEAAQAHAAABgBQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBQABgBAAgHIAAgvIgQAAIAAgWQAUgCARgHIAKAAIAAAPQAJgHAKgEQAKgEAKAAQAHAAAGACQAFACAEADQAEADADAFQAKgHAKgEQAKgEAKAAQAJAAAHAEQAHADAEAFQAFAGABAFIABAMIAAAsQAAAGABABQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQABABAHAAIAEAAIAAAVg");
	this.shape_87.setTransform(352.6,110.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_88.setTransform(337.3,107.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#333333").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_89.setTransform(326.8,110.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAIgMAOgHQAOgIARAAQATAAANAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgcAAgQgQgAgLgcQgFADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgHgJQgGgIgKAAQgFAAgGAEg");
	this.shape_90.setTransform(313.2,110.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("AAFA4IAAgVIAHgBQABAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAgHIAAgmQAAgJgBgBQgDgFgGAAQgEAAgFADQgFACgKAGIAAAqQABAIABABQACACAFAAIAEAAIAAAVIhAAAIAAgVIAEAAQAHAAACgBIADgCIAAgHIAAgxIgQAAIAAgWQAUgCARgHIALAAIAAAPQAMgJAIgCQAIgEAKAAQAKAAAIAFQAJAEADAHQAEAGAAANIAAAsIABAIIACACIAIABIAGAAIAAAVg");
	this.shape_91.setTransform(298.9,110.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAIgMANgHQAOgIASAAQATAAANAHQAOAIAIAMQAHANAAAQQAAAZgQAQQgRAQgcAAQgcAAgQgQgAgLgcQgFADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgHgJQgGgIgKAAQgFAAgGAEg");
	this.shape_92.setTransform(284.1,110.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#333333").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_93.setTransform(270.8,110.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("AAEA4IAAgVIAIgBQABAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAgHIAAgmQAAgJgBgBQgDgFgGAAQgFAAgEADQgFACgJAGIAAAqQgBAIACABQABACAHAAIADAAIAAAVIhAAAIAAgVIAEAAQAHAAACgBIADgCIAAgHIAAgxIgQAAIAAgWQAUgCARgHIAKAAIAAAPQAMgJAJgCQAIgEAKAAQAKAAAJAFQAHAEAEAHQAEAGAAANIAAAsIABAIIACACIAIABIAFAAIAAAVg");
	this.shape_94.setTransform(249.2,110.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_95.setTransform(234.8,110.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AgfA2QgHgDgFgEQgEgEgCgGQgCgGAAgJIAAgsIgBgIIgCgCIgIgBIgGAAIAAgVIA0gBIAABGIAAAKQABACADACQACABAEAAQAFAAAGgCIAMgIIAAgqIAAgHIgDgDIgGgBIgHAAIAAgVIA0gBIAABNIAAAIQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAQABABAGAAIAGAAIAAAVIgwABIAAgNQgKAHgJAEQgJADgKAAQgIAAgGgCg");
	this.shape_96.setTransform(220.9,110.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("AgBBPQgHgDgIgGIgGAJIgYAAIAAiBIgQAAIAAgWQAVgBATgHIALAAIAAA7QAJgHAGgBQAHgDAHAAQASAAANAOQAOAQAAAZQAAAagOAQQgPARgTgBQgJABgHgDgAgBgEIgKAFIAAAiQAAAKABADQACAEAEACQAEADAFAAQAIAAAGgHQAGgKAAgQQAAgQgFgIQgFgGgIAAIgIACg");
	this.shape_97.setTransform(206.4,108.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#333333").s().p("AAEA4IAAgVIAJgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAgHIAAgmQAAgJgCgBQgDgFgFAAQgEAAgFADQgGACgIAGIAAAqQAAAIABABQABACAHAAIADAAIAAAVIhAAAIAAgVIADAAQAIAAACgBIADgCIABgHIAAgxIgRAAIAAgWQAUgCARgHIAKAAIAAAPQAMgJAJgCQAIgEAKAAQAKAAAJAFQAHAEAEAHQAEAGAAANIAAAsIAAAIIAEACIAHABIAFAAIAAAVg");
	this.shape_98.setTransform(185.1,110.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#333333").s().p("AgfA2QgHgDgFgEQgEgEgCgGQgCgGAAgJIAAgsIgBgIIgCgCIgIgBIgGAAIAAgVIA0gBIAABGIAAAKQABACADACQACABAEAAQAFAAAGgCIAMgIIAAgqIAAgHIgDgDIgGgBIgHAAIAAgVIA0gBIAABNIAAAIQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAQABABAGAAIAGAAIAAAVIgwABIAAgNQgKAHgJAEQgJADgKAAQgIAAgGgCg");
	this.shape_99.setTransform(169.9,110.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_100.setTransform(149,110.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_101.setTransform(136.7,110.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#333333").s().p("AAEA4IAAgVIAIgBQABAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAgHIAAgmQAAgJgBgBQgEgFgFAAQgEAAgFADQgFACgKAGIAAAqQABAIABABQACACAFAAIAEAAIAAAVIhAAAIAAgVIAEAAQAHAAACgBIADgCIAAgHIAAgxIgQAAIAAgWQAUgCARgHIALAAIAAAPQALgJAJgCQAJgEAJAAQAKAAAIAFQAJAEADAHQAEAGAAANIAAAsIABAIIACACIAIABIAGAAIAAAVg");
	this.shape_102.setTransform(122.8,110.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_103.setTransform(108.5,110.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_104.setTransform(98.1,107.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#333333").s().p("AglBPIAAgVIAFAAQAIAAABgBIAEgEQABgCAAgHIAAhZQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAIgEgBQgFAAgHAEQgIAFgFAHIgJASIgUgHIASg2IAPAAIACAFIBUAAIADgFIAOAAIATA2IgVAHIgJgSQgGgIgIgEQgFgEgGAAIgDABIgBAGIAABXIAAAKIACADIADABIANABIAAAVg");
	this.shape_105.setTransform(86.1,108.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#663300").s().p("AgRBsQgGgIAAgMQAAgMAGgJQAGgIAKgBQAKAAAHAJQAGAIAAALQAAAMgHAJQgGAJgKAAQgKAAgGgIgAgEArQAAAAgBgBQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgFQAAgIgKg/IgHg3QAAgLAHgGQAHgIAMAAQAMAAAGAIQAHAIAAALQAAAGgLBDIgHAyIAAAGIgEACg");
	this.shape_106.setTransform(385.7,75.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#663300").s().p("AgmBKQgTgYAAgxQABgvAQgZQARgaAbAAQAZAAAOAVQAPAWAAAnIAAANIg/AAIAAA5QAAALAEAHQAEAGAHAAQALAAAGgJQAGgJABgQQAAgIABgCQACgBAJAAQAIAAACABQACABAAAHQgBAVgOARQgOARgXAAQgZAAgTgYgAgFhCIAAAvIASAAIAAgvQAAgNgJAAQgJAAAAANg");
	this.shape_107.setTransform(362.7,77.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#663300").s().p("AgPBzQgKgJAAgSIAAiRIgFAAIgDgBIgBgDIAAgKIABgEIADgBQALgBAKgKQAJgKACgLIACgFQAAAAAAAAQABAAAAgBQABAAABAAQAAAAABAAIAJAAQAEAAAAAFIAAAhIAJAAQAFAAAAAEIAAAKQAAAFgFAAIgJAAIAACRQAAAHAHADQADACABACIABAIIgBAEIgDABg");
	this.shape_108.setTransform(339.6,75.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#663300").s().p("AAUBhQgJgHAAgMIAAiEQABgMgKAAQgFAAgGAHIAACCQAAAFAEADQAEABAAAFIAAAHQgBAFgGAAIgzAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAgEIAAgGQAAgDADgCQADgDABgCQABgCAAgHIAAiIQAAgFgFgDQgDgBABgEIAAgGQAAgFADAAIAuAAIAEABIABAEIAAAOQAPgVAWAAQAPAAAIAJQAHAKAAAPIAACFQAAAEAEADQADACAAAIQAAAGgBABQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAg");
	this.shape_109.setTransform(315.9,77.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#663300").s().p("AgmBKQgTgYAAgxQAAgvARgZQARgaAbAAQAZAAAOAVQAOAWAAAnIAAANIg+AAIAAA5QAAALAFAHQADAGAHAAQALAAAGgJQAHgJAAgQQAAgIACgCQABgBAJAAQAHAAADABQABABAAAHQABAVgOARQgPARgXAAQgaAAgSgYgAgFhCIAAAvIASAAIAAgvQAAgNgJAAQgJAAAAANg");
	this.shape_110.setTransform(289.6,77.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#663300").s().p("AgaBxQgEAAAAgEIAAgIQAAgFAEgCIAEgCIABgGIAAisQAAgFgFgCQgEgDAAgFIAAgHQAAgFAFABIArAAIAFAAQABABAAAEIAADDQAAAHAEABQADACAAADIAAAIQAAAEgGAAg");
	this.shape_111.setTransform(266.6,76);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#663300").s().p("AgmBKQgSgYAAgxQgBgvASgZQARgaAbAAQAXAAAPAVQAPAWAAAnIAAANIg/AAIAAA5QAAALAEAHQAEAGAHAAQALAAAGgJQAGgJABgQQAAgIABgCQACgBAIAAQAJAAABABQACABABAHQAAAVgPARQgOARgXAAQgZAAgTgYgAgFhCIAAAvIASAAIAAgvQAAgNgJAAQgJAAAAANg");
	this.shape_112.setTransform(243.6,77.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#663300").s().p("AgiBJQgPgYAAguQAAghAIgWQAIgXAMgLQALgLAQAAQAVAAAMANQALAOAAASQAAAJgEAHQgEAGgIAAQgIAAgEgGQgFgGAAgKIABgJIABgJQAAgEgDgDQgDgCgDAAQgDAAgCADQgDADAAAEIAACGQAAAFADAEQADAEAFABQAHgBAEgIQAEgJgBgOIAAgDQAAgIAEgBQACgCAHAAQAFAAADACQACACAAAHQgBAWgKAQQgMAQgVAAQgXAAgRgZg");
	this.shape_113.setTransform(219,77.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#663300").s().p("AAABgQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgCgBAAgFIABgIIADgEQABAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBIgBgDIgJgeIgKASQgFAMgBADQAAADAEACQADABAAADIAAAFIgBAHQAAAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgbAAIgEgBIgBgEIAAgIQAAgDAEgBQAEgDACgEIAbg4IgdhVQgCgFgDgDIgDgDQgBgBAAgJQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIAyAAIAFAAQABABAAAFIAAAEQgBAFgCABQgDADAAADIAAACIAJAdIAJgSIACgCQAFgKAAgEQAAAAAAAAQAAgBAAAAQgBgBAAAAQgBgBgBAAIgDgCIAAgIQAAgCAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIAbAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAIAAAHIAAAHQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQgDACgCAEIgcA4IAeBYQABADAEADQADACAAAEIAAAHIgBAEIgEABg");
	this.shape_114.setTransform(194.2,77.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#663300").s().p("AgyBxQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgCAAgHQAAgGAEgBQAIgEAAgGIAAiuQAAgCgGgDQgFgCAAgBQgBgDAAgGQAAgFABgBQABgBAEAAIBYAAIAFABIADAFIAHAlIAAADQAAAEgGAAQgIAAgDgCQgCgBgCgIQgEgNgEgEQgDgFgEAAIgKAAIAABQIAKAAQAEAAACgCQACgBABgGIACgMQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQALAAABABQACABAAAGIAAAuQAAAEgCACQgBABgIAAQgEAAgCgBQgBgDgCgHQgCgIgBgBQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBgBAAIgLAAIAABhIAIAAQAHAAADgDQACgFAGgSQADgHACgDQADgCAFAAQAJAAAAAGIAAAEIgFAhIgDAKQgBABgEAAg");
	this.shape_115.setTransform(169.3,76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.nextlevel},{t:this.instance}]}).wait(1));

	// Capa 4
	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(51,0,0,0.349)").s().p("AjeCAQANiNAmgsQAlgsC5hTQBdgqBWghQiFETiwCWQg3Avg1AcIgqATQAAg+AHhGg");
	this.shape_116.setTransform(507.5,332.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_116).wait(1));

	// Capa 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgijAY6QgnAAAAgtMAAAgwZQAAgtAnAAMBFHAAAQAnAAAAAtMAAAAqBQgsBig+BlQhmCohoBWg");
	mask.setTransform(290.4,198.4);

	// Capa 2
	this.instance_1 = new lib.fondo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(59,42,2.012,1.414);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.triunfo, new cjs.Rectangle(-7.6,42,580.7,316.7), null);


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
			intentos = intentos - 3
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
	this.button_12iturbide.parent = this;
	this.button_12iturbide.setTransform(605.7,183.7,0.9,1.19,0,0,0,133.1,23.1);

	this.button_11ana = new lib.ans_vhuerta_btn();
	this.button_11ana.parent = this;
	this.button_11ana.setTransform(-13.6,185.2,1.208,1.3,0,0,0,132.9,22.9);

	this.button_10moctezuma = new lib.ans_vhuerta_btn();
	this.button_10moctezuma.parent = this;
	this.button_10moctezuma.setTransform(-32.1,314.7,1.089,1.3,0,0,0,132.9,22.9);

	this.button_9victoria = new lib.ans_vhuerta_btn();
	this.button_9victoria.parent = this;
	this.button_9victoria.setTransform(-38.3,383.6,1.089,1.3,0,0,0,132.9,22.9);

	this.button_8morelos = new lib.ans_vhuerta_btn();
	this.button_8morelos.parent = this;
	this.button_8morelos.setTransform(624,248.3,1.089,1.3,0,0,0,133.1,23.1);

	this.button_7obregon = new lib.ans_vhuerta_btn();
	this.button_7obregon.parent = this;
	this.button_7obregon.setTransform(610.2,312.7,1,1.3,0,0,0,133.1,22.9);

	this.button_6zapata = new lib.ans_vhuerta_btn();
	this.button_6zapata.parent = this;
	this.button_6zapata.setTransform(608.2,123.5,1,1.7,0,0,0,133.1,22.9);

	this.button_5diaz = new lib.ans_vhuerta_btn();
	this.button_5diaz.parent = this;
	this.button_5diaz.setTransform(-54.3,56.2,1,1.3,0,0,0,133.1,22.9);

	this.button_4hidalgo = new lib.ans_vhuerta_btn();
	this.button_4hidalgo.parent = this;
	this.button_4hidalgo.setTransform(-24,123.8,1.158,1.3,0,0,0,132.9,22.9);

	this.button_4madero = new lib.ans_vhuerta_btn();
	this.button_4madero.parent = this;
	this.button_4madero.setTransform(609.7,383.6,1,1.3,0,0,0,133.1,22.9);

	this.button_3 = new lib.ans_vhuerta_btn();
	this.button_3.parent = this;
	this.button_3.setTransform(-45.9,252.3,1,1.3,0,0,0,133.1,22.9);

	this.button_2 = new lib.ans_vhuerta_btn();
	this.button_2.parent = this;
	this.button_2.setTransform(608.2,53.1,1,1.522,0,0,0,133.1,22.9);

	this.boton12 = new lib.hit2();
	this.boton12.parent = this;
	this.boton12.setTransform(120.6,523.3,2.506,0.427,0,0,0,58.1,39.1);
	this.boton12.alpha = 0;

	this.boton11 = new lib.hit2();
	this.boton11.parent = this;
	this.boton11.setTransform(105.6,474.2,2.28,0.427,0,0,0,58.1,38.9);
	this.boton11.alpha = 0;

	this.boton10 = new lib.hit2();
	this.boton10.parent = this;
	this.boton10.setTransform(168.6,425.1,3.494,0.427,0,0,0,58.1,39);
	this.boton10.alpha = 0;

	this.boton9 = new lib.hit2();
	this.boton9.parent = this;
	this.boton9.setTransform(114.6,373,2.412,0.427,0,0,0,58.1,39);
	this.boton9.alpha = 0;

	this.boton8 = new lib.hit2();
	this.boton8.parent = this;
	this.boton8.setTransform(99.7,323,2.148,0.427,0,0,0,58.1,39.3);
	this.boton8.alpha = 0;

	this.boton5 = new lib.hit2();
	this.boton5.parent = this;
	this.boton5.setTransform(66.5,171.6,1.606,0.427,0,0,0,58.1,39.1);
	this.boton5.alpha = 0;

	this.boton1 = new lib.hit2();
	this.boton1.parent = this;
	this.boton1.setTransform(74.9,-27.8,1.751,0.427,0,0,0,58.1,39.1);
	this.boton1.alpha = 0;

	this.boton2 = new lib.hit2();
	this.boton2.parent = this;
	this.boton2.setTransform(151.6,22.3,3.166,0.427,0,0,0,58.1,39.1);
	this.boton2.alpha = 0;

	this.boton3 = new lib.hit2();
	this.boton3.parent = this;
	this.boton3.setTransform(185.6,74.9,3.723,0.427,0,0,0,58.1,39.1);
	this.boton3.alpha = 0;

	this.boton4 = new lib.hit2();
	this.boton4.parent = this;
	this.boton4.setTransform(87.6,122.5,1.939,0.427,0,0,0,58.1,39);
	this.boton4.alpha = 0;

	this.boton6 = new lib.hit2();
	this.boton6.parent = this;
	this.boton6.setTransform(116.6,222.7,2.506,0.427,0,0,0,58.1,39.1);
	this.boton6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.boton6},{t:this.boton4},{t:this.boton3},{t:this.boton2},{t:this.boton1},{t:this.boton5},{t:this.boton8},{t:this.boton9},{t:this.boton10},{t:this.boton11},{t:this.boton12},{t:this.button_2},{t:this.button_3},{t:this.button_4madero},{t:this.button_4hidalgo},{t:this.button_5diaz},{t:this.button_6zapata},{t:this.button_7obregon},{t:this.button_8morelos},{t:this.button_9victoria},{t:this.button_10moctezuma},{t:this.button_11ana},{t:this.button_12iturbide}]},1).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyYLcIRr2rQALgRANgDQAWgDAQAlQAzB9ACDcIABC0QABBnAMBKQAgDICAC4QB0CpCzCEQEPp/FjpOQAPAMgEAZQgDATgOAXQlKIfj6JYQgPAlgUAHQgbAJgkglQimilhMhiQh5idgsiYQgZhYgIhzQgDg5gCiZQgCkPgziJIumSqQgyBBgUAbQgmA0gZAtIgQAaQgJAOgLAIQgMAJgQACIgGAAQgMAAgKgIg");
	this.shape.setTransform(-480,119.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000033").s().p("AhLBLQgggfABgsQgBgsAggfQAfgeAuAAQArAAAfAfQAfAfABArQAAAsggAfQggAfgsAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAIAJAMAAQAMAAAJgJQAIgJAAgNQAAgMgIgJQgJgJgMAAQgMAAgIAJg");
	this.shape_1.setTransform(819.7,383.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAoAAQAJAAAOACIAABSQgIgFgHAAQgVAAABAfIAABhg");
	this.shape_2.setTransform(802.3,382.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000033").s().p("AhKBMQgggfAAgsQABgsAfggQAfgeAsAAQAtgBAeAfQAfAeAAAsIgBAOIhzAAQgDgJAAgHQAAgKAEgKIAlAAQgEgXgVAAQgOAAgIANQgKAMABATQAAATAIANQAJAMANgBQALAAALgLIAsA1QgfAYglgBQgtAAgegeg");
	this.shape_3.setTransform(783,383.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000033").s().p("AhLBvQgfgfAAgsQAAgrAfgfQAgggAqAAIAUACIAABTQgKgHgJAAQgLAAgJAIQgIAJgBAMQABAMAIAJQAKAIALAAQAdAAAAgpIAAimIBNAAIAACpQAAAvgZAeQgOARgVAKQgXAKgWAAQgtAAgggfg");
	this.shape_4.setTransform(758.7,379.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAheQAAgQgIgKQgIgJgNAAQgLAAgJAIQgJAJAAALQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJABgIAAQgtAAgfgeg");
	this.shape_5.setTransform(734,383.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000033").s().p("ABACPIAAi1QAAgNgBgFQgDgEgGAAQgMAAAAAVIAAC2IhTAAIAAi1QAAgNgCgFQgCgEgHAAQgMAAAAAWIAAC1IhTAAIAAjIQAAgmAWgYQAYgXAkAAQArAAAWAnQAOgVAQgJQARgJAXAAQAlAAAVAXQAUAYAAAtIAADBg");
	this.shape_6.setTransform(705.2,379);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000033").s().p("AgiAjQgOgNAAgWQAAgTAPgOQAOgPATAAQAUAAAOAPQAPAPAAATQAAAUgPAOQgOAOgUAAQgUAAgOgOg");
	this.shape_7.setTransform(669.7,389);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000033").s().p("AgpCMIAAkXIBTAAIAAEXg");
	this.shape_8.setTransform(654.8,379.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000033").s().p("AhLBLQgggfABgsQgBgsAggfQAfgeAuAAQArAAAfAfQAfAfABArQAAAsggAfQggAfgsAAQgrAAgggfgAgUgVQgJAJAAAMQAAANAJAJQAIAJAMAAQAMAAAJgJQAJgJAAgNQAAgMgJgJQgJgJgMAAQgMAAgIAJg");
	this.shape_9.setTransform(625.6,383.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000033").s().p("AhKBLQgfgfAAgtQAAgrAfgfQAggfAqAAQAnAAAdAZQAdAYAIAmIhPACQgKgNgPAAQgMAAgIAJQgIAIAAANQgBAMAKAKQAJAIALABQAUgBAIgWIBMgDQgDAtgeAcQgdAcgrAAQgsAAgfgfg");
	this.shape_10.setTransform(602.2,383.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000033").s().p("AhJBnIAAhRIAEAAQASAAAIgHQAIgIABgSQACggAEgNQAEgMANgMQAWgXAnAAIAYAAIAABRQgRAAgFAHQgHAGgBAQQgGA7gnAZQgWAMgnAAg");
	this.shape_11.setTransform(582.8,383.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_12.setTransform(569,378.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000033").s().p("AhKBLQgfgfAAgtQAAgrAfgfQAfgfArAAQAnAAAdAZQAdAYAIAmIhOACQgLgNgPAAQgMAAgIAJQgIAIAAANQgBAMAKAKQAIAIAMABQAUgBAIgWIBMgDQgDAtgeAcQgdAcgrAAQgsAAgfgfg");
	this.shape_13.setTransform(551.2,383.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000033").s().p("AAPBoIAAhyQAAgSgPAAQgNAAAAASIAAByIhNAAIAAhxQAAgoAagbQAagbAmAAQAsAAAaAfQAVAZAAAsIAABrg");
	this.shape_14.setTransform(528.1,382.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAheQAAgQgIgKQgIgJgNAAQgLAAgJAIQgJAJAAALQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJABgIAAQgtAAgfgeg");
	this.shape_15.setTransform(503.8,383.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAnAAQAKAAAOACIAABSQgIgFgHAAQgUAAAAAfIAABhg");
	this.shape_16.setTransform(486.5,382.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000033").s().p("AheCPIAAisQAAgxAdggQAfggAtAAQAyAAAiArIhEAyQgGgQgOAAQgTAAAAAbIAAAiIAbAAIAABKIgbAAIAABJg");
	this.shape_17.setTransform(470.2,379);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000033").s().p("AAOBoIAAhyQAAgSgOAAQgOAAAAASIAAByIhMAAIAAhxQAAgoAbgbQAZgbAmAAQAsAAAbAfQAUAZAAAsIAABrg");
	this.shape_18.setTransform(735.1,318.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000033").s().p("AhLBrQgggfABgsQgBgsAggfQAfgeAuAAQArAAAfAfQAfAfABArQAAAsggAfQggAfgsAAQgrAAgggfgAgUAKQgJAJAAANQAAANAJAJQAIAJAMAAQAMAAAJgJQAJgJAAgNQAAgNgJgJQgJgJgMAAQgMAAgIAJgAgghaIArgvIAwAAIgwAvg");
	this.shape_19.setTransform(712,315.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000033").s().p("AgtCQIAAhGQAPAJAPAAQAUAAAMgOQALgOgBgZIAAhMQAAgggaAAQgJAAgJAJQgIAIAAALQAAAMAIAHQAHAIALAAQAIAAAIgDIAABFQgRAGgPAAQglAAgZgcQgagbAAgpQAAgsAfgeQAfgeAsAAQAYAAAWAKQAWAJAMARQAVAaAAAzIAABDQAAA2gfAjQgfAigxAAQgPAAgXgIg");
	this.shape_20.setTransform(687.6,322.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000033").s().p("AhKBMQgggfAAgsQABgsAfggQAfgeAsAAQAtgBAeAfQAfAeAAAsIgBAOIhzAAQgDgJAAgHQAAgKAEgKIAlAAQgEgXgVAAQgOAAgIANQgKAMABATQAAATAIANQAJAMANgBQALAAALgLIAsA1QgfAYglgBQgtAAgegeg");
	this.shape_21.setTransform(664.6,318.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAoAAQAIAAAPACIAABSQgIgFgGAAQgWAAAAAfIAABhg");
	this.shape_22.setTransform(647.3,318.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000033").s().p("AgtCEQgWgKgOgRQgZgeAAgvIAAipIBNAAIAACmQAAApAdAAQAMAAAIgIQAJgJAAgMQAAgMgIgJQgIgIgMAAQgIAAgLAHIAAhTIAUgCQArAAAfAgQAfAfAAArQAAAsggAfQgfAfgtAAQgXAAgVgKg");
	this.shape_23.setTransform(627.6,314.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000033").s().p("AhnBoQgrgrAAg9QAAg9ArgqQAsgrA9AAQA8AAAqArQArAsAAA7QAAA9grArQgrArg9AAQg8AAgrgrgAgrgtQgSATAAAaQAAAaASATQATATAYAAQAaAAASgTQASgSAAgbQAAgagSgTQgSgTgaAAQgZAAgSATg");
	this.shape_24.setTransform(599.3,314.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000033").s().p("AhLBLQgfgfgBgsQABgsAfgfQAggeAsAAQAsAAAgAfQAeAfAAArQAAAsgfAfQgfAfgtAAQgrAAgggfgAgUgVQgJAJAAAMQAAANAJAJQAIAJAMAAQAMAAAJgJQAJgJgBgNQABgMgJgJQgJgJgMAAQgMAAgIAJg");
	this.shape_25.setTransform(561.3,318.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAoAAQAJAAAOACIAABSQgIgFgHAAQgVAAABAfIAABhg");
	this.shape_26.setTransform(544,318.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAhfQAAgPgIgKQgIgJgNAAQgLAAgJAJQgJAIAAALQAAANAIAJQAIAHAMABQAJgBAJgEIAABPQgJABgIAAQgtAAgfgeg");
	this.shape_27.setTransform(523.2,318.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000033").s().p("AhehpIBJAAIAVA3IAYg3IBHAAIhfDTg");
	this.shape_28.setTransform(503.4,318.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000033").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_29.setTransform(489.2,314.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000033").s().p("AATCzIAAiuQAAgQgEgHQgEgGgKAAQgTAAAAAdIAAAiIAXAAIAABKIgXAAIAABCIhTAAIAAiyQAAgyAcgdQAcgcAyAAQAyAAAXAaQAYAZAAA3IAACzgAgch7IAyg4IA5AAIg5A4g");
	this.shape_30.setTransform(470.8,310.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000033").s().p("AAPBoIAAhyQAAgSgPAAQgNAAAAASIAAByIhNAAIAAhxQAAgoAagbQAagbAmAAQAsAAAaAfQAVAZAAAsIAABrg");
	this.shape_31.setTransform(950.7,253.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000033").s().p("AhLBrQgfgfgBgsQABgsAfgfQAggeAsAAQAsAAAgAfQAeAfAAArQAAAsgfAfQgfAfgtAAQgrAAgggfgAgUAKQgJAJAAANQAAANAJAJQAJAJALAAQAMAAAJgJQAJgJgBgNQABgNgJgJQgJgJgMAAQgLAAgJAJgAgfhaIAqgvIAxAAIgxAvg");
	this.shape_32.setTransform(927.6,250.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000033").s().p("AhehpIBJAAIAVA3IAYg3IBHAAIhfDTg");
	this.shape_33.setTransform(907.8,253.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAheQAAgQgIgKQgIgJgNAAQgLAAgJAJQgJAIAAALQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJACgIgBQgtAAgfgeg");
	this.shape_34.setTransform(886.8,253.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000033").s().p("AhmCPIAAitQgBgbAGgRQAFgSANgPQAPgQAWgKQAWgJAXAAQAqAAAdAcQAdAdABAqQAAAqgaAYQgZAYgvAAIgMAAIAAhJQAYAAAAgTQAAgSgSAAQgTAAAAAYIAAC2g");
	this.shape_35.setTransform(864.1,249.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000033").s().p("Ag9CPIAAhCQAPAGAMAAQAlAAALgqQgUAMgTAAQgcAAgTgVQgTgVAAggIAAiBIBOAAIAABuQAAASANABQAPgBAAgUIAAhsIBMAAIAAC2QAAAygcAgQgjAlgvAAQgVAAgVgIg");
	this.shape_36.setTransform(829.6,258.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000033").s().p("AhJBnIAAhRIAEAAQASAAAIgHQAIgIABgSQACggAEgNQAEgMANgMQAWgXAnAAIAYAAIAABRQgRAAgFAHQgHAGgBAQQgGA7gnAZQgWAMgnAAg");
	this.shape_37.setTransform(800.4,253.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000033").s().p("AhLBLQgggfAAgsQAAgsAggfQAggeAsAAQAsAAAgAfQAeAfAAArQABAsggAfQgfAfgtAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAIAJAMAAQAMAAAJgJQAJgJAAgNQAAgMgJgJQgJgJgMAAQgMAAgIAJg");
	this.shape_38.setTransform(781,253.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000033").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_39.setTransform(763.2,249.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000033").s().p("AhKBMQgggfAAgsQABgsAfggQAfgeAsAAQAtgBAfAfQAeAeAAAsIgBAOIhzAAQgDgJAAgHQAAgKADgJIAmAAQgDgYgWAAQgNAAgJANQgKAMABATQAAATAIANQAJAMANgBQAMAAAKgLIAsA1QgfAYglgBQgtAAgegeg");
	this.shape_40.setTransform(745.7,253.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAoAAQAJAAAOACIAABSQgIgFgGAAQgWAAABAfIAABhg");
	this.shape_41.setTransform(728.4,253.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000033").s().p("AhLBLQgfgfgBgsQABgsAfgfQAfgeAtAAQAsAAAgAfQAeAfAAArQAAAsgfAfQgfAfgtAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAJgJgBgNQABgMgJgJQgJgJgMAAQgLAAgJAJg");
	this.shape_42.setTransform(708.8,253.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000033").s().p("ABBCPIAAi1QAAgNgCgFQgDgEgGAAQgNAAAAAVIAAC2IhSAAIAAi1QAAgNgCgFQgCgEgGAAQgNAAAAAWIAAC1IhTAAIAAjIQAAgmAXgYQAWgXAkAAQArAAAXAnQAOgVAQgJQARgJAXAAQAmAAAUAXQAUAYAAAtIAADBg");
	this.shape_43.setTransform(680.1,249.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAheQAAgQgIgKQgIgJgNAAQgLAAgJAJQgJAIAAALQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJACgIgBQgtAAgfgeg");
	this.shape_44.setTransform(639.6,253.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000033").s().p("AgwCIIAAjLIBLAAIAADLgAgqhYIAqgvIAxAAIgxAvg");
	this.shape_45.setTransform(622.9,250.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAnAAQAKAAAOACIAABSQgIgFgHAAQgVAAABAfIAABhg");
	this.shape_46.setTransform(610.1,253.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAheQAAgQgIgKQgIgJgNAAQgLAAgJAJQgJAIAAALQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJACgIgBQgtAAgfgeg");
	this.shape_47.setTransform(589.3,253.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000033").s().p("ABBCPIAAi1QAAgNgCgFQgCgEgHAAQgNAAAAAVIAAC2IhSAAIAAi1QABgNgDgFQgCgEgHAAQgMAAAAAWIAAC1IhTAAIAAjIQAAgmAXgYQAXgXAjAAQAsAAAWAnQAOgVAQgJQAQgJAYAAQAlAAAVAXQAUAYAAAtIAADBg");
	this.shape_48.setTransform(560.6,249.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000033").s().p("AhLBsQgegfAAgtQgBgsAggfQAfgfAtAAQAsAAAfAfQAdAeAAArIgBAPIhzAAQgCgJAAgIQAAgKADgKIAnAAQgFgWgVAAQgOAAgJANQgIALgBATQAAAUAJAMQAJAMANAAQALAAALgLIArA0QgeAYglAAQgtAAgfgegAgVhaIAqgvIAxAAIgxAvg");
	this.shape_49.setTransform(521.6,250.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000033").s().p("AhJBnIAAhRIAEAAQASAAAIgHQAIgIABgSQACggAEgNQAEgMANgMQAWgXAnAAIAYAAIAABRQgRAAgFAHQgHAGgBAQQgGA7gnAZQgWAMgnAAg");
	this.shape_50.setTransform(502.2,253.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000033").s().p("AhLBLQgfgfgBgsQABgsAfgfQAfgeAtAAQAsAAAfAfQAgAfAAArQgBAsgfAfQgfAfgtAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAIgJAAgNQAAgMgIgJQgJgJgMAAQgLAAgJAJg");
	this.shape_51.setTransform(482.8,253.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000033").s().p("Ag3CLIAAhRQAHADAFAAQAQAAABgbIAAiwIBSAAIAAC7QAAArgZAcQgYAbgkAAQgLAAgPgEg");
	this.shape_52.setTransform(463.6,250.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000033").s().p("AhLBMQgfgfAAgsQABgsAfggQAfgeAsAAQAtgBAeAfQAfAeAAAsIgBAOIhzAAQgDgJAAgHQAAgKAEgJIAlAAQgEgYgVAAQgOAAgIANQgJAMAAATQgBATAJANQAJAMANgBQALAAALgLIArA1QgeAYglgBQgsAAgggeg");
	this.shape_53.setTransform(799.5,188.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000033").s().p("AhKBvQgggfAAgsQAAgrAfgfQAgggAqAAIATACIAABTQgJgHgJAAQgMAAgIAIQgJAJAAAMQAAAMAJAJQAKAIAKAAQAeAAAAgpIAAimIBNAAIAACpQAAAvgZAeQgOARgVAKQgXAKgWAAQgtAAgfgfg");
	this.shape_54.setTransform(775.3,185.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_55.setTransform(757.3,184.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000033").s().p("AgtCEQgWgKgOgRQgZgeAAgvIAAipIBNAAIAACmQAAApAdAAQAMAAAIgIQAJgJAAgMQAAgMgIgJQgIgIgMAAQgIAAgLAHIAAhTIAUgCQArAAAfAgQAfAfAAArQAAAsggAfQgfAfgtAAQgXAAgVgKg");
	this.shape_56.setTransform(739.4,185.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAoAAQAIAAAPACIAABSQgIgFgGAAQgWAAAAAfIAABhg");
	this.shape_57.setTransform(721.3,188.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000033").s().p("AhFBIQgVgYAAgsIAAhrIBMAAIAAByQAAASAOAAQAOAAAAgSIAAhyIBNAAIAABxQAAAogaAbQgbAbgmAAQgrAAgaggg");
	this.shape_58.setTransform(702.1,189.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000033").s().p("AAvCNQgaAAgWgMQgXgMgOgVQgRgaAAgsIAAimIBLAAIAABOIAjAAIAABQIgjAAQAAAYAIAJQAIAKAUAAIAABQIgJAAg");
	this.shape_59.setTransform(683.7,185.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000033").s().p("AgpCMIAAkXIBTAAIAAEXg");
	this.shape_60.setTransform(669.7,184.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000033").s().p("AhLBMQgegfAAgsQgBgsAgggQAfgeAtAAQAsgBAfAfQAdAeAAAsIgBAOIhzAAQgCgJAAgHQAAgKADgJIAnAAQgFgYgVAAQgOAAgJANQgIAMgBATQAAATAJANQAJAMANgBQALAAALgLIArA1QgeAYglgBQgtAAgfgeg");
	this.shape_61.setTransform(640.8,188.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000033").s().p("AhKBvQgggfAAgsQAAgrAfgfQAfggArAAIATACIAABTQgJgHgJAAQgMAAgHAIQgKAJABAMQgBAMAKAJQAIAIALAAQAeAAAAgpIAAimIBNAAIAACpQAAAvgZAeQgOARgWAKQgVAKgYAAQgsAAgfgfg");
	this.shape_62.setTransform(616.6,185.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000033").s().p("AAPBoIAAhyQAAgSgPAAQgNAAAAASIAAByIhNAAIAAhxQAAgoAbgbQAagbAlAAQAsAAAbAfQAUAZAAAsIAABrg");
	this.shape_63.setTransform(582.9,188.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000033").s().p("AgwCIIAAjLIBLAAIAADLgAgqhYIAqgvIAxAAIgxAvg");
	this.shape_64.setTransform(566.6,185.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000033").s().p("AAvCNQgaAAgWgMQgXgMgOgVQgRgaAAgsIAAimIBLAAIAABOIAjAAIAABQIgjAAQAAAYAIAJQAIAKAUAAIAABQIgJAAg");
	this.shape_65.setTransform(552.4,185.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000033").s().p("AhJBnIAAhRIAEAAQASAAAIgHQAIgIABgSQACggAEgNQAEgMANgMQAWgXAnAAIAYAAIAABRQgRAAgFAHQgHAGgBAQQgGA7gnAZQgWAMgnAAg");
	this.shape_66.setTransform(537.7,189.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000033").s().p("AhGBIQgUgYAAgsIAAhrIBMAAIAAByQAAASAOAAQAOAAAAgSIAAhyIBNAAIAABxQAAAogbAbQgaAbgmAAQgrAAgbggg");
	this.shape_67.setTransform(518.7,189.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000033").s().p("AgtCQIAAhGQAPAJAQAAQATAAALgOQAMgOAAgZIAAhMQAAgggaAAQgLAAgHAJQgJAIAAALQAAAMAIAHQAIAIALAAQAHAAAHgDIAABFQgQAGgOAAQgmAAgZgcQgagbAAgpQAAgsAfgeQAfgeAsAAQAYAAAWAKQAWAJANARQAUAaAAAzIAABDQAAA2geAjQggAigwAAQgQAAgXgIg");
	this.shape_68.setTransform(494.7,193.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000033").s().p("AATCPIAAiuQAAgQgEgHQgEgGgKAAQgTAAAAAdIAAAiIAXAAIAABKIgXAAIAABCIhTAAIAAixQAAgzAcgdQAcgcAyAAQAyAAAXAaQAYAZAAA3IAACzg");
	this.shape_69.setTransform(470.8,184.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAheQAAgQgIgKQgIgJgNAAQgLAAgJAIQgJAJAAALQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJACgIAAQgtgBgfgeg");
	this.shape_70.setTransform(750.2,123.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000033").s().p("AAvCNQgaAAgWgMQgXgMgOgVQgRgaAAgsIAAimIBLAAIAABOIAjAAIAABQIgjAAQAAAYAIAJQAIAKAUAAIAABQIgJAAg");
	this.shape_71.setTransform(731.3,120.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAheQAAgQgIgKQgIgJgNAAQgLAAgJAIQgJAJAAALQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJACgIAAQgtgBgfgeg");
	this.shape_72.setTransform(711.4,123.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000033").s().p("AhqCOIAAiqQAAguAZgeQAOgRAWgKQAVgKAXAAQAtAAAfAfQAgAeAAAuQAAAqgfAfQggAggqAAIgUgCIAAhTQAKAIAIAAQAMgBAJgIQAIgJAAgMQAAgMgJgJQgIgIgMgBQgdABAAApIAACmg");
	this.shape_73.setTransform(687.8,127.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAheQAAgQgIgKQgIgJgNAAQgLAAgJAIQgJAJAAALQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJACgIAAQgtgBgfgeg");
	this.shape_74.setTransform(662.4,123.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000033").s().p("AhnCMIBXjHIhbAAIAAhQIDYAAIhYDGIBXAAIAABRg");
	this.shape_75.setTransform(639.8,120.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000033").s().p("AhLBLQgfgfgBgsQABgsAfgfQAggeAsAAQAsAAAgAfQAeAfAAArQAAAsgfAfQgfAfgtAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAIAJAMAAQAMAAAJgJQAJgJgBgNQABgMgJgJQgJgJgMAAQgMAAgIAJg");
	this.shape_76.setTransform(606.8,123.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000033").s().p("AAPBoIAAhyQgBgSgOAAQgOAAAAASIAAByIhMAAIAAhxQAAgoAbgbQAagbAlAAQAsAAAbAfQAUAZAAAsIAABrg");
	this.shape_77.setTransform(583.6,123.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAheQAAgQgIgKQgIgJgNAAQgLAAgJAIQgJAJAAALQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJACgIAAQgtgBgfgeg");
	this.shape_78.setTransform(559.4,123.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_79.setTransform(541.4,119.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000033").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_80.setTransform(529.3,120.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_81.setTransform(517.1,119.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000033").s().p("ABABoIAAhtQgBgNgCgFQgDgFgHAAQgNAAAAAXIAABtIhLAAIAAhtQAAgNgDgFQgDgFgHAAQgMAAAAAXIAABtIhNAAIAAh9QAAgiAXgYQAXgYAhAAQAiAAAaAdQAfgdAeAAQAlAAAYAcQASAVAAAqIAAB0g");
	this.shape_82.setTransform(494.9,123.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000033").s().p("AAPCMQguAAgYgWQgYgWAAgqIAAhtQAAgoAXgWQAXgWApAAIBIAAIAABQIg1AAQgWAAABAOQAAAJAEADQAGADANAAIAtAAIAAA9Ig2AAQgKAAgFADQgFAEAAAHQAAAJAFADQAFADAOAAIA4AAIAABQg");
	this.shape_83.setTransform(468.6,120.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAhfQAAgPgIgKQgIgJgNAAQgLAAgJAIQgJAKAAAKQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJABgIAAQgtAAgfgeg");
	this.shape_84.setTransform(771.6,59.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000033").s().p("AAvCNQgaAAgWgMQgXgMgOgVQgRgaAAgsIAAimIBLAAIAABOIAjAAIAABQIgjAAQAAAYAIAJQAIAKAUAAIAABQIgJAAg");
	this.shape_85.setTransform(752.8,55.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAoAAQAIAAAPACIAABSQgIgFgGAAQgWAAAAAfIAABhg");
	this.shape_86.setTransform(740.2,58.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000033").s().p("AhLBMQgegfAAgsQgBgsAgggQAfgeAtAAQAsgBAeAfQAeAeAAAsIgBAOIhzAAQgCgJAAgHQAAgKADgJIAnAAQgFgYgVAAQgOAAgJANQgIAMgBATQAAATAJANQAJAMANgBQALAAALgLIArA1QgeAYglgBQgtAAgfgeg");
	this.shape_87.setTransform(720.9,59.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000033").s().p("AhFBIQgVgYAAgsIAAhrIBMAAIAAByQAAASAOAAQAOAAAAgSIAAhyIBNAAIAABxQAAAogaAbQgbAbgmAAQgrAAgaggg");
	this.shape_88.setTransform(697.8,59.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000033").s().p("AATCMIAAkXIBTAAIAAEXgAhlCMIAAkXIBUAAIAABkIAWAAIAABJIgWAAIAABqg");
	this.shape_89.setTransform(673.5,55.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000033").s().p("AhLBLQgggfABgsQgBgsAggfQAfgeAuAAQArAAAfAfQAfAfABArQAAAsggAfQggAfgsAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAIAJAMAAQAMAAAJgJQAIgJABgNQgBgMgIgJQgJgJgMAAQgMAAgIAJg");
	this.shape_90.setTransform(638.3,59.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000033").s().p("AAPBoIAAhyQAAgSgPAAQgOAAAAASIAAByIhMAAIAAhxQAAgoAbgbQAagbAlAAQAsAAAbAfQAUAZAAAsIAABrg");
	this.shape_91.setTransform(615.2,58.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAhfQAAgPgIgKQgIgJgNAAQgLAAgJAIQgJAKAAAKQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJABgIAAQgtAAgfgeg");
	this.shape_92.setTransform(591,59.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_93.setTransform(573,54.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAnAAQAJAAAPACIAABSQgIgFgHAAQgUAAgBAfIAABhg");
	this.shape_94.setTransform(561.4,58.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000033").s().p("AhLBLQgggfABgsQgBgsAggfQAfgeAuAAQArAAAgAfQAeAfAAArQABAsggAfQggAfgsAAQgrAAgggfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAJgJAAgNQAAgMgJgJQgJgJgMAAQgLAAgJAJg");
	this.shape_95.setTransform(541.8,59.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000033").s().p("AAvCNQgaAAgWgMQgXgMgOgVQgRgaAAgsIAAimIBLAAIAABOIAjAAIAABQIgjAAQAAAYAIAJQAIAKAUAAIAABQIgJAAg");
	this.shape_96.setTransform(523,55.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000033").s().p("AhKBLQgfgfAAgtQAAgrAfgfQAfgfAsAAQAmAAAdAYQAdAZAHAmIhNACQgLgNgOAAQgNAAgIAJQgJAIABANQAAAMAJAKQAIAIAMABQAUgBAIgWIBMgDQgDAtgeAcQgdAcgrAAQgsAAgfgfg");
	this.shape_97.setTransform(504.3,59.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_98.setTransform(486.4,54.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000033").s().p("Ah5iTIBhAAIAZBXIAchXIBcAAIh5Eng");
	this.shape_99.setTransform(469.1,56.1);

	this.button_1 = new lib.cerrar();
	this.button_1.parent = this;
	this.button_1.setTransform(971.9,-36.3,2,2,0,0,0,19.4,20.3);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.cerrar(), 3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#663300").s().p("AhfB8QAAgqApAAQAqAAAAAqQAAApgqAAQgpAAAAgpgAhKAvIAAhLIAiAAQAHAhAXAAQAdAAAAg4QAAhYglAAQgeAAAAArQAAAMACAVIgkgLQgEgTAAgKQAAg9BRgBQBlABAABiQAAApgZAbQgZAdgkAAQgXAAgZgSIAAAig");
	this.shape_100.setTransform(307.9,-60.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#663300").s().p("AhrAGQAAg4AgglQAgglAwAAQBmAAAACEIh8AAQAABdAvAAQAsAAAAg0IgBgRIAjAKQgGBThbAAQh2AAAAh3gAgQgnIgBAVIAzAAQAAhSgaAAQgVAAgDA9g");
	this.shape_101.setTransform(283.8,-56.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#663300").s().p("Ag/CnIAegVIAAAIQAAAcANAAQAPAAAAgUQAAgMgRgdIAAjrQAfgBA2gGIAADwIABAhIgOAoQgQAQgiAAQgxAAgOgpgAgWiwQAAgfAnAAQAoAAAAAfQAAAfgoAAQgnAAAAgfg");
	this.shape_102.setTransform(263.1,-56.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#663300").s().p("Ah+A2QAAg1BFgTQA/gUAAgdQAAgkgkAAQgqAAAAAjQAAALAHATIgrgIIgBgVQAAg4BmgBQBiABgBA0IAACPQAAAWAPAAQAFAAAIgEIAIAVQgfANgeAAQgsAAgLgcQgUAdgpAAQhKgBgBhGgAgNgHQgaAOAAAmQgBAuATAAQAaABAAgvIAAhDQgIAJgKAGg");
	this.shape_103.setTransform(246.3,-56.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#663300").s().p("AAaB6IAAiuQAAgagPAAQgOAAgLAWQgMAUAAAdIAACBIhVAAIAAjtQAsAAApgGIAAAtQAggtAuABQA8gBAAA9IAAC2g");
	this.shape_104.setTransform(219,-57);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#663300").s().p("Ah1AAQAAh7B1AAQB2AAAAB7QAAB8h2AAQh1AAAAh8gAgcAAQAABnAcAAQAcAAABhnQgBhmgcAAQgcAAAABmg");
	this.shape_105.setTransform(192.3,-56.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#663300").s().p("AhoAsIAsgJIAAAPQgBAUASAQQARAQAXAAQAfgBAAgaQAAgRgygWQhLggAAgzQAAghAdgWQAdgWAsABQBRAAAIBCIgpAIQgBg2gxAAQgeAAABAaQgBASA0AVQBQAhAAAxQAABQhmAAQhrAAAAhQg");
	this.shape_106.setTransform(167.7,-56.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#663300").s().p("AhYB6IAAjtIAQABQAeAAAngHIAAAnQAUgnAfAAQApAAAAAuQAAAMgEAPIgEAUIg7AAIAFgVQAEgKAAgHQAAgPgLAAQgIAAgIAUQgHATAAAWIAACOg");
	this.shape_107.setTransform(146.9,-57);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#663300").s().p("AhrAGQAAg4AgglQAgglAvAAQBoAAAACEIh9AAQAABdAuAAQAtAAAAg0IAAgRIAiAKQgFBThcAAQh2AAAAh3gAgQgnIgBAVIAyAAQABhSgZAAQgWAAgDA9g");
	this.shape_108.setTransform(123.5,-56.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#663300").s().p("AhwCiIAAk8QAkgBAygGIAAAkQAYgkAiAAQAlAAAWAiQAWAiAAA4QAAB9hUAAQghAAgWgaIAABkgAgbgmQAABbAbAAQAYAAAAhbQAAhYgXgBQgcABAABYg");
	this.shape_109.setTransform(98.9,-52.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#663300").s().p("AhrAGQAAg4AgglQAgglAvAAQBoAAAACEIh9AAQAABdAuAAQAtAAAAg0IAAgRIAiAKQgFBThcAAQh2AAAAh3gAgQgnIgBAVIAyAAQABhSgZAAQgWAAgDA9g");
	this.shape_110.setTransform(58.7,-56.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#663300").s().p("AgxBnIAAicIgdAAIAAgbIAdAAIAAgqQAsgMAogXIAABNIAmAAIAAAbIgmAAIAACnQABAPAJAAQAIAAABgKIAZACQgKAlg2AAQhAAAAAg3g");
	this.shape_111.setTransform(39,-60.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#663300").s().p("AhoAsIAsgJIAAAPQAAAUARAQQARAQAXAAQAfgBAAgaQAAgRgygWQhLggAAgzQAAghAdgWQAdgWAsABQBRAAAIBCIgpAIQgBg2gxAAQgeAAABAaQAAASAzAVQBQAhAAAxQAABQhmAAQhrAAAAhQg");
	this.shape_112.setTransform(19.6,-56.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#663300").s().p("AhrAGQAAg4AgglQAfglAxAAQBmAAABCEIh9AAQAABdAuAAQAtAAAAg0IgBgRIAjAKQgFBThcAAQh2AAAAh3gAgQgnIgBAVIAzAAQAAhSgaAAQgWAAgCA9g");
	this.shape_113.setTransform(-4,-56.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#663300").s().p("AhoAsIAtgJIgCAPQABAUARAQQARAQAYAAQAdgBAAgaQAAgRgwgWQhMggAAgzQAAghAdgWQAdgWAtABQBQAAAIBCIgqAIQABg2gyAAQgdAAgBAaQABASAzAVQBQAhAAAxQAABQhmAAQhrAAAAhQg");
	this.shape_114.setTransform(-42,-56.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#663300").s().p("AhrAGQAAg4AgglQAfglAxAAQBmAAAACEIh8AAQAABdAuAAQAtAAAAg0IgBgRIAjAKQgFBThcAAQh2AAAAh3gAgQgnIgBAVIAzAAQAAhSgaAAQgWAAgCA9g");
	this.shape_115.setTransform(-65.6,-56.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#663300").s().p("AAaB6IAAiuQAAgagPAAQgOAAgLAWQgMAUAAAdIAACBIhVAAIAAjtQAsAAApgGIAAAtQAggtAuABQA8gBAAA9IAAC2g");
	this.shape_116.setTransform(-105.8,-57);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#663300").s().p("AhrAGQAAg4AgglQAgglAvAAQBoAAAACEIh9AAQAABdAuAAQAtAAAAg0IgBgRIAjAKQgGBThbAAQh2AAAAh3gAgQgnIgBAVIAzAAQAAhSgZAAQgWAAgDA9g");
	this.shape_117.setTransform(-131.5,-56.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#663300").s().p("AgqClIAAjsQAoAAAtgHIAADzgAgmiFQAAgfAnAAQAoAAAAAfQAAAfgoAAQgnAAAAgfg");
	this.shape_118.setTransform(-150.4,-61.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#663300").s().p("AhwA/IAAi0QArgCArgEIAAC4QAAAXAPAAQAmAAAAhTIAAh2QArgCAqgEIAADyIhVAAIAAgmQgdArgvAAQg/AAAAg9g");
	this.shape_119.setTransform(-170.8,-56.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#663300").s().p("AASCFIgRABQiOAAgBilQAAimCPAAQCNAAAACpQAABuhIAmQALAdAQAAQAUAAgCgZIAAgGIAZAJIABAMQgBA7g3AAQg2AAgNhBgAgfBVQAJAYAVAAQAHgBAJgFQgGgjgRAAQgNAAgKARgAAiA+QALgogBg6QABhPgKgcQgJgdgaAAQgZAAgJAeQgKAdAABNQAAA+AHAfQAQgXAUgBQAVABAOAcg");
	this.shape_120.setTransform(-200.1,-57.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#663300").s().p("AhfBDQAAgpAZgbQAZgdAkAAQAXgBAZATIAAgjIAkAAIAABMIgiAAQgHghgXgBQgdABAAA4QAABXAmABQAdAAAAgrQAAgMgCgVIAkAKQAEAVAAAJQAAA9hRAAQhlAAAAhigAANh7QAAgpAqAAQApAAAAApQAAAqgpAAQgqAAAAgqg");
	this.shape_121.setTransform(-227.8,-52.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000033").s().p("AhLBMQgfgfAAgtQAAgrAfggQAfgeAsAAQAxAAAdAcQAdAeAAAxIAABkIhNAAIAAheQAAgQgIgJQgIgKgNAAQgLAAgJAJQgJAIAAAMQAAANAIAHQAIAJAMgBQAJAAAJgEIAABOQgJACgIABQgtAAgfgfg");
	this.shape_122.setTransform(148.6,383.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_123.setTransform(130.6,378.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAoAAQAIAAAPACIAABSQgIgFgGAAQgWAAAAAfIAABhg");
	this.shape_124.setTransform(119,382.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000033").s().p("AhLBLQgfgfAAgsQAAgsAfgfQAfgeAuAAQArAAAfAfQAgAfAAArQgBAsgfAfQgfAfgtAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAIgJAAgNQAAgMgIgJQgJgJgMAAQgLAAgJAJg");
	this.shape_125.setTransform(99.4,383.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000033").s().p("AAvCNQgaAAgWgMQgXgMgOgVQgRgaAAgsIAAimIBLAAIAABOIAjAAIAABQIgjAAQAAAYAIAJQAIAKAUAAIAABQIgJAAg");
	this.shape_126.setTransform(80.6,379.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000033").s().p("AhKBLQgfggAAgsQAAgrAfgfQAfgeArAAQAmAAAeAYQAdAYAHAlIhNADQgLgNgPAAQgMAAgIAIQgJAJAAANQAAAMAJAJQAJAKAMgBQAUABAIgXIBMgDQgDAtgeAcQgeAdgqAAQgsAAgfggg");
	this.shape_127.setTransform(61.9,383.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_128.setTransform(44,378.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000033").s().p("Ah4iTIBgAAIAYBXIAdhXIBdAAIh6Eng");
	this.shape_129.setTransform(26.7,380.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000033").s().p("AhLBMQgfgeAAguQABgrAfgfQAfggAsAAQAtAAAeAfQAfAeAAAsIgBAOIhzAAQgDgJAAgGQAAgLAEgJIAlAAQgEgYgVAAQgOAAgIANQgJAMAAATQgBATAJAMQAJAMANABQAMAAAKgMIAsA0QgfAYglAAQgsAAgggeg");
	this.shape_130.setTransform(-6,383.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000033").s().p("AhqCOIAAipQAAgvAZgeQAOgRAWgKQAVgKAXAAQAtAAAfAfQAgAfAAAsQAAArgfAfQgfAggrAAIgUgBIAAhUQAKAIAIgBQAMAAAJgJQAIgIAAgMQAAgNgJgHQgIgKgMABQgdgBAAApIAACng");
	this.shape_131.setTransform(-29.6,386.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000033").s().p("AhFBIQgVgYAAgsIAAhrIBMAAIAAByQAAASAOAAQAOAAAAgSIAAhyIBNAAIAABxQAAAogaAbQgbAbgmAAQgrAAgaggg");
	this.shape_132.setTransform(-53.4,383.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000033").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_133.setTransform(-70.8,379.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000033").s().p("AhLBMQgfgfAAgtQAAgrAfggQAfgeAsAAQAxAAAdAcQAdAeAAAxIAABkIhNAAIAAheQAAgQgIgJQgIgKgNAAQgLAAgJAJQgJAIAAAMQAAANAIAHQAIAJAMgBQAJAAAJgEIAABOQgJACgIABQgtAAgfgfg");
	this.shape_134.setTransform(-89.8,383.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000033").s().p("AhLBvQgfgfAAgsQAAgrAfgfQAfggArAAIAUACIAABTQgKgHgJAAQgLAAgJAIQgIAJgBAMQABAMAIAJQAKAIALAAQAdAAAAgpIAAimIBNAAIAACpQAAAvgZAeQgOARgVAKQgWAKgXAAQgtAAgggfg");
	this.shape_135.setTransform(-114.1,379.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000033").s().p("AhLBMQgfgfAAgtQAAgrAfggQAfgeAsAAQAxAAAdAcQAdAeAAAxIAABkIhNAAIAAheQAAgQgIgJQgIgKgNAAQgLAAgJAJQgJAIAAAMQAAANAIAHQAIAJAMgBQAJAAAJgEIAABOQgJACgIABQgtAAgfgfg");
	this.shape_136.setTransform(-138.8,383.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000033").s().p("AhFBIQgVgYAAgsIAAhrIBMAAIAAByQAAASAOAAQAOAAAAgSIAAhyIBNAAIAABxQAAAogaAbQgbAbgmAAQgrAAgaggg");
	this.shape_137.setTransform(-161.9,383.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000033").s().p("AhPBnQgogrAAg9QAAg+AogqQApgpA7AAQAVAAAZAIIAABUQgTgKgRAAQgdAAgRATQgTASAAAcQAAAeARARQARASAdAAQASAAAAgLQAAgIgMAAIgUAAIAAg/IBQAAQAZAfAAAjQAAApgeAcQgeAcgsAAQg4AAgngsg");
	this.shape_138.setTransform(-185.8,379.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000033").s().p("AhLBMQgfgfAAgtQAAgrAfggQAfgeAsAAQAxAAAdAcQAdAeAAAxIAABkIhNAAIAAheQAAgQgIgJQgIgKgNAAQgLAAgJAJQgJAIAAAMQAAANAIAHQAIAJAMgBQAJAAAJgEIAABOQgJACgIABQgtAAgfgfg");
	this.shape_139.setTransform(7,318.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000033").s().p("AA/BoIAAhtQABgNgDgFQgDgFgHAAQgNAAAAAXIAABtIhLAAIAAhtQgBgNgCgFQgDgFgHAAQgNAAAAAXIAABtIhMAAIAAh9QAAgiAXgYQAXgYAhAAQAiAAAaAdQAfgdAeAAQAmAAAXAcQASAVAAAqIAAB0g");
	this.shape_140.setTransform(-21,318.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000033").s().p("AhFBIQgVgYAAgsIAAhrIBNAAIAAByQAAASANAAQAOAAAAgSIAAhyIBNAAIAABxQAAAogaAbQgbAbgmAAQgrAAgaggg");
	this.shape_141.setTransform(-48.6,318.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000033").s().p("AhgBmIA+h7IhAAAIAAhQIC9AAIg/B7IBIAAIAABQg");
	this.shape_142.setTransform(-70.4,318.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000033").s().p("AhLBMQgegeAAguQgBgrAggfQAfggAtAAQAsAAAeAfQAeAeAAAsIgBAOIhzAAQgCgJAAgGQAAgLAEgJIAmAAQgEgYgWAAQgOAAgJANQgIAMgBATQAAATAJAMQAJAMANABQALAAALgMIAsA0QgfAYglAAQgsAAgggeg");
	this.shape_143.setTransform(-92.1,318.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000033").s().p("AAvCNQgaAAgWgMQgXgMgOgVQgRgaAAgsIAAimIBLAAIAABOIAjAAIAABQIgjAAQAAAYAIAJQAIAKAUAAIAABQIgJAAg");
	this.shape_144.setTransform(-111,314.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000033").s().p("AhKBLQgfggAAgsQAAgrAfgfQAfgeArAAQAmAAAeAYQAdAYAHAlIhNADQgLgNgPAAQgMAAgIAIQgJAJAAANQAAAMAJAJQAJAKAMgBQAUABAIgXIBMgDQgDAtgeAcQgeAdgqAAQgsAAgfggg");
	this.shape_145.setTransform(-129.7,318.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000033").s().p("AhLBLQgfgfAAgsQAAgsAfgfQAfgeAuAAQArAAAfAfQAgAfAAArQgBAsgfAfQggAfgsAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAIgJAAgNQAAgMgIgJQgJgJgMAAQgLAAgJAJg");
	this.shape_146.setTransform(-153.1,318.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000033").s().p("ABBCPIAAi1QgBgNgCgFQgCgEgGAAQgNAAAAAVIAAC2IhRAAIAAi1QgBgNgCgFQgCgEgGAAQgNAAAAAWIAAC1IhTAAIAAjIQAAgmAWgYQAXgXAkAAQArAAAXAnQAOgVAQgJQAQgJAYAAQAmAAAUAXQAUAYAAAtIAADBg");
	this.shape_147.setTransform(-181.9,314.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAheQAAgQgIgKQgIgJgNAAQgLAAgJAJQgJAIAAALQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJACgIgBQgtAAgfgeg");
	this.shape_148.setTransform(60.7,253.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000033").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_149.setTransform(42.9,249.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000033").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_150.setTransform(30.8,249.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_151.setTransform(18.6,248.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000033").s().p("Ah4iTIBgAAIAYBXIAdhXIBdAAIh6Eng");
	this.shape_152.setTransform(1.3,250.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000033").s().p("AhLBLQgfgfAAgsQAAgsAfgfQAfgeAuAAQArAAAfAfQAgAfAAArQgBAsgfAfQggAfgsAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAIgJAAgNQAAgMgIgJQgJgJgMAAQgLAAgJAJg");
	this.shape_153.setTransform(-31.6,253.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000033").s().p("AhKBLQgfgfAAgtQAAgrAfgfQAfgfArAAQAmAAAeAYQAdAZAHAmIhNACQgLgNgPAAQgMAAgIAJQgJAIAAANQAAAMAJAKQAJAIAMABQAUgBAIgWIBMgDQgDAtgeAcQgeAcgqAAQgsAAgfgfg");
	this.shape_154.setTransform(-55.1,253.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000033").s().p("AhJBnIAAhRIAEAAQASAAAIgHQAIgIABgSQACggAEgNQAEgMANgMQAWgXAnAAIAYAAIAABRQgRAAgFAHQgHAGgBAQQgGA7gnAZQgWAMgnAAg");
	this.shape_155.setTransform(-74.5,253.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_156.setTransform(-88.3,248.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000033").s().p("AhKBLQgfgfAAgtQAAgrAfgfQAfgfArAAQAmAAAeAYQAdAZAHAmIhNACQgLgNgPAAQgMAAgIAJQgJAIAAANQAAAMAJAKQAJAIAMABQAUgBAIgWIBMgDQgDAtgeAcQgeAcgqAAQgsAAgfgfg");
	this.shape_157.setTransform(-106.1,253.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000033").s().p("AAPBoIAAhyQAAgSgPAAQgOAAAAASIAAByIhMAAIAAhxQAAgoAbgbQAagbAlAAQAsAAAbAfQAUAZAAAsIAABrg");
	this.shape_158.setTransform(-129.2,253.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAheQAAgQgIgKQgIgJgNAAQgLAAgJAJQgJAIAAALQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJACgIgBQgtAAgfgeg");
	this.shape_159.setTransform(-153.5,253.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAoAAQAIAAAPACIAABSQgIgFgGAAQgWAAAAAfIAABhg");
	this.shape_160.setTransform(-170.8,253.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000033").s().p("AhfCPIAAisQABgxAeggQAeggAsAAQAzAAAjArIhFAyQgGgQgOAAQgSAAAAAbIAAAiIAaAAIAABKIgaAAIAABJg");
	this.shape_161.setTransform(-187.1,249.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAhfQAAgPgIgKQgIgJgNAAQgLAAgJAJQgJAIAAALQAAANAIAJQAIAHAMABQAJgBAJgEIAABPQgJABgIAAQgtAAgfgeg");
	this.shape_162.setTransform(325.3,188.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000033").s().p("AAPBoIAAhyQAAgSgPAAQgNAAAAASIAAByIhNAAIAAhxQAAgoAagbQAbgbAlAAQAsAAAaAfQAVAZAAAsIAABrg");
	this.shape_163.setTransform(302.2,188.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000033").s().p("AAOBoIAAhyQAAgSgOAAQgNAAAAASIAAByIhNAAIAAhxQAAgoAagbQAagbAmAAQAsAAAaAfQAVAZAAAsIAABrg");
	this.shape_164.setTransform(279.5,188.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000033").s().p("AATCPIAAiuQAAgQgEgHQgEgGgKAAQgTAAAAAdIAAAiIAXAAIAABKIgXAAIAABCIhTAAIAAixQAAgzAcgdQAcgcAyAAQAyAAAXAaQAYAZAAA3IAACzg");
	this.shape_165.setTransform(255.7,184.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAhfQAAgPgIgKQgIgJgNAAQgLAAgJAJQgJAIAAALQAAANAIAJQAIAHAMABQAJgBAJgEIAABPQgJABgIAAQgtAAgfgeg");
	this.shape_166.setTransform(219.9,188.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000033").s().p("AAvCNQgaAAgWgMQgXgMgOgVQgRgaAAgsIAAimIBLAAIAABOIAjAAIAABQIgjAAQAAAYAIAJQAIAKAUAAIAABQIgJAAg");
	this.shape_167.setTransform(201.1,185.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000033").s().p("AAOBoIAAhyQAAgSgOAAQgNAAAAASIAAByIhNAAIAAhxQAAgoAagbQAagbAmAAQAsAAAaAfQAVAZAAAsIAABrg");
	this.shape_168.setTransform(182.7,188.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAhfQAAgPgIgKQgIgJgNAAQgLAAgJAJQgJAIAAALQAAANAIAJQAIAHAMABQAJgBAJgEIAABPQgJABgIAAQgtAAgfgeg");
	this.shape_169.setTransform(158.4,188.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000033").s().p("AhICJIAAhQQAMAHAJAAQALAAAIgGQAHgGAAgKQAAgGgMgVQgTgfAAghQAAgoAdgcQAbgdAnAAQARAAARAGIAABQQgJgEgFAAQgKAAgGAHQgHAHAAAKQAAAJAHANIAHALQARAdAAAbQAAApgdAcQgdAdgpAAQgUAAgUgKg");
	this.shape_170.setTransform(137.9,184.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000033").s().p("AhLBMQgegfAAgsQAAgsAfggQAfgeAtAAQAsgBAeAfQAeAeABAsIgCANIhyAAQgDgIAAgHQAAgKAEgJIAlAAQgEgYgVAAQgOAAgIANQgJAMAAATQgBATAJANQAJAMANgBQALAAALgLIAsA1QgfAYglgBQgsAAgggeg");
	this.shape_171.setTransform(107.3,188.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000033").s().p("AhKBvQgggfAAgsQAAgrAfgfQAfggArAAIATACIAABTQgJgHgJAAQgLAAgIAIQgKAJAAAMQAAAMAKAJQAIAIALAAQAeAAAAgpIAAimIBNAAIAACpQAAAvgZAeQgOARgWAKQgVAKgYAAQgsAAgfgfg");
	this.shape_172.setTransform(83.1,185.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000033").s().p("AhgBmIA+h7IhAAAIAAhQIC9AAIg/B7IBIAAIAABQg");
	this.shape_173.setTransform(50.3,188.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000033").s().p("AhLBMQgegfAAgsQAAgsAfggQAfgeAtAAQAsgBAeAfQAeAeABAsIgCANIhyAAQgDgIAAgHQAAgKAEgJIAlAAQgEgYgVAAQgOAAgIANQgJAMAAATQgBATAJANQAJAMANgBQALAAALgLIAsA1QgfAYglgBQgsAAgggeg");
	this.shape_174.setTransform(28.6,188.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000033").s().p("AhqCOIAAiqQAAguAZgeQAOgRAWgKQAVgKAXAAQAtAAAfAfQAgAfAAAsQAAAqgfAgQgfAggrAAIgUgCIAAhTQAKAIAIAAQAMgBAJgIQAIgJAAgMQAAgMgJgJQgIgIgMgBQgdABAAApIAACmg");
	this.shape_175.setTransform(5,192.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000033").s().p("AhLBrQgfgfgBgsQABgsAfgfQAggeAtAAQArAAAgAfQAeAfAAArQAAAsgfAfQgfAfgtAAQgrAAgggfgAgUAKQgJAJAAANQAAANAJAJQAIAJAMAAQAMAAAJgJQAJgJgBgNQABgNgJgJQgJgJgMAAQgMAAgIAJgAgfhaIAqgvIAxAAIgxAvg");
	this.shape_176.setTransform(-19.2,185.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000033").s().p("AAlCMQgtAAgZgbQgZgaAAgvIAAizIBSAAIAAClQAAAUAGAGQAGAHATAAIAEAAIAABRg");
	this.shape_177.setTransform(-36.9,184.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000033").s().p("AhLBLQgfgfAAgsQAAgsAfgfQAfgeAuAAQArAAAfAfQAgAfAAArQgBAsgfAfQggAfgsAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAIgJAAgNQAAgMgIgJQgJgJgMAAQgLAAgJAJg");
	this.shape_178.setTransform(-67.2,188.7);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_179.setTransform(-85.1,184.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000033").s().p("AAPBoIAAhyQAAgSgPAAQgOAAAAASIAAByIhMAAIAAhxQAAgoAbgbQAagbAlAAQAsAAAbAfQAUAZAAAsIAABrg");
	this.shape_180.setTransform(-102.5,188.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000033").s().p("AhLBLQgfgfgBgsQABgsAfgfQAfgeAuAAQArAAAfAfQAgAfAAArQgBAsgfAfQgfAfgtAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAIgJAAgNQAAgMgIgJQgJgJgMAAQgLAAgJAJg");
	this.shape_181.setTransform(-125.6,188.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000033").s().p("AAvCNQgaAAgWgMQgXgMgOgVQgRgaAAgsIAAimIBLAAIAABOIAjAAIAABQIgjAAQAAAYAIAJQAIAKAUAAIAABQIgJAAg");
	this.shape_182.setTransform(-144.4,185.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000033").s().p("AAOBoIAAhyQAAgSgOAAQgOAAAAASIAAByIhMAAIAAhxQAAgoAagbQAagbAmAAQAsAAAaAfQAVAZAAAsIAABrg");
	this.shape_183.setTransform(-162.8,188.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000033").s().p("AATCPIAAiuQAAgQgEgHQgEgGgKAAQgTAAAAAdIAAAiIAXAAIAABKIgXAAIAABCIhTAAIAAixQAAgzAcgdQAcgcAyAAQAyAAAXAaQAYAZAAA3IAACzg");
	this.shape_184.setTransform(-186.5,184.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAheQAAgQgIgKQgIgJgNAAQgLAAgJAIQgJAJAAALQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJACgIAAQgtgBgfgeg");
	this.shape_185.setTransform(263,123.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000033").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_186.setTransform(245.2,120.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000033").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_187.setTransform(233.1,120.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_188.setTransform(220.9,119.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000033").s().p("AAvCNQgaAAgWgMQgXgMgOgVQgRgaAAgsIAAimIBLAAIAABOIAjAAIAABQIgjAAQAAAYAIAJQAIAKAUAAIAABQIgJAAg");
	this.shape_189.setTransform(207.7,120.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000033").s().p("AhJBnIAAhRIAEAAQASAAAIgHQAIgIABgSQACggAEgNQAEgMANgMQAWgXAnAAIAYAAIAABRQgRAAgFAHQgHAGgBAQQgGA7gnAZQgWAMgnAAg");
	this.shape_190.setTransform(193.1,124.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000033").s().p("AhLBLQgggfABgsQgBgsAggfQAggeAtAAQArAAAfAfQAfAfAAArQABAsggAfQggAfgsAAQgrAAgggfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAJgJAAgNQAAgMgJgJQgJgJgMAAQgLAAgJAJg");
	this.shape_191.setTransform(173.7,123.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000033").s().p("AhnBpQgrgqAAg+QAAg+ArgqQArgrA+AAQA+AAApAqQAdAdAMAzIhZAGQgPgugqAAQgaAAgRATQgRASAAAcQAAAbARASQARASAaAAQAZAAAQgQQAQgPACgeIBYACQgJBEgmAlQgmAlg+AAQg9AAgqgqg");
	this.shape_192.setTransform(146.1,120.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000033").s().p("Ag9CPIAAhCQAQAGALAAQAkAAAMgqQgUAMgTAAQgcAAgTgVQgSgVAAggIAAiBIBMAAIAABuQAAASAOABQAPgBAAgUIAAhsIBMAAIAAC2QABAygdAgQgiAlgwAAQgVAAgVgIg");
	this.shape_193.setTransform(108.5,128.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000033").s().p("AhLBLQgfgfgBgsQABgsAfgfQAfgeAuAAQArAAAgAfQAfAfgBArQAAAsgfAfQgfAfgtAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAJgJgBgNQABgMgJgJQgJgJgMAAQgLAAgJAJg");
	this.shape_194.setTransform(75.2,123.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000033").s().p("AgtCQIAAhGQAPAJAPAAQAUAAALgOQALgOAAgZIAAhMQAAgggaAAQgKAAgIAJQgIAIAAALQAAAMAIAHQAHAIALAAQAIAAAHgDIAABFQgQAGgPAAQglAAgZgcQgagbAAgpQAAgsAfgeQAfgeAsAAQAYAAAWAKQAWAJAMARQAVAaAAAzIAABDQAAA2gfAjQgfAigxAAQgPAAgXgIg");
	this.shape_195.setTransform(50.8,128.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000033").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_196.setTransform(33.3,120.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAheQAAgQgIgKQgIgJgNAAQgLAAgJAIQgJAJAAALQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJACgIAAQgtgBgfgeg");
	this.shape_197.setTransform(14.3,123.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000033").s().p("AhLBvQgfgfAAgsQAAgrAfgfQAgggAqAAIATACIAABTQgJgHgJAAQgMAAgIAIQgJAJAAAMQAAAMAJAJQAKAIAKAAQAeAAAAgpIAAimIBNAAIAACpQAAAvgZAeQgOARgVAKQgXAKgWAAQgtAAgggfg");
	this.shape_198.setTransform(-10,120.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_199.setTransform(-28,119.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000033").s().p("AATCMIAAkXIBTAAIAAEXgAhlCMIAAkXIBUAAIAABkIAVAAIAABJIgVAAIAABqg");
	this.shape_200.setTransform(-46.9,120.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000033").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_201.setTransform(-76.5,120.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000033").s().p("AhKBMQgggfAAgsQABgsAfggQAfgeAsAAQAtgBAfAfQAeAeAAAsIgBANIhzAAQgDgIAAgHQAAgKADgJIAmAAQgDgYgWAAQgNAAgJANQgKAMABATQAAATAIANQAJAMANgBQAMAAAKgLIAsA1QgfAYglgBQgtAAgegeg");
	this.shape_202.setTransform(-94,123.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000033").s().p("AhFBIQgVgYAAgsIAAhrIBNAAIAAByQAAASANAAQAOAAAAgSIAAhyIBNAAIAABxQAAAogaAbQgbAbgmAAQgrAAgaggg");
	this.shape_203.setTransform(-117.1,124.4);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000033").s().p("AgtCQIAAhGQAPAJAPAAQAUAAALgOQALgOAAgZIAAhMQAAgggaAAQgKAAgIAJQgIAIAAALQAAAMAIAHQAHAIALAAQAIAAAHgDIAABFQgQAGgPAAQglAAgZgcQgagbAAgpQAAgsAfgeQAfgeAsAAQAYAAAWAKQAWAJAMARQAVAaAAAzIAABDQAAA2gfAjQgfAigxAAQgPAAgXgIg");
	this.shape_204.setTransform(-141.1,128.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_205.setTransform(-158.8,119.3);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000033").s().p("ABBCPIAAi1QgBgNgCgFQgCgEgGAAQgNAAAAAVIAAC2IhRAAIAAi1QgBgNgCgFQgCgEgGAAQgNAAAAAWIAAC1IhTAAIAAjIQAAgmAWgYQAXgXAkAAQArAAAXAnQAOgVAQgJQAQgJAYAAQAmAAAUAXQAUAYAAAtIAADBg");
	this.shape_206.setTransform(-181.9,119.8);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000033").s().p("AhgBmIA+h7IhBAAIAAhQIC9AAIg/B7IBIAAIAABQg");
	this.shape_207.setTransform(25.5,59.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAhfQAAgPgIgKQgIgJgNAAQgLAAgJAIQgJAKAAAKQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJABgIAAQgtAAgfgeg");
	this.shape_208.setTransform(2.3,59.1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000033").s().p("AgwCIIAAjLIBLAAIAADLgAgqhYIAqgvIAxAAIgxAvg");
	this.shape_209.setTransform(-14.4,55.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000033").s().p("AgkCMIAAhTIANAAQBIABAAg8QAAg6hHAAIgbAAIAADHIhUAAIAAkXIBtAAQBGABAoAfQAwAnAABDQAAA+gpAoQgpAphAAAIgYgBg");
	this.shape_210.setTransform(-36,55.4);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000033").s().p("AhLBLQgfgfAAgsQAAgsAfgfQAfgeAuAAQArAAAfAfQAgAfAAArQgBAsgfAfQggAfgsAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAIgJAAgNQAAgMgIgJQgJgJgMAAQgLAAgJAJg");
	this.shape_211.setTransform(-74.4,59.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_212.setTransform(-92.3,54.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAnAAQAKAAAOACIAABSQgIgFgHAAQgUAAAAAfIAABhg");
	this.shape_213.setTransform(-103.9,58.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_214.setTransform(-117.9,54.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000033").s().p("Ag2COIAAitQAAgdAKgVQAMgaAagRQAZgRAcAAIAIABIAABQIgDAAQgPAAgIAJQgIAKAAASIAAAHIAiAAIAABPIgiAAIAABPg");
	this.shape_215.setTransform(-130.7,55.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAoAAQAIAAAPACIAABSQgIgFgGAAQgWAAAAAfIAABhg");
	this.shape_216.setTransform(-144,58.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000033").s().p("AhLBLQgggfABgsQgBgsAggfQAfgeAuAAQArAAAfAfQAgAfAAArQAAAsggAfQgfAfgtAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAIgJAAgNQAAgMgIgJQgJgJgMAAQgLAAgJAJg");
	this.shape_217.setTransform(-163.6,59.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000033").s().p("AhnCPIAAitQAAgbAGgRQAFgSANgPQAPgQAWgKQAWgJAXAAQAqAAAdAcQAdAdAAAqQAAAqgZAYQgYAYgwAAIgMAAIAAhJQAZAAgBgTQABgSgTAAQgTAAAAAYIAAC2g");
	this.shape_218.setTransform(-186.3,55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.button_1},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

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

	// Capa 1
	this.obregon2_mc = new lib.obregon2();
	this.obregon2_mc.parent = this;
	this.obregon2_mc.setTransform(1083.2,250.1,1,1,0,0,0,70.3,75.4);

	this.victoria2_mc = new lib.victoria2();
	this.victoria2_mc.parent = this;
	this.victoria2_mc.setTransform(869.7,348.1);

	this.huerta2_mc = new lib.huerta2();
	this.huerta2_mc.parent = this;
	this.huerta2_mc.setTransform(1081.3,75.7,1,1,0,0,0,68.4,74);

	this.hidalgo2_mc = new lib.hidalgo2();
	this.hidalgo2_mc.parent = this;
	this.hidalgo2_mc.setTransform(1012.9,348.1);

	this.iturbide2_mc = new lib.iturbide2();
	this.iturbide2_mc.parent = this;
	this.iturbide2_mc.setTransform(934.7,76.7,1,1,0,0,0,65,75);

	this.zapata2_mc = new lib.zapata2();
	this.zapata2_mc.parent = this;
	this.zapata2_mc.setTransform(944.7,247.1,1,1,0,0,0,75,72.4);

	this.villa2_mc = new lib.villa2();
	this.villa2_mc.parent = this;
	this.villa2_mc.setTransform(790.2,420.9,1,1,0,0,0,67,72.8);

	this.iturbide1_mc = new lib.iturbide1();
	this.iturbide1_mc.parent = this;
	this.iturbide1_mc.setTransform(645.8,422.5,1,1,0,0,0,65,74.4);

	this.ana2_mc = new lib.santaana2();
	this.ana2_mc.parent = this;
	this.ana2_mc.setTransform(508.9,420.1,1,1,0,0,0,70.3,72);

	this.madero2_mc = new lib.madero2();
	this.madero2_mc.parent = this;
	this.madero2_mc.setTransform(351.5,421,1,1,0,0,0,55.1,72.9);

	this.morelos2_mc = new lib.morelos2();
	this.morelos2_mc.parent = this;
	this.morelos2_mc.setTransform(209.2,422.5,1,1,0,0,0,55,74.4);

	this.moctezuma2_mc = new lib.moctezuma2();
	this.moctezuma2_mc.parent = this;
	this.moctezuma2_mc.setTransform(77.6,422.6,1,1,0,0,0,66.4,74.5);

	this.ana1_mc = new lib.santaana1();
	this.ana1_mc.parent = this;
	this.ana1_mc.setTransform(723.2,175);

	this.moctezuma1_mc = new lib.moctezuma1();
	this.moctezuma1_mc.parent = this;
	this.moctezuma1_mc.setTransform(647.2,249.7,1,1,0,0,0,66.4,75);

	this.victoria1_mc = new lib.victoria1();
	this.victoria1_mc.parent = this;
	this.victoria1_mc.setTransform(438.6,175);

	this.morelos1_mc = new lib.morelos1();
	this.morelos1_mc.parent = this;
	this.morelos1_mc.setTransform(296.4,175);

	this.obregon1_mc = new lib.obregon1();
	this.obregon1_mc.parent = this;
	this.obregon1_mc.setTransform(224.5,249.1,1,1,0,0,0,70.3,74.4);

	this.diaz2_mc = new lib.porfirio2();
	this.diaz2_mc.parent = this;
	this.diaz2_mc.setTransform(76.7,247.5,1,1,0,0,0,65.5,72.8);

	this.zapata1_mc = new lib.zapata1();
	this.zapata1_mc.parent = this;
	this.zapata1_mc.setTransform(798,74,1,1,0,0,0,75,72);

	this.diaz1_mc = new lib.porfirio1();
	this.diaz1_mc.parent = this;
	this.diaz1_mc.setTransform(646.3,73.7,1,1,0,0,0,65.5,72);

	this.hidalgo1_mc = new lib.hidago1();
	this.hidalgo1_mc.parent = this;
	this.hidalgo1_mc.setTransform(507,74,1,1,0,0,0,68.4,72);

	this.madero1_mc = new lib.madero1();
	this.madero1_mc.parent = this;
	this.madero1_mc.setTransform(296.4,2);

	this.villa1_mc = new lib.villa1();
	this.villa1_mc.parent = this;
	this.villa1_mc.setTransform(221.2,73.7,1,1,0,0,0,67,72);

	this.huerta1_mc = new lib.huerta1();
	this.huerta1_mc.parent = this;
	this.huerta1_mc.setTransform(79.6,75.7,1,1,0,0,0,68.4,74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.huerta1_mc},{t:this.villa1_mc},{t:this.madero1_mc},{t:this.hidalgo1_mc},{t:this.diaz1_mc},{t:this.zapata1_mc},{t:this.diaz2_mc},{t:this.obregon1_mc},{t:this.morelos1_mc},{t:this.victoria1_mc},{t:this.moctezuma1_mc},{t:this.ana1_mc},{t:this.moctezuma2_mc},{t:this.morelos2_mc},{t:this.madero2_mc},{t:this.ana2_mc},{t:this.iturbide1_mc},{t:this.villa2_mc},{t:this.zapata2_mc},{t:this.iturbide2_mc},{t:this.hidalgo2_mc},{t:this.huerta2_mc},{t:this.victoria2_mc},{t:this.obregon2_mc}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.5,-0.3,1133.6,511.4);


// stage content:
(lib.memomex14 = function(mode,startPosition,loop) {
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
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(675,380);

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(2));

	// Layer 5
	this.menurespuestas = new lib.personajesmenu();
	this.menurespuestas.parent = this;
	this.menurespuestas.setTransform(443.1,329.7,1,1,0,0,0,159.4,212.8);
	this.menurespuestas._off = true;

	this.timeline.addTween(cjs.Tween.get(this.menurespuestas).wait(1).to({_off:false},0).wait(1));

	// Actions
	this.delay = new lib.delay();
	this.delay.parent = this;
	this.delay.setTransform(-331.9,161.2,0.89,0.89,0,0,0,47.1,26.9);
	this.delay._off = true;

	this.timeline.addTween(cjs.Tween.get(this.delay).wait(1).to({_off:false},0).wait(1));

	// Layer 9
	this.triunfo = new lib.triunfo();
	this.triunfo.parent = this;
	this.triunfo.setTransform(1149.9,614.3,0.788,0.788,0,0,0,282.1,181.2);
	this.triunfo.alpha = 0.93;

	this.instrucciones = new lib.instructions();
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
	this.ans.setTransform(1545.1,288.4,1.85,1.85);

	this.trys = new cjs.Text("7", "27px 'Arial'", "#FFFFFF");
	this.trys.name = "trys";
	this.trys.textAlign = "center";
	this.trys.lineHeight = 32;
	this.trys.parent = this;
	this.trys.setTransform(1416.2,36.8,1.85,1.85);

	this.equis = new lib.espantosax();
	this.equis.parent = this;
	this.equis.setTransform(1031.3,602.4,1.25,1.25,0,0,0,0,0.1);

	this.score = new cjs.Text("7", "27px 'Arial'", "#FFFFFF");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 32;
	this.score.parent = this;
	this.score.setTransform(1509.6,466.5,1.85,1.85);

	this.memorama = new lib.memoramas();
	this.memorama.parent = this;
	this.memorama.setTransform(502.9,380.5,1.15,1.15,0,0,0,431.9,321.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.memorama},{t:this.score},{t:this.equis},{t:this.trys},{t:this.ans}]},1).wait(1));

	// Layer 4
	this.bios = new lib.bios();
	this.bios.parent = this;
	this.bios.setTransform(756.2,607.1,1,1,0,0,0,61,90.5);
	this.bios._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bios).wait(1).to({_off:false},0).wait(1));

	// Layer 8
	this.instance_1 = new lib.moctezuma();
	this.instance_1.parent = this;
	this.instance_1.setTransform(243.3,204.9,1.2,1.2,3.7);

	this.instance_2 = new lib.zapata();
	this.instance_2.parent = this;
	this.instance_2.setTransform(876.5,300.9,1.2,1.2,-17.2);

	this.instance_3 = new lib.santaanna();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1007,179,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).to({state:[]},1).wait(1));

	// Layer 1
	this.instance_4 = new lib.LOGONEW();
	this.instance_4.parent = this;
	this.instance_4.setTransform(23,681,0.755,0.755);

	this.inicio_btn = new lib.inicio();
	this.inicio_btn.parent = this;
	this.inicio_btn.setTransform(674.2,379.4,2,2,0,0,0,46.3,46.3);
	new cjs.ButtonHelper(this.inicio_btn, 0, 1, 2);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.inicio_btn},{t:this.instance_4}]}).to({state:[]},1).wait(1));

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
	width: 1350,
	height: 760,
	fps: 24,
	color: "#000033",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/memomex14_atlas_.png", id:"memomex14_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;