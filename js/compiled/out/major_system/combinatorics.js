// Compiled by ClojureScript 0.0-2356
goog.provide('major_system.combinatorics');
goog.require('cljs.core');
major_system.combinatorics.index_combinations = (function index_combinations(n,cnt){return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__8809__auto__ = (function iter__9516(s__9517){return (new cljs.core.LazySeq(null,(function (){var s__9517__$1 = s__9517;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9517__$1);if(temp__4126__auto__)
{var s__9517__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9517__$2))
{var c__8807__auto__ = cljs.core.chunk_first.call(null,s__9517__$2);var size__8808__auto__ = cljs.core.count.call(null,c__8807__auto__);var b__9519 = cljs.core.chunk_buffer.call(null,size__8808__auto__);if((function (){var i__9518 = (0);while(true){
if((i__9518 < size__8808__auto__))
{var j = cljs.core._nth.call(null,c__8807__auto__,i__9518);cljs.core.chunk_append.call(null,b__9519,((j + cnt) + (- (n + (1)))));
{
var G__9520 = (i__9518 + (1));
i__9518 = G__9520;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9519),iter__9516.call(null,cljs.core.chunk_rest.call(null,s__9517__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9519),null);
}
} else
{var j = cljs.core.first.call(null,s__9517__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + (1)))),iter__9516.call(null,cljs.core.rest.call(null,s__9517__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8809__auto__.call(null,cljs.core.range.call(null,(1),(n + (1))));
})()));var iter_comb = ((function (c){
return (function iter_comb(c__$1,j){if((j > n))
{return null;
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,j,(c__$1.call(null,j) - (1)));if((c__$2.call(null,j) < j))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$2,(j + (1))], null);
} else
{var c__$3 = c__$2;var j__$1 = j;while(true){
if(cljs.core._EQ_.call(null,j__$1,(1)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$3,j__$1], null);
} else
{{
var G__9521 = cljs.core.assoc.call(null,c__$3,(j__$1 - (1)),(c__$3.call(null,j__$1) - (1)));
var G__9522 = (j__$1 - (1));
c__$3 = G__9521;
j__$1 = G__9522;
continue;
}
}
break;
}
}
}
});})(c))
;var step = ((function (c,iter_comb){
return (function step(c__$1,j){return cljs.core.cons.call(null,cljs.core.rseq.call(null,cljs.core.subvec.call(null,c__$1,(1),(n + (1)))),(new cljs.core.LazySeq(null,((function (c,iter_comb){
return (function (){var next_step = iter_comb.call(null,c__$1,j);if(cljs.core.truth_(next_step))
{return step.call(null,next_step.call(null,(0)),next_step.call(null,(1)));
} else
{return null;
}
});})(c,iter_comb))
,null,null)));
});})(c,iter_comb))
;return step.call(null,c,(1));
}),null,null));
});
/**
* All the unique ways of taking n different elements from items
*/
major_system.combinatorics.combinations = (function combinations(items,n){var v_items = cljs.core.vec.call(null,cljs.core.reverse.call(null,items));if((n === (0)))
{return cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.List.EMPTY);
} else
{var cnt = cljs.core.count.call(null,items);if((n > cnt))
{return null;
} else
{if(cljs.core._EQ_.call(null,n,cnt))
{return cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.seq.call(null,items));
} else
{return cljs.core.map.call(null,((function (cnt,v_items){
return (function (p1__9523_SHARP_){return cljs.core.map.call(null,v_items,p1__9523_SHARP_);
});})(cnt,v_items))
,major_system.combinatorics.index_combinations.call(null,n,cnt));

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
major_system.combinatorics.unchunk = (function unchunk(s){return (new cljs.core.LazySeq(null,(function (){if(cljs.core.seq.call(null,s))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s),unchunk.call(null,cljs.core.rest.call(null,s)));
} else
{return null;
}
}),null,null));
});
/**
* All the subsets of items
*/
major_system.combinatorics.subsets = (function subsets(items){return cljs.core.mapcat.call(null,(function (n){return major_system.combinatorics.combinations.call(null,items,n);
}),major_system.combinatorics.unchunk.call(null,cljs.core.range.call(null,(cljs.core.count.call(null,items) + (1)))));
});
/**
* All the ways to take one item from each sequence
* @param {...*} var_args
*/
major_system.combinatorics.cartesian_product = (function() { 
var cartesian_product__delegate = function (seqs){var v_original_seqs = cljs.core.vec.call(null,seqs);var step = ((function (v_original_seqs){
return (function step(v_seqs){var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){var i = (cljs.core.count.call(null,v_seqs__$1) - (1));var v_seqs__$2 = v_seqs__$1;while(true){
if(cljs.core._EQ_.call(null,i,(-1)))
{return null;
} else
{var temp__4124__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));if(temp__4124__auto__)
{var rst = temp__4124__auto__;return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else
{{
var G__9524 = (i - (1));
var G__9525 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__9524;
v_seqs__$2 = G__9525;
continue;
}
}
}
break;
}
});})(v_original_seqs))
;if(cljs.core.truth_(v_seqs))
{return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){return step.call(null,increment.call(null,v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else
{return null;
}
});})(v_original_seqs))
;if(cljs.core.every_QMARK_.call(null,cljs.core.seq,seqs))
{return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){return step.call(null,v_original_seqs);
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
cartesian_product.cljs$lang$applyTo = (function (arglist__9526){
var seqs = cljs.core.seq(arglist__9526);
return cartesian_product__delegate(seqs);
});
cartesian_product.cljs$core$IFn$_invoke$arity$variadic = cartesian_product__delegate;
return cartesian_product;
})()
;
/**
* All the ways of taking n (possibly the same) elements from the sequence of items
*/
major_system.combinatorics.selections = (function selections(items,n){return cljs.core.apply.call(null,major_system.combinatorics.cartesian_product,cljs.core.take.call(null,n,cljs.core.repeat.call(null,items)));
});
major_system.combinatorics.iter_perm = (function iter_perm(v){var len = cljs.core.count.call(null,v);var j = (function (){var i = (len - (2));while(true){
if(cljs.core._EQ_.call(null,i,(-1)))
{return null;
} else
{if((v.call(null,i) < v.call(null,(i + (1)))))
{return i;
} else
{{
var G__9527 = (i - (1));
i = G__9527;
continue;
}

}
}
break;
}
})();if(cljs.core.truth_(j))
{var vj = v.call(null,j);var l = (function (){var i = (len - (1));while(true){
if((vj < v.call(null,i)))
{return i;
} else
{{
var G__9528 = (i - (1));
i = G__9528;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + (1));var l__$1 = (len - (1));while(true){
if((k < l__$1))
{{
var G__9529 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__9530 = (k + (1));
var G__9531 = (l__$1 - (1));
v__$1 = G__9529;
k = G__9530;
l__$1 = G__9531;
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
{return cljs.core.cons.call(null,v,(new cljs.core.LazySeq(null,(function (){return vec_lex_permutations.call(null,major_system.combinatorics.iter_perm.call(null,v));
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
major_system.combinatorics.lex_permutations = (function lex_permutations(c){return (new cljs.core.LazySeq(null,(function (){var vec_sorted = cljs.core.vec.call(null,cljs.core.sort.call(null,c));if((cljs.core.count.call(null,vec_sorted) === (0)))
{return cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY);
} else
{return major_system.combinatorics.vec_lex_permutations.call(null,vec_sorted);
}
}),null,null));
});
/**
* Returns true iff s is a sequence of numbers in non-decreasing order
*/
major_system.combinatorics.sorted_numbers_QMARK_ = (function sorted_numbers_QMARK_(s){var and__8059__auto__ = cljs.core.every_QMARK_.call(null,cljs.core.number_QMARK_,s);if(and__8059__auto__)
{var or__8071__auto__ = cljs.core.empty_QMARK_.call(null,s);if(or__8071__auto__)
{return or__8071__auto__;
} else
{return cljs.core.apply.call(null,cljs.core._LT__EQ_,s);
}
} else
{return and__8059__auto__;
}
});
/**
* Handles the case when you want the permutations of a list with duplicate items.
*/
major_system.combinatorics.multi_perm = (function multi_perm(l){var f = cljs.core.frequencies.call(null,l);var v = cljs.core.vec.call(null,cljs.core.keys.call(null,f));var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__8809__auto__ = ((function (f,v){
return (function iter__9536(s__9537){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__9537__$1 = s__9537;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9537__$1);if(temp__4126__auto__)
{var s__9537__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9537__$2))
{var c__8807__auto__ = cljs.core.chunk_first.call(null,s__9537__$2);var size__8808__auto__ = cljs.core.count.call(null,c__8807__auto__);var b__9539 = cljs.core.chunk_buffer.call(null,size__8808__auto__);if((function (){var i__9538 = (0);while(true){
if((i__9538 < size__8808__auto__))
{var i = cljs.core._nth.call(null,c__8807__auto__,i__9538);cljs.core.chunk_append.call(null,b__9539,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__9540 = (i__9538 + (1));
i__9538 = G__9540;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9539),iter__9536.call(null,cljs.core.chunk_rest.call(null,s__9537__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9539),null);
}
} else
{var i = cljs.core.first.call(null,s__9537__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__9536.call(null,cljs.core.rest.call(null,s__9537__$2)));
}
} else
{return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;return iter__8809__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),major_system.combinatorics.lex_permutations.call(null,indices));
});
/**
* All the distinct permutations of items, lexicographic by index.
*/
major_system.combinatorics.permutations = (function permutations(items){if(cljs.core.truth_(major_system.combinatorics.sorted_numbers_QMARK_.call(null,items)))
{return major_system.combinatorics.lex_permutations.call(null,items);
} else
{if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,items)))
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,((function (v){
return (function (p1__9541_SHARP_){return cljs.core.map.call(null,v,p1__9541_SHARP_);
});})(v))
,major_system.combinatorics.lex_permutations.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v))));
} else
{return major_system.combinatorics.multi_perm.call(null,items);

}
}
});
major_system.combinatorics.update = (function update(vec,index,f){var item = vec.call(null,index);return cljs.core.assoc.call(null,vec,index,f.call(null,item));
});
major_system.combinatorics.init = (function init(n,s){if(cljs.core.truth_(s))
{return cljs.core.vec.call(null,(function (){var iter__8809__auto__ = (function iter__9546(s__9547){return (new cljs.core.LazySeq(null,(function (){var s__9547__$1 = s__9547;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9547__$1);if(temp__4126__auto__)
{var s__9547__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9547__$2))
{var c__8807__auto__ = cljs.core.chunk_first.call(null,s__9547__$2);var size__8808__auto__ = cljs.core.count.call(null,c__8807__auto__);var b__9549 = cljs.core.chunk_buffer.call(null,size__8808__auto__);if((function (){var i__9548 = (0);while(true){
if((i__9548 < size__8808__auto__))
{var i = cljs.core._nth.call(null,c__8807__auto__,i__9548);cljs.core.chunk_append.call(null,b__9549,(function (){var x__8378__auto__ = (0);var y__8379__auto__ = (i - ((n - s) - (-1)));return ((x__8378__auto__ > y__8379__auto__) ? x__8378__auto__ : y__8379__auto__);
})());
{
var G__9550 = (i__9548 + (1));
i__9548 = G__9550;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9549),iter__9546.call(null,cljs.core.chunk_rest.call(null,s__9547__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9549),null);
}
} else
{var i = cljs.core.first.call(null,s__9547__$2);return cljs.core.cons.call(null,(function (){var x__8378__auto__ = (0);var y__8379__auto__ = (i - ((n - s) - (-1)));return ((x__8378__auto__ > y__8379__auto__) ? x__8378__auto__ : y__8379__auto__);
})(),iter__9546.call(null,cljs.core.rest.call(null,s__9547__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8809__auto__.call(null,cljs.core.range.call(null,(1),(n + (1))));
})());
} else
{return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,(0)));
}
});
major_system.combinatorics.growth_strings_H = (function() {
var growth_strings_H = null;
var growth_strings_H__3 = (function (n,r,s){return growth_strings_H.call(null,n,major_system.combinatorics.init.call(null,n,s),cljs.core.vec.call(null,cljs.core.repeat.call(null,n,(1))),r,s);
});
var growth_strings_H__5 = (function (n,a,b,r,s){return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,(function (){if((function (){var and__8059__auto__ = (cljs.core.peek.call(null,b) > cljs.core.peek.call(null,a));if(and__8059__auto__)
{if(cljs.core.truth_(r))
{return (cljs.core.peek.call(null,a) < (r - (1)));
} else
{return true;
}
} else
{return and__8059__auto__;
}
})())
{return growth_strings_H.call(null,n,major_system.combinatorics.update.call(null,a,(n - (1)),cljs.core.inc),b,r,s);
} else
{var j = (function (){var j = (n - (2));while(true){
if((function (){var and__8059__auto__ = (a.call(null,j) < b.call(null,j));if(and__8059__auto__)
{var and__8059__auto____$1 = (cljs.core.truth_(r)?(a.call(null,j) < (r - (1))):true);if(and__8059__auto____$1)
{if(cljs.core.truth_(s))
{return (((s - b.call(null,j)) - ((((a.call(null,j) + (1)) === b.call(null,j)))?(1):(0))) <= (n - j));
} else
{return true;
}
} else
{return and__8059__auto____$1;
}
} else
{return and__8059__auto__;
}
})())
{return j;
} else
{{
var G__9553 = (j - (1));
j = G__9553;
continue;
}
}
break;
}
})();if((j === (0)))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = major_system.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?(1):(0)))):null);var vec__9552 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + (1));var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?(1):(0)));while(true){
if((i === n))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else
{if(cljs.core.truth_((function (){var and__8059__auto__ = s;if(cljs.core.truth_(and__8059__auto__))
{return (i > ((n - x) - (1)));
} else
{return and__8059__auto__;
}
})()))
{var new_a_i = ((i - n) + s);{
var G__9554 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__9555 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__9556 = (i + (1));
var G__9557 = (function (){var x__8378__auto__ = current_max;var y__8379__auto__ = (new_a_i + (1));return ((x__8378__auto__ > y__8379__auto__) ? x__8378__auto__ : y__8379__auto__);
})();
a__$2 = G__9554;
b__$1 = G__9555;
i = G__9556;
current_max = G__9557;
continue;
}
} else
{{
var G__9558 = cljs.core.assoc.call(null,a__$2,i,(0));
var G__9559 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__9560 = (i + (1));
var G__9561 = current_max;
a__$2 = G__9558;
b__$1 = G__9559;
i = G__9560;
current_max = G__9561;
continue;
}

}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__9552,(0),null);var b__$1 = cljs.core.nth.call(null,vec__9552,(1),null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__9562){var map__9568 = p__9562;var map__9568__$1 = ((cljs.core.seq_QMARK_.call(null,map__9568))?cljs.core.apply.call(null,cljs.core.hash_map,map__9568):map__9568);var from = cljs.core.get.call(null,map__9568__$1,new cljs.core.Keyword(null,"min","min",444991522));var to = cljs.core.get.call(null,map__9568__$1,new cljs.core.Keyword(null,"max","max",61366548));if(cljs.core._EQ_.call(null,N,(0)))
{if((((function (){var or__8071__auto__ = from;if(cljs.core.truth_(or__8071__auto__))
{return or__8071__auto__;
} else
{return (0);
}
})() <= (0))) && (((0) <= (function (){var or__8071__auto__ = to;if(cljs.core.truth_(or__8071__auto__))
{return or__8071__auto__;
} else
{return (0);
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var from__$1 = (cljs.core.truth_((function (){var and__8059__auto__ = from;if(cljs.core.truth_(and__8059__auto__))
{return (from <= (1));
} else
{return and__8059__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__8059__auto__ = to;if(cljs.core.truth_(and__8059__auto__))
{return (to >= N);
} else
{return and__8059__auto__;
}
})())?null:to);if(!((((1) <= (function (){var or__8071__auto__ = from__$1;if(cljs.core.truth_(or__8071__auto__))
{return or__8071__auto__;
} else
{return (1);
}
})())) && ((((function (){var or__8071__auto__ = from__$1;if(cljs.core.truth_(or__8071__auto__))
{return or__8071__auto__;
} else
{return (1);
}
})() <= (function (){var or__8071__auto__ = to__$1;if(cljs.core.truth_(or__8071__auto__))
{return or__8071__auto__;
} else
{return N;
}
})())) && (((function (){var or__8071__auto__ = to__$1;if(cljs.core.truth_(or__8071__auto__))
{return or__8071__auto__;
} else
{return N;
}
})() <= N)))))
{return cljs.core.List.EMPTY;
} else
{if(cljs.core._EQ_.call(null,N,(0)))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{if(cljs.core._EQ_.call(null,N,(1)))
{return cljs.core.list(cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)));
} else
{if(cljs.core._EQ_.call(null,to__$1,(1)))
{return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.range.call(null,N)))))));
} else
{var growth_strings = major_system.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__8809__auto__ = ((function (growth_strings,from__$1,to__$1,map__9568,map__9568__$1,from,to){
return (function iter__9569(s__9570){return (new cljs.core.LazySeq(null,((function (growth_strings,from__$1,to__$1,map__9568,map__9568__$1,from,to){
return (function (){var s__9570__$1 = s__9570;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9570__$1);if(temp__4126__auto__)
{var s__9570__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9570__$2))
{var c__8807__auto__ = cljs.core.chunk_first.call(null,s__9570__$2);var size__8808__auto__ = cljs.core.count.call(null,c__8807__auto__);var b__9572 = cljs.core.chunk_buffer.call(null,size__8808__auto__);if((function (){var i__9571 = (0);while(true){
if((i__9571 < size__8808__auto__))
{var growth_string = cljs.core._nth.call(null,c__8807__auto__,i__9571);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__9572,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__9573 = (i__9571 + (1));
i__9571 = G__9573;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9572),iter__9569.call(null,cljs.core.chunk_rest.call(null,s__9570__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9572),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__9570__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__9569.call(null,cljs.core.rest.call(null,s__9570__$2)));
}
} else
{return null;
}
break;
}
});})(growth_strings,from__$1,to__$1,map__9568,map__9568__$1,from,to))
,null,null));
});})(growth_strings,from__$1,to__$1,map__9568,map__9568__$1,from,to))
;return iter__8809__auto__.call(null,growth_strings);

}
}
}
}
}
};
var lex_partitions_H = function (N,var_args){
var p__9562 = null;if (arguments.length > 1) {
  p__9562 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__9562);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__9574){
var N = cljs.core.first(arglist__9574);
var p__9562 = cljs.core.rest(arglist__9574);
return lex_partitions_H__delegate(N,p__9562);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
major_system.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,major_system.combinatorics.lex_partitions_H,N,args);var iter__8809__auto__ = ((function (items__$1,N,lex){
return (function iter__9595(s__9596){return (new cljs.core.LazySeq(null,((function (items__$1,N,lex){
return (function (){var s__9596__$1 = s__9596;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9596__$1);if(temp__4126__auto__)
{var s__9596__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9596__$2))
{var c__8807__auto__ = cljs.core.chunk_first.call(null,s__9596__$2);var size__8808__auto__ = cljs.core.count.call(null,c__8807__auto__);var b__9598 = cljs.core.chunk_buffer.call(null,size__8808__auto__);if((function (){var i__9597 = (0);while(true){
if((i__9597 < size__8808__auto__))
{var parts = cljs.core._nth.call(null,c__8807__auto__,i__9597);cljs.core.chunk_append.call(null,b__9598,(function (){var iter__8809__auto__ = ((function (i__9597,parts,c__8807__auto__,size__8808__auto__,b__9598,s__9596__$2,temp__4126__auto__,items__$1,N,lex){
return (function iter__9607(s__9608){return (new cljs.core.LazySeq(null,((function (i__9597,parts,c__8807__auto__,size__8808__auto__,b__9598,s__9596__$2,temp__4126__auto__,items__$1,N,lex){
return (function (){var s__9608__$1 = s__9608;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__9608__$1);if(temp__4126__auto____$1)
{var s__9608__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9608__$2))
{var c__8807__auto____$1 = cljs.core.chunk_first.call(null,s__9608__$2);var size__8808__auto____$1 = cljs.core.count.call(null,c__8807__auto____$1);var b__9610 = cljs.core.chunk_buffer.call(null,size__8808__auto____$1);if((function (){var i__9609 = (0);while(true){
if((i__9609 < size__8808__auto____$1))
{var part = cljs.core._nth.call(null,c__8807__auto____$1,i__9609);cljs.core.chunk_append.call(null,b__9610,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__9609,i__9597,part,c__8807__auto____$1,size__8808__auto____$1,b__9610,s__9608__$2,temp__4126__auto____$1,parts,c__8807__auto__,size__8808__auto__,b__9598,s__9596__$2,temp__4126__auto__,items__$1,N,lex){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__9609,i__9597,part,c__8807__auto____$1,size__8808__auto____$1,b__9610,s__9608__$2,temp__4126__auto____$1,parts,c__8807__auto__,size__8808__auto__,b__9598,s__9596__$2,temp__4126__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__9615 = (i__9609 + (1));
i__9609 = G__9615;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9610),iter__9607.call(null,cljs.core.chunk_rest.call(null,s__9608__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9610),null);
}
} else
{var part = cljs.core.first.call(null,s__9608__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__9597,part,s__9608__$2,temp__4126__auto____$1,parts,c__8807__auto__,size__8808__auto__,b__9598,s__9596__$2,temp__4126__auto__,items__$1,N,lex){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__9597,part,s__9608__$2,temp__4126__auto____$1,parts,c__8807__auto__,size__8808__auto__,b__9598,s__9596__$2,temp__4126__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__9607.call(null,cljs.core.rest.call(null,s__9608__$2)));
}
} else
{return null;
}
break;
}
});})(i__9597,parts,c__8807__auto__,size__8808__auto__,b__9598,s__9596__$2,temp__4126__auto__,items__$1,N,lex))
,null,null));
});})(i__9597,parts,c__8807__auto__,size__8808__auto__,b__9598,s__9596__$2,temp__4126__auto__,items__$1,N,lex))
;return iter__8809__auto__.call(null,parts);
})());
{
var G__9616 = (i__9597 + (1));
i__9597 = G__9616;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9598),iter__9595.call(null,cljs.core.chunk_rest.call(null,s__9596__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9598),null);
}
} else
{var parts = cljs.core.first.call(null,s__9596__$2);return cljs.core.cons.call(null,(function (){var iter__8809__auto__ = ((function (parts,s__9596__$2,temp__4126__auto__,items__$1,N,lex){
return (function iter__9611(s__9612){return (new cljs.core.LazySeq(null,((function (parts,s__9596__$2,temp__4126__auto__,items__$1,N,lex){
return (function (){var s__9612__$1 = s__9612;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__9612__$1);if(temp__4126__auto____$1)
{var s__9612__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9612__$2))
{var c__8807__auto__ = cljs.core.chunk_first.call(null,s__9612__$2);var size__8808__auto__ = cljs.core.count.call(null,c__8807__auto__);var b__9614 = cljs.core.chunk_buffer.call(null,size__8808__auto__);if((function (){var i__9613 = (0);while(true){
if((i__9613 < size__8808__auto__))
{var part = cljs.core._nth.call(null,c__8807__auto__,i__9613);cljs.core.chunk_append.call(null,b__9614,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__9613,part,c__8807__auto__,size__8808__auto__,b__9614,s__9612__$2,temp__4126__auto____$1,parts,s__9596__$2,temp__4126__auto__,items__$1,N,lex){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__9613,part,c__8807__auto__,size__8808__auto__,b__9614,s__9612__$2,temp__4126__auto____$1,parts,s__9596__$2,temp__4126__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__9617 = (i__9613 + (1));
i__9613 = G__9617;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9614),iter__9611.call(null,cljs.core.chunk_rest.call(null,s__9612__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9614),null);
}
} else
{var part = cljs.core.first.call(null,s__9612__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__9612__$2,temp__4126__auto____$1,parts,s__9596__$2,temp__4126__auto__,items__$1,N,lex){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__9612__$2,temp__4126__auto____$1,parts,s__9596__$2,temp__4126__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__9611.call(null,cljs.core.rest.call(null,s__9612__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__9596__$2,temp__4126__auto__,items__$1,N,lex))
,null,null));
});})(parts,s__9596__$2,temp__4126__auto__,items__$1,N,lex))
;return iter__8809__auto__.call(null,parts);
})(),iter__9595.call(null,cljs.core.rest.call(null,s__9596__$2)));
}
} else
{return null;
}
break;
}
});})(items__$1,N,lex))
,null,null));
});})(items__$1,N,lex))
;return iter__8809__auto__.call(null,lex);
};
var partitions_H = function (items,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_H__delegate.call(this,items,args);};
partitions_H.cljs$lang$maxFixedArity = 1;
partitions_H.cljs$lang$applyTo = (function (arglist__9618){
var items = cljs.core.first(arglist__9618);
var args = cljs.core.rest(arglist__9618);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
major_system.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__9641 = (function (){var j = (0);var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__9663 = (j + (1));
var G__9664 = cljs.core.assoc.call(null,c__$1,j,(j + (1)));
var G__9665 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + (1))));
var G__9666 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + (1))));
j = G__9663;
c__$1 = G__9664;
u__$1 = G__9665;
v__$1 = G__9666;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__9641,(0),null);var u__$1 = cljs.core.nth.call(null,vec__9641,(1),null);var v__$1 = cljs.core.nth.call(null,vec__9641,(2),null);var a = (0);var b = m;var l = (0);var f__$1 = cljs.core.assoc.call(null,f,(0),(0),(1),m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__9642 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),(0)))
{{
var G__9667 = (j + (1));
var G__9668 = k;
var G__9669 = true;
var G__9670 = u__$2;
var G__9671 = v__$1;
var G__9672 = c__$1;
j = G__9667;
k = G__9668;
x = G__9669;
u__$1 = G__9670;
v__$1 = G__9671;
c__$1 = G__9672;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__8385__auto__ = v__$1.call(null,j);var y__8386__auto__ = u__$2.call(null,k);return ((x__8385__auto__ < y__8386__auto__) ? x__8385__auto__ : y__8386__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + (1));var j__$1 = (j + (1));{
var G__9673 = j__$1;
var G__9674 = k__$1;
var G__9675 = x__$1;
var G__9676 = u__$2;
var G__9677 = v__$2;
var G__9678 = c__$2;
j = G__9673;
k = G__9674;
x = G__9675;
u__$1 = G__9676;
v__$1 = G__9677;
c__$1 = G__9678;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + (1));var j__$1 = (j + (1));{
var G__9679 = j__$1;
var G__9680 = k__$1;
var G__9681 = x;
var G__9682 = u__$2;
var G__9683 = v__$2;
var G__9684 = c__$2;
j = G__9679;
k = G__9680;
x = G__9681;
u__$1 = G__9682;
v__$1 = G__9683;
c__$1 = G__9684;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__9642,(0),null);var v__$1 = cljs.core.nth.call(null,vec__9642,(1),null);var c__$1 = cljs.core.nth.call(null,vec__9642,(2),null);var j = cljs.core.nth.call(null,vec__9642,(3),null);var k = cljs.core.nth.call(null,vec__9642,(4),null);if(cljs.core.truth_((function (){var and__8059__auto__ = r;if(cljs.core.truth_(and__8059__auto__))
{return ((k > b)) && (cljs.core._EQ_.call(null,l,(r - (1))));
} else
{return and__8059__auto__;
}
})()))
{return major_system.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if(cljs.core.truth_((function (){var and__8059__auto__ = s;if(cljs.core.truth_(and__8059__auto__))
{return ((k <= b)) && (((l + (1)) < s));
} else
{return and__8059__auto__;
}
})()))
{return major_system.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if((k > b))
{var a__$1 = b;var b__$1 = k;var l__$1 = (l + (1));var f__$1 = cljs.core.assoc.call(null,f,(l__$1 + (1)),b__$1);{
var G__9685 = n;
var G__9686 = m;
var G__9687 = f__$1;
var G__9688 = c__$1;
var G__9689 = u__$1;
var G__9690 = v__$1;
var G__9691 = a__$1;
var G__9692 = b__$1;
var G__9693 = l__$1;
var G__9694 = r;
var G__9695 = s;
n = G__9685;
m = G__9686;
f = G__9687;
c = G__9688;
u = G__9689;
v = G__9690;
a = G__9691;
b = G__9692;
l = G__9693;
r = G__9694;
s = G__9695;
continue;
}
} else
{var part = (function (){var iter__8809__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,vec__9642,u__$1,v__$1,c__$1,j,k){
return (function iter__9643(s__9644){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,vec__9642,u__$1,v__$1,c__$1,j,k){
return (function (){var s__9644__$1 = s__9644;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9644__$1);if(temp__4126__auto__)
{var s__9644__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9644__$2))
{var c__8807__auto__ = cljs.core.chunk_first.call(null,s__9644__$2);var size__8808__auto__ = cljs.core.count.call(null,c__8807__auto__);var b__9646 = cljs.core.chunk_buffer.call(null,size__8808__auto__);if((function (){var i__9645 = (0);while(true){
if((i__9645 < size__8808__auto__))
{var y = cljs.core._nth.call(null,c__8807__auto__,i__9645);cljs.core.chunk_append.call(null,b__9646,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + (1))) - (1));return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8809__auto__ = ((function (i__9645,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8807__auto__,size__8808__auto__,b__9646,s__9644__$2,temp__4126__auto__,vec__9642,u__$1,v__$1,c__$1,j,k){
return (function iter__9655(s__9656){return (new cljs.core.LazySeq(null,((function (i__9645,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8807__auto__,size__8808__auto__,b__9646,s__9644__$2,temp__4126__auto__,vec__9642,u__$1,v__$1,c__$1,j,k){
return (function (){var s__9656__$1 = s__9656;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__9656__$1);if(temp__4126__auto____$1)
{var s__9656__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9656__$2))
{var c__8807__auto____$1 = cljs.core.chunk_first.call(null,s__9656__$2);var size__8808__auto____$1 = cljs.core.count.call(null,c__8807__auto____$1);var b__9658 = cljs.core.chunk_buffer.call(null,size__8808__auto____$1);if((function (){var i__9657 = (0);while(true){
if((i__9657 < size__8808__auto____$1))
{var z = cljs.core._nth.call(null,c__8807__auto____$1,i__9657);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0)))
{cljs.core.chunk_append.call(null,b__9658,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__9696 = (i__9657 + (1));
i__9657 = G__9696;
continue;
}
} else
{{
var G__9697 = (i__9657 + (1));
i__9657 = G__9697;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9658),iter__9655.call(null,cljs.core.chunk_rest.call(null,s__9656__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9658),null);
}
} else
{var z = cljs.core.first.call(null,s__9656__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__9655.call(null,cljs.core.rest.call(null,s__9656__$2)));
} else
{{
var G__9698 = cljs.core.rest.call(null,s__9656__$2);
s__9656__$1 = G__9698;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__9645,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8807__auto__,size__8808__auto__,b__9646,s__9644__$2,temp__4126__auto__,vec__9642,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(i__9645,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8807__auto__,size__8808__auto__,b__9646,s__9644__$2,temp__4126__auto__,vec__9642,u__$1,v__$1,c__$1,j,k))
;return iter__8809__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + (1))));
})());
})());
{
var G__9699 = (i__9645 + (1));
i__9645 = G__9699;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9646),iter__9643.call(null,cljs.core.chunk_rest.call(null,s__9644__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9646),null);
}
} else
{var y = cljs.core.first.call(null,s__9644__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + (1))) - (1));return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8809__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__9644__$2,temp__4126__auto__,vec__9642,u__$1,v__$1,c__$1,j,k){
return (function iter__9659(s__9660){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__9644__$2,temp__4126__auto__,vec__9642,u__$1,v__$1,c__$1,j,k){
return (function (){var s__9660__$1 = s__9660;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__9660__$1);if(temp__4126__auto____$1)
{var s__9660__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9660__$2))
{var c__8807__auto__ = cljs.core.chunk_first.call(null,s__9660__$2);var size__8808__auto__ = cljs.core.count.call(null,c__8807__auto__);var b__9662 = cljs.core.chunk_buffer.call(null,size__8808__auto__);if((function (){var i__9661 = (0);while(true){
if((i__9661 < size__8808__auto__))
{var z = cljs.core._nth.call(null,c__8807__auto__,i__9661);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0)))
{cljs.core.chunk_append.call(null,b__9662,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__9700 = (i__9661 + (1));
i__9661 = G__9700;
continue;
}
} else
{{
var G__9701 = (i__9661 + (1));
i__9661 = G__9701;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9662),iter__9659.call(null,cljs.core.chunk_rest.call(null,s__9660__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9662),null);
}
} else
{var z = cljs.core.first.call(null,s__9660__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__9659.call(null,cljs.core.rest.call(null,s__9660__$2)));
} else
{{
var G__9702 = cljs.core.rest.call(null,s__9660__$2);
s__9660__$1 = G__9702;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__9644__$2,temp__4126__auto__,vec__9642,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__9644__$2,temp__4126__auto__,vec__9642,u__$1,v__$1,c__$1,j,k))
;return iter__8809__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + (1))));
})());
})(),iter__9643.call(null,cljs.core.rest.call(null,s__9644__$2)));
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,vec__9642,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,vec__9642,u__$1,v__$1,c__$1,j,k))
;return iter__8809__auto__.call(null,cljs.core.range.call(null,(l + (1))));
})();return cljs.core.cons.call(null,part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,part,vec__9642,u__$1,v__$1,c__$1,j,k){
return (function (){return major_system.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
});})(n,m,f,c,u,v,a,b,l,r,s,part,vec__9642,u__$1,v__$1,c__$1,j,k))
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
if(cljs.core.not_EQ_.call(null,v.call(null,j),(0)))
{return j;
} else
{{
var G__9711 = (j - (1));
j = G__9711;
continue;
}
}
break;
}
})();if(cljs.core.truth_((function (){var and__8059__auto__ = r;if(cljs.core.truth_(and__8059__auto__))
{return (cljs.core._EQ_.call(null,j,a)) && ((((v.call(null,j) - (1)) * (r - l)) < u.call(null,j)));
} else
{return and__8059__auto__;
}
})()))
{return major_system.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if((cljs.core._EQ_.call(null,j,a)) && (cljs.core._EQ_.call(null,v.call(null,j),(1))))
{return major_system.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{var v__$1 = major_system.combinatorics.update.call(null,v,j,cljs.core.dec);var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__8809__auto__ = ((function (v__$1,j){
return (function iter__9707(s__9708){return (new cljs.core.LazySeq(null,((function (v__$1,j){
return (function (){var s__9708__$1 = s__9708;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9708__$1);if(temp__4126__auto__)
{var s__9708__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9708__$2))
{var c__8807__auto__ = cljs.core.chunk_first.call(null,s__9708__$2);var size__8808__auto__ = cljs.core.count.call(null,c__8807__auto__);var b__9710 = cljs.core.chunk_buffer.call(null,size__8808__auto__);if((function (){var i__9709 = (0);while(true){
if((i__9709 < size__8808__auto__))
{var i = cljs.core._nth.call(null,c__8807__auto__,i__9709);cljs.core.chunk_append.call(null,b__9710,(u.call(null,i) - v__$1.call(null,i)));
{
var G__9712 = (i__9709 + (1));
i__9709 = G__9712;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9710),iter__9707.call(null,cljs.core.chunk_rest.call(null,s__9708__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9710),null);
}
} else
{var i = cljs.core.first.call(null,s__9708__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__9707.call(null,cljs.core.rest.call(null,s__9708__$2)));
}
} else
{return null;
}
break;
}
});})(v__$1,j))
,null,null));
});})(v__$1,j))
;return iter__8809__auto__.call(null,cljs.core.range.call(null,a,(j + (1))));
})()):null);var v__$2 = (function (){var ks = cljs.core.range.call(null,(j + (1)),b);var v__$2 = v__$1;while(true){
if(cljs.core.empty_QMARK_.call(null,ks))
{return v__$2;
} else
{var k = cljs.core.first.call(null,ks);{
var G__9713 = cljs.core.rest.call(null,ks);
var G__9714 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__9713;
v__$2 = G__9714;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + (1))):(0));var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__8378__auto__ = (0);var y__8379__auto__ = (min_partitions_after_this - diff_uv);return ((x__8378__auto__ > y__8379__auto__) ? x__8378__auto__ : y__8379__auto__);
})():(0));var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,(0)))?v__$2:(function (){var k_1 = (b - (1));var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__9715 = (k_1 - (1));
var G__9716 = cljs.core.assoc.call(null,v__$3,k_1,(0));
var G__9717 = (amount - vk);
k_1 = G__9715;
v__$3 = G__9716;
amount = G__9717;
continue;
}
} else
{return cljs.core.assoc.call(null,v__$3,k_1,(vk - amount));
}
break;
}
})());return major_system.combinatorics.multiset_partitions_M.call(null,n,m,f,c,u,v__$3,a,b,l,r,s);

}
}
});
major_system.combinatorics.m6 = (function m6(n,m,f,c,u,v,a,b,l,r,s){if(cljs.core._EQ_.call(null,l,(0)))
{return cljs.core.List.EMPTY;
} else
{var l__$1 = (l - (1));var b__$1 = a;var a__$1 = f.call(null,l__$1);return major_system.combinatorics.m5.call(null,n,m,f,c,u,v,a__$1,b__$1,l__$1,r,s);
}
});
/**
* @param {...*} var_args
*/
major_system.combinatorics.partitions_M = (function() { 
var partitions_M__delegate = function (items,p__9718){var map__9776 = p__9718;var map__9776__$1 = ((cljs.core.seq_QMARK_.call(null,map__9776))?cljs.core.apply.call(null,cljs.core.hash_map,map__9776):map__9776);var from = cljs.core.get.call(null,map__9776__$1,new cljs.core.Keyword(null,"min","min",444991522));var to = cljs.core.get.call(null,map__9776__$1,new cljs.core.Keyword(null,"max","max",61366548));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),(0)))
{if((((function (){var or__8071__auto__ = from;if(cljs.core.truth_(or__8071__auto__))
{return or__8071__auto__;
} else
{return (0);
}
})() <= (0))) && (((0) <= (function (){var or__8071__auto__ = to;if(cljs.core.truth_(or__8071__auto__))
{return or__8071__auto__;
} else
{return (0);
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var items__$1 = cljs.core.vec.call(null,items);var ditems = cljs.core.vec.call(null,cljs.core.distinct.call(null,items__$1));var freqs = cljs.core.frequencies.call(null,items__$1);var N = cljs.core.count.call(null,items__$1);var M = cljs.core.count.call(null,ditems);var from__$1 = (cljs.core.truth_((function (){var and__8059__auto__ = from;if(cljs.core.truth_(and__8059__auto__))
{return (from <= (1));
} else
{return and__8059__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__8059__auto__ = to;if(cljs.core.truth_(and__8059__auto__))
{return (to >= N);
} else
{return and__8059__auto__;
}
})())?null:to);if(!((((1) <= (function (){var or__8071__auto__ = from__$1;if(cljs.core.truth_(or__8071__auto__))
{return or__8071__auto__;
} else
{return (1);
}
})())) && ((((function (){var or__8071__auto__ = from__$1;if(cljs.core.truth_(or__8071__auto__))
{return or__8071__auto__;
} else
{return (1);
}
})() <= (function (){var or__8071__auto__ = to__$1;if(cljs.core.truth_(or__8071__auto__))
{return or__8071__auto__;
} else
{return N;
}
})())) && (((function (){var or__8071__auto__ = to__$1;if(cljs.core.truth_(or__8071__auto__))
{return or__8071__auto__;
} else
{return N;
}
})() <= N)))))
{return cljs.core.List.EMPTY;
} else
{if(cljs.core._EQ_.call(null,N,(1)))
{return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,items__$1)))))))))));
} else
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8809__auto__ = ((function (items__$1,ditems,freqs,N,M,from__$1,to__$1,map__9776,map__9776__$1,from,to){
return (function iter__9777(s__9778){return (new cljs.core.LazySeq(null,((function (items__$1,ditems,freqs,N,M,from__$1,to__$1,map__9776,map__9776__$1,from,to){
return (function (){var s__9778__$1 = s__9778;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9778__$1);if(temp__4126__auto__)
{var s__9778__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9778__$2))
{var c__8807__auto__ = cljs.core.chunk_first.call(null,s__9778__$2);var size__8808__auto__ = cljs.core.count.call(null,c__8807__auto__);var b__9780 = cljs.core.chunk_buffer.call(null,size__8808__auto__);if((function (){var i__9779 = (0);while(true){
if((i__9779 < size__8808__auto__))
{var i = cljs.core._nth.call(null,c__8807__auto__,i__9779);var j = (i + (1));cljs.core.chunk_append.call(null,b__9780,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));
{
var G__9833 = (i__9779 + (1));
i__9779 = G__9833;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9780),iter__9777.call(null,cljs.core.chunk_rest.call(null,s__9778__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9780),null);
}
} else
{var i = cljs.core.first.call(null,s__9778__$2);var j = (i + (1));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),iter__9777.call(null,cljs.core.rest.call(null,s__9778__$2)));
}
} else
{return null;
}
break;
}
});})(items__$1,ditems,freqs,N,M,from__$1,to__$1,map__9776,map__9776__$1,from,to))
,null,null));
});})(items__$1,ditems,freqs,N,M,from__$1,to__$1,map__9776,map__9776__$1,from,to))
;return iter__8809__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = major_system.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__8809__auto__ = ((function (start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__9776,map__9776__$1,from,to){
return (function iter__9781(s__9782){return (new cljs.core.LazySeq(null,((function (start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__9776,map__9776__$1,from,to){
return (function (){var s__9782__$1 = s__9782;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9782__$1);if(temp__4126__auto__)
{var s__9782__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9782__$2))
{var c__8807__auto__ = cljs.core.chunk_first.call(null,s__9782__$2);var size__8808__auto__ = cljs.core.count.call(null,c__8807__auto__);var b__9784 = cljs.core.chunk_buffer.call(null,size__8808__auto__);if((function (){var i__9783 = (0);while(true){
if((i__9783 < size__8808__auto__))
{var part = cljs.core._nth.call(null,c__8807__auto__,i__9783);cljs.core.chunk_append.call(null,b__9784,(function (){var iter__8809__auto__ = ((function (i__9783,part,c__8807__auto__,size__8808__auto__,b__9784,s__9782__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__9776,map__9776__$1,from,to){
return (function iter__9809(s__9810){return (new cljs.core.LazySeq(null,((function (i__9783,part,c__8807__auto__,size__8808__auto__,b__9784,s__9782__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__9776,map__9776__$1,from,to){
return (function (){var s__9810__$1 = s__9810;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__9810__$1);if(temp__4126__auto____$1)
{var s__9810__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9810__$2))
{var c__8807__auto____$1 = cljs.core.chunk_first.call(null,s__9810__$2);var size__8808__auto____$1 = cljs.core.count.call(null,c__8807__auto____$1);var b__9812 = cljs.core.chunk_buffer.call(null,size__8808__auto____$1);if((function (){var i__9811 = (0);while(true){
if((i__9811 < size__8808__auto____$1))
{var multiset = cljs.core._nth.call(null,c__8807__auto____$1,i__9811);cljs.core.chunk_append.call(null,b__9812,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__9811,i__9783,multiset,c__8807__auto____$1,size__8808__auto____$1,b__9812,s__9810__$2,temp__4126__auto____$1,part,c__8807__auto__,size__8808__auto__,b__9784,s__9782__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__9776,map__9776__$1,from,to){
return (function (p__9817){var vec__9818 = p__9817;var index = cljs.core.nth.call(null,vec__9818,(0),null);var numtimes = cljs.core.nth.call(null,vec__9818,(1),null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__9811,i__9783,multiset,c__8807__auto____$1,size__8808__auto____$1,b__9812,s__9810__$2,temp__4126__auto____$1,part,c__8807__auto__,size__8808__auto__,b__9784,s__9782__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__9776,map__9776__$1,from,to))
,multiset)));
{
var G__9834 = (i__9811 + (1));
i__9811 = G__9834;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9812),iter__9809.call(null,cljs.core.chunk_rest.call(null,s__9810__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9812),null);
}
} else
{var multiset = cljs.core.first.call(null,s__9810__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__9783,multiset,s__9810__$2,temp__4126__auto____$1,part,c__8807__auto__,size__8808__auto__,b__9784,s__9782__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__9776,map__9776__$1,from,to){
return (function (p__9819){var vec__9820 = p__9819;var index = cljs.core.nth.call(null,vec__9820,(0),null);var numtimes = cljs.core.nth.call(null,vec__9820,(1),null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__9783,multiset,s__9810__$2,temp__4126__auto____$1,part,c__8807__auto__,size__8808__auto__,b__9784,s__9782__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__9776,map__9776__$1,from,to))
,multiset)),iter__9809.call(null,cljs.core.rest.call(null,s__9810__$2)));
}
} else
{return null;
}
break;
}
});})(i__9783,part,c__8807__auto__,size__8808__auto__,b__9784,s__9782__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__9776,map__9776__$1,from,to))
,null,null));
});})(i__9783,part,c__8807__auto__,size__8808__auto__,b__9784,s__9782__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__9776,map__9776__$1,from,to))
;return iter__8809__auto__.call(null,part);
})());
{
var G__9835 = (i__9783 + (1));
i__9783 = G__9835;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9784),iter__9781.call(null,cljs.core.chunk_rest.call(null,s__9782__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9784),null);
}
} else
{var part = cljs.core.first.call(null,s__9782__$2);return cljs.core.cons.call(null,(function (){var iter__8809__auto__ = ((function (part,s__9782__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__9776,map__9776__$1,from,to){
return (function iter__9821(s__9822){return (new cljs.core.LazySeq(null,((function (part,s__9782__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__9776,map__9776__$1,from,to){
return (function (){var s__9822__$1 = s__9822;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__9822__$1);if(temp__4126__auto____$1)
{var s__9822__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9822__$2))
{var c__8807__auto__ = cljs.core.chunk_first.call(null,s__9822__$2);var size__8808__auto__ = cljs.core.count.call(null,c__8807__auto__);var b__9824 = cljs.core.chunk_buffer.call(null,size__8808__auto__);if((function (){var i__9823 = (0);while(true){
if((i__9823 < size__8808__auto__))
{var multiset = cljs.core._nth.call(null,c__8807__auto__,i__9823);cljs.core.chunk_append.call(null,b__9824,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__9823,multiset,c__8807__auto__,size__8808__auto__,b__9824,s__9822__$2,temp__4126__auto____$1,part,s__9782__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__9776,map__9776__$1,from,to){
return (function (p__9829){var vec__9830 = p__9829;var index = cljs.core.nth.call(null,vec__9830,(0),null);var numtimes = cljs.core.nth.call(null,vec__9830,(1),null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__9823,multiset,c__8807__auto__,size__8808__auto__,b__9824,s__9822__$2,temp__4126__auto____$1,part,s__9782__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__9776,map__9776__$1,from,to))
,multiset)));
{
var G__9836 = (i__9823 + (1));
i__9823 = G__9836;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9824),iter__9821.call(null,cljs.core.chunk_rest.call(null,s__9822__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9824),null);
}
} else
{var multiset = cljs.core.first.call(null,s__9822__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__9822__$2,temp__4126__auto____$1,part,s__9782__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__9776,map__9776__$1,from,to){
return (function (p__9831){var vec__9832 = p__9831;var index = cljs.core.nth.call(null,vec__9832,(0),null);var numtimes = cljs.core.nth.call(null,vec__9832,(1),null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(multiset,s__9822__$2,temp__4126__auto____$1,part,s__9782__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__9776,map__9776__$1,from,to))
,multiset)),iter__9821.call(null,cljs.core.rest.call(null,s__9822__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__9782__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__9776,map__9776__$1,from,to))
,null,null));
});})(part,s__9782__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__9776,map__9776__$1,from,to))
;return iter__8809__auto__.call(null,part);
})(),iter__9781.call(null,cljs.core.rest.call(null,s__9782__$2)));
}
} else
{return null;
}
break;
}
});})(start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__9776,map__9776__$1,from,to))
,null,null));
});})(start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__9776,map__9776__$1,from,to))
;return iter__8809__auto__.call(null,parts);

}
}
}
};
var partitions_M = function (items,var_args){
var p__9718 = null;if (arguments.length > 1) {
  p__9718 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__9718);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__9837){
var items = cljs.core.first(arglist__9837);
var p__9718 = cljs.core.rest(arglist__9837);
return partitions_M__delegate(items,p__9718);
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
var partitions__delegate = function (items,args){if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),(0)))
{return cljs.core.apply.call(null,major_system.combinatorics.partitions_H,items,args);
} else
{if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,items)))
{return cljs.core.apply.call(null,major_system.combinatorics.partitions_H,items,args);
} else
{return cljs.core.apply.call(null,major_system.combinatorics.partitions_M,items,args);

}
}
};
var partitions = function (items,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions__delegate.call(this,items,args);};
partitions.cljs$lang$maxFixedArity = 1;
partitions.cljs$lang$applyTo = (function (arglist__9838){
var items = cljs.core.first(arglist__9838);
var args = cljs.core.rest(arglist__9838);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;

//# sourceMappingURL=combinatorics.js.map