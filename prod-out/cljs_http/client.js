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
cljs_http.client.parse_query_params = (function parse_query_params(s){if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s)))
{return cljs.core.reduce.call(null,(function (p1__12089_SHARP_,p2__12088_SHARP_){var vec__12091 = clojure.string.split.call(null,p2__12088_SHARP_,/=/);var k = cljs.core.nth.call(null,vec__12091,(0),null);var v = cljs.core.nth.call(null,vec__12091,(1),null);return cljs.core.assoc.call(null,p1__12089_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__12092_SHARP_){return cljs_http.client.encode_val.call(null,k,p1__12092_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__12093){var vec__12095 = p__12093;var k = cljs.core.nth.call(null,vec__12095,(0),null);var v = cljs.core.nth.call(null,vec__12095,(1),null);if(cljs.core.coll_QMARK_.call(null,v))
{return cljs_http.client.encode_vals.call(null,k,v);
} else
{return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__12096_SHARP_){return ("\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__12096_SHARP_));
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
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){if(cljs.core.truth_((function (){var and__3657__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);if(and__3657__auto__)
{return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,("(?i)"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type)))),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))));
} else
{return and__3657__auto__;
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
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__7332__auto___12133 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7332__auto___12133,channel){
return (function (){var f__7333__auto__ = (function (){var switch__7317__auto__ = ((function (c__7332__auto___12133,channel){
return (function (state_12123){var state_val_12124 = (state_12123[(1)]);if((state_val_12124 === (2)))
{var inst_12117 = (state_12123[(2)]);var inst_12118 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_12119 = cljs_http.client.decode_body.call(null,inst_12117,cljs.reader.read_string,"application/edn",inst_12118);var inst_12120 = cljs.core.async.put_BANG_.call(null,channel,inst_12119);var inst_12121 = cljs.core.async.close_BANG_.call(null,channel);var state_12123__$1 = (function (){var statearr_12125 = state_12123;(statearr_12125[(7)] = inst_12120);
return statearr_12125;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12123__$1,inst_12121);
} else
{if((state_val_12124 === (1)))
{var inst_12115 = client.call(null,request);var state_12123__$1 = state_12123;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12123__$1,(2),inst_12115);
} else
{return null;
}
}
});})(c__7332__auto___12133,channel))
;return ((function (switch__7317__auto__,c__7332__auto___12133,channel){
return (function() {
var state_machine__7318__auto__ = null;
var state_machine__7318__auto____0 = (function (){var statearr_12129 = [null,null,null,null,null,null,null,null];(statearr_12129[(0)] = state_machine__7318__auto__);
(statearr_12129[(1)] = (1));
return statearr_12129;
});
var state_machine__7318__auto____1 = (function (state_12123){while(true){
var ret_value__7319__auto__ = (function (){try{while(true){
var result__7320__auto__ = switch__7317__auto__.call(null,state_12123);if(cljs.core.keyword_identical_QMARK_.call(null,result__7320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7320__auto__;
}
break;
}
}catch (e12130){if((e12130 instanceof Object))
{var ex__7321__auto__ = e12130;var statearr_12131_12134 = state_12123;(statearr_12131_12134[(5)] = ex__7321__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12123);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12130;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12135 = state_12123;
state_12123 = G__12135;
continue;
}
} else
{return ret_value__7319__auto__;
}
break;
}
});
state_machine__7318__auto__ = function(state_12123){
switch(arguments.length){
case 0:
return state_machine__7318__auto____0.call(this);
case 1:
return state_machine__7318__auto____1.call(this,state_12123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7318__auto____0;
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7318__auto____1;
return state_machine__7318__auto__;
})()
;})(switch__7317__auto__,c__7332__auto___12133,channel))
})();var state__7334__auto__ = (function (){var statearr_12132 = f__7333__auto__.call(null);(statearr_12132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7332__auto___12133);
return statearr_12132;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7334__auto__);
});})(c__7332__auto___12133,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__12136){var vec__12138 = p__12136;var accept = cljs.core.nth.call(null,vec__12138,(0),null);return ((function (vec__12138,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__3669__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else
{return client.call(null,request);
}
});
;})(vec__12138,accept))
};
var wrap_accept = function (client,var_args){
var p__12136 = null;if (arguments.length > 1) {
  p__12136 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__12136);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__12139){
var client = cljs.core.first(arglist__12139);
var p__12136 = cljs.core.rest(arglist__12139);
return wrap_accept__delegate(client,p__12136);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__12140){var vec__12142 = p__12140;var content_type = cljs.core.nth.call(null,vec__12142,(0),null);return ((function (vec__12142,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__3669__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else
{return client.call(null,request);
}
});
;})(vec__12142,content_type))
};
var wrap_content_type = function (client,var_args){
var p__12140 = null;if (arguments.length > 1) {
  p__12140 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__12140);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__12143){
var client = cljs.core.first(arglist__12143);
var p__12140 = cljs.core.rest(arglist__12143);
return wrap_content_type__delegate(client,p__12140);
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
{var params = temp__4124__auto__;var map__12145 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));var map__12145__$1 = ((cljs.core.seq_QMARK_.call(null,map__12145))?cljs.core.apply.call(null,cljs.core.hash_map,map__12145):map__12145);var encoding_opts = cljs.core.get.call(null,map__12145__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));var encoding = cljs.core.get.call(null,map__12145__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/transit+json"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var map__12167 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));var map__12167__$1 = ((cljs.core.seq_QMARK_.call(null,map__12167))?cljs.core.apply.call(null,cljs.core.hash_map,map__12167):map__12167);var decoding_opts = cljs.core.get.call(null,map__12167__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));var decoding = cljs.core.get.call(null,map__12167__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));var c__7332__auto___12187 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7332__auto___12187,channel,map__12167,map__12167__$1,decoding_opts,decoding){
return (function (){var f__7333__auto__ = (function (){var switch__7317__auto__ = ((function (c__7332__auto___12187,channel,map__12167,map__12167__$1,decoding_opts,decoding){
return (function (state_12177){var state_val_12178 = (state_12177[(1)]);if((state_val_12178 === (2)))
{var inst_12170 = (state_12177[(2)]);var inst_12171 = (function (){var response = inst_12170;return ((function (response,inst_12170,state_val_12178,c__7332__auto___12187,channel,map__12167,map__12167__$1,decoding_opts,decoding){
return (function (p1__12146_SHARP_){return cljs_http.util.transit_decode.call(null,p1__12146_SHARP_,decoding,decoding_opts);
});
;})(response,inst_12170,state_val_12178,c__7332__auto___12187,channel,map__12167,map__12167__$1,decoding_opts,decoding))
})();var inst_12172 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_12173 = cljs_http.client.decode_body.call(null,inst_12170,inst_12171,"application/transit+json",inst_12172);var inst_12174 = cljs.core.async.put_BANG_.call(null,channel,inst_12173);var inst_12175 = cljs.core.async.close_BANG_.call(null,channel);var state_12177__$1 = (function (){var statearr_12179 = state_12177;(statearr_12179[(7)] = inst_12174);
return statearr_12179;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12177__$1,inst_12175);
} else
{if((state_val_12178 === (1)))
{var inst_12168 = client.call(null,request);var state_12177__$1 = state_12177;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12177__$1,(2),inst_12168);
} else
{return null;
}
}
});})(c__7332__auto___12187,channel,map__12167,map__12167__$1,decoding_opts,decoding))
;return ((function (switch__7317__auto__,c__7332__auto___12187,channel,map__12167,map__12167__$1,decoding_opts,decoding){
return (function() {
var state_machine__7318__auto__ = null;
var state_machine__7318__auto____0 = (function (){var statearr_12183 = [null,null,null,null,null,null,null,null];(statearr_12183[(0)] = state_machine__7318__auto__);
(statearr_12183[(1)] = (1));
return statearr_12183;
});
var state_machine__7318__auto____1 = (function (state_12177){while(true){
var ret_value__7319__auto__ = (function (){try{while(true){
var result__7320__auto__ = switch__7317__auto__.call(null,state_12177);if(cljs.core.keyword_identical_QMARK_.call(null,result__7320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7320__auto__;
}
break;
}
}catch (e12184){if((e12184 instanceof Object))
{var ex__7321__auto__ = e12184;var statearr_12185_12188 = state_12177;(statearr_12185_12188[(5)] = ex__7321__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12177);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12184;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12189 = state_12177;
state_12177 = G__12189;
continue;
}
} else
{return ret_value__7319__auto__;
}
break;
}
});
state_machine__7318__auto__ = function(state_12177){
switch(arguments.length){
case 0:
return state_machine__7318__auto____0.call(this);
case 1:
return state_machine__7318__auto____1.call(this,state_12177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7318__auto____0;
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7318__auto____1;
return state_machine__7318__auto__;
})()
;})(switch__7317__auto__,c__7332__auto___12187,channel,map__12167,map__12167__$1,decoding_opts,decoding))
})();var state__7334__auto__ = (function (){var statearr_12186 = f__7333__auto__.call(null);(statearr_12186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7332__auto___12187);
return statearr_12186;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7334__auto__);
});})(c__7332__auto___12187,channel,map__12167,map__12167__$1,decoding_opts,decoding))
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
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__7332__auto___12226 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7332__auto___12226,channel){
return (function (){var f__7333__auto__ = (function (){var switch__7317__auto__ = ((function (c__7332__auto___12226,channel){
return (function (state_12216){var state_val_12217 = (state_12216[(1)]);if((state_val_12217 === (2)))
{var inst_12210 = (state_12216[(2)]);var inst_12211 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_12212 = cljs_http.client.decode_body.call(null,inst_12210,cljs_http.util.json_decode,"application/json",inst_12211);var inst_12213 = cljs.core.async.put_BANG_.call(null,channel,inst_12212);var inst_12214 = cljs.core.async.close_BANG_.call(null,channel);var state_12216__$1 = (function (){var statearr_12218 = state_12216;(statearr_12218[(7)] = inst_12213);
return statearr_12218;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12216__$1,inst_12214);
} else
{if((state_val_12217 === (1)))
{var inst_12208 = client.call(null,request);var state_12216__$1 = state_12216;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12216__$1,(2),inst_12208);
} else
{return null;
}
}
});})(c__7332__auto___12226,channel))
;return ((function (switch__7317__auto__,c__7332__auto___12226,channel){
return (function() {
var state_machine__7318__auto__ = null;
var state_machine__7318__auto____0 = (function (){var statearr_12222 = [null,null,null,null,null,null,null,null];(statearr_12222[(0)] = state_machine__7318__auto__);
(statearr_12222[(1)] = (1));
return statearr_12222;
});
var state_machine__7318__auto____1 = (function (state_12216){while(true){
var ret_value__7319__auto__ = (function (){try{while(true){
var result__7320__auto__ = switch__7317__auto__.call(null,state_12216);if(cljs.core.keyword_identical_QMARK_.call(null,result__7320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7320__auto__;
}
break;
}
}catch (e12223){if((e12223 instanceof Object))
{var ex__7321__auto__ = e12223;var statearr_12224_12227 = state_12216;(statearr_12224_12227[(5)] = ex__7321__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12216);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12223;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12228 = state_12216;
state_12216 = G__12228;
continue;
}
} else
{return ret_value__7319__auto__;
}
break;
}
});
state_machine__7318__auto__ = function(state_12216){
switch(arguments.length){
case 0:
return state_machine__7318__auto____0.call(this);
case 1:
return state_machine__7318__auto____1.call(this,state_12216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7318__auto____0;
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7318__auto____1;
return state_machine__7318__auto__;
})()
;})(switch__7317__auto__,c__7332__auto___12226,channel))
})();var state__7334__auto__ = (function (){var statearr_12225 = f__7333__auto__.call(null);(statearr_12225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7332__auto___12226);
return statearr_12225;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7334__auto__);
});})(c__7332__auto___12226,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__12231){var map__12232 = p__12231;var map__12232__$1 = ((cljs.core.seq_QMARK_.call(null,map__12232))?cljs.core.apply.call(null,cljs.core.hash_map,map__12232):map__12232);var req = map__12232__$1;var query_params = cljs.core.get.call(null,map__12232__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));if(cljs.core.truth_(query_params))
{return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__12235){var map__12236 = p__12235;var map__12236__$1 = ((cljs.core.seq_QMARK_.call(null,map__12236))?cljs.core.apply.call(null,cljs.core.hash_map,map__12236):map__12236);var request = map__12236__$1;var request_method = cljs.core.get.call(null,map__12236__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));var form_params = cljs.core.get.call(null,map__12236__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));if(cljs.core.truth_((function (){var and__3657__auto__ = form_params;if(cljs.core.truth_(and__3657__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else
{return and__3657__auto__;
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
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__12237_SHARP_){return client.call(null,cljs.core.assoc.call(null,p1__12237_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__12241){var map__12242 = p__12241;var map__12242__$1 = ((cljs.core.seq_QMARK_.call(null,map__12242))?cljs.core.apply.call(null,cljs.core.hash_map,map__12242):map__12242);var req = map__12242__$1;var query_params = cljs.core.get.call(null,map__12242__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));var temp__4124__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4124__auto__,map__12242,map__12242__$1,req,query_params){
return (function (p1__12238_SHARP_){return cljs.core.merge.call(null,p1__12238_SHARP_,query_params);
});})(spec,temp__4124__auto__,map__12242,map__12242__$1,req,query_params))
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
var wrap_basic_auth__delegate = function (client,p__12243){var vec__12245 = p__12243;var credentials = cljs.core.nth.call(null,vec__12245,(0),null);return ((function (vec__12245,credentials){
return (function (req){var credentials__$1 = (function (){var or__3669__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__3669__auto__))
{return or__3669__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_.call(null,credentials__$1)))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else
{return client.call(null,req);
}
});
;})(vec__12245,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__12243 = null;if (arguments.length > 1) {
  p__12243 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__12243);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__12246){
var client = cljs.core.first(arglist__12246);
var p__12243 = cljs.core.rest(arglist__12246);
return wrap_basic_auth__delegate(client,p__12243);
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
var delete$__delegate = function (url,p__12247){var vec__12249 = p__12247;var req = cljs.core.nth.call(null,vec__12249,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var delete$ = function (url,var_args){
var p__12247 = null;if (arguments.length > 1) {
  p__12247 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__12247);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__12250){
var url = cljs.core.first(arglist__12250);
var p__12247 = cljs.core.rest(arglist__12250);
return delete$__delegate(url,p__12247);
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
var get__delegate = function (url,p__12251){var vec__12253 = p__12251;var req = cljs.core.nth.call(null,vec__12253,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var get = function (url,var_args){
var p__12251 = null;if (arguments.length > 1) {
  p__12251 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__12251);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__12254){
var url = cljs.core.first(arglist__12254);
var p__12251 = cljs.core.rest(arglist__12254);
return get__delegate(url,p__12251);
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
var head__delegate = function (url,p__12255){var vec__12257 = p__12255;var req = cljs.core.nth.call(null,vec__12257,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var head = function (url,var_args){
var p__12255 = null;if (arguments.length > 1) {
  p__12255 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__12255);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__12258){
var url = cljs.core.first(arglist__12258);
var p__12255 = cljs.core.rest(arglist__12258);
return head__delegate(url,p__12255);
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
var move__delegate = function (url,p__12259){var vec__12261 = p__12259;var req = cljs.core.nth.call(null,vec__12261,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var move = function (url,var_args){
var p__12259 = null;if (arguments.length > 1) {
  p__12259 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__12259);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__12262){
var url = cljs.core.first(arglist__12262);
var p__12259 = cljs.core.rest(arglist__12262);
return move__delegate(url,p__12259);
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
var options__delegate = function (url,p__12263){var vec__12265 = p__12263;var req = cljs.core.nth.call(null,vec__12265,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var options = function (url,var_args){
var p__12263 = null;if (arguments.length > 1) {
  p__12263 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__12263);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__12266){
var url = cljs.core.first(arglist__12266);
var p__12263 = cljs.core.rest(arglist__12266);
return options__delegate(url,p__12263);
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
var patch__delegate = function (url,p__12267){var vec__12269 = p__12267;var req = cljs.core.nth.call(null,vec__12269,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var patch = function (url,var_args){
var p__12267 = null;if (arguments.length > 1) {
  p__12267 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__12267);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__12270){
var url = cljs.core.first(arglist__12270);
var p__12267 = cljs.core.rest(arglist__12270);
return patch__delegate(url,p__12267);
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
var post__delegate = function (url,p__12271){var vec__12273 = p__12271;var req = cljs.core.nth.call(null,vec__12273,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var post = function (url,var_args){
var p__12271 = null;if (arguments.length > 1) {
  p__12271 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__12271);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__12274){
var url = cljs.core.first(arglist__12274);
var p__12271 = cljs.core.rest(arglist__12274);
return post__delegate(url,p__12271);
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
var put__delegate = function (url,p__12275){var vec__12277 = p__12275;var req = cljs.core.nth.call(null,vec__12277,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var put = function (url,var_args){
var p__12275 = null;if (arguments.length > 1) {
  p__12275 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__12275);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__12278){
var url = cljs.core.first(arglist__12278);
var p__12275 = cljs.core.rest(arglist__12278);
return put__delegate(url,p__12275);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
