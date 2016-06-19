// Compiled by ClojureScript 1.9.36 {}
goog.provide('frontend.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"jobs","jobs",-313607120),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.vals.call(null,new cljs.core.Keyword(null,"jobs","jobs",-313607120).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"section","section",-300141526),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));

//# sourceMappingURL=subs.js.map