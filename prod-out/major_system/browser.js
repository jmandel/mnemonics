// Compiled by ClojureScript 0.0-2356
goog.provide('major_system.browser');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('servant.worker');
goog.require('om.dom');
goog.require('goog.events.EventType');
goog.require('servant.worker');
goog.require('servant.core');
goog.require('cljs_http.client');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('major_system.combinatorics');
goog.require('goog.events');
goog.require('servant.core');
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
return (function (p1__10626_SHARP_){return major_system.combinatorics.combinations.call(null,indices,p1__10626_SHARP_);
});})(n,indices))
,cljs.core.range.call(null,n));
});
major_system.browser.apply_break = (function apply_break(v,breaks){var points = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),breaks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,v)], null));var sub = cljs.core.partial.call(null,cljs.core.subvec,v);return cljs.core.map.call(null,((function (points,sub){
return (function (p1__10627_SHARP_){return cljs.core.apply.call(null,sub,p1__10627_SHARP_);
});})(points,sub))
,cljs.core.partition.call(null,(2),(1),points));
});
major_system.browser.apply_all_breaks = (function apply_all_breaks(nums){var numsv = cljs.core.vec.call(null,nums);return cljs.core.map.call(null,((function (numsv){
return (function (p1__10628_SHARP_){return major_system.browser.apply_break.call(null,numsv,p1__10628_SHARP_);
});})(numsv))
,major_system.browser.all_breaks.call(null,numsv));
});
major_system.browser.words_for_pattern = (function words_for_pattern(number_groups){return cljs.core.map.call(null,major_system.browser.words_by_number,number_groups);
});
major_system.browser.loaded_QMARK_ = (function loaded_QMARK_(){return (cljs.core.count.call(null,major_system.browser.words_by_number) > (0));
});
servant.worker.register_servant_fn.call(null,"loaded?",major_system.browser.loaded_QMARK_);
major_system.browser.mnemonics = (function mnemonics(pin,p__10630){var map__10632 = p__10630;var map__10632__$1 = ((cljs.core.seq_QMARK_.call(null,map__10632))?cljs.core.apply.call(null,cljs.core.hash_map,map__10632):map__10632);var ntake = cljs.core.get.call(null,map__10632__$1,new cljs.core.Keyword(null,"ntake","ntake",-1168769245),(10));var ndrop = cljs.core.get.call(null,map__10632__$1,new cljs.core.Keyword(null,"ndrop","ndrop",641505721),(0));var p = cljs.reader.read_string.call(null,pin);var patterns = major_system.browser.apply_all_breaks.call(null,p);var results = cljs.core.take.call(null,ntake,cljs.core.drop.call(null,ndrop,cljs.core.filter.call(null,((function (p,patterns,map__10632,map__10632__$1,ntake,ndrop){
return (function (p1__10629_SHARP_){return cljs.core.every_QMARK_.call(null,cljs.core.identity,p1__10629_SHARP_);
});})(p,patterns,map__10632,map__10632__$1,ntake,ndrop))
,cljs.core.map.call(null,major_system.browser.words_for_pattern,patterns))));var start__4563__auto__ = (new Date()).getTime();var ret__4564__auto__ = cljs.core.pr_str.call(null,cljs.core.doall.call(null,results));cljs.core.prn.call(null,("Elapsed time: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((new Date()).getTime() - start__4563__auto__))+" msecs"));
return ret__4564__auto__;
});
servant.worker.register_servant_fn.call(null,"mnemonics",major_system.browser.mnemonics);
major_system.browser.shortest_mnemonics = (function shortest_mnemonics(p){var ms = major_system.browser.mnemonics.call(null,p);return cljs.core.first.call(null,cljs.core.partition_by.call(null,cljs.core.count,ms));
});
major_system.browser.random_mnemonic = (function random_mnemonic(p){var ms = major_system.browser.mnemonics.call(null,p);var iter__4407__auto__ = ((function (ms){
return (function iter__10637(s__10638){return (new cljs.core.LazySeq(null,((function (ms){
return (function (){var s__10638__$1 = s__10638;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10638__$1);if(temp__4126__auto__)
{var s__10638__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10638__$2))
{var c__4405__auto__ = cljs.core.chunk_first.call(null,s__10638__$2);var size__4406__auto__ = cljs.core.count.call(null,c__4405__auto__);var b__10640 = cljs.core.chunk_buffer.call(null,size__4406__auto__);if((function (){var i__10639 = (0);while(true){
if((i__10639 < size__4406__auto__))
{var g = cljs.core._nth.call(null,c__4405__auto__,i__10639);cljs.core.chunk_append.call(null,b__10640,cljs.core.map.call(null,cljs.core.rand_nth,cljs.core.rand_nth.call(null,g)));
{
var G__10641 = (i__10639 + (1));
i__10639 = G__10641;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10640),iter__10637.call(null,cljs.core.chunk_rest.call(null,s__10638__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10640),null);
}
} else
{var g = cljs.core.first.call(null,s__10638__$2);return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.rand_nth,cljs.core.rand_nth.call(null,g)),iter__10637.call(null,cljs.core.rest.call(null,s__10638__$2)));
}
} else
{return null;
}
break;
}
});})(ms))
,null,null));
});})(ms))
;return iter__4407__auto__.call(null,cljs.core.partition_by.call(null,cljs.core.count,ms));
});
major_system.browser.tostr = (function tostr(ms){return cljs.core.interpose.call(null,"\nor...\n\n",(function (){var iter__4407__auto__ = (function iter__10646(s__10647){return (new cljs.core.LazySeq(null,(function (){var s__10647__$1 = s__10647;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10647__$1);if(temp__4126__auto__)
{var s__10647__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10647__$2))
{var c__4405__auto__ = cljs.core.chunk_first.call(null,s__10647__$2);var size__4406__auto__ = cljs.core.count.call(null,c__4405__auto__);var b__10649 = cljs.core.chunk_buffer.call(null,size__4406__auto__);if((function (){var i__10648 = (0);while(true){
if((i__10648 < size__4406__auto__))
{var m = cljs.core._nth.call(null,c__4405__auto__,i__10648);cljs.core.chunk_append.call(null,b__10649,cljs.core.apply.call(null,cljs.core.println_str,cljs.core.interpose.call(null,"+ \n",m)));
{
var G__10650 = (i__10648 + (1));
i__10648 = G__10650;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10649),iter__10646.call(null,cljs.core.chunk_rest.call(null,s__10647__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10649),null);
}
} else
{var m = cljs.core.first.call(null,s__10647__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.println_str,cljs.core.interpose.call(null,"+ \n",m)),iter__10646.call(null,cljs.core.rest.call(null,s__10647__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4407__auto__.call(null,ms);
})());
});
major_system.browser.on_reload = (function on_reload(){if(servant.core.webworker_QMARK_.call(null))
{return servant.worker.bootstrap.call(null);
} else
{cljs.core.println.call(null,"reloaded x2",servant.core.webworker_QMARK_.call(null));
major_system.browser.servant_channel = servant.core.spawn_servants.call(null,major_system.browser.worker_count,window.workerUrl);
return om.core.root.call(null,major_system.browser.mnemonics_view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false,new cljs.core.Keyword(null,"ticks","ticks",-406190313),(0),new cljs.core.Keyword(null,"input","input",556931961),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("main-area")], null));
}
});
/**
* @param {...*} var_args
*/
major_system.browser.parse_nums = (function() { 
var parse_nums__delegate = function (args){cljs.core.println.call(null,"Parsing",args);
return cljs.core.remove.call(null,isNaN,cljs.core.map.call(null,parseInt,cljs.core.mapcat.call(null,(function (p1__10651_SHARP_){return p1__10651_SHARP_.split("");
}),args)));
};
var parse_nums = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return parse_nums__delegate.call(this,args);};
parse_nums.cljs$lang$maxFixedArity = 0;
parse_nums.cljs$lang$applyTo = (function (arglist__10652){
var args = cljs.core.seq(arglist__10652);
return parse_nums__delegate(args);
});
parse_nums.cljs$core$IFn$_invoke$arity$variadic = parse_nums__delegate;
return parse_nums;
})()
;
major_system.browser.words = (function words(app,owner){if(typeof major_system.browser.t10656 !== 'undefined')
{} else
{
/**
* @constructor
*/
major_system.browser.t10656 = (function (owner,app,words,meta10657){
this.owner = owner;
this.app = app;
this.words = words;
this.meta10657 = meta10657;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
major_system.browser.t10656.cljs$lang$type = true;
major_system.browser.t10656.cljs$lang$ctorStr = "major-system.browser/t10656";
major_system.browser.t10656.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write.call(null,writer__4246__auto__,"major-system.browser/t10656");
});
major_system.browser.t10656.prototype.om$core$IRenderState$ = true;
major_system.browser.t10656.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,null,cljs.core.interpose.call(null,", ",new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(state)));
});
major_system.browser.t10656.prototype.om$core$IShouldUpdate$ = true;
major_system.browser.t10656.prototype.om$core$IShouldUpdate$should_update$arity$3 = (function (this$,next_props,next_state){var self__ = this;
var this$__$1 = this;return true;
});
major_system.browser.t10656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10658){var self__ = this;
var _10658__$1 = this;return self__.meta10657;
});
major_system.browser.t10656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10658,meta10657__$1){var self__ = this;
var _10658__$1 = this;return (new major_system.browser.t10656(self__.owner,self__.app,self__.words,meta10657__$1));
});
major_system.browser.__GT_t10656 = (function __GT_t10656(owner__$1,app__$1,words__$1,meta10657){return (new major_system.browser.t10656(owner__$1,app__$1,words__$1,meta10657));
});
}
return (new major_system.browser.t10656(owner,app,words,null));
});
major_system.browser.mnemonic_group = (function mnemonic_group(app,owner){if(typeof major_system.browser.t10662 !== 'undefined')
{} else
{
/**
* @constructor
*/
major_system.browser.t10662 = (function (owner,app,mnemonic_group,meta10663){
this.owner = owner;
this.app = app;
this.mnemonic_group = mnemonic_group;
this.meta10663 = meta10663;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
major_system.browser.t10662.cljs$lang$type = true;
major_system.browser.t10662.cljs$lang$ctorStr = "major-system.browser/t10662";
major_system.browser.t10662.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write.call(null,writer__4246__auto__,"major-system.browser/t10662");
});
major_system.browser.t10662.prototype.om$core$IRenderState$ = true;
major_system.browser.t10662.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var parts = cljs.core.map.call(null,((function (___$1){
return (function (part){return om.core.build.call(null,major_system.browser.words,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"words","words",1924933001),part], null)], null));
});})(___$1))
,new cljs.core.Keyword(null,"parts","parts",849007691).cljs$core$IFn$_invoke$arity$1(state));return cljs.core.apply.call(null,om.dom.div,null,cljs.core.interpose.call(null,React.DOM.h2(null,"+"),parts));
});
major_system.browser.t10662.prototype.om$core$IShouldUpdate$ = true;
major_system.browser.t10662.prototype.om$core$IShouldUpdate$should_update$arity$3 = (function (this$,next_props,next_state){var self__ = this;
var this$__$1 = this;return true;
});
major_system.browser.t10662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10664){var self__ = this;
var _10664__$1 = this;return self__.meta10663;
});
major_system.browser.t10662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10664,meta10663__$1){var self__ = this;
var _10664__$1 = this;return (new major_system.browser.t10662(self__.owner,self__.app,self__.mnemonic_group,meta10663__$1));
});
major_system.browser.__GT_t10662 = (function __GT_t10662(owner__$1,app__$1,mnemonic_group__$1,meta10663){return (new major_system.browser.t10662(owner__$1,app__$1,mnemonic_group__$1,meta10663));
});
}
return (new major_system.browser.t10662(owner,app,mnemonic_group,null));
});
major_system.browser.input_channel = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
major_system.browser.mnemonics_view = (function mnemonics_view(app,owner){if(typeof major_system.browser.t10758 !== 'undefined')
{} else
{
/**
* @constructor
*/
major_system.browser.t10758 = (function (owner,app,mnemonics_view,meta10759){
this.owner = owner;
this.app = app;
this.mnemonics_view = mnemonics_view;
this.meta10759 = meta10759;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
major_system.browser.t10758.cljs$lang$type = true;
major_system.browser.t10758.cljs$lang$ctorStr = "major-system.browser/t10758";
major_system.browser.t10758.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write.call(null,writer__4246__auto__,"major-system.browser/t10758");
});
major_system.browser.t10758.prototype.om$core$IRender$ = true;
major_system.browser.t10758.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "classes"},(cljs.core.truth_(new cljs.core.Keyword(null,"loaded","loaded",-1246482293).cljs$core$IFn$_invoke$arity$1(self__.app))?om.dom.input.call(null,{"onChange": ((function (___$1){
return (function (e){return cljs.core.async.put_BANG_.call(null,major_system.browser.input_channel,e.target.value);
});})(___$1))
, "autoFocus": true, "placeholder": "123-456", "maxLength": "20", "value": null, "type": "text"}):React.DOM.h3(null,"Loading dictionary...")),React.DOM.div(null,((cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(self__.app))))?("Looking for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(self__.app))):null)),cljs.core.apply.call(null,om.dom.div,{"id": "answers"},(function (){var mns = new cljs.core.Keyword(null,"mnemonics","mnemonics",-1373900278).cljs$core$IFn$_invoke$arity$1(self__.app);var parts = cljs.core.map.call(null,((function (mns,___$1){
return (function (p1__10665_SHARP_){return om.core.build.call(null,major_system.browser.mnemonic_group,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parts","parts",849007691),p1__10665_SHARP_], null)], null));
});})(mns,___$1))
,mns);return cljs.core.interpose.call(null,React.DOM.h1(null,React.DOM.hr(null),"or..."),parts);
})()));
});
major_system.browser.t10758.prototype.om$core$IWillMount$ = true;
major_system.browser.t10758.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__7332__auto___10850 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7332__auto___10850,___$1){
return (function (){var f__7333__auto__ = (function (){var switch__7317__auto__ = ((function (c__7332__auto___10850,___$1){
return (function (state_10778){var state_val_10779 = (state_10778[(1)]);if((state_val_10779 === (8)))
{var inst_10774 = (state_10778[(2)]);var state_10778__$1 = state_10778;var statearr_10780_10851 = state_10778__$1;(statearr_10780_10851[(2)] = inst_10774);
(statearr_10780_10851[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10779 === (7)))
{var state_10778__$1 = state_10778;var statearr_10781_10852 = state_10778__$1;(statearr_10781_10852[(2)] = null);
(statearr_10781_10852[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10779 === (6)))
{var state_10778__$1 = state_10778;var statearr_10782_10853 = state_10778__$1;(statearr_10782_10853[(2)] = null);
(statearr_10782_10853[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10779 === (5)))
{var inst_10767 = (state_10778[(2)]);var inst_10768 = om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_10767);var inst_10769 = cljs.core.not.call(null,inst_10767);var state_10778__$1 = (function (){var statearr_10783 = state_10778;(statearr_10783[(7)] = inst_10768);
return statearr_10783;
})();if(inst_10769)
{var statearr_10784_10854 = state_10778__$1;(statearr_10784_10854[(1)] = (6));
} else
{var statearr_10785_10855 = state_10778__$1;(statearr_10785_10855[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10779 === (4)))
{var inst_10764 = (state_10778[(2)]);var inst_10765 = servant.core.servant_thread.call(null,major_system.browser.servant_channel,servant.core.standard_message,major_system.browser.loaded_QMARK_);var state_10778__$1 = (function (){var statearr_10786 = state_10778;(statearr_10786[(8)] = inst_10764);
return statearr_10786;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10778__$1,(5),inst_10765);
} else
{if((state_val_10779 === (3)))
{var inst_10776 = (state_10778[(2)]);var state_10778__$1 = state_10778;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10778__$1,inst_10776);
} else
{if((state_val_10779 === (2)))
{var inst_10762 = cljs.core.async.timeout.call(null,(500));var state_10778__$1 = state_10778;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10778__$1,(4),inst_10762);
} else
{if((state_val_10779 === (1)))
{var state_10778__$1 = state_10778;var statearr_10787_10856 = state_10778__$1;(statearr_10787_10856[(2)] = null);
(statearr_10787_10856[(1)] = (2));
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
});})(c__7332__auto___10850,___$1))
;return ((function (switch__7317__auto__,c__7332__auto___10850,___$1){
return (function() {
var state_machine__7318__auto__ = null;
var state_machine__7318__auto____0 = (function (){var statearr_10791 = [null,null,null,null,null,null,null,null,null];(statearr_10791[(0)] = state_machine__7318__auto__);
(statearr_10791[(1)] = (1));
return statearr_10791;
});
var state_machine__7318__auto____1 = (function (state_10778){while(true){
var ret_value__7319__auto__ = (function (){try{while(true){
var result__7320__auto__ = switch__7317__auto__.call(null,state_10778);if(cljs.core.keyword_identical_QMARK_.call(null,result__7320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7320__auto__;
}
break;
}
}catch (e10792){if((e10792 instanceof Object))
{var ex__7321__auto__ = e10792;var statearr_10793_10857 = state_10778;(statearr_10793_10857[(5)] = ex__7321__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10778);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10792;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10858 = state_10778;
state_10778 = G__10858;
continue;
}
} else
{return ret_value__7319__auto__;
}
break;
}
});
state_machine__7318__auto__ = function(state_10778){
switch(arguments.length){
case 0:
return state_machine__7318__auto____0.call(this);
case 1:
return state_machine__7318__auto____1.call(this,state_10778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7318__auto____0;
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7318__auto____1;
return state_machine__7318__auto__;
})()
;})(switch__7317__auto__,c__7332__auto___10850,___$1))
})();var state__7334__auto__ = (function (){var statearr_10794 = f__7333__auto__.call(null);(statearr_10794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7332__auto___10850);
return statearr_10794;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7334__auto__);
});})(c__7332__auto___10850,___$1))
);
var c__7332__auto___10859 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7332__auto___10859,___$1){
return (function (){var f__7333__auto__ = (function (){var switch__7317__auto__ = ((function (c__7332__auto___10859,___$1){
return (function (state_10804){var state_val_10805 = (state_10804[(1)]);if((state_val_10805 === (4)))
{var inst_10798 = (state_10804[(2)]);var inst_10799 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.inc);var state_10804__$1 = (function (){var statearr_10806 = state_10804;(statearr_10806[(7)] = inst_10799);
(statearr_10806[(8)] = inst_10798);
return statearr_10806;
})();var statearr_10807_10860 = state_10804__$1;(statearr_10807_10860[(2)] = null);
(statearr_10807_10860[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10805 === (3)))
{var inst_10802 = (state_10804[(2)]);var state_10804__$1 = state_10804;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10804__$1,inst_10802);
} else
{if((state_val_10805 === (2)))
{var inst_10796 = cljs.core.async.timeout.call(null,(500));var state_10804__$1 = state_10804;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10804__$1,(4),inst_10796);
} else
{if((state_val_10805 === (1)))
{var state_10804__$1 = state_10804;var statearr_10808_10861 = state_10804__$1;(statearr_10808_10861[(2)] = null);
(statearr_10808_10861[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__7332__auto___10859,___$1))
;return ((function (switch__7317__auto__,c__7332__auto___10859,___$1){
return (function() {
var state_machine__7318__auto__ = null;
var state_machine__7318__auto____0 = (function (){var statearr_10812 = [null,null,null,null,null,null,null,null,null];(statearr_10812[(0)] = state_machine__7318__auto__);
(statearr_10812[(1)] = (1));
return statearr_10812;
});
var state_machine__7318__auto____1 = (function (state_10804){while(true){
var ret_value__7319__auto__ = (function (){try{while(true){
var result__7320__auto__ = switch__7317__auto__.call(null,state_10804);if(cljs.core.keyword_identical_QMARK_.call(null,result__7320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7320__auto__;
}
break;
}
}catch (e10813){if((e10813 instanceof Object))
{var ex__7321__auto__ = e10813;var statearr_10814_10862 = state_10804;(statearr_10814_10862[(5)] = ex__7321__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10804);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10813;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10863 = state_10804;
state_10804 = G__10863;
continue;
}
} else
{return ret_value__7319__auto__;
}
break;
}
});
state_machine__7318__auto__ = function(state_10804){
switch(arguments.length){
case 0:
return state_machine__7318__auto____0.call(this);
case 1:
return state_machine__7318__auto____1.call(this,state_10804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7318__auto____0;
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7318__auto____1;
return state_machine__7318__auto__;
})()
;})(switch__7317__auto__,c__7332__auto___10859,___$1))
})();var state__7334__auto__ = (function (){var statearr_10815 = f__7333__auto__.call(null);(statearr_10815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7332__auto___10859);
return statearr_10815;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7334__auto__);
});})(c__7332__auto___10859,___$1))
);
var c__7332__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7332__auto__,___$1){
return (function (){var f__7333__auto__ = (function (){var switch__7317__auto__ = ((function (c__7332__auto__,___$1){
return (function (state_10837){var state_val_10838 = (state_10837[(1)]);if((state_val_10838 === (5)))
{var inst_10829 = (state_10837[(2)]);var inst_10830 = cljs.reader.read_string.call(null,inst_10829);var inst_10831 = om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"mnemonics","mnemonics",-1373900278),inst_10830);var inst_10832 = om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"working","working",1699655245),false);var state_10837__$1 = (function (){var statearr_10839 = state_10837;(statearr_10839[(7)] = inst_10831);
(statearr_10839[(8)] = inst_10832);
return statearr_10839;
})();var statearr_10840_10864 = state_10837__$1;(statearr_10840_10864[(2)] = null);
(statearr_10840_10864[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10838 === (4)))
{var inst_10818 = (state_10837[(2)]);var inst_10819 = major_system.browser.parse_nums.call(null,inst_10818);var inst_10820 = cljs.core.pr_str.call(null,inst_10819);var inst_10821 = cljs.core.println.call(null,"working to chan ",inst_10820);var inst_10822 = servant.core.servant_thread.call(null,major_system.browser.servant_channel,servant.core.standard_message,major_system.browser.mnemonics,inst_10820);var inst_10823 = om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"input","input",556931961),inst_10820);var inst_10824 = om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"ticks","ticks",-406190313),(0));var inst_10825 = om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"working","working",1699655245),true);var inst_10826 = cljs.core.PersistentVector.EMPTY;var inst_10827 = om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"mnemonics","mnemonics",-1373900278),inst_10826);var state_10837__$1 = (function (){var statearr_10841 = state_10837;(statearr_10841[(9)] = inst_10827);
(statearr_10841[(10)] = inst_10823);
(statearr_10841[(11)] = inst_10825);
(statearr_10841[(12)] = inst_10824);
(statearr_10841[(13)] = inst_10821);
return statearr_10841;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10837__$1,(5),inst_10822);
} else
{if((state_val_10838 === (3)))
{var inst_10835 = (state_10837[(2)]);var state_10837__$1 = state_10837;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10837__$1,inst_10835);
} else
{if((state_val_10838 === (2)))
{var state_10837__$1 = state_10837;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10837__$1,(4),major_system.browser.input_channel);
} else
{if((state_val_10838 === (1)))
{var state_10837__$1 = state_10837;var statearr_10842_10865 = state_10837__$1;(statearr_10842_10865[(2)] = null);
(statearr_10842_10865[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__7332__auto__,___$1))
;return ((function (switch__7317__auto__,c__7332__auto__,___$1){
return (function() {
var state_machine__7318__auto__ = null;
var state_machine__7318__auto____0 = (function (){var statearr_10846 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10846[(0)] = state_machine__7318__auto__);
(statearr_10846[(1)] = (1));
return statearr_10846;
});
var state_machine__7318__auto____1 = (function (state_10837){while(true){
var ret_value__7319__auto__ = (function (){try{while(true){
var result__7320__auto__ = switch__7317__auto__.call(null,state_10837);if(cljs.core.keyword_identical_QMARK_.call(null,result__7320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7320__auto__;
}
break;
}
}catch (e10847){if((e10847 instanceof Object))
{var ex__7321__auto__ = e10847;var statearr_10848_10866 = state_10837;(statearr_10848_10866[(5)] = ex__7321__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10837);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10847;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10867 = state_10837;
state_10837 = G__10867;
continue;
}
} else
{return ret_value__7319__auto__;
}
break;
}
});
state_machine__7318__auto__ = function(state_10837){
switch(arguments.length){
case 0:
return state_machine__7318__auto____0.call(this);
case 1:
return state_machine__7318__auto____1.call(this,state_10837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7318__auto____0;
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7318__auto____1;
return state_machine__7318__auto__;
})()
;})(switch__7317__auto__,c__7332__auto__,___$1))
})();var state__7334__auto__ = (function (){var statearr_10849 = f__7333__auto__.call(null);(statearr_10849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7332__auto__);
return statearr_10849;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7334__auto__);
});})(c__7332__auto__,___$1))
);
return c__7332__auto__;
});
major_system.browser.t10758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10760){var self__ = this;
var _10760__$1 = this;return self__.meta10759;
});
major_system.browser.t10758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10760,meta10759__$1){var self__ = this;
var _10760__$1 = this;return (new major_system.browser.t10758(self__.owner,self__.app,self__.mnemonics_view,meta10759__$1));
});
major_system.browser.__GT_t10758 = (function __GT_t10758(owner__$1,app__$1,mnemonics_view__$1,meta10759){return (new major_system.browser.t10758(owner__$1,app__$1,mnemonics_view__$1,meta10759));
});
}
return (new major_system.browser.t10758(owner,app,mnemonics_view,null));
});
if(typeof major_system.browser.just_at_initial_launch !== 'undefined')
{} else
{major_system.browser.just_at_initial_launch = major_system.browser.on_reload.call(null);
}
