// Compiled by ClojureScript 0.0-2356
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__13533,args){var map__13535 = p__13533;var map__13535__$1 = ((cljs.core.seq_QMARK_.call(null,map__13535))?cljs.core.apply.call(null,cljs.core.hash_map,map__13535):map__13535);var debug = cljs.core.get.call(null,map__13535__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__13533,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__13533,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__13536){
var p__13533 = cljs.core.first(arglist__13536);
var args = cljs.core.rest(arglist__13536);
return log__delegate(p__13533,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__13537){var map__13539 = p__13537;var map__13539__$1 = ((cljs.core.seq_QMARK_.call(null,map__13539))?cljs.core.apply.call(null,cljs.core.hash_map,map__13539):map__13539);var websocket_url = cljs.core.get.call(null,map__13539__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__13540,callback){var map__13542 = p__13540;var map__13542__$1 = ((cljs.core.seq_QMARK_.call(null,map__13542))?cljs.core.apply.call(null,cljs.core.hash_map,map__13542):map__13542);var msg = map__13542__$1;var dependency_file = cljs.core.get.call(null,map__13542__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__13542__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__13542__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__8041__auto__ = dependency_file;if(cljs.core.truth_(or__8041__auto__))
{return or__8041__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__13542,map__13542__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__13542,map__13542__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__13543,p__13544){var map__13547 = p__13543;var map__13547__$1 = ((cljs.core.seq_QMARK_.call(null,map__13547))?cljs.core.apply.call(null,cljs.core.hash_map,map__13547):map__13547);var opts = map__13547__$1;var url_rewriter = cljs.core.get.call(null,map__13547__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__13548 = p__13544;var map__13548__$1 = ((cljs.core.seq_QMARK_.call(null,map__13548))?cljs.core.apply.call(null,cljs.core.hash_map,map__13548):map__13548);var d = map__13548__$1;var file = cljs.core.get.call(null,map__13548__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__13549,p__13550){var map__13592 = p__13549;var map__13592__$1 = ((cljs.core.seq_QMARK_.call(null,map__13592))?cljs.core.apply.call(null,cljs.core.hash_map,map__13592):map__13592);var opts = map__13592__$1;var on_jsload = cljs.core.get.call(null,map__13592__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__13592__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__13593 = p__13550;var map__13593__$1 = ((cljs.core.seq_QMARK_.call(null,map__13593))?cljs.core.apply.call(null,cljs.core.hash_map,map__13593):map__13593);var files = cljs.core.get.call(null,map__13593__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__10935__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10935__auto__,map__13592,map__13592__$1,opts,on_jsload,before_jsload,map__13593,map__13593__$1,files){
return (function (){var f__10936__auto__ = (function (){var switch__10870__auto__ = ((function (c__10935__auto__,map__13592,map__13592__$1,opts,on_jsload,before_jsload,map__13593,map__13593__$1,files){
return (function (state_13616){var state_val_13617 = (state_13616[(1)]);if((state_val_13617 === (6)))
{var inst_13598 = (state_13616[(7)]);var inst_13607 = (state_13616[(2)]);var inst_13608 = cljs.core.PersistentVector.EMPTY_NODE;var inst_13609 = [inst_13598];var inst_13610 = (new cljs.core.PersistentVector(null,1,(5),inst_13608,inst_13609,null));var inst_13611 = cljs.core.apply.call(null,on_jsload,inst_13610);var state_13616__$1 = (function (){var statearr_13618 = state_13616;(statearr_13618[(8)] = inst_13607);
return statearr_13618;
})();var statearr_13619_13633 = state_13616__$1;(statearr_13619_13633[(2)] = inst_13611);
(statearr_13619_13633[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13617 === (5)))
{var inst_13614 = (state_13616[(2)]);var state_13616__$1 = state_13616;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13616__$1,inst_13614);
} else
{if((state_val_13617 === (4)))
{var state_13616__$1 = state_13616;var statearr_13620_13634 = state_13616__$1;(statearr_13620_13634[(2)] = null);
(statearr_13620_13634[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13617 === (3)))
{var inst_13598 = (state_13616[(7)]);var inst_13601 = console.debug("Figwheel: loaded these files");var inst_13602 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_13598);var inst_13603 = cljs.core.prn_str.call(null,inst_13602);var inst_13604 = console.log(inst_13603);var inst_13605 = cljs.core.async.timeout.call(null,(10));var state_13616__$1 = (function (){var statearr_13621 = state_13616;(statearr_13621[(9)] = inst_13604);
(statearr_13621[(10)] = inst_13601);
return statearr_13621;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13616__$1,(6),inst_13605);
} else
{if((state_val_13617 === (2)))
{var inst_13598 = (state_13616[(7)]);var inst_13598__$1 = (state_13616[(2)]);var inst_13599 = cljs.core.not_empty.call(null,inst_13598__$1);var state_13616__$1 = (function (){var statearr_13622 = state_13616;(statearr_13622[(7)] = inst_13598__$1);
return statearr_13622;
})();if(cljs.core.truth_(inst_13599))
{var statearr_13623_13635 = state_13616__$1;(statearr_13623_13635[(1)] = (3));
} else
{var statearr_13624_13636 = state_13616__$1;(statearr_13624_13636[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13617 === (1)))
{var inst_13594 = before_jsload.call(null,files);var inst_13595 = figwheel.client.add_request_urls.call(null,opts,files);var inst_13596 = figwheel.client.load_all_js_files.call(null,inst_13595);var state_13616__$1 = (function (){var statearr_13625 = state_13616;(statearr_13625[(11)] = inst_13594);
return statearr_13625;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13616__$1,(2),inst_13596);
} else
{return null;
}
}
}
}
}
}
});})(c__10935__auto__,map__13592,map__13592__$1,opts,on_jsload,before_jsload,map__13593,map__13593__$1,files))
;return ((function (switch__10870__auto__,c__10935__auto__,map__13592,map__13592__$1,opts,on_jsload,before_jsload,map__13593,map__13593__$1,files){
return (function() {
var state_machine__10871__auto__ = null;
var state_machine__10871__auto____0 = (function (){var statearr_13629 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13629[(0)] = state_machine__10871__auto__);
(statearr_13629[(1)] = (1));
return statearr_13629;
});
var state_machine__10871__auto____1 = (function (state_13616){while(true){
var ret_value__10872__auto__ = (function (){try{while(true){
var result__10873__auto__ = switch__10870__auto__.call(null,state_13616);if(cljs.core.keyword_identical_QMARK_.call(null,result__10873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10873__auto__;
}
break;
}
}catch (e13630){if((e13630 instanceof Object))
{var ex__10874__auto__ = e13630;var statearr_13631_13637 = state_13616;(statearr_13631_13637[(5)] = ex__10874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13616);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13630;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13638 = state_13616;
state_13616 = G__13638;
continue;
}
} else
{return ret_value__10872__auto__;
}
break;
}
});
state_machine__10871__auto__ = function(state_13616){
switch(arguments.length){
case 0:
return state_machine__10871__auto____0.call(this);
case 1:
return state_machine__10871__auto____1.call(this,state_13616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10871__auto____0;
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10871__auto____1;
return state_machine__10871__auto__;
})()
;})(switch__10870__auto__,c__10935__auto__,map__13592,map__13592__$1,opts,on_jsload,before_jsload,map__13593,map__13593__$1,files))
})();var state__10937__auto__ = (function (){var statearr_13632 = f__10936__auto__.call(null);(statearr_13632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10935__auto__);
return statearr_13632;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10937__auto__);
});})(c__10935__auto__,map__13592,map__13592__$1,opts,on_jsload,before_jsload,map__13593,map__13593__$1,files))
);
return c__10935__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__13639,link_href){var map__13641 = p__13639;var map__13641__$1 = ((cljs.core.seq_QMARK_.call(null,map__13641))?cljs.core.apply.call(null,cljs.core.hash_map,map__13641):map__13641);var request_url = cljs.core.get.call(null,map__13641__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__13641__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__10935__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10935__auto__,parent){
return (function (){var f__10936__auto__ = (function (){var switch__10870__auto__ = ((function (c__10935__auto__,parent){
return (function (state_13662){var state_val_13663 = (state_13662[(1)]);if((state_val_13663 === (2)))
{var inst_13659 = (state_13662[(2)]);var inst_13660 = parent.removeChild(orig_link);var state_13662__$1 = (function (){var statearr_13664 = state_13662;(statearr_13664[(7)] = inst_13659);
return statearr_13664;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13662__$1,inst_13660);
} else
{if((state_val_13663 === (1)))
{var inst_13657 = cljs.core.async.timeout.call(null,(200));var state_13662__$1 = state_13662;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13662__$1,(2),inst_13657);
} else
{return null;
}
}
});})(c__10935__auto__,parent))
;return ((function (switch__10870__auto__,c__10935__auto__,parent){
return (function() {
var state_machine__10871__auto__ = null;
var state_machine__10871__auto____0 = (function (){var statearr_13668 = [null,null,null,null,null,null,null,null];(statearr_13668[(0)] = state_machine__10871__auto__);
(statearr_13668[(1)] = (1));
return statearr_13668;
});
var state_machine__10871__auto____1 = (function (state_13662){while(true){
var ret_value__10872__auto__ = (function (){try{while(true){
var result__10873__auto__ = switch__10870__auto__.call(null,state_13662);if(cljs.core.keyword_identical_QMARK_.call(null,result__10873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10873__auto__;
}
break;
}
}catch (e13669){if((e13669 instanceof Object))
{var ex__10874__auto__ = e13669;var statearr_13670_13672 = state_13662;(statearr_13670_13672[(5)] = ex__10874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13662);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13669;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13673 = state_13662;
state_13662 = G__13673;
continue;
}
} else
{return ret_value__10872__auto__;
}
break;
}
});
state_machine__10871__auto__ = function(state_13662){
switch(arguments.length){
case 0:
return state_machine__10871__auto____0.call(this);
case 1:
return state_machine__10871__auto____1.call(this,state_13662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10871__auto____0;
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10871__auto____1;
return state_machine__10871__auto__;
})()
;})(switch__10870__auto__,c__10935__auto__,parent))
})();var state__10937__auto__ = (function (){var statearr_13671 = f__10936__auto__.call(null);(statearr_13671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10935__auto__);
return statearr_13671;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10937__auto__);
});})(c__10935__auto__,parent))
);
return c__10935__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__13674){var map__13676 = p__13674;var map__13676__$1 = ((cljs.core.seq_QMARK_.call(null,map__13676))?cljs.core.apply.call(null,cljs.core.hash_map,map__13676):map__13676);var f_data = map__13676__$1;var request_url = cljs.core.get.call(null,map__13676__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__13676__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__13677,files_msg){var map__13699 = p__13677;var map__13699__$1 = ((cljs.core.seq_QMARK_.call(null,map__13699))?cljs.core.apply.call(null,cljs.core.hash_map,map__13699):map__13699);var opts = map__13699__$1;var on_cssload = cljs.core.get.call(null,map__13699__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__13700_13720 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__13701_13721 = null;var count__13702_13722 = (0);var i__13703_13723 = (0);while(true){
if((i__13703_13723 < count__13702_13722))
{var f_13724 = cljs.core._nth.call(null,chunk__13701_13721,i__13703_13723);figwheel.client.reload_css_file.call(null,f_13724);
{
var G__13725 = seq__13700_13720;
var G__13726 = chunk__13701_13721;
var G__13727 = count__13702_13722;
var G__13728 = (i__13703_13723 + (1));
seq__13700_13720 = G__13725;
chunk__13701_13721 = G__13726;
count__13702_13722 = G__13727;
i__13703_13723 = G__13728;
continue;
}
} else
{var temp__4126__auto___13729 = cljs.core.seq.call(null,seq__13700_13720);if(temp__4126__auto___13729)
{var seq__13700_13730__$1 = temp__4126__auto___13729;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13700_13730__$1))
{var c__8810__auto___13731 = cljs.core.chunk_first.call(null,seq__13700_13730__$1);{
var G__13732 = cljs.core.chunk_rest.call(null,seq__13700_13730__$1);
var G__13733 = c__8810__auto___13731;
var G__13734 = cljs.core.count.call(null,c__8810__auto___13731);
var G__13735 = (0);
seq__13700_13720 = G__13732;
chunk__13701_13721 = G__13733;
count__13702_13722 = G__13734;
i__13703_13723 = G__13735;
continue;
}
} else
{var f_13736 = cljs.core.first.call(null,seq__13700_13730__$1);figwheel.client.reload_css_file.call(null,f_13736);
{
var G__13737 = cljs.core.next.call(null,seq__13700_13730__$1);
var G__13738 = null;
var G__13739 = (0);
var G__13740 = (0);
seq__13700_13720 = G__13737;
chunk__13701_13721 = G__13738;
count__13702_13722 = G__13739;
i__13703_13723 = G__13740;
continue;
}
}
} else
{}
}
break;
}
var c__10935__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10935__auto__,map__13699,map__13699__$1,opts,on_cssload){
return (function (){var f__10936__auto__ = (function (){var switch__10870__auto__ = ((function (c__10935__auto__,map__13699,map__13699__$1,opts,on_cssload){
return (function (state_13710){var state_val_13711 = (state_13710[(1)]);if((state_val_13711 === (2)))
{var inst_13706 = (state_13710[(2)]);var inst_13707 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_13708 = on_cssload.call(null,inst_13707);var state_13710__$1 = (function (){var statearr_13712 = state_13710;(statearr_13712[(7)] = inst_13706);
return statearr_13712;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13710__$1,inst_13708);
} else
{if((state_val_13711 === (1)))
{var inst_13704 = cljs.core.async.timeout.call(null,(100));var state_13710__$1 = state_13710;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13710__$1,(2),inst_13704);
} else
{return null;
}
}
});})(c__10935__auto__,map__13699,map__13699__$1,opts,on_cssload))
;return ((function (switch__10870__auto__,c__10935__auto__,map__13699,map__13699__$1,opts,on_cssload){
return (function() {
var state_machine__10871__auto__ = null;
var state_machine__10871__auto____0 = (function (){var statearr_13716 = [null,null,null,null,null,null,null,null];(statearr_13716[(0)] = state_machine__10871__auto__);
(statearr_13716[(1)] = (1));
return statearr_13716;
});
var state_machine__10871__auto____1 = (function (state_13710){while(true){
var ret_value__10872__auto__ = (function (){try{while(true){
var result__10873__auto__ = switch__10870__auto__.call(null,state_13710);if(cljs.core.keyword_identical_QMARK_.call(null,result__10873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10873__auto__;
}
break;
}
}catch (e13717){if((e13717 instanceof Object))
{var ex__10874__auto__ = e13717;var statearr_13718_13741 = state_13710;(statearr_13718_13741[(5)] = ex__10874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13710);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13717;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13742 = state_13710;
state_13710 = G__13742;
continue;
}
} else
{return ret_value__10872__auto__;
}
break;
}
});
state_machine__10871__auto__ = function(state_13710){
switch(arguments.length){
case 0:
return state_machine__10871__auto____0.call(this);
case 1:
return state_machine__10871__auto____1.call(this,state_13710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10871__auto____0;
state_machine__10871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10871__auto____1;
return state_machine__10871__auto__;
})()
;})(switch__10870__auto__,c__10935__auto__,map__13699,map__13699__$1,opts,on_cssload))
})();var state__10937__auto__ = (function (){var statearr_13719 = f__10936__auto__.call(null);(statearr_13719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10935__auto__);
return statearr_13719;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10937__auto__);
});})(c__10935__auto__,map__13699,map__13699__$1,opts,on_cssload))
);
return c__10935__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__13743){var map__13748 = p__13743;var map__13748__$1 = ((cljs.core.seq_QMARK_.call(null,map__13748))?cljs.core.apply.call(null,cljs.core.hash_map,map__13748):map__13748);var opts = map__13748__$1;var on_compile_fail = cljs.core.get.call(null,map__13748__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__13748__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__13748__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__13748__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__13748,map__13748__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__13749 = cljs.core._EQ_;var expr__13750 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__13749.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__13750)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__13749.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__13750)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__13749.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__13750)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__13748,map__13748__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__13748,map__13748__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__13748,map__13748__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__13748,map__13748__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__13748,map__13748__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__13748,map__13748__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__13748,map__13748__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__13748,map__13748__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__13748,map__13748__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj13755 = {"detail":url};return obj13755;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__13756){var map__13758 = p__13756;var map__13758__$1 = ((cljs.core.seq_QMARK_.call(null,map__13758))?cljs.core.apply.call(null,cljs.core.hash_map,map__13758):map__13758);var class$ = cljs.core.get.call(null,map__13758__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__13758__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__13759){var map__13765 = p__13759;var map__13765__$1 = ((cljs.core.seq_QMARK_.call(null,map__13765))?cljs.core.apply.call(null,cljs.core.hash_map,map__13765):map__13765);var ed = map__13765__$1;var exception_data = cljs.core.get.call(null,map__13765__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__13765__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__13766_13770 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__13767_13771 = null;var count__13768_13772 = (0);var i__13769_13773 = (0);while(true){
if((i__13769_13773 < count__13768_13772))
{var msg_13774 = cljs.core._nth.call(null,chunk__13767_13771,i__13769_13773);console.log(msg_13774);
{
var G__13775 = seq__13766_13770;
var G__13776 = chunk__13767_13771;
var G__13777 = count__13768_13772;
var G__13778 = (i__13769_13773 + (1));
seq__13766_13770 = G__13775;
chunk__13767_13771 = G__13776;
count__13768_13772 = G__13777;
i__13769_13773 = G__13778;
continue;
}
} else
{var temp__4126__auto___13779 = cljs.core.seq.call(null,seq__13766_13770);if(temp__4126__auto___13779)
{var seq__13766_13780__$1 = temp__4126__auto___13779;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13766_13780__$1))
{var c__8810__auto___13781 = cljs.core.chunk_first.call(null,seq__13766_13780__$1);{
var G__13782 = cljs.core.chunk_rest.call(null,seq__13766_13780__$1);
var G__13783 = c__8810__auto___13781;
var G__13784 = cljs.core.count.call(null,c__8810__auto___13781);
var G__13785 = (0);
seq__13766_13770 = G__13782;
chunk__13767_13771 = G__13783;
count__13768_13772 = G__13784;
i__13769_13773 = G__13785;
continue;
}
} else
{var msg_13786 = cljs.core.first.call(null,seq__13766_13780__$1);console.log(msg_13786);
{
var G__13787 = cljs.core.next.call(null,seq__13766_13780__$1);
var G__13788 = null;
var G__13789 = (0);
var G__13790 = (0);
seq__13766_13770 = G__13787;
chunk__13767_13771 = G__13788;
count__13768_13772 = G__13789;
i__13769_13773 = G__13790;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__8041__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__8041__auto__))
{return or__8041__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__13791){var map__13793 = p__13791;var map__13793__$1 = ((cljs.core.seq_QMARK_.call(null,map__13793))?cljs.core.apply.call(null,cljs.core.hash_map,map__13793):map__13793);var opts = map__13793__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__13791 = null;if (arguments.length > 0) {
  p__13791 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__13791);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__13794){
var p__13791 = cljs.core.seq(arglist__13794);
return watch_and_reload__delegate(p__13791);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map