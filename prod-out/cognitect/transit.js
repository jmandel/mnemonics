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
cljs.core.enable_console_print_BANG_();
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
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__22716 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__22716) : com.cognitect.transit.eq.hashCode.call(null,G__22716));
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__22717 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__22717) : com.cognitect.transit.eq.hashCode.call(null,G__22717));
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__22718 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__22718) : com.cognitect.transit.eq.hashCode.call(null,G__22718));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__22723_22727 = cljs.core.seq(cljs.core.js_keys(b));var chunk__22724_22728 = null;var count__22725_22729 = (0);var i__22726_22730 = (0);while(true){
if((i__22726_22730 < count__22725_22729))
{var k_22731 = chunk__22724_22728.cljs$core$IIndexed$_nth$arity$2(null,i__22726_22730);var v_22732 = (b[k_22731]);(a[k_22731] = v_22732);
{
var G__22733 = seq__22723_22727;
var G__22734 = chunk__22724_22728;
var G__22735 = count__22725_22729;
var G__22736 = (i__22726_22730 + (1));
seq__22723_22727 = G__22733;
chunk__22724_22728 = G__22734;
count__22725_22729 = G__22735;
i__22726_22730 = G__22736;
continue;
}
} else
{var temp__4126__auto___22737 = cljs.core.seq(seq__22723_22727);if(temp__4126__auto___22737)
{var seq__22723_22738__$1 = temp__4126__auto___22737;if(cljs.core.chunked_seq_QMARK_(seq__22723_22738__$1))
{var c__4408__auto___22739 = cljs.core.chunk_first(seq__22723_22738__$1);{
var G__22740 = cljs.core.chunk_rest(seq__22723_22738__$1);
var G__22741 = c__4408__auto___22739;
var G__22742 = cljs.core.count(c__4408__auto___22739);
var G__22743 = (0);
seq__22723_22727 = G__22740;
chunk__22724_22728 = G__22741;
count__22725_22729 = G__22742;
i__22726_22730 = G__22743;
continue;
}
} else
{var k_22744 = cljs.core.first(seq__22723_22738__$1);var v_22745 = (b[k_22744]);(a[k_22744] = v_22745);
{
var G__22746 = cljs.core.next(seq__22723_22738__$1);
var G__22747 = null;
var G__22748 = (0);
var G__22749 = (0);
seq__22723_22727 = G__22746;
chunk__22724_22728 = G__22747;
count__22725_22729 = G__22748;
i__22726_22730 = G__22749;
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
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write(writer__4216__auto__,"cognitect.transit/MapBuilder");
});
cognitect.transit.MapBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
});
cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){var self__ = this;
var _ = this;return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,v);
});
cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_(m);
});
cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;var G__22750 = arr;var G__22751 = true;var G__22752 = true;return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__22750,G__22751,G__22752) : cljs.core.PersistentArrayMap.fromArray.call(null,G__22750,G__22751,G__22752));
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
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write(writer__4216__auto__,"cognitect.transit/VectorBuilder");
});
cognitect.transit.VectorBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
});
cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){var self__ = this;
var _ = this;return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,x);
});
cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_(v);
});
cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;var G__22753 = arr;var G__22754 = true;return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__22753,G__22754) : cljs.core.PersistentVector.fromArray.call(null,G__22753,G__22754));
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
var reader__1 = (function (type){return reader.cljs$core$IFn$_invoke$arity$2(type,null);
});
var reader__2 = (function (type,opts){var G__22759 = cljs.core.name(type);var G__22760 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": {"cmap": ((function (G__22759){
return (function (v){var i = (0);var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__22761 = (i + (2));
var G__22762 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__22761;
ret = G__22762;
continue;
}
} else
{return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__22759))
, "list": ((function (G__22759){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__22759))
, "set": ((function (G__22759){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__22759))
, ":": ((function (G__22759){
return (function (v){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__22759))
, "$": ((function (G__22759){
return (function (v){return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__22759))
}},cljs.core.clj__GT_js(opts));return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__22759,G__22760) : com.cognitect.transit.reader.call(null,G__22759,G__22760));
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
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write(writer__4216__auto__,"cognitect.transit/KeywordHandler");
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
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write(writer__4216__auto__,"cognitect.transit/SymbolHandler");
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
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write(writer__4216__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__22763_22769 = cljs.core.seq(v);var chunk__22764_22770 = null;var count__22765_22771 = (0);var i__22766_22772 = (0);while(true){
if((i__22766_22772 < count__22765_22771))
{var x_22773 = chunk__22764_22770.cljs$core$IIndexed$_nth$arity$2(null,i__22766_22772);ret.push(x_22773);
{
var G__22774 = seq__22763_22769;
var G__22775 = chunk__22764_22770;
var G__22776 = count__22765_22771;
var G__22777 = (i__22766_22772 + (1));
seq__22763_22769 = G__22774;
chunk__22764_22770 = G__22775;
count__22765_22771 = G__22776;
i__22766_22772 = G__22777;
continue;
}
} else
{var temp__4126__auto___22778 = cljs.core.seq(seq__22763_22769);if(temp__4126__auto___22778)
{var seq__22763_22779__$1 = temp__4126__auto___22778;if(cljs.core.chunked_seq_QMARK_(seq__22763_22779__$1))
{var c__4408__auto___22780 = cljs.core.chunk_first(seq__22763_22779__$1);{
var G__22781 = cljs.core.chunk_rest(seq__22763_22779__$1);
var G__22782 = c__4408__auto___22780;
var G__22783 = cljs.core.count(c__4408__auto___22780);
var G__22784 = (0);
seq__22763_22769 = G__22781;
chunk__22764_22770 = G__22782;
count__22765_22771 = G__22783;
i__22766_22772 = G__22784;
continue;
}
} else
{var x_22785 = cljs.core.first(seq__22763_22779__$1);ret.push(x_22785);
{
var G__22786 = cljs.core.next(seq__22763_22779__$1);
var G__22787 = null;
var G__22788 = (0);
var G__22789 = (0);
seq__22763_22769 = G__22786;
chunk__22764_22770 = G__22787;
count__22765_22771 = G__22788;
i__22766_22772 = G__22789;
continue;
}
}
} else
{}
}
break;
}
var G__22767 = "array";var G__22768 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__22767,G__22768) : com.cognitect.transit.tagged.call(null,G__22767,G__22768));
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
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write(writer__4216__auto__,"cognitect.transit/MapHandler");
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
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write(writer__4216__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__22790_22796 = cljs.core.seq(v);var chunk__22791_22797 = null;var count__22792_22798 = (0);var i__22793_22799 = (0);while(true){
if((i__22793_22799 < count__22792_22798))
{var x_22800 = chunk__22791_22797.cljs$core$IIndexed$_nth$arity$2(null,i__22793_22799);ret.push(x_22800);
{
var G__22801 = seq__22790_22796;
var G__22802 = chunk__22791_22797;
var G__22803 = count__22792_22798;
var G__22804 = (i__22793_22799 + (1));
seq__22790_22796 = G__22801;
chunk__22791_22797 = G__22802;
count__22792_22798 = G__22803;
i__22793_22799 = G__22804;
continue;
}
} else
{var temp__4126__auto___22805 = cljs.core.seq(seq__22790_22796);if(temp__4126__auto___22805)
{var seq__22790_22806__$1 = temp__4126__auto___22805;if(cljs.core.chunked_seq_QMARK_(seq__22790_22806__$1))
{var c__4408__auto___22807 = cljs.core.chunk_first(seq__22790_22806__$1);{
var G__22808 = cljs.core.chunk_rest(seq__22790_22806__$1);
var G__22809 = c__4408__auto___22807;
var G__22810 = cljs.core.count(c__4408__auto___22807);
var G__22811 = (0);
seq__22790_22796 = G__22808;
chunk__22791_22797 = G__22809;
count__22792_22798 = G__22810;
i__22793_22799 = G__22811;
continue;
}
} else
{var x_22812 = cljs.core.first(seq__22790_22806__$1);ret.push(x_22812);
{
var G__22813 = cljs.core.next(seq__22790_22806__$1);
var G__22814 = null;
var G__22815 = (0);
var G__22816 = (0);
seq__22790_22796 = G__22813;
chunk__22791_22797 = G__22814;
count__22792_22798 = G__22815;
i__22793_22799 = G__22816;
continue;
}
}
} else
{}
}
break;
}
var G__22794 = "array";var G__22795 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__22794,G__22795) : com.cognitect.transit.tagged.call(null,G__22794,G__22795));
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
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write(writer__4216__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__22817_22821 = cljs.core.seq(v);var chunk__22818_22822 = null;var count__22819_22823 = (0);var i__22820_22824 = (0);while(true){
if((i__22820_22824 < count__22819_22823))
{var x_22825 = chunk__22818_22822.cljs$core$IIndexed$_nth$arity$2(null,i__22820_22824);ret.push(x_22825);
{
var G__22826 = seq__22817_22821;
var G__22827 = chunk__22818_22822;
var G__22828 = count__22819_22823;
var G__22829 = (i__22820_22824 + (1));
seq__22817_22821 = G__22826;
chunk__22818_22822 = G__22827;
count__22819_22823 = G__22828;
i__22820_22824 = G__22829;
continue;
}
} else
{var temp__4126__auto___22830 = cljs.core.seq(seq__22817_22821);if(temp__4126__auto___22830)
{var seq__22817_22831__$1 = temp__4126__auto___22830;if(cljs.core.chunked_seq_QMARK_(seq__22817_22831__$1))
{var c__4408__auto___22832 = cljs.core.chunk_first(seq__22817_22831__$1);{
var G__22833 = cljs.core.chunk_rest(seq__22817_22831__$1);
var G__22834 = c__4408__auto___22832;
var G__22835 = cljs.core.count(c__4408__auto___22832);
var G__22836 = (0);
seq__22817_22821 = G__22833;
chunk__22818_22822 = G__22834;
count__22819_22823 = G__22835;
i__22820_22824 = G__22836;
continue;
}
} else
{var x_22837 = cljs.core.first(seq__22817_22831__$1);ret.push(x_22837);
{
var G__22838 = cljs.core.next(seq__22817_22831__$1);
var G__22839 = null;
var G__22840 = (0);
var G__22841 = (0);
seq__22817_22821 = G__22838;
chunk__22818_22822 = G__22839;
count__22819_22823 = G__22840;
i__22820_22824 = G__22841;
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
var writer__1 = (function (type){return writer.cljs$core$IFn$_invoke$arity$2(type,null);
});
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,list_handler,list_handler]),cljs.core.constant$keyword$47.cljs$core$IFn$_invoke$arity$1(opts)], 0));var G__22860 = cljs.core.name(type);var G__22861 = cognitect.transit.opts_merge({"unpack": ((function (G__22860,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(G__22860,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
, "handlers": (function (){var x22865 = cljs.core.clone(handlers);x22865.forEach = ((function (x22865,G__22860,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__22866 = cljs.core.seq(coll);var chunk__22867 = null;var count__22868 = (0);var i__22869 = (0);while(true){
if((i__22869 < count__22868))
{var vec__22870 = chunk__22867.cljs$core$IIndexed$_nth$arity$2(null,i__22869);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22870,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22870,(1),null);var G__22871_22876 = v;var G__22872_22877 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22871_22876,G__22872_22877) : f.call(null,G__22871_22876,G__22872_22877));
{
var G__22878 = seq__22866;
var G__22879 = chunk__22867;
var G__22880 = count__22868;
var G__22881 = (i__22869 + (1));
seq__22866 = G__22878;
chunk__22867 = G__22879;
count__22868 = G__22880;
i__22869 = G__22881;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__22866);if(temp__4126__auto__)
{var seq__22866__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22866__$1))
{var c__4408__auto__ = cljs.core.chunk_first(seq__22866__$1);{
var G__22882 = cljs.core.chunk_rest(seq__22866__$1);
var G__22883 = c__4408__auto__;
var G__22884 = cljs.core.count(c__4408__auto__);
var G__22885 = (0);
seq__22866 = G__22882;
chunk__22867 = G__22883;
count__22868 = G__22884;
i__22869 = G__22885;
continue;
}
} else
{var vec__22873 = cljs.core.first(seq__22866__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22873,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22873,(1),null);var G__22874_22886 = v;var G__22875_22887 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22874_22886,G__22875_22887) : f.call(null,G__22874_22886,G__22875_22887));
{
var G__22888 = cljs.core.next(seq__22866__$1);
var G__22889 = null;
var G__22890 = (0);
var G__22891 = (0);
seq__22866 = G__22888;
chunk__22867 = G__22889;
count__22868 = G__22890;
i__22869 = G__22891;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x22865,G__22860,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x22865;
})(), "objectBuilder": ((function (G__22860,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv(((function (G__22860,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__22862 = obj;G__22862.push((function (){var G__22863 = k;return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__22863) : kfn.call(null,G__22863));
})(),(function (){var G__22864 = v;return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__22864) : vfn.call(null,G__22864));
})());
return G__22862;
});})(G__22860,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
,["^ "],m);
});})(G__22860,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$47)));return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__22860,G__22861) : com.cognitect.transit.writer.call(null,G__22860,G__22861));
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
var write_handler__2 = (function (tag_fn,rep_fn){return write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){return write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t22906 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t22906 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta22907){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta22907 = meta22907;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t22906.cljs$lang$type = true;
cognitect.transit.t22906.cljs$lang$ctorStr = "cognitect.transit/t22906";
cognitect.transit.t22906.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write(writer__4216__auto__,"cognitect.transit/t22906");
});
cognitect.transit.t22906.prototype.tag = (function (o){var self__ = this;
var _ = this;var G__22909 = o;return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__22909) : self__.tag_fn.call(null,G__22909));
});
cognitect.transit.t22906.prototype.rep = (function (o){var self__ = this;
var _ = this;var G__22910 = o;return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__22910) : self__.rep_fn.call(null,G__22910));
});
cognitect.transit.t22906.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{var G__22911 = o;return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__22911) : self__.str_rep_fn.call(null,G__22911));
} else
{return null;
}
});
cognitect.transit.t22906.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else
{return null;
}
});
cognitect.transit.t22906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22908){var self__ = this;
var _22908__$1 = this;return self__.meta22907;
});
cognitect.transit.t22906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22908,meta22907__$1){var self__ = this;
var _22908__$1 = this;return (new cognitect.transit.t22906(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta22907__$1));
});
cognitect.transit.__GT_t22906 = (function __GT_t22906(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta22907){return (new cognitect.transit.t22906(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta22907));
});
}
return (new cognitect.transit.t22906(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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
cognitect.transit.tagged_value = (function tagged_value(tag,rep){var G__22914 = tag;var G__22915 = rep;return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__22914,G__22915) : com.cognitect.transit.types.taggedValue.call(null,G__22914,G__22915));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){var G__22917 = x;return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__22917) : com.cognitect.transit.types.isTaggedValue.call(null,G__22917));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){var G__22919 = s;return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__22919) : com.cognitect.transit.types.integer.call(null,G__22919));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){var G__22921 = x;return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__22921) : com.cognitect.transit.types.isInteger.call(null,G__22921));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){var G__22923 = s;return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__22923) : com.cognitect.transit.types.bigInteger.call(null,G__22923));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){var G__22925 = x;return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__22925) : com.cognitect.transit.types.isBigInteger.call(null,G__22925));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){var G__22927 = s;return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__22927) : com.cognitect.transit.types.bigDecimalValue.call(null,G__22927));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){var G__22929 = x;return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__22929) : com.cognitect.transit.types.isBigDecimal.call(null,G__22929));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){var G__22931 = s;return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__22931) : com.cognitect.transit.types.uri.call(null,G__22931));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){var G__22933 = x;return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__22933) : com.cognitect.transit.types.isURI.call(null,G__22933));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){var G__22935 = s;return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__22935) : com.cognitect.transit.types.uuid.call(null,G__22935));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){var G__22937 = x;return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__22937) : com.cognitect.transit.types.isUUID.call(null,G__22937));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){var G__22939 = s;return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__22939) : com.cognitect.transit.types.binary.call(null,G__22939));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){var G__22941 = x;return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__22941) : com.cognitect.transit.types.isBinary.call(null,G__22941));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){var G__22943 = x;return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__22943) : com.cognitect.transit.types.quoted.call(null,G__22943));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){var G__22945 = x;return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__22945) : com.cognitect.transit.types.isQuoted.call(null,G__22945));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){var G__22947 = x;return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__22947) : com.cognitect.transit.types.link.call(null,G__22947));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){var G__22949 = x;return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__22949) : com.cognitect.transit.types.isLink.call(null,G__22949));
});
