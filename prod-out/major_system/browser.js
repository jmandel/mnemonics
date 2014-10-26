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
cljs.core.enable_console_print_BANG_();
major_system.browser.worker_count = (1);
if(servant.core.webworker_QMARK_())
{cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(cljs_http.client.get("../words-by-number.edn"),(function (res){var res__$1 = cljs.reader.read_string(cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(res));major_system.browser.words_by_number = res__$1;
}));
} else
{}
if(typeof major_system.browser.words_by_number !== 'undefined')
{} else
{major_system.browser.words_by_number = null;
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.count(major_system.browser.words_by_number)], 0));
major_system.browser.all_breaks = (function all_breaks(nums){var n = cljs.core.count(nums);var indices = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),n);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (n,indices){
return (function (p1__16557_SHARP_){return major_system.combinatorics.combinations(indices,p1__16557_SHARP_);
});})(n,indices))
,cljs.core.array_seq([cljs.core.range.cljs$core$IFn$_invoke$arity$1(n)], 0));
});
major_system.browser.apply_break = (function apply_break(v,breaks){var points = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),breaks,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(v)], null)], 0));var sub = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec,v);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (points,sub){
return (function (p1__16558_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sub,p1__16558_SHARP_);
});})(points,sub))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),points));
});
major_system.browser.apply_all_breaks = (function apply_all_breaks(nums){var numsv = cljs.core.vec(nums);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (numsv){
return (function (p1__16559_SHARP_){return major_system.browser.apply_break(numsv,p1__16559_SHARP_);
});})(numsv))
,major_system.browser.all_breaks(numsv));
});
major_system.browser.words_for_pattern = (function words_for_pattern(number_groups){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(major_system.browser.words_by_number,number_groups);
});
major_system.browser.loaded_QMARK_ = (function loaded_QMARK_(){return (cljs.core.count(major_system.browser.words_by_number) > (0));
});
servant.worker.register_servant_fn("loaded?",major_system.browser.loaded_QMARK_);
major_system.browser.mnemonics = (function mnemonics(pin,p__16561){var map__16563 = p__16561;var map__16563__$1 = ((cljs.core.seq_QMARK_(map__16563))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16563):map__16563);var ntake = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16563__$1,cljs.core.constant$keyword$112,(10));var ndrop = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16563__$1,cljs.core.constant$keyword$113,(0));var p = cljs.reader.read_string(pin);var patterns = major_system.browser.apply_all_breaks(p);var results = cljs.core.take.cljs$core$IFn$_invoke$arity$2(ntake,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(ndrop,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (p,patterns,map__16563,map__16563__$1,ntake,ndrop){
return (function (p1__16560_SHARP_){return cljs.core.every_QMARK_(cljs.core.identity,p1__16560_SHARP_);
});})(p,patterns,map__16563,map__16563__$1,ntake,ndrop))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(major_system.browser.words_for_pattern,patterns))));var start__4563__auto__ = (new Date()).getTime();var ret__4564__auto__ = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.doall.cljs$core$IFn$_invoke$arity$1(results)], 0));cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([("Elapsed time: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((new Date()).getTime() - start__4563__auto__))+" msecs")], 0));
return ret__4564__auto__;
});
servant.worker.register_servant_fn("mnemonics",major_system.browser.mnemonics);
major_system.browser.on_reload = (function on_reload(){cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Reload!"], 0));
if(servant.core.webworker_QMARK_())
{return servant.worker.bootstrap();
} else
{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["reloaded x2",servant.core.webworker_QMARK_()], 0));
major_system.browser.servant_channel = servant.core.spawn_servants(major_system.browser.worker_count,window.workerUrl);
return om.core.root(major_system.browser.mnemonics_view,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$114,false,cljs.core.constant$keyword$115,(0),cljs.core.constant$keyword$116,""], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$111,document.getElementById("main-area")], null));
}
});
/**
* @param {...*} var_args
*/
major_system.browser.parse_nums = (function() { 
var parse_nums__delegate = function (args){cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Parsing",args], 0));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(isNaN,cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseInt,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__16564_SHARP_){return p1__16564_SHARP_.split("");
}),cljs.core.array_seq([args], 0))));
};
var parse_nums = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return parse_nums__delegate.call(this,args);};
parse_nums.cljs$lang$maxFixedArity = 0;
parse_nums.cljs$lang$applyTo = (function (arglist__16565){
var args = cljs.core.seq(arglist__16565);
return parse_nums__delegate(args);
});
parse_nums.cljs$core$IFn$_invoke$arity$variadic = parse_nums__delegate;
return parse_nums;
})()
;
major_system.browser.words = (function words(app,owner){if(typeof major_system.browser.t16569 !== 'undefined')
{} else
{
/**
* @constructor
*/
major_system.browser.t16569 = (function (owner,app,words,meta16570){
this.owner = owner;
this.app = app;
this.words = words;
this.meta16570 = meta16570;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
major_system.browser.t16569.cljs$lang$type = true;
major_system.browser.t16569.cljs$lang$ctorStr = "major-system.browser/t16569";
major_system.browser.t16569.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"major-system.browser/t16569");
});
major_system.browser.t16569.prototype.om$core$IRenderState$ = true;
major_system.browser.t16569.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,null,cljs.core.interpose(", ",cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(state)));
});
major_system.browser.t16569.prototype.om$core$IShouldUpdate$ = true;
major_system.browser.t16569.prototype.om$core$IShouldUpdate$should_update$arity$3 = (function (this$,next_props,next_state){var self__ = this;
var this$__$1 = this;return true;
});
major_system.browser.t16569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16571){var self__ = this;
var _16571__$1 = this;return self__.meta16570;
});
major_system.browser.t16569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16571,meta16570__$1){var self__ = this;
var _16571__$1 = this;return (new major_system.browser.t16569(self__.owner,self__.app,self__.words,meta16570__$1));
});
major_system.browser.__GT_t16569 = (function __GT_t16569(owner__$1,app__$1,words__$1,meta16570){return (new major_system.browser.t16569(owner__$1,app__$1,words__$1,meta16570));
});
}
return (new major_system.browser.t16569(owner,app,words,null));
});
major_system.browser.mnemonic_group = (function mnemonic_group(app,owner){if(typeof major_system.browser.t16577 !== 'undefined')
{} else
{
/**
* @constructor
*/
major_system.browser.t16577 = (function (owner,app,mnemonic_group,meta16578){
this.owner = owner;
this.app = app;
this.mnemonic_group = mnemonic_group;
this.meta16578 = meta16578;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
major_system.browser.t16577.cljs$lang$type = true;
major_system.browser.t16577.cljs$lang$ctorStr = "major-system.browser/t16577";
major_system.browser.t16577.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"major-system.browser/t16577");
});
major_system.browser.t16577.prototype.om$core$IRenderState$ = true;
major_system.browser.t16577.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var parts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (part){return om.core.build.cljs$core$IFn$_invoke$arity$3(major_system.browser.words,self__.app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$105,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$117,part], null)], null));
});})(___$1))
,cljs.core.constant$keyword$118.cljs$core$IFn$_invoke$arity$1(state));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,null,cljs.core.interpose((function (){var G__16580 = null;var G__16581 = "+";return React.DOM.h2(G__16580,G__16581);
})(),parts));
});
major_system.browser.t16577.prototype.om$core$IShouldUpdate$ = true;
major_system.browser.t16577.prototype.om$core$IShouldUpdate$should_update$arity$3 = (function (this$,next_props,next_state){var self__ = this;
var this$__$1 = this;return true;
});
major_system.browser.t16577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16579){var self__ = this;
var _16579__$1 = this;return self__.meta16578;
});
major_system.browser.t16577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16579,meta16578__$1){var self__ = this;
var _16579__$1 = this;return (new major_system.browser.t16577(self__.owner,self__.app,self__.mnemonic_group,meta16578__$1));
});
major_system.browser.__GT_t16577 = (function __GT_t16577(owner__$1,app__$1,mnemonic_group__$1,meta16578){return (new major_system.browser.t16577(owner__$1,app__$1,mnemonic_group__$1,meta16578));
});
}
return (new major_system.browser.t16577(owner,app,mnemonic_group,null));
});
major_system.browser.input_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
major_system.browser.mnemonics_view = (function mnemonics_view(app,owner){if(typeof major_system.browser.t16688 !== 'undefined')
{} else
{
/**
* @constructor
*/
major_system.browser.t16688 = (function (owner,app,mnemonics_view,meta16689){
this.owner = owner;
this.app = app;
this.mnemonics_view = mnemonics_view;
this.meta16689 = meta16689;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
major_system.browser.t16688.cljs$lang$type = true;
major_system.browser.t16688.cljs$lang$ctorStr = "major-system.browser/t16688";
major_system.browser.t16688.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"major-system.browser/t16688");
});
major_system.browser.t16688.prototype.om$core$IRender$ = true;
major_system.browser.t16688.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var G__16691 = {"id": "classes"};var G__16692 = (cljs.core.truth_(cljs.core.constant$keyword$114.cljs$core$IFn$_invoke$arity$1(self__.app))?(function (){var G__16695 = {"onChange": ((function (G__16691,___$1){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(major_system.browser.input_channel,e.target.value);
});})(G__16691,___$1))
, "autoFocus": true, "placeholder": "123-456", "maxLength": "20", "value": null, "type": "number"};return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__16695) : om.dom.input.call(null,G__16695));
})():(function (){var G__16696 = null;var G__16697 = "Loading dictionary...";return React.DOM.h3(G__16696,G__16697);
})());var G__16693 = (function (){var G__16698 = null;var G__16699 = (cljs.core.truth_((function (){var and__3657__auto__ = cljs.core.constant$keyword$119.cljs$core$IFn$_invoke$arity$1(self__.app);if(cljs.core.truth_(and__3657__auto__))
{return (cljs.core.constant$keyword$115.cljs$core$IFn$_invoke$arity$1(self__.app) > (0));
} else
{return and__3657__auto__;
}
})())?cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"Working on ",cljs.core.constant$keyword$116.cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$115.cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("."))):null);return React.DOM.h3(G__16698,G__16699);
})();var G__16694 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,{"id": "answers"},(function (){var mns = cljs.core.constant$keyword$120.cljs$core$IFn$_invoke$arity$1(self__.app);var parts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (mns,G__16691,G__16692,G__16693,___$1){
return (function (p1__16582_SHARP_){return om.core.build.cljs$core$IFn$_invoke$arity$3(major_system.browser.mnemonic_group,self__.app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$105,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$118,p1__16582_SHARP_], null)], null));
});})(mns,G__16691,G__16692,G__16693,___$1))
,mns);return cljs.core.interpose((function (){var G__16700 = null;var G__16701 = (function (){var G__16703 = null;return React.DOM.hr(G__16703);
})();var G__16702 = "or...";return React.DOM.h1(G__16700,G__16701,G__16702);
})(),parts);
})());return React.DOM.div(G__16691,G__16692,G__16693,G__16694);
});
major_system.browser.t16688.prototype.om$core$IWillMount$ = true;
major_system.browser.t16688.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__12271__auto___16793 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12271__auto___16793,___$1){
return (function (){var f__12272__auto__ = (function (){var switch__12256__auto__ = ((function (c__12271__auto___16793,___$1){
return (function (state_16721){var state_val_16722 = (state_16721[(1)]);if((state_val_16722 === (8)))
{var inst_16717 = (state_16721[(2)]);var state_16721__$1 = state_16721;var statearr_16723_16794 = state_16721__$1;(statearr_16723_16794[(2)] = inst_16717);
(statearr_16723_16794[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_16722 === (7)))
{var state_16721__$1 = state_16721;var statearr_16724_16795 = state_16721__$1;(statearr_16724_16795[(2)] = null);
(statearr_16724_16795[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_16722 === (6)))
{var state_16721__$1 = state_16721;var statearr_16725_16796 = state_16721__$1;(statearr_16725_16796[(2)] = null);
(statearr_16725_16796[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_16722 === (5)))
{var inst_16710 = (state_16721[(2)]);var inst_16711 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$114,inst_16710);var inst_16712 = cljs.core.not(inst_16710);var state_16721__$1 = (function (){var statearr_16726 = state_16721;(statearr_16726[(7)] = inst_16711);
return statearr_16726;
})();if(inst_16712)
{var statearr_16727_16797 = state_16721__$1;(statearr_16727_16797[(1)] = (6));
} else
{var statearr_16728_16798 = state_16721__$1;(statearr_16728_16798[(1)] = (7));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_16722 === (4)))
{var inst_16707 = (state_16721[(2)]);var inst_16708 = servant.core.servant_thread(major_system.browser.servant_channel,servant.core.standard_message,major_system.browser.loaded_QMARK_);var state_16721__$1 = (function (){var statearr_16729 = state_16721;(statearr_16729[(8)] = inst_16707);
return statearr_16729;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16721__$1,(5),inst_16708);
} else
{if((state_val_16722 === (3)))
{var inst_16719 = (state_16721[(2)]);var state_16721__$1 = state_16721;return cljs.core.async.impl.ioc_helpers.return_chan(state_16721__$1,inst_16719);
} else
{if((state_val_16722 === (2)))
{var inst_16705 = cljs.core.async.timeout((500));var state_16721__$1 = state_16721;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16721__$1,(4),inst_16705);
} else
{if((state_val_16722 === (1)))
{var state_16721__$1 = state_16721;var statearr_16730_16799 = state_16721__$1;(statearr_16730_16799[(2)] = null);
(statearr_16730_16799[(1)] = (2));
return cljs.core.constant$keyword$18;
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
});})(c__12271__auto___16793,___$1))
;return ((function (switch__12256__auto__,c__12271__auto___16793,___$1){
return (function() {
var state_machine__12257__auto__ = null;
var state_machine__12257__auto____0 = (function (){var statearr_16734 = [null,null,null,null,null,null,null,null,null];(statearr_16734[(0)] = state_machine__12257__auto__);
(statearr_16734[(1)] = (1));
return statearr_16734;
});
var state_machine__12257__auto____1 = (function (state_16721){while(true){
var ret_value__12258__auto__ = (function (){try{while(true){
var result__12259__auto__ = switch__12256__auto__(state_16721);if(cljs.core.keyword_identical_QMARK_(result__12259__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12259__auto__;
}
break;
}
}catch (e16735){if((e16735 instanceof Object))
{var ex__12260__auto__ = e16735;var statearr_16736_16800 = state_16721;(statearr_16736_16800[(5)] = ex__12260__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_16721);
return cljs.core.constant$keyword$18;
} else
{throw e16735;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12258__auto__,cljs.core.constant$keyword$18))
{{
var G__16801 = state_16721;
state_16721 = G__16801;
continue;
}
} else
{return ret_value__12258__auto__;
}
break;
}
});
state_machine__12257__auto__ = function(state_16721){
switch(arguments.length){
case 0:
return state_machine__12257__auto____0.call(this);
case 1:
return state_machine__12257__auto____1.call(this,state_16721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12257__auto____0;
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12257__auto____1;
return state_machine__12257__auto__;
})()
;})(switch__12256__auto__,c__12271__auto___16793,___$1))
})();var state__12273__auto__ = (function (){var statearr_16737 = (function (){return (f__12272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12272__auto__.cljs$core$IFn$_invoke$arity$0() : f__12272__auto__.call(null));
})();(statearr_16737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12271__auto___16793);
return statearr_16737;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12273__auto__);
});})(c__12271__auto___16793,___$1))
);
var c__12271__auto___16802 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12271__auto___16802,___$1){
return (function (){var f__12272__auto__ = (function (){var switch__12256__auto__ = ((function (c__12271__auto___16802,___$1){
return (function (state_16747){var state_val_16748 = (state_16747[(1)]);if((state_val_16748 === (4)))
{var inst_16741 = (state_16747[(2)]);var inst_16742 = om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$115,cljs.core.inc);var state_16747__$1 = (function (){var statearr_16749 = state_16747;(statearr_16749[(7)] = inst_16741);
(statearr_16749[(8)] = inst_16742);
return statearr_16749;
})();var statearr_16750_16803 = state_16747__$1;(statearr_16750_16803[(2)] = null);
(statearr_16750_16803[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_16748 === (3)))
{var inst_16745 = (state_16747[(2)]);var state_16747__$1 = state_16747;return cljs.core.async.impl.ioc_helpers.return_chan(state_16747__$1,inst_16745);
} else
{if((state_val_16748 === (2)))
{var inst_16739 = cljs.core.async.timeout((500));var state_16747__$1 = state_16747;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16747__$1,(4),inst_16739);
} else
{if((state_val_16748 === (1)))
{var state_16747__$1 = state_16747;var statearr_16751_16804 = state_16747__$1;(statearr_16751_16804[(2)] = null);
(statearr_16751_16804[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
});})(c__12271__auto___16802,___$1))
;return ((function (switch__12256__auto__,c__12271__auto___16802,___$1){
return (function() {
var state_machine__12257__auto__ = null;
var state_machine__12257__auto____0 = (function (){var statearr_16755 = [null,null,null,null,null,null,null,null,null];(statearr_16755[(0)] = state_machine__12257__auto__);
(statearr_16755[(1)] = (1));
return statearr_16755;
});
var state_machine__12257__auto____1 = (function (state_16747){while(true){
var ret_value__12258__auto__ = (function (){try{while(true){
var result__12259__auto__ = switch__12256__auto__(state_16747);if(cljs.core.keyword_identical_QMARK_(result__12259__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12259__auto__;
}
break;
}
}catch (e16756){if((e16756 instanceof Object))
{var ex__12260__auto__ = e16756;var statearr_16757_16805 = state_16747;(statearr_16757_16805[(5)] = ex__12260__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_16747);
return cljs.core.constant$keyword$18;
} else
{throw e16756;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12258__auto__,cljs.core.constant$keyword$18))
{{
var G__16806 = state_16747;
state_16747 = G__16806;
continue;
}
} else
{return ret_value__12258__auto__;
}
break;
}
});
state_machine__12257__auto__ = function(state_16747){
switch(arguments.length){
case 0:
return state_machine__12257__auto____0.call(this);
case 1:
return state_machine__12257__auto____1.call(this,state_16747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12257__auto____0;
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12257__auto____1;
return state_machine__12257__auto__;
})()
;})(switch__12256__auto__,c__12271__auto___16802,___$1))
})();var state__12273__auto__ = (function (){var statearr_16758 = (function (){return (f__12272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12272__auto__.cljs$core$IFn$_invoke$arity$0() : f__12272__auto__.call(null));
})();(statearr_16758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12271__auto___16802);
return statearr_16758;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12273__auto__);
});})(c__12271__auto___16802,___$1))
);
var c__12271__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12271__auto__,___$1){
return (function (){var f__12272__auto__ = (function (){var switch__12256__auto__ = ((function (c__12271__auto__,___$1){
return (function (state_16780){var state_val_16781 = (state_16780[(1)]);if((state_val_16781 === (5)))
{var inst_16772 = (state_16780[(2)]);var inst_16773 = cljs.reader.read_string(inst_16772);var inst_16774 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$120,inst_16773);var inst_16775 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$119,false);var state_16780__$1 = (function (){var statearr_16782 = state_16780;(statearr_16782[(7)] = inst_16774);
(statearr_16782[(8)] = inst_16775);
return statearr_16782;
})();var statearr_16783_16807 = state_16780__$1;(statearr_16783_16807[(2)] = null);
(statearr_16783_16807[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_16781 === (4)))
{var inst_16761 = (state_16780[(2)]);var inst_16762 = major_system.browser.parse_nums.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_16761], 0));var inst_16763 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_16762], 0));var inst_16764 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["working to chan ",inst_16763], 0));var inst_16765 = servant.core.servant_thread.cljs$core$IFn$_invoke$arity$variadic(major_system.browser.servant_channel,servant.core.standard_message,major_system.browser.mnemonics,cljs.core.array_seq([inst_16763], 0));var inst_16766 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$116,inst_16763);var inst_16767 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$115,(0));var inst_16768 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$119,true);var inst_16769 = cljs.core.PersistentVector.EMPTY;var inst_16770 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$120,inst_16769);var state_16780__$1 = (function (){var statearr_16784 = state_16780;(statearr_16784[(9)] = inst_16767);
(statearr_16784[(10)] = inst_16766);
(statearr_16784[(11)] = inst_16764);
(statearr_16784[(12)] = inst_16768);
(statearr_16784[(13)] = inst_16770);
return statearr_16784;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16780__$1,(5),inst_16765);
} else
{if((state_val_16781 === (3)))
{var inst_16778 = (state_16780[(2)]);var state_16780__$1 = state_16780;return cljs.core.async.impl.ioc_helpers.return_chan(state_16780__$1,inst_16778);
} else
{if((state_val_16781 === (2)))
{var state_16780__$1 = state_16780;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16780__$1,(4),major_system.browser.input_channel);
} else
{if((state_val_16781 === (1)))
{var state_16780__$1 = state_16780;var statearr_16785_16808 = state_16780__$1;(statearr_16785_16808[(2)] = null);
(statearr_16785_16808[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
});})(c__12271__auto__,___$1))
;return ((function (switch__12256__auto__,c__12271__auto__,___$1){
return (function() {
var state_machine__12257__auto__ = null;
var state_machine__12257__auto____0 = (function (){var statearr_16789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16789[(0)] = state_machine__12257__auto__);
(statearr_16789[(1)] = (1));
return statearr_16789;
});
var state_machine__12257__auto____1 = (function (state_16780){while(true){
var ret_value__12258__auto__ = (function (){try{while(true){
var result__12259__auto__ = switch__12256__auto__(state_16780);if(cljs.core.keyword_identical_QMARK_(result__12259__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12259__auto__;
}
break;
}
}catch (e16790){if((e16790 instanceof Object))
{var ex__12260__auto__ = e16790;var statearr_16791_16809 = state_16780;(statearr_16791_16809[(5)] = ex__12260__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_16780);
return cljs.core.constant$keyword$18;
} else
{throw e16790;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12258__auto__,cljs.core.constant$keyword$18))
{{
var G__16810 = state_16780;
state_16780 = G__16810;
continue;
}
} else
{return ret_value__12258__auto__;
}
break;
}
});
state_machine__12257__auto__ = function(state_16780){
switch(arguments.length){
case 0:
return state_machine__12257__auto____0.call(this);
case 1:
return state_machine__12257__auto____1.call(this,state_16780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12257__auto____0;
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12257__auto____1;
return state_machine__12257__auto__;
})()
;})(switch__12256__auto__,c__12271__auto__,___$1))
})();var state__12273__auto__ = (function (){var statearr_16792 = (function (){return (f__12272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12272__auto__.cljs$core$IFn$_invoke$arity$0() : f__12272__auto__.call(null));
})();(statearr_16792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12271__auto__);
return statearr_16792;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12273__auto__);
});})(c__12271__auto__,___$1))
);
return c__12271__auto__;
});
major_system.browser.t16688.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16690){var self__ = this;
var _16690__$1 = this;return self__.meta16689;
});
major_system.browser.t16688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16690,meta16689__$1){var self__ = this;
var _16690__$1 = this;return (new major_system.browser.t16688(self__.owner,self__.app,self__.mnemonics_view,meta16689__$1));
});
major_system.browser.__GT_t16688 = (function __GT_t16688(owner__$1,app__$1,mnemonics_view__$1,meta16689){return (new major_system.browser.t16688(owner__$1,app__$1,mnemonics_view__$1,meta16689));
});
}
return (new major_system.browser.t16688(owner,app,mnemonics_view,null));
});
if(typeof major_system.browser.just_at_initial_launch !== 'undefined')
{} else
{major_system.browser.just_at_initial_launch = major_system.browser.on_reload();
}
