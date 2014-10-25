goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.object', 'goog.string.StringBuffer', 'goog.array']);
goog.addDependency("../major_system/combinatorics.js", ['major_system.combinatorics'], ['cljs.core']);
goog.addDependency("../cljs/nodejs.js", ['cljs.nodejs'], ['cljs.core']);
goog.addDependency("../clojure/string.js", ['clojure.string'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer']);
goog.addDependency("../cljs/reader.js", ['cljs.reader'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer']);
goog.addDependency("../major_system/browser.js", ['major_system.browser'], ['goog.net.XhrIo', 'cljs.core', 'major_system.combinatorics', 'goog.events.EventType', 'cljs.nodejs', 'clojure.string', 'cljs.reader']);
goog.addDependency("../major_system/core.js", ['major_system.core'], ['cljs.core', 'major_system.combinatorics', 'cljs.nodejs', 'clojure.string', 'cljs.reader']);