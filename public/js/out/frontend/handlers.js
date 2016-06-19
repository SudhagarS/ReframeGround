// Compiled by ClojureScript 1.9.36 {}
goog.provide('frontend.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
frontend.handlers.get_next_id = (function frontend$handlers$get_next_id(coll){
return cljs.core.fnil.call(null,cljs.core.inc,(0)).call(null,cljs.core.last.call(null,cljs.core.keys.call(null,coll)));
});
frontend.handlers.remove_indexes = (function frontend$handlers$remove_indexes(v,indexes){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.map_indexed.call(null,cljs.core.vector),cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.set.call(null,indexes),cljs.core.first)),cljs.core.map.call(null,cljs.core.second)),v);
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"section","section",-300141526),"Play time",new cljs.core.Keyword(null,"jobs","jobs",-313607120),cljs.core.sorted_map.call(null)], null);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"save-category","save-category",-1229216089),(function (db,p__35315){
var vec__35316 = p__35315;
var _ = cljs.core.nth.call(null,vec__35316,(0),null);
var new_category = cljs.core.nth.call(null,vec__35316,(1),null);
var id = frontend.handlers.get_next_id.call(null,new cljs.core.Keyword(null,"jobs","jobs",-313607120).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jobs","jobs",-313607120)], null),cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),new_category,new cljs.core.Keyword(null,"openings","openings",801340570),cljs.core.sorted_map.call(null)], null));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"save-opening","save-opening",-1781695025),(function (db,p__35319){
var vec__35320 = p__35319;
var _ = cljs.core.nth.call(null,vec__35320,(0),null);
var category_id = cljs.core.nth.call(null,vec__35320,(1),null);
var new_opening = cljs.core.nth.call(null,vec__35320,(2),null);
var id = frontend.handlers.get_next_id.call(null,new cljs.core.Keyword(null,"openings","openings",801340570).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"jobs","jobs",-313607120).cljs$core$IFn$_invoke$arity$1(db),category_id)));
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jobs","jobs",-313607120),category_id,new cljs.core.Keyword(null,"openings","openings",801340570)], null),cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),new_opening], null));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"edit-category-title","edit-category-title",2048997575),(function (db,p__35323){
var vec__35324 = p__35323;
var _ = cljs.core.nth.call(null,vec__35324,(0),null);
var category_id = cljs.core.nth.call(null,vec__35324,(1),null);
var new_title = cljs.core.nth.call(null,vec__35324,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jobs","jobs",-313607120),category_id,new cljs.core.Keyword(null,"title","title",636505583)], null),new_title);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"remove-category","remove-category",-1588623820),(function (db,p__35327){
var vec__35328 = p__35327;
var _ = cljs.core.nth.call(null,vec__35328,(0),null);
var category_id = cljs.core.nth.call(null,vec__35328,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jobs","jobs",-313607120)], null),cljs.core.dissoc,category_id);
}));

//# sourceMappingURL=handlers.js.map