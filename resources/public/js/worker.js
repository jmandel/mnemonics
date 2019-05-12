this.CLOSURE_BASE_PATH = "/js/compiled/out/goog/";


this.CLOSURE_IMPORT_SCRIPT = (function(global) {
  return function(src) {
    global['importScripts'](src);
    return true;
  };
})(this);
importScripts('https://fb.me/react-0.11.1.js');
importScripts('/js/compiled/out/goog/base.js');
importScripts('/js/compiled/major-web.js');  
console.log('in worker.js');
goog.require("major_system.browser");
