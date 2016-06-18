// Compiled by ClojureScript 1.9.36 {}
goog.provide('frontend.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('frontend.subs');
goog.require('frontend.handlers');
goog.require('goog.dom');
frontend.views.opening_component = (function frontend$views$opening_component(opening){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"opening"], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(opening)], null);
});
frontend.views.opening_compose = (function frontend$views$opening_compose(category_id){
var val = reagent.core.atom.call(null,"");
var save = ((function (val){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-opening","save-opening",-1781695025),category_id,cljs.core.deref.call(null,val)], null));

return cljs.core.reset_BANG_.call(null,val,"");
});})(val))
;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (val,save){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"opening-compose"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"opening",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,val),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (val,save){
return (function (p1__33425_SHARP_){
return cljs.core.reset_BANG_.call(null,val,p1__33425_SHARP_.target.value);
});})(val,save))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (val,save){
return (function (p1__33426_SHARP_){
var G__33428 = p1__33426_SHARP_.which;
switch (G__33428) {
case (13):
return save.call(null);

break;
default:
return null;

}
});})(val,save))
], null)], null)], null);
});})(val,save))
], null));
});
frontend.views.category_component = (function frontend$views$category_component(category){
var editing = reagent.core.atom.call(null,false);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(category);
var title = reagent.core.atom.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(category));
var save = ((function (editing,id,title){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edit-category-title","edit-category-title",2048997575),id,cljs.core.deref.call(null,title)], null));

return cljs.core.reset_BANG_.call(null,editing,false);
});})(editing,id,title))
;
return ((function (editing,id,title,save){
return (function (category__$1){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"category"], null),(cljs.core.truth_(cljs.core.deref.call(null,editing))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,title),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (editing,id,title,save){
return (function (p1__33430_SHARP_){
return cljs.core.reset_BANG_.call(null,title,p1__33430_SHARP_.target.value);
});})(editing,id,title,save))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (editing,id,title,save){
return (function (p1__33431_SHARP_){
var G__33437 = p1__33431_SHARP_.which;
switch (G__33437) {
case (13):
return save.call(null);

break;
default:
return null;

}
});})(editing,id,title,save))
], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"category-title text-primary"], null),[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(category__$1)),cljs.core.str(" ")].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-success",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (editing,id,title,save){
return (function (){
return cljs.core.reset_BANG_.call(null,editing,true);
});})(editing,id,title,save))
], null),"Edit"], null),(function (){var iter__22454__auto__ = ((function (editing,id,title,save){
return (function frontend$views$category_component_$_iter__33438(s__33439){
return (new cljs.core.LazySeq(null,((function (editing,id,title,save){
return (function (){
var s__33439__$1 = s__33439;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33439__$1);
if(temp__4657__auto__){
var s__33439__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33439__$2)){
var c__22452__auto__ = cljs.core.chunk_first.call(null,s__33439__$2);
var size__22453__auto__ = cljs.core.count.call(null,c__22452__auto__);
var b__33441 = cljs.core.chunk_buffer.call(null,size__22453__auto__);
if((function (){var i__33440 = (0);
while(true){
if((i__33440 < size__22453__auto__)){
var opening = cljs.core._nth.call(null,c__22452__auto__,i__33440);
cljs.core.chunk_append.call(null,b__33441,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.views.opening_component,opening], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(opening)], null)));

var G__33443 = (i__33440 + (1));
i__33440 = G__33443;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33441),frontend$views$category_component_$_iter__33438.call(null,cljs.core.chunk_rest.call(null,s__33439__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33441),null);
}
} else {
var opening = cljs.core.first.call(null,s__33439__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.views.opening_component,opening], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(opening)], null)),frontend$views$category_component_$_iter__33438.call(null,cljs.core.rest.call(null,s__33439__$2)));
}
} else {
return null;
}
break;
}
});})(editing,id,title,save))
,null,null));
});})(editing,id,title,save))
;
return iter__22454__auto__.call(null,new cljs.core.Keyword(null,"openings","openings",801340570).cljs$core$IFn$_invoke$arity$1(category__$1));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.views.opening_compose,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(category__$1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null)], null);
});
;})(editing,id,title,save))
});
frontend.views.category_compose = (function frontend$views$category_compose(){
var val = reagent.core.atom.call(null,"");
var save = ((function (val){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-category","save-category",-1229216089),cljs.core.deref.call(null,val)], null));
});})(val))
;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (val,save){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"category-compose"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"category",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,val),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (val,save){
return (function (p1__33444_SHARP_){
return cljs.core.reset_BANG_.call(null,val,p1__33444_SHARP_.target.value);
});})(val,save))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (val,save){
return (function (p1__33445_SHARP_){
var G__33447 = p1__33445_SHARP_.which;
switch (G__33447) {
case (13):
save.call(null);

return cljs.core.reset_BANG_.call(null,val,"");

break;
default:
return null;

}
});})(val,save))
], null)], null)], null);
});})(val,save))
], null));
});
frontend.views.jobs_page = (function frontend$views$jobs_page(){
var jobs = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jobs","jobs",-313607120)], null));
var section = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"jobs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),cljs.core.deref.call(null,section)], null),(function (){var iter__22454__auto__ = ((function (jobs,section){
return (function frontend$views$jobs_page_$_iter__33453(s__33454){
return (new cljs.core.LazySeq(null,((function (jobs,section){
return (function (){
var s__33454__$1 = s__33454;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33454__$1);
if(temp__4657__auto__){
var s__33454__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33454__$2)){
var c__22452__auto__ = cljs.core.chunk_first.call(null,s__33454__$2);
var size__22453__auto__ = cljs.core.count.call(null,c__22452__auto__);
var b__33456 = cljs.core.chunk_buffer.call(null,size__22453__auto__);
if((function (){var i__33455 = (0);
while(true){
if((i__33455 < size__22453__auto__)){
var category = cljs.core._nth.call(null,c__22452__auto__,i__33455);
cljs.core.chunk_append.call(null,b__33456,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.views.category_component,category], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(category)], null)));

var G__33457 = (i__33455 + (1));
i__33455 = G__33457;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33456),frontend$views$jobs_page_$_iter__33453.call(null,cljs.core.chunk_rest.call(null,s__33454__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33456),null);
}
} else {
var category = cljs.core.first.call(null,s__33454__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.views.category_component,category], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(category)], null)),frontend$views$jobs_page_$_iter__33453.call(null,cljs.core.rest.call(null,s__33454__$2)));
}
} else {
return null;
}
break;
}
});})(jobs,section))
,null,null));
});})(jobs,section))
;
return iter__22454__auto__.call(null,cljs.core.deref.call(null,jobs));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.views.category_compose], null)], null);
});

//# sourceMappingURL=views.js.map