// Compiled by ClojureScript 1.9.36 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__21674__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_25005 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_25005){
return (function (){
var _STAR_always_update_STAR_25006 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_25006;
}});})(_STAR_always_update_STAR_25005))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_25005;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args25007 = [];
var len__22749__auto___25010 = arguments.length;
var i__22750__auto___25011 = (0);
while(true){
if((i__22750__auto___25011 < len__22749__auto___25010)){
args25007.push((arguments[i__22750__auto___25011]));

var G__25012 = (i__22750__auto___25011 + (1));
i__22750__auto___25011 = G__25012;
continue;
} else {
}
break;
}

var G__25009 = args25007.length;
switch (G__25009) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25007.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__25018_25022 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__25019_25023 = null;
var count__25020_25024 = (0);
var i__25021_25025 = (0);
while(true){
if((i__25021_25025 < count__25020_25024)){
var v_25026 = cljs.core._nth.call(null,chunk__25019_25023,i__25021_25025);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_25026);

var G__25027 = seq__25018_25022;
var G__25028 = chunk__25019_25023;
var G__25029 = count__25020_25024;
var G__25030 = (i__25021_25025 + (1));
seq__25018_25022 = G__25027;
chunk__25019_25023 = G__25028;
count__25020_25024 = G__25029;
i__25021_25025 = G__25030;
continue;
} else {
var temp__4657__auto___25031 = cljs.core.seq.call(null,seq__25018_25022);
if(temp__4657__auto___25031){
var seq__25018_25032__$1 = temp__4657__auto___25031;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25018_25032__$1)){
var c__22485__auto___25033 = cljs.core.chunk_first.call(null,seq__25018_25032__$1);
var G__25034 = cljs.core.chunk_rest.call(null,seq__25018_25032__$1);
var G__25035 = c__22485__auto___25033;
var G__25036 = cljs.core.count.call(null,c__22485__auto___25033);
var G__25037 = (0);
seq__25018_25022 = G__25034;
chunk__25019_25023 = G__25035;
count__25020_25024 = G__25036;
i__25021_25025 = G__25037;
continue;
} else {
var v_25038 = cljs.core.first.call(null,seq__25018_25032__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_25038);

var G__25039 = cljs.core.next.call(null,seq__25018_25032__$1);
var G__25040 = null;
var G__25041 = (0);
var G__25042 = (0);
seq__25018_25022 = G__25039;
chunk__25019_25023 = G__25040;
count__25020_25024 = G__25041;
i__25021_25025 = G__25042;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map