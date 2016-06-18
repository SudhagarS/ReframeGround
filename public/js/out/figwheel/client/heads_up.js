// Compiled by ClojureScript 1.9.36 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.dataset');
goog.require('goog.string');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('cljs.pprint');
goog.require('clojure.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__22756__auto__ = [];
var len__22749__auto___31693 = arguments.length;
var i__22750__auto___31694 = (0);
while(true){
if((i__22750__auto___31694 < len__22749__auto___31693)){
args__22756__auto__.push((arguments[i__22750__auto___31694]));

var G__31695 = (i__22750__auto___31694 + (1));
i__22750__auto___31694 = G__31695;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((2) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22757__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__31685_31696 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__31686_31697 = null;
var count__31687_31698 = (0);
var i__31688_31699 = (0);
while(true){
if((i__31688_31699 < count__31687_31698)){
var k_31700 = cljs.core._nth.call(null,chunk__31686_31697,i__31688_31699);
e.setAttribute(cljs.core.name.call(null,k_31700),cljs.core.get.call(null,attrs,k_31700));

var G__31701 = seq__31685_31696;
var G__31702 = chunk__31686_31697;
var G__31703 = count__31687_31698;
var G__31704 = (i__31688_31699 + (1));
seq__31685_31696 = G__31701;
chunk__31686_31697 = G__31702;
count__31687_31698 = G__31703;
i__31688_31699 = G__31704;
continue;
} else {
var temp__4657__auto___31705 = cljs.core.seq.call(null,seq__31685_31696);
if(temp__4657__auto___31705){
var seq__31685_31706__$1 = temp__4657__auto___31705;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31685_31706__$1)){
var c__22485__auto___31707 = cljs.core.chunk_first.call(null,seq__31685_31706__$1);
var G__31708 = cljs.core.chunk_rest.call(null,seq__31685_31706__$1);
var G__31709 = c__22485__auto___31707;
var G__31710 = cljs.core.count.call(null,c__22485__auto___31707);
var G__31711 = (0);
seq__31685_31696 = G__31708;
chunk__31686_31697 = G__31709;
count__31687_31698 = G__31710;
i__31688_31699 = G__31711;
continue;
} else {
var k_31712 = cljs.core.first.call(null,seq__31685_31706__$1);
e.setAttribute(cljs.core.name.call(null,k_31712),cljs.core.get.call(null,attrs,k_31712));

var G__31713 = cljs.core.next.call(null,seq__31685_31706__$1);
var G__31714 = null;
var G__31715 = (0);
var G__31716 = (0);
seq__31685_31696 = G__31713;
chunk__31686_31697 = G__31714;
count__31687_31698 = G__31715;
i__31688_31699 = G__31716;
continue;
}
} else {
}
}
break;
}

var seq__31689_31717 = cljs.core.seq.call(null,children);
var chunk__31690_31718 = null;
var count__31691_31719 = (0);
var i__31692_31720 = (0);
while(true){
if((i__31692_31720 < count__31691_31719)){
var ch_31721 = cljs.core._nth.call(null,chunk__31690_31718,i__31692_31720);
e.appendChild(ch_31721);

var G__31722 = seq__31689_31717;
var G__31723 = chunk__31690_31718;
var G__31724 = count__31691_31719;
var G__31725 = (i__31692_31720 + (1));
seq__31689_31717 = G__31722;
chunk__31690_31718 = G__31723;
count__31691_31719 = G__31724;
i__31692_31720 = G__31725;
continue;
} else {
var temp__4657__auto___31726 = cljs.core.seq.call(null,seq__31689_31717);
if(temp__4657__auto___31726){
var seq__31689_31727__$1 = temp__4657__auto___31726;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31689_31727__$1)){
var c__22485__auto___31728 = cljs.core.chunk_first.call(null,seq__31689_31727__$1);
var G__31729 = cljs.core.chunk_rest.call(null,seq__31689_31727__$1);
var G__31730 = c__22485__auto___31728;
var G__31731 = cljs.core.count.call(null,c__22485__auto___31728);
var G__31732 = (0);
seq__31689_31717 = G__31729;
chunk__31690_31718 = G__31730;
count__31691_31719 = G__31731;
i__31692_31720 = G__31732;
continue;
} else {
var ch_31733 = cljs.core.first.call(null,seq__31689_31727__$1);
e.appendChild(ch_31733);

var G__31734 = cljs.core.next.call(null,seq__31689_31727__$1);
var G__31735 = null;
var G__31736 = (0);
var G__31737 = (0);
seq__31689_31717 = G__31734;
chunk__31690_31718 = G__31735;
count__31691_31719 = G__31736;
i__31692_31720 = G__31737;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq31682){
var G__31683 = cljs.core.first.call(null,seq31682);
var seq31682__$1 = cljs.core.next.call(null,seq31682);
var G__31684 = cljs.core.first.call(null,seq31682__$1);
var seq31682__$2 = cljs.core.next.call(null,seq31682__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__31683,G__31684,seq31682__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__22599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__22599__auto__,prefer_table__22600__auto__,method_cache__22601__auto__,cached_hierarchy__22602__auto__,hierarchy__22603__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__22599__auto__,prefer_table__22600__auto__,method_cache__22601__auto__,cached_hierarchy__22602__auto__,hierarchy__22603__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22603__auto__,method_table__22599__auto__,prefer_table__22600__auto__,method_cache__22601__auto__,cached_hierarchy__22602__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_31738 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_31738.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_31738.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_31738.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_31738);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__31739,st_map){
var map__31746 = p__31739;
var map__31746__$1 = ((((!((map__31746 == null)))?((((map__31746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31746):map__31746);
var container_el = cljs.core.get.call(null,map__31746__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__31746,map__31746__$1,container_el){
return (function (p__31748){
var vec__31749 = p__31748;
var k = cljs.core.nth.call(null,vec__31749,(0),null);
var v = cljs.core.nth.call(null,vec__31749,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__31746,map__31746__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__31752,dom_str){
var map__31755 = p__31752;
var map__31755__$1 = ((((!((map__31755 == null)))?((((map__31755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31755):map__31755);
var c = map__31755__$1;
var content_area_el = cljs.core.get.call(null,map__31755__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__31757){
var map__31760 = p__31757;
var map__31760__$1 = ((((!((map__31760 == null)))?((((map__31760.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31760.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31760):map__31760);
var content_area_el = cljs.core.get.call(null,map__31760__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__26336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26336__auto__){
return (function (){
var f__26337__auto__ = (function (){var switch__26224__auto__ = ((function (c__26336__auto__){
return (function (state_31803){
var state_val_31804 = (state_31803[(1)]);
if((state_val_31804 === (1))){
var inst_31788 = (state_31803[(7)]);
var inst_31788__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_31789 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_31790 = ["10px","10px","100%","68px","1.0"];
var inst_31791 = cljs.core.PersistentHashMap.fromArrays(inst_31789,inst_31790);
var inst_31792 = cljs.core.merge.call(null,inst_31791,style);
var inst_31793 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31788__$1,inst_31792);
var inst_31794 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_31788__$1,msg);
var inst_31795 = cljs.core.async.timeout.call(null,(300));
var state_31803__$1 = (function (){var statearr_31805 = state_31803;
(statearr_31805[(8)] = inst_31794);

(statearr_31805[(7)] = inst_31788__$1);

(statearr_31805[(9)] = inst_31793);

return statearr_31805;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31803__$1,(2),inst_31795);
} else {
if((state_val_31804 === (2))){
var inst_31788 = (state_31803[(7)]);
var inst_31797 = (state_31803[(2)]);
var inst_31798 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_31799 = ["auto"];
var inst_31800 = cljs.core.PersistentHashMap.fromArrays(inst_31798,inst_31799);
var inst_31801 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31788,inst_31800);
var state_31803__$1 = (function (){var statearr_31806 = state_31803;
(statearr_31806[(10)] = inst_31797);

return statearr_31806;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31803__$1,inst_31801);
} else {
return null;
}
}
});})(c__26336__auto__))
;
return ((function (switch__26224__auto__,c__26336__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__26225__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__26225__auto____0 = (function (){
var statearr_31810 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31810[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__26225__auto__);

(statearr_31810[(1)] = (1));

return statearr_31810;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__26225__auto____1 = (function (state_31803){
while(true){
var ret_value__26226__auto__ = (function (){try{while(true){
var result__26227__auto__ = switch__26224__auto__.call(null,state_31803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26227__auto__;
}
break;
}
}catch (e31811){if((e31811 instanceof Object)){
var ex__26228__auto__ = e31811;
var statearr_31812_31814 = state_31803;
(statearr_31812_31814[(5)] = ex__26228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31815 = state_31803;
state_31803 = G__31815;
continue;
} else {
return ret_value__26226__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__26225__auto__ = function(state_31803){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__26225__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__26225__auto____1.call(this,state_31803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__26225__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__26225__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__26225__auto__;
})()
;})(switch__26224__auto__,c__26336__auto__))
})();
var state__26338__auto__ = (function (){var statearr_31813 = f__26337__auto__.call(null);
(statearr_31813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto__);

return statearr_31813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(c__26336__auto__))
);

return c__26336__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args31816 = [];
var len__22749__auto___31819 = arguments.length;
var i__22750__auto___31820 = (0);
while(true){
if((i__22750__auto___31820 < len__22749__auto___31819)){
args31816.push((arguments[i__22750__auto___31820]));

var G__31821 = (i__22750__auto___31820 + (1));
i__22750__auto___31820 = G__31821;
continue;
} else {
}
break;
}

var G__31818 = args31816.length;
switch (G__31818) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31816.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str(" <span style=\""),cljs.core.str("display: inline-block;"),cljs.core.str("font-size: 13px;"),cljs.core.str("\">"),cljs.core.str(sub_head),cljs.core.str("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return [cljs.core.str("<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\" data-file-column=\""),cljs.core.str(column_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__31823){
var map__31826 = p__31823;
var map__31826__$1 = ((((!((map__31826 == null)))?((((map__31826.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31826.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31826):map__31826);
var file = cljs.core.get.call(null,map__31826__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31826__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31826__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__21674__auto__ = file;
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return [cljs.core.str("<span style='"),cljs.core.str(style),cljs.core.str("'>"),cljs.core.str("<span style='color: #757575;'>"),cljs.core.str(line_number),cljs.core.str("  </span>"),cljs.core.str(figwheel.client.heads_up.escape.call(null,line)),cljs.core.str("</span>")].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__31828){
var vec__31835 = p__31828;
var typ = cljs.core.nth.call(null,vec__31835,(0),null);
var line_number = cljs.core.nth.call(null,vec__31835,(1),null);
var line = cljs.core.nth.call(null,vec__31835,(2),null);
var pred__31838 = cljs.core._EQ_;
var expr__31839 = typ;
if(cljs.core.truth_(pred__31838.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__31839))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__31838.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__31839))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__31838.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__31839))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__31841_SHARP_){
return cljs.core.update_in.call(null,p1__31841_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return [cljs.core.str("<pre style='whitespace:pre; font-family:monospace; font-size:0.8em; border-radius: 3px;"),cljs.core.str(" line-height: 1.1em; padding: 10px; overflow: hidden; background-color: rgb(24,26,38); margin-right: 5px'>"),cljs.core.str(clojure.string.join.call(null,"\n",lines)),cljs.core.str("</pre>")].join('');
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__31844){
var map__31847 = p__31844;
var map__31847__$1 = ((((!((map__31847 == null)))?((((map__31847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31847):map__31847);
var exception = map__31847__$1;
var failed_compiling = cljs.core.get.call(null,map__31847__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var reader_exception = cljs.core.get.call(null,map__31847__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var analysis_exception = cljs.core.get.call(null,map__31847__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var class$ = cljs.core.get.call(null,map__31847__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var file = cljs.core.get.call(null,map__31847__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31847__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31847__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__31847__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__31847__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__21662__auto__ = file;
if(cljs.core.truth_(and__21662__auto__)){
return line;
} else {
return and__21662__auto__;
}
})())?[cljs.core.str("Please see line "),cljs.core.str(line),cljs.core.str(" of file "),cljs.core.str(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str("Please see "),cljs.core.str(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__31847,map__31847__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline){
return (function (p1__31842_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__31842_SHARP_),cljs.core.str("</div>")].join('');
});})(last_message,map__31847,map__31847__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str((cljs.core.truth_(class$)?[cljs.core.str(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str(": ")].join(''):"")),cljs.core.str("<span style=\"font-weight:bold;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str("</span>")].join(''),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__31847,map__31847__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline){
return (function (p1__31843_SHARP_){
return [cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__31843_SHARP_))),cljs.core.str(": "),cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__31843_SHARP_)))].join('');
});})(last_message,map__31847,map__31847__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline))
,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception)))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__31852 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__31852__$1 = ((((!((map__31852 == null)))?((((map__31852.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31852.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31852):map__31852);
var head = cljs.core.get.call(null,map__31852__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__31852__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__31852__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__31852__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__31852__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31852__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31852__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__31855){
var map__31858 = p__31855;
var map__31858__$1 = ((((!((map__31858 == null)))?((((map__31858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31858):map__31858);
var warning_data = map__31858__$1;
var file = cljs.core.get.call(null,map__31858__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31858__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31858__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__31858__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__31858__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__21662__auto__ = file;
if(cljs.core.truth_(and__21662__auto__)){
return line;
} else {
return and__21662__auto__;
}
})())?[cljs.core.str("Please see line "),cljs.core.str(line),cljs.core.str(" of file "),cljs.core.str(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str("Please see "),cljs.core.str(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__31858,map__31858__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__31854_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__31854_SHARP_),cljs.core.str("</div>")].join('');
});})(last_message,map__31858,map__31858__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?[cljs.core.str("<span style=\"font-weight:bold;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str("</span>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg,cljs.core.PersistentArrayMap.EMPTY))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__31862 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__31862__$1 = ((((!((map__31862 == null)))?((((map__31862.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31862.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31862):map__31862);
var head = cljs.core.get.call(null,map__31862__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__31862__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__31862__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__31862__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__31862__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31862__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31862__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__31864){
var map__31868 = p__31864;
var map__31868__$1 = ((((!((map__31868 == null)))?((((map__31868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31868):map__31868);
var warning_data = map__31868__$1;
var message = cljs.core.get.call(null,map__31868__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__31868__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31868__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31868__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31870 = message;
var G__31870__$1 = (cljs.core.truth_(line)?[cljs.core.str(G__31870),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__31870);
var G__31870__$2 = (cljs.core.truth_((function (){var and__21662__auto__ = line;
if(cljs.core.truth_(and__21662__auto__)){
return column;
} else {
return and__21662__auto__;
}
})())?[cljs.core.str(G__31870__$1),cljs.core.str(", column "),cljs.core.str(column)].join(''):G__31870__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str(G__31870__$2),cljs.core.str(" in file "),cljs.core.str(file)].join('');
} else {
return G__31870__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__31871){
var map__31876 = p__31871;
var map__31876__$1 = ((((!((map__31876 == null)))?((((map__31876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31876):map__31876);
var warning_data = map__31876__$1;
var message = cljs.core.get.call(null,map__31876__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__31876__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31876__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31876__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__31878 = figwheel.client.heads_up.ensure_container.call(null);
var map__31878__$1 = ((((!((map__31878 == null)))?((((map__31878.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31878.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31878):map__31878);
var content_area_el = cljs.core.get.call(null,map__31878__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
goog.dom.append(el,goog.dom.htmlToDocumentFragment(figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data)));

return goog.dom.append(content_area_el,el);
} else {
var temp__4657__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__4657__auto__)){
var last_child = temp__4657__auto__;
var temp__4655__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__4655__auto__)){
var message_count = temp__4655__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str(message_count__$1),cljs.core.str(" more warnings have not been displayed ...")].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",{"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"},"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__26336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26336__auto__){
return (function (){
var f__26337__auto__ = (function (){var switch__26224__auto__ = ((function (c__26336__auto__){
return (function (state_31926){
var state_val_31927 = (state_31926[(1)]);
if((state_val_31927 === (1))){
var inst_31909 = (state_31926[(7)]);
var inst_31909__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_31910 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_31911 = ["0.0"];
var inst_31912 = cljs.core.PersistentHashMap.fromArrays(inst_31910,inst_31911);
var inst_31913 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31909__$1,inst_31912);
var inst_31914 = cljs.core.async.timeout.call(null,(300));
var state_31926__$1 = (function (){var statearr_31928 = state_31926;
(statearr_31928[(7)] = inst_31909__$1);

(statearr_31928[(8)] = inst_31913);

return statearr_31928;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31926__$1,(2),inst_31914);
} else {
if((state_val_31927 === (2))){
var inst_31909 = (state_31926[(7)]);
var inst_31916 = (state_31926[(2)]);
var inst_31917 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_31918 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_31919 = cljs.core.PersistentHashMap.fromArrays(inst_31917,inst_31918);
var inst_31920 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31909,inst_31919);
var inst_31921 = cljs.core.async.timeout.call(null,(200));
var state_31926__$1 = (function (){var statearr_31929 = state_31926;
(statearr_31929[(9)] = inst_31916);

(statearr_31929[(10)] = inst_31920);

return statearr_31929;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31926__$1,(3),inst_31921);
} else {
if((state_val_31927 === (3))){
var inst_31909 = (state_31926[(7)]);
var inst_31923 = (state_31926[(2)]);
var inst_31924 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_31909,"");
var state_31926__$1 = (function (){var statearr_31930 = state_31926;
(statearr_31930[(11)] = inst_31923);

return statearr_31930;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31926__$1,inst_31924);
} else {
return null;
}
}
}
});})(c__26336__auto__))
;
return ((function (switch__26224__auto__,c__26336__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__26225__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__26225__auto____0 = (function (){
var statearr_31934 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31934[(0)] = figwheel$client$heads_up$clear_$_state_machine__26225__auto__);

(statearr_31934[(1)] = (1));

return statearr_31934;
});
var figwheel$client$heads_up$clear_$_state_machine__26225__auto____1 = (function (state_31926){
while(true){
var ret_value__26226__auto__ = (function (){try{while(true){
var result__26227__auto__ = switch__26224__auto__.call(null,state_31926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26227__auto__;
}
break;
}
}catch (e31935){if((e31935 instanceof Object)){
var ex__26228__auto__ = e31935;
var statearr_31936_31938 = state_31926;
(statearr_31936_31938[(5)] = ex__26228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31939 = state_31926;
state_31926 = G__31939;
continue;
} else {
return ret_value__26226__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__26225__auto__ = function(state_31926){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__26225__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__26225__auto____1.call(this,state_31926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__26225__auto____0;
figwheel$client$heads_up$clear_$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__26225__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__26225__auto__;
})()
;})(switch__26224__auto__,c__26336__auto__))
})();
var state__26338__auto__ = (function (){var statearr_31937 = f__26337__auto__.call(null);
(statearr_31937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto__);

return statearr_31937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(c__26336__auto__))
);

return c__26336__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__26336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26336__auto__){
return (function (){
var f__26337__auto__ = (function (){var switch__26224__auto__ = ((function (c__26336__auto__){
return (function (state_31971){
var state_val_31972 = (state_31971[(1)]);
if((state_val_31972 === (1))){
var inst_31961 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_31971__$1 = state_31971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31971__$1,(2),inst_31961);
} else {
if((state_val_31972 === (2))){
var inst_31963 = (state_31971[(2)]);
var inst_31964 = cljs.core.async.timeout.call(null,(400));
var state_31971__$1 = (function (){var statearr_31973 = state_31971;
(statearr_31973[(7)] = inst_31963);

return statearr_31973;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31971__$1,(3),inst_31964);
} else {
if((state_val_31972 === (3))){
var inst_31966 = (state_31971[(2)]);
var inst_31967 = figwheel.client.heads_up.clear.call(null);
var state_31971__$1 = (function (){var statearr_31974 = state_31971;
(statearr_31974[(8)] = inst_31966);

return statearr_31974;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31971__$1,(4),inst_31967);
} else {
if((state_val_31972 === (4))){
var inst_31969 = (state_31971[(2)]);
var state_31971__$1 = state_31971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31971__$1,inst_31969);
} else {
return null;
}
}
}
}
});})(c__26336__auto__))
;
return ((function (switch__26224__auto__,c__26336__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__26225__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__26225__auto____0 = (function (){
var statearr_31978 = [null,null,null,null,null,null,null,null,null];
(statearr_31978[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__26225__auto__);

(statearr_31978[(1)] = (1));

return statearr_31978;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__26225__auto____1 = (function (state_31971){
while(true){
var ret_value__26226__auto__ = (function (){try{while(true){
var result__26227__auto__ = switch__26224__auto__.call(null,state_31971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26227__auto__;
}
break;
}
}catch (e31979){if((e31979 instanceof Object)){
var ex__26228__auto__ = e31979;
var statearr_31980_31982 = state_31971;
(statearr_31980_31982[(5)] = ex__26228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31983 = state_31971;
state_31971 = G__31983;
continue;
} else {
return ret_value__26226__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__26225__auto__ = function(state_31971){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__26225__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__26225__auto____1.call(this,state_31971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__26225__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__26225__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__26225__auto__;
})()
;})(switch__26224__auto__,c__26336__auto__))
})();
var state__26338__auto__ = (function (){var statearr_31981 = f__26337__auto__.call(null);
(statearr_31981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto__);

return statearr_31981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(c__26336__auto__))
);

return c__26336__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__4657__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__4657__auto__)){
var el = temp__4657__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",{"id": "figwheelFailScreen", "style": [cljs.core.str("background-color: rgba(24, 26, 38, 0.95);"),cljs.core.str("position: absolute;"),cljs.core.str("z-index: 9000;"),cljs.core.str("width: 100vw;"),cljs.core.str("height: 100vh;"),cljs.core.str("top: 0px; left: 0px;"),cljs.core.str("font-family: monospace")].join('')},goog.dom.createDom("div",{"class": "message", "style": [cljs.core.str("color: #FFF5DB;"),cljs.core.str("width: 100vw;"),cljs.core.str("margin: auto;"),cljs.core.str("margin-top: 10px;"),cljs.core.str("text-align: center; "),cljs.core.str("padding: 2px 0px;"),cljs.core.str("font-size: 13px;"),cljs.core.str("position: relative")].join('')},goog.dom.createDom("a",{"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"},"X"),goog.dom.createDom("h2",{"style": "color: #FFF5DB"},"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",{"style": "font-size: 12px"},goog.dom.createDom("p",{"style": "color: #D07D7D;"},"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map