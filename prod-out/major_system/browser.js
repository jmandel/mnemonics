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
{cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(cljs_http.client.get("../words-by-number.edn"),(function (res){var res__$1 = cljs.reader.read_string(cljs.core.constant$keyword$48.cljs$core$IFn$_invoke$arity$1(res));major_system.browser.words_by_number = res__$1;
}));
} else
{}
if(typeof major_system.browser.words_by_number !== 'undefined')
{} else
{major_system.browser.words_by_number = null;
}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.count(major_system.browser.words_by_number)], 0));
major_system.browser.all_breaks = (function all_breaks(nums){var n = cljs.core.count(nums);var indices = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),n);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (n,indices){
return (function (p1__16476_SHARP_){return major_system.combinatorics.combinations(indices,p1__16476_SHARP_);
});})(n,indices))
,cljs.core.array_seq([cljs.core.range.cljs$core$IFn$_invoke$arity$1(n)], 0));
});
major_system.browser.apply_break = (function apply_break(v,breaks){var points = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),breaks,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(v)], null)], 0));var sub = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec,v);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (points,sub){
return (function (p1__16477_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sub,p1__16477_SHARP_);
});})(points,sub))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),points));
});
major_system.browser.apply_all_breaks = (function apply_all_breaks(nums){var numsv = cljs.core.vec(nums);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (numsv){
return (function (p1__16478_SHARP_){return major_system.browser.apply_break(numsv,p1__16478_SHARP_);
});})(numsv))
,major_system.browser.all_breaks(numsv));
});
major_system.browser.words_for_pattern = (function words_for_pattern(number_groups){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(major_system.browser.words_by_number,number_groups);
});
major_system.browser.loaded_QMARK_ = (function loaded_QMARK_(){return (cljs.core.count(major_system.browser.words_by_number) > (0));
});
servant.worker.register_servant_fn("loaded?",major_system.browser.loaded_QMARK_);
major_system.browser.mnemonics = (function mnemonics(pin,p__16480){var map__16482 = p__16480;var map__16482__$1 = ((cljs.core.seq_QMARK_(map__16482))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16482):map__16482);var ntake = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16482__$1,cljs.core.constant$keyword$112,(10));var ndrop = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16482__$1,cljs.core.constant$keyword$113,(0));var p = cljs.reader.read_string(pin);var patterns = major_system.browser.apply_all_breaks(p);var results = cljs.core.take.cljs$core$IFn$_invoke$arity$2(ntake,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(ndrop,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (p,patterns,map__16482,map__16482__$1,ntake,ndrop){
return (function (p1__16479_SHARP_){return cljs.core.every_QMARK_(cljs.core.identity,p1__16479_SHARP_);
});})(p,patterns,map__16482,map__16482__$1,ntake,ndrop))
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
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(isNaN,cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseInt,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__16483_SHARP_){return p1__16483_SHARP_.split("");
}),cljs.core.array_seq([args], 0))));
};
var parse_nums = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return parse_nums__delegate.call(this,args);};
parse_nums.cljs$lang$maxFixedArity = 0;
parse_nums.cljs$lang$applyTo = (function (arglist__16484){
var args = cljs.core.seq(arglist__16484);
return parse_nums__delegate(args);
});
parse_nums.cljs$core$IFn$_invoke$arity$variadic = parse_nums__delegate;
return parse_nums;
})()
;
major_system.browser.words = (function words(app,owner){if(typeof major_system.browser.t16488 !== 'undefined')
{} else
{
/**
* @constructor
*/
major_system.browser.t16488 = (function (owner,app,words,meta16489){
this.owner = owner;
this.app = app;
this.words = words;
this.meta16489 = meta16489;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
major_system.browser.t16488.cljs$lang$type = true;
major_system.browser.t16488.cljs$lang$ctorStr = "major-system.browser/t16488";
major_system.browser.t16488.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"major-system.browser/t16488");
});
major_system.browser.t16488.prototype.om$core$IRenderState$ = true;
major_system.browser.t16488.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,null,cljs.core.interpose(", ",cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(state)));
});
major_system.browser.t16488.prototype.om$core$IShouldUpdate$ = true;
major_system.browser.t16488.prototype.om$core$IShouldUpdate$should_update$arity$3 = (function (this$,next_props,next_state){var self__ = this;
var this$__$1 = this;return true;
});
major_system.browser.t16488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16490){var self__ = this;
var _16490__$1 = this;return self__.meta16489;
});
major_system.browser.t16488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16490,meta16489__$1){var self__ = this;
var _16490__$1 = this;return (new major_system.browser.t16488(self__.owner,self__.app,self__.words,meta16489__$1));
});
major_system.browser.__GT_t16488 = (function __GT_t16488(owner__$1,app__$1,words__$1,meta16489){return (new major_system.browser.t16488(owner__$1,app__$1,words__$1,meta16489));
});
}
return (new major_system.browser.t16488(owner,app,words,null));
});
major_system.browser.mnemonic_group = (function mnemonic_group(app,owner){if(typeof major_system.browser.t16496 !== 'undefined')
{} else
{
/**
* @constructor
*/
major_system.browser.t16496 = (function (owner,app,mnemonic_group,meta16497){
this.owner = owner;
this.app = app;
this.mnemonic_group = mnemonic_group;
this.meta16497 = meta16497;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
major_system.browser.t16496.cljs$lang$type = true;
major_system.browser.t16496.cljs$lang$ctorStr = "major-system.browser/t16496";
major_system.browser.t16496.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"major-system.browser/t16496");
});
major_system.browser.t16496.prototype.om$core$IRenderState$ = true;
major_system.browser.t16496.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var parts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (part){return om.core.build.cljs$core$IFn$_invoke$arity$3(major_system.browser.words,self__.app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$105,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$117,part], null)], null));
});})(___$1))
,cljs.core.constant$keyword$118.cljs$core$IFn$_invoke$arity$1(state));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,null,cljs.core.interpose((function (){var G__16499 = null;var G__16500 = "+";return React.DOM.h2(G__16499,G__16500);
})(),parts));
});
major_system.browser.t16496.prototype.om$core$IShouldUpdate$ = true;
major_system.browser.t16496.prototype.om$core$IShouldUpdate$should_update$arity$3 = (function (this$,next_props,next_state){var self__ = this;
var this$__$1 = this;return true;
});
major_system.browser.t16496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16498){var self__ = this;
var _16498__$1 = this;return self__.meta16497;
});
major_system.browser.t16496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16498,meta16497__$1){var self__ = this;
var _16498__$1 = this;return (new major_system.browser.t16496(self__.owner,self__.app,self__.mnemonic_group,meta16497__$1));
});
major_system.browser.__GT_t16496 = (function __GT_t16496(owner__$1,app__$1,mnemonic_group__$1,meta16497){return (new major_system.browser.t16496(owner__$1,app__$1,mnemonic_group__$1,meta16497));
});
}
return (new major_system.browser.t16496(owner,app,mnemonic_group,null));
});
major_system.browser.input_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
major_system.browser.mnemonics_view = (function mnemonics_view(app,owner){if(typeof major_system.browser.t16607 !== 'undefined')
{} else
{
/**
* @constructor
*/
major_system.browser.t16607 = (function (owner,app,mnemonics_view,meta16608){
this.owner = owner;
this.app = app;
this.mnemonics_view = mnemonics_view;
this.meta16608 = meta16608;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
major_system.browser.t16607.cljs$lang$type = true;
major_system.browser.t16607.cljs$lang$ctorStr = "major-system.browser/t16607";
major_system.browser.t16607.cljs$lang$ctorPrWriter = (function (this__4245__auto__,writer__4246__auto__,opt__4247__auto__){return cljs.core._write(writer__4246__auto__,"major-system.browser/t16607");
});
major_system.browser.t16607.prototype.om$core$IRender$ = true;
major_system.browser.t16607.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var G__16610 = {"id": "classes"};var G__16611 = (cljs.core.truth_(cljs.core.constant$keyword$114.cljs$core$IFn$_invoke$arity$1(self__.app))?(function (){var G__16614 = {"onChange": ((function (G__16610,___$1){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(major_system.browser.input_channel,e.target.value);
});})(G__16610,___$1))
, "autoFocus": true, "placeholder": "123-456", "maxLength": "20", "value": null, "type": "number"};return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__16614) : om.dom.input.call(null,G__16614));
})():(function (){var G__16615 = null;var G__16616 = "Loading dictionary...";return React.DOM.h3(G__16615,G__16616);
})());var G__16612 = (function (){var G__16617 = null;var G__16618 = (cljs.core.truth_((function (){var and__3657__auto__ = cljs.core.constant$keyword$119.cljs$core$IFn$_invoke$arity$1(self__.app);if(cljs.core.truth_(and__3657__auto__))
{return (cljs.core.constant$keyword$115.cljs$core$IFn$_invoke$arity$1(self__.app) > (0));
} else
{return and__3657__auto__;
}
})())?cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"Working on ",cljs.core.constant$keyword$116.cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$115.cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("."))):null);return React.DOM.h3(G__16617,G__16618);
})();var G__16613 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,{"id": "answers"},(function (){var mns = cljs.core.constant$keyword$120.cljs$core$IFn$_invoke$arity$1(self__.app);var parts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (mns,G__16610,G__16611,G__16612,___$1){
return (function (p1__16501_SHARP_){return om.core.build.cljs$core$IFn$_invoke$arity$3(major_system.browser.mnemonic_group,self__.app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$105,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$118,p1__16501_SHARP_], null)], null));
});})(mns,G__16610,G__16611,G__16612,___$1))
,mns);return cljs.core.interpose((function (){var G__16619 = null;var G__16620 = (function (){var G__16622 = null;return React.DOM.hr(G__16622);
})();var G__16621 = "or...";return React.DOM.h1(G__16619,G__16620,G__16621);
})(),parts);
})());return React.DOM.div(G__16610,G__16611,G__16612,G__16613);
});
major_system.browser.t16607.prototype.om$core$IWillMount$ = true;
major_system.browser.t16607.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__6524__auto___16712 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6524__auto___16712,___$1){
return (function (){var f__6525__auto__ = (function (){var switch__6509__auto__ = ((function (c__6524__auto___16712,___$1){
return (function (state_16640){var state_val_16641 = (state_16640[(1)]);if((state_val_16641 === (8)))
{var inst_16636 = (state_16640[(2)]);var state_16640__$1 = state_16640;var statearr_16642_16713 = state_16640__$1;(statearr_16642_16713[(2)] = inst_16636);
(statearr_16642_16713[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_16641 === (7)))
{var state_16640__$1 = state_16640;var statearr_16643_16714 = state_16640__$1;(statearr_16643_16714[(2)] = null);
(statearr_16643_16714[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_16641 === (6)))
{var state_16640__$1 = state_16640;var statearr_16644_16715 = state_16640__$1;(statearr_16644_16715[(2)] = null);
(statearr_16644_16715[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_16641 === (5)))
{var inst_16629 = (state_16640[(2)]);var inst_16630 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$114,inst_16629);var inst_16631 = cljs.core.not(inst_16629);var state_16640__$1 = (function (){var statearr_16645 = state_16640;(statearr_16645[(7)] = inst_16630);
return statearr_16645;
})();if(inst_16631)
{var statearr_16646_16716 = state_16640__$1;(statearr_16646_16716[(1)] = (6));
} else
{var statearr_16647_16717 = state_16640__$1;(statearr_16647_16717[(1)] = (7));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_16641 === (4)))
{var inst_16626 = (state_16640[(2)]);var inst_16627 = servant.core.servant_thread(major_system.browser.servant_channel,servant.core.standard_message,major_system.browser.loaded_QMARK_);var state_16640__$1 = (function (){var statearr_16648 = state_16640;(statearr_16648[(8)] = inst_16626);
return statearr_16648;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16640__$1,(5),inst_16627);
} else
{if((state_val_16641 === (3)))
{var inst_16638 = (state_16640[(2)]);var state_16640__$1 = state_16640;return cljs.core.async.impl.ioc_helpers.return_chan(state_16640__$1,inst_16638);
} else
{if((state_val_16641 === (2)))
{var inst_16624 = cljs.core.async.timeout((500));var state_16640__$1 = state_16640;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16640__$1,(4),inst_16624);
} else
{if((state_val_16641 === (1)))
{var state_16640__$1 = state_16640;var statearr_16649_16718 = state_16640__$1;(statearr_16649_16718[(2)] = null);
(statearr_16649_16718[(1)] = (2));
return cljs.core.constant$keyword$16;
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
});})(c__6524__auto___16712,___$1))
;return ((function (switch__6509__auto__,c__6524__auto___16712,___$1){
return (function() {
var state_machine__6510__auto__ = null;
var state_machine__6510__auto____0 = (function (){var statearr_16653 = [null,null,null,null,null,null,null,null,null];(statearr_16653[(0)] = state_machine__6510__auto__);
(statearr_16653[(1)] = (1));
return statearr_16653;
});
var state_machine__6510__auto____1 = (function (state_16640){while(true){
var ret_value__6511__auto__ = (function (){try{while(true){
var result__6512__auto__ = switch__6509__auto__(state_16640);if(cljs.core.keyword_identical_QMARK_(result__6512__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6512__auto__;
}
break;
}
}catch (e16654){if((e16654 instanceof Object))
{var ex__6513__auto__ = e16654;var statearr_16655_16719 = state_16640;(statearr_16655_16719[(5)] = ex__6513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_16640);
return cljs.core.constant$keyword$16;
} else
{throw e16654;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6511__auto__,cljs.core.constant$keyword$16))
{{
var G__16720 = state_16640;
state_16640 = G__16720;
continue;
}
} else
{return ret_value__6511__auto__;
}
break;
}
});
state_machine__6510__auto__ = function(state_16640){
switch(arguments.length){
case 0:
return state_machine__6510__auto____0.call(this);
case 1:
return state_machine__6510__auto____1.call(this,state_16640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6510__auto____0;
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6510__auto____1;
return state_machine__6510__auto__;
})()
;})(switch__6509__auto__,c__6524__auto___16712,___$1))
})();var state__6526__auto__ = (function (){var statearr_16656 = (function (){return (f__6525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6525__auto__.cljs$core$IFn$_invoke$arity$0() : f__6525__auto__.call(null));
})();(statearr_16656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___16712);
return statearr_16656;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6526__auto__);
});})(c__6524__auto___16712,___$1))
);
var c__6524__auto___16721 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6524__auto___16721,___$1){
return (function (){var f__6525__auto__ = (function (){var switch__6509__auto__ = ((function (c__6524__auto___16721,___$1){
return (function (state_16666){var state_val_16667 = (state_16666[(1)]);if((state_val_16667 === (4)))
{var inst_16660 = (state_16666[(2)]);var inst_16661 = om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$115,cljs.core.inc);var state_16666__$1 = (function (){var statearr_16668 = state_16666;(statearr_16668[(7)] = inst_16660);
(statearr_16668[(8)] = inst_16661);
return statearr_16668;
})();var statearr_16669_16722 = state_16666__$1;(statearr_16669_16722[(2)] = null);
(statearr_16669_16722[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_16667 === (3)))
{var inst_16664 = (state_16666[(2)]);var state_16666__$1 = state_16666;return cljs.core.async.impl.ioc_helpers.return_chan(state_16666__$1,inst_16664);
} else
{if((state_val_16667 === (2)))
{var inst_16658 = cljs.core.async.timeout((500));var state_16666__$1 = state_16666;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16666__$1,(4),inst_16658);
} else
{if((state_val_16667 === (1)))
{var state_16666__$1 = state_16666;var statearr_16670_16723 = state_16666__$1;(statearr_16670_16723[(2)] = null);
(statearr_16670_16723[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
});})(c__6524__auto___16721,___$1))
;return ((function (switch__6509__auto__,c__6524__auto___16721,___$1){
return (function() {
var state_machine__6510__auto__ = null;
var state_machine__6510__auto____0 = (function (){var statearr_16674 = [null,null,null,null,null,null,null,null,null];(statearr_16674[(0)] = state_machine__6510__auto__);
(statearr_16674[(1)] = (1));
return statearr_16674;
});
var state_machine__6510__auto____1 = (function (state_16666){while(true){
var ret_value__6511__auto__ = (function (){try{while(true){
var result__6512__auto__ = switch__6509__auto__(state_16666);if(cljs.core.keyword_identical_QMARK_(result__6512__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6512__auto__;
}
break;
}
}catch (e16675){if((e16675 instanceof Object))
{var ex__6513__auto__ = e16675;var statearr_16676_16724 = state_16666;(statearr_16676_16724[(5)] = ex__6513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_16666);
return cljs.core.constant$keyword$16;
} else
{throw e16675;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6511__auto__,cljs.core.constant$keyword$16))
{{
var G__16725 = state_16666;
state_16666 = G__16725;
continue;
}
} else
{return ret_value__6511__auto__;
}
break;
}
});
state_machine__6510__auto__ = function(state_16666){
switch(arguments.length){
case 0:
return state_machine__6510__auto____0.call(this);
case 1:
return state_machine__6510__auto____1.call(this,state_16666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6510__auto____0;
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6510__auto____1;
return state_machine__6510__auto__;
})()
;})(switch__6509__auto__,c__6524__auto___16721,___$1))
})();var state__6526__auto__ = (function (){var statearr_16677 = (function (){return (f__6525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6525__auto__.cljs$core$IFn$_invoke$arity$0() : f__6525__auto__.call(null));
})();(statearr_16677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___16721);
return statearr_16677;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6526__auto__);
});})(c__6524__auto___16721,___$1))
);
var c__6524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6524__auto__,___$1){
return (function (){var f__6525__auto__ = (function (){var switch__6509__auto__ = ((function (c__6524__auto__,___$1){
return (function (state_16699){var state_val_16700 = (state_16699[(1)]);if((state_val_16700 === (5)))
{var inst_16691 = (state_16699[(2)]);var inst_16692 = cljs.reader.read_string(inst_16691);var inst_16693 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$120,inst_16692);var inst_16694 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$119,false);var state_16699__$1 = (function (){var statearr_16701 = state_16699;(statearr_16701[(7)] = inst_16694);
(statearr_16701[(8)] = inst_16693);
return statearr_16701;
})();var statearr_16702_16726 = state_16699__$1;(statearr_16702_16726[(2)] = null);
(statearr_16702_16726[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_16700 === (4)))
{var inst_16680 = (state_16699[(2)]);var inst_16681 = major_system.browser.parse_nums.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_16680], 0));var inst_16682 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_16681], 0));var inst_16683 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["working to chan ",inst_16682], 0));var inst_16684 = servant.core.servant_thread.cljs$core$IFn$_invoke$arity$variadic(major_system.browser.servant_channel,servant.core.standard_message,major_system.browser.mnemonics,cljs.core.array_seq([inst_16682], 0));var inst_16685 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$116,inst_16682);var inst_16686 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$115,(0));var inst_16687 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$119,true);var inst_16688 = cljs.core.PersistentVector.EMPTY;var inst_16689 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$120,inst_16688);var state_16699__$1 = (function (){var statearr_16703 = state_16699;(statearr_16703[(9)] = inst_16687);
(statearr_16703[(10)] = inst_16685);
(statearr_16703[(11)] = inst_16686);
(statearr_16703[(12)] = inst_16683);
(statearr_16703[(13)] = inst_16689);
return statearr_16703;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16699__$1,(5),inst_16684);
} else
{if((state_val_16700 === (3)))
{var inst_16697 = (state_16699[(2)]);var state_16699__$1 = state_16699;return cljs.core.async.impl.ioc_helpers.return_chan(state_16699__$1,inst_16697);
} else
{if((state_val_16700 === (2)))
{var state_16699__$1 = state_16699;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16699__$1,(4),major_system.browser.input_channel);
} else
{if((state_val_16700 === (1)))
{var state_16699__$1 = state_16699;var statearr_16704_16727 = state_16699__$1;(statearr_16704_16727[(2)] = null);
(statearr_16704_16727[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
});})(c__6524__auto__,___$1))
;return ((function (switch__6509__auto__,c__6524__auto__,___$1){
return (function() {
var state_machine__6510__auto__ = null;
var state_machine__6510__auto____0 = (function (){var statearr_16708 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16708[(0)] = state_machine__6510__auto__);
(statearr_16708[(1)] = (1));
return statearr_16708;
});
var state_machine__6510__auto____1 = (function (state_16699){while(true){
var ret_value__6511__auto__ = (function (){try{while(true){
var result__6512__auto__ = switch__6509__auto__(state_16699);if(cljs.core.keyword_identical_QMARK_(result__6512__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6512__auto__;
}
break;
}
}catch (e16709){if((e16709 instanceof Object))
{var ex__6513__auto__ = e16709;var statearr_16710_16728 = state_16699;(statearr_16710_16728[(5)] = ex__6513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_16699);
return cljs.core.constant$keyword$16;
} else
{throw e16709;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6511__auto__,cljs.core.constant$keyword$16))
{{
var G__16729 = state_16699;
state_16699 = G__16729;
continue;
}
} else
{return ret_value__6511__auto__;
}
break;
}
});
state_machine__6510__auto__ = function(state_16699){
switch(arguments.length){
case 0:
return state_machine__6510__auto____0.call(this);
case 1:
return state_machine__6510__auto____1.call(this,state_16699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6510__auto____0;
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6510__auto____1;
return state_machine__6510__auto__;
})()
;})(switch__6509__auto__,c__6524__auto__,___$1))
})();var state__6526__auto__ = (function (){var statearr_16711 = (function (){return (f__6525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6525__auto__.cljs$core$IFn$_invoke$arity$0() : f__6525__auto__.call(null));
})();(statearr_16711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto__);
return statearr_16711;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6526__auto__);
});})(c__6524__auto__,___$1))
);
return c__6524__auto__;
});
major_system.browser.t16607.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16609){var self__ = this;
var _16609__$1 = this;return self__.meta16608;
});
major_system.browser.t16607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16609,meta16608__$1){var self__ = this;
var _16609__$1 = this;return (new major_system.browser.t16607(self__.owner,self__.app,self__.mnemonics_view,meta16608__$1));
});
major_system.browser.__GT_t16607 = (function __GT_t16607(owner__$1,app__$1,mnemonics_view__$1,meta16608){return (new major_system.browser.t16607(owner__$1,app__$1,mnemonics_view__$1,meta16608));
});
}
return (new major_system.browser.t16607(owner,app,mnemonics_view,null));
});
if(typeof major_system.browser.just_at_initial_launch !== 'undefined')
{} else
{major_system.browser.just_at_initial_launch = major_system.browser.on_reload();
}
