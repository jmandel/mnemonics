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
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__23274_SHARP_,p2__23273_SHARP_){var vec__23276 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__23273_SHARP_,/=/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23276,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23276,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23274_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not(clojure.string.blank_QMARK_(url)))
{var uri = (function (){var G__23278 = url;return goog.Uri.parse(G__23278);
})();var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$37,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.constant$keyword$40,uri.getDomain(),cljs.core.constant$keyword$41,cljs_http.client.if_pos(uri.getPort()),cljs.core.constant$keyword$42,uri.getPath(),cljs.core.constant$keyword$44,((cljs.core.not(query_data.isEmpty()))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null),cljs.core.constant$keyword$36,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data))):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode(cljs.core.name(k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23279_SHARP_){return cljs_http.client.encode_val(k,p1__23279_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__23280){var vec__23282 = p__23280;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23282,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23282,(1),null);if(cljs.core.coll_QMARK_(v))
{return cljs_http.client.encode_vals(k,v);
} else
{return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__23283_SHARP_){return ("\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23283_SHARP_));
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
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){if(cljs.core.truth_((function (){var and__3657__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,request_method);if(and__3657__auto__)
{return cljs.core.re_find(cljs.core.re_pattern(("(?i)"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special(content_type)))),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))));
} else
{return and__3657__auto__;
}
})()))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$48], null),decode_fn);
} else
{return response;
}
});
/**
* Encode :edn-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_edn_params = (function wrap_edn_params(client){return (function (request){var temp__4124__auto__ = cljs.core.constant$keyword$57.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;var G__23286 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$57),cljs.core.constant$keyword$48,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$49,"content-type"], null),"application/edn");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23286) : client.call(null,G__23286));
} else
{var G__23287 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23287) : client.call(null,G__23287));
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__6524__auto___23326 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6524__auto___23326,channel){
return (function (){var f__6525__auto__ = (function (){var switch__6509__auto__ = ((function (c__6524__auto___23326,channel){
return (function (state_23315){var state_val_23316 = (state_23315[(1)]);if((state_val_23316 === (2)))
{var inst_23309 = (state_23315[(2)]);var inst_23310 = cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(request);var inst_23311 = cljs_http.client.decode_body(inst_23309,cljs.reader.read_string,"application/edn",inst_23310);var inst_23312 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_23311);var inst_23313 = cljs.core.async.close_BANG_(channel);var state_23315__$1 = (function (){var statearr_23317 = state_23315;(statearr_23317[(7)] = inst_23312);
return statearr_23317;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_23315__$1,inst_23313);
} else
{if((state_val_23316 === (1)))
{var inst_23307 = (function (){var G__23318 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23318) : client.call(null,G__23318));
})();var state_23315__$1 = state_23315;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23315__$1,(2),inst_23307);
} else
{return null;
}
}
});})(c__6524__auto___23326,channel))
;return ((function (switch__6509__auto__,c__6524__auto___23326,channel){
return (function() {
var state_machine__6510__auto__ = null;
var state_machine__6510__auto____0 = (function (){var statearr_23322 = [null,null,null,null,null,null,null,null];(statearr_23322[(0)] = state_machine__6510__auto__);
(statearr_23322[(1)] = (1));
return statearr_23322;
});
var state_machine__6510__auto____1 = (function (state_23315){while(true){
var ret_value__6511__auto__ = (function (){try{while(true){
var result__6512__auto__ = switch__6509__auto__(state_23315);if(cljs.core.keyword_identical_QMARK_(result__6512__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6512__auto__;
}
break;
}
}catch (e23323){if((e23323 instanceof Object))
{var ex__6513__auto__ = e23323;var statearr_23324_23327 = state_23315;(statearr_23324_23327[(5)] = ex__6513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23315);
return cljs.core.constant$keyword$16;
} else
{throw e23323;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6511__auto__,cljs.core.constant$keyword$16))
{{
var G__23328 = state_23315;
state_23315 = G__23328;
continue;
}
} else
{return ret_value__6511__auto__;
}
break;
}
});
state_machine__6510__auto__ = function(state_23315){
switch(arguments.length){
case 0:
return state_machine__6510__auto____0.call(this);
case 1:
return state_machine__6510__auto____1.call(this,state_23315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6510__auto____0;
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6510__auto____1;
return state_machine__6510__auto__;
})()
;})(switch__6509__auto__,c__6524__auto___23326,channel))
})();var state__6526__auto__ = (function (){var statearr_23325 = (function (){return (f__6525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6525__auto__.cljs$core$IFn$_invoke$arity$0() : f__6525__auto__.call(null));
})();(statearr_23325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___23326);
return statearr_23325;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6526__auto__);
});})(c__6524__auto___23326,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__23329){var vec__23333 = p__23329;var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23333,(0),null);return ((function (vec__23333,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__3669__auto__ = cljs.core.constant$keyword$58.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;var G__23334 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$49,"accept"], null),accept__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23334) : client.call(null,G__23334));
} else
{var G__23335 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23335) : client.call(null,G__23335));
}
});
;})(vec__23333,accept))
};
var wrap_accept = function (client,var_args){
var p__23329 = null;if (arguments.length > 1) {
  p__23329 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__23329);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__23336){
var client = cljs.core.first(arglist__23336);
var p__23329 = cljs.core.rest(arglist__23336);
return wrap_accept__delegate(client,p__23329);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__23337){var vec__23341 = p__23337;var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23341,(0),null);return ((function (vec__23341,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__3669__auto__ = cljs.core.constant$keyword$59.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;var G__23342 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$49,"content-type"], null),content_type__$1);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23342) : client.call(null,G__23342));
} else
{var G__23343 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23343) : client.call(null,G__23343));
}
});
;})(vec__23341,content_type))
};
var wrap_content_type = function (client,var_args){
var p__23337 = null;if (arguments.length > 1) {
  p__23337 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__23337);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__23344){
var client = cljs.core.first(arglist__23344);
var p__23337 = cljs.core.rest(arglist__23344);
return wrap_content_type__delegate(client,p__23337);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$60,cljs.core.constant$keyword$64,cljs.core.constant$keyword$61,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$62,cljs.core.constant$keyword$64,cljs.core.constant$keyword$63,cljs.core.PersistentArrayMap.EMPTY], null);
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
cljs_http.client.wrap_transit_params = (function wrap_transit_params(client){return (function (request){var temp__4124__auto__ = cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;var map__23348 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(request)], 0));var map__23348__$1 = ((cljs.core.seq_QMARK_(map__23348))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23348):map__23348);var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23348__$1,cljs.core.constant$keyword$61);var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23348__$1,cljs.core.constant$keyword$60);var G__23349 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$65),cljs.core.constant$keyword$48,cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$49,"content-type"], null),"application/transit+json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23349) : client.call(null,G__23349));
} else
{var G__23350 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23350) : client.call(null,G__23350));
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var map__23373 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(request)], 0));var map__23373__$1 = ((cljs.core.seq_QMARK_(map__23373))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23373):map__23373);var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23373__$1,cljs.core.constant$keyword$63);var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23373__$1,cljs.core.constant$keyword$62);var c__6524__auto___23394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6524__auto___23394,channel,map__23373,map__23373__$1,decoding_opts,decoding){
return (function (){var f__6525__auto__ = (function (){var switch__6509__auto__ = ((function (c__6524__auto___23394,channel,map__23373,map__23373__$1,decoding_opts,decoding){
return (function (state_23383){var state_val_23384 = (state_23383[(1)]);if((state_val_23384 === (2)))
{var inst_23376 = (state_23383[(2)]);var inst_23377 = (function (){var response = inst_23376;return ((function (response,inst_23376,state_val_23384,c__6524__auto___23394,channel,map__23373,map__23373__$1,decoding_opts,decoding){
return (function (p1__23351_SHARP_){return cljs_http.util.transit_decode(p1__23351_SHARP_,decoding,decoding_opts);
});
;})(response,inst_23376,state_val_23384,c__6524__auto___23394,channel,map__23373,map__23373__$1,decoding_opts,decoding))
})();var inst_23378 = cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(request);var inst_23379 = cljs_http.client.decode_body(inst_23376,inst_23377,"application/transit+json",inst_23378);var inst_23380 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_23379);var inst_23381 = cljs.core.async.close_BANG_(channel);var state_23383__$1 = (function (){var statearr_23385 = state_23383;(statearr_23385[(7)] = inst_23380);
return statearr_23385;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_23383__$1,inst_23381);
} else
{if((state_val_23384 === (1)))
{var inst_23374 = (function (){var G__23386 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23386) : client.call(null,G__23386));
})();var state_23383__$1 = state_23383;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23383__$1,(2),inst_23374);
} else
{return null;
}
}
});})(c__6524__auto___23394,channel,map__23373,map__23373__$1,decoding_opts,decoding))
;return ((function (switch__6509__auto__,c__6524__auto___23394,channel,map__23373,map__23373__$1,decoding_opts,decoding){
return (function() {
var state_machine__6510__auto__ = null;
var state_machine__6510__auto____0 = (function (){var statearr_23390 = [null,null,null,null,null,null,null,null];(statearr_23390[(0)] = state_machine__6510__auto__);
(statearr_23390[(1)] = (1));
return statearr_23390;
});
var state_machine__6510__auto____1 = (function (state_23383){while(true){
var ret_value__6511__auto__ = (function (){try{while(true){
var result__6512__auto__ = switch__6509__auto__(state_23383);if(cljs.core.keyword_identical_QMARK_(result__6512__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6512__auto__;
}
break;
}
}catch (e23391){if((e23391 instanceof Object))
{var ex__6513__auto__ = e23391;var statearr_23392_23395 = state_23383;(statearr_23392_23395[(5)] = ex__6513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23383);
return cljs.core.constant$keyword$16;
} else
{throw e23391;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6511__auto__,cljs.core.constant$keyword$16))
{{
var G__23396 = state_23383;
state_23383 = G__23396;
continue;
}
} else
{return ret_value__6511__auto__;
}
break;
}
});
state_machine__6510__auto__ = function(state_23383){
switch(arguments.length){
case 0:
return state_machine__6510__auto____0.call(this);
case 1:
return state_machine__6510__auto____1.call(this,state_23383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6510__auto____0;
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6510__auto____1;
return state_machine__6510__auto__;
})()
;})(switch__6509__auto__,c__6524__auto___23394,channel,map__23373,map__23373__$1,decoding_opts,decoding))
})();var state__6526__auto__ = (function (){var statearr_23393 = (function (){return (f__6525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6525__auto__.cljs$core$IFn$_invoke$arity$0() : f__6525__auto__.call(null));
})();(statearr_23393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___23394);
return statearr_23393;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6526__auto__);
});})(c__6524__auto___23394,channel,map__23373,map__23373__$1,decoding_opts,decoding))
);
return channel;
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4124__auto__ = cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;var G__23399 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$67),cljs.core.constant$keyword$48,cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$49,"content-type"], null),"application/json");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23399) : client.call(null,G__23399));
} else
{var G__23400 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23400) : client.call(null,G__23400));
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__6524__auto___23439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6524__auto___23439,channel){
return (function (){var f__6525__auto__ = (function (){var switch__6509__auto__ = ((function (c__6524__auto___23439,channel){
return (function (state_23428){var state_val_23429 = (state_23428[(1)]);if((state_val_23429 === (2)))
{var inst_23422 = (state_23428[(2)]);var inst_23423 = cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(request);var inst_23424 = cljs_http.client.decode_body(inst_23422,cljs_http.util.json_decode,"application/json",inst_23423);var inst_23425 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_23424);var inst_23426 = cljs.core.async.close_BANG_(channel);var state_23428__$1 = (function (){var statearr_23430 = state_23428;(statearr_23430[(7)] = inst_23425);
return statearr_23430;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_23428__$1,inst_23426);
} else
{if((state_val_23429 === (1)))
{var inst_23420 = (function (){var G__23431 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23431) : client.call(null,G__23431));
})();var state_23428__$1 = state_23428;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23428__$1,(2),inst_23420);
} else
{return null;
}
}
});})(c__6524__auto___23439,channel))
;return ((function (switch__6509__auto__,c__6524__auto___23439,channel){
return (function() {
var state_machine__6510__auto__ = null;
var state_machine__6510__auto____0 = (function (){var statearr_23435 = [null,null,null,null,null,null,null,null];(statearr_23435[(0)] = state_machine__6510__auto__);
(statearr_23435[(1)] = (1));
return statearr_23435;
});
var state_machine__6510__auto____1 = (function (state_23428){while(true){
var ret_value__6511__auto__ = (function (){try{while(true){
var result__6512__auto__ = switch__6509__auto__(state_23428);if(cljs.core.keyword_identical_QMARK_(result__6512__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6512__auto__;
}
break;
}
}catch (e23436){if((e23436 instanceof Object))
{var ex__6513__auto__ = e23436;var statearr_23437_23440 = state_23428;(statearr_23437_23440[(5)] = ex__6513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23428);
return cljs.core.constant$keyword$16;
} else
{throw e23436;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6511__auto__,cljs.core.constant$keyword$16))
{{
var G__23441 = state_23428;
state_23428 = G__23441;
continue;
}
} else
{return ret_value__6511__auto__;
}
break;
}
});
state_machine__6510__auto__ = function(state_23428){
switch(arguments.length){
case 0:
return state_machine__6510__auto____0.call(this);
case 1:
return state_machine__6510__auto____1.call(this,state_23428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6510__auto____0;
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6510__auto____1;
return state_machine__6510__auto__;
})()
;})(switch__6509__auto__,c__6524__auto___23439,channel))
})();var state__6526__auto__ = (function (){var statearr_23438 = (function (){return (f__6525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6525__auto__.cljs$core$IFn$_invoke$arity$0() : f__6525__auto__.call(null));
})();(statearr_23438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___23439);
return statearr_23438;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6526__auto__);
});})(c__6524__auto___23439,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__23446){var map__23447 = p__23446;var map__23447__$1 = ((cljs.core.seq_QMARK_(map__23447))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23447):map__23447);var req = map__23447__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23447__$1,cljs.core.constant$keyword$36);if(cljs.core.truth_(query_params))
{var G__23448 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$36),cljs.core.constant$keyword$44,cljs_http.client.generate_query_string(query_params));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23448) : client.call(null,G__23448));
} else
{var G__23449 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23449) : client.call(null,G__23449));
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__23454){var map__23455 = p__23454;var map__23455__$1 = ((cljs.core.seq_QMARK_(map__23455))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23455):map__23455);var request = map__23455__$1;var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23455__$1,cljs.core.constant$keyword$50);var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23455__$1,cljs.core.constant$keyword$68);if(cljs.core.truth_((function (){var and__3657__auto__ = form_params;if(cljs.core.truth_(and__3657__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$69,null,cljs.core.constant$keyword$70,null,cljs.core.constant$keyword$71,null,cljs.core.constant$keyword$72,null], null), null).call(null,request_method);
} else
{return and__3657__auto__;
}
})()))
{var G__23456 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$68),cljs.core.constant$keyword$48,cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$49,"content-type"], null),"application/x-www-form-urlencoded");return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23456) : client.call(null,G__23456));
} else
{var G__23457 = request;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23457) : client.call(null,G__23457));
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function wrap_android_cors_bugfix(client){return (function (request){var G__23459 = (cljs.core.truth_(cljs_http.util.android_QMARK_())?cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$36,cljs.core.constant$keyword$73], null),(function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})()):request);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23459) : client.call(null,G__23459));
});
});
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4124__auto__ = cljs.core.constant$keyword$74.cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var m = temp__4124__auto__;var G__23462 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$74),cljs.core.constant$keyword$50,m);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23462) : client.call(null,G__23462));
} else
{var G__23463 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23463) : client.call(null,G__23463));
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__23464_SHARP_){var G__23466 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23464_SHARP_,cljs.core.constant$keyword$40,server_name);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23466) : client.call(null,G__23466));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__23472){var map__23473 = p__23472;var map__23473__$1 = ((cljs.core.seq_QMARK_(map__23473))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23473):map__23473);var req = map__23473__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23473__$1,cljs.core.constant$keyword$36);var temp__4124__auto__ = cljs_http.client.parse_url(cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;var G__23474 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.constant$keyword$75),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$36], null),((function (spec,temp__4124__auto__,map__23473,map__23473__$1,req,query_params){
return (function (p1__23467_SHARP_){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__23467_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__23473,map__23473__$1,req,query_params))
);return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23474) : client.call(null,G__23474));
} else
{var G__23475 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23475) : client.call(null,G__23475));
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__23476){var vec__23480 = p__23476;var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23480,(0),null);return ((function (vec__23480,credentials){
return (function (req){var credentials__$1 = (function (){var or__3669__auto__ = cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_(credentials__$1)))
{var G__23481 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$76),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$49,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23481) : client.call(null,G__23481));
} else
{var G__23482 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23482) : client.call(null,G__23482));
}
});
;})(vec__23480,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__23476 = null;if (arguments.length > 1) {
  p__23476 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__23476);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__23483){
var client = cljs.core.first(arglist__23483);
var p__23476 = cljs.core.rest(arglist__23483);
return wrap_basic_auth__delegate(client,p__23476);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4124__auto__ = cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var oauth_token = temp__4124__auto__;var G__23486 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$77),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$49,"authorization"], null),("Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)));return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23486) : client.call(null,G__23486));
} else
{var G__23487 = req;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__23487) : client.call(null,G__23487));
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
var delete$__delegate = function (url,p__23488){var vec__23491 = p__23488;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23491,(0),null);var G__23492 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$74,cljs.core.constant$keyword$70,cljs.core.constant$keyword$75,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23492) : cljs_http.client.request.call(null,G__23492));
};
var delete$ = function (url,var_args){
var p__23488 = null;if (arguments.length > 1) {
  p__23488 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__23488);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__23493){
var url = cljs.core.first(arglist__23493);
var p__23488 = cljs.core.rest(arglist__23493);
return delete$__delegate(url,p__23488);
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
var get__delegate = function (url,p__23494){var vec__23497 = p__23494;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23497,(0),null);var G__23498 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$74,cljs.core.constant$keyword$51,cljs.core.constant$keyword$75,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23498) : cljs_http.client.request.call(null,G__23498));
};
var get = function (url,var_args){
var p__23494 = null;if (arguments.length > 1) {
  p__23494 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__23494);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__23499){
var url = cljs.core.first(arglist__23499);
var p__23494 = cljs.core.rest(arglist__23499);
return get__delegate(url,p__23494);
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
var head__delegate = function (url,p__23500){var vec__23503 = p__23500;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23503,(0),null);var G__23504 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$74,cljs.core.constant$keyword$56,cljs.core.constant$keyword$75,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23504) : cljs_http.client.request.call(null,G__23504));
};
var head = function (url,var_args){
var p__23500 = null;if (arguments.length > 1) {
  p__23500 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__23500);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__23505){
var url = cljs.core.first(arglist__23505);
var p__23500 = cljs.core.rest(arglist__23505);
return head__delegate(url,p__23500);
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
var move__delegate = function (url,p__23506){var vec__23509 = p__23506;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23509,(0),null);var G__23510 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$74,cljs.core.constant$keyword$78,cljs.core.constant$keyword$75,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23510) : cljs_http.client.request.call(null,G__23510));
};
var move = function (url,var_args){
var p__23506 = null;if (arguments.length > 1) {
  p__23506 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__23506);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__23511){
var url = cljs.core.first(arglist__23511);
var p__23506 = cljs.core.rest(arglist__23511);
return move__delegate(url,p__23506);
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
var options__delegate = function (url,p__23512){var vec__23515 = p__23512;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23515,(0),null);var G__23516 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$74,cljs.core.constant$keyword$79,cljs.core.constant$keyword$75,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23516) : cljs_http.client.request.call(null,G__23516));
};
var options = function (url,var_args){
var p__23512 = null;if (arguments.length > 1) {
  p__23512 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__23512);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__23517){
var url = cljs.core.first(arglist__23517);
var p__23512 = cljs.core.rest(arglist__23517);
return options__delegate(url,p__23512);
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
var patch__delegate = function (url,p__23518){var vec__23521 = p__23518;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23521,(0),null);var G__23522 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$74,cljs.core.constant$keyword$69,cljs.core.constant$keyword$75,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23522) : cljs_http.client.request.call(null,G__23522));
};
var patch = function (url,var_args){
var p__23518 = null;if (arguments.length > 1) {
  p__23518 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__23518);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__23523){
var url = cljs.core.first(arglist__23523);
var p__23518 = cljs.core.rest(arglist__23523);
return patch__delegate(url,p__23518);
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
var post__delegate = function (url,p__23524){var vec__23527 = p__23524;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23527,(0),null);var G__23528 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$74,cljs.core.constant$keyword$71,cljs.core.constant$keyword$75,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23528) : cljs_http.client.request.call(null,G__23528));
};
var post = function (url,var_args){
var p__23524 = null;if (arguments.length > 1) {
  p__23524 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__23524);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__23529){
var url = cljs.core.first(arglist__23529);
var p__23524 = cljs.core.rest(arglist__23529);
return post__delegate(url,p__23524);
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
var put__delegate = function (url,p__23530){var vec__23533 = p__23530;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23533,(0),null);var G__23534 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$74,cljs.core.constant$keyword$72,cljs.core.constant$keyword$75,url], null)], 0));return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__23534) : cljs_http.client.request.call(null,G__23534));
};
var put = function (url,var_args){
var p__23530 = null;if (arguments.length > 1) {
  p__23530 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__23530);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__23535){
var url = cljs.core.first(arglist__23535);
var p__23530 = cljs.core.rest(arglist__23535);
return put__delegate(url,p__23530);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
