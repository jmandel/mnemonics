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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12591 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12591 = (function (f,fn_handler,meta12592){
this.f = f;
this.fn_handler = fn_handler;
this.meta12592 = meta12592;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12591.cljs$lang$type = true;
cljs.core.async.t12591.cljs$lang$ctorStr = "cljs.core.async/t12591";
cljs.core.async.t12591.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write.call(null,writer__4246__auto__,"cljs.core.async/t12591");
});
cljs.core.async.t12591.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12591.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12591.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12593){var self__ = this;
var _12593__$1 = this;return self__.meta12592;
});
cljs.core.async.t12591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12593,meta12592__$1){var self__ = this;
var _12593__$1 = this;return (new cljs.core.async.t12591(self__.f,self__.fn_handler,meta12592__$1));
});
cljs.core.async.__GT_t12591 = (function __GT_t12591(f__$1,fn_handler__$1,meta12592){return (new cljs.core.async.t12591(f__$1,fn_handler__$1,meta12592));
});
}
return (new cljs.core.async.t12591(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12595 = buff;if(G__12595)
{var bit__4332__auto__ = null;if(cljs.core.truth_((function (){var or__3669__auto__ = bit__4332__auto__;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return G__12595.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12595.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12595);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12595);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
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
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_12596 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12596);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_12596,ret){
return (function (){return fn1.call(null,val_12596);
});})(val_12596,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
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
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4538__auto___12597 = n;var x_12598 = (0);while(true){
if((x_12598 < n__4538__auto___12597))
{(a[x_12598] = (0));
{
var G__12599 = (x_12598 + (1));
x_12598 = G__12599;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__12600 = (i + (1));
i = G__12600;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12604 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12604 = (function (flag,alt_flag,meta12605){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12605 = meta12605;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12604.cljs$lang$type = true;
cljs.core.async.t12604.cljs$lang$ctorStr = "cljs.core.async/t12604";
cljs.core.async.t12604.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write.call(null,writer__4246__auto__,"cljs.core.async/t12604");
});})(flag))
;
cljs.core.async.t12604.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12604.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t12604.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t12604.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12606){var self__ = this;
var _12606__$1 = this;return self__.meta12605;
});})(flag))
;
cljs.core.async.t12604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12606,meta12605__$1){var self__ = this;
var _12606__$1 = this;return (new cljs.core.async.t12604(self__.flag,self__.alt_flag,meta12605__$1));
});})(flag))
;
cljs.core.async.__GT_t12604 = ((function (flag){
return (function __GT_t12604(flag__$1,alt_flag__$1,meta12605){return (new cljs.core.async.t12604(flag__$1,alt_flag__$1,meta12605));
});})(flag))
;
}
return (new cljs.core.async.t12604(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12610 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12610 = (function (cb,flag,alt_handler,meta12611){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12611 = meta12611;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12610.cljs$lang$type = true;
cljs.core.async.t12610.cljs$lang$ctorStr = "cljs.core.async/t12610";
cljs.core.async.t12610.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write.call(null,writer__4246__auto__,"cljs.core.async/t12610");
});
cljs.core.async.t12610.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12610.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12610.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12612){var self__ = this;
var _12612__$1 = this;return self__.meta12611;
});
cljs.core.async.t12610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12612,meta12611__$1){var self__ = this;
var _12612__$1 = this;return (new cljs.core.async.t12610(self__.cb,self__.flag,self__.alt_handler,meta12611__$1));
});
cljs.core.async.__GT_t12610 = (function __GT_t12610(cb__$1,flag__$1,alt_handler__$1,meta12611){return (new cljs.core.async.t12610(cb__$1,flag__$1,alt_handler__$1,meta12611));
});
}
return (new cljs.core.async.t12610(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12613_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12613_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12614_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12614_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3669__auto__ = wport;if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__12615 = (i + (1));
i = G__12615;
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
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3657__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3657__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3657__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var alts_BANG___delegate = function (ports,p__12616){var map__12618 = p__12616;var map__12618__$1 = ((cljs.core.seq_QMARK_.call(null,map__12618))?cljs.core.apply.call(null,cljs.core.hash_map,map__12618):map__12618);var opts = map__12618__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__12616 = null;if (arguments.length > 1) {
  p__12616 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12616);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12619){
var ports = cljs.core.first(arglist__12619);
var p__12616 = cljs.core.rest(arglist__12619);
return alts_BANG___delegate(ports,p__12616);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12627 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12627 = (function (ch,f,map_LT_,meta12628){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12628 = meta12628;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12627.cljs$lang$type = true;
cljs.core.async.t12627.cljs$lang$ctorStr = "cljs.core.async/t12627";
cljs.core.async.t12627.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write.call(null,writer__4246__auto__,"cljs.core.async/t12627");
});
cljs.core.async.t12627.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12627.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t12627.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12627.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12630 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12630 = (function (fn1,_,meta12628,ch,f,map_LT_,meta12631){
this.fn1 = fn1;
this._ = _;
this.meta12628 = meta12628;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12631 = meta12631;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12630.cljs$lang$type = true;
cljs.core.async.t12630.cljs$lang$ctorStr = "cljs.core.async/t12630";
cljs.core.async.t12630.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write.call(null,writer__4246__auto__,"cljs.core.async/t12630");
});})(___$1))
;
cljs.core.async.t12630.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12630.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t12630.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t12630.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__12620_SHARP_){return f1.call(null,(((p1__12620_SHARP_ == null))?null:self__.f.call(null,p1__12620_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t12630.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12632){var self__ = this;
var _12632__$1 = this;return self__.meta12631;
});})(___$1))
;
cljs.core.async.t12630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12632,meta12631__$1){var self__ = this;
var _12632__$1 = this;return (new cljs.core.async.t12630(self__.fn1,self__._,self__.meta12628,self__.ch,self__.f,self__.map_LT_,meta12631__$1));
});})(___$1))
;
cljs.core.async.__GT_t12630 = ((function (___$1){
return (function __GT_t12630(fn1__$1,___$2,meta12628__$1,ch__$2,f__$2,map_LT___$2,meta12631){return (new cljs.core.async.t12630(fn1__$1,___$2,meta12628__$1,ch__$2,f__$2,map_LT___$2,meta12631));
});})(___$1))
;
}
return (new cljs.core.async.t12630(fn1,___$1,self__.meta12628,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3657__auto__ = ret;if(cljs.core.truth_(and__3657__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3657__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t12627.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12627.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12627.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t12627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12629){var self__ = this;
var _12629__$1 = this;return self__.meta12628;
});
cljs.core.async.t12627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12629,meta12628__$1){var self__ = this;
var _12629__$1 = this;return (new cljs.core.async.t12627(self__.ch,self__.f,self__.map_LT_,meta12628__$1));
});
cljs.core.async.__GT_t12627 = (function __GT_t12627(ch__$1,f__$1,map_LT___$1,meta12628){return (new cljs.core.async.t12627(ch__$1,f__$1,map_LT___$1,meta12628));
});
}
return (new cljs.core.async.t12627(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12636 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12636 = (function (ch,f,map_GT_,meta12637){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12637 = meta12637;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12636.cljs$lang$type = true;
cljs.core.async.t12636.cljs$lang$ctorStr = "cljs.core.async/t12636";
cljs.core.async.t12636.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write.call(null,writer__4246__auto__,"cljs.core.async/t12636");
});
cljs.core.async.t12636.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12636.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t12636.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12636.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12636.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12636.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12638){var self__ = this;
var _12638__$1 = this;return self__.meta12637;
});
cljs.core.async.t12636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12638,meta12637__$1){var self__ = this;
var _12638__$1 = this;return (new cljs.core.async.t12636(self__.ch,self__.f,self__.map_GT_,meta12637__$1));
});
cljs.core.async.__GT_t12636 = (function __GT_t12636(ch__$1,f__$1,map_GT___$1,meta12637){return (new cljs.core.async.t12636(ch__$1,f__$1,map_GT___$1,meta12637));
});
}
return (new cljs.core.async.t12636(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12642 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12642 = (function (ch,p,filter_GT_,meta12643){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12643 = meta12643;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12642.cljs$lang$type = true;
cljs.core.async.t12642.cljs$lang$ctorStr = "cljs.core.async/t12642";
cljs.core.async.t12642.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write.call(null,writer__4246__auto__,"cljs.core.async/t12642");
});
cljs.core.async.t12642.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12642.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t12642.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12642.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12642.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12642.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12642.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t12642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12644){var self__ = this;
var _12644__$1 = this;return self__.meta12643;
});
cljs.core.async.t12642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12644,meta12643__$1){var self__ = this;
var _12644__$1 = this;return (new cljs.core.async.t12642(self__.ch,self__.p,self__.filter_GT_,meta12643__$1));
});
cljs.core.async.__GT_t12642 = (function __GT_t12642(ch__$1,p__$1,filter_GT___$1,meta12643){return (new cljs.core.async.t12642(ch__$1,p__$1,filter_GT___$1,meta12643));
});
}
return (new cljs.core.async.t12642(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
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
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7332__auto___12727 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7332__auto___12727,out){
return (function (){var f__7333__auto__ = (function (){var switch__7317__auto__ = ((function (c__7332__auto___12727,out){
return (function (state_12706){var state_val_12707 = (state_12706[(1)]);if((state_val_12707 === (7)))
{var inst_12702 = (state_12706[(2)]);var state_12706__$1 = state_12706;var statearr_12708_12728 = state_12706__$1;(statearr_12708_12728[(2)] = inst_12702);
(statearr_12708_12728[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12707 === (1)))
{var state_12706__$1 = state_12706;var statearr_12709_12729 = state_12706__$1;(statearr_12709_12729[(2)] = null);
(statearr_12709_12729[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12707 === (4)))
{var inst_12688 = (state_12706[(7)]);var inst_12688__$1 = (state_12706[(2)]);var inst_12689 = (inst_12688__$1 == null);var state_12706__$1 = (function (){var statearr_12710 = state_12706;(statearr_12710[(7)] = inst_12688__$1);
return statearr_12710;
})();if(cljs.core.truth_(inst_12689))
{var statearr_12711_12730 = state_12706__$1;(statearr_12711_12730[(1)] = (5));
} else
{var statearr_12712_12731 = state_12706__$1;(statearr_12712_12731[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12707 === (6)))
{var inst_12688 = (state_12706[(7)]);var inst_12693 = p.call(null,inst_12688);var state_12706__$1 = state_12706;if(cljs.core.truth_(inst_12693))
{var statearr_12713_12732 = state_12706__$1;(statearr_12713_12732[(1)] = (8));
} else
{var statearr_12714_12733 = state_12706__$1;(statearr_12714_12733[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12707 === (3)))
{var inst_12704 = (state_12706[(2)]);var state_12706__$1 = state_12706;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12706__$1,inst_12704);
} else
{if((state_val_12707 === (2)))
{var state_12706__$1 = state_12706;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12706__$1,(4),ch);
} else
{if((state_val_12707 === (11)))
{var inst_12696 = (state_12706[(2)]);var state_12706__$1 = state_12706;var statearr_12715_12734 = state_12706__$1;(statearr_12715_12734[(2)] = inst_12696);
(statearr_12715_12734[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12707 === (9)))
{var state_12706__$1 = state_12706;var statearr_12716_12735 = state_12706__$1;(statearr_12716_12735[(2)] = null);
(statearr_12716_12735[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12707 === (5)))
{var inst_12691 = cljs.core.async.close_BANG_.call(null,out);var state_12706__$1 = state_12706;var statearr_12717_12736 = state_12706__$1;(statearr_12717_12736[(2)] = inst_12691);
(statearr_12717_12736[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12707 === (10)))
{var inst_12699 = (state_12706[(2)]);var state_12706__$1 = (function (){var statearr_12718 = state_12706;(statearr_12718[(8)] = inst_12699);
return statearr_12718;
})();var statearr_12719_12737 = state_12706__$1;(statearr_12719_12737[(2)] = null);
(statearr_12719_12737[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12707 === (8)))
{var inst_12688 = (state_12706[(7)]);var state_12706__$1 = state_12706;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12706__$1,(11),out,inst_12688);
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
});})(c__7332__auto___12727,out))
;return ((function (switch__7317__auto__,c__7332__auto___12727,out){
return (function() {
var state_machine__7318__auto__ = null;
var state_machine__7318__auto____0 = (function (){var statearr_12723 = [null,null,null,null,null,null,null,null,null];(statearr_12723[(0)] = state_machine__7318__auto__);
(statearr_12723[(1)] = (1));
return statearr_12723;
});
var state_machine__7318__auto____1 = (function (state_12706){while(true){
var ret_value__7319__auto__ = (function (){try{while(true){
var result__7320__auto__ = switch__7317__auto__.call(null,state_12706);if(cljs.core.keyword_identical_QMARK_.call(null,result__7320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7320__auto__;
}
break;
}
}catch (e12724){if((e12724 instanceof Object))
{var ex__7321__auto__ = e12724;var statearr_12725_12738 = state_12706;(statearr_12725_12738[(5)] = ex__7321__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12706);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12724;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12739 = state_12706;
state_12706 = G__12739;
continue;
}
} else
{return ret_value__7319__auto__;
}
break;
}
});
state_machine__7318__auto__ = function(state_12706){
switch(arguments.length){
case 0:
return state_machine__7318__auto____0.call(this);
case 1:
return state_machine__7318__auto____1.call(this,state_12706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7318__auto____0;
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7318__auto____1;
return state_machine__7318__auto__;
})()
;})(switch__7317__auto__,c__7332__auto___12727,out))
})();var state__7334__auto__ = (function (){var statearr_12726 = f__7333__auto__.call(null);(statearr_12726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7332__auto___12727);
return statearr_12726;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7334__auto__);
});})(c__7332__auto___12727,out))
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
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__7332__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7332__auto__){
return (function (){var f__7333__auto__ = (function (){var switch__7317__auto__ = ((function (c__7332__auto__){
return (function (state_12905){var state_val_12906 = (state_12905[(1)]);if((state_val_12906 === (7)))
{var inst_12901 = (state_12905[(2)]);var state_12905__$1 = state_12905;var statearr_12907_12948 = state_12905__$1;(statearr_12907_12948[(2)] = inst_12901);
(statearr_12907_12948[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12906 === (20)))
{var inst_12871 = (state_12905[(7)]);var inst_12882 = (state_12905[(2)]);var inst_12883 = cljs.core.next.call(null,inst_12871);var inst_12857 = inst_12883;var inst_12858 = null;var inst_12859 = (0);var inst_12860 = (0);var state_12905__$1 = (function (){var statearr_12908 = state_12905;(statearr_12908[(8)] = inst_12882);
(statearr_12908[(9)] = inst_12857);
(statearr_12908[(10)] = inst_12858);
(statearr_12908[(11)] = inst_12859);
(statearr_12908[(12)] = inst_12860);
return statearr_12908;
})();var statearr_12909_12949 = state_12905__$1;(statearr_12909_12949[(2)] = null);
(statearr_12909_12949[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12906 === (1)))
{var state_12905__$1 = state_12905;var statearr_12910_12950 = state_12905__$1;(statearr_12910_12950[(2)] = null);
(statearr_12910_12950[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12906 === (4)))
{var inst_12846 = (state_12905[(13)]);var inst_12846__$1 = (state_12905[(2)]);var inst_12847 = (inst_12846__$1 == null);var state_12905__$1 = (function (){var statearr_12911 = state_12905;(statearr_12911[(13)] = inst_12846__$1);
return statearr_12911;
})();if(cljs.core.truth_(inst_12847))
{var statearr_12912_12951 = state_12905__$1;(statearr_12912_12951[(1)] = (5));
} else
{var statearr_12913_12952 = state_12905__$1;(statearr_12913_12952[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12906 === (15)))
{var state_12905__$1 = state_12905;var statearr_12917_12953 = state_12905__$1;(statearr_12917_12953[(2)] = null);
(statearr_12917_12953[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12906 === (21)))
{var state_12905__$1 = state_12905;var statearr_12918_12954 = state_12905__$1;(statearr_12918_12954[(2)] = null);
(statearr_12918_12954[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12906 === (13)))
{var inst_12857 = (state_12905[(9)]);var inst_12858 = (state_12905[(10)]);var inst_12859 = (state_12905[(11)]);var inst_12860 = (state_12905[(12)]);var inst_12867 = (state_12905[(2)]);var inst_12868 = (inst_12860 + (1));var tmp12914 = inst_12857;var tmp12915 = inst_12858;var tmp12916 = inst_12859;var inst_12857__$1 = tmp12914;var inst_12858__$1 = tmp12915;var inst_12859__$1 = tmp12916;var inst_12860__$1 = inst_12868;var state_12905__$1 = (function (){var statearr_12919 = state_12905;(statearr_12919[(9)] = inst_12857__$1);
(statearr_12919[(10)] = inst_12858__$1);
(statearr_12919[(11)] = inst_12859__$1);
(statearr_12919[(14)] = inst_12867);
(statearr_12919[(12)] = inst_12860__$1);
return statearr_12919;
})();var statearr_12920_12955 = state_12905__$1;(statearr_12920_12955[(2)] = null);
(statearr_12920_12955[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12906 === (22)))
{var state_12905__$1 = state_12905;var statearr_12921_12956 = state_12905__$1;(statearr_12921_12956[(2)] = null);
(statearr_12921_12956[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12906 === (6)))
{var inst_12846 = (state_12905[(13)]);var inst_12855 = f.call(null,inst_12846);var inst_12856 = cljs.core.seq.call(null,inst_12855);var inst_12857 = inst_12856;var inst_12858 = null;var inst_12859 = (0);var inst_12860 = (0);var state_12905__$1 = (function (){var statearr_12922 = state_12905;(statearr_12922[(9)] = inst_12857);
(statearr_12922[(10)] = inst_12858);
(statearr_12922[(11)] = inst_12859);
(statearr_12922[(12)] = inst_12860);
return statearr_12922;
})();var statearr_12923_12957 = state_12905__$1;(statearr_12923_12957[(2)] = null);
(statearr_12923_12957[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12906 === (17)))
{var inst_12871 = (state_12905[(7)]);var inst_12875 = cljs.core.chunk_first.call(null,inst_12871);var inst_12876 = cljs.core.chunk_rest.call(null,inst_12871);var inst_12877 = cljs.core.count.call(null,inst_12875);var inst_12857 = inst_12876;var inst_12858 = inst_12875;var inst_12859 = inst_12877;var inst_12860 = (0);var state_12905__$1 = (function (){var statearr_12924 = state_12905;(statearr_12924[(9)] = inst_12857);
(statearr_12924[(10)] = inst_12858);
(statearr_12924[(11)] = inst_12859);
(statearr_12924[(12)] = inst_12860);
return statearr_12924;
})();var statearr_12925_12958 = state_12905__$1;(statearr_12925_12958[(2)] = null);
(statearr_12925_12958[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12906 === (3)))
{var inst_12903 = (state_12905[(2)]);var state_12905__$1 = state_12905;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12905__$1,inst_12903);
} else
{if((state_val_12906 === (12)))
{var inst_12891 = (state_12905[(2)]);var state_12905__$1 = state_12905;var statearr_12926_12959 = state_12905__$1;(statearr_12926_12959[(2)] = inst_12891);
(statearr_12926_12959[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12906 === (2)))
{var state_12905__$1 = state_12905;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12905__$1,(4),in$);
} else
{if((state_val_12906 === (23)))
{var inst_12899 = (state_12905[(2)]);var state_12905__$1 = state_12905;var statearr_12927_12960 = state_12905__$1;(statearr_12927_12960[(2)] = inst_12899);
(statearr_12927_12960[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12906 === (19)))
{var inst_12886 = (state_12905[(2)]);var state_12905__$1 = state_12905;var statearr_12928_12961 = state_12905__$1;(statearr_12928_12961[(2)] = inst_12886);
(statearr_12928_12961[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12906 === (11)))
{var inst_12857 = (state_12905[(9)]);var inst_12871 = (state_12905[(7)]);var inst_12871__$1 = cljs.core.seq.call(null,inst_12857);var state_12905__$1 = (function (){var statearr_12929 = state_12905;(statearr_12929[(7)] = inst_12871__$1);
return statearr_12929;
})();if(inst_12871__$1)
{var statearr_12930_12962 = state_12905__$1;(statearr_12930_12962[(1)] = (14));
} else
{var statearr_12931_12963 = state_12905__$1;(statearr_12931_12963[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12906 === (9)))
{var inst_12893 = (state_12905[(2)]);var inst_12894 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_12905__$1 = (function (){var statearr_12932 = state_12905;(statearr_12932[(15)] = inst_12893);
return statearr_12932;
})();if(cljs.core.truth_(inst_12894))
{var statearr_12933_12964 = state_12905__$1;(statearr_12933_12964[(1)] = (21));
} else
{var statearr_12934_12965 = state_12905__$1;(statearr_12934_12965[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12906 === (5)))
{var inst_12849 = cljs.core.async.close_BANG_.call(null,out);var state_12905__$1 = state_12905;var statearr_12935_12966 = state_12905__$1;(statearr_12935_12966[(2)] = inst_12849);
(statearr_12935_12966[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12906 === (14)))
{var inst_12871 = (state_12905[(7)]);var inst_12873 = cljs.core.chunked_seq_QMARK_.call(null,inst_12871);var state_12905__$1 = state_12905;if(inst_12873)
{var statearr_12936_12967 = state_12905__$1;(statearr_12936_12967[(1)] = (17));
} else
{var statearr_12937_12968 = state_12905__$1;(statearr_12937_12968[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12906 === (16)))
{var inst_12889 = (state_12905[(2)]);var state_12905__$1 = state_12905;var statearr_12938_12969 = state_12905__$1;(statearr_12938_12969[(2)] = inst_12889);
(statearr_12938_12969[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12906 === (10)))
{var inst_12858 = (state_12905[(10)]);var inst_12860 = (state_12905[(12)]);var inst_12865 = cljs.core._nth.call(null,inst_12858,inst_12860);var state_12905__$1 = state_12905;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12905__$1,(13),out,inst_12865);
} else
{if((state_val_12906 === (18)))
{var inst_12871 = (state_12905[(7)]);var inst_12880 = cljs.core.first.call(null,inst_12871);var state_12905__$1 = state_12905;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12905__$1,(20),out,inst_12880);
} else
{if((state_val_12906 === (8)))
{var inst_12859 = (state_12905[(11)]);var inst_12860 = (state_12905[(12)]);var inst_12862 = (inst_12860 < inst_12859);var inst_12863 = inst_12862;var state_12905__$1 = state_12905;if(cljs.core.truth_(inst_12863))
{var statearr_12939_12970 = state_12905__$1;(statearr_12939_12970[(1)] = (10));
} else
{var statearr_12940_12971 = state_12905__$1;(statearr_12940_12971[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__7332__auto__))
;return ((function (switch__7317__auto__,c__7332__auto__){
return (function() {
var state_machine__7318__auto__ = null;
var state_machine__7318__auto____0 = (function (){var statearr_12944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12944[(0)] = state_machine__7318__auto__);
(statearr_12944[(1)] = (1));
return statearr_12944;
});
var state_machine__7318__auto____1 = (function (state_12905){while(true){
var ret_value__7319__auto__ = (function (){try{while(true){
var result__7320__auto__ = switch__7317__auto__.call(null,state_12905);if(cljs.core.keyword_identical_QMARK_.call(null,result__7320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7320__auto__;
}
break;
}
}catch (e12945){if((e12945 instanceof Object))
{var ex__7321__auto__ = e12945;var statearr_12946_12972 = state_12905;(statearr_12946_12972[(5)] = ex__7321__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12905);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12945;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12973 = state_12905;
state_12905 = G__12973;
continue;
}
} else
{return ret_value__7319__auto__;
}
break;
}
});
state_machine__7318__auto__ = function(state_12905){
switch(arguments.length){
case 0:
return state_machine__7318__auto____0.call(this);
case 1:
return state_machine__7318__auto____1.call(this,state_12905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7318__auto____0;
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7318__auto____1;
return state_machine__7318__auto__;
})()
;})(switch__7317__auto__,c__7332__auto__))
})();var state__7334__auto__ = (function (){var statearr_12947 = f__7333__auto__.call(null);(statearr_12947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7332__auto__);
return statearr_12947;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7334__auto__);
});})(c__7332__auto__))
);
return c__7332__auto__;
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
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
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
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
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
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__7332__auto___13068 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7332__auto___13068){
return (function (){var f__7333__auto__ = (function (){var switch__7317__auto__ = ((function (c__7332__auto___13068){
return (function (state_13044){var state_val_13045 = (state_13044[(1)]);if((state_val_13045 === (7)))
{var inst_13040 = (state_13044[(2)]);var state_13044__$1 = state_13044;var statearr_13046_13069 = state_13044__$1;(statearr_13046_13069[(2)] = inst_13040);
(statearr_13046_13069[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13045 === (1)))
{var state_13044__$1 = state_13044;var statearr_13047_13070 = state_13044__$1;(statearr_13047_13070[(2)] = null);
(statearr_13047_13070[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13045 === (4)))
{var inst_13023 = (state_13044[(7)]);var inst_13023__$1 = (state_13044[(2)]);var inst_13024 = (inst_13023__$1 == null);var state_13044__$1 = (function (){var statearr_13048 = state_13044;(statearr_13048[(7)] = inst_13023__$1);
return statearr_13048;
})();if(cljs.core.truth_(inst_13024))
{var statearr_13049_13071 = state_13044__$1;(statearr_13049_13071[(1)] = (5));
} else
{var statearr_13050_13072 = state_13044__$1;(statearr_13050_13072[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13045 === (13)))
{var state_13044__$1 = state_13044;var statearr_13051_13073 = state_13044__$1;(statearr_13051_13073[(2)] = null);
(statearr_13051_13073[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13045 === (6)))
{var inst_13023 = (state_13044[(7)]);var state_13044__$1 = state_13044;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13044__$1,(11),to,inst_13023);
} else
{if((state_val_13045 === (3)))
{var inst_13042 = (state_13044[(2)]);var state_13044__$1 = state_13044;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13044__$1,inst_13042);
} else
{if((state_val_13045 === (12)))
{var state_13044__$1 = state_13044;var statearr_13052_13074 = state_13044__$1;(statearr_13052_13074[(2)] = null);
(statearr_13052_13074[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13045 === (2)))
{var state_13044__$1 = state_13044;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13044__$1,(4),from);
} else
{if((state_val_13045 === (11)))
{var inst_13033 = (state_13044[(2)]);var state_13044__$1 = state_13044;if(cljs.core.truth_(inst_13033))
{var statearr_13053_13075 = state_13044__$1;(statearr_13053_13075[(1)] = (12));
} else
{var statearr_13054_13076 = state_13044__$1;(statearr_13054_13076[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13045 === (9)))
{var state_13044__$1 = state_13044;var statearr_13055_13077 = state_13044__$1;(statearr_13055_13077[(2)] = null);
(statearr_13055_13077[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13045 === (5)))
{var state_13044__$1 = state_13044;if(cljs.core.truth_(close_QMARK_))
{var statearr_13056_13078 = state_13044__$1;(statearr_13056_13078[(1)] = (8));
} else
{var statearr_13057_13079 = state_13044__$1;(statearr_13057_13079[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13045 === (14)))
{var inst_13038 = (state_13044[(2)]);var state_13044__$1 = state_13044;var statearr_13058_13080 = state_13044__$1;(statearr_13058_13080[(2)] = inst_13038);
(statearr_13058_13080[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13045 === (10)))
{var inst_13030 = (state_13044[(2)]);var state_13044__$1 = state_13044;var statearr_13059_13081 = state_13044__$1;(statearr_13059_13081[(2)] = inst_13030);
(statearr_13059_13081[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13045 === (8)))
{var inst_13027 = cljs.core.async.close_BANG_.call(null,to);var state_13044__$1 = state_13044;var statearr_13060_13082 = state_13044__$1;(statearr_13060_13082[(2)] = inst_13027);
(statearr_13060_13082[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__7332__auto___13068))
;return ((function (switch__7317__auto__,c__7332__auto___13068){
return (function() {
var state_machine__7318__auto__ = null;
var state_machine__7318__auto____0 = (function (){var statearr_13064 = [null,null,null,null,null,null,null,null];(statearr_13064[(0)] = state_machine__7318__auto__);
(statearr_13064[(1)] = (1));
return statearr_13064;
});
var state_machine__7318__auto____1 = (function (state_13044){while(true){
var ret_value__7319__auto__ = (function (){try{while(true){
var result__7320__auto__ = switch__7317__auto__.call(null,state_13044);if(cljs.core.keyword_identical_QMARK_.call(null,result__7320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7320__auto__;
}
break;
}
}catch (e13065){if((e13065 instanceof Object))
{var ex__7321__auto__ = e13065;var statearr_13066_13083 = state_13044;(statearr_13066_13083[(5)] = ex__7321__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13044);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13065;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13084 = state_13044;
state_13044 = G__13084;
continue;
}
} else
{return ret_value__7319__auto__;
}
break;
}
});
state_machine__7318__auto__ = function(state_13044){
switch(arguments.length){
case 0:
return state_machine__7318__auto____0.call(this);
case 1:
return state_machine__7318__auto____1.call(this,state_13044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7318__auto____0;
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7318__auto____1;
return state_machine__7318__auto__;
})()
;})(switch__7317__auto__,c__7332__auto___13068))
})();var state__7334__auto__ = (function (){var statearr_13067 = f__7333__auto__.call(null);(statearr_13067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7332__auto___13068);
return statearr_13067;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7334__auto__);
});})(c__7332__auto___13068))
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
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__7332__auto___13185 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7332__auto___13185,tc,fc){
return (function (){var f__7333__auto__ = (function (){var switch__7317__auto__ = ((function (c__7332__auto___13185,tc,fc){
return (function (state_13160){var state_val_13161 = (state_13160[(1)]);if((state_val_13161 === (7)))
{var inst_13156 = (state_13160[(2)]);var state_13160__$1 = state_13160;var statearr_13162_13186 = state_13160__$1;(statearr_13162_13186[(2)] = inst_13156);
(statearr_13162_13186[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13161 === (1)))
{var state_13160__$1 = state_13160;var statearr_13163_13187 = state_13160__$1;(statearr_13163_13187[(2)] = null);
(statearr_13163_13187[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13161 === (4)))
{var inst_13137 = (state_13160[(7)]);var inst_13137__$1 = (state_13160[(2)]);var inst_13138 = (inst_13137__$1 == null);var state_13160__$1 = (function (){var statearr_13164 = state_13160;(statearr_13164[(7)] = inst_13137__$1);
return statearr_13164;
})();if(cljs.core.truth_(inst_13138))
{var statearr_13165_13188 = state_13160__$1;(statearr_13165_13188[(1)] = (5));
} else
{var statearr_13166_13189 = state_13160__$1;(statearr_13166_13189[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13161 === (13)))
{var state_13160__$1 = state_13160;var statearr_13167_13190 = state_13160__$1;(statearr_13167_13190[(2)] = null);
(statearr_13167_13190[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13161 === (6)))
{var inst_13137 = (state_13160[(7)]);var inst_13143 = p.call(null,inst_13137);var state_13160__$1 = state_13160;if(cljs.core.truth_(inst_13143))
{var statearr_13168_13191 = state_13160__$1;(statearr_13168_13191[(1)] = (9));
} else
{var statearr_13169_13192 = state_13160__$1;(statearr_13169_13192[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13161 === (3)))
{var inst_13158 = (state_13160[(2)]);var state_13160__$1 = state_13160;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13160__$1,inst_13158);
} else
{if((state_val_13161 === (12)))
{var state_13160__$1 = state_13160;var statearr_13170_13193 = state_13160__$1;(statearr_13170_13193[(2)] = null);
(statearr_13170_13193[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13161 === (2)))
{var state_13160__$1 = state_13160;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13160__$1,(4),ch);
} else
{if((state_val_13161 === (11)))
{var inst_13137 = (state_13160[(7)]);var inst_13147 = (state_13160[(2)]);var state_13160__$1 = state_13160;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13160__$1,(8),inst_13147,inst_13137);
} else
{if((state_val_13161 === (9)))
{var state_13160__$1 = state_13160;var statearr_13171_13194 = state_13160__$1;(statearr_13171_13194[(2)] = tc);
(statearr_13171_13194[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13161 === (5)))
{var inst_13140 = cljs.core.async.close_BANG_.call(null,tc);var inst_13141 = cljs.core.async.close_BANG_.call(null,fc);var state_13160__$1 = (function (){var statearr_13172 = state_13160;(statearr_13172[(8)] = inst_13140);
return statearr_13172;
})();var statearr_13173_13195 = state_13160__$1;(statearr_13173_13195[(2)] = inst_13141);
(statearr_13173_13195[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13161 === (14)))
{var inst_13154 = (state_13160[(2)]);var state_13160__$1 = state_13160;var statearr_13174_13196 = state_13160__$1;(statearr_13174_13196[(2)] = inst_13154);
(statearr_13174_13196[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13161 === (10)))
{var state_13160__$1 = state_13160;var statearr_13175_13197 = state_13160__$1;(statearr_13175_13197[(2)] = fc);
(statearr_13175_13197[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13161 === (8)))
{var inst_13149 = (state_13160[(2)]);var state_13160__$1 = state_13160;if(cljs.core.truth_(inst_13149))
{var statearr_13176_13198 = state_13160__$1;(statearr_13176_13198[(1)] = (12));
} else
{var statearr_13177_13199 = state_13160__$1;(statearr_13177_13199[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__7332__auto___13185,tc,fc))
;return ((function (switch__7317__auto__,c__7332__auto___13185,tc,fc){
return (function() {
var state_machine__7318__auto__ = null;
var state_machine__7318__auto____0 = (function (){var statearr_13181 = [null,null,null,null,null,null,null,null,null];(statearr_13181[(0)] = state_machine__7318__auto__);
(statearr_13181[(1)] = (1));
return statearr_13181;
});
var state_machine__7318__auto____1 = (function (state_13160){while(true){
var ret_value__7319__auto__ = (function (){try{while(true){
var result__7320__auto__ = switch__7317__auto__.call(null,state_13160);if(cljs.core.keyword_identical_QMARK_.call(null,result__7320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7320__auto__;
}
break;
}
}catch (e13182){if((e13182 instanceof Object))
{var ex__7321__auto__ = e13182;var statearr_13183_13200 = state_13160;(statearr_13183_13200[(5)] = ex__7321__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13160);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13182;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13201 = state_13160;
state_13160 = G__13201;
continue;
}
} else
{return ret_value__7319__auto__;
}
break;
}
});
state_machine__7318__auto__ = function(state_13160){
switch(arguments.length){
case 0:
return state_machine__7318__auto____0.call(this);
case 1:
return state_machine__7318__auto____1.call(this,state_13160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7318__auto____0;
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7318__auto____1;
return state_machine__7318__auto__;
})()
;})(switch__7317__auto__,c__7332__auto___13185,tc,fc))
})();var state__7334__auto__ = (function (){var statearr_13184 = f__7333__auto__.call(null);(statearr_13184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7332__auto___13185);
return statearr_13184;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7334__auto__);
});})(c__7332__auto___13185,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__7332__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7332__auto__){
return (function (){var f__7333__auto__ = (function (){var switch__7317__auto__ = ((function (c__7332__auto__){
return (function (state_13248){var state_val_13249 = (state_13248[(1)]);if((state_val_13249 === (7)))
{var inst_13244 = (state_13248[(2)]);var state_13248__$1 = state_13248;var statearr_13250_13266 = state_13248__$1;(statearr_13250_13266[(2)] = inst_13244);
(statearr_13250_13266[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13249 === (6)))
{var inst_13237 = (state_13248[(7)]);var inst_13234 = (state_13248[(8)]);var inst_13241 = f.call(null,inst_13234,inst_13237);var inst_13234__$1 = inst_13241;var state_13248__$1 = (function (){var statearr_13251 = state_13248;(statearr_13251[(8)] = inst_13234__$1);
return statearr_13251;
})();var statearr_13252_13267 = state_13248__$1;(statearr_13252_13267[(2)] = null);
(statearr_13252_13267[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13249 === (5)))
{var inst_13234 = (state_13248[(8)]);var state_13248__$1 = state_13248;var statearr_13253_13268 = state_13248__$1;(statearr_13253_13268[(2)] = inst_13234);
(statearr_13253_13268[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13249 === (4)))
{var inst_13237 = (state_13248[(7)]);var inst_13237__$1 = (state_13248[(2)]);var inst_13238 = (inst_13237__$1 == null);var state_13248__$1 = (function (){var statearr_13254 = state_13248;(statearr_13254[(7)] = inst_13237__$1);
return statearr_13254;
})();if(cljs.core.truth_(inst_13238))
{var statearr_13255_13269 = state_13248__$1;(statearr_13255_13269[(1)] = (5));
} else
{var statearr_13256_13270 = state_13248__$1;(statearr_13256_13270[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13249 === (3)))
{var inst_13246 = (state_13248[(2)]);var state_13248__$1 = state_13248;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13248__$1,inst_13246);
} else
{if((state_val_13249 === (2)))
{var state_13248__$1 = state_13248;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13248__$1,(4),ch);
} else
{if((state_val_13249 === (1)))
{var inst_13234 = init;var state_13248__$1 = (function (){var statearr_13257 = state_13248;(statearr_13257[(8)] = inst_13234);
return statearr_13257;
})();var statearr_13258_13271 = state_13248__$1;(statearr_13258_13271[(2)] = null);
(statearr_13258_13271[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__7332__auto__))
;return ((function (switch__7317__auto__,c__7332__auto__){
return (function() {
var state_machine__7318__auto__ = null;
var state_machine__7318__auto____0 = (function (){var statearr_13262 = [null,null,null,null,null,null,null,null,null];(statearr_13262[(0)] = state_machine__7318__auto__);
(statearr_13262[(1)] = (1));
return statearr_13262;
});
var state_machine__7318__auto____1 = (function (state_13248){while(true){
var ret_value__7319__auto__ = (function (){try{while(true){
var result__7320__auto__ = switch__7317__auto__.call(null,state_13248);if(cljs.core.keyword_identical_QMARK_.call(null,result__7320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7320__auto__;
}
break;
}
}catch (e13263){if((e13263 instanceof Object))
{var ex__7321__auto__ = e13263;var statearr_13264_13272 = state_13248;(statearr_13264_13272[(5)] = ex__7321__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13248);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13263;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13273 = state_13248;
state_13248 = G__13273;
continue;
}
} else
{return ret_value__7319__auto__;
}
break;
}
});
state_machine__7318__auto__ = function(state_13248){
switch(arguments.length){
case 0:
return state_machine__7318__auto____0.call(this);
case 1:
return state_machine__7318__auto____1.call(this,state_13248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7318__auto____0;
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7318__auto____1;
return state_machine__7318__auto__;
})()
;})(switch__7317__auto__,c__7332__auto__))
})();var state__7334__auto__ = (function (){var statearr_13265 = f__7333__auto__.call(null);(statearr_13265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7332__auto__);
return statearr_13265;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7334__auto__);
});})(c__7332__auto__))
);
return c__7332__auto__;
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
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__7332__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7332__auto__){
return (function (){var f__7333__auto__ = (function (){var switch__7317__auto__ = ((function (c__7332__auto__){
return (function (state_13347){var state_val_13348 = (state_13347[(1)]);if((state_val_13348 === (7)))
{var inst_13329 = (state_13347[(2)]);var state_13347__$1 = state_13347;var statearr_13349_13372 = state_13347__$1;(statearr_13349_13372[(2)] = inst_13329);
(statearr_13349_13372[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13348 === (1)))
{var inst_13323 = cljs.core.seq.call(null,coll);var inst_13324 = inst_13323;var state_13347__$1 = (function (){var statearr_13350 = state_13347;(statearr_13350[(7)] = inst_13324);
return statearr_13350;
})();var statearr_13351_13373 = state_13347__$1;(statearr_13351_13373[(2)] = null);
(statearr_13351_13373[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13348 === (4)))
{var inst_13324 = (state_13347[(7)]);var inst_13327 = cljs.core.first.call(null,inst_13324);var state_13347__$1 = state_13347;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13347__$1,(7),ch,inst_13327);
} else
{if((state_val_13348 === (13)))
{var inst_13341 = (state_13347[(2)]);var state_13347__$1 = state_13347;var statearr_13352_13374 = state_13347__$1;(statearr_13352_13374[(2)] = inst_13341);
(statearr_13352_13374[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13348 === (6)))
{var inst_13332 = (state_13347[(2)]);var state_13347__$1 = state_13347;if(cljs.core.truth_(inst_13332))
{var statearr_13353_13375 = state_13347__$1;(statearr_13353_13375[(1)] = (8));
} else
{var statearr_13354_13376 = state_13347__$1;(statearr_13354_13376[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13348 === (3)))
{var inst_13345 = (state_13347[(2)]);var state_13347__$1 = state_13347;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13347__$1,inst_13345);
} else
{if((state_val_13348 === (12)))
{var state_13347__$1 = state_13347;var statearr_13355_13377 = state_13347__$1;(statearr_13355_13377[(2)] = null);
(statearr_13355_13377[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13348 === (2)))
{var inst_13324 = (state_13347[(7)]);var state_13347__$1 = state_13347;if(cljs.core.truth_(inst_13324))
{var statearr_13356_13378 = state_13347__$1;(statearr_13356_13378[(1)] = (4));
} else
{var statearr_13357_13379 = state_13347__$1;(statearr_13357_13379[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13348 === (11)))
{var inst_13338 = cljs.core.async.close_BANG_.call(null,ch);var state_13347__$1 = state_13347;var statearr_13358_13380 = state_13347__$1;(statearr_13358_13380[(2)] = inst_13338);
(statearr_13358_13380[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13348 === (9)))
{var state_13347__$1 = state_13347;if(cljs.core.truth_(close_QMARK_))
{var statearr_13359_13381 = state_13347__$1;(statearr_13359_13381[(1)] = (11));
} else
{var statearr_13360_13382 = state_13347__$1;(statearr_13360_13382[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13348 === (5)))
{var inst_13324 = (state_13347[(7)]);var state_13347__$1 = state_13347;var statearr_13361_13383 = state_13347__$1;(statearr_13361_13383[(2)] = inst_13324);
(statearr_13361_13383[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13348 === (10)))
{var inst_13343 = (state_13347[(2)]);var state_13347__$1 = state_13347;var statearr_13362_13384 = state_13347__$1;(statearr_13362_13384[(2)] = inst_13343);
(statearr_13362_13384[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13348 === (8)))
{var inst_13324 = (state_13347[(7)]);var inst_13334 = cljs.core.next.call(null,inst_13324);var inst_13324__$1 = inst_13334;var state_13347__$1 = (function (){var statearr_13363 = state_13347;(statearr_13363[(7)] = inst_13324__$1);
return statearr_13363;
})();var statearr_13364_13385 = state_13347__$1;(statearr_13364_13385[(2)] = null);
(statearr_13364_13385[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__7332__auto__))
;return ((function (switch__7317__auto__,c__7332__auto__){
return (function() {
var state_machine__7318__auto__ = null;
var state_machine__7318__auto____0 = (function (){var statearr_13368 = [null,null,null,null,null,null,null,null];(statearr_13368[(0)] = state_machine__7318__auto__);
(statearr_13368[(1)] = (1));
return statearr_13368;
});
var state_machine__7318__auto____1 = (function (state_13347){while(true){
var ret_value__7319__auto__ = (function (){try{while(true){
var result__7320__auto__ = switch__7317__auto__.call(null,state_13347);if(cljs.core.keyword_identical_QMARK_.call(null,result__7320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7320__auto__;
}
break;
}
}catch (e13369){if((e13369 instanceof Object))
{var ex__7321__auto__ = e13369;var statearr_13370_13386 = state_13347;(statearr_13370_13386[(5)] = ex__7321__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13347);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13369;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13387 = state_13347;
state_13347 = G__13387;
continue;
}
} else
{return ret_value__7319__auto__;
}
break;
}
});
state_machine__7318__auto__ = function(state_13347){
switch(arguments.length){
case 0:
return state_machine__7318__auto____0.call(this);
case 1:
return state_machine__7318__auto____1.call(this,state_13347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7318__auto____0;
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7318__auto____1;
return state_machine__7318__auto__;
})()
;})(switch__7317__auto__,c__7332__auto__))
})();var state__7334__auto__ = (function (){var statearr_13371 = f__7333__auto__.call(null);(statearr_13371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7332__auto__);
return statearr_13371;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7334__auto__);
});})(c__7332__auto__))
);
return c__7332__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj13389 = {};return obj13389;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3657__auto__ = _;if(and__3657__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3657__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4305__auto__ = (((_ == null))?null:_);return (function (){var or__3669__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4305__auto__)]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj13391 = {};return obj13391;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3657__auto__ = m;if(and__3657__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3657__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4305__auto__ = (((m == null))?null:m);return (function (){var or__3669__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4305__auto__)]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
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
{var x__4305__auto__ = (((m == null))?null:m);return (function (){var or__3669__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4305__auto__)]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
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
{var x__4305__auto__ = (((m == null))?null:m);return (function (){var or__3669__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4305__auto__)]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13613 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13613 = (function (cs,ch,mult,meta13614){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13614 = meta13614;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13613.cljs$lang$type = true;
cljs.core.async.t13613.cljs$lang$ctorStr = "cljs.core.async/t13613";
cljs.core.async.t13613.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write.call(null,writer__4246__auto__,"cljs.core.async/t13613");
});})(cs))
;
cljs.core.async.t13613.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13613.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13613.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13613.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13613.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13613.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13613.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13615){var self__ = this;
var _13615__$1 = this;return self__.meta13614;
});})(cs))
;
cljs.core.async.t13613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13615,meta13614__$1){var self__ = this;
var _13615__$1 = this;return (new cljs.core.async.t13613(self__.cs,self__.ch,self__.mult,meta13614__$1));
});})(cs))
;
cljs.core.async.__GT_t13613 = ((function (cs){
return (function __GT_t13613(cs__$1,ch__$1,mult__$1,meta13614){return (new cljs.core.async.t13613(cs__$1,ch__$1,mult__$1,meta13614));
});})(cs))
;
}
return (new cljs.core.async.t13613(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__7332__auto___13834 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7332__auto___13834,cs,m,dchan,dctr,done){
return (function (){var f__7333__auto__ = (function (){var switch__7317__auto__ = ((function (c__7332__auto___13834,cs,m,dchan,dctr,done){
return (function (state_13746){var state_val_13747 = (state_13746[(1)]);if((state_val_13747 === (7)))
{var inst_13742 = (state_13746[(2)]);var state_13746__$1 = state_13746;var statearr_13748_13835 = state_13746__$1;(statearr_13748_13835[(2)] = inst_13742);
(statearr_13748_13835[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (20)))
{var inst_13647 = (state_13746[(7)]);var inst_13657 = cljs.core.first.call(null,inst_13647);var inst_13658 = cljs.core.nth.call(null,inst_13657,(0),null);var inst_13659 = cljs.core.nth.call(null,inst_13657,(1),null);var state_13746__$1 = (function (){var statearr_13749 = state_13746;(statearr_13749[(8)] = inst_13658);
return statearr_13749;
})();if(cljs.core.truth_(inst_13659))
{var statearr_13750_13836 = state_13746__$1;(statearr_13750_13836[(1)] = (22));
} else
{var statearr_13751_13837 = state_13746__$1;(statearr_13751_13837[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (27)))
{var inst_13689 = (state_13746[(9)]);var inst_13694 = (state_13746[(10)]);var inst_13618 = (state_13746[(11)]);var inst_13687 = (state_13746[(12)]);var inst_13694__$1 = cljs.core._nth.call(null,inst_13687,inst_13689);var inst_13695 = cljs.core.async.put_BANG_.call(null,inst_13694__$1,inst_13618,done);var state_13746__$1 = (function (){var statearr_13752 = state_13746;(statearr_13752[(10)] = inst_13694__$1);
return statearr_13752;
})();if(cljs.core.truth_(inst_13695))
{var statearr_13753_13838 = state_13746__$1;(statearr_13753_13838[(1)] = (30));
} else
{var statearr_13754_13839 = state_13746__$1;(statearr_13754_13839[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (1)))
{var state_13746__$1 = state_13746;var statearr_13755_13840 = state_13746__$1;(statearr_13755_13840[(2)] = null);
(statearr_13755_13840[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (24)))
{var inst_13647 = (state_13746[(7)]);var inst_13664 = (state_13746[(2)]);var inst_13665 = cljs.core.next.call(null,inst_13647);var inst_13627 = inst_13665;var inst_13628 = null;var inst_13629 = (0);var inst_13630 = (0);var state_13746__$1 = (function (){var statearr_13756 = state_13746;(statearr_13756[(13)] = inst_13628);
(statearr_13756[(14)] = inst_13630);
(statearr_13756[(15)] = inst_13629);
(statearr_13756[(16)] = inst_13664);
(statearr_13756[(17)] = inst_13627);
return statearr_13756;
})();var statearr_13757_13841 = state_13746__$1;(statearr_13757_13841[(2)] = null);
(statearr_13757_13841[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (39)))
{var state_13746__$1 = state_13746;var statearr_13761_13842 = state_13746__$1;(statearr_13761_13842[(2)] = null);
(statearr_13761_13842[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (4)))
{var inst_13618 = (state_13746[(11)]);var inst_13618__$1 = (state_13746[(2)]);var inst_13619 = (inst_13618__$1 == null);var state_13746__$1 = (function (){var statearr_13762 = state_13746;(statearr_13762[(11)] = inst_13618__$1);
return statearr_13762;
})();if(cljs.core.truth_(inst_13619))
{var statearr_13763_13843 = state_13746__$1;(statearr_13763_13843[(1)] = (5));
} else
{var statearr_13764_13844 = state_13746__$1;(statearr_13764_13844[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (15)))
{var inst_13628 = (state_13746[(13)]);var inst_13630 = (state_13746[(14)]);var inst_13629 = (state_13746[(15)]);var inst_13627 = (state_13746[(17)]);var inst_13643 = (state_13746[(2)]);var inst_13644 = (inst_13630 + (1));var tmp13758 = inst_13628;var tmp13759 = inst_13629;var tmp13760 = inst_13627;var inst_13627__$1 = tmp13760;var inst_13628__$1 = tmp13758;var inst_13629__$1 = tmp13759;var inst_13630__$1 = inst_13644;var state_13746__$1 = (function (){var statearr_13765 = state_13746;(statearr_13765[(13)] = inst_13628__$1);
(statearr_13765[(14)] = inst_13630__$1);
(statearr_13765[(15)] = inst_13629__$1);
(statearr_13765[(17)] = inst_13627__$1);
(statearr_13765[(18)] = inst_13643);
return statearr_13765;
})();var statearr_13766_13845 = state_13746__$1;(statearr_13766_13845[(2)] = null);
(statearr_13766_13845[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (21)))
{var inst_13668 = (state_13746[(2)]);var state_13746__$1 = state_13746;var statearr_13770_13846 = state_13746__$1;(statearr_13770_13846[(2)] = inst_13668);
(statearr_13770_13846[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (31)))
{var inst_13694 = (state_13746[(10)]);var inst_13698 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13699 = cljs.core.async.untap_STAR_.call(null,m,inst_13694);var state_13746__$1 = (function (){var statearr_13771 = state_13746;(statearr_13771[(19)] = inst_13698);
return statearr_13771;
})();var statearr_13772_13847 = state_13746__$1;(statearr_13772_13847[(2)] = inst_13699);
(statearr_13772_13847[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (32)))
{var inst_13688 = (state_13746[(20)]);var inst_13689 = (state_13746[(9)]);var inst_13686 = (state_13746[(21)]);var inst_13687 = (state_13746[(12)]);var inst_13701 = (state_13746[(2)]);var inst_13702 = (inst_13689 + (1));var tmp13767 = inst_13688;var tmp13768 = inst_13686;var tmp13769 = inst_13687;var inst_13686__$1 = tmp13768;var inst_13687__$1 = tmp13769;var inst_13688__$1 = tmp13767;var inst_13689__$1 = inst_13702;var state_13746__$1 = (function (){var statearr_13773 = state_13746;(statearr_13773[(20)] = inst_13688__$1);
(statearr_13773[(9)] = inst_13689__$1);
(statearr_13773[(22)] = inst_13701);
(statearr_13773[(21)] = inst_13686__$1);
(statearr_13773[(12)] = inst_13687__$1);
return statearr_13773;
})();var statearr_13774_13848 = state_13746__$1;(statearr_13774_13848[(2)] = null);
(statearr_13774_13848[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (40)))
{var inst_13714 = (state_13746[(23)]);var inst_13718 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13719 = cljs.core.async.untap_STAR_.call(null,m,inst_13714);var state_13746__$1 = (function (){var statearr_13775 = state_13746;(statearr_13775[(24)] = inst_13718);
return statearr_13775;
})();var statearr_13776_13849 = state_13746__$1;(statearr_13776_13849[(2)] = inst_13719);
(statearr_13776_13849[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (33)))
{var inst_13705 = (state_13746[(25)]);var inst_13707 = cljs.core.chunked_seq_QMARK_.call(null,inst_13705);var state_13746__$1 = state_13746;if(inst_13707)
{var statearr_13777_13850 = state_13746__$1;(statearr_13777_13850[(1)] = (36));
} else
{var statearr_13778_13851 = state_13746__$1;(statearr_13778_13851[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (13)))
{var inst_13637 = (state_13746[(26)]);var inst_13640 = cljs.core.async.close_BANG_.call(null,inst_13637);var state_13746__$1 = state_13746;var statearr_13779_13852 = state_13746__$1;(statearr_13779_13852[(2)] = inst_13640);
(statearr_13779_13852[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (22)))
{var inst_13658 = (state_13746[(8)]);var inst_13661 = cljs.core.async.close_BANG_.call(null,inst_13658);var state_13746__$1 = state_13746;var statearr_13780_13853 = state_13746__$1;(statearr_13780_13853[(2)] = inst_13661);
(statearr_13780_13853[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (36)))
{var inst_13705 = (state_13746[(25)]);var inst_13709 = cljs.core.chunk_first.call(null,inst_13705);var inst_13710 = cljs.core.chunk_rest.call(null,inst_13705);var inst_13711 = cljs.core.count.call(null,inst_13709);var inst_13686 = inst_13710;var inst_13687 = inst_13709;var inst_13688 = inst_13711;var inst_13689 = (0);var state_13746__$1 = (function (){var statearr_13781 = state_13746;(statearr_13781[(20)] = inst_13688);
(statearr_13781[(9)] = inst_13689);
(statearr_13781[(21)] = inst_13686);
(statearr_13781[(12)] = inst_13687);
return statearr_13781;
})();var statearr_13782_13854 = state_13746__$1;(statearr_13782_13854[(2)] = null);
(statearr_13782_13854[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (41)))
{var inst_13705 = (state_13746[(25)]);var inst_13721 = (state_13746[(2)]);var inst_13722 = cljs.core.next.call(null,inst_13705);var inst_13686 = inst_13722;var inst_13687 = null;var inst_13688 = (0);var inst_13689 = (0);var state_13746__$1 = (function (){var statearr_13783 = state_13746;(statearr_13783[(20)] = inst_13688);
(statearr_13783[(27)] = inst_13721);
(statearr_13783[(9)] = inst_13689);
(statearr_13783[(21)] = inst_13686);
(statearr_13783[(12)] = inst_13687);
return statearr_13783;
})();var statearr_13784_13855 = state_13746__$1;(statearr_13784_13855[(2)] = null);
(statearr_13784_13855[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (43)))
{var state_13746__$1 = state_13746;var statearr_13785_13856 = state_13746__$1;(statearr_13785_13856[(2)] = null);
(statearr_13785_13856[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (29)))
{var inst_13730 = (state_13746[(2)]);var state_13746__$1 = state_13746;var statearr_13786_13857 = state_13746__$1;(statearr_13786_13857[(2)] = inst_13730);
(statearr_13786_13857[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (44)))
{var inst_13739 = (state_13746[(2)]);var state_13746__$1 = (function (){var statearr_13787 = state_13746;(statearr_13787[(28)] = inst_13739);
return statearr_13787;
})();var statearr_13788_13858 = state_13746__$1;(statearr_13788_13858[(2)] = null);
(statearr_13788_13858[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (6)))
{var inst_13678 = (state_13746[(29)]);var inst_13677 = cljs.core.deref.call(null,cs);var inst_13678__$1 = cljs.core.keys.call(null,inst_13677);var inst_13679 = cljs.core.count.call(null,inst_13678__$1);var inst_13680 = cljs.core.reset_BANG_.call(null,dctr,inst_13679);var inst_13685 = cljs.core.seq.call(null,inst_13678__$1);var inst_13686 = inst_13685;var inst_13687 = null;var inst_13688 = (0);var inst_13689 = (0);var state_13746__$1 = (function (){var statearr_13789 = state_13746;(statearr_13789[(20)] = inst_13688);
(statearr_13789[(9)] = inst_13689);
(statearr_13789[(29)] = inst_13678__$1);
(statearr_13789[(21)] = inst_13686);
(statearr_13789[(12)] = inst_13687);
(statearr_13789[(30)] = inst_13680);
return statearr_13789;
})();var statearr_13790_13859 = state_13746__$1;(statearr_13790_13859[(2)] = null);
(statearr_13790_13859[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (28)))
{var inst_13705 = (state_13746[(25)]);var inst_13686 = (state_13746[(21)]);var inst_13705__$1 = cljs.core.seq.call(null,inst_13686);var state_13746__$1 = (function (){var statearr_13791 = state_13746;(statearr_13791[(25)] = inst_13705__$1);
return statearr_13791;
})();if(inst_13705__$1)
{var statearr_13792_13860 = state_13746__$1;(statearr_13792_13860[(1)] = (33));
} else
{var statearr_13793_13861 = state_13746__$1;(statearr_13793_13861[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (25)))
{var inst_13688 = (state_13746[(20)]);var inst_13689 = (state_13746[(9)]);var inst_13691 = (inst_13689 < inst_13688);var inst_13692 = inst_13691;var state_13746__$1 = state_13746;if(cljs.core.truth_(inst_13692))
{var statearr_13794_13862 = state_13746__$1;(statearr_13794_13862[(1)] = (27));
} else
{var statearr_13795_13863 = state_13746__$1;(statearr_13795_13863[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (34)))
{var state_13746__$1 = state_13746;var statearr_13796_13864 = state_13746__$1;(statearr_13796_13864[(2)] = null);
(statearr_13796_13864[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (17)))
{var state_13746__$1 = state_13746;var statearr_13797_13865 = state_13746__$1;(statearr_13797_13865[(2)] = null);
(statearr_13797_13865[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (3)))
{var inst_13744 = (state_13746[(2)]);var state_13746__$1 = state_13746;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13746__$1,inst_13744);
} else
{if((state_val_13747 === (12)))
{var inst_13673 = (state_13746[(2)]);var state_13746__$1 = state_13746;var statearr_13798_13866 = state_13746__$1;(statearr_13798_13866[(2)] = inst_13673);
(statearr_13798_13866[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (2)))
{var state_13746__$1 = state_13746;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13746__$1,(4),ch);
} else
{if((state_val_13747 === (23)))
{var state_13746__$1 = state_13746;var statearr_13799_13867 = state_13746__$1;(statearr_13799_13867[(2)] = null);
(statearr_13799_13867[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (35)))
{var inst_13728 = (state_13746[(2)]);var state_13746__$1 = state_13746;var statearr_13800_13868 = state_13746__$1;(statearr_13800_13868[(2)] = inst_13728);
(statearr_13800_13868[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (19)))
{var inst_13647 = (state_13746[(7)]);var inst_13651 = cljs.core.chunk_first.call(null,inst_13647);var inst_13652 = cljs.core.chunk_rest.call(null,inst_13647);var inst_13653 = cljs.core.count.call(null,inst_13651);var inst_13627 = inst_13652;var inst_13628 = inst_13651;var inst_13629 = inst_13653;var inst_13630 = (0);var state_13746__$1 = (function (){var statearr_13801 = state_13746;(statearr_13801[(13)] = inst_13628);
(statearr_13801[(14)] = inst_13630);
(statearr_13801[(15)] = inst_13629);
(statearr_13801[(17)] = inst_13627);
return statearr_13801;
})();var statearr_13802_13869 = state_13746__$1;(statearr_13802_13869[(2)] = null);
(statearr_13802_13869[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (11)))
{var inst_13647 = (state_13746[(7)]);var inst_13627 = (state_13746[(17)]);var inst_13647__$1 = cljs.core.seq.call(null,inst_13627);var state_13746__$1 = (function (){var statearr_13803 = state_13746;(statearr_13803[(7)] = inst_13647__$1);
return statearr_13803;
})();if(inst_13647__$1)
{var statearr_13804_13870 = state_13746__$1;(statearr_13804_13870[(1)] = (16));
} else
{var statearr_13805_13871 = state_13746__$1;(statearr_13805_13871[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (9)))
{var inst_13675 = (state_13746[(2)]);var state_13746__$1 = state_13746;var statearr_13806_13872 = state_13746__$1;(statearr_13806_13872[(2)] = inst_13675);
(statearr_13806_13872[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (5)))
{var inst_13625 = cljs.core.deref.call(null,cs);var inst_13626 = cljs.core.seq.call(null,inst_13625);var inst_13627 = inst_13626;var inst_13628 = null;var inst_13629 = (0);var inst_13630 = (0);var state_13746__$1 = (function (){var statearr_13807 = state_13746;(statearr_13807[(13)] = inst_13628);
(statearr_13807[(14)] = inst_13630);
(statearr_13807[(15)] = inst_13629);
(statearr_13807[(17)] = inst_13627);
return statearr_13807;
})();var statearr_13808_13873 = state_13746__$1;(statearr_13808_13873[(2)] = null);
(statearr_13808_13873[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (14)))
{var state_13746__$1 = state_13746;var statearr_13809_13874 = state_13746__$1;(statearr_13809_13874[(2)] = null);
(statearr_13809_13874[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (45)))
{var inst_13736 = (state_13746[(2)]);var state_13746__$1 = state_13746;var statearr_13810_13875 = state_13746__$1;(statearr_13810_13875[(2)] = inst_13736);
(statearr_13810_13875[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (26)))
{var inst_13678 = (state_13746[(29)]);var inst_13732 = (state_13746[(2)]);var inst_13733 = cljs.core.seq.call(null,inst_13678);var state_13746__$1 = (function (){var statearr_13811 = state_13746;(statearr_13811[(31)] = inst_13732);
return statearr_13811;
})();if(inst_13733)
{var statearr_13812_13876 = state_13746__$1;(statearr_13812_13876[(1)] = (42));
} else
{var statearr_13813_13877 = state_13746__$1;(statearr_13813_13877[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (16)))
{var inst_13647 = (state_13746[(7)]);var inst_13649 = cljs.core.chunked_seq_QMARK_.call(null,inst_13647);var state_13746__$1 = state_13746;if(inst_13649)
{var statearr_13814_13878 = state_13746__$1;(statearr_13814_13878[(1)] = (19));
} else
{var statearr_13815_13879 = state_13746__$1;(statearr_13815_13879[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (38)))
{var inst_13725 = (state_13746[(2)]);var state_13746__$1 = state_13746;var statearr_13816_13880 = state_13746__$1;(statearr_13816_13880[(2)] = inst_13725);
(statearr_13816_13880[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (30)))
{var state_13746__$1 = state_13746;var statearr_13817_13881 = state_13746__$1;(statearr_13817_13881[(2)] = null);
(statearr_13817_13881[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (10)))
{var inst_13628 = (state_13746[(13)]);var inst_13630 = (state_13746[(14)]);var inst_13636 = cljs.core._nth.call(null,inst_13628,inst_13630);var inst_13637 = cljs.core.nth.call(null,inst_13636,(0),null);var inst_13638 = cljs.core.nth.call(null,inst_13636,(1),null);var state_13746__$1 = (function (){var statearr_13818 = state_13746;(statearr_13818[(26)] = inst_13637);
return statearr_13818;
})();if(cljs.core.truth_(inst_13638))
{var statearr_13819_13882 = state_13746__$1;(statearr_13819_13882[(1)] = (13));
} else
{var statearr_13820_13883 = state_13746__$1;(statearr_13820_13883[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (18)))
{var inst_13671 = (state_13746[(2)]);var state_13746__$1 = state_13746;var statearr_13821_13884 = state_13746__$1;(statearr_13821_13884[(2)] = inst_13671);
(statearr_13821_13884[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (42)))
{var state_13746__$1 = state_13746;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13746__$1,(45),dchan);
} else
{if((state_val_13747 === (37)))
{var inst_13714 = (state_13746[(23)]);var inst_13705 = (state_13746[(25)]);var inst_13618 = (state_13746[(11)]);var inst_13714__$1 = cljs.core.first.call(null,inst_13705);var inst_13715 = cljs.core.async.put_BANG_.call(null,inst_13714__$1,inst_13618,done);var state_13746__$1 = (function (){var statearr_13822 = state_13746;(statearr_13822[(23)] = inst_13714__$1);
return statearr_13822;
})();if(cljs.core.truth_(inst_13715))
{var statearr_13823_13885 = state_13746__$1;(statearr_13823_13885[(1)] = (39));
} else
{var statearr_13824_13886 = state_13746__$1;(statearr_13824_13886[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13747 === (8)))
{var inst_13630 = (state_13746[(14)]);var inst_13629 = (state_13746[(15)]);var inst_13632 = (inst_13630 < inst_13629);var inst_13633 = inst_13632;var state_13746__$1 = state_13746;if(cljs.core.truth_(inst_13633))
{var statearr_13825_13887 = state_13746__$1;(statearr_13825_13887[(1)] = (10));
} else
{var statearr_13826_13888 = state_13746__$1;(statearr_13826_13888[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__7332__auto___13834,cs,m,dchan,dctr,done))
;return ((function (switch__7317__auto__,c__7332__auto___13834,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7318__auto__ = null;
var state_machine__7318__auto____0 = (function (){var statearr_13830 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13830[(0)] = state_machine__7318__auto__);
(statearr_13830[(1)] = (1));
return statearr_13830;
});
var state_machine__7318__auto____1 = (function (state_13746){while(true){
var ret_value__7319__auto__ = (function (){try{while(true){
var result__7320__auto__ = switch__7317__auto__.call(null,state_13746);if(cljs.core.keyword_identical_QMARK_.call(null,result__7320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7320__auto__;
}
break;
}
}catch (e13831){if((e13831 instanceof Object))
{var ex__7321__auto__ = e13831;var statearr_13832_13889 = state_13746;(statearr_13832_13889[(5)] = ex__7321__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13746);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13831;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13890 = state_13746;
state_13746 = G__13890;
continue;
}
} else
{return ret_value__7319__auto__;
}
break;
}
});
state_machine__7318__auto__ = function(state_13746){
switch(arguments.length){
case 0:
return state_machine__7318__auto____0.call(this);
case 1:
return state_machine__7318__auto____1.call(this,state_13746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7318__auto____0;
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7318__auto____1;
return state_machine__7318__auto__;
})()
;})(switch__7317__auto__,c__7332__auto___13834,cs,m,dchan,dctr,done))
})();var state__7334__auto__ = (function (){var statearr_13833 = f__7333__auto__.call(null);(statearr_13833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7332__auto___13834);
return statearr_13833;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7334__auto__);
});})(c__7332__auto___13834,cs,m,dchan,dctr,done))
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
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
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
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj13892 = {};return obj13892;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3657__auto__ = m;if(and__3657__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3657__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4305__auto__ = (((m == null))?null:m);return (function (){var or__3669__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4305__auto__)]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
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
{var x__4305__auto__ = (((m == null))?null:m);return (function (){var or__3669__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4305__auto__)]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
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
{var x__4305__auto__ = (((m == null))?null:m);return (function (){var or__3669__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4305__auto__)]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
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
{var x__4305__auto__ = (((m == null))?null:m);return (function (){var or__3669__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4305__auto__)]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
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
{var x__4305__auto__ = (((m == null))?null:m);return (function (){var or__3669__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4305__auto__)]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t14012 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14012 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14013){
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
this.meta14013 = meta14013;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14012.cljs$lang$type = true;
cljs.core.async.t14012.cljs$lang$ctorStr = "cljs.core.async/t14012";
cljs.core.async.t14012.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write.call(null,writer__4246__auto__,"cljs.core.async/t14012");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14012.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14012.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14012.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14012.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14012.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14012.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14012.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14012.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14012.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14014){var self__ = this;
var _14014__$1 = this;return self__.meta14013;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14014,meta14013__$1){var self__ = this;
var _14014__$1 = this;return (new cljs.core.async.t14012(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14013__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14012 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14012(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14013){return (new cljs.core.async.t14012(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14013));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14012(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__7332__auto___14131 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7332__auto___14131,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__7333__auto__ = (function (){var switch__7317__auto__ = ((function (c__7332__auto___14131,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14084){var state_val_14085 = (state_14084[(1)]);if((state_val_14085 === (7)))
{var inst_14028 = (state_14084[(7)]);var inst_14033 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14028);var state_14084__$1 = state_14084;var statearr_14086_14132 = state_14084__$1;(statearr_14086_14132[(2)] = inst_14033);
(statearr_14086_14132[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14085 === (20)))
{var inst_14043 = (state_14084[(8)]);var state_14084__$1 = state_14084;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14084__$1,(23),out,inst_14043);
} else
{if((state_val_14085 === (1)))
{var inst_14018 = (state_14084[(9)]);var inst_14018__$1 = calc_state.call(null);var inst_14019 = cljs.core.seq_QMARK_.call(null,inst_14018__$1);var state_14084__$1 = (function (){var statearr_14087 = state_14084;(statearr_14087[(9)] = inst_14018__$1);
return statearr_14087;
})();if(inst_14019)
{var statearr_14088_14133 = state_14084__$1;(statearr_14088_14133[(1)] = (2));
} else
{var statearr_14089_14134 = state_14084__$1;(statearr_14089_14134[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14085 === (24)))
{var inst_14036 = (state_14084[(10)]);var inst_14028 = inst_14036;var state_14084__$1 = (function (){var statearr_14090 = state_14084;(statearr_14090[(7)] = inst_14028);
return statearr_14090;
})();var statearr_14091_14135 = state_14084__$1;(statearr_14091_14135[(2)] = null);
(statearr_14091_14135[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14085 === (4)))
{var inst_14018 = (state_14084[(9)]);var inst_14024 = (state_14084[(2)]);var inst_14025 = cljs.core.get.call(null,inst_14024,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_14026 = cljs.core.get.call(null,inst_14024,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_14027 = cljs.core.get.call(null,inst_14024,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_14028 = inst_14018;var state_14084__$1 = (function (){var statearr_14092 = state_14084;(statearr_14092[(11)] = inst_14027);
(statearr_14092[(7)] = inst_14028);
(statearr_14092[(12)] = inst_14026);
(statearr_14092[(13)] = inst_14025);
return statearr_14092;
})();var statearr_14093_14136 = state_14084__$1;(statearr_14093_14136[(2)] = null);
(statearr_14093_14136[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14085 === (15)))
{var state_14084__$1 = state_14084;var statearr_14094_14137 = state_14084__$1;(statearr_14094_14137[(2)] = null);
(statearr_14094_14137[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14085 === (21)))
{var inst_14036 = (state_14084[(10)]);var inst_14028 = inst_14036;var state_14084__$1 = (function (){var statearr_14095 = state_14084;(statearr_14095[(7)] = inst_14028);
return statearr_14095;
})();var statearr_14096_14138 = state_14084__$1;(statearr_14096_14138[(2)] = null);
(statearr_14096_14138[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14085 === (13)))
{var inst_14080 = (state_14084[(2)]);var state_14084__$1 = state_14084;var statearr_14097_14139 = state_14084__$1;(statearr_14097_14139[(2)] = inst_14080);
(statearr_14097_14139[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14085 === (22)))
{var inst_14078 = (state_14084[(2)]);var state_14084__$1 = state_14084;var statearr_14098_14140 = state_14084__$1;(statearr_14098_14140[(2)] = inst_14078);
(statearr_14098_14140[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14085 === (6)))
{var inst_14082 = (state_14084[(2)]);var state_14084__$1 = state_14084;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14084__$1,inst_14082);
} else
{if((state_val_14085 === (25)))
{var state_14084__$1 = state_14084;var statearr_14099_14141 = state_14084__$1;(statearr_14099_14141[(2)] = null);
(statearr_14099_14141[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14085 === (17)))
{var inst_14058 = (state_14084[(14)]);var state_14084__$1 = state_14084;var statearr_14100_14142 = state_14084__$1;(statearr_14100_14142[(2)] = inst_14058);
(statearr_14100_14142[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14085 === (3)))
{var inst_14018 = (state_14084[(9)]);var state_14084__$1 = state_14084;var statearr_14101_14143 = state_14084__$1;(statearr_14101_14143[(2)] = inst_14018);
(statearr_14101_14143[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14085 === (12)))
{var inst_14044 = (state_14084[(15)]);var inst_14058 = (state_14084[(14)]);var inst_14039 = (state_14084[(16)]);var inst_14058__$1 = inst_14039.call(null,inst_14044);var state_14084__$1 = (function (){var statearr_14102 = state_14084;(statearr_14102[(14)] = inst_14058__$1);
return statearr_14102;
})();if(cljs.core.truth_(inst_14058__$1))
{var statearr_14103_14144 = state_14084__$1;(statearr_14103_14144[(1)] = (17));
} else
{var statearr_14104_14145 = state_14084__$1;(statearr_14104_14145[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14085 === (2)))
{var inst_14018 = (state_14084[(9)]);var inst_14021 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14018);var state_14084__$1 = state_14084;var statearr_14105_14146 = state_14084__$1;(statearr_14105_14146[(2)] = inst_14021);
(statearr_14105_14146[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14085 === (23)))
{var inst_14069 = (state_14084[(2)]);var state_14084__$1 = state_14084;if(cljs.core.truth_(inst_14069))
{var statearr_14106_14147 = state_14084__$1;(statearr_14106_14147[(1)] = (24));
} else
{var statearr_14107_14148 = state_14084__$1;(statearr_14107_14148[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14085 === (19)))
{var inst_14066 = (state_14084[(2)]);var state_14084__$1 = state_14084;if(cljs.core.truth_(inst_14066))
{var statearr_14108_14149 = state_14084__$1;(statearr_14108_14149[(1)] = (20));
} else
{var statearr_14109_14150 = state_14084__$1;(statearr_14109_14150[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14085 === (11)))
{var inst_14043 = (state_14084[(8)]);var inst_14049 = (inst_14043 == null);var state_14084__$1 = state_14084;if(cljs.core.truth_(inst_14049))
{var statearr_14110_14151 = state_14084__$1;(statearr_14110_14151[(1)] = (14));
} else
{var statearr_14111_14152 = state_14084__$1;(statearr_14111_14152[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14085 === (9)))
{var inst_14036 = (state_14084[(10)]);var inst_14036__$1 = (state_14084[(2)]);var inst_14037 = cljs.core.get.call(null,inst_14036__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_14038 = cljs.core.get.call(null,inst_14036__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_14039 = cljs.core.get.call(null,inst_14036__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_14084__$1 = (function (){var statearr_14112 = state_14084;(statearr_14112[(17)] = inst_14038);
(statearr_14112[(10)] = inst_14036__$1);
(statearr_14112[(16)] = inst_14039);
return statearr_14112;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14084__$1,(10),inst_14037);
} else
{if((state_val_14085 === (5)))
{var inst_14028 = (state_14084[(7)]);var inst_14031 = cljs.core.seq_QMARK_.call(null,inst_14028);var state_14084__$1 = state_14084;if(inst_14031)
{var statearr_14113_14153 = state_14084__$1;(statearr_14113_14153[(1)] = (7));
} else
{var statearr_14114_14154 = state_14084__$1;(statearr_14114_14154[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14085 === (14)))
{var inst_14044 = (state_14084[(15)]);var inst_14051 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14044);var state_14084__$1 = state_14084;var statearr_14115_14155 = state_14084__$1;(statearr_14115_14155[(2)] = inst_14051);
(statearr_14115_14155[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14085 === (26)))
{var inst_14074 = (state_14084[(2)]);var state_14084__$1 = state_14084;var statearr_14116_14156 = state_14084__$1;(statearr_14116_14156[(2)] = inst_14074);
(statearr_14116_14156[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14085 === (16)))
{var inst_14054 = (state_14084[(2)]);var inst_14055 = calc_state.call(null);var inst_14028 = inst_14055;var state_14084__$1 = (function (){var statearr_14117 = state_14084;(statearr_14117[(7)] = inst_14028);
(statearr_14117[(18)] = inst_14054);
return statearr_14117;
})();var statearr_14118_14157 = state_14084__$1;(statearr_14118_14157[(2)] = null);
(statearr_14118_14157[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14085 === (10)))
{var inst_14044 = (state_14084[(15)]);var inst_14043 = (state_14084[(8)]);var inst_14042 = (state_14084[(2)]);var inst_14043__$1 = cljs.core.nth.call(null,inst_14042,(0),null);var inst_14044__$1 = cljs.core.nth.call(null,inst_14042,(1),null);var inst_14045 = (inst_14043__$1 == null);var inst_14046 = cljs.core._EQ_.call(null,inst_14044__$1,change);var inst_14047 = (inst_14045) || (inst_14046);var state_14084__$1 = (function (){var statearr_14119 = state_14084;(statearr_14119[(15)] = inst_14044__$1);
(statearr_14119[(8)] = inst_14043__$1);
return statearr_14119;
})();if(cljs.core.truth_(inst_14047))
{var statearr_14120_14158 = state_14084__$1;(statearr_14120_14158[(1)] = (11));
} else
{var statearr_14121_14159 = state_14084__$1;(statearr_14121_14159[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14085 === (18)))
{var inst_14044 = (state_14084[(15)]);var inst_14038 = (state_14084[(17)]);var inst_14039 = (state_14084[(16)]);var inst_14061 = cljs.core.empty_QMARK_.call(null,inst_14039);var inst_14062 = inst_14038.call(null,inst_14044);var inst_14063 = cljs.core.not.call(null,inst_14062);var inst_14064 = (inst_14061) && (inst_14063);var state_14084__$1 = state_14084;var statearr_14122_14160 = state_14084__$1;(statearr_14122_14160[(2)] = inst_14064);
(statearr_14122_14160[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14085 === (8)))
{var inst_14028 = (state_14084[(7)]);var state_14084__$1 = state_14084;var statearr_14123_14161 = state_14084__$1;(statearr_14123_14161[(2)] = inst_14028);
(statearr_14123_14161[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__7332__auto___14131,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__7317__auto__,c__7332__auto___14131,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7318__auto__ = null;
var state_machine__7318__auto____0 = (function (){var statearr_14127 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14127[(0)] = state_machine__7318__auto__);
(statearr_14127[(1)] = (1));
return statearr_14127;
});
var state_machine__7318__auto____1 = (function (state_14084){while(true){
var ret_value__7319__auto__ = (function (){try{while(true){
var result__7320__auto__ = switch__7317__auto__.call(null,state_14084);if(cljs.core.keyword_identical_QMARK_.call(null,result__7320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7320__auto__;
}
break;
}
}catch (e14128){if((e14128 instanceof Object))
{var ex__7321__auto__ = e14128;var statearr_14129_14162 = state_14084;(statearr_14129_14162[(5)] = ex__7321__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14084);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14128;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14163 = state_14084;
state_14084 = G__14163;
continue;
}
} else
{return ret_value__7319__auto__;
}
break;
}
});
state_machine__7318__auto__ = function(state_14084){
switch(arguments.length){
case 0:
return state_machine__7318__auto____0.call(this);
case 1:
return state_machine__7318__auto____1.call(this,state_14084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7318__auto____0;
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7318__auto____1;
return state_machine__7318__auto__;
})()
;})(switch__7317__auto__,c__7332__auto___14131,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__7334__auto__ = (function (){var statearr_14130 = f__7333__auto__.call(null);(statearr_14130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7332__auto___14131);
return statearr_14130;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7334__auto__);
});})(c__7332__auto___14131,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj14165 = {};return obj14165;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3657__auto__ = p;if(and__3657__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3657__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4305__auto__ = (((p == null))?null:p);return (function (){var or__3669__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4305__auto__)]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
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
{var x__4305__auto__ = (((p == null))?null:p);return (function (){var or__3669__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4305__auto__)]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
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
{var x__4305__auto__ = (((p == null))?null:p);return (function (){var or__3669__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4305__auto__)]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
{var x__4305__auto__ = (((p == null))?null:p);return (function (){var or__3669__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4305__auto__)]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3669__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3669__auto__,mults){
return (function (p1__14166_SHARP_){if(cljs.core.truth_(p1__14166_SHARP_.call(null,topic)))
{return p1__14166_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14166_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3669__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14281 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14281 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14282){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14282 = meta14282;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14281.cljs$lang$type = true;
cljs.core.async.t14281.cljs$lang$ctorStr = "cljs.core.async/t14281";
cljs.core.async.t14281.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write.call(null,writer__4246__auto__,"cljs.core.async/t14281");
});})(mults,ensure_mult))
;
cljs.core.async.t14281.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14281.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14281.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14281.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14281.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14281.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14281.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14281.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14283){var self__ = this;
var _14283__$1 = this;return self__.meta14282;
});})(mults,ensure_mult))
;
cljs.core.async.t14281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14283,meta14282__$1){var self__ = this;
var _14283__$1 = this;return (new cljs.core.async.t14281(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14282__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14281 = ((function (mults,ensure_mult){
return (function __GT_t14281(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14282){return (new cljs.core.async.t14281(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14282));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14281(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__7332__auto___14395 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7332__auto___14395,mults,ensure_mult,p){
return (function (){var f__7333__auto__ = (function (){var switch__7317__auto__ = ((function (c__7332__auto___14395,mults,ensure_mult,p){
return (function (state_14351){var state_val_14352 = (state_14351[(1)]);if((state_val_14352 === (7)))
{var inst_14347 = (state_14351[(2)]);var state_14351__$1 = state_14351;var statearr_14353_14396 = state_14351__$1;(statearr_14353_14396[(2)] = inst_14347);
(statearr_14353_14396[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14352 === (20)))
{var state_14351__$1 = state_14351;var statearr_14354_14397 = state_14351__$1;(statearr_14354_14397[(2)] = null);
(statearr_14354_14397[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14352 === (1)))
{var state_14351__$1 = state_14351;var statearr_14355_14398 = state_14351__$1;(statearr_14355_14398[(2)] = null);
(statearr_14355_14398[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14352 === (4)))
{var inst_14286 = (state_14351[(7)]);var inst_14286__$1 = (state_14351[(2)]);var inst_14287 = (inst_14286__$1 == null);var state_14351__$1 = (function (){var statearr_14356 = state_14351;(statearr_14356[(7)] = inst_14286__$1);
return statearr_14356;
})();if(cljs.core.truth_(inst_14287))
{var statearr_14357_14399 = state_14351__$1;(statearr_14357_14399[(1)] = (5));
} else
{var statearr_14358_14400 = state_14351__$1;(statearr_14358_14400[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14352 === (15)))
{var inst_14328 = (state_14351[(2)]);var state_14351__$1 = state_14351;var statearr_14359_14401 = state_14351__$1;(statearr_14359_14401[(2)] = inst_14328);
(statearr_14359_14401[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14352 === (21)))
{var inst_14334 = (state_14351[(8)]);var inst_14342 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14334);var state_14351__$1 = state_14351;var statearr_14360_14402 = state_14351__$1;(statearr_14360_14402[(2)] = inst_14342);
(statearr_14360_14402[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14352 === (13)))
{var inst_14310 = (state_14351[(9)]);var inst_14312 = cljs.core.chunked_seq_QMARK_.call(null,inst_14310);var state_14351__$1 = state_14351;if(inst_14312)
{var statearr_14361_14403 = state_14351__$1;(statearr_14361_14403[(1)] = (16));
} else
{var statearr_14362_14404 = state_14351__$1;(statearr_14362_14404[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14352 === (22)))
{var inst_14344 = (state_14351[(2)]);var state_14351__$1 = (function (){var statearr_14363 = state_14351;(statearr_14363[(10)] = inst_14344);
return statearr_14363;
})();var statearr_14364_14405 = state_14351__$1;(statearr_14364_14405[(2)] = null);
(statearr_14364_14405[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14352 === (6)))
{var inst_14286 = (state_14351[(7)]);var inst_14334 = (state_14351[(8)]);var inst_14334__$1 = topic_fn.call(null,inst_14286);var inst_14335 = cljs.core.deref.call(null,mults);var inst_14336 = cljs.core.get.call(null,inst_14335,inst_14334__$1);var inst_14337 = cljs.core.async.muxch_STAR_.call(null,inst_14336);var state_14351__$1 = (function (){var statearr_14365 = state_14351;(statearr_14365[(8)] = inst_14334__$1);
return statearr_14365;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14351__$1,(19),inst_14337,inst_14286);
} else
{if((state_val_14352 === (17)))
{var inst_14310 = (state_14351[(9)]);var inst_14319 = cljs.core.first.call(null,inst_14310);var inst_14320 = cljs.core.async.muxch_STAR_.call(null,inst_14319);var inst_14321 = cljs.core.async.close_BANG_.call(null,inst_14320);var inst_14322 = cljs.core.next.call(null,inst_14310);var inst_14296 = inst_14322;var inst_14297 = null;var inst_14298 = (0);var inst_14299 = (0);var state_14351__$1 = (function (){var statearr_14366 = state_14351;(statearr_14366[(11)] = inst_14298);
(statearr_14366[(12)] = inst_14321);
(statearr_14366[(13)] = inst_14296);
(statearr_14366[(14)] = inst_14297);
(statearr_14366[(15)] = inst_14299);
return statearr_14366;
})();var statearr_14367_14406 = state_14351__$1;(statearr_14367_14406[(2)] = null);
(statearr_14367_14406[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14352 === (3)))
{var inst_14349 = (state_14351[(2)]);var state_14351__$1 = state_14351;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14351__$1,inst_14349);
} else
{if((state_val_14352 === (12)))
{var inst_14330 = (state_14351[(2)]);var state_14351__$1 = state_14351;var statearr_14368_14407 = state_14351__$1;(statearr_14368_14407[(2)] = inst_14330);
(statearr_14368_14407[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14352 === (2)))
{var state_14351__$1 = state_14351;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14351__$1,(4),ch);
} else
{if((state_val_14352 === (19)))
{var inst_14339 = (state_14351[(2)]);var state_14351__$1 = state_14351;if(cljs.core.truth_(inst_14339))
{var statearr_14369_14408 = state_14351__$1;(statearr_14369_14408[(1)] = (20));
} else
{var statearr_14370_14409 = state_14351__$1;(statearr_14370_14409[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14352 === (11)))
{var inst_14296 = (state_14351[(13)]);var inst_14310 = (state_14351[(9)]);var inst_14310__$1 = cljs.core.seq.call(null,inst_14296);var state_14351__$1 = (function (){var statearr_14371 = state_14351;(statearr_14371[(9)] = inst_14310__$1);
return statearr_14371;
})();if(inst_14310__$1)
{var statearr_14372_14410 = state_14351__$1;(statearr_14372_14410[(1)] = (13));
} else
{var statearr_14373_14411 = state_14351__$1;(statearr_14373_14411[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14352 === (9)))
{var inst_14332 = (state_14351[(2)]);var state_14351__$1 = state_14351;var statearr_14374_14412 = state_14351__$1;(statearr_14374_14412[(2)] = inst_14332);
(statearr_14374_14412[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14352 === (5)))
{var inst_14293 = cljs.core.deref.call(null,mults);var inst_14294 = cljs.core.vals.call(null,inst_14293);var inst_14295 = cljs.core.seq.call(null,inst_14294);var inst_14296 = inst_14295;var inst_14297 = null;var inst_14298 = (0);var inst_14299 = (0);var state_14351__$1 = (function (){var statearr_14375 = state_14351;(statearr_14375[(11)] = inst_14298);
(statearr_14375[(13)] = inst_14296);
(statearr_14375[(14)] = inst_14297);
(statearr_14375[(15)] = inst_14299);
return statearr_14375;
})();var statearr_14376_14413 = state_14351__$1;(statearr_14376_14413[(2)] = null);
(statearr_14376_14413[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14352 === (14)))
{var state_14351__$1 = state_14351;var statearr_14380_14414 = state_14351__$1;(statearr_14380_14414[(2)] = null);
(statearr_14380_14414[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14352 === (16)))
{var inst_14310 = (state_14351[(9)]);var inst_14314 = cljs.core.chunk_first.call(null,inst_14310);var inst_14315 = cljs.core.chunk_rest.call(null,inst_14310);var inst_14316 = cljs.core.count.call(null,inst_14314);var inst_14296 = inst_14315;var inst_14297 = inst_14314;var inst_14298 = inst_14316;var inst_14299 = (0);var state_14351__$1 = (function (){var statearr_14381 = state_14351;(statearr_14381[(11)] = inst_14298);
(statearr_14381[(13)] = inst_14296);
(statearr_14381[(14)] = inst_14297);
(statearr_14381[(15)] = inst_14299);
return statearr_14381;
})();var statearr_14382_14415 = state_14351__$1;(statearr_14382_14415[(2)] = null);
(statearr_14382_14415[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14352 === (10)))
{var inst_14298 = (state_14351[(11)]);var inst_14296 = (state_14351[(13)]);var inst_14297 = (state_14351[(14)]);var inst_14299 = (state_14351[(15)]);var inst_14304 = cljs.core._nth.call(null,inst_14297,inst_14299);var inst_14305 = cljs.core.async.muxch_STAR_.call(null,inst_14304);var inst_14306 = cljs.core.async.close_BANG_.call(null,inst_14305);var inst_14307 = (inst_14299 + (1));var tmp14377 = inst_14298;var tmp14378 = inst_14296;var tmp14379 = inst_14297;var inst_14296__$1 = tmp14378;var inst_14297__$1 = tmp14379;var inst_14298__$1 = tmp14377;var inst_14299__$1 = inst_14307;var state_14351__$1 = (function (){var statearr_14383 = state_14351;(statearr_14383[(11)] = inst_14298__$1);
(statearr_14383[(13)] = inst_14296__$1);
(statearr_14383[(14)] = inst_14297__$1);
(statearr_14383[(15)] = inst_14299__$1);
(statearr_14383[(16)] = inst_14306);
return statearr_14383;
})();var statearr_14384_14416 = state_14351__$1;(statearr_14384_14416[(2)] = null);
(statearr_14384_14416[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14352 === (18)))
{var inst_14325 = (state_14351[(2)]);var state_14351__$1 = state_14351;var statearr_14385_14417 = state_14351__$1;(statearr_14385_14417[(2)] = inst_14325);
(statearr_14385_14417[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14352 === (8)))
{var inst_14298 = (state_14351[(11)]);var inst_14299 = (state_14351[(15)]);var inst_14301 = (inst_14299 < inst_14298);var inst_14302 = inst_14301;var state_14351__$1 = state_14351;if(cljs.core.truth_(inst_14302))
{var statearr_14386_14418 = state_14351__$1;(statearr_14386_14418[(1)] = (10));
} else
{var statearr_14387_14419 = state_14351__$1;(statearr_14387_14419[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__7332__auto___14395,mults,ensure_mult,p))
;return ((function (switch__7317__auto__,c__7332__auto___14395,mults,ensure_mult,p){
return (function() {
var state_machine__7318__auto__ = null;
var state_machine__7318__auto____0 = (function (){var statearr_14391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14391[(0)] = state_machine__7318__auto__);
(statearr_14391[(1)] = (1));
return statearr_14391;
});
var state_machine__7318__auto____1 = (function (state_14351){while(true){
var ret_value__7319__auto__ = (function (){try{while(true){
var result__7320__auto__ = switch__7317__auto__.call(null,state_14351);if(cljs.core.keyword_identical_QMARK_.call(null,result__7320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7320__auto__;
}
break;
}
}catch (e14392){if((e14392 instanceof Object))
{var ex__7321__auto__ = e14392;var statearr_14393_14420 = state_14351;(statearr_14393_14420[(5)] = ex__7321__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14351);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14392;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14421 = state_14351;
state_14351 = G__14421;
continue;
}
} else
{return ret_value__7319__auto__;
}
break;
}
});
state_machine__7318__auto__ = function(state_14351){
switch(arguments.length){
case 0:
return state_machine__7318__auto____0.call(this);
case 1:
return state_machine__7318__auto____1.call(this,state_14351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7318__auto____0;
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7318__auto____1;
return state_machine__7318__auto__;
})()
;})(switch__7317__auto__,c__7332__auto___14395,mults,ensure_mult,p))
})();var state__7334__auto__ = (function (){var statearr_14394 = f__7333__auto__.call(null);(statearr_14394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7332__auto___14395);
return statearr_14394;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7334__auto__);
});})(c__7332__auto___14395,mults,ensure_mult,p))
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
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
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
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__7332__auto___14558 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7332__auto___14558,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__7333__auto__ = (function (){var switch__7317__auto__ = ((function (c__7332__auto___14558,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14528){var state_val_14529 = (state_14528[(1)]);if((state_val_14529 === (7)))
{var state_14528__$1 = state_14528;var statearr_14530_14559 = state_14528__$1;(statearr_14530_14559[(2)] = null);
(statearr_14530_14559[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14529 === (1)))
{var state_14528__$1 = state_14528;var statearr_14531_14560 = state_14528__$1;(statearr_14531_14560[(2)] = null);
(statearr_14531_14560[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14529 === (4)))
{var inst_14492 = (state_14528[(7)]);var inst_14494 = (inst_14492 < cnt);var state_14528__$1 = state_14528;if(cljs.core.truth_(inst_14494))
{var statearr_14532_14561 = state_14528__$1;(statearr_14532_14561[(1)] = (6));
} else
{var statearr_14533_14562 = state_14528__$1;(statearr_14533_14562[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14529 === (15)))
{var inst_14524 = (state_14528[(2)]);var state_14528__$1 = state_14528;var statearr_14534_14563 = state_14528__$1;(statearr_14534_14563[(2)] = inst_14524);
(statearr_14534_14563[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14529 === (13)))
{var inst_14517 = cljs.core.async.close_BANG_.call(null,out);var state_14528__$1 = state_14528;var statearr_14535_14564 = state_14528__$1;(statearr_14535_14564[(2)] = inst_14517);
(statearr_14535_14564[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14529 === (6)))
{var state_14528__$1 = state_14528;var statearr_14536_14565 = state_14528__$1;(statearr_14536_14565[(2)] = null);
(statearr_14536_14565[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14529 === (3)))
{var inst_14526 = (state_14528[(2)]);var state_14528__$1 = state_14528;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14528__$1,inst_14526);
} else
{if((state_val_14529 === (12)))
{var inst_14514 = (state_14528[(8)]);var inst_14514__$1 = (state_14528[(2)]);var inst_14515 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14514__$1);var state_14528__$1 = (function (){var statearr_14537 = state_14528;(statearr_14537[(8)] = inst_14514__$1);
return statearr_14537;
})();if(cljs.core.truth_(inst_14515))
{var statearr_14538_14566 = state_14528__$1;(statearr_14538_14566[(1)] = (13));
} else
{var statearr_14539_14567 = state_14528__$1;(statearr_14539_14567[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14529 === (2)))
{var inst_14491 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14492 = (0);var state_14528__$1 = (function (){var statearr_14540 = state_14528;(statearr_14540[(9)] = inst_14491);
(statearr_14540[(7)] = inst_14492);
return statearr_14540;
})();var statearr_14541_14568 = state_14528__$1;(statearr_14541_14568[(2)] = null);
(statearr_14541_14568[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14529 === (11)))
{var inst_14492 = (state_14528[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14528,(10),Object,null,(9));var inst_14501 = chs__$1.call(null,inst_14492);var inst_14502 = done.call(null,inst_14492);var inst_14503 = cljs.core.async.take_BANG_.call(null,inst_14501,inst_14502);var state_14528__$1 = state_14528;var statearr_14542_14569 = state_14528__$1;(statearr_14542_14569[(2)] = inst_14503);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14528__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14529 === (9)))
{var inst_14492 = (state_14528[(7)]);var inst_14505 = (state_14528[(2)]);var inst_14506 = (inst_14492 + (1));var inst_14492__$1 = inst_14506;var state_14528__$1 = (function (){var statearr_14543 = state_14528;(statearr_14543[(10)] = inst_14505);
(statearr_14543[(7)] = inst_14492__$1);
return statearr_14543;
})();var statearr_14544_14570 = state_14528__$1;(statearr_14544_14570[(2)] = null);
(statearr_14544_14570[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14529 === (5)))
{var inst_14512 = (state_14528[(2)]);var state_14528__$1 = (function (){var statearr_14545 = state_14528;(statearr_14545[(11)] = inst_14512);
return statearr_14545;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14528__$1,(12),dchan);
} else
{if((state_val_14529 === (14)))
{var inst_14514 = (state_14528[(8)]);var inst_14519 = cljs.core.apply.call(null,f,inst_14514);var state_14528__$1 = state_14528;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14528__$1,(16),out,inst_14519);
} else
{if((state_val_14529 === (16)))
{var inst_14521 = (state_14528[(2)]);var state_14528__$1 = (function (){var statearr_14546 = state_14528;(statearr_14546[(12)] = inst_14521);
return statearr_14546;
})();var statearr_14547_14571 = state_14528__$1;(statearr_14547_14571[(2)] = null);
(statearr_14547_14571[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14529 === (10)))
{var inst_14496 = (state_14528[(2)]);var inst_14497 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14528__$1 = (function (){var statearr_14548 = state_14528;(statearr_14548[(13)] = inst_14496);
return statearr_14548;
})();var statearr_14549_14572 = state_14528__$1;(statearr_14549_14572[(2)] = inst_14497);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14528__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14529 === (8)))
{var inst_14510 = (state_14528[(2)]);var state_14528__$1 = state_14528;var statearr_14550_14573 = state_14528__$1;(statearr_14550_14573[(2)] = inst_14510);
(statearr_14550_14573[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__7332__auto___14558,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__7317__auto__,c__7332__auto___14558,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7318__auto__ = null;
var state_machine__7318__auto____0 = (function (){var statearr_14554 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14554[(0)] = state_machine__7318__auto__);
(statearr_14554[(1)] = (1));
return statearr_14554;
});
var state_machine__7318__auto____1 = (function (state_14528){while(true){
var ret_value__7319__auto__ = (function (){try{while(true){
var result__7320__auto__ = switch__7317__auto__.call(null,state_14528);if(cljs.core.keyword_identical_QMARK_.call(null,result__7320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7320__auto__;
}
break;
}
}catch (e14555){if((e14555 instanceof Object))
{var ex__7321__auto__ = e14555;var statearr_14556_14574 = state_14528;(statearr_14556_14574[(5)] = ex__7321__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14528);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14555;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14575 = state_14528;
state_14528 = G__14575;
continue;
}
} else
{return ret_value__7319__auto__;
}
break;
}
});
state_machine__7318__auto__ = function(state_14528){
switch(arguments.length){
case 0:
return state_machine__7318__auto____0.call(this);
case 1:
return state_machine__7318__auto____1.call(this,state_14528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7318__auto____0;
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7318__auto____1;
return state_machine__7318__auto__;
})()
;})(switch__7317__auto__,c__7332__auto___14558,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__7334__auto__ = (function (){var statearr_14557 = f__7333__auto__.call(null);(statearr_14557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7332__auto___14558);
return statearr_14557;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7334__auto__);
});})(c__7332__auto___14558,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7332__auto___14683 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7332__auto___14683,out){
return (function (){var f__7333__auto__ = (function (){var switch__7317__auto__ = ((function (c__7332__auto___14683,out){
return (function (state_14659){var state_val_14660 = (state_14659[(1)]);if((state_val_14660 === (7)))
{var inst_14638 = (state_14659[(7)]);var inst_14639 = (state_14659[(8)]);var inst_14638__$1 = (state_14659[(2)]);var inst_14639__$1 = cljs.core.nth.call(null,inst_14638__$1,(0),null);var inst_14640 = cljs.core.nth.call(null,inst_14638__$1,(1),null);var inst_14641 = (inst_14639__$1 == null);var state_14659__$1 = (function (){var statearr_14661 = state_14659;(statearr_14661[(7)] = inst_14638__$1);
(statearr_14661[(9)] = inst_14640);
(statearr_14661[(8)] = inst_14639__$1);
return statearr_14661;
})();if(cljs.core.truth_(inst_14641))
{var statearr_14662_14684 = state_14659__$1;(statearr_14662_14684[(1)] = (8));
} else
{var statearr_14663_14685 = state_14659__$1;(statearr_14663_14685[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14660 === (1)))
{var inst_14630 = cljs.core.vec.call(null,chs);var inst_14631 = inst_14630;var state_14659__$1 = (function (){var statearr_14664 = state_14659;(statearr_14664[(10)] = inst_14631);
return statearr_14664;
})();var statearr_14665_14686 = state_14659__$1;(statearr_14665_14686[(2)] = null);
(statearr_14665_14686[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14660 === (4)))
{var inst_14631 = (state_14659[(10)]);var state_14659__$1 = state_14659;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14659__$1,(7),inst_14631);
} else
{if((state_val_14660 === (6)))
{var inst_14655 = (state_14659[(2)]);var state_14659__$1 = state_14659;var statearr_14666_14687 = state_14659__$1;(statearr_14666_14687[(2)] = inst_14655);
(statearr_14666_14687[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14660 === (3)))
{var inst_14657 = (state_14659[(2)]);var state_14659__$1 = state_14659;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14659__$1,inst_14657);
} else
{if((state_val_14660 === (2)))
{var inst_14631 = (state_14659[(10)]);var inst_14633 = cljs.core.count.call(null,inst_14631);var inst_14634 = (inst_14633 > (0));var state_14659__$1 = state_14659;if(cljs.core.truth_(inst_14634))
{var statearr_14668_14688 = state_14659__$1;(statearr_14668_14688[(1)] = (4));
} else
{var statearr_14669_14689 = state_14659__$1;(statearr_14669_14689[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14660 === (11)))
{var inst_14631 = (state_14659[(10)]);var inst_14648 = (state_14659[(2)]);var tmp14667 = inst_14631;var inst_14631__$1 = tmp14667;var state_14659__$1 = (function (){var statearr_14670 = state_14659;(statearr_14670[(10)] = inst_14631__$1);
(statearr_14670[(11)] = inst_14648);
return statearr_14670;
})();var statearr_14671_14690 = state_14659__$1;(statearr_14671_14690[(2)] = null);
(statearr_14671_14690[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14660 === (9)))
{var inst_14639 = (state_14659[(8)]);var state_14659__$1 = state_14659;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14659__$1,(11),out,inst_14639);
} else
{if((state_val_14660 === (5)))
{var inst_14653 = cljs.core.async.close_BANG_.call(null,out);var state_14659__$1 = state_14659;var statearr_14672_14691 = state_14659__$1;(statearr_14672_14691[(2)] = inst_14653);
(statearr_14672_14691[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14660 === (10)))
{var inst_14651 = (state_14659[(2)]);var state_14659__$1 = state_14659;var statearr_14673_14692 = state_14659__$1;(statearr_14673_14692[(2)] = inst_14651);
(statearr_14673_14692[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14660 === (8)))
{var inst_14638 = (state_14659[(7)]);var inst_14631 = (state_14659[(10)]);var inst_14640 = (state_14659[(9)]);var inst_14639 = (state_14659[(8)]);var inst_14643 = (function (){var c = inst_14640;var v = inst_14639;var vec__14636 = inst_14638;var cs = inst_14631;return ((function (c,v,vec__14636,cs,inst_14638,inst_14631,inst_14640,inst_14639,state_val_14660,c__7332__auto___14683,out){
return (function (p1__14576_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14576_SHARP_);
});
;})(c,v,vec__14636,cs,inst_14638,inst_14631,inst_14640,inst_14639,state_val_14660,c__7332__auto___14683,out))
})();var inst_14644 = cljs.core.filterv.call(null,inst_14643,inst_14631);var inst_14631__$1 = inst_14644;var state_14659__$1 = (function (){var statearr_14674 = state_14659;(statearr_14674[(10)] = inst_14631__$1);
return statearr_14674;
})();var statearr_14675_14693 = state_14659__$1;(statearr_14675_14693[(2)] = null);
(statearr_14675_14693[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__7332__auto___14683,out))
;return ((function (switch__7317__auto__,c__7332__auto___14683,out){
return (function() {
var state_machine__7318__auto__ = null;
var state_machine__7318__auto____0 = (function (){var statearr_14679 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14679[(0)] = state_machine__7318__auto__);
(statearr_14679[(1)] = (1));
return statearr_14679;
});
var state_machine__7318__auto____1 = (function (state_14659){while(true){
var ret_value__7319__auto__ = (function (){try{while(true){
var result__7320__auto__ = switch__7317__auto__.call(null,state_14659);if(cljs.core.keyword_identical_QMARK_.call(null,result__7320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7320__auto__;
}
break;
}
}catch (e14680){if((e14680 instanceof Object))
{var ex__7321__auto__ = e14680;var statearr_14681_14694 = state_14659;(statearr_14681_14694[(5)] = ex__7321__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14659);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14680;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14695 = state_14659;
state_14659 = G__14695;
continue;
}
} else
{return ret_value__7319__auto__;
}
break;
}
});
state_machine__7318__auto__ = function(state_14659){
switch(arguments.length){
case 0:
return state_machine__7318__auto____0.call(this);
case 1:
return state_machine__7318__auto____1.call(this,state_14659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7318__auto____0;
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7318__auto____1;
return state_machine__7318__auto__;
})()
;})(switch__7317__auto__,c__7332__auto___14683,out))
})();var state__7334__auto__ = (function (){var statearr_14682 = f__7333__auto__.call(null);(statearr_14682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7332__auto___14683);
return statearr_14682;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7334__auto__);
});})(c__7332__auto___14683,out))
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
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7332__auto___14788 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7332__auto___14788,out){
return (function (){var f__7333__auto__ = (function (){var switch__7317__auto__ = ((function (c__7332__auto___14788,out){
return (function (state_14765){var state_val_14766 = (state_14765[(1)]);if((state_val_14766 === (7)))
{var inst_14747 = (state_14765[(7)]);var inst_14747__$1 = (state_14765[(2)]);var inst_14748 = (inst_14747__$1 == null);var inst_14749 = cljs.core.not.call(null,inst_14748);var state_14765__$1 = (function (){var statearr_14767 = state_14765;(statearr_14767[(7)] = inst_14747__$1);
return statearr_14767;
})();if(inst_14749)
{var statearr_14768_14789 = state_14765__$1;(statearr_14768_14789[(1)] = (8));
} else
{var statearr_14769_14790 = state_14765__$1;(statearr_14769_14790[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14766 === (1)))
{var inst_14742 = (0);var state_14765__$1 = (function (){var statearr_14770 = state_14765;(statearr_14770[(8)] = inst_14742);
return statearr_14770;
})();var statearr_14771_14791 = state_14765__$1;(statearr_14771_14791[(2)] = null);
(statearr_14771_14791[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14766 === (4)))
{var state_14765__$1 = state_14765;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14765__$1,(7),ch);
} else
{if((state_val_14766 === (6)))
{var inst_14760 = (state_14765[(2)]);var state_14765__$1 = state_14765;var statearr_14772_14792 = state_14765__$1;(statearr_14772_14792[(2)] = inst_14760);
(statearr_14772_14792[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14766 === (3)))
{var inst_14762 = (state_14765[(2)]);var inst_14763 = cljs.core.async.close_BANG_.call(null,out);var state_14765__$1 = (function (){var statearr_14773 = state_14765;(statearr_14773[(9)] = inst_14762);
return statearr_14773;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14765__$1,inst_14763);
} else
{if((state_val_14766 === (2)))
{var inst_14742 = (state_14765[(8)]);var inst_14744 = (inst_14742 < n);var state_14765__$1 = state_14765;if(cljs.core.truth_(inst_14744))
{var statearr_14774_14793 = state_14765__$1;(statearr_14774_14793[(1)] = (4));
} else
{var statearr_14775_14794 = state_14765__$1;(statearr_14775_14794[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14766 === (11)))
{var inst_14742 = (state_14765[(8)]);var inst_14752 = (state_14765[(2)]);var inst_14753 = (inst_14742 + (1));var inst_14742__$1 = inst_14753;var state_14765__$1 = (function (){var statearr_14776 = state_14765;(statearr_14776[(8)] = inst_14742__$1);
(statearr_14776[(10)] = inst_14752);
return statearr_14776;
})();var statearr_14777_14795 = state_14765__$1;(statearr_14777_14795[(2)] = null);
(statearr_14777_14795[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14766 === (9)))
{var state_14765__$1 = state_14765;var statearr_14778_14796 = state_14765__$1;(statearr_14778_14796[(2)] = null);
(statearr_14778_14796[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14766 === (5)))
{var state_14765__$1 = state_14765;var statearr_14779_14797 = state_14765__$1;(statearr_14779_14797[(2)] = null);
(statearr_14779_14797[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14766 === (10)))
{var inst_14757 = (state_14765[(2)]);var state_14765__$1 = state_14765;var statearr_14780_14798 = state_14765__$1;(statearr_14780_14798[(2)] = inst_14757);
(statearr_14780_14798[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14766 === (8)))
{var inst_14747 = (state_14765[(7)]);var state_14765__$1 = state_14765;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14765__$1,(11),out,inst_14747);
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
});})(c__7332__auto___14788,out))
;return ((function (switch__7317__auto__,c__7332__auto___14788,out){
return (function() {
var state_machine__7318__auto__ = null;
var state_machine__7318__auto____0 = (function (){var statearr_14784 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14784[(0)] = state_machine__7318__auto__);
(statearr_14784[(1)] = (1));
return statearr_14784;
});
var state_machine__7318__auto____1 = (function (state_14765){while(true){
var ret_value__7319__auto__ = (function (){try{while(true){
var result__7320__auto__ = switch__7317__auto__.call(null,state_14765);if(cljs.core.keyword_identical_QMARK_.call(null,result__7320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7320__auto__;
}
break;
}
}catch (e14785){if((e14785 instanceof Object))
{var ex__7321__auto__ = e14785;var statearr_14786_14799 = state_14765;(statearr_14786_14799[(5)] = ex__7321__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14765);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14785;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14800 = state_14765;
state_14765 = G__14800;
continue;
}
} else
{return ret_value__7319__auto__;
}
break;
}
});
state_machine__7318__auto__ = function(state_14765){
switch(arguments.length){
case 0:
return state_machine__7318__auto____0.call(this);
case 1:
return state_machine__7318__auto____1.call(this,state_14765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7318__auto____0;
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7318__auto____1;
return state_machine__7318__auto__;
})()
;})(switch__7317__auto__,c__7332__auto___14788,out))
})();var state__7334__auto__ = (function (){var statearr_14787 = f__7333__auto__.call(null);(statearr_14787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7332__auto___14788);
return statearr_14787;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7334__auto__);
});})(c__7332__auto___14788,out))
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
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7332__auto___14897 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7332__auto___14897,out){
return (function (){var f__7333__auto__ = (function (){var switch__7317__auto__ = ((function (c__7332__auto___14897,out){
return (function (state_14872){var state_val_14873 = (state_14872[(1)]);if((state_val_14873 === (7)))
{var inst_14867 = (state_14872[(2)]);var state_14872__$1 = state_14872;var statearr_14874_14898 = state_14872__$1;(statearr_14874_14898[(2)] = inst_14867);
(statearr_14874_14898[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14873 === (1)))
{var inst_14849 = null;var state_14872__$1 = (function (){var statearr_14875 = state_14872;(statearr_14875[(7)] = inst_14849);
return statearr_14875;
})();var statearr_14876_14899 = state_14872__$1;(statearr_14876_14899[(2)] = null);
(statearr_14876_14899[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14873 === (4)))
{var inst_14852 = (state_14872[(8)]);var inst_14852__$1 = (state_14872[(2)]);var inst_14853 = (inst_14852__$1 == null);var inst_14854 = cljs.core.not.call(null,inst_14853);var state_14872__$1 = (function (){var statearr_14877 = state_14872;(statearr_14877[(8)] = inst_14852__$1);
return statearr_14877;
})();if(inst_14854)
{var statearr_14878_14900 = state_14872__$1;(statearr_14878_14900[(1)] = (5));
} else
{var statearr_14879_14901 = state_14872__$1;(statearr_14879_14901[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14873 === (6)))
{var state_14872__$1 = state_14872;var statearr_14880_14902 = state_14872__$1;(statearr_14880_14902[(2)] = null);
(statearr_14880_14902[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14873 === (3)))
{var inst_14869 = (state_14872[(2)]);var inst_14870 = cljs.core.async.close_BANG_.call(null,out);var state_14872__$1 = (function (){var statearr_14881 = state_14872;(statearr_14881[(9)] = inst_14869);
return statearr_14881;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14872__$1,inst_14870);
} else
{if((state_val_14873 === (2)))
{var state_14872__$1 = state_14872;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14872__$1,(4),ch);
} else
{if((state_val_14873 === (11)))
{var inst_14852 = (state_14872[(8)]);var inst_14861 = (state_14872[(2)]);var inst_14849 = inst_14852;var state_14872__$1 = (function (){var statearr_14882 = state_14872;(statearr_14882[(10)] = inst_14861);
(statearr_14882[(7)] = inst_14849);
return statearr_14882;
})();var statearr_14883_14903 = state_14872__$1;(statearr_14883_14903[(2)] = null);
(statearr_14883_14903[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14873 === (9)))
{var inst_14852 = (state_14872[(8)]);var state_14872__$1 = state_14872;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14872__$1,(11),out,inst_14852);
} else
{if((state_val_14873 === (5)))
{var inst_14852 = (state_14872[(8)]);var inst_14849 = (state_14872[(7)]);var inst_14856 = cljs.core._EQ_.call(null,inst_14852,inst_14849);var state_14872__$1 = state_14872;if(inst_14856)
{var statearr_14885_14904 = state_14872__$1;(statearr_14885_14904[(1)] = (8));
} else
{var statearr_14886_14905 = state_14872__$1;(statearr_14886_14905[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14873 === (10)))
{var inst_14864 = (state_14872[(2)]);var state_14872__$1 = state_14872;var statearr_14887_14906 = state_14872__$1;(statearr_14887_14906[(2)] = inst_14864);
(statearr_14887_14906[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14873 === (8)))
{var inst_14849 = (state_14872[(7)]);var tmp14884 = inst_14849;var inst_14849__$1 = tmp14884;var state_14872__$1 = (function (){var statearr_14888 = state_14872;(statearr_14888[(7)] = inst_14849__$1);
return statearr_14888;
})();var statearr_14889_14907 = state_14872__$1;(statearr_14889_14907[(2)] = null);
(statearr_14889_14907[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__7332__auto___14897,out))
;return ((function (switch__7317__auto__,c__7332__auto___14897,out){
return (function() {
var state_machine__7318__auto__ = null;
var state_machine__7318__auto____0 = (function (){var statearr_14893 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14893[(0)] = state_machine__7318__auto__);
(statearr_14893[(1)] = (1));
return statearr_14893;
});
var state_machine__7318__auto____1 = (function (state_14872){while(true){
var ret_value__7319__auto__ = (function (){try{while(true){
var result__7320__auto__ = switch__7317__auto__.call(null,state_14872);if(cljs.core.keyword_identical_QMARK_.call(null,result__7320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7320__auto__;
}
break;
}
}catch (e14894){if((e14894 instanceof Object))
{var ex__7321__auto__ = e14894;var statearr_14895_14908 = state_14872;(statearr_14895_14908[(5)] = ex__7321__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14872);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14894;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14909 = state_14872;
state_14872 = G__14909;
continue;
}
} else
{return ret_value__7319__auto__;
}
break;
}
});
state_machine__7318__auto__ = function(state_14872){
switch(arguments.length){
case 0:
return state_machine__7318__auto____0.call(this);
case 1:
return state_machine__7318__auto____1.call(this,state_14872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7318__auto____0;
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7318__auto____1;
return state_machine__7318__auto__;
})()
;})(switch__7317__auto__,c__7332__auto___14897,out))
})();var state__7334__auto__ = (function (){var statearr_14896 = f__7333__auto__.call(null);(statearr_14896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7332__auto___14897);
return statearr_14896;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7334__auto__);
});})(c__7332__auto___14897,out))
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
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7332__auto___15044 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7332__auto___15044,out){
return (function (){var f__7333__auto__ = (function (){var switch__7317__auto__ = ((function (c__7332__auto___15044,out){
return (function (state_15014){var state_val_15015 = (state_15014[(1)]);if((state_val_15015 === (7)))
{var inst_15010 = (state_15014[(2)]);var state_15014__$1 = state_15014;var statearr_15016_15045 = state_15014__$1;(statearr_15016_15045[(2)] = inst_15010);
(statearr_15016_15045[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15015 === (1)))
{var inst_14977 = (new Array(n));var inst_14978 = inst_14977;var inst_14979 = (0);var state_15014__$1 = (function (){var statearr_15017 = state_15014;(statearr_15017[(7)] = inst_14979);
(statearr_15017[(8)] = inst_14978);
return statearr_15017;
})();var statearr_15018_15046 = state_15014__$1;(statearr_15018_15046[(2)] = null);
(statearr_15018_15046[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15015 === (4)))
{var inst_14982 = (state_15014[(9)]);var inst_14982__$1 = (state_15014[(2)]);var inst_14983 = (inst_14982__$1 == null);var inst_14984 = cljs.core.not.call(null,inst_14983);var state_15014__$1 = (function (){var statearr_15019 = state_15014;(statearr_15019[(9)] = inst_14982__$1);
return statearr_15019;
})();if(inst_14984)
{var statearr_15020_15047 = state_15014__$1;(statearr_15020_15047[(1)] = (5));
} else
{var statearr_15021_15048 = state_15014__$1;(statearr_15021_15048[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15015 === (15)))
{var inst_15004 = (state_15014[(2)]);var state_15014__$1 = state_15014;var statearr_15022_15049 = state_15014__$1;(statearr_15022_15049[(2)] = inst_15004);
(statearr_15022_15049[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15015 === (13)))
{var state_15014__$1 = state_15014;var statearr_15023_15050 = state_15014__$1;(statearr_15023_15050[(2)] = null);
(statearr_15023_15050[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15015 === (6)))
{var inst_14979 = (state_15014[(7)]);var inst_15000 = (inst_14979 > (0));var state_15014__$1 = state_15014;if(cljs.core.truth_(inst_15000))
{var statearr_15024_15051 = state_15014__$1;(statearr_15024_15051[(1)] = (12));
} else
{var statearr_15025_15052 = state_15014__$1;(statearr_15025_15052[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15015 === (3)))
{var inst_15012 = (state_15014[(2)]);var state_15014__$1 = state_15014;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15014__$1,inst_15012);
} else
{if((state_val_15015 === (12)))
{var inst_14978 = (state_15014[(8)]);var inst_15002 = cljs.core.vec.call(null,inst_14978);var state_15014__$1 = state_15014;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15014__$1,(15),out,inst_15002);
} else
{if((state_val_15015 === (2)))
{var state_15014__$1 = state_15014;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15014__$1,(4),ch);
} else
{if((state_val_15015 === (11)))
{var inst_14994 = (state_15014[(2)]);var inst_14995 = (new Array(n));var inst_14978 = inst_14995;var inst_14979 = (0);var state_15014__$1 = (function (){var statearr_15026 = state_15014;(statearr_15026[(10)] = inst_14994);
(statearr_15026[(7)] = inst_14979);
(statearr_15026[(8)] = inst_14978);
return statearr_15026;
})();var statearr_15027_15053 = state_15014__$1;(statearr_15027_15053[(2)] = null);
(statearr_15027_15053[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15015 === (9)))
{var inst_14978 = (state_15014[(8)]);var inst_14992 = cljs.core.vec.call(null,inst_14978);var state_15014__$1 = state_15014;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15014__$1,(11),out,inst_14992);
} else
{if((state_val_15015 === (5)))
{var inst_14987 = (state_15014[(11)]);var inst_14982 = (state_15014[(9)]);var inst_14979 = (state_15014[(7)]);var inst_14978 = (state_15014[(8)]);var inst_14986 = (inst_14978[inst_14979] = inst_14982);var inst_14987__$1 = (inst_14979 + (1));var inst_14988 = (inst_14987__$1 < n);var state_15014__$1 = (function (){var statearr_15028 = state_15014;(statearr_15028[(11)] = inst_14987__$1);
(statearr_15028[(12)] = inst_14986);
return statearr_15028;
})();if(cljs.core.truth_(inst_14988))
{var statearr_15029_15054 = state_15014__$1;(statearr_15029_15054[(1)] = (8));
} else
{var statearr_15030_15055 = state_15014__$1;(statearr_15030_15055[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15015 === (14)))
{var inst_15007 = (state_15014[(2)]);var inst_15008 = cljs.core.async.close_BANG_.call(null,out);var state_15014__$1 = (function (){var statearr_15032 = state_15014;(statearr_15032[(13)] = inst_15007);
return statearr_15032;
})();var statearr_15033_15056 = state_15014__$1;(statearr_15033_15056[(2)] = inst_15008);
(statearr_15033_15056[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15015 === (10)))
{var inst_14998 = (state_15014[(2)]);var state_15014__$1 = state_15014;var statearr_15034_15057 = state_15014__$1;(statearr_15034_15057[(2)] = inst_14998);
(statearr_15034_15057[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15015 === (8)))
{var inst_14987 = (state_15014[(11)]);var inst_14978 = (state_15014[(8)]);var tmp15031 = inst_14978;var inst_14978__$1 = tmp15031;var inst_14979 = inst_14987;var state_15014__$1 = (function (){var statearr_15035 = state_15014;(statearr_15035[(7)] = inst_14979);
(statearr_15035[(8)] = inst_14978__$1);
return statearr_15035;
})();var statearr_15036_15058 = state_15014__$1;(statearr_15036_15058[(2)] = null);
(statearr_15036_15058[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__7332__auto___15044,out))
;return ((function (switch__7317__auto__,c__7332__auto___15044,out){
return (function() {
var state_machine__7318__auto__ = null;
var state_machine__7318__auto____0 = (function (){var statearr_15040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15040[(0)] = state_machine__7318__auto__);
(statearr_15040[(1)] = (1));
return statearr_15040;
});
var state_machine__7318__auto____1 = (function (state_15014){while(true){
var ret_value__7319__auto__ = (function (){try{while(true){
var result__7320__auto__ = switch__7317__auto__.call(null,state_15014);if(cljs.core.keyword_identical_QMARK_.call(null,result__7320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7320__auto__;
}
break;
}
}catch (e15041){if((e15041 instanceof Object))
{var ex__7321__auto__ = e15041;var statearr_15042_15059 = state_15014;(statearr_15042_15059[(5)] = ex__7321__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15014);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15041;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15060 = state_15014;
state_15014 = G__15060;
continue;
}
} else
{return ret_value__7319__auto__;
}
break;
}
});
state_machine__7318__auto__ = function(state_15014){
switch(arguments.length){
case 0:
return state_machine__7318__auto____0.call(this);
case 1:
return state_machine__7318__auto____1.call(this,state_15014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7318__auto____0;
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7318__auto____1;
return state_machine__7318__auto__;
})()
;})(switch__7317__auto__,c__7332__auto___15044,out))
})();var state__7334__auto__ = (function (){var statearr_15043 = f__7333__auto__.call(null);(statearr_15043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7332__auto___15044);
return statearr_15043;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7334__auto__);
});})(c__7332__auto___15044,out))
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
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7332__auto___15203 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7332__auto___15203,out){
return (function (){var f__7333__auto__ = (function (){var switch__7317__auto__ = ((function (c__7332__auto___15203,out){
return (function (state_15173){var state_val_15174 = (state_15173[(1)]);if((state_val_15174 === (7)))
{var inst_15169 = (state_15173[(2)]);var state_15173__$1 = state_15173;var statearr_15175_15204 = state_15173__$1;(statearr_15175_15204[(2)] = inst_15169);
(statearr_15175_15204[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15174 === (1)))
{var inst_15132 = [];var inst_15133 = inst_15132;var inst_15134 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_15173__$1 = (function (){var statearr_15176 = state_15173;(statearr_15176[(7)] = inst_15133);
(statearr_15176[(8)] = inst_15134);
return statearr_15176;
})();var statearr_15177_15205 = state_15173__$1;(statearr_15177_15205[(2)] = null);
(statearr_15177_15205[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15174 === (4)))
{var inst_15137 = (state_15173[(9)]);var inst_15137__$1 = (state_15173[(2)]);var inst_15138 = (inst_15137__$1 == null);var inst_15139 = cljs.core.not.call(null,inst_15138);var state_15173__$1 = (function (){var statearr_15178 = state_15173;(statearr_15178[(9)] = inst_15137__$1);
return statearr_15178;
})();if(inst_15139)
{var statearr_15179_15206 = state_15173__$1;(statearr_15179_15206[(1)] = (5));
} else
{var statearr_15180_15207 = state_15173__$1;(statearr_15180_15207[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15174 === (15)))
{var inst_15163 = (state_15173[(2)]);var state_15173__$1 = state_15173;var statearr_15181_15208 = state_15173__$1;(statearr_15181_15208[(2)] = inst_15163);
(statearr_15181_15208[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15174 === (13)))
{var state_15173__$1 = state_15173;var statearr_15182_15209 = state_15173__$1;(statearr_15182_15209[(2)] = null);
(statearr_15182_15209[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15174 === (6)))
{var inst_15133 = (state_15173[(7)]);var inst_15158 = inst_15133.length;var inst_15159 = (inst_15158 > (0));var state_15173__$1 = state_15173;if(cljs.core.truth_(inst_15159))
{var statearr_15183_15210 = state_15173__$1;(statearr_15183_15210[(1)] = (12));
} else
{var statearr_15184_15211 = state_15173__$1;(statearr_15184_15211[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15174 === (3)))
{var inst_15171 = (state_15173[(2)]);var state_15173__$1 = state_15173;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15173__$1,inst_15171);
} else
{if((state_val_15174 === (12)))
{var inst_15133 = (state_15173[(7)]);var inst_15161 = cljs.core.vec.call(null,inst_15133);var state_15173__$1 = state_15173;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15173__$1,(15),out,inst_15161);
} else
{if((state_val_15174 === (2)))
{var state_15173__$1 = state_15173;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15173__$1,(4),ch);
} else
{if((state_val_15174 === (11)))
{var inst_15137 = (state_15173[(9)]);var inst_15141 = (state_15173[(10)]);var inst_15151 = (state_15173[(2)]);var inst_15152 = [];var inst_15153 = inst_15152.push(inst_15137);var inst_15133 = inst_15152;var inst_15134 = inst_15141;var state_15173__$1 = (function (){var statearr_15185 = state_15173;(statearr_15185[(11)] = inst_15153);
(statearr_15185[(12)] = inst_15151);
(statearr_15185[(7)] = inst_15133);
(statearr_15185[(8)] = inst_15134);
return statearr_15185;
})();var statearr_15186_15212 = state_15173__$1;(statearr_15186_15212[(2)] = null);
(statearr_15186_15212[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15174 === (9)))
{var inst_15133 = (state_15173[(7)]);var inst_15149 = cljs.core.vec.call(null,inst_15133);var state_15173__$1 = state_15173;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15173__$1,(11),out,inst_15149);
} else
{if((state_val_15174 === (5)))
{var inst_15137 = (state_15173[(9)]);var inst_15141 = (state_15173[(10)]);var inst_15134 = (state_15173[(8)]);var inst_15141__$1 = f.call(null,inst_15137);var inst_15142 = cljs.core._EQ_.call(null,inst_15141__$1,inst_15134);var inst_15143 = cljs.core.keyword_identical_QMARK_.call(null,inst_15134,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_15144 = (inst_15142) || (inst_15143);var state_15173__$1 = (function (){var statearr_15187 = state_15173;(statearr_15187[(10)] = inst_15141__$1);
return statearr_15187;
})();if(cljs.core.truth_(inst_15144))
{var statearr_15188_15213 = state_15173__$1;(statearr_15188_15213[(1)] = (8));
} else
{var statearr_15189_15214 = state_15173__$1;(statearr_15189_15214[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15174 === (14)))
{var inst_15166 = (state_15173[(2)]);var inst_15167 = cljs.core.async.close_BANG_.call(null,out);var state_15173__$1 = (function (){var statearr_15191 = state_15173;(statearr_15191[(13)] = inst_15166);
return statearr_15191;
})();var statearr_15192_15215 = state_15173__$1;(statearr_15192_15215[(2)] = inst_15167);
(statearr_15192_15215[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15174 === (10)))
{var inst_15156 = (state_15173[(2)]);var state_15173__$1 = state_15173;var statearr_15193_15216 = state_15173__$1;(statearr_15193_15216[(2)] = inst_15156);
(statearr_15193_15216[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15174 === (8)))
{var inst_15137 = (state_15173[(9)]);var inst_15141 = (state_15173[(10)]);var inst_15133 = (state_15173[(7)]);var inst_15146 = inst_15133.push(inst_15137);var tmp15190 = inst_15133;var inst_15133__$1 = tmp15190;var inst_15134 = inst_15141;var state_15173__$1 = (function (){var statearr_15194 = state_15173;(statearr_15194[(14)] = inst_15146);
(statearr_15194[(7)] = inst_15133__$1);
(statearr_15194[(8)] = inst_15134);
return statearr_15194;
})();var statearr_15195_15217 = state_15173__$1;(statearr_15195_15217[(2)] = null);
(statearr_15195_15217[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__7332__auto___15203,out))
;return ((function (switch__7317__auto__,c__7332__auto___15203,out){
return (function() {
var state_machine__7318__auto__ = null;
var state_machine__7318__auto____0 = (function (){var statearr_15199 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15199[(0)] = state_machine__7318__auto__);
(statearr_15199[(1)] = (1));
return statearr_15199;
});
var state_machine__7318__auto____1 = (function (state_15173){while(true){
var ret_value__7319__auto__ = (function (){try{while(true){
var result__7320__auto__ = switch__7317__auto__.call(null,state_15173);if(cljs.core.keyword_identical_QMARK_.call(null,result__7320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7320__auto__;
}
break;
}
}catch (e15200){if((e15200 instanceof Object))
{var ex__7321__auto__ = e15200;var statearr_15201_15218 = state_15173;(statearr_15201_15218[(5)] = ex__7321__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15173);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15200;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15219 = state_15173;
state_15173 = G__15219;
continue;
}
} else
{return ret_value__7319__auto__;
}
break;
}
});
state_machine__7318__auto__ = function(state_15173){
switch(arguments.length){
case 0:
return state_machine__7318__auto____0.call(this);
case 1:
return state_machine__7318__auto____1.call(this,state_15173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7318__auto____0;
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7318__auto____1;
return state_machine__7318__auto__;
})()
;})(switch__7317__auto__,c__7332__auto___15203,out))
})();var state__7334__auto__ = (function (){var statearr_15202 = f__7333__auto__.call(null);(statearr_15202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7332__auto___15203);
return statearr_15202;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7334__auto__);
});})(c__7332__auto___15203,out))
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
