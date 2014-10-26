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
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__3657__auto__ = v;if(cljs.core.truth_(and__3657__auto__))
{return (v > (0));
} else
{return and__3657__auto__;
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
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__22454_SHARP_,p2__22453_SHARP_){var vec__22456 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__22453_SHARP_,/=/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22456,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22456,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22454_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not(clojure.string.blank_QMARK_(url)))
{var uri = (function (){var G__22458 = url;return goog.Uri.parse(G__22458);
})();var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$39,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.constant$keyword$42,uri.getDomain(),cljs.core.constant$keyword$43,cljs_http.client.if_pos(uri.getPort()),cljs.core.constant$keyword$44,uri.getPath(),cljs.core.constant$keyword$46,((cljs.core.not(query_data.isEmpty()))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null),cljs.core.constant$keyword$38,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data))):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode(cljs.core.name(k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22459_SHARP_){return cljs_http.client.encode_val(k,p1__22459_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__22460){var vec__22462 = p__22460;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22462,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22462,(1),null);if(cljs.core.coll_QMARK_(v))
{return cljs_http.client.encode_vals(k,v);
} else
{return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__22463_SHARP_){return ("\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22463_SHARP_));
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
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){if(cljs.core.truth_((function (){var and__3657__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$58,request_method);if(and__3657__auto__)
{return cljs.core.re_find(cljs.core.re_pattern(("(?i)"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special(content_type)))),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$51.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))));
} else
{return and__3657__auto__;
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
{var params = temp__4124__auto__;var G__22466 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$59),cljs.core.constant$keyword$50,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,"content-type"], null),"application/edn");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22466) : client.call(null,G__22466));
} else
{var G__22467 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22467) : client.call(null,G__22467));
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__12271__auto___22506 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12271__auto___22506,channel){
return (function (){var f__12272__auto__ = (function (){var switch__12256__auto__ = ((function (c__12271__auto___22506,channel){
return (function (state_22495){var state_val_22496 = (state_22495[(1)]);if((state_val_22496 === (2)))
{var inst_22489 = (state_22495[(2)]);var inst_22490 = cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(request);var inst_22491 = cljs_http.client.decode_body(inst_22489,cljs.reader.read_string,"application/edn",inst_22490);var inst_22492 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_22491);var inst_22493 = cljs.core.async.close_BANG_(channel);var state_22495__$1 = (function (){var statearr_22497 = state_22495;(statearr_22497[(7)] = inst_22492);
return statearr_22497;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_22495__$1,inst_22493);
} else
{if((state_val_22496 === (1)))
{var inst_22487 = (function (){var G__22498 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22498) : client.call(null,G__22498));
})();var state_22495__$1 = state_22495;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22495__$1,(2),inst_22487);
} else
{return null;
}
}
});})(c__12271__auto___22506,channel))
;return ((function (switch__12256__auto__,c__12271__auto___22506,channel){
return (function() {
var state_machine__12257__auto__ = null;
var state_machine__12257__auto____0 = (function (){var statearr_22502 = [null,null,null,null,null,null,null,null];(statearr_22502[(0)] = state_machine__12257__auto__);
(statearr_22502[(1)] = (1));
return statearr_22502;
});
var state_machine__12257__auto____1 = (function (state_22495){while(true){
var ret_value__12258__auto__ = (function (){try{while(true){
var result__12259__auto__ = switch__12256__auto__(state_22495);if(cljs.core.keyword_identical_QMARK_(result__12259__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12259__auto__;
}
break;
}
}catch (e22503){if((e22503 instanceof Object))
{var ex__12260__auto__ = e22503;var statearr_22504_22507 = state_22495;(statearr_22504_22507[(5)] = ex__12260__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22495);
return cljs.core.constant$keyword$18;
} else
{throw e22503;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12258__auto__,cljs.core.constant$keyword$18))
{{
var G__22508 = state_22495;
state_22495 = G__22508;
continue;
}
} else
{return ret_value__12258__auto__;
}
break;
}
});
state_machine__12257__auto__ = function(state_22495){
switch(arguments.length){
case 0:
return state_machine__12257__auto____0.call(this);
case 1:
return state_machine__12257__auto____1.call(this,state_22495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12257__auto____0;
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12257__auto____1;
return state_machine__12257__auto__;
})()
;})(switch__12256__auto__,c__12271__auto___22506,channel))
})();var state__12273__auto__ = (function (){var statearr_22505 = (function (){return (f__12272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12272__auto__.cljs$core$IFn$_invoke$arity$0() : f__12272__auto__.call(null));
})();(statearr_22505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12271__auto___22506);
return statearr_22505;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12273__auto__);
});})(c__12271__auto___22506,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__22509){var vec__22513 = p__22509;var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22513,(0),null);return ((function (vec__22513,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__3669__auto__ = cljs.core.constant$keyword$60.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;var G__22514 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,"accept"], null),accept__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22514) : client.call(null,G__22514));
} else
{var G__22515 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22515) : client.call(null,G__22515));
}
});
;})(vec__22513,accept))
};
var wrap_accept = function (client,var_args){
var p__22509 = null;if (arguments.length > 1) {
  p__22509 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__22509);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__22516){
var client = cljs.core.first(arglist__22516);
var p__22509 = cljs.core.rest(arglist__22516);
return wrap_accept__delegate(client,p__22509);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__22517){var vec__22521 = p__22517;var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22521,(0),null);return ((function (vec__22521,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__3669__auto__ = cljs.core.constant$keyword$61.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;var G__22522 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,"content-type"], null),content_type__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22522) : client.call(null,G__22522));
} else
{var G__22523 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22523) : client.call(null,G__22523));
}
});
;})(vec__22521,content_type))
};
var wrap_content_type = function (client,var_args){
var p__22517 = null;if (arguments.length > 1) {
  p__22517 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__22517);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__22524){
var client = cljs.core.first(arglist__22524);
var p__22517 = cljs.core.rest(arglist__22524);
return wrap_content_type__delegate(client,p__22517);
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
{var params = temp__4124__auto__;var map__22528 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(request)], 0));var map__22528__$1 = ((cljs.core.seq_QMARK_(map__22528))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22528):map__22528);var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22528__$1,cljs.core.constant$keyword$63);var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22528__$1,cljs.core.constant$keyword$62);var G__22529 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$67),cljs.core.constant$keyword$50,cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,"content-type"], null),"application/transit+json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22529) : client.call(null,G__22529));
} else
{var G__22530 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22530) : client.call(null,G__22530));
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var map__22553 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(request)], 0));var map__22553__$1 = ((cljs.core.seq_QMARK_(map__22553))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22553):map__22553);var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22553__$1,cljs.core.constant$keyword$65);var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22553__$1,cljs.core.constant$keyword$64);var c__12271__auto___22574 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12271__auto___22574,channel,map__22553,map__22553__$1,decoding_opts,decoding){
return (function (){var f__12272__auto__ = (function (){var switch__12256__auto__ = ((function (c__12271__auto___22574,channel,map__22553,map__22553__$1,decoding_opts,decoding){
return (function (state_22563){var state_val_22564 = (state_22563[(1)]);if((state_val_22564 === (2)))
{var inst_22556 = (state_22563[(2)]);var inst_22557 = (function (){var response = inst_22556;return ((function (response,inst_22556,state_val_22564,c__12271__auto___22574,channel,map__22553,map__22553__$1,decoding_opts,decoding){
return (function (p1__22531_SHARP_){return cljs_http.util.transit_decode(p1__22531_SHARP_,decoding,decoding_opts);
});
;})(response,inst_22556,state_val_22564,c__12271__auto___22574,channel,map__22553,map__22553__$1,decoding_opts,decoding))
})();var inst_22558 = cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(request);var inst_22559 = cljs_http.client.decode_body(inst_22556,inst_22557,"application/transit+json",inst_22558);var inst_22560 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_22559);var inst_22561 = cljs.core.async.close_BANG_(channel);var state_22563__$1 = (function (){var statearr_22565 = state_22563;(statearr_22565[(7)] = inst_22560);
return statearr_22565;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_22563__$1,inst_22561);
} else
{if((state_val_22564 === (1)))
{var inst_22554 = (function (){var G__22566 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22566) : client.call(null,G__22566));
})();var state_22563__$1 = state_22563;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22563__$1,(2),inst_22554);
} else
{return null;
}
}
});})(c__12271__auto___22574,channel,map__22553,map__22553__$1,decoding_opts,decoding))
;return ((function (switch__12256__auto__,c__12271__auto___22574,channel,map__22553,map__22553__$1,decoding_opts,decoding){
return (function() {
var state_machine__12257__auto__ = null;
var state_machine__12257__auto____0 = (function (){var statearr_22570 = [null,null,null,null,null,null,null,null];(statearr_22570[(0)] = state_machine__12257__auto__);
(statearr_22570[(1)] = (1));
return statearr_22570;
});
var state_machine__12257__auto____1 = (function (state_22563){while(true){
var ret_value__12258__auto__ = (function (){try{while(true){
var result__12259__auto__ = switch__12256__auto__(state_22563);if(cljs.core.keyword_identical_QMARK_(result__12259__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12259__auto__;
}
break;
}
}catch (e22571){if((e22571 instanceof Object))
{var ex__12260__auto__ = e22571;var statearr_22572_22575 = state_22563;(statearr_22572_22575[(5)] = ex__12260__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22563);
return cljs.core.constant$keyword$18;
} else
{throw e22571;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12258__auto__,cljs.core.constant$keyword$18))
{{
var G__22576 = state_22563;
state_22563 = G__22576;
continue;
}
} else
{return ret_value__12258__auto__;
}
break;
}
});
state_machine__12257__auto__ = function(state_22563){
switch(arguments.length){
case 0:
return state_machine__12257__auto____0.call(this);
case 1:
return state_machine__12257__auto____1.call(this,state_22563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12257__auto____0;
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12257__auto____1;
return state_machine__12257__auto__;
})()
;})(switch__12256__auto__,c__12271__auto___22574,channel,map__22553,map__22553__$1,decoding_opts,decoding))
})();var state__12273__auto__ = (function (){var statearr_22573 = (function (){return (f__12272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12272__auto__.cljs$core$IFn$_invoke$arity$0() : f__12272__auto__.call(null));
})();(statearr_22573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12271__auto___22574);
return statearr_22573;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12273__auto__);
});})(c__12271__auto___22574,channel,map__22553,map__22553__$1,decoding_opts,decoding))
);
return channel;
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4124__auto__ = cljs.core.constant$keyword$69.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;var G__22579 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$69),cljs.core.constant$keyword$50,cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,"content-type"], null),"application/json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22579) : client.call(null,G__22579));
} else
{var G__22580 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22580) : client.call(null,G__22580));
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__12271__auto___22619 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12271__auto___22619,channel){
return (function (){var f__12272__auto__ = (function (){var switch__12256__auto__ = ((function (c__12271__auto___22619,channel){
return (function (state_22608){var state_val_22609 = (state_22608[(1)]);if((state_val_22609 === (2)))
{var inst_22602 = (state_22608[(2)]);var inst_22603 = cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(request);var inst_22604 = cljs_http.client.decode_body(inst_22602,cljs_http.util.json_decode,"application/json",inst_22603);var inst_22605 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_22604);var inst_22606 = cljs.core.async.close_BANG_(channel);var state_22608__$1 = (function (){var statearr_22610 = state_22608;(statearr_22610[(7)] = inst_22605);
return statearr_22610;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_22608__$1,inst_22606);
} else
{if((state_val_22609 === (1)))
{var inst_22600 = (function (){var G__22611 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22611) : client.call(null,G__22611));
})();var state_22608__$1 = state_22608;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22608__$1,(2),inst_22600);
} else
{return null;
}
}
});})(c__12271__auto___22619,channel))
;return ((function (switch__12256__auto__,c__12271__auto___22619,channel){
return (function() {
var state_machine__12257__auto__ = null;
var state_machine__12257__auto____0 = (function (){var statearr_22615 = [null,null,null,null,null,null,null,null];(statearr_22615[(0)] = state_machine__12257__auto__);
(statearr_22615[(1)] = (1));
return statearr_22615;
});
var state_machine__12257__auto____1 = (function (state_22608){while(true){
var ret_value__12258__auto__ = (function (){try{while(true){
var result__12259__auto__ = switch__12256__auto__(state_22608);if(cljs.core.keyword_identical_QMARK_(result__12259__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12259__auto__;
}
break;
}
}catch (e22616){if((e22616 instanceof Object))
{var ex__12260__auto__ = e22616;var statearr_22617_22620 = state_22608;(statearr_22617_22620[(5)] = ex__12260__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22608);
return cljs.core.constant$keyword$18;
} else
{throw e22616;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12258__auto__,cljs.core.constant$keyword$18))
{{
var G__22621 = state_22608;
state_22608 = G__22621;
continue;
}
} else
{return ret_value__12258__auto__;
}
break;
}
});
state_machine__12257__auto__ = function(state_22608){
switch(arguments.length){
case 0:
return state_machine__12257__auto____0.call(this);
case 1:
return state_machine__12257__auto____1.call(this,state_22608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12257__auto____0;
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12257__auto____1;
return state_machine__12257__auto__;
})()
;})(switch__12256__auto__,c__12271__auto___22619,channel))
})();var state__12273__auto__ = (function (){var statearr_22618 = (function (){return (f__12272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12272__auto__.cljs$core$IFn$_invoke$arity$0() : f__12272__auto__.call(null));
})();(statearr_22618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12271__auto___22619);
return statearr_22618;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12273__auto__);
});})(c__12271__auto___22619,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__22626){var map__22627 = p__22626;var map__22627__$1 = ((cljs.core.seq_QMARK_(map__22627))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22627):map__22627);var req = map__22627__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22627__$1,cljs.core.constant$keyword$38);if(cljs.core.truth_(query_params))
{var G__22628 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$38),cljs.core.constant$keyword$46,cljs_http.client.generate_query_string(query_params));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22628) : client.call(null,G__22628));
} else
{var G__22629 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22629) : client.call(null,G__22629));
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__22634){var map__22635 = p__22634;var map__22635__$1 = ((cljs.core.seq_QMARK_(map__22635))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22635):map__22635);var request = map__22635__$1;var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22635__$1,cljs.core.constant$keyword$52);var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22635__$1,cljs.core.constant$keyword$70);if(cljs.core.truth_((function (){var and__3657__auto__ = form_params;if(cljs.core.truth_(and__3657__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$71,null,cljs.core.constant$keyword$72,null,cljs.core.constant$keyword$73,null,cljs.core.constant$keyword$74,null], null), null).call(null,request_method);
} else
{return and__3657__auto__;
}
})()))
{var G__22636 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$70),cljs.core.constant$keyword$50,cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,"content-type"], null),"application/x-www-form-urlencoded");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22636) : client.call(null,G__22636));
} else
{var G__22637 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22637) : client.call(null,G__22637));
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function wrap_android_cors_bugfix(client){return (function (request){var G__22639 = (cljs.core.truth_(cljs_http.util.android_QMARK_())?cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$38,cljs.core.constant$keyword$75], null),(function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})()):request);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22639) : client.call(null,G__22639));
});
});
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4124__auto__ = cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var m = temp__4124__auto__;var G__22642 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$76),cljs.core.constant$keyword$52,m);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22642) : client.call(null,G__22642));
} else
{var G__22643 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22643) : client.call(null,G__22643));
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__22644_SHARP_){var G__22646 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22644_SHARP_,cljs.core.constant$keyword$42,server_name);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22646) : client.call(null,G__22646));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__22652){var map__22653 = p__22652;var map__22653__$1 = ((cljs.core.seq_QMARK_(map__22653))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22653):map__22653);var req = map__22653__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22653__$1,cljs.core.constant$keyword$38);var temp__4124__auto__ = cljs_http.client.parse_url(cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;var G__22654 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.constant$keyword$77),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$38], null),((function (spec,temp__4124__auto__,map__22653,map__22653__$1,req,query_params){
return (function (p1__22647_SHARP_){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__22647_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__22653,map__22653__$1,req,query_params))
);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22654) : client.call(null,G__22654));
} else
{var G__22655 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22655) : client.call(null,G__22655));
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__22656){var vec__22660 = p__22656;var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22660,(0),null);return ((function (vec__22660,credentials){
return (function (req){var credentials__$1 = (function (){var or__3669__auto__ = cljs.core.constant$keyword$78.cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_(credentials__$1)))
{var G__22661 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$78),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22661) : client.call(null,G__22661));
} else
{var G__22662 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22662) : client.call(null,G__22662));
}
});
;})(vec__22660,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__22656 = null;if (arguments.length > 1) {
  p__22656 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__22656);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__22663){
var client = cljs.core.first(arglist__22663);
var p__22656 = cljs.core.rest(arglist__22663);
return wrap_basic_auth__delegate(client,p__22656);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4124__auto__ = cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var oauth_token = temp__4124__auto__;var G__22666 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$79),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,"authorization"], null),("Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22666) : client.call(null,G__22666));
} else
{var G__22667 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__22667) : client.call(null,G__22667));
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
var delete$__delegate = function (url,p__22668){var vec__22671 = p__22668;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22671,(0),null);var G__22672 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$76,cljs.core.constant$keyword$72,cljs.core.constant$keyword$77,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22672) : cljs_http.client.request.call(null,G__22672));
};
var delete$ = function (url,var_args){
var p__22668 = null;if (arguments.length > 1) {
  p__22668 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__22668);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__22673){
var url = cljs.core.first(arglist__22673);
var p__22668 = cljs.core.rest(arglist__22673);
return delete$__delegate(url,p__22668);
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
var get__delegate = function (url,p__22674){var vec__22677 = p__22674;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22677,(0),null);var G__22678 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$76,cljs.core.constant$keyword$53,cljs.core.constant$keyword$77,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22678) : cljs_http.client.request.call(null,G__22678));
};
var get = function (url,var_args){
var p__22674 = null;if (arguments.length > 1) {
  p__22674 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__22674);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__22679){
var url = cljs.core.first(arglist__22679);
var p__22674 = cljs.core.rest(arglist__22679);
return get__delegate(url,p__22674);
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
var head__delegate = function (url,p__22680){var vec__22683 = p__22680;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22683,(0),null);var G__22684 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$76,cljs.core.constant$keyword$58,cljs.core.constant$keyword$77,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22684) : cljs_http.client.request.call(null,G__22684));
};
var head = function (url,var_args){
var p__22680 = null;if (arguments.length > 1) {
  p__22680 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__22680);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__22685){
var url = cljs.core.first(arglist__22685);
var p__22680 = cljs.core.rest(arglist__22685);
return head__delegate(url,p__22680);
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
var move__delegate = function (url,p__22686){var vec__22689 = p__22686;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22689,(0),null);var G__22690 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$76,cljs.core.constant$keyword$80,cljs.core.constant$keyword$77,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22690) : cljs_http.client.request.call(null,G__22690));
};
var move = function (url,var_args){
var p__22686 = null;if (arguments.length > 1) {
  p__22686 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__22686);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__22691){
var url = cljs.core.first(arglist__22691);
var p__22686 = cljs.core.rest(arglist__22691);
return move__delegate(url,p__22686);
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
var options__delegate = function (url,p__22692){var vec__22695 = p__22692;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22695,(0),null);var G__22696 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$76,cljs.core.constant$keyword$81,cljs.core.constant$keyword$77,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22696) : cljs_http.client.request.call(null,G__22696));
};
var options = function (url,var_args){
var p__22692 = null;if (arguments.length > 1) {
  p__22692 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__22692);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__22697){
var url = cljs.core.first(arglist__22697);
var p__22692 = cljs.core.rest(arglist__22697);
return options__delegate(url,p__22692);
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
var patch__delegate = function (url,p__22698){var vec__22701 = p__22698;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22701,(0),null);var G__22702 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$76,cljs.core.constant$keyword$71,cljs.core.constant$keyword$77,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22702) : cljs_http.client.request.call(null,G__22702));
};
var patch = function (url,var_args){
var p__22698 = null;if (arguments.length > 1) {
  p__22698 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__22698);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__22703){
var url = cljs.core.first(arglist__22703);
var p__22698 = cljs.core.rest(arglist__22703);
return patch__delegate(url,p__22698);
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
var post__delegate = function (url,p__22704){var vec__22707 = p__22704;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22707,(0),null);var G__22708 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$76,cljs.core.constant$keyword$73,cljs.core.constant$keyword$77,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22708) : cljs_http.client.request.call(null,G__22708));
};
var post = function (url,var_args){
var p__22704 = null;if (arguments.length > 1) {
  p__22704 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__22704);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__22709){
var url = cljs.core.first(arglist__22709);
var p__22704 = cljs.core.rest(arglist__22709);
return post__delegate(url,p__22704);
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
var put__delegate = function (url,p__22710){var vec__22713 = p__22710;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22713,(0),null);var G__22714 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$76,cljs.core.constant$keyword$74,cljs.core.constant$keyword$77,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__22714) : cljs_http.client.request.call(null,G__22714));
};
var put = function (url,var_args){
var p__22710 = null;if (arguments.length > 1) {
  p__22710 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__22710);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__22715){
var url = cljs.core.first(arglist__22715);
var p__22710 = cljs.core.rest(arglist__22715);
return put__delegate(url,p__22710);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
