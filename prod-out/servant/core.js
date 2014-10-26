// Compiled by ClojureScript 0.0-2356
goog.provide('servant.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('servant.worker');
goog.require('servant.worker');
goog.require('cljs.core.async');
servant.core.webworker_QMARK_ = (function webworker_QMARK_(){return (void 0 === self.document);
});
servant.core.not_webworker_QMARK_ = cljs.core.complement.call(null,servant.core.webworker_QMARK_);
/**
* Returns a channel that lists available workers
*/
servant.core.spawn_servants = (function spawn_servants(worker_count,worker_script){var servant_channel = cljs.core.async.chan.call(null,worker_count);var c__7332__auto___15483 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7332__auto___15483,servant_channel){
return (function (){var f__7333__auto__ = (function (){var switch__7317__auto__ = ((function (c__7332__auto___15483,servant_channel){
return (function (state_15450){var state_val_15451 = (state_15450[(1)]);if((state_val_15451 === (7)))
{var inst_15413 = (state_15450[(7)]);var inst_15412 = (state_15450[(8)]);var inst_15411 = (state_15450[(9)]);var inst_15410 = (state_15450[(10)]);var inst_15421 = (state_15450[(2)]);var inst_15422 = (inst_15413 + (1));var tmp15452 = inst_15412;var tmp15453 = inst_15411;var tmp15454 = inst_15410;var inst_15410__$1 = tmp15454;var inst_15411__$1 = tmp15453;var inst_15412__$1 = tmp15452;var inst_15413__$1 = inst_15422;var state_15450__$1 = (function (){var statearr_15455 = state_15450;(statearr_15455[(7)] = inst_15413__$1);
(statearr_15455[(8)] = inst_15412__$1);
(statearr_15455[(11)] = inst_15421);
(statearr_15455[(9)] = inst_15411__$1);
(statearr_15455[(10)] = inst_15410__$1);
return statearr_15455;
})();var statearr_15456_15484 = state_15450__$1;(statearr_15456_15484[(2)] = null);
(statearr_15456_15484[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15451 === (1)))
{var inst_15408 = cljs.core.range.call(null,worker_count);var inst_15409 = cljs.core.seq.call(null,inst_15408);var inst_15410 = inst_15409;var inst_15411 = null;var inst_15412 = (0);var inst_15413 = (0);var state_15450__$1 = (function (){var statearr_15457 = state_15450;(statearr_15457[(7)] = inst_15413);
(statearr_15457[(8)] = inst_15412);
(statearr_15457[(9)] = inst_15411);
(statearr_15457[(10)] = inst_15410);
return statearr_15457;
})();var statearr_15458_15485 = state_15450__$1;(statearr_15458_15485[(2)] = null);
(statearr_15458_15485[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15451 === (4)))
{var inst_15413 = (state_15450[(7)]);var inst_15411 = (state_15450[(9)]);var inst_15418 = cljs.core._nth.call(null,inst_15411,inst_15413);var inst_15419 = (new Worker(worker_script));var state_15450__$1 = (function (){var statearr_15459 = state_15450;(statearr_15459[(12)] = inst_15418);
return statearr_15459;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15450__$1,(7),servant_channel,inst_15419);
} else
{if((state_val_15451 === (13)))
{var inst_15441 = (state_15450[(2)]);var state_15450__$1 = state_15450;var statearr_15460_15486 = state_15450__$1;(statearr_15460_15486[(2)] = inst_15441);
(statearr_15460_15486[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15451 === (6)))
{var inst_15446 = (state_15450[(2)]);var state_15450__$1 = state_15450;var statearr_15461_15487 = state_15450__$1;(statearr_15461_15487[(2)] = inst_15446);
(statearr_15461_15487[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15451 === (3)))
{var inst_15448 = (state_15450[(2)]);var state_15450__$1 = state_15450;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15450__$1,inst_15448);
} else
{if((state_val_15451 === (12)))
{var inst_15425 = (state_15450[(13)]);var inst_15434 = cljs.core.first.call(null,inst_15425);var inst_15435 = (new Worker(worker_script));var state_15450__$1 = (function (){var statearr_15462 = state_15450;(statearr_15462[(14)] = inst_15434);
return statearr_15462;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15450__$1,(14),servant_channel,inst_15435);
} else
{if((state_val_15451 === (2)))
{var inst_15413 = (state_15450[(7)]);var inst_15412 = (state_15450[(8)]);var inst_15415 = (inst_15413 < inst_15412);var inst_15416 = inst_15415;var state_15450__$1 = state_15450;if(cljs.core.truth_(inst_15416))
{var statearr_15463_15488 = state_15450__$1;(statearr_15463_15488[(1)] = (4));
} else
{var statearr_15464_15489 = state_15450__$1;(statearr_15464_15489[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15451 === (11)))
{var inst_15425 = (state_15450[(13)]);var inst_15429 = cljs.core.chunk_first.call(null,inst_15425);var inst_15430 = cljs.core.chunk_rest.call(null,inst_15425);var inst_15431 = cljs.core.count.call(null,inst_15429);var inst_15410 = inst_15430;var inst_15411 = inst_15429;var inst_15412 = inst_15431;var inst_15413 = (0);var state_15450__$1 = (function (){var statearr_15465 = state_15450;(statearr_15465[(7)] = inst_15413);
(statearr_15465[(8)] = inst_15412);
(statearr_15465[(9)] = inst_15411);
(statearr_15465[(10)] = inst_15410);
return statearr_15465;
})();var statearr_15466_15490 = state_15450__$1;(statearr_15466_15490[(2)] = null);
(statearr_15466_15490[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15451 === (9)))
{var state_15450__$1 = state_15450;var statearr_15467_15491 = state_15450__$1;(statearr_15467_15491[(2)] = null);
(statearr_15467_15491[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15451 === (5)))
{var inst_15425 = (state_15450[(13)]);var inst_15410 = (state_15450[(10)]);var inst_15425__$1 = cljs.core.seq.call(null,inst_15410);var state_15450__$1 = (function (){var statearr_15468 = state_15450;(statearr_15468[(13)] = inst_15425__$1);
return statearr_15468;
})();if(inst_15425__$1)
{var statearr_15469_15492 = state_15450__$1;(statearr_15469_15492[(1)] = (8));
} else
{var statearr_15470_15493 = state_15450__$1;(statearr_15470_15493[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15451 === (14)))
{var inst_15425 = (state_15450[(13)]);var inst_15437 = (state_15450[(2)]);var inst_15438 = cljs.core.next.call(null,inst_15425);var inst_15410 = inst_15438;var inst_15411 = null;var inst_15412 = (0);var inst_15413 = (0);var state_15450__$1 = (function (){var statearr_15471 = state_15450;(statearr_15471[(7)] = inst_15413);
(statearr_15471[(8)] = inst_15412);
(statearr_15471[(9)] = inst_15411);
(statearr_15471[(15)] = inst_15437);
(statearr_15471[(10)] = inst_15410);
return statearr_15471;
})();var statearr_15472_15494 = state_15450__$1;(statearr_15472_15494[(2)] = null);
(statearr_15472_15494[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15451 === (10)))
{var inst_15444 = (state_15450[(2)]);var state_15450__$1 = state_15450;var statearr_15473_15495 = state_15450__$1;(statearr_15473_15495[(2)] = inst_15444);
(statearr_15473_15495[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15451 === (8)))
{var inst_15425 = (state_15450[(13)]);var inst_15427 = cljs.core.chunked_seq_QMARK_.call(null,inst_15425);var state_15450__$1 = state_15450;if(inst_15427)
{var statearr_15474_15496 = state_15450__$1;(statearr_15474_15496[(1)] = (11));
} else
{var statearr_15475_15497 = state_15450__$1;(statearr_15475_15497[(1)] = (12));
}
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
}
}
}
}
}
}
});})(c__7332__auto___15483,servant_channel))
;return ((function (switch__7317__auto__,c__7332__auto___15483,servant_channel){
return (function() {
var state_machine__7318__auto__ = null;
var state_machine__7318__auto____0 = (function (){var statearr_15479 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15479[(0)] = state_machine__7318__auto__);
(statearr_15479[(1)] = (1));
return statearr_15479;
});
var state_machine__7318__auto____1 = (function (state_15450){while(true){
var ret_value__7319__auto__ = (function (){try{while(true){
var result__7320__auto__ = switch__7317__auto__.call(null,state_15450);if(cljs.core.keyword_identical_QMARK_.call(null,result__7320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7320__auto__;
}
break;
}
}catch (e15480){if((e15480 instanceof Object))
{var ex__7321__auto__ = e15480;var statearr_15481_15498 = state_15450;(statearr_15481_15498[(5)] = ex__7321__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15450);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15480;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15499 = state_15450;
state_15450 = G__15499;
continue;
}
} else
{return ret_value__7319__auto__;
}
break;
}
});
state_machine__7318__auto__ = function(state_15450){
switch(arguments.length){
case 0:
return state_machine__7318__auto____0.call(this);
case 1:
return state_machine__7318__auto____1.call(this,state_15450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7318__auto____0;
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7318__auto____1;
return state_machine__7318__auto__;
})()
;})(switch__7317__auto__,c__7332__auto___15483,servant_channel))
})();var state__7334__auto__ = (function (){var statearr_15482 = f__7333__auto__.call(null);(statearr_15482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7332__auto___15483);
return statearr_15482;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7334__auto__);
});})(c__7332__auto___15483,servant_channel))
);
return servant_channel;
});
/**
* Kills worker-count # of workers
*/
servant.core.kill_servants = (function kill_servants(servant_channel,worker_count){var c__7332__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7332__auto__){
return (function (){var f__7333__auto__ = (function (){var switch__7317__auto__ = ((function (c__7332__auto__){
return (function (state_15625){var state_val_15626 = (state_15625[(1)]);if((state_val_15626 === (7)))
{var inst_15588 = (state_15625[(7)]);var inst_15585 = (state_15625[(8)]);var inst_15587 = (state_15625[(9)]);var inst_15586 = (state_15625[(10)]);var inst_15595 = (state_15625[(2)]);var inst_15596 = inst_15595.terminate();var inst_15597 = (inst_15588 + (1));var tmp15627 = inst_15585;var tmp15628 = inst_15587;var tmp15629 = inst_15586;var inst_15585__$1 = tmp15627;var inst_15586__$1 = tmp15629;var inst_15587__$1 = tmp15628;var inst_15588__$1 = inst_15597;var state_15625__$1 = (function (){var statearr_15630 = state_15625;(statearr_15630[(7)] = inst_15588__$1);
(statearr_15630[(8)] = inst_15585__$1);
(statearr_15630[(9)] = inst_15587__$1);
(statearr_15630[(10)] = inst_15586__$1);
(statearr_15630[(11)] = inst_15596);
return statearr_15630;
})();var statearr_15631_15658 = state_15625__$1;(statearr_15631_15658[(2)] = null);
(statearr_15631_15658[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15626 === (1)))
{var inst_15583 = cljs.core.range.call(null,worker_count);var inst_15584 = cljs.core.seq.call(null,inst_15583);var inst_15585 = inst_15584;var inst_15586 = null;var inst_15587 = (0);var inst_15588 = (0);var state_15625__$1 = (function (){var statearr_15632 = state_15625;(statearr_15632[(7)] = inst_15588);
(statearr_15632[(8)] = inst_15585);
(statearr_15632[(9)] = inst_15587);
(statearr_15632[(10)] = inst_15586);
return statearr_15632;
})();var statearr_15633_15659 = state_15625__$1;(statearr_15633_15659[(2)] = null);
(statearr_15633_15659[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15626 === (4)))
{var inst_15588 = (state_15625[(7)]);var inst_15586 = (state_15625[(10)]);var inst_15593 = cljs.core._nth.call(null,inst_15586,inst_15588);var state_15625__$1 = (function (){var statearr_15634 = state_15625;(statearr_15634[(12)] = inst_15593);
return statearr_15634;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15625__$1,(7),servant_channel);
} else
{if((state_val_15626 === (13)))
{var inst_15616 = (state_15625[(2)]);var state_15625__$1 = state_15625;var statearr_15635_15660 = state_15625__$1;(statearr_15635_15660[(2)] = inst_15616);
(statearr_15635_15660[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15626 === (6)))
{var inst_15621 = (state_15625[(2)]);var state_15625__$1 = state_15625;var statearr_15636_15661 = state_15625__$1;(statearr_15636_15661[(2)] = inst_15621);
(statearr_15636_15661[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15626 === (3)))
{var inst_15623 = (state_15625[(2)]);var state_15625__$1 = state_15625;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15625__$1,inst_15623);
} else
{if((state_val_15626 === (12)))
{var inst_15600 = (state_15625[(13)]);var inst_15609 = cljs.core.first.call(null,inst_15600);var state_15625__$1 = (function (){var statearr_15637 = state_15625;(statearr_15637[(14)] = inst_15609);
return statearr_15637;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15625__$1,(14),servant_channel);
} else
{if((state_val_15626 === (2)))
{var inst_15588 = (state_15625[(7)]);var inst_15587 = (state_15625[(9)]);var inst_15590 = (inst_15588 < inst_15587);var inst_15591 = inst_15590;var state_15625__$1 = state_15625;if(cljs.core.truth_(inst_15591))
{var statearr_15638_15662 = state_15625__$1;(statearr_15638_15662[(1)] = (4));
} else
{var statearr_15639_15663 = state_15625__$1;(statearr_15639_15663[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15626 === (11)))
{var inst_15600 = (state_15625[(13)]);var inst_15604 = cljs.core.chunk_first.call(null,inst_15600);var inst_15605 = cljs.core.chunk_rest.call(null,inst_15600);var inst_15606 = cljs.core.count.call(null,inst_15604);var inst_15585 = inst_15605;var inst_15586 = inst_15604;var inst_15587 = inst_15606;var inst_15588 = (0);var state_15625__$1 = (function (){var statearr_15640 = state_15625;(statearr_15640[(7)] = inst_15588);
(statearr_15640[(8)] = inst_15585);
(statearr_15640[(9)] = inst_15587);
(statearr_15640[(10)] = inst_15586);
return statearr_15640;
})();var statearr_15641_15664 = state_15625__$1;(statearr_15641_15664[(2)] = null);
(statearr_15641_15664[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15626 === (9)))
{var state_15625__$1 = state_15625;var statearr_15642_15665 = state_15625__$1;(statearr_15642_15665[(2)] = null);
(statearr_15642_15665[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15626 === (5)))
{var inst_15585 = (state_15625[(8)]);var inst_15600 = (state_15625[(13)]);var inst_15600__$1 = cljs.core.seq.call(null,inst_15585);var state_15625__$1 = (function (){var statearr_15643 = state_15625;(statearr_15643[(13)] = inst_15600__$1);
return statearr_15643;
})();if(inst_15600__$1)
{var statearr_15644_15666 = state_15625__$1;(statearr_15644_15666[(1)] = (8));
} else
{var statearr_15645_15667 = state_15625__$1;(statearr_15645_15667[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15626 === (14)))
{var inst_15600 = (state_15625[(13)]);var inst_15611 = (state_15625[(2)]);var inst_15612 = inst_15611.terminate();var inst_15613 = cljs.core.next.call(null,inst_15600);var inst_15585 = inst_15613;var inst_15586 = null;var inst_15587 = (0);var inst_15588 = (0);var state_15625__$1 = (function (){var statearr_15646 = state_15625;(statearr_15646[(7)] = inst_15588);
(statearr_15646[(8)] = inst_15585);
(statearr_15646[(9)] = inst_15587);
(statearr_15646[(15)] = inst_15612);
(statearr_15646[(10)] = inst_15586);
return statearr_15646;
})();var statearr_15647_15668 = state_15625__$1;(statearr_15647_15668[(2)] = null);
(statearr_15647_15668[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15626 === (10)))
{var inst_15619 = (state_15625[(2)]);var state_15625__$1 = state_15625;var statearr_15648_15669 = state_15625__$1;(statearr_15648_15669[(2)] = inst_15619);
(statearr_15648_15669[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15626 === (8)))
{var inst_15600 = (state_15625[(13)]);var inst_15602 = cljs.core.chunked_seq_QMARK_.call(null,inst_15600);var state_15625__$1 = state_15625;if(inst_15602)
{var statearr_15649_15670 = state_15625__$1;(statearr_15649_15670[(1)] = (11));
} else
{var statearr_15650_15671 = state_15625__$1;(statearr_15650_15671[(1)] = (12));
}
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
}
}
}
}
}
}
});})(c__7332__auto__))
;return ((function (switch__7317__auto__,c__7332__auto__){
return (function() {
var state_machine__7318__auto__ = null;
var state_machine__7318__auto____0 = (function (){var statearr_15654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15654[(0)] = state_machine__7318__auto__);
(statearr_15654[(1)] = (1));
return statearr_15654;
});
var state_machine__7318__auto____1 = (function (state_15625){while(true){
var ret_value__7319__auto__ = (function (){try{while(true){
var result__7320__auto__ = switch__7317__auto__.call(null,state_15625);if(cljs.core.keyword_identical_QMARK_.call(null,result__7320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7320__auto__;
}
break;
}
}catch (e15655){if((e15655 instanceof Object))
{var ex__7321__auto__ = e15655;var statearr_15656_15672 = state_15625;(statearr_15656_15672[(5)] = ex__7321__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15625);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15655;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15673 = state_15625;
state_15625 = G__15673;
continue;
}
} else
{return ret_value__7319__auto__;
}
break;
}
});
state_machine__7318__auto__ = function(state_15625){
switch(arguments.length){
case 0:
return state_machine__7318__auto____0.call(this);
case 1:
return state_machine__7318__auto____1.call(this,state_15625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7318__auto____0;
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7318__auto____1;
return state_machine__7318__auto__;
})()
;})(switch__7317__auto__,c__7332__auto__))
})();var state__7334__auto__ = (function (){var statearr_15657 = f__7333__auto__.call(null);(statearr_15657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7332__auto__);
return statearr_15657;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7334__auto__);
});})(c__7332__auto__))
);
return c__7332__auto__;
});
servant.core.f__GT_key = (function f__GT_key(f){return cljs.core.ffirst.call(null,cljs.core.filter.call(null,(function (p1__15674_SHARP_){return cljs.core._EQ_.call(null,f,cljs.core.second.call(null,p1__15674_SHARP_));
}),cljs.core.deref.call(null,servant.worker.worker_fn_map)));
});
servant.core.standard_message = (function standard_message(worker,fn_key,args){return worker.postMessage((function (){var obj15678 = {"command":"channel","fn":fn_key,"args":cljs.core.clj__GT_js.call(null,args)};return obj15678;
})());
});
/**
* Post message by transferring context of the arraybuffers.
* The channel should be fed data like [[normal args] [arraybuffer1 arraybuffer2]].
* Tells the worker to expect to return an arraybuffer
*/
servant.core.array_buffer_message = (function array_buffer_message(worker,fn_key,args){var vec__15682 = args;var args__$1 = cljs.core.nth.call(null,vec__15682,(0),null);var arraybuffers = cljs.core.nth.call(null,vec__15682,(1),null);return worker.postMessage((function (){var obj15684 = {"command":"channel-arraybuffer","fn":fn_key,"args":cljs.core.clj__GT_js.call(null,args__$1)};return obj15684;
})(),cljs.core.clj__GT_js.call(null,arraybuffers));
});
/**
* Post message by transferring context of the arraybuffers.
* The channel should be fed data like [[arg1 arg2] [arraybuffer1 arraybuffer2]].
* Tells the worker to return normal data
*/
servant.core.array_buffer_message_standard_reply = (function array_buffer_message_standard_reply(worker,fn_key,args){var vec__15688 = args;var args__$1 = cljs.core.nth.call(null,vec__15688,(0),null);var arraybuffers = cljs.core.nth.call(null,vec__15688,(1),null);return worker.postMessage((function (){var obj15690 = {"command":"channel","fn":fn_key,"args":cljs.core.clj__GT_js.call(null,args__$1)};return obj15690;
})(),cljs.core.clj__GT_js.call(null,arraybuffers));
});
/**
* @param {...*} var_args
*/
servant.core.servant_thread_with_key = (function() { 
var servant_thread_with_key__delegate = function (servant_channel,post_message_fn,fn_key,args){var out_channel = cljs.core.async.chan.call(null,(1));var c__7332__auto___15758 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7332__auto___15758,out_channel){
return (function (){var f__7333__auto__ = (function (){var switch__7317__auto__ = ((function (c__7332__auto___15758,out_channel){
return (function (state_15732){var state_val_15733 = (state_15732[(1)]);if((state_val_15733 === (2)))
{var inst_15726 = (state_15732[(2)]);var inst_15727 = cljs.core.pr_str.call(null,fn_key);var inst_15728 = post_message_fn.call(null,inst_15726,inst_15727,args);var inst_15729 = (function (){var worker = inst_15726;return ((function (worker,inst_15726,inst_15727,inst_15728,state_val_15733,c__7332__auto___15758,out_channel){
return (function (p1__15691_SHARP_){var c__7332__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7332__auto____$1,worker,inst_15726,inst_15727,inst_15728,state_val_15733,c__7332__auto___15758,out_channel){
return (function (){var f__7333__auto__ = (function (){var switch__7317__auto__ = ((function (c__7332__auto____$1,worker,inst_15726,inst_15727,inst_15728,state_val_15733,c__7332__auto___15758,out_channel){
return (function (state_15740){var state_val_15741 = (state_15740[(1)]);if((state_val_15741 === (3)))
{var inst_15738 = (state_15740[(2)]);var state_15740__$1 = state_15740;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15740__$1,inst_15738);
} else
{if((state_val_15741 === (2)))
{var inst_15736 = (state_15740[(2)]);var state_15740__$1 = (function (){var statearr_15742 = state_15740;(statearr_15742[(7)] = inst_15736);
return statearr_15742;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15740__$1,(3),servant_channel,worker);
} else
{if((state_val_15741 === (1)))
{var inst_15734 = p1__15691_SHARP_.data;var state_15740__$1 = state_15740;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15740__$1,(2),out_channel,inst_15734);
} else
{return null;
}
}
}
});})(c__7332__auto____$1,worker,inst_15726,inst_15727,inst_15728,state_val_15733,c__7332__auto___15758,out_channel))
;return ((function (switch__7317__auto__,c__7332__auto____$1,worker,inst_15726,inst_15727,inst_15728,state_val_15733,c__7332__auto___15758,out_channel){
return (function() {
var state_machine__7318__auto__ = null;
var state_machine__7318__auto____0 = (function (){var statearr_15746 = [null,null,null,null,null,null,null,null];(statearr_15746[(0)] = state_machine__7318__auto__);
(statearr_15746[(1)] = (1));
return statearr_15746;
});
var state_machine__7318__auto____1 = (function (state_15740){while(true){
var ret_value__7319__auto__ = (function (){try{while(true){
var result__7320__auto__ = switch__7317__auto__.call(null,state_15740);if(cljs.core.keyword_identical_QMARK_.call(null,result__7320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7320__auto__;
}
break;
}
}catch (e15747){if((e15747 instanceof Object))
{var ex__7321__auto__ = e15747;var statearr_15748_15759 = state_15740;(statearr_15748_15759[(5)] = ex__7321__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15740);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15747;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15760 = state_15740;
state_15740 = G__15760;
continue;
}
} else
{return ret_value__7319__auto__;
}
break;
}
});
state_machine__7318__auto__ = function(state_15740){
switch(arguments.length){
case 0:
return state_machine__7318__auto____0.call(this);
case 1:
return state_machine__7318__auto____1.call(this,state_15740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7318__auto____0;
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7318__auto____1;
return state_machine__7318__auto__;
})()
;})(switch__7317__auto__,c__7332__auto____$1,worker,inst_15726,inst_15727,inst_15728,state_val_15733,c__7332__auto___15758,out_channel))
})();var state__7334__auto__ = (function (){var statearr_15749 = f__7333__auto__.call(null);(statearr_15749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7332__auto____$1);
return statearr_15749;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7334__auto__);
});})(c__7332__auto____$1,worker,inst_15726,inst_15727,inst_15728,state_val_15733,c__7332__auto___15758,out_channel))
);
return c__7332__auto____$1;
});
;})(worker,inst_15726,inst_15727,inst_15728,state_val_15733,c__7332__auto___15758,out_channel))
})();var inst_15730 = inst_15726.addEventListener("message",inst_15729);var state_15732__$1 = (function (){var statearr_15750 = state_15732;(statearr_15750[(7)] = inst_15728);
return statearr_15750;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15732__$1,inst_15730);
} else
{if((state_val_15733 === (1)))
{var state_15732__$1 = state_15732;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15732__$1,(2),servant_channel);
} else
{return null;
}
}
});})(c__7332__auto___15758,out_channel))
;return ((function (switch__7317__auto__,c__7332__auto___15758,out_channel){
return (function() {
var state_machine__7318__auto__ = null;
var state_machine__7318__auto____0 = (function (){var statearr_15754 = [null,null,null,null,null,null,null,null];(statearr_15754[(0)] = state_machine__7318__auto__);
(statearr_15754[(1)] = (1));
return statearr_15754;
});
var state_machine__7318__auto____1 = (function (state_15732){while(true){
var ret_value__7319__auto__ = (function (){try{while(true){
var result__7320__auto__ = switch__7317__auto__.call(null,state_15732);if(cljs.core.keyword_identical_QMARK_.call(null,result__7320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7320__auto__;
}
break;
}
}catch (e15755){if((e15755 instanceof Object))
{var ex__7321__auto__ = e15755;var statearr_15756_15761 = state_15732;(statearr_15756_15761[(5)] = ex__7321__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15732);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15755;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15762 = state_15732;
state_15732 = G__15762;
continue;
}
} else
{return ret_value__7319__auto__;
}
break;
}
});
state_machine__7318__auto__ = function(state_15732){
switch(arguments.length){
case 0:
return state_machine__7318__auto____0.call(this);
case 1:
return state_machine__7318__auto____1.call(this,state_15732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7318__auto____0;
state_machine__7318__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7318__auto____1;
return state_machine__7318__auto__;
})()
;})(switch__7317__auto__,c__7332__auto___15758,out_channel))
})();var state__7334__auto__ = (function (){var statearr_15757 = f__7333__auto__.call(null);(statearr_15757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7332__auto___15758);
return statearr_15757;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7334__auto__);
});})(c__7332__auto___15758,out_channel))
);
return out_channel;
};
var servant_thread_with_key = function (servant_channel,post_message_fn,fn_key,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return servant_thread_with_key__delegate.call(this,servant_channel,post_message_fn,fn_key,args);};
servant_thread_with_key.cljs$lang$maxFixedArity = 3;
servant_thread_with_key.cljs$lang$applyTo = (function (arglist__15763){
var servant_channel = cljs.core.first(arglist__15763);
arglist__15763 = cljs.core.next(arglist__15763);
var post_message_fn = cljs.core.first(arglist__15763);
arglist__15763 = cljs.core.next(arglist__15763);
var fn_key = cljs.core.first(arglist__15763);
var args = cljs.core.rest(arglist__15763);
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
var servant_thread__delegate = function (servant_channel,post_message_fn,f,args){return cljs.core.apply.call(null,servant.core.servant_thread_with_key,servant_channel,post_message_fn,servant.core.f__GT_key.call(null,f),args);
};
var servant_thread = function (servant_channel,post_message_fn,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return servant_thread__delegate.call(this,servant_channel,post_message_fn,f,args);};
servant_thread.cljs$lang$maxFixedArity = 3;
servant_thread.cljs$lang$applyTo = (function (arglist__15764){
var servant_channel = cljs.core.first(arglist__15764);
arglist__15764 = cljs.core.next(arglist__15764);
var post_message_fn = cljs.core.first(arglist__15764);
arglist__15764 = cljs.core.next(arglist__15764);
var f = cljs.core.first(arglist__15764);
var args = cljs.core.rest(arglist__15764);
return servant_thread__delegate(servant_channel,post_message_fn,f,args);
});
servant_thread.cljs$core$IFn$_invoke$arity$variadic = servant_thread__delegate;
return servant_thread;
})()
;
