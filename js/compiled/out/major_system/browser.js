// Compiled by ClojureScript 0.0-2356
goog.provide('major_system.browser');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('servant.worker');
goog.require('om.dom');
goog.require('goog.events.EventType');
goog.require('servant.worker');
goog.require('figwheel.client');
goog.require('servant.core');
goog.require('cljs_http.client');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('major_system.combinatorics');
goog.require('goog.events');
goog.require('servant.core');
goog.require('figwheel.client');
goog.require('major_system.combinatorics');
goog.require('goog.net.XhrIo');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('cljs.reader');
goog.require('cljs_http.client');
cljs.core.enable_console_print_BANG_.call(null);
major_system.browser.worker_count = (1);
major_system.browser.worker_script = "/js/worker.js";
if(servant.core.webworker_QMARK_.call(null))
{cljs.core.async.take_BANG_.call(null,cljs_http.client.get.call(null,"/words-by-number.edn"),(function (res){var res__$1 = cljs.reader.read_string.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(res));major_system.browser.words_by_number = res__$1;
}));
} else
{}
if(typeof major_system.browser.words_by_number !== 'undefined')
{} else
{major_system.browser.words_by_number = null;
}
cljs.core.println.call(null,cljs.core.count.call(null,major_system.browser.words_by_number));
major_system.browser.all_breaks = (function all_breaks(nums){var n = cljs.core.count.call(null,nums);var indices = cljs.core.range.call(null,(1),n);return cljs.core.mapcat.call(null,((function (n,indices){
return (function (p1__33316_SHARP_){return major_system.combinatorics.combinations.call(null,indices,p1__33316_SHARP_);
});})(n,indices))
,cljs.core.range.call(null,n));
});
major_system.browser.apply_break = (function apply_break(v,breaks){var points = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),breaks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,v)], null));var sub = cljs.core.partial.call(null,cljs.core.subvec,v);return cljs.core.map.call(null,((function (points,sub){
return (function (p1__33317_SHARP_){return cljs.core.apply.call(null,sub,p1__33317_SHARP_);
});})(points,sub))
,cljs.core.partition.call(null,(2),(1),points));
});
major_system.browser.apply_all_breaks = (function apply_all_breaks(nums){var numsv = cljs.core.vec.call(null,nums);return cljs.core.map.call(null,((function (numsv){
return (function (p1__33318_SHARP_){return major_system.browser.apply_break.call(null,numsv,p1__33318_SHARP_);
});})(numsv))
,major_system.browser.all_breaks.call(null,numsv));
});
major_system.browser.words_for_pattern = (function words_for_pattern(number_groups){return cljs.core.map.call(null,major_system.browser.words_by_number,number_groups);
});
major_system.browser.loaded_QMARK_ = (function loaded_QMARK_(){return (cljs.core.count.call(null,major_system.browser.words_by_number) > (0));
});
servant.worker.register_servant_fn.call(null,"loaded?",major_system.browser.loaded_QMARK_);
major_system.browser.mnemonics = (function mnemonics(pin,p__33320){var map__33322 = p__33320;var map__33322__$1 = ((cljs.core.seq_QMARK_.call(null,map__33322))?cljs.core.apply.call(null,cljs.core.hash_map,map__33322):map__33322);var ntake = cljs.core.get.call(null,map__33322__$1,new cljs.core.Keyword(null,"ntake","ntake",-1168769245),(10));var ndrop = cljs.core.get.call(null,map__33322__$1,new cljs.core.Keyword(null,"ndrop","ndrop",641505721),(0));var p = cljs.reader.read_string.call(null,pin);var patterns = major_system.browser.apply_all_breaks.call(null,p);var results = cljs.core.take.call(null,ntake,cljs.core.drop.call(null,ndrop,cljs.core.filter.call(null,((function (p,patterns,map__33322,map__33322__$1,ntake,ndrop){
return (function (p1__33319_SHARP_){return cljs.core.every_QMARK_.call(null,cljs.core.identity,p1__33319_SHARP_);
});})(p,patterns,map__33322,map__33322__$1,ntake,ndrop))
,cljs.core.map.call(null,major_system.browser.words_for_pattern,patterns))));var start__8935__auto__ = (new Date()).getTime();var ret__8936__auto__ = cljs.core.pr_str.call(null,cljs.core.doall.call(null,results));cljs.core.prn.call(null,("Elapsed time: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((new Date()).getTime() - start__8935__auto__))+" msecs"));
return ret__8936__auto__;
});
servant.worker.register_servant_fn.call(null,"mnemonics",major_system.browser.mnemonics);
major_system.browser.shortest_mnemonics = (function shortest_mnemonics(p){var ms = major_system.browser.mnemonics.call(null,p);return cljs.core.first.call(null,cljs.core.partition_by.call(null,cljs.core.count,ms));
});
major_system.browser.random_mnemonic = (function random_mnemonic(p){var ms = major_system.browser.mnemonics.call(null,p);var iter__8779__auto__ = ((function (ms){
return (function iter__33327(s__33328){return (new cljs.core.LazySeq(null,((function (ms){
return (function (){var s__33328__$1 = s__33328;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33328__$1);if(temp__4126__auto__)
{var s__33328__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33328__$2))
{var c__8777__auto__ = cljs.core.chunk_first.call(null,s__33328__$2);var size__8778__auto__ = cljs.core.count.call(null,c__8777__auto__);var b__33330 = cljs.core.chunk_buffer.call(null,size__8778__auto__);if((function (){var i__33329 = (0);while(true){
if((i__33329 < size__8778__auto__))
{var g = cljs.core._nth.call(null,c__8777__auto__,i__33329);cljs.core.chunk_append.call(null,b__33330,cljs.core.map.call(null,cljs.core.rand_nth,cljs.core.rand_nth.call(null,g)));
{
var G__33331 = (i__33329 + (1));
i__33329 = G__33331;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33330),iter__33327.call(null,cljs.core.chunk_rest.call(null,s__33328__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33330),null);
}
} else
{var g = cljs.core.first.call(null,s__33328__$2);return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.rand_nth,cljs.core.rand_nth.call(null,g)),iter__33327.call(null,cljs.core.rest.call(null,s__33328__$2)));
}
} else
{return null;
}
break;
}
});})(ms))
,null,null));
});})(ms))
;return iter__8779__auto__.call(null,cljs.core.partition_by.call(null,cljs.core.count,ms));
});
major_system.browser.tostr = (function tostr(ms){return cljs.core.interpose.call(null,"\nor...\n\n",(function (){var iter__8779__auto__ = (function iter__33336(s__33337){return (new cljs.core.LazySeq(null,(function (){var s__33337__$1 = s__33337;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33337__$1);if(temp__4126__auto__)
{var s__33337__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33337__$2))
{var c__8777__auto__ = cljs.core.chunk_first.call(null,s__33337__$2);var size__8778__auto__ = cljs.core.count.call(null,c__8777__auto__);var b__33339 = cljs.core.chunk_buffer.call(null,size__8778__auto__);if((function (){var i__33338 = (0);while(true){
if((i__33338 < size__8778__auto__))
{var m = cljs.core._nth.call(null,c__8777__auto__,i__33338);cljs.core.chunk_append.call(null,b__33339,cljs.core.apply.call(null,cljs.core.println_str,cljs.core.interpose.call(null,"+ \n",m)));
{
var G__33340 = (i__33338 + (1));
i__33338 = G__33340;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33339),iter__33336.call(null,cljs.core.chunk_rest.call(null,s__33337__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33339),null);
}
} else
{var m = cljs.core.first.call(null,s__33337__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.println_str,cljs.core.interpose.call(null,"+ \n",m)),iter__33336.call(null,cljs.core.rest.call(null,s__33337__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8779__auto__.call(null,ms);
})());
});
major_system.browser.on_reload = (function on_reload(){if(servant.core.webworker_QMARK_.call(null))
{return servant.worker.bootstrap.call(null);
} else
{cljs.core.println.call(null,"reloaded x2",servant.core.webworker_QMARK_.call(null));
major_system.browser.servant_channel = servant.core.spawn_servants.call(null,major_system.browser.worker_count,major_system.browser.worker_script);
return om.core.root.call(null,major_system.browser.mnemonics_view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false,new cljs.core.Keyword(null,"ticks","ticks",-406190313),(0),new cljs.core.Keyword(null,"input","input",556931961),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("main-area")], null));
}
});
/**
* @param {...*} var_args
*/
major_system.browser.parse_nums = (function() { 
var parse_nums__delegate = function (args){cljs.core.println.call(null,"Parsing",args);
return cljs.core.remove.call(null,isNaN,cljs.core.map.call(null,parseInt,cljs.core.mapcat.call(null,(function (p1__33341_SHARP_){return p1__33341_SHARP_.split("");
}),args)));
};
var parse_nums = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return parse_nums__delegate.call(this,args);};
parse_nums.cljs$lang$maxFixedArity = 0;
parse_nums.cljs$lang$applyTo = (function (arglist__33342){
var args = cljs.core.seq(arglist__33342);
return parse_nums__delegate(args);
});
parse_nums.cljs$core$IFn$_invoke$arity$variadic = parse_nums__delegate;
return parse_nums;
})()
;
major_system.browser.words = (function words(app,owner){if(typeof major_system.browser.t33346 !== 'undefined')
{} else
{
/**
* @constructor
*/
major_system.browser.t33346 = (function (owner,app,words,meta33347){
this.owner = owner;
this.app = app;
this.words = words;
this.meta33347 = meta33347;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
major_system.browser.t33346.cljs$lang$type = true;
major_system.browser.t33346.cljs$lang$ctorStr = "major-system.browser/t33346";
major_system.browser.t33346.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){return cljs.core._write.call(null,writer__8618__auto__,"major-system.browser/t33346");
});
major_system.browser.t33346.prototype.om$core$IRenderState$ = true;
major_system.browser.t33346.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,null,cljs.core.interpose.call(null,", ",new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(state)));
});
major_system.browser.t33346.prototype.om$core$IShouldUpdate$ = true;
major_system.browser.t33346.prototype.om$core$IShouldUpdate$should_update$arity$3 = (function (this$,next_props,next_state){var self__ = this;
var this$__$1 = this;return true;
});
major_system.browser.t33346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33348){var self__ = this;
var _33348__$1 = this;return self__.meta33347;
});
major_system.browser.t33346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33348,meta33347__$1){var self__ = this;
var _33348__$1 = this;return (new major_system.browser.t33346(self__.owner,self__.app,self__.words,meta33347__$1));
});
major_system.browser.__GT_t33346 = (function __GT_t33346(owner__$1,app__$1,words__$1,meta33347){return (new major_system.browser.t33346(owner__$1,app__$1,words__$1,meta33347));
});
}
return (new major_system.browser.t33346(owner,app,words,null));
});
major_system.browser.mnemonic_group = (function mnemonic_group(app,owner){if(typeof major_system.browser.t33352 !== 'undefined')
{} else
{
/**
* @constructor
*/
major_system.browser.t33352 = (function (owner,app,mnemonic_group,meta33353){
this.owner = owner;
this.app = app;
this.mnemonic_group = mnemonic_group;
this.meta33353 = meta33353;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
major_system.browser.t33352.cljs$lang$type = true;
major_system.browser.t33352.cljs$lang$ctorStr = "major-system.browser/t33352";
major_system.browser.t33352.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){return cljs.core._write.call(null,writer__8618__auto__,"major-system.browser/t33352");
});
major_system.browser.t33352.prototype.om$core$IRenderState$ = true;
major_system.browser.t33352.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var parts = cljs.core.map.call(null,((function (___$1){
return (function (part){return om.core.build.call(null,major_system.browser.words,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"words","words",1924933001),part], null)], null));
});})(___$1))
,new cljs.core.Keyword(null,"parts","parts",849007691).cljs$core$IFn$_invoke$arity$1(state));return cljs.core.apply.call(null,om.dom.div,null,cljs.core.interpose.call(null,React.DOM.h2(null,"+"),parts));
});
major_system.browser.t33352.prototype.om$core$IShouldUpdate$ = true;
major_system.browser.t33352.prototype.om$core$IShouldUpdate$should_update$arity$3 = (function (this$,next_props,next_state){var self__ = this;
var this$__$1 = this;return true;
});
major_system.browser.t33352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33354){var self__ = this;
var _33354__$1 = this;return self__.meta33353;
});
major_system.browser.t33352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33354,meta33353__$1){var self__ = this;
var _33354__$1 = this;return (new major_system.browser.t33352(self__.owner,self__.app,self__.mnemonic_group,meta33353__$1));
});
major_system.browser.__GT_t33352 = (function __GT_t33352(owner__$1,app__$1,mnemonic_group__$1,meta33353){return (new major_system.browser.t33352(owner__$1,app__$1,mnemonic_group__$1,meta33353));
});
}
return (new major_system.browser.t33352(owner,app,mnemonic_group,null));
});
major_system.browser.input_channel = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
major_system.browser.mnemonics_view = (function mnemonics_view(app,owner){if(typeof major_system.browser.t33448 !== 'undefined')
{} else
{
/**
* @constructor
*/
major_system.browser.t33448 = (function (owner,app,mnemonics_view,meta33449){
this.owner = owner;
this.app = app;
this.mnemonics_view = mnemonics_view;
this.meta33449 = meta33449;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
major_system.browser.t33448.cljs$lang$type = true;
major_system.browser.t33448.cljs$lang$ctorStr = "major-system.browser/t33448";
major_system.browser.t33448.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){return cljs.core._write.call(null,writer__8618__auto__,"major-system.browser/t33448");
});
major_system.browser.t33448.prototype.om$core$IRender$ = true;
major_system.browser.t33448.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "classes"},(cljs.core.truth_(new cljs.core.Keyword(null,"loaded","loaded",-1246482293).cljs$core$IFn$_invoke$arity$1(self__.app))?om.dom.input.call(null,{"onChange": ((function (___$1){
return (function (e){return cljs.core.async.put_BANG_.call(null,major_system.browser.input_channel,e.target.value);
});})(___$1))
, "autoFocus": true, "placeholder": "123-456", "maxLength": "20", "value": null, "type": "text"}):React.DOM.h3(null,"Loading dictionary...")),React.DOM.h3(null,(cljs.core.truth_((function (){var and__8029__auto__ = new cljs.core.Keyword(null,"working","working",1699655245).cljs$core$IFn$_invoke$arity$1(self__.app);if(cljs.core.truth_(and__8029__auto__))
{return (new cljs.core.Keyword(null,"ticks","ticks",-406190313).cljs$core$IFn$_invoke$arity$1(self__.app) > (0));
} else
{return and__8029__auto__;
}
})())?cljs.core.apply.call(null,cljs.core.str,"Working",cljs.core.take.call(null,new cljs.core.Keyword(null,"ticks","ticks",-406190313).cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.repeat.call(null,"."))):null)),React.DOM.div(null,((cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(self__.app))))?("Looking for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(self__.app))):null)),cljs.core.apply.call(null,om.dom.div,{"id": "answers"},(function (){var mns = new cljs.core.Keyword(null,"mnemonics","mnemonics",-1373900278).cljs$core$IFn$_invoke$arity$1(self__.app);var parts = cljs.core.map.call(null,((function (mns,___$1){
return (function (p1__33355_SHARP_){return om.core.build.call(null,major_system.browser.mnemonic_group,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parts","parts",849007691),p1__33355_SHARP_], null)], null));
});})(mns,___$1))
,mns);return cljs.core.interpose.call(null,React.DOM.h1(null,React.DOM.hr(null),"or..."),parts);
})()));
});
major_system.browser.t33448.prototype.om$core$IWillMount$ = true;
major_system.browser.t33448.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__11410__auto___33540 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11410__auto___33540,___$1){
return (function (){var f__11411__auto__ = (function (){var switch__11395__auto__ = ((function (c__11410__auto___33540,___$1){
return (function (state_33468){var state_val_33469 = (state_33468[(1)]);if((state_val_33469 === (8)))
{var inst_33464 = (state_33468[(2)]);var state_33468__$1 = state_33468;var statearr_33470_33541 = state_33468__$1;(statearr_33470_33541[(2)] = inst_33464);
(statearr_33470_33541[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33469 === (7)))
{var state_33468__$1 = state_33468;var statearr_33471_33542 = state_33468__$1;(statearr_33471_33542[(2)] = null);
(statearr_33471_33542[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33469 === (6)))
{var state_33468__$1 = state_33468;var statearr_33472_33543 = state_33468__$1;(statearr_33472_33543[(2)] = null);
(statearr_33472_33543[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33469 === (5)))
{var inst_33457 = (state_33468[(2)]);var inst_33458 = om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_33457);var inst_33459 = cljs.core.not.call(null,inst_33457);var state_33468__$1 = (function (){var statearr_33473 = state_33468;(statearr_33473[(7)] = inst_33458);
return statearr_33473;
})();if(inst_33459)
{var statearr_33474_33544 = state_33468__$1;(statearr_33474_33544[(1)] = (6));
} else
{var statearr_33475_33545 = state_33468__$1;(statearr_33475_33545[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33469 === (4)))
{var inst_33454 = (state_33468[(2)]);var inst_33455 = servant.core.servant_thread.call(null,major_system.browser.servant_channel,servant.core.standard_message,major_system.browser.loaded_QMARK_);var state_33468__$1 = (function (){var statearr_33476 = state_33468;(statearr_33476[(8)] = inst_33454);
return statearr_33476;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33468__$1,(5),inst_33455);
} else
{if((state_val_33469 === (3)))
{var inst_33466 = (state_33468[(2)]);var state_33468__$1 = state_33468;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33468__$1,inst_33466);
} else
{if((state_val_33469 === (2)))
{var inst_33452 = cljs.core.async.timeout.call(null,(500));var state_33468__$1 = state_33468;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33468__$1,(4),inst_33452);
} else
{if((state_val_33469 === (1)))
{var state_33468__$1 = state_33468;var statearr_33477_33546 = state_33468__$1;(statearr_33477_33546[(2)] = null);
(statearr_33477_33546[(1)] = (2));
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
});})(c__11410__auto___33540,___$1))
;return ((function (switch__11395__auto__,c__11410__auto___33540,___$1){
return (function() {
var state_machine__11396__auto__ = null;
var state_machine__11396__auto____0 = (function (){var statearr_33481 = [null,null,null,null,null,null,null,null,null];(statearr_33481[(0)] = state_machine__11396__auto__);
(statearr_33481[(1)] = (1));
return statearr_33481;
});
var state_machine__11396__auto____1 = (function (state_33468){while(true){
var ret_value__11397__auto__ = (function (){try{while(true){
var result__11398__auto__ = switch__11395__auto__.call(null,state_33468);if(cljs.core.keyword_identical_QMARK_.call(null,result__11398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11398__auto__;
}
break;
}
}catch (e33482){if((e33482 instanceof Object))
{var ex__11399__auto__ = e33482;var statearr_33483_33547 = state_33468;(statearr_33483_33547[(5)] = ex__11399__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33468);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33482;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33548 = state_33468;
state_33468 = G__33548;
continue;
}
} else
{return ret_value__11397__auto__;
}
break;
}
});
state_machine__11396__auto__ = function(state_33468){
switch(arguments.length){
case 0:
return state_machine__11396__auto____0.call(this);
case 1:
return state_machine__11396__auto____1.call(this,state_33468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11396__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11396__auto____0;
state_machine__11396__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11396__auto____1;
return state_machine__11396__auto__;
})()
;})(switch__11395__auto__,c__11410__auto___33540,___$1))
})();var state__11412__auto__ = (function (){var statearr_33484 = f__11411__auto__.call(null);(statearr_33484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11410__auto___33540);
return statearr_33484;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11412__auto__);
});})(c__11410__auto___33540,___$1))
);
var c__11410__auto___33549 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11410__auto___33549,___$1){
return (function (){var f__11411__auto__ = (function (){var switch__11395__auto__ = ((function (c__11410__auto___33549,___$1){
return (function (state_33494){var state_val_33495 = (state_33494[(1)]);if((state_val_33495 === (4)))
{var inst_33488 = (state_33494[(2)]);var inst_33489 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.inc);var state_33494__$1 = (function (){var statearr_33496 = state_33494;(statearr_33496[(7)] = inst_33488);
(statearr_33496[(8)] = inst_33489);
return statearr_33496;
})();var statearr_33497_33550 = state_33494__$1;(statearr_33497_33550[(2)] = null);
(statearr_33497_33550[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33495 === (3)))
{var inst_33492 = (state_33494[(2)]);var state_33494__$1 = state_33494;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33494__$1,inst_33492);
} else
{if((state_val_33495 === (2)))
{var inst_33486 = cljs.core.async.timeout.call(null,(500));var state_33494__$1 = state_33494;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33494__$1,(4),inst_33486);
} else
{if((state_val_33495 === (1)))
{var state_33494__$1 = state_33494;var statearr_33498_33551 = state_33494__$1;(statearr_33498_33551[(2)] = null);
(statearr_33498_33551[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__11410__auto___33549,___$1))
;return ((function (switch__11395__auto__,c__11410__auto___33549,___$1){
return (function() {
var state_machine__11396__auto__ = null;
var state_machine__11396__auto____0 = (function (){var statearr_33502 = [null,null,null,null,null,null,null,null,null];(statearr_33502[(0)] = state_machine__11396__auto__);
(statearr_33502[(1)] = (1));
return statearr_33502;
});
var state_machine__11396__auto____1 = (function (state_33494){while(true){
var ret_value__11397__auto__ = (function (){try{while(true){
var result__11398__auto__ = switch__11395__auto__.call(null,state_33494);if(cljs.core.keyword_identical_QMARK_.call(null,result__11398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11398__auto__;
}
break;
}
}catch (e33503){if((e33503 instanceof Object))
{var ex__11399__auto__ = e33503;var statearr_33504_33552 = state_33494;(statearr_33504_33552[(5)] = ex__11399__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33494);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33503;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33553 = state_33494;
state_33494 = G__33553;
continue;
}
} else
{return ret_value__11397__auto__;
}
break;
}
});
state_machine__11396__auto__ = function(state_33494){
switch(arguments.length){
case 0:
return state_machine__11396__auto____0.call(this);
case 1:
return state_machine__11396__auto____1.call(this,state_33494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11396__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11396__auto____0;
state_machine__11396__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11396__auto____1;
return state_machine__11396__auto__;
})()
;})(switch__11395__auto__,c__11410__auto___33549,___$1))
})();var state__11412__auto__ = (function (){var statearr_33505 = f__11411__auto__.call(null);(statearr_33505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11410__auto___33549);
return statearr_33505;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11412__auto__);
});})(c__11410__auto___33549,___$1))
);
var c__11410__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11410__auto__,___$1){
return (function (){var f__11411__auto__ = (function (){var switch__11395__auto__ = ((function (c__11410__auto__,___$1){
return (function (state_33527){var state_val_33528 = (state_33527[(1)]);if((state_val_33528 === (5)))
{var inst_33519 = (state_33527[(2)]);var inst_33520 = cljs.reader.read_string.call(null,inst_33519);var inst_33521 = om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"mnemonics","mnemonics",-1373900278),inst_33520);var inst_33522 = om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"working","working",1699655245),false);var state_33527__$1 = (function (){var statearr_33529 = state_33527;(statearr_33529[(7)] = inst_33521);
(statearr_33529[(8)] = inst_33522);
return statearr_33529;
})();var statearr_33530_33554 = state_33527__$1;(statearr_33530_33554[(2)] = null);
(statearr_33530_33554[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33528 === (4)))
{var inst_33508 = (state_33527[(2)]);var inst_33509 = major_system.browser.parse_nums.call(null,inst_33508);var inst_33510 = cljs.core.pr_str.call(null,inst_33509);var inst_33511 = cljs.core.println.call(null,"working to chan ",inst_33510);var inst_33512 = servant.core.servant_thread.call(null,major_system.browser.servant_channel,servant.core.standard_message,major_system.browser.mnemonics,inst_33510);var inst_33513 = om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"input","input",556931961),inst_33510);var inst_33514 = om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"ticks","ticks",-406190313),(0));var inst_33515 = om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"working","working",1699655245),true);var inst_33516 = cljs.core.PersistentVector.EMPTY;var inst_33517 = om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"mnemonics","mnemonics",-1373900278),inst_33516);var state_33527__$1 = (function (){var statearr_33531 = state_33527;(statearr_33531[(9)] = inst_33514);
(statearr_33531[(10)] = inst_33513);
(statearr_33531[(11)] = inst_33511);
(statearr_33531[(12)] = inst_33515);
(statearr_33531[(13)] = inst_33517);
return statearr_33531;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33527__$1,(5),inst_33512);
} else
{if((state_val_33528 === (3)))
{var inst_33525 = (state_33527[(2)]);var state_33527__$1 = state_33527;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33527__$1,inst_33525);
} else
{if((state_val_33528 === (2)))
{var state_33527__$1 = state_33527;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33527__$1,(4),major_system.browser.input_channel);
} else
{if((state_val_33528 === (1)))
{var state_33527__$1 = state_33527;var statearr_33532_33555 = state_33527__$1;(statearr_33532_33555[(2)] = null);
(statearr_33532_33555[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__11410__auto__,___$1))
;return ((function (switch__11395__auto__,c__11410__auto__,___$1){
return (function() {
var state_machine__11396__auto__ = null;
var state_machine__11396__auto____0 = (function (){var statearr_33536 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33536[(0)] = state_machine__11396__auto__);
(statearr_33536[(1)] = (1));
return statearr_33536;
});
var state_machine__11396__auto____1 = (function (state_33527){while(true){
var ret_value__11397__auto__ = (function (){try{while(true){
var result__11398__auto__ = switch__11395__auto__.call(null,state_33527);if(cljs.core.keyword_identical_QMARK_.call(null,result__11398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11398__auto__;
}
break;
}
}catch (e33537){if((e33537 instanceof Object))
{var ex__11399__auto__ = e33537;var statearr_33538_33556 = state_33527;(statearr_33538_33556[(5)] = ex__11399__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33527);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33537;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33557 = state_33527;
state_33527 = G__33557;
continue;
}
} else
{return ret_value__11397__auto__;
}
break;
}
});
state_machine__11396__auto__ = function(state_33527){
switch(arguments.length){
case 0:
return state_machine__11396__auto____0.call(this);
case 1:
return state_machine__11396__auto____1.call(this,state_33527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11396__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11396__auto____0;
state_machine__11396__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11396__auto____1;
return state_machine__11396__auto__;
})()
;})(switch__11395__auto__,c__11410__auto__,___$1))
})();var state__11412__auto__ = (function (){var statearr_33539 = f__11411__auto__.call(null);(statearr_33539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11410__auto__);
return statearr_33539;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11412__auto__);
});})(c__11410__auto__,___$1))
);
return c__11410__auto__;
});
major_system.browser.t33448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33450){var self__ = this;
var _33450__$1 = this;return self__.meta33449;
});
major_system.browser.t33448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33450,meta33449__$1){var self__ = this;
var _33450__$1 = this;return (new major_system.browser.t33448(self__.owner,self__.app,self__.mnemonics_view,meta33449__$1));
});
major_system.browser.__GT_t33448 = (function __GT_t33448(owner__$1,app__$1,mnemonics_view__$1,meta33449){return (new major_system.browser.t33448(owner__$1,app__$1,mnemonics_view__$1,meta33449));
});
}
return (new major_system.browser.t33448(owner,app,mnemonics_view,null));
});
if(typeof major_system.browser.just_at_initial_launch !== 'undefined')
{} else
{major_system.browser.just_at_initial_launch = major_system.browser.on_reload.call(null);
}
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),(function (){return major_system.browser.on_reload.call(null);
}));

//# sourceMappingURL=browser.js.map