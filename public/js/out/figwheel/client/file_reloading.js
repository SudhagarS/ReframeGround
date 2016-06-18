// Compiled by ClojureScript 1.9.36 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__21674__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__21674__auto__){
return or__21674__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__21674__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29191_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29191_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__29196 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29197 = null;
var count__29198 = (0);
var i__29199 = (0);
while(true){
if((i__29199 < count__29198)){
var n = cljs.core._nth.call(null,chunk__29197,i__29199);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29200 = seq__29196;
var G__29201 = chunk__29197;
var G__29202 = count__29198;
var G__29203 = (i__29199 + (1));
seq__29196 = G__29200;
chunk__29197 = G__29201;
count__29198 = G__29202;
i__29199 = G__29203;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29196);
if(temp__4657__auto__){
var seq__29196__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29196__$1)){
var c__22485__auto__ = cljs.core.chunk_first.call(null,seq__29196__$1);
var G__29204 = cljs.core.chunk_rest.call(null,seq__29196__$1);
var G__29205 = c__22485__auto__;
var G__29206 = cljs.core.count.call(null,c__22485__auto__);
var G__29207 = (0);
seq__29196 = G__29204;
chunk__29197 = G__29205;
count__29198 = G__29206;
i__29199 = G__29207;
continue;
} else {
var n = cljs.core.first.call(null,seq__29196__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29208 = cljs.core.next.call(null,seq__29196__$1);
var G__29209 = null;
var G__29210 = (0);
var G__29211 = (0);
seq__29196 = G__29208;
chunk__29197 = G__29209;
count__29198 = G__29210;
i__29199 = G__29211;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__29262_29273 = cljs.core.seq.call(null,deps);
var chunk__29263_29274 = null;
var count__29264_29275 = (0);
var i__29265_29276 = (0);
while(true){
if((i__29265_29276 < count__29264_29275)){
var dep_29277 = cljs.core._nth.call(null,chunk__29263_29274,i__29265_29276);
topo_sort_helper_STAR_.call(null,dep_29277,(depth + (1)),state);

var G__29278 = seq__29262_29273;
var G__29279 = chunk__29263_29274;
var G__29280 = count__29264_29275;
var G__29281 = (i__29265_29276 + (1));
seq__29262_29273 = G__29278;
chunk__29263_29274 = G__29279;
count__29264_29275 = G__29280;
i__29265_29276 = G__29281;
continue;
} else {
var temp__4657__auto___29282 = cljs.core.seq.call(null,seq__29262_29273);
if(temp__4657__auto___29282){
var seq__29262_29283__$1 = temp__4657__auto___29282;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29262_29283__$1)){
var c__22485__auto___29284 = cljs.core.chunk_first.call(null,seq__29262_29283__$1);
var G__29285 = cljs.core.chunk_rest.call(null,seq__29262_29283__$1);
var G__29286 = c__22485__auto___29284;
var G__29287 = cljs.core.count.call(null,c__22485__auto___29284);
var G__29288 = (0);
seq__29262_29273 = G__29285;
chunk__29263_29274 = G__29286;
count__29264_29275 = G__29287;
i__29265_29276 = G__29288;
continue;
} else {
var dep_29289 = cljs.core.first.call(null,seq__29262_29283__$1);
topo_sort_helper_STAR_.call(null,dep_29289,(depth + (1)),state);

var G__29290 = cljs.core.next.call(null,seq__29262_29283__$1);
var G__29291 = null;
var G__29292 = (0);
var G__29293 = (0);
seq__29262_29273 = G__29290;
chunk__29263_29274 = G__29291;
count__29264_29275 = G__29292;
i__29265_29276 = G__29293;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29266){
var vec__29270 = p__29266;
var seq__29271 = cljs.core.seq.call(null,vec__29270);
var first__29272 = cljs.core.first.call(null,seq__29271);
var seq__29271__$1 = cljs.core.next.call(null,seq__29271);
var x = first__29272;
var xs = seq__29271__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29270,seq__29271,first__29272,seq__29271__$1,x,xs,get_deps__$1){
return (function (p1__29212_SHARP_){
return clojure.set.difference.call(null,p1__29212_SHARP_,x);
});})(vec__29270,seq__29271,first__29272,seq__29271__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29306 = cljs.core.seq.call(null,provides);
var chunk__29307 = null;
var count__29308 = (0);
var i__29309 = (0);
while(true){
if((i__29309 < count__29308)){
var prov = cljs.core._nth.call(null,chunk__29307,i__29309);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29310_29318 = cljs.core.seq.call(null,requires);
var chunk__29311_29319 = null;
var count__29312_29320 = (0);
var i__29313_29321 = (0);
while(true){
if((i__29313_29321 < count__29312_29320)){
var req_29322 = cljs.core._nth.call(null,chunk__29311_29319,i__29313_29321);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29322,prov);

var G__29323 = seq__29310_29318;
var G__29324 = chunk__29311_29319;
var G__29325 = count__29312_29320;
var G__29326 = (i__29313_29321 + (1));
seq__29310_29318 = G__29323;
chunk__29311_29319 = G__29324;
count__29312_29320 = G__29325;
i__29313_29321 = G__29326;
continue;
} else {
var temp__4657__auto___29327 = cljs.core.seq.call(null,seq__29310_29318);
if(temp__4657__auto___29327){
var seq__29310_29328__$1 = temp__4657__auto___29327;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29310_29328__$1)){
var c__22485__auto___29329 = cljs.core.chunk_first.call(null,seq__29310_29328__$1);
var G__29330 = cljs.core.chunk_rest.call(null,seq__29310_29328__$1);
var G__29331 = c__22485__auto___29329;
var G__29332 = cljs.core.count.call(null,c__22485__auto___29329);
var G__29333 = (0);
seq__29310_29318 = G__29330;
chunk__29311_29319 = G__29331;
count__29312_29320 = G__29332;
i__29313_29321 = G__29333;
continue;
} else {
var req_29334 = cljs.core.first.call(null,seq__29310_29328__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29334,prov);

var G__29335 = cljs.core.next.call(null,seq__29310_29328__$1);
var G__29336 = null;
var G__29337 = (0);
var G__29338 = (0);
seq__29310_29318 = G__29335;
chunk__29311_29319 = G__29336;
count__29312_29320 = G__29337;
i__29313_29321 = G__29338;
continue;
}
} else {
}
}
break;
}

var G__29339 = seq__29306;
var G__29340 = chunk__29307;
var G__29341 = count__29308;
var G__29342 = (i__29309 + (1));
seq__29306 = G__29339;
chunk__29307 = G__29340;
count__29308 = G__29341;
i__29309 = G__29342;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29306);
if(temp__4657__auto__){
var seq__29306__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29306__$1)){
var c__22485__auto__ = cljs.core.chunk_first.call(null,seq__29306__$1);
var G__29343 = cljs.core.chunk_rest.call(null,seq__29306__$1);
var G__29344 = c__22485__auto__;
var G__29345 = cljs.core.count.call(null,c__22485__auto__);
var G__29346 = (0);
seq__29306 = G__29343;
chunk__29307 = G__29344;
count__29308 = G__29345;
i__29309 = G__29346;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29306__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29314_29347 = cljs.core.seq.call(null,requires);
var chunk__29315_29348 = null;
var count__29316_29349 = (0);
var i__29317_29350 = (0);
while(true){
if((i__29317_29350 < count__29316_29349)){
var req_29351 = cljs.core._nth.call(null,chunk__29315_29348,i__29317_29350);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29351,prov);

var G__29352 = seq__29314_29347;
var G__29353 = chunk__29315_29348;
var G__29354 = count__29316_29349;
var G__29355 = (i__29317_29350 + (1));
seq__29314_29347 = G__29352;
chunk__29315_29348 = G__29353;
count__29316_29349 = G__29354;
i__29317_29350 = G__29355;
continue;
} else {
var temp__4657__auto___29356__$1 = cljs.core.seq.call(null,seq__29314_29347);
if(temp__4657__auto___29356__$1){
var seq__29314_29357__$1 = temp__4657__auto___29356__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29314_29357__$1)){
var c__22485__auto___29358 = cljs.core.chunk_first.call(null,seq__29314_29357__$1);
var G__29359 = cljs.core.chunk_rest.call(null,seq__29314_29357__$1);
var G__29360 = c__22485__auto___29358;
var G__29361 = cljs.core.count.call(null,c__22485__auto___29358);
var G__29362 = (0);
seq__29314_29347 = G__29359;
chunk__29315_29348 = G__29360;
count__29316_29349 = G__29361;
i__29317_29350 = G__29362;
continue;
} else {
var req_29363 = cljs.core.first.call(null,seq__29314_29357__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29363,prov);

var G__29364 = cljs.core.next.call(null,seq__29314_29357__$1);
var G__29365 = null;
var G__29366 = (0);
var G__29367 = (0);
seq__29314_29347 = G__29364;
chunk__29315_29348 = G__29365;
count__29316_29349 = G__29366;
i__29317_29350 = G__29367;
continue;
}
} else {
}
}
break;
}

var G__29368 = cljs.core.next.call(null,seq__29306__$1);
var G__29369 = null;
var G__29370 = (0);
var G__29371 = (0);
seq__29306 = G__29368;
chunk__29307 = G__29369;
count__29308 = G__29370;
i__29309 = G__29371;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__29376_29380 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29377_29381 = null;
var count__29378_29382 = (0);
var i__29379_29383 = (0);
while(true){
if((i__29379_29383 < count__29378_29382)){
var ns_29384 = cljs.core._nth.call(null,chunk__29377_29381,i__29379_29383);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29384);

var G__29385 = seq__29376_29380;
var G__29386 = chunk__29377_29381;
var G__29387 = count__29378_29382;
var G__29388 = (i__29379_29383 + (1));
seq__29376_29380 = G__29385;
chunk__29377_29381 = G__29386;
count__29378_29382 = G__29387;
i__29379_29383 = G__29388;
continue;
} else {
var temp__4657__auto___29389 = cljs.core.seq.call(null,seq__29376_29380);
if(temp__4657__auto___29389){
var seq__29376_29390__$1 = temp__4657__auto___29389;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29376_29390__$1)){
var c__22485__auto___29391 = cljs.core.chunk_first.call(null,seq__29376_29390__$1);
var G__29392 = cljs.core.chunk_rest.call(null,seq__29376_29390__$1);
var G__29393 = c__22485__auto___29391;
var G__29394 = cljs.core.count.call(null,c__22485__auto___29391);
var G__29395 = (0);
seq__29376_29380 = G__29392;
chunk__29377_29381 = G__29393;
count__29378_29382 = G__29394;
i__29379_29383 = G__29395;
continue;
} else {
var ns_29396 = cljs.core.first.call(null,seq__29376_29390__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29396);

var G__29397 = cljs.core.next.call(null,seq__29376_29390__$1);
var G__29398 = null;
var G__29399 = (0);
var G__29400 = (0);
seq__29376_29380 = G__29397;
chunk__29377_29381 = G__29398;
count__29378_29382 = G__29399;
i__29379_29383 = G__29400;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__21674__auto__ = goog.require__;
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__29401__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29401 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29402__i = 0, G__29402__a = new Array(arguments.length -  0);
while (G__29402__i < G__29402__a.length) {G__29402__a[G__29402__i] = arguments[G__29402__i + 0]; ++G__29402__i;}
  args = new cljs.core.IndexedSeq(G__29402__a,0);
} 
return G__29401__delegate.call(this,args);};
G__29401.cljs$lang$maxFixedArity = 0;
G__29401.cljs$lang$applyTo = (function (arglist__29403){
var args = cljs.core.seq(arglist__29403);
return G__29401__delegate(args);
});
G__29401.cljs$core$IFn$_invoke$arity$variadic = G__29401__delegate;
return G__29401;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29405 = cljs.core._EQ_;
var expr__29406 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29405.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29406))){
var path_parts = ((function (pred__29405,expr__29406){
return (function (p1__29404_SHARP_){
return clojure.string.split.call(null,p1__29404_SHARP_,/[\/\\]/);
});})(pred__29405,expr__29406))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__29405,expr__29406){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29408){if((e29408 instanceof Error)){
var e = e29408;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29408;

}
}})());
});
;})(path_parts,sep,root,pred__29405,expr__29406))
} else {
if(cljs.core.truth_(pred__29405.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29406))){
return ((function (pred__29405,expr__29406){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__29405,expr__29406){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__29405,expr__29406))
);

return deferred.addErrback(((function (deferred,pred__29405,expr__29406){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__29405,expr__29406))
);
});
;})(pred__29405,expr__29406))
} else {
return ((function (pred__29405,expr__29406){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29405,expr__29406))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29409,callback){
var map__29412 = p__29409;
var map__29412__$1 = ((((!((map__29412 == null)))?((((map__29412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29412):map__29412);
var file_msg = map__29412__$1;
var request_url = cljs.core.get.call(null,map__29412__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29412,map__29412__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29412,map__29412__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26336__auto__){
return (function (){
var f__26337__auto__ = (function (){var switch__26224__auto__ = ((function (c__26336__auto__){
return (function (state_29436){
var state_val_29437 = (state_29436[(1)]);
if((state_val_29437 === (7))){
var inst_29432 = (state_29436[(2)]);
var state_29436__$1 = state_29436;
var statearr_29438_29458 = state_29436__$1;
(statearr_29438_29458[(2)] = inst_29432);

(statearr_29438_29458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (1))){
var state_29436__$1 = state_29436;
var statearr_29439_29459 = state_29436__$1;
(statearr_29439_29459[(2)] = null);

(statearr_29439_29459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (4))){
var inst_29416 = (state_29436[(7)]);
var inst_29416__$1 = (state_29436[(2)]);
var state_29436__$1 = (function (){var statearr_29440 = state_29436;
(statearr_29440[(7)] = inst_29416__$1);

return statearr_29440;
})();
if(cljs.core.truth_(inst_29416__$1)){
var statearr_29441_29460 = state_29436__$1;
(statearr_29441_29460[(1)] = (5));

} else {
var statearr_29442_29461 = state_29436__$1;
(statearr_29442_29461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (6))){
var state_29436__$1 = state_29436;
var statearr_29443_29462 = state_29436__$1;
(statearr_29443_29462[(2)] = null);

(statearr_29443_29462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (3))){
var inst_29434 = (state_29436[(2)]);
var state_29436__$1 = state_29436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29436__$1,inst_29434);
} else {
if((state_val_29437 === (2))){
var state_29436__$1 = state_29436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29436__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29437 === (11))){
var inst_29428 = (state_29436[(2)]);
var state_29436__$1 = (function (){var statearr_29444 = state_29436;
(statearr_29444[(8)] = inst_29428);

return statearr_29444;
})();
var statearr_29445_29463 = state_29436__$1;
(statearr_29445_29463[(2)] = null);

(statearr_29445_29463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (9))){
var inst_29422 = (state_29436[(9)]);
var inst_29420 = (state_29436[(10)]);
var inst_29424 = inst_29422.call(null,inst_29420);
var state_29436__$1 = state_29436;
var statearr_29446_29464 = state_29436__$1;
(statearr_29446_29464[(2)] = inst_29424);

(statearr_29446_29464[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (5))){
var inst_29416 = (state_29436[(7)]);
var inst_29418 = figwheel.client.file_reloading.blocking_load.call(null,inst_29416);
var state_29436__$1 = state_29436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29436__$1,(8),inst_29418);
} else {
if((state_val_29437 === (10))){
var inst_29420 = (state_29436[(10)]);
var inst_29426 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29420);
var state_29436__$1 = state_29436;
var statearr_29447_29465 = state_29436__$1;
(statearr_29447_29465[(2)] = inst_29426);

(statearr_29447_29465[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (8))){
var inst_29416 = (state_29436[(7)]);
var inst_29422 = (state_29436[(9)]);
var inst_29420 = (state_29436[(2)]);
var inst_29421 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29422__$1 = cljs.core.get.call(null,inst_29421,inst_29416);
var state_29436__$1 = (function (){var statearr_29448 = state_29436;
(statearr_29448[(9)] = inst_29422__$1);

(statearr_29448[(10)] = inst_29420);

return statearr_29448;
})();
if(cljs.core.truth_(inst_29422__$1)){
var statearr_29449_29466 = state_29436__$1;
(statearr_29449_29466[(1)] = (9));

} else {
var statearr_29450_29467 = state_29436__$1;
(statearr_29450_29467[(1)] = (10));

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
});})(c__26336__auto__))
;
return ((function (switch__26224__auto__,c__26336__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26225__auto__ = null;
var figwheel$client$file_reloading$state_machine__26225__auto____0 = (function (){
var statearr_29454 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29454[(0)] = figwheel$client$file_reloading$state_machine__26225__auto__);

(statearr_29454[(1)] = (1));

return statearr_29454;
});
var figwheel$client$file_reloading$state_machine__26225__auto____1 = (function (state_29436){
while(true){
var ret_value__26226__auto__ = (function (){try{while(true){
var result__26227__auto__ = switch__26224__auto__.call(null,state_29436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26227__auto__;
}
break;
}
}catch (e29455){if((e29455 instanceof Object)){
var ex__26228__auto__ = e29455;
var statearr_29456_29468 = state_29436;
(statearr_29456_29468[(5)] = ex__26228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29469 = state_29436;
state_29436 = G__29469;
continue;
} else {
return ret_value__26226__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26225__auto__ = function(state_29436){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26225__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26225__auto____1.call(this,state_29436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26225__auto____0;
figwheel$client$file_reloading$state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26225__auto____1;
return figwheel$client$file_reloading$state_machine__26225__auto__;
})()
;})(switch__26224__auto__,c__26336__auto__))
})();
var state__26338__auto__ = (function (){var statearr_29457 = f__26337__auto__.call(null);
(statearr_29457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto__);

return statearr_29457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(c__26336__auto__))
);

return c__26336__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29470,callback){
var map__29473 = p__29470;
var map__29473__$1 = ((((!((map__29473 == null)))?((((map__29473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29473):map__29473);
var file_msg = map__29473__$1;
var namespace = cljs.core.get.call(null,map__29473__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29473,map__29473__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29473,map__29473__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29475){
var map__29478 = p__29475;
var map__29478__$1 = ((((!((map__29478 == null)))?((((map__29478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29478):map__29478);
var file_msg = map__29478__$1;
var namespace = cljs.core.get.call(null,map__29478__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__21662__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__21662__auto__){
var or__21674__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
var or__21674__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21674__auto____$1)){
return or__21674__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__21662__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29480,callback){
var map__29483 = p__29480;
var map__29483__$1 = ((((!((map__29483 == null)))?((((map__29483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29483):map__29483);
var file_msg = map__29483__$1;
var request_url = cljs.core.get.call(null,map__29483__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29483__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26336__auto___29587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26336__auto___29587,out){
return (function (){
var f__26337__auto__ = (function (){var switch__26224__auto__ = ((function (c__26336__auto___29587,out){
return (function (state_29569){
var state_val_29570 = (state_29569[(1)]);
if((state_val_29570 === (1))){
var inst_29543 = cljs.core.seq.call(null,files);
var inst_29544 = cljs.core.first.call(null,inst_29543);
var inst_29545 = cljs.core.next.call(null,inst_29543);
var inst_29546 = files;
var state_29569__$1 = (function (){var statearr_29571 = state_29569;
(statearr_29571[(7)] = inst_29544);

(statearr_29571[(8)] = inst_29546);

(statearr_29571[(9)] = inst_29545);

return statearr_29571;
})();
var statearr_29572_29588 = state_29569__$1;
(statearr_29572_29588[(2)] = null);

(statearr_29572_29588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (2))){
var inst_29552 = (state_29569[(10)]);
var inst_29546 = (state_29569[(8)]);
var inst_29551 = cljs.core.seq.call(null,inst_29546);
var inst_29552__$1 = cljs.core.first.call(null,inst_29551);
var inst_29553 = cljs.core.next.call(null,inst_29551);
var inst_29554 = (inst_29552__$1 == null);
var inst_29555 = cljs.core.not.call(null,inst_29554);
var state_29569__$1 = (function (){var statearr_29573 = state_29569;
(statearr_29573[(10)] = inst_29552__$1);

(statearr_29573[(11)] = inst_29553);

return statearr_29573;
})();
if(inst_29555){
var statearr_29574_29589 = state_29569__$1;
(statearr_29574_29589[(1)] = (4));

} else {
var statearr_29575_29590 = state_29569__$1;
(statearr_29575_29590[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (3))){
var inst_29567 = (state_29569[(2)]);
var state_29569__$1 = state_29569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29569__$1,inst_29567);
} else {
if((state_val_29570 === (4))){
var inst_29552 = (state_29569[(10)]);
var inst_29557 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29552);
var state_29569__$1 = state_29569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29569__$1,(7),inst_29557);
} else {
if((state_val_29570 === (5))){
var inst_29563 = cljs.core.async.close_BANG_.call(null,out);
var state_29569__$1 = state_29569;
var statearr_29576_29591 = state_29569__$1;
(statearr_29576_29591[(2)] = inst_29563);

(statearr_29576_29591[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (6))){
var inst_29565 = (state_29569[(2)]);
var state_29569__$1 = state_29569;
var statearr_29577_29592 = state_29569__$1;
(statearr_29577_29592[(2)] = inst_29565);

(statearr_29577_29592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (7))){
var inst_29553 = (state_29569[(11)]);
var inst_29559 = (state_29569[(2)]);
var inst_29560 = cljs.core.async.put_BANG_.call(null,out,inst_29559);
var inst_29546 = inst_29553;
var state_29569__$1 = (function (){var statearr_29578 = state_29569;
(statearr_29578[(12)] = inst_29560);

(statearr_29578[(8)] = inst_29546);

return statearr_29578;
})();
var statearr_29579_29593 = state_29569__$1;
(statearr_29579_29593[(2)] = null);

(statearr_29579_29593[(1)] = (2));


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
});})(c__26336__auto___29587,out))
;
return ((function (switch__26224__auto__,c__26336__auto___29587,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26225__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26225__auto____0 = (function (){
var statearr_29583 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29583[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26225__auto__);

(statearr_29583[(1)] = (1));

return statearr_29583;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26225__auto____1 = (function (state_29569){
while(true){
var ret_value__26226__auto__ = (function (){try{while(true){
var result__26227__auto__ = switch__26224__auto__.call(null,state_29569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26227__auto__;
}
break;
}
}catch (e29584){if((e29584 instanceof Object)){
var ex__26228__auto__ = e29584;
var statearr_29585_29594 = state_29569;
(statearr_29585_29594[(5)] = ex__26228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29595 = state_29569;
state_29569 = G__29595;
continue;
} else {
return ret_value__26226__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26225__auto__ = function(state_29569){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26225__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26225__auto____1.call(this,state_29569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26225__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26225__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26225__auto__;
})()
;})(switch__26224__auto__,c__26336__auto___29587,out))
})();
var state__26338__auto__ = (function (){var statearr_29586 = f__26337__auto__.call(null);
(statearr_29586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto___29587);

return statearr_29586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(c__26336__auto___29587,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29596,opts){
var map__29600 = p__29596;
var map__29600__$1 = ((((!((map__29600 == null)))?((((map__29600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29600):map__29600);
var eval_body__$1 = cljs.core.get.call(null,map__29600__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29600__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__21662__auto__ = eval_body__$1;
if(cljs.core.truth_(and__21662__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__21662__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29602){var e = e29602;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__29603_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29603_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__29612){
var vec__29613 = p__29612;
var k = cljs.core.nth.call(null,vec__29613,(0),null);
var v = cljs.core.nth.call(null,vec__29613,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29616){
var vec__29617 = p__29616;
var k = cljs.core.nth.call(null,vec__29617,(0),null);
var v = cljs.core.nth.call(null,vec__29617,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29623,p__29624){
var map__29871 = p__29623;
var map__29871__$1 = ((((!((map__29871 == null)))?((((map__29871.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29871.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29871):map__29871);
var opts = map__29871__$1;
var before_jsload = cljs.core.get.call(null,map__29871__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29871__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29871__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29872 = p__29624;
var map__29872__$1 = ((((!((map__29872 == null)))?((((map__29872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29872):map__29872);
var msg = map__29872__$1;
var files = cljs.core.get.call(null,map__29872__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29872__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29872__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26336__auto__,map__29871,map__29871__$1,opts,before_jsload,on_jsload,reload_dependents,map__29872,map__29872__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26337__auto__ = (function (){var switch__26224__auto__ = ((function (c__26336__auto__,map__29871,map__29871__$1,opts,before_jsload,on_jsload,reload_dependents,map__29872,map__29872__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30025){
var state_val_30026 = (state_30025[(1)]);
if((state_val_30026 === (7))){
var inst_29888 = (state_30025[(7)]);
var inst_29887 = (state_30025[(8)]);
var inst_29889 = (state_30025[(9)]);
var inst_29886 = (state_30025[(10)]);
var inst_29894 = cljs.core._nth.call(null,inst_29887,inst_29889);
var inst_29895 = figwheel.client.file_reloading.eval_body.call(null,inst_29894,opts);
var inst_29896 = (inst_29889 + (1));
var tmp30027 = inst_29888;
var tmp30028 = inst_29887;
var tmp30029 = inst_29886;
var inst_29886__$1 = tmp30029;
var inst_29887__$1 = tmp30028;
var inst_29888__$1 = tmp30027;
var inst_29889__$1 = inst_29896;
var state_30025__$1 = (function (){var statearr_30030 = state_30025;
(statearr_30030[(7)] = inst_29888__$1);

(statearr_30030[(8)] = inst_29887__$1);

(statearr_30030[(9)] = inst_29889__$1);

(statearr_30030[(11)] = inst_29895);

(statearr_30030[(10)] = inst_29886__$1);

return statearr_30030;
})();
var statearr_30031_30117 = state_30025__$1;
(statearr_30031_30117[(2)] = null);

(statearr_30031_30117[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (20))){
var inst_29929 = (state_30025[(12)]);
var inst_29937 = figwheel.client.file_reloading.sort_files.call(null,inst_29929);
var state_30025__$1 = state_30025;
var statearr_30032_30118 = state_30025__$1;
(statearr_30032_30118[(2)] = inst_29937);

(statearr_30032_30118[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (27))){
var state_30025__$1 = state_30025;
var statearr_30033_30119 = state_30025__$1;
(statearr_30033_30119[(2)] = null);

(statearr_30033_30119[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (1))){
var inst_29878 = (state_30025[(13)]);
var inst_29875 = before_jsload.call(null,files);
var inst_29876 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29877 = (function (){return ((function (inst_29878,inst_29875,inst_29876,state_val_30026,c__26336__auto__,map__29871,map__29871__$1,opts,before_jsload,on_jsload,reload_dependents,map__29872,map__29872__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29620_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29620_SHARP_);
});
;})(inst_29878,inst_29875,inst_29876,state_val_30026,c__26336__auto__,map__29871,map__29871__$1,opts,before_jsload,on_jsload,reload_dependents,map__29872,map__29872__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29878__$1 = cljs.core.filter.call(null,inst_29877,files);
var inst_29879 = cljs.core.not_empty.call(null,inst_29878__$1);
var state_30025__$1 = (function (){var statearr_30034 = state_30025;
(statearr_30034[(14)] = inst_29876);

(statearr_30034[(15)] = inst_29875);

(statearr_30034[(13)] = inst_29878__$1);

return statearr_30034;
})();
if(cljs.core.truth_(inst_29879)){
var statearr_30035_30120 = state_30025__$1;
(statearr_30035_30120[(1)] = (2));

} else {
var statearr_30036_30121 = state_30025__$1;
(statearr_30036_30121[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (24))){
var state_30025__$1 = state_30025;
var statearr_30037_30122 = state_30025__$1;
(statearr_30037_30122[(2)] = null);

(statearr_30037_30122[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (39))){
var inst_29979 = (state_30025[(16)]);
var state_30025__$1 = state_30025;
var statearr_30038_30123 = state_30025__$1;
(statearr_30038_30123[(2)] = inst_29979);

(statearr_30038_30123[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (46))){
var inst_30020 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30039_30124 = state_30025__$1;
(statearr_30039_30124[(2)] = inst_30020);

(statearr_30039_30124[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (4))){
var inst_29923 = (state_30025[(2)]);
var inst_29924 = cljs.core.List.EMPTY;
var inst_29925 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29924);
var inst_29926 = (function (){return ((function (inst_29923,inst_29924,inst_29925,state_val_30026,c__26336__auto__,map__29871,map__29871__$1,opts,before_jsload,on_jsload,reload_dependents,map__29872,map__29872__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29621_SHARP_){
var and__21662__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29621_SHARP_);
if(cljs.core.truth_(and__21662__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29621_SHARP_));
} else {
return and__21662__auto__;
}
});
;})(inst_29923,inst_29924,inst_29925,state_val_30026,c__26336__auto__,map__29871,map__29871__$1,opts,before_jsload,on_jsload,reload_dependents,map__29872,map__29872__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29927 = cljs.core.filter.call(null,inst_29926,files);
var inst_29928 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29929 = cljs.core.concat.call(null,inst_29927,inst_29928);
var state_30025__$1 = (function (){var statearr_30040 = state_30025;
(statearr_30040[(12)] = inst_29929);

(statearr_30040[(17)] = inst_29923);

(statearr_30040[(18)] = inst_29925);

return statearr_30040;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30041_30125 = state_30025__$1;
(statearr_30041_30125[(1)] = (16));

} else {
var statearr_30042_30126 = state_30025__$1;
(statearr_30042_30126[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (15))){
var inst_29913 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30043_30127 = state_30025__$1;
(statearr_30043_30127[(2)] = inst_29913);

(statearr_30043_30127[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (21))){
var inst_29939 = (state_30025[(19)]);
var inst_29939__$1 = (state_30025[(2)]);
var inst_29940 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29939__$1);
var state_30025__$1 = (function (){var statearr_30044 = state_30025;
(statearr_30044[(19)] = inst_29939__$1);

return statearr_30044;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30025__$1,(22),inst_29940);
} else {
if((state_val_30026 === (31))){
var inst_30023 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30025__$1,inst_30023);
} else {
if((state_val_30026 === (32))){
var inst_29979 = (state_30025[(16)]);
var inst_29984 = inst_29979.cljs$lang$protocol_mask$partition0$;
var inst_29985 = (inst_29984 & (64));
var inst_29986 = inst_29979.cljs$core$ISeq$;
var inst_29987 = (inst_29985) || (inst_29986);
var state_30025__$1 = state_30025;
if(cljs.core.truth_(inst_29987)){
var statearr_30045_30128 = state_30025__$1;
(statearr_30045_30128[(1)] = (35));

} else {
var statearr_30046_30129 = state_30025__$1;
(statearr_30046_30129[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (40))){
var inst_30000 = (state_30025[(20)]);
var inst_29999 = (state_30025[(2)]);
var inst_30000__$1 = cljs.core.get.call(null,inst_29999,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30001 = cljs.core.get.call(null,inst_29999,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30002 = cljs.core.not_empty.call(null,inst_30000__$1);
var state_30025__$1 = (function (){var statearr_30047 = state_30025;
(statearr_30047[(21)] = inst_30001);

(statearr_30047[(20)] = inst_30000__$1);

return statearr_30047;
})();
if(cljs.core.truth_(inst_30002)){
var statearr_30048_30130 = state_30025__$1;
(statearr_30048_30130[(1)] = (41));

} else {
var statearr_30049_30131 = state_30025__$1;
(statearr_30049_30131[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (33))){
var state_30025__$1 = state_30025;
var statearr_30050_30132 = state_30025__$1;
(statearr_30050_30132[(2)] = false);

(statearr_30050_30132[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (13))){
var inst_29899 = (state_30025[(22)]);
var inst_29903 = cljs.core.chunk_first.call(null,inst_29899);
var inst_29904 = cljs.core.chunk_rest.call(null,inst_29899);
var inst_29905 = cljs.core.count.call(null,inst_29903);
var inst_29886 = inst_29904;
var inst_29887 = inst_29903;
var inst_29888 = inst_29905;
var inst_29889 = (0);
var state_30025__$1 = (function (){var statearr_30051 = state_30025;
(statearr_30051[(7)] = inst_29888);

(statearr_30051[(8)] = inst_29887);

(statearr_30051[(9)] = inst_29889);

(statearr_30051[(10)] = inst_29886);

return statearr_30051;
})();
var statearr_30052_30133 = state_30025__$1;
(statearr_30052_30133[(2)] = null);

(statearr_30052_30133[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (22))){
var inst_29939 = (state_30025[(19)]);
var inst_29947 = (state_30025[(23)]);
var inst_29942 = (state_30025[(24)]);
var inst_29943 = (state_30025[(25)]);
var inst_29942__$1 = (state_30025[(2)]);
var inst_29943__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29942__$1);
var inst_29944 = (function (){var all_files = inst_29939;
var res_SINGLEQUOTE_ = inst_29942__$1;
var res = inst_29943__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29939,inst_29947,inst_29942,inst_29943,inst_29942__$1,inst_29943__$1,state_val_30026,c__26336__auto__,map__29871,map__29871__$1,opts,before_jsload,on_jsload,reload_dependents,map__29872,map__29872__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29622_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29622_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29939,inst_29947,inst_29942,inst_29943,inst_29942__$1,inst_29943__$1,state_val_30026,c__26336__auto__,map__29871,map__29871__$1,opts,before_jsload,on_jsload,reload_dependents,map__29872,map__29872__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29945 = cljs.core.filter.call(null,inst_29944,inst_29942__$1);
var inst_29946 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29947__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29946);
var inst_29948 = cljs.core.not_empty.call(null,inst_29947__$1);
var state_30025__$1 = (function (){var statearr_30053 = state_30025;
(statearr_30053[(23)] = inst_29947__$1);

(statearr_30053[(24)] = inst_29942__$1);

(statearr_30053[(25)] = inst_29943__$1);

(statearr_30053[(26)] = inst_29945);

return statearr_30053;
})();
if(cljs.core.truth_(inst_29948)){
var statearr_30054_30134 = state_30025__$1;
(statearr_30054_30134[(1)] = (23));

} else {
var statearr_30055_30135 = state_30025__$1;
(statearr_30055_30135[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (36))){
var state_30025__$1 = state_30025;
var statearr_30056_30136 = state_30025__$1;
(statearr_30056_30136[(2)] = false);

(statearr_30056_30136[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (41))){
var inst_30000 = (state_30025[(20)]);
var inst_30004 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30005 = cljs.core.map.call(null,inst_30004,inst_30000);
var inst_30006 = cljs.core.pr_str.call(null,inst_30005);
var inst_30007 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30006)].join('');
var inst_30008 = figwheel.client.utils.log.call(null,inst_30007);
var state_30025__$1 = state_30025;
var statearr_30057_30137 = state_30025__$1;
(statearr_30057_30137[(2)] = inst_30008);

(statearr_30057_30137[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (43))){
var inst_30001 = (state_30025[(21)]);
var inst_30011 = (state_30025[(2)]);
var inst_30012 = cljs.core.not_empty.call(null,inst_30001);
var state_30025__$1 = (function (){var statearr_30058 = state_30025;
(statearr_30058[(27)] = inst_30011);

return statearr_30058;
})();
if(cljs.core.truth_(inst_30012)){
var statearr_30059_30138 = state_30025__$1;
(statearr_30059_30138[(1)] = (44));

} else {
var statearr_30060_30139 = state_30025__$1;
(statearr_30060_30139[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (29))){
var inst_29939 = (state_30025[(19)]);
var inst_29947 = (state_30025[(23)]);
var inst_29942 = (state_30025[(24)]);
var inst_29943 = (state_30025[(25)]);
var inst_29979 = (state_30025[(16)]);
var inst_29945 = (state_30025[(26)]);
var inst_29975 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29978 = (function (){var all_files = inst_29939;
var res_SINGLEQUOTE_ = inst_29942;
var res = inst_29943;
var files_not_loaded = inst_29945;
var dependencies_that_loaded = inst_29947;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29939,inst_29947,inst_29942,inst_29943,inst_29979,inst_29945,inst_29975,state_val_30026,c__26336__auto__,map__29871,map__29871__$1,opts,before_jsload,on_jsload,reload_dependents,map__29872,map__29872__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29977){
var map__30061 = p__29977;
var map__30061__$1 = ((((!((map__30061 == null)))?((((map__30061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30061):map__30061);
var namespace = cljs.core.get.call(null,map__30061__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29939,inst_29947,inst_29942,inst_29943,inst_29979,inst_29945,inst_29975,state_val_30026,c__26336__auto__,map__29871,map__29871__$1,opts,before_jsload,on_jsload,reload_dependents,map__29872,map__29872__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29979__$1 = cljs.core.group_by.call(null,inst_29978,inst_29945);
var inst_29981 = (inst_29979__$1 == null);
var inst_29982 = cljs.core.not.call(null,inst_29981);
var state_30025__$1 = (function (){var statearr_30063 = state_30025;
(statearr_30063[(28)] = inst_29975);

(statearr_30063[(16)] = inst_29979__$1);

return statearr_30063;
})();
if(inst_29982){
var statearr_30064_30140 = state_30025__$1;
(statearr_30064_30140[(1)] = (32));

} else {
var statearr_30065_30141 = state_30025__$1;
(statearr_30065_30141[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (44))){
var inst_30001 = (state_30025[(21)]);
var inst_30014 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30001);
var inst_30015 = cljs.core.pr_str.call(null,inst_30014);
var inst_30016 = [cljs.core.str("not required: "),cljs.core.str(inst_30015)].join('');
var inst_30017 = figwheel.client.utils.log.call(null,inst_30016);
var state_30025__$1 = state_30025;
var statearr_30066_30142 = state_30025__$1;
(statearr_30066_30142[(2)] = inst_30017);

(statearr_30066_30142[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (6))){
var inst_29920 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30067_30143 = state_30025__$1;
(statearr_30067_30143[(2)] = inst_29920);

(statearr_30067_30143[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (28))){
var inst_29945 = (state_30025[(26)]);
var inst_29972 = (state_30025[(2)]);
var inst_29973 = cljs.core.not_empty.call(null,inst_29945);
var state_30025__$1 = (function (){var statearr_30068 = state_30025;
(statearr_30068[(29)] = inst_29972);

return statearr_30068;
})();
if(cljs.core.truth_(inst_29973)){
var statearr_30069_30144 = state_30025__$1;
(statearr_30069_30144[(1)] = (29));

} else {
var statearr_30070_30145 = state_30025__$1;
(statearr_30070_30145[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (25))){
var inst_29943 = (state_30025[(25)]);
var inst_29959 = (state_30025[(2)]);
var inst_29960 = cljs.core.not_empty.call(null,inst_29943);
var state_30025__$1 = (function (){var statearr_30071 = state_30025;
(statearr_30071[(30)] = inst_29959);

return statearr_30071;
})();
if(cljs.core.truth_(inst_29960)){
var statearr_30072_30146 = state_30025__$1;
(statearr_30072_30146[(1)] = (26));

} else {
var statearr_30073_30147 = state_30025__$1;
(statearr_30073_30147[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (34))){
var inst_29994 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
if(cljs.core.truth_(inst_29994)){
var statearr_30074_30148 = state_30025__$1;
(statearr_30074_30148[(1)] = (38));

} else {
var statearr_30075_30149 = state_30025__$1;
(statearr_30075_30149[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (17))){
var state_30025__$1 = state_30025;
var statearr_30076_30150 = state_30025__$1;
(statearr_30076_30150[(2)] = recompile_dependents);

(statearr_30076_30150[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (3))){
var state_30025__$1 = state_30025;
var statearr_30077_30151 = state_30025__$1;
(statearr_30077_30151[(2)] = null);

(statearr_30077_30151[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (12))){
var inst_29916 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30078_30152 = state_30025__$1;
(statearr_30078_30152[(2)] = inst_29916);

(statearr_30078_30152[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (2))){
var inst_29878 = (state_30025[(13)]);
var inst_29885 = cljs.core.seq.call(null,inst_29878);
var inst_29886 = inst_29885;
var inst_29887 = null;
var inst_29888 = (0);
var inst_29889 = (0);
var state_30025__$1 = (function (){var statearr_30079 = state_30025;
(statearr_30079[(7)] = inst_29888);

(statearr_30079[(8)] = inst_29887);

(statearr_30079[(9)] = inst_29889);

(statearr_30079[(10)] = inst_29886);

return statearr_30079;
})();
var statearr_30080_30153 = state_30025__$1;
(statearr_30080_30153[(2)] = null);

(statearr_30080_30153[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (23))){
var inst_29939 = (state_30025[(19)]);
var inst_29947 = (state_30025[(23)]);
var inst_29942 = (state_30025[(24)]);
var inst_29943 = (state_30025[(25)]);
var inst_29945 = (state_30025[(26)]);
var inst_29950 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29952 = (function (){var all_files = inst_29939;
var res_SINGLEQUOTE_ = inst_29942;
var res = inst_29943;
var files_not_loaded = inst_29945;
var dependencies_that_loaded = inst_29947;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29939,inst_29947,inst_29942,inst_29943,inst_29945,inst_29950,state_val_30026,c__26336__auto__,map__29871,map__29871__$1,opts,before_jsload,on_jsload,reload_dependents,map__29872,map__29872__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29951){
var map__30081 = p__29951;
var map__30081__$1 = ((((!((map__30081 == null)))?((((map__30081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30081):map__30081);
var request_url = cljs.core.get.call(null,map__30081__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29939,inst_29947,inst_29942,inst_29943,inst_29945,inst_29950,state_val_30026,c__26336__auto__,map__29871,map__29871__$1,opts,before_jsload,on_jsload,reload_dependents,map__29872,map__29872__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29953 = cljs.core.reverse.call(null,inst_29947);
var inst_29954 = cljs.core.map.call(null,inst_29952,inst_29953);
var inst_29955 = cljs.core.pr_str.call(null,inst_29954);
var inst_29956 = figwheel.client.utils.log.call(null,inst_29955);
var state_30025__$1 = (function (){var statearr_30083 = state_30025;
(statearr_30083[(31)] = inst_29950);

return statearr_30083;
})();
var statearr_30084_30154 = state_30025__$1;
(statearr_30084_30154[(2)] = inst_29956);

(statearr_30084_30154[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (35))){
var state_30025__$1 = state_30025;
var statearr_30085_30155 = state_30025__$1;
(statearr_30085_30155[(2)] = true);

(statearr_30085_30155[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (19))){
var inst_29929 = (state_30025[(12)]);
var inst_29935 = figwheel.client.file_reloading.expand_files.call(null,inst_29929);
var state_30025__$1 = state_30025;
var statearr_30086_30156 = state_30025__$1;
(statearr_30086_30156[(2)] = inst_29935);

(statearr_30086_30156[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (11))){
var state_30025__$1 = state_30025;
var statearr_30087_30157 = state_30025__$1;
(statearr_30087_30157[(2)] = null);

(statearr_30087_30157[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (9))){
var inst_29918 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30088_30158 = state_30025__$1;
(statearr_30088_30158[(2)] = inst_29918);

(statearr_30088_30158[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (5))){
var inst_29888 = (state_30025[(7)]);
var inst_29889 = (state_30025[(9)]);
var inst_29891 = (inst_29889 < inst_29888);
var inst_29892 = inst_29891;
var state_30025__$1 = state_30025;
if(cljs.core.truth_(inst_29892)){
var statearr_30089_30159 = state_30025__$1;
(statearr_30089_30159[(1)] = (7));

} else {
var statearr_30090_30160 = state_30025__$1;
(statearr_30090_30160[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (14))){
var inst_29899 = (state_30025[(22)]);
var inst_29908 = cljs.core.first.call(null,inst_29899);
var inst_29909 = figwheel.client.file_reloading.eval_body.call(null,inst_29908,opts);
var inst_29910 = cljs.core.next.call(null,inst_29899);
var inst_29886 = inst_29910;
var inst_29887 = null;
var inst_29888 = (0);
var inst_29889 = (0);
var state_30025__$1 = (function (){var statearr_30091 = state_30025;
(statearr_30091[(32)] = inst_29909);

(statearr_30091[(7)] = inst_29888);

(statearr_30091[(8)] = inst_29887);

(statearr_30091[(9)] = inst_29889);

(statearr_30091[(10)] = inst_29886);

return statearr_30091;
})();
var statearr_30092_30161 = state_30025__$1;
(statearr_30092_30161[(2)] = null);

(statearr_30092_30161[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (45))){
var state_30025__$1 = state_30025;
var statearr_30093_30162 = state_30025__$1;
(statearr_30093_30162[(2)] = null);

(statearr_30093_30162[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (26))){
var inst_29939 = (state_30025[(19)]);
var inst_29947 = (state_30025[(23)]);
var inst_29942 = (state_30025[(24)]);
var inst_29943 = (state_30025[(25)]);
var inst_29945 = (state_30025[(26)]);
var inst_29962 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29964 = (function (){var all_files = inst_29939;
var res_SINGLEQUOTE_ = inst_29942;
var res = inst_29943;
var files_not_loaded = inst_29945;
var dependencies_that_loaded = inst_29947;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29939,inst_29947,inst_29942,inst_29943,inst_29945,inst_29962,state_val_30026,c__26336__auto__,map__29871,map__29871__$1,opts,before_jsload,on_jsload,reload_dependents,map__29872,map__29872__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29963){
var map__30094 = p__29963;
var map__30094__$1 = ((((!((map__30094 == null)))?((((map__30094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30094):map__30094);
var namespace = cljs.core.get.call(null,map__30094__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30094__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29939,inst_29947,inst_29942,inst_29943,inst_29945,inst_29962,state_val_30026,c__26336__auto__,map__29871,map__29871__$1,opts,before_jsload,on_jsload,reload_dependents,map__29872,map__29872__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29965 = cljs.core.map.call(null,inst_29964,inst_29943);
var inst_29966 = cljs.core.pr_str.call(null,inst_29965);
var inst_29967 = figwheel.client.utils.log.call(null,inst_29966);
var inst_29968 = (function (){var all_files = inst_29939;
var res_SINGLEQUOTE_ = inst_29942;
var res = inst_29943;
var files_not_loaded = inst_29945;
var dependencies_that_loaded = inst_29947;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29939,inst_29947,inst_29942,inst_29943,inst_29945,inst_29962,inst_29964,inst_29965,inst_29966,inst_29967,state_val_30026,c__26336__auto__,map__29871,map__29871__$1,opts,before_jsload,on_jsload,reload_dependents,map__29872,map__29872__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29939,inst_29947,inst_29942,inst_29943,inst_29945,inst_29962,inst_29964,inst_29965,inst_29966,inst_29967,state_val_30026,c__26336__auto__,map__29871,map__29871__$1,opts,before_jsload,on_jsload,reload_dependents,map__29872,map__29872__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29969 = setTimeout(inst_29968,(10));
var state_30025__$1 = (function (){var statearr_30096 = state_30025;
(statearr_30096[(33)] = inst_29962);

(statearr_30096[(34)] = inst_29967);

return statearr_30096;
})();
var statearr_30097_30163 = state_30025__$1;
(statearr_30097_30163[(2)] = inst_29969);

(statearr_30097_30163[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (16))){
var state_30025__$1 = state_30025;
var statearr_30098_30164 = state_30025__$1;
(statearr_30098_30164[(2)] = reload_dependents);

(statearr_30098_30164[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (38))){
var inst_29979 = (state_30025[(16)]);
var inst_29996 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29979);
var state_30025__$1 = state_30025;
var statearr_30099_30165 = state_30025__$1;
(statearr_30099_30165[(2)] = inst_29996);

(statearr_30099_30165[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (30))){
var state_30025__$1 = state_30025;
var statearr_30100_30166 = state_30025__$1;
(statearr_30100_30166[(2)] = null);

(statearr_30100_30166[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (10))){
var inst_29899 = (state_30025[(22)]);
var inst_29901 = cljs.core.chunked_seq_QMARK_.call(null,inst_29899);
var state_30025__$1 = state_30025;
if(inst_29901){
var statearr_30101_30167 = state_30025__$1;
(statearr_30101_30167[(1)] = (13));

} else {
var statearr_30102_30168 = state_30025__$1;
(statearr_30102_30168[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (18))){
var inst_29933 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
if(cljs.core.truth_(inst_29933)){
var statearr_30103_30169 = state_30025__$1;
(statearr_30103_30169[(1)] = (19));

} else {
var statearr_30104_30170 = state_30025__$1;
(statearr_30104_30170[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (42))){
var state_30025__$1 = state_30025;
var statearr_30105_30171 = state_30025__$1;
(statearr_30105_30171[(2)] = null);

(statearr_30105_30171[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (37))){
var inst_29991 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30106_30172 = state_30025__$1;
(statearr_30106_30172[(2)] = inst_29991);

(statearr_30106_30172[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (8))){
var inst_29899 = (state_30025[(22)]);
var inst_29886 = (state_30025[(10)]);
var inst_29899__$1 = cljs.core.seq.call(null,inst_29886);
var state_30025__$1 = (function (){var statearr_30107 = state_30025;
(statearr_30107[(22)] = inst_29899__$1);

return statearr_30107;
})();
if(inst_29899__$1){
var statearr_30108_30173 = state_30025__$1;
(statearr_30108_30173[(1)] = (10));

} else {
var statearr_30109_30174 = state_30025__$1;
(statearr_30109_30174[(1)] = (11));

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
});})(c__26336__auto__,map__29871,map__29871__$1,opts,before_jsload,on_jsload,reload_dependents,map__29872,map__29872__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26224__auto__,c__26336__auto__,map__29871,map__29871__$1,opts,before_jsload,on_jsload,reload_dependents,map__29872,map__29872__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26225__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26225__auto____0 = (function (){
var statearr_30113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30113[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26225__auto__);

(statearr_30113[(1)] = (1));

return statearr_30113;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26225__auto____1 = (function (state_30025){
while(true){
var ret_value__26226__auto__ = (function (){try{while(true){
var result__26227__auto__ = switch__26224__auto__.call(null,state_30025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26227__auto__;
}
break;
}
}catch (e30114){if((e30114 instanceof Object)){
var ex__26228__auto__ = e30114;
var statearr_30115_30175 = state_30025;
(statearr_30115_30175[(5)] = ex__26228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30176 = state_30025;
state_30025 = G__30176;
continue;
} else {
return ret_value__26226__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26225__auto__ = function(state_30025){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26225__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26225__auto____1.call(this,state_30025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26225__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26225__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26225__auto__;
})()
;})(switch__26224__auto__,c__26336__auto__,map__29871,map__29871__$1,opts,before_jsload,on_jsload,reload_dependents,map__29872,map__29872__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26338__auto__ = (function (){var statearr_30116 = f__26337__auto__.call(null);
(statearr_30116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto__);

return statearr_30116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(c__26336__auto__,map__29871,map__29871__$1,opts,before_jsload,on_jsload,reload_dependents,map__29872,map__29872__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26336__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30179,link){
var map__30182 = p__30179;
var map__30182__$1 = ((((!((map__30182 == null)))?((((map__30182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30182):map__30182);
var file = cljs.core.get.call(null,map__30182__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__30182,map__30182__$1,file){
return (function (p1__30177_SHARP_,p2__30178_SHARP_){
if(cljs.core._EQ_.call(null,p1__30177_SHARP_,p2__30178_SHARP_)){
return p1__30177_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__30182,map__30182__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30188){
var map__30189 = p__30188;
var map__30189__$1 = ((((!((map__30189 == null)))?((((map__30189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30189):map__30189);
var match_length = cljs.core.get.call(null,map__30189__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30189__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30184_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30184_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args30191 = [];
var len__22749__auto___30194 = arguments.length;
var i__22750__auto___30195 = (0);
while(true){
if((i__22750__auto___30195 < len__22749__auto___30194)){
args30191.push((arguments[i__22750__auto___30195]));

var G__30196 = (i__22750__auto___30195 + (1));
i__22750__auto___30195 = G__30196;
continue;
} else {
}
break;
}

var G__30193 = args30191.length;
switch (G__30193) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30191.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30198_SHARP_,p2__30199_SHARP_){
return cljs.core.assoc.call(null,p1__30198_SHARP_,cljs.core.get.call(null,p2__30199_SHARP_,key),p2__30199_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30200){
var map__30203 = p__30200;
var map__30203__$1 = ((((!((map__30203 == null)))?((((map__30203.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30203.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30203):map__30203);
var f_data = map__30203__$1;
var file = cljs.core.get.call(null,map__30203__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30205,files_msg){
var map__30212 = p__30205;
var map__30212__$1 = ((((!((map__30212 == null)))?((((map__30212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30212):map__30212);
var opts = map__30212__$1;
var on_cssload = cljs.core.get.call(null,map__30212__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30214_30218 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__30215_30219 = null;
var count__30216_30220 = (0);
var i__30217_30221 = (0);
while(true){
if((i__30217_30221 < count__30216_30220)){
var f_30222 = cljs.core._nth.call(null,chunk__30215_30219,i__30217_30221);
figwheel.client.file_reloading.reload_css_file.call(null,f_30222);

var G__30223 = seq__30214_30218;
var G__30224 = chunk__30215_30219;
var G__30225 = count__30216_30220;
var G__30226 = (i__30217_30221 + (1));
seq__30214_30218 = G__30223;
chunk__30215_30219 = G__30224;
count__30216_30220 = G__30225;
i__30217_30221 = G__30226;
continue;
} else {
var temp__4657__auto___30227 = cljs.core.seq.call(null,seq__30214_30218);
if(temp__4657__auto___30227){
var seq__30214_30228__$1 = temp__4657__auto___30227;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30214_30228__$1)){
var c__22485__auto___30229 = cljs.core.chunk_first.call(null,seq__30214_30228__$1);
var G__30230 = cljs.core.chunk_rest.call(null,seq__30214_30228__$1);
var G__30231 = c__22485__auto___30229;
var G__30232 = cljs.core.count.call(null,c__22485__auto___30229);
var G__30233 = (0);
seq__30214_30218 = G__30230;
chunk__30215_30219 = G__30231;
count__30216_30220 = G__30232;
i__30217_30221 = G__30233;
continue;
} else {
var f_30234 = cljs.core.first.call(null,seq__30214_30228__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30234);

var G__30235 = cljs.core.next.call(null,seq__30214_30228__$1);
var G__30236 = null;
var G__30237 = (0);
var G__30238 = (0);
seq__30214_30218 = G__30235;
chunk__30215_30219 = G__30236;
count__30216_30220 = G__30237;
i__30217_30221 = G__30238;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__30212,map__30212__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__30212,map__30212__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map