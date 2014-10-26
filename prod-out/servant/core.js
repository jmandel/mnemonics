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
servant.core.spawn_servants = (function spawn_servants(worker_count,worker_script){var servant_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(worker_count);var c__12256__auto___26379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12256__auto___26379,servant_channel){
return (function (){var f__12257__auto__ = (function (){var switch__12241__auto__ = ((function (c__12256__auto___26379,servant_channel){
return (function (state_26346){var state_val_26347 = (state_26346[(1)]);if((state_val_26347 === (7)))
{var inst_26306 = (state_26346[(7)]);var inst_26308 = (state_26346[(8)]);var inst_26307 = (state_26346[(9)]);var inst_26309 = (state_26346[(10)]);var inst_26317 = (state_26346[(2)]);var inst_26318 = (inst_26309 + (1));var tmp26348 = inst_26306;var tmp26349 = inst_26308;var tmp26350 = inst_26307;var inst_26306__$1 = tmp26348;var inst_26307__$1 = tmp26350;var inst_26308__$1 = tmp26349;var inst_26309__$1 = inst_26318;var state_26346__$1 = (function (){var statearr_26351 = state_26346;(statearr_26351[(7)] = inst_26306__$1);
(statearr_26351[(8)] = inst_26308__$1);
(statearr_26351[(9)] = inst_26307__$1);
(statearr_26351[(10)] = inst_26309__$1);
(statearr_26351[(11)] = inst_26317);
return statearr_26351;
})();var statearr_26352_26380 = state_26346__$1;(statearr_26352_26380[(2)] = null);
(statearr_26352_26380[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26347 === (1)))
{var inst_26304 = cljs.core.range.cljs$core$IFn$_invoke$arity$1(worker_count);var inst_26305 = cljs.core.seq(inst_26304);var inst_26306 = inst_26305;var inst_26307 = null;var inst_26308 = (0);var inst_26309 = (0);var state_26346__$1 = (function (){var statearr_26353 = state_26346;(statearr_26353[(7)] = inst_26306);
(statearr_26353[(8)] = inst_26308);
(statearr_26353[(9)] = inst_26307);
(statearr_26353[(10)] = inst_26309);
return statearr_26353;
})();var statearr_26354_26381 = state_26346__$1;(statearr_26354_26381[(2)] = null);
(statearr_26354_26381[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26347 === (4)))
{var inst_26307 = (state_26346[(9)]);var inst_26309 = (state_26346[(10)]);var inst_26314 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26307,inst_26309);var inst_26315 = (new Worker(worker_script));var state_26346__$1 = (function (){var statearr_26355 = state_26346;(statearr_26355[(12)] = inst_26314);
return statearr_26355;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26346__$1,(7),servant_channel,inst_26315);
} else
{if((state_val_26347 === (13)))
{var inst_26337 = (state_26346[(2)]);var state_26346__$1 = state_26346;var statearr_26356_26382 = state_26346__$1;(statearr_26356_26382[(2)] = inst_26337);
(statearr_26356_26382[(1)] = (10));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26347 === (6)))
{var inst_26342 = (state_26346[(2)]);var state_26346__$1 = state_26346;var statearr_26357_26383 = state_26346__$1;(statearr_26357_26383[(2)] = inst_26342);
(statearr_26357_26383[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26347 === (3)))
{var inst_26344 = (state_26346[(2)]);var state_26346__$1 = state_26346;return cljs.core.async.impl.ioc_helpers.return_chan(state_26346__$1,inst_26344);
} else
{if((state_val_26347 === (12)))
{var inst_26321 = (state_26346[(13)]);var inst_26330 = cljs.core.first(inst_26321);var inst_26331 = (new Worker(worker_script));var state_26346__$1 = (function (){var statearr_26358 = state_26346;(statearr_26358[(14)] = inst_26330);
return statearr_26358;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26346__$1,(14),servant_channel,inst_26331);
} else
{if((state_val_26347 === (2)))
{var inst_26308 = (state_26346[(8)]);var inst_26309 = (state_26346[(10)]);var inst_26311 = (inst_26309 < inst_26308);var inst_26312 = inst_26311;var state_26346__$1 = state_26346;if(cljs.core.truth_(inst_26312))
{var statearr_26359_26384 = state_26346__$1;(statearr_26359_26384[(1)] = (4));
} else
{var statearr_26360_26385 = state_26346__$1;(statearr_26360_26385[(1)] = (5));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_26347 === (11)))
{var inst_26321 = (state_26346[(13)]);var inst_26325 = cljs.core.chunk_first(inst_26321);var inst_26326 = cljs.core.chunk_rest(inst_26321);var inst_26327 = cljs.core.count(inst_26325);var inst_26306 = inst_26326;var inst_26307 = inst_26325;var inst_26308 = inst_26327;var inst_26309 = (0);var state_26346__$1 = (function (){var statearr_26361 = state_26346;(statearr_26361[(7)] = inst_26306);
(statearr_26361[(8)] = inst_26308);
(statearr_26361[(9)] = inst_26307);
(statearr_26361[(10)] = inst_26309);
return statearr_26361;
})();var statearr_26362_26386 = state_26346__$1;(statearr_26362_26386[(2)] = null);
(statearr_26362_26386[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26347 === (9)))
{var state_26346__$1 = state_26346;var statearr_26363_26387 = state_26346__$1;(statearr_26363_26387[(2)] = null);
(statearr_26363_26387[(1)] = (10));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26347 === (5)))
{var inst_26306 = (state_26346[(7)]);var inst_26321 = (state_26346[(13)]);var inst_26321__$1 = cljs.core.seq(inst_26306);var state_26346__$1 = (function (){var statearr_26364 = state_26346;(statearr_26364[(13)] = inst_26321__$1);
return statearr_26364;
})();if(inst_26321__$1)
{var statearr_26365_26388 = state_26346__$1;(statearr_26365_26388[(1)] = (8));
} else
{var statearr_26366_26389 = state_26346__$1;(statearr_26366_26389[(1)] = (9));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_26347 === (14)))
{var inst_26321 = (state_26346[(13)]);var inst_26333 = (state_26346[(2)]);var inst_26334 = cljs.core.next(inst_26321);var inst_26306 = inst_26334;var inst_26307 = null;var inst_26308 = (0);var inst_26309 = (0);var state_26346__$1 = (function (){var statearr_26367 = state_26346;(statearr_26367[(7)] = inst_26306);
(statearr_26367[(15)] = inst_26333);
(statearr_26367[(8)] = inst_26308);
(statearr_26367[(9)] = inst_26307);
(statearr_26367[(10)] = inst_26309);
return statearr_26367;
})();var statearr_26368_26390 = state_26346__$1;(statearr_26368_26390[(2)] = null);
(statearr_26368_26390[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26347 === (10)))
{var inst_26340 = (state_26346[(2)]);var state_26346__$1 = state_26346;var statearr_26369_26391 = state_26346__$1;(statearr_26369_26391[(2)] = inst_26340);
(statearr_26369_26391[(1)] = (6));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26347 === (8)))
{var inst_26321 = (state_26346[(13)]);var inst_26323 = cljs.core.chunked_seq_QMARK_(inst_26321);var state_26346__$1 = state_26346;if(inst_26323)
{var statearr_26370_26392 = state_26346__$1;(statearr_26370_26392[(1)] = (11));
} else
{var statearr_26371_26393 = state_26346__$1;(statearr_26371_26393[(1)] = (12));
}
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
}
}
}
}
}
}
});})(c__12256__auto___26379,servant_channel))
;return ((function (switch__12241__auto__,c__12256__auto___26379,servant_channel){
return (function() {
var state_machine__12242__auto__ = null;
var state_machine__12242__auto____0 = (function (){var statearr_26375 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26375[(0)] = state_machine__12242__auto__);
(statearr_26375[(1)] = (1));
return statearr_26375;
});
var state_machine__12242__auto____1 = (function (state_26346){while(true){
var ret_value__12243__auto__ = (function (){try{while(true){
var result__12244__auto__ = switch__12241__auto__(state_26346);if(cljs.core.keyword_identical_QMARK_(result__12244__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12244__auto__;
}
break;
}
}catch (e26376){if((e26376 instanceof Object))
{var ex__12245__auto__ = e26376;var statearr_26377_26394 = state_26346;(statearr_26377_26394[(5)] = ex__12245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26346);
return cljs.core.constant$keyword$18;
} else
{throw e26376;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12243__auto__,cljs.core.constant$keyword$18))
{{
var G__26395 = state_26346;
state_26346 = G__26395;
continue;
}
} else
{return ret_value__12243__auto__;
}
break;
}
});
state_machine__12242__auto__ = function(state_26346){
switch(arguments.length){
case 0:
return state_machine__12242__auto____0.call(this);
case 1:
return state_machine__12242__auto____1.call(this,state_26346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12242__auto____0;
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12242__auto____1;
return state_machine__12242__auto__;
})()
;})(switch__12241__auto__,c__12256__auto___26379,servant_channel))
})();var state__12258__auto__ = (function (){var statearr_26378 = (function (){return (f__12257__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12257__auto__.cljs$core$IFn$_invoke$arity$0() : f__12257__auto__.call(null));
})();(statearr_26378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12256__auto___26379);
return statearr_26378;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12258__auto__);
});})(c__12256__auto___26379,servant_channel))
);
return servant_channel;
});
/**
* Kills worker-count # of workers
*/
servant.core.kill_servants = (function kill_servants(servant_channel,worker_count){var c__12256__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12256__auto__){
return (function (){var f__12257__auto__ = (function (){var switch__12241__auto__ = ((function (c__12256__auto__){
return (function (state_26521){var state_val_26522 = (state_26521[(1)]);if((state_val_26522 === (7)))
{var inst_26481 = (state_26521[(7)]);var inst_26483 = (state_26521[(8)]);var inst_26484 = (state_26521[(9)]);var inst_26482 = (state_26521[(10)]);var inst_26491 = (state_26521[(2)]);var inst_26492 = inst_26491.terminate();var inst_26493 = (inst_26484 + (1));var tmp26523 = inst_26481;var tmp26524 = inst_26483;var tmp26525 = inst_26482;var inst_26481__$1 = tmp26523;var inst_26482__$1 = tmp26525;var inst_26483__$1 = tmp26524;var inst_26484__$1 = inst_26493;var state_26521__$1 = (function (){var statearr_26526 = state_26521;(statearr_26526[(11)] = inst_26492);
(statearr_26526[(7)] = inst_26481__$1);
(statearr_26526[(8)] = inst_26483__$1);
(statearr_26526[(9)] = inst_26484__$1);
(statearr_26526[(10)] = inst_26482__$1);
return statearr_26526;
})();var statearr_26527_26554 = state_26521__$1;(statearr_26527_26554[(2)] = null);
(statearr_26527_26554[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26522 === (1)))
{var inst_26479 = cljs.core.range.cljs$core$IFn$_invoke$arity$1(worker_count);var inst_26480 = cljs.core.seq(inst_26479);var inst_26481 = inst_26480;var inst_26482 = null;var inst_26483 = (0);var inst_26484 = (0);var state_26521__$1 = (function (){var statearr_26528 = state_26521;(statearr_26528[(7)] = inst_26481);
(statearr_26528[(8)] = inst_26483);
(statearr_26528[(9)] = inst_26484);
(statearr_26528[(10)] = inst_26482);
return statearr_26528;
})();var statearr_26529_26555 = state_26521__$1;(statearr_26529_26555[(2)] = null);
(statearr_26529_26555[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26522 === (4)))
{var inst_26484 = (state_26521[(9)]);var inst_26482 = (state_26521[(10)]);var inst_26489 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26482,inst_26484);var state_26521__$1 = (function (){var statearr_26530 = state_26521;(statearr_26530[(12)] = inst_26489);
return statearr_26530;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26521__$1,(7),servant_channel);
} else
{if((state_val_26522 === (13)))
{var inst_26512 = (state_26521[(2)]);var state_26521__$1 = state_26521;var statearr_26531_26556 = state_26521__$1;(statearr_26531_26556[(2)] = inst_26512);
(statearr_26531_26556[(1)] = (10));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26522 === (6)))
{var inst_26517 = (state_26521[(2)]);var state_26521__$1 = state_26521;var statearr_26532_26557 = state_26521__$1;(statearr_26532_26557[(2)] = inst_26517);
(statearr_26532_26557[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26522 === (3)))
{var inst_26519 = (state_26521[(2)]);var state_26521__$1 = state_26521;return cljs.core.async.impl.ioc_helpers.return_chan(state_26521__$1,inst_26519);
} else
{if((state_val_26522 === (12)))
{var inst_26496 = (state_26521[(13)]);var inst_26505 = cljs.core.first(inst_26496);var state_26521__$1 = (function (){var statearr_26533 = state_26521;(statearr_26533[(14)] = inst_26505);
return statearr_26533;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26521__$1,(14),servant_channel);
} else
{if((state_val_26522 === (2)))
{var inst_26483 = (state_26521[(8)]);var inst_26484 = (state_26521[(9)]);var inst_26486 = (inst_26484 < inst_26483);var inst_26487 = inst_26486;var state_26521__$1 = state_26521;if(cljs.core.truth_(inst_26487))
{var statearr_26534_26558 = state_26521__$1;(statearr_26534_26558[(1)] = (4));
} else
{var statearr_26535_26559 = state_26521__$1;(statearr_26535_26559[(1)] = (5));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_26522 === (11)))
{var inst_26496 = (state_26521[(13)]);var inst_26500 = cljs.core.chunk_first(inst_26496);var inst_26501 = cljs.core.chunk_rest(inst_26496);var inst_26502 = cljs.core.count(inst_26500);var inst_26481 = inst_26501;var inst_26482 = inst_26500;var inst_26483 = inst_26502;var inst_26484 = (0);var state_26521__$1 = (function (){var statearr_26536 = state_26521;(statearr_26536[(7)] = inst_26481);
(statearr_26536[(8)] = inst_26483);
(statearr_26536[(9)] = inst_26484);
(statearr_26536[(10)] = inst_26482);
return statearr_26536;
})();var statearr_26537_26560 = state_26521__$1;(statearr_26537_26560[(2)] = null);
(statearr_26537_26560[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26522 === (9)))
{var state_26521__$1 = state_26521;var statearr_26538_26561 = state_26521__$1;(statearr_26538_26561[(2)] = null);
(statearr_26538_26561[(1)] = (10));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26522 === (5)))
{var inst_26496 = (state_26521[(13)]);var inst_26481 = (state_26521[(7)]);var inst_26496__$1 = cljs.core.seq(inst_26481);var state_26521__$1 = (function (){var statearr_26539 = state_26521;(statearr_26539[(13)] = inst_26496__$1);
return statearr_26539;
})();if(inst_26496__$1)
{var statearr_26540_26562 = state_26521__$1;(statearr_26540_26562[(1)] = (8));
} else
{var statearr_26541_26563 = state_26521__$1;(statearr_26541_26563[(1)] = (9));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_26522 === (14)))
{var inst_26496 = (state_26521[(13)]);var inst_26507 = (state_26521[(2)]);var inst_26508 = inst_26507.terminate();var inst_26509 = cljs.core.next(inst_26496);var inst_26481 = inst_26509;var inst_26482 = null;var inst_26483 = (0);var inst_26484 = (0);var state_26521__$1 = (function (){var statearr_26542 = state_26521;(statearr_26542[(7)] = inst_26481);
(statearr_26542[(8)] = inst_26483);
(statearr_26542[(9)] = inst_26484);
(statearr_26542[(10)] = inst_26482);
(statearr_26542[(15)] = inst_26508);
return statearr_26542;
})();var statearr_26543_26564 = state_26521__$1;(statearr_26543_26564[(2)] = null);
(statearr_26543_26564[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26522 === (10)))
{var inst_26515 = (state_26521[(2)]);var state_26521__$1 = state_26521;var statearr_26544_26565 = state_26521__$1;(statearr_26544_26565[(2)] = inst_26515);
(statearr_26544_26565[(1)] = (6));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26522 === (8)))
{var inst_26496 = (state_26521[(13)]);var inst_26498 = cljs.core.chunked_seq_QMARK_(inst_26496);var state_26521__$1 = state_26521;if(inst_26498)
{var statearr_26545_26566 = state_26521__$1;(statearr_26545_26566[(1)] = (11));
} else
{var statearr_26546_26567 = state_26521__$1;(statearr_26546_26567[(1)] = (12));
}
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
}
}
}
}
}
}
});})(c__12256__auto__))
;return ((function (switch__12241__auto__,c__12256__auto__){
return (function() {
var state_machine__12242__auto__ = null;
var state_machine__12242__auto____0 = (function (){var statearr_26550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26550[(0)] = state_machine__12242__auto__);
(statearr_26550[(1)] = (1));
return statearr_26550;
});
var state_machine__12242__auto____1 = (function (state_26521){while(true){
var ret_value__12243__auto__ = (function (){try{while(true){
var result__12244__auto__ = switch__12241__auto__(state_26521);if(cljs.core.keyword_identical_QMARK_(result__12244__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12244__auto__;
}
break;
}
}catch (e26551){if((e26551 instanceof Object))
{var ex__12245__auto__ = e26551;var statearr_26552_26568 = state_26521;(statearr_26552_26568[(5)] = ex__12245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26521);
return cljs.core.constant$keyword$18;
} else
{throw e26551;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12243__auto__,cljs.core.constant$keyword$18))
{{
var G__26569 = state_26521;
state_26521 = G__26569;
continue;
}
} else
{return ret_value__12243__auto__;
}
break;
}
});
state_machine__12242__auto__ = function(state_26521){
switch(arguments.length){
case 0:
return state_machine__12242__auto____0.call(this);
case 1:
return state_machine__12242__auto____1.call(this,state_26521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12242__auto____0;
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12242__auto____1;
return state_machine__12242__auto__;
})()
;})(switch__12241__auto__,c__12256__auto__))
})();var state__12258__auto__ = (function (){var statearr_26553 = (function (){return (f__12257__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12257__auto__.cljs$core$IFn$_invoke$arity$0() : f__12257__auto__.call(null));
})();(statearr_26553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12256__auto__);
return statearr_26553;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12258__auto__);
});})(c__12256__auto__))
);
return c__12256__auto__;
});
servant.core.f__GT_key = (function f__GT_key(f){return cljs.core.ffirst(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26570_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,cljs.core.second(p1__26570_SHARP_));
}),(function (){var G__26572 = servant.worker.worker_fn_map;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26572) : cljs.core.deref.call(null,G__26572));
})()));
});
servant.core.standard_message = (function standard_message(worker,fn_key,args){return worker.postMessage((function (){var obj26576 = {"command":"channel","fn":fn_key,"args":cljs.core.clj__GT_js(args)};return obj26576;
})());
});
/**
* Post message by transferring context of the arraybuffers.
* The channel should be fed data like [[normal args] [arraybuffer1 arraybuffer2]].
* Tells the worker to expect to return an arraybuffer
*/
servant.core.array_buffer_message = (function array_buffer_message(worker,fn_key,args){var vec__26580 = args;var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26580,(0),null);var arraybuffers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26580,(1),null);return worker.postMessage((function (){var obj26582 = {"command":"channel-arraybuffer","fn":fn_key,"args":cljs.core.clj__GT_js(args__$1)};return obj26582;
})(),cljs.core.clj__GT_js(arraybuffers));
});
/**
* Post message by transferring context of the arraybuffers.
* The channel should be fed data like [[arg1 arg2] [arraybuffer1 arraybuffer2]].
* Tells the worker to return normal data
*/
servant.core.array_buffer_message_standard_reply = (function array_buffer_message_standard_reply(worker,fn_key,args){var vec__26586 = args;var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26586,(0),null);var arraybuffers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26586,(1),null);return worker.postMessage((function (){var obj26588 = {"command":"channel","fn":fn_key,"args":cljs.core.clj__GT_js(args__$1)};return obj26588;
})(),cljs.core.clj__GT_js(arraybuffers));
});
/**
* @param {...*} var_args
*/
servant.core.servant_thread_with_key = (function() { 
var servant_thread_with_key__delegate = function (servant_channel,post_message_fn,fn_key,args){var out_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var c__12256__auto___26662 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12256__auto___26662,out_channel){
return (function (){var f__12257__auto__ = (function (){var switch__12241__auto__ = ((function (c__12256__auto___26662,out_channel){
return (function (state_26633){var state_val_26634 = (state_26633[(1)]);if((state_val_26634 === (2)))
{var inst_26627 = (state_26633[(2)]);var inst_26628 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([fn_key], 0));var inst_26629 = (function (){var G__26635 = inst_26627;var G__26636 = inst_26628;var G__26637 = args;return (post_message_fn.cljs$core$IFn$_invoke$arity$3 ? post_message_fn.cljs$core$IFn$_invoke$arity$3(G__26635,G__26636,G__26637) : post_message_fn.call(null,G__26635,G__26636,G__26637));
})();var inst_26630 = (function (){var worker = inst_26627;return ((function (worker,inst_26627,inst_26628,inst_26629,state_val_26634,c__12256__auto___26662,out_channel){
return (function (p1__26589_SHARP_){var c__12256__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12256__auto____$1,worker,inst_26627,inst_26628,inst_26629,state_val_26634,c__12256__auto___26662,out_channel){
return (function (){var f__12257__auto__ = (function (){var switch__12241__auto__ = ((function (c__12256__auto____$1,worker,inst_26627,inst_26628,inst_26629,state_val_26634,c__12256__auto___26662,out_channel){
return (function (state_26644){var state_val_26645 = (state_26644[(1)]);if((state_val_26645 === (3)))
{var inst_26642 = (state_26644[(2)]);var state_26644__$1 = state_26644;return cljs.core.async.impl.ioc_helpers.return_chan(state_26644__$1,inst_26642);
} else
{if((state_val_26645 === (2)))
{var inst_26640 = (state_26644[(2)]);var state_26644__$1 = (function (){var statearr_26646 = state_26644;(statearr_26646[(7)] = inst_26640);
return statearr_26646;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26644__$1,(3),servant_channel,worker);
} else
{if((state_val_26645 === (1)))
{var inst_26638 = p1__26589_SHARP_.data;var state_26644__$1 = state_26644;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26644__$1,(2),out_channel,inst_26638);
} else
{return null;
}
}
}
});})(c__12256__auto____$1,worker,inst_26627,inst_26628,inst_26629,state_val_26634,c__12256__auto___26662,out_channel))
;return ((function (switch__12241__auto__,c__12256__auto____$1,worker,inst_26627,inst_26628,inst_26629,state_val_26634,c__12256__auto___26662,out_channel){
return (function() {
var state_machine__12242__auto__ = null;
var state_machine__12242__auto____0 = (function (){var statearr_26650 = [null,null,null,null,null,null,null,null];(statearr_26650[(0)] = state_machine__12242__auto__);
(statearr_26650[(1)] = (1));
return statearr_26650;
});
var state_machine__12242__auto____1 = (function (state_26644){while(true){
var ret_value__12243__auto__ = (function (){try{while(true){
var result__12244__auto__ = switch__12241__auto__(state_26644);if(cljs.core.keyword_identical_QMARK_(result__12244__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12244__auto__;
}
break;
}
}catch (e26651){if((e26651 instanceof Object))
{var ex__12245__auto__ = e26651;var statearr_26652_26663 = state_26644;(statearr_26652_26663[(5)] = ex__12245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26644);
return cljs.core.constant$keyword$18;
} else
{throw e26651;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12243__auto__,cljs.core.constant$keyword$18))
{{
var G__26664 = state_26644;
state_26644 = G__26664;
continue;
}
} else
{return ret_value__12243__auto__;
}
break;
}
});
state_machine__12242__auto__ = function(state_26644){
switch(arguments.length){
case 0:
return state_machine__12242__auto____0.call(this);
case 1:
return state_machine__12242__auto____1.call(this,state_26644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12242__auto____0;
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12242__auto____1;
return state_machine__12242__auto__;
})()
;})(switch__12241__auto__,c__12256__auto____$1,worker,inst_26627,inst_26628,inst_26629,state_val_26634,c__12256__auto___26662,out_channel))
})();var state__12258__auto__ = (function (){var statearr_26653 = (function (){return (f__12257__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12257__auto__.cljs$core$IFn$_invoke$arity$0() : f__12257__auto__.call(null));
})();(statearr_26653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12256__auto____$1);
return statearr_26653;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12258__auto__);
});})(c__12256__auto____$1,worker,inst_26627,inst_26628,inst_26629,state_val_26634,c__12256__auto___26662,out_channel))
);
return c__12256__auto____$1;
});
;})(worker,inst_26627,inst_26628,inst_26629,state_val_26634,c__12256__auto___26662,out_channel))
})();var inst_26631 = inst_26627.addEventListener("message",inst_26630);var state_26633__$1 = (function (){var statearr_26654 = state_26633;(statearr_26654[(7)] = inst_26629);
return statearr_26654;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26633__$1,inst_26631);
} else
{if((state_val_26634 === (1)))
{var state_26633__$1 = state_26633;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26633__$1,(2),servant_channel);
} else
{return null;
}
}
});})(c__12256__auto___26662,out_channel))
;return ((function (switch__12241__auto__,c__12256__auto___26662,out_channel){
return (function() {
var state_machine__12242__auto__ = null;
var state_machine__12242__auto____0 = (function (){var statearr_26658 = [null,null,null,null,null,null,null,null];(statearr_26658[(0)] = state_machine__12242__auto__);
(statearr_26658[(1)] = (1));
return statearr_26658;
});
var state_machine__12242__auto____1 = (function (state_26633){while(true){
var ret_value__12243__auto__ = (function (){try{while(true){
var result__12244__auto__ = switch__12241__auto__(state_26633);if(cljs.core.keyword_identical_QMARK_(result__12244__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12244__auto__;
}
break;
}
}catch (e26659){if((e26659 instanceof Object))
{var ex__12245__auto__ = e26659;var statearr_26660_26665 = state_26633;(statearr_26660_26665[(5)] = ex__12245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26633);
return cljs.core.constant$keyword$18;
} else
{throw e26659;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12243__auto__,cljs.core.constant$keyword$18))
{{
var G__26666 = state_26633;
state_26633 = G__26666;
continue;
}
} else
{return ret_value__12243__auto__;
}
break;
}
});
state_machine__12242__auto__ = function(state_26633){
switch(arguments.length){
case 0:
return state_machine__12242__auto____0.call(this);
case 1:
return state_machine__12242__auto____1.call(this,state_26633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12242__auto____0;
state_machine__12242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12242__auto____1;
return state_machine__12242__auto__;
})()
;})(switch__12241__auto__,c__12256__auto___26662,out_channel))
})();var state__12258__auto__ = (function (){var statearr_26661 = (function (){return (f__12257__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12257__auto__.cljs$core$IFn$_invoke$arity$0() : f__12257__auto__.call(null));
})();(statearr_26661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12256__auto___26662);
return statearr_26661;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12258__auto__);
});})(c__12256__auto___26662,out_channel))
);
return out_channel;
};
var servant_thread_with_key = function (servant_channel,post_message_fn,fn_key,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return servant_thread_with_key__delegate.call(this,servant_channel,post_message_fn,fn_key,args);};
servant_thread_with_key.cljs$lang$maxFixedArity = 3;
servant_thread_with_key.cljs$lang$applyTo = (function (arglist__26667){
var servant_channel = cljs.core.first(arglist__26667);
arglist__26667 = cljs.core.next(arglist__26667);
var post_message_fn = cljs.core.first(arglist__26667);
arglist__26667 = cljs.core.next(arglist__26667);
var fn_key = cljs.core.first(arglist__26667);
var args = cljs.core.rest(arglist__26667);
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
servant_thread.cljs$lang$applyTo = (function (arglist__26668){
var servant_channel = cljs.core.first(arglist__26668);
arglist__26668 = cljs.core.next(arglist__26668);
var post_message_fn = cljs.core.first(arglist__26668);
arglist__26668 = cljs.core.next(arglist__26668);
var f = cljs.core.first(arglist__26668);
var args = cljs.core.rest(arglist__26668);
return servant_thread__delegate(servant_channel,post_message_fn,f,args);
});
servant_thread.cljs$core$IFn$_invoke$arity$variadic = servant_thread__delegate;
return servant_thread;
})()
;
