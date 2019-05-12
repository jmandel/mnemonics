// Compiled by ClojureScript 0.0-2356
goog.provide('major_system.combinatorics');
goog.require('cljs.core');
major_system.combinatorics.index_combinations = (function index_combinations(n,cnt){return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec(cljs.core.cons(null,(function (){var iter__4407__auto__ = (function iter__16748(s__16749){return (new cljs.core.LazySeq(null,(function (){var s__16749__$1 = s__16749;while(true){
var temp__4126__auto__ = cljs.core.seq(s__16749__$1);if(temp__4126__auto__)
{var s__16749__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__16749__$2))
{var c__4405__auto__ = cljs.core.chunk_first(s__16749__$2);var size__4406__auto__ = cljs.core.count(c__4405__auto__);var b__16751 = cljs.core.chunk_buffer(size__4406__auto__);if((function (){var i__16750 = (0);while(true){
if((i__16750 < size__4406__auto__))
{var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4405__auto__,i__16750);cljs.core.chunk_append(b__16751,((j + cnt) + (- (n + (1)))));
{
var G__16766 = (i__16750 + (1));
i__16750 = G__16766;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__16751),iter__16748(cljs.core.chunk_rest(s__16749__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__16751),null);
}
} else
{var j = cljs.core.first(s__16749__$2);return cljs.core.cons(((j + cnt) + (- (n + (1)))),iter__16748(cljs.core.rest(s__16749__$2)));
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
{var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,j,((function (){var G__16757 = j;return (c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(G__16757) : c__$1.call(null,G__16757));
})() - (1)));if(((function (){var G__16758 = j;return (c__$2.cljs$core$IFn$_invoke$arity$1 ? c__$2.cljs$core$IFn$_invoke$arity$1(G__16758) : c__$2.call(null,G__16758));
})() < j))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$2,(j + (1))], null);
} else
{var c__$3 = c__$2;var j__$1 = j;while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j__$1,(1)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$3,j__$1], null);
} else
{{
var G__16767 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$3,(j__$1 - (1)),((function (){var G__16759 = j__$1;return (c__$3.cljs$core$IFn$_invoke$arity$1 ? c__$3.cljs$core$IFn$_invoke$arity$1(G__16759) : c__$3.call(null,G__16759));
})() - (1)));
var G__16768 = (j__$1 - (1));
c__$3 = G__16767;
j__$1 = G__16768;
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
{return step((function (){var G__16764 = (0);return (next_step.cljs$core$IFn$_invoke$arity$1 ? next_step.cljs$core$IFn$_invoke$arity$1(G__16764) : next_step.call(null,G__16764));
})(),(function (){var G__16765 = (1);return (next_step.cljs$core$IFn$_invoke$arity$1 ? next_step.cljs$core$IFn$_invoke$arity$1(G__16765) : next_step.call(null,G__16765));
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
return (function (p1__16769_SHARP_){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v_items,p1__16769_SHARP_);
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
{var temp__4124__auto__ = cljs.core.next((function (){var G__16779 = i;return (v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(G__16779) : v_seqs__$2.call(null,G__16779));
})());if(temp__4124__auto__)
{var rst = temp__4124__auto__;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else
{{
var G__16781 = (i - (1));
var G__16782 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(function (){var G__16780 = i;return (v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(G__16780) : v_original_seqs.call(null,G__16780));
})());
i = G__16781;
v_seqs__$2 = G__16782;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__16783){
var seqs = cljs.core.seq(arglist__16783);
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
{if(((function (){var G__16791 = i;return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__16791) : v.call(null,G__16791));
})() < (function (){var G__16792 = (i + (1));return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__16792) : v.call(null,G__16792));
})()))
{return i;
} else
{{
var G__16798 = (i - (1));
i = G__16798;
continue;
}

}
}
break;
}
})();if(cljs.core.truth_(j))
{var vj = (function (){var G__16793 = j;return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__16793) : v.call(null,G__16793));
})();var l = (function (){var i = (len - (1));while(true){
if((vj < (function (){var G__16794 = i;return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__16794) : v.call(null,G__16794));
})()))
{return i;
} else
{{
var G__16799 = (i - (1));
i = G__16799;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v,j,(function (){var G__16795 = l;return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__16795) : v.call(null,G__16795));
})(),cljs.core.array_seq([l,vj], 0));var k = (j + (1));var l__$1 = (len - (1));while(true){
if((k < l__$1))
{{
var G__16800 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v__$1,k,(function (){var G__16796 = l__$1;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__16796) : v__$1.call(null,G__16796));
})(),cljs.core.array_seq([l__$1,(function (){var G__16797 = k;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__16797) : v__$1.call(null,G__16797));
})()], 0));
var G__16801 = (k + (1));
var G__16802 = (l__$1 - (1));
v__$1 = G__16800;
k = G__16801;
l__$1 = G__16802;
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
return (function iter__16818(s__16819){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__16819__$1 = s__16819;while(true){
var temp__4126__auto__ = cljs.core.seq(s__16819__$1);if(temp__4126__auto__)
{var s__16819__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__16819__$2))
{var c__4405__auto__ = cljs.core.chunk_first(s__16819__$2);var size__4406__auto__ = cljs.core.count(c__4405__auto__);var b__16821 = cljs.core.chunk_buffer(size__4406__auto__);if((function (){var i__16820 = (0);while(true){
if((i__16820 < size__4406__auto__))
{var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4405__auto__,i__16820);cljs.core.chunk_append(b__16821,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__16828 = (function (){var G__16829 = i;return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__16829) : v.call(null,G__16829));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16828) : f.call(null,G__16828));
})(),i));
{
var G__16832 = (i__16820 + (1));
i__16820 = G__16832;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__16821),iter__16818(cljs.core.chunk_rest(s__16819__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__16821),null);
}
} else
{var i = cljs.core.first(s__16819__$2);return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__16830 = (function (){var G__16831 = i;return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__16831) : v.call(null,G__16831));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16830) : f.call(null,G__16830));
})(),i),iter__16818(cljs.core.rest(s__16819__$2)));
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
return (function (p1__16833_SHARP_){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,p1__16833_SHARP_);
});})(v))
,major_system.combinatorics.lex_permutations(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v))));
} else
{return major_system.combinatorics.multi_perm(items);

}
}
});
major_system.combinatorics.update = (function update(vec,index,f){var item = (function (){var G__16836 = index;return (vec.cljs$core$IFn$_invoke$arity$1 ? vec.cljs$core$IFn$_invoke$arity$1(G__16836) : vec.call(null,G__16836));
})();return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vec,index,(function (){var G__16837 = item;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16837) : f.call(null,G__16837));
})());
});
major_system.combinatorics.init = (function init(n,s){if(cljs.core.truth_(s))
{return cljs.core.vec((function (){var iter__4407__auto__ = (function iter__16844(s__16845){return (new cljs.core.LazySeq(null,(function (){var s__16845__$1 = s__16845;while(true){
var temp__4126__auto__ = cljs.core.seq(s__16845__$1);if(temp__4126__auto__)
{var s__16845__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__16845__$2))
{var c__4405__auto__ = cljs.core.chunk_first(s__16845__$2);var size__4406__auto__ = cljs.core.count(c__4405__auto__);var b__16847 = cljs.core.chunk_buffer(size__4406__auto__);if((function (){var i__16846 = (0);while(true){
if((i__16846 < size__4406__auto__))
{var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4405__auto__,i__16846);cljs.core.chunk_append(b__16847,(function (){var x__3976__auto__ = (0);var y__3977__auto__ = (i - ((n - s) - (-1)));return ((x__3976__auto__ > y__3977__auto__) ? x__3976__auto__ : y__3977__auto__);
})());
{
var G__16850 = (i__16846 + (1));
i__16846 = G__16850;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__16847),iter__16844(cljs.core.chunk_rest(s__16845__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__16847),null);
}
} else
{var i = cljs.core.first(s__16845__$2);return cljs.core.cons((function (){var x__3976__auto__ = (0);var y__3977__auto__ = (i - ((n - s) - (-1)));return ((x__3976__auto__ > y__3977__auto__) ? x__3976__auto__ : y__3977__auto__);
})(),iter__16844(cljs.core.rest(s__16845__$2)));
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
if((function (){var and__3657__auto__ = ((function (){var G__16886 = j;return (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(G__16886) : a.call(null,G__16886));
})() < (function (){var G__16887 = j;return (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(G__16887) : b.call(null,G__16887));
})());if(and__3657__auto__)
{var and__3657__auto____$1 = (cljs.core.truth_(r)?((function (){var G__16889 = j;return (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(G__16889) : a.call(null,G__16889));
})() < (r - (1))):true);if(and__3657__auto____$1)
{if(cljs.core.truth_(s))
{return (((s - (function (){var G__16890 = j;return (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(G__16890) : b.call(null,G__16890));
})()) - (((((function (){var G__16891 = j;return (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(G__16891) : a.call(null,G__16891));
})() + (1)) === (function (){var G__16892 = j;return (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(G__16892) : b.call(null,G__16892));
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
var G__16900 = (j - (1));
j = G__16900;
continue;
}
}
break;
}
})();if((j === (0)))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = major_system.combinatorics.update(a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - ((function (){var G__16894 = j;return (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(G__16894) : b.call(null,G__16894));
})() + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__16895 = j;return (a__$1.cljs$core$IFn$_invoke$arity$1 ? a__$1.cljs$core$IFn$_invoke$arity$1(G__16895) : a__$1.call(null,G__16895));
})(),(function (){var G__16896 = j;return (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(G__16896) : b.call(null,G__16896));
})()))?(1):(0)))):null);var vec__16893 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + (1));var current_max = ((function (){var G__16897 = j;return (b__$1.cljs$core$IFn$_invoke$arity$1 ? b__$1.cljs$core$IFn$_invoke$arity$1(G__16897) : b__$1.call(null,G__16897));
})() + ((((function (){var G__16898 = j;return (b__$1.cljs$core$IFn$_invoke$arity$1 ? b__$1.cljs$core$IFn$_invoke$arity$1(G__16898) : b__$1.call(null,G__16898));
})() === (function (){var G__16899 = j;return (a__$2.cljs$core$IFn$_invoke$arity$1 ? a__$2.cljs$core$IFn$_invoke$arity$1(G__16899) : a__$2.call(null,G__16899));
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
var G__16901 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,new_a_i);
var G__16902 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__16903 = (i + (1));
var G__16904 = (function (){var x__3976__auto__ = current_max;var y__3977__auto__ = (new_a_i + (1));return ((x__3976__auto__ > y__3977__auto__) ? x__3976__auto__ : y__3977__auto__);
})();
a__$2 = G__16901;
b__$1 = G__16902;
i = G__16903;
current_max = G__16904;
continue;
}
} else
{{
var G__16905 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,(0));
var G__16906 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__16907 = (i + (1));
var G__16908 = current_max;
a__$2 = G__16905;
b__$1 = G__16906;
i = G__16907;
current_max = G__16908;
continue;
}

}
}
break;
}
})();var a__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16893,(0),null);var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16893,(1),null);return growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__16909){var map__16917 = p__16909;var map__16917__$1 = ((cljs.core.seq_QMARK_(map__16917))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16917):map__16917);var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16917__$1,cljs.core.constant$keyword$80);var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16917__$1,cljs.core.constant$keyword$81);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(0)))
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
{var growth_strings = major_system.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3(N,to__$1,from__$1);var iter__4407__auto__ = ((function (growth_strings,from__$1,to__$1,map__16917,map__16917__$1,from,to){
return (function iter__16918(s__16919){return (new cljs.core.LazySeq(null,((function (growth_strings,from__$1,to__$1,map__16917,map__16917__$1,from,to){
return (function (){var s__16919__$1 = s__16919;while(true){
var temp__4126__auto__ = cljs.core.seq(s__16919__$1);if(temp__4126__auto__)
{var s__16919__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__16919__$2))
{var c__4405__auto__ = cljs.core.chunk_first(s__16919__$2);var size__4406__auto__ = cljs.core.count(c__4405__auto__);var b__16921 = cljs.core.chunk_buffer(size__4406__auto__);if((function (){var i__16920 = (0);while(true){
if((i__16920 < size__4406__auto__))
{var growth_string = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4405__auto__,i__16920);var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));cljs.core.chunk_append(b__16921,cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))));
{
var G__16924 = (i__16920 + (1));
i__16920 = G__16924;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__16921),iter__16918(cljs.core.chunk_rest(s__16919__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__16921),null);
}
} else
{var growth_string = cljs.core.first(s__16919__$2);var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))),iter__16918(cljs.core.rest(s__16919__$2)));
}
} else
{return null;
}
break;
}
});})(growth_strings,from__$1,to__$1,map__16917,map__16917__$1,from,to))
,null,null));
});})(growth_strings,from__$1,to__$1,map__16917,map__16917__$1,from,to))
;return iter__4407__auto__(growth_strings);

}
}
}
}
}
};
var lex_partitions_H = function (N,var_args){
var p__16909 = null;if (arguments.length > 1) {
  p__16909 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__16909);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__16925){
var N = cljs.core.first(arglist__16925);
var p__16909 = cljs.core.rest(arglist__16925);
return lex_partitions_H__delegate(N,p__16909);
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
return (function iter__16972(s__16973){return (new cljs.core.LazySeq(null,((function (items__$1,N,lex){
return (function (){var s__16973__$1 = s__16973;while(true){
var temp__4126__auto__ = cljs.core.seq(s__16973__$1);if(temp__4126__auto__)
{var s__16973__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__16973__$2))
{var c__4405__auto__ = cljs.core.chunk_first(s__16973__$2);var size__4406__auto__ = cljs.core.count(c__4405__auto__);var b__16975 = cljs.core.chunk_buffer(size__4406__auto__);if((function (){var i__16974 = (0);while(true){
if((i__16974 < size__4406__auto__))
{var parts = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4405__auto__,i__16974);cljs.core.chunk_append(b__16975,(function (){var iter__4407__auto__ = ((function (i__16974,parts,c__4405__auto__,size__4406__auto__,b__16975,s__16973__$2,temp__4126__auto__,items__$1,N,lex){
return (function iter__16998(s__16999){return (new cljs.core.LazySeq(null,((function (i__16974,parts,c__4405__auto__,size__4406__auto__,b__16975,s__16973__$2,temp__4126__auto__,items__$1,N,lex){
return (function (){var s__16999__$1 = s__16999;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__16999__$1);if(temp__4126__auto____$1)
{var s__16999__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__16999__$2))
{var c__4405__auto____$1 = cljs.core.chunk_first(s__16999__$2);var size__4406__auto____$1 = cljs.core.count(c__4405__auto____$1);var b__17001 = cljs.core.chunk_buffer(size__4406__auto____$1);if((function (){var i__17000 = (0);while(true){
if((i__17000 < size__4406__auto____$1))
{var part = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4405__auto____$1,i__17000);cljs.core.chunk_append(b__17001,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__17000,i__16974,part,c__4405__auto____$1,size__4406__auto____$1,b__17001,s__16999__$2,temp__4126__auto____$1,parts,c__4405__auto__,size__4406__auto__,b__16975,s__16973__$2,temp__4126__auto__,items__$1,N,lex){
return (function (v,o){return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__17006 = o;return (items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(G__17006) : items__$1.call(null,G__17006));
})());
});})(i__17000,i__16974,part,c__4405__auto____$1,size__4406__auto____$1,b__17001,s__16999__$2,temp__4126__auto____$1,parts,c__4405__auto__,size__4406__auto__,b__16975,s__16973__$2,temp__4126__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));
{
var G__17018 = (i__17000 + (1));
i__17000 = G__17018;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__17001),iter__16998(cljs.core.chunk_rest(s__16999__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__17001),null);
}
} else
{var part = cljs.core.first(s__16999__$2);return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__16974,part,s__16999__$2,temp__4126__auto____$1,parts,c__4405__auto__,size__4406__auto__,b__16975,s__16973__$2,temp__4126__auto__,items__$1,N,lex){
return (function (v,o){return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__17007 = o;return (items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(G__17007) : items__$1.call(null,G__17007));
})());
});})(i__16974,part,s__16999__$2,temp__4126__auto____$1,parts,c__4405__auto__,size__4406__auto__,b__16975,s__16973__$2,temp__4126__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),iter__16998(cljs.core.rest(s__16999__$2)));
}
} else
{return null;
}
break;
}
});})(i__16974,parts,c__4405__auto__,size__4406__auto__,b__16975,s__16973__$2,temp__4126__auto__,items__$1,N,lex))
,null,null));
});})(i__16974,parts,c__4405__auto__,size__4406__auto__,b__16975,s__16973__$2,temp__4126__auto__,items__$1,N,lex))
;return iter__4407__auto__(parts);
})());
{
var G__17019 = (i__16974 + (1));
i__16974 = G__17019;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__16975),iter__16972(cljs.core.chunk_rest(s__16973__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__16975),null);
}
} else
{var parts = cljs.core.first(s__16973__$2);return cljs.core.cons((function (){var iter__4407__auto__ = ((function (parts,s__16973__$2,temp__4126__auto__,items__$1,N,lex){
return (function iter__17008(s__17009){return (new cljs.core.LazySeq(null,((function (parts,s__16973__$2,temp__4126__auto__,items__$1,N,lex){
return (function (){var s__17009__$1 = s__17009;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__17009__$1);if(temp__4126__auto____$1)
{var s__17009__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__17009__$2))
{var c__4405__auto__ = cljs.core.chunk_first(s__17009__$2);var size__4406__auto__ = cljs.core.count(c__4405__auto__);var b__17011 = cljs.core.chunk_buffer(size__4406__auto__);if((function (){var i__17010 = (0);while(true){
if((i__17010 < size__4406__auto__))
{var part = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4405__auto__,i__17010);cljs.core.chunk_append(b__17011,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__17010,part,c__4405__auto__,size__4406__auto__,b__17011,s__17009__$2,temp__4126__auto____$1,parts,s__16973__$2,temp__4126__auto__,items__$1,N,lex){
return (function (v,o){return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__17016 = o;return (items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(G__17016) : items__$1.call(null,G__17016));
})());
});})(i__17010,part,c__4405__auto__,size__4406__auto__,b__17011,s__17009__$2,temp__4126__auto____$1,parts,s__16973__$2,temp__4126__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));
{
var G__17020 = (i__17010 + (1));
i__17010 = G__17020;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__17011),iter__17008(cljs.core.chunk_rest(s__17009__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__17011),null);
}
} else
{var part = cljs.core.first(s__17009__$2);return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (part,s__17009__$2,temp__4126__auto____$1,parts,s__16973__$2,temp__4126__auto__,items__$1,N,lex){
return (function (v,o){return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__17017 = o;return (items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(G__17017) : items__$1.call(null,G__17017));
})());
});})(part,s__17009__$2,temp__4126__auto____$1,parts,s__16973__$2,temp__4126__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),iter__17008(cljs.core.rest(s__17009__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__16973__$2,temp__4126__auto__,items__$1,N,lex))
,null,null));
});})(parts,s__16973__$2,temp__4126__auto__,items__$1,N,lex))
;return iter__4407__auto__(parts);
})(),iter__16972(cljs.core.rest(s__16973__$2)));
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
partitions_H.cljs$lang$applyTo = (function (arglist__17021){
var items = cljs.core.first(arglist__17021);
var args = cljs.core.rest(arglist__17021);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
major_system.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(multiset));var m = cljs.core.count(multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__17166 = (function (){var j = (0);var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__17299 = (j + (1));
var G__17300 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,j,(j + (1)));
var G__17301 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,j,(function (){var G__17167 = (j + (1));return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__17167) : multiset.call(null,G__17167));
})());
var G__17302 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,j,(function (){var G__17168 = (j + (1));return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__17168) : multiset.call(null,G__17168));
})());
j = G__17299;
c__$1 = G__17300;
u__$1 = G__17301;
v__$1 = G__17302;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17166,(0),null);var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17166,(1),null);var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17166,(2),null);var a = (0);var b = m;var l = (0);var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,(0),(0),cljs.core.array_seq([(1),m], 0));var stack = cljs.core.List.EMPTY;return multiset_partitions_M.cljs$core$IFn$_invoke$arity$11(n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__17169 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,k,((function (){var G__17170 = j;return (u__$1.cljs$core$IFn$_invoke$arity$1 ? u__$1.cljs$core$IFn$_invoke$arity$1(G__17170) : u__$1.call(null,G__17170));
})() - (function (){var G__17171 = j;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__17171) : v__$1.call(null,G__17171));
})()));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__17172 = k;return (u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(G__17172) : u__$2.call(null,G__17172));
})(),(0)))
{{
var G__17303 = (j + (1));
var G__17304 = k;
var G__17305 = true;
var G__17306 = u__$2;
var G__17307 = v__$1;
var G__17308 = c__$1;
j = G__17303;
k = G__17304;
x = G__17305;
u__$1 = G__17306;
v__$1 = G__17307;
c__$1 = G__17308;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,k,(function (){var G__17173 = j;return (c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(G__17173) : c__$1.call(null,G__17173));
})());var v__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,k,(function (){var x__3983__auto__ = (function (){var G__17174 = j;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__17174) : v__$1.call(null,G__17174));
})();var y__3984__auto__ = (function (){var G__17175 = k;return (u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(G__17175) : u__$2.call(null,G__17175));
})();return ((x__3983__auto__ < y__3984__auto__) ? x__3983__auto__ : y__3984__auto__);
})());var x__$1 = ((function (){var G__17176 = k;return (u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(G__17176) : u__$2.call(null,G__17176));
})() < (function (){var G__17177 = j;return (v__$2.cljs$core$IFn$_invoke$arity$1 ? v__$2.cljs$core$IFn$_invoke$arity$1(G__17177) : v__$2.call(null,G__17177));
})());var k__$1 = (k + (1));var j__$1 = (j + (1));{
var G__17309 = j__$1;
var G__17310 = k__$1;
var G__17311 = x__$1;
var G__17312 = u__$2;
var G__17313 = v__$2;
var G__17314 = c__$2;
j = G__17309;
k = G__17310;
x = G__17311;
u__$1 = G__17312;
v__$1 = G__17313;
c__$1 = G__17314;
continue;
}
} else
{var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,k,(function (){var G__17178 = j;return (c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(G__17178) : c__$1.call(null,G__17178));
})());var v__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,k,(function (){var G__17179 = k;return (u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(G__17179) : u__$2.call(null,G__17179));
})());var k__$1 = (k + (1));var j__$1 = (j + (1));{
var G__17315 = j__$1;
var G__17316 = k__$1;
var G__17317 = x;
var G__17318 = u__$2;
var G__17319 = v__$2;
var G__17320 = c__$2;
j = G__17315;
k = G__17316;
x = G__17317;
u__$1 = G__17318;
v__$1 = G__17319;
c__$1 = G__17320;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17169,(0),null);var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17169,(1),null);var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17169,(2),null);var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17169,(3),null);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17169,(4),null);if(cljs.core.truth_((function (){var and__3657__auto__ = r;if(cljs.core.truth_(and__3657__auto__))
{return ((k > b)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,(r - (1))));
} else
{return and__3657__auto__;
}
})()))
{var G__17180 = n;var G__17181 = m;var G__17182 = f;var G__17183 = c__$1;var G__17184 = u__$1;var G__17185 = v__$1;var G__17186 = a;var G__17187 = b;var G__17188 = l;var G__17189 = r;var G__17190 = s;return (major_system.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? major_system.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(G__17180,G__17181,G__17182,G__17183,G__17184,G__17185,G__17186,G__17187,G__17188,G__17189,G__17190) : major_system.combinatorics.m5.call(null,G__17180,G__17181,G__17182,G__17183,G__17184,G__17185,G__17186,G__17187,G__17188,G__17189,G__17190));
} else
{if(cljs.core.truth_((function (){var and__3657__auto__ = s;if(cljs.core.truth_(and__3657__auto__))
{return ((k <= b)) && (((l + (1)) < s));
} else
{return and__3657__auto__;
}
})()))
{var G__17191 = n;var G__17192 = m;var G__17193 = f;var G__17194 = c__$1;var G__17195 = u__$1;var G__17196 = v__$1;var G__17197 = a;var G__17198 = b;var G__17199 = l;var G__17200 = r;var G__17201 = s;return (major_system.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? major_system.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(G__17191,G__17192,G__17193,G__17194,G__17195,G__17196,G__17197,G__17198,G__17199,G__17200,G__17201) : major_system.combinatorics.m5.call(null,G__17191,G__17192,G__17193,G__17194,G__17195,G__17196,G__17197,G__17198,G__17199,G__17200,G__17201));
} else
{if((k > b))
{var a__$1 = b;var b__$1 = k;var l__$1 = (l + (1));var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,(l__$1 + (1)),b__$1);{
var G__17321 = n;
var G__17322 = m;
var G__17323 = f__$1;
var G__17324 = c__$1;
var G__17325 = u__$1;
var G__17326 = v__$1;
var G__17327 = a__$1;
var G__17328 = b__$1;
var G__17329 = l__$1;
var G__17330 = r;
var G__17331 = s;
n = G__17321;
m = G__17322;
f = G__17323;
c = G__17324;
u = G__17325;
v = G__17326;
a = G__17327;
b = G__17328;
l = G__17329;
r = G__17330;
s = G__17331;
continue;
}
} else
{var part = (function (){var iter__4407__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,vec__17169,u__$1,v__$1,c__$1,j,k){
return (function iter__17202(s__17203){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,vec__17169,u__$1,v__$1,c__$1,j,k){
return (function (){var s__17203__$1 = s__17203;while(true){
var temp__4126__auto__ = cljs.core.seq(s__17203__$1);if(temp__4126__auto__)
{var s__17203__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__17203__$2))
{var c__4405__auto__ = cljs.core.chunk_first(s__17203__$2);var size__4406__auto__ = cljs.core.count(c__4405__auto__);var b__17205 = cljs.core.chunk_buffer(size__4406__auto__);if((function (){var i__17204 = (0);while(true){
if((i__17204 < size__4406__auto__))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4405__auto__,i__17204);cljs.core.chunk_append(b__17205,(function (){var first_col = (function (){var G__17248 = y;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17248) : f.call(null,G__17248));
})();var last_col = ((function (){var G__17249 = (y + (1));return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17249) : f.call(null,G__17249));
})() - (1));return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4407__auto__ = ((function (i__17204,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4405__auto__,size__4406__auto__,b__17205,s__17203__$2,temp__4126__auto__,vec__17169,u__$1,v__$1,c__$1,j,k){
return (function iter__17250(s__17251){return (new cljs.core.LazySeq(null,((function (i__17204,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4405__auto__,size__4406__auto__,b__17205,s__17203__$2,temp__4126__auto__,vec__17169,u__$1,v__$1,c__$1,j,k){
return (function (){var s__17251__$1 = s__17251;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__17251__$1);if(temp__4126__auto____$1)
{var s__17251__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__17251__$2))
{var c__4405__auto____$1 = cljs.core.chunk_first(s__17251__$2);var size__4406__auto____$1 = cljs.core.count(c__4405__auto____$1);var b__17253 = cljs.core.chunk_buffer(size__4406__auto____$1);if((function (){var i__17252 = (0);while(true){
if((i__17252 < size__4406__auto____$1))
{var z = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4405__auto____$1,i__17252);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__17262 = z;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__17262) : v__$1.call(null,G__17262));
})(),(0)))
{cljs.core.chunk_append(b__17253,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17263 = z;return (c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(G__17263) : c__$1.call(null,G__17263));
})(),(function (){var G__17264 = z;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__17264) : v__$1.call(null,G__17264));
})()], null));
{
var G__17332 = (i__17252 + (1));
i__17252 = G__17332;
continue;
}
} else
{{
var G__17333 = (i__17252 + (1));
i__17252 = G__17333;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__17253),iter__17250(cljs.core.chunk_rest(s__17251__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__17253),null);
}
} else
{var z = cljs.core.first(s__17251__$2);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__17265 = z;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__17265) : v__$1.call(null,G__17265));
})(),(0)))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17266 = z;return (c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(G__17266) : c__$1.call(null,G__17266));
})(),(function (){var G__17267 = z;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__17267) : v__$1.call(null,G__17267));
})()], null),iter__17250(cljs.core.rest(s__17251__$2)));
} else
{{
var G__17334 = cljs.core.rest(s__17251__$2);
s__17251__$1 = G__17334;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__17204,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4405__auto__,size__4406__auto__,b__17205,s__17203__$2,temp__4126__auto__,vec__17169,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(i__17204,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4405__auto__,size__4406__auto__,b__17205,s__17203__$2,temp__4126__auto__,vec__17169,u__$1,v__$1,c__$1,j,k))
;return iter__4407__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})());
{
var G__17335 = (i__17204 + (1));
i__17204 = G__17335;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__17205),iter__17202(cljs.core.chunk_rest(s__17203__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__17205),null);
}
} else
{var y = cljs.core.first(s__17203__$2);return cljs.core.cons((function (){var first_col = (function (){var G__17268 = y;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17268) : f.call(null,G__17268));
})();var last_col = ((function (){var G__17269 = (y + (1));return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17269) : f.call(null,G__17269));
})() - (1));return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4407__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__17203__$2,temp__4126__auto__,vec__17169,u__$1,v__$1,c__$1,j,k){
return (function iter__17270(s__17271){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__17203__$2,temp__4126__auto__,vec__17169,u__$1,v__$1,c__$1,j,k){
return (function (){var s__17271__$1 = s__17271;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__17271__$1);if(temp__4126__auto____$1)
{var s__17271__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__17271__$2))
{var c__4405__auto__ = cljs.core.chunk_first(s__17271__$2);var size__4406__auto__ = cljs.core.count(c__4405__auto__);var b__17273 = cljs.core.chunk_buffer(size__4406__auto__);if((function (){var i__17272 = (0);while(true){
if((i__17272 < size__4406__auto__))
{var z = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4405__auto__,i__17272);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__17282 = z;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__17282) : v__$1.call(null,G__17282));
})(),(0)))
{cljs.core.chunk_append(b__17273,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17283 = z;return (c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(G__17283) : c__$1.call(null,G__17283));
})(),(function (){var G__17284 = z;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__17284) : v__$1.call(null,G__17284));
})()], null));
{
var G__17336 = (i__17272 + (1));
i__17272 = G__17336;
continue;
}
} else
{{
var G__17337 = (i__17272 + (1));
i__17272 = G__17337;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__17273),iter__17270(cljs.core.chunk_rest(s__17271__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__17273),null);
}
} else
{var z = cljs.core.first(s__17271__$2);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__17285 = z;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__17285) : v__$1.call(null,G__17285));
})(),(0)))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17286 = z;return (c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(G__17286) : c__$1.call(null,G__17286));
})(),(function (){var G__17287 = z;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__17287) : v__$1.call(null,G__17287));
})()], null),iter__17270(cljs.core.rest(s__17271__$2)));
} else
{{
var G__17338 = cljs.core.rest(s__17271__$2);
s__17271__$1 = G__17338;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__17203__$2,temp__4126__auto__,vec__17169,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__17203__$2,temp__4126__auto__,vec__17169,u__$1,v__$1,c__$1,j,k))
;return iter__4407__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})(),iter__17202(cljs.core.rest(s__17203__$2)));
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,vec__17169,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,vec__17169,u__$1,v__$1,c__$1,j,k))
;return iter__4407__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((l + (1))));
})();return cljs.core.cons(part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,part,vec__17169,u__$1,v__$1,c__$1,j,k){
return (function (){var G__17288 = n;var G__17289 = m;var G__17290 = f;var G__17291 = c__$1;var G__17292 = u__$1;var G__17293 = v__$1;var G__17294 = a;var G__17295 = b;var G__17296 = l;var G__17297 = r;var G__17298 = s;return (major_system.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? major_system.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(G__17288,G__17289,G__17290,G__17291,G__17292,G__17293,G__17294,G__17295,G__17296,G__17297,G__17298) : major_system.combinatorics.m5.call(null,G__17288,G__17289,G__17290,G__17291,G__17292,G__17293,G__17294,G__17295,G__17296,G__17297,G__17298));
});})(n,m,f,c,u,v,a,b,l,r,s,part,vec__17169,u__$1,v__$1,c__$1,j,k))
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
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__17384 = j;return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__17384) : v.call(null,G__17384));
})(),(0)))
{return j;
} else
{{
var G__17429 = (j - (1));
j = G__17429;
continue;
}
}
break;
}
})();if(cljs.core.truth_((function (){var and__3657__auto__ = r;if(cljs.core.truth_(and__3657__auto__))
{return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,a)) && (((((function (){var G__17387 = j;return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__17387) : v.call(null,G__17387));
})() - (1)) * (r - l)) < (function (){var G__17388 = j;return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__17388) : u.call(null,G__17388));
})()));
} else
{return and__3657__auto__;
}
})()))
{var G__17389 = n;var G__17390 = m;var G__17391 = f;var G__17392 = c;var G__17393 = u;var G__17394 = v;var G__17395 = a;var G__17396 = b;var G__17397 = l;var G__17398 = r;var G__17399 = s;return (major_system.combinatorics.m6.cljs$core$IFn$_invoke$arity$11 ? major_system.combinatorics.m6.cljs$core$IFn$_invoke$arity$11(G__17389,G__17390,G__17391,G__17392,G__17393,G__17394,G__17395,G__17396,G__17397,G__17398,G__17399) : major_system.combinatorics.m6.call(null,G__17389,G__17390,G__17391,G__17392,G__17393,G__17394,G__17395,G__17396,G__17397,G__17398,G__17399));
} else
{if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__17401 = j;return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__17401) : v.call(null,G__17401));
})(),(1))))
{var G__17402 = n;var G__17403 = m;var G__17404 = f;var G__17405 = c;var G__17406 = u;var G__17407 = v;var G__17408 = a;var G__17409 = b;var G__17410 = l;var G__17411 = r;var G__17412 = s;return (major_system.combinatorics.m6.cljs$core$IFn$_invoke$arity$11 ? major_system.combinatorics.m6.cljs$core$IFn$_invoke$arity$11(G__17402,G__17403,G__17404,G__17405,G__17406,G__17407,G__17408,G__17409,G__17410,G__17411,G__17412) : major_system.combinatorics.m6.call(null,G__17402,G__17403,G__17404,G__17405,G__17406,G__17407,G__17408,G__17409,G__17410,G__17411,G__17412));
} else
{var v__$1 = major_system.combinatorics.update(v,j,cljs.core.dec);var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__4407__auto__ = ((function (v__$1,j){
return (function iter__17413(s__17414){return (new cljs.core.LazySeq(null,((function (v__$1,j){
return (function (){var s__17414__$1 = s__17414;while(true){
var temp__4126__auto__ = cljs.core.seq(s__17414__$1);if(temp__4126__auto__)
{var s__17414__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__17414__$2))
{var c__4405__auto__ = cljs.core.chunk_first(s__17414__$2);var size__4406__auto__ = cljs.core.count(c__4405__auto__);var b__17416 = cljs.core.chunk_buffer(size__4406__auto__);if((function (){var i__17415 = (0);while(true){
if((i__17415 < size__4406__auto__))
{var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4405__auto__,i__17415);cljs.core.chunk_append(b__17416,((function (){var G__17423 = i;return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__17423) : u.call(null,G__17423));
})() - (function (){var G__17424 = i;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__17424) : v__$1.call(null,G__17424));
})()));
{
var G__17430 = (i__17415 + (1));
i__17415 = G__17430;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__17416),iter__17413(cljs.core.chunk_rest(s__17414__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__17416),null);
}
} else
{var i = cljs.core.first(s__17414__$2);return cljs.core.cons(((function (){var G__17425 = i;return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__17425) : u.call(null,G__17425));
})() - (function (){var G__17426 = i;return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(G__17426) : v__$1.call(null,G__17426));
})()),iter__17413(cljs.core.rest(s__17414__$2)));
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
var G__17431 = cljs.core.rest(ks);
var G__17432 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$2,k,(function (){var G__17427 = k;return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__17427) : u.call(null,G__17427));
})());
ks = G__17431;
v__$2 = G__17432;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + (1))):(0));var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__3976__auto__ = (0);var y__3977__auto__ = (min_partitions_after_this - diff_uv);return ((x__3976__auto__ > y__3977__auto__) ? x__3976__auto__ : y__3977__auto__);
})():(0));var v__$3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(amount_to_dec,(0)))?v__$2:(function (){var k_1 = (b - (1));var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = (function (){var G__17428 = k_1;return (v__$3.cljs$core$IFn$_invoke$arity$1 ? v__$3.cljs$core$IFn$_invoke$arity$1(G__17428) : v__$3.call(null,G__17428));
})();if((amount > vk))
{{
var G__17433 = (k_1 - (1));
var G__17434 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$3,k_1,(0));
var G__17435 = (amount - vk);
k_1 = G__17433;
v__$3 = G__17434;
amount = G__17435;
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
{var l__$1 = (l - (1));var b__$1 = a;var a__$1 = (function (){var G__17437 = l__$1;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17437) : f.call(null,G__17437));
})();return major_system.combinatorics.m5(n,m,f,c,u,v,a__$1,b__$1,l__$1,r,s);
}
});
/**
* @param {...*} var_args
*/
major_system.combinatorics.partitions_M = (function() { 
var partitions_M__delegate = function (items,p__17438){var map__17532 = p__17438;var map__17532__$1 = ((cljs.core.seq_QMARK_(map__17532))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17532):map__17532);var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17532__$1,cljs.core.constant$keyword$80);var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17532__$1,cljs.core.constant$keyword$81);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(items),(0)))
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
{var start_multiset = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4407__auto__ = ((function (items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17532,map__17532__$1,from,to){
return (function iter__17533(s__17534){return (new cljs.core.LazySeq(null,((function (items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17532,map__17532__$1,from,to){
return (function (){var s__17534__$1 = s__17534;while(true){
var temp__4126__auto__ = cljs.core.seq(s__17534__$1);if(temp__4126__auto__)
{var s__17534__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__17534__$2))
{var c__4405__auto__ = cljs.core.chunk_first(s__17534__$2);var size__4406__auto__ = cljs.core.count(c__4405__auto__);var b__17536 = cljs.core.chunk_buffer(size__4406__auto__);if((function (){var i__17535 = (0);while(true){
if((i__17535 < size__4406__auto__))
{var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4405__auto__,i__17535);var j = (i + (1));cljs.core.chunk_append(b__17536,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__17543 = (function (){var G__17544 = i;return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__17544) : ditems.call(null,G__17544));
})();return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__17543) : freqs.call(null,G__17543));
})()], null));
{
var G__17625 = (i__17535 + (1));
i__17535 = G__17625;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__17536),iter__17533(cljs.core.chunk_rest(s__17534__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__17536),null);
}
} else
{var i = cljs.core.first(s__17534__$2);var j = (i + (1));return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__17545 = (function (){var G__17546 = i;return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__17546) : ditems.call(null,G__17546));
})();return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__17545) : freqs.call(null,G__17545));
})()], null),iter__17533(cljs.core.rest(s__17534__$2)));
}
} else
{return null;
}
break;
}
});})(items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17532,map__17532__$1,from,to))
,null,null));
});})(items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17532,map__17532__$1,from,to))
;return iter__4407__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(M));
})());var parts = major_system.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3(start_multiset,to__$1,from__$1);var iter__4407__auto__ = ((function (start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17532,map__17532__$1,from,to){
return (function iter__17547(s__17548){return (new cljs.core.LazySeq(null,((function (start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17532,map__17532__$1,from,to){
return (function (){var s__17548__$1 = s__17548;while(true){
var temp__4126__auto__ = cljs.core.seq(s__17548__$1);if(temp__4126__auto__)
{var s__17548__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__17548__$2))
{var c__4405__auto__ = cljs.core.chunk_first(s__17548__$2);var size__4406__auto__ = cljs.core.count(c__4405__auto__);var b__17550 = cljs.core.chunk_buffer(size__4406__auto__);if((function (){var i__17549 = (0);while(true){
if((i__17549 < size__4406__auto__))
{var part = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4405__auto__,i__17549);cljs.core.chunk_append(b__17550,(function (){var iter__4407__auto__ = ((function (i__17549,part,c__4405__auto__,size__4406__auto__,b__17550,s__17548__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17532,map__17532__$1,from,to){
return (function iter__17589(s__17590){return (new cljs.core.LazySeq(null,((function (i__17549,part,c__4405__auto__,size__4406__auto__,b__17550,s__17548__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17532,map__17532__$1,from,to){
return (function (){var s__17590__$1 = s__17590;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__17590__$1);if(temp__4126__auto____$1)
{var s__17590__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__17590__$2))
{var c__4405__auto____$1 = cljs.core.chunk_first(s__17590__$2);var size__4406__auto____$1 = cljs.core.count(c__4405__auto____$1);var b__17592 = cljs.core.chunk_buffer(size__4406__auto____$1);if((function (){var i__17591 = (0);while(true){
if((i__17591 < size__4406__auto____$1))
{var multiset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4405__auto____$1,i__17591);cljs.core.chunk_append(b__17592,cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (i__17591,i__17549,multiset,c__4405__auto____$1,size__4406__auto____$1,b__17592,s__17590__$2,temp__4126__auto____$1,part,c__4405__auto__,size__4406__auto__,b__17550,s__17548__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17532,map__17532__$1,from,to){
return (function (p__17601){var vec__17602 = p__17601;var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17602,(0),null);var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17602,(1),null);return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__17603 = (index - (1));return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__17603) : ditems.call(null,G__17603));
})());
});})(i__17591,i__17549,multiset,c__4405__auto____$1,size__4406__auto____$1,b__17592,s__17590__$2,temp__4126__auto____$1,part,c__4405__auto__,size__4406__auto__,b__17550,s__17548__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17532,map__17532__$1,from,to))
,cljs.core.array_seq([multiset], 0))));
{
var G__17626 = (i__17591 + (1));
i__17591 = G__17626;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__17592),iter__17589(cljs.core.chunk_rest(s__17590__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__17592),null);
}
} else
{var multiset = cljs.core.first(s__17590__$2);return cljs.core.cons(cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (i__17549,multiset,s__17590__$2,temp__4126__auto____$1,part,c__4405__auto__,size__4406__auto__,b__17550,s__17548__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17532,map__17532__$1,from,to){
return (function (p__17604){var vec__17605 = p__17604;var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17605,(0),null);var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17605,(1),null);return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__17606 = (index - (1));return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__17606) : ditems.call(null,G__17606));
})());
});})(i__17549,multiset,s__17590__$2,temp__4126__auto____$1,part,c__4405__auto__,size__4406__auto__,b__17550,s__17548__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17532,map__17532__$1,from,to))
,cljs.core.array_seq([multiset], 0))),iter__17589(cljs.core.rest(s__17590__$2)));
}
} else
{return null;
}
break;
}
});})(i__17549,part,c__4405__auto__,size__4406__auto__,b__17550,s__17548__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17532,map__17532__$1,from,to))
,null,null));
});})(i__17549,part,c__4405__auto__,size__4406__auto__,b__17550,s__17548__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17532,map__17532__$1,from,to))
;return iter__4407__auto__(part);
})());
{
var G__17627 = (i__17549 + (1));
i__17549 = G__17627;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__17550),iter__17547(cljs.core.chunk_rest(s__17548__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__17550),null);
}
} else
{var part = cljs.core.first(s__17548__$2);return cljs.core.cons((function (){var iter__4407__auto__ = ((function (part,s__17548__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17532,map__17532__$1,from,to){
return (function iter__17607(s__17608){return (new cljs.core.LazySeq(null,((function (part,s__17548__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17532,map__17532__$1,from,to){
return (function (){var s__17608__$1 = s__17608;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__17608__$1);if(temp__4126__auto____$1)
{var s__17608__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__17608__$2))
{var c__4405__auto__ = cljs.core.chunk_first(s__17608__$2);var size__4406__auto__ = cljs.core.count(c__4405__auto__);var b__17610 = cljs.core.chunk_buffer(size__4406__auto__);if((function (){var i__17609 = (0);while(true){
if((i__17609 < size__4406__auto__))
{var multiset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4405__auto__,i__17609);cljs.core.chunk_append(b__17610,cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (i__17609,multiset,c__4405__auto__,size__4406__auto__,b__17610,s__17608__$2,temp__4126__auto____$1,part,s__17548__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17532,map__17532__$1,from,to){
return (function (p__17619){var vec__17620 = p__17619;var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17620,(0),null);var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17620,(1),null);return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__17621 = (index - (1));return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__17621) : ditems.call(null,G__17621));
})());
});})(i__17609,multiset,c__4405__auto__,size__4406__auto__,b__17610,s__17608__$2,temp__4126__auto____$1,part,s__17548__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17532,map__17532__$1,from,to))
,cljs.core.array_seq([multiset], 0))));
{
var G__17628 = (i__17609 + (1));
i__17609 = G__17628;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__17610),iter__17607(cljs.core.chunk_rest(s__17608__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__17610),null);
}
} else
{var multiset = cljs.core.first(s__17608__$2);return cljs.core.cons(cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (multiset,s__17608__$2,temp__4126__auto____$1,part,s__17548__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17532,map__17532__$1,from,to){
return (function (p__17622){var vec__17623 = p__17622;var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17623,(0),null);var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17623,(1),null);return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__17624 = (index - (1));return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__17624) : ditems.call(null,G__17624));
})());
});})(multiset,s__17608__$2,temp__4126__auto____$1,part,s__17548__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17532,map__17532__$1,from,to))
,cljs.core.array_seq([multiset], 0))),iter__17607(cljs.core.rest(s__17608__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__17548__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17532,map__17532__$1,from,to))
,null,null));
});})(part,s__17548__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17532,map__17532__$1,from,to))
;return iter__4407__auto__(part);
})(),iter__17547(cljs.core.rest(s__17548__$2)));
}
} else
{return null;
}
break;
}
});})(start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17532,map__17532__$1,from,to))
,null,null));
});})(start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__17532,map__17532__$1,from,to))
;return iter__4407__auto__(parts);

}
}
}
};
var partitions_M = function (items,var_args){
var p__17438 = null;if (arguments.length > 1) {
  p__17438 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__17438);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__17629){
var items = cljs.core.first(arglist__17629);
var p__17438 = cljs.core.rest(arglist__17629);
return partitions_M__delegate(items,p__17438);
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
partitions.cljs$lang$applyTo = (function (arglist__17630){
var items = cljs.core.first(arglist__17630);
var args = cljs.core.rest(arglist__17630);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;
