// Compiled by ClojureScript 1.9.36 {}
goog.provide('frontend.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('frontend.views');
goog.require('frontend.handlers');
goog.require('frontend.subs');
goog.require('goog.dom');
cljs.core.enable_console_print_BANG_.call(null);
frontend.core.mount_root = (function frontend$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.views.jobs_page], null),document.getElementById("app"));
});
frontend.core.init_BANG_ = (function frontend$core$init_BANG_(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578)], null));

return frontend.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map