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
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__8029__auto__ = v;if(cljs.core.truth_(and__8029__auto__))
{return (v > (0));
} else
{return and__8029__auto__;
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
cljs_http.client.parse_query_params = (function parse_query_params(s){if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s)))
{return cljs.core.reduce.call(null,(function (p1__14982_SHARP_,p2__14981_SHARP_){var vec__14984 = clojure.string.split.call(null,p2__14981_SHARP_,/=/);var k = cljs.core.nth.call(null,vec__14984,(0),null);var v = cljs.core.nth.call(null,vec__14984,(1),null);return cljs.core.assoc.call(null,p1__14982_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,url)))
{var uri = goog.Uri.parse(url);var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data))):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,cljs.core.name.call(null,k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__14985_SHARP_){return cljs_http.client.encode_val.call(null,k,p1__14985_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__14986){var vec__14988 = p__14986;var k = cljs.core.nth.call(null,vec__14988,(0),null);var v = cljs.core.nth.call(null,vec__14988,(1),null);if(cljs.core.coll_QMARK_.call(null,v))
{return cljs_http.client.encode_vals.call(null,k,v);
} else
{return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__14989_SHARP_){return ("\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14989_SHARP_));
});})(esc_chars))
,esc_chars));
})();
/**
* Escape special characters -- for content-type.
*/
cljs_http.client.escape_special = (function escape_special(string){return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
* Decocde the :body of `response` with `decode-fn` if the content type matches.
*/
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){if(cljs.core.truth_((function (){var and__8029__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);if(and__8029__auto__)
{return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,("(?i)"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type)))),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))));
} else
{return and__8029__auto__;
}
})()))
{return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else
{return response;
}
});
/**
* Encode :edn-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_edn_params = (function wrap_edn_params(client){return (function (request){var temp__4124__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/edn"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__11410__auto___15026 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11410__auto___15026,channel){
return (function (){var f__11411__auto__ = (function (){var switch__11395__auto__ = ((function (c__11410__auto___15026,channel){
return (function (state_15016){var state_val_15017 = (state_15016[(1)]);if((state_val_15017 === (2)))
{var inst_15010 = (state_15016[(2)]);var inst_15011 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_15012 = cljs_http.client.decode_body.call(null,inst_15010,cljs.reader.read_string,"application/edn",inst_15011);var inst_15013 = cljs.core.async.put_BANG_.call(null,channel,inst_15012);var inst_15014 = cljs.core.async.close_BANG_.call(null,channel);var state_15016__$1 = (function (){var statearr_15018 = state_15016;(statearr_15018[(7)] = inst_15013);
return statearr_15018;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15016__$1,inst_15014);
} else
{if((state_val_15017 === (1)))
{var inst_15008 = client.call(null,request);var state_15016__$1 = state_15016;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15016__$1,(2),inst_15008);
} else
{return null;
}
}
});})(c__11410__auto___15026,channel))
;return ((function (switch__11395__auto__,c__11410__auto___15026,channel){
return (function() {
var state_machine__11396__auto__ = null;
var state_machine__11396__auto____0 = (function (){var statearr_15022 = [null,null,null,null,null,null,null,null];(statearr_15022[(0)] = state_machine__11396__auto__);
(statearr_15022[(1)] = (1));
return statearr_15022;
});
var state_machine__11396__auto____1 = (function (state_15016){while(true){
var ret_value__11397__auto__ = (function (){try{while(true){
var result__11398__auto__ = switch__11395__auto__.call(null,state_15016);if(cljs.core.keyword_identical_QMARK_.call(null,result__11398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11398__auto__;
}
break;
}
}catch (e15023){if((e15023 instanceof Object))
{var ex__11399__auto__ = e15023;var statearr_15024_15027 = state_15016;(statearr_15024_15027[(5)] = ex__11399__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15016);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15023;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15028 = state_15016;
state_15016 = G__15028;
continue;
}
} else
{return ret_value__11397__auto__;
}
break;
}
});
state_machine__11396__auto__ = function(state_15016){
switch(arguments.length){
case 0:
return state_machine__11396__auto____0.call(this);
case 1:
return state_machine__11396__auto____1.call(this,state_15016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11396__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11396__auto____0;
state_machine__11396__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11396__auto____1;
return state_machine__11396__auto__;
})()
;})(switch__11395__auto__,c__11410__auto___15026,channel))
})();var state__11412__auto__ = (function (){var statearr_15025 = f__11411__auto__.call(null);(statearr_15025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11410__auto___15026);
return statearr_15025;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11412__auto__);
});})(c__11410__auto___15026,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__15029){var vec__15031 = p__15029;var accept = cljs.core.nth.call(null,vec__15031,(0),null);return ((function (vec__15031,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__8041__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__8041__auto__))
{return or__8041__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else
{return client.call(null,request);
}
});
;})(vec__15031,accept))
};
var wrap_accept = function (client,var_args){
var p__15029 = null;if (arguments.length > 1) {
  p__15029 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__15029);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__15032){
var client = cljs.core.first(arglist__15032);
var p__15029 = cljs.core.rest(arglist__15032);
return wrap_accept__delegate(client,p__15029);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__15033){var vec__15035 = p__15033;var content_type = cljs.core.nth.call(null,vec__15035,(0),null);return ((function (vec__15035,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__8041__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__8041__auto__))
{return or__8041__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else
{return client.call(null,request);
}
});
;})(vec__15035,content_type))
};
var wrap_content_type = function (client,var_args){
var p__15033 = null;if (arguments.length > 1) {
  p__15033 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__15033);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__15036){
var client = cljs.core.first(arglist__15036);
var p__15033 = cljs.core.rest(arglist__15036);
return wrap_content_type__delegate(client,p__15033);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
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
cljs_http.client.wrap_transit_params = (function wrap_transit_params(client){return (function (request){var temp__4124__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;var map__15038 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));var map__15038__$1 = ((cljs.core.seq_QMARK_.call(null,map__15038))?cljs.core.apply.call(null,cljs.core.hash_map,map__15038):map__15038);var encoding_opts = cljs.core.get.call(null,map__15038__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));var encoding = cljs.core.get.call(null,map__15038__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/transit+json"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var map__15060 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));var map__15060__$1 = ((cljs.core.seq_QMARK_.call(null,map__15060))?cljs.core.apply.call(null,cljs.core.hash_map,map__15060):map__15060);var decoding_opts = cljs.core.get.call(null,map__15060__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));var decoding = cljs.core.get.call(null,map__15060__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));var c__11410__auto___15080 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11410__auto___15080,channel,map__15060,map__15060__$1,decoding_opts,decoding){
return (function (){var f__11411__auto__ = (function (){var switch__11395__auto__ = ((function (c__11410__auto___15080,channel,map__15060,map__15060__$1,decoding_opts,decoding){
return (function (state_15070){var state_val_15071 = (state_15070[(1)]);if((state_val_15071 === (2)))
{var inst_15063 = (state_15070[(2)]);var inst_15064 = (function (){var response = inst_15063;return ((function (response,inst_15063,state_val_15071,c__11410__auto___15080,channel,map__15060,map__15060__$1,decoding_opts,decoding){
return (function (p1__15039_SHARP_){return cljs_http.util.transit_decode.call(null,p1__15039_SHARP_,decoding,decoding_opts);
});
;})(response,inst_15063,state_val_15071,c__11410__auto___15080,channel,map__15060,map__15060__$1,decoding_opts,decoding))
})();var inst_15065 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_15066 = cljs_http.client.decode_body.call(null,inst_15063,inst_15064,"application/transit+json",inst_15065);var inst_15067 = cljs.core.async.put_BANG_.call(null,channel,inst_15066);var inst_15068 = cljs.core.async.close_BANG_.call(null,channel);var state_15070__$1 = (function (){var statearr_15072 = state_15070;(statearr_15072[(7)] = inst_15067);
return statearr_15072;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15070__$1,inst_15068);
} else
{if((state_val_15071 === (1)))
{var inst_15061 = client.call(null,request);var state_15070__$1 = state_15070;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15070__$1,(2),inst_15061);
} else
{return null;
}
}
});})(c__11410__auto___15080,channel,map__15060,map__15060__$1,decoding_opts,decoding))
;return ((function (switch__11395__auto__,c__11410__auto___15080,channel,map__15060,map__15060__$1,decoding_opts,decoding){
return (function() {
var state_machine__11396__auto__ = null;
var state_machine__11396__auto____0 = (function (){var statearr_15076 = [null,null,null,null,null,null,null,null];(statearr_15076[(0)] = state_machine__11396__auto__);
(statearr_15076[(1)] = (1));
return statearr_15076;
});
var state_machine__11396__auto____1 = (function (state_15070){while(true){
var ret_value__11397__auto__ = (function (){try{while(true){
var result__11398__auto__ = switch__11395__auto__.call(null,state_15070);if(cljs.core.keyword_identical_QMARK_.call(null,result__11398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11398__auto__;
}
break;
}
}catch (e15077){if((e15077 instanceof Object))
{var ex__11399__auto__ = e15077;var statearr_15078_15081 = state_15070;(statearr_15078_15081[(5)] = ex__11399__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15070);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15077;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15082 = state_15070;
state_15070 = G__15082;
continue;
}
} else
{return ret_value__11397__auto__;
}
break;
}
});
state_machine__11396__auto__ = function(state_15070){
switch(arguments.length){
case 0:
return state_machine__11396__auto____0.call(this);
case 1:
return state_machine__11396__auto____1.call(this,state_15070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11396__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11396__auto____0;
state_machine__11396__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11396__auto____1;
return state_machine__11396__auto__;
})()
;})(switch__11395__auto__,c__11410__auto___15080,channel,map__15060,map__15060__$1,decoding_opts,decoding))
})();var state__11412__auto__ = (function (){var statearr_15079 = f__11411__auto__.call(null);(statearr_15079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11410__auto___15080);
return statearr_15079;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11412__auto__);
});})(c__11410__auto___15080,channel,map__15060,map__15060__$1,decoding_opts,decoding))
);
return channel;
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4124__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/json"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__11410__auto___15119 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11410__auto___15119,channel){
return (function (){var f__11411__auto__ = (function (){var switch__11395__auto__ = ((function (c__11410__auto___15119,channel){
return (function (state_15109){var state_val_15110 = (state_15109[(1)]);if((state_val_15110 === (2)))
{var inst_15103 = (state_15109[(2)]);var inst_15104 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_15105 = cljs_http.client.decode_body.call(null,inst_15103,cljs_http.util.json_decode,"application/json",inst_15104);var inst_15106 = cljs.core.async.put_BANG_.call(null,channel,inst_15105);var inst_15107 = cljs.core.async.close_BANG_.call(null,channel);var state_15109__$1 = (function (){var statearr_15111 = state_15109;(statearr_15111[(7)] = inst_15106);
return statearr_15111;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15109__$1,inst_15107);
} else
{if((state_val_15110 === (1)))
{var inst_15101 = client.call(null,request);var state_15109__$1 = state_15109;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15109__$1,(2),inst_15101);
} else
{return null;
}
}
});})(c__11410__auto___15119,channel))
;return ((function (switch__11395__auto__,c__11410__auto___15119,channel){
return (function() {
var state_machine__11396__auto__ = null;
var state_machine__11396__auto____0 = (function (){var statearr_15115 = [null,null,null,null,null,null,null,null];(statearr_15115[(0)] = state_machine__11396__auto__);
(statearr_15115[(1)] = (1));
return statearr_15115;
});
var state_machine__11396__auto____1 = (function (state_15109){while(true){
var ret_value__11397__auto__ = (function (){try{while(true){
var result__11398__auto__ = switch__11395__auto__.call(null,state_15109);if(cljs.core.keyword_identical_QMARK_.call(null,result__11398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11398__auto__;
}
break;
}
}catch (e15116){if((e15116 instanceof Object))
{var ex__11399__auto__ = e15116;var statearr_15117_15120 = state_15109;(statearr_15117_15120[(5)] = ex__11399__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15109);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15116;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15121 = state_15109;
state_15109 = G__15121;
continue;
}
} else
{return ret_value__11397__auto__;
}
break;
}
});
state_machine__11396__auto__ = function(state_15109){
switch(arguments.length){
case 0:
return state_machine__11396__auto____0.call(this);
case 1:
return state_machine__11396__auto____1.call(this,state_15109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11396__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11396__auto____0;
state_machine__11396__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11396__auto____1;
return state_machine__11396__auto__;
})()
;})(switch__11395__auto__,c__11410__auto___15119,channel))
})();var state__11412__auto__ = (function (){var statearr_15118 = f__11411__auto__.call(null);(statearr_15118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11410__auto___15119);
return statearr_15118;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11412__auto__);
});})(c__11410__auto___15119,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__15124){var map__15125 = p__15124;var map__15125__$1 = ((cljs.core.seq_QMARK_.call(null,map__15125))?cljs.core.apply.call(null,cljs.core.hash_map,map__15125):map__15125);var req = map__15125__$1;var query_params = cljs.core.get.call(null,map__15125__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));if(cljs.core.truth_(query_params))
{return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__15128){var map__15129 = p__15128;var map__15129__$1 = ((cljs.core.seq_QMARK_.call(null,map__15129))?cljs.core.apply.call(null,cljs.core.hash_map,map__15129):map__15129);var request = map__15129__$1;var request_method = cljs.core.get.call(null,map__15129__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));var form_params = cljs.core.get.call(null,map__15129__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));if(cljs.core.truth_((function (){var and__8029__auto__ = form_params;if(cljs.core.truth_(and__8029__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else
{return and__8029__auto__;
}
})()))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/x-www-form-urlencoded"));
} else
{return client.call(null,request);
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function wrap_android_cors_bugfix(client){return (function (request){return client.call(null,(cljs.core.truth_(cljs_http.util.android_QMARK_.call(null))?cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"android","android",-2084094573)], null),Math.random.call(null)):request));
});
});
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var m = temp__4124__auto__;return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__15130_SHARP_){return client.call(null,cljs.core.assoc.call(null,p1__15130_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__15134){var map__15135 = p__15134;var map__15135__$1 = ((cljs.core.seq_QMARK_.call(null,map__15135))?cljs.core.apply.call(null,cljs.core.hash_map,map__15135):map__15135);var req = map__15135__$1;var query_params = cljs.core.get.call(null,map__15135__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));var temp__4124__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4124__auto__,map__15135,map__15135__$1,req,query_params){
return (function (p1__15131_SHARP_){return cljs.core.merge.call(null,p1__15131_SHARP_,query_params);
});})(spec,temp__4124__auto__,map__15135,map__15135__$1,req,query_params))
));
} else
{return client.call(null,req);
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__15136){var vec__15138 = p__15136;var credentials = cljs.core.nth.call(null,vec__15138,(0),null);return ((function (vec__15138,credentials){
return (function (req){var credentials__$1 = (function (){var or__8041__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__8041__auto__))
{return or__8041__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_.call(null,credentials__$1)))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else
{return client.call(null,req);
}
});
;})(vec__15138,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__15136 = null;if (arguments.length > 1) {
  p__15136 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__15136);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__15139){
var client = cljs.core.first(arglist__15139);
var p__15136 = cljs.core.rest(arglist__15139);
return wrap_basic_auth__delegate(client,p__15136);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var oauth_token = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),("Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token))));
} else
{return client.call(null,req);
}
});
});
/**
* Returns a batteries-included HTTP request function coresponding to the given
* core client. See client/client.
*/
cljs_http.client.wrap_request = (function wrap_request(request){return cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_android_cors_bugfix.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))));
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
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.delete$ = (function() { 
var delete$__delegate = function (url,p__15140){var vec__15142 = p__15140;var req = cljs.core.nth.call(null,vec__15142,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var delete$ = function (url,var_args){
var p__15140 = null;if (arguments.length > 1) {
  p__15140 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__15140);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__15143){
var url = cljs.core.first(arglist__15143);
var p__15140 = cljs.core.rest(arglist__15143);
return delete$__delegate(url,p__15140);
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
var get__delegate = function (url,p__15144){var vec__15146 = p__15144;var req = cljs.core.nth.call(null,vec__15146,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var get = function (url,var_args){
var p__15144 = null;if (arguments.length > 1) {
  p__15144 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__15144);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__15147){
var url = cljs.core.first(arglist__15147);
var p__15144 = cljs.core.rest(arglist__15147);
return get__delegate(url,p__15144);
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
var head__delegate = function (url,p__15148){var vec__15150 = p__15148;var req = cljs.core.nth.call(null,vec__15150,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var head = function (url,var_args){
var p__15148 = null;if (arguments.length > 1) {
  p__15148 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__15148);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__15151){
var url = cljs.core.first(arglist__15151);
var p__15148 = cljs.core.rest(arglist__15151);
return head__delegate(url,p__15148);
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
var move__delegate = function (url,p__15152){var vec__15154 = p__15152;var req = cljs.core.nth.call(null,vec__15154,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var move = function (url,var_args){
var p__15152 = null;if (arguments.length > 1) {
  p__15152 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__15152);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__15155){
var url = cljs.core.first(arglist__15155);
var p__15152 = cljs.core.rest(arglist__15155);
return move__delegate(url,p__15152);
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
var options__delegate = function (url,p__15156){var vec__15158 = p__15156;var req = cljs.core.nth.call(null,vec__15158,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var options = function (url,var_args){
var p__15156 = null;if (arguments.length > 1) {
  p__15156 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__15156);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__15159){
var url = cljs.core.first(arglist__15159);
var p__15156 = cljs.core.rest(arglist__15159);
return options__delegate(url,p__15156);
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
var patch__delegate = function (url,p__15160){var vec__15162 = p__15160;var req = cljs.core.nth.call(null,vec__15162,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var patch = function (url,var_args){
var p__15160 = null;if (arguments.length > 1) {
  p__15160 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__15160);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__15163){
var url = cljs.core.first(arglist__15163);
var p__15160 = cljs.core.rest(arglist__15163);
return patch__delegate(url,p__15160);
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
var post__delegate = function (url,p__15164){var vec__15166 = p__15164;var req = cljs.core.nth.call(null,vec__15166,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var post = function (url,var_args){
var p__15164 = null;if (arguments.length > 1) {
  p__15164 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__15164);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__15167){
var url = cljs.core.first(arglist__15167);
var p__15164 = cljs.core.rest(arglist__15167);
return post__delegate(url,p__15164);
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
var put__delegate = function (url,p__15168){var vec__15170 = p__15168;var req = cljs.core.nth.call(null,vec__15170,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var put = function (url,var_args){
var p__15168 = null;if (arguments.length > 1) {
  p__15168 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__15168);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__15171){
var url = cljs.core.first(arglist__15171);
var p__15168 = cljs.core.rest(arglist__15171);
return put__delegate(url,p__15168);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;

//# sourceMappingURL=client.js.map