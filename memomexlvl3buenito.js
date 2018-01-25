(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"memomexlvl3buenito_atlas_", frames: [[0,832,135,180],[137,832,130,173],[155,626,130,173],[0,0,225,225],[162,424,130,173],[0,424,160,200],[269,801,130,173],[0,227,194,195],[426,350,100,100],[287,599,130,173],[359,0,130,173],[294,402,130,173],[227,0,130,173],[328,175,130,173],[401,774,130,173],[196,227,130,173],[419,577,130,173],[0,626,153,204]]}
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



(lib.calleja = function() {
	this.spriteSheet = ss["memomexlvl3buenito_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.carrillopuerto = function() {
	this.spriteSheet = ss["memomexlvl3buenito_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.fidelvelazques = function() {
	this.spriteSheet = ss["memomexlvl3buenito_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.fondo = function() {
	this.spriteSheet = ss["memomexlvl3buenito_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.gamiz = function() {
	this.spriteSheet = ss["memomexlvl3buenito_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hojita = function() {
	this.spriteSheet = ss["memomexlvl3buenito_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.juanrulfo = function() {
	this.spriteSheet = ss["memomexlvl3buenito_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.logomzt = function() {
	this.spriteSheet = ss["memomexlvl3buenito_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.LOGONEW = function() {
	this.spriteSheet = ss["memomexlvl3buenito_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.lombardotoledano = function() {
	this.spriteSheet = ss["memomexlvl3buenito_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.mariacordoba = function() {
	this.spriteSheet = ss["memomexlvl3buenito_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.mariomolina = function() {
	this.spriteSheet = ss["memomexlvl3buenito_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.max = function() {
	this.spriteSheet = ss["memomexlvl3buenito_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.ocampo = function() {
	this.spriteSheet = ss["memomexlvl3buenito_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.raton = function() {
	this.spriteSheet = ss["memomexlvl3buenito_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.ruizccortines = function() {
	this.spriteSheet = ss["memomexlvl3buenito_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.siqueiros = function() {
	this.spriteSheet = ss["memomexlvl3buenito_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.tarjetaBack = function() {
	this.spriteSheet = ss["memomexlvl3buenito_atlas_"];
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
	this.shape_82.graphics.f("#660000").s().p("AgbAvQgKgEgGgGQgFgHAAgGQAAgEADgDQAEgDAEAAQAFAAACACIAFAFQAEAHAHADQAGADAKABQAIgBAFgDQAGgDAAgFQAAgGgGgDQgFgDgNgDQgOgDgKgDQgJgDgFgGQgGgGAAgIQAAgHAFgHQAGgHAJgEQALgEANAAQALAAAIACQAJACAHAEQAFADAEAEQACAEAAAEQABAEgEADQgEADgFAAQgFAAgDgDIgHgGQgDgEgFgCQgEgCgHAAQgIAAgEADQgGADAAAEQABAEADADIALAEIAQAEQAOACAIAEQAIADAEAGQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgLgEg");
	this.shape_82.setTransform(223.6,203.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAGgKAEQgIAEgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAIgHQAHgGANgDIANgCIASgDIAQgFQAAgKgEgEQgEgEgMAAQgLAAgFACQgGACgEAGIgFAHQgBACgGgBQgFABgDgDQgEgDAAgEQAAgHAGgFQAFgHALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAOIAAAOIgBAOQABAHADAIIACAJQAAAFgEACQgEAEgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAGAFADQAEAEAIABQAIAAAIgEQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_83.setTransform(211.5,203.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#660000").s().p("AgvBDQgGgDAAgFQAAgFADgDQADgBAGAAIAEAAIAFABQAFgBADgBQACgBADgEIAFgJIADgFIgkhNQgDgHAAgCIACgHQACgCADgBQADgCAEAAQAGAAADADQAEAEACAGIAXA9IAXg4IAFgMQACgEADgBQACgBAFAAIAGABQADABACADIABAGIgBAEIgDAHIglBVQgFAKgEAHQgEAGgHAEQgIADgNAAQgNAAgGgCg");
	this.shape_84.setTransform(199.4,205.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAGgKAEQgIAEgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAIgHQAHgGANgDIAOgCIARgDIAQgFQAAgKgEgEQgEgEgNAAQgKAAgFACQgFACgFAGIgFAHQgBACgGgBQgFABgDgDQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAIAAAOIAAAOIAAAOQAAAHADAIIACAJQAAAFgEACQgEAEgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAGAFADQAFAEAHABQAIAAAIgEQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_85.setTransform(187.7,203.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#660000").s().p("AAyBAQgFgEAAgHIAAhcIgYBVIgEAMQgBAEgFADQgEADgHAAQgFAAgDgCQgEgCgCgDIgDgHIgDgIIgZhVIAABcQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhqQAAgIAFgDQAFgDAJAAIAKAAIAMABQAFABABAEIAFALIAVBJIAXhJIAEgLQABgEAFgBIAMgBIAJAAQAKAAAFADQAFADAAAIIAABqQAAAHgEAEQgEAEgGAAQgHAAgDgEg");
	this.shape_86.setTransform(172.4,201.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#660000").s().p("AgbAvQgLgEgFgGQgFgHAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAFQAFAHAGADQAGADAJABQAJgBAGgDQAFgDAAgFQAAgGgFgDQgHgDgLgDQgPgDgKgDQgJgDgGgGQgFgGAAgIQAAgHAFgHQAFgHAKgEQALgEAOAAQAKAAAIACQAJACAHAEQAFADAEAEQACAEAAAEQAAAEgDADQgDADgGAAQgFAAgDgDIgHgGQgDgEgFgCQgEgCgGAAQgIAAgGADQgEADAAAEQgBAEAEADIAKAEIARAEQAOACAIAEQAIADAEAGQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgOAAgMgEg");
	this.shape_87.setTransform(152.3,203.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAGgJAEQgJAEgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAIgHQAHgGANgDIAOgCIARgDIARgFQgBgKgEgEQgEgEgNAAQgKAAgFACQgGACgEAGIgFAHQgBACgGgBQgFABgDgDQgEgDAAgEQAAgHAFgFQAGgHALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAIAAAOIAAAOIAAAOQAAAHACAIIADAJQAAAFgEACQgFAEgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAGAFADQAFAEAHABQAIAAAHgEQAHgDAEgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_88.setTransform(140.1,203.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#660000").s().p("AAbAvQgEgEgBgHIAAgpQAAgMgEgHQgDgGgMgBQgHAAgGAFQgGADgDAIQgCAFgBAOIAAAgQAAAHgDAEQgEAEgHAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIAEgEQADgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAHgIAJgEQAIgFAMAAQALAAAJAFQAJAEAEAIQADAEABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgHAAgDgEg");
	this.shape_89.setTransform(127.3,203.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_90.setTransform(114.5,203.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#660000").s().p("AgbBCQgMgEgGgFQgGgGAAgHQAAgEADgDQAEgCAFgBQAGABAFAEIAFAFIAFAFIAHACIAKABQAKAAAGgCQAGgDADgFQACgFABgFIAAgSQgGAHgJAFQgJAEgLAAQgOAAgLgGQgKgHgGgLQgGgLAAgPQAAgLAEgJQADgKAHgFQAGgHAJgDQAIgDAKAAQALAAAJAEQAJAEAIAIIAAgDQAAgGAEgEQADgDAGAAQAIAAADAEQADAFAAAJIAABIQAAAMgDAJQgDAJgHAGQgHAFgLAEQgKACgQAAQgOAAgMgDgAgTgpQgHAHAAAPQAAAQAHAHQAIAHALABQAHAAAHgEQAGgEAEgFQAEgHAAgKQAAgOgIgJQgIgJgMABQgLAAgIAIg");
	this.shape_91.setTransform(101.6,205.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#660000").s().p("AgQBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAHAAQAGAAADAEQAEADAAAHIAABHQAAAIgEAEQgDAEgGAAQgHAAgDgEgAgVgtQAAgBADgEIAFgIQAEgGADgCQADgCAFAAIAOAAQAGAAAAABIgGAGIgMAKIgHAGQgGADgHAAQgFAAAAgDg");
	this.shape_92.setTransform(93,201.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgCQgGAFgFAEQgGAEgHACQgFACgHAAQgLAAgJgFQgIgDgHgIQgGgGgDgKQgEgKAAgLQAAgWAOgNQANgNAVAAQALAAAJADQAIAEAIAIIAAglQAAgIADgDQAEgEAGgBQAHAAADAEQAEAEAAAHIAABtQAAAHgEADQgDAFgHAAQgFAAgEgFgAgNgJQgGAEgDAGQgEAHAAAKQAAALAEAGQADAIAHADQAFAEAHAAQAIAAAGgEQAGgDAEgHQAEgHAAgLQAAgKgEgHQgEgGgGgEQgGgEgIABQgHAAgGADg");
	this.shape_93.setTransform(82.4,201.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#660000").s().p("AAbAvQgFgEAAgHIAAgpQAAgMgDgHQgFgGgLgBQgHAAgGAFQgGADgEAIQgCAFAAAOIAAAgQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgEQAEgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAHgIAKgEQAHgFAMAAQALAAAJAFQAJAEAFAIQACAEABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_94.setTransform(69.5,203.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEADAAAGQAAAGgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_95.setTransform(60.1,201.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#660000").s().p("AgaAvQgLgEgGgGQgFgHAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAFQAFAHAGADQAGADAKABQAIgBAFgDQAGgDAAgFQAAgGgGgDQgFgDgNgDQgPgDgIgDQgKgDgFgGQgGgGAAgIQAAgHAFgHQAGgHAKgEQAJgEAOAAQALAAAIACQAKACAFAEQAGADADAEQADAEAAAEQAAAEgDADQgEADgGAAQgDAAgEgDIgHgGQgDgEgEgCQgFgCgHAAQgHAAgFADQgGADAAAEQABAEADADIALAEIAQAEQANACAJAEQAIADAFAGQAEAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgKgEg");
	this.shape_96.setTransform(46,203.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAAKAEQALADAHAIQAIAGAEAJQAEAJAAALQAAALgEAJQgEAKgIAHQgHAHgLADQgKAEgNAAQgMAAgKgEgAgOgbQgHADgDAIQgEAHAAAJQAAAKAEAHQADAIAHAEQAGADAIAAQANAAAIgJQAHgIAAgPQAAgPgHgIQgIgJgNAAQgIAAgGAFg");
	this.shape_97.setTransform(33.8,203.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhsQAAgHADgDQAEgEAGgBQAGABAEAEQAEADAAAHIAABsQAAAHgEAEQgEAFgGAAQgGAAgDgFg");
	this.shape_98.setTransform(24.4,201.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#660000").s().p("AAbAvQgFgEAAgHIAAgpQAAgMgDgHQgFgGgLgBQgHAAgGAFQgGADgEAIQgCAFAAAOIAAAgQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgEQAEgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAHgIAKgEQAHgFAMAAQALAAAJAFQAJAEAFAIQACAEABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_99.setTransform(9.7,203.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAAKAEQALADAHAIQAIAGAEAJQAEAJAAALQAAALgEAJQgEAKgIAHQgHAHgLADQgKAEgNAAQgMAAgLgEgAgOgbQgHADgDAIQgEAHABAJQgBAKAEAHQADAIAHAEQAGADAIAAQANAAAHgJQAIgIAAgPQAAgPgIgIQgHgJgNAAQgHAAgHAFg");
	this.shape_100.setTransform(-3.3,203.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#660000").s().p("AgmAlQgPgNAAgXQAAgOAHgMQAHgMAMgGQANgHARAAQALAAAKADQAJADAGAEQAHAFADAFQAEAFAAAEQAAAFgEADQgEADgFAAQgEAAgCgBIgGgGQgFgHgGgDQgFgEgJAAQgMAAgIAJQgHAJAAAOQAAAHACAGQACAGADAEQAEAEAGACQAFACAFAAQAJAAAGgDQAGgEAFgHQACgEAEgCQADgDAEAAQAFAAAEAEQADADAAAEQAAAFgDAFQgDAFgHAFQgGAFgKADQgKADgNAAQgZAAgPgOg");
	this.shape_101.setTransform(-16.2,203.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAAKAEQALADAHAIQAIAGAEAJQAEAJAAALQAAALgEAJQgEAKgIAHQgHAHgLADQgKAEgNAAQgMAAgKgEgAgOgbQgHADgDAIQgDAHgBAJQABAKADAHQADAIAHAEQAGADAIAAQANAAAIgJQAHgIAAgPQAAgPgHgIQgIgJgNAAQgHAAgHAFg");
	this.shape_102.setTransform(-34.3,203.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#660000").s().p("AgbAvQgLgEgFgGQgFgHAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAFQAFAHAGADQAGADAJABQAJgBAGgDQAFgDAAgFQAAgGgFgDQgHgDgLgDQgPgDgKgDQgJgDgGgGQgFgGAAgIQAAgHAFgHQAFgHAKgEQALgEAOAAQAJAAAJACQAJACAHAEQAFADAEAEQACAEAAAEQAAAEgDADQgDADgGAAQgFAAgDgDIgHgGQgDgEgFgCQgEgCgGAAQgIAAgGADQgEADAAAEQgBAEAEADIAKAEIARAEQAOACAIAEQAIADAEAGQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgOAAgMgEg");
	this.shape_103.setTransform(-46.6,203.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEADAAAGQAAAGgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_104.setTransform(-55.3,201.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#660000").s().p("AA5AvQgFgEAAgIIAAgpIgBgNQgBgEgDgEQgDgDgIgBQgFAAgFAEQgFADgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgGAAgEgEQgDgEAAgIIAAgnIgBgOQgBgGgDgDQgEgDgHgBQgNAAgFAJQgFAIAAAQIAAAhQAAAIgEAEQgDAEgHAAQgGAAgEgEQgFgEAAgIIAAhGQAAgIAEgDQADgEAHAAQAFAAAFADQADAEAAAGIAAADQAIgJAIgDQAJgDAKgBQALABAHADQAHAEAGAIQAGgIAJgEQAJgDAJgBQAMAAAJAFQAIAEAEAHQAEAHAAAOIAAAwQAAAIgEAEQgEAEgHAAQgGAAgEgEg");
	this.shape_105.setTransform(-67.7,203.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAALAEQAKADAIAIQAHAGAEAJQAEAJAAALQAAALgEAJQgEAKgHAHQgIAHgKADQgLAEgNAAQgMAAgLgEgAgOgbQgHADgDAIQgDAHAAAJQAAAKADAHQADAIAHAEQAGADAIAAQANAAAHgJQAIgIAAgPQAAgPgIgIQgHgJgNAAQgIAAgGAFg");
	this.shape_106.setTransform(-83.6,203.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEgBQgHABgDADQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_107.setTransform(-93.4,203.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#660000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgHAEgEQADgDAHAAQAFAAAEADQAEAEAAAGIAAADQAJgIAIgEQAJgEAJAAQAOAAALAGQALAGAGALQAHAMAAAPQAAAMgEAJQgEAJgGAGQgHAHgIAEQgJADgLABQgKgBgJgEQgJgEgHgIIAAAlQAAAQgNAAQgJAAgCgEgAgTgpQgHAHAAAQQAAAPAHAIQAJAIALAAQAHAAAGgEQAGgDADgHQAEgHAAgKQAAgKgDgHQgDgHgHgEQgGgEgHABQgLAAgJAIg");
	this.shape_108.setTransform(-105.2,205.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#660000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgCgEgDgEQgEgDgGgBQgGAAgFAEQgFADgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgEgEQgFgEAAgIIAAgnIgBgOQAAgGgDgDQgEgDgGgBQgPAAgEAJQgEAIgBAQIAAAhQAAAIgDAEQgFAEgGAAQgGAAgFgEQgEgEAAgIIAAhGQAAgIAEgDQAEgEAFAAQAHAAADADQAFAEAAAGIAAADQAHgJAJgDQAIgDAKgBQALABAIADQAGAEAFAIQAIgIAIgEQAIgDALgBQALAAAIAFQAJAEAEAHQAEAHAAAOIAAAwQAAAIgEAEQgFAEgGAAQgHAAgEgEg");
	this.shape_109.setTransform(-121.6,203.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAAKAEQALADAHAIQAIAGAEAJQAEAJAAALQAAALgEAJQgEAKgIAHQgHAHgLADQgKAEgNAAQgMAAgLgEgAgOgbQgGADgEAIQgEAHAAAJQAAAKAEAHQAEAIAGAEQAGADAIAAQANAAAIgJQAHgIAAgPQAAgPgHgIQgIgJgNAAQgIAAgGAFg");
	this.shape_110.setTransform(-137.6,203.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#660000").s().p("AgmAlQgPgNAAgXQAAgOAHgMQAHgMAMgGQANgHARAAQALAAAKADQAJADAGAEQAHAFADAFQAEAFAAAEQAAAFgEADQgEADgFAAQgEAAgCgBIgGgGQgFgHgGgDQgFgEgJAAQgMAAgIAJQgHAJAAAOQAAAHACAGQACAGADAEQAEAEAGACQAFACAFAAQAJAAAGgDQAGgEAFgHQACgEAEgCQADgDAEAAQAFAAAEAEQADADAAAEQAAAFgDAFQgDAFgHAFQgGAFgKADQgKADgNAAQgZAAgPgOg");
	this.shape_111.setTransform(-150.4,203.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#660000").s().p("AgvBDQgGgDAAgFQAAgFADgDQADgBAGAAIAEAAIAFABQAFgBADgBQACgBADgEIAFgJIADgFIgkhNQgDgHAAgCIACgHQACgCADgBQADgCAEAAQAGAAADADQAEAEACAGIAXA9IAXg4IAFgMQACgEADgBQACgBAFAAIAGABQADABACADIABAGIgBAEIgDAHIglBVQgFAKgEAHQgEAGgHAEQgIADgNAAQgNAAgGgCg");
	this.shape_112.setTransform(-168.2,205.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#660000").s().p("AgaAvQgMgEgFgGQgFgHAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAFQAEAHAHADQAGADAJABQAJgBAGgDQAFgDAAgFQAAgGgFgDQgHgDgLgDQgQgDgIgDQgKgDgGgGQgFgGAAgIQAAgHAFgHQAFgHALgEQAKgEAOAAQAJAAAKACQAIACAGAEQAGADADAEQAEAEAAAEQgBAEgDADQgDADgHAAQgEAAgDgDIgHgGQgDgEgEgCQgFgCgGAAQgJAAgFADQgEADAAAEQAAAEADADIAKAEIARAEQANACAJAEQAIADAFAGQAEAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgPAAgLgEg");
	this.shape_113.setTransform(-185,203.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_114.setTransform(-197.1,203.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhsQAAgHADgDQAEgEAGgBQAGABAEAEQAEADAAAHIAABsQAAAHgEAEQgEAFgGAAQgGAAgDgFg");
	this.shape_115.setTransform(-206.3,201.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAGgKAEQgIAEgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAIgHQAHgGANgDIANgCIASgDIAQgFQAAgKgEgEQgEgEgNAAQgKAAgFACQgGACgEAGIgFAHQgBACgGgBQgFABgDgDQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAAOIAAAOIgBAOQABAHADAIIACAJQAAAFgEACQgEAEgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAGAFADQAEAEAIABQAIAAAIgEQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_116.setTransform(-215.6,203.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEADAAAGQAAAGgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_117.setTransform(-224.8,201.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#660000").s().p("AgmAlQgPgNAAgXQAAgOAHgMQAHgMAMgGQANgHARAAQALAAAKADQAJADAGAEQAHAFADAFQAEAFAAAEQAAAFgEADQgEADgFAAQgEAAgCgBIgGgGQgFgHgGgDQgFgEgJAAQgMAAgIAJQgHAJAAAOQAAAHACAGQACAGADAEQAEAEAGACQAFACAFAAQAJAAAGgDQAGgEAFgHQACgEAEgCQADgDAEAAQAFAAAEAEQADADAAAEQAAAFgDAFQgDAFgHAFQgGAFgKADQgKADgNAAQgZAAgPgOg");
	this.shape_118.setTransform(-234.1,203.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAAKAEQALADAHAIQAIAGAEAJQAEAJAAALQAAALgEAJQgEAKgIAHQgHAHgLADQgKAEgNAAQgMAAgLgEgAgOgbQgGADgEAIQgDAHAAAJQAAAKADAHQAEAIAGAEQAGADAIAAQANAAAHgJQAIgIAAgPQAAgPgIgIQgHgJgNAAQgHAAgHAFg");
	this.shape_119.setTransform(-246.8,203.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#660000").s().p("AgbAvQgKgEgGgGQgFgHAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAFQAEAHAHADQAGADAKABQAIgBAFgDQAGgDAAgFQAAgGgGgDQgFgDgNgDQgOgDgKgDQgJgDgFgGQgGgGAAgIQAAgHAFgHQAGgHAJgEQAKgEAOAAQALAAAIACQAKACAFAEQAGADADAEQADAEAAAEQABAEgEADQgEADgFAAQgEAAgEgDIgHgGQgDgEgFgCQgEgCgHAAQgHAAgFADQgGADAAAEQABAEADADIALAEIAQAEQANACAJAEQAIADAEAGQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgLgEg");
	this.shape_120.setTransform(-259.2,203.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#660000").s().p("AgbAvQgLgFgFgFQgFgHAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAFQAEAHAHADQAGAEAJAAQAJAAAGgEQAFgDAAgFQAAgGgFgDQgHgDgLgDQgPgDgKgDQgJgDgGgGQgFgFAAgJQAAgIAFgGQAFgHAKgEQALgEAOAAQAJAAAKACQAJACAGAEQAFADAEAEQADAEAAAEQgBAFgDACQgDADgHAAQgEAAgDgCIgHgHQgDgEgFgCQgEgCgGAAQgIAAgGADQgEADAAAEQgBAEAEADIAKAEIARAEQANACAJAEQAIAEAEAFQAFAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgPAAgMgEg");
	this.shape_121.setTransform(251.6,179.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAGgKAEQgIAEgMAAQgLAAgJgEQgIgEgFgGQgEgHAAgIQAAgJAHgIQAIgGANgDIANgCIASgDIAQgFQAAgKgEgEQgEgEgMgBQgKABgGACQgFACgEAGIgGAHQgCACgFgBQgFABgDgDQgEgDAAgEQAAgHAGgFQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAOIAAAOIgBAOQAAAHADAIIADAJQAAAFgEACQgFAEgFAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAGAFAIAAQAHAAAHgEQAIgDADgFQADgGAAgNIAAgDIgSAEg");
	this.shape_122.setTransform(239.5,179.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDADQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_123.setTransform(229.6,179.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#660000").s().p("AgEBEIgJgEIgHgEIgIgIIAAADQAAAHgDAEQgEADgGAAQgHAAgDgDQgEgEAAgHIAAhsQAAgIAEgEQADgDAHAAQAGAAAEADQADAEAAAHIAAAmQAJgIAHgDQAJgEALAAQAOAAALAGQALAFAGAMQAGAKAAAPQAAAMgEAKQgDAJgGAGQgGAHgJAFQgJADgLAAQgHAAgFgBgAgNgJQgGAEgEAGQgEAIAAAKQABAPAHAIQAIAIAMAAQAKAAAJgIQAHgJAAgPQAAgJgDgIQgEgGgFgEQgGgDgIAAQgIAAgGADg");
	this.shape_124.setTransform(217.8,177.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgKQgEgJAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAIAAALQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgbQgHADgDAIQgDAHAAAJQAAAKADAHQADAIAHADQAGAEAIAAQANAAAHgJQAIgIAAgPQAAgPgIgIQgHgJgNAAQgIAAgGAFg");
	this.shape_125.setTransform(204.4,179.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#660000").s().p("AgbAvQgKgFgGgFQgFgHAAgGQAAgEADgDQAEgDAEAAQAFAAACACIAFAFQAFAHAGADQAGAEAKAAQAIAAAFgEQAGgDAAgFQAAgGgGgDQgFgDgMgDQgPgDgKgDQgJgDgFgGQgGgFAAgJQAAgIAFgGQAGgHAJgEQALgEAOAAQAKAAAIACQAJACAHAEQAFADAEAEQACAEAAAEQABAFgEACQgEADgFAAQgFAAgDgCIgHgHQgDgEgFgCQgEgCgGAAQgJAAgEADQgGADAAAEQABAEADADIALAEIAQAEQAOACAIAEQAIAEAEAFQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgLgEg");
	this.shape_126.setTransform(186.7,179.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgDIgKAJQgHAEgGACQgGABgIAAQgLAAgIgDQgIgEgFgGQgFgJAAgPIAAgwQAAgHAEgEQADgEAHAAQAGAAAEAEQAFAEAAAHIAAAnQgBAJACAGQACAFAFAEQAEAEAHgBQAHAAAFgDQAHgEADgGQACgFABgSIAAgeQAAgHADgEQAFgEAGAAQAGAAAEAEQAEAEAAAHIAABIQAAAGgEAEQgDAEgHAAQgGAAgDgEg");
	this.shape_127.setTransform(174.4,179.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#660000").s().p("AgaAvQgMgFgFgFQgFgHAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAFQAEAHAHADQAGAEAJAAQAJAAAGgEQAFgDAAgFQAAgGgFgDQgHgDgLgDQgPgDgJgDQgKgDgGgGQgFgFAAgJQAAgIAFgGQAFgHALgEQAKgEAOAAQAJAAAKACQAJACAGAEQAFADAEAEQADAEAAAEQgBAFgDACQgDADgHAAQgEAAgDgCIgHgHQgDgEgFgCQgEgCgGAAQgIAAgGADQgEADAAAEQgBAEAEADIAKAEIARAEQANACAJAEQAIAEAEAFQAFAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgPAAgLgEg");
	this.shape_128.setTransform(162.1,179.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDADQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_129.setTransform(146.9,179.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgKQgEgJAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAIAAALQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgbQgHADgDAIQgDAHAAAJQAAAKADAHQADAIAHADQAGAEAIAAQANAAAHgJQAIgIAAgPQAAgPgIgIQgHgJgNAAQgIAAgGAFg");
	this.shape_130.setTransform(135.1,179.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#660000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgIADgDQAFgEAFABQAGAAAFADQADAEAAAGIAAAEQAJgJAIgEQAIgEAKAAQAOAAALAGQALAGAHALQAGAMAAAPQAAAMgEAJQgDAJgHAGQgGAHgKAEQgIADgLABQgKgBgJgEQgIgEgIgJIAAAmQAAAQgOAAQgHAAgDgEgAgSgpQgJAHAAAQQAAAPAJAIQAIAIAKAAQAIAAAGgEQAGgDAEgHQADgGAAgLQAAgKgDgHQgEgHgFgEQgHgEgIABQgKgBgIAJg");
	this.shape_131.setTransform(122.1,181.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgKQgEgJAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAIAAALQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgbQgGADgEAIQgDAHgBAJQABAKADAHQAEAIAGADQAGAEAIAAQANAAAIgJQAHgIAAgPQAAgPgHgIQgIgJgNAAQgHAAgHAFg");
	this.shape_132.setTransform(103.3,179.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#660000").s().p("AgmAlQgPgNAAgXQAAgOAHgMQAHgMAMgGQANgHARAAQALAAAKADQAJADAGAEQAHAFADAFQAEAFAAAEQAAAFgEADQgEADgFAAQgEAAgCgBIgGgGQgFgHgGgDQgFgEgJAAQgMAAgIAJQgHAJAAAOQAAAHACAGQACAGADAEQAEAEAGACQAFACAFAAQAJAAAGgDQAGgEAFgHQACgEAEgCQADgDAEAAQAFAAAEAEQADADAAAEQAAAFgDAFQgDAFgHAFQgGAFgKADQgKADgNAAQgZAAgPgOg");
	this.shape_133.setTransform(90.4,179.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAGgKAEQgIAEgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgJAIgIQAHgGANgDIANgCIASgDIAQgFQAAgKgEgEQgEgEgNgBQgKABgFACQgGACgEAGIgFAHQgBACgGgBQgFABgDgDQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAAOIAAAOIgBAOQABAHADAIIACAJQAAAFgEACQgEAEgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAFAEQAEAFAIAAQAIAAAIgEQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_134.setTransform(77.8,179.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgwIgEAAQgGAAgDgCQgEgDAAgEQAAgEAEgCQADgDAHAAIADAAIAAgOIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABADIAAALIAAAQIALAAQAGAAADADQADACAAAEQAAAGgEABQgFACgIAAIgGAAIAAAuIABAJQAAADACABQACACAFAAIAHgBIAHAAQADAAADACQADADAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_135.setTransform(68,177.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#660000").s().p("AgaAvQgMgFgFgFQgFgHAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAFQAEAHAHADQAGAEAJAAQAJAAAGgEQAFgDAAgFQAAgGgFgDQgGgDgMgDQgQgDgIgDQgKgDgGgGQgFgFAAgJQAAgIAFgGQAFgHALgEQAKgEAOAAQAJAAAKACQAIACAGAEQAGADADAEQAEAEAAAEQgBAFgDACQgDADgHAAQgEAAgDgCIgHgHQgDgEgEgCQgFgCgGAAQgJAAgFADQgEADAAAEQAAAEADADIAKAEIARAEQANACAJAEQAIAEAFAFQAEAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgPAAgLgEg");
	this.shape_136.setTransform(58,179.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADABAAAFQAAADgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_137.setTransform(45.9,179.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgFAGgGAEQgGAEgHACQgFABgHAAQgLAAgIgDQgJgFgHgHQgGgGgDgKQgEgKAAgLQAAgWAOgNQAMgNAWAAQALAAAJADQAIAEAIAIIAAglQAAgIADgEQAEgDAGAAQAHAAADADQAEAEAAAHIAABtQAAAHgEAEQgDADgHAAQgFAAgEgDgAgNgJQgHAEgDAGQgDAIAAAJQAAALADAGQAEAIAGADQAHAEAGAAQAIAAAGgEQAGgDAEgHQAEgHAAgLQAAgJgEgIQgEgGgGgEQgGgEgIABQgHAAgGADg");
	this.shape_138.setTransform(32.5,177.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADABAAAFQAAADgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_139.setTransform(14.4,179.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgFAGgGAEQgGAEgHACQgFABgHAAQgLAAgIgDQgJgFgHgHQgGgGgDgKQgEgKAAgLQAAgWAOgNQAMgNAWAAQALAAAJADQAIAEAIAIIAAglQAAgIADgEQAEgDAGAAQAHAAADADQAEAEAAAHIAABtQAAAHgEAEQgDADgHAAQgFAAgEgDgAgNgJQgHAEgDAGQgDAIAAAJQAAALADAGQAEAIAGADQAHAEAGAAQAIAAAGgEQAGgDAEgHQAEgHAAgLQAAgJgEgIQgEgGgGgEQgGgEgIABQgHAAgGADg");
	this.shape_140.setTransform(1,177.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#660000").s().p("AAbAvQgFgEAAgHIAAgpQAAgNgDgGQgEgHgMAAQgHAAgGAFQgGADgDAHQgDAGAAAOIAAAgQAAAHgDAEQgEAEgHAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAEAAADABIAFAGQACADAAAEIAAADQAHgJAJgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_141.setTransform(-11.8,179.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgKQgEgJAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAIAAALQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgbQgHADgDAIQgEAHABAJQgBAKAEAHQADAIAHADQAGAEAIAAQANAAAHgJQAIgIAAgPQAAgPgIgIQgHgJgNAAQgIAAgGAFg");
	this.shape_142.setTransform(-24.8,179.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgGAGgFAEQgGAEgHACQgFABgIAAQgKAAgJgDQgIgFgHgHQgGgGgDgKQgEgKAAgLQAAgWAOgNQANgNAUAAQAMAAAJADQAIAEAIAIIAAglQAAgIADgEQAEgDAGAAQAHAAADADQAEAEAAAHIAABtQAAAHgEAEQgDADgHAAQgFAAgEgDgAgNgJQgGAEgDAGQgEAIAAAJQAAALAEAGQADAIAHADQAFAEAHAAQAHAAAHgEQAGgDAEgHQADgHAAgLQAAgJgDgIQgEgGgGgEQgHgEgHABQgHAAgGADg");
	this.shape_143.setTransform(-38.3,177.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#660000").s().p("AAaAvQgDgEAAgHIAAgpQAAgNgFgGQgDgHgMAAQgHAAgGAFQgGADgDAHQgCAGAAAOIAAAgQAAAHgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAEAAADABIAFAGQACADAAAEIAAADQAIgJAIgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_144.setTransform(-56.5,179.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAGgKAEQgIAEgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgJAIgIQAHgGANgDIANgCIASgDIAQgFQAAgKgEgEQgEgEgNgBQgKABgFACQgGACgEAGIgFAHQgBACgGgBQgFABgDgDQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAAOIAAAOIgBAOQABAHADAIIACAJQAAAFgEACQgEAEgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAFAEQAEAFAIAAQAIAAAIgEQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_145.setTransform(-69.3,179.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgwIgEAAQgGAAgDgCQgEgDAAgEQAAgEAEgCQADgDAHAAIADAAIAAgOIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABADIAAALIAAAQIALAAQAGAAADADQADACAAAEQAAAGgEABQgFACgIAAIgGAAIAAAuIABAJQAAADACABQACACAFAAIAHgBIAHAAQADAAADACQADADAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_146.setTransform(-79.1,177.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAGgKAEQgIAEgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgJAIgIQAHgGANgDIANgCIASgDIAQgFQAAgKgEgEQgEgEgNgBQgKABgFACQgGACgEAGIgFAHQgBACgGgBQgFABgDgDQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAAOIAAAOIgBAOQABAHADAIIACAJQAAAFgEACQgEAEgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAFAEQAEAFAIAAQAIAAAIgEQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_147.setTransform(-89.1,179.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#660000").s().p("AgmAlQgPgNAAgXQAAgOAHgMQAHgMAMgGQANgHARAAQALAAAKADQAJADAGAEQAHAFADAFQAEAFAAAEQAAAFgEADQgEADgFAAQgEAAgCgBIgGgGQgFgHgGgDQgFgEgJAAQgMAAgIAJQgHAJAAAOQAAAHACAGQACAGADAEQAEAEAGACQAFACAFAAQAJAAAGgDQAGgEAFgHQACgEAEgCQADgDAEAAQAFAAAEAEQADADAAAEQAAAFgDAFQgDAFgHAFQgGAFgKADQgKADgNAAQgZAAgPgOg");
	this.shape_148.setTransform(-101.9,179.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgDIgLAJQgFAEgHACQgGABgJAAQgKAAgIgDQgIgEgEgGQgGgJAAgPIAAgwQAAgHAEgEQAEgEAGAAQAGAAAFAEQADAEAAAHIAAAnQABAJABAGQACAFAEAEQAEAEAIgBQAGAAAHgDQAGgEADgGQADgFgBgSIAAgeQAAgHAFgEQAEgEAGAAQAGAAAEAEQAEAEAAAHIAABIQAAAGgEAEQgEAEgFAAQgHAAgDgEg");
	this.shape_149.setTransform(-114.6,179.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#660000").s().p("AgLBCQgEgFAAgJIAAgqIglgxIgHgLQgCgEAAgDQAAgEADgEQAFgDAGAAQAGAAADADIAKAMIAcApIAdgpIAEgGIAFgFIAEgDIAGgBQAGAAAEADQAEADABAFQgBADgCAEIgGAKIgnAyIAAAqQAAAJgEAEQgFAEgGAAQgGAAgFgDg");
	this.shape_150.setTransform(-126.8,177.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADABAAAFQAAADgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_151.setTransform(-145.2,179.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgFAGgGAEQgGAEgGACQgGABgIAAQgKAAgJgDQgIgFgHgHQgGgGgEgKQgDgKAAgLQAAgWAOgNQANgNAUAAQAMAAAJADQAIAEAIAIIAAglQAAgIAEgEQADgDAGAAQAHAAADADQAEAEAAAHIAABtQAAAHgEAEQgEADgGAAQgFAAgEgDgAgNgJQgGAEgDAGQgEAIAAAJQAAALAEAGQADAIAHADQAFAEAHAAQAHAAAHgEQAGgDAEgHQAEgHgBgLQABgJgEgIQgEgGgGgEQgHgEgHABQgHAAgGADg");
	this.shape_152.setTransform(-158.6,177.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDADQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_153.setTransform(-174.4,179.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgKQgEgJAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAIAAALQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgbQgGADgEAIQgDAHgBAJQABAKADAHQAEAIAGADQAGAEAIAAQANAAAHgJQAIgIAAgPQAAgPgIgIQgHgJgNAAQgIAAgGAFg");
	this.shape_154.setTransform(-186.1,179.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgFAGgGAEQgGAEgHACQgFABgHAAQgLAAgIgDQgJgFgHgHQgGgGgDgKQgEgKAAgLQAAgWAOgNQAMgNAWAAQALAAAIADQAJAEAIAIIAAglQAAgIADgEQAEgDAGAAQAHAAADADQAEAEAAAHIAABtQAAAHgEAEQgDADgHAAQgFAAgEgDgAgNgJQgHAEgDAGQgDAIAAAJQAAALADAGQAEAIAGADQAHAEAGAAQAIAAAGgEQAGgDAEgHQAEgHAAgLQAAgJgEgIQgEgGgGgEQgGgEgIABQgHAAgGADg");
	this.shape_155.setTransform(-199.7,177.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAGgKAEQgIAEgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgJAIgIQAHgGANgDIANgCIASgDIAQgFQAAgKgEgEQgEgEgNgBQgKABgFACQgGACgEAGIgFAHQgBACgGgBQgFABgDgDQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAAOIAAAOIgBAOQABAHADAIIACAJQAAAFgEACQgEAEgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAFAEQAEAFAIAAQAIAAAIgEQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_156.setTransform(-212.4,179.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#660000").s().p("AAbAvQgFgEAAgHIAAgpQAAgNgDgGQgFgHgLAAQgHAAgGAFQgGADgEAHQgCAGAAAOIAAAgQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgDQAEgEAGAAQAEAAADABIAFAGQACADAAAEIAAADQAHgJAKgDQAHgFAMAAQALAAAJAFQAJAEAFAHQACAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_157.setTransform(-225.2,179.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDADQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_158.setTransform(-235.7,179.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADABAAAFQAAADgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_159.setTransform(-247.4,179.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#660000").s().p("AgDBEIgKgEIgHgEIgIgIIAAADQAAAHgDAEQgFADgFAAQgHAAgDgDQgEgEAAgHIAAhsQAAgIAEgEQADgDAHAAQAGAAAEADQADAEAAAHIAAAmQAIgIAIgDQAJgEALAAQAOAAALAGQALAFAGAMQAGAKAAAPQAAAMgEAKQgDAJgGAGQgGAHgJAFQgJADgLAAQgHAAgEgBgAgMgJQgHAEgEAGQgEAIAAAKQABAPAHAIQAIAIAMAAQALAAAIgIQAHgJAAgPQAAgJgDgIQgEgGgFgEQgGgDgIAAQgIAAgFADg");
	this.shape_160.setTransform(-260.2,177.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgKQgEgJAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAIAAALQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgbQgHADgDAIQgEAHABAJQgBAKAEAHQADAIAHADQAGAEAIAAQANAAAHgJQAIgIAAgPQAAgPgIgIQgHgJgNAAQgIAAgGAFg");
	this.shape_161.setTransform(-273.6,179.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#660000").s().p("AgbBCQgMgEgGgFQgGgGAAgHQAAgEADgDQAEgCAFgBQAGABAFAEIAFAFIAFAFIAHACIAKABQAKAAAGgCQAGgEADgFQACgEABgFIAAgSQgGAHgJAFQgJAEgLAAQgOAAgLgHQgKgGgGgLQgGgLAAgPQAAgMAEgIQADgJAHgHQAGgGAJgDQAIgDAKAAQALAAAJAEQAJAEAIAJIAAgEQAAgGAEgEQADgEAGABQAIAAADAEQADAFAAAJIAABIQAAAMgDAJQgDAJgHAGQgHAGgLADQgKACgQAAQgOAAgMgDgAgTgpQgHAHAAAPQAAAQAHAHQAIAHALABQAHAAAHgEQAGgDAEgGQAEgHAAgKQAAgOgIgJQgIgIgMAAQgLgBgIAJg");
	this.shape_162.setTransform(-286.7,181.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEAAADADQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_163.setTransform(252.9,155.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgEIgLAKQgFAEgHACQgGACgJgBQgKAAgIgDQgIgEgEgGQgGgJAAgPIAAgwQAAgIAEgDQAEgEAGAAQAGAAAFAEQADADAAAIIAAAnQABAJABAGQACAGAEADQAEADAIAAQAGAAAHgDQAGgEADgHQADgFgBgQIAAgfQAAgIAFgDQAEgEAGAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_164.setTransform(240.1,155.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#660000").s().p("AgPBBQgEgDAAgIIAAhBIgIAAQgHAAgDgDQgEgCAAgEQAAgJAPAAIAHAAIAAgHQAAgMADgHQADgHAJgDQAHgEAOAAQAZAAAAALQAAADgDADQgCACgEAAIgGAAIgHgBQgHAAgDAFQgCAEAAAHIAAAGIAHAAQARAAAAAJQAAAFgFACQgEACgIAAIgHAAIAABBQAAAIgEADQgEAFgFAAQgGAAgEgFg");
	this.shape_165.setTransform(230.4,153.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#660000").s().p("AgvBDQgGgCAAgGQAAgFADgCQADgCAGAAIAEAAIAFABQAFAAADgCQACgBADgDIAFgKIADgFIgkhMQgDgIAAgCIACgHQACgCADgBQADgDAEAAQAGAAADAEQAEADACAHIAXA9IAXg5IAFgLQACgDADgCQACgCAFAAIAGACQADACACACIABAGIgBAEIgDAHIglBUQgFALgEAHQgEAGgHAEQgIADgNABQgNgBgGgCg");
	this.shape_166.setTransform(215,157.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAGgJAFQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgHQAAgLAIgHQAHgGANgCIAOgDIARgEIARgDQgBgLgEgEQgEgFgNABQgKgBgFADQgGADgEAFIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHACAIIADAKQAAAEgEADQgFADgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAFAEQAFADAHAAQAIABAHgEQAHgDAEgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_167.setTransform(197.7,155.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAgvIgEAAQgGABgDgDQgEgDAAgEQAAgDAEgDQADgCAHgBIADAAIAAgPIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGABADACQADADAAADQAAAFgEADQgFABgIAAIgGAAIAAAtIABAJQAAADACADQACABAFAAIAHAAIAHgBQADAAADACQADADAAAEQAAAGgIADQgIADgOAAQgMAAgHgEg");
	this.shape_168.setTransform(188,153.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAGgJAFQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgHQAAgLAIgHQAHgGANgCIAOgDIARgEIARgDQgBgLgEgEQgEgFgNABQgKgBgFADQgGADgEAFIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHACAIIADAKQAAAEgEADQgFADgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAFAEQAFADAHAAQAIABAHgEQAHgDAEgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_169.setTransform(177.9,155.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#660000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgIADgDQAEgEAGAAQAHAAADAFQAEADAAAHIAAACQAIgIAJgEQAJgEAKAAQANAAALAGQALAGAGALQAHAMAAAPQAAAMgDAIQgFAKgGAGQgGAHgJAEQgJAEgKAAQgLAAgJgFQgJgFgHgHIAAAlQAAARgOAAQgHgBgDgEgAgSgqQgJAJABAPQgBAPAJAIQAHAIALAAQAIAAAGgEQAGgEAEgFQADgIAAgKQAAgKgDgHQgDgHgGgEQgHgEgIAAQgKABgIAHg");
	this.shape_170.setTransform(165.1,157.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#660000").s().p("AAhAvQgFgEgFgGQgKAGgJAFQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgHQAAgLAHgHQAIgGANgCIAOgDIARgEIARgDQgBgLgEgEQgEgFgNABQgJgBgGADQgFADgEAFIgGAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHACAIIADAKQAAAEgEADQgFADgFAAQgEAAgEgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAEAEQAFADAIAAQAIABAHgEQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_171.setTransform(152,155.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#660000").s().p("AguBDQgKAAgFgEQgFgEAAgGIAAgFIADgDIAEgFIAEgEIBOhSIhDAAQgHAAgEgDQgDgDAAgEQAAgEADgDQAEgDAHAAIBWAAQARAAAAAOQAAAGgCAEIgMANIhJBLIBRAAQAHABADACQAEADAAAEQAAAFgEADQgDADgHAAg");
	this.shape_172.setTransform(138.6,153.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAGgKAFQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgHQAAgLAIgHQAHgGANgCIANgDIASgEIAQgDQAAgLgEgEQgEgFgMABQgLgBgFADQgGADgEAFIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAJAAANIAAAPIgBANQABAHADAIIACAKQAAAEgEADQgEADgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAFAEQAEADAJAAQAHABAIgEQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_173.setTransform(120.1,155.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgLgEgAgOgcQgGAFgEAHQgDAHAAAJQAAAKADAHQAEAHAGAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNAAQgHAAgHADg");
	this.shape_174.setTransform(101.9,155.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAgvIgEAAQgGABgDgDQgEgDAAgEQAAgDAEgDQADgCAHgBIADAAIAAgPIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGABADACQADADAAADQAAAFgEADQgFABgIAAIgGAAIAAAtIABAJQAAADACADQACABAFAAIAHAAIAHgBQADAAADACQADADAAAEQAAAGgIADQgIADgOAAQgMAAgHgEg");
	this.shape_175.setTransform(92,153.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#660000").s().p("AAbAvQgEgEgBgIIAAgoQAAgMgEgHQgDgGgMgBQgHAAgGAEQgGAFgDAHQgCAFgBAOIAAAfQAAAIgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgEQADgDAGAAQAEAAADACIAFAFQACADAAAEIAAADQAHgIAJgFQAIgEAMAAQALAAAJAEQAJAFAEAIQADAEABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgHAAgDgEg");
	this.shape_176.setTransform(81.4,155.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgEIgKAKQgHAEgGACQgGACgJgBQgKAAgIgDQgIgEgEgGQgGgJAAgPIAAgwQAAgIAEgDQAEgEAGAAQAHAAADAEQAEADABAIIAAAnQAAAJABAGQACAGAEADQAFADAHAAQAHAAAFgDQAHgEADgHQADgFAAgQIAAgfQAAgIADgDQAEgEAHAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgDAEgHAAQgFAAgEgEg");
	this.shape_177.setTransform(68.5,155.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#660000").s().p("AgWBUQgHgDABgGQAAgEACgDQAEgDAFAAIABAAIAFAAIAEABQAFAAACgEQABgEAAgKIAAhUQAAgHAEgDQAEgFAHAAQAFAAAFAFQADADAAAHIAABUIAAAPIgCAIQgHAQgWABQgOAAgGgEgAAGhBQgFgDAAgGQAAgGAFgDQADgEAHAAQAFAAAFAEQADADAAAGQAAAGgDADQgFADgFAAQgHAAgDgDg");
	this.shape_178.setTransform(57.6,155.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#660000").s().p("AgWBBQgLgEgHgHQgIgGgEgKQgEgJAAgLQAAgMAEgIQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKADAIAHQAHAHAEAJQAEAIAAAMQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgKQgGAEgEAGQgDAIgBAKQABAKADAHQAEAHAGAEQAGAEAIAAQANAAAIgJQAHgIAAgPQAAgQgHgHQgIgJgNAAQgHAAgHAEgAgUgtQAAgBADgEIAFgIQAEgGADgCQADgCAFAAIAOAAQAFAAABABIgHAGIgLAKIgHAGQgHADgHAAQgEAAAAgDg");
	this.shape_179.setTransform(44.4,153.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEADgGABQgFgBgEgDg");
	this.shape_180.setTransform(35,153.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAgvIgEAAQgGABgDgDQgEgDAAgEQAAgDAEgDQADgCAHgBIADAAIAAgPIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGABADACQADADAAADQAAAFgEADQgFABgIAAIgGAAIAAAtIABAJQAAADACADQACABAFAAIAHAAIAHgBQADAAADACQADADAAAEQAAAGgIADQgIADgOAAQgMAAgHgEg");
	this.shape_181.setTransform(28.6,153.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAGgKAFQgIADgMAAQgLAAgJgEQgIgEgFgGQgEgHAAgHQAAgLAHgHQAIgGANgCIANgDIASgEIAQgDQAAgLgEgEQgEgFgMABQgKgBgGADQgFADgEAFIgGAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAGgHQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHADAIIADAKQAAAEgEADQgFADgFAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAEAEQAGADAIAAQAHABAHgEQAIgDADgFQADgGAAgNIAAgDIgSAEg");
	this.shape_182.setTransform(18.6,155.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#660000").s().p("AgDBEIgKgEIgHgEIgIgHIAAACQAAAHgDADQgFAFgFAAQgHAAgDgFQgEgDAAgHIAAhsQAAgHAEgEQADgFAHAAQAGAAAEAFQADADAAAHIAAAmQAIgHAIgEQAJgEALAAQAOAAALAGQALAGAGALQAGAKAAAQQAAALgEAJQgDAKgGAGQgGAIgJADQgJAFgLAAQgHAAgEgCgAgMgIQgHADgEAGQgEAIAAAKQABAPAHAIQAIAIAMAAQALAAAIgIQAHgJAAgOQAAgKgDgIQgEgGgFgDQgGgEgIgBQgIABgFAEg");
	this.shape_183.setTransform(5.8,153.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#660000").s().p("AA5AvQgFgEAAgIIAAgpIgBgNQAAgFgEgDQgEgDgGgBQgGAAgFADQgFAEgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgFgEQgEgEAAgIIAAgnIAAgPQgBgFgDgDQgDgDgIgBQgOABgEAIQgFAIABAQIAAAhQAAAIgFAEQgEAEgGAAQgHAAgEgEQgEgEAAgIIAAhHQAAgGAEgEQAEgEAFAAQAGAAAEADQAEAEABAGIAAADQAHgJAIgDQAJgDAKAAQALAAAHADQAIAEAFAIQAGgIAJgEQAJgDAKAAQALAAAJADQAIAFAEAHQAEAHAAAOIAAAwQAAAIgEAEQgFAEgGAAQgHAAgDgEg");
	this.shape_184.setTransform(-10.7,155.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgKgEgAgOgcQgHAFgDAHQgDAHgBAJQABAKADAHQADAHAHAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNAAQgHAAgHADg");
	this.shape_185.setTransform(-26.6,155.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#660000").s().p("AgmAlQgPgNAAgXQAAgOAHgMQAHgMAMgGQANgHARAAQALAAAKADQAJADAGAEQAHAFADAFQAEAFAAAEQAAAFgEADQgEADgFAAQgEAAgCgBIgGgGQgFgHgGgDQgFgEgJAAQgMAAgIAJQgHAJAAAOQAAAHACAGQACAGADAEQAEAEAGACQAFACAFAAQAJAAAGgDQAGgEAFgHQACgEAEgCQADgDAEAAQAFAAAEAEQADADAAAEQAAAFgDAFQgDAFgHAFQgGAFgKADQgKADgNAAQgZAAgPgOg");
	this.shape_186.setTransform(-39.5,155.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#660000").s().p("AgOAaQAAAAgBgBQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgEAFgCQALgGAAgIQgGAAgFgDQgFgEAAgHQAAgFAFgFQAFgDAGAAQAFAAAEACQAEADACAEQACAEAAAIQAAAIgEAIQgEAHgHAFQgFAFgFAAQgEAAgCgCg");
	this.shape_187.setTransform(-54.5,160.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgKgEgAgOgcQgHAFgDAHQgDAHgBAJQABAKADAHQADAHAHAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNAAQgHAAgHADg");
	this.shape_188.setTransform(-63.5,155.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#660000").s().p("AAaAvQgEgEAAgIIAAgoQAAgMgDgHQgFgGgLgBQgHAAgGAEQgHAFgDAHQgCAFAAAOIAAAfQAAAIgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgEQAEgDAGAAQAEAAADACIAFAFQACADAAAEIAAADQAIgIAJgFQAHgEAMAAQALAAAJAEQAJAFAFAIQACAEABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_189.setTransform(-76.5,155.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#660000").s().p("AAhAvQgEgEgFgGQgLAGgJAFQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgHQAAgLAHgHQAIgGANgCIAOgDIARgEIARgDQgBgLgEgEQgEgFgNABQgJgBgGADQgFADgFAFIgFAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHACAIIADAKQAAAEgEADQgFADgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAFAEQAFADAHAAQAIABAHgEQAIgDADgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_190.setTransform(-89.3,155.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#660000").s().p("AgmAlQgPgNAAgXQAAgOAHgMQAHgMAMgGQANgHARAAQALAAAKADQAJADAGAEQAHAFADAFQAEAFAAAEQAAAFgEADQgEADgFAAQgEAAgCgBIgGgGQgFgHgGgDQgFgEgJAAQgMAAgIAJQgHAJAAAOQAAAHACAGQACAGADAEQAEAEAGACQAFACAFAAQAJAAAGgDQAGgEAFgHQACgEAEgCQADgDAEAAQAFAAAEAEQADADAAAEQAAAFgDAFQgDAFgHAFQgGAFgKADQgKADgNAAQgZAAgPgOg");
	this.shape_191.setTransform(-102,155.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEADgGABQgFgBgEgDg");
	this.shape_192.setTransform(-111.2,153.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#660000").s().p("AAdAxQgEgDgEgFIgVgbIgUAbIgIAIQgDACgFAAQgGAAgEgDQgDgDAAgEQAAgEAGgHIAZggIgWgbQgHgGAAgFQABgEADgDQADgDAHAAQAFAAADACIAHAIIASAWIASgWIAIgIQADgCAFAAQAGAAADADQAEADAAAEIgBAFIgFAGIgXAbIAaAgQAGAHAAAEQAAAEgDADQgEADgGAAQgFAAgDgCg");
	this.shape_193.setTransform(-119.7,155.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEAAADADQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_194.setTransform(-131.4,155.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#660000").s().p("AAyBAQgFgEAAgHIAAhcIgYBVIgEAMQgBAEgFADQgEADgHAAQgFAAgDgCQgEgCgCgDIgEgHIgCgIIgZhVIAABcQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhqQAAgIAFgDQAFgDAJAAIAKAAIAMABQAFABABAEIAFALIAVBJIAXhJIADgLQACgEAFgBIAMgBIAJAAQAKAAAFADQAFADAAAIIAABqQAAAHgEAEQgEAEgGAAQgHAAgDgEg");
	this.shape_195.setTransform(-146.6,153.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAHgKADQgLAEgNAAQgMAAgLgEgAgOgcQgHAFgDAHQgEAHABAJQgBAKAEAHQADAHAHAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNAAQgIAAgGADg");
	this.shape_196.setTransform(-167.4,155.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#660000").s().p("AgmAlQgPgNAAgXQAAgOAHgMQAHgMAMgGQANgHARAAQALAAAKADQAJADAGAEQAHAFADAFQAEAFAAAEQAAAFgEADQgEADgFAAQgEAAgCgBIgGgGQgFgHgGgDQgFgEgJAAQgMAAgIAJQgHAJAAAOQAAAHACAGQACAGADAEQAEAEAGACQAFACAFAAQAJAAAGgDQAGgEAFgHQACgEAEgCQADgDAEAAQAFAAAEAEQADADAAAEQAAAFgDAFQgDAFgHAFQgGAFgKADQgKADgNAAQgZAAgPgOg");
	this.shape_197.setTransform(-180.3,155.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEADgGABQgFgBgEgDg");
	this.shape_198.setTransform(-189.5,153.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAgvIgEAAQgGABgDgDQgEgDAAgEQAAgDAEgDQADgCAHgBIADAAIAAgPIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGABADACQADADAAADQAAAFgEADQgFABgIAAIgGAAIAAAtIABAJQAAADACADQACABAFAAIAHAAIAHgBQADAAADACQADADAAAEQAAAGgIADQgIADgOAAQgMAAgHgEg");
	this.shape_199.setTransform(-195.8,153.6);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#660000").s().p("AgQBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAHAAQAGAAADAEQAEADAAAHIAABHQAAAIgEAEQgDAEgGAAQgHAAgDgEgAgVgtQAAgBADgEIAFgIQAEgGADgCQADgCAFAAIAOAAQAGAAAAABIgGAGIgMAKIgHAGQgGADgHAAQgFAAAAgDg");
	this.shape_200.setTransform(-202.1,153.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#660000").s().p("AgJBBQgEgDAAgIIAAhrQAAgIADgDQAEgFAGAAQAGAAAEAFQAEADAAAIIAABrQAAAIgEADQgEAFgGAAQgGAAgDgFg");
	this.shape_201.setTransform(-208.6,153.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAHgKADQgLAEgNAAQgMAAgKgEgAgOgcQgGAFgEAHQgDAHgBAJQABAKADAHQAEAHAGAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNAAQgHAAgHADg");
	this.shape_202.setTransform(-218,155.3);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#660000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgIAEgDQADgEAHAAQAFAAAFAFQADADAAAHIAAACQAIgIAJgEQAIgEAKAAQAOAAALAGQALAGAHALQAGAMAAAPQAAAMgEAIQgEAKgGAGQgHAHgJAEQgIAEgLAAQgLAAgIgFQgJgFgHgHIAAAlQAAARgNAAQgJgBgCgEgAgTgqQgHAJgBAPQABAPAHAIQAJAIAKAAQAIAAAGgEQAGgEADgFQAEgIAAgKQAAgKgDgHQgEgHgGgEQgGgEgIAAQgKABgJAHg");
	this.shape_203.setTransform(-230.9,157.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#660000").s().p("AAbAvQgEgEgBgIIAAgoQAAgMgEgHQgDgGgMgBQgHAAgGAEQgGAFgDAHQgCAFgBAOIAAAfQAAAIgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgEQADgDAGAAQAEAAADACIAFAFQACADAAAEIAAADQAHgIAJgFQAIgEAMAAQALAAAJAEQAJAFAEAIQADAEABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgHAAgDgEg");
	this.shape_204.setTransform(-249.8,155.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAGgKAFQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgHQAAgLAHgHQAIgGANgCIANgDIASgEIAQgDQAAgLgEgEQgEgFgMABQgKgBgGADQgGADgDAFIgGAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHAEAIIACAKQAAAEgEADQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAEAEQAGADAIAAQAHABAIgEQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_205.setTransform(-262.6,155.3);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDAEQgDADgDAFIgDAOIgBARIAAAVQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_206.setTransform(-272.4,155.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#660000").s().p("AgaBAQgPgEgKgJQgKgKgGgNQgFgMAAgQQAAgPAFgNQAFgNALgJQAKgJAPgEQAPgGASAAQAPABAMADQAMADAIAGQAHAGAEAGQAEAGAAAFQAAAFgFADQgEAEgGAAQgEAAgDgCQgDAAgCgDIgKgMQgEgEgGgDQgHgCgLAAQgJAAgJADQgIADgGAGQgGAHgDAJQgEAJAAAKQAAAXANANQAMAMAVAAQALAAAKgCQAJgDAKgFIAAgVIgYAAQgJAAgEgCQgFgDAAgFQAAgEAEgDQAEgCAGAAIAjAAIALABQAFAAADADQACAEAAAGIAAAaIgBAIQgBADgDADIgIAEQgOAHgNADQgNAEgPAAQgRgBgOgFg");
	this.shape_207.setTransform(-286.5,153.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#660000").s().p("AgZBVIAEgJIAJgSQAFgMAEgPQADgPAAgQQAAgQgDgPQgEgOgFgMIgJgTIgEgJQAAgCAFAAQAHAAAFACQADADAHAKIAKARQAFAJADAJIAEASQACAKAAAJQAAAUgGASQgGAQgMATQgHAJgDADQgFADgHAAQgFAAAAgDg");
	this.shape_208.setTransform(153.1,131.1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#660000").s().p("AAQBCQgEgEAAgHIAAgRIg0AAQgJAAgFgEQgGgEAAgHIABgDIADgEIADgEIADgEIA3hAIAJgJQADgDAFAAQARAAgBAQIAABGIAFAAQAIAAAFACQAFABAAAHQAAAFgFADQgEACgHAAIgHAAIAAARQABAHgEAEQgEADgGAAQgGAAgDgDgAggASIAsAAIAAg1g");
	this.shape_209.setTransform(143.1,129.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#660000").s().p("AgkBDQgIAAgFgDQgEgEAAgFQAAgDADgGQADgFADgDIAZgWIAQgMIAOgJQAFgGADgFQADgGAAgGQAAgFgDgFQgDgFgGgDQgFgCgGAAQgNAAgIAKIgEAIQgCAGgDADQgDAEgGAAQgGAAgDgDQgDgDAAgGQAAgGADgGQADgIAHgFQAGgGAKgDQAKgDANAAQAPAAALAEQAIADAFAFQAGAFADAHQADAHAAAGQAAAMgGAKQgHAHgHAGIgWAQQgPAMgGAGIgFAGIA2AAQAIAAAEADQAFADAAAFQAAAEgEAEQgDACgHAAg");
	this.shape_210.setTransform(130.7,129.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#660000").s().p("AgbBAQgKgFgGgGQgFgHAAgGQAAgEADgDQAEgDAFAAQAEAAAEACQAEACABAFQADAGAFADQAFADAHAAQAFAAAGgDQAFgCAEgFQAHgKACgZQgHAIgJADQgIADgKABQgKAAgIgDQgJgEgGgGQgGgGgDgHQgEgIAAgJQAAgJAEgJQAEgIAHgHQAHgGAJgDQAKgDAMAAQAMAAALAEQALAEAHAJQAHAHAEANQAEANAAAPQAAAQgEAOQgEAOgIAIQgIAKgLAEQgLAFgNgBQgNABgKgFgAgTgqQgHAIAAAMQAAAMAHAHQAHAGAKAAQAGAAAGgCQAGgDAEgFQADgGAAgIQAAgGgCgFQgCgGgDgDIgIgHQgFgBgFgBQgKABgHAHg");
	this.shape_211.setTransform(117.6,129.3);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#660000").s().p("AANBBQgEgEAAgHIAAhTQgZASgKAAQgEAAgDgDQgEgDAAgEQAAgFAEgCIALgFQANgGAIgFQAGgGAGgHIAIgJQACgCAFAAQAFAAADAEQAEAEAAAGIAABoQAAATgPAAQgGAAgEgEg");
	this.shape_212.setTransform(103.9,129.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#660000").s().p("AgQALQgIAAgDgDQgEgDAAgFQAAgEAEgDQADgDAIAAIAhAAQAHAAAEADQAEADAAAEQAAAFgEADQgEADgHAAg");
	this.shape_213.setTransform(95.3,131);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#660000").s().p("AAQBCQgEgEAAgHIAAgRIg0AAQgKAAgEgEQgGgEAAgHIABgDIACgEIAEgEIADgEIA3hAIAJgJQAEgDAEAAQAQAAAAAQIAABGIAFAAQAIAAAFACQAFABgBAHQAAAFgDADQgFACgHAAIgHAAIAAARQAAAHgDAEQgEADgGAAQgFAAgEgDgAggASIAsAAIAAg1g");
	this.shape_214.setTransform(85.3,129.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#660000").s().p("AgaBAQgEgEAAgIQAAgGADgKIAJgYQAHgNAKgPQAIgPANgOIg3AAQgJAAgEgDQgEgDAAgGQAAgGAEgCQAFgCAIAAIBFAAQAKAAAFADQAEADAAAGQAAAEgFAGIgMAOQgHAIgHALQgHAMgGAPIgEAMIgCAMIgCAMQgCAJgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_215.setTransform(73.2,129.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#660000").s().p("AgcBAQgMgGgHgKQgGgJgBgLQAAgZAbgIQgVgJAAgSQAAgKAFgIQAGgIALgFQALgEAPAAQALAAAKACQAJADAHAFQAGAFADAGQADAGAAAIQAAAJgFAHQgFAGgLAFQAJADAGAEQAGAFADAGQADAHgBAIQAAALgFAJQgHAKgNAGQgMAEgRAAQgQAAgMgEgAgSAKQgGAGgBALQAAAIAEAFQADAFAGADQAGADAGAAQAHAAAHgDQAFgDAEgGQADgFAAgHQAAgHgDgGQgEgFgGgDQgGgDgHAAQgKAAgIAHgAgPgtQgGAFAAAJQAAAIAGAFQAGAFAJAAQAFAAAEgBQAEgCADgCQADgCABgEQACgDAAgFQAAgEgDgFQgCgEgGgDQgFgCgGAAQgJAAgGAFg");
	this.shape_216.setTransform(60,129.3);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#660000").s().p("AANBBQgEgEAAgHIAAhTQgZASgKAAQgEAAgDgDQgEgDAAgEQAAgFAEgCIALgFQANgGAIgFQAGgGAGgHIAIgJQACgCAFAAQAFAAADAEQAEAEAAAGIAABoQAAATgPAAQgGAAgEgEg");
	this.shape_217.setTransform(46.1,129.3);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#660000").s().p("AAOBXIgHgEIgIgKQgHgMgGgMQgFgLgDgMQgDgMAAgOQAAgNADgMQADgMAFgMQAGgMAHgLIAIgKQAEgEADAAIAHgBQAFAAAAACIgEAKIgJATQgFALgEAOQgDAPAAAQQAAAQADAPQAEAPAFALIAJATIAEAJQAAADgFAAIgHgBg");
	this.shape_218.setTransform(37.4,131.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAAKAEQALADAHAIQAIAGAEAJQAEAJAAALQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgKgEgAgOgcQgHAFgDAHQgEAHAAAJQAAAKAEAHQADAHAHAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNAAQgIgBgGAEg");
	this.shape_219.setTransform(21.6,131.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgwIgEAAQgGABgDgDQgEgCAAgFQAAgEAEgCQADgCAHgBIADAAIAAgOIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGABADACQADACAAAEQAAAGgEACQgFABgIAAIgGAAIAAAtIABAJQAAAEACACQACABAFAAIAHgBIAHAAQADAAADACQADADAAAEQAAAFgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_220.setTransform(11.7,129.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgDgEAAQgHAAgDAEQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_221.setTransform(3.2,131.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEABADACQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_222.setTransform(-8.4,131.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgEIgKAKQgHAEgGACQgGACgIgBQgLABgIgEQgIgEgFgGQgFgJAAgPIAAgwQAAgHAEgEQADgEAHAAQAGAAAEAEQAFAEAAAHIAAAnQgBAJACAGQACAFAFAEQADADAIAAQAGAAAHgDQAGgEADgGQACgGABgRIAAgeQAAgHADgEQAFgEAGAAQAGAAAEAEQAEAEAAAHIAABIQAAAGgEAEQgDAEgGAAQgHAAgDgEg");
	this.shape_223.setTransform(-21.2,131.1);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#660000").s().p("Ag1BAQgFgEAAgIIAAhnQABgJAEgEQAEgDALAAIAnAAQASAAAJACQAJACAIAGQAGAFAEAIQADAHAAAKQAAAUgOAKQgPAKgcAAIgbAAIAAAmQAAAJgFAEQgFAEgGAAQgHAAgEgEgAgagGIAVAAQAKAAAHgCQAHgCAEgFQAEgEAAgIQAAgJgGgFQgHgGgTAAIgVAAg");
	this.shape_224.setTransform(-34.5,129.3);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAAKAEQALADAHAIQAIAGAEAJQAEAJAAALQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgLgEgAgOgcQgGAFgEAHQgEAHAAAJQAAAKAEAHQAEAHAGAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNAAQgIgBgGAEg");
	this.shape_225.setTransform(-53.9,131.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhrQAAgIADgDQAEgFAGAAQAGAAAEAFQAEADAAAIIAABrQAAAHgEAEQgEAFgGAAQgGAAgDgFg");
	this.shape_226.setTransform(-63.3,129.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhrQAAgIADgDQAEgFAGAAQAGAAAEAFQAEADAAAIIAABrQAAAHgEAEQgEAFgGAAQgGAAgDgFg");
	this.shape_227.setTransform(-69.1,129.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_228.setTransform(-74.9,129.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgDgEAAQgHAAgDAEQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_229.setTransform(-81.8,131.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgDgEAAQgHAAgDAEQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_230.setTransform(-90.9,131.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAHgKAEQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAIgHQAHgGANgDIAOgCIARgEIAQgEQAAgKgEgEQgEgEgNAAQgKgBgFADQgFACgFAGIgFAHQgBABgGAAQgFAAgDgCQgEgCAAgFQAAgGAFgGQAGgHALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHADAIIACAJQAAAEgEAEQgEADgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAFADQAFAEAHAAQAIAAAIgDQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_231.setTransform(-102.5,131.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#660000").s().p("AgPBEQgLgDgHgEQgIgEgIgHQgFgGgFgIQgEgIgCgJQgCgJgBgKQABgPAFgNQAGgNAJgJQAKgJAOgEQAOgFAOgBQASAAAPAHQAPAHAHAJQAIAKAAAIQAAAFgDAEQgFADgEAAQgHAAgCgCIgIgJQgFgKgJgFQgIgFgMAAQgSAAgLANQgMANAAAWQAAAQAFAKQAFAKAKAGQAIAEAMAAQANABAKgGQAJgGAFgLIAFgJQADgDAGAAQAFAAAFADQADAEAAAFQABAGgEAHQgEAIgHAHQgIAHgMAFQgMAEgQABQgLAAgKgCg");
	this.shape_232.setTransform(-116.9,129.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEABADACQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_233.setTransform(-136.4,131.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#660000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgHADgEQAFgEAFAAQAGABAFAEQADADAAAGIAAADQAJgIAIgEQAIgEAKAAQAOAAALAGQALAGAHALQAGALAAAQQAAAMgEAIQgDAKgHAGQgGAHgKAEQgIADgLABQgKgBgJgEQgIgFgIgHIAAAlQAAARgOAAQgHgBgDgEgAgTgqQgIAJAAAPQAAAPAIAIQAJAIAKAAQAIAAAGgEQAGgDAEgHQADgHAAgKQAAgKgDgHQgEgHgFgEQgHgDgIAAQgKAAgJAHg");
	this.shape_234.setTransform(-149.2,132.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_235.setTransform(-159.1,129.3);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhrQAAgIADgDQAEgFAGAAQAGAAAEAFQAEADAAAIIAABrQAAAHgEAEQgEAFgGAAQgGAAgDgFg");
	this.shape_236.setTransform(-164.9,129.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEABADACQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_237.setTransform(-174.1,131.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#660000").s().p("AgwBAQgEgEgBgJIAAhmQAAgGACgDQADgEAEgCQAEgBAGAAIBJAAQAIAAADACQADADAAAFQAAAFgDADQgDADgIAAIg8AAIAAAiIAyAAQAHAAAEADQADACAAAFQAAAEgDADQgEACgHAAIgyAAIAAAsQAAAJgFAEQgEAEgHAAQgGAAgFgEg");
	this.shape_238.setTransform(-185.7,129.3);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#660000").s().p("AgKAKQgFgDAAgHQAAgEAFgEQAEgFAGAAQAGAAAFAFQAFADAAAFQAAAHgFADQgFAEgGAAQgGAAgEgEg");
	this.shape_239.setTransform(157,205.9);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAHgKAEQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAHgHQAIgGANgDIANgCIASgEIAQgEQAAgKgEgEQgEgEgMAAQgKgBgGADQgGACgDAGIgGAHQgCABgFAAQgFAAgDgCQgEgCAAgFQAAgGAGgGQAFgHALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHAEAIIACAJQAAAEgEAEQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAEADQAGAEAIAAQAHAAAIgDQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_240.setTransform(147.4,202.2);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgwIgEAAQgGABgDgDQgEgCAAgFQAAgEAEgCQADgCAHgBIADAAIAAgOIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGABADACQADACAAAEQAAAGgEABQgFACgIAAIgGAAIAAAtIABAJQAAAEACACQACABAFAAIAHgBIAHAAQADAAADACQADADAAAEQAAAFgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_241.setTransform(137.6,200.5);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#660000").s().p("AgaAvQgLgFgGgFQgFgHAAgGQAAgEADgDQADgDAGAAQAEAAACACIAFAGQAFAGAGADQAGADAKAAQAIAAAFgDQAGgDAAgFQAAgGgGgDQgGgDgMgDQgPgDgIgDQgKgDgGgGQgFgGAAgIQAAgHAFgHQAGgHAKgEQAJgEAOAAQAKAAAKACQAIACAGAEQAGADADAEQADAEABAEQAAAFgEACQgEADgGAAQgDAAgEgDIgHgGQgDgDgEgDQgFgCgHAAQgHAAgFADQgFADgBAEQAAAEAEADIALAEIAQAEQANACAJAEQAIAEAFAFQAEAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgQAAgKgEg");
	this.shape_242.setTransform(127.6,202.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhsQAAgHADgDQAEgFAGAAQAGAAAEAFQAEADAAAHIAABsQAAAHgEAEQgEAFgGAAQgGAAgDgFg");
	this.shape_243.setTransform(113.1,200.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#660000").s().p("AAgAvQgEgEgFgGQgKAHgJAEQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAHgHQAIgGANgDIAOgCIARgEIARgEQgBgKgEgEQgEgEgNAAQgJgBgGADQgFACgEAGIgGAHQgCABgFAAQgFAAgDgCQgEgCAAgFQAAgGAFgGQAGgHALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHACAIIADAJQAAAEgEAEQgFADgEAAQgFAAgFgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAEADQAFAEAIAAQAIAAAHgDQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_244.setTransform(103.9,202.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgCQgGAFgFAEQgGADgHADQgFACgHAAQgLAAgJgFQgIgDgHgIQgGgHgDgJQgEgJAAgLQAAgXAOgNQANgNAVAAQALAAAJAEQAIADAIAIIAAglQAAgIADgDQAEgFAGAAQAHAAADAEQAEADAAAIIAABtQAAAHgEADQgDAFgHAAQgFAAgEgFgAgNgJQgGAEgDAGQgEAIAAAJQAAAKAEAHQADAIAHADQAFAEAHAAQAIAAAGgEQAGgDAEgHQAEgHAAgLQAAgKgEgHQgEgGgGgEQgGgDgIAAQgHAAgGADg");
	this.shape_245.setTransform(72,200.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#660000").s().p("AAbAvQgFgEAAgHIAAgpQAAgMgDgHQgFgGgLgBQgHAAgGAFQgGADgEAIQgCAFAAAOIAAAgQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgEQAEgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAHgIAKgFQAHgEAMAAQALAAAJAEQAJAFAFAIQACAEABAGIABANIAAAuQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_246.setTransform(59.2,202.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_247.setTransform(49.8,200.4);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#660000").s().p("AgbAvQgLgFgFgFQgFgHAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAGQAEAGAHADQAGADAJAAQAJAAAGgDQAFgDAAgFQAAgGgFgDQgHgDgLgDQgPgDgKgDQgJgDgGgGQgFgGAAgIQAAgHAFgHQAFgHAKgEQALgEAOAAQAJAAAKACQAJACAGAEQAFADAEAEQADAEAAAEQgBAFgDACQgDADgHAAQgEAAgDgDIgHgGQgDgDgFgDQgEgCgGAAQgIAAgGADQgEADAAAEQgBAEAEADIAKAEIARAEQANACAJAEQAIAEAFAFQAEAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgPAAgMgEg");
	this.shape_248.setTransform(41,202.2);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAALAEQAKADAIAIQAHAGAEAJQAEAJAAALQAAALgEAKQgEAJgHAHQgIAHgKADQgLAEgNAAQgMAAgLgEgAgOgcQgHAFgDAHQgEAHABAJQgBAKAEAHQADAHAHAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNgBQgIABgGADg");
	this.shape_249.setTransform(23.4,202.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgwIgEAAQgGABgDgDQgEgCAAgFQAAgEAEgCQADgCAHgBIADAAIAAgOIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGABADACQADACAAAEQAAAGgEABQgFACgIAAIgGAAIAAAtIABAJQAAAEACACQACABAFAAIAHgBIAHAAQADAAADACQADADAAAEQAAAFgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_250.setTransform(13.5,200.5);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#660000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgHADgEQAFgEAFAAQAGABAFAEQADADAAAGIAAADQAJgIAIgEQAIgEAKAAQAOAAALAGQALAGAHALQAGALAAAQQAAAMgEAIQgDAKgHAGQgGAHgKAEQgIADgLABQgKgBgJgEQgIgFgIgHIAAAlQAAARgOAAQgHgBgDgEgAgTgqQgIAJAAAPQAAAPAIAIQAJAIAKAAQAIAAAGgEQAGgDAEgHQADgHAAgKQAAgKgDgHQgEgHgFgEQgHgDgIAAQgKAAgJAHg");
	this.shape_251.setTransform(2.9,204);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgEIgLAKQgFAEgHACQgGACgJgBQgKABgIgEQgIgEgEgGQgGgJAAgPIAAgwQAAgHAEgEQAEgEAGAAQAGAAAFAEQADAEAAAHIAAAnQABAJABAGQACAFAEAEQAEADAIAAQAGAAAHgDQAGgEADgGQADgGgBgRIAAgeQAAgHAFgEQAEgEAGAAQAGAAAEAEQAEAEAAAHIAABIQAAAGgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_252.setTransform(-10.6,202.2);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAAKAEQALADAHAIQAIAGAEAJQAEAJAAALQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgKgEgAgOgcQgHAFgDAHQgDAHgBAJQABAKADAHQADAHAHAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNgBQgHABgHADg");
	this.shape_253.setTransform(-41.5,202.2);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#660000").s().p("AgaAvQgLgFgGgFQgFgHAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAGQAFAGAGADQAGADAKAAQAIAAAFgDQAGgDAAgFQAAgGgGgDQgFgDgNgDQgPgDgIgDQgKgDgFgGQgGgGAAgIQAAgHAFgHQAGgHAKgEQAJgEAOAAQALAAAIACQAKACAFAEQAGADADAEQADAEAAAEQAAAFgDACQgEADgGAAQgDAAgEgDIgHgGQgDgDgEgDQgFgCgHAAQgHAAgFADQgGADAAAEQABAEADADIALAEIAQAEQANACAJAEQAIAEAFAFQAEAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgKgEg");
	this.shape_254.setTransform(-71.9,202.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAHgJAEQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAIgHQAHgGANgDIAOgCIARgEIARgEQgBgKgEgEQgEgEgNAAQgKgBgFADQgGACgEAGIgFAHQgBABgGAAQgFAAgDgCQgEgCAAgFQAAgGAFgGQAGgHALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHACAIIADAJQAAAEgEAEQgFADgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAFADQAFAEAHAAQAIAAAHgDQAHgDAEgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_255.setTransform(-84,202.2);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#660000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgBgEgEgEQgDgDgIgBQgFAAgFADQgFAEgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgGAAgDgEQgEgEgBgIIAAgnIgBgPQAAgFgDgDQgEgDgGgBQgOAAgFAJQgEAJgBAPIAAAhQAAAIgDAEQgFAEgGAAQgGAAgFgEQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAFADQADAEAAAGIAAADQAIgJAJgDQAIgDAKgBQALABAIADQAGAEAFAIQAIgIAIgEQAIgDAKgBQAMAAAIAEQAJAFAEAHQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgGAAgFgEg");
	this.shape_256.setTransform(-99.8,202.2);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhsQAAgHADgDQAEgFAGAAQAGAAAEAFQAEADAAAHIAABsQAAAHgEAEQgEAFgGAAQgGAAgDgFg");
	this.shape_257.setTransform(-117.6,200.3);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAALAEQAKADAIAIQAHAGAEAJQAEAJAAALQAAALgEAKQgEAJgHAHQgIAHgKADQgLAEgNAAQgMAAgLgEgAgOgcQgHAFgDAHQgEAHABAJQgBAKAEAHQADAHAHAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNgBQgIABgGADg");
	this.shape_258.setTransform(-144.9,202.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#660000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgCgEgDgEQgDgDgIgBQgFAAgFADQgFAEgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgGAAgEgEQgDgEAAgIIAAgnIgCgPQAAgFgDgDQgEgDgGgBQgOAAgFAJQgFAJAAAPIAAAhQAAAIgDAEQgEAEgHAAQgGAAgEgEQgFgEAAgIIAAhGQAAgIAEgDQADgEAHAAQAFAAAFADQADAEAAAGIAAADQAIgJAJgDQAIgDAKgBQALABAHADQAIAEAEAIQAIgIAIgEQAIgDAKgBQAMAAAIAEQAJAFAEAHQAEAGAAAPIAAAwQAAAIgEAEQgEAEgHAAQgGAAgFgEg");
	this.shape_259.setTransform(-160.9,202.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAAKAEQALADAHAIQAIAGAEAJQAEAJAAALQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgKgEgAgOgcQgHAFgDAHQgEAHAAAJQAAAKAEAHQADAHAHAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNgBQgIABgGADg");
	this.shape_260.setTransform(-176.8,202.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgKAEgKQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgcQgGAEgEAHQgDAIgBAJQABAKADAHQAEAHAGAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgHAAgHADg");
	this.shape_261.setTransform(274.8,178);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#660000").s().p("AAaAvQgDgEAAgIIAAgoQAAgNgFgGQgEgGgLAAQgHAAgGADQgHAFgDAGQgBAGAAAPIAAAeQAAAIgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgEQAEgDAGAAQAEAAADACIAFAEQACAEAAAEIAAADQAIgJAJgEQAHgEAMAAQALAAAJAEQAJAFAFAHQACAFABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_262.setTransform(261.8,178);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgFQAAgGAEgEQAEgDAFAAQAGAAAEADQAEAEAAAGQAAAFgEADQgEADgGAAQgFAAgEgDg");
	this.shape_263.setTransform(252.4,176.2);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#660000").s().p("AA4AvQgEgEAAgIIAAgpIgBgNQAAgFgEgDQgEgEgGABQgGAAgFACQgFAEgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgEgEQgFgEAAgIIAAgnIgBgPQAAgEgDgEQgDgEgIABQgOAAgEAIQgEAJAAAOIAAAiQAAAIgFAEQgEAEgGAAQgHAAgEgEQgEgEAAgIIAAhHQAAgGAEgEQAEgEAFAAQAHAAADADQAFAEAAAGIAAACQAHgHAIgEQAJgEAKABQALgBAIAEQAHAEAEAHQAIgHAIgEQAJgEAKABQALAAAIADQAJAEAEAIQAEAGAAAPIAAAwQAAAIgEAEQgEAEgHAAQgHAAgEgEg");
	this.shape_264.setTransform(240.1,178);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEABQgHAAgDACQgDAEgDAFIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_265.setTransform(226.6,178);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADACAAAEQAAAEgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_266.setTransform(214.9,178);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#660000").s().p("AgKBAQgFgEAAgJIAAhgIgiAAQgIAAgDgDQgEgDAAgFQAAgFAEgDQAEgDAHAAIBiAAQAIAAAEADQAEADAAAFQAAAFgEADQgEADgIAAIgiAAIAABgQAAAJgEAEQgEAEgHAAQgGAAgEgEg");
	this.shape_267.setTransform(203.2,176.3);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#660000").s().p("AgKAKQgFgEAAgGQAAgFAFgEQAEgEAGAAQAGAAAFAEQAFAEAAAFQAAAGgFAEQgFAEgGAAQgGAAgEgEg");
	this.shape_268.setTransform(187.7,181.7);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#660000").s().p("AgbAuQgKgDgGgHQgFgGAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAGQAEAGAHAEQAGACAKAAQAIAAAFgCQAGgEAAgEQAAgHgGgDQgFgDgNgDQgOgDgKgEQgJgCgFgGQgGgGAAgIQAAgHAFgHQAGgHAJgEQAKgEAOAAQALAAAIACQAKACAFADQAGAEADAEQADAEAAAEQABAEgEADQgEADgFAAQgEAAgEgDIgHgGQgDgDgFgCQgEgDgHAAQgHAAgFADQgGADAAAEQABAEADACIALAFIAQAEQANADAJAEQAIACAEAGQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgLgFg");
	this.shape_269.setTransform(179.6,178);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgKAEgKQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgcQgHAEgDAHQgDAIgBAJQABAKADAHQADAHAHAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgHAAgHADg");
	this.shape_270.setTransform(167.3,178);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgFQAAgGAEgEQAEgDAFAAQAGAAAEADQAEAEAAAGQAAAFgEADQgEADgGAAQgFAAgEgDg");
	this.shape_271.setTransform(145.3,176.2);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAguIgEAAQgGgBgDgCQgEgDAAgDQAAgEAEgDQADgDAHABIADAAIAAgQIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABAEIAAAJIAAASIALAAQAGgBADADQADADAAAEQAAAFgEACQgFACgIAAIgGAAIAAAtIABAIQAAADACADQACACAFAAIAHgBIAHgBQADAAADADQADACAAAEQAAAFgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_272.setTransform(138.9,176.3);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#660000").s().p("AgmA3QgPgOAAgXQAAgMADgIQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAJQAAAJgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEAAADACQADACAAAEQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgIQgHAGgBAMIAzAAQgBgMgHgGQgHgHgLAAQgKAAgHAHgAgTgtQAAgBADgEIAFgIQAEgGADgCQADgCAFAAIAOAAQAGAAAAABIgGAGIgMAKIgHAGQgGADgHAAQgFAAAAgDg");
	this.shape_273.setTransform(128.5,176.2);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgFQAAgGAEgEQAEgDAFAAQAGAAAEADQAEAEAAAGQAAAFgEADQgEADgGAAQgFAAgEgDg");
	this.shape_274.setTransform(119.2,176.2);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#660000").s().p("AgJAxIgFgGIgGgLIgbg6IgCgEIgCgFIAAgEIABgFIAFgEQADgCAEAAQAHAAADADQADAFADAHIAWA5IAZg7QADgHADgDQACgDAGAAQAGAAAEADQADADAAAFIAAADIgCAFIgCAEIgbA7IgDAGIgEAHIgGAEQgDACgFAAQgFAAgEgCg");
	this.shape_275.setTransform(110.5,178);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgKAEgKQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgcQgHAEgDAHQgEAIAAAJQAAAKAEAHQADAHAHAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgIAAgGADg");
	this.shape_276.setTransform(98.6,178);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#660000").s().p("AgbAuQgLgDgFgHQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAGQAFAGAGAEQAGACAJAAQAJAAAGgCQAFgEAAgEQAAgHgFgDQgGgDgMgDQgPgDgKgEQgJgCgFgGQgGgGAAgIQAAgHAFgHQAFgHAKgEQALgEAOAAQAJAAAJACQAJACAHADQAFAEAEAEQACAEAAAEQAAAEgDADQgEADgFAAQgEAAgEgDIgHgGQgDgDgFgCQgEgDgGAAQgJAAgFADQgEADAAAEQAAAEADACIAKAFIARAEQAOADAIAEQAIACAEAGQAFAFAAAHQAAALgGAHQgFAHgMAEQgLAEgQAAQgOAAgMgFg");
	this.shape_277.setTransform(86.2,178);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#660000").s().p("AgaAuQgLgDgGgHQgFgGAAgGQAAgEADgDQADgDAGAAQAEAAACACIAFAGQAFAGAGAEQAGACAJAAQAJAAAGgCQAFgEAAgEQAAgHgFgDQgHgDgMgDQgPgDgIgEQgKgCgGgGQgFgGAAgIQAAgHAFgHQAFgHALgEQAKgEANAAQAKAAAKACQAIACAGADQAGAEADAEQAEAEAAAEQAAAEgEADQgDADgHAAQgEAAgDgDIgHgGQgDgDgEgCQgFgDgHAAQgIAAgFADQgEADgBAEQAAAEAEACIALAFIAQAEQANADAJAEQAIACAFAGQAEAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgPAAgLgFg");
	this.shape_278.setTransform(69.2,178);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADACAAAEQAAAEgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_279.setTransform(57.1,178);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#660000").s().p("AgJBBQgEgDAAgIIAAhrQAAgIADgEQAEgEAGAAQAGAAAEAEQAEAEAAAIIAABrQAAAIgEADQgEAEgGAAQgGAAgDgEg");
	this.shape_280.setTransform(47.8,176.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#660000").s().p("AAgAvQgEgDgEgIQgLAHgJAFQgJADgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIAOgDIARgEIARgDQgBgLgEgEQgEgFgNABQgJAAgGACQgFADgEAFIgGAHQgCACgFAAQgFAAgDgDQgEgDAAgEQAAgGAFgHQAGgGALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAJAAAOIAAAOIAAANQAAAHACAIIADAKQAAADgEAEQgFADgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAGAFAEQAEADAIAAQAIAAAHgDQAIgDADgFQADgGABgNIAAgEIgSAFg");
	this.shape_281.setTransform(38.6,178);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADACAAAEQAAAEgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_282.setTransform(26,178);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgCQgGAGgFADQgGADgGACQgGACgIAAQgKAAgIgEQgKgEgGgGQgGgIgEgJQgDgKAAgKQAAgXANgNQANgNAVAAQAMAAAIAEQAJAEAIAHIAAglQAAgHAEgFQADgEAHAAQAGABAEADQADAEAAAHIAABtQAAAHgDADQgFAEgFAAQgGAAgEgEgAgNgIQgGADgEAHQgDAGAAALQAAAKADAHQAEAHAGAEQAHADAGAAQAIAAAGgDQAGgEAEgHQADgHABgKQgBgKgDgIQgEgGgGgEQgGgDgIgBQgHAAgGAFg");
	this.shape_283.setTransform(12.6,176.2);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgFQAAgGAEgEQAEgDAFAAQAGAAAEADQAEAEAAAGQAAAFgEADQgEADgGAAQgFAAgEgDg");
	this.shape_284.setTransform(3.3,176.2);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#660000").s().p("AgbAuQgKgDgGgHQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAACACIAFAGQAEAGAHAEQAGACAKAAQAIAAAFgCQAGgEAAgEQAAgHgGgDQgFgDgNgDQgOgDgKgEQgJgCgFgGQgGgGAAgIQAAgHAFgHQAGgHAJgEQALgEANAAQALAAAIACQAJACAHADQAFAEAEAEQACAEAAAEQABAEgEADQgEADgFAAQgFAAgDgDIgHgGQgDgDgFgCQgEgDgHAAQgIAAgEADQgGADAAAEQABAEADACIALAFIAQAEQAOADAIAEQAIACAEAGQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgLgFg");
	this.shape_285.setTransform(-10.9,178);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgKAEgKQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgcQgGAEgEAHQgDAIgBAJQABAKADAHQAEAHAGAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgHAAgHADg");
	this.shape_286.setTransform(-23.1,178);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#660000").s().p("AgJBBQgEgDAAgIIAAhrQAAgIADgEQAEgEAGAAQAGAAAEAEQAEAEAAAIIAABrQAAAIgEADQgEAEgGAAQgGAAgDgEg");
	this.shape_287.setTransform(-32.5,176.2);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEABQgHAAgDACQgDAEgDAFIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_288.setTransform(-44.8,178);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#660000").s().p("AAgAvQgDgDgGgIQgKAHgKAFQgIADgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgEIAQgDQAAgLgEgEQgEgFgMABQgKAAgGACQgGADgDAFIgGAHQgCACgFAAQgFAAgDgDQgEgDAAgEQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAJAAAOIAAAOIgBANQAAAHAEAIIACAKQAAADgEAEQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAGAEAEQAGADAIAAQAHAAAIgDQAGgDAEgFQADgGAAgNIAAgEIgSAFg");
	this.shape_289.setTransform(-56.5,178);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#660000").s().p("AgJBBQgEgDAAgIIAAhrQAAgIADgEQAEgEAGAAQAGAAAEAEQAEAEAAAIIAABrQAAAIgEADQgEAEgGAAQgGAAgDgEg");
	this.shape_290.setTransform(-65.7,176.2);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgJQgEgKAAgLQAAgKAEgKQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgcQgGAEgEAHQgEAIAAAJQAAAKAEAHQAEAHAGAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgIAAgGADg");
	this.shape_291.setTransform(-75,178);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#660000").s().p("AgEBEIgKgDIgGgGIgIgGIAAACQAAAHgEADQgEAEgGAAQgFAAgEgEQgEgDAAgHIAAhsQAAgHAEgFQADgEAGAAQAHAAADAEQAEAEAAAHIAAAmQAJgIAHgDQAJgEAMAAQAOAAAKAGQALAGAGALQAGAKAAAQQAAALgDAKQgEAJgGAHQgGAGgJAEQgJAEgLAAQgGAAgGgBgAgNgIQgGADgEAHQgEAHABAKQAAAPAIAIQAHAIAMAAQAKAAAJgIQAHgJAAgOQAAgLgDgGQgEgHgFgDQgGgFgIAAQgHAAgHAFg");
	this.shape_292.setTransform(-88,176.2);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEABQgHAAgDACQgDAEgDAFIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_293.setTransform(-99,178);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#660000").s().p("AAgAvQgEgDgFgIQgKAHgJAFQgJADgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgEIARgDQgBgLgEgEQgEgFgMABQgKAAgGACQgFADgEAFIgGAHQgCACgFAAQgFAAgDgDQgEgDAAgEQAAgGAGgHQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAJAAAOIAAAOIgBANQAAAHADAIIADAKQAAADgEAEQgFADgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAGAEAEQAFADAJAAQAHAAAHgDQAIgDADgFQADgGABgNIAAgEIgSAFg");
	this.shape_294.setTransform(-110.7,178);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#660000").s().p("AAaAvQgDgEAAgIIAAgoQAAgNgFgGQgDgGgMAAQgHAAgGADQgHAFgDAGQgBAGAAAPIAAAeQAAAIgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgEQAEgDAGAAQAEAAADACIAFAEQACAEAAAEIAAADQAIgJAIgEQAIgEAMAAQALAAAJAEQAJAFAEAHQADAFABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_295.setTransform(-123.5,178);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADACAAAEQAAAEgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_296.setTransform(-136.3,178);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#660000").s().p("AAgAvQgEgDgFgIQgKAHgJAFQgJADgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgEIARgDQgBgLgEgEQgEgFgMABQgKAAgGACQgFADgEAFIgGAHQgCACgFAAQgFAAgDgDQgEgDAAgEQAAgGAGgHQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAJAAAOIAAAOIgBANQAAAHADAIIADAKQAAADgEAEQgFADgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAGAEAEQAFADAJAAQAHAAAHgDQAIgDADgFQADgGABgNIAAgEIgSAFg");
	this.shape_297.setTransform(-154.3,178);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADACAAAEQAAAEgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_298.setTransform(-185.4,178);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgCQgGAGgFADQgGADgGACQgGACgIAAQgKAAgJgEQgJgEgGgGQgGgIgEgJQgDgKAAgKQAAgXANgNQAOgNAUAAQAMAAAIAEQAJAEAIAHIAAglQAAgHAEgFQADgEAHAAQAGABAEADQADAEAAAHIAABtQAAAHgDADQgEAEgGAAQgGAAgEgEgAgNgIQgGADgEAHQgDAGAAALQAAAKADAHQAEAHAHAEQAFADAHAAQAIAAAGgDQAGgEAEgHQADgHAAgKQAAgKgDgIQgEgGgGgEQgGgDgIgBQgHAAgGAFg");
	this.shape_299.setTransform(-198.8,176.2);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgKAEgKQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgcQgGAEgEAHQgDAIgBAJQABAKADAHQAEAHAGAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgHAAgHADg");
	this.shape_300.setTransform(-217.1,178);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgCQgFAGgGADQgGADgHACQgFACgHAAQgLAAgIgEQgJgEgHgGQgGgIgDgJQgEgKAAgKQAAgXANgNQANgNAWAAQALAAAIAEQAJAEAIAHIAAglQAAgHADgFQAEgEAGAAQAHABAEADQADAEAAAHIAABtQAAAHgDADQgFAEgGAAQgFAAgEgEgAgNgIQgHADgDAHQgDAGAAALQAAAKADAHQAEAHAGAEQAHADAGAAQAHAAAHgDQAGgEAEgHQADgHABgKQgBgKgDgIQgEgGgGgEQgHgDgHgBQgHAAgGAFg");
	this.shape_301.setTransform(-230.6,176.2);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEABQgHAAgDACQgDAEgDAFIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_302.setTransform(-240.5,178);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#660000").s().p("AAgAvQgDgDgGgIQgKAHgKAFQgIADgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAIgIQAHgGANgCIANgDIASgEIAQgDQAAgLgEgEQgEgFgMABQgLAAgFACQgGADgEAFIgFAHQgBACgGAAQgFAAgDgDQgEgDAAgEQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAJAAAOIAAAOIgBANQAAAHAEAIIACAKQAAADgEAEQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAGAEAEQAFADAJAAQAHAAAIgDQAGgDAEgFQAEgGgBgNIAAgEIgSAFg");
	this.shape_303.setTransform(-252.1,178);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#660000").s().p("AgEBEIgKgDIgGgGIgIgGIAAACQAAAHgEADQgEAEgFAAQgHAAgDgEQgEgDAAgHIAAhsQAAgHAEgFQADgEAHAAQAGAAADAEQAEAEAAAHIAAAmQAJgIAHgDQAJgEAMAAQAOAAAKAGQALAGAGALQAGAKAAAQQAAALgEAKQgDAJgGAHQgGAGgJAEQgJAEgLAAQgGAAgGgBgAgNgIQgGADgEAHQgDAHAAAKQAAAPAHAIQAIAIAMAAQAKAAAJgIQAHgJAAgOQAAgLgDgGQgDgHgGgDQgGgFgIAAQgHAAgHAFg");
	this.shape_304.setTransform(-264.9,176.2);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#660000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgCgFgDgDQgEgEgGABQgGAAgFACQgFAEgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgEgEQgFgEAAgIIAAgnIgBgPQAAgEgDgEQgEgEgGABQgPAAgEAIQgEAJgBAOIAAAiQAAAIgDAEQgFAEgGAAQgGAAgFgEQgEgEAAgIIAAhHQAAgGAEgEQAEgEAFAAQAHAAADADQAFAEAAAGIAAACQAHgHAJgEQAIgEAKABQALgBAIAEQAGAEAFAHQAIgHAIgEQAIgEALABQALAAAIADQAJAEAEAIQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgHAAgEgEg");
	this.shape_305.setTransform(-281.4,178);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgJQgEgKAAgLQAAgKAEgKQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgcQgGAEgEAHQgEAIAAAJQAAAKAEAHQAEAHAGAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgHAAgHADg");
	this.shape_306.setTransform(-297.3,178);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#660000").s().p("AgjBEQgKAAgEgEQgFgEAAgIIAAhnQAAgIAFgEQADgEAHAAQAHAAAFAEQAEAEABAIIAABhIA+AAQAHAAAEADQAEADAAAFQAAAFgEADQgEADgHAAg");
	this.shape_307.setTransform(-309.7,176);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#660000").s().p("AgvBDQgGgCAAgHQAAgEADgCQADgCAGgBIAEABIAFABQAFAAADgCQACgBADgDIAFgJIADgGIgkhMQgDgIAAgCIACgGQACgDADgCQADgCAEAAQAGABADADQAEADACAHIAXA9IAXg5IAFgLQACgDADgCQACgBAFgBIAGACQADACACADIABAEIgBAGIgDAGIglBUQgFALgEAHQgEAHgHADQgIAEgNAAQgNAAgGgDg");
	this.shape_308.setTransform(261.9,155.7);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#660000").s().p("AgaAvQgLgFgGgGQgFgGAAgGQAAgEADgDQADgDAGAAQAEAAACACIAFAGQAFAGAGAEQAGACAKAAQAIAAAFgCQAGgEAAgFQAAgGgGgDQgGgDgMgDQgPgDgIgDQgKgDgGgGQgFgFAAgJQAAgIAFgGQAGgHAKgEQAJgEAOAAQAKAAAKACQAIACAGAEQAGADADAEQADAEABAEQAAAEgEADQgEADgGAAQgDAAgEgDIgHgGQgDgDgEgCQgFgDgHAAQgHAAgFADQgFADgBAEQAAAEAEACIALAFIAQAEQANADAJADQAIADAFAGQAEAFAAAHQAAAKgGAIQgFAHgMAEQgLAEgPAAQgQAAgKgEg");
	this.shape_309.setTransform(245,153.8);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#660000").s().p("AAhAvQgEgDgFgIQgLAHgJAFQgJADgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgLAHgHQAIgGANgCIAOgDIARgEIARgDQgBgLgEgEQgEgFgNABQgJAAgGACQgFADgFAFIgFAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAJAAAOIAAAOIAAANQAAAHACAIIADAKQAAADgEAEQgFADgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAFAFQAFADAHAAQAIABAHgEQAIgDADgFQAEgGAAgNIAAgEIgSAFg");
	this.shape_310.setTransform(232.9,153.8);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#660000").s().p("AAbAvQgEgEAAgIIAAgoQgBgMgEgHQgDgGgMAAQgHAAgGADQgGAFgDAHQgCAFAAAPIAAAeQgBAIgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgEQADgDAGAAQAEAAADACIAFAEQACADAAAFIAAADQAIgIAIgFQAIgEAMAAQALAAAJAEQAJAFAEAIQADAEABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgHAAgDgEg");
	this.shape_311.setTransform(220.1,153.8);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADADAAADQAAAEgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_312.setTransform(207.3,153.8);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgCQgGAFgFAEQgGADgGACQgGACgHABQgLgBgIgEQgKgEgGgGQgGgIgEgJQgDgJAAgLQAAgXANgNQANgNAWAAQALAAAIAEQAJAEAIAHIAAglQAAgHAEgEQADgFAHAAQAGABAEADQADAEAAAHIAABtQAAAHgDADQgFAEgFABQgGgBgEgEgAgNgIQgGADgEAGQgDAIAAAKQAAAJADAIQAEAGAGAEQAHAEAGAAQAIAAAGgEQAGgDAEgHQADgHAAgKQAAgLgDgHQgEgGgGgEQgGgEgIAAQgHAAgGAFg");
	this.shape_313.setTransform(193.9,152);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDADQgDADgDAGIgDAOIgBARIAAAVQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_314.setTransform(184.1,153.8);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#660000").s().p("AAhBBQgFgEgEgHQgLAHgKAEQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgIQAAgKAIgHQAHgHANgDIAOgCIARgEIAQgEQAAgJgEgEQgEgFgNAAQgKAAgFADQgFACgFAGIgFAGQgBABgGAAQgFAAgDgCQgEgCAAgEQAAgHAFgGQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAIAAANIAAAPIAAAOQAAAHADAIIACAJQAAAEgEADQgEAEgFAAQgFAAgEgEgAADAXIgPADQgFABgEADQgEADAAAGQAAAFAFAEQAFAEAHAAQAIAAAIgDQAGgDAEgFQADgGAAgNIAAgEIgSAFgAgSgtQAAgBACgEIAFgIQAEgGAEgCQACgCAGAAIANAAQAGAAAAABIgGAGIgLAKIgIAGQgGADgHAAQgEAAAAgDg");
	this.shape_315.setTransform(172.4,152);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#660000").s().p("AgPBDQgLgCgHgEQgIgFgIgGQgFgHgFgHQgEgIgCgJQgCgJgBgKQABgPAFgNQAGgNAJgJQAKgJAOgEQAOgGAOAAQASABAPAGQAPAGAHAKQAIAJAAAJQAAAFgDAEQgFADgEAAQgHAAgCgCIgIgJQgFgKgJgFQgIgFgMAAQgSAAgLANQgMANAAAWQAAAQAFAKQAFAKAKAGQAIAEAMAAQANAAAKgFQAJgGAFgLIAFgJQADgDAGAAQAFAAAFADQADADAAAGQABAGgEAHQgEAIgHAHQgIAHgMAFQgMAFgQAAQgLgBgKgCg");
	this.shape_316.setTransform(158.1,152);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#660000").s().p("AAgAvQgDgDgGgIQgKAHgKAFQgIADgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgLAIgHQAHgGANgCIANgDIASgEIAQgDQAAgLgEgEQgEgFgMABQgLAAgFACQgGADgEAFIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAJAAAOIAAAOIgBANQAAAHAEAIIACAKQAAADgEAEQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAFQAFADAJAAQAHABAIgEQAGgDAEgFQAEgGgBgNIAAgEIgSAFg");
	this.shape_317.setTransform(138.5,153.8);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgcQgGAFgEAGQgDAIgBAJQABAKADAHQAEAHAGAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNAAQgIAAgGADg");
	this.shape_318.setTransform(120.3,153.8);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAgvIgEAAQgGAAgDgCQgEgDAAgEQAAgDAEgDQADgCAHgBIADAAIAAgPIAAgJQAAgDACgDQACgCADgCQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGABADACQADADAAADQAAAFgEADQgFABgIAAIgGAAIAAAtIABAJQAAAEACACQACACAFAAIAHgBIAHgBQADAAADADQADACAAAEQAAAFgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_319.setTransform(110.4,152.1);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#660000").s().p("AAaAvQgDgEAAgIIAAgoQAAgMgFgHQgDgGgMAAQgHAAgGADQgHAFgDAHQgBAFAAAPIAAAeQAAAIgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgEQAEgDAGAAQAEAAADACIAFAEQACADAAAFIAAADQAIgIAJgFQAHgEAMAAQALAAAJAEQAJAFAFAIQACAEABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_320.setTransform(99.8,153.8);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgDIgLAKQgFAEgHACQgGABgIAAQgLAAgIgDQgIgEgFgHQgFgHAAgPIAAgxQAAgIAEgDQADgEAHAAQAGAAAFAEQADADAAAIIAAAnQABAJABAFQACAHAFADQADADAIABQAGAAAHgFQAGgDADgHQACgFAAgQIAAgfQABgIADgDQAFgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAIgEADQgEAEgFAAQgHAAgDgEg");
	this.shape_321.setTransform(86.9,153.8);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#660000").s().p("AgWBUQgGgDgBgGQAAgEADgDQAEgDAEAAIADAAIADAAIAEABQAGAAACgEQABgEAAgKIAAhTQAAgIAEgDQAEgFAGAAQAHAAADAFQAFADAAAIIAABTIgBAPIgCAJQgHAQgXAAQgMAAgHgEgAAFhBQgEgDAAgGQAAgGAEgDQAFgDAFgBQAGAAAEAEQAFADAAAGQAAAGgFADQgEADgGAAQgFAAgFgDg");
	this.shape_322.setTransform(76,153.9);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADADAAADQAAAEgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_323.setTransform(62.9,153.8);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgDIgLAKQgFAEgHACQgGABgJAAQgKAAgIgDQgIgEgEgHQgGgHAAgPIAAgxQAAgIAEgDQAEgEAGAAQAGAAAFAEQADADAAAIIAAAnQABAJABAFQACAHAEADQAEADAIABQAGAAAHgFQAGgDADgHQADgFgBgQIAAgfQAAgIAFgDQAEgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAIgEADQgEAEgFAAQgHAAgDgEg");
	this.shape_324.setTransform(50.1,153.8);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#660000").s().p("AAgBBQgDgFAAgHIAAgjQgIAGgJAEQgJAEgKABQgNAAgLgHQgLgGgHgLQgGgLAAgPQAAgQAGgMQAHgLALgGQALgGAOAAQAKAAAJAEQAJAEAHAIIAAgCQAAgHAEgEQADgDAGgBQAGABAEADQAEADAAAIIAABrQAAARgOAAQgIAAgCgFgAgTgqQgHAJAAAQQAAAJAEAIQADAGAGADQAGAEAHAAQAHAAAHgEQAGgDAEgGQAEgIAAgKQAAgHgDgHQgCgGgEgEQgEgDgFgCQgFgDgFAAQgLABgIAHg");
	this.shape_325.setTransform(36.5,155.7);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgcQgHAFgDAGQgEAIABAJQgBAKAEAHQADAHAHAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNAAQgHAAgHADg");
	this.shape_326.setTransform(18.3,153.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#660000").s().p("AAbAvQgEgEgBgIIAAgoQAAgMgEgHQgDgGgMAAQgHAAgGADQgGAFgDAHQgCAFgBAPIAAAeQAAAIgDAEQgEAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgEQADgDAGAAQAEAAADACIAFAEQACADAAAFIAAADQAHgIAJgFQAIgEAMAAQALAAAJAEQAJAFAEAIQADAEABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgHAAgDgEg");
	this.shape_327.setTransform(5.4,153.8);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#660000").s().p("AAgAvQgDgDgGgIQgKAHgKAFQgIADgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgLAHgHQAIgGANgCIANgDIASgEIAQgDQAAgLgEgEQgEgFgMABQgKAAgGACQgGADgDAFIgGAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAJAAAOIAAAOIgBANQAAAHAEAIIACAKQAAADgEAEQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAFQAGADAIAAQAHABAIgEQAGgDAEgFQADgGAAgNIAAgEIgSAFg");
	this.shape_328.setTransform(-7.4,153.8);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEADgGAAQgFAAgEgDg");
	this.shape_329.setTransform(-29.4,152);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#660000").s().p("AAcAxQgDgDgEgFIgVgbIgUAbIgIAIQgDACgFAAQgFAAgEgDQgEgDAAgEQAAgEAFgHIAbggIgYgbQgFgGAAgFQgBgEAEgDQAEgDAFAAQAFAAAEACIAIAJIARAVIASgVIAIgJQADgCAFAAQAGAAAEADQADADAAAEIgBAFIgFAGIgXAbIAaAgQAGAHAAAEQAAAEgEADQgDADgGAAQgFAAgEgCg");
	this.shape_330.setTransform(-37.8,153.8);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADADAAADQAAAEgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_331.setTransform(-49.5,153.8);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#660000").s().p("AA5AvQgFgEAAgIIAAgpIgBgNQgBgFgDgDQgDgDgIAAQgFAAgFACQgFADgDAFQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgFgEQgDgEAAgIIAAgnIgBgPQgBgEgDgEQgDgDgIAAQgOAAgEAIQgFAIABAQIAAAhQgBAIgEAEQgDAEgHAAQgGAAgEgEQgFgEAAgIIAAhHQAAgGAEgEQADgEAHAAQAGAAAEADQADAEAAAGIAAACQAIgHAIgEQAJgEAKABQALgBAHAEQAHAEAGAHQAGgHAJgEQAJgEAJABQAMAAAJADQAIAFAEAHQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_332.setTransform(-65.3,153.8);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#660000").s().p("AAgAvQgEgDgFgIQgKAHgJAFQgJADgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgLAHgHQAIgGANgCIAOgDIARgEIARgDQgBgLgEgEQgEgFgNABQgJAAgGACQgFADgEAFIgGAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAJAAAOIAAAOIAAANQAAAHACAIIADAKQAAADgEAEQgFADgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAEAFQAFADAIAAQAIABAHgEQAIgDADgFQADgGABgNIAAgEIgSAFg");
	this.shape_333.setTransform(-86.5,153.8);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAgvIgEAAQgGAAgDgCQgEgDAAgEQAAgDAEgDQADgCAHgBIADAAIAAgPIAAgJQAAgDACgDQACgCADgCQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGABADACQADADAAADQAAAFgEADQgFABgIAAIgGAAIAAAtIABAJQAAAEACACQACACAFAAIAHgBIAHgBQADAAADADQADACAAAEQAAAFgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_334.setTransform(-96.3,152.1);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#660000").s().p("AgbAvQgKgFgGgGQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAACACIAFAGQAEAGAHAEQAGACAKAAQAIAAAFgCQAGgEAAgFQAAgGgGgDQgFgDgNgDQgOgDgKgDQgJgDgFgGQgGgFAAgJQAAgIAFgGQAGgHAJgEQALgEANAAQALAAAIACQAJACAHAEQAFADAEAEQACAEAAAEQABAEgEADQgEADgFAAQgFAAgDgDIgHgGQgDgDgFgCQgEgDgHAAQgIAAgEADQgGADAAAEQABAEADACIALAFIAQAEQAOADAIADQAIADAEAGQAFAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgPAAgLgEg");
	this.shape_335.setTransform(-106.3,153.8);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEADgGAAQgFAAgEgDg");
	this.shape_336.setTransform(-115,152);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#660000").s().p("AgJBBQgEgDAAgIIAAhrQAAgIADgDQAEgFAGAAQAGAAAEAFQAEADAAAIIAABrQAAAIgEADQgEAEgGABQgGgBgDgEg");
	this.shape_337.setTransform(-120.8,152);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#660000").s().p("AAhAvQgFgDgEgIQgLAHgKAFQgIADgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgLAIgHQAHgGANgCIAOgDIARgEIAQgDQAAgLgEgEQgEgFgNABQgKAAgFACQgFADgFAFIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAJAAAOIAAAOIAAANQAAAHADAIIACAKQAAADgEAEQgEADgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAFAFQAFADAHAAQAIABAIgEQAGgDAEgFQADgGAAgNIAAgEIgSAFg");
	this.shape_338.setTransform(-130,153.8);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEADgGAAQgFAAgEgDg");
	this.shape_339.setTransform(-151.9,152);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgCQgFAFgGAEQgGADgHACQgFACgHABQgLgBgIgEQgJgEgHgGQgGgIgDgJQgEgJAAgLQAAgXAOgNQAMgNAWAAQALAAAIAEQAJAEAIAHIAAglQAAgHADgEQAEgFAGAAQAHABADADQAEAEAAAHIAABtQAAAHgEADQgDAEgHABQgFgBgEgEgAgNgIQgHADgDAGQgDAIAAAKQAAAJADAIQAEAGAGAEQAHAEAGAAQAIAAAGgEQAGgDAEgHQAEgHAAgKQAAgLgEgHQgEgGgGgEQgGgEgIAAQgHAAgGAFg");
	this.shape_340.setTransform(-161.9,152);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#660000").s().p("AAbAvQgFgEAAgIIAAgoQAAgMgDgHQgEgGgMAAQgHAAgGADQgGAFgDAHQgDAFAAAPIAAAeQAAAIgDAEQgEAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgEQADgDAGAAQAEAAADACIAFAEQACADAAAFIAAADQAHgIAJgFQAIgEAMAAQALAAAJAEQAJAFAEAIQADAEABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_341.setTransform(-174.7,153.8);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEADgGAAQgFAAgEgDg");
	this.shape_342.setTransform(-184.1,152);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#660000").s().p("AgbAvQgLgFgFgGQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAGQAFAGAGAEQAGACAJAAQAJAAAGgCQAFgEAAgFQAAgGgFgDQgHgDgLgDQgPgDgKgDQgJgDgGgGQgFgFAAgJQAAgIAFgGQAFgHAKgEQALgEAOAAQAJAAAJACQAJACAHAEQAFADAEAEQACAEAAAEQAAAEgDADQgDADgGAAQgFAAgDgDIgHgGQgDgDgFgCQgEgDgGAAQgIAAgGADQgEADAAAEQgBAEAEACIAKAFIARAEQAOADAIADQAIADAEAGQAFAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgOAAgMgEg");
	this.shape_343.setTransform(-192.9,153.8);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#660000").s().p("AgvBDQgGgCAAgHQAAgEADgCQADgCAGgBIAEABIAFABQAFAAADgCQACgBADgDIAFgJIADgGIgkhMQgDgIAAgCIACgGQACgDADgCQADgCAEAAQAGABADADQAEADACAHIAXA9IAXg5IAFgLQACgDADgCQACgBAFgBIAGACQADACACADIABAEIgBAGIgDAGIglBUQgFALgEAHQgEAHgHADQgIAEgNAAQgNAAgGgDg");
	this.shape_344.setTransform(-210.1,155.7);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgcQgGAFgEAGQgDAIgBAJQABAKADAHQAEAHAGAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNAAQgIAAgGADg");
	this.shape_345.setTransform(-227.5,153.8);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEADgGAAQgFAAgEgDg");
	this.shape_346.setTransform(-249.6,152);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAgvIgEAAQgGAAgDgCQgEgDAAgEQAAgDAEgDQADgCAHgBIADAAIAAgPIAAgJQAAgDACgDQACgCADgCQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGABADACQADADAAADQAAAFgEADQgFABgIAAIgGAAIAAAtIABAJQAAAEACACQACACAFAAIAHgBIAHgBQADAAADADQADACAAAEQAAAFgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_347.setTransform(-255.9,152.1);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#660000").s().p("AgJBBQgEgDAAgIIAAhrQAAgIADgDQAEgFAGAAQAGAAAEAFQAEADAAAIIAABrQAAAIgEADQgEAEgGABQgGgBgDgEg");
	this.shape_348.setTransform(-268.7,152);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgcQgHAFgDAGQgEAIAAAJQAAAKAEAHQADAHAHAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNAAQgIAAgGADg");
	this.shape_349.setTransform(-278.1,153.8);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#660000").s().p("AgXBQIAEgJIAIgRQAFgLADgOQADgOAAgPQAAgOgDgOQgDgOgFgLIgIgSIgEgIQAAgCAEAAQAHAAAEACQAEACAFAKIAKAQQAFAIACAJQADAIACAJQABAIAAAJQAAATgFAQQgGARgMAQQgFAJgEADQgEACgHAAQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_350.setTransform(117,130.2);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#660000").s().p("AgYA8QgDgEgBgHQABgGACgJIAJgXQAGgMAJgOQAIgNAMgOIg0AAQgIAAgEgCQgDgDAAgGQAAgFADgDQAFgBAHAAIBBAAQAJAAAEACQAFADAAAGQAAAEgFAFIgLAOQgHAGgHALQgGALgGAOIgDAMIgDALIgCAKQgBAKgDADQgEADgGAAQgGAAgEgDg");
	this.shape_351.setTransform(108.2,128.7);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#660000").s().p("AgaA8QgJgEgFgHQgFgGAAgGQAAgEADgDQADgCAFAAQAEAAAEACQADACACAFQACAFAFADQAFACAGAAQAFABAFgDQAFgDADgEQAHgJACgXQgHAGgIAEQgIADgIAAQgJAAgIgDQgIgDgGgFQgGgGgDgHQgDgHAAgJQAAgIADgIQAEgIAGgGQAHgFAJgEQAJgDALAAQAMAAAJAEQAKAEAHAHQAHAIADAMQAEAMAAAOQAAAPgEANQgEAMgHAJQgHAIgKAFQgLAEgLAAQgNAAgKgEgAgSgnQgGAGAAAMQAAAMAGAGQAHAGAKAAQAFAAAFgCQAGgCADgGQAEgFAAgHQAAgGgCgFQgCgFgDgEQgEgDgEgCQgFgCgEAAQgJAAgHAHg");
	this.shape_352.setTransform(95.6,128.6);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#660000").s().p("AgaA8QgJgEgFgHQgFgGAAgGQAAgEADgDQADgCAFAAQAEAAAEACQADACACAFQACAFAFADQAFACAGAAQAFABAFgDQAFgDADgEQAHgJACgXQgHAGgIAEQgIADgIAAQgJAAgIgDQgIgDgGgFQgGgGgDgHQgDgHAAgJQAAgIADgIQAEgIAGgGQAHgFAJgEQAJgDALAAQAMAAAJAEQAKAEAHAHQAHAIADAMQAEAMAAAOQAAAPgEANQgEAMgHAJQgHAIgKAFQgLAEgLAAQgNAAgKgEgAgSgnQgGAGAAAMQAAAMAGAGQAHAGAKAAQAFAAAFgCQAGgCADgGQAEgFAAgHQAAgGgCgFQgCgFgDgEQgEgDgEgCQgFgCgEAAQgJAAgHAHg");
	this.shape_353.setTransform(83.7,128.6);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#660000").s().p("AAMA9QgDgEAAgHIAAhMQgYAQgJAAQgEAAgDgDQgDgCAAgEQAAgFADgBIALgGQAMgFAHgFQAGgGAGgGIAHgIQABgCAFAAQAFAAADADQADAEAAAGIAABhQAAARgNAAQgGAAgEgDg");
	this.shape_354.setTransform(70.9,128.6);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#660000").s().p("AgOAKQgIAAgDgDQgEgCAAgFQAAgDADgEQAFgDAHAAIAdAAQAIAAADADQAEAEAAADQAAAFgEACQgDADgIAAg");
	this.shape_355.setTransform(62.8,130.2);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#660000").s().p("AgaA4QgMgGgFgNQgEgIAAgJQgCgIAAgKQAAgMACgKQABgKADgIQAGgMALgHQALgGAPAAQAKAAAIADQAIACAGAGQAGAGAFAHQAHAPAAAZQAAAOgCAKQgCAJgFAJQgHAKgKAFQgLAGgNAAQgOAAgMgIgAgRgiQgFALAAAXQAAAPACALQACAKAFAFQAFAGAIgBQAJAAAFgFQAFgGACgJQACgLAAgPQAAgQgCgJQgCgKgFgGQgFgFgJAAQgMAAgFAMg");
	this.shape_356.setTransform(53.5,128.6);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#660000").s().p("AgaA4QgMgGgFgNQgDgIgBgJQgCgIAAgKQAAgMACgKQABgKADgIQAGgMALgHQALgGAPAAQAKAAAHADQAJACAGAGQAHAGADAHQAIAPAAAZQAAAOgCAKQgCAJgFAJQgHAKgKAFQgLAGgNAAQgNAAgNgIgAgRgiQgFALAAAXQAAAPACALQACAKAFAFQAGAGAHgBQAJAAAFgFQAFgGACgJQACgLAAgPQAAgQgCgJQgCgKgFgGQgFgFgJAAQgMAAgFAMg");
	this.shape_357.setTransform(41.7,128.6);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#660000").s().p("AgaA8QgJgEgFgHQgFgGAAgGQAAgEADgDQADgCAFAAQAEAAAEACQADACACAFQACAFAFADQAFACAGAAQAFABAFgDQAFgDADgEQAHgJACgXQgHAGgIAEQgIADgIAAQgJAAgIgDQgIgDgGgFQgGgGgDgHQgDgHAAgJQAAgIADgIQAEgIAGgGQAHgFAJgEQAJgDALAAQAMAAAJAEQAKAEAHAHQAHAIADAMQAEAMAAAOQAAAPgEANQgEAMgHAJQgHAIgKAFQgLAEgLAAQgNAAgKgEgAgSgnQgGAGAAAMQAAAMAGAGQAHAGAKAAQAFAAAFgCQAGgCADgGQAEgFAAgHQAAgGgCgFQgCgFgDgEQgEgDgEgCQgFgCgEAAQgJAAgHAHg");
	this.shape_358.setTransform(29.6,128.6);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#660000").s().p("AAMA9QgDgEAAgHIAAhMQgYAQgJAAQgEAAgDgDQgDgCAAgEQAAgFADgBIALgGQAMgFAHgFQAGgGAGgGIAHgIQABgCAFAAQAFAAADADQADAEAAAGIAABhQAAARgNAAQgGAAgEgDg");
	this.shape_359.setTransform(16.7,128.6);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#660000").s().p("AANBRQgEgBgDgCIgHgKQgHgLgFgLQgFgKgDgLQgCgLAAgOQgBgLADgMQADgLAFgLQAFgLAHgLIAHgJQADgEAEAAIAHgBQAEAAAAACIgEAJIgIASQgFAKgDAOQgDAOAAAOQAAAPADAOQADAOAFAKIAIASIAEAJQAAACgEAAIgHgBg");
	this.shape_360.setTransform(8.6,130.2);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#660000").s().p("AgiAtQgHAAgEgDQgEgDAAgFQAAgDADgDIALgLIAQgPIANgMIAJgKIAHgIIgnAAIgMgBQgFgBAAgGQAAgEAEgCQADgCAGAAIA8AAQAIAAAFACQAEACAAAGIAAAEIgCADIgDADIgFAEIgwAvIA0AAQAGAAADADQADACAAAEQAAAEgDADQgDACgGAAg");
	this.shape_361.setTransform(-5.4,130.2);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgKAEgIQADgJAHgHQAHgFAJgEQAKgDALAAQAQgBALAHQALAFAGAJQAGAKAAAJQAAAHgGAEQgGACgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgEIAIgHQACgCAEABQAEAAACABQADACAAAEQAAADgDAFQgDAEgFADQgGAEgJADQgIACgMAAQgYAAgPgMgAgPgYQgGAGgCALIAwAAQgBgMgHgFQgGgGgKAAQgJAAgHAGg");
	this.shape_362.setTransform(-16.2,130.2);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#660000").s().p("AAbAsQgFgEAAgGIAAgDQgEAGgGADQgEAEgHACQgFABgJAAQgJAAgIgDQgHgEgEgGQgFgHgBgOIAAguQAAgHAEgDQADgDAHAAQAGAAAEADQADAEAAAGIAAAlQAAAIACAFQACAGADADQAEADAHAAQAGAAAGgDQAGgEADgFQACgFAAgQIAAgdQAAgGAEgEQADgDAGAAQAHAAADADQADADABAHIAABDQAAAHgDADQgFADgEAAQgGAAgDgDg");
	this.shape_363.setTransform(-28.2,130.2);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#660000").s().p("AAdA8QgCgEAAgHIAAghQgIAHgIAEQgJADgJAAQgMAAgKgGQgLgFgGgLQgFgKAAgOQAAgPAFgKQAHgMAKgFQAKgGANAAQAKABAJAEQAIADAGAIIAAgCQAAgHAEgDQADgDAGgBQAFABAEADQADADAAAHIAABjQAAAQgMAAQgIAAgDgFgAgRgnQgIAJAAAOQAAAJAEAHQADAFAGAEQAGADAGAAQAHAAAGgDQAGgEADgFQAEgHAAgKQAAgHgCgGQgCgFgEgEQgEgEgFgBQgEgDgFAAQgKABgHAHg");
	this.shape_364.setTransform(-40.8,132);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#660000").s().p("AgiAtQgHAAgEgDQgEgDAAgFQAAgDADgDIALgLIAQgPIANgMIAJgKIAHgIIgnAAIgMgBQgFgBAAgGQAAgEAEgCQADgCAGAAIA8AAQAIAAAFACQAEACAAAGIAAAEIgCADIgDADIgFAEIgwAvIA0AAQAGAAADADQADACAAAEQAAAEgDADQgDACgGAAg");
	this.shape_365.setTransform(-52,130.2);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#660000").s().p("AAfA9QgEgEgFgGQgKAGgJAEQgIADgLAAQgKAAgIgDQgIgEgEgGQgEgGAAgHQAAgJAHgIQAHgGAMgDIAMgCIARgDIAPgEQAAgIgEgEQgEgFgMAAQgJABgFACQgFACgEAFIgFAGQgBACgFgBQgFABgDgDQgDgBAAgFQAAgGAFgFQAFgGAKgEQALgEAOAAQASAAAKAEQAKAEAEAHQAEAIAAAMIAAAOIAAANQAAAGADAIIACAJQAAADgEADQgDADgFAAQgEAAgEgDgAADAVIgOAEQgFABgEACQgDADAAAFQAAAGAEADQAFAEAHAAQAHAAAHgDQAHgDADgFQADgGAAgMIAAgDIgRAEgAgRgqIADgEIAEgHQAEgHADgBQACgCAFAAIANAAQAFAAAAABIgFAFIgLAKIgHAFQgFADgHAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBg");
	this.shape_366.setTransform(-63.2,128.6);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#660000").s().p("AgJA9QgDgDAAgHIAAhkQAAgHADgEQAEgEAFAAQAGAAAEAEQADADAAAIIAABkQAAAHgDADQgEAEgGAAQgFAAgEgEg");
	this.shape_367.setTransform(-71.8,128.5);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgKAEgIQADgJAHgHQAHgFAJgEQAKgDALAAQAQgBALAHQALAFAGAJQAGAKAAAJQAAAHgGAEQgGACgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgEIAIgHQACgCAEABQAEAAACABQADACAAAEQAAADgDAFQgDAEgFADQgGAEgJADQgIACgMAAQgYAAgPgMgAgPgYQgGAGgCALIAwAAQgBgMgHgFQgGgGgKAAQgJAAgHAGg");
	this.shape_368.setTransform(-80.5,130.2);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#660000").s().p("AgJA/QgEgCgDgDIgEgIIgEgJIgihQIgCgEIgBgFIgBgEQAAgEAEgEQAEgEAGAAQAIAAADAEQADAEADAJIAgBTIAghUIAEgJIAEgFQADgCAFAAIAHACIAFAEQACADAAADIgBAEIgBAEIgCAEIgjBRIgDAJIgFAIQgCADgEACQgEACgGAAQgFAAgEgCg");
	this.shape_369.setTransform(-92.4,128.5);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#660000").s().p("AgJA9QgDgDAAgHIAAhkQAAgHADgEQAEgEAFAAQAGAAAEAEQADADAAAIIAABkQAAAHgDADQgEAEgGAAQgFAAgEgEg");
	this.shape_370.setTransform(-107,128.5);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgKAEgIQADgJAHgHQAHgFAJgEQAKgDALAAQAQgBALAHQALAFAGAJQAGAKAAAJQAAAHgGAEQgGACgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgEIAIgHQACgCAEABQAEAAACABQADACAAAEQAAADgDAFQgDAEgFADQgGAEgJADQgIACgMAAQgYAAgPgMgAgPgYQgGAGgCALIAwAAQgBgMgHgFQgGgGgKAAQgJAAgHAGg");
	this.shape_371.setTransform(-115.6,130.2);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#660000").s().p("AAfA9QgEgDAAgGIAAgDIgKAJIgMAFQgFACgHAAQgKAAgIgEQgIgDgGgHQgGgGgDgJQgDgJAAgKQAAgVAMgNQAMgMAUAAQALAAAIAEQAIADAHAHIAAgiQAAgHAEgEQADgEAGAAQAGAAADAEQADADAAAHIAABmQAAAGgDAEQgEADgFAAQgGAAgDgEgAgMgIQgGAEgDAGQgDAGAAAJQAAAKADAGQADAHAGAEQAGADAGAAQAHAAAGgDQAGgEADgGQAEgHAAgKQAAgJgEgHQgDgFgGgEQgGgEgHAAQgGAAgGAEg");
	this.shape_372.setTransform(-128.1,128.5);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#660000").s().p("AgJA9QgDgEAAgHIAAhCQAAgGADgEQAEgDAFAAQAGAAADADQAEAEAAAGIAABCQAAAHgEAEQgDADgGAAQgFAAgEgDgAgIgrQgEgDAAgGQAAgFAEgDQAEgDAEAAQAFAAAEADQAEADAAAFQAAAGgEADQgEADgFAAQgFAAgDgDg");
	this.shape_373.setTransform(-136.8,128.5);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#660000").s().p("AgtA8QgEgEAAgIIAAhfQAAgFACgEQACgDAEgCQAEgCAGAAIBEAAQAHAAADADQADADAAAEQAAAFgDACQgDADgHAAIg5AAIAAAgIAvAAQAHAAADADQADACAAAFQAAADgDADQgDACgHAAIgvAAIAAApQAAAIgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_374.setTransform(-144.8,128.6);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#660000").s().p("AgKAKQgFgEAAgGQAAgFAFgDQAEgFAGAAQAGAAAFAFQAFADAAAFQAAAGgFAEQgFAEgGAAQgGAAgEgEg");
	this.shape_375.setTransform(88.1,217.8);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#660000").s().p("AgXAvQgKgEgHgGQgIgHgEgKQgEgJAAgLQAAgLAEgJQAEgJAIgHQAHgHAKgDQALgEAMAAQANAAAKAEQALADAHAIQAIAGAEAKQAEAIAAALQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgbQgGADgEAIQgEAHAAAJQAAAKAEAHQAEAIAGADQAGAEAIAAQANAAAIgJQAHgIAAgPQAAgPgHgIQgIgJgNAAQgIAAgGAFg");
	this.shape_376.setTransform(79.3,214.1);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#660000").s().p("AAgAvQgEgEgFgGQgKAGgJAEQgJAEgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgJAHgIQAIgGANgDIAOgCIARgDIARgFQgBgKgEgEQgEgEgMgBQgKABgGACQgFACgEAGIgGAHQgCACgFgBQgFABgDgDQgEgDAAgEQAAgHAGgFQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAOIAAAOIAAAOQAAAHACAIIADAJQAAAFgEACQgFAEgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAEAEQAFAFAJAAQAHAAAHgEQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_377.setTransform(53.6,214.1);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_378.setTransform(31.7,212.3);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#660000").s().p("AAcAwQgDgCgEgGIgVgaIgUAaIgIAIQgDADgFAAQgGAAgEgDQgDgDAAgEQAAgEAFgIIAageIgWgbQgHgHAAgGQABgDADgDQADgDAGAAQAGAAADACIAHAIIASAXIASgXIAIgIQADgCAFAAQAGAAADADQAEADAAADIgBAGIgFAHIgXAbIAaAeQAGAJAAADQAAAEgEADQgEADgFAAQgFAAgEgDg");
	this.shape_379.setTransform(23.2,214.1);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#660000").s().p("AAyBAQgFgEAAgHIAAhcIgYBVIgEAMQgBAEgEADQgFADgHAAQgFAAgDgCQgEgCgCgDIgEgHIgCgIIgZhVIAABcQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhqQAAgIAFgDQAGgDAIAAIAKAAIANABQADABACAEIAFALIAVBJIAXhJIADgLQADgEAEgBIAMgBIAJAAQAKAAAFADQAFADAAAIIAABqQAAAHgEAEQgEAEgGAAQgHAAgDgEg");
	this.shape_380.setTransform(-3.8,212.3);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAGgKAEQgIAEgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgJAIgIQAHgGANgDIANgCIASgDIAQgFQAAgKgEgEQgEgEgMgBQgLABgFACQgGACgEAGIgFAHQgBACgGgBQgFABgDgDQgEgDAAgEQAAgHAGgFQAFgHALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAOIAAAOIgBAOQAAAHAEAIIACAJQAAAFgEACQgEAEgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAFAFAJAAQAHAAAIgEQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_381.setTransform(-24.4,214.1);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#660000").s().p("AgaAuQgLgEgGgFQgFgHAAgGQAAgEADgDQADgDAGAAQAEAAACACIAFAFQAFAHAGADQAGAEAJAAQAJAAAGgEQAFgDAAgFQAAgGgFgDQgHgDgMgDQgPgDgIgEQgKgCgGgGQgFgFAAgJQAAgIAFgGQAFgHALgEQAKgEANAAQAKAAAKACQAIACAGADQAGAEADAEQAEAEAAAEQAAAFgEACQgDADgHAAQgEAAgDgCIgHgHQgDgEgEgCQgFgCgHAAQgIAAgFADQgEADgBAEQAAAEAEADIAKAEIARAEQANACAJAEQAIAEAFAFQAEAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgPAAgLgFg");
	this.shape_382.setTransform(-44.2,214.1);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_383.setTransform(-52.9,212.3);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#660000").s().p("AgJBCQgEgFAAgHIAAhsQAAgHADgEQAEgDAGAAQAGAAAEADQAEAEAAAHIAABsQAAAHgEAFQgEADgGAAQgGAAgDgDg");
	this.shape_384.setTransform(-58.7,212.2);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#660000").s().p("AAgAvQgEgEgFgGQgKAGgJAEQgJAEgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgJAHgIQAIgGANgDIANgCIASgDIARgFQgBgKgEgEQgEgEgMgBQgKABgGACQgFACgEAGIgGAHQgCACgFgBQgFABgDgDQgEgDAAgEQAAgHAGgFQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAOIAAAOIgBAOQAAAHADAIIADAJQAAAFgEACQgFAEgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAEAEQAFAFAJAAQAHAAAHgEQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_385.setTransform(-67.9,214.1);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_386.setTransform(-77.1,212.3);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#660000").s().p("AgkA+QgLgGgGgIQgHgJAAgJQAAgFAEgDQAEgEAGAAQAFAAADADQADADADAEIAHAMQADADAGADQAGAEAKAAQANAAAIgHQAKgFgBgIQAAgHgEgEQgFgEgIgCQgHgDgLgCQgRgEgLgEQgLgEgHgHQgGgJAAgLQAAgLAHgIQAGgJAOgFQANgFARABQAOAAAKADQAKADAHAFQAHAFADAFQADAGABAFQAAAFgFAEQgDAEgHAAQgFAAgDgDQgDgCgCgFQgFgIgFgEQgHgEgMAAQgLAAgIAEQgIAFAAAGQAAAFADACQACADAFADIAJADIAOAEIAYAFQAKADAIAFQAGAEAFAGQAEAHAAAKQAAANgHAKQgHAJgOAGQgOAFgTAAQgVAAgPgHg");
	this.shape_387.setTransform(-112.7,212.2);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDACQgDADgDAGIgDANIgBATIAAAVQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_388.setTransform(277.6,189.9);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#660000").s().p("AAgAvQgEgEgFgGQgKAHgJADQgJAEgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgJAHgIQAIgGANgDIAOgCIARgDIARgFQgBgJgEgFQgEgEgMgBQgKABgGACQgFACgEAGIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAGgFQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAJAAAOIAAANIgBAOQAAAHADAIIADAJQAAAFgEACQgFAEgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAEAEQAFAFAJAAQAHgBAHgDQAIgDADgFQADgGABgNIAAgEIgSAFg");
	this.shape_389.setTransform(266,189.9);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#660000").s().p("AgJBCQgEgFAAgHIAAhsQAAgHADgEQAEgDAGAAQAGAAAEADQAEAEAAAHIAABsQAAAHgEAFQgEADgGAAQgGAAgDgDg");
	this.shape_390.setTransform(256.7,188);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgDIgLAJQgFAEgHACQgGACgJAAQgKAAgIgEQgIgEgEgGQgGgIAAgQIAAgwQAAgIAEgDQAEgEAGAAQAHAAAEAEQADADAAAIIAAAnQAAAJACAFQACAGAEAEQAFADAHAAQAHAAAFgEQAHgDADgGQACgFAAgSIAAgeQAAgIAFgDQAEgEAGAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_391.setTransform(247.4,189.9);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#660000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgIADgDQAEgEAGABQAHAAADADQAEAEAAAGIAAAEQAIgJAJgEQAJgEAKAAQANAAALAGQALAGAGALQAHAMAAAPQAAAMgDAJQgFAJgGAHQgGAGgJAEQgJADgKAAQgLAAgJgEQgJgEgHgJIAAAmQAAAQgOAAQgHABgDgFgAgSgpQgJAHABAQQgBAQAJAGQAHAJALAAQAIAAAGgDQAGgFAEgGQADgGAAgLQAAgKgDgHQgDgHgGgEQgHgDgIAAQgKgBgIAJg");
	this.shape_392.setTransform(234.4,191.7);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALADAHAIQAIAGAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgbQgHADgDAHQgEAIAAAJQAAAKAEAHQADAIAHADQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgPgHgIQgIgJgNAAQgIAAgGAFg");
	this.shape_393.setTransform(221,189.9);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#660000").s().p("Ag2BAQgDgEAAgIIAAhnQgBgJAFgEQAFgDAKAAIAnAAQARAAAKACQAJACAHAGQAIAFADAIQAEAHAAAKQAAAUgPAKQgPAKgcAAIgcAAIAAAmQAAAJgEAEQgFAEgGAAQgHAAgFgEgAgbgGIAVAAQAKAAAIgCQAHgCAEgFQAEgEAAgIQAAgJgGgFQgHgGgUAAIgVAAg");
	this.shape_394.setTransform(208.5,188.1);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgbQgGADgEAHQgDAIAAAJQAAAKADAHQAEAIAGADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgIAAgGAFg");
	this.shape_395.setTransform(189.2,189.9);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgFAHgGADQgGAEgHACQgFABgHAAQgLAAgIgDQgJgFgHgHQgGgGgDgKQgEgKAAgLQAAgWAOgNQAMgNAWAAQALAAAIADQAJAFAIAHIAAglQAAgIADgEQAEgDAGAAQAHgBADAEQAEADAAAIIAABtQAAAHgEAEQgDADgHAAQgFAAgEgDgAgNgJQgHAEgCAHQgEAHAAAJQAAALAEAGQADAHAGAFQAHADAGAAQAIAAAGgDQAGgEAEgHQAEgHAAgLQAAgJgEgIQgEgGgGgEQgGgDgIAAQgHAAgGADg");
	this.shape_396.setTransform(175.6,188);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_397.setTransform(166.3,188.1);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgvIgEAAQgGAAgDgDQgEgCAAgEQAAgEAEgDQADgCAHAAIADAAIAAgPIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGAAADACQADADAAAEQAAAEgEACQgFACgIABIgGAAIAAAtIABAJQAAACACACQACACAFAAIAHgBIAHAAQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_398.setTransform(160,188.2);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDACQgDADgDAGIgDANIgBATIAAAVQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_399.setTransform(151.5,189.9);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#660000").s().p("AAgAvQgEgEgFgGQgKAHgJADQgJAEgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgJAHgIQAIgGANgDIAOgCIARgDIARgFQgBgJgEgFQgEgEgNgBQgJABgGACQgFACgEAGIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAJAAAOIAAANIAAAOQAAAHACAIIADAJQAAAFgEACQgFAEgEAAQgFAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAEAEQAFAFAIAAQAIgBAHgDQAIgDADgFQADgGABgNIAAgEIgSAFg");
	this.shape_400.setTransform(139.9,189.9);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#660000").s().p("Ag2BAQgDgEAAgIIAAhnQgBgJAFgEQAFgDAKAAIAnAAQARAAAKACQAJACAHAGQAIAFADAIQAEAHAAAKQAAAUgPAKQgPAKgcAAIgcAAIAAAmQAAAJgEAEQgFAEgGAAQgHAAgFgEgAgbgGIAVAAQAKAAAIgCQAHgCAEgFQAEgEAAgIQAAgJgGgFQgHgGgUAAIgVAAg");
	this.shape_401.setTransform(127.5,188.1);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#660000").s().p("AgJBCQgEgFAAgHIAAhsQAAgHADgEQAEgDAGAAQAGAAAEADQAEAEAAAHIAABsQAAAHgEAFQgEADgGAAQgGAAgDgDg");
	this.shape_402.setTransform(111.7,188);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_403.setTransform(102.5,189.9);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgbQgGADgEAHQgDAIgBAJQABAKADAHQAEAIAGADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgIAAgGAFg");
	this.shape_404.setTransform(84.3,189.9);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgFAHgGADQgGAEgHACQgFABgHAAQgLAAgIgDQgJgFgHgHQgGgGgDgKQgEgKAAgLQAAgWAOgNQAMgNAWAAQALAAAJADQAIAFAIAHIAAglQAAgIADgEQAEgDAGAAQAHgBADAEQAEADAAAIIAABtQAAAHgEAEQgDADgHAAQgFAAgEgDgAgNgJQgHAEgCAHQgEAHAAAJQAAALAEAGQADAHAGAFQAHADAGAAQAIAAAGgDQAGgEAEgHQAEgHAAgLQAAgJgEgIQgEgGgGgEQgGgDgIAAQgHAAgGADg");
	this.shape_405.setTransform(70.8,188);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#660000").s().p("AAbAvQgFgEAAgHIAAgpQAAgNgDgGQgEgHgMAAQgHABgGAEQgGAEgDAGQgDAGAAAOIAAAgQAAAHgDAEQgEAEgHAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAEAAADABIAFAFQACADAAAFIAAADQAHgJAJgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_406.setTransform(57.9,189.9);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgDIgLAJQgGAEgGACQgGACgJAAQgKAAgIgEQgIgEgEgGQgGgIAAgQIAAgwQAAgIAEgDQADgEAHAAQAHAAADAEQAEADAAAIIAAAnQAAAJACAFQACAGAEAEQAFADAHAAQAHAAAFgEQAHgDADgGQACgFAAgSIAAgeQABgIAEgDQADgEAHAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_407.setTransform(45,189.9);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#660000").s().p("AgPBCQgEgFAAgHIAAhBIgIAAQgHAAgDgCQgEgDAAgEQAAgJAPAAIAHAAIAAgIQAAgMADgGQADgHAJgEQAHgCAOAAQAZAAAAAKQAAAEgDACQgCACgEABIgGgBIgHAAQgHAAgDADQgCAEAAAIIAAAGIAHAAQARAAAAAIQAAAGgFADQgEABgIAAIgHAAIAABBQAAAHgEAFQgEADgFAAQgGAAgEgDg");
	this.shape_408.setTransform(35.3,188);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#660000").s().p("AgOAaQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgDAFgCQALgHAAgJQgGAAgFgCQgFgEAAgGQAAgGAFgFQAFgDAGgBQAFABAEACQAEACACAFQACAFAAAGQAAAJgEAHQgEAJgHAEQgFAEgFAAQgEABgCgCg");
	this.shape_409.setTransform(22.7,194.9);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#660000").s().p("AgKBBQgEgEAAgJIAAhoQAAgJAEgEQAEgDAGAAQAHAAAFADQADAEAAAJIAABoQAAAJgDAEQgFAEgHAAQgGAAgEgEg");
	this.shape_410.setTransform(15.9,188);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#660000").s().p("AAoBCQgDgCgDgEIgHgJIgMgSQgHgKgGgGQgEgFgFgCQgGgCgIAAIgLAAIAAArQAAAJgEAEQgFAEgGAAQgIAAgEgEQgEgEAAgJIAAhmQAAgJAFgEQAEgDAKAAIAyAAIASAAIANADQAHADAGAFQAFAFAEAHQACAGAAAHQAAAPgJAJQgKAIgUAEQAIAEAIAHIAOARQAFAIAEAHQADAHAAACQAAADgCACQgCADgEACQgDABgEAAQgFAAgEgCgAgggKIAcAAQALAAAHgCQAIgCAEgEQADgEAAgHQAAgFgDgFQgDgEgGgCQgFgCgPAAIgdAAg");
	this.shape_411.setTransform(5.1,188.1);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#660000").s().p("Ag1BAQgFgEAAgIIAAhnQABgJAEgEQAFgDAKAAIAnAAQASAAAJACQAJACAIAGQAGAFAEAIQAEAHgBAKQAAAUgOAKQgPAKgcAAIgbAAIAAAmQAAAJgFAEQgFAEgGAAQgHAAgEgEgAgagGIAUAAQALAAAHgCQAHgCAEgFQAEgEAAgIQAAgJgGgFQgHgGgUAAIgUAAg");
	this.shape_412.setTransform(-9.7,188.1);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#660000").s().p("AgJBCQgEgFAAgHIAAhsQAAgHADgEQAEgDAGAAQAGAAAEADQAEAEAAAHIAABsQAAAHgEAFQgEADgGAAQgGAAgDgDg");
	this.shape_413.setTransform(-25.5,188);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_414.setTransform(-34.7,189.9);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgGAHgFADQgGAEgHACQgFABgHAAQgLAAgJgDQgIgFgHgHQgGgGgDgKQgEgKAAgLQAAgWAOgNQANgNAVAAQALAAAJADQAIAFAIAHIAAglQAAgIADgEQAEgDAGAAQAHgBADAEQAEADAAAIIAABtQAAAHgEAEQgDADgHAAQgFAAgEgDgAgNgJQgGAEgDAHQgEAHAAAJQAAALAEAGQADAHAGAFQAGADAHAAQAIAAAGgDQAGgEAEgHQAEgHAAgLQAAgJgEgIQgEgGgGgEQgGgDgIAAQgHAAgGADg");
	this.shape_415.setTransform(-48.1,188);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#660000").s().p("AgJBCQgEgFAAgHIAAhsQAAgHADgEQAEgDAGAAQAGAAAEADQAEAEAAAHIAABsQAAAHgEAFQgEADgGAAQgGAAgDgDg");
	this.shape_416.setTransform(-62.8,188);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#660000").s().p("AAgAvQgEgEgFgGQgKAHgJADQgJAEgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgJAHgIQAIgGANgDIANgCIASgDIARgFQgBgJgEgFQgEgEgMgBQgKABgGACQgFACgEAGIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAGgFQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAJAAAOIAAANIgBAOQAAAHADAIIADAJQAAAFgEACQgFAEgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAEAEQAFAFAJAAQAHgBAHgDQAIgDADgFQADgGABgNIAAgEIgSAFg");
	this.shape_417.setTransform(-72,189.9);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDACQgDADgDAGIgDANIgBATIAAAVQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_418.setTransform(-81.9,189.9);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#660000").s().p("AgbBCQgMgEgGgFQgGgHAAgGQAAgEADgDQAEgDAFAAQAGAAAFAFIAFAFIAFAFIAHACIAKABQAKAAAGgDQAGgDADgFQACgEABgGIAAgRQgGAIgJAEQgJAEgLAAQgOAAgLgHQgKgGgGgMQgGgKAAgPQAAgLAEgJQADgJAHgHQAGgGAJgDQAIgDAKAAQALAAAJAEQAJAEAIAJIAAgEQAAgGAEgEQADgEAGABQAIAAADAEQADAFAAAJIAABIQAAAMgDAJQgDAJgHAGQgHAGgLADQgKACgQAAQgOABgMgEgAgTgpQgHAHAAAPQAAAQAHAHQAIAHALABQAHgBAHgDQAGgEAEgFQAEgHAAgKQAAgPgIgIQgIgIgMAAQgLgBgIAJg");
	this.shape_419.setTransform(-94,191.7);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_420.setTransform(-106.5,189.9);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgvIgEAAQgGAAgDgDQgEgCAAgEQAAgEAEgDQADgCAHAAIADAAIAAgPIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGAAADACQADADAAAEQAAAEgEACQgFACgIABIgGAAIAAAtIABAJQAAACACACQACACAFAAIAHgBIAHAAQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_421.setTransform(-116.2,188.2);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#660000").s().p("AAaAvQgDgEAAgHIAAgpQgBgNgEgGQgDgHgMAAQgHABgGAEQgGAEgDAGQgCAGAAAOIAAAgQgBAHgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAEAAADABIAFAFQACADAAAFIAAADQAIgJAIgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_422.setTransform(-126.8,189.9);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_423.setTransform(-136.2,188.1);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDACQgDADgDAGIgDANIgBATIAAAVQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_424.setTransform(-148.5,189.9);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALADAHAIQAIAGAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgbQgHADgDAHQgEAIABAJQgBAKAEAHQADAIAHADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgHAAgHAFg");
	this.shape_425.setTransform(-160.3,189.9);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgFAHgGADQgGAEgGACQgGABgIAAQgKAAgJgDQgIgFgHgHQgGgGgEgKQgDgKAAgLQAAgWAOgNQANgNAUAAQAMAAAJADQAIAFAIAHIAAglQAAgIAEgEQADgDAGAAQAHgBADAEQAEADAAAIIAABtQAAAHgEAEQgEADgGAAQgFAAgEgDgAgNgJQgGAEgDAHQgEAHAAAJQAAALAEAGQADAHAHAFQAFADAHAAQAHAAAHgDQAGgEAEgHQAEgHgBgLQABgJgEgIQgEgGgGgEQgHgDgHAAQgHAAgGADg");
	this.shape_426.setTransform(-173.9,188);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAHgJADQgJAEgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgJAIgIQAHgGANgDIAOgCIARgDIARgFQgBgJgEgFQgEgEgNgBQgKABgFACQgGACgEAGIgFAHQgBABgGAAQgFAAgDgCQgEgDAAgEQAAgHAFgFQAGgHALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAJAAAOIAAANIAAAOQAAAHACAIIADAJQAAAFgEACQgFAEgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAFAEQAFAFAHAAQAIgBAHgDQAHgDAEgFQAEgGAAgNIAAgEIgSAFg");
	this.shape_427.setTransform(-186.6,189.9);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDACQgDADgDAGIgDANIgBATIAAAVQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_428.setTransform(-196.5,189.9);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgbQgHADgDAHQgDAIAAAJQAAAKADAHQADAIAHADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgIAAgGAFg");
	this.shape_429.setTransform(-208.3,189.9);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#660000").s().p("AgDBEIgKgDIgHgGIgIgHIAAADQAAAHgDAEQgFADgGAAQgGAAgDgDQgEgEAAgHIAAhsQAAgIADgEQAEgDAGAAQAHAAAEADQADAEAAAHIAAAmQAIgIAJgDQAIgEALAAQAOAAAMAGQAKAFAGAMQAGAKAAAPQAAAMgEAKQgCAJgHAGQgGAHgJAFQgJADgLAAQgHABgEgCgAgMgJQgHAEgEAHQgDAHgBAKQAAAPAIAIQAIAIAMAAQALAAAHgIQAIgIAAgQQAAgJgDgHQgDgHgGgEQgGgDgIAAQgIAAgFADg");
	this.shape_430.setTransform(-221.2,188);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAHgKADQgIAEgMAAQgLAAgJgEQgIgEgFgGQgEgHAAgIQAAgJAHgIQAIgGANgDIANgCIASgDIAQgFQAAgJgEgFQgEgEgMgBQgKABgGACQgFACgEAGIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAGgFQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAJAAAOIAAANIgBAOQAAAHADAIIADAJQAAAFgEACQgFAEgFAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAGAFAIAAQAHgBAHgDQAIgDADgFQADgGAAgNIAAgEIgSAFg");
	this.shape_431.setTransform(-234.3,189.9);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#660000").s().p("AgJBCQgEgFAAgHIAAhsQAAgHADgEQAEgDAGAAQAGAAAEADQAEAEAAAHIAABsQAAAHgEAFQgEADgGAAQgGAAgDgDg");
	this.shape_432.setTransform(-243.6,188);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgbQgHADgDAHQgEAIABAJQgBAKAEAHQADAIAHADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgIAAgGAFg");
	this.shape_433.setTransform(-252.9,189.9);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_434.setTransform(-283.7,189.9);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgDIgLAJQgFAEgHACQgGACgIAAQgLAAgIgEQgIgEgFgGQgFgIAAgQIAAgwQAAgIAEgDQADgEAHAAQAGAAAFAEQADADAAAIIAAAnQABAJABAFQACAGAFAEQADADAIAAQAGAAAHgEQAGgDADgGQACgFAAgSIAAgeQAAgIAEgDQAFgEAGAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgEAEgFAAQgHAAgDgEg");
	this.shape_435.setTransform(-296.5,189.9);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#660000").s().p("AgPBCQgEgFAAgHIAAhBIgIAAQgHAAgDgCQgEgDAAgEQAAgJAPAAIAHAAIAAgIQAAgMADgGQADgHAJgEQAHgCAOAAQAZAAAAAKQAAAEgDACQgCACgEABIgGgBIgHAAQgHAAgDADQgCAEAAAIIAAAGIAHAAQARAAAAAIQAAAGgFADQgEABgIAAIgHAAIAABBQAAAHgEAFQgEADgFAAQgGAAgEgDg");
	this.shape_436.setTransform(-306.2,188);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_437.setTransform(278.5,165.7);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgBgEAAQgHAAgDACQgDADgDAGIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_438.setTransform(268.6,165.7);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#660000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgIAEgDQAEgDAFAAQAHAAADADQAEAEAAAGIAAAEQAIgJAJgEQAJgEAKAAQANAAALAGQALAGAGALQAHALAAARQAAALgDAJQgFAJgGAHQgHAGgIAEQgJAEgKgBQgLABgJgFQgIgEgIgJIAAAmQAAAQgOAAQgHABgDgFgAgSgpQgJAHABARQgBAPAJAGQAHAJAMAAQAHAAAGgDQAGgFADgGQAEgGAAgLQAAgKgDgHQgDgHgHgEQgGgDgHgBQgLAAgIAJg");
	this.shape_439.setTransform(256.8,167.5);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#660000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgBgEgEgEQgDgDgIAAQgFAAgFADQgFACgDAGQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgGAAgDgEQgEgEgBgIIAAgnIgBgOQAAgFgDgEQgEgDgGAAQgOgBgFAJQgEAJgBAOIAAAiQAAAIgDAEQgFAEgGAAQgGAAgFgEQgEgEAAgIIAAhHQAAgGAEgEQADgEAGAAQAGAAAFAEQADADAAAGIAAACQAIgHAJgEQAIgEAKAAQALAAAIAEQAGAEAFAHQAIgHAIgEQAIgEAKAAQAMABAIAEQAJADAEAIQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgGAAgFgEg");
	this.shape_440.setTransform(240.4,165.7);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_441.setTransform(224.6,165.7);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgHAEgEQADgEAGAAQAGAAAEAEQAEAEAAAHIAABGQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_442.setTransform(215.3,163.9);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#660000").s().p("AgbAuQgKgDgGgHQgFgGAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAFQAEAHAHAEQAGADAKAAQAIAAAFgDQAGgEAAgEQAAgHgGgDQgFgDgNgDQgOgDgKgEQgJgCgFgGQgGgGAAgIQAAgHAFgHQAGgHAJgEQAKgEAOAAQALAAAIACQAKACAFADQAGAEADAEQADAEAAAEQABAFgEACQgEADgFAAQgEAAgEgCIgHgHQgDgDgFgDQgEgCgHAAQgHAAgFADQgGADAAAEQABAEADADIALAEIAQAEQANADAJAEQAIADAEAFQAFAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgPAAgLgFg");
	this.shape_443.setTransform(206.6,165.7);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAKQAEAIAAALQAAALgEAJQgEAKgHAHQgIAHgKADQgLAEgNAAQgMAAgKgEgAgOgbQgGAEgEAGQgDAIgBAJQABAKADAHQAEAIAGADQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgPgHgIQgIgJgNAAQgHABgHAEg");
	this.shape_444.setTransform(188.9,165.7);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#660000").s().p("AgbBCQgMgEgGgFQgGgHAAgFQAAgFADgDQAEgDAFAAQAGAAAFAFIAFAFIAFAEIAHADIAKABQAKAAAGgDQAGgCADgGQACgEABgGIAAgSQgGAJgJAEQgJAEgLAAQgOAAgLgHQgKgGgGgMQgGgKAAgPQAAgLAEgKQADgJAHgGQAGgGAJgDQAIgDAKAAQALAAAJAEQAJAEAIAJIAAgEQAAgGAEgEQADgDAGAAQAIAAADAEQADAFAAAJIAABHQAAANgDAJQgDAJgHAGQgHAGgLACQgKADgQAAQgOABgMgEgAgTgpQgHAHAAAPQAAAQAHAGQAIAJALAAQAHgBAHgDQAGgEAEgFQAEgHAAgJQAAgQgIgIQgIgIgMgBQgLAAgIAJg");
	this.shape_445.setTransform(175.9,167.5);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgBgEAAQgHAAgDACQgDADgDAGIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_446.setTransform(166,165.7);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#660000").s().p("AAhAvQgFgDgEgIQgLAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAIgIQAHgGANgCIANgDIASgDIAQgFQAAgJgEgFQgEgFgNAAQgKAAgFADQgGADgEAFIgFAHQgBABgGAAQgFAAgDgCQgEgDAAgEQAAgHAFgGQAGgGALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAAPIAAANIgBAOQABAHADAIIACAKQAAADgEADQgEAEgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAFAEQAEAFAIAAQAIgBAIgDQAGgDAEgFQAEgGgBgNIAAgEIgSAFg");
	this.shape_447.setTransform(154.3,165.7);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#660000").s().p("AgEBEIgKgDIgGgGIgIgHIAAADQAAAHgEAEQgEADgGAAQgFAAgEgDQgEgEAAgHIAAhsQAAgHAEgFQADgDAGAAQAHAAADADQAEAEAAAHIAAAmQAJgHAHgEQAJgEAMAAQAOAAAKAGQALAGAGALQAGAKAAAPQAAAMgDAKQgEAJgGAHQgGAGgJAFQgJADgLAAQgGABgGgCgAgNgJQgGAEgEAHQgEAHABAKQAAAPAIAIQAHAIAMAAQAKAAAJgIQAHgIAAgPQAAgLgDgGQgEgHgFgEQgGgEgIAAQgHAAgHAEg");
	this.shape_448.setTransform(141.5,163.8);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#660000").s().p("AA5AvQgFgEAAgIIAAgpIgBgNQgBgEgDgEQgDgDgIAAQgFAAgFADQgFACgDAGQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgFgEQgDgEAAgIIAAgnIgBgOQgBgFgDgEQgDgDgIAAQgOgBgEAJQgFAJABAOIAAAiQgBAIgEAEQgDAEgHAAQgGAAgEgEQgFgEAAgIIAAhHQAAgGAEgEQADgEAHAAQAGAAAEAEQADADAAAGIAAACQAIgHAIgEQAJgEAKAAQALAAAHAEQAHAEAGAHQAGgHAJgEQAJgEAJAAQAMABAJAEQAIADAEAIQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_449.setTransform(125,165.7);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_450.setTransform(109.2,165.7);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#660000").s().p("AAaAvQgDgEAAgIIAAgoQAAgNgFgGQgDgHgMABQgHAAgGADQgGAFgDAGQgCAGAAAPIAAAeQAAAIgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgDQADgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAIgJAIgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_451.setTransform(91.1,165.7);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgHAEgEQADgEAGAAQAGAAAEAEQAEAEAAAHIAABGQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_452.setTransform(81.7,163.9);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#660000").s().p("AgbAuQgKgDgGgHQgFgGAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAFQAEAHAHAEQAGADAKAAQAIAAAFgDQAGgEAAgEQAAgHgGgDQgFgDgNgDQgOgDgKgEQgJgCgFgGQgGgGAAgIQAAgHAFgHQAGgHAJgEQAKgEAOAAQALAAAIACQAKACAFADQAGAEADAEQADAEAAAEQABAFgEACQgEADgFAAQgEAAgEgCIgHgHQgDgDgFgDQgEgCgHAAQgHAAgFADQgGADAAAEQABAEADADIALAEIAQAEQANADAJAEQAIADAEAFQAFAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgPAAgLgFg");
	this.shape_453.setTransform(72.9,165.7);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#660000").s().p("AAhAvQgFgDgEgIQgLAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAIgIQAHgGANgCIAOgDIARgDIAQgFQAAgJgEgFQgEgFgNAAQgKAAgFADQgFADgFAFIgFAHQgBABgGAAQgFAAgDgCQgEgDAAgEQAAgHAFgGQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHADAIIACAKQAAADgEADQgEAEgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAFAEQAFAFAHAAQAIgBAIgDQAGgDAEgFQADgGAAgNIAAgEIgSAFg");
	this.shape_454.setTransform(55.4,165.7);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAguIgEAAQgGAAgDgDQgEgCAAgEQAAgEAEgDQADgCAHAAIADAAIAAgPIAAgKQAAgEACgCQACgDADgBQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGAAADACQADADAAAEQAAAEgEACQgFADgIAAIgGAAIAAAtIABAJQAAACACACQACACAFABIAHgCIAHAAQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_455.setTransform(45.7,164);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#660000").s().p("AgbAuQgLgDgFgHQgFgGAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAFQAEAHAHAEQAGADAJAAQAJAAAGgDQAFgEAAgEQAAgHgFgDQgHgDgLgDQgPgDgKgEQgJgCgGgGQgFgGAAgIQAAgHAFgHQAFgHAKgEQALgEAOAAQAJAAAKACQAJACAGADQAFAEAEAEQADAEAAAEQgBAFgDACQgDADgHAAQgEAAgDgCIgHgHQgDgDgEgDQgFgCgGAAQgIAAgGADQgEADAAAEQgBAEAEADIAKAEIARAEQANADAJAEQAIADAEAFQAFAFAAAHQAAAKgGAIQgFAHgMAEQgLAEgPAAQgPAAgMgFg");
	this.shape_456.setTransform(35.6,165.7);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgHAEgEQADgEAGAAQAGAAAEAEQAEAEAAAHIAABGQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_457.setTransform(26.9,163.9);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#660000").s().p("AgJBCQgEgFAAgHIAAhsQAAgHADgEQAEgDAGAAQAGAAAEADQAEAEAAAHIAABsQAAAHgEAFQgEADgGAAQgGAAgDgDg");
	this.shape_458.setTransform(21.1,163.8);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#660000").s().p("AAgAvQgDgDgGgIQgKAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgDIAQgFQAAgJgEgFQgEgFgMAAQgKAAgGADQgGADgDAFIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAGgGQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHAEAIIACAKQAAADgEADQgEAEgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAGAFAIAAQAHgBAIgDQAGgDAEgFQADgGAAgNIAAgEIgSAFg");
	this.shape_459.setTransform(11.9,165.7);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgHAEgEQADgEAGAAQAGAAAEAEQAEAEAAAHIAABGQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_460.setTransform(2.7,163.9);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAKQAEAIAAALQAAALgEAJQgEAKgIAHQgHAHgLADQgKAEgNAAQgMAAgKgEgAgOgbQgHAEgDAGQgEAIAAAJQAAAKAEAHQADAIAHADQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgPgHgIQgIgJgNAAQgIABgGAEg");
	this.shape_461.setTransform(-19.3,165.7);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#660000").s().p("AgbAuQgLgDgFgHQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAFQAFAHAGAEQAGADAJAAQAJAAAFgDQAGgEAAgEQAAgHgGgDQgFgDgMgDQgPgDgKgEQgJgCgFgGQgGgGAAgIQAAgHAFgHQAFgHAKgEQALgEAOAAQAJAAAJACQAJACAHADQAFAEAEAEQACAEAAAEQAAAFgDACQgEADgFAAQgEAAgEgCIgHgHQgDgDgFgDQgEgCgGAAQgJAAgFADQgEADAAAEQAAAEADADIAKAEIARAEQAOADAIAEQAIADAEAFQAFAFAAAHQAAAKgGAIQgFAHgMAEQgLAEgQAAQgOAAgMgFg");
	this.shape_462.setTransform(-31.7,165.7);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#660000").s().p("AAgAvQgDgDgGgIQgKAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAIgIQAHgGANgCIANgDIASgDIAQgFQAAgJgEgFQgEgFgMAAQgLAAgFADQgGADgEAFIgFAHQgBABgGAAQgFAAgDgCQgEgDAAgEQAAgHAGgGQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHAEAIIACAKQAAADgEADQgEAEgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAFAFAJAAQAHgBAIgDQAGgDAEgFQAEgGgBgNIAAgEIgSAFg");
	this.shape_463.setTransform(-49.2,165.7);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#660000").s().p("AgbBCQgMgEgGgFQgGgHAAgFQAAgFADgDQAEgDAFAAQAGAAAFAFIAFAFIAFAEIAHADIAKABQAKAAAGgDQAGgCADgGQACgEABgGIAAgSQgGAJgJAEQgJAEgLAAQgOAAgLgHQgKgGgGgMQgGgKAAgPQAAgLAEgKQADgJAHgGQAGgGAJgDQAIgDAKAAQALAAAJAEQAJAEAIAJIAAgEQAAgGAEgEQADgDAGAAQAIAAADAEQADAFAAAJIAABHQAAANgDAJQgDAJgHAGQgHAGgLACQgKADgQAAQgOABgMgEgAgTgpQgHAHAAAPQAAAQAHAGQAIAJALAAQAHgBAHgDQAGgEAEgFQAEgHAAgJQAAgQgIgIQgIgIgMgBQgLAAgIAJg");
	this.shape_464.setTransform(-68.4,167.5);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAKQAEAIAAALQAAALgEAJQgEAKgIAHQgHAHgLADQgKAEgNAAQgMAAgLgEgAgOgbQgGAEgEAGQgDAIAAAJQAAAKADAHQAEAIAGADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgHABgHAEg");
	this.shape_465.setTransform(-81.2,165.7);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#660000").s().p("AgJBCQgEgFAAgHIAAhsQAAgHADgEQAEgDAGAAQAGAAAEADQAEAEAAAHIAABsQAAAHgEAFQgEADgGAAQgGAAgDgDg");
	this.shape_466.setTransform(-90.6,163.8);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAKQAEAIAAALQAAALgEAJQgEAKgHAHQgIAHgKADQgLAEgNAAQgMAAgLgEgAgOgbQgHAEgDAGQgEAIABAJQgBAKAEAHQADAIAHADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgIABgGAEg");
	this.shape_467.setTransform(-99.9,165.7);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_468.setTransform(-112.8,165.7);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgFAHgGADQgGADgGADQgGABgIAAQgKAAgJgDQgIgFgHgGQgGgIgEgJQgDgJAAgMQAAgWAOgNQANgNAUAAQAMAAAJADQAIAFAIAHIAAglQAAgHAEgFQADgDAGAAQAHgBADAEQAEADAAAIIAABtQAAAHgEAEQgEADgGAAQgFAAgEgDgAgNgJQgGAEgDAHQgEAGAAALQAAAJAEAHQADAHAHAFQAFADAHAAQAHAAAHgDQAGgEAEgHQAEgHgBgKQABgKgEgIQgEgGgGgEQgHgDgHgBQgHAAgGAEg");
	this.shape_469.setTransform(-126.2,163.8);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgHAEgEQADgEAGAAQAGAAAEAEQAEAEAAAHIAABGQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_470.setTransform(-135.5,163.9);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_471.setTransform(-150,165.7);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgGAHgFADQgGADgHADQgFABgIAAQgKAAgJgDQgIgFgHgGQgGgIgDgJQgEgJAAgMQAAgWAOgNQANgNAUAAQAMAAAJADQAIAFAIAHIAAglQAAgHADgFQAEgDAGAAQAHgBADAEQAEADAAAIIAABtQAAAHgEAEQgDADgHAAQgFAAgEgDgAgNgJQgGAEgDAHQgEAGAAALQAAAJAEAHQADAHAHAFQAFADAHAAQAHAAAHgDQAGgEAEgHQADgHAAgKQAAgKgDgIQgEgGgGgEQgHgDgHgBQgHAAgGAEg");
	this.shape_472.setTransform(-163.4,163.8);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#660000").s().p("AgvBDQgGgDAAgGQAAgEADgDQADgCAGAAIAEABIAFAAQAFABADgCQACgBADgDIAFgJIADgGIgkhNQgDgHAAgDIACgFQACgDADgCQADgBAEAAQAGAAADADQAEADACAHIAXA8IAXg3IAFgLQACgFADgBQACgCAFABIAGABQADABACAEIABAEIgBAGIgDAGIglBVQgFALgEAGQgEAHgHADQgIAEgNgBQgNAAgGgCg");
	this.shape_473.setTransform(-181.3,167.5);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#660000").s().p("AAgAvQgEgDgFgIQgKAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIAOgDIARgDIARgFQgBgJgEgFQgEgFgNAAQgJAAgGADQgFADgEAFIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAFgGQAGgGALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAKQAAADgEADQgFAEgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAEAEQAFAFAIAAQAIgBAHgDQAIgDADgFQADgGABgNIAAgEIgSAFg");
	this.shape_474.setTransform(-198.5,165.7);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAguIgEAAQgGAAgDgDQgEgCAAgEQAAgEAEgDQADgCAHAAIADAAIAAgPIAAgKQAAgEACgCQACgDADgBQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGAAADACQADADAAAEQAAAEgEACQgFADgIAAIgGAAIAAAtIABAJQAAACACACQACACAFABIAHgCIAHAAQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_475.setTransform(-208.3,164);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#660000").s().p("AgbAuQgKgDgGgHQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAACACIAFAFQAEAHAHAEQAGADAKAAQAIAAAFgDQAGgEAAgEQAAgHgGgDQgFgDgNgDQgOgDgKgEQgJgCgFgGQgGgGAAgIQAAgHAFgHQAGgHAJgEQALgEANAAQALAAAIACQAJACAHADQAFAEAEAEQACAEAAAEQABAFgEACQgEADgFAAQgFAAgDgCIgHgHQgDgDgFgDQgEgCgHAAQgIAAgEADQgGADAAAEQABAEADADIALAEIAQAEQAOADAIAEQAIADAEAFQAFAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgPAAgLgFg");
	this.shape_476.setTransform(-218.3,165.7);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgHAEgEQADgEAGAAQAGAAAEAEQAEAEAAAHIAABGQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_477.setTransform(-227,163.9);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#660000").s().p("AgJBCQgEgFAAgHIAAhsQAAgHADgEQAEgDAGAAQAGAAAEADQAEAEAAAHIAABsQAAAHgEAFQgEADgGAAQgGAAgDgDg");
	this.shape_478.setTransform(-232.8,163.8);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#660000").s().p("AAhAvQgFgDgEgIQgLAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAIgIQAHgGANgCIAOgDIARgDIAQgFQAAgJgEgFQgEgFgNAAQgKAAgFADQgFADgFAFIgFAHQgBABgGAAQgFAAgDgCQgEgDAAgEQAAgHAFgGQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHADAIIACAKQAAADgEADQgEAEgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAFAEQAFAFAHAAQAIgBAIgDQAGgDAEgFQADgGAAgNIAAgEIgSAFg");
	this.shape_479.setTransform(-242,165.7);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgHAEgEQADgEAGAAQAGAAAEAEQAEAEAAAHIAABGQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_480.setTransform(-263.9,163.9);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgGAHgFADQgGADgGADQgGABgIAAQgKAAgJgDQgJgFgGgGQgGgIgEgJQgDgJAAgMQAAgWANgNQAOgNAUAAQAMAAAJADQAIAFAIAHIAAglQAAgHAEgFQADgDAHAAQAGgBADAEQAEADAAAIIAABtQAAAHgEAEQgEADgFAAQgGAAgEgDgAgNgJQgGAEgDAHQgEAGAAALQAAAJAEAHQADAHAHAFQAFADAHAAQAHAAAHgDQAGgEAEgHQAEgHgBgKQABgKgEgIQgEgGgGgEQgHgDgHgBQgHAAgGAEg");
	this.shape_481.setTransform(-273.9,163.8);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#660000").s().p("AAaAvQgDgEAAgIIAAgoQAAgNgFgGQgEgHgLABQgHAAgGADQgHAFgDAGQgBAGAAAPIAAAeQAAAIgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgDQAEgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAIgJAJgDQAHgFAMAAQALAAAJAFQAJAEAFAHQACAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_482.setTransform(-286.7,165.7);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgHAEgEQADgEAGAAQAGAAAEAEQAEAEAAAHIAABGQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_483.setTransform(-296.1,163.9);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#660000").s().p("AglA+QgKgGgHgIQgGgKAAgIQAAgFAEgDQAEgEAGAAQAFAAADADQAEACACAGIAGALQAEADAGAEQAGACAKAAQANABAJgHQAIgFABgIQAAgHgGgEQgEgEgHgCQgIgDgLgCQgQgEgMgEQgLgDgGgJQgHgHAAgMQAAgLAHgIQAHgJANgFQANgFARABQANAAALACQAKADAHAGQAHAFADAFQADAGAAAFQAAAFgEAEQgEAEgFAAQgGAAgDgCQgCgDgEgFQgEgHgGgFQgFgEgNAAQgMAAgHAEQgHAFgBAHQABADACADQACAEAFACIAJADIAOAEIAXAFQALADAHAFQAIADAEAIQAEAHAAAJQAAANgHAKQgIAKgNAFQgOAGgTgBQgWAAgPgHg");
	this.shape_484.setTransform(-306.1,163.8);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#660000").s().p("AgXBQIAEgIIAIgSQAFgLADgOQADgOAAgPQAAgOgDgPQgDgNgFgKIgIgSIgEgIQAAgDAEAAQAHAAAEADQAEABAFAKIAKAQQAFAJACAIQADAIACAJQABAJAAAIQAAATgFAQQgGARgMAQQgFAJgEADQgEACgHAAQgBAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_485.setTransform(176,117.7);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#660000").s().p("AgaA7QgMgFgGgJQgGgIAAgLQAAgXAZgHQgUgJAAgRQAAgJAFgIQAGgHAKgEQAKgFAOAAQAKAAAKADQAIACAGAFQAGAEADAHQACAFABAHQgBAIgEAHQgFAGgKAFQAIACAGAEQAFAEADAHQADAFAAAIQAAALgGAIQgGAJgLAFQgMAFgQAAQgPAAgLgFgAgQAJQgHAGAAAKQAAAHADAFQADAFAFADQAGADAGAAQAHAAAFgDQAGgDADgFQADgFAAgHQAAgHgDgEQgDgFgGgDQgGgDgGAAQgKAAgGAGgAgOgqQgGAFAAAIQAAAHAGAFQAGAFAIAAQAFAAADgBQAEgBACgDQAEgCABgDQABgDAAgEQAAgFgCgEQgDgFgEgCQgFgCgGAAQgJAAgFAFg");
	this.shape_486.setTransform(166.7,116);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#660000").s().p("AgaA5QgLgHgHgOQgGgNAAgUQAAgPAEgNQAEgNAHgIQAHgIAKgFQAKgEAMAAQANAAAJAEQAKAFAFAGQAEAGAAAGQAAAEgDACQgDADgEAAQgEAAgEgCQgDgDgCgEQgCgEgFgEQgFgDgHAAQgEABgFACQgFACgEAFQgHAJgBAXQAHgHAIgDQAHgDAJgBQAJAAAIAEQAIACAGAHQAGAFADAGQADAIAAAJQAAALgGAKQgGAKgMAGQgLAFgOAAQgQAAgMgHgAgIAAQgGADgDAFQgEAFAAAIQAAALAHAIQAHAHAJABQAKgBAHgGQAGgIAAgLQAAgIgDgGQgDgFgFgDQgFgCgHAAQgFAAgFACg");
	this.shape_487.setTransform(154.9,116);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#660000").s().p("AgaA8QgJgFgFgFQgFgHAAgGQAAgDADgDQADgDAFAAQAEAAAEACQADACACAEQACAGAFACQAFAEAGAAQAFAAAFgDQAFgDADgEQAHgJACgXQgHAGgIAEQgIAEgIAAQgJAAgIgEQgIgDgGgGQgGgFgDgGQgDgIAAgJQAAgIADgIQAEgIAGgFQAHgHAJgDQAJgDALAAQAMAAAJAEQAKAEAHAIQAHAIADALQAEALAAAPQAAAQgEAMQgEAMgHAJQgHAIgKAFQgLAEgLAAQgNAAgKgEgAgSgnQgGAHAAALQAAALAGAIQAHAFAKAAQAFAAAFgDQAGgCADgFQAEgFAAgIQAAgFgCgFQgCgFgDgEQgEgDgEgCQgFgCgEAAQgJAAgHAHg");
	this.shape_488.setTransform(142.8,116);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#660000").s().p("AAMA8QgDgDAAgHIAAhNQgYARgJAAQgEAAgDgCQgDgEAAgEQAAgDADgDIALgFQAMgFAHgFQAGgFAGgIIAHgIQABgBAFAAQAFAAADAEQADADAAAGIAABhQAAARgNAAQgGAAgEgEg");
	this.shape_489.setTransform(129.9,116);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#660000").s().p("AgPALQgGAAgEgDQgEgDAAgFQAAgDAEgDQAEgDAGAAIAfAAQAGAAAFADQADADAAADQAAAFgDADQgFADgGAAg");
	this.shape_490.setTransform(121.8,117.7);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#660000").s().p("AAOA+QgDgEAAgGIAAgQIgwAAQgJAAgFgEQgEgEgBgGIABgDIACgDIADgFIADgDIAzg8IAJgJQADgCAFAAQAOAAAAAOIAABCIAFAAQAHAAAFACQAEABABAHQAAAEgFADQgDACgIAAIgGAAIAAAQQAAAGgDAEQgDADgGAAQgFAAgEgDgAgeARIApAAIAAgxg");
	this.shape_491.setTransform(112.5,116);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#660000").s().p("AgaA8QgJgFgFgFQgFgHAAgGQAAgDADgDQADgDAFAAQAEAAAEACQADACACAEQACAGAFACQAFAEAGAAQAFAAAFgDQAFgDADgEQAHgJACgXQgHAGgIAEQgIAEgIAAQgJAAgIgEQgIgDgGgGQgGgFgDgGQgDgIAAgJQAAgIADgIQAEgIAGgFQAHgHAJgDQAJgDALAAQAMAAAJAEQAKAEAHAIQAHAIADALQAEALAAAPQAAAQgEAMQgEAMgHAJQgHAIgKAFQgLAEgLAAQgNAAgKgEgAgSgnQgGAHAAALQAAALAGAIQAHAFAKAAQAFAAAFgDQAGgCADgFQAEgFAAgIQAAgFgCgFQgCgFgDgEQgEgDgEgCQgFgCgEAAQgJAAgHAHg");
	this.shape_492.setTransform(100.5,116);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#660000").s().p("AgbA7QgLgFgGgJQgGgIAAgLQAAgXAZgHQgUgJAAgRQAAgJAGgIQAEgHALgEQAKgFAOAAQAKAAAJADQAJACAGAFQAGAEADAHQADAFgBAHQABAIgFAHQgFAGgKAFQAJACAFAEQAGAEACAHQADAFAAAIQAAALgGAIQgGAJgMAFQgLAFgQAAQgPAAgMgFgAgRAJQgGAGAAAKQAAAHADAFQAEAFAFADQAFADAGAAQAHAAAGgDQAFgDADgFQADgFAAgHQAAgHgDgEQgDgFgGgDQgFgDgHAAQgKAAgHAGgAgOgqQgGAFAAAIQAAAHAGAFQAFAFAJAAQAEAAAEgBQAEgBADgDQACgCABgDQACgDAAgEQAAgFgDgEQgCgFgFgCQgEgCgGAAQgJAAgFAFg");
	this.shape_493.setTransform(88.8,116);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#660000").s().p("AAMA8QgDgDAAgHIAAhNQgYARgJAAQgEAAgDgCQgDgEAAgEQAAgDADgDIALgFQAMgFAHgFQAGgFAGgIIAHgIQABgBAFAAQAFAAADAEQADADAAAGIAABhQAAARgNAAQgGAAgEgEg");
	this.shape_494.setTransform(75.7,116);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#660000").s().p("AAMBSQgDgBgCgEIgHgJQgIgLgFgKQgFgLgCgMQgEgKAAgOQAAgMADgLQADgLAFgLQAFgLAIgLIAHgKQACgDADAAIAHgBQAGAAAAADIgFAJIgJASQgEAJgDANQgDAOgBAPQABAPADAOQADAOAEAKIAJATIAFAIQAAACgGAAIgHAAg");
	this.shape_495.setTransform(67.6,117.7);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#660000").s().p("AgVAsQgKgDgHgHQgHgGgEgJQgDgJAAgKQAAgKADgIQAEgJAHgGQAHgHAKgDQAKgDALAAQAMAAAKADQAKADAHAHQAHAGADAJQAEAIAAAKQAAAKgEAJQgDAJgHAGQgIAHgJADQgKADgMAAQgLAAgKgDgAgNgaQgGAEgDAHQgEAHAAAIQAAAJAEAHQADAHAGADQAGAEAHAAQAMAAAHgIQAHgIAAgOQAAgNgHgIQgHgIgMAAQgHAAgGADg");
	this.shape_496.setTransform(57.9,117.7);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#660000").s().p("AAZAsQgEgEAAgHIAAgmQAAgLgDgGQgFgGgKAAQgGAAgGADQgGAEgDAHQgCAFAAANIAAAdQAAAHgEAEQgEADgGAAQgFAAgEgDQgDgEAAgHIAAhCQAAgHADgDQADgDAGAAIAHABIAEAEQABADAAAEIAAADQAIgIAIgEQAHgDALAAQAKAAAJAEQAIAEAFAHQACAEABAFIAAANIAAAqQAAAHgDAEQgEADgFAAQgHAAgDgDg");
	this.shape_497.setTransform(45.8,117.7);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#660000").s().p("AAfAtQgEgEgFgGQgKAGgJAEQgIADgLAAQgKgBgIgDQgIgDgEgGQgEgGAAgIQAAgJAHgHQAHgGAMgCIAMgDIARgCIAPgFQAAgIgEgFQgEgEgMAAQgJAAgFADQgFACgEAFIgFAGQgBACgFAAQgFAAgDgDQgDgCAAgEQAAgGAFgGQAFgGAKgDQALgEAOgBQASABAKAEQAKADAEAHQAEAIAAANIAAAOIAAAMQAAAHADAHIACAJQAAADgEAEQgDADgFAAQgEAAgEgDgAADAEIgOAEQgFABgEACQgDAEAAAFQAAAFAEAEQAFADAHAAQAHAAAHgDQAHgDADgFQADgFAAgMIAAgDIgRADg");
	this.shape_498.setTransform(33.7,117.7);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgKAEgIQADgJAHgGQAHgGAJgEQAKgEALAAQAQABALAFQALAGAGAKQAGAIAAAKQAAAIgGACQgGADgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgFIAIgGQACgCAEAAQAEABACACQADACAAADQAAAEgDADQgDAEgFAEQgGAEgJADQgIACgMABQgYgBgPgMgAgPgYQgGAGgCAMIAwAAQgBgMgHgGQgGgGgKAAQgJAAgHAGg");
	this.shape_499.setTransform(9.4,117.7);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#660000").s().p("AgVAsQgKgDgHgHQgHgGgEgJQgDgJAAgKQAAgKADgIQAEgJAHgGQAHgHAKgDQAKgDALAAQAMAAAKADQAKADAHAHQAHAGADAJQAEAIAAAKQAAAKgEAJQgDAJgHAGQgIAHgJADQgKADgMAAQgLAAgKgDgAgNgaQgGAEgDAHQgEAHAAAIQAAAJAEAHQADAHAGADQAGAEAHAAQAMAAAHgIQAHgIAAgOQAAgNgHgIQgHgIgMAAQgHAAgGADg");
	this.shape_500.setTransform(-8,117.7);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#660000").s().p("AgKA8QgEgEAAgIIAAhaIgfAAQgIAAgDgCQgEgDAAgFQAAgFAEgDQAEgDAHAAIBbAAQAIAAADADQAEADAAAFQAAAFgEADQgEACgHAAIggAAIAABaQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_501.setTransform(-19.1,116);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#660000").s().p("AgVAsQgKgDgHgHQgHgGgEgJQgDgJAAgKQAAgKADgIQAEgJAHgGQAHgHAKgDQAKgDALAAQAMAAAKADQAKADAHAHQAHAGADAJQAEAIAAAKQAAAKgEAJQgDAJgHAGQgIAHgJADQgKADgMAAQgLAAgKgDgAgNgaQgGAEgDAHQgEAHAAAIQAAAJAEAHQADAHAGADQAGAEAHAAQAMAAAHgIQAHgIAAgOQAAgNgHgIQgHgIgMAAQgHAAgGADg");
	this.shape_502.setTransform(-36.4,117.7);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#660000").s().p("AAfA9QgEgDAAgGIAAgDIgKAJIgMAFQgFACgHAAQgKAAgIgEQgIgDgGgHQgGgGgDgJQgDgJAAgKQAAgVAMgNQAMgMAUAAQALAAAIAEQAIADAHAHIAAgiQAAgHAEgEQADgEAGAAQAGAAADAEQADADAAAHIAABmQAAAGgDAEQgEADgFAAQgGAAgDgEgAgMgIQgGAEgDAGQgDAGAAAJQAAAKADAGQADAHAGAEQAGADAGAAQAHAAAGgDQAGgEADgGQAEgHAAgKQAAgJgEgHQgDgFgGgEQgGgEgHAAQgGAAgGAEg");
	this.shape_503.setTransform(-49,115.9);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#660000").s().p("AggAsQgEgEAAgHIAAhAQAAgPANAAQAHAAADADQADAEAAAHQAFgHAFgEQAEgDAIAAQAJAAAIADQAIAEAAAGQAAAEgEADQgDADgEAAIgHgCIgKgBQgGAAgDACQgDADgCAFIgDANIgBARIAAATQAAAHgEAEQgEADgFAAQgGAAgEgDg");
	this.shape_504.setTransform(-58.2,117.7);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#660000").s().p("AAfAtQgEgEgFgGQgKAGgJAEQgIADgLAAQgKgBgIgDQgIgDgEgGQgEgGAAgIQAAgJAHgHQAHgGAMgCIAMgDIARgCIAPgFQAAgIgEgFQgEgEgMAAQgJAAgFADQgFACgEAFIgFAGQgBACgFAAQgFAAgDgDQgDgCAAgEQAAgGAFgGQAFgGAKgDQALgEAOgBQASABAKAEQAKADAEAHQAEAIAAANIAAAOIAAAMQAAAHADAHIACAJQAAADgEAEQgDADgFAAQgEAAgEgDgAADAEIgOAEQgFABgEACQgDAEAAAFQAAAFAEAEQAFADAHAAQAHAAAHgDQAHgDADgFQADgFAAgMIAAgDIgRADg");
	this.shape_505.setTransform(-69.2,117.7);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#660000").s().p("AgDBAIgJgEIgHgEIgHgHIAAADQAAAGgDAEQgEADgGAAQgFAAgEgDQgDgEAAgGIAAhlQAAgHADgEQAEgEAFAAQAHAAADAEQADADAAAHIAAAjQAIgHAIgDQAHgEALAAQANAAAKAGQAKAFAGALQAFAJAAAPQAAAKgDAJQgDAJgGAGQgGAHgIADQgIAEgKAAIgLgBgAgMgIQgGAEgDAGQgEAGAAAKQAAAOAIAHQAHAIALAAQAKAAAHgIQAIgHAAgPQAAgJgEgHQgDgFgFgEQgGgEgHAAQgHAAgGAEg");
	this.shape_506.setTransform(-81.1,115.9);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#660000").s().p("AA1AsQgEgEAAgHIAAgnIgBgMQgBgEgDgDQgDgDgGAAQgGAAgFACQgFADgCAFQgDAGAAAOIAAAfQAAAHgDAEQgEADgHAAQgFAAgDgDQgFgEAAgHIAAgkIAAgOQgBgFgDgDQgDgDgGAAQgNAAgEAIQgFAHAAAOIAAAgQAAAHgDAEQgEADgGAAQgHAAgDgDQgFgEAAgHIAAhCQABgHADgDQADgDAHAAQAFAAAEADQADADAAAGIAAACQAHgHAIgEQAIgDAKAAQAJAAAIADQAGAEAFAHQAHgHAIgEQAHgDAJAAQALAAAJADQAHAEAEAHQAEAHgBANIAAAtQABAHgEAEQgEADgGAAQgHAAgDgDg");
	this.shape_507.setTransform(-96.5,117.7);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#660000").s().p("AgVAsQgKgDgHgHQgHgGgEgJQgDgJAAgKQAAgKADgIQAEgJAHgGQAHgHAKgDQAKgDALAAQAMAAAKADQAKADAHAHQAHAGADAJQAEAIAAAKQAAAKgEAJQgDAJgHAGQgIAHgJADQgKADgMAAQgLAAgKgDgAgNgaQgGAEgDAHQgEAHAAAIQAAAJAEAHQADAHAGADQAGAEAHAAQAMAAAHgIQAHgIAAgOQAAgNgHgIQgHgIgMAAQgHAAgGADg");
	this.shape_508.setTransform(-111.4,117.7);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#660000").s().p("AggBAQgKAAgEgEQgEgEAAgIIAAhfQAAgIAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAIIAABaIA6AAQAHAAAEADQADADAAAEQAAAFgDADQgEADgHAAg");
	this.shape_509.setTransform(-123,115.8);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgKAEgIQADgJAHgGQAHgGAJgEQAKgEALAAQAQABALAFQALAGAGAKQAGAIAAAKQAAAIgGACQgGADgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgFIAIgGQACgCAEAAQAEABACACQADACAAADQAAAEgDADQgDAEgFAEQgGAEgJADQgIACgMABQgYgBgPgMgAgPgYQgGAGgCAMIAwAAQgBgMgHgGQgGgGgKAAQgJAAgHAGg");
	this.shape_510.setTransform(-140.5,117.7);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#660000").s().p("AgJA8QgHgEgCgGQgCgHAAgLIAAgsIgEAAQgFAAgDgCQgDgCAAgEQAAgEADgCQADgCAGAAIADAAIAAgOIAAgJIADgGQABgCADgCQADgBAEAAQAFAAADADQADACAAAEIABAJIAAAQIAJAAQAHAAACACQAEACAAAEQgBAFgEACQgEABgIAAIgFAAIAAAqIAAAJIADAFQACABAEAAIAGAAIAHgBQACAAADACQADACAAAEQAAAFgHADQgHADgNAAQgMAAgGgDg");
	this.shape_511.setTransform(-149.6,116.1);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#660000").s().p("AAZAsQgEgEAAgHIAAgmQAAgLgEgGQgDgGgLAAQgHAAgFADQgGAEgDAHQgCAFAAANIAAAdQAAAHgEAEQgDADgHAAQgFAAgEgDQgDgEAAgHIAAhCQAAgHADgDQADgDAGAAIAGABIAFAEQACADAAAEIAAADQAGgIAJgEQAIgDAKAAQAKAAAJAEQAJAEADAHQADAEABAFIAAANIAAAqQAAAHgDAEQgEADgGAAQgFAAgEgDg");
	this.shape_512.setTransform(-159.6,117.7);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgKAEgIQADgJAHgGQAHgGAJgEQAKgEALAAQAQABALAFQALAGAGAKQAGAIAAAKQAAAIgGACQgGADgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgFIAIgGQACgCAEAAQAEABACACQADACAAADQAAAEgDADQgDAEgFAEQgGAEgJADQgIACgMABQgYgBgPgMgAgPgYQgGAGgCAMIAwAAQgBgMgHgGQgGgGgKAAQgJAAgHAGg");
	this.shape_513.setTransform(-171.5,117.7);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#660000").s().p("AgjAjQgOgMgBgWQABgNAGgMQAHgKAMgHQAMgFAPgBQAKABAJADQAJACAGAEQAGAEADAFQADAFAAAEQAAAEgDADQgEADgFAAQgEAAgCgCIgEgEQgGgHgFgDQgFgEgIAAQgLABgHAHQgIAJAAANQAAAGACAGQACAFAEAEQADAEAFACQAFACAFAAQAIAAAGgDQAFgDAFgHQACgEADgCQADgCAEAAQAFgBAEAEQACADAAAEQAAAEgCAFQgEAFgFAFQgHAEgJADQgJADgMAAQgXgBgOgMg");
	this.shape_514.setTransform(-183.5,117.7);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#660000").s().p("AgJAJQgFgDAAgGQAAgEAFgEQAEgEAFAAQAGAAAFAEQAEAEAAAEQAAAGgEADQgFAEgGAAQgFAAgEgEg");
	this.shape_515.setTransform(261.8,197.9);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#660000").s().p("AgZAsQgKgEgFgGQgFgGAAgGQAAgDADgDQADgDAFAAQAEAAADACIAEAFQAEAGAGADQAFADAJAAQAJAAAFgDQAEgDAAgEQAAgGgEgDQgGgDgLgCQgOgDgJgEQgIgCgFgFQgGgGABgIQAAgHAEgGQAFgGAJgEQAKgDANAAQAJAAAJABQAIACAFADQAGAEACADQADAEAAAEQAAAEgDADQgCACgHAAQgDAAgDgCIgHgGIgHgGQgEgCgGAAQgHAAgFADQgFADAAAEQAAADADADQAEACAGACIAPADQANADAIAEQAHACAFAGQAEAEAAAHQAAAKgGAGQgFAHgKAEQgLADgOAAQgOAAgLgDg");
	this.shape_516.setTransform(254.2,194.5);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#660000").s().p("AAfAsQgEgDgFgGQgKAGgJADQgIADgLAAQgKABgIgEQgIgEgEgFQgEgHAAgHQAAgJAHgHQAHgFAMgDIAMgDIARgCIAPgEQAAgKgEgEQgEgEgMAAQgJAAgFADQgFACgEAFIgFAGQgBACgFAAQgFAAgDgDQgDgCAAgEQAAgGAFgGQAFgGAKgEQALgDAOAAQASAAAKADQAKAEAEAHQAEAJAAANIAAAMIAAAOQAAAGADAHIACAJQAAAEgEACQgDADgFAAQgEAAgEgDgAADAFIgOADQgFABgEACQgDAEAAAEQAAAGAEADQAFAFAHAAQAHAAAHgEQAHgCADgGQADgFAAgMIAAgEIgRAFg");
	this.shape_517.setTransform(242.9,194.5);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#660000").s().p("AgJA8QgHgEgCgGQgCgHAAgLIAAgsIgDAAQgGAAgDgCQgDgCAAgEQAAgEADgCQADgCAGAAIADAAIAAgOIAAgJIADgGQABgCADgCQADgBAEAAQAFAAADADQADACAAAEIABAJIAAAQIAJAAQAHAAACACQAEACAAAEQgBAFgEACQgEABgIAAIgFAAIAAAqIAAAJIADAFQACABAEAAIAGAAIAHgBQACAAADACQADACAAAEQAAAFgHADQgHADgNAAQgMAAgGgDg");
	this.shape_518.setTransform(233.8,192.9);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#660000").s().p("AggAsQgEgEAAgHIAAhAQAAgPANAAQAHAAADADQADAEAAAHQAFgHAFgEQAEgDAIAAQAJAAAIADQAIAEAAAGQAAAEgEADQgDADgEAAIgHgCIgKgBQgGAAgDACQgDADgCAFIgDANIgBARIAAATQAAAHgEAEQgEADgFAAQgGAAgEgDg");
	this.shape_519.setTransform(206.3,194.5);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgJAEgJQADgJAHgHQAHgFAJgEQAKgEALABQAQAAALAFQALAGAGAJQAGAKAAAJQAAAHgGADQgGADgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgEIAIgHQACgCAEABQAEAAACABQADADAAADQAAADgDAEQgDAFgFADQgGAEgJADQgIACgMAAQgYAAgPgMgAgPgYQgGAGgCALIAwAAQgBgMgHgFQgGgGgKAAQgJAAgHAGg");
	this.shape_520.setTransform(195.3,194.5);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#660000").s().p("AgiA/QgHAAgEgEQgEgDAAgFQAAgDACgFIAGgIIAYgUIAPgLIAMgJQAFgFADgFQADgGAAgFQAAgFgDgEQgDgFgFgCQgFgCgFAAQgNgBgIAKIgDAHIgFAJQgDADgFAAQgFAAgEgDQgDgCAAgFQAAgHADgGQADgGAGgFQAGgFAKgEQAJgDAMAAQAOAAALAEQAHADAFAFQAFAFADAFQADAHAAAHQAAAKgGAJQgGAIgHAEIgVAQQgNAKgGAHIgFAFIAzAAQAHAAAEADQAEADAAAEQAAAEgDADQgDADgHAAg");
	this.shape_521.setTransform(166.1,192.7);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#660000").s().p("AgZAsQgKgEgFgGQgFgGAAgGQAAgDADgDQAEgDAEAAQAFAAACACIAEAFQAEAGAGADQAGADAIAAQAIAAAGgDQAEgDAAgEQAAgGgEgDQgGgDgLgCQgOgDgJgEQgIgCgFgFQgGgGAAgIQABgHAEgGQAFgGAJgEQAJgDAOAAQAJAAAJABQAIACAFADQAGAEACADQAEAEAAAEQAAAEgEADQgCACgHAAQgEAAgCgCIgHgGIgHgGQgEgCgGAAQgIAAgEADQgFADAAAEQAAADADADQAEACAGACIAPADQANADAIAEQAIACAEAGQAEAEAAAHQAAAKgFAGQgGAHgKAEQgLADgOAAQgPAAgKgDg");
	this.shape_522.setTransform(119.9,194.5);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#660000").s().p("AgrA+QgHgCAAgFQAAgEAEgDQACgCAFAAIAFABIAEAAIAHgBIAFgEIAFgJIADgFIghhHQgDgHAAgCQAAgDABgDIAFgEQADgCADAAQAGAAADAEQADACADAHIAVA4IAVg1IAFgKQACgDACgCIAHgBIAGABQADACABADIABAEIgBAFIgCAGIgjBPQgEALgFAFQgDAHgHACQgHAEgMAAQgMAAgFgDg");
	this.shape_523.setTransform(103.8,196.2);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#660000").s().p("AgYAsQgLgEgFgGQgFgGAAgGQAAgDAEgDQACgDAGAAQAEAAABACIAFAFQAEAGAGADQAGADAJAAQAIAAAEgDQAFgDABgEQgBgGgFgDQgFgDgLgCQgOgDgIgEQgJgCgFgFQgFgGgBgIQAAgHAFgGQAFgGAKgEQAIgDAOAAQAJAAAIABQAJACAGADQAFAEADADQADAEAAAEQAAAEgDADQgEACgFAAQgEAAgDgCIgHgGIgHgGQgEgCgGAAQgHAAgFADQgFADAAAEQAAADAEADQADACAGACIAPADQANADAIAEQAHACAFAGQAEAEAAAHQAAAKgFAGQgGAHgLAEQgKADgOAAQgPAAgJgDg");
	this.shape_524.setTransform(88.1,194.5);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#660000").s().p("AAfAsQgEgDgFgGQgKAGgJADQgIADgLAAQgKABgIgEQgIgEgEgFQgEgHAAgHQAAgJAHgHQAHgFAMgDIAMgDIARgCIAPgEQAAgKgEgEQgEgEgMAAQgJAAgFADQgFACgEAFIgFAGQgBACgFAAQgFAAgDgDQgDgCAAgEQAAgGAFgGQAFgGAKgEQALgDAOAAQASAAAKADQAKAEAEAHQAEAJAAANIAAAMIAAAOQAAAGADAHIACAJQAAAEgEACQgDADgFAAQgEAAgEgDgAADAFIgOADQgFABgEACQgDAEAAAEQAAAGAEADQAFAFAHAAQAHAAAHgEQAHgCADgGQADgFAAgMIAAgEIgRAFg");
	this.shape_525.setTransform(76.7,194.5);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#660000").s().p("AggAsQgEgEAAgHIAAhAQAAgPANAAQAHAAADADQADAEAAAHQAFgHAFgEQAEgDAIAAQAJAAAIADQAIAEAAAGQAAAEgEADQgDADgEAAIgHgCIgKgBQgGAAgDACQgDADgCAFIgDANIgBARIAAATQAAAHgEAEQgEADgFAAQgGAAgEgDg");
	this.shape_526.setTransform(61.6,194.5);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#660000").s().p("AgKA8QgGgEgCgGQgCgHAAgLIAAgsIgDAAQgGAAgDgCQgDgCAAgEQAAgEADgCQADgCAHAAIACAAIAAgOIAAgJIACgGQACgCADgCQADgBAEAAQAEAAAEADQACACABAEIABAJIAAAQIAJAAQAHAAACACQADACAAAEQABAFgFACQgEABgIAAIgFAAIAAAqIAAAJIACAFQACABAFAAIAHAAIAFgBQAEAAACACQADACAAAEQAAAFgHADQgHADgOAAQgLAAgHgDg");
	this.shape_527.setTransform(41.3,192.9);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#660000").s().p("AgkAjQgOgMABgWQAAgNAGgMQAGgKANgHQALgFAQAAQALAAAIACQAJADAGAEQAGAFADAEQADAFAAAEQAAAEgEADQgDADgFAAQgDAAgCgBIgGgGQgEgGgGgDQgFgEgIABQgLgBgHAJQgIAHABANQAAAIABAFQACAFAEAFQADADAFACQAFACAFAAQAIAAAGgDQAGgEAEgGQADgEACgCQADgCAEAAQAFAAAEADQACADABAEQgBAEgCAFQgEAFgFAEQgHAFgJACQgJADgMAAQgYAAgOgMg");
	this.shape_528.setTransform(31.4,194.5);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#660000").s().p("AgJA9QgDgEAAgHIAAhCQAAgGADgEQAEgDAFAAQAGAAADADQAEAEAAAGIAABCQAAAHgEAEQgDADgGAAQgFAAgEgDgAgIgrQgEgDAAgGQAAgFAEgDQAEgDAEAAQAFAAAEADQAEADAAAFQAAAGgEADQgEADgFAAQgFAAgDgDg");
	this.shape_529.setTransform(22.8,192.8);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#660000").s().p("AgIAtIgFgFIgFgKIgag2IgCgFIgBgEIgBgDIACgFIAEgEQADgBAEAAQAGAAADADIAFALIAVA0IAXg2IAGgKQACgCAGAAQAFAAADADQAEADAAADIgBAEIgBAEIgCAEIgaA3IgCAGIgEAGIgFAEQgEABgEAAQgFAAgDgCg");
	this.shape_530.setTransform(14.6,194.5);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#660000").s().p("AAMA8QgDgDAAgHIAAhMQgYAQgJAAQgEAAgDgDQgDgCAAgFQAAgDADgCIALgGQAMgFAHgFQAGgGAGgGIAHgIQABgCAFAAQAFAAADADQADAEAAAGIAABhQAAARgNAAQgGAAgEgEg");
	this.shape_531.setTransform(-2.9,192.8);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#660000").s().p("AAOA9QgDgDAAgGIAAgQIgwAAQgKAAgEgEQgFgDABgHIAAgDIACgDIADgFIAEgDIAyg8IAJgJQADgCAEAAQAPAAABAPIAABAIAEAAQAHAAAFACQAEACAAAGQAAAFgDADQgEACgIAAIgFAAIAAAQQAAAGgEADQgDADgGAAQgFAAgEgDgAgeAQIApAAIAAgwg");
	this.shape_532.setTransform(-13.6,192.8);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#660000").s().p("AgJAJQgFgDAAgGQAAgEAFgEQAEgEAFAAQAGAAAFAEQAEAEAAAEQAAAGgEADQgFAEgGAAQgFAAgEgEg");
	this.shape_533.setTransform(-27.7,197.9);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#660000").s().p("AAfAsQgEgDgFgGQgKAGgJADQgIADgLAAQgKABgIgEQgIgEgEgFQgEgHAAgHQAAgJAHgHQAHgFAMgDIAMgDIARgCIAPgEQAAgKgEgEQgEgEgMAAQgJAAgFADQgFACgEAFIgFAGQgBACgFAAQgFAAgDgDQgDgCAAgEQAAgGAFgGQAFgGAKgEQALgDAOAAQASAAAKADQAKAEAEAHQAEAJAAANIAAAMIAAAOQAAAGADAHIACAJQAAAEgEACQgDADgFAAQgEAAgEgDgAADAFIgOADQgFABgEACQgDAEAAAEQAAAGAEADQAFAFAHAAQAHAAAHgEQAHgCADgGQADgFAAgMIAAgEIgRAFg");
	this.shape_534.setTransform(-36.8,194.5);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#660000").s().p("AggAsQgEgEAAgHIAAhAQAAgPANAAQAHAAADADQADAEAAAHQAFgHAFgEQAEgDAIAAQAJAAAIADQAIAEAAAGQAAAEgEADQgDADgEAAIgHgCIgKgBQgGAAgDACQgDADgCAFIgDANIgBARIAAATQAAAHgEAEQgEADgFAAQgGAAgEgDg");
	this.shape_535.setTransform(-46,194.5);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#660000").s().p("AgJA8QgHgEgCgGQgCgHAAgLIAAgsIgEAAQgFAAgDgCQgDgCAAgEQAAgEADgCQADgCAGAAIADAAIAAgOIABgJIACgGQABgCADgCQADgBADAAQAFAAADADQADACABAEIABAJIAAAQIAKAAQAFAAAEACQADACAAAEQgBAFgEACQgEABgIAAIgFAAIAAAqIABAJIACAFQACABAEAAIAGAAIAHgBQACAAAEACQACACAAAEQAAAFgHADQgHADgNAAQgMAAgGgDg");
	this.shape_536.setTransform(-66.3,192.9);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#660000").s().p("AAfAsQgEgDgFgGQgKAGgJADQgIADgLAAQgKABgIgEQgIgEgEgFQgEgHAAgHQAAgJAHgHQAHgFAMgDIAMgDIARgCIAPgEQAAgKgEgEQgEgEgMAAQgJAAgFADQgFACgEAFIgFAGQgBACgFAAQgFAAgDgDQgDgCAAgEQAAgGAFgGQAFgGAKgEQALgDAOAAQASAAAKADQAKAEAEAHQAEAJAAANIAAAMIAAAOQAAAGADAHIACAJQAAAEgEACQgDADgFAAQgEAAgEgDgAADAFIgOADQgFABgEACQgDAEAAAEQAAAGAEADQAFAFAHAAQAHAAAHgEQAHgCADgGQADgFAAgMIAAgEIgRAFg");
	this.shape_537.setTransform(-75.6,194.5);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#660000").s().p("AgJA8QgHgEgCgGQgCgHAAgLIAAgsIgEAAQgFAAgDgCQgDgCAAgEQAAgEADgCQADgCAGAAIADAAIAAgOIABgJIACgGQABgCADgCQADgBADAAQAFAAADADQADACABAEIABAJIAAAQIAKAAQAFAAAEACQADACAAAEQgBAFgEACQgEABgIAAIgFAAIAAAqIABAJIACAFQACABAEAAIAGAAIAHgBQACAAAEACQACACAAAEQAAAFgHADQgHADgNAAQgMAAgGgDg");
	this.shape_538.setTransform(-84.7,192.9);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#660000").s().p("AgYAsQgLgEgFgGQgFgGAAgGQAAgDAEgDQACgDAGAAQADAAACACIAFAFQAEAGAGADQAGADAJAAQAIAAAEgDQAFgDABgEQgBgGgFgDQgFgDgLgCQgOgDgIgEQgJgCgGgFQgEgGgBgIQAAgHAFgGQAFgGAKgEQAIgDAOAAQAJAAAIABQAJACAGADQAFAEADADQADAEAAAEQAAAEgDADQgEACgFAAQgEAAgDgCIgHgGIgHgGQgEgCgGAAQgHAAgFADQgFADAAAEQAAADAEADQADACAGACIAPADQANADAIAEQAHACAFAGQAEAEAAAHQAAAKgFAGQgGAHgLAEQgKADgOAAQgPAAgJgDg");
	this.shape_539.setTransform(-94.1,194.5);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgJAEgJQADgJAHgHQAHgFAJgEQAKgEALABQAQAAALAFQALAGAGAJQAGAKAAAJQAAAHgGADQgGADgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgEIAIgHQACgCAEABQAEAAACABQADADAAADQAAADgDAEQgDAFgFADQgGAEgJADQgIACgMAAQgYAAgPgMgAgPgYQgGAGgCALIAwAAQgBgMgHgFQgGgGgKAAQgJAAgHAGg");
	this.shape_540.setTransform(-105.4,194.5);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#660000").s().p("AAfAsQgEgDgFgGQgKAGgJADQgIADgLAAQgKABgIgEQgIgEgEgFQgEgHAAgHQAAgJAHgHQAHgFAMgDIAMgDIARgCIAPgEQAAgKgEgEQgEgEgMAAQgJAAgFADQgFACgEAFIgFAGQgBACgFAAQgFAAgDgDQgDgCAAgEQAAgGAFgGQAFgGAKgEQALgDAOAAQASAAAKADQAKAEAEAHQAEAJAAANIAAAMIAAAOQAAAGADAHIACAJQAAAEgEACQgDADgFAAQgEAAgEgDgAADAFIgOADQgFABgEACQgDAEAAAEQAAAGAEADQAFAFAHAAQAHAAAHgEQAHgCADgGQADgFAAgMIAAgEIgRAFg");
	this.shape_541.setTransform(-122.4,194.5);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#660000").s().p("AgVBPQgFgDAAgGQgBgDADgDQADgDAFAAIABAAIAFAAIADAAQAGAAABgDQABgEAAgJIAAhOQAAgHADgDQAFgEAFAAQAHAAADAEQADADABAHIAABPIgBANQgBAFgBADQgGAPgVAAQgMAAgHgDgAAFg8QgEgDAAgGQAAgFAEgDQAEgDAFAAQAGAAADADQAFADAAAFQgBAGgDADQgEACgGAAQgFAAgEgCg");
	this.shape_542.setTransform(-132.4,194.5);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#660000").s().p("AAfAsQgEgDgFgGQgKAGgJADQgIADgLAAQgKABgIgEQgIgEgEgFQgEgHAAgHQAAgJAHgHQAHgFAMgDIAMgDIARgCIAPgEQAAgKgEgEQgEgEgMAAQgJAAgFADQgFACgEAFIgFAGQgBACgFAAQgFAAgDgDQgDgCAAgEQAAgGAFgGQAFgGAKgEQALgDAOAAQASAAAKADQAKAEAEAHQAEAJAAANIAAAMIAAAOQAAAGADAHIACAJQAAAEgEACQgDADgFAAQgEAAgEgDgAADAFIgOADQgFABgEACQgDAEAAAEQAAAGAEADQAFAFAHAAQAHAAAHgEQAHgCADgGQADgFAAgMIAAgEIgRAFg");
	this.shape_543.setTransform(-139.7,194.5);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#660000").s().p("AAaAsQgDgEAAgGIAAgDQgFAGgGADQgFAEgGACQgFABgIAAQgKAAgHgDQgIgEgFgGQgEgHAAgOIAAguQgBgHAEgDQAEgDAFAAQAHAAADADQAEAEAAAGIAAAlQAAAIACAFQACAGAEADQADADAIAAQAFAAAGgDQAGgEADgFQACgFAAgQIAAgdQAAgGAEgEQAEgDAGAAQAFAAAEADQAEADgBAHIAABDQAAAHgDADQgEADgFAAQgFAAgEgDg");
	this.shape_544.setTransform(-169.1,194.5);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#660000").s().p("AgYAsQgLgEgFgGQgFgGAAgGQAAgDADgDQAEgDAFAAQADAAADACIAEAFQAEAGAGADQAFADAKAAQAHAAAFgDQAGgDAAgEQAAgGgGgDQgFgDgLgCQgOgDgIgEQgJgCgGgFQgEgGAAgIQgBgHAFgGQAFgGAKgEQAJgDANAAQAJAAAIABQAJACAFADQAGAEADADQACAEAAAEQAAAEgCADQgEACgFAAQgEAAgDgCIgHgGIgHgGQgEgCgGAAQgIAAgEADQgFADAAAEQAAADAEADQADACAGACIAQADQAMADAIAEQAIACAEAGQAEAEAAAHQAAAKgGAGQgFAHgLAEQgKADgOAAQgOAAgKgDg");
	this.shape_545.setTransform(-180.7,194.5);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#660000").s().p("AAfAsQgEgDgFgGQgKAGgJADQgIADgLAAQgKABgIgEQgIgEgEgFQgEgHAAgHQAAgJAHgHQAHgFAMgDIAMgDIARgCIAPgEQAAgKgEgEQgEgEgMAAQgJAAgFADQgFACgEAFIgFAGQgBACgFAAQgFAAgDgDQgDgCAAgEQAAgGAFgGQAFgGAKgEQALgDAOAAQASAAAKADQAKAEAEAHQAEAJAAANIAAAMIAAAOQAAAGADAHIACAJQAAAEgEACQgDADgFAAQgEAAgEgDgAADAFIgOADQgFABgEACQgDAEAAAEQAAAGAEADQAFAFAHAAQAHAAAHgEQAHgCADgGQADgFAAgMIAAgEIgRAFg");
	this.shape_546.setTransform(-197.1,194.5);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgJAEgJQADgJAHgHQAHgFAJgEQAKgEALABQAQAAALAFQALAGAGAJQAGAKAAAJQAAAHgGADQgGADgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgEIAIgHQACgCAEABQAEAAACABQADADAAADQAAADgDAEQgDAFgFADQgGAEgJADQgIACgMAAQgYAAgPgMgAgPgYQgGAGgCALIAwAAQgBgMgHgFQgGgGgKAAQgJAAgHAGg");
	this.shape_547.setTransform(-213.9,194.5);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#660000").s().p("AgKA8QgGgEgCgGQgCgHAAgLIAAgsIgEAAQgFAAgDgCQgDgCAAgEQAAgEADgCQADgCAHAAIACAAIAAgOIABgJIABgGQACgCADgCQADgBADAAQAGAAACADQAEACAAAEIABAJIAAAQIAKAAQAFAAAEACQACACAAAEQABAFgFACQgEABgIAAIgFAAIAAAqIABAJIABAFQACABAFAAIAHAAIAFgBQADAAAEACQACACAAAEQAAAFgHADQgHADgOAAQgLAAgHgDg");
	this.shape_548.setTransform(-223,192.9);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#660000").s().p("AAZAsQgEgEAAgHIAAgmQAAgLgDgGQgFgGgKAAQgHAAgFADQgGAEgDAHQgCAFAAANIAAAdQAAAHgDAEQgEADgGAAQgGAAgEgDQgEgEAAgHIAAhCQAAgHAEgDQADgDAGAAIAGABIAFAEQACADgBAEIAAADQAIgIAIgEQAIgDAKAAQAKAAAJAEQAIAEAEAHQADAEABAFIABANIAAAqQgBAHgDAEQgDADgHAAQgGAAgDgDg");
	this.shape_549.setTransform(-233,194.5);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgJAEgJQADgJAHgHQAHgFAJgEQAKgEALABQAQAAALAFQALAGAGAJQAGAKAAAJQAAAHgGADQgGADgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgEIAIgHQACgCAEABQAEAAACABQADADAAADQAAADgDAEQgDAFgFADQgGAEgJADQgIACgMAAQgYAAgPgMgAgPgYQgGAGgCALIAwAAQgBgMgHgFQgGgGgKAAQgJAAgHAGg");
	this.shape_550.setTransform(-244.9,194.5);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#660000").s().p("AggAsQgEgEAAgHIAAhAQAAgPANAAQAHAAADADQADAEAAAHQAFgHAFgEQAEgDAIAAQAJAAAIADQAIAEAAAGQAAAEgEADQgDADgEAAIgHgCIgKgBQgGAAgDACQgDADgCAFIgDANIgBARIAAATQAAAHgEAEQgEADgFAAQgGAAgEgDg");
	this.shape_551.setTransform(-254.2,194.5);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgJAEgJQADgJAHgHQAHgFAJgEQAKgEALABQAQAAALAFQALAGAGAJQAGAKAAAJQAAAHgGADQgGADgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgEIAIgHQACgCAEABQAEAAACABQADADAAADQAAADgDAEQgDAFgFADQgGAEgJADQgIACgMAAQgYAAgPgMgAgPgYQgGAGgCALIAwAAQgBgMgHgFQgGgGgKAAQgJAAgHAGg");
	this.shape_552.setTransform(-265.1,194.5);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#660000").s().p("AgOA9QgEgDAAgHIAAg9IgHAAQgHAAgCgCQgEgDAAgEQAAgIANAAIAHAAIAAgHQAAgLADgGQADgHAIgDQAGgDAOAAQAXAAAAAKQAAAEgCACQgDACgDAAIgFAAIgHgBQgHAAgCAEQgCAEAAAHIAAAFIAGAAQAQAAgBAIQAAAGgDABQgFACgHAAIgGAAIAAA9QAAAHgEADQgEAEgFAAQgGAAgDgEg");
	this.shape_553.setTransform(-273.7,192.7);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgJAEgJQADgJAHgHQAHgFAJgEQAKgEALABQAQAAALAFQALAGAGAJQAGAKAAAJQAAAHgGADQgGADgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgEIAIgHQACgCAEABQAEAAACABQADADAAADQAAADgDAEQgDAFgFADQgGAEgJADQgIACgMAAQgYAAgPgMgAgPgYQgGAGgCALIAwAAQgBgMgHgFQgGgGgKAAQgJAAgHAGg");
	this.shape_554.setTransform(-283.4,194.5);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#660000").s().p("AggAsQgEgEAAgHIAAhAQAAgPANAAQAHAAADADQADAEAAAHQAFgHAFgEQAEgDAIAAQAJAAAIADQAIAEAAAGQAAAEgEADQgDADgEAAIgHgCIgKgBQgGAAgDACQgDADgCAFIgDANIgBARIAAATQAAAHgEAEQgEADgFAAQgGAAgEgDg");
	this.shape_555.setTransform(-292.6,194.5);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#660000").s().p("AAfAsQgEgDgFgHQgKAHgJADQgIADgLABQgKAAgIgEQgIgEgEgGQgEgFAAgHQAAgKAHgHQAHgFAMgDIAMgCIARgEIAPgDQAAgKgEgEQgEgEgMAAQgJAAgFACQgFADgEAFIgFAHQgBABgFAAQgFAAgDgCQgDgDAAgEQAAgGAFgGQAFgGAKgEQALgEAOAAQASAAAKAEQAKAEAEAIQAEAHAAAOIAAANIAAANQAAAGADAHIACAJQAAADgEADQgDADgFABQgEgBgEgDgAADAFIgOADQgFABgEADQgDADAAAEQAAAGAEADQAFAFAHAAQAHAAAHgDQAHgEADgEQADgGAAgMIAAgEIgRAFg");
	this.shape_556.setTransform(252.5,171.7);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#660000").s().p("AggAsQgEgEAAgHIAAhAQAAgPANAAQAHAAADADQADAEAAAHQAFgHAFgEQAEgDAIAAQAJAAAIADQAIAEAAAGQAAAEgEADQgDADgEAAIgHgCIgKgBQgGAAgDACQgDADgCAFIgDANIgBARIAAATQAAAHgEAEQgEADgFAAQgGAAgEgDg");
	this.shape_557.setTransform(243.3,171.7);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgKAEgIQADgJAHgHQAHgGAJgDQAKgDALgBQAQAAALAHQALAFAGAJQAGAJAAAKQAAAHgGAEQgGACgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgEIAIgHQACgBAEAAQAEgBACACQADACAAAEQAAAEgDAEQgDADgFAFQgGAEgJACQgIADgMAAQgYAAgPgNgAgPgYQgGAGgCALIAwAAQgBgLgHgGQgGgGgKAAQgJAAgHAGg");
	this.shape_558.setTransform(232.4,171.7);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#660000").s().p("AAZAsQgEgEAAgHIAAgmQAAgLgEgGQgDgGgLAAQgGAAgGADQgGAEgDAHQgCAFAAANIAAAdQAAAHgDAEQgFADgGAAQgFAAgEgDQgDgEgBgHIAAhCQABgHADgDQADgDAGAAIAGABIAFAEQABADABAEIAAADQAGgIAJgEQAIgDAKAAQALAAAIAEQAJAEADAHQADAEABAFIABANIAAAqQAAAHgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_559.setTransform(215.4,171.7);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#660000").s().p("AgVA9QgKgEgHgGQgHgGgEgJQgDgJAAgKQAAgLADgHQAEgKAHgFQAHgHAKgDQAKgDALAAQAMAAAKADQAKADAHAHQAHAGADAJQAEAHAAALQAAAKgEAJQgDAJgHAGQgIAHgJADQgKADgMAAQgLAAgKgDgAgNgJQgGAEgDAFQgEAIAAAJQAAAJAEAHQADAGAGAEQAGAEAHAAQAMAAAHgIQAHgIAAgOQAAgOgHgIQgHgHgMgBQgHAAgGAEgAgSgqIACgEIAEgHQAEgHADgBQADgCAFAAIANAAQAFAAAAABIgGAGIgLAJIgGAFQgGADgGAAQgBAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAgBg");
	this.shape_560.setTransform(203.3,170.1);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#660000").s().p("AgKA8QgGgEgCgGQgCgHAAgLIAAgsIgDAAQgGAAgDgCQgDgCAAgEQAAgEADgCQADgCAGAAIADAAIAAgOIAAgJIADgGQABgCADgCQADgBAEAAQAEAAAEADQADACAAAEIABAJIAAAQIAJAAQAHAAACACQAEACAAAEQAAAFgFACQgEABgIAAIgFAAIAAAqIAAAJIADAFQABABAFAAIAGAAIAHgBQACAAADACQADACAAAEQAAAFgHADQgHADgNAAQgMAAgHgDg");
	this.shape_561.setTransform(194.1,170.1);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#660000").s().p("AAfAsQgEgDgFgHQgKAHgJADQgIADgLABQgKAAgIgEQgIgEgEgGQgEgFAAgHQAAgKAHgHQAHgFAMgDIAMgCIARgEIAPgDQAAgKgEgEQgEgEgMAAQgJAAgFACQgFADgEAFIgFAHQgBABgFAAQgFAAgDgCQgDgDAAgEQAAgGAFgGQAFgGAKgEQALgEAOAAQASAAAKAEQAKAEAEAIQAEAHAAAOIAAANIAAANQAAAGADAHIACAJQAAADgEADQgDADgFABQgEgBgEgDgAADAFIgOADQgFABgEADQgDADAAAEQAAAGAEADQAFAFAHAAQAHAAAHgDQAHgEADgEQADgGAAgMIAAgEIgRAFg");
	this.shape_562.setTransform(184.7,171.7);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#660000").s().p("AggAsQgEgEAAgHIAAhAQAAgPANAAQAHAAADADQADAEAAAHQAFgHAFgEQAEgDAIAAQAJAAAIADQAIAEAAAGQAAAEgEADQgDADgEAAIgHgCIgKgBQgGAAgDACQgDADgCAFIgDANIgBARIAAATQAAAHgEAEQgEADgFAAQgGAAgEgDg");
	this.shape_563.setTransform(175.5,171.7);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgKAEgIQADgJAHgHQAHgGAJgDQAKgDALgBQAQAAALAHQALAFAGAJQAGAJAAAKQAAAHgGAEQgGACgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgEIAIgHQACgBAEAAQAEgBACACQADACAAAEQAAAEgDAEQgDADgFAFQgGAEgJACQgIADgMAAQgYAAgPgNgAgPgYQgGAGgCALIAwAAQgBgLgHgGQgGgGgKAAQgJAAgHAGg");
	this.shape_564.setTransform(159.6,171.7);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgKAEgIQADgJAHgHQAHgGAJgDQAKgDALgBQAQAAALAHQALAFAGAJQAGAJAAAKQAAAHgGAEQgGACgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgEIAIgHQACgBAEAAQAEgBACACQADACAAAEQAAAEgDAEQgDADgFAFQgGAEgJACQgIADgMAAQgYAAgPgNgAgPgYQgGAGgCALIAwAAQgBgLgHgGQgGgGgKAAQgJAAgHAGg");
	this.shape_565.setTransform(130.2,171.7);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#660000").s().p("AgJA8QgHgEgCgGQgCgHAAgLIAAgsIgEAAQgFAAgDgCQgDgCAAgEQAAgEADgCQADgCAGAAIADAAIAAgOIABgJIACgGQABgCADgCQADgBADAAQAFAAADADQADACABAEIABAJIAAAQIAKAAQAFAAAEACQADACAAAEQgBAFgEACQgEABgIAAIgFAAIAAAqIABAJIACAFQACABAEAAIAGAAIAHgBQACAAAEACQACACAAAEQAAAFgHADQgHADgNAAQgMAAgGgDg");
	this.shape_566.setTransform(121,170.1);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#660000").s().p("AgVAsQgKgDgHgHQgHgGgEgJQgDgJAAgKQAAgKADgIQAEgJAHgGQAHgHAKgDQAKgDALAAQAMAAAKADQAKADAHAHQAHAGADAJQAEAIAAAKQAAAKgEAJQgDAJgHAGQgIAHgJADQgKADgMAAQgLAAgKgDgAgNgaQgGAEgDAHQgEAHAAAIQAAAJAEAHQADAHAGADQAGAEAHAAQAMAAAHgIQAHgIAAgOQAAgNgHgIQgHgIgMAAQgHAAgGADg");
	this.shape_567.setTransform(111.1,171.7);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#660000").s().p("AA1AsQgEgEAAgHIAAgnIgBgMQgBgEgDgDQgDgDgHAAQgFAAgFACQgEADgDAFQgDAGAAAOIAAAfQAAAHgEAEQgEADgGAAQgFAAgEgDQgDgEAAgHIAAgkIgBgOQgBgFgDgDQgDgDgHAAQgMAAgFAIQgEAHAAAOIAAAgQAAAHgEAEQgDADgHAAQgFAAgFgDQgDgEAAgHIAAhCQgBgHAEgDQAEgDAFAAQAGAAADADQAEADAAAGIAAACQAHgHAIgEQAIgDAJAAQAKAAAIADQAGAEAFAHQAHgHAHgEQAIgDAJAAQAMAAAHADQAJAEADAHQADAHABANIAAAtQgBAHgDAEQgEADgHAAQgFAAgEgDg");
	this.shape_568.setTransform(96.1,171.7);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#660000").s().p("AAaAsQgDgEAAgGIAAgDQgFAGgFADQgGAEgGACQgFABgIAAQgKAAgHgDQgIgEgFgGQgEgHAAgOIAAguQAAgHADgDQAEgDAFAAQAHAAADADQAEAEAAAGIAAAlQAAAIACAFQABAGAFADQADADAIAAQAFAAAGgDQAGgEADgFQACgFAAgQIAAgdQAAgGAEgEQAEgDAGAAQAFAAAEADQADADAAAHIAABDQAAAHgDADQgEADgFAAQgFAAgEgDg");
	this.shape_569.setTransform(76.2,171.7);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#660000").s().p("AgYAsQgLgEgFgGQgFgGAAgGQAAgDAEgDQACgDAGAAQADAAACACIAFAFQAEAGAGADQAGADAJAAQAIAAAFgDQAEgDABgEQgBgGgEgDQgGgDgLgCQgOgDgIgEQgJgCgGgFQgEgGgBgIQAAgHAFgGQAFgGAKgEQAIgDAOAAQAJAAAIABQAJACAGADQAFAEADADQADAEAAAEQAAAEgDADQgEACgFAAQgEAAgDgCIgHgGIgHgGQgEgCgGAAQgHAAgFADQgFADAAAEQAAADAEADQADACAGACIAPADQANADAIAEQAHACAFAGQAEAEAAAHQAAAKgFAGQgGAHgLAEQgKADgOAAQgPAAgJgDg");
	this.shape_570.setTransform(64.7,171.7);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#660000").s().p("AgMAYQgBgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAgDADgDQALgFAAgJQgGAAgFgCQgEgDAAgHQAAgFAEgEQAFgDAGgBQAEAAAEACQAEADACAEQACAEAAAHQAAAIgEAGQgEAIgGAEQgFAFgFAAQgDgBgBgBg");
	this.shape_571.setTransform(51.2,176.5);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#660000").s().p("AgVAsQgKgDgHgHQgHgGgEgJQgDgJAAgKQAAgKADgIQAEgJAHgGQAHgHAKgDQAKgDALAAQAMAAAKADQAKADAHAHQAHAGADAJQAEAIAAAKQAAAKgEAJQgDAJgHAGQgIAHgJADQgKADgMAAQgLAAgKgDgAgNgaQgGAEgDAHQgEAHAAAIQAAAJAEAHQADAHAGADQAGAEAHAAQAMAAAHgIQAHgIAAgOQAAgNgHgIQgHgIgMAAQgHAAgGADg");
	this.shape_572.setTransform(42.8,171.7);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#660000").s().p("AgJA9QgDgEAAgHIAAhCQAAgGADgEQAEgDAFAAQAGAAADADQAEAEAAAGIAABCQAAAHgEAEQgDADgGAAQgFAAgEgDgAgIgrQgEgDAAgGQAAgFAEgDQAEgDAEAAQAFAAAEADQAEADAAAFQAAAGgEADQgEADgFAAQgFAAgDgDg");
	this.shape_573.setTransform(26.9,170);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#660000").s().p("AgxA9QgCgEAAgIIAAhjQAAgHADgDQAEgDAFAAQAGAAAEADQADADAAAHIAAACQAIgIAIgEQAIgDAJAAQANgBAKAGQAKAFAGALQAGALAAAPQAAALgDAHQgEAJgGAHQgGAFgIAEQgIADgKAAQgKAAgIgEQgIgEgHgIIAAAjQAAAPgNABQgHgBgDgDgAgRgnQgIAIAAAPQAAAOAIAGQAIAIAKAAQAGAAAGgDQAGgEADgFQAEgHAAgJQAAgKgEgHQgDgGgGgDQgFgEgHgBQgKABgIAHg");
	this.shape_574.setTransform(18.2,173.5);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgKAEgIQADgJAHgHQAHgGAJgDQAKgDALgBQAQAAALAHQALAFAGAJQAGAJAAAKQAAAHgGAEQgGACgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgEIAIgHQACgBAEAAQAEgBACACQADACAAAEQAAAEgDAEQgDADgFAFQgGAEgJACQgIADgMAAQgYAAgPgNgAgPgYQgGAGgCALIAwAAQgBgLgHgGQgGgGgKAAQgJAAgHAGg");
	this.shape_575.setTransform(6,171.7);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgKAEgIQADgJAHgHQAHgGAJgDQAKgDALgBQAQAAALAHQALAFAGAJQAGAJAAAKQAAAHgGAEQgGACgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgEIAIgHQACgBAEAAQAEgBACACQADACAAAEQAAAEgDAEQgDADgFAFQgGAEgJACQgIADgMAAQgYAAgPgNgAgPgYQgGAGgCALIAwAAQgBgLgHgGQgGgGgKAAQgJAAgHAGg");
	this.shape_576.setTransform(-22.1,171.7);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#660000").s().p("AAfA9QgEgDAAgGIAAgDIgKAJIgMAFQgFACgHAAQgKAAgIgEQgIgDgGgHQgGgGgDgJQgDgJAAgKQAAgVAMgNQAMgMAUAAQALAAAIAEQAIADAHAHIAAgiQAAgHAEgEQADgEAGAAQAGAAADAEQADADAAAHIAABmQAAAGgDAEQgEADgFAAQgGAAgDgEgAgMgIQgGAEgDAGQgDAGAAAJQAAAKADAGQADAHAGAEQAGADAGAAQAHAAAGgDQAGgEADgGQAEgHAAgKQAAgJgEgHQgDgFgGgEQgGgEgHAAQgGAAgGAEg");
	this.shape_577.setTransform(-34.6,170);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#660000").s().p("AgVAsQgKgDgHgHQgHgGgEgJQgDgJAAgKQAAgKADgIQAEgJAHgGQAHgHAKgDQAKgDALAAQAMAAAKADQAKADAHAHQAHAGADAJQAEAIAAAKQAAAKgEAJQgDAJgHAGQgIAHgJADQgKADgMAAQgLAAgKgDgAgNgaQgGAEgDAHQgEAHAAAIQAAAJAEAHQADAHAGADQAGAEAHAAQAMAAAHgIQAHgIAAgOQAAgNgHgIQgHgIgMAAQgHAAgGADg");
	this.shape_578.setTransform(-51.6,171.7);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#660000").s().p("AgJA9QgDgEAAgHIAAhCQAAgGADgEQAEgDAFAAQAGAAADADQAEAEAAAGIAABCQAAAHgEAEQgDADgGAAQgFAAgEgDgAgIgrQgEgDAAgGQAAgFAEgDQAEgDAEAAQAFAAAEADQAEADAAAFQAAAGgEADQgEADgFAAQgFAAgDgDg");
	this.shape_579.setTransform(-60.4,170);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#660000").s().p("AggAsQgEgEAAgHIAAhAQAAgPANAAQAHAAADADQADAEAAAHQAFgHAFgEQAEgDAIAAQAJAAAIADQAIAEAAAGQAAAEgEADQgDADgEAAIgHgCIgKgBQgGAAgDACQgDADgCAFIgDANIgBARIAAATQAAAHgEAEQgEADgFAAQgGAAgEgDg");
	this.shape_580.setTransform(-66.9,171.7);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#660000").s().p("AggAsQgEgEAAgHIAAhAQAAgPANAAQAHAAADADQADAEAAAHQAFgHAFgEQAEgDAIAAQAJAAAIADQAIAEAAAGQAAAEgEADQgDADgEAAIgHgCIgKgBQgGAAgDACQgDADgCAFIgDANIgBARIAAATQAAAHgEAEQgEADgFAAQgGAAgEgDg");
	this.shape_581.setTransform(-75.4,171.7);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#660000").s().p("AAfAsQgEgDgFgHQgKAHgJADQgIADgLABQgKAAgIgEQgIgEgEgGQgEgFAAgHQAAgKAHgHQAHgFAMgDIAMgCIARgEIAPgDQAAgKgEgEQgEgEgMAAQgJAAgFACQgFADgEAFIgFAHQgBABgFAAQgFAAgDgCQgDgDAAgEQAAgGAFgGQAFgGAKgEQALgEAOAAQASAAAKAEQAKAEAEAIQAEAHAAAOIAAANIAAANQAAAGADAHIACAJQAAADgEADQgDADgFABQgEgBgEgDgAADAFIgOADQgFABgEADQgDADAAAEQAAAGAEADQAFAFAHAAQAHAAAHgDQAHgEADgEQADgGAAgMIAAgEIgRAFg");
	this.shape_582.setTransform(-86.4,171.7);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#660000").s().p("AgDBAIgJgEIgHgEIgHgHIAAADQAAAGgDAEQgEADgGAAQgFAAgEgDQgDgEAAgGIAAhlQAAgHADgEQAEgEAFAAQAHAAADAEQADADAAAHIAAAjQAIgHAIgDQAHgEALAAQANAAAKAGQAKAFAGALQAFAJAAAPQAAAKgDAJQgDAJgGAGQgGAHgIADQgIAEgKAAIgLgBgAgMgIQgGAEgDAGQgEAGAAAKQAAAOAIAHQAHAIALAAQAKAAAHgIQAIgHAAgPQAAgJgEgHQgDgFgFgEQgGgEgHAAQgHAAgGAEg");
	this.shape_583.setTransform(-98.3,170);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgKAEgIQADgJAHgHQAHgGAJgDQAKgDALgBQAQAAALAHQALAFAGAJQAGAJAAAKQAAAHgGAEQgGACgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgEIAIgHQACgBAEAAQAEgBACACQADACAAAEQAAAEgDAEQgDADgFAFQgGAEgJACQgIADgMAAQgYAAgPgNgAgPgYQgGAGgCALIAwAAQgBgLgHgGQgGgGgKAAQgJAAgHAGg");
	this.shape_584.setTransform(-121.2,171.7);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#660000").s().p("AAfA9QgEgDAAgGIAAgDIgKAJIgMAFQgFACgHAAQgKAAgIgEQgIgDgGgHQgGgGgDgJQgDgJAAgKQAAgVAMgNQAMgMAUAAQALAAAIAEQAIADAHAHIAAgiQAAgHAEgEQADgEAGAAQAGAAADAEQADADAAAHIAABmQAAAGgDAEQgEADgFAAQgGAAgDgEgAgMgIQgGAEgDAGQgDAGAAAJQAAAKADAGQADAHAGAEQAGADAGAAQAHAAAGgDQAGgEADgGQAEgHAAgKQAAgJgEgHQgDgFgGgEQgGgEgHAAQgGAAgGAEg");
	this.shape_585.setTransform(-133.7,170);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#660000").s().p("AgVAsQgKgDgHgHQgHgGgEgJQgDgJAAgKQAAgKADgIQAEgJAHgGQAHgHAKgDQAKgDALAAQAMAAAKADQAKADAHAHQAHAGADAJQAEAIAAAKQAAAKgEAJQgDAJgHAGQgIAHgJADQgKADgMAAQgLAAgKgDgAgNgaQgGAEgDAHQgEAHAAAIQAAAJAEAHQADAHAGADQAGAEAHAAQAMAAAHgIQAHgIAAgOQAAgNgHgIQgHgIgMAAQgHAAgGADg");
	this.shape_586.setTransform(-150.7,171.7);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#660000").s().p("AgJA9QgDgEAAgHIAAhCQAAgGADgEQAEgDAFAAQAGAAADADQAEAEAAAGIAABCQAAAHgEAEQgDADgGAAQgFAAgEgDgAgIgrQgEgDAAgGQAAgFAEgDQAEgDAEAAQAFAAAEADQAEADAAAFQAAAGgEADQgEADgFAAQgFAAgDgDg");
	this.shape_587.setTransform(-159.5,170);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#660000").s().p("AggAsQgEgEAAgHIAAhAQAAgPANAAQAHAAADADQADAEAAAHQAFgHAFgEQAEgDAIAAQAJAAAIADQAIAEAAAGQAAAEgEADQgDADgEAAIgHgCIgKgBQgGAAgDACQgDADgCAFIgDANIgBARIAAATQAAAHgEAEQgEADgFAAQgGAAgEgDg");
	this.shape_588.setTransform(-166,171.7);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#660000").s().p("AAfAsQgEgDgFgHQgKAHgJADQgIADgLABQgKAAgIgEQgIgEgEgGQgEgFAAgHQAAgKAHgHQAHgFAMgDIAMgCIARgEIAPgDQAAgKgEgEQgEgEgMAAQgJAAgFACQgFADgEAFIgFAHQgBABgFAAQgFAAgDgCQgDgDAAgEQAAgGAFgGQAFgGAKgEQALgEAOAAQASAAAKAEQAKAEAEAIQAEAHAAAOIAAANIAAANQAAAGADAHIACAJQAAADgEADQgDADgFABQgEgBgEgDgAADAFIgOADQgFABgEADQgDADAAAEQAAAGAEADQAFAFAHAAQAHAAAHgDQAHgEADgEQADgGAAgMIAAgEIgRAFg");
	this.shape_589.setTransform(-177,171.7);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#660000").s().p("AAZAsQgEgEAAgHIAAgmQAAgLgDgGQgFgGgKAAQgHAAgFADQgGAEgDAHQgCAFAAANIAAAdQAAAHgDAEQgEADgGAAQgGAAgEgDQgEgEAAgHIAAhCQAAgHAEgDQADgDAGAAIAGABIAFAEQACADgBAEIAAADQAIgIAIgEQAIgDAKAAQAKAAAJAEQAIAEAEAHQADAEABAFIABANIAAAqQgBAHgDAEQgDADgHAAQgGAAgDgDg");
	this.shape_590.setTransform(-188.9,171.7);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#660000").s().p("AgJA9QgDgEAAgHIAAhCQAAgGADgEQAEgDAFAAQAGAAADADQAEAEAAAGIAABCQAAAHgEAEQgDADgGAAQgFAAgEgDgAgIgrQgEgDAAgGQAAgFAEgDQAEgDAEAAQAFAAAEADQAEADAAAFQAAAGgEADQgEADgFAAQgFAAgDgDg");
	this.shape_591.setTransform(-197.7,170);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#660000").s().p("AgZA+QgLgEgGgFQgGgFAAgHQAAgDAEgDQADgDAEAAQAHAAAEAFIAEAEIAGAFIAGABIAJABQAJABAGgDQAGgDACgEQACgFABgFIAAgRQgGAIgHAEQgJAEgKAAQgNAAgLgGQgKgGgFgLQgFgJAAgOQAAgLADgJQAEgIAFgGQAHgFAIgDQAIgDAJAAQAKAAAJADQAIAEAHAIIAAgDQAAgGADgDQAEgDAFAAQAIAAACADQADAFAAAIIAABDQAAAMgDAIQgDAIgGAGQgGAGgLACQgJACgPABQgOAAgKgDgAgRgnQgIAIABAOQAAAOAHAGQAHAIAKAAQAHAAAFgDQAGgEAEgFQAEgGAAgJQAAgOgHgJQgHgHgMgBQgLABgGAHg");
	this.shape_592.setTransform(-206.9,173.5);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#660000").s().p("AgJA9QgDgEAAgHIAAhCQAAgGADgEQAEgDAFAAQAGAAADADQAEAEAAAGIAABCQAAAHgEAEQgDADgGAAQgFAAgEgDgAgIgrQgEgDAAgGQAAgFAEgDQAEgDAEAAQAFAAAEADQAEADAAAFQAAAGgEADQgEADgFAAQgFAAgDgDg");
	this.shape_593.setTransform(-215.6,170);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#660000").s().p("AggAsQgEgEAAgHIAAhAQAAgPANAAQAHAAADADQADAEAAAHQAFgHAFgEQAEgDAIAAQAJAAAIADQAIAEAAAGQAAAEgEADQgDADgEAAIgHgCIgKgBQgGAAgDACQgDADgCAFIgDANIgBARIAAATQAAAHgEAEQgEADgFAAQgGAAgEgDg");
	this.shape_594.setTransform(-222.1,171.7);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#660000").s().p("AgVAsQgKgDgHgHQgHgGgEgJQgDgJAAgKQAAgKADgIQAEgJAHgGQAHgHAKgDQAKgDALAAQAMAAAKADQAKADAHAHQAHAGADAJQAEAIAAAKQAAAKgEAJQgDAJgHAGQgIAHgJADQgKADgMAAQgLAAgKgDgAgNgaQgGAEgDAHQgEAHAAAIQAAAJAEAHQADAHAGADQAGAEAHAAQAMAAAHgIQAHgIAAgOQAAgNgHgIQgHgIgMAAQgHAAgGADg");
	this.shape_595.setTransform(-233.2,171.7);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#660000").s().p("AgVAsQgKgDgHgHQgHgGgEgJQgDgJAAgKQAAgKADgIQAEgJAHgGQAHgHAKgDQAKgDALAAQAMAAAKADQAKADAHAHQAHAGADAJQAEAIAAAKQAAAKgEAJQgDAJgHAGQgIAHgJADQgKADgMAAQgLAAgKgDgAgNgaQgGAEgDAHQgEAHAAAIQAAAJAEAHQADAHAGADQAGAEAHAAQAMAAAHgIQAHgIAAgOQAAgNgHgIQgHgIgMAAQgHAAgGADg");
	this.shape_596.setTransform(-250.3,171.7);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#660000").s().p("AgJA9QgDgDAAgHIAAhkQAAgHADgEQAEgEAFAAQAGAAAEAEQADADAAAIIAABkQAAAHgDADQgEAEgGAAQgFAAgEgEg");
	this.shape_597.setTransform(-259.1,170);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#660000").s().p("AgJA9QgDgDAAgHIAAhkQAAgHADgEQAEgEAFAAQAGAAAEAEQADADAAAIIAABkQAAAHgDADQgEAEgGAAQgFAAgEgEg");
	this.shape_598.setTransform(-264.5,170);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#660000").s().p("AAfAsQgEgDgFgHQgKAHgJADQgIADgLABQgKAAgIgEQgIgEgEgGQgEgFAAgHQAAgKAHgHQAHgFAMgDIAMgCIARgEIAPgDQAAgKgEgEQgEgEgMAAQgJAAgFACQgFADgEAFIgFAHQgBABgFAAQgFAAgDgCQgDgDAAgEQAAgGAFgGQAFgGAKgEQALgEAOAAQASAAAKAEQAKAEAEAIQAEAHAAAOIAAANIAAANQAAAGADAHIACAJQAAADgEADQgDADgFABQgEgBgEgDgAADAFIgOADQgFABgEADQgDADAAAEQAAAGAEADQAFAFAHAAQAHAAAHgDQAHgEADgEQADgGAAgMIAAgEIgRAFg");
	this.shape_599.setTransform(-273.2,171.7);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#660000").s().p("AgZA+QgLgEgGgFQgGgFAAgHQAAgDAEgDQADgDAFAAQAGAAAEAFIAEAEIAGAFIAGABIAJABQAJABAGgDQAGgDACgEQACgFABgFIABgRQgGAIgJAEQgIAEgKAAQgOAAgKgGQgJgGgGgLQgFgJAAgOQAAgLADgJQAEgIAFgGQAGgFAJgDQAHgDAKAAQAKAAAIADQAJAEAHAIIAAgDQAAgGADgDQAEgDAFAAQAIAAACADQADAFAAAIIAABDQAAAMgDAIQgDAIgGAGQgGAGgLACQgJACgOABQgOAAgLgDgAgRgnQgIAIABAOQAAAOAHAGQAHAIAKAAQAHAAAFgDQAHgEADgFQAEgGAAgJQAAgOgHgJQgHgHgMgBQgLABgGAHg");
	this.shape_600.setTransform(-285.1,173.5);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#660000").s().p("AgJA9QgDgDAAgHIAAhkQAAgHADgEQAEgEAFAAQAGAAAEAEQADADAAAIIAABkQAAAHgDADQgEAEgGAAQgFAAgEgEg");
	this.shape_601.setTransform(263,147.2);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#660000").s().p("AAfAsQgEgDgFgHQgKAHgJADQgIAEgLAAQgKgBgIgDQgIgDgEgHQgEgGAAgGQAAgKAHgHQAHgGAMgCIAMgCIARgEIAPgEQAAgJgEgEQgEgEgMAAQgJAAgFACQgFADgEAFIgFAHQgBABgFAAQgFAAgDgCQgDgDAAgEQAAgGAFgGQAFgGAKgDQALgFAOAAQASAAAKAFQAKADAEAIQAEAHAAANIAAAOIAAAMQAAAHADAHIACAJQAAADgEADQgDAEgFAAQgEAAgEgEgAADAEIgOAEQgFABgEADQgDACAAAGQAAAFAEAEQAFADAHAAQAHAAAHgCQAHgDADgFQADgGAAgMIAAgDIgRADg");
	this.shape_602.setTransform(254.4,149);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#660000").s().p("AgJA9QgDgEAAgHIAAhCQAAgGADgEQAEgDAFAAQAGAAADADQAEAEAAAGIAABCQAAAHgEAEQgDADgGAAQgFAAgEgDgAgIgrQgEgDAAgGQAAgFAEgDQAEgDAEAAQAFAAAEADQAEADAAAFQAAAGgEADQgEADgFAAQgFAAgDgDg");
	this.shape_603.setTransform(245.7,147.3);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#660000").s().p("AAfA9QgEgDAAgGIAAgDIgKAJIgMAFQgFACgHAAQgKAAgIgEQgIgDgGgHQgGgGgDgJQgDgJAAgKQAAgVAMgNQAMgMAUAAQALAAAIAEQAIADAHAHIAAgiQAAgHAEgEQADgEAGAAQAGAAADAEQADADAAAHIAABmQAAAGgDAEQgEADgFAAQgGAAgDgEgAgMgIQgGAEgDAGQgDAGAAAJQAAAKADAGQADAHAGAEQAGADAGAAQAHAAAGgDQAGgEADgGQAEgHAAgKQAAgJgEgHQgDgFgGgEQgGgEgHAAQgGAAgGAEg");
	this.shape_604.setTransform(236.5,147.2);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#660000").s().p("AAZAsQgEgEAAgHIAAgmQAAgLgEgGQgDgGgLAAQgGAAgGADQgGAEgDAHQgCAFAAANIAAAdQAAAHgDAEQgFADgFAAQgGAAgEgDQgDgEgBgHIAAhCQABgHADgDQADgDAGAAIAGABIAFAEQABADABAEIAAADQAGgIAJgEQAHgDALAAQALAAAIAEQAJAEADAHQADAEABAFIABANIAAAqQAAAHgEAEQgDADgHAAQgFAAgEgDg");
	this.shape_605.setTransform(224.5,149);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#660000").s().p("AAbAsQgEgEgBgGIAAgDQgEAGgGADQgFAEgGACQgFABgJAAQgJAAgHgDQgIgEgFgGQgEgHAAgOIAAguQgBgHAEgDQAEgDAFAAQAHAAADADQAEAEAAAGIAAAlQAAAIACAFQABAGAEADQAFADAHAAQAFAAAGgDQAGgEADgFQACgFAAgQIAAgdQAAgGAEgEQADgDAHAAQAFAAAEADQAEADgBAHIAABDQAAAHgCADQgEADgFAAQgGAAgDgDg");
	this.shape_606.setTransform(212.4,149);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#660000").s().p("AA1AsQgEgEAAgHIAAgnIgBgMQAAgEgEgDQgDgDgHAAQgFAAgEACQgFADgDAFQgDAGAAAOIAAAfQAAAHgEAEQgEADgGAAQgFAAgEgDQgDgEAAgHIAAgkIgBgOQgBgFgDgDQgDgDgHAAQgMAAgFAIQgEAHAAAOIAAAgQAAAHgEAEQgDADgHAAQgGAAgEgDQgDgEAAgHIAAhCQgBgHAEgDQAEgDAFAAQAGAAADADQAEADAAAGIAAACQAHgHAIgEQAIgDAJAAQALAAAHADQAGAEAFAHQAGgHAJgEQAHgDAKAAQAKAAAIADQAJAEADAHQAEAHAAANIAAAtQAAAHgEAEQgEADgHAAQgFAAgEgDg");
	this.shape_607.setTransform(197.7,149);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#660000").s().p("AAZAsQgEgEAAgHIAAgmQAAgLgDgGQgEgGgLAAQgHAAgFADQgGAEgDAHQgCAFAAANIAAAdQAAAHgEAEQgDADgHAAQgFAAgEgDQgEgEABgHIAAhCQgBgHAEgDQADgDAGAAIAHABIAEAEQACADAAAEIAAADQAGgIAJgEQAHgDALAAQAKAAAJAEQAJAEAEAHQACAEABAFIAAANIAAAqQABAHgEAEQgEADgFAAQgGAAgEgDg");
	this.shape_608.setTransform(177.8,149);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#660000").s().p("AgVA9QgKgDgHgHQgHgHgEgIQgDgJAAgLQAAgKADgHQAEgJAHgHQAHgGAKgEQAKgCALAAQAMAAAKACQAKAEAHAGQAHAHADAJQAEAHAAAKQAAALgEAJQgDAIgHAHQgIAHgJADQgKADgMAAQgLAAgKgDgAgNgJQgGAEgDAFQgEAHAAAJQAAAKAEAHQADAGAGAEQAGAEAHAAQAMAAAHgIQAHgIAAgPQAAgOgHgGQgHgIgMAAQgHgBgGAEgAgSgqIACgEIAEgIQAEgGADgCQADgBAFAAIANAAQAFAAAAABIgGAGIgLAJIgGAFQgGADgGAAQgBAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAgBg");
	this.shape_609.setTransform(165.7,147.3);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgJAEgJQADgJAHgGQAHgHAJgDQAKgDALgBQAQAAALAHQALAFAGAKQAGAIAAAKQAAAIgGADQgGACgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgFIAIgGQACgBAEgBQAEAAACACQADADAAADQAAAEgDAEQgDADgFAFQgGAEgJACQgIACgMABQgYAAgPgNgAgPgYQgGAGgCAMIAwAAQgBgMgHgGQgGgGgKAAQgJAAgHAGg");
	this.shape_610.setTransform(153.8,149);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#660000").s().p("AgxA9QgCgEAAgIIAAhkQAAgGADgEQAEgCAFAAQAGAAAEACQADAEAAAGIAAADQAIgIAIgEQAIgDAJAAQANgBAKAGQAKAFAGALQAGALAAAOQAAAMgDAHQgEAJgGAHQgGAFgIAEQgIADgKAAQgKAAgIgEQgIgEgHgHIAAAiQAAAQgNgBQgHAAgDgDgAgRgmQgIAHAAAOQAAAPAIAGQAIAIAKAAQAGAAAGgDQAGgEADgFQAEgHAAgKQAAgJgEgHQgDgGgGgEQgFgDgHAAQgKAAgIAIg");
	this.shape_611.setTransform(141.8,150.7);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#660000").s().p("AA1AsQgEgEAAgHIAAgnIgBgMQAAgEgEgDQgDgDgGAAQgGAAgEACQgFADgDAFQgDAGAAAOIAAAfQAAAHgEAEQgDADgHAAQgFAAgDgDQgEgEgBgHIAAgkIAAgOQgBgFgDgDQgDgDgGAAQgOAAgEAIQgEAHAAAOIAAAgQAAAHgEAEQgEADgFAAQgGAAgEgDQgEgEgBgHIAAhCQAAgHAEgDQAEgDAGAAQAFAAAEADQADADAAAGIAAACQAHgHAIgEQAIgDAKAAQAKAAAHADQAGAEAFAHQAGgHAJgEQAHgDAKAAQAKAAAJADQAHAEAEAHQADAHAAANIAAAtQAAAHgDAEQgEADgGAAQgGAAgEgDg");
	this.shape_612.setTransform(126.4,149);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#660000").s().p("AAfAsQgEgDgFgHQgKAHgJADQgIAEgLAAQgKgBgIgDQgIgDgEgHQgEgGAAgGQAAgKAHgHQAHgGAMgCIAMgCIARgEIAPgEQAAgJgEgEQgEgEgMAAQgJAAgFACQgFADgEAFIgFAHQgBABgFAAQgFAAgDgCQgDgDAAgEQAAgGAFgGQAFgGAKgDQALgFAOAAQASAAAKAFQAKADAEAIQAEAHAAANIAAAOIAAAMQAAAHADAHIACAJQAAADgEADQgDAEgFAAQgEAAgEgEgAADAEIgOAEQgFABgEADQgDACAAAGQAAAFAEAEQAFADAHAAQAHAAAHgCQAHgDADgFQADgGAAgMIAAgDIgRADg");
	this.shape_613.setTransform(111.6,149);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#660000").s().p("AgkAjQgNgMAAgWQgBgNAHgLQAHgMALgFQAMgHAQAAQALAAAIAEQAJACAGAEQAGAEADAFQADAFAAAEQAAAEgEADQgDADgFAAQgDAAgCgCIgGgEQgFgHgFgDQgFgDgIgBQgLABgIAHQgGAJAAANQAAAGACAGQABAGADADQAEAEAFACQAFACAFAAQAIAAAGgDQAFgEAFgGQADgEADgCQACgDAEAAQAFAAAEAEQADADAAAEQAAAEgDAFQgEAFgFAFQgHAEgJACQgJAEgMAAQgYAAgOgNg");
	this.shape_614.setTransform(99.7,149);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#660000").s().p("AgMAYQgBgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQABgDAEgDQAKgFAAgJQgGABgEgDQgFgDAAgHQAAgFAFgEQAEgEAGAAQAEABAEACQAEACACAEQACAFAAAGQAAAIgEAGQgEAIgGAFQgFADgFAAQgDABgBgCg");
	this.shape_615.setTransform(85.7,153.7);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgJAEgJQADgJAHgGQAHgHAJgDQAKgDALgBQAQAAALAHQALAFAGAKQAGAIAAAKQAAAIgGADQgGACgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgFIAIgGQACgBAEgBQAEAAACACQADADAAADQAAAEgDAEQgDADgFAFQgGAEgJACQgIACgMABQgYAAgPgNgAgPgYQgGAGgCAMIAwAAQgBgMgHgGQgGgGgKAAQgJAAgHAGg");
	this.shape_616.setTransform(77.4,149);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#660000").s().p("AgKA8QgGgEgCgGQgCgHAAgLIAAgsIgDAAQgGAAgDgCQgDgCAAgEQAAgEADgCQADgCAHAAIACAAIAAgOIABgJIABgGQACgCADgCQADgBADAAQAGAAACADQAEACAAAEIABAJIAAAQIAKAAQAFAAAEACQACACAAAEQABAFgFACQgEABgIAAIgFAAIAAAqIAAAJIACAFQACABAFAAIAHAAIAFgBQAEAAACACQADACAAAEQAAAFgHADQgHADgOAAQgLAAgHgDg");
	this.shape_617.setTransform(68.2,147.4);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#660000").s().p("AggAsQgEgEAAgHIAAhAQAAgPANAAQAHAAADADQADAEAAAHQAFgHAFgEQAEgDAIAAQAJAAAIADQAIAEAAAGQAAAEgEADQgDADgEAAIgHgCIgKgBQgGAAgDACQgDADgCAFIgDANIgBARIAAATQAAAHgEAEQgEADgFAAQgGAAgEgDg");
	this.shape_618.setTransform(60.3,149);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#660000").s().p("AgVAsQgKgDgHgHQgHgGgEgJQgDgJAAgKQAAgKADgIQAEgJAHgGQAHgHAKgDQAKgDALAAQAMAAAKADQAKADAHAHQAHAGADAJQAEAIAAAKQAAAKgEAJQgDAJgHAGQgIAHgJADQgKADgMAAQgLAAgKgDgAgNgaQgGAEgDAHQgEAHAAAIQAAAJAEAHQADAHAGADQAGAEAHAAQAMAAAHgIQAHgIAAgOQAAgNgHgIQgHgIgMAAQgHAAgGADg");
	this.shape_619.setTransform(49.3,149);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#660000").s().p("AgxA9QgCgEAAgIIAAhkQAAgGADgEQAEgCAFAAQAGAAAEACQADAEAAAGIAAADQAIgIAIgEQAIgDAJAAQANgBAKAGQAKAFAGALQAGALAAAOQAAAMgDAHQgEAJgGAHQgGAFgIAEQgIADgKAAQgKAAgIgEQgIgEgHgHIAAAiQAAAQgNgBQgHAAgDgDgAgRgmQgIAHAAAOQAAAPAIAGQAIAIAKAAQAGAAAGgDQAGgEADgFQAEgHAAgKQAAgJgEgHQgDgGgGgEQgFgDgHAAQgKAAgIAIg");
	this.shape_620.setTransform(37.2,150.7);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgJAEgJQADgJAHgGQAHgHAJgDQAKgDALgBQAQAAALAHQALAFAGAKQAGAIAAAKQAAAIgGADQgGACgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgFIAIgGQACgBAEgBQAEAAACACQADADAAADQAAAEgDAEQgDADgFAFQgGAEgJACQgIACgMABQgYAAgPgNgAgPgYQgGAGgCAMIAwAAQgBgMgHgGQgGgGgKAAQgJAAgHAGg");
	this.shape_621.setTransform(25.1,149);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#660000").s().p("AAfA9QgEgDAAgGIAAgDIgKAJIgMAFQgFACgHAAQgKAAgIgEQgIgDgGgHQgGgGgDgJQgDgJAAgKQAAgVAMgNQAMgMAUAAQALAAAIAEQAIADAHAHIAAgiQAAgHAEgEQADgEAGAAQAGAAADAEQADADAAAHIAABmQAAAGgDAEQgEADgFAAQgGAAgDgEgAgMgIQgGAEgDAGQgDAGAAAJQAAAKADAGQADAHAGAEQAGADAGAAQAHAAAGgDQAGgEADgGQAEgHAAgKQAAgJgEgHQgDgFgGgEQgGgEgHAAQgGAAgGAEg");
	this.shape_622.setTransform(12.5,147.2);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#660000").s().p("AgJA9QgDgDAAgHIAAhkQAAgHADgEQAEgEAFAAQAGAAAEAEQADADAAAIIAABkQAAAHgDADQgEAEgGAAQgFAAgEgEg");
	this.shape_623.setTransform(-1.2,147.2);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgJAEgJQADgJAHgGQAHgHAJgDQAKgDALgBQAQAAALAHQALAFAGAKQAGAIAAAKQAAAIgGADQgGACgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgFIAIgGQACgBAEgBQAEAAACACQADADAAADQAAAEgDAEQgDADgFAFQgGAEgJACQgIACgMABQgYAAgPgNgAgPgYQgGAGgCAMIAwAAQgBgMgHgGQgGgGgKAAQgJAAgHAGg");
	this.shape_624.setTransform(-9.8,149);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#660000").s().p("AAfA9QgEgDAAgGIAAgDIgKAJIgMAFQgFACgHAAQgKAAgIgEQgIgDgGgHQgGgGgDgJQgDgJAAgKQAAgVAMgNQAMgMAUAAQALAAAIAEQAIADAHAHIAAgiQAAgHAEgEQADgEAGAAQAGAAADAEQADADAAAHIAABmQAAAGgDAEQgEADgFAAQgGAAgDgEgAgMgIQgGAEgDAGQgDAGAAAJQAAAKADAGQADAHAGAEQAGADAGAAQAHAAAGgDQAGgEADgGQAEgHAAgKQAAgJgEgHQgDgFgGgEQgGgEgHAAQgGAAgGAEg");
	this.shape_625.setTransform(-22.3,147.2);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#660000").s().p("AgVAsQgKgDgHgHQgHgGgEgJQgDgJAAgKQAAgKADgIQAEgJAHgGQAHgHAKgDQAKgDALAAQAMAAAKADQAKADAHAHQAHAGADAJQAEAIAAAKQAAAKgEAJQgDAJgHAGQgIAHgJADQgKADgMAAQgLAAgKgDgAgNgaQgGAEgDAHQgEAHAAAIQAAAJAEAHQADAHAGADQAGAEAHAAQAMAAAHgIQAHgIAAgOQAAgNgHgIQgHgIgMAAQgHAAgGADg");
	this.shape_626.setTransform(-39.3,149);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#660000").s().p("AAZAsQgEgEAAgHIAAgmQAAgLgEgGQgDgGgLAAQgGAAgGADQgGAEgDAHQgCAFAAANIAAAdQAAAHgDAEQgFADgFAAQgGAAgEgDQgDgEgBgHIAAhCQABgHADgDQADgDAGAAIAGABIAFAEQABADABAEIAAADQAGgIAJgEQAHgDALAAQALAAAIAEQAJAEADAHQADAEABAFIABANIAAAqQAAAHgEAEQgDADgHAAQgFAAgEgDg");
	this.shape_627.setTransform(-51.4,149);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#660000").s().p("AAfAsQgEgDgFgHQgKAHgJADQgIAEgLAAQgKgBgIgDQgIgDgEgHQgEgGAAgGQAAgKAHgHQAHgGAMgCIAMgCIARgEIAPgEQAAgJgEgEQgEgEgMAAQgJAAgFACQgFADgEAFIgFAHQgBABgFAAQgFAAgDgCQgDgDAAgEQAAgGAFgGQAFgGAKgDQALgFAOAAQASAAAKAFQAKADAEAIQAEAHAAANIAAAOIAAAMQAAAHADAHIACAJQAAADgEADQgDAEgFAAQgEAAgEgEgAADAEIgOAEQgFABgEADQgDACAAAGQAAAFAEAEQAFADAHAAQAHAAAHgCQAHgDADgFQADgGAAgMIAAgDIgRADg");
	this.shape_628.setTransform(-63.4,149);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#660000").s().p("AgjAjQgOgMgBgWQABgNAGgLQAHgMALgFQAMgHAQAAQAKAAAJAEQAJACAGAEQAGAEADAFQADAFAAAEQAAAEgDADQgEADgFAAQgEAAgCgCIgEgEQgGgHgEgDQgGgDgJgBQgKABgIAHQgHAJAAANQAAAGACAGQACAGADADQAEAEAFACQAFACAFAAQAIAAAGgDQAGgEAEgGQADgEACgCQADgDAEAAQAFAAADAEQADADAAAEQAAAEgDAFQgCAFgHAFQgFAEgKACQgJAEgMAAQgXAAgOgNg");
	this.shape_629.setTransform(-75.3,149);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#660000").s().p("AgJA9QgDgEAAgHIAAhCQAAgGADgEQAEgDAFAAQAGAAADADQAEAEAAAGIAABCQAAAHgEAEQgDADgGAAQgFAAgEgDgAgIgrQgEgDAAgGQAAgFAEgDQAEgDAEAAQAFAAAEADQAEADAAAFQAAAGgEADQgEADgFAAQgFAAgDgDg");
	this.shape_630.setTransform(-83.9,147.3);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#660000").s().p("AAbAtIgIgHIgTgZIgTAZIgHAHQgDACgFAAQgFAAgDgCQgEgDAAgEQAAgDAGgHIAYgeIgWgZQgFgGAAgFQAAgDADgDQADgCAGAAQAEAAAEACIAHAHIAQAVIARgVIAHgHQADgCAFAAQAFAAAEACQADADAAADQAAADgBADIgFAFIgVAZIAYAeQAGAHAAADQAAAEgEADQgDACgFAAQgFAAgDgCg");
	this.shape_631.setTransform(-91.9,149);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgJAEgJQADgJAHgGQAHgHAJgDQAKgDALgBQAQAAALAHQALAFAGAKQAGAIAAAKQAAAIgGADQgGACgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgFIAIgGQACgBAEgBQAEAAACACQADADAAADQAAAEgDAEQgDADgFAFQgGAEgJACQgIACgMABQgYAAgPgNgAgPgYQgGAGgCAMIAwAAQgBgMgHgGQgGgGgKAAQgJAAgHAGg");
	this.shape_632.setTransform(-102.7,149);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#660000").s().p("AAuA8QgDgDgBgHIAAhWIgWBPIgEALQgBAEgEADQgEADgHAAQgEAAgDgCQgEgCgCgDIgDgHIgDgHIgWhPIAABWQgBAHgDADQgEAEgGAAQgFAAgFgEQgDgDAAgHIAAhjQAAgIAFgDQAFgDAIAAIAJAAQAIAAAEACQADABACADIAEALIAUBEIAVhEIAEgLQACgDAEgBQADgCAIAAIAJAAQAIAAAGADQAEADAAAIIAABjQAAAHgDADQgEAEgGAAQgGAAgEgEg");
	this.shape_633.setTransform(-117,147.3);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#660000").s().p("AgVAsQgKgDgHgHQgHgGgEgJQgDgJAAgKQAAgKADgIQAEgJAHgGQAHgHAKgDQAKgDALAAQAMAAAKADQAKADAHAHQAHAGADAJQAEAIAAAKQAAAKgEAJQgDAJgHAGQgIAHgJADQgKADgMAAQgLAAgKgDgAgNgaQgGAEgDAHQgEAHAAAIQAAAJAEAHQADAHAGADQAGAEAHAAQAMAAAHgIQAHgIAAgOQAAgNgHgIQgHgIgMAAQgHAAgGADg");
	this.shape_634.setTransform(-136.4,149);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#660000").s().p("AgJA9QgDgDAAgHIAAhkQAAgHADgEQAEgEAFAAQAGAAAEAEQADADAAAIIAABkQAAAHgDADQgEAEgGAAQgFAAgEgEg");
	this.shape_635.setTransform(-145.2,147.2);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#660000").s().p("AgVAsQgKgDgHgHQgHgGgEgJQgDgJAAgKQAAgKADgIQAEgJAHgGQAHgHAKgDQAKgDALAAQAMAAAKADQAKADAHAHQAHAGADAJQAEAIAAAKQAAAKgEAJQgDAJgHAGQgIAHgJADQgKADgMAAQgLAAgKgDgAgNgaQgGAEgDAHQgEAHAAAIQAAAJAEAHQADAHAGADQAGAEAHAAQAMAAAHgIQAHgIAAgOQAAgNgHgIQgHgIgMAAQgHAAgGADg");
	this.shape_636.setTransform(-153.9,149);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#660000").s().p("AAfA9QgEgDAAgGIAAgDIgKAJIgMAFQgFACgHAAQgKAAgIgEQgIgDgGgHQgGgGgDgJQgDgJAAgKQAAgVAMgNQAMgMAUAAQALAAAIAEQAIADAHAHIAAgiQAAgHAEgEQADgEAGAAQAGAAADAEQADADAAAHIAABmQAAAGgDAEQgEADgFAAQgGAAgDgEgAgMgIQgGAEgDAGQgDAGAAAJQAAAKADAGQADAHAGAEQAGADAGAAQAHAAAGgDQAGgEADgGQAEgHAAgKQAAgJgEgHQgDgFgGgEQgGgEgHAAQgGAAgGAEg");
	this.shape_637.setTransform(-166.5,147.2);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#660000").s().p("AgPA9QgEgEAAgHIAAhCQAAgHAEgDQADgEAGABQAGgBADAEQAEAEAAAFIAABDQAAAHgEAEQgDADgGAAQgGAAgDgDgAgTgqIACgEIAFgIQAEgGADgCQACgBAFAAIANAAQAFAAAAABIgFAGIgLAJIgHAFQgFADgHAAQgEAAAAgDg");
	this.shape_638.setTransform(-174.6,147.3);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#660000").s().p("AAZAsQgEgEAAgHIAAgmQAAgLgEgGQgEgGgKAAQgHAAgFADQgGAEgDAHQgCAFAAANIAAAdQAAAHgDAEQgFADgFAAQgGAAgEgDQgDgEgBgHIAAhCQABgHADgDQADgDAGAAIAGABIAFAEQABADAAAEIAAADQAIgIAIgEQAIgDAKAAQALAAAIAEQAJAEADAHQADAEABAFIABANIAAAqQgBAHgDAEQgDADgHAAQgFAAgEgDg");
	this.shape_639.setTransform(-189,149);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#660000").s().p("AAfAsQgEgDgFgHQgKAHgJADQgIAEgLAAQgKgBgIgDQgIgDgEgHQgEgGAAgGQAAgKAHgHQAHgGAMgCIAMgCIARgEIAPgEQAAgJgEgEQgEgEgMAAQgJAAgFACQgFADgEAFIgFAHQgBABgFAAQgFAAgDgCQgDgDAAgEQAAgGAFgGQAFgGAKgDQALgFAOAAQASAAAKAFQAKADAEAIQAEAHAAANIAAAOIAAAMQAAAHADAHIACAJQAAADgEADQgDAEgFAAQgEAAgEgEgAADAEIgOAEQgFABgEADQgDACAAAGQAAAFAEAEQAFADAHAAQAHAAAHgCQAHgDADgFQADgGAAgMIAAgDIgRADg");
	this.shape_640.setTransform(-201,149);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#660000").s().p("AggAsQgEgEAAgHIAAhAQAAgPANAAQAHAAADADQADAEAAAHQAFgHAFgEQAEgDAIAAQAJAAAIADQAIAEAAAGQAAAEgEADQgDADgEAAIgHgCIgKgBQgGAAgDACQgDADgCAFIgDANIgBARIAAATQAAAHgEAEQgEADgFAAQgGAAgEgDg");
	this.shape_641.setTransform(-210.2,149);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#660000").s().p("AgZA+QgLgEgGgFQgGgGAAgFQAAgFADgCQAEgDAFAAQAFAAAFAEIAFAFIAEAFIAHABIAJABQAKAAAFgCQAGgDADgEQABgFABgFIABgRQgHAIgIAEQgIAEgKAAQgOAAgJgGQgKgGgGgKQgFgKAAgOQAAgLADgIQADgJAHgGQAGgGAHgDQAJgCAJAAQAKAAAIADQAJAEAHAIIAAgDQAAgGADgEQAEgCAFAAQAIAAADADQACAFAAAJIAABCQAAAMgDAIQgDAJgGAFQgGAGgKACQgLADgNgBQgPAAgKgCgAgSgmQgHAHAAAOQAAAOAIAGQAHAIAKgBQAGAAAGgCQAGgDAFgGQADgGAAgJQAAgPgHgHQgIgIgLAAQgKAAgIAIg");
	this.shape_642.setTransform(-221.3,150.7);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#660000").s().p("AggAsQgEgEAAgHIAAhAQAAgPANAAQAHAAADADQADAEAAAHQAFgHAFgEQAEgDAIAAQAJAAAIADQAIAEAAAGQAAAEgEADQgDADgEAAIgHgCIgKgBQgGAAgDACQgDADgCAFIgDANIgBARIAAATQAAAHgEAEQgEADgFAAQgGAAgEgDg");
	this.shape_643.setTransform(-236.2,149);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgJAEgJQADgJAHgGQAHgHAJgDQAKgDALgBQAQAAALAHQALAFAGAKQAGAIAAAKQAAAIgGADQgGACgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgFIAIgGQACgBAEgBQAEAAACACQADADAAADQAAAEgDAEQgDADgFAFQgGAEgJACQgIACgMABQgYAAgPgNgAgPgYQgGAGgCAMIAwAAQgBgMgHgGQgGgGgKAAQgJAAgHAGg");
	this.shape_644.setTransform(-247.1,149);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#660000").s().p("AA1AsQgEgEAAgHIAAgnIgBgMQAAgEgEgDQgDgDgGAAQgGAAgEACQgFADgDAFQgDAGAAAOIAAAfQAAAHgEAEQgDADgHAAQgFAAgDgDQgEgEgBgHIAAgkIAAgOQgBgFgDgDQgDgDgGAAQgOAAgEAIQgEAHAAAOIAAAgQAAAHgEAEQgEADgGAAQgFAAgEgDQgEgEgBgHIAAhCQAAgHAEgDQAEgDAGAAQAFAAAEADQADADAAAGIAAACQAHgHAIgEQAIgDAKAAQAKAAAHADQAGAEAFAHQAGgHAJgEQAHgDAKAAQAKAAAJADQAHAEAEAHQADAHAAANIAAAtQAAAHgDAEQgEADgGAAQgHAAgDgDg");
	this.shape_645.setTransform(-261.9,149);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#660000").s().p("AgJA9QgDgEAAgHIAAhCQAAgGADgEQAEgDAFAAQAGAAADADQAEAEAAAGIAABCQAAAHgEAEQgDADgGAAQgFAAgEgDgAgIgrQgEgDAAgGQAAgFAEgDQAEgDAEAAQAFAAAEADQAEADAAAFQAAAGgEADQgEADgFAAQgFAAgDgDg");
	this.shape_646.setTransform(-273.5,147.3);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#660000").s().p("AggAsQgEgEAAgHIAAhAQAAgPANAAQAHAAADADQADAEAAAHQAFgHAFgEQAEgDAIAAQAJAAAIADQAIAEAAAGQAAAEgEADQgDADgEAAIgHgCIgKgBQgGAAgDACQgDADgCAFIgDANIgBARIAAATQAAAHgEAEQgEADgFAAQgGAAgEgDg");
	this.shape_647.setTransform(-280,149);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#660000").s().p("AgyA8QgEgEAAgHIAAhgQAAgIAFgEQAEgEAKAAIAkAAQARAAAIADQAJACAHAFQAGAFADAHQAEAHAAAJQAAATgOAJQgNAKgbAAIgaAAIAAAjQAAAIgEAEQgEAEgGAAQgHAAgEgEgAgZgFIAUAAQAJAAAHgCQAHgCAEgEQADgEAAgHQAAgJgFgFQgHgFgSAAIgUAAg");
	this.shape_648.setTransform(-291.4,147.3);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#660000").s().p("AgaA8QgJgFgFgFQgFgHAAgGQAAgDADgDQADgDAFAAQAEAAAEACQADACACAEQACAGAFACQAFAEAGAAQAFAAAFgDQAFgDADgEQAHgJACgXQgHAGgIAEQgIAEgIAAQgJAAgIgEQgIgDgGgGQgGgFgDgGQgDgIAAgIQAAgJADgIQAEgIAGgFQAHgHAJgDQAJgDALAAQAMAAAJAEQAKAEAHAHQAHAJADALQAEALAAAPQAAAQgEAMQgEAMgHAJQgHAIgKAFQgLAEgLAAQgNAAgKgEgAgSgnQgGAHAAALQAAALAGAHQAHAGAKAAQAFAAAFgDQAGgCADgFQAEgFAAgIQAAgFgCgFQgCgFgDgEQgEgDgEgCQgFgCgEAAQgJAAgHAHg");
	this.shape_649.setTransform(89.5,124.6);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#660000").s().p("AgaA5QgLgIgGgNQgDgHgBgIQgCgJAAgKQAAgMACgKQABgLAEgHQAFgNALgGQALgGAPAAQAKAAAHADQAJADAGAFQAHAFADAIQAIAPAAAYQAAAOgCAKQgCALgFAIQgHAKgLAGQgKAFgNAAQgOAAgMgHgAgRgjQgFAMAAAXQAAAQACAKQACAKAFAFQAGAFAHABQAJAAAFgGQAFgFACgLQACgKAAgPQAAgQgCgKQgCgJgFgFQgFgGgJAAQgMAAgFALg");
	this.shape_650.setTransform(77.8,124.6);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#660000").s().p("AgZA5QgMgIgGgNQgEgHgBgIQgBgJAAgKQAAgMABgKQACgLAEgHQAFgNALgGQALgGAPAAQAJAAAJADQAIADAGAFQAGAFAEAIQAIAPAAAYQAAAOgCAKQgCALgFAIQgHAKgLAGQgKAFgNAAQgNAAgMgHgAgRgjQgFAMAAAXQAAAQACAKQACAKAFAFQAGAFAHABQAJAAAFgGQAFgFACgLQACgKAAgPQAAgQgCgKQgCgJgFgFQgFgGgJAAQgMAAgFALg");
	this.shape_651.setTransform(65.9,124.6);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#660000").s().p("AgiA/QgHAAgEgDQgEgEAAgFQAAgDACgFIAGgIIAYgUIAPgLIAMgJQAFgFADgGQADgFAAgFQAAgFgDgFQgDgEgFgDQgFgCgFAAQgNAAgIAKIgDAHIgFAJQgDADgFAAQgFAAgEgDQgDgDAAgFQAAgFADgHQADgGAGgFQAGgGAKgDQAJgDAMAAQAOAAALAEQAHADAFAFQAFAEADAHQADAGAAAGQAAALgGAJQgGAIgHAFIgVAPQgNALgGAFIgFAGIAzAAQAHAAAEACQAEAEAAAEQAAAEgDADQgDADgHAAg");
	this.shape_652.setTransform(54.2,124.5);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#660000").s().p("AgOALQgHAAgEgDQgEgDAAgFQAAgDAEgDQADgDAIAAIAdAAQAHAAAFADQADADAAADQAAAFgDADQgFADgHAAg");
	this.shape_653.setTransform(44.8,126.2);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#660000").s().p("AAOA+QgDgEAAgGIAAgQIgwAAQgKAAgEgEQgEgDgBgHIABgDIACgDIADgFIADgDIA0g8IAIgJQADgCAFAAQAOAAAAAOIAABCIAFAAQAHAAAFACQAFABAAAHQAAAEgFADQgDACgIAAIgGAAIAAAQQAAAGgCAEQgEACgGAAQgFAAgEgCgAgeARIApAAIAAgxg");
	this.shape_654.setTransform(35.5,124.5);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#660000").s().p("AgVA8QgKgDgGgGQgGgFgDgGQgDgGAAgEQAAgFADgDQAEgDAFAAQADAAADACQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAFAMAGAFQAGAGAKABQAFAAAGgEQAGgCADgFQAEgFAAgHQAAgKgGgGQgHgFgKAAIgFAAIgGABQgFgBgDgCQgDgCAAgDQAAgEADgDQAEgDAHABIAEAAQAIgBAGgEQAHgFAAgIQAAgHgFgFQgGgEgIgBQgFABgEABQgEACgCACQgCACgCAEIgEAHQAAABgBAAQAAAAAAABQgBAAAAAAQgBABgBAAIgGABQgDAAgDgDQgEgCAAgGQAAgEADgFQADgFAGgEQAGgEAJgDQAJgDAJAAQAKAAAIADQAHABAHAFQAFAEADAGQADAFAAAHQAAAJgEAFQgEAHgJAGQAIADAGAEQAEAEAEAGQACAGAAAGQAAAIgEAHQgDAHgHAGQgHAFgKAEQgJADgLAAQgMAAgIgEg");
	this.shape_655.setTransform(23.7,124.6);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#660000").s().p("AgaA8QgJgFgFgFQgFgHAAgGQAAgDADgDQADgDAFAAQAEAAAEACQADACACAEQACAGAFACQAFAEAGAAQAFAAAFgDQAFgDADgEQAHgJACgXQgHAGgIAEQgIAEgIAAQgJAAgIgEQgIgDgGgGQgGgFgDgGQgDgIAAgIQAAgJADgIQAEgIAGgFQAHgHAJgDQAJgDALAAQAMAAAJAEQAKAEAHAHQAHAJADALQAEALAAAPQAAAQgEAMQgEAMgHAJQgHAIgKAFQgLAEgLAAQgNAAgKgEgAgSgnQgGAHAAALQAAALAGAHQAHAGAKAAQAFAAAFgDQAGgCADgFQAEgFAAgIQAAgFgCgFQgCgFgDgEQgEgDgEgCQgFgCgEAAQgJAAgHAHg");
	this.shape_656.setTransform(11.6,124.6);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#660000").s().p("AAMBSQgDgBgCgEIgHgJQgIgLgFgKQgFgLgCgMQgEgKAAgOQABgMACgLQACgLAGgLQAFgLAIgLIAHgKQACgDADAAIAHgBQAFAAABADIgFAJIgJASQgEAJgDANQgDAOgBAPQABAPADAOQADAOAEAKIAJATIAFAIQgBACgFAAIgHAAg");
	this.shape_657.setTransform(-9.5,126.2);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#660000").s().p("AgYAsQgLgEgFgGQgFgGAAgGQAAgDADgDQAEgDAFAAQADAAADACIAEAFQAEAGAGADQAFADAKAAQAHAAAFgDQAGgDAAgEQAAgGgGgDQgFgDgLgCQgOgDgIgEQgJgCgGgFQgEgGAAgIQgBgHAFgGQAFgGAKgEQAJgDANAAQAJAAAIABQAJACAFADQAGAEADADQACAEAAAEQAAAEgCADQgEACgFAAQgEAAgDgCIgHgGIgHgGQgEgCgGAAQgIAAgEADQgFADAAAEQAAADAEADQADACAGACIAQADQAMADAIAEQAIACAEAGQAEAEAAAHQAAAKgGAGQgFAHgLAEQgKADgOAAQgOAAgKgDg");
	this.shape_658.setTransform(-23.6,126.2);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#660000").s().p("AAfAtQgEgEgFgGQgKAGgJAEQgIACgLAAQgKAAgIgDQgIgDgEgGQgEgGAAgIQAAgJAHgHQAHgGAMgCIAMgCIARgDIAPgFQAAgIgEgFQgEgEgMAAQgJAAgFADQgFACgEAFIgFAGQgBACgFAAQgFAAgDgCQgDgDAAgEQAAgGAFgGQAFgGAKgDQALgEAOgBQASABAKAEQAKADAEAHQAEAIAAANIAAANIAAANQAAAHADAHIACAJQAAADgEAEQgDACgFAAQgEAAgEgCgAADAEIgOAEQgFABgEACQgDAEAAAFQAAAFAEAEQAFADAHAAQAHAAAHgDQAHgDADgFQADgFAAgMIAAgDIgRADg");
	this.shape_659.setTransform(-35,126.2);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#660000").s().p("AgPA8QgEgDAAgHIAAhCQAAgGAEgEQADgDAGAAQAGAAADADQAEADAAAGIAABDQAAAHgEADQgDAEgGAAQgGAAgDgEgAgTgpIACgGIAFgHQAEgGADgCQACgBAFAAIANAAQAFAAAAABIgFAFIgLAKIgHAGQgFACgHAAQgEAAAAgCg");
	this.shape_660.setTransform(-43,124.6);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#660000").s().p("AgjAjQgOgMgBgWQABgNAGgLQAHgLALgHQAMgFAQgBQAKABAJADQAJACAGAEQAGAEADAFQADAFAAAEQAAAEgDADQgEADgFAAQgEAAgCgCIgEgEQgGgHgEgDQgGgEgJAAQgKABgIAHQgHAJAAANQAAAGACAGQACAFADAEQAEAEAFACQAFACAFAAQAIAAAGgDQAGgDAEgHQADgEACgCQADgCAEAAQAFgBADAEQADADAAAEQAAAEgDAFQgCAFgHAFQgFAEgKADQgJACgMAAQgXAAgOgMg");
	this.shape_661.setTransform(-52.3,126.2);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#660000").s().p("AAfAtQgEgEgFgGQgKAGgJAEQgIACgLAAQgKAAgIgDQgIgDgEgGQgEgGAAgIQAAgJAHgHQAHgGAMgCIAMgCIARgDIAPgFQAAgIgEgFQgEgEgMAAQgJAAgFADQgFACgEAFIgFAGQgBACgFAAQgFAAgDgCQgDgDAAgEQAAgGAFgGQAFgGAKgDQALgEAOgBQASABAKAEQAKADAEAHQAEAIAAANIAAANIAAANQAAAHADAHIACAJQAAADgEAEQgDACgFAAQgEAAgEgCgAADAEIgOAEQgFABgEACQgDAEAAAFQAAAFAEAEQAFADAHAAQAHAAAHgDQAHgDADgFQADgFAAgMIAAgDIgRADg");
	this.shape_662.setTransform(-64.2,126.2);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#660000").s().p("AAuA8QgDgDAAgHIAAhWIgYBPIgDALQgCAEgEADQgDADgHAAQgEAAgDgCQgEgCgCgDIgDgHIgCgHIgYhPIAABWQAAAHgDADQgEAEgGAAQgFAAgEgEQgEgDAAgHIAAhjQAAgIAFgDQAFgDAIAAIAJAAQAIAAAEACQADABACADIAEALIAUBEIAVhEIAEgLQABgDAEgBQAEgCAIAAIAJAAQAJAAAEADQAFADAAAIIAABjQAAAHgEADQgDAEgHAAQgFAAgEgEg");
	this.shape_663.setTransform(-78.4,124.6);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#660000").s().p("AgJA9QgDgDAAgHIAAhkQAAgHADgEQAEgEAFAAQAGAAAEAEQADADAAAIIAABkQAAAHgDADQgEAEgGAAQgFAAgEgEg");
	this.shape_664.setTransform(-94.5,124.5);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#660000").s().p("AAbA8QgFgDAAgGIAAgDQgEAGgGADQgEADgHACQgFACgJAAQgJAAgIgEQgHgDgFgGQgEgHgBgOIAAguQAAgHAEgDQAEgDAGAAQAGAAADADQAEAEAAAGIAAAlQAAAHACAGQABAFAEAEQAFADAGAAQAGAAAGgEQAGgDADgGQACgEAAgRIAAgcQAAgGAEgEQADgDAHAAQAGAAADADQADADAAAHIAABDQAAAGgCAEQgFADgEAAQgGAAgDgEgAgSgpIADgGIADgHQAFgGACgCQADgBAFAAIANAAQAFAAAAABIgGAFIgLAKIgGAGQgGACgGAAQgBAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_665.setTransform(-103.3,124.6);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#660000").s().p("AAfAtQgEgEgFgGQgKAGgJAEQgIACgLAAQgKAAgIgDQgIgDgEgGQgEgGAAgIQAAgJAHgHQAHgGAMgCIAMgCIARgDIAPgFQAAgIgEgFQgEgEgMAAQgJAAgFADQgFACgEAFIgFAGQgBACgFAAQgFAAgDgCQgDgDAAgEQAAgGAFgGQAFgGAKgDQALgEAOgBQASABAKAEQAKADAEAHQAEAIAAANIAAANIAAANQAAAHADAHIACAJQAAADgEAEQgDACgFAAQgEAAgEgCgAADAEIgOAEQgFABgEACQgDAEAAAFQAAAFAEAEQAFADAHAAQAHAAAHgDQAHgDADgFQADgFAAgMIAAgDIgRADg");
	this.shape_666.setTransform(-115.3,126.2);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#660000").s().p("AAlA+IgFgFIgHgJIgMgRQgGgJgFgFQgEgFgFgCQgFgCgIAAIgKAAIAAAoQAAAIgEAEQgEAEgGAAQgHAAgEgEQgEgEAAgIIAAhfQAAgIAEgEQAFgEAJAAIAuAAIARABQAHABAFACQAHADAFAEQAGAFACAGQADAGAAAHQAAAOgJAIQgJAIgSADQAHAEAHAHQAHAHAGAIIAIAOQAEAGAAADQAAACgCADIgFAEIgHABQgFAAgEgCgAgegJIAaAAQAKAAAHgCQAHgBAEgEQAEgEAAgGQAAgGgDgEQgEgEgFgCQgFgBgOAAIgbAAg");
	this.shape_667.setTransform(-127.8,124.6);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#660000").s().p("AgZAsQgKgEgFgGQgFgGAAgGQAAgDADgDQADgDAFAAQAEAAADACIAEAFQAEAGAGADQAFADAJAAQAIAAAGgDQAEgDAAgEQAAgGgEgDQgGgDgLgCQgOgDgJgEQgIgCgFgFQgGgGABgIQAAgHAEgGQAFgGAJgEQAKgDANAAQAJAAAJABQAIACAFADQAGAEACADQADAEAAAEQAAAEgDADQgCACgHAAQgDAAgDgCIgHgGIgHgGQgEgCgGAAQgHAAgFADQgFADAAAEQAAADADADQAEACAGACIAPADQANADAIAEQAHACAFAGQAEAEAAAHQAAAKgGAGQgFAHgKAEQgLADgOAAQgOAAgLgDg");
	this.shape_668.setTransform(135,208.7);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgKAEgIQADgJAHgGQAHgHAJgDQAKgDALgBQAQAAALAHQALAFAGAJQAGAJAAAKQAAAIgGADQgGACgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgEIAIgHQACgBAEgBQAEAAACACQADACAAAEQAAADgDAFQgDADgFAFQgGAEgJACQgIADgMAAQgYAAgPgNgAgPgYQgGAGgCAMIAwAAQgBgMgHgGQgGgGgKAAQgJAAgHAGg");
	this.shape_669.setTransform(123.6,208.7);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#660000").s().p("AgjAjQgOgMAAgWQAAgOAGgKQAHgMAMgFQAMgHAPAAQAKAAAJADQAJADAGAEQAGAEADAFQADAFAAAEQAAAEgDADQgEADgFAAQgEAAgCgCIgEgEQgFgHgGgDQgFgDgIgBQgLAAgHAJQgIAIAAAMQAAAIACAFQACAGAEAEQADADAFACQAFACAFAAQAIAAAGgDQAFgEAFgGQACgEADgCQADgDAEAAQAFAAAEAEQACADAAAEQAAAEgCAFQgEAFgFAFQgHAEgJACQgJAEgMAAQgXAAgOgNg");
	this.shape_670.setTransform(111.7,208.7);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgKAEgIQADgJAHgGQAHgHAJgDQAKgDALgBQAQAAALAHQALAFAGAJQAGAJAAAKQAAAIgGADQgGACgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgEIAIgHQACgBAEgBQAEAAACACQADACAAAEQAAADgDAFQgDADgFAFQgGAEgJACQgIADgMAAQgYAAgPgNgAgPgYQgGAGgCAMIAwAAQgBgMgHgGQgGgGgKAAQgJAAgHAGg");
	this.shape_671.setTransform(99.9,208.7);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgKAEgIQADgJAHgGQAHgHAJgDQAKgDALgBQAQAAALAHQALAFAGAJQAGAJAAAKQAAAIgGADQgGACgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgEIAIgHQACgBAEgBQAEAAACACQADACAAAEQAAADgDAFQgDADgFAFQgGAEgJACQgIADgMAAQgYAAgPgNgAgPgYQgGAGgCAMIAwAAQgBgMgHgGQgGgGgKAAQgJAAgHAGg");
	this.shape_672.setTransform(75.5,208.7);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#660000").s().p("AgxA9QgCgEAAgIIAAhkQAAgGADgDQAEgDAFAAQAGAAAEADQADADAAAGIAAADQAIgIAIgEQAIgDAJAAQANgBAKAGQAKAFAGALQAGALAAAPQAAAKgDAIQgEAJgGAHQgGAFgIAEQgIADgKAAQgKAAgIgEQgIgEgHgIIAAAjQAAAPgNAAQgHAAgDgDgAgRgnQgIAIAAAPQAAAOAIAGQAIAIAKAAQAGAAAGgDQAGgEADgFQAEgHAAgJQAAgKgEgHQgDgGgGgEQgFgDgHAAQgKAAgIAHg");
	this.shape_673.setTransform(55.2,210.5);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#660000").s().p("AAbAsQgFgEAAgGIAAgDQgEAGgGADQgEAEgHACQgFABgJAAQgJAAgIgDQgIgEgEgGQgEgHAAgOIAAguQAAgHADgDQAEgDAGAAQAGAAADADQAEAEAAAGIAAAlQAAAIACAFQABAGAEADQAFADAHAAQAFAAAGgDQAGgEADgFQACgFAAgQIAAgdQAAgGAEgEQADgDAHAAQAFAAAEADQADADAAAHIAABDQAAAHgCADQgFADgEAAQgGAAgDgDg");
	this.shape_674.setTransform(37.7,208.7);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#660000").s().p("AgZAsQgKgEgFgGQgFgGAAgGQAAgDADgDQAEgDAEAAQAFAAACACIAEAFQAEAGAGADQAFADAJAAQAIAAAGgDQAEgDAAgEQAAgGgEgDQgGgDgLgCQgOgDgJgEQgIgCgFgFQgGgGAAgIQABgHAEgGQAFgGAJgEQAKgDANAAQAJAAAJABQAIACAFADQAGAEACADQADAEABAEQgBAEgDADQgCACgHAAQgEAAgCgCIgHgGIgHgGQgEgCgGAAQgHAAgFADQgFADAAAEQAAADADADQAEACAGACIAPADQANADAIAEQAHACAFAGQAEAEAAAHQAAAKgFAGQgGAHgKAEQgLADgOAAQgPAAgKgDg");
	this.shape_675.setTransform(26.2,208.7);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgKAEgIQADgJAHgGQAHgHAJgDQAKgDALgBQAQAAALAHQALAFAGAJQAGAJAAAKQAAAIgGADQgGACgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgEIAIgHQACgBAEgBQAEAAACACQADACAAAEQAAADgDAFQgDADgFAFQgGAEgJACQgIADgMAAQgYAAgPgNgAgPgYQgGAGgCAMIAwAAQgBgMgHgGQgGgGgKAAQgJAAgHAGg");
	this.shape_676.setTransform(9.8,208.7);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#660000").s().p("AAaAsQgDgEAAgGIAAgDQgFAGgGADQgFAEgGACQgFABgIAAQgKAAgHgDQgIgEgFgGQgEgHAAgOIAAguQgBgHAEgDQAEgDAFAAQAHAAADADQAEAEAAAGIAAAlQAAAIACAFQACAGAEADQADADAIAAQAFAAAGgDQAGgEADgFQACgFAAgQIAAgdQAAgGAEgEQAEgDAGAAQAFAAAEADQAEADgBAHIAABDQAAAHgCADQgFADgEAAQgGAAgEgDg");
	this.shape_677.setTransform(-2.2,208.7);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#660000").s().p("AAeA9QgDgFAAgHIAAggQgIAGgIAEQgIADgJAAQgNAAgLgFQgKgHgGgKQgFgKAAgOQAAgPAFgLQAHgLAKgFQALgGAMABQAKAAAIADQAJAEAGAIIAAgDQAAgGADgDQAEgDAFAAQAGAAADADQAEADAAAGIAABkQAAAPgNAAQgIAAgBgDgAgRgnQgHAJAAAOQgBAJAEAHQADAGAGADQAGADAGAAQAHAAAFgDQAGgDAEgGQAEgHAAgKQAAgHgDgGQgCgFgDgEQgDgDgFgCQgFgCgFAAQgKAAgHAHg");
	this.shape_678.setTransform(-14.7,210.5);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#660000").s().p("AAfAsQgEgDgFgHQgKAHgJADQgIAEgLAAQgKAAgIgEQgIgDgEgHQgEgGAAgGQAAgKAHgHQAHgFAMgDIAMgCIARgEIAPgDQAAgKgEgEQgEgEgMAAQgJAAgFACQgFADgEAFIgFAHQgBABgFAAQgFAAgDgCQgDgDAAgEQAAgGAFgGQAFgGAKgDQALgFAOAAQASAAAKAFQAKADAEAIQAEAHAAANIAAAOIAAAMQAAAHADAHIACAJQAAADgEADQgDAEgFAAQgEAAgEgEgAADAFIgOADQgFABgEADQgDACAAAGQAAAFAEAEQAFAEAHgBQAHAAAHgCQAHgEADgEQADgGAAgMIAAgEIgRAFg");
	this.shape_679.setTransform(-31.7,208.7);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#660000").s().p("AAVAzIAAgoQAAgLgEgFQgEgGgKAAQgGAAgGAEQgGADgDAFQgCAGAAANIAAAfQAAAHgDADQgEAEgGAAQgOAAAAgOIAAhkQAAgIAEgDQADgEAHAAQAGAAAEAEQADAEAAAHIAAAiQAFgFAFgDQAFgDAFgBQAGgCAGAAQALAAAIAEQAHAEAFAHQADAEABAFIABALIAAAtQAAAHgEADQgEAEgGAAQgNAAAAgOg");
	this.shape_680.setTransform(-67.1,207);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#660000").s().p("AgkAjQgNgMAAgWQgBgOAHgKQAGgMAMgFQANgHAPAAQAKAAAJADQAJADAGAEQAGAEADAFQADAFAAAEQAAAEgEADQgDADgFAAQgDAAgCgCIgGgEQgFgHgFgDQgFgDgJgBQgKAAgIAJQgGAIAAAMQAAAIACAFQABAGADAEQAEADAFACQAFACAFAAQAIAAAGgDQAFgEAFgGQADgEADgCQACgDAEAAQAFAAADAEQAEADAAAEQAAAEgEAFQgCAFgHAFQgFAEgKACQgJAEgMAAQgYAAgOgNg");
	this.shape_681.setTransform(-78.6,208.7);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgKAEgIQADgJAHgGQAHgHAJgDQAKgDALgBQAQAAALAHQALAFAGAJQAGAJAAAKQAAAIgGADQgGACgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgEIAIgHQACgBAEgBQAEAAACACQADACAAAEQAAADgDAFQgDADgFAFQgGAEgJACQgIADgMAAQgYAAgPgNgAgPgYQgGAGgCAMIAwAAQgBgMgHgGQgGgGgKAAQgJAAgHAGg");
	this.shape_682.setTransform(-90.4,208.7);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgKAEgIQADgJAHgGQAHgHAJgDQAKgDALgBQAQAAALAHQALAFAGAJQAGAJAAAKQAAAIgGADQgGACgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgEIAIgHQACgBAEgBQAEAAACACQADACAAAEQAAADgDAFQgDADgFAFQgGAEgJACQgIADgMAAQgYAAgPgNgAgPgYQgGAGgCAMIAwAAQgBgMgHgGQgGgGgKAAQgJAAgHAGg");
	this.shape_683.setTransform(-110.6,208.7);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#660000").s().p("AgZAsQgKgEgFgGQgFgGAAgGQAAgDADgDQADgDAFAAQAEAAADACIAEAFQAEAGAGADQAFADAJAAQAIAAAGgDQAEgDAAgEQAAgGgEgDQgGgDgLgCQgOgDgJgEQgIgCgFgFQgGgGAAgIQABgHAEgGQAFgGAJgEQAKgDANAAQAJAAAJABQAIACAFADQAGAEACADQADAEAAAEQAAAEgDADQgCACgHAAQgDAAgDgCIgHgGIgHgGQgEgCgGAAQgHAAgFADQgFADAAAEQAAADADADQAEACAGACIAPADQANADAIAEQAHACAFAGQAEAEAAAHQAAAKgGAGQgFAHgKAEQgLADgOAAQgOAAgLgDg");
	this.shape_684.setTransform(-139.5,208.7);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgKAEgIQADgJAHgGQAHgHAJgDQAKgDALgBQAQAAALAHQALAFAGAJQAGAJAAAKQAAAIgGADQgGACgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgEIAIgHQACgBAEgBQAEAAACACQADACAAAEQAAADgDAFQgDADgFAFQgGAEgJACQgIADgMAAQgYAAgPgNgAgPgYQgGAGgCAMIAwAAQgBgMgHgGQgGgGgKAAQgJAAgHAGg");
	this.shape_685.setTransform(-175,208.7);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#660000").s().p("AA1AsQgEgEAAgHIAAgnIgBgMQgBgEgDgDQgDgDgHAAQgFAAgFACQgEADgDAFQgDAGAAAOIAAAfQAAAHgDAEQgFADgGAAQgFAAgEgDQgEgEAAgHIAAgkIAAgOQgBgFgDgDQgDgDgHAAQgNAAgDAIQgFAHAAAOIAAAgQAAAHgDAEQgFADgFAAQgGAAgFgDQgEgEAAgHIAAhCQABgHADgDQADgDAGAAQAGAAADADQAEADAAAGIAAACQAHgHAIgEQAIgDAJAAQAKAAAIADQAGAEAFAHQAHgHAHgEQAIgDAJAAQAMAAAHADQAJAEADAHQADAHAAANIAAAtQAAAHgDAEQgEADgHAAQgGAAgDgDg");
	this.shape_686.setTransform(-189.9,208.7);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgJAEgJQADgJAHgGQAHgHAJgDQAKgEALAAQAQABALAGQALAFAGAKQAGAJAAAJQAAAIgGADQgGACgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgFIAIgGQACgCAEAAQAEAAACADQADABAAAEQAAAEgDAEQgDAEgFAEQgGADgJADQgIACgMABQgYAAgPgNgAgPgYQgGAGgCAMIAwAAQgBgMgHgGQgGgGgKAAQgJAAgHAGg");
	this.shape_687.setTransform(255.2,186);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#660000").s().p("AAbAsQgFgEAAgGIAAgDQgEAGgGADQgEAEgHACQgFABgJAAQgJAAgIgDQgHgEgFgGQgEgHgBgOIAAguQAAgHAEgDQAEgDAGAAQAGAAAEADQADAEAAAGIAAAlQAAAIACAFQABAGAEADQAFADAGAAQAGAAAGgDQAGgEADgFQACgFAAgQIAAgdQAAgGAEgEQADgDAHAAQAGAAADADQADADAAAHIAABDQAAAHgCADQgFADgEAAQgGAAgDgDg");
	this.shape_688.setTransform(243.2,186);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#660000").s().p("AgOA9QgEgDAAgHIAAg9IgHAAQgHAAgCgCQgEgDAAgEQAAgIAOAAIAGAAIAAgHQAAgLADgGQAEgHAHgDQAGgDANAAQAYAAAAAKQAAAEgCACQgDACgDAAIgFAAIgHgBQgHAAgCAEQgCAEAAAHIAAAFIAGAAQAPAAAAAIQAAAGgDABQgFACgHAAIgGAAIAAA9QAAAHgEADQgEAEgFAAQgGAAgDgEg");
	this.shape_689.setTransform(234.2,184.2);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#660000").s().p("AgsA+QgFgBAAgHQAAgDACgDQADgCAGAAIADAAIAFABIAIgBIAEgEIAFgJIACgFIghhIQgDgFAAgEQABgDABgCIAFgEQADgCADABQAHAAACACQADADADAGIAVA5IAWg0IAEgKQACgEADgCIAGAAIAFAAQADACACACIACAGIgCAEIgCAGIgjBPQgEAKgEAHQgEAFgHAEQgHACgMAAQgMAAgGgCg");
	this.shape_690.setTransform(219.9,187.7);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#660000").s().p("AAfAtQgEgEgFgHQgKAHgJAEQgIADgLAAQgKgBgIgDQgIgDgEgHQgEgFAAgIQAAgJAHgHQAHgGAMgCIAMgCIARgDIAPgFQAAgJgEgEQgEgEgMAAQgJAAgFACQgFADgEAFIgFAHQgBABgFAAQgFAAgDgCQgDgDAAgEQAAgGAFgGQAFgGAKgDQALgFAOAAQASAAAKAFQAKADAEAHQAEAJAAAMIAAAOIAAAMQAAAHADAHIACAJQAAAEgEADQgDADgFAAQgEAAgEgDgAADAEIgOAEQgFABgEADQgDACAAAGQAAAFAEAEQAFADAHAAQAHAAAHgCQAHgEADgFQADgFAAgMIAAgDIgRADg");
	this.shape_691.setTransform(203.7,186);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#660000").s().p("AgZA+QgLgEgGgFQgGgFAAgGQAAgFADgCQAEgDAFAAQAFAAAFAEIAFAFIAEAEIAHACIAJABQAKAAAFgCQAGgDADgEQABgEABgGIABgRQgHAIgIAEQgIAEgKAAQgOAAgJgGQgKgGgGgKQgFgKAAgOQAAgLADgIQADgJAHgGQAGgGAHgDQAJgCAJAAQAKAAAIADQAJAEAHAIIAAgDQAAgGADgEQAEgCAFAAQAIAAADADQACAFAAAJIAABCQAAAMgDAIQgDAJgGAFQgGAFgKADQgLADgNgBQgPAAgKgCgAgSgmQgHAHAAAOQAAAOAIAGQAHAIAKgBQAGAAAGgCQAGgDAFgGQADgGAAgJQAAgPgHgHQgIgJgLABQgKgBgIAJg");
	this.shape_692.setTransform(159.8,187.7);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#660000").s().p("AAfAtQgEgEgFgHQgKAHgJAEQgIADgLAAQgKgBgIgDQgIgDgEgHQgEgFAAgIQAAgJAHgHQAHgGAMgCIAMgCIARgDIAPgFQAAgJgEgEQgEgEgMAAQgJAAgFACQgFADgEAFIgFAHQgBABgFAAQgFAAgDgCQgDgDAAgEQAAgGAFgGQAFgGAKgDQALgFAOAAQASAAAKAFQAKADAEAHQAEAJAAAMIAAAOIAAAMQAAAHADAHIACAJQAAAEgEADQgDADgFAAQgEAAgEgDgAADAEIgOAEQgFABgEADQgDACAAAGQAAAFAEAEQAFADAHAAQAHAAAHgCQAHgEADgFQADgFAAgMIAAgDIgRADg");
	this.shape_693.setTransform(120.3,186);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgJAEgJQADgJAHgGQAHgHAJgDQAKgEALAAQAQABALAGQALAFAGAKQAGAJAAAJQAAAIgGADQgGACgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgFIAIgGQACgCAEAAQAEAAACADQADABAAAEQAAAEgDAEQgDAEgFAEQgGADgJADQgIACgMABQgYAAgPgNgAgPgYQgGAGgCAMIAwAAQgBgMgHgGQgGgGgKAAQgJAAgHAGg");
	this.shape_694.setTransform(96.4,186);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#660000").s().p("AgxA9QgCgEAAgIIAAhkQAAgGADgEQAEgCAFAAQAGAAAEACQADAEAAAGIAAADQAIgIAIgEQAIgDAJAAQANAAAKAFQAKAGAGAKQAGALAAAOQAAAMgDAHQgEAKgGAFQgGAGgIAEQgIADgKAAQgKAAgIgEQgIgEgHgHIAAAjQAAAPgNgBQgHABgDgEgAgRgmQgIAHAAAOQAAAOAIAIQAIAHAKAAQAGAAAGgDQAGgEADgFQAEgHAAgKQAAgJgEgHQgDgGgGgEQgFgDgHAAQgKgBgIAJg");
	this.shape_695.setTransform(84.4,187.7);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#660000").s().p("AAZAsQgEgEAAgHIAAgmQAAgLgEgGQgDgGgLAAQgGAAgGADQgGAEgDAHQgCAFAAANIAAAdQAAAHgDAEQgFADgGAAQgFAAgEgDQgDgEgBgHIAAhCQABgHADgDQADgDAGAAIAGABIAFAEQABADABAEIAAADQAGgIAJgEQAIgDAKAAQALAAAIAEQAJAEADAHQADAEABAFIABANIAAAqQAAAHgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_696.setTransform(66.9,186);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#660000").s().p("AgZAsQgKgEgFgGQgFgGAAgGQAAgDADgDQADgDAFAAQAEAAADACIAEAFQAEAGAGADQAFADAJAAQAIAAAGgDQAEgDAAgEQAAgGgEgDQgGgDgLgCQgOgDgJgEQgIgCgFgFQgGgGABgIQAAgHAEgGQAFgGAJgEQAKgDANAAQAJAAAJABQAIACAFADQAGAEACADQADAEAAAEQAAAEgDADQgCACgHAAQgDAAgDgCIgHgGIgHgGQgEgCgGAAQgHAAgFADQgFADAAAEQAAADADADQAEACAGACIAPADQANADAIAEQAHACAFAGQAEAEAAAHQAAAKgGAGQgFAHgKAEQgLADgOAAQgOAAgLgDg");
	this.shape_697.setTransform(49.9,186);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#660000").s().p("AgVA8QgKgCgHgHQgHgHgEgIQgDgJAAgLQAAgKADgHQAEgKAHgGQAHgGAKgEQAKgCALAAQAMAAAKACQAKAEAHAGQAHAHADAJQAEAHAAAKQAAALgEAJQgDAIgHAHQgIAGgJAEQgKADgMAAQgLAAgKgEgAgNgJQgGAEgDAFQgEAHAAAJQAAAKAEAHQADAGAGAEQAGAEAHAAQAMAAAHgIQAHgIAAgPQAAgOgHgGQgHgJgMABQgHgBgGAEgAgSgpIACgFIAEgIQAEgGADgCQADgBAFAAIANAAQAFAAAAABIgGAGIgLAJIgGAGQgGACgGAAQgBAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_698.setTransform(33.5,184.3);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#660000").s().p("AAZAsQgEgEAAgHIAAgmQAAgLgDgGQgFgGgKAAQgGAAgGADQgGAEgDAHQgCAFAAANIAAAdQAAAHgEAEQgEADgFAAQgGAAgEgDQgEgEAAgHIAAhCQAAgHAEgDQADgDAGAAIAHABIAEAEQACADgBAEIAAADQAIgIAIgEQAIgDAKAAQAKAAAJAEQAIAEAFAHQACAEABAFIABANIAAAqQgBAHgDAEQgDADgGAAQgHAAgDgDg");
	this.shape_699.setTransform(21.4,186);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgJAEgJQADgJAHgGQAHgHAJgDQAKgEALAAQAQABALAGQALAFAGAKQAGAJAAAJQAAAIgGADQgGACgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgFIAIgGQACgCAEAAQAEAAACADQADABAAAEQAAAEgDAEQgDAEgFAEQgGADgJADQgIACgMABQgYAAgPgNgAgPgYQgGAGgCAMIAwAAQgBgMgHgGQgGgGgKAAQgJAAgHAGg");
	this.shape_700.setTransform(0.6,186);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#660000").s().p("AgZA+QgLgEgGgFQgGgFAAgGQAAgFADgCQAEgDAEAAQAHAAAEAEIAEAFIAGAEIAGACIAJABQAKAAAFgCQAGgDACgEQADgEAAgGIAAgRQgGAIgHAEQgJAEgKAAQgNAAgLgGQgKgGgFgKQgFgKAAgOQAAgLADgIQAEgJAFgGQAHgGAIgDQAHgCAKAAQAKAAAJADQAIAEAHAIIAAgDQAAgGAEgEQADgCAFAAQAIAAACADQADAFAAAJIAABCQAAAMgDAIQgCAJgHAFQgGAFgLADQgKADgOgBQgOAAgKgCgAgSgmQgGAHAAAOQgBAOAIAGQAHAIAKgBQAGAAAHgCQAFgDAEgGQAEgGAAgJQAAgPgHgHQgHgJgMABQgKgBgIAJg");
	this.shape_701.setTransform(-36,187.7);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#660000").s().p("AAfAtQgEgEgFgHQgKAHgJAEQgIADgLAAQgKgBgIgDQgIgDgEgHQgEgFAAgIQAAgJAHgHQAHgGAMgCIAMgCIARgDIAPgFQAAgJgEgEQgEgEgMAAQgJAAgFACQgFADgEAFIgFAHQgBABgFAAQgFAAgDgCQgDgDAAgEQAAgGAFgGQAFgGAKgDQALgFAOAAQASAAAKAFQAKADAEAHQAEAJAAAMIAAAOIAAAMQAAAHADAHIACAJQAAAEgEADQgDADgFAAQgEAAgEgDgAADAEIgOAEQgFABgEADQgDACAAAGQAAAFAEAEQAFADAHAAQAHAAAHgCQAHgEADgFQADgFAAgMIAAgDIgRADg");
	this.shape_702.setTransform(-53,186);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#660000").s().p("AgKA8QgGgEgCgGQgCgHAAgLIAAgsIgDAAQgGAAgDgCQgDgCAAgEQAAgEADgCQADgCAHAAIACAAIAAgOIAAgJIACgGQACgCADgCQADgBAEAAQAEAAAEADQADACAAAEIABAJIAAAQIAJAAQAHAAACACQADACABAEQAAAFgFACQgEABgIAAIgFAAIAAAqIAAAJIACAFQADABAEAAIAHAAIAGgBQADAAACACQADACAAAEQAAAFgHADQgHADgOAAQgLAAgHgDg");
	this.shape_703.setTransform(-62.1,184.4);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#660000").s().p("AgYAsQgLgEgFgGQgFgGAAgGQAAgDAEgDQACgDAGAAQADAAACACIAFAFQAEAGAGADQAFADAKAAQAHAAAFgDQAGgDAAgEQAAgGgGgDQgFgDgLgCQgOgDgIgEQgJgCgGgFQgEgGAAgIQgBgHAFgGQAFgGAKgEQAIgDAOAAQAJAAAIABQAJACAGADQAFAEADADQACAEAAAEQAAAEgCADQgDACgGAAQgFAAgCgCIgHgGIgHgGQgEgCgGAAQgHAAgFADQgFADAAAEQAAADAEADQADACAGACIAQADQAMADAIAEQAHACAFAGQAEAEAAAHQAAAKgGAGQgFAHgLAEQgKADgOAAQgOAAgKgDg");
	this.shape_704.setTransform(-71.4,186);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#660000").s().p("AAfAtQgEgEgFgHQgKAHgJAEQgIADgLAAQgKgBgIgDQgIgDgEgHQgEgFAAgIQAAgJAHgHQAHgGAMgCIAMgCIARgDIAPgFQAAgJgEgEQgEgEgMAAQgJAAgFACQgFADgEAFIgFAHQgBABgFAAQgFAAgDgCQgDgDAAgEQAAgGAFgGQAFgGAKgDQALgFAOAAQASAAAKAFQAKADAEAHQAEAJAAAMIAAAOIAAAMQAAAHADAHIACAJQAAAEgEADQgDADgFAAQgEAAgEgDgAADAEIgOAEQgFABgEADQgDACAAAGQAAAFAEAEQAFADAHAAQAHAAAHgCQAHgEADgFQADgFAAgMIAAgDIgRADg");
	this.shape_705.setTransform(-100.8,186);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#660000").s().p("AgJA8QgHgEgCgGQgCgHAAgLIAAgsIgEAAQgFAAgDgCQgDgCAAgEQAAgEADgCQADgCAGAAIADAAIAAgOIABgJIACgGQABgCADgCQADgBADAAQAFAAADADQADACABAEIABAJIAAAQIAKAAQAFAAAEACQACACAAAEQAAAFgEACQgEABgIAAIgFAAIAAAqIABAJIACAFQACABAEAAIAGAAIAGgBQADAAAEACQACACAAAEQAAAFgHADQgHADgNAAQgMAAgGgDg");
	this.shape_706.setTransform(-109.8,184.4);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#660000").s().p("AgYAsQgLgEgFgGQgFgGAAgGQAAgDAEgDQACgDAGAAQADAAACACIAFAFQAEAGAGADQAGADAJAAQAHAAAFgDQAFgDABgEQgBgGgFgDQgFgDgLgCQgOgDgIgEQgJgCgGgFQgEgGAAgIQgBgHAFgGQAFgGAKgEQAIgDAOAAQAJAAAIABQAJACAGADQAFAEADADQACAEAAAEQAAAEgCADQgEACgFAAQgEAAgDgCIgHgGIgHgGQgEgCgGAAQgHAAgFADQgFADAAAEQAAADAEADQADACAGACIAQADQAMADAIAEQAHACAFAGQAEAEAAAHQAAAKgGAGQgFAHgLAEQgKADgOAAQgPAAgJgDg");
	this.shape_707.setTransform(-119.2,186);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgJAEgJQADgJAHgGQAHgHAJgDQAKgEALAAQAQABALAGQALAFAGAKQAGAJAAAJQAAAIgGADQgGACgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgFIAIgGQACgCAEAAQAEAAACADQADABAAAEQAAAEgDAEQgDAEgFAEQgGADgJADQgIACgMABQgYAAgPgNgAgPgYQgGAGgCAMIAwAAQgBgMgHgGQgGgGgKAAQgJAAgHAGg");
	this.shape_708.setTransform(-130.5,186);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#660000").s().p("AAZAsQgEgEAAgHIAAgmQAAgLgEgGQgDgGgLAAQgHAAgFADQgGAEgDAHQgCAFAAANIAAAdQAAAHgEAEQgDADgHAAQgFAAgEgDQgEgEABgHIAAhCQgBgHAEgDQADgDAGAAIAHABIAEAEQACADAAAEIAAADQAGgIAJgEQAHgDALAAQAKAAAJAEQAJAEAEAHQACAEABAFIAAANIAAAqQABAHgEAEQgEADgFAAQgGAAgEgDg");
	this.shape_709.setTransform(-147.5,186);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgJAEgJQADgJAHgGQAHgHAJgDQAKgEALAAQAQABALAGQALAFAGAKQAGAJAAAJQAAAIgGADQgGACgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgFIAIgGQACgCAEAAQAEAAACADQADABAAAEQAAAEgDAEQgDAEgFAEQgGADgJADQgIACgMABQgYAAgPgNgAgPgYQgGAGgCAMIAwAAQgBgMgHgGQgGgGgKAAQgJAAgHAGg");
	this.shape_710.setTransform(-176.6,186);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#660000").s().p("AAaAsQgDgEAAgGIAAgDQgFAGgFADQgGAEgGACQgFABgIAAQgKAAgIgDQgIgEgDgGQgGgHAAgOIAAguQABgHADgDQADgDAHAAQAGAAAEADQADAEAAAGIAAAlQAAAIACAFQACAGAEADQAEADAGAAQAGAAAGgDQAGgEADgFQACgFAAgQIAAgdQAAgGAEgEQAEgDAFAAQAHAAADADQAEADAAAHIAABDQAAAHgEADQgDADgGAAQgFAAgEgDg");
	this.shape_711.setTransform(-188.6,186);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#660000").s().p("AgOA9QgEgDAAgHIAAg9IgIAAQgFAAgEgCQgDgDAAgEQAAgIAOAAIAGAAIAAgHQAAgLADgGQADgHAIgDQAHgDAMAAQAYAAAAAKQAAAEgDACQgCACgDAAIgGAAIgGgBQgHAAgCAEQgCAEgBAHIAAAFIAHAAQAQAAAAAIQAAAGgFABQgDACgIAAIgHAAIAAA9QABAHgEADQgEAEgFAAQgGAAgDgEg");
	this.shape_712.setTransform(-197.6,184.2);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#660000").s().p("AAfAtQgEgEgFgHQgKAHgJAEQgIADgLAAQgKgBgIgDQgIgDgEgHQgEgFAAgIQAAgJAHgHQAHgGAMgCIAMgCIARgDIAPgFQAAgJgEgEQgEgEgMAAQgJAAgFACQgFADgEAFIgFAHQgBABgFAAQgFAAgDgCQgDgDAAgEQAAgGAFgGQAFgGAKgDQALgFAOAAQASAAAKAFQAKADAEAHQAEAJAAAMIAAAOIAAAMQAAAHADAHIACAJQAAAEgEADQgDADgFAAQgEAAgEgDgAADAEIgOAEQgFABgEADQgDACAAAGQAAAFAEAEQAFADAHAAQAHAAAHgCQAHgEADgFQADgFAAgMIAAgDIgRADg");
	this.shape_713.setTransform(-245.7,186);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#660000").s().p("AgkAjQgOgMAAgWQAAgNAHgLQAGgMAMgFQANgGAPgBQAKAAAJAEQAJACAGAEQAGAFADAEQADAFAAAEQAAAEgEADQgDADgFAAQgEAAgBgCIgGgEQgEgHgFgDQgGgEgJAAQgKABgIAHQgGAJgBANQABAGACAGQABAGADADQAEAEAFACQAFACAFAAQAIAAAGgDQAFgEAFgGQACgEAEgCQACgCAEAAQAFAAADADQAEADAAAEQAAAEgEAFQgCAFgHAFQgFAEgKADQgJADgMAAQgYAAgOgNg");
	this.shape_714.setTransform(-288.8,186);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#660000").s().p("AAZAsQgEgEAAgHIAAgmQAAgLgEgGQgDgGgLAAQgGAAgGADQgGAEgDAHQgCAFAAANIAAAdQAAAHgDAEQgFADgFAAQgGAAgEgDQgDgEgBgHIAAhCQABgHADgDQADgDAGAAIAGABIAFAEQABADABAEIAAADQAGgIAJgEQAHgDALAAQALAAAIAEQAJAEADAHQADAEABAFIABANIAAAqQAAAHgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_715.setTransform(258.7,163.2);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgJAEgJQADgJAHgGQAHgGAJgEQAKgDALAAQAQAAALAFQALAGAGAKQAGAJAAAJQAAAIgGACQgGADgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgFIAIgGQACgBAEAAQAEAAACACQADACAAADQAAADgDAEQgDAFgFADQgGAEgJADQgIADgMgBQgYAAgPgMgAgPgYQgGAGgCALIAwAAQgBgMgHgFQgGgGgKAAQgJAAgHAGg");
	this.shape_716.setTransform(246.7,163.2);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#660000").s().p("AgZA9QgLgDgGgGQgGgFAAgFQAAgEADgEQAEgCAEAAQAGAAAFAEIAFAFIAEAEIAHADIAJABQAJAAAGgDQAGgDADgEQACgEAAgFIAAgRQgFAHgIAEQgJAEgKAAQgNAAgKgGQgLgGgFgKQgFgLAAgOQAAgKADgJQAEgIAGgGQAFgGAIgDQAIgDAKAAQAKAAAJAFQAIADAHAIIAAgDQAAgGAEgEQADgDAFAAQAIAAADAFQACAEAAAIIAABDQAAAMgDAIQgCAIgHAGQgGAFgKADQgLACgOAAQgNAAgLgDgAgSgmQgGAHgBAOQAAAOAIAHQAHAGAKAAQAGAAAHgDQAFgDAFgFQADgGAAgJQAAgPgHgHQgIgJgLAAQgKAAgIAJg");
	this.shape_717.setTransform(234.7,165);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgJAEgJQADgJAHgGQAHgGAJgEQAKgDALAAQAQAAALAFQALAGAGAKQAGAJAAAJQAAAIgGACQgGADgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgFIAIgGQACgBAEAAQAEAAACACQADACAAADQAAADgDAEQgDAFgFADQgGAEgJADQgIADgMgBQgYAAgPgMgAgPgYQgGAGgCALIAwAAQgBgMgHgFQgGgGgKAAQgJAAgHAGg");
	this.shape_718.setTransform(191.5,163.2);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#660000").s().p("AAZAsQgEgEAAgHIAAgmQAAgLgDgGQgFgGgKAAQgGAAgGADQgGAEgDAHQgCAFAAANIAAAdQAAAHgEAEQgEADgGAAQgFAAgEgDQgDgEAAgHIAAhCQAAgHADgDQADgDAGAAIAHABIAEAEQABADAAAEIAAADQAIgIAIgEQAHgDALAAQAKAAAJAEQAIAEAFAHQACAEABAFIAAANIAAAqQAAAHgDAEQgEADgFAAQgHAAgDgDg");
	this.shape_719.setTransform(150.6,163.2);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#660000").s().p("AgkAjQgOgNABgVQAAgOAGgLQAHgKAMgHQAMgFAPAAQALAAAIADQAJACAGAEQAGAEADAFQADAFAAAEQAAAEgDADQgEADgFAAQgDAAgDgBIgFgFQgEgHgGgDQgFgDgIAAQgLAAgHAHQgIAJABANQAAAGABAGQACAFAEAEQADAEAFACQAFACAFAAQAIAAAGgDQAGgDAEgHQACgEADgCQADgDAEABQAFgBAEAEQACADAAAEQAAAEgCAFQgDAFgGAEQgHAFgJADQgJACgMAAQgYAAgOgMg");
	this.shape_720.setTransform(121.1,163.2);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#660000").s().p("AAaAsQgDgEAAgGIAAgDQgFAGgFADQgGAEgGACQgFABgIAAQgKAAgHgDQgJgEgDgGQgGgHABgOIAAguQAAgHADgDQADgDAGAAQAHAAAEADQADAEAAAGIAAAlQAAAIACAFQABAGAFADQADADAIAAQAFAAAGgDQAGgEADgFQACgFAAgQIAAgdQAAgGAEgEQAEgDAFAAQAGAAAEADQAEADAAAHIAABDQgBAHgDADQgDADgGAAQgFAAgEgDg");
	this.shape_721.setTransform(109.2,163.2);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgJAEgJQADgJAHgGQAHgGAJgEQAKgDALAAQAQAAALAFQALAGAGAKQAGAJAAAJQAAAIgGACQgGADgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgFIAIgGQACgBAEAAQAEAAACACQADACAAADQAAADgDAEQgDAFgFADQgGAEgJADQgIADgMgBQgYAAgPgMgAgPgYQgGAGgCALIAwAAQgBgMgHgFQgGgGgKAAQgJAAgHAGg");
	this.shape_722.setTransform(69.6,163.2);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#660000").s().p("AgKA8QgGgEgCgGQgCgHAAgLIAAgsIgDAAQgGAAgDgCQgDgCAAgEQAAgEADgCQADgCAHAAIACAAIAAgOIAAgJIACgGQACgCADgCQADgBAEAAQAEAAAEADQACACABAEIABAJIAAAQIAJAAQAHAAACACQADACAAAEQABAFgFACQgEABgIAAIgFAAIAAAqIAAAJIACAFQACABAFAAIAHAAIAFgBQAEAAACACQADACAAAEQAAAFgHADQgHADgOAAQgLAAgHgDg");
	this.shape_723.setTransform(52.1,161.6);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#660000").s().p("AgYAsQgLgEgFgGQgFgGAAgGQAAgDAEgDQACgDAGAAQADAAACACIAFAFQAEAGAGADQAGADAJAAQAHAAAFgDQAFgDABgEQgBgGgFgDQgFgDgLgCQgOgDgIgEQgJgCgGgFQgEgGAAgIQgBgHAFgGQAFgGAKgEQAIgDAOAAQAJAAAIABQAJACAGADQAFAEADADQADAEgBAEQABAEgDADQgEACgFAAQgEAAgDgCIgHgGIgHgGQgEgCgGAAQgHAAgFADQgFADAAAEQAAADAEADQADACAGACIAQADQAMADAIAEQAHACAFAGQAEAEAAAHQAAAKgGAGQgFAHgLAEQgKADgOAAQgPAAgJgDg");
	this.shape_724.setTransform(42.8,163.2);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#660000").s().p("AgxA9QgCgEAAgIIAAhjQAAgHADgEQAEgDAFAAQAGAAAEADQADAEAAAHIAAACQAIgIAIgDQAIgFAJAAQANABAKAFQAKAGAGALQAGAKAAAOQAAALgDAJQgEAIgGAGQgGAHgIADQgIADgKAAQgKAAgIgEQgIgEgHgHIAAAjQAAAOgNAAQgHAAgDgDgAgRgmQgIAHAAAOQAAAOAIAIQAIAHAKAAQAGAAAGgDQAGgDADgHQAEgGAAgKQAAgJgEgGQgDgHgGgEQgFgEgHAAQgKAAgIAJg");
	this.shape_725.setTransform(19.2,165);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#660000").s().p("AAZAsQgEgEAAgHIAAgmQAAgLgDgGQgEgGgLAAQgGAAgGADQgGAEgDAHQgCAFAAANIAAAdQAAAHgEAEQgDADgHAAQgFAAgEgDQgEgEABgHIAAhCQgBgHAEgDQADgDAGAAIAHABIAEAEQABADAAAEIAAADQAIgIAIgEQAHgDALAAQALAAAIAEQAIAEAFAHQACAEABAFIAAANIAAAqQABAHgEAEQgEADgFAAQgHAAgDgDg");
	this.shape_726.setTransform(-10.4,163.2);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#660000").s().p("AAfAtQgEgEgFgGQgKAGgJAEQgIACgLAAQgKAAgIgDQgIgEgEgFQgEgHAAgHQAAgJAHgHQAHgGAMgCIAMgDIARgCIAPgFQAAgIgEgFQgEgEgMAAQgJAAgFADQgFACgEAFIgFAGQgBACgFAAQgFAAgDgDQgDgCAAgEQAAgGAFgGQAFgGAKgEQALgDAOAAQASAAAKADQAKAEAEAHQAEAJAAANIAAAMIAAAOQAAAGADAHIACAJQAAAEgEADQgDACgFAAQgEAAgEgCgAADAEIgOAEQgFABgEACQgDAEAAAEQAAAGAEAEQAFADAHAAQAHAAAHgDQAHgCADgGQADgFAAgMIAAgDIgRADg");
	this.shape_727.setTransform(-22.4,163.2);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#660000").s().p("AgkAjQgOgNABgVQAAgOAGgLQAGgKANgHQALgFAQAAQALAAAIADQAJACAGAEQAGAEADAFQADAFAAAEQAAAEgEADQgDADgFAAQgDAAgCgBIgGgFQgEgHgGgDQgFgDgIAAQgLAAgHAHQgIAJABANQAAAGABAGQACAFAEAEQADAEAFACQAFACAFAAQAIAAAGgDQAGgDAEgHQADgEACgCQADgDAEABQAFgBAEAEQACADAAAEQAAAEgCAFQgEAFgFAEQgHAFgJADQgJACgMAAQgYAAgOgMg");
	this.shape_728.setTransform(-34.3,163.2);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgJAEgJQADgJAHgGQAHgGAJgEQAKgDALAAQAQAAALAFQALAGAGAKQAGAJAAAJQAAAIgGACQgGADgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgFIAIgGQACgBAEAAQAEAAACACQADACAAADQAAADgDAEQgDAFgFADQgGAEgJADQgIADgMgBQgYAAgPgMgAgPgYQgGAGgCALIAwAAQgBgMgHgFQgGgGgKAAQgJAAgHAGg");
	this.shape_729.setTransform(-61.7,163.2);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#660000").s().p("AA1AsQgEgEAAgHIAAgnIgBgMQgBgEgDgDQgDgDgHAAQgFAAgFACQgEADgDAFQgDAGAAAOIAAAfQAAAHgDAEQgFADgGAAQgFAAgEgDQgDgEAAgHIAAgkIgBgOQgBgFgDgDQgDgDgHAAQgMAAgFAIQgEAHAAAOIAAAgQAAAHgDAEQgFADgGAAQgFAAgFgDQgDgEAAgHIAAhCQAAgHADgDQAEgDAFAAQAGAAADADQAEADAAAGIAAACQAHgHAIgEQAIgDAJAAQAKAAAIADQAGAEAFAHQAHgHAHgEQAIgDAJAAQAMAAAHADQAJAEADAHQADAHABANIAAAtQgBAHgDAEQgEADgHAAQgFAAgEgDg");
	this.shape_730.setTransform(-76.6,163.2);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgJAEgJQADgJAHgGQAHgGAJgEQAKgDALAAQAQAAALAFQALAGAGAKQAGAJAAAJQAAAIgGACQgGADgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgFIAIgGQACgBAEAAQAEAAACACQADACAAADQAAADgDAEQgDAFgFADQgGAEgJADQgIADgMgBQgYAAgPgMgAgPgYQgGAGgCALIAwAAQgBgMgHgFQgGgGgKAAQgJAAgHAGg");
	this.shape_731.setTransform(-96.3,163.2);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgJAEgJQADgJAHgGQAHgGAJgEQAKgDALAAQAQAAALAFQALAGAGAKQAGAJAAAJQAAAIgGACQgGADgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgFIAIgGQACgBAEAAQAEAAACACQADACAAADQAAADgDAEQgDAFgFADQgGAEgJADQgIADgMgBQgYAAgPgMgAgPgYQgGAGgCALIAwAAQgBgMgHgFQgGgGgKAAQgJAAgHAGg");
	this.shape_732.setTransform(-125.7,163.2);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#660000").s().p("AgKA8QgGgEgCgGQgCgHAAgLIAAgsIgDAAQgGAAgDgCQgDgCAAgEQAAgEADgCQADgCAGAAIADAAIAAgOIAAgJIADgGQABgCADgCQADgBAEAAQAEAAAEADQADACAAAEIABAJIAAAQIAJAAQAHAAACACQAEACAAAEQAAAFgFACQgEABgIAAIgFAAIAAAqIAAAJIADAFQABABAFAAIAGAAIAHgBQACAAADACQADACAAAEQAAAFgHADQgHADgNAAQgMAAgHgDg");
	this.shape_733.setTransform(-134.9,161.6);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#660000").s().p("AAZAsQgEgEAAgHIAAgmQAAgLgEgGQgDgGgLAAQgHAAgFADQgGAEgDAHQgCAFAAANIAAAdQAAAHgEAEQgDADgHAAQgFAAgEgDQgEgEABgHIAAhCQgBgHAEgDQADgDAGAAIAHABIAEAEQACADAAAEIAAADQAGgIAJgEQAHgDALAAQAKAAAJAEQAJAEAEAHQACAEABAFIAAANIAAAqQABAHgEAEQgEADgFAAQgGAAgEgDg");
	this.shape_734.setTransform(-144.8,163.2);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgJAEgJQADgJAHgGQAHgGAJgEQAKgDALAAQAQAAALAFQALAGAGAKQAGAJAAAJQAAAIgGACQgGADgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgFIAIgGQACgBAEAAQAEAAACACQADACAAADQAAADgDAEQgDAFgFADQgGAEgJADQgIADgMgBQgYAAgPgMgAgPgYQgGAGgCALIAwAAQgBgMgHgFQgGgGgKAAQgJAAgHAGg");
	this.shape_735.setTransform(-156.8,163.2);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#660000").s().p("AgYAsQgLgEgFgGQgFgGAAgGQAAgDAEgDQACgDAGAAQADAAACACIAFAFQAEAGAGADQAFADAKAAQAHAAAFgDQAGgDAAgEQAAgGgGgDQgFgDgLgCQgOgDgIgEQgJgCgGgFQgEgGAAgIQgBgHAFgGQAFgGAKgEQAIgDAOAAQAJAAAIABQAJACAGADQAFAEADADQACAEAAAEQAAAEgCADQgDACgGAAQgFAAgCgCIgHgGIgHgGQgEgCgGAAQgHAAgFADQgFADAAAEQAAADAEADQADACAGACIAQADQAMADAIAEQAHACAFAGQAEAEAAAHQAAAKgGAGQgFAHgLAEQgKADgOAAQgOAAgKgDg");
	this.shape_736.setTransform(-186.2,163.2);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgJAEgJQADgJAHgGQAHgGAJgEQAKgDALAAQAQAAALAFQALAGAGAKQAGAJAAAJQAAAIgGACQgGADgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgFIAIgGQACgBAEAAQAEAAACACQADACAAADQAAADgDAEQgDAFgFADQgGAEgJADQgIADgMgBQgYAAgPgMgAgPgYQgGAGgCALIAwAAQgBgMgHgFQgGgGgKAAQgJAAgHAGg");
	this.shape_737.setTransform(-197.5,163.2);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#660000").s().p("AgxA9QgCgEAAgIIAAhjQAAgHADgEQAEgDAFAAQAGAAAEADQADAEAAAHIAAACQAIgIAIgDQAIgFAJAAQANABAKAFQAKAGAGALQAGAKAAAOQAAALgDAJQgEAIgGAGQgGAHgIADQgIADgKAAQgKAAgIgEQgIgEgHgHIAAAjQAAAOgNAAQgHAAgDgDgAgRgmQgIAHAAAOQAAAOAIAIQAIAHAKAAQAGAAAGgDQAGgDADgHQAEgGAAgKQAAgJgEgGQgDgHgGgEQgFgEgHAAQgKAAgIAJg");
	this.shape_738.setTransform(-217.8,165);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgJAEgJQADgJAHgGQAHgGAJgEQAKgDALAAQAQAAALAFQALAGAGAKQAGAJAAAJQAAAIgGACQgGADgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgFIAIgGQACgBAEAAQAEAAACACQADACAAADQAAADgDAEQgDAFgFADQgGAEgJADQgIADgMgBQgYAAgPgMgAgPgYQgGAGgCALIAwAAQgBgMgHgFQgGgGgKAAQgJAAgHAGg");
	this.shape_739.setTransform(-244,163.2);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#660000").s().p("AgjAjQgOgNgBgVQABgOAGgLQAHgKAMgHQAMgFAPAAQAKAAAJADQAJACAGAEQAGAEADAFQADAFAAAEQAAAEgDADQgEADgFAAQgEAAgCgBIgEgFQgGgHgFgDQgFgDgIAAQgLAAgHAHQgIAJAAANQAAAGACAGQACAFAEAEQADAEAFACQAFACAFAAQAIAAAGgDQAFgDAFgHQACgEADgCQADgDAEABQAFgBAEAEQACADAAAEQAAAEgCAFQgEAFgFAEQgHAFgJADQgJACgMAAQgXAAgOgMg");
	this.shape_740.setTransform(-255.9,163.2);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgJAEgJQADgJAHgGQAHgGAJgEQAKgDALAAQAQAAALAFQALAGAGAKQAGAJAAAJQAAAIgGACQgGADgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgFIAIgGQACgBAEAAQAEAAACACQADACAAADQAAADgDAEQgDAFgFADQgGAEgJADQgIADgMgBQgYAAgPgMgAgPgYQgGAGgCALIAwAAQgBgMgHgFQgGgGgKAAQgJAAgHAGg");
	this.shape_741.setTransform(-276.1,163.2);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#660000").s().p("AgXBQIAEgJIAIgRQAFgKADgOQADgOAAgQQAAgOgDgPQgDgNgFgLIgIgSIgEgIQAAgCAEAAQAHAAAEACQAEADAFAJIAKARQAFAHACAJQADAIACAJQABAIAAAJQAAATgFAQQgGARgMAQQgFAJgEADQgEACgHAAQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_742.setTransform(139,117.7);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#660000").s().p("AgWA9QgJgEgGgFQgGgGgDgGQgDgGAAgEQAAgFADgDQAEgDAFAAQADAAADABQABABAAAAQABABAAAAQAAABABAAQAAAAAAABQAFAMAGAGQAGAFAKAAQAGAAAFgCQAGgDAEgFQADgFAAgHQAAgKgGgGQgHgFgKgBIgFABIgGAAQgGAAgCgCQgDgCAAgEQAAgEADgCQAEgDAHAAIAEAAQAIABAHgFQAGgFAAgJQAAgGgFgFQgFgFgJABQgFAAgEABQgEACgCACQgDACgCAEIgDAHQAAAAgBABQAAAAAAABQgBAAAAAAQgBABgBAAIgFABQgFAAgCgDQgEgDAAgFQAAgEADgFQADgEAGgFQAGgEAJgDQAJgDAKAAQAJAAAIACQAIACAFAFQAGAEADAGQADAFAAAHQAAAIgEAHQgFAGgHAFQAHAEAFAEQAFAEAEAGQACAGAAAGQAAAIgDAHQgEAHgHAGQgHAGgJADQgKADgLAAQgLAAgKgDg");
	this.shape_743.setTransform(129.7,116.1);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#660000").s().p("AgYA8QgDgEgBgHQABgFACgKIAJgXQAGgMAJgOQAHgOANgNIgzAAQgIAAgFgDQgDgCAAgGQAAgFADgDQAFgBAIAAIBAAAQAJAAAEACQAFADAAAGQgBAEgEAFIgMAOQgGAGgGALQgIALgFAOIgDAMIgCALIgDAKQAAAKgEADQgEADgGAAQgGAAgEgDg");
	this.shape_744.setTransform(118.3,116.2);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#660000").s().p("AgaA8QgJgEgFgHQgFgGAAgGQAAgDADgEQADgCAFAAQAEAAAEACQADACACAEQACAFAFAEQAFACAGAAQAFABAFgDQAFgDADgEQAHgJACgXQgHAHgIADQgIADgIAAQgJAAgIgDQgIgDgGgFQgGgGgDgHQgDgHAAgIQAAgJADgIQAEgIAGgGQAHgFAJgEQAJgDALAAQAMAAAJAEQAKAEAHAIQAHAHADAMQAEALAAAPQAAAPgEANQgEAMgHAJQgHAIgKAFQgLAEgLAAQgNAAgKgEgAgSgnQgGAGAAAMQAAALAGAIQAHAFAKAAQAFAAAFgDQAGgBADgGQAEgFAAgHQAAgGgCgFQgCgFgDgDQgEgEgEgCQgFgCgEAAQgJAAgHAHg");
	this.shape_745.setTransform(105.7,116.1);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#660000").s().p("AAMA9QgDgEAAgGIAAhNQgYAQgJAAQgEAAgDgDQgDgDAAgDQAAgFADgBIALgGQAMgFAHgFQAGgGAGgGIAHgJQABgBAFAAQAFAAADADQADAEAAAGIAABhQAAARgNAAQgGAAgEgDg");
	this.shape_746.setTransform(92.8,116.1);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#660000").s().p("AgPAKQgGAAgEgDQgEgDAAgEQAAgEADgDQAFgDAGAAIAfAAQAGAAAEADQAEADAAAEQAAAEgEADQgEADgGAAg");
	this.shape_747.setTransform(84.8,117.7);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#660000").s().p("AgaA8QgJgEgFgHQgFgGAAgGQAAgDADgEQADgCAFAAQAEAAAEACQADACACAEQACAFAFAEQAFACAGAAQAFABAFgDQAFgDADgEQAHgJACgXQgHAHgIADQgIADgIAAQgJAAgIgDQgIgDgGgFQgGgGgDgHQgDgHAAgIQAAgJADgIQAEgIAGgGQAHgFAJgEQAJgDALAAQAMAAAJAEQAKAEAHAIQAHAHADAMQAEALAAAPQAAAPgEANQgEAMgHAJQgHAIgKAFQgLAEgLAAQgNAAgKgEgAgSgnQgGAGAAAMQAAALAGAIQAHAFAKAAQAFAAAFgDQAGgBADgGQAEgFAAgHQAAgGgCgFQgCgFgDgDQgEgEgEgCQgFgCgEAAQgJAAgHAHg");
	this.shape_748.setTransform(75.3,116.1);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#660000").s().p("AgbA7QgLgFgGgJQgGgJAAgKQAAgXAZgIQgUgIAAgSQAAgIAGgHQAEgIALgFQAKgEAOAAQAKAAAJACQAJADAGAFQAGAFADAFQADAGgBAGQABAJgFAGQgFAHgKAEQAIADAGAEQAGAFACAFQADAHAAAHQAAAKgGAJQgGAJgMAFQgLAFgQAAQgPAAgMgFgAgRAJQgGAGAAALQAAAGADAFQAEAFAFADQAFADAGgBQAHABAGgDQAFgDADgFQADgFAAgHQAAgGgDgGQgDgFgGgCQgFgDgHAAQgKAAgHAGgAgOgqQgGAFAAAIQAAAHAGAFQAFAFAJAAQAEAAAEgCQAEAAADgDQACgCABgEQACgDAAgDQAAgFgDgEQgCgEgFgCQgEgDgGAAQgJAAgFAFg");
	this.shape_749.setTransform(63.6,116.1);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#660000").s().p("AgaA7QgMgFgGgJQgGgJAAgKQAAgXAZgIQgUgIAAgSQAAgIAFgHQAGgIAKgFQAKgEAOAAQAKAAAJACQAJADAGAFQAGAFADAFQACAGAAAGQAAAJgEAGQgFAHgKAEQAIADAGAEQAFAFADAFQADAHAAAHQAAAKgGAJQgGAJgLAFQgMAFgQAAQgPAAgLgFgAgQAJQgHAGAAALQAAAGADAFQADAFAGADQAFADAGgBQAHABAFgDQAGgDADgFQADgFAAgHQAAgGgDgGQgDgFgGgCQgGgDgGAAQgJAAgHAGgAgOgqQgGAFAAAIQAAAHAGAFQAGAFAIAAQAFAAADgCQAEAAADgDQADgCAAgEQACgDAAgDQAAgFgCgEQgDgEgFgCQgFgDgFAAQgJAAgFAFg");
	this.shape_750.setTransform(51.7,116.1);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#660000").s().p("AAMA9QgDgEAAgGIAAhNQgYAQgJAAQgEAAgDgDQgDgDAAgDQAAgFADgBIALgGQAMgFAHgFQAGgGAGgGIAHgJQABgBAFAAQAFAAADADQADAEAAAGIAABhQAAARgNAAQgGAAgEgDg");
	this.shape_751.setTransform(38.7,116.1);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#660000").s().p("AANBRQgDgBgEgCIgHgKQgHgLgFgLQgFgKgCgLQgDgMAAgNQAAgLACgMQADgLAFgLQAFgLAHgLIAHgJQAEgEADAAIAHgBQAEAAAAACIgEAJIgIASQgEAKgEANQgEAPAAAOQAAAQAEAOQAEANAEAKIAIASIAEAJQAAACgEAAIgHgBg");
	this.shape_752.setTransform(30.5,117.7);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#660000").s().p("AgZAsQgKgEgFgGQgFgGAAgGQAAgDADgDQAEgDAEAAQAFAAABACIAFAFQAEAGAGADQAGADAIAAQAIAAAGgDQAEgDAAgEQAAgGgEgDQgGgDgLgCQgOgDgJgEQgIgCgFgFQgGgGAAgIQABgHAEgGQAFgGAJgEQAJgDAOAAQAJAAAJABQAIACAFADQAGAEACADQAEAEAAAEQAAAEgEADQgCACgHAAQgEAAgCgCIgHgGIgHgGQgEgCgGAAQgIAAgEADQgFADAAAEQAAADADADQAEACAGACIAPADQANADAIAEQAIACAEAGQAEAEAAAHQAAAKgFAGQgGAHgKAEQgLADgOAAQgPAAgKgDg");
	this.shape_753.setTransform(16.4,117.7);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#660000").s().p("AgkAjQgOgNAAgWQAAgKAEgIQADgJAHgHQAHgGAJgDQAKgDALgBQAQAAALAHQALAFAGAJQAGAJAAAKQAAAHgGAEQgGACgKAAIg0AAQAAAIAEAGQAEAGAGADQAFADAHAAIAIgBIAIgDIAHgEIAIgHQACgBAEgBQAEAAACACQADACAAAEQAAAEgDAEQgDADgFAFQgGAEgJACQgIADgMAAQgYAAgPgNgAgPgYQgGAGgCALIAwAAQgBgLgHgGQgGgGgKAAQgJAAgHAGg");
	this.shape_754.setTransform(5,117.7);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#660000").s().p("AAZAsQgEgEAAgHIAAgmQAAgLgDgGQgFgGgKAAQgGAAgGADQgGAEgDAHQgCAFAAANIAAAdQAAAHgEAEQgEADgFAAQgGAAgEgDQgEgEAAgHIAAhCQAAgHAEgDQADgDAGAAIAHABIAEAEQACADgBAEIAAADQAIgIAIgEQAIgDAKAAQAKAAAJAEQAIAEAFAHQACAEABAFIAAANIAAAqQAAAHgDAEQgDADgGAAQgHAAgDgDg");
	this.shape_755.setTransform(-7,117.7);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#660000").s().p("AgJA8QgHgEgCgGQgCgHAAgLIAAgsIgEAAQgFAAgDgCQgDgCAAgEQAAgEADgCQADgCAGAAIADAAIAAgOIABgJIACgGQABgCADgCQADgBADAAQAFAAADADQADACABAEIABAJIAAAQIAKAAQAFAAAEACQACACAAAEQAAAFgEACQgEABgIAAIgFAAIAAAqIABAJIACAFQACABAEAAIAGAAIAGgBQADAAAEACQACACAAAEQAAAFgHADQgHADgNAAQgMAAgGgDg");
	this.shape_756.setTransform(-21.6,116.1);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#660000").s().p("AgPA/QgJgCgIgEQgHgEgGgGQgGgGgEgHQgEgIgCgIQgCgIAAgKQAAgOAFgMQAFgMAJgIQAKgJAMgEQANgFANAAQASAAAOAGQANAGAHAJQAHAJAAAIQAAAFgDADQgDADgFAAQgGAAgDgCQgDgCgDgGQgGgJgHgFQgIgEgMAAQgQAAgLALQgLAMAAAVQABAPAEAJQAFAKAIAFQAJAFAKAAQANAAAJgGQAIgFAFgLQABgFAEgDQACgDAGAAQAGAAADADQAEADAAAFQAAAGgDAHQgEAHgHAHQgIAHgLAEQgLAEgPAAQgKAAgKgCg");
	this.shape_757.setTransform(-54,116);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#660000").s().p("AgJA9QgDgEAAgHIAAhCQAAgGADgEQAEgDAFAAQAGAAADADQAEAEAAAGIAABCQAAAHgEAEQgDADgGAAQgFAAgEgDgAgIgrQgEgDAAgGQAAgFAEgDQAEgDAEAAQAFAAAEADQAEADAAAFQAAAGgEADQgEADgFAAQgFAAgDgDg");
	this.shape_758.setTransform(-79.6,116);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#660000").s().p("AAaAsQgDgEAAgGIAAgDQgFAGgFADQgGAEgGACQgFABgIAAQgKAAgHgDQgJgEgDgGQgGgHAAgOIAAguQABgHADgDQADgDAGAAQAHAAAEADQADAEAAAGIAAAlQAAAIACAFQABAGAFADQADADAHAAQAGAAAGgDQAGgEADgFQACgFAAgQIAAgdQAAgGAEgEQAEgDAFAAQAGAAAEADQAEADAAAHIAABDQgBAHgDADQgDADgGAAQgFAAgEgDg");
	this.shape_759.setTransform(-88.4,117.7);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#660000").s().p("AgOA9QgEgDAAgHIAAg9IgIAAQgGAAgDgCQgDgDAAgEQAAgIANAAIAHAAIAAgHQAAgLADgGQAEgHAHgDQAHgDANAAQAXAAAAAKQAAAEgDACQgCACgDAAIgGAAIgGgBQgHAAgCAEQgCAEgBAHIAAAFIAIAAQAOAAAAAIQAAAGgEABQgEACgGAAIgIAAIAAA9QAAAHgDADQgEAEgFAAQgFAAgEgEg");
	this.shape_760.setTransform(-128.1,116);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#660000").s().p("AAvBAIgFgDIgEgGIgCgGIgHgQIg6AAIgGAQQgFAJgCAEQgEADgFAAQgGAAgEgEQgFgDAAgFIABgFIAEgHIAlhRIADgIQACgFADgDQACgEAFgCQADgCAGAAQAFAAAFACQAEACACAEIAEAGIAEAKIAmBQQAEAJAAAEQAAAFgDADQgFAEgGAAIgFgBgAgVAOIApAAIgUgzg");
	this.shape_761.setTransform(-169,116);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgKAEQgLAEgNAAQgMAAgKgEgAgOgcQgHAEgDAHQgDAIgBAJQABAKADAHQADAHAHAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgHAAgHADg");
	this.shape_762.setTransform(211,212.7);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgDQAEgEAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEADgGAAQgFAAgEgDg");
	this.shape_763.setTransform(188.9,210.9);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#660000").s().p("AAcAxQgDgDgEgFIgVgbIgUAbIgIAIQgDACgFAAQgFAAgEgDQgEgDAAgEQAAgEAFgHIAbggIgYgbQgFgHAAgEQgBgEAEgDQAEgDAFAAQAFAAAEADIAIAIIARAVIASgVIAIgIQADgDAFAAQAGAAAEADQADADAAAEIgBAFIgFAGIgXAbIAaAgQAGAHAAAEQAAAEgEADQgDADgGAAQgFAAgEgCg");
	this.shape_764.setTransform(180.4,212.7);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#660000").s().p("AAxBAQgDgEAAgHIAAhcIgZBVIgEAMQgCAEgEADQgEADgHAAQgFAAgDgCQgEgCgCgDIgDgHIgDgIIgYhVIAABcQAAAHgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgHIAAhqQAAgIAFgDQAFgDAKAAIAJAAIAMABQAEABADAEIADALIAWBJIAWhJIAFgLQACgEADgBIANgBIAKAAQAIAAAGADQAFADAAAIIAABqQAAAHgEAEQgEAEgHAAQgFAAgFgEg");
	this.shape_765.setTransform(153.2,210.9);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#660000").s().p("AAgAvQgDgDgGgIQgKAHgKAFQgIADgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAIgIQAHgGANgCIANgDIASgEIAQgDQAAgLgEgEQgEgFgMABQgLAAgFACQgGADgDAFIgGAHQgBACgGAAQgFAAgDgDQgEgDAAgEQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAJAAAOIAAAOIgBANQAAAHAEAIIACAKQAAADgEAEQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAGAEAEQAFADAJAAQAHAAAIgDQAGgDAEgFQAEgGgBgNIAAgEIgSAFg");
	this.shape_766.setTransform(132.6,212.7);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgDQAEgEAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEADgGAAQgFAAgEgDg");
	this.shape_767.setTransform(123.4,210.9);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgBgEgBQgHAAgDADQgDAEgDAFIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_768.setTransform(116.4,212.7);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAguIgEAAQgGgBgDgCQgEgDAAgDQAAgEAEgDQADgDAHABIADAAIAAgQIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABAEIAAAJIAAASIALAAQAGgBADADQADADAAAEQAAAFgEACQgFACgIAAIgGAAIAAAsIABAJQAAADACADQACACAFAAIAHgBIAHgBQADAAADADQADACAAAEQAAAFgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_769.setTransform(107.7,211);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#660000").s().p("AAhAvQgFgDgEgIQgLAHgKAFQgIADgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAIgIQAHgGANgCIANgDIASgEIAQgDQAAgLgEgEQgEgFgMABQgLAAgFACQgGADgEAFIgFAHQgBACgGAAQgFAAgDgDQgEgDAAgEQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAJAAAOIAAAOIgBANQABAHADAIIACAKQAAADgEAEQgEADgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAGAFAEQAEADAJAAQAHAAAIgDQAGgDAEgFQAEgGgBgNIAAgEIgSAFg");
	this.shape_770.setTransform(97.6,212.7);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#660000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgHAEgEQAEgDAFgBQAGAAAEAFQAEADAAAHIAAACQAJgIAIgEQAJgEAKAAQANAAALAGQALAGAGALQAHAMAAAQQAAALgDAIQgFAKgGAHQgHAGgIAEQgJADgKAAQgMABgIgFQgIgFgIgHIAAAlQAAAQgOABQgHAAgDgFgAgSgqQgIAJAAAQQAAAPAIAGQAHAJAMAAQAHAAAGgDQAGgEADgGQAEgIAAgKQAAgKgDgHQgDgHgHgEQgGgDgHgBQgLABgIAHg");
	this.shape_771.setTransform(84.8,214.5);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgDIgLAKQgFAEgHACQgGABgIABQgLgBgIgDQgIgEgEgHQgGgHAAgPIAAgxQAAgIAEgDQAEgEAGAAQAGAAAFAEQADADAAAIIAAAnQABAJABAFQACAHAFADQADADAIABQAGAAAHgFQAGgDADgHQADgEgBgRIAAgfQAAgIAFgDQAEgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAIgEADQgEAEgFAAQgHAAgDgEg");
	this.shape_772.setTransform(29.8,212.7);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#660000").s().p("AAbAvQgFgEAAgIIAAgoQAAgNgDgGQgFgGgLAAQgHAAgGADQgGAFgEAGQgCAGAAAPIAAAeQAAAIgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgEQAEgDAGAAQAEAAADACIAFAEQACAEAAAEIAAADQAHgJAKgEQAHgEAMAAQALAAAJAEQAJAFAFAHQACAFABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_773.setTransform(17.2,212.7);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgDIgKAKQgHAEgGACQgGABgIABQgLgBgIgDQgIgEgFgHQgFgHAAgPIAAgxQAAgIAEgDQADgEAHAAQAGAAAEAEQAFADAAAIIAAAnQgBAJACAFQACAHAFADQAEADAHABQAHAAAFgFQAHgDADgHQACgEABgRIAAgfQAAgIADgDQAFgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAIgEADQgDAEgHAAQgGAAgDgEg");
	this.shape_774.setTransform(-1.1,212.7);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#660000").s().p("AgbAuQgLgDgFgHQgFgGAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAGQAEAGAHAEQAGACAJAAQAJAAAGgCQAFgEAAgEQAAgHgFgDQgHgDgLgDQgPgDgKgEQgJgCgGgGQgFgGAAgIQAAgIAFgGQAFgHAKgEQALgEAOAAQAJAAAKACQAJACAGADQAFAEAEAEQADAEAAAEQgBAEgDADQgDADgHAAQgEAAgDgDIgHgGQgDgDgFgCQgEgDgGAAQgIAAgGADQgEADAAAEQgBAEAEACIAKAFIARAEQANADAJAEQAIACAEAGQAFAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgPAAgMgFg");
	this.shape_775.setTransform(-13.4,212.7);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgBgEgBQgHAAgDADQgDAEgDAFIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_776.setTransform(-28.6,212.7);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgcQgHAEgDAHQgDAIAAAJQAAAKADAHQADAHAHAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgIAAgGADg");
	this.shape_777.setTransform(-40.4,212.7);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#660000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgHADgEQAFgDAFgBQAGAAAFAFQADADAAAHIAAACQAJgIAIgEQAIgEAKAAQAOAAALAGQALAGAHALQAGAMAAAQQAAALgEAIQgDAKgHAHQgGAGgKAEQgIADgLAAQgKABgJgFQgIgFgIgHIAAAlQAAAQgOABQgHAAgDgFgAgTgqQgIAJAAAQQAAAPAIAGQAJAJAKAAQAIAAAGgDQAGgEAEgGQADgIAAgKQAAgKgDgHQgEgHgFgEQgHgDgIgBQgKABgJAHg");
	this.shape_778.setTransform(-53.4,214.5);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#660000").s().p("AAgAvQgEgDgFgIQgKAHgJAFQgJADgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIAOgDIARgEIARgDQgBgLgEgEQgEgFgNABQgJAAgGACQgFADgEAFIgGAHQgCACgFAAQgFAAgDgDQgEgDAAgEQAAgGAFgHQAGgGALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAJAAAOIAAAOIAAANQAAAHACAIIADAKQAAADgEAEQgFADgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAGAEAEQAFADAIAAQAIAAAHgDQAIgDADgFQADgGABgNIAAgEIgSAFg");
	this.shape_779.setTransform(-72.1,212.7);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJgvQgEgDAAgGQAAgFAEgDQAEgEAFAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEADgGAAQgFAAgEgDg");
	this.shape_780.setTransform(-94,210.9);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#660000").s().p("AgbBCQgMgEgGgGQgGgFAAgGQAAgFADgDQAEgCAFAAQAGgBAFAFIAFAFIAFAEIAHADIAKABQAKAAAGgDQAGgCADgGQACgEABgGIAAgSQgGAJgJAEQgJAEgLAAQgOAAgLgHQgKgGgGgMQgGgKAAgPQAAgLAEgKQADgIAHgGQAGgHAJgDQAIgDAKAAQALAAAJAEQAJAEAIAIIAAgCQAAgHAEgEQADgDAGgBQAIAAADAGQADAEAAAJIAABHQAAANgDAJQgDAJgHAGQgHAFgLADQgKADgQABQgOAAgMgEgAgTgqQgHAJAAAPQAAAPAHAGQAIAJALgBQAHAAAHgDQAGgDAEgGQAEgGAAgKQAAgQgIgIQgIgJgMAAQgLABgIAHg");
	this.shape_781.setTransform(-103.9,214.5);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#660000").s().p("AAgBBQgEgEgFgHQgKAHgJAEQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgIQAAgKAHgHQAIgHANgDIAOgCIARgEIARgEQgBgJgEgEQgEgFgNAAQgJAAgGADQgFACgEAGIgGAGQgCABgFAAQgFAAgDgCQgEgCAAgEQAAgHAFgGQAGgGALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAANIAAAPIAAAOQAAAHACAIIADAJQAAAEgEADQgFAEgFAAQgEAAgFgEgAAEAXIgQADQgFABgEADQgEADAAAGQAAAFAEAEQAFAEAIAAQAIAAAHgDQAIgDADgFQADgGABgNIAAgEIgSAFgAgTgtQAAgBAEgEIAEgIQAEgGAEgCQACgCAGAAIANAAQAGAAAAABIgGAGIgMAKIgHAGQgGADgHAAQgEAAgBgDg");
	this.shape_782.setTransform(-116.6,210.9);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgBgEgBQgHAAgDADQgDAEgDAFIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_783.setTransform(-127,212.7);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAguIgEAAQgGgBgDgCQgEgDAAgDQAAgEAEgDQADgDAHABIADAAIAAgQIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABAEIAAAJIAAASIALAAQAGgBADADQADADAAAEQAAAFgEACQgFACgIAAIgGAAIAAAsIABAJQAAADACADQACACAFAAIAHgBIAHgBQADAAADADQADACAAAEQAAAFgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_784.setTransform(-135.8,211);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#660000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgBgFgEgDQgEgEgHABQgFAAgFACQgFAEgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgEgEQgFgEAAgIIAAgnIgBgPQAAgEgDgEQgEgEgGABQgPAAgEAIQgEAJgBAOIAAAiQAAAIgDAEQgFAEgGAAQgGAAgFgEQgEgEAAgIIAAhHQAAgGAEgEQAEgEAFAAQAHAAADADQAFAEAAAGIAAACQAHgHAJgEQAIgEAKABQALgBAIAEQAGAEAFAHQAIgHAIgEQAIgEAKABQAMAAAIADQAJAEAEAIQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgGAAgFgEg");
	this.shape_785.setTransform(-167.4,212.7);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgBgEgBQgHAAgDADQgDAEgDAFIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_786.setTransform(-180.9,212.7);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgcQgHAEgDAHQgEAIABAJQgBAKAEAHQADAHAHAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgHAAgHADg");
	this.shape_787.setTransform(-192.7,212.7);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#660000").s().p("AgPBBQgEgDAAgIIAAhBIgIAAQgHAAgDgDQgEgCAAgEQAAgJAPAAIAHAAIAAgHQAAgNADgGQADgHAJgEQAHgDAOAAQAZAAAAALQAAADgDADQgCADgEgBIgGAAIgHgBQgHABgDADQgCAFAAAHIAAAGIAHAAQARAAAAAIQAAAHgFABQgEACgIAAIgHAAIAABBQAAAIgEADQgEAEgFAAQgGAAgEgEg");
	this.shape_788.setTransform(-202.2,210.8);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgCQgFAGgGADQgGADgHACQgFACgHAAQgLAAgIgEQgJgEgHgGQgGgIgDgJQgEgKAAgKQAAgXAOgNQAMgNAWAAQALAAAIAEQAJAEAIAHIAAglQAAgHADgFQAEgEAGAAQAHABADADQAEAEAAAHIAABtQAAAHgEADQgDAEgHAAQgFAAgEgEgAgNgIQgHADgDAHQgDAGAAALQAAAKADAHQAEAHAGAEQAHADAGAAQAIAAAGgDQAGgEAEgHQAEgHAAgKQAAgKgEgIQgEgGgGgEQgGgDgIgBQgHAAgGAFg");
	this.shape_789.setTransform(-231.2,210.8);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_790.setTransform(283.7,188.5);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDACQgDADgDAGIgDANIgBATIAAAVQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_791.setTransform(273.8,188.5);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_792.setTransform(262.2,188.5);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#660000").s().p("AAcAvQgEgEAAgHIAAgCIgKAJQgHAEgGACQgGACgJAAQgKAAgIgEQgIgEgEgHQgGgHAAgQIAAgwQAAgIAEgDQAEgEAGAAQAHAAADAEQAEADABAIIAAAnQAAAJABAFQACAGAEAEQAFADAHAAQAHAAAFgDQAHgEADgGQADgFAAgSIAAgeQAAgIAEgDQADgEAHAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgDAEgHAAQgFAAgEgEg");
	this.shape_793.setTransform(249.4,188.5);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#660000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgCgEgDgEQgDgEgIAAQgFABgFADQgFACgDAGQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgGAAgEgEQgDgEAAgIIAAgnIgCgOQAAgFgDgEQgEgEgGAAQgOAAgFAJQgFAJAAAOIAAAiQAAAIgDAEQgEAEgHAAQgGAAgEgEQgFgEAAgIIAAhGQAAgIAEgDQADgEAHAAQAFAAAFAEQADADAAAGIAAACQAIgIAJgDQAIgEAKAAQALAAAIAEQAHAEAEAHQAIgHAIgEQAIgEAKAAQAMAAAIAFQAJADAEAIQAEAGAAAPIAAAwQAAAIgEAEQgEAEgHAAQgGAAgFgEg");
	this.shape_794.setTransform(233.7,188.5);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#660000").s().p("AgOAaQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgEAFgBQALgHAAgJQgGAAgFgCQgFgEAAgGQAAgGAFgFQAFgEAGABQAFAAAEACQAEACACAFQACAFAAAGQAAAJgEAHQgEAJgHAEQgFAEgFAAQgEABgCgCg");
	this.shape_795.setTransform(215.5,193.6);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#660000").s().p("AgbAuQgKgEgGgGQgFgGAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAFQAEAHAHADQAGAEAKAAQAIAAAFgEQAGgDAAgEQAAgHgGgDQgFgDgNgDQgOgDgKgEQgJgCgFgGQgGgFAAgJQAAgIAFgGQAGgHAJgEQAKgEAOAAQALAAAIACQAKACAFADQAGAEAEAEQACAEAAAEQABAFgEACQgEADgFAAQgEAAgEgCIgHgHQgDgEgFgCQgEgCgHAAQgHAAgFADQgGADAAAEQABAEADADIALAEIAQAEQANADAJAEQAIADAEAFQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgLgFg");
	this.shape_796.setTransform(207,188.5);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#660000").s().p("AgWAvQgLgEgHgHQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALADAHAIQAIAGAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgbQgHADgDAHQgDAIgBAJQABAKADAHQADAIAHADQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgPgHgIQgIgJgNAAQgHAAgHAFg");
	this.shape_797.setTransform(194.8,188.5);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#660000").s().p("AAaAvQgEgEABgHIAAgpQgBgNgDgGQgFgHgLAAQgHABgGAEQgHAEgDAGQgCAGABAOIAAAgQgBAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgDQAEgEAGAAQAEAAADABIAFAGQACACAAAFIAAADQAIgJAJgDQAHgFAMAAQALAAAJAFQAJAEAFAHQACAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_798.setTransform(181.8,188.5);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#660000").s().p("AAhAvQgEgEgFgHQgLAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgIQAAgJAHgIQAIgGANgDIAOgCIARgDIARgFQgBgJgEgFQgEgEgNgBQgJABgGACQgFACgFAGIgFAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAJQAAAFgEACQgFAEgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAFAEQAFAFAHAAQAIgBAHgDQAIgDADgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_799.setTransform(169,188.5);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#660000").s().p("AAcAwQgDgCgEgGIgVgaIgUAaIgIAIQgDADgFAAQgGAAgDgDQgEgDAAgEQAAgEAFgIIAbgeIgYgbQgFgHAAgGQgBgDAEgDQAEgDAFAAQAFAAAEADIAIAHIARAXIASgXIAIgHQADgDAFAAQAGAAAEADQADADAAADIgBAGIgFAHIgXAbIAaAeQAGAJAAADQAAAEgEADQgEADgFAAQgFAAgEgDg");
	this.shape_800.setTransform(138.7,188.5);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_801.setTransform(127,188.5);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#660000").s().p("AA5AvQgFgEAAgIIAAgpIgBgNQgBgEgDgEQgEgEgGAAQgGABgFADQgFACgDAGQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgFgEQgDgEAAgIIAAgnIgBgOQgBgFgDgEQgDgEgIAAQgOAAgEAJQgFAJABAOIAAAiQAAAIgFAEQgEAEgGAAQgHAAgDgEQgFgEAAgIIAAhGQAAgIAEgDQAEgEAGAAQAFAAAEAEQAEADAAAGIAAACQAIgIAIgDQAJgEAKAAQALAAAHAEQAHAEAGAHQAGgHAJgEQAJgEAKAAQALAAAJAFQAIADAEAIQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_802.setTransform(111.2,188.5);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDACQgDADgDAGIgDANIgBATIAAAVQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_803.setTransform(92.3,188.5);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#660000").s().p("AgWAvQgLgEgHgHQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALADAHAIQAIAGAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgbQgHADgDAHQgDAIgBAJQABAKADAHQADAIAHADQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgPgHgIQgIgJgNAAQgHAAgHAFg");
	this.shape_804.setTransform(80.5,188.5);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#660000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgIAEgDQADgEAHABQAGAAAEADQADAEAAAGIAAAEQAIgJAJgEQAJgEAJAAQAOAAALAGQALAGAGALQAHAMAAAPQAAAMgEAJQgEAJgGAHQgHAGgJAEQgIADgLAAQgLAAgIgEQgJgEgHgJIAAAmQAAAQgNAAQgJABgCgFgAgTgpQgHAHgBAQQABAQAHAHQAJAIALAAQAHAAAGgDQAGgFADgGQAEgGAAgLQAAgKgDgHQgEgHgGgEQgGgDgHAAQgLgBgJAJg");
	this.shape_805.setTransform(67.5,190.4);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#660000").s().p("AgXAvQgKgEgIgHQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALADAHAIQAIAGAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgbQgGADgEAHQgEAIAAAJQAAAKAEAHQAEAIAGADQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgPgHgIQgIgJgNAAQgIAAgGAFg");
	this.shape_806.setTransform(48.7,188.5);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgGAHgFADQgGAEgGACQgGABgIAAQgKAAgJgDQgJgFgGgHQgGgGgEgKQgDgKAAgLQAAgWANgNQAOgNAUAAQAMAAAIADQAJAFAIAHIAAglQAAgIAEgEQADgDAHAAQAGgBAEAEQADADAAAIIAABtQAAAHgDAEQgEADgGAAQgGAAgEgDgAgNgJQgGAEgEAHQgDAHAAAJQAAALADAGQAEAHAHAFQAFADAHAAQAIAAAGgDQAGgEAEgHQADgHAAgLQAAgJgDgIQgEgGgGgEQgGgDgIAAQgHAAgGADg");
	this.shape_807.setTransform(35.2,186.7);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_808.setTransform(4,188.5);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDACQgDADgDAGIgDANIgBATIAAAVQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_809.setTransform(-5.9,188.5);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#660000").s().p("AgPBCQgEgFAAgHIAAhBIgIAAQgHAAgDgCQgEgDAAgEQAAgJAPAAIAHAAIAAgIQAAgMADgGQADgHAJgDQAHgDAOAAQAZAAAAAKQAAAEgDACQgCACgEABIgGgBIgHAAQgHAAgDADQgCAEAAAIIAAAGIAHAAQARAAAAAJQAAAFgFADQgEABgIAAIgHAAIAABBQAAAHgEAFQgEADgFAAQgGAAgEgDg");
	this.shape_810.setTransform(-14.4,186.7);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#660000").s().p("AgWAvQgLgEgHgHQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALADAHAIQAIAGAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgbQgHADgDAHQgDAIgBAJQABAKADAHQADAIAHADQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgPgHgIQgIgJgNAAQgHAAgHAFg");
	this.shape_811.setTransform(-24.8,188.5);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#660000").s().p("AgbAuQgLgEgFgGQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAFQAFAHAGADQAGAEAJAAQAJAAAGgEQAFgDAAgEQAAgHgFgDQgHgDgLgDQgPgDgKgEQgJgCgGgGQgFgFAAgJQAAgIAFgGQAFgHAKgEQALgEAOAAQAJAAAJACQAJACAHADQAFAEAEAEQACAEAAAEQAAAFgDACQgDADgGAAQgFAAgDgCIgHgHQgDgEgFgCQgEgCgGAAQgIAAgGADQgEADAAAEQgBAEAEADIAKAEIARAEQAOADAIAEQAIADAEAFQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgOAAgMgFg");
	this.shape_812.setTransform(-42.6,188.5);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_813.setTransform(-54.7,188.5);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#660000").s().p("AAgAvQgDgEgGgHQgKAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgIQAAgJAHgIQAIgGANgDIANgCIASgDIAQgFQAAgJgEgFQgEgEgMgBQgKABgGACQgGACgDAGIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAGgFQAFgHALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHAEAIIACAJQAAAFgEACQgEAEgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAGAFAIAAQAHgBAIgDQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_814.setTransform(-78.5,188.5);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#660000").s().p("AAcAvQgEgEAAgHIAAgCIgLAJQgFAEgHACQgGACgIAAQgLAAgIgEQgIgEgFgHQgFgHAAgQIAAgwQAAgIAEgDQADgEAHAAQAGAAAFAEQADADAAAIIAAAnQABAJABAFQACAGAFAEQADADAIAAQAGAAAHgDQAGgEADgGQACgFAAgSIAAgeQAAgIAEgDQAFgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgFAAQgHAAgDgEg");
	this.shape_815.setTransform(-91.3,188.5);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_816.setTransform(-127.9,188.5);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#660000").s().p("AgXAvQgKgEgIgHQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALADAHAIQAIAGAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgbQgGADgEAHQgEAIAAAJQAAAKAEAHQAEAIAGADQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgPgHgIQgIgJgNAAQgIAAgGAFg");
	this.shape_817.setTransform(-146.1,188.5);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#660000").s().p("AAdAwQgEgCgEgGIgVgaIgUAaIgIAIQgDADgFAAQgFAAgEgDQgEgDAAgEQAAgEAGgIIAageIgYgbQgFgHgBgGQAAgDAEgDQAEgDAGAAQAEAAAEADIAIAHIARAXIASgXIAIgHQADgDAFAAQAGAAAEADQADADAAADIgBAGIgFAHIgXAbIAaAeQAGAJAAADQAAAEgDADQgEADgGAAQgFAAgDgDg");
	this.shape_818.setTransform(-176.6,188.5);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#660000").s().p("AgmA3QgPgOAAgXQAAgMADgIQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAJQAAAJgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEAAADACQADACAAAEQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgIQgHAGgBAMIAzAAQgBgMgHgGQgHgHgLAAQgKAAgHAHgAgTgtQAAgBADgEIAFgIQAEgGADgCQADgCAFAAIAOAAQAGAAAAABIgGAGIgMAKIgHAGQgGADgHAAQgFAAAAgDg");
	this.shape_819.setTransform(-188.5,186.7);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#660000").s().p("AAxBAQgDgEAAgHIAAhcIgZBVIgEAMQgBAEgEADQgFADgHAAQgEAAgEgCQgEgCgCgDIgEgHIgCgIIgZhVIAABcQAAAHgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgHIAAhqQAAgIAFgDQAGgDAIAAIAKAAIANABQADABADAEIADALIAWBJIAWhJIAEgLQADgEADgBIANgBIAKAAQAIAAAGADQAFADAAAIIAABqQAAAHgEAEQgEAEgHAAQgFAAgFgEg");
	this.shape_820.setTransform(-203.8,186.8);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_821.setTransform(-224.4,188.5);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgFAHgGADQgGAEgHACQgFABgHAAQgLAAgIgDQgJgFgHgHQgGgGgDgKQgEgKAAgLQAAgWANgNQANgNAWAAQALAAAIADQAJAFAIAHIAAglQAAgIADgEQAEgDAGAAQAHgBAEAEQADADAAAIIAABtQAAAHgDAEQgFADgGAAQgFAAgEgDgAgNgJQgHAEgDAHQgDAHAAAJQAAALADAGQAEAHAGAFQAHADAGAAQAHAAAHgDQAGgEAEgHQADgHABgLQgBgJgDgIQgEgGgGgEQgHgDgHAAQgHAAgGADg");
	this.shape_822.setTransform(-237.8,186.7);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#660000").s().p("AgXAvQgKgEgIgHQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgbQgHADgDAHQgEAIABAJQgBAKAEAHQADAIAHADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgIAAgGAFg");
	this.shape_823.setTransform(-256.1,188.5);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#660000").s().p("AAaAvQgDgEAAgHIAAgpQgBgNgEgGQgDgHgMAAQgHABgGAEQgGAEgDAGQgCAGAAAOIAAAgQgBAHgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAEAAADABIAFAGQACACAAAFIAAADQAIgJAIgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_824.setTransform(-269,188.5);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#660000").s().p("AgWAvQgLgEgHgHQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgbQgGADgEAHQgDAIgBAJQABAKADAHQAEAIAGADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgIAAgGAFg");
	this.shape_825.setTransform(-282,188.5);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDACQgDADgDAGIgDANIgBATIAAAVQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_826.setTransform(-291.7,188.5);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgvIgEAAQgGAAgDgDQgEgCAAgEQAAgEAEgDQADgCAHAAIADAAIAAgPIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGAAADACQADADAAAEQAAAEgEACQgFACgIABIgGAAIAAAtIABAJQAAADACABQACACAFAAIAHgBIAHAAQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_827.setTransform(-300.5,186.8);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDACQgDADgDAGIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_828.setTransform(257,164.3);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#660000").s().p("AAgAvQgEgDgFgIQgKAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgDIARgFQgBgJgEgFQgEgFgMAAQgKAAgGADQgFADgEAFIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAGgGQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHADAIIADAKQAAADgEADQgFAEgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAEAEQAFAFAJAAQAHgBAHgDQAIgDADgFQADgGABgNIAAgEIgSAFg");
	this.shape_829.setTransform(245.3,164.3);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#660000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgBgEgEgEQgEgDgHAAQgFAAgFADQgFACgDAGQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgEgEQgFgEAAgIIAAgnIgBgOQAAgFgDgEQgEgDgGAAQgPgBgEAJQgEAJgBAOIAAAiQAAAIgDAEQgFAEgGAAQgGAAgFgEQgEgEAAgIIAAhHQAAgGAEgEQAEgEAFAAQAHAAADAEQAFADAAAGIAAACQAHgHAJgEQAIgEAKAAQALAAAIAEQAGAEAFAHQAIgHAIgEQAIgEALAAQALABAIAEQAJADAEAIQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgGAAgFgEg");
	this.shape_830.setTransform(229.5,164.3);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAKQAEAIAAALQAAALgEAJQgEAKgIAHQgHAHgLADQgKAEgNAAQgMAAgLgEgAgOgbQgGAEgEAGQgDAIAAAJQAAAKADAHQAEAIAGADQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgPgHgIQgIgJgNAAQgHABgHAEg");
	this.shape_831.setTransform(213.5,164.3);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgvIgEAAQgGAAgDgDQgEgCAAgEQAAgEAEgDQADgCAHAAIADAAIAAgQIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGAAADACQADADAAAEQAAAEgEACQgFADgIAAIgGAAIAAAtIABAJQAAACACACQACACAFABIAHgCIAHAAQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_832.setTransform(203.6,162.6);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgFAHgGADQgGADgHACQgFACgHAAQgLAAgIgDQgJgFgHgGQgGgIgDgJQgEgJAAgMQAAgWANgNQANgNAWAAQALAAAIADQAJAFAIAHIAAglQAAgHADgFQAEgDAGAAQAHgBAEAEQADADAAAIIAABtQAAAHgDAEQgFADgGAAQgFAAgEgDgAgNgJQgHAEgDAHQgDAGAAALQAAAJADAHQAEAHAGAFQAHADAGAAQAHAAAHgDQAGgEAEgHQADgHABgKQgBgKgDgIQgEgGgGgEQgHgDgHgBQgHAAgGAEg");
	this.shape_833.setTransform(174.4,162.5);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgHAEgEQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_834.setTransform(165.1,162.5);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgFAHgGADQgGADgHACQgFACgHAAQgLAAgIgDQgJgFgHgGQgGgIgDgJQgEgJAAgMQAAgWAOgNQAMgNAWAAQALAAAIADQAJAFAIAHIAAglQAAgHADgFQAEgDAGAAQAHgBAEAEQADADAAAIIAABtQAAAHgDAEQgFADgGAAQgFAAgEgDgAgNgJQgHAEgDAHQgDAGAAALQAAAJADAHQAEAHAGAFQAHADAGAAQAHAAAHgDQAGgEAEgHQADgHABgKQgBgKgDgIQgEgGgGgEQgHgDgHgBQgHAAgGAEg");
	this.shape_835.setTransform(129.8,162.5);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDACQgDADgDAGIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_836.setTransform(114,164.3);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAKQAEAIAAALQAAALgEAJQgEAKgHAHQgIAHgKADQgLAEgNAAQgMAAgLgEgAgOgbQgHAEgDAGQgDAIAAAJQAAAKADAHQADAIAHADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgIABgGAEg");
	this.shape_837.setTransform(102.2,164.3);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgGAHgFADQgGADgHACQgFACgHAAQgLAAgJgDQgIgFgHgGQgGgIgDgJQgEgJAAgMQAAgWAOgNQANgNAVAAQALAAAJADQAIAFAIAHIAAglQAAgHADgFQAEgDAGAAQAHgBADAEQAEADAAAIIAABtQAAAHgEAEQgDADgHAAQgFAAgEgDgAgNgJQgGAEgDAHQgEAGAAALQAAAJAEAHQADAHAGAFQAGADAHAAQAIAAAGgDQAGgEAEgHQAEgHAAgKQAAgKgEgIQgEgGgGgEQgGgDgIgBQgHAAgGAEg");
	this.shape_838.setTransform(88.7,162.5);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDACQgDADgDAGIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_839.setTransform(66.1,164.3);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#660000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgIAEgDQAEgDAFAAQAGAAAEADQAEAEAAAGIAAAEQAJgJAIgEQAJgEAKAAQANAAALAGQALAGAGALQAHALAAARQAAALgDAJQgFAJgGAHQgHAGgIAEQgJAEgKgBQgMABgIgFQgIgEgIgJIAAAmQAAAQgOAAQgHABgDgFgAgSgpQgIAHAAARQAAAPAIAGQAHAJAMAAQAHAAAGgDQAGgFADgGQAEgGAAgLQAAgKgDgHQgDgHgHgEQgGgDgHgBQgLAAgIAJg");
	this.shape_840.setTransform(41.6,166.2);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#660000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgBgEgEgEQgEgDgHAAQgFAAgFADQgFACgDAGQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgEgEQgFgEAAgIIAAgnIgBgOQAAgFgDgEQgEgDgGAAQgPgBgEAJQgEAJgBAOIAAAiQAAAIgDAEQgFAEgGAAQgGAAgFgEQgEgEAAgIIAAhHQAAgGAEgEQAEgEAFAAQAHAAADAEQAFADAAAGIAAACQAHgHAJgEQAIgEAKAAQALAAAIAEQAGAEAFAHQAIgHAIgEQAIgEAKAAQAMABAIAEQAJADAEAIQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgGAAgFgEg");
	this.shape_841.setTransform(25.2,164.3);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#660000").s().p("AgbAuQgLgDgFgHQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAFQAFAHAGAEQAGADAJAAQAJAAAFgDQAGgEAAgEQAAgHgGgDQgFgDgMgDQgPgDgKgEQgJgCgFgGQgGgGAAgIQAAgHAFgHQAFgHAKgEQALgEAOAAQAJAAAJACQAJACAHADQAFAEAEAEQACAEAAAEQAAAFgDACQgEADgFAAQgEAAgEgCIgHgHQgDgDgFgDQgEgCgGAAQgJAAgFADQgEADAAAEQAAAEADACIAKAFIARAEQAOADAIAEQAIADAEAFQAFAFAAAHQAAAKgGAIQgFAHgMAEQgLAEgQAAQgOAAgMgFg");
	this.shape_842.setTransform(-26.3,164.3);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_843.setTransform(-38.4,164.3);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#660000").s().p("AAbAvQgFgEAAgIIAAgoQAAgNgDgGQgFgHgLABQgHAAgGAEQgGAEgEAGQgCAGAAAPIAAAeQAAAIgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgDQAEgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAHgJAKgDQAHgFAMAAQALAAAJAFQAJAEAFAHQACAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_844.setTransform(-51.2,164.3);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgHAEgEQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_845.setTransform(-73.5,162.5);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#660000").s().p("AAgAvQgEgDgFgIQgKAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgDIARgFQgBgJgEgFQgEgFgMAAQgKAAgGADQgFADgEAFIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAGgGQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHADAIIADAKQAAADgEADQgFAEgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAEAEQAFAFAJAAQAHgBAHgDQAIgDADgFQADgGABgNIAAgEIgSAFg");
	this.shape_846.setTransform(-95.4,164.3);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDACQgDADgDAGIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_847.setTransform(-105.3,164.3);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgHAEgEQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_848.setTransform(-113.5,162.5);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#660000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgIADgDQAEgDAGAAQAHAAADADQAEAEAAAGIAAAEQAIgJAJgEQAJgEAKAAQANAAALAGQALAGAGALQAHALAAARQAAALgDAJQgFAJgGAHQgGAGgJAEQgJAEgKgBQgLABgJgFQgJgEgHgJIAAAmQAAAQgOAAQgHABgDgFgAgSgpQgJAHABARQgBAPAJAGQAHAJALAAQAIAAAGgDQAGgFAEgGQADgGAAgLQAAgKgDgHQgDgHgGgEQgHgDgIgBQgKAAgIAJg");
	this.shape_849.setTransform(-122.9,166.2);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#660000").s().p("AgbAuQgLgDgFgHQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAFQAFAHAGAEQAGADAJAAQAJAAAGgDQAFgEAAgEQAAgHgFgDQgHgDgLgDQgPgDgKgEQgJgCgGgGQgFgGAAgIQAAgHAFgHQAFgHAKgEQALgEAOAAQAJAAAJACQAJACAHADQAFAEAEAEQACAEAAAEQAAAFgDACQgDADgGAAQgFAAgDgCIgHgHQgDgDgFgDQgEgCgGAAQgIAAgGADQgEADAAAEQgBAEAEACIAKAFIARAEQAOADAIAEQAIADAEAFQAFAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgOAAgMgFg");
	this.shape_850.setTransform(-135.7,164.3);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#660000").s().p("AAaAvQgDgEAAgIIAAgoQgBgNgEgGQgDgHgMABQgHAAgGAEQgGAEgDAGQgCAGAAAPIAAAeQgBAIgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgDQADgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAIgJAIgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_851.setTransform(-166,164.3);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAKQAEAIAAALQAAALgEAJQgEAKgHAHQgIAHgKADQgLAEgNAAQgMAAgKgEgAgOgbQgGAEgEAGQgDAIgBAJQABAKADAHQAEAIAGADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgIABgGAEg");
	this.shape_852.setTransform(-178.9,164.3);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#660000").s().p("AgmAlQgPgNAAgXQAAgOAHgMQAHgMAMgGQANgHARAAQALAAAKADQAJADAGAEQAHAFADAFQAEAFAAAEQAAAFgEADQgEADgFAAQgEAAgCgBIgGgGQgFgHgGgDQgFgEgJAAQgMAAgIAJQgHAJAAAOQAAAHACAGQACAGADAEQAEAEAGACQAFACAFAAQAJAAAGgDQAGgEAFgHQACgEAEgCQADgDAEAAQAFAAAEAEQADADAAAEQAAAFgDAFQgDAFgHAFQgGAFgKADQgKADgNAAQgZAAgPgOg");
	this.shape_853.setTransform(-191.8,164.3);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAKQAEAIAAALQAAALgEAJQgEAKgIAHQgHAHgLADQgKAEgNAAQgMAAgLgEgAgOgbQgGAEgEAGQgDAIAAAJQAAAKADAHQAEAIAGADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgHABgHAEg");
	this.shape_854.setTransform(-209.9,164.3);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#660000").s().p("AAbAvQgFgEAAgIIAAgoQAAgNgDgGQgEgHgMABQgHAAgGAEQgGAEgDAGQgDAGAAAPIAAAeQAAAIgDAEQgEAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgDQADgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAHgJAJgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_855.setTransform(-222.9,164.3);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#660000").s().p("AAgAvQgDgDgGgIQgKAIgKADQgIAEgMAAQgLAAgJgEQgIgEgFgHQgEgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgDIAQgFQAAgJgEgFQgEgFgMAAQgKAAgGADQgFADgEAFIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAGgGQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHADAIIADAKQAAADgEADQgFAEgFAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAGAFAIAAQAHgBAHgDQAIgDADgFQADgGAAgNIAAgEIgSAFg");
	this.shape_856.setTransform(-235.7,164.3);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgBQgGgCgEAAQgHAAgDACQgDADgDAGIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_857.setTransform(-265,164.3);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGADQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_858.setTransform(-276.7,164.3);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#660000").s().p("AAmBBQgEgEAAgJIAAgtIhDAAIAAAtQAAAJgEAEQgEAFgHgBQgHABgFgFQgEgEAAgJIAAhoQAAgIAEgFQAFgDAHAAQAHAAAEADQAEAFAAAIIAAAnIBDAAIAAgnQAAgIAEgFQAEgDAHAAQAHAAAEADQAFAFAAAIIAABoQAAAJgFAEQgEAFgHgBQgHABgEgFg");
	this.shape_859.setTransform(-291.2,162.5);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#660000").s().p("AgXBQIAEgIIAIgSQAFgKADgPQADgOAAgPQAAgOgDgOQgDgOgFgKIgIgSIgEgIQAAgDAEAAQAHAAAEADQAEABAFAKIAKAQQAFAJACAIQADAIACAJQABAJAAAIQAAATgFAQQgGAQgMARQgFAKgEACQgEACgHAAQgBAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_860.setTransform(47,140.7);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#660000").s().p("AgYA7QgEgDABgHQAAgFACgKIAJgWQAGgMAJgOQAIgPAMgNIg0AAQgHAAgEgCQgFgDAAgFQAAgHAFgBQAEgCAHAAIBBAAQAJAAAFADQADACAAAGQABAEgFAGIgLAMQgHAIgHAKQgGALgGAOIgDALIgDAMIgBALQgBAJgEADQgEADgGAAQgGAAgEgEg");
	this.shape_861.setTransform(38.1,139.2);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#660000").s().p("AgaA5QgLgHgHgNQgGgOAAgUQAAgQAEgMQAEgNAHgIQAHgIAKgFQAKgEAMAAQANAAAJAEQAKAFAFAGQAEAGAAAGQAAADgDADQgDADgEAAQgEAAgEgCQgDgDgCgEQgCgEgFgDQgFgEgHAAQgEABgFACQgFACgEAFQgHAJgBAXQAHgHAIgDQAHgEAJAAQAJAAAIAEQAIACAGAHQAGAFADAGQADAIAAAJQAAAMgGAJQgGAKgMAFQgLAGgOAAQgQAAgMgHgAgIAAQgGACgDAGQgEAFAAAIQAAALAHAIQAHAHAJABQAKAAAHgIQAGgHAAgLQAAgIgDgGQgDgFgFgDQgFgCgHAAQgFAAgFACg");
	this.shape_862.setTransform(25.8,139.1);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#660000").s().p("AgbA7QgLgFgGgIQgGgJAAgLQAAgXAZgHQgUgJAAgSQAAgIAGgIQAEgHALgEQAKgFAOAAQALAAAJADQAIACAGAFQAGAEADAHQACAFAAAGQABAJgFAHQgFAGgKAFQAIACAGAEQAGAFACAGQADAFAAAIQAAALgGAJQgGAIgMAFQgLAFgQAAQgPAAgMgFgAgRAJQgGAGAAAKQAAAHADAFQAEAFAEADQAGACAGABQAHgBAGgCQAFgDADgFQADgFAAgHQAAgHgDgFQgDgEgGgDQgFgDgHAAQgJAAgIAGgAgOgqQgGAFAAAIQAAAHAGAFQAGAFAIAAQAFAAADgBQAEgCADgCQACgCABgDQACgDAAgEQAAgFgDgEQgCgEgEgDQgGgCgFAAQgIAAgGAFg");
	this.shape_863.setTransform(13.9,139.1);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#660000").s().p("AAMA8QgDgDAAgHIAAhNQgYARgJAAQgEAAgDgDQgDgCAAgFQAAgDADgCIALgGQAMgFAHgFQAGgFAGgIIAHgHQABgCAFAAQAFAAADAEQADADAAAGIAABhQAAARgNAAQgGAAgEgEg");
	this.shape_864.setTransform(0.8,139.1);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#660000").s().p("AgPALQgGAAgEgDQgEgEAAgEQAAgEADgDQAFgCAGAAIAfAAQAHAAAEACQADADAAAEQAAAEgDAEQgEADgHAAg");
	this.shape_865.setTransform(-7.2,140.7);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#660000").s().p("AgiA/QgHAAgEgEQgEgDAAgFQAAgDACgFIAGgIIAYgUIAPgLIAMgJQAFgFADgFQADgGAAgFQAAgGgDgEQgDgEgFgCQgFgDgFAAQgNAAgIAKIgDAHIgFAJQgDADgFAAQgFAAgEgDQgDgDAAgFQAAgFADgHQADgGAGgFQAGgGAKgDQAJgDAMAAQAOAAALAEQAHADAFAFQAFAEADAHQADAGAAAGQAAALgGAJQgGAIgHAFIgVAPQgNAKgGAHIgFAFIAzAAQAHAAAEACQAEADAAAFQAAAEgDADQgDADgHAAg");
	this.shape_866.setTransform(-16.4,139);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#660000").s().p("AgWA8QgJgDgGgGQgGgFgDgGQgDgGAAgEQAAgFADgDQAEgDAFAAQAEAAACACQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAGAMAFAFQAGAHAKAAQAGAAAFgEQAGgCAEgFQADgFAAgHQAAgKgGgFQgHgHgKABIgFAAIgGAAQgGAAgCgCQgDgCAAgEQAAgDADgDQAEgCAHgBIAEAAQAIAAAHgEQAGgFAAgJQAAgGgFgFQgGgEgIgBQgFABgEABQgEABgCADQgCACgDAEIgDAHQAAABgBAAQAAAAAAABQgBAAAAAAQgBABgBAAIgFABQgFAAgCgDQgEgCAAgFQAAgFADgEQADgGAGgEQAGgEAJgDQAJgDAKAAQAJAAAIADQAIACAFAEQAGAEADAGQADAFAAAHQAAAJgEAFQgEAHgJAGQAIADAGAEQAFAFADAFQACAGAAAGQAAAIgDAHQgEAHgHAGQgHAGgJADQgKADgLAAQgMAAgJgEg");
	this.shape_867.setTransform(-28.3,139.1);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#660000").s().p("AgaA7QgMgFgGgIQgGgJAAgLQAAgXAZgHQgUgJAAgSQAAgIAFgIQAGgHAKgEQAKgFAOAAQAKAAAKADQAIACAGAFQAGAEADAHQACAFABAGQgBAJgEAHQgFAGgKAFQAIACAGAEQAFAFADAGQADAFAAAIQAAALgGAJQgGAIgLAFQgMAFgQAAQgPAAgLgFgAgQAJQgHAGAAAKQAAAHADAFQADAFAFADQAGACAGABQAHgBAFgCQAGgDADgFQADgFAAgHQAAgHgDgFQgDgEgGgDQgGgDgGAAQgKAAgGAGgAgOgqQgGAFAAAIQAAAHAGAFQAGAFAIAAQAFAAADgBQAEgCACgCQAEgCABgDQABgDAAgEQAAgFgCgEQgDgEgEgDQgFgCgGAAQgJAAgFAFg");
	this.shape_868.setTransform(-40.3,139.1);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#660000").s().p("AAMA8QgDgDAAgHIAAhNQgYARgJAAQgEAAgDgDQgDgCAAgFQAAgDADgCIALgGQAMgFAHgFQAGgFAGgIIAHgHQABgCAFAAQAFAAADAEQADADAAAGIAABhQAAARgNAAQgGAAgEgEg");
	this.shape_869.setTransform(-53.3,139.1);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#660000").s().p("AANBSQgEgBgCgEIgIgJQgHgLgFgLQgFgKgCgLQgDgMgBgNQAAgLADgMQACgLAGgLQAFgLAHgLIAIgKQACgDAEAAIAGgBQAGAAAAADIgFAIIgJASQgEAKgDAOQgDAOgBAOQABAPADAOQADAOAEAKIAJATIAFAIQAAACgGAAIgGAAg");
	this.shape_870.setTransform(-61.5,140.7);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#660000").s().p("AgZA9QgLgDgGgGQgGgEAAgHQAAgDAEgEQADgCAEAAQAHAAAEAFIAEAEIAGAFIAGACIAJABQAJgBAGgCQAGgCACgFQACgFABgEIAAgRQgGAHgHAEQgJAEgKAAQgNAAgLgGQgKgGgFgLQgFgKAAgOQAAgKADgJQAEgIAFgGQAHgFAIgDQAIgEAJAAQAKAAAJAFQAIADAHAIIAAgDQAAgGADgDQAEgEAFAAQAIAAACAFQADAEAAAIIAABDQAAAMgDAIQgDAJgGAFQgGAFgLADQgJADgPAAQgOAAgKgEgAgRgnQgIAIABAOQAAAOAHAHQAHAGAKABQAHAAAGgEQAFgDAEgFQAEgGAAgJQAAgOgHgJQgHgHgMgBQgLABgGAHg");
	this.shape_871.setTransform(96.4,119.7);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#660000").s().p("AAaAsQgEgEAAgGIAAgDQgEAGgFADQgFAEgHACQgFABgJAAQgJAAgIgDQgHgEgEgGQgGgHAAgOIAAguQABgHADgDQADgDAHAAQAGAAAEADQADAEAAAGIAAAlQAAAIACAFQACAGADADQAFADAGAAQAGAAAGgDQAGgEADgFQACgFAAgQIAAgdQAAgGAEgEQAEgDAFAAQAHAAADADQADADABAHIAABDQAAAHgEADQgDADgGAAQgFAAgEgDg");
	this.shape_872.setTransform(76.1,118);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#660000").s().p("AAfAtQgEgEgFgGQgKAGgJAEQgIACgLAAQgKABgIgEQgIgEgEgFQgEgHAAgHQAAgJAHgHQAHgFAMgDIAMgDIARgDIAPgDQAAgKgEgEQgEgEgMAAQgJAAgFADQgFACgEAFIgFAGQgBACgFAAQgFAAgDgDQgDgCAAgEQAAgGAFgGQAFgGAKgEQALgDAOAAQASAAAKADQAKAEAEAHQAEAJAAANIAAAMIAAAOQAAAGADAHIACAJQAAAEgEADQgDACgFAAQgEAAgEgCgAADAFIgOADQgFABgEACQgDAEAAAEQAAAGAEADQAFAFAHAAQAHAAAHgEQAHgCADgGQADgFAAgMIAAgEIgRAFg");
	this.shape_873.setTransform(41,118);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#660000").s().p("AAjA9QgEgEAAgIIAAgqIg9AAIAAAqQAAAIgEAEQgFAEgGAAQgHAAgDgEQgEgEAAgIIAAhhQAAgIAEgEQADgEAHAAQAHAAAEAEQAEAEAAAIIAAAkIA9AAIAAgkQAAgIAEgEQAEgEAHAAQAGAAAEAEQAEAEAAAIIAABhQAAAIgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_874.setTransform(27.5,116.2);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#660000").s().p("AAfAtQgEgEgFgGQgKAGgJAEQgIACgLAAQgKABgIgEQgIgEgEgFQgEgHAAgHQAAgJAHgHQAHgFAMgDIAMgDIARgDIAPgDQAAgKgEgEQgEgEgMAAQgJAAgFADQgFACgEAFIgFAGQgBACgFAAQgFAAgDgDQgDgCAAgEQAAgGAFgGQAFgGAKgEQALgDAOAAQASAAAKADQAKAEAEAHQAEAJAAANIAAAMIAAAOQAAAGADAHIACAJQAAAEgEADQgDACgFAAQgEAAgEgCgAADAFIgOADQgFABgEACQgDAEAAAEQAAAGAEADQAFAFAHAAQAHAAAHgEQAHgCADgGQADgFAAgMIAAgEIgRAFg");
	this.shape_875.setTransform(-44.7,118);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#660000").s().p("AAfAtQgEgEgFgGQgKAGgJAEQgIACgLAAQgKABgIgEQgIgEgEgFQgEgHAAgHQAAgJAHgHQAHgFAMgDIAMgDIARgDIAPgDQAAgKgEgEQgEgEgMAAQgJAAgFADQgFACgEAFIgFAGQgBACgFAAQgFAAgDgDQgDgCAAgEQAAgGAFgGQAFgGAKgEQALgDAOAAQASAAAKADQAKAEAEAHQAEAJAAANIAAAMIAAAOQAAAGADAHIACAJQAAAEgEADQgDACgFAAQgEAAgEgCgAADAFIgOADQgFABgEACQgDAEAAAEQAAAGAEADQAFAFAHAAQAHAAAHgEQAHgCADgGQADgFAAgMIAAgEIgRAFg");
	this.shape_876.setTransform(-106.5,118);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#660000").s().p("AAbAvQgFgEAAgHIAAgpQAAgMgDgHQgEgGgMgBQgHAAgGAFQgGADgDAIQgDAFAAAOIAAAgQAAAHgDAEQgEAEgHAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIAEgEQADgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAHgIAKgEQAHgFAMAAQALAAAJAFQAJAEAEAIQADAEABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_877.setTransform(9.3,212.6);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#660000").s().p("AAcAwQgDgCgEgGIgVgaIgUAaIgIAIQgDADgFAAQgFAAgEgDQgEgDAAgEQAAgEAGgHIAaggIgYgbQgFgHAAgFQAAgDADgDQAEgDAFAAQAFAAAEACIAIAIIARAXIASgXIAIgIQADgCAFAAQAGAAAEADQADADAAADIgBAGIgFAGIgXAbIAaAgQAGAIAAADQAAAEgEADQgDADgGAAQgFAAgEgDg");
	this.shape_878.setTransform(-33.9,212.6);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_879.setTransform(201.2,186.6);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#660000").s().p("AAhBBQgFgEgFgHQgKAHgJAEQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgIQAAgKAHgHQAIgHANgDIAOgCIARgEIARgEQgBgJgEgEQgEgFgNAAQgJAAgGADQgFACgEAGIgGAGQgCABgFAAQgFAAgDgCQgEgCAAgEQAAgHAFgGQAGgGALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAANIAAAPIAAAOQAAAHACAIIADAJQAAAEgEADQgFAEgFAAQgEAAgEgEgAAEAXIgQADQgFABgEADQgEADAAAGQAAAFAEAEQAFAEAIAAQAIAAAHgDQAIgDADgFQADgGABgNIAAgEIgSAFgAgTgtQAAgBAEgEIAEgIQAEgGAEgCQACgCAGAAIANAAQAGAAAAABIgGAGIgMAKIgHAGQgGADgHAAQgEAAgBgDg");
	this.shape_880.setTransform(178.6,186.6);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#660000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgCgFgDgDQgEgEgGAAQgGAAgFAEQgFACgDAGQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgEgEQgFgEAAgIIAAgnIgBgOQAAgGgDgDQgEgEgGAAQgPAAgEAJQgEAIgBAQIAAAhQAAAIgDAEQgFAEgGAAQgGAAgFgEQgEgEAAgIIAAhGQAAgIAEgDQAEgEAFAAQAHAAADAEQAFADAAAGIAAADQAHgJAJgDQAIgDAKgBQALABAIADQAGAEAFAIQAIgIAIgEQAIgDALgBQALAAAIAFQAJAEAEAHQAEAHAAAOIAAAwQAAAIgEAEQgFAEgGAAQgHAAgEgEg");
	this.shape_881.setTransform(162.8,188.4);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgKQgEgJAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALADAHAIQAIAGAEAKQAEAIAAALQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgbQgGADgEAIQgEAHAAAJQAAAKAEAHQAEAIAGADQAGAEAIAAQANAAAIgJQAHgIAAgPQAAgPgHgIQgIgJgNAAQgIAAgGAFg");
	this.shape_882.setTransform(141.4,188.4);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#660000").s().p("AA5AvQgFgEAAgIIAAgpIgBgNQgBgFgDgDQgDgEgIAAQgFAAgFAEQgFACgDAGQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgFgEQgDgEAAgIIAAgnIgBgOQgBgGgDgDQgDgEgIAAQgOAAgEAJQgFAIABAQIAAAhQgBAIgEAEQgDAEgHAAQgGAAgEgEQgFgEAAgIIAAhGQAAgIAEgDQADgEAHAAQAGAAAEAEQADADAAAGIAAADQAIgJAIgDQAJgDAKgBQALABAHADQAHAEAGAIQAGgIAJgEQAJgDAJgBQAMAAAJAFQAIAEAEAHQAEAHAAAOIAAAwQAAAIgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_883.setTransform(125.5,188.4);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#660000").s().p("AgaAvQgLgFgGgFQgFgHAAgGQAAgEADgDQADgDAGAAQAEAAACACIAFAFQAFAHAGADQAGAEAKAAQAIAAAGgEQAFgDAAgFQAAgGgFgDQgHgDgMgDQgPgDgIgDQgKgDgGgGQgFgFAAgJQAAgIAFgGQAFgHALgEQAKgEANAAQAKAAAKACQAIACAGAEQAGADADAEQAEAEAAAEQAAAFgEACQgDADgHAAQgEAAgDgCIgHgHQgDgEgEgCQgFgCgHAAQgIAAgFADQgEADgBAEQAAAEAEADIAKAEIARAEQANACAJAEQAIAEAFAFQAEAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgPAAgLgEg");
	this.shape_884.setTransform(110.1,188.4);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_885.setTransform(101.4,186.6);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgFAGgGAEQgGAEgHACQgFABgHAAQgLAAgIgDQgJgFgHgHQgGgGgDgKQgEgKAAgLQAAgWANgNQANgNAWAAQALAAAIADQAJAEAIAIIAAglQAAgIADgEQAEgDAGAAQAHAAAEADQADAEAAAHIAABtQAAAHgDAEQgFADgGAAQgFAAgEgDgAgNgJQgHAEgDAGQgDAIAAAJQAAALADAGQAEAIAGADQAHAEAGAAQAHAAAHgEQAGgDAEgHQADgHABgLQgBgJgDgIQgEgGgGgEQgHgEgHABQgHAAgGADg");
	this.shape_886.setTransform(27.7,186.6);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#660000").s().p("AgJAwIgFgFIgGgMIgbg5IgCgFIgCgEIAAgEIABgFIAFgEQADgCAEAAQAHAAADAEQADADADAJIAWA3IAZg5QADgIADgDQACgDAGAAQAGAAAEAEQADADAAAEIAAAEIgCAEIgCAEIgbA6IgDAHIgEAHIgGAEQgDACgFAAQgFAAgEgDg");
	this.shape_887.setTransform(-45.1,188.4);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#660000").s().p("AAbAvQgFgEAAgHIAAgpQAAgNgDgGQgFgHgLAAQgHAAgGAFQgGADgEAHQgCAGAAAOIAAAgQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgDQAEgEAGAAQAEAAADABIAFAGQACADAAAEIAAADQAHgJAKgDQAHgFAMAAQALAAAJAFQAJAEAFAHQACAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_888.setTransform(-57,188.4);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_889.setTransform(-66.4,186.6);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_890.setTransform(-77.6,186.6);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAGgKAEQgIAEgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgJAIgIQAHgGANgDIAOgCIARgDIAQgFQAAgKgEgEQgEgEgNgBQgKABgFACQgFACgFAGIgFAHQgBACgGgBQgFABgDgDQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAIAAAOIAAAOIAAAOQAAAHADAIIACAJQAAAFgEACQgEAEgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAFAEQAFAFAHAAQAIAAAIgEQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_891.setTransform(-141.7,188.4);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_892.setTransform(-176.8,186.6);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAGgKAEQgIAEgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgJAHgIQAIgGANgDIANgCIASgDIAQgFQAAgKgEgEQgEgEgMgBQgKABgGACQgGACgDAGIgGAHQgCACgFgBQgFABgDgDQgEgDAAgEQAAgHAGgFQAFgHALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAOIAAAOIgBAOQAAAHAEAIIACAJQAAAFgEACQgEAEgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAGAFAIAAQAHAAAIgEQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_893.setTransform(-198.7,188.4);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#660000").s().p("AAaAvQgEgEAAgHIAAgpQAAgNgDgGQgFgHgLAAQgHAAgGAFQgHADgDAHQgCAGAAAOIAAAgQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgDQAEgEAGAAQAEAAADABIAFAGQACADAAAEIAAADQAIgJAJgDQAHgFAMAAQALAAAJAFQAJAEAFAHQACAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_894.setTransform(-211.5,188.4);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#660000").s().p("AAbAvQgFgEAAgHIAAgpQAAgNgDgGQgFgHgLAAQgHAAgGAFQgGADgEAHQgCAGAAAOIAAAgQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgDQAEgEAGAAQAEAAADABIAFAGQACADAAAEIAAADQAHgJAKgDQAHgFAMAAQALAAAJAFQAJAEAFAHQACAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_895.setTransform(-254,188.4);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgHAEgEQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_896.setTransform(-263.4,186.6);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgLgEgAgOgcQgHAFgDAHQgEAHABAJQgBAKAEAHQADAHAHAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNAAQgHAAgHADg");
	this.shape_897.setTransform(179.9,164.3);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#660000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgBgFgEgDQgDgDgIgBQgFAAgFADQgFAEgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgGAAgDgEQgEgEgBgIIAAgnIgBgPQAAgFgDgDQgEgDgGgBQgOABgFAIQgEAIgBAQIAAAhQAAAIgDAEQgFAEgGAAQgGAAgFgEQgEgEAAgIIAAhHQAAgGAEgEQADgEAGAAQAGAAAFADQADAEAAAGIAAADQAIgJAJgDQAIgDAKAAQALAAAIADQAGAEAFAIQAIgIAIgEQAIgDAKAAQAMAAAIADQAJAFAEAHQAEAHAAAOIAAAwQAAAIgEAEQgFAEgGAAQgGAAgFgEg");
	this.shape_898.setTransform(163.9,164.3);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#660000").s().p("AAaAvQgDgEAAgIIAAgoQAAgMgFgHQgDgGgMgBQgHAAgGAEQgHAFgDAHQgBAFAAAOIAAAfQAAAIgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgEQAEgDAGAAQAEAAADACIAFAFQACADAAAEIAAADQAIgIAJgFQAHgEAMAAQALAAAJAEQAJAFAFAIQACAEABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_899.setTransform(148,164.3);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#660000").s().p("AAaAvQgDgEAAgIIAAgoQgBgMgEgHQgDgGgMgBQgHAAgGAEQgGAFgDAHQgCAFAAAOIAAAfQgBAIgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgEQADgDAGAAQAEAAADACIAFAFQACADAAAEIAAADQAIgIAIgFQAIgEAMAAQALAAAJAEQAJAFAEAIQADAEABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_900.setTransform(123.8,164.3);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgEIgKAKQgHAEgGACQgGACgIgBQgLAAgIgDQgIgEgFgGQgFgJAAgPIAAgwQAAgIAEgDQAEgEAGAAQAGAAAEAEQAFADAAAIIAAAnQAAAJABAGQACAGAFADQAEADAHAAQAHAAAFgDQAHgEADgHQADgFAAgQIAAgfQAAgIADgDQAEgEAHAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgDAEgHAAQgFAAgEgEg");
	this.shape_901.setTransform(110.9,164.3);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDAEQgDADgDAFIgDAOIgBARIAAAVQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_902.setTransform(95,164.3);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#660000").s().p("AgbAvQgKgFgGgFQgFgHAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAGQAEAGAHADQAGADAKAAQAIAAAFgDQAGgDAAgFQAAgGgGgDQgFgDgNgDQgOgDgKgDQgJgDgFgGQgGgFAAgJQAAgIAFgGQAGgHAJgEQAKgEAOAAQALAAAIACQAKACAGAEQAFADAEAEQACAEAAAEQABAEgEADQgEADgFAAQgEAAgEgDIgHgGQgDgDgFgCQgEgDgHAAQgHAAgFADQgGADAAAEQABAEADACIALAFIAQAEQANADAJADQAIADAEAGQAFAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgPAAgLgEg");
	this.shape_903.setTransform(71.1,164.3);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAGgJAFQgJADgMAAQgLAAgJgEQgIgEgFgGQgEgHAAgHQAAgLAHgHQAIgGANgCIANgDIASgEIAQgDQAAgLgEgEQgEgFgMABQgKgBgGADQgFADgEAFIgGAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAGgHQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHADAIIADAKQAAAEgEADQgFADgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAEAEQAGADAIAAQAHABAHgEQAIgDADgFQADgGAAgNIAAgDIgRAEg");
	this.shape_904.setTransform(53.7,164.3);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDAEQgDADgDAFIgDAOIgBARIAAAVQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_905.setTransform(43.8,164.3);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAGgJAFQgJADgMAAQgLAAgIgEQgJgEgEgGQgFgHAAgHQAAgLAIgHQAHgGANgCIAOgDIARgEIARgDQgBgLgEgEQgEgFgNABQgKgBgFADQgGADgEAFIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHACAIIADAKQAAAEgEADQgFADgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAFAEQAFADAHAAQAIABAHgEQAHgDAEgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_906.setTransform(32.1,164.3);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#660000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgIADgDQAEgEAGAAQAHAAADAFQAEADAAAHIAAACQAIgIAJgEQAJgEAKAAQANAAALAGQALAGAGALQAHAMAAAPQAAAMgDAIQgFAKgGAGQgGAHgJAEQgJAEgKAAQgLAAgJgFQgJgFgHgHIAAAlQAAARgOAAQgHgBgDgEgAgSgqQgJAJABAPQgBAPAJAIQAHAIAMAAQAHAAAGgEQAGgEAEgFQADgIAAgKQAAgKgDgHQgDgHgGgEQgHgEgHAAQgLABgIAHg");
	this.shape_907.setTransform(19.3,166.1);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#660000").s().p("AgbAvQgLgFgFgFQgFgHAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAGQAFAGAGADQAGADAJAAQAJAAAGgDQAFgDAAgFQAAgGgFgDQgHgDgLgDQgPgDgKgDQgJgDgGgGQgFgFAAgJQAAgIAFgGQAFgHAKgEQALgEAOAAQAJAAAKACQAIACAHAEQAFADAEAEQACAEABAEQgBAEgDADQgDADgGAAQgFAAgDgDIgHgGQgDgDgFgCQgEgDgGAAQgIAAgGADQgEADAAAEQgBAEAEACIAKAFIARAEQAOADAIADQAIADAEAGQAFAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgOAAgMgEg");
	this.shape_908.setTransform(1.1,164.3);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#660000").s().p("AAaAvQgDgEAAgIIAAgoQgBgMgEgHQgDgGgMgBQgHAAgGAEQgGAFgDAHQgCAFAAAOIAAAfQgBAIgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgEQADgDAGAAQAEAAADACIAFAFQACADAAAEIAAADQAIgIAIgFQAIgEAMAAQALAAAJAEQAJAFAEAIQADAEABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_909.setTransform(-31.4,164.3);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEAAADADQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_910.setTransform(-44.2,164.3);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgEIgKAKQgHAEgGACQgGACgIgBQgLAAgIgDQgIgEgFgGQgFgJAAgPIAAgwQAAgIAEgDQADgEAHAAQAGAAAEAEQAFADAAAIIAAAnQgBAJACAGQACAGAFADQADADAIAAQAGAAAHgDQAGgEADgHQACgFABgQIAAgfQAAgIADgDQAFgEAGAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgDAEgGAAQgHAAgDgEg");
	this.shape_911.setTransform(-88.7,164.3);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#660000").s().p("AgbAvQgLgFgFgFQgFgHAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAGQAFAGAGADQAGADAJAAQAJAAAGgDQAFgDAAgFQAAgGgFgDQgHgDgLgDQgPgDgKgDQgJgDgGgGQgFgFAAgJQAAgIAFgGQAFgHAKgEQALgEAOAAQAJAAAJACQAJACAHAEQAFADAEAEQACAEAAAEQAAAEgDADQgDADgGAAQgFAAgDgDIgHgGQgDgDgFgCQgEgDgGAAQgIAAgGADQgEADAAAEQgBAEAEACIAKAFIARAEQAOADAIADQAIADAEAGQAFAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgOAAgMgEg");
	this.shape_912.setTransform(-101.1,164.3);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#660000").s().p("AAbAvQgFgEAAgIIAAgoQAAgMgDgHQgFgGgLgBQgHAAgGAEQgGAFgEAHQgCAFAAAOIAAAfQAAAIgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgEQAEgDAGAAQAEAAADACIAFAFQACADAAAEIAAADQAHgIAKgFQAHgEAMAAQALAAAJAEQAJAFAFAIQACAEABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_913.setTransform(-118.7,164.3);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#660000").s().p("AgbAvQgKgFgGgFQgFgHAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAGQAEAGAHADQAGADAKAAQAIAAAFgDQAGgDAAgFQAAgGgGgDQgFgDgNgDQgOgDgKgDQgJgDgFgGQgGgFAAgJQAAgIAFgGQAGgHAJgEQAKgEAOAAQALAAAIACQAKACAFAEQAGADADAEQADAEAAAEQABAEgEADQgEADgFAAQgEAAgEgDIgHgGQgDgDgFgCQgEgDgHAAQgHAAgFADQgGADAAAEQABAEADACIALAFIAQAEQANADAJADQAIADAEAGQAFAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgPAAgLgEg");
	this.shape_914.setTransform(-144,164.3);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEAAADADQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_915.setTransform(-161.5,164.3);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#660000").s().p("AgJBBQgEgDAAgIIAAhrQAAgIADgDQAEgFAGAAQAGAAAEAFQAEADAAAIIAABrQAAAIgEADQgEAFgGAAQgGAAgDgFg");
	this.shape_916.setTransform(-170.7,162.4);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#660000").s().p("AA4AvQgEgEAAgIIAAgpIgBgNQAAgFgEgDQgEgDgGgBQgGAAgFADQgFAEgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgEgEQgFgEAAgIIAAgnIgBgPQAAgFgDgDQgDgDgIgBQgOABgEAIQgEAIAAAQIAAAhQAAAIgFAEQgEAEgGAAQgHAAgEgEQgEgEAAgIIAAhHQAAgGAEgEQAEgEAFAAQAHAAADADQAFAEAAAGIAAADQAHgJAIgDQAJgDAKAAQALAAAIADQAHAEAEAIQAIgIAIgEQAJgDAKAAQALAAAIADQAJAFAEAHQAEAHAAAOIAAAwQAAAIgEAEQgEAEgHAAQgHAAgEgEg");
	this.shape_917.setTransform(-201.4,164.3);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDAEQgDADgDAFIgDAOIgBARIAAAVQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_918.setTransform(-227.1,164.3);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#660000").s().p("AAgBBQgDgEgGgHQgKAHgKAEQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgIQAAgKAHgHQAIgHANgDIANgCIASgEIAQgEQAAgJgEgEQgEgFgMAAQgKAAgGADQgGACgDAGIgGAGQgCABgFAAQgFAAgDgCQgEgCAAgEQAAgHAGgGQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAANIAAAPIgBAOQAAAHAEAIIACAJQAAAEgEADQgEAEgGAAQgEAAgFgEgAADAXIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAGAEAIAAQAHAAAIgDQAGgDAEgFQADgGAAgNIAAgEIgSAFgAgSgtQAAgBADgEIAEgIQAEgGADgCQADgCAFAAIAPAAQAFAAAAABIgGAGIgMAKIgHAGQgGADgHAAQgFAAABgDg");
	this.shape_919.setTransform(-238.7,162.5);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#660000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgIAEgDQADgEAHAAQAGAAAEAFQADADAAAHIAAACQAIgIAJgEQAJgEAJAAQAOAAALAGQALAGAGALQAHAMAAAPQAAAMgEAIQgEAKgGAGQgHAHgJAEQgIAEgLAAQgLAAgIgFQgJgFgHgHIAAAlQAAARgNAAQgJgBgCgEgAgTgqQgHAJgBAPQABAPAHAIQAJAIALAAQAHAAAGgEQAGgEADgFQAEgIAAgKQAAgKgDgHQgEgHgGgEQgGgEgHAAQgLABgJAHg");
	this.shape_920.setTransform(-251.5,166.1);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAALAEQAKADAIAIQAHAGAEAJQAEAJAAALQAAALgEAKQgEAJgHAHQgIAHgKADQgLAEgNAAQgMAAgLgEgAgOgcQgHAFgDAHQgEAHABAJQgBAKAEAHQADAHAHAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNAAQgIgBgGAEg");
	this.shape_921.setTransform(248.4,140.1);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgCQgGAFgFAEQgGADgGADQgGACgIAAQgKAAgJgFQgIgDgHgIQgGgHgDgJQgEgJAAgMQAAgWAOgNQANgNAUAAQAMAAAJAEQAIADAIAIIAAglQAAgIAEgDQADgFAGAAQAHAAADAEQAEADAAAIIAABtQAAAHgEADQgDAFgHAAQgFAAgEgFgAgNgIQgGADgDAGQgEAHAAAKQAAAKAEAIQADAHAHADQAFAEAHAAQAHAAAHgEQAGgDAEgHQADgHAAgLQAAgKgDgHQgEgGgGgEQgHgDgHAAQgHAAgGAEg");
	this.shape_922.setTransform(226.3,138.2);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#660000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgHAEgEQADgEAHAAQAGABAEAEQADADAAAGIAAADQAIgIAJgEQAJgEAJAAQAOAAALAGQALAGAGALQAHALAAAQQAAAMgEAIQgEAKgGAGQgHAHgJAEQgIADgLABQgLgBgIgEQgJgFgHgHIAAAlQAAARgNAAQgJgBgCgEgAgTgqQgHAJgBAPQABAPAHAIQAJAIALAAQAHAAAGgEQAGgDADgGQAEgIAAgKQAAgKgDgHQgEgHgGgEQgGgDgHAAQgLAAgJAHg");
	this.shape_923.setTransform(200.7,141.9);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#660000").s().p("AgvBDQgGgDAAgFQAAgFADgCQADgCAGAAIAEAAIAFABQAFgBADgBQACgBADgEIAFgJIADgFIgkhMQgDgIAAgCIACgHQACgCADgBQADgCAEgBQAGAAADAEQAEAEACAGIAXA9IAXg5IAFgLQACgEADgBQACgCAFAAIAGACQADABACADIABAGIgBAEIgDAHIglBUQgFALgEAHQgEAGgHAEQgIADgNABQgNgBgGgCg");
	this.shape_924.setTransform(182.3,141.9);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#660000").s().p("AgaAvQgLgFgGgFQgFgHAAgGQAAgEADgDQADgDAGAAQAEAAACACIAFAFQAFAHAGADQAGADAJAAQAJAAAGgDQAFgDAAgFQAAgGgFgDQgHgDgMgDQgPgDgIgDQgKgDgGgGQgFgGAAgIQAAgHAFgHQAFgHALgEQAKgEANAAQAKAAAKACQAIACAGAEQAGADADAEQAEAEAAAEQAAAEgEADQgDADgHAAQgEAAgDgDIgHgGQgDgDgEgCQgFgDgHAAQgIAAgEADQgFADgBAEQAAAEAEADIAKAEIARAEQANACAJAEQAIAEAFAFQAEAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgPAAgLgEg");
	this.shape_925.setTransform(165.5,140.1);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#660000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgCgEgDgEQgEgDgGgBQgGAAgFADQgFAEgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgEgEQgFgEAAgIIAAgnIgBgPQAAgFgDgDQgEgDgGgBQgPAAgEAJQgEAIAAAQIAAAhQgBAIgDAEQgFAEgGAAQgGAAgFgEQgEgEAAgIIAAhGQAAgIAEgDQAEgEAFAAQAHAAADADQAFAEAAAGIAAADQAHgJAJgDQAIgDAKgBQALABAIADQAGAEAFAIQAIgIAIgEQAIgDALgBQALAAAIAEQAJAFAEAHQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgHAAgEgEg");
	this.shape_926.setTransform(137.6,140.1);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#660000").s().p("AAhAvQgEgEgFgGQgLAHgJAEQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAHgHQAIgGANgDIAOgCIARgEIARgEQgBgKgEgEQgEgEgNAAQgJgBgGADQgFACgFAGIgFAHQgCABgFAAQgFAAgDgCQgEgCAAgFQAAgGAFgGQAGgHALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHACAIIADAJQAAAEgEAEQgFADgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAFADQAFAEAHAAQAIAAAHgDQAIgDADgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_927.setTransform(121.8,140.1);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAALAEQAKADAIAIQAHAGAEAJQAEAJAAALQAAALgEAKQgEAJgHAHQgIAHgKADQgLAEgNAAQgMAAgKgEgAgOgcQgGAFgEAHQgDAHgBAJQABAKADAHQAEAHAGAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNAAQgHgBgHAEg");
	this.shape_928.setTransform(61,140.1);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#660000").s().p("AAaAvQgDgEAAgHIAAgpQAAgMgFgHQgEgGgLgBQgHAAgGAFQgHADgDAIQgBAFAAAOIAAAgQAAAHgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgEQAEgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAIgIAJgFQAHgEAMAAQALAAAJAEQAJAFAFAIQACAEABAGIABANIAAAuQAAAHgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_929.setTransform(48.1,140.1);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAHgJAEQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAIgHQAHgGANgDIAOgCIARgEIARgEQgBgKgEgEQgEgEgNAAQgKgBgFADQgGACgEAGIgFAHQgBABgGAAQgFAAgDgCQgEgCAAgFQAAgGAFgGQAGgHALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHADAIIACAJQAAAEgEAEQgFADgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAFADQAFAEAHAAQAIAAAIgDQAGgDAEgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_930.setTransform(35.3,140.1);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhrQAAgIADgDQAEgFAGAAQAGAAAEAFQAEADAAAIIAABrQAAAHgEAEQgEAFgGAAQgGAAgDgFg");
	this.shape_931.setTransform(20.2,138.2);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhrQAAgIADgDQAEgFAGAAQAGAAAEAFQAEADAAAIIAABrQAAAHgEAEQgEAFgGAAQgGAAgDgFg");
	this.shape_932.setTransform(9.1,138.2);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#660000").s().p("AgOAaQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAgDAFgDQALgGAAgIQgGgBgFgCQgFgEAAgHQAAgGAFgEQAFgDAGAAQAFAAAEACQAEADACAEQACAFAAAGQAAAIgEAJQgEAHgHAFQgFAEgFABQgEgBgCgBg");
	this.shape_933.setTransform(-15.2,145.1);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#660000").s().p("AAaAvQgDgEAAgHIAAgpQAAgMgFgHQgDgGgMgBQgHAAgGAFQgGADgDAIQgCAFAAAOIAAAgQAAAHgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIAEgEQADgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAIgIAIgFQAIgEAMAAQALAAAJAEQAJAFAEAIQADAEABAGIABANIAAAuQAAAHgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_934.setTransform(-37.2,140.1);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#660000").s().p("AAgAvQgEgEgFgGQgKAHgJAEQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAHgHQAIgGANgDIAOgCIARgEIARgEQgBgKgEgEQgEgEgNAAQgJgBgGADQgFACgEAGIgGAHQgCABgFAAQgFAAgDgCQgEgCAAgFQAAgGAFgGQAGgHALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHACAIIADAJQAAAEgEAEQgFADgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAEADQAFAEAIAAQAIAAAHgDQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_935.setTransform(-50,140.1);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#660000").s().p("AAcAwQgDgCgEgGIgVgaIgUAaIgIAIQgDADgFAAQgGAAgEgDQgDgDAAgEQAAgEAFgHIAaggIgWgbQgHgHABgFQAAgDADgDQAEgDAFAAQAGAAADACIAHAIIASAXIASgXIAIgIQADgCAFAAQAGAAADADQAEADAAADIgBAGIgFAGIgXAbIAaAgQAGAHAAAEQAAAEgEADQgEADgFAAQgFAAgEgDg");
	this.shape_936.setTransform(-80.4,140.1);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEABADACQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_937.setTransform(-92.1,140.1);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#660000").s().p("AA5AvQgFgEAAgIIAAgpIgBgNQAAgEgEgEQgEgDgGgBQgGAAgFADQgFAEgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgFgEQgEgEAAgIIAAgnIAAgPQgBgFgDgDQgDgDgIgBQgOAAgEAJQgFAIABAQIAAAhQAAAIgFAEQgEAEgGAAQgHAAgEgEQgEgEAAgIIAAhGQAAgIAEgDQAEgEAFAAQAGAAAEADQAEAEABAGIAAADQAHgJAIgDQAJgDAKgBQALABAHADQAIAEAFAIQAGgIAJgEQAJgDAKgBQALAAAJAEQAIAFAEAHQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgHAAgDgEg");
	this.shape_938.setTransform(-107.9,140.1);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAAKAEQALADAHAIQAIAGAEAJQAEAJAAALQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgKgEgAgOgcQgHAFgDAHQgEAHAAAJQAAAKAEAHQADAHAHAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNAAQgIgBgGAEg");
	this.shape_939.setTransform(-138.6,140.1);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#660000").s().p("AgaAvQgMgFgFgFQgFgHAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAFQAEAHAHADQAGADAJAAQAJAAAGgDQAFgDAAgFQAAgGgFgDQgHgDgLgDQgQgDgIgDQgKgDgGgGQgFgGAAgIQAAgHAFgHQAFgHALgEQAKgEAOAAQAJAAAKACQAIACAGAEQAGADADAEQAEAEAAAEQgBAEgDADQgDADgHAAQgEAAgDgDIgHgGQgDgDgEgCQgFgDgGAAQgJAAgFADQgEADAAAEQAAAEADADIAKAEIARAEQANACAJAEQAIAEAFAFQAEAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgPAAgLgEg");
	this.shape_940.setTransform(-186.3,140.1);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEABADACQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_941.setTransform(-198.5,140.1);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEABADACQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_942.setTransform(-216.5,140.1);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#660000").s().p("AA5AvQgFgEAAgIIAAgpIgBgNQgBgEgDgEQgDgDgIgBQgFAAgFADQgFAEgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgFgEQgDgEAAgIIAAgnIgBgPQgBgFgDgDQgDgDgIgBQgOAAgEAJQgFAIABAQIAAAhQgBAIgEAEQgDAEgHAAQgGAAgEgEQgFgEAAgIIAAhGQAAgIAEgDQADgEAHAAQAGAAAEADQADAEAAAGIAAADQAIgJAIgDQAJgDAKgBQALABAHADQAHAEAGAIQAGgIAJgEQAJgDAJgBQAMAAAJAEQAIAFAEAHQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_943.setTransform(-232.3,140.1);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgDgEAAQgHAAgDAEQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_944.setTransform(-245.8,140.1);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAAKAEQALADAHAIQAIAGAEAJQAEAJAAALQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgLgEgAgOgcQgGAFgEAHQgDAHAAAJQAAAKADAHQAEAHAGAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNAAQgHgBgHAEg");
	this.shape_945.setTransform(-257.6,140.1);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#660000").s().p("AAbAvQgFgEAAgHIAAgpQAAgMgDgHQgEgGgMgBQgHAAgGAFQgGADgDAIQgDAFAAAOIAAAgQAAAHgDAEQgEAEgHAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIAEgEQADgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAHgIAJgFQAIgEAMAAQALAAAJAEQAJAFAEAIQADAEABAGIABANIAAAuQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_946.setTransform(-270.6,140.1);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#660000").s().p("AgnBDQgLAAgEgEQgEgEAAgIIAAhlQAAgGACgDQABgEAFgBQAEgCAHAAIBRAAQAHAAAEADQADADAAAEQAAAFgDADQgEADgHAAIhFAAIAAAhIA/AAQAIAAADADQADADABAEQgBAEgDADQgDACgIAAIg/AAIAAAmIBHAAQAIAAADADQAEAEAAAEQAAAFgEADQgDADgIAAg");
	this.shape_947.setTransform(-283.8,138.2);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#660000").s().p("AgXBQIAEgJIAIgRQAFgKADgOQADgOAAgQQAAgOgDgPQgDgOgFgKIgIgSIgEgHQAAgDAEAAQAHAAAEADQAEACAFAJIAKARQAFAHACAJQADAIACAJQABAJAAAIQAAATgFAQQgGAQgMARQgFAKgEACQgEACgHAAQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_948.setTransform(87.2,116.5);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#660000").s().p("AgaA5QgLgHgHgOQgGgOAAgTQAAgPAEgNQAEgMAHgJQAHgIAKgFQAKgEAMAAQANAAAJAEQAKAFAFAGQAEAGAAAGQAAADgDAEQgDACgEAAQgEAAgEgCQgDgDgCgDQgCgFgFgEQgFgCgHAAQgEgBgFADQgFADgEAEQgHAJgBAXQAHgHAIgDQAHgDAJAAQAJAAAIACQAIADAGAGQAGAGADAHQADAHAAAIQAAAMgGALQgGAJgMAGQgLAFgOAAQgQAAgMgHgAgIAAQgGACgDAGQgEAFAAAHQAAAMAHAHQAHAIAJAAQAKAAAHgGQAGgIAAgLQAAgIgDgFQgDgGgFgDQgFgCgHAAQgFAAgFACg");
	this.shape_949.setTransform(77.9,114.8);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#660000").s().p("AgbA7QgLgFgGgJQgGgJAAgKQAAgXAZgIQgUgIAAgRQAAgJAGgHQAEgIALgFQAKgEAOAAQALAAAIACQAJADAGAFQAGAFADAFQACAGAAAHQABAIgFAGQgFAHgKAEQAIADAGAEQAGAEACAGQADAHAAAHQAAAKgGAJQgGAJgMAFQgLAFgQAAQgPAAgMgFgAgRAJQgGAGAAALQAAAGADAFQAEAFAFADQAFACAGAAQAHAAAGgCQAFgDADgFQADgFAAgHQAAgGgDgFQgDgGgGgCQgFgDgHAAQgKAAgHAGgAgOgqQgGAFAAAIQAAAHAGAFQAGAFAIAAQAEAAAEgCQAEgBADgCQACgCABgEQACgDAAgDQAAgFgDgEQgCgEgFgDQgEgCgGAAQgIAAgGAFg");
	this.shape_950.setTransform(66,114.8);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#660000").s().p("AgaA8QgJgEgFgGQgFgHAAgGQAAgEADgDQADgCAFAAQAEAAAEACQADACACAEQACAFAFADQAFADAGAAQAFAAAFgCQAFgDADgEQAHgJACgXQgHAHgIADQgIAEgIgBQgJABgIgEQgIgDgGgFQgGgGgDgHQgDgHAAgIQAAgJADgIQAEgIAGgGQAHgFAJgEQAJgDALAAQAMAAAJAEQAKAEAHAIQAHAHADAMQAEALAAAPQAAAQgEAMQgEAMgHAJQgHAIgKAFQgLAEgLAAQgNAAgKgEgAgSgnQgGAHAAALQAAALAGAIQAHAFAKAAQAFAAAFgDQAGgCADgFQAEgFAAgHQAAgGgCgFQgCgFgDgDQgEgEgEgCQgFgCgEAAQgJAAgHAHg");
	this.shape_951.setTransform(53.9,114.8);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#660000").s().p("AAMA9QgDgEAAgGIAAhOQgYARgJAAQgEAAgDgCQgDgEAAgDQAAgFADgCIALgFQAMgFAHgFQAGgGAGgHIAHgIQABgBAFAAQAFAAADADQADAEAAAGIAABhQAAARgNAAQgGAAgEgDg");
	this.shape_952.setTransform(41,114.8);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#660000").s().p("AgOALQgIgBgDgDQgEgDAAgEQAAgDAEgDQADgEAIAAIAdAAQAHAAAFAEQADADAAADQAAAEgDADQgFADgHABg");
	this.shape_953.setTransform(33,116.5);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#660000").s().p("AgYA8QgDgEgBgHQABgFACgKIAJgXQAGgMAJgOQAHgOANgNIgzAAQgIAAgFgDQgDgCAAgGQAAgGADgCQAFgBAIAAIBAAAQAJAAAEACQAFADAAAGQgBADgEAGIgMAOQgGAHgGAKQgIALgFAOIgDALIgCAMIgDAKQAAAKgEADQgEADgGAAQgGAAgEgDg");
	this.shape_954.setTransform(24.2,114.9);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#660000").s().p("AAMA9QgDgEAAgGIAAhOQgYARgJAAQgEAAgDgCQgDgEAAgDQAAgFADgCIALgFQAMgFAHgFQAGgGAGgHIAHgIQABgBAFAAQAFAAADADQADAEAAAGIAABhQAAARgNAAQgGAAgEgDg");
	this.shape_955.setTransform(10.6,114.8);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#660000").s().p("AgaA8QgJgEgFgGQgFgHAAgGQAAgEADgDQADgCAFAAQAEAAAEACQADACACAEQACAFAFADQAFADAGAAQAFAAAFgCQAFgDADgEQAHgJACgXQgHAHgIADQgIAEgIgBQgJABgIgEQgIgDgGgFQgGgGgDgHQgDgHAAgIQAAgJADgIQAEgIAGgGQAHgFAJgEQAJgDALAAQAMAAAJAEQAKAEAHAIQAHAHADAMQAEALAAAPQAAAQgEAMQgEAMgHAJQgHAIgKAFQgLAEgLAAQgNAAgKgEgAgSgnQgGAHAAALQAAALAGAIQAHAFAKAAQAFAAAFgDQAGgCADgFQAEgFAAgHQAAgGgCgFQgCgFgDgDQgEgEgEgCQgFgCgEAAQgJAAgHAHg");
	this.shape_956.setTransform(-0.2,114.8);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#660000").s().p("AAMA9QgDgEAAgGIAAhOQgYARgJAAQgEAAgDgCQgDgEAAgDQAAgFADgCIALgFQAMgFAHgFQAGgGAGgHIAHgIQABgBAFAAQAFAAADADQADAEAAAGIAABhQAAARgNAAQgGAAgEgDg");
	this.shape_957.setTransform(-13.1,114.8);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#660000").s().p("AAMBRQgCgBgDgDIgHgJQgIgLgFgKQgFgLgDgMQgDgLAAgNQABgMACgLQACgLAGgLQAFgLAIgLIAHgJQADgDACgBIAHgBQAFAAABADIgFAJIgJASQgDAJgEANQgDAPAAAOQAAAQADAOQAEANADAKIAJASIAFAJQgBACgFAAIgHgBg");
	this.shape_958.setTransform(-21.3,116.5);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#660000").s().p("AAfAsQgEgDgFgHQgKAHgJADQgIAEgLAAQgKAAgIgEQgIgDgEgHQgEgGAAgGQAAgKAHgHQAHgFAMgDIAMgCIARgEIAPgDQAAgKgEgEQgEgEgMAAQgJAAgFACQgFADgEAFIgFAHQgBABgFAAQgFAAgDgCQgDgDAAgEQAAgGAFgGQAFgGAKgDQALgFAOAAQASAAAKAFQAKADAEAIQAEAHAAANIAAAOIAAAMQAAAHADAHIACAJQAAADgEADQgDAEgFAAQgEAAgEgEgAADAFIgOADQgFABgEADQgDACAAAGQAAAFAEAEQAFADAHAAQAHAAAHgCQAHgEADgEQADgGAAgMIAAgEIgRAFg");
	this.shape_959.setTransform(-97.9,116.5);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#660000").s().p("AgYA9QgJgEgHgJQgDgFgBgGQgDgGAAgGQAAgGAEgDQAEgDAGAAQAGAAADADQADACABAHIAEAKQABAEAEADQAEADAHAAQASAAABgZIAAhEQAAgIADgEQAEgEAHAAQAGAAAEAEQAFAEAAAIIAABAIgBAPQgBAGgDAGQgFAKgLAGQgLAGgQAAQgOAAgKgEg");
	this.shape_960.setTransform(-122.3,114.7);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#660000").s().p("AgKAKQgFgEAAgGQAAgEAFgFQAEgEAGAAQAGAAAFAEQAFAEAAAFQAAAGgFAEQgFAEgGAAQgGAAgEgEg");
	this.shape_961.setTransform(178.2,217.8);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#660000").s().p("AAbAvQgFgEAAgIIAAgoQAAgMgDgHQgFgGgLAAQgHAAgGADQgGAFgEAHQgCAFAAAPIAAAeQAAAIgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgEQAEgDAGAAQAEAAADACIAFAEQACADAAAFIAAADQAHgIAKgFQAHgEAMAAQALAAAJAEQAJAFAFAIQACAEABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_962.setTransform(168.4,214.1);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#660000").s().p("AgXBBQgKgEgIgHQgHgGgEgKQgEgJAAgLQAAgMAEgIQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALADAHAHQAIAHAEAJQAEAIAAAMQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgKQgGAEgEAGQgDAIAAAKQAAAKADAHQAEAHAGAEQAGAEAIAAQANAAAIgJQAHgIAAgPQAAgQgHgHQgIgJgNAAQgHAAgHAEgAgUgtQAAgBADgEIAEgIQAFgGADgCQADgCAFAAIAOAAQAGAAgBABIgFAGIgMAKIgIAGQgGADgGAAQgFAAAAgDg");
	this.shape_963.setTransform(155.5,212.3);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#660000").s().p("AAhAvQgFgDgEgIQgLAHgKAFQgIADgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgLAIgHQAHgGANgCIANgDIASgEIAQgDQAAgLgEgEQgEgFgNABQgKAAgFACQgGADgEAFIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAJAAANIAAAPIgBANQABAHADAIIACAKQAAADgEAEQgEADgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAFAFQAEADAIAAQAIABAIgEQAGgDAEgFQAEgGgBgNIAAgEIgSAFg");
	this.shape_964.setTransform(124.2,214.1);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#660000").s().p("AAbAvQgFgEAAgIIAAgoQAAgMgDgHQgFgGgLAAQgHAAgGADQgGAFgEAHQgCAFAAAPIAAAeQAAAIgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgEQAEgDAGAAQAEAAADACIAFAEQACADAAAFIAAADQAHgIAKgFQAHgEAMAAQALAAAJAEQAJAFAFAIQACAEABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_965.setTransform(111.4,214.1);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDADQgDADgDAGIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_966.setTransform(100.9,214.1);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADADAAADQAAAEgDAEQgDAFgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_967.setTransform(89.2,214.1);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#660000").s().p("AgDBEIgKgEIgHgFIgIgGIAAACQAAAHgDADQgFAEgFABQgHgBgDgEQgEgDAAgHIAAhsQAAgHAEgEQADgFAHAAQAGAAAEAFQADADAAAHIAAAmQAIgIAJgDQAIgEALAAQAOAAALAGQALAFAGAMQAGAKAAAQQAAALgEAJQgDAKgGAHQgGAGgJAEQgJAEgLABQgHAAgEgCgAgMgIQgHADgEAGQgEAIAAAKQABAPAHAIQAIAIAMAAQALAAAIgIQAHgJAAgOQAAgKgDgIQgEgGgFgDQgGgFgIAAQgIAAgFAFg");
	this.shape_968.setTransform(76.4,212.3);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgcQgHAFgDAGQgEAIABAJQgBAKAEAHQADAHAHAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNAAQgIAAgGADg");
	this.shape_969.setTransform(63,214.1);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#660000").s().p("AgbBCQgMgEgGgGQgGgGAAgFQAAgFADgDQAEgDAFABQAGgBAFAFIAFAFIAFAEIAHADIAKABQAKAAAGgDQAGgDADgEQACgFABgGIAAgSQgGAJgJAEQgJAEgLAAQgOAAgLgGQgKgHgGgLQgGgLAAgPQAAgMAEgJQADgIAHgGQAGgHAJgDQAIgDAKAAQALAAAJAEQAJAEAIAIIAAgCQAAgHAEgEQADgDAGgBQAIAAADAGQADAEAAAJIAABHQAAANgDAJQgDAJgHAGQgHAFgLADQgKAEgQAAQgOAAgMgEgAgTgqQgHAJAAAPQAAAPAHAGQAIAJALgBQAHABAHgEQAGgDAEgGQAEgGAAgKQAAgQgIgIQgIgJgMAAQgLABgIAHg");
	this.shape_970.setTransform(49.9,216);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADADAAADQAAAEgDAEQgDAFgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_971.setTransform(31.8,214.1);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgCQgGAFgFAEQgGADgGACQgGACgIABQgKgBgIgEQgKgEgGgGQgGgIgEgJQgDgJAAgLQAAgXANgNQANgNAVAAQAMAAAIAEQAJAEAIAHIAAglQAAgHAEgEQADgFAHAAQAGABAEADQADAEAAAHIAABtQAAAHgDADQgFAEgFABQgGgBgEgEgAgNgIQgGADgEAGQgDAIAAAKQAAAJADAIQAEAGAGAEQAHAEAGAAQAIAAAGgEQAGgDAEgHQADgHAAgKQAAgLgDgHQgEgGgGgEQgGgEgIAAQgHAAgGAFg");
	this.shape_972.setTransform(18.4,212.3);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgcQgGAFgEAGQgDAIAAAJQAAAKADAHQAEAHAGAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNAAQgHAAgHADg");
	this.shape_973.setTransform(0.2,214.1);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDADQgDADgDAGIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_974.setTransform(-16.1,214.1);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#660000").s().p("AAgAvQgDgDgGgIQgKAHgKAFQgIADgMAAQgLAAgJgEQgIgEgFgHQgEgGAAgHQAAgLAHgHQAIgGANgCIANgDIASgEIAQgDQAAgLgEgEQgEgFgMABQgKAAgGACQgFADgEAFIgGAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAGgHQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHADAIIADAKQAAADgEAEQgFADgFAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAFQAGADAIAAQAHABAHgEQAIgDADgFQADgGAAgNIAAgEIgSAFg");
	this.shape_975.setTransform(-27.8,214.1);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAguIgEAAQgGgBgDgCQgEgDAAgEQAAgDAEgDQADgCAHAAIADAAIAAgQIAAgJQAAgDACgDQACgCADgCQADgCAEAAQAFAAAEAEQADACABAEIAAAJIAAASIALAAQAGAAADACQADADAAADQAAAFgEADQgFABgIABIgGAAIAAAsIABAJQAAAEACACQACACAFAAIAHgBIAHgBQADAAADACQADADAAAEQAAAFgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_976.setTransform(-37.5,212.4);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADADAAADQAAAEgDAEQgDAFgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_977.setTransform(-48,214.1);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDADQgDADgDAGIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_978.setTransform(-57.9,214.1);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADADAAADQAAAEgDAEQgDAFgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_979.setTransform(-82.2,214.1);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#660000").s().p("AgbAvQgLgFgFgGQgFgGAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAGQAEAGAHAEQAGACAJAAQAJAAAGgCQAFgEAAgFQAAgGgFgDQgHgDgLgDQgPgDgKgDQgJgDgGgGQgFgFAAgJQAAgIAFgGQAFgHAKgEQALgEAOAAQAJAAAKACQAJACAGAEQAFADAEAEQADAEAAAEQgBAEgDADQgDADgHAAQgEAAgDgDIgHgGQgDgDgFgCQgEgDgGAAQgIAAgGADQgEADAAAEQgBAEAEACIAKAFIARAEQANADAJAEQAIACAEAGQAFAFAAAHQAAAKgGAIQgFAHgMAEQgLAEgPAAQgPAAgMgEg");
	this.shape_980.setTransform(-94.4,214.1);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADADAAADQAAAEgDAEQgDAFgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_981.setTransform(-111.9,214.1);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgDIgLAKQgGAEgGACQgGABgJAAQgKAAgIgDQgIgEgEgHQgGgHAAgPIAAgxQAAgIAEgDQADgEAHAAQAHAAADAEQAEADAAAIIAAAnQAAAJACAFQACAHAEADQAFADAHABQAHAAAFgFQAHgDADgHQACgFAAgQIAAgfQABgIAEgDQADgEAHAAQAGAAAEAEQAEADAAAIIAABHQAAAIgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_982.setTransform(-124.7,214.1);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#660000").s().p("AgPBBQgEgDAAgIIAAhBIgIAAQgHAAgDgDQgEgCAAgEQAAgJAPAAIAHAAIAAgHQAAgMADgHQADgHAJgEQAHgDAOAAQAZAAAAALQAAADgDADQgCADgEgBIgGAAIgHgBQgHAAgDAFQgCAEAAAHIAAAGIAHAAQARAAAAAIQAAAHgFABQgEACgIAAIgHAAIAABBQAAAIgEADQgEAEgFABQgGgBgEgEg");
	this.shape_983.setTransform(-134.4,212.3);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#660000").s().p("AglAxQgIAAgEgEQgEgDAAgFQAAgDADgDIAMgNIARgQIAOgNIAKgLIAHgHIgpAAQgJgBgFgBQgEgCAAgFQAAgFADgCQAEgCAGAAIBBAAQAJAAAFACQAEACAAAGIgBAFIgCADIgDADIgFAFIgzAyIA3AAQAHAAADADQAEADAAAEQAAAEgEADQgDACgHABg");
	this.shape_984.setTransform(-149.3,214.1);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADADAAADQAAAEgDAEQgDAFgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLABQgKgBgHAHg");
	this.shape_985.setTransform(-161,214.1);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDADQgDADgDAGIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_986.setTransform(-170.8,214.1);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#660000").s().p("AAhBBQgFgEgEgHQgLAHgJAEQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgIQAAgKAIgHQAHgHANgDIAOgCIARgEIARgEQgBgJgEgEQgEgFgNAAQgKAAgFADQgGACgEAGIgFAGQgBABgGAAQgFAAgDgCQgEgCAAgEQAAgHAFgGQAGgGALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAIAAANIAAAPIAAAOQAAAHACAIIADAJQAAAEgEADQgFAEgEAAQgFAAgEgEgAAEAXIgQADQgFABgEADQgEADAAAGQAAAFAFAEQAFAEAHAAQAIAAAHgDQAHgDAEgFQAEgGAAgNIAAgEIgSAFgAgTgtQAAgBADgEIAFgIQAEgGAEgCQACgCAGAAIANAAQAGAAAAABIgGAGIgLAKIgIAGQgGADgHAAQgEAAgBgDg");
	this.shape_987.setTransform(-182.5,212.3);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgDIgLAKQgGAEgGACQgGABgJAAQgKAAgIgDQgIgEgEgHQgGgHAAgPIAAgxQAAgIAEgDQADgEAHAAQAHAAADAEQAEADAAAIIAAAnQAAAJACAFQACAHAEADQAFADAHABQAHAAAFgFQAHgDADgHQACgFAAgQIAAgfQABgIAEgDQADgEAHAAQAGAAAEAEQAEADAAAIIAABHQAAAIgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_988.setTransform(-195.3,214.1);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#660000").s().p("AgaBBQgKgFgHgJIgFgMQgCgGAAgGQAAgHAEgDQAFgEAFAAQAHAAADAEQADADACAGIADAMQACAEAFADQAEACAHAAQAUABAAgbIAAhJQAAgIAEgEQAEgFAHAAQAIAAAEAFQAEAEAAAIIAABGIgBAPQgBAGgDAHQgFALgMAGQgMAHgRAAQgPAAgLgFg");
	this.shape_989.setTransform(-208.6,212.3);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgCQgGAFgFAEQgGAEgGABQgGADgIAAQgKAAgJgFQgJgDgGgIQgGgHgEgJQgDgJAAgLQAAgXANgNQAOgNAUAAQAMAAAIAEQAJADAIAIIAAglQAAgHAEgEQADgFAHAAQAGABAEADQADAEAAAHIAABtQAAAHgDADQgEAFgGAAQgGAAgEgFgAgNgIQgGADgEAGQgDAIAAAJQAAAKADAIQAEAGAHAEQAFAEAHAAQAIAAAGgEQAGgDAEgHQADgHAAgLQAAgKgDgHQgEgGgGgEQgGgEgIAAQgHABgGAEg");
	this.shape_990.setTransform(244.4,188.1);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#660000").s().p("AAbAvQgEgEgBgIIAAgoQAAgMgEgHQgDgGgMgBQgHAAgGAEQgGAFgDAHQgCAFgBAOIAAAfQAAAIgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgEQADgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAHgIAJgFQAIgEAMAAQALAAAJAEQAJAFAEAIQADAEABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgHAAgDgEg");
	this.shape_991.setTransform(213.3,189.9);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDAEQgDADgDAFIgDANIgBASIAAAVQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_992.setTransform(202.7,189.9);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#660000").s().p("AgEBEIgJgEIgHgEIgIgHIAAACQAAAHgEADQgEAFgFAAQgGAAgEgFQgEgDAAgHIAAhsQAAgHAEgEQADgFAHAAQAGAAADAFQAEADAAAHIAAAmQAJgHAHgEQAJgEAMAAQAOAAAKAGQALAGAGALQAGAKAAAQQAAALgEAJQgDAKgGAGQgGAIgJADQgJAFgLAAQgGAAgGgCgAgNgIQgGADgEAGQgDAIAAAKQAAAPAHAIQAIAIAMAAQAKAAAJgIQAHgJAAgPQAAgJgDgIQgDgGgGgDQgGgEgIgBQgHABgHAEg");
	this.shape_993.setTransform(172.5,188.1);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAHgKADQgLAEgNAAQgMAAgKgEgAgOgcQgGAFgEAHQgDAHgBAJQABAKADAHQAEAHAGAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNAAQgIAAgGADg");
	this.shape_994.setTransform(159,189.9);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#660000").s().p("AgbBCQgMgEgGgGQgGgGAAgGQAAgEADgDQAEgDAFABQAGAAAFAEIAFAFIAFAEIAHADIAKABQAKAAAGgCQAGgEADgEQACgFABgFIAAgSQgGAHgJAFQgJAEgLAAQgOAAgLgGQgKgHgGgLQgGgLAAgPQAAgMAEgJQADgIAHgGQAGgHAJgDQAIgDAKAAQALAAAJAEQAJAEAIAIIAAgCQAAgHAEgEQADgEAGAAQAIABADAFQADAEAAAJIAABHQAAANgDAJQgDAJgHAGQgHAFgLADQgKAEgQAAQgOgBgMgDgAgTgqQgHAJAAAPQAAAPAHAGQAIAIALAAQAHABAHgEQAGgDAEgGQAEgGAAgLQAAgOgIgJQgIgJgMAAQgLABgIAHg");
	this.shape_995.setTransform(146,191.8);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAgvIgEAAQgGABgDgDQgEgDAAgEQAAgDAEgDQADgCAHgBIADAAIAAgPIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGABADACQADADAAADQAAAFgEADQgFABgIAAIgGAAIAAAtIABAJQAAADACADQACABAFABIAHgBIAHgBQADAAADACQADADAAAEQAAAGgIADQgIADgOAAQgMAAgHgEg");
	this.shape_996.setTransform(118.1,188.2);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#660000").s().p("AAbAvQgEgEgBgIIAAgoQAAgMgEgHQgDgGgMgBQgHAAgGAEQgGAFgDAHQgCAFgBAOIAAAfQAAAIgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgEQADgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAHgIAJgFQAIgEAMAAQALAAAJAEQAJAFAEAIQADAEABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgHAAgDgEg");
	this.shape_997.setTransform(107.5,189.9);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAGgKAFQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAHgHQAIgGANgDIANgCIASgEIAQgDQAAgLgEgEQgEgFgMABQgKgBgGADQgGADgDAFIgGAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHAEAIIACAJQAAAFgEADQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAEAEQAGADAIAAQAHABAIgEQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_998.setTransform(94.7,189.9);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDAEQgDADgDAFIgDANIgBASIAAAVQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_999.setTransform(84.8,189.9);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgEIgLAKQgFAEgHACQgGACgJgBQgKAAgIgDQgIgEgEgGQgGgJAAgPIAAgwQAAgIAEgDQAEgEAGAAQAGAAAFAEQADADAAAIIAAAnQABAJABAGQACAGAEADQAEADAIABQAGgBAHgDQAGgEADgHQADgFgBgQIAAgfQAAgIAFgDQAEgEAGAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgEAEgFAAQgHAAgDgEg");
	this.shape_1000.setTransform(73,189.9);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#660000").s().p("AgtBDQgJAAgEgCQgEgDgBgEQgCgEAAgGIAAhiQAAgIAFgEQAEgEAKAAIApAAQAPAAALADQALACAKAHQAYASAAAkQAAAMgDAJQgCALgFAHQgFAJgIAGQgGAFgIADQgHADgIABIgTABgAgiAtIAYAAIALAAIAJgCIAIgEQAQgMAAgbQAAgUgHgJQgHgKgKgDQgKgDgNABIgVAAg");
	this.shape_1001.setTransform(58.9,188.1);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAGgKAFQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAIgHQAHgGANgDIANgCIASgEIAQgDQAAgLgEgEQgEgFgMABQgLgBgFADQgGADgEAFIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHAEAIIACAJQAAAFgEADQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAEAEQAFADAJAAQAHABAIgEQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_1002.setTransform(32.3,189.9);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDAEQgDADgDAFIgDANIgBASIAAAVQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1003.setTransform(2.9,189.9);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgLgEgAgOgcQgGAFgEAHQgEAHAAAJQAAAKAEAHQAEAHAGAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNAAQgIAAgGADg");
	this.shape_1004.setTransform(-8.9,189.9);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDAEQgDADgDAFIgDANIgBASIAAAVQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1005.setTransform(-38.4,189.9);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEAAADADQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_1006.setTransform(-55.5,189.9);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgCQgGAFgFAEQgGAEgGABQgGADgIAAQgKAAgIgFQgKgDgGgIQgGgHgEgJQgDgJAAgLQAAgXANgNQANgNAVAAQAMAAAIAEQAJADAIAIIAAglQAAgHAEgEQADgFAHAAQAGABAEADQADAEAAAHIAABtQAAAHgDADQgFAFgFAAQgGAAgEgFgAgNgIQgGADgEAGQgDAIAAAJQAAAKADAIQAEAGAGAEQAHAEAGAAQAIAAAGgEQAGgDAEgHQADgHAAgLQAAgKgDgHQgEgGgGgEQgGgEgIAAQgHABgGAEg");
	this.shape_1007.setTransform(-68.9,188.1);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#660000").s().p("AgbAvQgKgFgGgFQgFgHAAgGQAAgEADgDQAEgDAEAAQAFAAACACIAFAGQAEAGAHAEQAGACAKAAQAIAAAFgCQAGgEAAgFQAAgGgGgDQgFgDgNgDQgOgDgKgDQgJgDgFgGQgGgGAAgIQAAgIAFgGQAGgHAJgEQALgEANAAQALAAAIACQAJACAHAEQAFADAEAEQACAEAAAEQABAEgEADQgEADgFAAQgFAAgDgDIgHgGQgDgDgFgCQgEgDgHAAQgIAAgEADQgGADAAAEQABAEADACIALAFIAQAEQAOADAIADQAIADAEAGQAFAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgPAAgLgEg");
	this.shape_1008.setTransform(-86.5,189.9);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEAAADADQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_1009.setTransform(-98.6,189.9);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#660000").s().p("AgvBDQgGgCAAgGQAAgFADgCQADgCAGAAIAEAAIAFABQAFAAADgCQACgBADgEIAFgIIADgGIgkhMQgDgIAAgCIACgHQACgCADgBQADgDAEAAQAGAAADAEQAEADACAHIAXA9IAXg5IAFgLQACgDADgCQACgCAFAAIAGACQADACACACIABAGIgBAEIgDAHIglBUQgFALgEAHQgEAHgHADQgIADgNABQgNgBgGgCg");
	this.shape_1010.setTransform(-110.6,191.8);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEAAADADQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_1011.setTransform(-122.1,189.9);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#660000").s().p("AgbAvQgKgFgGgFQgFgHAAgGQAAgEADgDQAEgDAEAAQAFAAACACIAFAGQAEAGAHAEQAGACAKAAQAIAAAFgCQAGgEAAgFQAAgGgGgDQgFgDgNgDQgOgDgKgDQgJgDgFgGQgGgGAAgIQAAgIAFgGQAGgHAJgEQALgEANAAQALAAAIACQAJACAHAEQAFADAEAEQACAEAAAEQABAEgEADQgEADgFAAQgFAAgDgDIgHgGQgDgDgFgCQgEgDgHAAQgIAAgEADQgGADAAAEQABAEADACIALAFIAQAEQAOADAIADQAIADAEAGQAFAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgPAAgLgEg");
	this.shape_1012.setTransform(-145.4,189.9);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAGgKAFQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAIgHQAHgGANgDIANgCIASgEIAQgDQAAgLgEgEQgEgFgNABQgKgBgFADQgGADgEAFIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAJAAANIAAAPIgBANQABAHADAIIACAJQAAAFgEADQgEADgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAFAEQAEADAIAAQAIABAIgEQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_1013.setTransform(-157.5,189.9);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEAAADADQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_1014.setTransform(-181.4,189.9);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgCQgGAFgFAEQgGAEgGABQgGADgIAAQgKAAgJgFQgJgDgGgIQgGgHgEgJQgDgJAAgLQAAgXANgNQAOgNAUAAQAMAAAIAEQAJADAIAIIAAglQAAgHAEgEQADgFAHAAQAGABAEADQADAEAAAHIAABtQAAAHgDADQgEAFgGAAQgGAAgEgFgAgNgIQgGADgEAGQgDAIAAAJQAAAKADAIQAEAGAHAEQAFAEAHAAQAIAAAGgEQAGgDAEgHQADgHAAgLQAAgKgDgHQgEgGgGgEQgGgEgIAAQgHABgGAEg");
	this.shape_1015.setTransform(-194.8,188.1);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDAEQgDADgDAFIgDANIgBASIAAAVQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1016.setTransform(-210.6,189.9);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAgvIgEAAQgGABgDgDQgEgDAAgEQAAgDAEgDQADgCAHgBIADAAIAAgPIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGABADACQADADAAADQAAAFgEADQgFABgIAAIgGAAIAAAtIABAJQAAADACADQACABAFABIAHgBIAHgBQADAAADACQADADAAAEQAAAGgIADQgIADgOAAQgMAAgHgEg");
	this.shape_1017.setTransform(-232.3,188.2);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAGgJAFQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAIgHQAHgGANgDIAOgCIARgEIARgDQgBgLgEgEQgEgFgNABQgKgBgFADQgGADgEAFIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHACAIIADAJQAAAFgEADQgFADgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAFAEQAFADAHAAQAIABAHgEQAHgDAEgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_1018.setTransform(-255.4,189.9);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgCQgFAFgGAEQgGAEgGABQgGADgIAAQgKAAgJgFQgIgDgHgIQgGgHgEgJQgDgJAAgLQAAgXAOgNQANgNAUAAQAMAAAJAEQAIADAIAIIAAglQAAgHAEgEQADgFAGAAQAHABADADQAEAEAAAHIAABtQAAAHgEADQgEAFgGAAQgFAAgEgFgAgNgIQgGADgDAGQgEAIAAAJQAAAKAEAIQADAGAHAEQAFAEAHAAQAHAAAHgEQAGgDAEgHQAEgHgBgLQABgKgEgHQgEgGgGgEQgHgEgHAAQgHABgGAEg");
	this.shape_1019.setTransform(-268.8,188.1);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEAAADADQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_1020.setTransform(-281.5,189.9);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDAEQgDADgDAFIgDANIgBASIAAAVQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1021.setTransform(-291.4,189.9);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("#660000").s().p("AgvBDQgGgDAAgGQAAgEADgDQADgCAGAAIAEABIAFAAQAFAAADgBQACgBADgDIAFgJIADgGIgkhNQgDgGAAgEIACgFQACgDADgCQADgCAEAAQAGABADADQAEAEACAGIAXA8IAXg4IAFgKQACgFADgBQACgBAFgBIAGACQADABACAEIABAEIgBAGIgDAGIglBUQgFAMgEAGQgEAGgHAEQgIADgNAAQgNAAgGgCg");
	this.shape_1022.setTransform(250.3,167.6);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgcQgGAFgEAGQgDAIgBAJQABAKADAHQAEAHAGAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgHAAgHADg");
	this.shape_1023.setTransform(223.5,165.8);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgFAHgGADQgGADgHACQgFACgHAAQgLAAgIgDQgJgEgHgHQgGgIgDgJQgEgKAAgKQAAgXANgNQANgNAWAAQALAAAIADQAJAFAIAHIAAglQAAgHADgFQAEgDAGAAQAHAAAEADQADADAAAIIAABtQAAAHgDAEQgFADgGAAQgFAAgEgDgAgNgIQgHADgDAHQgDAGAAALQAAAJADAIQAEAGAGAFQAHADAGAAQAHAAAHgDQAGgEAEgHQADgHABgKQgBgKgDgIQgEgGgGgEQgHgDgHgBQgHAAgGAFg");
	this.shape_1024.setTransform(209.9,163.9);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#660000").s().p("AAgAvQgDgDgGgIQgKAIgJADQgJAEgMAAQgLAAgJgEQgIgEgFgHQgEgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgEIAQgDQAAgKgEgFQgEgFgMAAQgKAAgGADQgFADgEAFIgGAHQgBACgGAAQgFAAgDgDQgEgCAAgFQAAgGAGgHQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHADAIIADAKQAAADgEADQgFAEgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAFAEAFQAGAEAIgBQAHAAAHgDQAIgDADgFQADgGAAgNIAAgEIgRAFg");
	this.shape_1025.setTransform(197.2,165.8);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("#660000").s().p("AAaAvQgDgEAAgIIAAgoQAAgNgFgGQgEgHgLABQgHAAgGADQgHAEgDAHQgBAGAAAPIAAAeQAAAIgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgDQAEgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAIgJAJgEQAHgEAMAAQALAAAJAEQAJAFAFAHQACAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_1026.setTransform(184.4,165.8);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADADAAAEQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_1027.setTransform(162.2,165.8);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("#660000").s().p("AgEBEIgJgDIgHgGIgIgHIAAADQAAAHgDAEQgEADgGAAQgHAAgDgDQgEgEAAgHIAAhsQAAgHAEgFQADgDAHAAQAGAAAEADQADAEAAAHIAAAmQAJgHAHgEQAJgEALAAQAOAAALAGQALAGAGALQAGAKAAAQQAAALgEAKQgDAJgGAHQgGAHgJAEQgJADgLAAQgHAAgFgBgAgMgIQgHADgEAHQgEAHAAAKQABAPAHAIQAIAIAMAAQAKAAAJgIQAHgJAAgOQAAgLgDgGQgEgHgFgDQgGgFgIAAQgIAAgFAFg");
	this.shape_1028.setTransform(149.4,163.9);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgcQgHAFgDAGQgDAIAAAJQAAAKADAHQADAHAHAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgIAAgGADg");
	this.shape_1029.setTransform(136,165.8);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("#660000").s().p("AgbBCQgMgEgGgGQgGgFAAgGQAAgFADgDQAEgCAFAAQAGgBAFAFIAFAFIAFAEIAHADIAKABQAKAAAGgDQAGgCADgGQACgEABgGIAAgSQgGAJgJAEQgJAEgLAAQgOAAgLgHQgKgGgGgMQgGgKAAgPQAAgLAEgKQADgJAHgGQAGgGAJgDQAIgDAKAAQALAAAJAEQAJAEAIAJIAAgDQAAgHAEgEQADgDAGgBQAIAAADAGQADAEAAAJIAABHQAAANgDAJQgDAJgHAGQgHAFgLADQgKADgQAAQgOAAgMgDgAgTgqQgHAIAAAQQAAAPAHAGQAIAJALgBQAHAAAHgDQAGgEAEgFQAEgHAAgJQAAgQgIgIQgIgJgMAAQgLAAgIAIg");
	this.shape_1030.setTransform(123,167.6);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#660000").s().p("AgOAaQAAAAgBgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgFAFgCQALgFAAgKQgGABgFgDQgFgEAAgGQAAgHAFgDQAFgFAGAAQAFABAEACQAEACACAFQACAEAAAIQAAAHgEAIQgEAJgHAEQgFAFgFgBQgEAAgCgBg");
	this.shape_1031.setTransform(107.9,170.8);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgcQgGAFgEAGQgDAIAAAJQAAAKADAHQAEAHAGAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgHAAgHADg");
	this.shape_1032.setTransform(98.8,165.8);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgGAHgFADQgGADgGACQgGACgIAAQgKAAgJgDQgJgEgGgHQgGgIgEgJQgDgKAAgKQAAgXANgNQAOgNAUAAQAMAAAJADQAIAFAIAHIAAglQAAgHAEgFQADgDAHAAQAGAAADADQAEADAAAIIAABtQAAAHgEAEQgEADgFAAQgGAAgEgDgAgNgIQgGADgDAHQgEAGAAALQAAAJAEAIQADAGAHAFQAFADAHAAQAIAAAGgDQAGgEAEgHQAEgHgBgKQABgKgEgIQgEgGgGgEQgGgDgIgBQgHAAgGAFg");
	this.shape_1033.setTransform(85.2,163.9);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f("#660000").s().p("AAhAvQgFgDgEgIQgLAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAIgIQAHgGANgCIAOgDIARgEIAQgDQAAgKgEgFQgEgFgNAAQgKAAgFADQgFADgFAFIgFAHQgBACgGAAQgFAAgDgDQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHADAIIACAKQAAADgEADQgEAEgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAFAFAFQAFAEAHgBQAIAAAIgDQAGgDAEgFQADgGAAgNIAAgEIgSAFg");
	this.shape_1034.setTransform(72.5,165.8);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAguIgEAAQgGgBgDgCQgEgCAAgEQAAgFAEgCQADgDAHABIADAAIAAgQIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGgBADADQADACAAAFQAAAEgEADQgFACgIAAIgGAAIAAAtIABAJQAAACACACQACADAFAAIAHgBIAHgBQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_1035.setTransform(62.8,164.1);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgCIgLAJQgGAEgGACQgGABgJABQgKgBgIgDQgIgEgEgHQgGgHAAgPIAAgxQAAgHAEgEQADgEAHAAQAHAAAEAEQADAEAAAHIAAAnQAAAJACAFQACAHAEADQAFAEAHAAQAHAAAFgFQAHgDADgHQACgEAAgRIAAgfQABgHAEgEQADgEAHAAQAGAAAEAEQAEAEAAAHIAABHQAAAIgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_1036.setTransform(52.2,165.8);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#660000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgHADgEQAFgDAFgBQAHABADADQAEAEAAAHIAAADQAJgJAIgEQAJgEAKAAQANAAALAGQALAGAHALQAGALAAARQAAALgDAIQgEAKgHAHQgGAGgKAEQgIAEgKgBQgLABgJgFQgJgEgHgJIAAAmQAAAQgOAAQgHABgDgFgAgSgqQgJAIABARQgBAPAJAGQAHAJALAAQAIAAAGgDQAGgFAEgFQADgIAAgKQAAgKgDgHQgEgHgFgEQgHgDgIgBQgKAAgIAIg");
	this.shape_1037.setTransform(39.2,167.6);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgHAEgEQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEAEAAAGQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_1038.setTransform(29.3,164);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgGAHgFADQgGADgHACQgFACgHAAQgLAAgJgDQgIgEgHgHQgGgIgDgJQgEgKAAgKQAAgXAOgNQANgNAVAAQALAAAJADQAIAFAIAHIAAglQAAgHADgFQAEgDAGAAQAHAAADADQAEADAAAIIAABtQAAAHgEAEQgDADgHAAQgFAAgEgDgAgNgIQgGADgDAHQgEAGAAALQAAAJAEAIQADAGAGAFQAGADAHAAQAIAAAGgDQAGgEAEgHQAEgHAAgKQAAgKgEgIQgEgGgGgEQgGgDgIgBQgHAAgGAFg");
	this.shape_1039.setTransform(19.4,163.9);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADADAAAEQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_1040.setTransform(1.3,165.8);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgCIgKAJQgHAEgGACQgGABgIABQgLgBgIgDQgIgEgFgHQgFgHAAgPIAAgxQAAgHAEgEQAEgEAGAAQAGAAAEAEQAFAEAAAHIAAAnQAAAJABAFQACAHAFADQAEAEAHAAQAHAAAFgFQAHgDADgHQADgEAAgRIAAgfQAAgHADgEQAEgEAHAAQAGAAAEAEQAEAEAAAHIAABHQAAAIgEADQgDAEgHAAQgFAAgEgEg");
	this.shape_1041.setTransform(-11.5,165.8);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f("#660000").s().p("AgPBCQgEgEAAgIIAAhBIgIAAQgHAAgDgDQgEgCAAgEQAAgJAPAAIAHAAIAAgIQAAgLADgHQADgHAJgEQAHgCAOAAQAZAAAAAKQAAAEgDACQgCACgEAAIgGAAIgHAAQgHAAgDADQgCAFAAAHIAAAGIAHAAQARAAAAAIQAAAHgFABQgEACgIAAIgHAAIAABBQAAAIgEAEQgEADgFAAQgGAAgEgDg");
	this.shape_1042.setTransform(-21.2,163.9);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("#660000").s().p("AgOAaQAAAAgBgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgFAFgCQALgFAAgKQgGABgFgDQgFgEAAgGQAAgHAFgDQAFgFAGAAQAFABAEACQAEACACAFQACAEAAAIQAAAHgEAIQgEAJgHAEQgFAFgFgBQgEAAgCgBg");
	this.shape_1043.setTransform(-33.9,170.8);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgcQgGAFgEAGQgDAIgBAJQABAKADAHQAEAHAGAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgHAAgHADg");
	this.shape_1044.setTransform(-42.9,165.8);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("#660000").s().p("AAaAvQgDgEAAgIIAAgoQAAgNgFgGQgEgHgLABQgHAAgGADQgHAEgDAHQgBAGAAAPIAAAeQAAAIgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgDQAEgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAIgJAJgEQAHgEAMAAQALAAAJAEQAJAFAFAHQACAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_1045.setTransform(-55.9,165.8);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f("#660000").s().p("AAhAvQgFgDgEgIQgLAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAIgIQAHgGANgCIAOgDIARgEIARgDQgBgKgEgFQgEgFgNAAQgKAAgFADQgGADgEAFIgFAHQgBACgGAAQgFAAgDgDQgEgCAAgFQAAgGAFgHQAGgGALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAKQAAADgEADQgFAEgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAFAFAFQAFAEAHgBQAIAAAHgDQAHgDAEgFQAEgGAAgNIAAgEIgSAFg");
	this.shape_1046.setTransform(-68.7,165.8);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgHAEgEQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEAEAAAGQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_1047.setTransform(-90.6,164);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f("#660000").s().p("AAdAxQgEgDgEgFIgVgbIgUAbIgIAIQgDACgFAAQgFAAgFgDQgDgDAAgEQAAgEAFgIIAageIgWgbQgHgIAAgEQABgEADgDQADgDAHAAQAFAAADADIAHAIIASAVIASgVIAIgIQADgDAFAAQAGAAADADQAEADAAAEIgBAFIgFAHIgXAbIAaAeQAGAJAAADQAAAEgDADQgFADgFAAQgFAAgDgCg");
	this.shape_1048.setTransform(-99.1,165.8);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADADAAAEQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_1049.setTransform(-110.8,165.8);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f("#660000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgCgEgDgEQgEgEgGABQgGAAgFACQgFAEgDAFQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgEgEQgFgEAAgIIAAgnIgBgOQAAgFgDgEQgEgEgGABQgPgBgEAJQgEAJgBAOIAAAiQAAAIgDAEQgFAEgGAAQgGAAgFgEQgEgEAAgIIAAhHQAAgGAEgEQAEgEAFAAQAHAAADAEQAFADAAAGIAAACQAHgHAJgEQAIgDAKAAQALAAAIADQAGAEAFAHQAIgHAIgEQAIgDALAAQALAAAIADQAJAEAEAIQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgHAAgEgEg");
	this.shape_1050.setTransform(-126.6,165.8);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("#660000").s().p("AgJBCQgEgEAAgIIAAhrQAAgIADgEQAEgDAGAAQAGAAAEADQAEAEAAAIIAABrQAAAIgEAEQgEADgGAAQgGAAgDgDg");
	this.shape_1051.setTransform(-144.3,163.9);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f("#660000").s().p("AAgAvQgEgDgFgIQgKAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIAOgDIARgEIARgDQgBgKgEgFQgEgFgNAAQgJAAgGADQgFADgEAFIgGAHQgCACgFAAQgFAAgDgDQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAKQAAADgEADQgFAEgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAFAEAFQAFAEAIgBQAIAAAHgDQAIgDADgFQADgGABgNIAAgEIgSAFg");
	this.shape_1052.setTransform(-153.5,165.8);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgBgEAAQgHAAgDACQgDADgDAGIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1053.setTransform(-163.4,165.8);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADADAAAEQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_1054.setTransform(-175.1,165.8);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("#660000").s().p("AgEBEIgKgDIgGgGIgIgHIAAADQAAAHgEAEQgEADgGAAQgFAAgEgDQgEgEAAgHIAAhsQAAgHAEgFQADgDAGAAQAHAAADADQAEAEAAAHIAAAmQAJgHAHgEQAJgEAMAAQAOAAAKAGQALAGAGALQAGAKAAAQQAAALgDAKQgEAJgGAHQgGAHgJAEQgJADgLAAQgGAAgGgBgAgNgIQgGADgEAHQgEAHABAKQAAAPAIAIQAHAIAMAAQAKAAAJgIQAHgJAAgOQAAgLgDgGQgEgHgFgDQgGgFgIAAQgHAAgHAFg");
	this.shape_1055.setTransform(-187.9,163.9);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgHAEgEQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEAEAAAGQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_1056.setTransform(-197.8,164);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("#660000").s().p("AgJBCQgEgEAAgIIAAhrQAAgIADgEQAEgDAGAAQAGAAAEADQAEAEAAAIIAABrQAAAIgEAEQgEADgGAAQgGAAgDgDg");
	this.shape_1057.setTransform(-203.6,163.9);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgcQgHAFgDAGQgEAIABAJQgBAKAEAHQADAHAHAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgIAAgGADg");
	this.shape_1058.setTransform(-218.3,165.8);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgHAEgEQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEAEAAAGQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_1059.setTransform(-240.3,164);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAguIgEAAQgGgBgDgCQgEgCAAgEQAAgFAEgCQADgDAHABIADAAIAAgQIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGgBADADQADACAAAFQAAAEgEADQgFACgIAAIgGAAIAAAtIABAJQAAACACACQACADAFAAIAHgBIAHgBQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_1060.setTransform(-246.7,164.1);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#660000").s().p("AgJBCQgEgEAAgIIAAhrQAAgIADgEQAEgDAGAAQAGAAAEADQAEAEAAAIIAABrQAAAIgEAEQgEADgGAAQgGAAgDgDg");
	this.shape_1061.setTransform(-259.5,163.9);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgcQgGAFgEAGQgDAIAAAJQAAAKADAHQAEAHAGAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgHAAgHADg");
	this.shape_1062.setTransform(-268.9,165.8);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#660000").s().p("Ag2BAQgDgEAAgIIAAhnQAAgJAEgEQAEgDALAAIAnAAQARAAAKACQAKACAGAGQAIAFADAIQADAHABAKQAAAUgPAKQgOAKgdAAIgcAAIAAAmQABAJgFAEQgEAEgHAAQgHAAgFgEgAgbgGIAWAAQAJAAAIgCQAHgCAEgFQAEgEAAgIQAAgJgGgFQgHgGgTAAIgWAAg");
	this.shape_1063.setTransform(-281.3,164);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f("#660000").s().p("AgZBVIAFgJIAJgSQAFgMADgPQADgPAAgQQAAgPgDgPQgEgPgEgMIgJgSIgFgJQAAgDAFAAQAIAAAEADQAEACAFAKIALARQAFAJADAJIAFASQABAJAAAKQAAAUgGASQgGAQgNATQgFAJgEADQgFADgHAAQgFAAAAgDg");
	this.shape_1064.setTransform(132.7,118.8);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#660000").s().p("AgcA9QgMgHgHgPQgHgPAAgVQAAgQAEgOQAEgOAIgJQAIgJAKgEQALgFANAAQAOAAAKAFQAKAEAFAHQAGAHAAAGQAAAEgEADQgDADgFAAQgEAAgEgCQgEgDgCgEQgCgGgFgDQgGgDgHAAQgEAAgGADQgFACgEAFQgIAKgBAZQAHgIAJgDQAIgEAJAAQAKAAAJADQAIAEAHAGQAGAGADAHQAEAIAAAJQAAANgHAKQgHALgMAGQgMAGgPAAQgRAAgNgIgAgJAAQgGADgEAFQgDAGAAAIQAAAMAHAIQAHAJAKAAQALAAAHgIQAHgIAAgMQAAgIgDgGQgEgGgFgDQgGgDgHAAQgFAAgGADg");
	this.shape_1065.setTransform(110.2,117);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f("#660000").s().p("AgdBAQgLgGgHgJQgHgKABgLQAAgZAbgIQgWgIAAgTQAAgKAGgIQAFgIAMgFQALgEAOAAQAMgBAJADQAJADAHAFQAGAFADAGQADAGAAAIQAAAIgFAIQgFAGgLAFQAJADAGAEQAFAFAEAGQACAHABAIQAAALgHAKQgGAJgNAGQgMAEgQAAQgRAAgNgEgAgRAKQgIAGABALQAAAIADAFQADAFAGADQAGADAGAAQAIAAAFgDQAHgDACgFQAEgGAAgHQAAgHgEgGQgDgFgGgDQgGgCgHAAQgKgBgHAHgAgPgtQgGAFAAAJQAAAHAGAGQAHAFAIAAQAFAAAEgBQAEgBADgDQADgDABgDQACgDAAgEQAAgFgDgFQgDgEgFgDQgEgCgHAAQgJAAgGAFg");
	this.shape_1066.setTransform(97.4,117);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("#660000").s().p("AgQALQgHAAgEgDQgEgDAAgFQAAgEAEgDQAEgDAHAAIAhAAQAHAAAEADQAEADAAAEQAAAFgEADQgDADgIAAg");
	this.shape_1067.setTransform(74.9,118.8);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f("#660000").s().p("AgXBBQgKgEgHgGQgGgGgDgGQgEgHAAgEQAAgFAEgDQAEgEAGAAIAGACIADADQAGANAGAGQAGAHALAAQAGAAAGgDQAGgDAEgGQAEgFAAgHQAAgLgHgGQgHgGgLAAIgGAAIgGABQgFAAgEgDQgDgCAAgEQAAgEAEgDQAEgDAHAAIAFAAQAIAAAHgFQAHgFAAgJQAAgHgFgFQgGgFgIAAQgHAAgEABQgEACgDADIgEAGIgEAIIgEADIgGABQgEAAgEgDQgDgDAAgFQAAgFADgFQADgFAHgFQAGgFAJgDQAKgDALAAQAKAAAIADQAIACAHAFQAGAEADAGQADAGAAAHQAAAKgEAGQgFAHgJAGQAJAEAFAEQAGAFADAGQADAGAAAHQAAAIgEAIQgEAHgIAHQgHAGgKADQgKAEgMAAQgMAAgKgEg");
	this.shape_1068.setTransform(65,117);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("#660000").s().p("AANBBQgEgEAAgHIAAhTQgZASgKAAQgEAAgDgDQgEgDAAgEQAAgFAEgCIALgFQANgGAIgFQAGgGAGgHIAIgJQACgCAFAAQAFAAADAEQAEAEAAAGIAABoQAAATgPAAQgGAAgEgEg");
	this.shape_1069.setTransform(51,117);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f("#660000").s().p("AgdBAQgMgGgGgJQgHgKAAgLQAAgZAbgIQgVgIAAgTQAAgKAGgIQAFgIAMgFQAKgEAPAAQAMgBAJADQAKADAGAFQAGAFADAGQADAGAAAIQAAAIgFAIQgGAGgKAFQAJADAGAEQAGAFADAGQADAHAAAIQgBALgFAKQgHAJgMAGQgNAEgQAAQgRAAgNgEgAgSAKQgGAGAAALQgBAIAEAFQADAFAGADQAGADAGAAQAIAAAGgDQAFgDADgFQAEgGAAgHQAAgHgEgGQgCgFgHgDQgGgCgHAAQgKgBgIAHgAgPgtQgGAFAAAJQAAAHAGAGQAHAFAIAAQAFAAAEgBQAEgBADgDQADgDACgDQABgDAAgEQAAgFgDgFQgDgEgEgDQgGgCgGAAQgJAAgGAFg");
	this.shape_1070.setTransform(39.6,117);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("#660000").s().p("AANBBQgEgEAAgHIAAhTQgZASgKAAQgEAAgDgDQgEgDAAgEQAAgFAEgCIALgFQANgGAIgFQAGgGAGgHIAIgJQACgCAFAAQAFAAADAEQAEAEAAAGIAABoQAAATgPAAQgGAAgEgEg");
	this.shape_1071.setTransform(25.7,117);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f("#660000").s().p("AANBXIgGgEIgHgKQgJgMgFgLQgGgMgCgMQgDgMAAgOQAAgNACgMQADgMAGgMQAFgLAJgMIAHgKQADgDADgBIAIgBQAFAAAAADIgFAJIgJATQgEALgEAPQgDAPAAAPQAAAQADAPQAEAPAEALIAJATIAFAJQAAADgFAAIgIgBg");
	this.shape_1072.setTransform(17,118.8);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgLgEgAgOgcQgHAFgDAHQgEAHABAJQgBAKAEAHQADAHAHAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNAAQgHAAgHADg");
	this.shape_1073.setTransform(1.2,118.8);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f("#660000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgCgFgDgDQgDgDgIAAQgFAAgFACQgFAEgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgGAAgEgEQgDgEAAgIIAAgnIgCgPQAAgFgDgDQgEgDgGAAQgOAAgFAIQgFAIAAAQIAAAhQAAAIgDAEQgEAEgHAAQgGAAgEgEQgFgEAAgIIAAhHQAAgGAEgEQADgEAHAAQAFAAAFADQADAEAAAGIAAADQAIgJAJgDQAIgDAKAAQALAAAHADQAIAEAEAIQAIgIAIgEQAIgDAKAAQAMAAAIADQAJAFAEAHQAEAHAAAOIAAAwQAAAIgEAEQgEAEgHAAQgGAAgFgEg");
	this.shape_1074.setTransform(-28.2,118.8);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAGgKAFQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAIgHQAHgGANgDIAOgCIARgEIAQgDQAAgLgEgEQgEgFgNABQgKgBgFADQgFADgFAFIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHADAIIACAJQAAAFgEADQgEADgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAFAEQAFADAHAAQAIABAIgEQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_1075.setTransform(-44,118.8);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f("#660000").s().p("AgfBAQgOgFgKgJQgJgKgFgNQgFgNAAgOQAAgPAFgNQAFgNAKgJQAJgJAOgEQAOgGARAAQAXAAASAJQARAIAJAQQAIAPAAAVQAAAQgEAMQgFAMgKAKQgKAKgOAEQgOAFgSABQgRgBgOgFgAgRgsQgIADgFAGQgGAGgDAJQgEAJAAALQAAALAEAJQADAJAGAHQAGAFAIAEQAIACAIAAQAMAAAKgEQAKgGAGgKQAGgMAAgPQAAgOgGgLQgFgLgKgGQgKgFgNAAQgJAAgIADg");
	this.shape_1076.setTransform(-71.6,117);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgCgEAAQgHAAgDAEQgDADgDAFIgDANIgBASIAAAVQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1077.setTransform(-89.4,118.8);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgKgEgAgOgcQgHAFgDAHQgEAHAAAJQAAAKAEAHQADAHAHAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNAAQgIAAgGADg");
	this.shape_1078.setTransform(-101.2,118.8);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#660000").s().p("AAWA2IAAgqQAAgMgDgGQgFgGgLAAQgGAAgHAEQgGAEgDAFQgCAGAAAOIAAAhQAAAIgEADQgEAFgGAAQgPAAAAgQIAAhrQAAgIAEgDQADgFAIAAQAGAAAEAFQAEADAAAIIAAAlQAFgGAFgDQAGgDAFgBQAGgDAHAAQALAAAJAFQAIAEAFAHQADAFABAFIABAMIAAAwQAAAIgEADQgEAFgGAAQgPAAAAgQg");
	this.shape_1079.setTransform(-114.2,117);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f("#660000").s().p("AgJBBQgEgDAAgIIAAhrQAAgIADgDQAEgFAGAAQAGAAAEAFQAEADAAAIIAABrQAAAIgEADQgEAFgGAAQgGAAgDgFg");
	this.shape_1080.setTransform(-135.8,117);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgKQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGADQgGACgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEAAQAEAAADADQADACAAADQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgGgLAAQgKAAgHAGg");
	this.shape_1081.setTransform(-145,118.8);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f("#660000").s().p("AAxBAQgDgEAAgHIAAhcIgZBVIgEAMQgCAEgEADQgEADgHAAQgEAAgEgCQgEgCgCgDIgDgHIgDgIIgYhVIAABcQAAAHgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgHIAAhqQAAgIAFgDQAFgDAKAAIAJAAIAMABQAFABACAEIADALIAWBJIAWhJIAFgLQABgEAEgBIANgBIAKAAQAJAAAFADQAFADAAAIIAABqQAAAHgEAEQgEAEgHAAQgFAAgFgEg");
	this.shape_1082.setTransform(-160.3,117.1);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgcQgGAEgEAHQgDAIgBAJQABAKADAHQAEAHAGAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgHAAgHADg");
	this.shape_1083.setTransform(213.6,212.7);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f("#660000").s().p("AAhAvQgFgDgEgIQgLAHgJAFQgJADgMAAQgLAAgIgEQgJgEgEgHQgFgGAAgHQAAgKAIgIQAHgGANgCIAOgDIARgEIARgDQgBgLgEgEQgEgFgNABQgKAAgFACQgGADgEAFIgFAHQgBACgGAAQgFAAgDgDQgEgDAAgEQAAgGAFgHQAGgGALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAJAAAOIAAAOIAAANQAAAHADAIIACAKQAAADgEAEQgFADgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAGAFAEQAFADAHAAQAIAAAIgDQAGgDAEgFQAEgGAAgNIAAgEIgSAFg");
	this.shape_1084.setTransform(187.8,212.7);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#660000").s().p("AAdAxQgEgDgEgFIgVgbIgUAbIgIAIQgDACgFAAQgFAAgFgDQgDgDAAgEQAAgEAFgHIAaggIgWgbQgHgHAAgEQABgEADgDQADgDAHAAQAFAAADADIAHAIIASAVIASgVIAIgIQADgDAFAAQAGAAADADQAEADAAAEIgBAFIgFAGIgXAbIAaAgQAGAHAAAEQAAAEgDADQgFADgFAAQgFAAgDgCg");
	this.shape_1085.setTransform(157.4,212.7);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f("#660000").s().p("AAxBAQgEgEABgHIAAhcIgZBVIgEAMQgBAEgFADQgEADgHAAQgEAAgEgCQgEgCgCgDIgDgHIgDgIIgYhVIAABcQAAAHgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgHIAAhqQAAgIAFgDQAFgDAKAAIAJAAIAMABQAFABACAEIADALIAWBJIAWhJIAFgLQABgEAFgBIAMgBIAJAAQAKAAAFADQAFADAAAIIAABqQAAAHgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_1086.setTransform(130.5,210.9);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#660000").s().p("AAgAvQgEgDgFgIQgKAHgJAFQgJADgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgEIARgDQgBgLgEgEQgEgFgMABQgKAAgGACQgFADgEAFIgGAHQgCACgFAAQgFAAgDgDQgEgDAAgEQAAgGAGgHQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAJAAAOIAAAOIAAANQAAAHACAIIADAKQAAADgEAEQgFADgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAGAEAEQAFADAJAAQAHAAAHgDQAIgDADgFQADgGABgNIAAgEIgSAFg");
	this.shape_1087.setTransform(109.8,212.7);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f("#660000").s().p("AgbAuQgKgDgGgHQgFgGAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAGQAEAGAHAEQAGACAKAAQAIAAAFgCQAGgEAAgEQAAgHgGgDQgFgDgNgDQgOgDgKgEQgJgCgFgGQgGgGAAgIQAAgIAFgGQAGgHAJgEQAKgEAOAAQALAAAIACQAKACAGADQAFAEADAEQADAEAAAEQABAEgEADQgEADgFAAQgEAAgEgDIgHgGQgDgDgFgCQgEgDgHAAQgHAAgFADQgGADAAAEQABAEADACIALAFIAQAEQANADAJAEQAIACAEAGQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgLgFg");
	this.shape_1088.setTransform(90,212.7);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#660000").s().p("AAhAvQgFgDgEgIQgLAHgJAFQgJADgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAIgIQAHgGANgCIAOgDIARgEIARgDQgBgLgEgEQgEgFgNABQgKAAgFACQgGADgEAFIgFAHQgBACgGAAQgFAAgDgDQgEgDAAgEQAAgGAFgHQAGgGALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAJAAAOIAAAOIAAANQAAAHACAIIADAKQAAADgEAEQgFADgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAGAFAEQAFADAHAAQAIAAAHgDQAHgDAEgFQAEgGAAgNIAAgEIgSAFg");
	this.shape_1089.setTransform(66.3,212.7);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f("#660000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgCgFgDgDQgDgEgIABQgFAAgFACQgFAEgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgGAAgEgEQgDgEAAgIIAAgnIgCgPQAAgEgDgEQgEgEgGABQgOAAgFAIQgFAJAAAOIAAAiQAAAIgDAEQgEAEgHAAQgGAAgEgEQgFgEAAgIIAAhHQAAgGAEgEQADgEAHAAQAFAAAFADQADAEAAAGIAAACQAIgHAJgEQAIgEAKABQALgBAHAEQAIAEAEAHQAIgHAIgEQAIgEAKABQAMAAAIADQAJAEAEAIQAEAGAAAPIAAAwQAAAIgEAEQgEAEgHAAQgGAAgFgEg");
	this.shape_1090.setTransform(29,212.7);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgcQgGAEgEAHQgEAIAAAJQAAAKAEAHQAEAHAGAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgIAAgGADg");
	this.shape_1091.setTransform(-1.7,212.7);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f("#660000").s().p("AgWBUQgGgDgBgGQAAgEAEgDQADgDAEAAIADAAIADAAIAFABQAFAAACgEQABgEAAgKIAAhTQAAgIAEgDQAEgFAGAAQAHAAADAFQAFADAAAIIAABTIgBAPIgCAJQgHAQgXAAQgMgBgHgDgAAFhBQgEgEAAgFQAAgFAEgEQAEgDAGgBQAGAAAEADQAFAEAAAGQAAAFgFAEQgEADgGAAQgGAAgEgDg");
	this.shape_1092.setTransform(-12.6,212.7);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#660000").s().p("AgOAaQAAAAgBgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgFAFgCQALgFAAgKQgGAAgFgCQgFgEAAgGQAAgHAFgDQAFgFAGAAQAFAAAEADQAEADACAEQACAEAAAIQAAAHgEAJQgEAHgHAFQgFAFgFgBQgEAAgCgBg");
	this.shape_1093.setTransform(-54.3,217.7);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f("#660000").s().p("AgvBDQgGgCAAgHQAAgEADgCQADgDAGAAIAEABIAFAAQAFAAADgBQACgBADgDIAFgJIADgGIgkhMQgDgHAAgEIACgFQACgDADgCQADgCAEAAQAGABADADQAEAEACAGIAXA8IAXg4IAFgKQACgEADgCQACgBAFgBIAGACQADACACADIABAEIgBAGIgDAGIglBUQgFALgEAHQgEAGgHAEQgIAEgNAAQgNAAgGgDg");
	this.shape_1094.setTransform(-62.1,214.5);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#660000").s().p("AAbBDIgHgJIgYglIgQAOIAAAUQAAAGgEAEQgFAEgFAAQgHAAgEgEQgDgDAAgIIAAhpQAAgJADgEQAEgEAHgBQAGAAAEAEQAEAFAAAHIAAA7IAfgcIAJgIQADgCAFAAQAFAAAEADQADADAAAFQAAAGgLAJIgPALIAdAoIAFAHIABAEQAAAGgEAEQgDADgGAAQgGAAgDgCg");
	this.shape_1095.setTransform(-72.9,210.8);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f("#660000").s().p("AgaAuQgLgDgGgHQgFgGAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAGQAFAGAGAEQAGACAKAAQAIAAAFgCQAGgEAAgEQAAgHgGgDQgFgDgNgDQgPgDgIgEQgKgCgFgGQgGgGAAgIQAAgIAFgGQAGgHAKgEQAJgEAOAAQALAAAIACQAKACAFADQAGAEADAEQADAEAAAEQAAAEgDADQgEADgGAAQgDAAgEgDIgHgGQgDgDgEgCQgFgDgHAAQgHAAgFADQgGADAAAEQABAEADACIALAFIAQAEQANADAJAEQAIACAFAGQAEAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgKgFg");
	this.shape_1096.setTransform(-85.4,212.7);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgcQgHAEgDAHQgEAIAAAJQAAAKAEAHQADAHAHAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgIAAgGADg");
	this.shape_1097.setTransform(-97.6,212.7);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f("#660000").s().p("AAhAvQgEgDgFgIQgLAHgJAFQgJADgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIAOgDIARgEIARgDQgBgLgEgEQgEgFgNABQgJAAgGACQgFADgFAFIgFAHQgCACgFAAQgFAAgDgDQgEgDAAgEQAAgGAFgHQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAJAAAOIAAAOIAAANQAAAHACAIIADAKQAAADgEAEQgFADgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAGAFAEQAFADAHAAQAIAAAHgDQAIgDADgFQAEgGAAgNIAAgEIgSAFg");
	this.shape_1098.setTransform(-137,212.7);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#660000").s().p("AgaAuQgMgDgFgHQgFgGAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAGQAEAGAHAEQAGACAJAAQAJAAAGgCQAFgEAAgEQAAgHgFgDQgHgDgLgDQgQgDgIgEQgKgCgGgGQgFgGAAgIQAAgIAFgGQAFgHALgEQAKgEAOAAQAJAAAKACQAIACAGADQAGAEADAEQAEAEAAAEQgBAEgDADQgDADgHAAQgEAAgDgDIgHgGQgDgDgEgCQgFgDgGAAQgJAAgFADQgEADAAAEQAAAEADACIAKAFIARAEQANADAJAEQAIACAFAGQAEAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgPAAgLgFg");
	this.shape_1099.setTransform(-195.3,212.7);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f("#660000").s().p("AgbAuQgKgDgGgHQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAACACIAFAGQAEAGAHAEQAGACAKAAQAIAAAFgCQAGgEAAgEQAAgHgGgDQgFgDgNgDQgOgDgKgEQgJgCgFgGQgGgGAAgIQAAgIAFgGQAGgHAJgEQALgEANAAQALAAAIACQAJACAHADQAFAEAEAEQACAEAAAEQABAEgEADQgEADgFAAQgFAAgDgDIgHgGQgDgDgFgCQgEgDgHAAQgIAAgEADQgGADAAAEQABAEADACIALAFIAQAEQAOADAIAEQAIACAEAGQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgLgFg");
	this.shape_1100.setTransform(-219.7,212.7);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#660000").s().p("AAhAvQgFgDgEgIQgLAHgKAFQgIADgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAIgIQAHgGANgCIANgDIASgEIAQgDQAAgLgEgEQgEgFgNABQgKAAgFACQgGADgEAFIgFAHQgBACgGAAQgFAAgDgDQgEgDAAgEQAAgGAFgHQAGgGALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAJAAAOIAAAOIgBANQABAHADAIIACAKQAAADgEAEQgEADgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAGAFAEQAEADAIAAQAIAAAIgDQAGgDAEgFQAEgGgBgNIAAgEIgSAFg");
	this.shape_1101.setTransform(-231.8,212.7);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgFAHgGADQgGAEgHACQgFABgHAAQgLAAgIgDQgJgFgHgHQgGgGgDgKQgEgKAAgLQAAgWAOgNQAMgNAWAAQALAAAJADQAIAFAIAHIAAglQAAgIADgEQAEgDAGAAQAHgBADAEQAEADAAAIIAABtQAAAHgEAEQgDADgHAAQgFAAgEgDgAgNgJQgHAEgDAHQgDAHAAAJQAAALADAGQAEAHAGAFQAHADAGAAQAIAAAGgDQAGgEAEgHQAEgHAAgLQAAgJgEgIQgEgGgGgEQgGgDgIAAQgHAAgGADg");
	this.shape_1102.setTransform(261.1,186.7);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#660000").s().p("AgWAvQgLgEgHgHQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgbQgGADgEAHQgDAIgBAJQABAKADAHQAEAIAGADQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgPgHgIQgIgJgNAAQgHAAgHAFg");
	this.shape_1103.setTransform(242.9,188.5);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f("#660000").s().p("AAhAvQgFgEgEgHQgLAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgIQAAgJAIgIQAHgGANgDIAOgCIARgDIARgFQgBgJgEgFQgEgEgNgBQgKABgFACQgGACgEAGIgFAHQgBABgGAAQgFAAgDgCQgEgDAAgEQAAgHAFgFQAGgHALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAJQAAAFgEACQgFAEgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAFAEQAFAFAHAAQAIgBAHgDQAHgDAEgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_1104.setTransform(222.9,188.5);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgvIgEAAQgGAAgDgDQgEgCAAgEQAAgEAEgDQADgCAHAAIADAAIAAgPIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGAAADACQADADAAAEQAAAEgEACQgFACgIABIgGAAIAAAtIABAJQAAADACABQACACAFAAIAHgBIAHAAQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_1105.setTransform(204.3,186.8);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f("#660000").s().p("AAgAvQgEgEgEgHQgLAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgIQAAgJAHgIQAIgGANgDIAOgCIARgDIARgFQgBgJgEgFQgEgEgNgBQgJABgGACQgFACgEAGIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAJQAAAFgEACQgFAEgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAFAEQAEAFAIAAQAIgBAHgDQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_1106.setTransform(188.5,188.5);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgvIgEAAQgGAAgDgDQgEgCAAgEQAAgEAEgDQADgCAHAAIADAAIAAgPIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGAAADACQADADAAAEQAAAEgEACQgFACgIABIgGAAIAAAtIABAJQAAADACABQACACAFAAIAHgBIAHAAQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_1107.setTransform(178.7,186.8);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f("#660000").s().p("AgbAuQgKgEgGgGQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAACACIAFAFQAFAHAGADQAGAEAKAAQAIAAAFgEQAGgDAAgEQAAgHgGgDQgFgDgMgDQgPgDgKgEQgJgCgFgGQgGgFAAgJQAAgIAFgGQAGgHAJgEQALgEAOAAQAKAAAIACQAJACAHADQAFAEAEAEQACAEAAAEQABAFgEACQgEADgFAAQgFAAgDgCIgHgHQgDgEgFgCQgEgCgGAAQgJAAgEADQgGADAAAEQABAEADADIALAEIAQAEQAOADAIAEQAIADAEAFQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgLgFg");
	this.shape_1108.setTransform(168.7,188.5);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f("#660000").s().p("AAbAvQgFgEAAgHIAAgpQAAgNgDgGQgEgHgMAAQgHABgGAEQgGAEgDAGQgDAGAAAOIAAAgQAAAHgDAEQgEAEgHAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAEAAADABIAFAGQACACAAAFIAAADQAHgJAJgDQAIgFAMAAQALAAAJAFQAJAEAFAHQACAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1109.setTransform(150.6,188.5);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgvIgEAAQgGAAgDgDQgEgCAAgEQAAgEAEgDQADgCAHAAIADAAIAAgPIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGAAADACQADADAAAEQAAAEgEACQgFACgIABIgGAAIAAAtIABAJQAAADACABQACACAFAAIAHgBIAHAAQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_1110.setTransform(116.4,186.8);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f("#660000").s().p("AgaAuQgLgEgGgGQgFgGAAgGQAAgEADgDQADgDAGAAQAEAAACACIAFAFQAFAHAGADQAGAEAKAAQAIAAAFgEQAGgDAAgEQAAgHgGgDQgGgDgMgDQgPgDgIgEQgKgCgFgGQgGgFAAgJQAAgIAFgGQAGgHAKgEQAJgEAOAAQAKAAAKACQAIACAGADQAGAEADAEQADAEABAEQAAAFgEACQgEADgGAAQgDAAgEgCIgHgHQgDgEgEgCQgFgCgHAAQgHAAgFADQgFADgBAEQAAAEAEADIALAEIAQAEQANADAJAEQAIADAFAFQAEAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgQAAgKgFg");
	this.shape_1111.setTransform(106.4,188.5);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f("#660000").s().p("AAhAvQgEgEgFgHQgLAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgIQAAgJAIgIQAHgGANgDIAOgCIARgDIARgFQgBgJgEgFQgEgEgNgBQgJABgGACQgFACgFAGIgFAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAJQAAAFgEACQgFAEgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAFAEQAFAFAHAAQAIgBAHgDQAIgDADgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_1112.setTransform(88.9,188.5);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgvIgEAAQgGAAgDgDQgEgCAAgEQAAgEAEgDQADgCAHAAIADAAIAAgPIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGAAADACQADADAAAEQAAAEgEACQgFACgIABIgGAAIAAAtIABAJQAAADACABQACACAFAAIAHgBIAHAAQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_1113.setTransform(79.2,186.8);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f("#660000").s().p("AgbAuQgLgEgFgGQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAFQAFAHAGADQAGAEAJAAQAJAAAGgEQAFgDAAgEQAAgHgFgDQgGgDgMgDQgPgDgKgEQgJgCgFgGQgGgFAAgJQAAgIAFgGQAFgHAKgEQALgEAOAAQAJAAAJACQAJACAHADQAFAEAEAEQACAEAAAEQAAAFgDACQgEADgFAAQgEAAgEgCIgHgHQgDgEgFgCQgEgCgGAAQgIAAgGADQgEADAAAEQAAAEADADIAKAEIARAEQAOADAIAEQAIADAEAFQAFAFAAAHQAAALgGAHQgFAHgMAEQgLAEgQAAQgOAAgMgFg");
	this.shape_1114.setTransform(69.1,188.5);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f("#660000").s().p("AAaAvQgDgEAAgHIAAgpQAAgNgFgGQgDgHgMAAQgHABgGAEQgHAEgDAGQgBAGAAAOIAAAgQAAAHgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgDQAEgEAGAAQAEAAADABIAFAGQACACAAAFIAAADQAIgJAIgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_1115.setTransform(51.1,188.5);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f("#660000").s().p("AAcAvQgEgEAAgHIAAgCIgKAJQgHAEgGACQgGACgIAAQgLAAgIgEQgIgEgFgHQgFgHAAgQIAAgwQAAgIAEgDQADgEAHAAQAGAAAEAEQAFADAAAIIAAAnQgBAJACAFQACAGAFAEQADADAIAAQAGAAAHgDQAGgEADgGQACgFABgSIAAgeQAAgIADgDQAFgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgDAEgGAAQgHAAgDgEg");
	this.shape_1116.setTransform(38.2,188.5);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#660000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgBgEgEgEQgEgEgGAAQgGABgFADQgFACgDAGQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgEgEQgFgEAAgIIAAgnIgBgOQAAgFgDgEQgEgEgGAAQgPAAgEAJQgEAJgBAOIAAAiQAAAIgDAEQgFAEgGAAQgGAAgFgEQgEgEAAgIIAAhGQAAgIAEgDQAEgEAFAAQAHAAADAEQAFADAAAGIAAACQAHgIAJgDQAIgEAKAAQALAAAIAEQAGAEAFAHQAIgHAIgEQAIgEALAAQALAAAIAFQAJADAEAIQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgGAAgFgEg");
	this.shape_1117.setTransform(22.5,188.5);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f("#660000").s().p("AgXAvQgKgEgIgHQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALADAHAIQAIAGAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgbQgGADgEAHQgDAIAAAJQAAAKADAHQAEAIAGADQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgPgHgIQgIgJgNAAQgHAAgHAFg");
	this.shape_1118.setTransform(6.5,188.5);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f("#660000").s().p("AgXAvQgKgEgIgHQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALADAHAIQAIAGAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgbQgHADgDAHQgEAIABAJQgBAKAEAHQADAIAHADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgHAAgHAFg");
	this.shape_1119.setTransform(-24.4,188.5);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f("#660000").s().p("AgbBCQgMgEgGgFQgGgHAAgGQAAgEADgDQAEgDAFAAQAGAAAFAFIAFAFIAFAFIAHACIAKABQAKAAAGgCQAGgEADgFQACgEABgGIAAgSQgGAJgJAEQgJAEgLAAQgOAAgLgHQgKgGgGgMQgGgKAAgPQAAgLAEgJQADgJAHgHQAGgGAJgDQAIgDAKAAQALAAAJAEQAJAEAIAJIAAgEQAAgGAEgEQADgEAGABQAIAAADAEQADAFAAAJIAABIQAAAMgDAJQgDAJgHAGQgHAGgLADQgKACgQAAQgOABgMgEgAgTgpQgHAHAAAPQAAAQAHAHQAIAHALABQAHgBAHgDQAGgEAEgFQAEgHAAgKQAAgPgIgIQgIgIgMAAQgLgBgIAJg");
	this.shape_1120.setTransform(-37.5,190.4);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f("#660000").s().p("AAcAvQgEgEAAgHIAAgCIgLAJQgFAEgHACQgGACgJAAQgKAAgIgEQgIgEgEgHQgGgHAAgQIAAgwQAAgIAEgDQAEgEAGAAQAGAAAFAEQADADAAAIIAAAnQABAJABAFQACAGAEAEQAEADAIAAQAGAAAHgDQAGgEADgGQADgFgBgSIAAgeQAAgIAFgDQAEgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_1121.setTransform(-62.8,188.5);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f("#660000").s().p("AgOAaQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAgEAFgBQALgHAAgJQgGAAgFgCQgFgEAAgGQAAgGAFgFQAFgEAGABQAFAAAEACQAEACACAFQACAFAAAGQAAAJgEAHQgEAJgHAEQgFAEgFAAQgEABgCgCg");
	this.shape_1122.setTransform(-83.8,193.6);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#660000").s().p("AAgAvQgDgEgGgHQgKAIgKADQgIAEgMAAQgLAAgJgEQgIgEgFgHQgEgGAAgIQAAgJAHgIQAIgGANgDIANgCIASgDIAQgFQAAgJgEgFQgEgEgMgBQgKABgGACQgFACgEAGIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAGgFQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHADAIIADAJQAAAFgEACQgFAEgFAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAGAFAIAAQAHgBAHgDQAIgDADgFQADgGAAgNIAAgDIgSAEg");
	this.shape_1123.setTransform(-93.5,188.5);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f("#660000").s().p("AglAwQgIAAgEgCQgEgDAAgGQAAgDADgEIAMgMIARgQIAOgNIAKgLIAHgHIgpAAQgJAAgFgCQgEgBAAgGQAAgEADgDQAEgCAGAAIBBAAQAJAAAFACQAEACAAAGIgBAEIgCAEIgDADIgFAFIgzAyIA3AAQAHAAADADQAEACAAAFQAAAEgEADQgDACgHAAg");
	this.shape_1124.setTransform(-105.4,188.5);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f("#660000").s().p("AAaAvQgEgEAAgHIAAgpQAAgNgDgGQgFgHgLAAQgHABgGAEQgHAEgDAGQgCAGAAAOIAAAgQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgDQAEgEAGAAQAEAAADABIAFAGQACACAAAFIAAADQAIgJAJgDQAHgFAMAAQALAAAJAFQAJAEAFAHQACAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_1125.setTransform(-117.4,188.5);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f("#660000").s().p("AAgAvQgDgEgGgHQgKAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgIQAAgJAHgIQAIgGANgDIANgCIASgDIAQgFQAAgJgEgFQgEgEgMgBQgKABgGACQgGACgDAGIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAGgFQAFgHALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHAEAIIACAJQAAAFgEACQgEAEgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAGAFAIAAQAHgBAIgDQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_1126.setTransform(-130.3,188.5);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f("#660000").s().p("AAgAvQgDgEgGgHQgKAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgIQAAgJAHgIQAIgGANgDIANgCIASgDIAQgFQAAgJgEgFQgEgEgMgBQgKABgGACQgGACgDAGIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAGgFQAFgHALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAPIAAANIgBAOQAAAHAEAIIACAJQAAAFgEACQgEAEgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAGAFAIAAQAHgBAIgDQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_1127.setTransform(-160.9,188.5);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f("#660000").s().p("AgQBEQgJgCgJgFQgIgFgGgGQgHgGgDgJQgFgHgCgJQgCgJAAgKQgBgPAGgNQAFgNAKgJQALgJANgFQANgEAPAAQATgBAOAHQAOAGAIAKQAIAJAAAJQAAAFgEADQgDAEgGAAQgFAAgEgDIgGgIQgHgKgIgFQgIgFgMAAQgSAAgMANQgLAMAAAXQAAAPAGALQAFALAIAEQAJAFAMABQANAAAKgGQAJgGAFgLIAEgJQAEgDAGAAQAFAAAEADQAFAEAAAEQgBAHgDAIQgDAHgJAHQgHAHgMAFQgMAEgQAAQgLAAgLgBg");
	this.shape_1128.setTransform(-175.2,186.7);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgGAHgFADQgGAEgGACQgGABgIAAQgKAAgJgDQgJgFgGgHQgGgGgEgKQgDgKAAgLQAAgWANgNQAOgNAUAAQAMAAAJADQAIAFAIAHIAAglQAAgIAEgEQADgDAHAAQAGgBADAEQAEADAAAIIAABtQAAAHgEAEQgEADgFAAQgGAAgEgDgAgNgJQgGAEgDAHQgEAHAAAJQAAALAEAGQADAHAHAFQAFADAHAAQAHAAAHgDQAGgEAEgHQAEgHgBgLQABgJgEgIQgEgGgGgEQgHgDgHAAQgHAAgGADg");
	this.shape_1129.setTransform(-208.2,186.7);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgvIgEAAQgGAAgDgDQgEgCAAgEQAAgEAEgDQADgCAHAAIADAAIAAgPIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGAAADACQADADAAAEQAAAEgEACQgFACgIABIgGAAIAAAtIABAJQAAADACABQACACAFAAIAHgBIAHAAQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_1130.setTransform(-236.3,186.8);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhHQAAgIAEgDQADgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_1131.setTransform(-243.4,186.7);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f("#660000").s().p("AgWBVQgGgEgBgGQAAgEAEgDQADgDAEAAIADABIADAAIAFAAQAFAAACgEQABgEAAgKIAAhUQAAgHAEgEQAEgDAGAAQAHAAADADQAFAEAAAHIAABVIgBAOIgCAIQgHARgXgBQgMAAgHgCgAAFhBQgEgEAAgFQAAgGAEgDQAEgEAGABQAGAAAEACQAFAEAAAGQAAAFgFAEQgEADgGAAQgGAAgEgDg");
	this.shape_1132.setTransform(-284.8,188.6);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#660000").s().p("AAaAvQgDgEAAgIIAAgoQgBgNgEgGQgDgHgMABQgHAAgGAEQgGAEgDAGQgCAGAAAPIAAAeQAAAIgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgDQADgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAIgJAIgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_1133.setTransform(266.6,164.3);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f("#660000").s().p("AgDBEIgKgDIgHgGIgIgHIAAADQAAAHgDAEQgFADgFAAQgHAAgDgDQgEgEAAgHIAAhsQAAgHAEgFQADgDAHAAQAGAAAEADQADAEAAAHIAAAmQAIgHAIgEQAJgEALAAQAOAAALAGQALAGAGALQAGAKAAAPQAAAMgEAKQgDAJgGAHQgGAGgJAFQgJADgLAAQgHABgEgCgAgMgJQgHAEgEAHQgEAHAAAKQABAPAHAIQAIAIAMAAQALAAAIgIQAHgIAAgPQAAgLgDgGQgEgHgFgEQgGgEgIAAQgIAAgFAEg");
	this.shape_1134.setTransform(197,162.5);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f("#660000").s().p("AA5AvQgFgEAAgIIAAgpIgBgNQAAgEgEgEQgEgDgGAAQgGAAgFADQgFACgDAGQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgFgEQgEgEAAgIIAAgnIAAgOQgBgFgDgEQgDgDgIAAQgOgBgEAJQgFAJABAOIAAAiQAAAIgFAEQgEAEgGAAQgHAAgDgEQgFgEAAgIIAAhHQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEADABAGIAAACQAHgHAIgEQAJgEAKAAQALAAAHAEQAIAEAFAHQAGgHAJgEQAJgEAKAAQALABAJAEQAIADAEAIQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgHAAgDgEg");
	this.shape_1135.setTransform(180.6,164.3);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAKQAEAIAAALQAAALgEAJQgEAKgIAHQgHAHgLADQgKAEgNAAQgMAAgKgEgAgOgbQgHAEgDAGQgDAIgBAJQABAKADAHQADAIAHADQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgPgHgIQgIgJgNAAQgHABgHAEg");
	this.shape_1136.setTransform(164.6,164.3);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f("#660000").s().p("AgOAaQAAAAgBgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgFAFgBQALgHAAgJQgGABgFgDQgFgEAAgGQAAgHAFgDQAFgFAGAAQAFABAEACQAEACACAFQACAFAAAGQAAAJgEAHQgEAJgHAEQgFAFgFgBQgEABgCgCg");
	this.shape_1137.setTransform(136.8,169.4);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAALAEQAKAEAHAGQAIAHAEAKQAEAIAAALQAAALgEAJQgEAKgIAHQgHAHgKADQgLAEgNAAQgMAAgKgEgAgOgbQgHAEgDAGQgDAIgBAJQABAKADAHQADAIAHADQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgPgHgIQgIgJgNAAQgHABgHAEg");
	this.shape_1138.setTransform(127.7,164.3);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#660000").s().p("AAhAvQgEgDgFgIQgLAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIAOgDIARgDIARgFQgBgJgEgFQgEgFgNAAQgJAAgGADQgFADgFAFIgFAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAFgGQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAKQAAADgEADQgFAEgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAFAEQAFAFAHAAQAIgBAHgDQAIgDADgFQAEgGAAgNIAAgEIgSAFg");
	this.shape_1139.setTransform(99.7,164.3);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgCIgKAJQgHAEgGACQgGACgIAAQgLAAgIgEQgIgEgFgHQgFgHAAgPIAAgxQAAgHAEgEQADgEAHAAQAGAAAEAEQAFAEAAAHIAAAnQgBAJACAFQACAGAFAEQAEAEAHAAQAHgBAFgEQAHgDADgGQACgFABgSIAAgeQAAgHADgEQAFgEAGAAQAGAAAEAEQAEAEAAAHIAABHQAAAIgEADQgDAEgHAAQgGAAgDgEg");
	this.shape_1140.setTransform(42.6,164.3);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#660000").s().p("AgJAwIgFgFIgGgLIgbg6IgCgEIgCgFIAAgEIABgFIAFgEQADgCAEAAQAHAAADAEQADAEADAHIAWA4IAZg5QADgIADgDQACgDAGAAQAGAAAEAEQADADAAAEIAAADIgCAFIgCAEIgbA7IgDAGIgEAHIgGAEQgDACgFAAQgFAAgEgDg");
	this.shape_1141.setTransform(11.8,164.3);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAKQAEAIAAALQAAALgEAJQgEAKgHAHQgIAHgKADQgLAEgNAAQgMAAgKgEgAgOgbQgGAEgEAGQgDAIgBAJQABAKADAHQAEAIAGADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgIABgGAEg");
	this.shape_1142.setTransform(-43.9,164.3);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f("#660000").s().p("AAaAvQgDgEAAgIIAAgoQAAgNgFgGQgDgHgMABQgHAAgGAEQgHAEgDAGQgBAGAAAPIAAAeQAAAIgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgDQAEgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAIgJAIgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_1143.setTransform(-56.9,164.3);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgHAEgEQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_1144.setTransform(-91.6,162.5);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#660000").s().p("AAcAwQgDgCgEgFIgVgbIgUAbIgIAHQgDADgFAAQgFAAgEgDQgEgDAAgEQAAgEAGgIIAageIgYgbQgFgIAAgFQAAgDADgDQAEgDAFAAQAFAAAEADIAIAIIARAVIASgVIAIgIQADgDAFAAQAGAAAEADQADADAAADIgBAGIgFAHIgXAbIAaAeQAGAJAAADQAAAEgEADQgDADgGAAQgFAAgEgDg");
	this.shape_1145.setTransform(-100,164.3);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f("#660000").s().p("AA5AvQgFgEAAgIIAAgpIgBgNQgBgEgDgEQgDgDgIAAQgFAAgFADQgFACgDAGQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgGAAgEgEQgDgEAAgIIAAgnIgBgOQgBgFgDgEQgEgDgHAAQgNgBgFAJQgFAJAAAOIAAAiQAAAIgEAEQgDAEgHAAQgGAAgEgEQgFgEAAgIIAAhHQAAgGAEgEQADgEAHAAQAFAAAFAEQADADAAAGIAAACQAIgHAIgEQAJgEAKAAQALAAAHAEQAHAEAGAHQAGgHAJgEQAJgEAJAAQAMABAJAEQAIADAEAIQAEAGAAAPIAAAwQAAAIgEAEQgEAEgHAAQgGAAgEgEg");
	this.shape_1146.setTransform(-127.5,164.3);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAKQAEAIAAALQAAALgEAJQgEAKgHAHQgIAHgKADQgLAEgNAAQgMAAgKgEgAgOgbQgGAEgEAGQgDAIgBAJQABAKADAHQAEAIAGADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgIABgGAEg");
	this.shape_1147.setTransform(-158.2,164.3);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgvIgEAAQgGAAgDgDQgEgCAAgEQAAgEAEgDQADgCAHAAIADAAIAAgQIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABAEIAAAKIAAARIALAAQAGAAADACQADADAAAEQAAAEgEACQgFADgIAAIgGAAIAAAtIABAJQAAACACACQACACAFABIAHgCIAHAAQADAAADADQADACAAADQAAAHgIACQgIAEgOAAQgMAAgHgEg");
	this.shape_1148.setTransform(-168.2,162.6);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#660000").s().p("AgJBBQgEgEAAgIIAAhGQAAgHAEgEQADgEAGAAQAGAAAEAEQAEAEAAAGIAABHQAAAIgEAEQgEAEgGAAQgGAAgDgEgAgJguQgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAAEADQAEADAAAHQAAAFgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_1149.setTransform(-188.2,162.5);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f("#660000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgIAEgDQADgDAHAAQAGAAAEADQADAEAAAGIAAAEQAIgJAJgEQAJgEAJAAQAOAAALAGQALAGAGALQAHALAAARQAAALgEAJQgEAJgGAHQgHAGgJAEQgIAEgLgBQgLABgIgFQgJgEgHgJIAAAmQAAAQgNAAQgJABgCgFgAgTgpQgHAHgBARQABAPAHAGQAJAJALAAQAHAAAGgDQAGgFADgGQAEgGAAgLQAAgKgDgHQgEgHgGgEQgGgDgHgBQgLAAgJAJg");
	this.shape_1150.setTransform(-197.5,166.2);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#660000").s().p("AA4AvQgEgEAAgIIAAgpIgBgNQAAgEgEgEQgEgDgGAAQgGAAgFADQgFACgDAGQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgEgEQgFgEAAgIIAAgnIgBgOQAAgFgDgEQgDgDgIAAQgOgBgEAJQgEAJAAAOIAAAiQAAAIgFAEQgEAEgGAAQgHAAgEgEQgEgEAAgIIAAhHQAAgGAEgEQAEgEAFAAQAHAAADAEQAFADAAAGIAAACQAHgHAIgEQAJgEAKAAQALAAAIAEQAHAEAEAHQAIgHAIgEQAJgEAKAAQALABAIAEQAJADAEAIQAEAGAAAPIAAAwQAAAIgEAEQgEAEgHAAQgHAAgEgEg");
	this.shape_1151.setTransform(-232,164.3);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f("#660000").s().p("AAaAvQgDgEAAgIIAAgoQAAgNgFgGQgDgHgMABQgHAAgGAEQgGAEgDAGQgCAGAAAPIAAAeQAAAIgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgDQADgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAIgJAIgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_1152.setTransform(-270.3,164.3);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f("#660000").s().p("AgnBDQgKAAgFgEQgEgEAAgJIAAhjQAAgGACgEQACgEAEgCQAEgBAHAAIBRAAQAHAAAEACQADAEABAEQgBAFgDADQgEADgHAAIhFAAIAAAgIBAAAQAGAAAEADQAEAEgBAEQAAAEgDACQgEADgGAAIhAAAIAAAnIBHAAQAHAAAFADQADACAAAGQAAAEgDADQgFADgHAAg");
	this.shape_1153.setTransform(-283.5,162.5);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f("#660000").s().p("AgXBQIAEgJIAIgRQAFgLADgOQADgOAAgPQAAgOgDgOQgDgOgFgLIgIgSIgEgIQAAgCAEAAQAHAAAEACQAEACAFAKIAKAQQAFAJACAIQADAIACAJQABAIAAAJQAAATgFAQQgGARgMAQQgFAKgEACQgEACgHAAQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAgBAAAAg");
	this.shape_1154.setTransform(155.2,118);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f("#660000").s().p("AAPA+QgEgEAAgGIAAgQIgwAAQgJAAgFgEQgFgDABgHIAAgDIACgDIADgFIAEgDIAyg8IAJgJQADgDAEAAQAPABABAPIAABBIAEAAQAHgBAFACQAFACgBAGQAAAFgDADQgEACgHAAIgGAAIAAAQQAAAGgDAEQgEACgFAAQgGAAgDgCgAgeARIApAAIAAgxg");
	this.shape_1155.setTransform(145.8,116.3);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f("#660000").s().p("AgYA7QgDgDgBgHQABgGACgJIAJgXQAGgMAJgOQAHgNANgOIgzAAQgIAAgFgCQgDgDAAgFQAAgHADgCQAFgBAIAAIBAAAQAJAAAEACQAFADAAAGQgBAEgEAFIgMAOQgGAGgGALQgIALgFAOIgDAMIgCALIgDAKQAAAKgEADQgEADgGAAQgGAAgEgEg");
	this.shape_1156.setTransform(134.5,116.4);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f("#660000").s().p("AgaA8QgJgEgFgHQgFgGAAgGQAAgEADgDQADgCAFAAQAEAAAEACQADACACAFQACAEAFAEQAFACAGAAQAFAAAFgCQAFgCADgFQAHgJACgXQgHAGgIAEQgIADgIABQgJgBgIgDQgIgDgGgFQgGgGgDgHQgDgHAAgJQAAgIADgIQAEgIAGgFQAHgGAJgEQAJgDALAAQAMAAAJAEQAKAEAHAHQAHAJADALQAEAMAAAOQAAAPgEANQgEANgHAIQgHAJgKAEQgLAEgLAAQgNAAgKgEgAgSgnQgGAGAAAMQAAAMAGAGQAHAGAKAAQAFAAAFgCQAGgCADgGQAEgFAAgIQAAgFgCgFQgCgFgDgEQgEgDgEgCQgFgCgEAAQgJAAgHAHg");
	this.shape_1157.setTransform(121.9,116.3);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f("#660000").s().p("AgPAKQgGAAgEgCQgEgDAAgFQAAgEADgDQAFgCAGAAIAfAAQAGAAAEACQAEADAAAEQAAAFgEADQgEACgGAAg");
	this.shape_1158.setTransform(101,118);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f("#660000").s().p("AgaA5QgLgHgHgNQgGgOAAgUQAAgQAEgMQAEgMAHgJQAHgJAKgEQAKgEAMAAQANAAAJAEQAKAEAFAHQAEAGAAAGQAAADgDADQgDADgEAAQgEAAgEgCQgDgCgCgEQgCgGgFgCQgFgDgHgBQgEAAgFADQgFADgEAEQgHAJgBAXQAHgGAIgEQAHgDAJAAQAJAAAIADQAIACAGAHQAGAFADAGQADAIAAAIQAAANgGAKQgGAJgMAFQgLAGgOAAQgQAAgMgHgAgIAAQgGADgDAFQgEAFAAAHQAAAMAHAHQAHAJAJgBQAKABAHgIQAGgHAAgLQAAgIgDgFQgDgGgFgDQgFgCgHAAQgFAAgFACg");
	this.shape_1159.setTransform(91.7,116.3);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f("#660000").s().p("AgaA8QgJgEgFgHQgFgGAAgGQAAgEADgDQADgCAFAAQAEAAAEACQADACACAFQACAEAFAEQAFACAGAAQAFAAAFgCQAFgCADgFQAHgJACgXQgHAGgIAEQgIADgIABQgJgBgIgDQgIgDgGgFQgGgGgDgHQgDgHAAgJQAAgIADgIQAEgIAGgFQAHgGAJgEQAJgDALAAQAMAAAJAEQAKAEAHAHQAHAJADALQAEAMAAAOQAAAPgEANQgEANgHAIQgHAJgKAEQgLAEgLAAQgNAAgKgEgAgSgnQgGAGAAAMQAAAMAGAGQAHAGAKAAQAFAAAFgCQAGgCADgGQAEgFAAgIQAAgFgCgFQgCgFgDgEQgEgDgEgCQgFgCgEAAQgJAAgHAHg");
	this.shape_1160.setTransform(79.6,116.3);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f("#660000").s().p("AgaA7QgMgFgGgIQgGgKAAgKQAAgXAZgIQgUgIAAgSQAAgIAFgIQAGgHAKgFQAKgEAOAAQAKAAAJADQAJACAGAFQAGAFADAGQACAFAAAGQAAAJgEAHQgFAGgKAEQAIADAGAEQAFAFADAFQADAHAAAHQAAAKgGAKQgGAIgLAFQgMAFgQAAQgPAAgLgFgAgQAJQgHAGAAALQAAAGADAFQADAFAGADQAFACAGAAQAHAAAFgCQAGgDADgFQADgFAAgHQAAgGgDgGQgDgEgGgDQgGgDgGAAQgJAAgHAGgAgOgqQgGAFAAAIQAAAHAGAFQAGAFAIAAQAFAAADgCQAEgBADgCQADgCAAgEQACgDAAgDQAAgFgCgEQgDgEgFgCQgFgDgFAAQgJAAgFAFg");
	this.shape_1161.setTransform(67.9,116.3);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f("#660000").s().p("AAMA8QgDgDAAgHIAAhMQgYAQgJAAQgEAAgDgDQgDgCAAgFQAAgDADgCIALgGQAMgFAHgFQAGgGAGgGIAHgIQABgCAFAAQAFAAADADQADAEAAAGIAABhQAAARgNAAQgGAAgEgEg");
	this.shape_1162.setTransform(54.9,116.3);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f("#660000").s().p("AANBRQgDAAgEgDIgHgKQgHgLgFgLQgFgKgDgLQgCgLAAgOQAAgLACgMQADgLAFgLQAFgLAHgLIAHgKQAEgCADgBIAHgBQAEAAAAACIgEAJIgIASQgEAKgEAOQgEANAAAPQAAAPAEAOQAEAOAEAKIAIASIAEAJQAAACgEAAIgHgBg");
	this.shape_1163.setTransform(46.7,118);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f("#660000").s().p("AAbAsQgFgEAAgGIAAgDQgEAGgGADQgEAEgHACQgFABgJAAQgJAAgIgDQgIgEgEgGQgEgHAAgOIAAguQAAgHADgDQAEgDAFAAQAHAAADADQAEAEAAAGIAAAlQAAAIACAFQABAGAEADQAFADAHAAQAFAAAGgDQAGgEADgFQACgFAAgQIAAgdQAAgGAEgEQADgDAHAAQAFAAAEADQADADAAAHIAABDQAAAHgCADQgFADgEAAQgGAAgDgDg");
	this.shape_1164.setTransform(-16.3,118);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f("#660000").s().p("AAeA8QgDgDAAgIIAAghQgIAHgIADQgJAEgIAAQgNAAgLgGQgJgFgHgLQgFgKAAgOQAAgPAFgKQAHgLAKgGQAKgGANAAQAKAAAJAFQAIADAGAIIAAgCQAAgHAEgDQADgEAGAAQAFAAAEAEQADADAAAHIAABjQAAAQgMAAQgJAAgBgFgAgRgnQgIAJABAOQAAAJADAHQAEAFAFAEQAGADAGAAQAGAAAHgDQAFgEAEgFQAEgHAAgKQAAgHgDgGQgCgFgDgEQgDgDgGgDQgEgCgFAAQgKABgHAHg");
	this.shape_1165.setTransform(-28.9,119.7);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f("#660000").s().p("AgiA6QgJgFgHgJQgGgIAAgIQAAgFAEgDQAEgDAFAAQAFAAADACQADADACAFQADAGADAEQADAEAGADQAGACAJAAQANAAAHgFQAJgFgBgIQAAgGgEgEQgFgEgGgCIgSgFQgPgDgLgEQgKgDgGgHQgGgIAAgLQAAgKAHgIQAGgIAMgEQAMgFAQAAQANAAAJADQALADAFAFQAHAFADAFQADAFAAAFQAAAEgEAEQgEAEgFAAQgFAAgDgCIgFgIQgEgHgFgEQgGgEgLAAQgMAAgGAFQgHAEAAAGQAAAEACADIAHAEIAIADIANAEIAWAFQAJADAIAEQAGAEAFAGQADAHAAAJQAAAMgHAJQgGAJgNAFQgNAFgSAAQgUAAgOgHg");
	this.shape_1166.setTransform(-46.9,116.2);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f("#660000").s().p("AgOA9QgEgDAAgHIAAg9IgIAAQgFAAgEgCQgDgDAAgEQAAgIANAAIAHAAIAAgHQAAgLADgGQAEgHAHgDQAHgDAMAAQAYAAAAAKQAAAEgDACQgCACgDAAIgGAAIgGgBQgHAAgCAEQgCAEgBAHIAAAFIAIAAQAPAAAAAIQgBAGgEABQgEACgGAAIgIAAIAAA9QAAAHgDADQgEAEgFAAQgGAAgDgEg");
	this.shape_1167.setTransform(-93.3,116.2);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f("#660000").s().p("AAvBAIgFgDIgDgGIgDgGIgHgQIg6AAIgGAQQgFAJgCAEQgDADgGAAQgGAAgEgEQgFgDAAgFIABgFIAEgHIAlhRIADgIQACgFADgDQACgEAEgCQAFgCAFAAQAFAAAFACQAEACACAEIAEAGIAEAKIAmBQQAEAJAAAEQAAAFgDADQgFAEgGAAIgFgBgAgVAOIAqAAIgVgzg");
	this.shape_1168.setTransform(-109.7,116.2);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f("#660000").s().p("AgqA/QgIAAgEgCQgEgCgBgEIgBgKIAAhbQAAgIAEgEQAEgEAJAAIAmAAQAOAAALADQAKACAJAHQAWARAAAhQAAALgCAJQgCAKgFAHQgFAIgHAGQgGAEgHADQgHADgHABIgRABgAgfArIAWAAIAKgBIAJgBIAHgEQAPgLAAgaQAAgSgHgJQgGgJgJgDQgKgCgMAAIgTAAg");
	this.shape_1169.setTransform(-169.2,116.2);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f("#660000").s().p("AgKAKQgFgEAAgGQAAgEAFgFQAEgEAGAAQAGAAAFAEQAFAEAAAFQAAAGgFAEQgFAEgGAAQgGAAgEgEg");
	this.shape_1170.setTransform(88.9,217.8);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgcQgHAFgDAGQgDAIAAAJQAAAKADAHQADAHAHAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNAAQgIAAgGADg");
	this.shape_1171.setTransform(80.2,214.1);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f("#660000").s().p("AgbAvQgKgFgGgGQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAGQAEAGAHAEQAGACAKAAQAIAAAFgCQAGgEAAgFQAAgGgGgDQgFgDgNgDQgOgDgKgDQgJgDgFgGQgGgFAAgJQAAgIAFgGQAGgHAJgEQALgEANAAQALAAAIACQAJACAHAEQAFADAEAEQACAEAAAEQABAEgEADQgEADgFAAQgFAAgDgDIgHgGQgDgDgFgCQgEgDgHAAQgIAAgEADQgGADAAAEQABAEADACIALAFIAQAEQAOADAIAEQAIACAEAGQAFAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgPAAgLgEg");
	this.shape_1172.setTransform(62,214.1);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgcQgGAFgEAGQgDAIgBAJQABAKADAHQAEAHAGAFQAGADAIAAQANAAAIgJQAHgIAAgPQAAgOgHgJQgIgIgNAAQgHAAgHADg");
	this.shape_1173.setTransform(49.8,214.1);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgcQgHAFgDAGQgEAIABAJQgBAKAEAHQADAHAHAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNAAQgHAAgHADg");
	this.shape_1174.setTransform(31,214.1);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f("#660000").s().p("AgQBDQgJgCgIgEQgJgFgHgGQgFgHgFgHQgEgIgCgJQgCgJgBgKQABgPAFgNQAGgNAKgJQAJgJAOgEQAOgGAOAAQASABAPAGQAPAGAIAKQAHAJAAAJQAAAFgEAEQgEADgFAAQgFAAgEgCIgHgJQgGgKgHgFQgJgFgMAAQgSAAgMANQgLANAAAWQAAAQAFAKQAGAKAJAGQAJAEALAAQAOAAAJgFQAJgGAFgLIAFgJQADgDAGAAQAGAAADADQAEADAAAGQAAAGgDAHQgEAIgHAHQgIAHgMAFQgMAFgQAAQgLgBgLgCg");
	this.shape_1175.setTransform(16.5,212.3);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgCQgGAFgFAEQgGADgHACQgFACgIABQgKgBgJgEQgIgEgHgGQgGgIgDgJQgEgJAAgLQAAgXAOgNQANgNAUAAQAMAAAJAEQAIAEAIAHIAAglQAAgHADgEQAEgFAGAAQAHABADADQAEAEAAAHIAABtQAAAHgEADQgDAEgHABQgFgBgEgEgAgNgIQgGADgDAGQgEAIAAAKQAAAJAEAIQADAGAHAEQAFAEAHAAQAHAAAHgEQAGgDAEgHQADgHAAgKQAAgLgDgHQgEgGgGgEQgHgEgHAAQgHAAgGAFg");
	this.shape_1176.setTransform(-16.7,212.3);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f("#660000").s().p("AAgAvQgDgDgGgIQgKAHgKAFQgIADgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgLAIgHQAHgGANgCIANgDIASgEIAQgDQAAgLgEgEQgEgFgMABQgLAAgFACQgGADgEAFIgFAHQgBABgGABQgFgBgDgCQgEgCAAgFQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHAEAIIACAKQAAADgEAEQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAFQAFADAJAAQAHABAIgEQAGgDAEgFQAEgGgBgNIAAgEIgSAFg");
	this.shape_1177.setTransform(-35.2,214.1);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgcQgGAFgEAGQgDAIAAAJQAAAKADAHQAEAHAGAFQAGADAIAAQANAAAHgJQAIgIAAgPQAAgOgIgJQgHgIgNAAQgHAAgHADg");
	this.shape_1178.setTransform(-61,214.1);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f("#660000").s().p("AgtBDQgJAAgEgCQgEgDgBgEQgCgEAAgGIAAhiQAAgIAFgEQAEgEAKAAIApAAQAPAAALADQALACAKAHQAYASAAAkQAAALgDAKQgCALgFAHQgFAJgIAGQgGAFgIADQgHADgIABIgTABgAgiAuIAYAAIALgBIAJgCIAIgEQAQgLAAgcQAAgUgHgKQgHgJgKgDQgKgDgNABIgVAAg");
	this.shape_1179.setTransform(-75.1,212.3);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f("#660000").s().p("AgbAvQgKgFgGgGQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAACACIAFAGQAEAGAHAEQAGACAKAAQAIAAAFgCQAGgEAAgFQAAgGgGgDQgFgDgNgDQgOgDgKgDQgJgDgFgGQgGgFAAgJQAAgIAFgGQAGgHAJgEQALgEANAAQALAAAIACQAJACAHAEQAFADAEAEQACAEAAAEQABAEgEADQgEADgFAAQgFAAgDgDIgHgGQgDgDgFgCQgEgDgHAAQgIAAgEADQgGADAAAEQABAEADACIALAFIAQAEQAOADAIAEQAIACAEAGQAFAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgPAAgLgEg");
	this.shape_1180.setTransform(-94.6,214.1);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgDIgLAKQgFAEgHACQgGABgJAAQgKAAgIgDQgIgEgEgHQgGgHAAgPIAAgxQAAgIAEgDQADgEAHAAQAHAAAEAEQADADAAAIIAAAnQAAAJACAFQACAHAEADQAFADAHABQAHAAAFgFQAHgDADgHQACgFAAgQIAAgfQAAgIAFgDQAEgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAIgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_1181.setTransform(-112.6,214.1);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f("#660000").s().p("AgjBEQgKAAgFgEQgEgEAAgIIAAhnQAAgIAEgEQAFgEAGAAQAIAAAEAEQAEAEAAAIIAABhIA+AAQAIAAAEADQAEADAAAFQAAAFgEADQgEADgIAAg");
	this.shape_1182.setTransform(-125,212.1);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgCQgGAFgFAEQgGAEgGABQgGADgIAAQgKAAgIgFQgKgDgGgIQgGgHgEgJQgDgJAAgLQAAgXANgNQANgNAVAAQAMAAAIAEQAJADAIAIIAAglQAAgHAEgEQADgFAHAAQAGABAEADQADAEAAAHIAABtQAAAHgDADQgFAFgFAAQgGAAgEgFgAgNgIQgGADgEAGQgDAIAAAJQAAAKADAIQAEAGAGAEQAHAEAGAAQAIAAAGgEQAGgDAEgHQADgHABgLQgBgKgDgHQgEgGgGgEQgGgEgIAAQgHABgGAEg");
	this.shape_1183.setTransform(244.8,188.1);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f("#660000").s().p("AAgAvQgEgEgFgGQgKAGgJAFQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAHgHQAIgGANgDIANgCIASgEIARgDQgBgLgEgEQgEgFgMABQgKgBgGADQgFADgEAFIgGAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAGgHQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHADAIIADAJQAAAFgEADQgFADgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAEAEQAFADAJAAQAHABAHgEQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_1184.setTransform(206.6,189.9);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f("#660000").s().p("AAaAvQgDgEAAgIIAAgoQAAgMgFgHQgDgGgMgBQgHAAgGAEQgHAFgDAHQgBAFAAAOIAAAfQAAAIgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgEQAEgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAIgIAIgFQAIgEAMAAQALAAAJAEQAJAFAEAIQADAEABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_1185.setTransform(193.8,189.9);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f("#660000").s().p("AgaAvQgLgFgGgFQgFgHAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAGQAFAGAGAEQAGACAKAAQAIAAAFgCQAGgEAAgFQAAgGgGgDQgFgDgNgDQgPgDgIgDQgKgDgFgGQgGgGAAgIQAAgIAFgGQAGgHAKgEQAJgEAOAAQALAAAIACQAKACAFAEQAGADADAEQADAEAAAEQAAAEgDADQgEADgGAAQgDAAgEgDIgHgGQgDgDgEgCQgFgDgHAAQgHAAgFADQgGADAAAEQABAEADACIALAFIAQAEQANADAJADQAIADAFAGQAEAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgPAAgKgEg");
	this.shape_1186.setTransform(175.6,189.9);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f("#660000").s().p("AgbAvQgLgFgFgFQgFgHAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAGQAEAGAHAEQAGACAJAAQAJAAAGgCQAFgEAAgFQAAgGgFgDQgHgDgLgDQgPgDgKgDQgJgDgGgGQgFgGAAgIQAAgIAFgGQAFgHAKgEQALgEAOAAQAJAAAKACQAJACAGAEQAFADAEAEQADAEAAAEQgBAEgDADQgDADgHAAQgEAAgDgDIgHgGQgDgDgFgCQgEgDgGAAQgIAAgGADQgEADAAAEQgBAEAEACIAKAFIARAEQANADAJADQAIADAEAGQAFAFAAAHQAAAKgGAIQgFAHgMAEQgLAEgPAAQgPAAgMgEg");
	this.shape_1187.setTransform(151.3,189.9);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAGgKAFQgIADgMAAQgLAAgJgEQgIgEgFgGQgEgHAAgIQAAgKAHgHQAIgGANgDIANgCIASgEIARgDQgBgLgEgEQgEgFgMABQgKgBgGADQgFADgEAFIgGAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAGgHQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHADAIIADAJQAAAFgEADQgFADgFAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAEAEQAGADAIAAQAHABAHgEQAIgDADgFQADgGABgNIAAgDIgTAEg");
	this.shape_1188.setTransform(139.2,189.9);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f("#660000").s().p("AA5AvQgFgEAAgIIAAgpIgBgNQgBgFgDgDQgDgDgIgBQgFAAgFADQgFAEgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgFgEQgDgEAAgIIAAgnIgBgPQgBgFgDgDQgDgDgIgBQgOABgEAIQgFAIABAQIAAAhQgBAIgEAEQgDAEgHAAQgGAAgEgEQgFgEAAgIIAAhHQAAgGAEgEQADgEAHAAQAGAAAEADQADAEAAAGIAAADQAIgJAIgDQAJgDAKAAQALAAAHADQAHAEAGAIQAGgIAJgEQAJgDAJAAQAMAAAJADQAIAFAEAHQAEAHAAAOIAAAwQAAAIgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_1189.setTransform(-33.4,189.9);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgEIgKAKQgHAEgGACQgGACgIgBQgLAAgIgDQgIgEgFgGQgFgJAAgPIAAgwQAAgIAEgDQAEgEAGAAQAGAAAEAEQAFADAAAIIAAAnQAAAJABAGQACAGAFADQAEADAHABQAHgBAFgDQAHgEADgHQADgFAAgQIAAgfQAAgIADgDQAEgEAHAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgDAEgHAAQgFAAgEgEg");
	this.shape_1190.setTransform(-49.3,189.9);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f("#660000").s().p("AgbAvQgLgFgFgFQgFgHAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAGQAEAGAHAEQAGACAJAAQAJAAAGgCQAFgEAAgFQAAgGgFgDQgHgDgLgDQgPgDgKgDQgJgDgGgGQgFgGAAgIQAAgIAFgGQAFgHAKgEQALgEAOAAQAJAAAKACQAJACAGAEQAFADAEAEQADAEAAAEQgBAEgDADQgDADgHAAQgEAAgDgDIgHgGQgDgDgFgCQgEgDgGAAQgIAAgGADQgEADAAAEQgBAEAEACIAKAFIARAEQANADAJADQAIADAEAGQAFAFAAAHQAAAKgGAIQgFAHgMAEQgLAEgPAAQgPAAgMgEg");
	this.shape_1191.setTransform(-88.6,189.9);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f("#660000").s().p("AgaAvQgLgFgGgFQgFgHAAgGQAAgEADgDQADgDAGAAQAEAAACACIAFAGQAFAGAGAEQAGACAKAAQAIAAAFgCQAGgEAAgFQAAgGgGgDQgGgDgMgDQgPgDgIgDQgKgDgGgGQgFgGAAgIQAAgIAFgGQAGgHAKgEQAJgEAOAAQAKAAAKACQAIACAGAEQAGADADAEQADAEABAEQAAAEgEADQgEADgGAAQgDAAgEgDIgHgGQgDgDgEgCQgFgDgHAAQgHAAgFADQgFADgBAEQAAAEAEACIALAFIAQAEQANADAJADQAIADAFAGQAEAFAAAHQAAAKgGAIQgFAHgMAEQgLAEgPAAQgQAAgKgEg");
	this.shape_1192.setTransform(-122.6,189.9);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAGgKAFQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAHgHQAIgGANgDIANgCIASgEIAQgDQAAgLgEgEQgEgFgMABQgKgBgGADQgGADgDAFIgGAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHAEAIIACAJQAAAFgEADQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAEAEQAGADAIAAQAHABAIgEQAGgDAEgFQADgGAAgNIAAgDIgSAEg");
	this.shape_1193.setTransform(-134.8,189.9);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f("#660000").s().p("AAaAvQgEgEAAgIIAAgoQAAgMgDgHQgFgGgLgBQgHAAgGAEQgHAFgDAHQgCAFAAAOIAAAfQAAAIgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgEQAEgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAIgIAJgFQAHgEAMAAQALAAAJAEQAJAFAFAIQACAEABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_1194.setTransform(-147.6,189.9);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f("#660000").s().p("AAgAvQgEgEgFgGQgKAGgJAFQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAHgHQAIgGANgDIAOgCIARgEIARgDQgBgLgEgEQgEgFgNABQgJgBgGADQgFADgEAFIgGAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAJAAANIAAAPIAAANQAAAHACAIIADAJQAAAFgEADQgFADgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAGAEAEQAFADAIAAQAIABAHgEQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_1195.setTransform(-172,189.9);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f("#660000").s().p("AglA+QgKgFgHgKQgGgIAAgJQAAgFAEgEQAEgDAGAAQAFAAADACQADADADAFIAHALQADAFAGACQAGADAKAAQANAAAJgFQAJgGAAgJQAAgGgGgEQgEgFgIgCQgHgCgLgCQgRgDgLgFQgLgEgGgHQgHgIAAgMQAAgLAHgJQAHgIANgFQANgEARgBQANAAALAEQAKADAHAFQAHAFADAGQAEAFAAAGQgBAEgEAEQgEAEgGAAQgFAAgDgDQgCgCgEgFQgEgHgGgFQgFgEgNAAQgMAAgHAFQgIAEAAAGQABAEACAEQACACAFACIAJAEIAOADIAYAGQAKAEAIAEQAGAEAFAGQAEAIAAAKQAAAMgHAJQgIAKgNAGQgOAGgTAAQgWAAgPgIg");
	this.shape_1196.setTransform(-185.4,188.1);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f("#660000").s().p("AgbAvQgKgFgGgFQgFgHAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAGQAEAGAHAEQAGACAKAAQAIAAAFgCQAGgEAAgFQAAgGgGgDQgFgDgNgDQgOgDgKgDQgJgDgFgGQgGgGAAgIQAAgIAFgGQAGgHAJgEQAKgEAOAAQALAAAIACQAKACAFAEQAGADADAEQADAEAAAEQABAEgEADQgEADgFAAQgEAAgEgDIgHgGQgDgDgFgCQgEgDgHAAQgHAAgFADQgGADAAAEQABAEADACIALAFIAQAEQANADAJADQAIADAEAGQAFAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgPAAgLgEg");
	this.shape_1197.setTransform(-203.8,189.9);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAGgKAFQgIADgMAAQgLAAgJgEQgIgEgFgGQgEgHAAgIQAAgKAHgHQAIgGANgDIANgCIASgEIAQgDQAAgLgEgEQgEgFgMABQgKgBgGADQgFADgEAFIgGAHQgCABgFABQgFgBgDgCQgEgCAAgFQAAgGAGgHQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAJAAANIAAAPIgBANQAAAHADAIIADAJQAAAFgEADQgFADgFAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAGAEAEQAGADAIAAQAHABAHgEQAIgDADgFQADgGAAgNIAAgDIgSAEg");
	this.shape_1198.setTransform(-243.8,189.9);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f("#660000").s().p("AgQBDQgJgBgJgFQgHgFgHgGQgHgHgDgHQgFgIgCgJQgCgJAAgKQgBgPAGgNQAFgNALgJQAKgJANgEQANgGAPAAQATABAOAGQAOAHAJAJQAHAKAAAIQAAAFgEAEQgDADgGAAQgFAAgEgCIgGgJQgGgKgJgFQgIgFgMAAQgSAAgMANQgLAMAAAXQAAAQAGAKQAFAKAIAGQAJAEAMAAQANABAKgGQAJgGAFgLIAEgJQADgDAHAAQAFAAAEADQAFADAAAGQgBAGgDAHQgDAIgJAHQgHAHgMAFQgMAFgQAAQgMAAgKgDg");
	this.shape_1199.setTransform(-258.1,188.1);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgcQgHAFgDAGQgEAIABAJQgBAKAEAHQADAHAHAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgHAAgHADg");
	this.shape_1200.setTransform(253.2,165.8);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgFAHgGADQgGADgGACQgGACgIAAQgKAAgJgDQgIgEgHgHQgGgIgEgJQgDgKAAgKQAAgXAOgNQANgNAUAAQAMAAAJADQAIAFAIAHIAAglQAAgHAEgFQADgDAGAAQAHAAADADQAEADAAAIIAABtQAAAHgEAEQgEADgGAAQgFAAgEgDgAgNgIQgGADgDAHQgEAGAAALQAAAJAEAIQADAGAHAFQAFADAHAAQAHAAAHgDQAGgEAEgHQAEgHgBgKQABgKgEgIQgEgGgGgEQgHgDgHgBQgHAAgGAFg");
	this.shape_1201.setTransform(239.7,163.9);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f("#660000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgHAEgEQADgDAHgBQAGABAEADQADAEAAAHIAAADQAIgJAJgEQAJgEAJAAQAOAAALAGQALAGAHALQAGALAAARQAAALgEAIQgEAKgGAHQgHAGgJAEQgIAEgLgBQgLABgIgFQgJgEgHgJIAAAmQAAAQgNAAQgJABgCgFgAgTgqQgHAIgBARQABAPAHAGQAJAJALAAQAHAAAGgDQAGgFADgFQAEgIAAgKQAAgKgDgHQgEgHgGgEQgGgDgHgBQgLAAgJAIg");
	this.shape_1202.setTransform(192.6,167.6);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f("#660000").s().p("AAbAvQgFgEAAgIIAAgoQAAgNgDgGQgFgHgLABQgHAAgGADQgGAEgEAHQgCAGAAAPIAAAeQAAAIgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgDQAEgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAHgJAKgEQAHgEAMAAQALAAAJAEQAJAFAFAHQACAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1203.setTransform(160.9,165.8);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f("#660000").s().p("AAhAvQgFgDgEgIQgLAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAIgIQAHgGANgCIANgDIASgEIAQgDQAAgKgEgFQgEgFgMAAQgLAAgFADQgGADgEAFIgFAHQgBACgGAAQgFAAgDgDQgEgCAAgFQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAPIAAANIgBAOQABAHADAIIACAKQAAADgEADQgEAEgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEAEAAAFQAAAFAFAFQAEAEAIgBQAIAAAIgDQAGgDAEgFQAEgGgBgNIAAgEIgSAFg");
	this.shape_1204.setTransform(148,165.8);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgCIgKAJQgHAEgGACQgGABgIABQgLgBgIgDQgIgEgFgHQgFgHAAgPIAAgxQAAgHAEgEQADgEAHAAQAGAAAEAEQAFAEAAAHIAAAnQgBAJACAFQACAHAFADQAEAEAHAAQAHAAAFgFQAHgDADgHQACgEABgRIAAgfQAAgHADgEQAFgEAGAAQAGAAAEAEQAEAEAAAHIAABHQAAAIgEADQgDAEgHAAQgGAAgDgEg");
	this.shape_1205.setTransform(71.4,165.8);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgCIgKAJQgHAEgGACQgGABgIABQgLgBgIgDQgIgEgFgHQgFgHAAgPIAAgxQAAgHAEgEQADgEAHAAQAGAAAEAEQAFAEAAAHIAAAnQgBAJACAFQACAHAFADQADAEAIAAQAGAAAHgFQAGgDADgHQACgEABgRIAAgfQAAgHADgEQAFgEAGAAQAGAAAEAEQAEAEAAAHIAABHQAAAIgEADQgDAEgGAAQgHAAgDgEg");
	this.shape_1206.setTransform(33.2,165.8);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f("#660000").s().p("AAgBBQgDgFAAgHIAAgjQgIAHgJAEQgJADgKAAQgNABgLgHQgLgGgHgLQgGgLAAgPQAAgRAGgLQAHgLALgGQALgGAOAAQAKAAAJAEQAJAEAHAJIAAgDQAAgHAEgEQADgDAGgBQAGABAEADQAEADAAAIIAABrQAAAQgOAAQgIABgCgFgAgTgqQgHAJAAAQQAAAJAEAIQADAGAGAEQAGADAHAAQAHAAAHgDQAGgEAEgGQAEgIAAgKQAAgHgDgHQgCgGgEgEQgEgEgFgCQgFgCgFAAQgLAAgIAIg");
	this.shape_1207.setTransform(19.7,167.6);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f("#660000").s().p("AgbAuQgLgDgFgHQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAGQAFAGAGAEQAGACAJAAQAJAAAFgCQAGgEAAgEQAAgHgGgDQgFgDgMgDQgPgDgKgEQgJgCgFgGQgGgGAAgIQAAgHAFgHQAFgHAKgEQALgEAOAAQAJAAAJACQAJACAHADQAFAEAEAEQACAEAAAEQAAAEgDADQgEADgFAAQgEAAgEgCIgHgHQgDgEgFgBQgEgDgGAAQgJAAgFADQgEADAAAEQAAAEADACIAKAFIARAEQAOACAIAFQAIADAEAFQAFAFAAAHQAAAKgGAIQgFAHgMAEQgLAEgQAAQgOAAgMgFg");
	this.shape_1208.setTransform(2.1,165.8);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f("#660000").s().p("AAaAvQgEgEAAgIIAAgoQAAgNgDgGQgFgHgLABQgHAAgGADQgHAEgDAHQgCAGAAAPIAAAeQAAAIgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgDQAEgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAIgJAJgEQAHgEAMAAQALAAAJAEQAJAFAFAHQACAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_1209.setTransform(-35.5,165.8);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f("#660000").s().p("AAhAvQgEgDgFgIQgLAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIAOgDIARgEIARgDQgBgKgEgFQgEgFgNAAQgJAAgGADQgFADgFAFIgFAHQgCACgFAAQgFAAgDgDQgEgCAAgFQAAgGAFgHQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAKQAAADgEADQgFAEgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEAEAAAFQAAAFAFAFQAFAEAHgBQAIAAAHgDQAIgDADgFQAEgGAAgNIAAgEIgSAFg");
	this.shape_1210.setTransform(-48.3,165.8);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgBgEAAQgHAAgDACQgDADgDAGIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1211.setTransform(-58.2,165.8);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f("#660000").s().p("AgPBCQgEgEAAgIIAAhBIgIAAQgHAAgDgDQgEgCAAgEQAAgJAPAAIAHAAIAAgIQAAgLADgHQADgHAJgEQAHgCAOAAQAZAAAAAKQAAAEgDACQgCACgEAAIgGAAIgHAAQgHAAgDADQgCAFAAAHIAAAGIAHAAQARAAAAAIQAAAHgFABQgEACgIAAIgHAAIAABBQAAAIgEAEQgEADgFAAQgGAAgEgDg");
	this.shape_1212.setTransform(-66.8,163.9);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f("#660000").s().p("AAaAvQgDgEAAgIIAAgoQAAgNgFgGQgDgHgMABQgHAAgGADQgHAEgDAHQgBAGAAAPIAAAeQAAAIgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgDQAEgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAIgJAIgEQAIgEAMAAQALAAAJAEQAJAFAEAHQADAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_1213.setTransform(-82.5,165.8);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADADAAAEQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_1214.setTransform(-95.3,165.8);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.f("#660000").s().p("AgbBCQgMgEgGgGQgGgFAAgGQAAgFADgDQAEgCAFAAQAGgBAFAFIAFAFIAFAEIAHADIAKABQAKAAAGgDQAGgCADgGQACgEABgGIAAgSQgGAJgJAEQgJAEgLAAQgOAAgLgHQgKgGgGgMQgGgKAAgPQAAgLAEgKQADgJAHgGQAGgGAJgDQAIgDAKAAQALAAAJAEQAJAEAIAJIAAgDQAAgHAEgEQADgDAGgBQAIAAADAGQADAEAAAJIAABHQAAANgDAJQgDAJgHAGQgHAFgLADQgKADgQAAQgOAAgMgDgAgTgqQgHAIAAAQQAAAPAHAGQAIAJALgBQAHAAAHgDQAGgEAEgFQAEgHAAgJQAAgQgIgIQgIgJgMAAQgLAAgIAIg");
	this.shape_1215.setTransform(-108.2,167.6);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgBgEAAQgHAAgDACQgDADgDAGIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1216.setTransform(-124.5,165.8);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgcQgHAFgDAGQgDAIAAAJQAAAKADAHQADAHAHAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgIAAgGADg");
	this.shape_1217.setTransform(-136.3,165.8);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAIgGAEQgGACgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEgBQAEAAADACQADADAAAEQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAGgBANIAzAAQgBgNgHgGQgHgHgLAAQgKAAgHAHg");
	this.shape_1218.setTransform(-154.4,165.8);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.f("#660000").s().p("AgbAuQgKgDgGgHQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAACACIAFAGQAEAGAHAEQAGACAKAAQAIAAAFgCQAGgEAAgEQAAgHgGgDQgFgDgNgDQgOgDgKgEQgJgCgFgGQgGgGAAgIQAAgHAFgHQAGgHAJgEQALgEANAAQALAAAIACQAJACAHADQAFAEAEAEQACAEAAAEQABAEgEADQgEADgFAAQgFAAgDgCIgHgHQgDgEgFgBQgEgDgHAAQgIAAgEADQgGADAAAEQABAEADACIALAFIAQAEQAOACAIAFQAIADAEAFQAFAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgPAAgLgFg");
	this.shape_1219.setTransform(-205.7,165.8);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.f("#660000").s().p("AA5AvQgFgEAAgIIAAgpIgBgNQgBgEgDgEQgEgEgGABQgGAAgFACQgFAEgDAFQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgFgEQgDgEAAgIIAAgnIgBgOQgBgFgDgEQgDgEgIABQgOgBgEAJQgFAJABAOIAAAiQAAAIgFAEQgEAEgGAAQgHAAgDgEQgFgEAAgIIAAhHQAAgGAEgEQAEgEAGAAQAFAAAEAEQAEADAAAGIAAACQAIgHAIgEQAJgDAKAAQALAAAHADQAHAEAGAHQAGgHAJgEQAJgDAKAAQALAAAJADQAIAEAEAIQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_1220.setTransform(-226.8,165.8);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAKQAEAJAAAKQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgcQgGAFgEAGQgEAIAAAJQAAAKAEAHQAEAHAGAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgIAAgGADg");
	this.shape_1221.setTransform(-268.6,165.8);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.f("#660000").s().p("AgnBDQgKAAgFgEQgEgEAAgJIAAhkQAAgFACgEQACgEAEgCQAEgBAHAAIBRAAQAHAAAEACQAEADAAAFQAAAFgEADQgEADgHAAIhFAAIAAAgIA/AAQAIAAADADQADADABAFQgBADgDADQgDADgIAAIg/AAIAAAnIBHAAQAIAAADADQAEADAAAFQAAAEgEADQgDADgIAAg");
	this.shape_1222.setTransform(-294.5,163.9);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.f("#660000").s().p("AgOAKQgIAAgDgCQgEgDAAgFQAAgEAEgDQADgCAIAAIAdAAQAHAAAFACQADADAAAEQAAAFgDADQgFACgHAAg");
	this.shape_1223.setTransform(121.2,118);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f("#660000").s().p("AgaA4QgMgHgFgMQgDgIgBgJQgCgIAAgKQAAgMACgKQABgLADgHQAGgMALgHQALgGAPAAQAKAAAHADQAJADAGAFQAHAGADAHQAIAPAAAZQAAAOgCAJQgCAKgFAJQgHAKgKAFQgLAGgNAAQgNAAgNgIgAgRgiQgFALAAAXQAAAPACALQACAKAFAFQAGAGAHAAQAJgBAFgFQAFgGACgJQACgLAAgPQAAgQgCgJQgCgLgFgFQgFgFgJAAQgMAAgFAMg");
	this.shape_1224.setTransform(111.9,116.3);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.f("#660000").s().p("AgdA5QgLgFgFgHQgEgIAAgFQgBgDAEgDQADgEAFAAQAIAAAEAJQAEAHAGAFQAIAEAHAAQAHAAAGgDQAFgEAEgGQADgGAAgIQgBgIgDgFQgDgHgFgBQgHgDgFAAQgIAAgEABIgKAGQgIAFgEAAQgEAAgFgEQgDgCAAgDIABgGIAIgpQABgIAFgDQADgDAIAAIAzAAQAPAAAAAKQAAAFgDACQgEADgHAAIgtAAIgHAbQAOgGAMAAQAJAAAIADQAIADAGAGQAGAFAEAGQADAIABAJQgBAMgGAKQgGAKgMAGQgMAGgPAAQgSAAgKgGg");
	this.shape_1225.setTransform(100.2,116.4);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.f("#660000").s().p("AAMBRQgCAAgDgDIgHgKQgIgLgFgLQgFgKgDgLQgDgLAAgOQABgLACgMQACgLAGgLQAFgLAIgLIAHgKQADgCACgBIAHgBQAFAAABACIgFAJIgJASQgDAKgEAOQgDANAAAPQAAAPADAOQAEAOADAKIAJASIAFAJQgBACgFAAIgHgBg");
	this.shape_1226.setTransform(66.9,118);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.f("#660000").s().p("AgrA+QgHgCABgFQAAgEACgDQADgCAFAAIAFABIAEAAIAIgBIAEgEIAFgJIACgFIgghHQgEgHAAgCQABgDABgDIAFgEQADgCAEAAQAFAAADAEQADACACAHIAWA4IAVg1IAFgKQACgDACgCIAHgBIAFABQAEACABADIABAEIgBAFIgCAGIgjBPQgEALgEAFQgEAHgHACQgHAEgMAAQgMAAgFgDg");
	this.shape_1227.setTransform(41,119.7);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.f("#660000").s().p("AgJA8QgHgEgCgGQgCgHAAgLIAAgsIgEAAQgFAAgDgCQgDgCAAgEQAAgEADgCQADgCAGAAIADAAIAAgOIABgJIABgGQACgCADgCQADgBADAAQAGAAACADQADACABAEIABAJIAAAQIAKAAQAGAAADACQACACAAAEQAAAFgEACQgEABgIAAIgFAAIAAAqIABAJIACAFQACABAEAAIAGAAIAGgBQAEAAADACQACACAAAEQAAAFgHADQgHADgNAAQgMAAgGgDg");
	this.shape_1228.setTransform(20.8,116.4);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.f("#660000").s().p("AAZAsQgEgEAAgHIAAgmQAAgLgEgGQgDgGgLAAQgHAAgFADQgGAEgDAHQgCAFAAANIAAAdQAAAHgDAEQgFADgFAAQgGAAgEgDQgDgEgBgHIAAhCQABgHADgDQADgDAGAAIAGABIAFAEQABADABAEIAAADQAHgIAIgEQAIgDAKAAQALAAAIAEQAJAEADAHQADAEABAFIABANIAAAqQgBAHgDAEQgDADgHAAQgFAAgEgDg");
	this.shape_1229.setTransform(10.8,118);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.f("#660000").s().p("AAuA8QgEgDAAgHIAAhWIgWBPIgEALQgBAEgEADQgEADgHAAQgEAAgDgCQgEgCgCgDIgDgHIgDgHIgWhPIAABWQgBAHgDADQgEAEgGAAQgGAAgEgEQgDgDAAgHIAAhjQAAgIAFgDQAEgDAJAAIAJAAQAIAAAEACQADABACADIAEALIAUBEIAVhEIAEgLQACgDADgBQAEgCAIAAIAJAAQAIAAAGADQAEADAAAIIAABjQAAAHgDADQgEAEgGAAQgGAAgEgEg");
	this.shape_1230.setTransform(-15.6,116.3);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.f("#660000").s().p("AgVA8QgKgDgHgGQgHgHgEgIQgDgJAAgKQAAgLADgIQAEgIAHgGQAHgHAKgDQAKgEALAAQAMAAAKAEQAKADAHAHQAHAGADAIQAEAIAAALQAAAKgEAJQgDAIgHAHQgIAGgJAEQgKADgMAAQgLAAgKgEgAgNgJQgGADgDAHQgEAGAAAKQAAAJAEAGQADAIAGADQAGAEAHAAQAMAAAHgIQAHgIAAgOQAAgOgHgIQgHgHgMgBQgHABgGADgAgSgqIACgFIAEgGQAEgHADgBQADgCAFAAIANAAQAFAAAAABIgGAFIgLAKIgGAFQgGADgGAAQgBAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAgBg");
	this.shape_1231.setTransform(-92.3,116.3);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.f("#660000").s().p("AgOA/QgKgCgHgEQgIgEgHgGQgFgGgEgHQgEgIgCgIQgCgIAAgKQAAgOAFgMQAFgMAJgIQAKgJANgEQAMgFAOAAQARAAANAGQAOAGAHAJQAIAJgBAIQAAAFgDADQgEADgFAAQgFAAgDgCQgDgCgDgGQgGgJgIgFQgHgEgLAAQgRAAgLALQgLAMABAVQgBAPAFAJQAFAKAJAFQAIAFALAAQAMAAAJgGQAIgFAFgLQABgFADgDQADgDAGAAQAFAAAEADQAEADAAAFQAAAGgEAHQgDAHgHAHQgHAHgLAEQgMAEgPAAQgKAAgJgCg");
	this.shape_1232.setTransform(-105.8,116.2);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.f("#660000").s().p("AgkAzQgOgNAAgVQAAgLAEgIQADgIAHgHQAHgGAJgDQAKgEALAAQAQAAALAGQALAFAGAKQAGAJAAAJQAAAIgGADQgGADgKgBIg0AAQAAAIAEAHQAEAGAGADQAFACAHAAIAIgBIAIgCIAHgFIAIgHQACgBAEAAQAEAAACACQADACAAADQAAAEgDAEQgDAEgFAEQgGAEgJADQgIACgMAAQgYAAgPgNgAgPgHQgGAFgCALIAwAAQgBgLgHgFQgGgHgKAAQgJAAgHAHgAgRgqIACgFIAEgGQAEgHADgBQADgCAFAAIANAAQAFAAAAABIgGAFIgLAKIgGAFQgGADgGAAQgBAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAgBg");
	this.shape_1233.setTransform(-124.1,116.3);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.f("#660000").s().p("AgZAsQgKgEgFgGQgFgGAAgGQAAgDADgDQAEgDAEAAQAFAAACACIAEAFQAEAGAGADQAFADAJAAQAJAAAEgDQAGgDgBgEQABgGgGgDQgFgDgLgCQgOgDgJgEQgIgCgGgFQgEgGAAgIQAAgHAEgGQAFgGAJgEQAKgDANAAQAJAAAJABQAIACAFADQAGAEACADQADAEAAAEQAAAEgDADQgDACgGAAQgDAAgDgCIgHgGIgHgGQgEgCgGAAQgIAAgEADQgFADAAAEQAAADADADQAEACAGACIAQADQAMADAIAEQAHACAFAGQAEAEAAAHQAAAKgGAGQgFAHgKAEQgLADgOAAQgOAAgLgDg");
	this.shape_1234.setTransform(-135.6,118);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.f("#660000").s().p("AgYA9QgJgEgHgJQgDgFgBgGQgCgGAAgGQAAgGADgDQAEgDAGAAQAGAAACADQADACACAHIAEAKQABAEAEADQAEADAHAAQATAAAAgZIAAhEQAAgIADgEQAEgEAHAAQAGAAAFAEQADAEAAAIIAABAIgBAPQAAAGgDAGQgFAKgLAGQgMAGgPAAQgOAAgKgEg");
	this.shape_1235.setTransform(-159.4,116.2);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.f("#660000").s().p("AgEBEIgKgDIgGgGIgIgHIAAADQAAAHgEAEQgDADgHAAQgFAAgEgDQgEgEAAgHIAAhsQAAgIADgEQAEgDAGAAQAHAAADADQAEAEAAAHIAAAmQAJgIAHgDQAJgEAMAAQAOAAALAGQAKAFAGAMQAGAKAAAPQAAAMgDAKQgEAJgGAGQgGAHgJAFQgJADgLAAQgGABgGgCgAgNgJQgGAEgEAHQgEAHABAKQgBAPAJAIQAHAIAMAAQAKAAAIgIQAIgIAAgQQAAgJgDgHQgEgHgFgEQgGgDgIAAQgHAAgHADg");
	this.shape_1236.setTransform(48.9,212.8);

	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.f("#660000").s().p("AA4AvQgEgEAAgIIAAgpIAAgNQgBgEgEgEQgDgEgIAAQgFABgFADQgFACgDAGQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgGAAgDgEQgEgEgBgIIAAgnIgBgOQAAgFgDgEQgEgEgGAAQgOAAgFAJQgEAJgBAOIAAAiQAAAIgDAEQgFAEgGAAQgGAAgFgEQgEgEAAgIIAAhGQAAgIAEgDQADgEAGAAQAGAAAFAEQAEADgBAGIAAADQAIgJAJgDQAIgEAKAAQALAAAIAEQAGAEAFAIQAIgIAIgEQAIgEAKAAQAMAAAIAFQAJADAEAIQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgGAAgFgEg");
	this.shape_1237.setTransform(32.5,214.6);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.f("#660000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgIAEgDQADgEAHABQAFAAAFADQADAEAAAGIAAAEQAIgJAJgEQAIgEAKAAQAOAAALAGQALAGAHALQAGAMAAAPQAAAMgEAJQgEAJgGAHQgHAGgJAEQgIADgLAAQgLAAgIgEQgJgEgHgJIAAAmQAAAQgNAAQgJABgCgFgAgTgpQgHAHgBAQQABAQAHAGQAJAJAKAAQAIAAAGgDQAGgFADgGQAEgGAAgLQAAgKgDgHQgEgHgGgEQgGgDgIAAQgKgBgJAJg");
	this.shape_1238.setTransform(-9.5,216.5);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.f("#660000").s().p("AgkA+QgLgGgGgIQgHgJAAgJQAAgFAEgDQAEgEAGAAQAFAAADADQADACADAGIAGALQAEADAGAEQAGADAKAAQANAAAIgHQAJgFAAgIQAAgHgEgEQgFgEgIgCQgHgDgLgCQgQgDgMgFQgLgDgHgJQgGgIAAgLQAAgLAHgIQAGgJAOgFQANgFARABQANAAALACQALADAGAGQAHAFADAFQADAGAAAFQAAAFgDAEQgFAEgGAAQgFAAgCgDQgEgCgCgFQgFgHgFgFQgHgEgLAAQgMAAgIAEQgIAFABAHQAAAEACACQADAEAEACIAJADIAOAEIAXAFQALADAHAFQAHAEAFAGQAEAIAAAJQAAANgHAKQgHAKgOAFQgOAFgTAAQgVAAgPgHg");
	this.shape_1239.setTransform(-36,212.8);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.f("#660000").s().p("AgXBBQgKgEgHgGQgGgGgDgGQgEgHAAgEQAAgFAEgDQAEgEAGAAIAGACIADADQAGANAGAGQAGAHALAAQAGAAAGgDQAGgDAEgGQAEgFAAgHQAAgLgHgGQgHgGgLAAIgGAAIgGABQgFAAgEgDQgDgCAAgEQAAgEAEgDQAEgDAHAAIAFAAQAIAAAHgFQAHgFAAgJQAAgHgFgFQgGgFgIAAQgHAAgEABIgHAFIgEAGIgEAIIgEADIgGABQgEAAgEgDQgDgDAAgFQAAgFADgFQADgFAHgFQAGgFAJgDQAKgDALAAQAKAAAIADQAIACAHAFQAGAEADAGQADAGAAAHQAAAKgEAGQgFAHgJAGQAJAEAFAEQAGAFADAGQADAGAAAHQAAAIgEAIQgEAHgIAHQgHAGgKADQgKAEgMAAQgMAAgKgEg");
	this.shape_1240.setTransform(-86.4,212.8);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.f("#660000").s().p("AgkBDQgIAAgFgDQgEgEAAgFQAAgDADgGQADgGADgDIAZgVIAQgMIAOgKQAFgFADgFQADgHAAgEQAAgHgDgEQgDgFgGgCQgFgDgGAAQgNAAgIALIgEAHQgCAGgDADQgDAEgGAAQgGAAgDgDQgDgDAAgFQAAgHADgHQADgGAHgGQAGgGAKgDQAKgEANAAQAPAAALAFQAIADAFAFQAGAFADAHQADAGAAAIQAAALgGAKQgHAIgHAFIgWAQQgPALgGAHIgFAGIA2AAQAIAAAEADQAFADAAAFQAAAFgEACQgDADgHAAg");
	this.shape_1241.setTransform(-98.9,212.7);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.f("#660000").s().p("AAhAvQgFgDgEgIQgLAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAIgIQAHgGANgCIAOgDIARgDIARgFQgBgJgEgFQgEgFgNAAQgKAAgFADQgGADgEAFIgFAHQgBABgGAAQgFAAgDgCQgEgDAAgEQAAgHAFgGQAGgGALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAKQAAADgEADQgFAEgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAFAEQAFAFAHAAQAIgBAHgDQAHgDAEgFQAEgGAAgNIAAgEIgSAFg");
	this.shape_1242.setTransform(271.1,190.4);

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.f("#660000").s().p("AgjBEQgKAAgEgEQgFgEAAgIIAAhnQAAgIAFgEQADgEAIAAQAGAAAFAEQAFAEAAAIIAABhIA+AAQAHAAAEADQAEADAAAFQAAAFgEADQgEADgHAAg");
	this.shape_1243.setTransform(240.1,188.4);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.f("#660000").s().p("AgOAaQAAAAgBgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgFAFgBQALgHAAgJQgGABgFgDQgFgEAAgGQAAgHAFgDQAFgFAGAAQAFABAEACQAEACACAFQACAFAAAGQAAAJgEAHQgEAJgHAEQgFAFgFgBQgEABgCgCg");
	this.shape_1244.setTransform(224.3,195.5);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.f("#660000").s().p("AgaAuQgLgDgGgHQgFgGAAgGQAAgEADgDQADgDAGAAQAEAAACACIAFAFQAFAHAGAEQAGADAKAAQAIAAAGgDQAFgEAAgEQAAgHgFgDQgHgDgMgDQgPgDgIgEQgKgCgGgGQgFgGAAgIQAAgHAFgHQAFgHALgEQAKgEANAAQAKAAAKACQAIACAGADQAGAEADAEQAEAEAAAEQAAAFgEACQgDADgHAAQgEAAgDgCIgHgHQgDgDgEgDQgFgCgHAAQgIAAgFADQgEADgBAEQAAAEAEADIAKAEIARAEQANADAJAEQAIADAFAFQAEAFAAAHQAAAKgGAIQgFAHgMAEQgLAEgPAAQgPAAgLgFg");
	this.shape_1245.setTransform(215.9,190.4);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.f("#660000").s().p("AAgAvQgEgDgFgIQgKAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIAOgDIARgDIARgFQgBgJgEgFQgEgFgNAAQgJAAgGADQgFADgEAFIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAFgGQAGgGALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAKQAAADgEADQgFAEgEAAQgFAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAEAEQAFAFAIAAQAIgBAHgDQAIgDADgFQADgGABgNIAAgEIgSAFg");
	this.shape_1246.setTransform(197.9,190.4);

	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.f("#660000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgIADgDQAFgDAFAAQAGAAAFADQADAEAAAGIAAAEQAJgJAIgEQAIgEAKAAQAOAAALAGQALAGAHALQAGALAAARQAAALgEAJQgDAJgHAHQgGAGgKAEQgIAEgLgBQgKABgJgFQgIgEgIgJIAAAmQAAAQgOAAQgHABgDgFgAgTgpQgIAHAAARQAAAPAIAGQAJAJAKAAQAIAAAGgDQAGgFAEgGQADgGAAgLQAAgKgDgHQgEgHgFgEQgHgDgIgBQgKAAgJAJg");
	this.shape_1247.setTransform(185.1,192.3);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.f("#660000").s().p("AgaAuQgLgDgGgHQgFgGAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAFQAFAHAGAEQAGADAKAAQAIAAAFgDQAGgEAAgEQAAgHgGgDQgFgDgNgDQgPgDgIgEQgKgCgFgGQgGgGAAgIQAAgHAFgHQAGgHAKgEQAJgEAOAAQALAAAIACQAKACAFADQAGAEADAEQADAEAAAEQAAAFgDACQgEADgGAAQgDAAgEgCIgHgHQgDgDgEgDQgFgCgHAAQgHAAgFADQgGADAAAEQABAEADADIALAEIAQAEQANADAJAEQAIADAFAFQAEAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgPAAgKgFg");
	this.shape_1248.setTransform(137.8,190.4);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgCIgKAJQgHAEgGACQgGACgIAAQgLAAgIgEQgIgEgFgHQgFgHAAgPIAAgxQAAgHAEgEQADgEAHAAQAGAAAEAEQAFAEAAAHIAAAnQgBAJACAFQACAGAFAEQADAEAIAAQAGgBAHgEQAGgDADgHQACgEABgSIAAgeQAAgHADgEQAFgEAGAAQAGAAAEAEQAEAEAAAHIAABHQAAAIgEADQgDAEgGAAQgHAAgDgEg");
	this.shape_1249.setTransform(112.9,190.4);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.f("#660000").s().p("AAaAvQgDgEAAgIIAAgoQgBgNgEgGQgDgHgMABQgHAAgGADQgGAFgDAGQgCAGAAAPIAAAeQgBAIgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgDQADgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAIgJAIgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_1250.setTransform(82,190.4);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.f("#660000").s().p("AAgAvQgEgDgEgIQgLAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgHQAAgKAHgIQAIgGANgCIAOgDIARgDIARgFQgBgJgEgFQgEgFgNAAQgJAAgGADQgFADgEAFIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAFgGQAGgGALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAKQAAADgEADQgFAEgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAFAEQAEAFAIAAQAIgBAHgDQAIgDADgFQADgGABgNIAAgEIgSAFg");
	this.shape_1251.setTransform(38.2,190.4);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.f("#660000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgIADgDQAFgDAGAAQAFAAAFADQADAEAAAGIAAAEQAIgJAJgEQAIgEAKAAQAOAAALAGQALAGAHALQAGALAAARQAAALgEAJQgDAJgHAHQgGAGgKAEQgIAEgLgBQgLABgIgFQgIgEgIgJIAAAmQAAAQgNAAQgJABgCgFgAgTgpQgHAHgBARQABAPAHAGQAIAJALAAQAIAAAGgDQAGgFAEgGQADgGAAgLQAAgKgDgHQgEgHgFgEQgHgDgIgBQgKAAgJAJg");
	this.shape_1252.setTransform(3.9,192.3);

	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.f("#660000").s().p("AA5AvQgFgEAAgIIAAgpIgBgNQgBgEgDgEQgEgDgGAAQgGAAgFADQgFACgDAGQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgFgEQgDgEAAgIIAAgnIgBgOQgBgFgDgEQgDgDgIAAQgOgBgEAJQgFAJABAOIAAAiQAAAIgFAEQgEAEgGAAQgHAAgDgEQgFgEAAgIIAAhHQAAgGAEgEQAEgEAGAAQAFAAAEAEQAEADAAAGIAAACQAIgHAIgEQAJgEAKAAQALAAAHAEQAHAEAGAHQAGgHAJgEQAJgEAKAAQALABAJAEQAIADAEAIQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_1253.setTransform(-12.6,190.4);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.f("#660000").s().p("AAbAvQgFgEAAgIIAAgoQAAgNgDgGQgEgHgMABQgHAAgGADQgGAFgDAGQgDAGAAAPIAAAeQAAAIgDAEQgEAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgDQADgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAHgJAJgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1254.setTransform(-57.7,190.4);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.f("#660000").s().p("AgEBEIgKgDIgGgGIgIgHIAAADQAAAHgEAEQgDADgHAAQgFAAgEgDQgEgEAAgHIAAhsQAAgHADgFQAEgDAGAAQAHAAADADQAEAEAAAHIAAAmQAJgHAHgEQAJgEAMAAQAOAAALAGQAKAGAGALQAGAKAAAPQAAAMgDAKQgEAJgGAHQgGAGgJAFQgJADgLAAQgGABgGgCgAgNgJQgGAEgEAHQgEAHABAKQgBAPAJAIQAHAIAMAAQAKAAAIgIQAIgIAAgPQAAgLgDgGQgEgHgFgEQgGgEgIAAQgHAAgHAEg");
	this.shape_1255.setTransform(-83.4,188.6);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.f("#660000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgIADgDQAFgDAFAAQAGAAAFADQADAEAAAGIAAAEQAJgJAIgEQAIgEAKAAQAOAAALAGQALAGAHALQAGALAAARQAAALgEAJQgDAJgHAHQgGAGgKAEQgIAEgLgBQgKABgJgFQgIgEgIgJIAAAmQAAAQgOAAQgHABgDgFgAgTgpQgIAHAAARQAAAPAIAGQAJAJAKAAQAIAAAGgDQAGgFAEgGQADgGAAgLQAAgKgDgHQgEgHgFgEQgHgDgIgBQgKAAgJAJg");
	this.shape_1256.setTransform(-130.8,192.3);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgCIgKAJQgHAEgGACQgGACgIAAQgLAAgIgEQgIgEgFgHQgFgHAAgPIAAgxQAAgHAEgEQAEgEAGAAQAGAAAEAEQAFAEAAAHIAAAnQAAAJABAFQACAGAFAEQAEAEAHAAQAHgBAFgEQAHgDADgHQADgEAAgSIAAgeQAAgHADgEQAEgEAHAAQAGAAAEAEQAEAEAAAHIAABHQAAAIgEADQgDAEgHAAQgFAAgEgEg");
	this.shape_1257.setTransform(-187,190.4);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.f("#660000").s().p("AAgBBQgDgEAAgJIAAgiQgIAGgJAFQgJADgKAAQgNAAgLgGQgLgGgHgLQgGgLAAgPQAAgRAGgLQAHgLALgGQALgGAOAAQAKAAAJAEQAJAEAHAJIAAgEQAAgGAEgEQADgDAGAAQAGAAAEADQAEAEAAAGIAABrQAAASgOgBQgIABgCgFgAgTgpQgHAIAAAQQAAAJAEAHQADAHAGAEQAGADAHAAQAHAAAHgDQAGgEAEgHQAEgGAAgLQAAgIgDgGQgCgGgEgDQgEgEgFgDQgFgBgFgBQgLAAgIAJg");
	this.shape_1258.setTransform(-200.6,192.3);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f("#660000").s().p("AgaAuQgLgDgGgHQgFgGAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAFQAFAHAGAEQAGADAKAAQAIAAAFgDQAGgEAAgEQAAgHgGgDQgFgDgNgDQgPgDgIgEQgKgCgFgGQgGgGAAgIQAAgHAFgHQAGgHAKgEQAJgEAOAAQALAAAIACQAKACAFADQAGAEADAEQADAEAAAEQAAAFgDACQgEADgGAAQgDAAgEgCIgHgHQgDgDgEgDQgFgCgHAAQgHAAgFADQgGADAAAEQABAEADADIALAEIAQAEQANADAJAEQAIADAFAFQAEAFAAAHQAAAKgGAIQgGAHgLAEQgLAEgQAAQgPAAgKgFg");
	this.shape_1259.setTransform(-262.7,190.4);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgCIgLAJQgFAEgHACQgGACgIAAQgLAAgIgEQgIgEgFgHQgFgHAAgPIAAgxQAAgHAEgEQADgEAHAAQAGAAAFAEQADAEAAAHIAAAnQABAJABAFQACAGAFAEQADAEAIAAQAGgBAHgEQAGgDADgHQACgEAAgSIAAgeQAAgHAEgEQAFgEAGAAQAGAAAEAEQAEAEAAAHIAABHQAAAIgEADQgEAEgFAAQgHAAgDgEg");
	this.shape_1260.setTransform(-274.9,190.4);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f("#660000").s().p("AgWBUQgGgDgBgGQAAgEADgDQAEgDAEAAIADABIADAAIAEAAQAGAAACgEQABgEAAgKIAAhTQAAgIAEgEQAEgDAGAAQAHAAADADQAFAEAAAIIAABUIgBAOIgCAJQgHAPgXAAQgMAAgHgDgAAFhBQgEgDAAgGQAAgGAEgDQAFgDAFAAQAGAAAEACQAFAEAAAGQAAAGgFADQgEADgGAAQgFAAgFgDg");
	this.shape_1261.setTransform(-285.8,190.5);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.f("#660000").s().p("AAaAvQgDgEAAgIIAAgoQAAgNgFgGQgDgHgMABQgHAAgGADQgHAFgCAGQgCAGAAAPIAAAeQAAAIgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgDQADgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAIgJAIgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_1262.setTransform(-293.7,190.4);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADABAAAEQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_1263.setTransform(277.5,166.3);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgDQgGAGgFAEQgGAEgGACQgGACgHAAQgLAAgIgFQgKgDgGgIQgGgGgEgKQgDgKAAgLQAAgWANgNQANgNAWAAQALAAAIAEQAJADAIAIIAAglQAAgIAEgDQADgEAHgBQAGAAAEAEQADAEAAAHIAABtQAAAHgDADQgFAFgFAAQgGAAgEgFgAgNgJQgGAEgEAGQgDAHAAAKQAAALADAGQAEAIAGADQAHAEAGAAQAIAAAGgEQAGgDAEgHQADgHAAgLQAAgKgDgHQgEgGgGgEQgGgEgIABQgHAAgGADg");
	this.shape_1264.setTransform(258.7,164.4);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAGgKAFQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAIgHQAHgGANgDIANgCIASgDIAQgFQAAgKgEgEQgEgEgMgBQgLABgFACQgGACgEAGIgFAHQgBACgGgBQgFABgDgDQgEgDAAgEQAAgHAGgFQAFgHALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAOIAAAPIgBANQAAAHAEAIIACAJQAAAFgEADQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAGAEADQAFAEAJABQAHAAAIgEQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_1265.setTransform(246,166.3);

	this.shape_1266 = new cjs.Shape();
	this.shape_1266.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgDQgGAGgFAEQgGAEgGACQgGACgHAAQgLAAgIgFQgKgDgGgIQgGgGgEgKQgDgKAAgLQAAgWANgNQANgNAWAAQALAAAIAEQAJADAIAIIAAglQAAgIAEgDQADgEAHgBQAGAAAEAEQADAEAAAHIAABtQAAAHgDADQgFAFgFAAQgGAAgEgFgAgNgJQgGAEgEAGQgDAHAAAKQAAALADAGQAEAIAGADQAHAEAGAAQAIAAAGgEQAGgDAEgHQADgHAAgLQAAgKgDgHQgEgGgGgEQgGgEgIABQgHAAgGADg");
	this.shape_1266.setTransform(232.6,164.4);

	this.shape_1267 = new cjs.Shape();
	this.shape_1267.graphics.f("#660000").s().p("AAgAvQgEgEgFgGQgKAGgJAFQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAHgHQAIgGANgDIAOgCIARgDIARgFQgBgKgEgEQgEgEgNgBQgJABgGACQgFACgEAGIgGAHQgCACgFgBQgFABgDgDQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAAOIAAAPIAAANQAAAHACAIIADAJQAAAFgEADQgFADgEAAQgFAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAGAEADQAFAEAIABQAIAAAHgEQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_1267.setTransform(214.1,166.3);

	this.shape_1268 = new cjs.Shape();
	this.shape_1268.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgEIgKAKQgHAEgGACQgGABgIAAQgLABgIgEQgIgEgFgGQgFgJAAgPIAAgwQAAgHAEgEQAEgEAGAAQAGAAAEAEQAFAEAAAHIAAAnQAAAJABAGQACAFAFAEQAEAEAHgBQAHAAAFgDQAHgEADgGQADgGAAgRIAAgeQAAgHADgEQAEgEAHAAQAGAAAEAEQAEAEAAAHIAABIQAAAGgEAEQgDAEgHAAQgFAAgEgEg");
	this.shape_1268.setTransform(201.3,166.3);

	this.shape_1269 = new cjs.Shape();
	this.shape_1269.graphics.f("#660000").s().p("AgbBCQgMgEgGgFQgGgGAAgHQAAgEADgDQAEgCAFgBQAGABAFAEIAFAFIAFAFIAHACIAKABQAKAAAGgCQAGgDADgFQACgFABgFIAAgSQgGAHgJAFQgJAEgLAAQgOAAgLgGQgKgHgGgLQgGgLAAgPQAAgLAEgJQADgKAHgGQAGgGAJgDQAIgDAKAAQALAAAJAEQAJAEAIAIIAAgDQAAgGAEgEQADgDAGAAQAIAAADAEQADAFAAAJIAABIQAAAMgDAJQgDAJgHAGQgHAFgLAEQgKADgQAAQgOgBgMgDgAgTgpQgHAHAAAPQAAAQAHAHQAIAHALABQAHAAAHgEQAGgEAEgFQAEgHAAgKQAAgOgIgJQgIgJgMABQgLAAgIAIg");
	this.shape_1269.setTransform(187.8,168.1);

	this.shape_1270 = new cjs.Shape();
	this.shape_1270.graphics.f("#660000").s().p("AgbAvQgLgEgFgGQgFgHAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAFQAEAHAHADQAGADAJABQAJgBAGgDQAFgDAAgFQAAgGgFgDQgHgDgLgDQgPgDgKgDQgJgDgGgGQgFgGAAgIQAAgHAFgHQAFgHAKgEQALgEAOAAQAJAAAKACQAJACAGAEQAFADAEAEQADAEAAAEQgBAEgDADQgDADgHAAQgEAAgDgDIgHgGQgDgEgEgCQgFgCgGAAQgIAAgGADQgEADAAAEQgBAEAEADIAKAEIARAEQANACAJAEQAIADAEAGQAFAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgPAAgMgEg");
	this.shape_1270.setTransform(169.7,166.3);

	this.shape_1271 = new cjs.Shape();
	this.shape_1271.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADABAAAEQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_1271.setTransform(157.6,166.3);

	this.shape_1272 = new cjs.Shape();
	this.shape_1272.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgDQgGAGgFAEQgGAEgGACQgGACgIAAQgKAAgJgFQgJgDgGgIQgGgGgEgKQgDgKAAgLQAAgWANgNQAOgNAUAAQAMAAAJAEQAIADAIAIIAAglQAAgIAEgDQADgEAHgBQAGAAADAEQAEAEAAAHIAABtQAAAHgEADQgEAFgFAAQgGAAgEgFgAgNgJQgGAEgDAGQgEAHAAAKQAAALAEAGQADAIAHADQAFAEAHAAQAHAAAHgEQAGgDAEgHQAEgHgBgLQABgKgEgHQgEgGgGgEQgHgEgHABQgHAAgGADg");
	this.shape_1272.setTransform(144.2,164.4);

	this.shape_1273 = new cjs.Shape();
	this.shape_1273.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAGgKAFQgIADgMAAQgLAAgJgEQgIgEgFgGQgEgHAAgIQAAgKAHgHQAIgGANgDIANgCIASgDIARgFQgBgKgEgEQgEgEgMgBQgKABgGACQgFACgEAGIgGAHQgCACgFgBQgFABgDgDQgEgDAAgEQAAgHAGgFQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAOIAAAPIgBANQAAAHADAIIADAJQAAAFgEADQgFADgFAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAGAEADQAGAEAIABQAHAAAHgEQAIgDADgFQADgGABgNIAAgDIgTAEg");
	this.shape_1273.setTransform(126.1,166.3);

	this.shape_1274 = new cjs.Shape();
	this.shape_1274.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADABAAAEQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_1274.setTransform(102.3,166.3);

	this.shape_1275 = new cjs.Shape();
	this.shape_1275.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgDQgFAGgGAEQgGAEgHACQgFACgHAAQgLAAgIgFQgJgDgHgIQgGgGgDgKQgEgKAAgLQAAgWANgNQANgNAWAAQALAAAIAEQAJADAIAIIAAglQAAgIADgDQAEgEAGgBQAHAAAEAEQADAEAAAHIAABtQAAAHgDADQgFAFgGAAQgFAAgEgFgAgNgJQgHAEgDAGQgDAHAAAKQAAALADAGQAEAIAGADQAHAEAGAAQAHAAAHgEQAGgDAEgHQADgHABgLQgBgKgDgHQgEgGgGgEQgHgEgHABQgHAAgGADg");
	this.shape_1275.setTransform(88.9,164.4);

	this.shape_1276 = new cjs.Shape();
	this.shape_1276.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAGgJAFQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAIgHQAHgGANgDIAOgCIARgDIARgFQgBgKgEgEQgEgEgNgBQgKABgFACQgGACgEAGIgFAHQgBACgGgBQgFABgDgDQgEgDAAgEQAAgHAFgFQAGgHALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAIAAAOIAAAPIAAANQAAAHACAIIADAJQAAAFgEADQgFADgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAGAFADQAFAEAHABQAIAAAHgEQAHgDAEgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_1276.setTransform(70.8,166.3);

	this.shape_1277 = new cjs.Shape();
	this.shape_1277.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADABAAAEQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_1277.setTransform(36.7,166.3);

	this.shape_1278 = new cjs.Shape();
	this.shape_1278.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAGgKAFQgIADgMAAQgLAAgJgEQgIgEgFgGQgEgHAAgIQAAgKAHgHQAIgGANgDIANgCIASgDIAQgFQAAgKgEgEQgEgEgMgBQgKABgGACQgFACgEAGIgGAHQgBACgGgBQgFABgDgDQgEgDAAgEQAAgHAGgFQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAOIAAAPIgBANQAAAHADAIIADAJQAAAFgEADQgFADgFAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAGAEADQAGAEAIABQAHAAAHgEQAIgDADgFQADgGAAgNIAAgDIgSAEg");
	this.shape_1278.setTransform(11.4,166.3);

	this.shape_1279 = new cjs.Shape();
	this.shape_1279.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAAKAEQALADAHAIQAIAGAEAJQAEAJAAALQAAALgEAKQgEAJgIAHQgHAHgLADQgKAEgNAAQgMAAgKgEgAgOgbQgHADgDAIQgDAHgBAJQABAKADAHQADAIAHAEQAGADAIAAQANAAAIgJQAHgIAAgPQAAgPgHgIQgIgJgNAAQgHAAgHAFg");
	this.shape_1279.setTransform(-6.8,166.3);

	this.shape_1280 = new cjs.Shape();
	this.shape_1280.graphics.f("#660000").s().p("AAaAvQgDgEAAgHIAAgpQgBgMgEgHQgDgGgMgBQgHAAgGAFQgGADgDAIQgCAFAAAOIAAAgQgBAHgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIAEgEQADgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAIgIAIgEQAIgFAMAAQALAAAJAFQAJAEAEAIQADAEABAGIABANIAAAuQAAAHgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_1280.setTransform(-19.7,166.3);

	this.shape_1281 = new cjs.Shape();
	this.shape_1281.graphics.f("#660000").s().p("AAhAvQgEgEgFgGQgLAGgJAFQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAHgHQAIgGANgDIAOgCIARgDIARgFQgBgKgEgEQgEgEgNgBQgJABgGACQgFACgFAGIgFAHQgCACgFgBQgFABgDgDQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAIAAAOIAAAPIAAANQAAAHACAIIADAJQAAAFgEADQgFADgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAGAFADQAFAEAHABQAIAAAHgEQAIgDADgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_1281.setTransform(-32.6,166.3);

	this.shape_1282 = new cjs.Shape();
	this.shape_1282.graphics.f("#660000").s().p("AAcAwQgDgCgEgGIgVgaIgUAaIgIAIQgDADgFAAQgGAAgDgDQgEgDAAgEQAAgEAFgIIAagfIgXgbQgFgHAAgFQgBgDAEgDQAEgDAFAAQAFAAAEACIAHAIIASAXIASgXIAIgIQADgCAFAAQAGAAAEADQADADAAADIgBAGIgFAGIgXAbIAaAfQAGAJAAADQAAAEgEADQgEADgFAAQgFAAgEgDg");
	this.shape_1282.setTransform(-62.9,166.3);

	this.shape_1283 = new cjs.Shape();
	this.shape_1283.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADABAAAEQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_1283.setTransform(-74.6,166.3);

	this.shape_1284 = new cjs.Shape();
	this.shape_1284.graphics.f("#660000").s().p("AA5AvQgFgEAAgIIAAgpIgBgNQgBgEgDgEQgEgDgGgBQgGAAgFAEQgFADgDAEQgDAHAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgFgEQgDgEAAgIIAAgnIgBgOQgBgGgDgDQgDgDgIgBQgOAAgEAJQgFAIABAQIAAAhQAAAIgFAEQgEAEgGAAQgHAAgDgEQgFgEAAgIIAAhGQAAgIAEgDQAEgEAGAAQAFAAAEADQAEAEAAAGIAAADQAIgJAIgDQAJgDAKgBQALABAHADQAHAEAGAIQAGgIAJgEQAJgDAKgBQALAAAJAFQAIAEAEAHQAEAHAAAOIAAAwQAAAIgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_1284.setTransform(-90.4,166.3);

	this.shape_1285 = new cjs.Shape();
	this.shape_1285.graphics.f("#660000").s().p("AgWAvQgLgEgHgGQgIgHgEgJQgEgKAAgLQAAgKAEgKQAEgJAIgHQAHgGALgEQAKgEAMAAQANAAALAEQAKADAIAIQAHAGAEAJQAEAJAAALQAAALgEAKQgEAJgHAHQgIAHgKADQgLAEgNAAQgMAAgKgEgAgOgbQgGADgEAIQgDAHgBAJQABAKADAHQAEAIAGAEQAGADAIAAQANAAAIgJQAHgIAAgPQAAgPgHgIQgIgJgNAAQgHAAgHAFg");
	this.shape_1285.setTransform(-111.8,166.3);

	this.shape_1286 = new cjs.Shape();
	this.shape_1286.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEgBQgHABgDADQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1286.setTransform(-128.1,166.3);

	this.shape_1287 = new cjs.Shape();
	this.shape_1287.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgJQgEgKAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAALAEQAKADAIAIQAHAGAEAJQAEAJAAALQAAALgEAKQgEAJgHAHQgIAHgKADQgLAEgNAAQgMAAgLgEgAgOgbQgHADgDAIQgDAHAAAJQAAAKADAHQADAIAHAEQAGADAIAAQANAAAHgJQAIgIAAgPQAAgPgIgIQgHgJgNAAQgIAAgGAFg");
	this.shape_1287.setTransform(-139.9,166.3);

	this.shape_1288 = new cjs.Shape();
	this.shape_1288.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgLIAAgwIgEAAQgGAAgDgCQgEgDAAgEQAAgEAEgCQADgDAHAAIADAAIAAgOIAAgKQAAgDACgDQACgDADgBQADgCAEAAQAFAAAEAEQADACABADIAAAKIAAARIALAAQAGAAADADQADACAAAEQAAAGgEABQgFACgIAAIgGAAIAAAtIABAJQAAAEACABQACACAFAAIAHgBIAHAAQADAAADACQADADAAADQAAAGgIADQgIAEgOAAQgMAAgHgEg");
	this.shape_1288.setTransform(-149.8,164.6);

	this.shape_1289 = new cjs.Shape();
	this.shape_1289.graphics.f("#660000").s().p("AAgAvQgEgEgFgGQgKAGgJAFQgJADgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgKAHgHQAIgGANgDIAOgCIARgDIARgFQgBgKgEgEQgEgEgNgBQgJABgGACQgFACgEAGIgGAHQgCACgFgBQgFABgDgDQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAAOIAAAPIAAANQAAAHACAIIADAJQAAAFgEADQgFADgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAGAEADQAFAEAIABQAIAAAHgEQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_1289.setTransform(-159.8,166.3);

	this.shape_1290 = new cjs.Shape();
	this.shape_1290.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgDQgGAGgFAEQgGAEgHACQgFACgHAAQgLAAgJgFQgIgDgHgIQgGgGgDgKQgEgKAAgLQAAgWAOgNQANgNAVAAQALAAAJAEQAIADAIAIIAAglQAAgIADgDQAEgEAGgBQAHAAADAEQAEAEAAAHIAABtQAAAHgEADQgDAFgHAAQgFAAgEgFgAgNgJQgGAEgDAGQgEAHAAAKQAAALAEAGQADAIAGADQAGAEAHAAQAIAAAGgEQAGgDAEgHQAEgHAAgLQAAgKgEgHQgEgGgGgEQgGgEgIABQgHAAgGADg");
	this.shape_1290.setTransform(-173.2,164.4);

	this.shape_1291 = new cjs.Shape();
	this.shape_1291.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEgBQgHABgDADQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1291.setTransform(-183.1,166.3);

	this.shape_1292 = new cjs.Shape();
	this.shape_1292.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgJQgEgKAAgLQAAgKAEgKQAEgJAHgHQAIgGAKgEQALgEAMAAQANAAALAEQAKADAIAIQAHAGAEAJQAEAJAAALQAAALgEAKQgEAJgHAHQgIAHgKADQgLAEgNAAQgMAAgLgEgAgOgbQgHADgDAIQgEAHABAJQgBAKAEAHQADAIAHAEQAGADAIAAQANAAAHgJQAIgIAAgPQAAgPgIgIQgHgJgNAAQgIAAgGAFg");
	this.shape_1292.setTransform(-194.9,166.3);

	this.shape_1293 = new cjs.Shape();
	this.shape_1293.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADABAAAEQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_1293.setTransform(-220.4,166.3);

	this.shape_1294 = new cjs.Shape();
	this.shape_1294.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEgBQgHABgDADQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1294.setTransform(-230.2,166.3);

	this.shape_1295 = new cjs.Shape();
	this.shape_1295.graphics.f("#660000").s().p("AAbAvQgFgEAAgHIAAgpQAAgMgDgHQgFgGgLgBQgHAAgGAFQgGADgEAIQgCAFAAAOIAAAgQAAAHgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgEQAEgDAGAAQAEAAADABIAFAGQACADAAAEIAAADQAHgIAKgEQAHgFAMAAQALAAAJAFQAJAEAFAIQACAEABAGIABANIAAAuQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1295.setTransform(-247.4,166.3);

	this.shape_1296 = new cjs.Shape();
	this.shape_1296.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAGgKAFQgIADgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgKAIgHQAHgGANgDIANgCIASgDIAQgFQAAgKgEgEQgEgEgMgBQgLABgFACQgGACgEAGIgFAHQgBACgGgBQgFABgDgDQgEgDAAgEQAAgHAGgFQAFgHALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAOIAAAPIgBANQAAAHAEAIIACAJQAAAFgEADQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAGAEADQAFAEAJABQAHAAAIgEQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_1296.setTransform(-260.2,166.3);

	this.shape_1297 = new cjs.Shape();
	this.shape_1297.graphics.f("#660000").s().p("AgiAvQgEgEAAgHIAAhFQAAgRAOAAQAHAAADAEQADAEAAAIQAGgIAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAHQAAAEgDADQgEADgEAAIgIgBQgGgCgEgBQgHABgDADQgDADgDAFIgDANIgBASIAAAWQAAAHgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1297.setTransform(-270.1,166.3);

	this.shape_1298 = new cjs.Shape();
	this.shape_1298.graphics.f("#660000").s().p("AgbBCQgMgEgGgFQgGgGAAgHQAAgEADgDQAEgCAFgBQAGABAFAEIAFAFIAFAFIAHACIAKABQAKAAAGgCQAGgDADgFQACgFABgFIAAgSQgGAHgJAFQgJAEgLAAQgOAAgLgGQgKgHgGgLQgGgLAAgPQAAgLAEgJQADgKAHgGQAGgGAJgDQAIgDAKAAQALAAAJAEQAJAEAIAIIAAgDQAAgGAEgEQADgDAGAAQAIAAADAEQADAFAAAJIAABIQAAAMgDAJQgDAJgHAGQgHAFgLAEQgKADgQAAQgOgBgMgDgAgTgpQgHAHAAAPQAAAQAHAHQAIAHALABQAHAAAHgEQAGgEAEgFQAEgHAAgKQAAgOgIgJQgIgJgMABQgLAAgIAIg");
	this.shape_1298.setTransform(-282.2,168.1);

	this.shape_1299 = new cjs.Shape();
	this.shape_1299.graphics.f("#660000").s().p("AgJBBQgEgEAAgHIAAhsQAAgHADgDQAEgEAGgBQAGABAEAEQAEADAAAHIAABsQAAAHgEAEQgEAFgGAAQgGAAgDgFg");
	this.shape_1299.setTransform(-296.9,164.4);

	this.shape_1300 = new cjs.Shape();
	this.shape_1300.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgJQAEgJAHgHQAIgHAKgEQALgDAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAGAGAEQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADABAAAEQAAAEgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_1300.setTransform(-306.1,166.3);

	this.shape_1301 = new cjs.Shape();
	this.shape_1301.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgDIgKAJQgHAEgGACQgGABgIAAQgLAAgIgDQgIgEgFgGQgFgJAAgPIAAgwQAAgIAEgDQAEgEAGAAQAGAAAEAEQAFADAAAIIAAAnQAAAJABAGQACAFAFAEQAEAEAHgBQAHAAAFgDQAHgEADgGQADgFAAgSIAAgeQAAgIADgDQAEgEAHAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgDAEgHAAQgFAAgEgEg");
	this.shape_1301.setTransform(256.7,142.1);

	this.shape_1302 = new cjs.Shape();
	this.shape_1302.graphics.f("#660000").s().p("AgPBCQgEgFAAgHIAAhBIgIAAQgHAAgDgCQgEgDAAgEQAAgJAPAAIAHAAIAAgIQAAgMADgGQADgHAJgDQAHgDAOAAQAZgBAAALQAAADgDADQgCADgEAAIgGgBIgHAAQgHAAgDADQgCAEAAAIIAAAGIAHAAQARAAAAAJQAAAFgFADQgEABgIAAIgHAAIAABBQAAAHgEAFQgEADgFAAQgGAAgEgDg");
	this.shape_1302.setTransform(247,140.2);

	this.shape_1303 = new cjs.Shape();
	this.shape_1303.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgDIgLAJQgFAEgHACQgGABgJAAQgKAAgIgDQgIgEgEgGQgGgJAAgPIAAgwQAAgIAEgDQADgEAHAAQAHAAAEAEQADADAAAIIAAAnQAAAJACAGQACAFAEAEQAFAEAHgBQAHAAAFgDQAHgEADgGQACgFAAgSIAAgeQAAgIAFgDQAEgEAGAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_1303.setTransform(218.6,142.1);

	this.shape_1304 = new cjs.Shape();
	this.shape_1304.graphics.f("#660000").s().p("AAWA2IAAgqQAAgMgEgFQgDgHgMAAQgHAAgFAEQgHADgDAGQgCAGAAAOIAAAhQAAAHgEAFQgEADgGAAQgPAAAAgPIAAhsQAAgHAEgEQADgDAIAAQAGAAAEADQAEAEAAAHIAAAmQAFgGAGgDQAFgDAFgBQAGgCAHAAQALAAAJADQAIAEAFAIQADAFABAGIABALIAAAwQAAAHgEAFQgEADgGAAQgPAAAAgPg");
	this.shape_1304.setTransform(205.6,140.2);

	this.shape_1305 = new cjs.Shape();
	this.shape_1305.graphics.f("#660000").s().p("AAhAvQgFgEgEgGQgLAGgJAEQgJAEgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgJAIgIQAHgGANgDIAOgCIARgDIARgFQgBgKgEgEQgEgEgNgBQgKABgFACQgGACgEAGIgFAHQgBACgGgBQgFABgDgDQgEgDAAgEQAAgHAFgFQAGgHALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAIAAAOIAAAOIAAAOQAAAHADAIIACAJQAAAFgEACQgFAEgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAFAEQAFAFAHAAQAIAAAIgEQAGgDAEgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_1305.setTransform(192.8,142.1);

	this.shape_1306 = new cjs.Shape();
	this.shape_1306.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgDIgLAJQgGAEgGACQgGABgJAAQgKAAgIgDQgIgEgEgGQgGgJAAgPIAAgwQAAgIAEgDQADgEAHAAQAHAAAEAEQADADAAAIIAAAnQAAAJACAGQACAFAEAEQAFAEAHgBQAHAAAFgDQAHgEADgGQACgFAAgSIAAgeQABgIAEgDQADgEAHAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_1306.setTransform(180,142.1);

	this.shape_1307 = new cjs.Shape();
	this.shape_1307.graphics.f("#660000").s().p("AAXA2IAAgqQgBgMgEgFQgDgHgMAAQgHAAgFAEQgHADgDAGQgCAGAAAOIAAAhQAAAHgEAFQgEADgHAAQgOAAAAgPIAAhsQAAgHAEgEQAEgDAGAAQAHAAAEADQAEAEAAAHIAAAmQAFgGAGgDQAEgDAGgBQAGgCAIAAQAKAAAJADQAIAEAFAIQADAFABAGIABALIAAAwQAAAHgEAFQgEADgGAAQgOAAAAgPg");
	this.shape_1307.setTransform(167,140.2);

	this.shape_1308 = new cjs.Shape();
	this.shape_1308.graphics.f("#660000").s().p("AAXA2IAAgqQAAgMgFgFQgDgHgMAAQgGAAgHAEQgGADgDAGQgCAGAAAOIAAAhQAAAHgEAFQgEADgHAAQgOAAAAgPIAAhsQAAgHAEgEQAEgDAGAAQAHAAAEADQAEAEAAAHIAAAmQAFgGAFgDQAFgDAGgBQAGgCAIAAQALAAAIADQAIAEAFAIQADAFABAGIABALIAAAwQAAAHgEAFQgEADgGAAQgOAAAAgPg");
	this.shape_1308.setTransform(148.3,140.2);

	this.shape_1309 = new cjs.Shape();
	this.shape_1309.graphics.f("#660000").s().p("AgQBEQgJgCgJgFQgHgFgHgGQgHgGgDgJQgFgHgCgJQgCgJAAgKQgBgPAGgNQAFgNALgJQAKgJANgFQAOgEAOAAQATgBAOAHQAOAGAJAKQAHAJAAAJQAAAFgEADQgDAEgGAAQgFAAgEgDIgGgIQgGgKgJgFQgIgFgMAAQgSAAgMANQgLAMAAAXQAAAPAGALQAFALAIAEQAKAFALABQANAAAKgGQAJgGAFgLIAEgJQADgDAHAAQAFAAAEADQAFAEAAAEQgBAHgDAIQgDAHgJAHQgHAIgMAEQgMAEgQAAQgMAAgKgBg");
	this.shape_1309.setTransform(133.8,140.2);

	this.shape_1310 = new cjs.Shape();
	this.shape_1310.graphics.f("#660000").s().p("AAaAvQgDgEAAgHIAAgpQAAgNgFgGQgDgHgMAAQgHAAgGAFQgHADgDAHQgBAGAAAOIAAAgQAAAHgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgHIAAhHQAAgIADgDQAEgEAGAAQAEAAADABIAFAGQACADAAAEIAAADQAIgJAIgDQAIgFAMAAQALAAAJAFQAJAEAEAHQADAFABAFIABAOIAAAuQAAAHgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_1310.setTransform(114.1,142.1);

	this.shape_1311 = new cjs.Shape();
	this.shape_1311.graphics.f("#660000").s().p("AggA9QgMgGgEgHQgFgIAAgGQAAgEADgDQADgDAGAAQAIAAAFAJQAEAIAIAFQAGAEAJAAQAIAAAFgEQAGgDAEgHQADgGAAgIQAAgJgEgGQgDgGgGgCQgGgEgGAAQgKAAgEACIgKAGQgIAFgEAAQgGAAgDgDQgFgEAAgDIABgGIAJgsQACgIAEgDQAEgEAJAAIA2AAQAQAAAAALQAAAFgDADQgFADgHAAIgxAAIgGAdQAPgHALAAQALAAAIAEQAJADAGAGQAIAGADAHQAEAIAAAJQAAANgHALQgHALgMAGQgOAHgPAAQgTAAgMgHg");
	this.shape_1311.setTransform(83.5,140.4);

	this.shape_1312 = new cjs.Shape();
	this.shape_1312.graphics.f("#660000").s().p("AgfA9QgMgGgFgHQgFgIAAgGQAAgEAEgDQADgDAFAAQAJAAAEAJQAEAIAHAFQAIAEAIAAQAHAAAHgEQAGgDADgHQADgGAAgIQAAgJgDgGQgEgGgGgCQgGgEgGAAQgKAAgDACIgMAGQgHAFgFAAQgEAAgEgDQgEgEAAgDIABgGIAJgsQABgIAEgDQAEgEAJAAIA2AAQARAAAAALQAAAFgFADQgDADgIAAIgxAAIgGAdQAPgHAMAAQAKAAAJAEQAIADAHAGQAGAGAEAHQAEAIAAAJQAAANgHALQgHALgNAGQgMAHgQAAQgTAAgLgHg");
	this.shape_1312.setTransform(70.8,140.4);

	this.shape_1313 = new cjs.Shape();
	this.shape_1313.graphics.f("#660000").s().p("AgbBAQgKgEgGgHQgFgHAAgGQAAgEADgDQAEgDAFAAQAEAAAEACQAEADABAEQADAFAFAEQAFADAHAAQAFAAAGgDQAFgCAEgFQAHgKACgYQgHAGgJAEQgIADgKAAQgKAAgIgCQgJgEgGgGQgGgGgDgHQgEgIAAgJQAAgJAEgJQAEgIAHgGQAHgHAJgDQAKgDAMgBQAMABALAEQALAEAHAIQAHAJAEAMQAEANAAAPQAAAQgEAOQgEAOgIAIQgIAKgLAEQgLAFgNgBQgNABgKgFgAgTgqQgHAHAAAMQAAANAHAHQAHAGAKAAQAGAAAGgCQAGgDAEgFQADgGAAgIQAAgGgCgFQgCgGgDgEIgIgGQgFgCgFAAQgKAAgHAIg");
	this.shape_1313.setTransform(57.7,140.3);

	this.shape_1314 = new cjs.Shape();
	this.shape_1314.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgGAGgFAEQgGAEgHACQgFABgHAAQgLAAgJgDQgIgFgHgHQgGgGgDgKQgEgKAAgLQAAgWAOgNQANgNAVAAQALAAAJADQAIAEAIAIIAAglQAAgIADgEQAEgDAGAAQAHAAADADQAEAEAAAHIAABtQAAAHgEAEQgDADgHAAQgFAAgEgDgAgNgJQgGAEgDAGQgEAIAAAJQAAALAEAGQADAIAGADQAGAEAHAAQAIAAAGgEQAGgDAEgHQAEgHAAgLQAAgJgEgIQgEgGgGgEQgGgEgIABQgHAAgGADg");
	this.shape_1314.setTransform(-38.7,140.2);

	this.shape_1315 = new cjs.Shape();
	this.shape_1315.graphics.f("#660000").s().p("AAgAvQgEgEgFgGQgKAGgJAEQgJAEgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgJAHgIQAIgGANgDIAOgCIARgDIARgFQgBgKgEgEQgEgEgNgBQgJABgGACQgFACgEAGIgGAHQgCACgFgBQgFABgDgDQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAAOIAAAOIAAAOQAAAHACAIIADAJQAAAFgEACQgFAEgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAEAEQAFAFAIAAQAIAAAHgEQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_1315.setTransform(-51.4,142.1);

	this.shape_1316 = new cjs.Shape();
	this.shape_1316.graphics.f("#660000").s().p("AAyBAQgEgEgBgHIAAhcIgYBVIgEAMQgBAEgEADQgFADgHAAQgFAAgDgCQgEgCgCgDIgEgHIgCgIIgZhVIAABcQAAAHgDAEQgEAEgHAAQgGAAgEgEQgEgEAAgHIAAhqQAAgIAFgDQAGgDAIAAIAKAAIANABQADABACAEIAFALIAVBJIAXhJIADgLQACgEAEgBIANgBIAJAAQAJAAAGADQAFADAAAIIAABqQAAAHgEAEQgEAEgHAAQgFAAgEgEg");
	this.shape_1316.setTransform(-66.7,140.3);

	this.shape_1317 = new cjs.Shape();
	this.shape_1317.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADABAAAFQAAADgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_1317.setTransform(-87.3,142.1);

	this.shape_1318 = new cjs.Shape();
	this.shape_1318.graphics.f("#660000").s().p("AgmAlQgPgOAAgXQAAgLADgIQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAGAFAKQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAJAEAGQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgBAEAAQAEAAADACQADABAAAFQAAADgDAEQgDAFgGAEQgHAEgJADQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_1318.setTransform(-124.6,142.1);

	this.shape_1319 = new cjs.Shape();
	this.shape_1319.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAGgKAEQgIAEgMAAQgLAAgIgEQgJgEgFgGQgEgHAAgIQAAgJAIgIQAHgGANgDIANgCIASgDIAQgFQAAgKgEgEQgEgEgMgBQgLABgFACQgGACgEAGIgFAHQgBACgGgBQgFABgDgDQgEgDAAgEQAAgHAGgFQAFgHALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAOIAAAOIgBAOQAAAHAEAIIACAJQAAAFgEACQgEAEgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAFAFAJAAQAHAAAIgEQAGgDAEgFQAEgGgBgNIAAgDIgSAEg");
	this.shape_1319.setTransform(-154.5,142.1);

	this.shape_1320 = new cjs.Shape();
	this.shape_1320.graphics.f("#660000").s().p("AAcAvQgEgEAAgGIAAgDIgLAJQgFAEgHACQgGABgJAAQgKAAgIgDQgIgEgEgGQgGgJAAgPIAAgwQAAgIAEgDQAEgEAGAAQAGAAAFAEQADADAAAIIAAAnQABAJABAGQACAFAEAEQAEAEAIgBQAGAAAHgDQAGgEADgGQADgFgBgSIAAgeQAAgIAFgDQAEgEAGAAQAGAAAEAEQAEADAAAIIAABIQAAAGgEAEQgEAEgFAAQgHAAgDgEg");
	this.shape_1320.setTransform(-167.3,142.1);

	this.shape_1321 = new cjs.Shape();
	this.shape_1321.graphics.f("#660000").s().p("AAgAvQgEgEgFgGQgKAGgJAEQgJAEgMAAQgLAAgJgEQgIgEgEgGQgFgHAAgIQAAgJAHgIQAIgGANgDIAOgCIARgDIARgFQgBgKgEgEQgEgEgNgBQgJABgGACQgFACgEAGIgGAHQgCACgFgBQgFABgDgDQgEgDAAgEQAAgHAFgFQAGgHALgEQAMgEAPAAQATAAALAEQALAEAEAIQAFAIAAAOIAAAOIAAAOQAAAHACAIIADAJQAAAFgEACQgFAEgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAEAEQAFAFAIAAQAIAAAHgEQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_1321.setTransform(-203.9,142.1);

	this.shape_1322 = new cjs.Shape();
	this.shape_1322.graphics.f("#660000").s().p("AgXAvQgKgEgIgGQgHgHgEgKQgEgJAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAAKAEQALADAHAIQAIAGAEAKQAEAIAAALQAAALgEAJQgEAKgIAHQgHAGgLAEQgKAEgNAAQgMAAgLgEgAgOgbQgGADgEAIQgDAHAAAJQAAAKADAHQAEAIAGADQAGAEAIAAQANAAAHgJQAIgIAAgPQAAgPgIgIQgHgJgNAAQgHAAgHAFg");
	this.shape_1322.setTransform(-222.1,142.1);

	this.shape_1323 = new cjs.Shape();
	this.shape_1323.graphics.f("#660000").s().p("AgbAuQgLgEgFgFQgFgHAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAFQAEAHAHADQAGAEAJAAQAJAAAGgEQAFgDAAgFQAAgGgFgDQgHgDgLgDQgPgDgKgEQgJgCgGgGQgFgFAAgJQAAgIAFgGQAFgHAKgEQALgEAOAAQAJAAAKACQAJACAGADQAFAEAEAEQADAEAAAEQgBAFgDACQgDADgHAAQgEAAgDgCIgHgHQgDgEgFgCQgEgCgGAAQgIAAgGADQgEADAAAEQgBAEAEADIAKAEIARAEQANACAJAEQAIAEAEAFQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgPAAQgPAAgMgFg");
	this.shape_1323.setTransform(-260.5,142.1);

	this.shape_1324 = new cjs.Shape();
	this.shape_1324.graphics.f("#660000").s().p("AAgAvQgDgEgGgGQgKAGgKAEQgIAEgMAAQgLAAgJgEQgIgEgFgGQgEgHAAgIQAAgJAHgIQAIgGANgDIANgCIASgDIAQgFQAAgKgEgEQgEgEgMgBQgKABgGACQgFACgEAGIgGAHQgCACgFgBQgFABgDgDQgEgDAAgEQAAgHAGgFQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAOIAAAOIgBAOQAAAHADAIIADAJQAAAFgEACQgFAEgFAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAEAEQAGAFAIAAQAHAAAHgEQAIgDADgFQADgGAAgNIAAgDIgSAEg");
	this.shape_1324.setTransform(-272.6,142.1);

	this.shape_1325 = new cjs.Shape();
	this.shape_1325.graphics.f("#660000").s().p("AgnBDQgLAAgEgEQgEgEAAgIIAAhkQAAgHACgDQABgEAFgCQAEgBAHAAIBRAAQAHAAAEACQADADAAAFQAAAFgDADQgEADgHAAIhFAAIAAAhIA/AAQAIAAADACQADADABAFQgBAEgDADQgDACgIAAIg/AAIAAAmIBHAAQAIAAADAEQAEACAAAGQAAAEgEADQgDADgIAAg");
	this.shape_1325.setTransform(-296.8,140.2);

	this.shape_1326 = new cjs.Shape();
	this.shape_1326.graphics.f("#660000").s().p("AAfAtQgEgEgFgHQgKAHgJAEQgIADgLAAQgKgBgIgDQgIgDgEgHQgEgFAAgIQAAgJAHgHQAHgGAMgCIAMgCIARgDIAPgFQAAgJgEgEQgEgEgMAAQgJAAgFACQgFADgEAFIgFAGQgBACgFAAQgFAAgDgCQgDgDAAgEQAAgGAFgGQAFgGAKgDQALgFAOAAQASAAAKAFQAKADAEAHQAEAJAAAMIAAAOIAAAMQAAAHADAHIACAJQAAAEgEADQgDADgFAAQgEAAgEgDgAADAEIgOAEQgFABgEADQgDACAAAGQAAAFAEAEQAFADAHAAQAHAAAHgCQAHgEADgFQADgFAAgMIAAgDIgRADg");
	this.shape_1326.setTransform(10.6,118.5);

	this.shape_1327 = new cjs.Shape();
	this.shape_1327.graphics.f("#660000").s().p("AgYA8QgOgEgKgIQgJgJgFgMQgFgMAAgPQAAgNAFgNQAFgMAJgIQAKgJAOgEQAOgFAQAAQAPAAALAEQALADAHAFQAHAFADAGQAEAGAAAEQAAAFgEADQgEAEgGAAIgGgBIgFgEIgJgLQgDgEgHgDQgGgCgKAAQgJAAgIADQgIADgFAGQgGAGgDAIQgDAIAAAKQAAAVAMAMQALAMAUAAQAKAAAJgCQAJgCAJgFIAAgUIgXAAQgIAAgEgCQgEgCAAgFQAAgFADgCQAEgCAGAAIAhAAIAKABQAEABADACQACADAAAHIAAAYIgBAIQgBACgDADIgHAEQgNAGgMADQgMADgOAAQgQAAgNgFg");
	this.shape_1327.setTransform(-3.4,116.7);

	this.shape_1328 = new cjs.Shape();
	this.shape_1328.graphics.f("#660000").s().p("AAvBAIgFgDIgDgGIgEgGIgGgQIg6AAIgHAQQgDAJgDAEQgEADgFAAQgGAAgFgEQgEgDAAgFIABgFIADgHIAmhRIADgIQACgFADgDQACgEAEgCQAFgCAFAAQAGAAADACQAEACADAEIAEAGIAEAKIAmBQQAEAJABAEQAAAFgFADQgEAEgGAAIgFgBgAgVAOIAqAAIgVgzg");
	this.shape_1328.setTransform(-71.6,116.7);

	this.shape_1329 = new cjs.Shape();
	this.shape_1329.graphics.f("#660000").s().p("AAgAvQgDgDgGgIQgKAHgKAFQgIADgMAAQgLAAgJgEQgIgEgFgHQgEgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgEIAQgDQAAgLgEgEQgEgFgMABQgKAAgGACQgFADgEAFIgGAHQgCACgFAAQgFAAgDgDQgEgDAAgEQAAgGAGgHQAFgGALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAJAAAOIAAAOIgBANQAAAHADAIIADAKQAAADgEAEQgFADgFAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAGAEAEQAGADAIAAQAHAAAHgDQAIgDADgFQADgGAAgNIAAgEIgSAFg");
	this.shape_1329.setTransform(241.8,212.7);

	this.shape_1330 = new cjs.Shape();
	this.shape_1330.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgcQgGAEgEAHQgDAIgBAJQABAKADAHQAEAHAGAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgIAAgGADg");
	this.shape_1330.setTransform(191,212.7);

	this.shape_1331 = new cjs.Shape();
	this.shape_1331.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgcQgGAEgEAHQgDAIgBAJQABAKADAHQAEAHAGAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgIAAgGADg");
	this.shape_1331.setTransform(147.3,212.7);

	this.shape_1332 = new cjs.Shape();
	this.shape_1332.graphics.f("#660000").s().p("AgbAuQgKgDgGgHQgFgGAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAGQAEAGAHAEQAGACAKAAQAIAAAFgCQAGgEAAgEQAAgHgGgDQgFgDgNgDQgOgDgKgEQgJgCgFgGQgGgGAAgIQAAgIAFgGQAGgHAJgEQAKgEAOAAQALAAAIACQAKACAFADQAGAEADAEQADAEAAAEQABAEgEADQgEADgFAAQgEAAgEgDIgHgGQgDgDgFgCQgEgDgHAAQgHAAgFADQgGADAAAEQABAEADACIALAFIAQAEQANADAJAEQAIACAEAGQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgLgFg");
	this.shape_1332.setTransform(107.6,212.7);

	this.shape_1333 = new cjs.Shape();
	this.shape_1333.graphics.f("#660000").s().p("AAhAvQgFgDgEgIQgLAHgKAFQgIADgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAIgIQAHgGANgCIAOgDIARgEIAQgDQAAgLgEgEQgEgFgNABQgKAAgFACQgFADgFAFIgFAHQgBACgGAAQgFAAgDgDQgEgDAAgEQAAgGAFgHQAGgGALgEQAMgEAPAAQAUAAAKAEQALAEAEAIQAFAJAAAOIAAAOIAAANQAAAHADAIIACAKQAAADgEAEQgEADgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAGAFAEQAFADAHAAQAIAAAIgDQAGgDAEgFQADgGAAgNIAAgEIgSAFg");
	this.shape_1333.setTransform(77,212.7);

	this.shape_1334 = new cjs.Shape();
	this.shape_1334.graphics.f("#660000").s().p("AAbAvQgFgEAAgIIAAgoQAAgNgDgGQgEgGgMAAQgHAAgGADQgGAFgDAGQgDAGAAAPIAAAeQAAAIgDAEQgEAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgEQADgDAGAAQAEAAADACIAFAEQACAEAAAEIAAADQAHgJAKgEQAHgEAMAAQALAAAJAEQAJAFAEAHQADAFABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1334.setTransform(64.2,212.7);

	this.shape_1335 = new cjs.Shape();
	this.shape_1335.graphics.f("#660000").s().p("AgXAvQgKgDgIgIQgHgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAALAEQAKAEAIAGQAHAHAEAJQAEAKAAAKQAAALgEAKQgEAJgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgcQgHAEgDAHQgEAIABAJQgBAKAEAHQADAHAHAEQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgOgIgJQgHgJgNABQgIAAgGADg");
	this.shape_1335.setTransform(51.3,212.7);

	this.shape_1336 = new cjs.Shape();
	this.shape_1336.graphics.f("#660000").s().p("AAbAvQgEgEgBgIIAAgoQAAgNgEgGQgDgGgMAAQgHAAgGADQgGAFgDAGQgCAGgBAPIAAAeQAAAIgEAEQgDAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgEQADgDAGAAQAEAAADACIAFAEQACAEAAAEIAAADQAHgJAJgEQAIgEAMAAQALAAAJAEQAJAFAEAHQADAFABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgHAAgDgEg");
	this.shape_1336.setTransform(7.2,212.7);

	this.shape_1337 = new cjs.Shape();
	this.shape_1337.graphics.f("#660000").s().p("AAaAvQgDgEAAgIIAAgoQAAgNgFgGQgDgGgMAAQgHAAgGADQgGAFgDAGQgCAGAAAPIAAAeQAAAIgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgEQADgDAGAAQAEAAADACIAFAEQACAEAAAEIAAADQAIgJAIgEQAIgEAMAAQALAAAJAEQAJAFAEAHQADAFABAGIABANIAAAtQAAAIgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_1337.setTransform(-35.4,212.7);

	this.shape_1338 = new cjs.Shape();
	this.shape_1338.graphics.f("#660000").s().p("AgbAuQgKgDgGgHQgFgGAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAGQAEAGAHAEQAGACAKAAQAIAAAFgCQAGgEAAgEQAAgHgGgDQgFgDgNgDQgOgDgKgEQgJgCgFgGQgGgGAAgIQAAgIAFgGQAGgHAJgEQAKgEAOAAQALAAAIACQAKACAFADQAGAEADAEQADAEAAAEQABAEgEADQgEADgFAAQgEAAgEgDIgHgGQgDgDgFgCQgEgDgHAAQgHAAgFADQgGADAAAEQABAEADACIALAFIAQAEQANADAJAEQAIACAEAGQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgLgFg");
	this.shape_1338.setTransform(-58.9,212.7);

	this.shape_1339 = new cjs.Shape();
	this.shape_1339.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgcQgHAEgDAHQgDAIgBAJQABAKADAHQADAHAHAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgHAAgHADg");
	this.shape_1339.setTransform(-71.2,212.7);

	this.shape_1340 = new cjs.Shape();
	this.shape_1340.graphics.f("#660000").s().p("AAhBBQgEgDAAgHIAAgCQgFAGgGADQgGADgHACQgFACgHAAQgLAAgIgEQgKgEgGgGQgGgIgEgJQgDgKAAgKQAAgXANgNQANgNAWAAQALAAAIAEQAJAEAIAHIAAglQAAgHADgFQAEgEAHAAQAGABAEADQADAEAAAHIAABtQAAAHgDADQgFAEgFAAQgGAAgEgEgAgNgIQgHADgDAHQgDAGAAALQAAAKADAHQAEAHAGAEQAHADAGAAQAHAAAHgDQAGgEAEgHQADgHABgKQgBgKgDgIQgEgGgGgEQgHgDgHgBQgHAAgGAFg");
	this.shape_1340.setTransform(-84.7,210.8);

	this.shape_1341 = new cjs.Shape();
	this.shape_1341.graphics.f("#660000").s().p("AAgAvQgDgDgGgIQgKAHgKAFQgIADgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAHgIQAIgGANgCIANgDIASgEIAQgDQAAgLgEgEQgEgFgMABQgKAAgGACQgGADgDAFIgGAHQgCACgFAAQgFAAgDgDQgEgDAAgEQAAgGAGgHQAFgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAJAAAOIAAAOIgBANQAAAHAEAIIACAKQAAADgEAEQgEADgGAAQgEAAgFgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAGAEAEQAGADAIAAQAHAAAIgDQAGgDAEgFQADgGAAgNIAAgEIgSAFg");
	this.shape_1341.setTransform(-117.2,212.7);

	this.shape_1342 = new cjs.Shape();
	this.shape_1342.graphics.f("#660000").s().p("AgKBAQgHgEgCgHQgCgHAAgMIAAguIgEAAQgGgBgDgCQgEgDAAgDQAAgEAEgDQADgDAHABIADAAIAAgQIAAgJQAAgEACgCQACgCADgCQADgCAEAAQAFAAAEAEQADACABAEIAAAJIAAASIALAAQAGgBADADQADADAAAEQAAAFgEACQgFACgIAAIgGAAIAAAsIABAJQAAADACADQACACAFAAIAHgBIAHgBQADAAADADQADACAAAEQAAAFgIAEQgIADgOAAQgMAAgHgEg");
	this.shape_1342.setTransform(-135.9,211);

	this.shape_1343 = new cjs.Shape();
	this.shape_1343.graphics.f("#660000").s().p("AgWAvQgLgDgHgIQgIgGgEgJQgEgKAAgLQAAgLAEgJQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAJQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgLAEQgKAEgNAAQgMAAgKgEgAgOgcQgHAEgDAHQgDAIgBAJQABAKADAHQADAHAHAEQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgOgHgJQgIgJgNABQgHAAgHADg");
	this.shape_1343.setTransform(-192.2,212.7);

	this.shape_1344 = new cjs.Shape();
	this.shape_1344.graphics.f("#660000").s().p("AgbAuQgLgDgFgHQgFgGAAgGQAAgEADgDQAEgDAEAAQAFAAADACIAEAGQAFAGAGAEQAGACAJAAQAJAAAGgCQAFgEAAgEQAAgHgFgDQgHgDgLgDQgPgDgKgEQgJgCgGgGQgFgGAAgIQAAgIAFgGQAFgHAKgEQALgEAOAAQAJAAAJACQAJACAHADQAFAEAEAEQACAEAAAEQAAAEgDADQgDADgGAAQgFAAgDgDIgHgGQgDgDgFgCQgEgDgGAAQgIAAgGADQgEADAAAEQgBAEAEACIAKAFIARAEQAOADAIAEQAIACAEAGQAFAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgOAAgMgFg");
	this.shape_1344.setTransform(-204.6,212.7);

	this.shape_1345 = new cjs.Shape();
	this.shape_1345.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgBgEgBQgHAAgDADQgDAEgDAFIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1345.setTransform(-213.9,212.7);

	this.shape_1346 = new cjs.Shape();
	this.shape_1346.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgDIgLAKQgFAEgHACQgGABgJABQgKgBgIgDQgIgEgEgHQgGgHAAgPIAAgxQAAgIAEgDQAEgEAGAAQAGAAAFAEQADADAAAIIAAAnQABAJABAFQACAHAEADQAEADAIABQAGAAAHgFQAGgDADgHQADgEgBgRIAAgfQAAgIAFgDQAEgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAIgEADQgEAEgFAAQgGAAgEgEg");
	this.shape_1346.setTransform(-225.7,212.7);

	this.shape_1347 = new cjs.Shape();
	this.shape_1347.graphics.f("#660000").s().p("AgiAvQgEgEAAgIIAAhEQAAgRAOAAQAHAAADAEQADAEAAAHQAGgHAFgEQAEgEAJAAQAJAAAJAEQAIAEAAAGQAAAFgDADQgEADgEAAIgIgCQgGgBgEgBQgHAAgDADQgDAEgDAFIgDAOIgBASIAAAUQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1347.setTransform(-261,212.7);

	this.shape_1348 = new cjs.Shape();
	this.shape_1348.graphics.f("#660000").s().p("Ag0BBQgDgEAAgIIAAhrQAAgHADgEQAFgDAFgBQAHAAADAFQAEADAAAHIAAACQAIgIAJgEQAJgEAKAAQANAAALAGQALAGAGALQAHAMAAAQQAAALgDAIQgFAKgGAHQgHAGgIAEQgJADgKAAQgLABgJgFQgIgFgIgHIAAAlQAAAQgOABQgHAAgDgFgAgSgqQgJAJABAQQgBAPAJAGQAHAJAMAAQAHAAAGgDQAGgEADgGQAEgIAAgKQAAgKgDgHQgDgHgHgEQgGgDgHgBQgLABgIAHg");
	this.shape_1348.setTransform(-272.8,214.5);

	this.shape_1349 = new cjs.Shape();
	this.shape_1349.graphics.f("#660000").s().p("AgXAvQgKgEgIgHQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgbQgHADgDAHQgEAIABAJQgBAKAEAHQADAIAHADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgHAAgHAFg");
	this.shape_1349.setTransform(265,188.5);

	this.shape_1350 = new cjs.Shape();
	this.shape_1350.graphics.f("#660000").s().p("AgWAvQgLgEgHgHQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgbQgGADgEAHQgDAIgBAJQABAKADAHQAEAIAGADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgIAAgGAFg");
	this.shape_1350.setTransform(215.3,188.5);

	this.shape_1351 = new cjs.Shape();
	this.shape_1351.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgFAHgGADQgGAEgHACQgFABgHAAQgLAAgIgDQgJgFgHgHQgGgGgDgKQgEgKAAgLQAAgWAOgNQAMgNAWAAQALAAAIADQAJAFAIAHIAAglQAAgIADgEQAEgDAGAAQAHgBADAEQAEADAAAIIAABtQAAAHgEAEQgDADgHAAQgFAAgEgDgAgNgJQgHAEgDAHQgDAHAAAJQAAALADAGQAEAHAGAFQAHADAGAAQAIAAAGgDQAGgEAEgHQAEgHAAgLQAAgJgEgIQgEgGgGgEQgGgDgIAAQgHAAgGADg");
	this.shape_1351.setTransform(183.7,186.7);

	this.shape_1352 = new cjs.Shape();
	this.shape_1352.graphics.f("#660000").s().p("AAgAvQgEgEgFgHQgKAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgIQAAgJAHgIQAIgGANgDIAOgCIARgDIARgFQgBgJgEgFQgEgEgMgBQgKABgGACQgFACgEAGIgGAHQgCABgFAAQgFAAgDgCQgEgDAAgEQAAgHAGgFQAFgHALgEQALgEARAAQATAAAKAEQALAEAFAIQAEAIAAAPIAAANIAAAOQAAAHACAIIADAJQAAAFgEACQgFAEgFAAQgEAAgFgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAEAEQAFAFAJAAQAHgBAHgDQAIgDADgFQADgGABgNIAAgDIgSAEg");
	this.shape_1352.setTransform(165.6,188.5);

	this.shape_1353 = new cjs.Shape();
	this.shape_1353.graphics.f("#660000").s().p("Ag0BBQgDgEAAgJIAAhqQAAgIADgDQAFgEAGABQAFAAAFADQADAEAAAGIAAAEQAIgJAJgEQAIgEAKAAQAOAAALAGQALAGAHALQAGAMAAAPQAAAMgEAJQgDAJgHAHQgGAGgKAEQgIADgLAAQgLAAgIgEQgIgEgIgJIAAAmQAAAQgNAAQgJABgCgFgAgTgpQgHAHgBAQQABAQAHAHQAIAIALAAQAIAAAGgDQAGgFAEgGQADgGAAgLQAAgKgDgHQgEgHgFgEQgHgDgIAAQgKgBgJAJg");
	this.shape_1353.setTransform(152.8,190.4);

	this.shape_1354 = new cjs.Shape();
	this.shape_1354.graphics.f("#660000").s().p("AgXAvQgKgEgIgHQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgbQgHADgDAHQgDAIAAAJQAAAKADAHQADAIAHADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgIAAgGAFg");
	this.shape_1354.setTransform(53.6,188.5);

	this.shape_1355 = new cjs.Shape();
	this.shape_1355.graphics.f("#660000").s().p("AgWBVQgHgEABgGQAAgEADgDQACgDAGAAIABABIAEAAIAFAAQAFAAACgEQABgEAAgKIAAhUQAAgHAEgEQAEgDAHAAQAFAAAFADQADAEAAAHIAABVIAAAOIgCAIQgHARgXgBQgNAAgGgCgAAFhBQgEgEAAgFQAAgGAEgDQAFgEAGABQAFAAAFACQADAEAAAGQAAAFgDAEQgFADgFAAQgGAAgFgDg");
	this.shape_1355.setTransform(21.5,188.6);

	this.shape_1356 = new cjs.Shape();
	this.shape_1356.graphics.f("#660000").s().p("AAcAvQgEgEAAgHIAAgCIgLAJQgFAEgHACQgGACgJAAQgKAAgIgEQgIgEgEgHQgGgHAAgQIAAgwQAAgIAEgDQAEgEAGAAQAGAAAFAEQADADAAAIIAAAnQABAJABAFQACAGAEAEQAEADAIAAQAGAAAHgDQAGgEADgGQADgFgBgSIAAgeQAAgIAFgDQAEgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgFAAQgHAAgDgEg");
	this.shape_1356.setTransform(13.6,188.5);

	this.shape_1357 = new cjs.Shape();
	this.shape_1357.graphics.f("#660000").s().p("AAhAvQgFgEgEgHQgLAIgJADQgJAEgMAAQgLAAgJgEQgIgEgEgHQgFgGAAgIQAAgJAIgIQAHgGANgDIAOgCIARgDIARgFQgBgJgEgFQgEgEgNgBQgKABgFACQgGACgEAGIgFAHQgBABgGAAQgFAAgDgCQgEgDAAgEQAAgHAFgFQAGgHALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHACAIIADAJQAAAFgEACQgFAEgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAFAEQAFAFAHAAQAIgBAHgDQAHgDAEgFQAEgGAAgNIAAgDIgSAEg");
	this.shape_1357.setTransform(-12.4,188.5);

	this.shape_1358 = new cjs.Shape();
	this.shape_1358.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgFAHgGADQgGAEgGACQgGABgIAAQgKAAgJgDQgIgFgHgHQgGgGgEgKQgDgKAAgLQAAgWAOgNQANgNAUAAQAMAAAJADQAIAFAIAHIAAglQAAgIAEgEQADgDAGAAQAHgBADAEQAEADAAAIIAABtQAAAHgEAEQgEADgGAAQgFAAgEgDgAgNgJQgGAEgDAHQgEAHAAAJQAAALAEAGQADAHAHAFQAFADAHAAQAHAAAHgDQAGgEAEgHQAEgHgBgLQABgJgEgIQgEgGgGgEQgHgDgHAAQgHAAgGADg");
	this.shape_1358.setTransform(-49.2,186.7);

	this.shape_1359 = new cjs.Shape();
	this.shape_1359.graphics.f("#660000").s().p("AgXAvQgKgEgIgHQgHgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAHgHQAIgHAKgDQALgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgOgbQgHADgDAHQgDAIAAAJQAAAKADAHQADAIAHADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgIAAgGAFg");
	this.shape_1359.setTransform(-67.4,188.5);

	this.shape_1360 = new cjs.Shape();
	this.shape_1360.graphics.f("#660000").s().p("AAcAvQgEgEAAgHIAAgCIgKAJQgHAEgGACQgGACgIAAQgLAAgIgEQgIgEgFgHQgFgHAAgQIAAgwQAAgIAEgDQADgEAHAAQAGAAAEAEQAFADAAAIIAAAnQgBAJACAFQACAGAFAEQAEADAHAAQAHAAAFgDQAHgEADgGQACgFABgSIAAgeQAAgIADgDQAFgEAGAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgDAEgHAAQgGAAgDgEg");
	this.shape_1360.setTransform(-99.6,188.5);

	this.shape_1361 = new cjs.Shape();
	this.shape_1361.graphics.f("#660000").s().p("AgaAuQgLgEgGgGQgFgGAAgGQAAgEADgDQADgDAFAAQAFAAACACIAFAFQAFAHAGADQAGAEAKAAQAIAAAFgEQAGgDAAgEQAAgHgGgDQgFgDgNgDQgPgDgIgEQgKgCgFgGQgGgFAAgJQAAgIAFgGQAGgHAKgEQAJgEAOAAQALAAAIACQAKACAFADQAGAEADAEQADAEAAAEQAAAFgDACQgEADgGAAQgDAAgEgCIgHgHQgDgEgEgCQgFgCgHAAQgHAAgFADQgGADAAAEQABAEADADIALAEIAQAEQANADAJAEQAIADAFAFQAEAFAAAHQAAALgGAHQgGAHgLAEQgLAEgQAAQgPAAgKgFg");
	this.shape_1361.setTransform(-119.6,188.5);

	this.shape_1362 = new cjs.Shape();
	this.shape_1362.graphics.f("#660000").s().p("AgWAvQgLgEgHgHQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgHALgDQAKgEAMAAQANAAALAEQAKADAIAIQAHAGAEAKQAEAJAAAKQAAALgEAJQgEAKgHAHQgIAGgKAEQgLAEgNAAQgMAAgKgEgAgOgbQgGADgEAHQgDAIgBAJQABAKADAHQAEAIAGADQAGAEAIAAQANAAAHgIQAIgJAAgPQAAgPgIgIQgHgJgNAAQgIAAgGAFg");
	this.shape_1362.setTransform(-214,188.5);

	this.shape_1363 = new cjs.Shape();
	this.shape_1363.graphics.f("#660000").s().p("AgaAuQgMgEgFgGQgFgGAAgGQAAgEADgDQAEgDAFAAQAEAAADACIAEAFQAEAHAHADQAGAEAJAAQAJAAAGgEQAFgDAAgEQAAgHgFgDQgHgDgLgDQgQgDgIgEQgKgCgGgGQgFgFAAgJQAAgIAFgGQAFgHALgEQAKgEAOAAQAJAAAKACQAIACAGADQAGAEADAEQAEAEAAAEQgBAFgDACQgDADgHAAQgEAAgDgCIgHgHQgDgEgEgCQgFgCgGAAQgJAAgFADQgEADAAAEQAAAEADADIAKAEIARAEQANADAJAEQAIADAFAFQAEAFAAAHQAAALgGAHQgFAHgMAEQgLAEgPAAQgPAAgLgFg");
	this.shape_1363.setTransform(-226.4,188.5);

	this.shape_1364 = new cjs.Shape();
	this.shape_1364.graphics.f("#660000").s().p("AAcAvQgEgEAAgHIAAgCIgLAJQgGAEgGACQgGACgJAAQgKAAgIgEQgIgEgEgHQgGgHAAgQIAAgwQAAgIAEgDQADgEAHAAQAHAAADAEQAEADAAAIIAAAnQAAAJACAFQACAGAEAEQAFADAHAAQAHAAAFgDQAHgEADgGQACgFAAgSIAAgeQABgIAEgDQADgEAHAAQAGAAAEAEQAEADAAAIIAABHQAAAHgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_1364.setTransform(-247.5,188.5);

	this.shape_1365 = new cjs.Shape();
	this.shape_1365.graphics.f("#660000").s().p("AgmAlQgPgNAAgYQAAgKADgJQAEgKAHgHQAIgHAKgDQALgEAMAAQARAAAMAGQAMAHAFAJQAGAKAAAKQAAAJgGACQgGADgLAAIg3AAQAAAIAEAHQAEAHAGADQAGADAHAAIAJgBIAJgDIAHgFIAJgHQACgCAEABQAEAAADABQADACAAAFQAAADgDAFQgDAEgGAEQgHAFgJACQgJADgMAAQgbAAgPgOgAgQgaQgHAHgBAMIAzAAQgBgNgHgGQgHgGgLgBQgKABgHAGg");
	this.shape_1365.setTransform(-273,188.5);

	this.shape_1366 = new cjs.Shape();
	this.shape_1366.graphics.f("#660000").s().p("Ag1BAQgFgEAAgIIAAhnQABgJAEgEQAFgDAKAAIAnAAQASAAAJACQAJACAIAGQAGAFAEAIQAEAHgBAKQAAAUgOAKQgPAKgcAAIgbAAIAAAmQAAAJgFAEQgFAEgGAAQgHAAgEgEgAgagGIAUAAQAKAAAIgCQAHgCAEgFQAEgEAAgIQAAgJgGgFQgHgGgUAAIgUAAg");
	this.shape_1366.setTransform(-295,186.8);

	this.shape_1367 = new cjs.Shape();
	this.shape_1367.graphics.f("#660000").s().p("AgKAKQgFgDAAgHQAAgFAFgEQAEgEAGAAQAGAAAFAEQAFAEAAAFQAAAHgFADQgFAEgGAAQgGAAgEgEg");
	this.shape_1367.setTransform(273.5,168);

	this.shape_1368 = new cjs.Shape();
	this.shape_1368.graphics.f("#660000").s().p("AAhAvQgFgDgEgIQgLAIgJADQgJAEgMAAQgLAAgIgEQgJgEgEgHQgFgGAAgHQAAgKAIgIQAHgGANgCIAOgDIARgDIARgFQgBgJgEgFQgEgFgNAAQgKAAgFADQgGADgEAFIgFAHQgBABgGAAQgFAAgDgCQgEgDAAgEQAAgHAFgGQAGgGALgEQALgEAQAAQAUAAAKAEQALAEAEAIQAFAIAAAPIAAANIAAAOQAAAHADAIIACAKQAAADgEADQgFAEgEAAQgFAAgEgEgAAEAFIgQADQgFABgEADQgEADAAAGQAAAFAFAEQAFAFAHAAQAIgBAIgDQAGgDAEgFQAEgGAAgNIAAgEIgSAFg");
	this.shape_1368.setTransform(263.9,164.3);

	this.shape_1369 = new cjs.Shape();
	this.shape_1369.graphics.f("#660000").s().p("AA5AvQgFgEAAgIIAAgpIgBgNQAAgEgEgEQgEgDgGAAQgGAAgFADQgFACgDAGQgDAGAAAPIAAAhQAAAIgEAEQgEAEgHAAQgFAAgFgEQgDgEgBgIIAAgnIAAgOQgBgFgDgEQgDgDgIAAQgOgBgEAJQgFAJABAOIAAAiQAAAIgFAEQgEAEgGAAQgHAAgEgEQgEgEAAgIIAAhHQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEADABAGIAAACQAHgHAIgEQAJgEAKAAQALAAAHAEQAIAEAFAHQAGgHAJgEQAJgEAKAAQALABAJAEQAIADAEAIQAEAGAAAPIAAAwQAAAIgEAEQgFAEgGAAQgHAAgDgEg");
	this.shape_1369.setTransform(229.6,164.3);

	this.shape_1370 = new cjs.Shape();
	this.shape_1370.graphics.f("#660000").s().p("AAcAvQgEgDAAgIIAAgCIgLAJQgGAEgGACQgGACgJAAQgKAAgIgEQgIgEgEgHQgGgHAAgPIAAgxQAAgHAEgEQADgEAHAAQAHAAADAEQAEAEAAAHIAAAnQAAAJACAFQACAGAEAEQAFAEAHAAQAHgBAFgEQAHgDADgGQACgFAAgSIAAgeQABgHAEgEQADgEAHAAQAGAAAEAEQAEAEAAAHIAABHQAAAIgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_1370.setTransform(207.9,164.3);

	this.shape_1371 = new cjs.Shape();
	this.shape_1371.graphics.f("#660000").s().p("AAgBBQgDgEAAgJIAAgiQgIAGgJAFQgJADgKAAQgNAAgLgGQgLgGgHgLQgGgLAAgPQAAgRAGgLQAHgLALgGQALgGAOAAQAKAAAJAEQAJAEAHAJIAAgEQAAgGAEgEQADgDAGAAQAGAAAEADQAEAEAAAGIAABrQAAASgOgBQgIABgCgFgAgTgpQgHAIAAAQQAAAJAEAHQADAHAGAEQAGADAHAAQAHAAAHgDQAGgEAEgHQAEgGAAgLQAAgIgDgGQgCgGgEgDQgEgEgFgDQgFgCgFAAQgLAAgIAJg");
	this.shape_1371.setTransform(194.3,166.2);

	this.shape_1372 = new cjs.Shape();
	this.shape_1372.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgFAHgGADQgGADgHACQgFACgIAAQgKAAgJgDQgIgFgHgGQgGgIgDgJQgEgJAAgMQAAgWAOgNQANgNAUAAQAMAAAJADQAIAFAIAHIAAglQAAgHAEgFQADgDAGAAQAHgBADAEQAEADAAAIIAABtQAAAHgEAEQgDADgHAAQgFAAgEgDgAgNgJQgGAEgDAHQgEAGAAALQAAAJAEAHQADAHAHAFQAFADAHAAQAHAAAHgDQAGgEAEgHQADgHAAgKQAAgKgDgIQgEgGgGgEQgHgDgHgBQgHAAgGAEg");
	this.shape_1372.setTransform(162.8,162.5);

	this.shape_1373 = new cjs.Shape();
	this.shape_1373.graphics.f("#660000").s().p("AgDBEIgKgDIgHgGIgIgHIAAADQAAAHgDAEQgFADgGAAQgGAAgDgDQgEgEAAgHIAAhsQAAgHADgFQAEgDAGAAQAHAAAEADQADAEAAAHIAAAmQAIgHAJgEQAIgEALAAQAOAAAMAGQAKAGAGALQAGAKAAAPQAAAMgEAKQgCAJgHAHQgGAGgJAFQgJADgLAAQgHABgEgCgAgMgJQgHAEgEAHQgDAHgBAKQAAAPAIAIQAIAIAMAAQALAAAHgIQAIgIAAgPQAAgLgDgGQgDgHgGgEQgGgEgIAAQgIAAgFAEg");
	this.shape_1373.setTransform(126.2,162.5);

	this.shape_1374 = new cjs.Shape();
	this.shape_1374.graphics.f("#660000").s().p("AAbAvQgFgEAAgIIAAgoQAAgNgDgGQgEgHgMABQgHAAgGAEQgGAEgDAGQgDAGAAAPIAAAeQAAAIgDAEQgEAEgHAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHAEgDQADgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAHgJAJgDQAIgFAMAAQALAAAJAFQAJAEAFAHQACAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1374.setTransform(99.8,164.3);

	this.shape_1375 = new cjs.Shape();
	this.shape_1375.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgFAHgGADQgGADgGACQgGACgIAAQgKAAgJgDQgIgFgHgGQgGgIgEgJQgDgJAAgMQAAgWAOgNQANgNAUAAQAMAAAJADQAIAFAIAHIAAglQAAgHAEgFQADgDAGAAQAHgBADAEQAEADAAAIIAABtQAAAHgEAEQgEADgGAAQgFAAgEgDgAgNgJQgGAEgDAHQgEAGAAALQAAAJAEAHQADAHAHAFQAFADAHAAQAHAAAHgDQAGgEAEgHQAEgHgBgKQABgKgEgIQgEgGgGgEQgHgDgHgBQgHAAgGAEg");
	this.shape_1375.setTransform(62.4,162.5);

	this.shape_1376 = new cjs.Shape();
	this.shape_1376.graphics.f("#660000").s().p("AgXAvQgKgDgHgIQgIgGgEgKQgEgJAAgLQAAgKAEgKQAEgJAIgHQAHgGAKgEQALgEAMAAQANAAAKAEQALAEAHAGQAIAHAEAKQAEAIAAALQAAALgEAJQgEAKgIAHQgHAHgLADQgKAEgNAAQgMAAgLgEgAgOgbQgGAEgEAGQgEAIAAAJQAAAKAEAHQAEAIAGADQAGAEAIAAQANAAAIgIQAHgJAAgPQAAgPgHgIQgIgJgNAAQgIABgGAEg");
	this.shape_1376.setTransform(34.8,164.3);

	this.shape_1377 = new cjs.Shape();
	this.shape_1377.graphics.f("#660000").s().p("AAhBCQgEgEAAgHIAAgDQgGAHgFADQgGADgGACQgGACgIAAQgKAAgJgDQgJgFgGgGQgGgIgEgJQgDgJAAgMQAAgWANgNQAOgNAUAAQAMAAAIADQAJAFAIAHIAAglQAAgHAEgFQADgDAHAAQAGgBAEAEQADADAAAIIAABtQAAAHgDAEQgEADgGAAQgGAAgEgDgAgNgJQgGAEgEAHQgDAGAAALQAAAJADAHQAEAHAHAFQAFADAHAAQAIAAAGgDQAGgEAEgHQADgHAAgKQAAgKgDgIQgEgGgGgEQgGgDgIgBQgHAAgGAEg");
	this.shape_1377.setTransform(21.2,162.5);

	this.shape_1378 = new cjs.Shape();
	this.shape_1378.graphics.f("#660000").s().p("AAhAvQgFgDgEgIQgLAIgKADQgIAEgMAAQgLAAgIgEQgJgEgFgHQgEgGAAgHQAAgKAIgIQAHgGANgCIANgDIASgDIAQgFQAAgJgEgFQgEgFgMAAQgLAAgFADQgGADgEAFIgFAHQgBABgGAAQgFAAgDgCQgEgDAAgEQAAgHAFgGQAGgGALgEQAMgEAQAAQASAAALAEQALAEAFAIQAEAIAAAPIAAANIgBAOQABAHADAIIACAKQAAADgEADQgEAEgFAAQgFAAgEgEgAADAFIgPADQgFABgEADQgEADAAAGQAAAFAFAEQAEAFAJAAQAHgBAIgDQAGgDAEgFQAEgGgBgNIAAgEIgSAFg");
	this.shape_1378.setTransform(8.5,164.3);

	this.shape_1379 = new cjs.Shape();
	this.shape_1379.graphics.f("#660000").s().p("AgbBCQgMgEgGgFQgGgHAAgFQAAgFADgDQAEgDAFAAQAGAAAFAFIAFAFIAFAFIAHACIAKABQAKAAAGgDQAGgCADgGQACgEABgGIAAgSQgGAJgJAEQgJAEgLAAQgOAAgLgHQgKgGgGgMQgGgKAAgPQAAgLAEgJQADgKAHgGQAGgGAJgDQAIgDAKAAQALAAAJAEQAJAEAIAJIAAgEQAAgGAEgEQADgDAGAAQAIAAADAEQADAFAAAJIAABIQAAAMgDAJQgDAJgHAGQgHAGgLADQgKACgQAAQgOABgMgEgAgTgpQgHAHAAAPQAAAQAHAHQAIAIALAAQAHgBAHgDQAGgEAEgFQAEgHAAgJQAAgQgIgIQgIgIgMgBQgLAAgIAJg");
	this.shape_1379.setTransform(-30,166.2);

	this.shape_1380 = new cjs.Shape();
	this.shape_1380.graphics.f("#660000").s().p("AAcAwQgDgCgEgFIgVgbIgUAbIgIAHQgDADgFAAQgGAAgDgDQgEgDAAgEQAAgEAFgIIAageIgXgbQgFgIAAgFQgBgDAEgDQAEgDAFAAQAFAAAEADIAHAIIASAVIASgVIAIgIQADgDAFAAQAGAAAEADQADADAAADIgBAGIgFAHIgXAbIAaAeQAGAJAAADQAAAEgEADQgEADgFAAQgFAAgEgDg");
	this.shape_1380.setTransform(-104.3,164.3);

	this.shape_1381 = new cjs.Shape();
	this.shape_1381.graphics.f("#660000").s().p("AgPBCQgEgFAAgHIAAhBIgIAAQgHAAgDgCQgEgDAAgEQAAgJAPAAIAHAAIAAgIQAAgMADgGQADgHAJgEQAHgCAOAAQAZAAAAAKQAAAEgDACQgCACgEABIgGgBIgHAAQgHAAgDADQgCAFAAAHIAAAGIAHAAQARAAAAAIQAAAHgFABQgEACgIAAIgHAAIAABBQAAAHgEAFQgEADgFAAQgGAAgEgDg");
	this.shape_1381.setTransform(-180.5,162.5);

	this.shape_1382 = new cjs.Shape();
	this.shape_1382.graphics.f("#660000").s().p("AgQBBQgEgEAAgIIAAhGQAAgIAEgDQADgEAHAAQAGAAADAEQAEADAAAHIAABHQAAAIgEAEQgDAEgGAAQgHAAgDgEgAgVgtQAAgBADgEIAFgIQAEgGADgCQADgCAFAAIAOAAQAGAAAAABIgGAGIgMAKIgHAGQgGADgHAAQgFAAAAgDg");
	this.shape_1382.setTransform(-186.7,162.5);

	this.shape_1383 = new cjs.Shape();
	this.shape_1383.graphics.f("#660000").s().p("AAaAvQgEgEAAgIIAAgoQAAgNgDgGQgFgHgLABQgHAAgGAEQgHAEgDAGQgCAGAAAPIAAAeQAAAIgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgDQAEgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAIgJAJgDQAHgFAMAAQALAAAJAFQAJAEAFAHQACAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_1383.setTransform(-204.3,164.3);

	this.shape_1384 = new cjs.Shape();
	this.shape_1384.graphics.f("#660000").s().p("AgPBDQgLgCgHgEQgJgFgGgGQgHgHgDgIQgFgHgCgJQgDgJABgKQgBgPAGgNQAFgNAKgJQALgJANgFQANgEAPAAQATAAAOAGQAPAGAHAKQAIAJAAAJQAAAFgDADQgFAEgEAAQgHAAgCgDIgHgIQgHgKgIgFQgIgFgMAAQgSAAgLANQgMAMAAAXQAAAPAGALQAFALAIAEQAJAGAMAAQANgBAKgFQAJgGAFgLIAEgJQAEgDAGAAQAFAAAFADQADAEAAAEQAAAHgDAIQgDAHgJAHQgHAHgMAFQgMAFgQgBQgMAAgJgCg");
	this.shape_1384.setTransform(-237.2,162.5);

	this.shape_1385 = new cjs.Shape();
	this.shape_1385.graphics.f("#660000").s().p("AAaAvQgEgEAAgIIAAgoQAAgNgDgGQgFgHgLABQgHAAgGAEQgHAEgDAGQgCAGAAAPIAAAeQAAAIgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgIIAAhHQAAgHADgDQAEgEAGAAQAEAAADACIAFAEQACADAAAFIAAADQAIgJAJgDQAHgFAMAAQALAAAJAFQAJAEAFAHQACAFABAFIABAOIAAAtQAAAIgEAEQgEAEgGAAQgGAAgFgEg");
	this.shape_1385.setTransform(-256.9,164.3);

	this.shape_1386 = new cjs.Shape();
	this.shape_1386.graphics.f("#660000").s().p("AgaBBQgPgFgKgKQgKgJgGgMQgFgNAAgQQAAgPAFgNQAFgNALgJQAKgJAPgFQAPgEASAAQAPgBAMAEQAMADAIAGQAHAGAEAGQAEAGAAAFQAAAFgFAEQgEADgGAAQgEAAgDgBQgDgCgCgCIgKgMQgEgEgGgDQgHgCgLgBQgJABgJADQgIADgGAGQgGAHgDAIQgEAKAAAKQAAAXANAMQAMANAVAAQALAAAKgCQAJgDAKgEIAAgWIgYAAQgJAAgEgDQgFgCAAgFQAAgFAEgCQAEgDAGAAIAjAAIALABQAFABADADQACADAAAIIAAAZIgBAJQgBADgDACIgIAFQgOAGgNAEQgNACgPAAQgRAAgOgEg");
	this.shape_1386.setTransform(-293.7,162.5);

	this.shape_1387 = new cjs.Shape();
	this.shape_1387.graphics.f("#660000").s().p("AgVA8QgKgDgGgGQgGgFgDgGQgDgGAAgEQAAgFADgDQAEgDAFAAQADAAADABQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAFAMAGAFQAGAHAKgBQAGAAAFgCQAGgDAEgFQADgFAAgHQAAgKgGgFQgHgHgKAAIgFABIgGAAQgGABgCgDQgDgCAAgEQAAgEADgCQAEgCAHgBIAEAAQAIABAHgFQAGgFAAgJQAAgGgFgFQgGgFgIAAQgFAAgEACQgEABgCADQgCACgCAEIgEAHQAAAAgBABQAAAAAAABQgBAAAAAAQgBABgBAAIgGABQgEAAgCgDQgEgDAAgEQAAgFADgEQADgFAGgFQAGgEAJgDQAJgDAJAAQAKAAAIADQAHACAHAEQAFAEADAGQADAGAAAGQAAAIgEAHQgEAGgJAGQAIADAGAEQAEAFAEAFQACAFAAAHQAAAIgDAHQgEAIgHAFQgHAFgJAEQgKADgLAAQgLAAgJgEg");
	this.shape_1387.setTransform(68.8,116.3);

	this.shape_1388 = new cjs.Shape();
	this.shape_1388.graphics.f("#660000").s().p("AAOA+QgDgEAAgGIAAgQIgwAAQgJAAgFgEQgFgDAAgHIABgDIACgDIADgFIADgDIAzg8IAJgJQADgDAFAAQAPABAAAPIAABBIAEAAQAIgBAEACQAEACABAGQAAAFgFADQgDACgIAAIgFAAIAAAQQgBAGgDAEQgDACgGAAQgFAAgEgCgAgeARIApAAIAAgxg");
	this.shape_1388.setTransform(56.8,116.3);

	this.shape_1389 = new cjs.Shape();
	this.shape_1389.graphics.f("#660000").s().p("AANBRQgDAAgEgDIgHgKQgHgLgFgLQgFgKgCgLQgDgLAAgOQAAgLACgMQADgLAFgLQAFgLAHgLIAHgKQAEgCADgBIAHgBQAEAAAAACIgEAJIgIASQgEAKgEAOQgEANAAAPQAAAPAEAOQAEAOAEAKIAIASIAEAJQAAACgEAAIgHgBg");
	this.shape_1389.setTransform(23.8,118);

	this.shape_1390 = new cjs.Shape();
	this.shape_1390.graphics.f("#660000").s().p("AAuA8QgEgDAAgHIAAhWIgWBPIgEALQgCAEgDADQgEADgHAAQgEAAgDgCQgEgCgCgDIgDgHIgCgHIgYhPIAABWQAAAHgDADQgEAEgGAAQgFAAgFgEQgDgDAAgHIAAhjQAAgIAFgDQAEgDAJAAIAJAAQAIAAAEACQADABACADIAEALIAUBEIAVhEIAEgLQACgDADgBQAEgCAIAAIAJAAQAJAAAFADQAEADAAAIIAABjQAAAHgEADQgDAEgGAAQgGAAgEgEg");
	this.shape_1390.setTransform(-105.1,116.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_238},{t:this.shape_237,p:{x:-174.1,y:131.1}},{t:this.shape_236,p:{x:-164.9,y:129.2}},{t:this.shape_235,p:{x:-159.1,y:129.3}},{t:this.shape_234},{t:this.shape_233,p:{x:-136.4,y:131.1}},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230,p:{x:-90.9,y:131.1}},{t:this.shape_229,p:{x:-81.8,y:131.1}},{t:this.shape_228,p:{x:-74.9,y:129.3}},{t:this.shape_227,p:{x:-69.1,y:129.2}},{t:this.shape_226,p:{x:-63.3,y:129.2}},{t:this.shape_225},{t:this.shape_224,p:{x:-34.5,y:129.3}},{t:this.shape_223},{t:this.shape_222,p:{x:-8.4,y:131.1}},{t:this.shape_221,p:{x:3.2,y:131.1}},{t:this.shape_220,p:{x:11.7,y:129.4}},{t:this.shape_219,p:{x:21.6,y:131.1}},{t:this.shape_218},{t:this.shape_217,p:{x:46.1,y:129.3}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212,p:{x:103.9,y:129.3}},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206,p:{x:-272.4,y:155.3}},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201,p:{x:-208.6,y:153.4}},{t:this.shape_200,p:{x:-202.1,y:153.5}},{t:this.shape_199},{t:this.shape_198,p:{x:-189.5,y:153.5}},{t:this.shape_197,p:{x:-180.3,y:155.2}},{t:this.shape_196,p:{x:-167.4,y:155.3}},{t:this.shape_195,p:{x:-146.6,y:153.5}},{t:this.shape_194,p:{x:-131.4,y:155.3}},{t:this.shape_193},{t:this.shape_192,p:{x:-111.2,y:153.5}},{t:this.shape_191,p:{x:-102,y:155.2}},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186,p:{x:-39.5,y:155.2}},{t:this.shape_185,p:{x:-26.6,y:155.3}},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182,p:{x:18.6,y:155.3}},{t:this.shape_181},{t:this.shape_180,p:{x:35,y:153.5}},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175,p:{x:92,y:153.6}},{t:this.shape_174,p:{x:101.9,y:155.3}},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170,p:{x:165.1,y:157.1}},{t:this.shape_169},{t:this.shape_168,p:{x:188,y:153.6}},{t:this.shape_167,p:{x:197.7,y:155.3}},{t:this.shape_166},{t:this.shape_165,p:{x:230.4,y:153.4}},{t:this.shape_164},{t:this.shape_163,p:{x:252.9,y:155.3}},{t:this.shape_162,p:{x:-286.7,y:181.3}},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159,p:{x:-247.4,y:179.4}},{t:this.shape_158},{t:this.shape_157,p:{x:-225.2,y:179.4}},{t:this.shape_156},{t:this.shape_155,p:{x:-199.7,y:177.6}},{t:this.shape_154},{t:this.shape_153,p:{x:-174.4,y:179.4}},{t:this.shape_152},{t:this.shape_151,p:{x:-145.2,y:179.4}},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148,p:{x:-101.9,y:179.4}},{t:this.shape_147},{t:this.shape_146,p:{x:-79.1,y:177.7}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142,p:{x:-24.8,y:179.4}},{t:this.shape_141,p:{x:-11.8,y:179.4}},{t:this.shape_140},{t:this.shape_139,p:{x:14.4,y:179.4}},{t:this.shape_138},{t:this.shape_137,p:{x:45.9,y:179.4}},{t:this.shape_136},{t:this.shape_135,p:{x:68,y:177.7}},{t:this.shape_134},{t:this.shape_133,p:{x:90.4,y:179.4}},{t:this.shape_132,p:{x:103.3,y:179.4}},{t:this.shape_131},{t:this.shape_130,p:{x:135.1,y:179.4}},{t:this.shape_129,p:{x:146.9,y:179.4}},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125,p:{x:204.4,y:179.4}},{t:this.shape_124},{t:this.shape_123,p:{x:229.6,y:179.4}},{t:this.shape_122,p:{x:239.5,y:179.4}},{t:this.shape_121,p:{x:251.6,y:179.4}},{t:this.shape_120},{t:this.shape_119,p:{x:-246.8,y:203.6}},{t:this.shape_118,p:{x:-234.1,y:203.6}},{t:this.shape_117,p:{x:-224.8,y:201.8}},{t:this.shape_116},{t:this.shape_115,p:{x:-206.3,y:201.8}},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111,p:{x:-150.4,y:203.6}},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107,p:{x:-93.4,y:203.6}},{t:this.shape_106},{t:this.shape_105,p:{x:-67.7,y:203.6}},{t:this.shape_104,p:{x:-55.3,y:201.8}},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101,p:{x:-16.2,y:203.6}},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98,p:{x:24.4,y:201.8}},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95,p:{x:60.1,y:201.8}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92,p:{x:93,y:201.8}},{t:this.shape_91},{t:this.shape_90,p:{x:114.5,y:203.6}},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85,p:{x:187.7,y:203.6}},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_374},{t:this.shape_373,p:{x:-136.8,y:128.5}},{t:this.shape_372,p:{x:-128.1,y:128.5}},{t:this.shape_371},{t:this.shape_370,p:{x:-107,y:128.5}},{t:this.shape_369,p:{x:-92.4,y:128.5}},{t:this.shape_368},{t:this.shape_367,p:{x:-71.8,y:128.5}},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363,p:{x:-28.2,y:130.2}},{t:this.shape_362},{t:this.shape_361,p:{x:-5.4,y:130.2}},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_224,p:{x:-290.6,y:152.1}},{t:this.shape_349},{t:this.shape_348,p:{x:-268.7,y:152}},{t:this.shape_200,p:{x:-262.2,y:152}},{t:this.shape_347},{t:this.shape_346},{t:this.shape_197,p:{x:-240.4,y:153.8}},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_191,p:{x:-142.7,y:153.8}},{t:this.shape_338},{t:this.shape_337,p:{x:-120.8,y:152}},{t:this.shape_336,p:{x:-115,y:152}},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329,p:{x:-29.4,y:152}},{t:this.shape_186,p:{x:-20.2,y:153.8}},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305,p:{x:-281.4,y:178}},{t:this.shape_304},{t:this.shape_303,p:{x:-252.1,y:178}},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298,p:{x:-185.4,y:178}},{t:this.shape_148,p:{x:-172.8,y:178}},{t:this.shape_92,p:{x:-162.9,y:176.2}},{t:this.shape_297,p:{x:-154.3,y:178}},{t:this.shape_296,p:{x:-136.3,y:178}},{t:this.shape_295},{t:this.shape_294,p:{x:-110.7,y:178}},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289,p:{x:-56.5,y:178}},{t:this.shape_288},{t:this.shape_287,p:{x:-32.5,y:176.2}},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282,p:{x:26,y:178}},{t:this.shape_281},{t:this.shape_280,p:{x:47.8,y:176.2}},{t:this.shape_279,p:{x:57.1,y:178}},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275,p:{x:110.5,y:178}},{t:this.shape_274},{t:this.shape_273,p:{x:128.5,y:176.2}},{t:this.shape_272},{t:this.shape_271},{t:this.shape_133,p:{x:154.5,y:178}},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268,p:{x:187.7,y:181.7}},{t:this.shape_267,p:{x:203.2,y:176.3}},{t:this.shape_266,p:{x:214.9,y:178}},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262,p:{x:261.8,y:178}},{t:this.shape_261},{t:this.shape_118,p:{x:-189.7,y:202.1}},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_222,p:{x:-126.8,y:202.2}},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_111,p:{x:-54.4,y:202.1}},{t:this.shape_253},{t:this.shape_229,p:{x:-29.7,y:202.2}},{t:this.shape_221,p:{x:-20.6,y:202.2}},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246,p:{x:59.2,y:202.2}},{t:this.shape_245},{t:this.shape_235,p:{x:82,y:200.4}},{t:this.shape_101,p:{x:91.2,y:202.1}},{t:this.shape_244,p:{x:103.9,y:202.2}},{t:this.shape_243},{t:this.shape_228,p:{x:118.9,y:200.4}},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239,p:{x:157,y:205.9}}]},1).to({state:[{t:this.shape_369,p:{x:-201.5,y:115.9}},{t:this.shape_373,p:{x:-192.1,y:116}},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512,p:{x:-159.6,y:117.7}},{t:this.shape_511,p:{x:-149.6,y:116.1}},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508,p:{x:-111.4,y:117.7}},{t:this.shape_507},{t:this.shape_506,p:{x:-81.1,y:115.9}},{t:this.shape_505},{t:this.shape_504,p:{x:-58.2,y:117.7}},{t:this.shape_503,p:{x:-49,y:115.9}},{t:this.shape_502,p:{x:-36.4,y:117.7}},{t:this.shape_501,p:{x:-19.1,y:116}},{t:this.shape_500,p:{x:-8,y:117.7}},{t:this.shape_367,p:{x:0.7,y:115.9}},{t:this.shape_499},{t:this.shape_372,p:{x:21.3,y:115.9}},{t:this.shape_498},{t:this.shape_497,p:{x:45.8,y:117.7}},{t:this.shape_496,p:{x:57.9,y:117.7}},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489,p:{x:129.9,y:116}},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485,p:{x:176,y:117.7}},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482,p:{x:-286.7,y:165.7}},{t:this.shape_481},{t:this.shape_480},{t:this.shape_148,p:{x:-254.7,y:165.6}},{t:this.shape_479,p:{x:-242,y:165.7}},{t:this.shape_478},{t:this.shape_477,p:{x:-227,y:163.9}},{t:this.shape_476},{t:this.shape_475,p:{x:-208.3,y:164}},{t:this.shape_474,p:{x:-198.5,y:165.7}},{t:this.shape_473,p:{x:-181.3,y:167.5}},{t:this.shape_472},{t:this.shape_471,p:{x:-150,y:165.7}},{t:this.shape_470,p:{x:-135.5,y:163.9}},{t:this.shape_469},{t:this.shape_468,p:{x:-112.8,y:165.7}},{t:this.shape_467,p:{x:-99.9,y:165.7}},{t:this.shape_466},{t:this.shape_465,p:{x:-81.2,y:165.7}},{t:this.shape_464},{t:this.shape_92,p:{x:-57.7,y:163.9}},{t:this.shape_463,p:{x:-49.2,y:165.7}},{t:this.shape_462},{t:this.shape_461,p:{x:-19.3,y:165.7}},{t:this.shape_133,p:{x:-6.6,y:165.6}},{t:this.shape_460,p:{x:2.7,y:163.9}},{t:this.shape_459,p:{x:11.9,y:165.7}},{t:this.shape_458},{t:this.shape_457,p:{x:26.9,y:163.9}},{t:this.shape_456},{t:this.shape_455,p:{x:45.7,y:164}},{t:this.shape_454,p:{x:55.4,y:165.7}},{t:this.shape_453},{t:this.shape_452,p:{x:81.7,y:163.9}},{t:this.shape_451,p:{x:91.1,y:165.7}},{t:this.shape_450,p:{x:109.2,y:165.7}},{t:this.shape_449,p:{x:125,y:165.7}},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446,p:{x:166,y:165.7}},{t:this.shape_445,p:{x:175.9,y:167.5}},{t:this.shape_444,p:{x:188.9,y:165.7}},{t:this.shape_443},{t:this.shape_442,p:{x:215.3,y:163.9}},{t:this.shape_441,p:{x:224.6,y:165.7}},{t:this.shape_440,p:{x:240.4,y:165.7}},{t:this.shape_439},{t:this.shape_438,p:{x:268.6,y:165.7}},{t:this.shape_437,p:{x:278.5,y:165.7}},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434,p:{x:-283.7,y:189.9}},{t:this.shape_118,p:{x:-265.8,y:189.8}},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426,p:{x:-173.9,y:188}},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420,p:{x:-106.5,y:189.9}},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415,p:{x:-48.1,y:188}},{t:this.shape_414,p:{x:-34.7,y:189.9}},{t:this.shape_413,p:{x:-25.5,y:188}},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403,p:{x:102.5,y:189.9}},{t:this.shape_402,p:{x:111.7,y:188}},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398,p:{x:160,y:188.2}},{t:this.shape_397,p:{x:166.3,y:188.1}},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390,p:{x:256.7,y:188}},{t:this.shape_389},{t:this.shape_388,p:{x:277.6,y:189.9}},{t:this.shape_387},{t:this.shape_132,p:{x:-99.2,y:214.1}},{t:this.shape_111,p:{x:-86.4,y:214}},{t:this.shape_386,p:{x:-77.1,y:212.3}},{t:this.shape_385,p:{x:-67.9,y:214.1}},{t:this.shape_384,p:{x:-58.7,y:212.2}},{t:this.shape_383,p:{x:-52.9,y:212.3}},{t:this.shape_382},{t:this.shape_135,p:{x:-34.2,y:212.4}},{t:this.shape_381,p:{x:-24.4,y:214.1}},{t:this.shape_380},{t:this.shape_137,p:{x:11.5,y:214.1}},{t:this.shape_379},{t:this.shape_378,p:{x:31.7,y:212.3}},{t:this.shape_101,p:{x:40.9,y:214}},{t:this.shape_377},{t:this.shape_157,p:{x:66.4,y:214.1}},{t:this.shape_376},{t:this.shape_375,p:{x:88.1,y:217.8}}]},1).to({state:[{t:this.shape_667,p:{x:-127.8,y:124.6}},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663,p:{x:-78.4,y:124.6}},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_489,p:{x:-1.3,y:124.6}},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_485,p:{x:99,y:126.2}},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646,p:{x:-273.5,y:147.3}},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637,p:{x:-166.5,y:147.2}},{t:this.shape_636,p:{x:-153.9,y:149}},{t:this.shape_635},{t:this.shape_634,p:{x:-136.4,y:149}},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631,p:{x:-91.9,y:149}},{t:this.shape_630,p:{x:-83.9,y:147.3}},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626,p:{x:-39.3,y:149}},{t:this.shape_625,p:{x:-22.3,y:147.2}},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622,p:{x:12.5,y:147.2}},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619,p:{x:49.3,y:149}},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608,p:{x:177.8,y:149}},{t:this.shape_607},{t:this.shape_606,p:{x:212.4,y:149}},{t:this.shape_605,p:{x:224.5,y:149}},{t:this.shape_604,p:{x:236.5,y:147.2}},{t:this.shape_603,p:{x:245.7,y:147.3}},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597,p:{x:-259.1,y:170}},{t:this.shape_596,p:{x:-250.3,y:171.7}},{t:this.shape_595,p:{x:-233.2,y:171.7}},{t:this.shape_594,p:{x:-222.1,y:171.7}},{t:this.shape_593,p:{x:-215.6,y:170}},{t:this.shape_592},{t:this.shape_591,p:{x:-197.7,y:170}},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588,p:{x:-166,y:171.7}},{t:this.shape_587,p:{x:-159.5,y:170}},{t:this.shape_586,p:{x:-150.7,y:171.7}},{t:this.shape_585,p:{x:-133.7,y:170}},{t:this.shape_584},{t:this.shape_370,p:{x:-112.5,y:170}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581,p:{x:-75.4,y:171.7}},{t:this.shape_580,p:{x:-66.9,y:171.7}},{t:this.shape_579,p:{x:-60.4,y:170}},{t:this.shape_578,p:{x:-51.6,y:171.7}},{t:this.shape_577,p:{x:-34.6,y:170}},{t:this.shape_576},{t:this.shape_501,p:{x:-4.9,y:170.1}},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573,p:{x:26.9,y:170}},{t:this.shape_511,p:{x:33.5,y:170.1}},{t:this.shape_572,p:{x:42.8,y:171.7}},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568,p:{x:96.1,y:171.7}},{t:this.shape_567,p:{x:111.1,y:171.7}},{t:this.shape_566},{t:this.shape_565},{t:this.shape_503,p:{x:147,y:170}},{t:this.shape_564},{t:this.shape_563,p:{x:175.5,y:171.7}},{t:this.shape_562},{t:this.shape_561,p:{x:194.1,y:170.1}},{t:this.shape_560},{t:this.shape_559,p:{x:215.4,y:171.7}},{t:this.shape_558},{t:this.shape_557,p:{x:243.3,y:171.7}},{t:this.shape_556},{t:this.shape_555,p:{x:-292.6,y:194.5}},{t:this.shape_554},{t:this.shape_553,p:{x:-273.7,y:192.7}},{t:this.shape_552},{t:this.shape_551,p:{x:-254.2,y:194.5}},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545,p:{x:-180.7,y:194.5}},{t:this.shape_544},{t:this.shape_506,p:{x:-151.6,y:192.7}},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_363,p:{x:-57,y:194.5}},{t:this.shape_535,p:{x:-46,y:194.5}},{t:this.shape_534},{t:this.shape_533,p:{x:-27.7,y:197.9}},{t:this.shape_532},{t:this.shape_531,p:{x:-2.9,y:192.8}},{t:this.shape_530,p:{x:14.6,y:194.5}},{t:this.shape_529,p:{x:22.8,y:192.8}},{t:this.shape_528},{t:this.shape_527,p:{x:41.3,y:192.9}},{t:this.shape_508,p:{x:50.6,y:194.5}},{t:this.shape_526,p:{x:61.6,y:194.5}},{t:this.shape_373,p:{x:68.1,y:192.8}},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_502,p:{x:131.4,y:194.5}},{t:this.shape_367,p:{x:140.1,y:192.7}},{t:this.shape_500,p:{x:148.9,y:194.5}},{t:this.shape_521},{t:this.shape_372,p:{x:182.8,y:192.7}},{t:this.shape_520,p:{x:195.3,y:194.5}},{t:this.shape_519,p:{x:206.3,y:194.5}},{t:this.shape_504,p:{x:214.8,y:194.5}},{t:this.shape_496,p:{x:223.8,y:194.5}},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515,p:{x:261.8,y:197.9}}]},1).to({state:[{t:this.shape_761},{t:this.shape_637,p:{x:-155.9,y:116}},{t:this.shape_636,p:{x:-143.2,y:117.7}},{t:this.shape_597,p:{x:-134.5,y:116}},{t:this.shape_760},{t:this.shape_634,p:{x:-119.4,y:117.7}},{t:this.shape_667,p:{x:-100.8,y:116.1}},{t:this.shape_759},{t:this.shape_758},{t:this.shape_361,p:{x:-71.7,y:117.7}},{t:this.shape_757},{t:this.shape_626,p:{x:-40.6,y:117.7}},{t:this.shape_594,p:{x:-29.5,y:117.7}},{t:this.shape_756},{t:this.shape_646,p:{x:-15.7,y:116}},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753,p:{x:16.4,y:117.7}},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_501,p:{x:-287,y:161.6}},{t:this.shape_741},{t:this.shape_588,p:{x:-265.1,y:163.2}},{t:this.shape_740},{t:this.shape_739},{t:this.shape_581,p:{x:-233.1,y:163.2}},{t:this.shape_738},{t:this.shape_580,p:{x:-206.8,y:163.2}},{t:this.shape_737},{t:this.shape_736},{t:this.shape_630,p:{x:-178,y:161.5}},{t:this.shape_625,p:{x:-169.3,y:161.5}},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_622,p:{x:-108.9,y:161.5}},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_631,p:{x:-50.9,y:163.2}},{t:this.shape_603,p:{x:-42.9,y:161.5}},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_619,p:{x:1.7,y:163.2}},{t:this.shape_725},{t:this.shape_596,p:{x:31.3,y:163.2}},{t:this.shape_724},{t:this.shape_723},{t:this.shape_563,p:{x:60.3,y:163.2}},{t:this.shape_722},{t:this.shape_530,p:{x:80.4,y:163.2}},{t:this.shape_595,p:{x:91.6,y:163.2}},{t:this.shape_370,p:{x:100.4,y:161.5}},{t:this.shape_721},{t:this.shape_720},{t:this.shape_593,p:{x:129.8,y:161.5}},{t:this.shape_586,p:{x:138.6,y:163.2}},{t:this.shape_719},{t:this.shape_533,p:{x:159.8,y:166.7}},{t:this.shape_604,p:{x:178.9,y:161.5}},{t:this.shape_718},{t:this.shape_578,p:{x:208.5,y:163.2}},{t:this.shape_557,p:{x:219.5,y:163.2}},{t:this.shape_591,p:{x:226,y:161.5}},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_572,p:{x:-276.8,y:186}},{t:this.shape_497,p:{x:-264.7,y:186}},{t:this.shape_527,p:{x:-254.8,y:184.4}},{t:this.shape_713},{t:this.shape_585,p:{x:-233.8,y:184.2}},{t:this.shape_567,p:{x:-221.2,y:186}},{t:this.shape_555,p:{x:-210.1,y:186}},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_363,p:{x:-159.6,y:186}},{t:this.shape_709,p:{x:-147.5,y:186}},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_577,p:{x:-88.8,y:184.2}},{t:this.shape_587,p:{x:-79.6,y:184.3}},{t:this.shape_704,p:{x:-71.4,y:186}},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_508,p:{x:-23.9,y:186}},{t:this.shape_506,p:{x:-11.4,y:184.2}},{t:this.shape_700},{t:this.shape_551,p:{x:11.5,y:186}},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_579,p:{x:58.1,y:184.3}},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_605,p:{x:108.4,y:186}},{t:this.shape_693},{t:this.shape_608,p:{x:137.3,y:186}},{t:this.shape_573,p:{x:146.1,y:184.3}},{t:this.shape_692},{t:this.shape_367,p:{x:168.7,y:184.2}},{t:this.shape_502,p:{x:177.5,y:186}},{t:this.shape_535,p:{x:188.5,y:186}},{t:this.shape_529,p:{x:195,y:184.3}},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_559,p:{x:-163.1,y:208.7}},{t:this.shape_500,p:{x:-151,y:208.7}},{t:this.shape_684},{t:this.shape_503,p:{x:-123.1,y:207}},{t:this.shape_683},{t:this.shape_526,p:{x:-99.7,y:208.7}},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_373,p:{x:-58.3,y:207}},{t:this.shape_545,p:{x:-50.2,y:208.7}},{t:this.shape_561,p:{x:-40.8,y:207.1}},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_519,p:{x:66.2,y:208.7}},{t:this.shape_672},{t:this.shape_372,p:{x:87.4,y:207}},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_496,p:{x:146.5,y:208.7}},{t:this.shape_504,p:{x:157.5,y:208.7}},{t:this.shape_515,p:{x:161.9,y:212.2}}]},1).to({state:[{t:this.shape_663,p:{x:-120.7,y:116.3}},{t:this.shape_876},{t:this.shape_631,p:{x:-95.3,y:118}},{t:this.shape_573,p:{x:-87.4,y:116.3}},{t:this.shape_568,p:{x:-75.8,y:118}},{t:this.shape_529,p:{x:-64.2,y:116.3}},{t:this.shape_367,p:{x:-58.8,y:116.2}},{t:this.shape_373,p:{x:-53.3,y:116.3}},{t:this.shape_875,p:{x:-44.7}},{t:this.shape_512,p:{x:-32.7,y:118}},{t:this.shape_500,p:{x:-20.6,y:118}},{t:this.shape_372,p:{x:-3.6,y:116.2}},{t:this.shape_520,p:{x:9,y:118}},{t:this.shape_874},{t:this.shape_873,p:{x:41}},{t:this.shape_753,p:{x:52.4,y:118}},{t:this.shape_506,p:{x:64.4,y:116.2}},{t:this.shape_872,p:{x:76.1,y:118}},{t:this.shape_504,p:{x:87.1,y:118}},{t:this.shape_871},{t:this.shape_496,p:{x:108.5,y:118}},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_440,p:{x:-251.5,y:164.3}},{t:this.shape_856,p:{x:-235.7}},{t:this.shape_855,p:{x:-222.9}},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852,p:{x:-178.9}},{t:this.shape_851,p:{x:-166}},{t:this.shape_459,p:{x:-147.8,y:164.3}},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848,p:{x:-113.5}},{t:this.shape_847,p:{x:-105.3}},{t:this.shape_846},{t:this.shape_197,p:{x:-82.8,y:164.3}},{t:this.shape_845,p:{x:-73.5}},{t:this.shape_465,p:{x:-64.1,y:164.3}},{t:this.shape_844,p:{x:-51.2}},{t:this.shape_843,p:{x:-38.4,y:164.3}},{t:this.shape_842},{t:this.shape_463,p:{x:-8.7,y:164.3}},{t:this.shape_471,p:{x:9.4,y:164.3}},{t:this.shape_841},{t:this.shape_840},{t:this.shape_468,p:{x:54.4,y:164.3}},{t:this.shape_839,p:{x:66.1}},{t:this.shape_474,p:{x:76,y:164.3}},{t:this.shape_838},{t:this.shape_837,p:{x:102.2}},{t:this.shape_836,p:{x:114}},{t:this.shape_835},{t:this.shape_450,p:{x:143.2,y:164.3}},{t:this.shape_191,p:{x:155.8,y:164.3}},{t:this.shape_834,p:{x:165.1}},{t:this.shape_833},{t:this.shape_441,p:{x:187.8,y:164.3}},{t:this.shape_832,p:{x:203.6}},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829,p:{x:245.3}},{t:this.shape_828,p:{x:257}},{t:this.shape_437,p:{x:272.7,y:164.3}},{t:this.shape_402,p:{x:281.9,y:162.5}},{t:this.shape_827,p:{x:-300.5}},{t:this.shape_826,p:{x:-291.7}},{t:this.shape_825,p:{x:-282}},{t:this.shape_824,p:{x:-269}},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821,p:{x:-224.4}},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_386,p:{x:-168.2,y:186.7}},{t:this.shape_186,p:{x:-159,y:188.5}},{t:this.shape_817},{t:this.shape_816,p:{x:-127.9}},{t:this.shape_390,p:{x:-118.7,y:186.7}},{t:this.shape_148,p:{x:-104.2,y:188.5}},{t:this.shape_815},{t:this.shape_814,p:{x:-78.5}},{t:this.shape_384,p:{x:-69.3,y:186.7}},{t:this.shape_813,p:{x:-54.7}},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809,p:{x:-5.9}},{t:this.shape_808,p:{x:4}},{t:this.shape_133,p:{x:16.6,y:188.5}},{t:this.shape_383,p:{x:25.9,y:186.7}},{t:this.shape_807,p:{x:35.2}},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803,p:{x:92.3}},{t:this.shape_802},{t:this.shape_801,p:{x:127}},{t:this.shape_800},{t:this.shape_378,p:{x:147.1,y:186.7}},{t:this.shape_118,p:{x:156.3,y:188.5}},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797,p:{x:194.8}},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792,p:{x:262.2}},{t:this.shape_791,p:{x:273.8}},{t:this.shape_790,p:{x:283.7}},{t:this.shape_789},{t:this.shape_279,p:{x:-217.8,y:212.7}},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786,p:{x:-180.9}},{t:this.shape_785},{t:this.shape_297,p:{x:-151.6,y:212.7}},{t:this.shape_784,p:{x:-135.8}},{t:this.shape_783,p:{x:-127}},{t:this.shape_782},{t:this.shape_781,p:{x:-103.9}},{t:this.shape_780,p:{x:-94}},{t:this.shape_111,p:{x:-84.8,y:212.6}},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776,p:{x:-28.6}},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773,p:{x:17.2}},{t:this.shape_772,p:{x:29.8}},{t:this.shape_266,p:{x:42.6,y:212.7}},{t:this.shape_275,p:{x:54.3,y:212.7}},{t:this.shape_294,p:{x:66.2,y:212.7}},{t:this.shape_771,p:{x:84.8}},{t:this.shape_770},{t:this.shape_769,p:{x:107.7}},{t:this.shape_768,p:{x:116.4}},{t:this.shape_767,p:{x:123.4}},{t:this.shape_766},{t:this.shape_765},{t:this.shape_273,p:{x:168.5,y:210.9}},{t:this.shape_764},{t:this.shape_763,p:{x:188.9}},{t:this.shape_101,p:{x:198.1,y:212.6}},{t:this.shape_762},{t:this.shape_268,p:{x:219.7,y:216.4}}]},1).to({state:[{t:this.shape_960},{t:this.shape_606,p:{x:-109.8,y:116.5}},{t:this.shape_959},{t:this.shape_709,p:{x:-85.9,y:116.5}},{t:this.shape_667,p:{x:-67.3,y:114.8}},{t:this.shape_872,p:{x:-54.9,y:116.5}},{t:this.shape_367,p:{x:-46.2,y:114.7}},{t:this.shape_553,p:{x:-39.7,y:114.7}},{t:this.shape_496,p:{x:-31,y:116.5}},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_191,p:{x:-174.2,y:140}},{t:this.shape_230,p:{x:-162.5,y:140.1}},{t:this.shape_235,p:{x:-155.6,y:138.3}},{t:this.shape_220,p:{x:-148.5,y:138.4}},{t:this.shape_939},{t:this.shape_229,p:{x:-126.8,y:140.1}},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_228,p:{x:-71.9,y:138.3}},{t:this.shape_186,p:{x:-62.7,y:140}},{t:this.shape_935},{t:this.shape_934},{t:this.shape_219,p:{x:-24.3,y:140.1}},{t:this.shape_933},{t:this.shape_237,p:{x:-0.1,y:140.1}},{t:this.shape_932},{t:this.shape_931},{t:this.shape_236,p:{x:26,y:138.2}},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_233,p:{x:79.2,y:140.1}},{t:this.shape_246,p:{x:92,y:140.1}},{t:this.shape_227,p:{x:106.7,y:138.2}},{t:this.shape_226,p:{x:112.5,y:138.2}},{t:this.shape_927},{t:this.shape_926},{t:this.shape_244,p:{x:153.4,y:140.1}},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_222,p:{x:213.5,y:140.1}},{t:this.shape_922},{t:this.shape_221,p:{x:238.7,y:140.1}},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_182,p:{x:-217.2,y:164.3}},{t:this.shape_917,p:{x:-201.4,y:164.3}},{t:this.shape_196,p:{x:-185.4,y:164.3}},{t:this.shape_916,p:{x:-170.7,y:162.4}},{t:this.shape_915,p:{x:-161.5,y:164.3}},{t:this.shape_914},{t:this.shape_174,p:{x:-131.6,y:164.3}},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_165,p:{x:-78.3,y:162.4}},{t:this.shape_198,p:{x:-71.9,y:162.5}},{t:this.shape_148,p:{x:-62.7,y:164.2}},{t:this.shape_192,p:{x:-53.5,y:162.5}},{t:this.shape_910,p:{x:-44.2,y:164.3}},{t:this.shape_909},{t:this.shape_175,p:{x:-20.8,y:162.6}},{t:this.shape_194,p:{x:-11,y:164.3}},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_163,p:{x:83.3,y:164.3}},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_180,p:{x:138.6,y:162.5}},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897,p:{x:179.9,y:164.3}},{t:this.shape_206,p:{x:191.7,y:164.3}},{t:this.shape_168,p:{x:200.1,y:162.6}},{t:this.shape_167,p:{x:209.9,y:164.3}},{t:this.shape_201,p:{x:219.1,y:162.4}},{t:this.shape_896},{t:this.shape_895},{t:this.shape_146,p:{x:-243.4,y:186.7}},{t:this.shape_159,p:{x:-233.7,y:188.4}},{t:this.shape_153,p:{x:-222,y:188.4}},{t:this.shape_894},{t:this.shape_893},{t:this.shape_133,p:{x:-186.1,y:188.4}},{t:this.shape_892},{t:this.shape_142,p:{x:-167.4,y:188.4}},{t:this.shape_141,p:{x:-154.5,y:188.4}},{t:this.shape_891,p:{x:-141.7,y:188.4}},{t:this.shape_402,p:{x:-132.4,y:186.6}},{t:this.shape_375,p:{x:-126.2,y:192.1}},{t:this.shape_118,p:{x:-111.2,y:188.4}},{t:this.shape_122,p:{x:-98.4,y:188.4}},{t:this.shape_121,p:{x:-86.3,y:188.4}},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_151,p:{x:-33.3,y:188.4}},{t:this.shape_157,p:{x:-20.5,y:188.4}},{t:this.shape_135,p:{x:-9.9,y:186.7}},{t:this.shape_130,p:{x:0.1,y:188.4}},{t:this.shape_129,p:{x:11.9,y:188.4}},{t:this.shape_886},{t:this.shape_139,p:{x:41.1,y:188.4}},{t:this.shape_390,p:{x:50.3,y:186.6}},{t:this.shape_123,p:{x:63.9,y:188.4}},{t:this.shape_137,p:{x:73.8,y:188.4}},{t:this.shape_385,p:{x:86.4,y:188.4}},{t:this.shape_384,p:{x:95.6,y:186.6}},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_162,p:{x:191.3,y:190.3}},{t:this.shape_879},{t:this.shape_111,p:{x:210.4,y:188.4}},{t:this.shape_125,p:{x:223.3,y:188.4}},{t:this.shape_105,p:{x:-61.4,y:212.6}},{t:this.shape_90,p:{x:-45.6,y:212.6}},{t:this.shape_878},{t:this.shape_95,p:{x:-25.4,y:210.8}},{t:this.shape_101,p:{x:-16.2,y:212.6}},{t:this.shape_85,p:{x:-3.5,y:212.6}},{t:this.shape_877},{t:this.shape_119,p:{x:22.3,y:212.6}},{t:this.shape_239,p:{x:31,y:216.3}}]},1).to({state:[{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_1080,p:{x:-135.8,y:117}},{t:this.shape_191,p:{x:-126.6,y:118.8}},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_1077},{t:this.shape_1076},{t:this.shape_186,p:{x:-56.7,y:118.8}},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_170,p:{x:-11.7,y:120.7}},{t:this.shape_1073},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_1068},{t:this.shape_1067},{t:this.shape_217,p:{x:83.5,y:117}},{t:this.shape_1066},{t:this.shape_1065},{t:this.shape_212,p:{x:121.5,y:117}},{t:this.shape_1064},{t:this.shape_1063},{t:this.shape_1062},{t:this.shape_1061},{t:this.shape_92,p:{x:-253,y:164}},{t:this.shape_1060},{t:this.shape_1059},{t:this.shape_148,p:{x:-231.1,y:165.7}},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_1056},{t:this.shape_1055},{t:this.shape_1054,p:{x:-175.1}},{t:this.shape_1053,p:{x:-163.4,y:165.8}},{t:this.shape_1052,p:{x:-153.5}},{t:this.shape_1051,p:{x:-144.3}},{t:this.shape_1050},{t:this.shape_1049,p:{x:-110.8}},{t:this.shape_1048},{t:this.shape_1047,p:{x:-90.6}},{t:this.shape_133,p:{x:-81.4,y:165.7}},{t:this.shape_1046,p:{x:-68.7}},{t:this.shape_1045},{t:this.shape_1044},{t:this.shape_1043},{t:this.shape_1042,p:{x:-21.2}},{t:this.shape_1041},{t:this.shape_1040,p:{x:1.3}},{t:this.shape_1039,p:{x:19.4}},{t:this.shape_1038,p:{x:29.3}},{t:this.shape_1037},{t:this.shape_1036},{t:this.shape_1035,p:{x:62.8}},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030,p:{x:123}},{t:this.shape_1029,p:{x:136}},{t:this.shape_1028},{t:this.shape_1027,p:{x:162.2}},{t:this.shape_446,p:{x:173.9,y:165.8}},{t:this.shape_1026,p:{x:184.4}},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023,p:{x:223.5}},{t:this.shape_438,p:{x:235.3,y:165.8}},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019,p:{x:-268.8}},{t:this.shape_1018,p:{x:-255.4}},{t:this.shape_118,p:{x:-242.8,y:189.9}},{t:this.shape_1017,p:{x:-232.3}},{t:this.shape_185,p:{x:-222.4,y:189.9}},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_916,p:{x:-166.8,y:188.1}},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_201,p:{x:-131.3,y:188.1}},{t:this.shape_1011},{t:this.shape_1010,p:{x:-110.6}},{t:this.shape_1009,p:{x:-98.6}},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006,p:{x:-55.5}},{t:this.shape_1005,p:{x:-38.4}},{t:this.shape_915,p:{x:-28.6,y:189.9}},{t:this.shape_165,p:{x:-18.3,y:188.1}},{t:this.shape_1004,p:{x:-8.9}},{t:this.shape_1003,p:{x:2.9}},{t:this.shape_917,p:{x:16.4,y:189.9}},{t:this.shape_1002},{t:this.shape_239,p:{x:41.9,y:193.6}},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_999,p:{x:84.8}},{t:this.shape_998,p:{x:94.7}},{t:this.shape_997},{t:this.shape_996,p:{x:118.1}},{t:this.shape_910,p:{x:127.9,y:189.9}},{t:this.shape_995},{t:this.shape_994,p:{x:159}},{t:this.shape_993},{t:this.shape_180,p:{x:181.8,y:188.1}},{t:this.shape_194,p:{x:191.1,y:189.9}},{t:this.shape_992,p:{x:202.7}},{t:this.shape_991},{t:this.shape_897,p:{x:226.2,y:189.9}},{t:this.shape_990,p:{x:244.4}},{t:this.shape_163,p:{x:257.8,y:189.9}},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_111,p:{x:-69.6,y:214.1}},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_336,p:{x:-9.2,y:212.3}},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969,p:{x:63}},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_101,p:{x:136.8,y:214.1}},{t:this.shape_329,p:{x:146.1,y:212.3}},{t:this.shape_963},{t:this.shape_962,p:{x:168.4}},{t:this.shape_961,p:{x:178.2}}]},1).to({state:[{t:this.shape_1169},{t:this.shape_875,p:{x:-156.2}},{t:this.shape_530,p:{x:-145.3,y:118}},{t:this.shape_573,p:{x:-137.1,y:116.3}},{t:this.shape_372,p:{x:-128.4,y:116.2}},{t:this.shape_1168},{t:this.shape_367,p:{x:-99.8,y:116.2}},{t:this.shape_1167},{t:this.shape_873,p:{x:-84.8}},{t:this.shape_519,p:{x:-73.8,y:118}},{t:this.shape_500,p:{x:-64.7,y:118}},{t:this.shape_1166},{t:this.shape_529,p:{x:-37.6,y:116.3}},{t:this.shape_1165},{t:this.shape_1164},{t:this.shape_520,p:{x:-4.3,y:118}},{t:this.shape_373,p:{x:4.3,y:116.3}},{t:this.shape_504,p:{x:12,y:118}},{t:this.shape_496,p:{x:21.1,y:118}},{t:this.shape_704,p:{x:32.5,y:118}},{t:this.shape_1163},{t:this.shape_1162},{t:this.shape_1161},{t:this.shape_1160},{t:this.shape_1159},{t:this.shape_1158,p:{x:101}},{t:this.shape_531,p:{x:109,y:116.3}},{t:this.shape_1157,p:{x:121.9}},{t:this.shape_1156},{t:this.shape_1155},{t:this.shape_1154,p:{x:155.2}},{t:this.shape_1153},{t:this.shape_1152},{t:this.shape_837,p:{x:-257.3}},{t:this.shape_847,p:{x:-245.5}},{t:this.shape_1151},{t:this.shape_468,p:{x:-216.2,y:164.3}},{t:this.shape_1150},{t:this.shape_1149},{t:this.shape_855,p:{x:-178.8}},{t:this.shape_1148},{t:this.shape_1147},{t:this.shape_839,p:{x:-146.4}},{t:this.shape_1146},{t:this.shape_450,p:{x:-111.7,y:164.3}},{t:this.shape_1145},{t:this.shape_1144,p:{x:-91.6}},{t:this.shape_186,p:{x:-82.4,y:164.3}},{t:this.shape_454,p:{x:-69.7,y:164.3}},{t:this.shape_1143},{t:this.shape_1142},{t:this.shape_473,p:{x:-26.5,y:166.2}},{t:this.shape_836,p:{x:-9.7}},{t:this.shape_441,p:{x:0.2,y:164.3}},{t:this.shape_1141},{t:this.shape_467,p:{x:23.8,y:164.3}},{t:this.shape_402,p:{x:33.2,y:162.5}},{t:this.shape_1140},{t:this.shape_148,p:{x:55.3,y:164.3}},{t:this.shape_848,p:{x:64.6}},{t:this.shape_852,p:{x:74}},{t:this.shape_851,p:{x:86.9}},{t:this.shape_1139,p:{x:99.7}},{t:this.shape_828,p:{x:111.4}},{t:this.shape_845,p:{x:118.3}},{t:this.shape_1138},{t:this.shape_1137},{t:this.shape_133,p:{x:151.8,y:164.3}},{t:this.shape_1136},{t:this.shape_1135},{t:this.shape_1134},{t:this.shape_856,p:{x:209.8}},{t:this.shape_832,p:{x:219.9}},{t:this.shape_834,p:{x:226.2}},{t:this.shape_444,p:{x:235.6,y:164.3}},{t:this.shape_437,p:{x:253.8,y:164.3}},{t:this.shape_1133},{t:this.shape_813,p:{x:-292.5}},{t:this.shape_1132},{t:this.shape_808,p:{x:-274.1}},{t:this.shape_826,p:{x:-262.4}},{t:this.shape_118,p:{x:-252.6,y:188.5}},{t:this.shape_1131},{t:this.shape_1130},{t:this.shape_797,p:{x:-226.4}},{t:this.shape_1129},{t:this.shape_801,p:{x:-194.8}},{t:this.shape_1128},{t:this.shape_1127},{t:this.shape_809,p:{x:-149.2}},{t:this.shape_803,p:{x:-140.1}},{t:this.shape_1126},{t:this.shape_1125,p:{x:-117.4}},{t:this.shape_1124,p:{x:-105.4}},{t:this.shape_1123},{t:this.shape_1122,p:{x:-83.8}},{t:this.shape_390,p:{x:-72.2,y:186.7}},{t:this.shape_1121},{t:this.shape_792,p:{x:-50}},{t:this.shape_1120,p:{x:-37.5}},{t:this.shape_1119},{t:this.shape_111,p:{x:-6.3,y:188.5}},{t:this.shape_1118},{t:this.shape_1117},{t:this.shape_1116},{t:this.shape_1115},{t:this.shape_386,p:{x:60.5,y:186.7}},{t:this.shape_1114},{t:this.shape_1113},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_1110},{t:this.shape_814,p:{x:126.2}},{t:this.shape_384,p:{x:135.4,y:186.7}},{t:this.shape_383,p:{x:141.2,y:186.7}},{t:this.shape_1109},{t:this.shape_378,p:{x:160,y:186.7}},{t:this.shape_1108},{t:this.shape_1107},{t:this.shape_1106},{t:this.shape_1105},{t:this.shape_791,p:{x:213.1}},{t:this.shape_1104,p:{x:222.9}},{t:this.shape_827,p:{x:233}},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_790,p:{x:274.5}},{t:this.shape_1101},{t:this.shape_1100},{t:this.shape_282,p:{x:-207.5,y:212.7}},{t:this.shape_1099},{t:this.shape_780,p:{x:-186.6}},{t:this.shape_773,p:{x:-177.2}},{t:this.shape_303,p:{x:-164.4,y:212.7}},{t:this.shape_786,p:{x:-152.7}},{t:this.shape_1098},{t:this.shape_267,p:{x:-118.6,y:210.9}},{t:this.shape_783,p:{x:-107.4}},{t:this.shape_1097,p:{x:-97.6}},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_305,p:{x:-36.1,y:212.7}},{t:this.shape_279,p:{x:-20.3,y:212.7}},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_776,p:{x:10.1}},{t:this.shape_1090},{t:this.shape_772,p:{x:44.7}},{t:this.shape_768,p:{x:56.5}},{t:this.shape_1089,p:{x:66.3}},{t:this.shape_280,p:{x:75.5,y:210.8}},{t:this.shape_767,p:{x:81.3}},{t:this.shape_1088},{t:this.shape_769,p:{x:100}},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_266,p:{x:145.7,y:212.7}},{t:this.shape_1085},{t:this.shape_763,p:{x:165.9}},{t:this.shape_101,p:{x:175.1,y:212.6}},{t:this.shape_1084},{t:this.shape_262,p:{x:200.6,y:212.7}},{t:this.shape_1083}]},1).to({state:[{t:this.shape_1235},{t:this.shape_508,p:{x:-147,y:118}},{t:this.shape_1234},{t:this.shape_1233},{t:this.shape_1232},{t:this.shape_1231},{t:this.shape_504,p:{x:-81.3,y:118}},{t:this.shape_372,p:{x:-72.1,y:116.2}},{t:this.shape_502,p:{x:-59.4,y:118}},{t:this.shape_506,p:{x:-46.9,y:116.2}},{t:this.shape_875,p:{x:-35}},{t:this.shape_1230},{t:this.shape_500,p:{x:-1.3,y:118}},{t:this.shape_1229},{t:this.shape_1228},{t:this.shape_496,p:{x:30,y:118}},{t:this.shape_1227},{t:this.shape_873,p:{x:52.2}},{t:this.shape_1226},{t:this.shape_531,p:{x:75,y:116.3}},{t:this.shape_1157,p:{x:87.9}},{t:this.shape_1225},{t:this.shape_1224},{t:this.shape_1223},{t:this.shape_1154,p:{x:127.9}},{t:this.shape_1222},{t:this.shape_118,p:{x:-281.5,y:165.7}},{t:this.shape_1221},{t:this.shape_1026,p:{x:-255.7}},{t:this.shape_1023,p:{x:-242.7}},{t:this.shape_1220},{t:this.shape_1047,p:{x:-214.4}},{t:this.shape_1219},{t:this.shape_1035,p:{x:-195.7}},{t:this.shape_1052,p:{x:-185.9}},{t:this.shape_1039,p:{x:-167.8}},{t:this.shape_1218},{t:this.shape_1217},{t:this.shape_1216},{t:this.shape_1038,p:{x:-117.5}},{t:this.shape_1215},{t:this.shape_1214},{t:this.shape_1213},{t:this.shape_1212},{t:this.shape_1211},{t:this.shape_1210},{t:this.shape_1209},{t:this.shape_111,p:{x:-22.8,y:165.7}},{t:this.shape_273,p:{x:-10.1,y:164}},{t:this.shape_1208},{t:this.shape_1207},{t:this.shape_1206},{t:this.shape_1054,p:{x:46}},{t:this.shape_1042,p:{x:61.7}},{t:this.shape_1205},{t:this.shape_1049,p:{x:84.2}},{t:this.shape_1040,p:{x:102.2}},{t:this.shape_1051,p:{x:111.4}},{t:this.shape_1030,p:{x:126.1}},{t:this.shape_1053,p:{x:138.2,y:165.8}},{t:this.shape_1204},{t:this.shape_1203},{t:this.shape_1029,p:{x:179.2}},{t:this.shape_1202},{t:this.shape_1027,p:{x:205.4}},{t:this.shape_446,p:{x:217.1,y:165.8}},{t:this.shape_1046,p:{x:227}},{t:this.shape_1201},{t:this.shape_1200},{t:this.shape_438,p:{x:265,y:165.8}},{t:this.shape_990,p:{x:-291.1}},{t:this.shape_1009,p:{x:-277.7}},{t:this.shape_1199},{t:this.shape_1198},{t:this.shape_1005,p:{x:-232.1}},{t:this.shape_1080,p:{x:-225.5,y:188.1}},{t:this.shape_185,p:{x:-216.1,y:189.9}},{t:this.shape_1197},{t:this.shape_1196},{t:this.shape_1195},{t:this.shape_916,p:{x:-162.7,y:188.1}},{t:this.shape_198,p:{x:-156.9,y:188.1}},{t:this.shape_1194},{t:this.shape_1193},{t:this.shape_1192},{t:this.shape_1010,p:{x:-105.8}},{t:this.shape_1191},{t:this.shape_1006,p:{x:-76.4}},{t:this.shape_1003,p:{x:-59.3}},{t:this.shape_1190},{t:this.shape_1189},{t:this.shape_1004,p:{x:-17.4}},{t:this.shape_999,p:{x:-5.6}},{t:this.shape_1018,p:{x:4.2}},{t:this.shape_998,p:{x:22.3}},{t:this.shape_992,p:{x:33.9}},{t:this.shape_1017,p:{x:42.4}},{t:this.shape_92,p:{x:49.4,y:188.1}},{t:this.shape_165,p:{x:55.6,y:188.1}},{t:this.shape_192,p:{x:62,y:188.1}},{t:this.shape_101,p:{x:71.2,y:189.9}},{t:this.shape_915,p:{x:83.9,y:189.9}},{t:this.shape_1019,p:{x:102}},{t:this.shape_910,p:{x:115.4,y:189.9}},{t:this.shape_201,p:{x:124.6,y:188.1}},{t:this.shape_1188},{t:this.shape_1187},{t:this.shape_194,p:{x:163.5,y:189.9}},{t:this.shape_1186},{t:this.shape_180,p:{x:184.4,y:188.1}},{t:this.shape_1185},{t:this.shape_1184},{t:this.shape_996,p:{x:216.6}},{t:this.shape_994,p:{x:226.5}},{t:this.shape_1183},{t:this.shape_163,p:{x:258.2,y:189.9}},{t:this.shape_1182},{t:this.shape_1181},{t:this.shape_336,p:{x:-103.3,y:212.3}},{t:this.shape_1180},{t:this.shape_1179},{t:this.shape_1178},{t:this.shape_962,p:{x:-48}},{t:this.shape_1177},{t:this.shape_348,p:{x:-26,y:212.3}},{t:this.shape_1176},{t:this.shape_969,p:{x:-3.2}},{t:this.shape_1175},{t:this.shape_1174},{t:this.shape_337,p:{x:40.4,y:212.3}},{t:this.shape_1173},{t:this.shape_1172},{t:this.shape_329,p:{x:70.8,y:212.3}},{t:this.shape_1171},{t:this.shape_1170},{t:this.shape_961,p:{x:95.6}}]},1).to({state:[{t:this.shape_1328},{t:this.shape_519,p:{x:-59.5,y:118.5}},{t:this.shape_511,p:{x:-51.5,y:116.9}},{t:this.shape_606,p:{x:-42.3,y:118.5}},{t:this.shape_504,p:{x:-31.3,y:118.5}},{t:this.shape_496,p:{x:-22.2,y:118.5}},{t:this.shape_1327},{t:this.shape_1326},{t:this.shape_568,p:{x:25.5,y:118.5}},{t:this.shape_373,p:{x:37,y:116.8}},{t:this.shape_361,p:{x:45,y:118.5}},{t:this.shape_1325},{t:this.shape_413,p:{x:-287.2,y:140.2}},{t:this.shape_1324},{t:this.shape_1323},{t:this.shape_122,p:{x:-248.3,y:142.1}},{t:this.shape_402,p:{x:-239,y:140.2}},{t:this.shape_146,p:{x:-232,y:140.4}},{t:this.shape_1322},{t:this.shape_1321},{t:this.shape_390,p:{x:-194.7,y:140.2}},{t:this.shape_186,p:{x:-180.1,y:142}},{t:this.shape_1320},{t:this.shape_1319},{t:this.shape_129,p:{x:-142.8,y:142.1}},{t:this.shape_135,p:{x:-134.3,y:140.4}},{t:this.shape_1318},{t:this.shape_384,p:{x:-115.4,y:140.2}},{t:this.shape_155,p:{x:-100.7,y:140.2}},{t:this.shape_1317},{t:this.shape_1316},{t:this.shape_1315},{t:this.shape_1314},{t:this.shape_159,p:{x:-25.3,y:142.1}},{t:this.shape_123,p:{x:-13.6,y:142.1}},{t:this.shape_381,p:{x:-3.7,y:142.1}},{t:this.shape_151,p:{x:14.3,y:142.1}},{t:this.shape_157,p:{x:27.1,y:142.1}},{t:this.shape_212,p:{x:44,y:140.3}},{t:this.shape_1313},{t:this.shape_1312},{t:this.shape_1311},{t:this.shape_139,p:{x:101.3,y:142.1}},{t:this.shape_1310},{t:this.shape_1309},{t:this.shape_1308},{t:this.shape_378,p:{x:157.7,y:140.3}},{t:this.shape_1307},{t:this.shape_1306},{t:this.shape_1305},{t:this.shape_1304},{t:this.shape_1303},{t:this.shape_891,p:{x:231.4,y:142.1}},{t:this.shape_1302},{t:this.shape_1301},{t:this.shape_137,p:{x:269.5,y:142.1}},{t:this.shape_1300},{t:this.shape_1299},{t:this.shape_1298},{t:this.shape_1297},{t:this.shape_1296},{t:this.shape_1295},{t:this.shape_1294},{t:this.shape_1293},{t:this.shape_148,p:{x:-207.7,y:166.2}},{t:this.shape_1292},{t:this.shape_1291},{t:this.shape_1290},{t:this.shape_1289},{t:this.shape_1288},{t:this.shape_1287},{t:this.shape_1286},{t:this.shape_117,p:{x:-121.1,y:164.5}},{t:this.shape_1285},{t:this.shape_1284},{t:this.shape_1283},{t:this.shape_1282},{t:this.shape_104,p:{x:-54.5,y:164.5}},{t:this.shape_133,p:{x:-45.3,y:166.2}},{t:this.shape_1281},{t:this.shape_1280},{t:this.shape_1279},{t:this.shape_1278},{t:this.shape_118,p:{x:24,y:166.2}},{t:this.shape_1277},{t:this.shape_107,p:{x:48.4,y:166.3}},{t:this.shape_111,p:{x:58.1,y:166.2}},{t:this.shape_1276},{t:this.shape_1275},{t:this.shape_1274},{t:this.shape_115,p:{x:116.9,y:164.4}},{t:this.shape_1273},{t:this.shape_1272},{t:this.shape_1271},{t:this.shape_1270},{t:this.shape_95,p:{x:178.5,y:164.5}},{t:this.shape_1269},{t:this.shape_1268},{t:this.shape_1267},{t:this.shape_98,p:{x:223.3,y:164.4}},{t:this.shape_1266},{t:this.shape_1265},{t:this.shape_1264},{t:this.shape_1263},{t:this.shape_477,p:{x:-303.1,y:188.6}},{t:this.shape_1262},{t:this.shape_1261},{t:this.shape_1260},{t:this.shape_1259},{t:this.shape_475,p:{x:-252.7,y:188.7}},{t:this.shape_470,p:{x:-246.3,y:188.6}},{t:this.shape_101,p:{x:-237.1,y:190.4}},{t:this.shape_460,p:{x:-227.9,y:188.6}},{t:this.shape_479,p:{x:-218.6,y:190.4}},{t:this.shape_1258},{t:this.shape_1257},{t:this.shape_843,p:{x:-174.2,y:190.4}},{t:this.shape_457,p:{x:-159.6,y:188.6}},{t:this.shape_449,p:{x:-147.2,y:190.4}},{t:this.shape_1256},{t:this.shape_471,p:{x:-118,y:190.4}},{t:this.shape_1053,p:{x:-106.3,y:190.4}},{t:this.shape_463,p:{x:-96.4,y:190.4}},{t:this.shape_1255},{t:this.shape_454,p:{x:-70.6,y:190.4}},{t:this.shape_1254},{t:this.shape_468,p:{x:-39.6,y:190.4}},{t:this.shape_452,p:{x:-25,y:188.6}},{t:this.shape_1253},{t:this.shape_1252},{t:this.shape_450,p:{x:16.7,y:190.4}},{t:this.shape_446,p:{x:28.3,y:190.4}},{t:this.shape_1251},{t:this.shape_451,p:{x:51,y:190.4}},{t:this.shape_441,p:{x:69.2,y:190.4}},{t:this.shape_1250},{t:this.shape_482,p:{x:100.3,y:190.4}},{t:this.shape_1249},{t:this.shape_437,p:{x:125.7,y:190.4}},{t:this.shape_1248},{t:this.shape_455,p:{x:147.8,y:188.7}},{t:this.shape_438,p:{x:156.6,y:190.4}},{t:this.shape_444,p:{x:166.3,y:190.4}},{t:this.shape_1247},{t:this.shape_1246},{t:this.shape_92,p:{x:207.9,y:188.6}},{t:this.shape_1245},{t:this.shape_1244},{t:this.shape_1243},{t:this.shape_442,p:{x:248.9,y:188.6}},{t:this.shape_445,p:{x:258.2,y:192.3}},{t:this.shape_1242},{t:this.shape_1241},{t:this.shape_1240},{t:this.shape_415,p:{x:-68.4,y:212.8}},{t:this.shape_434,p:{x:-55,y:214.6}},{t:this.shape_1239},{t:this.shape_420,p:{x:-22.6,y:214.6}},{t:this.shape_1238},{t:this.shape_398,p:{x:1.1,y:212.9}},{t:this.shape_397,p:{x:7.4,y:212.8}},{t:this.shape_414,p:{x:16.7,y:214.6}},{t:this.shape_1237},{t:this.shape_1236},{t:this.shape_388,p:{x:60.7,y:214.6}},{t:this.shape_403,p:{x:70.6,y:214.6}}]},1).to({state:[{t:this.shape_1390},{t:this.shape_875,p:{x:-90.9}},{t:this.shape_504,p:{x:-79.9,y:118}},{t:this.shape_529,p:{x:-73.4,y:116.3}},{t:this.shape_500,p:{x:-64.6,y:118}},{t:this.shape_663,p:{x:-40.2,y:116.3}},{t:this.shape_496,p:{x:-25.8,y:118}},{t:this.shape_367,p:{x:-17.1,y:116.2}},{t:this.shape_373,p:{x:-11.6,y:116.3}},{t:this.shape_559,p:{x:-2.9,y:118}},{t:this.shape_873,p:{x:9.1}},{t:this.shape_1389},{t:this.shape_531,p:{x:31.9,y:116.3}},{t:this.shape_1157,p:{x:44.8}},{t:this.shape_1388},{t:this.shape_1387},{t:this.shape_1158,p:{x:78}},{t:this.shape_1154,p:{x:84.7}},{t:this.shape_1386},{t:this.shape_836,p:{x:-279.6}},{t:this.shape_459,p:{x:-269.8,y:164.3}},{t:this.shape_1385},{t:this.shape_1384},{t:this.shape_1144,p:{x:-226.4}},{t:this.shape_471,p:{x:-217.1,y:164.3}},{t:this.shape_1383},{t:this.shape_832,p:{x:-193.7}},{t:this.shape_1382},{t:this.shape_1381},{t:this.shape_848,p:{x:-174.1}},{t:this.shape_197,p:{x:-164.9,y:164.3}},{t:this.shape_461,p:{x:-152.1,y:164.3}},{t:this.shape_195,p:{x:-131.3,y:162.6}},{t:this.shape_468,p:{x:-116,y:164.3}},{t:this.shape_1380},{t:this.shape_845,p:{x:-95.9}},{t:this.shape_191,p:{x:-86.7,y:164.3}},{t:this.shape_1139,p:{x:-74}},{t:this.shape_851,p:{x:-61.1}},{t:this.shape_467,p:{x:-48.2,y:164.3}},{t:this.shape_1379},{t:this.shape_829,p:{x:-17.1}},{t:this.shape_844,p:{x:-4.3}},{t:this.shape_1378},{t:this.shape_1377},{t:this.shape_1376},{t:this.shape_828,p:{x:46.6}},{t:this.shape_1375},{t:this.shape_450,p:{x:75.8,y:164.3}},{t:this.shape_413,p:{x:85,y:162.5}},{t:this.shape_1374},{t:this.shape_465,p:{x:112.7,y:164.3}},{t:this.shape_1373},{t:this.shape_441,p:{x:139,y:164.3}},{t:this.shape_402,p:{x:148.2,y:162.5}},{t:this.shape_1372},{t:this.shape_437,p:{x:176.2,y:164.3}},{t:this.shape_1371},{t:this.shape_1370},{t:this.shape_200,p:{x:217.9,y:162.5}},{t:this.shape_1369},{t:this.shape_834,p:{x:242}},{t:this.shape_186,p:{x:251.2,y:164.3}},{t:this.shape_1368},{t:this.shape_1367},{t:this.shape_1366},{t:this.shape_826,p:{x:-282.9}},{t:this.shape_1365},{t:this.shape_148,p:{x:-260.4,y:188.5}},{t:this.shape_1364},{t:this.shape_809,p:{x:-235.7}},{t:this.shape_1363},{t:this.shape_1362},{t:this.shape_803,p:{x:-202.2}},{t:this.shape_821,p:{x:-186.5}},{t:this.shape_1125,p:{x:-173.7}},{t:this.shape_816,p:{x:-155.5}},{t:this.shape_390,p:{x:-146.3,y:186.7}},{t:this.shape_813,p:{x:-131.7}},{t:this.shape_1361},{t:this.shape_827,p:{x:-109.6}},{t:this.shape_1360},{t:this.shape_807,p:{x:-86.8}},{t:this.shape_378,p:{x:-76.8,y:186.7}},{t:this.shape_1359},{t:this.shape_1358},{t:this.shape_808,p:{x:-35.8}},{t:this.shape_1357},{t:this.shape_1120,p:{x:0.1}},{t:this.shape_1356},{t:this.shape_1355},{t:this.shape_801,p:{x:32.2}},{t:this.shape_791,p:{x:43.9}},{t:this.shape_1354},{t:this.shape_426,p:{x:71.8,y:186.7}},{t:this.shape_792,p:{x:85.2}},{t:this.shape_384,p:{x:99.8,y:186.7}},{t:this.shape_1104,p:{x:109.1}},{t:this.shape_133,p:{x:127,y:188.5}},{t:this.shape_814,p:{x:139.7}},{t:this.shape_1353},{t:this.shape_1352},{t:this.shape_1351},{t:this.shape_790,p:{x:197.1}},{t:this.shape_1350},{t:this.shape_1124,p:{x:227.3}},{t:this.shape_825,p:{x:239.1}},{t:this.shape_824,p:{x:252.1}},{t:this.shape_1349},{t:this.shape_1122,p:{x:274.1}},{t:this.shape_1348},{t:this.shape_1347},{t:this.shape_298,p:{x:-251.2,y:212.7}},{t:this.shape_118,p:{x:-238.5,y:212.6}},{t:this.shape_1346},{t:this.shape_1345},{t:this.shape_1344},{t:this.shape_1343},{t:this.shape_786,p:{x:-180.4}},{t:this.shape_296,p:{x:-164.7,y:212.7}},{t:this.shape_773,p:{x:-151.9}},{t:this.shape_1342},{t:this.shape_783,p:{x:-127.1}},{t:this.shape_1341},{t:this.shape_784,p:{x:-107.2}},{t:this.shape_289,p:{x:-97.4,y:212.7}},{t:this.shape_1340},{t:this.shape_1339},{t:this.shape_1338},{t:this.shape_767,p:{x:-44.8}},{t:this.shape_1337},{t:this.shape_769,p:{x:-24.8}},{t:this.shape_282,p:{x:-15,y:212.7}},{t:this.shape_776,p:{x:-3.3}},{t:this.shape_1336},{t:this.shape_1089,p:{x:20}},{t:this.shape_111,p:{x:32.6,y:212.6}},{t:this.shape_763,p:{x:41.9}},{t:this.shape_1335},{t:this.shape_1334},{t:this.shape_1333},{t:this.shape_287,p:{x:86.2,y:210.8}},{t:this.shape_279,p:{x:95.5,y:212.7}},{t:this.shape_1332},{t:this.shape_771,p:{x:125.8}},{t:this.shape_768,p:{x:137.6}},{t:this.shape_1331},{t:this.shape_266,p:{x:165.5,y:212.7}},{t:this.shape_101,p:{x:178.1,y:212.6}},{t:this.shape_1330},{t:this.shape_280,p:{x:200.3,y:210.8}},{t:this.shape_1097,p:{x:209.7}},{t:this.shape_781,p:{x:222.6}},{t:this.shape_92,p:{x:233.2,y:210.9}},{t:this.shape_1329},{t:this.shape_268,p:{x:251.4,y:216.4}}]},1).wait(1));

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


(lib.Animar12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.juanrulfo();
	this.instance.parent = this;
	this.instance.setTransform(-65,-81.8,1,0.946);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-81.8,130,163.6);


(lib.Animar11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.max();
	this.instance.parent = this;
	this.instance.setTransform(-66,-82,1.017,0.951);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-82,132.2,164.6);


(lib.Animar9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.mariacordoba();
	this.instance.parent = this;
	this.instance.setTransform(-65,-82,1,0.949);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-82,130,164.1);


(lib.Animar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.carrillopuerto();
	this.instance.parent = this;
	this.instance.setTransform(-76.3,-75.3,1.01,0.95);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AKVM4I0pAAIAA5vIUpAAg");
	this.shape.setTransform(-7.2,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.3,-76.4,136.1,166.8);


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

	this.instance_1 = new lib.mariomolina();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23.9,46.8,0.846,0.82,0,0,-53.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.846,skewY:-53.599999999999994,x:23.9,y:46.8,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.805,skewY:-18.6,x:6.1,y:15,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.022,skewY:0,x:-1,y:-2,scaleY:0.954}}]},1).wait(1));
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

	this.instance_1 = new lib.mariomolina();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23.9,46.8,0.846,0.82,0,0,-53.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.846,skewY:-53.599999999999994,x:23.9,y:46.8,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.805,skewY:-18.6,x:6.1,y:15,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.986,skewY:0,x:-1,y:-5,scaleY:0.92}}]},1).wait(1));
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

	this.instance_1 = new lib.fidelvelazques();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.5,36.2,0.743,0.756,0,0,-46.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.743,scaleY:0.756,skewY:-46.3,x:19.5,y:36.2,skewX:0}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.78,scaleY:0.81,skewY:-11.7,x:5.6,y:10.6,skewX:0}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.993,scaleY:0.95,skewY:0,x:0.6,y:-1.4,skewX:0.8}}]},1).wait(1));
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

	this.instance_1 = new lib.fidelvelazques();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.5,36.2,0.743,0.756,0,0,-46.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.743,scaleY:0.756,skewY:-46.3,x:19.5,y:36.2,skewX:0}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.78,scaleY:0.81,skewY:-11.7,x:5.6,y:10.6,skewX:0}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.993,scaleY:0.95,skewY:0,x:0.8,y:0.1,skewX:0.8}}]},1).wait(1));
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

	this.instance_1 = new lib.max();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23,65,0.944,0.82,0,0,-54.9);

	this.instance_2 = new lib.Animar11("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(65,78.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.944,skewY:-54.900000000000006,x:23,y:65}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.786,skewY:-25.6,x:10.6,y:22.5}}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
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

	this.instance_1 = new lib.max();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23,65,0.944,0.82,0,0,-54.9);

	this.instance_2 = new lib.Animar11("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(65,81.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.944,skewY:-54.900000000000006,x:23,y:65}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.786,skewY:-25.6,x:10.6,y:22.5}}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
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

	this.instance_1 = new lib.raton();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.7,65.1,0.932,0.82,0,0,-57.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.932,skewY:-57.7,x:28.7,y:65.1,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.72,skewY:-24.8,x:14.8,y:20.6,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.05,skewY:0,x:-1,y:-2,scaleY:0.965}}]},1).wait(1));
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

	this.instance_1 = new lib.raton();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.7,65.1,0.932,0.82,0,0,-57.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.932,skewY:-57.7,x:28.7,y:65.1,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.72,skewY:-24.8,x:14.8,y:20.6,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.05,skewY:0,x:-6,y:-2,scaleY:0.965}}]},1).wait(1));
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

	this.instance_1 = new lib.lombardotoledano();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33.2,49.8,0.811,0.82,0,0,-59.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{scaleX:0.811,skewY:-59.4,x:33.2,y:49.8,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.807,skewY:-21.8,x:7.4,y:19.3,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.991,skewY:0,x:-1,y:-4,scaleY:0.945}}]},1).wait(1));
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

	this.instance_1 = new lib.lombardotoledano();
	this.instance_1.parent = this;
	this.instance_1.setTransform(39.7,48.6,0.811,0.82,0,0,-59.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{scaleX:0.811,skewY:-59.4,x:39.7,y:48.6,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.807,skewY:-21.8,x:7.4,y:19.3,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.03,skewY:0,x:0,y:-1,scaleY:0.934}}]},1).wait(1));
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

	this.instance_1 = new lib.siqueiros();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.3,45.3,0.774,0.82,0,0,-53.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.774,skewY:-53.400000000000006,x:28.3,y:45.3,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.783,skewY:-29.5,x:11.5,y:27.3,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.996,skewY:0,x:-2,y:-2,scaleY:0.95}}]},1).wait(1));
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

	this.instance_1 = new lib.siqueiros();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.3,45.3,0.774,0.82,0,0,-53.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.774,skewY:-53.400000000000006,x:28.3,y:45.3,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.783,skewY:-29.5,x:11.5,y:27.3,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.996,skewY:0,x:-2,y:-2,scaleY:0.95}}]},1).wait(1));
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

	this.instance_1 = new lib.mariacordoba();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.4,45.8,0.8,0.813,0,0,-52.2);

	this.instance_2 = new lib.Animar9("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(63.9,80.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.8,scaleY:0.813,skewY:-52.20000000000001,x:26.4,y:45.8}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.872,scaleY:0.775,skewY:-26.6,x:4.2,y:31.3}}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
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

	this.instance_1 = new lib.mariacordoba();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.4,45.8,0.8,0.813,0,0,-52.2);

	this.instance_2 = new lib.Animar9("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(63.9,80.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.8,scaleY:0.813,skewY:-52.20000000000001,x:26.4,y:45.8}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.872,scaleY:0.775,skewY:-26.6,x:4.2,y:31.3}}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
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

	this.instance_1 = new lib.juanrulfo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(31.9,54.6,0.909,0.82,0,0,-57.8);

	this.instance_2 = new lib.Animar12("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(64,80.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.909,skewY:-57.8,x:31.9,y:54.6}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.842,skewY:-27.1,x:7.4,y:25}}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
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

	this.instance_1 = new lib.juanrulfo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(31.9,54.6,0.909,0.82,0,0,-57.8);

	this.instance_2 = new lib.Animar12("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(64,82.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.909,skewY:-57.8,x:31.9,y:54.6}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.842,skewY:-27.1,x:7.4,y:25}}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
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

	this.instance_1 = new lib.ocampo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.5,60.7,0.89,0.738,0,-7,-54.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{scaleX:0.89,scaleY:0.738,skewX:-7,skewY:-54.7,x:16.5,y:60.7}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.816,scaleY:0.82,skewX:0,skewY:-17.7,x:5.4,y:15.2}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:0.948,skewX:0,skewY:0,x:0,y:0}}]},1).wait(1));
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

	this.instance_1 = new lib.ocampo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.5,60.7,0.89,0.738,0,-7,-54.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{scaleX:0.89,scaleY:0.738,skewX:-7,skewY:-54.7,x:16.5,y:60.7}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.816,scaleY:0.82,skewX:0,skewY:-17.7,x:5.4,y:15.2}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:0.948,skewX:0,skewY:0,x:-2,y:-2}}]},1).wait(1));
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

	this.instance_1 = new lib.ruizccortines();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.5,48.2,0.81,0.82,0,0,-54.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.81,skewY:-54.2,x:28.5,y:48.2,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.686,skewY:-24.2,x:16.9,y:19.3,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1,skewY:0,x:0,y:0,scaleY:0.951}}]},1).wait(1));
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

	this.instance_1 = new lib.ruizccortines();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.5,48.2,0.81,0.82,0,0,-54.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.81,skewY:-54.2,x:28.5,y:48.2,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.686,skewY:-24.2,x:16.9,y:19.3,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1,skewY:0,x:1,y:0,scaleY:0.951}}]},1).wait(1));
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

	this.instance_1 = new lib.carrillopuerto();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.4,55.9,0.935,0.82,0,0,-57.6);

	this.instance_2 = new lib.Animar2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(57.8,75.5,0.982,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.935,skewY:-57.599999999999994,x:26.4,y:55.9}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.835,skewY:-18.6,x:4.2,y:15.8}}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
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

	this.instance_1 = new lib.carrillopuerto();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.4,55.9,0.935,0.82,0,0,-57.6);

	this.instance_2 = new lib.Animar2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(57.8,75.5,0.982,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.935,skewY:-57.599999999999994,x:26.4,y:55.9}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.835,skewY:-18.6,x:4.2,y:15.8}}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
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

	this.instance_1 = new lib.gamiz();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33,50.4,0.863,0.82,0,0,-54.8);

	this.instance_2 = new lib.calleja();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1,0.953);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.863,skewY:-54.8,x:33,y:50.4,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.836,skewY:-24.1,x:6.3,y:20.4,scaleY:0.82}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{scaleX:1.052,skewY:0,x:-2,y:0,scaleY:1}}]},1).wait(1));
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

	this.instance_1 = new lib.gamiz();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33,50.4,0.863,0.82,0,0,-54.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.863,skewY:-54.8,x:33,y:50.4,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.836,skewY:-24.1,x:6.3,y:20.4,scaleY:0.82}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.999,skewY:0,x:-4,y:-2,scaleY:0.95}}]},1).wait(1));
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
	this.shape.graphics.f("#663300").s().p("AgTBnIAAgnIAnAAIAAAngAgKAyIgKhoIAAgwIApAAIAAAwIgKBog");
	this.shape.setTransform(401.9,251);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AgvBMIAAiUIAkAAIAAAVQAKgPAGgFQAIgEAJAAQAOAAAMAHIgMAiQgKgGgIAAQgJAAgFAFQgFAEgDAMQgEAMAAAlIAAAug");
	this.shape_1.setTransform(392.7,253.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("Ag4BCQgNgNAAgUQAAgMAGgKQAGgKALgEQAKgGAVgDQAbgFALgFIAAgEQAAgLgGgFQgFgFgPAAQgLAAgFAEQgHAEgDAKIgkgFQAGgXAOgKQAQgKAdAAQAZAAANAGQANAGAFAKQAFAJABAaIgBAtQAAAUACAKQACAJAFALIgnAAIgEgMIgBgFQgLAKgLAFQgKAFgNAAQgYAAgNgMgAAAAJQgRADgFADQgIAGABAJQAAAIAFAGQAHAGAJAAQAKAAAJgHQAIgGACgHQACgFAAgOIAAgIIgXAGg");
	this.shape_2.setTransform(378.1,253.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663300").s().p("AgzBeQgQgOAAgTIAAgFIAtAFQACAIAEADQAFAFALAAQAQgBAIgFQAFgCACgIQACgEAAgNIAAgWQgRAYgaAAQgfAAgRgaQgOgTAAgdQAAgmASgUQASgTAbgBQAbAAASAYIAAgUIAlAAIAACFQAAAagFANQgEAOgIAGQgIAIgNAFQgNADgUAAQglABgQgNgAgWhAQgJAKAAAXQAAAYAJAKQAJALANAAQAOAAAKgLQAKgKAAgXQAAgXgKgLQgJgLgPAAQgNAAgJALg");
	this.shape_3.setTransform(360.9,256.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663300").s().p("AgsBGQgMgHgGgMQgFgMAAgVIAAhdIAoAAIAABEQAAAfACAHQACAHAGAEQAFAFAJgBQAJABAIgGQAIgGADgIQADgJAAgeIAAg/IAoAAIAACUIglAAIAAgWQgIALgNAIQgNAGgOABQgPAAgMgHg");
	this.shape_4.setTransform(343.6,254);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#663300").s().p("AgVCEIgOgDIAGgiIAGABIAEABQAGAAAEgDQAEgDABgDQACgEAAgSIAAiOIAmAAIAACQQAAAdgEALQgDAMgLAHQgLAGgPAAIgNgBgAgChgIAAgkIAmAAIAAAkg");
	this.shape_5.setTransform(329.1,254);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663300").s().p("AgvBMIAAiUIAkAAIAAAVQAKgPAGgFQAIgEAJAAQAOAAAMAHIgMAiQgKgGgIAAQgJAAgFAFQgFAEgDAMQgEAMAAAlIAAAug");
	this.shape_6.setTransform(314.3,253.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#663300").s().p("AgmBEQgTgJgJgSQgKgRAAgaQAAgTAKgTQAJgSATgJQARgKAVAAQAiAAAVAWQAWAWAAAhQAAAigWAWQgVAWgiAAQgTAAgTgKgAgZghQgLALAAAWQAAAWALAMQAKAMAPAAQAQAAAKgMQAKgMAAgWQAAgVgKgMQgKgMgQAAQgPAAgKAMg");
	this.shape_7.setTransform(298.9,253.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#663300").s().p("AhIBpIAAjOIAlAAIAAAWQAHgLANgHQAMgHAOAAQAaAAASAUQASAVAAAkQAAAlgSAUQgTAVgaAAQgLAAgKgFQgKgFgLgMIAABMgAgXg9QgKALAAAWQAAAZAKALQAKAMAOAAQANAAAKgLQAJgKAAgZQAAgYgKgLQgJgMgOAAQgNAAgKAMg");
	this.shape_8.setTransform(281.6,256.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#663300").s().p("AgtBCQgSgNgGgVIAogGQADAMAHAFQAIAHANgBQAPABAIgHQAFgDAAgHQAAgEgCgEQgDgCgLgCQgvgLgMgJQgSgLAAgVQAAgUAPgNQAQgNAgAAQAdAAAPAKQAPAKAGATIglAHQgDgJgGgEQgHgFgMAAQgPAAgHAEQgEAEAAAEQAAAFAEACQAFAEAfAIQAfAHANAKQAMAKAAATQAAAVgRAOQgRAPgiAAQgdAAgSgMg");
	this.shape_9.setTransform(256,253.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#663300").s().p("Ag4BCQgNgNAAgUQAAgMAGgKQAGgKALgEQAKgGAVgDQAbgFALgFIAAgEQAAgLgGgFQgFgFgPAAQgLAAgFAEQgHAEgDAKIgkgFQAGgXAPgKQAPgKAdAAQAZAAANAGQANAGAFAKQAFAJABAaIgBAtQAAAUACAKQACAJAFALIgnAAIgEgMIgBgFQgLAKgLAFQgKAFgNAAQgYAAgNgMgAAAAJQgRADgFADQgIAGABAJQAAAIAFAGQAHAGAJAAQAKAAAJgHQAIgGACgHQACgFAAgOIAAgIIgXAGg");
	this.shape_10.setTransform(240.4,253.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#663300").s().p("AgTBnIAAiUIAnAAIAACUgAgThCIAAgkIAnAAIAAAkg");
	this.shape_11.setTransform(228.3,251);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#663300").s().p("AgyA5QgTgUAAglQAAgkATgVQAUgUAgAAQAbAAARALQAQAMAGAYIgmAIQgDgMgGgGQgIgGgKAAQgPAAgIAKQgJALAAAXQAAAaAJAKQAJAMAOAAQALgBAHgFQAIgHACgQIAnAHQgFAbgSANQgRAOgdAAQgfAAgUgVg");
	this.shape_12.setTransform(216.6,253.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#663300").s().p("Ag4BCQgNgNAAgUQAAgMAGgKQAGgKALgEQAKgGAVgDQAbgFALgFIAAgEQAAgLgGgFQgFgFgPAAQgLAAgFAEQgHAEgDAKIgkgFQAGgXAOgKQAQgKAdAAQAZAAANAGQANAGAFAKQAFAJABAaIgBAtQAAAUACAKQACAJAFALIgnAAIgEgMIgBgFQgLAKgLAFQgKAFgNAAQgYAAgNgMgAAAAJQgRADgFADQgIAGABAJQAAAIAFAGQAHAGAJAAQAKAAAJgHQAIgGACgHQACgFAAgOIAAgIIgXAGg");
	this.shape_13.setTransform(200.3,253.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#663300").s().p("AgvBMIAAiUIAkAAIAAAVQAKgPAGgFQAIgEAJAAQAOAAAMAHIgMAiQgKgGgIAAQgJAAgFAFQgFAEgDAMQgEAMAAAlIAAAug");
	this.shape_14.setTransform(187.8,253.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#663300").s().p("AgvBdQgYgNgMgaQgMgZAAgdQAAggANgZQAOgZAagOQATgKAdABQAmAAAWAQQAVAPAHAdIgqAIQgEgQgMgIQgMgJgSAAQgaAAgQARQgRASAAAiQAAAjARATQAQASAZAAQAOAAANgFQANgGAJgGIAAgbIgvAAIAAgiIBZAAIAABRQgNANgZAKQgYAKgaAAQgfAAgYgOg");
	this.shape_15.setTransform(169.7,251);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgOAPQgFgGAAgJQAAgHAFgGQAHgGAHAAQAJAAAFAGQAHAGgBAHQABAJgHAGQgFAFgJAAQgHAAgHgFg");
	this.shape_16.setTransform(390.5,226.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAPgHQAOgIARAAQATAAANAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgbAAgRgQgAgLgcQgFADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgHgJQgGgIgKAAQgFAAgGAEg");
	this.shape_17.setTransform(379.7,223.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_18.setTransform(366.4,223.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_19.setTransform(355.9,220.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgBA3IAAgWIADAAIAGgBQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIgDgGIgOgSIgNARIgEAHQAAABAAAAQAAAAABABQAAAAAAAAQAAAAABAAQABABAEAAIAFAAIAAAWIg2AAIAAgWIAIgBIAFgCIAGgGIAYgbIgUgWIgHgGQgEgCgGABIAAgVIBBAAIAAAVQgEAAgCABQAAAAAAAAQgBAAAAAAQAAABAAAAQAAABAAAAIADAGIAIANIAKgNQADgFAAgCQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgIAAIAAgVIAzAAIAAAVQgHgBgDACQgDABgEAFIgVAYIAXAYQAGAHADABQAEACAHAAIAAAWg");
	this.shape_20.setTransform(345,223.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgnBDQgRgRAAgYQAAgQAHgMQAIgNAOgHQANgIAQAAQALAAAJADQAJAEAHAFQAHAHAEAIQAEAHABAJIABAOIhJAAQABAOAIAJQAIAJAKAAQAHAAAJgFQAJgFAIgIIAPAOQgNAQgNAGQgOAHgPgBQgYAAgRgQgAgGgHQgEADgCAEQgDADgBAGIAkAAQgBgHgCgDQgCgDgEgDQgEgCgFAAQgDAAgFACgAgcg1IAXgUQAKgKAIABQAHAAAEAEQAFAFAAAHQAAAFgEAFQgEAFgKACIgjAHg");
	this.shape_21.setTransform(331.8,220.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AAXBMIAAgVIAGAAQAGAAACgBQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBIABgHIAAhdIgmB9IgUAAIgkh5IAABcQAAADACACIADACIAHABIAHAAIAAAVIg/AAIAAgVIAHAAIAHgBQABAAAAAAQABgBAAAAQABgBAAAAQABgBAAAAIABgIIAAhVIgBgIQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAIgGgBIgJAAIAAgVIBFAAIAbBcIAahcIBHAAIAAAVIgIAAQgGAAgCACQgDADAAAHIAABWIABAHIADADQACABAEAAIAJAAIAAAVg");
	this.shape_22.setTransform(314.7,221.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_23.setTransform(290.1,223.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgnBLQgLgHgGgOQgHgNAAgRQAAgQAHgMQAHgOALgHQAKgHAOAAQAHAAAHACQAFACAIAEIAAgaIgPAAIAAgWQAMgBAJgBQAIgCAKgFIAKAAIAAB+QAAAIABACIADACQABABAHAAIAFAAIAAAVIgvABIAAgLQgLAHgGADQgIACgIAAQgMABgLgHgAgPgEQgEAEgEAFQgDAIAAALQABAPAGAKQAGAGAIABIAGgCIAMgGIAAglQAAgHgCgCQgBgEgEgDQgFgDgFAAQgFAAgGAEg");
	this.shape_24.setTransform(276.7,220.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AAZA2QgIgEgEgGQgLAHgIADQgJADgJAAQgPAAgKgJQgKgJABgNQAAgHADgGQAEgGAGgFQAGgDAOgEQAOgDATgCIAAgIIgBgKQgBgDgEgBQgCgCgEAAIgHABIgFADIgEAHQgDAHgEADQgEADgFAAQgHAAgFgFQgEgEgBgGQABgIAEgFQAGgIANgFQAMgFAPAAQAOAAALAFQAKAFAEAHQAFAHAAAOIAAAmQAAAHABACQAAABAAAAQAAABAAAAQABABAAAAQABAAAAABQADABAEAAIAIgBIAAAVQgKADgIAAQgLAAgGgDgAgLAMQgGACgCADQgDADAAADQAAAFADADQAEADAFAAQAEAAAFgCIAJgGIAAgTQgOACgFADg");
	this.shape_25.setTransform(255.3,223.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_26.setTransform(244.8,220.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AguA4IAAgVIAGAAQAGAAABgBIADgCIAAgHIAAgyIgQAAIAAgUQASgBATgJIAKAAIAAAQQAIgJAHgEQAGgDAGAAQAFAAAFADQAEACACAFQADAFAAAFQAAAGgFAGQgEAFgJABIgDAAIgIgDIgEgBQgDAAgHAEIAAAqQAAAFABABQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIAIABIAFAAIAAAVg");
	this.shape_27.setTransform(235.9,223.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAPgHQAOgIARAAQATAAANAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgbAAgRgQgAgKgcQgGADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgGgJQgHgIgKAAQgFAAgFAEg");
	this.shape_28.setTransform(223.4,223.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgFBIQgIgDgFgEQgGgFgCgGQgCgFAAgKIAAg0IgRAAIAAgUQAJgDAGgFQAHgGAEgHQADgIACgLIAUAAIAAAmIAjAAIAAAWIgjAAIAAAlQAAANABAEQACAEADACQAFADAGAAQAMAAALgHIAAAXQgKAFgHACQgIABgJAAQgKAAgHgCg");
	this.shape_29.setTransform(211.3,221.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_30.setTransform(200.3,223.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_31.setTransform(190.6,220.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AAEBQIAAgVIAEAAIAGgBIADgCIAAgIIAAgmQAAgHgBgCIgDgEQgCgBgEAAQgFAAgFACQgFACgIAFIAAArIAAAIIADACIAHABIACAAIAAAVIhAAAIAAgVIAHAAQAFAAABgBIADgCIAAgHIAAhiIgQAAIAAgVQAKgBALgCQALgDAJgDIALAAIAAA8QAKgGAIgDQAIgDAIAAQAKAAAIAFQAIAEAEAHQAEAHAAAKIAAAtIABAJQAAAAAAABQAAAAABABQAAAAABAAQAAABABAAIAIAAIAFAAIAAAVg");
	this.shape_32.setTransform(178.9,220.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AAZA2QgHgEgGgGQgLAHgHADQgJADgJAAQgPAAgKgJQgKgJAAgNQABgHADgGQADgGAHgFQAHgDAOgEQANgDATgCIAAgIIgBgKQgCgDgDgBQgCgCgFAAIgGABIgEADIgFAHQgCAHgFADQgEADgFAAQgIAAgEgFQgEgEAAgGQAAgIAEgFQAGgIAMgFQAMgFAPAAQAPAAAKAFQALAFAEAHQAEAHAAAOIAAAmQAAAHACACQAAABAAAAQAAABABAAQAAABAAAAQABAAABABQACABAEAAIAHgBIAAAVQgJADgJAAQgJAAgHgDgAgMAMQgFACgCADQgDADAAADQAAAFADADQADADAGAAQADAAAGgCIAJgGIAAgTQgNACgHADg");
	this.shape_33.setTransform(480.9,195.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AghBQIAAgVIAEAAQAHAAACgBIACgCIABgIIAAhhIgQAAIAAgVQAUgBATgIIALAAIAAB/IABAHQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQACABAHAAIAEAAIAAAVg");
	this.shape_34.setTransform(470.6,193.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_35.setTransform(452.5,195.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AgnBLQgKgHgHgOQgHgNAAgRQAAgQAHgMQAGgOALgHQAMgHAOAAQAGAAAGACQAGABAIAFIAAgaIgPAAIAAgWQAMgBAJgBQAJgCAJgFIALAAIAAB+QAAAIABACIABACQACABAHAAIAFAAIAAAVIgwABIAAgLQgKAHgHADQgHACgIAAQgNABgKgHgAgOgEQgGADgCAHQgDAHgBALQAAAPAHAKQAGAGAIAAIAGgBIAMgGIAAglQAAgHgBgDQgBgDgFgDQgFgDgEAAQgHAAgEAEg");
	this.shape_36.setTransform(439.1,193.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAOgHQAPgIARAAQASAAAOAHQAOAIAIAMQAHANAAAQQAAAZgQAQQgRAQgcAAQgbAAgRgQgAgKgcQgGADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgGgJQgHgIgKAAQgFAAgFAEg");
	this.shape_37.setTransform(417.1,195.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AgFBHQgIgCgFgEQgGgGgCgFQgCgFAAgKIAAg0IgRAAIAAgUQAJgDAGgFQAHgGAEgHQADgIACgLIAUAAIAAAlIAjAAIAAAXIgjAAIAAAlQAAAOABADQACAEADACQAFADAGAAQAMAAALgHIAAAXQgKAEgHADQgIABgJAAQgKAAgHgDg");
	this.shape_38.setTransform(405,194);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AAEA4IAAgVIAJAAQAAgBABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAgGIAAgoQAAgHgCgCQgDgEgFAAQgEAAgFACQgGACgIAGIAAArQAAAGABADQABABAHAAIADAAIAAAVIhAAAIAAgVIADAAQAIAAACgBIADgCIABgGIAAgyIgRAAIAAgVQAUgDARgHIAKAAIAAAPQAMgJAJgDQAIgDAKAAQAKAAAJAEQAHAFAEAHQAEAGAAANIAAAtIAAAHIAEADIAHAAIAFAAIAAAVg");
	this.shape_39.setTransform(392.5,195.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_40.setTransform(378.2,195.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_41.setTransform(367.8,193.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AAoA4IAAgVQAHAAABgBIADgCQABgBAAgGIAAgnQAAgHgBgCIgDgEQgDgBgEAAQgEAAgFACQgFACgKAGIAAApQAAAHABABQAAABABAAQAAABABAAQAAAAAAABQABAAAAAAQACABAHAAIAAAVIg7AAIAAgVQAHAAACgBIADgDIAAgIIAAgkQAAgIgBgDQgDgFgGABIgGABQgEAAgDACIgJAGIgCABIAAApIAAAIIADADIAGABIADAAIAAAVIg/AAIAAgVIAEAAQAHAAABgBQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBQABgBAAgHIAAgvIgQAAIAAgVQAUgCARgIIAKAAIAAAPQAJgIAKgDQAKgEAKAAQAHAAAGACQAFACAEADQAEADADAFQAKgHAKgEQAKgEAKAAQAJAAAHADQAHADAEAGQAFAGABAFIABAMIAAAtQAAAFABABQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQABABAHAAIAEAAIAAAVg");
	this.shape_42.setTransform(352.6,195.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_43.setTransform(337.3,193.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_44.setTransform(326.8,195.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAIgMAOgHQAOgIARAAQATAAANAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgcAAgQgQgAgLgcQgFADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgHgJQgGgIgKAAQgFAAgGAEg");
	this.shape_45.setTransform(313.2,195.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AAFA4IAAgVIAHAAQABgBABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAgGIAAgoQAAgHgBgCQgDgEgGAAQgEAAgFACQgFACgKAGIAAArQABAGABADQACABAFAAIAEAAIAAAVIhAAAIAAgVIAEAAQAHAAACgBIADgCIAAgGIAAgyIgQAAIAAgVQAUgDARgHIALAAIAAAPQAMgJAIgDQAIgDAKAAQAKAAAIAEQAJAFADAHQAEAGAAANIAAAtIABAHIACADIAIAAIAGAAIAAAVg");
	this.shape_46.setTransform(298.9,195.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAIgMANgHQAOgIASAAQATAAANAHQAOAIAIAMQAHANAAAQQAAAZgQAQQgRAQgcAAQgcAAgQgQgAgLgcQgFADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgHgJQgGgIgKAAQgFAAgGAEg");
	this.shape_47.setTransform(284.1,195.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_48.setTransform(270.8,195.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AAEA4IAAgVIAIAAQABgBABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAgGIAAgoQAAgHgBgCQgDgEgGAAQgFAAgEACQgFACgJAGIAAArQgBAGACADQABABAHAAIADAAIAAAVIhAAAIAAgVIAEAAQAHAAACgBIADgCIAAgGIAAgyIgQAAIAAgVQAUgDARgHIAKAAIAAAPQAMgJAJgDQAIgDAKAAQAKAAAJAEQAHAFAEAHQAEAGAAANIAAAtIABAHIACADIAIAAIAFAAIAAAVg");
	this.shape_49.setTransform(249.2,195.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_50.setTransform(234.8,195.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AgfA2QgHgDgFgEQgEgEgCgGQgCgGAAgJIAAgsIgBgIIgCgCIgIgBIgGAAIAAgVIA0gBIAABGIAAAKQABACADACQACABAEAAQAFAAAGgCIAMgIIAAgqIAAgHIgDgDIgGgBIgHAAIAAgVIA0gBIAABNIAAAIQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAQABABAGAAIAGAAIAAAVIgwABIAAgNQgKAHgJAEQgJADgKAAQgIAAgGgCg");
	this.shape_51.setTransform(220.9,195.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AgBBPQgHgDgIgGIgGAJIgYAAIAAiBIgQAAIAAgWQAVgBATgIIALAAIAAA8QAJgHAGgBQAHgDAHAAQASAAANAOQAOAPAAAaQAAAagOARQgPAPgTAAQgJAAgHgCgAgBgEIgKAFIAAAhQAAAKABAFQACADAEACQAEADAFAAQAIAAAGgHQAGgJAAgRQAAgQgFgIQgFgGgIABIgIABg");
	this.shape_52.setTransform(206.4,193.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AAEA4IAAgVIAJAAQAAgBABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAgGIAAgoQAAgHgCgCQgDgEgFAAQgEAAgFACQgGACgIAGIAAArQAAAGABADQABABAHAAIADAAIAAAVIhAAAIAAgVIADAAQAIAAACgBIADgCIABgGIAAgyIgRAAIAAgVQAUgDARgHIAKAAIAAAPQAMgJAJgDQAIgDAKAAQAKAAAJAEQAHAFAEAHQAEAGAAANIAAAtIAAAHIAEADIAHAAIAFAAIAAAVg");
	this.shape_53.setTransform(185.1,195.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("AgfA2QgHgDgFgEQgEgEgCgGQgCgGAAgJIAAgsIgBgIIgCgCIgIgBIgGAAIAAgVIA0gBIAABGIAAAKQABACADACQACABAEAAQAFAAAGgCIAMgIIAAgqIAAgHIgDgDIgGgBIgHAAIAAgVIA0gBIAABNIAAAIQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAQABABAGAAIAGAAIAAAVIgwABIAAgNQgKAHgJAEQgJADgKAAQgIAAgGgCg");
	this.shape_54.setTransform(169.9,195.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_55.setTransform(149,195.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_56.setTransform(136.7,195.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("AAEA4IAAgVIAIAAQABgBABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAgGIAAgoQAAgHgBgCQgEgEgFAAQgEAAgFACQgFACgKAGIAAArQABAGABADQACABAFAAIAEAAIAAAVIhAAAIAAgVIAEAAQAHAAACgBIADgCIAAgGIAAgyIgQAAIAAgVQAUgDARgHIALAAIAAAPQALgJAJgDQAJgDAJAAQAKAAAIAEQAJAFADAHQAEAGAAANIAAAtIABAHIACADIAIAAIAGAAIAAAVg");
	this.shape_57.setTransform(122.8,195.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_58.setTransform(108.5,195.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_59.setTransform(98.1,193.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("AglBPIAAgVIAFAAQAIAAABgBIAEgEQABgCAAgHIAAhZQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAAAAAgBIgEgBQgFAAgHAEQgIAFgFAHIgJASIgUgHIASg2IAPAAIACAFIBUAAIADgFIAOAAIATA2IgVAHIgJgSQgGgIgIgEQgFgEgGAAIgDABIgBAGIAABXIAAAKIACADIADABIANABIAAAVg");
	this.shape_60.setTransform(86.1,193.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#663300").s().p("AgRBsQgGgIAAgMQAAgMAGgIQAGgJAKAAQAKgBAHAJQAGAIAAAMQAAALgHAJQgGAJgKAAQgKAAgGgIgAgEArQAAAAgBgBQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAgGQAAgHgKg/IgHg3QAAgKAHgHQAHgIAMAAQAMAAAGAIQAHAIAAAKQAAAIgLBCIgHAyIAAAHIgEABg");
	this.shape_61.setTransform(385.7,161.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#663300").s().p("AgmBKQgTgZAAgwQABgwAQgZQARgZAbAAQAZAAAOAWQAPAUAAAoIAAANIg/AAIAAA4QAAAMAEAGQAEAHAHAAQALAAAGgJQAGgJABgQQAAgIABgCQACgCAJABQAIgBACACQACACAAAGQgBAVgOARQgOARgXAAQgZAAgTgYgAgFhCIAAAvIASAAIAAgvQAAgNgJAAQgJAAAAANg");
	this.shape_62.setTransform(362.7,163);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#663300").s().p("AgPBzQgKgJAAgSIAAiRIgFAAIgDgBIgBgDIAAgKIABgEIADgBQALgBAKgKQAJgKACgLIACgFQAAAAAAAAQABAAAAgBQABAAABAAQAAAAABAAIAJAAQAEAAAAAFIAAAhIAJAAQAFAAAAAEIAAAKQAAAFgFAAIgJAAIAACRQAAAHAHADQADACABACIABAIIgBAEIgDABg");
	this.shape_63.setTransform(339.6,161.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#663300").s().p("AAUBhQgJgHAAgLIAAiFQABgLgKAAQgFgBgGAHIAACCQAAAFAEADQAEACAAAEIAAAHQgBAFgGAAIgzAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAgFIAAgFQAAgEADgBQADgCABgDQABgCAAgHIAAiJQAAgEgFgDQgDgBABgDIAAgHQAAgFADAAIAuAAIAEABIABAEIAAAOQAPgVAWAAQAPAAAIAJQAHAKAAAPIAACFQAAAFAEACQADACAAAIQAAAGgBACQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAg");
	this.shape_64.setTransform(315.9,162.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#663300").s().p("AgmBKQgTgZAAgwQAAgwARgZQARgZAbAAQAZAAAOAWQAOAUAAAoIAAANIg+AAIAAA4QAAAMAFAGQADAHAHAAQALAAAGgJQAHgJAAgQQAAgIACgCQABgCAJABQAHgBADACQABACAAAGQABAVgOARQgPARgXAAQgaAAgSgYgAgFhCIAAAvIASAAIAAgvQAAgNgJAAQgJAAAAANg");
	this.shape_65.setTransform(289.6,163);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#663300").s().p("AgaBxQgEABAAgFIAAgIQAAgFAEgCIAEgCIABgGIAAisQAAgFgFgCQgEgDAAgFIAAgHQAAgEAFgBIArAAIAFABQABABAAAEIAADDQAAAHAEABQADABAAAEIAAAIQAAAFgGgBg");
	this.shape_66.setTransform(266.6,161.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#663300").s().p("AgmBKQgSgZAAgwQgBgwASgZQARgZAbAAQAXAAAPAWQAPAUAAAoIAAANIg/AAIAAA4QAAAMAEAGQAEAHAHAAQALAAAGgJQAGgJABgQQAAgIABgCQACgCAIABQAJgBABACQACACABAGQAAAVgPARQgOARgXAAQgZAAgTgYgAgFhCIAAAvIASAAIAAgvQAAgNgJAAQgJAAAAANg");
	this.shape_67.setTransform(243.6,163);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#663300").s().p("AgiBJQgPgZAAgtQAAghAIgXQAIgWAMgLQALgLAQAAQAVAAAMAOQALANAAASQAAAJgEAHQgEAGgIAAQgIAAgEgGQgFgGAAgKIABgJIABgJQAAgEgDgDQgDgCgDAAQgDAAgCADQgDADAAADIAACHQAAAGADADQADAFAFAAQAHgBAEgIQAEgJgBgOIAAgDQAAgIAEgBQACgCAHAAQAFAAADACQACACAAAHQgBAWgKAQQgMAQgVAAQgXAAgRgZg");
	this.shape_68.setTransform(219,163);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#663300").s().p("AAABgQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgCgCAAgEIABgIIADgDQABgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBIgBgDIgJgeIgKATQgFALgBADQAAAEAEABQADABAAADIAAAFIgBAHQAAAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgbAAIgEAAIgBgFIAAgIQAAgDAEgBQAEgDACgEIAbg4IgdhWQgCgEgDgDIgDgDQgBgBAAgJQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIAyAAIAFAAQABACAAADIAAAGQgBAEgCABQgDADAAADIAAACIAJAdIAJgSIACgCQAFgKAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBgBAAIgDgCIAAgJQAAAAAAgBQAAgBAAgBQAAAAABgBQAAAAAAAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIAbAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIAAAGIAAAHQAAAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQgDACgCAEIgcA4IAeBYQABADAEADQADACAAAEIAAAHIgBAFIgEAAg");
	this.shape_69.setTransform(194.2,163);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#663300").s().p("AgyBxQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgCAAgIQAAgEAEgDQAIgDAAgGIAAiuQAAgCgGgDQgFgCAAgBQgBgCAAgHQAAgFABgCQABgBAEAAIBYAAIAFABIADAGIAHAlIAAADQAAAEgGAAQgIAAgDgCQgCgBgCgIQgEgNgEgEQgDgFgEAAIgKAAIAABQIAKAAQAEAAACgBQACgCABgGIACgMQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQALAAABABQACABAAAGIAAAuQAAAEgCACQgBABgIAAQgEAAgCgCQgBgCgCgHQgCgIgBgBQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBAAgBAAIgLAAIAABgIAIAAQAHAAADgDQACgEAGgSQADgJACgCQADgCAFAAQAJAAAAAGIAAAEIgFAhIgDAKQgBACgEgBg");
	this.shape_70.setTransform(169.3,161.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.nextlevel},{t:this.instance}]}).wait(1));

	// Capa 4
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(51,0,0,0.349)").s().p("AjeCAQANiNAmgsQAlgsC5hTQBdgqBWghQiFETiwCWQg3Avg1AcIgqATQAAg+AHhGg");
	this.shape_71.setTransform(507.5,332.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_71).wait(1));

	// Capa 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A9dczQgnAAAAghMAAAgkIQAAgiAnAAMBFIAAAQAmAAAAAiIAAfXQgsBJg9BLQhmB+hpBAg");
	mask.setTransform(257.7,184.3);

	// Capa 2
	this.instance_1 = new lib.fondo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(59,133,2.012,1.055);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.triunfo, new cjs.Rectangle(-7.6,133,580.7,235.7), null);


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

	// Capa 3
	this.button_12iturbide = new lib.ans_vhuerta_btn();
	this.button_12iturbide.parent = this;
	this.button_12iturbide.setTransform(605.7,183.7,0.9,1.3,0,0,0,133.1,22.9);

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
	this.button_8morelos.setTransform(624,248.3,1.089,1.3,0,0,0,133.1,22.9);

	this.button_7obregon = new lib.ans_vhuerta_btn();
	this.button_7obregon.parent = this;
	this.button_7obregon.setTransform(610.2,312.7,1,1.3,0,0,0,133.1,22.9);

	this.button_6zapata = new lib.ans_vhuerta_btn();
	this.button_6zapata.parent = this;
	this.button_6zapata.setTransform(608.2,123.5,1,1.3,0,0,0,133.1,22.9);

	this.button_5diaz = new lib.ans_vhuerta_btn();
	this.button_5diaz.parent = this;
	this.button_5diaz.setTransform(-19.9,56.2,1.129,1.3,0,0,0,133,22.9);

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
	this.button_2.setTransform(608.2,52.9,1,1.3,0,0,0,133.1,22.8);

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
	this.shape.setTransform(-440.1,119.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000033").s().p("AhLBLQgggfABgsQgBgsAggfQAfgeAuAAQArAAAfAfQAgAfAAArQAAAsggAfQgfAfgtAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAIgJABgNQgBgMgIgJQgJgJgMAAQgLAAgJAJg");
	this.shape_1.setTransform(769.3,383.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000033").s().p("AhqCOIAAiqQAAguAZgeQAOgRAWgKQAVgKAXAAQAtAAAfAfQAgAeAAAuQAAAqgfAfQggAggqAAIgUgCIAAhTQAKAIAIAAQAMgBAJgIQAIgJAAgMQAAgMgJgJQgIgIgMgBQgdABAAApIAACmg");
	this.shape_2.setTransform(745.7,386.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000033").s().p("AA/BoIAAhtQABgNgDgFQgDgFgHAAQgNAAAAAXIAABtIhLAAIAAhtQgBgNgCgFQgDgFgHAAQgNAAAAAXIAABtIhMAAIAAh9QAAgiAXgYQAXgYAhAAQAiAAAaAdQAfgdAeAAQAlAAAYAcQASAVAAAqIAAB0g");
	this.shape_3.setTransform(717,382.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAheQAAgQgIgKQgIgJgNAAQgLAAgJAIQgJAJAAALQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJABgIAAQgtAAgfgeg");
	this.shape_4.setTransform(687.8,383.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000033").s().p("AhKBLQgfgfAAgtQAAgrAfgfQAggfAqAAQAnAAAdAZQAdAYAIAmIhPACQgKgNgPAAQgMAAgIAJQgIAIgBANQAAAMAJAKQAKAIALABQAUgBAIgWIBMgDQgDAtgeAcQgeAcgqAAQgsAAgfgfg");
	this.shape_5.setTransform(664.4,383.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000033").s().p("AhnBoQgrgrAAg9QAAg9ArgqQAsgrA9AAQA8AAAqArQArAsAAA7QAAA9grArQgrArg9AAQg8AAgrgrgAgrgtQgSATAAAaQAAAaASATQATATAYAAQAaAAASgTQASgSAAgbQAAgagSgTQgSgTgaAAQgZAAgSATg");
	this.shape_6.setTransform(636.8,379.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAnAAQAJAAAPACIAABSQgIgFgHAAQgUAAAAAfIAABhg");
	this.shape_7.setTransform(604.9,382.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000033").s().p("AhLBLQgggfAAgsQAAgsAggfQAggeAtAAQArAAAgAfQAeAfAAArQABAsggAfQggAfgsAAQgrAAgggfgAgUgVQgJAJAAAMQAAANAJAJQAIAJAMAAQAMAAAJgJQAJgJAAgNQAAgMgJgJQgJgJgMAAQgMAAgIAJg");
	this.shape_8.setTransform(585.4,383.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000033").s().p("AANCMIAAhsQAAgNgDgFQgCgEgIAAQgMAAAAATIAABvIhNAAIAAkXIBNAAIAABWQASgPAUAAQAdAAASAWQARAVAAAjIAACCg");
	this.shape_9.setTransform(562.4,379.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000033").s().p("AhKBLQgfgfAAgtQAAgrAfgfQAfgfArAAQAmAAAeAZQAdAYAHAmIhOACQgJgNgPAAQgNAAgIAJQgJAIAAANQABAMAIAKQAKAIAMABQATgBAIgWIBMgDQgDAtgdAcQgfAcgqAAQgsAAgfgfg");
	this.shape_10.setTransform(539.5,383.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000033").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_11.setTransform(521.7,379.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000033").s().p("AhKBMQgggfAAgsQAAgsAgggQAfgeAsAAQAtgBAfAfQAeAegBAsIAAAOIhzAAQgDgJAAgHQAAgKADgKIAmAAQgDgXgWAAQgNAAgJANQgKAMAAATQABATAIANQAJAMANgBQAMAAAKgLIAsA1QgfAYglgBQgtAAgegeg");
	this.shape_12.setTransform(504.2,383.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000033").s().p("ABBCPIAAi1QAAgNgCgFQgCgEgHAAQgNAAAAAVIAAC2IhSAAIAAi1QAAgNgCgFQgCgEgGAAQgNAAAAAWIAAC1IhTAAIAAjIQAAgmAXgYQAWgXAkAAQAsAAAWAnQAOgVAQgJQAQgJAYAAQAmAAAUAXQAUAYAAAtIAADBg");
	this.shape_13.setTransform(475.4,379);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000033").s().p("AhJBnIAAhRIAEAAQASAAAIgHQAIgIABgSQACggAEgNQAEgMANgMQAWgXAnAAIAYAAIAABRQgRAAgFAHQgHAGgBAQQgGA7gnAZQgWAMgnAAg");
	this.shape_14.setTransform(856.9,318.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000033").s().p("AhLBLQgfgfgBgsQABgsAfgfQAfgeAtAAQAsAAAgAfQAfAfAAArQgBAsgfAfQgfAfgtAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAJgJgBgNQABgMgJgJQgJgJgMAAQgLAAgJAJg");
	this.shape_15.setTransform(837.5,318.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAoAAQAJAAAOACIAABSQgIgFgGAAQgWAAABAfIAABhg");
	this.shape_16.setTransform(820.2,318.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_17.setTransform(806.2,313.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000033").s().p("AhKBMQgfgfgBgsQAAgsAgggQAfgeAsAAQAtgBAfAfQAdAeAAAsIAAAOIh0AAQgCgJAAgHQAAgKADgKIAnAAQgFgXgVAAQgNAAgKANQgJAMAAATQAAATAJANQAJAMANgBQAMAAAKgLIAsA1QgfAYglgBQgsAAgfgeg");
	this.shape_18.setTransform(788.7,318.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000033").s().p("AhFBIQgVgYAAgsIAAhrIBMAAIAAByQABASANAAQAOAAAAgSIAAhyIBNAAIAABxQAAAogaAbQgbAbgmAAQgrAAgaggg");
	this.shape_19.setTransform(765.6,318.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000033").s().p("AAeCOIAAimQAAgpgdgBQgLABgKAIQgIAJgBAMQABAMAIAJQAJAIALABQAJAAAKgIIAABTIgUACQgqAAggggQgfgfAAgqQAAguAfgeQAggfAtAAQAWAAAXAKQAVAKAOARQAZAeAAAuIAACqg");
	this.shape_20.setTransform(741.7,321.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_21.setTransform(723.7,313.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000033").s().p("AhICJIAAhQQAMAHAJAAQALAAAIgGQAHgGAAgKQAAgGgMgVQgTgfAAghQAAgoAdgcQAbgdAnAAQARAAARAGIAABQQgJgEgFAAQgKAAgGAHQgHAHAAAKQAAAJAHANIAHALQARAdAAAbQAAApgdAcQgdAdgpAAQgUAAgUgKg");
	this.shape_22.setTransform(708.9,314.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000033").s().p("AhLBLQgggfAAgsQAAgsAggfQAggeAtAAQArAAAgAfQAeAfAAArQABAsggAfQggAfgsAAQgrAAgggfgAgUgVQgJAJAAAMQAAANAJAJQAIAJAMAAQAMAAAJgJQAJgJAAgNQAAgMgJgJQgJgJgMAAQgMAAgIAJg");
	this.shape_23.setTransform(678.1,318.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAnAAQAKAAAOACIAABSQgIgFgHAAQgUAAAAAfIAABhg");
	this.shape_24.setTransform(660.7,318.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAhfQAAgPgIgKQgIgJgNAAQgLAAgJAJQgJAIAAALQAAANAIAJQAIAHAMABQAJgBAJgEIAABPQgJABgIAAQgtAAgfgeg");
	this.shape_25.setTransform(640,318.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000033").s().p("Ag2COIAAitQAAgdAKgVQAMgaAagRQAZgRAcAAIAIABIAABQIgDAAQgPAAgIAJQgIAKAAASIAAAHIAiAAIAABPIgiAAIAABPg");
	this.shape_26.setTransform(621.5,314.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000033").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_27.setTransform(607.7,314.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000033").s().p("AATCPIAAiuQAAgQgEgHQgEgGgKAAQgTAAAAAdIAAAiIAXAAIAABKIgXAAIAABCIhTAAIAAixQAAgzAcgdQAcgcAyAAQAyAAAXAaQAYAZAAA3IAACzg");
	this.shape_28.setTransform(589.3,314.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000033").s().p("AhLBvQgfgfAAgsQAAgrAfgfQAfggArAAIATACIAABTQgJgHgJAAQgMAAgIAIQgJAJAAAMQAAAMAJAJQAKAIAKAAQAeAAAAgpIAAimIBNAAIAACpQAAAvgZAeQgOARgVAKQgXAKgWAAQgtAAgggfg");
	this.shape_29.setTransform(553.9,314.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_30.setTransform(535.9,313.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000033").s().p("AhehpIBJAAIAVA3IAXg3IBIAAIhfDTg");
	this.shape_31.setTransform(521.8,318.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAhfQAAgPgIgKQgIgJgNAAQgLAAgJAJQgJAIAAALQAAANAIAJQAIAHAMABQAJgBAJgEIAABPQgJABgIAAQgtAAgfgeg");
	this.shape_32.setTransform(500.7,318.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000033").s().p("AgkCMIAAhTIANAAQBIABAAg8QAAg6hGAAIgcAAIAADHIhUAAIAAkXIBsAAQBHABAoAfQAwAnAABDQAAA+gpAoQgpApg/AAIgZgBg");
	this.shape_33.setTransform(474.6,314.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAheQAAgQgIgKQgIgJgNAAQgLAAgJAJQgJAIAAALQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJACgIgBQgtAAgfgeg");
	this.shape_34.setTransform(871.2,253.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000033").s().p("Ag9CPIAAhCQAQAGALAAQAlAAAKgqQgSAMgUAAQgcAAgTgVQgSgVAAggIAAiBIBMAAIAABuQABASAOABQAOgBAAgUIAAhsIBMAAIAAC2QAAAygcAgQgiAlgwAAQgVAAgVgIg");
	this.shape_35.setTransform(848.1,258.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000033").s().p("AhLBLQgggfABgsQgBgsAggfQAfgeAuAAQArAAAgAfQAeAfAAArQABAsggAfQggAfgsAAQgrAAgggfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAJgJAAgNQAAgMgJgJQgJgJgMAAQgLAAgJAJg");
	this.shape_36.setTransform(825.3,253.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000033").s().p("AAvCNQgaAAgWgMQgXgMgOgVQgRgaAAgsIAAimIBLAAIAABOIAjAAIAABQIgjAAQAAAYAIAJQAIAKAUAAIAABQIgJAAg");
	this.shape_37.setTransform(806.5,249.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000033").s().p("AAOBoIAAhyQAAgSgOAAQgOAAAAASIAAByIhMAAIAAhxQAAgoAbgbQAZgbAmAAQAsAAAbAfQAUAZAAAsIAABrg");
	this.shape_38.setTransform(788.2,253.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000033").s().p("AhLBLQgggfABgsQgBgsAggfQAfgeAuAAQArAAAfAfQAfAfABArQAAAsggAfQggAfgsAAQgrAAgggfgAgUgVQgJAJAAAMQAAANAJAJQAIAJAMAAQAMAAAJgJQAJgJAAgNQAAgMgJgJQgJgJgMAAQgMAAgIAJg");
	this.shape_39.setTransform(765.1,253.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000033").s().p("ABBCPIAAi1QAAgNgCgFQgDgEgGAAQgNAAAAAVIAAC2IhSAAIAAi1QAAgNgCgFQgCgEgGAAQgNAAAAAWIAAC1IhTAAIAAjIQAAgmAXgYQAWgXAkAAQArAAAXAnQAOgVAQgJQARgJAXAAQAmAAAUAXQAUAYAAAtIAADBg");
	this.shape_40.setTransform(736.3,249.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAheQAAgQgIgKQgIgJgNAAQgLAAgJAJQgJAIAAALQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJACgIgBQgtAAgfgeg");
	this.shape_41.setTransform(695.9,253.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000033").s().p("AgtCEQgWgKgOgRQgZgeAAgvIAAipIBNAAIAACmQAAApAdAAQAMAAAIgIQAJgJAAgMQAAgMgIgJQgIgIgMAAQgIAAgLAHIAAhTIAUgCQArAAAfAgQAfAfAAArQAAAsggAfQgfAfgtAAQgXAAgVgKg");
	this.shape_42.setTransform(672.2,249.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000033").s().p("AhLBLQgfgfgBgsQABgsAfgfQAfgeAtAAQAsAAAgAfQAeAfAAArQAAAsgfAfQgfAfgtAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAJgJgBgNQABgMgJgJQgJgJgMAAQgLAAgJAJg");
	this.shape_43.setTransform(648.1,253.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000033").s().p("AhLBvQgfgfAAgsQAAgrAfgfQAgggAqAAIAUACIAABTQgKgHgJAAQgLAAgJAIQgIAJgBAMQABAMAIAJQAKAIALAAQAdAAAAgpIAAimIBNAAIAACpQAAAvgZAeQgOARgVAKQgXAKgWAAQgtAAgggfg");
	this.shape_44.setTransform(623.8,249.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAoAAQAJAAAOACIAABSQgIgFgGAAQgWAAABAfIAABhg");
	this.shape_45.setTransform(606.4,253.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000033").s().p("AhLBrQgfgfgBgsQABgsAfgfQAfgeAtAAQAsAAAgAfQAeAfAAArQAAAsgfAfQgfAfgtAAQgsAAgfgfgAgUAKQgJAJAAANQAAANAJAJQAJAJALAAQAMAAAJgJQAIgJAAgNQAAgNgIgJQgJgJgMAAQgLAAgJAJgAgghaIArgvIAxAAIgxAvg");
	this.shape_46.setTransform(586.9,250.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000033").s().p("AhnBpQgrgqAAg+QAAg+ArgqQArgrA+AAQA+AAApAqQAdAdAMAzIhZAGQgPgugqAAQgaAAgRATQgRASAAAcQAAAbARASQARASAaAAQAZAAAQgQQAQgPACgeIBYACQgJBEgmAlQgnAlg9AAQg9AAgqgqg");
	this.shape_47.setTransform(559.3,249.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000033").s().p("AhLBsQgegfAAgtQgBgsAggfQAfgfAtAAQAsAAAfAfQAdAeAAArIgBAPIhzAAQgCgJAAgIQAAgKADgKIAnAAQgFgWgVAAQgOAAgJANQgIALgBATQAAAUAJAMQAJAMANAAQALAAALgLIArA0QgeAYglAAQgtAAgfgegAgVhaIAqgvIAxAAIgxAvg");
	this.shape_48.setTransform(521.6,250.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000033").s().p("AhJBnIAAhRIAEAAQASAAAIgHQAIgIABgSQACggAEgNQAEgMANgMQAWgXAnAAIAYAAIAABRQgRAAgFAHQgHAGgBAQQgGA7gnAZQgWAMgnAAg");
	this.shape_49.setTransform(502.2,253.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000033").s().p("AhLBLQgfgfgBgsQABgsAfgfQAfgeAtAAQAsAAAfAfQAgAfAAArQgBAsgfAfQgfAfgtAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAIgJAAgNQAAgMgIgJQgJgJgMAAQgLAAgJAJg");
	this.shape_50.setTransform(482.8,253.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000033").s().p("Ag3CLIAAhRQAHADAFAAQAQAAABgbIAAiwIBSAAIAAC7QAAArgZAcQgYAbgkAAQgLAAgPgEg");
	this.shape_51.setTransform(463.6,250.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000033").s().p("AhJBnIAAhRIAEAAQASAAAIgHQAIgIABgSQACggAEgNQAEgMANgMQAWgXAnAAIAYAAIAABRQgRAAgFAHQgHAGgBAQQgGA7gnAZQgWAMgnAAg");
	this.shape_52.setTransform(831,189.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000033").s().p("AhKBMQgggfAAgsQAAgsAgggQAfgeAsAAQAtgBAfAfQAeAeAAAsIgBAOIhzAAQgDgJAAgHQAAgKADgJIAmAAQgDgYgWAAQgNAAgJANQgKAMABATQAAATAIANQAJAMANgBQAMAAAKgLIAsA1QgfAYglgBQgtAAgegeg");
	this.shape_53.setTransform(811.9,188.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000033").s().p("AAPBoIAAhyQgBgSgOAAQgNAAAAASIAAByIhNAAIAAhxQAAgoAagbQAagbAmAAQAsAAAaAfQAVAZAAAsIAABrg");
	this.shape_54.setTransform(788.8,188.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_55.setTransform(771.2,184.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000033").s().p("AAvCNQgaAAgWgMQgXgMgOgVQgRgaAAgsIAAimIBLAAIAABOIAjAAIAABQIgjAAQAAAYAIAJQAIAKAUAAIAABQIgJAAg");
	this.shape_56.setTransform(758.1,185.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAnAAQAJAAAPACIAABSQgIgFgHAAQgUAAgBAfIAABhg");
	this.shape_57.setTransform(745.5,188.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000033").s().p("AhLBLQgggfABgsQgBgsAggfQAfgeAuAAQArAAAfAfQAfAfABArQAAAsggAfQggAfgsAAQgrAAgggfgAgUgVQgJAJAAAMQAAANAJAJQAIAJAMAAQAMAAAJgJQAJgJAAgNQAAgMgJgJQgJgJgMAAQgMAAgIAJg");
	this.shape_58.setTransform(726,188.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000033").s().p("AhnBpQgrgqAAg+QAAg+ArgqQArgrA+AAQA+AAApAqQAdAdAMAzIhZAGQgPgugqAAQgaAAgRATQgRASAAAcQAAAbARASQARASAaAAQAZAAAQgQQAQgPACgeIBYACQgJBEgmAlQgnAlg9AAQg9AAgqgqg");
	this.shape_59.setTransform(698.4,184.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000033").s().p("AhgBmIA+h7IhBAAIAAhQIC9AAIg/B7IBIAAIAABQg");
	this.shape_60.setTransform(661.7,188.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_61.setTransform(645.2,184.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000033").s().p("AhGBIQgUgYAAgsIAAhrIBMAAIAAByQAAASAOAAQAPAAAAgSIAAhyIBMAAIAABxQAAAogbAbQgaAbgmAAQgrAAgbggg");
	this.shape_62.setTransform(627.8,189.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000033").s().p("AAYCMIgnhaIAAhHIAHAAQAZAAAAgXQAAgUgeAAIgOAAIAADMIhUAAIAAkXIBrAAQAwAAAbAYQAeAbAAAqQAAAqglAcIAvB0g");
	this.shape_63.setTransform(605.4,184.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000033").s().p("AhLBLQgfgfAAgsQAAgsAfgfQAfgeAtAAQAsAAAfAfQAgAfAAArQgBAsgfAfQgfAfgtAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAIgJAAgNQAAgMgIgJQgJgJgMAAQgLAAgJAJg");
	this.shape_64.setTransform(569.2,188.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000033").s().p("Ag2COIAAitQAAgdAKgVQAMgaAagRQAZgRAcAAIAIABIAABQIgDAAQgPAAgIAJQgIAKAAASIAAAHIAiAAIAABPIgiAAIAABPg");
	this.shape_65.setTransform(550.8,184.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000033").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_66.setTransform(537,184.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000033").s().p("AhLBLQgggfAAgsQAAgsAggfQAggeAtAAQArAAAgAfQAeAfAAArQABAsggAfQggAfgsAAQgrAAgggfgAgUgVQgJAJAAAMQAAANAJAJQAIAJAMAAQAMAAAJgJQAJgJAAgNQAAgMgJgJQgJgJgMAAQgMAAgIAJg");
	this.shape_67.setTransform(519.2,188.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000033").s().p("AhKBvQgggfAAgsQAAgrAfgfQAfggArAAIATACIAABTQgJgHgJAAQgMAAgHAIQgJAJAAAMQAAAMAJAJQAIAIAMAAQAdAAAAgpIAAimIBNAAIAACpQAAAvgZAeQgOARgWAKQgWAKgXAAQgsAAgfgfg");
	this.shape_68.setTransform(495,185.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000033").s().p("AATCPIAAiuQAAgQgEgHQgEgGgKAAQgTAAAAAdIAAAiIAXAAIAABKIgXAAIAABCIhTAAIAAixQAAgzAcgdQAcgcAyAAQAyAAAXAaQAYAZAAA3IAACzg");
	this.shape_69.setTransform(470.8,184.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAheQAAgQgIgKQgIgJgNAAQgLAAgJAIQgJAJAAALQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJACgIAAQgtgBgfgeg");
	this.shape_70.setTransform(703.5,123.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000033").s().p("AAOBoIAAhyQAAgSgOAAQgNAAAAASIAAByIhNAAIAAhxQAAgoAagbQAagbAmAAQAsAAAaAfQAVAZAAAsIAABrg");
	this.shape_71.setTransform(680.4,123.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_72.setTransform(662.9,119.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000033").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_73.setTransform(650.8,120.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000033").s().p("AhLBLQgfgfAAgsQAAgsAfgfQAggeAsAAQAsAAAfAfQAgAfAAArQgBAsgfAfQggAfgsAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAIgJAAgNQAAgMgIgJQgJgJgMAAQgLAAgJAJg");
	this.shape_74.setTransform(633,123.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000033").s().p("ABBCPIAAi1QgBgNgCgFQgCgEgGAAQgNAAAAAVIAAC2IhRAAIAAi1QgBgNgCgFQgCgEgGAAQgNAAAAAWIAAC1IhTAAIAAjIQAAgmAWgYQAXgXAkAAQArAAAXAnQAOgVAQgJQAQgJAYAAQAlAAAVAXQAUAYAAAtIAADBg");
	this.shape_75.setTransform(604.3,119.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000033").s().p("AhLBLQgggfABgsQgBgsAggfQAfgeAuAAQArAAAfAfQAfAfABArQAAAsggAfQggAfgsAAQgrAAgggfgAgUgVQgJAJAAAMQAAANAJAJQAIAJAMAAQAMAAAJgJQAJgJAAgNQAAgMgJgJQgJgJgMAAQgMAAgIAJg");
	this.shape_76.setTransform(554.5,123.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_77.setTransform(536.6,119.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAoAAQAJAAAOACIAABSQgIgFgGAAQgWAAABAfIAABhg");
	this.shape_78.setTransform(525,123.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAheQAAgQgIgKQgIgJgNAAQgLAAgJAIQgJAJAAALQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJACgIAAQgtgBgfgeg");
	this.shape_79.setTransform(504.2,123.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000033").s().p("ABBCPIAAi1QAAgNgCgFQgCgEgHAAQgNAAAAAVIAAC2IhSAAIAAi1QAAgNgCgFQgCgEgGAAQgNAAAAAWIAAC1IhTAAIAAjIQAAgmAXgYQAWgXAkAAQAsAAAWAnQAOgVAQgJQAQgJAYAAQAmAAAUAXQAUAYAAAtIAADBg");
	this.shape_80.setTransform(475.4,119.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000033").s().p("AhLBLQgfgfgBgsQABgsAfgfQAggeAsAAQAsAAAfAfQAgAfAAArQgBAsgfAfQgfAfgtAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAIgJAAgNQAAgMgIgJQgJgJgMAAQgLAAgJAJg");
	this.shape_81.setTransform(846.4,59.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000033").s().p("AAvCNQgaAAgWgMQgXgMgOgVQgRgaAAgsIAAimIBLAAIAABOIAjAAIAABQIgjAAQAAAYAIAJQAIAKAUAAIAABQIgJAAg");
	this.shape_82.setTransform(827.6,55.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAoAAQAIAAAPACIAABSQgIgFgGAAQgWAAAAAfIAABhg");
	this.shape_83.setTransform(815,58.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000033").s().p("AhLBMQgegfAAgsQgBgsAgggQAfgeAtAAQAsgBAeAfQAeAeAAAsIgBAOIhzAAQgCgJAAgHQAAgKAEgJIAmAAQgEgYgWAAQgOAAgJANQgIAMgBATQAAATAJANQAJAMANgBQALAAALgLIArA1QgeAYglgBQgsAAgggeg");
	this.shape_84.setTransform(795.7,59.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000033").s().p("AhFBIQgVgYAAgsIAAhrIBNAAIAAByQAAASANAAQAOAAABgSIAAhyIBMAAIAABxQAAAogaAbQgbAbgmAAQgrAAgaggg");
	this.shape_85.setTransform(772.6,59.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000033").s().p("AhnCPIAAitQABgbAFgRQAFgSAOgPQAOgQAWgKQAXgJAWAAQArAAAdAcQAcAdAAAqQAAAqgaAYQgYAYgwAAIgLAAIAAhJQAYAAAAgTQAAgSgSAAQgTAAgBAYIAAC2g");
	this.shape_86.setTransform(750.3,55);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000033").s().p("AhLBLQgfgfAAgsQAAgsAfgfQAfgeAtAAQAsAAAfAfQAgAfAAArQgBAsgfAfQgfAfgtAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAIgJAAgNQAAgMgIgJQgJgJgMAAQgLAAgJAJg");
	this.shape_87.setTransform(715.5,59.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000033").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_88.setTransform(697.7,55.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000033").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_89.setTransform(685.6,55.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_90.setTransform(673.4,54.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAnAAQAJAAAPACIAABSQgIgFgHAAQgUAAgBAfIAABhg");
	this.shape_91.setTransform(661.7,58.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAoAAQAJAAAOACIAABSQgIgFgGAAQgWAAABAfIAABhg");
	this.shape_92.setTransform(648.3,58.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAhfQAAgPgIgKQgIgJgNAAQgLAAgJAIQgJAKAAAKQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJABgIAAQgtAAgfgeg");
	this.shape_93.setTransform(627.5,59.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000033").s().p("AhnBpQgrgqAAg+QAAg+ArgqQArgrA+AAQA+AAApAqQAdAdAMAzIhZAGQgPgugqAAQgaAAgRATQgRASAAAcQAAAbARASQARASAaAAQAZAAAQgQQAQgPACgeIBYACQgJBEgmAlQgnAlg9AAQg9AAgqgqg");
	this.shape_94.setTransform(599.9,55.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000033").s().p("AhLBMQgegfAAgsQgBgsAgggQAfgeAtAAQAsgBAeAfQAeAeAAAsIgBAOIhzAAQgCgJAAgHQAAgKAEgJIAmAAQgEgYgWAAQgOAAgJANQgIAMgBATQAAATAJANQAJAMANgBQALAAALgLIArA1QgeAYglgBQgsAAgggeg");
	this.shape_95.setTransform(562.2,59.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000033").s().p("AhqCOIAAiqQAAguAZgeQAOgRAWgKQAVgKAXAAQAtAAAfAfQAgAeAAAuQAAAqgfAfQggAggqAAIgUgCIAAhTQAKAIAIAAQAMgBAJgIQAIgJAAgMQAAgMgJgJQgIgIgMgBQgdABAAApIAACmg");
	this.shape_96.setTransform(538.6,62.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_97.setTransform(520,54.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000033").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_98.setTransform(507.9,55.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000033").s().p("AhLBMQgfgfAAgsQABgsAfggQAfgeAsAAQAtgBAeAfQAfAeAAAsIgBAOIhzAAQgDgJAAgHQAAgKAEgJIAlAAQgEgYgVAAQgOAAgIANQgJAMAAATQgBATAJANQAJAMANgBQALAAALgLIArA1QgeAYglgBQgsAAgggeg");
	this.shape_99.setTransform(490.4,59.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000033").s().p("AheCPIAAisQAAgxAdggQAfggAtAAQAyAAAiArIhEAyQgGgQgOAAQgTAAAAAbIAAAiIAbAAIAABKIgbAAIAABJg");
	this.shape_100.setTransform(470.2,55);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000033").s().p("AhLBLQgggfABgsQgBgsAggfQAfgeAuAAQArAAAfAfQAgAfAAArQAAAsggAfQgfAfgtAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAIgJAAgNQAAgMgIgJQgJgJgMAAQgLAAgJAJg");
	this.shape_101.setTransform(264.8,383.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000033").s().p("AgtCQIAAhGQAPAJAPAAQAUAAALgOQALgOAAgZIAAhMQAAgggaAAQgKAAgIAJQgIAIAAALQAAAMAIAHQAHAIALAAQAIAAAHgDIAABFQgQAGgPAAQglAAgZgcQgagbAAgpQAAgsAfgeQAfgeAsAAQAYAAAWAKQAWAJAMARQAVAaAAAzIAABDQAAA2gfAjQgfAigxAAQgPAAgXgIg");
	this.shape_102.setTransform(240.4,387.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAoAAQAIAAAPACIAABSQgIgFgGAAQgWAAAAAfIAABhg");
	this.shape_103.setTransform(223.3,382.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000033").s().p("AhFBIQgVgYAAgsIAAhrIBMAAIAAByQAAASAOAAQAOAAAAgSIAAhyIBNAAIAABxQAAAogaAbQgbAbgmAAQgrAAgaggg");
	this.shape_104.setTransform(204.1,383.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000033").s().p("AgtCEQgWgKgOgRQgZgeAAgvIAAipIBNAAIAACmQAAApAdAAQAMAAAIgIQAJgJAAgMQAAgMgIgJQgIgIgMAAQgIAAgLAHIAAhTIAUgCQArAAAfAgQAfAfAAAqQAAAtggAfQgfAfgtAAQgXAAgVgKg");
	this.shape_105.setTransform(180.9,379.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000033").s().p("AhJBoIAAhRIAEAAQASAAAIgIQAIgIABgSQACgfAEgNQAEgNANgNQAWgWAnABIAYAAIAABRQgRAAgFAFQgHAHgBAQQgGA8gnAYQgWANgnAAg");
	this.shape_106.setTransform(160.8,383.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000033").s().p("AhLBMQgfgfAAgtQAAgrAfggQAfgeAsAAQAxAAAdAcQAdAeAAAxIAABkIhNAAIAAheQAAgQgIgJQgIgKgNAAQgLAAgJAJQgJAIAAAMQAAANAIAHQAIAJAMgBQAJAAAJgEIAABOQgJACgIABQgtAAgfgfg");
	this.shape_107.setTransform(140.2,383.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000033").s().p("AASCMIAAkXIBUAAIAAEXgAhlCMIAAkXIBTAAIAABkIAXAAIAABJIgXAAIAABqg");
	this.shape_108.setTransform(115.5,379.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000033").s().p("AhKBMQgggeAAguQABgrAfgfQAfggAsAAQAtAAAeAfQAfAeAAAsIgBAOIhzAAQgDgJAAgGQAAgLAEgJIAlAAQgEgYgVAAQgOAAgIANQgKAMABATQAAATAIAMQAJAMANABQALAAALgMIAsA0QgfAYglAAQgtAAgegeg");
	this.shape_109.setTransform(80.5,383.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000033").s().p("AhLBvQgfgfAAgsQAAgrAfgfQAgggAqAAIAUACIAABTQgKgHgJAAQgLAAgJAIQgIAJgBAMQABAMAIAJQAKAIALAAQAdAAAAgpIAAimIBNAAIAACpQAAAvgZAeQgOARgVAKQgXAKgWAAQgtAAgggfg");
	this.shape_110.setTransform(56.3,379.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000033").s().p("AhLBLQgggfABgsQgBgsAggfQAfgeAuAAQArAAAfAfQAgAfAAArQAAAsggAfQgfAfgtAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAIgJAAgNQAAgMgIgJQgJgJgMAAQgLAAgJAJg");
	this.shape_111.setTransform(22.3,383.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000033").s().p("AAPBoIAAhyQAAgSgPAAQgOAAAAASIAAByIhMAAIAAhxQAAgoAbgbQAagbAlAAQAsAAAbAfQAUAZAAAsIAABrg");
	this.shape_112.setTransform(-0.8,382.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000033").s().p("AhLBMQgfgfAAgtQAAgrAfggQAfgeAsAAQAxAAAdAcQAdAeAAAxIAABkIhNAAIAAheQAAgQgIgJQgIgKgNAAQgLAAgJAJQgJAIAAAMQAAANAIAHQAIAJAMgBQAJAAAJgEIAABOQgJACgIABQgtAAgfgfg");
	this.shape_113.setTransform(-25.1,383.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_114.setTransform(-43,378.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000033").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_115.setTransform(-55.1,379.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_116.setTransform(-67.3,378.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000033").s().p("AA/BoIAAhtQAAgNgCgFQgDgFgHAAQgMAAAAAXIAABtIhNAAIAAhtQABgNgDgFQgDgFgHAAQgNAAAAAXIAABtIhMAAIAAh9QAAgiAXgYQAXgYAhAAQAiAAAaAdQAegdAeAAQAnAAAXAcQASAVAAAqIAAB0g");
	this.shape_117.setTransform(-89.6,382.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_118.setTransform(-112,378.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000033").s().p("AAPBmIAAg9QAAgWgPAAQgNAAAAATIAABAIhNAAIAAg2QAAgTAHgMQAHgMARgJQgRgLgHgNQgHgMAAgTIAAgqIBNAAIAAA0QAAAIAEAFQAEAFAFAAQAPAAAAgSIAAg0IBMAAIAAAtQAAATgFAMQgGAMgOAJQAOAIAGALQAFAMAAASIAAA5g");
	this.shape_119.setTransform(-129.1,383.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000033").s().p("AhLBMQgfgfAAgtQAAgrAfggQAfgeAsAAQAxAAAdAcQAdAeAAAxIAABkIhNAAIAAheQAAgQgIgJQgIgKgNAAQgLAAgJAJQgJAIAAAMQAAANAIAHQAIAJAMgBQAJAAAJgEIAABOQgJACgIABQgtAAgfgfg");
	this.shape_120.setTransform(-153.1,383.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000033").s().p("ABBCPIAAi1QgBgNgCgFQgCgEgGAAQgNAAAAAVIAAC2IhRAAIAAi1QgBgNgCgFQgCgEgGAAQgNAAAAAWIAAC1IhTAAIAAjIQAAgmAWgYQAXgXAkAAQArAAAXAnQAOgVAQgJQAQgJAYAAQAmAAAUAXQAUAYAAAtIAADBg");
	this.shape_121.setTransform(-181.9,379);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000033").s().p("AhLBLQgggfABgsQgBgsAggfQAfgeAuAAQArAAAfAfQAgAfAAArQAAAsggAfQgfAfgtAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAIgJAAgNQAAgMgIgJQgJgJgMAAQgLAAgJAJg");
	this.shape_122.setTransform(-19.6,318.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000033").s().p("Ag2COIAAitQAAgdAKgVQAMgaAagRQAZgRAcAAIAIABIAABQIgDAAQgPAAgIAJQgIAKAAASIAAAHIAiAAIAABPIgiAAIAABPg");
	this.shape_123.setTransform(-38,314.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000033").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_124.setTransform(-51.8,314.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000033").s().p("AhGBIQgUgYAAgsIAAhrIBMAAIAAByQAAASAOAAQAPAAAAgSIAAhyIBMAAIAABxQAAAogbAbQgaAbgmAAQgrAAgbggg");
	this.shape_125.setTransform(-69.2,318.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000033").s().p("AAYCMIgnhaIAAhHIAHAAQAZAAAAgXQAAgUgeAAIgOAAIAADMIhUAAIAAkXIBrAAQAwAAAbAYQAeAbAAAqQAAAqglAcIAvB0g");
	this.shape_126.setTransform(-91.7,314.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000033").s().p("AAOBoIAAhyQAAgSgOAAQgOAAAAASIAAByIhMAAIAAhxQAAgoAbgbQAZgbAmAAQAsAAAbAfQAUAZAAAsIAABrg");
	this.shape_127.setTransform(-127.5,318.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000033").s().p("AhLBMQgfgfAAgtQAAgrAfggQAfgeAsAAQAxAAAdAcQAdAeAAAxIAABkIhNAAIAAheQAAgQgIgJQgIgKgNAAQgLAAgJAJQgJAIAAAMQAAANAIAHQAIAJAMgBQAJAAAJgEIAABOQgJACgIABQgtAAgfgfg");
	this.shape_128.setTransform(-151.7,318.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000033").s().p("AhGBIQgUgYAAgsIAAhrIBNAAIAAByQAAASANAAQAPAAAAgSIAAhyIBMAAIAABxQAAAogbAbQgaAbgmAAQgrAAgbggg");
	this.shape_129.setTransform(-174.9,318.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000033").s().p("Ag3CLIAAhRQAHADAFAAQAQAAAAgbIAAiwIBSAAIAAC7QABArgYAcQgZAbgkAAQgLAAgPgEg");
	this.shape_130.setTransform(-193.7,314.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000033").s().p("AhgBmIA+h7IhAAAIAAhQIC8AAIg/B7IBJAAIAABQg");
	this.shape_131.setTransform(86.8,253.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000033").s().p("AhLBMQgegfAAgsQAAgsAfggQAfgeAtAAQAsgBAeAfQAfAeAAAsIgBANIhzAAQgDgIAAgHQAAgKAEgJIAlAAQgEgYgVAAQgOAAgIANQgJAMAAATQgBATAJANQAJAMANgBQAMAAAKgLIAsA1QgfAYglgBQgsAAgggeg");
	this.shape_132.setTransform(65.1,253.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000033").s().p("AhGBIQgUgYAAgsIAAhrIBNAAIAAByQAAASANAAQAPAAAAgSIAAhyIBMAAIAABxQAAAogbAbQgaAbgmAAQgrAAgbggg");
	this.shape_133.setTransform(42,254);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000033").s().p("AAeCOIAAimQAAgpgdgBQgLABgKAIQgIAJgBAMQABAMAIAJQAJAIALABQAJAAAKgIIAABTIgUACQgqAAggggQgfggAAgqQAAgsAfgfQAggfAtAAQAWAAAXAKQAVAKAOARQAZAeAAAuIAACqg");
	this.shape_134.setTransform(18.1,257.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000033").s().p("AhgBmIA+h7IhBAAIAAhQIC9AAIg/B7IBIAAIAABQg");
	this.shape_135.setTransform(-4.1,253.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000033").s().p("AhLBsQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAheQAAgRgIgKQgIgJgNAAQgLAAgJAJQgJAIAAAMQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJACgIgBQgtAAgfgegAgZhaIAqgwIAwAAIgwAwg");
	this.shape_136.setTransform(-27.3,250.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000033").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_137.setTransform(-45.1,249.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000033").s().p("AhLBMQgegfAAgsQgBgsAgggQAfgeAtAAQAsgBAfAfQAdAeAAAsIgBANIhzAAQgCgIAAgHQAAgKADgJIAnAAQgFgYgVAAQgNAAgKANQgIAMgBATQAAATAJANQAJAMANgBQALAAALgLIAsA1QgfAYglgBQgsAAgggeg");
	this.shape_138.setTransform(-62.6,253.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000033").s().p("Ah5iTIBhAAIAZBXIAchXIBcAAIh5Eng");
	this.shape_139.setTransform(-85.6,250.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000033").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_140.setTransform(-112.9,249.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000033").s().p("AhLBMQgegfAAgsQgBgsAgggQAfgeAtAAQAsgBAeAfQAeAeAAAsIgBANIhzAAQgCgIAAgHQAAgKAEgJIAmAAQgEgYgWAAQgOAAgJANQgIAMgBATQAAATAJANQAJAMANgBQALAAALgLIAsA1QgfAYglgBQgsAAgggeg");
	this.shape_141.setTransform(-130.4,253.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000033").s().p("AhLBvQgfgfAAgsQAAgrAfgfQAgggAqAAIAUACIAABTQgKgHgJAAQgLAAgJAIQgIAJgBAMQABAMAIAJQAKAIALAAQAdAAAAgpIAAimIBNAAIAACpQAAAvgZAeQgOARgVAKQgXAKgWAAQgtAAgggfg");
	this.shape_142.setTransform(-154.7,249.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_143.setTransform(-172.6,248.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000033").s().p("AhfCPIAAisQABgxAeggQAeggAsAAQAzAAAjArIhFAyQgGgQgOAAQgSAAAAAbIAAAiIAaAAIAABKIgaAAIAABJg");
	this.shape_144.setTransform(-187.1,249.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000033").s().p("AhJBnIAAhRIAEAAQASAAAIgHQAIgIABgSQACggAEgNQAEgMANgMQAWgXAnAAIAYAAIAABRQgRAAgFAHQgHAGgBAQQgGA7gnAZQgWAMgnAAg");
	this.shape_145.setTransform(22.8,189.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAhfQAAgPgIgKQgIgJgNAAQgLAAgJAJQgJAIAAALQAAANAIAJQAIAHAMABQAJgBAJgEIAABPQgJABgIAAQgtAAgfgeg");
	this.shape_146.setTransform(2.2,188.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000033").s().p("AgwCIIAAjLIBMAAIAADLgAgqhYIArgvIAwAAIgwAvg");
	this.shape_147.setTransform(-14.5,185.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000033").s().p("AhKBLQgfgfAAgtQAAgrAfgfQAfgfArAAQAmAAAeAYQAdAZAHAmIhNACQgLgNgPAAQgMAAgIAJQgJAIAAANQAAAMAJAKQAJAIAMABQAUgBAIgWIBMgDQgDAtgeAcQgeAcgqAAQgsAAgfgfg");
	this.shape_148.setTransform(-33.4,188.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAhfQAAgPgIgKQgIgJgNAAQgLAAgJAJQgJAIAAALQAAANAIAJQAIAHAMABQAJgBAJgEIAABPQgJABgIAAQgtAAgfgeg");
	this.shape_149.setTransform(-58.1,188.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000033").s().p("ABBCPIAAi1QAAgNgDgFQgCgEgGAAQgNAAAAAVIAAC2IhRAAIAAi1QgBgNgCgFQgCgEgGAAQgNAAAAAWIAAC1IhTAAIAAjIQAAgmAXgYQAWgXAkAAQArAAAXAnQAOgVAQgJQARgJAXAAQAmAAAUAXQAUAYAAAtIAADBg");
	this.shape_150.setTransform(-86.8,184.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000033").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_151.setTransform(-120.4,184.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000033").s().p("AhGBsQgUgZAAgsIAAhrIBMAAIAABzQAAARAOAAQAOAAAAgRIAAhzIBNAAIAABxQAAAogbAbQgaAcgmAAQgrAAgbgggAgfhbIAqgwIAxAAIgxAwg");
	this.shape_152.setTransform(-137.8,185.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAhfQAAgPgIgKQgIgJgNAAQgLAAgJAJQgJAIAAALQAAANAIAJQAIAHAMABQAJgBAJgEIAABPQgJABgIAAQgtAAgfgeg");
	this.shape_153.setTransform(-162.1,188.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000033").s().p("AAZCMIgohaIAAhHIAHAAQAZAAAAgXQAAgUgeAAIgOAAIAADMIhTAAIAAkXIBqAAQAwAAAbAYQAeAbAAAqQAAAqglAcIAvB0g");
	this.shape_154.setTransform(-185,184.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000033").s().p("AhgBmIA+h7IhBAAIAAhQIC+AAIg/B7IBIAAIAABQg");
	this.shape_155.setTransform(28.8,123.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_156.setTransform(12.4,119.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000033").s().p("ABABoIAAhtQAAgNgDgFQgDgFgHAAQgMAAAAAXIAABtIhNAAIAAhtQABgNgDgFQgDgFgHAAQgNAAAAAXIAABtIhMAAIAAh9QAAgiAXgYQAXgYAhAAQAiAAAaAdQAegdAeAAQAnAAAXAcQASAVAAAqIAAB0g");
	this.shape_157.setTransform(-9.9,123.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAheQAAgQgIgKQgIgJgNAAQgLAAgJAIQgJAJAAALQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJACgIAAQgtgBgfgeg");
	this.shape_158.setTransform(-39.1,123.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000033").s().p("AhPBnQgogrAAg9QAAg+AogqQApgpA7AAQAVAAAZAIIAABUQgTgKgRAAQgdAAgRATQgTASAAAcQAAAeARARQARASAdAAQASAAAAgLQAAgIgMAAIgUAAIAAg/IBQAAQAZAfAAAjQAAApgeAcQgeAcgsAAQg4AAgngsg");
	this.shape_159.setTransform(-63.4,120.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000033").s().p("AhLBLQgfgfAAgsQAAgsAfgfQAfgeAuAAQArAAAfAfQAgAfAAArQgBAsgfAfQggAfgsAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAIgJAAgNQAAgMgIgJQgJgJgMAAQgLAAgJAJg");
	this.shape_160.setTransform(-98.7,123.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAoAAQAIAAAPACIAABSQgIgFgGAAQgWAAAAAfIAABhg");
	this.shape_161.setTransform(-116,123.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000033").s().p("AhFBIQgVgYAAgsIAAhrIBMAAIAAByQAAASAOAAQAOAAAAgSIAAhyIBNAAIAABxQAAAogaAbQgbAbgmAAQgrAAgaggg");
	this.shape_162.setTransform(-135.2,124.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000033").s().p("AAvCNQgaAAgWgMQgXgMgOgVQgRgaAAgsIAAimIBLAAIAABOIAjAAIAABQIgjAAQAAAYAIAJQAIAKAUAAIAABQIgJAAg");
	this.shape_163.setTransform(-153.7,120.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAnAAQAJAAAPACIAABSQgIgFgHAAQgUAAgBAfIAABhg");
	this.shape_164.setTransform(-166.3,123.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000033").s().p("AATCPIAAiuQAAgQgEgHQgEgGgKAAQgTAAAAAdIAAAiIAXAAIAABKIgXAAIAABCIhTAAIAAixQAAgzAcgdQAcgcAyAAQAyAAAXAaQAYAZAAA3IAACzg");
	this.shape_165.setTransform(-186.5,119.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000033").s().p("AhLBLQgggfABgsQgBgsAggfQAggeAtAAQArAAAfAfQAfAfAAArQABAsggAfQggAfgsAAQgrAAgggfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAJgJAAgNQAAgMgJgJQgJgJgMAAQgLAAgJAJg");
	this.shape_166.setTransform(306.9,59.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000033").s().p("AAOBoIAAhyQAAgSgOAAQgOAAAAASIAAByIhMAAIAAhxQAAgoAbgbQAZgbAmAAQAsAAAbAfQAUAZAAAsIAABrg");
	this.shape_167.setTransform(283.8,58.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAhfQAAgPgIgKQgIgJgNAAQgLAAgJAIQgJAKAAAKQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJABgIAAQgtAAgfgeg");
	this.shape_168.setTransform(259.5,59.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000033").s().p("AhLBvQgfgfAAgsQAAgrAfgfQAgggAqAAIATACIAABTQgJgHgJAAQgMAAgIAIQgJAJAAAMQAAAMAJAJQAKAIAKAAQAeAAAAgpIAAimIBNAAIAACpQAAAvgZAeQgOARgVAKQgXAKgWAAQgtAAgggfg");
	this.shape_169.setTransform(235.3,55.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000033").s().p("AhKBMQgggfAAgsQABgsAfggQAfgeAsAAQAtgBAfAfQAeAeAAAsIgBANIhzAAQgDgIAAgHQAAgKAEgJIAlAAQgDgYgWAAQgNAAgJANQgKAMABATQAAATAIANQAJAMANgBQAMAAAKgLIAsA1QgfAYglgBQgtAAgegeg");
	this.shape_170.setTransform(212,59.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000033").s().p("AglCMIAAkXIBLAAIAAEXg");
	this.shape_171.setTransform(194.2,55.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000033").s().p("AhLBLQgfgfgBgsQABgsAfgfQAfgeAuAAQArAAAgAfQAeAfAAArQAAAsgfAfQgfAfgtAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAJgJgBgNQABgMgJgJQgJgJgMAAQgLAAgJAJg");
	this.shape_172.setTransform(176.5,59.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000033").s().p("AgpCMIAAjHIg/AAIAAhQIDRAAIAABQIg/AAIAADHg");
	this.shape_173.setTransform(153.9,55.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000033").s().p("AhLBLQgfgfAAgsQAAgsAfgfQAfgeAuAAQArAAAfAfQAgAfAAArQgBAsgfAfQggAfgsAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQAMAAAJgJQAIgJAAgNQAAgMgIgJQgJgJgMAAQgLAAgJAJg");
	this.shape_174.setTransform(120.9,59.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000033").s().p("AhLBvQgfgfAAgsQAAgrAfgfQAfggArAAIAUACIAABTQgKgHgJAAQgMAAgHAIQgJAJAAAMQAAAMAJAJQAIAIAMAAQAdAAAAgpIAAimIBNAAIAACpQAAAvgZAeQgOARgVAKQgXAKgWAAQgtAAgggfg");
	this.shape_175.setTransform(96.6,55.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000033").s().p("Ag3BoIAAhuQAAgtAYgaQAYgaAnAAQAKAAAOACIAABSQgIgFgHAAQgUAAAAAfIAABhg");
	this.shape_176.setTransform(79.2,58.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000033").s().p("AhLBMQgfgeAAguQAAgsAfgeQAfggAsAAQAxAAAdAeQAdAcAAAyIAABkIhNAAIAAhfQAAgPgIgKQgIgJgNAAQgLAAgJAIQgJAKAAAKQAAANAIAJQAIAHAMABQAJgBAJgFIAABQQgJABgIAAQgtAAgfgeg");
	this.shape_177.setTransform(58.5,59.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000033").s().p("AgtCEQgWgKgOgRQgZgeAAgvIAAipIBNAAIAACmQAAApAdAAQAMAAAIgIQAJgJAAgMQAAgMgIgJQgIgIgMAAQgIAAgLAHIAAhTIAUgCQArAAAfAgQAfAfAAAqQAAAtggAfQgfAfgtAAQgXAAgVgKg");
	this.shape_178.setTransform(34.8,55.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000033").s().p("ABABoIAAhtQgBgNgCgFQgDgFgHAAQgNAAAAAXIAABtIhLAAIAAhtQAAgNgDgFQgDgFgHAAQgMAAAAAXIAABtIhNAAIAAh9QAAgiAXgYQAXgYAhAAQAiAAAaAdQAfgdAeAAQAmAAAXAcQASAVAAAqIAAB0g");
	this.shape_179.setTransform(6.2,58.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000033").s().p("AhLBLQgggfAAgsQAAgsAggfQAggeAtAAQArAAAgAfQAeAfAAArQABAsggAfQgfAfgtAAQgsAAgfgfgAgUgVQgJAJAAAMQAAANAJAJQAIAJAMAAQAMAAAJgJQAJgJAAgNQAAgMgJgJQgJgJgMAAQgMAAgIAJg");
	this.shape_180.setTransform(-21.8,59.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000033").s().p("AAlCMQgtAAgZgbQgZgaAAgvIAAizIBSAAIAAClQAAAUAGAGQAGAHATAAIAEAAIAABRg");
	this.shape_181.setTransform(-39.4,55.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000033").s().p("AhLBMQgegfAAgsQAAgsAfggQAfgeAtAAQAsgBAeAfQAeAeABAsIgCANIhyAAQgDgIAAgHQAAgKAEgJIAlAAQgEgYgVAAQgOAAgIANQgJAMAAATQgBATAJANQAJAMANgBQALAAALgLIAsA1QgfAYglgBQgsAAgggeg");
	this.shape_182.setTransform(-69.5,59.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000033").s().p("AAvCNQgaAAgWgMQgXgMgOgVQgRgaAAgsIAAimIBLAAIAABOIAjAAIAABQIgjAAQAAAYAIAJQAIAKAUAAIAABQIgJAAg");
	this.shape_183.setTransform(-88.4,55.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000033").s().p("AAOBoIAAhyQAAgSgOAAQgNAAAAASIAAByIhNAAIAAhxQAAgoAagbQAagbAmAAQAsAAAaAfQAVAZAAAsIAABrg");
	this.shape_184.setTransform(-106.7,58.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000033").s().p("AhKBMQgggfAAgsQABgsAfggQAfgeAsAAQAtgBAfAfQAeAeAAAsIgBANIhzAAQgDgIAAgHQAAgKADgJIAmAAQgDgYgWAAQgNAAgJANQgKAMABATQAAATAIANQAJAMANgBQAMAAAKgLIAsA1QgfAYglgBQgtAAgegeg");
	this.shape_185.setTransform(-129.5,59.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000033").s().p("AhKBLQgfgfAAgtQAAgrAfgfQAfgfArAAQAmAAAeAYQAdAZAHAmIhNACQgLgNgPAAQgMAAgIAJQgJAIAAANQAAAMAJAKQAJAIAMABQAUgBAIgWIBMgDQgDAtgeAcQgeAcgqAAQgsAAgfgfg");
	this.shape_186.setTransform(-153,59.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000033").s().p("AglCUIAAjMIBLAAIAADMgAgahUQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAQgKAKQgLALgRAAQgQAAgKgLg");
	this.shape_187.setTransform(-170.9,54.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000033").s().p("Ah4iTIBgAAIAYBXIAdhXIBdAAIh6Eng");
	this.shape_188.setTransform(-188.2,56.1);

	this.button_1 = new lib.cerrar();
	this.button_1.parent = this;
	this.button_1.setTransform(971.9,-36.3,2,2,0,0,0,19.4,20.3);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.cerrar(), 3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#663300").s().p("AhfB8QAAgqApAAQAqAAAAAqQAAApgqAAQgpAAAAgpgAhKAvIAAhLIAiAAQAHAhAXAAQAdAAAAg4QAAhYglAAQgeAAAAArQAAAMACAVIgkgLQgEgTAAgKQAAg9BRgBQBlABAABiQAAApgZAbQgZAdgkAAQgXAAgZgSIAAAig");
	this.shape_189.setTransform(307.9,-60.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#663300").s().p("AhrAGQAAg4AgglQAgglAwAAQBmAAAACEIh8AAQAABdAvAAQAsAAAAg0IgBgRIAjAKQgGBThbAAQh2AAAAh3gAgQgnIgBAVIAzAAQAAhSgaAAQgVAAgDA9g");
	this.shape_190.setTransform(283.8,-56.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#663300").s().p("Ag/CnIAegVIAAAIQAAAcANAAQAPAAAAgUQAAgMgRgdIAAjrQAfgBA2gGIAADwIABAhIgOAoQgQAQgiAAQgxAAgOgpgAgWiwQAAgfAnAAQAoAAAAAfQAAAfgoAAQgnAAAAgfg");
	this.shape_191.setTransform(263.1,-56.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#663300").s().p("Ah+A2QAAg1BFgTQA/gUAAgdQAAgkgkAAQgqAAAAAjQAAALAHATIgrgIIgBgVQAAg4BmgBQBiABgBA0IAACPQAAAWAPAAQAFAAAIgEIAIAVQgfANgeAAQgsAAgLgcQgUAdgpAAQhKgBgBhGgAgNgHQgaAOAAAmQgBAuATAAQAaABAAgvIAAhDQgIAJgKAGg");
	this.shape_192.setTransform(246.3,-56.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#663300").s().p("AAaB6IAAiuQAAgagPAAQgOAAgLAWQgMAUAAAdIAACBIhVAAIAAjtQAsAAApgGIAAAtQAggtAuABQA8gBAAA9IAAC2g");
	this.shape_193.setTransform(219,-57);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#663300").s().p("Ah1AAQAAh7B1AAQB2AAAAB7QAAB8h2AAQh1AAAAh8gAgcAAQAABnAcAAQAcAAABhnQgBhmgcAAQgcAAAABmg");
	this.shape_194.setTransform(192.3,-56.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#663300").s().p("AhoAsIAsgJIAAAPQgBAUASAQQARAQAXAAQAfgBAAgaQAAgRgygWQhLggAAgzQAAghAdgWQAdgWAsABQBRAAAIBCIgpAIQgBg2gxAAQgeAAABAaQgBASA0AVQBQAhAAAxQAABQhmAAQhrAAAAhQg");
	this.shape_195.setTransform(167.7,-56.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#663300").s().p("AhYB6IAAjtIAQABQAeAAAngHIAAAnQAUgnAfAAQApAAAAAuQAAAMgEAPIgEAUIg7AAIAFgVQAEgKAAgHQAAgPgLAAQgIAAgIAUQgHATAAAWIAACOg");
	this.shape_196.setTransform(146.9,-57);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#663300").s().p("AhrAGQAAg4AgglQAgglAvAAQBoAAAACEIh9AAQAABdAuAAQAtAAAAg0IAAgRIAiAKQgFBThcAAQh2AAAAh3gAgQgnIgBAVIAyAAQABhSgZAAQgWAAgDA9g");
	this.shape_197.setTransform(123.5,-56.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#663300").s().p("AhwCiIAAk8QAkgBAygGIAAAkQAYgkAiAAQAlAAAWAiQAWAiAAA4QAAB9hUAAQghAAgWgaIAABkgAgbgmQAABbAbAAQAYAAAAhbQAAhYgXgBQgcABAABYg");
	this.shape_198.setTransform(98.9,-52.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#663300").s().p("AhrAGQAAg4AgglQAgglAvAAQBoAAAACEIh9AAQAABdAuAAQAtAAAAg0IAAgRIAiAKQgFBThcAAQh2AAAAh3gAgQgnIgBAVIAyAAQABhSgZAAQgWAAgDA9g");
	this.shape_199.setTransform(58.7,-56.7);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#663300").s().p("AgxBnIAAicIgdAAIAAgbIAdAAIAAgqQAsgMAogXIAABNIAmAAIAAAbIgmAAIAACnQABAPAJAAQAIAAABgKIAZACQgKAlg2AAQhAAAAAg3g");
	this.shape_200.setTransform(39,-60.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#663300").s().p("AhoAsIAsgJIAAAPQAAAUARAQQARAQAXAAQAfgBAAgaQAAgRgygWQhLggAAgzQAAghAdgWQAdgWAsABQBRAAAIBCIgpAIQgBg2gxAAQgeAAABAaQAAASAzAVQBQAhAAAxQAABQhmAAQhrAAAAhQg");
	this.shape_201.setTransform(19.6,-56.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#663300").s().p("AhrAGQAAg4AgglQAfglAxAAQBmAAABCEIh9AAQAABdAuAAQAtAAAAg0IgBgRIAjAKQgFBThcAAQh2AAAAh3gAgQgnIgBAVIAzAAQAAhSgaAAQgWAAgCA9g");
	this.shape_202.setTransform(-4,-56.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#663300").s().p("AhoAsIAtgJIgCAPQABAUARAQQARAQAYAAQAdgBAAgaQAAgRgwgWQhMggAAgzQAAghAdgWQAdgWAtABQBQAAAIBCIgqAIQABg2gyAAQgdAAgBAaQABASAzAVQBQAhAAAxQAABQhmAAQhrAAAAhQg");
	this.shape_203.setTransform(-42,-56.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#663300").s().p("AhrAGQAAg4AgglQAfglAxAAQBmAAAACEIh8AAQAABdAuAAQAtAAAAg0IgBgRIAjAKQgFBThcAAQh2AAAAh3gAgQgnIgBAVIAzAAQAAhSgaAAQgWAAgCA9g");
	this.shape_204.setTransform(-65.6,-56.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#663300").s().p("AAaB6IAAiuQAAgagPAAQgOAAgLAWQgMAUAAAdIAACBIhVAAIAAjtQAsAAApgGIAAAtQAggtAuABQA8gBAAA9IAAC2g");
	this.shape_205.setTransform(-105.8,-57);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#663300").s().p("AhrAGQAAg4AgglQAgglAvAAQBoAAAACEIh9AAQAABdAuAAQAtAAAAg0IgBgRIAjAKQgGBThbAAQh2AAAAh3gAgQgnIgBAVIAzAAQAAhSgZAAQgWAAgDA9g");
	this.shape_206.setTransform(-131.5,-56.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#663300").s().p("AgqClIAAjsQAoAAAtgHIAADzgAgmiFQAAgfAnAAQAoAAAAAfQAAAfgoAAQgnAAAAgfg");
	this.shape_207.setTransform(-150.4,-61.3);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#663300").s().p("AhwA/IAAi0QArgCArgEIAAC4QAAAXAPAAQAmAAAAhTIAAh2QArgCAqgEIAADyIhVAAIAAgmQgdArgvAAQg/AAAAg9g");
	this.shape_208.setTransform(-170.8,-56.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#663300").s().p("AASCFIgRABQiOAAgBilQAAimCPAAQCNAAAACpQAABuhIAmQALAdAQAAQAUAAgCgZIAAgGIAZAJIABAMQgBA7g3AAQg2AAgNhBgAgfBVQAJAYAVAAQAHgBAJgFQgGgjgRAAQgNAAgKARgAAiA+QALgogBg6QABhPgKgcQgJgdgaAAQgZAAgJAeQgKAdAABNQAAA+AHAfQAQgXAUgBQAVABAOAcg");
	this.shape_209.setTransform(-200.1,-57.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#663300").s().p("AhfBDQAAgpAZgbQAZgdAkAAQAXgBAZATIAAgjIAkAAIAABMIgiAAQgHghgXgBQgdABAAA4QAABXAmABQAdAAAAgrQAAgMgCgVIAkAKQAEAVAAAJQAAA9hRAAQhlAAAAhigAANh7QAAgpAqAAQApAAAAApQAAAqgpAAQgqAAAAgqg");
	this.shape_210.setTransform(-227.8,-52.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.button_1},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	// Capa 2
	this.instance = new lib.fondo();
	this.instance.parent = this;
	this.instance.setTransform(-242,-82,5.552,2.393);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-557.8,45.6,235.4,148);


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
	this.huerta2_mc.setTransform(222.6,250.3,1,1,0,0,0,68.4,74);

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
	this.villa2_mc.setTransform(505.6,247.5,1,1,0,0,0,67,72.8);

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
	this.morelos2_mc.setTransform(635.8,76.1,1,1,0,0,0,55,74.4);

	this.moctezuma2_mc = new lib.moctezuma2();
	this.moctezuma2_mc.parent = this;
	this.moctezuma2_mc.setTransform(77.6,422.6,1,1,0,0,0,66.4,74.5);

	this.ana1_mc = new lib.santaana1();
	this.ana1_mc.parent = this;
	this.ana1_mc.setTransform(11.2,2);

	this.moctezuma1_mc = new lib.moctezuma1();
	this.moctezuma1_mc.parent = this;
	this.moctezuma1_mc.setTransform(647.2,249.7,1,1,0,0,0,66.4,75);

	this.victoria1_mc = new lib.victoria1();
	this.victoria1_mc.parent = this;
	this.victoria1_mc.setTransform(724.3,348.1);

	this.morelos1_mc = new lib.morelos1();
	this.morelos1_mc.parent = this;
	this.morelos1_mc.setTransform(296.4,175);

	this.obregon1_mc = new lib.obregon1();
	this.obregon1_mc.parent = this;
	this.obregon1_mc.setTransform(1083.2,76.4,1,1,0,0,0,70.3,74.4);

	this.diaz2_mc = new lib.porfirio2();
	this.diaz2_mc.parent = this;
	this.diaz2_mc.setTransform(76.7,247.5,1,1,0,0,0,65.5,72.8);

	this.zapata1_mc = new lib.zapata1();
	this.zapata1_mc.parent = this;
	this.zapata1_mc.setTransform(798,74,1,1,0,0,0,75,72);

	this.diaz1_mc = new lib.porfirio1();
	this.diaz1_mc.parent = this;
	this.diaz1_mc.setTransform(219.7,420.1,1,1,0,0,0,65.5,72);

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
	this.huerta1_mc.setTransform(792.7,249,1,1,0,0,0,68.4,74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.huerta1_mc},{t:this.villa1_mc},{t:this.madero1_mc},{t:this.hidalgo1_mc},{t:this.diaz1_mc},{t:this.zapata1_mc},{t:this.diaz2_mc},{t:this.obregon1_mc},{t:this.morelos1_mc},{t:this.victoria1_mc},{t:this.moctezuma1_mc},{t:this.ana1_mc},{t:this.moctezuma2_mc},{t:this.morelos2_mc},{t:this.madero2_mc},{t:this.ana2_mc},{t:this.iturbide1_mc},{t:this.villa2_mc},{t:this.zapata2_mc},{t:this.iturbide2_mc},{t:this.hidalgo2_mc},{t:this.huerta2_mc},{t:this.victoria2_mc},{t:this.obregon2_mc}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.5,-0.3,1133.6,511.4);


// stage content:
(lib.memomexlvl3buenito = function(mode,startPosition,loop) {
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
	this.memorama = new lib.memoramas();
	this.memorama.parent = this;
	this.memorama.setTransform(502.9,380.5,1.15,1.15,0,0,0,431.9,321.2);

	this.ans = new cjs.Text("7", "27px 'Arial'", "#FFFFFF");
	this.ans.name = "ans";
	this.ans.textAlign = "center";
	this.ans.lineHeight = 32;
	this.ans.parent = this;
	this.ans.setTransform(1101.3,447.4,1.85,1.85);

	this.trys = new cjs.Text("7", "27px 'Arial'", "#FFFFFF");
	this.trys.name = "trys";
	this.trys.textAlign = "center";
	this.trys.lineHeight = 32;
	this.trys.parent = this;
	this.trys.setTransform(1096.3,338.2,1.85,1.85);

	this.equis = new lib.espantosax();
	this.equis.parent = this;
	this.equis.setTransform(1031.3,602.4,1.25,1.25,0,0,0,0,0.1);

	this.score = new cjs.Text("7", "27px 'Arial'", "#FFFFFF");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 32;
	this.score.parent = this;
	this.score.setTransform(1101.3,72,1.85,1.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.score},{t:this.equis},{t:this.trys},{t:this.ans},{t:this.memorama}]},1).wait(1));

	// Layer 4
	this.bios = new lib.bios();
	this.bios.parent = this;
	this.bios.setTransform(756.2,607.1,1,1,0,0,0,61,90.5);
	this.bios._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bios).wait(1).to({_off:false},0).wait(1));

	// Layer 8
	this.instance_1 = new lib.mariomolina();
	this.instance_1.parent = this;
	this.instance_1.setTransform(237.4,170,1.53,1.53,3.6);

	this.instance_2 = new lib.siqueiros();
	this.instance_2.parent = this;
	this.instance_2.setTransform(867.9,288.6,1.359,1.359,-17.1);

	this.instance_3 = new lib.gamiz();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1001,156,1.43,1.43);

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
		{src:"images/memomexlvl3buenito_atlas_.png", id:"memomexlvl3buenito_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;