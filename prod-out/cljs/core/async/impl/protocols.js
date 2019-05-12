// Compiled by ClojureScript 0.0-2356
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = (1024);
cljs.core.async.impl.protocols.ReadPort = (function (){var obj26981 = {};return obj26981;
})();
cljs.core.async.impl.protocols.take_BANG_ = (function take_BANG_(port,fn1_handler){if((function (){var and__3657__auto__ = port;if(and__3657__auto__)
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2;
} else
{return and__3657__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else
{var x__4305__auto__ = (((port == null))?null:port);return (function (){var or__3669__auto__ = (cljs.core.async.impl.protocols.take_BANG_[(function (){var G__26985 = x__4305__auto__;return goog.typeOf(G__26985);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("ReadPort.take!",port);
}
}
})().call(null,port,fn1_handler);
}
});
cljs.core.async.impl.protocols.WritePort = (function (){var obj26987 = {};return obj26987;
})();
cljs.core.async.impl.protocols.put_BANG_ = (function put_BANG_(port,val,fn1_handler){if((function (){var and__3657__auto__ = port;if(and__3657__auto__)
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3;
} else
{return and__3657__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn1_handler);
} else
{var x__4305__auto__ = (((port == null))?null:port);return (function (){var or__3669__auto__ = (cljs.core.async.impl.protocols.put_BANG_[(function (){var G__26991 = x__4305__auto__;return goog.typeOf(G__26991);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("WritePort.put!",port);
}
}
})().call(null,port,val,fn1_handler);
}
});
cljs.core.async.impl.protocols.Channel = (function (){var obj26993 = {};return obj26993;
})();
cljs.core.async.impl.protocols.close_BANG_ = (function close_BANG_(chan){if((function (){var and__3657__auto__ = chan;if(and__3657__auto__)
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1;
} else
{return and__3657__auto__;
}
})())
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else
{var x__4305__auto__ = (((chan == null))?null:chan);return (function (){var or__3669__auto__ = (cljs.core.async.impl.protocols.close_BANG_[(function (){var G__26997 = x__4305__auto__;return goog.typeOf(G__26997);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("Channel.close!",chan);
}
}
})().call(null,chan);
}
});
cljs.core.async.impl.protocols.closed_QMARK_ = (function closed_QMARK_(chan){if((function (){var and__3657__auto__ = chan;if(and__3657__auto__)
{return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1;
} else
{return and__3657__auto__;
}
})())
{return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1(chan);
} else
{var x__4305__auto__ = (((chan == null))?null:chan);return (function (){var or__3669__auto__ = (cljs.core.async.impl.protocols.closed_QMARK_[(function (){var G__27001 = x__4305__auto__;return goog.typeOf(G__27001);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.impl.protocols.closed_QMARK_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("Channel.closed?",chan);
}
}
})().call(null,chan);
}
});
cljs.core.async.impl.protocols.Handler = (function (){var obj27003 = {};return obj27003;
})();
cljs.core.async.impl.protocols.active_QMARK_ = (function active_QMARK_(h){if((function (){var and__3657__auto__ = h;if(and__3657__auto__)
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1;
} else
{return and__3657__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else
{var x__4305__auto__ = (((h == null))?null:h);return (function (){var or__3669__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[(function (){var G__27007 = x__4305__auto__;return goog.typeOf(G__27007);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("Handler.active?",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.commit = (function commit(h){if((function (){var and__3657__auto__ = h;if(and__3657__auto__)
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1;
} else
{return and__3657__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else
{var x__4305__auto__ = (((h == null))?null:h);return (function (){var or__3669__auto__ = (cljs.core.async.impl.protocols.commit[(function (){var G__27011 = x__4305__auto__;return goog.typeOf(G__27011);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("Handler.commit",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.Buffer = (function (){var obj27013 = {};return obj27013;
})();
cljs.core.async.impl.protocols.full_QMARK_ = (function full_QMARK_(b){if((function (){var and__3657__auto__ = b;if(and__3657__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1;
} else
{return and__3657__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else
{var x__4305__auto__ = (((b == null))?null:b);return (function (){var or__3669__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[(function (){var G__27017 = x__4305__auto__;return goog.typeOf(G__27017);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("Buffer.full?",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.remove_BANG_ = (function remove_BANG_(b){if((function (){var and__3657__auto__ = b;if(and__3657__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1;
} else
{return and__3657__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else
{var x__4305__auto__ = (((b == null))?null:b);return (function (){var or__3669__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[(function (){var G__27021 = x__4305__auto__;return goog.typeOf(G__27021);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("Buffer.remove!",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.add_BANG_ = (function add_BANG_(b,itm){if((function (){var and__3657__auto__ = b;if(and__3657__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2;
} else
{return and__3657__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2(b,itm);
} else
{var x__4305__auto__ = (((b == null))?null:b);return (function (){var or__3669__auto__ = (cljs.core.async.impl.protocols.add_BANG_[(function (){var G__27025 = x__4305__auto__;return goog.typeOf(G__27025);
})()]);if(or__3669__auto__)
{return or__3669__auto__;
} else
{var or__3669__auto____$1 = (cljs.core.async.impl.protocols.add_BANG_["_"]);if(or__3669__auto____$1)
{return or__3669__auto____$1;
} else
{throw cljs.core.missing_protocol("Buffer.add!",b);
}
}
})().call(null,b,itm);
}
});
cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj27027 = {};return obj27027;
})();
