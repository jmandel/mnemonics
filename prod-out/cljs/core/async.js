// Compiled by ClojureScript 0.0-2356
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23155 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23155 = (function (f,fn_handler,meta23156){
this.f = f;
this.fn_handler = fn_handler;
this.meta23156 = meta23156;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23155.cljs$lang$type = true;
cljs.core.async.t23155.cljs$lang$ctorStr = "cljs.core.async/t23155";
cljs.core.async.t23155.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write(writer__4216__auto__,"cljs.core.async/t23155");
});
cljs.core.async.t23155.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23155.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23155.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23155.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23157){var self__ = this;
var _23157__$1 = this;return self__.meta23156;
});
cljs.core.async.t23155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23157,meta23156__$1){var self__ = this;
var _23157__$1 = this;return (new cljs.core.async.t23155(self__.f,self__.fn_handler,meta23156__$1));
});
cljs.core.async.__GT_t23155 = (function __GT_t23155(f__$1,fn_handler__$1,meta23156){return (new cljs.core.async.t23155(f__$1,fn_handler__$1,meta23156));
});
}
return (new cljs.core.async.t23155(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23159 = buff;if(G__23159)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__23159.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23159.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23159);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23159);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(ret))
{var val_23170 = (function (){var G__23167 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23167) : cljs.core.deref.call(null,G__23167));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__23168_23171 = val_23170;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23168_23171) : fn1.call(null,G__23168_23171));
} else
{cljs.core.async.impl.dispatch.run(((function (val_23170,ret){
return (function (){var G__23169 = val_23170;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23169) : fn1.call(null,G__23169));
});})(val_23170,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;var G__23180 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23180) : cljs.core.deref.call(null,G__23180));
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = (function (){var G__23181 = retb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23181) : cljs.core.deref.call(null,G__23181));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__23182_23184 = ret;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23182_23184) : fn1.call(null,G__23182_23184));
} else
{cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){var G__23183 = ret;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23183) : fn1.call(null,G__23183));
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___23185 = n;var x_23186 = (0);while(true){
if((x_23186 < n__4508__auto___23185))
{(a[x_23186] = (0));
{
var G__23187 = (x_23186 + (1));
x_23186 = G__23187;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n))
{return a;
} else
{var j = cljs.core.rand_int(i);(a[i] = (a[j]));
(a[j] = i);
{
var G__23188 = (i + (1));
i = G__23188;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (function (){var G__23196 = true;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23196) : cljs.core.atom.call(null,G__23196));
})();if(typeof cljs.core.async.t23197 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23197 = (function (flag,alt_flag,meta23198){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23198 = meta23198;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23197.cljs$lang$type = true;
cljs.core.async.t23197.cljs$lang$ctorStr = "cljs.core.async/t23197";
cljs.core.async.t23197.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write(writer__4216__auto__,"cljs.core.async/t23197");
});})(flag))
;
cljs.core.async.t23197.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23197.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__23200 = self__.flag;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23200) : cljs.core.deref.call(null,G__23200));
});})(flag))
;
cljs.core.async.t23197.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__23201_23203 = self__.flag;var G__23202_23204 = null;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23201_23203,G__23202_23204) : cljs.core.reset_BANG_.call(null,G__23201_23203,G__23202_23204));
return true;
});})(flag))
;
cljs.core.async.t23197.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23199){var self__ = this;
var _23199__$1 = this;return self__.meta23198;
});})(flag))
;
cljs.core.async.t23197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23199,meta23198__$1){var self__ = this;
var _23199__$1 = this;return (new cljs.core.async.t23197(self__.flag,self__.alt_flag,meta23198__$1));
});})(flag))
;
cljs.core.async.__GT_t23197 = ((function (flag){
return (function __GT_t23197(flag__$1,alt_flag__$1,meta23198){return (new cljs.core.async.t23197(flag__$1,alt_flag__$1,meta23198));
});})(flag))
;
}
return (new cljs.core.async.t23197(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23208 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23208 = (function (cb,flag,alt_handler,meta23209){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23209 = meta23209;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23208.cljs$lang$type = true;
cljs.core.async.t23208.cljs$lang$ctorStr = "cljs.core.async/t23208";
cljs.core.async.t23208.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write(writer__4216__auto__,"cljs.core.async/t23208");
});
cljs.core.async.t23208.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23208.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t23208.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t23208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23210){var self__ = this;
var _23210__$1 = this;return self__.meta23209;
});
cljs.core.async.t23208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23210,meta23209__$1){var self__ = this;
var _23210__$1 = this;return (new cljs.core.async.t23208(self__.cb,self__.flag,self__.alt_handler,meta23209__$1));
});
cljs.core.async.__GT_t23208 = (function __GT_t23208(cb__$1,flag__$1,alt_handler__$1,meta23209){return (new cljs.core.async.t23208(cb__$1,flag__$1,alt_handler__$1,meta23209));
});
}
return (new cljs.core.async.t23208(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__23218 = (0);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__23218) : port.call(null,G__23218));
})():null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__23219 = (1);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__23219) : port.call(null,G__23219));
})();return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23211_SHARP_){var G__23220 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23211_SHARP_,wport], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23220) : fret.call(null,G__23220));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23212_SHARP_){var G__23221 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23212_SHARP_,port], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23221) : fret.call(null,G__23221));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23222 = vbox;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23222) : cljs.core.deref.call(null,G__23222));
})(),(function (){var or__3639__auto__ = wport;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__23223 = (i + (1));
i = G__23223;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3639__auto__ = ret;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7))
{var temp__4126__auto__ = (function (){var and__3627__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3627__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3627__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$7], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__23224){var map__23226 = p__23224;var map__23226__$1 = ((cljs.core.seq_QMARK_(map__23226))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23226):map__23226);var opts = map__23226__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));

};
var alts_BANG_ = function (ports,var_args){
var p__23224 = null;if (arguments.length > 1) {
  p__23224 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23224);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23227){
var ports = cljs.core.first(arglist__23227);
var p__23224 = cljs.core.rest(arglist__23227);
return alts_BANG___delegate(ports,p__23224);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t23241 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23241 = (function (ch,f,map_LT_,meta23242){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23242 = meta23242;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23241.cljs$lang$type = true;
cljs.core.async.t23241.cljs$lang$ctorStr = "cljs.core.async/t23241";
cljs.core.async.t23241.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write(writer__4216__auto__,"cljs.core.async/t23241");
});
cljs.core.async.t23241.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23241.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});
cljs.core.async.t23241.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23241.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t23244 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23244 = (function (fn1,_,meta23242,ch,f,map_LT_,meta23245){
this.fn1 = fn1;
this._ = _;
this.meta23242 = meta23242;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23245 = meta23245;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23244.cljs$lang$type = true;
cljs.core.async.t23244.cljs$lang$ctorStr = "cljs.core.async/t23244";
cljs.core.async.t23244.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write(writer__4216__auto__,"cljs.core.async/t23244");
});})(___$1))
;
cljs.core.async.t23244.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23244.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t23244.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var G__23247 = self__.fn1;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(G__23247) : cljs.core.async.impl.protocols.lock_id.call(null,G__23247));
});})(___$1))
;
cljs.core.async.t23244.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__23228_SHARP_){var G__23248 = (((p1__23228_SHARP_ == null))?null:(function (){var G__23249 = p1__23228_SHARP_;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__23249) : self__.f.call(null,G__23249));
})());return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__23248) : f1.call(null,G__23248));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t23244.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23246){var self__ = this;
var _23246__$1 = this;return self__.meta23245;
});})(___$1))
;
cljs.core.async.t23244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23246,meta23245__$1){var self__ = this;
var _23246__$1 = this;return (new cljs.core.async.t23244(self__.fn1,self__._,self__.meta23242,self__.ch,self__.f,self__.map_LT_,meta23245__$1));
});})(___$1))
;
cljs.core.async.__GT_t23244 = ((function (___$1){
return (function __GT_t23244(fn1__$1,___$2,meta23242__$1,ch__$2,f__$2,map_LT___$2,meta23245){return (new cljs.core.async.t23244(fn1__$1,___$2,meta23242__$1,ch__$2,f__$2,map_LT___$2,meta23245));
});})(___$1))
;
}
return (new cljs.core.async.t23244(fn1,___$1,self__.meta23242,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3627__auto__ = ret;if(cljs.core.truth_(and__3627__auto__))
{return !(((function (){var G__23250 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23250) : cljs.core.deref.call(null,G__23250));
})() == null));
} else
{return and__3627__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((function (){var G__23251 = (function (){var G__23252 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23252) : cljs.core.deref.call(null,G__23252));
})();return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__23251) : self__.f.call(null,G__23251));
})());
} else
{return ret;
}
});
cljs.core.async.t23241.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23241.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23241.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t23241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23243){var self__ = this;
var _23243__$1 = this;return self__.meta23242;
});
cljs.core.async.t23241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23243,meta23242__$1){var self__ = this;
var _23243__$1 = this;return (new cljs.core.async.t23241(self__.ch,self__.f,self__.map_LT_,meta23242__$1));
});
cljs.core.async.__GT_t23241 = (function __GT_t23241(ch__$1,f__$1,map_LT___$1,meta23242){return (new cljs.core.async.t23241(ch__$1,f__$1,map_LT___$1,meta23242));
});
}
return (new cljs.core.async.t23241(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t23257 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23257 = (function (ch,f,map_GT_,meta23258){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23258 = meta23258;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23257.cljs$lang$type = true;
cljs.core.async.t23257.cljs$lang$ctorStr = "cljs.core.async/t23257";
cljs.core.async.t23257.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write(writer__4216__auto__,"cljs.core.async/t23257");
});
cljs.core.async.t23257.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23257.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__23260 = val;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__23260) : self__.f.call(null,G__23260));
})(),fn1);
});
cljs.core.async.t23257.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23257.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23257.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23257.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23259){var self__ = this;
var _23259__$1 = this;return self__.meta23258;
});
cljs.core.async.t23257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23259,meta23258__$1){var self__ = this;
var _23259__$1 = this;return (new cljs.core.async.t23257(self__.ch,self__.f,self__.map_GT_,meta23258__$1));
});
cljs.core.async.__GT_t23257 = (function __GT_t23257(ch__$1,f__$1,map_GT___$1,meta23258){return (new cljs.core.async.t23257(ch__$1,f__$1,map_GT___$1,meta23258));
});
}
return (new cljs.core.async.t23257(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t23265 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23265 = (function (ch,p,filter_GT_,meta23266){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23266 = meta23266;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23265.cljs$lang$type = true;
cljs.core.async.t23265.cljs$lang$ctorStr = "cljs.core.async/t23265";
cljs.core.async.t23265.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write(writer__4216__auto__,"cljs.core.async/t23265");
});
cljs.core.async.t23265.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23265.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__23268 = val;return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__23268) : self__.p.call(null,G__23268));
})()))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});
cljs.core.async.t23265.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23265.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23265.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23265.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23265.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t23265.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23267){var self__ = this;
var _23267__$1 = this;return self__.meta23266;
});
cljs.core.async.t23265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23267,meta23266__$1){var self__ = this;
var _23267__$1 = this;return (new cljs.core.async.t23265(self__.ch,self__.p,self__.filter_GT_,meta23266__$1));
});
cljs.core.async.__GT_t23265 = (function __GT_t23265(ch__$1,p__$1,filter_GT___$1,meta23266){return (new cljs.core.async.t23265(ch__$1,p__$1,filter_GT___$1,meta23266));
});
}
return (new cljs.core.async.t23265(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12256__auto___23356 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12256__auto___23356,out){
return (function (){var f__12257__auto__ = (function (){var switch__12241__auto__ = ((function (c__12256__auto___23356,out){
return (function (state_23334){var state_val_23335 = (state_23334[(1)]);if((state_val_23335 === (7)))
{var inst_23330 = (state_23334[(2)]);var state_23334__$1 = state_23334;var statearr_23336_23357 = state_23334__$1;(statearr_23336_23357[(2)] = inst_23330);
(statearr_23336_23357[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23335 === (1)))
{var state_23334__$1 = state_23334;var statearr_23337_23358 = state_23334__$1;(statearr_23337_23358[(2)] = null);
(statearr_23337_23358[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23335 === (4)))
{var inst_23316 = (state_23334[(7)]);var inst_23316__$1 = (state_23334[(2)]);var inst_23317 = (inst_23316__$1 == null);var state_23334__$1 = (function (){var statearr_23338 = state_23334;(statearr_23338[(7)] = inst_23316__$1);
return statearr_23338;
})();if(cljs.core.truth_(inst_23317))
{var statearr_23339_23359 = state_23334__$1;(statearr_23339_23359[(1)] = (5));
} else
{var statearr_23340_23360 = state_23334__$1;(statearr_23340_23360[(1)] = (6));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_23335 === (6)))
{var inst_23316 = (state_23334[(7)]);var inst_23321 = (function (){var G__23341 = inst_23316;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23341) : p.call(null,G__23341));
})();var state_23334__$1 = state_23334;if(cljs.core.truth_(inst_23321))
{var statearr_23342_23361 = state_23334__$1;(statearr_23342_23361[(1)] = (8));
} else
{var statearr_23343_23362 = state_23334__$1;(statearr_23343_23362[(1)] = (9));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_23335 === (3)))
{var inst_23332 = (state_23334[(2)]);var state_23334__$1 = state_23334;return cljs.core.async.impl.ioc_helpers.return_chan(state_23334__$1,inst_23332);
} else
{if((state_val_23335 === (2)))
{var state_23334__$1 = state_23334;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23334__$1,(4),ch);
} else
{if((state_val_23335 === (11)))
{var inst_23324 = (state_23334[(2)]);var state_23334__$1 = state_23334;var statearr_23344_23363 = state_23334__$1;(statearr_23344_23363[(2)] = inst_23324);
(statearr_23344_23363[(1)] = (10));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23335 === (9)))
{var state_23334__$1 = state_23334;var statearr_23345_23364 = state_23334__$1;(statearr_23345_23364[(2)] = null);
(statearr_23345_23364[(1)] = (10));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23335 === (5)))
{var inst_23319 = cljs.core.async.close_BANG_(out);var state_23334__$1 = state_23334;var statearr_23346_23365 = state_23334__$1;(statearr_23346_23365[(2)] = inst_23319);
(statearr_23346_23365[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23335 === (10)))
{var inst_23327 = (state_23334[(2)]);var state_23334__$1 = (function (){var statearr_23347 = state_23334;(statearr_23347[(8)] = inst_23327);
return statearr_23347;
})();var statearr_23348_23366 = state_23334__$1;(statearr_23348_23366[(2)] = null);
(statearr_23348_23366[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23335 === (8)))
{var inst_23316 = (state_23334[(7)]);var state_23334__$1 = state_23334;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23334__$1,(11),out,inst_23316);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__12256__auto___23356,out))
;return ((function (switch__12241__auto__,c__12256__auto___23356,out){
return (function() {
var state_machine__12242__auto__ = null;
var state_machine__12242__auto____0 = (function (){var statearr_23352 = [null,null,null,null,null,null,null,null,null];(statearr_23352[(0)] = state_machine__12242__auto__);
(statearr_23352[(1)] = (1));
return statearr_23352;
});
var state_machine__12242__auto____1 = (function (state_23334){while(true){
var ret_value__12243__auto__ = (function (){try{while(true){
var result__12244__auto__ = switch__12241__auto__(state_23334);if(cljs.core.keyword_identical_QMARK_(result__12244__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12244__auto__;
}
break;
}
}catch (e23353){if((e23353 instanceof Object))
{var ex__12245__auto__ = e23353;var statearr_23354_23367 = state_23334;(statearr_23354_23367[(5)] = ex__12245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23334);
return cljs.core.constant$keyword$18;
} else
{throw e23353;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12243__auto__,cljs.core.constant$keyword$18))
{{
var G__23368 = state_23334;
state_23334 = G__23368;
continue;
}
} else
{return ret_value__12243__auto__;
}
break;
}
});
state_machine__12242__auto__ = function(state_23334){
switch(arguments.length){
case 0:
return state_machine__12242__auto____0.call(this);
case 1:
return state_machine__12242__auto____1.call(this,state_23334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12242__auto____0;
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12242__auto____1;
return state_machine__12242__auto__;
})()
;})(switch__12241__auto__,c__12256__auto___23356,out))
})();var state__12258__auto__ = (function (){var statearr_23355 = (function (){return (f__12257__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12257__auto__.cljs$core$IFn$_invoke$arity$0() : f__12257__auto__.call(null));
})();(statearr_23355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12256__auto___23356);
return statearr_23355;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12258__auto__);
});})(c__12256__auto___23356,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__12256__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12256__auto__){
return (function (){var f__12257__auto__ = (function (){var switch__12241__auto__ = ((function (c__12256__auto__){
return (function (state_23538){var state_val_23539 = (state_23538[(1)]);if((state_val_23539 === (7)))
{var inst_23534 = (state_23538[(2)]);var state_23538__$1 = state_23538;var statearr_23540_23582 = state_23538__$1;(statearr_23540_23582[(2)] = inst_23534);
(statearr_23540_23582[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23539 === (20)))
{var inst_23504 = (state_23538[(7)]);var inst_23515 = (state_23538[(2)]);var inst_23516 = cljs.core.next(inst_23504);var inst_23490 = inst_23516;var inst_23491 = null;var inst_23492 = (0);var inst_23493 = (0);var state_23538__$1 = (function (){var statearr_23541 = state_23538;(statearr_23541[(8)] = inst_23491);
(statearr_23541[(9)] = inst_23492);
(statearr_23541[(10)] = inst_23493);
(statearr_23541[(11)] = inst_23490);
(statearr_23541[(12)] = inst_23515);
return statearr_23541;
})();var statearr_23542_23583 = state_23538__$1;(statearr_23542_23583[(2)] = null);
(statearr_23542_23583[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23539 === (1)))
{var state_23538__$1 = state_23538;var statearr_23543_23584 = state_23538__$1;(statearr_23543_23584[(2)] = null);
(statearr_23543_23584[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23539 === (4)))
{var inst_23479 = (state_23538[(13)]);var inst_23479__$1 = (state_23538[(2)]);var inst_23480 = (inst_23479__$1 == null);var state_23538__$1 = (function (){var statearr_23544 = state_23538;(statearr_23544[(13)] = inst_23479__$1);
return statearr_23544;
})();if(cljs.core.truth_(inst_23480))
{var statearr_23545_23585 = state_23538__$1;(statearr_23545_23585[(1)] = (5));
} else
{var statearr_23546_23586 = state_23538__$1;(statearr_23546_23586[(1)] = (6));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_23539 === (15)))
{var state_23538__$1 = state_23538;var statearr_23550_23587 = state_23538__$1;(statearr_23550_23587[(2)] = null);
(statearr_23550_23587[(1)] = (16));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23539 === (21)))
{var state_23538__$1 = state_23538;var statearr_23551_23588 = state_23538__$1;(statearr_23551_23588[(2)] = null);
(statearr_23551_23588[(1)] = (23));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23539 === (13)))
{var inst_23491 = (state_23538[(8)]);var inst_23492 = (state_23538[(9)]);var inst_23493 = (state_23538[(10)]);var inst_23490 = (state_23538[(11)]);var inst_23500 = (state_23538[(2)]);var inst_23501 = (inst_23493 + (1));var tmp23547 = inst_23491;var tmp23548 = inst_23492;var tmp23549 = inst_23490;var inst_23490__$1 = tmp23549;var inst_23491__$1 = tmp23547;var inst_23492__$1 = tmp23548;var inst_23493__$1 = inst_23501;var state_23538__$1 = (function (){var statearr_23552 = state_23538;(statearr_23552[(8)] = inst_23491__$1);
(statearr_23552[(9)] = inst_23492__$1);
(statearr_23552[(10)] = inst_23493__$1);
(statearr_23552[(11)] = inst_23490__$1);
(statearr_23552[(14)] = inst_23500);
return statearr_23552;
})();var statearr_23553_23589 = state_23538__$1;(statearr_23553_23589[(2)] = null);
(statearr_23553_23589[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23539 === (22)))
{var state_23538__$1 = state_23538;var statearr_23554_23590 = state_23538__$1;(statearr_23554_23590[(2)] = null);
(statearr_23554_23590[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23539 === (6)))
{var inst_23479 = (state_23538[(13)]);var inst_23488 = (function (){var G__23555 = inst_23479;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23555) : f.call(null,G__23555));
})();var inst_23489 = cljs.core.seq(inst_23488);var inst_23490 = inst_23489;var inst_23491 = null;var inst_23492 = (0);var inst_23493 = (0);var state_23538__$1 = (function (){var statearr_23556 = state_23538;(statearr_23556[(8)] = inst_23491);
(statearr_23556[(9)] = inst_23492);
(statearr_23556[(10)] = inst_23493);
(statearr_23556[(11)] = inst_23490);
return statearr_23556;
})();var statearr_23557_23591 = state_23538__$1;(statearr_23557_23591[(2)] = null);
(statearr_23557_23591[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23539 === (17)))
{var inst_23504 = (state_23538[(7)]);var inst_23508 = cljs.core.chunk_first(inst_23504);var inst_23509 = cljs.core.chunk_rest(inst_23504);var inst_23510 = cljs.core.count(inst_23508);var inst_23490 = inst_23509;var inst_23491 = inst_23508;var inst_23492 = inst_23510;var inst_23493 = (0);var state_23538__$1 = (function (){var statearr_23558 = state_23538;(statearr_23558[(8)] = inst_23491);
(statearr_23558[(9)] = inst_23492);
(statearr_23558[(10)] = inst_23493);
(statearr_23558[(11)] = inst_23490);
return statearr_23558;
})();var statearr_23559_23592 = state_23538__$1;(statearr_23559_23592[(2)] = null);
(statearr_23559_23592[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23539 === (3)))
{var inst_23536 = (state_23538[(2)]);var state_23538__$1 = state_23538;return cljs.core.async.impl.ioc_helpers.return_chan(state_23538__$1,inst_23536);
} else
{if((state_val_23539 === (12)))
{var inst_23524 = (state_23538[(2)]);var state_23538__$1 = state_23538;var statearr_23560_23593 = state_23538__$1;(statearr_23560_23593[(2)] = inst_23524);
(statearr_23560_23593[(1)] = (9));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23539 === (2)))
{var state_23538__$1 = state_23538;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23538__$1,(4),in$);
} else
{if((state_val_23539 === (23)))
{var inst_23532 = (state_23538[(2)]);var state_23538__$1 = state_23538;var statearr_23561_23594 = state_23538__$1;(statearr_23561_23594[(2)] = inst_23532);
(statearr_23561_23594[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23539 === (19)))
{var inst_23519 = (state_23538[(2)]);var state_23538__$1 = state_23538;var statearr_23562_23595 = state_23538__$1;(statearr_23562_23595[(2)] = inst_23519);
(statearr_23562_23595[(1)] = (16));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23539 === (11)))
{var inst_23490 = (state_23538[(11)]);var inst_23504 = (state_23538[(7)]);var inst_23504__$1 = cljs.core.seq(inst_23490);var state_23538__$1 = (function (){var statearr_23563 = state_23538;(statearr_23563[(7)] = inst_23504__$1);
return statearr_23563;
})();if(inst_23504__$1)
{var statearr_23564_23596 = state_23538__$1;(statearr_23564_23596[(1)] = (14));
} else
{var statearr_23565_23597 = state_23538__$1;(statearr_23565_23597[(1)] = (15));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_23539 === (9)))
{var inst_23526 = (state_23538[(2)]);var inst_23527 = cljs.core.async.impl.protocols.closed_QMARK_(out);var state_23538__$1 = (function (){var statearr_23566 = state_23538;(statearr_23566[(15)] = inst_23526);
return statearr_23566;
})();if(cljs.core.truth_(inst_23527))
{var statearr_23567_23598 = state_23538__$1;(statearr_23567_23598[(1)] = (21));
} else
{var statearr_23568_23599 = state_23538__$1;(statearr_23568_23599[(1)] = (22));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_23539 === (5)))
{var inst_23482 = cljs.core.async.close_BANG_(out);var state_23538__$1 = state_23538;var statearr_23569_23600 = state_23538__$1;(statearr_23569_23600[(2)] = inst_23482);
(statearr_23569_23600[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23539 === (14)))
{var inst_23504 = (state_23538[(7)]);var inst_23506 = cljs.core.chunked_seq_QMARK_(inst_23504);var state_23538__$1 = state_23538;if(inst_23506)
{var statearr_23570_23601 = state_23538__$1;(statearr_23570_23601[(1)] = (17));
} else
{var statearr_23571_23602 = state_23538__$1;(statearr_23571_23602[(1)] = (18));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_23539 === (16)))
{var inst_23522 = (state_23538[(2)]);var state_23538__$1 = state_23538;var statearr_23572_23603 = state_23538__$1;(statearr_23572_23603[(2)] = inst_23522);
(statearr_23572_23603[(1)] = (12));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23539 === (10)))
{var inst_23491 = (state_23538[(8)]);var inst_23493 = (state_23538[(10)]);var inst_23498 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23491,inst_23493);var state_23538__$1 = state_23538;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23538__$1,(13),out,inst_23498);
} else
{if((state_val_23539 === (18)))
{var inst_23504 = (state_23538[(7)]);var inst_23513 = cljs.core.first(inst_23504);var state_23538__$1 = state_23538;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23538__$1,(20),out,inst_23513);
} else
{if((state_val_23539 === (8)))
{var inst_23492 = (state_23538[(9)]);var inst_23493 = (state_23538[(10)]);var inst_23495 = (inst_23493 < inst_23492);var inst_23496 = inst_23495;var state_23538__$1 = state_23538;if(cljs.core.truth_(inst_23496))
{var statearr_23573_23604 = state_23538__$1;(statearr_23573_23604[(1)] = (10));
} else
{var statearr_23574_23605 = state_23538__$1;(statearr_23574_23605[(1)] = (11));
}
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12256__auto__))
;return ((function (switch__12241__auto__,c__12256__auto__){
return (function() {
var state_machine__12242__auto__ = null;
var state_machine__12242__auto____0 = (function (){var statearr_23578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23578[(0)] = state_machine__12242__auto__);
(statearr_23578[(1)] = (1));
return statearr_23578;
});
var state_machine__12242__auto____1 = (function (state_23538){while(true){
var ret_value__12243__auto__ = (function (){try{while(true){
var result__12244__auto__ = switch__12241__auto__(state_23538);if(cljs.core.keyword_identical_QMARK_(result__12244__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12244__auto__;
}
break;
}
}catch (e23579){if((e23579 instanceof Object))
{var ex__12245__auto__ = e23579;var statearr_23580_23606 = state_23538;(statearr_23580_23606[(5)] = ex__12245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23538);
return cljs.core.constant$keyword$18;
} else
{throw e23579;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12243__auto__,cljs.core.constant$keyword$18))
{{
var G__23607 = state_23538;
state_23538 = G__23607;
continue;
}
} else
{return ret_value__12243__auto__;
}
break;
}
});
state_machine__12242__auto__ = function(state_23538){
switch(arguments.length){
case 0:
return state_machine__12242__auto____0.call(this);
case 1:
return state_machine__12242__auto____1.call(this,state_23538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12242__auto____0;
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12242__auto____1;
return state_machine__12242__auto__;
})()
;})(switch__12241__auto__,c__12256__auto__))
})();var state__12258__auto__ = (function (){var statearr_23581 = (function (){return (f__12257__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12257__auto__.cljs$core$IFn$_invoke$arity$0() : f__12257__auto__.call(null));
})();(statearr_23581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12256__auto__);
return statearr_23581;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12258__auto__);
});})(c__12256__auto__))
);
return c__12256__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__12256__auto___23711 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12256__auto___23711){
return (function (){var f__12257__auto__ = (function (){var switch__12241__auto__ = ((function (c__12256__auto___23711){
return (function (state_23687){var state_val_23688 = (state_23687[(1)]);if((state_val_23688 === (7)))
{var inst_23683 = (state_23687[(2)]);var state_23687__$1 = state_23687;var statearr_23689_23712 = state_23687__$1;(statearr_23689_23712[(2)] = inst_23683);
(statearr_23689_23712[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23688 === (1)))
{var state_23687__$1 = state_23687;var statearr_23690_23713 = state_23687__$1;(statearr_23690_23713[(2)] = null);
(statearr_23690_23713[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23688 === (4)))
{var inst_23666 = (state_23687[(7)]);var inst_23666__$1 = (state_23687[(2)]);var inst_23667 = (inst_23666__$1 == null);var state_23687__$1 = (function (){var statearr_23691 = state_23687;(statearr_23691[(7)] = inst_23666__$1);
return statearr_23691;
})();if(cljs.core.truth_(inst_23667))
{var statearr_23692_23714 = state_23687__$1;(statearr_23692_23714[(1)] = (5));
} else
{var statearr_23693_23715 = state_23687__$1;(statearr_23693_23715[(1)] = (6));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_23688 === (13)))
{var state_23687__$1 = state_23687;var statearr_23694_23716 = state_23687__$1;(statearr_23694_23716[(2)] = null);
(statearr_23694_23716[(1)] = (14));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23688 === (6)))
{var inst_23666 = (state_23687[(7)]);var state_23687__$1 = state_23687;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23687__$1,(11),to,inst_23666);
} else
{if((state_val_23688 === (3)))
{var inst_23685 = (state_23687[(2)]);var state_23687__$1 = state_23687;return cljs.core.async.impl.ioc_helpers.return_chan(state_23687__$1,inst_23685);
} else
{if((state_val_23688 === (12)))
{var state_23687__$1 = state_23687;var statearr_23695_23717 = state_23687__$1;(statearr_23695_23717[(2)] = null);
(statearr_23695_23717[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23688 === (2)))
{var state_23687__$1 = state_23687;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23687__$1,(4),from);
} else
{if((state_val_23688 === (11)))
{var inst_23676 = (state_23687[(2)]);var state_23687__$1 = state_23687;if(cljs.core.truth_(inst_23676))
{var statearr_23696_23718 = state_23687__$1;(statearr_23696_23718[(1)] = (12));
} else
{var statearr_23697_23719 = state_23687__$1;(statearr_23697_23719[(1)] = (13));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_23688 === (9)))
{var state_23687__$1 = state_23687;var statearr_23698_23720 = state_23687__$1;(statearr_23698_23720[(2)] = null);
(statearr_23698_23720[(1)] = (10));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23688 === (5)))
{var state_23687__$1 = state_23687;if(cljs.core.truth_(close_QMARK_))
{var statearr_23699_23721 = state_23687__$1;(statearr_23699_23721[(1)] = (8));
} else
{var statearr_23700_23722 = state_23687__$1;(statearr_23700_23722[(1)] = (9));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_23688 === (14)))
{var inst_23681 = (state_23687[(2)]);var state_23687__$1 = state_23687;var statearr_23701_23723 = state_23687__$1;(statearr_23701_23723[(2)] = inst_23681);
(statearr_23701_23723[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23688 === (10)))
{var inst_23673 = (state_23687[(2)]);var state_23687__$1 = state_23687;var statearr_23702_23724 = state_23687__$1;(statearr_23702_23724[(2)] = inst_23673);
(statearr_23702_23724[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23688 === (8)))
{var inst_23670 = cljs.core.async.close_BANG_(to);var state_23687__$1 = state_23687;var statearr_23703_23725 = state_23687__$1;(statearr_23703_23725[(2)] = inst_23670);
(statearr_23703_23725[(1)] = (10));
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12256__auto___23711))
;return ((function (switch__12241__auto__,c__12256__auto___23711){
return (function() {
var state_machine__12242__auto__ = null;
var state_machine__12242__auto____0 = (function (){var statearr_23707 = [null,null,null,null,null,null,null,null];(statearr_23707[(0)] = state_machine__12242__auto__);
(statearr_23707[(1)] = (1));
return statearr_23707;
});
var state_machine__12242__auto____1 = (function (state_23687){while(true){
var ret_value__12243__auto__ = (function (){try{while(true){
var result__12244__auto__ = switch__12241__auto__(state_23687);if(cljs.core.keyword_identical_QMARK_(result__12244__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12244__auto__;
}
break;
}
}catch (e23708){if((e23708 instanceof Object))
{var ex__12245__auto__ = e23708;var statearr_23709_23726 = state_23687;(statearr_23709_23726[(5)] = ex__12245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23687);
return cljs.core.constant$keyword$18;
} else
{throw e23708;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12243__auto__,cljs.core.constant$keyword$18))
{{
var G__23727 = state_23687;
state_23687 = G__23727;
continue;
}
} else
{return ret_value__12243__auto__;
}
break;
}
});
state_machine__12242__auto__ = function(state_23687){
switch(arguments.length){
case 0:
return state_machine__12242__auto____0.call(this);
case 1:
return state_machine__12242__auto____1.call(this,state_23687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12242__auto____0;
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12242__auto____1;
return state_machine__12242__auto__;
})()
;})(switch__12241__auto__,c__12256__auto___23711))
})();var state__12258__auto__ = (function (){var statearr_23710 = (function (){return (f__12257__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12257__auto__.cljs$core$IFn$_invoke$arity$0() : f__12257__auto__.call(null));
})();(statearr_23710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12256__auto___23711);
return statearr_23710;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12258__auto__);
});})(c__12256__auto___23711))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__12256__auto___23834 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12256__auto___23834,tc,fc){
return (function (){var f__12257__auto__ = (function (){var switch__12241__auto__ = ((function (c__12256__auto___23834,tc,fc){
return (function (state_23808){var state_val_23809 = (state_23808[(1)]);if((state_val_23809 === (7)))
{var inst_23804 = (state_23808[(2)]);var state_23808__$1 = state_23808;var statearr_23810_23835 = state_23808__$1;(statearr_23810_23835[(2)] = inst_23804);
(statearr_23810_23835[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23809 === (1)))
{var state_23808__$1 = state_23808;var statearr_23811_23836 = state_23808__$1;(statearr_23811_23836[(2)] = null);
(statearr_23811_23836[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23809 === (4)))
{var inst_23785 = (state_23808[(7)]);var inst_23785__$1 = (state_23808[(2)]);var inst_23786 = (inst_23785__$1 == null);var state_23808__$1 = (function (){var statearr_23812 = state_23808;(statearr_23812[(7)] = inst_23785__$1);
return statearr_23812;
})();if(cljs.core.truth_(inst_23786))
{var statearr_23813_23837 = state_23808__$1;(statearr_23813_23837[(1)] = (5));
} else
{var statearr_23814_23838 = state_23808__$1;(statearr_23814_23838[(1)] = (6));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_23809 === (13)))
{var state_23808__$1 = state_23808;var statearr_23815_23839 = state_23808__$1;(statearr_23815_23839[(2)] = null);
(statearr_23815_23839[(1)] = (14));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23809 === (6)))
{var inst_23785 = (state_23808[(7)]);var inst_23791 = (function (){var G__23816 = inst_23785;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23816) : p.call(null,G__23816));
})();var state_23808__$1 = state_23808;if(cljs.core.truth_(inst_23791))
{var statearr_23817_23840 = state_23808__$1;(statearr_23817_23840[(1)] = (9));
} else
{var statearr_23818_23841 = state_23808__$1;(statearr_23818_23841[(1)] = (10));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_23809 === (3)))
{var inst_23806 = (state_23808[(2)]);var state_23808__$1 = state_23808;return cljs.core.async.impl.ioc_helpers.return_chan(state_23808__$1,inst_23806);
} else
{if((state_val_23809 === (12)))
{var state_23808__$1 = state_23808;var statearr_23819_23842 = state_23808__$1;(statearr_23819_23842[(2)] = null);
(statearr_23819_23842[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23809 === (2)))
{var state_23808__$1 = state_23808;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23808__$1,(4),ch);
} else
{if((state_val_23809 === (11)))
{var inst_23785 = (state_23808[(7)]);var inst_23795 = (state_23808[(2)]);var state_23808__$1 = state_23808;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23808__$1,(8),inst_23795,inst_23785);
} else
{if((state_val_23809 === (9)))
{var state_23808__$1 = state_23808;var statearr_23820_23843 = state_23808__$1;(statearr_23820_23843[(2)] = tc);
(statearr_23820_23843[(1)] = (11));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23809 === (5)))
{var inst_23788 = cljs.core.async.close_BANG_(tc);var inst_23789 = cljs.core.async.close_BANG_(fc);var state_23808__$1 = (function (){var statearr_23821 = state_23808;(statearr_23821[(8)] = inst_23788);
return statearr_23821;
})();var statearr_23822_23844 = state_23808__$1;(statearr_23822_23844[(2)] = inst_23789);
(statearr_23822_23844[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23809 === (14)))
{var inst_23802 = (state_23808[(2)]);var state_23808__$1 = state_23808;var statearr_23823_23845 = state_23808__$1;(statearr_23823_23845[(2)] = inst_23802);
(statearr_23823_23845[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23809 === (10)))
{var state_23808__$1 = state_23808;var statearr_23824_23846 = state_23808__$1;(statearr_23824_23846[(2)] = fc);
(statearr_23824_23846[(1)] = (11));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23809 === (8)))
{var inst_23797 = (state_23808[(2)]);var state_23808__$1 = state_23808;if(cljs.core.truth_(inst_23797))
{var statearr_23825_23847 = state_23808__$1;(statearr_23825_23847[(1)] = (12));
} else
{var statearr_23826_23848 = state_23808__$1;(statearr_23826_23848[(1)] = (13));
}
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12256__auto___23834,tc,fc))
;return ((function (switch__12241__auto__,c__12256__auto___23834,tc,fc){
return (function() {
var state_machine__12242__auto__ = null;
var state_machine__12242__auto____0 = (function (){var statearr_23830 = [null,null,null,null,null,null,null,null,null];(statearr_23830[(0)] = state_machine__12242__auto__);
(statearr_23830[(1)] = (1));
return statearr_23830;
});
var state_machine__12242__auto____1 = (function (state_23808){while(true){
var ret_value__12243__auto__ = (function (){try{while(true){
var result__12244__auto__ = switch__12241__auto__(state_23808);if(cljs.core.keyword_identical_QMARK_(result__12244__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12244__auto__;
}
break;
}
}catch (e23831){if((e23831 instanceof Object))
{var ex__12245__auto__ = e23831;var statearr_23832_23849 = state_23808;(statearr_23832_23849[(5)] = ex__12245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23808);
return cljs.core.constant$keyword$18;
} else
{throw e23831;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12243__auto__,cljs.core.constant$keyword$18))
{{
var G__23850 = state_23808;
state_23808 = G__23850;
continue;
}
} else
{return ret_value__12243__auto__;
}
break;
}
});
state_machine__12242__auto__ = function(state_23808){
switch(arguments.length){
case 0:
return state_machine__12242__auto____0.call(this);
case 1:
return state_machine__12242__auto____1.call(this,state_23808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12242__auto____0;
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12242__auto____1;
return state_machine__12242__auto__;
})()
;})(switch__12241__auto__,c__12256__auto___23834,tc,fc))
})();var state__12258__auto__ = (function (){var statearr_23833 = (function (){return (f__12257__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12257__auto__.cljs$core$IFn$_invoke$arity$0() : f__12257__auto__.call(null));
})();(statearr_23833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12256__auto___23834);
return statearr_23833;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12258__auto__);
});})(c__12256__auto___23834,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__12256__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12256__auto__){
return (function (){var f__12257__auto__ = (function (){var switch__12241__auto__ = ((function (c__12256__auto__){
return (function (state_23899){var state_val_23900 = (state_23899[(1)]);if((state_val_23900 === (7)))
{var inst_23895 = (state_23899[(2)]);var state_23899__$1 = state_23899;var statearr_23901_23919 = state_23899__$1;(statearr_23901_23919[(2)] = inst_23895);
(statearr_23901_23919[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23900 === (6)))
{var inst_23885 = (state_23899[(7)]);var inst_23888 = (state_23899[(8)]);var inst_23892 = (function (){var G__23902 = inst_23885;var G__23903 = inst_23888;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23902,G__23903) : f.call(null,G__23902,G__23903));
})();var inst_23885__$1 = inst_23892;var state_23899__$1 = (function (){var statearr_23904 = state_23899;(statearr_23904[(7)] = inst_23885__$1);
return statearr_23904;
})();var statearr_23905_23920 = state_23899__$1;(statearr_23905_23920[(2)] = null);
(statearr_23905_23920[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23900 === (5)))
{var inst_23885 = (state_23899[(7)]);var state_23899__$1 = state_23899;var statearr_23906_23921 = state_23899__$1;(statearr_23906_23921[(2)] = inst_23885);
(statearr_23906_23921[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23900 === (4)))
{var inst_23888 = (state_23899[(8)]);var inst_23888__$1 = (state_23899[(2)]);var inst_23889 = (inst_23888__$1 == null);var state_23899__$1 = (function (){var statearr_23907 = state_23899;(statearr_23907[(8)] = inst_23888__$1);
return statearr_23907;
})();if(cljs.core.truth_(inst_23889))
{var statearr_23908_23922 = state_23899__$1;(statearr_23908_23922[(1)] = (5));
} else
{var statearr_23909_23923 = state_23899__$1;(statearr_23909_23923[(1)] = (6));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_23900 === (3)))
{var inst_23897 = (state_23899[(2)]);var state_23899__$1 = state_23899;return cljs.core.async.impl.ioc_helpers.return_chan(state_23899__$1,inst_23897);
} else
{if((state_val_23900 === (2)))
{var state_23899__$1 = state_23899;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23899__$1,(4),ch);
} else
{if((state_val_23900 === (1)))
{var inst_23885 = init;var state_23899__$1 = (function (){var statearr_23910 = state_23899;(statearr_23910[(7)] = inst_23885);
return statearr_23910;
})();var statearr_23911_23924 = state_23899__$1;(statearr_23911_23924[(2)] = null);
(statearr_23911_23924[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
}
}
});})(c__12256__auto__))
;return ((function (switch__12241__auto__,c__12256__auto__){
return (function() {
var state_machine__12242__auto__ = null;
var state_machine__12242__auto____0 = (function (){var statearr_23915 = [null,null,null,null,null,null,null,null,null];(statearr_23915[(0)] = state_machine__12242__auto__);
(statearr_23915[(1)] = (1));
return statearr_23915;
});
var state_machine__12242__auto____1 = (function (state_23899){while(true){
var ret_value__12243__auto__ = (function (){try{while(true){
var result__12244__auto__ = switch__12241__auto__(state_23899);if(cljs.core.keyword_identical_QMARK_(result__12244__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12244__auto__;
}
break;
}
}catch (e23916){if((e23916 instanceof Object))
{var ex__12245__auto__ = e23916;var statearr_23917_23925 = state_23899;(statearr_23917_23925[(5)] = ex__12245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23899);
return cljs.core.constant$keyword$18;
} else
{throw e23916;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12243__auto__,cljs.core.constant$keyword$18))
{{
var G__23926 = state_23899;
state_23899 = G__23926;
continue;
}
} else
{return ret_value__12243__auto__;
}
break;
}
});
state_machine__12242__auto__ = function(state_23899){
switch(arguments.length){
case 0:
return state_machine__12242__auto____0.call(this);
case 1:
return state_machine__12242__auto____1.call(this,state_23899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12242__auto____0;
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12242__auto____1;
return state_machine__12242__auto__;
})()
;})(switch__12241__auto__,c__12256__auto__))
})();var state__12258__auto__ = (function (){var statearr_23918 = (function (){return (f__12257__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12257__auto__.cljs$core$IFn$_invoke$arity$0() : f__12257__auto__.call(null));
})();(statearr_23918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12256__auto__);
return statearr_23918;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12258__auto__);
});})(c__12256__auto__))
);
return c__12256__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__12256__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12256__auto__){
return (function (){var f__12257__auto__ = (function (){var switch__12241__auto__ = ((function (c__12256__auto__){
return (function (state_24003){var state_val_24004 = (state_24003[(1)]);if((state_val_24004 === (7)))
{var inst_23985 = (state_24003[(2)]);var state_24003__$1 = state_24003;var statearr_24005_24028 = state_24003__$1;(statearr_24005_24028[(2)] = inst_23985);
(statearr_24005_24028[(1)] = (6));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24004 === (1)))
{var inst_23979 = cljs.core.seq(coll);var inst_23980 = inst_23979;var state_24003__$1 = (function (){var statearr_24006 = state_24003;(statearr_24006[(7)] = inst_23980);
return statearr_24006;
})();var statearr_24007_24029 = state_24003__$1;(statearr_24007_24029[(2)] = null);
(statearr_24007_24029[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24004 === (4)))
{var inst_23980 = (state_24003[(7)]);var inst_23983 = cljs.core.first(inst_23980);var state_24003__$1 = state_24003;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24003__$1,(7),ch,inst_23983);
} else
{if((state_val_24004 === (13)))
{var inst_23997 = (state_24003[(2)]);var state_24003__$1 = state_24003;var statearr_24008_24030 = state_24003__$1;(statearr_24008_24030[(2)] = inst_23997);
(statearr_24008_24030[(1)] = (10));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24004 === (6)))
{var inst_23988 = (state_24003[(2)]);var state_24003__$1 = state_24003;if(cljs.core.truth_(inst_23988))
{var statearr_24009_24031 = state_24003__$1;(statearr_24009_24031[(1)] = (8));
} else
{var statearr_24010_24032 = state_24003__$1;(statearr_24010_24032[(1)] = (9));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24004 === (3)))
{var inst_24001 = (state_24003[(2)]);var state_24003__$1 = state_24003;return cljs.core.async.impl.ioc_helpers.return_chan(state_24003__$1,inst_24001);
} else
{if((state_val_24004 === (12)))
{var state_24003__$1 = state_24003;var statearr_24011_24033 = state_24003__$1;(statearr_24011_24033[(2)] = null);
(statearr_24011_24033[(1)] = (13));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24004 === (2)))
{var inst_23980 = (state_24003[(7)]);var state_24003__$1 = state_24003;if(cljs.core.truth_(inst_23980))
{var statearr_24012_24034 = state_24003__$1;(statearr_24012_24034[(1)] = (4));
} else
{var statearr_24013_24035 = state_24003__$1;(statearr_24013_24035[(1)] = (5));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24004 === (11)))
{var inst_23994 = cljs.core.async.close_BANG_(ch);var state_24003__$1 = state_24003;var statearr_24014_24036 = state_24003__$1;(statearr_24014_24036[(2)] = inst_23994);
(statearr_24014_24036[(1)] = (13));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24004 === (9)))
{var state_24003__$1 = state_24003;if(cljs.core.truth_(close_QMARK_))
{var statearr_24015_24037 = state_24003__$1;(statearr_24015_24037[(1)] = (11));
} else
{var statearr_24016_24038 = state_24003__$1;(statearr_24016_24038[(1)] = (12));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24004 === (5)))
{var inst_23980 = (state_24003[(7)]);var state_24003__$1 = state_24003;var statearr_24017_24039 = state_24003__$1;(statearr_24017_24039[(2)] = inst_23980);
(statearr_24017_24039[(1)] = (6));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24004 === (10)))
{var inst_23999 = (state_24003[(2)]);var state_24003__$1 = state_24003;var statearr_24018_24040 = state_24003__$1;(statearr_24018_24040[(2)] = inst_23999);
(statearr_24018_24040[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24004 === (8)))
{var inst_23980 = (state_24003[(7)]);var inst_23990 = cljs.core.next(inst_23980);var inst_23980__$1 = inst_23990;var state_24003__$1 = (function (){var statearr_24019 = state_24003;(statearr_24019[(7)] = inst_23980__$1);
return statearr_24019;
})();var statearr_24020_24041 = state_24003__$1;(statearr_24020_24041[(2)] = null);
(statearr_24020_24041[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12256__auto__))
;return ((function (switch__12241__auto__,c__12256__auto__){
return (function() {
var state_machine__12242__auto__ = null;
var state_machine__12242__auto____0 = (function (){var statearr_24024 = [null,null,null,null,null,null,null,null];(statearr_24024[(0)] = state_machine__12242__auto__);
(statearr_24024[(1)] = (1));
return statearr_24024;
});
var state_machine__12242__auto____1 = (function (state_24003){while(true){
var ret_value__12243__auto__ = (function (){try{while(true){
var result__12244__auto__ = switch__12241__auto__(state_24003);if(cljs.core.keyword_identical_QMARK_(result__12244__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12244__auto__;
}
break;
}
}catch (e24025){if((e24025 instanceof Object))
{var ex__12245__auto__ = e24025;var statearr_24026_24042 = state_24003;(statearr_24026_24042[(5)] = ex__12245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24003);
return cljs.core.constant$keyword$18;
} else
{throw e24025;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12243__auto__,cljs.core.constant$keyword$18))
{{
var G__24043 = state_24003;
state_24003 = G__24043;
continue;
}
} else
{return ret_value__12243__auto__;
}
break;
}
});
state_machine__12242__auto__ = function(state_24003){
switch(arguments.length){
case 0:
return state_machine__12242__auto____0.call(this);
case 1:
return state_machine__12242__auto____1.call(this,state_24003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12242__auto____0;
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12242__auto____1;
return state_machine__12242__auto__;
})()
;})(switch__12241__auto__,c__12256__auto__))
})();var state__12258__auto__ = (function (){var statearr_24027 = (function (){return (f__12257__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12257__auto__.cljs$core$IFn$_invoke$arity$0() : f__12257__auto__.call(null));
})();(statearr_24027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12256__auto__);
return statearr_24027;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12258__auto__);
});})(c__12256__auto__))
);
return c__12256__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj24045 = {};return obj24045;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3627__auto__ = _;if(and__3627__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4275__auto__ = (((_ == null))?null:_);return (function (){var or__3639__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__24049 = x__4275__auto__;return goog.typeOf(G__24049);
})()]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj24051 = {};return obj24051;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__24055 = x__4275__auto__;return goog.typeOf(G__24055);
})()]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__24059 = x__4275__auto__;return goog.typeOf(G__24059);
})()]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__24063 = x__4275__auto__;return goog.typeOf(G__24063);
})()]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = (function (){var G__24293 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24293) : cljs.core.atom.call(null,G__24293));
})();var m = (function (){if(typeof cljs.core.async.t24294 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24294 = (function (cs,ch,mult,meta24295){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24295 = meta24295;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24294.cljs$lang$type = true;
cljs.core.async.t24294.cljs$lang$ctorStr = "cljs.core.async/t24294";
cljs.core.async.t24294.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write(writer__4216__auto__,"cljs.core.async/t24294");
});})(cs))
;
cljs.core.async.t24294.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24294.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24294.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24294.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;var G__24297_24522 = self__.cs;var G__24298_24523 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24297_24522,G__24298_24523) : cljs.core.reset_BANG_.call(null,G__24297_24522,G__24298_24523));
return null;
});})(cs))
;
cljs.core.async.t24294.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24294.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24294.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24296){var self__ = this;
var _24296__$1 = this;return self__.meta24295;
});})(cs))
;
cljs.core.async.t24294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24296,meta24295__$1){var self__ = this;
var _24296__$1 = this;return (new cljs.core.async.t24294(self__.cs,self__.ch,self__.mult,meta24295__$1));
});})(cs))
;
cljs.core.async.__GT_t24294 = ((function (cs){
return (function __GT_t24294(cs__$1,ch__$1,mult__$1,meta24295){return (new cljs.core.async.t24294(cs__$1,ch__$1,mult__$1,meta24295));
});})(cs))
;
}
return (new cljs.core.async.t24294(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__24299 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24299) : cljs.core.atom.call(null,G__24299));
})();var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12256__auto___24524 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12256__auto___24524,cs,m,dchan,dctr,done){
return (function (){var f__12257__auto__ = (function (){var switch__12241__auto__ = ((function (c__12256__auto___24524,cs,m,dchan,dctr,done){
return (function (state_24430){var state_val_24431 = (state_24430[(1)]);if((state_val_24431 === (7)))
{var inst_24426 = (state_24430[(2)]);var state_24430__$1 = state_24430;var statearr_24432_24525 = state_24430__$1;(statearr_24432_24525[(2)] = inst_24426);
(statearr_24432_24525[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (20)))
{var inst_24331 = (state_24430[(7)]);var inst_24341 = cljs.core.first(inst_24331);var inst_24342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24341,(0),null);var inst_24343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24341,(1),null);var state_24430__$1 = (function (){var statearr_24433 = state_24430;(statearr_24433[(8)] = inst_24342);
return statearr_24433;
})();if(cljs.core.truth_(inst_24343))
{var statearr_24434_24526 = state_24430__$1;(statearr_24434_24526[(1)] = (22));
} else
{var statearr_24435_24527 = state_24430__$1;(statearr_24435_24527[(1)] = (23));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (27)))
{var inst_24302 = (state_24430[(9)]);var inst_24373 = (state_24430[(10)]);var inst_24371 = (state_24430[(11)]);var inst_24378 = (state_24430[(12)]);var inst_24378__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24371,inst_24373);var inst_24379 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24378__$1,inst_24302,done);var state_24430__$1 = (function (){var statearr_24436 = state_24430;(statearr_24436[(12)] = inst_24378__$1);
return statearr_24436;
})();if(cljs.core.truth_(inst_24379))
{var statearr_24437_24528 = state_24430__$1;(statearr_24437_24528[(1)] = (30));
} else
{var statearr_24438_24529 = state_24430__$1;(statearr_24438_24529[(1)] = (31));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (1)))
{var state_24430__$1 = state_24430;var statearr_24439_24530 = state_24430__$1;(statearr_24439_24530[(2)] = null);
(statearr_24439_24530[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (24)))
{var inst_24331 = (state_24430[(7)]);var inst_24348 = (state_24430[(2)]);var inst_24349 = cljs.core.next(inst_24331);var inst_24311 = inst_24349;var inst_24312 = null;var inst_24313 = (0);var inst_24314 = (0);var state_24430__$1 = (function (){var statearr_24440 = state_24430;(statearr_24440[(13)] = inst_24314);
(statearr_24440[(14)] = inst_24313);
(statearr_24440[(15)] = inst_24311);
(statearr_24440[(16)] = inst_24312);
(statearr_24440[(17)] = inst_24348);
return statearr_24440;
})();var statearr_24441_24531 = state_24430__$1;(statearr_24441_24531[(2)] = null);
(statearr_24441_24531[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (39)))
{var state_24430__$1 = state_24430;var statearr_24445_24532 = state_24430__$1;(statearr_24445_24532[(2)] = null);
(statearr_24445_24532[(1)] = (41));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (4)))
{var inst_24302 = (state_24430[(9)]);var inst_24302__$1 = (state_24430[(2)]);var inst_24303 = (inst_24302__$1 == null);var state_24430__$1 = (function (){var statearr_24446 = state_24430;(statearr_24446[(9)] = inst_24302__$1);
return statearr_24446;
})();if(cljs.core.truth_(inst_24303))
{var statearr_24447_24533 = state_24430__$1;(statearr_24447_24533[(1)] = (5));
} else
{var statearr_24448_24534 = state_24430__$1;(statearr_24448_24534[(1)] = (6));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (15)))
{var inst_24314 = (state_24430[(13)]);var inst_24313 = (state_24430[(14)]);var inst_24311 = (state_24430[(15)]);var inst_24312 = (state_24430[(16)]);var inst_24327 = (state_24430[(2)]);var inst_24328 = (inst_24314 + (1));var tmp24442 = inst_24313;var tmp24443 = inst_24311;var tmp24444 = inst_24312;var inst_24311__$1 = tmp24443;var inst_24312__$1 = tmp24444;var inst_24313__$1 = tmp24442;var inst_24314__$1 = inst_24328;var state_24430__$1 = (function (){var statearr_24449 = state_24430;(statearr_24449[(18)] = inst_24327);
(statearr_24449[(13)] = inst_24314__$1);
(statearr_24449[(14)] = inst_24313__$1);
(statearr_24449[(15)] = inst_24311__$1);
(statearr_24449[(16)] = inst_24312__$1);
return statearr_24449;
})();var statearr_24450_24535 = state_24430__$1;(statearr_24450_24535[(2)] = null);
(statearr_24450_24535[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (21)))
{var inst_24352 = (state_24430[(2)]);var state_24430__$1 = state_24430;var statearr_24454_24536 = state_24430__$1;(statearr_24454_24536[(2)] = inst_24352);
(statearr_24454_24536[(1)] = (18));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (31)))
{var inst_24378 = (state_24430[(12)]);var inst_24382 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24383 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24378);var state_24430__$1 = (function (){var statearr_24455 = state_24430;(statearr_24455[(19)] = inst_24382);
return statearr_24455;
})();var statearr_24456_24537 = state_24430__$1;(statearr_24456_24537[(2)] = inst_24383);
(statearr_24456_24537[(1)] = (32));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (32)))
{var inst_24370 = (state_24430[(20)]);var inst_24372 = (state_24430[(21)]);var inst_24373 = (state_24430[(10)]);var inst_24371 = (state_24430[(11)]);var inst_24385 = (state_24430[(2)]);var inst_24386 = (inst_24373 + (1));var tmp24451 = inst_24370;var tmp24452 = inst_24372;var tmp24453 = inst_24371;var inst_24370__$1 = tmp24451;var inst_24371__$1 = tmp24453;var inst_24372__$1 = tmp24452;var inst_24373__$1 = inst_24386;var state_24430__$1 = (function (){var statearr_24457 = state_24430;(statearr_24457[(20)] = inst_24370__$1);
(statearr_24457[(21)] = inst_24372__$1);
(statearr_24457[(22)] = inst_24385);
(statearr_24457[(10)] = inst_24373__$1);
(statearr_24457[(11)] = inst_24371__$1);
return statearr_24457;
})();var statearr_24458_24538 = state_24430__$1;(statearr_24458_24538[(2)] = null);
(statearr_24458_24538[(1)] = (25));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (40)))
{var inst_24398 = (state_24430[(23)]);var inst_24402 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24403 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24398);var state_24430__$1 = (function (){var statearr_24459 = state_24430;(statearr_24459[(24)] = inst_24402);
return statearr_24459;
})();var statearr_24460_24539 = state_24430__$1;(statearr_24460_24539[(2)] = inst_24403);
(statearr_24460_24539[(1)] = (41));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (33)))
{var inst_24389 = (state_24430[(25)]);var inst_24391 = cljs.core.chunked_seq_QMARK_(inst_24389);var state_24430__$1 = state_24430;if(inst_24391)
{var statearr_24461_24540 = state_24430__$1;(statearr_24461_24540[(1)] = (36));
} else
{var statearr_24462_24541 = state_24430__$1;(statearr_24462_24541[(1)] = (37));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (13)))
{var inst_24321 = (state_24430[(26)]);var inst_24324 = cljs.core.async.close_BANG_(inst_24321);var state_24430__$1 = state_24430;var statearr_24463_24542 = state_24430__$1;(statearr_24463_24542[(2)] = inst_24324);
(statearr_24463_24542[(1)] = (15));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (22)))
{var inst_24342 = (state_24430[(8)]);var inst_24345 = cljs.core.async.close_BANG_(inst_24342);var state_24430__$1 = state_24430;var statearr_24464_24543 = state_24430__$1;(statearr_24464_24543[(2)] = inst_24345);
(statearr_24464_24543[(1)] = (24));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (36)))
{var inst_24389 = (state_24430[(25)]);var inst_24393 = cljs.core.chunk_first(inst_24389);var inst_24394 = cljs.core.chunk_rest(inst_24389);var inst_24395 = cljs.core.count(inst_24393);var inst_24370 = inst_24394;var inst_24371 = inst_24393;var inst_24372 = inst_24395;var inst_24373 = (0);var state_24430__$1 = (function (){var statearr_24465 = state_24430;(statearr_24465[(20)] = inst_24370);
(statearr_24465[(21)] = inst_24372);
(statearr_24465[(10)] = inst_24373);
(statearr_24465[(11)] = inst_24371);
return statearr_24465;
})();var statearr_24466_24544 = state_24430__$1;(statearr_24466_24544[(2)] = null);
(statearr_24466_24544[(1)] = (25));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (41)))
{var inst_24389 = (state_24430[(25)]);var inst_24405 = (state_24430[(2)]);var inst_24406 = cljs.core.next(inst_24389);var inst_24370 = inst_24406;var inst_24371 = null;var inst_24372 = (0);var inst_24373 = (0);var state_24430__$1 = (function (){var statearr_24467 = state_24430;(statearr_24467[(20)] = inst_24370);
(statearr_24467[(21)] = inst_24372);
(statearr_24467[(10)] = inst_24373);
(statearr_24467[(11)] = inst_24371);
(statearr_24467[(27)] = inst_24405);
return statearr_24467;
})();var statearr_24468_24545 = state_24430__$1;(statearr_24468_24545[(2)] = null);
(statearr_24468_24545[(1)] = (25));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (43)))
{var state_24430__$1 = state_24430;var statearr_24469_24546 = state_24430__$1;(statearr_24469_24546[(2)] = null);
(statearr_24469_24546[(1)] = (44));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (29)))
{var inst_24414 = (state_24430[(2)]);var state_24430__$1 = state_24430;var statearr_24470_24547 = state_24430__$1;(statearr_24470_24547[(2)] = inst_24414);
(statearr_24470_24547[(1)] = (26));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (44)))
{var inst_24423 = (state_24430[(2)]);var state_24430__$1 = (function (){var statearr_24471 = state_24430;(statearr_24471[(28)] = inst_24423);
return statearr_24471;
})();var statearr_24472_24548 = state_24430__$1;(statearr_24472_24548[(2)] = null);
(statearr_24472_24548[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (6)))
{var inst_24362 = (state_24430[(29)]);var inst_24361 = (function (){var G__24473 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24473) : cljs.core.deref.call(null,G__24473));
})();var inst_24362__$1 = cljs.core.keys(inst_24361);var inst_24363 = cljs.core.count(inst_24362__$1);var inst_24364 = (function (){var G__24474 = dctr;var G__24475 = inst_24363;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24474,G__24475) : cljs.core.reset_BANG_.call(null,G__24474,G__24475));
})();var inst_24369 = cljs.core.seq(inst_24362__$1);var inst_24370 = inst_24369;var inst_24371 = null;var inst_24372 = (0);var inst_24373 = (0);var state_24430__$1 = (function (){var statearr_24476 = state_24430;(statearr_24476[(20)] = inst_24370);
(statearr_24476[(21)] = inst_24372);
(statearr_24476[(10)] = inst_24373);
(statearr_24476[(29)] = inst_24362__$1);
(statearr_24476[(11)] = inst_24371);
(statearr_24476[(30)] = inst_24364);
return statearr_24476;
})();var statearr_24477_24549 = state_24430__$1;(statearr_24477_24549[(2)] = null);
(statearr_24477_24549[(1)] = (25));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (28)))
{var inst_24370 = (state_24430[(20)]);var inst_24389 = (state_24430[(25)]);var inst_24389__$1 = cljs.core.seq(inst_24370);var state_24430__$1 = (function (){var statearr_24478 = state_24430;(statearr_24478[(25)] = inst_24389__$1);
return statearr_24478;
})();if(inst_24389__$1)
{var statearr_24479_24550 = state_24430__$1;(statearr_24479_24550[(1)] = (33));
} else
{var statearr_24480_24551 = state_24430__$1;(statearr_24480_24551[(1)] = (34));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (25)))
{var inst_24372 = (state_24430[(21)]);var inst_24373 = (state_24430[(10)]);var inst_24375 = (inst_24373 < inst_24372);var inst_24376 = inst_24375;var state_24430__$1 = state_24430;if(cljs.core.truth_(inst_24376))
{var statearr_24481_24552 = state_24430__$1;(statearr_24481_24552[(1)] = (27));
} else
{var statearr_24482_24553 = state_24430__$1;(statearr_24482_24553[(1)] = (28));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (34)))
{var state_24430__$1 = state_24430;var statearr_24483_24554 = state_24430__$1;(statearr_24483_24554[(2)] = null);
(statearr_24483_24554[(1)] = (35));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (17)))
{var state_24430__$1 = state_24430;var statearr_24484_24555 = state_24430__$1;(statearr_24484_24555[(2)] = null);
(statearr_24484_24555[(1)] = (18));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (3)))
{var inst_24428 = (state_24430[(2)]);var state_24430__$1 = state_24430;return cljs.core.async.impl.ioc_helpers.return_chan(state_24430__$1,inst_24428);
} else
{if((state_val_24431 === (12)))
{var inst_24357 = (state_24430[(2)]);var state_24430__$1 = state_24430;var statearr_24485_24556 = state_24430__$1;(statearr_24485_24556[(2)] = inst_24357);
(statearr_24485_24556[(1)] = (9));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (2)))
{var state_24430__$1 = state_24430;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24430__$1,(4),ch);
} else
{if((state_val_24431 === (23)))
{var state_24430__$1 = state_24430;var statearr_24486_24557 = state_24430__$1;(statearr_24486_24557[(2)] = null);
(statearr_24486_24557[(1)] = (24));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (35)))
{var inst_24412 = (state_24430[(2)]);var state_24430__$1 = state_24430;var statearr_24487_24558 = state_24430__$1;(statearr_24487_24558[(2)] = inst_24412);
(statearr_24487_24558[(1)] = (29));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (19)))
{var inst_24331 = (state_24430[(7)]);var inst_24335 = cljs.core.chunk_first(inst_24331);var inst_24336 = cljs.core.chunk_rest(inst_24331);var inst_24337 = cljs.core.count(inst_24335);var inst_24311 = inst_24336;var inst_24312 = inst_24335;var inst_24313 = inst_24337;var inst_24314 = (0);var state_24430__$1 = (function (){var statearr_24488 = state_24430;(statearr_24488[(13)] = inst_24314);
(statearr_24488[(14)] = inst_24313);
(statearr_24488[(15)] = inst_24311);
(statearr_24488[(16)] = inst_24312);
return statearr_24488;
})();var statearr_24489_24559 = state_24430__$1;(statearr_24489_24559[(2)] = null);
(statearr_24489_24559[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (11)))
{var inst_24331 = (state_24430[(7)]);var inst_24311 = (state_24430[(15)]);var inst_24331__$1 = cljs.core.seq(inst_24311);var state_24430__$1 = (function (){var statearr_24490 = state_24430;(statearr_24490[(7)] = inst_24331__$1);
return statearr_24490;
})();if(inst_24331__$1)
{var statearr_24491_24560 = state_24430__$1;(statearr_24491_24560[(1)] = (16));
} else
{var statearr_24492_24561 = state_24430__$1;(statearr_24492_24561[(1)] = (17));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (9)))
{var inst_24359 = (state_24430[(2)]);var state_24430__$1 = state_24430;var statearr_24493_24562 = state_24430__$1;(statearr_24493_24562[(2)] = inst_24359);
(statearr_24493_24562[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (5)))
{var inst_24309 = (function (){var G__24494 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24494) : cljs.core.deref.call(null,G__24494));
})();var inst_24310 = cljs.core.seq(inst_24309);var inst_24311 = inst_24310;var inst_24312 = null;var inst_24313 = (0);var inst_24314 = (0);var state_24430__$1 = (function (){var statearr_24495 = state_24430;(statearr_24495[(13)] = inst_24314);
(statearr_24495[(14)] = inst_24313);
(statearr_24495[(15)] = inst_24311);
(statearr_24495[(16)] = inst_24312);
return statearr_24495;
})();var statearr_24496_24563 = state_24430__$1;(statearr_24496_24563[(2)] = null);
(statearr_24496_24563[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (14)))
{var state_24430__$1 = state_24430;var statearr_24497_24564 = state_24430__$1;(statearr_24497_24564[(2)] = null);
(statearr_24497_24564[(1)] = (15));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (45)))
{var inst_24420 = (state_24430[(2)]);var state_24430__$1 = state_24430;var statearr_24498_24565 = state_24430__$1;(statearr_24498_24565[(2)] = inst_24420);
(statearr_24498_24565[(1)] = (44));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (26)))
{var inst_24362 = (state_24430[(29)]);var inst_24416 = (state_24430[(2)]);var inst_24417 = cljs.core.seq(inst_24362);var state_24430__$1 = (function (){var statearr_24499 = state_24430;(statearr_24499[(31)] = inst_24416);
return statearr_24499;
})();if(inst_24417)
{var statearr_24500_24566 = state_24430__$1;(statearr_24500_24566[(1)] = (42));
} else
{var statearr_24501_24567 = state_24430__$1;(statearr_24501_24567[(1)] = (43));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (16)))
{var inst_24331 = (state_24430[(7)]);var inst_24333 = cljs.core.chunked_seq_QMARK_(inst_24331);var state_24430__$1 = state_24430;if(inst_24333)
{var statearr_24502_24568 = state_24430__$1;(statearr_24502_24568[(1)] = (19));
} else
{var statearr_24503_24569 = state_24430__$1;(statearr_24503_24569[(1)] = (20));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (38)))
{var inst_24409 = (state_24430[(2)]);var state_24430__$1 = state_24430;var statearr_24504_24570 = state_24430__$1;(statearr_24504_24570[(2)] = inst_24409);
(statearr_24504_24570[(1)] = (35));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (30)))
{var state_24430__$1 = state_24430;var statearr_24505_24571 = state_24430__$1;(statearr_24505_24571[(2)] = null);
(statearr_24505_24571[(1)] = (32));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (10)))
{var inst_24314 = (state_24430[(13)]);var inst_24312 = (state_24430[(16)]);var inst_24320 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24312,inst_24314);var inst_24321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24320,(0),null);var inst_24322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24320,(1),null);var state_24430__$1 = (function (){var statearr_24506 = state_24430;(statearr_24506[(26)] = inst_24321);
return statearr_24506;
})();if(cljs.core.truth_(inst_24322))
{var statearr_24507_24572 = state_24430__$1;(statearr_24507_24572[(1)] = (13));
} else
{var statearr_24508_24573 = state_24430__$1;(statearr_24508_24573[(1)] = (14));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (18)))
{var inst_24355 = (state_24430[(2)]);var state_24430__$1 = state_24430;var statearr_24509_24574 = state_24430__$1;(statearr_24509_24574[(2)] = inst_24355);
(statearr_24509_24574[(1)] = (12));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (42)))
{var state_24430__$1 = state_24430;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24430__$1,(45),dchan);
} else
{if((state_val_24431 === (37)))
{var inst_24389 = (state_24430[(25)]);var inst_24398 = (state_24430[(23)]);var inst_24302 = (state_24430[(9)]);var inst_24398__$1 = cljs.core.first(inst_24389);var inst_24399 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24398__$1,inst_24302,done);var state_24430__$1 = (function (){var statearr_24510 = state_24430;(statearr_24510[(23)] = inst_24398__$1);
return statearr_24510;
})();if(cljs.core.truth_(inst_24399))
{var statearr_24511_24575 = state_24430__$1;(statearr_24511_24575[(1)] = (39));
} else
{var statearr_24512_24576 = state_24430__$1;(statearr_24512_24576[(1)] = (40));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24431 === (8)))
{var inst_24314 = (state_24430[(13)]);var inst_24313 = (state_24430[(14)]);var inst_24316 = (inst_24314 < inst_24313);var inst_24317 = inst_24316;var state_24430__$1 = state_24430;if(cljs.core.truth_(inst_24317))
{var statearr_24513_24577 = state_24430__$1;(statearr_24513_24577[(1)] = (10));
} else
{var statearr_24514_24578 = state_24430__$1;(statearr_24514_24578[(1)] = (11));
}
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12256__auto___24524,cs,m,dchan,dctr,done))
;return ((function (switch__12241__auto__,c__12256__auto___24524,cs,m,dchan,dctr,done){
return (function() {
var state_machine__12242__auto__ = null;
var state_machine__12242__auto____0 = (function (){var statearr_24518 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24518[(0)] = state_machine__12242__auto__);
(statearr_24518[(1)] = (1));
return statearr_24518;
});
var state_machine__12242__auto____1 = (function (state_24430){while(true){
var ret_value__12243__auto__ = (function (){try{while(true){
var result__12244__auto__ = switch__12241__auto__(state_24430);if(cljs.core.keyword_identical_QMARK_(result__12244__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12244__auto__;
}
break;
}
}catch (e24519){if((e24519 instanceof Object))
{var ex__12245__auto__ = e24519;var statearr_24520_24579 = state_24430;(statearr_24520_24579[(5)] = ex__12245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24430);
return cljs.core.constant$keyword$18;
} else
{throw e24519;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12243__auto__,cljs.core.constant$keyword$18))
{{
var G__24580 = state_24430;
state_24430 = G__24580;
continue;
}
} else
{return ret_value__12243__auto__;
}
break;
}
});
state_machine__12242__auto__ = function(state_24430){
switch(arguments.length){
case 0:
return state_machine__12242__auto____0.call(this);
case 1:
return state_machine__12242__auto____1.call(this,state_24430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12242__auto____0;
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12242__auto____1;
return state_machine__12242__auto__;
})()
;})(switch__12241__auto__,c__12256__auto___24524,cs,m,dchan,dctr,done))
})();var state__12258__auto__ = (function (){var statearr_24521 = (function (){return (f__12257__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12257__auto__.cljs$core$IFn$_invoke$arity$0() : f__12257__auto__.call(null));
})();(statearr_24521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12256__auto___24524);
return statearr_24521;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12258__auto__);
});})(c__12256__auto___24524,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_(mult);
});
cljs.core.async.Mix = (function (){var obj24585 = {};return obj24585;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__24589 = x__4275__auto__;return goog.typeOf(G__24589);
})()]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__24593 = x__4275__auto__;return goog.typeOf(G__24593);
})()]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__24597 = x__4275__auto__;return goog.typeOf(G__24597);
})()]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__24601 = x__4275__auto__;return goog.typeOf(G__24601);
})()]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__24605 = x__4275__auto__;return goog.typeOf(G__24605);
})()]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = (function (){var G__24739 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24739) : cljs.core.atom.call(null,G__24739));
})();var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,null,cljs.core.constant$keyword$26,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$27);var solo_mode = (function (){var G__24740 = cljs.core.constant$keyword$26;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24740) : cljs.core.atom.call(null,G__24740));
})();var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((function (){var G__24741 = v;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__24741) : attr.call(null,G__24741));
})()))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = (function (){var G__24742 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24742) : cljs.core.deref.call(null,G__24742));
})();var mode = (function (){var G__24743 = solo_mode;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24743) : cljs.core.deref.call(null,G__24743));
})();var solos = pick(cljs.core.constant$keyword$27,chs);var pauses = pick(cljs.core.constant$keyword$25,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$28,solos,cljs.core.constant$keyword$29,pick(cljs.core.constant$keyword$26,chs),cljs.core.constant$keyword$30,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$25)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t24744 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24744 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24745){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24745 = meta24745;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24744.cljs$lang$type = true;
cljs.core.async.t24744.cljs$lang$ctorStr = "cljs.core.async/t24744";
cljs.core.async.t24744.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write(writer__4216__auto__,"cljs.core.async/t24744");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24744.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24744.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24744.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24744.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;var G__24747_24872 = self__.cs;var G__24748_24873 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24747_24872,G__24748_24873) : cljs.core.reset_BANG_.call(null,G__24747_24872,G__24748_24873));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24744.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24744.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__24749 = mode;return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__24749) : self__.solo_modes.call(null,G__24749));
})()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
var G__24750_24874 = self__.solo_mode;var G__24751_24875 = mode;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24750_24874,G__24751_24875) : cljs.core.reset_BANG_.call(null,G__24750_24874,G__24751_24875));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24744.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24744.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24744.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24746){var self__ = this;
var _24746__$1 = this;return self__.meta24745;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24746,meta24745__$1){var self__ = this;
var _24746__$1 = this;return (new cljs.core.async.t24744(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24745__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24744 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24744(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24745){return (new cljs.core.async.t24744(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24745));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24744(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__12256__auto___24876 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12256__auto___24876,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__12257__auto__ = (function (){var switch__12241__auto__ = ((function (c__12256__auto___24876,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24823){var state_val_24824 = (state_24823[(1)]);if((state_val_24824 === (7)))
{var inst_24765 = (state_24823[(7)]);var inst_24770 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24765);var state_24823__$1 = state_24823;var statearr_24825_24877 = state_24823__$1;(statearr_24825_24877[(2)] = inst_24770);
(statearr_24825_24877[(1)] = (9));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24824 === (20)))
{var inst_24780 = (state_24823[(8)]);var state_24823__$1 = state_24823;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24823__$1,(23),out,inst_24780);
} else
{if((state_val_24824 === (1)))
{var inst_24755 = (state_24823[(9)]);var inst_24755__$1 = calc_state();var inst_24756 = cljs.core.seq_QMARK_(inst_24755__$1);var state_24823__$1 = (function (){var statearr_24826 = state_24823;(statearr_24826[(9)] = inst_24755__$1);
return statearr_24826;
})();if(inst_24756)
{var statearr_24827_24878 = state_24823__$1;(statearr_24827_24878[(1)] = (2));
} else
{var statearr_24828_24879 = state_24823__$1;(statearr_24828_24879[(1)] = (3));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24824 === (24)))
{var inst_24773 = (state_24823[(10)]);var inst_24765 = inst_24773;var state_24823__$1 = (function (){var statearr_24829 = state_24823;(statearr_24829[(7)] = inst_24765);
return statearr_24829;
})();var statearr_24830_24880 = state_24823__$1;(statearr_24830_24880[(2)] = null);
(statearr_24830_24880[(1)] = (5));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24824 === (4)))
{var inst_24755 = (state_24823[(9)]);var inst_24761 = (state_24823[(2)]);var inst_24762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24761,cljs.core.constant$keyword$30);var inst_24763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24761,cljs.core.constant$keyword$29);var inst_24764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24761,cljs.core.constant$keyword$28);var inst_24765 = inst_24755;var state_24823__$1 = (function (){var statearr_24831 = state_24823;(statearr_24831[(11)] = inst_24762);
(statearr_24831[(12)] = inst_24763);
(statearr_24831[(13)] = inst_24764);
(statearr_24831[(7)] = inst_24765);
return statearr_24831;
})();var statearr_24832_24881 = state_24823__$1;(statearr_24832_24881[(2)] = null);
(statearr_24832_24881[(1)] = (5));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24824 === (15)))
{var state_24823__$1 = state_24823;var statearr_24833_24882 = state_24823__$1;(statearr_24833_24882[(2)] = null);
(statearr_24833_24882[(1)] = (16));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24824 === (21)))
{var inst_24773 = (state_24823[(10)]);var inst_24765 = inst_24773;var state_24823__$1 = (function (){var statearr_24834 = state_24823;(statearr_24834[(7)] = inst_24765);
return statearr_24834;
})();var statearr_24835_24883 = state_24823__$1;(statearr_24835_24883[(2)] = null);
(statearr_24835_24883[(1)] = (5));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24824 === (13)))
{var inst_24819 = (state_24823[(2)]);var state_24823__$1 = state_24823;var statearr_24836_24884 = state_24823__$1;(statearr_24836_24884[(2)] = inst_24819);
(statearr_24836_24884[(1)] = (6));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24824 === (22)))
{var inst_24817 = (state_24823[(2)]);var state_24823__$1 = state_24823;var statearr_24837_24885 = state_24823__$1;(statearr_24837_24885[(2)] = inst_24817);
(statearr_24837_24885[(1)] = (13));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24824 === (6)))
{var inst_24821 = (state_24823[(2)]);var state_24823__$1 = state_24823;return cljs.core.async.impl.ioc_helpers.return_chan(state_24823__$1,inst_24821);
} else
{if((state_val_24824 === (25)))
{var state_24823__$1 = state_24823;var statearr_24838_24886 = state_24823__$1;(statearr_24838_24886[(2)] = null);
(statearr_24838_24886[(1)] = (26));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24824 === (17)))
{var inst_24796 = (state_24823[(14)]);var state_24823__$1 = state_24823;var statearr_24839_24887 = state_24823__$1;(statearr_24839_24887[(2)] = inst_24796);
(statearr_24839_24887[(1)] = (19));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24824 === (3)))
{var inst_24755 = (state_24823[(9)]);var state_24823__$1 = state_24823;var statearr_24840_24888 = state_24823__$1;(statearr_24840_24888[(2)] = inst_24755);
(statearr_24840_24888[(1)] = (4));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24824 === (12)))
{var inst_24796 = (state_24823[(14)]);var inst_24776 = (state_24823[(15)]);var inst_24781 = (state_24823[(16)]);var inst_24796__$1 = (function (){var G__24841 = inst_24781;return (inst_24776.cljs$core$IFn$_invoke$arity$1 ? inst_24776.cljs$core$IFn$_invoke$arity$1(G__24841) : inst_24776.call(null,G__24841));
})();var state_24823__$1 = (function (){var statearr_24842 = state_24823;(statearr_24842[(14)] = inst_24796__$1);
return statearr_24842;
})();if(cljs.core.truth_(inst_24796__$1))
{var statearr_24843_24889 = state_24823__$1;(statearr_24843_24889[(1)] = (17));
} else
{var statearr_24844_24890 = state_24823__$1;(statearr_24844_24890[(1)] = (18));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24824 === (2)))
{var inst_24755 = (state_24823[(9)]);var inst_24758 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24755);var state_24823__$1 = state_24823;var statearr_24845_24891 = state_24823__$1;(statearr_24845_24891[(2)] = inst_24758);
(statearr_24845_24891[(1)] = (4));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24824 === (23)))
{var inst_24808 = (state_24823[(2)]);var state_24823__$1 = state_24823;if(cljs.core.truth_(inst_24808))
{var statearr_24846_24892 = state_24823__$1;(statearr_24846_24892[(1)] = (24));
} else
{var statearr_24847_24893 = state_24823__$1;(statearr_24847_24893[(1)] = (25));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24824 === (19)))
{var inst_24805 = (state_24823[(2)]);var state_24823__$1 = state_24823;if(cljs.core.truth_(inst_24805))
{var statearr_24848_24894 = state_24823__$1;(statearr_24848_24894[(1)] = (20));
} else
{var statearr_24849_24895 = state_24823__$1;(statearr_24849_24895[(1)] = (21));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24824 === (11)))
{var inst_24780 = (state_24823[(8)]);var inst_24786 = (inst_24780 == null);var state_24823__$1 = state_24823;if(cljs.core.truth_(inst_24786))
{var statearr_24850_24896 = state_24823__$1;(statearr_24850_24896[(1)] = (14));
} else
{var statearr_24851_24897 = state_24823__$1;(statearr_24851_24897[(1)] = (15));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24824 === (9)))
{var inst_24773 = (state_24823[(10)]);var inst_24773__$1 = (state_24823[(2)]);var inst_24774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24773__$1,cljs.core.constant$keyword$30);var inst_24775 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24773__$1,cljs.core.constant$keyword$29);var inst_24776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24773__$1,cljs.core.constant$keyword$28);var state_24823__$1 = (function (){var statearr_24852 = state_24823;(statearr_24852[(17)] = inst_24775);
(statearr_24852[(15)] = inst_24776);
(statearr_24852[(10)] = inst_24773__$1);
return statearr_24852;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_24823__$1,(10),inst_24774);
} else
{if((state_val_24824 === (5)))
{var inst_24765 = (state_24823[(7)]);var inst_24768 = cljs.core.seq_QMARK_(inst_24765);var state_24823__$1 = state_24823;if(inst_24768)
{var statearr_24853_24898 = state_24823__$1;(statearr_24853_24898[(1)] = (7));
} else
{var statearr_24854_24899 = state_24823__$1;(statearr_24854_24899[(1)] = (8));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24824 === (14)))
{var inst_24781 = (state_24823[(16)]);var inst_24788 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24781);var state_24823__$1 = state_24823;var statearr_24855_24900 = state_24823__$1;(statearr_24855_24900[(2)] = inst_24788);
(statearr_24855_24900[(1)] = (16));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24824 === (26)))
{var inst_24813 = (state_24823[(2)]);var state_24823__$1 = state_24823;var statearr_24856_24901 = state_24823__$1;(statearr_24856_24901[(2)] = inst_24813);
(statearr_24856_24901[(1)] = (22));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24824 === (16)))
{var inst_24791 = (state_24823[(2)]);var inst_24792 = calc_state();var inst_24765 = inst_24792;var state_24823__$1 = (function (){var statearr_24857 = state_24823;(statearr_24857[(18)] = inst_24791);
(statearr_24857[(7)] = inst_24765);
return statearr_24857;
})();var statearr_24858_24902 = state_24823__$1;(statearr_24858_24902[(2)] = null);
(statearr_24858_24902[(1)] = (5));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24824 === (10)))
{var inst_24780 = (state_24823[(8)]);var inst_24781 = (state_24823[(16)]);var inst_24779 = (state_24823[(2)]);var inst_24780__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24779,(0),null);var inst_24781__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24779,(1),null);var inst_24782 = (inst_24780__$1 == null);var inst_24783 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24781__$1,change);var inst_24784 = (inst_24782) || (inst_24783);var state_24823__$1 = (function (){var statearr_24859 = state_24823;(statearr_24859[(8)] = inst_24780__$1);
(statearr_24859[(16)] = inst_24781__$1);
return statearr_24859;
})();if(cljs.core.truth_(inst_24784))
{var statearr_24860_24903 = state_24823__$1;(statearr_24860_24903[(1)] = (11));
} else
{var statearr_24861_24904 = state_24823__$1;(statearr_24861_24904[(1)] = (12));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24824 === (18)))
{var inst_24775 = (state_24823[(17)]);var inst_24776 = (state_24823[(15)]);var inst_24781 = (state_24823[(16)]);var inst_24800 = cljs.core.empty_QMARK_(inst_24776);var inst_24801 = (function (){var G__24862 = inst_24781;return (inst_24775.cljs$core$IFn$_invoke$arity$1 ? inst_24775.cljs$core$IFn$_invoke$arity$1(G__24862) : inst_24775.call(null,G__24862));
})();var inst_24802 = cljs.core.not(inst_24801);var inst_24803 = (inst_24800) && (inst_24802);var state_24823__$1 = state_24823;var statearr_24863_24905 = state_24823__$1;(statearr_24863_24905[(2)] = inst_24803);
(statearr_24863_24905[(1)] = (19));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24824 === (8)))
{var inst_24765 = (state_24823[(7)]);var state_24823__$1 = state_24823;var statearr_24864_24906 = state_24823__$1;(statearr_24864_24906[(2)] = inst_24765);
(statearr_24864_24906[(1)] = (9));
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12256__auto___24876,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__12241__auto__,c__12256__auto___24876,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__12242__auto__ = null;
var state_machine__12242__auto____0 = (function (){var statearr_24868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24868[(0)] = state_machine__12242__auto__);
(statearr_24868[(1)] = (1));
return statearr_24868;
});
var state_machine__12242__auto____1 = (function (state_24823){while(true){
var ret_value__12243__auto__ = (function (){try{while(true){
var result__12244__auto__ = switch__12241__auto__(state_24823);if(cljs.core.keyword_identical_QMARK_(result__12244__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12244__auto__;
}
break;
}
}catch (e24869){if((e24869 instanceof Object))
{var ex__12245__auto__ = e24869;var statearr_24870_24907 = state_24823;(statearr_24870_24907[(5)] = ex__12245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24823);
return cljs.core.constant$keyword$18;
} else
{throw e24869;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12243__auto__,cljs.core.constant$keyword$18))
{{
var G__24908 = state_24823;
state_24823 = G__24908;
continue;
}
} else
{return ret_value__12243__auto__;
}
break;
}
});
state_machine__12242__auto__ = function(state_24823){
switch(arguments.length){
case 0:
return state_machine__12242__auto____0.call(this);
case 1:
return state_machine__12242__auto____1.call(this,state_24823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12242__auto____0;
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12242__auto____1;
return state_machine__12242__auto__;
})()
;})(switch__12241__auto__,c__12256__auto___24876,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__12258__auto__ = (function (){var statearr_24871 = (function (){return (f__12257__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12257__auto__.cljs$core$IFn$_invoke$arity$0() : f__12257__auto__.call(null));
})();(statearr_24871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12256__auto___24876);
return statearr_24871;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12258__auto__);
});})(c__12256__auto___24876,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_(mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_(mix,mode);
});
cljs.core.async.Pub = (function (){var obj24910 = {};return obj24910;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__24914 = x__4275__auto__;return goog.typeOf(G__24914);
})()]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__24918 = x__4275__auto__;return goog.typeOf(G__24918);
})()]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__24924 = x__4275__auto__;return goog.typeOf(G__24924);
})()]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__24926 = x__4275__auto__;return goog.typeOf(G__24926);
})()]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = (function (){var G__25057 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25057) : cljs.core.atom.call(null,G__25057));
})();var ensure_mult = ((function (mults){
return (function (topic){var or__3639__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__25059 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25059) : cljs.core.deref.call(null,G__25059));
})(),topic);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3639__auto__,mults){
return (function (p1__24927_SHARP_){if(cljs.core.truth_((function (){var G__25060 = topic;return (p1__24927_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24927_SHARP_.cljs$core$IFn$_invoke$arity$1(G__25060) : p1__24927_SHARP_.call(null,G__25060));
})()))
{return p1__24927_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24927_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__25061 = topic;return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__25061) : buf_fn.call(null,G__25061));
})())));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25062 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25062 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25063){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25063 = meta25063;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25062.cljs$lang$type = true;
cljs.core.async.t25062.cljs$lang$ctorStr = "cljs.core.async/t25062";
cljs.core.async.t25062.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write(writer__4216__auto__,"cljs.core.async/t25062");
});})(mults,ensure_mult))
;
cljs.core.async.t25062.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25062.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (function (){var G__25065 = topic;return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__25065) : self__.ensure_mult.call(null,G__25065));
})();return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25062.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__25066 = self__.mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25066) : cljs.core.deref.call(null,G__25066));
})(),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25062.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;var G__25067 = self__.mults;var G__25068 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25067,G__25068) : cljs.core.reset_BANG_.call(null,G__25067,G__25068));
});})(mults,ensure_mult))
;
cljs.core.async.t25062.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25062.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25062.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25062.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25064){var self__ = this;
var _25064__$1 = this;return self__.meta25063;
});})(mults,ensure_mult))
;
cljs.core.async.t25062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25064,meta25063__$1){var self__ = this;
var _25064__$1 = this;return (new cljs.core.async.t25062(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25063__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25062 = ((function (mults,ensure_mult){
return (function __GT_t25062(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25063){return (new cljs.core.async.t25062(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25063));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25062(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12256__auto___25183 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12256__auto___25183,mults,ensure_mult,p){
return (function (){var f__12257__auto__ = (function (){var switch__12241__auto__ = ((function (c__12256__auto___25183,mults,ensure_mult,p){
return (function (state_25136){var state_val_25137 = (state_25136[(1)]);if((state_val_25137 === (7)))
{var inst_25132 = (state_25136[(2)]);var state_25136__$1 = state_25136;var statearr_25138_25184 = state_25136__$1;(statearr_25138_25184[(2)] = inst_25132);
(statearr_25138_25184[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25137 === (20)))
{var state_25136__$1 = state_25136;var statearr_25139_25185 = state_25136__$1;(statearr_25139_25185[(2)] = null);
(statearr_25139_25185[(1)] = (22));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25137 === (1)))
{var state_25136__$1 = state_25136;var statearr_25140_25186 = state_25136__$1;(statearr_25140_25186[(2)] = null);
(statearr_25140_25186[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25137 === (4)))
{var inst_25071 = (state_25136[(7)]);var inst_25071__$1 = (state_25136[(2)]);var inst_25072 = (inst_25071__$1 == null);var state_25136__$1 = (function (){var statearr_25141 = state_25136;(statearr_25141[(7)] = inst_25071__$1);
return statearr_25141;
})();if(cljs.core.truth_(inst_25072))
{var statearr_25142_25187 = state_25136__$1;(statearr_25142_25187[(1)] = (5));
} else
{var statearr_25143_25188 = state_25136__$1;(statearr_25143_25188[(1)] = (6));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25137 === (15)))
{var inst_25113 = (state_25136[(2)]);var state_25136__$1 = state_25136;var statearr_25144_25189 = state_25136__$1;(statearr_25144_25189[(2)] = inst_25113);
(statearr_25144_25189[(1)] = (12));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25137 === (21)))
{var inst_25119 = (state_25136[(8)]);var inst_25127 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25119);var state_25136__$1 = state_25136;var statearr_25145_25190 = state_25136__$1;(statearr_25145_25190[(2)] = inst_25127);
(statearr_25145_25190[(1)] = (22));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25137 === (13)))
{var inst_25095 = (state_25136[(9)]);var inst_25097 = cljs.core.chunked_seq_QMARK_(inst_25095);var state_25136__$1 = state_25136;if(inst_25097)
{var statearr_25146_25191 = state_25136__$1;(statearr_25146_25191[(1)] = (16));
} else
{var statearr_25147_25192 = state_25136__$1;(statearr_25147_25192[(1)] = (17));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25137 === (22)))
{var inst_25129 = (state_25136[(2)]);var state_25136__$1 = (function (){var statearr_25148 = state_25136;(statearr_25148[(10)] = inst_25129);
return statearr_25148;
})();var statearr_25149_25193 = state_25136__$1;(statearr_25149_25193[(2)] = null);
(statearr_25149_25193[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25137 === (6)))
{var inst_25071 = (state_25136[(7)]);var inst_25119 = (state_25136[(8)]);var inst_25119__$1 = (function (){var G__25150 = inst_25071;return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__25150) : topic_fn.call(null,G__25150));
})();var inst_25120 = (function (){var G__25151 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25151) : cljs.core.deref.call(null,G__25151));
})();var inst_25121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25120,inst_25119__$1);var inst_25122 = cljs.core.async.muxch_STAR_(inst_25121);var state_25136__$1 = (function (){var statearr_25152 = state_25136;(statearr_25152[(8)] = inst_25119__$1);
return statearr_25152;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25136__$1,(19),inst_25122,inst_25071);
} else
{if((state_val_25137 === (17)))
{var inst_25095 = (state_25136[(9)]);var inst_25104 = cljs.core.first(inst_25095);var inst_25105 = cljs.core.async.muxch_STAR_(inst_25104);var inst_25106 = cljs.core.async.close_BANG_(inst_25105);var inst_25107 = cljs.core.next(inst_25095);var inst_25081 = inst_25107;var inst_25082 = null;var inst_25083 = (0);var inst_25084 = (0);var state_25136__$1 = (function (){var statearr_25153 = state_25136;(statearr_25153[(11)] = inst_25084);
(statearr_25153[(12)] = inst_25081);
(statearr_25153[(13)] = inst_25106);
(statearr_25153[(14)] = inst_25083);
(statearr_25153[(15)] = inst_25082);
return statearr_25153;
})();var statearr_25154_25194 = state_25136__$1;(statearr_25154_25194[(2)] = null);
(statearr_25154_25194[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25137 === (3)))
{var inst_25134 = (state_25136[(2)]);var state_25136__$1 = state_25136;return cljs.core.async.impl.ioc_helpers.return_chan(state_25136__$1,inst_25134);
} else
{if((state_val_25137 === (12)))
{var inst_25115 = (state_25136[(2)]);var state_25136__$1 = state_25136;var statearr_25155_25195 = state_25136__$1;(statearr_25155_25195[(2)] = inst_25115);
(statearr_25155_25195[(1)] = (9));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25137 === (2)))
{var state_25136__$1 = state_25136;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25136__$1,(4),ch);
} else
{if((state_val_25137 === (19)))
{var inst_25124 = (state_25136[(2)]);var state_25136__$1 = state_25136;if(cljs.core.truth_(inst_25124))
{var statearr_25156_25196 = state_25136__$1;(statearr_25156_25196[(1)] = (20));
} else
{var statearr_25157_25197 = state_25136__$1;(statearr_25157_25197[(1)] = (21));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25137 === (11)))
{var inst_25081 = (state_25136[(12)]);var inst_25095 = (state_25136[(9)]);var inst_25095__$1 = cljs.core.seq(inst_25081);var state_25136__$1 = (function (){var statearr_25158 = state_25136;(statearr_25158[(9)] = inst_25095__$1);
return statearr_25158;
})();if(inst_25095__$1)
{var statearr_25159_25198 = state_25136__$1;(statearr_25159_25198[(1)] = (13));
} else
{var statearr_25160_25199 = state_25136__$1;(statearr_25160_25199[(1)] = (14));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25137 === (9)))
{var inst_25117 = (state_25136[(2)]);var state_25136__$1 = state_25136;var statearr_25161_25200 = state_25136__$1;(statearr_25161_25200[(2)] = inst_25117);
(statearr_25161_25200[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25137 === (5)))
{var inst_25078 = (function (){var G__25162 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25162) : cljs.core.deref.call(null,G__25162));
})();var inst_25079 = cljs.core.vals(inst_25078);var inst_25080 = cljs.core.seq(inst_25079);var inst_25081 = inst_25080;var inst_25082 = null;var inst_25083 = (0);var inst_25084 = (0);var state_25136__$1 = (function (){var statearr_25163 = state_25136;(statearr_25163[(11)] = inst_25084);
(statearr_25163[(12)] = inst_25081);
(statearr_25163[(14)] = inst_25083);
(statearr_25163[(15)] = inst_25082);
return statearr_25163;
})();var statearr_25164_25201 = state_25136__$1;(statearr_25164_25201[(2)] = null);
(statearr_25164_25201[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25137 === (14)))
{var state_25136__$1 = state_25136;var statearr_25168_25202 = state_25136__$1;(statearr_25168_25202[(2)] = null);
(statearr_25168_25202[(1)] = (15));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25137 === (16)))
{var inst_25095 = (state_25136[(9)]);var inst_25099 = cljs.core.chunk_first(inst_25095);var inst_25100 = cljs.core.chunk_rest(inst_25095);var inst_25101 = cljs.core.count(inst_25099);var inst_25081 = inst_25100;var inst_25082 = inst_25099;var inst_25083 = inst_25101;var inst_25084 = (0);var state_25136__$1 = (function (){var statearr_25169 = state_25136;(statearr_25169[(11)] = inst_25084);
(statearr_25169[(12)] = inst_25081);
(statearr_25169[(14)] = inst_25083);
(statearr_25169[(15)] = inst_25082);
return statearr_25169;
})();var statearr_25170_25203 = state_25136__$1;(statearr_25170_25203[(2)] = null);
(statearr_25170_25203[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25137 === (10)))
{var inst_25084 = (state_25136[(11)]);var inst_25081 = (state_25136[(12)]);var inst_25083 = (state_25136[(14)]);var inst_25082 = (state_25136[(15)]);var inst_25089 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25082,inst_25084);var inst_25090 = cljs.core.async.muxch_STAR_(inst_25089);var inst_25091 = cljs.core.async.close_BANG_(inst_25090);var inst_25092 = (inst_25084 + (1));var tmp25165 = inst_25081;var tmp25166 = inst_25083;var tmp25167 = inst_25082;var inst_25081__$1 = tmp25165;var inst_25082__$1 = tmp25167;var inst_25083__$1 = tmp25166;var inst_25084__$1 = inst_25092;var state_25136__$1 = (function (){var statearr_25171 = state_25136;(statearr_25171[(16)] = inst_25091);
(statearr_25171[(11)] = inst_25084__$1);
(statearr_25171[(12)] = inst_25081__$1);
(statearr_25171[(14)] = inst_25083__$1);
(statearr_25171[(15)] = inst_25082__$1);
return statearr_25171;
})();var statearr_25172_25204 = state_25136__$1;(statearr_25172_25204[(2)] = null);
(statearr_25172_25204[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25137 === (18)))
{var inst_25110 = (state_25136[(2)]);var state_25136__$1 = state_25136;var statearr_25173_25205 = state_25136__$1;(statearr_25173_25205[(2)] = inst_25110);
(statearr_25173_25205[(1)] = (15));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25137 === (8)))
{var inst_25084 = (state_25136[(11)]);var inst_25083 = (state_25136[(14)]);var inst_25086 = (inst_25084 < inst_25083);var inst_25087 = inst_25086;var state_25136__$1 = state_25136;if(cljs.core.truth_(inst_25087))
{var statearr_25174_25206 = state_25136__$1;(statearr_25174_25206[(1)] = (10));
} else
{var statearr_25175_25207 = state_25136__$1;(statearr_25175_25207[(1)] = (11));
}
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12256__auto___25183,mults,ensure_mult,p))
;return ((function (switch__12241__auto__,c__12256__auto___25183,mults,ensure_mult,p){
return (function() {
var state_machine__12242__auto__ = null;
var state_machine__12242__auto____0 = (function (){var statearr_25179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25179[(0)] = state_machine__12242__auto__);
(statearr_25179[(1)] = (1));
return statearr_25179;
});
var state_machine__12242__auto____1 = (function (state_25136){while(true){
var ret_value__12243__auto__ = (function (){try{while(true){
var result__12244__auto__ = switch__12241__auto__(state_25136);if(cljs.core.keyword_identical_QMARK_(result__12244__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12244__auto__;
}
break;
}
}catch (e25180){if((e25180 instanceof Object))
{var ex__12245__auto__ = e25180;var statearr_25181_25208 = state_25136;(statearr_25181_25208[(5)] = ex__12245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25136);
return cljs.core.constant$keyword$18;
} else
{throw e25180;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12243__auto__,cljs.core.constant$keyword$18))
{{
var G__25209 = state_25136;
state_25136 = G__25209;
continue;
}
} else
{return ret_value__12243__auto__;
}
break;
}
});
state_machine__12242__auto__ = function(state_25136){
switch(arguments.length){
case 0:
return state_machine__12242__auto____0.call(this);
case 1:
return state_machine__12242__auto____1.call(this,state_25136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12242__auto____0;
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12242__auto____1;
return state_machine__12242__auto__;
})()
;})(switch__12241__auto__,c__12256__auto___25183,mults,ensure_mult,p))
})();var state__12258__auto__ = (function (){var statearr_25182 = (function (){return (f__12257__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12257__auto__.cljs$core$IFn$_invoke$arity$0() : f__12257__auto__.call(null));
})();(statearr_25182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12256__auto___25183);
return statearr_25182;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12258__auto__);
});})(c__12256__auto___25183,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__25290 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25290) : cljs.core.atom.call(null,G__25290));
})();var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__12256__auto___25363 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12256__auto___25363,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__12257__auto__ = (function (){var switch__12241__auto__ = ((function (c__12256__auto___25363,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25329){var state_val_25330 = (state_25329[(1)]);if((state_val_25330 === (7)))
{var state_25329__$1 = state_25329;var statearr_25331_25364 = state_25329__$1;(statearr_25331_25364[(2)] = null);
(statearr_25331_25364[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25330 === (1)))
{var state_25329__$1 = state_25329;var statearr_25332_25365 = state_25329__$1;(statearr_25332_25365[(2)] = null);
(statearr_25332_25365[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25330 === (4)))
{var inst_25293 = (state_25329[(7)]);var inst_25295 = (inst_25293 < cnt);var state_25329__$1 = state_25329;if(cljs.core.truth_(inst_25295))
{var statearr_25333_25366 = state_25329__$1;(statearr_25333_25366[(1)] = (6));
} else
{var statearr_25334_25367 = state_25329__$1;(statearr_25334_25367[(1)] = (7));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25330 === (15)))
{var inst_25325 = (state_25329[(2)]);var state_25329__$1 = state_25329;var statearr_25335_25368 = state_25329__$1;(statearr_25335_25368[(2)] = inst_25325);
(statearr_25335_25368[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25330 === (13)))
{var inst_25318 = cljs.core.async.close_BANG_(out);var state_25329__$1 = state_25329;var statearr_25336_25369 = state_25329__$1;(statearr_25336_25369[(2)] = inst_25318);
(statearr_25336_25369[(1)] = (15));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25330 === (6)))
{var state_25329__$1 = state_25329;var statearr_25337_25370 = state_25329__$1;(statearr_25337_25370[(2)] = null);
(statearr_25337_25370[(1)] = (11));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25330 === (3)))
{var inst_25327 = (state_25329[(2)]);var state_25329__$1 = state_25329;return cljs.core.async.impl.ioc_helpers.return_chan(state_25329__$1,inst_25327);
} else
{if((state_val_25330 === (12)))
{var inst_25315 = (state_25329[(8)]);var inst_25315__$1 = (state_25329[(2)]);var inst_25316 = cljs.core.some(cljs.core.nil_QMARK_,inst_25315__$1);var state_25329__$1 = (function (){var statearr_25338 = state_25329;(statearr_25338[(8)] = inst_25315__$1);
return statearr_25338;
})();if(cljs.core.truth_(inst_25316))
{var statearr_25339_25371 = state_25329__$1;(statearr_25339_25371[(1)] = (13));
} else
{var statearr_25340_25372 = state_25329__$1;(statearr_25340_25372[(1)] = (14));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25330 === (2)))
{var inst_25292 = (function (){var G__25341 = dctr;var G__25342 = cnt;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25341,G__25342) : cljs.core.reset_BANG_.call(null,G__25341,G__25342));
})();var inst_25293 = (0);var state_25329__$1 = (function (){var statearr_25343 = state_25329;(statearr_25343[(9)] = inst_25292);
(statearr_25343[(7)] = inst_25293);
return statearr_25343;
})();var statearr_25344_25373 = state_25329__$1;(statearr_25344_25373[(2)] = null);
(statearr_25344_25373[(1)] = (4));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25330 === (11)))
{var inst_25293 = (state_25329[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25329,(10),Object,null,(9));var inst_25302 = (function (){var G__25345 = inst_25293;return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__25345) : chs__$1.call(null,G__25345));
})();var inst_25303 = (function (){var G__25346 = inst_25293;return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__25346) : done.call(null,G__25346));
})();var inst_25304 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25302,inst_25303);var state_25329__$1 = state_25329;var statearr_25347_25374 = state_25329__$1;(statearr_25347_25374[(2)] = inst_25304);
cljs.core.async.impl.ioc_helpers.process_exception(state_25329__$1);
return cljs.core.constant$keyword$18;
} else
{if((state_val_25330 === (9)))
{var inst_25293 = (state_25329[(7)]);var inst_25306 = (state_25329[(2)]);var inst_25307 = (inst_25293 + (1));var inst_25293__$1 = inst_25307;var state_25329__$1 = (function (){var statearr_25348 = state_25329;(statearr_25348[(10)] = inst_25306);
(statearr_25348[(7)] = inst_25293__$1);
return statearr_25348;
})();var statearr_25349_25375 = state_25329__$1;(statearr_25349_25375[(2)] = null);
(statearr_25349_25375[(1)] = (4));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25330 === (5)))
{var inst_25313 = (state_25329[(2)]);var state_25329__$1 = (function (){var statearr_25350 = state_25329;(statearr_25350[(11)] = inst_25313);
return statearr_25350;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25329__$1,(12),dchan);
} else
{if((state_val_25330 === (14)))
{var inst_25315 = (state_25329[(8)]);var inst_25320 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_25315);var state_25329__$1 = state_25329;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25329__$1,(16),out,inst_25320);
} else
{if((state_val_25330 === (16)))
{var inst_25322 = (state_25329[(2)]);var state_25329__$1 = (function (){var statearr_25351 = state_25329;(statearr_25351[(12)] = inst_25322);
return statearr_25351;
})();var statearr_25352_25376 = state_25329__$1;(statearr_25352_25376[(2)] = null);
(statearr_25352_25376[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25330 === (10)))
{var inst_25297 = (state_25329[(2)]);var inst_25298 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_25329__$1 = (function (){var statearr_25353 = state_25329;(statearr_25353[(13)] = inst_25297);
return statearr_25353;
})();var statearr_25354_25377 = state_25329__$1;(statearr_25354_25377[(2)] = inst_25298);
cljs.core.async.impl.ioc_helpers.process_exception(state_25329__$1);
return cljs.core.constant$keyword$18;
} else
{if((state_val_25330 === (8)))
{var inst_25311 = (state_25329[(2)]);var state_25329__$1 = state_25329;var statearr_25355_25378 = state_25329__$1;(statearr_25355_25378[(2)] = inst_25311);
(statearr_25355_25378[(1)] = (5));
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12256__auto___25363,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__12241__auto__,c__12256__auto___25363,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__12242__auto__ = null;
var state_machine__12242__auto____0 = (function (){var statearr_25359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25359[(0)] = state_machine__12242__auto__);
(statearr_25359[(1)] = (1));
return statearr_25359;
});
var state_machine__12242__auto____1 = (function (state_25329){while(true){
var ret_value__12243__auto__ = (function (){try{while(true){
var result__12244__auto__ = switch__12241__auto__(state_25329);if(cljs.core.keyword_identical_QMARK_(result__12244__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12244__auto__;
}
break;
}
}catch (e25360){if((e25360 instanceof Object))
{var ex__12245__auto__ = e25360;var statearr_25361_25379 = state_25329;(statearr_25361_25379[(5)] = ex__12245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25329);
return cljs.core.constant$keyword$18;
} else
{throw e25360;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12243__auto__,cljs.core.constant$keyword$18))
{{
var G__25380 = state_25329;
state_25329 = G__25380;
continue;
}
} else
{return ret_value__12243__auto__;
}
break;
}
});
state_machine__12242__auto__ = function(state_25329){
switch(arguments.length){
case 0:
return state_machine__12242__auto____0.call(this);
case 1:
return state_machine__12242__auto____1.call(this,state_25329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12242__auto____0;
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12242__auto____1;
return state_machine__12242__auto__;
})()
;})(switch__12241__auto__,c__12256__auto___25363,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__12258__auto__ = (function (){var statearr_25362 = (function (){return (f__12257__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12257__auto__.cljs$core$IFn$_invoke$arity$0() : f__12257__auto__.call(null));
})();(statearr_25362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12256__auto___25363);
return statearr_25362;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12258__auto__);
});})(c__12256__auto___25363,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12256__auto___25490 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12256__auto___25490,out){
return (function (){var f__12257__auto__ = (function (){var switch__12241__auto__ = ((function (c__12256__auto___25490,out){
return (function (state_25466){var state_val_25467 = (state_25466[(1)]);if((state_val_25467 === (7)))
{var inst_25446 = (state_25466[(7)]);var inst_25445 = (state_25466[(8)]);var inst_25445__$1 = (state_25466[(2)]);var inst_25446__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25445__$1,(0),null);var inst_25447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25445__$1,(1),null);var inst_25448 = (inst_25446__$1 == null);var state_25466__$1 = (function (){var statearr_25468 = state_25466;(statearr_25468[(7)] = inst_25446__$1);
(statearr_25468[(9)] = inst_25447);
(statearr_25468[(8)] = inst_25445__$1);
return statearr_25468;
})();if(cljs.core.truth_(inst_25448))
{var statearr_25469_25491 = state_25466__$1;(statearr_25469_25491[(1)] = (8));
} else
{var statearr_25470_25492 = state_25466__$1;(statearr_25470_25492[(1)] = (9));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25467 === (1)))
{var inst_25437 = cljs.core.vec(chs);var inst_25438 = inst_25437;var state_25466__$1 = (function (){var statearr_25471 = state_25466;(statearr_25471[(10)] = inst_25438);
return statearr_25471;
})();var statearr_25472_25493 = state_25466__$1;(statearr_25472_25493[(2)] = null);
(statearr_25472_25493[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25467 === (4)))
{var inst_25438 = (state_25466[(10)]);var state_25466__$1 = state_25466;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_25466__$1,(7),inst_25438);
} else
{if((state_val_25467 === (6)))
{var inst_25462 = (state_25466[(2)]);var state_25466__$1 = state_25466;var statearr_25473_25494 = state_25466__$1;(statearr_25473_25494[(2)] = inst_25462);
(statearr_25473_25494[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25467 === (3)))
{var inst_25464 = (state_25466[(2)]);var state_25466__$1 = state_25466;return cljs.core.async.impl.ioc_helpers.return_chan(state_25466__$1,inst_25464);
} else
{if((state_val_25467 === (2)))
{var inst_25438 = (state_25466[(10)]);var inst_25440 = cljs.core.count(inst_25438);var inst_25441 = (inst_25440 > (0));var state_25466__$1 = state_25466;if(cljs.core.truth_(inst_25441))
{var statearr_25475_25495 = state_25466__$1;(statearr_25475_25495[(1)] = (4));
} else
{var statearr_25476_25496 = state_25466__$1;(statearr_25476_25496[(1)] = (5));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25467 === (11)))
{var inst_25438 = (state_25466[(10)]);var inst_25455 = (state_25466[(2)]);var tmp25474 = inst_25438;var inst_25438__$1 = tmp25474;var state_25466__$1 = (function (){var statearr_25477 = state_25466;(statearr_25477[(11)] = inst_25455);
(statearr_25477[(10)] = inst_25438__$1);
return statearr_25477;
})();var statearr_25478_25497 = state_25466__$1;(statearr_25478_25497[(2)] = null);
(statearr_25478_25497[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25467 === (9)))
{var inst_25446 = (state_25466[(7)]);var state_25466__$1 = state_25466;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25466__$1,(11),out,inst_25446);
} else
{if((state_val_25467 === (5)))
{var inst_25460 = cljs.core.async.close_BANG_(out);var state_25466__$1 = state_25466;var statearr_25479_25498 = state_25466__$1;(statearr_25479_25498[(2)] = inst_25460);
(statearr_25479_25498[(1)] = (6));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25467 === (10)))
{var inst_25458 = (state_25466[(2)]);var state_25466__$1 = state_25466;var statearr_25480_25499 = state_25466__$1;(statearr_25480_25499[(2)] = inst_25458);
(statearr_25480_25499[(1)] = (6));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25467 === (8)))
{var inst_25446 = (state_25466[(7)]);var inst_25447 = (state_25466[(9)]);var inst_25445 = (state_25466[(8)]);var inst_25438 = (state_25466[(10)]);var inst_25450 = (function (){var c = inst_25447;var v = inst_25446;var vec__25443 = inst_25445;var cs = inst_25438;return ((function (c,v,vec__25443,cs,inst_25446,inst_25447,inst_25445,inst_25438,state_val_25467,c__12256__auto___25490,out){
return (function (p1__25381_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25381_SHARP_);
});
;})(c,v,vec__25443,cs,inst_25446,inst_25447,inst_25445,inst_25438,state_val_25467,c__12256__auto___25490,out))
})();var inst_25451 = cljs.core.filterv(inst_25450,inst_25438);var inst_25438__$1 = inst_25451;var state_25466__$1 = (function (){var statearr_25481 = state_25466;(statearr_25481[(10)] = inst_25438__$1);
return statearr_25481;
})();var statearr_25482_25500 = state_25466__$1;(statearr_25482_25500[(2)] = null);
(statearr_25482_25500[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__12256__auto___25490,out))
;return ((function (switch__12241__auto__,c__12256__auto___25490,out){
return (function() {
var state_machine__12242__auto__ = null;
var state_machine__12242__auto____0 = (function (){var statearr_25486 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25486[(0)] = state_machine__12242__auto__);
(statearr_25486[(1)] = (1));
return statearr_25486;
});
var state_machine__12242__auto____1 = (function (state_25466){while(true){
var ret_value__12243__auto__ = (function (){try{while(true){
var result__12244__auto__ = switch__12241__auto__(state_25466);if(cljs.core.keyword_identical_QMARK_(result__12244__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12244__auto__;
}
break;
}
}catch (e25487){if((e25487 instanceof Object))
{var ex__12245__auto__ = e25487;var statearr_25488_25501 = state_25466;(statearr_25488_25501[(5)] = ex__12245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25466);
return cljs.core.constant$keyword$18;
} else
{throw e25487;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12243__auto__,cljs.core.constant$keyword$18))
{{
var G__25502 = state_25466;
state_25466 = G__25502;
continue;
}
} else
{return ret_value__12243__auto__;
}
break;
}
});
state_machine__12242__auto__ = function(state_25466){
switch(arguments.length){
case 0:
return state_machine__12242__auto____0.call(this);
case 1:
return state_machine__12242__auto____1.call(this,state_25466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12242__auto____0;
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12242__auto____1;
return state_machine__12242__auto__;
})()
;})(switch__12241__auto__,c__12256__auto___25490,out))
})();var state__12258__auto__ = (function (){var statearr_25489 = (function (){return (f__12257__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12257__auto__.cljs$core$IFn$_invoke$arity$0() : f__12257__auto__.call(null));
})();(statearr_25489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12256__auto___25490);
return statearr_25489;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12258__auto__);
});})(c__12256__auto___25490,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12256__auto___25598 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12256__auto___25598,out){
return (function (){var f__12257__auto__ = (function (){var switch__12241__auto__ = ((function (c__12256__auto___25598,out){
return (function (state_25575){var state_val_25576 = (state_25575[(1)]);if((state_val_25576 === (7)))
{var inst_25557 = (state_25575[(7)]);var inst_25557__$1 = (state_25575[(2)]);var inst_25558 = (inst_25557__$1 == null);var inst_25559 = cljs.core.not(inst_25558);var state_25575__$1 = (function (){var statearr_25577 = state_25575;(statearr_25577[(7)] = inst_25557__$1);
return statearr_25577;
})();if(inst_25559)
{var statearr_25578_25599 = state_25575__$1;(statearr_25578_25599[(1)] = (8));
} else
{var statearr_25579_25600 = state_25575__$1;(statearr_25579_25600[(1)] = (9));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25576 === (1)))
{var inst_25552 = (0);var state_25575__$1 = (function (){var statearr_25580 = state_25575;(statearr_25580[(8)] = inst_25552);
return statearr_25580;
})();var statearr_25581_25601 = state_25575__$1;(statearr_25581_25601[(2)] = null);
(statearr_25581_25601[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25576 === (4)))
{var state_25575__$1 = state_25575;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25575__$1,(7),ch);
} else
{if((state_val_25576 === (6)))
{var inst_25570 = (state_25575[(2)]);var state_25575__$1 = state_25575;var statearr_25582_25602 = state_25575__$1;(statearr_25582_25602[(2)] = inst_25570);
(statearr_25582_25602[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25576 === (3)))
{var inst_25572 = (state_25575[(2)]);var inst_25573 = cljs.core.async.close_BANG_(out);var state_25575__$1 = (function (){var statearr_25583 = state_25575;(statearr_25583[(9)] = inst_25572);
return statearr_25583;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25575__$1,inst_25573);
} else
{if((state_val_25576 === (2)))
{var inst_25552 = (state_25575[(8)]);var inst_25554 = (inst_25552 < n);var state_25575__$1 = state_25575;if(cljs.core.truth_(inst_25554))
{var statearr_25584_25603 = state_25575__$1;(statearr_25584_25603[(1)] = (4));
} else
{var statearr_25585_25604 = state_25575__$1;(statearr_25585_25604[(1)] = (5));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25576 === (11)))
{var inst_25552 = (state_25575[(8)]);var inst_25562 = (state_25575[(2)]);var inst_25563 = (inst_25552 + (1));var inst_25552__$1 = inst_25563;var state_25575__$1 = (function (){var statearr_25586 = state_25575;(statearr_25586[(10)] = inst_25562);
(statearr_25586[(8)] = inst_25552__$1);
return statearr_25586;
})();var statearr_25587_25605 = state_25575__$1;(statearr_25587_25605[(2)] = null);
(statearr_25587_25605[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25576 === (9)))
{var state_25575__$1 = state_25575;var statearr_25588_25606 = state_25575__$1;(statearr_25588_25606[(2)] = null);
(statearr_25588_25606[(1)] = (10));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25576 === (5)))
{var state_25575__$1 = state_25575;var statearr_25589_25607 = state_25575__$1;(statearr_25589_25607[(2)] = null);
(statearr_25589_25607[(1)] = (6));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25576 === (10)))
{var inst_25567 = (state_25575[(2)]);var state_25575__$1 = state_25575;var statearr_25590_25608 = state_25575__$1;(statearr_25590_25608[(2)] = inst_25567);
(statearr_25590_25608[(1)] = (6));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25576 === (8)))
{var inst_25557 = (state_25575[(7)]);var state_25575__$1 = state_25575;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25575__$1,(11),out,inst_25557);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__12256__auto___25598,out))
;return ((function (switch__12241__auto__,c__12256__auto___25598,out){
return (function() {
var state_machine__12242__auto__ = null;
var state_machine__12242__auto____0 = (function (){var statearr_25594 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25594[(0)] = state_machine__12242__auto__);
(statearr_25594[(1)] = (1));
return statearr_25594;
});
var state_machine__12242__auto____1 = (function (state_25575){while(true){
var ret_value__12243__auto__ = (function (){try{while(true){
var result__12244__auto__ = switch__12241__auto__(state_25575);if(cljs.core.keyword_identical_QMARK_(result__12244__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12244__auto__;
}
break;
}
}catch (e25595){if((e25595 instanceof Object))
{var ex__12245__auto__ = e25595;var statearr_25596_25609 = state_25575;(statearr_25596_25609[(5)] = ex__12245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25575);
return cljs.core.constant$keyword$18;
} else
{throw e25595;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12243__auto__,cljs.core.constant$keyword$18))
{{
var G__25610 = state_25575;
state_25575 = G__25610;
continue;
}
} else
{return ret_value__12243__auto__;
}
break;
}
});
state_machine__12242__auto__ = function(state_25575){
switch(arguments.length){
case 0:
return state_machine__12242__auto____0.call(this);
case 1:
return state_machine__12242__auto____1.call(this,state_25575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12242__auto____0;
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12242__auto____1;
return state_machine__12242__auto__;
})()
;})(switch__12241__auto__,c__12256__auto___25598,out))
})();var state__12258__auto__ = (function (){var statearr_25597 = (function (){return (f__12257__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12257__auto__.cljs$core$IFn$_invoke$arity$0() : f__12257__auto__.call(null));
})();(statearr_25597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12256__auto___25598);
return statearr_25597;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12258__auto__);
});})(c__12256__auto___25598,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12256__auto___25709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12256__auto___25709,out){
return (function (){var f__12257__auto__ = (function (){var switch__12241__auto__ = ((function (c__12256__auto___25709,out){
return (function (state_25684){var state_val_25685 = (state_25684[(1)]);if((state_val_25685 === (7)))
{var inst_25679 = (state_25684[(2)]);var state_25684__$1 = state_25684;var statearr_25686_25710 = state_25684__$1;(statearr_25686_25710[(2)] = inst_25679);
(statearr_25686_25710[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25685 === (1)))
{var inst_25661 = null;var state_25684__$1 = (function (){var statearr_25687 = state_25684;(statearr_25687[(7)] = inst_25661);
return statearr_25687;
})();var statearr_25688_25711 = state_25684__$1;(statearr_25688_25711[(2)] = null);
(statearr_25688_25711[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25685 === (4)))
{var inst_25664 = (state_25684[(8)]);var inst_25664__$1 = (state_25684[(2)]);var inst_25665 = (inst_25664__$1 == null);var inst_25666 = cljs.core.not(inst_25665);var state_25684__$1 = (function (){var statearr_25689 = state_25684;(statearr_25689[(8)] = inst_25664__$1);
return statearr_25689;
})();if(inst_25666)
{var statearr_25690_25712 = state_25684__$1;(statearr_25690_25712[(1)] = (5));
} else
{var statearr_25691_25713 = state_25684__$1;(statearr_25691_25713[(1)] = (6));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25685 === (6)))
{var state_25684__$1 = state_25684;var statearr_25692_25714 = state_25684__$1;(statearr_25692_25714[(2)] = null);
(statearr_25692_25714[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25685 === (3)))
{var inst_25681 = (state_25684[(2)]);var inst_25682 = cljs.core.async.close_BANG_(out);var state_25684__$1 = (function (){var statearr_25693 = state_25684;(statearr_25693[(9)] = inst_25681);
return statearr_25693;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25684__$1,inst_25682);
} else
{if((state_val_25685 === (2)))
{var state_25684__$1 = state_25684;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25684__$1,(4),ch);
} else
{if((state_val_25685 === (11)))
{var inst_25664 = (state_25684[(8)]);var inst_25673 = (state_25684[(2)]);var inst_25661 = inst_25664;var state_25684__$1 = (function (){var statearr_25694 = state_25684;(statearr_25694[(10)] = inst_25673);
(statearr_25694[(7)] = inst_25661);
return statearr_25694;
})();var statearr_25695_25715 = state_25684__$1;(statearr_25695_25715[(2)] = null);
(statearr_25695_25715[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25685 === (9)))
{var inst_25664 = (state_25684[(8)]);var state_25684__$1 = state_25684;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25684__$1,(11),out,inst_25664);
} else
{if((state_val_25685 === (5)))
{var inst_25664 = (state_25684[(8)]);var inst_25661 = (state_25684[(7)]);var inst_25668 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25664,inst_25661);var state_25684__$1 = state_25684;if(inst_25668)
{var statearr_25697_25716 = state_25684__$1;(statearr_25697_25716[(1)] = (8));
} else
{var statearr_25698_25717 = state_25684__$1;(statearr_25698_25717[(1)] = (9));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25685 === (10)))
{var inst_25676 = (state_25684[(2)]);var state_25684__$1 = state_25684;var statearr_25699_25718 = state_25684__$1;(statearr_25699_25718[(2)] = inst_25676);
(statearr_25699_25718[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25685 === (8)))
{var inst_25661 = (state_25684[(7)]);var tmp25696 = inst_25661;var inst_25661__$1 = tmp25696;var state_25684__$1 = (function (){var statearr_25700 = state_25684;(statearr_25700[(7)] = inst_25661__$1);
return statearr_25700;
})();var statearr_25701_25719 = state_25684__$1;(statearr_25701_25719[(2)] = null);
(statearr_25701_25719[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__12256__auto___25709,out))
;return ((function (switch__12241__auto__,c__12256__auto___25709,out){
return (function() {
var state_machine__12242__auto__ = null;
var state_machine__12242__auto____0 = (function (){var statearr_25705 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25705[(0)] = state_machine__12242__auto__);
(statearr_25705[(1)] = (1));
return statearr_25705;
});
var state_machine__12242__auto____1 = (function (state_25684){while(true){
var ret_value__12243__auto__ = (function (){try{while(true){
var result__12244__auto__ = switch__12241__auto__(state_25684);if(cljs.core.keyword_identical_QMARK_(result__12244__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12244__auto__;
}
break;
}
}catch (e25706){if((e25706 instanceof Object))
{var ex__12245__auto__ = e25706;var statearr_25707_25720 = state_25684;(statearr_25707_25720[(5)] = ex__12245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25684);
return cljs.core.constant$keyword$18;
} else
{throw e25706;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12243__auto__,cljs.core.constant$keyword$18))
{{
var G__25721 = state_25684;
state_25684 = G__25721;
continue;
}
} else
{return ret_value__12243__auto__;
}
break;
}
});
state_machine__12242__auto__ = function(state_25684){
switch(arguments.length){
case 0:
return state_machine__12242__auto____0.call(this);
case 1:
return state_machine__12242__auto____1.call(this,state_25684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12242__auto____0;
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12242__auto____1;
return state_machine__12242__auto__;
})()
;})(switch__12241__auto__,c__12256__auto___25709,out))
})();var state__12258__auto__ = (function (){var statearr_25708 = (function (){return (f__12257__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12257__auto__.cljs$core$IFn$_invoke$arity$0() : f__12257__auto__.call(null));
})();(statearr_25708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12256__auto___25709);
return statearr_25708;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12258__auto__);
});})(c__12256__auto___25709,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12256__auto___25859 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12256__auto___25859,out){
return (function (){var f__12257__auto__ = (function (){var switch__12241__auto__ = ((function (c__12256__auto___25859,out){
return (function (state_25829){var state_val_25830 = (state_25829[(1)]);if((state_val_25830 === (7)))
{var inst_25825 = (state_25829[(2)]);var state_25829__$1 = state_25829;var statearr_25831_25860 = state_25829__$1;(statearr_25831_25860[(2)] = inst_25825);
(statearr_25831_25860[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25830 === (1)))
{var inst_25792 = (new Array(n));var inst_25793 = inst_25792;var inst_25794 = (0);var state_25829__$1 = (function (){var statearr_25832 = state_25829;(statearr_25832[(7)] = inst_25793);
(statearr_25832[(8)] = inst_25794);
return statearr_25832;
})();var statearr_25833_25861 = state_25829__$1;(statearr_25833_25861[(2)] = null);
(statearr_25833_25861[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25830 === (4)))
{var inst_25797 = (state_25829[(9)]);var inst_25797__$1 = (state_25829[(2)]);var inst_25798 = (inst_25797__$1 == null);var inst_25799 = cljs.core.not(inst_25798);var state_25829__$1 = (function (){var statearr_25834 = state_25829;(statearr_25834[(9)] = inst_25797__$1);
return statearr_25834;
})();if(inst_25799)
{var statearr_25835_25862 = state_25829__$1;(statearr_25835_25862[(1)] = (5));
} else
{var statearr_25836_25863 = state_25829__$1;(statearr_25836_25863[(1)] = (6));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25830 === (15)))
{var inst_25819 = (state_25829[(2)]);var state_25829__$1 = state_25829;var statearr_25837_25864 = state_25829__$1;(statearr_25837_25864[(2)] = inst_25819);
(statearr_25837_25864[(1)] = (14));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25830 === (13)))
{var state_25829__$1 = state_25829;var statearr_25838_25865 = state_25829__$1;(statearr_25838_25865[(2)] = null);
(statearr_25838_25865[(1)] = (14));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25830 === (6)))
{var inst_25794 = (state_25829[(8)]);var inst_25815 = (inst_25794 > (0));var state_25829__$1 = state_25829;if(cljs.core.truth_(inst_25815))
{var statearr_25839_25866 = state_25829__$1;(statearr_25839_25866[(1)] = (12));
} else
{var statearr_25840_25867 = state_25829__$1;(statearr_25840_25867[(1)] = (13));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25830 === (3)))
{var inst_25827 = (state_25829[(2)]);var state_25829__$1 = state_25829;return cljs.core.async.impl.ioc_helpers.return_chan(state_25829__$1,inst_25827);
} else
{if((state_val_25830 === (12)))
{var inst_25793 = (state_25829[(7)]);var inst_25817 = cljs.core.vec(inst_25793);var state_25829__$1 = state_25829;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25829__$1,(15),out,inst_25817);
} else
{if((state_val_25830 === (2)))
{var state_25829__$1 = state_25829;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25829__$1,(4),ch);
} else
{if((state_val_25830 === (11)))
{var inst_25809 = (state_25829[(2)]);var inst_25810 = (new Array(n));var inst_25793 = inst_25810;var inst_25794 = (0);var state_25829__$1 = (function (){var statearr_25841 = state_25829;(statearr_25841[(10)] = inst_25809);
(statearr_25841[(7)] = inst_25793);
(statearr_25841[(8)] = inst_25794);
return statearr_25841;
})();var statearr_25842_25868 = state_25829__$1;(statearr_25842_25868[(2)] = null);
(statearr_25842_25868[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25830 === (9)))
{var inst_25793 = (state_25829[(7)]);var inst_25807 = cljs.core.vec(inst_25793);var state_25829__$1 = state_25829;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25829__$1,(11),out,inst_25807);
} else
{if((state_val_25830 === (5)))
{var inst_25797 = (state_25829[(9)]);var inst_25802 = (state_25829[(11)]);var inst_25793 = (state_25829[(7)]);var inst_25794 = (state_25829[(8)]);var inst_25801 = (inst_25793[inst_25794] = inst_25797);var inst_25802__$1 = (inst_25794 + (1));var inst_25803 = (inst_25802__$1 < n);var state_25829__$1 = (function (){var statearr_25843 = state_25829;(statearr_25843[(11)] = inst_25802__$1);
(statearr_25843[(12)] = inst_25801);
return statearr_25843;
})();if(cljs.core.truth_(inst_25803))
{var statearr_25844_25869 = state_25829__$1;(statearr_25844_25869[(1)] = (8));
} else
{var statearr_25845_25870 = state_25829__$1;(statearr_25845_25870[(1)] = (9));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25830 === (14)))
{var inst_25822 = (state_25829[(2)]);var inst_25823 = cljs.core.async.close_BANG_(out);var state_25829__$1 = (function (){var statearr_25847 = state_25829;(statearr_25847[(13)] = inst_25822);
return statearr_25847;
})();var statearr_25848_25871 = state_25829__$1;(statearr_25848_25871[(2)] = inst_25823);
(statearr_25848_25871[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25830 === (10)))
{var inst_25813 = (state_25829[(2)]);var state_25829__$1 = state_25829;var statearr_25849_25872 = state_25829__$1;(statearr_25849_25872[(2)] = inst_25813);
(statearr_25849_25872[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25830 === (8)))
{var inst_25802 = (state_25829[(11)]);var inst_25793 = (state_25829[(7)]);var tmp25846 = inst_25793;var inst_25793__$1 = tmp25846;var inst_25794 = inst_25802;var state_25829__$1 = (function (){var statearr_25850 = state_25829;(statearr_25850[(7)] = inst_25793__$1);
(statearr_25850[(8)] = inst_25794);
return statearr_25850;
})();var statearr_25851_25873 = state_25829__$1;(statearr_25851_25873[(2)] = null);
(statearr_25851_25873[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12256__auto___25859,out))
;return ((function (switch__12241__auto__,c__12256__auto___25859,out){
return (function() {
var state_machine__12242__auto__ = null;
var state_machine__12242__auto____0 = (function (){var statearr_25855 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25855[(0)] = state_machine__12242__auto__);
(statearr_25855[(1)] = (1));
return statearr_25855;
});
var state_machine__12242__auto____1 = (function (state_25829){while(true){
var ret_value__12243__auto__ = (function (){try{while(true){
var result__12244__auto__ = switch__12241__auto__(state_25829);if(cljs.core.keyword_identical_QMARK_(result__12244__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12244__auto__;
}
break;
}
}catch (e25856){if((e25856 instanceof Object))
{var ex__12245__auto__ = e25856;var statearr_25857_25874 = state_25829;(statearr_25857_25874[(5)] = ex__12245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25829);
return cljs.core.constant$keyword$18;
} else
{throw e25856;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12243__auto__,cljs.core.constant$keyword$18))
{{
var G__25875 = state_25829;
state_25829 = G__25875;
continue;
}
} else
{return ret_value__12243__auto__;
}
break;
}
});
state_machine__12242__auto__ = function(state_25829){
switch(arguments.length){
case 0:
return state_machine__12242__auto____0.call(this);
case 1:
return state_machine__12242__auto____1.call(this,state_25829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12242__auto____0;
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12242__auto____1;
return state_machine__12242__auto__;
})()
;})(switch__12241__auto__,c__12256__auto___25859,out))
})();var state__12258__auto__ = (function (){var statearr_25858 = (function (){return (f__12257__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12257__auto__.cljs$core$IFn$_invoke$arity$0() : f__12257__auto__.call(null));
})();(statearr_25858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12256__auto___25859);
return statearr_25858;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12258__auto__);
});})(c__12256__auto___25859,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12256__auto___26023 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12256__auto___26023,out){
return (function (){var f__12257__auto__ = (function (){var switch__12241__auto__ = ((function (c__12256__auto___26023,out){
return (function (state_25992){var state_val_25993 = (state_25992[(1)]);if((state_val_25993 === (7)))
{var inst_25988 = (state_25992[(2)]);var state_25992__$1 = state_25992;var statearr_25994_26024 = state_25992__$1;(statearr_25994_26024[(2)] = inst_25988);
(statearr_25994_26024[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25993 === (1)))
{var inst_25951 = [];var inst_25952 = inst_25951;var inst_25953 = cljs.core.constant$keyword$31;var state_25992__$1 = (function (){var statearr_25995 = state_25992;(statearr_25995[(7)] = inst_25952);
(statearr_25995[(8)] = inst_25953);
return statearr_25995;
})();var statearr_25996_26025 = state_25992__$1;(statearr_25996_26025[(2)] = null);
(statearr_25996_26025[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25993 === (4)))
{var inst_25956 = (state_25992[(9)]);var inst_25956__$1 = (state_25992[(2)]);var inst_25957 = (inst_25956__$1 == null);var inst_25958 = cljs.core.not(inst_25957);var state_25992__$1 = (function (){var statearr_25997 = state_25992;(statearr_25997[(9)] = inst_25956__$1);
return statearr_25997;
})();if(inst_25958)
{var statearr_25998_26026 = state_25992__$1;(statearr_25998_26026[(1)] = (5));
} else
{var statearr_25999_26027 = state_25992__$1;(statearr_25999_26027[(1)] = (6));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25993 === (15)))
{var inst_25982 = (state_25992[(2)]);var state_25992__$1 = state_25992;var statearr_26000_26028 = state_25992__$1;(statearr_26000_26028[(2)] = inst_25982);
(statearr_26000_26028[(1)] = (14));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25993 === (13)))
{var state_25992__$1 = state_25992;var statearr_26001_26029 = state_25992__$1;(statearr_26001_26029[(2)] = null);
(statearr_26001_26029[(1)] = (14));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25993 === (6)))
{var inst_25952 = (state_25992[(7)]);var inst_25977 = inst_25952.length;var inst_25978 = (inst_25977 > (0));var state_25992__$1 = state_25992;if(cljs.core.truth_(inst_25978))
{var statearr_26002_26030 = state_25992__$1;(statearr_26002_26030[(1)] = (12));
} else
{var statearr_26003_26031 = state_25992__$1;(statearr_26003_26031[(1)] = (13));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25993 === (3)))
{var inst_25990 = (state_25992[(2)]);var state_25992__$1 = state_25992;return cljs.core.async.impl.ioc_helpers.return_chan(state_25992__$1,inst_25990);
} else
{if((state_val_25993 === (12)))
{var inst_25952 = (state_25992[(7)]);var inst_25980 = cljs.core.vec(inst_25952);var state_25992__$1 = state_25992;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25992__$1,(15),out,inst_25980);
} else
{if((state_val_25993 === (2)))
{var state_25992__$1 = state_25992;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25992__$1,(4),ch);
} else
{if((state_val_25993 === (11)))
{var inst_25960 = (state_25992[(10)]);var inst_25956 = (state_25992[(9)]);var inst_25970 = (state_25992[(2)]);var inst_25971 = [];var inst_25972 = inst_25971.push(inst_25956);var inst_25952 = inst_25971;var inst_25953 = inst_25960;var state_25992__$1 = (function (){var statearr_26004 = state_25992;(statearr_26004[(11)] = inst_25970);
(statearr_26004[(12)] = inst_25972);
(statearr_26004[(7)] = inst_25952);
(statearr_26004[(8)] = inst_25953);
return statearr_26004;
})();var statearr_26005_26032 = state_25992__$1;(statearr_26005_26032[(2)] = null);
(statearr_26005_26032[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25993 === (9)))
{var inst_25952 = (state_25992[(7)]);var inst_25968 = cljs.core.vec(inst_25952);var state_25992__$1 = state_25992;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25992__$1,(11),out,inst_25968);
} else
{if((state_val_25993 === (5)))
{var inst_25960 = (state_25992[(10)]);var inst_25956 = (state_25992[(9)]);var inst_25953 = (state_25992[(8)]);var inst_25960__$1 = (function (){var G__26006 = inst_25956;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26006) : f.call(null,G__26006));
})();var inst_25961 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25960__$1,inst_25953);var inst_25962 = cljs.core.keyword_identical_QMARK_(inst_25953,cljs.core.constant$keyword$31);var inst_25963 = (inst_25961) || (inst_25962);var state_25992__$1 = (function (){var statearr_26007 = state_25992;(statearr_26007[(10)] = inst_25960__$1);
return statearr_26007;
})();if(cljs.core.truth_(inst_25963))
{var statearr_26008_26033 = state_25992__$1;(statearr_26008_26033[(1)] = (8));
} else
{var statearr_26009_26034 = state_25992__$1;(statearr_26009_26034[(1)] = (9));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25993 === (14)))
{var inst_25985 = (state_25992[(2)]);var inst_25986 = cljs.core.async.close_BANG_(out);var state_25992__$1 = (function (){var statearr_26011 = state_25992;(statearr_26011[(13)] = inst_25985);
return statearr_26011;
})();var statearr_26012_26035 = state_25992__$1;(statearr_26012_26035[(2)] = inst_25986);
(statearr_26012_26035[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25993 === (10)))
{var inst_25975 = (state_25992[(2)]);var state_25992__$1 = state_25992;var statearr_26013_26036 = state_25992__$1;(statearr_26013_26036[(2)] = inst_25975);
(statearr_26013_26036[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25993 === (8)))
{var inst_25960 = (state_25992[(10)]);var inst_25956 = (state_25992[(9)]);var inst_25952 = (state_25992[(7)]);var inst_25965 = inst_25952.push(inst_25956);var tmp26010 = inst_25952;var inst_25952__$1 = tmp26010;var inst_25953 = inst_25960;var state_25992__$1 = (function (){var statearr_26014 = state_25992;(statearr_26014[(14)] = inst_25965);
(statearr_26014[(7)] = inst_25952__$1);
(statearr_26014[(8)] = inst_25953);
return statearr_26014;
})();var statearr_26015_26037 = state_25992__$1;(statearr_26015_26037[(2)] = null);
(statearr_26015_26037[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12256__auto___26023,out))
;return ((function (switch__12241__auto__,c__12256__auto___26023,out){
return (function() {
var state_machine__12242__auto__ = null;
var state_machine__12242__auto____0 = (function (){var statearr_26019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26019[(0)] = state_machine__12242__auto__);
(statearr_26019[(1)] = (1));
return statearr_26019;
});
var state_machine__12242__auto____1 = (function (state_25992){while(true){
var ret_value__12243__auto__ = (function (){try{while(true){
var result__12244__auto__ = switch__12241__auto__(state_25992);if(cljs.core.keyword_identical_QMARK_(result__12244__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12244__auto__;
}
break;
}
}catch (e26020){if((e26020 instanceof Object))
{var ex__12245__auto__ = e26020;var statearr_26021_26038 = state_25992;(statearr_26021_26038[(5)] = ex__12245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25992);
return cljs.core.constant$keyword$18;
} else
{throw e26020;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12243__auto__,cljs.core.constant$keyword$18))
{{
var G__26039 = state_25992;
state_25992 = G__26039;
continue;
}
} else
{return ret_value__12243__auto__;
}
break;
}
});
state_machine__12242__auto__ = function(state_25992){
switch(arguments.length){
case 0:
return state_machine__12242__auto____0.call(this);
case 1:
return state_machine__12242__auto____1.call(this,state_25992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12242__auto____0;
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12242__auto____1;
return state_machine__12242__auto__;
})()
;})(switch__12241__auto__,c__12256__auto___26023,out))
})();var state__12258__auto__ = (function (){var statearr_26022 = (function (){return (f__12257__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12257__auto__.cljs$core$IFn$_invoke$arity$0() : f__12257__auto__.call(null));
})();(statearr_26022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12256__auto___26023);
return statearr_26022;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12258__auto__);
});})(c__12256__auto___26023,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
