// Compiled by ClojureScript 0.0-2356
goog.provide('major_system.combinatorics');
goog.require('cljs.core');
major_system.combinatorics.index_combinations = (function index_combinations(n,cnt){return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec(cljs.core.cons(null,(function (){var iter__4407__auto__ = (function iter__9493(s__9494){return (new cljs.core.LazySeq(null,(function (){var s__9494__$1 = s__9494;while(true){
var temp__4126__auto__ = cljs.core.seq(s__9494__$1);if(temp__4126__auto__)
{var s__9494__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__9494__$2))
{var c__4405__auto__ = cljs.core.chunk_first(s__9494__$2);var size__4406__auto__ = cljs.core.count(c__4405__auto__);var b__9496 = cljs.core.chunk_buffer(size__4406__auto__);if((function (){var i__9495 = (0);while(true){
if((i__9495 < size__4406__auto__))
{var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4405__auto__,i__9495);cljs.core.chunk_append(b__9496,((j + cnt) + (- (n + (1)))));
{
var G__9511 = (i__9495 + (1));
i__9495 = G__9511;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9496),iter__9493(cljs.core.chunk_rest(s__9494__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9496),null);
}
} else
{var j = cljs.core.first(s__9494__$2);return cljs.core.cons(((j + cnt) + (- (n + (1)))),iter__9493(cljs.core.rest(s__9494__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4407__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1))));
})()));var iter_comb = ((function (c){
return (function iter_comb(c__$1,j){if((j > n))
{return null;
} else
{var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,j,((function (){var G__9502 = j;return (c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(G__9502) : c__$1.call(null,G__9502));
})() - (1)));if(((function (){var G__9503 = j;return (c__$2.cljs$core$IFn$_invoke$arity$1 ? c__$2.cljs$core$IFn$_invoke$arity$1(G__9503) : c__$2.call(null,G__9503));
})() < j))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$2,(j + (1))], null);
} else
{var c__$3 = c__$2;var j__$1 = j;while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j__$1,(1)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$3,j__$1], null);
} else
{{
var G__9512 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$3,(j__$1 - (1)),((function (){var G__9504 = j__$1;return (c__$3.cljs$core$IFn$_invoke$arity$1 ? c__$3.cljs$core$IFn$_invoke$arity$1(G__9504) : c__$3.call(null,G__9504));
})() - (1)));
var G__9513 = (j__$1 - (1));
c__$3 = G__9512;
j__$1 = G__9513;
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
{return step((function (){var G__9509 = (0);return (next_step.cljs$core$IFn$_invoke$arity$1 ? next_step.cljs$core$IFn$_invoke$arity$1(G__9509) : next_step.call(null,G__9509));
})(),(function (){var G__9510 = (1);return (next_step.cljs$core$IFn$_invoke$arity$1 ? next_step.cljs$core$IFn$_invoke$arity$1(G__9510) : next_step.call(null,G__9510));
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
return (function (p1__9514_SHARP_){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v_items,p1__9514_SHARP_);
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
{var temp__4124__auto__ = cljs.core.next((function (){var G__9524 = i;return (v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(G__9524) : v_seqs__$2.call(null,G__9524));
})());if(temp__4124__auto__)
{var rst = temp__4124__auto__;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else
{{
var G__9526 = (i - (1));
var G__9527 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(function (){var G__9525 = i;return (v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(G__9525) : v_original_seqs.call(null,G__9525));
})());
i = G__9526;
v_seqs__$2 = G__9527;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__9528){
var seqs = cljs.core.seq(arglist__9528);
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
{if(((function (){var G__9536 = i;return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__9536) : v.call(null,G__9536));
})() < (function (){var G__9537 = (i + (1));return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__9537) : v.call(null,G__9537));
})()))
{return i;
} else
{{
var G__9543 = (i - (1));
i = G__9543;
continue;
}

}
}
break;
}
})();if(cljs.core.truth_(j))
{var vj = (function (){var G__9538 = j;return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__9538) : v.call(null,G__9538));
})();var l = (function (){var i = (len - (1));while(true){
if((vj < (function (){var G__9539 = i;return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__9539) : v.call(null,G__9539));
})()))
{return i;
} else
{{
var G__9544 = (i - (1));
i = G__9544;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v,j,(function (){var G__9540 = l;return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__9540) : v.call(null,G__9540));
})(),cljs.core.array_seq([l,vj], 0));var k = (j + (1));var l__$1 = (len - (1));while(true){
if((k < l__$1))
{{
var G__9545 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v__$1,k,(function (){var G__9541 = l__$1;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__9541) : v__$1.call(null,G__9541));
})(),cljs.core.array_seq([l__$1,(function (){var G__9542 = k;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__9542) : v__$1.call(null,G__9542));
})()], 0));
var G__9546 = (k + (1));
var G__9547 = (l__$1 - (1));
v__$1 = G__9545;
k = G__9546;
l__$1 = G__9547;
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
major_system.combinatorics.sorted_numbers_QMARK_ = (function sorted_numbers_QMARK_(s){var and__3657__auto__ = cljs.core.every_QMARK_(cljs.core.number_QMARK_,s);if(and__3657__auto__)
{var or__3669__auto__ = cljs.core.empty_QMARK_(s);if(or__3669__auto__)
{return or__3669__auto__;
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._LT__EQ_,s);
}
} else
{return and__3657__auto__;
}
});
/**
* Handles the case when you want the permutations of a list with duplicate items.
*/
major_system.combinatorics.multi_perm = (function multi_perm(l){var f = cljs.core.frequencies(l);var v = cljs.core.vec(cljs.core.keys(f));var indices = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4407__auto__ = ((function (f,v){
return (function iter__9563(s__9564){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__9564__$1 = s__9564;while(true){
var temp__4126__auto__ = cljs.core.seq(s__9564__$1);if(temp__4126__auto__)
{var s__9564__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__9564__$2))
{var c__4405__auto__ = cljs.core.chunk_first(s__9564__$2);var size__4406__auto__ = cljs.core.count(c__4405__auto__);var b__9566 = cljs.core.chunk_buffer(size__4406__auto__);if((function (){var i__9565 = (0);while(true){
if((i__9565 < size__4406__auto__))
{var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4405__auto__,i__9565);cljs.core.chunk_append(b__9566,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__9573 = (function (){var G__9574 = i;return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__9574) : v.call(null,G__9574));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__9573) : f.call(null,G__9573));
})(),i));
{
var G__9577 = (i__9565 + (1));
i__9565 = G__9577;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9566),iter__9563(cljs.core.chunk_rest(s__9564__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9566),null);
}
} else
{var i = cljs.core.first(s__9564__$2);return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__9575 = (function (){var G__9576 = i;return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__9576) : v.call(null,G__9576));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__9575) : f.call(null,G__9575));
})(),i),iter__9563(cljs.core.rest(s__9564__$2)));
}
} else
{return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;return iter__4407__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
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
return (function (p1__9578_SHARP_){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,p1__9578_SHARP_);
});})(v))
,major_system.combinatorics.lex_permutations(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v))));
} else
{return major_system.combinatorics.multi_perm(items);

}
}
});
major_system.combinatorics.update = (function update(vec,index,f){var item = (function (){var G__9581 = index;return (vec.cljs$core$IFn$_invoke$arity$1 ? vec.cljs$core$IFn$_invoke$arity$1(G__9581) : vec.call(null,G__9581));
})();return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vec,index,(function (){var G__9582 = item;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__9582) : f.call(null,G__9582));
})());
});
major_system.combinatorics.init = (function init(n,s){if(cljs.core.truth_(s))
{return cljs.core.vec((function (){var iter__4407__auto__ = (function iter__9589(s__9590){return (new cljs.core.LazySeq(null,(function (){var s__9590__$1 = s__9590;while(true){
var temp__4126__auto__ = cljs.core.seq(s__9590__$1);if(temp__4126__auto__)
{var s__9590__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__9590__$2))
{var c__4405__auto__ = cljs.core.chunk_first(s__9590__$2);var size__4406__auto__ = cljs.core.count(c__4405__auto__);var b__9592 = cljs.core.chunk_buffer(size__4406__auto__);if((function (){var i__9591 = (0);while(true){
if((i__9591 < size__4406__auto__))
{var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4405__auto__,i__9591);cljs.core.chunk_append(b__9592,(function (){var x__3976__auto__ = (0);var y__3977__auto__ = (i - ((n - s) - (-1)));return ((x__3976__auto__ > y__3977__auto__) ? x__3976__auto__ : y__3977__auto__);
})());
{
var G__9595 = (i__9591 + (1));
i__9591 = G__9595;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9592),iter__9589(cljs.core.chunk_rest(s__9590__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9592),null);
}
} else
{var i = cljs.core.first(s__9590__$2);return cljs.core.cons((function (){var x__3976__auto__ = (0);var y__3977__auto__ = (i - ((n - s) - (-1)));return ((x__3976__auto__ > y__3977__auto__) ? x__3976__auto__ : y__3977__auto__);
})(),iter__9589(cljs.core.rest(s__9590__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4407__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1))));
})());
} else
{return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(0)));
}
});
major_system.combinatorics.growth_strings_H = (function() {
var growth_strings_H = null;
var growth_strings_H__3 = (function (n,r,s){return growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,major_system.combinatorics.init(n,s),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(1))),r,s);
});
var growth_strings_H__5 = (function (n,a,b,r,s){return cljs.core.cons(a,(new cljs.core.LazySeq(null,(function (){if((function (){var and__3657__auto__ = (cljs.core.peek(b) > cljs.core.peek(a));if(and__3657__auto__)
{if(cljs.core.truth_(r))
{return (cljs.core.peek(a) < (r - (1)));
} else
{return true;
}
} else
{return and__3657__auto__;
}
})())
{return growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,major_system.combinatorics.update(a,(n - (1)),cljs.core.inc),b,r,s);
} else
{var j = (function (){var j = (n - (2));while(true){
if((function (){var and__3657__auto__ = ((function (){var G__9631 = j;return (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(G__9631) : a.call(null,G__9631));
})() < (function (){var G__9632 = j;return (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(G__9632) : b.call(null,G__9632));
})());if(and__3657__auto__)
{var and__3657__auto____$1 = (cljs.core.truth_(r)?((function (){var G__9634 = j;return (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(G__9634) : a.call(null,G__9634));
})() < (r - (1))):true);if(and__3657__auto____$1)
{if(cljs.core.truth_(s))
{return (((s - (function (){var G__9635 = j;return (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(G__9635) : b.call(null,G__9635));
})()) - (((((function (){var G__9636 = j;return (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(G__9636) : a.call(null,G__9636));
})() + (1)) === (function (){var G__9637 = j;return (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(G__9637) : b.call(null,G__9637));
})()))?(1):(0))) <= (n - j));
} else
{return true;
}
} else
{return and__3657__auto____$1;
}
} else
{return and__3657__auto__;
}
})())
{return j;
} else
{{
var G__9645 = (j - (1));
j = G__9645;
continue;
}
}
break;
}
})();if((j === (0)))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = major_system.combinatorics.update(a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - ((function (){var G__9639 = j;return (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(G__9639) : b.call(null,G__9639));
})() + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__9640 = j;return (a__$1.cljs$core$IFn$_invoke$arity$1 ? a__$1.cljs$core$IFn$_invoke$arity$1(G__9640) : a__$1.call(null,G__9640));
})(),(function (){var G__9641 = j;return (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(G__9641) : b.call(null,G__9641));
})()))?(1):(0)))):null);var vec__9638 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + (1));var current_max = ((function (){var G__9642 = j;return (b__$1.cljs$core$IFn$_invoke$arity$1 ? b__$1.cljs$core$IFn$_invoke$arity$1(G__9642) : b__$1.call(null,G__9642));
})() + ((((function (){var G__9643 = j;return (b__$1.cljs$core$IFn$_invoke$arity$1 ? b__$1.cljs$core$IFn$_invoke$arity$1(G__9643) : b__$1.call(null,G__9643));
})() === (function (){var G__9644 = j;return (a__$2.cljs$core$IFn$_invoke$arity$1 ? a__$2.cljs$core$IFn$_invoke$arity$1(G__9644) : a__$2.call(null,G__9644));
})()))?(1):(0)));while(true){
if((i === n))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else
{if(cljs.core.truth_((function (){var and__3657__auto__ = s;if(cljs.core.truth_(and__3657__auto__))
{return (i > ((n - x) - (1)));
} else
{return and__3657__auto__;
}
})()))
{var new_a_i = ((i - n) + s);{
var G__9646 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,new_a_i);
var G__9647 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__9648 = (i + (1));
var G__9649 = (function (){var x__3976__auto__ = current_max;var y__3977__auto__ = (new_a_i + (1));return ((x__3976__auto__ > y__3977__auto__) ? x__3976__auto__ : y__3977__auto__);
})();
a__$2 = G__9646;
b__$1 = G__9647;
i = G__9648;
current_max = G__9649;
continue;
}
} else
{{
var G__9650 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,(0));
var G__9651 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__9652 = (i + (1));
var G__9653 = current_max;
a__$2 = G__9650;
b__$1 = G__9651;
i = G__9652;
current_max = G__9653;
continue;
}

}
}
break;
}
})();var a__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9638,(0),null);var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9638,(1),null);return growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__9654){var map__9662 = p__9654;var map__9662__$1 = ((cljs.core.seq_QMARK_(map__9662))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9662):map__9662);var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9662__$1,cljs.core.constant$keyword$15);var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9662__$1,cljs.core.constant$keyword$16);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(0)))
{if((((function (){var or__3669__auto__ = from;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return (0);
}
})() <= (0))) && (((0) <= (function (){var or__3669__auto__ = to;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return (0);
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var from__$1 = (cljs.core.truth_((function (){var and__3657__auto__ = from;if(cljs.core.truth_(and__3657__auto__))
{return (from <= (1));
} else
{return and__3657__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__3657__auto__ = to;if(cljs.core.truth_(and__3657__auto__))
{return (to >= N);
} else
{return and__3657__auto__;
}
})())?null:to);if(!((((1) <= (function (){var or__3669__auto__ = from__$1;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return (1);
}
})())) && ((((function (){var or__3669__auto__ = from__$1;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return (1);
}
})() <= (function (){var or__3669__auto__ = to__$1;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return N;
}
})())) && (((function (){var or__3669__auto__ = to__$1;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
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
{var growth_strings = major_system.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3(N,to__$1,from__$1);var iter__4407__auto__ = ((function (growth_strings,from__$1,to__$1,map__9662,map__9662__$1,from,to){
return (function iter__9663(s__9664){return (new cljs.core.LazySeq(null,((function (growth_strings,from__$1,to__$1,map__9662,map__9662__$1,from,to){
return (function (){var s__9664__$1 = s__9664;while(true){
var temp__4126__auto__ = cljs.core.seq(s__9664__$1);if(temp__4126__auto__)
{var s__9664__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__9664__$2))
{var c__4405__auto__ = cljs.core.chunk_first(s__9664__$2);var size__4406__auto__ = cljs.core.count(c__4405__auto__);var b__9666 = cljs.core.chunk_buffer(size__4406__auto__);if((function (){var i__9665 = (0);while(true){
if((i__9665 < size__4406__auto__))
{var growth_string = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4405__auto__,i__9665);var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));cljs.core.chunk_append(b__9666,cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))));
{
var G__9669 = (i__9665 + (1));
i__9665 = G__9669;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9666),iter__9663(cljs.core.chunk_rest(s__9664__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9666),null);
}
} else
{var growth_string = cljs.core.first(s__9664__$2);var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))),iter__9663(cljs.core.rest(s__9664__$2)));
}
} else
{return null;
}
break;
}
});})(growth_strings,from__$1,to__$1,map__9662,map__9662__$1,from,to))
,null,null));
});})(growth_strings,from__$1,to__$1,map__9662,map__9662__$1,from,to))
;return iter__4407__auto__(growth_strings);

}
}
}
}
}
};
var lex_partitions_H = function (N,var_args){
var p__9654 = null;if (arguments.length > 1) {
  p__9654 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__9654);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__9670){
var N = cljs.core.first(arglist__9670);
var p__9654 = cljs.core.rest(arglist__9670);
return lex_partitions_H__delegate(N,p__9654);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
major_system.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec(items);var N = cljs.core.count(items__$1);var lex = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(major_system.combinatorics.lex_partitions_H,N,args);var iter__4407__auto__ = ((function (items__$1,N,lex){
return (function iter__9717(s__9718){return (new cljs.core.LazySeq(null,((function (items__$1,N,lex){
return (function (){var s__9718__$1 = s__9718;while(true){
var temp__4126__auto__ = cljs.core.seq(s__9718__$1);if(temp__4126__auto__)
{var s__9718__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__9718__$2))
{var c__4405__auto__ = cljs.core.chunk_first(s__9718__$2);var size__4406__auto__ = cljs.core.count(c__4405__auto__);var b__9720 = cljs.core.chunk_buffer(size__4406__auto__);if((function (){var i__9719 = (0);while(true){
if((i__9719 < size__4406__auto__))
{var parts = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4405__auto__,i__9719);cljs.core.chunk_append(b__9720,(function (){var iter__4407__auto__ = ((function (i__9719,parts,c__4405__auto__,size__4406__auto__,b__9720,s__9718__$2,temp__4126__auto__,items__$1,N,lex){
return (function iter__9743(s__9744){return (new cljs.core.LazySeq(null,((function (i__9719,parts,c__4405__auto__,size__4406__auto__,b__9720,s__9718__$2,temp__4126__auto__,items__$1,N,lex){
return (function (){var s__9744__$1 = s__9744;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__9744__$1);if(temp__4126__auto____$1)
{var s__9744__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9744__$2))
{var c__4405__auto____$1 = cljs.core.chunk_first(s__9744__$2);var size__4406__auto____$1 = cljs.core.count(c__4405__auto____$1);var b__9746 = cljs.core.chunk_buffer(size__4406__auto____$1);if((function (){var i__9745 = (0);while(true){
if((i__9745 < size__4406__auto____$1))
{var part = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4405__auto____$1,i__9745);cljs.core.chunk_append(b__9746,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__9745,i__9719,part,c__4405__auto____$1,size__4406__auto____$1,b__9746,s__9744__$2,temp__4126__auto____$1,parts,c__4405__auto__,size__4406__auto__,b__9720,s__9718__$2,temp__4126__auto__,items__$1,N,lex){
return (function (v,o){return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__9751 = o;return (items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(G__9751) : items__$1.call(null,G__9751));
})());
});})(i__9745,i__9719,part,c__4405__auto____$1,size__4406__auto____$1,b__9746,s__9744__$2,temp__4126__auto____$1,parts,c__4405__auto__,size__4406__auto__,b__9720,s__9718__$2,temp__4126__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));
{
var G__9763 = (i__9745 + (1));
i__9745 = G__9763;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9746),iter__9743(cljs.core.chunk_rest(s__9744__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9746),null);
}
} else
{var part = cljs.core.first(s__9744__$2);return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__9719,part,s__9744__$2,temp__4126__auto____$1,parts,c__4405__auto__,size__4406__auto__,b__9720,s__9718__$2,temp__4126__auto__,items__$1,N,lex){
return (function (v,o){return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__9752 = o;return (items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(G__9752) : items__$1.call(null,G__9752));
})());
});})(i__9719,part,s__9744__$2,temp__4126__auto____$1,parts,c__4405__auto__,size__4406__auto__,b__9720,s__9718__$2,temp__4126__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),iter__9743(cljs.core.rest(s__9744__$2)));
}
} else
{return null;
}
break;
}
});})(i__9719,parts,c__4405__auto__,size__4406__auto__,b__9720,s__9718__$2,temp__4126__auto__,items__$1,N,lex))
,null,null));
});})(i__9719,parts,c__4405__auto__,size__4406__auto__,b__9720,s__9718__$2,temp__4126__auto__,items__$1,N,lex))
;return iter__4407__auto__(parts);
})());
{
var G__9764 = (i__9719 + (1));
i__9719 = G__9764;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9720),iter__9717(cljs.core.chunk_rest(s__9718__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9720),null);
}
} else
{var parts = cljs.core.first(s__9718__$2);return cljs.core.cons((function (){var iter__4407__auto__ = ((function (parts,s__9718__$2,temp__4126__auto__,items__$1,N,lex){
return (function iter__9753(s__9754){return (new cljs.core.LazySeq(null,((function (parts,s__9718__$2,temp__4126__auto__,items__$1,N,lex){
return (function (){var s__9754__$1 = s__9754;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__9754__$1);if(temp__4126__auto____$1)
{var s__9754__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9754__$2))
{var c__4405__auto__ = cljs.core.chunk_first(s__9754__$2);var size__4406__auto__ = cljs.core.count(c__4405__auto__);var b__9756 = cljs.core.chunk_buffer(size__4406__auto__);if((function (){var i__9755 = (0);while(true){
if((i__9755 < size__4406__auto__))
{var part = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4405__auto__,i__9755);cljs.core.chunk_append(b__9756,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__9755,part,c__4405__auto__,size__4406__auto__,b__9756,s__9754__$2,temp__4126__auto____$1,parts,s__9718__$2,temp__4126__auto__,items__$1,N,lex){
return (function (v,o){return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__9761 = o;return (items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(G__9761) : items__$1.call(null,G__9761));
})());
});})(i__9755,part,c__4405__auto__,size__4406__auto__,b__9756,s__9754__$2,temp__4126__auto____$1,parts,s__9718__$2,temp__4126__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));
{
var G__9765 = (i__9755 + (1));
i__9755 = G__9765;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9756),iter__9753(cljs.core.chunk_rest(s__9754__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9756),null);
}
} else
{var part = cljs.core.first(s__9754__$2);return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (part,s__9754__$2,temp__4126__auto____$1,parts,s__9718__$2,temp__4126__auto__,items__$1,N,lex){
return (function (v,o){return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__9762 = o;return (items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(G__9762) : items__$1.call(null,G__9762));
})());
});})(part,s__9754__$2,temp__4126__auto____$1,parts,s__9718__$2,temp__4126__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),iter__9753(cljs.core.rest(s__9754__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__9718__$2,temp__4126__auto__,items__$1,N,lex))
,null,null));
});})(parts,s__9718__$2,temp__4126__auto__,items__$1,N,lex))
;return iter__4407__auto__(parts);
})(),iter__9717(cljs.core.rest(s__9718__$2)));
}
} else
{return null;
}
break;
}
});})(items__$1,N,lex))
,null,null));
});})(items__$1,N,lex))
;return iter__4407__auto__(lex);
};
var partitions_H = function (items,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_H__delegate.call(this,items,args);};
partitions_H.cljs$lang$maxFixedArity = 1;
partitions_H.cljs$lang$applyTo = (function (arglist__9766){
var items = cljs.core.first(arglist__9766);
var args = cljs.core.rest(arglist__9766);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
major_system.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(multiset));var m = cljs.core.count(multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__9911 = (function (){var j = (0);var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__10044 = (j + (1));
var G__10045 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,j,(j + (1)));
var G__10046 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,j,(function (){var G__9912 = (j + (1));return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__9912) : multiset.call(null,G__9912));
})());
var G__10047 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,j,(function (){var G__9913 = (j + (1));return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__9913) : multiset.call(null,G__9913));
})());
j = G__10044;
c__$1 = G__10045;
u__$1 = G__10046;
v__$1 = G__10047;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9911,(0),null);var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9911,(1),null);var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9911,(2),null);var a = (0);var b = m;var l = (0);var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,(0),(0),cljs.core.array_seq([(1),m], 0));var stack = cljs.core.List.EMPTY;return multiset_partitions_M.cljs$core$IFn$_invoke$arity$11(n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__9914 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,k,((function (){var G__9915 = j;return (u__$1.cljs$core$IFn$_invoke$arity$1 ? u__$1.cljs$core$IFn$_invoke$arity$1(G__9915) : u__$1.call(null,G__9915));
})() - (function (){var G__9916 = j;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__9916) : v__$1.call(null,G__9916));
})()));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__9917 = k;return (u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(G__9917) : u__$2.call(null,G__9917));
})(),(0)))
{{
var G__10048 = (j + (1));
var G__10049 = k;
var G__10050 = true;
var G__10051 = u__$2;
var G__10052 = v__$1;
var G__10053 = c__$1;
j = G__10048;
k = G__10049;
x = G__10050;
u__$1 = G__10051;
v__$1 = G__10052;
c__$1 = G__10053;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,k,(function (){var G__9918 = j;return (c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(G__9918) : c__$1.call(null,G__9918));
})());var v__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,k,(function (){var x__3983__auto__ = (function (){var G__9919 = j;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__9919) : v__$1.call(null,G__9919));
})();var y__3984__auto__ = (function (){var G__9920 = k;return (u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(G__9920) : u__$2.call(null,G__9920));
})();return ((x__3983__auto__ < y__3984__auto__) ? x__3983__auto__ : y__3984__auto__);
})());var x__$1 = ((function (){var G__9921 = k;return (u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(G__9921) : u__$2.call(null,G__9921));
})() < (function (){var G__9922 = j;return (v__$2.cljs$core$IFn$_invoke$arity$1 ? v__$2.cljs$core$IFn$_invoke$arity$1(G__9922) : v__$2.call(null,G__9922));
})());var k__$1 = (k + (1));var j__$1 = (j + (1));{
var G__10054 = j__$1;
var G__10055 = k__$1;
var G__10056 = x__$1;
var G__10057 = u__$2;
var G__10058 = v__$2;
var G__10059 = c__$2;
j = G__10054;
k = G__10055;
x = G__10056;
u__$1 = G__10057;
v__$1 = G__10058;
c__$1 = G__10059;
continue;
}
} else
{var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,k,(function (){var G__9923 = j;return (c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(G__9923) : c__$1.call(null,G__9923));
})());var v__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,k,(function (){var G__9924 = k;return (u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(G__9924) : u__$2.call(null,G__9924));
})());var k__$1 = (k + (1));var j__$1 = (j + (1));{
var G__10060 = j__$1;
var G__10061 = k__$1;
var G__10062 = x;
var G__10063 = u__$2;
var G__10064 = v__$2;
var G__10065 = c__$2;
j = G__10060;
k = G__10061;
x = G__10062;
u__$1 = G__10063;
v__$1 = G__10064;
c__$1 = G__10065;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9914,(0),null);var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9914,(1),null);var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9914,(2),null);var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9914,(3),null);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9914,(4),null);if(cljs.core.truth_((function (){var and__3657__auto__ = r;if(cljs.core.truth_(and__3657__auto__))
{return ((k > b)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,(r - (1))));
} else
{return and__3657__auto__;
}
})()))
{var G__9925 = n;var G__9926 = m;var G__9927 = f;var G__9928 = c__$1;var G__9929 = u__$1;var G__9930 = v__$1;var G__9931 = a;var G__9932 = b;var G__9933 = l;var G__9934 = r;var G__9935 = s;return (major_system.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? major_system.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(G__9925,G__9926,G__9927,G__9928,G__9929,G__9930,G__9931,G__9932,G__9933,G__9934,G__9935) : major_system.combinatorics.m5.call(null,G__9925,G__9926,G__9927,G__9928,G__9929,G__9930,G__9931,G__9932,G__9933,G__9934,G__9935));
} else
{if(cljs.core.truth_((function (){var and__3657__auto__ = s;if(cljs.core.truth_(and__3657__auto__))
{return ((k <= b)) && (((l + (1)) < s));
} else
{return and__3657__auto__;
}
})()))
{var G__9936 = n;var G__9937 = m;var G__9938 = f;var G__9939 = c__$1;var G__9940 = u__$1;var G__9941 = v__$1;var G__9942 = a;var G__9943 = b;var G__9944 = l;var G__9945 = r;var G__9946 = s;return (major_system.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? major_system.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(G__9936,G__9937,G__9938,G__9939,G__9940,G__9941,G__9942,G__9943,G__9944,G__9945,G__9946) : major_system.combinatorics.m5.call(null,G__9936,G__9937,G__9938,G__9939,G__9940,G__9941,G__9942,G__9943,G__9944,G__9945,G__9946));
} else
{if((k > b))
{var a__$1 = b;var b__$1 = k;var l__$1 = (l + (1));var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,(l__$1 + (1)),b__$1);{
var G__10066 = n;
var G__10067 = m;
var G__10068 = f__$1;
var G__10069 = c__$1;
var G__10070 = u__$1;
var G__10071 = v__$1;
var G__10072 = a__$1;
var G__10073 = b__$1;
var G__10074 = l__$1;
var G__10075 = r;
var G__10076 = s;
n = G__10066;
m = G__10067;
f = G__10068;
c = G__10069;
u = G__10070;
v = G__10071;
a = G__10072;
b = G__10073;
l = G__10074;
r = G__10075;
s = G__10076;
continue;
}
} else
{var part = (function (){var iter__4407__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,vec__9914,u__$1,v__$1,c__$1,j,k){
return (function iter__9947(s__9948){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,vec__9914,u__$1,v__$1,c__$1,j,k){
return (function (){var s__9948__$1 = s__9948;while(true){
var temp__4126__auto__ = cljs.core.seq(s__9948__$1);if(temp__4126__auto__)
{var s__9948__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__9948__$2))
{var c__4405__auto__ = cljs.core.chunk_first(s__9948__$2);var size__4406__auto__ = cljs.core.count(c__4405__auto__);var b__9950 = cljs.core.chunk_buffer(size__4406__auto__);if((function (){var i__9949 = (0);while(true){
if((i__9949 < size__4406__auto__))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4405__auto__,i__9949);cljs.core.chunk_append(b__9950,(function (){var first_col = (function (){var G__9993 = y;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__9993) : f.call(null,G__9993));
})();var last_col = ((function (){var G__9994 = (y + (1));return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__9994) : f.call(null,G__9994));
})() - (1));return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4407__auto__ = ((function (i__9949,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4405__auto__,size__4406__auto__,b__9950,s__9948__$2,temp__4126__auto__,vec__9914,u__$1,v__$1,c__$1,j,k){
return (function iter__9995(s__9996){return (new cljs.core.LazySeq(null,((function (i__9949,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4405__auto__,size__4406__auto__,b__9950,s__9948__$2,temp__4126__auto__,vec__9914,u__$1,v__$1,c__$1,j,k){
return (function (){var s__9996__$1 = s__9996;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__9996__$1);if(temp__4126__auto____$1)
{var s__9996__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9996__$2))
{var c__4405__auto____$1 = cljs.core.chunk_first(s__9996__$2);var size__4406__auto____$1 = cljs.core.count(c__4405__auto____$1);var b__9998 = cljs.core.chunk_buffer(size__4406__auto____$1);if((function (){var i__9997 = (0);while(true){
if((i__9997 < size__4406__auto____$1))
{var z = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4405__auto____$1,i__9997);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__10007 = z;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__10007) : v__$1.call(null,G__10007));
})(),(0)))
{cljs.core.chunk_append(b__9998,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__10008 = z;return (c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(G__10008) : c__$1.call(null,G__10008));
})(),(function (){var G__10009 = z;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__10009) : v__$1.call(null,G__10009));
})()], null));
{
var G__10077 = (i__9997 + (1));
i__9997 = G__10077;
continue;
}
} else
{{
var G__10078 = (i__9997 + (1));
i__9997 = G__10078;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9998),iter__9995(cljs.core.chunk_rest(s__9996__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9998),null);
}
} else
{var z = cljs.core.first(s__9996__$2);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__10010 = z;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__10010) : v__$1.call(null,G__10010));
})(),(0)))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__10011 = z;return (c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(G__10011) : c__$1.call(null,G__10011));
})(),(function (){var G__10012 = z;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__10012) : v__$1.call(null,G__10012));
})()], null),iter__9995(cljs.core.rest(s__9996__$2)));
} else
{{
var G__10079 = cljs.core.rest(s__9996__$2);
s__9996__$1 = G__10079;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__9949,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4405__auto__,size__4406__auto__,b__9950,s__9948__$2,temp__4126__auto__,vec__9914,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(i__9949,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4405__auto__,size__4406__auto__,b__9950,s__9948__$2,temp__4126__auto__,vec__9914,u__$1,v__$1,c__$1,j,k))
;return iter__4407__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})());
{
var G__10080 = (i__9949 + (1));
i__9949 = G__10080;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9950),iter__9947(cljs.core.chunk_rest(s__9948__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9950),null);
}
} else
{var y = cljs.core.first(s__9948__$2);return cljs.core.cons((function (){var first_col = (function (){var G__10013 = y;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10013) : f.call(null,G__10013));
})();var last_col = ((function (){var G__10014 = (y + (1));return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10014) : f.call(null,G__10014));
})() - (1));return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4407__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__9948__$2,temp__4126__auto__,vec__9914,u__$1,v__$1,c__$1,j,k){
return (function iter__10015(s__10016){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__9948__$2,temp__4126__auto__,vec__9914,u__$1,v__$1,c__$1,j,k){
return (function (){var s__10016__$1 = s__10016;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__10016__$1);if(temp__4126__auto____$1)
{var s__10016__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__10016__$2))
{var c__4405__auto__ = cljs.core.chunk_first(s__10016__$2);var size__4406__auto__ = cljs.core.count(c__4405__auto__);var b__10018 = cljs.core.chunk_buffer(size__4406__auto__);if((function (){var i__10017 = (0);while(true){
if((i__10017 < size__4406__auto__))
{var z = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4405__auto__,i__10017);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__10027 = z;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__10027) : v__$1.call(null,G__10027));
})(),(0)))
{cljs.core.chunk_append(b__10018,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__10028 = z;return (c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(G__10028) : c__$1.call(null,G__10028));
})(),(function (){var G__10029 = z;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__10029) : v__$1.call(null,G__10029));
})()], null));
{
var G__10081 = (i__10017 + (1));
i__10017 = G__10081;
continue;
}
} else
{{
var G__10082 = (i__10017 + (1));
i__10017 = G__10082;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__10018),iter__10015(cljs.core.chunk_rest(s__10016__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__10018),null);
}
} else
{var z = cljs.core.first(s__10016__$2);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__10030 = z;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__10030) : v__$1.call(null,G__10030));
})(),(0)))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__10031 = z;return (c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(G__10031) : c__$1.call(null,G__10031));
})(),(function (){var G__10032 = z;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__10032) : v__$1.call(null,G__10032));
})()], null),iter__10015(cljs.core.rest(s__10016__$2)));
} else
{{
var G__10083 = cljs.core.rest(s__10016__$2);
s__10016__$1 = G__10083;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__9948__$2,temp__4126__auto__,vec__9914,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__9948__$2,temp__4126__auto__,vec__9914,u__$1,v__$1,c__$1,j,k))
;return iter__4407__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})(),iter__9947(cljs.core.rest(s__9948__$2)));
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,vec__9914,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,vec__9914,u__$1,v__$1,c__$1,j,k))
;return iter__4407__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((l + (1))));
})();return cljs.core.cons(part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,part,vec__9914,u__$1,v__$1,c__$1,j,k){
return (function (){var G__10033 = n;var G__10034 = m;var G__10035 = f;var G__10036 = c__$1;var G__10037 = u__$1;var G__10038 = v__$1;var G__10039 = a;var G__10040 = b;var G__10041 = l;var G__10042 = r;var G__10043 = s;return (major_system.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? major_system.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(G__10033,G__10034,G__10035,G__10036,G__10037,G__10038,G__10039,G__10040,G__10041,G__10042,G__10043) : major_system.combinatorics.m5.call(null,G__10033,G__10034,G__10035,G__10036,G__10037,G__10038,G__10039,G__10040,G__10041,G__10042,G__10043));
});})(n,m,f,c,u,v,a,b,l,r,s,part,vec__9914,u__$1,v__$1,c__$1,j,k))
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
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__10129 = j;return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__10129) : v.call(null,G__10129));
})(),(0)))
{return j;
} else
{{
var G__10174 = (j - (1));
j = G__10174;
continue;
}
}
break;
}
})();if(cljs.core.truth_((function (){var and__3657__auto__ = r;if(cljs.core.truth_(and__3657__auto__))
{return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,a)) && (((((function (){var G__10132 = j;return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__10132) : v.call(null,G__10132));
})() - (1)) * (r - l)) < (function (){var G__10133 = j;return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__10133) : u.call(null,G__10133));
})()));
} else
{return and__3657__auto__;
}
})()))
{var G__10134 = n;var G__10135 = m;var G__10136 = f;var G__10137 = c;var G__10138 = u;var G__10139 = v;var G__10140 = a;var G__10141 = b;var G__10142 = l;var G__10143 = r;var G__10144 = s;return (major_system.combinatorics.m6.cljs$core$IFn$_invoke$arity$11 ? major_system.combinatorics.m6.cljs$core$IFn$_invoke$arity$11(G__10134,G__10135,G__10136,G__10137,G__10138,G__10139,G__10140,G__10141,G__10142,G__10143,G__10144) : major_system.combinatorics.m6.call(null,G__10134,G__10135,G__10136,G__10137,G__10138,G__10139,G__10140,G__10141,G__10142,G__10143,G__10144));
} else
{if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__10146 = j;return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__10146) : v.call(null,G__10146));
})(),(1))))
{var G__10147 = n;var G__10148 = m;var G__10149 = f;var G__10150 = c;var G__10151 = u;var G__10152 = v;var G__10153 = a;var G__10154 = b;var G__10155 = l;var G__10156 = r;var G__10157 = s;return (major_system.combinatorics.m6.cljs$core$IFn$_invoke$arity$11 ? major_system.combinatorics.m6.cljs$core$IFn$_invoke$arity$11(G__10147,G__10148,G__10149,G__10150,G__10151,G__10152,G__10153,G__10154,G__10155,G__10156,G__10157) : major_system.combinatorics.m6.call(null,G__10147,G__10148,G__10149,G__10150,G__10151,G__10152,G__10153,G__10154,G__10155,G__10156,G__10157));
} else
{var v__$1 = major_system.combinatorics.update(v,j,cljs.core.dec);var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__4407__auto__ = ((function (v__$1,j){
return (function iter__10158(s__10159){return (new cljs.core.LazySeq(null,((function (v__$1,j){
return (function (){var s__10159__$1 = s__10159;while(true){
var temp__4126__auto__ = cljs.core.seq(s__10159__$1);if(temp__4126__auto__)
{var s__10159__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__10159__$2))
{var c__4405__auto__ = cljs.core.chunk_first(s__10159__$2);var size__4406__auto__ = cljs.core.count(c__4405__auto__);var b__10161 = cljs.core.chunk_buffer(size__4406__auto__);if((function (){var i__10160 = (0);while(true){
if((i__10160 < size__4406__auto__))
{var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4405__auto__,i__10160);cljs.core.chunk_append(b__10161,((function (){var G__10168 = i;return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__10168) : u.call(null,G__10168));
})() - (function (){var G__10169 = i;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__10169) : v__$1.call(null,G__10169));
})()));
{
var G__10175 = (i__10160 + (1));
i__10160 = G__10175;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__10161),iter__10158(cljs.core.chunk_rest(s__10159__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__10161),null);
}
} else
{var i = cljs.core.first(s__10159__$2);return cljs.core.cons(((function (){var G__10170 = i;return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__10170) : u.call(null,G__10170));
})() - (function (){var G__10171 = i;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__10171) : v__$1.call(null,G__10171));
})()),iter__10158(cljs.core.rest(s__10159__$2)));
}
} else
{return null;
}
break;
}
});})(v__$1,j))
,null,null));
});})(v__$1,j))
;return iter__4407__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(a,(j + (1))));
})()):null);var v__$2 = (function (){var ks = cljs.core.range.cljs$core$IFn$_invoke$arity$2((j + (1)),b);var v__$2 = v__$1;while(true){
if(cljs.core.empty_QMARK_(ks))
{return v__$2;
} else
{var k = cljs.core.first(ks);{
var G__10176 = cljs.core.rest(ks);
var G__10177 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$2,k,(function (){var G__10172 = k;return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__10172) : u.call(null,G__10172));
})());
ks = G__10176;
v__$2 = G__10177;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + (1))):(0));var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__3976__auto__ = (0);var y__3977__auto__ = (min_partitions_after_this - diff_uv);return ((x__3976__auto__ > y__3977__auto__) ? x__3976__auto__ : y__3977__auto__);
})():(0));var v__$3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(amount_to_dec,(0)))?v__$2:(function (){var k_1 = (b - (1));var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = (function (){var G__10173 = k_1;return (v__$3.cljs$core$IFn$_invoke$arity$1 ? v__$3.cljs$core$IFn$_invoke$arity$1(G__10173) : v__$3.call(null,G__10173));
})();if((amount > vk))
{{
var G__10178 = (k_1 - (1));
var G__10179 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$3,k_1,(0));
var G__10180 = (amount - vk);
k_1 = G__10178;
v__$3 = G__10179;
amount = G__10180;
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
{var l__$1 = (l - (1));var b__$1 = a;var a__$1 = (function (){var G__10182 = l__$1;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10182) : f.call(null,G__10182));
})();return major_system.combinatorics.m5(n,m,f,c,u,v,a__$1,b__$1,l__$1,r,s);
}
});
/**
* @param {...*} var_args
*/
major_system.combinatorics.partitions_M = (function() { 
var partitions_M__delegate = function (items,p__10183){var map__10277 = p__10183;var map__10277__$1 = ((cljs.core.seq_QMARK_(map__10277))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10277):map__10277);var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10277__$1,cljs.core.constant$keyword$15);var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10277__$1,cljs.core.constant$keyword$16);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(items),(0)))
{if((((function (){var or__3669__auto__ = from;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return (0);
}
})() <= (0))) && (((0) <= (function (){var or__3669__auto__ = to;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return (0);
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var items__$1 = cljs.core.vec(items);var ditems = cljs.core.vec(cljs.core.distinct(items__$1));var freqs = cljs.core.frequencies(items__$1);var N = cljs.core.count(items__$1);var M = cljs.core.count(ditems);var from__$1 = (cljs.core.truth_((function (){var and__3657__auto__ = from;if(cljs.core.truth_(and__3657__auto__))
{return (from <= (1));
} else
{return and__3657__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__3657__auto__ = to;if(cljs.core.truth_(and__3657__auto__))
{return (to >= N);
} else
{return and__3657__auto__;
}
})())?null:to);if(!((((1) <= (function (){var or__3669__auto__ = from__$1;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return (1);
}
})())) && ((((function (){var or__3669__auto__ = from__$1;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return (1);
}
})() <= (function (){var or__3669__auto__ = to__$1;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return N;
}
})())) && (((function (){var or__3669__auto__ = to__$1;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return N;
}
})() <= N)))))
{return cljs.core.List.EMPTY;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(1)))
{return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.first(items__$1)))))))))));
} else
{var start_multiset = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4407__auto__ = ((function (items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10277,map__10277__$1,from,to){
return (function iter__10278(s__10279){return (new cljs.core.LazySeq(null,((function (items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10277,map__10277__$1,from,to){
return (function (){var s__10279__$1 = s__10279;while(true){
var temp__4126__auto__ = cljs.core.seq(s__10279__$1);if(temp__4126__auto__)
{var s__10279__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__10279__$2))
{var c__4405__auto__ = cljs.core.chunk_first(s__10279__$2);var size__4406__auto__ = cljs.core.count(c__4405__auto__);var b__10281 = cljs.core.chunk_buffer(size__4406__auto__);if((function (){var i__10280 = (0);while(true){
if((i__10280 < size__4406__auto__))
{var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4405__auto__,i__10280);var j = (i + (1));cljs.core.chunk_append(b__10281,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__10288 = (function (){var G__10289 = i;return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__10289) : ditems.call(null,G__10289));
})();return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__10288) : freqs.call(null,G__10288));
})()], null));
{
var G__10370 = (i__10280 + (1));
i__10280 = G__10370;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__10281),iter__10278(cljs.core.chunk_rest(s__10279__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__10281),null);
}
} else
{var i = cljs.core.first(s__10279__$2);var j = (i + (1));return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__10290 = (function (){var G__10291 = i;return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__10291) : ditems.call(null,G__10291));
})();return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__10290) : freqs.call(null,G__10290));
})()], null),iter__10278(cljs.core.rest(s__10279__$2)));
}
} else
{return null;
}
break;
}
});})(items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10277,map__10277__$1,from,to))
,null,null));
});})(items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10277,map__10277__$1,from,to))
;return iter__4407__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(M));
})());var parts = major_system.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3(start_multiset,to__$1,from__$1);var iter__4407__auto__ = ((function (start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10277,map__10277__$1,from,to){
return (function iter__10292(s__10293){return (new cljs.core.LazySeq(null,((function (start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10277,map__10277__$1,from,to){
return (function (){var s__10293__$1 = s__10293;while(true){
var temp__4126__auto__ = cljs.core.seq(s__10293__$1);if(temp__4126__auto__)
{var s__10293__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__10293__$2))
{var c__4405__auto__ = cljs.core.chunk_first(s__10293__$2);var size__4406__auto__ = cljs.core.count(c__4405__auto__);var b__10295 = cljs.core.chunk_buffer(size__4406__auto__);if((function (){var i__10294 = (0);while(true){
if((i__10294 < size__4406__auto__))
{var part = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4405__auto__,i__10294);cljs.core.chunk_append(b__10295,(function (){var iter__4407__auto__ = ((function (i__10294,part,c__4405__auto__,size__4406__auto__,b__10295,s__10293__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10277,map__10277__$1,from,to){
return (function iter__10334(s__10335){return (new cljs.core.LazySeq(null,((function (i__10294,part,c__4405__auto__,size__4406__auto__,b__10295,s__10293__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10277,map__10277__$1,from,to){
return (function (){var s__10335__$1 = s__10335;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__10335__$1);if(temp__4126__auto____$1)
{var s__10335__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__10335__$2))
{var c__4405__auto____$1 = cljs.core.chunk_first(s__10335__$2);var size__4406__auto____$1 = cljs.core.count(c__4405__auto____$1);var b__10337 = cljs.core.chunk_buffer(size__4406__auto____$1);if((function (){var i__10336 = (0);while(true){
if((i__10336 < size__4406__auto____$1))
{var multiset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4405__auto____$1,i__10336);cljs.core.chunk_append(b__10337,cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (i__10336,i__10294,multiset,c__4405__auto____$1,size__4406__auto____$1,b__10337,s__10335__$2,temp__4126__auto____$1,part,c__4405__auto__,size__4406__auto__,b__10295,s__10293__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10277,map__10277__$1,from,to){
return (function (p__10346){var vec__10347 = p__10346;var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10347,(0),null);var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10347,(1),null);return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__10348 = (index - (1));return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__10348) : ditems.call(null,G__10348));
})());
});})(i__10336,i__10294,multiset,c__4405__auto____$1,size__4406__auto____$1,b__10337,s__10335__$2,temp__4126__auto____$1,part,c__4405__auto__,size__4406__auto__,b__10295,s__10293__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10277,map__10277__$1,from,to))
,cljs.core.array_seq([multiset], 0))));
{
var G__10371 = (i__10336 + (1));
i__10336 = G__10371;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__10337),iter__10334(cljs.core.chunk_rest(s__10335__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__10337),null);
}
} else
{var multiset = cljs.core.first(s__10335__$2);return cljs.core.cons(cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (i__10294,multiset,s__10335__$2,temp__4126__auto____$1,part,c__4405__auto__,size__4406__auto__,b__10295,s__10293__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10277,map__10277__$1,from,to){
return (function (p__10349){var vec__10350 = p__10349;var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10350,(0),null);var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10350,(1),null);return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__10351 = (index - (1));return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__10351) : ditems.call(null,G__10351));
})());
});})(i__10294,multiset,s__10335__$2,temp__4126__auto____$1,part,c__4405__auto__,size__4406__auto__,b__10295,s__10293__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10277,map__10277__$1,from,to))
,cljs.core.array_seq([multiset], 0))),iter__10334(cljs.core.rest(s__10335__$2)));
}
} else
{return null;
}
break;
}
});})(i__10294,part,c__4405__auto__,size__4406__auto__,b__10295,s__10293__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10277,map__10277__$1,from,to))
,null,null));
});})(i__10294,part,c__4405__auto__,size__4406__auto__,b__10295,s__10293__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10277,map__10277__$1,from,to))
;return iter__4407__auto__(part);
})());
{
var G__10372 = (i__10294 + (1));
i__10294 = G__10372;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__10295),iter__10292(cljs.core.chunk_rest(s__10293__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__10295),null);
}
} else
{var part = cljs.core.first(s__10293__$2);return cljs.core.cons((function (){var iter__4407__auto__ = ((function (part,s__10293__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10277,map__10277__$1,from,to){
return (function iter__10352(s__10353){return (new cljs.core.LazySeq(null,((function (part,s__10293__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10277,map__10277__$1,from,to){
return (function (){var s__10353__$1 = s__10353;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__10353__$1);if(temp__4126__auto____$1)
{var s__10353__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__10353__$2))
{var c__4405__auto__ = cljs.core.chunk_first(s__10353__$2);var size__4406__auto__ = cljs.core.count(c__4405__auto__);var b__10355 = cljs.core.chunk_buffer(size__4406__auto__);if((function (){var i__10354 = (0);while(true){
if((i__10354 < size__4406__auto__))
{var multiset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4405__auto__,i__10354);cljs.core.chunk_append(b__10355,cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (i__10354,multiset,c__4405__auto__,size__4406__auto__,b__10355,s__10353__$2,temp__4126__auto____$1,part,s__10293__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10277,map__10277__$1,from,to){
return (function (p__10364){var vec__10365 = p__10364;var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10365,(0),null);var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10365,(1),null);return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__10366 = (index - (1));return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__10366) : ditems.call(null,G__10366));
})());
});})(i__10354,multiset,c__4405__auto__,size__4406__auto__,b__10355,s__10353__$2,temp__4126__auto____$1,part,s__10293__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10277,map__10277__$1,from,to))
,cljs.core.array_seq([multiset], 0))));
{
var G__10373 = (i__10354 + (1));
i__10354 = G__10373;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__10355),iter__10352(cljs.core.chunk_rest(s__10353__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__10355),null);
}
} else
{var multiset = cljs.core.first(s__10353__$2);return cljs.core.cons(cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (multiset,s__10353__$2,temp__4126__auto____$1,part,s__10293__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10277,map__10277__$1,from,to){
return (function (p__10367){var vec__10368 = p__10367;var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10368,(0),null);var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10368,(1),null);return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__10369 = (index - (1));return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__10369) : ditems.call(null,G__10369));
})());
});})(multiset,s__10353__$2,temp__4126__auto____$1,part,s__10293__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10277,map__10277__$1,from,to))
,cljs.core.array_seq([multiset], 0))),iter__10352(cljs.core.rest(s__10353__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__10293__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10277,map__10277__$1,from,to))
,null,null));
});})(part,s__10293__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10277,map__10277__$1,from,to))
;return iter__4407__auto__(part);
})(),iter__10292(cljs.core.rest(s__10293__$2)));
}
} else
{return null;
}
break;
}
});})(start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10277,map__10277__$1,from,to))
,null,null));
});})(start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__10277,map__10277__$1,from,to))
;return iter__4407__auto__(parts);

}
}
}
};
var partitions_M = function (items,var_args){
var p__10183 = null;if (arguments.length > 1) {
  p__10183 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__10183);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__10374){
var items = cljs.core.first(arglist__10374);
var p__10183 = cljs.core.rest(arglist__10374);
return partitions_M__delegate(items,p__10183);
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
partitions.cljs$lang$applyTo = (function (arglist__10375){
var items = cljs.core.first(arglist__10375);
var args = cljs.core.rest(arglist__10375);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;
