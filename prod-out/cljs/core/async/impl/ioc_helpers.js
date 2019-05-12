// Compiled by ClojureScript 0.0-2356
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$15);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t26912 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t26912 = (function (f,fn_handler,meta26913){
this.f = f;
this.fn_handler = fn_handler;
this.meta26913 = meta26913;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t26912.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t26912.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t26912";
cljs.core.async.impl.ioc_helpers.t26912.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cljs.core.async.impl.ioc-helpers/t26912");
});
cljs.core.async.impl.ioc_helpers.t26912.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t26912.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t26912.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t26912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26914){var self__ = this;
var _26914__$1 = this;return self__.meta26913;
});
cljs.core.async.impl.ioc_helpers.t26912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26914,meta26913__$1){var self__ = this;
var _26914__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t26912(self__.f,self__.fn_handler,meta26913__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t26912 = (function __GT_t26912(f__$1,fn_handler__$1,meta26913){return (new cljs.core.async.impl.ioc_helpers.t26912(f__$1,fn_handler__$1,meta26913));
});
}
return (new cljs.core.async.impl.ioc_helpers.t26912(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e26916){if((e26916 instanceof Object))
{var ex = e26916;cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
throw ex;
} else
{throw e26916;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){var statearr_26920_26923 = state;(statearr_26920_26923[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_26920_26923[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4124__auto__))
{var cb = temp__4124__auto__;var statearr_26921_26924 = state;(statearr_26921_26924[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__26922 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26922) : cljs.core.deref.call(null,G__26922));
})());
(statearr_26921_26924[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$16;
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){var statearr_26928_26931 = state;(statearr_26928_26931[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);
(statearr_26928_26931[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4124__auto__))
{var cb = temp__4124__auto__;var statearr_26929_26932 = state;(statearr_26929_26932[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__26930 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26930) : cljs.core.deref.call(null,G__26930));
})());
(statearr_26929_26932[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$16;
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__26933){var map__26939 = p__26933;var map__26939__$1 = ((cljs.core.seq_QMARK_(map__26939))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26939):map__26939);var opts = map__26939__$1;var statearr_26940_26944 = state;(statearr_26940_26944[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__26939,map__26939__$1,opts){
return (function (val){var statearr_26941_26945 = state;(statearr_26941_26945[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__26939,map__26939__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_26942_26946 = state;(statearr_26942_26946[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__26943 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26943) : cljs.core.deref.call(null,G__26943));
})());
return cljs.core.constant$keyword$16;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__26933 = null;if (arguments.length > 3) {
  p__26933 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__26933);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__26947){
var state = cljs.core.first(arglist__26947);
arglist__26947 = cljs.core.next(arglist__26947);
var cont_block = cljs.core.first(arglist__26947);
arglist__26947 = cljs.core.next(arglist__26947);
var ports = cljs.core.first(arglist__26947);
var p__26933 = cljs.core.rest(arglist__26947);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__26933);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){return null;
});})(c))
));
}
c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4264__auto__,k__4265__auto__){var self__ = this;
var this__4264__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4264__auto____$1,k__4265__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4266__auto__,k26949,else__4267__auto__){var self__ = this;
var this__4266__auto____$1 = this;var G__26951 = (((k26949 instanceof cljs.core.Keyword))?k26949.fqn:null);switch (G__26951) {
case "prev":
return self__.prev;

break;
case "continue-block":
return self__.continue_block;

break;
case "finally-block":
return self__.finally_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "catch-block":
return self__.catch_block;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26949,else__4267__auto__);

}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4278__auto__,writer__4279__auto__,opts__4280__auto__){var self__ = this;
var this__4278__auto____$1 = this;var pr_pair__4281__auto__ = ((function (this__4278__auto____$1){
return (function (keyval__4282__auto__){return cljs.core.pr_sequential_writer(writer__4279__auto__,cljs.core.pr_writer,""," ","",opts__4280__auto__,keyval__4282__auto__);
});})(this__4278__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4279__auto__,pr_pair__4281__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4280__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$17,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$18,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$19,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$20,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$21,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4262__auto__){var self__ = this;
var this__4262__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4258__auto__){var self__ = this;
var this__4258__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4268__auto__){var self__ = this;
var this__4268__auto____$1 = this;return (5 + cljs.core.count(self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4259__auto__){var self__ = this;
var this__4259__auto____$1 = this;var h__4080__auto__ = self__.__hash;if(!((h__4080__auto__ == null)))
{return h__4080__auto__;
} else
{var h__4080__auto____$1 = cljs.core.hash_imap(this__4259__auto____$1);self__.__hash = h__4080__auto____$1;
return h__4080__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4260__auto__,other__4261__auto__){var self__ = this;
var this__4260__auto____$1 = this;if(cljs.core.truth_((function (){var and__3657__auto__ = other__4261__auto__;if(cljs.core.truth_(and__3657__auto__))
{return ((this__4260__auto____$1.constructor === other__4261__auto__.constructor)) && (cljs.core.equiv_map(this__4260__auto____$1,other__4261__auto__));
} else
{return and__3657__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4273__auto__,k__4274__auto__){var self__ = this;
var this__4273__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$19,null,cljs.core.constant$keyword$17,null,cljs.core.constant$keyword$18,null,cljs.core.constant$keyword$21,null,cljs.core.constant$keyword$20,null], null), null),k__4274__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4273__auto____$1),self__.__meta),k__4274__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4274__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4271__auto__,k__4272__auto__,G__26948){var self__ = this;
var this__4271__auto____$1 = this;var pred__26952 = cljs.core.keyword_identical_QMARK_;var expr__26953 = k__4272__auto__;if(cljs.core.truth_((function (){var G__26955 = cljs.core.constant$keyword$17;var G__26956 = expr__26953;return (pred__26952.cljs$core$IFn$_invoke$arity$2 ? pred__26952.cljs$core$IFn$_invoke$arity$2(G__26955,G__26956) : pred__26952.call(null,G__26955,G__26956));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__26948,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__26957 = cljs.core.constant$keyword$18;var G__26958 = expr__26953;return (pred__26952.cljs$core$IFn$_invoke$arity$2 ? pred__26952.cljs$core$IFn$_invoke$arity$2(G__26957,G__26958) : pred__26952.call(null,G__26957,G__26958));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__26948,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__26959 = cljs.core.constant$keyword$19;var G__26960 = expr__26953;return (pred__26952.cljs$core$IFn$_invoke$arity$2 ? pred__26952.cljs$core$IFn$_invoke$arity$2(G__26959,G__26960) : pred__26952.call(null,G__26959,G__26960));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__26948,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__26961 = cljs.core.constant$keyword$20;var G__26962 = expr__26953;return (pred__26952.cljs$core$IFn$_invoke$arity$2 ? pred__26952.cljs$core$IFn$_invoke$arity$2(G__26961,G__26962) : pred__26952.call(null,G__26961,G__26962));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__26948,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__26963 = cljs.core.constant$keyword$21;var G__26964 = expr__26953;return (pred__26952.cljs$core$IFn$_invoke$arity$2 ? pred__26952.cljs$core$IFn$_invoke$arity$2(G__26963,G__26964) : pred__26952.call(null,G__26963,G__26964));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__26948,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4272__auto__,G__26948),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4276__auto__){var self__ = this;
var this__4276__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$17,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$18,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$19,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$20,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$21,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4263__auto__,G__26948){var self__ = this;
var this__4263__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__26948,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4269__auto__,entry__4270__auto__){var self__ = this;
var this__4269__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4270__auto__))
{return cljs.core._assoc(this__4269__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4270__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4270__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4269__auto____$1,entry__4270__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4298__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4298__auto__,writer__4299__auto__){return cljs.core._write(writer__4299__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__26950){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(G__26950),cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(G__26950),cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(G__26950),cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(G__26950),cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(G__26950),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26950,cljs.core.constant$keyword$17,cljs.core.array_seq([cljs.core.constant$keyword$18,cljs.core.constant$keyword$19,cljs.core.constant$keyword$20,cljs.core.constant$keyword$21], 0))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_26967 = state;(statearr_26967[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_26967;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__3657__auto__ = exception;if(cljs.core.truth_(and__3657__auto__))
{return cljs.core.not(exception_frame);
} else
{return and__3657__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__3657__auto__ = exception;if(cljs.core.truth_(and__3657__auto__))
{var and__3657__auto____$1 = catch_block;if(cljs.core.truth_(and__3657__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__3657__auto____$1;
}
} else
{return and__3657__auto__;
}
})()))
{var statearr_26973 = state;(statearr_26973[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_26973[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_26973[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_26973[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$17,null,cljs.core.array_seq([cljs.core.constant$keyword$18,null], 0)));
return statearr_26973;
} else
{if(cljs.core.truth_((function (){var and__3657__auto__ = exception;if(cljs.core.truth_(and__3657__auto__))
{return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__3657__auto__;
}
})()))
{var statearr_26974_26978 = state;(statearr_26974_26978[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__26979 = state;
state = G__26979;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3657__auto__ = exception;if(cljs.core.truth_(and__3657__auto__))
{var and__3657__auto____$1 = cljs.core.not(catch_block);if(and__3657__auto____$1)
{return cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3657__auto____$1;
}
} else
{return and__3657__auto__;
}
})()))
{var statearr_26975 = state;(statearr_26975[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_26975[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$19,null));
return statearr_26975;
} else
{if(cljs.core.truth_((function (){var and__3657__auto__ = cljs.core.not(exception);if(and__3657__auto__)
{return cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3657__auto__;
}
})()))
{var statearr_26976 = state;(statearr_26976[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_26976[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$19,null));
return statearr_26976;
} else
{if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_26977 = state;(statearr_26977[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_26977[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_26977;
} else
{throw (new Error(("Assert failed: No matching clause\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0))))));


}
}
}
}
}
}
break;
}
});
