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
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$17);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t26092 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t26092 = (function (f,fn_handler,meta26093){
this.f = f;
this.fn_handler = fn_handler;
this.meta26093 = meta26093;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t26092.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t26092.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t26092";
cljs.core.async.impl.ioc_helpers.t26092.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cljs.core.async.impl.ioc-helpers/t26092");
});
cljs.core.async.impl.ioc_helpers.t26092.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t26092.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t26092.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t26092.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26094){var self__ = this;
var _26094__$1 = this;return self__.meta26093;
});
cljs.core.async.impl.ioc_helpers.t26092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26094,meta26093__$1){var self__ = this;
var _26094__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t26092(self__.f,self__.fn_handler,meta26093__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t26092 = (function __GT_t26092(f__$1,fn_handler__$1,meta26093){return (new cljs.core.async.impl.ioc_helpers.t26092(f__$1,fn_handler__$1,meta26093));
});
}
return (new cljs.core.async.impl.ioc_helpers.t26092(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e26096){if((e26096 instanceof Object))
{var ex = e26096;cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
throw ex;
} else
{throw e26096;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){var statearr_26100_26103 = state;(statearr_26100_26103[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_26100_26103[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4124__auto__))
{var cb = temp__4124__auto__;var statearr_26101_26104 = state;(statearr_26101_26104[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__26102 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26102) : cljs.core.deref.call(null,G__26102));
})());
(statearr_26101_26104[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$18;
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){var statearr_26108_26111 = state;(statearr_26108_26111[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);
(statearr_26108_26111[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4124__auto__))
{var cb = temp__4124__auto__;var statearr_26109_26112 = state;(statearr_26109_26112[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__26110 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26110) : cljs.core.deref.call(null,G__26110));
})());
(statearr_26109_26112[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$18;
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__26113){var map__26119 = p__26113;var map__26119__$1 = ((cljs.core.seq_QMARK_(map__26119))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26119):map__26119);var opts = map__26119__$1;var statearr_26120_26124 = state;(statearr_26120_26124[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__26119,map__26119__$1,opts){
return (function (val){var statearr_26121_26125 = state;(statearr_26121_26125[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__26119,map__26119__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_26122_26126 = state;(statearr_26122_26126[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__26123 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26123) : cljs.core.deref.call(null,G__26123));
})());
return cljs.core.constant$keyword$18;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__26113 = null;if (arguments.length > 3) {
  p__26113 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__26113);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__26127){
var state = cljs.core.first(arglist__26127);
arglist__26127 = cljs.core.next(arglist__26127);
var cont_block = cljs.core.first(arglist__26127);
arglist__26127 = cljs.core.next(arglist__26127);
var ports = cljs.core.first(arglist__26127);
var p__26113 = cljs.core.rest(arglist__26127);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__26113);
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4266__auto__,k26129,else__4267__auto__){var self__ = this;
var this__4266__auto____$1 = this;var G__26131 = (((k26129 instanceof cljs.core.Keyword))?k26129.fqn:null);switch (G__26131) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26129,else__4267__auto__);

}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4278__auto__,writer__4279__auto__,opts__4280__auto__){var self__ = this;
var this__4278__auto____$1 = this;var pr_pair__4281__auto__ = ((function (this__4278__auto____$1){
return (function (keyval__4282__auto__){return cljs.core.pr_sequential_writer(writer__4279__auto__,cljs.core.pr_writer,""," ","",opts__4280__auto__,keyval__4282__auto__);
});})(this__4278__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4279__auto__,pr_pair__4281__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4280__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$19,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$20,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$21,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$22,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$23,self__.prev],null))], null),self__.__extmap));
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
var this__4273__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$21,null,cljs.core.constant$keyword$19,null,cljs.core.constant$keyword$20,null,cljs.core.constant$keyword$23,null,cljs.core.constant$keyword$22,null], null), null),k__4274__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4273__auto____$1),self__.__meta),k__4274__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4274__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4271__auto__,k__4272__auto__,G__26128){var self__ = this;
var this__4271__auto____$1 = this;var pred__26132 = cljs.core.keyword_identical_QMARK_;var expr__26133 = k__4272__auto__;if(cljs.core.truth_((function (){var G__26135 = cljs.core.constant$keyword$19;var G__26136 = expr__26133;return (pred__26132.cljs$core$IFn$_invoke$arity$2 ? pred__26132.cljs$core$IFn$_invoke$arity$2(G__26135,G__26136) : pred__26132.call(null,G__26135,G__26136));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__26128,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__26137 = cljs.core.constant$keyword$20;var G__26138 = expr__26133;return (pred__26132.cljs$core$IFn$_invoke$arity$2 ? pred__26132.cljs$core$IFn$_invoke$arity$2(G__26137,G__26138) : pred__26132.call(null,G__26137,G__26138));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__26128,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__26139 = cljs.core.constant$keyword$21;var G__26140 = expr__26133;return (pred__26132.cljs$core$IFn$_invoke$arity$2 ? pred__26132.cljs$core$IFn$_invoke$arity$2(G__26139,G__26140) : pred__26132.call(null,G__26139,G__26140));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__26128,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__26141 = cljs.core.constant$keyword$22;var G__26142 = expr__26133;return (pred__26132.cljs$core$IFn$_invoke$arity$2 ? pred__26132.cljs$core$IFn$_invoke$arity$2(G__26141,G__26142) : pred__26132.call(null,G__26141,G__26142));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__26128,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__26143 = cljs.core.constant$keyword$23;var G__26144 = expr__26133;return (pred__26132.cljs$core$IFn$_invoke$arity$2 ? pred__26132.cljs$core$IFn$_invoke$arity$2(G__26143,G__26144) : pred__26132.call(null,G__26143,G__26144));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__26128,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4272__auto__,G__26128),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4276__auto__){var self__ = this;
var this__4276__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$19,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$20,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$21,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$22,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$23,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4263__auto__,G__26128){var self__ = this;
var this__4263__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__26128,self__.__extmap,self__.__hash));
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
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__26130){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(G__26130),cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(G__26130),cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(G__26130),cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(G__26130),cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(G__26130),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26130,cljs.core.constant$keyword$19,cljs.core.array_seq([cljs.core.constant$keyword$20,cljs.core.constant$keyword$21,cljs.core.constant$keyword$22,cljs.core.constant$keyword$23], 0))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_26147 = state;(statearr_26147[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_26147;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__3657__auto__ = exception;if(cljs.core.truth_(and__3657__auto__))
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
{var statearr_26153 = state;(statearr_26153[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_26153[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_26153[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_26153[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$19,null,cljs.core.array_seq([cljs.core.constant$keyword$20,null], 0)));
return statearr_26153;
} else
{if(cljs.core.truth_((function (){var and__3657__auto__ = exception;if(cljs.core.truth_(and__3657__auto__))
{return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__3657__auto__;
}
})()))
{var statearr_26154_26158 = state;(statearr_26154_26158[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__26159 = state;
state = G__26159;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3657__auto__ = exception;if(cljs.core.truth_(and__3657__auto__))
{var and__3657__auto____$1 = cljs.core.not(catch_block);if(and__3657__auto____$1)
{return cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3657__auto____$1;
}
} else
{return and__3657__auto__;
}
})()))
{var statearr_26155 = state;(statearr_26155[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_26155[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$21,null));
return statearr_26155;
} else
{if(cljs.core.truth_((function (){var and__3657__auto__ = cljs.core.not(exception);if(and__3657__auto__)
{return cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3657__auto__;
}
})()))
{var statearr_26156 = state;(statearr_26156[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_26156[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$21,null));
return statearr_26156;
} else
{if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_26157 = state;(statearr_26157[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_26157[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_26157;
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
