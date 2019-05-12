// Compiled by ClojureScript 0.0-2356
goog.provide('servant.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('servant.worker');
goog.require('servant.worker');
goog.require('cljs.core.async');
servant.core.webworker_QMARK_ = (function webworker_QMARK_(){return (void 0 === self.document);
});
servant.core.not_webworker_QMARK_ = cljs.core.complement(servant.core.webworker_QMARK_);
/**
* Returns a channel that lists available workers
*/
servant.core.spawn_servants = (function spawn_servants(worker_count,worker_script){var servant_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(worker_count);var c__6524__auto___27214 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6524__auto___27214,servant_channel){
return (function (){var f__6525__auto__ = (function (){var switch__6509__auto__ = ((function (c__6524__auto___27214,servant_channel){
return (function (state_27181){var state_val_27182 = (state_27181[(1)]);if((state_val_27182 === (7)))
{var inst_27142 = (state_27181[(7)]);var inst_27144 = (state_27181[(8)]);var inst_27143 = (state_27181[(9)]);var inst_27141 = (state_27181[(10)]);var inst_27152 = (state_27181[(2)]);var inst_27153 = (inst_27144 + (1));var tmp27183 = inst_27142;var tmp27184 = inst_27143;var tmp27185 = inst_27141;var inst_27141__$1 = tmp27185;var inst_27142__$1 = tmp27183;var inst_27143__$1 = tmp27184;var inst_27144__$1 = inst_27153;var state_27181__$1 = (function (){var statearr_27186 = state_27181;(statearr_27186[(7)] = inst_27142__$1);
(statearr_27186[(8)] = inst_27144__$1);
(statearr_27186[(9)] = inst_27143__$1);
(statearr_27186[(10)] = inst_27141__$1);
(statearr_27186[(11)] = inst_27152);
return statearr_27186;
})();var statearr_27187_27215 = state_27181__$1;(statearr_27187_27215[(2)] = null);
(statearr_27187_27215[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27182 === (1)))
{var inst_27139 = cljs.core.range.cljs$core$IFn$_invoke$arity$1(worker_count);var inst_27140 = cljs.core.seq(inst_27139);var inst_27141 = inst_27140;var inst_27142 = null;var inst_27143 = (0);var inst_27144 = (0);var state_27181__$1 = (function (){var statearr_27188 = state_27181;(statearr_27188[(7)] = inst_27142);
(statearr_27188[(8)] = inst_27144);
(statearr_27188[(9)] = inst_27143);
(statearr_27188[(10)] = inst_27141);
return statearr_27188;
})();var statearr_27189_27216 = state_27181__$1;(statearr_27189_27216[(2)] = null);
(statearr_27189_27216[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27182 === (4)))
{var inst_27142 = (state_27181[(7)]);var inst_27144 = (state_27181[(8)]);var inst_27149 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27142,inst_27144);var inst_27150 = (new Worker(worker_script));var state_27181__$1 = (function (){var statearr_27190 = state_27181;(statearr_27190[(12)] = inst_27149);
return statearr_27190;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27181__$1,(7),servant_channel,inst_27150);
} else
{if((state_val_27182 === (13)))
{var inst_27172 = (state_27181[(2)]);var state_27181__$1 = state_27181;var statearr_27191_27217 = state_27181__$1;(statearr_27191_27217[(2)] = inst_27172);
(statearr_27191_27217[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27182 === (6)))
{var inst_27177 = (state_27181[(2)]);var state_27181__$1 = state_27181;var statearr_27192_27218 = state_27181__$1;(statearr_27192_27218[(2)] = inst_27177);
(statearr_27192_27218[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27182 === (3)))
{var inst_27179 = (state_27181[(2)]);var state_27181__$1 = state_27181;return cljs.core.async.impl.ioc_helpers.return_chan(state_27181__$1,inst_27179);
} else
{if((state_val_27182 === (12)))
{var inst_27156 = (state_27181[(13)]);var inst_27165 = cljs.core.first(inst_27156);var inst_27166 = (new Worker(worker_script));var state_27181__$1 = (function (){var statearr_27193 = state_27181;(statearr_27193[(14)] = inst_27165);
return statearr_27193;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27181__$1,(14),servant_channel,inst_27166);
} else
{if((state_val_27182 === (2)))
{var inst_27144 = (state_27181[(8)]);var inst_27143 = (state_27181[(9)]);var inst_27146 = (inst_27144 < inst_27143);var inst_27147 = inst_27146;var state_27181__$1 = state_27181;if(cljs.core.truth_(inst_27147))
{var statearr_27194_27219 = state_27181__$1;(statearr_27194_27219[(1)] = (4));
} else
{var statearr_27195_27220 = state_27181__$1;(statearr_27195_27220[(1)] = (5));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27182 === (11)))
{var inst_27156 = (state_27181[(13)]);var inst_27160 = cljs.core.chunk_first(inst_27156);var inst_27161 = cljs.core.chunk_rest(inst_27156);var inst_27162 = cljs.core.count(inst_27160);var inst_27141 = inst_27161;var inst_27142 = inst_27160;var inst_27143 = inst_27162;var inst_27144 = (0);var state_27181__$1 = (function (){var statearr_27196 = state_27181;(statearr_27196[(7)] = inst_27142);
(statearr_27196[(8)] = inst_27144);
(statearr_27196[(9)] = inst_27143);
(statearr_27196[(10)] = inst_27141);
return statearr_27196;
})();var statearr_27197_27221 = state_27181__$1;(statearr_27197_27221[(2)] = null);
(statearr_27197_27221[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27182 === (9)))
{var state_27181__$1 = state_27181;var statearr_27198_27222 = state_27181__$1;(statearr_27198_27222[(2)] = null);
(statearr_27198_27222[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27182 === (5)))
{var inst_27141 = (state_27181[(10)]);var inst_27156 = (state_27181[(13)]);var inst_27156__$1 = cljs.core.seq(inst_27141);var state_27181__$1 = (function (){var statearr_27199 = state_27181;(statearr_27199[(13)] = inst_27156__$1);
return statearr_27199;
})();if(inst_27156__$1)
{var statearr_27200_27223 = state_27181__$1;(statearr_27200_27223[(1)] = (8));
} else
{var statearr_27201_27224 = state_27181__$1;(statearr_27201_27224[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27182 === (14)))
{var inst_27156 = (state_27181[(13)]);var inst_27168 = (state_27181[(2)]);var inst_27169 = cljs.core.next(inst_27156);var inst_27141 = inst_27169;var inst_27142 = null;var inst_27143 = (0);var inst_27144 = (0);var state_27181__$1 = (function (){var statearr_27202 = state_27181;(statearr_27202[(7)] = inst_27142);
(statearr_27202[(8)] = inst_27144);
(statearr_27202[(9)] = inst_27143);
(statearr_27202[(15)] = inst_27168);
(statearr_27202[(10)] = inst_27141);
return statearr_27202;
})();var statearr_27203_27225 = state_27181__$1;(statearr_27203_27225[(2)] = null);
(statearr_27203_27225[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27182 === (10)))
{var inst_27175 = (state_27181[(2)]);var state_27181__$1 = state_27181;var statearr_27204_27226 = state_27181__$1;(statearr_27204_27226[(2)] = inst_27175);
(statearr_27204_27226[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27182 === (8)))
{var inst_27156 = (state_27181[(13)]);var inst_27158 = cljs.core.chunked_seq_QMARK_(inst_27156);var state_27181__$1 = state_27181;if(inst_27158)
{var statearr_27205_27227 = state_27181__$1;(statearr_27205_27227[(1)] = (11));
} else
{var statearr_27206_27228 = state_27181__$1;(statearr_27206_27228[(1)] = (12));
}
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
}
}
}
}
}
}
});})(c__6524__auto___27214,servant_channel))
;return ((function (switch__6509__auto__,c__6524__auto___27214,servant_channel){
return (function() {
var state_machine__6510__auto__ = null;
var state_machine__6510__auto____0 = (function (){var statearr_27210 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27210[(0)] = state_machine__6510__auto__);
(statearr_27210[(1)] = (1));
return statearr_27210;
});
var state_machine__6510__auto____1 = (function (state_27181){while(true){
var ret_value__6511__auto__ = (function (){try{while(true){
var result__6512__auto__ = switch__6509__auto__(state_27181);if(cljs.core.keyword_identical_QMARK_(result__6512__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6512__auto__;
}
break;
}
}catch (e27211){if((e27211 instanceof Object))
{var ex__6513__auto__ = e27211;var statearr_27212_27229 = state_27181;(statearr_27212_27229[(5)] = ex__6513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27181);
return cljs.core.constant$keyword$16;
} else
{throw e27211;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6511__auto__,cljs.core.constant$keyword$16))
{{
var G__27230 = state_27181;
state_27181 = G__27230;
continue;
}
} else
{return ret_value__6511__auto__;
}
break;
}
});
state_machine__6510__auto__ = function(state_27181){
switch(arguments.length){
case 0:
return state_machine__6510__auto____0.call(this);
case 1:
return state_machine__6510__auto____1.call(this,state_27181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6510__auto____0;
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6510__auto____1;
return state_machine__6510__auto__;
})()
;})(switch__6509__auto__,c__6524__auto___27214,servant_channel))
})();var state__6526__auto__ = (function (){var statearr_27213 = (function (){return (f__6525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6525__auto__.cljs$core$IFn$_invoke$arity$0() : f__6525__auto__.call(null));
})();(statearr_27213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___27214);
return statearr_27213;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6526__auto__);
});})(c__6524__auto___27214,servant_channel))
);
return servant_channel;
});
/**
* Kills worker-count # of workers
*/
servant.core.kill_servants = (function kill_servants(servant_channel,worker_count){var c__6524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6524__auto__){
return (function (){var f__6525__auto__ = (function (){var switch__6509__auto__ = ((function (c__6524__auto__){
return (function (state_27356){var state_val_27357 = (state_27356[(1)]);if((state_val_27357 === (7)))
{var inst_27318 = (state_27356[(7)]);var inst_27316 = (state_27356[(8)]);var inst_27317 = (state_27356[(9)]);var inst_27319 = (state_27356[(10)]);var inst_27326 = (state_27356[(2)]);var inst_27327 = inst_27326.terminate();var inst_27328 = (inst_27319 + (1));var tmp27358 = inst_27318;var tmp27359 = inst_27316;var tmp27360 = inst_27317;var inst_27316__$1 = tmp27359;var inst_27317__$1 = tmp27360;var inst_27318__$1 = tmp27358;var inst_27319__$1 = inst_27328;var state_27356__$1 = (function (){var statearr_27361 = state_27356;(statearr_27361[(11)] = inst_27327);
(statearr_27361[(7)] = inst_27318__$1);
(statearr_27361[(8)] = inst_27316__$1);
(statearr_27361[(9)] = inst_27317__$1);
(statearr_27361[(10)] = inst_27319__$1);
return statearr_27361;
})();var statearr_27362_27389 = state_27356__$1;(statearr_27362_27389[(2)] = null);
(statearr_27362_27389[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27357 === (1)))
{var inst_27314 = cljs.core.range.cljs$core$IFn$_invoke$arity$1(worker_count);var inst_27315 = cljs.core.seq(inst_27314);var inst_27316 = inst_27315;var inst_27317 = null;var inst_27318 = (0);var inst_27319 = (0);var state_27356__$1 = (function (){var statearr_27363 = state_27356;(statearr_27363[(7)] = inst_27318);
(statearr_27363[(8)] = inst_27316);
(statearr_27363[(9)] = inst_27317);
(statearr_27363[(10)] = inst_27319);
return statearr_27363;
})();var statearr_27364_27390 = state_27356__$1;(statearr_27364_27390[(2)] = null);
(statearr_27364_27390[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27357 === (4)))
{var inst_27317 = (state_27356[(9)]);var inst_27319 = (state_27356[(10)]);var inst_27324 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27317,inst_27319);var state_27356__$1 = (function (){var statearr_27365 = state_27356;(statearr_27365[(12)] = inst_27324);
return statearr_27365;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27356__$1,(7),servant_channel);
} else
{if((state_val_27357 === (13)))
{var inst_27347 = (state_27356[(2)]);var state_27356__$1 = state_27356;var statearr_27366_27391 = state_27356__$1;(statearr_27366_27391[(2)] = inst_27347);
(statearr_27366_27391[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27357 === (6)))
{var inst_27352 = (state_27356[(2)]);var state_27356__$1 = state_27356;var statearr_27367_27392 = state_27356__$1;(statearr_27367_27392[(2)] = inst_27352);
(statearr_27367_27392[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27357 === (3)))
{var inst_27354 = (state_27356[(2)]);var state_27356__$1 = state_27356;return cljs.core.async.impl.ioc_helpers.return_chan(state_27356__$1,inst_27354);
} else
{if((state_val_27357 === (12)))
{var inst_27331 = (state_27356[(13)]);var inst_27340 = cljs.core.first(inst_27331);var state_27356__$1 = (function (){var statearr_27368 = state_27356;(statearr_27368[(14)] = inst_27340);
return statearr_27368;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27356__$1,(14),servant_channel);
} else
{if((state_val_27357 === (2)))
{var inst_27318 = (state_27356[(7)]);var inst_27319 = (state_27356[(10)]);var inst_27321 = (inst_27319 < inst_27318);var inst_27322 = inst_27321;var state_27356__$1 = state_27356;if(cljs.core.truth_(inst_27322))
{var statearr_27369_27393 = state_27356__$1;(statearr_27369_27393[(1)] = (4));
} else
{var statearr_27370_27394 = state_27356__$1;(statearr_27370_27394[(1)] = (5));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27357 === (11)))
{var inst_27331 = (state_27356[(13)]);var inst_27335 = cljs.core.chunk_first(inst_27331);var inst_27336 = cljs.core.chunk_rest(inst_27331);var inst_27337 = cljs.core.count(inst_27335);var inst_27316 = inst_27336;var inst_27317 = inst_27335;var inst_27318 = inst_27337;var inst_27319 = (0);var state_27356__$1 = (function (){var statearr_27371 = state_27356;(statearr_27371[(7)] = inst_27318);
(statearr_27371[(8)] = inst_27316);
(statearr_27371[(9)] = inst_27317);
(statearr_27371[(10)] = inst_27319);
return statearr_27371;
})();var statearr_27372_27395 = state_27356__$1;(statearr_27372_27395[(2)] = null);
(statearr_27372_27395[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27357 === (9)))
{var state_27356__$1 = state_27356;var statearr_27373_27396 = state_27356__$1;(statearr_27373_27396[(2)] = null);
(statearr_27373_27396[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27357 === (5)))
{var inst_27331 = (state_27356[(13)]);var inst_27316 = (state_27356[(8)]);var inst_27331__$1 = cljs.core.seq(inst_27316);var state_27356__$1 = (function (){var statearr_27374 = state_27356;(statearr_27374[(13)] = inst_27331__$1);
return statearr_27374;
})();if(inst_27331__$1)
{var statearr_27375_27397 = state_27356__$1;(statearr_27375_27397[(1)] = (8));
} else
{var statearr_27376_27398 = state_27356__$1;(statearr_27376_27398[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_27357 === (14)))
{var inst_27331 = (state_27356[(13)]);var inst_27342 = (state_27356[(2)]);var inst_27343 = inst_27342.terminate();var inst_27344 = cljs.core.next(inst_27331);var inst_27316 = inst_27344;var inst_27317 = null;var inst_27318 = (0);var inst_27319 = (0);var state_27356__$1 = (function (){var statearr_27377 = state_27356;(statearr_27377[(7)] = inst_27318);
(statearr_27377[(8)] = inst_27316);
(statearr_27377[(9)] = inst_27317);
(statearr_27377[(15)] = inst_27343);
(statearr_27377[(10)] = inst_27319);
return statearr_27377;
})();var statearr_27378_27399 = state_27356__$1;(statearr_27378_27399[(2)] = null);
(statearr_27378_27399[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27357 === (10)))
{var inst_27350 = (state_27356[(2)]);var state_27356__$1 = state_27356;var statearr_27379_27400 = state_27356__$1;(statearr_27379_27400[(2)] = inst_27350);
(statearr_27379_27400[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_27357 === (8)))
{var inst_27331 = (state_27356[(13)]);var inst_27333 = cljs.core.chunked_seq_QMARK_(inst_27331);var state_27356__$1 = state_27356;if(inst_27333)
{var statearr_27380_27401 = state_27356__$1;(statearr_27380_27401[(1)] = (11));
} else
{var statearr_27381_27402 = state_27356__$1;(statearr_27381_27402[(1)] = (12));
}
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
}
}
}
}
}
}
});})(c__6524__auto__))
;return ((function (switch__6509__auto__,c__6524__auto__){
return (function() {
var state_machine__6510__auto__ = null;
var state_machine__6510__auto____0 = (function (){var statearr_27385 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27385[(0)] = state_machine__6510__auto__);
(statearr_27385[(1)] = (1));
return statearr_27385;
});
var state_machine__6510__auto____1 = (function (state_27356){while(true){
var ret_value__6511__auto__ = (function (){try{while(true){
var result__6512__auto__ = switch__6509__auto__(state_27356);if(cljs.core.keyword_identical_QMARK_(result__6512__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6512__auto__;
}
break;
}
}catch (e27386){if((e27386 instanceof Object))
{var ex__6513__auto__ = e27386;var statearr_27387_27403 = state_27356;(statearr_27387_27403[(5)] = ex__6513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27356);
return cljs.core.constant$keyword$16;
} else
{throw e27386;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6511__auto__,cljs.core.constant$keyword$16))
{{
var G__27404 = state_27356;
state_27356 = G__27404;
continue;
}
} else
{return ret_value__6511__auto__;
}
break;
}
});
state_machine__6510__auto__ = function(state_27356){
switch(arguments.length){
case 0:
return state_machine__6510__auto____0.call(this);
case 1:
return state_machine__6510__auto____1.call(this,state_27356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6510__auto____0;
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6510__auto____1;
return state_machine__6510__auto__;
})()
;})(switch__6509__auto__,c__6524__auto__))
})();var state__6526__auto__ = (function (){var statearr_27388 = (function (){return (f__6525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6525__auto__.cljs$core$IFn$_invoke$arity$0() : f__6525__auto__.call(null));
})();(statearr_27388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto__);
return statearr_27388;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6526__auto__);
});})(c__6524__auto__))
);
return c__6524__auto__;
});
servant.core.f__GT_key = (function f__GT_key(f){return cljs.core.ffirst(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__27405_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,cljs.core.second(p1__27405_SHARP_));
}),(function (){var G__27407 = servant.worker.worker_fn_map;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27407) : cljs.core.deref.call(null,G__27407));
})()));
});
servant.core.standard_message = (function standard_message(worker,fn_key,args){return worker.postMessage((function (){var obj27411 = {"command":"channel","fn":fn_key,"args":cljs.core.clj__GT_js(args)};return obj27411;
})());
});
/**
* Post message by transferring context of the arraybuffers.
* The channel should be fed data like [[normal args] [arraybuffer1 arraybuffer2]].
* Tells the worker to expect to return an arraybuffer
*/
servant.core.array_buffer_message = (function array_buffer_message(worker,fn_key,args){var vec__27415 = args;var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27415,(0),null);var arraybuffers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27415,(1),null);return worker.postMessage((function (){var obj27417 = {"command":"channel-arraybuffer","fn":fn_key,"args":cljs.core.clj__GT_js(args__$1)};return obj27417;
})(),cljs.core.clj__GT_js(arraybuffers));
});
/**
* Post message by transferring context of the arraybuffers.
* The channel should be fed data like [[arg1 arg2] [arraybuffer1 arraybuffer2]].
* Tells the worker to return normal data
*/
servant.core.array_buffer_message_standard_reply = (function array_buffer_message_standard_reply(worker,fn_key,args){var vec__27421 = args;var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27421,(0),null);var arraybuffers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27421,(1),null);return worker.postMessage((function (){var obj27423 = {"command":"channel","fn":fn_key,"args":cljs.core.clj__GT_js(args__$1)};return obj27423;
})(),cljs.core.clj__GT_js(arraybuffers));
});
/**
* @param {...*} var_args
*/
servant.core.servant_thread_with_key = (function() { 
var servant_thread_with_key__delegate = function (servant_channel,post_message_fn,fn_key,args){var out_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var c__6524__auto___27497 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6524__auto___27497,out_channel){
return (function (){var f__6525__auto__ = (function (){var switch__6509__auto__ = ((function (c__6524__auto___27497,out_channel){
return (function (state_27468){var state_val_27469 = (state_27468[(1)]);if((state_val_27469 === (2)))
{var inst_27462 = (state_27468[(2)]);var inst_27463 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([fn_key], 0));var inst_27464 = (function (){var G__27470 = inst_27462;var G__27471 = inst_27463;var G__27472 = args;return (post_message_fn.cljs$core$IFn$_invoke$arity$3 ? post_message_fn.cljs$core$IFn$_invoke$arity$3(G__27470,G__27471,G__27472) : post_message_fn.call(null,G__27470,G__27471,G__27472));
})();var inst_27465 = (function (){var worker = inst_27462;return ((function (worker,inst_27462,inst_27463,inst_27464,state_val_27469,c__6524__auto___27497,out_channel){
return (function (p1__27424_SHARP_){var c__6524__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__6524__auto____$1,worker,inst_27462,inst_27463,inst_27464,state_val_27469,c__6524__auto___27497,out_channel){
return (function (){var f__6525__auto__ = (function (){var switch__6509__auto__ = ((function (c__6524__auto____$1,worker,inst_27462,inst_27463,inst_27464,state_val_27469,c__6524__auto___27497,out_channel){
return (function (state_27479){var state_val_27480 = (state_27479[(1)]);if((state_val_27480 === (3)))
{var inst_27477 = (state_27479[(2)]);var state_27479__$1 = state_27479;return cljs.core.async.impl.ioc_helpers.return_chan(state_27479__$1,inst_27477);
} else
{if((state_val_27480 === (2)))
{var inst_27475 = (state_27479[(2)]);var state_27479__$1 = (function (){var statearr_27481 = state_27479;(statearr_27481[(7)] = inst_27475);
return statearr_27481;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27479__$1,(3),servant_channel,worker);
} else
{if((state_val_27480 === (1)))
{var inst_27473 = p1__27424_SHARP_.data;var state_27479__$1 = state_27479;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27479__$1,(2),out_channel,inst_27473);
} else
{return null;
}
}
}
});})(c__6524__auto____$1,worker,inst_27462,inst_27463,inst_27464,state_val_27469,c__6524__auto___27497,out_channel))
;return ((function (switch__6509__auto__,c__6524__auto____$1,worker,inst_27462,inst_27463,inst_27464,state_val_27469,c__6524__auto___27497,out_channel){
return (function() {
var state_machine__6510__auto__ = null;
var state_machine__6510__auto____0 = (function (){var statearr_27485 = [null,null,null,null,null,null,null,null];(statearr_27485[(0)] = state_machine__6510__auto__);
(statearr_27485[(1)] = (1));
return statearr_27485;
});
var state_machine__6510__auto____1 = (function (state_27479){while(true){
var ret_value__6511__auto__ = (function (){try{while(true){
var result__6512__auto__ = switch__6509__auto__(state_27479);if(cljs.core.keyword_identical_QMARK_(result__6512__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6512__auto__;
}
break;
}
}catch (e27486){if((e27486 instanceof Object))
{var ex__6513__auto__ = e27486;var statearr_27487_27498 = state_27479;(statearr_27487_27498[(5)] = ex__6513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27479);
return cljs.core.constant$keyword$16;
} else
{throw e27486;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6511__auto__,cljs.core.constant$keyword$16))
{{
var G__27499 = state_27479;
state_27479 = G__27499;
continue;
}
} else
{return ret_value__6511__auto__;
}
break;
}
});
state_machine__6510__auto__ = function(state_27479){
switch(arguments.length){
case 0:
return state_machine__6510__auto____0.call(this);
case 1:
return state_machine__6510__auto____1.call(this,state_27479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6510__auto____0;
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6510__auto____1;
return state_machine__6510__auto__;
})()
;})(switch__6509__auto__,c__6524__auto____$1,worker,inst_27462,inst_27463,inst_27464,state_val_27469,c__6524__auto___27497,out_channel))
})();var state__6526__auto__ = (function (){var statearr_27488 = (function (){return (f__6525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6525__auto__.cljs$core$IFn$_invoke$arity$0() : f__6525__auto__.call(null));
})();(statearr_27488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto____$1);
return statearr_27488;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6526__auto__);
});})(c__6524__auto____$1,worker,inst_27462,inst_27463,inst_27464,state_val_27469,c__6524__auto___27497,out_channel))
);
return c__6524__auto____$1;
});
;})(worker,inst_27462,inst_27463,inst_27464,state_val_27469,c__6524__auto___27497,out_channel))
})();var inst_27466 = inst_27462.addEventListener("message",inst_27465);var state_27468__$1 = (function (){var statearr_27489 = state_27468;(statearr_27489[(7)] = inst_27464);
return statearr_27489;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_27468__$1,inst_27466);
} else
{if((state_val_27469 === (1)))
{var state_27468__$1 = state_27468;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27468__$1,(2),servant_channel);
} else
{return null;
}
}
});})(c__6524__auto___27497,out_channel))
;return ((function (switch__6509__auto__,c__6524__auto___27497,out_channel){
return (function() {
var state_machine__6510__auto__ = null;
var state_machine__6510__auto____0 = (function (){var statearr_27493 = [null,null,null,null,null,null,null,null];(statearr_27493[(0)] = state_machine__6510__auto__);
(statearr_27493[(1)] = (1));
return statearr_27493;
});
var state_machine__6510__auto____1 = (function (state_27468){while(true){
var ret_value__6511__auto__ = (function (){try{while(true){
var result__6512__auto__ = switch__6509__auto__(state_27468);if(cljs.core.keyword_identical_QMARK_(result__6512__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__6512__auto__;
}
break;
}
}catch (e27494){if((e27494 instanceof Object))
{var ex__6513__auto__ = e27494;var statearr_27495_27500 = state_27468;(statearr_27495_27500[(5)] = ex__6513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_27468);
return cljs.core.constant$keyword$16;
} else
{throw e27494;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6511__auto__,cljs.core.constant$keyword$16))
{{
var G__27501 = state_27468;
state_27468 = G__27501;
continue;
}
} else
{return ret_value__6511__auto__;
}
break;
}
});
state_machine__6510__auto__ = function(state_27468){
switch(arguments.length){
case 0:
return state_machine__6510__auto____0.call(this);
case 1:
return state_machine__6510__auto____1.call(this,state_27468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6510__auto____0;
state_machine__6510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6510__auto____1;
return state_machine__6510__auto__;
})()
;})(switch__6509__auto__,c__6524__auto___27497,out_channel))
})();var state__6526__auto__ = (function (){var statearr_27496 = (function (){return (f__6525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6525__auto__.cljs$core$IFn$_invoke$arity$0() : f__6525__auto__.call(null));
})();(statearr_27496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6524__auto___27497);
return statearr_27496;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6526__auto__);
});})(c__6524__auto___27497,out_channel))
);
return out_channel;
};
var servant_thread_with_key = function (servant_channel,post_message_fn,fn_key,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return servant_thread_with_key__delegate.call(this,servant_channel,post_message_fn,fn_key,args);};
servant_thread_with_key.cljs$lang$maxFixedArity = 3;
servant_thread_with_key.cljs$lang$applyTo = (function (arglist__27502){
var servant_channel = cljs.core.first(arglist__27502);
arglist__27502 = cljs.core.next(arglist__27502);
var post_message_fn = cljs.core.first(arglist__27502);
arglist__27502 = cljs.core.next(arglist__27502);
var fn_key = cljs.core.first(arglist__27502);
var args = cljs.core.rest(arglist__27502);
return servant_thread_with_key__delegate(servant_channel,post_message_fn,fn_key,args);
});
servant_thread_with_key.cljs$core$IFn$_invoke$arity$variadic = servant_thread_with_key__delegate;
return servant_thread_with_key;
})()
;
/**
* @param {...*} var_args
*/
servant.core.servant_thread = (function() { 
var servant_thread__delegate = function (servant_channel,post_message_fn,f,args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(servant.core.servant_thread_with_key,servant_channel,post_message_fn,servant.core.f__GT_key(f),args);
};
var servant_thread = function (servant_channel,post_message_fn,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return servant_thread__delegate.call(this,servant_channel,post_message_fn,f,args);};
servant_thread.cljs$lang$maxFixedArity = 3;
servant_thread.cljs$lang$applyTo = (function (arglist__27503){
var servant_channel = cljs.core.first(arglist__27503);
arglist__27503 = cljs.core.next(arglist__27503);
var post_message_fn = cljs.core.first(arglist__27503);
arglist__27503 = cljs.core.next(arglist__27503);
var f = cljs.core.first(arglist__27503);
var args = cljs.core.rest(arglist__27503);
return servant_thread__delegate(servant_channel,post_message_fn,f,args);
});
servant_thread.cljs$core$IFn$_invoke$arity$variadic = servant_thread__delegate;
return servant_thread;
})()
;
