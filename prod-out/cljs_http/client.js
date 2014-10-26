// Compiled by ClojureScript 0.0-2356
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('no.en.core');
goog.require('goog.Uri');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('cljs_http.core');
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__3627__auto__ = v;if(cljs.core.truth_(and__3627__auto__))
{return (v > (0));
} else
{return and__3627__auto__;
}
})()))
{return v;
} else
{return null;
}
});
/**
* Parse `s` as query params and return a hash map.
*/
cljs_http.client.parse_query_params = (function parse_query_params(s){if(cljs.core.not(clojure.string.blank_QMARK_(s)))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__22439_SHARP_,p2__22438_SHARP_){var vec__22441 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__22438_SHARP_,/=/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22441,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22441,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22439_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not(clojure.string.blank_QMARK_(url)))
{var uri = (function (){var G__22443 = url;return goog.Uri.parse(G__22443);
})();var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$39,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.constant$keyword$42,uri.getDomain(),cljs.core.constant$keyword$43,cljs_http.client.if_pos(uri.getPort()),cljs.core.constant$keyword$44,uri.getPath(),cljs.core.constant$keyword$46,((cljs.core.not(query_data.isEmpty()))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null),cljs.core.constant$keyword$38,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data))):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode(cljs.core.name(k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22444_SHARP_){return cljs_http.client.encode_val(k,p1__22444_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__22445){var vec__22447 = p__22445;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22447,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22447,(1),null);if(cljs.core.coll_QMARK_(v))
{return cljs_http.client.encode_vals(k,v);
} else
{return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__22448_SHARP_){return ("\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22448_SHARP_));
});})(esc_chars))
,esc_chars));
})();
/**
* Escape special characters -- for content-type.
*/
cljs_http.client.escape_special = (function escape_special(string){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs_http.client.regex_char_esc_smap,string));
});
/**
* Decocde the :body of `response` with `decode-fn` if the content type matches.
*/
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){if(cljs.core.truth_((function (){var and__3627__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$58,request_method);if(and__3627__auto__)
{return cljs.core.re_find(cljs.core.re_pattern(("(?i)"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special(content_type)))),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$51.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))));
} else
{return and__3627__auto__;
}
})()))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$50], null),decode_fn);
} else
{return response;
}
});
/**
* Encode :edn-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_edn_params = (function wrap_edn_params(client){return (function (request){var temp__4124__auto__ = cljs.core.constant$keyword$59.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;var G__22451 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$59),cljs.core.constant$keyword$50,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,"content-type"], null),"application/edn");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22451) : client.call(null,G__22451));
} else
{var G__22452 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22452) : client.call(null,G__22452));
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__12256__auto___22491 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12256__auto___22491,channel){
return (function (){var f__12257__auto__ = (function (){var switch__12241__auto__ = ((function (c__12256__auto___22491,channel){
return (function (state_22480){var state_val_22481 = (state_22480[(1)]);if((state_val_22481 === (2)))
{var inst_22474 = (state_22480[(2)]);var inst_22475 = cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(request);var inst_22476 = cljs_http.client.decode_body(inst_22474,cljs.reader.read_string,"application/edn",inst_22475);var inst_22477 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_22476);var inst_22478 = cljs.core.async.close_BANG_(channel);var state_22480__$1 = (function (){var statearr_22482 = state_22480;(statearr_22482[(7)] = inst_22477);
return statearr_22482;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_22480__$1,inst_22478);
} else
{if((state_val_22481 === (1)))
{var inst_22472 = (function (){var G__22483 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22483) : client.call(null,G__22483));
})();var state_22480__$1 = state_22480;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22480__$1,(2),inst_22472);
} else
{return null;
}
}
});})(c__12256__auto___22491,channel))
;return ((function (switch__12241__auto__,c__12256__auto___22491,channel){
return (function() {
var state_machine__12242__auto__ = null;
var state_machine__12242__auto____0 = (function (){var statearr_22487 = [null,null,null,null,null,null,null,null];(statearr_22487[(0)] = state_machine__12242__auto__);
(statearr_22487[(1)] = (1));
return statearr_22487;
});
var state_machine__12242__auto____1 = (function (state_22480){while(true){
var ret_value__12243__auto__ = (function (){try{while(true){
var result__12244__auto__ = switch__12241__auto__(state_22480);if(cljs.core.keyword_identical_QMARK_(result__12244__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12244__auto__;
}
break;
}
}catch (e22488){if((e22488 instanceof Object))
{var ex__12245__auto__ = e22488;var statearr_22489_22492 = state_22480;(statearr_22489_22492[(5)] = ex__12245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22480);
return cljs.core.constant$keyword$18;
} else
{throw e22488;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12243__auto__,cljs.core.constant$keyword$18))
{{
var G__22493 = state_22480;
state_22480 = G__22493;
continue;
}
} else
{return ret_value__12243__auto__;
}
break;
}
});
state_machine__12242__auto__ = function(state_22480){
switch(arguments.length){
case 0:
return state_machine__12242__auto____0.call(this);
case 1:
return state_machine__12242__auto____1.call(this,state_22480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12242__auto____0;
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12242__auto____1;
return state_machine__12242__auto__;
})()
;})(switch__12241__auto__,c__12256__auto___22491,channel))
})();var state__12258__auto__ = (function (){var statearr_22490 = (function (){return (f__12257__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12257__auto__.cljs$core$IFn$_invoke$arity$0() : f__12257__auto__.call(null));
})();(statearr_22490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12256__auto___22491);
return statearr_22490;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12258__auto__);
});})(c__12256__auto___22491,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__22494){var vec__22498 = p__22494;var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22498,(0),null);return ((function (vec__22498,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__3639__auto__ = cljs.core.constant$keyword$60.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;var G__22499 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,"accept"], null),accept__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22499) : client.call(null,G__22499));
} else
{var G__22500 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22500) : client.call(null,G__22500));
}
});
;})(vec__22498,accept))
};
var wrap_accept = function (client,var_args){
var p__22494 = null;if (arguments.length > 1) {
  p__22494 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__22494);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__22501){
var client = cljs.core.first(arglist__22501);
var p__22494 = cljs.core.rest(arglist__22501);
return wrap_accept__delegate(client,p__22494);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__22502){var vec__22506 = p__22502;var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22506,(0),null);return ((function (vec__22506,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__3639__auto__ = cljs.core.constant$keyword$61.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;var G__22507 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,"content-type"], null),content_type__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22507) : client.call(null,G__22507));
} else
{var G__22508 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22508) : client.call(null,G__22508));
}
});
;})(vec__22506,content_type))
};
var wrap_content_type = function (client,var_args){
var p__22502 = null;if (arguments.length > 1) {
  p__22502 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__22502);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__22509){
var client = cljs.core.first(arglist__22509);
var p__22502 = cljs.core.rest(arglist__22509);
return wrap_content_type__delegate(client,p__22502);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$62,cljs.core.constant$keyword$66,cljs.core.constant$keyword$63,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$64,cljs.core.constant$keyword$66,cljs.core.constant$keyword$65,cljs.core.PersistentArrayMap.EMPTY], null);
/**
* Encode :transit-params in the `request` :body and set the appropriate
* Content Type header.
* 
* A :transit-opts map can be optionally provided with the following keys:
* 
* :encoding                #{:json, :json-verbose}
* :decoding                #{:json, :json-verbose}
* :encoding/decoding-opts  appropriate map of options to be passed to
* transit writer/reader, respectively.
*/
cljs_http.client.wrap_transit_params = (function wrap_transit_params(client){return (function (request){var temp__4124__auto__ = cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;var map__22513 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(request)], 0));var map__22513__$1 = ((cljs.core.seq_QMARK_(map__22513))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22513):map__22513);var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22513__$1,cljs.core.constant$keyword$63);var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22513__$1,cljs.core.constant$keyword$62);var G__22514 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$67),cljs.core.constant$keyword$50,cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,"content-type"], null),"application/transit+json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22514) : client.call(null,G__22514));
} else
{var G__22515 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22515) : client.call(null,G__22515));
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var map__22538 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(request)], 0));var map__22538__$1 = ((cljs.core.seq_QMARK_(map__22538))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22538):map__22538);var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22538__$1,cljs.core.constant$keyword$65);var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22538__$1,cljs.core.constant$keyword$64);var c__12256__auto___22559 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12256__auto___22559,channel,map__22538,map__22538__$1,decoding_opts,decoding){
return (function (){var f__12257__auto__ = (function (){var switch__12241__auto__ = ((function (c__12256__auto___22559,channel,map__22538,map__22538__$1,decoding_opts,decoding){
return (function (state_22548){var state_val_22549 = (state_22548[(1)]);if((state_val_22549 === (2)))
{var inst_22541 = (state_22548[(2)]);var inst_22542 = (function (){var response = inst_22541;return ((function (response,inst_22541,state_val_22549,c__12256__auto___22559,channel,map__22538,map__22538__$1,decoding_opts,decoding){
return (function (p1__22516_SHARP_){return cljs_http.util.transit_decode(p1__22516_SHARP_,decoding,decoding_opts);
});
;})(response,inst_22541,state_val_22549,c__12256__auto___22559,channel,map__22538,map__22538__$1,decoding_opts,decoding))
})();var inst_22543 = cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(request);var inst_22544 = cljs_http.client.decode_body(inst_22541,inst_22542,"application/transit+json",inst_22543);var inst_22545 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_22544);var inst_22546 = cljs.core.async.close_BANG_(channel);var state_22548__$1 = (function (){var statearr_22550 = state_22548;(statearr_22550[(7)] = inst_22545);
return statearr_22550;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_22548__$1,inst_22546);
} else
{if((state_val_22549 === (1)))
{var inst_22539 = (function (){var G__22551 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22551) : client.call(null,G__22551));
})();var state_22548__$1 = state_22548;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22548__$1,(2),inst_22539);
} else
{return null;
}
}
});})(c__12256__auto___22559,channel,map__22538,map__22538__$1,decoding_opts,decoding))
;return ((function (switch__12241__auto__,c__12256__auto___22559,channel,map__22538,map__22538__$1,decoding_opts,decoding){
return (function() {
var state_machine__12242__auto__ = null;
var state_machine__12242__auto____0 = (function (){var statearr_22555 = [null,null,null,null,null,null,null,null];(statearr_22555[(0)] = state_machine__12242__auto__);
(statearr_22555[(1)] = (1));
return statearr_22555;
});
var state_machine__12242__auto____1 = (function (state_22548){while(true){
var ret_value__12243__auto__ = (function (){try{while(true){
var result__12244__auto__ = switch__12241__auto__(state_22548);if(cljs.core.keyword_identical_QMARK_(result__12244__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12244__auto__;
}
break;
}
}catch (e22556){if((e22556 instanceof Object))
{var ex__12245__auto__ = e22556;var statearr_22557_22560 = state_22548;(statearr_22557_22560[(5)] = ex__12245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22548);
return cljs.core.constant$keyword$18;
} else
{throw e22556;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12243__auto__,cljs.core.constant$keyword$18))
{{
var G__22561 = state_22548;
state_22548 = G__22561;
continue;
}
} else
{return ret_value__12243__auto__;
}
break;
}
});
state_machine__12242__auto__ = function(state_22548){
switch(arguments.length){
case 0:
return state_machine__12242__auto____0.call(this);
case 1:
return state_machine__12242__auto____1.call(this,state_22548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12242__auto____0;
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12242__auto____1;
return state_machine__12242__auto__;
})()
;})(switch__12241__auto__,c__12256__auto___22559,channel,map__22538,map__22538__$1,decoding_opts,decoding))
})();var state__12258__auto__ = (function (){var statearr_22558 = (function (){return (f__12257__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12257__auto__.cljs$core$IFn$_invoke$arity$0() : f__12257__auto__.call(null));
})();(statearr_22558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12256__auto___22559);
return statearr_22558;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12258__auto__);
});})(c__12256__auto___22559,channel,map__22538,map__22538__$1,decoding_opts,decoding))
);
return channel;
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4124__auto__ = cljs.core.constant$keyword$69.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;var G__22564 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$69),cljs.core.constant$keyword$50,cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,"content-type"], null),"application/json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22564) : client.call(null,G__22564));
} else
{var G__22565 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22565) : client.call(null,G__22565));
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__12256__auto___22604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12256__auto___22604,channel){
return (function (){var f__12257__auto__ = (function (){var switch__12241__auto__ = ((function (c__12256__auto___22604,channel){
return (function (state_22593){var state_val_22594 = (state_22593[(1)]);if((state_val_22594 === (2)))
{var inst_22587 = (state_22593[(2)]);var inst_22588 = cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(request);var inst_22589 = cljs_http.client.decode_body(inst_22587,cljs_http.util.json_decode,"application/json",inst_22588);var inst_22590 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_22589);var inst_22591 = cljs.core.async.close_BANG_(channel);var state_22593__$1 = (function (){var statearr_22595 = state_22593;(statearr_22595[(7)] = inst_22590);
return statearr_22595;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_22593__$1,inst_22591);
} else
{if((state_val_22594 === (1)))
{var inst_22585 = (function (){var G__22596 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22596) : client.call(null,G__22596));
})();var state_22593__$1 = state_22593;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22593__$1,(2),inst_22585);
} else
{return null;
}
}
});})(c__12256__auto___22604,channel))
;return ((function (switch__12241__auto__,c__12256__auto___22604,channel){
return (function() {
var state_machine__12242__auto__ = null;
var state_machine__12242__auto____0 = (function (){var statearr_22600 = [null,null,null,null,null,null,null,null];(statearr_22600[(0)] = state_machine__12242__auto__);
(statearr_22600[(1)] = (1));
return statearr_22600;
});
var state_machine__12242__auto____1 = (function (state_22593){while(true){
var ret_value__12243__auto__ = (function (){try{while(true){
var result__12244__auto__ = switch__12241__auto__(state_22593);if(cljs.core.keyword_identical_QMARK_(result__12244__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12244__auto__;
}
break;
}
}catch (e22601){if((e22601 instanceof Object))
{var ex__12245__auto__ = e22601;var statearr_22602_22605 = state_22593;(statearr_22602_22605[(5)] = ex__12245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22593);
return cljs.core.constant$keyword$18;
} else
{throw e22601;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12243__auto__,cljs.core.constant$keyword$18))
{{
var G__22606 = state_22593;
state_22593 = G__22606;
continue;
}
} else
{return ret_value__12243__auto__;
}
break;
}
});
state_machine__12242__auto__ = function(state_22593){
switch(arguments.length){
case 0:
return state_machine__12242__auto____0.call(this);
case 1:
return state_machine__12242__auto____1.call(this,state_22593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12242__auto____0;
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12242__auto____1;
return state_machine__12242__auto__;
})()
;})(switch__12241__auto__,c__12256__auto___22604,channel))
})();var state__12258__auto__ = (function (){var statearr_22603 = (function (){return (f__12257__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12257__auto__.cljs$core$IFn$_invoke$arity$0() : f__12257__auto__.call(null));
})();(statearr_22603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12256__auto___22604);
return statearr_22603;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12258__auto__);
});})(c__12256__auto___22604,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__22611){var map__22612 = p__22611;var map__22612__$1 = ((cljs.core.seq_QMARK_(map__22612))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22612):map__22612);var req = map__22612__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22612__$1,cljs.core.constant$keyword$38);if(cljs.core.truth_(query_params))
{var G__22613 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$38),cljs.core.constant$keyword$46,cljs_http.client.generate_query_string(query_params));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22613) : client.call(null,G__22613));
} else
{var G__22614 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22614) : client.call(null,G__22614));
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__22619){var map__22620 = p__22619;var map__22620__$1 = ((cljs.core.seq_QMARK_(map__22620))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22620):map__22620);var request = map__22620__$1;var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22620__$1,cljs.core.constant$keyword$52);var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22620__$1,cljs.core.constant$keyword$70);if(cljs.core.truth_((function (){var and__3627__auto__ = form_params;if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,null,cljs.core.constant$keyword$72,null,cljs.core.constant$keyword$73,null,cljs.core.constant$keyword$74,null], null), null).call(null,request_method);
} else
{return and__3627__auto__;
}
})()))
{var G__22621 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$70),cljs.core.constant$keyword$50,cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,"content-type"], null),"application/x-www-form-urlencoded");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22621) : client.call(null,G__22621));
} else
{var G__22622 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22622) : client.call(null,G__22622));
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function wrap_android_cors_bugfix(client){return (function (request){var G__22624 = (cljs.core.truth_(cljs_http.util.android_QMARK_())?cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$38,cljs.core.constant$keyword$75], null),(function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})()):request);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22624) : client.call(null,G__22624));
});
});
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4124__auto__ = cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var m = temp__4124__auto__;var G__22627 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$76),cljs.core.constant$keyword$52,m);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22627) : client.call(null,G__22627));
} else
{var G__22628 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22628) : client.call(null,G__22628));
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__22629_SHARP_){var G__22631 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22629_SHARP_,cljs.core.constant$keyword$42,server_name);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22631) : client.call(null,G__22631));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__22637){var map__22638 = p__22637;var map__22638__$1 = ((cljs.core.seq_QMARK_(map__22638))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22638):map__22638);var req = map__22638__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22638__$1,cljs.core.constant$keyword$38);var temp__4124__auto__ = cljs_http.client.parse_url(cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;var G__22639 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.constant$keyword$77),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$38], null),((function (spec,temp__4124__auto__,map__22638,map__22638__$1,req,query_params){
return (function (p1__22632_SHARP_){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__22632_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__22638,map__22638__$1,req,query_params))
);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22639) : client.call(null,G__22639));
} else
{var G__22640 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22640) : client.call(null,G__22640));
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__22641){var vec__22645 = p__22641;var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22645,(0),null);return ((function (vec__22645,credentials){
return (function (req){var credentials__$1 = (function (){var or__3639__auto__ = cljs.core.constant$keyword$78.cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_(credentials__$1)))
{var G__22646 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$78),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22646) : client.call(null,G__22646));
} else
{var G__22647 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22647) : client.call(null,G__22647));
}
});
;})(vec__22645,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__22641 = null;if (arguments.length > 1) {
  p__22641 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__22641);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__22648){
var client = cljs.core.first(arglist__22648);
var p__22641 = cljs.core.rest(arglist__22648);
return wrap_basic_auth__delegate(client,p__22641);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4124__auto__ = cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var oauth_token = temp__4124__auto__;var G__22651 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$79),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,"authorization"], null),("Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22651) : client.call(null,G__22651));
} else
{var G__22652 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22652) : client.call(null,G__22652));
}
});
});
/**
* Returns a batteries-included HTTP request function coresponding to the given
* core client. See client/client.
*/
cljs_http.client.wrap_request = (function wrap_request(request){return cljs_http.client.wrap_url(cljs_http.client.wrap_method(cljs_http.client.wrap_android_cors_bugfix(cljs_http.client.wrap_oauth(cljs_http.client.wrap_basic_auth(cljs_http.client.wrap_query_params(cljs_http.client.wrap_json_response(cljs_http.client.wrap_json_params(cljs_http.client.wrap_transit_response(cljs_http.client.wrap_transit_params(cljs_http.client.wrap_edn_response(cljs_http.client.wrap_edn_params(cljs_http.client.wrap_content_type(cljs_http.client.wrap_form_params(cljs_http.client.wrap_accept(request)))))))))))))));
});
/**
* Executes the HTTP request corresponding to the given map and returns the
* response map for corresponding to the resulting HTTP response.
* 
* In addition to the standard Ring request keys, the following keys are also
* recognized:
* * :url
* * :method
* * :query-params
*/
cljs_http.client.request = cljs_http.client.wrap_request(cljs_http.core.request);
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.delete$ = (function() { 
var delete$__delegate = function (url,p__22653){var vec__22656 = p__22653;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22656,(0),null);var G__22657 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$76,cljs.core.constant$keyword$72,cljs.core.constant$keyword$77,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22657) : cljs_http.client.request.call(null,G__22657));
};
var delete$ = function (url,var_args){
var p__22653 = null;if (arguments.length > 1) {
  p__22653 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__22653);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__22658){
var url = cljs.core.first(arglist__22658);
var p__22653 = cljs.core.rest(arglist__22658);
return delete$__delegate(url,p__22653);
});
delete$.cljs$core$IFn$_invoke$arity$variadic = delete$__delegate;
return delete$;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.get = (function() { 
var get__delegate = function (url,p__22659){var vec__22662 = p__22659;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22662,(0),null);var G__22663 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$76,cljs.core.constant$keyword$53,cljs.core.constant$keyword$77,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22663) : cljs_http.client.request.call(null,G__22663));
};
var get = function (url,var_args){
var p__22659 = null;if (arguments.length > 1) {
  p__22659 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__22659);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__22664){
var url = cljs.core.first(arglist__22664);
var p__22659 = cljs.core.rest(arglist__22664);
return get__delegate(url,p__22659);
});
get.cljs$core$IFn$_invoke$arity$variadic = get__delegate;
return get;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.head = (function() { 
var head__delegate = function (url,p__22665){var vec__22668 = p__22665;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22668,(0),null);var G__22669 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$76,cljs.core.constant$keyword$58,cljs.core.constant$keyword$77,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22669) : cljs_http.client.request.call(null,G__22669));
};
var head = function (url,var_args){
var p__22665 = null;if (arguments.length > 1) {
  p__22665 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__22665);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__22670){
var url = cljs.core.first(arglist__22670);
var p__22665 = cljs.core.rest(arglist__22670);
return head__delegate(url,p__22665);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.move = (function() { 
var move__delegate = function (url,p__22671){var vec__22674 = p__22671;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22674,(0),null);var G__22675 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$76,cljs.core.constant$keyword$80,cljs.core.constant$keyword$77,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22675) : cljs_http.client.request.call(null,G__22675));
};
var move = function (url,var_args){
var p__22671 = null;if (arguments.length > 1) {
  p__22671 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__22671);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__22676){
var url = cljs.core.first(arglist__22676);
var p__22671 = cljs.core.rest(arglist__22676);
return move__delegate(url,p__22671);
});
move.cljs$core$IFn$_invoke$arity$variadic = move__delegate;
return move;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.options = (function() { 
var options__delegate = function (url,p__22677){var vec__22680 = p__22677;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22680,(0),null);var G__22681 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$76,cljs.core.constant$keyword$81,cljs.core.constant$keyword$77,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22681) : cljs_http.client.request.call(null,G__22681));
};
var options = function (url,var_args){
var p__22677 = null;if (arguments.length > 1) {
  p__22677 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__22677);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__22682){
var url = cljs.core.first(arglist__22682);
var p__22677 = cljs.core.rest(arglist__22682);
return options__delegate(url,p__22677);
});
options.cljs$core$IFn$_invoke$arity$variadic = options__delegate;
return options;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.patch = (function() { 
var patch__delegate = function (url,p__22683){var vec__22686 = p__22683;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22686,(0),null);var G__22687 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$76,cljs.core.constant$keyword$71,cljs.core.constant$keyword$77,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22687) : cljs_http.client.request.call(null,G__22687));
};
var patch = function (url,var_args){
var p__22683 = null;if (arguments.length > 1) {
  p__22683 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__22683);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__22688){
var url = cljs.core.first(arglist__22688);
var p__22683 = cljs.core.rest(arglist__22688);
return patch__delegate(url,p__22683);
});
patch.cljs$core$IFn$_invoke$arity$variadic = patch__delegate;
return patch;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.post = (function() { 
var post__delegate = function (url,p__22689){var vec__22692 = p__22689;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22692,(0),null);var G__22693 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$76,cljs.core.constant$keyword$73,cljs.core.constant$keyword$77,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22693) : cljs_http.client.request.call(null,G__22693));
};
var post = function (url,var_args){
var p__22689 = null;if (arguments.length > 1) {
  p__22689 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__22689);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__22694){
var url = cljs.core.first(arglist__22694);
var p__22689 = cljs.core.rest(arglist__22694);
return post__delegate(url,p__22689);
});
post.cljs$core$IFn$_invoke$arity$variadic = post__delegate;
return post;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.put = (function() { 
var put__delegate = function (url,p__22695){var vec__22698 = p__22695;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22698,(0),null);var G__22699 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$76,cljs.core.constant$keyword$74,cljs.core.constant$keyword$77,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22699) : cljs_http.client.request.call(null,G__22699));
};
var put = function (url,var_args){
var p__22695 = null;if (arguments.length > 1) {
  p__22695 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__22695);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__22700){
var url = cljs.core.first(arglist__22700);
var p__22695 = cljs.core.rest(arglist__22700);
return put__delegate(url,p__22695);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
