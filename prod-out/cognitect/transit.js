// Compiled by ClojureScript 0.0-2356
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit');
cljs.core.enable_console_print_BANG_.call(null);
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;
goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__12294_12298 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__12295_12299 = null;var count__12296_12300 = (0);var i__12297_12301 = (0);while(true){
if((i__12297_12301 < count__12296_12300))
{var k_12302 = cljs.core._nth.call(null,chunk__12295_12299,i__12297_12301);var v_12303 = (b[k_12302]);(a[k_12302] = v_12303);
{
var G__12304 = seq__12294_12298;
var G__12305 = chunk__12295_12299;
var G__12306 = count__12296_12300;
var G__12307 = (i__12297_12301 + (1));
seq__12294_12298 = G__12304;
chunk__12295_12299 = G__12305;
count__12296_12300 = G__12306;
i__12297_12301 = G__12307;
continue;
}
} else
{var temp__4126__auto___12308 = cljs.core.seq.call(null,seq__12294_12298);if(temp__4126__auto___12308)
{var seq__12294_12309__$1 = temp__4126__auto___12308;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12294_12309__$1))
{var c__4438__auto___12310 = cljs.core.chunk_first.call(null,seq__12294_12309__$1);{
var G__12311 = cljs.core.chunk_rest.call(null,seq__12294_12309__$1);
var G__12312 = c__4438__auto___12310;
var G__12313 = cljs.core.count.call(null,c__4438__auto___12310);
var G__12314 = (0);
seq__12294_12298 = G__12311;
chunk__12295_12299 = G__12312;
count__12296_12300 = G__12313;
i__12297_12301 = G__12314;
continue;
}
} else
{var k_12315 = cljs.core.first.call(null,seq__12294_12309__$1);var v_12316 = (b[k_12315]);(a[k_12315] = v_12316);
{
var G__12317 = cljs.core.next.call(null,seq__12294_12309__$1);
var G__12318 = null;
var G__12319 = (0);
var G__12320 = (0);
seq__12294_12298 = G__12317;
chunk__12295_12299 = G__12318;
count__12296_12300 = G__12319;
i__12297_12301 = G__12320;
continue;
}
}
} else
{}
}
break;
}
return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.cljs$lang$type = true;
cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write.call(null,writer__4246__auto__,"cognitect.transit/MapBuilder");
});
cognitect.transit.MapBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){var self__ = this;
var _ = this;return cljs.core.assoc_BANG_.call(null,m,k,v);
});
cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,m);
});
cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});
cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){return (new cognitect.transit.MapBuilder());
});

/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.cljs$lang$type = true;
cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write.call(null,writer__4246__auto__,"cognitect.transit/VectorBuilder");
});
cognitect.transit.VectorBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});
cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){var self__ = this;
var _ = this;return cljs.core.conj_BANG_.call(null,v,x);
});
cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,v);
});
cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});
cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){return (new cognitect.transit.VectorBuilder());
});
/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": {"cmap": (function (v){var i = (0);var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__12321 = (i + (2));
var G__12322 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__12321;
ret = G__12322;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
}), "list": (function (v){return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}), "set": (function (v){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}), ":": (function (v){return cljs.core.keyword.call(null,v);
}), "$": (function (v){return cljs.core.symbol.call(null,v);
})}},cljs.core.clj__GT_js.call(null,opts)));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.cljs$lang$type = true;
cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write.call(null,writer__4246__auto__,"cognitect.transit/KeywordHandler");
});
cognitect.transit.KeywordHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return ":";
});
cognitect.transit.KeywordHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){return (new cognitect.transit.KeywordHandler());
});

/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.cljs$lang$type = true;
cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write.call(null,writer__4246__auto__,"cognitect.transit/SymbolHandler");
});
cognitect.transit.SymbolHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "$";
});
cognitect.transit.SymbolHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){return (new cognitect.transit.SymbolHandler());
});

/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.cljs$lang$type = true;
cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write.call(null,writer__4246__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__12323_12327 = cljs.core.seq.call(null,v);var chunk__12324_12328 = null;var count__12325_12329 = (0);var i__12326_12330 = (0);while(true){
if((i__12326_12330 < count__12325_12329))
{var x_12331 = cljs.core._nth.call(null,chunk__12324_12328,i__12326_12330);ret.push(x_12331);
{
var G__12332 = seq__12323_12327;
var G__12333 = chunk__12324_12328;
var G__12334 = count__12325_12329;
var G__12335 = (i__12326_12330 + (1));
seq__12323_12327 = G__12332;
chunk__12324_12328 = G__12333;
count__12325_12329 = G__12334;
i__12326_12330 = G__12335;
continue;
}
} else
{var temp__4126__auto___12336 = cljs.core.seq.call(null,seq__12323_12327);if(temp__4126__auto___12336)
{var seq__12323_12337__$1 = temp__4126__auto___12336;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12323_12337__$1))
{var c__4438__auto___12338 = cljs.core.chunk_first.call(null,seq__12323_12337__$1);{
var G__12339 = cljs.core.chunk_rest.call(null,seq__12323_12337__$1);
var G__12340 = c__4438__auto___12338;
var G__12341 = cljs.core.count.call(null,c__4438__auto___12338);
var G__12342 = (0);
seq__12323_12327 = G__12339;
chunk__12324_12328 = G__12340;
count__12325_12329 = G__12341;
i__12326_12330 = G__12342;
continue;
}
} else
{var x_12343 = cljs.core.first.call(null,seq__12323_12337__$1);ret.push(x_12343);
{
var G__12344 = cljs.core.next.call(null,seq__12323_12337__$1);
var G__12345 = null;
var G__12346 = (0);
var G__12347 = (0);
seq__12323_12327 = G__12344;
chunk__12324_12328 = G__12345;
count__12325_12329 = G__12346;
i__12326_12330 = G__12347;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.ListHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){return (new cognitect.transit.ListHandler());
});

/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.cljs$lang$type = true;
cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write.call(null,writer__4246__auto__,"cognitect.transit/MapHandler");
});
cognitect.transit.MapHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "map";
});
cognitect.transit.MapHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v;
});
cognitect.transit.MapHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){return (new cognitect.transit.MapHandler());
});

/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.cljs$lang$type = true;
cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write.call(null,writer__4246__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__12348_12352 = cljs.core.seq.call(null,v);var chunk__12349_12353 = null;var count__12350_12354 = (0);var i__12351_12355 = (0);while(true){
if((i__12351_12355 < count__12350_12354))
{var x_12356 = cljs.core._nth.call(null,chunk__12349_12353,i__12351_12355);ret.push(x_12356);
{
var G__12357 = seq__12348_12352;
var G__12358 = chunk__12349_12353;
var G__12359 = count__12350_12354;
var G__12360 = (i__12351_12355 + (1));
seq__12348_12352 = G__12357;
chunk__12349_12353 = G__12358;
count__12350_12354 = G__12359;
i__12351_12355 = G__12360;
continue;
}
} else
{var temp__4126__auto___12361 = cljs.core.seq.call(null,seq__12348_12352);if(temp__4126__auto___12361)
{var seq__12348_12362__$1 = temp__4126__auto___12361;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12348_12362__$1))
{var c__4438__auto___12363 = cljs.core.chunk_first.call(null,seq__12348_12362__$1);{
var G__12364 = cljs.core.chunk_rest.call(null,seq__12348_12362__$1);
var G__12365 = c__4438__auto___12363;
var G__12366 = cljs.core.count.call(null,c__4438__auto___12363);
var G__12367 = (0);
seq__12348_12352 = G__12364;
chunk__12349_12353 = G__12365;
count__12350_12354 = G__12366;
i__12351_12355 = G__12367;
continue;
}
} else
{var x_12368 = cljs.core.first.call(null,seq__12348_12362__$1);ret.push(x_12368);
{
var G__12369 = cljs.core.next.call(null,seq__12348_12362__$1);
var G__12370 = null;
var G__12371 = (0);
var G__12372 = (0);
seq__12348_12352 = G__12369;
chunk__12349_12353 = G__12370;
count__12350_12354 = G__12371;
i__12351_12355 = G__12372;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.SetHandler.prototype.stringRep = (function (){var self__ = this;
var v = this;return null;
});
cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){return (new cognitect.transit.SetHandler());
});

/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.cljs$lang$type = true;
cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write.call(null,writer__4246__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__12373_12377 = cljs.core.seq.call(null,v);var chunk__12374_12378 = null;var count__12375_12379 = (0);var i__12376_12380 = (0);while(true){
if((i__12376_12380 < count__12375_12379))
{var x_12381 = cljs.core._nth.call(null,chunk__12374_12378,i__12376_12380);ret.push(x_12381);
{
var G__12382 = seq__12373_12377;
var G__12383 = chunk__12374_12378;
var G__12384 = count__12375_12379;
var G__12385 = (i__12376_12380 + (1));
seq__12373_12377 = G__12382;
chunk__12374_12378 = G__12383;
count__12375_12379 = G__12384;
i__12376_12380 = G__12385;
continue;
}
} else
{var temp__4126__auto___12386 = cljs.core.seq.call(null,seq__12373_12377);if(temp__4126__auto___12386)
{var seq__12373_12387__$1 = temp__4126__auto___12386;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12373_12387__$1))
{var c__4438__auto___12388 = cljs.core.chunk_first.call(null,seq__12373_12387__$1);{
var G__12389 = cljs.core.chunk_rest.call(null,seq__12373_12387__$1);
var G__12390 = c__4438__auto___12388;
var G__12391 = cljs.core.count.call(null,c__4438__auto___12388);
var G__12392 = (0);
seq__12373_12377 = G__12389;
chunk__12374_12378 = G__12390;
count__12375_12379 = G__12391;
i__12376_12380 = G__12392;
continue;
}
} else
{var x_12393 = cljs.core.first.call(null,seq__12373_12387__$1);ret.push(x_12393);
{
var G__12394 = cljs.core.next.call(null,seq__12373_12387__$1);
var G__12395 = null;
var G__12396 = (0);
var G__12397 = (0);
seq__12373_12377 = G__12394;
chunk__12374_12378 = G__12395;
count__12375_12379 = G__12396;
i__12376_12380 = G__12397;
continue;
}
}
} else
{}
}
break;
}
return ret;
});
cognitect.transit.VectorHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){return (new cognitect.transit.VectorHandler());
});
/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a JavaScript
* array of interleaved type constructors and handler instances for those
* type constructors.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
, "handlers": (function (){var x12407 = cljs.core.clone.call(null,handlers);x12407.forEach = ((function (x12407,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__12408 = cljs.core.seq.call(null,coll);var chunk__12409 = null;var count__12410 = (0);var i__12411 = (0);while(true){
if((i__12411 < count__12410))
{var vec__12412 = cljs.core._nth.call(null,chunk__12409,i__12411);var k = cljs.core.nth.call(null,vec__12412,(0),null);var v = cljs.core.nth.call(null,vec__12412,(1),null);f.call(null,v,k);
{
var G__12414 = seq__12408;
var G__12415 = chunk__12409;
var G__12416 = count__12410;
var G__12417 = (i__12411 + (1));
seq__12408 = G__12414;
chunk__12409 = G__12415;
count__12410 = G__12416;
i__12411 = G__12417;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12408);if(temp__4126__auto__)
{var seq__12408__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12408__$1))
{var c__4438__auto__ = cljs.core.chunk_first.call(null,seq__12408__$1);{
var G__12418 = cljs.core.chunk_rest.call(null,seq__12408__$1);
var G__12419 = c__4438__auto__;
var G__12420 = cljs.core.count.call(null,c__4438__auto__);
var G__12421 = (0);
seq__12408 = G__12418;
chunk__12409 = G__12419;
count__12410 = G__12420;
i__12411 = G__12421;
continue;
}
} else
{var vec__12413 = cljs.core.first.call(null,seq__12408__$1);var k = cljs.core.nth.call(null,vec__12413,(0),null);var v = cljs.core.nth.call(null,vec__12413,(1),null);f.call(null,v,k);
{
var G__12422 = cljs.core.next.call(null,seq__12408__$1);
var G__12423 = null;
var G__12424 = (0);
var G__12425 = (0);
seq__12408 = G__12422;
chunk__12409 = G__12423;
count__12410 = G__12424;
i__12411 = G__12425;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x12407,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x12407;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__12406 = obj;G__12406.push(kfn.call(null,k),vfn.call(null,v));
return G__12406;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t12429 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t12429 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta12430){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta12430 = meta12430;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t12429.cljs$lang$type = true;
cognitect.transit.t12429.cljs$lang$ctorStr = "cognitect.transit/t12429";
cognitect.transit.t12429.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write.call(null,writer__4246__auto__,"cognitect.transit/t12429");
});
cognitect.transit.t12429.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t12429.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t12429.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t12429.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t12429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12431){var self__ = this;
var _12431__$1 = this;return self__.meta12430;
});
cognitect.transit.t12429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12431,meta12430__$1){var self__ = this;
var _12431__$1 = this;return (new cognitect.transit.t12429(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta12430__$1));
});
cognitect.transit.__GT_t12429 = (function __GT_t12429(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta12430){return (new cognitect.transit.t12429(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta12430));
});
}
return (new cognitect.transit.t12429(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){return com.cognitect.transit.types.isLink.call(null,x);
});
