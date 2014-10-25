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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13798 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13798 = (function (f,fn_handler,meta13799){
this.f = f;
this.fn_handler = fn_handler;
this.meta13799 = meta13799;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13798.cljs$lang$type = true;
cljs.core.async.t13798.cljs$lang$ctorStr = "cljs.core.async/t13798";
cljs.core.async.t13798.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){return cljs.core._write.call(null,writer__8618__auto__,"cljs.core.async/t13798");
});
cljs.core.async.t13798.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13798.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13798.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13800){var self__ = this;
var _13800__$1 = this;return self__.meta13799;
});
cljs.core.async.t13798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13800,meta13799__$1){var self__ = this;
var _13800__$1 = this;return (new cljs.core.async.t13798(self__.f,self__.fn_handler,meta13799__$1));
});
cljs.core.async.__GT_t13798 = (function __GT_t13798(f__$1,fn_handler__$1,meta13799){return (new cljs.core.async.t13798(f__$1,fn_handler__$1,meta13799));
});
}
return (new cljs.core.async.t13798(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13802 = buff;if(G__13802)
{var bit__8704__auto__ = null;if(cljs.core.truth_((function (){var or__8041__auto__ = bit__8704__auto__;if(cljs.core.truth_(or__8041__auto__))
{return or__8041__auto__;
} else
{return G__13802.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13802.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13802);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13802);
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
{var val_13803 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13803);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_13803,ret){
return (function (){return fn1.call(null,val_13803);
});})(val_13803,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8910__auto___13804 = n;var x_13805 = (0);while(true){
if((x_13805 < n__8910__auto___13804))
{(a[x_13805] = (0));
{
var G__13806 = (x_13805 + (1));
x_13805 = G__13806;
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
var G__13807 = (i + (1));
i = G__13807;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13811 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13811 = (function (flag,alt_flag,meta13812){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13812 = meta13812;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13811.cljs$lang$type = true;
cljs.core.async.t13811.cljs$lang$ctorStr = "cljs.core.async/t13811";
cljs.core.async.t13811.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){return cljs.core._write.call(null,writer__8618__auto__,"cljs.core.async/t13811");
});})(flag))
;
cljs.core.async.t13811.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13811.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t13811.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t13811.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13813){var self__ = this;
var _13813__$1 = this;return self__.meta13812;
});})(flag))
;
cljs.core.async.t13811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13813,meta13812__$1){var self__ = this;
var _13813__$1 = this;return (new cljs.core.async.t13811(self__.flag,self__.alt_flag,meta13812__$1));
});})(flag))
;
cljs.core.async.__GT_t13811 = ((function (flag){
return (function __GT_t13811(flag__$1,alt_flag__$1,meta13812){return (new cljs.core.async.t13811(flag__$1,alt_flag__$1,meta13812));
});})(flag))
;
}
return (new cljs.core.async.t13811(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13817 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13817 = (function (cb,flag,alt_handler,meta13818){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13818 = meta13818;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13817.cljs$lang$type = true;
cljs.core.async.t13817.cljs$lang$ctorStr = "cljs.core.async/t13817";
cljs.core.async.t13817.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){return cljs.core._write.call(null,writer__8618__auto__,"cljs.core.async/t13817");
});
cljs.core.async.t13817.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13817.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13817.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13819){var self__ = this;
var _13819__$1 = this;return self__.meta13818;
});
cljs.core.async.t13817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13819,meta13818__$1){var self__ = this;
var _13819__$1 = this;return (new cljs.core.async.t13817(self__.cb,self__.flag,self__.alt_handler,meta13818__$1));
});
cljs.core.async.__GT_t13817 = (function __GT_t13817(cb__$1,flag__$1,alt_handler__$1,meta13818){return (new cljs.core.async.t13817(cb__$1,flag__$1,alt_handler__$1,meta13818));
});
}
return (new cljs.core.async.t13817(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13820_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13820_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13821_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13821_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8041__auto__ = wport;if(cljs.core.truth_(or__8041__auto__))
{return or__8041__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__13822 = (i + (1));
i = G__13822;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__8041__auto__ = ret;if(cljs.core.truth_(or__8041__auto__))
{return or__8041__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__8029__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__8029__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__8029__auto__;
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
var alts_BANG___delegate = function (ports,p__13823){var map__13825 = p__13823;var map__13825__$1 = ((cljs.core.seq_QMARK_.call(null,map__13825))?cljs.core.apply.call(null,cljs.core.hash_map,map__13825):map__13825);var opts = map__13825__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__13823 = null;if (arguments.length > 1) {
  p__13823 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13823);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13826){
var ports = cljs.core.first(arglist__13826);
var p__13823 = cljs.core.rest(arglist__13826);
return alts_BANG___delegate(ports,p__13823);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13834 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13834 = (function (ch,f,map_LT_,meta13835){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13835 = meta13835;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13834.cljs$lang$type = true;
cljs.core.async.t13834.cljs$lang$ctorStr = "cljs.core.async/t13834";
cljs.core.async.t13834.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){return cljs.core._write.call(null,writer__8618__auto__,"cljs.core.async/t13834");
});
cljs.core.async.t13834.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13834.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t13834.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13834.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13837 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13837 = (function (fn1,_,meta13835,ch,f,map_LT_,meta13838){
this.fn1 = fn1;
this._ = _;
this.meta13835 = meta13835;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13838 = meta13838;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13837.cljs$lang$type = true;
cljs.core.async.t13837.cljs$lang$ctorStr = "cljs.core.async/t13837";
cljs.core.async.t13837.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){return cljs.core._write.call(null,writer__8618__auto__,"cljs.core.async/t13837");
});})(___$1))
;
cljs.core.async.t13837.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13837.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t13837.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t13837.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__13827_SHARP_){return f1.call(null,(((p1__13827_SHARP_ == null))?null:self__.f.call(null,p1__13827_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t13837.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13839){var self__ = this;
var _13839__$1 = this;return self__.meta13838;
});})(___$1))
;
cljs.core.async.t13837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13839,meta13838__$1){var self__ = this;
var _13839__$1 = this;return (new cljs.core.async.t13837(self__.fn1,self__._,self__.meta13835,self__.ch,self__.f,self__.map_LT_,meta13838__$1));
});})(___$1))
;
cljs.core.async.__GT_t13837 = ((function (___$1){
return (function __GT_t13837(fn1__$1,___$2,meta13835__$1,ch__$2,f__$2,map_LT___$2,meta13838){return (new cljs.core.async.t13837(fn1__$1,___$2,meta13835__$1,ch__$2,f__$2,map_LT___$2,meta13838));
});})(___$1))
;
}
return (new cljs.core.async.t13837(fn1,___$1,self__.meta13835,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__8029__auto__ = ret;if(cljs.core.truth_(and__8029__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__8029__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t13834.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13834.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13834.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t13834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13836){var self__ = this;
var _13836__$1 = this;return self__.meta13835;
});
cljs.core.async.t13834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13836,meta13835__$1){var self__ = this;
var _13836__$1 = this;return (new cljs.core.async.t13834(self__.ch,self__.f,self__.map_LT_,meta13835__$1));
});
cljs.core.async.__GT_t13834 = (function __GT_t13834(ch__$1,f__$1,map_LT___$1,meta13835){return (new cljs.core.async.t13834(ch__$1,f__$1,map_LT___$1,meta13835));
});
}
return (new cljs.core.async.t13834(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13843 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13843 = (function (ch,f,map_GT_,meta13844){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13844 = meta13844;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13843.cljs$lang$type = true;
cljs.core.async.t13843.cljs$lang$ctorStr = "cljs.core.async/t13843";
cljs.core.async.t13843.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){return cljs.core._write.call(null,writer__8618__auto__,"cljs.core.async/t13843");
});
cljs.core.async.t13843.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13843.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t13843.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13843.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13843.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13843.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13845){var self__ = this;
var _13845__$1 = this;return self__.meta13844;
});
cljs.core.async.t13843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13845,meta13844__$1){var self__ = this;
var _13845__$1 = this;return (new cljs.core.async.t13843(self__.ch,self__.f,self__.map_GT_,meta13844__$1));
});
cljs.core.async.__GT_t13843 = (function __GT_t13843(ch__$1,f__$1,map_GT___$1,meta13844){return (new cljs.core.async.t13843(ch__$1,f__$1,map_GT___$1,meta13844));
});
}
return (new cljs.core.async.t13843(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13849 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13849 = (function (ch,p,filter_GT_,meta13850){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13850 = meta13850;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13849.cljs$lang$type = true;
cljs.core.async.t13849.cljs$lang$ctorStr = "cljs.core.async/t13849";
cljs.core.async.t13849.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){return cljs.core._write.call(null,writer__8618__auto__,"cljs.core.async/t13849");
});
cljs.core.async.t13849.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13849.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t13849.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13849.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13849.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13849.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13849.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t13849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13851){var self__ = this;
var _13851__$1 = this;return self__.meta13850;
});
cljs.core.async.t13849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13851,meta13850__$1){var self__ = this;
var _13851__$1 = this;return (new cljs.core.async.t13849(self__.ch,self__.p,self__.filter_GT_,meta13850__$1));
});
cljs.core.async.__GT_t13849 = (function __GT_t13849(ch__$1,p__$1,filter_GT___$1,meta13850){return (new cljs.core.async.t13849(ch__$1,p__$1,filter_GT___$1,meta13850));
});
}
return (new cljs.core.async.t13849(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10935__auto___13934 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10935__auto___13934,out){
return (function (){var f__10936__auto__ = (function (){var switch__10870__auto__ = ((function (c__10935__auto___13934,out){
return (function (state_13913){var state_val_13914 = (state_13913[(1)]);if((state_val_13914 === (7)))
{var inst_13909 = (state_13913[(2)]);var state_13913__$1 = state_13913;var statearr_13915_13935 = state_13913__$1;(statearr_13915_13935[(2)] = inst_13909);
(statearr_13915_13935[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13914 === (1)))
{var state_13913__$1 = state_13913;var statearr_13916_13936 = state_13913__$1;(statearr_13916_13936[(2)] = null);
(statearr_13916_13936[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13914 === (4)))
{var inst_13895 = (state_13913[(7)]);var inst_13895__$1 = (state_13913[(2)]);var inst_13896 = (inst_13895__$1 == null);var state_13913__$1 = (function (){var statearr_13917 = state_13913;(statearr_13917[(7)] = inst_13895__$1);
return statearr_13917;
})();if(cljs.core.truth_(inst_13896))
{var statearr_13918_13937 = state_13913__$1;(statearr_13918_13937[(1)] = (5));
} else
{var statearr_13919_13938 = state_13913__$1;(statearr_13919_13938[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13914 === (6)))
{var inst_13895 = (state_13913[(7)]);var inst_13900 = p.call(null,inst_13895);var state_13913__$1 = state_13913;if(cljs.core.truth_(inst_13900))
{var statearr_13920_13939 = state_13913__$1;(statearr_13920_13939[(1)] = (8));
} else
{var statearr_13921_13940 = state_13913__$1;(statearr_13921_13940[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13914 === (3)))
{var inst_13911 = (state_13913[(2)]);var state_13913__$1 = state_13913;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13913__$1,inst_13911);
} else
{if((state_val_13914 === (2)))
{var state_13913__$1 = state_13913;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13913__$1,(4),ch);
} else
{if((state_val_13914 === (11)))
{var inst_13903 = (state_13913[(2)]);var state_13913__$1 = state_13913;var statearr_13922_13941 = state_13913__$1;(statearr_13922_13941[(2)] = inst_13903);
(statearr_13922_13941[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13914 === (9)))
{var state_13913__$1 = state_13913;var statearr_13923_13942 = state_13913__$1;(statearr_13923_13942[(2)] = null);
(statearr_13923_13942[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13914 === (5)))
{var inst_13898 = cljs.core.async.close_BANG_.call(null,out);var state_13913__$1 = state_13913;var statearr_13924_13943 = state_13913__$1;(statearr_13924_13943[(2)] = inst_13898);
(statearr_13924_13943[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13914 === (10)))
{var inst_13906 = (state_13913[(2)]);var state_13913__$1 = (function (){var statearr_13925 = state_13913;(statearr_13925[(8)] = inst_13906);
return statearr_13925;
})();var statearr_13926_13944 = state_13913__$1;(statearr_13926_13944[(2)] = null);
(statearr_13926_13944[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13914 === (8)))
{var inst_13895 = (state_13913[(7)]);var state_13913__$1 = state_13913;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13913__$1,(11),out,inst_13895);
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
});})(c__10935__auto___13934,out))
;return ((function (switch__10870__auto__,c__10935__auto___13934,out){
return (function() {
var state_machine__10871__auto__ = null;
var state_machine__10871__auto____0 = (function (){var statearr_13930 = [null,null,null,null,null,null,null,null,null];(statearr_13930[(0)] = state_machine__10871__auto__);
(statearr_13930[(1)] = (1));
return statearr_13930;
});
var state_machine__10871__auto____1 = (function (state_13913){while(true){
var ret_value__10872__auto__ = (function (){try{while(true){
var result__10873__auto__ = switch__10870__auto__.call(null,state_13913);if(cljs.core.keyword_identical_QMARK_.call(null,result__10873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10873__auto__;
}
break;
}
}catch (e13931){if((e13931 instanceof Object))
{var ex__10874__auto__ = e13931;var statearr_13932_13945 = state_13913;(statearr_13932_13945[(5)] = ex__10874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13913);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13931;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13946 = state_13913;
state_13913 = G__13946;
continue;
}
} else
{return ret_value__10872__auto__;
}
break;
}
});
state_machine__10871__auto__ = function(state_13913){
switch(arguments.length){
case 0:
return state_machine__10871__auto____0.call(this);
case 1:
return state_machine__10871__auto____1.call(this,state_13913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10871__auto____0;
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10871__auto____1;
return state_machine__10871__auto__;
})()
;})(switch__10870__auto__,c__10935__auto___13934,out))
})();var state__10937__auto__ = (function (){var statearr_13933 = f__10936__auto__.call(null);(statearr_13933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10935__auto___13934);
return statearr_13933;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10937__auto__);
});})(c__10935__auto___13934,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10935__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10935__auto__){
return (function (){var f__10936__auto__ = (function (){var switch__10870__auto__ = ((function (c__10935__auto__){
return (function (state_14112){var state_val_14113 = (state_14112[(1)]);if((state_val_14113 === (7)))
{var inst_14108 = (state_14112[(2)]);var state_14112__$1 = state_14112;var statearr_14114_14155 = state_14112__$1;(statearr_14114_14155[(2)] = inst_14108);
(statearr_14114_14155[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14113 === (20)))
{var inst_14078 = (state_14112[(7)]);var inst_14089 = (state_14112[(2)]);var inst_14090 = cljs.core.next.call(null,inst_14078);var inst_14064 = inst_14090;var inst_14065 = null;var inst_14066 = (0);var inst_14067 = (0);var state_14112__$1 = (function (){var statearr_14115 = state_14112;(statearr_14115[(8)] = inst_14067);
(statearr_14115[(9)] = inst_14066);
(statearr_14115[(10)] = inst_14065);
(statearr_14115[(11)] = inst_14089);
(statearr_14115[(12)] = inst_14064);
return statearr_14115;
})();var statearr_14116_14156 = state_14112__$1;(statearr_14116_14156[(2)] = null);
(statearr_14116_14156[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14113 === (1)))
{var state_14112__$1 = state_14112;var statearr_14117_14157 = state_14112__$1;(statearr_14117_14157[(2)] = null);
(statearr_14117_14157[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14113 === (4)))
{var inst_14053 = (state_14112[(13)]);var inst_14053__$1 = (state_14112[(2)]);var inst_14054 = (inst_14053__$1 == null);var state_14112__$1 = (function (){var statearr_14118 = state_14112;(statearr_14118[(13)] = inst_14053__$1);
return statearr_14118;
})();if(cljs.core.truth_(inst_14054))
{var statearr_14119_14158 = state_14112__$1;(statearr_14119_14158[(1)] = (5));
} else
{var statearr_14120_14159 = state_14112__$1;(statearr_14120_14159[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14113 === (15)))
{var state_14112__$1 = state_14112;var statearr_14124_14160 = state_14112__$1;(statearr_14124_14160[(2)] = null);
(statearr_14124_14160[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14113 === (21)))
{var state_14112__$1 = state_14112;var statearr_14125_14161 = state_14112__$1;(statearr_14125_14161[(2)] = null);
(statearr_14125_14161[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14113 === (13)))
{var inst_14067 = (state_14112[(8)]);var inst_14066 = (state_14112[(9)]);var inst_14065 = (state_14112[(10)]);var inst_14064 = (state_14112[(12)]);var inst_14074 = (state_14112[(2)]);var inst_14075 = (inst_14067 + (1));var tmp14121 = inst_14066;var tmp14122 = inst_14065;var tmp14123 = inst_14064;var inst_14064__$1 = tmp14123;var inst_14065__$1 = tmp14122;var inst_14066__$1 = tmp14121;var inst_14067__$1 = inst_14075;var state_14112__$1 = (function (){var statearr_14126 = state_14112;(statearr_14126[(8)] = inst_14067__$1);
(statearr_14126[(9)] = inst_14066__$1);
(statearr_14126[(10)] = inst_14065__$1);
(statearr_14126[(14)] = inst_14074);
(statearr_14126[(12)] = inst_14064__$1);
return statearr_14126;
})();var statearr_14127_14162 = state_14112__$1;(statearr_14127_14162[(2)] = null);
(statearr_14127_14162[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14113 === (22)))
{var state_14112__$1 = state_14112;var statearr_14128_14163 = state_14112__$1;(statearr_14128_14163[(2)] = null);
(statearr_14128_14163[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14113 === (6)))
{var inst_14053 = (state_14112[(13)]);var inst_14062 = f.call(null,inst_14053);var inst_14063 = cljs.core.seq.call(null,inst_14062);var inst_14064 = inst_14063;var inst_14065 = null;var inst_14066 = (0);var inst_14067 = (0);var state_14112__$1 = (function (){var statearr_14129 = state_14112;(statearr_14129[(8)] = inst_14067);
(statearr_14129[(9)] = inst_14066);
(statearr_14129[(10)] = inst_14065);
(statearr_14129[(12)] = inst_14064);
return statearr_14129;
})();var statearr_14130_14164 = state_14112__$1;(statearr_14130_14164[(2)] = null);
(statearr_14130_14164[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14113 === (17)))
{var inst_14078 = (state_14112[(7)]);var inst_14082 = cljs.core.chunk_first.call(null,inst_14078);var inst_14083 = cljs.core.chunk_rest.call(null,inst_14078);var inst_14084 = cljs.core.count.call(null,inst_14082);var inst_14064 = inst_14083;var inst_14065 = inst_14082;var inst_14066 = inst_14084;var inst_14067 = (0);var state_14112__$1 = (function (){var statearr_14131 = state_14112;(statearr_14131[(8)] = inst_14067);
(statearr_14131[(9)] = inst_14066);
(statearr_14131[(10)] = inst_14065);
(statearr_14131[(12)] = inst_14064);
return statearr_14131;
})();var statearr_14132_14165 = state_14112__$1;(statearr_14132_14165[(2)] = null);
(statearr_14132_14165[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14113 === (3)))
{var inst_14110 = (state_14112[(2)]);var state_14112__$1 = state_14112;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14112__$1,inst_14110);
} else
{if((state_val_14113 === (12)))
{var inst_14098 = (state_14112[(2)]);var state_14112__$1 = state_14112;var statearr_14133_14166 = state_14112__$1;(statearr_14133_14166[(2)] = inst_14098);
(statearr_14133_14166[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14113 === (2)))
{var state_14112__$1 = state_14112;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14112__$1,(4),in$);
} else
{if((state_val_14113 === (23)))
{var inst_14106 = (state_14112[(2)]);var state_14112__$1 = state_14112;var statearr_14134_14167 = state_14112__$1;(statearr_14134_14167[(2)] = inst_14106);
(statearr_14134_14167[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14113 === (19)))
{var inst_14093 = (state_14112[(2)]);var state_14112__$1 = state_14112;var statearr_14135_14168 = state_14112__$1;(statearr_14135_14168[(2)] = inst_14093);
(statearr_14135_14168[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14113 === (11)))
{var inst_14078 = (state_14112[(7)]);var inst_14064 = (state_14112[(12)]);var inst_14078__$1 = cljs.core.seq.call(null,inst_14064);var state_14112__$1 = (function (){var statearr_14136 = state_14112;(statearr_14136[(7)] = inst_14078__$1);
return statearr_14136;
})();if(inst_14078__$1)
{var statearr_14137_14169 = state_14112__$1;(statearr_14137_14169[(1)] = (14));
} else
{var statearr_14138_14170 = state_14112__$1;(statearr_14138_14170[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14113 === (9)))
{var inst_14100 = (state_14112[(2)]);var inst_14101 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_14112__$1 = (function (){var statearr_14139 = state_14112;(statearr_14139[(15)] = inst_14100);
return statearr_14139;
})();if(cljs.core.truth_(inst_14101))
{var statearr_14140_14171 = state_14112__$1;(statearr_14140_14171[(1)] = (21));
} else
{var statearr_14141_14172 = state_14112__$1;(statearr_14141_14172[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14113 === (5)))
{var inst_14056 = cljs.core.async.close_BANG_.call(null,out);var state_14112__$1 = state_14112;var statearr_14142_14173 = state_14112__$1;(statearr_14142_14173[(2)] = inst_14056);
(statearr_14142_14173[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14113 === (14)))
{var inst_14078 = (state_14112[(7)]);var inst_14080 = cljs.core.chunked_seq_QMARK_.call(null,inst_14078);var state_14112__$1 = state_14112;if(inst_14080)
{var statearr_14143_14174 = state_14112__$1;(statearr_14143_14174[(1)] = (17));
} else
{var statearr_14144_14175 = state_14112__$1;(statearr_14144_14175[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14113 === (16)))
{var inst_14096 = (state_14112[(2)]);var state_14112__$1 = state_14112;var statearr_14145_14176 = state_14112__$1;(statearr_14145_14176[(2)] = inst_14096);
(statearr_14145_14176[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14113 === (10)))
{var inst_14067 = (state_14112[(8)]);var inst_14065 = (state_14112[(10)]);var inst_14072 = cljs.core._nth.call(null,inst_14065,inst_14067);var state_14112__$1 = state_14112;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14112__$1,(13),out,inst_14072);
} else
{if((state_val_14113 === (18)))
{var inst_14078 = (state_14112[(7)]);var inst_14087 = cljs.core.first.call(null,inst_14078);var state_14112__$1 = state_14112;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14112__$1,(20),out,inst_14087);
} else
{if((state_val_14113 === (8)))
{var inst_14067 = (state_14112[(8)]);var inst_14066 = (state_14112[(9)]);var inst_14069 = (inst_14067 < inst_14066);var inst_14070 = inst_14069;var state_14112__$1 = state_14112;if(cljs.core.truth_(inst_14070))
{var statearr_14146_14177 = state_14112__$1;(statearr_14146_14177[(1)] = (10));
} else
{var statearr_14147_14178 = state_14112__$1;(statearr_14147_14178[(1)] = (11));
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
});})(c__10935__auto__))
;return ((function (switch__10870__auto__,c__10935__auto__){
return (function() {
var state_machine__10871__auto__ = null;
var state_machine__10871__auto____0 = (function (){var statearr_14151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14151[(0)] = state_machine__10871__auto__);
(statearr_14151[(1)] = (1));
return statearr_14151;
});
var state_machine__10871__auto____1 = (function (state_14112){while(true){
var ret_value__10872__auto__ = (function (){try{while(true){
var result__10873__auto__ = switch__10870__auto__.call(null,state_14112);if(cljs.core.keyword_identical_QMARK_.call(null,result__10873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10873__auto__;
}
break;
}
}catch (e14152){if((e14152 instanceof Object))
{var ex__10874__auto__ = e14152;var statearr_14153_14179 = state_14112;(statearr_14153_14179[(5)] = ex__10874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14112);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14152;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14180 = state_14112;
state_14112 = G__14180;
continue;
}
} else
{return ret_value__10872__auto__;
}
break;
}
});
state_machine__10871__auto__ = function(state_14112){
switch(arguments.length){
case 0:
return state_machine__10871__auto____0.call(this);
case 1:
return state_machine__10871__auto____1.call(this,state_14112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10871__auto____0;
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10871__auto____1;
return state_machine__10871__auto__;
})()
;})(switch__10870__auto__,c__10935__auto__))
})();var state__10937__auto__ = (function (){var statearr_14154 = f__10936__auto__.call(null);(statearr_14154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10935__auto__);
return statearr_14154;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10937__auto__);
});})(c__10935__auto__))
);
return c__10935__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__10935__auto___14275 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10935__auto___14275){
return (function (){var f__10936__auto__ = (function (){var switch__10870__auto__ = ((function (c__10935__auto___14275){
return (function (state_14251){var state_val_14252 = (state_14251[(1)]);if((state_val_14252 === (7)))
{var inst_14247 = (state_14251[(2)]);var state_14251__$1 = state_14251;var statearr_14253_14276 = state_14251__$1;(statearr_14253_14276[(2)] = inst_14247);
(statearr_14253_14276[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14252 === (1)))
{var state_14251__$1 = state_14251;var statearr_14254_14277 = state_14251__$1;(statearr_14254_14277[(2)] = null);
(statearr_14254_14277[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14252 === (4)))
{var inst_14230 = (state_14251[(7)]);var inst_14230__$1 = (state_14251[(2)]);var inst_14231 = (inst_14230__$1 == null);var state_14251__$1 = (function (){var statearr_14255 = state_14251;(statearr_14255[(7)] = inst_14230__$1);
return statearr_14255;
})();if(cljs.core.truth_(inst_14231))
{var statearr_14256_14278 = state_14251__$1;(statearr_14256_14278[(1)] = (5));
} else
{var statearr_14257_14279 = state_14251__$1;(statearr_14257_14279[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14252 === (13)))
{var state_14251__$1 = state_14251;var statearr_14258_14280 = state_14251__$1;(statearr_14258_14280[(2)] = null);
(statearr_14258_14280[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14252 === (6)))
{var inst_14230 = (state_14251[(7)]);var state_14251__$1 = state_14251;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14251__$1,(11),to,inst_14230);
} else
{if((state_val_14252 === (3)))
{var inst_14249 = (state_14251[(2)]);var state_14251__$1 = state_14251;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14251__$1,inst_14249);
} else
{if((state_val_14252 === (12)))
{var state_14251__$1 = state_14251;var statearr_14259_14281 = state_14251__$1;(statearr_14259_14281[(2)] = null);
(statearr_14259_14281[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14252 === (2)))
{var state_14251__$1 = state_14251;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14251__$1,(4),from);
} else
{if((state_val_14252 === (11)))
{var inst_14240 = (state_14251[(2)]);var state_14251__$1 = state_14251;if(cljs.core.truth_(inst_14240))
{var statearr_14260_14282 = state_14251__$1;(statearr_14260_14282[(1)] = (12));
} else
{var statearr_14261_14283 = state_14251__$1;(statearr_14261_14283[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14252 === (9)))
{var state_14251__$1 = state_14251;var statearr_14262_14284 = state_14251__$1;(statearr_14262_14284[(2)] = null);
(statearr_14262_14284[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14252 === (5)))
{var state_14251__$1 = state_14251;if(cljs.core.truth_(close_QMARK_))
{var statearr_14263_14285 = state_14251__$1;(statearr_14263_14285[(1)] = (8));
} else
{var statearr_14264_14286 = state_14251__$1;(statearr_14264_14286[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14252 === (14)))
{var inst_14245 = (state_14251[(2)]);var state_14251__$1 = state_14251;var statearr_14265_14287 = state_14251__$1;(statearr_14265_14287[(2)] = inst_14245);
(statearr_14265_14287[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14252 === (10)))
{var inst_14237 = (state_14251[(2)]);var state_14251__$1 = state_14251;var statearr_14266_14288 = state_14251__$1;(statearr_14266_14288[(2)] = inst_14237);
(statearr_14266_14288[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14252 === (8)))
{var inst_14234 = cljs.core.async.close_BANG_.call(null,to);var state_14251__$1 = state_14251;var statearr_14267_14289 = state_14251__$1;(statearr_14267_14289[(2)] = inst_14234);
(statearr_14267_14289[(1)] = (10));
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
});})(c__10935__auto___14275))
;return ((function (switch__10870__auto__,c__10935__auto___14275){
return (function() {
var state_machine__10871__auto__ = null;
var state_machine__10871__auto____0 = (function (){var statearr_14271 = [null,null,null,null,null,null,null,null];(statearr_14271[(0)] = state_machine__10871__auto__);
(statearr_14271[(1)] = (1));
return statearr_14271;
});
var state_machine__10871__auto____1 = (function (state_14251){while(true){
var ret_value__10872__auto__ = (function (){try{while(true){
var result__10873__auto__ = switch__10870__auto__.call(null,state_14251);if(cljs.core.keyword_identical_QMARK_.call(null,result__10873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10873__auto__;
}
break;
}
}catch (e14272){if((e14272 instanceof Object))
{var ex__10874__auto__ = e14272;var statearr_14273_14290 = state_14251;(statearr_14273_14290[(5)] = ex__10874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14251);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14272;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14291 = state_14251;
state_14251 = G__14291;
continue;
}
} else
{return ret_value__10872__auto__;
}
break;
}
});
state_machine__10871__auto__ = function(state_14251){
switch(arguments.length){
case 0:
return state_machine__10871__auto____0.call(this);
case 1:
return state_machine__10871__auto____1.call(this,state_14251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10871__auto____0;
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10871__auto____1;
return state_machine__10871__auto__;
})()
;})(switch__10870__auto__,c__10935__auto___14275))
})();var state__10937__auto__ = (function (){var statearr_14274 = f__10936__auto__.call(null);(statearr_14274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10935__auto___14275);
return statearr_14274;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10937__auto__);
});})(c__10935__auto___14275))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10935__auto___14392 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10935__auto___14392,tc,fc){
return (function (){var f__10936__auto__ = (function (){var switch__10870__auto__ = ((function (c__10935__auto___14392,tc,fc){
return (function (state_14367){var state_val_14368 = (state_14367[(1)]);if((state_val_14368 === (7)))
{var inst_14363 = (state_14367[(2)]);var state_14367__$1 = state_14367;var statearr_14369_14393 = state_14367__$1;(statearr_14369_14393[(2)] = inst_14363);
(statearr_14369_14393[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14368 === (1)))
{var state_14367__$1 = state_14367;var statearr_14370_14394 = state_14367__$1;(statearr_14370_14394[(2)] = null);
(statearr_14370_14394[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14368 === (4)))
{var inst_14344 = (state_14367[(7)]);var inst_14344__$1 = (state_14367[(2)]);var inst_14345 = (inst_14344__$1 == null);var state_14367__$1 = (function (){var statearr_14371 = state_14367;(statearr_14371[(7)] = inst_14344__$1);
return statearr_14371;
})();if(cljs.core.truth_(inst_14345))
{var statearr_14372_14395 = state_14367__$1;(statearr_14372_14395[(1)] = (5));
} else
{var statearr_14373_14396 = state_14367__$1;(statearr_14373_14396[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14368 === (13)))
{var state_14367__$1 = state_14367;var statearr_14374_14397 = state_14367__$1;(statearr_14374_14397[(2)] = null);
(statearr_14374_14397[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14368 === (6)))
{var inst_14344 = (state_14367[(7)]);var inst_14350 = p.call(null,inst_14344);var state_14367__$1 = state_14367;if(cljs.core.truth_(inst_14350))
{var statearr_14375_14398 = state_14367__$1;(statearr_14375_14398[(1)] = (9));
} else
{var statearr_14376_14399 = state_14367__$1;(statearr_14376_14399[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14368 === (3)))
{var inst_14365 = (state_14367[(2)]);var state_14367__$1 = state_14367;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14367__$1,inst_14365);
} else
{if((state_val_14368 === (12)))
{var state_14367__$1 = state_14367;var statearr_14377_14400 = state_14367__$1;(statearr_14377_14400[(2)] = null);
(statearr_14377_14400[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14368 === (2)))
{var state_14367__$1 = state_14367;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14367__$1,(4),ch);
} else
{if((state_val_14368 === (11)))
{var inst_14344 = (state_14367[(7)]);var inst_14354 = (state_14367[(2)]);var state_14367__$1 = state_14367;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14367__$1,(8),inst_14354,inst_14344);
} else
{if((state_val_14368 === (9)))
{var state_14367__$1 = state_14367;var statearr_14378_14401 = state_14367__$1;(statearr_14378_14401[(2)] = tc);
(statearr_14378_14401[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14368 === (5)))
{var inst_14347 = cljs.core.async.close_BANG_.call(null,tc);var inst_14348 = cljs.core.async.close_BANG_.call(null,fc);var state_14367__$1 = (function (){var statearr_14379 = state_14367;(statearr_14379[(8)] = inst_14347);
return statearr_14379;
})();var statearr_14380_14402 = state_14367__$1;(statearr_14380_14402[(2)] = inst_14348);
(statearr_14380_14402[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14368 === (14)))
{var inst_14361 = (state_14367[(2)]);var state_14367__$1 = state_14367;var statearr_14381_14403 = state_14367__$1;(statearr_14381_14403[(2)] = inst_14361);
(statearr_14381_14403[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14368 === (10)))
{var state_14367__$1 = state_14367;var statearr_14382_14404 = state_14367__$1;(statearr_14382_14404[(2)] = fc);
(statearr_14382_14404[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14368 === (8)))
{var inst_14356 = (state_14367[(2)]);var state_14367__$1 = state_14367;if(cljs.core.truth_(inst_14356))
{var statearr_14383_14405 = state_14367__$1;(statearr_14383_14405[(1)] = (12));
} else
{var statearr_14384_14406 = state_14367__$1;(statearr_14384_14406[(1)] = (13));
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
});})(c__10935__auto___14392,tc,fc))
;return ((function (switch__10870__auto__,c__10935__auto___14392,tc,fc){
return (function() {
var state_machine__10871__auto__ = null;
var state_machine__10871__auto____0 = (function (){var statearr_14388 = [null,null,null,null,null,null,null,null,null];(statearr_14388[(0)] = state_machine__10871__auto__);
(statearr_14388[(1)] = (1));
return statearr_14388;
});
var state_machine__10871__auto____1 = (function (state_14367){while(true){
var ret_value__10872__auto__ = (function (){try{while(true){
var result__10873__auto__ = switch__10870__auto__.call(null,state_14367);if(cljs.core.keyword_identical_QMARK_.call(null,result__10873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10873__auto__;
}
break;
}
}catch (e14389){if((e14389 instanceof Object))
{var ex__10874__auto__ = e14389;var statearr_14390_14407 = state_14367;(statearr_14390_14407[(5)] = ex__10874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14367);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14389;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14408 = state_14367;
state_14367 = G__14408;
continue;
}
} else
{return ret_value__10872__auto__;
}
break;
}
});
state_machine__10871__auto__ = function(state_14367){
switch(arguments.length){
case 0:
return state_machine__10871__auto____0.call(this);
case 1:
return state_machine__10871__auto____1.call(this,state_14367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10871__auto____0;
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10871__auto____1;
return state_machine__10871__auto__;
})()
;})(switch__10870__auto__,c__10935__auto___14392,tc,fc))
})();var state__10937__auto__ = (function (){var statearr_14391 = f__10936__auto__.call(null);(statearr_14391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10935__auto___14392);
return statearr_14391;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10937__auto__);
});})(c__10935__auto___14392,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10935__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10935__auto__){
return (function (){var f__10936__auto__ = (function (){var switch__10870__auto__ = ((function (c__10935__auto__){
return (function (state_14455){var state_val_14456 = (state_14455[(1)]);if((state_val_14456 === (7)))
{var inst_14451 = (state_14455[(2)]);var state_14455__$1 = state_14455;var statearr_14457_14473 = state_14455__$1;(statearr_14457_14473[(2)] = inst_14451);
(statearr_14457_14473[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14456 === (6)))
{var inst_14441 = (state_14455[(7)]);var inst_14444 = (state_14455[(8)]);var inst_14448 = f.call(null,inst_14441,inst_14444);var inst_14441__$1 = inst_14448;var state_14455__$1 = (function (){var statearr_14458 = state_14455;(statearr_14458[(7)] = inst_14441__$1);
return statearr_14458;
})();var statearr_14459_14474 = state_14455__$1;(statearr_14459_14474[(2)] = null);
(statearr_14459_14474[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14456 === (5)))
{var inst_14441 = (state_14455[(7)]);var state_14455__$1 = state_14455;var statearr_14460_14475 = state_14455__$1;(statearr_14460_14475[(2)] = inst_14441);
(statearr_14460_14475[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14456 === (4)))
{var inst_14444 = (state_14455[(8)]);var inst_14444__$1 = (state_14455[(2)]);var inst_14445 = (inst_14444__$1 == null);var state_14455__$1 = (function (){var statearr_14461 = state_14455;(statearr_14461[(8)] = inst_14444__$1);
return statearr_14461;
})();if(cljs.core.truth_(inst_14445))
{var statearr_14462_14476 = state_14455__$1;(statearr_14462_14476[(1)] = (5));
} else
{var statearr_14463_14477 = state_14455__$1;(statearr_14463_14477[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14456 === (3)))
{var inst_14453 = (state_14455[(2)]);var state_14455__$1 = state_14455;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14455__$1,inst_14453);
} else
{if((state_val_14456 === (2)))
{var state_14455__$1 = state_14455;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14455__$1,(4),ch);
} else
{if((state_val_14456 === (1)))
{var inst_14441 = init;var state_14455__$1 = (function (){var statearr_14464 = state_14455;(statearr_14464[(7)] = inst_14441);
return statearr_14464;
})();var statearr_14465_14478 = state_14455__$1;(statearr_14465_14478[(2)] = null);
(statearr_14465_14478[(1)] = (2));
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
});})(c__10935__auto__))
;return ((function (switch__10870__auto__,c__10935__auto__){
return (function() {
var state_machine__10871__auto__ = null;
var state_machine__10871__auto____0 = (function (){var statearr_14469 = [null,null,null,null,null,null,null,null,null];(statearr_14469[(0)] = state_machine__10871__auto__);
(statearr_14469[(1)] = (1));
return statearr_14469;
});
var state_machine__10871__auto____1 = (function (state_14455){while(true){
var ret_value__10872__auto__ = (function (){try{while(true){
var result__10873__auto__ = switch__10870__auto__.call(null,state_14455);if(cljs.core.keyword_identical_QMARK_.call(null,result__10873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10873__auto__;
}
break;
}
}catch (e14470){if((e14470 instanceof Object))
{var ex__10874__auto__ = e14470;var statearr_14471_14479 = state_14455;(statearr_14471_14479[(5)] = ex__10874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14455);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14470;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14480 = state_14455;
state_14455 = G__14480;
continue;
}
} else
{return ret_value__10872__auto__;
}
break;
}
});
state_machine__10871__auto__ = function(state_14455){
switch(arguments.length){
case 0:
return state_machine__10871__auto____0.call(this);
case 1:
return state_machine__10871__auto____1.call(this,state_14455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10871__auto____0;
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10871__auto____1;
return state_machine__10871__auto__;
})()
;})(switch__10870__auto__,c__10935__auto__))
})();var state__10937__auto__ = (function (){var statearr_14472 = f__10936__auto__.call(null);(statearr_14472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10935__auto__);
return statearr_14472;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10937__auto__);
});})(c__10935__auto__))
);
return c__10935__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10935__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10935__auto__){
return (function (){var f__10936__auto__ = (function (){var switch__10870__auto__ = ((function (c__10935__auto__){
return (function (state_14554){var state_val_14555 = (state_14554[(1)]);if((state_val_14555 === (7)))
{var inst_14536 = (state_14554[(2)]);var state_14554__$1 = state_14554;var statearr_14556_14579 = state_14554__$1;(statearr_14556_14579[(2)] = inst_14536);
(statearr_14556_14579[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14555 === (1)))
{var inst_14530 = cljs.core.seq.call(null,coll);var inst_14531 = inst_14530;var state_14554__$1 = (function (){var statearr_14557 = state_14554;(statearr_14557[(7)] = inst_14531);
return statearr_14557;
})();var statearr_14558_14580 = state_14554__$1;(statearr_14558_14580[(2)] = null);
(statearr_14558_14580[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14555 === (4)))
{var inst_14531 = (state_14554[(7)]);var inst_14534 = cljs.core.first.call(null,inst_14531);var state_14554__$1 = state_14554;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14554__$1,(7),ch,inst_14534);
} else
{if((state_val_14555 === (13)))
{var inst_14548 = (state_14554[(2)]);var state_14554__$1 = state_14554;var statearr_14559_14581 = state_14554__$1;(statearr_14559_14581[(2)] = inst_14548);
(statearr_14559_14581[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14555 === (6)))
{var inst_14539 = (state_14554[(2)]);var state_14554__$1 = state_14554;if(cljs.core.truth_(inst_14539))
{var statearr_14560_14582 = state_14554__$1;(statearr_14560_14582[(1)] = (8));
} else
{var statearr_14561_14583 = state_14554__$1;(statearr_14561_14583[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14555 === (3)))
{var inst_14552 = (state_14554[(2)]);var state_14554__$1 = state_14554;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14554__$1,inst_14552);
} else
{if((state_val_14555 === (12)))
{var state_14554__$1 = state_14554;var statearr_14562_14584 = state_14554__$1;(statearr_14562_14584[(2)] = null);
(statearr_14562_14584[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14555 === (2)))
{var inst_14531 = (state_14554[(7)]);var state_14554__$1 = state_14554;if(cljs.core.truth_(inst_14531))
{var statearr_14563_14585 = state_14554__$1;(statearr_14563_14585[(1)] = (4));
} else
{var statearr_14564_14586 = state_14554__$1;(statearr_14564_14586[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14555 === (11)))
{var inst_14545 = cljs.core.async.close_BANG_.call(null,ch);var state_14554__$1 = state_14554;var statearr_14565_14587 = state_14554__$1;(statearr_14565_14587[(2)] = inst_14545);
(statearr_14565_14587[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14555 === (9)))
{var state_14554__$1 = state_14554;if(cljs.core.truth_(close_QMARK_))
{var statearr_14566_14588 = state_14554__$1;(statearr_14566_14588[(1)] = (11));
} else
{var statearr_14567_14589 = state_14554__$1;(statearr_14567_14589[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14555 === (5)))
{var inst_14531 = (state_14554[(7)]);var state_14554__$1 = state_14554;var statearr_14568_14590 = state_14554__$1;(statearr_14568_14590[(2)] = inst_14531);
(statearr_14568_14590[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14555 === (10)))
{var inst_14550 = (state_14554[(2)]);var state_14554__$1 = state_14554;var statearr_14569_14591 = state_14554__$1;(statearr_14569_14591[(2)] = inst_14550);
(statearr_14569_14591[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14555 === (8)))
{var inst_14531 = (state_14554[(7)]);var inst_14541 = cljs.core.next.call(null,inst_14531);var inst_14531__$1 = inst_14541;var state_14554__$1 = (function (){var statearr_14570 = state_14554;(statearr_14570[(7)] = inst_14531__$1);
return statearr_14570;
})();var statearr_14571_14592 = state_14554__$1;(statearr_14571_14592[(2)] = null);
(statearr_14571_14592[(1)] = (2));
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
});})(c__10935__auto__))
;return ((function (switch__10870__auto__,c__10935__auto__){
return (function() {
var state_machine__10871__auto__ = null;
var state_machine__10871__auto____0 = (function (){var statearr_14575 = [null,null,null,null,null,null,null,null];(statearr_14575[(0)] = state_machine__10871__auto__);
(statearr_14575[(1)] = (1));
return statearr_14575;
});
var state_machine__10871__auto____1 = (function (state_14554){while(true){
var ret_value__10872__auto__ = (function (){try{while(true){
var result__10873__auto__ = switch__10870__auto__.call(null,state_14554);if(cljs.core.keyword_identical_QMARK_.call(null,result__10873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10873__auto__;
}
break;
}
}catch (e14576){if((e14576 instanceof Object))
{var ex__10874__auto__ = e14576;var statearr_14577_14593 = state_14554;(statearr_14577_14593[(5)] = ex__10874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14554);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14576;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14594 = state_14554;
state_14554 = G__14594;
continue;
}
} else
{return ret_value__10872__auto__;
}
break;
}
});
state_machine__10871__auto__ = function(state_14554){
switch(arguments.length){
case 0:
return state_machine__10871__auto____0.call(this);
case 1:
return state_machine__10871__auto____1.call(this,state_14554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10871__auto____0;
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10871__auto____1;
return state_machine__10871__auto__;
})()
;})(switch__10870__auto__,c__10935__auto__))
})();var state__10937__auto__ = (function (){var statearr_14578 = f__10936__auto__.call(null);(statearr_14578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10935__auto__);
return statearr_14578;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10937__auto__);
});})(c__10935__auto__))
);
return c__10935__auto__;
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
cljs.core.async.Mux = (function (){var obj14596 = {};return obj14596;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__8029__auto__ = _;if(and__8029__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__8029__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8677__auto__ = (((_ == null))?null:_);return (function (){var or__8041__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8677__auto__)]);if(or__8041__auto__)
{return or__8041__auto__;
} else
{var or__8041__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__8041__auto____$1)
{return or__8041__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj14598 = {};return obj14598;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__8029__auto__ = m;if(and__8029__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__8029__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8677__auto__ = (((m == null))?null:m);return (function (){var or__8041__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8677__auto__)]);if(or__8041__auto__)
{return or__8041__auto__;
} else
{var or__8041__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__8041__auto____$1)
{return or__8041__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__8029__auto__ = m;if(and__8029__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__8029__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8677__auto__ = (((m == null))?null:m);return (function (){var or__8041__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8677__auto__)]);if(or__8041__auto__)
{return or__8041__auto__;
} else
{var or__8041__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__8041__auto____$1)
{return or__8041__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__8029__auto__ = m;if(and__8029__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__8029__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8677__auto__ = (((m == null))?null:m);return (function (){var or__8041__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8677__auto__)]);if(or__8041__auto__)
{return or__8041__auto__;
} else
{var or__8041__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__8041__auto____$1)
{return or__8041__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14820 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14820 = (function (cs,ch,mult,meta14821){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14821 = meta14821;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14820.cljs$lang$type = true;
cljs.core.async.t14820.cljs$lang$ctorStr = "cljs.core.async/t14820";
cljs.core.async.t14820.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){return cljs.core._write.call(null,writer__8618__auto__,"cljs.core.async/t14820");
});})(cs))
;
cljs.core.async.t14820.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14820.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14820.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14820.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14820.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14820.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14820.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14822){var self__ = this;
var _14822__$1 = this;return self__.meta14821;
});})(cs))
;
cljs.core.async.t14820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14822,meta14821__$1){var self__ = this;
var _14822__$1 = this;return (new cljs.core.async.t14820(self__.cs,self__.ch,self__.mult,meta14821__$1));
});})(cs))
;
cljs.core.async.__GT_t14820 = ((function (cs){
return (function __GT_t14820(cs__$1,ch__$1,mult__$1,meta14821){return (new cljs.core.async.t14820(cs__$1,ch__$1,mult__$1,meta14821));
});})(cs))
;
}
return (new cljs.core.async.t14820(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10935__auto___15041 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10935__auto___15041,cs,m,dchan,dctr,done){
return (function (){var f__10936__auto__ = (function (){var switch__10870__auto__ = ((function (c__10935__auto___15041,cs,m,dchan,dctr,done){
return (function (state_14953){var state_val_14954 = (state_14953[(1)]);if((state_val_14954 === (7)))
{var inst_14949 = (state_14953[(2)]);var state_14953__$1 = state_14953;var statearr_14955_15042 = state_14953__$1;(statearr_14955_15042[(2)] = inst_14949);
(statearr_14955_15042[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (20)))
{var inst_14854 = (state_14953[(7)]);var inst_14864 = cljs.core.first.call(null,inst_14854);var inst_14865 = cljs.core.nth.call(null,inst_14864,(0),null);var inst_14866 = cljs.core.nth.call(null,inst_14864,(1),null);var state_14953__$1 = (function (){var statearr_14956 = state_14953;(statearr_14956[(8)] = inst_14865);
return statearr_14956;
})();if(cljs.core.truth_(inst_14866))
{var statearr_14957_15043 = state_14953__$1;(statearr_14957_15043[(1)] = (22));
} else
{var statearr_14958_15044 = state_14953__$1;(statearr_14958_15044[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (27)))
{var inst_14825 = (state_14953[(9)]);var inst_14896 = (state_14953[(10)]);var inst_14901 = (state_14953[(11)]);var inst_14894 = (state_14953[(12)]);var inst_14901__$1 = cljs.core._nth.call(null,inst_14894,inst_14896);var inst_14902 = cljs.core.async.put_BANG_.call(null,inst_14901__$1,inst_14825,done);var state_14953__$1 = (function (){var statearr_14959 = state_14953;(statearr_14959[(11)] = inst_14901__$1);
return statearr_14959;
})();if(cljs.core.truth_(inst_14902))
{var statearr_14960_15045 = state_14953__$1;(statearr_14960_15045[(1)] = (30));
} else
{var statearr_14961_15046 = state_14953__$1;(statearr_14961_15046[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (1)))
{var state_14953__$1 = state_14953;var statearr_14962_15047 = state_14953__$1;(statearr_14962_15047[(2)] = null);
(statearr_14962_15047[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (24)))
{var inst_14854 = (state_14953[(7)]);var inst_14871 = (state_14953[(2)]);var inst_14872 = cljs.core.next.call(null,inst_14854);var inst_14834 = inst_14872;var inst_14835 = null;var inst_14836 = (0);var inst_14837 = (0);var state_14953__$1 = (function (){var statearr_14963 = state_14953;(statearr_14963[(13)] = inst_14835);
(statearr_14963[(14)] = inst_14836);
(statearr_14963[(15)] = inst_14837);
(statearr_14963[(16)] = inst_14834);
(statearr_14963[(17)] = inst_14871);
return statearr_14963;
})();var statearr_14964_15048 = state_14953__$1;(statearr_14964_15048[(2)] = null);
(statearr_14964_15048[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (39)))
{var state_14953__$1 = state_14953;var statearr_14968_15049 = state_14953__$1;(statearr_14968_15049[(2)] = null);
(statearr_14968_15049[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (4)))
{var inst_14825 = (state_14953[(9)]);var inst_14825__$1 = (state_14953[(2)]);var inst_14826 = (inst_14825__$1 == null);var state_14953__$1 = (function (){var statearr_14969 = state_14953;(statearr_14969[(9)] = inst_14825__$1);
return statearr_14969;
})();if(cljs.core.truth_(inst_14826))
{var statearr_14970_15050 = state_14953__$1;(statearr_14970_15050[(1)] = (5));
} else
{var statearr_14971_15051 = state_14953__$1;(statearr_14971_15051[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (15)))
{var inst_14835 = (state_14953[(13)]);var inst_14836 = (state_14953[(14)]);var inst_14837 = (state_14953[(15)]);var inst_14834 = (state_14953[(16)]);var inst_14850 = (state_14953[(2)]);var inst_14851 = (inst_14837 + (1));var tmp14965 = inst_14835;var tmp14966 = inst_14836;var tmp14967 = inst_14834;var inst_14834__$1 = tmp14967;var inst_14835__$1 = tmp14965;var inst_14836__$1 = tmp14966;var inst_14837__$1 = inst_14851;var state_14953__$1 = (function (){var statearr_14972 = state_14953;(statearr_14972[(13)] = inst_14835__$1);
(statearr_14972[(14)] = inst_14836__$1);
(statearr_14972[(15)] = inst_14837__$1);
(statearr_14972[(16)] = inst_14834__$1);
(statearr_14972[(18)] = inst_14850);
return statearr_14972;
})();var statearr_14973_15052 = state_14953__$1;(statearr_14973_15052[(2)] = null);
(statearr_14973_15052[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (21)))
{var inst_14875 = (state_14953[(2)]);var state_14953__$1 = state_14953;var statearr_14977_15053 = state_14953__$1;(statearr_14977_15053[(2)] = inst_14875);
(statearr_14977_15053[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (31)))
{var inst_14901 = (state_14953[(11)]);var inst_14905 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14906 = cljs.core.async.untap_STAR_.call(null,m,inst_14901);var state_14953__$1 = (function (){var statearr_14978 = state_14953;(statearr_14978[(19)] = inst_14905);
return statearr_14978;
})();var statearr_14979_15054 = state_14953__$1;(statearr_14979_15054[(2)] = inst_14906);
(statearr_14979_15054[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (32)))
{var inst_14896 = (state_14953[(10)]);var inst_14895 = (state_14953[(20)]);var inst_14893 = (state_14953[(21)]);var inst_14894 = (state_14953[(12)]);var inst_14908 = (state_14953[(2)]);var inst_14909 = (inst_14896 + (1));var tmp14974 = inst_14895;var tmp14975 = inst_14893;var tmp14976 = inst_14894;var inst_14893__$1 = tmp14975;var inst_14894__$1 = tmp14976;var inst_14895__$1 = tmp14974;var inst_14896__$1 = inst_14909;var state_14953__$1 = (function (){var statearr_14980 = state_14953;(statearr_14980[(10)] = inst_14896__$1);
(statearr_14980[(22)] = inst_14908);
(statearr_14980[(20)] = inst_14895__$1);
(statearr_14980[(21)] = inst_14893__$1);
(statearr_14980[(12)] = inst_14894__$1);
return statearr_14980;
})();var statearr_14981_15055 = state_14953__$1;(statearr_14981_15055[(2)] = null);
(statearr_14981_15055[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (40)))
{var inst_14921 = (state_14953[(23)]);var inst_14925 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14926 = cljs.core.async.untap_STAR_.call(null,m,inst_14921);var state_14953__$1 = (function (){var statearr_14982 = state_14953;(statearr_14982[(24)] = inst_14925);
return statearr_14982;
})();var statearr_14983_15056 = state_14953__$1;(statearr_14983_15056[(2)] = inst_14926);
(statearr_14983_15056[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (33)))
{var inst_14912 = (state_14953[(25)]);var inst_14914 = cljs.core.chunked_seq_QMARK_.call(null,inst_14912);var state_14953__$1 = state_14953;if(inst_14914)
{var statearr_14984_15057 = state_14953__$1;(statearr_14984_15057[(1)] = (36));
} else
{var statearr_14985_15058 = state_14953__$1;(statearr_14985_15058[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (13)))
{var inst_14844 = (state_14953[(26)]);var inst_14847 = cljs.core.async.close_BANG_.call(null,inst_14844);var state_14953__$1 = state_14953;var statearr_14986_15059 = state_14953__$1;(statearr_14986_15059[(2)] = inst_14847);
(statearr_14986_15059[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (22)))
{var inst_14865 = (state_14953[(8)]);var inst_14868 = cljs.core.async.close_BANG_.call(null,inst_14865);var state_14953__$1 = state_14953;var statearr_14987_15060 = state_14953__$1;(statearr_14987_15060[(2)] = inst_14868);
(statearr_14987_15060[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (36)))
{var inst_14912 = (state_14953[(25)]);var inst_14916 = cljs.core.chunk_first.call(null,inst_14912);var inst_14917 = cljs.core.chunk_rest.call(null,inst_14912);var inst_14918 = cljs.core.count.call(null,inst_14916);var inst_14893 = inst_14917;var inst_14894 = inst_14916;var inst_14895 = inst_14918;var inst_14896 = (0);var state_14953__$1 = (function (){var statearr_14988 = state_14953;(statearr_14988[(10)] = inst_14896);
(statearr_14988[(20)] = inst_14895);
(statearr_14988[(21)] = inst_14893);
(statearr_14988[(12)] = inst_14894);
return statearr_14988;
})();var statearr_14989_15061 = state_14953__$1;(statearr_14989_15061[(2)] = null);
(statearr_14989_15061[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (41)))
{var inst_14912 = (state_14953[(25)]);var inst_14928 = (state_14953[(2)]);var inst_14929 = cljs.core.next.call(null,inst_14912);var inst_14893 = inst_14929;var inst_14894 = null;var inst_14895 = (0);var inst_14896 = (0);var state_14953__$1 = (function (){var statearr_14990 = state_14953;(statearr_14990[(10)] = inst_14896);
(statearr_14990[(20)] = inst_14895);
(statearr_14990[(27)] = inst_14928);
(statearr_14990[(21)] = inst_14893);
(statearr_14990[(12)] = inst_14894);
return statearr_14990;
})();var statearr_14991_15062 = state_14953__$1;(statearr_14991_15062[(2)] = null);
(statearr_14991_15062[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (43)))
{var state_14953__$1 = state_14953;var statearr_14992_15063 = state_14953__$1;(statearr_14992_15063[(2)] = null);
(statearr_14992_15063[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (29)))
{var inst_14937 = (state_14953[(2)]);var state_14953__$1 = state_14953;var statearr_14993_15064 = state_14953__$1;(statearr_14993_15064[(2)] = inst_14937);
(statearr_14993_15064[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (44)))
{var inst_14946 = (state_14953[(2)]);var state_14953__$1 = (function (){var statearr_14994 = state_14953;(statearr_14994[(28)] = inst_14946);
return statearr_14994;
})();var statearr_14995_15065 = state_14953__$1;(statearr_14995_15065[(2)] = null);
(statearr_14995_15065[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (6)))
{var inst_14885 = (state_14953[(29)]);var inst_14884 = cljs.core.deref.call(null,cs);var inst_14885__$1 = cljs.core.keys.call(null,inst_14884);var inst_14886 = cljs.core.count.call(null,inst_14885__$1);var inst_14887 = cljs.core.reset_BANG_.call(null,dctr,inst_14886);var inst_14892 = cljs.core.seq.call(null,inst_14885__$1);var inst_14893 = inst_14892;var inst_14894 = null;var inst_14895 = (0);var inst_14896 = (0);var state_14953__$1 = (function (){var statearr_14996 = state_14953;(statearr_14996[(10)] = inst_14896);
(statearr_14996[(30)] = inst_14887);
(statearr_14996[(20)] = inst_14895);
(statearr_14996[(21)] = inst_14893);
(statearr_14996[(29)] = inst_14885__$1);
(statearr_14996[(12)] = inst_14894);
return statearr_14996;
})();var statearr_14997_15066 = state_14953__$1;(statearr_14997_15066[(2)] = null);
(statearr_14997_15066[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (28)))
{var inst_14912 = (state_14953[(25)]);var inst_14893 = (state_14953[(21)]);var inst_14912__$1 = cljs.core.seq.call(null,inst_14893);var state_14953__$1 = (function (){var statearr_14998 = state_14953;(statearr_14998[(25)] = inst_14912__$1);
return statearr_14998;
})();if(inst_14912__$1)
{var statearr_14999_15067 = state_14953__$1;(statearr_14999_15067[(1)] = (33));
} else
{var statearr_15000_15068 = state_14953__$1;(statearr_15000_15068[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (25)))
{var inst_14896 = (state_14953[(10)]);var inst_14895 = (state_14953[(20)]);var inst_14898 = (inst_14896 < inst_14895);var inst_14899 = inst_14898;var state_14953__$1 = state_14953;if(cljs.core.truth_(inst_14899))
{var statearr_15001_15069 = state_14953__$1;(statearr_15001_15069[(1)] = (27));
} else
{var statearr_15002_15070 = state_14953__$1;(statearr_15002_15070[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (34)))
{var state_14953__$1 = state_14953;var statearr_15003_15071 = state_14953__$1;(statearr_15003_15071[(2)] = null);
(statearr_15003_15071[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (17)))
{var state_14953__$1 = state_14953;var statearr_15004_15072 = state_14953__$1;(statearr_15004_15072[(2)] = null);
(statearr_15004_15072[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (3)))
{var inst_14951 = (state_14953[(2)]);var state_14953__$1 = state_14953;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14953__$1,inst_14951);
} else
{if((state_val_14954 === (12)))
{var inst_14880 = (state_14953[(2)]);var state_14953__$1 = state_14953;var statearr_15005_15073 = state_14953__$1;(statearr_15005_15073[(2)] = inst_14880);
(statearr_15005_15073[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (2)))
{var state_14953__$1 = state_14953;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14953__$1,(4),ch);
} else
{if((state_val_14954 === (23)))
{var state_14953__$1 = state_14953;var statearr_15006_15074 = state_14953__$1;(statearr_15006_15074[(2)] = null);
(statearr_15006_15074[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (35)))
{var inst_14935 = (state_14953[(2)]);var state_14953__$1 = state_14953;var statearr_15007_15075 = state_14953__$1;(statearr_15007_15075[(2)] = inst_14935);
(statearr_15007_15075[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (19)))
{var inst_14854 = (state_14953[(7)]);var inst_14858 = cljs.core.chunk_first.call(null,inst_14854);var inst_14859 = cljs.core.chunk_rest.call(null,inst_14854);var inst_14860 = cljs.core.count.call(null,inst_14858);var inst_14834 = inst_14859;var inst_14835 = inst_14858;var inst_14836 = inst_14860;var inst_14837 = (0);var state_14953__$1 = (function (){var statearr_15008 = state_14953;(statearr_15008[(13)] = inst_14835);
(statearr_15008[(14)] = inst_14836);
(statearr_15008[(15)] = inst_14837);
(statearr_15008[(16)] = inst_14834);
return statearr_15008;
})();var statearr_15009_15076 = state_14953__$1;(statearr_15009_15076[(2)] = null);
(statearr_15009_15076[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (11)))
{var inst_14854 = (state_14953[(7)]);var inst_14834 = (state_14953[(16)]);var inst_14854__$1 = cljs.core.seq.call(null,inst_14834);var state_14953__$1 = (function (){var statearr_15010 = state_14953;(statearr_15010[(7)] = inst_14854__$1);
return statearr_15010;
})();if(inst_14854__$1)
{var statearr_15011_15077 = state_14953__$1;(statearr_15011_15077[(1)] = (16));
} else
{var statearr_15012_15078 = state_14953__$1;(statearr_15012_15078[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (9)))
{var inst_14882 = (state_14953[(2)]);var state_14953__$1 = state_14953;var statearr_15013_15079 = state_14953__$1;(statearr_15013_15079[(2)] = inst_14882);
(statearr_15013_15079[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (5)))
{var inst_14832 = cljs.core.deref.call(null,cs);var inst_14833 = cljs.core.seq.call(null,inst_14832);var inst_14834 = inst_14833;var inst_14835 = null;var inst_14836 = (0);var inst_14837 = (0);var state_14953__$1 = (function (){var statearr_15014 = state_14953;(statearr_15014[(13)] = inst_14835);
(statearr_15014[(14)] = inst_14836);
(statearr_15014[(15)] = inst_14837);
(statearr_15014[(16)] = inst_14834);
return statearr_15014;
})();var statearr_15015_15080 = state_14953__$1;(statearr_15015_15080[(2)] = null);
(statearr_15015_15080[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (14)))
{var state_14953__$1 = state_14953;var statearr_15016_15081 = state_14953__$1;(statearr_15016_15081[(2)] = null);
(statearr_15016_15081[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (45)))
{var inst_14943 = (state_14953[(2)]);var state_14953__$1 = state_14953;var statearr_15017_15082 = state_14953__$1;(statearr_15017_15082[(2)] = inst_14943);
(statearr_15017_15082[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (26)))
{var inst_14885 = (state_14953[(29)]);var inst_14939 = (state_14953[(2)]);var inst_14940 = cljs.core.seq.call(null,inst_14885);var state_14953__$1 = (function (){var statearr_15018 = state_14953;(statearr_15018[(31)] = inst_14939);
return statearr_15018;
})();if(inst_14940)
{var statearr_15019_15083 = state_14953__$1;(statearr_15019_15083[(1)] = (42));
} else
{var statearr_15020_15084 = state_14953__$1;(statearr_15020_15084[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (16)))
{var inst_14854 = (state_14953[(7)]);var inst_14856 = cljs.core.chunked_seq_QMARK_.call(null,inst_14854);var state_14953__$1 = state_14953;if(inst_14856)
{var statearr_15021_15085 = state_14953__$1;(statearr_15021_15085[(1)] = (19));
} else
{var statearr_15022_15086 = state_14953__$1;(statearr_15022_15086[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (38)))
{var inst_14932 = (state_14953[(2)]);var state_14953__$1 = state_14953;var statearr_15023_15087 = state_14953__$1;(statearr_15023_15087[(2)] = inst_14932);
(statearr_15023_15087[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (30)))
{var state_14953__$1 = state_14953;var statearr_15024_15088 = state_14953__$1;(statearr_15024_15088[(2)] = null);
(statearr_15024_15088[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (10)))
{var inst_14835 = (state_14953[(13)]);var inst_14837 = (state_14953[(15)]);var inst_14843 = cljs.core._nth.call(null,inst_14835,inst_14837);var inst_14844 = cljs.core.nth.call(null,inst_14843,(0),null);var inst_14845 = cljs.core.nth.call(null,inst_14843,(1),null);var state_14953__$1 = (function (){var statearr_15025 = state_14953;(statearr_15025[(26)] = inst_14844);
return statearr_15025;
})();if(cljs.core.truth_(inst_14845))
{var statearr_15026_15089 = state_14953__$1;(statearr_15026_15089[(1)] = (13));
} else
{var statearr_15027_15090 = state_14953__$1;(statearr_15027_15090[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (18)))
{var inst_14878 = (state_14953[(2)]);var state_14953__$1 = state_14953;var statearr_15028_15091 = state_14953__$1;(statearr_15028_15091[(2)] = inst_14878);
(statearr_15028_15091[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (42)))
{var state_14953__$1 = state_14953;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14953__$1,(45),dchan);
} else
{if((state_val_14954 === (37)))
{var inst_14825 = (state_14953[(9)]);var inst_14912 = (state_14953[(25)]);var inst_14921 = (state_14953[(23)]);var inst_14921__$1 = cljs.core.first.call(null,inst_14912);var inst_14922 = cljs.core.async.put_BANG_.call(null,inst_14921__$1,inst_14825,done);var state_14953__$1 = (function (){var statearr_15029 = state_14953;(statearr_15029[(23)] = inst_14921__$1);
return statearr_15029;
})();if(cljs.core.truth_(inst_14922))
{var statearr_15030_15092 = state_14953__$1;(statearr_15030_15092[(1)] = (39));
} else
{var statearr_15031_15093 = state_14953__$1;(statearr_15031_15093[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (8)))
{var inst_14836 = (state_14953[(14)]);var inst_14837 = (state_14953[(15)]);var inst_14839 = (inst_14837 < inst_14836);var inst_14840 = inst_14839;var state_14953__$1 = state_14953;if(cljs.core.truth_(inst_14840))
{var statearr_15032_15094 = state_14953__$1;(statearr_15032_15094[(1)] = (10));
} else
{var statearr_15033_15095 = state_14953__$1;(statearr_15033_15095[(1)] = (11));
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
});})(c__10935__auto___15041,cs,m,dchan,dctr,done))
;return ((function (switch__10870__auto__,c__10935__auto___15041,cs,m,dchan,dctr,done){
return (function() {
var state_machine__10871__auto__ = null;
var state_machine__10871__auto____0 = (function (){var statearr_15037 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15037[(0)] = state_machine__10871__auto__);
(statearr_15037[(1)] = (1));
return statearr_15037;
});
var state_machine__10871__auto____1 = (function (state_14953){while(true){
var ret_value__10872__auto__ = (function (){try{while(true){
var result__10873__auto__ = switch__10870__auto__.call(null,state_14953);if(cljs.core.keyword_identical_QMARK_.call(null,result__10873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10873__auto__;
}
break;
}
}catch (e15038){if((e15038 instanceof Object))
{var ex__10874__auto__ = e15038;var statearr_15039_15096 = state_14953;(statearr_15039_15096[(5)] = ex__10874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14953);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15038;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15097 = state_14953;
state_14953 = G__15097;
continue;
}
} else
{return ret_value__10872__auto__;
}
break;
}
});
state_machine__10871__auto__ = function(state_14953){
switch(arguments.length){
case 0:
return state_machine__10871__auto____0.call(this);
case 1:
return state_machine__10871__auto____1.call(this,state_14953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10871__auto____0;
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10871__auto____1;
return state_machine__10871__auto__;
})()
;})(switch__10870__auto__,c__10935__auto___15041,cs,m,dchan,dctr,done))
})();var state__10937__auto__ = (function (){var statearr_15040 = f__10936__auto__.call(null);(statearr_15040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10935__auto___15041);
return statearr_15040;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10937__auto__);
});})(c__10935__auto___15041,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj15099 = {};return obj15099;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__8029__auto__ = m;if(and__8029__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__8029__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8677__auto__ = (((m == null))?null:m);return (function (){var or__8041__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8677__auto__)]);if(or__8041__auto__)
{return or__8041__auto__;
} else
{var or__8041__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__8041__auto____$1)
{return or__8041__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__8029__auto__ = m;if(and__8029__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__8029__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8677__auto__ = (((m == null))?null:m);return (function (){var or__8041__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8677__auto__)]);if(or__8041__auto__)
{return or__8041__auto__;
} else
{var or__8041__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__8041__auto____$1)
{return or__8041__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__8029__auto__ = m;if(and__8029__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__8029__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8677__auto__ = (((m == null))?null:m);return (function (){var or__8041__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8677__auto__)]);if(or__8041__auto__)
{return or__8041__auto__;
} else
{var or__8041__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__8041__auto____$1)
{return or__8041__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__8029__auto__ = m;if(and__8029__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__8029__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8677__auto__ = (((m == null))?null:m);return (function (){var or__8041__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8677__auto__)]);if(or__8041__auto__)
{return or__8041__auto__;
} else
{var or__8041__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__8041__auto____$1)
{return or__8041__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__8029__auto__ = m;if(and__8029__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__8029__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8677__auto__ = (((m == null))?null:m);return (function (){var or__8041__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8677__auto__)]);if(or__8041__auto__)
{return or__8041__auto__;
} else
{var or__8041__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__8041__auto____$1)
{return or__8041__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t15219 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15219 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15220){
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
this.meta15220 = meta15220;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15219.cljs$lang$type = true;
cljs.core.async.t15219.cljs$lang$ctorStr = "cljs.core.async/t15219";
cljs.core.async.t15219.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){return cljs.core._write.call(null,writer__8618__auto__,"cljs.core.async/t15219");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15219.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15219.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15219.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15219.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15219.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15219.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15219.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15219.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15219.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15221){var self__ = this;
var _15221__$1 = this;return self__.meta15220;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15221,meta15220__$1){var self__ = this;
var _15221__$1 = this;return (new cljs.core.async.t15219(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15220__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15219 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15219(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15220){return (new cljs.core.async.t15219(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15220));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15219(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__10935__auto___15338 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10935__auto___15338,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__10936__auto__ = (function (){var switch__10870__auto__ = ((function (c__10935__auto___15338,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15291){var state_val_15292 = (state_15291[(1)]);if((state_val_15292 === (7)))
{var inst_15235 = (state_15291[(7)]);var inst_15240 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15235);var state_15291__$1 = state_15291;var statearr_15293_15339 = state_15291__$1;(statearr_15293_15339[(2)] = inst_15240);
(statearr_15293_15339[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15292 === (20)))
{var inst_15250 = (state_15291[(8)]);var state_15291__$1 = state_15291;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15291__$1,(23),out,inst_15250);
} else
{if((state_val_15292 === (1)))
{var inst_15225 = (state_15291[(9)]);var inst_15225__$1 = calc_state.call(null);var inst_15226 = cljs.core.seq_QMARK_.call(null,inst_15225__$1);var state_15291__$1 = (function (){var statearr_15294 = state_15291;(statearr_15294[(9)] = inst_15225__$1);
return statearr_15294;
})();if(inst_15226)
{var statearr_15295_15340 = state_15291__$1;(statearr_15295_15340[(1)] = (2));
} else
{var statearr_15296_15341 = state_15291__$1;(statearr_15296_15341[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15292 === (24)))
{var inst_15243 = (state_15291[(10)]);var inst_15235 = inst_15243;var state_15291__$1 = (function (){var statearr_15297 = state_15291;(statearr_15297[(7)] = inst_15235);
return statearr_15297;
})();var statearr_15298_15342 = state_15291__$1;(statearr_15298_15342[(2)] = null);
(statearr_15298_15342[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15292 === (4)))
{var inst_15225 = (state_15291[(9)]);var inst_15231 = (state_15291[(2)]);var inst_15232 = cljs.core.get.call(null,inst_15231,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_15233 = cljs.core.get.call(null,inst_15231,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_15234 = cljs.core.get.call(null,inst_15231,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_15235 = inst_15225;var state_15291__$1 = (function (){var statearr_15299 = state_15291;(statearr_15299[(11)] = inst_15233);
(statearr_15299[(7)] = inst_15235);
(statearr_15299[(12)] = inst_15234);
(statearr_15299[(13)] = inst_15232);
return statearr_15299;
})();var statearr_15300_15343 = state_15291__$1;(statearr_15300_15343[(2)] = null);
(statearr_15300_15343[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15292 === (15)))
{var state_15291__$1 = state_15291;var statearr_15301_15344 = state_15291__$1;(statearr_15301_15344[(2)] = null);
(statearr_15301_15344[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15292 === (21)))
{var inst_15243 = (state_15291[(10)]);var inst_15235 = inst_15243;var state_15291__$1 = (function (){var statearr_15302 = state_15291;(statearr_15302[(7)] = inst_15235);
return statearr_15302;
})();var statearr_15303_15345 = state_15291__$1;(statearr_15303_15345[(2)] = null);
(statearr_15303_15345[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15292 === (13)))
{var inst_15287 = (state_15291[(2)]);var state_15291__$1 = state_15291;var statearr_15304_15346 = state_15291__$1;(statearr_15304_15346[(2)] = inst_15287);
(statearr_15304_15346[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15292 === (22)))
{var inst_15285 = (state_15291[(2)]);var state_15291__$1 = state_15291;var statearr_15305_15347 = state_15291__$1;(statearr_15305_15347[(2)] = inst_15285);
(statearr_15305_15347[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15292 === (6)))
{var inst_15289 = (state_15291[(2)]);var state_15291__$1 = state_15291;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15291__$1,inst_15289);
} else
{if((state_val_15292 === (25)))
{var state_15291__$1 = state_15291;var statearr_15306_15348 = state_15291__$1;(statearr_15306_15348[(2)] = null);
(statearr_15306_15348[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15292 === (17)))
{var inst_15265 = (state_15291[(14)]);var state_15291__$1 = state_15291;var statearr_15307_15349 = state_15291__$1;(statearr_15307_15349[(2)] = inst_15265);
(statearr_15307_15349[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15292 === (3)))
{var inst_15225 = (state_15291[(9)]);var state_15291__$1 = state_15291;var statearr_15308_15350 = state_15291__$1;(statearr_15308_15350[(2)] = inst_15225);
(statearr_15308_15350[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15292 === (12)))
{var inst_15265 = (state_15291[(14)]);var inst_15251 = (state_15291[(15)]);var inst_15246 = (state_15291[(16)]);var inst_15265__$1 = inst_15246.call(null,inst_15251);var state_15291__$1 = (function (){var statearr_15309 = state_15291;(statearr_15309[(14)] = inst_15265__$1);
return statearr_15309;
})();if(cljs.core.truth_(inst_15265__$1))
{var statearr_15310_15351 = state_15291__$1;(statearr_15310_15351[(1)] = (17));
} else
{var statearr_15311_15352 = state_15291__$1;(statearr_15311_15352[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15292 === (2)))
{var inst_15225 = (state_15291[(9)]);var inst_15228 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15225);var state_15291__$1 = state_15291;var statearr_15312_15353 = state_15291__$1;(statearr_15312_15353[(2)] = inst_15228);
(statearr_15312_15353[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15292 === (23)))
{var inst_15276 = (state_15291[(2)]);var state_15291__$1 = state_15291;if(cljs.core.truth_(inst_15276))
{var statearr_15313_15354 = state_15291__$1;(statearr_15313_15354[(1)] = (24));
} else
{var statearr_15314_15355 = state_15291__$1;(statearr_15314_15355[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15292 === (19)))
{var inst_15273 = (state_15291[(2)]);var state_15291__$1 = state_15291;if(cljs.core.truth_(inst_15273))
{var statearr_15315_15356 = state_15291__$1;(statearr_15315_15356[(1)] = (20));
} else
{var statearr_15316_15357 = state_15291__$1;(statearr_15316_15357[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15292 === (11)))
{var inst_15250 = (state_15291[(8)]);var inst_15256 = (inst_15250 == null);var state_15291__$1 = state_15291;if(cljs.core.truth_(inst_15256))
{var statearr_15317_15358 = state_15291__$1;(statearr_15317_15358[(1)] = (14));
} else
{var statearr_15318_15359 = state_15291__$1;(statearr_15318_15359[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15292 === (9)))
{var inst_15243 = (state_15291[(10)]);var inst_15243__$1 = (state_15291[(2)]);var inst_15244 = cljs.core.get.call(null,inst_15243__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_15245 = cljs.core.get.call(null,inst_15243__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_15246 = cljs.core.get.call(null,inst_15243__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_15291__$1 = (function (){var statearr_15319 = state_15291;(statearr_15319[(16)] = inst_15246);
(statearr_15319[(17)] = inst_15245);
(statearr_15319[(10)] = inst_15243__$1);
return statearr_15319;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15291__$1,(10),inst_15244);
} else
{if((state_val_15292 === (5)))
{var inst_15235 = (state_15291[(7)]);var inst_15238 = cljs.core.seq_QMARK_.call(null,inst_15235);var state_15291__$1 = state_15291;if(inst_15238)
{var statearr_15320_15360 = state_15291__$1;(statearr_15320_15360[(1)] = (7));
} else
{var statearr_15321_15361 = state_15291__$1;(statearr_15321_15361[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15292 === (14)))
{var inst_15251 = (state_15291[(15)]);var inst_15258 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15251);var state_15291__$1 = state_15291;var statearr_15322_15362 = state_15291__$1;(statearr_15322_15362[(2)] = inst_15258);
(statearr_15322_15362[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15292 === (26)))
{var inst_15281 = (state_15291[(2)]);var state_15291__$1 = state_15291;var statearr_15323_15363 = state_15291__$1;(statearr_15323_15363[(2)] = inst_15281);
(statearr_15323_15363[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15292 === (16)))
{var inst_15261 = (state_15291[(2)]);var inst_15262 = calc_state.call(null);var inst_15235 = inst_15262;var state_15291__$1 = (function (){var statearr_15324 = state_15291;(statearr_15324[(18)] = inst_15261);
(statearr_15324[(7)] = inst_15235);
return statearr_15324;
})();var statearr_15325_15364 = state_15291__$1;(statearr_15325_15364[(2)] = null);
(statearr_15325_15364[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15292 === (10)))
{var inst_15250 = (state_15291[(8)]);var inst_15251 = (state_15291[(15)]);var inst_15249 = (state_15291[(2)]);var inst_15250__$1 = cljs.core.nth.call(null,inst_15249,(0),null);var inst_15251__$1 = cljs.core.nth.call(null,inst_15249,(1),null);var inst_15252 = (inst_15250__$1 == null);var inst_15253 = cljs.core._EQ_.call(null,inst_15251__$1,change);var inst_15254 = (inst_15252) || (inst_15253);var state_15291__$1 = (function (){var statearr_15326 = state_15291;(statearr_15326[(8)] = inst_15250__$1);
(statearr_15326[(15)] = inst_15251__$1);
return statearr_15326;
})();if(cljs.core.truth_(inst_15254))
{var statearr_15327_15365 = state_15291__$1;(statearr_15327_15365[(1)] = (11));
} else
{var statearr_15328_15366 = state_15291__$1;(statearr_15328_15366[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15292 === (18)))
{var inst_15251 = (state_15291[(15)]);var inst_15246 = (state_15291[(16)]);var inst_15245 = (state_15291[(17)]);var inst_15268 = cljs.core.empty_QMARK_.call(null,inst_15246);var inst_15269 = inst_15245.call(null,inst_15251);var inst_15270 = cljs.core.not.call(null,inst_15269);var inst_15271 = (inst_15268) && (inst_15270);var state_15291__$1 = state_15291;var statearr_15329_15367 = state_15291__$1;(statearr_15329_15367[(2)] = inst_15271);
(statearr_15329_15367[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15292 === (8)))
{var inst_15235 = (state_15291[(7)]);var state_15291__$1 = state_15291;var statearr_15330_15368 = state_15291__$1;(statearr_15330_15368[(2)] = inst_15235);
(statearr_15330_15368[(1)] = (9));
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
});})(c__10935__auto___15338,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__10870__auto__,c__10935__auto___15338,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__10871__auto__ = null;
var state_machine__10871__auto____0 = (function (){var statearr_15334 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15334[(0)] = state_machine__10871__auto__);
(statearr_15334[(1)] = (1));
return statearr_15334;
});
var state_machine__10871__auto____1 = (function (state_15291){while(true){
var ret_value__10872__auto__ = (function (){try{while(true){
var result__10873__auto__ = switch__10870__auto__.call(null,state_15291);if(cljs.core.keyword_identical_QMARK_.call(null,result__10873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10873__auto__;
}
break;
}
}catch (e15335){if((e15335 instanceof Object))
{var ex__10874__auto__ = e15335;var statearr_15336_15369 = state_15291;(statearr_15336_15369[(5)] = ex__10874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15291);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15335;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15370 = state_15291;
state_15291 = G__15370;
continue;
}
} else
{return ret_value__10872__auto__;
}
break;
}
});
state_machine__10871__auto__ = function(state_15291){
switch(arguments.length){
case 0:
return state_machine__10871__auto____0.call(this);
case 1:
return state_machine__10871__auto____1.call(this,state_15291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10871__auto____0;
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10871__auto____1;
return state_machine__10871__auto__;
})()
;})(switch__10870__auto__,c__10935__auto___15338,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__10937__auto__ = (function (){var statearr_15337 = f__10936__auto__.call(null);(statearr_15337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10935__auto___15338);
return statearr_15337;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10937__auto__);
});})(c__10935__auto___15338,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj15372 = {};return obj15372;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__8029__auto__ = p;if(and__8029__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__8029__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8677__auto__ = (((p == null))?null:p);return (function (){var or__8041__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8677__auto__)]);if(or__8041__auto__)
{return or__8041__auto__;
} else
{var or__8041__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__8041__auto____$1)
{return or__8041__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__8029__auto__ = p;if(and__8029__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__8029__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8677__auto__ = (((p == null))?null:p);return (function (){var or__8041__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8677__auto__)]);if(or__8041__auto__)
{return or__8041__auto__;
} else
{var or__8041__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__8041__auto____$1)
{return or__8041__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__8029__auto__ = p;if(and__8029__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__8029__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8677__auto__ = (((p == null))?null:p);return (function (){var or__8041__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8677__auto__)]);if(or__8041__auto__)
{return or__8041__auto__;
} else
{var or__8041__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8041__auto____$1)
{return or__8041__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__8029__auto__ = p;if(and__8029__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__8029__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8677__auto__ = (((p == null))?null:p);return (function (){var or__8041__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8677__auto__)]);if(or__8041__auto__)
{return or__8041__auto__;
} else
{var or__8041__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8041__auto____$1)
{return or__8041__auto____$1;
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
return (function (topic){var or__8041__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__8041__auto__))
{return or__8041__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8041__auto__,mults){
return (function (p1__15373_SHARP_){if(cljs.core.truth_(p1__15373_SHARP_.call(null,topic)))
{return p1__15373_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15373_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8041__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15488 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15488 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15489){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15489 = meta15489;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15488.cljs$lang$type = true;
cljs.core.async.t15488.cljs$lang$ctorStr = "cljs.core.async/t15488";
cljs.core.async.t15488.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){return cljs.core._write.call(null,writer__8618__auto__,"cljs.core.async/t15488");
});})(mults,ensure_mult))
;
cljs.core.async.t15488.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15488.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15488.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15488.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15488.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15488.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15488.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15488.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15490){var self__ = this;
var _15490__$1 = this;return self__.meta15489;
});})(mults,ensure_mult))
;
cljs.core.async.t15488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15490,meta15489__$1){var self__ = this;
var _15490__$1 = this;return (new cljs.core.async.t15488(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15489__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15488 = ((function (mults,ensure_mult){
return (function __GT_t15488(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15489){return (new cljs.core.async.t15488(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15489));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15488(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10935__auto___15602 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10935__auto___15602,mults,ensure_mult,p){
return (function (){var f__10936__auto__ = (function (){var switch__10870__auto__ = ((function (c__10935__auto___15602,mults,ensure_mult,p){
return (function (state_15558){var state_val_15559 = (state_15558[(1)]);if((state_val_15559 === (7)))
{var inst_15554 = (state_15558[(2)]);var state_15558__$1 = state_15558;var statearr_15560_15603 = state_15558__$1;(statearr_15560_15603[(2)] = inst_15554);
(statearr_15560_15603[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15559 === (20)))
{var state_15558__$1 = state_15558;var statearr_15561_15604 = state_15558__$1;(statearr_15561_15604[(2)] = null);
(statearr_15561_15604[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15559 === (1)))
{var state_15558__$1 = state_15558;var statearr_15562_15605 = state_15558__$1;(statearr_15562_15605[(2)] = null);
(statearr_15562_15605[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15559 === (4)))
{var inst_15493 = (state_15558[(7)]);var inst_15493__$1 = (state_15558[(2)]);var inst_15494 = (inst_15493__$1 == null);var state_15558__$1 = (function (){var statearr_15563 = state_15558;(statearr_15563[(7)] = inst_15493__$1);
return statearr_15563;
})();if(cljs.core.truth_(inst_15494))
{var statearr_15564_15606 = state_15558__$1;(statearr_15564_15606[(1)] = (5));
} else
{var statearr_15565_15607 = state_15558__$1;(statearr_15565_15607[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15559 === (15)))
{var inst_15535 = (state_15558[(2)]);var state_15558__$1 = state_15558;var statearr_15566_15608 = state_15558__$1;(statearr_15566_15608[(2)] = inst_15535);
(statearr_15566_15608[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15559 === (21)))
{var inst_15541 = (state_15558[(8)]);var inst_15549 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15541);var state_15558__$1 = state_15558;var statearr_15567_15609 = state_15558__$1;(statearr_15567_15609[(2)] = inst_15549);
(statearr_15567_15609[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15559 === (13)))
{var inst_15517 = (state_15558[(9)]);var inst_15519 = cljs.core.chunked_seq_QMARK_.call(null,inst_15517);var state_15558__$1 = state_15558;if(inst_15519)
{var statearr_15568_15610 = state_15558__$1;(statearr_15568_15610[(1)] = (16));
} else
{var statearr_15569_15611 = state_15558__$1;(statearr_15569_15611[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15559 === (22)))
{var inst_15551 = (state_15558[(2)]);var state_15558__$1 = (function (){var statearr_15570 = state_15558;(statearr_15570[(10)] = inst_15551);
return statearr_15570;
})();var statearr_15571_15612 = state_15558__$1;(statearr_15571_15612[(2)] = null);
(statearr_15571_15612[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15559 === (6)))
{var inst_15541 = (state_15558[(8)]);var inst_15493 = (state_15558[(7)]);var inst_15541__$1 = topic_fn.call(null,inst_15493);var inst_15542 = cljs.core.deref.call(null,mults);var inst_15543 = cljs.core.get.call(null,inst_15542,inst_15541__$1);var inst_15544 = cljs.core.async.muxch_STAR_.call(null,inst_15543);var state_15558__$1 = (function (){var statearr_15572 = state_15558;(statearr_15572[(8)] = inst_15541__$1);
return statearr_15572;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15558__$1,(19),inst_15544,inst_15493);
} else
{if((state_val_15559 === (17)))
{var inst_15517 = (state_15558[(9)]);var inst_15526 = cljs.core.first.call(null,inst_15517);var inst_15527 = cljs.core.async.muxch_STAR_.call(null,inst_15526);var inst_15528 = cljs.core.async.close_BANG_.call(null,inst_15527);var inst_15529 = cljs.core.next.call(null,inst_15517);var inst_15503 = inst_15529;var inst_15504 = null;var inst_15505 = (0);var inst_15506 = (0);var state_15558__$1 = (function (){var statearr_15573 = state_15558;(statearr_15573[(11)] = inst_15528);
(statearr_15573[(12)] = inst_15506);
(statearr_15573[(13)] = inst_15505);
(statearr_15573[(14)] = inst_15504);
(statearr_15573[(15)] = inst_15503);
return statearr_15573;
})();var statearr_15574_15613 = state_15558__$1;(statearr_15574_15613[(2)] = null);
(statearr_15574_15613[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15559 === (3)))
{var inst_15556 = (state_15558[(2)]);var state_15558__$1 = state_15558;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15558__$1,inst_15556);
} else
{if((state_val_15559 === (12)))
{var inst_15537 = (state_15558[(2)]);var state_15558__$1 = state_15558;var statearr_15575_15614 = state_15558__$1;(statearr_15575_15614[(2)] = inst_15537);
(statearr_15575_15614[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15559 === (2)))
{var state_15558__$1 = state_15558;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15558__$1,(4),ch);
} else
{if((state_val_15559 === (19)))
{var inst_15546 = (state_15558[(2)]);var state_15558__$1 = state_15558;if(cljs.core.truth_(inst_15546))
{var statearr_15576_15615 = state_15558__$1;(statearr_15576_15615[(1)] = (20));
} else
{var statearr_15577_15616 = state_15558__$1;(statearr_15577_15616[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15559 === (11)))
{var inst_15517 = (state_15558[(9)]);var inst_15503 = (state_15558[(15)]);var inst_15517__$1 = cljs.core.seq.call(null,inst_15503);var state_15558__$1 = (function (){var statearr_15578 = state_15558;(statearr_15578[(9)] = inst_15517__$1);
return statearr_15578;
})();if(inst_15517__$1)
{var statearr_15579_15617 = state_15558__$1;(statearr_15579_15617[(1)] = (13));
} else
{var statearr_15580_15618 = state_15558__$1;(statearr_15580_15618[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15559 === (9)))
{var inst_15539 = (state_15558[(2)]);var state_15558__$1 = state_15558;var statearr_15581_15619 = state_15558__$1;(statearr_15581_15619[(2)] = inst_15539);
(statearr_15581_15619[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15559 === (5)))
{var inst_15500 = cljs.core.deref.call(null,mults);var inst_15501 = cljs.core.vals.call(null,inst_15500);var inst_15502 = cljs.core.seq.call(null,inst_15501);var inst_15503 = inst_15502;var inst_15504 = null;var inst_15505 = (0);var inst_15506 = (0);var state_15558__$1 = (function (){var statearr_15582 = state_15558;(statearr_15582[(12)] = inst_15506);
(statearr_15582[(13)] = inst_15505);
(statearr_15582[(14)] = inst_15504);
(statearr_15582[(15)] = inst_15503);
return statearr_15582;
})();var statearr_15583_15620 = state_15558__$1;(statearr_15583_15620[(2)] = null);
(statearr_15583_15620[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15559 === (14)))
{var state_15558__$1 = state_15558;var statearr_15587_15621 = state_15558__$1;(statearr_15587_15621[(2)] = null);
(statearr_15587_15621[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15559 === (16)))
{var inst_15517 = (state_15558[(9)]);var inst_15521 = cljs.core.chunk_first.call(null,inst_15517);var inst_15522 = cljs.core.chunk_rest.call(null,inst_15517);var inst_15523 = cljs.core.count.call(null,inst_15521);var inst_15503 = inst_15522;var inst_15504 = inst_15521;var inst_15505 = inst_15523;var inst_15506 = (0);var state_15558__$1 = (function (){var statearr_15588 = state_15558;(statearr_15588[(12)] = inst_15506);
(statearr_15588[(13)] = inst_15505);
(statearr_15588[(14)] = inst_15504);
(statearr_15588[(15)] = inst_15503);
return statearr_15588;
})();var statearr_15589_15622 = state_15558__$1;(statearr_15589_15622[(2)] = null);
(statearr_15589_15622[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15559 === (10)))
{var inst_15506 = (state_15558[(12)]);var inst_15505 = (state_15558[(13)]);var inst_15504 = (state_15558[(14)]);var inst_15503 = (state_15558[(15)]);var inst_15511 = cljs.core._nth.call(null,inst_15504,inst_15506);var inst_15512 = cljs.core.async.muxch_STAR_.call(null,inst_15511);var inst_15513 = cljs.core.async.close_BANG_.call(null,inst_15512);var inst_15514 = (inst_15506 + (1));var tmp15584 = inst_15505;var tmp15585 = inst_15504;var tmp15586 = inst_15503;var inst_15503__$1 = tmp15586;var inst_15504__$1 = tmp15585;var inst_15505__$1 = tmp15584;var inst_15506__$1 = inst_15514;var state_15558__$1 = (function (){var statearr_15590 = state_15558;(statearr_15590[(12)] = inst_15506__$1);
(statearr_15590[(13)] = inst_15505__$1);
(statearr_15590[(16)] = inst_15513);
(statearr_15590[(14)] = inst_15504__$1);
(statearr_15590[(15)] = inst_15503__$1);
return statearr_15590;
})();var statearr_15591_15623 = state_15558__$1;(statearr_15591_15623[(2)] = null);
(statearr_15591_15623[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15559 === (18)))
{var inst_15532 = (state_15558[(2)]);var state_15558__$1 = state_15558;var statearr_15592_15624 = state_15558__$1;(statearr_15592_15624[(2)] = inst_15532);
(statearr_15592_15624[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15559 === (8)))
{var inst_15506 = (state_15558[(12)]);var inst_15505 = (state_15558[(13)]);var inst_15508 = (inst_15506 < inst_15505);var inst_15509 = inst_15508;var state_15558__$1 = state_15558;if(cljs.core.truth_(inst_15509))
{var statearr_15593_15625 = state_15558__$1;(statearr_15593_15625[(1)] = (10));
} else
{var statearr_15594_15626 = state_15558__$1;(statearr_15594_15626[(1)] = (11));
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
});})(c__10935__auto___15602,mults,ensure_mult,p))
;return ((function (switch__10870__auto__,c__10935__auto___15602,mults,ensure_mult,p){
return (function() {
var state_machine__10871__auto__ = null;
var state_machine__10871__auto____0 = (function (){var statearr_15598 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15598[(0)] = state_machine__10871__auto__);
(statearr_15598[(1)] = (1));
return statearr_15598;
});
var state_machine__10871__auto____1 = (function (state_15558){while(true){
var ret_value__10872__auto__ = (function (){try{while(true){
var result__10873__auto__ = switch__10870__auto__.call(null,state_15558);if(cljs.core.keyword_identical_QMARK_.call(null,result__10873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10873__auto__;
}
break;
}
}catch (e15599){if((e15599 instanceof Object))
{var ex__10874__auto__ = e15599;var statearr_15600_15627 = state_15558;(statearr_15600_15627[(5)] = ex__10874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15558);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15599;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15628 = state_15558;
state_15558 = G__15628;
continue;
}
} else
{return ret_value__10872__auto__;
}
break;
}
});
state_machine__10871__auto__ = function(state_15558){
switch(arguments.length){
case 0:
return state_machine__10871__auto____0.call(this);
case 1:
return state_machine__10871__auto____1.call(this,state_15558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10871__auto____0;
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10871__auto____1;
return state_machine__10871__auto__;
})()
;})(switch__10870__auto__,c__10935__auto___15602,mults,ensure_mult,p))
})();var state__10937__auto__ = (function (){var statearr_15601 = f__10936__auto__.call(null);(statearr_15601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10935__auto___15602);
return statearr_15601;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10937__auto__);
});})(c__10935__auto___15602,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__10935__auto___15765 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10935__auto___15765,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__10936__auto__ = (function (){var switch__10870__auto__ = ((function (c__10935__auto___15765,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15735){var state_val_15736 = (state_15735[(1)]);if((state_val_15736 === (7)))
{var state_15735__$1 = state_15735;var statearr_15737_15766 = state_15735__$1;(statearr_15737_15766[(2)] = null);
(statearr_15737_15766[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15736 === (1)))
{var state_15735__$1 = state_15735;var statearr_15738_15767 = state_15735__$1;(statearr_15738_15767[(2)] = null);
(statearr_15738_15767[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15736 === (4)))
{var inst_15699 = (state_15735[(7)]);var inst_15701 = (inst_15699 < cnt);var state_15735__$1 = state_15735;if(cljs.core.truth_(inst_15701))
{var statearr_15739_15768 = state_15735__$1;(statearr_15739_15768[(1)] = (6));
} else
{var statearr_15740_15769 = state_15735__$1;(statearr_15740_15769[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15736 === (15)))
{var inst_15731 = (state_15735[(2)]);var state_15735__$1 = state_15735;var statearr_15741_15770 = state_15735__$1;(statearr_15741_15770[(2)] = inst_15731);
(statearr_15741_15770[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15736 === (13)))
{var inst_15724 = cljs.core.async.close_BANG_.call(null,out);var state_15735__$1 = state_15735;var statearr_15742_15771 = state_15735__$1;(statearr_15742_15771[(2)] = inst_15724);
(statearr_15742_15771[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15736 === (6)))
{var state_15735__$1 = state_15735;var statearr_15743_15772 = state_15735__$1;(statearr_15743_15772[(2)] = null);
(statearr_15743_15772[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15736 === (3)))
{var inst_15733 = (state_15735[(2)]);var state_15735__$1 = state_15735;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15735__$1,inst_15733);
} else
{if((state_val_15736 === (12)))
{var inst_15721 = (state_15735[(8)]);var inst_15721__$1 = (state_15735[(2)]);var inst_15722 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15721__$1);var state_15735__$1 = (function (){var statearr_15744 = state_15735;(statearr_15744[(8)] = inst_15721__$1);
return statearr_15744;
})();if(cljs.core.truth_(inst_15722))
{var statearr_15745_15773 = state_15735__$1;(statearr_15745_15773[(1)] = (13));
} else
{var statearr_15746_15774 = state_15735__$1;(statearr_15746_15774[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15736 === (2)))
{var inst_15698 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15699 = (0);var state_15735__$1 = (function (){var statearr_15747 = state_15735;(statearr_15747[(7)] = inst_15699);
(statearr_15747[(9)] = inst_15698);
return statearr_15747;
})();var statearr_15748_15775 = state_15735__$1;(statearr_15748_15775[(2)] = null);
(statearr_15748_15775[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15736 === (11)))
{var inst_15699 = (state_15735[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15735,(10),Object,null,(9));var inst_15708 = chs__$1.call(null,inst_15699);var inst_15709 = done.call(null,inst_15699);var inst_15710 = cljs.core.async.take_BANG_.call(null,inst_15708,inst_15709);var state_15735__$1 = state_15735;var statearr_15749_15776 = state_15735__$1;(statearr_15749_15776[(2)] = inst_15710);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15735__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15736 === (9)))
{var inst_15699 = (state_15735[(7)]);var inst_15712 = (state_15735[(2)]);var inst_15713 = (inst_15699 + (1));var inst_15699__$1 = inst_15713;var state_15735__$1 = (function (){var statearr_15750 = state_15735;(statearr_15750[(7)] = inst_15699__$1);
(statearr_15750[(10)] = inst_15712);
return statearr_15750;
})();var statearr_15751_15777 = state_15735__$1;(statearr_15751_15777[(2)] = null);
(statearr_15751_15777[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15736 === (5)))
{var inst_15719 = (state_15735[(2)]);var state_15735__$1 = (function (){var statearr_15752 = state_15735;(statearr_15752[(11)] = inst_15719);
return statearr_15752;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15735__$1,(12),dchan);
} else
{if((state_val_15736 === (14)))
{var inst_15721 = (state_15735[(8)]);var inst_15726 = cljs.core.apply.call(null,f,inst_15721);var state_15735__$1 = state_15735;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15735__$1,(16),out,inst_15726);
} else
{if((state_val_15736 === (16)))
{var inst_15728 = (state_15735[(2)]);var state_15735__$1 = (function (){var statearr_15753 = state_15735;(statearr_15753[(12)] = inst_15728);
return statearr_15753;
})();var statearr_15754_15778 = state_15735__$1;(statearr_15754_15778[(2)] = null);
(statearr_15754_15778[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15736 === (10)))
{var inst_15703 = (state_15735[(2)]);var inst_15704 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15735__$1 = (function (){var statearr_15755 = state_15735;(statearr_15755[(13)] = inst_15703);
return statearr_15755;
})();var statearr_15756_15779 = state_15735__$1;(statearr_15756_15779[(2)] = inst_15704);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15735__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15736 === (8)))
{var inst_15717 = (state_15735[(2)]);var state_15735__$1 = state_15735;var statearr_15757_15780 = state_15735__$1;(statearr_15757_15780[(2)] = inst_15717);
(statearr_15757_15780[(1)] = (5));
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
});})(c__10935__auto___15765,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__10870__auto__,c__10935__auto___15765,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__10871__auto__ = null;
var state_machine__10871__auto____0 = (function (){var statearr_15761 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15761[(0)] = state_machine__10871__auto__);
(statearr_15761[(1)] = (1));
return statearr_15761;
});
var state_machine__10871__auto____1 = (function (state_15735){while(true){
var ret_value__10872__auto__ = (function (){try{while(true){
var result__10873__auto__ = switch__10870__auto__.call(null,state_15735);if(cljs.core.keyword_identical_QMARK_.call(null,result__10873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10873__auto__;
}
break;
}
}catch (e15762){if((e15762 instanceof Object))
{var ex__10874__auto__ = e15762;var statearr_15763_15781 = state_15735;(statearr_15763_15781[(5)] = ex__10874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15735);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15762;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15782 = state_15735;
state_15735 = G__15782;
continue;
}
} else
{return ret_value__10872__auto__;
}
break;
}
});
state_machine__10871__auto__ = function(state_15735){
switch(arguments.length){
case 0:
return state_machine__10871__auto____0.call(this);
case 1:
return state_machine__10871__auto____1.call(this,state_15735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10871__auto____0;
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10871__auto____1;
return state_machine__10871__auto__;
})()
;})(switch__10870__auto__,c__10935__auto___15765,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__10937__auto__ = (function (){var statearr_15764 = f__10936__auto__.call(null);(statearr_15764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10935__auto___15765);
return statearr_15764;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10937__auto__);
});})(c__10935__auto___15765,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10935__auto___15890 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10935__auto___15890,out){
return (function (){var f__10936__auto__ = (function (){var switch__10870__auto__ = ((function (c__10935__auto___15890,out){
return (function (state_15866){var state_val_15867 = (state_15866[(1)]);if((state_val_15867 === (7)))
{var inst_15846 = (state_15866[(7)]);var inst_15845 = (state_15866[(8)]);var inst_15845__$1 = (state_15866[(2)]);var inst_15846__$1 = cljs.core.nth.call(null,inst_15845__$1,(0),null);var inst_15847 = cljs.core.nth.call(null,inst_15845__$1,(1),null);var inst_15848 = (inst_15846__$1 == null);var state_15866__$1 = (function (){var statearr_15868 = state_15866;(statearr_15868[(9)] = inst_15847);
(statearr_15868[(7)] = inst_15846__$1);
(statearr_15868[(8)] = inst_15845__$1);
return statearr_15868;
})();if(cljs.core.truth_(inst_15848))
{var statearr_15869_15891 = state_15866__$1;(statearr_15869_15891[(1)] = (8));
} else
{var statearr_15870_15892 = state_15866__$1;(statearr_15870_15892[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15867 === (1)))
{var inst_15837 = cljs.core.vec.call(null,chs);var inst_15838 = inst_15837;var state_15866__$1 = (function (){var statearr_15871 = state_15866;(statearr_15871[(10)] = inst_15838);
return statearr_15871;
})();var statearr_15872_15893 = state_15866__$1;(statearr_15872_15893[(2)] = null);
(statearr_15872_15893[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15867 === (4)))
{var inst_15838 = (state_15866[(10)]);var state_15866__$1 = state_15866;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15866__$1,(7),inst_15838);
} else
{if((state_val_15867 === (6)))
{var inst_15862 = (state_15866[(2)]);var state_15866__$1 = state_15866;var statearr_15873_15894 = state_15866__$1;(statearr_15873_15894[(2)] = inst_15862);
(statearr_15873_15894[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15867 === (3)))
{var inst_15864 = (state_15866[(2)]);var state_15866__$1 = state_15866;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15866__$1,inst_15864);
} else
{if((state_val_15867 === (2)))
{var inst_15838 = (state_15866[(10)]);var inst_15840 = cljs.core.count.call(null,inst_15838);var inst_15841 = (inst_15840 > (0));var state_15866__$1 = state_15866;if(cljs.core.truth_(inst_15841))
{var statearr_15875_15895 = state_15866__$1;(statearr_15875_15895[(1)] = (4));
} else
{var statearr_15876_15896 = state_15866__$1;(statearr_15876_15896[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15867 === (11)))
{var inst_15838 = (state_15866[(10)]);var inst_15855 = (state_15866[(2)]);var tmp15874 = inst_15838;var inst_15838__$1 = tmp15874;var state_15866__$1 = (function (){var statearr_15877 = state_15866;(statearr_15877[(10)] = inst_15838__$1);
(statearr_15877[(11)] = inst_15855);
return statearr_15877;
})();var statearr_15878_15897 = state_15866__$1;(statearr_15878_15897[(2)] = null);
(statearr_15878_15897[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15867 === (9)))
{var inst_15846 = (state_15866[(7)]);var state_15866__$1 = state_15866;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15866__$1,(11),out,inst_15846);
} else
{if((state_val_15867 === (5)))
{var inst_15860 = cljs.core.async.close_BANG_.call(null,out);var state_15866__$1 = state_15866;var statearr_15879_15898 = state_15866__$1;(statearr_15879_15898[(2)] = inst_15860);
(statearr_15879_15898[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15867 === (10)))
{var inst_15858 = (state_15866[(2)]);var state_15866__$1 = state_15866;var statearr_15880_15899 = state_15866__$1;(statearr_15880_15899[(2)] = inst_15858);
(statearr_15880_15899[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15867 === (8)))
{var inst_15838 = (state_15866[(10)]);var inst_15847 = (state_15866[(9)]);var inst_15846 = (state_15866[(7)]);var inst_15845 = (state_15866[(8)]);var inst_15850 = (function (){var c = inst_15847;var v = inst_15846;var vec__15843 = inst_15845;var cs = inst_15838;return ((function (c,v,vec__15843,cs,inst_15838,inst_15847,inst_15846,inst_15845,state_val_15867,c__10935__auto___15890,out){
return (function (p1__15783_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15783_SHARP_);
});
;})(c,v,vec__15843,cs,inst_15838,inst_15847,inst_15846,inst_15845,state_val_15867,c__10935__auto___15890,out))
})();var inst_15851 = cljs.core.filterv.call(null,inst_15850,inst_15838);var inst_15838__$1 = inst_15851;var state_15866__$1 = (function (){var statearr_15881 = state_15866;(statearr_15881[(10)] = inst_15838__$1);
return statearr_15881;
})();var statearr_15882_15900 = state_15866__$1;(statearr_15882_15900[(2)] = null);
(statearr_15882_15900[(1)] = (2));
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
});})(c__10935__auto___15890,out))
;return ((function (switch__10870__auto__,c__10935__auto___15890,out){
return (function() {
var state_machine__10871__auto__ = null;
var state_machine__10871__auto____0 = (function (){var statearr_15886 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15886[(0)] = state_machine__10871__auto__);
(statearr_15886[(1)] = (1));
return statearr_15886;
});
var state_machine__10871__auto____1 = (function (state_15866){while(true){
var ret_value__10872__auto__ = (function (){try{while(true){
var result__10873__auto__ = switch__10870__auto__.call(null,state_15866);if(cljs.core.keyword_identical_QMARK_.call(null,result__10873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10873__auto__;
}
break;
}
}catch (e15887){if((e15887 instanceof Object))
{var ex__10874__auto__ = e15887;var statearr_15888_15901 = state_15866;(statearr_15888_15901[(5)] = ex__10874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15866);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15887;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15902 = state_15866;
state_15866 = G__15902;
continue;
}
} else
{return ret_value__10872__auto__;
}
break;
}
});
state_machine__10871__auto__ = function(state_15866){
switch(arguments.length){
case 0:
return state_machine__10871__auto____0.call(this);
case 1:
return state_machine__10871__auto____1.call(this,state_15866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10871__auto____0;
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10871__auto____1;
return state_machine__10871__auto__;
})()
;})(switch__10870__auto__,c__10935__auto___15890,out))
})();var state__10937__auto__ = (function (){var statearr_15889 = f__10936__auto__.call(null);(statearr_15889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10935__auto___15890);
return statearr_15889;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10937__auto__);
});})(c__10935__auto___15890,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10935__auto___15995 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10935__auto___15995,out){
return (function (){var f__10936__auto__ = (function (){var switch__10870__auto__ = ((function (c__10935__auto___15995,out){
return (function (state_15972){var state_val_15973 = (state_15972[(1)]);if((state_val_15973 === (7)))
{var inst_15954 = (state_15972[(7)]);var inst_15954__$1 = (state_15972[(2)]);var inst_15955 = (inst_15954__$1 == null);var inst_15956 = cljs.core.not.call(null,inst_15955);var state_15972__$1 = (function (){var statearr_15974 = state_15972;(statearr_15974[(7)] = inst_15954__$1);
return statearr_15974;
})();if(inst_15956)
{var statearr_15975_15996 = state_15972__$1;(statearr_15975_15996[(1)] = (8));
} else
{var statearr_15976_15997 = state_15972__$1;(statearr_15976_15997[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15973 === (1)))
{var inst_15949 = (0);var state_15972__$1 = (function (){var statearr_15977 = state_15972;(statearr_15977[(8)] = inst_15949);
return statearr_15977;
})();var statearr_15978_15998 = state_15972__$1;(statearr_15978_15998[(2)] = null);
(statearr_15978_15998[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15973 === (4)))
{var state_15972__$1 = state_15972;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15972__$1,(7),ch);
} else
{if((state_val_15973 === (6)))
{var inst_15967 = (state_15972[(2)]);var state_15972__$1 = state_15972;var statearr_15979_15999 = state_15972__$1;(statearr_15979_15999[(2)] = inst_15967);
(statearr_15979_15999[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15973 === (3)))
{var inst_15969 = (state_15972[(2)]);var inst_15970 = cljs.core.async.close_BANG_.call(null,out);var state_15972__$1 = (function (){var statearr_15980 = state_15972;(statearr_15980[(9)] = inst_15969);
return statearr_15980;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15972__$1,inst_15970);
} else
{if((state_val_15973 === (2)))
{var inst_15949 = (state_15972[(8)]);var inst_15951 = (inst_15949 < n);var state_15972__$1 = state_15972;if(cljs.core.truth_(inst_15951))
{var statearr_15981_16000 = state_15972__$1;(statearr_15981_16000[(1)] = (4));
} else
{var statearr_15982_16001 = state_15972__$1;(statearr_15982_16001[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15973 === (11)))
{var inst_15949 = (state_15972[(8)]);var inst_15959 = (state_15972[(2)]);var inst_15960 = (inst_15949 + (1));var inst_15949__$1 = inst_15960;var state_15972__$1 = (function (){var statearr_15983 = state_15972;(statearr_15983[(10)] = inst_15959);
(statearr_15983[(8)] = inst_15949__$1);
return statearr_15983;
})();var statearr_15984_16002 = state_15972__$1;(statearr_15984_16002[(2)] = null);
(statearr_15984_16002[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15973 === (9)))
{var state_15972__$1 = state_15972;var statearr_15985_16003 = state_15972__$1;(statearr_15985_16003[(2)] = null);
(statearr_15985_16003[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15973 === (5)))
{var state_15972__$1 = state_15972;var statearr_15986_16004 = state_15972__$1;(statearr_15986_16004[(2)] = null);
(statearr_15986_16004[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15973 === (10)))
{var inst_15964 = (state_15972[(2)]);var state_15972__$1 = state_15972;var statearr_15987_16005 = state_15972__$1;(statearr_15987_16005[(2)] = inst_15964);
(statearr_15987_16005[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15973 === (8)))
{var inst_15954 = (state_15972[(7)]);var state_15972__$1 = state_15972;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15972__$1,(11),out,inst_15954);
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
});})(c__10935__auto___15995,out))
;return ((function (switch__10870__auto__,c__10935__auto___15995,out){
return (function() {
var state_machine__10871__auto__ = null;
var state_machine__10871__auto____0 = (function (){var statearr_15991 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15991[(0)] = state_machine__10871__auto__);
(statearr_15991[(1)] = (1));
return statearr_15991;
});
var state_machine__10871__auto____1 = (function (state_15972){while(true){
var ret_value__10872__auto__ = (function (){try{while(true){
var result__10873__auto__ = switch__10870__auto__.call(null,state_15972);if(cljs.core.keyword_identical_QMARK_.call(null,result__10873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10873__auto__;
}
break;
}
}catch (e15992){if((e15992 instanceof Object))
{var ex__10874__auto__ = e15992;var statearr_15993_16006 = state_15972;(statearr_15993_16006[(5)] = ex__10874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15972);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15992;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16007 = state_15972;
state_15972 = G__16007;
continue;
}
} else
{return ret_value__10872__auto__;
}
break;
}
});
state_machine__10871__auto__ = function(state_15972){
switch(arguments.length){
case 0:
return state_machine__10871__auto____0.call(this);
case 1:
return state_machine__10871__auto____1.call(this,state_15972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10871__auto____0;
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10871__auto____1;
return state_machine__10871__auto__;
})()
;})(switch__10870__auto__,c__10935__auto___15995,out))
})();var state__10937__auto__ = (function (){var statearr_15994 = f__10936__auto__.call(null);(statearr_15994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10935__auto___15995);
return statearr_15994;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10937__auto__);
});})(c__10935__auto___15995,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10935__auto___16104 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10935__auto___16104,out){
return (function (){var f__10936__auto__ = (function (){var switch__10870__auto__ = ((function (c__10935__auto___16104,out){
return (function (state_16079){var state_val_16080 = (state_16079[(1)]);if((state_val_16080 === (7)))
{var inst_16074 = (state_16079[(2)]);var state_16079__$1 = state_16079;var statearr_16081_16105 = state_16079__$1;(statearr_16081_16105[(2)] = inst_16074);
(statearr_16081_16105[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16080 === (1)))
{var inst_16056 = null;var state_16079__$1 = (function (){var statearr_16082 = state_16079;(statearr_16082[(7)] = inst_16056);
return statearr_16082;
})();var statearr_16083_16106 = state_16079__$1;(statearr_16083_16106[(2)] = null);
(statearr_16083_16106[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16080 === (4)))
{var inst_16059 = (state_16079[(8)]);var inst_16059__$1 = (state_16079[(2)]);var inst_16060 = (inst_16059__$1 == null);var inst_16061 = cljs.core.not.call(null,inst_16060);var state_16079__$1 = (function (){var statearr_16084 = state_16079;(statearr_16084[(8)] = inst_16059__$1);
return statearr_16084;
})();if(inst_16061)
{var statearr_16085_16107 = state_16079__$1;(statearr_16085_16107[(1)] = (5));
} else
{var statearr_16086_16108 = state_16079__$1;(statearr_16086_16108[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16080 === (6)))
{var state_16079__$1 = state_16079;var statearr_16087_16109 = state_16079__$1;(statearr_16087_16109[(2)] = null);
(statearr_16087_16109[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16080 === (3)))
{var inst_16076 = (state_16079[(2)]);var inst_16077 = cljs.core.async.close_BANG_.call(null,out);var state_16079__$1 = (function (){var statearr_16088 = state_16079;(statearr_16088[(9)] = inst_16076);
return statearr_16088;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16079__$1,inst_16077);
} else
{if((state_val_16080 === (2)))
{var state_16079__$1 = state_16079;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16079__$1,(4),ch);
} else
{if((state_val_16080 === (11)))
{var inst_16059 = (state_16079[(8)]);var inst_16068 = (state_16079[(2)]);var inst_16056 = inst_16059;var state_16079__$1 = (function (){var statearr_16089 = state_16079;(statearr_16089[(10)] = inst_16068);
(statearr_16089[(7)] = inst_16056);
return statearr_16089;
})();var statearr_16090_16110 = state_16079__$1;(statearr_16090_16110[(2)] = null);
(statearr_16090_16110[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16080 === (9)))
{var inst_16059 = (state_16079[(8)]);var state_16079__$1 = state_16079;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16079__$1,(11),out,inst_16059);
} else
{if((state_val_16080 === (5)))
{var inst_16059 = (state_16079[(8)]);var inst_16056 = (state_16079[(7)]);var inst_16063 = cljs.core._EQ_.call(null,inst_16059,inst_16056);var state_16079__$1 = state_16079;if(inst_16063)
{var statearr_16092_16111 = state_16079__$1;(statearr_16092_16111[(1)] = (8));
} else
{var statearr_16093_16112 = state_16079__$1;(statearr_16093_16112[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16080 === (10)))
{var inst_16071 = (state_16079[(2)]);var state_16079__$1 = state_16079;var statearr_16094_16113 = state_16079__$1;(statearr_16094_16113[(2)] = inst_16071);
(statearr_16094_16113[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16080 === (8)))
{var inst_16056 = (state_16079[(7)]);var tmp16091 = inst_16056;var inst_16056__$1 = tmp16091;var state_16079__$1 = (function (){var statearr_16095 = state_16079;(statearr_16095[(7)] = inst_16056__$1);
return statearr_16095;
})();var statearr_16096_16114 = state_16079__$1;(statearr_16096_16114[(2)] = null);
(statearr_16096_16114[(1)] = (2));
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
});})(c__10935__auto___16104,out))
;return ((function (switch__10870__auto__,c__10935__auto___16104,out){
return (function() {
var state_machine__10871__auto__ = null;
var state_machine__10871__auto____0 = (function (){var statearr_16100 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16100[(0)] = state_machine__10871__auto__);
(statearr_16100[(1)] = (1));
return statearr_16100;
});
var state_machine__10871__auto____1 = (function (state_16079){while(true){
var ret_value__10872__auto__ = (function (){try{while(true){
var result__10873__auto__ = switch__10870__auto__.call(null,state_16079);if(cljs.core.keyword_identical_QMARK_.call(null,result__10873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10873__auto__;
}
break;
}
}catch (e16101){if((e16101 instanceof Object))
{var ex__10874__auto__ = e16101;var statearr_16102_16115 = state_16079;(statearr_16102_16115[(5)] = ex__10874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16079);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16101;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16116 = state_16079;
state_16079 = G__16116;
continue;
}
} else
{return ret_value__10872__auto__;
}
break;
}
});
state_machine__10871__auto__ = function(state_16079){
switch(arguments.length){
case 0:
return state_machine__10871__auto____0.call(this);
case 1:
return state_machine__10871__auto____1.call(this,state_16079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10871__auto____0;
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10871__auto____1;
return state_machine__10871__auto__;
})()
;})(switch__10870__auto__,c__10935__auto___16104,out))
})();var state__10937__auto__ = (function (){var statearr_16103 = f__10936__auto__.call(null);(statearr_16103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10935__auto___16104);
return statearr_16103;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10937__auto__);
});})(c__10935__auto___16104,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10935__auto___16251 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10935__auto___16251,out){
return (function (){var f__10936__auto__ = (function (){var switch__10870__auto__ = ((function (c__10935__auto___16251,out){
return (function (state_16221){var state_val_16222 = (state_16221[(1)]);if((state_val_16222 === (7)))
{var inst_16217 = (state_16221[(2)]);var state_16221__$1 = state_16221;var statearr_16223_16252 = state_16221__$1;(statearr_16223_16252[(2)] = inst_16217);
(statearr_16223_16252[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16222 === (1)))
{var inst_16184 = (new Array(n));var inst_16185 = inst_16184;var inst_16186 = (0);var state_16221__$1 = (function (){var statearr_16224 = state_16221;(statearr_16224[(7)] = inst_16186);
(statearr_16224[(8)] = inst_16185);
return statearr_16224;
})();var statearr_16225_16253 = state_16221__$1;(statearr_16225_16253[(2)] = null);
(statearr_16225_16253[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16222 === (4)))
{var inst_16189 = (state_16221[(9)]);var inst_16189__$1 = (state_16221[(2)]);var inst_16190 = (inst_16189__$1 == null);var inst_16191 = cljs.core.not.call(null,inst_16190);var state_16221__$1 = (function (){var statearr_16226 = state_16221;(statearr_16226[(9)] = inst_16189__$1);
return statearr_16226;
})();if(inst_16191)
{var statearr_16227_16254 = state_16221__$1;(statearr_16227_16254[(1)] = (5));
} else
{var statearr_16228_16255 = state_16221__$1;(statearr_16228_16255[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16222 === (15)))
{var inst_16211 = (state_16221[(2)]);var state_16221__$1 = state_16221;var statearr_16229_16256 = state_16221__$1;(statearr_16229_16256[(2)] = inst_16211);
(statearr_16229_16256[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16222 === (13)))
{var state_16221__$1 = state_16221;var statearr_16230_16257 = state_16221__$1;(statearr_16230_16257[(2)] = null);
(statearr_16230_16257[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16222 === (6)))
{var inst_16186 = (state_16221[(7)]);var inst_16207 = (inst_16186 > (0));var state_16221__$1 = state_16221;if(cljs.core.truth_(inst_16207))
{var statearr_16231_16258 = state_16221__$1;(statearr_16231_16258[(1)] = (12));
} else
{var statearr_16232_16259 = state_16221__$1;(statearr_16232_16259[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16222 === (3)))
{var inst_16219 = (state_16221[(2)]);var state_16221__$1 = state_16221;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16221__$1,inst_16219);
} else
{if((state_val_16222 === (12)))
{var inst_16185 = (state_16221[(8)]);var inst_16209 = cljs.core.vec.call(null,inst_16185);var state_16221__$1 = state_16221;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16221__$1,(15),out,inst_16209);
} else
{if((state_val_16222 === (2)))
{var state_16221__$1 = state_16221;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16221__$1,(4),ch);
} else
{if((state_val_16222 === (11)))
{var inst_16201 = (state_16221[(2)]);var inst_16202 = (new Array(n));var inst_16185 = inst_16202;var inst_16186 = (0);var state_16221__$1 = (function (){var statearr_16233 = state_16221;(statearr_16233[(7)] = inst_16186);
(statearr_16233[(10)] = inst_16201);
(statearr_16233[(8)] = inst_16185);
return statearr_16233;
})();var statearr_16234_16260 = state_16221__$1;(statearr_16234_16260[(2)] = null);
(statearr_16234_16260[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16222 === (9)))
{var inst_16185 = (state_16221[(8)]);var inst_16199 = cljs.core.vec.call(null,inst_16185);var state_16221__$1 = state_16221;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16221__$1,(11),out,inst_16199);
} else
{if((state_val_16222 === (5)))
{var inst_16186 = (state_16221[(7)]);var inst_16194 = (state_16221[(11)]);var inst_16189 = (state_16221[(9)]);var inst_16185 = (state_16221[(8)]);var inst_16193 = (inst_16185[inst_16186] = inst_16189);var inst_16194__$1 = (inst_16186 + (1));var inst_16195 = (inst_16194__$1 < n);var state_16221__$1 = (function (){var statearr_16235 = state_16221;(statearr_16235[(12)] = inst_16193);
(statearr_16235[(11)] = inst_16194__$1);
return statearr_16235;
})();if(cljs.core.truth_(inst_16195))
{var statearr_16236_16261 = state_16221__$1;(statearr_16236_16261[(1)] = (8));
} else
{var statearr_16237_16262 = state_16221__$1;(statearr_16237_16262[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16222 === (14)))
{var inst_16214 = (state_16221[(2)]);var inst_16215 = cljs.core.async.close_BANG_.call(null,out);var state_16221__$1 = (function (){var statearr_16239 = state_16221;(statearr_16239[(13)] = inst_16214);
return statearr_16239;
})();var statearr_16240_16263 = state_16221__$1;(statearr_16240_16263[(2)] = inst_16215);
(statearr_16240_16263[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16222 === (10)))
{var inst_16205 = (state_16221[(2)]);var state_16221__$1 = state_16221;var statearr_16241_16264 = state_16221__$1;(statearr_16241_16264[(2)] = inst_16205);
(statearr_16241_16264[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16222 === (8)))
{var inst_16194 = (state_16221[(11)]);var inst_16185 = (state_16221[(8)]);var tmp16238 = inst_16185;var inst_16185__$1 = tmp16238;var inst_16186 = inst_16194;var state_16221__$1 = (function (){var statearr_16242 = state_16221;(statearr_16242[(7)] = inst_16186);
(statearr_16242[(8)] = inst_16185__$1);
return statearr_16242;
})();var statearr_16243_16265 = state_16221__$1;(statearr_16243_16265[(2)] = null);
(statearr_16243_16265[(1)] = (2));
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
});})(c__10935__auto___16251,out))
;return ((function (switch__10870__auto__,c__10935__auto___16251,out){
return (function() {
var state_machine__10871__auto__ = null;
var state_machine__10871__auto____0 = (function (){var statearr_16247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16247[(0)] = state_machine__10871__auto__);
(statearr_16247[(1)] = (1));
return statearr_16247;
});
var state_machine__10871__auto____1 = (function (state_16221){while(true){
var ret_value__10872__auto__ = (function (){try{while(true){
var result__10873__auto__ = switch__10870__auto__.call(null,state_16221);if(cljs.core.keyword_identical_QMARK_.call(null,result__10873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10873__auto__;
}
break;
}
}catch (e16248){if((e16248 instanceof Object))
{var ex__10874__auto__ = e16248;var statearr_16249_16266 = state_16221;(statearr_16249_16266[(5)] = ex__10874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16221);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16248;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16267 = state_16221;
state_16221 = G__16267;
continue;
}
} else
{return ret_value__10872__auto__;
}
break;
}
});
state_machine__10871__auto__ = function(state_16221){
switch(arguments.length){
case 0:
return state_machine__10871__auto____0.call(this);
case 1:
return state_machine__10871__auto____1.call(this,state_16221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10871__auto____0;
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10871__auto____1;
return state_machine__10871__auto__;
})()
;})(switch__10870__auto__,c__10935__auto___16251,out))
})();var state__10937__auto__ = (function (){var statearr_16250 = f__10936__auto__.call(null);(statearr_16250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10935__auto___16251);
return statearr_16250;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10937__auto__);
});})(c__10935__auto___16251,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10935__auto___16410 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10935__auto___16410,out){
return (function (){var f__10936__auto__ = (function (){var switch__10870__auto__ = ((function (c__10935__auto___16410,out){
return (function (state_16380){var state_val_16381 = (state_16380[(1)]);if((state_val_16381 === (7)))
{var inst_16376 = (state_16380[(2)]);var state_16380__$1 = state_16380;var statearr_16382_16411 = state_16380__$1;(statearr_16382_16411[(2)] = inst_16376);
(statearr_16382_16411[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16381 === (1)))
{var inst_16339 = [];var inst_16340 = inst_16339;var inst_16341 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_16380__$1 = (function (){var statearr_16383 = state_16380;(statearr_16383[(7)] = inst_16340);
(statearr_16383[(8)] = inst_16341);
return statearr_16383;
})();var statearr_16384_16412 = state_16380__$1;(statearr_16384_16412[(2)] = null);
(statearr_16384_16412[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16381 === (4)))
{var inst_16344 = (state_16380[(9)]);var inst_16344__$1 = (state_16380[(2)]);var inst_16345 = (inst_16344__$1 == null);var inst_16346 = cljs.core.not.call(null,inst_16345);var state_16380__$1 = (function (){var statearr_16385 = state_16380;(statearr_16385[(9)] = inst_16344__$1);
return statearr_16385;
})();if(inst_16346)
{var statearr_16386_16413 = state_16380__$1;(statearr_16386_16413[(1)] = (5));
} else
{var statearr_16387_16414 = state_16380__$1;(statearr_16387_16414[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16381 === (15)))
{var inst_16370 = (state_16380[(2)]);var state_16380__$1 = state_16380;var statearr_16388_16415 = state_16380__$1;(statearr_16388_16415[(2)] = inst_16370);
(statearr_16388_16415[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16381 === (13)))
{var state_16380__$1 = state_16380;var statearr_16389_16416 = state_16380__$1;(statearr_16389_16416[(2)] = null);
(statearr_16389_16416[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16381 === (6)))
{var inst_16340 = (state_16380[(7)]);var inst_16365 = inst_16340.length;var inst_16366 = (inst_16365 > (0));var state_16380__$1 = state_16380;if(cljs.core.truth_(inst_16366))
{var statearr_16390_16417 = state_16380__$1;(statearr_16390_16417[(1)] = (12));
} else
{var statearr_16391_16418 = state_16380__$1;(statearr_16391_16418[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16381 === (3)))
{var inst_16378 = (state_16380[(2)]);var state_16380__$1 = state_16380;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16380__$1,inst_16378);
} else
{if((state_val_16381 === (12)))
{var inst_16340 = (state_16380[(7)]);var inst_16368 = cljs.core.vec.call(null,inst_16340);var state_16380__$1 = state_16380;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16380__$1,(15),out,inst_16368);
} else
{if((state_val_16381 === (2)))
{var state_16380__$1 = state_16380;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16380__$1,(4),ch);
} else
{if((state_val_16381 === (11)))
{var inst_16344 = (state_16380[(9)]);var inst_16348 = (state_16380[(10)]);var inst_16358 = (state_16380[(2)]);var inst_16359 = [];var inst_16360 = inst_16359.push(inst_16344);var inst_16340 = inst_16359;var inst_16341 = inst_16348;var state_16380__$1 = (function (){var statearr_16392 = state_16380;(statearr_16392[(7)] = inst_16340);
(statearr_16392[(11)] = inst_16360);
(statearr_16392[(8)] = inst_16341);
(statearr_16392[(12)] = inst_16358);
return statearr_16392;
})();var statearr_16393_16419 = state_16380__$1;(statearr_16393_16419[(2)] = null);
(statearr_16393_16419[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16381 === (9)))
{var inst_16340 = (state_16380[(7)]);var inst_16356 = cljs.core.vec.call(null,inst_16340);var state_16380__$1 = state_16380;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16380__$1,(11),out,inst_16356);
} else
{if((state_val_16381 === (5)))
{var inst_16344 = (state_16380[(9)]);var inst_16341 = (state_16380[(8)]);var inst_16348 = (state_16380[(10)]);var inst_16348__$1 = f.call(null,inst_16344);var inst_16349 = cljs.core._EQ_.call(null,inst_16348__$1,inst_16341);var inst_16350 = cljs.core.keyword_identical_QMARK_.call(null,inst_16341,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_16351 = (inst_16349) || (inst_16350);var state_16380__$1 = (function (){var statearr_16394 = state_16380;(statearr_16394[(10)] = inst_16348__$1);
return statearr_16394;
})();if(cljs.core.truth_(inst_16351))
{var statearr_16395_16420 = state_16380__$1;(statearr_16395_16420[(1)] = (8));
} else
{var statearr_16396_16421 = state_16380__$1;(statearr_16396_16421[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16381 === (14)))
{var inst_16373 = (state_16380[(2)]);var inst_16374 = cljs.core.async.close_BANG_.call(null,out);var state_16380__$1 = (function (){var statearr_16398 = state_16380;(statearr_16398[(13)] = inst_16373);
return statearr_16398;
})();var statearr_16399_16422 = state_16380__$1;(statearr_16399_16422[(2)] = inst_16374);
(statearr_16399_16422[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16381 === (10)))
{var inst_16363 = (state_16380[(2)]);var state_16380__$1 = state_16380;var statearr_16400_16423 = state_16380__$1;(statearr_16400_16423[(2)] = inst_16363);
(statearr_16400_16423[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16381 === (8)))
{var inst_16340 = (state_16380[(7)]);var inst_16344 = (state_16380[(9)]);var inst_16348 = (state_16380[(10)]);var inst_16353 = inst_16340.push(inst_16344);var tmp16397 = inst_16340;var inst_16340__$1 = tmp16397;var inst_16341 = inst_16348;var state_16380__$1 = (function (){var statearr_16401 = state_16380;(statearr_16401[(7)] = inst_16340__$1);
(statearr_16401[(8)] = inst_16341);
(statearr_16401[(14)] = inst_16353);
return statearr_16401;
})();var statearr_16402_16424 = state_16380__$1;(statearr_16402_16424[(2)] = null);
(statearr_16402_16424[(1)] = (2));
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
});})(c__10935__auto___16410,out))
;return ((function (switch__10870__auto__,c__10935__auto___16410,out){
return (function() {
var state_machine__10871__auto__ = null;
var state_machine__10871__auto____0 = (function (){var statearr_16406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16406[(0)] = state_machine__10871__auto__);
(statearr_16406[(1)] = (1));
return statearr_16406;
});
var state_machine__10871__auto____1 = (function (state_16380){while(true){
var ret_value__10872__auto__ = (function (){try{while(true){
var result__10873__auto__ = switch__10870__auto__.call(null,state_16380);if(cljs.core.keyword_identical_QMARK_.call(null,result__10873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10873__auto__;
}
break;
}
}catch (e16407){if((e16407 instanceof Object))
{var ex__10874__auto__ = e16407;var statearr_16408_16425 = state_16380;(statearr_16408_16425[(5)] = ex__10874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16380);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16407;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16426 = state_16380;
state_16380 = G__16426;
continue;
}
} else
{return ret_value__10872__auto__;
}
break;
}
});
state_machine__10871__auto__ = function(state_16380){
switch(arguments.length){
case 0:
return state_machine__10871__auto____0.call(this);
case 1:
return state_machine__10871__auto____1.call(this,state_16380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10871__auto____0;
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10871__auto____1;
return state_machine__10871__auto__;
})()
;})(switch__10870__auto__,c__10935__auto___16410,out))
})();var state__10937__auto__ = (function (){var statearr_16409 = f__10936__auto__.call(null);(statearr_16409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10935__auto___16410);
return statearr_16409;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10937__auto__);
});})(c__10935__auto___16410,out))
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

//# sourceMappingURL=async.js.map