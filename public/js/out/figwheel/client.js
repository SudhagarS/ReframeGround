// Compiled by ClojureScript 1.9.36 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-SNAPSHOT";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args31986 = [];
var len__22749__auto___31989 = arguments.length;
var i__22750__auto___31990 = (0);
while(true){
if((i__22750__auto___31990 < len__22749__auto___31989)){
args31986.push((arguments[i__22750__auto___31990]));

var G__31991 = (i__22750__auto___31990 + (1));
i__22750__auto___31990 = G__31991;
continue;
} else {
}
break;
}

var G__31988 = args31986.length;
switch (G__31988) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31986.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__22756__auto__ = [];
var len__22749__auto___31994 = arguments.length;
var i__22750__auto___31995 = (0);
while(true){
if((i__22750__auto___31995 < len__22749__auto___31994)){
args__22756__auto__.push((arguments[i__22750__auto___31995]));

var G__31996 = (i__22750__auto___31995 + (1));
i__22750__auto___31995 = G__31996;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31993){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31993));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__22756__auto__ = [];
var len__22749__auto___31998 = arguments.length;
var i__22750__auto___31999 = (0);
while(true){
if((i__22750__auto___31999 < len__22749__auto___31998)){
args__22756__auto__.push((arguments[i__22750__auto___31999]));

var G__32000 = (i__22750__auto___31999 + (1));
i__22750__auto___31999 = G__32000;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31997){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31997));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__32001 = cljs.core._EQ_;
var expr__32002 = (function (){var or__21674__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e32005){if((e32005 instanceof Error)){
var e = e32005;
return false;
} else {
throw e32005;

}
}})();
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__32001.call(null,"true",expr__32002))){
return true;
} else {
if(cljs.core.truth_(pred__32001.call(null,"false",expr__32002))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__32002)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e32007){if((e32007 instanceof Error)){
var e = e32007;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e32007;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__32008){
var map__32011 = p__32008;
var map__32011__$1 = ((((!((map__32011 == null)))?((((map__32011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32011):map__32011);
var message = cljs.core.get.call(null,map__32011__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__32011__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__21674__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__21662__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__21662__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__21662__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__26336__auto___32173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26336__auto___32173,ch){
return (function (){
var f__26337__auto__ = (function (){var switch__26224__auto__ = ((function (c__26336__auto___32173,ch){
return (function (state_32142){
var state_val_32143 = (state_32142[(1)]);
if((state_val_32143 === (7))){
var inst_32138 = (state_32142[(2)]);
var state_32142__$1 = state_32142;
var statearr_32144_32174 = state_32142__$1;
(statearr_32144_32174[(2)] = inst_32138);

(statearr_32144_32174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32143 === (1))){
var state_32142__$1 = state_32142;
var statearr_32145_32175 = state_32142__$1;
(statearr_32145_32175[(2)] = null);

(statearr_32145_32175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32143 === (4))){
var inst_32095 = (state_32142[(7)]);
var inst_32095__$1 = (state_32142[(2)]);
var state_32142__$1 = (function (){var statearr_32146 = state_32142;
(statearr_32146[(7)] = inst_32095__$1);

return statearr_32146;
})();
if(cljs.core.truth_(inst_32095__$1)){
var statearr_32147_32176 = state_32142__$1;
(statearr_32147_32176[(1)] = (5));

} else {
var statearr_32148_32177 = state_32142__$1;
(statearr_32148_32177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32143 === (15))){
var inst_32102 = (state_32142[(8)]);
var inst_32117 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32102);
var inst_32118 = cljs.core.first.call(null,inst_32117);
var inst_32119 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32118);
var inst_32120 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_32119)].join('');
var inst_32121 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_32120);
var state_32142__$1 = state_32142;
var statearr_32149_32178 = state_32142__$1;
(statearr_32149_32178[(2)] = inst_32121);

(statearr_32149_32178[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32143 === (13))){
var inst_32126 = (state_32142[(2)]);
var state_32142__$1 = state_32142;
var statearr_32150_32179 = state_32142__$1;
(statearr_32150_32179[(2)] = inst_32126);

(statearr_32150_32179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32143 === (6))){
var state_32142__$1 = state_32142;
var statearr_32151_32180 = state_32142__$1;
(statearr_32151_32180[(2)] = null);

(statearr_32151_32180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32143 === (17))){
var inst_32124 = (state_32142[(2)]);
var state_32142__$1 = state_32142;
var statearr_32152_32181 = state_32142__$1;
(statearr_32152_32181[(2)] = inst_32124);

(statearr_32152_32181[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32143 === (3))){
var inst_32140 = (state_32142[(2)]);
var state_32142__$1 = state_32142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32142__$1,inst_32140);
} else {
if((state_val_32143 === (12))){
var inst_32101 = (state_32142[(9)]);
var inst_32115 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_32101,opts);
var state_32142__$1 = state_32142;
if(cljs.core.truth_(inst_32115)){
var statearr_32153_32182 = state_32142__$1;
(statearr_32153_32182[(1)] = (15));

} else {
var statearr_32154_32183 = state_32142__$1;
(statearr_32154_32183[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32143 === (2))){
var state_32142__$1 = state_32142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32142__$1,(4),ch);
} else {
if((state_val_32143 === (11))){
var inst_32102 = (state_32142[(8)]);
var inst_32107 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32108 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_32102);
var inst_32109 = cljs.core.async.timeout.call(null,(1000));
var inst_32110 = [inst_32108,inst_32109];
var inst_32111 = (new cljs.core.PersistentVector(null,2,(5),inst_32107,inst_32110,null));
var state_32142__$1 = state_32142;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32142__$1,(14),inst_32111);
} else {
if((state_val_32143 === (9))){
var inst_32102 = (state_32142[(8)]);
var inst_32128 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_32129 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32102);
var inst_32130 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32129);
var inst_32131 = [cljs.core.str("Not loading: "),cljs.core.str(inst_32130)].join('');
var inst_32132 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_32131);
var state_32142__$1 = (function (){var statearr_32155 = state_32142;
(statearr_32155[(10)] = inst_32128);

return statearr_32155;
})();
var statearr_32156_32184 = state_32142__$1;
(statearr_32156_32184[(2)] = inst_32132);

(statearr_32156_32184[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32143 === (5))){
var inst_32095 = (state_32142[(7)]);
var inst_32097 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_32098 = (new cljs.core.PersistentArrayMap(null,2,inst_32097,null));
var inst_32099 = (new cljs.core.PersistentHashSet(null,inst_32098,null));
var inst_32100 = figwheel.client.focus_msgs.call(null,inst_32099,inst_32095);
var inst_32101 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_32100);
var inst_32102 = cljs.core.first.call(null,inst_32100);
var inst_32103 = figwheel.client.autoload_QMARK_.call(null);
var state_32142__$1 = (function (){var statearr_32157 = state_32142;
(statearr_32157[(9)] = inst_32101);

(statearr_32157[(8)] = inst_32102);

return statearr_32157;
})();
if(cljs.core.truth_(inst_32103)){
var statearr_32158_32185 = state_32142__$1;
(statearr_32158_32185[(1)] = (8));

} else {
var statearr_32159_32186 = state_32142__$1;
(statearr_32159_32186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32143 === (14))){
var inst_32113 = (state_32142[(2)]);
var state_32142__$1 = state_32142;
var statearr_32160_32187 = state_32142__$1;
(statearr_32160_32187[(2)] = inst_32113);

(statearr_32160_32187[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32143 === (16))){
var state_32142__$1 = state_32142;
var statearr_32161_32188 = state_32142__$1;
(statearr_32161_32188[(2)] = null);

(statearr_32161_32188[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32143 === (10))){
var inst_32134 = (state_32142[(2)]);
var state_32142__$1 = (function (){var statearr_32162 = state_32142;
(statearr_32162[(11)] = inst_32134);

return statearr_32162;
})();
var statearr_32163_32189 = state_32142__$1;
(statearr_32163_32189[(2)] = null);

(statearr_32163_32189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32143 === (8))){
var inst_32101 = (state_32142[(9)]);
var inst_32105 = figwheel.client.reload_file_state_QMARK_.call(null,inst_32101,opts);
var state_32142__$1 = state_32142;
if(cljs.core.truth_(inst_32105)){
var statearr_32164_32190 = state_32142__$1;
(statearr_32164_32190[(1)] = (11));

} else {
var statearr_32165_32191 = state_32142__$1;
(statearr_32165_32191[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26336__auto___32173,ch))
;
return ((function (switch__26224__auto__,c__26336__auto___32173,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26225__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26225__auto____0 = (function (){
var statearr_32169 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32169[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26225__auto__);

(statearr_32169[(1)] = (1));

return statearr_32169;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26225__auto____1 = (function (state_32142){
while(true){
var ret_value__26226__auto__ = (function (){try{while(true){
var result__26227__auto__ = switch__26224__auto__.call(null,state_32142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26227__auto__;
}
break;
}
}catch (e32170){if((e32170 instanceof Object)){
var ex__26228__auto__ = e32170;
var statearr_32171_32192 = state_32142;
(statearr_32171_32192[(5)] = ex__26228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32193 = state_32142;
state_32142 = G__32193;
continue;
} else {
return ret_value__26226__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26225__auto__ = function(state_32142){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26225__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26225__auto____1.call(this,state_32142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26225__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26225__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26225__auto__;
})()
;})(switch__26224__auto__,c__26336__auto___32173,ch))
})();
var state__26338__auto__ = (function (){var statearr_32172 = f__26337__auto__.call(null);
(statearr_32172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto___32173);

return statearr_32172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(c__26336__auto___32173,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__32194_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__32194_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_32197 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_32197){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e32196){if((e32196 instanceof Error)){
var e = e32196;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_32197], null));
} else {
var e = e32196;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_32197))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__32198){
var map__32207 = p__32198;
var map__32207__$1 = ((((!((map__32207 == null)))?((((map__32207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32207):map__32207);
var opts = map__32207__$1;
var build_id = cljs.core.get.call(null,map__32207__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__32207,map__32207__$1,opts,build_id){
return (function (p__32209){
var vec__32210 = p__32209;
var seq__32211 = cljs.core.seq.call(null,vec__32210);
var first__32212 = cljs.core.first.call(null,seq__32211);
var seq__32211__$1 = cljs.core.next.call(null,seq__32211);
var map__32213 = first__32212;
var map__32213__$1 = ((((!((map__32213 == null)))?((((map__32213.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32213.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32213):map__32213);
var msg = map__32213__$1;
var msg_name = cljs.core.get.call(null,map__32213__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32211__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__32210,seq__32211,first__32212,seq__32211__$1,map__32213,map__32213__$1,msg,msg_name,_,map__32207,map__32207__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__32210,seq__32211,first__32212,seq__32211__$1,map__32213,map__32213__$1,msg,msg_name,_,map__32207,map__32207__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__32207,map__32207__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__32221){
var vec__32222 = p__32221;
var seq__32223 = cljs.core.seq.call(null,vec__32222);
var first__32224 = cljs.core.first.call(null,seq__32223);
var seq__32223__$1 = cljs.core.next.call(null,seq__32223);
var map__32225 = first__32224;
var map__32225__$1 = ((((!((map__32225 == null)))?((((map__32225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32225):map__32225);
var msg = map__32225__$1;
var msg_name = cljs.core.get.call(null,map__32225__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32223__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__32227){
var map__32239 = p__32227;
var map__32239__$1 = ((((!((map__32239 == null)))?((((map__32239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32239):map__32239);
var on_compile_warning = cljs.core.get.call(null,map__32239__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__32239__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__32239,map__32239__$1,on_compile_warning,on_compile_fail){
return (function (p__32241){
var vec__32242 = p__32241;
var seq__32243 = cljs.core.seq.call(null,vec__32242);
var first__32244 = cljs.core.first.call(null,seq__32243);
var seq__32243__$1 = cljs.core.next.call(null,seq__32243);
var map__32245 = first__32244;
var map__32245__$1 = ((((!((map__32245 == null)))?((((map__32245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32245):map__32245);
var msg = map__32245__$1;
var msg_name = cljs.core.get.call(null,map__32245__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32243__$1;
var pred__32247 = cljs.core._EQ_;
var expr__32248 = msg_name;
if(cljs.core.truth_(pred__32247.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__32248))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__32247.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__32248))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__32239,map__32239__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26336__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26337__auto__ = (function (){var switch__26224__auto__ = ((function (c__26336__auto__,msg_hist,msg_names,msg){
return (function (state_32456){
var state_val_32457 = (state_32456[(1)]);
if((state_val_32457 === (7))){
var inst_32384 = (state_32456[(2)]);
var state_32456__$1 = state_32456;
if(cljs.core.truth_(inst_32384)){
var statearr_32458_32504 = state_32456__$1;
(statearr_32458_32504[(1)] = (8));

} else {
var statearr_32459_32505 = state_32456__$1;
(statearr_32459_32505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (20))){
var inst_32450 = (state_32456[(2)]);
var state_32456__$1 = state_32456;
var statearr_32460_32506 = state_32456__$1;
(statearr_32460_32506[(2)] = inst_32450);

(statearr_32460_32506[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (27))){
var inst_32446 = (state_32456[(2)]);
var state_32456__$1 = state_32456;
var statearr_32461_32507 = state_32456__$1;
(statearr_32461_32507[(2)] = inst_32446);

(statearr_32461_32507[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (1))){
var inst_32377 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32456__$1 = state_32456;
if(cljs.core.truth_(inst_32377)){
var statearr_32462_32508 = state_32456__$1;
(statearr_32462_32508[(1)] = (2));

} else {
var statearr_32463_32509 = state_32456__$1;
(statearr_32463_32509[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (24))){
var inst_32448 = (state_32456[(2)]);
var state_32456__$1 = state_32456;
var statearr_32464_32510 = state_32456__$1;
(statearr_32464_32510[(2)] = inst_32448);

(statearr_32464_32510[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (4))){
var inst_32454 = (state_32456[(2)]);
var state_32456__$1 = state_32456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32456__$1,inst_32454);
} else {
if((state_val_32457 === (15))){
var inst_32452 = (state_32456[(2)]);
var state_32456__$1 = state_32456;
var statearr_32465_32511 = state_32456__$1;
(statearr_32465_32511[(2)] = inst_32452);

(statearr_32465_32511[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (21))){
var inst_32411 = (state_32456[(2)]);
var state_32456__$1 = state_32456;
var statearr_32466_32512 = state_32456__$1;
(statearr_32466_32512[(2)] = inst_32411);

(statearr_32466_32512[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (31))){
var inst_32435 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32456__$1 = state_32456;
if(cljs.core.truth_(inst_32435)){
var statearr_32467_32513 = state_32456__$1;
(statearr_32467_32513[(1)] = (34));

} else {
var statearr_32468_32514 = state_32456__$1;
(statearr_32468_32514[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (32))){
var inst_32444 = (state_32456[(2)]);
var state_32456__$1 = state_32456;
var statearr_32469_32515 = state_32456__$1;
(statearr_32469_32515[(2)] = inst_32444);

(statearr_32469_32515[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (33))){
var inst_32433 = (state_32456[(2)]);
var state_32456__$1 = state_32456;
var statearr_32470_32516 = state_32456__$1;
(statearr_32470_32516[(2)] = inst_32433);

(statearr_32470_32516[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (13))){
var inst_32398 = figwheel.client.heads_up.clear.call(null);
var state_32456__$1 = state_32456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32456__$1,(16),inst_32398);
} else {
if((state_val_32457 === (22))){
var inst_32415 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32416 = figwheel.client.heads_up.append_warning_message.call(null,inst_32415);
var state_32456__$1 = state_32456;
var statearr_32471_32517 = state_32456__$1;
(statearr_32471_32517[(2)] = inst_32416);

(statearr_32471_32517[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (36))){
var inst_32442 = (state_32456[(2)]);
var state_32456__$1 = state_32456;
var statearr_32472_32518 = state_32456__$1;
(statearr_32472_32518[(2)] = inst_32442);

(statearr_32472_32518[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (29))){
var inst_32426 = (state_32456[(2)]);
var state_32456__$1 = state_32456;
var statearr_32473_32519 = state_32456__$1;
(statearr_32473_32519[(2)] = inst_32426);

(statearr_32473_32519[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (6))){
var inst_32379 = (state_32456[(7)]);
var state_32456__$1 = state_32456;
var statearr_32474_32520 = state_32456__$1;
(statearr_32474_32520[(2)] = inst_32379);

(statearr_32474_32520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (28))){
var inst_32422 = (state_32456[(2)]);
var inst_32423 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32424 = figwheel.client.heads_up.display_warning.call(null,inst_32423);
var state_32456__$1 = (function (){var statearr_32475 = state_32456;
(statearr_32475[(8)] = inst_32422);

return statearr_32475;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32456__$1,(29),inst_32424);
} else {
if((state_val_32457 === (25))){
var inst_32420 = figwheel.client.heads_up.clear.call(null);
var state_32456__$1 = state_32456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32456__$1,(28),inst_32420);
} else {
if((state_val_32457 === (34))){
var inst_32437 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32456__$1 = state_32456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32456__$1,(37),inst_32437);
} else {
if((state_val_32457 === (17))){
var inst_32404 = (state_32456[(2)]);
var state_32456__$1 = state_32456;
var statearr_32476_32521 = state_32456__$1;
(statearr_32476_32521[(2)] = inst_32404);

(statearr_32476_32521[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (3))){
var inst_32396 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32456__$1 = state_32456;
if(cljs.core.truth_(inst_32396)){
var statearr_32477_32522 = state_32456__$1;
(statearr_32477_32522[(1)] = (13));

} else {
var statearr_32478_32523 = state_32456__$1;
(statearr_32478_32523[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (12))){
var inst_32392 = (state_32456[(2)]);
var state_32456__$1 = state_32456;
var statearr_32479_32524 = state_32456__$1;
(statearr_32479_32524[(2)] = inst_32392);

(statearr_32479_32524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (2))){
var inst_32379 = (state_32456[(7)]);
var inst_32379__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_32456__$1 = (function (){var statearr_32480 = state_32456;
(statearr_32480[(7)] = inst_32379__$1);

return statearr_32480;
})();
if(cljs.core.truth_(inst_32379__$1)){
var statearr_32481_32525 = state_32456__$1;
(statearr_32481_32525[(1)] = (5));

} else {
var statearr_32482_32526 = state_32456__$1;
(statearr_32482_32526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (23))){
var inst_32418 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32456__$1 = state_32456;
if(cljs.core.truth_(inst_32418)){
var statearr_32483_32527 = state_32456__$1;
(statearr_32483_32527[(1)] = (25));

} else {
var statearr_32484_32528 = state_32456__$1;
(statearr_32484_32528[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (35))){
var state_32456__$1 = state_32456;
var statearr_32485_32529 = state_32456__$1;
(statearr_32485_32529[(2)] = null);

(statearr_32485_32529[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (19))){
var inst_32413 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32456__$1 = state_32456;
if(cljs.core.truth_(inst_32413)){
var statearr_32486_32530 = state_32456__$1;
(statearr_32486_32530[(1)] = (22));

} else {
var statearr_32487_32531 = state_32456__$1;
(statearr_32487_32531[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (11))){
var inst_32388 = (state_32456[(2)]);
var state_32456__$1 = state_32456;
var statearr_32488_32532 = state_32456__$1;
(statearr_32488_32532[(2)] = inst_32388);

(statearr_32488_32532[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (9))){
var inst_32390 = figwheel.client.heads_up.clear.call(null);
var state_32456__$1 = state_32456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32456__$1,(12),inst_32390);
} else {
if((state_val_32457 === (5))){
var inst_32381 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32456__$1 = state_32456;
var statearr_32489_32533 = state_32456__$1;
(statearr_32489_32533[(2)] = inst_32381);

(statearr_32489_32533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (14))){
var inst_32406 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32456__$1 = state_32456;
if(cljs.core.truth_(inst_32406)){
var statearr_32490_32534 = state_32456__$1;
(statearr_32490_32534[(1)] = (18));

} else {
var statearr_32491_32535 = state_32456__$1;
(statearr_32491_32535[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (26))){
var inst_32428 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32456__$1 = state_32456;
if(cljs.core.truth_(inst_32428)){
var statearr_32492_32536 = state_32456__$1;
(statearr_32492_32536[(1)] = (30));

} else {
var statearr_32493_32537 = state_32456__$1;
(statearr_32493_32537[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (16))){
var inst_32400 = (state_32456[(2)]);
var inst_32401 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32402 = figwheel.client.heads_up.display_exception.call(null,inst_32401);
var state_32456__$1 = (function (){var statearr_32494 = state_32456;
(statearr_32494[(9)] = inst_32400);

return statearr_32494;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32456__$1,(17),inst_32402);
} else {
if((state_val_32457 === (30))){
var inst_32430 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32431 = figwheel.client.heads_up.display_warning.call(null,inst_32430);
var state_32456__$1 = state_32456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32456__$1,(33),inst_32431);
} else {
if((state_val_32457 === (10))){
var inst_32394 = (state_32456[(2)]);
var state_32456__$1 = state_32456;
var statearr_32495_32538 = state_32456__$1;
(statearr_32495_32538[(2)] = inst_32394);

(statearr_32495_32538[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (18))){
var inst_32408 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32409 = figwheel.client.heads_up.display_exception.call(null,inst_32408);
var state_32456__$1 = state_32456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32456__$1,(21),inst_32409);
} else {
if((state_val_32457 === (37))){
var inst_32439 = (state_32456[(2)]);
var state_32456__$1 = state_32456;
var statearr_32496_32539 = state_32456__$1;
(statearr_32496_32539[(2)] = inst_32439);

(statearr_32496_32539[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (8))){
var inst_32386 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32456__$1 = state_32456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32456__$1,(11),inst_32386);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26336__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26224__auto__,c__26336__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26225__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26225__auto____0 = (function (){
var statearr_32500 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32500[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26225__auto__);

(statearr_32500[(1)] = (1));

return statearr_32500;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26225__auto____1 = (function (state_32456){
while(true){
var ret_value__26226__auto__ = (function (){try{while(true){
var result__26227__auto__ = switch__26224__auto__.call(null,state_32456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26227__auto__;
}
break;
}
}catch (e32501){if((e32501 instanceof Object)){
var ex__26228__auto__ = e32501;
var statearr_32502_32540 = state_32456;
(statearr_32502_32540[(5)] = ex__26228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32541 = state_32456;
state_32456 = G__32541;
continue;
} else {
return ret_value__26226__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26225__auto__ = function(state_32456){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26225__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26225__auto____1.call(this,state_32456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26225__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26225__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26225__auto__;
})()
;})(switch__26224__auto__,c__26336__auto__,msg_hist,msg_names,msg))
})();
var state__26338__auto__ = (function (){var statearr_32503 = f__26337__auto__.call(null);
(statearr_32503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto__);

return statearr_32503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(c__26336__auto__,msg_hist,msg_names,msg))
);

return c__26336__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26336__auto___32604 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26336__auto___32604,ch){
return (function (){
var f__26337__auto__ = (function (){var switch__26224__auto__ = ((function (c__26336__auto___32604,ch){
return (function (state_32587){
var state_val_32588 = (state_32587[(1)]);
if((state_val_32588 === (1))){
var state_32587__$1 = state_32587;
var statearr_32589_32605 = state_32587__$1;
(statearr_32589_32605[(2)] = null);

(statearr_32589_32605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32588 === (2))){
var state_32587__$1 = state_32587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32587__$1,(4),ch);
} else {
if((state_val_32588 === (3))){
var inst_32585 = (state_32587[(2)]);
var state_32587__$1 = state_32587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32587__$1,inst_32585);
} else {
if((state_val_32588 === (4))){
var inst_32575 = (state_32587[(7)]);
var inst_32575__$1 = (state_32587[(2)]);
var state_32587__$1 = (function (){var statearr_32590 = state_32587;
(statearr_32590[(7)] = inst_32575__$1);

return statearr_32590;
})();
if(cljs.core.truth_(inst_32575__$1)){
var statearr_32591_32606 = state_32587__$1;
(statearr_32591_32606[(1)] = (5));

} else {
var statearr_32592_32607 = state_32587__$1;
(statearr_32592_32607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32588 === (5))){
var inst_32575 = (state_32587[(7)]);
var inst_32577 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32575);
var state_32587__$1 = state_32587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32587__$1,(8),inst_32577);
} else {
if((state_val_32588 === (6))){
var state_32587__$1 = state_32587;
var statearr_32593_32608 = state_32587__$1;
(statearr_32593_32608[(2)] = null);

(statearr_32593_32608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32588 === (7))){
var inst_32583 = (state_32587[(2)]);
var state_32587__$1 = state_32587;
var statearr_32594_32609 = state_32587__$1;
(statearr_32594_32609[(2)] = inst_32583);

(statearr_32594_32609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32588 === (8))){
var inst_32579 = (state_32587[(2)]);
var state_32587__$1 = (function (){var statearr_32595 = state_32587;
(statearr_32595[(8)] = inst_32579);

return statearr_32595;
})();
var statearr_32596_32610 = state_32587__$1;
(statearr_32596_32610[(2)] = null);

(statearr_32596_32610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__26336__auto___32604,ch))
;
return ((function (switch__26224__auto__,c__26336__auto___32604,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26225__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26225__auto____0 = (function (){
var statearr_32600 = [null,null,null,null,null,null,null,null,null];
(statearr_32600[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26225__auto__);

(statearr_32600[(1)] = (1));

return statearr_32600;
});
var figwheel$client$heads_up_plugin_$_state_machine__26225__auto____1 = (function (state_32587){
while(true){
var ret_value__26226__auto__ = (function (){try{while(true){
var result__26227__auto__ = switch__26224__auto__.call(null,state_32587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26227__auto__;
}
break;
}
}catch (e32601){if((e32601 instanceof Object)){
var ex__26228__auto__ = e32601;
var statearr_32602_32611 = state_32587;
(statearr_32602_32611[(5)] = ex__26228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32612 = state_32587;
state_32587 = G__32612;
continue;
} else {
return ret_value__26226__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26225__auto__ = function(state_32587){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26225__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26225__auto____1.call(this,state_32587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26225__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26225__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26225__auto__;
})()
;})(switch__26224__auto__,c__26336__auto___32604,ch))
})();
var state__26338__auto__ = (function (){var statearr_32603 = f__26337__auto__.call(null);
(statearr_32603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto___32604);

return statearr_32603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(c__26336__auto___32604,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26336__auto__){
return (function (){
var f__26337__auto__ = (function (){var switch__26224__auto__ = ((function (c__26336__auto__){
return (function (state_32633){
var state_val_32634 = (state_32633[(1)]);
if((state_val_32634 === (1))){
var inst_32628 = cljs.core.async.timeout.call(null,(3000));
var state_32633__$1 = state_32633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32633__$1,(2),inst_32628);
} else {
if((state_val_32634 === (2))){
var inst_32630 = (state_32633[(2)]);
var inst_32631 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32633__$1 = (function (){var statearr_32635 = state_32633;
(statearr_32635[(7)] = inst_32630);

return statearr_32635;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32633__$1,inst_32631);
} else {
return null;
}
}
});})(c__26336__auto__))
;
return ((function (switch__26224__auto__,c__26336__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26225__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26225__auto____0 = (function (){
var statearr_32639 = [null,null,null,null,null,null,null,null];
(statearr_32639[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26225__auto__);

(statearr_32639[(1)] = (1));

return statearr_32639;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26225__auto____1 = (function (state_32633){
while(true){
var ret_value__26226__auto__ = (function (){try{while(true){
var result__26227__auto__ = switch__26224__auto__.call(null,state_32633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26227__auto__;
}
break;
}
}catch (e32640){if((e32640 instanceof Object)){
var ex__26228__auto__ = e32640;
var statearr_32641_32643 = state_32633;
(statearr_32641_32643[(5)] = ex__26228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32644 = state_32633;
state_32633 = G__32644;
continue;
} else {
return ret_value__26226__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26225__auto__ = function(state_32633){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26225__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26225__auto____1.call(this,state_32633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26225__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26225__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26225__auto__;
})()
;})(switch__26224__auto__,c__26336__auto__))
})();
var state__26338__auto__ = (function (){var statearr_32642 = f__26337__auto__.call(null);
(statearr_32642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto__);

return statearr_32642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(c__26336__auto__))
);

return c__26336__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26336__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__26337__auto__ = (function (){var switch__26224__auto__ = ((function (c__26336__auto__,figwheel_version,temp__4657__auto__){
return (function (state_32667){
var state_val_32668 = (state_32667[(1)]);
if((state_val_32668 === (1))){
var inst_32661 = cljs.core.async.timeout.call(null,(2000));
var state_32667__$1 = state_32667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32667__$1,(2),inst_32661);
} else {
if((state_val_32668 === (2))){
var inst_32663 = (state_32667[(2)]);
var inst_32664 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_32665 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_32664);
var state_32667__$1 = (function (){var statearr_32669 = state_32667;
(statearr_32669[(7)] = inst_32663);

return statearr_32669;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32667__$1,inst_32665);
} else {
return null;
}
}
});})(c__26336__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__26224__auto__,c__26336__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26225__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26225__auto____0 = (function (){
var statearr_32673 = [null,null,null,null,null,null,null,null];
(statearr_32673[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26225__auto__);

(statearr_32673[(1)] = (1));

return statearr_32673;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26225__auto____1 = (function (state_32667){
while(true){
var ret_value__26226__auto__ = (function (){try{while(true){
var result__26227__auto__ = switch__26224__auto__.call(null,state_32667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26227__auto__;
}
break;
}
}catch (e32674){if((e32674 instanceof Object)){
var ex__26228__auto__ = e32674;
var statearr_32675_32677 = state_32667;
(statearr_32675_32677[(5)] = ex__26228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32678 = state_32667;
state_32667 = G__32678;
continue;
} else {
return ret_value__26226__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26225__auto__ = function(state_32667){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26225__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26225__auto____1.call(this,state_32667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26225__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26225__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26225__auto__;
})()
;})(switch__26224__auto__,c__26336__auto__,figwheel_version,temp__4657__auto__))
})();
var state__26338__auto__ = (function (){var statearr_32676 = f__26337__auto__.call(null);
(statearr_32676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto__);

return statearr_32676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(c__26336__auto__,figwheel_version,temp__4657__auto__))
);

return c__26336__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__32679){
var map__32683 = p__32679;
var map__32683__$1 = ((((!((map__32683 == null)))?((((map__32683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32683):map__32683);
var file = cljs.core.get.call(null,map__32683__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32683__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32683__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__32685 = "";
var G__32685__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__32685),cljs.core.str("file "),cljs.core.str(file)].join(''):G__32685);
var G__32685__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__32685__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__32685__$1);
if(cljs.core.truth_((function (){var and__21662__auto__ = line;
if(cljs.core.truth_(and__21662__auto__)){
return column;
} else {
return and__21662__auto__;
}
})())){
return [cljs.core.str(G__32685__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__32685__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32686){
var map__32693 = p__32686;
var map__32693__$1 = ((((!((map__32693 == null)))?((((map__32693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32693):map__32693);
var ed = map__32693__$1;
var formatted_exception = cljs.core.get.call(null,map__32693__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__32693__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32693__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32695_32699 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32696_32700 = null;
var count__32697_32701 = (0);
var i__32698_32702 = (0);
while(true){
if((i__32698_32702 < count__32697_32701)){
var msg_32703 = cljs.core._nth.call(null,chunk__32696_32700,i__32698_32702);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32703);

var G__32704 = seq__32695_32699;
var G__32705 = chunk__32696_32700;
var G__32706 = count__32697_32701;
var G__32707 = (i__32698_32702 + (1));
seq__32695_32699 = G__32704;
chunk__32696_32700 = G__32705;
count__32697_32701 = G__32706;
i__32698_32702 = G__32707;
continue;
} else {
var temp__4657__auto___32708 = cljs.core.seq.call(null,seq__32695_32699);
if(temp__4657__auto___32708){
var seq__32695_32709__$1 = temp__4657__auto___32708;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32695_32709__$1)){
var c__22485__auto___32710 = cljs.core.chunk_first.call(null,seq__32695_32709__$1);
var G__32711 = cljs.core.chunk_rest.call(null,seq__32695_32709__$1);
var G__32712 = c__22485__auto___32710;
var G__32713 = cljs.core.count.call(null,c__22485__auto___32710);
var G__32714 = (0);
seq__32695_32699 = G__32711;
chunk__32696_32700 = G__32712;
count__32697_32701 = G__32713;
i__32698_32702 = G__32714;
continue;
} else {
var msg_32715 = cljs.core.first.call(null,seq__32695_32709__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32715);

var G__32716 = cljs.core.next.call(null,seq__32695_32709__$1);
var G__32717 = null;
var G__32718 = (0);
var G__32719 = (0);
seq__32695_32699 = G__32716;
chunk__32696_32700 = G__32717;
count__32697_32701 = G__32718;
i__32698_32702 = G__32719;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32720){
var map__32723 = p__32720;
var map__32723__$1 = ((((!((map__32723 == null)))?((((map__32723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32723):map__32723);
var w = map__32723__$1;
var message = cljs.core.get.call(null,map__32723__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public/js/out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public/js/out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__21662__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__21662__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__21662__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32735 = cljs.core.seq.call(null,plugins);
var chunk__32736 = null;
var count__32737 = (0);
var i__32738 = (0);
while(true){
if((i__32738 < count__32737)){
var vec__32739 = cljs.core._nth.call(null,chunk__32736,i__32738);
var k = cljs.core.nth.call(null,vec__32739,(0),null);
var plugin = cljs.core.nth.call(null,vec__32739,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32745 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32735,chunk__32736,count__32737,i__32738,pl_32745,vec__32739,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32745.call(null,msg_hist);
});})(seq__32735,chunk__32736,count__32737,i__32738,pl_32745,vec__32739,k,plugin))
);
} else {
}

var G__32746 = seq__32735;
var G__32747 = chunk__32736;
var G__32748 = count__32737;
var G__32749 = (i__32738 + (1));
seq__32735 = G__32746;
chunk__32736 = G__32747;
count__32737 = G__32748;
i__32738 = G__32749;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32735);
if(temp__4657__auto__){
var seq__32735__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32735__$1)){
var c__22485__auto__ = cljs.core.chunk_first.call(null,seq__32735__$1);
var G__32750 = cljs.core.chunk_rest.call(null,seq__32735__$1);
var G__32751 = c__22485__auto__;
var G__32752 = cljs.core.count.call(null,c__22485__auto__);
var G__32753 = (0);
seq__32735 = G__32750;
chunk__32736 = G__32751;
count__32737 = G__32752;
i__32738 = G__32753;
continue;
} else {
var vec__32742 = cljs.core.first.call(null,seq__32735__$1);
var k = cljs.core.nth.call(null,vec__32742,(0),null);
var plugin = cljs.core.nth.call(null,vec__32742,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32754 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32735,chunk__32736,count__32737,i__32738,pl_32754,vec__32742,k,plugin,seq__32735__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32754.call(null,msg_hist);
});})(seq__32735,chunk__32736,count__32737,i__32738,pl_32754,vec__32742,k,plugin,seq__32735__$1,temp__4657__auto__))
);
} else {
}

var G__32755 = cljs.core.next.call(null,seq__32735__$1);
var G__32756 = null;
var G__32757 = (0);
var G__32758 = (0);
seq__32735 = G__32755;
chunk__32736 = G__32756;
count__32737 = G__32757;
i__32738 = G__32758;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args32759 = [];
var len__22749__auto___32766 = arguments.length;
var i__22750__auto___32767 = (0);
while(true){
if((i__22750__auto___32767 < len__22749__auto___32766)){
args32759.push((arguments[i__22750__auto___32767]));

var G__32768 = (i__22750__auto___32767 + (1));
i__22750__auto___32767 = G__32768;
continue;
} else {
}
break;
}

var G__32761 = args32759.length;
switch (G__32761) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32759.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__32762_32770 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__32763_32771 = null;
var count__32764_32772 = (0);
var i__32765_32773 = (0);
while(true){
if((i__32765_32773 < count__32764_32772)){
var msg_32774 = cljs.core._nth.call(null,chunk__32763_32771,i__32765_32773);
figwheel.client.socket.handle_incoming_message.call(null,msg_32774);

var G__32775 = seq__32762_32770;
var G__32776 = chunk__32763_32771;
var G__32777 = count__32764_32772;
var G__32778 = (i__32765_32773 + (1));
seq__32762_32770 = G__32775;
chunk__32763_32771 = G__32776;
count__32764_32772 = G__32777;
i__32765_32773 = G__32778;
continue;
} else {
var temp__4657__auto___32779 = cljs.core.seq.call(null,seq__32762_32770);
if(temp__4657__auto___32779){
var seq__32762_32780__$1 = temp__4657__auto___32779;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32762_32780__$1)){
var c__22485__auto___32781 = cljs.core.chunk_first.call(null,seq__32762_32780__$1);
var G__32782 = cljs.core.chunk_rest.call(null,seq__32762_32780__$1);
var G__32783 = c__22485__auto___32781;
var G__32784 = cljs.core.count.call(null,c__22485__auto___32781);
var G__32785 = (0);
seq__32762_32770 = G__32782;
chunk__32763_32771 = G__32783;
count__32764_32772 = G__32784;
i__32765_32773 = G__32785;
continue;
} else {
var msg_32786 = cljs.core.first.call(null,seq__32762_32780__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_32786);

var G__32787 = cljs.core.next.call(null,seq__32762_32780__$1);
var G__32788 = null;
var G__32789 = (0);
var G__32790 = (0);
seq__32762_32770 = G__32787;
chunk__32763_32771 = G__32788;
count__32764_32772 = G__32789;
i__32765_32773 = G__32790;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__22756__auto__ = [];
var len__22749__auto___32795 = arguments.length;
var i__22750__auto___32796 = (0);
while(true){
if((i__22750__auto___32796 < len__22749__auto___32795)){
args__22756__auto__.push((arguments[i__22750__auto___32796]));

var G__32797 = (i__22750__auto___32796 + (1));
i__22750__auto___32796 = G__32797;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32792){
var map__32793 = p__32792;
var map__32793__$1 = ((((!((map__32793 == null)))?((((map__32793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32793):map__32793);
var opts = map__32793__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32791){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32791));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e32799){if((e32799 instanceof Error)){
var e = e32799;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e32799;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__32803){
var map__32804 = p__32803;
var map__32804__$1 = ((((!((map__32804 == null)))?((((map__32804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32804):map__32804);
var msg_name = cljs.core.get.call(null,map__32804__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map