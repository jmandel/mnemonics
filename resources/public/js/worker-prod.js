this.CLOSURE_BASE_PATH = "/js/compiled/out/goog/";

this.CLOSURE_IMPORT_SCRIPT = (function(global) {
  return function(src) {
    global['importScripts'](src);
    return true;
  };
})(this);
importScripts('https://fb.me/react-0.11.1.js');
importScripts('../major_system_prod.js');
console.log('in worker.js');
