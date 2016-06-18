// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31438){
var map__31463 = p__31438;
var map__31463__$1 = ((((!((map__31463 == null)))?((((map__31463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31463):map__31463);
var m = map__31463__$1;
var n = cljs.core.get.call(null,map__31463__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31463__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31465_31487 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31466_31488 = null;
var count__31467_31489 = (0);
var i__31468_31490 = (0);
while(true){
if((i__31468_31490 < count__31467_31489)){
var f_31491 = cljs.core._nth.call(null,chunk__31466_31488,i__31468_31490);
cljs.core.println.call(null,"  ",f_31491);

var G__31492 = seq__31465_31487;
var G__31493 = chunk__31466_31488;
var G__31494 = count__31467_31489;
var G__31495 = (i__31468_31490 + (1));
seq__31465_31487 = G__31492;
chunk__31466_31488 = G__31493;
count__31467_31489 = G__31494;
i__31468_31490 = G__31495;
continue;
} else {
var temp__4657__auto___31496 = cljs.core.seq.call(null,seq__31465_31487);
if(temp__4657__auto___31496){
var seq__31465_31497__$1 = temp__4657__auto___31496;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31465_31497__$1)){
var c__22485__auto___31498 = cljs.core.chunk_first.call(null,seq__31465_31497__$1);
var G__31499 = cljs.core.chunk_rest.call(null,seq__31465_31497__$1);
var G__31500 = c__22485__auto___31498;
var G__31501 = cljs.core.count.call(null,c__22485__auto___31498);
var G__31502 = (0);
seq__31465_31487 = G__31499;
chunk__31466_31488 = G__31500;
count__31467_31489 = G__31501;
i__31468_31490 = G__31502;
continue;
} else {
var f_31503 = cljs.core.first.call(null,seq__31465_31497__$1);
cljs.core.println.call(null,"  ",f_31503);

var G__31504 = cljs.core.next.call(null,seq__31465_31497__$1);
var G__31505 = null;
var G__31506 = (0);
var G__31507 = (0);
seq__31465_31487 = G__31504;
chunk__31466_31488 = G__31505;
count__31467_31489 = G__31506;
i__31468_31490 = G__31507;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31508 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21674__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31508);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31508)))?cljs.core.second.call(null,arglists_31508):arglists_31508));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31469_31509 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31470_31510 = null;
var count__31471_31511 = (0);
var i__31472_31512 = (0);
while(true){
if((i__31472_31512 < count__31471_31511)){
var vec__31473_31513 = cljs.core._nth.call(null,chunk__31470_31510,i__31472_31512);
var name_31514 = cljs.core.nth.call(null,vec__31473_31513,(0),null);
var map__31476_31515 = cljs.core.nth.call(null,vec__31473_31513,(1),null);
var map__31476_31516__$1 = ((((!((map__31476_31515 == null)))?((((map__31476_31515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31476_31515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31476_31515):map__31476_31515);
var doc_31517 = cljs.core.get.call(null,map__31476_31516__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31518 = cljs.core.get.call(null,map__31476_31516__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31514);

cljs.core.println.call(null," ",arglists_31518);

if(cljs.core.truth_(doc_31517)){
cljs.core.println.call(null," ",doc_31517);
} else {
}

var G__31519 = seq__31469_31509;
var G__31520 = chunk__31470_31510;
var G__31521 = count__31471_31511;
var G__31522 = (i__31472_31512 + (1));
seq__31469_31509 = G__31519;
chunk__31470_31510 = G__31520;
count__31471_31511 = G__31521;
i__31472_31512 = G__31522;
continue;
} else {
var temp__4657__auto___31523 = cljs.core.seq.call(null,seq__31469_31509);
if(temp__4657__auto___31523){
var seq__31469_31524__$1 = temp__4657__auto___31523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31469_31524__$1)){
var c__22485__auto___31525 = cljs.core.chunk_first.call(null,seq__31469_31524__$1);
var G__31526 = cljs.core.chunk_rest.call(null,seq__31469_31524__$1);
var G__31527 = c__22485__auto___31525;
var G__31528 = cljs.core.count.call(null,c__22485__auto___31525);
var G__31529 = (0);
seq__31469_31509 = G__31526;
chunk__31470_31510 = G__31527;
count__31471_31511 = G__31528;
i__31472_31512 = G__31529;
continue;
} else {
var vec__31478_31530 = cljs.core.first.call(null,seq__31469_31524__$1);
var name_31531 = cljs.core.nth.call(null,vec__31478_31530,(0),null);
var map__31481_31532 = cljs.core.nth.call(null,vec__31478_31530,(1),null);
var map__31481_31533__$1 = ((((!((map__31481_31532 == null)))?((((map__31481_31532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31481_31532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31481_31532):map__31481_31532);
var doc_31534 = cljs.core.get.call(null,map__31481_31533__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31535 = cljs.core.get.call(null,map__31481_31533__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31531);

cljs.core.println.call(null," ",arglists_31535);

if(cljs.core.truth_(doc_31534)){
cljs.core.println.call(null," ",doc_31534);
} else {
}

var G__31536 = cljs.core.next.call(null,seq__31469_31524__$1);
var G__31537 = null;
var G__31538 = (0);
var G__31539 = (0);
seq__31469_31509 = G__31536;
chunk__31470_31510 = G__31537;
count__31471_31511 = G__31538;
i__31472_31512 = G__31539;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var specs = cljs.spec.fn_specs.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,cljs.core.vals.call(null,specs)))){
cljs.core.print.call(null,"Spec");

return cljs.core.run_BANG_.call(null,((function (specs,map__31463,map__31463__$1,m,n,nm){
return (function (p__31483){
var vec__31484 = p__31483;
var role = cljs.core.nth.call(null,vec__31484,(0),null);
var spec = cljs.core.nth.call(null,vec__31484,(1),null);
if(cljs.core.truth_((function (){var and__21662__auto__ = spec;
if(cljs.core.truth_(and__21662__auto__)){
return !(cljs.core._EQ_.call(null,spec,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582)));
} else {
return and__21662__auto__;
}
})())){
return cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec));
} else {
return null;
}
});})(specs,map__31463,map__31463__$1,m,n,nm))
,specs);
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map