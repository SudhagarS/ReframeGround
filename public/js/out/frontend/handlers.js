// Compiled by ClojureScript 1.9.36 {}
goog.provide('frontend.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"section","section",-300141526),"Play time",new cljs.core.Keyword(null,"jobs","jobs",-313607120),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"title","title",636505583),"Comedy",new cljs.core.Keyword(null,"openings","openings",801340570),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"title","title",636505583),"Friends"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"title","title",636505583),"Modern Family"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"title","title",636505583),"Crime",new cljs.core.Keyword(null,"openings","openings",801340570),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"title","title",636505583),"Breaking bad"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"title","title",636505583),"Narcos"], null)], null)], null)], null)], null);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"save-category","save-category",-1229216089),(function (db,p__33411){
var vec__33412 = p__33411;
var _ = cljs.core.nth.call(null,vec__33412,(0),null);
var new_category = cljs.core.nth.call(null,vec__33412,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jobs","jobs",-313607120)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.count.call(null,new cljs.core.Keyword(null,"jobs","jobs",-313607120).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.Keyword(null,"title","title",636505583),new_category,new cljs.core.Keyword(null,"openings","openings",801340570),cljs.core.PersistentVector.EMPTY], null));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"save-opening","save-opening",-1781695025),(function (db,p__33415){
var vec__33416 = p__33415;
var _ = cljs.core.nth.call(null,vec__33416,(0),null);
var category_id = cljs.core.nth.call(null,vec__33416,(1),null);
var new_opening = cljs.core.nth.call(null,vec__33416,(2),null);
var cur_opening_count = cljs.core.count.call(null,new cljs.core.Keyword(null,"openings","openings",801340570).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"jobs","jobs",-313607120).cljs$core$IFn$_invoke$arity$1(db),category_id)));
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jobs","jobs",-313607120),category_id,new cljs.core.Keyword(null,"openings","openings",801340570)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cur_opening_count,new cljs.core.Keyword(null,"title","title",636505583),new_opening], null));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"edit-category-title","edit-category-title",2048997575),(function (db,p__33419){
var vec__33420 = p__33419;
var _ = cljs.core.nth.call(null,vec__33420,(0),null);
var category_id = cljs.core.nth.call(null,vec__33420,(1),null);
var new_title = cljs.core.nth.call(null,vec__33420,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jobs","jobs",-313607120),category_id,new cljs.core.Keyword(null,"title","title",636505583)], null),new_title);
}));

//# sourceMappingURL=handlers.js.map