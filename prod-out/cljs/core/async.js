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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23990 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23990 = (function (f,fn_handler,meta23991){
this.f = f;
this.fn_handler = fn_handler;
this.meta23991 = meta23991;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23990.cljs$lang$type = true;
cljs.core.async.t23990.cljs$lang$ctorStr = "cljs.core.async/t23990";
cljs.core.async.t23990.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cljs.core.async/t23990");
});
cljs.core.async.t23990.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23990.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23990.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23992){var self__ = this;
var _23992__$1 = this;return self__.meta23991;
});
cljs.core.async.t23990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23992,meta23991__$1){var self__ = this;
var _23992__$1 = this;return (new cljs.core.async.t23990(self__.f,self__.fn_handler,meta23991__$1));
});
cljs.core.async.__GT_t23990 = (function __GT_t23990(f__$1,fn_handler__$1,meta23991){return (new cljs.core.async.t23990(f__$1,fn_handler__$1,meta23991));
});
}
return (new cljs.core.async.t23990(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23994 = buff;if(G__23994)
{var bit__4332__auto__ = null;if(cljs.core.truth_((function (){var or__3669__auto__ = bit__4332__auto__;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return G__23994.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23994.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23994);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23994);
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
{var val_24005 = (function (){var G__24002 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24002) : cljs.core.deref.call(null,G__24002));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__24003_24006 = val_24005;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24003_24006) : fn1.call(null,G__24003_24006));
} else
{cljs.core.async.impl.dispatch.run(((function (val_24005,ret){
return (function (){var G__24004 = val_24005;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24004) : fn1.call(null,G__24004));
});})(val_24005,ret))
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
{var ret = temp__4124__auto__;var G__24015 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24015) : cljs.core.deref.call(null,G__24015));
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = (function (){var G__24016 = retb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24016) : cljs.core.deref.call(null,G__24016));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__24017_24019 = ret;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24017_24019) : fn1.call(null,G__24017_24019));
} else
{cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){var G__24018 = ret;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24018) : fn1.call(null,G__24018));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4538__auto___24020 = n;var x_24021 = (0);while(true){
if((x_24021 < n__4538__auto___24020))
{(a[x_24021] = (0));
{
var G__24022 = (x_24021 + (1));
x_24021 = G__24022;
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
var G__24023 = (i + (1));
i = G__24023;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (function (){var G__24031 = true;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24031) : cljs.core.atom.call(null,G__24031));
})();if(typeof cljs.core.async.t24032 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24032 = (function (flag,alt_flag,meta24033){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24033 = meta24033;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24032.cljs$lang$type = true;
cljs.core.async.t24032.cljs$lang$ctorStr = "cljs.core.async/t24032";
cljs.core.async.t24032.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cljs.core.async/t24032");
});})(flag))
;
cljs.core.async.t24032.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24032.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__24035 = self__.flag;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24035) : cljs.core.deref.call(null,G__24035));
});})(flag))
;
cljs.core.async.t24032.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__24036_24038 = self__.flag;var G__24037_24039 = null;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24036_24038,G__24037_24039) : cljs.core.reset_BANG_.call(null,G__24036_24038,G__24037_24039));
return true;
});})(flag))
;
cljs.core.async.t24032.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24034){var self__ = this;
var _24034__$1 = this;return self__.meta24033;
});})(flag))
;
cljs.core.async.t24032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24034,meta24033__$1){var self__ = this;
var _24034__$1 = this;return (new cljs.core.async.t24032(self__.flag,self__.alt_flag,meta24033__$1));
});})(flag))
;
cljs.core.async.__GT_t24032 = ((function (flag){
return (function __GT_t24032(flag__$1,alt_flag__$1,meta24033){return (new cljs.core.async.t24032(flag__$1,alt_flag__$1,meta24033));
});})(flag))
;
}
return (new cljs.core.async.t24032(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24043 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24043 = (function (cb,flag,alt_handler,meta24044){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24044 = meta24044;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24043.cljs$lang$type = true;
cljs.core.async.t24043.cljs$lang$ctorStr = "cljs.core.async/t24043";
cljs.core.async.t24043.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cljs.core.async/t24043");
});
cljs.core.async.t24043.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24043.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t24043.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t24043.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24045){var self__ = this;
var _24045__$1 = this;return self__.meta24044;
});
cljs.core.async.t24043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24045,meta24044__$1){var self__ = this;
var _24045__$1 = this;return (new cljs.core.async.t24043(self__.cb,self__.flag,self__.alt_handler,meta24044__$1));
});
cljs.core.async.__GT_t24043 = (function __GT_t24043(cb__$1,flag__$1,alt_handler__$1,meta24044){return (new cljs.core.async.t24043(cb__$1,flag__$1,alt_handler__$1,meta24044));
});
}
return (new cljs.core.async.t24043(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__24053 = (0);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__24053) : port.call(null,G__24053));
})():null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__24054 = (1);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__24054) : port.call(null,G__24054));
})();return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24046_SHARP_){var G__24055 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24046_SHARP_,wport], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24055) : fret.call(null,G__24055));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24047_SHARP_){var G__24056 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24047_SHARP_,port], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24056) : fret.call(null,G__24056));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24057 = vbox;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24057) : cljs.core.deref.call(null,G__24057));
})(),(function (){var or__3669__auto__ = wport;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__24058 = (i + (1));
i = G__24058;
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
var alts_BANG___delegate = function (ports,p__24059){var map__24061 = p__24059;var map__24061__$1 = ((cljs.core.seq_QMARK_(map__24061))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24061):map__24061);var opts = map__24061__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));

};
var alts_BANG_ = function (ports,var_args){
var p__24059 = null;if (arguments.length > 1) {
  p__24059 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24059);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24062){
var ports = cljs.core.first(arglist__24062);
var p__24059 = cljs.core.rest(arglist__24062);
return alts_BANG___delegate(ports,p__24059);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t24076 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24076 = (function (ch,f,map_LT_,meta24077){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24077 = meta24077;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24076.cljs$lang$type = true;
cljs.core.async.t24076.cljs$lang$ctorStr = "cljs.core.async/t24076";
cljs.core.async.t24076.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cljs.core.async/t24076");
});
cljs.core.async.t24076.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24076.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});
cljs.core.async.t24076.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24076.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t24079 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24079 = (function (fn1,_,meta24077,ch,f,map_LT_,meta24080){
this.fn1 = fn1;
this._ = _;
this.meta24077 = meta24077;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24080 = meta24080;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24079.cljs$lang$type = true;
cljs.core.async.t24079.cljs$lang$ctorStr = "cljs.core.async/t24079";
cljs.core.async.t24079.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cljs.core.async/t24079");
});})(___$1))
;
cljs.core.async.t24079.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24079.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t24079.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var G__24082 = self__.fn1;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(G__24082) : cljs.core.async.impl.protocols.lock_id.call(null,G__24082));
});})(___$1))
;
cljs.core.async.t24079.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__24063_SHARP_){var G__24083 = (((p1__24063_SHARP_ == null))?null:(function (){var G__24084 = p1__24063_SHARP_;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24084) : self__.f.call(null,G__24084));
})());return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__24083) : f1.call(null,G__24083));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t24079.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24081){var self__ = this;
var _24081__$1 = this;return self__.meta24080;
});})(___$1))
;
cljs.core.async.t24079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24081,meta24080__$1){var self__ = this;
var _24081__$1 = this;return (new cljs.core.async.t24079(self__.fn1,self__._,self__.meta24077,self__.ch,self__.f,self__.map_LT_,meta24080__$1));
});})(___$1))
;
cljs.core.async.__GT_t24079 = ((function (___$1){
return (function __GT_t24079(fn1__$1,___$2,meta24077__$1,ch__$2,f__$2,map_LT___$2,meta24080){return (new cljs.core.async.t24079(fn1__$1,___$2,meta24077__$1,ch__$2,f__$2,map_LT___$2,meta24080));
});})(___$1))
;
}
return (new cljs.core.async.t24079(fn1,___$1,self__.meta24077,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3657__auto__ = ret;if(cljs.core.truth_(and__3657__auto__))
{return !(((function (){var G__24085 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24085) : cljs.core.deref.call(null,G__24085));
})() == null));
} else
{return and__3657__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((function (){var G__24086 = (function (){var G__24087 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24087) : cljs.core.deref.call(null,G__24087));
})();return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24086) : self__.f.call(null,G__24086));
})());
} else
{return ret;
}
});
cljs.core.async.t24076.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24076.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24076.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t24076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24078){var self__ = this;
var _24078__$1 = this;return self__.meta24077;
});
cljs.core.async.t24076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24078,meta24077__$1){var self__ = this;
var _24078__$1 = this;return (new cljs.core.async.t24076(self__.ch,self__.f,self__.map_LT_,meta24077__$1));
});
cljs.core.async.__GT_t24076 = (function __GT_t24076(ch__$1,f__$1,map_LT___$1,meta24077){return (new cljs.core.async.t24076(ch__$1,f__$1,map_LT___$1,meta24077));
});
}
return (new cljs.core.async.t24076(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t24092 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24092 = (function (ch,f,map_GT_,meta24093){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24093 = meta24093;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24092.cljs$lang$type = true;
cljs.core.async.t24092.cljs$lang$ctorStr = "cljs.core.async/t24092";
cljs.core.async.t24092.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cljs.core.async/t24092");
});
cljs.core.async.t24092.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24092.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__24095 = val;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24095) : self__.f.call(null,G__24095));
})(),fn1);
});
cljs.core.async.t24092.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24092.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24092.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24092.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24092.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24094){var self__ = this;
var _24094__$1 = this;return self__.meta24093;
});
cljs.core.async.t24092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24094,meta24093__$1){var self__ = this;
var _24094__$1 = this;return (new cljs.core.async.t24092(self__.ch,self__.f,self__.map_GT_,meta24093__$1));
});
cljs.core.async.__GT_t24092 = (function __GT_t24092(ch__$1,f__$1,map_GT___$1,meta24093){return (new cljs.core.async.t24092(ch__$1,f__$1,map_GT___$1,meta24093));
});
}
return (new cljs.core.async.t24092(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t24100 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24100 = (function (ch,p,filter_GT_,meta24101){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24101 = meta24101;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24100.cljs$lang$type = true;
cljs.core.async.t24100.cljs$lang$ctorStr = "cljs.core.async/t24100";
cljs.core.async.t24100.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cljs.core.async/t24100");
});
cljs.core.async.t24100.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24100.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__24103 = val;return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__24103) : self__.p.call(null,G__24103));
})()))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});
cljs.core.async.t24100.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24100.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24100.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24100.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24100.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t24100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24102){var self__ = this;
var _24102__$1 = this;return self__.meta24101;
});
cljs.core.async.t24100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24102,meta24101__$1){var self__ = this;
var _24102__$1 = this;return (new cljs.core.async.t24100(self__.ch,self__.p,self__.filter_GT_,meta24101__$1));
});
cljs.core.async.__GT_t24100 = (function __GT_t24100(ch__$1,p__$1,filter_GT___$1,meta24101){return (new cljs.core.async.t24100(ch__$1,p__$1,filter_GT___$1,meta24101));
});
}
return (new cljs.core.async.t24100(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6524__auto___24191 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6524__auto___24191,out){
return (function (){var f__6525__auto__ = (function (){var switch__6509__auto__ = ((function (c__6524__auto___24191,out){
return (function (state_24169){var state_val_24170 = (state_24169[(1)]);if((state_val_24170 === (7)))
{var inst_24165 = (state_24169[(2)]);var state_24169__$1 = state_24169;var statearr_24171_24192 = state_24169__$1;(statearr_24171_24192[(2)] = inst_24165);
(statearr_24171_24192[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24170 === (1)))
{var state_24169__$1 = state_24169;var statearr_24172_24193 = state_24169__$1;(statearr_24172_24193[(2)] = null);
(statearr_24172_24193[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24170 === (4)))
{var inst_24151 = (state_24169[(7)]);var inst_24151__$1 = (state_24169[(2)]);var inst_24152 = (inst_24151__$1 == null);var state_24169__$1 = (function (){var statearr_24173 = state_24169;(statearr_24173[(7)] = inst_24151__$1);
return statearr_24173;
})();if(cljs.core.truth_(inst_24152))
{var statearr_24174_24194 = state_24169__$1;(statearr_24174_24194[(1)] = (5));
} else
{var statearr_24175_24195 = state_24169__$1;(statearr_24175_24195[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24170 === (6)))
{var inst_24151 = (state_24169[(7)]);var inst_24156 = (function (){var G__24176 = inst_24151;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__24176) : p.call(null,G__24176));
})();var state_24169__$1 = state_24169;if(cljs.core.truth_(inst_24156))
{var statearr_24177_24196 = state_24169__$1;(statearr_24177_24196[(1)] = (8));
} else
{var statearr_24178_24197 = state_24169__$1;(statearr_24178_24197[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24170 === (3)))
{var inst_24167 = (state_24169[(2)]);var state_24169__$1 = state_24169;return cljs.core.async.impl.ioc_helpers.return_chan(state_24169__$1,inst_24167);
} else
{if((state_val_24170 === (2)))
{var state_24169__$1 = state_24169;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24169__$1,(4),ch);
} else
{if((state_val_24170 === (11)))
{var inst_24159 = (state_24169[(2)]);var state_24169__$1 = state_24169;var statearr_24179_24198 = state_24169__$1;(statearr_24179_24198[(2)] = inst_24159);
(statearr_24179_24198[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24170 === (9)))
{var state_24169__$1 = state_24169;var statearr_24180_24199 = state_24169__$1;(statearr_24180_24199[(2)] = null);
(statearr_24180_24199[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24170 === (5)))
{var inst_24154 = cljs.core.async.close_BANG_(out);var state_24169__$1 = state_24169;var statearr_24181_24200 = state_24169__$1;(statearr_24181_24200[(2)] = inst_24154);
(statearr_24181_24200[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24170 === (10)))
{var inst_24162 = (state_24169[(2)]);var state_24169__$1 = (function (){var statearr_24182 = state_24169;(statearr_24182[(8)] = inst_24162);
return statearr_24182;
})();var statearr_24183_24201 = state_24169__$1;(statearr_24183_24201[(2)] = null);
(statearr_24183_24201[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24170 === (8)))
{var inst_24151 = (state_24169[(7)]);var state_24169__$1 = state_24169;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24169__$1,(11),out,inst_24151);
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
});})(c__6524__auto___24191,out))
;return ((function (switch__6509__auto__,c__6524__auto___24191,out){
return (function() {
var state_machine__6510__auto__ = null;
var state_machine__6510__auto____0 = (function (){var statearr_24187 = [null,null,null,null,null,null,null,null,null];(statearr_24187[(0)] = state_machine__6510__auto__);
(statearr_24187[(1)] = (1));
return statearr_24187;
});
var state_machine__6510__auto____1 = (function (state_24169){while(true){
var ret_value__6511__auto__ = (function (){try{while(true){
var result__6512__auto__ = switch__6509__auto__(state_24169);if(cljs.core.keyword_identical_QMARK_(result__6512__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6512__auto__;
}
break;
}
}catch (e24188){if((e24188 instanceof Object))
{var ex__6513__auto__ = e24188;var statearr_24189_24202 = state_24169;(statearr_24189_24202[(5)] = ex__6513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24169);
return cljs.core.constant$keyword$16;
} else
{throw e24188;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6511__auto__,cljs.core.constant$keyword$16))
{{
var G__24203 = state_24169;
state_24169 = G__24203;
continue;
}
} else
{return ret_value__6511__auto__;
}
break;
}
});
state_machine__6510__auto__ = function(state_24169){
switch(arguments.length){
case 0:
return state_machine__6510__auto____0.call(this);
case 1:
return state_machine__6510__auto____1.call(this,state_24169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6510__auto____0;
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6510__auto____1;
return state_machine__6510__auto__;
})()
;})(switch__6509__auto__,c__6524__auto___24191,out))
})();var state__6526__auto__ = (function (){var statearr_24190 = (function (){return (f__6525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6525__auto__.cljs$core$IFn$_invoke$arity$0() : f__6525__auto__.call(null));
})();(statearr_24190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___24191);
return statearr_24190;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6526__auto__);
});})(c__6524__auto___24191,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6524__auto__){
return (function (){var f__6525__auto__ = (function (){var switch__6509__auto__ = ((function (c__6524__auto__){
return (function (state_24373){var state_val_24374 = (state_24373[(1)]);if((state_val_24374 === (7)))
{var inst_24369 = (state_24373[(2)]);var state_24373__$1 = state_24373;var statearr_24375_24417 = state_24373__$1;(statearr_24375_24417[(2)] = inst_24369);
(statearr_24375_24417[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24374 === (20)))
{var inst_24339 = (state_24373[(7)]);var inst_24350 = (state_24373[(2)]);var inst_24351 = cljs.core.next(inst_24339);var inst_24325 = inst_24351;var inst_24326 = null;var inst_24327 = (0);var inst_24328 = (0);var state_24373__$1 = (function (){var statearr_24376 = state_24373;(statearr_24376[(8)] = inst_24327);
(statearr_24376[(9)] = inst_24325);
(statearr_24376[(10)] = inst_24328);
(statearr_24376[(11)] = inst_24326);
(statearr_24376[(12)] = inst_24350);
return statearr_24376;
})();var statearr_24377_24418 = state_24373__$1;(statearr_24377_24418[(2)] = null);
(statearr_24377_24418[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24374 === (1)))
{var state_24373__$1 = state_24373;var statearr_24378_24419 = state_24373__$1;(statearr_24378_24419[(2)] = null);
(statearr_24378_24419[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24374 === (4)))
{var inst_24314 = (state_24373[(13)]);var inst_24314__$1 = (state_24373[(2)]);var inst_24315 = (inst_24314__$1 == null);var state_24373__$1 = (function (){var statearr_24379 = state_24373;(statearr_24379[(13)] = inst_24314__$1);
return statearr_24379;
})();if(cljs.core.truth_(inst_24315))
{var statearr_24380_24420 = state_24373__$1;(statearr_24380_24420[(1)] = (5));
} else
{var statearr_24381_24421 = state_24373__$1;(statearr_24381_24421[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24374 === (15)))
{var state_24373__$1 = state_24373;var statearr_24385_24422 = state_24373__$1;(statearr_24385_24422[(2)] = null);
(statearr_24385_24422[(1)] = (16));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24374 === (21)))
{var state_24373__$1 = state_24373;var statearr_24386_24423 = state_24373__$1;(statearr_24386_24423[(2)] = null);
(statearr_24386_24423[(1)] = (23));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24374 === (13)))
{var inst_24327 = (state_24373[(8)]);var inst_24325 = (state_24373[(9)]);var inst_24328 = (state_24373[(10)]);var inst_24326 = (state_24373[(11)]);var inst_24335 = (state_24373[(2)]);var inst_24336 = (inst_24328 + (1));var tmp24382 = inst_24327;var tmp24383 = inst_24325;var tmp24384 = inst_24326;var inst_24325__$1 = tmp24383;var inst_24326__$1 = tmp24384;var inst_24327__$1 = tmp24382;var inst_24328__$1 = inst_24336;var state_24373__$1 = (function (){var statearr_24387 = state_24373;(statearr_24387[(8)] = inst_24327__$1);
(statearr_24387[(9)] = inst_24325__$1);
(statearr_24387[(10)] = inst_24328__$1);
(statearr_24387[(11)] = inst_24326__$1);
(statearr_24387[(14)] = inst_24335);
return statearr_24387;
})();var statearr_24388_24424 = state_24373__$1;(statearr_24388_24424[(2)] = null);
(statearr_24388_24424[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24374 === (22)))
{var state_24373__$1 = state_24373;var statearr_24389_24425 = state_24373__$1;(statearr_24389_24425[(2)] = null);
(statearr_24389_24425[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24374 === (6)))
{var inst_24314 = (state_24373[(13)]);var inst_24323 = (function (){var G__24390 = inst_24314;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24390) : f.call(null,G__24390));
})();var inst_24324 = cljs.core.seq(inst_24323);var inst_24325 = inst_24324;var inst_24326 = null;var inst_24327 = (0);var inst_24328 = (0);var state_24373__$1 = (function (){var statearr_24391 = state_24373;(statearr_24391[(8)] = inst_24327);
(statearr_24391[(9)] = inst_24325);
(statearr_24391[(10)] = inst_24328);
(statearr_24391[(11)] = inst_24326);
return statearr_24391;
})();var statearr_24392_24426 = state_24373__$1;(statearr_24392_24426[(2)] = null);
(statearr_24392_24426[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24374 === (17)))
{var inst_24339 = (state_24373[(7)]);var inst_24343 = cljs.core.chunk_first(inst_24339);var inst_24344 = cljs.core.chunk_rest(inst_24339);var inst_24345 = cljs.core.count(inst_24343);var inst_24325 = inst_24344;var inst_24326 = inst_24343;var inst_24327 = inst_24345;var inst_24328 = (0);var state_24373__$1 = (function (){var statearr_24393 = state_24373;(statearr_24393[(8)] = inst_24327);
(statearr_24393[(9)] = inst_24325);
(statearr_24393[(10)] = inst_24328);
(statearr_24393[(11)] = inst_24326);
return statearr_24393;
})();var statearr_24394_24427 = state_24373__$1;(statearr_24394_24427[(2)] = null);
(statearr_24394_24427[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24374 === (3)))
{var inst_24371 = (state_24373[(2)]);var state_24373__$1 = state_24373;return cljs.core.async.impl.ioc_helpers.return_chan(state_24373__$1,inst_24371);
} else
{if((state_val_24374 === (12)))
{var inst_24359 = (state_24373[(2)]);var state_24373__$1 = state_24373;var statearr_24395_24428 = state_24373__$1;(statearr_24395_24428[(2)] = inst_24359);
(statearr_24395_24428[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24374 === (2)))
{var state_24373__$1 = state_24373;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24373__$1,(4),in$);
} else
{if((state_val_24374 === (23)))
{var inst_24367 = (state_24373[(2)]);var state_24373__$1 = state_24373;var statearr_24396_24429 = state_24373__$1;(statearr_24396_24429[(2)] = inst_24367);
(statearr_24396_24429[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24374 === (19)))
{var inst_24354 = (state_24373[(2)]);var state_24373__$1 = state_24373;var statearr_24397_24430 = state_24373__$1;(statearr_24397_24430[(2)] = inst_24354);
(statearr_24397_24430[(1)] = (16));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24374 === (11)))
{var inst_24325 = (state_24373[(9)]);var inst_24339 = (state_24373[(7)]);var inst_24339__$1 = cljs.core.seq(inst_24325);var state_24373__$1 = (function (){var statearr_24398 = state_24373;(statearr_24398[(7)] = inst_24339__$1);
return statearr_24398;
})();if(inst_24339__$1)
{var statearr_24399_24431 = state_24373__$1;(statearr_24399_24431[(1)] = (14));
} else
{var statearr_24400_24432 = state_24373__$1;(statearr_24400_24432[(1)] = (15));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24374 === (9)))
{var inst_24361 = (state_24373[(2)]);var inst_24362 = cljs.core.async.impl.protocols.closed_QMARK_(out);var state_24373__$1 = (function (){var statearr_24401 = state_24373;(statearr_24401[(15)] = inst_24361);
return statearr_24401;
})();if(cljs.core.truth_(inst_24362))
{var statearr_24402_24433 = state_24373__$1;(statearr_24402_24433[(1)] = (21));
} else
{var statearr_24403_24434 = state_24373__$1;(statearr_24403_24434[(1)] = (22));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24374 === (5)))
{var inst_24317 = cljs.core.async.close_BANG_(out);var state_24373__$1 = state_24373;var statearr_24404_24435 = state_24373__$1;(statearr_24404_24435[(2)] = inst_24317);
(statearr_24404_24435[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24374 === (14)))
{var inst_24339 = (state_24373[(7)]);var inst_24341 = cljs.core.chunked_seq_QMARK_(inst_24339);var state_24373__$1 = state_24373;if(inst_24341)
{var statearr_24405_24436 = state_24373__$1;(statearr_24405_24436[(1)] = (17));
} else
{var statearr_24406_24437 = state_24373__$1;(statearr_24406_24437[(1)] = (18));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24374 === (16)))
{var inst_24357 = (state_24373[(2)]);var state_24373__$1 = state_24373;var statearr_24407_24438 = state_24373__$1;(statearr_24407_24438[(2)] = inst_24357);
(statearr_24407_24438[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24374 === (10)))
{var inst_24328 = (state_24373[(10)]);var inst_24326 = (state_24373[(11)]);var inst_24333 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24326,inst_24328);var state_24373__$1 = state_24373;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24373__$1,(13),out,inst_24333);
} else
{if((state_val_24374 === (18)))
{var inst_24339 = (state_24373[(7)]);var inst_24348 = cljs.core.first(inst_24339);var state_24373__$1 = state_24373;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24373__$1,(20),out,inst_24348);
} else
{if((state_val_24374 === (8)))
{var inst_24327 = (state_24373[(8)]);var inst_24328 = (state_24373[(10)]);var inst_24330 = (inst_24328 < inst_24327);var inst_24331 = inst_24330;var state_24373__$1 = state_24373;if(cljs.core.truth_(inst_24331))
{var statearr_24408_24439 = state_24373__$1;(statearr_24408_24439[(1)] = (10));
} else
{var statearr_24409_24440 = state_24373__$1;(statearr_24409_24440[(1)] = (11));
}
return cljs.core.constant$keyword$16;
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
});})(c__6524__auto__))
;return ((function (switch__6509__auto__,c__6524__auto__){
return (function() {
var state_machine__6510__auto__ = null;
var state_machine__6510__auto____0 = (function (){var statearr_24413 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24413[(0)] = state_machine__6510__auto__);
(statearr_24413[(1)] = (1));
return statearr_24413;
});
var state_machine__6510__auto____1 = (function (state_24373){while(true){
var ret_value__6511__auto__ = (function (){try{while(true){
var result__6512__auto__ = switch__6509__auto__(state_24373);if(cljs.core.keyword_identical_QMARK_(result__6512__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6512__auto__;
}
break;
}
}catch (e24414){if((e24414 instanceof Object))
{var ex__6513__auto__ = e24414;var statearr_24415_24441 = state_24373;(statearr_24415_24441[(5)] = ex__6513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24373);
return cljs.core.constant$keyword$16;
} else
{throw e24414;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6511__auto__,cljs.core.constant$keyword$16))
{{
var G__24442 = state_24373;
state_24373 = G__24442;
continue;
}
} else
{return ret_value__6511__auto__;
}
break;
}
});
state_machine__6510__auto__ = function(state_24373){
switch(arguments.length){
case 0:
return state_machine__6510__auto____0.call(this);
case 1:
return state_machine__6510__auto____1.call(this,state_24373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6510__auto____0;
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6510__auto____1;
return state_machine__6510__auto__;
})()
;})(switch__6509__auto__,c__6524__auto__))
})();var state__6526__auto__ = (function (){var statearr_24416 = (function (){return (f__6525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6525__auto__.cljs$core$IFn$_invoke$arity$0() : f__6525__auto__.call(null));
})();(statearr_24416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto__);
return statearr_24416;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6526__auto__);
});})(c__6524__auto__))
);
return c__6524__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6524__auto___24546 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6524__auto___24546){
return (function (){var f__6525__auto__ = (function (){var switch__6509__auto__ = ((function (c__6524__auto___24546){
return (function (state_24522){var state_val_24523 = (state_24522[(1)]);if((state_val_24523 === (7)))
{var inst_24518 = (state_24522[(2)]);var state_24522__$1 = state_24522;var statearr_24524_24547 = state_24522__$1;(statearr_24524_24547[(2)] = inst_24518);
(statearr_24524_24547[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24523 === (1)))
{var state_24522__$1 = state_24522;var statearr_24525_24548 = state_24522__$1;(statearr_24525_24548[(2)] = null);
(statearr_24525_24548[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24523 === (4)))
{var inst_24501 = (state_24522[(7)]);var inst_24501__$1 = (state_24522[(2)]);var inst_24502 = (inst_24501__$1 == null);var state_24522__$1 = (function (){var statearr_24526 = state_24522;(statearr_24526[(7)] = inst_24501__$1);
return statearr_24526;
})();if(cljs.core.truth_(inst_24502))
{var statearr_24527_24549 = state_24522__$1;(statearr_24527_24549[(1)] = (5));
} else
{var statearr_24528_24550 = state_24522__$1;(statearr_24528_24550[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24523 === (13)))
{var state_24522__$1 = state_24522;var statearr_24529_24551 = state_24522__$1;(statearr_24529_24551[(2)] = null);
(statearr_24529_24551[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24523 === (6)))
{var inst_24501 = (state_24522[(7)]);var state_24522__$1 = state_24522;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24522__$1,(11),to,inst_24501);
} else
{if((state_val_24523 === (3)))
{var inst_24520 = (state_24522[(2)]);var state_24522__$1 = state_24522;return cljs.core.async.impl.ioc_helpers.return_chan(state_24522__$1,inst_24520);
} else
{if((state_val_24523 === (12)))
{var state_24522__$1 = state_24522;var statearr_24530_24552 = state_24522__$1;(statearr_24530_24552[(2)] = null);
(statearr_24530_24552[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24523 === (2)))
{var state_24522__$1 = state_24522;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24522__$1,(4),from);
} else
{if((state_val_24523 === (11)))
{var inst_24511 = (state_24522[(2)]);var state_24522__$1 = state_24522;if(cljs.core.truth_(inst_24511))
{var statearr_24531_24553 = state_24522__$1;(statearr_24531_24553[(1)] = (12));
} else
{var statearr_24532_24554 = state_24522__$1;(statearr_24532_24554[(1)] = (13));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24523 === (9)))
{var state_24522__$1 = state_24522;var statearr_24533_24555 = state_24522__$1;(statearr_24533_24555[(2)] = null);
(statearr_24533_24555[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24523 === (5)))
{var state_24522__$1 = state_24522;if(cljs.core.truth_(close_QMARK_))
{var statearr_24534_24556 = state_24522__$1;(statearr_24534_24556[(1)] = (8));
} else
{var statearr_24535_24557 = state_24522__$1;(statearr_24535_24557[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24523 === (14)))
{var inst_24516 = (state_24522[(2)]);var state_24522__$1 = state_24522;var statearr_24536_24558 = state_24522__$1;(statearr_24536_24558[(2)] = inst_24516);
(statearr_24536_24558[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24523 === (10)))
{var inst_24508 = (state_24522[(2)]);var state_24522__$1 = state_24522;var statearr_24537_24559 = state_24522__$1;(statearr_24537_24559[(2)] = inst_24508);
(statearr_24537_24559[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24523 === (8)))
{var inst_24505 = cljs.core.async.close_BANG_(to);var state_24522__$1 = state_24522;var statearr_24538_24560 = state_24522__$1;(statearr_24538_24560[(2)] = inst_24505);
(statearr_24538_24560[(1)] = (10));
return cljs.core.constant$keyword$16;
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
});})(c__6524__auto___24546))
;return ((function (switch__6509__auto__,c__6524__auto___24546){
return (function() {
var state_machine__6510__auto__ = null;
var state_machine__6510__auto____0 = (function (){var statearr_24542 = [null,null,null,null,null,null,null,null];(statearr_24542[(0)] = state_machine__6510__auto__);
(statearr_24542[(1)] = (1));
return statearr_24542;
});
var state_machine__6510__auto____1 = (function (state_24522){while(true){
var ret_value__6511__auto__ = (function (){try{while(true){
var result__6512__auto__ = switch__6509__auto__(state_24522);if(cljs.core.keyword_identical_QMARK_(result__6512__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6512__auto__;
}
break;
}
}catch (e24543){if((e24543 instanceof Object))
{var ex__6513__auto__ = e24543;var statearr_24544_24561 = state_24522;(statearr_24544_24561[(5)] = ex__6513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24522);
return cljs.core.constant$keyword$16;
} else
{throw e24543;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6511__auto__,cljs.core.constant$keyword$16))
{{
var G__24562 = state_24522;
state_24522 = G__24562;
continue;
}
} else
{return ret_value__6511__auto__;
}
break;
}
});
state_machine__6510__auto__ = function(state_24522){
switch(arguments.length){
case 0:
return state_machine__6510__auto____0.call(this);
case 1:
return state_machine__6510__auto____1.call(this,state_24522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6510__auto____0;
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6510__auto____1;
return state_machine__6510__auto__;
})()
;})(switch__6509__auto__,c__6524__auto___24546))
})();var state__6526__auto__ = (function (){var statearr_24545 = (function (){return (f__6525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6525__auto__.cljs$core$IFn$_invoke$arity$0() : f__6525__auto__.call(null));
})();(statearr_24545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___24546);
return statearr_24545;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6526__auto__);
});})(c__6524__auto___24546))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__6524__auto___24669 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6524__auto___24669,tc,fc){
return (function (){var f__6525__auto__ = (function (){var switch__6509__auto__ = ((function (c__6524__auto___24669,tc,fc){
return (function (state_24643){var state_val_24644 = (state_24643[(1)]);if((state_val_24644 === (7)))
{var inst_24639 = (state_24643[(2)]);var state_24643__$1 = state_24643;var statearr_24645_24670 = state_24643__$1;(statearr_24645_24670[(2)] = inst_24639);
(statearr_24645_24670[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24644 === (1)))
{var state_24643__$1 = state_24643;var statearr_24646_24671 = state_24643__$1;(statearr_24646_24671[(2)] = null);
(statearr_24646_24671[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24644 === (4)))
{var inst_24620 = (state_24643[(7)]);var inst_24620__$1 = (state_24643[(2)]);var inst_24621 = (inst_24620__$1 == null);var state_24643__$1 = (function (){var statearr_24647 = state_24643;(statearr_24647[(7)] = inst_24620__$1);
return statearr_24647;
})();if(cljs.core.truth_(inst_24621))
{var statearr_24648_24672 = state_24643__$1;(statearr_24648_24672[(1)] = (5));
} else
{var statearr_24649_24673 = state_24643__$1;(statearr_24649_24673[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24644 === (13)))
{var state_24643__$1 = state_24643;var statearr_24650_24674 = state_24643__$1;(statearr_24650_24674[(2)] = null);
(statearr_24650_24674[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24644 === (6)))
{var inst_24620 = (state_24643[(7)]);var inst_24626 = (function (){var G__24651 = inst_24620;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__24651) : p.call(null,G__24651));
})();var state_24643__$1 = state_24643;if(cljs.core.truth_(inst_24626))
{var statearr_24652_24675 = state_24643__$1;(statearr_24652_24675[(1)] = (9));
} else
{var statearr_24653_24676 = state_24643__$1;(statearr_24653_24676[(1)] = (10));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24644 === (3)))
{var inst_24641 = (state_24643[(2)]);var state_24643__$1 = state_24643;return cljs.core.async.impl.ioc_helpers.return_chan(state_24643__$1,inst_24641);
} else
{if((state_val_24644 === (12)))
{var state_24643__$1 = state_24643;var statearr_24654_24677 = state_24643__$1;(statearr_24654_24677[(2)] = null);
(statearr_24654_24677[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24644 === (2)))
{var state_24643__$1 = state_24643;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24643__$1,(4),ch);
} else
{if((state_val_24644 === (11)))
{var inst_24620 = (state_24643[(7)]);var inst_24630 = (state_24643[(2)]);var state_24643__$1 = state_24643;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24643__$1,(8),inst_24630,inst_24620);
} else
{if((state_val_24644 === (9)))
{var state_24643__$1 = state_24643;var statearr_24655_24678 = state_24643__$1;(statearr_24655_24678[(2)] = tc);
(statearr_24655_24678[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24644 === (5)))
{var inst_24623 = cljs.core.async.close_BANG_(tc);var inst_24624 = cljs.core.async.close_BANG_(fc);var state_24643__$1 = (function (){var statearr_24656 = state_24643;(statearr_24656[(8)] = inst_24623);
return statearr_24656;
})();var statearr_24657_24679 = state_24643__$1;(statearr_24657_24679[(2)] = inst_24624);
(statearr_24657_24679[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24644 === (14)))
{var inst_24637 = (state_24643[(2)]);var state_24643__$1 = state_24643;var statearr_24658_24680 = state_24643__$1;(statearr_24658_24680[(2)] = inst_24637);
(statearr_24658_24680[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24644 === (10)))
{var state_24643__$1 = state_24643;var statearr_24659_24681 = state_24643__$1;(statearr_24659_24681[(2)] = fc);
(statearr_24659_24681[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24644 === (8)))
{var inst_24632 = (state_24643[(2)]);var state_24643__$1 = state_24643;if(cljs.core.truth_(inst_24632))
{var statearr_24660_24682 = state_24643__$1;(statearr_24660_24682[(1)] = (12));
} else
{var statearr_24661_24683 = state_24643__$1;(statearr_24661_24683[(1)] = (13));
}
return cljs.core.constant$keyword$16;
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
});})(c__6524__auto___24669,tc,fc))
;return ((function (switch__6509__auto__,c__6524__auto___24669,tc,fc){
return (function() {
var state_machine__6510__auto__ = null;
var state_machine__6510__auto____0 = (function (){var statearr_24665 = [null,null,null,null,null,null,null,null,null];(statearr_24665[(0)] = state_machine__6510__auto__);
(statearr_24665[(1)] = (1));
return statearr_24665;
});
var state_machine__6510__auto____1 = (function (state_24643){while(true){
var ret_value__6511__auto__ = (function (){try{while(true){
var result__6512__auto__ = switch__6509__auto__(state_24643);if(cljs.core.keyword_identical_QMARK_(result__6512__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6512__auto__;
}
break;
}
}catch (e24666){if((e24666 instanceof Object))
{var ex__6513__auto__ = e24666;var statearr_24667_24684 = state_24643;(statearr_24667_24684[(5)] = ex__6513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24643);
return cljs.core.constant$keyword$16;
} else
{throw e24666;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6511__auto__,cljs.core.constant$keyword$16))
{{
var G__24685 = state_24643;
state_24643 = G__24685;
continue;
}
} else
{return ret_value__6511__auto__;
}
break;
}
});
state_machine__6510__auto__ = function(state_24643){
switch(arguments.length){
case 0:
return state_machine__6510__auto____0.call(this);
case 1:
return state_machine__6510__auto____1.call(this,state_24643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6510__auto____0;
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6510__auto____1;
return state_machine__6510__auto__;
})()
;})(switch__6509__auto__,c__6524__auto___24669,tc,fc))
})();var state__6526__auto__ = (function (){var statearr_24668 = (function (){return (f__6525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6525__auto__.cljs$core$IFn$_invoke$arity$0() : f__6525__auto__.call(null));
})();(statearr_24668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___24669);
return statearr_24668;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6526__auto__);
});})(c__6524__auto___24669,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6524__auto__){
return (function (){var f__6525__auto__ = (function (){var switch__6509__auto__ = ((function (c__6524__auto__){
return (function (state_24734){var state_val_24735 = (state_24734[(1)]);if((state_val_24735 === (7)))
{var inst_24730 = (state_24734[(2)]);var state_24734__$1 = state_24734;var statearr_24736_24754 = state_24734__$1;(statearr_24736_24754[(2)] = inst_24730);
(statearr_24736_24754[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24735 === (6)))
{var inst_24720 = (state_24734[(7)]);var inst_24723 = (state_24734[(8)]);var inst_24727 = (function (){var G__24737 = inst_24720;var G__24738 = inst_24723;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24737,G__24738) : f.call(null,G__24737,G__24738));
})();var inst_24720__$1 = inst_24727;var state_24734__$1 = (function (){var statearr_24739 = state_24734;(statearr_24739[(7)] = inst_24720__$1);
return statearr_24739;
})();var statearr_24740_24755 = state_24734__$1;(statearr_24740_24755[(2)] = null);
(statearr_24740_24755[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24735 === (5)))
{var inst_24720 = (state_24734[(7)]);var state_24734__$1 = state_24734;var statearr_24741_24756 = state_24734__$1;(statearr_24741_24756[(2)] = inst_24720);
(statearr_24741_24756[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24735 === (4)))
{var inst_24723 = (state_24734[(8)]);var inst_24723__$1 = (state_24734[(2)]);var inst_24724 = (inst_24723__$1 == null);var state_24734__$1 = (function (){var statearr_24742 = state_24734;(statearr_24742[(8)] = inst_24723__$1);
return statearr_24742;
})();if(cljs.core.truth_(inst_24724))
{var statearr_24743_24757 = state_24734__$1;(statearr_24743_24757[(1)] = (5));
} else
{var statearr_24744_24758 = state_24734__$1;(statearr_24744_24758[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24735 === (3)))
{var inst_24732 = (state_24734[(2)]);var state_24734__$1 = state_24734;return cljs.core.async.impl.ioc_helpers.return_chan(state_24734__$1,inst_24732);
} else
{if((state_val_24735 === (2)))
{var state_24734__$1 = state_24734;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24734__$1,(4),ch);
} else
{if((state_val_24735 === (1)))
{var inst_24720 = init;var state_24734__$1 = (function (){var statearr_24745 = state_24734;(statearr_24745[(7)] = inst_24720);
return statearr_24745;
})();var statearr_24746_24759 = state_24734__$1;(statearr_24746_24759[(2)] = null);
(statearr_24746_24759[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
});})(c__6524__auto__))
;return ((function (switch__6509__auto__,c__6524__auto__){
return (function() {
var state_machine__6510__auto__ = null;
var state_machine__6510__auto____0 = (function (){var statearr_24750 = [null,null,null,null,null,null,null,null,null];(statearr_24750[(0)] = state_machine__6510__auto__);
(statearr_24750[(1)] = (1));
return statearr_24750;
});
var state_machine__6510__auto____1 = (function (state_24734){while(true){
var ret_value__6511__auto__ = (function (){try{while(true){
var result__6512__auto__ = switch__6509__auto__(state_24734);if(cljs.core.keyword_identical_QMARK_(result__6512__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6512__auto__;
}
break;
}
}catch (e24751){if((e24751 instanceof Object))
{var ex__6513__auto__ = e24751;var statearr_24752_24760 = state_24734;(statearr_24752_24760[(5)] = ex__6513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24734);
return cljs.core.constant$keyword$16;
} else
{throw e24751;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6511__auto__,cljs.core.constant$keyword$16))
{{
var G__24761 = state_24734;
state_24734 = G__24761;
continue;
}
} else
{return ret_value__6511__auto__;
}
break;
}
});
state_machine__6510__auto__ = function(state_24734){
switch(arguments.length){
case 0:
return state_machine__6510__auto____0.call(this);
case 1:
return state_machine__6510__auto____1.call(this,state_24734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6510__auto____0;
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6510__auto____1;
return state_machine__6510__auto__;
})()
;})(switch__6509__auto__,c__6524__auto__))
})();var state__6526__auto__ = (function (){var statearr_24753 = (function (){return (f__6525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6525__auto__.cljs$core$IFn$_invoke$arity$0() : f__6525__auto__.call(null));
})();(statearr_24753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto__);
return statearr_24753;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6526__auto__);
});})(c__6524__auto__))
);
return c__6524__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6524__auto__){
return (function (){var f__6525__auto__ = (function (){var switch__6509__auto__ = ((function (c__6524__auto__){
return (function (state_24838){var state_val_24839 = (state_24838[(1)]);if((state_val_24839 === (7)))
{var inst_24820 = (state_24838[(2)]);var state_24838__$1 = state_24838;var statearr_24840_24863 = state_24838__$1;(statearr_24840_24863[(2)] = inst_24820);
(statearr_24840_24863[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24839 === (1)))
{var inst_24814 = cljs.core.seq(coll);var inst_24815 = inst_24814;var state_24838__$1 = (function (){var statearr_24841 = state_24838;(statearr_24841[(7)] = inst_24815);
return statearr_24841;
})();var statearr_24842_24864 = state_24838__$1;(statearr_24842_24864[(2)] = null);
(statearr_24842_24864[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24839 === (4)))
{var inst_24815 = (state_24838[(7)]);var inst_24818 = cljs.core.first(inst_24815);var state_24838__$1 = state_24838;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24838__$1,(7),ch,inst_24818);
} else
{if((state_val_24839 === (13)))
{var inst_24832 = (state_24838[(2)]);var state_24838__$1 = state_24838;var statearr_24843_24865 = state_24838__$1;(statearr_24843_24865[(2)] = inst_24832);
(statearr_24843_24865[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24839 === (6)))
{var inst_24823 = (state_24838[(2)]);var state_24838__$1 = state_24838;if(cljs.core.truth_(inst_24823))
{var statearr_24844_24866 = state_24838__$1;(statearr_24844_24866[(1)] = (8));
} else
{var statearr_24845_24867 = state_24838__$1;(statearr_24845_24867[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24839 === (3)))
{var inst_24836 = (state_24838[(2)]);var state_24838__$1 = state_24838;return cljs.core.async.impl.ioc_helpers.return_chan(state_24838__$1,inst_24836);
} else
{if((state_val_24839 === (12)))
{var state_24838__$1 = state_24838;var statearr_24846_24868 = state_24838__$1;(statearr_24846_24868[(2)] = null);
(statearr_24846_24868[(1)] = (13));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24839 === (2)))
{var inst_24815 = (state_24838[(7)]);var state_24838__$1 = state_24838;if(cljs.core.truth_(inst_24815))
{var statearr_24847_24869 = state_24838__$1;(statearr_24847_24869[(1)] = (4));
} else
{var statearr_24848_24870 = state_24838__$1;(statearr_24848_24870[(1)] = (5));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24839 === (11)))
{var inst_24829 = cljs.core.async.close_BANG_(ch);var state_24838__$1 = state_24838;var statearr_24849_24871 = state_24838__$1;(statearr_24849_24871[(2)] = inst_24829);
(statearr_24849_24871[(1)] = (13));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24839 === (9)))
{var state_24838__$1 = state_24838;if(cljs.core.truth_(close_QMARK_))
{var statearr_24850_24872 = state_24838__$1;(statearr_24850_24872[(1)] = (11));
} else
{var statearr_24851_24873 = state_24838__$1;(statearr_24851_24873[(1)] = (12));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24839 === (5)))
{var inst_24815 = (state_24838[(7)]);var state_24838__$1 = state_24838;var statearr_24852_24874 = state_24838__$1;(statearr_24852_24874[(2)] = inst_24815);
(statearr_24852_24874[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24839 === (10)))
{var inst_24834 = (state_24838[(2)]);var state_24838__$1 = state_24838;var statearr_24853_24875 = state_24838__$1;(statearr_24853_24875[(2)] = inst_24834);
(statearr_24853_24875[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24839 === (8)))
{var inst_24815 = (state_24838[(7)]);var inst_24825 = cljs.core.next(inst_24815);var inst_24815__$1 = inst_24825;var state_24838__$1 = (function (){var statearr_24854 = state_24838;(statearr_24854[(7)] = inst_24815__$1);
return statearr_24854;
})();var statearr_24855_24876 = state_24838__$1;(statearr_24855_24876[(2)] = null);
(statearr_24855_24876[(1)] = (2));
return cljs.core.constant$keyword$16;
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
});})(c__6524__auto__))
;return ((function (switch__6509__auto__,c__6524__auto__){
return (function() {
var state_machine__6510__auto__ = null;
var state_machine__6510__auto____0 = (function (){var statearr_24859 = [null,null,null,null,null,null,null,null];(statearr_24859[(0)] = state_machine__6510__auto__);
(statearr_24859[(1)] = (1));
return statearr_24859;
});
var state_machine__6510__auto____1 = (function (state_24838){while(true){
var ret_value__6511__auto__ = (function (){try{while(true){
var result__6512__auto__ = switch__6509__auto__(state_24838);if(cljs.core.keyword_identical_QMARK_(result__6512__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6512__auto__;
}
break;
}
}catch (e24860){if((e24860 instanceof Object))
{var ex__6513__auto__ = e24860;var statearr_24861_24877 = state_24838;(statearr_24861_24877[(5)] = ex__6513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24838);
return cljs.core.constant$keyword$16;
} else
{throw e24860;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6511__auto__,cljs.core.constant$keyword$16))
{{
var G__24878 = state_24838;
state_24838 = G__24878;
continue;
}
} else
{return ret_value__6511__auto__;
}
break;
}
});
state_machine__6510__auto__ = function(state_24838){
switch(arguments.length){
case 0:
return state_machine__6510__auto____0.call(this);
case 1:
return state_machine__6510__auto____1.call(this,state_24838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6510__auto____0;
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6510__auto____1;
return state_machine__6510__auto__;
})()
;})(switch__6509__auto__,c__6524__auto__))
})();var state__6526__auto__ = (function (){var statearr_24862 = (function (){return (f__6525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6525__auto__.cljs$core$IFn$_invoke$arity$0() : f__6525__auto__.call(null));
})();(statearr_24862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto__);
return statearr_24862;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6526__auto__);
});})(c__6524__auto__))
);
return c__6524__auto__;
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
cljs.core.async.Mux = (function (){var obj24880 = {};return obj24880;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3657__auto__ = _;if(and__3657__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3657__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4305__auto__ = (((_ == null))?null:_);return (function (){var or__3669__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__24884 = x__4305__auto__;return goog.typeOf(G__24884);
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
cljs.core.async.Mult = (function (){var obj24886 = {};return obj24886;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3657__auto__ = m;if(and__3657__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3657__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4305__auto__ = (((m == null))?null:m);return (function (){var or__3669__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__24890 = x__4305__auto__;return goog.typeOf(G__24890);
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
{var x__4305__auto__ = (((m == null))?null:m);return (function (){var or__3669__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__24894 = x__4305__auto__;return goog.typeOf(G__24894);
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
{var x__4305__auto__ = (((m == null))?null:m);return (function (){var or__3669__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__24898 = x__4305__auto__;return goog.typeOf(G__24898);
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
cljs.core.async.mult = (function mult(ch){var cs = (function (){var G__25128 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25128) : cljs.core.atom.call(null,G__25128));
})();var m = (function (){if(typeof cljs.core.async.t25129 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25129 = (function (cs,ch,mult,meta25130){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25130 = meta25130;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25129.cljs$lang$type = true;
cljs.core.async.t25129.cljs$lang$ctorStr = "cljs.core.async/t25129";
cljs.core.async.t25129.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cljs.core.async/t25129");
});})(cs))
;
cljs.core.async.t25129.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25129.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25129.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25129.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;var G__25132_25357 = self__.cs;var G__25133_25358 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25132_25357,G__25133_25358) : cljs.core.reset_BANG_.call(null,G__25132_25357,G__25133_25358));
return null;
});})(cs))
;
cljs.core.async.t25129.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25129.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25129.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25131){var self__ = this;
var _25131__$1 = this;return self__.meta25130;
});})(cs))
;
cljs.core.async.t25129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25131,meta25130__$1){var self__ = this;
var _25131__$1 = this;return (new cljs.core.async.t25129(self__.cs,self__.ch,self__.mult,meta25130__$1));
});})(cs))
;
cljs.core.async.__GT_t25129 = ((function (cs){
return (function __GT_t25129(cs__$1,ch__$1,mult__$1,meta25130){return (new cljs.core.async.t25129(cs__$1,ch__$1,mult__$1,meta25130));
});})(cs))
;
}
return (new cljs.core.async.t25129(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__25134 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25134) : cljs.core.atom.call(null,G__25134));
})();var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6524__auto___25359 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6524__auto___25359,cs,m,dchan,dctr,done){
return (function (){var f__6525__auto__ = (function (){var switch__6509__auto__ = ((function (c__6524__auto___25359,cs,m,dchan,dctr,done){
return (function (state_25265){var state_val_25266 = (state_25265[(1)]);if((state_val_25266 === (7)))
{var inst_25261 = (state_25265[(2)]);var state_25265__$1 = state_25265;var statearr_25267_25360 = state_25265__$1;(statearr_25267_25360[(2)] = inst_25261);
(statearr_25267_25360[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (20)))
{var inst_25166 = (state_25265[(7)]);var inst_25176 = cljs.core.first(inst_25166);var inst_25177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25176,(0),null);var inst_25178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25176,(1),null);var state_25265__$1 = (function (){var statearr_25268 = state_25265;(statearr_25268[(8)] = inst_25177);
return statearr_25268;
})();if(cljs.core.truth_(inst_25178))
{var statearr_25269_25361 = state_25265__$1;(statearr_25269_25361[(1)] = (22));
} else
{var statearr_25270_25362 = state_25265__$1;(statearr_25270_25362[(1)] = (23));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (27)))
{var inst_25213 = (state_25265[(9)]);var inst_25137 = (state_25265[(10)]);var inst_25206 = (state_25265[(11)]);var inst_25208 = (state_25265[(12)]);var inst_25213__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25206,inst_25208);var inst_25214 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25213__$1,inst_25137,done);var state_25265__$1 = (function (){var statearr_25271 = state_25265;(statearr_25271[(9)] = inst_25213__$1);
return statearr_25271;
})();if(cljs.core.truth_(inst_25214))
{var statearr_25272_25363 = state_25265__$1;(statearr_25272_25363[(1)] = (30));
} else
{var statearr_25273_25364 = state_25265__$1;(statearr_25273_25364[(1)] = (31));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (1)))
{var state_25265__$1 = state_25265;var statearr_25274_25365 = state_25265__$1;(statearr_25274_25365[(2)] = null);
(statearr_25274_25365[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (24)))
{var inst_25166 = (state_25265[(7)]);var inst_25183 = (state_25265[(2)]);var inst_25184 = cljs.core.next(inst_25166);var inst_25146 = inst_25184;var inst_25147 = null;var inst_25148 = (0);var inst_25149 = (0);var state_25265__$1 = (function (){var statearr_25275 = state_25265;(statearr_25275[(13)] = inst_25147);
(statearr_25275[(14)] = inst_25146);
(statearr_25275[(15)] = inst_25183);
(statearr_25275[(16)] = inst_25148);
(statearr_25275[(17)] = inst_25149);
return statearr_25275;
})();var statearr_25276_25366 = state_25265__$1;(statearr_25276_25366[(2)] = null);
(statearr_25276_25366[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (39)))
{var state_25265__$1 = state_25265;var statearr_25280_25367 = state_25265__$1;(statearr_25280_25367[(2)] = null);
(statearr_25280_25367[(1)] = (41));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (4)))
{var inst_25137 = (state_25265[(10)]);var inst_25137__$1 = (state_25265[(2)]);var inst_25138 = (inst_25137__$1 == null);var state_25265__$1 = (function (){var statearr_25281 = state_25265;(statearr_25281[(10)] = inst_25137__$1);
return statearr_25281;
})();if(cljs.core.truth_(inst_25138))
{var statearr_25282_25368 = state_25265__$1;(statearr_25282_25368[(1)] = (5));
} else
{var statearr_25283_25369 = state_25265__$1;(statearr_25283_25369[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (15)))
{var inst_25147 = (state_25265[(13)]);var inst_25146 = (state_25265[(14)]);var inst_25148 = (state_25265[(16)]);var inst_25149 = (state_25265[(17)]);var inst_25162 = (state_25265[(2)]);var inst_25163 = (inst_25149 + (1));var tmp25277 = inst_25147;var tmp25278 = inst_25146;var tmp25279 = inst_25148;var inst_25146__$1 = tmp25278;var inst_25147__$1 = tmp25277;var inst_25148__$1 = tmp25279;var inst_25149__$1 = inst_25163;var state_25265__$1 = (function (){var statearr_25284 = state_25265;(statearr_25284[(18)] = inst_25162);
(statearr_25284[(13)] = inst_25147__$1);
(statearr_25284[(14)] = inst_25146__$1);
(statearr_25284[(16)] = inst_25148__$1);
(statearr_25284[(17)] = inst_25149__$1);
return statearr_25284;
})();var statearr_25285_25370 = state_25265__$1;(statearr_25285_25370[(2)] = null);
(statearr_25285_25370[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (21)))
{var inst_25187 = (state_25265[(2)]);var state_25265__$1 = state_25265;var statearr_25289_25371 = state_25265__$1;(statearr_25289_25371[(2)] = inst_25187);
(statearr_25289_25371[(1)] = (18));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (31)))
{var inst_25213 = (state_25265[(9)]);var inst_25217 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_25218 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25213);var state_25265__$1 = (function (){var statearr_25290 = state_25265;(statearr_25290[(19)] = inst_25217);
return statearr_25290;
})();var statearr_25291_25372 = state_25265__$1;(statearr_25291_25372[(2)] = inst_25218);
(statearr_25291_25372[(1)] = (32));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (32)))
{var inst_25207 = (state_25265[(20)]);var inst_25205 = (state_25265[(21)]);var inst_25206 = (state_25265[(11)]);var inst_25208 = (state_25265[(12)]);var inst_25220 = (state_25265[(2)]);var inst_25221 = (inst_25208 + (1));var tmp25286 = inst_25207;var tmp25287 = inst_25205;var tmp25288 = inst_25206;var inst_25205__$1 = tmp25287;var inst_25206__$1 = tmp25288;var inst_25207__$1 = tmp25286;var inst_25208__$1 = inst_25221;var state_25265__$1 = (function (){var statearr_25292 = state_25265;(statearr_25292[(20)] = inst_25207__$1);
(statearr_25292[(22)] = inst_25220);
(statearr_25292[(21)] = inst_25205__$1);
(statearr_25292[(11)] = inst_25206__$1);
(statearr_25292[(12)] = inst_25208__$1);
return statearr_25292;
})();var statearr_25293_25373 = state_25265__$1;(statearr_25293_25373[(2)] = null);
(statearr_25293_25373[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (40)))
{var inst_25233 = (state_25265[(23)]);var inst_25237 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_25238 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25233);var state_25265__$1 = (function (){var statearr_25294 = state_25265;(statearr_25294[(24)] = inst_25237);
return statearr_25294;
})();var statearr_25295_25374 = state_25265__$1;(statearr_25295_25374[(2)] = inst_25238);
(statearr_25295_25374[(1)] = (41));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (33)))
{var inst_25224 = (state_25265[(25)]);var inst_25226 = cljs.core.chunked_seq_QMARK_(inst_25224);var state_25265__$1 = state_25265;if(inst_25226)
{var statearr_25296_25375 = state_25265__$1;(statearr_25296_25375[(1)] = (36));
} else
{var statearr_25297_25376 = state_25265__$1;(statearr_25297_25376[(1)] = (37));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (13)))
{var inst_25156 = (state_25265[(26)]);var inst_25159 = cljs.core.async.close_BANG_(inst_25156);var state_25265__$1 = state_25265;var statearr_25298_25377 = state_25265__$1;(statearr_25298_25377[(2)] = inst_25159);
(statearr_25298_25377[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (22)))
{var inst_25177 = (state_25265[(8)]);var inst_25180 = cljs.core.async.close_BANG_(inst_25177);var state_25265__$1 = state_25265;var statearr_25299_25378 = state_25265__$1;(statearr_25299_25378[(2)] = inst_25180);
(statearr_25299_25378[(1)] = (24));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (36)))
{var inst_25224 = (state_25265[(25)]);var inst_25228 = cljs.core.chunk_first(inst_25224);var inst_25229 = cljs.core.chunk_rest(inst_25224);var inst_25230 = cljs.core.count(inst_25228);var inst_25205 = inst_25229;var inst_25206 = inst_25228;var inst_25207 = inst_25230;var inst_25208 = (0);var state_25265__$1 = (function (){var statearr_25300 = state_25265;(statearr_25300[(20)] = inst_25207);
(statearr_25300[(21)] = inst_25205);
(statearr_25300[(11)] = inst_25206);
(statearr_25300[(12)] = inst_25208);
return statearr_25300;
})();var statearr_25301_25379 = state_25265__$1;(statearr_25301_25379[(2)] = null);
(statearr_25301_25379[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (41)))
{var inst_25224 = (state_25265[(25)]);var inst_25240 = (state_25265[(2)]);var inst_25241 = cljs.core.next(inst_25224);var inst_25205 = inst_25241;var inst_25206 = null;var inst_25207 = (0);var inst_25208 = (0);var state_25265__$1 = (function (){var statearr_25302 = state_25265;(statearr_25302[(20)] = inst_25207);
(statearr_25302[(21)] = inst_25205);
(statearr_25302[(27)] = inst_25240);
(statearr_25302[(11)] = inst_25206);
(statearr_25302[(12)] = inst_25208);
return statearr_25302;
})();var statearr_25303_25380 = state_25265__$1;(statearr_25303_25380[(2)] = null);
(statearr_25303_25380[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (43)))
{var state_25265__$1 = state_25265;var statearr_25304_25381 = state_25265__$1;(statearr_25304_25381[(2)] = null);
(statearr_25304_25381[(1)] = (44));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (29)))
{var inst_25249 = (state_25265[(2)]);var state_25265__$1 = state_25265;var statearr_25305_25382 = state_25265__$1;(statearr_25305_25382[(2)] = inst_25249);
(statearr_25305_25382[(1)] = (26));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (44)))
{var inst_25258 = (state_25265[(2)]);var state_25265__$1 = (function (){var statearr_25306 = state_25265;(statearr_25306[(28)] = inst_25258);
return statearr_25306;
})();var statearr_25307_25383 = state_25265__$1;(statearr_25307_25383[(2)] = null);
(statearr_25307_25383[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (6)))
{var inst_25197 = (state_25265[(29)]);var inst_25196 = (function (){var G__25308 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25308) : cljs.core.deref.call(null,G__25308));
})();var inst_25197__$1 = cljs.core.keys(inst_25196);var inst_25198 = cljs.core.count(inst_25197__$1);var inst_25199 = (function (){var G__25309 = dctr;var G__25310 = inst_25198;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25309,G__25310) : cljs.core.reset_BANG_.call(null,G__25309,G__25310));
})();var inst_25204 = cljs.core.seq(inst_25197__$1);var inst_25205 = inst_25204;var inst_25206 = null;var inst_25207 = (0);var inst_25208 = (0);var state_25265__$1 = (function (){var statearr_25311 = state_25265;(statearr_25311[(20)] = inst_25207);
(statearr_25311[(30)] = inst_25199);
(statearr_25311[(29)] = inst_25197__$1);
(statearr_25311[(21)] = inst_25205);
(statearr_25311[(11)] = inst_25206);
(statearr_25311[(12)] = inst_25208);
return statearr_25311;
})();var statearr_25312_25384 = state_25265__$1;(statearr_25312_25384[(2)] = null);
(statearr_25312_25384[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (28)))
{var inst_25224 = (state_25265[(25)]);var inst_25205 = (state_25265[(21)]);var inst_25224__$1 = cljs.core.seq(inst_25205);var state_25265__$1 = (function (){var statearr_25313 = state_25265;(statearr_25313[(25)] = inst_25224__$1);
return statearr_25313;
})();if(inst_25224__$1)
{var statearr_25314_25385 = state_25265__$1;(statearr_25314_25385[(1)] = (33));
} else
{var statearr_25315_25386 = state_25265__$1;(statearr_25315_25386[(1)] = (34));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (25)))
{var inst_25207 = (state_25265[(20)]);var inst_25208 = (state_25265[(12)]);var inst_25210 = (inst_25208 < inst_25207);var inst_25211 = inst_25210;var state_25265__$1 = state_25265;if(cljs.core.truth_(inst_25211))
{var statearr_25316_25387 = state_25265__$1;(statearr_25316_25387[(1)] = (27));
} else
{var statearr_25317_25388 = state_25265__$1;(statearr_25317_25388[(1)] = (28));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (34)))
{var state_25265__$1 = state_25265;var statearr_25318_25389 = state_25265__$1;(statearr_25318_25389[(2)] = null);
(statearr_25318_25389[(1)] = (35));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (17)))
{var state_25265__$1 = state_25265;var statearr_25319_25390 = state_25265__$1;(statearr_25319_25390[(2)] = null);
(statearr_25319_25390[(1)] = (18));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (3)))
{var inst_25263 = (state_25265[(2)]);var state_25265__$1 = state_25265;return cljs.core.async.impl.ioc_helpers.return_chan(state_25265__$1,inst_25263);
} else
{if((state_val_25266 === (12)))
{var inst_25192 = (state_25265[(2)]);var state_25265__$1 = state_25265;var statearr_25320_25391 = state_25265__$1;(statearr_25320_25391[(2)] = inst_25192);
(statearr_25320_25391[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (2)))
{var state_25265__$1 = state_25265;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25265__$1,(4),ch);
} else
{if((state_val_25266 === (23)))
{var state_25265__$1 = state_25265;var statearr_25321_25392 = state_25265__$1;(statearr_25321_25392[(2)] = null);
(statearr_25321_25392[(1)] = (24));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (35)))
{var inst_25247 = (state_25265[(2)]);var state_25265__$1 = state_25265;var statearr_25322_25393 = state_25265__$1;(statearr_25322_25393[(2)] = inst_25247);
(statearr_25322_25393[(1)] = (29));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (19)))
{var inst_25166 = (state_25265[(7)]);var inst_25170 = cljs.core.chunk_first(inst_25166);var inst_25171 = cljs.core.chunk_rest(inst_25166);var inst_25172 = cljs.core.count(inst_25170);var inst_25146 = inst_25171;var inst_25147 = inst_25170;var inst_25148 = inst_25172;var inst_25149 = (0);var state_25265__$1 = (function (){var statearr_25323 = state_25265;(statearr_25323[(13)] = inst_25147);
(statearr_25323[(14)] = inst_25146);
(statearr_25323[(16)] = inst_25148);
(statearr_25323[(17)] = inst_25149);
return statearr_25323;
})();var statearr_25324_25394 = state_25265__$1;(statearr_25324_25394[(2)] = null);
(statearr_25324_25394[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (11)))
{var inst_25166 = (state_25265[(7)]);var inst_25146 = (state_25265[(14)]);var inst_25166__$1 = cljs.core.seq(inst_25146);var state_25265__$1 = (function (){var statearr_25325 = state_25265;(statearr_25325[(7)] = inst_25166__$1);
return statearr_25325;
})();if(inst_25166__$1)
{var statearr_25326_25395 = state_25265__$1;(statearr_25326_25395[(1)] = (16));
} else
{var statearr_25327_25396 = state_25265__$1;(statearr_25327_25396[(1)] = (17));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (9)))
{var inst_25194 = (state_25265[(2)]);var state_25265__$1 = state_25265;var statearr_25328_25397 = state_25265__$1;(statearr_25328_25397[(2)] = inst_25194);
(statearr_25328_25397[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (5)))
{var inst_25144 = (function (){var G__25329 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25329) : cljs.core.deref.call(null,G__25329));
})();var inst_25145 = cljs.core.seq(inst_25144);var inst_25146 = inst_25145;var inst_25147 = null;var inst_25148 = (0);var inst_25149 = (0);var state_25265__$1 = (function (){var statearr_25330 = state_25265;(statearr_25330[(13)] = inst_25147);
(statearr_25330[(14)] = inst_25146);
(statearr_25330[(16)] = inst_25148);
(statearr_25330[(17)] = inst_25149);
return statearr_25330;
})();var statearr_25331_25398 = state_25265__$1;(statearr_25331_25398[(2)] = null);
(statearr_25331_25398[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (14)))
{var state_25265__$1 = state_25265;var statearr_25332_25399 = state_25265__$1;(statearr_25332_25399[(2)] = null);
(statearr_25332_25399[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (45)))
{var inst_25255 = (state_25265[(2)]);var state_25265__$1 = state_25265;var statearr_25333_25400 = state_25265__$1;(statearr_25333_25400[(2)] = inst_25255);
(statearr_25333_25400[(1)] = (44));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (26)))
{var inst_25197 = (state_25265[(29)]);var inst_25251 = (state_25265[(2)]);var inst_25252 = cljs.core.seq(inst_25197);var state_25265__$1 = (function (){var statearr_25334 = state_25265;(statearr_25334[(31)] = inst_25251);
return statearr_25334;
})();if(inst_25252)
{var statearr_25335_25401 = state_25265__$1;(statearr_25335_25401[(1)] = (42));
} else
{var statearr_25336_25402 = state_25265__$1;(statearr_25336_25402[(1)] = (43));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (16)))
{var inst_25166 = (state_25265[(7)]);var inst_25168 = cljs.core.chunked_seq_QMARK_(inst_25166);var state_25265__$1 = state_25265;if(inst_25168)
{var statearr_25337_25403 = state_25265__$1;(statearr_25337_25403[(1)] = (19));
} else
{var statearr_25338_25404 = state_25265__$1;(statearr_25338_25404[(1)] = (20));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (38)))
{var inst_25244 = (state_25265[(2)]);var state_25265__$1 = state_25265;var statearr_25339_25405 = state_25265__$1;(statearr_25339_25405[(2)] = inst_25244);
(statearr_25339_25405[(1)] = (35));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (30)))
{var state_25265__$1 = state_25265;var statearr_25340_25406 = state_25265__$1;(statearr_25340_25406[(2)] = null);
(statearr_25340_25406[(1)] = (32));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (10)))
{var inst_25147 = (state_25265[(13)]);var inst_25149 = (state_25265[(17)]);var inst_25155 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25147,inst_25149);var inst_25156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25155,(0),null);var inst_25157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25155,(1),null);var state_25265__$1 = (function (){var statearr_25341 = state_25265;(statearr_25341[(26)] = inst_25156);
return statearr_25341;
})();if(cljs.core.truth_(inst_25157))
{var statearr_25342_25407 = state_25265__$1;(statearr_25342_25407[(1)] = (13));
} else
{var statearr_25343_25408 = state_25265__$1;(statearr_25343_25408[(1)] = (14));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (18)))
{var inst_25190 = (state_25265[(2)]);var state_25265__$1 = state_25265;var statearr_25344_25409 = state_25265__$1;(statearr_25344_25409[(2)] = inst_25190);
(statearr_25344_25409[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (42)))
{var state_25265__$1 = state_25265;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25265__$1,(45),dchan);
} else
{if((state_val_25266 === (37)))
{var inst_25224 = (state_25265[(25)]);var inst_25137 = (state_25265[(10)]);var inst_25233 = (state_25265[(23)]);var inst_25233__$1 = cljs.core.first(inst_25224);var inst_25234 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25233__$1,inst_25137,done);var state_25265__$1 = (function (){var statearr_25345 = state_25265;(statearr_25345[(23)] = inst_25233__$1);
return statearr_25345;
})();if(cljs.core.truth_(inst_25234))
{var statearr_25346_25410 = state_25265__$1;(statearr_25346_25410[(1)] = (39));
} else
{var statearr_25347_25411 = state_25265__$1;(statearr_25347_25411[(1)] = (40));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25266 === (8)))
{var inst_25148 = (state_25265[(16)]);var inst_25149 = (state_25265[(17)]);var inst_25151 = (inst_25149 < inst_25148);var inst_25152 = inst_25151;var state_25265__$1 = state_25265;if(cljs.core.truth_(inst_25152))
{var statearr_25348_25412 = state_25265__$1;(statearr_25348_25412[(1)] = (10));
} else
{var statearr_25349_25413 = state_25265__$1;(statearr_25349_25413[(1)] = (11));
}
return cljs.core.constant$keyword$16;
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
});})(c__6524__auto___25359,cs,m,dchan,dctr,done))
;return ((function (switch__6509__auto__,c__6524__auto___25359,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6510__auto__ = null;
var state_machine__6510__auto____0 = (function (){var statearr_25353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25353[(0)] = state_machine__6510__auto__);
(statearr_25353[(1)] = (1));
return statearr_25353;
});
var state_machine__6510__auto____1 = (function (state_25265){while(true){
var ret_value__6511__auto__ = (function (){try{while(true){
var result__6512__auto__ = switch__6509__auto__(state_25265);if(cljs.core.keyword_identical_QMARK_(result__6512__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6512__auto__;
}
break;
}
}catch (e25354){if((e25354 instanceof Object))
{var ex__6513__auto__ = e25354;var statearr_25355_25414 = state_25265;(statearr_25355_25414[(5)] = ex__6513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25265);
return cljs.core.constant$keyword$16;
} else
{throw e25354;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6511__auto__,cljs.core.constant$keyword$16))
{{
var G__25415 = state_25265;
state_25265 = G__25415;
continue;
}
} else
{return ret_value__6511__auto__;
}
break;
}
});
state_machine__6510__auto__ = function(state_25265){
switch(arguments.length){
case 0:
return state_machine__6510__auto____0.call(this);
case 1:
return state_machine__6510__auto____1.call(this,state_25265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6510__auto____0;
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6510__auto____1;
return state_machine__6510__auto__;
})()
;})(switch__6509__auto__,c__6524__auto___25359,cs,m,dchan,dctr,done))
})();var state__6526__auto__ = (function (){var statearr_25356 = (function (){return (f__6525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6525__auto__.cljs$core$IFn$_invoke$arity$0() : f__6525__auto__.call(null));
})();(statearr_25356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___25359);
return statearr_25356;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6526__auto__);
});})(c__6524__auto___25359,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj25420 = {};return obj25420;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3657__auto__ = m;if(and__3657__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3657__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4305__auto__ = (((m == null))?null:m);return (function (){var or__3669__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__25424 = x__4305__auto__;return goog.typeOf(G__25424);
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
{var x__4305__auto__ = (((m == null))?null:m);return (function (){var or__3669__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__25428 = x__4305__auto__;return goog.typeOf(G__25428);
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
{var x__4305__auto__ = (((m == null))?null:m);return (function (){var or__3669__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__25432 = x__4305__auto__;return goog.typeOf(G__25432);
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
{var x__4305__auto__ = (((m == null))?null:m);return (function (){var or__3669__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__25436 = x__4305__auto__;return goog.typeOf(G__25436);
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
{var x__4305__auto__ = (((m == null))?null:m);return (function (){var or__3669__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__25440 = x__4305__auto__;return goog.typeOf(G__25440);
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
cljs.core.async.mix = (function mix(out){var cs = (function (){var G__25574 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25574) : cljs.core.atom.call(null,G__25574));
})();var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$23,null,cljs.core.constant$keyword$24,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$25);var solo_mode = (function (){var G__25575 = cljs.core.constant$keyword$24;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25575) : cljs.core.atom.call(null,G__25575));
})();var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((function (){var G__25576 = v;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__25576) : attr.call(null,G__25576));
})()))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = (function (){var G__25577 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25577) : cljs.core.deref.call(null,G__25577));
})();var mode = (function (){var G__25578 = solo_mode;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25578) : cljs.core.deref.call(null,G__25578));
})();var solos = pick(cljs.core.constant$keyword$25,chs);var pauses = pick(cljs.core.constant$keyword$23,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$26,solos,cljs.core.constant$keyword$27,pick(cljs.core.constant$keyword$24,chs),cljs.core.constant$keyword$28,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$23)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t25579 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25579 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25580){
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
this.meta25580 = meta25580;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25579.cljs$lang$type = true;
cljs.core.async.t25579.cljs$lang$ctorStr = "cljs.core.async/t25579";
cljs.core.async.t25579.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cljs.core.async/t25579");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25579.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25579.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25579.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25579.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;var G__25582_25707 = self__.cs;var G__25583_25708 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25582_25707,G__25583_25708) : cljs.core.reset_BANG_.call(null,G__25582_25707,G__25583_25708));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25579.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25579.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__25584 = mode;return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__25584) : self__.solo_modes.call(null,G__25584));
})()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
var G__25585_25709 = self__.solo_mode;var G__25586_25710 = mode;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25585_25709,G__25586_25710) : cljs.core.reset_BANG_.call(null,G__25585_25709,G__25586_25710));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25579.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25579.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25579.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25581){var self__ = this;
var _25581__$1 = this;return self__.meta25580;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25581,meta25580__$1){var self__ = this;
var _25581__$1 = this;return (new cljs.core.async.t25579(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25580__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25579 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25579(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25580){return (new cljs.core.async.t25579(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25580));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25579(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6524__auto___25711 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6524__auto___25711,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6525__auto__ = (function (){var switch__6509__auto__ = ((function (c__6524__auto___25711,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25658){var state_val_25659 = (state_25658[(1)]);if((state_val_25659 === (7)))
{var inst_25600 = (state_25658[(7)]);var inst_25605 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25600);var state_25658__$1 = state_25658;var statearr_25660_25712 = state_25658__$1;(statearr_25660_25712[(2)] = inst_25605);
(statearr_25660_25712[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25659 === (20)))
{var inst_25615 = (state_25658[(8)]);var state_25658__$1 = state_25658;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25658__$1,(23),out,inst_25615);
} else
{if((state_val_25659 === (1)))
{var inst_25590 = (state_25658[(9)]);var inst_25590__$1 = calc_state();var inst_25591 = cljs.core.seq_QMARK_(inst_25590__$1);var state_25658__$1 = (function (){var statearr_25661 = state_25658;(statearr_25661[(9)] = inst_25590__$1);
return statearr_25661;
})();if(inst_25591)
{var statearr_25662_25713 = state_25658__$1;(statearr_25662_25713[(1)] = (2));
} else
{var statearr_25663_25714 = state_25658__$1;(statearr_25663_25714[(1)] = (3));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25659 === (24)))
{var inst_25608 = (state_25658[(10)]);var inst_25600 = inst_25608;var state_25658__$1 = (function (){var statearr_25664 = state_25658;(statearr_25664[(7)] = inst_25600);
return statearr_25664;
})();var statearr_25665_25715 = state_25658__$1;(statearr_25665_25715[(2)] = null);
(statearr_25665_25715[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25659 === (4)))
{var inst_25590 = (state_25658[(9)]);var inst_25596 = (state_25658[(2)]);var inst_25597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25596,cljs.core.constant$keyword$28);var inst_25598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25596,cljs.core.constant$keyword$27);var inst_25599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25596,cljs.core.constant$keyword$26);var inst_25600 = inst_25590;var state_25658__$1 = (function (){var statearr_25666 = state_25658;(statearr_25666[(11)] = inst_25598);
(statearr_25666[(7)] = inst_25600);
(statearr_25666[(12)] = inst_25597);
(statearr_25666[(13)] = inst_25599);
return statearr_25666;
})();var statearr_25667_25716 = state_25658__$1;(statearr_25667_25716[(2)] = null);
(statearr_25667_25716[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25659 === (15)))
{var state_25658__$1 = state_25658;var statearr_25668_25717 = state_25658__$1;(statearr_25668_25717[(2)] = null);
(statearr_25668_25717[(1)] = (16));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25659 === (21)))
{var inst_25608 = (state_25658[(10)]);var inst_25600 = inst_25608;var state_25658__$1 = (function (){var statearr_25669 = state_25658;(statearr_25669[(7)] = inst_25600);
return statearr_25669;
})();var statearr_25670_25718 = state_25658__$1;(statearr_25670_25718[(2)] = null);
(statearr_25670_25718[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25659 === (13)))
{var inst_25654 = (state_25658[(2)]);var state_25658__$1 = state_25658;var statearr_25671_25719 = state_25658__$1;(statearr_25671_25719[(2)] = inst_25654);
(statearr_25671_25719[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25659 === (22)))
{var inst_25652 = (state_25658[(2)]);var state_25658__$1 = state_25658;var statearr_25672_25720 = state_25658__$1;(statearr_25672_25720[(2)] = inst_25652);
(statearr_25672_25720[(1)] = (13));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25659 === (6)))
{var inst_25656 = (state_25658[(2)]);var state_25658__$1 = state_25658;return cljs.core.async.impl.ioc_helpers.return_chan(state_25658__$1,inst_25656);
} else
{if((state_val_25659 === (25)))
{var state_25658__$1 = state_25658;var statearr_25673_25721 = state_25658__$1;(statearr_25673_25721[(2)] = null);
(statearr_25673_25721[(1)] = (26));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25659 === (17)))
{var inst_25631 = (state_25658[(14)]);var state_25658__$1 = state_25658;var statearr_25674_25722 = state_25658__$1;(statearr_25674_25722[(2)] = inst_25631);
(statearr_25674_25722[(1)] = (19));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25659 === (3)))
{var inst_25590 = (state_25658[(9)]);var state_25658__$1 = state_25658;var statearr_25675_25723 = state_25658__$1;(statearr_25675_25723[(2)] = inst_25590);
(statearr_25675_25723[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25659 === (12)))
{var inst_25631 = (state_25658[(14)]);var inst_25616 = (state_25658[(15)]);var inst_25611 = (state_25658[(16)]);var inst_25631__$1 = (function (){var G__25676 = inst_25616;return (inst_25611.cljs$core$IFn$_invoke$arity$1 ? inst_25611.cljs$core$IFn$_invoke$arity$1(G__25676) : inst_25611.call(null,G__25676));
})();var state_25658__$1 = (function (){var statearr_25677 = state_25658;(statearr_25677[(14)] = inst_25631__$1);
return statearr_25677;
})();if(cljs.core.truth_(inst_25631__$1))
{var statearr_25678_25724 = state_25658__$1;(statearr_25678_25724[(1)] = (17));
} else
{var statearr_25679_25725 = state_25658__$1;(statearr_25679_25725[(1)] = (18));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25659 === (2)))
{var inst_25590 = (state_25658[(9)]);var inst_25593 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25590);var state_25658__$1 = state_25658;var statearr_25680_25726 = state_25658__$1;(statearr_25680_25726[(2)] = inst_25593);
(statearr_25680_25726[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25659 === (23)))
{var inst_25643 = (state_25658[(2)]);var state_25658__$1 = state_25658;if(cljs.core.truth_(inst_25643))
{var statearr_25681_25727 = state_25658__$1;(statearr_25681_25727[(1)] = (24));
} else
{var statearr_25682_25728 = state_25658__$1;(statearr_25682_25728[(1)] = (25));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25659 === (19)))
{var inst_25640 = (state_25658[(2)]);var state_25658__$1 = state_25658;if(cljs.core.truth_(inst_25640))
{var statearr_25683_25729 = state_25658__$1;(statearr_25683_25729[(1)] = (20));
} else
{var statearr_25684_25730 = state_25658__$1;(statearr_25684_25730[(1)] = (21));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25659 === (11)))
{var inst_25615 = (state_25658[(8)]);var inst_25621 = (inst_25615 == null);var state_25658__$1 = state_25658;if(cljs.core.truth_(inst_25621))
{var statearr_25685_25731 = state_25658__$1;(statearr_25685_25731[(1)] = (14));
} else
{var statearr_25686_25732 = state_25658__$1;(statearr_25686_25732[(1)] = (15));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25659 === (9)))
{var inst_25608 = (state_25658[(10)]);var inst_25608__$1 = (state_25658[(2)]);var inst_25609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25608__$1,cljs.core.constant$keyword$28);var inst_25610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25608__$1,cljs.core.constant$keyword$27);var inst_25611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25608__$1,cljs.core.constant$keyword$26);var state_25658__$1 = (function (){var statearr_25687 = state_25658;(statearr_25687[(10)] = inst_25608__$1);
(statearr_25687[(16)] = inst_25611);
(statearr_25687[(17)] = inst_25610);
return statearr_25687;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_25658__$1,(10),inst_25609);
} else
{if((state_val_25659 === (5)))
{var inst_25600 = (state_25658[(7)]);var inst_25603 = cljs.core.seq_QMARK_(inst_25600);var state_25658__$1 = state_25658;if(inst_25603)
{var statearr_25688_25733 = state_25658__$1;(statearr_25688_25733[(1)] = (7));
} else
{var statearr_25689_25734 = state_25658__$1;(statearr_25689_25734[(1)] = (8));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25659 === (14)))
{var inst_25616 = (state_25658[(15)]);var inst_25623 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25616);var state_25658__$1 = state_25658;var statearr_25690_25735 = state_25658__$1;(statearr_25690_25735[(2)] = inst_25623);
(statearr_25690_25735[(1)] = (16));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25659 === (26)))
{var inst_25648 = (state_25658[(2)]);var state_25658__$1 = state_25658;var statearr_25691_25736 = state_25658__$1;(statearr_25691_25736[(2)] = inst_25648);
(statearr_25691_25736[(1)] = (22));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25659 === (16)))
{var inst_25626 = (state_25658[(2)]);var inst_25627 = calc_state();var inst_25600 = inst_25627;var state_25658__$1 = (function (){var statearr_25692 = state_25658;(statearr_25692[(7)] = inst_25600);
(statearr_25692[(18)] = inst_25626);
return statearr_25692;
})();var statearr_25693_25737 = state_25658__$1;(statearr_25693_25737[(2)] = null);
(statearr_25693_25737[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25659 === (10)))
{var inst_25616 = (state_25658[(15)]);var inst_25615 = (state_25658[(8)]);var inst_25614 = (state_25658[(2)]);var inst_25615__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25614,(0),null);var inst_25616__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25614,(1),null);var inst_25617 = (inst_25615__$1 == null);var inst_25618 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25616__$1,change);var inst_25619 = (inst_25617) || (inst_25618);var state_25658__$1 = (function (){var statearr_25694 = state_25658;(statearr_25694[(15)] = inst_25616__$1);
(statearr_25694[(8)] = inst_25615__$1);
return statearr_25694;
})();if(cljs.core.truth_(inst_25619))
{var statearr_25695_25738 = state_25658__$1;(statearr_25695_25738[(1)] = (11));
} else
{var statearr_25696_25739 = state_25658__$1;(statearr_25696_25739[(1)] = (12));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25659 === (18)))
{var inst_25616 = (state_25658[(15)]);var inst_25611 = (state_25658[(16)]);var inst_25610 = (state_25658[(17)]);var inst_25635 = cljs.core.empty_QMARK_(inst_25611);var inst_25636 = (function (){var G__25697 = inst_25616;return (inst_25610.cljs$core$IFn$_invoke$arity$1 ? inst_25610.cljs$core$IFn$_invoke$arity$1(G__25697) : inst_25610.call(null,G__25697));
})();var inst_25637 = cljs.core.not(inst_25636);var inst_25638 = (inst_25635) && (inst_25637);var state_25658__$1 = state_25658;var statearr_25698_25740 = state_25658__$1;(statearr_25698_25740[(2)] = inst_25638);
(statearr_25698_25740[(1)] = (19));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25659 === (8)))
{var inst_25600 = (state_25658[(7)]);var state_25658__$1 = state_25658;var statearr_25699_25741 = state_25658__$1;(statearr_25699_25741[(2)] = inst_25600);
(statearr_25699_25741[(1)] = (9));
return cljs.core.constant$keyword$16;
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
});})(c__6524__auto___25711,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6509__auto__,c__6524__auto___25711,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6510__auto__ = null;
var state_machine__6510__auto____0 = (function (){var statearr_25703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25703[(0)] = state_machine__6510__auto__);
(statearr_25703[(1)] = (1));
return statearr_25703;
});
var state_machine__6510__auto____1 = (function (state_25658){while(true){
var ret_value__6511__auto__ = (function (){try{while(true){
var result__6512__auto__ = switch__6509__auto__(state_25658);if(cljs.core.keyword_identical_QMARK_(result__6512__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6512__auto__;
}
break;
}
}catch (e25704){if((e25704 instanceof Object))
{var ex__6513__auto__ = e25704;var statearr_25705_25742 = state_25658;(statearr_25705_25742[(5)] = ex__6513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25658);
return cljs.core.constant$keyword$16;
} else
{throw e25704;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6511__auto__,cljs.core.constant$keyword$16))
{{
var G__25743 = state_25658;
state_25658 = G__25743;
continue;
}
} else
{return ret_value__6511__auto__;
}
break;
}
});
state_machine__6510__auto__ = function(state_25658){
switch(arguments.length){
case 0:
return state_machine__6510__auto____0.call(this);
case 1:
return state_machine__6510__auto____1.call(this,state_25658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6510__auto____0;
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6510__auto____1;
return state_machine__6510__auto__;
})()
;})(switch__6509__auto__,c__6524__auto___25711,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6526__auto__ = (function (){var statearr_25706 = (function (){return (f__6525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6525__auto__.cljs$core$IFn$_invoke$arity$0() : f__6525__auto__.call(null));
})();(statearr_25706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___25711);
return statearr_25706;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6526__auto__);
});})(c__6524__auto___25711,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj25745 = {};return obj25745;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3657__auto__ = p;if(and__3657__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3657__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4305__auto__ = (((p == null))?null:p);return (function (){var or__3669__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__25749 = x__4305__auto__;return goog.typeOf(G__25749);
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
{var x__4305__auto__ = (((p == null))?null:p);return (function (){var or__3669__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__25753 = x__4305__auto__;return goog.typeOf(G__25753);
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
{var x__4305__auto__ = (((p == null))?null:p);return (function (){var or__3669__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__25759 = x__4305__auto__;return goog.typeOf(G__25759);
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
{var x__4305__auto__ = (((p == null))?null:p);return (function (){var or__3669__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__25761 = x__4305__auto__;return goog.typeOf(G__25761);
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
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = (function (){var G__25892 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25892) : cljs.core.atom.call(null,G__25892));
})();var ensure_mult = ((function (mults){
return (function (topic){var or__3669__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__25894 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25894) : cljs.core.deref.call(null,G__25894));
})(),topic);if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3669__auto__,mults){
return (function (p1__25762_SHARP_){if(cljs.core.truth_((function (){var G__25895 = topic;return (p1__25762_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25762_SHARP_.cljs$core$IFn$_invoke$arity$1(G__25895) : p1__25762_SHARP_.call(null,G__25895));
})()))
{return p1__25762_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25762_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__25896 = topic;return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__25896) : buf_fn.call(null,G__25896));
})())));
}
});})(or__3669__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25897 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25897 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25898){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25898 = meta25898;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25897.cljs$lang$type = true;
cljs.core.async.t25897.cljs$lang$ctorStr = "cljs.core.async/t25897";
cljs.core.async.t25897.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"cljs.core.async/t25897");
});})(mults,ensure_mult))
;
cljs.core.async.t25897.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25897.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (function (){var G__25900 = topic;return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__25900) : self__.ensure_mult.call(null,G__25900));
})();return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25897.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__25901 = self__.mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25901) : cljs.core.deref.call(null,G__25901));
})(),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25897.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;var G__25902 = self__.mults;var G__25903 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25902,G__25903) : cljs.core.reset_BANG_.call(null,G__25902,G__25903));
});})(mults,ensure_mult))
;
cljs.core.async.t25897.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25897.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25897.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25897.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25899){var self__ = this;
var _25899__$1 = this;return self__.meta25898;
});})(mults,ensure_mult))
;
cljs.core.async.t25897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25899,meta25898__$1){var self__ = this;
var _25899__$1 = this;return (new cljs.core.async.t25897(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25898__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25897 = ((function (mults,ensure_mult){
return (function __GT_t25897(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25898){return (new cljs.core.async.t25897(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25898));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25897(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6524__auto___26018 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6524__auto___26018,mults,ensure_mult,p){
return (function (){var f__6525__auto__ = (function (){var switch__6509__auto__ = ((function (c__6524__auto___26018,mults,ensure_mult,p){
return (function (state_25971){var state_val_25972 = (state_25971[(1)]);if((state_val_25972 === (7)))
{var inst_25967 = (state_25971[(2)]);var state_25971__$1 = state_25971;var statearr_25973_26019 = state_25971__$1;(statearr_25973_26019[(2)] = inst_25967);
(statearr_25973_26019[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25972 === (20)))
{var state_25971__$1 = state_25971;var statearr_25974_26020 = state_25971__$1;(statearr_25974_26020[(2)] = null);
(statearr_25974_26020[(1)] = (22));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25972 === (1)))
{var state_25971__$1 = state_25971;var statearr_25975_26021 = state_25971__$1;(statearr_25975_26021[(2)] = null);
(statearr_25975_26021[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25972 === (4)))
{var inst_25906 = (state_25971[(7)]);var inst_25906__$1 = (state_25971[(2)]);var inst_25907 = (inst_25906__$1 == null);var state_25971__$1 = (function (){var statearr_25976 = state_25971;(statearr_25976[(7)] = inst_25906__$1);
return statearr_25976;
})();if(cljs.core.truth_(inst_25907))
{var statearr_25977_26022 = state_25971__$1;(statearr_25977_26022[(1)] = (5));
} else
{var statearr_25978_26023 = state_25971__$1;(statearr_25978_26023[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25972 === (15)))
{var inst_25948 = (state_25971[(2)]);var state_25971__$1 = state_25971;var statearr_25979_26024 = state_25971__$1;(statearr_25979_26024[(2)] = inst_25948);
(statearr_25979_26024[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25972 === (21)))
{var inst_25954 = (state_25971[(8)]);var inst_25962 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25954);var state_25971__$1 = state_25971;var statearr_25980_26025 = state_25971__$1;(statearr_25980_26025[(2)] = inst_25962);
(statearr_25980_26025[(1)] = (22));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25972 === (13)))
{var inst_25930 = (state_25971[(9)]);var inst_25932 = cljs.core.chunked_seq_QMARK_(inst_25930);var state_25971__$1 = state_25971;if(inst_25932)
{var statearr_25981_26026 = state_25971__$1;(statearr_25981_26026[(1)] = (16));
} else
{var statearr_25982_26027 = state_25971__$1;(statearr_25982_26027[(1)] = (17));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25972 === (22)))
{var inst_25964 = (state_25971[(2)]);var state_25971__$1 = (function (){var statearr_25983 = state_25971;(statearr_25983[(10)] = inst_25964);
return statearr_25983;
})();var statearr_25984_26028 = state_25971__$1;(statearr_25984_26028[(2)] = null);
(statearr_25984_26028[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25972 === (6)))
{var inst_25954 = (state_25971[(8)]);var inst_25906 = (state_25971[(7)]);var inst_25954__$1 = (function (){var G__25985 = inst_25906;return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__25985) : topic_fn.call(null,G__25985));
})();var inst_25955 = (function (){var G__25986 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25986) : cljs.core.deref.call(null,G__25986));
})();var inst_25956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25955,inst_25954__$1);var inst_25957 = cljs.core.async.muxch_STAR_(inst_25956);var state_25971__$1 = (function (){var statearr_25987 = state_25971;(statearr_25987[(8)] = inst_25954__$1);
return statearr_25987;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25971__$1,(19),inst_25957,inst_25906);
} else
{if((state_val_25972 === (17)))
{var inst_25930 = (state_25971[(9)]);var inst_25939 = cljs.core.first(inst_25930);var inst_25940 = cljs.core.async.muxch_STAR_(inst_25939);var inst_25941 = cljs.core.async.close_BANG_(inst_25940);var inst_25942 = cljs.core.next(inst_25930);var inst_25916 = inst_25942;var inst_25917 = null;var inst_25918 = (0);var inst_25919 = (0);var state_25971__$1 = (function (){var statearr_25988 = state_25971;(statearr_25988[(11)] = inst_25941);
(statearr_25988[(12)] = inst_25917);
(statearr_25988[(13)] = inst_25919);
(statearr_25988[(14)] = inst_25918);
(statearr_25988[(15)] = inst_25916);
return statearr_25988;
})();var statearr_25989_26029 = state_25971__$1;(statearr_25989_26029[(2)] = null);
(statearr_25989_26029[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25972 === (3)))
{var inst_25969 = (state_25971[(2)]);var state_25971__$1 = state_25971;return cljs.core.async.impl.ioc_helpers.return_chan(state_25971__$1,inst_25969);
} else
{if((state_val_25972 === (12)))
{var inst_25950 = (state_25971[(2)]);var state_25971__$1 = state_25971;var statearr_25990_26030 = state_25971__$1;(statearr_25990_26030[(2)] = inst_25950);
(statearr_25990_26030[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25972 === (2)))
{var state_25971__$1 = state_25971;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25971__$1,(4),ch);
} else
{if((state_val_25972 === (19)))
{var inst_25959 = (state_25971[(2)]);var state_25971__$1 = state_25971;if(cljs.core.truth_(inst_25959))
{var statearr_25991_26031 = state_25971__$1;(statearr_25991_26031[(1)] = (20));
} else
{var statearr_25992_26032 = state_25971__$1;(statearr_25992_26032[(1)] = (21));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25972 === (11)))
{var inst_25930 = (state_25971[(9)]);var inst_25916 = (state_25971[(15)]);var inst_25930__$1 = cljs.core.seq(inst_25916);var state_25971__$1 = (function (){var statearr_25993 = state_25971;(statearr_25993[(9)] = inst_25930__$1);
return statearr_25993;
})();if(inst_25930__$1)
{var statearr_25994_26033 = state_25971__$1;(statearr_25994_26033[(1)] = (13));
} else
{var statearr_25995_26034 = state_25971__$1;(statearr_25995_26034[(1)] = (14));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_25972 === (9)))
{var inst_25952 = (state_25971[(2)]);var state_25971__$1 = state_25971;var statearr_25996_26035 = state_25971__$1;(statearr_25996_26035[(2)] = inst_25952);
(statearr_25996_26035[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25972 === (5)))
{var inst_25913 = (function (){var G__25997 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25997) : cljs.core.deref.call(null,G__25997));
})();var inst_25914 = cljs.core.vals(inst_25913);var inst_25915 = cljs.core.seq(inst_25914);var inst_25916 = inst_25915;var inst_25917 = null;var inst_25918 = (0);var inst_25919 = (0);var state_25971__$1 = (function (){var statearr_25998 = state_25971;(statearr_25998[(12)] = inst_25917);
(statearr_25998[(13)] = inst_25919);
(statearr_25998[(14)] = inst_25918);
(statearr_25998[(15)] = inst_25916);
return statearr_25998;
})();var statearr_25999_26036 = state_25971__$1;(statearr_25999_26036[(2)] = null);
(statearr_25999_26036[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25972 === (14)))
{var state_25971__$1 = state_25971;var statearr_26003_26037 = state_25971__$1;(statearr_26003_26037[(2)] = null);
(statearr_26003_26037[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25972 === (16)))
{var inst_25930 = (state_25971[(9)]);var inst_25934 = cljs.core.chunk_first(inst_25930);var inst_25935 = cljs.core.chunk_rest(inst_25930);var inst_25936 = cljs.core.count(inst_25934);var inst_25916 = inst_25935;var inst_25917 = inst_25934;var inst_25918 = inst_25936;var inst_25919 = (0);var state_25971__$1 = (function (){var statearr_26004 = state_25971;(statearr_26004[(12)] = inst_25917);
(statearr_26004[(13)] = inst_25919);
(statearr_26004[(14)] = inst_25918);
(statearr_26004[(15)] = inst_25916);
return statearr_26004;
})();var statearr_26005_26038 = state_25971__$1;(statearr_26005_26038[(2)] = null);
(statearr_26005_26038[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25972 === (10)))
{var inst_25917 = (state_25971[(12)]);var inst_25919 = (state_25971[(13)]);var inst_25918 = (state_25971[(14)]);var inst_25916 = (state_25971[(15)]);var inst_25924 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25917,inst_25919);var inst_25925 = cljs.core.async.muxch_STAR_(inst_25924);var inst_25926 = cljs.core.async.close_BANG_(inst_25925);var inst_25927 = (inst_25919 + (1));var tmp26000 = inst_25917;var tmp26001 = inst_25918;var tmp26002 = inst_25916;var inst_25916__$1 = tmp26002;var inst_25917__$1 = tmp26000;var inst_25918__$1 = tmp26001;var inst_25919__$1 = inst_25927;var state_25971__$1 = (function (){var statearr_26006 = state_25971;(statearr_26006[(16)] = inst_25926);
(statearr_26006[(12)] = inst_25917__$1);
(statearr_26006[(13)] = inst_25919__$1);
(statearr_26006[(14)] = inst_25918__$1);
(statearr_26006[(15)] = inst_25916__$1);
return statearr_26006;
})();var statearr_26007_26039 = state_25971__$1;(statearr_26007_26039[(2)] = null);
(statearr_26007_26039[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25972 === (18)))
{var inst_25945 = (state_25971[(2)]);var state_25971__$1 = state_25971;var statearr_26008_26040 = state_25971__$1;(statearr_26008_26040[(2)] = inst_25945);
(statearr_26008_26040[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_25972 === (8)))
{var inst_25919 = (state_25971[(13)]);var inst_25918 = (state_25971[(14)]);var inst_25921 = (inst_25919 < inst_25918);var inst_25922 = inst_25921;var state_25971__$1 = state_25971;if(cljs.core.truth_(inst_25922))
{var statearr_26009_26041 = state_25971__$1;(statearr_26009_26041[(1)] = (10));
} else
{var statearr_26010_26042 = state_25971__$1;(statearr_26010_26042[(1)] = (11));
}
return cljs.core.constant$keyword$16;
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
});})(c__6524__auto___26018,mults,ensure_mult,p))
;return ((function (switch__6509__auto__,c__6524__auto___26018,mults,ensure_mult,p){
return (function() {
var state_machine__6510__auto__ = null;
var state_machine__6510__auto____0 = (function (){var statearr_26014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26014[(0)] = state_machine__6510__auto__);
(statearr_26014[(1)] = (1));
return statearr_26014;
});
var state_machine__6510__auto____1 = (function (state_25971){while(true){
var ret_value__6511__auto__ = (function (){try{while(true){
var result__6512__auto__ = switch__6509__auto__(state_25971);if(cljs.core.keyword_identical_QMARK_(result__6512__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6512__auto__;
}
break;
}
}catch (e26015){if((e26015 instanceof Object))
{var ex__6513__auto__ = e26015;var statearr_26016_26043 = state_25971;(statearr_26016_26043[(5)] = ex__6513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25971);
return cljs.core.constant$keyword$16;
} else
{throw e26015;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6511__auto__,cljs.core.constant$keyword$16))
{{
var G__26044 = state_25971;
state_25971 = G__26044;
continue;
}
} else
{return ret_value__6511__auto__;
}
break;
}
});
state_machine__6510__auto__ = function(state_25971){
switch(arguments.length){
case 0:
return state_machine__6510__auto____0.call(this);
case 1:
return state_machine__6510__auto____1.call(this,state_25971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6510__auto____0;
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6510__auto____1;
return state_machine__6510__auto__;
})()
;})(switch__6509__auto__,c__6524__auto___26018,mults,ensure_mult,p))
})();var state__6526__auto__ = (function (){var statearr_26017 = (function (){return (f__6525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6525__auto__.cljs$core$IFn$_invoke$arity$0() : f__6525__auto__.call(null));
})();(statearr_26017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___26018);
return statearr_26017;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6526__auto__);
});})(c__6524__auto___26018,mults,ensure_mult,p))
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__26125 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26125) : cljs.core.atom.call(null,G__26125));
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__6524__auto___26198 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6524__auto___26198,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6525__auto__ = (function (){var switch__6509__auto__ = ((function (c__6524__auto___26198,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26164){var state_val_26165 = (state_26164[(1)]);if((state_val_26165 === (7)))
{var state_26164__$1 = state_26164;var statearr_26166_26199 = state_26164__$1;(statearr_26166_26199[(2)] = null);
(statearr_26166_26199[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26165 === (1)))
{var state_26164__$1 = state_26164;var statearr_26167_26200 = state_26164__$1;(statearr_26167_26200[(2)] = null);
(statearr_26167_26200[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26165 === (4)))
{var inst_26128 = (state_26164[(7)]);var inst_26130 = (inst_26128 < cnt);var state_26164__$1 = state_26164;if(cljs.core.truth_(inst_26130))
{var statearr_26168_26201 = state_26164__$1;(statearr_26168_26201[(1)] = (6));
} else
{var statearr_26169_26202 = state_26164__$1;(statearr_26169_26202[(1)] = (7));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26165 === (15)))
{var inst_26160 = (state_26164[(2)]);var state_26164__$1 = state_26164;var statearr_26170_26203 = state_26164__$1;(statearr_26170_26203[(2)] = inst_26160);
(statearr_26170_26203[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26165 === (13)))
{var inst_26153 = cljs.core.async.close_BANG_(out);var state_26164__$1 = state_26164;var statearr_26171_26204 = state_26164__$1;(statearr_26171_26204[(2)] = inst_26153);
(statearr_26171_26204[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26165 === (6)))
{var state_26164__$1 = state_26164;var statearr_26172_26205 = state_26164__$1;(statearr_26172_26205[(2)] = null);
(statearr_26172_26205[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26165 === (3)))
{var inst_26162 = (state_26164[(2)]);var state_26164__$1 = state_26164;return cljs.core.async.impl.ioc_helpers.return_chan(state_26164__$1,inst_26162);
} else
{if((state_val_26165 === (12)))
{var inst_26150 = (state_26164[(8)]);var inst_26150__$1 = (state_26164[(2)]);var inst_26151 = cljs.core.some(cljs.core.nil_QMARK_,inst_26150__$1);var state_26164__$1 = (function (){var statearr_26173 = state_26164;(statearr_26173[(8)] = inst_26150__$1);
return statearr_26173;
})();if(cljs.core.truth_(inst_26151))
{var statearr_26174_26206 = state_26164__$1;(statearr_26174_26206[(1)] = (13));
} else
{var statearr_26175_26207 = state_26164__$1;(statearr_26175_26207[(1)] = (14));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26165 === (2)))
{var inst_26127 = (function (){var G__26176 = dctr;var G__26177 = cnt;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26176,G__26177) : cljs.core.reset_BANG_.call(null,G__26176,G__26177));
})();var inst_26128 = (0);var state_26164__$1 = (function (){var statearr_26178 = state_26164;(statearr_26178[(9)] = inst_26127);
(statearr_26178[(7)] = inst_26128);
return statearr_26178;
})();var statearr_26179_26208 = state_26164__$1;(statearr_26179_26208[(2)] = null);
(statearr_26179_26208[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26165 === (11)))
{var inst_26128 = (state_26164[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26164,(10),Object,null,(9));var inst_26137 = (function (){var G__26180 = inst_26128;return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__26180) : chs__$1.call(null,G__26180));
})();var inst_26138 = (function (){var G__26181 = inst_26128;return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__26181) : done.call(null,G__26181));
})();var inst_26139 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26137,inst_26138);var state_26164__$1 = state_26164;var statearr_26182_26209 = state_26164__$1;(statearr_26182_26209[(2)] = inst_26139);
cljs.core.async.impl.ioc_helpers.process_exception(state_26164__$1);
return cljs.core.constant$keyword$16;
} else
{if((state_val_26165 === (9)))
{var inst_26128 = (state_26164[(7)]);var inst_26141 = (state_26164[(2)]);var inst_26142 = (inst_26128 + (1));var inst_26128__$1 = inst_26142;var state_26164__$1 = (function (){var statearr_26183 = state_26164;(statearr_26183[(10)] = inst_26141);
(statearr_26183[(7)] = inst_26128__$1);
return statearr_26183;
})();var statearr_26184_26210 = state_26164__$1;(statearr_26184_26210[(2)] = null);
(statearr_26184_26210[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26165 === (5)))
{var inst_26148 = (state_26164[(2)]);var state_26164__$1 = (function (){var statearr_26185 = state_26164;(statearr_26185[(11)] = inst_26148);
return statearr_26185;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26164__$1,(12),dchan);
} else
{if((state_val_26165 === (14)))
{var inst_26150 = (state_26164[(8)]);var inst_26155 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26150);var state_26164__$1 = state_26164;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26164__$1,(16),out,inst_26155);
} else
{if((state_val_26165 === (16)))
{var inst_26157 = (state_26164[(2)]);var state_26164__$1 = (function (){var statearr_26186 = state_26164;(statearr_26186[(12)] = inst_26157);
return statearr_26186;
})();var statearr_26187_26211 = state_26164__$1;(statearr_26187_26211[(2)] = null);
(statearr_26187_26211[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26165 === (10)))
{var inst_26132 = (state_26164[(2)]);var inst_26133 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_26164__$1 = (function (){var statearr_26188 = state_26164;(statearr_26188[(13)] = inst_26132);
return statearr_26188;
})();var statearr_26189_26212 = state_26164__$1;(statearr_26189_26212[(2)] = inst_26133);
cljs.core.async.impl.ioc_helpers.process_exception(state_26164__$1);
return cljs.core.constant$keyword$16;
} else
{if((state_val_26165 === (8)))
{var inst_26146 = (state_26164[(2)]);var state_26164__$1 = state_26164;var statearr_26190_26213 = state_26164__$1;(statearr_26190_26213[(2)] = inst_26146);
(statearr_26190_26213[(1)] = (5));
return cljs.core.constant$keyword$16;
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
});})(c__6524__auto___26198,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6509__auto__,c__6524__auto___26198,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6510__auto__ = null;
var state_machine__6510__auto____0 = (function (){var statearr_26194 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26194[(0)] = state_machine__6510__auto__);
(statearr_26194[(1)] = (1));
return statearr_26194;
});
var state_machine__6510__auto____1 = (function (state_26164){while(true){
var ret_value__6511__auto__ = (function (){try{while(true){
var result__6512__auto__ = switch__6509__auto__(state_26164);if(cljs.core.keyword_identical_QMARK_(result__6512__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6512__auto__;
}
break;
}
}catch (e26195){if((e26195 instanceof Object))
{var ex__6513__auto__ = e26195;var statearr_26196_26214 = state_26164;(statearr_26196_26214[(5)] = ex__6513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26164);
return cljs.core.constant$keyword$16;
} else
{throw e26195;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6511__auto__,cljs.core.constant$keyword$16))
{{
var G__26215 = state_26164;
state_26164 = G__26215;
continue;
}
} else
{return ret_value__6511__auto__;
}
break;
}
});
state_machine__6510__auto__ = function(state_26164){
switch(arguments.length){
case 0:
return state_machine__6510__auto____0.call(this);
case 1:
return state_machine__6510__auto____1.call(this,state_26164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6510__auto____0;
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6510__auto____1;
return state_machine__6510__auto__;
})()
;})(switch__6509__auto__,c__6524__auto___26198,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6526__auto__ = (function (){var statearr_26197 = (function (){return (f__6525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6525__auto__.cljs$core$IFn$_invoke$arity$0() : f__6525__auto__.call(null));
})();(statearr_26197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___26198);
return statearr_26197;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6526__auto__);
});})(c__6524__auto___26198,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6524__auto___26325 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6524__auto___26325,out){
return (function (){var f__6525__auto__ = (function (){var switch__6509__auto__ = ((function (c__6524__auto___26325,out){
return (function (state_26301){var state_val_26302 = (state_26301[(1)]);if((state_val_26302 === (7)))
{var inst_26281 = (state_26301[(7)]);var inst_26280 = (state_26301[(8)]);var inst_26280__$1 = (state_26301[(2)]);var inst_26281__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26280__$1,(0),null);var inst_26282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26280__$1,(1),null);var inst_26283 = (inst_26281__$1 == null);var state_26301__$1 = (function (){var statearr_26303 = state_26301;(statearr_26303[(9)] = inst_26282);
(statearr_26303[(7)] = inst_26281__$1);
(statearr_26303[(8)] = inst_26280__$1);
return statearr_26303;
})();if(cljs.core.truth_(inst_26283))
{var statearr_26304_26326 = state_26301__$1;(statearr_26304_26326[(1)] = (8));
} else
{var statearr_26305_26327 = state_26301__$1;(statearr_26305_26327[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26302 === (1)))
{var inst_26272 = cljs.core.vec(chs);var inst_26273 = inst_26272;var state_26301__$1 = (function (){var statearr_26306 = state_26301;(statearr_26306[(10)] = inst_26273);
return statearr_26306;
})();var statearr_26307_26328 = state_26301__$1;(statearr_26307_26328[(2)] = null);
(statearr_26307_26328[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26302 === (4)))
{var inst_26273 = (state_26301[(10)]);var state_26301__$1 = state_26301;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_26301__$1,(7),inst_26273);
} else
{if((state_val_26302 === (6)))
{var inst_26297 = (state_26301[(2)]);var state_26301__$1 = state_26301;var statearr_26308_26329 = state_26301__$1;(statearr_26308_26329[(2)] = inst_26297);
(statearr_26308_26329[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26302 === (3)))
{var inst_26299 = (state_26301[(2)]);var state_26301__$1 = state_26301;return cljs.core.async.impl.ioc_helpers.return_chan(state_26301__$1,inst_26299);
} else
{if((state_val_26302 === (2)))
{var inst_26273 = (state_26301[(10)]);var inst_26275 = cljs.core.count(inst_26273);var inst_26276 = (inst_26275 > (0));var state_26301__$1 = state_26301;if(cljs.core.truth_(inst_26276))
{var statearr_26310_26330 = state_26301__$1;(statearr_26310_26330[(1)] = (4));
} else
{var statearr_26311_26331 = state_26301__$1;(statearr_26311_26331[(1)] = (5));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26302 === (11)))
{var inst_26273 = (state_26301[(10)]);var inst_26290 = (state_26301[(2)]);var tmp26309 = inst_26273;var inst_26273__$1 = tmp26309;var state_26301__$1 = (function (){var statearr_26312 = state_26301;(statearr_26312[(10)] = inst_26273__$1);
(statearr_26312[(11)] = inst_26290);
return statearr_26312;
})();var statearr_26313_26332 = state_26301__$1;(statearr_26313_26332[(2)] = null);
(statearr_26313_26332[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26302 === (9)))
{var inst_26281 = (state_26301[(7)]);var state_26301__$1 = state_26301;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26301__$1,(11),out,inst_26281);
} else
{if((state_val_26302 === (5)))
{var inst_26295 = cljs.core.async.close_BANG_(out);var state_26301__$1 = state_26301;var statearr_26314_26333 = state_26301__$1;(statearr_26314_26333[(2)] = inst_26295);
(statearr_26314_26333[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26302 === (10)))
{var inst_26293 = (state_26301[(2)]);var state_26301__$1 = state_26301;var statearr_26315_26334 = state_26301__$1;(statearr_26315_26334[(2)] = inst_26293);
(statearr_26315_26334[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26302 === (8)))
{var inst_26282 = (state_26301[(9)]);var inst_26273 = (state_26301[(10)]);var inst_26281 = (state_26301[(7)]);var inst_26280 = (state_26301[(8)]);var inst_26285 = (function (){var c = inst_26282;var v = inst_26281;var vec__26278 = inst_26280;var cs = inst_26273;return ((function (c,v,vec__26278,cs,inst_26282,inst_26273,inst_26281,inst_26280,state_val_26302,c__6524__auto___26325,out){
return (function (p1__26216_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26216_SHARP_);
});
;})(c,v,vec__26278,cs,inst_26282,inst_26273,inst_26281,inst_26280,state_val_26302,c__6524__auto___26325,out))
})();var inst_26286 = cljs.core.filterv(inst_26285,inst_26273);var inst_26273__$1 = inst_26286;var state_26301__$1 = (function (){var statearr_26316 = state_26301;(statearr_26316[(10)] = inst_26273__$1);
return statearr_26316;
})();var statearr_26317_26335 = state_26301__$1;(statearr_26317_26335[(2)] = null);
(statearr_26317_26335[(1)] = (2));
return cljs.core.constant$keyword$16;
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
});})(c__6524__auto___26325,out))
;return ((function (switch__6509__auto__,c__6524__auto___26325,out){
return (function() {
var state_machine__6510__auto__ = null;
var state_machine__6510__auto____0 = (function (){var statearr_26321 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26321[(0)] = state_machine__6510__auto__);
(statearr_26321[(1)] = (1));
return statearr_26321;
});
var state_machine__6510__auto____1 = (function (state_26301){while(true){
var ret_value__6511__auto__ = (function (){try{while(true){
var result__6512__auto__ = switch__6509__auto__(state_26301);if(cljs.core.keyword_identical_QMARK_(result__6512__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6512__auto__;
}
break;
}
}catch (e26322){if((e26322 instanceof Object))
{var ex__6513__auto__ = e26322;var statearr_26323_26336 = state_26301;(statearr_26323_26336[(5)] = ex__6513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26301);
return cljs.core.constant$keyword$16;
} else
{throw e26322;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6511__auto__,cljs.core.constant$keyword$16))
{{
var G__26337 = state_26301;
state_26301 = G__26337;
continue;
}
} else
{return ret_value__6511__auto__;
}
break;
}
});
state_machine__6510__auto__ = function(state_26301){
switch(arguments.length){
case 0:
return state_machine__6510__auto____0.call(this);
case 1:
return state_machine__6510__auto____1.call(this,state_26301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6510__auto____0;
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6510__auto____1;
return state_machine__6510__auto__;
})()
;})(switch__6509__auto__,c__6524__auto___26325,out))
})();var state__6526__auto__ = (function (){var statearr_26324 = (function (){return (f__6525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6525__auto__.cljs$core$IFn$_invoke$arity$0() : f__6525__auto__.call(null));
})();(statearr_26324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___26325);
return statearr_26324;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6526__auto__);
});})(c__6524__auto___26325,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6524__auto___26433 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6524__auto___26433,out){
return (function (){var f__6525__auto__ = (function (){var switch__6509__auto__ = ((function (c__6524__auto___26433,out){
return (function (state_26410){var state_val_26411 = (state_26410[(1)]);if((state_val_26411 === (7)))
{var inst_26392 = (state_26410[(7)]);var inst_26392__$1 = (state_26410[(2)]);var inst_26393 = (inst_26392__$1 == null);var inst_26394 = cljs.core.not(inst_26393);var state_26410__$1 = (function (){var statearr_26412 = state_26410;(statearr_26412[(7)] = inst_26392__$1);
return statearr_26412;
})();if(inst_26394)
{var statearr_26413_26434 = state_26410__$1;(statearr_26413_26434[(1)] = (8));
} else
{var statearr_26414_26435 = state_26410__$1;(statearr_26414_26435[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26411 === (1)))
{var inst_26387 = (0);var state_26410__$1 = (function (){var statearr_26415 = state_26410;(statearr_26415[(8)] = inst_26387);
return statearr_26415;
})();var statearr_26416_26436 = state_26410__$1;(statearr_26416_26436[(2)] = null);
(statearr_26416_26436[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26411 === (4)))
{var state_26410__$1 = state_26410;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26410__$1,(7),ch);
} else
{if((state_val_26411 === (6)))
{var inst_26405 = (state_26410[(2)]);var state_26410__$1 = state_26410;var statearr_26417_26437 = state_26410__$1;(statearr_26417_26437[(2)] = inst_26405);
(statearr_26417_26437[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26411 === (3)))
{var inst_26407 = (state_26410[(2)]);var inst_26408 = cljs.core.async.close_BANG_(out);var state_26410__$1 = (function (){var statearr_26418 = state_26410;(statearr_26418[(9)] = inst_26407);
return statearr_26418;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26410__$1,inst_26408);
} else
{if((state_val_26411 === (2)))
{var inst_26387 = (state_26410[(8)]);var inst_26389 = (inst_26387 < n);var state_26410__$1 = state_26410;if(cljs.core.truth_(inst_26389))
{var statearr_26419_26438 = state_26410__$1;(statearr_26419_26438[(1)] = (4));
} else
{var statearr_26420_26439 = state_26410__$1;(statearr_26420_26439[(1)] = (5));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26411 === (11)))
{var inst_26387 = (state_26410[(8)]);var inst_26397 = (state_26410[(2)]);var inst_26398 = (inst_26387 + (1));var inst_26387__$1 = inst_26398;var state_26410__$1 = (function (){var statearr_26421 = state_26410;(statearr_26421[(8)] = inst_26387__$1);
(statearr_26421[(10)] = inst_26397);
return statearr_26421;
})();var statearr_26422_26440 = state_26410__$1;(statearr_26422_26440[(2)] = null);
(statearr_26422_26440[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26411 === (9)))
{var state_26410__$1 = state_26410;var statearr_26423_26441 = state_26410__$1;(statearr_26423_26441[(2)] = null);
(statearr_26423_26441[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26411 === (5)))
{var state_26410__$1 = state_26410;var statearr_26424_26442 = state_26410__$1;(statearr_26424_26442[(2)] = null);
(statearr_26424_26442[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26411 === (10)))
{var inst_26402 = (state_26410[(2)]);var state_26410__$1 = state_26410;var statearr_26425_26443 = state_26410__$1;(statearr_26425_26443[(2)] = inst_26402);
(statearr_26425_26443[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26411 === (8)))
{var inst_26392 = (state_26410[(7)]);var state_26410__$1 = state_26410;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26410__$1,(11),out,inst_26392);
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
});})(c__6524__auto___26433,out))
;return ((function (switch__6509__auto__,c__6524__auto___26433,out){
return (function() {
var state_machine__6510__auto__ = null;
var state_machine__6510__auto____0 = (function (){var statearr_26429 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26429[(0)] = state_machine__6510__auto__);
(statearr_26429[(1)] = (1));
return statearr_26429;
});
var state_machine__6510__auto____1 = (function (state_26410){while(true){
var ret_value__6511__auto__ = (function (){try{while(true){
var result__6512__auto__ = switch__6509__auto__(state_26410);if(cljs.core.keyword_identical_QMARK_(result__6512__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6512__auto__;
}
break;
}
}catch (e26430){if((e26430 instanceof Object))
{var ex__6513__auto__ = e26430;var statearr_26431_26444 = state_26410;(statearr_26431_26444[(5)] = ex__6513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26410);
return cljs.core.constant$keyword$16;
} else
{throw e26430;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6511__auto__,cljs.core.constant$keyword$16))
{{
var G__26445 = state_26410;
state_26410 = G__26445;
continue;
}
} else
{return ret_value__6511__auto__;
}
break;
}
});
state_machine__6510__auto__ = function(state_26410){
switch(arguments.length){
case 0:
return state_machine__6510__auto____0.call(this);
case 1:
return state_machine__6510__auto____1.call(this,state_26410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6510__auto____0;
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6510__auto____1;
return state_machine__6510__auto__;
})()
;})(switch__6509__auto__,c__6524__auto___26433,out))
})();var state__6526__auto__ = (function (){var statearr_26432 = (function (){return (f__6525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6525__auto__.cljs$core$IFn$_invoke$arity$0() : f__6525__auto__.call(null));
})();(statearr_26432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___26433);
return statearr_26432;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6526__auto__);
});})(c__6524__auto___26433,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6524__auto___26544 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6524__auto___26544,out){
return (function (){var f__6525__auto__ = (function (){var switch__6509__auto__ = ((function (c__6524__auto___26544,out){
return (function (state_26519){var state_val_26520 = (state_26519[(1)]);if((state_val_26520 === (7)))
{var inst_26514 = (state_26519[(2)]);var state_26519__$1 = state_26519;var statearr_26521_26545 = state_26519__$1;(statearr_26521_26545[(2)] = inst_26514);
(statearr_26521_26545[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26520 === (1)))
{var inst_26496 = null;var state_26519__$1 = (function (){var statearr_26522 = state_26519;(statearr_26522[(7)] = inst_26496);
return statearr_26522;
})();var statearr_26523_26546 = state_26519__$1;(statearr_26523_26546[(2)] = null);
(statearr_26523_26546[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26520 === (4)))
{var inst_26499 = (state_26519[(8)]);var inst_26499__$1 = (state_26519[(2)]);var inst_26500 = (inst_26499__$1 == null);var inst_26501 = cljs.core.not(inst_26500);var state_26519__$1 = (function (){var statearr_26524 = state_26519;(statearr_26524[(8)] = inst_26499__$1);
return statearr_26524;
})();if(inst_26501)
{var statearr_26525_26547 = state_26519__$1;(statearr_26525_26547[(1)] = (5));
} else
{var statearr_26526_26548 = state_26519__$1;(statearr_26526_26548[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26520 === (6)))
{var state_26519__$1 = state_26519;var statearr_26527_26549 = state_26519__$1;(statearr_26527_26549[(2)] = null);
(statearr_26527_26549[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26520 === (3)))
{var inst_26516 = (state_26519[(2)]);var inst_26517 = cljs.core.async.close_BANG_(out);var state_26519__$1 = (function (){var statearr_26528 = state_26519;(statearr_26528[(9)] = inst_26516);
return statearr_26528;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26519__$1,inst_26517);
} else
{if((state_val_26520 === (2)))
{var state_26519__$1 = state_26519;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26519__$1,(4),ch);
} else
{if((state_val_26520 === (11)))
{var inst_26499 = (state_26519[(8)]);var inst_26508 = (state_26519[(2)]);var inst_26496 = inst_26499;var state_26519__$1 = (function (){var statearr_26529 = state_26519;(statearr_26529[(7)] = inst_26496);
(statearr_26529[(10)] = inst_26508);
return statearr_26529;
})();var statearr_26530_26550 = state_26519__$1;(statearr_26530_26550[(2)] = null);
(statearr_26530_26550[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26520 === (9)))
{var inst_26499 = (state_26519[(8)]);var state_26519__$1 = state_26519;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26519__$1,(11),out,inst_26499);
} else
{if((state_val_26520 === (5)))
{var inst_26496 = (state_26519[(7)]);var inst_26499 = (state_26519[(8)]);var inst_26503 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26499,inst_26496);var state_26519__$1 = state_26519;if(inst_26503)
{var statearr_26532_26551 = state_26519__$1;(statearr_26532_26551[(1)] = (8));
} else
{var statearr_26533_26552 = state_26519__$1;(statearr_26533_26552[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26520 === (10)))
{var inst_26511 = (state_26519[(2)]);var state_26519__$1 = state_26519;var statearr_26534_26553 = state_26519__$1;(statearr_26534_26553[(2)] = inst_26511);
(statearr_26534_26553[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26520 === (8)))
{var inst_26496 = (state_26519[(7)]);var tmp26531 = inst_26496;var inst_26496__$1 = tmp26531;var state_26519__$1 = (function (){var statearr_26535 = state_26519;(statearr_26535[(7)] = inst_26496__$1);
return statearr_26535;
})();var statearr_26536_26554 = state_26519__$1;(statearr_26536_26554[(2)] = null);
(statearr_26536_26554[(1)] = (2));
return cljs.core.constant$keyword$16;
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
});})(c__6524__auto___26544,out))
;return ((function (switch__6509__auto__,c__6524__auto___26544,out){
return (function() {
var state_machine__6510__auto__ = null;
var state_machine__6510__auto____0 = (function (){var statearr_26540 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26540[(0)] = state_machine__6510__auto__);
(statearr_26540[(1)] = (1));
return statearr_26540;
});
var state_machine__6510__auto____1 = (function (state_26519){while(true){
var ret_value__6511__auto__ = (function (){try{while(true){
var result__6512__auto__ = switch__6509__auto__(state_26519);if(cljs.core.keyword_identical_QMARK_(result__6512__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6512__auto__;
}
break;
}
}catch (e26541){if((e26541 instanceof Object))
{var ex__6513__auto__ = e26541;var statearr_26542_26555 = state_26519;(statearr_26542_26555[(5)] = ex__6513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26519);
return cljs.core.constant$keyword$16;
} else
{throw e26541;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6511__auto__,cljs.core.constant$keyword$16))
{{
var G__26556 = state_26519;
state_26519 = G__26556;
continue;
}
} else
{return ret_value__6511__auto__;
}
break;
}
});
state_machine__6510__auto__ = function(state_26519){
switch(arguments.length){
case 0:
return state_machine__6510__auto____0.call(this);
case 1:
return state_machine__6510__auto____1.call(this,state_26519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6510__auto____0;
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6510__auto____1;
return state_machine__6510__auto__;
})()
;})(switch__6509__auto__,c__6524__auto___26544,out))
})();var state__6526__auto__ = (function (){var statearr_26543 = (function (){return (f__6525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6525__auto__.cljs$core$IFn$_invoke$arity$0() : f__6525__auto__.call(null));
})();(statearr_26543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___26544);
return statearr_26543;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6526__auto__);
});})(c__6524__auto___26544,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6524__auto___26694 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6524__auto___26694,out){
return (function (){var f__6525__auto__ = (function (){var switch__6509__auto__ = ((function (c__6524__auto___26694,out){
return (function (state_26664){var state_val_26665 = (state_26664[(1)]);if((state_val_26665 === (7)))
{var inst_26660 = (state_26664[(2)]);var state_26664__$1 = state_26664;var statearr_26666_26695 = state_26664__$1;(statearr_26666_26695[(2)] = inst_26660);
(statearr_26666_26695[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26665 === (1)))
{var inst_26627 = (new Array(n));var inst_26628 = inst_26627;var inst_26629 = (0);var state_26664__$1 = (function (){var statearr_26667 = state_26664;(statearr_26667[(7)] = inst_26628);
(statearr_26667[(8)] = inst_26629);
return statearr_26667;
})();var statearr_26668_26696 = state_26664__$1;(statearr_26668_26696[(2)] = null);
(statearr_26668_26696[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26665 === (4)))
{var inst_26632 = (state_26664[(9)]);var inst_26632__$1 = (state_26664[(2)]);var inst_26633 = (inst_26632__$1 == null);var inst_26634 = cljs.core.not(inst_26633);var state_26664__$1 = (function (){var statearr_26669 = state_26664;(statearr_26669[(9)] = inst_26632__$1);
return statearr_26669;
})();if(inst_26634)
{var statearr_26670_26697 = state_26664__$1;(statearr_26670_26697[(1)] = (5));
} else
{var statearr_26671_26698 = state_26664__$1;(statearr_26671_26698[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26665 === (15)))
{var inst_26654 = (state_26664[(2)]);var state_26664__$1 = state_26664;var statearr_26672_26699 = state_26664__$1;(statearr_26672_26699[(2)] = inst_26654);
(statearr_26672_26699[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26665 === (13)))
{var state_26664__$1 = state_26664;var statearr_26673_26700 = state_26664__$1;(statearr_26673_26700[(2)] = null);
(statearr_26673_26700[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26665 === (6)))
{var inst_26629 = (state_26664[(8)]);var inst_26650 = (inst_26629 > (0));var state_26664__$1 = state_26664;if(cljs.core.truth_(inst_26650))
{var statearr_26674_26701 = state_26664__$1;(statearr_26674_26701[(1)] = (12));
} else
{var statearr_26675_26702 = state_26664__$1;(statearr_26675_26702[(1)] = (13));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26665 === (3)))
{var inst_26662 = (state_26664[(2)]);var state_26664__$1 = state_26664;return cljs.core.async.impl.ioc_helpers.return_chan(state_26664__$1,inst_26662);
} else
{if((state_val_26665 === (12)))
{var inst_26628 = (state_26664[(7)]);var inst_26652 = cljs.core.vec(inst_26628);var state_26664__$1 = state_26664;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26664__$1,(15),out,inst_26652);
} else
{if((state_val_26665 === (2)))
{var state_26664__$1 = state_26664;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26664__$1,(4),ch);
} else
{if((state_val_26665 === (11)))
{var inst_26644 = (state_26664[(2)]);var inst_26645 = (new Array(n));var inst_26628 = inst_26645;var inst_26629 = (0);var state_26664__$1 = (function (){var statearr_26676 = state_26664;(statearr_26676[(10)] = inst_26644);
(statearr_26676[(7)] = inst_26628);
(statearr_26676[(8)] = inst_26629);
return statearr_26676;
})();var statearr_26677_26703 = state_26664__$1;(statearr_26677_26703[(2)] = null);
(statearr_26677_26703[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26665 === (9)))
{var inst_26628 = (state_26664[(7)]);var inst_26642 = cljs.core.vec(inst_26628);var state_26664__$1 = state_26664;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26664__$1,(11),out,inst_26642);
} else
{if((state_val_26665 === (5)))
{var inst_26637 = (state_26664[(11)]);var inst_26628 = (state_26664[(7)]);var inst_26629 = (state_26664[(8)]);var inst_26632 = (state_26664[(9)]);var inst_26636 = (inst_26628[inst_26629] = inst_26632);var inst_26637__$1 = (inst_26629 + (1));var inst_26638 = (inst_26637__$1 < n);var state_26664__$1 = (function (){var statearr_26678 = state_26664;(statearr_26678[(11)] = inst_26637__$1);
(statearr_26678[(12)] = inst_26636);
return statearr_26678;
})();if(cljs.core.truth_(inst_26638))
{var statearr_26679_26704 = state_26664__$1;(statearr_26679_26704[(1)] = (8));
} else
{var statearr_26680_26705 = state_26664__$1;(statearr_26680_26705[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26665 === (14)))
{var inst_26657 = (state_26664[(2)]);var inst_26658 = cljs.core.async.close_BANG_(out);var state_26664__$1 = (function (){var statearr_26682 = state_26664;(statearr_26682[(13)] = inst_26657);
return statearr_26682;
})();var statearr_26683_26706 = state_26664__$1;(statearr_26683_26706[(2)] = inst_26658);
(statearr_26683_26706[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26665 === (10)))
{var inst_26648 = (state_26664[(2)]);var state_26664__$1 = state_26664;var statearr_26684_26707 = state_26664__$1;(statearr_26684_26707[(2)] = inst_26648);
(statearr_26684_26707[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26665 === (8)))
{var inst_26637 = (state_26664[(11)]);var inst_26628 = (state_26664[(7)]);var tmp26681 = inst_26628;var inst_26628__$1 = tmp26681;var inst_26629 = inst_26637;var state_26664__$1 = (function (){var statearr_26685 = state_26664;(statearr_26685[(7)] = inst_26628__$1);
(statearr_26685[(8)] = inst_26629);
return statearr_26685;
})();var statearr_26686_26708 = state_26664__$1;(statearr_26686_26708[(2)] = null);
(statearr_26686_26708[(1)] = (2));
return cljs.core.constant$keyword$16;
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
});})(c__6524__auto___26694,out))
;return ((function (switch__6509__auto__,c__6524__auto___26694,out){
return (function() {
var state_machine__6510__auto__ = null;
var state_machine__6510__auto____0 = (function (){var statearr_26690 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26690[(0)] = state_machine__6510__auto__);
(statearr_26690[(1)] = (1));
return statearr_26690;
});
var state_machine__6510__auto____1 = (function (state_26664){while(true){
var ret_value__6511__auto__ = (function (){try{while(true){
var result__6512__auto__ = switch__6509__auto__(state_26664);if(cljs.core.keyword_identical_QMARK_(result__6512__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6512__auto__;
}
break;
}
}catch (e26691){if((e26691 instanceof Object))
{var ex__6513__auto__ = e26691;var statearr_26692_26709 = state_26664;(statearr_26692_26709[(5)] = ex__6513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26664);
return cljs.core.constant$keyword$16;
} else
{throw e26691;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6511__auto__,cljs.core.constant$keyword$16))
{{
var G__26710 = state_26664;
state_26664 = G__26710;
continue;
}
} else
{return ret_value__6511__auto__;
}
break;
}
});
state_machine__6510__auto__ = function(state_26664){
switch(arguments.length){
case 0:
return state_machine__6510__auto____0.call(this);
case 1:
return state_machine__6510__auto____1.call(this,state_26664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6510__auto____0;
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6510__auto____1;
return state_machine__6510__auto__;
})()
;})(switch__6509__auto__,c__6524__auto___26694,out))
})();var state__6526__auto__ = (function (){var statearr_26693 = (function (){return (f__6525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6525__auto__.cljs$core$IFn$_invoke$arity$0() : f__6525__auto__.call(null));
})();(statearr_26693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___26694);
return statearr_26693;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6526__auto__);
});})(c__6524__auto___26694,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6524__auto___26858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6524__auto___26858,out){
return (function (){var f__6525__auto__ = (function (){var switch__6509__auto__ = ((function (c__6524__auto___26858,out){
return (function (state_26827){var state_val_26828 = (state_26827[(1)]);if((state_val_26828 === (7)))
{var inst_26823 = (state_26827[(2)]);var state_26827__$1 = state_26827;var statearr_26829_26859 = state_26827__$1;(statearr_26829_26859[(2)] = inst_26823);
(statearr_26829_26859[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26828 === (1)))
{var inst_26786 = [];var inst_26787 = inst_26786;var inst_26788 = cljs.core.constant$keyword$29;var state_26827__$1 = (function (){var statearr_26830 = state_26827;(statearr_26830[(7)] = inst_26787);
(statearr_26830[(8)] = inst_26788);
return statearr_26830;
})();var statearr_26831_26860 = state_26827__$1;(statearr_26831_26860[(2)] = null);
(statearr_26831_26860[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26828 === (4)))
{var inst_26791 = (state_26827[(9)]);var inst_26791__$1 = (state_26827[(2)]);var inst_26792 = (inst_26791__$1 == null);var inst_26793 = cljs.core.not(inst_26792);var state_26827__$1 = (function (){var statearr_26832 = state_26827;(statearr_26832[(9)] = inst_26791__$1);
return statearr_26832;
})();if(inst_26793)
{var statearr_26833_26861 = state_26827__$1;(statearr_26833_26861[(1)] = (5));
} else
{var statearr_26834_26862 = state_26827__$1;(statearr_26834_26862[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26828 === (15)))
{var inst_26817 = (state_26827[(2)]);var state_26827__$1 = state_26827;var statearr_26835_26863 = state_26827__$1;(statearr_26835_26863[(2)] = inst_26817);
(statearr_26835_26863[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26828 === (13)))
{var state_26827__$1 = state_26827;var statearr_26836_26864 = state_26827__$1;(statearr_26836_26864[(2)] = null);
(statearr_26836_26864[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26828 === (6)))
{var inst_26787 = (state_26827[(7)]);var inst_26812 = inst_26787.length;var inst_26813 = (inst_26812 > (0));var state_26827__$1 = state_26827;if(cljs.core.truth_(inst_26813))
{var statearr_26837_26865 = state_26827__$1;(statearr_26837_26865[(1)] = (12));
} else
{var statearr_26838_26866 = state_26827__$1;(statearr_26838_26866[(1)] = (13));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26828 === (3)))
{var inst_26825 = (state_26827[(2)]);var state_26827__$1 = state_26827;return cljs.core.async.impl.ioc_helpers.return_chan(state_26827__$1,inst_26825);
} else
{if((state_val_26828 === (12)))
{var inst_26787 = (state_26827[(7)]);var inst_26815 = cljs.core.vec(inst_26787);var state_26827__$1 = state_26827;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26827__$1,(15),out,inst_26815);
} else
{if((state_val_26828 === (2)))
{var state_26827__$1 = state_26827;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26827__$1,(4),ch);
} else
{if((state_val_26828 === (11)))
{var inst_26795 = (state_26827[(10)]);var inst_26791 = (state_26827[(9)]);var inst_26805 = (state_26827[(2)]);var inst_26806 = [];var inst_26807 = inst_26806.push(inst_26791);var inst_26787 = inst_26806;var inst_26788 = inst_26795;var state_26827__$1 = (function (){var statearr_26839 = state_26827;(statearr_26839[(7)] = inst_26787);
(statearr_26839[(11)] = inst_26807);
(statearr_26839[(8)] = inst_26788);
(statearr_26839[(12)] = inst_26805);
return statearr_26839;
})();var statearr_26840_26867 = state_26827__$1;(statearr_26840_26867[(2)] = null);
(statearr_26840_26867[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26828 === (9)))
{var inst_26787 = (state_26827[(7)]);var inst_26803 = cljs.core.vec(inst_26787);var state_26827__$1 = state_26827;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26827__$1,(11),out,inst_26803);
} else
{if((state_val_26828 === (5)))
{var inst_26795 = (state_26827[(10)]);var inst_26788 = (state_26827[(8)]);var inst_26791 = (state_26827[(9)]);var inst_26795__$1 = (function (){var G__26841 = inst_26791;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26841) : f.call(null,G__26841));
})();var inst_26796 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26795__$1,inst_26788);var inst_26797 = cljs.core.keyword_identical_QMARK_(inst_26788,cljs.core.constant$keyword$29);var inst_26798 = (inst_26796) || (inst_26797);var state_26827__$1 = (function (){var statearr_26842 = state_26827;(statearr_26842[(10)] = inst_26795__$1);
return statearr_26842;
})();if(cljs.core.truth_(inst_26798))
{var statearr_26843_26868 = state_26827__$1;(statearr_26843_26868[(1)] = (8));
} else
{var statearr_26844_26869 = state_26827__$1;(statearr_26844_26869[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_26828 === (14)))
{var inst_26820 = (state_26827[(2)]);var inst_26821 = cljs.core.async.close_BANG_(out);var state_26827__$1 = (function (){var statearr_26846 = state_26827;(statearr_26846[(13)] = inst_26820);
return statearr_26846;
})();var statearr_26847_26870 = state_26827__$1;(statearr_26847_26870[(2)] = inst_26821);
(statearr_26847_26870[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26828 === (10)))
{var inst_26810 = (state_26827[(2)]);var state_26827__$1 = state_26827;var statearr_26848_26871 = state_26827__$1;(statearr_26848_26871[(2)] = inst_26810);
(statearr_26848_26871[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_26828 === (8)))
{var inst_26787 = (state_26827[(7)]);var inst_26795 = (state_26827[(10)]);var inst_26791 = (state_26827[(9)]);var inst_26800 = inst_26787.push(inst_26791);var tmp26845 = inst_26787;var inst_26787__$1 = tmp26845;var inst_26788 = inst_26795;var state_26827__$1 = (function (){var statearr_26849 = state_26827;(statearr_26849[(7)] = inst_26787__$1);
(statearr_26849[(14)] = inst_26800);
(statearr_26849[(8)] = inst_26788);
return statearr_26849;
})();var statearr_26850_26872 = state_26827__$1;(statearr_26850_26872[(2)] = null);
(statearr_26850_26872[(1)] = (2));
return cljs.core.constant$keyword$16;
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
});})(c__6524__auto___26858,out))
;return ((function (switch__6509__auto__,c__6524__auto___26858,out){
return (function() {
var state_machine__6510__auto__ = null;
var state_machine__6510__auto____0 = (function (){var statearr_26854 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26854[(0)] = state_machine__6510__auto__);
(statearr_26854[(1)] = (1));
return statearr_26854;
});
var state_machine__6510__auto____1 = (function (state_26827){while(true){
var ret_value__6511__auto__ = (function (){try{while(true){
var result__6512__auto__ = switch__6509__auto__(state_26827);if(cljs.core.keyword_identical_QMARK_(result__6512__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6512__auto__;
}
break;
}
}catch (e26855){if((e26855 instanceof Object))
{var ex__6513__auto__ = e26855;var statearr_26856_26873 = state_26827;(statearr_26856_26873[(5)] = ex__6513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26827);
return cljs.core.constant$keyword$16;
} else
{throw e26855;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6511__auto__,cljs.core.constant$keyword$16))
{{
var G__26874 = state_26827;
state_26827 = G__26874;
continue;
}
} else
{return ret_value__6511__auto__;
}
break;
}
});
state_machine__6510__auto__ = function(state_26827){
switch(arguments.length){
case 0:
return state_machine__6510__auto____0.call(this);
case 1:
return state_machine__6510__auto____1.call(this,state_26827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6510__auto____0;
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6510__auto____1;
return state_machine__6510__auto__;
})()
;})(switch__6509__auto__,c__6524__auto___26858,out))
})();var state__6526__auto__ = (function (){var statearr_26857 = (function (){return (f__6525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6525__auto__.cljs$core$IFn$_invoke$arity$0() : f__6525__auto__.call(null));
})();(statearr_26857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___26858);
return statearr_26857;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6526__auto__);
});})(c__6524__auto___26858,out))
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
