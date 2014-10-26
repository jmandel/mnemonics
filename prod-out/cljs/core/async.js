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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23170 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23170 = (function (f,fn_handler,meta23171){
this.f = f;
this.fn_handler = fn_handler;
this.meta23171 = meta23171;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23170.cljs$lang$type = true;
cljs.core.async.t23170.cljs$lang$ctorStr = "cljs.core.async/t23170";
cljs.core.async.t23170.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cljs.core.async/t23170");
});
cljs.core.async.t23170.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23170.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23170.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23172){var self__ = this;
var _23172__$1 = this;return self__.meta23171;
});
cljs.core.async.t23170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23172,meta23171__$1){var self__ = this;
var _23172__$1 = this;return (new cljs.core.async.t23170(self__.f,self__.fn_handler,meta23171__$1));
});
cljs.core.async.__GT_t23170 = (function __GT_t23170(f__$1,fn_handler__$1,meta23171){return (new cljs.core.async.t23170(f__$1,fn_handler__$1,meta23171));
});
}
return (new cljs.core.async.t23170(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23174 = buff;if(G__23174)
{var bit__4332__auto__ = null;if(cljs.core.truth_((function (){var or__3669__auto__ = bit__4332__auto__;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return G__23174.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23174.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23174);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23174);
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
{var val_23185 = (function (){var G__23182 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23182) : cljs.core.deref.call(null,G__23182));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__23183_23186 = val_23185;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23183_23186) : fn1.call(null,G__23183_23186));
} else
{cljs.core.async.impl.dispatch.run(((function (val_23185,ret){
return (function (){var G__23184 = val_23185;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23184) : fn1.call(null,G__23184));
});})(val_23185,ret))
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
{var ret = temp__4124__auto__;var G__23195 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23195) : cljs.core.deref.call(null,G__23195));
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = (function (){var G__23196 = retb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23196) : cljs.core.deref.call(null,G__23196));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__23197_23199 = ret;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23197_23199) : fn1.call(null,G__23197_23199));
} else
{cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){var G__23198 = ret;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__23198) : fn1.call(null,G__23198));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4538__auto___23200 = n;var x_23201 = (0);while(true){
if((x_23201 < n__4538__auto___23200))
{(a[x_23201] = (0));
{
var G__23202 = (x_23201 + (1));
x_23201 = G__23202;
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
var G__23203 = (i + (1));
i = G__23203;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (function (){var G__23211 = true;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23211) : cljs.core.atom.call(null,G__23211));
})();if(typeof cljs.core.async.t23212 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23212 = (function (flag,alt_flag,meta23213){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23213 = meta23213;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23212.cljs$lang$type = true;
cljs.core.async.t23212.cljs$lang$ctorStr = "cljs.core.async/t23212";
cljs.core.async.t23212.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cljs.core.async/t23212");
});})(flag))
;
cljs.core.async.t23212.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23212.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__23215 = self__.flag;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23215) : cljs.core.deref.call(null,G__23215));
});})(flag))
;
cljs.core.async.t23212.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__23216_23218 = self__.flag;var G__23217_23219 = null;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23216_23218,G__23217_23219) : cljs.core.reset_BANG_.call(null,G__23216_23218,G__23217_23219));
return true;
});})(flag))
;
cljs.core.async.t23212.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23214){var self__ = this;
var _23214__$1 = this;return self__.meta23213;
});})(flag))
;
cljs.core.async.t23212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23214,meta23213__$1){var self__ = this;
var _23214__$1 = this;return (new cljs.core.async.t23212(self__.flag,self__.alt_flag,meta23213__$1));
});})(flag))
;
cljs.core.async.__GT_t23212 = ((function (flag){
return (function __GT_t23212(flag__$1,alt_flag__$1,meta23213){return (new cljs.core.async.t23212(flag__$1,alt_flag__$1,meta23213));
});})(flag))
;
}
return (new cljs.core.async.t23212(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23223 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23223 = (function (cb,flag,alt_handler,meta23224){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23224 = meta23224;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23223.cljs$lang$type = true;
cljs.core.async.t23223.cljs$lang$ctorStr = "cljs.core.async/t23223";
cljs.core.async.t23223.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cljs.core.async/t23223");
});
cljs.core.async.t23223.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23223.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t23223.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t23223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23225){var self__ = this;
var _23225__$1 = this;return self__.meta23224;
});
cljs.core.async.t23223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23225,meta23224__$1){var self__ = this;
var _23225__$1 = this;return (new cljs.core.async.t23223(self__.cb,self__.flag,self__.alt_handler,meta23224__$1));
});
cljs.core.async.__GT_t23223 = (function __GT_t23223(cb__$1,flag__$1,alt_handler__$1,meta23224){return (new cljs.core.async.t23223(cb__$1,flag__$1,alt_handler__$1,meta23224));
});
}
return (new cljs.core.async.t23223(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__23233 = (0);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__23233) : port.call(null,G__23233));
})():null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__23234 = (1);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__23234) : port.call(null,G__23234));
})();return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23226_SHARP_){var G__23235 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23226_SHARP_,wport], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23235) : fret.call(null,G__23235));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23227_SHARP_){var G__23236 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23227_SHARP_,port], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23236) : fret.call(null,G__23236));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23237 = vbox;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23237) : cljs.core.deref.call(null,G__23237));
})(),(function (){var or__3669__auto__ = wport;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__23238 = (i + (1));
i = G__23238;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3669__auto__ = ret;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7))
{var temp__4126__auto__ = (function (){var and__3657__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3657__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3657__auto__;
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
var alts_BANG___delegate = function (ports,p__23239){var map__23241 = p__23239;var map__23241__$1 = ((cljs.core.seq_QMARK_(map__23241))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23241):map__23241);var opts = map__23241__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));

};
var alts_BANG_ = function (ports,var_args){
var p__23239 = null;if (arguments.length > 1) {
  p__23239 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23239);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23242){
var ports = cljs.core.first(arglist__23242);
var p__23239 = cljs.core.rest(arglist__23242);
return alts_BANG___delegate(ports,p__23239);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t23256 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23256 = (function (ch,f,map_LT_,meta23257){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23257 = meta23257;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23256.cljs$lang$type = true;
cljs.core.async.t23256.cljs$lang$ctorStr = "cljs.core.async/t23256";
cljs.core.async.t23256.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cljs.core.async/t23256");
});
cljs.core.async.t23256.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23256.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});
cljs.core.async.t23256.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23256.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t23259 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23259 = (function (fn1,_,meta23257,ch,f,map_LT_,meta23260){
this.fn1 = fn1;
this._ = _;
this.meta23257 = meta23257;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23260 = meta23260;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23259.cljs$lang$type = true;
cljs.core.async.t23259.cljs$lang$ctorStr = "cljs.core.async/t23259";
cljs.core.async.t23259.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cljs.core.async/t23259");
});})(___$1))
;
cljs.core.async.t23259.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23259.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t23259.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var G__23262 = self__.fn1;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(G__23262) : cljs.core.async.impl.protocols.lock_id.call(null,G__23262));
});})(___$1))
;
cljs.core.async.t23259.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__23243_SHARP_){var G__23263 = (((p1__23243_SHARP_ == null))?null:(function (){var G__23264 = p1__23243_SHARP_;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__23264) : self__.f.call(null,G__23264));
})());return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__23263) : f1.call(null,G__23263));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t23259.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23261){var self__ = this;
var _23261__$1 = this;return self__.meta23260;
});})(___$1))
;
cljs.core.async.t23259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23261,meta23260__$1){var self__ = this;
var _23261__$1 = this;return (new cljs.core.async.t23259(self__.fn1,self__._,self__.meta23257,self__.ch,self__.f,self__.map_LT_,meta23260__$1));
});})(___$1))
;
cljs.core.async.__GT_t23259 = ((function (___$1){
return (function __GT_t23259(fn1__$1,___$2,meta23257__$1,ch__$2,f__$2,map_LT___$2,meta23260){return (new cljs.core.async.t23259(fn1__$1,___$2,meta23257__$1,ch__$2,f__$2,map_LT___$2,meta23260));
});})(___$1))
;
}
return (new cljs.core.async.t23259(fn1,___$1,self__.meta23257,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3657__auto__ = ret;if(cljs.core.truth_(and__3657__auto__))
{return !(((function (){var G__23265 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23265) : cljs.core.deref.call(null,G__23265));
})() == null));
} else
{return and__3657__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((function (){var G__23266 = (function (){var G__23267 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23267) : cljs.core.deref.call(null,G__23267));
})();return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__23266) : self__.f.call(null,G__23266));
})());
} else
{return ret;
}
});
cljs.core.async.t23256.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23256.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23256.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t23256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23258){var self__ = this;
var _23258__$1 = this;return self__.meta23257;
});
cljs.core.async.t23256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23258,meta23257__$1){var self__ = this;
var _23258__$1 = this;return (new cljs.core.async.t23256(self__.ch,self__.f,self__.map_LT_,meta23257__$1));
});
cljs.core.async.__GT_t23256 = (function __GT_t23256(ch__$1,f__$1,map_LT___$1,meta23257){return (new cljs.core.async.t23256(ch__$1,f__$1,map_LT___$1,meta23257));
});
}
return (new cljs.core.async.t23256(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t23272 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23272 = (function (ch,f,map_GT_,meta23273){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23273 = meta23273;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23272.cljs$lang$type = true;
cljs.core.async.t23272.cljs$lang$ctorStr = "cljs.core.async/t23272";
cljs.core.async.t23272.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cljs.core.async/t23272");
});
cljs.core.async.t23272.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23272.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__23275 = val;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__23275) : self__.f.call(null,G__23275));
})(),fn1);
});
cljs.core.async.t23272.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23272.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23272.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23272.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23272.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23274){var self__ = this;
var _23274__$1 = this;return self__.meta23273;
});
cljs.core.async.t23272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23274,meta23273__$1){var self__ = this;
var _23274__$1 = this;return (new cljs.core.async.t23272(self__.ch,self__.f,self__.map_GT_,meta23273__$1));
});
cljs.core.async.__GT_t23272 = (function __GT_t23272(ch__$1,f__$1,map_GT___$1,meta23273){return (new cljs.core.async.t23272(ch__$1,f__$1,map_GT___$1,meta23273));
});
}
return (new cljs.core.async.t23272(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t23280 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23280 = (function (ch,p,filter_GT_,meta23281){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23281 = meta23281;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23280.cljs$lang$type = true;
cljs.core.async.t23280.cljs$lang$ctorStr = "cljs.core.async/t23280";
cljs.core.async.t23280.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cljs.core.async/t23280");
});
cljs.core.async.t23280.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23280.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__23283 = val;return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__23283) : self__.p.call(null,G__23283));
})()))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});
cljs.core.async.t23280.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23280.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23280.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23280.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23280.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t23280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23282){var self__ = this;
var _23282__$1 = this;return self__.meta23281;
});
cljs.core.async.t23280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23282,meta23281__$1){var self__ = this;
var _23282__$1 = this;return (new cljs.core.async.t23280(self__.ch,self__.p,self__.filter_GT_,meta23281__$1));
});
cljs.core.async.__GT_t23280 = (function __GT_t23280(ch__$1,p__$1,filter_GT___$1,meta23281){return (new cljs.core.async.t23280(ch__$1,p__$1,filter_GT___$1,meta23281));
});
}
return (new cljs.core.async.t23280(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12271__auto___23371 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12271__auto___23371,out){
return (function (){var f__12272__auto__ = (function (){var switch__12256__auto__ = ((function (c__12271__auto___23371,out){
return (function (state_23349){var state_val_23350 = (state_23349[(1)]);if((state_val_23350 === (7)))
{var inst_23345 = (state_23349[(2)]);var state_23349__$1 = state_23349;var statearr_23351_23372 = state_23349__$1;(statearr_23351_23372[(2)] = inst_23345);
(statearr_23351_23372[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23350 === (1)))
{var state_23349__$1 = state_23349;var statearr_23352_23373 = state_23349__$1;(statearr_23352_23373[(2)] = null);
(statearr_23352_23373[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23350 === (4)))
{var inst_23331 = (state_23349[(7)]);var inst_23331__$1 = (state_23349[(2)]);var inst_23332 = (inst_23331__$1 == null);var state_23349__$1 = (function (){var statearr_23353 = state_23349;(statearr_23353[(7)] = inst_23331__$1);
return statearr_23353;
})();if(cljs.core.truth_(inst_23332))
{var statearr_23354_23374 = state_23349__$1;(statearr_23354_23374[(1)] = (5));
} else
{var statearr_23355_23375 = state_23349__$1;(statearr_23355_23375[(1)] = (6));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_23350 === (6)))
{var inst_23331 = (state_23349[(7)]);var inst_23336 = (function (){var G__23356 = inst_23331;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23356) : p.call(null,G__23356));
})();var state_23349__$1 = state_23349;if(cljs.core.truth_(inst_23336))
{var statearr_23357_23376 = state_23349__$1;(statearr_23357_23376[(1)] = (8));
} else
{var statearr_23358_23377 = state_23349__$1;(statearr_23358_23377[(1)] = (9));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_23350 === (3)))
{var inst_23347 = (state_23349[(2)]);var state_23349__$1 = state_23349;return cljs.core.async.impl.ioc_helpers.return_chan(state_23349__$1,inst_23347);
} else
{if((state_val_23350 === (2)))
{var state_23349__$1 = state_23349;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23349__$1,(4),ch);
} else
{if((state_val_23350 === (11)))
{var inst_23339 = (state_23349[(2)]);var state_23349__$1 = state_23349;var statearr_23359_23378 = state_23349__$1;(statearr_23359_23378[(2)] = inst_23339);
(statearr_23359_23378[(1)] = (10));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23350 === (9)))
{var state_23349__$1 = state_23349;var statearr_23360_23379 = state_23349__$1;(statearr_23360_23379[(2)] = null);
(statearr_23360_23379[(1)] = (10));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23350 === (5)))
{var inst_23334 = cljs.core.async.close_BANG_(out);var state_23349__$1 = state_23349;var statearr_23361_23380 = state_23349__$1;(statearr_23361_23380[(2)] = inst_23334);
(statearr_23361_23380[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23350 === (10)))
{var inst_23342 = (state_23349[(2)]);var state_23349__$1 = (function (){var statearr_23362 = state_23349;(statearr_23362[(8)] = inst_23342);
return statearr_23362;
})();var statearr_23363_23381 = state_23349__$1;(statearr_23363_23381[(2)] = null);
(statearr_23363_23381[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23350 === (8)))
{var inst_23331 = (state_23349[(7)]);var state_23349__$1 = state_23349;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23349__$1,(11),out,inst_23331);
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
});})(c__12271__auto___23371,out))
;return ((function (switch__12256__auto__,c__12271__auto___23371,out){
return (function() {
var state_machine__12257__auto__ = null;
var state_machine__12257__auto____0 = (function (){var statearr_23367 = [null,null,null,null,null,null,null,null,null];(statearr_23367[(0)] = state_machine__12257__auto__);
(statearr_23367[(1)] = (1));
return statearr_23367;
});
var state_machine__12257__auto____1 = (function (state_23349){while(true){
var ret_value__12258__auto__ = (function (){try{while(true){
var result__12259__auto__ = switch__12256__auto__(state_23349);if(cljs.core.keyword_identical_QMARK_(result__12259__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12259__auto__;
}
break;
}
}catch (e23368){if((e23368 instanceof Object))
{var ex__12260__auto__ = e23368;var statearr_23369_23382 = state_23349;(statearr_23369_23382[(5)] = ex__12260__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23349);
return cljs.core.constant$keyword$18;
} else
{throw e23368;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12258__auto__,cljs.core.constant$keyword$18))
{{
var G__23383 = state_23349;
state_23349 = G__23383;
continue;
}
} else
{return ret_value__12258__auto__;
}
break;
}
});
state_machine__12257__auto__ = function(state_23349){
switch(arguments.length){
case 0:
return state_machine__12257__auto____0.call(this);
case 1:
return state_machine__12257__auto____1.call(this,state_23349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12257__auto____0;
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12257__auto____1;
return state_machine__12257__auto__;
})()
;})(switch__12256__auto__,c__12271__auto___23371,out))
})();var state__12273__auto__ = (function (){var statearr_23370 = (function (){return (f__12272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12272__auto__.cljs$core$IFn$_invoke$arity$0() : f__12272__auto__.call(null));
})();(statearr_23370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12271__auto___23371);
return statearr_23370;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12273__auto__);
});})(c__12271__auto___23371,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__12271__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12271__auto__){
return (function (){var f__12272__auto__ = (function (){var switch__12256__auto__ = ((function (c__12271__auto__){
return (function (state_23553){var state_val_23554 = (state_23553[(1)]);if((state_val_23554 === (7)))
{var inst_23549 = (state_23553[(2)]);var state_23553__$1 = state_23553;var statearr_23555_23597 = state_23553__$1;(statearr_23555_23597[(2)] = inst_23549);
(statearr_23555_23597[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23554 === (20)))
{var inst_23519 = (state_23553[(7)]);var inst_23530 = (state_23553[(2)]);var inst_23531 = cljs.core.next(inst_23519);var inst_23505 = inst_23531;var inst_23506 = null;var inst_23507 = (0);var inst_23508 = (0);var state_23553__$1 = (function (){var statearr_23556 = state_23553;(statearr_23556[(8)] = inst_23530);
(statearr_23556[(9)] = inst_23506);
(statearr_23556[(10)] = inst_23507);
(statearr_23556[(11)] = inst_23505);
(statearr_23556[(12)] = inst_23508);
return statearr_23556;
})();var statearr_23557_23598 = state_23553__$1;(statearr_23557_23598[(2)] = null);
(statearr_23557_23598[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23554 === (1)))
{var state_23553__$1 = state_23553;var statearr_23558_23599 = state_23553__$1;(statearr_23558_23599[(2)] = null);
(statearr_23558_23599[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23554 === (4)))
{var inst_23494 = (state_23553[(13)]);var inst_23494__$1 = (state_23553[(2)]);var inst_23495 = (inst_23494__$1 == null);var state_23553__$1 = (function (){var statearr_23559 = state_23553;(statearr_23559[(13)] = inst_23494__$1);
return statearr_23559;
})();if(cljs.core.truth_(inst_23495))
{var statearr_23560_23600 = state_23553__$1;(statearr_23560_23600[(1)] = (5));
} else
{var statearr_23561_23601 = state_23553__$1;(statearr_23561_23601[(1)] = (6));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_23554 === (15)))
{var state_23553__$1 = state_23553;var statearr_23565_23602 = state_23553__$1;(statearr_23565_23602[(2)] = null);
(statearr_23565_23602[(1)] = (16));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23554 === (21)))
{var state_23553__$1 = state_23553;var statearr_23566_23603 = state_23553__$1;(statearr_23566_23603[(2)] = null);
(statearr_23566_23603[(1)] = (23));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23554 === (13)))
{var inst_23506 = (state_23553[(9)]);var inst_23507 = (state_23553[(10)]);var inst_23505 = (state_23553[(11)]);var inst_23508 = (state_23553[(12)]);var inst_23515 = (state_23553[(2)]);var inst_23516 = (inst_23508 + (1));var tmp23562 = inst_23506;var tmp23563 = inst_23507;var tmp23564 = inst_23505;var inst_23505__$1 = tmp23564;var inst_23506__$1 = tmp23562;var inst_23507__$1 = tmp23563;var inst_23508__$1 = inst_23516;var state_23553__$1 = (function (){var statearr_23567 = state_23553;(statearr_23567[(9)] = inst_23506__$1);
(statearr_23567[(10)] = inst_23507__$1);
(statearr_23567[(11)] = inst_23505__$1);
(statearr_23567[(12)] = inst_23508__$1);
(statearr_23567[(14)] = inst_23515);
return statearr_23567;
})();var statearr_23568_23604 = state_23553__$1;(statearr_23568_23604[(2)] = null);
(statearr_23568_23604[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23554 === (22)))
{var state_23553__$1 = state_23553;var statearr_23569_23605 = state_23553__$1;(statearr_23569_23605[(2)] = null);
(statearr_23569_23605[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23554 === (6)))
{var inst_23494 = (state_23553[(13)]);var inst_23503 = (function (){var G__23570 = inst_23494;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23570) : f.call(null,G__23570));
})();var inst_23504 = cljs.core.seq(inst_23503);var inst_23505 = inst_23504;var inst_23506 = null;var inst_23507 = (0);var inst_23508 = (0);var state_23553__$1 = (function (){var statearr_23571 = state_23553;(statearr_23571[(9)] = inst_23506);
(statearr_23571[(10)] = inst_23507);
(statearr_23571[(11)] = inst_23505);
(statearr_23571[(12)] = inst_23508);
return statearr_23571;
})();var statearr_23572_23606 = state_23553__$1;(statearr_23572_23606[(2)] = null);
(statearr_23572_23606[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23554 === (17)))
{var inst_23519 = (state_23553[(7)]);var inst_23523 = cljs.core.chunk_first(inst_23519);var inst_23524 = cljs.core.chunk_rest(inst_23519);var inst_23525 = cljs.core.count(inst_23523);var inst_23505 = inst_23524;var inst_23506 = inst_23523;var inst_23507 = inst_23525;var inst_23508 = (0);var state_23553__$1 = (function (){var statearr_23573 = state_23553;(statearr_23573[(9)] = inst_23506);
(statearr_23573[(10)] = inst_23507);
(statearr_23573[(11)] = inst_23505);
(statearr_23573[(12)] = inst_23508);
return statearr_23573;
})();var statearr_23574_23607 = state_23553__$1;(statearr_23574_23607[(2)] = null);
(statearr_23574_23607[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23554 === (3)))
{var inst_23551 = (state_23553[(2)]);var state_23553__$1 = state_23553;return cljs.core.async.impl.ioc_helpers.return_chan(state_23553__$1,inst_23551);
} else
{if((state_val_23554 === (12)))
{var inst_23539 = (state_23553[(2)]);var state_23553__$1 = state_23553;var statearr_23575_23608 = state_23553__$1;(statearr_23575_23608[(2)] = inst_23539);
(statearr_23575_23608[(1)] = (9));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23554 === (2)))
{var state_23553__$1 = state_23553;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23553__$1,(4),in$);
} else
{if((state_val_23554 === (23)))
{var inst_23547 = (state_23553[(2)]);var state_23553__$1 = state_23553;var statearr_23576_23609 = state_23553__$1;(statearr_23576_23609[(2)] = inst_23547);
(statearr_23576_23609[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23554 === (19)))
{var inst_23534 = (state_23553[(2)]);var state_23553__$1 = state_23553;var statearr_23577_23610 = state_23553__$1;(statearr_23577_23610[(2)] = inst_23534);
(statearr_23577_23610[(1)] = (16));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23554 === (11)))
{var inst_23505 = (state_23553[(11)]);var inst_23519 = (state_23553[(7)]);var inst_23519__$1 = cljs.core.seq(inst_23505);var state_23553__$1 = (function (){var statearr_23578 = state_23553;(statearr_23578[(7)] = inst_23519__$1);
return statearr_23578;
})();if(inst_23519__$1)
{var statearr_23579_23611 = state_23553__$1;(statearr_23579_23611[(1)] = (14));
} else
{var statearr_23580_23612 = state_23553__$1;(statearr_23580_23612[(1)] = (15));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_23554 === (9)))
{var inst_23541 = (state_23553[(2)]);var inst_23542 = cljs.core.async.impl.protocols.closed_QMARK_(out);var state_23553__$1 = (function (){var statearr_23581 = state_23553;(statearr_23581[(15)] = inst_23541);
return statearr_23581;
})();if(cljs.core.truth_(inst_23542))
{var statearr_23582_23613 = state_23553__$1;(statearr_23582_23613[(1)] = (21));
} else
{var statearr_23583_23614 = state_23553__$1;(statearr_23583_23614[(1)] = (22));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_23554 === (5)))
{var inst_23497 = cljs.core.async.close_BANG_(out);var state_23553__$1 = state_23553;var statearr_23584_23615 = state_23553__$1;(statearr_23584_23615[(2)] = inst_23497);
(statearr_23584_23615[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23554 === (14)))
{var inst_23519 = (state_23553[(7)]);var inst_23521 = cljs.core.chunked_seq_QMARK_(inst_23519);var state_23553__$1 = state_23553;if(inst_23521)
{var statearr_23585_23616 = state_23553__$1;(statearr_23585_23616[(1)] = (17));
} else
{var statearr_23586_23617 = state_23553__$1;(statearr_23586_23617[(1)] = (18));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_23554 === (16)))
{var inst_23537 = (state_23553[(2)]);var state_23553__$1 = state_23553;var statearr_23587_23618 = state_23553__$1;(statearr_23587_23618[(2)] = inst_23537);
(statearr_23587_23618[(1)] = (12));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23554 === (10)))
{var inst_23506 = (state_23553[(9)]);var inst_23508 = (state_23553[(12)]);var inst_23513 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23506,inst_23508);var state_23553__$1 = state_23553;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23553__$1,(13),out,inst_23513);
} else
{if((state_val_23554 === (18)))
{var inst_23519 = (state_23553[(7)]);var inst_23528 = cljs.core.first(inst_23519);var state_23553__$1 = state_23553;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23553__$1,(20),out,inst_23528);
} else
{if((state_val_23554 === (8)))
{var inst_23507 = (state_23553[(10)]);var inst_23508 = (state_23553[(12)]);var inst_23510 = (inst_23508 < inst_23507);var inst_23511 = inst_23510;var state_23553__$1 = state_23553;if(cljs.core.truth_(inst_23511))
{var statearr_23588_23619 = state_23553__$1;(statearr_23588_23619[(1)] = (10));
} else
{var statearr_23589_23620 = state_23553__$1;(statearr_23589_23620[(1)] = (11));
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
});})(c__12271__auto__))
;return ((function (switch__12256__auto__,c__12271__auto__){
return (function() {
var state_machine__12257__auto__ = null;
var state_machine__12257__auto____0 = (function (){var statearr_23593 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23593[(0)] = state_machine__12257__auto__);
(statearr_23593[(1)] = (1));
return statearr_23593;
});
var state_machine__12257__auto____1 = (function (state_23553){while(true){
var ret_value__12258__auto__ = (function (){try{while(true){
var result__12259__auto__ = switch__12256__auto__(state_23553);if(cljs.core.keyword_identical_QMARK_(result__12259__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12259__auto__;
}
break;
}
}catch (e23594){if((e23594 instanceof Object))
{var ex__12260__auto__ = e23594;var statearr_23595_23621 = state_23553;(statearr_23595_23621[(5)] = ex__12260__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23553);
return cljs.core.constant$keyword$18;
} else
{throw e23594;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12258__auto__,cljs.core.constant$keyword$18))
{{
var G__23622 = state_23553;
state_23553 = G__23622;
continue;
}
} else
{return ret_value__12258__auto__;
}
break;
}
});
state_machine__12257__auto__ = function(state_23553){
switch(arguments.length){
case 0:
return state_machine__12257__auto____0.call(this);
case 1:
return state_machine__12257__auto____1.call(this,state_23553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12257__auto____0;
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12257__auto____1;
return state_machine__12257__auto__;
})()
;})(switch__12256__auto__,c__12271__auto__))
})();var state__12273__auto__ = (function (){var statearr_23596 = (function (){return (f__12272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12272__auto__.cljs$core$IFn$_invoke$arity$0() : f__12272__auto__.call(null));
})();(statearr_23596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12271__auto__);
return statearr_23596;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12273__auto__);
});})(c__12271__auto__))
);
return c__12271__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__12271__auto___23726 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12271__auto___23726){
return (function (){var f__12272__auto__ = (function (){var switch__12256__auto__ = ((function (c__12271__auto___23726){
return (function (state_23702){var state_val_23703 = (state_23702[(1)]);if((state_val_23703 === (7)))
{var inst_23698 = (state_23702[(2)]);var state_23702__$1 = state_23702;var statearr_23704_23727 = state_23702__$1;(statearr_23704_23727[(2)] = inst_23698);
(statearr_23704_23727[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23703 === (1)))
{var state_23702__$1 = state_23702;var statearr_23705_23728 = state_23702__$1;(statearr_23705_23728[(2)] = null);
(statearr_23705_23728[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23703 === (4)))
{var inst_23681 = (state_23702[(7)]);var inst_23681__$1 = (state_23702[(2)]);var inst_23682 = (inst_23681__$1 == null);var state_23702__$1 = (function (){var statearr_23706 = state_23702;(statearr_23706[(7)] = inst_23681__$1);
return statearr_23706;
})();if(cljs.core.truth_(inst_23682))
{var statearr_23707_23729 = state_23702__$1;(statearr_23707_23729[(1)] = (5));
} else
{var statearr_23708_23730 = state_23702__$1;(statearr_23708_23730[(1)] = (6));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_23703 === (13)))
{var state_23702__$1 = state_23702;var statearr_23709_23731 = state_23702__$1;(statearr_23709_23731[(2)] = null);
(statearr_23709_23731[(1)] = (14));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23703 === (6)))
{var inst_23681 = (state_23702[(7)]);var state_23702__$1 = state_23702;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23702__$1,(11),to,inst_23681);
} else
{if((state_val_23703 === (3)))
{var inst_23700 = (state_23702[(2)]);var state_23702__$1 = state_23702;return cljs.core.async.impl.ioc_helpers.return_chan(state_23702__$1,inst_23700);
} else
{if((state_val_23703 === (12)))
{var state_23702__$1 = state_23702;var statearr_23710_23732 = state_23702__$1;(statearr_23710_23732[(2)] = null);
(statearr_23710_23732[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23703 === (2)))
{var state_23702__$1 = state_23702;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23702__$1,(4),from);
} else
{if((state_val_23703 === (11)))
{var inst_23691 = (state_23702[(2)]);var state_23702__$1 = state_23702;if(cljs.core.truth_(inst_23691))
{var statearr_23711_23733 = state_23702__$1;(statearr_23711_23733[(1)] = (12));
} else
{var statearr_23712_23734 = state_23702__$1;(statearr_23712_23734[(1)] = (13));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_23703 === (9)))
{var state_23702__$1 = state_23702;var statearr_23713_23735 = state_23702__$1;(statearr_23713_23735[(2)] = null);
(statearr_23713_23735[(1)] = (10));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23703 === (5)))
{var state_23702__$1 = state_23702;if(cljs.core.truth_(close_QMARK_))
{var statearr_23714_23736 = state_23702__$1;(statearr_23714_23736[(1)] = (8));
} else
{var statearr_23715_23737 = state_23702__$1;(statearr_23715_23737[(1)] = (9));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_23703 === (14)))
{var inst_23696 = (state_23702[(2)]);var state_23702__$1 = state_23702;var statearr_23716_23738 = state_23702__$1;(statearr_23716_23738[(2)] = inst_23696);
(statearr_23716_23738[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23703 === (10)))
{var inst_23688 = (state_23702[(2)]);var state_23702__$1 = state_23702;var statearr_23717_23739 = state_23702__$1;(statearr_23717_23739[(2)] = inst_23688);
(statearr_23717_23739[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23703 === (8)))
{var inst_23685 = cljs.core.async.close_BANG_(to);var state_23702__$1 = state_23702;var statearr_23718_23740 = state_23702__$1;(statearr_23718_23740[(2)] = inst_23685);
(statearr_23718_23740[(1)] = (10));
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
});})(c__12271__auto___23726))
;return ((function (switch__12256__auto__,c__12271__auto___23726){
return (function() {
var state_machine__12257__auto__ = null;
var state_machine__12257__auto____0 = (function (){var statearr_23722 = [null,null,null,null,null,null,null,null];(statearr_23722[(0)] = state_machine__12257__auto__);
(statearr_23722[(1)] = (1));
return statearr_23722;
});
var state_machine__12257__auto____1 = (function (state_23702){while(true){
var ret_value__12258__auto__ = (function (){try{while(true){
var result__12259__auto__ = switch__12256__auto__(state_23702);if(cljs.core.keyword_identical_QMARK_(result__12259__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12259__auto__;
}
break;
}
}catch (e23723){if((e23723 instanceof Object))
{var ex__12260__auto__ = e23723;var statearr_23724_23741 = state_23702;(statearr_23724_23741[(5)] = ex__12260__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23702);
return cljs.core.constant$keyword$18;
} else
{throw e23723;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12258__auto__,cljs.core.constant$keyword$18))
{{
var G__23742 = state_23702;
state_23702 = G__23742;
continue;
}
} else
{return ret_value__12258__auto__;
}
break;
}
});
state_machine__12257__auto__ = function(state_23702){
switch(arguments.length){
case 0:
return state_machine__12257__auto____0.call(this);
case 1:
return state_machine__12257__auto____1.call(this,state_23702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12257__auto____0;
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12257__auto____1;
return state_machine__12257__auto__;
})()
;})(switch__12256__auto__,c__12271__auto___23726))
})();var state__12273__auto__ = (function (){var statearr_23725 = (function (){return (f__12272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12272__auto__.cljs$core$IFn$_invoke$arity$0() : f__12272__auto__.call(null));
})();(statearr_23725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12271__auto___23726);
return statearr_23725;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12273__auto__);
});})(c__12271__auto___23726))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__12271__auto___23849 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12271__auto___23849,tc,fc){
return (function (){var f__12272__auto__ = (function (){var switch__12256__auto__ = ((function (c__12271__auto___23849,tc,fc){
return (function (state_23823){var state_val_23824 = (state_23823[(1)]);if((state_val_23824 === (7)))
{var inst_23819 = (state_23823[(2)]);var state_23823__$1 = state_23823;var statearr_23825_23850 = state_23823__$1;(statearr_23825_23850[(2)] = inst_23819);
(statearr_23825_23850[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23824 === (1)))
{var state_23823__$1 = state_23823;var statearr_23826_23851 = state_23823__$1;(statearr_23826_23851[(2)] = null);
(statearr_23826_23851[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23824 === (4)))
{var inst_23800 = (state_23823[(7)]);var inst_23800__$1 = (state_23823[(2)]);var inst_23801 = (inst_23800__$1 == null);var state_23823__$1 = (function (){var statearr_23827 = state_23823;(statearr_23827[(7)] = inst_23800__$1);
return statearr_23827;
})();if(cljs.core.truth_(inst_23801))
{var statearr_23828_23852 = state_23823__$1;(statearr_23828_23852[(1)] = (5));
} else
{var statearr_23829_23853 = state_23823__$1;(statearr_23829_23853[(1)] = (6));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_23824 === (13)))
{var state_23823__$1 = state_23823;var statearr_23830_23854 = state_23823__$1;(statearr_23830_23854[(2)] = null);
(statearr_23830_23854[(1)] = (14));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23824 === (6)))
{var inst_23800 = (state_23823[(7)]);var inst_23806 = (function (){var G__23831 = inst_23800;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23831) : p.call(null,G__23831));
})();var state_23823__$1 = state_23823;if(cljs.core.truth_(inst_23806))
{var statearr_23832_23855 = state_23823__$1;(statearr_23832_23855[(1)] = (9));
} else
{var statearr_23833_23856 = state_23823__$1;(statearr_23833_23856[(1)] = (10));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_23824 === (3)))
{var inst_23821 = (state_23823[(2)]);var state_23823__$1 = state_23823;return cljs.core.async.impl.ioc_helpers.return_chan(state_23823__$1,inst_23821);
} else
{if((state_val_23824 === (12)))
{var state_23823__$1 = state_23823;var statearr_23834_23857 = state_23823__$1;(statearr_23834_23857[(2)] = null);
(statearr_23834_23857[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23824 === (2)))
{var state_23823__$1 = state_23823;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23823__$1,(4),ch);
} else
{if((state_val_23824 === (11)))
{var inst_23800 = (state_23823[(7)]);var inst_23810 = (state_23823[(2)]);var state_23823__$1 = state_23823;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23823__$1,(8),inst_23810,inst_23800);
} else
{if((state_val_23824 === (9)))
{var state_23823__$1 = state_23823;var statearr_23835_23858 = state_23823__$1;(statearr_23835_23858[(2)] = tc);
(statearr_23835_23858[(1)] = (11));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23824 === (5)))
{var inst_23803 = cljs.core.async.close_BANG_(tc);var inst_23804 = cljs.core.async.close_BANG_(fc);var state_23823__$1 = (function (){var statearr_23836 = state_23823;(statearr_23836[(8)] = inst_23803);
return statearr_23836;
})();var statearr_23837_23859 = state_23823__$1;(statearr_23837_23859[(2)] = inst_23804);
(statearr_23837_23859[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23824 === (14)))
{var inst_23817 = (state_23823[(2)]);var state_23823__$1 = state_23823;var statearr_23838_23860 = state_23823__$1;(statearr_23838_23860[(2)] = inst_23817);
(statearr_23838_23860[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23824 === (10)))
{var state_23823__$1 = state_23823;var statearr_23839_23861 = state_23823__$1;(statearr_23839_23861[(2)] = fc);
(statearr_23839_23861[(1)] = (11));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23824 === (8)))
{var inst_23812 = (state_23823[(2)]);var state_23823__$1 = state_23823;if(cljs.core.truth_(inst_23812))
{var statearr_23840_23862 = state_23823__$1;(statearr_23840_23862[(1)] = (12));
} else
{var statearr_23841_23863 = state_23823__$1;(statearr_23841_23863[(1)] = (13));
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
});})(c__12271__auto___23849,tc,fc))
;return ((function (switch__12256__auto__,c__12271__auto___23849,tc,fc){
return (function() {
var state_machine__12257__auto__ = null;
var state_machine__12257__auto____0 = (function (){var statearr_23845 = [null,null,null,null,null,null,null,null,null];(statearr_23845[(0)] = state_machine__12257__auto__);
(statearr_23845[(1)] = (1));
return statearr_23845;
});
var state_machine__12257__auto____1 = (function (state_23823){while(true){
var ret_value__12258__auto__ = (function (){try{while(true){
var result__12259__auto__ = switch__12256__auto__(state_23823);if(cljs.core.keyword_identical_QMARK_(result__12259__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12259__auto__;
}
break;
}
}catch (e23846){if((e23846 instanceof Object))
{var ex__12260__auto__ = e23846;var statearr_23847_23864 = state_23823;(statearr_23847_23864[(5)] = ex__12260__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23823);
return cljs.core.constant$keyword$18;
} else
{throw e23846;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12258__auto__,cljs.core.constant$keyword$18))
{{
var G__23865 = state_23823;
state_23823 = G__23865;
continue;
}
} else
{return ret_value__12258__auto__;
}
break;
}
});
state_machine__12257__auto__ = function(state_23823){
switch(arguments.length){
case 0:
return state_machine__12257__auto____0.call(this);
case 1:
return state_machine__12257__auto____1.call(this,state_23823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12257__auto____0;
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12257__auto____1;
return state_machine__12257__auto__;
})()
;})(switch__12256__auto__,c__12271__auto___23849,tc,fc))
})();var state__12273__auto__ = (function (){var statearr_23848 = (function (){return (f__12272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12272__auto__.cljs$core$IFn$_invoke$arity$0() : f__12272__auto__.call(null));
})();(statearr_23848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12271__auto___23849);
return statearr_23848;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12273__auto__);
});})(c__12271__auto___23849,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__12271__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12271__auto__){
return (function (){var f__12272__auto__ = (function (){var switch__12256__auto__ = ((function (c__12271__auto__){
return (function (state_23914){var state_val_23915 = (state_23914[(1)]);if((state_val_23915 === (7)))
{var inst_23910 = (state_23914[(2)]);var state_23914__$1 = state_23914;var statearr_23916_23934 = state_23914__$1;(statearr_23916_23934[(2)] = inst_23910);
(statearr_23916_23934[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23915 === (6)))
{var inst_23903 = (state_23914[(7)]);var inst_23900 = (state_23914[(8)]);var inst_23907 = (function (){var G__23917 = inst_23900;var G__23918 = inst_23903;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23917,G__23918) : f.call(null,G__23917,G__23918));
})();var inst_23900__$1 = inst_23907;var state_23914__$1 = (function (){var statearr_23919 = state_23914;(statearr_23919[(8)] = inst_23900__$1);
return statearr_23919;
})();var statearr_23920_23935 = state_23914__$1;(statearr_23920_23935[(2)] = null);
(statearr_23920_23935[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23915 === (5)))
{var inst_23900 = (state_23914[(8)]);var state_23914__$1 = state_23914;var statearr_23921_23936 = state_23914__$1;(statearr_23921_23936[(2)] = inst_23900);
(statearr_23921_23936[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_23915 === (4)))
{var inst_23903 = (state_23914[(7)]);var inst_23903__$1 = (state_23914[(2)]);var inst_23904 = (inst_23903__$1 == null);var state_23914__$1 = (function (){var statearr_23922 = state_23914;(statearr_23922[(7)] = inst_23903__$1);
return statearr_23922;
})();if(cljs.core.truth_(inst_23904))
{var statearr_23923_23937 = state_23914__$1;(statearr_23923_23937[(1)] = (5));
} else
{var statearr_23924_23938 = state_23914__$1;(statearr_23924_23938[(1)] = (6));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_23915 === (3)))
{var inst_23912 = (state_23914[(2)]);var state_23914__$1 = state_23914;return cljs.core.async.impl.ioc_helpers.return_chan(state_23914__$1,inst_23912);
} else
{if((state_val_23915 === (2)))
{var state_23914__$1 = state_23914;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23914__$1,(4),ch);
} else
{if((state_val_23915 === (1)))
{var inst_23900 = init;var state_23914__$1 = (function (){var statearr_23925 = state_23914;(statearr_23925[(8)] = inst_23900);
return statearr_23925;
})();var statearr_23926_23939 = state_23914__$1;(statearr_23926_23939[(2)] = null);
(statearr_23926_23939[(1)] = (2));
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
});})(c__12271__auto__))
;return ((function (switch__12256__auto__,c__12271__auto__){
return (function() {
var state_machine__12257__auto__ = null;
var state_machine__12257__auto____0 = (function (){var statearr_23930 = [null,null,null,null,null,null,null,null,null];(statearr_23930[(0)] = state_machine__12257__auto__);
(statearr_23930[(1)] = (1));
return statearr_23930;
});
var state_machine__12257__auto____1 = (function (state_23914){while(true){
var ret_value__12258__auto__ = (function (){try{while(true){
var result__12259__auto__ = switch__12256__auto__(state_23914);if(cljs.core.keyword_identical_QMARK_(result__12259__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12259__auto__;
}
break;
}
}catch (e23931){if((e23931 instanceof Object))
{var ex__12260__auto__ = e23931;var statearr_23932_23940 = state_23914;(statearr_23932_23940[(5)] = ex__12260__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23914);
return cljs.core.constant$keyword$18;
} else
{throw e23931;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12258__auto__,cljs.core.constant$keyword$18))
{{
var G__23941 = state_23914;
state_23914 = G__23941;
continue;
}
} else
{return ret_value__12258__auto__;
}
break;
}
});
state_machine__12257__auto__ = function(state_23914){
switch(arguments.length){
case 0:
return state_machine__12257__auto____0.call(this);
case 1:
return state_machine__12257__auto____1.call(this,state_23914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12257__auto____0;
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12257__auto____1;
return state_machine__12257__auto__;
})()
;})(switch__12256__auto__,c__12271__auto__))
})();var state__12273__auto__ = (function (){var statearr_23933 = (function (){return (f__12272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12272__auto__.cljs$core$IFn$_invoke$arity$0() : f__12272__auto__.call(null));
})();(statearr_23933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12271__auto__);
return statearr_23933;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12273__auto__);
});})(c__12271__auto__))
);
return c__12271__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__12271__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12271__auto__){
return (function (){var f__12272__auto__ = (function (){var switch__12256__auto__ = ((function (c__12271__auto__){
return (function (state_24018){var state_val_24019 = (state_24018[(1)]);if((state_val_24019 === (7)))
{var inst_24000 = (state_24018[(2)]);var state_24018__$1 = state_24018;var statearr_24020_24043 = state_24018__$1;(statearr_24020_24043[(2)] = inst_24000);
(statearr_24020_24043[(1)] = (6));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24019 === (1)))
{var inst_23994 = cljs.core.seq(coll);var inst_23995 = inst_23994;var state_24018__$1 = (function (){var statearr_24021 = state_24018;(statearr_24021[(7)] = inst_23995);
return statearr_24021;
})();var statearr_24022_24044 = state_24018__$1;(statearr_24022_24044[(2)] = null);
(statearr_24022_24044[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24019 === (4)))
{var inst_23995 = (state_24018[(7)]);var inst_23998 = cljs.core.first(inst_23995);var state_24018__$1 = state_24018;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24018__$1,(7),ch,inst_23998);
} else
{if((state_val_24019 === (13)))
{var inst_24012 = (state_24018[(2)]);var state_24018__$1 = state_24018;var statearr_24023_24045 = state_24018__$1;(statearr_24023_24045[(2)] = inst_24012);
(statearr_24023_24045[(1)] = (10));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24019 === (6)))
{var inst_24003 = (state_24018[(2)]);var state_24018__$1 = state_24018;if(cljs.core.truth_(inst_24003))
{var statearr_24024_24046 = state_24018__$1;(statearr_24024_24046[(1)] = (8));
} else
{var statearr_24025_24047 = state_24018__$1;(statearr_24025_24047[(1)] = (9));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24019 === (3)))
{var inst_24016 = (state_24018[(2)]);var state_24018__$1 = state_24018;return cljs.core.async.impl.ioc_helpers.return_chan(state_24018__$1,inst_24016);
} else
{if((state_val_24019 === (12)))
{var state_24018__$1 = state_24018;var statearr_24026_24048 = state_24018__$1;(statearr_24026_24048[(2)] = null);
(statearr_24026_24048[(1)] = (13));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24019 === (2)))
{var inst_23995 = (state_24018[(7)]);var state_24018__$1 = state_24018;if(cljs.core.truth_(inst_23995))
{var statearr_24027_24049 = state_24018__$1;(statearr_24027_24049[(1)] = (4));
} else
{var statearr_24028_24050 = state_24018__$1;(statearr_24028_24050[(1)] = (5));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24019 === (11)))
{var inst_24009 = cljs.core.async.close_BANG_(ch);var state_24018__$1 = state_24018;var statearr_24029_24051 = state_24018__$1;(statearr_24029_24051[(2)] = inst_24009);
(statearr_24029_24051[(1)] = (13));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24019 === (9)))
{var state_24018__$1 = state_24018;if(cljs.core.truth_(close_QMARK_))
{var statearr_24030_24052 = state_24018__$1;(statearr_24030_24052[(1)] = (11));
} else
{var statearr_24031_24053 = state_24018__$1;(statearr_24031_24053[(1)] = (12));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24019 === (5)))
{var inst_23995 = (state_24018[(7)]);var state_24018__$1 = state_24018;var statearr_24032_24054 = state_24018__$1;(statearr_24032_24054[(2)] = inst_23995);
(statearr_24032_24054[(1)] = (6));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24019 === (10)))
{var inst_24014 = (state_24018[(2)]);var state_24018__$1 = state_24018;var statearr_24033_24055 = state_24018__$1;(statearr_24033_24055[(2)] = inst_24014);
(statearr_24033_24055[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24019 === (8)))
{var inst_23995 = (state_24018[(7)]);var inst_24005 = cljs.core.next(inst_23995);var inst_23995__$1 = inst_24005;var state_24018__$1 = (function (){var statearr_24034 = state_24018;(statearr_24034[(7)] = inst_23995__$1);
return statearr_24034;
})();var statearr_24035_24056 = state_24018__$1;(statearr_24035_24056[(2)] = null);
(statearr_24035_24056[(1)] = (2));
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
});})(c__12271__auto__))
;return ((function (switch__12256__auto__,c__12271__auto__){
return (function() {
var state_machine__12257__auto__ = null;
var state_machine__12257__auto____0 = (function (){var statearr_24039 = [null,null,null,null,null,null,null,null];(statearr_24039[(0)] = state_machine__12257__auto__);
(statearr_24039[(1)] = (1));
return statearr_24039;
});
var state_machine__12257__auto____1 = (function (state_24018){while(true){
var ret_value__12258__auto__ = (function (){try{while(true){
var result__12259__auto__ = switch__12256__auto__(state_24018);if(cljs.core.keyword_identical_QMARK_(result__12259__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12259__auto__;
}
break;
}
}catch (e24040){if((e24040 instanceof Object))
{var ex__12260__auto__ = e24040;var statearr_24041_24057 = state_24018;(statearr_24041_24057[(5)] = ex__12260__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24018);
return cljs.core.constant$keyword$18;
} else
{throw e24040;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12258__auto__,cljs.core.constant$keyword$18))
{{
var G__24058 = state_24018;
state_24018 = G__24058;
continue;
}
} else
{return ret_value__12258__auto__;
}
break;
}
});
state_machine__12257__auto__ = function(state_24018){
switch(arguments.length){
case 0:
return state_machine__12257__auto____0.call(this);
case 1:
return state_machine__12257__auto____1.call(this,state_24018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12257__auto____0;
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12257__auto____1;
return state_machine__12257__auto__;
})()
;})(switch__12256__auto__,c__12271__auto__))
})();var state__12273__auto__ = (function (){var statearr_24042 = (function (){return (f__12272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12272__auto__.cljs$core$IFn$_invoke$arity$0() : f__12272__auto__.call(null));
})();(statearr_24042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12271__auto__);
return statearr_24042;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12273__auto__);
});})(c__12271__auto__))
);
return c__12271__auto__;
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
cljs.core.async.Mux = (function (){var obj24060 = {};return obj24060;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3657__auto__ = _;if(and__3657__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3657__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4305__auto__ = (((_ == null))?null:_);return (function (){var or__3669__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__24064 = x__4305__auto__;return goog.typeOf(G__24064);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj24066 = {};return obj24066;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3657__auto__ = m;if(and__3657__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3657__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4305__auto__ = (((m == null))?null:m);return (function (){var or__3669__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__24070 = x__4305__auto__;return goog.typeOf(G__24070);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3657__auto__ = m;if(and__3657__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3657__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4305__auto__ = (((m == null))?null:m);return (function (){var or__3669__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__24074 = x__4305__auto__;return goog.typeOf(G__24074);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3657__auto__ = m;if(and__3657__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3657__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4305__auto__ = (((m == null))?null:m);return (function (){var or__3669__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__24078 = x__4305__auto__;return goog.typeOf(G__24078);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = (function (){var G__24308 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24308) : cljs.core.atom.call(null,G__24308));
})();var m = (function (){if(typeof cljs.core.async.t24309 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24309 = (function (cs,ch,mult,meta24310){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24310 = meta24310;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24309.cljs$lang$type = true;
cljs.core.async.t24309.cljs$lang$ctorStr = "cljs.core.async/t24309";
cljs.core.async.t24309.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cljs.core.async/t24309");
});})(cs))
;
cljs.core.async.t24309.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24309.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24309.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24309.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;var G__24312_24537 = self__.cs;var G__24313_24538 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24312_24537,G__24313_24538) : cljs.core.reset_BANG_.call(null,G__24312_24537,G__24313_24538));
return null;
});})(cs))
;
cljs.core.async.t24309.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24309.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24309.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24311){var self__ = this;
var _24311__$1 = this;return self__.meta24310;
});})(cs))
;
cljs.core.async.t24309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24311,meta24310__$1){var self__ = this;
var _24311__$1 = this;return (new cljs.core.async.t24309(self__.cs,self__.ch,self__.mult,meta24310__$1));
});})(cs))
;
cljs.core.async.__GT_t24309 = ((function (cs){
return (function __GT_t24309(cs__$1,ch__$1,mult__$1,meta24310){return (new cljs.core.async.t24309(cs__$1,ch__$1,mult__$1,meta24310));
});})(cs))
;
}
return (new cljs.core.async.t24309(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__24314 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24314) : cljs.core.atom.call(null,G__24314));
})();var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12271__auto___24539 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12271__auto___24539,cs,m,dchan,dctr,done){
return (function (){var f__12272__auto__ = (function (){var switch__12256__auto__ = ((function (c__12271__auto___24539,cs,m,dchan,dctr,done){
return (function (state_24445){var state_val_24446 = (state_24445[(1)]);if((state_val_24446 === (7)))
{var inst_24441 = (state_24445[(2)]);var state_24445__$1 = state_24445;var statearr_24447_24540 = state_24445__$1;(statearr_24447_24540[(2)] = inst_24441);
(statearr_24447_24540[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (20)))
{var inst_24346 = (state_24445[(7)]);var inst_24356 = cljs.core.first(inst_24346);var inst_24357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24356,(0),null);var inst_24358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24356,(1),null);var state_24445__$1 = (function (){var statearr_24448 = state_24445;(statearr_24448[(8)] = inst_24357);
return statearr_24448;
})();if(cljs.core.truth_(inst_24358))
{var statearr_24449_24541 = state_24445__$1;(statearr_24449_24541[(1)] = (22));
} else
{var statearr_24450_24542 = state_24445__$1;(statearr_24450_24542[(1)] = (23));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (27)))
{var inst_24388 = (state_24445[(9)]);var inst_24386 = (state_24445[(10)]);var inst_24393 = (state_24445[(11)]);var inst_24317 = (state_24445[(12)]);var inst_24393__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24386,inst_24388);var inst_24394 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24393__$1,inst_24317,done);var state_24445__$1 = (function (){var statearr_24451 = state_24445;(statearr_24451[(11)] = inst_24393__$1);
return statearr_24451;
})();if(cljs.core.truth_(inst_24394))
{var statearr_24452_24543 = state_24445__$1;(statearr_24452_24543[(1)] = (30));
} else
{var statearr_24453_24544 = state_24445__$1;(statearr_24453_24544[(1)] = (31));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (1)))
{var state_24445__$1 = state_24445;var statearr_24454_24545 = state_24445__$1;(statearr_24454_24545[(2)] = null);
(statearr_24454_24545[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (24)))
{var inst_24346 = (state_24445[(7)]);var inst_24363 = (state_24445[(2)]);var inst_24364 = cljs.core.next(inst_24346);var inst_24326 = inst_24364;var inst_24327 = null;var inst_24328 = (0);var inst_24329 = (0);var state_24445__$1 = (function (){var statearr_24455 = state_24445;(statearr_24455[(13)] = inst_24327);
(statearr_24455[(14)] = inst_24363);
(statearr_24455[(15)] = inst_24328);
(statearr_24455[(16)] = inst_24329);
(statearr_24455[(17)] = inst_24326);
return statearr_24455;
})();var statearr_24456_24546 = state_24445__$1;(statearr_24456_24546[(2)] = null);
(statearr_24456_24546[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (39)))
{var state_24445__$1 = state_24445;var statearr_24460_24547 = state_24445__$1;(statearr_24460_24547[(2)] = null);
(statearr_24460_24547[(1)] = (41));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (4)))
{var inst_24317 = (state_24445[(12)]);var inst_24317__$1 = (state_24445[(2)]);var inst_24318 = (inst_24317__$1 == null);var state_24445__$1 = (function (){var statearr_24461 = state_24445;(statearr_24461[(12)] = inst_24317__$1);
return statearr_24461;
})();if(cljs.core.truth_(inst_24318))
{var statearr_24462_24548 = state_24445__$1;(statearr_24462_24548[(1)] = (5));
} else
{var statearr_24463_24549 = state_24445__$1;(statearr_24463_24549[(1)] = (6));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (15)))
{var inst_24327 = (state_24445[(13)]);var inst_24328 = (state_24445[(15)]);var inst_24329 = (state_24445[(16)]);var inst_24326 = (state_24445[(17)]);var inst_24342 = (state_24445[(2)]);var inst_24343 = (inst_24329 + (1));var tmp24457 = inst_24327;var tmp24458 = inst_24328;var tmp24459 = inst_24326;var inst_24326__$1 = tmp24459;var inst_24327__$1 = tmp24457;var inst_24328__$1 = tmp24458;var inst_24329__$1 = inst_24343;var state_24445__$1 = (function (){var statearr_24464 = state_24445;(statearr_24464[(13)] = inst_24327__$1);
(statearr_24464[(15)] = inst_24328__$1);
(statearr_24464[(16)] = inst_24329__$1);
(statearr_24464[(17)] = inst_24326__$1);
(statearr_24464[(18)] = inst_24342);
return statearr_24464;
})();var statearr_24465_24550 = state_24445__$1;(statearr_24465_24550[(2)] = null);
(statearr_24465_24550[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (21)))
{var inst_24367 = (state_24445[(2)]);var state_24445__$1 = state_24445;var statearr_24469_24551 = state_24445__$1;(statearr_24469_24551[(2)] = inst_24367);
(statearr_24469_24551[(1)] = (18));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (31)))
{var inst_24393 = (state_24445[(11)]);var inst_24397 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24398 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24393);var state_24445__$1 = (function (){var statearr_24470 = state_24445;(statearr_24470[(19)] = inst_24397);
return statearr_24470;
})();var statearr_24471_24552 = state_24445__$1;(statearr_24471_24552[(2)] = inst_24398);
(statearr_24471_24552[(1)] = (32));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (32)))
{var inst_24388 = (state_24445[(9)]);var inst_24385 = (state_24445[(20)]);var inst_24386 = (state_24445[(10)]);var inst_24387 = (state_24445[(21)]);var inst_24400 = (state_24445[(2)]);var inst_24401 = (inst_24388 + (1));var tmp24466 = inst_24385;var tmp24467 = inst_24386;var tmp24468 = inst_24387;var inst_24385__$1 = tmp24466;var inst_24386__$1 = tmp24467;var inst_24387__$1 = tmp24468;var inst_24388__$1 = inst_24401;var state_24445__$1 = (function (){var statearr_24472 = state_24445;(statearr_24472[(9)] = inst_24388__$1);
(statearr_24472[(20)] = inst_24385__$1);
(statearr_24472[(10)] = inst_24386__$1);
(statearr_24472[(21)] = inst_24387__$1);
(statearr_24472[(22)] = inst_24400);
return statearr_24472;
})();var statearr_24473_24553 = state_24445__$1;(statearr_24473_24553[(2)] = null);
(statearr_24473_24553[(1)] = (25));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (40)))
{var inst_24413 = (state_24445[(23)]);var inst_24417 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24418 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24413);var state_24445__$1 = (function (){var statearr_24474 = state_24445;(statearr_24474[(24)] = inst_24417);
return statearr_24474;
})();var statearr_24475_24554 = state_24445__$1;(statearr_24475_24554[(2)] = inst_24418);
(statearr_24475_24554[(1)] = (41));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (33)))
{var inst_24404 = (state_24445[(25)]);var inst_24406 = cljs.core.chunked_seq_QMARK_(inst_24404);var state_24445__$1 = state_24445;if(inst_24406)
{var statearr_24476_24555 = state_24445__$1;(statearr_24476_24555[(1)] = (36));
} else
{var statearr_24477_24556 = state_24445__$1;(statearr_24477_24556[(1)] = (37));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (13)))
{var inst_24336 = (state_24445[(26)]);var inst_24339 = cljs.core.async.close_BANG_(inst_24336);var state_24445__$1 = state_24445;var statearr_24478_24557 = state_24445__$1;(statearr_24478_24557[(2)] = inst_24339);
(statearr_24478_24557[(1)] = (15));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (22)))
{var inst_24357 = (state_24445[(8)]);var inst_24360 = cljs.core.async.close_BANG_(inst_24357);var state_24445__$1 = state_24445;var statearr_24479_24558 = state_24445__$1;(statearr_24479_24558[(2)] = inst_24360);
(statearr_24479_24558[(1)] = (24));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (36)))
{var inst_24404 = (state_24445[(25)]);var inst_24408 = cljs.core.chunk_first(inst_24404);var inst_24409 = cljs.core.chunk_rest(inst_24404);var inst_24410 = cljs.core.count(inst_24408);var inst_24385 = inst_24409;var inst_24386 = inst_24408;var inst_24387 = inst_24410;var inst_24388 = (0);var state_24445__$1 = (function (){var statearr_24480 = state_24445;(statearr_24480[(9)] = inst_24388);
(statearr_24480[(20)] = inst_24385);
(statearr_24480[(10)] = inst_24386);
(statearr_24480[(21)] = inst_24387);
return statearr_24480;
})();var statearr_24481_24559 = state_24445__$1;(statearr_24481_24559[(2)] = null);
(statearr_24481_24559[(1)] = (25));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (41)))
{var inst_24404 = (state_24445[(25)]);var inst_24420 = (state_24445[(2)]);var inst_24421 = cljs.core.next(inst_24404);var inst_24385 = inst_24421;var inst_24386 = null;var inst_24387 = (0);var inst_24388 = (0);var state_24445__$1 = (function (){var statearr_24482 = state_24445;(statearr_24482[(9)] = inst_24388);
(statearr_24482[(27)] = inst_24420);
(statearr_24482[(20)] = inst_24385);
(statearr_24482[(10)] = inst_24386);
(statearr_24482[(21)] = inst_24387);
return statearr_24482;
})();var statearr_24483_24560 = state_24445__$1;(statearr_24483_24560[(2)] = null);
(statearr_24483_24560[(1)] = (25));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (43)))
{var state_24445__$1 = state_24445;var statearr_24484_24561 = state_24445__$1;(statearr_24484_24561[(2)] = null);
(statearr_24484_24561[(1)] = (44));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (29)))
{var inst_24429 = (state_24445[(2)]);var state_24445__$1 = state_24445;var statearr_24485_24562 = state_24445__$1;(statearr_24485_24562[(2)] = inst_24429);
(statearr_24485_24562[(1)] = (26));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (44)))
{var inst_24438 = (state_24445[(2)]);var state_24445__$1 = (function (){var statearr_24486 = state_24445;(statearr_24486[(28)] = inst_24438);
return statearr_24486;
})();var statearr_24487_24563 = state_24445__$1;(statearr_24487_24563[(2)] = null);
(statearr_24487_24563[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (6)))
{var inst_24377 = (state_24445[(29)]);var inst_24376 = (function (){var G__24488 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24488) : cljs.core.deref.call(null,G__24488));
})();var inst_24377__$1 = cljs.core.keys(inst_24376);var inst_24378 = cljs.core.count(inst_24377__$1);var inst_24379 = (function (){var G__24489 = dctr;var G__24490 = inst_24378;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24489,G__24490) : cljs.core.reset_BANG_.call(null,G__24489,G__24490));
})();var inst_24384 = cljs.core.seq(inst_24377__$1);var inst_24385 = inst_24384;var inst_24386 = null;var inst_24387 = (0);var inst_24388 = (0);var state_24445__$1 = (function (){var statearr_24491 = state_24445;(statearr_24491[(9)] = inst_24388);
(statearr_24491[(20)] = inst_24385);
(statearr_24491[(10)] = inst_24386);
(statearr_24491[(21)] = inst_24387);
(statearr_24491[(29)] = inst_24377__$1);
(statearr_24491[(30)] = inst_24379);
return statearr_24491;
})();var statearr_24492_24564 = state_24445__$1;(statearr_24492_24564[(2)] = null);
(statearr_24492_24564[(1)] = (25));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (28)))
{var inst_24385 = (state_24445[(20)]);var inst_24404 = (state_24445[(25)]);var inst_24404__$1 = cljs.core.seq(inst_24385);var state_24445__$1 = (function (){var statearr_24493 = state_24445;(statearr_24493[(25)] = inst_24404__$1);
return statearr_24493;
})();if(inst_24404__$1)
{var statearr_24494_24565 = state_24445__$1;(statearr_24494_24565[(1)] = (33));
} else
{var statearr_24495_24566 = state_24445__$1;(statearr_24495_24566[(1)] = (34));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (25)))
{var inst_24388 = (state_24445[(9)]);var inst_24387 = (state_24445[(21)]);var inst_24390 = (inst_24388 < inst_24387);var inst_24391 = inst_24390;var state_24445__$1 = state_24445;if(cljs.core.truth_(inst_24391))
{var statearr_24496_24567 = state_24445__$1;(statearr_24496_24567[(1)] = (27));
} else
{var statearr_24497_24568 = state_24445__$1;(statearr_24497_24568[(1)] = (28));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (34)))
{var state_24445__$1 = state_24445;var statearr_24498_24569 = state_24445__$1;(statearr_24498_24569[(2)] = null);
(statearr_24498_24569[(1)] = (35));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (17)))
{var state_24445__$1 = state_24445;var statearr_24499_24570 = state_24445__$1;(statearr_24499_24570[(2)] = null);
(statearr_24499_24570[(1)] = (18));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (3)))
{var inst_24443 = (state_24445[(2)]);var state_24445__$1 = state_24445;return cljs.core.async.impl.ioc_helpers.return_chan(state_24445__$1,inst_24443);
} else
{if((state_val_24446 === (12)))
{var inst_24372 = (state_24445[(2)]);var state_24445__$1 = state_24445;var statearr_24500_24571 = state_24445__$1;(statearr_24500_24571[(2)] = inst_24372);
(statearr_24500_24571[(1)] = (9));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (2)))
{var state_24445__$1 = state_24445;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24445__$1,(4),ch);
} else
{if((state_val_24446 === (23)))
{var state_24445__$1 = state_24445;var statearr_24501_24572 = state_24445__$1;(statearr_24501_24572[(2)] = null);
(statearr_24501_24572[(1)] = (24));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (35)))
{var inst_24427 = (state_24445[(2)]);var state_24445__$1 = state_24445;var statearr_24502_24573 = state_24445__$1;(statearr_24502_24573[(2)] = inst_24427);
(statearr_24502_24573[(1)] = (29));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (19)))
{var inst_24346 = (state_24445[(7)]);var inst_24350 = cljs.core.chunk_first(inst_24346);var inst_24351 = cljs.core.chunk_rest(inst_24346);var inst_24352 = cljs.core.count(inst_24350);var inst_24326 = inst_24351;var inst_24327 = inst_24350;var inst_24328 = inst_24352;var inst_24329 = (0);var state_24445__$1 = (function (){var statearr_24503 = state_24445;(statearr_24503[(13)] = inst_24327);
(statearr_24503[(15)] = inst_24328);
(statearr_24503[(16)] = inst_24329);
(statearr_24503[(17)] = inst_24326);
return statearr_24503;
})();var statearr_24504_24574 = state_24445__$1;(statearr_24504_24574[(2)] = null);
(statearr_24504_24574[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (11)))
{var inst_24326 = (state_24445[(17)]);var inst_24346 = (state_24445[(7)]);var inst_24346__$1 = cljs.core.seq(inst_24326);var state_24445__$1 = (function (){var statearr_24505 = state_24445;(statearr_24505[(7)] = inst_24346__$1);
return statearr_24505;
})();if(inst_24346__$1)
{var statearr_24506_24575 = state_24445__$1;(statearr_24506_24575[(1)] = (16));
} else
{var statearr_24507_24576 = state_24445__$1;(statearr_24507_24576[(1)] = (17));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (9)))
{var inst_24374 = (state_24445[(2)]);var state_24445__$1 = state_24445;var statearr_24508_24577 = state_24445__$1;(statearr_24508_24577[(2)] = inst_24374);
(statearr_24508_24577[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (5)))
{var inst_24324 = (function (){var G__24509 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24509) : cljs.core.deref.call(null,G__24509));
})();var inst_24325 = cljs.core.seq(inst_24324);var inst_24326 = inst_24325;var inst_24327 = null;var inst_24328 = (0);var inst_24329 = (0);var state_24445__$1 = (function (){var statearr_24510 = state_24445;(statearr_24510[(13)] = inst_24327);
(statearr_24510[(15)] = inst_24328);
(statearr_24510[(16)] = inst_24329);
(statearr_24510[(17)] = inst_24326);
return statearr_24510;
})();var statearr_24511_24578 = state_24445__$1;(statearr_24511_24578[(2)] = null);
(statearr_24511_24578[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (14)))
{var state_24445__$1 = state_24445;var statearr_24512_24579 = state_24445__$1;(statearr_24512_24579[(2)] = null);
(statearr_24512_24579[(1)] = (15));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (45)))
{var inst_24435 = (state_24445[(2)]);var state_24445__$1 = state_24445;var statearr_24513_24580 = state_24445__$1;(statearr_24513_24580[(2)] = inst_24435);
(statearr_24513_24580[(1)] = (44));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (26)))
{var inst_24377 = (state_24445[(29)]);var inst_24431 = (state_24445[(2)]);var inst_24432 = cljs.core.seq(inst_24377);var state_24445__$1 = (function (){var statearr_24514 = state_24445;(statearr_24514[(31)] = inst_24431);
return statearr_24514;
})();if(inst_24432)
{var statearr_24515_24581 = state_24445__$1;(statearr_24515_24581[(1)] = (42));
} else
{var statearr_24516_24582 = state_24445__$1;(statearr_24516_24582[(1)] = (43));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (16)))
{var inst_24346 = (state_24445[(7)]);var inst_24348 = cljs.core.chunked_seq_QMARK_(inst_24346);var state_24445__$1 = state_24445;if(inst_24348)
{var statearr_24517_24583 = state_24445__$1;(statearr_24517_24583[(1)] = (19));
} else
{var statearr_24518_24584 = state_24445__$1;(statearr_24518_24584[(1)] = (20));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (38)))
{var inst_24424 = (state_24445[(2)]);var state_24445__$1 = state_24445;var statearr_24519_24585 = state_24445__$1;(statearr_24519_24585[(2)] = inst_24424);
(statearr_24519_24585[(1)] = (35));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (30)))
{var state_24445__$1 = state_24445;var statearr_24520_24586 = state_24445__$1;(statearr_24520_24586[(2)] = null);
(statearr_24520_24586[(1)] = (32));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (10)))
{var inst_24327 = (state_24445[(13)]);var inst_24329 = (state_24445[(16)]);var inst_24335 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24327,inst_24329);var inst_24336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24335,(0),null);var inst_24337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24335,(1),null);var state_24445__$1 = (function (){var statearr_24521 = state_24445;(statearr_24521[(26)] = inst_24336);
return statearr_24521;
})();if(cljs.core.truth_(inst_24337))
{var statearr_24522_24587 = state_24445__$1;(statearr_24522_24587[(1)] = (13));
} else
{var statearr_24523_24588 = state_24445__$1;(statearr_24523_24588[(1)] = (14));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (18)))
{var inst_24370 = (state_24445[(2)]);var state_24445__$1 = state_24445;var statearr_24524_24589 = state_24445__$1;(statearr_24524_24589[(2)] = inst_24370);
(statearr_24524_24589[(1)] = (12));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (42)))
{var state_24445__$1 = state_24445;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24445__$1,(45),dchan);
} else
{if((state_val_24446 === (37)))
{var inst_24317 = (state_24445[(12)]);var inst_24413 = (state_24445[(23)]);var inst_24404 = (state_24445[(25)]);var inst_24413__$1 = cljs.core.first(inst_24404);var inst_24414 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24413__$1,inst_24317,done);var state_24445__$1 = (function (){var statearr_24525 = state_24445;(statearr_24525[(23)] = inst_24413__$1);
return statearr_24525;
})();if(cljs.core.truth_(inst_24414))
{var statearr_24526_24590 = state_24445__$1;(statearr_24526_24590[(1)] = (39));
} else
{var statearr_24527_24591 = state_24445__$1;(statearr_24527_24591[(1)] = (40));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24446 === (8)))
{var inst_24328 = (state_24445[(15)]);var inst_24329 = (state_24445[(16)]);var inst_24331 = (inst_24329 < inst_24328);var inst_24332 = inst_24331;var state_24445__$1 = state_24445;if(cljs.core.truth_(inst_24332))
{var statearr_24528_24592 = state_24445__$1;(statearr_24528_24592[(1)] = (10));
} else
{var statearr_24529_24593 = state_24445__$1;(statearr_24529_24593[(1)] = (11));
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
});})(c__12271__auto___24539,cs,m,dchan,dctr,done))
;return ((function (switch__12256__auto__,c__12271__auto___24539,cs,m,dchan,dctr,done){
return (function() {
var state_machine__12257__auto__ = null;
var state_machine__12257__auto____0 = (function (){var statearr_24533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24533[(0)] = state_machine__12257__auto__);
(statearr_24533[(1)] = (1));
return statearr_24533;
});
var state_machine__12257__auto____1 = (function (state_24445){while(true){
var ret_value__12258__auto__ = (function (){try{while(true){
var result__12259__auto__ = switch__12256__auto__(state_24445);if(cljs.core.keyword_identical_QMARK_(result__12259__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12259__auto__;
}
break;
}
}catch (e24534){if((e24534 instanceof Object))
{var ex__12260__auto__ = e24534;var statearr_24535_24594 = state_24445;(statearr_24535_24594[(5)] = ex__12260__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24445);
return cljs.core.constant$keyword$18;
} else
{throw e24534;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12258__auto__,cljs.core.constant$keyword$18))
{{
var G__24595 = state_24445;
state_24445 = G__24595;
continue;
}
} else
{return ret_value__12258__auto__;
}
break;
}
});
state_machine__12257__auto__ = function(state_24445){
switch(arguments.length){
case 0:
return state_machine__12257__auto____0.call(this);
case 1:
return state_machine__12257__auto____1.call(this,state_24445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12257__auto____0;
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12257__auto____1;
return state_machine__12257__auto__;
})()
;})(switch__12256__auto__,c__12271__auto___24539,cs,m,dchan,dctr,done))
})();var state__12273__auto__ = (function (){var statearr_24536 = (function (){return (f__12272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12272__auto__.cljs$core$IFn$_invoke$arity$0() : f__12272__auto__.call(null));
})();(statearr_24536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12271__auto___24539);
return statearr_24536;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12273__auto__);
});})(c__12271__auto___24539,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj24600 = {};return obj24600;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3657__auto__ = m;if(and__3657__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3657__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4305__auto__ = (((m == null))?null:m);return (function (){var or__3669__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__24604 = x__4305__auto__;return goog.typeOf(G__24604);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3657__auto__ = m;if(and__3657__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3657__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4305__auto__ = (((m == null))?null:m);return (function (){var or__3669__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__24608 = x__4305__auto__;return goog.typeOf(G__24608);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3657__auto__ = m;if(and__3657__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3657__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4305__auto__ = (((m == null))?null:m);return (function (){var or__3669__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__24612 = x__4305__auto__;return goog.typeOf(G__24612);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3657__auto__ = m;if(and__3657__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3657__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4305__auto__ = (((m == null))?null:m);return (function (){var or__3669__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__24616 = x__4305__auto__;return goog.typeOf(G__24616);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3657__auto__ = m;if(and__3657__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3657__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4305__auto__ = (((m == null))?null:m);return (function (){var or__3669__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__24620 = x__4305__auto__;return goog.typeOf(G__24620);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = (function (){var G__24754 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24754) : cljs.core.atom.call(null,G__24754));
})();var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,null,cljs.core.constant$keyword$26,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$27);var solo_mode = (function (){var G__24755 = cljs.core.constant$keyword$26;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24755) : cljs.core.atom.call(null,G__24755));
})();var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((function (){var G__24756 = v;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__24756) : attr.call(null,G__24756));
})()))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = (function (){var G__24757 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24757) : cljs.core.deref.call(null,G__24757));
})();var mode = (function (){var G__24758 = solo_mode;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24758) : cljs.core.deref.call(null,G__24758));
})();var solos = pick(cljs.core.constant$keyword$27,chs);var pauses = pick(cljs.core.constant$keyword$25,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$28,solos,cljs.core.constant$keyword$29,pick(cljs.core.constant$keyword$26,chs),cljs.core.constant$keyword$30,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$25)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t24759 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24759 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24760){
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
this.meta24760 = meta24760;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24759.cljs$lang$type = true;
cljs.core.async.t24759.cljs$lang$ctorStr = "cljs.core.async/t24759";
cljs.core.async.t24759.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cljs.core.async/t24759");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24759.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24759.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24759.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24759.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;var G__24762_24887 = self__.cs;var G__24763_24888 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24762_24887,G__24763_24888) : cljs.core.reset_BANG_.call(null,G__24762_24887,G__24763_24888));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24759.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24759.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__24764 = mode;return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__24764) : self__.solo_modes.call(null,G__24764));
})()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
var G__24765_24889 = self__.solo_mode;var G__24766_24890 = mode;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24765_24889,G__24766_24890) : cljs.core.reset_BANG_.call(null,G__24765_24889,G__24766_24890));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24759.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24759.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24759.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24761){var self__ = this;
var _24761__$1 = this;return self__.meta24760;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24761,meta24760__$1){var self__ = this;
var _24761__$1 = this;return (new cljs.core.async.t24759(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24760__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24759 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24759(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24760){return (new cljs.core.async.t24759(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24760));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24759(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__12271__auto___24891 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12271__auto___24891,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__12272__auto__ = (function (){var switch__12256__auto__ = ((function (c__12271__auto___24891,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24838){var state_val_24839 = (state_24838[(1)]);if((state_val_24839 === (7)))
{var inst_24780 = (state_24838[(7)]);var inst_24785 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24780);var state_24838__$1 = state_24838;var statearr_24840_24892 = state_24838__$1;(statearr_24840_24892[(2)] = inst_24785);
(statearr_24840_24892[(1)] = (9));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24839 === (20)))
{var inst_24795 = (state_24838[(8)]);var state_24838__$1 = state_24838;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24838__$1,(23),out,inst_24795);
} else
{if((state_val_24839 === (1)))
{var inst_24770 = (state_24838[(9)]);var inst_24770__$1 = calc_state();var inst_24771 = cljs.core.seq_QMARK_(inst_24770__$1);var state_24838__$1 = (function (){var statearr_24841 = state_24838;(statearr_24841[(9)] = inst_24770__$1);
return statearr_24841;
})();if(inst_24771)
{var statearr_24842_24893 = state_24838__$1;(statearr_24842_24893[(1)] = (2));
} else
{var statearr_24843_24894 = state_24838__$1;(statearr_24843_24894[(1)] = (3));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24839 === (24)))
{var inst_24788 = (state_24838[(10)]);var inst_24780 = inst_24788;var state_24838__$1 = (function (){var statearr_24844 = state_24838;(statearr_24844[(7)] = inst_24780);
return statearr_24844;
})();var statearr_24845_24895 = state_24838__$1;(statearr_24845_24895[(2)] = null);
(statearr_24845_24895[(1)] = (5));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24839 === (4)))
{var inst_24770 = (state_24838[(9)]);var inst_24776 = (state_24838[(2)]);var inst_24777 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24776,cljs.core.constant$keyword$30);var inst_24778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24776,cljs.core.constant$keyword$29);var inst_24779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24776,cljs.core.constant$keyword$28);var inst_24780 = inst_24770;var state_24838__$1 = (function (){var statearr_24846 = state_24838;(statearr_24846[(11)] = inst_24778);
(statearr_24846[(7)] = inst_24780);
(statearr_24846[(12)] = inst_24777);
(statearr_24846[(13)] = inst_24779);
return statearr_24846;
})();var statearr_24847_24896 = state_24838__$1;(statearr_24847_24896[(2)] = null);
(statearr_24847_24896[(1)] = (5));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24839 === (15)))
{var state_24838__$1 = state_24838;var statearr_24848_24897 = state_24838__$1;(statearr_24848_24897[(2)] = null);
(statearr_24848_24897[(1)] = (16));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24839 === (21)))
{var inst_24788 = (state_24838[(10)]);var inst_24780 = inst_24788;var state_24838__$1 = (function (){var statearr_24849 = state_24838;(statearr_24849[(7)] = inst_24780);
return statearr_24849;
})();var statearr_24850_24898 = state_24838__$1;(statearr_24850_24898[(2)] = null);
(statearr_24850_24898[(1)] = (5));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24839 === (13)))
{var inst_24834 = (state_24838[(2)]);var state_24838__$1 = state_24838;var statearr_24851_24899 = state_24838__$1;(statearr_24851_24899[(2)] = inst_24834);
(statearr_24851_24899[(1)] = (6));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24839 === (22)))
{var inst_24832 = (state_24838[(2)]);var state_24838__$1 = state_24838;var statearr_24852_24900 = state_24838__$1;(statearr_24852_24900[(2)] = inst_24832);
(statearr_24852_24900[(1)] = (13));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24839 === (6)))
{var inst_24836 = (state_24838[(2)]);var state_24838__$1 = state_24838;return cljs.core.async.impl.ioc_helpers.return_chan(state_24838__$1,inst_24836);
} else
{if((state_val_24839 === (25)))
{var state_24838__$1 = state_24838;var statearr_24853_24901 = state_24838__$1;(statearr_24853_24901[(2)] = null);
(statearr_24853_24901[(1)] = (26));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24839 === (17)))
{var inst_24811 = (state_24838[(14)]);var state_24838__$1 = state_24838;var statearr_24854_24902 = state_24838__$1;(statearr_24854_24902[(2)] = inst_24811);
(statearr_24854_24902[(1)] = (19));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24839 === (3)))
{var inst_24770 = (state_24838[(9)]);var state_24838__$1 = state_24838;var statearr_24855_24903 = state_24838__$1;(statearr_24855_24903[(2)] = inst_24770);
(statearr_24855_24903[(1)] = (4));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24839 === (12)))
{var inst_24791 = (state_24838[(15)]);var inst_24796 = (state_24838[(16)]);var inst_24811 = (state_24838[(14)]);var inst_24811__$1 = (function (){var G__24856 = inst_24796;return (inst_24791.cljs$core$IFn$_invoke$arity$1 ? inst_24791.cljs$core$IFn$_invoke$arity$1(G__24856) : inst_24791.call(null,G__24856));
})();var state_24838__$1 = (function (){var statearr_24857 = state_24838;(statearr_24857[(14)] = inst_24811__$1);
return statearr_24857;
})();if(cljs.core.truth_(inst_24811__$1))
{var statearr_24858_24904 = state_24838__$1;(statearr_24858_24904[(1)] = (17));
} else
{var statearr_24859_24905 = state_24838__$1;(statearr_24859_24905[(1)] = (18));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24839 === (2)))
{var inst_24770 = (state_24838[(9)]);var inst_24773 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24770);var state_24838__$1 = state_24838;var statearr_24860_24906 = state_24838__$1;(statearr_24860_24906[(2)] = inst_24773);
(statearr_24860_24906[(1)] = (4));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24839 === (23)))
{var inst_24823 = (state_24838[(2)]);var state_24838__$1 = state_24838;if(cljs.core.truth_(inst_24823))
{var statearr_24861_24907 = state_24838__$1;(statearr_24861_24907[(1)] = (24));
} else
{var statearr_24862_24908 = state_24838__$1;(statearr_24862_24908[(1)] = (25));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24839 === (19)))
{var inst_24820 = (state_24838[(2)]);var state_24838__$1 = state_24838;if(cljs.core.truth_(inst_24820))
{var statearr_24863_24909 = state_24838__$1;(statearr_24863_24909[(1)] = (20));
} else
{var statearr_24864_24910 = state_24838__$1;(statearr_24864_24910[(1)] = (21));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24839 === (11)))
{var inst_24795 = (state_24838[(8)]);var inst_24801 = (inst_24795 == null);var state_24838__$1 = state_24838;if(cljs.core.truth_(inst_24801))
{var statearr_24865_24911 = state_24838__$1;(statearr_24865_24911[(1)] = (14));
} else
{var statearr_24866_24912 = state_24838__$1;(statearr_24866_24912[(1)] = (15));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24839 === (9)))
{var inst_24788 = (state_24838[(10)]);var inst_24788__$1 = (state_24838[(2)]);var inst_24789 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24788__$1,cljs.core.constant$keyword$30);var inst_24790 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24788__$1,cljs.core.constant$keyword$29);var inst_24791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24788__$1,cljs.core.constant$keyword$28);var state_24838__$1 = (function (){var statearr_24867 = state_24838;(statearr_24867[(10)] = inst_24788__$1);
(statearr_24867[(15)] = inst_24791);
(statearr_24867[(17)] = inst_24790);
return statearr_24867;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_24838__$1,(10),inst_24789);
} else
{if((state_val_24839 === (5)))
{var inst_24780 = (state_24838[(7)]);var inst_24783 = cljs.core.seq_QMARK_(inst_24780);var state_24838__$1 = state_24838;if(inst_24783)
{var statearr_24868_24913 = state_24838__$1;(statearr_24868_24913[(1)] = (7));
} else
{var statearr_24869_24914 = state_24838__$1;(statearr_24869_24914[(1)] = (8));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24839 === (14)))
{var inst_24796 = (state_24838[(16)]);var inst_24803 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24796);var state_24838__$1 = state_24838;var statearr_24870_24915 = state_24838__$1;(statearr_24870_24915[(2)] = inst_24803);
(statearr_24870_24915[(1)] = (16));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24839 === (26)))
{var inst_24828 = (state_24838[(2)]);var state_24838__$1 = state_24838;var statearr_24871_24916 = state_24838__$1;(statearr_24871_24916[(2)] = inst_24828);
(statearr_24871_24916[(1)] = (22));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24839 === (16)))
{var inst_24806 = (state_24838[(2)]);var inst_24807 = calc_state();var inst_24780 = inst_24807;var state_24838__$1 = (function (){var statearr_24872 = state_24838;(statearr_24872[(7)] = inst_24780);
(statearr_24872[(18)] = inst_24806);
return statearr_24872;
})();var statearr_24873_24917 = state_24838__$1;(statearr_24873_24917[(2)] = null);
(statearr_24873_24917[(1)] = (5));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24839 === (10)))
{var inst_24795 = (state_24838[(8)]);var inst_24796 = (state_24838[(16)]);var inst_24794 = (state_24838[(2)]);var inst_24795__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24794,(0),null);var inst_24796__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24794,(1),null);var inst_24797 = (inst_24795__$1 == null);var inst_24798 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24796__$1,change);var inst_24799 = (inst_24797) || (inst_24798);var state_24838__$1 = (function (){var statearr_24874 = state_24838;(statearr_24874[(8)] = inst_24795__$1);
(statearr_24874[(16)] = inst_24796__$1);
return statearr_24874;
})();if(cljs.core.truth_(inst_24799))
{var statearr_24875_24918 = state_24838__$1;(statearr_24875_24918[(1)] = (11));
} else
{var statearr_24876_24919 = state_24838__$1;(statearr_24876_24919[(1)] = (12));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_24839 === (18)))
{var inst_24791 = (state_24838[(15)]);var inst_24796 = (state_24838[(16)]);var inst_24790 = (state_24838[(17)]);var inst_24815 = cljs.core.empty_QMARK_(inst_24791);var inst_24816 = (function (){var G__24877 = inst_24796;return (inst_24790.cljs$core$IFn$_invoke$arity$1 ? inst_24790.cljs$core$IFn$_invoke$arity$1(G__24877) : inst_24790.call(null,G__24877));
})();var inst_24817 = cljs.core.not(inst_24816);var inst_24818 = (inst_24815) && (inst_24817);var state_24838__$1 = state_24838;var statearr_24878_24920 = state_24838__$1;(statearr_24878_24920[(2)] = inst_24818);
(statearr_24878_24920[(1)] = (19));
return cljs.core.constant$keyword$18;
} else
{if((state_val_24839 === (8)))
{var inst_24780 = (state_24838[(7)]);var state_24838__$1 = state_24838;var statearr_24879_24921 = state_24838__$1;(statearr_24879_24921[(2)] = inst_24780);
(statearr_24879_24921[(1)] = (9));
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
});})(c__12271__auto___24891,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__12256__auto__,c__12271__auto___24891,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__12257__auto__ = null;
var state_machine__12257__auto____0 = (function (){var statearr_24883 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24883[(0)] = state_machine__12257__auto__);
(statearr_24883[(1)] = (1));
return statearr_24883;
});
var state_machine__12257__auto____1 = (function (state_24838){while(true){
var ret_value__12258__auto__ = (function (){try{while(true){
var result__12259__auto__ = switch__12256__auto__(state_24838);if(cljs.core.keyword_identical_QMARK_(result__12259__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12259__auto__;
}
break;
}
}catch (e24884){if((e24884 instanceof Object))
{var ex__12260__auto__ = e24884;var statearr_24885_24922 = state_24838;(statearr_24885_24922[(5)] = ex__12260__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24838);
return cljs.core.constant$keyword$18;
} else
{throw e24884;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12258__auto__,cljs.core.constant$keyword$18))
{{
var G__24923 = state_24838;
state_24838 = G__24923;
continue;
}
} else
{return ret_value__12258__auto__;
}
break;
}
});
state_machine__12257__auto__ = function(state_24838){
switch(arguments.length){
case 0:
return state_machine__12257__auto____0.call(this);
case 1:
return state_machine__12257__auto____1.call(this,state_24838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12257__auto____0;
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12257__auto____1;
return state_machine__12257__auto__;
})()
;})(switch__12256__auto__,c__12271__auto___24891,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__12273__auto__ = (function (){var statearr_24886 = (function (){return (f__12272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12272__auto__.cljs$core$IFn$_invoke$arity$0() : f__12272__auto__.call(null));
})();(statearr_24886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12271__auto___24891);
return statearr_24886;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12273__auto__);
});})(c__12271__auto___24891,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj24925 = {};return obj24925;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3657__auto__ = p;if(and__3657__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3657__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4305__auto__ = (((p == null))?null:p);return (function (){var or__3669__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__24929 = x__4305__auto__;return goog.typeOf(G__24929);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3657__auto__ = p;if(and__3657__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3657__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4305__auto__ = (((p == null))?null:p);return (function (){var or__3669__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__24933 = x__4305__auto__;return goog.typeOf(G__24933);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3657__auto__ = p;if(and__3657__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3657__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4305__auto__ = (((p == null))?null:p);return (function (){var or__3669__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__24939 = x__4305__auto__;return goog.typeOf(G__24939);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3657__auto__ = p;if(and__3657__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3657__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4305__auto__ = (((p == null))?null:p);return (function (){var or__3669__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__24941 = x__4305__auto__;return goog.typeOf(G__24941);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
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
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = (function (){var G__25072 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25072) : cljs.core.atom.call(null,G__25072));
})();var ensure_mult = ((function (mults){
return (function (topic){var or__3669__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__25074 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25074) : cljs.core.deref.call(null,G__25074));
})(),topic);if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3669__auto__,mults){
return (function (p1__24942_SHARP_){if(cljs.core.truth_((function (){var G__25075 = topic;return (p1__24942_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24942_SHARP_.cljs$core$IFn$_invoke$arity$1(G__25075) : p1__24942_SHARP_.call(null,G__25075));
})()))
{return p1__24942_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24942_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__25076 = topic;return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__25076) : buf_fn.call(null,G__25076));
})())));
}
});})(or__3669__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25077 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25077 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25078){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25078 = meta25078;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25077.cljs$lang$type = true;
cljs.core.async.t25077.cljs$lang$ctorStr = "cljs.core.async/t25077";
cljs.core.async.t25077.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cljs.core.async/t25077");
});})(mults,ensure_mult))
;
cljs.core.async.t25077.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25077.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (function (){var G__25080 = topic;return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__25080) : self__.ensure_mult.call(null,G__25080));
})();return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25077.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__25081 = self__.mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25081) : cljs.core.deref.call(null,G__25081));
})(),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25077.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;var G__25082 = self__.mults;var G__25083 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25082,G__25083) : cljs.core.reset_BANG_.call(null,G__25082,G__25083));
});})(mults,ensure_mult))
;
cljs.core.async.t25077.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25077.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25077.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25077.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25079){var self__ = this;
var _25079__$1 = this;return self__.meta25078;
});})(mults,ensure_mult))
;
cljs.core.async.t25077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25079,meta25078__$1){var self__ = this;
var _25079__$1 = this;return (new cljs.core.async.t25077(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25078__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25077 = ((function (mults,ensure_mult){
return (function __GT_t25077(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25078){return (new cljs.core.async.t25077(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25078));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25077(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12271__auto___25198 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12271__auto___25198,mults,ensure_mult,p){
return (function (){var f__12272__auto__ = (function (){var switch__12256__auto__ = ((function (c__12271__auto___25198,mults,ensure_mult,p){
return (function (state_25151){var state_val_25152 = (state_25151[(1)]);if((state_val_25152 === (7)))
{var inst_25147 = (state_25151[(2)]);var state_25151__$1 = state_25151;var statearr_25153_25199 = state_25151__$1;(statearr_25153_25199[(2)] = inst_25147);
(statearr_25153_25199[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25152 === (20)))
{var state_25151__$1 = state_25151;var statearr_25154_25200 = state_25151__$1;(statearr_25154_25200[(2)] = null);
(statearr_25154_25200[(1)] = (22));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25152 === (1)))
{var state_25151__$1 = state_25151;var statearr_25155_25201 = state_25151__$1;(statearr_25155_25201[(2)] = null);
(statearr_25155_25201[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25152 === (4)))
{var inst_25086 = (state_25151[(7)]);var inst_25086__$1 = (state_25151[(2)]);var inst_25087 = (inst_25086__$1 == null);var state_25151__$1 = (function (){var statearr_25156 = state_25151;(statearr_25156[(7)] = inst_25086__$1);
return statearr_25156;
})();if(cljs.core.truth_(inst_25087))
{var statearr_25157_25202 = state_25151__$1;(statearr_25157_25202[(1)] = (5));
} else
{var statearr_25158_25203 = state_25151__$1;(statearr_25158_25203[(1)] = (6));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25152 === (15)))
{var inst_25128 = (state_25151[(2)]);var state_25151__$1 = state_25151;var statearr_25159_25204 = state_25151__$1;(statearr_25159_25204[(2)] = inst_25128);
(statearr_25159_25204[(1)] = (12));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25152 === (21)))
{var inst_25134 = (state_25151[(8)]);var inst_25142 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25134);var state_25151__$1 = state_25151;var statearr_25160_25205 = state_25151__$1;(statearr_25160_25205[(2)] = inst_25142);
(statearr_25160_25205[(1)] = (22));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25152 === (13)))
{var inst_25110 = (state_25151[(9)]);var inst_25112 = cljs.core.chunked_seq_QMARK_(inst_25110);var state_25151__$1 = state_25151;if(inst_25112)
{var statearr_25161_25206 = state_25151__$1;(statearr_25161_25206[(1)] = (16));
} else
{var statearr_25162_25207 = state_25151__$1;(statearr_25162_25207[(1)] = (17));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25152 === (22)))
{var inst_25144 = (state_25151[(2)]);var state_25151__$1 = (function (){var statearr_25163 = state_25151;(statearr_25163[(10)] = inst_25144);
return statearr_25163;
})();var statearr_25164_25208 = state_25151__$1;(statearr_25164_25208[(2)] = null);
(statearr_25164_25208[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25152 === (6)))
{var inst_25086 = (state_25151[(7)]);var inst_25134 = (state_25151[(8)]);var inst_25134__$1 = (function (){var G__25165 = inst_25086;return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__25165) : topic_fn.call(null,G__25165));
})();var inst_25135 = (function (){var G__25166 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25166) : cljs.core.deref.call(null,G__25166));
})();var inst_25136 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25135,inst_25134__$1);var inst_25137 = cljs.core.async.muxch_STAR_(inst_25136);var state_25151__$1 = (function (){var statearr_25167 = state_25151;(statearr_25167[(8)] = inst_25134__$1);
return statearr_25167;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25151__$1,(19),inst_25137,inst_25086);
} else
{if((state_val_25152 === (17)))
{var inst_25110 = (state_25151[(9)]);var inst_25119 = cljs.core.first(inst_25110);var inst_25120 = cljs.core.async.muxch_STAR_(inst_25119);var inst_25121 = cljs.core.async.close_BANG_(inst_25120);var inst_25122 = cljs.core.next(inst_25110);var inst_25096 = inst_25122;var inst_25097 = null;var inst_25098 = (0);var inst_25099 = (0);var state_25151__$1 = (function (){var statearr_25168 = state_25151;(statearr_25168[(11)] = inst_25121);
(statearr_25168[(12)] = inst_25097);
(statearr_25168[(13)] = inst_25098);
(statearr_25168[(14)] = inst_25099);
(statearr_25168[(15)] = inst_25096);
return statearr_25168;
})();var statearr_25169_25209 = state_25151__$1;(statearr_25169_25209[(2)] = null);
(statearr_25169_25209[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25152 === (3)))
{var inst_25149 = (state_25151[(2)]);var state_25151__$1 = state_25151;return cljs.core.async.impl.ioc_helpers.return_chan(state_25151__$1,inst_25149);
} else
{if((state_val_25152 === (12)))
{var inst_25130 = (state_25151[(2)]);var state_25151__$1 = state_25151;var statearr_25170_25210 = state_25151__$1;(statearr_25170_25210[(2)] = inst_25130);
(statearr_25170_25210[(1)] = (9));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25152 === (2)))
{var state_25151__$1 = state_25151;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25151__$1,(4),ch);
} else
{if((state_val_25152 === (19)))
{var inst_25139 = (state_25151[(2)]);var state_25151__$1 = state_25151;if(cljs.core.truth_(inst_25139))
{var statearr_25171_25211 = state_25151__$1;(statearr_25171_25211[(1)] = (20));
} else
{var statearr_25172_25212 = state_25151__$1;(statearr_25172_25212[(1)] = (21));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25152 === (11)))
{var inst_25110 = (state_25151[(9)]);var inst_25096 = (state_25151[(15)]);var inst_25110__$1 = cljs.core.seq(inst_25096);var state_25151__$1 = (function (){var statearr_25173 = state_25151;(statearr_25173[(9)] = inst_25110__$1);
return statearr_25173;
})();if(inst_25110__$1)
{var statearr_25174_25213 = state_25151__$1;(statearr_25174_25213[(1)] = (13));
} else
{var statearr_25175_25214 = state_25151__$1;(statearr_25175_25214[(1)] = (14));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25152 === (9)))
{var inst_25132 = (state_25151[(2)]);var state_25151__$1 = state_25151;var statearr_25176_25215 = state_25151__$1;(statearr_25176_25215[(2)] = inst_25132);
(statearr_25176_25215[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25152 === (5)))
{var inst_25093 = (function (){var G__25177 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25177) : cljs.core.deref.call(null,G__25177));
})();var inst_25094 = cljs.core.vals(inst_25093);var inst_25095 = cljs.core.seq(inst_25094);var inst_25096 = inst_25095;var inst_25097 = null;var inst_25098 = (0);var inst_25099 = (0);var state_25151__$1 = (function (){var statearr_25178 = state_25151;(statearr_25178[(12)] = inst_25097);
(statearr_25178[(13)] = inst_25098);
(statearr_25178[(14)] = inst_25099);
(statearr_25178[(15)] = inst_25096);
return statearr_25178;
})();var statearr_25179_25216 = state_25151__$1;(statearr_25179_25216[(2)] = null);
(statearr_25179_25216[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25152 === (14)))
{var state_25151__$1 = state_25151;var statearr_25183_25217 = state_25151__$1;(statearr_25183_25217[(2)] = null);
(statearr_25183_25217[(1)] = (15));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25152 === (16)))
{var inst_25110 = (state_25151[(9)]);var inst_25114 = cljs.core.chunk_first(inst_25110);var inst_25115 = cljs.core.chunk_rest(inst_25110);var inst_25116 = cljs.core.count(inst_25114);var inst_25096 = inst_25115;var inst_25097 = inst_25114;var inst_25098 = inst_25116;var inst_25099 = (0);var state_25151__$1 = (function (){var statearr_25184 = state_25151;(statearr_25184[(12)] = inst_25097);
(statearr_25184[(13)] = inst_25098);
(statearr_25184[(14)] = inst_25099);
(statearr_25184[(15)] = inst_25096);
return statearr_25184;
})();var statearr_25185_25218 = state_25151__$1;(statearr_25185_25218[(2)] = null);
(statearr_25185_25218[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25152 === (10)))
{var inst_25097 = (state_25151[(12)]);var inst_25098 = (state_25151[(13)]);var inst_25099 = (state_25151[(14)]);var inst_25096 = (state_25151[(15)]);var inst_25104 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25097,inst_25099);var inst_25105 = cljs.core.async.muxch_STAR_(inst_25104);var inst_25106 = cljs.core.async.close_BANG_(inst_25105);var inst_25107 = (inst_25099 + (1));var tmp25180 = inst_25097;var tmp25181 = inst_25098;var tmp25182 = inst_25096;var inst_25096__$1 = tmp25182;var inst_25097__$1 = tmp25180;var inst_25098__$1 = tmp25181;var inst_25099__$1 = inst_25107;var state_25151__$1 = (function (){var statearr_25186 = state_25151;(statearr_25186[(16)] = inst_25106);
(statearr_25186[(12)] = inst_25097__$1);
(statearr_25186[(13)] = inst_25098__$1);
(statearr_25186[(14)] = inst_25099__$1);
(statearr_25186[(15)] = inst_25096__$1);
return statearr_25186;
})();var statearr_25187_25219 = state_25151__$1;(statearr_25187_25219[(2)] = null);
(statearr_25187_25219[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25152 === (18)))
{var inst_25125 = (state_25151[(2)]);var state_25151__$1 = state_25151;var statearr_25188_25220 = state_25151__$1;(statearr_25188_25220[(2)] = inst_25125);
(statearr_25188_25220[(1)] = (15));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25152 === (8)))
{var inst_25098 = (state_25151[(13)]);var inst_25099 = (state_25151[(14)]);var inst_25101 = (inst_25099 < inst_25098);var inst_25102 = inst_25101;var state_25151__$1 = state_25151;if(cljs.core.truth_(inst_25102))
{var statearr_25189_25221 = state_25151__$1;(statearr_25189_25221[(1)] = (10));
} else
{var statearr_25190_25222 = state_25151__$1;(statearr_25190_25222[(1)] = (11));
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
});})(c__12271__auto___25198,mults,ensure_mult,p))
;return ((function (switch__12256__auto__,c__12271__auto___25198,mults,ensure_mult,p){
return (function() {
var state_machine__12257__auto__ = null;
var state_machine__12257__auto____0 = (function (){var statearr_25194 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25194[(0)] = state_machine__12257__auto__);
(statearr_25194[(1)] = (1));
return statearr_25194;
});
var state_machine__12257__auto____1 = (function (state_25151){while(true){
var ret_value__12258__auto__ = (function (){try{while(true){
var result__12259__auto__ = switch__12256__auto__(state_25151);if(cljs.core.keyword_identical_QMARK_(result__12259__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12259__auto__;
}
break;
}
}catch (e25195){if((e25195 instanceof Object))
{var ex__12260__auto__ = e25195;var statearr_25196_25223 = state_25151;(statearr_25196_25223[(5)] = ex__12260__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25151);
return cljs.core.constant$keyword$18;
} else
{throw e25195;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12258__auto__,cljs.core.constant$keyword$18))
{{
var G__25224 = state_25151;
state_25151 = G__25224;
continue;
}
} else
{return ret_value__12258__auto__;
}
break;
}
});
state_machine__12257__auto__ = function(state_25151){
switch(arguments.length){
case 0:
return state_machine__12257__auto____0.call(this);
case 1:
return state_machine__12257__auto____1.call(this,state_25151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12257__auto____0;
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12257__auto____1;
return state_machine__12257__auto__;
})()
;})(switch__12256__auto__,c__12271__auto___25198,mults,ensure_mult,p))
})();var state__12273__auto__ = (function (){var statearr_25197 = (function (){return (f__12272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12272__auto__.cljs$core$IFn$_invoke$arity$0() : f__12272__auto__.call(null));
})();(statearr_25197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12271__auto___25198);
return statearr_25197;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12273__auto__);
});})(c__12271__auto___25198,mults,ensure_mult,p))
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__25305 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25305) : cljs.core.atom.call(null,G__25305));
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__12271__auto___25378 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12271__auto___25378,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__12272__auto__ = (function (){var switch__12256__auto__ = ((function (c__12271__auto___25378,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25344){var state_val_25345 = (state_25344[(1)]);if((state_val_25345 === (7)))
{var state_25344__$1 = state_25344;var statearr_25346_25379 = state_25344__$1;(statearr_25346_25379[(2)] = null);
(statearr_25346_25379[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25345 === (1)))
{var state_25344__$1 = state_25344;var statearr_25347_25380 = state_25344__$1;(statearr_25347_25380[(2)] = null);
(statearr_25347_25380[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25345 === (4)))
{var inst_25308 = (state_25344[(7)]);var inst_25310 = (inst_25308 < cnt);var state_25344__$1 = state_25344;if(cljs.core.truth_(inst_25310))
{var statearr_25348_25381 = state_25344__$1;(statearr_25348_25381[(1)] = (6));
} else
{var statearr_25349_25382 = state_25344__$1;(statearr_25349_25382[(1)] = (7));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25345 === (15)))
{var inst_25340 = (state_25344[(2)]);var state_25344__$1 = state_25344;var statearr_25350_25383 = state_25344__$1;(statearr_25350_25383[(2)] = inst_25340);
(statearr_25350_25383[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25345 === (13)))
{var inst_25333 = cljs.core.async.close_BANG_(out);var state_25344__$1 = state_25344;var statearr_25351_25384 = state_25344__$1;(statearr_25351_25384[(2)] = inst_25333);
(statearr_25351_25384[(1)] = (15));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25345 === (6)))
{var state_25344__$1 = state_25344;var statearr_25352_25385 = state_25344__$1;(statearr_25352_25385[(2)] = null);
(statearr_25352_25385[(1)] = (11));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25345 === (3)))
{var inst_25342 = (state_25344[(2)]);var state_25344__$1 = state_25344;return cljs.core.async.impl.ioc_helpers.return_chan(state_25344__$1,inst_25342);
} else
{if((state_val_25345 === (12)))
{var inst_25330 = (state_25344[(8)]);var inst_25330__$1 = (state_25344[(2)]);var inst_25331 = cljs.core.some(cljs.core.nil_QMARK_,inst_25330__$1);var state_25344__$1 = (function (){var statearr_25353 = state_25344;(statearr_25353[(8)] = inst_25330__$1);
return statearr_25353;
})();if(cljs.core.truth_(inst_25331))
{var statearr_25354_25386 = state_25344__$1;(statearr_25354_25386[(1)] = (13));
} else
{var statearr_25355_25387 = state_25344__$1;(statearr_25355_25387[(1)] = (14));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25345 === (2)))
{var inst_25307 = (function (){var G__25356 = dctr;var G__25357 = cnt;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25356,G__25357) : cljs.core.reset_BANG_.call(null,G__25356,G__25357));
})();var inst_25308 = (0);var state_25344__$1 = (function (){var statearr_25358 = state_25344;(statearr_25358[(9)] = inst_25307);
(statearr_25358[(7)] = inst_25308);
return statearr_25358;
})();var statearr_25359_25388 = state_25344__$1;(statearr_25359_25388[(2)] = null);
(statearr_25359_25388[(1)] = (4));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25345 === (11)))
{var inst_25308 = (state_25344[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25344,(10),Object,null,(9));var inst_25317 = (function (){var G__25360 = inst_25308;return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__25360) : chs__$1.call(null,G__25360));
})();var inst_25318 = (function (){var G__25361 = inst_25308;return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__25361) : done.call(null,G__25361));
})();var inst_25319 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25317,inst_25318);var state_25344__$1 = state_25344;var statearr_25362_25389 = state_25344__$1;(statearr_25362_25389[(2)] = inst_25319);
cljs.core.async.impl.ioc_helpers.process_exception(state_25344__$1);
return cljs.core.constant$keyword$18;
} else
{if((state_val_25345 === (9)))
{var inst_25308 = (state_25344[(7)]);var inst_25321 = (state_25344[(2)]);var inst_25322 = (inst_25308 + (1));var inst_25308__$1 = inst_25322;var state_25344__$1 = (function (){var statearr_25363 = state_25344;(statearr_25363[(7)] = inst_25308__$1);
(statearr_25363[(10)] = inst_25321);
return statearr_25363;
})();var statearr_25364_25390 = state_25344__$1;(statearr_25364_25390[(2)] = null);
(statearr_25364_25390[(1)] = (4));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25345 === (5)))
{var inst_25328 = (state_25344[(2)]);var state_25344__$1 = (function (){var statearr_25365 = state_25344;(statearr_25365[(11)] = inst_25328);
return statearr_25365;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25344__$1,(12),dchan);
} else
{if((state_val_25345 === (14)))
{var inst_25330 = (state_25344[(8)]);var inst_25335 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_25330);var state_25344__$1 = state_25344;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25344__$1,(16),out,inst_25335);
} else
{if((state_val_25345 === (16)))
{var inst_25337 = (state_25344[(2)]);var state_25344__$1 = (function (){var statearr_25366 = state_25344;(statearr_25366[(12)] = inst_25337);
return statearr_25366;
})();var statearr_25367_25391 = state_25344__$1;(statearr_25367_25391[(2)] = null);
(statearr_25367_25391[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25345 === (10)))
{var inst_25312 = (state_25344[(2)]);var inst_25313 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_25344__$1 = (function (){var statearr_25368 = state_25344;(statearr_25368[(13)] = inst_25312);
return statearr_25368;
})();var statearr_25369_25392 = state_25344__$1;(statearr_25369_25392[(2)] = inst_25313);
cljs.core.async.impl.ioc_helpers.process_exception(state_25344__$1);
return cljs.core.constant$keyword$18;
} else
{if((state_val_25345 === (8)))
{var inst_25326 = (state_25344[(2)]);var state_25344__$1 = state_25344;var statearr_25370_25393 = state_25344__$1;(statearr_25370_25393[(2)] = inst_25326);
(statearr_25370_25393[(1)] = (5));
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
});})(c__12271__auto___25378,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__12256__auto__,c__12271__auto___25378,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__12257__auto__ = null;
var state_machine__12257__auto____0 = (function (){var statearr_25374 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25374[(0)] = state_machine__12257__auto__);
(statearr_25374[(1)] = (1));
return statearr_25374;
});
var state_machine__12257__auto____1 = (function (state_25344){while(true){
var ret_value__12258__auto__ = (function (){try{while(true){
var result__12259__auto__ = switch__12256__auto__(state_25344);if(cljs.core.keyword_identical_QMARK_(result__12259__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12259__auto__;
}
break;
}
}catch (e25375){if((e25375 instanceof Object))
{var ex__12260__auto__ = e25375;var statearr_25376_25394 = state_25344;(statearr_25376_25394[(5)] = ex__12260__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25344);
return cljs.core.constant$keyword$18;
} else
{throw e25375;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12258__auto__,cljs.core.constant$keyword$18))
{{
var G__25395 = state_25344;
state_25344 = G__25395;
continue;
}
} else
{return ret_value__12258__auto__;
}
break;
}
});
state_machine__12257__auto__ = function(state_25344){
switch(arguments.length){
case 0:
return state_machine__12257__auto____0.call(this);
case 1:
return state_machine__12257__auto____1.call(this,state_25344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12257__auto____0;
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12257__auto____1;
return state_machine__12257__auto__;
})()
;})(switch__12256__auto__,c__12271__auto___25378,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__12273__auto__ = (function (){var statearr_25377 = (function (){return (f__12272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12272__auto__.cljs$core$IFn$_invoke$arity$0() : f__12272__auto__.call(null));
})();(statearr_25377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12271__auto___25378);
return statearr_25377;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12273__auto__);
});})(c__12271__auto___25378,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12271__auto___25505 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12271__auto___25505,out){
return (function (){var f__12272__auto__ = (function (){var switch__12256__auto__ = ((function (c__12271__auto___25505,out){
return (function (state_25481){var state_val_25482 = (state_25481[(1)]);if((state_val_25482 === (7)))
{var inst_25461 = (state_25481[(7)]);var inst_25460 = (state_25481[(8)]);var inst_25460__$1 = (state_25481[(2)]);var inst_25461__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25460__$1,(0),null);var inst_25462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25460__$1,(1),null);var inst_25463 = (inst_25461__$1 == null);var state_25481__$1 = (function (){var statearr_25483 = state_25481;(statearr_25483[(7)] = inst_25461__$1);
(statearr_25483[(8)] = inst_25460__$1);
(statearr_25483[(9)] = inst_25462);
return statearr_25483;
})();if(cljs.core.truth_(inst_25463))
{var statearr_25484_25506 = state_25481__$1;(statearr_25484_25506[(1)] = (8));
} else
{var statearr_25485_25507 = state_25481__$1;(statearr_25485_25507[(1)] = (9));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25482 === (1)))
{var inst_25452 = cljs.core.vec(chs);var inst_25453 = inst_25452;var state_25481__$1 = (function (){var statearr_25486 = state_25481;(statearr_25486[(10)] = inst_25453);
return statearr_25486;
})();var statearr_25487_25508 = state_25481__$1;(statearr_25487_25508[(2)] = null);
(statearr_25487_25508[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25482 === (4)))
{var inst_25453 = (state_25481[(10)]);var state_25481__$1 = state_25481;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_25481__$1,(7),inst_25453);
} else
{if((state_val_25482 === (6)))
{var inst_25477 = (state_25481[(2)]);var state_25481__$1 = state_25481;var statearr_25488_25509 = state_25481__$1;(statearr_25488_25509[(2)] = inst_25477);
(statearr_25488_25509[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25482 === (3)))
{var inst_25479 = (state_25481[(2)]);var state_25481__$1 = state_25481;return cljs.core.async.impl.ioc_helpers.return_chan(state_25481__$1,inst_25479);
} else
{if((state_val_25482 === (2)))
{var inst_25453 = (state_25481[(10)]);var inst_25455 = cljs.core.count(inst_25453);var inst_25456 = (inst_25455 > (0));var state_25481__$1 = state_25481;if(cljs.core.truth_(inst_25456))
{var statearr_25490_25510 = state_25481__$1;(statearr_25490_25510[(1)] = (4));
} else
{var statearr_25491_25511 = state_25481__$1;(statearr_25491_25511[(1)] = (5));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25482 === (11)))
{var inst_25453 = (state_25481[(10)]);var inst_25470 = (state_25481[(2)]);var tmp25489 = inst_25453;var inst_25453__$1 = tmp25489;var state_25481__$1 = (function (){var statearr_25492 = state_25481;(statearr_25492[(11)] = inst_25470);
(statearr_25492[(10)] = inst_25453__$1);
return statearr_25492;
})();var statearr_25493_25512 = state_25481__$1;(statearr_25493_25512[(2)] = null);
(statearr_25493_25512[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25482 === (9)))
{var inst_25461 = (state_25481[(7)]);var state_25481__$1 = state_25481;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25481__$1,(11),out,inst_25461);
} else
{if((state_val_25482 === (5)))
{var inst_25475 = cljs.core.async.close_BANG_(out);var state_25481__$1 = state_25481;var statearr_25494_25513 = state_25481__$1;(statearr_25494_25513[(2)] = inst_25475);
(statearr_25494_25513[(1)] = (6));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25482 === (10)))
{var inst_25473 = (state_25481[(2)]);var state_25481__$1 = state_25481;var statearr_25495_25514 = state_25481__$1;(statearr_25495_25514[(2)] = inst_25473);
(statearr_25495_25514[(1)] = (6));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25482 === (8)))
{var inst_25461 = (state_25481[(7)]);var inst_25460 = (state_25481[(8)]);var inst_25462 = (state_25481[(9)]);var inst_25453 = (state_25481[(10)]);var inst_25465 = (function (){var c = inst_25462;var v = inst_25461;var vec__25458 = inst_25460;var cs = inst_25453;return ((function (c,v,vec__25458,cs,inst_25461,inst_25460,inst_25462,inst_25453,state_val_25482,c__12271__auto___25505,out){
return (function (p1__25396_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25396_SHARP_);
});
;})(c,v,vec__25458,cs,inst_25461,inst_25460,inst_25462,inst_25453,state_val_25482,c__12271__auto___25505,out))
})();var inst_25466 = cljs.core.filterv(inst_25465,inst_25453);var inst_25453__$1 = inst_25466;var state_25481__$1 = (function (){var statearr_25496 = state_25481;(statearr_25496[(10)] = inst_25453__$1);
return statearr_25496;
})();var statearr_25497_25515 = state_25481__$1;(statearr_25497_25515[(2)] = null);
(statearr_25497_25515[(1)] = (2));
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
});})(c__12271__auto___25505,out))
;return ((function (switch__12256__auto__,c__12271__auto___25505,out){
return (function() {
var state_machine__12257__auto__ = null;
var state_machine__12257__auto____0 = (function (){var statearr_25501 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25501[(0)] = state_machine__12257__auto__);
(statearr_25501[(1)] = (1));
return statearr_25501;
});
var state_machine__12257__auto____1 = (function (state_25481){while(true){
var ret_value__12258__auto__ = (function (){try{while(true){
var result__12259__auto__ = switch__12256__auto__(state_25481);if(cljs.core.keyword_identical_QMARK_(result__12259__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12259__auto__;
}
break;
}
}catch (e25502){if((e25502 instanceof Object))
{var ex__12260__auto__ = e25502;var statearr_25503_25516 = state_25481;(statearr_25503_25516[(5)] = ex__12260__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25481);
return cljs.core.constant$keyword$18;
} else
{throw e25502;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12258__auto__,cljs.core.constant$keyword$18))
{{
var G__25517 = state_25481;
state_25481 = G__25517;
continue;
}
} else
{return ret_value__12258__auto__;
}
break;
}
});
state_machine__12257__auto__ = function(state_25481){
switch(arguments.length){
case 0:
return state_machine__12257__auto____0.call(this);
case 1:
return state_machine__12257__auto____1.call(this,state_25481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12257__auto____0;
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12257__auto____1;
return state_machine__12257__auto__;
})()
;})(switch__12256__auto__,c__12271__auto___25505,out))
})();var state__12273__auto__ = (function (){var statearr_25504 = (function (){return (f__12272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12272__auto__.cljs$core$IFn$_invoke$arity$0() : f__12272__auto__.call(null));
})();(statearr_25504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12271__auto___25505);
return statearr_25504;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12273__auto__);
});})(c__12271__auto___25505,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12271__auto___25613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12271__auto___25613,out){
return (function (){var f__12272__auto__ = (function (){var switch__12256__auto__ = ((function (c__12271__auto___25613,out){
return (function (state_25590){var state_val_25591 = (state_25590[(1)]);if((state_val_25591 === (7)))
{var inst_25572 = (state_25590[(7)]);var inst_25572__$1 = (state_25590[(2)]);var inst_25573 = (inst_25572__$1 == null);var inst_25574 = cljs.core.not(inst_25573);var state_25590__$1 = (function (){var statearr_25592 = state_25590;(statearr_25592[(7)] = inst_25572__$1);
return statearr_25592;
})();if(inst_25574)
{var statearr_25593_25614 = state_25590__$1;(statearr_25593_25614[(1)] = (8));
} else
{var statearr_25594_25615 = state_25590__$1;(statearr_25594_25615[(1)] = (9));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25591 === (1)))
{var inst_25567 = (0);var state_25590__$1 = (function (){var statearr_25595 = state_25590;(statearr_25595[(8)] = inst_25567);
return statearr_25595;
})();var statearr_25596_25616 = state_25590__$1;(statearr_25596_25616[(2)] = null);
(statearr_25596_25616[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25591 === (4)))
{var state_25590__$1 = state_25590;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25590__$1,(7),ch);
} else
{if((state_val_25591 === (6)))
{var inst_25585 = (state_25590[(2)]);var state_25590__$1 = state_25590;var statearr_25597_25617 = state_25590__$1;(statearr_25597_25617[(2)] = inst_25585);
(statearr_25597_25617[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25591 === (3)))
{var inst_25587 = (state_25590[(2)]);var inst_25588 = cljs.core.async.close_BANG_(out);var state_25590__$1 = (function (){var statearr_25598 = state_25590;(statearr_25598[(9)] = inst_25587);
return statearr_25598;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25590__$1,inst_25588);
} else
{if((state_val_25591 === (2)))
{var inst_25567 = (state_25590[(8)]);var inst_25569 = (inst_25567 < n);var state_25590__$1 = state_25590;if(cljs.core.truth_(inst_25569))
{var statearr_25599_25618 = state_25590__$1;(statearr_25599_25618[(1)] = (4));
} else
{var statearr_25600_25619 = state_25590__$1;(statearr_25600_25619[(1)] = (5));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25591 === (11)))
{var inst_25567 = (state_25590[(8)]);var inst_25577 = (state_25590[(2)]);var inst_25578 = (inst_25567 + (1));var inst_25567__$1 = inst_25578;var state_25590__$1 = (function (){var statearr_25601 = state_25590;(statearr_25601[(10)] = inst_25577);
(statearr_25601[(8)] = inst_25567__$1);
return statearr_25601;
})();var statearr_25602_25620 = state_25590__$1;(statearr_25602_25620[(2)] = null);
(statearr_25602_25620[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25591 === (9)))
{var state_25590__$1 = state_25590;var statearr_25603_25621 = state_25590__$1;(statearr_25603_25621[(2)] = null);
(statearr_25603_25621[(1)] = (10));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25591 === (5)))
{var state_25590__$1 = state_25590;var statearr_25604_25622 = state_25590__$1;(statearr_25604_25622[(2)] = null);
(statearr_25604_25622[(1)] = (6));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25591 === (10)))
{var inst_25582 = (state_25590[(2)]);var state_25590__$1 = state_25590;var statearr_25605_25623 = state_25590__$1;(statearr_25605_25623[(2)] = inst_25582);
(statearr_25605_25623[(1)] = (6));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25591 === (8)))
{var inst_25572 = (state_25590[(7)]);var state_25590__$1 = state_25590;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25590__$1,(11),out,inst_25572);
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
});})(c__12271__auto___25613,out))
;return ((function (switch__12256__auto__,c__12271__auto___25613,out){
return (function() {
var state_machine__12257__auto__ = null;
var state_machine__12257__auto____0 = (function (){var statearr_25609 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25609[(0)] = state_machine__12257__auto__);
(statearr_25609[(1)] = (1));
return statearr_25609;
});
var state_machine__12257__auto____1 = (function (state_25590){while(true){
var ret_value__12258__auto__ = (function (){try{while(true){
var result__12259__auto__ = switch__12256__auto__(state_25590);if(cljs.core.keyword_identical_QMARK_(result__12259__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12259__auto__;
}
break;
}
}catch (e25610){if((e25610 instanceof Object))
{var ex__12260__auto__ = e25610;var statearr_25611_25624 = state_25590;(statearr_25611_25624[(5)] = ex__12260__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25590);
return cljs.core.constant$keyword$18;
} else
{throw e25610;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12258__auto__,cljs.core.constant$keyword$18))
{{
var G__25625 = state_25590;
state_25590 = G__25625;
continue;
}
} else
{return ret_value__12258__auto__;
}
break;
}
});
state_machine__12257__auto__ = function(state_25590){
switch(arguments.length){
case 0:
return state_machine__12257__auto____0.call(this);
case 1:
return state_machine__12257__auto____1.call(this,state_25590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12257__auto____0;
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12257__auto____1;
return state_machine__12257__auto__;
})()
;})(switch__12256__auto__,c__12271__auto___25613,out))
})();var state__12273__auto__ = (function (){var statearr_25612 = (function (){return (f__12272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12272__auto__.cljs$core$IFn$_invoke$arity$0() : f__12272__auto__.call(null));
})();(statearr_25612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12271__auto___25613);
return statearr_25612;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12273__auto__);
});})(c__12271__auto___25613,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12271__auto___25724 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12271__auto___25724,out){
return (function (){var f__12272__auto__ = (function (){var switch__12256__auto__ = ((function (c__12271__auto___25724,out){
return (function (state_25699){var state_val_25700 = (state_25699[(1)]);if((state_val_25700 === (7)))
{var inst_25694 = (state_25699[(2)]);var state_25699__$1 = state_25699;var statearr_25701_25725 = state_25699__$1;(statearr_25701_25725[(2)] = inst_25694);
(statearr_25701_25725[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25700 === (1)))
{var inst_25676 = null;var state_25699__$1 = (function (){var statearr_25702 = state_25699;(statearr_25702[(7)] = inst_25676);
return statearr_25702;
})();var statearr_25703_25726 = state_25699__$1;(statearr_25703_25726[(2)] = null);
(statearr_25703_25726[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25700 === (4)))
{var inst_25679 = (state_25699[(8)]);var inst_25679__$1 = (state_25699[(2)]);var inst_25680 = (inst_25679__$1 == null);var inst_25681 = cljs.core.not(inst_25680);var state_25699__$1 = (function (){var statearr_25704 = state_25699;(statearr_25704[(8)] = inst_25679__$1);
return statearr_25704;
})();if(inst_25681)
{var statearr_25705_25727 = state_25699__$1;(statearr_25705_25727[(1)] = (5));
} else
{var statearr_25706_25728 = state_25699__$1;(statearr_25706_25728[(1)] = (6));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25700 === (6)))
{var state_25699__$1 = state_25699;var statearr_25707_25729 = state_25699__$1;(statearr_25707_25729[(2)] = null);
(statearr_25707_25729[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25700 === (3)))
{var inst_25696 = (state_25699[(2)]);var inst_25697 = cljs.core.async.close_BANG_(out);var state_25699__$1 = (function (){var statearr_25708 = state_25699;(statearr_25708[(9)] = inst_25696);
return statearr_25708;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25699__$1,inst_25697);
} else
{if((state_val_25700 === (2)))
{var state_25699__$1 = state_25699;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25699__$1,(4),ch);
} else
{if((state_val_25700 === (11)))
{var inst_25679 = (state_25699[(8)]);var inst_25688 = (state_25699[(2)]);var inst_25676 = inst_25679;var state_25699__$1 = (function (){var statearr_25709 = state_25699;(statearr_25709[(7)] = inst_25676);
(statearr_25709[(10)] = inst_25688);
return statearr_25709;
})();var statearr_25710_25730 = state_25699__$1;(statearr_25710_25730[(2)] = null);
(statearr_25710_25730[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25700 === (9)))
{var inst_25679 = (state_25699[(8)]);var state_25699__$1 = state_25699;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25699__$1,(11),out,inst_25679);
} else
{if((state_val_25700 === (5)))
{var inst_25679 = (state_25699[(8)]);var inst_25676 = (state_25699[(7)]);var inst_25683 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25679,inst_25676);var state_25699__$1 = state_25699;if(inst_25683)
{var statearr_25712_25731 = state_25699__$1;(statearr_25712_25731[(1)] = (8));
} else
{var statearr_25713_25732 = state_25699__$1;(statearr_25713_25732[(1)] = (9));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25700 === (10)))
{var inst_25691 = (state_25699[(2)]);var state_25699__$1 = state_25699;var statearr_25714_25733 = state_25699__$1;(statearr_25714_25733[(2)] = inst_25691);
(statearr_25714_25733[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25700 === (8)))
{var inst_25676 = (state_25699[(7)]);var tmp25711 = inst_25676;var inst_25676__$1 = tmp25711;var state_25699__$1 = (function (){var statearr_25715 = state_25699;(statearr_25715[(7)] = inst_25676__$1);
return statearr_25715;
})();var statearr_25716_25734 = state_25699__$1;(statearr_25716_25734[(2)] = null);
(statearr_25716_25734[(1)] = (2));
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
});})(c__12271__auto___25724,out))
;return ((function (switch__12256__auto__,c__12271__auto___25724,out){
return (function() {
var state_machine__12257__auto__ = null;
var state_machine__12257__auto____0 = (function (){var statearr_25720 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25720[(0)] = state_machine__12257__auto__);
(statearr_25720[(1)] = (1));
return statearr_25720;
});
var state_machine__12257__auto____1 = (function (state_25699){while(true){
var ret_value__12258__auto__ = (function (){try{while(true){
var result__12259__auto__ = switch__12256__auto__(state_25699);if(cljs.core.keyword_identical_QMARK_(result__12259__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12259__auto__;
}
break;
}
}catch (e25721){if((e25721 instanceof Object))
{var ex__12260__auto__ = e25721;var statearr_25722_25735 = state_25699;(statearr_25722_25735[(5)] = ex__12260__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25699);
return cljs.core.constant$keyword$18;
} else
{throw e25721;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12258__auto__,cljs.core.constant$keyword$18))
{{
var G__25736 = state_25699;
state_25699 = G__25736;
continue;
}
} else
{return ret_value__12258__auto__;
}
break;
}
});
state_machine__12257__auto__ = function(state_25699){
switch(arguments.length){
case 0:
return state_machine__12257__auto____0.call(this);
case 1:
return state_machine__12257__auto____1.call(this,state_25699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12257__auto____0;
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12257__auto____1;
return state_machine__12257__auto__;
})()
;})(switch__12256__auto__,c__12271__auto___25724,out))
})();var state__12273__auto__ = (function (){var statearr_25723 = (function (){return (f__12272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12272__auto__.cljs$core$IFn$_invoke$arity$0() : f__12272__auto__.call(null));
})();(statearr_25723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12271__auto___25724);
return statearr_25723;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12273__auto__);
});})(c__12271__auto___25724,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12271__auto___25874 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12271__auto___25874,out){
return (function (){var f__12272__auto__ = (function (){var switch__12256__auto__ = ((function (c__12271__auto___25874,out){
return (function (state_25844){var state_val_25845 = (state_25844[(1)]);if((state_val_25845 === (7)))
{var inst_25840 = (state_25844[(2)]);var state_25844__$1 = state_25844;var statearr_25846_25875 = state_25844__$1;(statearr_25846_25875[(2)] = inst_25840);
(statearr_25846_25875[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25845 === (1)))
{var inst_25807 = (new Array(n));var inst_25808 = inst_25807;var inst_25809 = (0);var state_25844__$1 = (function (){var statearr_25847 = state_25844;(statearr_25847[(7)] = inst_25809);
(statearr_25847[(8)] = inst_25808);
return statearr_25847;
})();var statearr_25848_25876 = state_25844__$1;(statearr_25848_25876[(2)] = null);
(statearr_25848_25876[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25845 === (4)))
{var inst_25812 = (state_25844[(9)]);var inst_25812__$1 = (state_25844[(2)]);var inst_25813 = (inst_25812__$1 == null);var inst_25814 = cljs.core.not(inst_25813);var state_25844__$1 = (function (){var statearr_25849 = state_25844;(statearr_25849[(9)] = inst_25812__$1);
return statearr_25849;
})();if(inst_25814)
{var statearr_25850_25877 = state_25844__$1;(statearr_25850_25877[(1)] = (5));
} else
{var statearr_25851_25878 = state_25844__$1;(statearr_25851_25878[(1)] = (6));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25845 === (15)))
{var inst_25834 = (state_25844[(2)]);var state_25844__$1 = state_25844;var statearr_25852_25879 = state_25844__$1;(statearr_25852_25879[(2)] = inst_25834);
(statearr_25852_25879[(1)] = (14));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25845 === (13)))
{var state_25844__$1 = state_25844;var statearr_25853_25880 = state_25844__$1;(statearr_25853_25880[(2)] = null);
(statearr_25853_25880[(1)] = (14));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25845 === (6)))
{var inst_25809 = (state_25844[(7)]);var inst_25830 = (inst_25809 > (0));var state_25844__$1 = state_25844;if(cljs.core.truth_(inst_25830))
{var statearr_25854_25881 = state_25844__$1;(statearr_25854_25881[(1)] = (12));
} else
{var statearr_25855_25882 = state_25844__$1;(statearr_25855_25882[(1)] = (13));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25845 === (3)))
{var inst_25842 = (state_25844[(2)]);var state_25844__$1 = state_25844;return cljs.core.async.impl.ioc_helpers.return_chan(state_25844__$1,inst_25842);
} else
{if((state_val_25845 === (12)))
{var inst_25808 = (state_25844[(8)]);var inst_25832 = cljs.core.vec(inst_25808);var state_25844__$1 = state_25844;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25844__$1,(15),out,inst_25832);
} else
{if((state_val_25845 === (2)))
{var state_25844__$1 = state_25844;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25844__$1,(4),ch);
} else
{if((state_val_25845 === (11)))
{var inst_25824 = (state_25844[(2)]);var inst_25825 = (new Array(n));var inst_25808 = inst_25825;var inst_25809 = (0);var state_25844__$1 = (function (){var statearr_25856 = state_25844;(statearr_25856[(10)] = inst_25824);
(statearr_25856[(7)] = inst_25809);
(statearr_25856[(8)] = inst_25808);
return statearr_25856;
})();var statearr_25857_25883 = state_25844__$1;(statearr_25857_25883[(2)] = null);
(statearr_25857_25883[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25845 === (9)))
{var inst_25808 = (state_25844[(8)]);var inst_25822 = cljs.core.vec(inst_25808);var state_25844__$1 = state_25844;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25844__$1,(11),out,inst_25822);
} else
{if((state_val_25845 === (5)))
{var inst_25812 = (state_25844[(9)]);var inst_25809 = (state_25844[(7)]);var inst_25808 = (state_25844[(8)]);var inst_25817 = (state_25844[(11)]);var inst_25816 = (inst_25808[inst_25809] = inst_25812);var inst_25817__$1 = (inst_25809 + (1));var inst_25818 = (inst_25817__$1 < n);var state_25844__$1 = (function (){var statearr_25858 = state_25844;(statearr_25858[(11)] = inst_25817__$1);
(statearr_25858[(12)] = inst_25816);
return statearr_25858;
})();if(cljs.core.truth_(inst_25818))
{var statearr_25859_25884 = state_25844__$1;(statearr_25859_25884[(1)] = (8));
} else
{var statearr_25860_25885 = state_25844__$1;(statearr_25860_25885[(1)] = (9));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_25845 === (14)))
{var inst_25837 = (state_25844[(2)]);var inst_25838 = cljs.core.async.close_BANG_(out);var state_25844__$1 = (function (){var statearr_25862 = state_25844;(statearr_25862[(13)] = inst_25837);
return statearr_25862;
})();var statearr_25863_25886 = state_25844__$1;(statearr_25863_25886[(2)] = inst_25838);
(statearr_25863_25886[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25845 === (10)))
{var inst_25828 = (state_25844[(2)]);var state_25844__$1 = state_25844;var statearr_25864_25887 = state_25844__$1;(statearr_25864_25887[(2)] = inst_25828);
(statearr_25864_25887[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_25845 === (8)))
{var inst_25808 = (state_25844[(8)]);var inst_25817 = (state_25844[(11)]);var tmp25861 = inst_25808;var inst_25808__$1 = tmp25861;var inst_25809 = inst_25817;var state_25844__$1 = (function (){var statearr_25865 = state_25844;(statearr_25865[(7)] = inst_25809);
(statearr_25865[(8)] = inst_25808__$1);
return statearr_25865;
})();var statearr_25866_25888 = state_25844__$1;(statearr_25866_25888[(2)] = null);
(statearr_25866_25888[(1)] = (2));
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
});})(c__12271__auto___25874,out))
;return ((function (switch__12256__auto__,c__12271__auto___25874,out){
return (function() {
var state_machine__12257__auto__ = null;
var state_machine__12257__auto____0 = (function (){var statearr_25870 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25870[(0)] = state_machine__12257__auto__);
(statearr_25870[(1)] = (1));
return statearr_25870;
});
var state_machine__12257__auto____1 = (function (state_25844){while(true){
var ret_value__12258__auto__ = (function (){try{while(true){
var result__12259__auto__ = switch__12256__auto__(state_25844);if(cljs.core.keyword_identical_QMARK_(result__12259__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12259__auto__;
}
break;
}
}catch (e25871){if((e25871 instanceof Object))
{var ex__12260__auto__ = e25871;var statearr_25872_25889 = state_25844;(statearr_25872_25889[(5)] = ex__12260__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25844);
return cljs.core.constant$keyword$18;
} else
{throw e25871;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12258__auto__,cljs.core.constant$keyword$18))
{{
var G__25890 = state_25844;
state_25844 = G__25890;
continue;
}
} else
{return ret_value__12258__auto__;
}
break;
}
});
state_machine__12257__auto__ = function(state_25844){
switch(arguments.length){
case 0:
return state_machine__12257__auto____0.call(this);
case 1:
return state_machine__12257__auto____1.call(this,state_25844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12257__auto____0;
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12257__auto____1;
return state_machine__12257__auto__;
})()
;})(switch__12256__auto__,c__12271__auto___25874,out))
})();var state__12273__auto__ = (function (){var statearr_25873 = (function (){return (f__12272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12272__auto__.cljs$core$IFn$_invoke$arity$0() : f__12272__auto__.call(null));
})();(statearr_25873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12271__auto___25874);
return statearr_25873;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12273__auto__);
});})(c__12271__auto___25874,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__12271__auto___26038 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12271__auto___26038,out){
return (function (){var f__12272__auto__ = (function (){var switch__12256__auto__ = ((function (c__12271__auto___26038,out){
return (function (state_26007){var state_val_26008 = (state_26007[(1)]);if((state_val_26008 === (7)))
{var inst_26003 = (state_26007[(2)]);var state_26007__$1 = state_26007;var statearr_26009_26039 = state_26007__$1;(statearr_26009_26039[(2)] = inst_26003);
(statearr_26009_26039[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26008 === (1)))
{var inst_25966 = [];var inst_25967 = inst_25966;var inst_25968 = cljs.core.constant$keyword$31;var state_26007__$1 = (function (){var statearr_26010 = state_26007;(statearr_26010[(7)] = inst_25968);
(statearr_26010[(8)] = inst_25967);
return statearr_26010;
})();var statearr_26011_26040 = state_26007__$1;(statearr_26011_26040[(2)] = null);
(statearr_26011_26040[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26008 === (4)))
{var inst_25971 = (state_26007[(9)]);var inst_25971__$1 = (state_26007[(2)]);var inst_25972 = (inst_25971__$1 == null);var inst_25973 = cljs.core.not(inst_25972);var state_26007__$1 = (function (){var statearr_26012 = state_26007;(statearr_26012[(9)] = inst_25971__$1);
return statearr_26012;
})();if(inst_25973)
{var statearr_26013_26041 = state_26007__$1;(statearr_26013_26041[(1)] = (5));
} else
{var statearr_26014_26042 = state_26007__$1;(statearr_26014_26042[(1)] = (6));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_26008 === (15)))
{var inst_25997 = (state_26007[(2)]);var state_26007__$1 = state_26007;var statearr_26015_26043 = state_26007__$1;(statearr_26015_26043[(2)] = inst_25997);
(statearr_26015_26043[(1)] = (14));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26008 === (13)))
{var state_26007__$1 = state_26007;var statearr_26016_26044 = state_26007__$1;(statearr_26016_26044[(2)] = null);
(statearr_26016_26044[(1)] = (14));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26008 === (6)))
{var inst_25967 = (state_26007[(8)]);var inst_25992 = inst_25967.length;var inst_25993 = (inst_25992 > (0));var state_26007__$1 = state_26007;if(cljs.core.truth_(inst_25993))
{var statearr_26017_26045 = state_26007__$1;(statearr_26017_26045[(1)] = (12));
} else
{var statearr_26018_26046 = state_26007__$1;(statearr_26018_26046[(1)] = (13));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_26008 === (3)))
{var inst_26005 = (state_26007[(2)]);var state_26007__$1 = state_26007;return cljs.core.async.impl.ioc_helpers.return_chan(state_26007__$1,inst_26005);
} else
{if((state_val_26008 === (12)))
{var inst_25967 = (state_26007[(8)]);var inst_25995 = cljs.core.vec(inst_25967);var state_26007__$1 = state_26007;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26007__$1,(15),out,inst_25995);
} else
{if((state_val_26008 === (2)))
{var state_26007__$1 = state_26007;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26007__$1,(4),ch);
} else
{if((state_val_26008 === (11)))
{var inst_25971 = (state_26007[(9)]);var inst_25975 = (state_26007[(10)]);var inst_25985 = (state_26007[(2)]);var inst_25986 = [];var inst_25987 = inst_25986.push(inst_25971);var inst_25967 = inst_25986;var inst_25968 = inst_25975;var state_26007__$1 = (function (){var statearr_26019 = state_26007;(statearr_26019[(7)] = inst_25968);
(statearr_26019[(11)] = inst_25985);
(statearr_26019[(8)] = inst_25967);
(statearr_26019[(12)] = inst_25987);
return statearr_26019;
})();var statearr_26020_26047 = state_26007__$1;(statearr_26020_26047[(2)] = null);
(statearr_26020_26047[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26008 === (9)))
{var inst_25967 = (state_26007[(8)]);var inst_25983 = cljs.core.vec(inst_25967);var state_26007__$1 = state_26007;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26007__$1,(11),out,inst_25983);
} else
{if((state_val_26008 === (5)))
{var inst_25968 = (state_26007[(7)]);var inst_25971 = (state_26007[(9)]);var inst_25975 = (state_26007[(10)]);var inst_25975__$1 = (function (){var G__26021 = inst_25971;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26021) : f.call(null,G__26021));
})();var inst_25976 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25975__$1,inst_25968);var inst_25977 = cljs.core.keyword_identical_QMARK_(inst_25968,cljs.core.constant$keyword$31);var inst_25978 = (inst_25976) || (inst_25977);var state_26007__$1 = (function (){var statearr_26022 = state_26007;(statearr_26022[(10)] = inst_25975__$1);
return statearr_26022;
})();if(cljs.core.truth_(inst_25978))
{var statearr_26023_26048 = state_26007__$1;(statearr_26023_26048[(1)] = (8));
} else
{var statearr_26024_26049 = state_26007__$1;(statearr_26024_26049[(1)] = (9));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_26008 === (14)))
{var inst_26000 = (state_26007[(2)]);var inst_26001 = cljs.core.async.close_BANG_(out);var state_26007__$1 = (function (){var statearr_26026 = state_26007;(statearr_26026[(13)] = inst_26000);
return statearr_26026;
})();var statearr_26027_26050 = state_26007__$1;(statearr_26027_26050[(2)] = inst_26001);
(statearr_26027_26050[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26008 === (10)))
{var inst_25990 = (state_26007[(2)]);var state_26007__$1 = state_26007;var statearr_26028_26051 = state_26007__$1;(statearr_26028_26051[(2)] = inst_25990);
(statearr_26028_26051[(1)] = (7));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26008 === (8)))
{var inst_25967 = (state_26007[(8)]);var inst_25971 = (state_26007[(9)]);var inst_25975 = (state_26007[(10)]);var inst_25980 = inst_25967.push(inst_25971);var tmp26025 = inst_25967;var inst_25967__$1 = tmp26025;var inst_25968 = inst_25975;var state_26007__$1 = (function (){var statearr_26029 = state_26007;(statearr_26029[(7)] = inst_25968);
(statearr_26029[(14)] = inst_25980);
(statearr_26029[(8)] = inst_25967__$1);
return statearr_26029;
})();var statearr_26030_26052 = state_26007__$1;(statearr_26030_26052[(2)] = null);
(statearr_26030_26052[(1)] = (2));
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
});})(c__12271__auto___26038,out))
;return ((function (switch__12256__auto__,c__12271__auto___26038,out){
return (function() {
var state_machine__12257__auto__ = null;
var state_machine__12257__auto____0 = (function (){var statearr_26034 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26034[(0)] = state_machine__12257__auto__);
(statearr_26034[(1)] = (1));
return statearr_26034;
});
var state_machine__12257__auto____1 = (function (state_26007){while(true){
var ret_value__12258__auto__ = (function (){try{while(true){
var result__12259__auto__ = switch__12256__auto__(state_26007);if(cljs.core.keyword_identical_QMARK_(result__12259__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12259__auto__;
}
break;
}
}catch (e26035){if((e26035 instanceof Object))
{var ex__12260__auto__ = e26035;var statearr_26036_26053 = state_26007;(statearr_26036_26053[(5)] = ex__12260__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26007);
return cljs.core.constant$keyword$18;
} else
{throw e26035;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12258__auto__,cljs.core.constant$keyword$18))
{{
var G__26054 = state_26007;
state_26007 = G__26054;
continue;
}
} else
{return ret_value__12258__auto__;
}
break;
}
});
state_machine__12257__auto__ = function(state_26007){
switch(arguments.length){
case 0:
return state_machine__12257__auto____0.call(this);
case 1:
return state_machine__12257__auto____1.call(this,state_26007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12257__auto____0;
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12257__auto____1;
return state_machine__12257__auto__;
})()
;})(switch__12256__auto__,c__12271__auto___26038,out))
})();var state__12273__auto__ = (function (){var statearr_26037 = (function (){return (f__12272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12272__auto__.cljs$core$IFn$_invoke$arity$0() : f__12272__auto__.call(null));
})();(statearr_26037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12271__auto___26038);
return statearr_26037;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12273__auto__);
});})(c__12271__auto___26038,out))
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
