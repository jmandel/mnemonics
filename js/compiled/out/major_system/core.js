// Compiled by ClojureScript 0.0-2356
goog.provide('major_system.core');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('cljs.nodejs');
goog.require('cljs.nodejs');
goog.require('major_system.combinatorics');
goog.require('major_system.combinatorics');
goog.require('clojure.string');
goog.require('clojure.string');
cljs.nodejs.enable_util_print_BANG_.call(null);
major_system.core.consonants_to_nums = cljs.core.PersistentHashMap.fromArrays(["T","CH","K","L","JH","G","M","S","Z","ER0","R","F","B","SH","P","V","TH","N","DH","ZH","NG","D"],[(1),(6),(7),(5),(6),(7),(3),(0),(0),(4),(4),(8),(9),(6),(9),(8),(-1),(2),(6),(6),(-1),(1)]);
major_system.core.is_consonant_QMARK_ = cljs.core.set.call(null,cljs.core.keys.call(null,major_system.core.consonants_to_nums));
major_system.core.as_entry = (function as_entry(line){var temp__4124__auto__ = cljs.core.re_find.call(null,/(^[A-Z']+)  (.*)$/,line);if(cljs.core.truth_(temp__4124__auto__))
{var parsed = temp__4124__auto__;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"word","word",-420123725),parsed.call(null,(1)),new cljs.core.Keyword(null,"phonemes","phonemes",1784619014),clojure.string.split.call(null,parsed.call(null,(2)),/\s+/)], null);
} else
{return null;
}
});
major_system.core.with_numbers = (function with_numbers(word){var consonants = cljs.core.filter.call(null,major_system.core.is_consonant_QMARK_,new cljs.core.Keyword(null,"phonemes","phonemes",1784619014).cljs$core$IFn$_invoke$arity$1(word));var numbers = cljs.core.map.call(null,major_system.core.consonants_to_nums,consonants);return cljs.core.assoc.call(null,word,new cljs.core.Keyword(null,"numbers","numbers",1036309864),numbers);
});
major_system.core.add_word = (function add_word(corpus,word){return cljs.core.update_in.call(null,corpus,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"numbers","numbers",1036309864).cljs$core$IFn$_invoke$arity$1(word)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(word));
});
major_system.core.load_dict = (function load_dict(){var fs = cljs.nodejs.require.call(null,"fs");var dict = fs.readFileSync("words-by-number.edn").toString();var _ = cljs.core.println.call(null,"Dict importing from size",cljs.core.count.call(null,dict));var ret = cljs.reader.read_string.call(null,dict);var ___$1 = cljs.core.println.call(null,"Dict imported",cljs.core.count.call(null,ret));return ret;
});
major_system.core.words_by_number = major_system.core.load_dict.call(null);
cljs.core.println.call(null,cljs.core.count.call(null,major_system.core.words_by_number));
major_system.core.all_breaks = (function all_breaks(nums){var n = cljs.core.count.call(null,nums);var indices = cljs.core.range.call(null,(1),n);return cljs.core.mapcat.call(null,((function (n,indices){
return (function (p1__9881_SHARP_){return major_system.combinatorics.combinations.call(null,indices,p1__9881_SHARP_);
});})(n,indices))
,cljs.core.range.call(null,n));
});
major_system.core.apply_break = (function apply_break(v,breaks){var points = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),breaks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,v)], null));var sub = cljs.core.partial.call(null,cljs.core.subvec,v);return cljs.core.map.call(null,((function (points,sub){
return (function (p1__9882_SHARP_){return cljs.core.apply.call(null,sub,p1__9882_SHARP_);
});})(points,sub))
,cljs.core.partition.call(null,(2),(1),points));
});
major_system.core.apply_all_breaks = (function apply_all_breaks(nums){var numsv = cljs.core.vec.call(null,nums);return cljs.core.map.call(null,((function (numsv){
return (function (p1__9883_SHARP_){return major_system.core.apply_break.call(null,numsv,p1__9883_SHARP_);
});})(numsv))
,major_system.core.all_breaks.call(null,numsv));
});
major_system.core.words_for_pattern = (function words_for_pattern(number_groups){return cljs.core.map.call(null,major_system.core.words_by_number,number_groups);
});
major_system.core.mnemonics = (function mnemonics(p){var patterns = major_system.core.apply_all_breaks.call(null,p);return cljs.core.filter.call(null,((function (patterns){
return (function (p1__9884_SHARP_){return cljs.core.every_QMARK_.call(null,cljs.core.identity,p1__9884_SHARP_);
});})(patterns))
,cljs.core.map.call(null,major_system.core.words_for_pattern,patterns));
});
major_system.core.shortest_mnemonics = (function shortest_mnemonics(p){var ms = major_system.core.mnemonics.call(null,p);return cljs.core.first.call(null,cljs.core.partition_by.call(null,cljs.core.count,ms));
});
major_system.core.random_mnemonic = (function random_mnemonic(p){var ms = major_system.core.mnemonics.call(null,p);var iter__8809__auto__ = ((function (ms){
return (function iter__9889(s__9890){return (new cljs.core.LazySeq(null,((function (ms){
return (function (){var s__9890__$1 = s__9890;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9890__$1);if(temp__4126__auto__)
{var s__9890__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9890__$2))
{var c__8807__auto__ = cljs.core.chunk_first.call(null,s__9890__$2);var size__8808__auto__ = cljs.core.count.call(null,c__8807__auto__);var b__9892 = cljs.core.chunk_buffer.call(null,size__8808__auto__);if((function (){var i__9891 = (0);while(true){
if((i__9891 < size__8808__auto__))
{var g = cljs.core._nth.call(null,c__8807__auto__,i__9891);cljs.core.chunk_append.call(null,b__9892,cljs.core.map.call(null,cljs.core.rand_nth,cljs.core.rand_nth.call(null,g)));
{
var G__9893 = (i__9891 + (1));
i__9891 = G__9893;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9892),iter__9889.call(null,cljs.core.chunk_rest.call(null,s__9890__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9892),null);
}
} else
{var g = cljs.core.first.call(null,s__9890__$2);return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.rand_nth,cljs.core.rand_nth.call(null,g)),iter__9889.call(null,cljs.core.rest.call(null,s__9890__$2)));
}
} else
{return null;
}
break;
}
});})(ms))
,null,null));
});})(ms))
;return iter__8809__auto__.call(null,cljs.core.partition_by.call(null,cljs.core.count,ms));
});
major_system.core.tostr = (function tostr(ms){return cljs.core.interpose.call(null,"\nor...\n\n",(function (){var iter__8809__auto__ = (function iter__9898(s__9899){return (new cljs.core.LazySeq(null,(function (){var s__9899__$1 = s__9899;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9899__$1);if(temp__4126__auto__)
{var s__9899__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9899__$2))
{var c__8807__auto__ = cljs.core.chunk_first.call(null,s__9899__$2);var size__8808__auto__ = cljs.core.count.call(null,c__8807__auto__);var b__9901 = cljs.core.chunk_buffer.call(null,size__8808__auto__);if((function (){var i__9900 = (0);while(true){
if((i__9900 < size__8808__auto__))
{var m = cljs.core._nth.call(null,c__8807__auto__,i__9900);cljs.core.chunk_append.call(null,b__9901,cljs.core.apply.call(null,cljs.core.println_str,cljs.core.interpose.call(null,"+ \n",m)));
{
var G__9902 = (i__9900 + (1));
i__9900 = G__9902;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9901),iter__9898.call(null,cljs.core.chunk_rest.call(null,s__9899__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9901),null);
}
} else
{var m = cljs.core.first.call(null,s__9899__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.println_str,cljs.core.interpose.call(null,"+ \n",m)),iter__9898.call(null,cljs.core.rest.call(null,s__9899__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8809__auto__.call(null,ms);
})());
});
/**
* @param {...*} var_args
*/
major_system.core._main = (function() { 
var _main__delegate = function (args){var nums = cljs.core.map.call(null,parseInt,cljs.core.mapcat.call(null,(function (p1__9903_SHARP_){return p1__9903_SHARP_.split("");
}),args));return cljs.core.println.call(null,major_system.core.tostr.call(null,(function (){var start__8965__auto__ = (new Date()).getTime();var ret__8966__auto__ = cljs.core.doall.call(null,major_system.core.mnemonics.call(null,nums));cljs.core.prn.call(null,("Elapsed time: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((new Date()).getTime() - start__8965__auto__))+" msecs"));
return ret__8966__auto__;
})()));
};
var _main = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return _main__delegate.call(this,args);};
_main.cljs$lang$maxFixedArity = 0;
_main.cljs$lang$applyTo = (function (arglist__9904){
var args = cljs.core.seq(arglist__9904);
return _main__delegate(args);
});
_main.cljs$core$IFn$_invoke$arity$variadic = _main__delegate;
return _main;
})()
;
cljs.core._STAR_main_cli_fn_STAR_ = major_system.core._main;
cljs.core.println.call(null,"done loading",cljs.core.count.call(null,major_system.core.words_by_number),"unique patterns");

//# sourceMappingURL=core.js.map