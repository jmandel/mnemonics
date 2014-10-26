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
return (function (p1__16542_SHARP_){return major_system.combinatorics.combinations(indices,p1__16542_SHARP_);
});})(n,indices))
,cljs.core.array_seq([cljs.core.range.cljs$core$IFn$_invoke$arity$1(n)], 0));
});
major_system.browser.apply_break = (function apply_break(v,breaks){var points = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),breaks,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(v)], null)], 0));var sub = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec,v);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (points,sub){
return (function (p1__16543_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sub,p1__16543_SHARP_);
});})(points,sub))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),points));
});
major_system.browser.apply_all_breaks = (function apply_all_breaks(nums){var numsv = cljs.core.vec(nums);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (numsv){
return (function (p1__16544_SHARP_){return major_system.browser.apply_break(numsv,p1__16544_SHARP_);
});})(numsv))
,major_system.browser.all_breaks(numsv));
});
major_system.browser.words_for_pattern = (function words_for_pattern(number_groups){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(major_system.browser.words_by_number,number_groups);
});
major_system.browser.loaded_QMARK_ = (function loaded_QMARK_(){return (cljs.core.count(major_system.browser.words_by_number) > (0));
});
servant.worker.register_servant_fn("loaded?",major_system.browser.loaded_QMARK_);
major_system.browser.mnemonics = (function mnemonics(pin,p__16546){var map__16548 = p__16546;var map__16548__$1 = ((cljs.core.seq_QMARK_(map__16548))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16548):map__16548);var ntake = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16548__$1,cljs.core.constant$keyword$112,(10));var ndrop = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16548__$1,cljs.core.constant$keyword$113,(0));var p = cljs.reader.read_string(pin);var patterns = major_system.browser.apply_all_breaks(p);var results = cljs.core.take.cljs$core$IFn$_invoke$arity$2(ntake,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(ndrop,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (p,patterns,map__16548,map__16548__$1,ntake,ndrop){
return (function (p1__16545_SHARP_){return cljs.core.every_QMARK_(cljs.core.identity,p1__16545_SHARP_);
});})(p,patterns,map__16548,map__16548__$1,ntake,ndrop))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(major_system.browser.words_for_pattern,patterns))));var start__4533__auto__ = (new Date()).getTime();var ret__4534__auto__ = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.doall.cljs$core$IFn$_invoke$arity$1(results)], 0));cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([("Elapsed time: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((new Date()).getTime() - start__4533__auto__))+" msecs")], 0));
return ret__4534__auto__;
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
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(isNaN,cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseInt,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__16549_SHARP_){return p1__16549_SHARP_.split("");
}),cljs.core.array_seq([args], 0))));
};
var parse_nums = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return parse_nums__delegate.call(this,args);};
parse_nums.cljs$lang$maxFixedArity = 0;
parse_nums.cljs$lang$applyTo = (function (arglist__16550){
var args = cljs.core.seq(arglist__16550);
return parse_nums__delegate(args);
});
parse_nums.cljs$core$IFn$_invoke$arity$variadic = parse_nums__delegate;
return parse_nums;
})()
;
major_system.browser.words = (function words(app,owner){if(typeof major_system.browser.t16554 !== 'undefined')
{} else
{
/**
* @constructor
*/
major_system.browser.t16554 = (function (owner,app,words,meta16555){
this.owner = owner;
this.app = app;
this.words = words;
this.meta16555 = meta16555;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
major_system.browser.t16554.cljs$lang$type = true;
major_system.browser.t16554.cljs$lang$ctorStr = "major-system.browser/t16554";
major_system.browser.t16554.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write(writer__4216__auto__,"major-system.browser/t16554");
});
major_system.browser.t16554.prototype.om$core$IRenderState$ = true;
major_system.browser.t16554.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,null,cljs.core.interpose(", ",cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(state)));
});
major_system.browser.t16554.prototype.om$core$IShouldUpdate$ = true;
major_system.browser.t16554.prototype.om$core$IShouldUpdate$should_update$arity$3 = (function (this$,next_props,next_state){var self__ = this;
var this$__$1 = this;return true;
});
major_system.browser.t16554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16556){var self__ = this;
var _16556__$1 = this;return self__.meta16555;
});
major_system.browser.t16554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16556,meta16555__$1){var self__ = this;
var _16556__$1 = this;return (new major_system.browser.t16554(self__.owner,self__.app,self__.words,meta16555__$1));
});
major_system.browser.__GT_t16554 = (function __GT_t16554(owner__$1,app__$1,words__$1,meta16555){return (new major_system.browser.t16554(owner__$1,app__$1,words__$1,meta16555));
});
}
return (new major_system.browser.t16554(owner,app,words,null));
});
major_system.browser.mnemonic_group = (function mnemonic_group(app,owner){if(typeof major_system.browser.t16562 !== 'undefined')
{} else
{
/**
* @constructor
*/
major_system.browser.t16562 = (function (owner,app,mnemonic_group,meta16563){
this.owner = owner;
this.app = app;
this.mnemonic_group = mnemonic_group;
this.meta16563 = meta16563;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
major_system.browser.t16562.cljs$lang$type = true;
major_system.browser.t16562.cljs$lang$ctorStr = "major-system.browser/t16562";
major_system.browser.t16562.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write(writer__4216__auto__,"major-system.browser/t16562");
});
major_system.browser.t16562.prototype.om$core$IRenderState$ = true;
major_system.browser.t16562.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var parts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (part){return om.core.build.cljs$core$IFn$_invoke$arity$3(major_system.browser.words,self__.app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$105,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$117,part], null)], null));
});})(___$1))
,cljs.core.constant$keyword$118.cljs$core$IFn$_invoke$arity$1(state));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,null,cljs.core.interpose((function (){var G__16565 = null;var G__16566 = "+";return React.DOM.h2(G__16565,G__16566);
})(),parts));
});
major_system.browser.t16562.prototype.om$core$IShouldUpdate$ = true;
major_system.browser.t16562.prototype.om$core$IShouldUpdate$should_update$arity$3 = (function (this$,next_props,next_state){var self__ = this;
var this$__$1 = this;return true;
});
major_system.browser.t16562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16564){var self__ = this;
var _16564__$1 = this;return self__.meta16563;
});
major_system.browser.t16562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16564,meta16563__$1){var self__ = this;
var _16564__$1 = this;return (new major_system.browser.t16562(self__.owner,self__.app,self__.mnemonic_group,meta16563__$1));
});
major_system.browser.__GT_t16562 = (function __GT_t16562(owner__$1,app__$1,mnemonic_group__$1,meta16563){return (new major_system.browser.t16562(owner__$1,app__$1,mnemonic_group__$1,meta16563));
});
}
return (new major_system.browser.t16562(owner,app,mnemonic_group,null));
});
major_system.browser.input_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
major_system.browser.mnemonics_view = (function mnemonics_view(app,owner){if(typeof major_system.browser.t16673 !== 'undefined')
{} else
{
/**
* @constructor
*/
major_system.browser.t16673 = (function (owner,app,mnemonics_view,meta16674){
this.owner = owner;
this.app = app;
this.mnemonics_view = mnemonics_view;
this.meta16674 = meta16674;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
major_system.browser.t16673.cljs$lang$type = true;
major_system.browser.t16673.cljs$lang$ctorStr = "major-system.browser/t16673";
major_system.browser.t16673.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write(writer__4216__auto__,"major-system.browser/t16673");
});
major_system.browser.t16673.prototype.om$core$IRender$ = true;
major_system.browser.t16673.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var G__16676 = {"id": "classes"};var G__16677 = (cljs.core.truth_(cljs.core.constant$keyword$114.cljs$core$IFn$_invoke$arity$1(self__.app))?(function (){var G__16680 = {"onChange": ((function (G__16676,___$1){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(major_system.browser.input_channel,e.target.value);
});})(G__16676,___$1))
, "autoFocus": true, "placeholder": "123-456", "maxLength": "20", "value": null, "type": "number"};return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__16680) : om.dom.input.call(null,G__16680));
})():(function (){var G__16681 = null;var G__16682 = "Loading dictionary...";return React.DOM.h3(G__16681,G__16682);
})());var G__16678 = (function (){var G__16683 = null;var G__16684 = (cljs.core.truth_((function (){var and__3627__auto__ = cljs.core.constant$keyword$119.cljs$core$IFn$_invoke$arity$1(self__.app);if(cljs.core.truth_(and__3627__auto__))
{return (cljs.core.constant$keyword$115.cljs$core$IFn$_invoke$arity$1(self__.app) > (0));
} else
{return and__3627__auto__;
}
})())?cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"Working on ",cljs.core.constant$keyword$116.cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$115.cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("."))):null);return React.DOM.h3(G__16683,G__16684);
})();var G__16679 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,{"id": "answers"},(function (){var mns = cljs.core.constant$keyword$120.cljs$core$IFn$_invoke$arity$1(self__.app);var parts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (mns,G__16676,G__16677,G__16678,___$1){
return (function (p1__16567_SHARP_){return om.core.build.cljs$core$IFn$_invoke$arity$3(major_system.browser.mnemonic_group,self__.app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$105,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$118,p1__16567_SHARP_], null)], null));
});})(mns,G__16676,G__16677,G__16678,___$1))
,mns);return cljs.core.interpose((function (){var G__16685 = null;var G__16686 = (function (){var G__16688 = null;return React.DOM.hr(G__16688);
})();var G__16687 = "or...";return React.DOM.h1(G__16685,G__16686,G__16687);
})(),parts);
})());return React.DOM.div(G__16676,G__16677,G__16678,G__16679);
});
major_system.browser.t16673.prototype.om$core$IWillMount$ = true;
major_system.browser.t16673.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__12256__auto___16778 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12256__auto___16778,___$1){
return (function (){var f__12257__auto__ = (function (){var switch__12241__auto__ = ((function (c__12256__auto___16778,___$1){
return (function (state_16706){var state_val_16707 = (state_16706[(1)]);if((state_val_16707 === (8)))
{var inst_16702 = (state_16706[(2)]);var state_16706__$1 = state_16706;var statearr_16708_16779 = state_16706__$1;(statearr_16708_16779[(2)] = inst_16702);
(statearr_16708_16779[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_16707 === (7)))
{var state_16706__$1 = state_16706;var statearr_16709_16780 = state_16706__$1;(statearr_16709_16780[(2)] = null);
(statearr_16709_16780[(1)] = (8));
return cljs.core.constant$keyword$18;
} else
{if((state_val_16707 === (6)))
{var state_16706__$1 = state_16706;var statearr_16710_16781 = state_16706__$1;(statearr_16710_16781[(2)] = null);
(statearr_16710_16781[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_16707 === (5)))
{var inst_16695 = (state_16706[(2)]);var inst_16696 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$114,inst_16695);var inst_16697 = cljs.core.not(inst_16695);var state_16706__$1 = (function (){var statearr_16711 = state_16706;(statearr_16711[(7)] = inst_16696);
return statearr_16711;
})();if(inst_16697)
{var statearr_16712_16782 = state_16706__$1;(statearr_16712_16782[(1)] = (6));
} else
{var statearr_16713_16783 = state_16706__$1;(statearr_16713_16783[(1)] = (7));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_16707 === (4)))
{var inst_16692 = (state_16706[(2)]);var inst_16693 = servant.core.servant_thread(major_system.browser.servant_channel,servant.core.standard_message,major_system.browser.loaded_QMARK_);var state_16706__$1 = (function (){var statearr_16714 = state_16706;(statearr_16714[(8)] = inst_16692);
return statearr_16714;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16706__$1,(5),inst_16693);
} else
{if((state_val_16707 === (3)))
{var inst_16704 = (state_16706[(2)]);var state_16706__$1 = state_16706;return cljs.core.async.impl.ioc_helpers.return_chan(state_16706__$1,inst_16704);
} else
{if((state_val_16707 === (2)))
{var inst_16690 = cljs.core.async.timeout((500));var state_16706__$1 = state_16706;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16706__$1,(4),inst_16690);
} else
{if((state_val_16707 === (1)))
{var state_16706__$1 = state_16706;var statearr_16715_16784 = state_16706__$1;(statearr_16715_16784[(2)] = null);
(statearr_16715_16784[(1)] = (2));
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
});})(c__12256__auto___16778,___$1))
;return ((function (switch__12241__auto__,c__12256__auto___16778,___$1){
return (function() {
var state_machine__12242__auto__ = null;
var state_machine__12242__auto____0 = (function (){var statearr_16719 = [null,null,null,null,null,null,null,null,null];(statearr_16719[(0)] = state_machine__12242__auto__);
(statearr_16719[(1)] = (1));
return statearr_16719;
});
var state_machine__12242__auto____1 = (function (state_16706){while(true){
var ret_value__12243__auto__ = (function (){try{while(true){
var result__12244__auto__ = switch__12241__auto__(state_16706);if(cljs.core.keyword_identical_QMARK_(result__12244__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12244__auto__;
}
break;
}
}catch (e16720){if((e16720 instanceof Object))
{var ex__12245__auto__ = e16720;var statearr_16721_16785 = state_16706;(statearr_16721_16785[(5)] = ex__12245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_16706);
return cljs.core.constant$keyword$18;
} else
{throw e16720;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12243__auto__,cljs.core.constant$keyword$18))
{{
var G__16786 = state_16706;
state_16706 = G__16786;
continue;
}
} else
{return ret_value__12243__auto__;
}
break;
}
});
state_machine__12242__auto__ = function(state_16706){
switch(arguments.length){
case 0:
return state_machine__12242__auto____0.call(this);
case 1:
return state_machine__12242__auto____1.call(this,state_16706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12242__auto____0;
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12242__auto____1;
return state_machine__12242__auto__;
})()
;})(switch__12241__auto__,c__12256__auto___16778,___$1))
})();var state__12258__auto__ = (function (){var statearr_16722 = (function (){return (f__12257__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12257__auto__.cljs$core$IFn$_invoke$arity$0() : f__12257__auto__.call(null));
})();(statearr_16722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12256__auto___16778);
return statearr_16722;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12258__auto__);
});})(c__12256__auto___16778,___$1))
);
var c__12256__auto___16787 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12256__auto___16787,___$1){
return (function (){var f__12257__auto__ = (function (){var switch__12241__auto__ = ((function (c__12256__auto___16787,___$1){
return (function (state_16732){var state_val_16733 = (state_16732[(1)]);if((state_val_16733 === (4)))
{var inst_16726 = (state_16732[(2)]);var inst_16727 = om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$115,cljs.core.inc);var state_16732__$1 = (function (){var statearr_16734 = state_16732;(statearr_16734[(7)] = inst_16727);
(statearr_16734[(8)] = inst_16726);
return statearr_16734;
})();var statearr_16735_16788 = state_16732__$1;(statearr_16735_16788[(2)] = null);
(statearr_16735_16788[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_16733 === (3)))
{var inst_16730 = (state_16732[(2)]);var state_16732__$1 = state_16732;return cljs.core.async.impl.ioc_helpers.return_chan(state_16732__$1,inst_16730);
} else
{if((state_val_16733 === (2)))
{var inst_16724 = cljs.core.async.timeout((500));var state_16732__$1 = state_16732;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16732__$1,(4),inst_16724);
} else
{if((state_val_16733 === (1)))
{var state_16732__$1 = state_16732;var statearr_16736_16789 = state_16732__$1;(statearr_16736_16789[(2)] = null);
(statearr_16736_16789[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
});})(c__12256__auto___16787,___$1))
;return ((function (switch__12241__auto__,c__12256__auto___16787,___$1){
return (function() {
var state_machine__12242__auto__ = null;
var state_machine__12242__auto____0 = (function (){var statearr_16740 = [null,null,null,null,null,null,null,null,null];(statearr_16740[(0)] = state_machine__12242__auto__);
(statearr_16740[(1)] = (1));
return statearr_16740;
});
var state_machine__12242__auto____1 = (function (state_16732){while(true){
var ret_value__12243__auto__ = (function (){try{while(true){
var result__12244__auto__ = switch__12241__auto__(state_16732);if(cljs.core.keyword_identical_QMARK_(result__12244__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12244__auto__;
}
break;
}
}catch (e16741){if((e16741 instanceof Object))
{var ex__12245__auto__ = e16741;var statearr_16742_16790 = state_16732;(statearr_16742_16790[(5)] = ex__12245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_16732);
return cljs.core.constant$keyword$18;
} else
{throw e16741;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12243__auto__,cljs.core.constant$keyword$18))
{{
var G__16791 = state_16732;
state_16732 = G__16791;
continue;
}
} else
{return ret_value__12243__auto__;
}
break;
}
});
state_machine__12242__auto__ = function(state_16732){
switch(arguments.length){
case 0:
return state_machine__12242__auto____0.call(this);
case 1:
return state_machine__12242__auto____1.call(this,state_16732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12242__auto____0;
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12242__auto____1;
return state_machine__12242__auto__;
})()
;})(switch__12241__auto__,c__12256__auto___16787,___$1))
})();var state__12258__auto__ = (function (){var statearr_16743 = (function (){return (f__12257__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12257__auto__.cljs$core$IFn$_invoke$arity$0() : f__12257__auto__.call(null));
})();(statearr_16743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12256__auto___16787);
return statearr_16743;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12258__auto__);
});})(c__12256__auto___16787,___$1))
);
var c__12256__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12256__auto__,___$1){
return (function (){var f__12257__auto__ = (function (){var switch__12241__auto__ = ((function (c__12256__auto__,___$1){
return (function (state_16765){var state_val_16766 = (state_16765[(1)]);if((state_val_16766 === (5)))
{var inst_16757 = (state_16765[(2)]);var inst_16758 = cljs.reader.read_string(inst_16757);var inst_16759 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$120,inst_16758);var inst_16760 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$119,false);var state_16765__$1 = (function (){var statearr_16767 = state_16765;(statearr_16767[(7)] = inst_16759);
(statearr_16767[(8)] = inst_16760);
return statearr_16767;
})();var statearr_16768_16792 = state_16765__$1;(statearr_16768_16792[(2)] = null);
(statearr_16768_16792[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_16766 === (4)))
{var inst_16746 = (state_16765[(2)]);var inst_16747 = major_system.browser.parse_nums.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_16746], 0));var inst_16748 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_16747], 0));var inst_16749 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["working to chan ",inst_16748], 0));var inst_16750 = servant.core.servant_thread.cljs$core$IFn$_invoke$arity$variadic(major_system.browser.servant_channel,servant.core.standard_message,major_system.browser.mnemonics,cljs.core.array_seq([inst_16748], 0));var inst_16751 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$116,inst_16748);var inst_16752 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$115,(0));var inst_16753 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$119,true);var inst_16754 = cljs.core.PersistentVector.EMPTY;var inst_16755 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.app,cljs.core.constant$keyword$120,inst_16754);var state_16765__$1 = (function (){var statearr_16769 = state_16765;(statearr_16769[(9)] = inst_16749);
(statearr_16769[(10)] = inst_16753);
(statearr_16769[(11)] = inst_16751);
(statearr_16769[(12)] = inst_16755);
(statearr_16769[(13)] = inst_16752);
return statearr_16769;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16765__$1,(5),inst_16750);
} else
{if((state_val_16766 === (3)))
{var inst_16763 = (state_16765[(2)]);var state_16765__$1 = state_16765;return cljs.core.async.impl.ioc_helpers.return_chan(state_16765__$1,inst_16763);
} else
{if((state_val_16766 === (2)))
{var state_16765__$1 = state_16765;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16765__$1,(4),major_system.browser.input_channel);
} else
{if((state_val_16766 === (1)))
{var state_16765__$1 = state_16765;var statearr_16770_16793 = state_16765__$1;(statearr_16770_16793[(2)] = null);
(statearr_16770_16793[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
});})(c__12256__auto__,___$1))
;return ((function (switch__12241__auto__,c__12256__auto__,___$1){
return (function() {
var state_machine__12242__auto__ = null;
var state_machine__12242__auto____0 = (function (){var statearr_16774 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16774[(0)] = state_machine__12242__auto__);
(statearr_16774[(1)] = (1));
return statearr_16774;
});
var state_machine__12242__auto____1 = (function (state_16765){while(true){
var ret_value__12243__auto__ = (function (){try{while(true){
var result__12244__auto__ = switch__12241__auto__(state_16765);if(cljs.core.keyword_identical_QMARK_(result__12244__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12244__auto__;
}
break;
}
}catch (e16775){if((e16775 instanceof Object))
{var ex__12245__auto__ = e16775;var statearr_16776_16794 = state_16765;(statearr_16776_16794[(5)] = ex__12245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_16765);
return cljs.core.constant$keyword$18;
} else
{throw e16775;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12243__auto__,cljs.core.constant$keyword$18))
{{
var G__16795 = state_16765;
state_16765 = G__16795;
continue;
}
} else
{return ret_value__12243__auto__;
}
break;
}
});
state_machine__12242__auto__ = function(state_16765){
switch(arguments.length){
case 0:
return state_machine__12242__auto____0.call(this);
case 1:
return state_machine__12242__auto____1.call(this,state_16765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12242__auto____0;
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12242__auto____1;
return state_machine__12242__auto__;
})()
;})(switch__12241__auto__,c__12256__auto__,___$1))
})();var state__12258__auto__ = (function (){var statearr_16777 = (function (){return (f__12257__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12257__auto__.cljs$core$IFn$_invoke$arity$0() : f__12257__auto__.call(null));
})();(statearr_16777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12256__auto__);
return statearr_16777;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12258__auto__);
});})(c__12256__auto__,___$1))
);
return c__12256__auto__;
});
major_system.browser.t16673.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16675){var self__ = this;
var _16675__$1 = this;return self__.meta16674;
});
major_system.browser.t16673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16675,meta16674__$1){var self__ = this;
var _16675__$1 = this;return (new major_system.browser.t16673(self__.owner,self__.app,self__.mnemonics_view,meta16674__$1));
});
major_system.browser.__GT_t16673 = (function __GT_t16673(owner__$1,app__$1,mnemonics_view__$1,meta16674){return (new major_system.browser.t16673(owner__$1,app__$1,mnemonics_view__$1,meta16674));
});
}
return (new major_system.browser.t16673(owner,app,mnemonics_view,null));
});
if(typeof major_system.browser.just_at_initial_launch !== 'undefined')
{} else
{major_system.browser.just_at_initial_launch = major_system.browser.on_reload();
}
