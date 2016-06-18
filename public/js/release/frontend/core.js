// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('frontend.core');
goog.require('cljs.core');
goog.require('reagent.core');
frontend.core.home_page = (function frontend$core$home_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Welcome to Reagent"], null)], null);
});
frontend.core.mount_root = (function frontend$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.home_page], null),document.getElementById("app"));
});
frontend.core.init_BANG_ = (function frontend$core$init_BANG_(){
return frontend.core.mount_root();
});
