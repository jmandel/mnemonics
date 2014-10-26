// Compiled by ClojureScript 0.0-2356
goog.provide('major_system.combinatorics');
goog.require('cljs.core');
major_system.combinatorics.index_combinations = (function index_combinations(n,cnt){return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__4407__auto__ = (function iter__5114(s__5115){return (new cljs.core.LazySeq(null,(function (){var s__5115__$1 = s__5115;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5115__$1);if(temp__4126__auto__)
{var s__5115__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5115__$2))
{var c__4405__auto__ = cljs.core.chunk_first.call(null,s__5115__$2);var size__4406__auto__ = cljs.core.count.call(null,c__4405__auto__);var b__5117 = cljs.core.chunk_buffer.call(null,size__4406__auto__);if((function (){var i__5116 = (0);while(true){
if((i__5116 < size__4406__auto__))
{var j = cljs.core._nth.call(null,c__4405__auto__,i__5116);cljs.core.chunk_append.call(null,b__5117,((j + cnt) + (- (n + (1)))));
{
var G__5118 = (i__5116 + (1));
i__5116 = G__5118;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5117),iter__5114.call(null,cljs.core.chunk_rest.call(null,s__5115__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5117),null);
}
} else
{var j = cljs.core.first.call(null,s__5115__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + (1)))),iter__5114.call(null,cljs.core.rest.call(null,s__5115__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4407__auto__.call(null,cljs.core.range.call(null,(1),(n + (1))));
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
var G__5119 = cljs.core.assoc.call(null,c__$3,(j__$1 - (1)),(c__$3.call(null,j__$1) - (1)));
var G__5120 = (j__$1 - (1));
c__$3 = G__5119;
j__$1 = G__5120;
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
return (function (p1__5121_SHARP_){return cljs.core.map.call(null,v_items,p1__5121_SHARP_);
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
var G__5122 = (i - (1));
var G__5123 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__5122;
v_seqs__$2 = G__5123;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__5124){
var seqs = cljs.core.seq(arglist__5124);
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
var G__5125 = (i - (1));
i = G__5125;
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
var G__5126 = (i - (1));
i = G__5126;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + (1));var l__$1 = (len - (1));while(true){
if((k < l__$1))
{{
var G__5127 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__5128 = (k + (1));
var G__5129 = (l__$1 - (1));
v__$1 = G__5127;
k = G__5128;
l__$1 = G__5129;
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
major_system.combinatorics.sorted_numbers_QMARK_ = (function sorted_numbers_QMARK_(s){var and__3657__auto__ = cljs.core.every_QMARK_.call(null,cljs.core.number_QMARK_,s);if(and__3657__auto__)
{var or__3669__auto__ = cljs.core.empty_QMARK_.call(null,s);if(or__3669__auto__)
{return or__3669__auto__;
} else
{return cljs.core.apply.call(null,cljs.core._LT__EQ_,s);
}
} else
{return and__3657__auto__;
}
});
/**
* Handles the case when you want the permutations of a list with duplicate items.
*/
major_system.combinatorics.multi_perm = (function multi_perm(l){var f = cljs.core.frequencies.call(null,l);var v = cljs.core.vec.call(null,cljs.core.keys.call(null,f));var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4407__auto__ = ((function (f,v){
return (function iter__5134(s__5135){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__5135__$1 = s__5135;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5135__$1);if(temp__4126__auto__)
{var s__5135__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5135__$2))
{var c__4405__auto__ = cljs.core.chunk_first.call(null,s__5135__$2);var size__4406__auto__ = cljs.core.count.call(null,c__4405__auto__);var b__5137 = cljs.core.chunk_buffer.call(null,size__4406__auto__);if((function (){var i__5136 = (0);while(true){
if((i__5136 < size__4406__auto__))
{var i = cljs.core._nth.call(null,c__4405__auto__,i__5136);cljs.core.chunk_append.call(null,b__5137,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__5138 = (i__5136 + (1));
i__5136 = G__5138;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5137),iter__5134.call(null,cljs.core.chunk_rest.call(null,s__5135__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5137),null);
}
} else
{var i = cljs.core.first.call(null,s__5135__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__5134.call(null,cljs.core.rest.call(null,s__5135__$2)));
}
} else
{return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;return iter__4407__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
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
return (function (p1__5139_SHARP_){return cljs.core.map.call(null,v,p1__5139_SHARP_);
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
{return cljs.core.vec.call(null,(function (){var iter__4407__auto__ = (function iter__5144(s__5145){return (new cljs.core.LazySeq(null,(function (){var s__5145__$1 = s__5145;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5145__$1);if(temp__4126__auto__)
{var s__5145__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5145__$2))
{var c__4405__auto__ = cljs.core.chunk_first.call(null,s__5145__$2);var size__4406__auto__ = cljs.core.count.call(null,c__4405__auto__);var b__5147 = cljs.core.chunk_buffer.call(null,size__4406__auto__);if((function (){var i__5146 = (0);while(true){
if((i__5146 < size__4406__auto__))
{var i = cljs.core._nth.call(null,c__4405__auto__,i__5146);cljs.core.chunk_append.call(null,b__5147,(function (){var x__3976__auto__ = (0);var y__3977__auto__ = (i - ((n - s) - (-1)));return ((x__3976__auto__ > y__3977__auto__) ? x__3976__auto__ : y__3977__auto__);
})());
{
var G__5148 = (i__5146 + (1));
i__5146 = G__5148;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5147),iter__5144.call(null,cljs.core.chunk_rest.call(null,s__5145__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5147),null);
}
} else
{var i = cljs.core.first.call(null,s__5145__$2);return cljs.core.cons.call(null,(function (){var x__3976__auto__ = (0);var y__3977__auto__ = (i - ((n - s) - (-1)));return ((x__3976__auto__ > y__3977__auto__) ? x__3976__auto__ : y__3977__auto__);
})(),iter__5144.call(null,cljs.core.rest.call(null,s__5145__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4407__auto__.call(null,cljs.core.range.call(null,(1),(n + (1))));
})());
} else
{return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,(0)));
}
});
major_system.combinatorics.growth_strings_H = (function() {
var growth_strings_H = null;
var growth_strings_H__3 = (function (n,r,s){return growth_strings_H.call(null,n,major_system.combinatorics.init.call(null,n,s),cljs.core.vec.call(null,cljs.core.repeat.call(null,n,(1))),r,s);
});
var growth_strings_H__5 = (function (n,a,b,r,s){return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,(function (){if((function (){var and__3657__auto__ = (cljs.core.peek.call(null,b) > cljs.core.peek.call(null,a));if(and__3657__auto__)
{if(cljs.core.truth_(r))
{return (cljs.core.peek.call(null,a) < (r - (1)));
} else
{return true;
}
} else
{return and__3657__auto__;
}
})())
{return growth_strings_H.call(null,n,major_system.combinatorics.update.call(null,a,(n - (1)),cljs.core.inc),b,r,s);
} else
{var j = (function (){var j = (n - (2));while(true){
if((function (){var and__3657__auto__ = (a.call(null,j) < b.call(null,j));if(and__3657__auto__)
{var and__3657__auto____$1 = (cljs.core.truth_(r)?(a.call(null,j) < (r - (1))):true);if(and__3657__auto____$1)
{if(cljs.core.truth_(s))
{return (((s - b.call(null,j)) - ((((a.call(null,j) + (1)) === b.call(null,j)))?(1):(0))) <= (n - j));
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
var G__5151 = (j - (1));
j = G__5151;
continue;
}
}
break;
}
})();if((j === (0)))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = major_system.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?(1):(0)))):null);var vec__5150 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + (1));var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?(1):(0)));while(true){
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
var G__5152 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__5153 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__5154 = (i + (1));
var G__5155 = (function (){var x__3976__auto__ = current_max;var y__3977__auto__ = (new_a_i + (1));return ((x__3976__auto__ > y__3977__auto__) ? x__3976__auto__ : y__3977__auto__);
})();
a__$2 = G__5152;
b__$1 = G__5153;
i = G__5154;
current_max = G__5155;
continue;
}
} else
{{
var G__5156 = cljs.core.assoc.call(null,a__$2,i,(0));
var G__5157 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__5158 = (i + (1));
var G__5159 = current_max;
a__$2 = G__5156;
b__$1 = G__5157;
i = G__5158;
current_max = G__5159;
continue;
}

}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__5150,(0),null);var b__$1 = cljs.core.nth.call(null,vec__5150,(1),null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__5160){var map__5166 = p__5160;var map__5166__$1 = ((cljs.core.seq_QMARK_.call(null,map__5166))?cljs.core.apply.call(null,cljs.core.hash_map,map__5166):map__5166);var from = cljs.core.get.call(null,map__5166__$1,new cljs.core.Keyword(null,"min","min",444991522));var to = cljs.core.get.call(null,map__5166__$1,new cljs.core.Keyword(null,"max","max",61366548));if(cljs.core._EQ_.call(null,N,(0)))
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
{if(cljs.core._EQ_.call(null,N,(0)))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{if(cljs.core._EQ_.call(null,N,(1)))
{return cljs.core.list(cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)));
} else
{if(cljs.core._EQ_.call(null,to__$1,(1)))
{return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.range.call(null,N)))))));
} else
{var growth_strings = major_system.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__4407__auto__ = ((function (growth_strings,from__$1,to__$1,map__5166,map__5166__$1,from,to){
return (function iter__5167(s__5168){return (new cljs.core.LazySeq(null,((function (growth_strings,from__$1,to__$1,map__5166,map__5166__$1,from,to){
return (function (){var s__5168__$1 = s__5168;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5168__$1);if(temp__4126__auto__)
{var s__5168__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5168__$2))
{var c__4405__auto__ = cljs.core.chunk_first.call(null,s__5168__$2);var size__4406__auto__ = cljs.core.count.call(null,c__4405__auto__);var b__5170 = cljs.core.chunk_buffer.call(null,size__4406__auto__);if((function (){var i__5169 = (0);while(true){
if((i__5169 < size__4406__auto__))
{var growth_string = cljs.core._nth.call(null,c__4405__auto__,i__5169);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__5170,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__5171 = (i__5169 + (1));
i__5169 = G__5171;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5170),iter__5167.call(null,cljs.core.chunk_rest.call(null,s__5168__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5170),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__5168__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__5167.call(null,cljs.core.rest.call(null,s__5168__$2)));
}
} else
{return null;
}
break;
}
});})(growth_strings,from__$1,to__$1,map__5166,map__5166__$1,from,to))
,null,null));
});})(growth_strings,from__$1,to__$1,map__5166,map__5166__$1,from,to))
;return iter__4407__auto__.call(null,growth_strings);

}
}
}
}
}
};
var lex_partitions_H = function (N,var_args){
var p__5160 = null;if (arguments.length > 1) {
  p__5160 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__5160);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__5172){
var N = cljs.core.first(arglist__5172);
var p__5160 = cljs.core.rest(arglist__5172);
return lex_partitions_H__delegate(N,p__5160);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
major_system.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,major_system.combinatorics.lex_partitions_H,N,args);var iter__4407__auto__ = ((function (items__$1,N,lex){
return (function iter__5193(s__5194){return (new cljs.core.LazySeq(null,((function (items__$1,N,lex){
return (function (){var s__5194__$1 = s__5194;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5194__$1);if(temp__4126__auto__)
{var s__5194__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5194__$2))
{var c__4405__auto__ = cljs.core.chunk_first.call(null,s__5194__$2);var size__4406__auto__ = cljs.core.count.call(null,c__4405__auto__);var b__5196 = cljs.core.chunk_buffer.call(null,size__4406__auto__);if((function (){var i__5195 = (0);while(true){
if((i__5195 < size__4406__auto__))
{var parts = cljs.core._nth.call(null,c__4405__auto__,i__5195);cljs.core.chunk_append.call(null,b__5196,(function (){var iter__4407__auto__ = ((function (i__5195,parts,c__4405__auto__,size__4406__auto__,b__5196,s__5194__$2,temp__4126__auto__,items__$1,N,lex){
return (function iter__5205(s__5206){return (new cljs.core.LazySeq(null,((function (i__5195,parts,c__4405__auto__,size__4406__auto__,b__5196,s__5194__$2,temp__4126__auto__,items__$1,N,lex){
return (function (){var s__5206__$1 = s__5206;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__5206__$1);if(temp__4126__auto____$1)
{var s__5206__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__5206__$2))
{var c__4405__auto____$1 = cljs.core.chunk_first.call(null,s__5206__$2);var size__4406__auto____$1 = cljs.core.count.call(null,c__4405__auto____$1);var b__5208 = cljs.core.chunk_buffer.call(null,size__4406__auto____$1);if((function (){var i__5207 = (0);while(true){
if((i__5207 < size__4406__auto____$1))
{var part = cljs.core._nth.call(null,c__4405__auto____$1,i__5207);cljs.core.chunk_append.call(null,b__5208,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__5207,i__5195,part,c__4405__auto____$1,size__4406__auto____$1,b__5208,s__5206__$2,temp__4126__auto____$1,parts,c__4405__auto__,size__4406__auto__,b__5196,s__5194__$2,temp__4126__auto__,items__$1,N,lex){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__5207,i__5195,part,c__4405__auto____$1,size__4406__auto____$1,b__5208,s__5206__$2,temp__4126__auto____$1,parts,c__4405__auto__,size__4406__auto__,b__5196,s__5194__$2,temp__4126__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__5213 = (i__5207 + (1));
i__5207 = G__5213;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5208),iter__5205.call(null,cljs.core.chunk_rest.call(null,s__5206__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5208),null);
}
} else
{var part = cljs.core.first.call(null,s__5206__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__5195,part,s__5206__$2,temp__4126__auto____$1,parts,c__4405__auto__,size__4406__auto__,b__5196,s__5194__$2,temp__4126__auto__,items__$1,N,lex){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__5195,part,s__5206__$2,temp__4126__auto____$1,parts,c__4405__auto__,size__4406__auto__,b__5196,s__5194__$2,temp__4126__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__5205.call(null,cljs.core.rest.call(null,s__5206__$2)));
}
} else
{return null;
}
break;
}
});})(i__5195,parts,c__4405__auto__,size__4406__auto__,b__5196,s__5194__$2,temp__4126__auto__,items__$1,N,lex))
,null,null));
});})(i__5195,parts,c__4405__auto__,size__4406__auto__,b__5196,s__5194__$2,temp__4126__auto__,items__$1,N,lex))
;return iter__4407__auto__.call(null,parts);
})());
{
var G__5214 = (i__5195 + (1));
i__5195 = G__5214;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5196),iter__5193.call(null,cljs.core.chunk_rest.call(null,s__5194__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5196),null);
}
} else
{var parts = cljs.core.first.call(null,s__5194__$2);return cljs.core.cons.call(null,(function (){var iter__4407__auto__ = ((function (parts,s__5194__$2,temp__4126__auto__,items__$1,N,lex){
return (function iter__5209(s__5210){return (new cljs.core.LazySeq(null,((function (parts,s__5194__$2,temp__4126__auto__,items__$1,N,lex){
return (function (){var s__5210__$1 = s__5210;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__5210__$1);if(temp__4126__auto____$1)
{var s__5210__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__5210__$2))
{var c__4405__auto__ = cljs.core.chunk_first.call(null,s__5210__$2);var size__4406__auto__ = cljs.core.count.call(null,c__4405__auto__);var b__5212 = cljs.core.chunk_buffer.call(null,size__4406__auto__);if((function (){var i__5211 = (0);while(true){
if((i__5211 < size__4406__auto__))
{var part = cljs.core._nth.call(null,c__4405__auto__,i__5211);cljs.core.chunk_append.call(null,b__5212,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__5211,part,c__4405__auto__,size__4406__auto__,b__5212,s__5210__$2,temp__4126__auto____$1,parts,s__5194__$2,temp__4126__auto__,items__$1,N,lex){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__5211,part,c__4405__auto__,size__4406__auto__,b__5212,s__5210__$2,temp__4126__auto____$1,parts,s__5194__$2,temp__4126__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__5215 = (i__5211 + (1));
i__5211 = G__5215;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5212),iter__5209.call(null,cljs.core.chunk_rest.call(null,s__5210__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5212),null);
}
} else
{var part = cljs.core.first.call(null,s__5210__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__5210__$2,temp__4126__auto____$1,parts,s__5194__$2,temp__4126__auto__,items__$1,N,lex){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__5210__$2,temp__4126__auto____$1,parts,s__5194__$2,temp__4126__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__5209.call(null,cljs.core.rest.call(null,s__5210__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__5194__$2,temp__4126__auto__,items__$1,N,lex))
,null,null));
});})(parts,s__5194__$2,temp__4126__auto__,items__$1,N,lex))
;return iter__4407__auto__.call(null,parts);
})(),iter__5193.call(null,cljs.core.rest.call(null,s__5194__$2)));
}
} else
{return null;
}
break;
}
});})(items__$1,N,lex))
,null,null));
});})(items__$1,N,lex))
;return iter__4407__auto__.call(null,lex);
};
var partitions_H = function (items,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_H__delegate.call(this,items,args);};
partitions_H.cljs$lang$maxFixedArity = 1;
partitions_H.cljs$lang$applyTo = (function (arglist__5216){
var items = cljs.core.first(arglist__5216);
var args = cljs.core.rest(arglist__5216);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
major_system.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__5239 = (function (){var j = (0);var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__5261 = (j + (1));
var G__5262 = cljs.core.assoc.call(null,c__$1,j,(j + (1)));
var G__5263 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + (1))));
var G__5264 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + (1))));
j = G__5261;
c__$1 = G__5262;
u__$1 = G__5263;
v__$1 = G__5264;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__5239,(0),null);var u__$1 = cljs.core.nth.call(null,vec__5239,(1),null);var v__$1 = cljs.core.nth.call(null,vec__5239,(2),null);var a = (0);var b = m;var l = (0);var f__$1 = cljs.core.assoc.call(null,f,(0),(0),(1),m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__5240 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),(0)))
{{
var G__5265 = (j + (1));
var G__5266 = k;
var G__5267 = true;
var G__5268 = u__$2;
var G__5269 = v__$1;
var G__5270 = c__$1;
j = G__5265;
k = G__5266;
x = G__5267;
u__$1 = G__5268;
v__$1 = G__5269;
c__$1 = G__5270;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__3983__auto__ = v__$1.call(null,j);var y__3984__auto__ = u__$2.call(null,k);return ((x__3983__auto__ < y__3984__auto__) ? x__3983__auto__ : y__3984__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + (1));var j__$1 = (j + (1));{
var G__5271 = j__$1;
var G__5272 = k__$1;
var G__5273 = x__$1;
var G__5274 = u__$2;
var G__5275 = v__$2;
var G__5276 = c__$2;
j = G__5271;
k = G__5272;
x = G__5273;
u__$1 = G__5274;
v__$1 = G__5275;
c__$1 = G__5276;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + (1));var j__$1 = (j + (1));{
var G__5277 = j__$1;
var G__5278 = k__$1;
var G__5279 = x;
var G__5280 = u__$2;
var G__5281 = v__$2;
var G__5282 = c__$2;
j = G__5277;
k = G__5278;
x = G__5279;
u__$1 = G__5280;
v__$1 = G__5281;
c__$1 = G__5282;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__5240,(0),null);var v__$1 = cljs.core.nth.call(null,vec__5240,(1),null);var c__$1 = cljs.core.nth.call(null,vec__5240,(2),null);var j = cljs.core.nth.call(null,vec__5240,(3),null);var k = cljs.core.nth.call(null,vec__5240,(4),null);if(cljs.core.truth_((function (){var and__3657__auto__ = r;if(cljs.core.truth_(and__3657__auto__))
{return ((k > b)) && (cljs.core._EQ_.call(null,l,(r - (1))));
} else
{return and__3657__auto__;
}
})()))
{return major_system.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if(cljs.core.truth_((function (){var and__3657__auto__ = s;if(cljs.core.truth_(and__3657__auto__))
{return ((k <= b)) && (((l + (1)) < s));
} else
{return and__3657__auto__;
}
})()))
{return major_system.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if((k > b))
{var a__$1 = b;var b__$1 = k;var l__$1 = (l + (1));var f__$1 = cljs.core.assoc.call(null,f,(l__$1 + (1)),b__$1);{
var G__5283 = n;
var G__5284 = m;
var G__5285 = f__$1;
var G__5286 = c__$1;
var G__5287 = u__$1;
var G__5288 = v__$1;
var G__5289 = a__$1;
var G__5290 = b__$1;
var G__5291 = l__$1;
var G__5292 = r;
var G__5293 = s;
n = G__5283;
m = G__5284;
f = G__5285;
c = G__5286;
u = G__5287;
v = G__5288;
a = G__5289;
b = G__5290;
l = G__5291;
r = G__5292;
s = G__5293;
continue;
}
} else
{var part = (function (){var iter__4407__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,vec__5240,u__$1,v__$1,c__$1,j,k){
return (function iter__5241(s__5242){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,vec__5240,u__$1,v__$1,c__$1,j,k){
return (function (){var s__5242__$1 = s__5242;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5242__$1);if(temp__4126__auto__)
{var s__5242__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5242__$2))
{var c__4405__auto__ = cljs.core.chunk_first.call(null,s__5242__$2);var size__4406__auto__ = cljs.core.count.call(null,c__4405__auto__);var b__5244 = cljs.core.chunk_buffer.call(null,size__4406__auto__);if((function (){var i__5243 = (0);while(true){
if((i__5243 < size__4406__auto__))
{var y = cljs.core._nth.call(null,c__4405__auto__,i__5243);cljs.core.chunk_append.call(null,b__5244,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + (1))) - (1));return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4407__auto__ = ((function (i__5243,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4405__auto__,size__4406__auto__,b__5244,s__5242__$2,temp__4126__auto__,vec__5240,u__$1,v__$1,c__$1,j,k){
return (function iter__5253(s__5254){return (new cljs.core.LazySeq(null,((function (i__5243,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4405__auto__,size__4406__auto__,b__5244,s__5242__$2,temp__4126__auto__,vec__5240,u__$1,v__$1,c__$1,j,k){
return (function (){var s__5254__$1 = s__5254;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__5254__$1);if(temp__4126__auto____$1)
{var s__5254__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__5254__$2))
{var c__4405__auto____$1 = cljs.core.chunk_first.call(null,s__5254__$2);var size__4406__auto____$1 = cljs.core.count.call(null,c__4405__auto____$1);var b__5256 = cljs.core.chunk_buffer.call(null,size__4406__auto____$1);if((function (){var i__5255 = (0);while(true){
if((i__5255 < size__4406__auto____$1))
{var z = cljs.core._nth.call(null,c__4405__auto____$1,i__5255);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0)))
{cljs.core.chunk_append.call(null,b__5256,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__5294 = (i__5255 + (1));
i__5255 = G__5294;
continue;
}
} else
{{
var G__5295 = (i__5255 + (1));
i__5255 = G__5295;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5256),iter__5253.call(null,cljs.core.chunk_rest.call(null,s__5254__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5256),null);
}
} else
{var z = cljs.core.first.call(null,s__5254__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__5253.call(null,cljs.core.rest.call(null,s__5254__$2)));
} else
{{
var G__5296 = cljs.core.rest.call(null,s__5254__$2);
s__5254__$1 = G__5296;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__5243,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4405__auto__,size__4406__auto__,b__5244,s__5242__$2,temp__4126__auto__,vec__5240,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(i__5243,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4405__auto__,size__4406__auto__,b__5244,s__5242__$2,temp__4126__auto__,vec__5240,u__$1,v__$1,c__$1,j,k))
;return iter__4407__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + (1))));
})());
})());
{
var G__5297 = (i__5243 + (1));
i__5243 = G__5297;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5244),iter__5241.call(null,cljs.core.chunk_rest.call(null,s__5242__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5244),null);
}
} else
{var y = cljs.core.first.call(null,s__5242__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + (1))) - (1));return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4407__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__5242__$2,temp__4126__auto__,vec__5240,u__$1,v__$1,c__$1,j,k){
return (function iter__5257(s__5258){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__5242__$2,temp__4126__auto__,vec__5240,u__$1,v__$1,c__$1,j,k){
return (function (){var s__5258__$1 = s__5258;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__5258__$1);if(temp__4126__auto____$1)
{var s__5258__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__5258__$2))
{var c__4405__auto__ = cljs.core.chunk_first.call(null,s__5258__$2);var size__4406__auto__ = cljs.core.count.call(null,c__4405__auto__);var b__5260 = cljs.core.chunk_buffer.call(null,size__4406__auto__);if((function (){var i__5259 = (0);while(true){
if((i__5259 < size__4406__auto__))
{var z = cljs.core._nth.call(null,c__4405__auto__,i__5259);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0)))
{cljs.core.chunk_append.call(null,b__5260,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__5298 = (i__5259 + (1));
i__5259 = G__5298;
continue;
}
} else
{{
var G__5299 = (i__5259 + (1));
i__5259 = G__5299;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5260),iter__5257.call(null,cljs.core.chunk_rest.call(null,s__5258__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5260),null);
}
} else
{var z = cljs.core.first.call(null,s__5258__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__5257.call(null,cljs.core.rest.call(null,s__5258__$2)));
} else
{{
var G__5300 = cljs.core.rest.call(null,s__5258__$2);
s__5258__$1 = G__5300;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__5242__$2,temp__4126__auto__,vec__5240,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__5242__$2,temp__4126__auto__,vec__5240,u__$1,v__$1,c__$1,j,k))
;return iter__4407__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + (1))));
})());
})(),iter__5241.call(null,cljs.core.rest.call(null,s__5242__$2)));
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,vec__5240,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,vec__5240,u__$1,v__$1,c__$1,j,k))
;return iter__4407__auto__.call(null,cljs.core.range.call(null,(l + (1))));
})();return cljs.core.cons.call(null,part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,part,vec__5240,u__$1,v__$1,c__$1,j,k){
return (function (){return major_system.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
});})(n,m,f,c,u,v,a,b,l,r,s,part,vec__5240,u__$1,v__$1,c__$1,j,k))
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
var G__5309 = (j - (1));
j = G__5309;
continue;
}
}
break;
}
})();if(cljs.core.truth_((function (){var and__3657__auto__ = r;if(cljs.core.truth_(and__3657__auto__))
{return (cljs.core._EQ_.call(null,j,a)) && ((((v.call(null,j) - (1)) * (r - l)) < u.call(null,j)));
} else
{return and__3657__auto__;
}
})()))
{return major_system.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if((cljs.core._EQ_.call(null,j,a)) && (cljs.core._EQ_.call(null,v.call(null,j),(1))))
{return major_system.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{var v__$1 = major_system.combinatorics.update.call(null,v,j,cljs.core.dec);var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__4407__auto__ = ((function (v__$1,j){
return (function iter__5305(s__5306){return (new cljs.core.LazySeq(null,((function (v__$1,j){
return (function (){var s__5306__$1 = s__5306;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5306__$1);if(temp__4126__auto__)
{var s__5306__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5306__$2))
{var c__4405__auto__ = cljs.core.chunk_first.call(null,s__5306__$2);var size__4406__auto__ = cljs.core.count.call(null,c__4405__auto__);var b__5308 = cljs.core.chunk_buffer.call(null,size__4406__auto__);if((function (){var i__5307 = (0);while(true){
if((i__5307 < size__4406__auto__))
{var i = cljs.core._nth.call(null,c__4405__auto__,i__5307);cljs.core.chunk_append.call(null,b__5308,(u.call(null,i) - v__$1.call(null,i)));
{
var G__5310 = (i__5307 + (1));
i__5307 = G__5310;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5308),iter__5305.call(null,cljs.core.chunk_rest.call(null,s__5306__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5308),null);
}
} else
{var i = cljs.core.first.call(null,s__5306__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__5305.call(null,cljs.core.rest.call(null,s__5306__$2)));
}
} else
{return null;
}
break;
}
});})(v__$1,j))
,null,null));
});})(v__$1,j))
;return iter__4407__auto__.call(null,cljs.core.range.call(null,a,(j + (1))));
})()):null);var v__$2 = (function (){var ks = cljs.core.range.call(null,(j + (1)),b);var v__$2 = v__$1;while(true){
if(cljs.core.empty_QMARK_.call(null,ks))
{return v__$2;
} else
{var k = cljs.core.first.call(null,ks);{
var G__5311 = cljs.core.rest.call(null,ks);
var G__5312 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__5311;
v__$2 = G__5312;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + (1))):(0));var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__3976__auto__ = (0);var y__3977__auto__ = (min_partitions_after_this - diff_uv);return ((x__3976__auto__ > y__3977__auto__) ? x__3976__auto__ : y__3977__auto__);
})():(0));var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,(0)))?v__$2:(function (){var k_1 = (b - (1));var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__5313 = (k_1 - (1));
var G__5314 = cljs.core.assoc.call(null,v__$3,k_1,(0));
var G__5315 = (amount - vk);
k_1 = G__5313;
v__$3 = G__5314;
amount = G__5315;
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
var partitions_M__delegate = function (items,p__5316){var map__5374 = p__5316;var map__5374__$1 = ((cljs.core.seq_QMARK_.call(null,map__5374))?cljs.core.apply.call(null,cljs.core.hash_map,map__5374):map__5374);var from = cljs.core.get.call(null,map__5374__$1,new cljs.core.Keyword(null,"min","min",444991522));var to = cljs.core.get.call(null,map__5374__$1,new cljs.core.Keyword(null,"max","max",61366548));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),(0)))
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
{var items__$1 = cljs.core.vec.call(null,items);var ditems = cljs.core.vec.call(null,cljs.core.distinct.call(null,items__$1));var freqs = cljs.core.frequencies.call(null,items__$1);var N = cljs.core.count.call(null,items__$1);var M = cljs.core.count.call(null,ditems);var from__$1 = (cljs.core.truth_((function (){var and__3657__auto__ = from;if(cljs.core.truth_(and__3657__auto__))
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
{if(cljs.core._EQ_.call(null,N,(1)))
{return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,items__$1)))))))))));
} else
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4407__auto__ = ((function (items__$1,ditems,freqs,N,M,from__$1,to__$1,map__5374,map__5374__$1,from,to){
return (function iter__5375(s__5376){return (new cljs.core.LazySeq(null,((function (items__$1,ditems,freqs,N,M,from__$1,to__$1,map__5374,map__5374__$1,from,to){
return (function (){var s__5376__$1 = s__5376;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5376__$1);if(temp__4126__auto__)
{var s__5376__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5376__$2))
{var c__4405__auto__ = cljs.core.chunk_first.call(null,s__5376__$2);var size__4406__auto__ = cljs.core.count.call(null,c__4405__auto__);var b__5378 = cljs.core.chunk_buffer.call(null,size__4406__auto__);if((function (){var i__5377 = (0);while(true){
if((i__5377 < size__4406__auto__))
{var i = cljs.core._nth.call(null,c__4405__auto__,i__5377);var j = (i + (1));cljs.core.chunk_append.call(null,b__5378,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));
{
var G__5431 = (i__5377 + (1));
i__5377 = G__5431;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5378),iter__5375.call(null,cljs.core.chunk_rest.call(null,s__5376__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5378),null);
}
} else
{var i = cljs.core.first.call(null,s__5376__$2);var j = (i + (1));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),iter__5375.call(null,cljs.core.rest.call(null,s__5376__$2)));
}
} else
{return null;
}
break;
}
});})(items__$1,ditems,freqs,N,M,from__$1,to__$1,map__5374,map__5374__$1,from,to))
,null,null));
});})(items__$1,ditems,freqs,N,M,from__$1,to__$1,map__5374,map__5374__$1,from,to))
;return iter__4407__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = major_system.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__4407__auto__ = ((function (start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__5374,map__5374__$1,from,to){
return (function iter__5379(s__5380){return (new cljs.core.LazySeq(null,((function (start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__5374,map__5374__$1,from,to){
return (function (){var s__5380__$1 = s__5380;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5380__$1);if(temp__4126__auto__)
{var s__5380__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5380__$2))
{var c__4405__auto__ = cljs.core.chunk_first.call(null,s__5380__$2);var size__4406__auto__ = cljs.core.count.call(null,c__4405__auto__);var b__5382 = cljs.core.chunk_buffer.call(null,size__4406__auto__);if((function (){var i__5381 = (0);while(true){
if((i__5381 < size__4406__auto__))
{var part = cljs.core._nth.call(null,c__4405__auto__,i__5381);cljs.core.chunk_append.call(null,b__5382,(function (){var iter__4407__auto__ = ((function (i__5381,part,c__4405__auto__,size__4406__auto__,b__5382,s__5380__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__5374,map__5374__$1,from,to){
return (function iter__5407(s__5408){return (new cljs.core.LazySeq(null,((function (i__5381,part,c__4405__auto__,size__4406__auto__,b__5382,s__5380__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__5374,map__5374__$1,from,to){
return (function (){var s__5408__$1 = s__5408;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__5408__$1);if(temp__4126__auto____$1)
{var s__5408__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__5408__$2))
{var c__4405__auto____$1 = cljs.core.chunk_first.call(null,s__5408__$2);var size__4406__auto____$1 = cljs.core.count.call(null,c__4405__auto____$1);var b__5410 = cljs.core.chunk_buffer.call(null,size__4406__auto____$1);if((function (){var i__5409 = (0);while(true){
if((i__5409 < size__4406__auto____$1))
{var multiset = cljs.core._nth.call(null,c__4405__auto____$1,i__5409);cljs.core.chunk_append.call(null,b__5410,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__5409,i__5381,multiset,c__4405__auto____$1,size__4406__auto____$1,b__5410,s__5408__$2,temp__4126__auto____$1,part,c__4405__auto__,size__4406__auto__,b__5382,s__5380__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__5374,map__5374__$1,from,to){
return (function (p__5415){var vec__5416 = p__5415;var index = cljs.core.nth.call(null,vec__5416,(0),null);var numtimes = cljs.core.nth.call(null,vec__5416,(1),null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__5409,i__5381,multiset,c__4405__auto____$1,size__4406__auto____$1,b__5410,s__5408__$2,temp__4126__auto____$1,part,c__4405__auto__,size__4406__auto__,b__5382,s__5380__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__5374,map__5374__$1,from,to))
,multiset)));
{
var G__5432 = (i__5409 + (1));
i__5409 = G__5432;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5410),iter__5407.call(null,cljs.core.chunk_rest.call(null,s__5408__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5410),null);
}
} else
{var multiset = cljs.core.first.call(null,s__5408__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__5381,multiset,s__5408__$2,temp__4126__auto____$1,part,c__4405__auto__,size__4406__auto__,b__5382,s__5380__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__5374,map__5374__$1,from,to){
return (function (p__5417){var vec__5418 = p__5417;var index = cljs.core.nth.call(null,vec__5418,(0),null);var numtimes = cljs.core.nth.call(null,vec__5418,(1),null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__5381,multiset,s__5408__$2,temp__4126__auto____$1,part,c__4405__auto__,size__4406__auto__,b__5382,s__5380__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__5374,map__5374__$1,from,to))
,multiset)),iter__5407.call(null,cljs.core.rest.call(null,s__5408__$2)));
}
} else
{return null;
}
break;
}
});})(i__5381,part,c__4405__auto__,size__4406__auto__,b__5382,s__5380__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__5374,map__5374__$1,from,to))
,null,null));
});})(i__5381,part,c__4405__auto__,size__4406__auto__,b__5382,s__5380__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__5374,map__5374__$1,from,to))
;return iter__4407__auto__.call(null,part);
})());
{
var G__5433 = (i__5381 + (1));
i__5381 = G__5433;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5382),iter__5379.call(null,cljs.core.chunk_rest.call(null,s__5380__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5382),null);
}
} else
{var part = cljs.core.first.call(null,s__5380__$2);return cljs.core.cons.call(null,(function (){var iter__4407__auto__ = ((function (part,s__5380__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__5374,map__5374__$1,from,to){
return (function iter__5419(s__5420){return (new cljs.core.LazySeq(null,((function (part,s__5380__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__5374,map__5374__$1,from,to){
return (function (){var s__5420__$1 = s__5420;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__5420__$1);if(temp__4126__auto____$1)
{var s__5420__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__5420__$2))
{var c__4405__auto__ = cljs.core.chunk_first.call(null,s__5420__$2);var size__4406__auto__ = cljs.core.count.call(null,c__4405__auto__);var b__5422 = cljs.core.chunk_buffer.call(null,size__4406__auto__);if((function (){var i__5421 = (0);while(true){
if((i__5421 < size__4406__auto__))
{var multiset = cljs.core._nth.call(null,c__4405__auto__,i__5421);cljs.core.chunk_append.call(null,b__5422,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__5421,multiset,c__4405__auto__,size__4406__auto__,b__5422,s__5420__$2,temp__4126__auto____$1,part,s__5380__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__5374,map__5374__$1,from,to){
return (function (p__5427){var vec__5428 = p__5427;var index = cljs.core.nth.call(null,vec__5428,(0),null);var numtimes = cljs.core.nth.call(null,vec__5428,(1),null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__5421,multiset,c__4405__auto__,size__4406__auto__,b__5422,s__5420__$2,temp__4126__auto____$1,part,s__5380__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__5374,map__5374__$1,from,to))
,multiset)));
{
var G__5434 = (i__5421 + (1));
i__5421 = G__5434;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5422),iter__5419.call(null,cljs.core.chunk_rest.call(null,s__5420__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5422),null);
}
} else
{var multiset = cljs.core.first.call(null,s__5420__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__5420__$2,temp__4126__auto____$1,part,s__5380__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__5374,map__5374__$1,from,to){
return (function (p__5429){var vec__5430 = p__5429;var index = cljs.core.nth.call(null,vec__5430,(0),null);var numtimes = cljs.core.nth.call(null,vec__5430,(1),null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(multiset,s__5420__$2,temp__4126__auto____$1,part,s__5380__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__5374,map__5374__$1,from,to))
,multiset)),iter__5419.call(null,cljs.core.rest.call(null,s__5420__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__5380__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__5374,map__5374__$1,from,to))
,null,null));
});})(part,s__5380__$2,temp__4126__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__5374,map__5374__$1,from,to))
;return iter__4407__auto__.call(null,part);
})(),iter__5379.call(null,cljs.core.rest.call(null,s__5380__$2)));
}
} else
{return null;
}
break;
}
});})(start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__5374,map__5374__$1,from,to))
,null,null));
});})(start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__5374,map__5374__$1,from,to))
;return iter__4407__auto__.call(null,parts);

}
}
}
};
var partitions_M = function (items,var_args){
var p__5316 = null;if (arguments.length > 1) {
  p__5316 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__5316);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__5435){
var items = cljs.core.first(arglist__5435);
var p__5316 = cljs.core.rest(arglist__5435);
return partitions_M__delegate(items,p__5316);
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
partitions.cljs$lang$applyTo = (function (arglist__5436){
var items = cljs.core.first(arglist__5436);
var args = cljs.core.rest(arglist__5436);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;
