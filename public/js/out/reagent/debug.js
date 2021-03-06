// Compiled by ClojureScript 1.9.36 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__24536__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__24536 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24537__i = 0, G__24537__a = new Array(arguments.length -  0);
while (G__24537__i < G__24537__a.length) {G__24537__a[G__24537__i] = arguments[G__24537__i + 0]; ++G__24537__i;}
  args = new cljs.core.IndexedSeq(G__24537__a,0);
} 
return G__24536__delegate.call(this,args);};
G__24536.cljs$lang$maxFixedArity = 0;
G__24536.cljs$lang$applyTo = (function (arglist__24538){
var args = cljs.core.seq(arglist__24538);
return G__24536__delegate(args);
});
G__24536.cljs$core$IFn$_invoke$arity$variadic = G__24536__delegate;
return G__24536;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__24539__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__24539 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24540__i = 0, G__24540__a = new Array(arguments.length -  0);
while (G__24540__i < G__24540__a.length) {G__24540__a[G__24540__i] = arguments[G__24540__i + 0]; ++G__24540__i;}
  args = new cljs.core.IndexedSeq(G__24540__a,0);
} 
return G__24539__delegate.call(this,args);};
G__24539.cljs$lang$maxFixedArity = 0;
G__24539.cljs$lang$applyTo = (function (arglist__24541){
var args = cljs.core.seq(arglist__24541);
return G__24539__delegate(args);
});
G__24539.cljs$core$IFn$_invoke$arity$variadic = G__24539__delegate;
return G__24539;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map