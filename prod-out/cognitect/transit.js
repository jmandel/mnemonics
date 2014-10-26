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
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__22731 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__22731) : com.cognitect.transit.eq.hashCode.call(null,G__22731));
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__22732 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__22732) : com.cognitect.transit.eq.hashCode.call(null,G__22732));
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var G__22733 = this$__$1;return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__22733) : com.cognitect.transit.eq.hashCode.call(null,G__22733));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__22738_22742 = cljs.core.seq(cljs.core.js_keys(b));var chunk__22739_22743 = null;var count__22740_22744 = (0);var i__22741_22745 = (0);while(true){
if((i__22741_22745 < count__22740_22744))
{var k_22746 = chunk__22739_22743.cljs$core$IIndexed$_nth$arity$2(null,i__22741_22745);var v_22747 = (b[k_22746]);(a[k_22746] = v_22747);
{
var G__22748 = seq__22738_22742;
var G__22749 = chunk__22739_22743;
var G__22750 = count__22740_22744;
var G__22751 = (i__22741_22745 + (1));
seq__22738_22742 = G__22748;
chunk__22739_22743 = G__22749;
count__22740_22744 = G__22750;
i__22741_22745 = G__22751;
continue;
}
} else
{var temp__4126__auto___22752 = cljs.core.seq(seq__22738_22742);if(temp__4126__auto___22752)
{var seq__22738_22753__$1 = temp__4126__auto___22752;if(cljs.core.chunked_seq_QMARK_(seq__22738_22753__$1))
{var c__4438__auto___22754 = cljs.core.chunk_first(seq__22738_22753__$1);{
var G__22755 = cljs.core.chunk_rest(seq__22738_22753__$1);
var G__22756 = c__4438__auto___22754;
var G__22757 = cljs.core.count(c__4438__auto___22754);
var G__22758 = (0);
seq__22738_22742 = G__22755;
chunk__22739_22743 = G__22756;
count__22740_22744 = G__22757;
i__22741_22745 = G__22758;
continue;
}
} else
{var k_22759 = cljs.core.first(seq__22738_22753__$1);var v_22760 = (b[k_22759]);(a[k_22759] = v_22760);
{
var G__22761 = cljs.core.next(seq__22738_22753__$1);
var G__22762 = null;
var G__22763 = (0);
var G__22764 = (0);
seq__22738_22742 = G__22761;
chunk__22739_22743 = G__22762;
count__22740_22744 = G__22763;
i__22741_22745 = G__22764;
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
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cognitect.transit/MapBuilder");
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
var _ = this;var G__22765 = arr;var G__22766 = true;var G__22767 = true;return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__22765,G__22766,G__22767) : cljs.core.PersistentArrayMap.fromArray.call(null,G__22765,G__22766,G__22767));
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
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cognitect.transit/VectorBuilder");
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
var _ = this;var G__22768 = arr;var G__22769 = true;return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__22768,G__22769) : cljs.core.PersistentVector.fromArray.call(null,G__22768,G__22769));
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
var reader__2 = (function (type,opts){var G__22774 = cljs.core.name(type);var G__22775 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": {"cmap": ((function (G__22774){
return (function (v){var i = (0);var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__22776 = (i + (2));
var G__22777 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__22776;
ret = G__22777;
continue;
}
} else
{return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__22774))
, "list": ((function (G__22774){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__22774))
, "set": ((function (G__22774){
return (function (v){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__22774))
, ":": ((function (G__22774){
return (function (v){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__22774))
, "$": ((function (G__22774){
return (function (v){return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__22774))
}},cljs.core.clj__GT_js(opts));return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__22774,G__22775) : com.cognitect.transit.reader.call(null,G__22774,G__22775));
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
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cognitect.transit/KeywordHandler");
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
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cognitect.transit/SymbolHandler");
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
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__22778_22784 = cljs.core.seq(v);var chunk__22779_22785 = null;var count__22780_22786 = (0);var i__22781_22787 = (0);while(true){
if((i__22781_22787 < count__22780_22786))
{var x_22788 = chunk__22779_22785.cljs$core$IIndexed$_nth$arity$2(null,i__22781_22787);ret.push(x_22788);
{
var G__22789 = seq__22778_22784;
var G__22790 = chunk__22779_22785;
var G__22791 = count__22780_22786;
var G__22792 = (i__22781_22787 + (1));
seq__22778_22784 = G__22789;
chunk__22779_22785 = G__22790;
count__22780_22786 = G__22791;
i__22781_22787 = G__22792;
continue;
}
} else
{var temp__4126__auto___22793 = cljs.core.seq(seq__22778_22784);if(temp__4126__auto___22793)
{var seq__22778_22794__$1 = temp__4126__auto___22793;if(cljs.core.chunked_seq_QMARK_(seq__22778_22794__$1))
{var c__4438__auto___22795 = cljs.core.chunk_first(seq__22778_22794__$1);{
var G__22796 = cljs.core.chunk_rest(seq__22778_22794__$1);
var G__22797 = c__4438__auto___22795;
var G__22798 = cljs.core.count(c__4438__auto___22795);
var G__22799 = (0);
seq__22778_22784 = G__22796;
chunk__22779_22785 = G__22797;
count__22780_22786 = G__22798;
i__22781_22787 = G__22799;
continue;
}
} else
{var x_22800 = cljs.core.first(seq__22778_22794__$1);ret.push(x_22800);
{
var G__22801 = cljs.core.next(seq__22778_22794__$1);
var G__22802 = null;
var G__22803 = (0);
var G__22804 = (0);
seq__22778_22784 = G__22801;
chunk__22779_22785 = G__22802;
count__22780_22786 = G__22803;
i__22781_22787 = G__22804;
continue;
}
}
} else
{}
}
break;
}
var G__22782 = "array";var G__22783 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__22782,G__22783) : com.cognitect.transit.tagged.call(null,G__22782,G__22783));
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
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cognitect.transit/MapHandler");
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
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__22805_22811 = cljs.core.seq(v);var chunk__22806_22812 = null;var count__22807_22813 = (0);var i__22808_22814 = (0);while(true){
if((i__22808_22814 < count__22807_22813))
{var x_22815 = chunk__22806_22812.cljs$core$IIndexed$_nth$arity$2(null,i__22808_22814);ret.push(x_22815);
{
var G__22816 = seq__22805_22811;
var G__22817 = chunk__22806_22812;
var G__22818 = count__22807_22813;
var G__22819 = (i__22808_22814 + (1));
seq__22805_22811 = G__22816;
chunk__22806_22812 = G__22817;
count__22807_22813 = G__22818;
i__22808_22814 = G__22819;
continue;
}
} else
{var temp__4126__auto___22820 = cljs.core.seq(seq__22805_22811);if(temp__4126__auto___22820)
{var seq__22805_22821__$1 = temp__4126__auto___22820;if(cljs.core.chunked_seq_QMARK_(seq__22805_22821__$1))
{var c__4438__auto___22822 = cljs.core.chunk_first(seq__22805_22821__$1);{
var G__22823 = cljs.core.chunk_rest(seq__22805_22821__$1);
var G__22824 = c__4438__auto___22822;
var G__22825 = cljs.core.count(c__4438__auto___22822);
var G__22826 = (0);
seq__22805_22811 = G__22823;
chunk__22806_22812 = G__22824;
count__22807_22813 = G__22825;
i__22808_22814 = G__22826;
continue;
}
} else
{var x_22827 = cljs.core.first(seq__22805_22821__$1);ret.push(x_22827);
{
var G__22828 = cljs.core.next(seq__22805_22821__$1);
var G__22829 = null;
var G__22830 = (0);
var G__22831 = (0);
seq__22805_22811 = G__22828;
chunk__22806_22812 = G__22829;
count__22807_22813 = G__22830;
i__22808_22814 = G__22831;
continue;
}
}
} else
{}
}
break;
}
var G__22809 = "array";var G__22810 = ret;return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__22809,G__22810) : com.cognitect.transit.tagged.call(null,G__22809,G__22810));
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
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__22832_22836 = cljs.core.seq(v);var chunk__22833_22837 = null;var count__22834_22838 = (0);var i__22835_22839 = (0);while(true){
if((i__22835_22839 < count__22834_22838))
{var x_22840 = chunk__22833_22837.cljs$core$IIndexed$_nth$arity$2(null,i__22835_22839);ret.push(x_22840);
{
var G__22841 = seq__22832_22836;
var G__22842 = chunk__22833_22837;
var G__22843 = count__22834_22838;
var G__22844 = (i__22835_22839 + (1));
seq__22832_22836 = G__22841;
chunk__22833_22837 = G__22842;
count__22834_22838 = G__22843;
i__22835_22839 = G__22844;
continue;
}
} else
{var temp__4126__auto___22845 = cljs.core.seq(seq__22832_22836);if(temp__4126__auto___22845)
{var seq__22832_22846__$1 = temp__4126__auto___22845;if(cljs.core.chunked_seq_QMARK_(seq__22832_22846__$1))
{var c__4438__auto___22847 = cljs.core.chunk_first(seq__22832_22846__$1);{
var G__22848 = cljs.core.chunk_rest(seq__22832_22846__$1);
var G__22849 = c__4438__auto___22847;
var G__22850 = cljs.core.count(c__4438__auto___22847);
var G__22851 = (0);
seq__22832_22836 = G__22848;
chunk__22833_22837 = G__22849;
count__22834_22838 = G__22850;
i__22835_22839 = G__22851;
continue;
}
} else
{var x_22852 = cljs.core.first(seq__22832_22846__$1);ret.push(x_22852);
{
var G__22853 = cljs.core.next(seq__22832_22846__$1);
var G__22854 = null;
var G__22855 = (0);
var G__22856 = (0);
seq__22832_22836 = G__22853;
chunk__22833_22837 = G__22854;
count__22834_22838 = G__22855;
i__22835_22839 = G__22856;
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
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,list_handler,list_handler]),cljs.core.constant$keyword$47.cljs$core$IFn$_invoke$arity$1(opts)], 0));var G__22875 = cljs.core.name(type);var G__22876 = cognitect.transit.opts_merge({"unpack": ((function (G__22875,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(G__22875,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
, "handlers": (function (){var x22880 = cljs.core.clone(handlers);x22880.forEach = ((function (x22880,G__22875,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__22881 = cljs.core.seq(coll);var chunk__22882 = null;var count__22883 = (0);var i__22884 = (0);while(true){
if((i__22884 < count__22883))
{var vec__22885 = chunk__22882.cljs$core$IIndexed$_nth$arity$2(null,i__22884);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22885,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22885,(1),null);var G__22886_22891 = v;var G__22887_22892 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22886_22891,G__22887_22892) : f.call(null,G__22886_22891,G__22887_22892));
{
var G__22893 = seq__22881;
var G__22894 = chunk__22882;
var G__22895 = count__22883;
var G__22896 = (i__22884 + (1));
seq__22881 = G__22893;
chunk__22882 = G__22894;
count__22883 = G__22895;
i__22884 = G__22896;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__22881);if(temp__4126__auto__)
{var seq__22881__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22881__$1))
{var c__4438__auto__ = cljs.core.chunk_first(seq__22881__$1);{
var G__22897 = cljs.core.chunk_rest(seq__22881__$1);
var G__22898 = c__4438__auto__;
var G__22899 = cljs.core.count(c__4438__auto__);
var G__22900 = (0);
seq__22881 = G__22897;
chunk__22882 = G__22898;
count__22883 = G__22899;
i__22884 = G__22900;
continue;
}
} else
{var vec__22888 = cljs.core.first(seq__22881__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22888,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22888,(1),null);var G__22889_22901 = v;var G__22890_22902 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22889_22901,G__22890_22902) : f.call(null,G__22889_22901,G__22890_22902));
{
var G__22903 = cljs.core.next(seq__22881__$1);
var G__22904 = null;
var G__22905 = (0);
var G__22906 = (0);
seq__22881 = G__22903;
chunk__22882 = G__22904;
count__22883 = G__22905;
i__22884 = G__22906;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x22880,G__22875,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x22880;
})(), "objectBuilder": ((function (G__22875,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv(((function (G__22875,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__22877 = obj;G__22877.push((function (){var G__22878 = k;return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__22878) : kfn.call(null,G__22878));
})(),(function (){var G__22879 = v;return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__22879) : vfn.call(null,G__22879));
})());
return G__22877;
});})(G__22875,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
,["^ "],m);
});})(G__22875,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$47)));return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__22875,G__22876) : com.cognitect.transit.writer.call(null,G__22875,G__22876));
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
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t22921 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t22921 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta22922){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta22922 = meta22922;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t22921.cljs$lang$type = true;
cognitect.transit.t22921.cljs$lang$ctorStr = "cognitect.transit/t22921";
cognitect.transit.t22921.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cognitect.transit/t22921");
});
cognitect.transit.t22921.prototype.tag = (function (o){var self__ = this;
var _ = this;var G__22924 = o;return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__22924) : self__.tag_fn.call(null,G__22924));
});
cognitect.transit.t22921.prototype.rep = (function (o){var self__ = this;
var _ = this;var G__22925 = o;return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__22925) : self__.rep_fn.call(null,G__22925));
});
cognitect.transit.t22921.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{var G__22926 = o;return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__22926) : self__.str_rep_fn.call(null,G__22926));
} else
{return null;
}
});
cognitect.transit.t22921.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else
{return null;
}
});
cognitect.transit.t22921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22923){var self__ = this;
var _22923__$1 = this;return self__.meta22922;
});
cognitect.transit.t22921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22923,meta22922__$1){var self__ = this;
var _22923__$1 = this;return (new cognitect.transit.t22921(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta22922__$1));
});
cognitect.transit.__GT_t22921 = (function __GT_t22921(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta22922){return (new cognitect.transit.t22921(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta22922));
});
}
return (new cognitect.transit.t22921(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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
cognitect.transit.tagged_value = (function tagged_value(tag,rep){var G__22929 = tag;var G__22930 = rep;return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__22929,G__22930) : com.cognitect.transit.types.taggedValue.call(null,G__22929,G__22930));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){var G__22932 = x;return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__22932) : com.cognitect.transit.types.isTaggedValue.call(null,G__22932));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){var G__22934 = s;return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__22934) : com.cognitect.transit.types.integer.call(null,G__22934));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){var G__22936 = x;return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__22936) : com.cognitect.transit.types.isInteger.call(null,G__22936));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){var G__22938 = s;return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__22938) : com.cognitect.transit.types.bigInteger.call(null,G__22938));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){var G__22940 = x;return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__22940) : com.cognitect.transit.types.isBigInteger.call(null,G__22940));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){var G__22942 = s;return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__22942) : com.cognitect.transit.types.bigDecimalValue.call(null,G__22942));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){var G__22944 = x;return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__22944) : com.cognitect.transit.types.isBigDecimal.call(null,G__22944));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){var G__22946 = s;return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__22946) : com.cognitect.transit.types.uri.call(null,G__22946));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){var G__22948 = x;return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__22948) : com.cognitect.transit.types.isURI.call(null,G__22948));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){var G__22950 = s;return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__22950) : com.cognitect.transit.types.uuid.call(null,G__22950));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){var G__22952 = x;return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__22952) : com.cognitect.transit.types.isUUID.call(null,G__22952));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){var G__22954 = s;return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__22954) : com.cognitect.transit.types.binary.call(null,G__22954));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){var G__22956 = x;return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__22956) : com.cognitect.transit.types.isBinary.call(null,G__22956));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){var G__22958 = x;return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__22958) : com.cognitect.transit.types.quoted.call(null,G__22958));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){var G__22960 = x;return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__22960) : com.cognitect.transit.types.isQuoted.call(null,G__22960));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){var G__22962 = x;return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__22962) : com.cognitect.transit.types.link.call(null,G__22962));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){var G__22964 = x;return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__22964) : com.cognitect.transit.types.isLink.call(null,G__22964));
});
