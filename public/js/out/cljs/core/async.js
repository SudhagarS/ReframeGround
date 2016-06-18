// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args26381 = [];
var len__22749__auto___26387 = arguments.length;
var i__22750__auto___26388 = (0);
while(true){
if((i__22750__auto___26388 < len__22749__auto___26387)){
args26381.push((arguments[i__22750__auto___26388]));

var G__26389 = (i__22750__auto___26388 + (1));
i__22750__auto___26388 = G__26389;
continue;
} else {
}
break;
}

var G__26383 = args26381.length;
switch (G__26383) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26381.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async26384 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26384 = (function (f,blockable,meta26385){
this.f = f;
this.blockable = blockable;
this.meta26385 = meta26385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26386,meta26385__$1){
var self__ = this;
var _26386__$1 = this;
return (new cljs.core.async.t_cljs$core$async26384(self__.f,self__.blockable,meta26385__$1));
});

cljs.core.async.t_cljs$core$async26384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26386){
var self__ = this;
var _26386__$1 = this;
return self__.meta26385;
});

cljs.core.async.t_cljs$core$async26384.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26384.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26384.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26384.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26384.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26385","meta26385",1948203687,null)], null);
});

cljs.core.async.t_cljs$core$async26384.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26384";

cljs.core.async.t_cljs$core$async26384.cljs$lang$ctorPrWriter = (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async26384");
});

cljs.core.async.__GT_t_cljs$core$async26384 = (function cljs$core$async$__GT_t_cljs$core$async26384(f__$1,blockable__$1,meta26385){
return (new cljs.core.async.t_cljs$core$async26384(f__$1,blockable__$1,meta26385));
});

}

return (new cljs.core.async.t_cljs$core$async26384(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args26393 = [];
var len__22749__auto___26396 = arguments.length;
var i__22750__auto___26397 = (0);
while(true){
if((i__22750__auto___26397 < len__22749__auto___26396)){
args26393.push((arguments[i__22750__auto___26397]));

var G__26398 = (i__22750__auto___26397 + (1));
i__22750__auto___26397 = G__26398;
continue;
} else {
}
break;
}

var G__26395 = args26393.length;
switch (G__26395) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26393.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args26400 = [];
var len__22749__auto___26403 = arguments.length;
var i__22750__auto___26404 = (0);
while(true){
if((i__22750__auto___26404 < len__22749__auto___26403)){
args26400.push((arguments[i__22750__auto___26404]));

var G__26405 = (i__22750__auto___26404 + (1));
i__22750__auto___26404 = G__26405;
continue;
} else {
}
break;
}

var G__26402 = args26400.length;
switch (G__26402) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26400.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args26407 = [];
var len__22749__auto___26410 = arguments.length;
var i__22750__auto___26411 = (0);
while(true){
if((i__22750__auto___26411 < len__22749__auto___26410)){
args26407.push((arguments[i__22750__auto___26411]));

var G__26412 = (i__22750__auto___26411 + (1));
i__22750__auto___26411 = G__26412;
continue;
} else {
}
break;
}

var G__26409 = args26407.length;
switch (G__26409) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26407.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26414 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26414);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26414,ret){
return (function (){
return fn1.call(null,val_26414);
});})(val_26414,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args26415 = [];
var len__22749__auto___26418 = arguments.length;
var i__22750__auto___26419 = (0);
while(true){
if((i__22750__auto___26419 < len__22749__auto___26418)){
args26415.push((arguments[i__22750__auto___26419]));

var G__26420 = (i__22750__auto___26419 + (1));
i__22750__auto___26419 = G__26420;
continue;
} else {
}
break;
}

var G__26417 = args26415.length;
switch (G__26417) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26415.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__22589__auto___26422 = n;
var x_26423 = (0);
while(true){
if((x_26423 < n__22589__auto___26422)){
(a[x_26423] = (0));

var G__26424 = (x_26423 + (1));
x_26423 = G__26424;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26425 = (i + (1));
i = G__26425;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26429 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26429 = (function (alt_flag,flag,meta26430){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta26430 = meta26430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26431,meta26430__$1){
var self__ = this;
var _26431__$1 = this;
return (new cljs.core.async.t_cljs$core$async26429(self__.alt_flag,self__.flag,meta26430__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26429.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26431){
var self__ = this;
var _26431__$1 = this;
return self__.meta26430;
});})(flag))
;

cljs.core.async.t_cljs$core$async26429.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26429.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26429.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26429.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26429.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26430","meta26430",549979436,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26429.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26429";

cljs.core.async.t_cljs$core$async26429.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async26429");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async26429 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26429(alt_flag__$1,flag__$1,meta26430){
return (new cljs.core.async.t_cljs$core$async26429(alt_flag__$1,flag__$1,meta26430));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26429(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26435 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26435 = (function (alt_handler,flag,cb,meta26436){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta26436 = meta26436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26437,meta26436__$1){
var self__ = this;
var _26437__$1 = this;
return (new cljs.core.async.t_cljs$core$async26435(self__.alt_handler,self__.flag,self__.cb,meta26436__$1));
});

cljs.core.async.t_cljs$core$async26435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26437){
var self__ = this;
var _26437__$1 = this;
return self__.meta26436;
});

cljs.core.async.t_cljs$core$async26435.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26435.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26435.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26435.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26436","meta26436",2089557126,null)], null);
});

cljs.core.async.t_cljs$core$async26435.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26435.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26435";

cljs.core.async.t_cljs$core$async26435.cljs$lang$ctorPrWriter = (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async26435");
});

cljs.core.async.__GT_t_cljs$core$async26435 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26435(alt_handler__$1,flag__$1,cb__$1,meta26436){
return (new cljs.core.async.t_cljs$core$async26435(alt_handler__$1,flag__$1,cb__$1,meta26436));
});

}

return (new cljs.core.async.t_cljs$core$async26435(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26438_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26438_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26439_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26439_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__21674__auto__ = wport;
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26440 = (i + (1));
i = G__26440;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21674__auto__ = ret;
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__21662__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__21662__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__21662__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__22756__auto__ = [];
var len__22749__auto___26446 = arguments.length;
var i__22750__auto___26447 = (0);
while(true){
if((i__22750__auto___26447 < len__22749__auto___26446)){
args__22756__auto__.push((arguments[i__22750__auto___26447]));

var G__26448 = (i__22750__auto___26447 + (1));
i__22750__auto___26447 = G__26448;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((1) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22757__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26443){
var map__26444 = p__26443;
var map__26444__$1 = ((((!((map__26444 == null)))?((((map__26444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26444):map__26444);
var opts = map__26444__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26441){
var G__26442 = cljs.core.first.call(null,seq26441);
var seq26441__$1 = cljs.core.next.call(null,seq26441);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26442,seq26441__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args26449 = [];
var len__22749__auto___26499 = arguments.length;
var i__22750__auto___26500 = (0);
while(true){
if((i__22750__auto___26500 < len__22749__auto___26499)){
args26449.push((arguments[i__22750__auto___26500]));

var G__26501 = (i__22750__auto___26500 + (1));
i__22750__auto___26500 = G__26501;
continue;
} else {
}
break;
}

var G__26451 = args26449.length;
switch (G__26451) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26449.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26336__auto___26503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26336__auto___26503){
return (function (){
var f__26337__auto__ = (function (){var switch__26224__auto__ = ((function (c__26336__auto___26503){
return (function (state_26475){
var state_val_26476 = (state_26475[(1)]);
if((state_val_26476 === (7))){
var inst_26471 = (state_26475[(2)]);
var state_26475__$1 = state_26475;
var statearr_26477_26504 = state_26475__$1;
(statearr_26477_26504[(2)] = inst_26471);

(statearr_26477_26504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26476 === (1))){
var state_26475__$1 = state_26475;
var statearr_26478_26505 = state_26475__$1;
(statearr_26478_26505[(2)] = null);

(statearr_26478_26505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26476 === (4))){
var inst_26454 = (state_26475[(7)]);
var inst_26454__$1 = (state_26475[(2)]);
var inst_26455 = (inst_26454__$1 == null);
var state_26475__$1 = (function (){var statearr_26479 = state_26475;
(statearr_26479[(7)] = inst_26454__$1);

return statearr_26479;
})();
if(cljs.core.truth_(inst_26455)){
var statearr_26480_26506 = state_26475__$1;
(statearr_26480_26506[(1)] = (5));

} else {
var statearr_26481_26507 = state_26475__$1;
(statearr_26481_26507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26476 === (13))){
var state_26475__$1 = state_26475;
var statearr_26482_26508 = state_26475__$1;
(statearr_26482_26508[(2)] = null);

(statearr_26482_26508[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26476 === (6))){
var inst_26454 = (state_26475[(7)]);
var state_26475__$1 = state_26475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26475__$1,(11),to,inst_26454);
} else {
if((state_val_26476 === (3))){
var inst_26473 = (state_26475[(2)]);
var state_26475__$1 = state_26475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26475__$1,inst_26473);
} else {
if((state_val_26476 === (12))){
var state_26475__$1 = state_26475;
var statearr_26483_26509 = state_26475__$1;
(statearr_26483_26509[(2)] = null);

(statearr_26483_26509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26476 === (2))){
var state_26475__$1 = state_26475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26475__$1,(4),from);
} else {
if((state_val_26476 === (11))){
var inst_26464 = (state_26475[(2)]);
var state_26475__$1 = state_26475;
if(cljs.core.truth_(inst_26464)){
var statearr_26484_26510 = state_26475__$1;
(statearr_26484_26510[(1)] = (12));

} else {
var statearr_26485_26511 = state_26475__$1;
(statearr_26485_26511[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26476 === (9))){
var state_26475__$1 = state_26475;
var statearr_26486_26512 = state_26475__$1;
(statearr_26486_26512[(2)] = null);

(statearr_26486_26512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26476 === (5))){
var state_26475__$1 = state_26475;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26487_26513 = state_26475__$1;
(statearr_26487_26513[(1)] = (8));

} else {
var statearr_26488_26514 = state_26475__$1;
(statearr_26488_26514[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26476 === (14))){
var inst_26469 = (state_26475[(2)]);
var state_26475__$1 = state_26475;
var statearr_26489_26515 = state_26475__$1;
(statearr_26489_26515[(2)] = inst_26469);

(statearr_26489_26515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26476 === (10))){
var inst_26461 = (state_26475[(2)]);
var state_26475__$1 = state_26475;
var statearr_26490_26516 = state_26475__$1;
(statearr_26490_26516[(2)] = inst_26461);

(statearr_26490_26516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26476 === (8))){
var inst_26458 = cljs.core.async.close_BANG_.call(null,to);
var state_26475__$1 = state_26475;
var statearr_26491_26517 = state_26475__$1;
(statearr_26491_26517[(2)] = inst_26458);

(statearr_26491_26517[(1)] = (10));


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
});})(c__26336__auto___26503))
;
return ((function (switch__26224__auto__,c__26336__auto___26503){
return (function() {
var cljs$core$async$state_machine__26225__auto__ = null;
var cljs$core$async$state_machine__26225__auto____0 = (function (){
var statearr_26495 = [null,null,null,null,null,null,null,null];
(statearr_26495[(0)] = cljs$core$async$state_machine__26225__auto__);

(statearr_26495[(1)] = (1));

return statearr_26495;
});
var cljs$core$async$state_machine__26225__auto____1 = (function (state_26475){
while(true){
var ret_value__26226__auto__ = (function (){try{while(true){
var result__26227__auto__ = switch__26224__auto__.call(null,state_26475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26227__auto__;
}
break;
}
}catch (e26496){if((e26496 instanceof Object)){
var ex__26228__auto__ = e26496;
var statearr_26497_26518 = state_26475;
(statearr_26497_26518[(5)] = ex__26228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26519 = state_26475;
state_26475 = G__26519;
continue;
} else {
return ret_value__26226__auto__;
}
break;
}
});
cljs$core$async$state_machine__26225__auto__ = function(state_26475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26225__auto____1.call(this,state_26475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26225__auto____0;
cljs$core$async$state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26225__auto____1;
return cljs$core$async$state_machine__26225__auto__;
})()
;})(switch__26224__auto__,c__26336__auto___26503))
})();
var state__26338__auto__ = (function (){var statearr_26498 = f__26337__auto__.call(null);
(statearr_26498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto___26503);

return statearr_26498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(c__26336__auto___26503))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26707){
var vec__26708 = p__26707;
var v = cljs.core.nth.call(null,vec__26708,(0),null);
var p = cljs.core.nth.call(null,vec__26708,(1),null);
var job = vec__26708;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26336__auto___26894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26336__auto___26894,res,vec__26708,v,p,job,jobs,results){
return (function (){
var f__26337__auto__ = (function (){var switch__26224__auto__ = ((function (c__26336__auto___26894,res,vec__26708,v,p,job,jobs,results){
return (function (state_26715){
var state_val_26716 = (state_26715[(1)]);
if((state_val_26716 === (1))){
var state_26715__$1 = state_26715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26715__$1,(2),res,v);
} else {
if((state_val_26716 === (2))){
var inst_26712 = (state_26715[(2)]);
var inst_26713 = cljs.core.async.close_BANG_.call(null,res);
var state_26715__$1 = (function (){var statearr_26717 = state_26715;
(statearr_26717[(7)] = inst_26712);

return statearr_26717;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26715__$1,inst_26713);
} else {
return null;
}
}
});})(c__26336__auto___26894,res,vec__26708,v,p,job,jobs,results))
;
return ((function (switch__26224__auto__,c__26336__auto___26894,res,vec__26708,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26225__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26225__auto____0 = (function (){
var statearr_26721 = [null,null,null,null,null,null,null,null];
(statearr_26721[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26225__auto__);

(statearr_26721[(1)] = (1));

return statearr_26721;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26225__auto____1 = (function (state_26715){
while(true){
var ret_value__26226__auto__ = (function (){try{while(true){
var result__26227__auto__ = switch__26224__auto__.call(null,state_26715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26227__auto__;
}
break;
}
}catch (e26722){if((e26722 instanceof Object)){
var ex__26228__auto__ = e26722;
var statearr_26723_26895 = state_26715;
(statearr_26723_26895[(5)] = ex__26228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26896 = state_26715;
state_26715 = G__26896;
continue;
} else {
return ret_value__26226__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26225__auto__ = function(state_26715){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26225__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26225__auto____1.call(this,state_26715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26225__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26225__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26225__auto__;
})()
;})(switch__26224__auto__,c__26336__auto___26894,res,vec__26708,v,p,job,jobs,results))
})();
var state__26338__auto__ = (function (){var statearr_26724 = f__26337__auto__.call(null);
(statearr_26724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto___26894);

return statearr_26724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(c__26336__auto___26894,res,vec__26708,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26725){
var vec__26726 = p__26725;
var v = cljs.core.nth.call(null,vec__26726,(0),null);
var p = cljs.core.nth.call(null,vec__26726,(1),null);
var job = vec__26726;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__22589__auto___26897 = n;
var __26898 = (0);
while(true){
if((__26898 < n__22589__auto___26897)){
var G__26729_26899 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26729_26899) {
case "compute":
var c__26336__auto___26901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26898,c__26336__auto___26901,G__26729_26899,n__22589__auto___26897,jobs,results,process,async){
return (function (){
var f__26337__auto__ = (function (){var switch__26224__auto__ = ((function (__26898,c__26336__auto___26901,G__26729_26899,n__22589__auto___26897,jobs,results,process,async){
return (function (state_26742){
var state_val_26743 = (state_26742[(1)]);
if((state_val_26743 === (1))){
var state_26742__$1 = state_26742;
var statearr_26744_26902 = state_26742__$1;
(statearr_26744_26902[(2)] = null);

(statearr_26744_26902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26743 === (2))){
var state_26742__$1 = state_26742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26742__$1,(4),jobs);
} else {
if((state_val_26743 === (3))){
var inst_26740 = (state_26742[(2)]);
var state_26742__$1 = state_26742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26742__$1,inst_26740);
} else {
if((state_val_26743 === (4))){
var inst_26732 = (state_26742[(2)]);
var inst_26733 = process.call(null,inst_26732);
var state_26742__$1 = state_26742;
if(cljs.core.truth_(inst_26733)){
var statearr_26745_26903 = state_26742__$1;
(statearr_26745_26903[(1)] = (5));

} else {
var statearr_26746_26904 = state_26742__$1;
(statearr_26746_26904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26743 === (5))){
var state_26742__$1 = state_26742;
var statearr_26747_26905 = state_26742__$1;
(statearr_26747_26905[(2)] = null);

(statearr_26747_26905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26743 === (6))){
var state_26742__$1 = state_26742;
var statearr_26748_26906 = state_26742__$1;
(statearr_26748_26906[(2)] = null);

(statearr_26748_26906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26743 === (7))){
var inst_26738 = (state_26742[(2)]);
var state_26742__$1 = state_26742;
var statearr_26749_26907 = state_26742__$1;
(statearr_26749_26907[(2)] = inst_26738);

(statearr_26749_26907[(1)] = (3));


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
});})(__26898,c__26336__auto___26901,G__26729_26899,n__22589__auto___26897,jobs,results,process,async))
;
return ((function (__26898,switch__26224__auto__,c__26336__auto___26901,G__26729_26899,n__22589__auto___26897,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26225__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26225__auto____0 = (function (){
var statearr_26753 = [null,null,null,null,null,null,null];
(statearr_26753[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26225__auto__);

(statearr_26753[(1)] = (1));

return statearr_26753;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26225__auto____1 = (function (state_26742){
while(true){
var ret_value__26226__auto__ = (function (){try{while(true){
var result__26227__auto__ = switch__26224__auto__.call(null,state_26742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26227__auto__;
}
break;
}
}catch (e26754){if((e26754 instanceof Object)){
var ex__26228__auto__ = e26754;
var statearr_26755_26908 = state_26742;
(statearr_26755_26908[(5)] = ex__26228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26909 = state_26742;
state_26742 = G__26909;
continue;
} else {
return ret_value__26226__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26225__auto__ = function(state_26742){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26225__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26225__auto____1.call(this,state_26742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26225__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26225__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26225__auto__;
})()
;})(__26898,switch__26224__auto__,c__26336__auto___26901,G__26729_26899,n__22589__auto___26897,jobs,results,process,async))
})();
var state__26338__auto__ = (function (){var statearr_26756 = f__26337__auto__.call(null);
(statearr_26756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto___26901);

return statearr_26756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(__26898,c__26336__auto___26901,G__26729_26899,n__22589__auto___26897,jobs,results,process,async))
);


break;
case "async":
var c__26336__auto___26910 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26898,c__26336__auto___26910,G__26729_26899,n__22589__auto___26897,jobs,results,process,async){
return (function (){
var f__26337__auto__ = (function (){var switch__26224__auto__ = ((function (__26898,c__26336__auto___26910,G__26729_26899,n__22589__auto___26897,jobs,results,process,async){
return (function (state_26769){
var state_val_26770 = (state_26769[(1)]);
if((state_val_26770 === (1))){
var state_26769__$1 = state_26769;
var statearr_26771_26911 = state_26769__$1;
(statearr_26771_26911[(2)] = null);

(statearr_26771_26911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (2))){
var state_26769__$1 = state_26769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26769__$1,(4),jobs);
} else {
if((state_val_26770 === (3))){
var inst_26767 = (state_26769[(2)]);
var state_26769__$1 = state_26769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26769__$1,inst_26767);
} else {
if((state_val_26770 === (4))){
var inst_26759 = (state_26769[(2)]);
var inst_26760 = async.call(null,inst_26759);
var state_26769__$1 = state_26769;
if(cljs.core.truth_(inst_26760)){
var statearr_26772_26912 = state_26769__$1;
(statearr_26772_26912[(1)] = (5));

} else {
var statearr_26773_26913 = state_26769__$1;
(statearr_26773_26913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (5))){
var state_26769__$1 = state_26769;
var statearr_26774_26914 = state_26769__$1;
(statearr_26774_26914[(2)] = null);

(statearr_26774_26914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (6))){
var state_26769__$1 = state_26769;
var statearr_26775_26915 = state_26769__$1;
(statearr_26775_26915[(2)] = null);

(statearr_26775_26915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (7))){
var inst_26765 = (state_26769[(2)]);
var state_26769__$1 = state_26769;
var statearr_26776_26916 = state_26769__$1;
(statearr_26776_26916[(2)] = inst_26765);

(statearr_26776_26916[(1)] = (3));


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
});})(__26898,c__26336__auto___26910,G__26729_26899,n__22589__auto___26897,jobs,results,process,async))
;
return ((function (__26898,switch__26224__auto__,c__26336__auto___26910,G__26729_26899,n__22589__auto___26897,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26225__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26225__auto____0 = (function (){
var statearr_26780 = [null,null,null,null,null,null,null];
(statearr_26780[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26225__auto__);

(statearr_26780[(1)] = (1));

return statearr_26780;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26225__auto____1 = (function (state_26769){
while(true){
var ret_value__26226__auto__ = (function (){try{while(true){
var result__26227__auto__ = switch__26224__auto__.call(null,state_26769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26227__auto__;
}
break;
}
}catch (e26781){if((e26781 instanceof Object)){
var ex__26228__auto__ = e26781;
var statearr_26782_26917 = state_26769;
(statearr_26782_26917[(5)] = ex__26228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26918 = state_26769;
state_26769 = G__26918;
continue;
} else {
return ret_value__26226__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26225__auto__ = function(state_26769){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26225__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26225__auto____1.call(this,state_26769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26225__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26225__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26225__auto__;
})()
;})(__26898,switch__26224__auto__,c__26336__auto___26910,G__26729_26899,n__22589__auto___26897,jobs,results,process,async))
})();
var state__26338__auto__ = (function (){var statearr_26783 = f__26337__auto__.call(null);
(statearr_26783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto___26910);

return statearr_26783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(__26898,c__26336__auto___26910,G__26729_26899,n__22589__auto___26897,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26919 = (__26898 + (1));
__26898 = G__26919;
continue;
} else {
}
break;
}

var c__26336__auto___26920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26336__auto___26920,jobs,results,process,async){
return (function (){
var f__26337__auto__ = (function (){var switch__26224__auto__ = ((function (c__26336__auto___26920,jobs,results,process,async){
return (function (state_26805){
var state_val_26806 = (state_26805[(1)]);
if((state_val_26806 === (1))){
var state_26805__$1 = state_26805;
var statearr_26807_26921 = state_26805__$1;
(statearr_26807_26921[(2)] = null);

(statearr_26807_26921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26806 === (2))){
var state_26805__$1 = state_26805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26805__$1,(4),from);
} else {
if((state_val_26806 === (3))){
var inst_26803 = (state_26805[(2)]);
var state_26805__$1 = state_26805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26805__$1,inst_26803);
} else {
if((state_val_26806 === (4))){
var inst_26786 = (state_26805[(7)]);
var inst_26786__$1 = (state_26805[(2)]);
var inst_26787 = (inst_26786__$1 == null);
var state_26805__$1 = (function (){var statearr_26808 = state_26805;
(statearr_26808[(7)] = inst_26786__$1);

return statearr_26808;
})();
if(cljs.core.truth_(inst_26787)){
var statearr_26809_26922 = state_26805__$1;
(statearr_26809_26922[(1)] = (5));

} else {
var statearr_26810_26923 = state_26805__$1;
(statearr_26810_26923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26806 === (5))){
var inst_26789 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26805__$1 = state_26805;
var statearr_26811_26924 = state_26805__$1;
(statearr_26811_26924[(2)] = inst_26789);

(statearr_26811_26924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26806 === (6))){
var inst_26786 = (state_26805[(7)]);
var inst_26791 = (state_26805[(8)]);
var inst_26791__$1 = cljs.core.async.chan.call(null,(1));
var inst_26792 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26793 = [inst_26786,inst_26791__$1];
var inst_26794 = (new cljs.core.PersistentVector(null,2,(5),inst_26792,inst_26793,null));
var state_26805__$1 = (function (){var statearr_26812 = state_26805;
(statearr_26812[(8)] = inst_26791__$1);

return statearr_26812;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26805__$1,(8),jobs,inst_26794);
} else {
if((state_val_26806 === (7))){
var inst_26801 = (state_26805[(2)]);
var state_26805__$1 = state_26805;
var statearr_26813_26925 = state_26805__$1;
(statearr_26813_26925[(2)] = inst_26801);

(statearr_26813_26925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26806 === (8))){
var inst_26791 = (state_26805[(8)]);
var inst_26796 = (state_26805[(2)]);
var state_26805__$1 = (function (){var statearr_26814 = state_26805;
(statearr_26814[(9)] = inst_26796);

return statearr_26814;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26805__$1,(9),results,inst_26791);
} else {
if((state_val_26806 === (9))){
var inst_26798 = (state_26805[(2)]);
var state_26805__$1 = (function (){var statearr_26815 = state_26805;
(statearr_26815[(10)] = inst_26798);

return statearr_26815;
})();
var statearr_26816_26926 = state_26805__$1;
(statearr_26816_26926[(2)] = null);

(statearr_26816_26926[(1)] = (2));


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
});})(c__26336__auto___26920,jobs,results,process,async))
;
return ((function (switch__26224__auto__,c__26336__auto___26920,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26225__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26225__auto____0 = (function (){
var statearr_26820 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26820[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26225__auto__);

(statearr_26820[(1)] = (1));

return statearr_26820;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26225__auto____1 = (function (state_26805){
while(true){
var ret_value__26226__auto__ = (function (){try{while(true){
var result__26227__auto__ = switch__26224__auto__.call(null,state_26805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26227__auto__;
}
break;
}
}catch (e26821){if((e26821 instanceof Object)){
var ex__26228__auto__ = e26821;
var statearr_26822_26927 = state_26805;
(statearr_26822_26927[(5)] = ex__26228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26928 = state_26805;
state_26805 = G__26928;
continue;
} else {
return ret_value__26226__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26225__auto__ = function(state_26805){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26225__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26225__auto____1.call(this,state_26805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26225__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26225__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26225__auto__;
})()
;})(switch__26224__auto__,c__26336__auto___26920,jobs,results,process,async))
})();
var state__26338__auto__ = (function (){var statearr_26823 = f__26337__auto__.call(null);
(statearr_26823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto___26920);

return statearr_26823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(c__26336__auto___26920,jobs,results,process,async))
);


var c__26336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26336__auto__,jobs,results,process,async){
return (function (){
var f__26337__auto__ = (function (){var switch__26224__auto__ = ((function (c__26336__auto__,jobs,results,process,async){
return (function (state_26861){
var state_val_26862 = (state_26861[(1)]);
if((state_val_26862 === (7))){
var inst_26857 = (state_26861[(2)]);
var state_26861__$1 = state_26861;
var statearr_26863_26929 = state_26861__$1;
(statearr_26863_26929[(2)] = inst_26857);

(statearr_26863_26929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26862 === (20))){
var state_26861__$1 = state_26861;
var statearr_26864_26930 = state_26861__$1;
(statearr_26864_26930[(2)] = null);

(statearr_26864_26930[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26862 === (1))){
var state_26861__$1 = state_26861;
var statearr_26865_26931 = state_26861__$1;
(statearr_26865_26931[(2)] = null);

(statearr_26865_26931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26862 === (4))){
var inst_26826 = (state_26861[(7)]);
var inst_26826__$1 = (state_26861[(2)]);
var inst_26827 = (inst_26826__$1 == null);
var state_26861__$1 = (function (){var statearr_26866 = state_26861;
(statearr_26866[(7)] = inst_26826__$1);

return statearr_26866;
})();
if(cljs.core.truth_(inst_26827)){
var statearr_26867_26932 = state_26861__$1;
(statearr_26867_26932[(1)] = (5));

} else {
var statearr_26868_26933 = state_26861__$1;
(statearr_26868_26933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26862 === (15))){
var inst_26839 = (state_26861[(8)]);
var state_26861__$1 = state_26861;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26861__$1,(18),to,inst_26839);
} else {
if((state_val_26862 === (21))){
var inst_26852 = (state_26861[(2)]);
var state_26861__$1 = state_26861;
var statearr_26869_26934 = state_26861__$1;
(statearr_26869_26934[(2)] = inst_26852);

(statearr_26869_26934[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26862 === (13))){
var inst_26854 = (state_26861[(2)]);
var state_26861__$1 = (function (){var statearr_26870 = state_26861;
(statearr_26870[(9)] = inst_26854);

return statearr_26870;
})();
var statearr_26871_26935 = state_26861__$1;
(statearr_26871_26935[(2)] = null);

(statearr_26871_26935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26862 === (6))){
var inst_26826 = (state_26861[(7)]);
var state_26861__$1 = state_26861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26861__$1,(11),inst_26826);
} else {
if((state_val_26862 === (17))){
var inst_26847 = (state_26861[(2)]);
var state_26861__$1 = state_26861;
if(cljs.core.truth_(inst_26847)){
var statearr_26872_26936 = state_26861__$1;
(statearr_26872_26936[(1)] = (19));

} else {
var statearr_26873_26937 = state_26861__$1;
(statearr_26873_26937[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26862 === (3))){
var inst_26859 = (state_26861[(2)]);
var state_26861__$1 = state_26861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26861__$1,inst_26859);
} else {
if((state_val_26862 === (12))){
var inst_26836 = (state_26861[(10)]);
var state_26861__$1 = state_26861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26861__$1,(14),inst_26836);
} else {
if((state_val_26862 === (2))){
var state_26861__$1 = state_26861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26861__$1,(4),results);
} else {
if((state_val_26862 === (19))){
var state_26861__$1 = state_26861;
var statearr_26874_26938 = state_26861__$1;
(statearr_26874_26938[(2)] = null);

(statearr_26874_26938[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26862 === (11))){
var inst_26836 = (state_26861[(2)]);
var state_26861__$1 = (function (){var statearr_26875 = state_26861;
(statearr_26875[(10)] = inst_26836);

return statearr_26875;
})();
var statearr_26876_26939 = state_26861__$1;
(statearr_26876_26939[(2)] = null);

(statearr_26876_26939[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26862 === (9))){
var state_26861__$1 = state_26861;
var statearr_26877_26940 = state_26861__$1;
(statearr_26877_26940[(2)] = null);

(statearr_26877_26940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26862 === (5))){
var state_26861__$1 = state_26861;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26878_26941 = state_26861__$1;
(statearr_26878_26941[(1)] = (8));

} else {
var statearr_26879_26942 = state_26861__$1;
(statearr_26879_26942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26862 === (14))){
var inst_26841 = (state_26861[(11)]);
var inst_26839 = (state_26861[(8)]);
var inst_26839__$1 = (state_26861[(2)]);
var inst_26840 = (inst_26839__$1 == null);
var inst_26841__$1 = cljs.core.not.call(null,inst_26840);
var state_26861__$1 = (function (){var statearr_26880 = state_26861;
(statearr_26880[(11)] = inst_26841__$1);

(statearr_26880[(8)] = inst_26839__$1);

return statearr_26880;
})();
if(inst_26841__$1){
var statearr_26881_26943 = state_26861__$1;
(statearr_26881_26943[(1)] = (15));

} else {
var statearr_26882_26944 = state_26861__$1;
(statearr_26882_26944[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26862 === (16))){
var inst_26841 = (state_26861[(11)]);
var state_26861__$1 = state_26861;
var statearr_26883_26945 = state_26861__$1;
(statearr_26883_26945[(2)] = inst_26841);

(statearr_26883_26945[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26862 === (10))){
var inst_26833 = (state_26861[(2)]);
var state_26861__$1 = state_26861;
var statearr_26884_26946 = state_26861__$1;
(statearr_26884_26946[(2)] = inst_26833);

(statearr_26884_26946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26862 === (18))){
var inst_26844 = (state_26861[(2)]);
var state_26861__$1 = state_26861;
var statearr_26885_26947 = state_26861__$1;
(statearr_26885_26947[(2)] = inst_26844);

(statearr_26885_26947[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26862 === (8))){
var inst_26830 = cljs.core.async.close_BANG_.call(null,to);
var state_26861__$1 = state_26861;
var statearr_26886_26948 = state_26861__$1;
(statearr_26886_26948[(2)] = inst_26830);

(statearr_26886_26948[(1)] = (10));


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
});})(c__26336__auto__,jobs,results,process,async))
;
return ((function (switch__26224__auto__,c__26336__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26225__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26225__auto____0 = (function (){
var statearr_26890 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26890[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26225__auto__);

(statearr_26890[(1)] = (1));

return statearr_26890;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26225__auto____1 = (function (state_26861){
while(true){
var ret_value__26226__auto__ = (function (){try{while(true){
var result__26227__auto__ = switch__26224__auto__.call(null,state_26861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26227__auto__;
}
break;
}
}catch (e26891){if((e26891 instanceof Object)){
var ex__26228__auto__ = e26891;
var statearr_26892_26949 = state_26861;
(statearr_26892_26949[(5)] = ex__26228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26950 = state_26861;
state_26861 = G__26950;
continue;
} else {
return ret_value__26226__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26225__auto__ = function(state_26861){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26225__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26225__auto____1.call(this,state_26861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26225__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26225__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26225__auto__;
})()
;})(switch__26224__auto__,c__26336__auto__,jobs,results,process,async))
})();
var state__26338__auto__ = (function (){var statearr_26893 = f__26337__auto__.call(null);
(statearr_26893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto__);

return statearr_26893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(c__26336__auto__,jobs,results,process,async))
);

return c__26336__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args26951 = [];
var len__22749__auto___26954 = arguments.length;
var i__22750__auto___26955 = (0);
while(true){
if((i__22750__auto___26955 < len__22749__auto___26954)){
args26951.push((arguments[i__22750__auto___26955]));

var G__26956 = (i__22750__auto___26955 + (1));
i__22750__auto___26955 = G__26956;
continue;
} else {
}
break;
}

var G__26953 = args26951.length;
switch (G__26953) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26951.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args26958 = [];
var len__22749__auto___26961 = arguments.length;
var i__22750__auto___26962 = (0);
while(true){
if((i__22750__auto___26962 < len__22749__auto___26961)){
args26958.push((arguments[i__22750__auto___26962]));

var G__26963 = (i__22750__auto___26962 + (1));
i__22750__auto___26962 = G__26963;
continue;
} else {
}
break;
}

var G__26960 = args26958.length;
switch (G__26960) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26958.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args26965 = [];
var len__22749__auto___27018 = arguments.length;
var i__22750__auto___27019 = (0);
while(true){
if((i__22750__auto___27019 < len__22749__auto___27018)){
args26965.push((arguments[i__22750__auto___27019]));

var G__27020 = (i__22750__auto___27019 + (1));
i__22750__auto___27019 = G__27020;
continue;
} else {
}
break;
}

var G__26967 = args26965.length;
switch (G__26967) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26965.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26336__auto___27022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26336__auto___27022,tc,fc){
return (function (){
var f__26337__auto__ = (function (){var switch__26224__auto__ = ((function (c__26336__auto___27022,tc,fc){
return (function (state_26993){
var state_val_26994 = (state_26993[(1)]);
if((state_val_26994 === (7))){
var inst_26989 = (state_26993[(2)]);
var state_26993__$1 = state_26993;
var statearr_26995_27023 = state_26993__$1;
(statearr_26995_27023[(2)] = inst_26989);

(statearr_26995_27023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26994 === (1))){
var state_26993__$1 = state_26993;
var statearr_26996_27024 = state_26993__$1;
(statearr_26996_27024[(2)] = null);

(statearr_26996_27024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26994 === (4))){
var inst_26970 = (state_26993[(7)]);
var inst_26970__$1 = (state_26993[(2)]);
var inst_26971 = (inst_26970__$1 == null);
var state_26993__$1 = (function (){var statearr_26997 = state_26993;
(statearr_26997[(7)] = inst_26970__$1);

return statearr_26997;
})();
if(cljs.core.truth_(inst_26971)){
var statearr_26998_27025 = state_26993__$1;
(statearr_26998_27025[(1)] = (5));

} else {
var statearr_26999_27026 = state_26993__$1;
(statearr_26999_27026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26994 === (13))){
var state_26993__$1 = state_26993;
var statearr_27000_27027 = state_26993__$1;
(statearr_27000_27027[(2)] = null);

(statearr_27000_27027[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26994 === (6))){
var inst_26970 = (state_26993[(7)]);
var inst_26976 = p.call(null,inst_26970);
var state_26993__$1 = state_26993;
if(cljs.core.truth_(inst_26976)){
var statearr_27001_27028 = state_26993__$1;
(statearr_27001_27028[(1)] = (9));

} else {
var statearr_27002_27029 = state_26993__$1;
(statearr_27002_27029[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26994 === (3))){
var inst_26991 = (state_26993[(2)]);
var state_26993__$1 = state_26993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26993__$1,inst_26991);
} else {
if((state_val_26994 === (12))){
var state_26993__$1 = state_26993;
var statearr_27003_27030 = state_26993__$1;
(statearr_27003_27030[(2)] = null);

(statearr_27003_27030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26994 === (2))){
var state_26993__$1 = state_26993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26993__$1,(4),ch);
} else {
if((state_val_26994 === (11))){
var inst_26970 = (state_26993[(7)]);
var inst_26980 = (state_26993[(2)]);
var state_26993__$1 = state_26993;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26993__$1,(8),inst_26980,inst_26970);
} else {
if((state_val_26994 === (9))){
var state_26993__$1 = state_26993;
var statearr_27004_27031 = state_26993__$1;
(statearr_27004_27031[(2)] = tc);

(statearr_27004_27031[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26994 === (5))){
var inst_26973 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26974 = cljs.core.async.close_BANG_.call(null,fc);
var state_26993__$1 = (function (){var statearr_27005 = state_26993;
(statearr_27005[(8)] = inst_26973);

return statearr_27005;
})();
var statearr_27006_27032 = state_26993__$1;
(statearr_27006_27032[(2)] = inst_26974);

(statearr_27006_27032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26994 === (14))){
var inst_26987 = (state_26993[(2)]);
var state_26993__$1 = state_26993;
var statearr_27007_27033 = state_26993__$1;
(statearr_27007_27033[(2)] = inst_26987);

(statearr_27007_27033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26994 === (10))){
var state_26993__$1 = state_26993;
var statearr_27008_27034 = state_26993__$1;
(statearr_27008_27034[(2)] = fc);

(statearr_27008_27034[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26994 === (8))){
var inst_26982 = (state_26993[(2)]);
var state_26993__$1 = state_26993;
if(cljs.core.truth_(inst_26982)){
var statearr_27009_27035 = state_26993__$1;
(statearr_27009_27035[(1)] = (12));

} else {
var statearr_27010_27036 = state_26993__$1;
(statearr_27010_27036[(1)] = (13));

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
});})(c__26336__auto___27022,tc,fc))
;
return ((function (switch__26224__auto__,c__26336__auto___27022,tc,fc){
return (function() {
var cljs$core$async$state_machine__26225__auto__ = null;
var cljs$core$async$state_machine__26225__auto____0 = (function (){
var statearr_27014 = [null,null,null,null,null,null,null,null,null];
(statearr_27014[(0)] = cljs$core$async$state_machine__26225__auto__);

(statearr_27014[(1)] = (1));

return statearr_27014;
});
var cljs$core$async$state_machine__26225__auto____1 = (function (state_26993){
while(true){
var ret_value__26226__auto__ = (function (){try{while(true){
var result__26227__auto__ = switch__26224__auto__.call(null,state_26993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26227__auto__;
}
break;
}
}catch (e27015){if((e27015 instanceof Object)){
var ex__26228__auto__ = e27015;
var statearr_27016_27037 = state_26993;
(statearr_27016_27037[(5)] = ex__26228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27038 = state_26993;
state_26993 = G__27038;
continue;
} else {
return ret_value__26226__auto__;
}
break;
}
});
cljs$core$async$state_machine__26225__auto__ = function(state_26993){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26225__auto____1.call(this,state_26993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26225__auto____0;
cljs$core$async$state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26225__auto____1;
return cljs$core$async$state_machine__26225__auto__;
})()
;})(switch__26224__auto__,c__26336__auto___27022,tc,fc))
})();
var state__26338__auto__ = (function (){var statearr_27017 = f__26337__auto__.call(null);
(statearr_27017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto___27022);

return statearr_27017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(c__26336__auto___27022,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26336__auto__){
return (function (){
var f__26337__auto__ = (function (){var switch__26224__auto__ = ((function (c__26336__auto__){
return (function (state_27102){
var state_val_27103 = (state_27102[(1)]);
if((state_val_27103 === (7))){
var inst_27098 = (state_27102[(2)]);
var state_27102__$1 = state_27102;
var statearr_27104_27125 = state_27102__$1;
(statearr_27104_27125[(2)] = inst_27098);

(statearr_27104_27125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27103 === (1))){
var inst_27082 = init;
var state_27102__$1 = (function (){var statearr_27105 = state_27102;
(statearr_27105[(7)] = inst_27082);

return statearr_27105;
})();
var statearr_27106_27126 = state_27102__$1;
(statearr_27106_27126[(2)] = null);

(statearr_27106_27126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27103 === (4))){
var inst_27085 = (state_27102[(8)]);
var inst_27085__$1 = (state_27102[(2)]);
var inst_27086 = (inst_27085__$1 == null);
var state_27102__$1 = (function (){var statearr_27107 = state_27102;
(statearr_27107[(8)] = inst_27085__$1);

return statearr_27107;
})();
if(cljs.core.truth_(inst_27086)){
var statearr_27108_27127 = state_27102__$1;
(statearr_27108_27127[(1)] = (5));

} else {
var statearr_27109_27128 = state_27102__$1;
(statearr_27109_27128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27103 === (6))){
var inst_27082 = (state_27102[(7)]);
var inst_27085 = (state_27102[(8)]);
var inst_27089 = (state_27102[(9)]);
var inst_27089__$1 = f.call(null,inst_27082,inst_27085);
var inst_27090 = cljs.core.reduced_QMARK_.call(null,inst_27089__$1);
var state_27102__$1 = (function (){var statearr_27110 = state_27102;
(statearr_27110[(9)] = inst_27089__$1);

return statearr_27110;
})();
if(inst_27090){
var statearr_27111_27129 = state_27102__$1;
(statearr_27111_27129[(1)] = (8));

} else {
var statearr_27112_27130 = state_27102__$1;
(statearr_27112_27130[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27103 === (3))){
var inst_27100 = (state_27102[(2)]);
var state_27102__$1 = state_27102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27102__$1,inst_27100);
} else {
if((state_val_27103 === (2))){
var state_27102__$1 = state_27102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27102__$1,(4),ch);
} else {
if((state_val_27103 === (9))){
var inst_27089 = (state_27102[(9)]);
var inst_27082 = inst_27089;
var state_27102__$1 = (function (){var statearr_27113 = state_27102;
(statearr_27113[(7)] = inst_27082);

return statearr_27113;
})();
var statearr_27114_27131 = state_27102__$1;
(statearr_27114_27131[(2)] = null);

(statearr_27114_27131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27103 === (5))){
var inst_27082 = (state_27102[(7)]);
var state_27102__$1 = state_27102;
var statearr_27115_27132 = state_27102__$1;
(statearr_27115_27132[(2)] = inst_27082);

(statearr_27115_27132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27103 === (10))){
var inst_27096 = (state_27102[(2)]);
var state_27102__$1 = state_27102;
var statearr_27116_27133 = state_27102__$1;
(statearr_27116_27133[(2)] = inst_27096);

(statearr_27116_27133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27103 === (8))){
var inst_27089 = (state_27102[(9)]);
var inst_27092 = cljs.core.deref.call(null,inst_27089);
var state_27102__$1 = state_27102;
var statearr_27117_27134 = state_27102__$1;
(statearr_27117_27134[(2)] = inst_27092);

(statearr_27117_27134[(1)] = (10));


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
});})(c__26336__auto__))
;
return ((function (switch__26224__auto__,c__26336__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26225__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26225__auto____0 = (function (){
var statearr_27121 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27121[(0)] = cljs$core$async$reduce_$_state_machine__26225__auto__);

(statearr_27121[(1)] = (1));

return statearr_27121;
});
var cljs$core$async$reduce_$_state_machine__26225__auto____1 = (function (state_27102){
while(true){
var ret_value__26226__auto__ = (function (){try{while(true){
var result__26227__auto__ = switch__26224__auto__.call(null,state_27102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26227__auto__;
}
break;
}
}catch (e27122){if((e27122 instanceof Object)){
var ex__26228__auto__ = e27122;
var statearr_27123_27135 = state_27102;
(statearr_27123_27135[(5)] = ex__26228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27136 = state_27102;
state_27102 = G__27136;
continue;
} else {
return ret_value__26226__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26225__auto__ = function(state_27102){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26225__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26225__auto____1.call(this,state_27102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26225__auto____0;
cljs$core$async$reduce_$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26225__auto____1;
return cljs$core$async$reduce_$_state_machine__26225__auto__;
})()
;})(switch__26224__auto__,c__26336__auto__))
})();
var state__26338__auto__ = (function (){var statearr_27124 = f__26337__auto__.call(null);
(statearr_27124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto__);

return statearr_27124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(c__26336__auto__))
);

return c__26336__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args27137 = [];
var len__22749__auto___27189 = arguments.length;
var i__22750__auto___27190 = (0);
while(true){
if((i__22750__auto___27190 < len__22749__auto___27189)){
args27137.push((arguments[i__22750__auto___27190]));

var G__27191 = (i__22750__auto___27190 + (1));
i__22750__auto___27190 = G__27191;
continue;
} else {
}
break;
}

var G__27139 = args27137.length;
switch (G__27139) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27137.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26336__auto__){
return (function (){
var f__26337__auto__ = (function (){var switch__26224__auto__ = ((function (c__26336__auto__){
return (function (state_27164){
var state_val_27165 = (state_27164[(1)]);
if((state_val_27165 === (7))){
var inst_27146 = (state_27164[(2)]);
var state_27164__$1 = state_27164;
var statearr_27166_27193 = state_27164__$1;
(statearr_27166_27193[(2)] = inst_27146);

(statearr_27166_27193[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27165 === (1))){
var inst_27140 = cljs.core.seq.call(null,coll);
var inst_27141 = inst_27140;
var state_27164__$1 = (function (){var statearr_27167 = state_27164;
(statearr_27167[(7)] = inst_27141);

return statearr_27167;
})();
var statearr_27168_27194 = state_27164__$1;
(statearr_27168_27194[(2)] = null);

(statearr_27168_27194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27165 === (4))){
var inst_27141 = (state_27164[(7)]);
var inst_27144 = cljs.core.first.call(null,inst_27141);
var state_27164__$1 = state_27164;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27164__$1,(7),ch,inst_27144);
} else {
if((state_val_27165 === (13))){
var inst_27158 = (state_27164[(2)]);
var state_27164__$1 = state_27164;
var statearr_27169_27195 = state_27164__$1;
(statearr_27169_27195[(2)] = inst_27158);

(statearr_27169_27195[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27165 === (6))){
var inst_27149 = (state_27164[(2)]);
var state_27164__$1 = state_27164;
if(cljs.core.truth_(inst_27149)){
var statearr_27170_27196 = state_27164__$1;
(statearr_27170_27196[(1)] = (8));

} else {
var statearr_27171_27197 = state_27164__$1;
(statearr_27171_27197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27165 === (3))){
var inst_27162 = (state_27164[(2)]);
var state_27164__$1 = state_27164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27164__$1,inst_27162);
} else {
if((state_val_27165 === (12))){
var state_27164__$1 = state_27164;
var statearr_27172_27198 = state_27164__$1;
(statearr_27172_27198[(2)] = null);

(statearr_27172_27198[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27165 === (2))){
var inst_27141 = (state_27164[(7)]);
var state_27164__$1 = state_27164;
if(cljs.core.truth_(inst_27141)){
var statearr_27173_27199 = state_27164__$1;
(statearr_27173_27199[(1)] = (4));

} else {
var statearr_27174_27200 = state_27164__$1;
(statearr_27174_27200[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27165 === (11))){
var inst_27155 = cljs.core.async.close_BANG_.call(null,ch);
var state_27164__$1 = state_27164;
var statearr_27175_27201 = state_27164__$1;
(statearr_27175_27201[(2)] = inst_27155);

(statearr_27175_27201[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27165 === (9))){
var state_27164__$1 = state_27164;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27176_27202 = state_27164__$1;
(statearr_27176_27202[(1)] = (11));

} else {
var statearr_27177_27203 = state_27164__$1;
(statearr_27177_27203[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27165 === (5))){
var inst_27141 = (state_27164[(7)]);
var state_27164__$1 = state_27164;
var statearr_27178_27204 = state_27164__$1;
(statearr_27178_27204[(2)] = inst_27141);

(statearr_27178_27204[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27165 === (10))){
var inst_27160 = (state_27164[(2)]);
var state_27164__$1 = state_27164;
var statearr_27179_27205 = state_27164__$1;
(statearr_27179_27205[(2)] = inst_27160);

(statearr_27179_27205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27165 === (8))){
var inst_27141 = (state_27164[(7)]);
var inst_27151 = cljs.core.next.call(null,inst_27141);
var inst_27141__$1 = inst_27151;
var state_27164__$1 = (function (){var statearr_27180 = state_27164;
(statearr_27180[(7)] = inst_27141__$1);

return statearr_27180;
})();
var statearr_27181_27206 = state_27164__$1;
(statearr_27181_27206[(2)] = null);

(statearr_27181_27206[(1)] = (2));


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
});})(c__26336__auto__))
;
return ((function (switch__26224__auto__,c__26336__auto__){
return (function() {
var cljs$core$async$state_machine__26225__auto__ = null;
var cljs$core$async$state_machine__26225__auto____0 = (function (){
var statearr_27185 = [null,null,null,null,null,null,null,null];
(statearr_27185[(0)] = cljs$core$async$state_machine__26225__auto__);

(statearr_27185[(1)] = (1));

return statearr_27185;
});
var cljs$core$async$state_machine__26225__auto____1 = (function (state_27164){
while(true){
var ret_value__26226__auto__ = (function (){try{while(true){
var result__26227__auto__ = switch__26224__auto__.call(null,state_27164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26227__auto__;
}
break;
}
}catch (e27186){if((e27186 instanceof Object)){
var ex__26228__auto__ = e27186;
var statearr_27187_27207 = state_27164;
(statearr_27187_27207[(5)] = ex__26228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27208 = state_27164;
state_27164 = G__27208;
continue;
} else {
return ret_value__26226__auto__;
}
break;
}
});
cljs$core$async$state_machine__26225__auto__ = function(state_27164){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26225__auto____1.call(this,state_27164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26225__auto____0;
cljs$core$async$state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26225__auto____1;
return cljs$core$async$state_machine__26225__auto__;
})()
;})(switch__26224__auto__,c__26336__auto__))
})();
var state__26338__auto__ = (function (){var statearr_27188 = f__26337__auto__.call(null);
(statearr_27188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto__);

return statearr_27188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(c__26336__auto__))
);

return c__26336__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__22337__auto__ = (((_ == null))?null:_);
var m__22338__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,_);
} else {
var m__22338__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__22337__auto__ = (((m == null))?null:m);
var m__22338__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__22338__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__22337__auto__ = (((m == null))?null:m);
var m__22338__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,m,ch);
} else {
var m__22338__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__22337__auto__ = (((m == null))?null:m);
var m__22338__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,m);
} else {
var m__22338__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27434 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27434 = (function (mult,ch,cs,meta27435){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta27435 = meta27435;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27436,meta27435__$1){
var self__ = this;
var _27436__$1 = this;
return (new cljs.core.async.t_cljs$core$async27434(self__.mult,self__.ch,self__.cs,meta27435__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27434.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27436){
var self__ = this;
var _27436__$1 = this;
return self__.meta27435;
});})(cs))
;

cljs.core.async.t_cljs$core$async27434.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27434.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27434.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async27434.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27434.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27434.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27434.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27435","meta27435",1316785187,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27434.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27434.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27434";

cljs.core.async.t_cljs$core$async27434.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async27434");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async27434 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27434(mult__$1,ch__$1,cs__$1,meta27435){
return (new cljs.core.async.t_cljs$core$async27434(mult__$1,ch__$1,cs__$1,meta27435));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27434(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__26336__auto___27659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26336__auto___27659,cs,m,dchan,dctr,done){
return (function (){
var f__26337__auto__ = (function (){var switch__26224__auto__ = ((function (c__26336__auto___27659,cs,m,dchan,dctr,done){
return (function (state_27571){
var state_val_27572 = (state_27571[(1)]);
if((state_val_27572 === (7))){
var inst_27567 = (state_27571[(2)]);
var state_27571__$1 = state_27571;
var statearr_27573_27660 = state_27571__$1;
(statearr_27573_27660[(2)] = inst_27567);

(statearr_27573_27660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (20))){
var inst_27470 = (state_27571[(7)]);
var inst_27482 = cljs.core.first.call(null,inst_27470);
var inst_27483 = cljs.core.nth.call(null,inst_27482,(0),null);
var inst_27484 = cljs.core.nth.call(null,inst_27482,(1),null);
var state_27571__$1 = (function (){var statearr_27574 = state_27571;
(statearr_27574[(8)] = inst_27483);

return statearr_27574;
})();
if(cljs.core.truth_(inst_27484)){
var statearr_27575_27661 = state_27571__$1;
(statearr_27575_27661[(1)] = (22));

} else {
var statearr_27576_27662 = state_27571__$1;
(statearr_27576_27662[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (27))){
var inst_27514 = (state_27571[(9)]);
var inst_27519 = (state_27571[(10)]);
var inst_27512 = (state_27571[(11)]);
var inst_27439 = (state_27571[(12)]);
var inst_27519__$1 = cljs.core._nth.call(null,inst_27512,inst_27514);
var inst_27520 = cljs.core.async.put_BANG_.call(null,inst_27519__$1,inst_27439,done);
var state_27571__$1 = (function (){var statearr_27577 = state_27571;
(statearr_27577[(10)] = inst_27519__$1);

return statearr_27577;
})();
if(cljs.core.truth_(inst_27520)){
var statearr_27578_27663 = state_27571__$1;
(statearr_27578_27663[(1)] = (30));

} else {
var statearr_27579_27664 = state_27571__$1;
(statearr_27579_27664[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (1))){
var state_27571__$1 = state_27571;
var statearr_27580_27665 = state_27571__$1;
(statearr_27580_27665[(2)] = null);

(statearr_27580_27665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (24))){
var inst_27470 = (state_27571[(7)]);
var inst_27489 = (state_27571[(2)]);
var inst_27490 = cljs.core.next.call(null,inst_27470);
var inst_27448 = inst_27490;
var inst_27449 = null;
var inst_27450 = (0);
var inst_27451 = (0);
var state_27571__$1 = (function (){var statearr_27581 = state_27571;
(statearr_27581[(13)] = inst_27449);

(statearr_27581[(14)] = inst_27450);

(statearr_27581[(15)] = inst_27451);

(statearr_27581[(16)] = inst_27448);

(statearr_27581[(17)] = inst_27489);

return statearr_27581;
})();
var statearr_27582_27666 = state_27571__$1;
(statearr_27582_27666[(2)] = null);

(statearr_27582_27666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (39))){
var state_27571__$1 = state_27571;
var statearr_27586_27667 = state_27571__$1;
(statearr_27586_27667[(2)] = null);

(statearr_27586_27667[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (4))){
var inst_27439 = (state_27571[(12)]);
var inst_27439__$1 = (state_27571[(2)]);
var inst_27440 = (inst_27439__$1 == null);
var state_27571__$1 = (function (){var statearr_27587 = state_27571;
(statearr_27587[(12)] = inst_27439__$1);

return statearr_27587;
})();
if(cljs.core.truth_(inst_27440)){
var statearr_27588_27668 = state_27571__$1;
(statearr_27588_27668[(1)] = (5));

} else {
var statearr_27589_27669 = state_27571__$1;
(statearr_27589_27669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (15))){
var inst_27449 = (state_27571[(13)]);
var inst_27450 = (state_27571[(14)]);
var inst_27451 = (state_27571[(15)]);
var inst_27448 = (state_27571[(16)]);
var inst_27466 = (state_27571[(2)]);
var inst_27467 = (inst_27451 + (1));
var tmp27583 = inst_27449;
var tmp27584 = inst_27450;
var tmp27585 = inst_27448;
var inst_27448__$1 = tmp27585;
var inst_27449__$1 = tmp27583;
var inst_27450__$1 = tmp27584;
var inst_27451__$1 = inst_27467;
var state_27571__$1 = (function (){var statearr_27590 = state_27571;
(statearr_27590[(13)] = inst_27449__$1);

(statearr_27590[(14)] = inst_27450__$1);

(statearr_27590[(15)] = inst_27451__$1);

(statearr_27590[(16)] = inst_27448__$1);

(statearr_27590[(18)] = inst_27466);

return statearr_27590;
})();
var statearr_27591_27670 = state_27571__$1;
(statearr_27591_27670[(2)] = null);

(statearr_27591_27670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (21))){
var inst_27493 = (state_27571[(2)]);
var state_27571__$1 = state_27571;
var statearr_27595_27671 = state_27571__$1;
(statearr_27595_27671[(2)] = inst_27493);

(statearr_27595_27671[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (31))){
var inst_27519 = (state_27571[(10)]);
var inst_27523 = done.call(null,null);
var inst_27524 = cljs.core.async.untap_STAR_.call(null,m,inst_27519);
var state_27571__$1 = (function (){var statearr_27596 = state_27571;
(statearr_27596[(19)] = inst_27523);

return statearr_27596;
})();
var statearr_27597_27672 = state_27571__$1;
(statearr_27597_27672[(2)] = inst_27524);

(statearr_27597_27672[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (32))){
var inst_27514 = (state_27571[(9)]);
var inst_27512 = (state_27571[(11)]);
var inst_27511 = (state_27571[(20)]);
var inst_27513 = (state_27571[(21)]);
var inst_27526 = (state_27571[(2)]);
var inst_27527 = (inst_27514 + (1));
var tmp27592 = inst_27512;
var tmp27593 = inst_27511;
var tmp27594 = inst_27513;
var inst_27511__$1 = tmp27593;
var inst_27512__$1 = tmp27592;
var inst_27513__$1 = tmp27594;
var inst_27514__$1 = inst_27527;
var state_27571__$1 = (function (){var statearr_27598 = state_27571;
(statearr_27598[(9)] = inst_27514__$1);

(statearr_27598[(11)] = inst_27512__$1);

(statearr_27598[(22)] = inst_27526);

(statearr_27598[(20)] = inst_27511__$1);

(statearr_27598[(21)] = inst_27513__$1);

return statearr_27598;
})();
var statearr_27599_27673 = state_27571__$1;
(statearr_27599_27673[(2)] = null);

(statearr_27599_27673[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (40))){
var inst_27539 = (state_27571[(23)]);
var inst_27543 = done.call(null,null);
var inst_27544 = cljs.core.async.untap_STAR_.call(null,m,inst_27539);
var state_27571__$1 = (function (){var statearr_27600 = state_27571;
(statearr_27600[(24)] = inst_27543);

return statearr_27600;
})();
var statearr_27601_27674 = state_27571__$1;
(statearr_27601_27674[(2)] = inst_27544);

(statearr_27601_27674[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (33))){
var inst_27530 = (state_27571[(25)]);
var inst_27532 = cljs.core.chunked_seq_QMARK_.call(null,inst_27530);
var state_27571__$1 = state_27571;
if(inst_27532){
var statearr_27602_27675 = state_27571__$1;
(statearr_27602_27675[(1)] = (36));

} else {
var statearr_27603_27676 = state_27571__$1;
(statearr_27603_27676[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (13))){
var inst_27460 = (state_27571[(26)]);
var inst_27463 = cljs.core.async.close_BANG_.call(null,inst_27460);
var state_27571__$1 = state_27571;
var statearr_27604_27677 = state_27571__$1;
(statearr_27604_27677[(2)] = inst_27463);

(statearr_27604_27677[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (22))){
var inst_27483 = (state_27571[(8)]);
var inst_27486 = cljs.core.async.close_BANG_.call(null,inst_27483);
var state_27571__$1 = state_27571;
var statearr_27605_27678 = state_27571__$1;
(statearr_27605_27678[(2)] = inst_27486);

(statearr_27605_27678[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (36))){
var inst_27530 = (state_27571[(25)]);
var inst_27534 = cljs.core.chunk_first.call(null,inst_27530);
var inst_27535 = cljs.core.chunk_rest.call(null,inst_27530);
var inst_27536 = cljs.core.count.call(null,inst_27534);
var inst_27511 = inst_27535;
var inst_27512 = inst_27534;
var inst_27513 = inst_27536;
var inst_27514 = (0);
var state_27571__$1 = (function (){var statearr_27606 = state_27571;
(statearr_27606[(9)] = inst_27514);

(statearr_27606[(11)] = inst_27512);

(statearr_27606[(20)] = inst_27511);

(statearr_27606[(21)] = inst_27513);

return statearr_27606;
})();
var statearr_27607_27679 = state_27571__$1;
(statearr_27607_27679[(2)] = null);

(statearr_27607_27679[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (41))){
var inst_27530 = (state_27571[(25)]);
var inst_27546 = (state_27571[(2)]);
var inst_27547 = cljs.core.next.call(null,inst_27530);
var inst_27511 = inst_27547;
var inst_27512 = null;
var inst_27513 = (0);
var inst_27514 = (0);
var state_27571__$1 = (function (){var statearr_27608 = state_27571;
(statearr_27608[(9)] = inst_27514);

(statearr_27608[(11)] = inst_27512);

(statearr_27608[(27)] = inst_27546);

(statearr_27608[(20)] = inst_27511);

(statearr_27608[(21)] = inst_27513);

return statearr_27608;
})();
var statearr_27609_27680 = state_27571__$1;
(statearr_27609_27680[(2)] = null);

(statearr_27609_27680[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (43))){
var state_27571__$1 = state_27571;
var statearr_27610_27681 = state_27571__$1;
(statearr_27610_27681[(2)] = null);

(statearr_27610_27681[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (29))){
var inst_27555 = (state_27571[(2)]);
var state_27571__$1 = state_27571;
var statearr_27611_27682 = state_27571__$1;
(statearr_27611_27682[(2)] = inst_27555);

(statearr_27611_27682[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (44))){
var inst_27564 = (state_27571[(2)]);
var state_27571__$1 = (function (){var statearr_27612 = state_27571;
(statearr_27612[(28)] = inst_27564);

return statearr_27612;
})();
var statearr_27613_27683 = state_27571__$1;
(statearr_27613_27683[(2)] = null);

(statearr_27613_27683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (6))){
var inst_27503 = (state_27571[(29)]);
var inst_27502 = cljs.core.deref.call(null,cs);
var inst_27503__$1 = cljs.core.keys.call(null,inst_27502);
var inst_27504 = cljs.core.count.call(null,inst_27503__$1);
var inst_27505 = cljs.core.reset_BANG_.call(null,dctr,inst_27504);
var inst_27510 = cljs.core.seq.call(null,inst_27503__$1);
var inst_27511 = inst_27510;
var inst_27512 = null;
var inst_27513 = (0);
var inst_27514 = (0);
var state_27571__$1 = (function (){var statearr_27614 = state_27571;
(statearr_27614[(29)] = inst_27503__$1);

(statearr_27614[(9)] = inst_27514);

(statearr_27614[(11)] = inst_27512);

(statearr_27614[(20)] = inst_27511);

(statearr_27614[(30)] = inst_27505);

(statearr_27614[(21)] = inst_27513);

return statearr_27614;
})();
var statearr_27615_27684 = state_27571__$1;
(statearr_27615_27684[(2)] = null);

(statearr_27615_27684[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (28))){
var inst_27530 = (state_27571[(25)]);
var inst_27511 = (state_27571[(20)]);
var inst_27530__$1 = cljs.core.seq.call(null,inst_27511);
var state_27571__$1 = (function (){var statearr_27616 = state_27571;
(statearr_27616[(25)] = inst_27530__$1);

return statearr_27616;
})();
if(inst_27530__$1){
var statearr_27617_27685 = state_27571__$1;
(statearr_27617_27685[(1)] = (33));

} else {
var statearr_27618_27686 = state_27571__$1;
(statearr_27618_27686[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (25))){
var inst_27514 = (state_27571[(9)]);
var inst_27513 = (state_27571[(21)]);
var inst_27516 = (inst_27514 < inst_27513);
var inst_27517 = inst_27516;
var state_27571__$1 = state_27571;
if(cljs.core.truth_(inst_27517)){
var statearr_27619_27687 = state_27571__$1;
(statearr_27619_27687[(1)] = (27));

} else {
var statearr_27620_27688 = state_27571__$1;
(statearr_27620_27688[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (34))){
var state_27571__$1 = state_27571;
var statearr_27621_27689 = state_27571__$1;
(statearr_27621_27689[(2)] = null);

(statearr_27621_27689[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (17))){
var state_27571__$1 = state_27571;
var statearr_27622_27690 = state_27571__$1;
(statearr_27622_27690[(2)] = null);

(statearr_27622_27690[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (3))){
var inst_27569 = (state_27571[(2)]);
var state_27571__$1 = state_27571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27571__$1,inst_27569);
} else {
if((state_val_27572 === (12))){
var inst_27498 = (state_27571[(2)]);
var state_27571__$1 = state_27571;
var statearr_27623_27691 = state_27571__$1;
(statearr_27623_27691[(2)] = inst_27498);

(statearr_27623_27691[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (2))){
var state_27571__$1 = state_27571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27571__$1,(4),ch);
} else {
if((state_val_27572 === (23))){
var state_27571__$1 = state_27571;
var statearr_27624_27692 = state_27571__$1;
(statearr_27624_27692[(2)] = null);

(statearr_27624_27692[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (35))){
var inst_27553 = (state_27571[(2)]);
var state_27571__$1 = state_27571;
var statearr_27625_27693 = state_27571__$1;
(statearr_27625_27693[(2)] = inst_27553);

(statearr_27625_27693[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (19))){
var inst_27470 = (state_27571[(7)]);
var inst_27474 = cljs.core.chunk_first.call(null,inst_27470);
var inst_27475 = cljs.core.chunk_rest.call(null,inst_27470);
var inst_27476 = cljs.core.count.call(null,inst_27474);
var inst_27448 = inst_27475;
var inst_27449 = inst_27474;
var inst_27450 = inst_27476;
var inst_27451 = (0);
var state_27571__$1 = (function (){var statearr_27626 = state_27571;
(statearr_27626[(13)] = inst_27449);

(statearr_27626[(14)] = inst_27450);

(statearr_27626[(15)] = inst_27451);

(statearr_27626[(16)] = inst_27448);

return statearr_27626;
})();
var statearr_27627_27694 = state_27571__$1;
(statearr_27627_27694[(2)] = null);

(statearr_27627_27694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (11))){
var inst_27448 = (state_27571[(16)]);
var inst_27470 = (state_27571[(7)]);
var inst_27470__$1 = cljs.core.seq.call(null,inst_27448);
var state_27571__$1 = (function (){var statearr_27628 = state_27571;
(statearr_27628[(7)] = inst_27470__$1);

return statearr_27628;
})();
if(inst_27470__$1){
var statearr_27629_27695 = state_27571__$1;
(statearr_27629_27695[(1)] = (16));

} else {
var statearr_27630_27696 = state_27571__$1;
(statearr_27630_27696[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (9))){
var inst_27500 = (state_27571[(2)]);
var state_27571__$1 = state_27571;
var statearr_27631_27697 = state_27571__$1;
(statearr_27631_27697[(2)] = inst_27500);

(statearr_27631_27697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (5))){
var inst_27446 = cljs.core.deref.call(null,cs);
var inst_27447 = cljs.core.seq.call(null,inst_27446);
var inst_27448 = inst_27447;
var inst_27449 = null;
var inst_27450 = (0);
var inst_27451 = (0);
var state_27571__$1 = (function (){var statearr_27632 = state_27571;
(statearr_27632[(13)] = inst_27449);

(statearr_27632[(14)] = inst_27450);

(statearr_27632[(15)] = inst_27451);

(statearr_27632[(16)] = inst_27448);

return statearr_27632;
})();
var statearr_27633_27698 = state_27571__$1;
(statearr_27633_27698[(2)] = null);

(statearr_27633_27698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (14))){
var state_27571__$1 = state_27571;
var statearr_27634_27699 = state_27571__$1;
(statearr_27634_27699[(2)] = null);

(statearr_27634_27699[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (45))){
var inst_27561 = (state_27571[(2)]);
var state_27571__$1 = state_27571;
var statearr_27635_27700 = state_27571__$1;
(statearr_27635_27700[(2)] = inst_27561);

(statearr_27635_27700[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (26))){
var inst_27503 = (state_27571[(29)]);
var inst_27557 = (state_27571[(2)]);
var inst_27558 = cljs.core.seq.call(null,inst_27503);
var state_27571__$1 = (function (){var statearr_27636 = state_27571;
(statearr_27636[(31)] = inst_27557);

return statearr_27636;
})();
if(inst_27558){
var statearr_27637_27701 = state_27571__$1;
(statearr_27637_27701[(1)] = (42));

} else {
var statearr_27638_27702 = state_27571__$1;
(statearr_27638_27702[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (16))){
var inst_27470 = (state_27571[(7)]);
var inst_27472 = cljs.core.chunked_seq_QMARK_.call(null,inst_27470);
var state_27571__$1 = state_27571;
if(inst_27472){
var statearr_27639_27703 = state_27571__$1;
(statearr_27639_27703[(1)] = (19));

} else {
var statearr_27640_27704 = state_27571__$1;
(statearr_27640_27704[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (38))){
var inst_27550 = (state_27571[(2)]);
var state_27571__$1 = state_27571;
var statearr_27641_27705 = state_27571__$1;
(statearr_27641_27705[(2)] = inst_27550);

(statearr_27641_27705[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (30))){
var state_27571__$1 = state_27571;
var statearr_27642_27706 = state_27571__$1;
(statearr_27642_27706[(2)] = null);

(statearr_27642_27706[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (10))){
var inst_27449 = (state_27571[(13)]);
var inst_27451 = (state_27571[(15)]);
var inst_27459 = cljs.core._nth.call(null,inst_27449,inst_27451);
var inst_27460 = cljs.core.nth.call(null,inst_27459,(0),null);
var inst_27461 = cljs.core.nth.call(null,inst_27459,(1),null);
var state_27571__$1 = (function (){var statearr_27643 = state_27571;
(statearr_27643[(26)] = inst_27460);

return statearr_27643;
})();
if(cljs.core.truth_(inst_27461)){
var statearr_27644_27707 = state_27571__$1;
(statearr_27644_27707[(1)] = (13));

} else {
var statearr_27645_27708 = state_27571__$1;
(statearr_27645_27708[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (18))){
var inst_27496 = (state_27571[(2)]);
var state_27571__$1 = state_27571;
var statearr_27646_27709 = state_27571__$1;
(statearr_27646_27709[(2)] = inst_27496);

(statearr_27646_27709[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (42))){
var state_27571__$1 = state_27571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27571__$1,(45),dchan);
} else {
if((state_val_27572 === (37))){
var inst_27530 = (state_27571[(25)]);
var inst_27539 = (state_27571[(23)]);
var inst_27439 = (state_27571[(12)]);
var inst_27539__$1 = cljs.core.first.call(null,inst_27530);
var inst_27540 = cljs.core.async.put_BANG_.call(null,inst_27539__$1,inst_27439,done);
var state_27571__$1 = (function (){var statearr_27647 = state_27571;
(statearr_27647[(23)] = inst_27539__$1);

return statearr_27647;
})();
if(cljs.core.truth_(inst_27540)){
var statearr_27648_27710 = state_27571__$1;
(statearr_27648_27710[(1)] = (39));

} else {
var statearr_27649_27711 = state_27571__$1;
(statearr_27649_27711[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (8))){
var inst_27450 = (state_27571[(14)]);
var inst_27451 = (state_27571[(15)]);
var inst_27453 = (inst_27451 < inst_27450);
var inst_27454 = inst_27453;
var state_27571__$1 = state_27571;
if(cljs.core.truth_(inst_27454)){
var statearr_27650_27712 = state_27571__$1;
(statearr_27650_27712[(1)] = (10));

} else {
var statearr_27651_27713 = state_27571__$1;
(statearr_27651_27713[(1)] = (11));

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
});})(c__26336__auto___27659,cs,m,dchan,dctr,done))
;
return ((function (switch__26224__auto__,c__26336__auto___27659,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26225__auto__ = null;
var cljs$core$async$mult_$_state_machine__26225__auto____0 = (function (){
var statearr_27655 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27655[(0)] = cljs$core$async$mult_$_state_machine__26225__auto__);

(statearr_27655[(1)] = (1));

return statearr_27655;
});
var cljs$core$async$mult_$_state_machine__26225__auto____1 = (function (state_27571){
while(true){
var ret_value__26226__auto__ = (function (){try{while(true){
var result__26227__auto__ = switch__26224__auto__.call(null,state_27571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26227__auto__;
}
break;
}
}catch (e27656){if((e27656 instanceof Object)){
var ex__26228__auto__ = e27656;
var statearr_27657_27714 = state_27571;
(statearr_27657_27714[(5)] = ex__26228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27715 = state_27571;
state_27571 = G__27715;
continue;
} else {
return ret_value__26226__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26225__auto__ = function(state_27571){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26225__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26225__auto____1.call(this,state_27571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26225__auto____0;
cljs$core$async$mult_$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26225__auto____1;
return cljs$core$async$mult_$_state_machine__26225__auto__;
})()
;})(switch__26224__auto__,c__26336__auto___27659,cs,m,dchan,dctr,done))
})();
var state__26338__auto__ = (function (){var statearr_27658 = f__26337__auto__.call(null);
(statearr_27658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto___27659);

return statearr_27658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(c__26336__auto___27659,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args27716 = [];
var len__22749__auto___27719 = arguments.length;
var i__22750__auto___27720 = (0);
while(true){
if((i__22750__auto___27720 < len__22749__auto___27719)){
args27716.push((arguments[i__22750__auto___27720]));

var G__27721 = (i__22750__auto___27720 + (1));
i__22750__auto___27720 = G__27721;
continue;
} else {
}
break;
}

var G__27718 = args27716.length;
switch (G__27718) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27716.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__22337__auto__ = (((m == null))?null:m);
var m__22338__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,m,ch);
} else {
var m__22338__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__22337__auto__ = (((m == null))?null:m);
var m__22338__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,m,ch);
} else {
var m__22338__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__22337__auto__ = (((m == null))?null:m);
var m__22338__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,m);
} else {
var m__22338__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__22337__auto__ = (((m == null))?null:m);
var m__22338__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,m,state_map);
} else {
var m__22338__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__22337__auto__ = (((m == null))?null:m);
var m__22338__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,m,mode);
} else {
var m__22338__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22756__auto__ = [];
var len__22749__auto___27733 = arguments.length;
var i__22750__auto___27734 = (0);
while(true){
if((i__22750__auto___27734 < len__22749__auto___27733)){
args__22756__auto__.push((arguments[i__22750__auto___27734]));

var G__27735 = (i__22750__auto___27734 + (1));
i__22750__auto___27734 = G__27735;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((3) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22757__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27727){
var map__27728 = p__27727;
var map__27728__$1 = ((((!((map__27728 == null)))?((((map__27728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27728):map__27728);
var opts = map__27728__$1;
var statearr_27730_27736 = state;
(statearr_27730_27736[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__27728,map__27728__$1,opts){
return (function (val){
var statearr_27731_27737 = state;
(statearr_27731_27737[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27728,map__27728__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_27732_27738 = state;
(statearr_27732_27738[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27723){
var G__27724 = cljs.core.first.call(null,seq27723);
var seq27723__$1 = cljs.core.next.call(null,seq27723);
var G__27725 = cljs.core.first.call(null,seq27723__$1);
var seq27723__$2 = cljs.core.next.call(null,seq27723__$1);
var G__27726 = cljs.core.first.call(null,seq27723__$2);
var seq27723__$3 = cljs.core.next.call(null,seq27723__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27724,G__27725,G__27726,seq27723__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27904 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27904 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27905){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27905 = meta27905;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27906,meta27905__$1){
var self__ = this;
var _27906__$1 = this;
return (new cljs.core.async.t_cljs$core$async27904(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27905__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27904.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27906){
var self__ = this;
var _27906__$1 = this;
return self__.meta27905;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27904.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27904.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27904.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async27904.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27904.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27904.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27904.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27904.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27904.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27905","meta27905",-1841021400,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27904.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27904.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27904";

cljs.core.async.t_cljs$core$async27904.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async27904");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async27904 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27904(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27905){
return (new cljs.core.async.t_cljs$core$async27904(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27905));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27904(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26336__auto___28069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26336__auto___28069,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26337__auto__ = (function (){var switch__26224__auto__ = ((function (c__26336__auto___28069,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28006){
var state_val_28007 = (state_28006[(1)]);
if((state_val_28007 === (7))){
var inst_27922 = (state_28006[(2)]);
var state_28006__$1 = state_28006;
var statearr_28008_28070 = state_28006__$1;
(statearr_28008_28070[(2)] = inst_27922);

(statearr_28008_28070[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (20))){
var inst_27934 = (state_28006[(7)]);
var state_28006__$1 = state_28006;
var statearr_28009_28071 = state_28006__$1;
(statearr_28009_28071[(2)] = inst_27934);

(statearr_28009_28071[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (27))){
var state_28006__$1 = state_28006;
var statearr_28010_28072 = state_28006__$1;
(statearr_28010_28072[(2)] = null);

(statearr_28010_28072[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (1))){
var inst_27910 = (state_28006[(8)]);
var inst_27910__$1 = calc_state.call(null);
var inst_27912 = (inst_27910__$1 == null);
var inst_27913 = cljs.core.not.call(null,inst_27912);
var state_28006__$1 = (function (){var statearr_28011 = state_28006;
(statearr_28011[(8)] = inst_27910__$1);

return statearr_28011;
})();
if(inst_27913){
var statearr_28012_28073 = state_28006__$1;
(statearr_28012_28073[(1)] = (2));

} else {
var statearr_28013_28074 = state_28006__$1;
(statearr_28013_28074[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (24))){
var inst_27966 = (state_28006[(9)]);
var inst_27957 = (state_28006[(10)]);
var inst_27980 = (state_28006[(11)]);
var inst_27980__$1 = inst_27957.call(null,inst_27966);
var state_28006__$1 = (function (){var statearr_28014 = state_28006;
(statearr_28014[(11)] = inst_27980__$1);

return statearr_28014;
})();
if(cljs.core.truth_(inst_27980__$1)){
var statearr_28015_28075 = state_28006__$1;
(statearr_28015_28075[(1)] = (29));

} else {
var statearr_28016_28076 = state_28006__$1;
(statearr_28016_28076[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (4))){
var inst_27925 = (state_28006[(2)]);
var state_28006__$1 = state_28006;
if(cljs.core.truth_(inst_27925)){
var statearr_28017_28077 = state_28006__$1;
(statearr_28017_28077[(1)] = (8));

} else {
var statearr_28018_28078 = state_28006__$1;
(statearr_28018_28078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (15))){
var inst_27951 = (state_28006[(2)]);
var state_28006__$1 = state_28006;
if(cljs.core.truth_(inst_27951)){
var statearr_28019_28079 = state_28006__$1;
(statearr_28019_28079[(1)] = (19));

} else {
var statearr_28020_28080 = state_28006__$1;
(statearr_28020_28080[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (21))){
var inst_27956 = (state_28006[(12)]);
var inst_27956__$1 = (state_28006[(2)]);
var inst_27957 = cljs.core.get.call(null,inst_27956__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27958 = cljs.core.get.call(null,inst_27956__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27959 = cljs.core.get.call(null,inst_27956__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28006__$1 = (function (){var statearr_28021 = state_28006;
(statearr_28021[(12)] = inst_27956__$1);

(statearr_28021[(10)] = inst_27957);

(statearr_28021[(13)] = inst_27958);

return statearr_28021;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28006__$1,(22),inst_27959);
} else {
if((state_val_28007 === (31))){
var inst_27988 = (state_28006[(2)]);
var state_28006__$1 = state_28006;
if(cljs.core.truth_(inst_27988)){
var statearr_28022_28081 = state_28006__$1;
(statearr_28022_28081[(1)] = (32));

} else {
var statearr_28023_28082 = state_28006__$1;
(statearr_28023_28082[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (32))){
var inst_27965 = (state_28006[(14)]);
var state_28006__$1 = state_28006;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28006__$1,(35),out,inst_27965);
} else {
if((state_val_28007 === (33))){
var inst_27956 = (state_28006[(12)]);
var inst_27934 = inst_27956;
var state_28006__$1 = (function (){var statearr_28024 = state_28006;
(statearr_28024[(7)] = inst_27934);

return statearr_28024;
})();
var statearr_28025_28083 = state_28006__$1;
(statearr_28025_28083[(2)] = null);

(statearr_28025_28083[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (13))){
var inst_27934 = (state_28006[(7)]);
var inst_27941 = inst_27934.cljs$lang$protocol_mask$partition0$;
var inst_27942 = (inst_27941 & (64));
var inst_27943 = inst_27934.cljs$core$ISeq$;
var inst_27944 = (inst_27942) || (inst_27943);
var state_28006__$1 = state_28006;
if(cljs.core.truth_(inst_27944)){
var statearr_28026_28084 = state_28006__$1;
(statearr_28026_28084[(1)] = (16));

} else {
var statearr_28027_28085 = state_28006__$1;
(statearr_28027_28085[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (22))){
var inst_27966 = (state_28006[(9)]);
var inst_27965 = (state_28006[(14)]);
var inst_27964 = (state_28006[(2)]);
var inst_27965__$1 = cljs.core.nth.call(null,inst_27964,(0),null);
var inst_27966__$1 = cljs.core.nth.call(null,inst_27964,(1),null);
var inst_27967 = (inst_27965__$1 == null);
var inst_27968 = cljs.core._EQ_.call(null,inst_27966__$1,change);
var inst_27969 = (inst_27967) || (inst_27968);
var state_28006__$1 = (function (){var statearr_28028 = state_28006;
(statearr_28028[(9)] = inst_27966__$1);

(statearr_28028[(14)] = inst_27965__$1);

return statearr_28028;
})();
if(cljs.core.truth_(inst_27969)){
var statearr_28029_28086 = state_28006__$1;
(statearr_28029_28086[(1)] = (23));

} else {
var statearr_28030_28087 = state_28006__$1;
(statearr_28030_28087[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (36))){
var inst_27956 = (state_28006[(12)]);
var inst_27934 = inst_27956;
var state_28006__$1 = (function (){var statearr_28031 = state_28006;
(statearr_28031[(7)] = inst_27934);

return statearr_28031;
})();
var statearr_28032_28088 = state_28006__$1;
(statearr_28032_28088[(2)] = null);

(statearr_28032_28088[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (29))){
var inst_27980 = (state_28006[(11)]);
var state_28006__$1 = state_28006;
var statearr_28033_28089 = state_28006__$1;
(statearr_28033_28089[(2)] = inst_27980);

(statearr_28033_28089[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (6))){
var state_28006__$1 = state_28006;
var statearr_28034_28090 = state_28006__$1;
(statearr_28034_28090[(2)] = false);

(statearr_28034_28090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (28))){
var inst_27976 = (state_28006[(2)]);
var inst_27977 = calc_state.call(null);
var inst_27934 = inst_27977;
var state_28006__$1 = (function (){var statearr_28035 = state_28006;
(statearr_28035[(7)] = inst_27934);

(statearr_28035[(15)] = inst_27976);

return statearr_28035;
})();
var statearr_28036_28091 = state_28006__$1;
(statearr_28036_28091[(2)] = null);

(statearr_28036_28091[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (25))){
var inst_28002 = (state_28006[(2)]);
var state_28006__$1 = state_28006;
var statearr_28037_28092 = state_28006__$1;
(statearr_28037_28092[(2)] = inst_28002);

(statearr_28037_28092[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (34))){
var inst_28000 = (state_28006[(2)]);
var state_28006__$1 = state_28006;
var statearr_28038_28093 = state_28006__$1;
(statearr_28038_28093[(2)] = inst_28000);

(statearr_28038_28093[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (17))){
var state_28006__$1 = state_28006;
var statearr_28039_28094 = state_28006__$1;
(statearr_28039_28094[(2)] = false);

(statearr_28039_28094[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (3))){
var state_28006__$1 = state_28006;
var statearr_28040_28095 = state_28006__$1;
(statearr_28040_28095[(2)] = false);

(statearr_28040_28095[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (12))){
var inst_28004 = (state_28006[(2)]);
var state_28006__$1 = state_28006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28006__$1,inst_28004);
} else {
if((state_val_28007 === (2))){
var inst_27910 = (state_28006[(8)]);
var inst_27915 = inst_27910.cljs$lang$protocol_mask$partition0$;
var inst_27916 = (inst_27915 & (64));
var inst_27917 = inst_27910.cljs$core$ISeq$;
var inst_27918 = (inst_27916) || (inst_27917);
var state_28006__$1 = state_28006;
if(cljs.core.truth_(inst_27918)){
var statearr_28041_28096 = state_28006__$1;
(statearr_28041_28096[(1)] = (5));

} else {
var statearr_28042_28097 = state_28006__$1;
(statearr_28042_28097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (23))){
var inst_27965 = (state_28006[(14)]);
var inst_27971 = (inst_27965 == null);
var state_28006__$1 = state_28006;
if(cljs.core.truth_(inst_27971)){
var statearr_28043_28098 = state_28006__$1;
(statearr_28043_28098[(1)] = (26));

} else {
var statearr_28044_28099 = state_28006__$1;
(statearr_28044_28099[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (35))){
var inst_27991 = (state_28006[(2)]);
var state_28006__$1 = state_28006;
if(cljs.core.truth_(inst_27991)){
var statearr_28045_28100 = state_28006__$1;
(statearr_28045_28100[(1)] = (36));

} else {
var statearr_28046_28101 = state_28006__$1;
(statearr_28046_28101[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (19))){
var inst_27934 = (state_28006[(7)]);
var inst_27953 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27934);
var state_28006__$1 = state_28006;
var statearr_28047_28102 = state_28006__$1;
(statearr_28047_28102[(2)] = inst_27953);

(statearr_28047_28102[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (11))){
var inst_27934 = (state_28006[(7)]);
var inst_27938 = (inst_27934 == null);
var inst_27939 = cljs.core.not.call(null,inst_27938);
var state_28006__$1 = state_28006;
if(inst_27939){
var statearr_28048_28103 = state_28006__$1;
(statearr_28048_28103[(1)] = (13));

} else {
var statearr_28049_28104 = state_28006__$1;
(statearr_28049_28104[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (9))){
var inst_27910 = (state_28006[(8)]);
var state_28006__$1 = state_28006;
var statearr_28050_28105 = state_28006__$1;
(statearr_28050_28105[(2)] = inst_27910);

(statearr_28050_28105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (5))){
var state_28006__$1 = state_28006;
var statearr_28051_28106 = state_28006__$1;
(statearr_28051_28106[(2)] = true);

(statearr_28051_28106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (14))){
var state_28006__$1 = state_28006;
var statearr_28052_28107 = state_28006__$1;
(statearr_28052_28107[(2)] = false);

(statearr_28052_28107[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (26))){
var inst_27966 = (state_28006[(9)]);
var inst_27973 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27966);
var state_28006__$1 = state_28006;
var statearr_28053_28108 = state_28006__$1;
(statearr_28053_28108[(2)] = inst_27973);

(statearr_28053_28108[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (16))){
var state_28006__$1 = state_28006;
var statearr_28054_28109 = state_28006__$1;
(statearr_28054_28109[(2)] = true);

(statearr_28054_28109[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (38))){
var inst_27996 = (state_28006[(2)]);
var state_28006__$1 = state_28006;
var statearr_28055_28110 = state_28006__$1;
(statearr_28055_28110[(2)] = inst_27996);

(statearr_28055_28110[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (30))){
var inst_27966 = (state_28006[(9)]);
var inst_27957 = (state_28006[(10)]);
var inst_27958 = (state_28006[(13)]);
var inst_27983 = cljs.core.empty_QMARK_.call(null,inst_27957);
var inst_27984 = inst_27958.call(null,inst_27966);
var inst_27985 = cljs.core.not.call(null,inst_27984);
var inst_27986 = (inst_27983) && (inst_27985);
var state_28006__$1 = state_28006;
var statearr_28056_28111 = state_28006__$1;
(statearr_28056_28111[(2)] = inst_27986);

(statearr_28056_28111[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (10))){
var inst_27910 = (state_28006[(8)]);
var inst_27930 = (state_28006[(2)]);
var inst_27931 = cljs.core.get.call(null,inst_27930,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27932 = cljs.core.get.call(null,inst_27930,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27933 = cljs.core.get.call(null,inst_27930,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27934 = inst_27910;
var state_28006__$1 = (function (){var statearr_28057 = state_28006;
(statearr_28057[(16)] = inst_27932);

(statearr_28057[(7)] = inst_27934);

(statearr_28057[(17)] = inst_27931);

(statearr_28057[(18)] = inst_27933);

return statearr_28057;
})();
var statearr_28058_28112 = state_28006__$1;
(statearr_28058_28112[(2)] = null);

(statearr_28058_28112[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (18))){
var inst_27948 = (state_28006[(2)]);
var state_28006__$1 = state_28006;
var statearr_28059_28113 = state_28006__$1;
(statearr_28059_28113[(2)] = inst_27948);

(statearr_28059_28113[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (37))){
var state_28006__$1 = state_28006;
var statearr_28060_28114 = state_28006__$1;
(statearr_28060_28114[(2)] = null);

(statearr_28060_28114[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (8))){
var inst_27910 = (state_28006[(8)]);
var inst_27927 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27910);
var state_28006__$1 = state_28006;
var statearr_28061_28115 = state_28006__$1;
(statearr_28061_28115[(2)] = inst_27927);

(statearr_28061_28115[(1)] = (10));


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
});})(c__26336__auto___28069,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26224__auto__,c__26336__auto___28069,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26225__auto__ = null;
var cljs$core$async$mix_$_state_machine__26225__auto____0 = (function (){
var statearr_28065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28065[(0)] = cljs$core$async$mix_$_state_machine__26225__auto__);

(statearr_28065[(1)] = (1));

return statearr_28065;
});
var cljs$core$async$mix_$_state_machine__26225__auto____1 = (function (state_28006){
while(true){
var ret_value__26226__auto__ = (function (){try{while(true){
var result__26227__auto__ = switch__26224__auto__.call(null,state_28006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26227__auto__;
}
break;
}
}catch (e28066){if((e28066 instanceof Object)){
var ex__26228__auto__ = e28066;
var statearr_28067_28116 = state_28006;
(statearr_28067_28116[(5)] = ex__26228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28117 = state_28006;
state_28006 = G__28117;
continue;
} else {
return ret_value__26226__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26225__auto__ = function(state_28006){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26225__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26225__auto____1.call(this,state_28006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26225__auto____0;
cljs$core$async$mix_$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26225__auto____1;
return cljs$core$async$mix_$_state_machine__26225__auto__;
})()
;})(switch__26224__auto__,c__26336__auto___28069,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26338__auto__ = (function (){var statearr_28068 = f__26337__auto__.call(null);
(statearr_28068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto___28069);

return statearr_28068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(c__26336__auto___28069,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__22337__auto__ = (((p == null))?null:p);
var m__22338__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__22338__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__22337__auto__ = (((p == null))?null:p);
var m__22338__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,p,v,ch);
} else {
var m__22338__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args28118 = [];
var len__22749__auto___28121 = arguments.length;
var i__22750__auto___28122 = (0);
while(true){
if((i__22750__auto___28122 < len__22749__auto___28121)){
args28118.push((arguments[i__22750__auto___28122]));

var G__28123 = (i__22750__auto___28122 + (1));
i__22750__auto___28122 = G__28123;
continue;
} else {
}
break;
}

var G__28120 = args28118.length;
switch (G__28120) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28118.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__22337__auto__ = (((p == null))?null:p);
var m__22338__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,p);
} else {
var m__22338__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__22337__auto__ = (((p == null))?null:p);
var m__22338__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,p,v);
} else {
var m__22338__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args28126 = [];
var len__22749__auto___28251 = arguments.length;
var i__22750__auto___28252 = (0);
while(true){
if((i__22750__auto___28252 < len__22749__auto___28251)){
args28126.push((arguments[i__22750__auto___28252]));

var G__28253 = (i__22750__auto___28252 + (1));
i__22750__auto___28252 = G__28253;
continue;
} else {
}
break;
}

var G__28128 = args28126.length;
switch (G__28128) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28126.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__21674__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__21674__auto__,mults){
return (function (p1__28125_SHARP_){
if(cljs.core.truth_(p1__28125_SHARP_.call(null,topic))){
return p1__28125_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28125_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21674__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28129 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28129 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28130){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28130 = meta28130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28131,meta28130__$1){
var self__ = this;
var _28131__$1 = this;
return (new cljs.core.async.t_cljs$core$async28129(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28130__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28129.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28131){
var self__ = this;
var _28131__$1 = this;
return self__.meta28130;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28129.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28129.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28129.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28129.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28129.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28129.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28129.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28129.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28130","meta28130",9753180,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28129.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28129.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28129";

cljs.core.async.t_cljs$core$async28129.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async28129");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28129 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28129(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28130){
return (new cljs.core.async.t_cljs$core$async28129(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28130));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28129(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26336__auto___28255 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26336__auto___28255,mults,ensure_mult,p){
return (function (){
var f__26337__auto__ = (function (){var switch__26224__auto__ = ((function (c__26336__auto___28255,mults,ensure_mult,p){
return (function (state_28203){
var state_val_28204 = (state_28203[(1)]);
if((state_val_28204 === (7))){
var inst_28199 = (state_28203[(2)]);
var state_28203__$1 = state_28203;
var statearr_28205_28256 = state_28203__$1;
(statearr_28205_28256[(2)] = inst_28199);

(statearr_28205_28256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28204 === (20))){
var state_28203__$1 = state_28203;
var statearr_28206_28257 = state_28203__$1;
(statearr_28206_28257[(2)] = null);

(statearr_28206_28257[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28204 === (1))){
var state_28203__$1 = state_28203;
var statearr_28207_28258 = state_28203__$1;
(statearr_28207_28258[(2)] = null);

(statearr_28207_28258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28204 === (24))){
var inst_28182 = (state_28203[(7)]);
var inst_28191 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28182);
var state_28203__$1 = state_28203;
var statearr_28208_28259 = state_28203__$1;
(statearr_28208_28259[(2)] = inst_28191);

(statearr_28208_28259[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28204 === (4))){
var inst_28134 = (state_28203[(8)]);
var inst_28134__$1 = (state_28203[(2)]);
var inst_28135 = (inst_28134__$1 == null);
var state_28203__$1 = (function (){var statearr_28209 = state_28203;
(statearr_28209[(8)] = inst_28134__$1);

return statearr_28209;
})();
if(cljs.core.truth_(inst_28135)){
var statearr_28210_28260 = state_28203__$1;
(statearr_28210_28260[(1)] = (5));

} else {
var statearr_28211_28261 = state_28203__$1;
(statearr_28211_28261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28204 === (15))){
var inst_28176 = (state_28203[(2)]);
var state_28203__$1 = state_28203;
var statearr_28212_28262 = state_28203__$1;
(statearr_28212_28262[(2)] = inst_28176);

(statearr_28212_28262[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28204 === (21))){
var inst_28196 = (state_28203[(2)]);
var state_28203__$1 = (function (){var statearr_28213 = state_28203;
(statearr_28213[(9)] = inst_28196);

return statearr_28213;
})();
var statearr_28214_28263 = state_28203__$1;
(statearr_28214_28263[(2)] = null);

(statearr_28214_28263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28204 === (13))){
var inst_28158 = (state_28203[(10)]);
var inst_28160 = cljs.core.chunked_seq_QMARK_.call(null,inst_28158);
var state_28203__$1 = state_28203;
if(inst_28160){
var statearr_28215_28264 = state_28203__$1;
(statearr_28215_28264[(1)] = (16));

} else {
var statearr_28216_28265 = state_28203__$1;
(statearr_28216_28265[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28204 === (22))){
var inst_28188 = (state_28203[(2)]);
var state_28203__$1 = state_28203;
if(cljs.core.truth_(inst_28188)){
var statearr_28217_28266 = state_28203__$1;
(statearr_28217_28266[(1)] = (23));

} else {
var statearr_28218_28267 = state_28203__$1;
(statearr_28218_28267[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28204 === (6))){
var inst_28134 = (state_28203[(8)]);
var inst_28184 = (state_28203[(11)]);
var inst_28182 = (state_28203[(7)]);
var inst_28182__$1 = topic_fn.call(null,inst_28134);
var inst_28183 = cljs.core.deref.call(null,mults);
var inst_28184__$1 = cljs.core.get.call(null,inst_28183,inst_28182__$1);
var state_28203__$1 = (function (){var statearr_28219 = state_28203;
(statearr_28219[(11)] = inst_28184__$1);

(statearr_28219[(7)] = inst_28182__$1);

return statearr_28219;
})();
if(cljs.core.truth_(inst_28184__$1)){
var statearr_28220_28268 = state_28203__$1;
(statearr_28220_28268[(1)] = (19));

} else {
var statearr_28221_28269 = state_28203__$1;
(statearr_28221_28269[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28204 === (25))){
var inst_28193 = (state_28203[(2)]);
var state_28203__$1 = state_28203;
var statearr_28222_28270 = state_28203__$1;
(statearr_28222_28270[(2)] = inst_28193);

(statearr_28222_28270[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28204 === (17))){
var inst_28158 = (state_28203[(10)]);
var inst_28167 = cljs.core.first.call(null,inst_28158);
var inst_28168 = cljs.core.async.muxch_STAR_.call(null,inst_28167);
var inst_28169 = cljs.core.async.close_BANG_.call(null,inst_28168);
var inst_28170 = cljs.core.next.call(null,inst_28158);
var inst_28144 = inst_28170;
var inst_28145 = null;
var inst_28146 = (0);
var inst_28147 = (0);
var state_28203__$1 = (function (){var statearr_28223 = state_28203;
(statearr_28223[(12)] = inst_28147);

(statearr_28223[(13)] = inst_28146);

(statearr_28223[(14)] = inst_28144);

(statearr_28223[(15)] = inst_28169);

(statearr_28223[(16)] = inst_28145);

return statearr_28223;
})();
var statearr_28224_28271 = state_28203__$1;
(statearr_28224_28271[(2)] = null);

(statearr_28224_28271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28204 === (3))){
var inst_28201 = (state_28203[(2)]);
var state_28203__$1 = state_28203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28203__$1,inst_28201);
} else {
if((state_val_28204 === (12))){
var inst_28178 = (state_28203[(2)]);
var state_28203__$1 = state_28203;
var statearr_28225_28272 = state_28203__$1;
(statearr_28225_28272[(2)] = inst_28178);

(statearr_28225_28272[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28204 === (2))){
var state_28203__$1 = state_28203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28203__$1,(4),ch);
} else {
if((state_val_28204 === (23))){
var state_28203__$1 = state_28203;
var statearr_28226_28273 = state_28203__$1;
(statearr_28226_28273[(2)] = null);

(statearr_28226_28273[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28204 === (19))){
var inst_28134 = (state_28203[(8)]);
var inst_28184 = (state_28203[(11)]);
var inst_28186 = cljs.core.async.muxch_STAR_.call(null,inst_28184);
var state_28203__$1 = state_28203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28203__$1,(22),inst_28186,inst_28134);
} else {
if((state_val_28204 === (11))){
var inst_28144 = (state_28203[(14)]);
var inst_28158 = (state_28203[(10)]);
var inst_28158__$1 = cljs.core.seq.call(null,inst_28144);
var state_28203__$1 = (function (){var statearr_28227 = state_28203;
(statearr_28227[(10)] = inst_28158__$1);

return statearr_28227;
})();
if(inst_28158__$1){
var statearr_28228_28274 = state_28203__$1;
(statearr_28228_28274[(1)] = (13));

} else {
var statearr_28229_28275 = state_28203__$1;
(statearr_28229_28275[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28204 === (9))){
var inst_28180 = (state_28203[(2)]);
var state_28203__$1 = state_28203;
var statearr_28230_28276 = state_28203__$1;
(statearr_28230_28276[(2)] = inst_28180);

(statearr_28230_28276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28204 === (5))){
var inst_28141 = cljs.core.deref.call(null,mults);
var inst_28142 = cljs.core.vals.call(null,inst_28141);
var inst_28143 = cljs.core.seq.call(null,inst_28142);
var inst_28144 = inst_28143;
var inst_28145 = null;
var inst_28146 = (0);
var inst_28147 = (0);
var state_28203__$1 = (function (){var statearr_28231 = state_28203;
(statearr_28231[(12)] = inst_28147);

(statearr_28231[(13)] = inst_28146);

(statearr_28231[(14)] = inst_28144);

(statearr_28231[(16)] = inst_28145);

return statearr_28231;
})();
var statearr_28232_28277 = state_28203__$1;
(statearr_28232_28277[(2)] = null);

(statearr_28232_28277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28204 === (14))){
var state_28203__$1 = state_28203;
var statearr_28236_28278 = state_28203__$1;
(statearr_28236_28278[(2)] = null);

(statearr_28236_28278[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28204 === (16))){
var inst_28158 = (state_28203[(10)]);
var inst_28162 = cljs.core.chunk_first.call(null,inst_28158);
var inst_28163 = cljs.core.chunk_rest.call(null,inst_28158);
var inst_28164 = cljs.core.count.call(null,inst_28162);
var inst_28144 = inst_28163;
var inst_28145 = inst_28162;
var inst_28146 = inst_28164;
var inst_28147 = (0);
var state_28203__$1 = (function (){var statearr_28237 = state_28203;
(statearr_28237[(12)] = inst_28147);

(statearr_28237[(13)] = inst_28146);

(statearr_28237[(14)] = inst_28144);

(statearr_28237[(16)] = inst_28145);

return statearr_28237;
})();
var statearr_28238_28279 = state_28203__$1;
(statearr_28238_28279[(2)] = null);

(statearr_28238_28279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28204 === (10))){
var inst_28147 = (state_28203[(12)]);
var inst_28146 = (state_28203[(13)]);
var inst_28144 = (state_28203[(14)]);
var inst_28145 = (state_28203[(16)]);
var inst_28152 = cljs.core._nth.call(null,inst_28145,inst_28147);
var inst_28153 = cljs.core.async.muxch_STAR_.call(null,inst_28152);
var inst_28154 = cljs.core.async.close_BANG_.call(null,inst_28153);
var inst_28155 = (inst_28147 + (1));
var tmp28233 = inst_28146;
var tmp28234 = inst_28144;
var tmp28235 = inst_28145;
var inst_28144__$1 = tmp28234;
var inst_28145__$1 = tmp28235;
var inst_28146__$1 = tmp28233;
var inst_28147__$1 = inst_28155;
var state_28203__$1 = (function (){var statearr_28239 = state_28203;
(statearr_28239[(12)] = inst_28147__$1);

(statearr_28239[(17)] = inst_28154);

(statearr_28239[(13)] = inst_28146__$1);

(statearr_28239[(14)] = inst_28144__$1);

(statearr_28239[(16)] = inst_28145__$1);

return statearr_28239;
})();
var statearr_28240_28280 = state_28203__$1;
(statearr_28240_28280[(2)] = null);

(statearr_28240_28280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28204 === (18))){
var inst_28173 = (state_28203[(2)]);
var state_28203__$1 = state_28203;
var statearr_28241_28281 = state_28203__$1;
(statearr_28241_28281[(2)] = inst_28173);

(statearr_28241_28281[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28204 === (8))){
var inst_28147 = (state_28203[(12)]);
var inst_28146 = (state_28203[(13)]);
var inst_28149 = (inst_28147 < inst_28146);
var inst_28150 = inst_28149;
var state_28203__$1 = state_28203;
if(cljs.core.truth_(inst_28150)){
var statearr_28242_28282 = state_28203__$1;
(statearr_28242_28282[(1)] = (10));

} else {
var statearr_28243_28283 = state_28203__$1;
(statearr_28243_28283[(1)] = (11));

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
});})(c__26336__auto___28255,mults,ensure_mult,p))
;
return ((function (switch__26224__auto__,c__26336__auto___28255,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26225__auto__ = null;
var cljs$core$async$state_machine__26225__auto____0 = (function (){
var statearr_28247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28247[(0)] = cljs$core$async$state_machine__26225__auto__);

(statearr_28247[(1)] = (1));

return statearr_28247;
});
var cljs$core$async$state_machine__26225__auto____1 = (function (state_28203){
while(true){
var ret_value__26226__auto__ = (function (){try{while(true){
var result__26227__auto__ = switch__26224__auto__.call(null,state_28203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26227__auto__;
}
break;
}
}catch (e28248){if((e28248 instanceof Object)){
var ex__26228__auto__ = e28248;
var statearr_28249_28284 = state_28203;
(statearr_28249_28284[(5)] = ex__26228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28285 = state_28203;
state_28203 = G__28285;
continue;
} else {
return ret_value__26226__auto__;
}
break;
}
});
cljs$core$async$state_machine__26225__auto__ = function(state_28203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26225__auto____1.call(this,state_28203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26225__auto____0;
cljs$core$async$state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26225__auto____1;
return cljs$core$async$state_machine__26225__auto__;
})()
;})(switch__26224__auto__,c__26336__auto___28255,mults,ensure_mult,p))
})();
var state__26338__auto__ = (function (){var statearr_28250 = f__26337__auto__.call(null);
(statearr_28250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto___28255);

return statearr_28250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(c__26336__auto___28255,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args28286 = [];
var len__22749__auto___28289 = arguments.length;
var i__22750__auto___28290 = (0);
while(true){
if((i__22750__auto___28290 < len__22749__auto___28289)){
args28286.push((arguments[i__22750__auto___28290]));

var G__28291 = (i__22750__auto___28290 + (1));
i__22750__auto___28290 = G__28291;
continue;
} else {
}
break;
}

var G__28288 = args28286.length;
switch (G__28288) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28286.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args28293 = [];
var len__22749__auto___28296 = arguments.length;
var i__22750__auto___28297 = (0);
while(true){
if((i__22750__auto___28297 < len__22749__auto___28296)){
args28293.push((arguments[i__22750__auto___28297]));

var G__28298 = (i__22750__auto___28297 + (1));
i__22750__auto___28297 = G__28298;
continue;
} else {
}
break;
}

var G__28295 = args28293.length;
switch (G__28295) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28293.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args28300 = [];
var len__22749__auto___28371 = arguments.length;
var i__22750__auto___28372 = (0);
while(true){
if((i__22750__auto___28372 < len__22749__auto___28371)){
args28300.push((arguments[i__22750__auto___28372]));

var G__28373 = (i__22750__auto___28372 + (1));
i__22750__auto___28372 = G__28373;
continue;
} else {
}
break;
}

var G__28302 = args28300.length;
switch (G__28302) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28300.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__26336__auto___28375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26336__auto___28375,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26337__auto__ = (function (){var switch__26224__auto__ = ((function (c__26336__auto___28375,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28341){
var state_val_28342 = (state_28341[(1)]);
if((state_val_28342 === (7))){
var state_28341__$1 = state_28341;
var statearr_28343_28376 = state_28341__$1;
(statearr_28343_28376[(2)] = null);

(statearr_28343_28376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (1))){
var state_28341__$1 = state_28341;
var statearr_28344_28377 = state_28341__$1;
(statearr_28344_28377[(2)] = null);

(statearr_28344_28377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (4))){
var inst_28305 = (state_28341[(7)]);
var inst_28307 = (inst_28305 < cnt);
var state_28341__$1 = state_28341;
if(cljs.core.truth_(inst_28307)){
var statearr_28345_28378 = state_28341__$1;
(statearr_28345_28378[(1)] = (6));

} else {
var statearr_28346_28379 = state_28341__$1;
(statearr_28346_28379[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (15))){
var inst_28337 = (state_28341[(2)]);
var state_28341__$1 = state_28341;
var statearr_28347_28380 = state_28341__$1;
(statearr_28347_28380[(2)] = inst_28337);

(statearr_28347_28380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (13))){
var inst_28330 = cljs.core.async.close_BANG_.call(null,out);
var state_28341__$1 = state_28341;
var statearr_28348_28381 = state_28341__$1;
(statearr_28348_28381[(2)] = inst_28330);

(statearr_28348_28381[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (6))){
var state_28341__$1 = state_28341;
var statearr_28349_28382 = state_28341__$1;
(statearr_28349_28382[(2)] = null);

(statearr_28349_28382[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (3))){
var inst_28339 = (state_28341[(2)]);
var state_28341__$1 = state_28341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28341__$1,inst_28339);
} else {
if((state_val_28342 === (12))){
var inst_28327 = (state_28341[(8)]);
var inst_28327__$1 = (state_28341[(2)]);
var inst_28328 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28327__$1);
var state_28341__$1 = (function (){var statearr_28350 = state_28341;
(statearr_28350[(8)] = inst_28327__$1);

return statearr_28350;
})();
if(cljs.core.truth_(inst_28328)){
var statearr_28351_28383 = state_28341__$1;
(statearr_28351_28383[(1)] = (13));

} else {
var statearr_28352_28384 = state_28341__$1;
(statearr_28352_28384[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (2))){
var inst_28304 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28305 = (0);
var state_28341__$1 = (function (){var statearr_28353 = state_28341;
(statearr_28353[(9)] = inst_28304);

(statearr_28353[(7)] = inst_28305);

return statearr_28353;
})();
var statearr_28354_28385 = state_28341__$1;
(statearr_28354_28385[(2)] = null);

(statearr_28354_28385[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (11))){
var inst_28305 = (state_28341[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28341,(10),Object,null,(9));
var inst_28314 = chs__$1.call(null,inst_28305);
var inst_28315 = done.call(null,inst_28305);
var inst_28316 = cljs.core.async.take_BANG_.call(null,inst_28314,inst_28315);
var state_28341__$1 = state_28341;
var statearr_28355_28386 = state_28341__$1;
(statearr_28355_28386[(2)] = inst_28316);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28341__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (9))){
var inst_28305 = (state_28341[(7)]);
var inst_28318 = (state_28341[(2)]);
var inst_28319 = (inst_28305 + (1));
var inst_28305__$1 = inst_28319;
var state_28341__$1 = (function (){var statearr_28356 = state_28341;
(statearr_28356[(10)] = inst_28318);

(statearr_28356[(7)] = inst_28305__$1);

return statearr_28356;
})();
var statearr_28357_28387 = state_28341__$1;
(statearr_28357_28387[(2)] = null);

(statearr_28357_28387[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (5))){
var inst_28325 = (state_28341[(2)]);
var state_28341__$1 = (function (){var statearr_28358 = state_28341;
(statearr_28358[(11)] = inst_28325);

return statearr_28358;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28341__$1,(12),dchan);
} else {
if((state_val_28342 === (14))){
var inst_28327 = (state_28341[(8)]);
var inst_28332 = cljs.core.apply.call(null,f,inst_28327);
var state_28341__$1 = state_28341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28341__$1,(16),out,inst_28332);
} else {
if((state_val_28342 === (16))){
var inst_28334 = (state_28341[(2)]);
var state_28341__$1 = (function (){var statearr_28359 = state_28341;
(statearr_28359[(12)] = inst_28334);

return statearr_28359;
})();
var statearr_28360_28388 = state_28341__$1;
(statearr_28360_28388[(2)] = null);

(statearr_28360_28388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (10))){
var inst_28309 = (state_28341[(2)]);
var inst_28310 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28341__$1 = (function (){var statearr_28361 = state_28341;
(statearr_28361[(13)] = inst_28309);

return statearr_28361;
})();
var statearr_28362_28389 = state_28341__$1;
(statearr_28362_28389[(2)] = inst_28310);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28341__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (8))){
var inst_28323 = (state_28341[(2)]);
var state_28341__$1 = state_28341;
var statearr_28363_28390 = state_28341__$1;
(statearr_28363_28390[(2)] = inst_28323);

(statearr_28363_28390[(1)] = (5));


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
});})(c__26336__auto___28375,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26224__auto__,c__26336__auto___28375,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26225__auto__ = null;
var cljs$core$async$state_machine__26225__auto____0 = (function (){
var statearr_28367 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28367[(0)] = cljs$core$async$state_machine__26225__auto__);

(statearr_28367[(1)] = (1));

return statearr_28367;
});
var cljs$core$async$state_machine__26225__auto____1 = (function (state_28341){
while(true){
var ret_value__26226__auto__ = (function (){try{while(true){
var result__26227__auto__ = switch__26224__auto__.call(null,state_28341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26227__auto__;
}
break;
}
}catch (e28368){if((e28368 instanceof Object)){
var ex__26228__auto__ = e28368;
var statearr_28369_28391 = state_28341;
(statearr_28369_28391[(5)] = ex__26228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28392 = state_28341;
state_28341 = G__28392;
continue;
} else {
return ret_value__26226__auto__;
}
break;
}
});
cljs$core$async$state_machine__26225__auto__ = function(state_28341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26225__auto____1.call(this,state_28341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26225__auto____0;
cljs$core$async$state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26225__auto____1;
return cljs$core$async$state_machine__26225__auto__;
})()
;})(switch__26224__auto__,c__26336__auto___28375,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26338__auto__ = (function (){var statearr_28370 = f__26337__auto__.call(null);
(statearr_28370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto___28375);

return statearr_28370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(c__26336__auto___28375,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args28394 = [];
var len__22749__auto___28452 = arguments.length;
var i__22750__auto___28453 = (0);
while(true){
if((i__22750__auto___28453 < len__22749__auto___28452)){
args28394.push((arguments[i__22750__auto___28453]));

var G__28454 = (i__22750__auto___28453 + (1));
i__22750__auto___28453 = G__28454;
continue;
} else {
}
break;
}

var G__28396 = args28394.length;
switch (G__28396) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28394.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26336__auto___28456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26336__auto___28456,out){
return (function (){
var f__26337__auto__ = (function (){var switch__26224__auto__ = ((function (c__26336__auto___28456,out){
return (function (state_28428){
var state_val_28429 = (state_28428[(1)]);
if((state_val_28429 === (7))){
var inst_28407 = (state_28428[(7)]);
var inst_28408 = (state_28428[(8)]);
var inst_28407__$1 = (state_28428[(2)]);
var inst_28408__$1 = cljs.core.nth.call(null,inst_28407__$1,(0),null);
var inst_28409 = cljs.core.nth.call(null,inst_28407__$1,(1),null);
var inst_28410 = (inst_28408__$1 == null);
var state_28428__$1 = (function (){var statearr_28430 = state_28428;
(statearr_28430[(9)] = inst_28409);

(statearr_28430[(7)] = inst_28407__$1);

(statearr_28430[(8)] = inst_28408__$1);

return statearr_28430;
})();
if(cljs.core.truth_(inst_28410)){
var statearr_28431_28457 = state_28428__$1;
(statearr_28431_28457[(1)] = (8));

} else {
var statearr_28432_28458 = state_28428__$1;
(statearr_28432_28458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (1))){
var inst_28397 = cljs.core.vec.call(null,chs);
var inst_28398 = inst_28397;
var state_28428__$1 = (function (){var statearr_28433 = state_28428;
(statearr_28433[(10)] = inst_28398);

return statearr_28433;
})();
var statearr_28434_28459 = state_28428__$1;
(statearr_28434_28459[(2)] = null);

(statearr_28434_28459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (4))){
var inst_28398 = (state_28428[(10)]);
var state_28428__$1 = state_28428;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28428__$1,(7),inst_28398);
} else {
if((state_val_28429 === (6))){
var inst_28424 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
var statearr_28435_28460 = state_28428__$1;
(statearr_28435_28460[(2)] = inst_28424);

(statearr_28435_28460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (3))){
var inst_28426 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28428__$1,inst_28426);
} else {
if((state_val_28429 === (2))){
var inst_28398 = (state_28428[(10)]);
var inst_28400 = cljs.core.count.call(null,inst_28398);
var inst_28401 = (inst_28400 > (0));
var state_28428__$1 = state_28428;
if(cljs.core.truth_(inst_28401)){
var statearr_28437_28461 = state_28428__$1;
(statearr_28437_28461[(1)] = (4));

} else {
var statearr_28438_28462 = state_28428__$1;
(statearr_28438_28462[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (11))){
var inst_28398 = (state_28428[(10)]);
var inst_28417 = (state_28428[(2)]);
var tmp28436 = inst_28398;
var inst_28398__$1 = tmp28436;
var state_28428__$1 = (function (){var statearr_28439 = state_28428;
(statearr_28439[(10)] = inst_28398__$1);

(statearr_28439[(11)] = inst_28417);

return statearr_28439;
})();
var statearr_28440_28463 = state_28428__$1;
(statearr_28440_28463[(2)] = null);

(statearr_28440_28463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (9))){
var inst_28408 = (state_28428[(8)]);
var state_28428__$1 = state_28428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28428__$1,(11),out,inst_28408);
} else {
if((state_val_28429 === (5))){
var inst_28422 = cljs.core.async.close_BANG_.call(null,out);
var state_28428__$1 = state_28428;
var statearr_28441_28464 = state_28428__$1;
(statearr_28441_28464[(2)] = inst_28422);

(statearr_28441_28464[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (10))){
var inst_28420 = (state_28428[(2)]);
var state_28428__$1 = state_28428;
var statearr_28442_28465 = state_28428__$1;
(statearr_28442_28465[(2)] = inst_28420);

(statearr_28442_28465[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28429 === (8))){
var inst_28409 = (state_28428[(9)]);
var inst_28398 = (state_28428[(10)]);
var inst_28407 = (state_28428[(7)]);
var inst_28408 = (state_28428[(8)]);
var inst_28412 = (function (){var cs = inst_28398;
var vec__28403 = inst_28407;
var v = inst_28408;
var c = inst_28409;
return ((function (cs,vec__28403,v,c,inst_28409,inst_28398,inst_28407,inst_28408,state_val_28429,c__26336__auto___28456,out){
return (function (p1__28393_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28393_SHARP_);
});
;})(cs,vec__28403,v,c,inst_28409,inst_28398,inst_28407,inst_28408,state_val_28429,c__26336__auto___28456,out))
})();
var inst_28413 = cljs.core.filterv.call(null,inst_28412,inst_28398);
var inst_28398__$1 = inst_28413;
var state_28428__$1 = (function (){var statearr_28443 = state_28428;
(statearr_28443[(10)] = inst_28398__$1);

return statearr_28443;
})();
var statearr_28444_28466 = state_28428__$1;
(statearr_28444_28466[(2)] = null);

(statearr_28444_28466[(1)] = (2));


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
});})(c__26336__auto___28456,out))
;
return ((function (switch__26224__auto__,c__26336__auto___28456,out){
return (function() {
var cljs$core$async$state_machine__26225__auto__ = null;
var cljs$core$async$state_machine__26225__auto____0 = (function (){
var statearr_28448 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28448[(0)] = cljs$core$async$state_machine__26225__auto__);

(statearr_28448[(1)] = (1));

return statearr_28448;
});
var cljs$core$async$state_machine__26225__auto____1 = (function (state_28428){
while(true){
var ret_value__26226__auto__ = (function (){try{while(true){
var result__26227__auto__ = switch__26224__auto__.call(null,state_28428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26227__auto__;
}
break;
}
}catch (e28449){if((e28449 instanceof Object)){
var ex__26228__auto__ = e28449;
var statearr_28450_28467 = state_28428;
(statearr_28450_28467[(5)] = ex__26228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28468 = state_28428;
state_28428 = G__28468;
continue;
} else {
return ret_value__26226__auto__;
}
break;
}
});
cljs$core$async$state_machine__26225__auto__ = function(state_28428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26225__auto____1.call(this,state_28428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26225__auto____0;
cljs$core$async$state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26225__auto____1;
return cljs$core$async$state_machine__26225__auto__;
})()
;})(switch__26224__auto__,c__26336__auto___28456,out))
})();
var state__26338__auto__ = (function (){var statearr_28451 = f__26337__auto__.call(null);
(statearr_28451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto___28456);

return statearr_28451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(c__26336__auto___28456,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args28469 = [];
var len__22749__auto___28518 = arguments.length;
var i__22750__auto___28519 = (0);
while(true){
if((i__22750__auto___28519 < len__22749__auto___28518)){
args28469.push((arguments[i__22750__auto___28519]));

var G__28520 = (i__22750__auto___28519 + (1));
i__22750__auto___28519 = G__28520;
continue;
} else {
}
break;
}

var G__28471 = args28469.length;
switch (G__28471) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28469.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26336__auto___28522 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26336__auto___28522,out){
return (function (){
var f__26337__auto__ = (function (){var switch__26224__auto__ = ((function (c__26336__auto___28522,out){
return (function (state_28495){
var state_val_28496 = (state_28495[(1)]);
if((state_val_28496 === (7))){
var inst_28477 = (state_28495[(7)]);
var inst_28477__$1 = (state_28495[(2)]);
var inst_28478 = (inst_28477__$1 == null);
var inst_28479 = cljs.core.not.call(null,inst_28478);
var state_28495__$1 = (function (){var statearr_28497 = state_28495;
(statearr_28497[(7)] = inst_28477__$1);

return statearr_28497;
})();
if(inst_28479){
var statearr_28498_28523 = state_28495__$1;
(statearr_28498_28523[(1)] = (8));

} else {
var statearr_28499_28524 = state_28495__$1;
(statearr_28499_28524[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28496 === (1))){
var inst_28472 = (0);
var state_28495__$1 = (function (){var statearr_28500 = state_28495;
(statearr_28500[(8)] = inst_28472);

return statearr_28500;
})();
var statearr_28501_28525 = state_28495__$1;
(statearr_28501_28525[(2)] = null);

(statearr_28501_28525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28496 === (4))){
var state_28495__$1 = state_28495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28495__$1,(7),ch);
} else {
if((state_val_28496 === (6))){
var inst_28490 = (state_28495[(2)]);
var state_28495__$1 = state_28495;
var statearr_28502_28526 = state_28495__$1;
(statearr_28502_28526[(2)] = inst_28490);

(statearr_28502_28526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28496 === (3))){
var inst_28492 = (state_28495[(2)]);
var inst_28493 = cljs.core.async.close_BANG_.call(null,out);
var state_28495__$1 = (function (){var statearr_28503 = state_28495;
(statearr_28503[(9)] = inst_28492);

return statearr_28503;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28495__$1,inst_28493);
} else {
if((state_val_28496 === (2))){
var inst_28472 = (state_28495[(8)]);
var inst_28474 = (inst_28472 < n);
var state_28495__$1 = state_28495;
if(cljs.core.truth_(inst_28474)){
var statearr_28504_28527 = state_28495__$1;
(statearr_28504_28527[(1)] = (4));

} else {
var statearr_28505_28528 = state_28495__$1;
(statearr_28505_28528[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28496 === (11))){
var inst_28472 = (state_28495[(8)]);
var inst_28482 = (state_28495[(2)]);
var inst_28483 = (inst_28472 + (1));
var inst_28472__$1 = inst_28483;
var state_28495__$1 = (function (){var statearr_28506 = state_28495;
(statearr_28506[(8)] = inst_28472__$1);

(statearr_28506[(10)] = inst_28482);

return statearr_28506;
})();
var statearr_28507_28529 = state_28495__$1;
(statearr_28507_28529[(2)] = null);

(statearr_28507_28529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28496 === (9))){
var state_28495__$1 = state_28495;
var statearr_28508_28530 = state_28495__$1;
(statearr_28508_28530[(2)] = null);

(statearr_28508_28530[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28496 === (5))){
var state_28495__$1 = state_28495;
var statearr_28509_28531 = state_28495__$1;
(statearr_28509_28531[(2)] = null);

(statearr_28509_28531[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28496 === (10))){
var inst_28487 = (state_28495[(2)]);
var state_28495__$1 = state_28495;
var statearr_28510_28532 = state_28495__$1;
(statearr_28510_28532[(2)] = inst_28487);

(statearr_28510_28532[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28496 === (8))){
var inst_28477 = (state_28495[(7)]);
var state_28495__$1 = state_28495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28495__$1,(11),out,inst_28477);
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
});})(c__26336__auto___28522,out))
;
return ((function (switch__26224__auto__,c__26336__auto___28522,out){
return (function() {
var cljs$core$async$state_machine__26225__auto__ = null;
var cljs$core$async$state_machine__26225__auto____0 = (function (){
var statearr_28514 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28514[(0)] = cljs$core$async$state_machine__26225__auto__);

(statearr_28514[(1)] = (1));

return statearr_28514;
});
var cljs$core$async$state_machine__26225__auto____1 = (function (state_28495){
while(true){
var ret_value__26226__auto__ = (function (){try{while(true){
var result__26227__auto__ = switch__26224__auto__.call(null,state_28495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26227__auto__;
}
break;
}
}catch (e28515){if((e28515 instanceof Object)){
var ex__26228__auto__ = e28515;
var statearr_28516_28533 = state_28495;
(statearr_28516_28533[(5)] = ex__26228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28534 = state_28495;
state_28495 = G__28534;
continue;
} else {
return ret_value__26226__auto__;
}
break;
}
});
cljs$core$async$state_machine__26225__auto__ = function(state_28495){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26225__auto____1.call(this,state_28495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26225__auto____0;
cljs$core$async$state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26225__auto____1;
return cljs$core$async$state_machine__26225__auto__;
})()
;})(switch__26224__auto__,c__26336__auto___28522,out))
})();
var state__26338__auto__ = (function (){var statearr_28517 = f__26337__auto__.call(null);
(statearr_28517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto___28522);

return statearr_28517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(c__26336__auto___28522,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28542 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28542 = (function (map_LT_,f,ch,meta28543){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28543 = meta28543;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28544,meta28543__$1){
var self__ = this;
var _28544__$1 = this;
return (new cljs.core.async.t_cljs$core$async28542(self__.map_LT_,self__.f,self__.ch,meta28543__$1));
});

cljs.core.async.t_cljs$core$async28542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28544){
var self__ = this;
var _28544__$1 = this;
return self__.meta28543;
});

cljs.core.async.t_cljs$core$async28542.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28542.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28542.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28542.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28542.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28545 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28545 = (function (map_LT_,f,ch,meta28543,_,fn1,meta28546){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28543 = meta28543;
this._ = _;
this.fn1 = fn1;
this.meta28546 = meta28546;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28547,meta28546__$1){
var self__ = this;
var _28547__$1 = this;
return (new cljs.core.async.t_cljs$core$async28545(self__.map_LT_,self__.f,self__.ch,self__.meta28543,self__._,self__.fn1,meta28546__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28545.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28547){
var self__ = this;
var _28547__$1 = this;
return self__.meta28546;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28545.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28545.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28545.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28545.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28535_SHARP_){
return f1.call(null,(((p1__28535_SHARP_ == null))?null:self__.f.call(null,p1__28535_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28545.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28543","meta28543",1532384105,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28542","cljs.core.async/t_cljs$core$async28542",-2105224045,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28546","meta28546",-824382850,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28545.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28545.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28545";

cljs.core.async.t_cljs$core$async28545.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async28545");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async28545 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28545(map_LT___$1,f__$1,ch__$1,meta28543__$1,___$2,fn1__$1,meta28546){
return (new cljs.core.async.t_cljs$core$async28545(map_LT___$1,f__$1,ch__$1,meta28543__$1,___$2,fn1__$1,meta28546));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28545(self__.map_LT_,self__.f,self__.ch,self__.meta28543,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21662__auto__ = ret;
if(cljs.core.truth_(and__21662__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__21662__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28542.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28542.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28542.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28543","meta28543",1532384105,null)], null);
});

cljs.core.async.t_cljs$core$async28542.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28542.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28542";

cljs.core.async.t_cljs$core$async28542.cljs$lang$ctorPrWriter = (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async28542");
});

cljs.core.async.__GT_t_cljs$core$async28542 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28542(map_LT___$1,f__$1,ch__$1,meta28543){
return (new cljs.core.async.t_cljs$core$async28542(map_LT___$1,f__$1,ch__$1,meta28543));
});

}

return (new cljs.core.async.t_cljs$core$async28542(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28551 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28551 = (function (map_GT_,f,ch,meta28552){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta28552 = meta28552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28553,meta28552__$1){
var self__ = this;
var _28553__$1 = this;
return (new cljs.core.async.t_cljs$core$async28551(self__.map_GT_,self__.f,self__.ch,meta28552__$1));
});

cljs.core.async.t_cljs$core$async28551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28553){
var self__ = this;
var _28553__$1 = this;
return self__.meta28552;
});

cljs.core.async.t_cljs$core$async28551.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28551.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28551.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28551.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28551.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28551.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28551.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28552","meta28552",2145281513,null)], null);
});

cljs.core.async.t_cljs$core$async28551.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28551.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28551";

cljs.core.async.t_cljs$core$async28551.cljs$lang$ctorPrWriter = (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async28551");
});

cljs.core.async.__GT_t_cljs$core$async28551 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28551(map_GT___$1,f__$1,ch__$1,meta28552){
return (new cljs.core.async.t_cljs$core$async28551(map_GT___$1,f__$1,ch__$1,meta28552));
});

}

return (new cljs.core.async.t_cljs$core$async28551(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28557 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28557 = (function (filter_GT_,p,ch,meta28558){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta28558 = meta28558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28559,meta28558__$1){
var self__ = this;
var _28559__$1 = this;
return (new cljs.core.async.t_cljs$core$async28557(self__.filter_GT_,self__.p,self__.ch,meta28558__$1));
});

cljs.core.async.t_cljs$core$async28557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28559){
var self__ = this;
var _28559__$1 = this;
return self__.meta28558;
});

cljs.core.async.t_cljs$core$async28557.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28557.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28557.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28557.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28557.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28557.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28557.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28557.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28558","meta28558",1660909267,null)], null);
});

cljs.core.async.t_cljs$core$async28557.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28557.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28557";

cljs.core.async.t_cljs$core$async28557.cljs$lang$ctorPrWriter = (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async28557");
});

cljs.core.async.__GT_t_cljs$core$async28557 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28557(filter_GT___$1,p__$1,ch__$1,meta28558){
return (new cljs.core.async.t_cljs$core$async28557(filter_GT___$1,p__$1,ch__$1,meta28558));
});

}

return (new cljs.core.async.t_cljs$core$async28557(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args28560 = [];
var len__22749__auto___28604 = arguments.length;
var i__22750__auto___28605 = (0);
while(true){
if((i__22750__auto___28605 < len__22749__auto___28604)){
args28560.push((arguments[i__22750__auto___28605]));

var G__28606 = (i__22750__auto___28605 + (1));
i__22750__auto___28605 = G__28606;
continue;
} else {
}
break;
}

var G__28562 = args28560.length;
switch (G__28562) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28560.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26336__auto___28608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26336__auto___28608,out){
return (function (){
var f__26337__auto__ = (function (){var switch__26224__auto__ = ((function (c__26336__auto___28608,out){
return (function (state_28583){
var state_val_28584 = (state_28583[(1)]);
if((state_val_28584 === (7))){
var inst_28579 = (state_28583[(2)]);
var state_28583__$1 = state_28583;
var statearr_28585_28609 = state_28583__$1;
(statearr_28585_28609[(2)] = inst_28579);

(statearr_28585_28609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28584 === (1))){
var state_28583__$1 = state_28583;
var statearr_28586_28610 = state_28583__$1;
(statearr_28586_28610[(2)] = null);

(statearr_28586_28610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28584 === (4))){
var inst_28565 = (state_28583[(7)]);
var inst_28565__$1 = (state_28583[(2)]);
var inst_28566 = (inst_28565__$1 == null);
var state_28583__$1 = (function (){var statearr_28587 = state_28583;
(statearr_28587[(7)] = inst_28565__$1);

return statearr_28587;
})();
if(cljs.core.truth_(inst_28566)){
var statearr_28588_28611 = state_28583__$1;
(statearr_28588_28611[(1)] = (5));

} else {
var statearr_28589_28612 = state_28583__$1;
(statearr_28589_28612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28584 === (6))){
var inst_28565 = (state_28583[(7)]);
var inst_28570 = p.call(null,inst_28565);
var state_28583__$1 = state_28583;
if(cljs.core.truth_(inst_28570)){
var statearr_28590_28613 = state_28583__$1;
(statearr_28590_28613[(1)] = (8));

} else {
var statearr_28591_28614 = state_28583__$1;
(statearr_28591_28614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28584 === (3))){
var inst_28581 = (state_28583[(2)]);
var state_28583__$1 = state_28583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28583__$1,inst_28581);
} else {
if((state_val_28584 === (2))){
var state_28583__$1 = state_28583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28583__$1,(4),ch);
} else {
if((state_val_28584 === (11))){
var inst_28573 = (state_28583[(2)]);
var state_28583__$1 = state_28583;
var statearr_28592_28615 = state_28583__$1;
(statearr_28592_28615[(2)] = inst_28573);

(statearr_28592_28615[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28584 === (9))){
var state_28583__$1 = state_28583;
var statearr_28593_28616 = state_28583__$1;
(statearr_28593_28616[(2)] = null);

(statearr_28593_28616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28584 === (5))){
var inst_28568 = cljs.core.async.close_BANG_.call(null,out);
var state_28583__$1 = state_28583;
var statearr_28594_28617 = state_28583__$1;
(statearr_28594_28617[(2)] = inst_28568);

(statearr_28594_28617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28584 === (10))){
var inst_28576 = (state_28583[(2)]);
var state_28583__$1 = (function (){var statearr_28595 = state_28583;
(statearr_28595[(8)] = inst_28576);

return statearr_28595;
})();
var statearr_28596_28618 = state_28583__$1;
(statearr_28596_28618[(2)] = null);

(statearr_28596_28618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28584 === (8))){
var inst_28565 = (state_28583[(7)]);
var state_28583__$1 = state_28583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28583__$1,(11),out,inst_28565);
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
});})(c__26336__auto___28608,out))
;
return ((function (switch__26224__auto__,c__26336__auto___28608,out){
return (function() {
var cljs$core$async$state_machine__26225__auto__ = null;
var cljs$core$async$state_machine__26225__auto____0 = (function (){
var statearr_28600 = [null,null,null,null,null,null,null,null,null];
(statearr_28600[(0)] = cljs$core$async$state_machine__26225__auto__);

(statearr_28600[(1)] = (1));

return statearr_28600;
});
var cljs$core$async$state_machine__26225__auto____1 = (function (state_28583){
while(true){
var ret_value__26226__auto__ = (function (){try{while(true){
var result__26227__auto__ = switch__26224__auto__.call(null,state_28583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26227__auto__;
}
break;
}
}catch (e28601){if((e28601 instanceof Object)){
var ex__26228__auto__ = e28601;
var statearr_28602_28619 = state_28583;
(statearr_28602_28619[(5)] = ex__26228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28620 = state_28583;
state_28583 = G__28620;
continue;
} else {
return ret_value__26226__auto__;
}
break;
}
});
cljs$core$async$state_machine__26225__auto__ = function(state_28583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26225__auto____1.call(this,state_28583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26225__auto____0;
cljs$core$async$state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26225__auto____1;
return cljs$core$async$state_machine__26225__auto__;
})()
;})(switch__26224__auto__,c__26336__auto___28608,out))
})();
var state__26338__auto__ = (function (){var statearr_28603 = f__26337__auto__.call(null);
(statearr_28603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto___28608);

return statearr_28603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(c__26336__auto___28608,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args28621 = [];
var len__22749__auto___28624 = arguments.length;
var i__22750__auto___28625 = (0);
while(true){
if((i__22750__auto___28625 < len__22749__auto___28624)){
args28621.push((arguments[i__22750__auto___28625]));

var G__28626 = (i__22750__auto___28625 + (1));
i__22750__auto___28625 = G__28626;
continue;
} else {
}
break;
}

var G__28623 = args28621.length;
switch (G__28623) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28621.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26336__auto__){
return (function (){
var f__26337__auto__ = (function (){var switch__26224__auto__ = ((function (c__26336__auto__){
return (function (state_28793){
var state_val_28794 = (state_28793[(1)]);
if((state_val_28794 === (7))){
var inst_28789 = (state_28793[(2)]);
var state_28793__$1 = state_28793;
var statearr_28795_28836 = state_28793__$1;
(statearr_28795_28836[(2)] = inst_28789);

(statearr_28795_28836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28794 === (20))){
var inst_28759 = (state_28793[(7)]);
var inst_28770 = (state_28793[(2)]);
var inst_28771 = cljs.core.next.call(null,inst_28759);
var inst_28745 = inst_28771;
var inst_28746 = null;
var inst_28747 = (0);
var inst_28748 = (0);
var state_28793__$1 = (function (){var statearr_28796 = state_28793;
(statearr_28796[(8)] = inst_28770);

(statearr_28796[(9)] = inst_28748);

(statearr_28796[(10)] = inst_28746);

(statearr_28796[(11)] = inst_28745);

(statearr_28796[(12)] = inst_28747);

return statearr_28796;
})();
var statearr_28797_28837 = state_28793__$1;
(statearr_28797_28837[(2)] = null);

(statearr_28797_28837[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28794 === (1))){
var state_28793__$1 = state_28793;
var statearr_28798_28838 = state_28793__$1;
(statearr_28798_28838[(2)] = null);

(statearr_28798_28838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28794 === (4))){
var inst_28734 = (state_28793[(13)]);
var inst_28734__$1 = (state_28793[(2)]);
var inst_28735 = (inst_28734__$1 == null);
var state_28793__$1 = (function (){var statearr_28799 = state_28793;
(statearr_28799[(13)] = inst_28734__$1);

return statearr_28799;
})();
if(cljs.core.truth_(inst_28735)){
var statearr_28800_28839 = state_28793__$1;
(statearr_28800_28839[(1)] = (5));

} else {
var statearr_28801_28840 = state_28793__$1;
(statearr_28801_28840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28794 === (15))){
var state_28793__$1 = state_28793;
var statearr_28805_28841 = state_28793__$1;
(statearr_28805_28841[(2)] = null);

(statearr_28805_28841[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28794 === (21))){
var state_28793__$1 = state_28793;
var statearr_28806_28842 = state_28793__$1;
(statearr_28806_28842[(2)] = null);

(statearr_28806_28842[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28794 === (13))){
var inst_28748 = (state_28793[(9)]);
var inst_28746 = (state_28793[(10)]);
var inst_28745 = (state_28793[(11)]);
var inst_28747 = (state_28793[(12)]);
var inst_28755 = (state_28793[(2)]);
var inst_28756 = (inst_28748 + (1));
var tmp28802 = inst_28746;
var tmp28803 = inst_28745;
var tmp28804 = inst_28747;
var inst_28745__$1 = tmp28803;
var inst_28746__$1 = tmp28802;
var inst_28747__$1 = tmp28804;
var inst_28748__$1 = inst_28756;
var state_28793__$1 = (function (){var statearr_28807 = state_28793;
(statearr_28807[(9)] = inst_28748__$1);

(statearr_28807[(10)] = inst_28746__$1);

(statearr_28807[(11)] = inst_28745__$1);

(statearr_28807[(14)] = inst_28755);

(statearr_28807[(12)] = inst_28747__$1);

return statearr_28807;
})();
var statearr_28808_28843 = state_28793__$1;
(statearr_28808_28843[(2)] = null);

(statearr_28808_28843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28794 === (22))){
var state_28793__$1 = state_28793;
var statearr_28809_28844 = state_28793__$1;
(statearr_28809_28844[(2)] = null);

(statearr_28809_28844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28794 === (6))){
var inst_28734 = (state_28793[(13)]);
var inst_28743 = f.call(null,inst_28734);
var inst_28744 = cljs.core.seq.call(null,inst_28743);
var inst_28745 = inst_28744;
var inst_28746 = null;
var inst_28747 = (0);
var inst_28748 = (0);
var state_28793__$1 = (function (){var statearr_28810 = state_28793;
(statearr_28810[(9)] = inst_28748);

(statearr_28810[(10)] = inst_28746);

(statearr_28810[(11)] = inst_28745);

(statearr_28810[(12)] = inst_28747);

return statearr_28810;
})();
var statearr_28811_28845 = state_28793__$1;
(statearr_28811_28845[(2)] = null);

(statearr_28811_28845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28794 === (17))){
var inst_28759 = (state_28793[(7)]);
var inst_28763 = cljs.core.chunk_first.call(null,inst_28759);
var inst_28764 = cljs.core.chunk_rest.call(null,inst_28759);
var inst_28765 = cljs.core.count.call(null,inst_28763);
var inst_28745 = inst_28764;
var inst_28746 = inst_28763;
var inst_28747 = inst_28765;
var inst_28748 = (0);
var state_28793__$1 = (function (){var statearr_28812 = state_28793;
(statearr_28812[(9)] = inst_28748);

(statearr_28812[(10)] = inst_28746);

(statearr_28812[(11)] = inst_28745);

(statearr_28812[(12)] = inst_28747);

return statearr_28812;
})();
var statearr_28813_28846 = state_28793__$1;
(statearr_28813_28846[(2)] = null);

(statearr_28813_28846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28794 === (3))){
var inst_28791 = (state_28793[(2)]);
var state_28793__$1 = state_28793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28793__$1,inst_28791);
} else {
if((state_val_28794 === (12))){
var inst_28779 = (state_28793[(2)]);
var state_28793__$1 = state_28793;
var statearr_28814_28847 = state_28793__$1;
(statearr_28814_28847[(2)] = inst_28779);

(statearr_28814_28847[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28794 === (2))){
var state_28793__$1 = state_28793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28793__$1,(4),in$);
} else {
if((state_val_28794 === (23))){
var inst_28787 = (state_28793[(2)]);
var state_28793__$1 = state_28793;
var statearr_28815_28848 = state_28793__$1;
(statearr_28815_28848[(2)] = inst_28787);

(statearr_28815_28848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28794 === (19))){
var inst_28774 = (state_28793[(2)]);
var state_28793__$1 = state_28793;
var statearr_28816_28849 = state_28793__$1;
(statearr_28816_28849[(2)] = inst_28774);

(statearr_28816_28849[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28794 === (11))){
var inst_28759 = (state_28793[(7)]);
var inst_28745 = (state_28793[(11)]);
var inst_28759__$1 = cljs.core.seq.call(null,inst_28745);
var state_28793__$1 = (function (){var statearr_28817 = state_28793;
(statearr_28817[(7)] = inst_28759__$1);

return statearr_28817;
})();
if(inst_28759__$1){
var statearr_28818_28850 = state_28793__$1;
(statearr_28818_28850[(1)] = (14));

} else {
var statearr_28819_28851 = state_28793__$1;
(statearr_28819_28851[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28794 === (9))){
var inst_28781 = (state_28793[(2)]);
var inst_28782 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28793__$1 = (function (){var statearr_28820 = state_28793;
(statearr_28820[(15)] = inst_28781);

return statearr_28820;
})();
if(cljs.core.truth_(inst_28782)){
var statearr_28821_28852 = state_28793__$1;
(statearr_28821_28852[(1)] = (21));

} else {
var statearr_28822_28853 = state_28793__$1;
(statearr_28822_28853[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28794 === (5))){
var inst_28737 = cljs.core.async.close_BANG_.call(null,out);
var state_28793__$1 = state_28793;
var statearr_28823_28854 = state_28793__$1;
(statearr_28823_28854[(2)] = inst_28737);

(statearr_28823_28854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28794 === (14))){
var inst_28759 = (state_28793[(7)]);
var inst_28761 = cljs.core.chunked_seq_QMARK_.call(null,inst_28759);
var state_28793__$1 = state_28793;
if(inst_28761){
var statearr_28824_28855 = state_28793__$1;
(statearr_28824_28855[(1)] = (17));

} else {
var statearr_28825_28856 = state_28793__$1;
(statearr_28825_28856[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28794 === (16))){
var inst_28777 = (state_28793[(2)]);
var state_28793__$1 = state_28793;
var statearr_28826_28857 = state_28793__$1;
(statearr_28826_28857[(2)] = inst_28777);

(statearr_28826_28857[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28794 === (10))){
var inst_28748 = (state_28793[(9)]);
var inst_28746 = (state_28793[(10)]);
var inst_28753 = cljs.core._nth.call(null,inst_28746,inst_28748);
var state_28793__$1 = state_28793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28793__$1,(13),out,inst_28753);
} else {
if((state_val_28794 === (18))){
var inst_28759 = (state_28793[(7)]);
var inst_28768 = cljs.core.first.call(null,inst_28759);
var state_28793__$1 = state_28793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28793__$1,(20),out,inst_28768);
} else {
if((state_val_28794 === (8))){
var inst_28748 = (state_28793[(9)]);
var inst_28747 = (state_28793[(12)]);
var inst_28750 = (inst_28748 < inst_28747);
var inst_28751 = inst_28750;
var state_28793__$1 = state_28793;
if(cljs.core.truth_(inst_28751)){
var statearr_28827_28858 = state_28793__$1;
(statearr_28827_28858[(1)] = (10));

} else {
var statearr_28828_28859 = state_28793__$1;
(statearr_28828_28859[(1)] = (11));

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
});})(c__26336__auto__))
;
return ((function (switch__26224__auto__,c__26336__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26225__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26225__auto____0 = (function (){
var statearr_28832 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28832[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26225__auto__);

(statearr_28832[(1)] = (1));

return statearr_28832;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26225__auto____1 = (function (state_28793){
while(true){
var ret_value__26226__auto__ = (function (){try{while(true){
var result__26227__auto__ = switch__26224__auto__.call(null,state_28793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26227__auto__;
}
break;
}
}catch (e28833){if((e28833 instanceof Object)){
var ex__26228__auto__ = e28833;
var statearr_28834_28860 = state_28793;
(statearr_28834_28860[(5)] = ex__26228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28861 = state_28793;
state_28793 = G__28861;
continue;
} else {
return ret_value__26226__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26225__auto__ = function(state_28793){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26225__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26225__auto____1.call(this,state_28793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26225__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26225__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26225__auto__;
})()
;})(switch__26224__auto__,c__26336__auto__))
})();
var state__26338__auto__ = (function (){var statearr_28835 = f__26337__auto__.call(null);
(statearr_28835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto__);

return statearr_28835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(c__26336__auto__))
);

return c__26336__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args28862 = [];
var len__22749__auto___28865 = arguments.length;
var i__22750__auto___28866 = (0);
while(true){
if((i__22750__auto___28866 < len__22749__auto___28865)){
args28862.push((arguments[i__22750__auto___28866]));

var G__28867 = (i__22750__auto___28866 + (1));
i__22750__auto___28866 = G__28867;
continue;
} else {
}
break;
}

var G__28864 = args28862.length;
switch (G__28864) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28862.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args28869 = [];
var len__22749__auto___28872 = arguments.length;
var i__22750__auto___28873 = (0);
while(true){
if((i__22750__auto___28873 < len__22749__auto___28872)){
args28869.push((arguments[i__22750__auto___28873]));

var G__28874 = (i__22750__auto___28873 + (1));
i__22750__auto___28873 = G__28874;
continue;
} else {
}
break;
}

var G__28871 = args28869.length;
switch (G__28871) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28869.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args28876 = [];
var len__22749__auto___28927 = arguments.length;
var i__22750__auto___28928 = (0);
while(true){
if((i__22750__auto___28928 < len__22749__auto___28927)){
args28876.push((arguments[i__22750__auto___28928]));

var G__28929 = (i__22750__auto___28928 + (1));
i__22750__auto___28928 = G__28929;
continue;
} else {
}
break;
}

var G__28878 = args28876.length;
switch (G__28878) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28876.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26336__auto___28931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26336__auto___28931,out){
return (function (){
var f__26337__auto__ = (function (){var switch__26224__auto__ = ((function (c__26336__auto___28931,out){
return (function (state_28902){
var state_val_28903 = (state_28902[(1)]);
if((state_val_28903 === (7))){
var inst_28897 = (state_28902[(2)]);
var state_28902__$1 = state_28902;
var statearr_28904_28932 = state_28902__$1;
(statearr_28904_28932[(2)] = inst_28897);

(statearr_28904_28932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (1))){
var inst_28879 = null;
var state_28902__$1 = (function (){var statearr_28905 = state_28902;
(statearr_28905[(7)] = inst_28879);

return statearr_28905;
})();
var statearr_28906_28933 = state_28902__$1;
(statearr_28906_28933[(2)] = null);

(statearr_28906_28933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (4))){
var inst_28882 = (state_28902[(8)]);
var inst_28882__$1 = (state_28902[(2)]);
var inst_28883 = (inst_28882__$1 == null);
var inst_28884 = cljs.core.not.call(null,inst_28883);
var state_28902__$1 = (function (){var statearr_28907 = state_28902;
(statearr_28907[(8)] = inst_28882__$1);

return statearr_28907;
})();
if(inst_28884){
var statearr_28908_28934 = state_28902__$1;
(statearr_28908_28934[(1)] = (5));

} else {
var statearr_28909_28935 = state_28902__$1;
(statearr_28909_28935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (6))){
var state_28902__$1 = state_28902;
var statearr_28910_28936 = state_28902__$1;
(statearr_28910_28936[(2)] = null);

(statearr_28910_28936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (3))){
var inst_28899 = (state_28902[(2)]);
var inst_28900 = cljs.core.async.close_BANG_.call(null,out);
var state_28902__$1 = (function (){var statearr_28911 = state_28902;
(statearr_28911[(9)] = inst_28899);

return statearr_28911;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28902__$1,inst_28900);
} else {
if((state_val_28903 === (2))){
var state_28902__$1 = state_28902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28902__$1,(4),ch);
} else {
if((state_val_28903 === (11))){
var inst_28882 = (state_28902[(8)]);
var inst_28891 = (state_28902[(2)]);
var inst_28879 = inst_28882;
var state_28902__$1 = (function (){var statearr_28912 = state_28902;
(statearr_28912[(10)] = inst_28891);

(statearr_28912[(7)] = inst_28879);

return statearr_28912;
})();
var statearr_28913_28937 = state_28902__$1;
(statearr_28913_28937[(2)] = null);

(statearr_28913_28937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (9))){
var inst_28882 = (state_28902[(8)]);
var state_28902__$1 = state_28902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28902__$1,(11),out,inst_28882);
} else {
if((state_val_28903 === (5))){
var inst_28879 = (state_28902[(7)]);
var inst_28882 = (state_28902[(8)]);
var inst_28886 = cljs.core._EQ_.call(null,inst_28882,inst_28879);
var state_28902__$1 = state_28902;
if(inst_28886){
var statearr_28915_28938 = state_28902__$1;
(statearr_28915_28938[(1)] = (8));

} else {
var statearr_28916_28939 = state_28902__$1;
(statearr_28916_28939[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (10))){
var inst_28894 = (state_28902[(2)]);
var state_28902__$1 = state_28902;
var statearr_28917_28940 = state_28902__$1;
(statearr_28917_28940[(2)] = inst_28894);

(statearr_28917_28940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28903 === (8))){
var inst_28879 = (state_28902[(7)]);
var tmp28914 = inst_28879;
var inst_28879__$1 = tmp28914;
var state_28902__$1 = (function (){var statearr_28918 = state_28902;
(statearr_28918[(7)] = inst_28879__$1);

return statearr_28918;
})();
var statearr_28919_28941 = state_28902__$1;
(statearr_28919_28941[(2)] = null);

(statearr_28919_28941[(1)] = (2));


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
});})(c__26336__auto___28931,out))
;
return ((function (switch__26224__auto__,c__26336__auto___28931,out){
return (function() {
var cljs$core$async$state_machine__26225__auto__ = null;
var cljs$core$async$state_machine__26225__auto____0 = (function (){
var statearr_28923 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28923[(0)] = cljs$core$async$state_machine__26225__auto__);

(statearr_28923[(1)] = (1));

return statearr_28923;
});
var cljs$core$async$state_machine__26225__auto____1 = (function (state_28902){
while(true){
var ret_value__26226__auto__ = (function (){try{while(true){
var result__26227__auto__ = switch__26224__auto__.call(null,state_28902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26227__auto__;
}
break;
}
}catch (e28924){if((e28924 instanceof Object)){
var ex__26228__auto__ = e28924;
var statearr_28925_28942 = state_28902;
(statearr_28925_28942[(5)] = ex__26228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28943 = state_28902;
state_28902 = G__28943;
continue;
} else {
return ret_value__26226__auto__;
}
break;
}
});
cljs$core$async$state_machine__26225__auto__ = function(state_28902){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26225__auto____1.call(this,state_28902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26225__auto____0;
cljs$core$async$state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26225__auto____1;
return cljs$core$async$state_machine__26225__auto__;
})()
;})(switch__26224__auto__,c__26336__auto___28931,out))
})();
var state__26338__auto__ = (function (){var statearr_28926 = f__26337__auto__.call(null);
(statearr_28926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto___28931);

return statearr_28926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(c__26336__auto___28931,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args28944 = [];
var len__22749__auto___29014 = arguments.length;
var i__22750__auto___29015 = (0);
while(true){
if((i__22750__auto___29015 < len__22749__auto___29014)){
args28944.push((arguments[i__22750__auto___29015]));

var G__29016 = (i__22750__auto___29015 + (1));
i__22750__auto___29015 = G__29016;
continue;
} else {
}
break;
}

var G__28946 = args28944.length;
switch (G__28946) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28944.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26336__auto___29018 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26336__auto___29018,out){
return (function (){
var f__26337__auto__ = (function (){var switch__26224__auto__ = ((function (c__26336__auto___29018,out){
return (function (state_28984){
var state_val_28985 = (state_28984[(1)]);
if((state_val_28985 === (7))){
var inst_28980 = (state_28984[(2)]);
var state_28984__$1 = state_28984;
var statearr_28986_29019 = state_28984__$1;
(statearr_28986_29019[(2)] = inst_28980);

(statearr_28986_29019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (1))){
var inst_28947 = (new Array(n));
var inst_28948 = inst_28947;
var inst_28949 = (0);
var state_28984__$1 = (function (){var statearr_28987 = state_28984;
(statearr_28987[(7)] = inst_28949);

(statearr_28987[(8)] = inst_28948);

return statearr_28987;
})();
var statearr_28988_29020 = state_28984__$1;
(statearr_28988_29020[(2)] = null);

(statearr_28988_29020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (4))){
var inst_28952 = (state_28984[(9)]);
var inst_28952__$1 = (state_28984[(2)]);
var inst_28953 = (inst_28952__$1 == null);
var inst_28954 = cljs.core.not.call(null,inst_28953);
var state_28984__$1 = (function (){var statearr_28989 = state_28984;
(statearr_28989[(9)] = inst_28952__$1);

return statearr_28989;
})();
if(inst_28954){
var statearr_28990_29021 = state_28984__$1;
(statearr_28990_29021[(1)] = (5));

} else {
var statearr_28991_29022 = state_28984__$1;
(statearr_28991_29022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (15))){
var inst_28974 = (state_28984[(2)]);
var state_28984__$1 = state_28984;
var statearr_28992_29023 = state_28984__$1;
(statearr_28992_29023[(2)] = inst_28974);

(statearr_28992_29023[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (13))){
var state_28984__$1 = state_28984;
var statearr_28993_29024 = state_28984__$1;
(statearr_28993_29024[(2)] = null);

(statearr_28993_29024[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (6))){
var inst_28949 = (state_28984[(7)]);
var inst_28970 = (inst_28949 > (0));
var state_28984__$1 = state_28984;
if(cljs.core.truth_(inst_28970)){
var statearr_28994_29025 = state_28984__$1;
(statearr_28994_29025[(1)] = (12));

} else {
var statearr_28995_29026 = state_28984__$1;
(statearr_28995_29026[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (3))){
var inst_28982 = (state_28984[(2)]);
var state_28984__$1 = state_28984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28984__$1,inst_28982);
} else {
if((state_val_28985 === (12))){
var inst_28948 = (state_28984[(8)]);
var inst_28972 = cljs.core.vec.call(null,inst_28948);
var state_28984__$1 = state_28984;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28984__$1,(15),out,inst_28972);
} else {
if((state_val_28985 === (2))){
var state_28984__$1 = state_28984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28984__$1,(4),ch);
} else {
if((state_val_28985 === (11))){
var inst_28964 = (state_28984[(2)]);
var inst_28965 = (new Array(n));
var inst_28948 = inst_28965;
var inst_28949 = (0);
var state_28984__$1 = (function (){var statearr_28996 = state_28984;
(statearr_28996[(7)] = inst_28949);

(statearr_28996[(10)] = inst_28964);

(statearr_28996[(8)] = inst_28948);

return statearr_28996;
})();
var statearr_28997_29027 = state_28984__$1;
(statearr_28997_29027[(2)] = null);

(statearr_28997_29027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (9))){
var inst_28948 = (state_28984[(8)]);
var inst_28962 = cljs.core.vec.call(null,inst_28948);
var state_28984__$1 = state_28984;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28984__$1,(11),out,inst_28962);
} else {
if((state_val_28985 === (5))){
var inst_28949 = (state_28984[(7)]);
var inst_28957 = (state_28984[(11)]);
var inst_28952 = (state_28984[(9)]);
var inst_28948 = (state_28984[(8)]);
var inst_28956 = (inst_28948[inst_28949] = inst_28952);
var inst_28957__$1 = (inst_28949 + (1));
var inst_28958 = (inst_28957__$1 < n);
var state_28984__$1 = (function (){var statearr_28998 = state_28984;
(statearr_28998[(11)] = inst_28957__$1);

(statearr_28998[(12)] = inst_28956);

return statearr_28998;
})();
if(cljs.core.truth_(inst_28958)){
var statearr_28999_29028 = state_28984__$1;
(statearr_28999_29028[(1)] = (8));

} else {
var statearr_29000_29029 = state_28984__$1;
(statearr_29000_29029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (14))){
var inst_28977 = (state_28984[(2)]);
var inst_28978 = cljs.core.async.close_BANG_.call(null,out);
var state_28984__$1 = (function (){var statearr_29002 = state_28984;
(statearr_29002[(13)] = inst_28977);

return statearr_29002;
})();
var statearr_29003_29030 = state_28984__$1;
(statearr_29003_29030[(2)] = inst_28978);

(statearr_29003_29030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (10))){
var inst_28968 = (state_28984[(2)]);
var state_28984__$1 = state_28984;
var statearr_29004_29031 = state_28984__$1;
(statearr_29004_29031[(2)] = inst_28968);

(statearr_29004_29031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28985 === (8))){
var inst_28957 = (state_28984[(11)]);
var inst_28948 = (state_28984[(8)]);
var tmp29001 = inst_28948;
var inst_28948__$1 = tmp29001;
var inst_28949 = inst_28957;
var state_28984__$1 = (function (){var statearr_29005 = state_28984;
(statearr_29005[(7)] = inst_28949);

(statearr_29005[(8)] = inst_28948__$1);

return statearr_29005;
})();
var statearr_29006_29032 = state_28984__$1;
(statearr_29006_29032[(2)] = null);

(statearr_29006_29032[(1)] = (2));


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
});})(c__26336__auto___29018,out))
;
return ((function (switch__26224__auto__,c__26336__auto___29018,out){
return (function() {
var cljs$core$async$state_machine__26225__auto__ = null;
var cljs$core$async$state_machine__26225__auto____0 = (function (){
var statearr_29010 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29010[(0)] = cljs$core$async$state_machine__26225__auto__);

(statearr_29010[(1)] = (1));

return statearr_29010;
});
var cljs$core$async$state_machine__26225__auto____1 = (function (state_28984){
while(true){
var ret_value__26226__auto__ = (function (){try{while(true){
var result__26227__auto__ = switch__26224__auto__.call(null,state_28984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26227__auto__;
}
break;
}
}catch (e29011){if((e29011 instanceof Object)){
var ex__26228__auto__ = e29011;
var statearr_29012_29033 = state_28984;
(statearr_29012_29033[(5)] = ex__26228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29034 = state_28984;
state_28984 = G__29034;
continue;
} else {
return ret_value__26226__auto__;
}
break;
}
});
cljs$core$async$state_machine__26225__auto__ = function(state_28984){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26225__auto____1.call(this,state_28984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26225__auto____0;
cljs$core$async$state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26225__auto____1;
return cljs$core$async$state_machine__26225__auto__;
})()
;})(switch__26224__auto__,c__26336__auto___29018,out))
})();
var state__26338__auto__ = (function (){var statearr_29013 = f__26337__auto__.call(null);
(statearr_29013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto___29018);

return statearr_29013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(c__26336__auto___29018,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29035 = [];
var len__22749__auto___29109 = arguments.length;
var i__22750__auto___29110 = (0);
while(true){
if((i__22750__auto___29110 < len__22749__auto___29109)){
args29035.push((arguments[i__22750__auto___29110]));

var G__29111 = (i__22750__auto___29110 + (1));
i__22750__auto___29110 = G__29111;
continue;
} else {
}
break;
}

var G__29037 = args29035.length;
switch (G__29037) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29035.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26336__auto___29113 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26336__auto___29113,out){
return (function (){
var f__26337__auto__ = (function (){var switch__26224__auto__ = ((function (c__26336__auto___29113,out){
return (function (state_29079){
var state_val_29080 = (state_29079[(1)]);
if((state_val_29080 === (7))){
var inst_29075 = (state_29079[(2)]);
var state_29079__$1 = state_29079;
var statearr_29081_29114 = state_29079__$1;
(statearr_29081_29114[(2)] = inst_29075);

(statearr_29081_29114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29080 === (1))){
var inst_29038 = [];
var inst_29039 = inst_29038;
var inst_29040 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29079__$1 = (function (){var statearr_29082 = state_29079;
(statearr_29082[(7)] = inst_29039);

(statearr_29082[(8)] = inst_29040);

return statearr_29082;
})();
var statearr_29083_29115 = state_29079__$1;
(statearr_29083_29115[(2)] = null);

(statearr_29083_29115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29080 === (4))){
var inst_29043 = (state_29079[(9)]);
var inst_29043__$1 = (state_29079[(2)]);
var inst_29044 = (inst_29043__$1 == null);
var inst_29045 = cljs.core.not.call(null,inst_29044);
var state_29079__$1 = (function (){var statearr_29084 = state_29079;
(statearr_29084[(9)] = inst_29043__$1);

return statearr_29084;
})();
if(inst_29045){
var statearr_29085_29116 = state_29079__$1;
(statearr_29085_29116[(1)] = (5));

} else {
var statearr_29086_29117 = state_29079__$1;
(statearr_29086_29117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29080 === (15))){
var inst_29069 = (state_29079[(2)]);
var state_29079__$1 = state_29079;
var statearr_29087_29118 = state_29079__$1;
(statearr_29087_29118[(2)] = inst_29069);

(statearr_29087_29118[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29080 === (13))){
var state_29079__$1 = state_29079;
var statearr_29088_29119 = state_29079__$1;
(statearr_29088_29119[(2)] = null);

(statearr_29088_29119[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29080 === (6))){
var inst_29039 = (state_29079[(7)]);
var inst_29064 = inst_29039.length;
var inst_29065 = (inst_29064 > (0));
var state_29079__$1 = state_29079;
if(cljs.core.truth_(inst_29065)){
var statearr_29089_29120 = state_29079__$1;
(statearr_29089_29120[(1)] = (12));

} else {
var statearr_29090_29121 = state_29079__$1;
(statearr_29090_29121[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29080 === (3))){
var inst_29077 = (state_29079[(2)]);
var state_29079__$1 = state_29079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29079__$1,inst_29077);
} else {
if((state_val_29080 === (12))){
var inst_29039 = (state_29079[(7)]);
var inst_29067 = cljs.core.vec.call(null,inst_29039);
var state_29079__$1 = state_29079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29079__$1,(15),out,inst_29067);
} else {
if((state_val_29080 === (2))){
var state_29079__$1 = state_29079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29079__$1,(4),ch);
} else {
if((state_val_29080 === (11))){
var inst_29043 = (state_29079[(9)]);
var inst_29047 = (state_29079[(10)]);
var inst_29057 = (state_29079[(2)]);
var inst_29058 = [];
var inst_29059 = inst_29058.push(inst_29043);
var inst_29039 = inst_29058;
var inst_29040 = inst_29047;
var state_29079__$1 = (function (){var statearr_29091 = state_29079;
(statearr_29091[(7)] = inst_29039);

(statearr_29091[(11)] = inst_29057);

(statearr_29091[(8)] = inst_29040);

(statearr_29091[(12)] = inst_29059);

return statearr_29091;
})();
var statearr_29092_29122 = state_29079__$1;
(statearr_29092_29122[(2)] = null);

(statearr_29092_29122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29080 === (9))){
var inst_29039 = (state_29079[(7)]);
var inst_29055 = cljs.core.vec.call(null,inst_29039);
var state_29079__$1 = state_29079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29079__$1,(11),out,inst_29055);
} else {
if((state_val_29080 === (5))){
var inst_29043 = (state_29079[(9)]);
var inst_29040 = (state_29079[(8)]);
var inst_29047 = (state_29079[(10)]);
var inst_29047__$1 = f.call(null,inst_29043);
var inst_29048 = cljs.core._EQ_.call(null,inst_29047__$1,inst_29040);
var inst_29049 = cljs.core.keyword_identical_QMARK_.call(null,inst_29040,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29050 = (inst_29048) || (inst_29049);
var state_29079__$1 = (function (){var statearr_29093 = state_29079;
(statearr_29093[(10)] = inst_29047__$1);

return statearr_29093;
})();
if(cljs.core.truth_(inst_29050)){
var statearr_29094_29123 = state_29079__$1;
(statearr_29094_29123[(1)] = (8));

} else {
var statearr_29095_29124 = state_29079__$1;
(statearr_29095_29124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29080 === (14))){
var inst_29072 = (state_29079[(2)]);
var inst_29073 = cljs.core.async.close_BANG_.call(null,out);
var state_29079__$1 = (function (){var statearr_29097 = state_29079;
(statearr_29097[(13)] = inst_29072);

return statearr_29097;
})();
var statearr_29098_29125 = state_29079__$1;
(statearr_29098_29125[(2)] = inst_29073);

(statearr_29098_29125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29080 === (10))){
var inst_29062 = (state_29079[(2)]);
var state_29079__$1 = state_29079;
var statearr_29099_29126 = state_29079__$1;
(statearr_29099_29126[(2)] = inst_29062);

(statearr_29099_29126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29080 === (8))){
var inst_29043 = (state_29079[(9)]);
var inst_29039 = (state_29079[(7)]);
var inst_29047 = (state_29079[(10)]);
var inst_29052 = inst_29039.push(inst_29043);
var tmp29096 = inst_29039;
var inst_29039__$1 = tmp29096;
var inst_29040 = inst_29047;
var state_29079__$1 = (function (){var statearr_29100 = state_29079;
(statearr_29100[(7)] = inst_29039__$1);

(statearr_29100[(8)] = inst_29040);

(statearr_29100[(14)] = inst_29052);

return statearr_29100;
})();
var statearr_29101_29127 = state_29079__$1;
(statearr_29101_29127[(2)] = null);

(statearr_29101_29127[(1)] = (2));


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
});})(c__26336__auto___29113,out))
;
return ((function (switch__26224__auto__,c__26336__auto___29113,out){
return (function() {
var cljs$core$async$state_machine__26225__auto__ = null;
var cljs$core$async$state_machine__26225__auto____0 = (function (){
var statearr_29105 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29105[(0)] = cljs$core$async$state_machine__26225__auto__);

(statearr_29105[(1)] = (1));

return statearr_29105;
});
var cljs$core$async$state_machine__26225__auto____1 = (function (state_29079){
while(true){
var ret_value__26226__auto__ = (function (){try{while(true){
var result__26227__auto__ = switch__26224__auto__.call(null,state_29079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26227__auto__;
}
break;
}
}catch (e29106){if((e29106 instanceof Object)){
var ex__26228__auto__ = e29106;
var statearr_29107_29128 = state_29079;
(statearr_29107_29128[(5)] = ex__26228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29129 = state_29079;
state_29079 = G__29129;
continue;
} else {
return ret_value__26226__auto__;
}
break;
}
});
cljs$core$async$state_machine__26225__auto__ = function(state_29079){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26225__auto____1.call(this,state_29079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26225__auto____0;
cljs$core$async$state_machine__26225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26225__auto____1;
return cljs$core$async$state_machine__26225__auto__;
})()
;})(switch__26224__auto__,c__26336__auto___29113,out))
})();
var state__26338__auto__ = (function (){var statearr_29108 = f__26337__auto__.call(null);
(statearr_29108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26336__auto___29113);

return statearr_29108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26338__auto__);
});})(c__26336__auto___29113,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map