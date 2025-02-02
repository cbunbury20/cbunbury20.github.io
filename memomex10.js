(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"memomex10_atlas_", frames: [[389,0,153,204],[0,0,225,225],[155,408,153,204],[310,412,153,204],[227,0,160,200],[0,227,153,204],[544,0,153,204],[620,412,100,100],[699,0,153,204],[854,0,153,204],[227,202,153,204],[382,206,153,204],[537,206,153,204],[692,206,153,204],[847,206,153,204],[465,412,153,204]]}
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
	this.spriteSheet = ss["memomex10_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fondo = function() {
	this.spriteSheet = ss["memomex10_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.guadalupeVictoria = function() {
	this.spriteSheet = ss["memomex10_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hidalgo1 = function() {
	this.spriteSheet = ss["memomex10_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hojita = function() {
	this.spriteSheet = ss["memomex10_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.huertajpgcopia = function() {
	this.spriteSheet = ss["memomex10_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.iturbidejpgcopia = function() {
	this.spriteSheet = ss["memomex10_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.LOGONEW = function() {
	this.spriteSheet = ss["memomex10_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.maderojpgcopia = function() {
	this.spriteSheet = ss["memomex10_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.moctezuma = function() {
	this.spriteSheet = ss["memomex10_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.morelos = function() {
	this.spriteSheet = ss["memomex10_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.obregon = function() {
	this.spriteSheet = ss["memomex10_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.santaanna = function() {
	this.spriteSheet = ss["memomex10_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.tarjetaBack = function() {
	this.spriteSheet = ss["memomex10_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Villajpgcopia = function() {
	this.spriteSheet = ss["memomex10_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.zapata = function() {
	this.spriteSheet = ss["memomex10_atlas_"];
	this.gotoAndStop(15);
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

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AhHCdQgJgJAAgNQAAgKAGgGQAHgGAJAAQAPAAAGARQADAIAFAAQALAAAAgLIgFgXIgrjUIgGgVQgCgGgEgCQgDgCAAgFIAAgMQAAgGABgBQACgBAFAAIBIAAQAEAAACABQACABAAAFQAAAKgBADQAAADgEACQgGACAAAIIACAMIAXBuIAUhsIABgEIACgIQAAgFgIgGQgDgCgBgEIgBgOQAAgGAGAAIAjAAQAGAAACACQACADAAAKIAAAHIgFAEQgGAEgCAOIgjC0QgJAvgEANQgEAOgKAKQgIALgNAFQgMAFgRAAQgSAAgKgIg");
	this.shape.setTransform(36.2,4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AAeCJQgKgGgGgRQgRASgLAGQgLAFgLAAQgbAAgOgVQgOgUAAguQAAgvANgQQAOgTAmgOQAZgKAPgIIAAgnQAAgRgOABQgQgBgBAZQAAAOgCAGQgEAGgLAFQgLADgNAAQgaAAAAgcQAAgaAWgRQAXgQAlAAQAWAAAUAGQATAHAMAQQALAQAAASIAAC6IAGAGQAFADgBAGQAAAIgCAEQgCADgJADQgIADgOAAQgQAAgLgGgAgMgIQgFAMAAAtQAAAgADAKQAEAIAJAAQAPAAAAgaIAAhoQgWAKgEANg");
	this.shape_1.setTransform(17.6,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgmCmQgGAAgBgHIAAgLQABgIAGgDIAFgEQABgBAAgGIAAj9QAAgHgFgCQgIgEAAgHIAAgLQAAgGAJAAIA+AAQAGAAACABQABAAAAAHIAAEdQAAAJAHADQADABAAAGIAAALQABAHgKAAg");
	this.shape_2.setTransform(2,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Ag4BsQgbgkAAhGQAAhGAZglQAZglAoAAQAjAAAVAfQAVAfAAA6IAAATIhbAAIAABSQAAASAHAJQAFAJAKAAQAPAAAKgNQAJgOAAgWQABgNACgCQACgDANABQALgBADADQADACAAAJQAAAfgUAaQgVAYgiAAQgmAAgbgjgAgHhgIAABDIAbAAIAAhDQAAgUgOAAQgNAAAAAUg");
	this.shape_3.setTransform(-12.8,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AhiCmQgEgBgCgCQgCgCAAgHQAAgJABgCQABgCAFgEQALgFAAgMIAAj3QAAgEgHgDQgFgBgCgDQgCgEAAgKQAAgIADgCQACgDALABIBiAAQAqgBAbAnQAcAnAABZQAABSgbApQgaApgsAAgAgLCPIALAAQAKAAAFgKQAGgJAAgZIAAjQQAAgOgHgJQgGgIgLAAIgIAAg");
	this.shape_4.setTransform(-34,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.1,-26.9,94.3,53.9);


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
	this.shape.graphics.f("rgba(255,255,255,0.118)").s().p("A0WChQochDAAheQAAheIchCQIchDL6AAQL7AAIbBDQIcBCAABeQAABeocBDQobBDr7AAQr6AAochDg");
	this.shape.setTransform(184.3,22.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

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


(lib.cerrar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgBgEIBbBMABQhSQghgigvAAQgtAAgiAiQgDAEgEAEAgBgEIBRhOQAiAiAAAwQAAApgYAfQgFAFgFAFQghAjgvAAQgtAAgigjQgDgDgEgEQgaggAAgrQAAgqAagggAhWBLIBVhP");
	this.shape.setTransform(26.3,13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3E1F00").ss(2,1,1).p("ABaBIQAYgfAAgpQAAgwgigiIhRBOIBbBMQgFAFgFAFQghAjgvAAQgtAAgigjQgDgDgEgEQgaggAAgrQAAgqAaggIBVBGABQhSQghgigvAAQgtAAgiAiQgDAEgEAEAhWBLIBVhP");
	this.shape_1.setTransform(26.3,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

	// Capa 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000099").ss(4.4,1,1).p("Ag6iFQhCAAAABCIAACHQAABCBCAAIB0AAQBDAAAAhCIAAiHQAAhChDAAg");
	this.shape_2.setTransform(26.3,13.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Ag6CGQhCAAAAhCIAAiGQAAhDBCAAIB0AAQBDAAAABDIAACGQAABChDAAg");
	this.shape_3.setTransform(26.3,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14,0.8,24.7,25.3);


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
	this.shape_13.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_13.setTransform(477.2,277.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_14.setTransform(464.8,277.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_15.setTransform(452,277.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_16.setTransform(438.9,277.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgOA3IglhQIgDgFIgEgCIgIAAIAAgVIBCAAIAAAVIgCAAQgHAAgBAAQgBABAAAAQgBABAAAAQAAABAAAAQgBABAAAAIACAFIAPAqIASgqIACgGQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBAAgBgBQgBAAgGAAIgFAAIAAgVIA6AAIAAAVIgJAAIgDACIgEAHIgkBOg");
	this.shape_17.setTransform(425.7,277.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AghBJQgPgHgHgKQgIgJABgKQAAgHAEgFQAGgGAIAAQAGAAAGAFQAEADACAIQADAKACADQAEADAFADQAGACAGAAQAGAAAGgDQAHgDADgFQADgGAAgHQAAgNgLgHQgHgFgQAAIgHAAIAAgUIAHAAQAMAAAGgCQAGgCADgEQADgFAAgFQAAgIgGgFQgGgHgOAAQgJAAgGADQgGADgDAFQgDAFgBAJIgXAAIAAgEQAAgOAGgLQAHgKANgGQAOgHARAAQAQAAANAGQANAGAHAJQAGAJAAAKQAAAIgDAHQgFAHgHAFQgEAEgJADQAIABAGADQAHACAFAFQAFAFACAGQACAGABAHQAAANgIAKQgHALgPAHQgPAHgTAAQgTAAgOgGg");
	this.shape_18.setTransform(403.9,275.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAPgHQAOgIARAAQATAAANAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgbAAgRgQgAgLgcQgFADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgHgJQgGgIgKAAQgFAAgGAEg");
	this.shape_19.setTransform(382,277.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AghBQIAAgVIAEAAQAHAAACgBIADgCIABgIIAAhhIgRAAIAAgVQAUgBATgIIAMAAIAAB/IAAAHQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQACABAHAAIAEAAIAAAVg");
	this.shape_20.setTransform(371.4,274.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAIgMAOgHQAOgIARAAQATAAANAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgcAAgQgQgAgLgcQgFADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgHgJQgGgIgKAAQgFAAgGAEg");
	this.shape_21.setTransform(360.5,277.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_22.setTransform(347.7,277.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_23.setTransform(327.8,277.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgOA3IglhQIgEgFIgDgCIgIAAIAAgVIBCAAIAAAVIgDAAQgGAAgCAAQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAIABAFIAQAqIASgqIACgGQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQgCAAgGAAIgGAAIAAgVIA7AAIAAAVIgJAAIgDACIgFAHIgkBOg");
	this.shape_24.setTransform(314.6,277.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AguA4IAAgVIAGAAQAGAAABgBIADgCIAAgHIAAgyIgQAAIAAgUQASgBATgJIAKAAIAAAQQAIgJAHgEQAGgDAGAAQAFAAAFACQAEADACAFQADAEAAAGQAAAGgFAGQgEAFgJABIgDAAIgIgDIgEgBQgDAAgHAEIAAAqQAAAFABABQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIAIABIAFAAIAAAVg");
	this.shape_25.setTransform(303.1,277.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_26.setTransform(293.6,274.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_27.setTransform(283.6,277.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgjBGQgOgJgJgRQgIgRAAgbQAAgaAIgRQAJgRAOgJQAPgJAUAAQAUAAAQAJQAOAJAIARQAJAQAAAaQAAAcgIAQQgIASgPAJQgPAJgVAAQgVAAgOgJgAgTgqQgJANABAdQgBAeAJANQAIAMALAAQAMAAAIgNQAJgMAAgeQAAgdgJgNQgIgMgMAAQgMAAgHAMg");
	this.shape_28.setTransform(262.8,275.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgiBKQgOgGgHgJQgHgJAAgJQAAgHAFgFQAFgFAHAAQAFAAAFACQAEADADAHQAEAJAEAEQAEAEAFADQAFACAGAAQAIAAAGgEQAIgDADgGQADgFAAgIQAAgMgKgIQgLgIgWAAQgVAAgRAFIADhTIBNAAQAGAAADgBQACgBAAgDIAPAAIAAAmIhPAAIgBAUIAYgCQAVAAAQAHQAOAGAIAKQAHALAAAPQAAAagVAPQgSANgaAAQgSAAgOgGg");
	this.shape_29.setTransform(248.3,275);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgvBgIBCi/IAdAAIhBC/g");
	this.shape_30.setTransform(233.5,276.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AgjBGQgOgJgIgRQgJgRAAgbQAAgaAJgRQAIgRAOgJQAQgJATAAQAVAAAOAJQAPAJAJARQAIAQAAAaQAAAcgIAQQgIASgPAJQgPAJgVAAQgUAAgPgJgAgTgqQgJANAAAdQAAAeAJANQAHAMAMAAQAMAAAIgNQAJgMAAgeQAAgdgJgNQgIgMgMAAQgMAAgHAMg");
	this.shape_31.setTransform(219.8,275.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AgiBKQgOgGgHgJQgHgJAAgJQAAgHAFgFQAFgFAHAAQAFAAAEACQAEADAEAHQAFAJADAEQAEAEAFADQAGACAFAAQAIAAAHgEQAGgDAEgGQADgFAAgIQAAgMgKgIQgLgIgWAAQgVAAgRAFIADhTIBMAAQAIAAACgBQACgBAAgDIAPAAIAAAmIhPAAIgBAUIAYgCQAWAAAPAHQAPAGAGAKQAIALAAAPQAAAagVAPQgSANgaAAQgSAAgOgGg");
	this.shape_32.setTransform(205.3,275);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AAFA4IAAgVIAIAAQAAgBABAAQAAAAABAAQAAgBAAAAQABgBAAAAQABgCAAgFIAAgoQAAgHgCgDQgDgDgFAAQgFAAgEACQgGACgJAGIAAArQAAAHACACQABABAGAAIAEAAIAAAVIg/AAIAAgVIACAAQAIAAACgBIADgCIABgGIAAgzIgQAAIAAgUQATgDARgHIAKAAIAAAPQANgJAIgDQAJgDAIAAQALAAAIAEQAJAFADAHQAEAGAAANIAAAtIAAAHIAEADIAHAAIAFAAIAAAVg");
	this.shape_33.setTransform(182.6,277.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AgsBEQgQgQAAgaQAAgRAHgLQAHgNAOgHQAPgIARAAQASAAAOAIQAOAHAIANQAHALAAARQAAAZgQARQgRAPgcAAQgbAAgRgPgAgKgCQgGADgDAHQgDAHAAALQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgQgGgJQgHgHgKAAQgFAAgFAEgAgcg1IAXgUQAJgKAJABQAGAAAGAEQAEAFAAAHQAAAFgEAFQgEAFgKACIgjAHg");
	this.shape_34.setTransform(167.8,274.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AgFBIQgIgDgFgEQgGgFgCgGQgCgFAAgKIAAg0IgRAAIAAgUQAJgDAGgFQAHgGAEgHQADgIACgLIAUAAIAAAmIAjAAIAAAWIgjAAIAAAlQAAANABAEQACAEADACQAFADAGAAQAMAAALgHIAAAXQgKAFgHACQgIABgJAAQgKAAgHgCg");
	this.shape_35.setTransform(155.7,275.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAOgHQAOgIASAAQASAAAOAHQAOAIAHAMQAIANAAAQQAAAZgQAQQgRAQgcAAQgcAAgQgQgAgKgcQgGADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgGgJQgHgIgKAAQgFAAgFAEg");
	this.shape_36.setTransform(143.6,277.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AgBBPQgHgDgIgGIgGAJIgYAAIAAiBIgQAAIAAgWQAVgBATgIIALAAIAAA8QAJgHAGgCQAHgCAHAAQASAAANAOQAOAPAAAaQAAAagOARQgPAPgUAAQgIAAgHgCgAgBgEIgKAFIAAAhQAAAKABAFQACADAEACQAEADAFAAQAJAAAFgHQAGgKAAgQQABgQgGgIQgFgGgIABIgIABg");
	this.shape_37.setTransform(129.5,274.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AghBQIAAgVIAFAAQAGAAACgBIADgCIAAgIIAAhhIgQAAIAAgVQAUgBAUgIIALAAIAAB/IAAAHQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQACABAHAAIAEAAIAAAVg");
	this.shape_38.setTransform(112,274.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AhLBMIAAgVIAEAAIAKgBQADgBABgDIABgJIAAhSIgCgJIgDgDIgHgBIgHAAIAAgVIB/AAIARAwIgUAHQgFgMgHgHQgGgHgJgDQgHgCgMAAIgWAAIAAAmIAIAAQAJAAACgBQADgBABgDQABgDAAgIIAAgGIAUAAIAABAIgUAAIAAgGQAAgHgCgDQgBgDgCgBQgCgCgKAAIgHAAIAAAkIABAGQAAABAAAAQAAAAAAABQABAAAAAAQABAAAAAAIAHABIALAAQAPAAAKgEQAKgEAHgKQAIgJAEgMIAUAGIgUA5g");
	this.shape_39.setTransform(100.3,275.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#663300").s().p("AgdANIAAgZIA7AAIAAAZg");
	this.shape_40.setTransform(80.2,277.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#663300").s().p("AgNAPQgHgGAAgJQAAgHAHgGQAFgGAIAAQAJAAAFAGQAGAGABAHQgBAJgGAGQgFAFgJAAQgIAAgFgFg");
	this.shape_41.setTransform(72.4,280.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#663300").s().p("AgiBKQgPgGgGgJQgHgJAAgJQAAgHAFgFQAFgFAHAAQAFAAAFACQAEADADAHQAEAJAEAEQAEAEAFADQAFACAGAAQAIAAAGgEQAIgDADgGQADgFAAgIQAAgMgKgIQgLgIgWAAQgUAAgSAFIADhTIBNAAQAHAAACgBQABgBABgDIAPAAIAAAmIhPAAIgBAUIAYgCQAVAAAPAHQAQAGAHAKQAHALAAAPQAAAagVAPQgSANgaAAQgSAAgOgGg");
	this.shape_42.setTransform(61.4,275);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("Ag6A3IAAgWIBAhAIgJAAQgKABgFABQgFADgFAEIgJANIgTgIIAQglIBcAAIAAAWIhAA/IAOAAQAMAAAHgCQAFgCAFgGQADgDAFgKIATAHIgOAog");
	this.shape_43.setTransform(522.6,235.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_44.setTransform(509.6,235.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AgOA3IglhQIgEgFIgDgCIgIAAIAAgWIBCAAIAAAWIgDAAQgGAAgCABQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAIABAFIAQAqIASgqIACgGQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQgCgBgGAAIgFAAIAAgWIA6AAIAAAWIgJAAIgDACIgFAHIgkBOg");
	this.shape_45.setTransform(496.5,235.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AguBOIAAgWIAPAAQAJAAACgBIADgDQACgCAAgIIAAhVIgfAAIAAgUIAUgEIAWgFIAMgFIAKAAIAAB3QAAAIABACQAAAAABABQAAAAABABQAAAAABAAQAAABABAAQACACAHgBIAPAAIAAAWg");
	this.shape_46.setTransform(475.2,233.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAIgMAOgHQAOgIARAAQATAAANAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgcAAgQgQgAgLgcQgFADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgHgJQgGgIgKAAQgFAAgGAEg");
	this.shape_47.setTransform(452.7,235.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AghBQIAAgVIAEAAQAHAAACgBIACgCIABgIIAAhhIgQAAIAAgVQAUgBATgIIALAAIAAB/IABAHQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQACABAHAAIAEAAIAAAVg");
	this.shape_48.setTransform(442.2,232.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAIgMANgHQAOgIASAAQATAAANAHQAOAIAIAMQAHANAAAQQAAAZgQAQQgRAQgcAAQgcAAgQgQgAgLgcQgFADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgHgJQgGgIgKAAQgFAAgGAEg");
	this.shape_49.setTransform(431.2,235.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_50.setTransform(418.5,235.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_51.setTransform(398.5,235.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AgOA3IglhQIgEgFIgDgCIgIAAIAAgWIBCAAIAAAWIgDAAQgGAAgCABQAAAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAIABAFIAQAqIASgqIACgGQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBAAgBAAQgBgBgGAAIgFAAIAAgWIA6AAIAAAWIgJAAIgDACIgFAHIgkBOg");
	this.shape_52.setTransform(385.3,235.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AguA4IAAgVIAGAAQAGAAABgBIADgCIAAgHIAAgyIgQAAIAAgUQASgBATgJIAKAAIAAAQQAIgJAHgEQAGgDAGAAQAFAAAFADQAEACACAFQADAEAAAGQAAAGgFAGQgEAFgJABIgDAAIgIgDIgEgBQgDAAgHAEIAAAqQAAAFABABQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIAIABIAFAAIAAAVg");
	this.shape_53.setTransform(373.9,235.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_54.setTransform(364.4,232.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_55.setTransform(354.4,235.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("AAEA4IAAgVIAIAAQABgBABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAgGIAAgoQAAgHgCgDQgDgDgFAAQgEAAgFACQgGACgIAGIAAArQAAAGABADQABABAHAAIADAAIAAAVIhAAAIAAgVIADAAQAIAAACgBIADgCIABgGIAAgzIgRAAIAAgUQAUgDARgHIAKAAIAAAPQAMgJAJgDQAIgDAKAAQAKAAAJAEQAHAFAEAHQAEAGAAANIAAAtIAAAHIAEADIAHAAIAFAAIAAAVg");
	this.shape_56.setTransform(333.6,235.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("AghBSIAAgVIAGAAIAIAAIACgCIABgGIAAg0IgRAAIAAgUIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgegzIAYgVQAJgJAIAAQAHAAAFAEQAEAFAAAHQAAAFgEAFQgEAFgKACIgiAIg");
	this.shape_57.setTransform(321.9,232.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333333").s().p("AgnBLQgKgHgIgOQgGgNAAgRQAAgQAHgMQAHgOAKgHQALgHAOAAQAIAAAGACQAFABAIAFIAAgaIgPAAIAAgWQANgBAIgBQAJgCAJgFIAKAAIAAB+QAAAIABACIACACQACABAHAAIAFAAIAAAVIgvABIAAgLQgLAHgGADQgIACgIAAQgMABgLgHgAgPgEQgEADgEAHQgCAHAAALQAAAPAGAKQAFAGAJAAIAGgBIAMgGIAAglQAAgHgBgDQgCgDgEgDQgFgDgFAAQgGAAgFAEg");
	this.shape_58.setTransform(310.7,232.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAPgHQAOgIARAAQATAAANAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgbAAgRgQgAgLgcQgFADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgHgJQgGgIgKAAQgFAAgGAEg");
	this.shape_59.setTransform(296.4,235.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("AAoA4IAAgVQAHAAABgBIADgCQABgBAAgGIAAgnQAAgHgBgCIgDgEQgDgBgEAAQgEAAgFACQgFACgKAGIAAApQAAAHABABQABABAAAAQAAABAAAAQABAAAAABQABAAAAAAQACABAHAAIAAAVIg7AAIAAgVQAHAAACgBIADgDIAAgIIAAgkQAAgIgBgDQgDgFgGABIgGABQgEAAgDACIgJAGIgCABIAAApIAAAIIADADIAGABIADAAIAAAVIg/AAIAAgVIAEAAQAHAAABgBQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBQABgBAAgHIAAgwIgQAAIAAgUQAUgCARgIIAKAAIAAAPQAJgIAKgDQAKgEAKAAQAHAAAGACQAFACAEADQAEADADAFQAKgHAKgEQAKgEAKAAQAJAAAHADQAHADAEAGQAFAGABAFIABAMIAAAtQAAAFABABQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQABABAHAAIAEAAIAAAVg");
	this.shape_60.setTransform(278.4,235.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAIgMAOgHQAOgIARAAQATAAANAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgcAAgQgQgAgLgcQgFADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgHgJQgGgIgKAAQgFAAgGAEg");
	this.shape_61.setTransform(260.1,235.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_62.setTransform(246.8,235.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333333").s().p("AghBQIAAgVIAFAAQAGAAACgBIADgCIABgIIAAhhIgRAAIAAgVQAUgBAUgIIALAAIAAB/IAAAHQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQACABAHAAIAEAAIAAAVg");
	this.shape_63.setTransform(228.9,232.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_64.setTransform(218.4,235.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333333").s().p("AgnBLQgKgHgHgOQgHgNAAgRQAAgQAHgMQAHgOALgHQALgHAOAAQAHAAAFACQAGABAIAFIAAgaIgPAAIAAgWQAMgBAJgBQAJgCAJgFIALAAIAAB+QAAAIABACIACACQABABAHAAIAFAAIAAAVIgwABIAAgLQgKAHgHADQgHACgIAAQgNABgKgHgAgOgEQgGADgCAHQgEAHAAALQAAAPAHAKQAFAGAJAAIAGgBIAMgGIAAglQAAgHgBgDQgCgDgEgDQgFgDgEAAQgHAAgEAEg");
	this.shape_65.setTransform(205,232.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#333333").s().p("AAFA4IAAgVIAIAAQAAgBABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAgGIAAgoQAAgHgCgDQgDgDgFAAQgFAAgEACQgGACgJAGIAAArQAAAGACADQABABAGAAIAEAAIAAAVIg/AAIAAgVIACAAQAIAAACgBIADgCIABgGIAAgzIgQAAIAAgUQATgDARgHIAKAAIAAAPQANgJAIgDQAJgDAIAAQALAAAIAEQAJAFADAHQAEAGAAANIAAAtIAAAHIAEADIAHAAIAFAAIAAAVg");
	this.shape_66.setTransform(182.6,235.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#333333").s().p("AgsBEQgQgQAAgaQAAgRAHgLQAHgNAOgHQAPgIARAAQASAAAOAHQAOAIAIANQAHALAAARQAAAZgQARQgRAPgcAAQgbAAgRgPgAgKgCQgGACgDAIQgDAHAAALQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgIAAgSQAAgQgGgJQgHgHgKAAQgFAAgFAEgAgcg1IAXgUQAJgKAJABQAGgBAGAFQAEAFAAAHQAAAFgEAFQgEAFgKACIgjAHg");
	this.shape_67.setTransform(167.8,232.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#333333").s().p("AgFBHQgIgCgFgEQgGgGgCgFQgCgFAAgKIAAg0IgRAAIAAgUQAJgDAGgFQAHgGAEgHQADgIACgLIAUAAIAAAlIAjAAIAAAXIgjAAIAAAlQAAAOABADQACAEADACQAFADAGAAQAMAAALgHIAAAXQgKAEgHADQgIABgJAAQgKAAgHgDg");
	this.shape_68.setTransform(155.7,233.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAOgHQAOgIASAAQASAAAOAHQAOAIAHAMQAIANAAAQQAAAZgQAQQgRAQgcAAQgcAAgQgQgAgKgcQgGADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgGgJQgHgIgKAAQgFAAgFAEg");
	this.shape_69.setTransform(143.6,235.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#333333").s().p("AgBBPQgHgDgIgGIgGAJIgYAAIAAiBIgQAAIAAgWQAVgBATgIIALAAIAAA8QAJgHAGgBQAHgDAHAAQASAAANAOQAOAPAAAaQAAAagOARQgPAPgUAAQgIAAgHgCgAgBgEIgKAFIAAAhQAAAKABAFQACADAEACQAEADAFAAQAJAAAFgHQAGgJAAgRQABgQgGgIQgFgGgIABIgIABg");
	this.shape_70.setTransform(129.5,232.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("AghBQIAAgVIAFAAQAGAAACgBIADgCIAAgIIAAhhIgQAAIAAgVQAUgBAUgIIALAAIAAB/IAAAHQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQACABAHAAIAEAAIAAAVg");
	this.shape_71.setTransform(112,232.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AhLBMIAAgVIAEAAIAKgBQADgBABgDIABgJIAAhSIgCgJIgDgDIgHgBIgHAAIAAgVIB/AAIARAwIgUAHQgFgMgHgHQgGgHgJgDQgHgCgMAAIgWAAIAAAmIAIAAQAJAAACgBQADgBABgDQABgDAAgIIAAgGIAUAAIAABAIgUAAIAAgGQAAgHgCgDQgBgDgCgBQgCgCgKAAIgHAAIAAAkIABAGQAAABAAAAQAAAAAAABQABAAAAAAQABAAAAAAIAHABIALAAQAPAAAKgEQAKgEAHgKQAIgJAEgMIAUAGIgUA5g");
	this.shape_72.setTransform(100.3,233.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#663300").s().p("AgdANIAAgZIA7AAIAAAZg");
	this.shape_73.setTransform(80.2,235.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#663300").s().p("AgNAPQgHgGAAgJQAAgHAHgGQAFgGAIAAQAJAAAFAGQAGAGABAHQgBAJgGAGQgFAFgJAAQgIAAgFgFg");
	this.shape_74.setTransform(72.4,238.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#663300").s().p("AAEBMIAAgqIhHAAIAAgiIBHhLIAjAAIAABRIAdAAIAAAcIgdAAIAAAqgAgoAGIAsAAIAAgug");
	this.shape_75.setTransform(61.2,233.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("AgNBJQgGgGAAgJQAAgIAGgGQAGgGAHAAQAJAAAGAGQAFAGAAAIQAAAJgFAGQgGAFgJAAQgHAAgGgFgAgJAeIgDgiIgHgsIgBgJQAAgFADgFQADgFAFgDQAFgCAEAAQAFAAAFADQAFACADAFQADAFAAAGIgBALIgIAvIgBAcg");
	this.shape_76.setTransform(430.5,194.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_77.setTransform(420.7,196.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_78.setTransform(408.4,196.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#333333").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_79.setTransform(395.5,196.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_80.setTransform(382.4,196.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#333333").s().p("AgOA3IglhQIgDgFIgEgCIgIAAIAAgVIBCAAIAAAVIgDAAQgGgBgCABQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAIABAFIAQAqIASgqIACgGQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBAAgBgBQgBgBgGABIgFAAIAAgVIA6AAIAAAVIgJAAIgDACIgFAHIgkBOg");
	this.shape_81.setTransform(369.2,196.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("AghBJQgPgGgHgKQgHgJAAgKQAAgLAIgJQAHgKARgGQgOgGgGgJQgIgKAAgMQABgMAGgJQAHgKANgGQAOgGARAAQAXAAAQAKQAQAKAAAQQAAAKgGAJQgGAIgNAHQAQAHAKALQAHAJAAANQAAAUgQANQgSAOgdAAQgTAAgOgGgAgYAYQgFAGAAAGQAAAEAEAFQADAEAHADQAGADAJAAQAJAAAHgDQAHgCADgEQADgEAAgEQAAgGgEgDQgFgFgNgGIgPgGQgLAFgFAHgAgRgyQgGAEAAAGQAAAFADADQAFAFAMAFIAMAFIAEgEIAFgHIADgGIAAgFQABgGgHgEQgFgFgLAAQgKAAgGAEg");
	this.shape_82.setTransform(347.5,194.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#333333").s().p("AguBOIAAgWIAPAAQAJAAACgBIADgDQACgCAAgIIAAhVIgfAAIAAgVIAUgCIAWgGIAMgEIAKAAIAAB2QAAAIABACQABAAAAABQAAAAABABQAAAAABAAQAAABABAAQACABAHAAIAPAAIAAAWg");
	this.shape_83.setTransform(333.1,194.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_84.setTransform(311.2,196.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#333333").s().p("AgFBIQgIgDgFgEQgGgFgCgGQgCgFAAgLIAAgzIgRAAIAAgUQAJgDAGgGQAHgFAEgHQADgHACgMIAUAAIAAAmIAjAAIAAAWIgjAAIAAAlQAAANABAEQACAEADACQAFADAGAAQAMAAALgHIAAAXQgKAFgHACQgIABgJAAQgKAAgHgCg");
	this.shape_85.setTransform(299.5,194.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#333333").s().p("AguA4IAAgVIAGAAQAGAAABgBIADgCIAAgHIAAgyIgQAAIAAgUQASgBATgJIAKAAIAAAQQAIgJAHgEQAGgDAGAAQAFAAAFACQAEADACAFQADAFAAAEQAAAHgFAGQgEAFgJAAIgDAAIgIgCIgEgBQgDAAgHAEIAAAqQAAAFABACQAAAAABAAQAAABAAAAQAAAAABABQAAAAABAAIAIABIAFAAIAAAVg");
	this.shape_86.setTransform(289.7,196.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#333333").s().p("AAZA2QgIgEgFgGQgKAHgIADQgJADgJAAQgPAAgKgJQgKgJAAgNQAAgHAEgGQAEgGAGgFQAHgDANgEQAOgDATgCIAAgIIgBgKQgBgDgEgBQgCgCgFAAIgGABIgFADIgEAHQgCAHgFADQgEADgFAAQgIAAgEgFQgEgEgBgGQABgIAEgFQAGgIANgFQAMgFAPAAQAOAAALAFQAKAFAEAHQAFAHAAAOIAAAmQAAAHABACQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQADABAEAAIAIgBIAAAVQgKADgIAAQgLAAgGgDgAgLAMQgGACgCADQgDADAAADQAAAFADADQAEADAFAAQAEAAAFgCIAJgGIAAgTQgOACgFADg");
	this.shape_87.setTransform(277.7,196.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#333333").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_88.setTransform(264.7,196.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAIgMAOgHQAOgIARAAQATAAANAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgcAAgQgQgAgLgcQgFADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgHgJQgGgIgKAAQgFAAgGAEg");
	this.shape_89.setTransform(251.1,196.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#333333").s().p("AgOA3IglhQIgEgFIgDgCIgIAAIAAgVIBCAAIAAAVIgDAAQgGgBgCABQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAIAAAFIARAqIASgqIABgGQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQgCgBgGABIgGAAIAAgVIA7AAIAAAVIgIAAIgFACIgDAHIglBOg");
	this.shape_90.setTransform(237.5,196.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_91.setTransform(226.9,193.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AgfA2QgHgDgFgEQgEgEgCgGQgCgGAAgJIAAgsIgBgIIgCgCIgIgBIgGAAIAAgVIA0gBIAABGIAAAKQABACADACQACABAEAAQAFAAAGgCIAMgIIAAgqIAAgHIgDgDIgGgBIgHAAIAAgVIA0gBIAABNIAAAIQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAQABABAGAAIAGAAIAAAVIgwABIAAgNQgKAHgJAEQgJADgKAAQgIAAgGgCg");
	this.shape_92.setTransform(215.3,196.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#333333").s().p("AgDBQIAAgVIAEAAIAJAAIACgCQABgCAAgFIAAgaQgJAGgGACQgHACgIAAQgTAAgMgPQgPgRAAgXQAAgRAHgOQAGgNAMgHQALgIANAAQAIAAAGADQAIADAKAGIAGgIIAXAAIAAB8QAAAGABABIADAEIAIAAIAFAAIAAAVgAgPg0QgFAEgCAGQgDAJAAALQAAAJADAIQACAGAFAEQAFADAEAAIAJgCIAKgFIAAgkQAAgIgCgEQgBgDgFgDQgEgCgFAAQgGgBgFAEg");
	this.shape_93.setTransform(201.3,198.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_94.setTransform(187.5,196.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_95.setTransform(167.6,196.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_96.setTransform(155.3,196.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("AgnBLQgLgHgGgNQgHgOAAgRQAAgQAHgMQAHgOALgHQAKgHAOAAQAHAAAHACQAFACAIAEIAAgaIgPAAIAAgWQAMgBAJgCQAIgBAKgFIAKAAIAAB/QAAAHABACIADACQABABAHAAIAFAAIAAAVIgvABIAAgLQgLAIgGACQgIADgIAAQgMAAgLgHgAgPgEQgEAEgEAFQgDAIAAALQABAPAGAKQAGAGAIABIAGgBIAMgHIAAglQAAgHgCgCQAAgDgFgEQgFgDgEAAQgGAAgGAEg");
	this.shape_97.setTransform(141.8,194);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_98.setTransform(127.9,196.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#333333").s().p("AgfA2QgHgDgFgEQgEgEgCgGQgCgGAAgJIAAgsIgBgIIgCgCIgIgBIgGAAIAAgVIA0gBIAABGIAAAKQABACADACQACABAEAAQAFAAAGgCIAMgIIAAgqIAAgHIgDgDIgGgBIgHAAIAAgVIA0gBIAABNIAAAIQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAQABABAGAAIAGAAIAAAVIgwABIAAgNQgKAHgJAEQgJADgKAAQgIAAgGgCg");
	this.shape_99.setTransform(114.1,196.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#333333").s().p("AhEBMIAAgVIAFAAQAHAAACgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBIABgJIAAhTIgBgJQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAIgHgBIgHAAIAAgVIBPAAQAQAAAKADQAKADAHAGQAHAHAEAIQAEAJAAAKQAAATgPANQgPANgaAAIgZAAIAAAcIAAAHQAAABABAAQAAABABAAQAAAAABABQAAAAABAAIAGABIAHAAIAAAVgAgMgHIAMAAQAMAAAFgCQAGgDADgFQAEgFAAgHQAAgLgJgGQgGgEgLAAIgQAAg");
	this.shape_100.setTransform(99.7,194.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#663300").s().p("AgdANIAAgZIA7AAIAAAZg");
	this.shape_101.setTransform(80.2,196.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#663300").s().p("AgNAPQgHgGAAgJQAAgHAHgGQAFgGAIAAQAJAAAFAGQAGAGABAHQgBAJgGAGQgFAFgJAAQgIAAgFgFg");
	this.shape_102.setTransform(72.4,200);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#663300").s().p("AghBJQgPgHgHgKQgIgJAAgKQABgHAFgFQAFgGAHAAQAIAAAFAFQADADADAIQADAKADADQACADAGADQAGACAGAAQAGAAAHgDQAGgDADgFQADgGAAgHQAAgNgLgHQgIgFgPAAIgIAAIAAgUIAIAAQAMAAAGgCQAFgCAEgEQADgFAAgFQAAgIgGgFQgGgHgNAAQgJAAgHADQgGADgDAFQgEAFAAAJIgXAAIAAgEQAAgOAHgLQAFgKAOgGQAOgHAQAAQARAAAOAGQANAGAGAJQAHAJAAAKQAAAIgFAHQgDAHgIAFQgEAEgJADQAIABAGADQAHACAFAFQAEAFADAGQACAGAAAHQABANgIAKQgHALgPAHQgPAHgTAAQgTAAgOgGg");
	this.shape_103.setTransform(61.1,194.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_104.setTransform(197.4,162.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#333333").s().p("AgaBmQgHgDgEgGQgEgFAAgGQAAgGAEgEQAGgEAFAAQAFAAADACQAEADAGAGQADAEADAAQADAAACgDQACgDAAgIIAAheIgQAAIAAgVQALAAAKgDQAKgCAKgFIAKAAIAAB0QgBARgEAIQgFAJgLAGQgLAFgOAAQgLAAgJgDgAAIhGQgGgGAAgIQAAgJAGgFQAGgGAIAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgGgGg");
	this.shape_105.setTransform(185.3,162.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#333333").s().p("AAZA2QgIgEgFgGQgKAHgIADQgJADgJAAQgPAAgKgJQgKgJAAgNQAAgHAEgGQAEgGAGgFQAHgDANgEQAOgDATgCIAAgIIgBgKQgBgDgEgBQgCgCgFAAIgGABIgFADIgEAHQgCAHgFADQgEADgFAAQgIAAgEgFQgEgEgBgGQABgIAEgFQAGgIANgFQAMgFAPAAQAOAAALAFQAKAFAEAHQAFAHAAAOIAAAmQAAAHABACQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQADABAEAAIAIgBIAAAVQgKADgIAAQgLAAgGgDgAgLAMQgGACgCADQgDADAAADQAAAFADADQAEADAFAAQAEAAAFgCIAJgGIAAgTQgOACgFADg");
	this.shape_106.setTransform(176.9,162.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#333333").s().p("AAEA4IAAgVIAIgBQABAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAQABgBAAgHIAAgmQAAgJgBgBQgEgFgFAAQgEAAgFACQgFACgKAHIAAAqQABAIABABQACACAGAAIADAAIAAAVIhAAAIAAgVIAEAAQAHAAACgBIADgCIAAgHIAAgxIgQAAIAAgWQAUgCARgHIALAAIAAAPQALgIAJgDQAJgEAJAAQAKAAAJAFQAIAEADAHQAEAHAAAMIAAAsIABAIIACACIAIABIAGAAIAAAVg");
	this.shape_107.setTransform(162.9,162.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAOgHQAOgIASAAQASAAAOAHQAOAIAHAMQAIANAAAQQAAAZgQAQQgRAQgcAAQgcAAgQgQgAgKgcQgGADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgGgJQgHgIgKAAQgFAAgFAEg");
	this.shape_108.setTransform(148.1,162.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_109.setTransform(135.4,162.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#333333").s().p("AguA4IAAgVIAGAAQAGAAABgBIADgCIAAgIIAAgwIgQAAIAAgWQASgBATgIIAKAAIAAAQQAIgJAHgDQAGgEAGAAQAFAAAFACQAEADACAEQADAGAAAEQAAAIgFAFQgEAGgJgBIgDAAIgIgCIgEgBQgDAAgHAEIAAApQAAAGABACQAAAAABAAQAAABAAAAQAAAAABABQAAAAABAAIAIABIAFAAIAAAVg");
	this.shape_110.setTransform(124.8,162.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_111.setTransform(112.7,162.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#333333").s().p("Ag+BRIAAgWIAEAAIAJgBIADgCIABgIIAAhhIgRAAIAAgVIAUgEQAJgCAIgDIAKAAIAAAMQANgIAFgCQAHgCAIAAQATAAAMAOQAOAQAAAZQgBAYgLAPQgOATgYAAQgHAAgGgCIgKgFIAAAVIAAAIIACACIAIABIAFAAIAAAWgAgKgtIAAAjQAAAJABADQABADAEACQAEADAEAAQAJgBAGgHQAGgIAAgRQAAgPgFgIQgFgHgHAAQgIAAgKAIg");
	this.shape_112.setTransform(99,164.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#333333").s().p("AghBQIAAgVIAEAAQAHAAACgBIADgCIABgIIAAhhIgRAAIAAgVQAUgBATgIIAMAAIAAB/IAAAHQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQACABAHAAIAEAAIAAAVg");
	this.shape_113.setTransform(452,132.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_114.setTransform(441.5,134.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_115.setTransform(421.6,134.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_116.setTransform(409.3,134.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#333333").s().p("AAEA4IAAgVIAIgBQABAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAQABgCAAgGIAAgmQAAgIgBgDQgDgEgGAAQgFAAgEACQgFACgJAHIAAAqQgBAIACABQABACAHAAIADAAIAAAVIhAAAIAAgVIAEAAQAHAAACgBIADgCIAAgHIAAgyIgQAAIAAgVQAUgCARgHIAKAAIAAAPQAMgIAJgEQAIgDAKAAQAKAAAJAFQAHAEAEAHQAEAHAAAMIAAAsIABAIIACACIAIABIAFAAIAAAVg");
	this.shape_117.setTransform(387.8,134.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_118.setTransform(373.5,134.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_119.setTransform(363.1,132.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#333333").s().p("AgfA2QgHgDgFgEQgEgEgCgGQgCgGAAgJIAAgsIgBgIIgCgCIgIgBIgGAAIAAgVIA0gBIAABGIAAAKQABACADACQACABAEAAQAFAAAGgCIAMgIIAAgqIAAgHIgDgDIgGgBIgHAAIAAgVIA0gBIAABNIAAAIQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAQABABAGAAIAGAAIAAAVIgwABIAAgNQgKAHgJAEQgJADgKAAQgIAAgGgCg");
	this.shape_120.setTransform(351.5,135);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#333333").s().p("AgDBQIAAgVIAEAAIAJgBIACgBQABgCAAgGIAAgZQgJAGgGACQgHACgIAAQgTAAgMgOQgPgSAAgYQAAgQAHgNQAGgOAMgHQALgIANABQAIAAAGACQAIADAKAGIAGgIIAXAAIAAB8QAAAGABACIADACIAIABIAFAAIAAAVgAgPgzQgFADgCAGQgDAJAAALQAAAKADAHQACAGAFADQAFAEAEAAIAJgCIAKgFIAAgkQAAgJgCgDQgBgDgFgCQgEgEgFAAQgGAAgFAFg");
	this.shape_121.setTransform(337.5,137.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#333333").s().p("AAYA2QgGgEgFgGQgLAHgIADQgJADgIAAQgQAAgKgJQgJgJAAgNQgBgHAEgGQADgGAHgFQAGgDAPgEQANgDATgCIAAgIIgBgKQgBgDgDgBQgDgCgEAAIgHABIgEADIgFAHQgDAHgEADQgEADgGAAQgGAAgFgFQgFgEAAgGQAAgIAFgFQAGgIAMgFQANgFAOAAQAPAAALAFQAKAFAFAHQADAHAAAOIAAAmQAAAHABACQABABAAAAQAAABAAAAQABABAAAAQABAAAAABQADABADAAIAIgBIAAAVQgJADgJAAQgJAAgIgDgAgMAMQgFACgDADQgCADAAADQAAAFADADQADADAGAAQAEAAAEgCIAKgGIAAgTQgOACgGADg");
	this.shape_122.setTransform(316.3,134.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#333333").s().p("AgFBIQgIgDgFgFQgGgEgCgGQgCgFAAgLIAAgzIgRAAIAAgVQAJgCAGgGQAHgFAEgHQADgHACgMIAUAAIAAAmIAjAAIAAAWIgjAAIAAAmQAAAMABAFQACADADACQAFADAGAAQAMAAALgHIAAAXQgKAEgHACQgIACgJAAQgKAAgHgCg");
	this.shape_123.setTransform(304.5,133.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_124.setTransform(293.5,134.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_125.setTransform(281.2,134.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#333333").s().p("AgFBIQgIgDgFgFQgGgEgCgGQgCgFAAgLIAAgzIgRAAIAAgVQAJgCAGgGQAHgFAEgHQADgHACgMIAUAAIAAAmIAjAAIAAAWIgjAAIAAAmQAAAMABAFQACADADACQAFADAGAAQAMAAALgHIAAAXQgKAEgHACQgIACgJAAQgKAAgHgCg");
	this.shape_126.setTransform(269.5,133.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#333333").s().p("AAEA4IAAgVIAJgBQAAAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAQABgCAAgGIAAgmQAAgIgCgDQgDgEgFAAQgFAAgEACQgGACgIAHIAAAqQAAAIABABQABACAHAAIADAAIAAAVIg/AAIAAgVIACAAQAIAAACgBIADgCIABgHIAAgyIgQAAIAAgVQATgCARgHIAKAAIAAAPQANgIAIgEQAJgDAIAAQALAAAJAFQAHAEAEAHQAEAHAAAMIAAAsIAAAIIAEACIAHABIAFAAIAAAVg");
	this.shape_127.setTransform(257,134.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAOgHQAPgIARAAQASAAAOAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgcAAgQgQgAgKgcQgGADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgGgJQgHgIgKAAQgFAAgFAEg");
	this.shape_128.setTransform(242.2,134.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#333333").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_129.setTransform(228.8,134.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_130.setTransform(208.8,134.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#333333").s().p("AAZA2QgHgEgGgGQgKAHgIADQgJADgJAAQgPAAgKgJQgKgJAAgNQAAgHAEgGQADgGAHgFQAHgDANgEQAOgDATgCIAAgIIgBgKQgCgDgDgBQgCgCgFAAIgGABIgFADIgEAHQgCAHgFADQgEADgFAAQgIAAgEgFQgEgEgBgGQABgIAEgFQAGgIANgFQALgFAQAAQAOAAAKAFQALAFAEAHQAEAHABAOIAAAmQAAAHABACQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQADABAEAAIAIgBIAAAVQgKADgIAAQgLAAgGgDgAgLAMQgGACgCADQgDADAAADQAAAFADADQADADAGAAQADAAAGgCIAJgGIAAgTQgOACgFADg");
	this.shape_131.setTransform(196.6,134.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#333333").s().p("AgFBIQgIgDgFgFQgGgEgCgGQgCgFAAgLIAAgzIgRAAIAAgVQAJgCAGgGQAHgFAEgHQADgHACgMIAUAAIAAAmIAjAAIAAAWIgjAAIAAAmQAAAMABAFQACADADACQAFADAGAAQAMAAALgHIAAAXQgKAEgHACQgIACgJAAQgKAAgHgCg");
	this.shape_132.setTransform(184.8,133.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#333333").s().p("AguA4IAAgVIAGAAQAGAAABgBIADgCIAAgIIAAgxIgQAAIAAgVQASgBATgIIAKAAIAAAQQAIgJAHgEQAGgDAGAAQAFAAAFACQAEADACAEQADAFAAAFQAAAIgFAFQgEAGgJgBIgDAAIgIgCIgEgBQgDAAgHAEIAAApQAAAGABACQAAAAABAAQAAABAAAAQAAAAABABQAAAAABAAIAIABIAFAAIAAAVg");
	this.shape_133.setTransform(175,134.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_134.setTransform(162.9,134.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCQABgCAAgEIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_135.setTransform(152.5,132.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#333333").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_136.setTransform(141.9,134.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#333333").s().p("AAYA2QgHgEgEgGQgLAHgIADQgJADgIAAQgQAAgKgJQgJgJAAgNQgBgHAEgGQADgGAHgFQAGgDAOgEQAOgDATgCIAAgIIgBgKQgCgDgCgBQgDgCgEAAIgHABIgFADIgEAHQgDAHgEADQgEADgGAAQgGAAgFgFQgFgEAAgGQAAgIAFgFQAGgIANgFQAMgFAPAAQAOAAALAFQAKAFAEAHQAFAHAAAOIAAAmQAAAHAAACQABABAAAAQAAABAAAAQABABAAAAQABAAAAABQADABADAAIAJgBIAAAVQgKADgIAAQgKAAgIgDgAgLAMQgGACgCADQgDADAAADQAAAFADADQADADAGAAQAEAAAEgCIAKgGIAAgTQgOACgFADg");
	this.shape_137.setTransform(129,134.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#333333").s().p("AghBQIAAgVIAGAAIAIAAIACgCIABgGIAAgzIgRAAIAAgVIARgCIAOgDIAJgFIAKAAIAABQQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQABABAGAAIAGAAIAAAVgAgNgtQgGgGAAgIQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgIAAgFgGg");
	this.shape_138.setTransform(110.9,132.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#333333").s().p("AgNBMQgLgDgLgIIgEALIgRAAIgKg7IAUgFQAHASAQAMQAPAMARAAQAIAAAGgCQAFgCADgDQADgEgBgEQAAgHgGgEQgHgFgPgFIgZgHIgQgGQgJgFgGgEQgFgFgDgHQgEgIAAgJQAAgMAGgKQAIgKANgHQAOgGAQAAQASAAARAKIAEgHIAQAAIAMAzIgUAGQgKgTgNgIQgNgJgOAAQgIAAgGAEQgFAEgBAFQAAAFAGAFQAEAEANAEIAdAIQAYAHAKALQALAMAAAPQAAAUgQAOQgSAPgaAAQgLAAgKgDg");
	this.shape_139.setTransform(99.4,132.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#663300").s().p("AgdANIAAgZIA7AAIAAAZg");
	this.shape_140.setTransform(80.2,134.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#663300").s().p("AgNAPQgHgGAAgJQAAgHAHgGQAFgGAIAAQAJAAAFAGQAGAGABAHQgBAJgGAGQgFAFgJAAQgIAAgFgFg");
	this.shape_141.setTransform(72.4,138.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#663300").s().p("AAnBQIgBgFIhkAAIAAgVQAXgPAigcQAQgNAGgLQAEgIAAgIQAAgKgIgGQgIgHgMAAQgKAAgIAEQgHADgEAHQgEAHAAAHIAAAIIgWACIgBgLQAAgQAIgMQAHgLAQgIQAPgHASAAQARAAAOAGQAOAHAIAKQAHALAAALQAAAMgFAKQgGAMgNAJQgMALgmAXIAkAAQAJAAADgBIAEgDIADgKIABgFIAVAAIgKA4g");
	this.shape_142.setTransform(61.1,132.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#333333").s().p("AgVAxIgDAGIgOAAIgOgkIAVgJQAIAMALAHQAMAHAIAAQAGAAAEgDQADgCAAgDQAAgCgCgDIgLgFIgXgIQgTgHgHgHQgHgHAAgLQAAgOALgJQAMgLATAAQAPAAAMAHIADgEIAOAAIAJAeIgVAIQgGgJgIgGQgJgFgIAAQgGAAgDACQgDACAAADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQACACAHACIAdALIAPAHQAHADAEAGQAEAHAAAIQAAAPgMAJQgNALgUAAQgQAAgNgIg");
	this.shape_143.setTransform(357.9,96);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#333333").s().p("AAYA2QgHgEgFgGQgLAHgHADQgJADgIAAQgQAAgKgJQgJgJAAgNQAAgHADgGQADgGAHgFQAGgDAPgEQANgDATgCIAAgIIgBgKQgBgDgDgBQgDgCgFAAIgGABIgEADIgFAHQgDAHgEADQgEADgGAAQgGAAgFgFQgFgEABgGQgBgIAFgFQAGgIAMgFQAMgFAPAAQAPAAAKAFQALAFAFAHQADAHAAAOIAAAmQAAAHABACQABABAAAAQAAABAAAAQABABAAAAQABAAABABQACABADAAIAIgBIAAAVQgJADgJAAQgKAAgHgDgAgMAMQgFACgDADQgCADAAADQAAAFADADQADADAGAAQADAAAFgCIAKgGIAAgTQgNACgHADg");
	this.shape_144.setTransform(345.7,95.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#333333").s().p("AgFBHQgIgCgFgFQgGgFgCgFQgCgFAAgLIAAgyIgRAAIAAgWQAJgCAGgGQAHgFAEgHQADgIACgLIAUAAIAAAlIAjAAIAAAYIgjAAIAAAlQAAAMABAFQACADADACQAFADAGAAQAMAAALgHIAAAXQgKAEgHACQgIACgJAAQgKAAgHgDg");
	this.shape_145.setTransform(333.9,94.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#333333").s().p("AguA4IAAgVIAGAAQAGAAABgBIADgCIAAgIIAAgwIgQAAIAAgWQASgBATgIIAKAAIAAAQQAIgJAHgDQAGgEAGAAQAFAAAFADQAEACACAEQADAGAAAEQAAAIgFAFQgEAGgJgBIgDAAIgIgCIgEgBQgDAAgHAEIAAApQAAAGABACQAAAAABAAQAAABAAAAQAAAAABABQAAAAABAAIAIABIAFAAIAAAVg");
	this.shape_146.setTransform(324,95.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#333333").s().p("AAYA2QgHgEgEgGQgLAHgIADQgJADgIAAQgQAAgKgJQgJgJAAgNQgBgHAEgGQADgGAHgFQAGgDAOgEQAOgDATgCIAAgIIgBgKQgCgDgCgBQgDgCgEAAIgHABIgFADIgEAHQgDAHgEADQgEADgGAAQgGAAgFgFQgFgEAAgGQAAgIAFgFQAGgIANgFQAMgFAPAAQAOAAALAFQAKAFAEAHQAFAHAAAOIAAAmQAAAHABACQAAABAAAAQAAABAAAAQABABAAAAQABAAAAABQADABADAAIAJgBIAAAVQgKADgIAAQgKAAgIgDgAgLAMQgGACgDADQgCADAAADQAAAFADADQADADAGAAQAEAAAFgCIAJgGIAAgTQgOACgFADg");
	this.shape_147.setTransform(312.1,95.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#333333").s().p("AgoApQgRgRAAgXQAAgPAIgOQAIgNAOgIQAOgHARAAQAXAAAOAKQAOALAAALQAAAFgCAEQgCAEgFADQgEACgFAAQgEAAgEgCQgDgBgCgDIgEgHIgGgJIgEgEIgHgBQgEAAgFAEQgGADgDAIQgDAHAAAKQAAAJAEAIQAEAIAGAEQAGAEAIAAQAHAAAIgEQAIgEAJgLIAQAPQgNAPgOAHQgOAHgQAAQgYAAgRgQg");
	this.shape_148.setTransform(299.1,96);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_149.setTransform(278.4,96);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#333333").s().p("AgnBLQgKgHgIgOQgGgNAAgQQAAgRAHgNQAHgNAKgHQALgHAOAAQAHAAAHACQAFABAIAFIAAgaIgPAAIAAgVQANgBAIgCQAJgDAJgDIAKAAIAAB9QAAAIABACIACACQACABAHAAIAFAAIAAAVIgvACIAAgLQgLAGgGADQgIACgIAAQgMAAgLgGgAgPgEQgFADgDAHQgCAHAAALQAAAPAGAJQAGAIAIgBIAGgBIAMgHIAAgkQAAgHgCgDQgBgCgEgEQgFgDgFAAQgGAAgFAEg");
	this.shape_150.setTransform(264.9,93.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#333333").s().p("AguA4IAAgVIAGAAQAGAAABgBIADgCIAAgIIAAgwIgQAAIAAgWQASgBATgIIAKAAIAAAQQAIgJAHgDQAGgEAGAAQAFAAAFADQAEACACAEQADAGAAAEQAAAIgFAFQgEAGgJgBIgDAAIgIgCIgEgBQgDAAgHAEIAAApQAAAGABACQAAAAABAAQAAABAAAAQAAAAABABQAAAAABAAIAIABIAFAAIAAAVg");
	this.shape_151.setTransform(245.2,95.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#333333").s().p("AAZA2QgIgEgEgGQgLAHgIADQgJADgJAAQgPAAgKgJQgKgJABgNQAAgHADgGQAEgGAGgFQAGgDAOgEQAOgDATgCIAAgIIgBgKQgBgDgEgBQgCgCgEAAIgHABIgFADIgEAHQgDAHgEADQgEADgGAAQgGAAgFgFQgEgEgBgGQABgIAEgFQAGgIANgFQAMgFAPAAQAOAAALAFQAKAFAEAHQAFAHAAAOIAAAmQAAAHABACQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQADABAEAAIAIgBIAAAVQgKADgIAAQgLAAgGgDgAgLAMQgGACgCADQgDADAAADQAAAFADADQAEADAFAAQAEAAAFgCIAJgGIAAgTQgOACgFADg");
	this.shape_152.setTransform(233.3,95.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#333333").s().p("Ag9BRIAAgWIADAAIAJgBIACgCQACgCAAgGIAAhhIgQAAIAAgVIATgEQAJgCAIgDIALAAIAAAMQAMgIAFgCQAHgDAIABQATAAAMAOQAOAQAAAZQAAAYgNAPQgNATgYAAQgHAAgFgCIgMgFIAAAVIABAIIADACIAHABIAFAAIAAAWgAgLgtIAAAkQAAAIACADQABADAEADQAEACAEAAQAKgBAFgHQAGgIAAgRQAAgPgFgHQgFgIgHAAQgIAAgLAIg");
	this.shape_153.setTransform(219.4,98.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#333333").s().p("AAFA4IAAgVIAIgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgCAAgGIAAgmQAAgJgBgBQgDgFgGAAQgEAAgFACQgFADgKAGIAAAqQABAIABABQACACAFAAIAEAAIAAAVIg/AAIAAgVIADAAQAHAAACgBIADgCIAAgHIAAgxIgPAAIAAgWQATgCARgHIALAAIAAAPQALgIAJgDQAIgEAJAAQALAAAIAFQAJAEADAHQAEAGAAANIAAAsIABAIIACACIAIABIAGAAIAAAVg");
	this.shape_154.setTransform(197.3,95.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#333333").s().p("AgfA2QgHgDgFgEQgEgEgCgGQgCgGAAgJIAAgsIgBgIIgCgCIgIgBIgGAAIAAgVIA0gBIAABGIAAAKQABACADACQACABAEAAQAFAAAGgCIAMgIIAAgqIAAgHIgDgDIgGgBIgHAAIAAgVIA0gBIAABNIAAAIQAAAAABAAQAAABAAAAQAAAAABAAQAAABABAAQABABAGAAIAGAAIAAAVIgwABIAAgNQgKAHgJAEQgJADgKAAQgIAAgGgCg");
	this.shape_155.setTransform(182,96.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#333333").s().p("AAYA2QgGgEgFgGQgLAHgIADQgJADgIAAQgQAAgKgJQgJgJAAgNQAAgHADgGQADgGAHgFQAGgDAPgEQANgDATgCIAAgIIgBgKQgBgDgDgBQgDgCgEAAIgHABIgEADIgFAHQgDAHgEADQgEADgGAAQgGAAgFgFQgFgEABgGQgBgIAFgFQAGgIAMgFQANgFAOAAQAPAAAKAFQALAFAFAHQADAHAAAOIAAAmQAAAHABACQABABAAAAQAAABAAAAQABABAAAAQABAAABABQACABADAAIAIgBIAAAVQgJADgJAAQgKAAgHgDgAgMAMQgFACgDADQgCADAAADQAAAFADADQADADAGAAQAEAAAEgCIAKgGIAAgTQgNACgHADg");
	this.shape_156.setTransform(160.7,95.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#333333").s().p("AgnApQgRgRAAgYQAAgPAHgNQAIgNAOgIQANgHAQAAQALAAAJADQAJADAHAGQAHAGAEAJQAEAIABAJIABANIhJAAQABAOAIAJQAIAIAKAAQAHAAAJgEQAJgFAIgJIAPAPQgNAPgNAHQgOAGgPAAQgYAAgRgQgAgGghQgEADgCAEQgDAEgBAGIAkAAQgBgHgCgEQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_157.setTransform(147.5,96);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#333333").s().p("AgFBHQgIgCgFgFQgGgFgCgFQgCgFAAgLIAAgyIgRAAIAAgWQAJgCAGgGQAHgFAEgHQADgIACgLIAUAAIAAAlIAjAAIAAAYIgjAAIAAAlQAAAMABAFQACADADACQAFADAGAAQAMAAALgHIAAAXQgKAEgHACQgIACgJAAQgKAAgHgDg");
	this.shape_158.setTransform(135.9,94.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#333333").s().p("AghBQIAAgVIAEAAQAHAAACgBIADgCIABgIIAAhhIgRAAIAAgVQAUgBATgIIAMAAIAAB/IAAAHQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQACABAHAAIAEAAIAAAVg");
	this.shape_159.setTransform(127.1,93.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#333333").s().p("AgsApQgQgPAAgaQAAgQAHgNQAHgMAOgHQAPgIARAAQASAAAOAHQAOAIAHAMQAIANAAAQQAAAZgRAQQgQAQgcAAQgcAAgQgQgAgKgcQgGADgDAIQgDAHAAAKQAAALADAIQADAIAFADQAFAEAGAAQAJAAAHgIQAHgJAAgRQAAgPgGgJQgHgIgKAAQgFAAgFAEg");
	this.shape_160.setTransform(116.2,96);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#333333").s().p("AgQBMIguh1IgFgJIgEgDIgIgBIAAgVIBIAAIAAAVIgCAAIgJAAQgBAAAAABQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQAAABAAAAQgBABAAAAIADAKIAaBLIAdhNIACgIQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQgCgBgHAAIgFAAIAAgVIA8AAIAAAVQgIAAgCABQgEADgEAKIgtB0g");
	this.shape_161.setTransform(101.1,93.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#663300").s().p("AgdANIAAgZIA7AAIAAAZg");
	this.shape_162.setTransform(81.4,95.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#663300").s().p("AgNAPQgHgGAAgJQAAgHAHgGQAFgGAIAAQAIAAAHAGQAFAGABAHQgBAJgFAGQgHAFgIAAQgIAAgFgFg");
	this.shape_163.setTransform(73.6,99.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#663300").s().p("AguBNIAAgUIAPAAQAJAAACgBIADgEQACgDAAgHIAAhUIgfAAIAAgWIAUgDIAWgFIAMgFIAKAAIAAB3QAAAHABACQAAABABABQAAAAABABQAAAAABAAQAAABABAAQACABAHABIAPAAIAAAUg");
	this.shape_164.setTransform(62.9,93.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.jugar_btn},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 4
	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("rgba(51,0,0,0.349)").s().p("AjeCAQANiNAmgsQAlgsC5hTQBdgqBWghQiFETiwCWQg3Avg1AcIgqATQAAg+AHhGg");
	this.shape_165.setTransform(553.1,332.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_165).wait(1));

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
	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(0,0,0,0.498)").s().p("EgsvAbQQgyAAAAgyMAAAg07QAAgyAyAAMBZfAAAQAyAAAAAyMAAAAt9Qg6BshPBuQiEC3iHBfg");
	this.shape_166.setTransform(272.7,195.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_166).wait(1));

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
	this.x18.setTransform(99.9,130.8,1,1,0,0,0,18.9,20.3);

	this.x17 = new lib.x();
	this.x17.parent = this;
	this.x17.setTransform(66.5,130.8,1,1,0,0,0,18.9,20.3);

	this.x16 = new lib.x();
	this.x16.parent = this;
	this.x16.setTransform(32.4,130.8,1,1,0,0,0,18.9,20.3);

	this.x15 = new lib.x();
	this.x15.parent = this;
	this.x15.setTransform(132,100.2,1,1,0,0,0,18.9,20.3);

	this.x14 = new lib.x();
	this.x14.parent = this;
	this.x14.setTransform(99.9,100.2,1,1,0,0,0,18.9,20.3);

	this.x13 = new lib.x();
	this.x13.parent = this;
	this.x13.setTransform(65.8,100.2,1,1,0,0,0,18.9,20.3);

	this.x12 = new lib.x();
	this.x12.parent = this;
	this.x12.setTransform(32.4,100.2,1,1,0,0,0,18.9,20.3);

	this.x11 = new lib.x();
	this.x11.parent = this;
	this.x11.setTransform(-0.4,100.2,1,1,0,0,0,18.9,20.3);

	this.x10 = new lib.x();
	this.x10.parent = this;
	this.x10.setTransform(132,70.8,1,1,0,0,0,18.9,20.3);

	this.x9 = new lib.x();
	this.x9.parent = this;
	this.x9.setTransform(99.9,70.8,1,1,0,0,0,18.9,20.3);

	this.x8 = new lib.x();
	this.x8.parent = this;
	this.x8.setTransform(65.8,70.8,1,1,0,0,0,18.9,20.3);

	this.x7 = new lib.x();
	this.x7.parent = this;
	this.x7.setTransform(32.4,70.8,1,1,0,0,0,18.9,20.3);

	this.x6 = new lib.x();
	this.x6.parent = this;
	this.x6.setTransform(-0.4,70.8,1,1,0,0,0,18.9,20.3);

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

}).prototype = getMCSymbolPrototype(lib.espantosax, new cjs.Rectangle(-16.1,17.9,160,121.3), null);


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
	this.frame_20 = function() {
		if (huerta1 == 1 && villa1 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.villa1_mc.gotoAndStop(0)
		} else if (huerta1 == 1 && villa2 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.villa2_mc.gotoAndStop(0)
		} else if (huerta1 == 1 && madero1 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.madero1_mc.gotoAndStop(0)
		} else if (huerta1 == 1 && madero2 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.madero2_mc.gotoAndStop(0)
		} else if (huerta1 == 1 && diaz1 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.diaz1_mc.gotoAndStop(0)
		} else if (huerta1 == 1 && diaz2 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.diaz2_mc.gotoAndStop(0)
		} else if (huerta1 == 1 && ana1 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
		} else if (huerta1 == 1 && ana2 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
		} else if (huerta1 == 1 && moctezuma1 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
		} else if (huerta1 == 1 && moctezuma2 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
		} else if (huerta1 == 1 && obregon1 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.obregon1_mc.gotoAndStop(0)
		} else if (huerta1 == 1 && obregon2 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.obregon2_mc.gotoAndStop(0)
		} else if (huerta1 == 1 && victoria1 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.victoria1_mc.gotoAndStop(0)
		} else if (huerta1 == 1 && victoria2 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.victoria2_mc.gotoAndStop(0)
		} else if (huerta1 == 1 && iturbide1 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
		} else if (huerta1 == 1 && iturbide2 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
		} else if (huerta1 == 1 && morelos1 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.morelos1_mc.gotoAndStop(0)
		} else if (huerta1 == 1 && morelos2 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.morelos2_mc.gotoAndStop(0)
		} else if (huerta1 == 1 && hidalgo1 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
		} else if (huerta1 == 1 && hidalgo2 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
		} else if (huerta2 == 1 && villa2 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.villa2_mc.gotoAndStop(0)
		} else if (huerta1 == 1 && zapata1 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.zapata1_mc.gotoAndStop(0)
		} else if (huerta1 == 1 && zapata2 == 1) {
			raiz.memorama.huerta1_mc.gotoAndStop(0)
			raiz.memorama.zapata2_mc.gotoAndStop(0)
		} else if (huerta2 == 1 && villa1 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.villa1_mc.gotoAndStop(0)
		} else if (huerta2 == 1 && madero1 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.madero1_mc.gotoAndStop(0)
		} else if (huerta2 == 1 && madero2 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.madero2_mc.gotoAndStop(0)
		} else if (huerta2 == 1 && diaz1 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.diaz1_mc.gotoAndStop(0)
		} else if (huerta2 == 1 && diaz2 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.diaz2_mc.gotoAndStop(0)
		} else if (huerta2 == 1 && ana1 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
		} else if (huerta2 == 1 && ana2 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
		} else if (huerta2 == 1 && moctezuma1 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
		} else if (huerta2 == 1 && moctezuma2 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
		} else if (huerta2 == 1 && obregon1 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.obregon1_mc.gotoAndStop(0)
		} else if (huerta2 == 1 && obregon2 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.obregon2_mc.gotoAndStop(0)
		} else if (huerta2 == 1 && victoria1 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.victoria1_mc.gotoAndStop(0)
		} else if (huerta2 == 1 && victoria2 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.victoria2_mc.gotoAndStop(0)
		} else if (huerta2 == 1 && iturbide1 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
		} else if (huerta2 == 1 && iturbide2 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
		} else if (huerta2 == 1 && morelos1 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.morelos1_mc.gotoAndStop(0)
		} else if (huerta2 == 1 && morelos2 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.morelos2_mc.gotoAndStop(0)
		} else if (huerta2 == 1 && hidalgo1 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
		} else if (huerta2 == 1 && hidalgo2 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
		} else if (huerta2 == 1 && zapata1 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.zapata1_mc.gotoAndStop(0)
		} else if (huerta2 == 1 && zapata2 == 1) {
			raiz.memorama.huerta2_mc.gotoAndStop(0)
			raiz.memorama.zapata2_mc.gotoAndStop(0)
		}
		//villa votando 
		else if (villa1 == 1 && madero1 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.villa1_mc.gotoAndStop(0)
		} else if (madero2 == 1 && villa2 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.villa2_mc.gotoAndStop(0)
		} else if (villa1 == 1 && madero1 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.madero1_mc.gotoAndStop(0)
		} else if (villa1 == 1 && madero2 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.madero2_mc.gotoAndStop(0)
		} else if (villa1 == 1 && diaz1 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.diaz1_mc.gotoAndStop(0)
		} else if (villa1 == 1 && diaz2 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.diaz2_mc.gotoAndStop(0)
		} else if (villa1 == 1 && ana1 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
		} else if (villa1 == 1 && ana2 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
		} else if (villa1 == 1 && moctezuma1 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
		} else if (villa1 == 1 && moctezuma2 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
		} else if (villa1 == 1 && obregon1 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.obregon1_mc.gotoAndStop(0)
		} else if (villa1 == 1 && obregon2 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.obregon2_mc.gotoAndStop(0)
		} else if (villa1 == 1 && victoria1 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.victoria1_mc.gotoAndStop(0)
		} else if (villa1 == 1 && victoria2 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.victoria2_mc.gotoAndStop(0)
		} else if (villa1 == 1 && iturbide1 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
		} else if (villa1 == 1 && iturbide2 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
		} else if (villa1 == 1 && morelos1 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.morelos1_mc.gotoAndStop(0)
		} else if (villa1 == 1 && morelos2 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.morelos2_mc.gotoAndStop(0)
		} else if (villa1 == 1 && hidalgo1 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
		} else if (villa1 == 1 && hidalgo2 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
		} else if (villa1 == 1 && zapata2 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.zapata2_mc.gotoAndStop(0)
		} else if (villa1 == 1 && zapata1 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.zapata1_mc.gotoAndStop(0)
		} else if (villa2 == 1 && madero1 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.madero1_mc.gotoAndStop(0)
		} else if (villa2 == 1 && madero2 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.madero2_mc.gotoAndStop(0)
		} else if (villa2 == 1 && diaz1 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.diaz1_mc.gotoAndStop(0)
		} else if (villa2 == 1 && diaz2 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.diaz2_mc.gotoAndStop(0)
		} else if (villa2 == 1 && ana1 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
		} else if (villa2 == 1 && ana2 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
		} else if (villa2 == 1 && moctezuma1 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
		} else if (villa2 == 1 && moctezuma2 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
		} else if (villa2 == 1 && obregon1 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.obregon1_mc.gotoAndStop(0)
		} else if (villa2 == 1 && obregon2 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.obregon2_mc.gotoAndStop(0)
		} else if (villa2 == 1 && victoria1 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.victoria1_mc.gotoAndStop(0)
		} else if (villa2 == 1 && victoria2 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.victoria2_mc.gotoAndStop(0)
		} else if (villa2 == 1 && iturbide1 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
		} else if (villa2 == 1 && iturbide2 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
		} else if (villa2 == 1 && morelos1 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.morelos1_mc.gotoAndStop(0)
		} else if (villa2 == 1 && morelos2 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.morelos2_mc.gotoAndStop(0)
		} else if (villa2 == 1 && hidalgo1 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
		} else if (villa2 == 1 && hidalgo2 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
		}else if (villa2 == 1 && zapata1 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.zapata1_mc.gotoAndStop(0)
		}else if (villa2 == 1 && zapata2 == 1) {
			raiz.memorama.villa2_mc.gotoAndStop(0)
			raiz.memorama.zapata2_mc.gotoAndStop(0)
		}
		
		//votando maderoo 1
		else if (madero2 == 1 && villa2 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.villa2_mc.gotoAndStop(0)
		} else if (villa1 == 1 && madero1 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.madero1_mc.gotoAndStop(0)
		} else if (villa1 == 1 && madero2 == 1) {
			raiz.memorama.villa1_mc.gotoAndStop(0)
			raiz.memorama.madero2_mc.gotoAndStop(0)
		} else if (madero1 == 1 && diaz1 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.diaz1_mc.gotoAndStop(0)
		} else if (madero1 == 1 && diaz2 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.diaz2_mc.gotoAndStop(0)
		} else if (madero1 == 1 && ana1 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
		} else if (madero1 == 1 && ana2 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
		} else if (madero1 == 1 && moctezuma1 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
		} else if (madero1 == 1 && moctezuma2 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
		} else if (madero1 == 1 && obregon1 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.obregon1_mc.gotoAndStop(0)
		} else if (madero1 == 1 && obregon2 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.obregon2_mc.gotoAndStop(0)
		} else if (madero1 == 1 && victoria1 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.victoria1_mc.gotoAndStop(0)
		} else if (madero1 == 1 && victoria2 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.victoria2_mc.gotoAndStop(0)
		} else if (madero1 == 1 && iturbide1 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
		} else if (madero1 == 1 && iturbide2 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
		} else if (madero1 == 1 && morelos1 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.morelos1_mc.gotoAndStop(0)
		} else if (madero1 == 1 && morelos2 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.morelos2_mc.gotoAndStop(0)
		} else if (madero1 == 1 && hidalgo1 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
		} else if (madero1 == 1 && hidalgo2 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
		
		} else if (madero1 == 1 && zapata1 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.zapata1_mc.gotoAndStop(0)
		} else if (madero2 == 1 && zapata2 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.zapata2_mc.gotoAndStop(0)
		} else if (madero2 == 1 && zapata1 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.zapata1_mc.gotoAndStop(0)
		} else if (madero1 == 1 && zapata2 == 1) {
			raiz.memorama.madero1_mc.gotoAndStop(0)
			raiz.memorama.zapata2_mc.gotoAndStop(0)
		} else if (madero2 == 1 && diaz1 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.diaz1_mc.gotoAndStop(0)
		} else if (madero2 == 1 && diaz2 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.diaz2_mc.gotoAndStop(0)
		} else if (madero2 == 1 && ana1 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
		} else if (madero2 == 1 && ana2 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
		} else if (madero2 == 1 && moctezuma1 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
		} else if (madero2 == 1 && moctezuma2 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
		} else if (madero2 == 1 && obregon1 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.obregon1_mc.gotoAndStop(0)
		} else if (madero2 == 1 && obregon2 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.obregon2_mc.gotoAndStop(0)
		} else if (madero2 == 1 && victoria1 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.victoria1_mc.gotoAndStop(0)
		} else if (madero2 == 1 && victoria2 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.victoria2_mc.gotoAndStop(0)
		} else if (madero2 == 1 && iturbide1 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
		} else if (madero2 == 1 && iturbide2 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
		} else if (madero2 == 1 && morelos1 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.morelos1_mc.gotoAndStop(0)
		} else if (madero2 == 1 && morelos2 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.morelos2_mc.gotoAndStop(0)
		} else if (madero2 == 1 && hidalgo1 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
		} else if (madero2 == 1 && hidalgo2 == 1) {
			raiz.memorama.madero2_mc.gotoAndStop(0)
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
		}
		
		 else if (diaz2 == 1 && zapata1 == 1) {
			alert("Diaz 2 y zapata")
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.zapata1_mc.gotoAndStop(0)
		} else if (diaz2 == 1 && zapata2 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.zapata2_mc.gotoAndStop(0)
		} else if (diaz1 == 1 && zapata1 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.zapata1_mc.gotoAndStop(0)
		} else if (diaz1 == 1 && zapata2 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.zapata2_mc.gotoAndStop(0)
		} else if (diaz2 == 1 && iturbide1 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
		} else if (diaz2 == 1 && iturbide2 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
		} else if (diaz2 == 1 && morelos1 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.morelos1_mc.gotoAndStop(0)
		} else if (diaz2 == 1 && morelos2 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.morelos2_mc.gotoAndStop(0)
		} else if (diaz2 == 1 && obregon1 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.obregon1_mc.gotoAndStop(0)
		} else if (diaz2 == 1 && obregon2 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.obregon2_mc.gotoAndStop(0)
		} else if (diaz2 == 1 && victoria1 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.victoria1_mc.gotoAndStop(0)
		} else if (diaz2 == 1 && victoria2 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.victoria2_mc.gotoAndStop(0)
		}else if (diaz2 == 1 && ana1 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
		} else if (diaz2 == 1 && ana2 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
		} else if (diaz2 == 1 && moctezuma1 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
		} else if (diaz2 == 1 && moctezuma2 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
		}  else if (diaz1 == 1 && hidalgo1 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
		} else if (diaz1 == 1 && hidalgo2 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
		} else if (diaz2 == 1 && madero1 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.madero1_mc.gotoAndStop(0)
		} else if (diaz2 == 1 && madero2 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.madero2_mc.gotoAndStop(0)
		} else if (diaz1 == 1 && iturbide1 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
		} else if (diaz1 == 1 && iturbide2 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
		} else if (diaz1 == 1 && morelos1 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.morelos1_mc.gotoAndStop(0)
		} else if (diaz1 == 1 && morelos2 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.morelos2_mc.gotoAndStop(0)
		}else if (diaz1 == 1 && obregon1 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.obregon1_mc.gotoAndStop(0)
		} else if (diaz1 == 1 && obregon2 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.obregon2_mc.gotoAndStop(0)
		} else if (diaz1 == 1 && victoria1 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.victoria1_mc.gotoAndStop(0)
		} else if (diaz1 == 1 && victoria2 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.victoria2_mc.gotoAndStop(0)
		} else if (diaz1 == 1 && ana1 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
		} else if (diaz1 == 1 && ana2 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
		} else if (diaz1 == 1 && moctezuma1 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
		} else if (diaz1 == 1 && moctezuma2 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
		} else if (diaz1 == 1 && villa2 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.villa2_mc.gotoAndStop(0)
		} else if (diaz1 == 1 && madero1 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.madero1_mc.gotoAndStop(0)
		} else if (diaz1 == 1 && madero2 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.madero2_mc.gotoAndStop(0)
		}  else if (diaz1 == 1 && hidalgo1 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
		} else if (diaz1 == 1 && hidalgo2 == 1) {
			raiz.memorama.diaz1_mc.gotoAndStop(0)
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
		} else if (diaz2 == 1 && hidalgo1 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
		} else if (diaz2 == 1 && hidalgo2 == 1) {
			raiz.memorama.diaz2_mc.gotoAndStop(0)
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
		} 
		
		//votar hidalgo
		
		else if (hidalgo2 == 1 && zapata1 == 1) {
			alert("Diaz 2 y zapata")
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			raiz.memorama.zapata1_mc.gotoAndStop(0)
		} else if (hidalgo2 == 1 && zapata2 == 1) {
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			raiz.memorama.zapata2_mc.gotoAndStop(0)
		} else if (hidalgo1 == 1 && zapata1 == 1) {
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			raiz.memorama.zapata1_mc.gotoAndStop(0)
		} else if (hidalgo1 == 1 && zapata2 == 1) {
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			raiz.memorama.zapata2_mc.gotoAndStop(0)
		} else if (hidalgo2 == 1 && iturbide1 == 1) {
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
		} else if (hidalgo2 == 1 && iturbide2 == 1) {
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
		} else if (hidalgo2 == 1 && morelos1 == 1) {
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			raiz.memorama.morelos1_mc.gotoAndStop(0)
		} else if (hidalgo2 == 1 && morelos2 == 1) {
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			raiz.memorama.morelos2_mc.gotoAndStop(0)
		} else if (hidalgo2 == 1 && obregon1 == 1) {
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			raiz.memorama.obregon1_mc.gotoAndStop(0)
		} else if (hidalgo2 == 1 && obregon2 == 1) {
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			raiz.memorama.obregon2_mc.gotoAndStop(0)
		} else if (hidalgo2 == 1 && victoria1 == 1) {
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			raiz.memorama.victoria1_mc.gotoAndStop(0)
		} else if (hidalgo2 == 1 && victoria2 == 1) {
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			raiz.memorama.victoria2_mc.gotoAndStop(0)
		}else if (hidalgo2 == 1 && ana1 == 1) {
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
		} else if (hidalgo2 == 1 && ana2 == 1) {
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
		} else if (hidalgo2 == 1 && moctezuma1 == 1) {
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
		} else if (hidalgo2 == 1 && moctezuma2 == 1) {
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
		} else if (hidalgo2 == 1 && madero1 == 1) {
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			raiz.memorama.madero1_mc.gotoAndStop(0)
		} else if (hidalgo2 == 1 && madero2 == 1) {
			raiz.memorama.hidalgo2_mc.gotoAndStop(0)
			raiz.memorama.madero2_mc.gotoAndStop(0)
		} else if (hidalgo1 == 1 && iturbide1 == 1) {
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
		} else if (hidalgo1 == 1 && iturbide2 == 1) {
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
		} else if (hidalgo1 == 1 && morelos1 == 1) {
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			raiz.memorama.morelos1_mc.gotoAndStop(0)
		} else if (hidalgo1 == 1 && morelos2 == 1) {
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			raiz.memorama.morelos2_mc.gotoAndStop(0)
		}else if (hidalgo1 == 1 && obregon1 == 1) {
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			raiz.memorama.obregon1_mc.gotoAndStop(0)
		} else if (hidalgo1 == 1 && obregon2 == 1) {
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			raiz.memorama.obregon2_mc.gotoAndStop(0)
		} else if (hidalgo1 == 1 && victoria1 == 1) {
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			raiz.memorama.victoria1_mc.gotoAndStop(0)
		} else if (hidalgo1 == 1 && victoria2 == 1) {
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			raiz.memorama.victoria2_mc.gotoAndStop(0)
		} else if (hidalgo1 == 1 && ana1 == 1) {
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
		} else if (hidalgo1 == 1 && ana2 == 1) {
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
		} else if (hidalgo1 == 1 && moctezuma1 == 1) {
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
		} else if (hidalgo1 == 1 && moctezuma2 == 1) {
			raiz.memorama.hidalgo1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
		} 
		
		
		//votar zapata
		
		 else if (zapata2 == 1 && iturbide1 == 1) {
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
		} else if (zapata2 == 1 && iturbide2 == 1) {
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
		} else if (zapata2 == 1 && morelos1 == 1) {
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			raiz.memorama.morelos1_mc.gotoAndStop(0)
		} else if (zapata2 == 1 && morelos2 == 1) {
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			raiz.memorama.morelos2_mc.gotoAndStop(0)
		} else if (zapata2 == 1 && obregon1 == 1) {
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			raiz.memorama.obregon1_mc.gotoAndStop(0)
		} else if (zapata2 == 1 && obregon2 == 1) {
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			raiz.memorama.obregon2_mc.gotoAndStop(0)
		} else if (zapata2 == 1 && victoria1 == 1) {
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			raiz.memorama.victoria1_mc.gotoAndStop(0)
		} else if (zapata2 == 1 && victoria2 == 1) {
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			raiz.memorama.victoria2_mc.gotoAndStop(0)
		}else if (zapata2 == 1 && ana1 == 1) {
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
		} else if (zapata2 == 1 && ana2 == 1) {
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
		} else if (zapata2 == 1 && moctezuma1 == 1) {
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
		} else if (zapata2 == 1 && moctezuma2 == 1) {
			raiz.memorama.zapata2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
		} else if (zapata1 == 1 && iturbide1 == 1) {
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
		} else if (zapata1 == 1 && iturbide2 == 1) {
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
		} else if (zapata1 == 1 && morelos1 == 1) {
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			raiz.memorama.morelos1_mc.gotoAndStop(0)
		} else if (zapata1 == 1 && morelos2 == 1) {
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			raiz.memorama.morelos2_mc.gotoAndStop(0)
		}else if (zapata1 == 1 && obregon1 == 1) {
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			raiz.memorama.obregon1_mc.gotoAndStop(0)
		} else if (zapata1 == 1 && obregon2 == 1) {
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			raiz.memorama.obregon2_mc.gotoAndStop(0)
		} else if (zapata1 == 1 && victoria1 == 1) {
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			raiz.memorama.victoria1_mc.gotoAndStop(0)
		} else if (zapata1 == 1 && victoria2 == 1) {
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			raiz.memorama.victoria2_mc.gotoAndStop(0)
		} else if (zapata1 == 1 && ana1 == 1) {
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
		} else if (zapata1 == 1 && ana2 == 1) {
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
		} else if (zapata1 == 1 && moctezuma1 == 1) {
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
		} else if (zapata1 == 1 && moctezuma2 == 1) {
			raiz.memorama.zapata1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
		} 
		
		//votar obregon
		
		 else if (obregon2 == 1 && iturbide1 == 1) {
			raiz.memorama.obregon2_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
		} else if (obregon2 == 1 && iturbide2 == 1) {
			raiz.memorama.obregon2_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
		} else if (obregon2 == 1 && morelos1 == 1) {
			raiz.memorama.obregon2_mc.gotoAndStop(0)
			raiz.memorama.morelos1_mc.gotoAndStop(0)
		} else if (obregon2 == 1 && morelos2 == 1) {
			raiz.memorama.obregon2_mc.gotoAndStop(0)
			raiz.memorama.morelos2_mc.gotoAndStop(0)
		} else if (obregon2 == 1 && victoria1 == 1) {
			raiz.memorama.obregon2_mc.gotoAndStop(0)
			raiz.memorama.victoria1_mc.gotoAndStop(0)
		} else if (obregon2 == 1 && victoria2 == 1) {
			raiz.memorama.obregon2_mc.gotoAndStop(0)
			raiz.memorama.victoria2_mc.gotoAndStop(0)
		}else if (obregon2 == 1 && ana1 == 1) {
			raiz.memorama.obregon2_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
		} else if (obregon2 == 1 && ana2 == 1) {
			raiz.memorama.obregon2_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
		} else if (obregon2 == 1 && moctezuma1 == 1) {
			raiz.memorama.obregon2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
		} else if (obregon2 == 1 && moctezuma2 == 1) {
			raiz.memorama.obregon2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
		} else if (obregon1 == 1 && iturbide1 == 1) {
			raiz.memorama.obregon1_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
		} else if (obregon1 == 1 && iturbide2 == 1) {
			raiz.memorama.obregon1_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
		} else if (obregon1 == 1 && morelos1 == 1) {
			raiz.memorama.obregon1_mc.gotoAndStop(0)
			raiz.memorama.morelos1_mc.gotoAndStop(0)
		} else if (obregon1 == 1 && morelos2 == 1) {
			raiz.memorama.obregon1_mc.gotoAndStop(0)
			raiz.memorama.morelos2_mc.gotoAndStop(0)
		} else if (obregon1 == 1 && victoria1 == 1) {
			raiz.memorama.obregon1_mc.gotoAndStop(0)
			raiz.memorama.victoria1_mc.gotoAndStop(0)
		} else if (obregon1 == 1 && victoria2 == 1) {
			raiz.memorama.obregon1_mc.gotoAndStop(0)
			raiz.memorama.victoria2_mc.gotoAndStop(0)
		} else if (obregon1 == 1 && ana1 == 1) {
			raiz.memorama.obregon1_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
		} else if (obregon1 == 1 && ana2 == 1) {
			raiz.memorama.obregon1_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
		} else if (obregon1 == 1 && moctezuma1 == 1) {
			raiz.memorama.obregon1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
		} else if (obregon1 == 1 && moctezuma2 == 1) {
			raiz.memorama.obregon1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
		} 
		
		//votar morelos
		
		 else if (morelos2 == 1 && iturbide1 == 1) {
			raiz.memorama.morelos2_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
		} else if (morelos2 == 1 && iturbide2 == 1) {
			raiz.memorama.morelos2_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
		} else if (morelos2 == 1 && victoria1 == 1) {
			raiz.memorama.morelos2_mc.gotoAndStop(0)
			raiz.memorama.victoria1_mc.gotoAndStop(0)
		} else if (morelos2 == 1 && victoria2 == 1) {
			raiz.memorama.morelos2_mc.gotoAndStop(0)
			raiz.memorama.victoria2_mc.gotoAndStop(0)
		}else if (morelos2 == 1 && ana1 == 1) {
			raiz.memorama.morelos2_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
		} else if (morelos2 == 1 && ana2 == 1) {
			raiz.memorama.morelos2_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
		} else if (morelos2 == 1 && moctezuma1 == 1) {
			raiz.memorama.morelos2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
		} else if (morelos2 == 1 && moctezuma2 == 1) {
			raiz.memorama.morelos2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
		} else if (morelos1 == 1 && iturbide1 == 1) {
			raiz.memorama.morelos1_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
		} else if (morelos1 == 1 && iturbide2 == 1) {
			raiz.memorama.morelos1_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
		} else if (morelos1 == 1 && victoria1 == 1) {
			raiz.memorama.morelos1_mc.gotoAndStop(0)
			raiz.memorama.victoria1_mc.gotoAndStop(0)
		} else if (morelos1 == 1 && victoria2 == 1) {
			raiz.memorama.morelos1_mc.gotoAndStop(0)
			raiz.memorama.victoria2_mc.gotoAndStop(0)
		} else if (morelos1 == 1 && ana1 == 1) {
			raiz.memorama.morelos1_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
		} else if (morelos1 == 1 && ana2 == 1) {
			raiz.memorama.morelos1_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
		} else if (morelos1 == 1 && moctezuma1 == 1) {
			raiz.memorama.morelos1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
		} else if (morelos1 == 1 && moctezuma2 == 1) {
			raiz.memorama.morelos1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
		} 
		
		//votar victoria
		
		 else if (victoria2 == 1 && iturbide1 == 1) {
			raiz.memorama.victoria2_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
		} else if (victoria2 == 1 && iturbide2 == 1) {
			raiz.memorama.victoria2_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
		}else if (victoria2 == 1 && ana1 == 1) {
			raiz.memorama.victoria2_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
		} else if (victoria2 == 1 && ana2 == 1) {
			raiz.memorama.victoria2_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
		} else if (victoria2 == 1 && moctezuma1 == 1) {
			raiz.memorama.victoria2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
		} else if (victoria2 == 1 && moctezuma2 == 1) {
			raiz.memorama.victoria2_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
		} else if (victoria1 == 1 && iturbide1 == 1) {
			raiz.memorama.victoria1_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
		} else if (victoria1 == 1 && iturbide2 == 1) {
			raiz.memorama.victoria1_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
		} else if (victoria1 == 1 && ana1 == 1) {
			raiz.memorama.victoria1_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
		} else if (victoria1 == 1 && ana2 == 1) {
			raiz.memorama.victoria1_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
		} else if (victoria1 == 1 && moctezuma1 == 1) {
			raiz.memorama.victoria1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
		} else if (victoria1 == 1 && moctezuma2 == 1) {
			raiz.memorama.victoria1_mc.gotoAndStop(0)
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
		} 
		
		//votar victoria
		
		 else if (moctezuma2 == 1 && iturbide1 == 1) {
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
		} else if (moctezuma2 == 1 && iturbide2 == 1) {
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
		}else if (moctezuma2 == 1 && ana1 == 1) {
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
		} else if (moctezuma2 == 1 && ana2 == 1) {
			raiz.memorama.moctezuma2_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
		} else if (moctezuma1 == 1 && iturbide1 == 1) {
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
		} else if (moctezuma1 == 1 && iturbide2 == 1) {
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
		} else if (moctezuma1 == 1 && ana1 == 1) {
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
			raiz.memorama.ana1_mc.gotoAndStop(0)
		} else if (moctezuma1 == 1 && ana2 == 1) {
			raiz.memorama.moctezuma1_mc.gotoAndStop(0)
			raiz.memorama.ana2_mc.gotoAndStop(0)
		}
		
		//votar ana
		
		 else if (ana2 == 1 && iturbide1 == 1) {
			raiz.memorama.ana2_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
		} else if (ana2 == 1 && iturbide2 == 1) {
			raiz.memorama.ana2_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
		} else if (ana1 == 1 && iturbide1 == 1) {
			raiz.memorama.ana1_mc.gotoAndStop(0)
			raiz.memorama.iturbide1_mc.gotoAndStop(0)
		} else if (ana1 == 1 && iturbide2 == 1) {
			raiz.memorama.ana1_mc.gotoAndStop(0)
			raiz.memorama.iturbide2_mc.gotoAndStop(0)
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(1));

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(507.7,586.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1389,y:577.8},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(460.5,559.2,94.3,53.9);


(lib.ans_vhuerta_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hit5();
	this.instance.parent = this;
	this.instance.setTransform(161.2,24.6,1,1,0,0,0,184.3,22.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.hit5(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.1,1.8,368.5,45.6);


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
			intentos = intentos -1
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
			alert("Huerta")
			if(huerta1 == 3 && huerta2==3 && respuesta == "huerta"){
				alert("Huerta dentrito")
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
		}
		//boton villa 
		this.button_3.addEventListener("click", fl_ClickToGoToAndStopAtFrame_9.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_9()
		{
			alert("Villa")
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
		}
		
		//boton madero 
		this.button_4madero.addEventListener("click", fl_ClickToGoToAndStopAtFrame_10.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_10()
		{
			alert("madero")
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
		}
		
		//boton hidalgo
		this.button_4hidalgo.addEventListener("click", fl_ClickToGoToAndStopAtFrame_11.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_11()
		{
			alert("hidalgo")
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
		}
		
		//boton diaz button_5diaz
		this.button_5diaz.addEventListener("click", fl_ClickToGoToAndStopAtFrame_12.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_12()
		{
			alert("diaz")
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
		}
		
		//button_6zapata boton zapata 
		
		this.button_6zapata.addEventListener("click", fl_ClickToGoToAndStopAtFrame_13.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_13()
		{
			alert("zapata")
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
		}
		
		//boton 7 obregon   button_7obregon
		
		this.button_7obregon.addEventListener("click", fl_ClickToGoToAndStopAtFrame_14.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_14()
		{
			alert("obregon")
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
		}
		
		
		//boton 8 morelos button_8morelos
		
		this.button_8morelos.addEventListener("click", fl_ClickToGoToAndStopAtFrame_15.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_15()
		{
			alert("morelos")
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
		}
		
		
		//boton guadalupe vic button_9victoria 
		this.button_9victoria.addEventListener("click", fl_ClickToGoToAndStopAtFrame_16.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_16()
		{
			alert("victoria")
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
		}
		
		//boton 10 button_10moctezuma
		
		this.button_10moctezuma.addEventListener("click", eventomoctezuma.bind(this));
		
		function eventomoctezuma()
		{
			alert("moctezuma")
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
		}
		
		// boton once 11 button_11ana
		this.button_11ana.addEventListener("click", eventoana.bind(this));
		
		function eventoana()
		{
			alert("ana")
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
		}
		
		//boton 12 button_12iturbide 
		this.button_12iturbide.addEventListener("click", eventoiturbide.bind(this));
		
		function eventoiturbide()
		{
			alert("iturbide")
			if(iturbide1 == 3 && iturbide2 ==3 && respuesta == "iturbide"){
				alert("iturbide dentro")
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
	this.button_12iturbide.setTransform(149,376.6,1.208,0.784,0,0,0,133,22.9);

	this.button_11ana = new lib.ans_vhuerta_btn();
	this.button_11ana.parent = this;
	this.button_11ana.setTransform(142.7,75.8,1.208,0.784,0,0,0,133,22.9);

	this.button_10moctezuma = new lib.ans_vhuerta_btn();
	this.button_10moctezuma.parent = this;
	this.button_10moctezuma.setTransform(124.8,174.9,1.089,0.784,0,0,0,133,22.9);

	this.button_9victoria = new lib.ans_vhuerta_btn();
	this.button_9victoria.parent = this;
	this.button_9victoria.setTransform(139.3,221,1.089,0.784,0,0,0,133,22.9);

	this.button_8morelos = new lib.ans_vhuerta_btn();
	this.button_8morelos.parent = this;
	this.button_8morelos.setTransform(136.2,426.7,1.089,0.784,0,0,0,133,22.9);

	this.button_7obregon = new lib.ans_vhuerta_btn();
	this.button_7obregon.parent = this;
	this.button_7obregon.setTransform(118.3,472.8,1,0.784,0,0,0,133.1,22.9);

	this.button_6zapata = new lib.ans_vhuerta_btn();
	this.button_6zapata.parent = this;
	this.button_6zapata.setTransform(112.8,322.2,1,0.784,0,0,0,133.1,22.9);

	this.button_5diaz = new lib.ans_vhuerta_btn();
	this.button_5diaz.parent = this;
	this.button_5diaz.setTransform(125.4,-30.8,1,0.784,0,0,0,133.1,22.9);

	this.button_4hidalgo = new lib.ans_vhuerta_btn();
	this.button_4hidalgo.parent = this;
	this.button_4hidalgo.setTransform(127.1,20.4,1,0.784,0,0,0,133.1,22.9);

	this.button_4madero = new lib.ans_vhuerta_btn();
	this.button_4madero.parent = this;
	this.button_4madero.setTransform(125.4,520.9,1,0.784,0,0,0,133.1,22.9);

	this.button_3 = new lib.ans_vhuerta_btn();
	this.button_3.parent = this;
	this.button_3.setTransform(111,121.9,1,0.784,0,0,0,133.1,22.9);

	this.button_2 = new lib.ans_vhuerta_btn();
	this.button_2.parent = this;
	this.button_2.setTransform(118.3,271.7,1,1,0,0,0,133.1,22.8);

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
	this.shape.setTransform(-80,119.5);

	this.button_1 = new lib.cerrar();
	this.button_1.parent = this;
	this.button_1.setTransform(367.1,-72.7,0.997,0.997,0,0,0,19.4,20.3);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.cerrar(), 3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("Ag6BMQAAgZAaAAQAZAAAAAZQAAAZgZAAQgaAAAAgZgAgtAdIAAguIAVAAQAEAUAOAAQASAAAAgiQAAg2gXAAQgSAAgBAbIADAUIgXgHQgDgMABgFQgBgmAyAAQA+AAAAA8QAAAZgPARQgQARgWAAQgOAAgPgLIAAAVg");
	this.shape_1.setTransform(326.5,-70.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AhBAEQAAgjATgWQATgWAeAAQA+AAABBQIhMAAQAAA5AcAAQAbAAAAghIAAgKIAVAHQgDAyg5ABQhHAAAAhJgAgKgYIAAAOIAfAAQgBg0gPAAQgNABgCAlg");
	this.shape_2.setTransform(311.7,-67.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663300").s().p("AgmBnIASgOIAAAFQAAASAJAAQAIAAABgNQgBgHgKgRIAAiRQATAAAggEIAACTIACAUIgJAZQgKAKgVAAQgeAAgIgZgAgNhsQAAgTAXAAQAZAAAAATQAAAUgZAAQgXAAAAgUg");
	this.shape_3.setTransform(299,-67.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663300").s().p("AhMAiQAAghApgMQAmgMAAgRQAAgXgVAAQgZAAgBAWQAAAHAFALIgbgFIgBgNQAAgiBAAAQA6AAAAAgIAABXQABAOAIAAQADAAAFgDIAGANQgUAIgSAAQgbAAgHgRQgMARgYAAQgvAAABgqgAgIgEQgQAJAAAWQAAAdAMAAQAPAAAAgdIAAgoQgEAFgHAEg");
	this.shape_4.setTransform(288.6,-67.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#663300").s().p("AAQBLIAAhqQAAgQgJAAQgIAAgHANQgHAMAAASIAABPIg1AAIAAiRQAbAAAagEIAAAcQASgcAdAAQAlAAAAAmIAABvg");
	this.shape_5.setTransform(271.9,-68);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663300").s().p("AhHAAQAAhLBHAAQBIAAAABLQAABMhIAAQhHAAAAhMgAgRAAQAABAARAAQARAAAAhAQAAg+gRAAQgRAAAAA+g");
	this.shape_6.setTransform(255.5,-67.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#663300").s().p("AhAAbIAcgFIgBAIQAAANALAKQALAJAOAAQASAAAAgQQAAgLgegNQgugUAAgeQAAgVASgNQARgNAcAAQAxAAAEApIgZAEQAAghgeAAQgSAAAAAQQAAALAfANQAxAUABAeQAAAxg/AAQhCAAAAgxg");
	this.shape_7.setTransform(240.4,-67.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#663300").s().p("Ag2BLIAAiRIAKAAQATAAAYgEIAAAYQAMgYASAAQAaAAAAAcQAAAIgDAJIgDAMIgkAAIAEgMQACgGAAgFQAAgJgHAAQgFAAgFAMQgDAMAAAOIAABWg");
	this.shape_8.setTransform(227.7,-68);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#663300").s().p("AhBAEQAAgjATgWQAUgWAdAAQA+AAABBQIhMAAQAAA5AcAAQAbAAAAghIAAgKIAVAHQgEAyg4ABQhHAAAAhJgAgKgYIAAAOIAfAAQAAg0gQAAQgNABgCAlg");
	this.shape_9.setTransform(213.3,-67.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#663300").s().p("AhEBjIAAjBQAWAAAfgEIAAAWQAOgWAVAAQAWAAAOAVQANAUAAAjQAABMgzAAQgUAAgNgQIAAA9gAgQgXQAAA4AQAAQAPAAAAg4QAAg2gPAAQgQAAAAA2g");
	this.shape_10.setTransform(198.2,-65.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#663300").s().p("AhBAEQAAgjATgWQAUgWAcAAQBAAAgBBQIhLAAQAAA5AcAAQAbAAAAghIAAgKIAVAHQgDAyg4ABQhIAAAAhJgAgJgYIgBAOIAeAAQAAg0gPAAQgNABgBAlg");
	this.shape_11.setTransform(173.7,-67.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#663300").s().p("AgeA/IAAhgIgSAAIAAgPIASAAIAAgaQAbgIAZgOIAAAwIAXAAIAAAPIgXAAIAABnQAAAKAGgBQAEAAABgGIAQABQgHAXghAAQgnAAAAgig");
	this.shape_12.setTransform(161.5,-70);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#663300").s().p("AhAAbIAcgFIgBAIQAAANALAKQAKAJAPAAQASAAAAgQQAAgLgegNQgugUAAgeQAAgVASgNQASgNAbAAQAxAAAFApIgaAEQAAghgeAAQgSAAAAAQQAAALAfANQAxAUAAAeQABAxg/AAQhCAAAAgxg");
	this.shape_13.setTransform(149.7,-67.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#663300").s().p("AhBAEQAAgjATgWQATgWAdAAQBAAAAABQIhMAAQAAA5AcAAQAbAAAAghIAAgKIAVAHQgDAyg5ABQhHAAAAhJgAgJgYIgBAOIAfAAQAAg0gQAAQgNABgBAlg");
	this.shape_14.setTransform(135.2,-67.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#663300").s().p("Ag/AbIAbgFIAAAIQAAANAKAKQALAJAOAAQASAAAAgQQAAgLgegNQgugUAAgeQAAgVARgNQASgNAbAAQAyAAAEApIgZAEQAAghgeAAQgSAAAAAQQAAALAfANQAyAUgBAeQAAAxg+AAQhBAAAAgxg");
	this.shape_15.setTransform(111.9,-67.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#663300").s().p("AhBAEQAAgjATgWQATgWAeAAQA+AAABBQIhMAAQAAA5AcAAQAbAAAAghIAAgKIAVAHQgDAyg5ABQhHAAAAhJgAgKgYIAAAOIAfAAQgBg0gPAAQgNABgCAlg");
	this.shape_16.setTransform(97.5,-67.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#663300").s().p("AAQBLIAAhqQAAgQgJAAQgJAAgGANQgHAMAAASIAABPIg0AAIAAiRQAaAAAagEIAAAcQATgcAcAAQAkAAABAmIAABvg");
	this.shape_17.setTransform(72.8,-68);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#663300").s().p("AhBAEQAAgjATgWQAUgWAcAAQBAAAgBBQIhLAAQAAA5AcAAQAbAAAAghIAAgKIAVAHQgDAyg4ABQhIAAAAhJgAgJgYIgBAOIAeAAQAAg0gPAAQgNABgBAlg");
	this.shape_18.setTransform(57.1,-67.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#663300").s().p("AgaBlIAAiRQAaAAAagDIAACUgAgXhRQAAgTAXAAQAZAAAAATQAAATgZAAQgXAAAAgTg");
	this.shape_19.setTransform(45.5,-70.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#663300").s().p("AhEAnIAAhuQAagBAbgDIAABxQgBAOAKAAQAWAAAAgyIAAhJQAbgBAagDIAACVIg1AAIAAgYQgRAagdAAQgmAAAAglg");
	this.shape_20.setTransform(33,-67.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#663300").s().p("AAMBSIgLAAQhXABAAhmQgBhlBYAAQBWgBAABoQABBEguAWQAHATAKgBQANAAgBgPIgBgEIAQAGIAAAIQAAAjgiABQghAAgHgogAgTA1QAGANANAAQAEAAAFgDQgEgVgJAAQgIAAgHALgAAWAmQAFgZABgiQgBgxgFgRQgGgSgQAAQgOAAgHASQgFASAAAwQAAAlADATQALgPAMAAQAMAAAKASg");
	this.shape_21.setTransform(15,-68.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#663300").s().p("Ag6ApQAAgYAQgRQAPgSAWAAQAOAAAPALIAAgVIAWAAIAAAuIgUAAQgFgUgOAAQgSAAAAAiQAAA2AXAAQASAAAAgaIgBgVIAWAHQADAMAAAFQAAAngygBQg+AAAAg8gAAIhLQAAgZAaAAQAZAAAAAZQAAAZgZAAQgaAAAAgZg");
	this.shape_22.setTransform(-2,-65.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000033").s().p("Ag3AtQgIgJgFgMQgFgMAAgMQAAgYATgUQAXgZAfAAQAgAAAXAZQATAUAAAYQAAAagSATQgWAZgiAAQghAAgWgZgAgfguQgNASAAAbQAAAbAMATQAOAVATAAQAJAAAHgFQAJgEAFgJQAGgJAEgNQAEgNAAgNQAAgMgEgNQgEgNgGgJQgNgSgTAAQgRAAgNATg");
	this.shape_23.setTransform(240.3,528.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000033").s().p("Ag1BEIAAgDQAJgBAFgDQAEgCACgFIADgLIAAgVIAAgmIAAgXQgBgGgDgEQgDgFgDgCQgFgCgHAAIAAgEIApgFQADAOAAAKQAFgKAHgFQANgJAQAAQALAAAFAEQAFAEAAAGQAAAFgDADQgDADgFAAQgFAAgEgFIgEgFQgGgGgJAAQgKAAgFAOQgGANAAAZIAAAdIAAALQAAALACAFQAAAFAEADQADAFAMACIAAADg");
	this.shape_24.setTransform(226.6,528.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000033").s().p("AgYA/QgOgGgJgMQgOgSAAgaQAAgjAZgUQATgPAXAAQAMAAALAFQALAEAHAJQAMANAAAUIhcAAIgBALQAAANAFANQADANAIAJQAHAJAKAFQAKAFALAAQAIAAAIgDQAHgDAFgFQAGgGAFgMIADABQgEATgNAJQgOAKgXAAQgSAAgOgHgAgUg2QgKAMgCASIBDAAQgBgQgFgIQgEgIgHgFQgHgEgIAAQgNAAgKALg");
	this.shape_25.setTransform(213.4,528.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000033").s().p("AAeBgQgMAIgKADQgJAEgMAAQgYAAgRgPQgLgJgGgOQgGgOAAgQQAAgRAHgPQAGgOALgKQASgPAZAAQALAAAIAEQAJADALAJIAAg6QAAgRgFgIQgGgHgNAAIAAgEIAwgGIAAC1QAAASAGAIQAFAHAOAAIAAAEIguAHQgCgIAAgJgAghgIQgIAJgEANQgEANAAAOQAAANAEAOQAEAMAGAKQAMAQARAAQAIAAAHgEQAHgEAFgIQAFgHABgLQACgLAAgVQAAgWgCgLQgBgKgFgHQgFgGgHgEQgHgDgGAAQgRAAgMAPg");
	this.shape_26.setTransform(198,524.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000033").s().p("AAWBAQgFgEgGgJQgKAKgEADQgLAGgNAAQgSAAgKgJQgKgIAAgOQAAgNAIgJQAFgFAGgDQAGgDAMgDIAUgFIAKgFQAFgEACgFQACgFAAgJQAAgSgHgJIgHgGQgFgCgFAAQgHAAgFADQgFADgCAGIgEAJQgEAIgIAAQgFAAgEgEQgDgDAAgGQAAgIALgFQAGgDAJgCQAJgCAJAAQAKAAAJADQALACAHAEQAKAGADAJQABAFAAALIAAA6IABAUQADALAKAAQAFAAADgCQADgBAEgGIACACQgFARgVAAQgLAAgHgGgAgGACIgQAJQgFADgDAFQgIAJAAAMQAAAKAGAHQAGAHAJAAQAHAAAHgFQAGgFADgIQAFgKAAgUIAAgaQgIAHgJAFg");
	this.shape_27.setTransform(183.1,528.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000033").s().p("AAkBsIAAgEQAJAAAFgCQAGgDAEgEQAFgFACgIQACgIAAgQIAAiMIhQC+IgEAAIhQi7IAACJQAAAQABAIQACAIAFAFQAEAFAGACQAGACAJAAIAAAEIhJAAIAAgEQAJAAAGgCQAFgCAFgFQAEgFACgIQACgIAAgQIAAhzIAAgOQgBgLgDgGQgEgHgHgEQgHgDgLgBIAAgEIBEAAIBECoIBHioIBAAAIAAAEQgJABgFACQgGACgEAEQgEADgBAEQgCAEgBAHIgBATIAABzQAAAQACAIQACAIAFAFQAJAIAPABIAAAEg");
	this.shape_28.setTransform(161.1,524.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000033").s().p("AgMAOQgGgGAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_29.setTransform(134.7,533.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000033").s().p("AgyBsIAAgEQAKAAAGgCQAFgDAFgEQAEgFACgIQACgIAAgQIAAhzQAAgQgCgIQgCgIgEgFQgFgEgFgCQgHgCgJgBIAAgEIBkAAIAAAEQgIABgGACQgFACgFAEQgGAHgBALIgBATIAABzIABAVQABAHADAFQAEAGAHADQAGADAKABIAAAEg");
	this.shape_30.setTransform(125,524.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000033").s().p("Ag3AtQgIgJgFgMQgFgMAAgMQAAgYATgUQAXgZAfAAQAgAAAXAZQATAUAAAYQAAAagSATQgWAZgiAAQggAAgXgZgAgfguQgNASAAAbQAAAbAMATQAOAVATAAQAJAAAIgFQAIgEAFgJQAHgJADgNQAEgNAAgNQAAgMgEgNQgEgNgGgJQgNgSgTAAQgRAAgNATg");
	this.shape_31.setTransform(102.7,528.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000033").s().p("AgnAzQgSgTAAgcQAAgNAFgOQAFgNAIgKQAKgLAOgGQAOgGAPAAQAYAAAMALQAIAGAAAHQAAAFgDAEQgDADgFAAQgLAAgEgPIgEgJIgEgFQgFgDgGAAQgKAAgHAFQgHAFgEAHQgGAGgDALQgFAQgBAPQAAANAGANQAFAOAIAJQANAOASAAQAPAAAKgKQAFgFAFgLIADABQgGARgLAHQgLAIgUAAQgfAAgSgTg");
	this.shape_32.setTransform(87.8,528.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000033").s().p("AgTBBIgJgDIgDAAQgGAAgDAFIgCAAIAAgtIACAAQAFARAGAJQANASAQAAQAJAAAHgGQAIgGAAgNQAAgKgGgHIgIgHIgPgKQgUgJgGgHQgKgKAAgOQAAgOAKgKQAKgMASAAQAIAAAGADIAGADIAEAAQADAAADgEIADAAIACAkIgEAAIgDgNQgCgEgEgEQgFgGgGgEQgGgDgGAAQgJAAgGAGQgGAHAAAJQAAAIAFAGQAGAGAMAFIAPAIQAPAHAIAJQAHAKAAAOQAAAQgLALQgMANgTAAQgKAAgKgFg");
	this.shape_33.setTransform(75.4,528.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000033").s().p("AgiBvIAAgEQAJgBAFgDQAEgCACgFIADgLIAAgVIAAgnIAAgWQgBgGgDgEQgDgEgDgCQgEgDgHAAIAAgEIAsgFIAABaIAAAMQAAAKACAGQABAFADADQAFAEAMACIAAAEgAgKhWQgEgEAAgFQAAgGAEgEQAFgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_34.setTransform(65.7,523.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000033").s().p("AgnAzQgSgTAAgcQAAgNAFgOQAFgNAJgKQAJgLAOgGQAOgGAQAAQAXAAANALQAHAGAAAHQAAAFgDAEQgDADgFAAQgLAAgEgPIgEgJIgEgFQgEgDgHAAQgKAAgGAFQgHAFgGAHQgFAGgDALQgFAQAAAPQAAANAEANQAFAOAJAJQANAOASAAQAPAAAKgKQAFgFAEgLIAEABQgFARgMAHQgMAIgTAAQgfAAgSgTg");
	this.shape_35.setTransform(55.2,528.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000033").s().p("AALBEIAAgDQAJgBAEgDQAEgCADgFIACgLIABgVIAAghIgBgZQgCgIgDgFQgDgFgHgEQgHgDgIAAQgIAAgIAEQgHADgFAGQgEAHgCAIQgBAIAAASIAAAeIAAALQAAALABAFQABAFAEADQAEAFAMACIAAADIhFAAIAAgDQAJgBAEgDQAEgCADgFIACgLIABgVIAAgmIgBgXQgBgGgCgEQgDgFgEgCQgEgCgHAAIAAgEIArgFQADAJAAAIIAAADQATgUAaAAQAUAAANAJQAMAKAAARIAABBQAAALABAFQABAFAEADQAEAFAMACIAAADg");
	this.shape_36.setTransform(40,528.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000033").s().p("AAWBAQgFgEgGgJQgKAKgEADQgLAGgNAAQgSAAgKgJQgKgIAAgOQAAgNAIgJQAFgFAGgDQAGgDAMgDIAUgFIAKgFQAFgEACgFQACgFAAgJQAAgSgHgJIgHgGQgFgCgFAAQgHAAgFADQgFADgCAGIgEAJQgEAIgIAAQgFAAgEgEQgDgDAAgGQAAgIALgFQAGgDAJgCQAJgCAJAAQAKAAAJADQALACAHAEQAKAGADAJQABAFAAALIAAA6IABAUQADALAKAAQAFAAADgCQADgBAEgGIACACQgFARgVAAQgLAAgHgGgAgGACIgQAJQgFADgDAFQgIAJAAAMQAAAKAGAHQAGAHAJAAQAHAAAHgFQAGgFADgIQAFgKAAgUIAAgaQgIAHgJAFg");
	this.shape_37.setTransform(25.4,528.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000033").s().p("Ag1BEIAAgDQAJgBAEgDQAEgCADgFIACgLIABgVIAAgmIgBgXQAAgGgDgEQgDgFgEgCQgDgCgIAAIAAgEIApgFQADAOAAAKQAGgKAFgFQANgJASAAQAJAAAGAEQAFAEAAAGQAAAFgDADQgDADgEAAQgGAAgEgFIgFgFQgFgGgIAAQgLAAgFAOQgGANAAAZIAAAdIAAALQAAALABAFQABAFAEADQAEAFAMACIAAADg");
	this.shape_38.setTransform(12.5,528.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000033").s().p("AhUBsIAAgEQAIAAAHgCQAHgDADgEQAFgFACgIQACgJAAgPIAAhzIgCgVQgBgOgMgHQgHgDgMgBIAAgEICkAAIAFA0IgEABQgEgMgDgGQgHgOgOgIQgIgEgKgCQgKgCgRAAIgYAAIAABdIAGAAQAbAAANgMQAGgFACgIQADgHABgMIAEAAIgBBfIgEAAQgCgQgEgJQgEgJgJgFQgGgDgJgCQgIgCgPAAIAAA+QAAAQACAIQACAIAFAFQAEAEAFADQAFACAJAAIAAAEg");
	this.shape_39.setTransform(-1.8,524.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000033").s().p("AALBEIAAgDQAJgBAEgDQAEgCADgFIACgLIABgVIAAghIgBgZQgCgIgDgFQgDgFgHgEQgHgDgIAAQgIAAgIAEQgHADgFAGQgEAHgCAIQgBAIAAASIAAAeIAAALQAAALABAFQABAFAEADQAEAFAMACIAAADIhFAAIAAgDQAJgBAEgDQAEgCADgFIACgLIABgVIAAgmIgBgXQgBgGgCgEQgDgFgEgCQgEgCgHAAIAAgEIArgFQADAJAAAIIAAADQATgUAaAAQAUAAANAJQAMAKAAARIAABBQAAALABAFQABAFAEADQAEAFAMACIAAADg");
	this.shape_40.setTransform(189.4,478);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000033").s().p("Ag3BOQgJgKgEgMQgFgLAAgMQAAgaATgTQAXgZAfAAQAgAAAXAZQATATAAAaQAAAZgSAUQgWAYgiAAQggAAgXgYgAgfgOQgNARAAAcQAAAbAMATQAOAWATgBQAIAAAJgEQAHgFAGgJQAHgJADgMQAEgOAAgMQAAgNgEgNQgEgMgHgKQgNgSgRAAQgSAAgNATgAgRg5IAcgsIAdAAIgxAsg");
	this.shape_41.setTransform(172.6,474.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000033").s().p("Ag4BUQgJgJAAgOQgBgLAHgHQAHgIAJAAQAHABAGAEQADAEAAAHIAAACIgCAAIgGgFQgCgCgEAAQgHAAgEAFQgEAFAAAIQAAANAMAIQANAIAVAAQATAAAOgJQANgJAAgPQgBgLgIgGQgJgGgQgBIgYAAQgPABgKgIQgKgIAAgKQAAgLALgGQAFgDAOgDQgNgHgIgKQgHgKAAgNQAAgQALgNQAHgGAKgFQAJgEAKAAQAOAAAQALQAIgGAGgCQAFgDAHAAQAIAAAFAEQAFAEAAAFQAAAEgCADQgCACgDAAQgGAAgDgGIgFgEQgDgEgFAAQgGAAgGAGQANAQAAAQQAAAVgTAMQgIAGgLACIgTABQgYACAAALQAAAKAUAAIAZAAQAOgBAKADQAJADAHAEQAOALAAASQAAAVgQAMQgQALggAAQgiAAgOgNgAgahRQgDAGgCAIQgCAIAAAIQAAARAHALQAHALALAAQAKAAAHgLQAGgLABgTQAAgTgJgMQgGgIgJAAQgKAAgIALg");
	this.shape_42.setTransform(158,480.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000033").s().p("AgYA/QgOgGgJgMQgOgSAAgaQAAgjAagUQASgPAXAAQAMAAALAFQAKAEAIAJQAMANgBAUIhbAAIgBALQAAANAFANQADANAIAJQAGAJALAFQAKAFALAAQAIAAAIgDQAIgDAEgFQAHgGADgMIAEABQgEATgNAJQgOAKgWAAQgTAAgOgHgAgUg2QgKAMgCASIBDAAQgBgQgFgIQgEgIgHgFQgHgEgIAAQgNAAgKALg");
	this.shape_43.setTransform(143.5,478.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000033").s().p("Ag1BEIAAgDQAJgBAFgDQAEgCACgFIADgLIAAgVIAAgmIAAgXQgCgGgCgEQgDgFgEgCQgDgCgIAAIAAgEIApgFQADAOAAAKQAGgKAFgFQAOgJARAAQAKAAAFAEQAFAEAAAGQAAAFgDADQgDADgEAAQgGAAgEgFIgFgFQgGgGgHAAQgLAAgFAOQgGANAAAZIAAAdIAAALQAAALABAFQACAFADADQAEAFAMACIAAADg");
	this.shape_44.setTransform(131,478);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000033").s().p("AgzByIAAi4QAAgSgGgHQgGgIgNAAIAAgEIAwgGIAABpQAHgJAGgDQAMgIAQAAQAYAAASAPQAWASAAAiQAAAigVAUQgTARgcAAQgOAAgKgEIgJgEIgHgBQgIAAgGANgAgKgSQgIAGgEAJQgGAMAAAdQAAARADAOQACAPACAGQAEAIAHAEQAHAFAIAAQATAAANgTQAMgSABgcQgBgPgDgNQgFgOgIgIQgFgIgHgEQgHgEgJAAQgIAAgHAGg");
	this.shape_45.setTransform(116.6,474.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000033").s().p("AgxBnQgWgKgQgTQgOgPgHgTQgHgSAAgUQAAgaALgXQAMgWAWgRQAQgNATgGQASgHATAAQAYAAAWALQAXAKARAUQAcAfAAAoQAAAUgHATQgIASgOAQQgQATgXALQgYAKgZAAQgYAAgYgKgAgchlQgMAGgKANQgNAPgHAXQgGAXgBAZQAAAuAZAfQAMAOAMAGQANAHAPAAQAQAAANgGQAMgHAMgOQAZgfAAgvQAAgYgHgXQgHgWgNgQQgJgNgNgGQgMgGgRAAQgQAAgMAGg");
	this.shape_46.setTransform(95.5,474);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000033").s().p("Ag3AtQgJgJgEgMQgFgMAAgMQAAgYATgUQAXgZAfAAQAgAAAXAZQATAUAAAYQAAAagSATQgWAZgiAAQghAAgWgZgAgfguQgNASAAAbQAAAbAMATQAOAVATAAQAJAAAHgFQAIgEAHgJQAGgJAEgNQADgNAAgNQAAgMgDgNQgFgNgGgJQgNgSgTAAQgRAAgNATg");
	this.shape_47.setTransform(66,478.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000033").s().p("Ag1BEIAAgDQAJgBAFgDQAEgCACgFIADgLIAAgVIAAgmIAAgXQgCgGgCgEQgDgFgEgCQgDgCgIAAIAAgEIApgFQADAOAAAKQAGgKAFgFQAOgJARAAQAKAAAFAEQAFAEAAAGQAAAFgDADQgDADgEAAQgGAAgEgFIgFgFQgGgGgHAAQgLAAgFAOQgGANAAAZIAAAdIAAALQAAALABAFQACAFADADQAEAFAMACIAAADg");
	this.shape_48.setTransform(52.3,478);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000033").s().p("AAWBAQgFgEgGgJQgKAKgEADQgLAGgNAAQgSAAgKgJQgKgIAAgOQAAgNAIgJQAFgFAGgDQAGgDAMgDIAUgFIAKgFQAFgEACgFQACgFAAgJQAAgSgHgJIgHgGQgFgCgFAAQgHAAgFADQgFADgCAGIgEAJQgEAIgIAAQgFAAgEgEQgDgDAAgGQAAgIALgFQAGgDAJgCQAJgCAJAAQAKAAAJADQALACAHAEQAKAGADAJQABAFAAALIAAA6IABAUQADALAKAAQAFAAADgCQADgBAEgGIACACQgFARgVAAQgLAAgHgGgAgGACIgQAJQgFADgDAFQgIAJAAAMQAAAKAGAHQAGAHAJAAQAHAAAHgFQAGgFADgIQAFgKAAgUIAAgaQgIAHgJAFg");
	this.shape_49.setTransform(40.2,478.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000033").s().p("AgEBDIgohhQgIgWgFgFQgBgCgEgBQgCgCgFAAIAAgEIA9AAIAAAEIgKACQgEAEAAAGIABAKIAGARIAYBAIAahCQAFgQABgHQgBgIgEgEIgKgCIAAgEIAsAAIAAAEQgJABgFAHQgHAHgJAWIgkBcg");
	this.shape_50.setTransform(26,478.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000033").s().p("AgiBvIAAgEQAJgBAFgCQAEgCACgGIADgLIAAgVIAAh7IAAgWQgBgHgDgEQgDgEgDgCQgEgCgHgBIAAgDIAsgGIAACvIAAAMQAAALACAFQABAFADADQAFAEAMACIAAAEg");
	this.shape_51.setTransform(15.4,473.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000033").s().p("AALCMIAAgEQAOgBAGgEQAKgGAAgLQAAgGgFgLIgCgHIgPglIhFAAIgIAWIgEAKQgHARAAAKQAAAGADAFQACAFAEADQAHAEAJABIAAAEIhGAAIAAgEQAIAAAGgEQAHgEAGgIQAFgGAFgKIAMgfIA6iUIAIAAIBEClIANAbQAEAIAGAEQADADAFACIAPACIAAAEgAgvAvIA/AAIgghRgAgHhkIAegnIAgAAIg3Ang");
	this.shape_52.setTransform(0.2,470.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000033").s().p("AALBEIAAgDQAJgBAEgDQAEgCADgFIACgLIABgVIAAghIgBgZQgCgIgDgFQgDgFgHgEQgHgDgIAAQgIAAgIAEQgHADgFAGQgEAHgCAIQgBAIAAASIAAAeIAAALQAAALABAFQABAFAEADQAEAFAMACIAAADIhFAAIAAgDQAJgBAEgDQAEgCADgFIACgLIABgVIAAgmIgBgXQgBgGgCgEQgDgFgEgCQgEgCgHAAIAAgEIArgFQADAJAAAIIAAADQATgUAaAAQAUAAANAJQAMAKAAARIAABBQAAALABAFQABAFAEADQAEAFAMACIAAADg");
	this.shape_53.setTransform(341.9,427.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000033").s().p("Ag3BOQgJgKgEgMQgFgMAAgLQAAgaATgTQAXgZAfABQAggBAXAZQATATAAAaQAAAZgSAUQgWAYgiAAQghAAgWgYgAgfgOQgNARAAAbQAAAcAMATQAOAWATAAQAJAAAHgGQAIgEAHgIQAFgKAFgNQADgNAAgMQAAgNgDgNQgFgNgGgJQgOgSgSAAQgRAAgNATgAgRg6IAbgrIAeAAIgxArg");
	this.shape_54.setTransform(325.1,424.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000033").s().p("AgEBDIgohhQgJgWgDgFQgCgDgEAAQgCgCgFgBIAAgDIA9AAIAAADIgKAEQgEACgBAIIACAJIAGARIAYBAIAahCQAGgQAAgHQAAgIgFgDIgKgEIAAgDIAsAAIAAADQgJADgFAFQgHAHgJAXIgkBcg");
	this.shape_55.setTransform(310.1,428);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000033").s().p("AAWBAQgFgEgGgJQgKAKgEADQgLAGgNAAQgSAAgKgJQgKgIAAgOQAAgNAIgJQAFgFAGgDQAGgDAMgDIAUgFIAKgFQAFgEACgFQACgFAAgJQAAgSgHgJIgHgGQgFgCgFAAQgHAAgFADQgFADgCAGIgEAJQgEAIgIAAQgFAAgEgEQgDgDAAgGQAAgIALgFQAGgDAJgCQAJgCAJAAQAKAAAJADQALACAHAEQAKAGADAJQABAFAAALIAAA6IABAUQADALAKAAQAFAAADgCQADgBAEgGIACACQgFARgVAAQgLAAgHgGgAgGACIgQAJQgFADgDAFQgIAJAAAMQAAAKAGAHQAGAHAJAAQAHAAAHgFQAGgFADgIQAFgKAAgUIAAgaQgIAHgJAFg");
	this.shape_56.setTransform(297.1,428);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000033").s().p("AhXBsIAAgEQAJAAAGgCQAFgDAFgEQAFgFABgIQACgIAAgQIAAhzQAAgOgBgHQgBgHgDgFQgEgGgGgDQgHgDgJgBIgCAAIAAgEIBeAAQAZAAAMADQAMADAKAHQAWARAAAdQAAAcgWAOQgMAGgRABIgaABIgeAAIAAA4QAAAQACAIQACAIAEAFQAFAEAFADQAFACAJAAIAAAEgAgTgCIAPAAQAPAAAJgDQAIgCAGgGQAQgOAAgYQAAgMgEgLQgFgLgJgHQgJgIgNgBIgQgBIgNAAg");
	this.shape_57.setTransform(280.4,423.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000033").s().p("Ag2BdQgFgDAAgGQAAgEADgCQADgDAFAAQAEAAAFADIAHACIADABQAKAAAGgPIAFgMQADgIAAgEQAAgGgGgOIghhOIgEgLIgHgPQgCgEgDgCQgEgDgFAAIAAgEIA9AAIAAAEIgJACQgGAEAAAHQAAAGAGAQIAZBDIAYg4QAIgVAAgJQAAgHgEgEQgEgEgHgBIAAgEIAtAAIAAAEIgKAEQgEACgDAEQgEAHgKAYIgtBuQgIAUgFAGQgIAKgNAAQgJAAgFgDg");
	this.shape_58.setTransform(256.2,430.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000033").s().p("AgTBBIgJgDIgDAAQgGAAgDAFIgCAAIAAgtIACAAQAFARAGAJQANASAQAAQAJAAAHgGQAIgGAAgNQAAgKgGgHIgIgHIgPgKQgUgJgGgHQgKgKAAgOQAAgOAKgKQAKgMASAAQAIAAAGADIAGADIAEAAQADAAADgEIADAAIACAkIgEAAIgDgNQgCgEgEgEQgFgGgGgEQgGgDgGAAQgJAAgGAGQgGAHAAAJQAAAIAFAGQAGAGAMAFIAPAIQAPAHAIAJQAHAKAAAOQAAAQgLALQgMANgTAAQgKAAgKgFg");
	this.shape_59.setTransform(235.6,428);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000033").s().p("Ag3AtQgIgJgFgMQgFgMAAgMQAAgYATgUQAXgZAfAAQAgAAAXAZQATAUAAAYQAAAagSATQgWAZgiAAQghAAgWgZgAgfguQgNASAAAbQAAAbAMATQAOAVATAAQAJAAAHgFQAJgEAGgJQAFgJAEgNQAEgNAAgNQAAgMgEgNQgEgNgGgJQgNgSgTAAQgRAAgNATg");
	this.shape_60.setTransform(221.4,428);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000033").s().p("AgiBvIAAgEQAJgBAFgCQAEgCACgGIADgLIAAgVIAAh7IAAgWQgBgHgDgEQgDgEgDgCQgEgCgHgBIAAgDIAsgGIAACvIAAAMQAAALACAFQABAFADADQAFAEAMACIAAAEg");
	this.shape_61.setTransform(209.2,423.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000033").s().p("AgYA/QgOgGgKgMQgNgSAAgaQAAgjAagUQASgPAWAAQANAAALAFQAKAEAIAJQALANAAAUIhbAAIgBALQABANADANQAFANAHAJQAGAJALAFQAKAFALAAQAJAAAHgDQAIgDAEgFQAHgGADgMIAEABQgEATgNAJQgPAKgVAAQgTAAgOgHgAgUg2QgKAMgCASIBDAAQgBgQgFgIQgEgIgHgFQgHgEgIAAQgNAAgKALg");
	this.shape_62.setTransform(197.9,428);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000033").s().p("Ag1BEIAAgDQAJgBAEgDQAEgCADgFIACgLIABgVIAAgmIgBgXQgBgGgCgEQgDgFgEgCQgDgCgIAAIAAgEIApgFQADAOAAAKQAGgKAFgFQANgJASAAQAJAAAGAEQAFAEAAAGQAAAFgDADQgDADgEAAQgGAAgEgFIgFgFQgGgGgHAAQgLAAgFAOQgGANAAAZIAAAdIAAALQAAALABAFQABAFAEADQAEAFAMACIAAADg");
	this.shape_63.setTransform(185.4,427.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000033").s().p("Ag3AtQgJgJgEgMQgFgMAAgMQAAgYATgUQAXgZAfAAQAgAAAXAZQATAUAAAYQAAAagSATQgWAZgiAAQghAAgWgZgAgfguQgNASAAAbQAAAbAMATQAOAVATAAQAJAAAHgFQAIgEAHgJQAFgJAFgNQADgNAAgNQAAgMgDgNQgFgNgGgJQgOgSgSAAQgRAAgNATg");
	this.shape_64.setTransform(171.2,428);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000033").s().p("AAkBsIAAgEQAJAAAFgCQAGgDAEgEQAFgFACgIQACgIAAgQIAAiMIhQC+IgEAAIhQi7IAACJQAAAQABAIQACAIAFAFQAEAFAGACQAGACAJAAIAAAEIhJAAIAAgEQAJAAAGgCQAFgCAFgFQAEgFACgIQACgIAAgQIAAhzIAAgOQgBgLgDgGQgEgHgHgEQgHgDgLgBIAAgEIBEAAIBECoIBHioIBAAAIAAAEQgJABgFACQgGACgEAEQgEADgBAEQgCAEgBAHIgBATIAABzQAAAQACAIQACAIAFAFQAJAIAPABIAAAEg");
	this.shape_65.setTransform(148.4,423.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000033").s().p("AAWBAQgFgEgGgJQgKAKgEADQgLAGgNAAQgSAAgKgJQgKgIAAgOQAAgNAIgJQAFgFAGgDQAGgDAMgDIAUgFIAKgFQAFgEACgFQACgFAAgJQAAgSgHgJIgHgGQgFgCgFAAQgHAAgFADQgFADgCAGIgEAJQgEAIgIAAQgFAAgEgEQgDgDAAgGQAAgIALgFQAGgDAJgCQAJgCAJAAQAKAAAJADQALACAHAEQAKAGADAJQABAFAAALIAAA6QAAAPABAFQADALAKAAQAFAAADgCQADgBAEgGIACACQgFARgVAAQgLAAgHgGgAgGACIgQAJQgFADgDAFQgIAJAAAMQAAAKAGAHQAGAHAJAAQAHAAAHgFQAGgFADgIQAFgKAAgUIAAgaQgIAHgJAFg");
	this.shape_66.setTransform(119.7,428);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000033").s().p("AgkBkIAAgDQAJgBAEgCQAEgCADgGIACgLIABgVIAAgnIgBgWQgBgGgCgFQgDgEgEgCQgEgCgHgBIAAgCIAtgGIAABaIAAAMQAAALABAEQABAGAEACQAEAFAMACIAAADgAgUg4IAcgsIAdAAIgxAsg");
	this.shape_67.setTransform(108.5,424.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000033").s().p("Ag1BEIAAgDQAJgBAEgDQAEgCADgFIACgLIABgVIAAgmIgBgXQgBgGgCgEQgDgFgDgCQgEgCgHAAIAAgEIAogFQADAOAAAKQAFgKAHgFQANgJAQAAQALAAAFAEQAFAEAAAGQAAAFgDADQgDADgFAAQgFAAgEgFIgEgFQgHgGgIAAQgKAAgFAOQgGANAAAZIAAAdIAAALQAAALACAFQABAFADADQADAFAMACIAAADg");
	this.shape_68.setTransform(99,427.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000033").s().p("AAWBAQgFgEgGgJQgKAKgEADQgLAGgNAAQgSAAgKgJQgKgIAAgOQAAgNAIgJQAFgFAGgDQAGgDAMgDIAUgFIAKgFQAFgEACgFQACgFAAgJQAAgSgHgJIgHgGQgFgCgFAAQgHAAgFADQgFADgCAGIgEAJQgEAIgIAAQgFAAgEgEQgDgDAAgGQAAgIALgFQAGgDAJgCQAJgCAJAAQAKAAAJADQALACAHAEQAKAGADAJQABAFAAALIAAA6IABAUQADALAKAAQAFAAADgCQADgBAEgGIACACQgFARgVAAQgLAAgHgGgAgGACIgQAJQgFADgDAFQgIAJAAAMQAAAKAGAHQAGAHAJAAQAHAAAHgFQAGgFADgIQAFgKAAgUIAAgaQgIAHgJAFg");
	this.shape_69.setTransform(86.9,428);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000033").s().p("AAkBsIAAgEQAJAAAFgCQAGgDAEgEQAFgFACgIQACgIAAgQIAAiMIhQC+IgEAAIhQi7IAACJQAAAQABAIQACAIAFAFQAEAFAGACQAGACAJAAIAAAEIhJAAIAAgEQAJAAAGgCQAFgCAFgFQAEgFACgIQACgIAAgQIAAhzIAAgOQgBgLgDgGQgEgHgHgEQgHgDgLgBIAAgEIBEAAIBECoIBHioIBAAAIAAAEQgJABgFACQgGACgEAEQgEADgBAEQgCAEgBAHIgBATIAABzQAAAQACAIQACAIAFAFQAJAIAPABIAAAEg");
	this.shape_70.setTransform(65,423.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000033").s().p("AgYBgQgOgHgKgMQgNgSAAgaQAAgjAZgUQATgOAWAAQANgBALAFQALAFAHAIQAMANAAATIhcAAIAAAMQAAANADANQAEANAHAJQAIAJAKAFQAKAFALAAQAIAAAIgDQAIgDAFgFQAFgFAFgMIADAAQgEATgOAJQgOAKgWAAQgSAAgOgGgAgUgWQgKAMgCARIBDAAQgBgPgFgIQgEgIgHgEQgHgFgIAAQgNAAgKALgAgKg6IAcgrIAeAAIgyArg");
	this.shape_71.setTransform(35.1,424.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000033").s().p("AgTBBIgJgDIgDAAQgGAAgDAFIgCAAIAAgtIACAAQAFARAGAJQANASAQAAQAJAAAHgGQAIgGAAgNQAAgKgGgHIgIgHIgPgKQgUgJgGgHQgKgKAAgOQAAgOAKgKQAKgMASAAQAIAAAGADIAGADIAEAAQADAAADgEIADAAIACAkIgEAAIgDgNQgCgEgEgEQgFgGgGgEQgGgDgGAAQgJAAgGAGQgGAHAAAJQAAAIAFAGQAGAGAMAFIAPAIQAPAHAIAJQAHAKAAAOQAAAQgLALQgMANgTAAQgKAAgKgFg");
	this.shape_72.setTransform(22.4,428);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000033").s().p("Ag3AtQgIgJgFgMQgFgMAAgMQAAgYATgUQAXgZAfAAQAgAAAXAZQATAUAAAYQAAAagSATQgWAZgiAAQggAAgXgZgAgfguQgNASAAAbQAAAbAMATQAOAVATAAQAJAAAIgFQAIgEAFgJQAHgJADgNQAEgNAAgNQAAgMgEgNQgEgNgGgJQgNgSgTAAQgRAAgNATg");
	this.shape_73.setTransform(8.2,428);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000033").s().p("AguCAQgIgCgFgDQgKgGAAgJQAAgGAEgDQAEgEAGAAQAFAAAEAEIADAFIAFAKQACAGAEADQAEADAGAAQAHAAAGgFQAFgFADgJQADgNAAgkIAAiKQAAgKgBgIQgBgLgGgGQgJgJgQgBIAAgEIBlAAIAAAEIgOACQgFABgEAEQgGAFgCAIQgCAIAAARIAACMQAAAVgEAMQgDALgIAIQgIAIgOAFQgOAFgPAAQgIAAgJgCg");
	this.shape_74.setTransform(-7.7,426.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000033").s().p("AgYA/QgOgGgJgMQgOgSAAgaQAAgjAZgUQATgPAXAAQAMAAALAFQAKAEAIAJQAMANAAAUIhcAAIgBALQABANAEANQAEANAGAJQAIAJAKAFQAJAFAMAAQAJAAAHgDQAHgDAGgFQAFgGAFgMIADABQgFATgNAJQgNAKgXAAQgSAAgOgHgAgUg2QgKAMgCASIBDAAQgBgQgFgIQgEgIgHgFQgHgEgIAAQgNAAgKALg");
	this.shape_75.setTransform(229.3,377.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000033").s().p("AAeBgQgMAIgKADQgJAEgMAAQgYAAgRgPQgLgJgGgOQgGgOAAgQQAAgRAHgPQAGgOALgKQASgPAZAAQALAAAIAEQAJADALAJIAAg6QAAgRgFgIQgGgHgNAAIAAgEIAwgGIAAC1QAAASAGAIQAFAHAOAAIAAAEIguAHQgCgIAAgJgAghgIQgIAJgEANQgEANAAAOQAAANAEAOQAEAMAGAKQAMAQARAAQAIAAAHgEQAHgEAFgIQAFgHABgLQACgLAAgVQAAgWgCgLQgBgKgFgHQgFgGgHgEQgHgDgGAAQgRAAgMAPg");
	this.shape_76.setTransform(214,373.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000033").s().p("AgiBvIAAgEQAJgBAFgCQAEgCACgGIADgLIAAgVIAAgnIAAgWQgBgGgDgEQgDgEgDgCQgEgCgHgBIAAgEIAsgFIAABaIAAAMQAAAKACAGQABAEADAEQAFAEAMACIAAAEgAgKhVQgEgFAAgFQAAgHAEgDQAFgEAFgBQAGABAEAEQAEADAAAHQAAAFgEAFQgEADgGAAQgGAAgEgDg");
	this.shape_77.setTransform(201.4,373.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000033").s().p("Ag0ByIAAi4QAAgSgFgHQgGgIgNAAIAAgEIAxgGIAABpQAGgJAGgDQAMgIAQAAQAYAAASAPQAWASAAAiQAAAigWAUQgRARgdAAQgOAAgLgEIgIgEIgHgBQgIAAgGANgAgKgSQgIAGgEAJQgGAMABAdQAAARACAOQABAPADAGQAEAIAHAEQAHAFAIAAQAUAAAMgTQAMgSAAgcQAAgPgDgNQgFgOgHgIQgGgIgIgEQgGgEgJAAQgHAAgIAGg");
	this.shape_78.setTransform(188.9,373.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000033").s().p("Ag1BEIAAgDQAJgBAFgDQAEgCACgFIADgLIAAgVIAAgmIAAgXQgCgGgCgEQgDgFgEgCQgDgCgIAAIAAgEIApgFQADAOAAAKQAGgKAFgFQAOgJARAAQAKAAAFAEQAFAEAAAGQAAAFgDADQgDADgEAAQgGAAgEgFIgFgFQgGgGgHAAQgLAAgFAOQgGANAAAZIAAAdIAAALQAAALABAFQACAFADADQAEAFAMACIAAADg");
	this.shape_79.setTransform(175.6,377.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000033").s().p("AAiAxQgUATgaABQgUAAgLgKQgMgJAAgSIAAg2IAAgMIgCgPQgBgFgDgEQgFgEgMgCIAAgDIAuAAIAABPIABAYQACAJADAFQAEAFAGADQAHADAIAAQAHAAAIgDQAHgEAFgFQAFgHABgIQACgIAAgTIAAgdIAAgMIgCgPQgBgFgDgEQgFgEgMgCIAAgDIAuAAIAABUIABAXQABAHADADQACAFAEACQAEABAHABIAAADIgrAHQgCgLAAgJg");
	this.shape_80.setTransform(161.4,377.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000033").s().p("AgTBSQgFgEgBgFQgCgGAAgNIAAhfIgQAAIAAgCQAKgEAIgKQAGgFADgGQADgGADgJIACgFIAFAAIAAApIAnAAIAAAGIgnAAIAABaQAAARAFAIQADADAFACQAEADAGAAQAHAAAFgDQAEgDAHgIIACACQgGAKgJAEQgJAFgOAAQgSAAgIgHg");
	this.shape_81.setTransform(149.7,375.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000033").s().p("AgxBsIAAgEQAJAAAGgCQAFgDAFgEQAFgFABgIQACgIAAgQIAAhzQAAgQgCgIQgBgIgFgFQgFgEgFgCQgGgCgJgBIAAgEIBjAAIAAAEQgJABgFACQgFACgFAEQgGAHgBALIgCATIAABzIACAVQABAHADAFQAEAGAGADQAHADAKABIAAAEg");
	this.shape_82.setTransform(139.1,373.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000033").s().p("AgYA/QgOgGgKgMQgNgSAAgaQAAgjAagUQASgPAWAAQANAAALAFQAKAEAIAJQALANAAAUIhbAAIgBALQAAANAEANQAFANAHAJQAGAJALAFQAKAFALAAQAIAAAIgDQAIgDAEgFQAHgGADgMIAEABQgEATgNAJQgPAKgVAAQgTAAgOgHgAgUg2QgKAMgCASIBDAAQgBgQgFgIQgEgIgHgFQgHgEgIAAQgNAAgKALg");
	this.shape_83.setTransform(117.8,377.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000033").s().p("AAeBgQgMAIgKADQgJAEgMAAQgYAAgRgPQgLgJgGgOQgGgOAAgQQAAgRAHgPQAGgOALgKQASgPAZAAQALAAAIAEQAJADALAJIAAg6QAAgRgFgIQgGgHgNAAIAAgEIAwgGIAAC1QAAASAGAIQAFAHAOAAIAAAEIguAHQgCgIAAgJgAghgIQgIAJgEANQgEANAAAOQAAANAEAOQAEAMAGAKQAMAQARAAQAIAAAHgEQAHgEAFgIQAFgHABgLQACgLAAgVQAAgWgCgLQgBgKgFgHQgFgGgHgEQgHgDgGAAQgRAAgMAPg");
	this.shape_84.setTransform(102.4,373.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000033").s().p("AALBEIAAgDQAJgBAEgDQAEgCADgFIACgLIABgVIAAghIgBgZQgCgIgDgFQgDgFgHgEQgHgDgIAAQgIAAgIAEQgHADgFAGQgEAHgCAIQgBAIAAASIAAAeIAAALQAAALABAFQABAFAEADQAEAFAMACIAAADIhFAAIAAgDQAJgBAEgDQAEgCADgFIACgLIABgVIAAgmIgBgXQgBgGgCgEQgDgFgEgCQgEgCgHAAIAAgEIArgFQADAJAAAIIAAADQATgUAaAAQAUAAANAJQAMAKAAARIAABBQAAALABAFQABAFAEADQAEAFAMACIAAADg");
	this.shape_85.setTransform(77.3,377.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000033").s().p("AgkBlIAAgEQAJgBAEgCQAEgCADgGIACgLIABgVIAAgnIgBgWQgBgGgCgFQgDgEgEgCQgEgCgHgBIAAgDIAtgFIAABaIAAAMQAAAKABAGQABAEAEAEQAEAEAMACIAAAEgAgUg4IAcgsIAdAAIgxAsg");
	this.shape_86.setTransform(65.2,374.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000033").s().p("AgTBSQgFgEgCgFQgBgGAAgNIAAhfIgRAAIAAgCQALgEAIgKQAGgFACgGQAEgGADgJIACgFIAFAAIAAApIAnAAIAAAGIgnAAIAABaQAAARAFAIQADADAFACQAEADAGAAQAHAAAFgDQAEgDAHgIIACACQgGAKgJAEQgJAFgOAAQgSAAgIgHg");
	this.shape_87.setTransform(57.6,375.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000033").s().p("AgTBBIgJgDIgDAAQgGAAgDAFIgCAAIAAgtIACAAQAFARAGAJQANASAQAAQAJAAAHgGQAIgGAAgNQAAgKgGgHIgIgHIgPgKQgUgJgGgHQgKgKAAgOQAAgOAKgKQAKgMASAAQAIAAAGADIAGADIAEAAQADAAADgEIADAAIACAkIgEAAIgDgNQgCgEgEgEQgFgGgGgEQgGgDgGAAQgJAAgGAGQgGAHAAAJQAAAIAFAGQAGAGAMAFIAPAIQAPAHAIAJQAHAKAAAOQAAAQgLALQgMANgTAAQgKAAgKgFg");
	this.shape_88.setTransform(47.1,377.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000033").s().p("AAiAxQgUATgaABQgTAAgMgKQgNgJAAgSIAAg2IAAgMIgBgPQgBgFgDgEQgFgEgMgCIAAgDIAuAAIAABPIABAYQACAJADAFQAEAFAGADQAHADAHAAQAIAAAIgDQAHgEAFgFQAEgHACgIQABgIAAgTIAAgdIAAgMIgBgPQgBgFgDgEQgFgEgMgCIAAgDIAvAAIAABUIAAAXQABAHACADQAEAFADACQAEABAHABIAAADIgrAHQgCgLAAgJg");
	this.shape_89.setTransform(33,377.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000033").s().p("Ag5BUQgIgJgBgOQABgLAGgHQAHgIAKAAQAGABAFAEQAEAEABAHIAAACIgDAAIgFgFQgDgCgEAAQgHAAgEAFQgEAFAAAIQAAANANAIQANAIATAAQAVAAAMgJQAOgJAAgPQAAgLgJgGQgJgGgQgBIgYAAQgQABgJgIQgKgIAAgKQAAgLAKgGQAGgDAOgDQgOgHgHgKQgIgKAAgNQAAgQAMgNQAHgGAJgFQAKgEAKAAQAOAAAQALQAHgGAHgCQAGgDAGAAQAIAAAEAEQAHAEgBAFQAAAEgCADQgCACgEAAQgFAAgEgGIgDgEQgEgEgFAAQgGAAgGAGQANAQAAAQQAAAVgSAMQgKAGgKACIgUABQgWACAAALQAAAKATAAIAZAAQAOgBAJADQAKADAHAEQAOALAAASQAAAVgQAMQgQALggAAQgiAAgPgNgAgZhRQgEAGgCAIQgCAIAAAIQAAARAHALQAIALALAAQAJAAAHgLQAHgLgBgTQABgTgJgMQgGgIgIAAQgMAAgGALg");
	this.shape_90.setTransform(18.6,380.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000033").s().p("AALBsIAAgEQAOgBAGgEQAKgGAAgLQAAgGgFgLIgCgHIgPglIhFAAIgIAWIgEAKQgHARAAAKQAAAGADAFQACAFAEADQAHAEAJABIAAAEIhGAAIAAgEQAIAAAGgEQAHgEAGgIQAFgGAFgKIAMgfIA6iUIAIAAIBEClIANAbQAEAIAGAEQADADAFACIAPACIAAAEgAgvAPIA/AAIgghRg");
	this.shape_91.setTransform(0.2,373.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000033").s().p("AAWBAQgFgEgGgJQgKAKgEADQgLAGgNAAQgSAAgKgJQgKgIAAgOQAAgNAIgJQAFgFAGgDQAGgDAMgDIAUgFIAKgFQAFgEACgFQACgFAAgJQAAgSgHgJIgHgGQgFgCgFAAQgHAAgFADQgFADgCAGIgEAJQgEAIgIAAQgFAAgEgEQgDgDAAgGQAAgIALgFQAGgDAJgCQAJgCAJAAQAKAAAJADQALACAHAEQAKAGADAJQABAFAAALIAAA6IABAUQADALAKAAQAFAAADgCQADgBAEgGIACACQgFARgVAAQgLAAgHgGgAgGACIgQAJQgFADgDAFQgIAJAAAMQAAAKAGAHQAGAHAJAAQAHAAAHgFQAGgFADgIQAFgKAAgUIAAgaQgIAHgJAFg");
	this.shape_92.setTransform(193.9,327.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000033").s().p("AgUBRQgEgDgBgGQgCgFAAgOIAAheIgQAAIAAgDQAKgDAIgKQAGgFADgGQADgGACgJIADgFIAFAAIAAApIAnAAIAAAGIgnAAIAABbQAAAQAFAIQADAEAFABQAEACAGAAQAHAAAFgCQAEgDAGgIIADACQgGAJgJAGQgKAEgOAAQgRAAgJgIg");
	this.shape_93.setTransform(182.9,325.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000033").s().p("AAWBAQgFgEgGgJQgKAKgEADQgLAGgNAAQgSAAgKgJQgKgIAAgOQAAgNAIgJQAFgFAGgDQAGgDAMgDIAUgFIAKgFQAFgEACgFQACgFAAgJQAAgSgHgJIgHgGQgFgCgFAAQgHAAgFADQgFADgCAGIgEAJQgEAIgIAAQgFAAgEgEQgDgDAAgGQAAgIALgFQAGgDAJgCQAJgCAJAAQAKAAAJADQALACAHAEQAKAGADAJQABAFAAALIAAA6IABAUQADALAKAAQAFAAADgCQADgBAEgGIACACQgFARgVAAQgLAAgHgGgAgGACIgQAJQgFADgDAFQgIAJAAAMQAAAKAGAHQAGAHAJAAQAHAAAHgFQAGgFADgIQAFgKAAgUIAAgaQgIAHgJAFg");
	this.shape_94.setTransform(171.8,327.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000033").s().p("AhLBjIAAgDQAJgBAEgCQAEgCACgGQADgEAAgHIAAgVIAAhsQABgSgGgHQgFgIgNAAIAAgEIAugGIABANIAAADQALgHALgEQAJgDAMAAQAYAAARAOQALAJAFAOQAHAOAAAQQAAASgHANQgGAPgMAKQgRAPgZAAQgLAAgJgDQgIgEgLgJIAAAdIAAALQAAAKABAGQABAEAEAEQAEAEAMACIAAADgAgIhYQgHAFgFAHQgFAHgCAMQgCALABAVQgBAVACAKQACALAFAHQAFAGAGAEQAIAEAGAAQARAAAMgQQAIgKAEgMQAEgNAAgOQAAgNgEgNQgDgNgIgKQgMgQgRAAQgHAAgHAEg");
	this.shape_95.setTransform(155.5,330.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000033").s().p("AAWBAQgFgEgGgJQgKAKgEADQgLAGgNAAQgSAAgKgJQgKgIAAgOQAAgNAIgJQAFgFAGgDQAGgDAMgDIAUgFIAKgFQAFgEACgFQACgFAAgJQAAgSgHgJIgHgGQgFgCgFAAQgHAAgFADQgFADgCAGIgEAJQgEAIgIAAQgFAAgEgEQgDgDAAgGQAAgIALgFQAGgDAJgCQAJgCAJAAQAKAAAJADQALACAHAEQAKAGADAJQABAFAAALIAAA6IABAUQADALAKAAQAFAAADgCQADgBAEgGIACACQgFARgVAAQgLAAgHgGgAgGACIgQAJQgFADgDAFQgIAJAAAMQAAAKAGAHQAGAHAJAAQAHAAAHgFQAGgFADgIQAFgKAAgUIAAgaQgIAHgJAFg");
	this.shape_96.setTransform(141.1,327.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000033").s().p("AhfBsIAAgEICJjOIgsAAQgYAAgOAEQgPADgLAJQgJAIgFAIQgFAJgBAMIgEAAIAEg6ICoAAIAAAEIiIDOIAzAAQArAAAUgNQAQgKAKgUQAEgJACgLIAEAAIgFBEg");
	this.shape_97.setTransform(123.6,323.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000033").s().p("Ag3AtQgIgJgFgMQgFgMAAgMQAAgYATgUQAXgZAfAAQAgAAAXAZQATAUAAAYQAAAagSATQgWAZgiAAQggAAgXgZgAgfguQgNASAAAbQAAAbAMATQAOAVATAAQAJAAAIgFQAIgEAFgJQAHgJADgNQAEgNAAgNQAAgMgEgNQgEgNgHgJQgMgSgTAAQgRAAgNATg");
	this.shape_98.setTransform(97.3,327.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000033").s().p("AALBEIAAgDQAJgBAEgDQAEgCADgFIACgLIABgVIAAghIgBgZQgCgIgDgFQgDgFgHgEQgHgDgIAAQgIAAgIAEQgHADgFAGQgEAHgCAIQgBAIAAASIAAAeIAAALQAAALABAFQABAFAEADQAEAFAMACIAAADIhFAAIAAgDQAJgBAEgDQAEgCADgFIACgLIABgVIAAgmIgBgXQgBgGgCgEQgDgFgEgCQgEgCgHAAIAAgEIArgFQADAJAAAIIAAADQATgUAaAAQAUAAANAJQAMAKAAARIAABBQAAALABAFQABAFAEADQAEAFAMACIAAADg");
	this.shape_99.setTransform(80.6,327.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000033").s().p("AAWBAQgFgEgGgJQgKAKgEADQgLAGgNAAQgSAAgKgJQgKgIAAgOQAAgNAIgJQAFgFAGgDQAGgDAMgDIAUgFIAKgFQAFgEACgFQACgFAAgJQAAgSgHgJIgHgGQgFgCgFAAQgHAAgFADQgFADgCAGIgEAJQgEAIgIAAQgFAAgEgEQgDgDAAgGQAAgIALgFQAGgDAJgCQAJgCAJAAQAKAAAJADQALACAHAEQAKAGADAJQABAFAAALIAAA6IABAUQADALAKAAQAFAAADgCQADgBAEgGIACACQgFARgVAAQgLAAgHgGgAgGACIgQAJQgFADgDAFQgIAJAAAMQAAAKAGAHQAGAHAJAAQAHAAAHgFQAGgFADgIQAFgKAAgUIAAgaQgIAHgJAFg");
	this.shape_100.setTransform(65.9,327.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000033").s().p("AgiBuIAAgDQAJgBAFgCQAEgCACgGIADgLIAAgVIAAgnIAAgXQgBgFgDgEQgDgFgDgBQgEgDgHAAIAAgDIAsgGIAABaIAAAMQAAALACAEQABAGADACQAFAFAMACIAAADgAgKhVQgEgFAAgGQAAgGAEgDQAFgEAFAAQAGAAAEAEQAEADAAAGQAAAGgEAFQgEADgGAAQgGAAgEgDg");
	this.shape_101.setTransform(54.5,323.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000033").s().p("AgiBvIAAgEQAJgBAFgCQAEgCACgGIADgLIAAgVIAAh7IAAgWQgBgHgDgEQgDgEgDgCQgEgCgHgBIAAgDIAsgGIAACvIAAAMQAAALACAFQABAFADADQAFAEAMACIAAAEg");
	this.shape_102.setTransform(46.7,323.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000033").s().p("AgiBuIAAgDQAJgBAFgCQAEgCACgGIADgLIAAgVIAAgnIAAgXQgBgFgDgEQgDgFgDgBQgEgDgHAAIAAgDIAsgGIAABaIAAAMQAAALACAEQABAGADACQAFAFAMACIAAADgAgKhVQgEgFAAgGQAAgGAEgDQAFgEAFAAQAGAAAEAEQAEADAAAGQAAAGgEAFQgEADgGAAQgGAAgEgDg");
	this.shape_103.setTransform(38.9,323.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000033").s().p("AA4BEIAAgDQAJgBAEgDQAEgCADgFQACgEAAgHIABgVIAAgdQAAgSgBgIQgBgIgDgGQgIgNgSAAQgTAAgJAOQgIANAAAaIAAAeIAAALQAAALACAFQABAFADADQAFAFAMACIAAADIhFAAIAAgDQAKgBAEgDQAEgCACgFIADgLIAAgVIAAgcIgBgcQgBgIgDgFQgEgGgGgDQgGgEgIAAQgJAAgIAFQgIAEgEAHQgFAHgCAJQgBAJAAAOIAAAcIAAALQAAALABAFQABAFAEADQAEAFAMACIAAADIhFAAIAAgDQAJgBAEgDQAEgCADgFIACgLIABgVIAAgmIgBgXQgBgHgCgEQgDgEgEgCQgEgCgHgBIAAgDIAsgFIADAWQAKgLANgGQAMgFANAAQAPAAAKAHQAFAFAIALQAMgMAMgGQAMgFAOAAQATAAAMAKQAMAKAAARIAAA1IAAALIABAQQACAFADADQAFAFALACIAAADg");
	this.shape_104.setTransform(22.1,327.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000033").s().p("AheBsIAAgEQAJAAAGgCQAFgCAFgFQAEgFACgIQACgIAAgQIAAhzQAAgQgCgIQgCgIgEgFQgFgEgFgCQgGgCgJgBIAAgEICpAAIACA1IgDAAQgCgOgFgIQgFgJgJgHQgHgFgKgCQgLgDgQAAIgjAAIAABfIAJAAQAOAAAHgCQAHgCAFgFQAEgEACgGQACgHACgMIADAAIAABUIgEAAQgBgMgDgIQgDgHgFgFQgFgFgHgCQgHgCgLAAIgJAAIAAAjIABAgQABAJADAHQAFALALAGQAKAFASAAQATAAANgFQANgFAIgKQAFgHAEgIQAEgJADgOIADAAIgCA/g");
	this.shape_105.setTransform(-0.7,323.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000033").s().p("AAWBAQgFgEgGgJQgKAKgEADQgLAGgNAAQgSAAgKgJQgKgIAAgOQAAgNAIgJQAFgFAGgDQAGgDAMgDIAUgFIAKgFQAFgEACgFQACgFAAgJQAAgSgHgJIgHgGQgFgCgFAAQgHAAgFADQgFADgCAGIgEAJQgEAIgIAAQgFAAgEgEQgDgDAAgGQAAgIALgFQAGgDAJgCQAJgCAJAAQAKAAAJADQALACAHAEQAKAGADAJQABAFAAALIAAA6IABAUQADALAKAAQAFAAADgCQADgBAEgGIACACQgFARgVAAQgLAAgHgGgAgGACIgQAJQgFADgDAFQgIAJAAAMQAAAKAGAHQAGAHAJAAQAHAAAHgFQAGgFADgIQAFgKAAgUIAAgaQgIAHgJAFg");
	this.shape_106.setTransform(216.1,277.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000033").s().p("AgUBRQgEgDgCgGQgBgFAAgOIAAheIgRAAIAAgDQAKgDAJgJQAFgGADgGQAEgFACgKIACgFIAGAAIAAApIAnAAIAAAGIgnAAIAABbQAAARAFAGQADAFAEACQAGABAFAAQAHABAFgDQAFgDAGgIIABACQgEAJgKAGQgKAEgOAAQgRAAgJgIg");
	this.shape_107.setTransform(205,275.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000033").s().p("Ag1BEIAAgDQAJgBAFgDQADgCADgFIADgLIAAgVIAAgmIAAgXQgCgGgCgEQgDgFgDgCQgFgCgGAAIAAgEIAogFQADAOAAAKQAFgKAHgFQANgJAQAAQALAAAFAEQAFAEAAAGQAAAFgDADQgDADgFAAQgFAAgEgFIgEgFQgGgGgJAAQgKAAgFAOQgGANAAAZIAAAdIAAALQAAALACAFQABAFADADQADAFAMACIAAADg");
	this.shape_108.setTransform(194.8,277.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000033").s().p("AgYA/QgOgGgJgMQgOgSAAgaQAAgjAZgUQATgPAXAAQAMAAALAFQAKAEAIAJQAMANAAAUIhcAAIgBALQAAANAFANQADANAIAJQAHAJAKAFQAJAFAMAAQAJAAAHgDQAHgDAGgFQAFgGAFgMIADABQgFATgNAJQgNAKgXAAQgSAAgOgHgAgUg2QgKAMgCASIBDAAQgBgQgFgIQgEgIgHgFQgHgEgIAAQgNAAgKALg");
	this.shape_109.setTransform(181.5,277.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000033").s().p("AAiAwQgUAVgaAAQgUAAgLgLQgMgIgBgSIAAg2IAAgMIgBgQQgBgFgDgDQgFgEgMgCIAAgEIAvAAIAABPIAAAZQACAJADAEQAEAGAGADQAHADAHAAQAIAAAIgDQAIgDAEgHQAEgGACgIQACgIgBgSIAAgeIAAgMIgBgQQgBgFgDgDQgFgEgMgCIAAgEIAvAAIAABVIAAAXQABAGACAFQAEAEADACQAEACAHAAIAAAEIgrAGQgCgKAAgLg");
	this.shape_110.setTransform(166.1,277.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000033").s().p("AAXBsIAAgEQAJAAAGgCQAFgDAFgEQAEgFACgIQACgIAAgQIAAg6IhvAAIAAA6QAAAQACAIQACAIAFAFQAEAEAGADQAFACAJAAIAAAEIhlAAIAAgEQAKAAAFgCQAGgDAEgEQAFgFACgIQACgIAAgQIAAhzQAAgQgCgIQgCgIgFgFQgEgEgGgCQgGgCgJgBIAAgEIBlAAIAAAEQgJABgFACQgGACgEAEQgFAFgCAIQgCAIAAAQIAAAzIBvAAIAAgzQAAgQgCgIQgCgIgEgFQgFgEgFgCQgGgCgJgBIAAgEIBlAAIAAAEQgJABgGACQgGACgEAEQgFAFgCAIQgBAIAAAQIAABzQAAAQABAIQACAIAFAFQAEAEAGADQAGACAJAAIAAAEg");
	this.shape_111.setTransform(144.6,273.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000033").s().p("Ag3AtQgIgJgFgMQgFgMAAgMQAAgYATgUQAXgZAfAAQAgAAAXAZQATAUAAAYQAAAagSATQgWAZgiAAQghAAgWgZgAgfguQgNASAAAbQAAAbAMATQAOAVATAAQAJAAAHgFQAIgEAHgJQAFgJAFgNQADgNAAgNQAAgMgDgNQgFgNgGgJQgNgSgTAAQgRAAgNATg");
	this.shape_112.setTransform(115.1,277.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000033").s().p("AALBEIAAgDQAJgBAEgDQAEgCADgFIACgLIABgVIAAghIgBgZQgCgIgDgFQgDgFgHgEQgHgDgIAAQgIAAgIAEQgHADgFAGQgEAHgCAIQgBAIAAASIAAAeIAAALQAAALABAFQABAFAEADQAEAFAMACIAAADIhFAAIAAgDQAJgBAEgDQAEgCADgFIACgLIABgVIAAgmIgBgXQgBgGgCgEQgDgFgEgCQgEgCgHAAIAAgEIArgFQADAJAAAIIAAADQATgUAaAAQAUAAANAJQAMAKAAARIAABBQAAALABAFQABAFAEADQAEAFAMACIAAADg");
	this.shape_113.setTransform(98.4,277.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000033").s().p("AAWBAQgFgEgGgJQgKAKgEADQgLAGgNAAQgSAAgKgJQgKgIAAgOQAAgNAIgJQAFgFAGgDQAGgDAMgDIAUgFIAKgFQAFgEACgFQACgFAAgJQAAgSgHgJIgHgGQgFgCgFAAQgHAAgFADQgFADgCAGIgEAJQgEAIgIAAQgFAAgEgEQgDgDAAgGQAAgIALgFQAGgDAJgCQAJgCAJAAQAKAAAJADQALACAHAEQAKAGADAJQABAFAAALIAAA6QAAAPABAFQADALAKAAQAFAAADgCQADgBAEgGIACACQgFARgVAAQgLAAgHgGgAgGACIgQAJQgFADgDAFQgIAJAAAMQAAAKAGAHQAGAHAJAAQAHAAAHgFQAGgFADgIQAFgKAAgUIAAgaQgIAHgJAFg");
	this.shape_114.setTransform(83.7,277.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000033").s().p("AgiBuIAAgDQAJgBAFgDQAEgBACgGIADgLIAAgVIAAgnIAAgXQgBgFgDgEQgDgFgDgCQgEgBgHgBIAAgDIAsgGIAABaIAAAMQAAALACAEQABAGADACQAFAFAMACIAAADgAgKhWQgEgDAAgHQAAgFAEgEQAFgFAFABQAGgBAEAFQAEAEAAAFQAAAHgEADQgEAFgGAAQgGAAgEgFg");
	this.shape_115.setTransform(72.3,273.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000033").s().p("Ag1BEIAAgDQAJgBAFgDQADgCADgFIACgLIABgVIAAgmIgBgXQgBgGgCgEQgDgFgDgCQgEgCgHAAIAAgEIAogFQADAOAAAKQAFgKAHgFQANgJAQAAQALAAAFAEQAFAEAAAGQAAAFgDADQgDADgFAAQgFAAgEgFIgEgFQgHgGgIAAQgKAAgFAOQgGANAAAZIAAAdIAAALQAAALACAFQABAFADADQADAFAMACIAAADg");
	this.shape_116.setTransform(63,277.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000033").s().p("Ag3AtQgIgJgFgMQgFgMAAgMQAAgYATgUQAXgZAfAAQAgAAAXAZQATAUAAAYQAAAagSATQgWAZgiAAQghAAgWgZgAgfguQgNASAAAbQAAAbAMATQAOAVATAAQAJAAAHgFQAIgEAHgJQAFgJAFgNQADgNAAgNQAAgMgDgNQgFgNgGgJQgOgSgSAAQgRAAgNATg");
	this.shape_117.setTransform(48.8,277.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000033").s().p("AgTBRQgFgDgCgGQgBgFAAgOIAAheIgRAAIAAgDQALgDAIgJQAFgGADgGQAEgFADgKIABgFIAGAAIAAApIAnAAIAAAGIgnAAIAABbQAAARAFAGQADAFAEACQAFABAGAAQAHABAFgDQAEgDAHgIIABACQgEAJgKAGQgKAEgNAAQgSAAgIgIg");
	this.shape_118.setTransform(37,275.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000033").s().p("AgnAzQgSgTAAgcQAAgNAFgOQAFgNAIgKQAKgLAOgGQAOgGAPAAQAXAAANALQAIAGAAAHQAAAFgDAEQgDADgFAAQgKAAgGgPIgDgJQgBgDgDgCQgEgDgIAAQgJAAgHAFQgGAFgFAHQgFAGgEALQgGAQAAAPQABANAFANQAFAOAIAJQANAOASAAQAPAAAKgKQAFgFAFgLIADABQgGARgLAHQgLAIgUAAQgfAAgSgTg");
	this.shape_119.setTransform(25.4,277.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000033").s().p("AgiBuIAAgDQAJgBAFgDQAEgBACgGIADgLIAAgVIAAgnIAAgXQgBgFgDgEQgDgFgDgCQgEgBgHgBIAAgDIAsgGIAABaIAAAMQAAALACAEQABAGADACQAFAFAMACIAAADgAgKhWQgEgDAAgHQAAgFAEgEQAFgFAFABQAGgBAEAFQAEAEAAAFQAAAHgEADQgEAFgGAAQgGAAgEgFg");
	this.shape_120.setTransform(14.8,273.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000033").s().p("AgDBsIg/igQgMgggIgJQgEgFgHgCQgHgDgKAAIAAgEIBoAAIAAAEQgLABgGADQgFACgDAFQgCAFAAAGIAAAHIAFAOIAtB+IAuhvQAKgXAAgLQgBgGgCgFQgCgFgCgDIgHgEIgKgBIAAgEIBGAAIAAAEQgJABgGADQgHAEgFAHQgFAFgDAJIgNAbIhBCbg");
	this.shape_121.setTransform(0,273.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000033").s().p("AAWBAQgFgEgGgJQgKAKgEADQgLAGgNAAQgSAAgKgJQgKgIAAgOQAAgNAIgJQAFgFAGgDQAGgDAMgDIAUgFIAKgFQAFgEACgFQACgFAAgJQAAgSgHgJIgHgGQgFgCgFAAQgHAAgFADQgFADgCAGIgEAJQgEAIgIAAQgFAAgEgEQgDgDAAgGQAAgIALgFQAGgDAJgCQAJgCAJAAQAKAAAJADQALACAHAEQAKAGADAJQABAFAAALIAAA6IABAUQADALAKAAQAFAAADgCQADgBAEgGIACACQgFARgVAAQgLAAgHgGgAgGACIgQAJQgFADgDAFQgIAJAAAMQAAAKAGAHQAGAHAJAAQAHAAAHgFQAGgFADgIQAFgKAAgUIAAgaQgIAHgJAFg");
	this.shape_122.setTransform(232.8,227.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000033").s().p("AgiBuIAAgDQAJgBAFgCQAEgCACgGIADgLIAAgVIAAgnIAAgXQgBgFgDgEQgDgFgDgBQgEgDgHAAIAAgDIAsgGIAABaIAAAMQAAALACAEQABAGADACQAFAFAMACIAAADgAgKhVQgEgFAAgGQAAgGAEgDQAFgEAFAAQAGAAAEAEQAEADAAAGQAAAGgEAFQgEADgGAAQgGAAgEgDg");
	this.shape_123.setTransform(221.3,222.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000033").s().p("Ag1BEIAAgDQAJgBAEgDQAEgCADgFIACgLIABgVIAAgmIgBgXQgBgGgCgEQgDgFgEgCQgEgCgGAAIAAgEIAogFQADAOAAAKQAGgKAFgFQAOgJAQAAQAKAAAGAEQAFAEAAAGQAAAFgDADQgDADgFAAQgFAAgEgFIgEgFQgHgGgIAAQgKAAgFAOQgGANAAAZIAAAdIAAALQAAALABAFQACAFADADQADAFAMACIAAADg");
	this.shape_124.setTransform(212.1,227.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000033").s().p("Ag3AtQgJgJgEgMQgFgMAAgMQAAgYATgUQAXgZAfAAQAgAAAXAZQATAUAAAYQAAAagSATQgWAZgiAAQggAAgXgZgAgfguQgNASAAAbQAAAbAMATQAOAVATAAQAIAAAJgFQAHgEAGgJQAHgJADgNQAEgNAAgNQAAgMgEgNQgEgNgHgJQgNgSgRAAQgSAAgNATg");
	this.shape_125.setTransform(197.9,227.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000033").s().p("AgTBRQgFgDgCgGQgBgFAAgOIAAheIgRAAIAAgDQAKgDAJgKQAFgFADgGQAEgGADgJIABgFIAGAAIAAApIAnAAIAAAGIgnAAIAABbQAAAQAFAIQADADAEACQAFACAGAAQAHAAAFgCQAFgDAGgIIABACQgEAJgKAGQgKAEgNAAQgSAAgIgIg");
	this.shape_126.setTransform(186,225.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000033").s().p("AgnAzQgSgTAAgcQAAgNAFgOQAFgNAIgKQAKgLAOgGQAOgGAPAAQAXAAANALQAIAGAAAHQAAAFgDAEQgEADgEAAQgKAAgGgPIgDgJQgBgDgCgCQgFgDgIAAQgJAAgHAFQgHAFgEAHQgFAGgEALQgGAQAAAPQABANAEANQAFAOAKAJQAMAOASAAQAPAAAKgKQAFgFAFgLIADABQgGARgLAHQgLAIgUAAQgfAAgSgTg");
	this.shape_127.setTransform(174.5,227.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000033").s().p("AgiBuIAAgDQAJgBAFgCQAEgCACgGIADgLIAAgVIAAgnIAAgXQgBgFgDgEQgDgFgDgBQgEgDgHAAIAAgDIAsgGIAABaIAAAMQAAALACAEQABAGADACQAFAFAMACIAAADgAgKhVQgEgFAAgGQAAgGAEgDQAFgEAFAAQAGAAAEAEQAEADAAAGQAAAGgEAFQgEADgGAAQgGAAgEgDg");
	this.shape_128.setTransform(163.9,222.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000033").s().p("AgDBsIg/igQgMgggIgJQgEgFgHgCQgHgDgKAAIAAgEIBoAAIAAAEQgMABgFADQgEACgDAFQgEAFAAAGIABAHIAFAOIAtB+IAuhvQAJgXAAgLQAAgGgCgFQgBgFgEgDIgGgEIgKgBIAAgEIBGAAIAAAEQgJABgGADQgGAEgHAHQgDAFgFAJIgMAbIhACbg");
	this.shape_129.setTransform(149.1,223.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000033").s().p("AgYA/QgOgGgKgMQgNgSAAgaQAAgjAagUQASgPAWAAQANAAALAFQALAEAHAJQALANAAAUIhbAAIAAALQAAANADANQAFANAHAJQAGAJALAFQAKAFALAAQAJAAAHgDQAIgDAEgFQAHgGADgMIAEABQgEATgNAJQgPAKgVAAQgTAAgOgHgAgUg2QgKAMgCASIBDAAQgBgQgFgIQgEgIgHgFQgHgEgIAAQgNAAgKALg");
	this.shape_130.setTransform(122.6,227.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000033").s().p("AhMBjIAAgDQAKgBAEgCQAEgCACgGQACgEABgHIABgVIAAhsQAAgSgGgHQgGgIgNAAIAAgEIAugGIACANIAAADQALgHALgEQAJgDAMAAQAYAAARAOQALAJAGAOQAFAOAAAQQAAASgFANQgHAPgLAKQgTAPgYAAQgLAAgIgDQgJgEgMgJIAAAdIAAALQAAAKACAGQABAEAEAEQAEAEAMACIAAADgAgIhYQgHAFgFAHQgFAHgBAMQgDALAAAVQAAAVADAKQABALAFAHQAEAGAIAEQAHAEAGAAQARAAAMgQQAIgKAEgMQAEgNAAgOQAAgNgEgNQgEgNgGgKQgMgQgSAAQgGAAgIAEg");
	this.shape_131.setTransform(106.8,230);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000033").s().p("AAiAxQgUATgaABQgUgBgLgJQgNgJAAgSIAAg2IAAgMIgBgPQgBgGgDgDQgFgEgMgCIAAgDIAuAAIAABOIABAZQACAIADAGQADAFAHADQAHADAHAAQAIAAAIgDQAHgDAFgGQAEgHACgIQABgIAAgTIAAgdIAAgMIgBgPQgBgGgDgDQgFgEgMgCIAAgDIAuAAIAABUIABAXQABAGADAFQADAEADACQAEABAHABIAAADIgrAHQgCgLAAgJg");
	this.shape_132.setTransform(90.2,227.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000033").s().p("AgiBvIAAgEQAJgBAFgCQAEgCACgGIADgLIAAgVIAAh7IAAgWQgBgHgDgEQgDgEgDgCQgEgCgHgBIAAgDIAsgGIAACvIAAAMQAAALACAFQABAFADADQAFAEAMACIAAAEg");
	this.shape_133.setTransform(78.2,222.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000033").s().p("AAWBAQgFgEgGgJQgKAKgEADQgLAGgNAAQgSAAgKgJQgKgIAAgOQAAgNAIgJQAFgFAGgDQAGgDAMgDIAUgFIAKgFQAFgEACgFQACgFAAgJQAAgSgHgJIgHgGQgFgCgFAAQgHAAgFADQgFADgCAGIgEAJQgEAIgIAAQgFAAgEgEQgDgDAAgGQAAgIALgFQAGgDAJgCQAJgCAJAAQAKAAAJADQALACAHAEQAKAGADAJQABAFAAALIAAA6IABAUQADALAKAAQAFAAADgCQADgBAEgGIACACQgFARgVAAQgLAAgHgGgAgGACIgQAJQgFADgDAFQgIAJAAAMQAAAKAGAHQAGAHAJAAQAHAAAHgFQAGgFADgIQAFgKAAgUIAAgaQgIAHgJAFg");
	this.shape_134.setTransform(68,227.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000033").s().p("AAeBgQgMAIgKADQgJAEgMAAQgYAAgRgPQgLgJgGgOQgGgOAAgQQAAgRAHgPQAGgOALgKQASgPAZAAQALAAAIAEQAJADALAJIAAg6QAAgRgFgIQgGgHgNAAIAAgEIAwgGIAAC1QAAASAGAIQAFAHAOAAIAAAEIguAHQgCgIAAgJgAghgIQgIAJgEANQgEANAAAOQAAANAEAOQAEAMAGAKQAMAQARAAQAIAAAHgEQAHgEAFgIQAFgHABgLQACgLAAgVQAAgWgCgLQgBgKgFgHQgFgGgHgEQgHgDgGAAQgRAAgMAPg");
	this.shape_135.setTransform(52.3,223.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000033").s().p("AAWBAQgFgEgGgJQgKAKgEADQgLAGgNAAQgSAAgKgJQgKgIAAgOQAAgNAIgJQAFgFAGgDQAGgDAMgDIAUgFIAKgFQAFgEACgFQACgFAAgJQAAgSgHgJIgHgGQgFgCgFAAQgHAAgFADQgFADgCAGIgEAJQgEAIgIAAQgFAAgEgEQgDgDAAgGQAAgIALgFQAGgDAJgCQAJgCAJAAQAKAAAJADQALACAHAEQAKAGADAJQABAFAAALIAAA6IABAUQADALAKAAQAFAAADgCQADgBAEgGIACACQgFARgVAAQgLAAgHgGgAgGACIgQAJQgFADgDAFQgIAJAAAMQAAAKAGAHQAGAHAJAAQAHAAAHgFQAGgFADgIQAFgKAAgUIAAgaQgIAHgJAFg");
	this.shape_136.setTransform(37.3,227.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000033").s().p("AAiAxQgUATgaABQgUgBgLgJQgMgJAAgSIAAg2IAAgMIgCgPQgBgGgDgDQgFgEgMgCIAAgDIAuAAIAABOIABAZQACAIADAGQAEAFAGADQAHADAIAAQAHAAAIgDQAHgDAFgGQAFgHABgIQACgIAAgTIAAgdIAAgMIgCgPQgBgGgDgDQgFgEgMgCIAAgDIAuAAIAABUIABAXQABAGADAFQACAEAEACQAEABAHABIAAADIgrAHQgCgLAAgJg");
	this.shape_137.setTransform(21.5,227.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000033").s().p("Ag2BoQgWgKgOgRQgKgOgGgSQgGgSAAgVQAAgbAKgYQALgZASgPQAPgNATgHQAUgHAVAAQAMAAALACQALADAMAFIAJAEIAHACQAGAAADgLIAEAAIACBFIgDAAQgLgjgRgRQgRgRgYAAQgSAAgOAIQgNAHgMASQgXAjAAAsQAAAWAFATQAGATALAPQAVAcAeAAQALAAALgFQAKgFAHgJQAKgMAAgRQAAgQgJgHQgIgHgUAAIAAgDIBlAAIAAADQgOACgFACQgGADgDAGQgDAHAAAVIABASIAAADQgGgCgDAAQgDAAgGAEQgNAJgSAFQgTAFgTAAQgbAAgXgJg");
	this.shape_138.setTransform(1.8,223.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000033").s().p("AAWBAQgFgEgGgJQgKAKgEADQgLAGgNAAQgSAAgKgJQgKgIAAgOQAAgNAIgJQAFgFAGgDQAGgDAMgDIAUgFIAKgFQAFgEACgFQACgFAAgJQAAgSgHgJIgHgGQgFgCgFAAQgHAAgFADQgFADgCAGIgEAJQgEAIgIAAQgFAAgEgEQgDgDAAgGQAAgIALgFQAGgDAJgCQAJgCAJAAQAKAAAJADQALACAHAEQAKAGADAJQABAFAAALIAAA6QAAAPABAFQADALAKAAQAFAAADgCQADgBAEgGIACACQgFARgVAAQgLAAgHgGgAgGACIgQAJQgFADgDAFQgIAJAAAMQAAAKAGAHQAGAHAJAAQAHAAAHgFQAGgFADgIQAFgKAAgUIAAgaQgIAHgJAFg");
	this.shape_139.setTransform(133.7,177.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000033").s().p("AA4BEIAAgDQAJgBAEgDQAEgCADgFQACgEAAgHIABgVIAAgdQAAgSgBgIQgBgIgDgGQgIgNgSAAQgTAAgJAOQgIANAAAaIAAAeIAAALQAAALACAFQABAFADADQAFAFAMACIAAADIhFAAIAAgDQAKgBAEgDQAEgCACgFIADgLIAAgVIAAgcIgBgcQgBgIgDgFQgEgGgGgDQgGgEgIAAQgJAAgIAFQgIAEgEAHQgFAHgCAJQgBAJAAAOIAAAcIAAALQAAALABAFQABAFAEADQAEAFAMACIAAADIhFAAIAAgDQAJgBAEgDQAEgCADgFIACgLIABgVIAAgmIgBgXQgBgHgCgEQgDgEgEgCQgEgCgHgBIAAgDIAsgFIADAWQAKgLANgGQAMgFANAAQAPAAAKAHQAFAFAIALQAMgMAMgGQAMgFAOAAQATAAAMAKQAMAKAAARIAAA1IAAALIABAQQACAFADADQAFAFALACIAAADg");
	this.shape_140.setTransform(113.2,177);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000033").s().p("AAiAwQgUAVgaAAQgTAAgNgLQgMgIABgSIAAg2IAAgMIgBgQQgCgFgEgDQgEgEgMgCIAAgEIAvAAIAABPIABAZQABAJADAEQADAGAHADQAGADAJAAQAHAAAIgDQAHgDAFgHQAEgGACgIQABgIABgSIAAgeIAAgMIgBgQQgCgFgEgDQgEgEgMgCIAAgEIAvAAIAABVIABAXQAAAGACAFQADAEAFACQADACAHAAIAAAEIgrAGQgCgKAAgLg");
	this.shape_141.setTransform(92,177.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000033").s().p("Ag7BDIAAgDIBWh+IghAAQgNAAgHADQgGACgGAGQgFAGgFANIgCgBIACghIBpAAIAAADIhXB9IAVAAQASABALgCQAMgCAHgEQAMgGAGgSIADAAIgDAkg");
	this.shape_142.setTransform(77.3,177.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000033").s().p("AgYA/QgOgGgKgMQgNgSAAgaQAAgjAZgUQATgPAWAAQANAAALAFQALAEAHAJQALANAAAUIhbAAIAAALQAAANADANQAEANAHAJQAIAJAKAFQAKAFALAAQAIAAAIgDQAIgDAFgFQAFgGAEgMIAEABQgEATgOAJQgOAKgWAAQgSAAgOgHgAgUg2QgKAMgCASIBDAAQgBgQgFgIQgEgIgHgFQgHgEgIAAQgNAAgKALg");
	this.shape_143.setTransform(63.5,177.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000033").s().p("AgTBRQgFgDgCgGQgBgFAAgOIAAheIgRAAIAAgDQAKgDAJgJQAFgGADgGQAEgFADgKIABgFIAGAAIAAApIAnAAIAAAGIgnAAIAABbQAAARAFAGQADAFAEABQAFACAGAAQAHABAFgDQAFgDAGgIIABACQgEAJgKAGQgKAEgNAAQgSAAgIgIg");
	this.shape_144.setTransform(52.8,175.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000033").s().p("AgnAzQgSgTAAgcQAAgNAFgOQAFgNAIgKQAKgLAOgGQAOgGAPAAQAXAAANALQAIAGAAAHQAAAFgDAEQgEADgEAAQgKAAgGgPIgDgJIgDgFQgFgDgIAAQgJAAgHAFQgHAFgFAHQgEAGgEALQgGAQAAAPQABANAFANQAEAOAKAJQAMAOASAAQAPAAAKgKQAFgFAFgLIADABQgGARgLAHQgLAIgUAAQgfAAgSgTg");
	this.shape_145.setTransform(41.3,177.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000033").s().p("Ag3AtQgIgJgFgMQgFgMAAgMQAAgYATgUQAXgZAfAAQAgAAAXAZQATAUAAAYQAAAagSATQgWAZgiAAQghAAgWgZgAgfguQgNASAAAbQAAAbAMATQAOAVATAAQAIAAAIgFQAJgEAGgJQAFgJAFgNQADgNAAgNQAAgMgDgNQgFgNgHgJQgNgSgRAAQgSAAgNATg");
	this.shape_146.setTransform(26.2,177.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000033").s().p("AAkBsIAAgEQAJAAAFgCQAGgDAEgEQAFgFACgIQACgIAAgQIAAiMIhQC+IgEAAIhQi7IAACJQAAAQABAIQACAIAFAFQAEAFAGACQAGACAJAAIAAAEIhJAAIAAgEQAJAAAGgCQAFgCAFgFQAEgFACgIQACgIAAgQIAAhzIAAgOQgBgLgDgGQgEgHgHgEQgHgDgLgBIAAgEIBEAAIBECoIBHioIBAAAIAAAEQgJABgFACQgGACgEAEQgEADgBAEQgCAEgBAHIgBATIAABzQAAAQACAIQACAIAFAFQAJAIAPABIAAAEg");
	this.shape_147.setTransform(3.4,173);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000033").s().p("AAWBAQgFgEgGgJQgKAKgEADQgLAGgNAAQgSAAgKgJQgKgIAAgOQAAgNAIgJQAFgFAGgDQAGgDAMgDIAUgFIAKgFQAFgEACgFQACgFAAgJQAAgSgHgJIgHgGQgFgCgFAAQgHAAgFADQgFADgCAGIgEAJQgEAIgIAAQgFAAgEgEQgDgDAAgGQAAgIALgFQAGgDAJgCQAJgCAJAAQAKAAAJADQALACAHAEQAKAGADAJQABAFAAALIAAA6IABAUQADALAKAAQAFAAADgCQADgBAEgGIACACQgFARgVAAQgLAAgHgGgAgGACIgQAJQgFADgDAFQgIAJAAAMQAAAKAGAHQAGAHAJAAQAHAAAHgFQAGgFADgIQAFgKAAgUIAAgaQgIAHgJAFg");
	this.shape_148.setTransform(172,127);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000033").s().p("AgiBvIAAgEQAJgBAFgCQAEgCACgGIADgLIAAgVIAAh7IAAgWQgBgHgDgEQgDgEgDgCQgEgCgHgBIAAgDIAsgGIAACvIAAAMQAAALACAFQABAFADADQAFAEAMACIAAAEg");
	this.shape_149.setTransform(160.5,122.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000033").s().p("AgiBvIAAgEQAJgBAFgCQAEgCACgGIADgLIAAgVIAAh7IAAgWQgBgHgDgEQgDgEgDgCQgEgCgHgBIAAgDIAsgGIAACvIAAAMQAAALACAFQABAFADADQAFAEAMACIAAAEg");
	this.shape_150.setTransform(152.7,122.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000033").s().p("AgiBuIAAgDQAJgBAFgDQAEgCACgFIADgLIAAgVIAAgnIAAgXQgBgFgDgEQgDgFgDgCQgEgCgHAAIAAgEIAsgFIAABaIAAAMQAAALACAEQABAFADAEQAFAEAMACIAAADgAgKhWQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAEAEAAAFQAAAGgEAEQgEAEgGABQgGgBgEgEg");
	this.shape_151.setTransform(144.9,122.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000033").s().p("AgDBsIg/igQgMgggIgJQgEgFgHgCQgHgDgKAAIAAgEIBoAAIAAAEQgMABgFADQgFACgDAFQgCAFAAAGIAAAHIAFAOIAuB+IAthvQAKgXAAgLQAAgGgDgFQgCgFgCgDIgIgEIgJgBIAAgEIBGAAIAAAEQgJABgGADQgHAEgFAHQgFAFgDAJIgMAbIhCCbg");
	this.shape_152.setTransform(130.1,122.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000033").s().p("Ag3AtQgIgJgFgMQgFgMAAgMQAAgYATgUQAXgZAfAAQAgAAAXAZQATAUAAAYQAAAagSATQgWAZgiAAQggAAgXgZgAgfguQgNASAAAbQAAAbAMATQAOAVATAAQAJAAAIgFQAIgEAFgJQAHgJADgNQAEgNAAgNQAAgMgEgNQgEgNgGgJQgNgSgTAAQgRAAgNATg");
	this.shape_153.setTransform(102.7,127);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000033").s().p("AgnAzQgSgTAAgcQAAgNAFgOQAFgNAIgKQAKgLAOgGQAOgGAPAAQAYAAAMALQAIAGAAAHQAAAFgDAEQgDADgFAAQgLAAgEgPIgEgJIgEgFQgFgDgGAAQgKAAgHAFQgHAFgEAHQgGAGgDALQgFAQgBAPQAAANAGANQAFAOAIAJQANAOASAAQAPAAAKgKQAFgFAFgLIADABQgGARgLAHQgLAIgUAAQgfAAgSgTg");
	this.shape_154.setTransform(87.8,127);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000033").s().p("AgTBBIgJgDIgDAAQgGAAgDAFIgCAAIAAgtIACAAQAFARAGAJQANASAQAAQAJAAAHgGQAIgGAAgNQAAgKgGgHIgIgHIgPgKQgUgJgGgHQgKgKAAgOQAAgOAKgKQAKgMASAAQAIAAAGADIAGADIAEAAQADAAADgEIADAAIACAkIgEAAIgDgNQgCgEgEgEQgFgGgGgEQgGgDgGAAQgJAAgGAGQgGAHAAAJQAAAIAFAGQAGAGAMAFIAPAIQAPAHAIAJQAHAKAAAOQAAAQgLALQgMANgTAAQgKAAgKgFg");
	this.shape_155.setTransform(75.4,127);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000033").s().p("AgiBuIAAgDQAJgBAFgDQAEgCACgFIADgLIAAgVIAAgnIAAgXQgBgFgDgEQgDgFgDgCQgEgCgHAAIAAgEIAsgFIAABaIAAAMQAAALACAEQABAFADAEQAFAEAMACIAAADgAgKhWQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAEAEAAAFQAAAGgEAEQgEAEgGABQgGgBgEgEg");
	this.shape_156.setTransform(65.7,122.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000033").s().p("AgnAzQgSgTAAgcQAAgNAFgOQAFgNAJgKQAJgLAOgGQAOgGAQAAQAXAAANALQAHAGAAAHQAAAFgDAEQgDADgFAAQgLAAgEgPIgEgJIgEgFQgEgDgHAAQgKAAgGAFQgHAFgGAHQgFAGgDALQgFAQAAAPQAAANAEANQAFAOAJAJQANAOASAAQAPAAAKgKQAFgFAEgLIAEABQgFARgMAHQgMAIgTAAQgfAAgSgTg");
	this.shape_157.setTransform(55.2,127);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000033").s().p("AALBEIAAgDQAJgBAEgDQAEgCADgFIACgLIABgVIAAghIgBgZQgCgIgDgFQgDgFgHgEQgHgDgIAAQgIAAgIAEQgHADgFAGQgEAHgCAIQgBAIAAASIAAAeIAAALQAAALABAFQABAFAEADQAEAFAMACIAAADIhFAAIAAgDQAJgBAEgDQAEgCADgFIACgLIABgVIAAgmIgBgXQgBgGgCgEQgDgFgEgCQgEgCgHAAIAAgEIArgFQADAJAAAIIAAADQATgUAaAAQAUAAANAJQAMAKAAARIAABBQAAALABAFQABAFAEADQAEAFAMACIAAADg");
	this.shape_158.setTransform(40,126.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000033").s().p("AAWBAQgFgEgGgJQgKAKgEADQgLAGgNAAQgSAAgKgJQgKgIAAgOQAAgNAIgJQAFgFAGgDQAGgDAMgDIAUgFIAKgFQAFgEACgFQACgFAAgJQAAgSgHgJIgHgGQgFgCgFAAQgHAAgFADQgFADgCAGIgEAJQgEAIgIAAQgFAAgEgEQgDgDAAgGQAAgIALgFQAGgDAJgCQAJgCAJAAQAKAAAJADQALACAHAEQAKAGADAJQABAFAAALIAAA6IABAUQADALAKAAQAFAAADgCQADgBAEgGIACACQgFARgVAAQgLAAgHgGgAgGACIgQAJQgFADgDAFQgIAJAAAMQAAAKAGAHQAGAHAJAAQAHAAAHgFQAGgFADgIQAFgKAAgUIAAgaQgIAHgJAFg");
	this.shape_159.setTransform(25.4,127);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000033").s().p("Ag1BEIAAgDQAJgBAEgDQAEgCADgFIACgLIABgVIAAgmIgBgXQAAgGgDgEQgDgFgEgCQgDgCgIAAIAAgEIApgFQADAOAAAKQAGgKAFgFQANgJASAAQAJAAAGAEQAFAEAAAGQAAAFgDADQgDADgEAAQgGAAgEgFIgFgFQgFgGgIAAQgLAAgFAOQgGANAAAZIAAAdIAAALQAAALABAFQABAFAEADQAEAFAMACIAAADg");
	this.shape_160.setTransform(12.5,126.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000033").s().p("AhUBsIAAgEQAIAAAHgCQAHgDADgEQAFgFACgIQACgJAAgPIAAhzIgCgVQgBgOgMgHQgHgDgMgBIAAgEICkAAIAFA0IgEABQgEgMgDgGQgHgOgOgIQgIgEgKgCQgKgCgRAAIgYAAIAABdIAGAAQAbAAANgMQAGgFACgIQADgHABgMIAEAAIgBBfIgEAAQgCgQgEgJQgEgJgJgFQgGgDgJgCQgIgCgPAAIAAA+QAAAQACAIQACAIAFAFQAEAEAFADQAFACAJAAIAAAEg");
	this.shape_161.setTransform(-1.8,122.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000033").s().p("AAWBAQgFgEgGgJQgKAKgEADQgLAGgNAAQgSAAgKgJQgKgIAAgOQAAgNAIgJQAFgFAGgDQAGgDAMgDIAUgFIAKgFQAFgEACgFQACgFAAgJQAAgSgHgJIgHgGQgFgCgFAAQgHAAgFADQgFADgCAGIgEAJQgEAIgIAAQgFAAgEgEQgDgDAAgGQAAgIALgFQAGgDAJgCQAJgCAJAAQAKAAAJADQALACAHAEQAKAGADAJQABAFAAALIAAA6IABAUQADALAKAAQAFAAADgCQADgBAEgGIACACQgFARgVAAQgLAAgHgGgAgGACIgQAJQgFADgDAFQgIAJAAAMQAAAKAGAHQAGAHAJAAQAHAAAHgFQAGgFADgIQAFgKAAgUIAAgaQgIAHgJAFg");
	this.shape_162.setTransform(372.2,76.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000033").s().p("AALBEIAAgDQAJgBAEgDQAEgCADgFIACgLIABgVIAAghIgBgZQgCgIgDgFQgDgFgHgEQgHgDgIAAQgIAAgIAEQgHADgFAGQgEAHgCAIQgBAIAAASIAAAeIAAALQAAALABAFQABAFAEADQAEAFAMACIAAADIhFAAIAAgDQAJgBAEgDQAEgCADgFIACgLIABgVIAAgmIgBgXQgBgGgCgEQgDgFgEgCQgEgCgHAAIAAgEIArgFQADAJAAAIIAAADQATgUAaAAQAUAAANAJQAMAKAAARIAABBQAAALABAFQABAFAEADQAEAFAMACIAAADg");
	this.shape_163.setTransform(356.3,76.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000033").s().p("AALBEIAAgDQAJgBAEgDQAEgCADgFIACgLIABgVIAAghIgBgZQgCgIgDgFQgDgFgHgEQgHgDgIAAQgIAAgIAEQgHADgFAGQgEAHgCAIQgBAIAAASIAAAeIAAALQAAALABAFQABAFAEADQAEAFAMACIAAADIhFAAIAAgDQAJgBAEgDQAEgCADgFIACgLIABgVIAAgmIgBgXQgBgGgCgEQgDgFgEgCQgEgCgHAAIAAgEIArgFQADAJAAAIIAAADQATgUAaAAQAUAAANAJQAMAKAAARIAABBQAAALABAFQABAFAEADQAEAFAMACIAAADg");
	this.shape_164.setTransform(339.5,76.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000033").s().p("AALBsIAAgEQAOgBAGgEQAKgGAAgLQAAgGgFgLIgCgHIgPglIhFAAIgIAWIgEAKQgHARAAAKQAAAGADAFQACAFAEADQAHAEAJABIAAAEIhGAAIAAgEQAIAAAGgEQAHgEAGgIQAFgGAFgKIAMgfIA6iUIAIAAIBEClIANAbQAEAIAGAEQADADAFACIAPACIAAAEgAgvAPIA/AAIgghRg");
	this.shape_165.setTransform(319.8,72.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000033").s().p("AAWBAQgFgEgGgJQgKAKgEADQgLAGgNAAQgSAAgKgJQgKgIAAgOQAAgNAIgJQAFgFAGgDQAGgDAMgDIAUgFIAKgFQAFgEACgFQACgFAAgJQAAgSgHgJIgHgGQgFgCgFAAQgHAAgFADQgFADgCAGIgEAJQgEAIgIAAQgFAAgEgEQgDgDAAgGQAAgIALgFQAGgDAJgCQAJgCAJAAQAKAAAJADQALACAHAEQAKAGADAJQABAFAAALIAAA6QAAAPABAFQADALAKAAQAFAAADgCQADgBAEgGIACACQgFARgVAAQgLAAgHgGgAgGACIgQAJQgFADgDAFQgIAJAAAMQAAAKAGAHQAGAHAJAAQAHAAAHgFQAGgFADgIQAFgKAAgUIAAgaQgIAHgJAFg");
	this.shape_166.setTransform(294.3,76.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000033").s().p("AgUBSQgEgEgCgFQgBgGAAgNIAAhfIgRAAIAAgCQAKgEAJgKQAFgFADgGQAEgFACgKIACgFIAGAAIAAApIAnAAIAAAGIgnAAIAABaQAAARAFAIQADADAEADQAGACAFAAQAHgBAFgCQAFgDAFgIIACACQgEAKgKAEQgKAFgOAAQgRAAgJgHg");
	this.shape_167.setTransform(283.3,74.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000033").s().p("AALBEIAAgDQAJgBAEgDQAEgCADgFIACgLIABgVIAAghIgBgZQgCgIgDgFQgDgFgHgEQgHgDgIAAQgIAAgIAEQgHADgFAGQgEAHgCAIQgBAIAAASIAAAeIAAALQAAALABAFQABAFAEADQAEAFAMACIAAADIhFAAIAAgDQAJgBAEgDQAEgCADgFIACgLIABgVIAAgmIgBgXQgBgGgCgEQgDgFgEgCQgEgCgHAAIAAgEIArgFQADAJAAAIIAAADQATgUAaAAQAUAAANAJQAMAKAAARIAABBQAAALABAFQABAFAEADQAEAFAMACIAAADg");
	this.shape_168.setTransform(270.1,76.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000033").s().p("AAWBAQgFgEgGgJQgKAKgEADQgLAGgNAAQgSAAgKgJQgKgIAAgOQAAgNAIgJQAFgFAGgDQAGgDAMgDIAUgFIAKgFQAFgEACgFQACgFAAgJQAAgSgHgJIgHgGQgFgCgFAAQgHAAgFADQgFADgCAGIgEAJQgEAIgIAAQgFAAgEgEQgDgDAAgGQAAgIALgFQAGgDAJgCQAJgCAJAAQAKAAAJADQALACAHAEQAKAGADAJQABAFAAALIAAA6IABAUQADALAKAAQAFAAADgCQADgBAEgGIACACQgFARgVAAQgLAAgHgGgAgGACIgQAJQgFADgDAFQgIAJAAAMQAAAKAGAHQAGAHAJAAQAHAAAHgFQAGgFADgIQAFgKAAgUIAAgaQgIAHgJAFg");
	this.shape_169.setTransform(255.4,76.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000033").s().p("AgmBpIgLgFIgFAAQgIAAgCAHIgEAAIABhBIADAAQAHAZAJAOQARAbAaAAQARAAAMgMQAMgNAAgSQAAgIgCgJQgDgIgFgGQgFgGgHgGIgZgOIgXgMIgNgKQgOgPAAgWQAAgNAGgMQAGgMAJgJQAQgPAXAAQAHAAAGACQAGABALAEIALAEIAEABQAGAAACgIIADAAIACA/IgEAAIgHgXQgDgIgFgHQgHgMgJgGQgKgGgMAAQgRAAgKAMQgEAFgDAGQgCAHAAAHQAAAaAiAQIAVALQAaAMALAOQANAQAAAWQAAAPgGANQgIASgRAKQgQAKgWAAQgTAAgTgIg");
	this.shape_170.setTransform(239.6,72.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000033").s().p("AgYA/QgOgGgKgMQgNgSAAgaQAAgjAagUQASgPAWAAQANAAALAFQALAEAHAJQALANAAAUIhbAAIAAALQAAANADANQAFANAGAJQAIAJAKAFQAJAFAMAAQAJAAAHgDQAIgDAFgFQAFgGAEgMIAEABQgEATgNAJQgPAKgVAAQgTAAgOgHgAgUg2QgKAMgCASIBDAAQgBgQgFgIQgEgIgHgFQgHgEgIAAQgNAAgKALg");
	this.shape_171.setTransform(215.7,76.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000033").s().p("AAeBgQgMAIgKADQgJAEgMAAQgYAAgRgPQgLgJgGgOQgGgOAAgQQAAgRAHgPQAGgOALgKQASgPAZAAQALAAAIAEQAJADALAJIAAg6QAAgRgFgIQgGgHgNAAIAAgEIAwgGIAAC1QAAASAGAIQAFAHAOAAIAAAEIguAHQgCgIAAgJgAghgIQgIAJgEANQgEANAAAOQAAANAEAOQAEAMAGAKQAMAQARAAQAIAAAHgEQAHgEAFgIQAFgHABgLQACgLAAgVQAAgWgCgLQgBgKgFgHQgFgGgHgEQgHgDgGAAQgRAAgMAPg");
	this.shape_172.setTransform(200.3,72.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000033").s().p("Ag8BDIAAgDIBYh+IgiAAQgNAAgGACQgIADgFAGQgFAGgFAMIgDAAIADghIBpAAIAAADIhXB+IAWAAQARgBALgBQAMgCAGgEQANgGAGgTIADAAIgDAlg");
	this.shape_173.setTransform(177.1,76.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000033").s().p("AgYA/QgOgGgKgMQgNgSAAgaQAAgjAagUQASgPAWAAQANAAALAFQAKAEAIAJQALANAAAUIhbAAIAAALQgBANAEANQAFANAHAJQAGAJALAFQAKAFALAAQAIAAAIgDQAIgDAEgFQAHgGADgMIAEABQgEATgNAJQgPAKgVAAQgTAAgOgHgAgUg2QgKAMgCASIBDAAQgBgQgFgIQgEgIgHgFQgHgEgIAAQgNAAgKALg");
	this.shape_174.setTransform(163.2,76.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000033").s().p("AhLBjIAAgDQAJgBAEgCQAEgCADgGQACgEAAgHIAAgVIAAhsQABgSgGgHQgFgIgNAAIAAgEIAugGIABANIAAADQALgHALgEQAJgDAMAAQAYAAARAOQALAJAFAOQAHAOAAAQQAAASgHANQgGAPgMAKQgRAPgZAAQgLAAgJgDQgIgEgLgJIAAAdIAAALQgBAKACAGQABAEAEAEQAEAEAMACIAAADgAgIhYQgHAFgFAHQgFAHgCAMQgBALAAAVQAAAVABAKQACALAFAHQAFAGAGAEQAIAEAGAAQARAAAMgQQAIgKAEgMQAEgNAAgOQAAgNgEgNQgDgNgIgKQgMgQgQAAQgIAAgHAEg");
	this.shape_175.setTransform(147.3,79.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000033").s().p("Ag3BOQgJgKgEgLQgFgMAAgMQAAgaATgTQAXgYAfgBQAgABAXAYQATATAAAaQAAAZgSAUQgWAYgiAAQghAAgWgYgAgfgOQgNARAAAcQAAAbAMATQAOAWATgBQAJAAAHgEQAIgFAHgJQAGgIAEgNQADgOAAgMQAAgNgDgNQgFgMgGgKQgNgSgTAAQgRAAgNATgAgRg5IAbgsIAeAAIgyAsg");
	this.shape_176.setTransform(130.8,73.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000033").s().p("AheBsIAAgEQAQAAAJgJQAEgFACgIQACgIAAgQIAAhzQAAgRgCgIQgCgIgFgFQgFgEgFgCQgGgCgIAAIAAgEIBkAAIAAAEIgNACQgGACgEAEQgGAGgBAIQgCAHAAARIAABaIABAfQABAKADAHQAGALAKAGQAKAFASAAQATAAANgFQANgFAIgKQAFgIAEgJQAEgJADgOIADAAIgCBBg");
	this.shape_177.setTransform(113,72.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000033").s().p("Ag3AtQgIgJgFgMQgFgMAAgMQAAgYATgUQAXgZAfAAQAgAAAXAZQATAUAAAYQAAAagSATQgWAZgiAAQghAAgWgZgAgfguQgNASAAAbQAAAbAMATQAOAVATAAQAJAAAHgFQAIgEAHgJQAFgJAEgNQAEgNAAgNQAAgMgEgNQgEgNgGgJQgNgSgTAAQgRAAgNATg");
	this.shape_178.setTransform(86.3,76.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000033").s().p("AgiBvIAAgEQAJgBAFgDQAEgCACgFIADgLIAAgVIAAgnIAAgWQgBgGgDgEQgDgEgDgCQgEgCgHgBIAAgEIAsgFIAABaIAAAMQAAAKACAGQABAEADAEQAFAEAMACIAAAEgAgKhVQgEgEAAgGQAAgHAEgDQAFgEAFgBQAGABAEAEQAEADAAAHQAAAGgEAEQgEADgGAAQgGAAgEgDg");
	this.shape_179.setTransform(74.1,72.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000033").s().p("AALBEIAAgDQAJgBAEgDQAEgCADgFIACgLIABgVIAAghIgBgZQgCgIgDgFQgDgFgHgEQgHgDgIAAQgIAAgIAEQgHADgFAGQgEAHgCAIQgBAIAAASIAAAeIAAALQAAALABAFQABAFAEADQAEAFAMACIAAADIhFAAIAAgDQAJgBAEgDQAEgCADgFIACgLIABgVIAAgmIgBgXQgBgGgCgEQgDgFgEgCQgEgCgHAAIAAgEIArgFQADAJAAAIIAAADQATgUAaAAQAUAAANAJQAMAKAAARIAABBQAAALABAFQABAFAEADQAEAFAMACIAAADg");
	this.shape_180.setTransform(61.8,76.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000033").s().p("Ag3AtQgIgJgFgMQgFgMAAgMQAAgYATgUQAXgZAfAAQAgAAAXAZQATAUAAAYQAAAagSATQgWAZgiAAQggAAgXgZgAgfguQgNASAAAbQAAAbAMATQAOAVATAAQAIAAAJgFQAHgEAGgJQAGgJAFgNQADgNAAgNQAAgMgDgNQgFgNgHgJQgNgSgRAAQgSAAgNATg");
	this.shape_181.setTransform(45,76.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000033").s().p("AgTBSQgFgEgBgFQgCgGAAgNIAAhfIgQAAIAAgCQAKgEAIgKQAGgFADgGQADgFADgKIACgFIAFAAIAAApIAnAAIAAAGIgnAAIAABaQAAARAFAIQADADAFADQAEACAGAAQAHgBAFgCQAEgDAHgIIACACQgGAKgJAEQgJAFgOAAQgSAAgIgHg");
	this.shape_182.setTransform(33.2,74.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000033").s().p("AALBEIAAgDQAJgBAEgDQAEgCADgFIACgLIABgVIAAghIgBgZQgCgIgDgFQgDgFgHgEQgHgDgIAAQgIAAgIAEQgHADgFAGQgEAHgCAIQgBAIAAASIAAAeIAAALQAAALABAFQABAFAEADQAEAFAMACIAAADIhFAAIAAgDQAJgBAEgDQAEgCADgFIACgLIABgVIAAgmIgBgXQgBgGgCgEQgDgFgEgCQgEgCgHAAIAAgEIArgFQADAJAAAIIAAADQATgUAaAAQAUAAANAJQAMAKAAARIAABBQAAALABAFQABAFAEADQAEAFAMACIAAADg");
	this.shape_183.setTransform(19.9,76.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000033").s().p("AALBsIAAgEQAOgBAGgEQAKgGAAgLQAAgGgFgLIgCgHIgPglIhFAAIgIAWIgEAKQgHARAAAKQAAAGADAFQACAFAEADQAHAEAJABIAAAEIhGAAIAAgEQAIAAAGgEQAHgEAGgIQAFgGAFgKIAMgfIA6iUIAIAAIBEClIANAbQAEAIAGAEQADADAFACIAPACIAAAEgAgvAPIA/AAIgghRg");
	this.shape_184.setTransform(0.2,72.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000033").s().p("AAWBAQgFgEgGgJQgKAKgEADQgLAGgNAAQgSAAgKgJQgKgIAAgOQAAgNAIgJQAFgFAGgDQAGgDAMgDIAUgFIAKgFQAFgEACgFQACgFAAgJQAAgSgHgJIgHgGQgFgCgFAAQgHAAgFADQgFADgCAGIgEAJQgEAIgIAAQgFAAgEgEQgDgDAAgGQAAgIALgFQAGgDAJgCQAJgCAJAAQAKAAAJADQALACAHAEQAKAGADAJQABAFAAALIAAA6IABAUQADALAKAAQAFAAADgCQADgBAEgGIACACQgFARgVAAQgLAAgHgGgAgGACIgQAJQgFADgDAFQgIAJAAAMQAAAKAGAHQAGAHAJAAQAHAAAHgFQAGgFADgIQAFgKAAgUIAAgaQgIAHgJAFg");
	this.shape_185.setTransform(307.2,26.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000033").s().p("AgiBvIAAgEQAJgBAFgCQAEgCACgGIADgLIAAgVIAAh7IAAgWQgBgHgDgEQgDgEgDgCQgEgCgHgBIAAgDIAsgGIAACvIAAAMQAAALACAFQABAFADADQAFAEAMACIAAAEg");
	this.shape_186.setTransform(295.7,22.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000033").s().p("AgiBvIAAgEQAJgBAFgCQAEgCACgGIADgLIAAgVIAAh7IAAgWQgBgHgDgEQgDgEgDgCQgEgCgHgBIAAgDIAsgGIAACvIAAAMQAAALACAFQABAFADADQAFAEAMACIAAAEg");
	this.shape_187.setTransform(287.9,22.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000033").s().p("AgiBuIAAgDQAJgBAFgDQAEgCACgFIADgLIAAgVIAAgnIAAgWQgBgGgDgEQgDgFgDgCQgEgCgHAAIAAgEIAsgFIAABaIAAAMQAAALACAFQABAEADAEQAFAEAMACIAAADgAgKhWQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAEAEAAAFQAAAGgEAEQgEAEgGABQgGgBgEgEg");
	this.shape_188.setTransform(280.1,22.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000033").s().p("AgTBRQgFgDgCgFQgBgGAAgNIAAhfIgRAAIAAgDQALgDAIgJQAFgGADgGQAEgGADgJIABgFIAGAAIAAApIAnAAIAAAGIgnAAIAABaQAAASAFAGQADAEAEADQAFABAGAAQAHAAAFgCQAEgDAHgIIABACQgEAKgKAEQgKAFgNAAQgSAAgIgIg");
	this.shape_189.setTransform(272.8,24.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000033").s().p("AgTBBIgJgDIgDAAQgGAAgDAFIgCAAIAAgtIACAAQAFARAGAJQANASAQAAQAJAAAHgGQAIgGAAgNQAAgKgGgHIgIgHIgPgKQgUgJgGgHQgKgKAAgOQAAgOAKgKQAKgMASAAQAIAAAGADIAGADIAEAAQADAAADgEIADAAIACAkIgEAAIgDgNQgCgEgEgEQgFgGgGgEQgGgDgGAAQgJAAgGAGQgGAHAAAJQAAAIAFAGQAGAGAMAFIAPAIQAPAHAIAJQAHAKAAAOQAAAQgLALQgMANgTAAQgKAAgKgFg");
	this.shape_190.setTransform(262.3,26.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000033").s().p("Ag3AtQgJgJgEgMQgFgMAAgMQAAgYATgUQAXgZAfAAQAgAAAXAZQATAUAAAYQAAAagSATQgWAZgiAAQghAAgWgZgAgfguQgNASAAAbQAAAbAMATQAOAVATAAQAJAAAHgFQAIgEAHgJQAFgJAFgNQADgNAAgNQAAgMgDgNQgFgNgGgJQgOgSgSAAQgRAAgNATg");
	this.shape_191.setTransform(248.1,26.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000033").s().p("AgbBrQgggLgSgbQgSgbAAgmQAAgcALgYQAKgYATgPQAOgMAUgGQAUgHATAAQATAAAVAHIANAEIAHACQAEAAADgDIACgGIAEAAIACBHIgEAAIgCgHIgJgXQgHgNgLgLQgJgIgKgEQgJgEgMAAQgSAAgMAIQgLAHgKAMQgKANgGAQQgJAXAAAcQAAAZAGAUQAGAUAMANQAVAZAjAAQASAAAPgGQAOgGAIgMQAJgNAEgWIAEABQgDAZgLAOQgKAOgRAIQgSAHgYAAQgUAAgUgGg");
	this.shape_192.setTransform(229.1,22.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000033").s().p("Ag2BdQgFgDAAgGQAAgEADgCQADgDAFAAQAEAAAFADIAHACIADABQAKAAAGgPIAFgMQADgIAAgEQAAgGgGgOIghhOIgEgLIgHgPQgCgEgDgCQgEgDgFAAIAAgEIA9AAIAAAEIgJACQgGAEAAAHQAAAGAGAQIAaBDIAXg4QAIgVAAgJQAAgHgEgEQgEgEgHgBIAAgEIAtAAIAAAEIgKAEQgEACgCAEQgFAHgKAYIgtBuQgIAUgFAGQgIAKgOAAQgIAAgFgDg");
	this.shape_193.setTransform(203.5,29.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000033").s().p("Ag3AtQgIgJgFgMQgFgMAAgMQAAgYATgUQAXgZAfAAQAgAAAXAZQATAUAAAYQAAAagSATQgWAZgiAAQghAAgWgZgAgfguQgNASAAAbQAAAbAMATQAOAVATAAQAIAAAJgFQAIgEAGgJQAFgJAFgNQADgNAAgNQAAgMgDgNQgFgNgHgJQgNgSgRAAQgSAAgNATg");
	this.shape_194.setTransform(180.1,26.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000033").s().p("Ag5BUQgJgKAAgNQABgLAGgHQAHgIAKABQAHgBAFAFQADAEAAAHIAAACIgCABIgGgGQgCgCgEAAQgHAAgEAFQgEAFAAAIQAAAMAMAJQAOAIATAAQAVAAANgJQAMgJAAgPQABgLgJgHQgJgFgQAAIgYAAQgQAAgJgIQgKgHAAgLQAAgLAKgGQAGgDAOgEQgNgGgIgKQgHgLgBgMQAAgQAMgMQAHgIAJgEQAKgEAKAAQAOAAAQALQAIgGAFgDQAHgCAGAAQAIAAAEADQAHAFAAAFQgBAEgCADQgCACgDAAQgFAAgEgFIgFgFQgDgEgFAAQgFAAgHAGQANAPAAARQAAAVgSAMQgKAGgKACIgUACQgXABABAKQAAALATgBIAZAAQAOABAJACQAKACAHAFQAOALAAATQAAAUgQALQgRAMgfAAQgiAAgPgNgAgahRQgDAFgCAJQgCAIAAAIQAAARAHALQAIAKAKAAQAKAAAHgKQAGgLAAgSQAAgUgIgMQgGgJgJAAQgKAAgIAMg");
	this.shape_195.setTransform(165.5,29.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000033").s().p("AgiBvIAAgEQAJgBAFgCQAEgCACgGIADgLIAAgVIAAh7IAAgWQgBgHgDgEQgDgEgDgCQgEgCgHgBIAAgDIAsgGIAACvIAAAMQAAALACAFQABAFADADQAFAEAMACIAAAEg");
	this.shape_196.setTransform(154.5,22.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000033").s().p("AAWBAQgFgEgGgJQgKAKgEADQgLAGgNAAQgSAAgKgJQgKgIAAgOQAAgNAIgJQAFgFAGgDQAGgDAMgDIAUgFIAKgFQAFgEACgFQACgFAAgJQAAgSgHgJIgHgGQgFgCgFAAQgHAAgFADQgFADgCAGIgEAJQgEAIgIAAQgFAAgEgEQgDgDAAgGQAAgIALgFQAGgDAJgCQAJgCAJAAQAKAAAJADQALACAHAEQAKAGADAJQABAFAAALIAAA6IABAUQADALAKAAQAFAAADgCQADgBAEgGIACACQgFARgVAAQgLAAgHgGgAgGACIgQAJQgFADgDAFQgIAJAAAMQAAAKAGAHQAGAHAJAAQAHAAAHgFQAGgFADgIQAFgKAAgUIAAgaQgIAHgJAFg");
	this.shape_197.setTransform(144.4,26.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000033").s().p("AAeBgQgMAIgKADQgJAEgMAAQgYAAgRgPQgLgJgGgOQgGgOAAgQQAAgRAHgPQAGgOALgKQASgPAZAAQALAAAIAEQAJADALAJIAAg6QAAgRgFgIQgGgHgNAAIAAgEIAwgGIAAC1QAAASAGAIQAFAHAOAAIAAAEIguAHQgCgIAAgJgAghgIQgIAJgEANQgEANAAAOQAAANAEAOQAEAMAGAKQAMAQARAAQAIAAAHgEQAHgEAFgIQAFgHABgLQACgLAAgVQAAgWgCgLQgBgKgFgHQgFgGgHgEQgHgDgGAAQgRAAgMAPg");
	this.shape_198.setTransform(128.7,22.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000033").s().p("AgiBuIAAgDQAJgBAFgDQAEgCACgFIADgLIAAgVIAAgnIAAgWQgBgGgDgEQgDgFgDgCQgEgCgHAAIAAgEIAsgFIAABaIAAAMQAAALACAFQABAEADAEQAFAEAMACIAAADgAgKhWQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAEAEAAAFQAAAGgEAEQgEAEgGABQgGgBgEgEg");
	this.shape_199.setTransform(116.1,22.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000033").s().p("AAXBsIAAgEQAJAAAGgCQAFgDAFgEQAEgFACgIQACgIAAgQIAAg6IhvAAIAAA6QAAAQACAIQACAIAFAFQAEAEAGADQAFACAJAAIAAAEIhlAAIAAgEQAKAAAFgCQAGgDAEgEQAFgFACgIQACgIAAgQIAAhzQAAgQgCgIQgCgIgFgFQgEgEgGgCQgGgCgJgBIAAgEIBlAAIAAAEQgJABgFACQgGACgEAEQgFAFgCAIQgCAIAAAQIAAAzIBvAAIAAgzQAAgQgCgIQgCgIgEgFQgFgEgFgCQgGgCgJgBIAAgEIBlAAIAAAEQgJABgGACQgGACgEAEQgFAFgCAIQgBAIAAAQIAABzQAAAQABAIQACAIAFAFQAEAEAGADQAGACAJAAIAAAEg");
	this.shape_200.setTransform(98.9,22.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000033").s().p("AgiBvIAAgEQAJgBAFgCQAEgCACgGIADgLIAAgVIAAh7IAAgWQgBgHgDgEQgDgEgDgCQgEgCgHgBIAAgDIAsgGIAACvIAAAMQAAALACAFQABAFADADQAFAEAMACIAAAEg");
	this.shape_201.setTransform(73.9,22.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000033").s().p("AgYA/QgOgGgKgMQgNgSAAgaQAAgjAZgUQATgPAWAAQANAAALAFQALAEAHAJQAMANAAAUIhcAAIAAALQAAANADANQAEANAHAJQAIAJAKAFQAKAFALAAQAIAAAIgDQAIgDAFgFQAFgGAFgMIADABQgEATgOAJQgOAKgWAAQgSAAgOgHgAgUg2QgKAMgCASIBDAAQgBgQgFgIQgEgIgHgFQgHgEgIAAQgNAAgKALg");
	this.shape_202.setTransform(62.6,26.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000033").s().p("AAiAwQgUAVgagBQgUAAgLgKQgMgIAAgSIAAg2IAAgMIgCgQQgBgEgDgEQgFgEgMgCIAAgEIAuAAIAABPIABAaQACAHADAFQAEAGAGADQAHADAIAAQAHAAAIgDQAHgEAFgGQAFgGABgIQACgIAAgSIAAgeIAAgMIgCgQQgBgEgDgEQgFgEgMgCIAAgEIAuAAIAABVIABAXQABAGADAEQADAFADACQAEACAHAAIAAAEIgrAFQgCgJAAgLg");
	this.shape_203.setTransform(47.1,26.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000033").s().p("Ag5BUQgIgKgBgNQAAgLAHgHQAHgIAKABQAHgBAEAFQAFAEAAAHIAAACIgDABIgFgGQgDgCgEAAQgHAAgEAFQgEAFAAAIQAAAMANAJQAMAIAVAAQATAAANgJQANgJABgPQAAgLgJgHQgJgFgQAAIgYAAQgPAAgKgIQgKgHAAgLQAAgLALgGQAFgDAOgEQgOgGgHgKQgIgLABgMQgBgQAMgMQAHgIAKgEQAJgEAKAAQAOAAAQALQAHgGAHgDQAFgCAHAAQAIAAAFADQAFAFAAAFQABAEgDADQgCACgEAAQgEAAgFgFIgDgFQgDgEgGAAQgFAAgHAGQANAPAAARQAAAVgTAMQgJAGgKACIgTACQgXABAAAKQgBALAUgBIAZAAQAOABAKACQAJACAHAFQAOALAAATQAAAUgQALQgQAMggAAQgiAAgPgNgAgZhRQgEAFgCAJQgCAIAAAIQAAARAHALQAIAKALAAQAKAAAGgKQAHgLAAgSQAAgUgJgMQgGgJgIAAQgMAAgGAMg");
	this.shape_204.setTransform(32.7,29.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000033").s().p("AgiBuIAAgDQAJgBAFgDQAEgCACgFIADgLIAAgVIAAgnIAAgWQgBgGgDgEQgDgFgDgCQgEgCgHAAIAAgEIAsgFIAABaIAAAMQAAALACAFQABAEADAEQAFAEAMACIAAADgAgKhWQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAEAEAAAFQAAAGgEAEQgEAEgGABQgGgBgEgEg");
	this.shape_205.setTransform(21.7,22.3);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000033").s().p("AAkBsIAAgEQAJAAAFgCQAGgDAEgEQAFgFACgIQACgIAAgQIAAiMIhQC+IgEAAIhQi7IAACJQAAAQABAIQACAIAFAFQAEAFAGACQAGACAJAAIAAAEIhJAAIAAgEQAJAAAGgCQAFgCAFgFQAEgFACgIQACgIAAgQIAAhzIAAgOQgBgLgDgGQgEgHgHgEQgHgDgLgBIAAgEIBEAAIBECoIBHioIBAAAIAAAEQgJABgFACQgGACgEAEQgEADgBAEQgCAEgBAHIgBATIAABzQAAAQACAIQACAIAFAFQAJAIAPABIAAAEg");
	this.shape_206.setTransform(3.4,22.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000033").s().p("Ag8BDIAAgDIBYh+IgjAAQgMAAgGADQgIACgFAGQgFAGgFANIgDgBIADghIBpAAIAAADIhXB9IAWAAQAQAAAMgBQAMgBAGgEQANgIAGgRIAEAAIgEAkg");
	this.shape_207.setTransform(149.3,-23.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000033").s().p("AAWBAQgFgEgGgJQgKAKgEADQgLAGgNAAQgSAAgKgJQgKgIAAgOQAAgNAIgJQAFgFAGgDQAGgDAMgDIAUgFIAKgFQAFgEACgFQACgFAAgJQAAgSgHgJIgHgGQgFgCgFAAQgHAAgFADQgFADgCAGIgEAJQgEAIgIAAQgFAAgEgEQgDgDAAgGQAAgIALgFQAGgDAJgCQAJgCAJAAQAKAAAJADQALACAHAEQAKAGADAJQABAFAAALIAAA6IABAUQADALAKAAQAFAAADgCQADgBAEgGIACACQgFARgVAAQgLAAgHgGgAgGACIgQAJQgFADgDAFQgIAJAAAMQAAAKAGAHQAGAHAJAAQAHAAAHgFQAGgFADgIQAFgKAAgUIAAgaQgIAHgJAFg");
	this.shape_208.setTransform(136.5,-23.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000033").s().p("AgkBkIAAgDQAJgBAEgCQAEgDADgFIACgLIABgVIAAgnIgBgWQgBgHgCgEQgDgEgEgCQgEgCgHgBIAAgCIAtgGIAABaIAAAMQAAALABAEQABAGAEACQAEAFAMACIAAADgAgUg4IAcgsIAdAAIgxAsg");
	this.shape_209.setTransform(125.3,-26.8);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000033").s().p("AhwBsIAAgEQAJAAAFgCQAGgCAFgFQAEgFACgIQACgIAAgQIAAhzQAAgRgCgIQgCgIgHgGQgHgGgPgBIAAgEIBWAAQAdAAAHABQAhADAYAQQAWAQAMAZQANAZgBAdQABAWgIATQgHATgMANQgSASgaAFQgUAEgTAAgAgtA2QAAAQACAIQACAIAEAFQAKANAYAAQASAAAOgHQAOgGAKgOQALgOAFgSQAGgSAAgUQAAgWgHgUQgHgUgMgPQgSgVgYgHQgMgEgVAAIgTAAg");
	this.shape_210.setTransform(108.4,-27.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000033").s().p("Ag3AtQgJgJgEgMQgFgMAAgMQAAgYATgUQAXgZAfAAQAgAAAXAZQATAUAAAYQAAAagSATQgWAZgiAAQggAAgXgZgAgfguQgNASAAAbQAAAbAMATQAOAVATAAQAIAAAJgFQAHgEAGgJQAHgJADgNQAEgNAAgNQAAgMgEgNQgEgNgHgJQgNgSgRAAQgSAAgNATg");
	this.shape_211.setTransform(79.9,-23.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000033").s().p("AgiBuIAAgDQAJgBAFgCQAEgDACgFIADgLIAAgVIAAgnIAAgXQgBgFgDgEQgDgEgDgDQgEgBgHgBIAAgDIAsgGIAABaIAAAMQAAALACAEQABAGADACQAFAFAMACIAAADgAgKhWQgEgDAAgHQAAgFAEgEQAFgFAFABQAGgBAEAFQAEAEAAAFQAAAHgEADQgEAFgGAAQgGAAgEgFg");
	this.shape_212.setTransform(67.6,-27.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000033").s().p("Ag1BEIAAgDQAJgBAEgDQAEgCADgFIACgLIABgVIAAgmIgBgXQAAgGgDgEQgDgFgEgCQgDgCgIAAIAAgEIApgFQADAOAAAKQAGgKAFgFQANgJASAAQAJAAAGAEQAFAEAAAGQAAAFgDADQgDADgEAAQgGAAgEgFIgFgFQgFgGgIAAQgLAAgFAOQgGANAAAZIAAAdIAAALQAAALABAFQABAFAEADQAEAFAMACIAAADg");
	this.shape_213.setTransform(58.4,-23.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000033").s().p("AgiBuIAAgDQAJgBAFgCQAEgDACgFIADgLIAAgVIAAgnIAAgXQgBgFgDgEQgDgEgDgDQgEgBgHgBIAAgDIAsgGIAABaIAAAMQAAALACAEQABAGADACQAFAFAMACIAAADgAgKhWQgEgDAAgHQAAgFAEgEQAFgFAFABQAGgBAEAFQAEAEAAAFQAAAHgEADQgEAFgGAAQgGAAgEgFg");
	this.shape_214.setTransform(48.6,-27.8);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000033").s().p("Ag3BvIAAgEQAJgBAEgCQAEgCADgGIACgLIABgVIAAhQIgXAAIAAgGIAXAAIAAgmQAAgOAEgJQADgHAJgHQAJgHAKgCQANgEANAAQAMAAAHAEQAIAEAAAIQAAAFgDADQgEACgDAAQgFAAgDgBIgHgIQgEgIgCgCQgEgCgEAAQgHAAgFACQgFADgCAEQgDAEgBAHQgCAIAAANIAAAqIAeAAIAAAGIgeAAIAABSIAAALQAAALACAFQABAFADADQADAFAMABIAAAEg");
	this.shape_215.setTransform(41.7,-27.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000033").s().p("Ag1BEIAAgDQAJgBAFgDQAEgCACgFIADgLIAAgVIAAgmIAAgXQgBgGgDgEQgDgFgDgCQgFgCgHAAIAAgEIApgFQADAOAAAKQAFgKAHgFQANgJARAAQAKAAAFAEQAFAEAAAGQAAAFgDADQgDADgFAAQgFAAgEgFIgFgFQgGgGgHAAQgLAAgFAOQgGANAAAZIAAAdIAAALQAAALACAFQAAAFAEADQADAFANACIAAADg");
	this.shape_216.setTransform(30.3,-23.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000033").s().p("Ag3AtQgIgJgFgMQgFgMAAgMQAAgYATgUQAXgZAfAAQAgAAAXAZQATAUAAAYQAAAagSATQgWAZgiAAQghAAgWgZgAgfguQgNASAAAbQAAAbAMATQAOAVATAAQAJAAAHgFQAIgEAHgJQAFgJAEgNQAEgNAAgNQAAgMgEgNQgEgNgGgJQgNgSgTAAQgRAAgNATg");
	this.shape_217.setTransform(16.1,-23.5);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000033").s().p("AhXBsIAAgEQAJAAAGgCQAGgDAEgEQAFgFABgIQACgIAAgQIAAhzQAAgOgBgHQgBgHgDgFQgEgGgGgDQgGgDgKgBIgCAAIAAgEIBeAAQAZAAAMADQAMADAKAHQAWARAAAdQAAAcgWAOQgMAGgSABIgZABIgeAAIAAA4QAAAQACAIQACAIAEAFQAEAEAGADQAFACAJAAIAAAEgAgTgCIAQAAQAOAAAJgDQAIgCAGgGQAQgOAAgYQAAgMgFgLQgEgLgJgHQgJgIgOgBIgPgBIgNAAg");
	this.shape_218.setTransform(-1.4,-27.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.button_1}]},1).wait(1));

	// Capa 2
	this.instance = new lib.fondo();
	this.instance.parent = this;
	this.instance.setTransform(-33.9,-95.9,1.89,2.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197.6,45.6,235.4,148);


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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa 1
	this.obregon2_mc = new lib.obregon2();
	this.obregon2_mc.parent = this;
	this.obregon2_mc.setTransform(793.5,597.2,1,1,0,0,0,70.3,75.4);

	this.victoria2_mc = new lib.victoria2();
	this.victoria2_mc.parent = this;
	this.victoria2_mc.setTransform(580.8,521.8);

	this.huerta2_mc = new lib.huerta2();
	this.huerta2_mc.parent = this;
	this.huerta2_mc.setTransform(507,595.8,1,1,0,0,0,68.4,74);

	this.hidalgo2_mc = new lib.hidalgo2();
	this.hidalgo2_mc.parent = this;
	this.hidalgo2_mc.setTransform(296.4,521.8);

	this.iturbide2_mc = new lib.iturbide2();
	this.iturbide2_mc.parent = this;
	this.iturbide2_mc.setTransform(219.2,596.8,1,1,0,0,0,65,75);

	this.zapata2_mc = new lib.zapata2();
	this.zapata2_mc.parent = this;
	this.zapata2_mc.setTransform(86.2,594.2,1,1,0,0,0,75,72.4);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.huerta1_mc},{t:this.villa1_mc},{t:this.madero1_mc},{t:this.hidalgo1_mc},{t:this.diaz1_mc},{t:this.zapata1_mc},{t:this.diaz2_mc},{t:this.obregon1_mc},{t:this.morelos1_mc},{t:this.victoria1_mc},{t:this.moctezuma1_mc},{t:this.ana1_mc},{t:this.moctezuma2_mc},{t:this.morelos2_mc},{t:this.madero2_mc},{t:this.ana2_mc},{t:this.iturbide1_mc},{t:this.villa2_mc},{t:this.zapata2_mc},{t:this.iturbide2_mc},{t:this.hidalgo2_mc},{t:this.huerta2_mc},{t:this.victoria2_mc},{t:this.obregon2_mc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.memoramas, new cjs.Rectangle(9.5,-0.3,844,685.1), null);


// stage content:
(lib.memomex10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
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
		
			if (huerta1 == 1 && huerta2 == 1) {
				raiz.menurespuestas.gotoAndStop(1)
				//puntos = puntos + 1
				alert("huerta true")
				puntos = puntos + 1
				raiz.score.text = puntos
				respuesta = "huerta"
				raiz.ans.text = respuesta
				huerta1 = 3
				huerta2 = 3
		
			} else if (villa1 == 1 && villa2 == 1) {
				alert("villa1 y 2")
				raiz.menurespuestas.gotoAndStop(1)
				//puntos = puntos + 1
				alert("villa true")
				puntos = puntos + 1
				raiz.score.text = puntos
				respuesta = "villa"
				raiz.ans.text = respuesta
				villa1 = 3
				villa2 = 3
		
				//_root.peronajesmenu.gotoAndStop(2)
			} else if (madero1 == 1 && madero2 == 1) {
				alert("madero1 y 2")
				raiz.menurespuestas.gotoAndStop(1)
				//puntos = puntos + 1
				alert("madero true")
				puntos = puntos + 1
				raiz.score.text = puntos
				respuesta = "madero"
				madero1 = 3
				madero2 = 3
		
				//_root.peronajesmenu.gotoAndStop(2)
			} else if (hidalgo1 == 1 && hidalgo2 == 1) {
				alert("hidalgo 1 y 2")
				raiz.menurespuestas.gotoAndStop(1)
				//puntos = puntos + 1
				alert("hidalgo true")
				puntos = puntos + 1
				raiz.score.text = puntos
				respuesta = "hidalgo"
				hidalgo1 = 3
				hidalgo2 = 3
		
				//_root.peronajesmenu.gotoAndStop(2)
			} else if (diaz1 == 1 && diaz2 == 1) {
				alert("diaz 1 y 2")
				raiz.menurespuestas.gotoAndStop(1)
				//puntos = puntos + 1
				alert("diaz true")
				puntos = puntos + 1
				raiz.score.text = puntos
				respuesta = "diaz"
				diaz1 = 3
				diaz2 = 3
		
				//_root.peronajesmenu.gotoAndStop(2)
			} else if (zapata1 == 1 && zapata2 == 1) {
				alert("zapata 1 y 2")
				raiz.menurespuestas.gotoAndStop(1)
				//puntos = puntos + 1
				alert("zapata true")
				puntos = puntos + 1
				raiz.score.text = puntos
				respuesta = "zapata"
				zapata1 = 3
				zapata2 = 3
		
				//_root.peronajesmenu.gotoAndStop(2)
			} else if (obregon1 == 1 && obregon2 == 1) {
				alert("obregon 1 y 2")
				raiz.menurespuestas.gotoAndStop(1)
				//puntos = puntos + 1
				alert("obregon true")
				puntos = puntos + 1
				raiz.score.text = puntos
				respuesta = "obregon"
				obregon1 = 3
				obregon2 = 3
		
				//_root.peronajesmenu.gotoAndStop(2)
			} else if (morelos1 == 1 && morelos2 == 1) {
				alert("morelos 1 y 2")
				raiz.menurespuestas.gotoAndStop(1)
				//puntos = puntos + 1
				alert("morelos true")
				puntos = puntos + 1
				raiz.score.text = puntos
				respuesta = "morelos"
				morelos1 = 3
				morelos2 = 3
		
				//_root.peronajesmenu.gotoAndStop(2)
			} else if (victoria1 == 1 && victoria2 == 1) {
				alert("victoria 1 y 2")
				raiz.menurespuestas.gotoAndStop(1)
				//puntos = puntos + 1
				alert("victoria true")
				puntos = puntos + 1
				raiz.score.text = puntos
				respuesta = "victoria"
				victoria1 = 3
				victoria2 = 3
		
				//_root.peronajesmenu.gotoAndStop(2)
			} else if (moctezuma1 == 1 && moctezuma2 == 1) {
				alert("moctezuma 1 y 2")
				raiz.menurespuestas.gotoAndStop(1)
				//puntos = puntos + 1
				alert("moctezuma true")
				puntos = puntos + 1
				raiz.score.text = puntos
				respuesta = "moctezuma"
				moctezuma1 = 3
				moctezuma2 = 3
		
				//_root.peronajesmenu.gotoAndStop(2)
			} else if (ana1 == 1 && ana2 == 1) {
				alert("ana 1 y 2")
				raiz.menurespuestas.gotoAndStop(1)
				//puntos = puntos + 1
				alert("ana true")
				puntos = puntos + 1
				raiz.score.text = puntos
				respuesta = "ana"
				ana1 = 3
				ana2 = 3
		
				//_root.peronajesmenu.gotoAndStop(2)
			} else if (iturbide1 == 1 && iturbide2 == 1) {
				alert("itrubide 1 y 2")
				raiz.menurespuestas.gotoAndStop(1)
				//puntos = puntos + 1
				alert("iturbide true")
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
				alert("votando villa")
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
			}
			else if (huerta2 == 1 && villa2 == 1) {
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
			}else if (villa1 == 1 && zapata1 == 1) {
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
			}else if (madero1 == 1 && zapata1 == 1) {
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
			}else if (zapata1 == 1 && moctezuma1 == 1) {
				raiz.delay.play()
			} else if (zapata1 == 1 && moctezuma2 == 1) {
				raiz.delay.play()
			}else if (zapata1 == 1 && villa2 == 1) {
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
			alert("no habilitar")
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
		
		function gameover() {
			if (intentos < 0) {
				raiz.gotoAndStop(1)
			}
		}
		
		
		
		/* Enter Frame Event
		During the animation, whenever player enters a new frame a function having your custom code will execute.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute everytime the player enters a new frame.
		*/
		createjs.Ticker.on("tick", flip);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Actions
	this.delay = new lib.delay();
	this.delay.parent = this;
	this.delay.setTransform(-392.4,159,1,1,0,0,0,47.1,26.9);
	this.delay._off = true;

	this.timeline.addTween(cjs.Tween.get(this.delay).wait(1).to({_off:false},0).wait(1));

	// Layer 9
	this.instrucciones = new lib.instructions();
	this.instrucciones.parent = this;
	this.instrucciones.setTransform(435.8,267.4,1,1,0,0,0,282.1,181.2);
	this.instrucciones._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instrucciones).wait(1).to({_off:false},0).wait(1));

	// Layer 5
	this.menurespuestas = new lib.personajesmenu();
	this.menurespuestas.parent = this;
	this.menurespuestas.setTransform(443.1,329.7,1,1,0,0,0,159.4,212.8);
	this.menurespuestas._off = true;

	this.timeline.addTween(cjs.Tween.get(this.menurespuestas).wait(1).to({_off:false},0).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABsD0QBFgFAAhEIAAAAIAAlTQAAhDhFgGIAAAAIAAhvQDmACAAC/IAAAAIAAE1QAADGjmAFIAAAAgAiPCUIAAk2QgBi2DhgHIAAAAIAABuQhCAHAABCIAAAAIAAFTQAABEBCAFIAAAAIAABtQjfgHgBjGgAffFUImDqlICnAAIGFKlgAZZFUICxk+IBMCBIhYC9gAVIFUIAAh1IDMAAIAAB1gASUFUIAAqlICcAAIAAKlgAOiFUIAAqlICTAAIAAKlgALJFUIh5l3IAAkuIAsAAIB0HRIBznRIAtAAIAAEyIh9FzgAGtFUIAAqlICSAAIAAKlgAl9FUIAAqlICTAAIAAKlgApWFUIh5l3IAAkuIAsAAIB0HRIBznRIAtAAIAAEyIh9FzgAtyFUIAAqlICSAAIAAKlgAyKFUIAAh1IDLAAIAAB1gA0/FUIAAqlICdAAIAAKlgA4xFUIAAqlICTAAIAAKlgA8KFUIh4l3IAAkuIAsAAIB0HRIBynRIAtAAIAAEyIh8FzgEggmAFUIAAqlICSAAIAAKlgEAkYAAzIg5AmIAVhCIg2gqIBFAAIAZhBIAVBCIBFADIg4AnIASBDgEgkbAAzIg5AmIAVhCIg2gqIBFAAIAZhBIAVBCIBFADIg4AnIASBDgAVIAsIAAhxIDAAAIAABxgAyKAsIAAhxIDAAAIAABxgAeFioIBPipIClAAIirErgAVIjgIAAhxIDMAAIAABxgAyKjgIAAhxIDLAAIAABxg");
	mask.setTransform(739.2,143.2);

	// Layer 3
	this.instance = new lib.hojita();
	this.instance.parent = this;
	this.instance.setTransform(988.6,75.1,1,2.474,90.5);

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
	this.ans.setTransform(903.9,403.4,1.85,1.85);

	this.trys = new cjs.Text("7", "27px 'Arial'", "#FFFFFF");
	this.trys.name = "trys";
	this.trys.textAlign = "center";
	this.trys.lineHeight = 32;
	this.trys.parent = this;
	this.trys.setTransform(900.7,300.6,1.85,1.85);

	this.equis = new lib.espantosax();
	this.equis.parent = this;
	this.equis.setTransform(846.9,120.6);

	this.score = new cjs.Text("7", "27px 'Arial'", "#FFFFFF");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 32;
	this.score.parent = this;
	this.score.setTransform(912.2,52,1.85,1.85);

	this.memorama = new lib.memoramas();
	this.memorama.parent = this;
	this.memorama.setTransform(426,322.8,0.95,0.95,0,0,0,431.9,321.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.memorama},{t:this.score},{t:this.equis},{t:this.trys},{t:this.ans}]},1).wait(1));

	// Layer 8
	this.instance_1 = new lib.moctezuma();
	this.instance_1.parent = this;
	this.instance_1.setTransform(141.1,204.5,1.2,1.2,3.7);

	this.instance_2 = new lib.zapata();
	this.instance_2.parent = this;
	this.instance_2.setTransform(694.3,300.4,1.2,1.2,-17.2);

	this.instance_3 = new lib.santaanna();
	this.instance_3.parent = this;
	this.instance_3.setTransform(825,179,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).to({state:[]},1).wait(1));

	// Layer 1
	this.instance_4 = new lib.LOGONEW();
	this.instance_4.parent = this;
	this.instance_4.setTransform(23,681,0.755,0.755);

	this.inicio_btn = new lib.inicio();
	this.inicio_btn.parent = this;
	this.inicio_btn.setTransform(511.2,379,2,2,0,0,0,46.3,46.3);
	new cjs.ButtonHelper(this.inicio_btn, 0, 1, 2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUC1QgJgIAAgNQAAgMAJgIQAIgJAMAAQAMAAAJAJQAIAIAAAMQAAANgIAIQgJAJgMAAQgMAAgIgJgAgEBWIgXjZIgDgVQAAgRAKgKQAIgKANAAQAMAAAJAKQAIAKAAAUIgBASIgYDZg");
	this.shape.setTransform(673.9,610.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxB6QgJgCgFAAQgGAAgEAHIgJAAIAAhYIAJAAQAIAlAVATQAVATAZAAQATAAAMgKQALgLAAgQQAAgSgNgNQgNgMgmgUQgngSgMgQQgMgPAAgXQAAgfAVgUQAVgUAhAAQANAAAVAGQAOAEAEAAQAFAAACgCQACgCAEgGIAIAAIAABTIgIAAQgLgngPgOQgRgPgXAAQgTAAgMAKQgLAKAAAMQAAAPAIALQAJALAZAMIAmAUQA3AZAAAsQAAAhgZAVQgaAUgfAAQgWAAgdgIg");
	this.shape_1.setTransform(654.4,616.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAhB3QgHgIgBgWQglAdgJAFQgPAGgQAAQgaAAgQgSQgRgRAAgdQAAgRAIgNQALgSAcgRQAbgPA+gXIAAgJQAAglgLgOQgMgOgVAAQgRAAgKAKQgKAIAAAMIAAAQQAAAMgGAHQgGAHgLgBQgKAAgGgGQgGgIAAgLQAAgXAXgUQAYgTArAAQAfAAAVALQAQAIAIASQAFALAAAkIAABSQAAAkABAIQABAHAEADQACADAFAAQAEAAADgCQAGgDAQgRIAAAQQgeAogcAAQgNAAgIgKgAgaAAQgVAMgJANQgKANAAAPQAAAUAMANQAMAMAPAAQAUAAAggbIAAhcQgnAPgMAGg");
	this.shape_2.setTransform(632,616.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABZB+IAAgJIAFAAQAQAAAJgGQAGgFADgJQABgFAAgVIAAhpQAAgegHgMQgLgSgXABQgOgBgPAIQgOAHgVATIAAADIAAALIAAB1QAAAZAEAHQACAFAIAFQAIAEATAAIAAAJIh8AAIAAgJQAUAAAJgFQAHgFADgKQABgEAAgWIAAhpQAAgegJgNQgMgRgUAAQgPAAgPAIQgVALgNAPIAACDQAAAYAEAIQADAHAGAEQAHADAUAAIAAAJIh5AAIAAgJQAQAAAHgDQAHgEADgIQAEgJAAgWIAAhdQAAgpgDgLQgCgKgDgCQgFgEgGAAQgIAAgKAEIgFgJIBKgfIAMAAIAAA0IAggeQAMgKAOgGQAOgGANAAQAXABARANQAQANAFAZQAdgfASgLQAUgJAUgBQATABAPAJQAQALAIAWQAHAQAAAhIAABpQgBAXAEAJQACAFAIAFQAHAEARAAIAAAJg");
	this.shape_3.setTransform(597.6,615.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhIBgQgfgjAAg6QAAg+AggjQAggkAwABQAqAAAbAbQAaAbAAAuIipAAQAAA2AbAeQAbAgAjAAQAYgBASgNQARgNANggIAIAGQgFAkgcAeQgbAfgpAAQgrAAgggjgAgthdQgRARgDAfIBxAAQgCgXgDgKQgIgPgMgJQgOgIgOAAQgWAAgSARg");
	this.shape_4.setTransform(550.4,616.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAsDDIAAgjQgSASgSAJQgQAIgUAAQgoAAgegiQgegiAAg1QAAg0AhgrQAhgsA1AAQAfAAAWAUIAAgtQAAgqgCgKQgCgJgFgEQgEgDgGAAQgIAAgLAEIgEgKIBJgeIANAAIAAEcQAAArACAKQACAJAFAEQADAEAHAAQAHAAAMgFIADAJIhJAfgAg2gbQgZAbAAA1QAAA2AYAdQAXAdAdAAQAXAAAYgYIAAh/QgCgRgIgPQgIgPgOgIQgMgIgMAAQgYAAgSAWg");
	this.shape_5.setTransform(525.2,609.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AANB+IAAgJIAFAAQARAAAHgFQAHgGADgKQABgEAAgVIAAhkQAAghgJgPQgJgQgUABQgfAAggAiIAACBQAAAZADAGQAEAIAHAEQAGADAUAAIAAAJIh5AAIAAgJIAFAAQATAAAGgKQAHgJAAgbIAAhbQAAgrgCgLQgCgJgEgDQgFgEgHAAQgHAAgKAEIgFgJIBLgfIALAAIAAA0QArg0AnAAQAUABAOAJQAPAKAIAXQAGARAAAhIAABoQAAAXAEAJQADAGAHAEQAGAEASAAIAAAJg");
	this.shape_6.setTransform(496.7,615.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhHBgQgggjAAg6QAAg+AhgjQAfgkAxABQApAAAaAbQAbAbAAAuIipAAQAAA2AaAeQAcAgAiAAQAZgBASgNQASgNALggIAJAGQgGAkgaAeQgcAfgpAAQgrAAgfgjgAgshdQgSARgDAfIBxAAQgBgXgEgKQgIgPgNgJQgNgIgOAAQgWAAgRARg");
	this.shape_7.setTransform(471,616.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhYB+IAAgJQATAAAJgGQAHgFADgJQABgFAAgVIAAheQAAgrgCgIQgCgIgEgEQgFgEgHAAQgIAAgLAEIgCgJIBKgfIALAAIAAA3QAeg3AgAAQAQABAJAIQAKAJAAAMQAAAKgIAIQgHAHgJAAQgKAAgLgJQgMgKgGAAQgEABgGAFQgMALgMAZIAAB1QAAAVAFAKQADAHAIAFQAKAFAQAAIAAAJg");
	this.shape_8.setTransform(449.8,615.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiAC5IAAgKIAHAAQAPABAKgGQAFgDADgHQADgGAAgbIAAjoQAAgYgCgGQgCgHgFgDQgFgDgIAAQgGAAgKAEIgDgJIBLgeIAKAAIAAA5QATggAUgNQASgNAVAAQAlAAAZAdQAeAjAAA5QAAA/glApQgeAigtAAQgTAAgOgFQgLgEgOgMIAABKQAAAaADAHQAEAGAIAEQAHAEATAAIAAAKgAgIiLQgKAFgXAYIAABcQABAdACAJQADAQAPALQAPAMAVAAQAbAAAQgVQAXgbAAgxQAAg4gZgfQgRgVgYAAQgNAAgLAHg");
	this.shape_9.setTransform(425.5,621.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAhB3QgHgIgBgWQglAdgJAFQgPAGgQAAQgaAAgQgSQgRgRAAgdQAAgRAIgNQALgSAcgRQAbgPA+gXIAAgJQAAglgLgOQgMgOgVAAQgRAAgKAKQgKAIAAAMIAAAQQAAAMgGAHQgGAHgLgBQgKAAgGgGQgGgIAAgLQAAgXAXgUQAYgTArAAQAfAAAVALQAQAIAIASQAFALAAAkIAABSQAAAkABAIQABAHAEADQACADAFAAQAEAAADgCQAGgDAQgRIAAAQQgeAogcAAQgNAAgIgKgAgaAAQgVAMgJANQgKANAAAPQAAAUAMANQAMAMAPAAQAUAAAggbIAAhcQgnAPgMAGg");
	this.shape_10.setTransform(401.5,616.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhaBWQgcglAAgvQAAghARghQARgiAbgPQAcgQAdAAQA4AAAiAqQAdAkAAAvQAAAggQAiQgQAigcARQgcARghAAQg3AAghgsgAgkhnQgOAIgJAVQgJAVAAAiQAAA0AWAnQAVAnAiAAQAaAAARgVQARgWAAg0QAAhBgcglQgUgagcAAQgOAAgPAJg");
	this.shape_11.setTransform(769.3,572.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgxB6QgJgCgFAAQgGAAgEAHIgJAAIAAhYIAJAAQAIAlAVATQAVATAZAAQATAAAMgKQALgLAAgQQAAgSgNgNQgNgMgmgUQgngSgMgQQgMgPAAgXQAAgfAVgUQAVgUAhAAQANAAAVAGQAOAEAEAAQAFAAACgCQACgCAEgGIAIAAIAABTIgIAAQgLgngPgOQgRgPgXAAQgTAAgMAKQgLAKAAAMQAAAPAIALQAJALAZAMIAmAUQA3AZAAAsQAAAhgZAVQgaAUgfAAQgWAAgdgIg");
	this.shape_12.setTransform(731.5,572.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhHBgQgggiAAg7QAAg+AhgjQAfgjAxAAQApgBAaAcQAbAbAAAuIipAAQAAA1AaAgQAcAfAiAAQAZgBASgMQARgOAMggIAJAFQgGAlgaAfQgcAegpAAQgrgBgfgigAgshdQgSARgDAfIBxAAQgCgXgEgKQgGgPgOgJQgNgIgOgBQgWAAgRASg");
	this.shape_13.setTransform(708.5,572.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgpC7QgWgIgXgPIAAj+QAAgqgCgKQgCgJgEgEQgFgDgGAAQgIAAgLAEIgEgKIBKgeIAMAAIAACzQAkgyAoAAQAmAAAcAgQAdAhAAA3QAABBgsAoQglAjguAAQgVAAgWgIgAgOgUQgLAGgRAPIAACTQAOANAPAHQANAHAQAAQAYAAAVgbQAVgbAAgzQAAgvgVgYQgVgagbAAQgNAAgOAHg");
	this.shape_14.setTransform(681.3,565.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAhB4QgHgJgBgXQglAegJAFQgPAGgQAAQgaAAgQgRQgRgSAAgcQAAgTAIgNQALgRAcgRQAbgPA+gXIAAgJQAAgmgLgNQgMgOgVAAQgRAAgKAKQgKAIAAAMIAAAQQAAAMgGAHQgGAHgLAAQgKgBgGgGQgGgIAAgLQAAgYAXgTQAYgTArAAQAfAAAVALQAQAIAIASQAFALAAAkIAABTQAAAjABAIQABAHAEAEQACACAFAAQAEAAADgCQAGgDAQgRIAAAPQgeApgcAAQgNAAgIgJgAgaAAQgVAMgJANQgKANAAAPQAAATAMAOQAMAMAPAAQAUAAAggbIAAhcQgnAPgMAGg");
	this.shape_15.setTransform(657.3,572.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgxB6QgJgCgFAAQgGAAgEAHIgJAAIAAhYIAJAAQAIAlAVATQAVATAZAAQATAAAMgKQALgLAAgQQAAgSgNgNQgNgMgmgUQgngSgMgQQgMgPAAgXQAAgfAVgUQAVgUAhAAQANAAAVAGQAOAEAEAAQAFAAACgCQACgCAEgGIAIAAIAABTIgIAAQgLgngPgOQgRgPgXAAQgTAAgMAKQgLAKAAAMQAAAPAIALQAJALAZAMIAmAUQA3AZAAAsQAAAhgZAVQgaAUgfAAQgWAAgdgIg");
	this.shape_16.setTransform(633.8,572.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhIBgQgfgiAAg7QAAg+AggjQAhgjAvAAQAqgBAaAcQAbAbAAAuIipAAQAAA1AaAgQAbAfAjAAQAZgBASgMQARgOAMggIAJAFQgGAlgbAfQgbAegoAAQgsgBgggigAgthdQgRARgDAfIBxAAQgCgXgEgKQgGgPgNgJQgOgIgNgBQgXAAgSASg");
	this.shape_17.setTransform(597.1,572.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAzB/IAAg0QgfAigRAJQgQAJgSAAQgVAAgPgMQgPgMgGgTQgGgTAAgiIAAhtQAAgRgEgHQgEgHgHgDQgHgEgUAAIAAgKIBWAAIAACkQAAAiANALQALALARAAQALAAAPgIQAOgHAUgUIAAiLQAAgVgHgHQgIgHgYgBIAAgKIBUAAIAACUQAAArACAKQACAJAEAEQAEAEAGAAQAJAAAKgFIAEAJIhKAfg");
	this.shape_18.setTransform(570.8,572.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAEC5IAAgKIAFAAQAPAAAIgEQAFgDAEgHQADgIAAgWIAAhqQgZAdgSALQgRAKgUAAQgjAAgcggQgcghAAg1QAAg/AlgnQAlgnA0AAQAOAAANAEQANAEAKAJQAQgIAOgJIAJAAIAAE7QAAAXADAHQAEAHAHAEQAGADAUAAIAAAKgAg9iMQgVAZAAA0QAAAyAWAZQAVAZAfAAQAPAAAMgGQANgHAMgQIAAhyQAAgUgFgMQgGgMgNgIQgNgIgQAAQgeAAgWAag");
	this.shape_19.setTransform(544.3,577.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhaBWQgcglAAgvQAAghARghQARgiAbgPQAcgQAdAAQA4AAAiAqQAdAkAAAvQAAAggQAiQgQAigcARQgcARghAAQg3AAghgsgAgkhnQgOAIgJAVQgJAVAAAiQAAA0AWAnQAVAnAiAAQAaAAARgVQARgWAAg0QAAhBgcglQgUgagcAAQgOAAgPAJg");
	this.shape_20.setTransform(502.1,572.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag5C/IAAgKQARAAAGgDQAGgDAEgJQADgIAAgWIAAjfQAAgqgBgJQgDgJgEgEQgEgDgGAAQgIAAgKADIgFgJIBJgeIAMAAIAAFGQAAAXADAHQAEAHAGAFQAIADASAAIAAAKg");
	this.shape_21.setTransform(481,565.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAhB4QgHgJgBgXQglAegJAFQgPAGgQAAQgaAAgQgRQgRgSAAgcQAAgTAIgNQALgRAcgRQAbgPA+gXIAAgJQAAgmgLgNQgMgOgVAAQgRAAgKAKQgKAIAAAMIAAAQQAAAMgGAHQgGAHgLAAQgKgBgGgGQgGgIAAgLQAAgYAXgTQAYgTArAAQAfAAAVALQAQAIAIASQAFALAAAkIAABTQAAAjABAIQABAHAEAEQACACAFAAQAEAAADgCQAGgDAQgRIAAAPQgeApgcAAQgNAAgIgJgAgaAAQgVAMgJANQgKANAAAPQAAATAMAOQAMAMAPAAQAUAAAggbIAAhcQgnAPgMAGg");
	this.shape_22.setTransform(448,572.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgpC7QgWgIgXgPIAAj+QAAgqgCgKQgCgJgEgEQgFgDgGAAQgIAAgLAEIgEgKIBKgeIAMAAIAACzQAkgyAoAAQAmAAAcAgQAdAhAAA3QAABBgsAoQglAjguAAQgVAAgWgIgAgOgUQgLAGgRAPIAACTQAOANAPAHQANAHAQAAQAYAAAVgbQAVgbAAgzQAAgvgVgYQgVgagbAAQgNAAgOAHg");
	this.shape_23.setTransform(420.1,565.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhIBgQgfgiAAg7QAAg+AggjQAhgjAvAAQAqgBAaAcQAbAbAAAuIipAAQAAA1AaAgQAbAfAjAAQAZgBASgMQASgOALggIAJAFQgGAlgbAfQgbAegoAAQgsgBgggigAgthdQgRARgDAfIBxAAQgCgXgEgKQgGgPgNgJQgOgIgNgBQgXAAgSASg");
	this.shape_24.setTransform(395.5,572.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAzB/IAAg0QgfAigRAJQgQAJgSAAQgVAAgPgMQgPgMgGgTQgGgTAAgiIAAhtQAAgRgEgHQgEgHgHgDQgHgEgUAAIAAgKIBWAAIAACkQAAAiANALQALALARAAQALAAAPgIQAOgHAUgUIAAiLQAAgVgHgHQgIgHgYgBIAAgKIBUAAIAACUQAAArACAKQACAJAEAEQAEAEAGAAQAJAAAKgFIAEAJIhKAfg");
	this.shape_25.setTransform(369.2,572.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhYB/IAAgKQATAAAJgGQAHgFACgJQACgFAAgVIAAheQAAgrgCgIQgCgJgEgDQgFgEgHAAQgIAAgLAEIgCgJIBKgfIALAAIAAA4QAeg4AgAAQAQABAJAIQAKAJAAAMQAAALgIAHQgHAHgJAAQgKAAgLgJQgMgKgGAAQgEAAgGAGQgMALgMAZIAAB1QAAAUAFALQADAHAJAFQAJAFAQAAIAAAKg");
	this.shape_26.setTransform(346.7,572);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AiKC2IAAgKIAOAAQAXAAAKgPQAFgJAAgeIAAjqQAAgjgHgJQgKgLgVAAIgOAAIAAgKICGAAQAwAAAcAKQAcAKATAYQAUAYAAAhQAAAsgdAcQgeAbg2AAQgNAAgOgCIghgGIAABrQAAAiAIAIQAKAMATAAIAOAAIAAAKgAgiiaIAACXQAOADALAAIASABQAcABAUgVQAVgVAAgjQAAgYgKgUQgKgVgRgJQgSgLgXAAQgMAAgWAGg");
	this.shape_27.setTransform(321.4,566.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVC0QgJgKAAgVIACgSIAYjYIAJAAIAYDYIACAWQAAAQgJALQgKAKgMAAQgLAAgKgKgAgUiLQgIgIAAgMQAAgMAIgJQAJgJAMAAQAMAAAJAJQAIAJAAAMQAAAMgIAIQgKAKgLgBQgMABgJgKg");
	this.shape_28.setTransform(297.5,577.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.inicio_btn},{t:this.instance_4}]}).to({state:[]},1).wait(1));

	// Layer 7
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,1,1).p("EBy/g9DIhLAAIiPAAIhmAAIiOAAIhmAAIiOAAIhmAAIiPAAIhmAAIiOAAIhmgBIiPAAIhmAAIiPAAIhlAAIiPAAIhmAAIiOAAIhmAAIiPAAIhmAAIiOAAIhnAAIiOAAIhmAAIiOAAIhmAAIiPAAIhlAAIiPAAIhmAAIiPAAIhmAAIiOAAIhmAAIiPAAIhmAAIiOAAIiVAAIhAAAIhmAAIiPAAIhlAAIiCAAIgNABIhmAAIiOAAIhmAAIiPAAIhlAAIiPAAIhmAAIiPAAIhmAAIiPAAIhlAAIiPAAIhmAAIiOAAIhmAAIiPAAIhlAAIiOAAIhnAAIiOAAIhmAAIiOAAIgPgBEB2Ag9EIgYAAIiOAAIgbABEB2Ag9EIgYABIiOAAIgbAAEB1PA9EICNABMAAAh6JIhcAAEAohA9FIBfAAICPAAIBmAAICPAAIBmAAICOAAIBmAAICPAAIBmAAICOAAIBmAAICPAAIBlAAICPAAIBmAAICPAAIBlAAICPAAIBmAAICPAAIBmAAICOAAIBmAAICPAAIBlAAICPgBIBmAAICOAAIBnAAICOAAIBmABICPgBIBmAAICOAAIBlAAICQAAIBlAAICPAAIBmABIB0gBIAbAAIAaAAEB0aA9EIAbABIAagBEgLvg9EIiBAAIgOABIhlAAIiPAAIhmAAIiPAAIhmAAIiOAAIhmAAIiPAAIhmAAIiOAAIhmAAIiPAAIhlAAIiPAAIhmAAIiOAAIhnAAIiOAAIhmAAIiPAAIhmAAIiOAAIhmAAIiPAAIhlAAIiPAAIhmgBIiPAAIhmAAIiOAAIhmAAIiPAAIhmAAIiOAAIhmAAIiPAAIhmAAIiOAAIhmAAIiPAAIhmAAIiOAAIhmAAIiPAAIhlAAIiPAAIhmAAIiOAAIhnAAIiOAAIhmAAIiPAAIhmAAIiOAAIiUAAIAAL6IAALdIAAIMIAALeIAAIOIAALaIAAIPIAALeIAAILIAALfIAAILIAALeIAAAgIBfAAICPAAIBmAAICPgBIBmAAICOAAIBnAAICOAAIBmAAICOAAIBmAAICPAAIBlAAICPAAIBmAAICPAAIBmAAICOAAIBmABICPgBIBmAAICOAAIBmAAICPAAIBlAAICPAAIBmAAICOAAIBnAAICOAAIBmAAICPAAIBmAAICOAAIBmAAICPAAIBmAAICOAAIBmAAICPAAIBmAAICPAAIBlAAICPAAIBmAAICOAAIBmAAICOAAIBnAAICOAAIBmAAICPAAIBmAAICOAAIBmAAICPAAIBlAAICPAAIBmAAICPAAIBmAAICPAAIBkAAICPAAIBmAAICOAAIBmAAICPAAIBlAAICPAAIBmABICOAAIBnAAICOAAIBmAAICPAAIBlAAICPAAIBmAAICPAAIBmAAICOAAIDbAAEAohA8mIAAAf");
	this.shape_29.setTransform(752.4,380.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0E1B45").s().p("EBzDA9ZIAIgoIB0gBIh0ABIDszBIAALcIheHkIgaAAIAaAAIAAABIgagBIAaABIgHAogEBvPA9ZIAHgpICOAAIiOAAMAHhgmrIAALbIlTbQIgHApgEBraA9ZIAHgpMALWg6XIAALfMgJHAu4IiPAAICPAAIgIApgEBnlA9ZIAIgpMAPKhN+IAALdMgM7BChIiPAAICPAAIgIApgEBjxA9ZIAIgoMAS+hhpIAALdMgQwBWLIiOABICOgBIgHApgEBf9A9ZIAHgpICPAAIgIApgEBcIA9ZIAIgpMAXvh6HIAAAAICOAAIAAAAIiOAAICOAAMgXvB6HIiOAAICOAAIgIApgEBYTA9ZIAIgoMAXvh6IICPAAIiPAAIAAAAICPAAIAAAAMgXvB6HIiPABICPgBIgIApgEgpEA9ZIAIgpICOAAIiOAAMAXvh6HICOAAIiOAAIAAAAICOAAIAAAAMgXvB6HIgHApgEgs5A9ZIAIgpICPAAIiPAAMAXvh6HICPAAIiPAAIAAAAICPAAIAAAAMgXvB6HIgIApgEgwtA9ZIAIgpICOAAIiOAAMAXvh6HICOAAIiOAAIAAAAICOAAIAAAAMgXvB6HIgIApgEg0iA9ZIAIgpICOAAIiOAAMAXvh6HICOAAIiOAAIAAAAICOAAIAAAAMgXvB6HIgHApgEg4WA9ZIAHgpICPAAIiPAAMAXvh6HICPAAIiPAAIAAAAICPAAIAAAAMgXvB6HIgIApgEg8LA9ZIAIgpICPAAIiPAAMAXvh6HICPAAIiPAAIAAAAICPAAIAAAAMgXvB6HIgIApgEg//A9ZIAIgpICOAAIiOAAMAXvh6HICOAAIiOAAIAAAAICOAAIAAAAMgXvB6HIgHApgEhDzA9ZIAHgpICOAAIiOAAMAXvh6HICOAAIiOAAIAAAAICOAAIAAAAMgXvB6HIgHApgEhHoA9ZIAHgpICPAAIiPAAMAXvh6HICPAAIiPAAIAAAAICPAAIAAAAMgXvB6HIgIApgEApFAMGIAALfMgHPAlMIiOAAgEAbzA8xMANShETIAALdMgLDA42gEAX/A8xMARGhX9IAALeMgO4BMfgEB1ZA8xgEBUmA8xMAXvh6IICPAAMgXvB6IgEBQyA8xMAXvh6IICPAAMgXvB6IgEBM+A8xMAXvh6IICOAAMgXvB6IgEBJJA8xMAXvh6IICPAAMgXvB6IgEBFVA8xMAXvh6IICOAAMgXvB6IgEBBgA8xMAXvh6IICPAAMgXvB6IgEA9sA8xMAXvh6IICOAAMgXvB6IgEA53A8xMAXvh6IICPAAMgXvB6IgEA2DA8xMAXvh6IICPAAMgXvB6IgEAyOA8xMAXwh6IICOAAMgXvB6IgEAuZA8xMAXwh6IICOAAMgXvB6IgEAqlA8xMAXvh6IICPAAMgXvB6IgEAjcA8xIFp8+IAALbIjbRjgEAUKA8xMAU7hrnIAALfMgSsBgIgEAQWA8xMAXvh6IIBAAAIAAGTMgWhBz1gEg7Pg9XICPAAMgXvB6HIiPABgEhZzg9XICOAAMgXuB6HIiPABgEh1XA8xMAXvh6IICPAAMgXvB6IgEAMhA8wMAXvh6HICPAAMgXvB6HgEAYzg9XICOAAIiOAAIAAAAICOAAIAAAAMgXuB6HIiPAAgEAJhg9XICPAAIiPAAIAAAAICPAAIAAAAMgXuB6HIiPAAgEgFwg9XICOAAIiOAAIAAAAICOAAIAAAAMgXvB6HIiOAAgEhLVA8wMAXvh6HICOAAMgXvB6HgEhPKA8wMAXwh6HICOAAMgXvB6HgEhWyA8wMAXvh6HICOAAMgXvB6HgEhanA8wMAXvh6HICOAAMgXuB6HgEhecA8wMAXvh6HICPgBMgXvB6IgEhiQA8wMAXvh6HICPAAMgXvB6HgEhmFA8wMAXwh6HICOAAMgXvB6HgEhp5A8wMAXvh6HICPgBMgXvB6IgEhttA8wMAXvh6HICOAAMgXvB6HgEBvWA8wgEBp8A8wgEBmHA8wgEBiTA8wIiPAAMAWzh1SIAALdMgUkBp1gEBgEA8wgEBeeA8wgEAItA8wMAXvh6HIANAAICCAAMgXwB6HgEAE4A8wMAXvh6HICPAAIiPAAIAAAAICPAAIAAAAMgXvB6HgEgCvA8wMAXth6HICPAAIiPAAIAAAAICPAAIAAAAMgXuB6HgEgGkA8wMAXuh6HICOAAIiOAAIAAAAICOAAIAAAAMgXuB6HgEgKZA8wMAXuh6HICPAAIiPAAIAAAAICPAAIAAAAMgXuB6HgEgSBA8wMAXuh6HICOAAIiOAAIAAAAICOAAIAAAAMgXuB6HgEgV2A8wMAXuh6HICPAAIiPAAIAAAAICPAAIAAAAMgXuB6HgEgZqA8wMAXuh6HICOAAIiOAAIAAAAICOAAIAAAAMgXuB6HgEghUA8wMAXvh6HIAAAAICPAAIAAAAIiPAAICPAAMgXvB6HgEglIA8wMAXvh6HIAAAAIANAAICCAAMgXvB6HgEgNZg9XIANAAgEgo8A8wgEgwlA8wgEg0aA8wgEg4PA8wgEg/3A8wgEhDsA8wgEApFAw0MAVbhuLICOAAMgXpB5pgEh22AwzMAVahuKICPAAMgXpB5ogEApFAdKMARmhahICPAAMgT1Bl/gEh22AdKMARmhahICPAAMgT1Bl/gEApFAJhMANyhG4ICPAAMgQBBSVgEh22AJgMANyhG3ICOAAMgQABSVgEApFgKIMAJ+gzPICOAAMgMMA+pgEh22gKIMAJ9gzPICOAAMgMLA+pgEApFgd1IGJ/iICOAAMgIXArBgEh22gd1IGI/iICPAAMgIXArBgEApFgxeICUr5ICPAAIkjXXgEh22gxeICUr5ICOAAIkiXXgEB2Ng9XgEBwKg9XgEAgcg9XIANAAIgNAAgEAcng9XgEAYzg9XgEAU+g9XgEARKg9XgEANVg9XgEAJhg9XgEAFtg9XgEAB4g9XgEgB8g9XgEgFwg9XgEgHWg9XgEgRNg9XgEgVCg9XgEgY2g9XgEgcrg9XgEgggg9XgEgkUg9XgEgoIg9XgEgr9g9XgEgvyg9Xg");
	this.shape_30.setTransform(748.7,382.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(637,369,1530.8,786.7);
// library properties:
lib.properties = {
	width: 1300,
	height: 760,
	fps: 24,
	color: "#000033",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/memomex10_atlas_.png", id:"memomex10_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;