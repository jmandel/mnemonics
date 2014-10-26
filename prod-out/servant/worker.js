// Compiled by ClojureScript 0.0-2356
goog.provide('servant.worker');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('cljs.core.async');
servant.worker.worker_fn_map = (function (){var G__22433 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22433) : cljs.core.atom.call(null,G__22433));
})();
servant.worker.register_servant_fn = (function register_servant_fn(fn_name,f){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(servant.worker.worker_fn_map,cljs.core.assoc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fn_name),f);
});
servant.worker.run_function_name = (function run_function_name(message_data){var fn_key = cljs.reader.read_string((message_data["fn"]));var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__22435 = servant.worker.worker_fn_map;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22435) : cljs.core.deref.call(null,G__22435));
})(),fn_key);var args = (message_data["args"]);return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
});
/**
* In order to send back an array buffer, your function should return
* a vector with the result as the first item and the arraybuffers to transfer as the second.
* an array of array buffers
*/
servant.worker.post_array_buffer = (function post_array_buffer(p__22436){var vec__22438 = p__22436;var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22438,(0),null);var arraybuffers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22438,(1),null);return self.postMessage(result,cljs.core.clj__GT_js(arraybuffers));
});
servant.worker.decode_message = (function decode_message(event){var pred__22446 = cljs.core._EQ_;var expr__22447 = (event.data["command"]);if(cljs.core.truth_((function (){var G__22449 = "channel";var G__22450 = expr__22447;return (pred__22446.cljs$core$IFn$_invoke$arity$2 ? pred__22446.cljs$core$IFn$_invoke$arity$2(G__22449,G__22450) : pred__22446.call(null,G__22449,G__22450));
})()))
{return self.postMessage(servant.worker.run_function_name(event.data));
} else
{if(cljs.core.truth_((function (){var G__22451 = "channel-arraybuffer";var G__22452 = expr__22447;return (pred__22446.cljs$core$IFn$_invoke$arity$2 ? pred__22446.cljs$core$IFn$_invoke$arity$2(G__22451,G__22452) : pred__22446.call(null,G__22451,G__22452));
})()))
{return servant.worker.post_array_buffer(servant.worker.run_function_name(event.data));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__22447))));
}
}
});
servant.worker.bootstrap = (function bootstrap(){return self.onmessage = servant.worker.decode_message;
});
