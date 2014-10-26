// Compiled by ClojureScript 0.0-2356
goog.provide('major_system.combinatorics');
goog.require('cljs.core');
major_system.combinatorics.index_combinations = (function index_combinations(n,cnt){return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec(cljs.core.cons(null,(function (){var iter__4377__auto__ = (function iter__9478(s__9479){return (new cljs.core.LazySeq(null,(function (){var s__9479__$1 = s__9479;while(true){
var temp__4126__auto__ = cljs.core.seq(s__9479__$1);if(temp__4126__auto__)
{var s__9479__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__9479__$2))
{var c__4375__auto__ = cljs.core.chunk_first(s__9479__$2);var size__4376__auto__ = cljs.core.count(c__4375__auto__);var b__9481 = cljs.core.chunk_buffer(size__4376__auto__);if((function (){var i__9480 = (0);while(true){
if((i__9480 < size__4376__auto__))
{var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4375__auto__,i__9480);cljs.core.chunk_append(b__9481,((j + cnt) + (- (n + (1)))));
{
var G__9496 = (i__9480 + (1));
i__9480 = G__9496;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9481),iter__9478(cljs.core.chunk_rest(s__9479__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9481),null);
}
} else
{var j = cljs.core.first(s__9479__$2);return cljs.core.cons(((j + cnt) + (- (n + (1)))),iter__9478(cljs.core.rest(s__9479__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1))));
})()));var iter_comb = ((function (c){
return (function iter_comb(c__$1,j){if((j > n))
{return null;
} else
{var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,j,((function (){var G__9487 = j;return (c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(G__9487) : c__$1.call(null,G__9487));
})() - (1)));if(((function (){var G__9488 = j;return (c__$2.cljs$core$IFn$_invoke$arity$1 ? c__$2.cljs$core$IFn$_invoke$arity$1(G__9488) : c__$2.call(null,G__9488));
})() < j))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$2,(j + (1))], null);
} else
{var c__$3 = c__$2;var j__$1 = j;while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j__$1,(1)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$3,j__$1], null);
} else
{{
var G__9497 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$3,(j__$1 - (1)),((function (){var G__9489 = j__$1;return (c__$3.cljs$core$IFn$_invoke$arity$1 ? c__$3.cljs$core$IFn$_invoke$arity$1(G__9489) : c__$3.call(null,G__9489));
})() - (1)));
var G__9498 = (j__$1 - (1));
c__$3 = G__9497;
j__$1 = G__9498;
continue;
}
}
break;
}
}
}
});})(c))
;var step = ((function (c,iter_comb){
return (function step(c__$1,j){return cljs.core.cons(cljs.core.rseq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(c__$1,(1),(n + (1)))),(new cljs.core.LazySeq(null,((function (c,iter_comb){
return (function (){var next_step = iter_comb(c__$1,j);if(cljs.core.truth_(next_step))
{return step((function (){var G__9494 = (0);return (next_step.cljs$core$IFn$_invoke$arity$1 ? next_step.cljs$core$IFn$_invoke$arity$1(G__9494) : next_step.call(null,G__9494));
})(),(function (){var G__9495 = (1);return (next_step.cljs$core$IFn$_invoke$arity$1 ? next_step.cljs$core$IFn$_invoke$arity$1(G__9495) : next_step.call(null,G__9495));
})());
} else
{return null;
}
});})(c,iter_comb))
,null,null)));
});})(c,iter_comb))
;return step(c,(1));
}),null,null));
});
/**
* All the unique ways of taking n different elements from items
*/
major_system.combinatorics.combinations = (function combinations(items,n){var v_items = cljs.core.vec(cljs.core.reverse(items));if((n === (0)))
{return cljs.core._conj(cljs.core.List.EMPTY,cljs.core.List.EMPTY);
} else
{var cnt = cljs.core.count(items);if((n > cnt))
{return null;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,cnt))
{return cljs.core._conj(cljs.core.List.EMPTY,cljs.core.seq(items));
} else
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cnt,v_items){
return (function (p1__9499_SHARP_){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v_items,p1__9499_SHARP_);
});})(cnt,v_items))
,major_system.combinatorics.index_combinations(n,cnt));

}
}
}
});
/**
* Given a sequence that may have chunks, return a sequence that is 1-at-a-time
* lazy with no chunks. Chunks are good for efficiency when the data items are
* small, but when being processed via map, for example, a reference is kept to
* every function result in the chunk until the entire chunk has been processed,
* which increases the amount of memory in use that cannot be garbage
* collected.
*/
major_system.combinatorics.unchunk = (function unchunk(s){return (new cljs.core.LazySeq(null,(function (){if(cljs.core.seq(s))
{return cljs.core.cons(cljs.core.first(s),unchunk(cljs.core.rest(s)));
} else
{return null;
}
}),null,null));
});
/**
* All the subsets of items
*/
major_system.combinatorics.subsets = (function subsets(items){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (n){return major_system.combinatorics.combinations(items,n);
}),cljs.core.array_seq([major_system.combinatorics.unchunk(cljs.core.range.cljs$core$IFn$_invoke$arity$1((cljs.core.count(items) + (1))))], 0));
});
/**
* All the ways to take one item from each sequence
* @param {...*} var_args
*/
major_system.combinatorics.cartesian_product = (function() { 
var cartesian_product__delegate = function (seqs){var v_original_seqs = cljs.core.vec(seqs);var step = ((function (v_original_seqs){
return (function step(v_seqs){var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){var i = (cljs.core.count(v_seqs__$1) - (1));var v_seqs__$2 = v_seqs__$1;while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1)))
{return null;
} else
{var temp__4124__auto__ = cljs.core.next((function (){var G__9509 = i;return (v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(G__9509) : v_seqs__$2.call(null,G__9509));
})());if(temp__4124__auto__)
{var rst = temp__4124__auto__;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else
{{
var G__9511 = (i - (1));
var G__9512 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(function (){var G__9510 = i;return (v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(G__9510) : v_original_seqs.call(null,G__9510));
})());
i = G__9511;
v_seqs__$2 = G__9512;
continue;
}
}
}
break;
}
});})(v_original_seqs))
;if(cljs.core.truth_(v_seqs))
{return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){return step(increment(v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else
{return null;
}
});})(v_original_seqs))
;if(cljs.core.every_QMARK_(cljs.core.seq,seqs))
{return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){return step(v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else
{return null;
}
};
var cartesian_product = function (var_args){
var seqs = null;if (arguments.length > 0) {
  seqs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cartesian_product__delegate.call(this,seqs);};
cartesian_product.cljs$lang$maxFixedArity = 0;
cartesian_product.cljs$lang$applyTo = (function (arglist__9513){
var seqs = cljs.core.seq(arglist__9513);
return cartesian_product__delegate(seqs);
});
cartesian_product.cljs$core$IFn$_invoke$arity$variadic = cartesian_product__delegate;
return cartesian_product;
})()
;
/**
* All the ways of taking n (possibly the same) elements from the sequence of items
*/
major_system.combinatorics.selections = (function selections(items,n){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(major_system.combinatorics.cartesian_product,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(items)));
});
major_system.combinatorics.iter_perm = (function iter_perm(v){var len = cljs.core.count(v);var j = (function (){var i = (len - (2));while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1)))
{return null;
} else
{if(((function (){var G__9521 = i;return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__9521) : v.call(null,G__9521));
})() < (function (){var G__9522 = (i + (1));return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__9522) : v.call(null,G__9522));
})()))
{return i;
} else
{{
var G__9528 = (i - (1));
i = G__9528;
continue;
}

}
}
break;
}
})();if(cljs.core.truth_(j))
{var vj = (function (){var G__9523 = j;return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__9523) : v.call(null,G__9523));
})();var l = (function (){var i = (len - (1));while(true){
if((vj < (function (){var G__9524 = i;return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__9524) : v.call(null,G__9524));
})()))
{return i;
} else
{{
var G__9529 = (i - (1));
i = G__9529;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v,j,(function (){var G__9525 = l;return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__9525) : v.call(null,G__9525));
})(),cljs.core.array_seq([l,vj], 0));var k = (j + (1));var l__$1 = (len - (1));while(true){
if((k < l__$1))
{{
var G__9530 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v__$1,k,(function (){var G__9526 = l__$1;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__9526) : v__$1.call(null,G__9526));
})(),cljs.core.array_seq([l__$1,(function (){var G__9527 = k;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__9527) : v__$1.call(null,G__9527));
})()], 0));
var G__9531 = (k + (1));
var G__9532 = (l__$1 - (1));
v__$1 = G__9530;
k = G__9531;
l__$1 = G__9532;
continue;
}
} else
{return v__$1;
}
break;
}
} else
{return null;
}
});
major_system.combinatorics.vec_lex_permutations = (function vec_lex_permutations(v){if(cljs.core.truth_(v))
{return cljs.core.cons(v,(new cljs.core.LazySeq(null,(function (){return vec_lex_permutations(major_system.combinatorics.iter_perm(v));
}),null,null)));
} else
{return null;
}
});
/**
* DEPRECATED as a public function.
* 
* In prior versions of the combinatorics library, there were two similar functions: permutations and lex-permutations.  It was a source of confusion to know which to call.  Now, you can always call permutations.  When appropriate (i.e., when you pass in a sorted sequence of numbers), permutations will automatically call lex-permutations as a speed optimization.
*/
major_system.combinatorics.lex_permutations = (function lex_permutations(c){return (new cljs.core.LazySeq(null,(function (){var vec_sorted = cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(c));if((cljs.core.count(vec_sorted) === (0)))
{return cljs.core._conj(cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY);
} else
{return major_system.combinatorics.vec_lex_permutations(vec_sorted);
}
}),null,null));
});
/**
* Returns true iff s is a sequence of numbers in non-decreasing order
*/
major_system.combinatorics.sorted_numbers_QMARK_ = (function sorted_numbers_QMARK_(s){var and__3627__auto__ = cljs.core.every_QMARK_(cljs.core.number_QMARK_,s);if(and__3627__auto__)
{var or__3639__auto__ = cljs.core.empty_QMARK_(s);if(or__3639__auto__)
{return or__3639__auto__;
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._LT__EQ_,s);
}
} else
{return and__3627__auto__;
}
});
/**
* Handles the case when you want the permutations of a list with duplicate items.
*/
major_system.combinatorics.multi_perm = (function multi_perm(l){var f = cljs.core.frequencies(l);var v = cljs.core.vec(cljs.core.keys(f));var indices = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4377__auto__ = ((function (f,v){
return (function iter__9548(s__9549){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__9549__$1 = s__9549;while(true){
var temp__4126__auto__ = cljs.core.seq(s__9549__$1);if(temp__4126__auto__)
{var s__9549__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__9549__$2))
{var c__4375__auto__ = cljs.core.chunk_first(s__9549__$2);var size__4376__auto__ = cljs.core.count(c__4375__auto__);var b__9551 = cljs.core.chunk_buffer(size__4376__auto__);if((function (){var i__9550 = (0);while(true){
if((i__9550 < size__4376__auto__))
{var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4375__auto__,i__9550);cljs.core.chunk_append(b__9551,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__9558 = (function (){var G__9559 = i;return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__9559) : v.call(null,G__9559));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__9558) : f.call(null,G__9558));
})(),i));
{
var G__9562 = (i__9550 + (1));
i__9550 = G__9562;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9551),iter__9548(cljs.core.chunk_rest(s__9549__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9551),null);
}
} else
{var i = cljs.core.first(s__9549__$2);return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__9560 = (function (){var G__9561 = i;return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__9561) : v.call(null,G__9561));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__9560) : f.call(null,G__9560));
})(),i),iter__9548(cljs.core.rest(s__9549__$2)));
}
} else
{return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;return iter__4377__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,v),major_system.combinatorics.lex_permutations(indices));
});
/**
* All the distinct permutations of items, lexicographic by index.
*/
major_system.combinatorics.permutations = (function permutations(items){if(cljs.core.truth_(major_system.combinatorics.sorted_numbers_QMARK_(items)))
{return major_system.combinatorics.lex_permutations(items);
} else
{if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,items)))
{var v = cljs.core.vec(items);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (v){
return (function (p1__9563_SHARP_){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,p1__9563_SHARP_);
});})(v))
,major_system.combinatorics.lex_permutations(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v))));
} else
{return major_system.combinatorics.multi_perm(items);

}
}
});
major_system.combinatorics.update = (function update(vec,index,f){var item = (function (){var G__9566 = index;return (vec.cljs$core$IFn$_invoke$arity$1 ? vec.cljs$core$IFn$_invoke$arity$1(G__9566) : vec.call(null,G__9566));
})();return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vec,index,(function (){var G__9567 = item;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__9567) : f.call(null,G__9567));
})());
});
major_system.combinatorics.init = (function init(n,s){if(cljs.core.truth_(s))
{return cljs.core.vec((function (){var iter__4377__auto__ = (function iter__9574(s__9575){return (new cljs.core.LazySeq(null,(function (){var s__9575__$1 = s__9575;while(true){
var temp__4126__auto__ = cljs.core.seq(s__9575__$1);if(temp__4126__auto__)
{var s__9575__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__9575__$2))
{var c__4375__auto__ = cljs.core.chunk_first(s__9575__$2);var size__4376__auto__ = cljs.core.count(c__4375__auto__);var b__9577 = cljs.core.chunk_buffer(size__4376__auto__);if((function (){var i__9576 = (0);while(true){
if((i__9576 < size__4376__auto__))
{var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4375__auto__,i__9576);cljs.core.chunk_append(b__9577,(function (){var x__3946__auto__ = (0);var y__3947__auto__ = (i - ((n - s) - (-1)));return ((x__3946__auto__ > y__3947__auto__) ? x__3946__auto__ : y__3947__auto__);
})());
{
var G__9580 = (i__9576 + (1));
i__9576 = G__9580;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9577),iter__9574(cljs.core.chunk_rest(s__9575__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9577),null);
}
} else
{var i = cljs.core.first(s__9575__$2);return cljs.core.cons((function (){var x__3946__auto__ = (0);var y__3947__auto__ = (i - ((n - s) - (-1)));return ((x__3946__auto__ > y__3947__auto__) ? x__3946__auto__ : y__3947__auto__);
})(),iter__9574(cljs.core.rest(s__9575__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1))));
})());
} else
{return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(0)));
}
});
major_system.combinatorics.growth_strings_H = (function() {
var growth_strings_H = null;
var growth_strings_H__3 = (function (n,r,s){return growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,major_system.combinatorics.init(n,s),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(1))),r,s);
});
var growth_strings_H__5 = (function (n,a,b,r,s){return cljs.core.cons(a,(new cljs.core.LazySeq(null,(function (){if((function (){var and__3627__auto__ = (cljs.core.peek(b) > cljs.core.peek(a));if(and__3627__auto__)
{if(cljs.core.truth_(r))
{return (cljs.core.peek(a) < (r - (1)));
} else
{return true;
}
} else
{return and__3627__auto__;
}
})())
{return growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,major_system.combinatorics.update(a,(n - (1)),cljs.core.inc),b,r,s);
} else
{var j = (function (){var j = (n - (2));while(true){
if((function (){var and__3627__auto__ = ((function (){var G__9616 = j;return (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(G__9616) : a.call(null,G__9616));
})() < (function (){var G__9617 = j;return (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(G__9617) : b.call(null,G__9617));
})());if(and__3627__auto__)
{var and__3627__auto____$1 = (cljs.core.truth_(r)?((function (){var G__9619 = j;return (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(G__9619) : a.call(null,G__9619));
})() < (r - (1))):true);if(and__3627__auto____$1)
{if(cljs.core.truth_(s))
{return (((s - (function (){var G__9620 = j;return (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(G__9620) : b.call(null,G__9620));
})()) - (((((function (){var G__9621 = j;return (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(G__9621) : a.call(null,G__9621));
})() + (1)) === (function (){var G__9622 = j;return (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(G__9622) : b.call(null,G__9622));
})()))?(1):(0))) <= (n - j));
} else
{return true;
}
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})())
{return j;
} else
{{
var G__9630 = (j - (1));
j = G__9630;
continue;
}
}
break;
}
})();if((j === (0)))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = major_system.combinatorics.update(a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - ((function (){var G__9624 = j;return (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(G__9624) : b.call(null,G__9624));
})() + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__9625 = j;return (a__$1.cljs$core$IFn$_invoke$arity$1 ? a__$1.cljs$core$IFn$_invoke$arity$1(G__9625) : a__$1.call(null,G__9625));
})(),(function (){var G__9626 = j;return (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(G__9626) : b.call(null,G__9626));
})()))?(1):(0)))):null);var vec__9623 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + (1));var current_max = ((function (){var G__9627 = j;return (b__$1.cljs$core$IFn$_invoke$arity$1 ? b__$1.cljs$core$IFn$_invoke$arity$1(G__9627) : b__$1.call(null,G__9627));
})() + ((((function (){var G__9628 = j;return (b__$1.cljs$core$IFn$_invoke$arity$1 ? b__$1.cljs$core$IFn$_invoke$arity$1(G__9628) : b__$1.call(null,G__9628));
})() === (function (){var G__9629 = j;return (a__$2.cljs$core$IFn$_invoke$arity$1 ? a__$2.cljs$core$IFn$_invoke$arity$1(G__9629) : a__$2.call(null,G__9629));
})()))?(1):(0)));while(true){
if((i === n))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else
{if(cljs.core.truth_((function (){var and__3627__auto__ = s;if(cljs.core.truth_(and__3627__auto__))
{return (i > ((n - x) - (1)));
} else
{return and__3627__auto__;
}
})()))
{var new_a_i = ((i - n) + s);{
var G__9631 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,new_a_i);
var G__9632 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__9633 = (i + (1));
var G__9634 = (function (){var x__3946__auto__ = current_max;var y__3947__auto__ = (new_a_i + (1));return ((x__3946__auto__ > y__3947__auto__) ? x__3946__auto__ : y__3947__auto__);
})();
a__$2 = G__9631;
b__$1 = G__9632;
i = G__9633;
current_max = G__9634;
continue;
}
} else
{{
var G__9635 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,(0));
var G__9636 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__9637 = (i + (1));
var G__9638 = current_max;
a__$2 = G__9635;
b__$1 = G__9636;
i = G__9637;
current_max = G__9638;
continue;
}

}
}
break;
}
})();var a__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9623,(0),null);var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9623,(1),null);return growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,a__$2,b__$1,r,s);
}
}
}),null,null)));
});
growth_strings_H = function(n,a,b,r,s){
switch(arguments.length){
case 3:
return growth_strings_H__3.call(this,n,a,b);
case 5:
return growth_strings_H__5.call(this,n,a,b,r,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
growth_strings_H.cljs$core$IFn$_invoke$arity$3 = growth_strings_H__3;
growth_strings_H.cljs$core$IFn$_invoke$arity$5 = growth_strings_H__5;
return growth_strings_H;
})()
;
/**
* @param {...*} var_args
*/
major_system.combinatorics.lex_partitions_H = (function() { 
var lex_partitions_H__delegate = function (N,p__9639){var map__9647 = p__9639;var map__9647__$1 = ((cljs.core.seq_QMARK_(map__9647))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9647):map__9647);var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9647__$1,cljs.core.constant$keyword$15);var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9647__$1,cljs.core.constant$keyword$16);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(0)))
{if((((function (){var or__3639__auto__ = from;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (0);
}
})() <= (0))) && (((0) <= (function (){var or__3639__auto__ = to;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (0);
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var from__$1 = (cljs.core.truth_((function (){var and__3627__auto__ = from;if(cljs.core.truth_(and__3627__auto__))
{return (from <= (1));
} else
{return and__3627__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__3627__auto__ = to;if(cljs.core.truth_(and__3627__auto__))
{return (to >= N);
} else
{return and__3627__auto__;
}
})())?null:to);if(!((((1) <= (function (){var or__3639__auto__ = from__$1;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (1);
}
})())) && ((((function (){var or__3639__auto__ = from__$1;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (1);
}
})() <= (function (){var or__3639__auto__ = to__$1;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return N;
}
})())) && (((function (){var or__3639__auto__ = to__$1;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return N;
}
})() <= N)))))
{return cljs.core.List.EMPTY;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(0)))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(1)))
{return cljs.core.list(cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to__$1,(1)))
{return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N)))))));
} else
{var growth_strings = major_system.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3(N,to__$1,from__$1);var iter__4377__auto__ = ((function (growth_strings,from__$1,to__$1,map__9647,map__9647__$1,from,to){
return (function iter__9648(s__9649){return (new cljs.core.LazySeq(null,((function (growth_strings,from__$1,to__$1,map__9647,map__9647__$1,from,to){
return (function (){var s__9649__$1 = s__9649;while(true){
var temp__4126__auto__ = cljs.core.seq(s__9649__$1);if(temp__4126__auto__)
{var s__9649__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__9649__$2))
{var c__4375__auto__ = cljs.core.chunk_first(s__9649__$2);var size__4376__auto__ = cljs.core.count(c__4375__auto__);var b__9651 = cljs.core.chunk_buffer(size__4376__auto__);if((function (){var i__9650 = (0);while(true){
if((i__9650 < size__4376__auto__))
{var growth_string = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4375__auto__,i__9650);var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));cljs.core.chunk_append(b__9651,cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))));
{
var G__9654 = (i__9650 + (1));
i__9650 = G__9654;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9651),iter__9648(cljs.core.chunk_rest(s__9649__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9651),null);
}
} else
{var growth_string = cljs.core.first(s__9649__$2);var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))),iter__9648(cljs.core.rest(s__9649__$2)));
}
} else
{return null;
}
break;
}
});})(growth_strings,from__$1,to__$1,map__9647,map__9647__$1,from,to))
,null,null));
});})(growth_strings,from__$1,to__$1,map__9647,map__9647__$1,from,to))
;return iter__4377__auto__(growth_strings);

}
}
}
}
}
};
var lex_partitions_H = function (N,var_args){
var p__9639 = null;if (arguments.length > 1) {
  p__9639 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__9639);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__9655){
var N = cljs.core.first(arglist__9655);
var p__9639 = cljs.core.rest(arglist__9655);
return lex_partitions_H__delegate(N,p__9639);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
major_system.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec(items);var N = cljs.core.count(items__$1);var lex = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(major_system.combinatorics.lex_partitions_H,N,args);var iter__4377__auto__ = ((function (items__$1,N,lex){
return (function iter__9702(s__9703){return (new cljs.core.LazySeq(null,((function (items__$1,N,lex){
return (function (){var s__9703__$1 = s__9703;while(true){
var temp__4126__auto__ = cljs.core.seq(s__9703__$1);if(temp__4126__auto__)
{var s__9703__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__9703__$2))
{var c__4375__auto__ = cljs.core.chunk_first(s__9703__$2);var size__4376__auto__ = cljs.core.count(c__4375__auto__);var b__9705 = cljs.core.chunk_buffer(size__4376__auto__);if((function (){var i__9704 = (0);while(true){
if((i__9704 < size__4376__auto__))
{var parts = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4375__auto__,i__9704);cljs.core.chunk_append(b__9705,(function (){var iter__4377__auto__ = ((function (i__9704,parts,c__4375__auto__,size__4376__auto__,b__9705,s__9703__$2,temp__4126__auto__,items__$1,N,lex){
return (function iter__9728(s__9729){return (new cljs.core.LazySeq(null,((function (i__9704,parts,c__4375__auto__,size__4376__auto__,b__9705,s__9703__$2,temp__4126__auto__,items__$1,N,lex){
return (function (){var s__9729__$1 = s__9729;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__9729__$1);if(temp__4126__auto____$1)
{var s__9729__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9729__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first(s__9729__$2);var size__4376__auto____$1 = cljs.core.count(c__4375__auto____$1);var b__9731 = cljs.core.chunk_buffer(size__4376__auto____$1);if((function (){var i__9730 = (0);while(true){
if((i__9730 < size__4376__auto____$1))
{var part = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4375__auto____$1,i__9730);cljs.core.chunk_append(b__9731,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__9730,i__9704,part,c__4375__auto____$1,size__4376__auto____$1,b__9731,s__9729__$2,temp__4126__auto____$1,parts,c__4375__auto__,size__4376__auto__,b__9705,s__9703__$2,temp__4126__auto__,items__$1,N,lex){
return (function (v,o){return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__9736 = o;return (items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(G__9736) : items__$1.call(null,G__9736));
})());
});})(i__9730,i__9704,part,c__4375__auto____$1,size__4376__auto____$1,b__9731,s__9729__$2,temp__4126__auto____$1,parts,c__4375__auto__,size__4376__auto__,b__9705,s__9703__$2,temp__4126__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));
{
var G__9748 = (i__9730 + (1));
i__9730 = G__9748;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9731),iter__9728(cljs.core.chunk_rest(s__9729__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9731),null);
}
} else
{var part = cljs.core.first(s__9729__$2);return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__9704,part,s__9729__$2,temp__4126__auto____$1,parts,c__4375__auto__,size__4376__auto__,b__9705,s__9703__$2,temp__4126__auto__,items__$1,N,lex){
return (function (v,o){return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__9737 = o;return (items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(G__9737) : items__$1.call(null,G__9737));
})());
});})(i__9704,part,s__9729__$2,temp__4126__auto____$1,parts,c__4375__auto__,size__4376__auto__,b__9705,s__9703__$2,temp__4126__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),iter__9728(cljs.core.rest(s__9729__$2)));
}
} else
{return null;
}
break;
}
});})(i__9704,parts,c__4375__auto__,size__4376__auto__,b__9705,s__9703__$2,temp__4126__auto__,items__$1,N,lex))
,null,null));
});})(i__9704,parts,c__4375__auto__,size__4376__auto__,b__9705,s__9703__$2,temp__4126__auto__,items__$1,N,lex))
;return iter__4377__auto__(parts);
})());
{
var G__9749 = (i__9704 + (1));
i__9704 = G__9749;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9705),iter__9702(cljs.core.chunk_rest(s__9703__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9705),null);
}
} else
{var parts = cljs.core.first(s__9703__$2);return cljs.core.cons((function (){var iter__4377__auto__ = ((function (parts,s__9703__$2,temp__4126__auto__,items__$1,N,lex){
return (function iter__9738(s__9739){return (new cljs.core.LazySeq(null,((function (parts,s__9703__$2,temp__4126__auto__,items__$1,N,lex){
return (function (){var s__9739__$1 = s__9739;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__9739__$1);if(temp__4126__auto____$1)
{var s__9739__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9739__$2))
{var c__4375__auto__ = cljs.core.chunk_first(s__9739__$2);var size__4376__auto__ = cljs.core.count(c__4375__auto__);var b__9741 = cljs.core.chunk_buffer(size__4376__auto__);if((function (){var i__9740 = (0);while(true){
if((i__9740 < size__4376__auto__))
{var part = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4375__auto__,i__9740);cljs.core.chunk_append(b__9741,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__9740,part,c__4375__auto__,size__4376__auto__,b__9741,s__9739__$2,temp__4126__auto____$1,parts,s__9703__$2,temp__4126__auto__,items__$1,N,lex){
return (function (v,o){return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__9746 = o;return (items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(G__9746) : items__$1.call(null,G__9746));
})());
});})(i__9740,part,c__4375__auto__,size__4376__auto__,b__9741,s__9739__$2,temp__4126__auto____$1,parts,s__9703__$2,temp__4126__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));
{
var G__9750 = (i__9740 + (1));
i__9740 = G__9750;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9741),iter__9738(cljs.core.chunk_rest(s__9739__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9741),null);
}
} else
{var part = cljs.core.first(s__9739__$2);return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (part,s__9739__$2,temp__4126__auto____$1,parts,s__9703__$2,temp__4126__auto__,items__$1,N,lex){
return (function (v,o){return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__9747 = o;return (items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(G__9747) : items__$1.call(null,G__9747));
})());
});})(part,s__9739__$2,temp__4126__auto____$1,parts,s__9703__$2,temp__4126__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),iter__9738(cljs.core.rest(s__9739__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__9703__$2,temp__4126__auto__,items__$1,N,lex))
,null,null));
});})(parts,s__9703__$2,temp__4126__auto__,items__$1,N,lex))
;return iter__4377__auto__(parts);
})(),iter__9702(cljs.core.rest(s__9703__$2)));
}
} else
{return null;
}
break;
}
});})(items__$1,N,lex))
,null,null));
});})(items__$1,N,lex))
;return iter__4377__auto__(lex);
};
var partitions_H = function (items,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_H__delegate.call(this,items,args);};
partitions_H.cljs$lang$maxFixedArity = 1;
partitions_H.cljs$lang$applyTo = (function (arglist__9751){
var items = cljs.core.first(arglist__9751);
var args = cljs.core.rest(arglist__9751);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
major_system.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(multiset));var m = cljs.core.count(multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__9896 = (function (){var j = (0);var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__10029 = (j + (1));
var G__10030 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,j,(j + (1)));
var G__10031 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,j,(function (){var G__9897 = (j + (1));return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__9897) : multiset.call(null,G__9897));
})());
var G__10032 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,j,(function (){var G__9898 = (j + (1));return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__9898) : multiset.call(null,G__9898));
})());
j = G__10029;
c__$1 = G__10030;
u__$1 = G__10031;
v__$1 = G__10032;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9896,(0),null);var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9896,(1),null);var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9896,(2),null);var a = (0);var b = m;var l = (0);var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,(0),(0),cljs.core.array_seq([(1),m], 0));var stack = cljs.core.List.EMPTY;return multiset_partitions_M.cljs$core$IFn$_invoke$arity$11(n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__9899 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,k,((function (){var G__9900 = j;return (u__$1.cljs$core$IFn$_invoke$arity$1 ? u__$1.cljs$core$IFn$_invoke$arity$1(G__9900) : u__$1.call(null,G__9900));
})() - (function (){var G__9901 = j;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__9901) : v__$1.call(null,G__9901));
})()));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__9902 = k;return (u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(G__9902) : u__$2.call(null,G__9902));
})(),(0)))
{{
var G__10033 = (j + (1));
var G__10034 = k;
var G__10035 = true;
var G__10036 = u__$2;
var G__10037 = v__$1;
var G__10038 = c__$1;
j = G__10033;
k = G__10034;
x = G__10035;
u__$1 = G__10036;
v__$1 = G__10037;
c__$1 = G__10038;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,k,(function (){var G__9903 = j;return (c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(G__9903) : c__$1.call(null,G__9903));
})());var v__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,k,(function (){var x__3953__auto__ = (function (){var G__9904 = j;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__9904) : v__$1.call(null,G__9904));
})();var y__3954__auto__ = (function (){var G__9905 = k;return (u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(G__9905) : u__$2.call(null,G__9905));
})();return ((x__3953__auto__ < y__3954__auto__) ? x__3953__auto__ : y__3954__auto__);
})());var x__$1 = ((function (){var G__9906 = k;return (u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(G__9906) : u__$2.call(null,G__9906));
})() < (function (){var G__9907 = j;return (v__$2.cljs$core$IFn$_invoke$arity$1 ? v__$2.cljs$core$IFn$_invoke$arity$1(G__9907) : v__$2.call(null,G__9907));
})());var k__$1 = (k + (1));var j__$1 = (j + (1));{
var G__10039 = j__$1;
var G__10040 = k__$1;
var G__10041 = x__$1;
var G__10042 = u__$2;
var G__10043 = v__$2;
var G__10044 = c__$2;
j = G__10039;
k = G__10040;
x = G__10041;
u__$1 = G__10042;
v__$1 = G__10043;
c__$1 = G__10044;
continue;
}
} else
{var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,k,(function (){var G__9908 = j;return (c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(G__9908) : c__$1.call(null,G__9908));
})());var v__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,k,(function (){var G__9909 = k;return (u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(G__9909) : u__$2.call(null,G__9909));
})());var k__$1 = (k + (1));var j__$1 = (j + (1));{
var G__10045 = j__$1;
var G__10046 = k__$1;
var G__10047 = x;
var G__10048 = u__$2;
var G__10049 = v__$2;
var G__10050 = c__$2;
j = G__10045;
k = G__10046;
x = G__10047;
u__$1 = G__10048;
v__$1 = G__10049;
c__$1 = G__10050;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9899,(0),null);var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9899,(1),null);var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9899,(2),null);var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9899,(3),null);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9899,(4),null);if(cljs.core.truth_((function (){var and__3627__auto__ = r;if(cljs.core.truth_(and__3627__auto__))
{return ((k > b)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,(r - (1))));
} else
{return and__3627__auto__;
}
})()))
{var G__9910 = n;var G__9911 = m;var G__9912 = f;var G__9913 = c__$1;var G__9914 = u__$1;var G__9915 = v__$1;var G__9916 = a;var G__9917 = b;var G__9918 = l;var G__9919 = r;var G__9920 = s;return (major_system.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? major_system.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(G__9910,G__9911,G__9912,G__9913,G__9914,G__9915,G__9916,G__9917,G__9918,G__9919,G__9920) : major_system.combinatorics.m5.call(null,G__9910,G__9911,G__9912,G__9913,G__9914,G__9915,G__9916,G__9917,G__9918,G__9919,G__9920));
} else
{if(cljs.core.truth_((function (){var and__3627__auto__ = s;if(cljs.core.truth_(and__3627__auto__))
{return ((k <= b)) && (((l + (1)) < s));
} else
{return and__3627__auto__;
}
})()))
{var G__9921 = n;var G__9922 = m;var G__9923 = f;var G__9924 = c__$1;var G__9925 = u__$1;var G__9926 = v__$1;var G__9927 = a;var G__9928 = b;var G__9929 = l;var G__9930 = r;var G__9931 = s;return (major_system.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? major_system.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(G__9921,G__9922,G__9923,G__9924,G__9925,G__9926,G__9927,G__9928,G__9929,G__9930,G__9931) : major_system.combinatorics.m5.call(null,G__9921,G__9922,G__9923,G__9924,G__9925,G__9926,G__9927,G__9928,G__9929,G__9930,G__9931));
} else
{if((k > b))
{var a__$1 = b;var b__$1 = k;var l__$1 = (l + (1));var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,(l__$1 + (1)),b__$1);{
var G__10051 = n;
var G__10052 = m;
var G__10053 = f__$1;
var G__10054 = c__$1;
var G__10055 = u__$1;
var G__10056 = v__$1;
var G__10057 = a__$1;
var G__10058 = b__$1;
var G__10059 = l__$1;
var G__10060 = r;
var G__10061 = s;
n = G__10051;
m = G__10052;
f = G__10053;
c = G__10054;
u = G__10055;
v = G__10056;
a = G__10057;
b = G__10058;
l = G__10059;
r = G__10060;
s = G__10061;
continue;
}
} else
{var part = (function (){var iter__4377__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,vec__9899,u__$1,v__$1,c__$1,j,k){
return (function iter__9932(s__9933){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,vec__9899,u__$1,v__$1,c__$1,j,k){
return (function (){var s__9933__$1 = s__9933;while(true){
var temp__4126__auto__ = cljs.core.seq(s__9933__$1);if(temp__4126__auto__)
{var s__9933__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__9933__$2))
{var c__4375__auto__ = cljs.core.chunk_first(s__9933__$2);var size__4376__auto__ = cljs.core.count(c__4375__auto__);var b__9935 = cljs.core.chunk_buffer(size__4376__auto__);if((function (){var i__9934 = (0);while(true){
if((i__9934 < size__4376__auto__))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4375__auto__,i__9934);cljs.core.chunk_append(b__9935,(function (){var first_col = (function (){var G__9978 = y;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__9978) : f.call(null,G__9978));
})();var last_col = ((function (){var G__9979 = (y + (1));return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__9979) : f.call(null,G__9979));
})() - (1));return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (i__9934,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4375__auto__,size__4376__auto__,b__9935,s__9933__$2,temp__4126__auto__,vec__9899,u__$1,v__$1,c__$1,j,k){
return (function iter__9980(s__9981){return (new cljs.core.LazySeq(null,((function (i__9934,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4375__auto__,size__4376__auto__,b__9935,s__9933__$2,temp__4126__auto__,vec__9899,u__$1,v__$1,c__$1,j,k){
return (function (){var s__9981__$1 = s__9981;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__9981__$1);if(temp__4126__auto____$1)
{var s__9981__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9981__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first(s__9981__$2);var size__4376__auto____$1 = cljs.core.count(c__4375__auto____$1);var b__9983 = cljs.core.chunk_buffer(size__4376__auto____$1);if((function (){var i__9982 = (0);while(true){
if((i__9982 < size__4376__auto____$1))
{var z = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4375__auto____$1,i__9982);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__9992 = z;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__9992) : v__$1.call(null,G__9992));
})(),(0)))
{cljs.core.chunk_append(b__9983,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__9993 = z;return (c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(G__9993) : c__$1.call(null,G__9993));
})(),(function (){var G__9994 = z;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__9994) : v__$1.call(null,G__9994));
})()], null));
{
var G__10062 = (i__9982 + (1));
i__9982 = G__10062;
continue;
}
} else
{{
var G__10063 = (i__9982 + (1));
i__9982 = G__10063;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9983),iter__9980(cljs.core.chunk_rest(s__9981__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9983),null);
}
} else
{var z = cljs.core.first(s__9981__$2);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__9995 = z;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__9995) : v__$1.call(null,G__9995));
})(),(0)))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__9996 = z;return (c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(G__9996) : c__$1.call(null,G__9996));
})(),(function (){var G__9997 = z;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__9997) : v__$1.call(null,G__9997));
})()], null),iter__9980(cljs.core.rest(s__9981__$2)));
} else
{{
var G__10064 = cljs.core.rest(s__9981__$2);
s__9981__$1 = G__10064;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__9934,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4375__auto__,size__4376__auto__,b__9935,s__9933__$2,temp__4126__auto__,vec__9899,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(i__9934,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4375__auto__,size__4376__auto__,b__9935,s__9933__$2,temp__4126__auto__,vec__9899,u__$1,v__$1,c__$1,j,k))
;return iter__4377__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})());
{
var G__10065 = (i__9934 + (1));
i__9934 = G__10065;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9935),iter__9932(cljs.core.chunk_rest(s__9933__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9935),null);
}
} else
{var y = cljs.core.first(s__9933__$2);return cljs.core.cons((function (){var first_col = (function (){var G__9998 = y;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__9998) : f.call(null,G__9998));
})();var last_col = ((function (){var G__9999 = (y + (1));return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__9999) : f.call(null,G__9999));
})() - (1));return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__9933__$2,temp__4126__auto__,vec__9899,u__$1,v__$1,c__$1,j,k){
return (function iter__10000(s__10001){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__9933__$2,temp__4126__auto__,vec__9899,u__$1,v__$1,c__$1,j,k){
return (function (){var s__10001__$1 = s__10001;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__10001__$1);if(temp__4126__auto____$1)
{var s__10001__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__10001__$2))
{var c__4375__auto__ = cljs.core.chunk_first(s__10001__$2);var size__4376__auto__ = cljs.core.count(c__4375__auto__);var b__10003 = cljs.core.chunk_buffer(size__4376__auto__);if((function (){var i__10002 = (0);while(true){
if((i__10002 < size__4376__auto__))
{var z = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4375__auto__,i__10002);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__10012 = z;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__10012) : v__$1.call(null,G__10012));
})(),(0)))
{cljs.core.chunk_append(b__10003,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__10013 = z;return (c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(G__10013) : c__$1.call(null,G__10013));
})(),(function (){var G__10014 = z;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__10014) : v__$1.call(null,G__10014));
})()], null));
{
var G__10066 = (i__10002 + (1));
i__10002 = G__10066;
continue;
}
} else
{{
var G__10067 = (i__10002 + (1));
i__10002 = G__10067;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__10003),iter__10000(cljs.core.chunk_rest(s__10001__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__10003),null);
}
} else
{var z = cljs.core.first(s__10001__$2);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__10015 = z;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__10015) : v__$1.call(null,G__10015));
})(),(0)))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__10016 = z;return (c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(G__10016) : c__$1.call(null,G__10016));
})(),(function (){var G__10017 = z;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__10017) : v__$1.call(null,G__10017));
})()], null),iter__10000(cljs.core.rest(s__10001__$2)));
} else
{{
var G__10068 = cljs.core.rest(s__10001__$2);
s__10001__$1 = G__10068;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__9933__$2,temp__4126__auto__,vec__9899,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__9933__$2,temp__4126__auto__,vec__9899,u__$1,v__$1,c__$1,j,k))
;return iter__4377__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})(),iter__9932(cljs.core.rest(s__9933__$2)));
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,vec__9899,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,vec__9899,u__$1,v__$1,c__$1,j,k))
;return iter__4377__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((l + (1))));
})();return cljs.core.cons(part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,part,vec__9899,u__$1,v__$1,c__$1,j,k){
return (function (){var G__10018 = n;var G__10019 = m;var G__10020 = f;var G__10021 = c__$1;var G__10022 = u__$1;var G__10023 = v__$1;var G__10024 = a;var G__10025 = b;var G__10026 = l;var G__10027 = r;var G__10028 = s;return (major_system.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? major_system.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(G__10018,G__10019,G__10020,G__10021,G__10022,G__10023,G__10024,G__10025,G__10026,G__10027,G__10028) : major_system.combinatorics.m5.call(null,G__10018,G__10019,G__10020,G__10021,G__10022,G__10023,G__10024,G__10025,G__10026,G__10027,G__10028));
});})(n,m,f,c,u,v,a,b,l,r,s,part,vec__9899,u__$1,v__$1,c__$1,j,k))
,null,null)));

}
}
}
break;
}
});
multiset_partitions_M = function(n,m,f,c,u,v,a,b,l,r,s){
switch(arguments.length){
case 3:
return multiset_partitions_M__3.call(this,n,m,f);
case 11:
return multiset_partitions_M__11.call(this,n,m,f,c,u,v,a,b,l,r,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
multiset_partitions_M.cljs$core$IFn$_invoke$arity$3 = multiset_partitions_M__3;
multiset_partitions_M.cljs$core$IFn$_invoke$arity$11 = multiset_partitions_M__11;
return multiset_partitions_M;
})()
;
major_system.combinatorics.m5 = (function m5(n,m,f,c,u,v,a,b,l,r,s){var j = (function (){var j = (b - (1));while(true){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__10114 = j;return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__10114) : v.call(null,G__10114));
})(),(0)))
{return j;
} else
{{
var G__10159 = (j - (1));
j = G__10159;
continue;
}
}
break;
}
})();if(cljs.core.truth_((function (){var and__3627__auto__ = r;if(cljs.core.truth_(and__3627__auto__))
{return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,a)) && (((((function (){var G__10117 = j;return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__10117) : v.call(null,G__10117));
})() - (1)) * (r - l)) < (function (){var G__10118 = j;return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__10118) : u.call(null,G__10118));
})()));
} else
{return and__3627__auto__;
}
})()))
{var G__10119 = n;var G__10120 = m;var G__10121 = f;var G__10122 = c;var G__10123 = u;var G__10124 = v;var G__10125 = a;var G__10126 = b;var G__10127 = l;var G__10128 = r;var G__10129 = s;return (major_system.combinatorics.m6.cljs$core$IFn$_invoke$arity$11 ? major_system.combinatorics.m6.cljs$core$IFn$_invoke$arity$11(G__10119,G__10120,G__10121,G__10122,G__10123,G__10124,G__10125,G__10126,G__10127,G__10128,G__10129) : major_system.combinatorics.m6.call(null,G__10119,G__10120,G__10121,G__10122,G__10123,G__10124,G__10125,G__10126,G__10127,G__10128,G__10129));
} else
{if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__10131 = j;return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__10131) : v.call(null,G__10131));
})(),(1))))
{var G__10132 = n;var G__10133 = m;var G__10134 = f;var G__10135 = c;var G__10136 = u;var G__10137 = v;var G__10138 = a;var G__10139 = b;var G__10140 = l;var G__10141 = r;var G__10142 = s;return (major_system.combinatorics.m6.cljs$core$IFn$_invoke$arity$11 ? major_system.combinatorics.m6.cljs$core$IFn$_invoke$arity$11(G__10132,G__10133,G__10134,G__10135,G__10136,G__10137,G__10138,G__10139,G__10140,G__10141,G__10142) : major_system.combinatorics.m6.call(null,G__10132,G__10133,G__10134,G__10135,G__10136,G__10137,G__10138,G__10139,G__10140,G__10141,G__10142));
} else
{var v__$1 = major_system.combinatorics.update(v,j,cljs.core.dec);var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__4377__auto__ = ((function (v__$1,j){
return (function iter__10143(s__10144){return (new cljs.core.LazySeq(null,((function (v__$1,j){
return (function (){var s__10144__$1 = s__10144;while(true){
var temp__4126__auto__ = cljs.core.seq(s__10144__$1);if(temp__4126__auto__)
{var s__10144__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__10144__$2))
{var c__4375__auto__ = cljs.core.chunk_first(s__10144__$2);var size__4376__auto__ = cljs.core.count(c__4375__auto__);var b__10146 = cljs.core.chunk_buffer(size__4376__auto__);if((function (){var i__10145 = (0);while(true){
if((i__10145 < size__4376__auto__))
{var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4375__auto__,i__10145);cljs.core.chunk_append(b__10146,((function (){var G__10153 = i;return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__10153) : u.call(null,G__10153));
})() - (function (){var G__10154 = i;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__10154) : v__$1.call(null,G__10154));
})()));
{
var G__10160 = (i__10145 + (1));
i__10145 = G__10160;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__10146),iter__10143(cljs.core.chunk_rest(s__10144__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__10146),null);
}
} else
{var i = cljs.core.first(s__10144__$2);return cljs.core.cons(((function (){var G__10155 = i;return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__10155) : u.call(null,G__10155));
})() - (function (){var G__10156 = i;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__10156) : v__$1.call(null,G__10156));
})()),iter__10143(cljs.core.rest(s__10144__$2)));
}
} else
{return null;
}
break;
}
});})(v__$1,j))
,null,null));
});})(v__$1,j))
;return iter__4377__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(a,(j + (1))));
})()):null);var v__$2 = (function (){var ks = cljs.core.range.cljs$core$IFn$_invoke$arity$2((j + (1)),b);var v__$2 = v__$1;while(true){
if(cljs.core.empty_QMARK_(ks))
{return v__$2;
} else
{var k = cljs.core.first(ks);{
var G__10161 = cljs.core.rest(ks);
var G__10162 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$2,k,(function (){var G__10157 = k;return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__10157) : u.call(null,G__10157));
})());
ks = G__10161;
v__$2 = G__10162;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + (1))):(0));var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__3946__auto__ = (0);var y__3947__auto__ = (min_partitions_after_this - diff_uv);return ((x__3946__auto__ > y__3947__auto__) ? x__3946__auto__ : y__3947__auto__);
})():(0));var v__$3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(amount_to_dec,(0)))?v__$2:(function (){var k_1 = (b - (1));var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = (function (){var G__10158 = k_1;return (v__$3.cljs$core$IFn$_invoke$arity$1 ? v__$3.cljs$core$IFn$_invoke$arity$1(G__10158) : v__$3.call(null,G__10158));
})();if((amount > vk))
{{
var G__10163 = (k_1 - (1));
var G__10164 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$3,k_1,(0));
var G__10165 = (amount - vk);
k_1 = G__10163;
v__$3 = G__10164;
amount = G__10165;
continue;
}
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$3,k_1,(vk - amount));
}
break;
}
})());return major_system.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11(n,m,f,c,u,v__$3,a,b,l,r,s);

}
}
});
major_system.combinatorics.m6 = (function m6(n,m,f,c,u,v,a,b,l,r,s){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,(0)))
{return cljs.core.List.EMPTY;
} else
{var l__$1 = (l - (1));var b__$1 = a;var a__$1 = (function (){var G__10167 = l__$1;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10167) : f.call(null,G__10167));
})();return major_system.combinatorics.m5(n,m,f,c,u,v,a__$1,b__$1,l__$1,r,s);
}
});
/**
* @param {...*} var_args
*/
major_system.combinatorics.partitions_M = (function() { 
var partitions_M__delegate = function (items,p__10168){var map__10262 = p__10168;var map__10262__$1 = ((cljs.core.seq_QMARK_(map__10262))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10262):map__10262);var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10262__$1,cljs.core.constant$keyword$15);var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10262__$1,cljs.core.constant$keyword$16);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(items),(0)))
{if((((function (){var or__3639__auto__ = from;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (0);
}
})() <= (0))) && (((0) <= (function (){var or__3639__auto__ = to;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (0);
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var items__$1 = cljs.core.vec(items);var ditems = cljs.core.vec(cljs.core.distinct(items__$1));var freqs = cljs.core.frequencies(items__$1);var N = cljs.core.count(items__$1);var M = cljs.core.count(ditems);var from__$1 = (cljs.core.truth_((function (){var and__3627__auto__ = from;if(cljs.core.truth_(and__3627__auto__))
{return (from <= (1));
} else
{return and__3627__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__3627__auto__ = to;if(cljs.core.truth_(and__3627__auto__))
{return (to >= N);
} else
{return and__3627__auto__;
}
})())?null:to);if(!((((1) <= (function (){var or__3639__auto__ = from__$1;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (1);
}
})())) && ((((function (){var or__3639__auto__ = from__$1;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (1);
}
})() <= (function (){var or__3639__auto__ = to__$1;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return N;
}
})())) && (((function (){var or__3639__auto__ = to__$1;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return N;
}
})() <= N)))))
{return cljs.core.List.EMPTY;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(1)))
{return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.first(items__$1)))))))))));
} else
{var start_multiset = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10262,map__10262__$1,from,to){
return (function iter__10263(s__10264){return (new cljs.core.LazySeq(null,((function (items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10262,map__10262__$1,from,to){
return (function (){var s__10264__$1 = s__10264;while(true){
var temp__4126__auto__ = cljs.core.seq(s__10264__$1);if(temp__4126__auto__)
{var s__10264__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__10264__$2))
{var c__4375__auto__ = cljs.core.chunk_first(s__10264__$2);var size__4376__auto__ = cljs.core.count(c__4375__auto__);var b__10266 = cljs.core.chunk_buffer(size__4376__auto__);if((function (){var i__10265 = (0);while(true){
if((i__10265 < size__4376__auto__))
{var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4375__auto__,i__10265);var j = (i + (1));cljs.core.chunk_append(b__10266,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__10273 = (function (){var G__10274 = i;return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__10274) : ditems.call(null,G__10274));
})();return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__10273) : freqs.call(null,G__10273));
})()], null));
{
var G__10355 = (i__10265 + (1));
i__10265 = G__10355;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__10266),iter__10263(cljs.core.chunk_rest(s__10264__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__10266),null);
}
} else
{var i = cljs.core.first(s__10264__$2);var j = (i + (1));return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__10275 = (function (){var G__10276 = i;return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__10276) : ditems.call(null,G__10276));
})();return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__10275) : freqs.call(null,G__10275));
})()], null),iter__10263(cljs.core.rest(s__10264__$2)));
}
} else
{return null;
}
break;
}
});})(items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10262,map__10262__$1,from,to))
,null,null));
});})(items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10262,map__10262__$1,from,to))
;return iter__4377__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(M));
})());var parts = major_system.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3(start_multiset,to__$1,from__$1);var iter__4377__auto__ = ((function (start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10262,map__10262__$1,from,to){
return (function iter__10277(s__10278){return (new cljs.core.LazySeq(null,((function (start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10262,map__10262__$1,from,to){
return (function (){var s__10278__$1 = s__10278;while(true){
var temp__4126__auto__ = cljs.core.seq(s__10278__$1);if(temp__4126__auto__)
{var s__10278__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__10278__$2))
{var c__4375__auto__ = cljs.core.chunk_first(s__10278__$2);var size__4376__auto__ = cljs.core.count(c__4375__auto__);var b__10280 = cljs.core.chunk_buffer(size__4376__auto__);if((function (){var i__10279 = (0);while(true){
if((i__10279 < size__4376__auto__))
{var part = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4375__auto__,i__10279);cljs.core.chunk_append(b__10280,(function (){var iter__4377__auto__ = ((function (i__10279,part,c__4375__auto__,size__4376__auto__,b__10280,s__10278__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10262,map__10262__$1,from,to){
return (function iter__10319(s__10320){return (new cljs.core.LazySeq(null,((function (i__10279,part,c__4375__auto__,size__4376__auto__,b__10280,s__10278__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10262,map__10262__$1,from,to){
return (function (){var s__10320__$1 = s__10320;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__10320__$1);if(temp__4126__auto____$1)
{var s__10320__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__10320__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first(s__10320__$2);var size__4376__auto____$1 = cljs.core.count(c__4375__auto____$1);var b__10322 = cljs.core.chunk_buffer(size__4376__auto____$1);if((function (){var i__10321 = (0);while(true){
if((i__10321 < size__4376__auto____$1))
{var multiset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4375__auto____$1,i__10321);cljs.core.chunk_append(b__10322,cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (i__10321,i__10279,multiset,c__4375__auto____$1,size__4376__auto____$1,b__10322,s__10320__$2,temp__4126__auto____$1,part,c__4375__auto__,size__4376__auto__,b__10280,s__10278__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10262,map__10262__$1,from,to){
return (function (p__10331){var vec__10332 = p__10331;var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10332,(0),null);var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10332,(1),null);return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__10333 = (index - (1));return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__10333) : ditems.call(null,G__10333));
})());
});})(i__10321,i__10279,multiset,c__4375__auto____$1,size__4376__auto____$1,b__10322,s__10320__$2,temp__4126__auto____$1,part,c__4375__auto__,size__4376__auto__,b__10280,s__10278__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10262,map__10262__$1,from,to))
,cljs.core.array_seq([multiset], 0))));
{
var G__10356 = (i__10321 + (1));
i__10321 = G__10356;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__10322),iter__10319(cljs.core.chunk_rest(s__10320__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__10322),null);
}
} else
{var multiset = cljs.core.first(s__10320__$2);return cljs.core.cons(cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (i__10279,multiset,s__10320__$2,temp__4126__auto____$1,part,c__4375__auto__,size__4376__auto__,b__10280,s__10278__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10262,map__10262__$1,from,to){
return (function (p__10334){var vec__10335 = p__10334;var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10335,(0),null);var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10335,(1),null);return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__10336 = (index - (1));return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__10336) : ditems.call(null,G__10336));
})());
});})(i__10279,multiset,s__10320__$2,temp__4126__auto____$1,part,c__4375__auto__,size__4376__auto__,b__10280,s__10278__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10262,map__10262__$1,from,to))
,cljs.core.array_seq([multiset], 0))),iter__10319(cljs.core.rest(s__10320__$2)));
}
} else
{return null;
}
break;
}
});})(i__10279,part,c__4375__auto__,size__4376__auto__,b__10280,s__10278__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10262,map__10262__$1,from,to))
,null,null));
});})(i__10279,part,c__4375__auto__,size__4376__auto__,b__10280,s__10278__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10262,map__10262__$1,from,to))
;return iter__4377__auto__(part);
})());
{
var G__10357 = (i__10279 + (1));
i__10279 = G__10357;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__10280),iter__10277(cljs.core.chunk_rest(s__10278__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__10280),null);
}
} else
{var part = cljs.core.first(s__10278__$2);return cljs.core.cons((function (){var iter__4377__auto__ = ((function (part,s__10278__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10262,map__10262__$1,from,to){
return (function iter__10337(s__10338){return (new cljs.core.LazySeq(null,((function (part,s__10278__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10262,map__10262__$1,from,to){
return (function (){var s__10338__$1 = s__10338;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__10338__$1);if(temp__4126__auto____$1)
{var s__10338__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__10338__$2))
{var c__4375__auto__ = cljs.core.chunk_first(s__10338__$2);var size__4376__auto__ = cljs.core.count(c__4375__auto__);var b__10340 = cljs.core.chunk_buffer(size__4376__auto__);if((function (){var i__10339 = (0);while(true){
if((i__10339 < size__4376__auto__))
{var multiset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4375__auto__,i__10339);cljs.core.chunk_append(b__10340,cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (i__10339,multiset,c__4375__auto__,size__4376__auto__,b__10340,s__10338__$2,temp__4126__auto____$1,part,s__10278__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10262,map__10262__$1,from,to){
return (function (p__10349){var vec__10350 = p__10349;var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10350,(0),null);var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10350,(1),null);return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__10351 = (index - (1));return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__10351) : ditems.call(null,G__10351));
})());
});})(i__10339,multiset,c__4375__auto__,size__4376__auto__,b__10340,s__10338__$2,temp__4126__auto____$1,part,s__10278__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10262,map__10262__$1,from,to))
,cljs.core.array_seq([multiset], 0))));
{
var G__10358 = (i__10339 + (1));
i__10339 = G__10358;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__10340),iter__10337(cljs.core.chunk_rest(s__10338__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__10340),null);
}
} else
{var multiset = cljs.core.first(s__10338__$2);return cljs.core.cons(cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (multiset,s__10338__$2,temp__4126__auto____$1,part,s__10278__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10262,map__10262__$1,from,to){
return (function (p__10352){var vec__10353 = p__10352;var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10353,(0),null);var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10353,(1),null);return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__10354 = (index - (1));return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__10354) : ditems.call(null,G__10354));
})());
});})(multiset,s__10338__$2,temp__4126__auto____$1,part,s__10278__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10262,map__10262__$1,from,to))
,cljs.core.array_seq([multiset], 0))),iter__10337(cljs.core.rest(s__10338__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__10278__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10262,map__10262__$1,from,to))
,null,null));
});})(part,s__10278__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10262,map__10262__$1,from,to))
;return iter__4377__auto__(part);
})(),iter__10277(cljs.core.rest(s__10278__$2)));
}
} else
{return null;
}
break;
}
});})(start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10262,map__10262__$1,from,to))
,null,null));
});})(start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10262,map__10262__$1,from,to))
;return iter__4377__auto__(parts);

}
}
}
};
var partitions_M = function (items,var_args){
var p__10168 = null;if (arguments.length > 1) {
  p__10168 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__10168);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__10359){
var items = cljs.core.first(arglist__10359);
var p__10168 = cljs.core.rest(arglist__10359);
return partitions_M__delegate(items,p__10168);
});
partitions_M.cljs$core$IFn$_invoke$arity$variadic = partitions_M__delegate;
return partitions_M;
})()
;
/**
* All the lexicographic distinct partitions of items.
* Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into.
* @param {...*} var_args
*/
major_system.combinatorics.partitions = (function() { 
var partitions__delegate = function (items,args){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(items),(0)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(major_system.combinatorics.partitions_H,items,args);
} else
{if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,items)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(major_system.combinatorics.partitions_H,items,args);
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(major_system.combinatorics.partitions_M,items,args);

}
}
};
var partitions = function (items,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions__delegate.call(this,items,args);};
partitions.cljs$lang$maxFixedArity = 1;
partitions.cljs$lang$applyTo = (function (arglist__10360){
var items = cljs.core.first(arglist__10360);
var args = cljs.core.rest(arglist__10360);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;
