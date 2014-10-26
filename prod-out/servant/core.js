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
servant.core.spawn_servants = (function spawn_servants(worker_count,worker_script){var servant_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(worker_count);var c__12271__auto___26394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12271__auto___26394,servant_channel){
return (function (){var f__12272__auto__ = (function (){var switch__12256__auto__ = ((function (c__12271__auto___26394,servant_channel){
return (function (state_26361){var state_val_26362 = (state_26361[(1)]);if((state_val_26362 === (7)))
{var inst_26323 = (state_26361[(7)]);var inst_26322 = (state_26361[(8)]);var inst_26324 = (state_26361[(9)]);var inst_26321 = (state_26361[(10)]);var inst_26332 = (state_26361[(2)]);var inst_26333 = (inst_26324 + (1));var tmp26363 = inst_26323;var tmp26364 = inst_26322;var tmp26365 = inst_26321;var inst_26321__$1 = tmp26365;var inst_26322__$1 = tmp26364;var inst_26323__$1 = tmp26363;var inst_26324__$1 = inst_26333;var state_26361__$1 = (function (){var statearr_26366 = state_26361;(statearr_26366[(7)] = inst_26323__$1);
(statearr_26366[(8)] = inst_26322__$1);
(statearr_26366[(9)] = inst_26324__$1);
(statearr_26366[(10)] = inst_26321__$1);
(statearr_26366[(11)] = inst_26332);
return statearr_26366;
})();var statearr_26367_26395 = state_26361__$1;(statearr_26367_26395[(2)] = null);
(statearr_26367_26395[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26362 === (1)))
{var inst_26319 = cljs.core.range.cljs$core$IFn$_invoke$arity$1(worker_count);var inst_26320 = cljs.core.seq(inst_26319);var inst_26321 = inst_26320;var inst_26322 = null;var inst_26323 = (0);var inst_26324 = (0);var state_26361__$1 = (function (){var statearr_26368 = state_26361;(statearr_26368[(7)] = inst_26323);
(statearr_26368[(8)] = inst_26322);
(statearr_26368[(9)] = inst_26324);
(statearr_26368[(10)] = inst_26321);
return statearr_26368;
})();var statearr_26369_26396 = state_26361__$1;(statearr_26369_26396[(2)] = null);
(statearr_26369_26396[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26362 === (4)))
{var inst_26322 = (state_26361[(8)]);var inst_26324 = (state_26361[(9)]);var inst_26329 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26322,inst_26324);var inst_26330 = (new Worker(worker_script));var state_26361__$1 = (function (){var statearr_26370 = state_26361;(statearr_26370[(12)] = inst_26329);
return statearr_26370;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26361__$1,(7),servant_channel,inst_26330);
} else
{if((state_val_26362 === (13)))
{var inst_26352 = (state_26361[(2)]);var state_26361__$1 = state_26361;var statearr_26371_26397 = state_26361__$1;(statearr_26371_26397[(2)] = inst_26352);
(statearr_26371_26397[(1)] = (10));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26362 === (6)))
{var inst_26357 = (state_26361[(2)]);var state_26361__$1 = state_26361;var statearr_26372_26398 = state_26361__$1;(statearr_26372_26398[(2)] = inst_26357);
(statearr_26372_26398[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26362 === (3)))
{var inst_26359 = (state_26361[(2)]);var state_26361__$1 = state_26361;return cljs.core.async.impl.ioc_helpers.return_chan(state_26361__$1,inst_26359);
} else
{if((state_val_26362 === (12)))
{var inst_26336 = (state_26361[(13)]);var inst_26345 = cljs.core.first(inst_26336);var inst_26346 = (new Worker(worker_script));var state_26361__$1 = (function (){var statearr_26373 = state_26361;(statearr_26373[(14)] = inst_26345);
return statearr_26373;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26361__$1,(14),servant_channel,inst_26346);
} else
{if((state_val_26362 === (2)))
{var inst_26323 = (state_26361[(7)]);var inst_26324 = (state_26361[(9)]);var inst_26326 = (inst_26324 < inst_26323);var inst_26327 = inst_26326;var state_26361__$1 = state_26361;if(cljs.core.truth_(inst_26327))
{var statearr_26374_26399 = state_26361__$1;(statearr_26374_26399[(1)] = (4));
} else
{var statearr_26375_26400 = state_26361__$1;(statearr_26375_26400[(1)] = (5));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_26362 === (11)))
{var inst_26336 = (state_26361[(13)]);var inst_26340 = cljs.core.chunk_first(inst_26336);var inst_26341 = cljs.core.chunk_rest(inst_26336);var inst_26342 = cljs.core.count(inst_26340);var inst_26321 = inst_26341;var inst_26322 = inst_26340;var inst_26323 = inst_26342;var inst_26324 = (0);var state_26361__$1 = (function (){var statearr_26376 = state_26361;(statearr_26376[(7)] = inst_26323);
(statearr_26376[(8)] = inst_26322);
(statearr_26376[(9)] = inst_26324);
(statearr_26376[(10)] = inst_26321);
return statearr_26376;
})();var statearr_26377_26401 = state_26361__$1;(statearr_26377_26401[(2)] = null);
(statearr_26377_26401[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26362 === (9)))
{var state_26361__$1 = state_26361;var statearr_26378_26402 = state_26361__$1;(statearr_26378_26402[(2)] = null);
(statearr_26378_26402[(1)] = (10));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26362 === (5)))
{var inst_26336 = (state_26361[(13)]);var inst_26321 = (state_26361[(10)]);var inst_26336__$1 = cljs.core.seq(inst_26321);var state_26361__$1 = (function (){var statearr_26379 = state_26361;(statearr_26379[(13)] = inst_26336__$1);
return statearr_26379;
})();if(inst_26336__$1)
{var statearr_26380_26403 = state_26361__$1;(statearr_26380_26403[(1)] = (8));
} else
{var statearr_26381_26404 = state_26361__$1;(statearr_26381_26404[(1)] = (9));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_26362 === (14)))
{var inst_26336 = (state_26361[(13)]);var inst_26348 = (state_26361[(2)]);var inst_26349 = cljs.core.next(inst_26336);var inst_26321 = inst_26349;var inst_26322 = null;var inst_26323 = (0);var inst_26324 = (0);var state_26361__$1 = (function (){var statearr_26382 = state_26361;(statearr_26382[(7)] = inst_26323);
(statearr_26382[(15)] = inst_26348);
(statearr_26382[(8)] = inst_26322);
(statearr_26382[(9)] = inst_26324);
(statearr_26382[(10)] = inst_26321);
return statearr_26382;
})();var statearr_26383_26405 = state_26361__$1;(statearr_26383_26405[(2)] = null);
(statearr_26383_26405[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26362 === (10)))
{var inst_26355 = (state_26361[(2)]);var state_26361__$1 = state_26361;var statearr_26384_26406 = state_26361__$1;(statearr_26384_26406[(2)] = inst_26355);
(statearr_26384_26406[(1)] = (6));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26362 === (8)))
{var inst_26336 = (state_26361[(13)]);var inst_26338 = cljs.core.chunked_seq_QMARK_(inst_26336);var state_26361__$1 = state_26361;if(inst_26338)
{var statearr_26385_26407 = state_26361__$1;(statearr_26385_26407[(1)] = (11));
} else
{var statearr_26386_26408 = state_26361__$1;(statearr_26386_26408[(1)] = (12));
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
});})(c__12271__auto___26394,servant_channel))
;return ((function (switch__12256__auto__,c__12271__auto___26394,servant_channel){
return (function() {
var state_machine__12257__auto__ = null;
var state_machine__12257__auto____0 = (function (){var statearr_26390 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26390[(0)] = state_machine__12257__auto__);
(statearr_26390[(1)] = (1));
return statearr_26390;
});
var state_machine__12257__auto____1 = (function (state_26361){while(true){
var ret_value__12258__auto__ = (function (){try{while(true){
var result__12259__auto__ = switch__12256__auto__(state_26361);if(cljs.core.keyword_identical_QMARK_(result__12259__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12259__auto__;
}
break;
}
}catch (e26391){if((e26391 instanceof Object))
{var ex__12260__auto__ = e26391;var statearr_26392_26409 = state_26361;(statearr_26392_26409[(5)] = ex__12260__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26361);
return cljs.core.constant$keyword$18;
} else
{throw e26391;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12258__auto__,cljs.core.constant$keyword$18))
{{
var G__26410 = state_26361;
state_26361 = G__26410;
continue;
}
} else
{return ret_value__12258__auto__;
}
break;
}
});
state_machine__12257__auto__ = function(state_26361){
switch(arguments.length){
case 0:
return state_machine__12257__auto____0.call(this);
case 1:
return state_machine__12257__auto____1.call(this,state_26361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12257__auto____0;
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12257__auto____1;
return state_machine__12257__auto__;
})()
;})(switch__12256__auto__,c__12271__auto___26394,servant_channel))
})();var state__12273__auto__ = (function (){var statearr_26393 = (function (){return (f__12272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12272__auto__.cljs$core$IFn$_invoke$arity$0() : f__12272__auto__.call(null));
})();(statearr_26393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12271__auto___26394);
return statearr_26393;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12273__auto__);
});})(c__12271__auto___26394,servant_channel))
);
return servant_channel;
});
/**
* Kills worker-count # of workers
*/
servant.core.kill_servants = (function kill_servants(servant_channel,worker_count){var c__12271__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12271__auto__){
return (function (){var f__12272__auto__ = (function (){var switch__12256__auto__ = ((function (c__12271__auto__){
return (function (state_26536){var state_val_26537 = (state_26536[(1)]);if((state_val_26537 === (7)))
{var inst_26496 = (state_26536[(7)]);var inst_26499 = (state_26536[(8)]);var inst_26497 = (state_26536[(9)]);var inst_26498 = (state_26536[(10)]);var inst_26506 = (state_26536[(2)]);var inst_26507 = inst_26506.terminate();var inst_26508 = (inst_26499 + (1));var tmp26538 = inst_26496;var tmp26539 = inst_26497;var tmp26540 = inst_26498;var inst_26496__$1 = tmp26538;var inst_26497__$1 = tmp26539;var inst_26498__$1 = tmp26540;var inst_26499__$1 = inst_26508;var state_26536__$1 = (function (){var statearr_26541 = state_26536;(statearr_26541[(7)] = inst_26496__$1);
(statearr_26541[(8)] = inst_26499__$1);
(statearr_26541[(11)] = inst_26507);
(statearr_26541[(9)] = inst_26497__$1);
(statearr_26541[(10)] = inst_26498__$1);
return statearr_26541;
})();var statearr_26542_26569 = state_26536__$1;(statearr_26542_26569[(2)] = null);
(statearr_26542_26569[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26537 === (1)))
{var inst_26494 = cljs.core.range.cljs$core$IFn$_invoke$arity$1(worker_count);var inst_26495 = cljs.core.seq(inst_26494);var inst_26496 = inst_26495;var inst_26497 = null;var inst_26498 = (0);var inst_26499 = (0);var state_26536__$1 = (function (){var statearr_26543 = state_26536;(statearr_26543[(7)] = inst_26496);
(statearr_26543[(8)] = inst_26499);
(statearr_26543[(9)] = inst_26497);
(statearr_26543[(10)] = inst_26498);
return statearr_26543;
})();var statearr_26544_26570 = state_26536__$1;(statearr_26544_26570[(2)] = null);
(statearr_26544_26570[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26537 === (4)))
{var inst_26499 = (state_26536[(8)]);var inst_26497 = (state_26536[(9)]);var inst_26504 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26497,inst_26499);var state_26536__$1 = (function (){var statearr_26545 = state_26536;(statearr_26545[(12)] = inst_26504);
return statearr_26545;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26536__$1,(7),servant_channel);
} else
{if((state_val_26537 === (13)))
{var inst_26527 = (state_26536[(2)]);var state_26536__$1 = state_26536;var statearr_26546_26571 = state_26536__$1;(statearr_26546_26571[(2)] = inst_26527);
(statearr_26546_26571[(1)] = (10));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26537 === (6)))
{var inst_26532 = (state_26536[(2)]);var state_26536__$1 = state_26536;var statearr_26547_26572 = state_26536__$1;(statearr_26547_26572[(2)] = inst_26532);
(statearr_26547_26572[(1)] = (3));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26537 === (3)))
{var inst_26534 = (state_26536[(2)]);var state_26536__$1 = state_26536;return cljs.core.async.impl.ioc_helpers.return_chan(state_26536__$1,inst_26534);
} else
{if((state_val_26537 === (12)))
{var inst_26511 = (state_26536[(13)]);var inst_26520 = cljs.core.first(inst_26511);var state_26536__$1 = (function (){var statearr_26548 = state_26536;(statearr_26548[(14)] = inst_26520);
return statearr_26548;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26536__$1,(14),servant_channel);
} else
{if((state_val_26537 === (2)))
{var inst_26499 = (state_26536[(8)]);var inst_26498 = (state_26536[(10)]);var inst_26501 = (inst_26499 < inst_26498);var inst_26502 = inst_26501;var state_26536__$1 = state_26536;if(cljs.core.truth_(inst_26502))
{var statearr_26549_26573 = state_26536__$1;(statearr_26549_26573[(1)] = (4));
} else
{var statearr_26550_26574 = state_26536__$1;(statearr_26550_26574[(1)] = (5));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_26537 === (11)))
{var inst_26511 = (state_26536[(13)]);var inst_26515 = cljs.core.chunk_first(inst_26511);var inst_26516 = cljs.core.chunk_rest(inst_26511);var inst_26517 = cljs.core.count(inst_26515);var inst_26496 = inst_26516;var inst_26497 = inst_26515;var inst_26498 = inst_26517;var inst_26499 = (0);var state_26536__$1 = (function (){var statearr_26551 = state_26536;(statearr_26551[(7)] = inst_26496);
(statearr_26551[(8)] = inst_26499);
(statearr_26551[(9)] = inst_26497);
(statearr_26551[(10)] = inst_26498);
return statearr_26551;
})();var statearr_26552_26575 = state_26536__$1;(statearr_26552_26575[(2)] = null);
(statearr_26552_26575[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26537 === (9)))
{var state_26536__$1 = state_26536;var statearr_26553_26576 = state_26536__$1;(statearr_26553_26576[(2)] = null);
(statearr_26553_26576[(1)] = (10));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26537 === (5)))
{var inst_26496 = (state_26536[(7)]);var inst_26511 = (state_26536[(13)]);var inst_26511__$1 = cljs.core.seq(inst_26496);var state_26536__$1 = (function (){var statearr_26554 = state_26536;(statearr_26554[(13)] = inst_26511__$1);
return statearr_26554;
})();if(inst_26511__$1)
{var statearr_26555_26577 = state_26536__$1;(statearr_26555_26577[(1)] = (8));
} else
{var statearr_26556_26578 = state_26536__$1;(statearr_26556_26578[(1)] = (9));
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_26537 === (14)))
{var inst_26511 = (state_26536[(13)]);var inst_26522 = (state_26536[(2)]);var inst_26523 = inst_26522.terminate();var inst_26524 = cljs.core.next(inst_26511);var inst_26496 = inst_26524;var inst_26497 = null;var inst_26498 = (0);var inst_26499 = (0);var state_26536__$1 = (function (){var statearr_26557 = state_26536;(statearr_26557[(7)] = inst_26496);
(statearr_26557[(8)] = inst_26499);
(statearr_26557[(9)] = inst_26497);
(statearr_26557[(10)] = inst_26498);
(statearr_26557[(15)] = inst_26523);
return statearr_26557;
})();var statearr_26558_26579 = state_26536__$1;(statearr_26558_26579[(2)] = null);
(statearr_26558_26579[(1)] = (2));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26537 === (10)))
{var inst_26530 = (state_26536[(2)]);var state_26536__$1 = state_26536;var statearr_26559_26580 = state_26536__$1;(statearr_26559_26580[(2)] = inst_26530);
(statearr_26559_26580[(1)] = (6));
return cljs.core.constant$keyword$18;
} else
{if((state_val_26537 === (8)))
{var inst_26511 = (state_26536[(13)]);var inst_26513 = cljs.core.chunked_seq_QMARK_(inst_26511);var state_26536__$1 = state_26536;if(inst_26513)
{var statearr_26560_26581 = state_26536__$1;(statearr_26560_26581[(1)] = (11));
} else
{var statearr_26561_26582 = state_26536__$1;(statearr_26561_26582[(1)] = (12));
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
});})(c__12271__auto__))
;return ((function (switch__12256__auto__,c__12271__auto__){
return (function() {
var state_machine__12257__auto__ = null;
var state_machine__12257__auto____0 = (function (){var statearr_26565 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26565[(0)] = state_machine__12257__auto__);
(statearr_26565[(1)] = (1));
return statearr_26565;
});
var state_machine__12257__auto____1 = (function (state_26536){while(true){
var ret_value__12258__auto__ = (function (){try{while(true){
var result__12259__auto__ = switch__12256__auto__(state_26536);if(cljs.core.keyword_identical_QMARK_(result__12259__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12259__auto__;
}
break;
}
}catch (e26566){if((e26566 instanceof Object))
{var ex__12260__auto__ = e26566;var statearr_26567_26583 = state_26536;(statearr_26567_26583[(5)] = ex__12260__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26536);
return cljs.core.constant$keyword$18;
} else
{throw e26566;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12258__auto__,cljs.core.constant$keyword$18))
{{
var G__26584 = state_26536;
state_26536 = G__26584;
continue;
}
} else
{return ret_value__12258__auto__;
}
break;
}
});
state_machine__12257__auto__ = function(state_26536){
switch(arguments.length){
case 0:
return state_machine__12257__auto____0.call(this);
case 1:
return state_machine__12257__auto____1.call(this,state_26536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12257__auto____0;
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12257__auto____1;
return state_machine__12257__auto__;
})()
;})(switch__12256__auto__,c__12271__auto__))
})();var state__12273__auto__ = (function (){var statearr_26568 = (function (){return (f__12272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12272__auto__.cljs$core$IFn$_invoke$arity$0() : f__12272__auto__.call(null));
})();(statearr_26568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12271__auto__);
return statearr_26568;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12273__auto__);
});})(c__12271__auto__))
);
return c__12271__auto__;
});
servant.core.f__GT_key = (function f__GT_key(f){return cljs.core.ffirst(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26585_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,cljs.core.second(p1__26585_SHARP_));
}),(function (){var G__26587 = servant.worker.worker_fn_map;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26587) : cljs.core.deref.call(null,G__26587));
})()));
});
servant.core.standard_message = (function standard_message(worker,fn_key,args){return worker.postMessage((function (){var obj26591 = {"command":"channel","fn":fn_key,"args":cljs.core.clj__GT_js(args)};return obj26591;
})());
});
/**
* Post message by transferring context of the arraybuffers.
* The channel should be fed data like [[normal args] [arraybuffer1 arraybuffer2]].
* Tells the worker to expect to return an arraybuffer
*/
servant.core.array_buffer_message = (function array_buffer_message(worker,fn_key,args){var vec__26595 = args;var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26595,(0),null);var arraybuffers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26595,(1),null);return worker.postMessage((function (){var obj26597 = {"command":"channel-arraybuffer","fn":fn_key,"args":cljs.core.clj__GT_js(args__$1)};return obj26597;
})(),cljs.core.clj__GT_js(arraybuffers));
});
/**
* Post message by transferring context of the arraybuffers.
* The channel should be fed data like [[arg1 arg2] [arraybuffer1 arraybuffer2]].
* Tells the worker to return normal data
*/
servant.core.array_buffer_message_standard_reply = (function array_buffer_message_standard_reply(worker,fn_key,args){var vec__26601 = args;var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26601,(0),null);var arraybuffers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26601,(1),null);return worker.postMessage((function (){var obj26603 = {"command":"channel","fn":fn_key,"args":cljs.core.clj__GT_js(args__$1)};return obj26603;
})(),cljs.core.clj__GT_js(arraybuffers));
});
/**
* @param {...*} var_args
*/
servant.core.servant_thread_with_key = (function() { 
var servant_thread_with_key__delegate = function (servant_channel,post_message_fn,fn_key,args){var out_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var c__12271__auto___26677 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12271__auto___26677,out_channel){
return (function (){var f__12272__auto__ = (function (){var switch__12256__auto__ = ((function (c__12271__auto___26677,out_channel){
return (function (state_26648){var state_val_26649 = (state_26648[(1)]);if((state_val_26649 === (2)))
{var inst_26642 = (state_26648[(2)]);var inst_26643 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([fn_key], 0));var inst_26644 = (function (){var G__26650 = inst_26642;var G__26651 = inst_26643;var G__26652 = args;return (post_message_fn.cljs$core$IFn$_invoke$arity$3 ? post_message_fn.cljs$core$IFn$_invoke$arity$3(G__26650,G__26651,G__26652) : post_message_fn.call(null,G__26650,G__26651,G__26652));
})();var inst_26645 = (function (){var worker = inst_26642;return ((function (worker,inst_26642,inst_26643,inst_26644,state_val_26649,c__12271__auto___26677,out_channel){
return (function (p1__26604_SHARP_){var c__12271__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__12271__auto____$1,worker,inst_26642,inst_26643,inst_26644,state_val_26649,c__12271__auto___26677,out_channel){
return (function (){var f__12272__auto__ = (function (){var switch__12256__auto__ = ((function (c__12271__auto____$1,worker,inst_26642,inst_26643,inst_26644,state_val_26649,c__12271__auto___26677,out_channel){
return (function (state_26659){var state_val_26660 = (state_26659[(1)]);if((state_val_26660 === (3)))
{var inst_26657 = (state_26659[(2)]);var state_26659__$1 = state_26659;return cljs.core.async.impl.ioc_helpers.return_chan(state_26659__$1,inst_26657);
} else
{if((state_val_26660 === (2)))
{var inst_26655 = (state_26659[(2)]);var state_26659__$1 = (function (){var statearr_26661 = state_26659;(statearr_26661[(7)] = inst_26655);
return statearr_26661;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26659__$1,(3),servant_channel,worker);
} else
{if((state_val_26660 === (1)))
{var inst_26653 = p1__26604_SHARP_.data;var state_26659__$1 = state_26659;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26659__$1,(2),out_channel,inst_26653);
} else
{return null;
}
}
}
});})(c__12271__auto____$1,worker,inst_26642,inst_26643,inst_26644,state_val_26649,c__12271__auto___26677,out_channel))
;return ((function (switch__12256__auto__,c__12271__auto____$1,worker,inst_26642,inst_26643,inst_26644,state_val_26649,c__12271__auto___26677,out_channel){
return (function() {
var state_machine__12257__auto__ = null;
var state_machine__12257__auto____0 = (function (){var statearr_26665 = [null,null,null,null,null,null,null,null];(statearr_26665[(0)] = state_machine__12257__auto__);
(statearr_26665[(1)] = (1));
return statearr_26665;
});
var state_machine__12257__auto____1 = (function (state_26659){while(true){
var ret_value__12258__auto__ = (function (){try{while(true){
var result__12259__auto__ = switch__12256__auto__(state_26659);if(cljs.core.keyword_identical_QMARK_(result__12259__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12259__auto__;
}
break;
}
}catch (e26666){if((e26666 instanceof Object))
{var ex__12260__auto__ = e26666;var statearr_26667_26678 = state_26659;(statearr_26667_26678[(5)] = ex__12260__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26659);
return cljs.core.constant$keyword$18;
} else
{throw e26666;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12258__auto__,cljs.core.constant$keyword$18))
{{
var G__26679 = state_26659;
state_26659 = G__26679;
continue;
}
} else
{return ret_value__12258__auto__;
}
break;
}
});
state_machine__12257__auto__ = function(state_26659){
switch(arguments.length){
case 0:
return state_machine__12257__auto____0.call(this);
case 1:
return state_machine__12257__auto____1.call(this,state_26659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12257__auto____0;
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12257__auto____1;
return state_machine__12257__auto__;
})()
;})(switch__12256__auto__,c__12271__auto____$1,worker,inst_26642,inst_26643,inst_26644,state_val_26649,c__12271__auto___26677,out_channel))
})();var state__12273__auto__ = (function (){var statearr_26668 = (function (){return (f__12272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12272__auto__.cljs$core$IFn$_invoke$arity$0() : f__12272__auto__.call(null));
})();(statearr_26668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12271__auto____$1);
return statearr_26668;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12273__auto__);
});})(c__12271__auto____$1,worker,inst_26642,inst_26643,inst_26644,state_val_26649,c__12271__auto___26677,out_channel))
);
return c__12271__auto____$1;
});
;})(worker,inst_26642,inst_26643,inst_26644,state_val_26649,c__12271__auto___26677,out_channel))
})();var inst_26646 = inst_26642.addEventListener("message",inst_26645);var state_26648__$1 = (function (){var statearr_26669 = state_26648;(statearr_26669[(7)] = inst_26644);
return statearr_26669;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26648__$1,inst_26646);
} else
{if((state_val_26649 === (1)))
{var state_26648__$1 = state_26648;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26648__$1,(2),servant_channel);
} else
{return null;
}
}
});})(c__12271__auto___26677,out_channel))
;return ((function (switch__12256__auto__,c__12271__auto___26677,out_channel){
return (function() {
var state_machine__12257__auto__ = null;
var state_machine__12257__auto____0 = (function (){var statearr_26673 = [null,null,null,null,null,null,null,null];(statearr_26673[(0)] = state_machine__12257__auto__);
(statearr_26673[(1)] = (1));
return statearr_26673;
});
var state_machine__12257__auto____1 = (function (state_26648){while(true){
var ret_value__12258__auto__ = (function (){try{while(true){
var result__12259__auto__ = switch__12256__auto__(state_26648);if(cljs.core.keyword_identical_QMARK_(result__12259__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__12259__auto__;
}
break;
}
}catch (e26674){if((e26674 instanceof Object))
{var ex__12260__auto__ = e26674;var statearr_26675_26680 = state_26648;(statearr_26675_26680[(5)] = ex__12260__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26648);
return cljs.core.constant$keyword$18;
} else
{throw e26674;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__12258__auto__,cljs.core.constant$keyword$18))
{{
var G__26681 = state_26648;
state_26648 = G__26681;
continue;
}
} else
{return ret_value__12258__auto__;
}
break;
}
});
state_machine__12257__auto__ = function(state_26648){
switch(arguments.length){
case 0:
return state_machine__12257__auto____0.call(this);
case 1:
return state_machine__12257__auto____1.call(this,state_26648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12257__auto____0;
state_machine__12257__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12257__auto____1;
return state_machine__12257__auto__;
})()
;})(switch__12256__auto__,c__12271__auto___26677,out_channel))
})();var state__12273__auto__ = (function (){var statearr_26676 = (function (){return (f__12272__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12272__auto__.cljs$core$IFn$_invoke$arity$0() : f__12272__auto__.call(null));
})();(statearr_26676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12271__auto___26677);
return statearr_26676;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12273__auto__);
});})(c__12271__auto___26677,out_channel))
);
return out_channel;
};
var servant_thread_with_key = function (servant_channel,post_message_fn,fn_key,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return servant_thread_with_key__delegate.call(this,servant_channel,post_message_fn,fn_key,args);};
servant_thread_with_key.cljs$lang$maxFixedArity = 3;
servant_thread_with_key.cljs$lang$applyTo = (function (arglist__26682){
var servant_channel = cljs.core.first(arglist__26682);
arglist__26682 = cljs.core.next(arglist__26682);
var post_message_fn = cljs.core.first(arglist__26682);
arglist__26682 = cljs.core.next(arglist__26682);
var fn_key = cljs.core.first(arglist__26682);
var args = cljs.core.rest(arglist__26682);
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
servant_thread.cljs$lang$applyTo = (function (arglist__26683){
var servant_channel = cljs.core.first(arglist__26683);
arglist__26683 = cljs.core.next(arglist__26683);
var post_message_fn = cljs.core.first(arglist__26683);
arglist__26683 = cljs.core.next(arglist__26683);
var f = cljs.core.first(arglist__26683);
var args = cljs.core.rest(arglist__26683);
return servant_thread__delegate(servant_channel,post_message_fn,f,args);
});
servant_thread.cljs$core$IFn$_invoke$arity$variadic = servant_thread__delegate;
return servant_thread;
})()
;
