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
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__15187_15191 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__15188_15192 = null;var count__15189_15193 = (0);var i__15190_15194 = (0);while(true){
if((i__15190_15194 < count__15189_15193))
{var k_15195 = cljs.core._nth.call(null,chunk__15188_15192,i__15190_15194);var v_15196 = (b[k_15195]);(a[k_15195] = v_15196);
{
var G__15197 = seq__15187_15191;
var G__15198 = chunk__15188_15192;
var G__15199 = count__15189_15193;
var G__15200 = (i__15190_15194 + (1));
seq__15187_15191 = G__15197;
chunk__15188_15192 = G__15198;
count__15189_15193 = G__15199;
i__15190_15194 = G__15200;
continue;
}
} else
{var temp__4126__auto___15201 = cljs.core.seq.call(null,seq__15187_15191);if(temp__4126__auto___15201)
{var seq__15187_15202__$1 = temp__4126__auto___15201;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15187_15202__$1))
{var c__8810__auto___15203 = cljs.core.chunk_first.call(null,seq__15187_15202__$1);{
var G__15204 = cljs.core.chunk_rest.call(null,seq__15187_15202__$1);
var G__15205 = c__8810__auto___15203;
var G__15206 = cljs.core.count.call(null,c__8810__auto___15203);
var G__15207 = (0);
seq__15187_15191 = G__15204;
chunk__15188_15192 = G__15205;
count__15189_15193 = G__15206;
i__15190_15194 = G__15207;
continue;
}
} else
{var k_15208 = cljs.core.first.call(null,seq__15187_15202__$1);var v_15209 = (b[k_15208]);(a[k_15208] = v_15209);
{
var G__15210 = cljs.core.next.call(null,seq__15187_15202__$1);
var G__15211 = null;
var G__15212 = (0);
var G__15213 = (0);
seq__15187_15191 = G__15210;
chunk__15188_15192 = G__15211;
count__15189_15193 = G__15212;
i__15190_15194 = G__15213;
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
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){return cljs.core._write.call(null,writer__8618__auto__,"cognitect.transit/MapBuilder");
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
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){return cljs.core._write.call(null,writer__8618__auto__,"cognitect.transit/VectorBuilder");
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
var G__15214 = (i + (2));
var G__15215 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__15214;
ret = G__15215;
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
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){return cljs.core._write.call(null,writer__8618__auto__,"cognitect.transit/KeywordHandler");
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
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){return cljs.core._write.call(null,writer__8618__auto__,"cognitect.transit/SymbolHandler");
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
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){return cljs.core._write.call(null,writer__8618__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__15216_15220 = cljs.core.seq.call(null,v);var chunk__15217_15221 = null;var count__15218_15222 = (0);var i__15219_15223 = (0);while(true){
if((i__15219_15223 < count__15218_15222))
{var x_15224 = cljs.core._nth.call(null,chunk__15217_15221,i__15219_15223);ret.push(x_15224);
{
var G__15225 = seq__15216_15220;
var G__15226 = chunk__15217_15221;
var G__15227 = count__15218_15222;
var G__15228 = (i__15219_15223 + (1));
seq__15216_15220 = G__15225;
chunk__15217_15221 = G__15226;
count__15218_15222 = G__15227;
i__15219_15223 = G__15228;
continue;
}
} else
{var temp__4126__auto___15229 = cljs.core.seq.call(null,seq__15216_15220);if(temp__4126__auto___15229)
{var seq__15216_15230__$1 = temp__4126__auto___15229;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15216_15230__$1))
{var c__8810__auto___15231 = cljs.core.chunk_first.call(null,seq__15216_15230__$1);{
var G__15232 = cljs.core.chunk_rest.call(null,seq__15216_15230__$1);
var G__15233 = c__8810__auto___15231;
var G__15234 = cljs.core.count.call(null,c__8810__auto___15231);
var G__15235 = (0);
seq__15216_15220 = G__15232;
chunk__15217_15221 = G__15233;
count__15218_15222 = G__15234;
i__15219_15223 = G__15235;
continue;
}
} else
{var x_15236 = cljs.core.first.call(null,seq__15216_15230__$1);ret.push(x_15236);
{
var G__15237 = cljs.core.next.call(null,seq__15216_15230__$1);
var G__15238 = null;
var G__15239 = (0);
var G__15240 = (0);
seq__15216_15220 = G__15237;
chunk__15217_15221 = G__15238;
count__15218_15222 = G__15239;
i__15219_15223 = G__15240;
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
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){return cljs.core._write.call(null,writer__8618__auto__,"cognitect.transit/MapHandler");
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
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){return cljs.core._write.call(null,writer__8618__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__15241_15245 = cljs.core.seq.call(null,v);var chunk__15242_15246 = null;var count__15243_15247 = (0);var i__15244_15248 = (0);while(true){
if((i__15244_15248 < count__15243_15247))
{var x_15249 = cljs.core._nth.call(null,chunk__15242_15246,i__15244_15248);ret.push(x_15249);
{
var G__15250 = seq__15241_15245;
var G__15251 = chunk__15242_15246;
var G__15252 = count__15243_15247;
var G__15253 = (i__15244_15248 + (1));
seq__15241_15245 = G__15250;
chunk__15242_15246 = G__15251;
count__15243_15247 = G__15252;
i__15244_15248 = G__15253;
continue;
}
} else
{var temp__4126__auto___15254 = cljs.core.seq.call(null,seq__15241_15245);if(temp__4126__auto___15254)
{var seq__15241_15255__$1 = temp__4126__auto___15254;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15241_15255__$1))
{var c__8810__auto___15256 = cljs.core.chunk_first.call(null,seq__15241_15255__$1);{
var G__15257 = cljs.core.chunk_rest.call(null,seq__15241_15255__$1);
var G__15258 = c__8810__auto___15256;
var G__15259 = cljs.core.count.call(null,c__8810__auto___15256);
var G__15260 = (0);
seq__15241_15245 = G__15257;
chunk__15242_15246 = G__15258;
count__15243_15247 = G__15259;
i__15244_15248 = G__15260;
continue;
}
} else
{var x_15261 = cljs.core.first.call(null,seq__15241_15255__$1);ret.push(x_15261);
{
var G__15262 = cljs.core.next.call(null,seq__15241_15255__$1);
var G__15263 = null;
var G__15264 = (0);
var G__15265 = (0);
seq__15241_15245 = G__15262;
chunk__15242_15246 = G__15263;
count__15243_15247 = G__15264;
i__15244_15248 = G__15265;
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
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){return cljs.core._write.call(null,writer__8618__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__15266_15270 = cljs.core.seq.call(null,v);var chunk__15267_15271 = null;var count__15268_15272 = (0);var i__15269_15273 = (0);while(true){
if((i__15269_15273 < count__15268_15272))
{var x_15274 = cljs.core._nth.call(null,chunk__15267_15271,i__15269_15273);ret.push(x_15274);
{
var G__15275 = seq__15266_15270;
var G__15276 = chunk__15267_15271;
var G__15277 = count__15268_15272;
var G__15278 = (i__15269_15273 + (1));
seq__15266_15270 = G__15275;
chunk__15267_15271 = G__15276;
count__15268_15272 = G__15277;
i__15269_15273 = G__15278;
continue;
}
} else
{var temp__4126__auto___15279 = cljs.core.seq.call(null,seq__15266_15270);if(temp__4126__auto___15279)
{var seq__15266_15280__$1 = temp__4126__auto___15279;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15266_15280__$1))
{var c__8810__auto___15281 = cljs.core.chunk_first.call(null,seq__15266_15280__$1);{
var G__15282 = cljs.core.chunk_rest.call(null,seq__15266_15280__$1);
var G__15283 = c__8810__auto___15281;
var G__15284 = cljs.core.count.call(null,c__8810__auto___15281);
var G__15285 = (0);
seq__15266_15270 = G__15282;
chunk__15267_15271 = G__15283;
count__15268_15272 = G__15284;
i__15269_15273 = G__15285;
continue;
}
} else
{var x_15286 = cljs.core.first.call(null,seq__15266_15280__$1);ret.push(x_15286);
{
var G__15287 = cljs.core.next.call(null,seq__15266_15280__$1);
var G__15288 = null;
var G__15289 = (0);
var G__15290 = (0);
seq__15266_15270 = G__15287;
chunk__15267_15271 = G__15288;
count__15268_15272 = G__15289;
i__15269_15273 = G__15290;
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
, "handlers": (function (){var x15300 = cljs.core.clone.call(null,handlers);x15300.forEach = ((function (x15300,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__15301 = cljs.core.seq.call(null,coll);var chunk__15302 = null;var count__15303 = (0);var i__15304 = (0);while(true){
if((i__15304 < count__15303))
{var vec__15305 = cljs.core._nth.call(null,chunk__15302,i__15304);var k = cljs.core.nth.call(null,vec__15305,(0),null);var v = cljs.core.nth.call(null,vec__15305,(1),null);f.call(null,v,k);
{
var G__15307 = seq__15301;
var G__15308 = chunk__15302;
var G__15309 = count__15303;
var G__15310 = (i__15304 + (1));
seq__15301 = G__15307;
chunk__15302 = G__15308;
count__15303 = G__15309;
i__15304 = G__15310;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__15301);if(temp__4126__auto__)
{var seq__15301__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15301__$1))
{var c__8810__auto__ = cljs.core.chunk_first.call(null,seq__15301__$1);{
var G__15311 = cljs.core.chunk_rest.call(null,seq__15301__$1);
var G__15312 = c__8810__auto__;
var G__15313 = cljs.core.count.call(null,c__8810__auto__);
var G__15314 = (0);
seq__15301 = G__15311;
chunk__15302 = G__15312;
count__15303 = G__15313;
i__15304 = G__15314;
continue;
}
} else
{var vec__15306 = cljs.core.first.call(null,seq__15301__$1);var k = cljs.core.nth.call(null,vec__15306,(0),null);var v = cljs.core.nth.call(null,vec__15306,(1),null);f.call(null,v,k);
{
var G__15315 = cljs.core.next.call(null,seq__15301__$1);
var G__15316 = null;
var G__15317 = (0);
var G__15318 = (0);
seq__15301 = G__15315;
chunk__15302 = G__15316;
count__15303 = G__15317;
i__15304 = G__15318;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x15300,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x15300;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__15299 = obj;G__15299.push(kfn.call(null,k),vfn.call(null,v));
return G__15299;
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
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t15322 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t15322 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta15323){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta15323 = meta15323;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t15322.cljs$lang$type = true;
cognitect.transit.t15322.cljs$lang$ctorStr = "cognitect.transit/t15322";
cognitect.transit.t15322.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){return cljs.core._write.call(null,writer__8618__auto__,"cognitect.transit/t15322");
});
cognitect.transit.t15322.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t15322.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t15322.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t15322.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t15322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15324){var self__ = this;
var _15324__$1 = this;return self__.meta15323;
});
cognitect.transit.t15322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15324,meta15323__$1){var self__ = this;
var _15324__$1 = this;return (new cognitect.transit.t15322(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta15323__$1));
});
cognitect.transit.__GT_t15322 = (function __GT_t15322(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta15323){return (new cognitect.transit.t15322(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta15323));
});
}
return (new cognitect.transit.t15322(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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

//# sourceMappingURL=transit.js.map