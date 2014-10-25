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
servant.core.spawn_servants = (function spawn_servants(worker_count,worker_script){var servant_channel = cljs.core.async.chan.call(null,worker_count);var c__11457__auto___15081 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11457__auto___15081,servant_channel){
return (function (){var f__11458__auto__ = (function (){var switch__11392__auto__ = ((function (c__11457__auto___15081,servant_channel){
return (function (state_15048){var state_val_15049 = (state_15048[(1)]);if((state_val_15049 === (7)))
{var inst_15009 = (state_15048[(7)]);var inst_15011 = (state_15048[(8)]);var inst_15010 = (state_15048[(9)]);var inst_15008 = (state_15048[(10)]);var inst_15019 = (state_15048[(2)]);var inst_15020 = (inst_15011 + (1));var tmp15050 = inst_15009;var tmp15051 = inst_15010;var tmp15052 = inst_15008;var inst_15008__$1 = tmp15052;var inst_15009__$1 = tmp15050;var inst_15010__$1 = tmp15051;var inst_15011__$1 = inst_15020;var state_15048__$1 = (function (){var statearr_15053 = state_15048;(statearr_15053[(11)] = inst_15019);
(statearr_15053[(7)] = inst_15009__$1);
(statearr_15053[(8)] = inst_15011__$1);
(statearr_15053[(9)] = inst_15010__$1);
(statearr_15053[(10)] = inst_15008__$1);
return statearr_15053;
})();var statearr_15054_15082 = state_15048__$1;(statearr_15054_15082[(2)] = null);
(statearr_15054_15082[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15049 === (1)))
{var inst_15006 = cljs.core.range.call(null,worker_count);var inst_15007 = cljs.core.seq.call(null,inst_15006);var inst_15008 = inst_15007;var inst_15009 = null;var inst_15010 = (0);var inst_15011 = (0);var state_15048__$1 = (function (){var statearr_15055 = state_15048;(statearr_15055[(7)] = inst_15009);
(statearr_15055[(8)] = inst_15011);
(statearr_15055[(9)] = inst_15010);
(statearr_15055[(10)] = inst_15008);
return statearr_15055;
})();var statearr_15056_15083 = state_15048__$1;(statearr_15056_15083[(2)] = null);
(statearr_15056_15083[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15049 === (4)))
{var inst_15009 = (state_15048[(7)]);var inst_15011 = (state_15048[(8)]);var inst_15016 = cljs.core._nth.call(null,inst_15009,inst_15011);var inst_15017 = (new Worker(worker_script));var state_15048__$1 = (function (){var statearr_15057 = state_15048;(statearr_15057[(12)] = inst_15016);
return statearr_15057;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15048__$1,(7),servant_channel,inst_15017);
} else
{if((state_val_15049 === (13)))
{var inst_15039 = (state_15048[(2)]);var state_15048__$1 = state_15048;var statearr_15058_15084 = state_15048__$1;(statearr_15058_15084[(2)] = inst_15039);
(statearr_15058_15084[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15049 === (6)))
{var inst_15044 = (state_15048[(2)]);var state_15048__$1 = state_15048;var statearr_15059_15085 = state_15048__$1;(statearr_15059_15085[(2)] = inst_15044);
(statearr_15059_15085[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15049 === (3)))
{var inst_15046 = (state_15048[(2)]);var state_15048__$1 = state_15048;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15048__$1,inst_15046);
} else
{if((state_val_15049 === (12)))
{var inst_15023 = (state_15048[(13)]);var inst_15032 = cljs.core.first.call(null,inst_15023);var inst_15033 = (new Worker(worker_script));var state_15048__$1 = (function (){var statearr_15060 = state_15048;(statearr_15060[(14)] = inst_15032);
return statearr_15060;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15048__$1,(14),servant_channel,inst_15033);
} else
{if((state_val_15049 === (2)))
{var inst_15011 = (state_15048[(8)]);var inst_15010 = (state_15048[(9)]);var inst_15013 = (inst_15011 < inst_15010);var inst_15014 = inst_15013;var state_15048__$1 = state_15048;if(cljs.core.truth_(inst_15014))
{var statearr_15061_15086 = state_15048__$1;(statearr_15061_15086[(1)] = (4));
} else
{var statearr_15062_15087 = state_15048__$1;(statearr_15062_15087[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15049 === (11)))
{var inst_15023 = (state_15048[(13)]);var inst_15027 = cljs.core.chunk_first.call(null,inst_15023);var inst_15028 = cljs.core.chunk_rest.call(null,inst_15023);var inst_15029 = cljs.core.count.call(null,inst_15027);var inst_15008 = inst_15028;var inst_15009 = inst_15027;var inst_15010 = inst_15029;var inst_15011 = (0);var state_15048__$1 = (function (){var statearr_15063 = state_15048;(statearr_15063[(7)] = inst_15009);
(statearr_15063[(8)] = inst_15011);
(statearr_15063[(9)] = inst_15010);
(statearr_15063[(10)] = inst_15008);
return statearr_15063;
})();var statearr_15064_15088 = state_15048__$1;(statearr_15064_15088[(2)] = null);
(statearr_15064_15088[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15049 === (9)))
{var state_15048__$1 = state_15048;var statearr_15065_15089 = state_15048__$1;(statearr_15065_15089[(2)] = null);
(statearr_15065_15089[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15049 === (5)))
{var inst_15023 = (state_15048[(13)]);var inst_15008 = (state_15048[(10)]);var inst_15023__$1 = cljs.core.seq.call(null,inst_15008);var state_15048__$1 = (function (){var statearr_15066 = state_15048;(statearr_15066[(13)] = inst_15023__$1);
return statearr_15066;
})();if(inst_15023__$1)
{var statearr_15067_15090 = state_15048__$1;(statearr_15067_15090[(1)] = (8));
} else
{var statearr_15068_15091 = state_15048__$1;(statearr_15068_15091[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15049 === (14)))
{var inst_15023 = (state_15048[(13)]);var inst_15035 = (state_15048[(2)]);var inst_15036 = cljs.core.next.call(null,inst_15023);var inst_15008 = inst_15036;var inst_15009 = null;var inst_15010 = (0);var inst_15011 = (0);var state_15048__$1 = (function (){var statearr_15069 = state_15048;(statearr_15069[(7)] = inst_15009);
(statearr_15069[(8)] = inst_15011);
(statearr_15069[(9)] = inst_15010);
(statearr_15069[(15)] = inst_15035);
(statearr_15069[(10)] = inst_15008);
return statearr_15069;
})();var statearr_15070_15092 = state_15048__$1;(statearr_15070_15092[(2)] = null);
(statearr_15070_15092[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15049 === (10)))
{var inst_15042 = (state_15048[(2)]);var state_15048__$1 = state_15048;var statearr_15071_15093 = state_15048__$1;(statearr_15071_15093[(2)] = inst_15042);
(statearr_15071_15093[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15049 === (8)))
{var inst_15023 = (state_15048[(13)]);var inst_15025 = cljs.core.chunked_seq_QMARK_.call(null,inst_15023);var state_15048__$1 = state_15048;if(inst_15025)
{var statearr_15072_15094 = state_15048__$1;(statearr_15072_15094[(1)] = (11));
} else
{var statearr_15073_15095 = state_15048__$1;(statearr_15073_15095[(1)] = (12));
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
});})(c__11457__auto___15081,servant_channel))
;return ((function (switch__11392__auto__,c__11457__auto___15081,servant_channel){
return (function() {
var state_machine__11393__auto__ = null;
var state_machine__11393__auto____0 = (function (){var statearr_15077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15077[(0)] = state_machine__11393__auto__);
(statearr_15077[(1)] = (1));
return statearr_15077;
});
var state_machine__11393__auto____1 = (function (state_15048){while(true){
var ret_value__11394__auto__ = (function (){try{while(true){
var result__11395__auto__ = switch__11392__auto__.call(null,state_15048);if(cljs.core.keyword_identical_QMARK_.call(null,result__11395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11395__auto__;
}
break;
}
}catch (e15078){if((e15078 instanceof Object))
{var ex__11396__auto__ = e15078;var statearr_15079_15096 = state_15048;(statearr_15079_15096[(5)] = ex__11396__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15048);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15078;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15097 = state_15048;
state_15048 = G__15097;
continue;
}
} else
{return ret_value__11394__auto__;
}
break;
}
});
state_machine__11393__auto__ = function(state_15048){
switch(arguments.length){
case 0:
return state_machine__11393__auto____0.call(this);
case 1:
return state_machine__11393__auto____1.call(this,state_15048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11393__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11393__auto____0;
state_machine__11393__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11393__auto____1;
return state_machine__11393__auto__;
})()
;})(switch__11392__auto__,c__11457__auto___15081,servant_channel))
})();var state__11459__auto__ = (function (){var statearr_15080 = f__11458__auto__.call(null);(statearr_15080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11457__auto___15081);
return statearr_15080;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11459__auto__);
});})(c__11457__auto___15081,servant_channel))
);
return servant_channel;
});
/**
* Kills worker-count # of workers
*/
servant.core.kill_servants = (function kill_servants(servant_channel,worker_count){var c__11457__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11457__auto__){
return (function (){var f__11458__auto__ = (function (){var switch__11392__auto__ = ((function (c__11457__auto__){
return (function (state_15223){var state_val_15224 = (state_15223[(1)]);if((state_val_15224 === (7)))
{var inst_15183 = (state_15223[(7)]);var inst_15184 = (state_15223[(8)]);var inst_15185 = (state_15223[(9)]);var inst_15186 = (state_15223[(10)]);var inst_15193 = (state_15223[(2)]);var inst_15194 = inst_15193.terminate();var inst_15195 = (inst_15186 + (1));var tmp15225 = inst_15183;var tmp15226 = inst_15184;var tmp15227 = inst_15185;var inst_15183__$1 = tmp15225;var inst_15184__$1 = tmp15226;var inst_15185__$1 = tmp15227;var inst_15186__$1 = inst_15195;var state_15223__$1 = (function (){var statearr_15228 = state_15223;(statearr_15228[(7)] = inst_15183__$1);
(statearr_15228[(8)] = inst_15184__$1);
(statearr_15228[(9)] = inst_15185__$1);
(statearr_15228[(11)] = inst_15194);
(statearr_15228[(10)] = inst_15186__$1);
return statearr_15228;
})();var statearr_15229_15256 = state_15223__$1;(statearr_15229_15256[(2)] = null);
(statearr_15229_15256[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15224 === (1)))
{var inst_15181 = cljs.core.range.call(null,worker_count);var inst_15182 = cljs.core.seq.call(null,inst_15181);var inst_15183 = inst_15182;var inst_15184 = null;var inst_15185 = (0);var inst_15186 = (0);var state_15223__$1 = (function (){var statearr_15230 = state_15223;(statearr_15230[(7)] = inst_15183);
(statearr_15230[(8)] = inst_15184);
(statearr_15230[(9)] = inst_15185);
(statearr_15230[(10)] = inst_15186);
return statearr_15230;
})();var statearr_15231_15257 = state_15223__$1;(statearr_15231_15257[(2)] = null);
(statearr_15231_15257[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15224 === (4)))
{var inst_15184 = (state_15223[(8)]);var inst_15186 = (state_15223[(10)]);var inst_15191 = cljs.core._nth.call(null,inst_15184,inst_15186);var state_15223__$1 = (function (){var statearr_15232 = state_15223;(statearr_15232[(12)] = inst_15191);
return statearr_15232;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15223__$1,(7),servant_channel);
} else
{if((state_val_15224 === (13)))
{var inst_15214 = (state_15223[(2)]);var state_15223__$1 = state_15223;var statearr_15233_15258 = state_15223__$1;(statearr_15233_15258[(2)] = inst_15214);
(statearr_15233_15258[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15224 === (6)))
{var inst_15219 = (state_15223[(2)]);var state_15223__$1 = state_15223;var statearr_15234_15259 = state_15223__$1;(statearr_15234_15259[(2)] = inst_15219);
(statearr_15234_15259[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15224 === (3)))
{var inst_15221 = (state_15223[(2)]);var state_15223__$1 = state_15223;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15223__$1,inst_15221);
} else
{if((state_val_15224 === (12)))
{var inst_15198 = (state_15223[(13)]);var inst_15207 = cljs.core.first.call(null,inst_15198);var state_15223__$1 = (function (){var statearr_15235 = state_15223;(statearr_15235[(14)] = inst_15207);
return statearr_15235;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15223__$1,(14),servant_channel);
} else
{if((state_val_15224 === (2)))
{var inst_15185 = (state_15223[(9)]);var inst_15186 = (state_15223[(10)]);var inst_15188 = (inst_15186 < inst_15185);var inst_15189 = inst_15188;var state_15223__$1 = state_15223;if(cljs.core.truth_(inst_15189))
{var statearr_15236_15260 = state_15223__$1;(statearr_15236_15260[(1)] = (4));
} else
{var statearr_15237_15261 = state_15223__$1;(statearr_15237_15261[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15224 === (11)))
{var inst_15198 = (state_15223[(13)]);var inst_15202 = cljs.core.chunk_first.call(null,inst_15198);var inst_15203 = cljs.core.chunk_rest.call(null,inst_15198);var inst_15204 = cljs.core.count.call(null,inst_15202);var inst_15183 = inst_15203;var inst_15184 = inst_15202;var inst_15185 = inst_15204;var inst_15186 = (0);var state_15223__$1 = (function (){var statearr_15238 = state_15223;(statearr_15238[(7)] = inst_15183);
(statearr_15238[(8)] = inst_15184);
(statearr_15238[(9)] = inst_15185);
(statearr_15238[(10)] = inst_15186);
return statearr_15238;
})();var statearr_15239_15262 = state_15223__$1;(statearr_15239_15262[(2)] = null);
(statearr_15239_15262[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15224 === (9)))
{var state_15223__$1 = state_15223;var statearr_15240_15263 = state_15223__$1;(statearr_15240_15263[(2)] = null);
(statearr_15240_15263[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15224 === (5)))
{var inst_15198 = (state_15223[(13)]);var inst_15183 = (state_15223[(7)]);var inst_15198__$1 = cljs.core.seq.call(null,inst_15183);var state_15223__$1 = (function (){var statearr_15241 = state_15223;(statearr_15241[(13)] = inst_15198__$1);
return statearr_15241;
})();if(inst_15198__$1)
{var statearr_15242_15264 = state_15223__$1;(statearr_15242_15264[(1)] = (8));
} else
{var statearr_15243_15265 = state_15223__$1;(statearr_15243_15265[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15224 === (14)))
{var inst_15198 = (state_15223[(13)]);var inst_15209 = (state_15223[(2)]);var inst_15210 = inst_15209.terminate();var inst_15211 = cljs.core.next.call(null,inst_15198);var inst_15183 = inst_15211;var inst_15184 = null;var inst_15185 = (0);var inst_15186 = (0);var state_15223__$1 = (function (){var statearr_15244 = state_15223;(statearr_15244[(15)] = inst_15210);
(statearr_15244[(7)] = inst_15183);
(statearr_15244[(8)] = inst_15184);
(statearr_15244[(9)] = inst_15185);
(statearr_15244[(10)] = inst_15186);
return statearr_15244;
})();var statearr_15245_15266 = state_15223__$1;(statearr_15245_15266[(2)] = null);
(statearr_15245_15266[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15224 === (10)))
{var inst_15217 = (state_15223[(2)]);var state_15223__$1 = state_15223;var statearr_15246_15267 = state_15223__$1;(statearr_15246_15267[(2)] = inst_15217);
(statearr_15246_15267[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15224 === (8)))
{var inst_15198 = (state_15223[(13)]);var inst_15200 = cljs.core.chunked_seq_QMARK_.call(null,inst_15198);var state_15223__$1 = state_15223;if(inst_15200)
{var statearr_15247_15268 = state_15223__$1;(statearr_15247_15268[(1)] = (11));
} else
{var statearr_15248_15269 = state_15223__$1;(statearr_15248_15269[(1)] = (12));
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
});})(c__11457__auto__))
;return ((function (switch__11392__auto__,c__11457__auto__){
return (function() {
var state_machine__11393__auto__ = null;
var state_machine__11393__auto____0 = (function (){var statearr_15252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15252[(0)] = state_machine__11393__auto__);
(statearr_15252[(1)] = (1));
return statearr_15252;
});
var state_machine__11393__auto____1 = (function (state_15223){while(true){
var ret_value__11394__auto__ = (function (){try{while(true){
var result__11395__auto__ = switch__11392__auto__.call(null,state_15223);if(cljs.core.keyword_identical_QMARK_.call(null,result__11395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11395__auto__;
}
break;
}
}catch (e15253){if((e15253 instanceof Object))
{var ex__11396__auto__ = e15253;var statearr_15254_15270 = state_15223;(statearr_15254_15270[(5)] = ex__11396__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15223);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15253;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15271 = state_15223;
state_15223 = G__15271;
continue;
}
} else
{return ret_value__11394__auto__;
}
break;
}
});
state_machine__11393__auto__ = function(state_15223){
switch(arguments.length){
case 0:
return state_machine__11393__auto____0.call(this);
case 1:
return state_machine__11393__auto____1.call(this,state_15223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11393__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11393__auto____0;
state_machine__11393__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11393__auto____1;
return state_machine__11393__auto__;
})()
;})(switch__11392__auto__,c__11457__auto__))
})();var state__11459__auto__ = (function (){var statearr_15255 = f__11458__auto__.call(null);(statearr_15255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11457__auto__);
return statearr_15255;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11459__auto__);
});})(c__11457__auto__))
);
return c__11457__auto__;
});
servant.core.f__GT_key = (function f__GT_key(f){return cljs.core.ffirst.call(null,cljs.core.filter.call(null,(function (p1__15272_SHARP_){return cljs.core._EQ_.call(null,f,cljs.core.second.call(null,p1__15272_SHARP_));
}),cljs.core.deref.call(null,servant.worker.worker_fn_map)));
});
servant.core.standard_message = (function standard_message(worker,fn_key,args){return worker.postMessage((function (){var obj15276 = {"command":"channel","fn":fn_key,"args":cljs.core.clj__GT_js.call(null,args)};return obj15276;
})());
});
/**
* Post message by transferring context of the arraybuffers.
* The channel should be fed data like [[normal args] [arraybuffer1 arraybuffer2]].
* Tells the worker to expect to return an arraybuffer
*/
servant.core.array_buffer_message = (function array_buffer_message(worker,fn_key,args){var vec__15280 = args;var args__$1 = cljs.core.nth.call(null,vec__15280,(0),null);var arraybuffers = cljs.core.nth.call(null,vec__15280,(1),null);return worker.postMessage((function (){var obj15282 = {"command":"channel-arraybuffer","fn":fn_key,"args":cljs.core.clj__GT_js.call(null,args__$1)};return obj15282;
})(),cljs.core.clj__GT_js.call(null,arraybuffers));
});
/**
* Post message by transferring context of the arraybuffers.
* The channel should be fed data like [[arg1 arg2] [arraybuffer1 arraybuffer2]].
* Tells the worker to return normal data
*/
servant.core.array_buffer_message_standard_reply = (function array_buffer_message_standard_reply(worker,fn_key,args){var vec__15286 = args;var args__$1 = cljs.core.nth.call(null,vec__15286,(0),null);var arraybuffers = cljs.core.nth.call(null,vec__15286,(1),null);return worker.postMessage((function (){var obj15288 = {"command":"channel","fn":fn_key,"args":cljs.core.clj__GT_js.call(null,args__$1)};return obj15288;
})(),cljs.core.clj__GT_js.call(null,arraybuffers));
});
/**
* @param {...*} var_args
*/
servant.core.servant_thread_with_key = (function() { 
var servant_thread_with_key__delegate = function (servant_channel,post_message_fn,fn_key,args){var out_channel = cljs.core.async.chan.call(null,(1));var c__11457__auto___15356 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11457__auto___15356,out_channel){
return (function (){var f__11458__auto__ = (function (){var switch__11392__auto__ = ((function (c__11457__auto___15356,out_channel){
return (function (state_15330){var state_val_15331 = (state_15330[(1)]);if((state_val_15331 === (2)))
{var inst_15324 = (state_15330[(2)]);var inst_15325 = cljs.core.pr_str.call(null,fn_key);var inst_15326 = post_message_fn.call(null,inst_15324,inst_15325,args);var inst_15327 = (function (){var worker = inst_15324;return ((function (worker,inst_15324,inst_15325,inst_15326,state_val_15331,c__11457__auto___15356,out_channel){
return (function (p1__15289_SHARP_){var c__11457__auto____$1 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11457__auto____$1,worker,inst_15324,inst_15325,inst_15326,state_val_15331,c__11457__auto___15356,out_channel){
return (function (){var f__11458__auto__ = (function (){var switch__11392__auto__ = ((function (c__11457__auto____$1,worker,inst_15324,inst_15325,inst_15326,state_val_15331,c__11457__auto___15356,out_channel){
return (function (state_15338){var state_val_15339 = (state_15338[(1)]);if((state_val_15339 === (3)))
{var inst_15336 = (state_15338[(2)]);var state_15338__$1 = state_15338;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15338__$1,inst_15336);
} else
{if((state_val_15339 === (2)))
{var inst_15334 = (state_15338[(2)]);var state_15338__$1 = (function (){var statearr_15340 = state_15338;(statearr_15340[(7)] = inst_15334);
return statearr_15340;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15338__$1,(3),servant_channel,worker);
} else
{if((state_val_15339 === (1)))
{var inst_15332 = p1__15289_SHARP_.data;var state_15338__$1 = state_15338;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15338__$1,(2),out_channel,inst_15332);
} else
{return null;
}
}
}
});})(c__11457__auto____$1,worker,inst_15324,inst_15325,inst_15326,state_val_15331,c__11457__auto___15356,out_channel))
;return ((function (switch__11392__auto__,c__11457__auto____$1,worker,inst_15324,inst_15325,inst_15326,state_val_15331,c__11457__auto___15356,out_channel){
return (function() {
var state_machine__11393__auto__ = null;
var state_machine__11393__auto____0 = (function (){var statearr_15344 = [null,null,null,null,null,null,null,null];(statearr_15344[(0)] = state_machine__11393__auto__);
(statearr_15344[(1)] = (1));
return statearr_15344;
});
var state_machine__11393__auto____1 = (function (state_15338){while(true){
var ret_value__11394__auto__ = (function (){try{while(true){
var result__11395__auto__ = switch__11392__auto__.call(null,state_15338);if(cljs.core.keyword_identical_QMARK_.call(null,result__11395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11395__auto__;
}
break;
}
}catch (e15345){if((e15345 instanceof Object))
{var ex__11396__auto__ = e15345;var statearr_15346_15357 = state_15338;(statearr_15346_15357[(5)] = ex__11396__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15338);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15345;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15358 = state_15338;
state_15338 = G__15358;
continue;
}
} else
{return ret_value__11394__auto__;
}
break;
}
});
state_machine__11393__auto__ = function(state_15338){
switch(arguments.length){
case 0:
return state_machine__11393__auto____0.call(this);
case 1:
return state_machine__11393__auto____1.call(this,state_15338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11393__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11393__auto____0;
state_machine__11393__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11393__auto____1;
return state_machine__11393__auto__;
})()
;})(switch__11392__auto__,c__11457__auto____$1,worker,inst_15324,inst_15325,inst_15326,state_val_15331,c__11457__auto___15356,out_channel))
})();var state__11459__auto__ = (function (){var statearr_15347 = f__11458__auto__.call(null);(statearr_15347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11457__auto____$1);
return statearr_15347;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11459__auto__);
});})(c__11457__auto____$1,worker,inst_15324,inst_15325,inst_15326,state_val_15331,c__11457__auto___15356,out_channel))
);
return c__11457__auto____$1;
});
;})(worker,inst_15324,inst_15325,inst_15326,state_val_15331,c__11457__auto___15356,out_channel))
})();var inst_15328 = inst_15324.addEventListener("message",inst_15327);var state_15330__$1 = (function (){var statearr_15348 = state_15330;(statearr_15348[(7)] = inst_15326);
return statearr_15348;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15330__$1,inst_15328);
} else
{if((state_val_15331 === (1)))
{var state_15330__$1 = state_15330;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15330__$1,(2),servant_channel);
} else
{return null;
}
}
});})(c__11457__auto___15356,out_channel))
;return ((function (switch__11392__auto__,c__11457__auto___15356,out_channel){
return (function() {
var state_machine__11393__auto__ = null;
var state_machine__11393__auto____0 = (function (){var statearr_15352 = [null,null,null,null,null,null,null,null];(statearr_15352[(0)] = state_machine__11393__auto__);
(statearr_15352[(1)] = (1));
return statearr_15352;
});
var state_machine__11393__auto____1 = (function (state_15330){while(true){
var ret_value__11394__auto__ = (function (){try{while(true){
var result__11395__auto__ = switch__11392__auto__.call(null,state_15330);if(cljs.core.keyword_identical_QMARK_.call(null,result__11395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11395__auto__;
}
break;
}
}catch (e15353){if((e15353 instanceof Object))
{var ex__11396__auto__ = e15353;var statearr_15354_15359 = state_15330;(statearr_15354_15359[(5)] = ex__11396__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15330);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15353;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15360 = state_15330;
state_15330 = G__15360;
continue;
}
} else
{return ret_value__11394__auto__;
}
break;
}
});
state_machine__11393__auto__ = function(state_15330){
switch(arguments.length){
case 0:
return state_machine__11393__auto____0.call(this);
case 1:
return state_machine__11393__auto____1.call(this,state_15330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11393__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11393__auto____0;
state_machine__11393__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11393__auto____1;
return state_machine__11393__auto__;
})()
;})(switch__11392__auto__,c__11457__auto___15356,out_channel))
})();var state__11459__auto__ = (function (){var statearr_15355 = f__11458__auto__.call(null);(statearr_15355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11457__auto___15356);
return statearr_15355;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11459__auto__);
});})(c__11457__auto___15356,out_channel))
);
return out_channel;
};
var servant_thread_with_key = function (servant_channel,post_message_fn,fn_key,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return servant_thread_with_key__delegate.call(this,servant_channel,post_message_fn,fn_key,args);};
servant_thread_with_key.cljs$lang$maxFixedArity = 3;
servant_thread_with_key.cljs$lang$applyTo = (function (arglist__15361){
var servant_channel = cljs.core.first(arglist__15361);
arglist__15361 = cljs.core.next(arglist__15361);
var post_message_fn = cljs.core.first(arglist__15361);
arglist__15361 = cljs.core.next(arglist__15361);
var fn_key = cljs.core.first(arglist__15361);
var args = cljs.core.rest(arglist__15361);
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
servant_thread.cljs$lang$applyTo = (function (arglist__15362){
var servant_channel = cljs.core.first(arglist__15362);
arglist__15362 = cljs.core.next(arglist__15362);
var post_message_fn = cljs.core.first(arglist__15362);
arglist__15362 = cljs.core.next(arglist__15362);
var f = cljs.core.first(arglist__15362);
var args = cljs.core.rest(arglist__15362);
return servant_thread__delegate(servant_channel,post_message_fn,f,args);
});
servant_thread.cljs$core$IFn$_invoke$arity$variadic = servant_thread__delegate;
return servant_thread;
})()
;

//# sourceMappingURL=core.js.map