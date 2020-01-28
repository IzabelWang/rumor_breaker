	var __wxAppData = __wxAppData || {}; 	var __wxRoute = __wxRoute || ""; 	var __wxRouteBegin = __wxRouteBegin || ""; 	var __wxAppCode__ = __wxAppCode__ || {};	var global = global || {};	var __WXML_GLOBAL__=__WXML_GLOBAL__ || {};	var __wxAppCurrentFile__=__wxAppCurrentFile__||""; 	var Component = Component || function(){};	var definePlugin = definePlugin || function(){};	var requirePlugin = requirePlugin || function(){};	var Behavior = Behavior || function(){};	var __vd_version_info__ = __vd_version_info__ || {};
		definePlugin("plugin://wxa75efa648b60994b", function(define, require, module, exports, global, wx, App, Page, Component, Behavior, getApp, getCurrentPages) {			/*v0.5vv_20181116_syb_scopedata*/global.__wcc_version__='v0.5vv_20181116_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx_wxa75efa648b60994b=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx_wxa75efa648b60994b:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "", 2 );
return value;
}
else
{
var value = $gdc( raw, "", 2 );
return value;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_wxa75efa648b60994b || [];
function gz$gwx_wxa75efa648b60994b_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_1)return __WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_1
__WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'autoplay']])
Z([3,'__onTvpEnded'])
Z([3,'__onTvpError'])
Z([3,'__onTvpFullScreenChange'])
Z([3,'__onTvpPause'])
Z([3,'__onTvpPlay'])
Z([3,'__onTvpTimeupdate'])
Z([3,'player_video'])
Z([[2,'!'],[[7],[3,'tvpIsAd']]])
Z([[7],[3,'danmuBtn']])
Z([[7],[3,'danmuList']])
Z([[7],[3,'enableDanmu']])
Z([[2,'||'],[[7],[3,'isHiddenVideo']],[[2,'=='],[[7],[3,'tvpState']],[1,'error']]])
Z([[7],[3,'playerid']])
Z([[7],[3,'poster']])
Z([[7],[3,'showCenterPlayBtn']])
Z([[7],[3,'tvpUrl']])
})(__WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_1);return __WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_1
}
function gz$gwx_wxa75efa648b60994b_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_2)return __WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_2
__WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'autoplay']])
Z([3,'__onTvpEnded'])
Z([3,'__onTvpError'])
Z([3,'__onTvpFullScreenChange'])
Z([3,'__onTvpPause'])
Z([3,'__onTvpPlay'])
Z([3,'__onTvpTimeupdate'])
Z([3,'player_video'])
Z([[2,'!'],[[2,'==='],[[7],[3,'controls']],[1,false]]])
Z([[7],[3,'danmuBtn']])
Z([[7],[3,'danmuList']])
Z([[2,'?:'],[[2,'==='],[[7],[3,'direction']],[[2,'-'],[1,1]]],[1,90],[[7],[3,'direction']]])
Z([[7],[3,'enableDanmu']])
Z([[2,'?:'],[[7],[3,'tvpIsAd']],[1,false],[[7],[3,'enableProgressGesture']]])
Z([[2,'||'],[[7],[3,'isHiddenVideo']],[[2,'=='],[[7],[3,'tvpState']],[1,'error']]])
Z([[7],[3,'playerid']])
Z([[2,'?:'],[[7],[3,'tvpIsAd']],[1,0],[[7],[3,'initialTime']]])
Z([[7],[3,'loop']])
Z([[7],[3,'muted']])
Z([[7],[3,'objectFit']])
Z([[7],[3,'pageGesture']])
Z([[2,'?:'],[[7],[3,'usePoster']],[[2,'||'],[[7],[3,'poster']],[[2,'?:'],[[7],[3,'vid']],[[2,'+'],[[2,'+'],[1,'http://shp.qpic.cn/qqvideo/0/'],[[7],[3,'vid']]],[1,'/0']],[1,'']]],[1,'']])
Z([[7],[3,'showCenterPlayBtn']])
Z([[7],[3,'showFullscreenBtn']])
Z([[7],[3,'showPlayBtn']])
Z([[2,'&&'],[[2,'!'],[[7],[3,'tvpIsAd']]],[[7],[3,'showProgress']]])
Z([[7],[3,'tvpUrl']])
Z([[2,'&&'],[[7],[3,'tvpIsAd']],[[2,'>'],[[7],[3,'progressSkipTime']],[[2,'-'],[1,1]]]])
Z([3,'mod_skipad'])
Z([[2,'!'],[[2,'<='],[[7],[3,'progressSkipTime']],[[2,'+'],[[7],[3,'progressTime']],[[7],[3,'progressBaseTime']]]]])
Z(z[29])
Z([[2,'<='],[[7],[3,'progressSkipTime']],[[2,'+'],[[7],[3,'progressTime']],[[7],[3,'progressBaseTime']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_2);return __WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_2
}
__WXML_GLOBAL__.ops_set.$gwx_wxa75efa648b60994b=z;
__WXML_GLOBAL__.ops_init.$gwx_wxa75efa648b60994b=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./component/live/live.wxml','./component/video/video.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_wxa75efa648b60994b_1()
var oB=_mz(z,'video',['autoplay',0,'bindended',1,'binderror',1,'bindfullscreenchange',2,'bindpause',3,'bindplay',4,'bindtimeupdate',5,'class',6,'controls',7,'danmuBtn',8,'danmuList',9,'enableDanmu',10,'hidden',11,'id',12,'poster',13,'showCenterPlayBtn',14,'src',15],[],e,s,gg)
var xC=_n('slot')
_(oB,xC)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_wxa75efa648b60994b_2()
var fE=_mz(z,'video',['autoplay',0,'bindended',1,'binderror',1,'bindfullscreenchange',2,'bindpause',3,'bindplay',4,'bindtimeupdate',5,'class',6,'controls',7,'danmuBtn',8,'danmuList',9,'direction',10,'enableDanmu',11,'enableProgressGesture',12,'hidden',13,'id',14,'initialTime',15,'loop',16,'muted',17,'objectFit',18,'pageGesture',19,'poster',20,'showCenterPlayBtn',21,'showFullscreenBtn',22,'showPlayBtn',23,'showProgress',24,'src',25],[],e,s,gg)
var cF=_v()
_(fE,cF)
if(_oz(z,27,e,s,gg)){cF.wxVkey=1
var hG=_n('cover-view')
_rz(z,hG,'class',28,e,s,gg)
var oH=_v()
_(hG,oH)
if(_oz(z,29,e,s,gg)){oH.wxVkey=1
}
var cI=_v()
_(hG,cI)
if(_oz(z,30,e,s,gg)){cI.wxVkey=1
}
var oJ=_v()
_(hG,oJ)
if(_oz(z,31,e,s,gg)){oJ.wxVkey=1
}
oH.wxXCkey=1
cI.wxXCkey=1
oJ.wxXCkey=1
_(cF,hG)
}
var lK=_n('slot')
_(fE,lK)
cF.wxXCkey=1
_(r,fE)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}

				global.__wxAppCode__['plugin-private://wxa75efa648b60994b/component/live/live.json'] = {"component":true};
		global.__wxAppCode__['plugin-private://wxa75efa648b60994b/component/live/live.wxml'] = $gwx_wxa75efa648b60994b( './component/live/live.wxml' );
		global.__wxAppCode__['plugin-private://wxa75efa648b60994b/component/video/video.json'] = {"component":true};
		global.__wxAppCode__['plugin-private://wxa75efa648b60994b/component/video/video.wxml'] = $gwx_wxa75efa648b60994b( './component/video/video.wxml' );
		global.__wxAppCode__['plugin-private://wxa75efa648b60994b/plugin.json'] = {
  "publicComponents": {
    "video": "component/video/video",
    "live": "component/live/live"
  },
  "main": "component/txv-context.js"
}
;
		global.__wxAppCode__['plugin-private://wxa75efa648b60994b/plugin.wxml'] = $gwx_wxa75efa648b60994b( './plugin.wxml' );
	
				define("component/txv-context.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t=require("../src/module/log"),e={},n="";module.exports={getTxvContext:function(t){if(!e[t])throw new Error("找不到playerid为"+t+"的txv-video组件");return e[t]},existTxvContext:function(t){return!!e[t]},txvAttached:function(t,n){e[t]=n},txvDetached:function(t){delete e[t]},getAllContext:function(){return e},getLastPlayId:function(){return n},setLastPlayId:function(t){n=t},setTvpPlayState:function(t,e){this.getTxvContext(t).isPlaying=e},openLog:function(){t.isOpenLog=!0},closeLog:function(){t.isOpenLog=!1}}; 
 			}); 
		define("conf.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports={version:"2.0.3"}; 
 			}); 
		define("index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("./src/video");module.exports=e; 
 			}); 
		define("lib-inject.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e="./src/lib/es6-promise",r="./src/lib/request";try{var s=require("../tvp.js");e=s.Promise||e,r=s.request||r}catch(e){}module.exports={Promise:require(e),request:require(r).get,post:require(r).post}; 
 			}); 
		define("private-setting.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t={};module.exports={set:function(e,r){return t[e]=r,this},get:function(e){return t[e]}}; 
 			}); 
		define("src/classes/Content.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),n=require("../lib/message"),r=1;module.exports=function(){function o(e){var i=this;t(this,o),this.mockUpdate=0,this._urlIndex=0,Object.defineProperties(this,{_iretcode:{value:e.iretcode},_url:{value:e.url instanceof Array?e.url:[e.url]},_id:{value:r++},_duration:{value:e.duration},_filesize:{value:e.filesize},_charged:{value:e.charged},_preview:{value:e.preview},isad:{value:e.isad}}),(new n).assign(this);var u=null,a=null;this.on("play",function(){u=setTimeout(function(){i.emit("timeout",1e4)},1e4),a=setTimeout(function(){i.emit("timeout",2e4)},2e4)},!0),this.on("start",function(){clearTimeout(u),clearTimeout(a)},!0)}return i(o,[{key:"url",get:function(){return this._url[this._urlIndex]}},{key:"id",get:function(){return this._id}},{key:"duration",get:function(){return this._duration}},{key:"filesize",get:function(){return this._filesize}},{key:"preview",get:function(){return this._preview}},{key:"charged",get:function(){return this._charged}},{key:"iretcode",get:function(){return this._iretcode}}]),i(o,[{key:"onContentEnd",value:function(){this.emit("end")}},{key:"onContentPlay",value:function(){this.emittedPlay=!0,this.emit("play")}},{key:"onContentPause",value:function(){this.emit("pause")}},{key:"onContentTimeupdate",value:function(t){this.emittedPlay&&(t&&t.target&&(t=t.detail.currentTime),!this.emittedStart&&((void 0===t?"undefined":e(t))==e(void 0)?this.mockUpdate++>5:t>0)&&(this.emit("start"),this.emittedStart=!0),this.emit.apply(this,["timeupdate",t]))}},{key:"onContentError",value:function(){if(this._url.length>this._urlIndex+1)return this._urlIndex++,void this.emit("change",this.url);this.emit.apply(this,["error"].concat([].slice.call(arguments,0)))}},{key:"onContentSkip",value:function(){this.isad&&this.emit("skip")}}]),o}(); 
 			}); 
		define("src/classes/Controller.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t){var e={};return(t instanceof Array?t:[].slice.call(arguments,0)).forEach(function(t){var n=t.initialize;Object.defineProperty(e,t.name,{get:function(){return n},set:function(e){var r=n;n=e,t.onChange&&t.onChange(e,r)}})}),e}var n=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),r=require("../lib/message"),i=require("../../lib-inject").Promise;module.exports=function(){function o(){for(var n=this,a=arguments.length,s=Array(a),c=0;c<a;c++)s[c]=arguments[c];t(this,o),this.started=i.defer(),(new r).assign(this);var u=this.model=new e([{name:"state",onChange:function(t,e){n.emit("statechange",t,e)},initialize:"loading"},{name:"currentContent",initialize:null}]);Object.defineProperties(this,{currentContent:{get:function(){return u.currentContent}},state:{get:function(){return u.state}}}),this.flow=this.createFlow.apply(this,s),this.flow.catch(function(t){n.emit("error",t)}),["End","Play","Pause","Timeupdate","Error","Skip"].forEach(function(t){n["onContent"+t]=function(){for(var e=arguments.length,r=Array(e),i=0;i<e;i++)r[i]=arguments[i];n.emit.apply(n,["content"+t.toLowerCase()].concat(r))},n["on"+t]=function(){console.warn("不建议再使用video.on"+t+"，请使用onContent"+t),this["onContent"+t].apply(this,arguments)}})}return n(o,[{key:"createFlow",value:function(){}},{key:"start",value:function(){return this.started.resolve(),this}},{key:"stop",value:function(){return this.started.reject(),this.flow&&this.flow.stop(),this.off(),this}}]),o}(); 
 			}); 
		define("src/classes/State.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(){}var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=require("../lib/message"),s=require("../../lib-inject").Promise;module.exports=function(){function a(n,s){e(this,a),this.destroyed=!1;var i=Object.keys(n);i.forEach(function(e){!(n[e].to instanceof Array)&&(n[e].to=[]),!("function"==typeof n[e].beforeLeave)&&(n[e].beforeLeave=t),!("function"==typeof n[e].beforeEnter)&&(n[e].beforeEnter=t),!("function"==typeof n[e].afterLeave)&&(n[e].afterLeave=t),!("function"==typeof n[e].afterEnter)&&(n[e].afterEnter=t)}),this.message=new r,this.states=n,this._state=i[0],this._laststate="",Object.defineProperties(this,{state:{get:function(){return this._state}},lastState:{get:function(){return this._laststate}}})}return n(a,null,[{key:"create",value:function(e,t){return new a(e,t)}}]),n(a,[{key:"setState",value:function(e,t){var n=(t=t||{}).force||!1,r=t.silent||!1,s=this.states;if(n||~s[this._state].to.indexOf(e)){var a=this._state;if(r)this._laststate=this._state,this._state=e;else{var i=!1;if(n||(i=!1===s[a].beforeLeave(e),i=!1===s[e].beforeEnter(a)||!0===i),i)return;this._laststate=this._state,this._state=e,this.message.emit("change",e,a),s[a].afterLeave(e),s[e].afterEnter(a)}return 0==s[e].to.length&&(this.message.emit("end",e),this.message.off()),this}}},{key:"getStatePromise",value:function(e){var t=this;if("function"!=typeof e){var n=e;e=function(e){return e==n}}return new s(function(n,r){var s=t.message.on("change",function(t){e(t)&&(s(),n())});t.message.on("end",function(e){s(),r(new Error("state ended:"+e))},!0)})}},{key:"onChange",value:function(e){return this.message.on("change",e),this}}]),a}(); 
 			}); 
		define("src/controller-live/flow-getinfo/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../../util/platform-config").APP_PLATFORM,r=require("../../../lib-inject").request,i=require("../../module/cache"),t=require("../../lib/algorithm/qvsec"),n=require("../../module/network"),o=require("../../lib/algorithm/fillTimeStamp"),u=require("../../../lib-inject").Promise,m=i.get("tvp_guid");m||(m=Math.random().toString(16).substring(2),i.set("tvp_guid",m)),module.exports=function(i,c,l,q){var s=o(),d=t["v4138"==l?"$xxzb":"$xxzbf"](e[l],i,1,1,s),v="";d&&(v="encver="+("v4138"==l?"201":"301")+"&_qv_rmtv2="+d);var a=0;return new u(function(e){n(function(r){a=r,e()})}).then(function(){var t="https://info.zb.video.qq.com/?host=qq.com&cmd=2&qq=0&guid="+m+"&appVer=7&stream=2&ip=&system=1&sdtfrom="+e[l]+"&livepid="+c+"&cnlid="+i+"&_rnd="+s+"&"+v+"&newnettype="+a;return r(t,{needlogin:!0})})}; 
 			}); 
		define("src/controller-live/flow-getinfo/live-detail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../../../lib-inject").request;module.exports=function(t){return e("https://access.video.qq.com/tinyapp/live_detail?vappid=49109510&vsecret=c1202d7f3ba41f86cdd2d3d1082605b4ed764c21e29520f3&pid="+t)}; 
 			}); 
		define("src/controller-live/flow-getinfo/live-poll.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../../../lib-inject").request;module.exports=function(t){return e("https://zbaccess.video.qq.com/fcgi/live_poll?vappid=31678259&vsecret=1e029a67beb2d7e7e7bb8321fb161a46fe76c7837beb2cee",{data:t})}; 
 			}); 
		define("src/controller-live/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var u=o.get;if(void 0!==u)return u.call(r)},i=require("./flow-getinfo/index"),u=require("../classes/Controller"),a=require("../classes/Content"),c=function(c){function l(){return t(this,l),e(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}return n(l,u),r(l,[{key:"createFlow",value:function(t,e){var n=this,r=t.sid,o=t.from,u=t.pid;t.defn;var c=null,l=i(r,u,o).then(function(t){c=new a({url:t.data.playurl,iretcode:t.data.iretcode}),n.emit("contentchange",{currentContent:c})});return["End","Play","Pause","Timeupdate","Error","Skip"].forEach(function(t){n.on("content"+t.toLowerCase(),function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];c&&c["onContent"+t].apply(c,r)})}),this.switchDefn=function(t){i(r,u,o,t).then(function(t){c=new a({url:t.data.playurl,iretcode:t.data.iretcode}),n.emit("contentchange",{currentContent:c})})},l}},{key:"stop",value:function(){o(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"stop",this).call(this),this.playflow&&this.playflow.stop()}}]),l}();module.exports=function(t,e){return new c(t,e)}; 
 			}); 
		define("src/controller-video/flow-getinfo/data/ad.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function r(r){s(r,{header:{Cookie:"appuser="+l+"; Lturn="+d}}).then(function(r){v("上报成功"),v(r)},function(e){v("上报失败"),v(e),r=r+"&appuesr="+l,R.emit("report",{reportUrl:r}),v("用message抛出上报事件")})}function e(){d=c.get("Lturn"),v("Lturn:"+d),d?v("Lturn+1:"+(d+=1)):(d=Math.floor(1e3*Math.random()),v("create Lturn:"+d)),d>999&&(d=0),c.set("Lturn",d,72e5)}function t(r){var e=[];return r.item.forEach(function(r,t){e.push(r)}),e}function i(r){v("开始检查trueview贴片状态");for(var e=r.length,t=[],i=0,p=0;p<e;p++)r[p].trueviewTurn=!1,1==r[p].order_id||"FT"==r[p].type?t[p]=0:(o(r[p])&&(r[p].trueviewTurn=!0),t[p]=1,i+=1);a=1==i,v("trueviewCheckArr内容是："+t+",trueviewCount值是："+i)}function o(r){if(v("开始检查trueview开关"),r.params&&void 0!=r.params&&""!=r.params){var e=r.params;if(-1!=e.indexOf("richdata=")){var t=e.substr(e.indexOf("richdata=")+9);-1!=t.indexOf("&")&&(t=t.substr(0,t.indexOf("&"))),t=decodeURIComponent(t.replace(/\+/g," ")),v("转换出来的richdata参数是："+t);try{var i=JSON.parse(t);if(v("转换成json后的对象是："+i),i.plugins&&void 0!=i.plugins&&i.plugins.trueview&&void 0!=i.plugins.trueview&&"Y"==i.plugins.trueview)return v("trueview开关是打开的Y！"),!0}catch(r){v("richdata解析出错！")}}}return!1}function p(r){S=0;for(var e=0;e<r.length;e++)1!=r[e].order_id&&(S+=r[e].duration/1e3);v("广告总时长为："+S)}var a,n,d,l,u,s=require("../../../../lib-inject").request,h=require("../../../lib/message"),c=require("../../../module/cache"),v=require("../../../module/log")("ad"),m=require("./adReport"),U=require("./md5"),f="",g=0,D="",w=0,L=-1,T=1,O=-1,S=0,K="",y="",R=new h;(module.exports=function(o){v(o),o.vid&&(f=o.vid),o.live&&(g=o.live),o.chid&&(w=o.chid),o.coverid&&(D=o.coverid),o.pu&&(L=o.pu),o.openid&&(y=o.openid),l=String(U(y).substr(0,16)).toUpperCase(),e();var h={};return n=(new Date).getTime(),s("https://livew.l.qq.com/livemsg?ty=web&ad_type=WL&pf=H5&lt=wx&pt=0&live="+g+"&pu="+L+"&rfid="+K+"&openid="+y+"&v=TencentPlayerV3.2.19.358&plugin=1.0.0&speed=0&adaptor=2&musictxt=&chid="+w+"&st=0&resp_type=json&_t=1478361546359&rfid=&vid="+f+"&vptag=&url=&refer=&pid=&mbid=&oid=&guid=&coverid="+D,{needlogin:!0,header:{Cookie:"appuser="+l+"; Lturn="+d}}).then(function(r){u=r,r.data.adLoc&&r.data.adLoc.tpid&&(T=r.data.adLoc.tpid),h={t:"0",url:"",vid:f,coverid:D,pf:"H5",vptag:"",pid:"",chid:w,tpid:T};var e=(new Date).getTime()-n;v("livew请求完成，进行dp3上报,时间为:"+e),m.reportDp3(2,"WL",e,1,100,0,y,h),n=(new Date).getTime();var o=t(r.data.adList);return v("最终adList:"+o),i(o),p(o),o},function(r){v("livew error，再试一次");var e=(new Date).getTime()-n;return v("livew请求失败，进行dp3上报,时间为:"+e),m.reportDp3(2,"WL",e,1,202,0,y,h),n=(new Date).getTime(),s("https://livew.l.qq.com/livemsg?ty=web&ad_type=WL&pf=H5&lt=wx&pt=0&live="+g+"&pu="+L+"&rfid="+K+"&v=TencentPlayerV3.2.19.358&plugin=1.0.0&speed=0&adaptor=2&musictxt=&chid="+w+"&openid="+y+"&st=0&resp_type=json&_t=1478361546359&rfid=&vid="+f+"&vptag=&url=&refer=&pid=&mbid=&oid=&guid=&coverid="+D,{needlogin:!0,header:{Cookie:"appuser="+l+"; Lturn="+d}}).then(function(r){u=r,r.data.adLoc&&r.data.adLoc.tpid&&(T=r.data.adLoc.tpid),h={t:"0",url:"",vid:f,coverid:D,pf:"H5",vptag:"",pid:"",chid:w,tpid:T};var e=(new Date).getTime()-n;v("livew重试请求完成，进行dp3上报,时间为:"+e),m.reportDp3(2,"WL",e,1,100,0,y,h),n=(new Date).getTime();var o=t(r.data.adList);return v("最终adList:"+o),i(o),p(o),o},function(r){var e=(new Date).getTime()-n;return v("livew error，订单获取失败，返回空数组，进行dp3上报,时间为:"+e),m.reportDp3(2,"WL",e,1,202,0,y,h),n=(new Date).getTime(),[]})}).then(function(e){return e=e.map(function(e,t){return function(){var t=[];if(e.reportUrlOther.reportitem)for(o=0;o<e.reportUrlOther.reportitem.length;o++)t[o]={url:e.reportUrlOther.reportitem[o].url,time:e.reportUrlOther.reportitem[o].reporttime,isReported:!1};var i=[];if(e.reportUrlSDK.reportitem)for(var o=0;o<e.reportUrlSDK.reportitem.length;o++)i[o]={url:e.reportUrlSDK.reportitem[o].url,time:e.reportUrlSDK.reportitem[o].reporttime,isReported:!1};return v("当前广告的trueview开关是否打开："+e.trueviewTurn),v("当前广告是否符合trueview条件："+a),a?(v("allAdDuration:"+S),O=S<=5?0:5):O=-1,v("skipable:"+O),{oid:e.order_id,url:e.image[0].url,reportUrl:{url:e.reportUrl,time:e.ReportTime,isReported:!1},reportUrlOther:t,reportUrlSDK:i,skipable:O,duration:e.duration/1e3,allDuration:S,onSkip:function(){v("当前广告被跳过了，上报智慧点10237"),m.reportWisdomPoint(10237,e.order_id,e.order_id,"");var r=(new Date).getTime()-n;v("当前广告被跳过，进行dp3上报,时间为:"+r),m.reportDp3(4,"WL",r,1,"",0,y,h),n=(new Date).getTime()},onTimeupdate:function(r){},onEnd:function(){var r=(new Date).getTime()-n;v("当前广告播放结束，进行dp3上报,时间为:"+r),m.reportDp3(5,"WL",r,1,"",0,y,h),n=(new Date).getTime(),u.data.adLoc&&u.data.adLoc.rfid&&(K=u.data.adLoc.rfid,v("rfid赋值成功："+K))},onStart:function(){v("当前广告开始播放"+e),v("当前广告的oid是："+this.oid);var t=(new Date).getTime()-n;if(v("素材加载完成，开始播放，进行dp3上报,时间为:"+t),m.reportDp3(3,"WL",t,1,"",0,y,h),n=(new Date).getTime(),this.reportUrl.url=m.updateUrlParam(this.reportUrl.url,h),this.reportUrl.time>=0&&!this.reportUrl.isReported){this.reportUrl.isReported=!0;try{r(this.reportUrl.url)}catch(r){}}for(i=0;i<this.reportUrlOther.length;i++)if(this.reportUrlOther[i].url=m.updateUrlParam(this.reportUrlOther[i].url,h),this.reportUrlOther[i].time>=0&&!this.reportUrlOther[i].isReported){this.reportUrlOther[i].isReported=!0;try{m.pingUrl(this.reportUrlOther[i].url)}catch(r){}}for(var i=0;i<this.reportUrlSDK.length;i++)if(this.reportUrlSDK[i].url=m.updateUrlParam(this.reportUrlSDK[i].url,h),this.reportUrlSDK[i].time>=0&&!this.reportUrlSDK[i].isReported){this.reportUrlSDK[i].isReported=!0;try{m.pingUrl(this.reportUrlSDK[i].url)}catch(r){}}},onError:function(){var r=(new Date).getTime()-n;v("当前广告播放出错，进行dp3上报,时间为:"+r),m.reportDp3(4,"WL",r,1,"",0,y,h),n=(new Date).getTime()},onReportEmpty:function(){v("我是空单上报，当前广告的上报地址是："+this.reportUrl.url),this.reportUrl.url=m.updateUrlParam(this.reportUrl.url,h);try{r(this.reportUrl.url)}catch(r){}for(e=0;e<this.reportUrlOther.length;e++)if(this.reportUrlOther[e].url=m.updateUrlParam(this.reportUrlOther[e].url,h),this.reportUrlOther[e].time>=0&&!this.reportUrlOther[e].isReported){this.reportUrlOther[e].isReported=!0;try{m.pingUrl(this.reportUrlOther[e].url)}catch(r){}}for(var e=0;e<this.reportUrlSDK.length;e++)if(this.reportUrlSDK[e].url=m.updateUrlParam(this.reportUrlSDK[e].url,h),this.reportUrlSDK[e].time>=0&&!this.reportUrlSDK[e].isReported){this.reportUrlSDK[e].isReported=!0;try{m.pingUrl(this.reportUrlSDK[e].url)}catch(r){}}}}}}),{adList:e}}).catch(function(r){return{}})}).reporter=m.reporter; 
 			}); 
		define("src/controller-video/flow-getinfo/data/adReport.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function r(r){var t=r.indexOf("?"),e=new Object,i=r;if(t>=0)for(var n,o=(i=i.substr(t+1)).split("&"),a=0;a<o.length;a++)(n=o[a].split("=")).length>1?e[n[0]]=n[1]:e[n[0]]="null";return e}var t=require("../../../lib/message"),e=(require("../../../module/cache"),require("../../../module/log")("ad-report")),i=new t;(module.exports={updateUrlParam:function(t,e){try{var i=r(t),n=t,o=!0;if(-1!=t.indexOf("?")){n=t.substring(0,t.indexOf("?"));var a;for(a in e)i[a]=e[a];for(a in i)o?(o=!1,n+="?"+a+"="+i[a]):n+="&"+a+"="+i[a]}}catch(r){n=""}return n},reportDp3:function(r,t,i,n,o,a,p,d){e("开始dp3上报");var s="https://dp3.qq.com/stdlog/?bid=weixin&step="+r+"&merged="+n+"&errorcode="+o+"&trycount="+a+"&openid="+p;s=this.updateUrlParam(s,d);try{this.pingUrl(s)}catch(r){e("dp3上报失败")}},reportWisdomPoint:function(r,t,i,n){e("开始智慧点上报");var o="https://t.l.qq.com?t=s&actid="+r;o+="&oid="+t+"&mid="+i+"&locid="+n;try{this.pingUrl(o)}catch(r){}},pingUrl:function(r,t,n,o){e("ping上报地址："+r);var a=(new Date).getTime();r=this.updateUrlParam(r,{reportTime:a}),i.emit("report",{reportUrl:r}),e("用message抛出上报事件")}}).reporter=i; 
 			}); 
		define("src/controller-video/flow-getinfo/data/getinfo-status.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e={};e[10001]=e[50]=e[68]=e[71]=e[73]=e[74]=e[76]=e[77]=e[445]=e[444]="啊哦，没能找到你要的节目信息~",e[51]=e[52]=e[64]=e[61]=e[62]=e[63]=e[65]=e[66]=e[69]=e[81]=e[82]=e[84]=e[86]="啊哦，本来在这儿的视频不见了~",e[94]="经检测您当前登录的账号存在安全问题，为保障您的账号安全，已暂停了您的会员权益。",e[80]=e[83]="啊哦，版权原因，该视频暂时无法播放~",module.exports=e; 
 			}); 
		define("src/controller-video/flow-getinfo/data/getinfo.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function e(e,m,p){r=m,p=p||"auto";var v=o(),d=i["v4138"==m?"$xx":"$xxf"](a[m],e,r,1,v),s="";d&&(s="encver="+("v4138"==m?2:300)+"&_qv_rmtv2="+d),f("getinfo waiting");var h=0;return new l(function(e,r){u(function(r){h=r,e()})}).then(function(){f("request start");var r="https://h5vv.video.qq.com/getinfo?"+s+"&defn="+p+"&platform="+a[m]+"&otype=json&sdtfrom="+m+"&_rnd="+v+"&appVer=7&"+(c?"dtype=3&":"")+"vid="+e+"&newnettype="+h;return n(r,{needlogin:!0})}).catch(function(){return n("https://bkvv.video.qq.com/getinfo?"+s+"&defn="+p+"&platform="+a[m]+"&otype=json&sdtfrom="+m+"&_rnd="+v+"&appVer=7&"+(c?"dtype=3&":"")+"vid="+e+"&newnettype="+h,{needlogin:!0})}).catch(function(){var e=new Error(t[444]);throw e.em=444,e.code="G.444",e}).then(function(e){return e=e.data,f("getinfo result:",e),e})}var r,t=require("./getinfo-status"),n=require("../../../../lib-inject").request,i=require("../../../lib/algorithm/qvsec"),o=require("../../../lib/algorithm/fillTimeStamp"),u=require("../../../module/network"),f=require("../../../module/log")("getInfo"),l=require("../../../../lib-inject").Promise,c="devtools"!=wx.getSystemInfoSync().platform,a=require("../../../util/platform-config").APP_PLATFORM;module.exports=function(){return e.apply(this,arguments).then(function(e){if(e.em){var r=new Error(t[e.em]||e.msg);throw r.em=e.em,r.code="G."+e.em,r}return e}).then(function(e){var t=e.vl.vi[0],n={duration:+t.td,dltype:e.dltype,fmid:e.fl.fi.filter(function(e){return+e.sl})[0].id,filesize:e.fl.fi.filter(function(e){return+e.sl})[0].fs,preview:e.preview,charge:t.ch,raw:e};return t.ch<1&&(n.preview=e.preview,n.charged=t.ch),3==e.dltype?(n.url=t.ul.ui.map(function(e){return e.hls.pt?e.url+e.hls.pt+"?platform="+a[r]+"&sdtfrom="+r:""}),n.url=n.url.filter(function(e){return e})):n.url=t.ul.ui.map(function(e){return e.url+t.fn+"?vkey="+t.fvkey+"&br="+t.br+"&fmt=auto&level="+t.level+"&platform="+a[r]+"&sdtfrom="+r}),n})}; 
 			}); 
		define("src/controller-video/flow-getinfo/data/md5.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n};!function(t){function r(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function o(n,t){return n<<t|n>>>32-t}function e(n,t,e,u,f,c){return r(o(r(r(t,n),r(u,c)),f),e)}function u(n,t,r,o,u,f,c){return e(t&r|~t&o,n,t,u,f,c)}function f(n,t,r,o,u,f,c){return e(t&o|r&~o,n,t,u,f,c)}function c(n,t,r,o,u,f,c){return e(t^r^o,n,t,u,f,c)}function i(n,t,r,o,u,f,c){return e(r^(t|~o),n,t,u,f,c)}function d(n,t){n[t>>5]|=128<<t%32,n[14+(t+64>>>9<<4)]=t;var o,e,d,l,a,h=1732584193,m=-271733879,y=-1732584194,p=271733878;for(o=0;o<n.length;o+=16)e=h,d=m,l=y,a=p,m=i(m=i(m=i(m=i(m=c(m=c(m=c(m=c(m=f(m=f(m=f(m=f(m=u(m=u(m=u(m=u(m,y=u(y,p=u(p,h=u(h,m,y,p,n[o],7,-680876936),m,y,n[o+1],12,-389564586),h,m,n[o+2],17,606105819),p,h,n[o+3],22,-1044525330),y=u(y,p=u(p,h=u(h,m,y,p,n[o+4],7,-176418897),m,y,n[o+5],12,1200080426),h,m,n[o+6],17,-1473231341),p,h,n[o+7],22,-45705983),y=u(y,p=u(p,h=u(h,m,y,p,n[o+8],7,1770035416),m,y,n[o+9],12,-1958414417),h,m,n[o+10],17,-42063),p,h,n[o+11],22,-1990404162),y=u(y,p=u(p,h=u(h,m,y,p,n[o+12],7,1804603682),m,y,n[o+13],12,-40341101),h,m,n[o+14],17,-1502002290),p,h,n[o+15],22,1236535329),y=f(y,p=f(p,h=f(h,m,y,p,n[o+1],5,-165796510),m,y,n[o+6],9,-1069501632),h,m,n[o+11],14,643717713),p,h,n[o],20,-373897302),y=f(y,p=f(p,h=f(h,m,y,p,n[o+5],5,-701558691),m,y,n[o+10],9,38016083),h,m,n[o+15],14,-660478335),p,h,n[o+4],20,-405537848),y=f(y,p=f(p,h=f(h,m,y,p,n[o+9],5,568446438),m,y,n[o+14],9,-1019803690),h,m,n[o+3],14,-187363961),p,h,n[o+8],20,1163531501),y=f(y,p=f(p,h=f(h,m,y,p,n[o+13],5,-1444681467),m,y,n[o+2],9,-51403784),h,m,n[o+7],14,1735328473),p,h,n[o+12],20,-1926607734),y=c(y,p=c(p,h=c(h,m,y,p,n[o+5],4,-378558),m,y,n[o+8],11,-2022574463),h,m,n[o+11],16,1839030562),p,h,n[o+14],23,-35309556),y=c(y,p=c(p,h=c(h,m,y,p,n[o+1],4,-1530992060),m,y,n[o+4],11,1272893353),h,m,n[o+7],16,-155497632),p,h,n[o+10],23,-1094730640),y=c(y,p=c(p,h=c(h,m,y,p,n[o+13],4,681279174),m,y,n[o],11,-358537222),h,m,n[o+3],16,-722521979),p,h,n[o+6],23,76029189),y=c(y,p=c(p,h=c(h,m,y,p,n[o+9],4,-640364487),m,y,n[o+12],11,-421815835),h,m,n[o+15],16,530742520),p,h,n[o+2],23,-995338651),y=i(y,p=i(p,h=i(h,m,y,p,n[o],6,-198630844),m,y,n[o+7],10,1126891415),h,m,n[o+14],15,-1416354905),p,h,n[o+5],21,-57434055),y=i(y,p=i(p,h=i(h,m,y,p,n[o+12],6,1700485571),m,y,n[o+3],10,-1894986606),h,m,n[o+10],15,-1051523),p,h,n[o+1],21,-2054922799),y=i(y,p=i(p,h=i(h,m,y,p,n[o+8],6,1873313359),m,y,n[o+15],10,-30611744),h,m,n[o+6],15,-1560198380),p,h,n[o+13],21,1309151649),y=i(y,p=i(p,h=i(h,m,y,p,n[o+4],6,-145523070),m,y,n[o+11],10,-1120210379),h,m,n[o+2],15,718787259),p,h,n[o+9],21,-343485551),h=r(h,e),m=r(m,d),y=r(y,l),p=r(p,a);return[h,m,y,p]}function l(n){var t,r="",o=32*n.length;for(t=0;t<o;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}function a(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;var o=8*n.length;for(t=0;t<o;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function h(n){return l(d(a(n),8*n.length))}function m(n,t){var r,o,e=a(n),u=[],f=[];for(u[15]=f[15]=void 0,e.length>16&&(e=d(e,8*n.length)),r=0;r<16;r+=1)u[r]=909522486^e[r],f[r]=1549556828^e[r];return o=d(u.concat(a(t)),512+8*t.length),l(d(f.concat(o),640))}function y(n){var t,r,o="";for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),o+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return o}function p(n){return unescape(encodeURIComponent(n))}function g(n){return h(p(n))}function v(n){return y(g(n))}function b(n,t){return m(p(n),p(t))}function s(n,t){return y(b(n,t))}function S(n,t,r){return t?r?b(t,n):s(t,n):r?g(n):v(n)}"function"==typeof define&&define.amd?define(function(){return S}):"object"===("undefined"==typeof module?"undefined":n(module))&&module.exports?module.exports=S:t.md5=S}(void 0); 
 			}); 
		define("src/controller-video/flow-getinfo/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../../../lib-inject").Promise,i=require("./data/ad"),r=require("./data/getinfo");module.exports=function(d){var n=(d=d||{}).vid,o=d.cid,t=d.from,u=d.openid,a=d.defn;[n,t,a].join("/");return e.all([i({coverid:o,vid:n,live:0,chid:41,pu:1,openid:u||""}),r(n,t,a)]).then(function(e){return{ad:e[0],videoinfo:e[1]}})}; 
 			}); 
		define("src/controller-video/flow-play/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var n=require("../../../lib-inject").Promise,e=require("../../lib/message"),t=require("../../classes/Content"),o=require("../../module/log")("flow-getinfo");module.exports=function(i,r,u){var a={time:0,duration:0,skipable:!1},c={},f={},d=[],s=n.defer(),l=s.promise,p=new e,m=null,v=function(n){var e={currentContent:n=n||m,preloadContents:d.filter(function(e){return!f[e.id]&&e!=n}),getinforaw:g.raw};n&&n.isad&&(e.progress=a),m=n,u(e)},h=i.ad,g=i.videoinfo,w=!1;(h.adList||[]).forEach(function(e){var i=e(),r=new t({url:i.url,duration:i.duration,isad:!0}),u=new n(function(n){w||(r.on("end",function(){n(),i.onEnd()},!0),r.on("error",function(){n(),i.onError()},!0),r.on("timeout",function(){n(),i.onError()},!0),r.on("skip",function(){w=!0,n(),i.onSkip()},!0),r.on("start",function(){p.emit("adplaying",r),i.onStart()},!0),r.on("timeupdate",function(n){i.onTimeupdate(n)},!0),p.on("_terminate",function(){n()}))}).then(function(n){return f[r.id]=!0,n});c[r.id]=r,d.push(r),a.duration+=i.duration,a.skipable=i.skipable,l=l.then(function(){return o("playflow: ad."+i.url),"1"==i.oid?(o("这是一个空单，往下走"),void i.onReportEmpty()):(v(r),u.then(function(n){a.time+=r.duration}))})});var y=new t({url:g.url,duration:g.duration,filesize:g.filesize,isad:!1,preview:g.preview,charged:g.charged});c[y.id]=y,d.unshift(y);var E=new n(function(n,e){function t(t){!o&&t.on("start",function(){p.emit("videoplaying",t),o=!0},!0),t.on("play",function(){p.emit("videoplay",t)}),t.on("pause",function(){p.emit("videopause",t)}),t.on("timeupdate",function(n){p.emit("videotimeupdate",n,g.duration)}),t.on("error",function(n){var t=new Error(n?n.detail&&n.detail.errMsg||n.message:"播放出错");t.code="P.0",e(t)},!0),t.on("end",n,!0),t.on("timeout",function(n){p.emit("videotimeout",n)})}var o=!1;t(y),p.on("_terminate",function(){n()}),p.on("_changevideocontent",function(n){y.off(),f[y.id]=!0,d.every(function(e,t){return e!=y||(d.splice(t,1,n),!1)}),t(n),v(m==y?n:null),c[n.id]=n,y=n})}).then(function(n){return f[y.id]=!0,n});l=l.then(function(){return y.off("change"),y.on("change",function(){v(y)}),p.on("_changevideocontent",function(n){y.off("change"),n.on("change",function(){v(n)})}),v(y),E}).then(function(){p.emit("end")}).catch(function(n){throw p.emit("error",n),n}),v(null);var k={progress:l,stop:function(){return p.emit("_terminate"),p.emit("terminate"),Object.keys(c).forEach(function(n){c[n].off()}),p.off(),this},start:function(){return s.resolve(),l},on:function(){return p.on.apply(p,arguments)},switchVideo:function(n){var e=n.videoinfo;g=e;var o=new t({url:e.url,duration:e.duration,filesize:e.filesize,isad:!1,preview:e.preview,charged:e.charged});p.emit("_changevideocontent",o)}};return["End","Play","Pause","Timeupdate","Error","Skip"].forEach(function(n){r.on("content"+n.toLowerCase(),function(e){for(var t=e&&c[e]?c[e]:m,o=arguments.length,i=Array(o>1?o-1:0),r=1;r<o;r++)i[r-1]=arguments[r];t&&t["onContent"+n].apply(t,i)})}),k}; 
 			}); 
		define("src/controller-video/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var u=o.get;if(void 0!==u)return u.call(n)},i=require("../../lib-inject").Promise,u=require("./flow-getinfo/index"),a=require("./flow-play/index"),c=require("./reporter"),f=require("../module/reporter/index"),l=require("../classes/Controller"),p=require("../module/log")("controller-video-index");require("./flow-getinfo/data/ad").reporter.on("report",function(e){p("url",e),f.any(e)});var s=function(f){function p(){return e(this,p),t(this,(p.__proto__||Object.getPrototypeOf(p)).apply(this,arguments))}return r(p,l),n(p,[{key:"createFlow",value:function(e,t){var r=this;e=e||{},t=t||{};var n=e,o=n.vid,f=n.from,l=n.cid,p=n.defn,s=t.getReportParam,d=new i(function(e){s?s(function(t,r){e(r&&r.hc_openid||"")}):e("")}),y=c({cid:l,vid:o},{getReportParam:s}),h=this.model,v=d.then(function(e){return u({vid:o,from:f,cid:l,openid:e,defn:p})}).then(function(e){h.state="ready";var t=r.playflow=a(e,r,function(e){h.currentContent=e.currentContent,r.emit("contentchange",e)});return y.setPlayFlow(t),y.setVideoInfo(e.videoinfo),t.on("videotimeupdate",function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];r.emit.apply(r,["videotimeupdate"].concat(t))}),r.started.promise}).then(function(){return h.state="playing",r.playflow.start()}).then(function(e){h.state="ended"}).catch(function(e){throw h.state="error",r.playflow&&r.playflow.stop(),y.error(e),e});return this.switchDefn=function(e){return d.then(function(t){return u({vid:o,from:f,cid:l,openid:t,defn:e})}).then(function(e){r.playflow.switchVideo(e)})},v}},{key:"stop",value:function(){this.model.state="ended",o(p.prototype.__proto__||Object.getPrototypeOf(p.prototype),"stop",this).call(this),this.playflow&&this.playflow.stop()}}]),p}();module.exports=function(e,t){return new s(e,t)}; 
 			}); 
		define("src/controller-video/report-play.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=require("./../module/reporter/report-queue"),t=require("../../conf"),n=wx.getSystemInfoSync();module.exports=function(r){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},p=arguments[2],l=arguments[3];p(function(p,a){p&&(a={}),delete a.val1,delete a.val2,delete a.val3,"object"==e(a[r])&&(["val1","val2","val3"].forEach(function(e){a[e]=a[r][e]}),delete a[r]);var c=[],u=c.pop(),f=c.pop(),d={},m={BossId:4327,Pwd:944465292,app_version:t.version,platform:n.platform,client_model:n.model,wx_version:n.version,network:d&&d.networkType?d.networkType:"",step:r,page_url:u&&u.$name||"",page_query:u&&u.$query||"",page_ref:f&&f.$name||""};["hc_vuserid","hc_openid","hc_appid","ptag","iformat","duration","defn","tpay","adid","playtime","page_url","page_query","page_ref","cid","vid","isvip","val1","val2","val3","appname","nick","rmd","scene","additional"].forEach(function(e){e in i&&(m[e]=i[e]),e in a&&(m[e]=a[e]),void 0==m[e]&&(m[e]="")}),l&&"function"==typeof l?l(null,{reportUrl:"https://btrace.qq.com/kvcollect?"+Object.keys(m).map(function(e){return e in m?e+"="+encodeURIComponent(m[e]):""}).filter(function(e){return e}).join("&")}):o.push({reportUrl:"https://btrace.qq.com/kvcollect?"+Object.keys(m).map(function(e){return e in m?e+"="+encodeURIComponent(m[e]):""}).filter(function(e){return e}).join("&")})})}; 
 			}); 
		define("src/controller-video/reporter.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function n(n){return{1:1,2:1,10001:4,10002:3,10003:2,10201:4,10202:3,10203:2,100001:2,320089:2,320091:3,320092:4,320093:5}[n]}function e(n){var e=!1,o=function(){e||(e=!0,n.done=e,n.apply(this,arguments))};return o.done=e,o}var o=require("./report-play"),t=require("../module/reporter/index"),r=[5,30];module.exports=function(a,i){function u(){return{iformat:d?d.dltype:0,duration:d?Math.floor(d.duration):"",defn:d?n(d.fmid):"",playtime:s+(c?Date.now()-c:0),vid:l||"",cid:f||""}}var c,l=a.vid,f=a.cid,v=i.getReportParam||function(n){return n({})},d=null,p=0,s=0,m=!1,w=!1,y=e(function(n){var e=u();e.val1=0,e.val2=0,e.val3=n,o(7,e,v)}),D=e(function(n){var e=u();e.val1=p?Date.now()-p:0,e.val2=m?0:1,e.val3=n,o(6,e,v)}),h=e(function(n,e){var t=u();t.val1=p?Date.now()-p:0,t.val2={error:3,complete:1,incomplete:w?2:0}[n],void 0==t.val2&&(t.val2=2),t.val3=e,o(5,t,v)}),g=null,C=e(function(n,e){t.reportCache.del("step30");var r=u();r.val1=n,r.val2=e,o(30,r,v)}),q=function(n,e){if(1e4==n){g=setTimeout(function(){C(n)},11e3);var r=u();r.val1=n,r.val2=e,o(30,r,v,function(n,e){t.reportCache.set("step30",e)})}else clearTimeout(g),C(n)};return o(3,u(),v),t.on("_save",function(){var n=u();n.val1=p?Date.now()-p:0,n.val2=w?2:0,o(5,n,v,function(n,e){t.reportCache.set("step5",e)})}),t.on("_restore",function(){r.forEach(function(n){t.reportCache.del("step"+n)})}),{setPlayFlow:e(function(n){n.on("adplaying",function(n){m=!0,y(n.url)}),n.on("videoplay",function(n){!p&&(p=Date.now()),c=Date.now()}),n.on("videoplaying",function(n){w=!0,D(n.url),q(p?Date.now()-p:0,0)}),n.on("videopause",function(){s+=Date.now()-c,c=0}),n.on("videotimeout",function(n){q(n,1)}),n.on("terminate",function(){h("incomplete")}),n.on("end",function(){h("complete")}),n.on("error",function(n){h("error","1 "+(n.code||"")+" "+n.message)})}),setVideoInfo:e(function(n){d=n}),error:function(n){h("error","2 "+(n.code||"")+" "+n.message)}}}; 
 			}); 
		define("src/lib/algorithm/fillTimeStamp.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports=function(r){r=r||10;var t=parseInt(+new Date)+"";if(t.length===r)return t;if(t.length>r)return t.substring(0,r);for(var e=r-t.length;e>0;)t="0"+t,e--;return t}; 
 			}); 
		define("src/lib/algorithm/qvsec.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var r={};r.ha=function(r){function t(r,t){return((r>>1)+(t>>1)<<1)+(1&r)+(1&t)}for(var e=[],n=0;n<64;)e[n]=0|4294967296*Math.abs(Math.sin(++n));return function(r){for(var n,a,o,u,c=[],h=decodeURIComponent(encodeURI(r)),f=h.length,i=[n=1732584193,a=-271733879,~n,~a],d=0;d<=f;)c[d>>2]|=(h.charCodeAt(d)||128)<<d++%4*8;for(c[r=16*(f+8>>6)+14]=8*f,d=0;d<r;d+=16){for(f=i,u=0;u<64;)f=[o=f[3],t(n=f[1],(o=t(t(f[0],[n&(a=f[2])|~n&o,o&n|~o&a,n^a^o,a^(n|~o)][f=u>>4]),t(e[u],c[[u,5*u+1,3*u+5,7*u][f]%16+d])))<<(f=[7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21][4*f+u++%4])|o>>>32-f),n,a];for(u=4;u;)i[--u]=t(i[u],f[u])}for(r="";u<32;)r+=(i[u>>3]>>4*(1^7&u++)&15).toString(16);return r}}(),r.stringToHex=function(r){for(var t="",e=new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"),n=0;n<r.length;n++)t+=e[r.charCodeAt(n)>>4]+e[15&r.charCodeAt(n)];return t},r.hexToString=function(r){for(var t="",e="0x"==r.substr(0,2)?2:0;e<r.length;e+=2)t+=String.fromCharCode(parseInt(r.substr(e,2),16));return t},r._Seed="#$#@#*ad",r.tempcalc=function(r,t){for(var e="",n=0;n<r.length;n++)e+=String.fromCharCode(r.charCodeAt(n)^t.charCodeAt(n%4));return e},r.u1=function(r,t){for(var e="",n=t;n<r.length;n+=2)e+=r.charAt(n);return e},r._urlStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r.urlenc=function(t,e,n){for(var a,o,u,c,h,f,i,d="",s=0;s<t.length;)a=t.charCodeAt(s++),o=t.charCodeAt(s++),u=t.charCodeAt(s++),15==s&&(d+="A",d+=e,d+=n),c=a>>2,h=(3&a)<<4|o>>4,f=(15&o)<<2|u>>6,i=63&u,isNaN(o)?f=i=64:isNaN(u)&&(i=64),d=d+r._urlStr.charAt(c)+r._urlStr.charAt(h)+r._urlStr.charAt(f)+r._urlStr.charAt(i);return d},r.$xx=function(t,e,n,a,o){var o=o||parseInt(+new Date/1e3);return r.ha(t+e+o+r._Seed+n+"heherand")},r.$xxzb=function(t,e,n,a,o){var o=o||parseInt(+new Date/1e3);return r.ha(e+"tmp123"+t+"#$$&c2*KA"+o)},r.$xxf=function(t,e,n,a,o){var o=o||parseInt(+new Date/1e3);return r.ha(t+"ques"+o+"*&%$(SD!L}"+e+n)},r.$xxzbf=function(t,e,n,a,o){var o=o||parseInt(+new Date/1e3);return r.ha(e+o+"*#016"+t+"zput")},module.exports=r; 
 			}); 
		define("src/lib/es6-promise.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(e,n){"object"===("undefined"==typeof exports?"undefined":t(exports))&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.ES6Promise=n()}(void 0,function(){function e(e){return"function"==typeof e||"object"===(void 0===e?"undefined":t(e))&&null!==e}function n(t){return"function"==typeof t}function r(){return void 0!==D?function(){D(i)}:o()}function o(){var t=setTimeout;return function(){return t(i,1)}}function i(){for(var t=0;t<F;t+=2)(0,G[t])(G[t+1]),G[t]=void 0,G[t+1]=void 0;F=0}function s(t,e){var n=arguments,r=this,o=new this.constructor(c);void 0===o[I]&&x(o);var i=r._state;return i?function(){var t=n[i-1];L(function(){return j(i,o,t,r._result)})}():w(r,o,t,e),o}function u(e){var n=this;if(e&&"object"===(void 0===e?"undefined":t(e))&&e.constructor===n)return e;var r=new n(c);return _(r,e),r}function c(){}function f(){return new TypeError("You cannot resolve a promise with itself")}function a(){return new TypeError("A promises callback cannot return that same promise.")}function l(t){try{return t.then}catch(t){return V.error=t,V}}function h(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}function p(t,e,n){L(function(t){var r=!1,o=h(n,e,function(n){r||(r=!0,e!==n?_(t,n):m(t,n))},function(e){r||(r=!0,b(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,b(t,o))},t)}function d(t,e){e._state===Q?m(t,e._result):e._state===R?b(t,e._result):w(e,void 0,function(e){return _(t,e)},function(e){return b(t,e)})}function v(t,e,r){e.constructor===t.constructor&&r===s&&e.constructor.resolve===u?d(t,e):r===V?b(t,V.error):void 0===r?m(t,e):n(r)?p(t,e,r):m(t,e)}function _(t,n){t===n?b(t,f()):e(n)?v(t,n,l(n)):m(t,n)}function y(t){t._onerror&&t._onerror(t._result),g(t)}function m(t,e){t._state===J&&(t._result=e,t._state=Q,0!==t._subscribers.length&&L(g,t))}function b(t,e){t._state===J&&(t._state=R,t._result=e,L(y,t))}function w(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+Q]=n,o[i+R]=r,0===i&&t._state&&L(g,t)}function g(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?j(n,r,o,i):o(i);t._subscribers.length=0}}function A(){this.error=null}function S(t,e){try{return t(e)}catch(t){return X.error=t,X}}function j(t,e,r,o){var i=n(r),s=void 0,u=void 0,c=void 0,f=void 0;if(i){if((s=S(r,o))===X?(f=!0,u=s.error,s=null):c=!0,e===s)return void b(e,a())}else s=o,c=!0;e._state!==J||(i&&c?_(e,s):f?b(e,u):t===Q?m(e,s):t===R&&b(e,s))}function E(t,e){try{e(function(e){_(t,e)},function(e){b(t,e)})}catch(e){b(t,e)}}function T(){return Z++}function x(t){t[I]=Z++,t._state=void 0,t._result=void 0,t._subscribers=[]}function M(t,e){this._instanceConstructor=t,this.promise=new t(c),this.promise[I]||x(this.promise),q(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?m(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&m(this.promise,this._result))):b(this.promise,P())}function P(){return new Error("Array Methods must be provided an Array")}function C(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function O(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function k(t){this[I]=T(),this._result=this._state=void 0,this._subscribers=[],c!==t&&("function"!=typeof t&&C(),this instanceof k?E(this,t):O())}var Y=void 0,q=Y=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},F=0,D=void 0,K=void 0,L=function(t,e){G[F]=t,G[F+1]=e,2===(F+=2)&&(K?K(i):H())},N="undefined"!=typeof window?window:void 0,U=N||{},W=U.MutationObserver||U.WebKitMutationObserver,z="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),B="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,G=new Array(1e3),H=void 0;H=z?function(){return process.nextTick(i)}:W?function(){var t=0,e=new W(i),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}():B?function(){var t=new MessageChannel;return t.port1.onmessage=i,function(){return t.port2.postMessage(0)}}():void 0===N&&"function"==typeof require?function(){try{var t=require("vertx");return D=t.runOnLoop||t.runOnContext,r()}catch(t){return o()}}():o();var I=Math.random().toString(36).substring(16),J=void 0,Q=1,R=2,V=new A,X=new A,Z=0;return M.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===J&&n<t;n++)this._eachEntry(e[n],n)},M.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===u){var o=l(t);if(o===s&&t._state!==J)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===k){var i=new n(c);v(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},M.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===J&&(this._remaining--,t===R?b(r,n):this._result[e]=n),0===this._remaining&&m(r,this._result)},M.prototype._willSettleAt=function(t,e){var n=this;w(t,void 0,function(t){return n._settledAt(Q,e,t)},function(t){return n._settledAt(R,e,t)})},k.all=function(t){return new M(this,t).promise},k.race=function(t){var e=this;return new e(q(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})},k.resolve=u,k.reject=function(t){var e=new this(c);return b(e,t),e},k._setScheduler=function(t){K=t},k._setAsap=function(t){L=t},k._asap=L,k.prototype={constructor:k,then:s,catch:function(t){return this.then(null,t)}},k.polyfill=function(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=k},k.Promise=k,k.defer=function(){var t={};return t.promise=new k(function(e,n){t.resolve=e,t.reject=n}),t},k}); 
 			}); 
		define("src/lib/message.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function t(){this._evtObjs={},this._outdatedMsgs={}}function e(){}t.prototype.on=function(t,e,s){this._evtObjs[t]||(this._evtObjs[t]=[]),this._evtObjs[t].push({handler:e,once:s});var n=this;return function(){n.off(t,e)}},t.prototype.wait=function(t,s){return this._outdatedMsgs[t]?(s.apply(null,this._outdatedMsgs[t]),e):this.on(t,s,!0)},t.prototype.off=function(t,e){var s=this;return(t?[t]:Object.keys(this._evtObjs)).forEach(function(t){if(e){var n=[];(s._evtObjs[t]||[]).forEach(function(t){t.handler!==e&&n.push(t)}),s._evtObjs[t]=n}else s._evtObjs[t]=[]}),this},t.prototype.emit=function(t){var e=Array.prototype.slice.call(arguments,1);this._outdatedMsgs[t]=e,(this._evtObjs[t]||[]).forEach(function(t){if(!t.once||!t.called){t.called=!0;try{t.handler&&t.handler.apply(null,e)}catch(t){console.error(t.stack||t.message||t)}}})},t.prototype.emitAsync=function(){var t=arguments,e=this;setTimeout(function(){e.emit.apply(e,t)},0)},t.prototype.assign=function(t){var e=this;["on","off","wait","emit","emitAsync"].forEach(function(s){var n=e[s];t[s]=function(){return n.apply(e,arguments)}})},(new t).assign(t),module.exports=t; 
 			}); 
		define("src/lib/parse-body.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports=function(t){if("string"!=typeof t)return t;t&&(t=t.trim()),t&&/^(data|QZOutputJson)=/.test(t)&&(t=t.replace(/^(data|QZOutputJson)=/,"").replace(/;?$/,""));try{return JSON.parse(t)}catch(t){throw new Error("parse jsonp body failed")}}; 
 			}); 
		define("src/lib/request.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("./parse-body"),t=require("./es6-promise"),n=require("../module/log")("lib-request"),u=module.exports={request:function(t){return t.success=function(t){return t=t||function(){},function(u){if(n("wx.request success"),u&&200==u.statusCode)try{u.data=e(u.data)}catch(e){}t(u)}}(t.success),n("wx.request",t.url),wx.request(t)},get:function(e,n){return n=n||{},new t(function(t,r){u.request({url:e,data:n.data||{},header:n.header||{},method:"GET",success:function(e){t(e)},fail:function(e){r(e)},needlogin:n.needlogin})})},post:function(e,n){return n=n||{},new t(function(t,r){u.request({url:e,data:n.data||{},header:n.header||{},method:"POST",success:function(e){t(e)},fail:function(e){r(e)},needlogin:n.needlogin})})}}; 
 			}); 
		define("src/module/cache.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports={set:function(e,t,a){wx.setStorageSync("_cache_"+e,{expr:a||0,date:+new Date,data:t})},get:function(e){e="_cache_"+e;var t=wx.getStorageSync(e);return t?t.expr&&t.expr?new Date-(t.date+t.expr)<0?t.data:(wx.removeStorageSync(e),null):t.data:null},del:function(e){e="_cache_"+e,wx.removeStorageSync(e)}}; 
 			}); 
		define("src/module/curr-page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var r;module.exports={getCurrUrl:function(e){if(!(r=e.getCurrentPages||r))return"/pages/default";var t=r();return t[t.length-1].route},getCurrPageQuery:function(e){if(!(r=e.getCurrentPages||r))return"/pages/default";var t=r();return(e=t[t.length-1].options)||{}},getCurrUrlWithQuery:function(){var r=this.getCurrPageQuery(),e=this.getCurrUrl()+"?";for(var t in r)e+=t+"="+r[t]+"&";return e=e.substring(0,e.length-1)}}; 
 			}); 
		define("src/module/log.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function o(a){var t=[Math.floor(50*Math.random()+200),Math.floor(50*Math.random()+150),Math.floor(50*Math.random()+100)].sort(function(){return Math.random()-.5});return t="rgb("+t[0]+", "+t[1]+", "+t[2]+")",n?function(){if(o.isOpenLog){var n=["%c【%s】%c "+a+" %c %s ","background: #ddd",new Date,"background: "+t,"background: #333;color: white"];console.log.apply(console,n.concat([].slice.call(arguments,0)))}}:function(){if(o.isOpenLog){var n=["【%s】 "+a+" %s ",new Date];console.log.apply(console,n.concat([].slice.call(arguments,0)))}}}var n="devtools"==wx.getSystemInfoSync().platform;o.isOpenLog=!1,module.exports=o; 
 			}); 
		define("src/module/network.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e={"4g":4,"3g":3,"2g":2,wifi:1};module.exports=function(t){wx.getNetworkType({complete:function(o){var r=e[o&&o.networkType]||0;t&&t(r)}})}; 
 			}); 
		define("src/module/reporter/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=new(require("../../lib/message")),r=require("./report-queue"),t=require("../log")("module-reporter");r.onReport=function(e){s.emit("report",e)};var o=require("./report-cache"),s={};s.any=function(e){r.push(e)},s.saveState=function(){t("reporter.js","saveState"),s.emit("_save")},s.restoreState=function(){t("reporter.js","restoreState"),s.emit("_restore")},s.checkState=function(){t("reporter.js","checkState"),o.getAll().forEach(r.push),o.del()},s.reportCache=o,e.assign(s),module.exports=s; 
 			}); 
		define("src/module/reporter/report-cache.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t=require("../cache"),e=t.get("tvp_report")||{};exports.get=function(t){return e[t]},exports.set=function(r,n){e[r]=n,t.set("tvp_report",e)},exports.del=function(r){r?delete e[r]:e={},t.set("tvp_report",e)},exports.getAll=function(){return Object.keys(e).map(function(t){return e[t]})}; 
 			}); 
		define("src/module/reporter/report-queue.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../../../lib-inject").request;module.exports=function(t){function n(t){~t.reportUrl.indexOf("btrace.qq.com")?e(t.reportUrl).then(function(){r.release()}).catch(function(){r.onReport&&r.onReport(t)}):r.onReport&&r.onReport(t),c=setTimeout(function(){r.release()},o)}var r,o=3e3,u=!1,i=[],c=null;return r={release:function(e){u&&e&&e!=u||(u=!1,clearTimeout(c),i.length&&n(i.shift()))},push:function(e){u?i.push(e):(u=e,n(e))}}}(); 
 			}); 
		define("src/module/visiable.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e,t=require("./log")("visiable");module.exports=function(o){if(!o.dom){var r=wx.createSelectorQuery().in(o);o.dom=r.select("#"+o.data.playerid)}o.dom.boundingClientRect(function(r){e=e||wx.getSystemInfoSync();var i=!0;(r.top>=e.windowHeight||r.bottom<=0)&&(t(r),i=!1),i||o.isEnterFullscreen||o._controller.pause()}).exec()}; 
 			}); 
		define("src/util/base64text.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports="data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAtxtZGF0AAACvAYF//+43EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDEzNSByMjM0NSBmMGMxYzUzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxMyAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTYgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9YWJyIG1idHJlZT0xIGJpdHJhdGU9NTAgcmF0ZXRvbD0xLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IGlwX3JhdGlvPTEuNDAgYXE9MToxLjAwAIAAAAAQZYiEABr//vfUt8yy8ER/gQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAA8AAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAEAAAAAoAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAEAAKAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAn/4QAZZ2QACazZX+TAWyAAAAMAIAAAAwKB4kSywAEABWjr7LIsAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAtQAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU1LjEyLjEwMg=="; 
 			}); 
		define("src/util/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports={formatDate:function(e,t){if(!e)return"";"string"==typeof e&&(e=new Date(e.replace(/-/g,"/"))),t=t||"yyyy-MM-dd";var r={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));for(var g in r)new RegExp("("+g+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?r[g]:("00"+r[g]).substr((""+r[g]).length)));return t}}; 
 			}); 
		define("src/util/platform-config.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports={APP_NAME:{v4169:"plugin",v4160:"sport.qq.com",v4144:"pvp.qq.com"},APP_PLATFORM:{v4169:"4210801",v4160:"40801",v4144:"3100801"}}; 
 			}); 
		define("src/video.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("./module/reporter/index"),t=require("./controller-video/index"),o=require("./controller-live/index"),r=require("./util/platform-config").APP_NAME,n=module.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.from,a=void 0===n.autoplay||n.autoplay,p=n.defn||"",d="function"==typeof n.getReportParam?n.getReportParam:"function"==typeof n.getLoginData?function(e){n.getLoginData(function(t,o){o.hc_openid=o.openid,delete o.openid,e(t,o)})}:function(e){return e()},f=e.vid;"string"==typeof e&&(f=e);var u,c=e.cid||"",l=e.sid,s=e.pid;return u=f?t({vid:f,cid:c,from:i,defn:p},{getReportParam:function(e){d(function(t,o){o&&(o.appname=r[i]),e(t,o)})}}):o({sid:l,pid:s,from:i,defn:p},{getReportParam:function(e){d(function(t,o){o&&(o.appname=r[i]),e(t,o)})}}),a&&u.start(),u};n.on=function(t){"report"==t&&(e.off("report"),e.on.apply(e,arguments))},n.release=e.release,n.saveState=e.saveState,n.restoreState=e.restoreState,n.checkState=e.checkState; 
 			}); 
		global.__wxAppCurrentFile__ = 'plugin-private://wxa75efa648b60994b/component/live/live.js';global.__wxRouteBegin = true; 	define("component/live/live.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../../index"),t=require("../txv-context"),i=require("../../src/module/log")("txv-live-component"),a=require("../../src/module/visiable"),r=(require("../../src/controller-live/flow-getinfo/live-detail"),require("../../src/controller-live/flow-getinfo/live-poll")),n=(require("../../src/util/index"),require("../../src/util/base64text"));Component({properties:{pid:{type:String,value:"",observer:"onVideoChange"},sid:{type:String,value:"",observer:"onVideoChange"},playerid:{type:String,value:""},autoplay:{type:Boolean,value:!1},width:{type:String,value:""},height:{type:String,value:""},isHiddenStop:{type:Boolean,value:!1},isNeedMutex:{type:Boolean,value:!0},enableDanmu:{type:Boolean,value:!1},danmuBtn:{type:Boolean,value:!1},danmuList:{type:Array,value:[]},poster:{type:String,value:""},showCenterPlayBtn:{type:Boolean,value:!1},beforeText:{type:String,value:"直播未开始"},afterText:{type:String,value:"直播已结束"},isStopPoll:{type:Boolean,value:!1}},data:{tvpUrl:n,tvpIsAd:!1,tvpState:"",tvpVideoError:"",title:"",liveEndInfo:"",liveStatus:"",liveStartTime:"",getDataError:"",errCode:"",isBefore:!1,isAfter:!1,isHiddenContainer:!1,isHiddenVideo:!1},attached:function(){var e=this;if(i("attached",this.data),!this.data.playerid)throw new Error("需要为txv-live组件指定一个playerid");if(!this.data.sid||!this.data.pid)throw new Error("需要为txv-live组件传入sid和pid，否则怎么播放视频呢");this.videoContext=wx.createVideoContext(this.data.playerid,this);var a=this;wx.onNetworkStatusChange(function(e){function i(){a.currPlayTime=a.data.progressTime,a.networkChange&&a.networkChange()}a.data.tvpIsAd||(a.data.playerid!=t.getLastPlayId()?a.delayNetworkChangeReq=i:i())});var r=this._controller={};["play","pause","seek","playbackRate","requestFullScreen","exitFullScreen","sendDanmu"].forEach(function(t){r[t]=function(){for(var i=arguments.length,a=Array(i),r=0;r<i;r++)a[r]=arguments[r];e.videoContext[t].apply(e.videoContext,a)}}),r.hideVideo=function(){a.setData({isHiddenVideo:!0})},r.showVideo=function(){a.setData({isHiddenVideo:!1})},r.showContainer=function(){a.setData({isHiddenContainer:!1})},r.hideContainer=function(){a.setData({isHiddenContainer:!0})},t.txvAttached(this.data.playerid,r)},detached:function(){i("detached",this.data),t.txvDetached(this.data.playerid),clearTimeout(this.livePollTimer),this.networkChange=null,this.livePollTimer=null},methods:{getVideoInfo:function(){if(this.data.sid&&this.data.pid)return e({sid:this.data.sid,pid:this.data.pid},{from:"v4169"})},onVideoChange:function(e,t,a){var r=this.data.sid,n=this.data.pid;this.formerPid==n&&this.formerSid==r||(this.formerPid=n,this.formerSid=r,r&&n&&(i("onVideoChange",r,n),clearTimeout(this.livePollTimer),this.livePollTimer=null,this.createPlayer()))},triggerLivePoll:function(e,t){var a=this;if(!this.isPolling)return this.isPolling=!0,r({pollDataKey:e,pollContext:t||""}).then(function(t){a.isPolling=!1,i("@@@@@@@@@@@@@@@",t),t=t&&t.data&&t.data.data,!1!==a.livePollTimer&&(a.livePollTimer=setTimeout(function(){a.triggerLivePoll(e,t.pollContext)},1e3*(t.pollTimeOut||5)));var r={onlineNumber:t.onlineNumber,likeNum:t.likeNum,popularity:t.popularity,playCount:t.playCount,attentNumber:t.attentNumber};2!=t.liveStatus?(clearTimeout(a.livePollTimer),a.livePollTimer=!1,a.triggerEvent("livestatus",{status:3,msg:"直播已结束",data:r}),a.videoContext.pause(),a.setData({getDataError:"",isAfter:!0,isBefore:!1,tvpUrl:n,autoplay:!1})):a.triggerEvent("livestatus",{status:2,msg:"直播中",data:r})}).catch(function(i){a.isPolling=!1,!1!==a.livePollTimer&&(a.livePollTimer=setTimeout(function(){a.triggerLivePoll(e,t)},2e4))})},createPlayer:function(){var e=this;this.video=this.getVideoInfo(),this.video&&(this.networkChange=this.video.switchDefn,this.video.on("contentchange",function(t){if(t.currentContent){i("tvpUrl",t,t.currentContent);var a=t.currentContent.url,r=t.currentContent.iretcode,n={isBefore:!1,isAfter:!1,getDataError:!1,errCode:""};0===r&&a?(n.tvpUrl=a,e.triggerEvent("livestatus",{status:2,msg:"直播中"}),!e.data.isStopPoll&&e.triggerLivePoll("pid="+e.data.pid)):7==r?(n.isBefore=!0,e.triggerEvent("livestatus",{status:1,msg:"直播未开始"}),e.videoContext.pause()):8==r?(n.isAfter=!0,e.triggerEvent("livestatus",{status:3,msg:"直播已结束"}),e.videoContext.pause()):(n.getDataError=!0,n.errCode=r||8888,e.triggerEvent("livestatus",{status:r,msg:"未知错误"}),e.videoContext.pause()),e.setData(n)}}),this.video.on("error",function(t){e.triggerEvent("error",t)}))},__onTvpPlay:function(e){var i=this.data.playerid,a=t.getLastPlayId();if(t.setTvpPlayState(i,!0),a!=i){if(a){var r=t.getTxvContext(a);this.data.isNeedMutex&&r&&r.pause(),t.setTvpPlayState(a,!1)}t.setLastPlayId(i)}if(this.delayNetworkChangeReq)return this.delayNetworkChangeReq(),void(this.delayNetworkChangeReq=null);try{this.video&&this.video.onContentPlay()}finally{this.triggerEvent("play",e.detail)}},__onTvpPause:function(e){t.setTvpPlayState(this.data.playerid,!1);try{this.video&&this.video.onContentPause()}finally{this.triggerEvent("pause",e.detail)}},__onTvpEnded:function(e){t.setTvpPlayState(this.data.playerid,!1);try{this.video&&this.video.onContentEnd()}finally{this.triggerEvent("ended",e.detail)}},__onTvpTimeupdate:function(e){this.data.isHiddenStop&&a(this),t.setTvpPlayState(this.data.playerid,!0),this.triggerEvent("timeupdate",e.detail),this.video&&this.video.onContentTimeupdate(null,e)},__onTvpFullScreenChange:function(e){this.isEnterFullscreen=!!e.detail.fullScreen,this.triggerEvent("fullscreenchange",e.detail)},__onTvpError:function(e){t.setTvpPlayState(this.data.playerid,!1);try{this.video&&this.video.onContentError()}finally{this.triggerEvent("error",e.detail)}}}}); 
 			}); 	require("component/live/live.js");
 		global.__wxAppCurrentFile__ = 'plugin-private://wxa75efa648b60994b/component/video/video.js';global.__wxRouteBegin = true; 	define("component/video/video.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function e(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var t,a=require("../../index"),i=require("../txv-context"),n=require("../../src/module/log")("txv-video-component"),o=(require("../../src/module/curr-page"),require("../../src/module/visiable")),r=wx.getStorageSync("tvp_openid");r||(r=["_",Math.random().toString(16).slice(2),Math.random().toString(16).slice(2),Math.random().toString(16).slice(2)].join("").slice(0,28),wx.setStorageSync("tvp_openid",r));require("../../private-setting");Component({properties:(t={vid:{type:String,value:"",observer:"onVideoChange"},playerid:{type:String,value:"",observer:"onPlayeridChange"},autoplay:{type:Boolean,value:!1},objectFit:{type:String,value:"contain"},poster:{type:String,value:""},showProgress:{type:Boolean,value:!0},controls:{type:Boolean,value:!0},initialTime:{type:Number,value:0},showFullscreenBtn:{type:Boolean,value:!0},showPlayBtn:{type:Boolean,value:!0},showCenterPlayBtn:{type:Boolean,value:!0},enableProgressGesture:{type:Boolean,value:!0},pageGesture:{type:Boolean,value:!1},muted:{type:Boolean,value:!1},loop:{type:Boolean,value:!1},direction:{type:Number,value:-1}},e(t,"controls",{type:Boolean,value:!0}),e(t,"width",{type:String,value:""}),e(t,"height",{type:String,value:""}),e(t,"usePoster",{type:Boolean,value:!0}),e(t,"isHiddenStop",{type:Boolean,value:!1}),e(t,"isNeedMutex",{type:Boolean,value:!0}),e(t,"enableDanmu",{type:Boolean,value:!1}),e(t,"danmuBtn",{type:Boolean,value:!1}),e(t,"danmuList",{type:Array,value:[]}),t),data:{progressBaseTime:0,progressSkipTime:0,progressTime:0,progressDuration:0,tvpUrl:"",tvpIsAd:!1,tvpState:"",tvpVideoError:"",reportUrl:"",isHiddenContainer:!1,isHiddenVideo:!1},attached:function(){var e=this;if(n("attached",this.data),!this.data.playerid)throw new Error("需要为txv-video组件指定一个playerid");if(!this.data.vid)throw new Error("需要为txv-video组件传入一个vid，否则怎么播放视频呢");this.videoContext=wx.createVideoContext(this.data.playerid,this);var t=this;wx.onNetworkStatusChange(function(e){function a(){t.currPlayTime=t.data.progressTime,t.isNetworkChange=!0,t.networkChange&&t.networkChange()}t.data.tvpIsAd||(t.data.playerid!=i.getLastPlayId()?t.delayNetworkChangeReq=a:a())});var o=this._controller={};["play","pause","seek","playbackRate","requestFullScreen","exitFullScreen","sendDanmu"].forEach(function(t){o[t]=function(){for(var a=arguments.length,i=Array(a),n=0;n<a;n++)i[n]=arguments[n];e.videoContext[t].apply(e.videoContext,i)}}),o.hideVideo=function(){t.setData({isHiddenVideo:!0})},o.showVideo=function(){t.setData({isHiddenVideo:!1})},o.showContainer=function(){t.setData({isHiddenContainer:!1})},o.hideContainer=function(){t.setData({isHiddenContainer:!0})},i.txvAttached(this.data.playerid,o),n("!!!!!!!",i),a.on("report",function(t){e.setData({reportUrl:t.reportUrl.replace("https","http")})})},moved:function(){},detached:function(){n("detached",this.data),i.txvDetached(this.data.playerid),this._controller=null,this.networkChange=null},methods:{skipAd:function(){this.video.onContentSkip(0)},onPlayeridChange:function(e,t){t&&i.txvDetached(t),e&&this._controller&&i.txvAttached(t,this._controller)},getVideoInfo:function(){if(this.data.vid)return a(this.data.vid,{from:"v4169",getReportParam:function(e){e(null,{hc_openid:r,hc_vuserid:r})}})},onVideoChange:function(){var e=this;if(this.data.vid){n("onVideoChange",this.data.vid);var t=this.video=this.getVideoInfo();if(t){this.networkChange=t.switchDefn,t.on("error",function(t){e.triggerEvent("error",t),e.setData({tvpVideoError:t.message+"("+(t.code||"L")+")"})}),t.on("statechange",function(t,a){if(n("onstatechange",t,a),e.triggerEvent("statechange",{newstate:t,oldstate:a}),t!=e.data.tvpState){switch(n("playerstatechange "+e.data.tvpState+" => "+t),e.data.tvpState){case"stop":break;case"error":return}e.setData({tvpState:t})}});var a=!0;t.on("contentchange",function(t){if(n("contentchange",t),t.currentContent){var i={};i.progressTime=0,t.progress?(i.progressDuration=t.progress.duration,i.progressBaseTime=t.progress.time,i.progressSkipTime=t.progress.skipable):(i.progressDuration=0,i.progressBaseTime=0,i.progressSkipTime=0),i.tvpUrl=t.currentContent.url,i.tvpIsAd=!!t.currentContent.isad;var o=t.getinforaw&&t.getinforaw.vl&&t.getinforaw.vl.vi;o&&o.length&&-1==i.direction&&o.some(function(t){t.vid===e.data.vid&&t.vh&&t.vw&&(i.direction=t.vh<t.vw?90:0)}),e.setData(i,function(){a||setTimeout(function(){e.videoContext.play(),e.isNetworkChange&&(e.videoContext.seek(e.currPlayTime),e.isNetworkChange=!1)},100),a=!1})}else n("first content change",t)})}}},__onTvpPlay:function(e){var t=this.data.playerid;i.setTvpPlayState(t,!0);var a=i.getLastPlayId();if(a!=t){if(a&&i.existTxvContext(a)){var n=i.getTxvContext(a);this.data.isNeedMutex&&n&&n.pause(),i.setTvpPlayState(a,!1)}i.setLastPlayId(t)}if(this.delayNetworkChangeReq)return this.delayNetworkChangeReq(),void(this.delayNetworkChangeReq=null);try{this.video&&this.video.onContentPlay()}finally{this.triggerEvent("play",e.detail)}},__onTvpPause:function(e){i.setTvpPlayState(this.data.playerid,!1);try{this.video&&this.video.onContentPause()}finally{this.triggerEvent("pause",e.detail)}},__onTvpEnded:function(e){i.setTvpPlayState(this.data.playerid,!1);try{this.video&&this.video.onContentEnd()}finally{this.triggerEvent("ended",e.detail)}},__onTvpTimeupdate:function(e){this.data.isHiddenStop&&o(this),i.setTvpPlayState(this.data.playerid,!0),this.triggerEvent("timeupdate",e.detail);try{this.setData({progressTime:Math.floor(e.detail.currentTime)}),this.video&&this.video.onContentTimeupdate(null,e)}catch(e){}},__onTvpError:function(e){i.setTvpPlayState(this.data.playerid,!1);try{this.video&&this.video.onContentError()}finally{this.triggerEvent("error",e.detail)}},__onTvpFullScreenChange:function(e){this.isEnterFullscreen=!!e.detail.fullScreen,this.triggerEvent("fullscreenchange",e.detail)},tapRetry:function(e){}}}); 
 			}); 	require("component/video/video.js");
 	
				global.publishDomainComponents({
			"plugin://wxa75efa648b60994b/video":"plugin-private://wxa75efa648b60994b/component/video/video","plugin://wxa75efa648b60994b/live":"plugin-private://wxa75efa648b60994b/component/live/live"
	})
				module.exports = function() {
		return require('component/txv-context.js')
	}
			});
	requirePlugin("plugin://wxa75efa648b60994b");
/*v0.5vv_20190703_syb_scopedata*/global.__wcc_version__='v0.5vv_20190703_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[7],[3,'source']],[1,'refart']])
Z([[2,'&&'],[[7],[3,'data']],[[2,'==='],[[6],[[7],[3,'data']],[3,'arttype']],[1,'bigPic']]])
Z([3,'item-bottom-left'])
Z([[6],[[6],[[7],[3,'data']],[3,'tag']],[1,0]])
Z(z[3])
Z([[6],[[6],[[7],[3,'data']],[3,'tag']],[1,1]])
Z([[2,'&&'],[[7],[3,'data']],[[6],[[7],[3,'data']],[3,'videourl']]])
Z(z[2])
Z(z[3])
Z(z[3])
Z(z[5])
Z([[7],[3,'data']])
Z([3,'item-related-content'])
Z(z[3])
Z(z[3])
Z(z[5])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'question-page'])
Z([[2,'&&'],[[2,'==='],[[7],[3,'source']],[1,'personalQuestionAll']],[[6],[[7],[3,'data']],[3,'replynum']]])
Z([[2,'&&'],[[6],[[7],[3,'data']],[3,'picture']],[[6],[[6],[[7],[3,'data']],[3,'picture']],[3,'length']]])
Z([[6],[[7],[3,'data']],[3,'isreply']])
Z([[6],[[7],[3,'data']],[3,'artid']])
Z([[2,'!'],[[7],[3,'hiddenBottomBtn']]])
Z([[2,'!'],[[7],[3,'userinfo']]])
Z([3,'getUserInfo'])
Z([3,'operater-btn up-view'])
Z([3,'up'])
Z(z[7])
Z([[6],[[7],[3,'data']],[3,'up']])
Z([3,'handleUp'])
Z(z[8])
Z(z[9])
Z(z[11])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'swiperChange'])
Z([3,'swiper'])
Z([[7],[3,'currentTab']])
Z([3,'tab'])
Z([[7],[3,'tabList']])
Z([3,'tab.id'])
Z([3,'scrollToLower'])
Z([3,'height: 100%; background:#f1f3f5;'])
Z([[6],[[6],[[6],[[7],[3,'list']],[[6],[[7],[3,'tab']],[3,'id']]],[3,'list']],[3,'length']])
Z([[6],[[6],[[7],[3,'list']],[[6],[[7],[3,'tab']],[3,'id']]],[3,'list']])
Z([3,'item.id'])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'tab']],[3,'id']],[1,2]],[[7],[3,'item']]])
Z([3,'collection'])
Z([3,'drawRoute'])
Z([[6],[[7],[3,'tab']],[3,'id']])
Z([[7],[3,'item']])
Z([a,[3,'article'],[[2,'+'],[[2,'+'],[[6],[[7],[3,'tab']],[3,'id']],[1,'']],[[7],[3,'index']]]])
Z([[7],[3,'index']])
Z(z[12])
Z([[7],[3,'userinfo']])
Z([[2,'=='],[[6],[[7],[3,'tab']],[3,'id']],[1,2]])
Z(z[12])
Z([3,'upEvent'])
Z(z[14])
Z(z[15])
Z(z[17])
Z([3,'collectionQuestion'])
Z(z[19])
Z([[2,'&&'],[[6],[[6],[[6],[[7],[3,'list']],[[6],[[7],[3,'tab']],[3,'id']]],[3,'list']],[3,'length']],[[2,'!=='],[[6],[[6],[[7],[3,'list']],[[6],[[7],[3,'tab']],[3,'id']]],[3,'loadingText']],[1,'loading']]])
Z([[9],[[9],[[9],[[8],'draw',[[7],[3,'draw']]],[[8],'drawText',[[7],[3,'drawText']]]],[[8],'width',[[7],[3,'shareviewwidth']]]],[[8],'height',[[7],[3,'shareviewheight']]]])
Z([3,'shareview'])
Z([[9],[[9],[[9],[[8],'toastVisible',[[7],[3,'toastVisible']]],[[8],'toastTitle',[[7],[3,'toastTitle']]]],[[8],'toastDesc',[[7],[3,'toastDesc']]]],[[8],'toastStatus',[[7],[3,'toastStatus']]]])
Z([3,'toast'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isShowTip']])
Z([[2,'=='],[[7],[3,'type']],[1,3]])
Z([a,[3,'margin-top:'],[[2,'||'],[[7],[3,'navigationHeight']],[1,60]],[3,'px;']])
Z([[7],[3,'vid']])
Z([1,true])
Z(z[3])
Z(z[3])
Z([[7],[3,'videourl']])
Z([[10],[[7],[3,'articleObjForWX']]])
Z([3,'width:100%;'])
Z([3,'header'])
Z([[2,'?:'],[[2,'=='],[[7],[3,'type']],[1,1]],[1,'min-height:190rpx;'],[1,'']])
Z([[2,'=='],[[7],[3,'type']],[1,1]])
Z(z[12])
Z([[7],[3,'author']])
Z([3,'content'])
Z([[6],[[6],[[7],[3,'abstract']],[1,0]],[3,'content']])
Z([[7],[3,'abstract']])
Z([3,'key4'])
Z(z[16])
Z([[6],[[7],[3,'item']],[3,'shownum']])
Z([[2,'||'],[[2,'=='],[[7],[3,'type']],[1,1]],[[2,'=='],[[7],[3,'type']],[1,2]]])
Z([[6],[[7],[3,'content']],[3,'nodes']])
Z([3,'key'])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'tagType']],[1,'block']])
Z([3,'nodes'])
Z([[6],[[7],[3,'item']],[3,'nodes']])
Z([3,'key1'])
Z([[2,'==='],[[6],[[7],[3,'nodes']],[3,'node']],[1,'text']])
Z([[2,'==='],[[6],[[7],[3,'nodes']],[3,'node']],[1,'element']])
Z([[2,'==='],[[6],[[7],[3,'nodes']],[3,'tag']],[1,'img']])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'tag']],[1,'img']])
Z([[2,'>'],[[6],[[7],[3,'reference']],[3,'length']],[1,0]])
Z([[7],[3,'referenceBtn']])
Z([[6],[[7],[3,'refarts']],[1,0]])
Z([3,'artItem'])
Z([[7],[3,'refarts']])
Z(z[23])
Z([[7],[3,'artItem']])
Z([[2,'?:'],[[2,'==='],[[7],[3,'index']],[[2,'-'],[[6],[[7],[3,'refarts']],[3,'length']],[1,1]]],[1,'border:none'],[1,'']])
Z([a,[3,'article'],[[2,'+'],[[2,'+'],[[7],[3,'item']],[1,'']],[[7],[3,'index']]]])
Z([3,'refart'])
Z([[7],[3,'edition']])
Z([[9],[[9],[[9],[[9],[[9],[[9],[[9],[[8],'draw',[[7],[3,'draw']]],[[8],'drawText',[[7],[3,'drawText']]]],[[8],'width',[[7],[3,'shareviewwidth']]]],[[8],'height',[[7],[3,'shareviewheight']]]],[[8],'markTop',[[7],[3,'navigationHeight']]]],[[8],'showAutho',[[7],[3,'showAutho']]]],[[8],'showRetry',[[7],[3,'showRetry']]]],[[8],'drawshare',[[7],[3,'drawshare']]]])
Z([3,'shareview'])
Z([[9],[[9],[[9],[[8],'toastVisible',[[7],[3,'toastVisible']]],[[8],'toastTitle',[[7],[3,'toastTitle']]]],[[8],'toastDesc',[[7],[3,'toastDesc']]]],[[8],'toastStatus',[[7],[3,'toastStatus']]]])
Z([3,'toast'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'changeChannelid'])
Z([3,'swiper'])
Z([[7],[3,'currentchannelid']])
Z([a,[3,'height:'],[[7],[3,'swiperhigh']],[3,'rpx;']])
Z([[4],[[5],[[5],[[5],[[5],[[5],[[5],[1,0]],[1,1]],[1,2]],[1,3]],[1,4]],[1,5]]])
Z([3,'key'])
Z([3,'loadMore'])
Z([3,'scroll'])
Z([[7],[3,'item']])
Z([[7],[3,'scrollTop']])
Z([3,'true'])
Z([3,'height:100%;'])
Z([3,'listItem'])
Z([[6],[[7],[3,'list']],[[7],[3,'item']]])
Z(z[5])
Z([3,'collection'])
Z([3,'drawRoute'])
Z(z[8])
Z([[7],[3,'listItem']])
Z([a,[3,'article'],[[2,'+'],[[2,'+'],[[7],[3,'item']],[1,'']],[[7],[3,'index']]]])
Z([[7],[3,'index']])
Z([3,'home'])
Z([[7],[3,'userinfo']])
Z(z[6])
Z([3,'loading'])
Z(z[8])
Z([[2,'=='],[[6],[[7],[3,'loadingText']],[[7],[3,'item']]],[1,'']])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'list'])
Z([[7],[3,'collectCount']])
Z([[7],[3,'queCount']])
Z([[9],[[9],[[9],[[8],'toastVisible',[[7],[3,'toastVisible']]],[[8],'toastTitle',[[7],[3,'toastTitle']]]],[[8],'toastDesc',[[7],[3,'toastDesc']]]],[[8],'toastStatus',[[7],[3,'toastStatus']]]])
Z([3,'toast'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'changeSwiper'])
Z([3,'swiper'])
Z([[7],[3,'currentTab']])
Z([3,'tabid'])
Z([3,'tabs'])
Z([[7],[3,'tabList']])
Z([[6],[[7],[3,'tabs']],[3,'id']])
Z([3,'scrollToLower'])
Z([3,'height: 100%; background:#f1f3f5;'])
Z([[6],[[6],[[6],[[7],[3,'list']],[[6],[[7],[3,'tabs']],[3,'id']]],[3,'list']],[3,'length']])
Z([3,'listItem'])
Z([[6],[[6],[[7],[3,'list']],[[6],[[7],[3,'tabs']],[3,'id']]],[3,'list']])
Z([[7],[3,'index']])
Z([3,'collection'])
Z([3,'upEvent'])
Z(z[6])
Z([[7],[3,'listItem']])
Z([[7],[3,'hiddenBottomBtn']])
Z(z[12])
Z([[2,'?:'],[[2,'==='],[[6],[[7],[3,'tabs']],[3,'id']],[1,1]],[1,'personalQuestionAll'],[1,'personalQuestion']])
Z([[7],[3,'userinfo']])
Z([[9],[[9],[[9],[[8],'toastVisible',[[7],[3,'toastVisible']]],[[8],'toastTitle',[[7],[3,'toastTitle']]]],[[8],'toastDesc',[[7],[3,'toastDesc']]]],[[8],'toastStatus',[[7],[3,'toastStatus']]]])
Z([3,'toast'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'search']])
Z([3,'searchKey'])
Z([3,'openContent'])
Z([3,'search-list'])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([[6],[[7],[3,'item']],[3,'title']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'1']])
Z([[6],[[7],[3,'item']],[3,'search_content']])
Z([[9],[[9],[[9],[[8],'toastVisible',[[7],[3,'toastVisible']]],[[8],'toastTitle',[[7],[3,'toastTitle']]]],[[8],'toastDesc',[[7],[3,'toastDesc']]]],[[8],'toastStatus',[[7],[3,'toastStatus']]]])
Z([3,'toast'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'question-page'])
Z([a,[3,'top:'],[[2,'||'],[[7],[3,'navigationHeight']],[1,65]],[3,'px']])
Z([3,'changeSwiper'])
Z([3,'swiper'])
Z([[7],[3,'currentTab']])
Z([3,'tabid'])
Z([3,'tabs'])
Z([[7],[3,'tabList']])
Z([[6],[[7],[3,'tabs']],[3,'id']])
Z([3,'scrollToLower'])
Z([3,'height: 100%; background:#f1f3f5;'])
Z([[6],[[6],[[6],[[7],[3,'list']],[[6],[[7],[3,'tabs']],[3,'id']]],[3,'list']],[3,'length']])
Z([3,'listItem'])
Z([[6],[[6],[[7],[3,'list']],[[6],[[7],[3,'tabs']],[3,'id']]],[3,'list']])
Z([[7],[3,'index']])
Z([3,'collection'])
Z([3,'upEvent'])
Z(z[8])
Z([[7],[3,'listItem']])
Z([a,[3,'que'],[[2,'+'],[[2,'+'],[[6],[[7],[3,'tabs']],[3,'id']],[1,'']],[[7],[3,'index']]]])
Z(z[14])
Z([3,'solution'])
Z([[7],[3,'userinfo']])
Z([[7],[3,'isTipWrite']])
Z([[9],[[9],[[9],[[8],'toastVisible',[[7],[3,'toastVisible']]],[[8],'toastTitle',[[7],[3,'toastTitle']]]],[[8],'toastDesc',[[7],[3,'toastDesc']]]],[[8],'toastStatus',[[7],[3,'toastStatus']]]])
Z([3,'toast'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'==='],[[7],[3,'loading']],[1,true]])
Z([[7],[3,'loading']])
Z([3,'scroll-view'])
Z([a,[3,'height: 100%;padding-top:'],[[2,'||'],[[7],[3,'navigationHeight']],[1,65]],[3,'px;']])
Z([3,'collection'])
Z([3,'upEvent'])
Z([3,'0'])
Z([[7],[3,'data']])
Z(z[6])
Z([3,'solutionDetail'])
Z([[7],[3,'userinfo']])
Z([[2,'||'],[[2,'||'],[[2,'==='],[[6],[[7],[3,'searchParams']],[3,'from']],[1,'share']],[[2,'==='],[[6],[[7],[3,'searchParams']],[3,'from']],[1,'pushmsg']]],[[2,'==='],[[6],[[7],[3,'searchParams']],[3,'from']],[1,'']]])
Z([[9],[[9],[[9],[[8],'toastVisible',[[7],[3,'toastVisible']]],[[8],'toastTitle',[[7],[3,'toastTitle']]]],[[8],'toastDesc',[[7],[3,'toastDesc']]]],[[8],'toastStatus',[[7],[3,'toastStatus']]]])
Z([3,'toast'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'errCode']])
Z([[4],[[5],[[5],[[5],[1,0]],[1,1]],[1,2]]])
Z([[7],[3,'index']])
Z([3,'handleAddPicture'])
Z([a,[3,'pic-item '],[[2,'?:'],[[2,'==='],[[7],[3,'pictureLen']],[[7],[3,'item']]],[1,'pic-add'],[1,'']],[3,' '],[[2,'?:'],[[6],[[7],[3,'pictures']],[[7],[3,'item']]],[1,'no-border'],[1,'']]])
Z([[2,'?:'],[[2,'==='],[[7],[3,'pictureLen']],[[7],[3,'item']]],[1,'add'],[1,'']])
Z([[6],[[7],[3,'pictures']],[[7],[3,'item']]])
Z([[2,'==='],[[7],[3,'errCode']],[1,0]])
Z([[7],[3,'showSubscribeTip']])
Z([[9],[[9],[[9],[[8],'toastVisible',[[7],[3,'toastVisible']]],[[8],'toastTitle',[[7],[3,'toastTitle']]]],[[8],'toastDesc',[[7],[3,'toastDesc']]]],[[8],'toastStatus',[[7],[3,'toastStatus']]]])
Z([3,'toast'])
Z([[9],[[9],[[9],[[9],[[9],[[8],'type',[[7],[3,'modalType']]],[[8],'modalVisible',[[7],[3,'modalVisible']]]],[[8],'closeModal',[[7],[3,'closeModal']]]],[[8],'text',[[7],[3,'modalText']]]],[[8],'src',[[7],[3,'modalSrc']]]],[[8],'btnText',[[7],[3,'modalBtnText']]]])
Z([3,'modal'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'modal'])
Z([[7],[3,'modalVisible']])
Z([[7],[3,'showModalCancal']])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'shareview'])
Z(z[0])
Z([[7],[3,'draw']])
Z([[7],[3,'drawshare']])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'toast'])
Z(z[0])
Z([[7],[3,'toastVisible']])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={"m_./components/question/question.wxml:util":np_0,};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./components/question/question.wxml']={};
f_['./components/question/question.wxml']['util'] =nv_require("m_./components/question/question.wxml:util");
function np_0(){var nv_module={nv_exports:{}};var nv_sub = (function (nv_val){var nv_str = '';if (nv_val.nv_length > 55){if (nv_val){for(var nv_i = 55;nv_i;nv_i--){nv_str += nv_val[((nt_0=(55 - nv_i),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))]}};return(nv_str + '...')} else {return(nv_val)}});nv_module.nv_exports.nv_sub = nv_sub;return nv_module.nv_exports;}

var x=['./components/article/article.wxml','./components/question/question.wxml','./pages/collection/collection.wxml','../../template/shareview.wxml','../../template/toast/toast.wxml','./pages/content/content.wxml','./pages/index/index.wxml','./pages/personal/personal.wxml','./pages/personal_question/personal_question.wxml','./pages/search/search.wxml','./pages/solution/solution.wxml','./pages/solution_detail/solution_detail.wxml','./pages/solution_publish/solution_publish.wxml','../../template/modal/modal.wxml','./template/modal/modal.wxml','./template/shareview.wxml','./template/toast/toast.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
}
else if(_oz(z,1,e,s,gg)){oB.wxVkey=2
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(xC,fE)
if(_oz(z,4,e,s,gg)){fE.wxVkey=1
}
var cF=_v()
_(xC,cF)
if(_oz(z,5,e,s,gg)){cF.wxVkey=1
}
oD.wxXCkey=1
fE.wxXCkey=1
cF.wxXCkey=1
_(oB,xC)
}
else if(_oz(z,6,e,s,gg)){oB.wxVkey=3
var hG=_n('view')
_rz(z,hG,'class',7,e,s,gg)
var oH=_v()
_(hG,oH)
if(_oz(z,8,e,s,gg)){oH.wxVkey=1
}
var cI=_v()
_(hG,cI)
if(_oz(z,9,e,s,gg)){cI.wxVkey=1
}
var oJ=_v()
_(hG,oJ)
if(_oz(z,10,e,s,gg)){oJ.wxVkey=1
}
oH.wxXCkey=1
cI.wxXCkey=1
oJ.wxXCkey=1
_(oB,hG)
}
else if(_oz(z,11,e,s,gg)){oB.wxVkey=4
var lK=_n('view')
_rz(z,lK,'class',12,e,s,gg)
var aL=_v()
_(lK,aL)
if(_oz(z,13,e,s,gg)){aL.wxVkey=1
}
var tM=_v()
_(lK,tM)
if(_oz(z,14,e,s,gg)){tM.wxVkey=1
}
var eN=_v()
_(lK,eN)
if(_oz(z,15,e,s,gg)){eN.wxVkey=1
}
aL.wxXCkey=1
tM.wxXCkey=1
eN.wxXCkey=1
_(oB,lK)
}
oB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var oP=_n('view')
_rz(z,oP,'class',0,e,s,gg)
var xQ=_v()
_(oP,xQ)
if(_oz(z,1,e,s,gg)){xQ.wxVkey=1
}
var oR=_v()
_(oP,oR)
if(_oz(z,2,e,s,gg)){oR.wxVkey=1
}
var fS=_v()
_(oP,fS)
if(_oz(z,3,e,s,gg)){fS.wxVkey=1
var hU=_v()
_(fS,hU)
if(_oz(z,4,e,s,gg)){hU.wxVkey=1
}
hU.wxXCkey=1
}
var cT=_v()
_(oP,cT)
if(_oz(z,5,e,s,gg)){cT.wxVkey=1
var oV=_n('form')
var cW=_v()
_(oV,cW)
if(_oz(z,6,e,s,gg)){cW.wxVkey=1
var oX=_mz(z,'button',['catchgetuserinfo',7,'class',1,'data-type',2,'openType',3],[],e,s,gg)
var lY=_v()
_(oX,lY)
if(_oz(z,11,e,s,gg)){lY.wxVkey=1
}
lY.wxXCkey=1
_(cW,oX)
}
else{cW.wxVkey=2
var aZ=_mz(z,'button',['catchtap',12,'class',1,'data-type',2],[],e,s,gg)
var t1=_v()
_(aZ,t1)
if(_oz(z,15,e,s,gg)){t1.wxVkey=1
}
t1.wxXCkey=1
_(cW,aZ)
}
cW.wxXCkey=1
_(cT,oV)
}
xQ.wxXCkey=1
oR.wxXCkey=1
fS.wxXCkey=1
cT.wxXCkey=1
_(r,oP)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var b3=e_[x[2]].i
var o4=_mz(z,'swiper',['bindchange',0,'class',1,'current',1],[],e,s,gg)
var x5=_v()
_(o4,x5)
var o6=function(c8,f7,h9,gg){
var cAB=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',6,'style',1],[],c8,f7,gg)
var oBB=_v()
_(cAB,oBB)
if(_oz(z,8,c8,f7,gg)){oBB.wxVkey=1
var aDB=_v()
_(oBB,aDB)
var tEB=function(bGB,eFB,oHB,gg){
var oJB=_v()
_(oHB,oJB)
if(_oz(z,11,bGB,eFB,gg)){oJB.wxVkey=1
var fKB=_mz(z,'article',['catch:collection',12,'catch:drawRoute',1,'channelid',2,'data',3,'id',4,'index',5,'source',6,'userinfo',7],[],bGB,eFB,gg)
_(oJB,fKB)
}
else if(_oz(z,20,bGB,eFB,gg)){oJB.wxVkey=2
var cLB=_mz(z,'question',['catch:collection',21,'catch:upEvent',1,'channel',2,'data',3,'index',4,'source',5,'userinfo',6],[],bGB,eFB,gg)
_(oJB,cLB)
}
oJB.wxXCkey=1
oJB.wxXCkey=3
oJB.wxXCkey=3
return oHB
}
aDB.wxXCkey=4
_2z(z,9,tEB,c8,f7,gg,aDB,'item','index','item.id')
}
var lCB=_v()
_(cAB,lCB)
if(_oz(z,28,c8,f7,gg)){lCB.wxVkey=1
}
oBB.wxXCkey=1
oBB.wxXCkey=3
lCB.wxXCkey=1
_(h9,cAB)
return h9
}
x5.wxXCkey=4
_2z(z,4,o6,e,s,gg,x5,'tab','index','tab.id')
_(r,o4)
_ai(b3,x[3],e_,x[2],84,2)
var hMB=_v()
_(r,hMB)
var oNB=_oz(z,30,e,s,gg)
var cOB=_gd(x[2],oNB,e_,d_)
if(cOB){
var oPB=_1z(z,29,e,s,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[2],85,14)
_ai(b3,x[4],e_,x[2],86,2)
var lQB=_v()
_(r,lQB)
var aRB=_oz(z,32,e,s,gg)
var tSB=_gd(x[2],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,31,e,s,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[2],87,14)
b3.pop()
b3.pop()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[x[3],x[4]],ic:[]}
d_[x[5]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var oVB=_v()
_(r,oVB)
if(_oz(z,0,e,s,gg)){oVB.wxVkey=1
}
var xWB=_v()
_(r,xWB)
if(_oz(z,1,e,s,gg)){xWB.wxVkey=1
}
else{xWB.wxVkey=2
var oXB=_n('view')
_rz(z,oXB,'style',2,e,s,gg)
var fYB=e_[x[5]].i
var cZB=_v()
_(oXB,cZB)
if(_oz(z,3,e,s,gg)){cZB.wxVkey=1
var h1B=_mz(z,'txv-video',['autoplay',4,'playerid',1,'vid',2],[],e,s,gg)
_(cZB,h1B)
}
else if(_oz(z,7,e,s,gg)){cZB.wxVkey=2
}
var o2B=_n('wx-scope')
_rz(z,o2B,'wx:scope-data',8,e,s,gg)
var c3B=_n('view')
_rz(z,c3B,'style',9,e,s,gg)
var b9B=_mz(z,'view',['class',10,'style',1],[],e,s,gg)
var o0B=_v()
_(b9B,o0B)
if(_oz(z,12,e,s,gg)){o0B.wxVkey=1
}
var xAC=_v()
_(b9B,xAC)
if(_oz(z,13,e,s,gg)){xAC.wxVkey=1
}
o0B.wxXCkey=1
xAC.wxXCkey=1
_(c3B,b9B)
var o4B=_v()
_(c3B,o4B)
if(_oz(z,14,e,s,gg)){o4B.wxVkey=1
}
var oBC=_n('view')
_rz(z,oBC,'class',15,e,s,gg)
var fCC=_v()
_(oBC,fCC)
if(_oz(z,16,e,s,gg)){fCC.wxVkey=1
}
var cDC=_v()
_(oBC,cDC)
var hEC=function(cGC,oFC,oHC,gg){
var aJC=_v()
_(oHC,aJC)
if(_oz(z,19,cGC,oFC,gg)){aJC.wxVkey=1
var tKC=_v()
_(aJC,tKC)
if(_oz(z,20,cGC,oFC,gg)){tKC.wxVkey=1
}
tKC.wxXCkey=1
}
aJC.wxXCkey=1
return oHC
}
cDC.wxXCkey=2
_2z(z,17,hEC,e,s,gg,cDC,'item','index','key4')
fCC.wxXCkey=1
_(c3B,oBC)
var l5B=_v()
_(c3B,l5B)
if(_oz(z,21,e,s,gg)){l5B.wxVkey=1
}
var eLC=_v()
_(c3B,eLC)
var bMC=function(xOC,oNC,oPC,gg){
var cRC=_v()
_(oPC,cRC)
if(_oz(z,24,xOC,oNC,gg)){cRC.wxVkey=1
var oTC=_v()
_(cRC,oTC)
var cUC=function(lWC,oVC,aXC,gg){
var eZC=_v()
_(aXC,eZC)
if(_oz(z,28,lWC,oVC,gg)){eZC.wxVkey=1
}
var b1C=_v()
_(aXC,b1C)
if(_oz(z,29,lWC,oVC,gg)){b1C.wxVkey=1
}
var o2C=_v()
_(aXC,o2C)
if(_oz(z,30,lWC,oVC,gg)){o2C.wxVkey=1
}
eZC.wxXCkey=1
b1C.wxXCkey=1
o2C.wxXCkey=1
return aXC
}
oTC.wxXCkey=2
_2z(z,26,cUC,xOC,oNC,gg,oTC,'nodes','index','key1')
}
var hSC=_v()
_(oPC,hSC)
if(_oz(z,31,xOC,oNC,gg)){hSC.wxVkey=1
}
cRC.wxXCkey=1
hSC.wxXCkey=1
return oPC
}
eLC.wxXCkey=2
_2z(z,22,bMC,e,s,gg,eLC,'item','index','key')
var a6B=_v()
_(c3B,a6B)
if(_oz(z,32,e,s,gg)){a6B.wxVkey=1
var x3C=_v()
_(a6B,x3C)
if(_oz(z,33,e,s,gg)){x3C.wxVkey=1
}
x3C.wxXCkey=1
}
var t7B=_v()
_(c3B,t7B)
if(_oz(z,34,e,s,gg)){t7B.wxVkey=1
var o4C=_v()
_(t7B,o4C)
var f5C=function(h7C,c6C,o8C,gg){
var o0C=_mz(z,'article',['data',38,'extstyle',1,'id',2,'source',3],[],h7C,c6C,gg)
_(o8C,o0C)
return o8C
}
o4C.wxXCkey=4
_2z(z,36,f5C,e,s,gg,o4C,'artItem','index','key')
}
var e8B=_v()
_(c3B,e8B)
if(_oz(z,42,e,s,gg)){e8B.wxVkey=1
}
o4B.wxXCkey=1
l5B.wxXCkey=1
a6B.wxXCkey=1
t7B.wxXCkey=1
t7B.wxXCkey=3
e8B.wxXCkey=1
_(o2B,c3B)
_(oXB,o2B)
_ai(fYB,x[3],e_,x[5],195,4)
var lAD=_v()
_(oXB,lAD)
var aBD=_oz(z,44,e,s,gg)
var tCD=_gd(x[5],aBD,e_,d_)
if(tCD){
var eDD=_1z(z,43,e,s,gg) || {}
var cur_globalf=gg.f
lAD.wxXCkey=3
tCD(eDD,eDD,lAD,gg)
gg.f=cur_globalf
}
else _w(aBD,x[5],196,16)
_ai(fYB,x[4],e_,x[5],199,4)
var bED=_v()
_(oXB,bED)
var oFD=_oz(z,46,e,s,gg)
var xGD=_gd(x[5],oFD,e_,d_)
if(xGD){
var oHD=_1z(z,45,e,s,gg) || {}
var cur_globalf=gg.f
bED.wxXCkey=3
xGD(oHD,oHD,bED,gg)
gg.f=cur_globalf
}
else _w(oFD,x[5],200,16)
cZB.wxXCkey=1
cZB.wxXCkey=3
fYB.pop()
fYB.pop()
_(xWB,oXB)
}
oVB.wxXCkey=1
xWB.wxXCkey=1
xWB.wxXCkey=3
return r
}
e_[x[5]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var cJD=_mz(z,'swiper',['bindchange',0,'class',1,'current',1,'style',2],[],e,s,gg)
var hKD=_v()
_(cJD,hKD)
var oLD=function(oND,cMD,lOD,gg){
var tQD=_mz(z,'scroll-view',['bindscrolltolower',6,'class',1,'data-channelnum',2,'scrollTop',3,'scrollY',4,'style',5],[],oND,cMD,gg)
var eRD=_v()
_(tQD,eRD)
var bSD=function(xUD,oTD,oVD,gg){
var cXD=_mz(z,'article',['catch:collection',15,'catch:drawRoute',1,'channelid',2,'data',3,'id',4,'index',5,'source',6,'userinfo',7],[],xUD,oTD,gg)
_(oVD,cXD)
return oVD
}
eRD.wxXCkey=4
_2z(z,13,bSD,oND,cMD,gg,eRD,'listItem','index','key')
var hYD=_mz(z,'view',['catch:tap',23,'class',1,'data-channelnum',2],[],oND,cMD,gg)
var oZD=_v()
_(hYD,oZD)
if(_oz(z,26,oND,cMD,gg)){oZD.wxVkey=1
}
oZD.wxXCkey=1
_(tQD,hYD)
_(lOD,tQD)
return lOD
}
hKD.wxXCkey=4
_2z(z,4,oLD,e,s,gg,hKD,'item','index','key')
_(r,cJD)
return r
}
e_[x[6]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var o2D=e_[x[7]].i
var l3D=_n('view')
_rz(z,l3D,'class',0,e,s,gg)
var a4D=_v()
_(l3D,a4D)
if(_oz(z,1,e,s,gg)){a4D.wxVkey=1
}
var t5D=_v()
_(l3D,t5D)
if(_oz(z,2,e,s,gg)){t5D.wxVkey=1
}
a4D.wxXCkey=1
t5D.wxXCkey=1
_(r,l3D)
_ai(o2D,x[4],e_,x[7],75,2)
var e6D=_v()
_(r,e6D)
var b7D=_oz(z,4,e,s,gg)
var o8D=_gd(x[7],b7D,e_,d_)
if(o8D){
var x9D=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
e6D.wxXCkey=3
o8D(x9D,x9D,e6D,gg)
gg.f=cur_globalf
}
else _w(b7D,x[7],76,14)
o2D.pop()
return r
}
e_[x[7]]={f:m5,j:[],i:[],ti:[x[4]],ic:[]}
d_[x[8]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var fAE=e_[x[8]].i
var cBE=_mz(z,'swiper',['bindchange',0,'class',1,'current',1],[],e,s,gg)
var hCE=_v()
_(cBE,hCE)
var oDE=function(oFE,cEE,lGE,gg){
var tIE=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',7,'style',1],[],oFE,cEE,gg)
var eJE=_v()
_(tIE,eJE)
if(_oz(z,9,oFE,cEE,gg)){eJE.wxVkey=1
var bKE=_v()
_(eJE,bKE)
var oLE=function(oNE,xME,fOE,gg){
var hQE=_mz(z,'question',['catch:collection',13,'catch:upEvent',1,'channel',2,'data',3,'hiddenBottomBtn',4,'index',5,'source',6,'userinfo',7],[],oNE,xME,gg)
_(fOE,hQE)
return fOE
}
bKE.wxXCkey=4
_2z(z,11,oLE,oFE,cEE,gg,bKE,'listItem','index','{{index}}')
}
eJE.wxXCkey=1
eJE.wxXCkey=3
_(lGE,tIE)
return lGE
}
hCE.wxXCkey=4
_2z(z,5,oDE,e,s,gg,hCE,'tabs','tabid','{{tabs.id}}')
_(r,cBE)
_ai(fAE,x[4],e_,x[8],99,2)
var oRE=_v()
_(r,oRE)
var cSE=_oz(z,22,e,s,gg)
var oTE=_gd(x[8],cSE,e_,d_)
if(oTE){
var lUE=_1z(z,21,e,s,gg) || {}
var cur_globalf=gg.f
oRE.wxXCkey=3
oTE(lUE,lUE,oRE,gg)
gg.f=cur_globalf
}
else _w(cSE,x[8],100,14)
fAE.pop()
return r
}
e_[x[8]]={f:m6,j:[],i:[],ti:[x[4]],ic:[]}
d_[x[9]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var tWE=e_[x[9]].i
var eXE=_v()
_(r,eXE)
var bYE=function(x1E,oZE,o2E,gg){
var c4E=_mz(z,'view',['catch:tap',2,'class',1,'data-id',2,'data-title',3],[],x1E,oZE,gg)
var h5E=_v()
_(c4E,h5E)
if(_oz(z,6,x1E,oZE,gg)){h5E.wxVkey=1
}
var o6E=_v()
_(c4E,o6E)
if(_oz(z,7,x1E,oZE,gg)){o6E.wxVkey=1
}
h5E.wxXCkey=1
o6E.wxXCkey=1
_(o2E,c4E)
return o2E
}
eXE.wxXCkey=2
_2z(z,0,bYE,e,s,gg,eXE,'item','index','searchKey')
_ai(tWE,x[4],e_,x[9],86,2)
var c7E=_v()
_(r,c7E)
var o8E=_oz(z,9,e,s,gg)
var l9E=_gd(x[9],o8E,e_,d_)
if(l9E){
var a0E=_1z(z,8,e,s,gg) || {}
var cur_globalf=gg.f
c7E.wxXCkey=3
l9E(a0E,a0E,c7E,gg)
gg.f=cur_globalf
}
else _w(o8E,x[9],87,14)
tWE.pop()
return r
}
e_[x[9]]={f:m7,j:[],i:[],ti:[x[4]],ic:[]}
d_[x[10]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var eBF=e_[x[10]].i
var bCF=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var xEF=_mz(z,'swiper',['bindchange',2,'class',1,'current',2],[],e,s,gg)
var oFF=_v()
_(xEF,oFF)
var fGF=function(hIF,cHF,oJF,gg){
var oLF=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',9,'style',1],[],hIF,cHF,gg)
var lMF=_v()
_(oLF,lMF)
if(_oz(z,11,hIF,cHF,gg)){lMF.wxVkey=1
var aNF=_v()
_(lMF,aNF)
var tOF=function(bQF,ePF,oRF,gg){
var oTF=_mz(z,'question',['catch:collection',15,'catch:upEvent',1,'channel',2,'data',3,'id',4,'index',5,'source',6,'userinfo',7],[],bQF,ePF,gg)
_(oRF,oTF)
return oRF
}
aNF.wxXCkey=4
_2z(z,13,tOF,hIF,cHF,gg,aNF,'listItem','index','{{index}}')
}
lMF.wxXCkey=1
lMF.wxXCkey=3
_(oJF,oLF)
return oJF
}
oFF.wxXCkey=4
_2z(z,7,fGF,e,s,gg,oFF,'tabs','tabid','{{tabs.id}}')
_(bCF,xEF)
var oDF=_v()
_(bCF,oDF)
if(_oz(z,23,e,s,gg)){oDF.wxVkey=1
}
oDF.wxXCkey=1
_(r,bCF)
_ai(eBF,x[4],e_,x[10],73,2)
var fUF=_v()
_(r,fUF)
var cVF=_oz(z,25,e,s,gg)
var hWF=_gd(x[10],cVF,e_,d_)
if(hWF){
var oXF=_1z(z,24,e,s,gg) || {}
var cur_globalf=gg.f
fUF.wxXCkey=3
hWF(oXF,oXF,fUF,gg)
gg.f=cur_globalf
}
else _w(cVF,x[10],74,14)
eBF.pop()
return r
}
e_[x[10]]={f:m8,j:[],i:[],ti:[x[4]],ic:[]}
d_[x[11]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var oZF=e_[x[11]].i
var l1F=_v()
_(r,l1F)
if(_oz(z,0,e,s,gg)){l1F.wxVkey=1
}
else if(_oz(z,1,e,s,gg)){l1F.wxVkey=2
}
else{l1F.wxVkey=3
var a2F=_mz(z,'scroll-view',['scrollY',-1,'class',2,'style',1],[],e,s,gg)
var e4F=_mz(z,'question',['catch:collection',4,'catch:upEvent',1,'channel',2,'data',3,'index',4,'source',5,'userinfo',6],[],e,s,gg)
_(a2F,e4F)
var t3F=_v()
_(a2F,t3F)
if(_oz(z,11,e,s,gg)){t3F.wxVkey=1
}
t3F.wxXCkey=1
_(l1F,a2F)
}
_ai(oZF,x[4],e_,x[11],31,2)
var b5F=_v()
_(r,b5F)
var o6F=_oz(z,13,e,s,gg)
var x7F=_gd(x[11],o6F,e_,d_)
if(x7F){
var o8F=_1z(z,12,e,s,gg) || {}
var cur_globalf=gg.f
b5F.wxXCkey=3
x7F(o8F,o8F,b5F,gg)
gg.f=cur_globalf
}
else _w(o6F,x[11],32,14)
l1F.wxXCkey=1
l1F.wxXCkey=3
oZF.pop()
return r
}
e_[x[11]]={f:m9,j:[],i:[],ti:[x[4]],ic:[]}
d_[x[12]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var c0F=e_[x[12]].i
var hAG=_v()
_(r,hAG)
if(_oz(z,0,e,s,gg)){hAG.wxVkey=1
var cCG=_v()
_(hAG,cCG)
var oDG=function(aFG,lEG,tGG,gg){
var bIG=_mz(z,'view',['bindtap',3,'class',1,'data-add',2],[],aFG,lEG,gg)
var oJG=_v()
_(bIG,oJG)
if(_oz(z,6,aFG,lEG,gg)){oJG.wxVkey=1
}
oJG.wxXCkey=1
_(tGG,bIG)
return tGG
}
cCG.wxXCkey=2
_2z(z,1,oDG,e,s,gg,cCG,'item','index','{{index}}')
}
else if(_oz(z,7,e,s,gg)){hAG.wxVkey=2
}
var oBG=_v()
_(r,oBG)
if(_oz(z,8,e,s,gg)){oBG.wxVkey=1
}
_ai(c0F,x[4],e_,x[12],78,2)
var xKG=_v()
_(r,xKG)
var oLG=_oz(z,10,e,s,gg)
var fMG=_gd(x[12],oLG,e_,d_)
if(fMG){
var cNG=_1z(z,9,e,s,gg) || {}
var cur_globalf=gg.f
xKG.wxXCkey=3
fMG(cNG,cNG,xKG,gg)
gg.f=cur_globalf
}
else _w(oLG,x[12],79,14)
_ai(c0F,x[13],e_,x[12],80,2)
var hOG=_v()
_(r,hOG)
var oPG=_oz(z,12,e,s,gg)
var cQG=_gd(x[12],oPG,e_,d_)
if(cQG){
var oRG=_1z(z,11,e,s,gg) || {}
var cur_globalf=gg.f
hOG.wxXCkey=3
cQG(oRG,oRG,hOG,gg)
gg.f=cur_globalf
}
else _w(oPG,x[12],81,14)
hAG.wxXCkey=1
oBG.wxXCkey=1
c0F.pop()
c0F.pop()
return r
}
e_[x[12]]={f:m10,j:[],i:[],ti:[x[4],x[13]],ic:[]}
d_[x[14]]={}
d_[x[14]]["modal"]=function(e,s,r,gg){
var z=gz$gwx_12()
var b=x[14]+':modal'
r.wxVkey=b
gg.f=$gdc(f_["./template/modal/modal.wxml"],"",1)
if(p_[b]){_wl(b,x[14]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
}
xC.wxXCkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[14]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
d_[x[15]]["shareview"]=function(e,s,r,gg){
var z=gz$gwx_13()
var b=x[15]+':shareview'
r.wxVkey=b
gg.f=$gdc(f_["./template/shareview.wxml"],"",1)
if(p_[b]){_wl(b,x[15]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,2,e,s,gg)){oB.wxVkey=1
}
var xC=_v()
_(r,xC)
if(_oz(z,3,e,s,gg)){xC.wxVkey=1
}
oB.wxXCkey=1
xC.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[15]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
d_[x[16]]["toast"]=function(e,s,r,gg){
var z=gz$gwx_14()
var b=x[16]+':toast'
r.wxVkey=b
gg.f=$gdc(f_["./template/toast/toast.wxml"],"",1)
if(p_[b]){_wl(b,x[16]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,2,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[16]]={f:m13,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}
	__wxAppCode__['components/article/article.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/article/article.wxml'] = [$gwx, './components/article/article.wxml'];else __wxAppCode__['components/article/article.wxml'] = $gwx( './components/article/article.wxml' );
		__wxAppCode__['components/question/question.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/question/question.wxml'] = [$gwx, './components/question/question.wxml'];else __wxAppCode__['components/question/question.wxml'] = $gwx( './components/question/question.wxml' );
		__wxAppCode__['pages/collection/collection.json'] = {"onReachBottomDistance":100,"usingComponents":{"article":"../../components/article/article","question":"../../components/question/question"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/collection/collection.wxml'] = [$gwx, './pages/collection/collection.wxml'];else __wxAppCode__['pages/collection/collection.wxml'] = $gwx( './pages/collection/collection.wxml' );
		__wxAppCode__['pages/content/content.json'] = {"backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"较真辟谣神器","navigationBarTextStyle":"black","onReachBottomDistance":100,"usingComponents":{"article":"../../components/article/article","txv-video":"plugin://wxa75efa648b60994b/video"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/content/content.wxml'] = [$gwx, './pages/content/content.wxml'];else __wxAppCode__['pages/content/content.wxml'] = $gwx( './pages/content/content.wxml' );
		__wxAppCode__['pages/index/index.json'] = {"usingComponents":{"article":"../../components/article/article"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index.wxml'] = [$gwx, './pages/index/index.wxml'];else __wxAppCode__['pages/index/index.wxml'] = $gwx( './pages/index/index.wxml' );
		__wxAppCode__['pages/personal/personal.json'] = {"backgroundTextStyle":"light","navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"个人中心","navigationBarTextStyle":"black","onReachBottomDistance":100,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/personal/personal.wxml'] = [$gwx, './pages/personal/personal.wxml'];else __wxAppCode__['pages/personal/personal.wxml'] = $gwx( './pages/personal/personal.wxml' );
		__wxAppCode__['pages/personal_question/personal_question.json'] = {"usingComponents":{"question":"/components/question/question"},"navigationBarTitleText":"我的提问"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/personal_question/personal_question.wxml'] = [$gwx, './pages/personal_question/personal_question.wxml'];else __wxAppCode__['pages/personal_question/personal_question.wxml'] = $gwx( './pages/personal_question/personal_question.wxml' );
		__wxAppCode__['pages/search/search.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/search.wxml'] = [$gwx, './pages/search/search.wxml'];else __wxAppCode__['pages/search/search.wxml'] = $gwx( './pages/search/search.wxml' );
		__wxAppCode__['pages/solution/solution.json'] = {"usingComponents":{"question":"/components/question/question"},"navigationBarTitleText":"问答"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/solution/solution.wxml'] = [$gwx, './pages/solution/solution.wxml'];else __wxAppCode__['pages/solution/solution.wxml'] = $gwx( './pages/solution/solution.wxml' );
		__wxAppCode__['pages/solution_detail/solution_detail.json'] = {"usingComponents":{"question":"/components/question/question"},"navigationBarTitleText":"问答"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/solution_detail/solution_detail.wxml'] = [$gwx, './pages/solution_detail/solution_detail.wxml'];else __wxAppCode__['pages/solution_detail/solution_detail.wxml'] = $gwx( './pages/solution_detail/solution_detail.wxml' );
		__wxAppCode__['pages/solution_publish/solution_publish.json'] = {"navigationBarTitleText":"来问较真","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/solution_publish/solution_publish.wxml'] = [$gwx, './pages/solution_publish/solution_publish.wxml'];else __wxAppCode__['pages/solution_publish/solution_publish.wxml'] = $gwx( './pages/solution_publish/solution_publish.wxml' );
	
	define("js/fetch.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./login.js"));module.exports=function t(a){var n=a.data||{};return n._=Date.now(),wx.request({url:a.url,dataType:"json",header:{"content-type":a.contentType?a.contentType:"application/json",openid:wx.getStorageSync("openid")},method:a.method?a.method:"GET",data:n,success:function(n){200===n.statusCode&&n.data?n.data.errMsg&&"not login"===n.data.errMsg||8===n.errCode?(0,e.default)(function(e){var n=a;n.data.sessionid=e,t(n)},!0):a.success&&a.success(n.data):a.fail&&a.fail()},fail:function(e){a.fail&&a.fail(e)}})}; 
 			}); 
		define("js/get_formid.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var o=function(o){return o&&o.__esModule?o:{default:o}}(require("./fetch"));module.exports={getFormId:function(e){var r=e?e.detail.formId:"13";if(console.log("form发生了submit事件，推送码为：",r),r&&"the formId is a mock one"!==r){var s={sessionid:wx.getStorageSync("sessionid"),formid:r};(0,o.default)({url:"https://vp.fact.qq.com/saveFormId",method:"POST",data:s,success:function(o){0===o.errCode?console.log("res",o):console.log("err",o)},fail:function(o){console.log(o)}})}}}; 
 			}); 
		define("js/login.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=function(e){wx.getStorageSync("sessionid");wx.login({success:function(s){if(s.code){var o={code:s.code,appid:"wxd7bec290bace5e42"};wx.request({url:"https://coral.qq.com/wxminiprogram/getlogin",data:o,success:function(s){if(200===s.statusCode&&s.data){var o=s.data;if(0===o.errCode){var i=o.data,t=i.sessionid,n=i.openid;wx.setStorageSync("sessionid",t),wx.setStorageSync("openid",n),e&&e(t)}}},fail:function(e){wx.setStorageSync("sessionid",""),wx.setStorageSync("openid","")}})}}})};module.exports=function(s,o){var i=wx.getStorageSync("sessionid");!0===o?e(s):i?wx.checkSession({fail:function(o){e(s)}}):e(s)}; 
 			}); 
		define("js/mta_analysis.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){wx.getNetworkType({success:function(n){t(n.networkType)}})}function n(){var t=wx.getSystemInfoSync();return{adt:encodeURIComponent(t.model),scl:t.pixelRatio,scr:t.windowWidth+"x"+t.windowHeight,lg:t.language,fl:t.version,jv:encodeURIComponent(t.system),tz:encodeURIComponent(t.platform)}}function e(){try{return wx.getStorageSync(h.prefix+"auid")}catch(t){}}function a(){try{var t=i();return wx.setStorageSync(h.prefix+"auid",t),t}catch(t){}}function r(){try{return wx.getStorageSync(h.prefix+"ssid")}catch(t){}}function o(){try{var t="s"+i();return wx.setStorageSync(h.prefix+"ssid",t),t}catch(t){}}function i(t){for(var n=[0,1,2,3,4,5,6,7,8,9],e=10;1<e;e--){var a=Math.floor(10*Math.random()),r=n[a];n[a]=n[e-1],n[e-1]=r}for(e=a=0;5>e;e++)a=10*a+n[e];return(t||"")+(a+"")+ +new Date}function s(){try{var t=getCurrentPages(),n="/";return 0<t.length&&(n=t.pop().__route__),n}catch(t){console.log("get current page path error:"+t)}}function c(){var t={dm:"wechat.apps.xx",url:s(),pvi:"",si:"",ty:0};return t.pvi=function(){var n=e();return n||(n=a(),t.ty=1),n}(),t.si=function(){var t=r();return t||(t=o()),t}(),t}function u(){var e=n();return t(function(t){try{wx.setStorageSync(h.prefix+"ntdata",t)}catch(t){}}),e.ct=wx.getStorageSync(h.prefix+"ntdata")||"4g",e}function p(){var t,n=f.Data.userInfo,e=[];for(t in n)n.hasOwnProperty(t)&&e.push(t+"="+n[t]);return n=e.join(";"),{r2:h.app_id,r4:"wx",ext:"v="+h.version+(null!==n&&""!==n?";ui="+encodeURIComponent(n):"")}}var h={app_id:"",event_id:"",api_base:"https://pingtas.qq.com/pingd",prefix:"_mta_",version:"1.3.5",stat_share_app:!1,stat_pull_down_fresh:!1,stat_reach_bottom:!1},f={App:{init:function(t){"appID"in t&&(h.app_id=t.appID),"eventID"in t&&(h.event_id=t.eventID),"statShareApp"in t&&(h.stat_share_app=t.statShareApp),"statPullDownFresh"in t&&(h.stat_pull_down_fresh=t.statPullDownFresh),"statReachBottom"in t&&(h.stat_reach_bottom=t.statReachBottom),o(),"lauchOpts"in t&&(f.Data.lanchInfo=t.lauchOpts,f.Data.lanchInfo.landing=1)}},Page:{init:function(){var t=getCurrentPages()[getCurrentPages().length-1];t.onShow&&function(){var n=t.onShow;t.onShow=function(){f.Page.stat(),n.call(this,arguments)}}(),h.stat_pull_down_fresh&&t.onPullDownRefresh&&function(){var n=t.onPullDownRefresh;t.onPullDownRefresh=function(){f.Event.stat(h.prefix+"pulldownfresh",{url:t.__route__}),n.call(this,arguments)}}(),h.stat_reach_bottom&&t.onReachBottom&&function(){var n=t.onReachBottom;t.onReachBottom=function(){f.Event.stat(h.prefix+"reachbottom",{url:t.__route__}),n.call(this,arguments)}}(),h.stat_share_app&&t.onShareAppMessage&&function(){var n=t.onShareAppMessage;t.onShareAppMessage=function(){return f.Event.stat(h.prefix+"shareapp",{url:t.__route__}),n.call(this,arguments)}}()},stat:function(){if(""!=h.app_id){var t=[],n=p(),e=[c(),n,u()];f.Data.lanchInfo&&(e.push({ht:f.Data.lanchInfo.scene,rdm:"/",rurl:f.Data.lanchInfo.path}),f.Data.lanchInfo.query&&f.Data.lanchInfo.query._mta_ref_id&&e.push({rarg:f.Data.lanchInfo.query._mta_ref_id}),1==f.Data.lanchInfo.landing&&(n.ext+=";lp=1",f.Data.lanchInfo.landing=0)),e.push({rand:+new Date}),n=0;for(var a=e.length;n<a;n++)for(var r in e[n])e[n].hasOwnProperty(r)&&t.push(r+"="+(void 0===e[n][r]?"":e[n][r]));wx.request({url:h.api_base+"?"+t.join("&").toLowerCase()})}}},Event:{stat:function(t,n){if(""!=h.event_id){var e=[],a=c(),r=p();a.dm="wxapps.click",a.url=t,r.r2=h.event_id;var o,i=void 0===n?{}:n,s=[];for(o in i)i.hasOwnProperty(o)&&s.push(encodeURIComponent(o)+"="+encodeURIComponent(i[o]));for(i=s.join(";"),r.r5=i,i=0,r=(a=[a,r,u(),{rand:+new Date}]).length;i<r;i++)for(var f in a[i])a[i].hasOwnProperty(f)&&e.push(f+"="+(void 0===a[i][f]?"":a[i][f]));wx.request({url:h.api_base+"?"+e.join("&").toLowerCase()})}}},Data:{userInfo:null,lanchInfo:null}};module.exports=f; 
 			}); 
		define("js/rebuild_data.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){var t={nick:e.nick,head:e.head&&e.head.length?e.head:"https://mat1.gtimg.com/www/coral/reef/img/default.png"};return(t.head.indexOf("//puep.qpic.cn")>0||t.head.indexOf("//shp.qpic.cn")>0||t.head.indexOf("//10.120.106.142")>0)&&(t.head=t.head+"/0"),e&&e.certinfo&&(e.certinfo.certnick&&(t.nick=e.certinfo.certnick),e.certinfo.certhead&&(t.head=e.certinfo.certhead)),t}function t(e){var t=[];return{picture:e.map(function(e){var r=e.url,n=r;return r.includes("//puep.qpic.cn/")&&(r+="/280",n+="/640"),t.push(n),i({},e,{url:r,url1:n})}),preimgs:t}}function r(e){var t=/(http:\/\/|https:\/\/)([A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*)/g,r=e.match(t);return null==r?{content:e}:{content:e.replace(r[0],""),artid:r[0].split("id=")[1]}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},n=require("./util.js");module.exports={getNewAQdata:function(i){var u=i.oriCommList,p=i.repCommList,c=i.userList,o=[];return u.forEach(function(i){var u=p&&p[i.id]?p[i.id][0]:null,a=i.picture?i.picture:i.pictures?i.pictures:[],d=a.length?t(a):null,s={targetid:i.targetid,id:i.id?i.id:i.commentid,content:i.content,picture:d?d.picture:[],preimgs:d?d.preimgs:[],userinfo:e(c[i.userid]),time:i.time?(0,n.formatTime2)(Number(i.time)):"",replynum:i.orireplynum?Number(i.orireplynum):i.repnum,isreply:!!u,up:i.up?Number(i.up):0,isup:!!i.isuped&&i.isuped,iscolled:!!i.iscolled&&i.iscolled};if(u){var l=r(u.content);s.replyContent=l.content,s.replyUserinfo=e(c[u.userid]),l.artid&&(s.artid=l.artid)}o.push(s)}),o},getOpeAQdata:function(i,u){var p=[];return i.forEach(function(i){var c=i.oriComment,o=c.id,a=c.content,d=c.picture,s=c.userid,l=c.time,m=c.up,f=i.repCommList.length?i.repCommList[0]:null,h=d&&d.length?t(d):null,g=0;g=u&&"collection"===u?i.up:m?Number(m):0;var v={targetid:i.targetid,id:o,content:a,picture:h?h.picture:[],preimgs:h?h.preimgs:[],userinfo:e(i.userList[s]),time:l?(0,n.formatTime2)(Number(l)):"",isreply:!!f,up:g,isup:!!i.isuped&&i.isuped,iscolled:!!i.iscolled&&i.iscolled};if(f){var y=r(f.content);v.replyContent=y.content,v.replyUserinfo=e(i.userList[f.userid]),y.artid&&(v.artid=y.artid)}p.push(v)}),p},getMyReplyAQdata:function(i,u,p){var c=[];return i.forEach(function(i){var o=u[i.parent],a=u[i.id],d=o.pictures&&o.pictures.length?t(o.pictures):null,s={targetid:i.targetid,id:i.parent,replyid:i.id,content:o.content,picture:d?d.picture:[],preimgs:d?d.preimgs:[],userinfo:e(p[o.userid]),time:o.time?(0,n.formatTime2)(Number(o.time)):"",replynum:Number(o.repnum),isreply:!!a,up:i.up?Number(i.up):0,isup:!!i.isuped&&i.isuped,iscolled:!!i.iscolled&&i.iscolled};if(a){var l=r(a.content);s.replyContent=l.content,s.replyUserinfo=e(p[a.userid]),l.artid&&(s.artid=l.artid)}c.push(s)}),c}}; 
 			}); 
		define("js/update_page_list.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e={homePage:function(){wx.setStorageSync("homePage",{update:!0})},solutionPage:function(){wx.setStorageSync("solutionPage",{update:!0})}};module.exports=function(o){switch(o){case"homePage":case"solutionPage":return void e[o]()}o?(0,e[o])():Object.keys(e).forEach(function(o){(0,e[o])()})}; 
 			}); 
		define("js/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("./fetch")),t=function(e){return new Date,(e=e.toString())[1]?e:"0"+e};module.exports={formatTime:function(e){var n=e.getFullYear(),r=e.getMonth()+1,a=e.getDate(),o=e.getHours(),u=e.getMinutes(),i=e.getSeconds();return[n,r,a].map(t).join("/")+" "+[o,u,i].map(t).join(":")},getQRcode:function(t){(0,e.default)({url:"https://vp.fact.qq.com/miniGetQRcode",data:{scene:t.scene||"1",page:t.page||"pages/index/index",filename:t.filename||"index"},success:function(e){t.success(e)},fail:function(e){t.fail(res)}})},formatTime2:function(e){var t=(new Date).getTime()/1e3-e;if(t<1)return"刚刚";if(t<60)return Math.floor(t)+"秒钟前";if(t<3600)return Math.floor(t/60)+"分钟前";if(t<86400)return Math.floor(t/3600)+"小时前";if(t<604800)return Math.floor(t/86400)+"天前";var n=new Date(1e3*e),r=n.getFullYear()+"/";return r+=n.getMonth()+1+"/",r+=n.getDate()},getgkt:function(e){for(var t=2013,n=e.length,r=0;r<n;++r)t=(t<<5&2147483647)+e[r].charCodeAt()+t;return 2147483647&t},throttle:function(e,t){null!=t&&void 0!=t||(t=1500);var n=null;return function(){var r=+new Date;(r-n>t||!n)&&(e.apply(this,arguments),n=r)}}}; 
 			}); 
		define("template/modal/modal.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e={0:{text:"十分抱歉，授权失败，请重试",btnText:"去授权",src:"../../images/subscribe/authfailed@3X.png",showCancel:!0},1:{text:"由于微信版本过低，你将无法收到回复通知，建议升级微信",btnText:"知道了",src:"../../images/subscribe/authorize@3X.png",showCancel:!1}};module.exports={modal:function(t,a){console.log("弹窗类型",a);var s=e[a],o=s.text,l=s.btnText,c=s.src,n=s.showCancel;t.setData({modalType:a,modalVisible:!0,modalText:o,modalBtnText:l,modalSrc:c,showModalCancal:n})}}; 
 			}); 
		define("template/shareview.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=function(e,t,i,l){wx.canvasToTempFilePath({x:0,y:0,width:e,height:t,destWidth:2*e,destHeight:2*t,canvasId:"viewshare",success:function(e){wx.saveImageToPhotosAlbum({filePath:e.tempFilePath,success:function(e){i(e)},fail:function(t){console.log("===save err==="),console.log(e),l("saveErr",e.tempFilePath)}})},fail:function(e){console.log("===canvasToTempFilePath err==="),console.log(e),l("canvasErr",e)}})},t=function(e,t,i,l){wx.canvasToTempFilePath({x:0,y:0,width:e,height:t,destWidth:2*e,destHeight:2*t,canvasId:"viewimg",success:function(e){i(e.tempFilePath)},fail:function(e){console.log("===canvasToTempFilePath err 222==="),console.log(e),l("canvasErr",e)}})},i=function(e,t){return l(e)>t&&l(e.slice(0,t))<t?Math.floor(t+t-l(e.slice(0,t))):t},l=function(e){var t=e.replace(/[a-zA-Z0-9]/g,"").length;return t+(e.length-t)/2};module.exports={drawImage:function(t){var l=wx.createCanvasContext("viewshare"),h=t.section||"支招";setTimeout(function(){wx.createSelectorQuery().select("#view-share").fields({dataset:!0,size:!0},function(a){var s,n,o=80*a.width/300,d=175*a.width/300,r=17*a.width/300,c=21,g="长按识别此码 获取独家查证",w=0,f=t.title.replace(/^\s+|\s+$/g,"");if(a.width<280?c=18:310<a.width&&(c=23),a.width>330&&(w=10),l.fillStyle="#FFFFFF",l.fillRect(0,0,a.width,a.height),l.drawImage("../../images/sharePicTop.png",a.width/2-63,13,126,13),1==t.type)l.drawImage(t.background,12,40,a.width-24,450*(a.width-24)/750),l.rotate(15*Math.PI/180),l.drawImage(t.mark,a.width-o/4,450*(a.width-24)/750/2+o/2,o,o),l.rotate(-15*Math.PI/180),l.setFontSize(c),l.setFillStyle("#333333"),u=i(f,12),f.length<=u?(l.fillText(f,13,450*(a.width-24)/750+80),s=110+w,a.width>280&&(o=o+10+w)):(l.fillText(f.slice(0,u),13,450*(a.width-24)/750+70+w),l.fillText(f.slice(u,f.length),13,450*(a.width-24)/750+100+w),s=130+w),t.author?(l.setFontSize(c-8),l.setFillStyle("#000000"),t.author.length+t.authordesc.length<=16?(l.fillText("查证者  |  "+t.author+" "+t.authordesc,13,450*(a.width-24)/750+s),a.width>280&&(o+=10)):(l.fillText("查证者  |  "+t.author+" "+t.authordesc.slice(0,16-t.author.length-1),13,450*(a.width-24)/750+s),l.fillText(t.authordesc.slice(16-t.author.length-1,t.authordesc.length),13,450*(a.width-24)/750+s+20))):a.width>280&&(o+=30),a.width>280&&(l.beginPath(),l.setLineWidth(.2),l.moveTo(13,a.height-o-2*r-55),l.lineTo(a.width-13,a.height-o-2*r-55),l.stroke());else if(2==t.type)l.drawImage(t.background,12,40,a.width-24,450*(a.width-24)/750),l.setFontSize(c-2),l.setFillStyle("#c41f20"),l.fillText(h+" |",13,450*(a.width-24)/750+70),l.setFillStyle("#333333"),u=i(f,14-(h.length+1)),f.length<=u?(l.fillText(f,c*(h.length+1),450*(a.width-24)/750+70),s=100):(l.fillText(f.slice(0,u),c*(h.length+1),450*(a.width-24)/750+70),l.fillText(f.slice(u,f.length),13,450*(a.width-24)/750+100),s=130),o=100*a.width/300;else if(3==t.type)l.setFontSize(c),l.setFillStyle("#333333"),g="长按识别此码 观看独家视频",u=i(f,12),f.length<=u?(l.fillText(f,13,70),n=100):(l.fillText(f.slice(0,u),13,70),l.fillText(f.slice(u,f.length),13,100),n=120),l.drawImage(t.background,13,n,a.width-26,450*(a.width-24)/750),l.drawImage("../../images/icon2.1/play.png",a.width/2-28,n+80-28,56,56),o=100*a.width/300;else if(4==t.type)l.rotate(15*Math.PI/180),l.drawImage(t.mark,a.width/2+o,-o/2,o,o),l.rotate(-15*Math.PI/180),l.setFontSize(c),l.setFillStyle("#333333"),u=i(f,12),f.length<=u?(l.fillText(f,13,70),s=100):(l.fillText(f.slice(0,u),13,70),l.fillText(f.slice(u,f.length),13,100),s=130),t.author&&(l.setFontSize(c-6),l.setFillStyle("#000000"),t.author.length+t.authordesc.length<=16?l.fillText("查证者  |  "+t.author+" "+t.authordesc,13,s):(l.fillText("查证者  |  "+t.author+" "+t.authordesc.slice(0,t.author.length+t.authordesc.length-20),13,s),l.fillText(t.authordesc.slice(t.author.length+t.authordesc.length-20,t.authordesc.length-1),13,s+20))),l.drawImage("../../images/pentacleforshowview.png",13,a.height/2-o/2,a.width-26,25),o=100*a.width/300;else{l.setFontSize(c),l.setFillStyle("#c41f20"),l.fillText(h+" | ",13,70),l.setFontSize(c),l.setFillStyle("#333333");var u=i(f,14-(h.length+1));f.length<=u?(l.fillText(f,c*(h.length+1),450*(a.width-24)/750+70),s=100):(l.fillText(f.slice(0,u),c*(h.length+1),450*(a.width-24)/750+70),l.fillText(f.slice(u,f.length),13,450*(a.width-24)/750+100),s=130),l.drawImage("../../images/pentacleforshowview.png",13,a.height/2-o/2,a.width-26,25),o=100*a.width/300}l.drawImage(t.qrCode,a.width/2-o/2,a.height-o-2*r-35,o,o),l.drawImage("../../images/footer.png",a.width/2-d/2,a.height-2*r,d,r),l.setFontSize(12),l.setFillStyle("#000000"),l.fillText(g,a.width/2-70,a.height-2*r-15),l.draw(),e(a.width,a.height,t.succ,t.erro)}).exec()},100)},drawShareImg:function(e,i,l){var h=wx.createCanvasContext("viewimg");setTimeout(function(){wx.createSelectorQuery().select("#view-img").fields({dataset:!0,size:!0},function(a){h.fillStyle="#FFFFFF",h.fillRect(0,0,a.width,a.height),h.drawImage(e,0,0,a.width,a.height-50),h.setFontSize(19),h.setFillStyle("#B80D0C"),h.fillText("查真假，用较真！",0,a.height-10),h.setFontSize(14),h.setFillStyle("#939393"),h.fillText("还可以搜索和提问 >",a.width-130,a.height-10),h.draw(!1,function(){t(a.width,a.height,i,l)})}).exec()},100)}}; 
 			}); 
		define("template/toast/toast.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t={0:{title:"收藏失败",status:0,desc:""},1:{title:"文章已收藏!",desc:'可在"我的-收藏"中查看',status:1},2:{title:"收藏失败",desc:"允许就能收藏哦!",status:0},3:{title:"已取消收藏",status:1,desc:""},4:{title:"取消收藏失败",status:0,desc:""},5:{title:"视频已收藏!",desc:'可在"我的-收藏"中查看',status:1},7:{title:"问题已收藏!",desc:'可在"我的-收藏"中查看',status:1},8:{title:"点赞失败",desc:"允许就能点赞哦!",status:0}};module.exports={toast:function(s,e){var a=e.type,i=e.params,u=i||t[a];s.setData({toastVisible:!0,toastTitle:u.title,toastDesc:u.desc,toastStatus:u.status});var l=null;l=setTimeout(function(){s.setData({toastVisible:!1,toastTitle:"",toastDesc:"",toastStatus:0}),clearTimeout(l)},1800)}}; 
 			}); 
		define("wxParse/html2json.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){for(var t={},r=e.split(","),s=0;s<r.length;s++)t[r[s]]=!0;return t}function t(e){return e.replace(/<\?xml.*\?>\n/,"").replace(/<.*!doctype.*\>\n/,"").replace(/<.*!DOCTYPE.*\>\n/,"")}function r(e){return e.replace(/\r?\n+/g,"").replace(/<!--.*?-->/gi,"").replace(/\/\*.*?\*\//gi,"").replace(/[ ]+</gi,"<")}function s(e){var t=[];if(0==n.length||!i)return(d={}).node="text",d.text=e,s=[d];e=e.replace(/\[([^\[\]]+)\]/g,":$1:");for(var r=new RegExp("[:]"),s=e.split(r),a=0;a<s.length;a++){var l=s[a],d={};i[l]?(d.node="element",d.tag="emoji",d.text=i[l],d.baseSrc=o):(d.node="text",d.text=l),t.push(d)}return t}var a="https",n="",o="",i={},l=require("./wxDiscode.js"),d=require("./htmlparser.js"),c=(e("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),e("br,a,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video")),u=e("abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),p=e("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");e("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),e("wxxxcode-style,script,style,view,scroll-view,block");module.exports={html2json:function(e,n){e=r(e=t(e)),e=l.strDiscode(e);var o=[],i={node:n,nodes:[],images:[],imageUrls:[]},g=0;return d(e,{start:function(e,t,r){var s={node:"element",tag:e};if(0===o.length?(s.index=g.toString(),g+=1):(void 0===(x=o[0]).nodes&&(x.nodes=[]),s.index=x.index+"."+x.nodes.length),c[e]?s.tagType="block":u[e]?s.tagType="inline":p[e]&&(s.tagType="closeSelf"),0!==t.length&&(s.attr=t.reduce(function(e,t){var r=t.name,a=t.value;return"class"==r&&(s.classStr=a),"style"==r&&(s.styleStr=a),a.match(/ /)&&(a=a.split(" ")),e[r]?Array.isArray(e[r])?e[r].push(a):e[r]=[e[r],a]:e[r]=a,e},{})),"img"===s.tag){s.imgIndex=i.images.length;var d=s.attr.src;""==d[0]&&d.splice(0,1),d=l.urlToHttpUrl(d,a),s.attr.src=d,s.from=n,i.images.push(s),i.imageUrls.push(d)}if("font"===s.tag){var m=["x-small","small","medium","large","x-large","xx-large","-webkit-xxx-large"],f={color:"color",face:"font-family",size:"font-size"};s.attr.style||(s.attr.style=[]),s.styleStr||(s.styleStr="");for(var h in f)if(s.attr[h]){var v="size"===h?m[s.attr[h]-1]:s.attr[h];s.attr.style.push(f[h]),s.attr.style.push(v),s.styleStr+=f[h]+": "+v+";"}}if("source"===s.tag&&(i.source=s.attr.src),r){var x=o[0]||i;void 0===x.nodes&&(x.nodes=[]),x.nodes.push(s)}else o.unshift(s)},end:function(e){var t=o.shift();if(t.tag!==e&&console.error("invalid state: mismatch end tag"),"video"===t.tag&&i.source&&(t.attr.src=i.source,delete i.source),0===o.length)i.nodes.push(t);else{var r=o[0];void 0===r.nodes&&(r.nodes=[]),r.nodes.push(t)}},chars:function(e){var t={node:"text",text:e,textArray:s(e)};if(0===o.length)t.index=g.toString(),g+=1,i.nodes.push(t);else{var r=o[0];void 0===r.nodes&&(r.nodes=[]),t.index=r.index+"."+r.nodes.length,r.nodes.push(t)}},comment:function(e){}}),i},emojisInit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/wxParse/emojis/",r=arguments[2];n=e,o=t,i=r}}; 
 			}); 
		define("wxParse/htmlparser.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){for(var t={},r=e.split(","),s=0;s<r.length;s++)t[r[s]]=!0;return t}var t=/^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,r=/^<\/([-A-Za-z0-9_]+)[^>]*>/,s=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,a=e("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),n=e("a,address,code,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),i=e("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),o=e("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),l=e("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),c=e("wxxxcode-style,script,style,view,scroll-view,block");module.exports=function(e,d){function f(e,t){if(t)for(t=t.toLowerCase(),r=b.length-1;r>=0&&b[r]!=t;r--);else var r=0;if(r>=0){for(var s=b.length-1;s>=r;s--)d.end&&d.end(b[s]);b.length=r}}var p,u,h,b=[],m=e;for(b.last=function(){return this[this.length-1]};e;){if(u=!0,b.last()&&c[b.last()])e=e.replace(new RegExp("([\\s\\S]*?)</"+b.last()+"[^>]*>"),function(e,t){return t=t.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),d.chars&&d.chars(t),""}),f(0,b.last());else if(0==e.indexOf("\x3c!--")?(p=e.indexOf("--\x3e"))>=0&&(d.comment&&d.comment(e.substring(4,p)),e=e.substring(p+3),u=!1):0==e.indexOf("</")?(h=e.match(r))&&(e=e.substring(h[0].length),h[0].replace(r,f),u=!1):0==e.indexOf("<")&&(h=e.match(t))&&(e=e.substring(h[0].length),h[0].replace(t,function(e,t,r,c){if(t=t.toLowerCase(),n[t])for(;b.last()&&i[b.last()];)f(0,b.last());if(o[t]&&b.last()==t&&f(0,t),(c=a[t]||!!c)||b.push(t),d.start){var p=[];r.replace(s,function(e,t){var r=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:l[t]?t:"";p.push({name:t,value:r,escaped:r.replace(/(^|[^\\])"/g,'$1\\"')})}),d.start&&d.start(t,p,c)}}),u=!1),u){p=e.indexOf("<");for(var g="";0===p;)g+="<",p=(e=e.substring(1)).indexOf("<");g+=p<0?e:e.substring(0,p),e=p<0?"":e.substring(p),d.chars&&d.chars(g)}if(e==m)throw"Parse Error: "+e;m=e}f()}; 
 			}); 
		define("wxParse/showdown.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){var r={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Specify a prefix to generated header ids",type:"string"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,description:"Tries to smartly fix identation in es6 strings",type:"boolean"}};if(!1===e)return JSON.parse(JSON.stringify(r));var t={};for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n].defaultValue);return t}function r(e,r){var t=r?"Error in "+r+" extension->":"Error in unnamed extension",a={valid:!0,error:""};s.helper.isArray(e)||(e=[e]);for(var o=0;o<e.length;++o){var i=t+" sub-extension "+o+": ",l=e[o];if("object"!==(void 0===l?"undefined":n(l)))return a.valid=!1,a.error=i+"must be an object, but "+(void 0===l?"undefined":n(l))+" given",a;if(!s.helper.isString(l.type))return a.valid=!1,a.error=i+'property "type" must be a string, but '+n(l.type)+" given",a;var c=l.type=l.type.toLowerCase();if("language"===c&&(c=l.type="lang"),"html"===c&&(c=l.type="output"),"lang"!==c&&"output"!==c&&"listener"!==c)return a.valid=!1,a.error=i+"type "+c+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',a;if("listener"===c){if(s.helper.isUndefined(l.listeners))return a.valid=!1,a.error=i+'. Extensions of type "listener" must have a property called "listeners"',a}else if(s.helper.isUndefined(l.filter)&&s.helper.isUndefined(l.regex))return a.valid=!1,a.error=i+c+' extensions must define either a "regex" property or a "filter" method',a;if(l.listeners){if("object"!==n(l.listeners))return a.valid=!1,a.error=i+'"listeners" property must be an object but '+n(l.listeners)+" given",a;for(var u in l.listeners)if(l.listeners.hasOwnProperty(u)&&"function"!=typeof l.listeners[u])return a.valid=!1,a.error=i+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+u+" must be a function but "+n(l.listeners[u])+" given",a}if(l.filter){if("function"!=typeof l.filter)return a.valid=!1,a.error=i+'"filter" must be a function, but '+n(l.filter)+" given",a}else if(l.regex){if(s.helper.isString(l.regex)&&(l.regex=new RegExp(l.regex,"g")),!l.regex instanceof RegExp)return a.valid=!1,a.error=i+'"regex" property must either be a string or a RegExp object, but '+n(l.regex)+" given",a;if(s.helper.isUndefined(l.replace))return a.valid=!1,a.error=i+'"regex" extensions must implement a replace string or function',a}}return a}function t(e,r){return"~E"+r.charCodeAt(0)+"E"}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s={},a={},o={},i=e(!0),l={github:{omitExtraWLInCodeBlocks:!0,prefixHeaderId:"user-content-",simplifiedAutoLink:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0},vanilla:e(!0)};s.helper={},s.extensions={},s.setOption=function(e,r){return i[e]=r,this},s.getOption=function(e){return i[e]},s.getOptions=function(){return i},s.resetOptions=function(){i=e(!0)},s.setFlavor=function(e){if(l.hasOwnProperty(e)){var r=l[e];for(var t in r)r.hasOwnProperty(t)&&(i[t]=r[t])}},s.getDefaultOptions=function(r){return e(r)},s.subParser=function(e,r){if(s.helper.isString(e)){if(void 0===r){if(a.hasOwnProperty(e))return a[e];throw Error("SubParser named "+e+" not registered!")}a[e]=r}},s.extension=function(e,t){if(!s.helper.isString(e))throw Error("Extension 'name' must be a string");if(e=s.helper.stdExtName(e),s.helper.isUndefined(t)){if(!o.hasOwnProperty(e))throw Error("Extension named "+e+" is not registered!");return o[e]}"function"==typeof t&&(t=t()),s.helper.isArray(t)||(t=[t]);var n=r(t,e);if(!n.valid)throw Error(n.error);o[e]=t},s.getAllExtensions=function(){return o},s.removeExtension=function(e){delete o[e]},s.resetExtensions=function(){o={}},s.validateExtension=function(e){var t=r(e,null);return!!t.valid||(console.warn(t.error),!1)},s.hasOwnProperty("helper")||(s.helper={}),s.helper.isString=function(e){return"string"==typeof e||e instanceof String},s.helper.isFunction=function(e){var r={};return e&&"[object Function]"===r.toString.call(e)},s.helper.forEach=function(e,r){if("function"==typeof e.forEach)e.forEach(r);else for(var t=0;t<e.length;t++)r(e[t],t,e)},s.helper.isArray=function(e){return e.constructor===Array},s.helper.isUndefined=function(e){return void 0===e},s.helper.stdExtName=function(e){return e.replace(/[_-]||\s/g,"").toLowerCase()},s.helper.escapeCharactersCallback=t,s.helper.escapeCharacters=function(e,r,n){var s="(["+r.replace(/([\[\]\\])/g,"\\$1")+"])";n&&(s="\\\\"+s);var a=new RegExp(s,"g");return e=e.replace(a,t)};var c=function(e,r,t,n){var s,a,o,i,l,c=n||"",u=c.indexOf("g")>-1,p=new RegExp(r+"|"+t,"g"+c.replace(/g/g,"")),h=new RegExp(r,c.replace(/g/g,"")),d=[];do{for(s=0;o=p.exec(e);)if(h.test(o[0]))s++||(i=(a=p.lastIndex)-o[0].length);else if(s&&!--s){l=o.index+o[0].length;var f={left:{start:i,end:a},match:{start:a,end:o.index},right:{start:o.index,end:l},wholeMatch:{start:i,end:l}};if(d.push(f),!u)return d}}while(s&&(p.lastIndex=a));return d};s.helper.matchRecursiveRegExp=function(e,r,t,n){for(var s=c(e,r,t,n),a=[],o=0;o<s.length;++o)a.push([e.slice(s[o].wholeMatch.start,s[o].wholeMatch.end),e.slice(s[o].match.start,s[o].match.end),e.slice(s[o].left.start,s[o].left.end),e.slice(s[o].right.start,s[o].right.end)]);return a},s.helper.replaceRecursiveRegExp=function(e,r,t,n,a){if(!s.helper.isFunction(r)){var o=r;r=function(){return o}}var i=c(e,t,n,a),l=e,u=i.length;if(u>0){var p=[];0!==i[0].wholeMatch.start&&p.push(e.slice(0,i[0].wholeMatch.start));for(var h=0;h<u;++h)p.push(r(e.slice(i[h].wholeMatch.start,i[h].wholeMatch.end),e.slice(i[h].match.start,i[h].match.end),e.slice(i[h].left.start,i[h].left.end),e.slice(i[h].right.start,i[h].right.end))),h<u-1&&p.push(e.slice(i[h].wholeMatch.end,i[h+1].wholeMatch.start));i[u-1].wholeMatch.end<e.length&&p.push(e.slice(i[u-1].wholeMatch.end)),l=p.join("")}return l},s.helper.isUndefined(console)&&(console={warn:function(e){alert(e)},log:function(e){alert(e)},error:function(e){throw e}}),s.Converter=function(e){function t(e,t){if(t=t||null,s.helper.isString(e)){if(e=s.helper.stdExtName(e),t=e,s.extensions[e])return console.warn("DEPRECATION WARNING: "+e+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),void a(s.extensions[e],e);if(s.helper.isUndefined(o[e]))throw Error('Extension "'+e+'" could not be loaded. It was either not found or is not a valid extension.');e=o[e]}"function"==typeof e&&(e=e()),s.helper.isArray(e)||(e=[e]);var n=r(e,t);if(!n.valid)throw Error(n.error);for(var i=0;i<e.length;++i){switch(e[i].type){case"lang":h.push(e[i]);break;case"output":d.push(e[i])}if(e[i].hasOwnProperty(f))for(var l in e[i].listeners)e[i].listeners.hasOwnProperty(l)&&c(l,e[i].listeners[l])}}function a(e,t){"function"==typeof e&&(e=e(new s.Converter)),s.helper.isArray(e)||(e=[e]);var n=r(e,t);if(!n.valid)throw Error(n.error);for(var a=0;a<e.length;++a)switch(e[a].type){case"lang":h.push(e[a]);break;case"output":d.push(e[a]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}}function c(e,r){if(!s.helper.isString(e))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+(void 0===e?"undefined":n(e))+" given");if("function"!=typeof r)throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+(void 0===r?"undefined":n(r))+" given");f.hasOwnProperty(e)||(f[e]=[]),f[e].push(r)}function u(e){var r=e.match(/^\s*/)[0].length,t=new RegExp("^\\s{0,"+r+"}","gm");return e.replace(t,"")}var p={},h=[],d=[],f={};!function(){e=e||{};for(var r in i)i.hasOwnProperty(r)&&(p[r]=i[r]);if("object"!==(void 0===e?"undefined":n(e)))throw Error("Converter expects the passed parameter to be an object, but "+(void 0===e?"undefined":n(e))+" was passed instead.");for(var a in e)e.hasOwnProperty(a)&&(p[a]=e[a]);p.extensions&&s.helper.forEach(p.extensions,t)}(),this._dispatch=function(e,r,t,n){if(f.hasOwnProperty(e))for(var s=0;s<f[e].length;++s){var a=f[e][s](e,r,this,t,n);a&&void 0!==a&&(r=a)}return r},this.listen=function(e,r){return c(e,r),this},this.makeHtml=function(e){if(!e)return e;var r={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:h,outputModifiers:d,converter:this,ghCodeBlocks:[]};return e=e.replace(/~/g,"~T"),e=e.replace(/\$/g,"~D"),e=e.replace(/\r\n/g,"\n"),e=e.replace(/\r/g,"\n"),p.smartIndentationFix&&(e=u(e)),e=e,e=s.subParser("detab")(e,p,r),e=s.subParser("stripBlankLines")(e,p,r),s.helper.forEach(h,function(t){e=s.subParser("runExtension")(t,e,p,r)}),e=s.subParser("hashPreCodeTags")(e,p,r),e=s.subParser("githubCodeBlocks")(e,p,r),e=s.subParser("hashHTMLBlocks")(e,p,r),e=s.subParser("hashHTMLSpans")(e,p,r),e=s.subParser("stripLinkDefinitions")(e,p,r),e=s.subParser("blockGamut")(e,p,r),e=s.subParser("unhashHTMLSpans")(e,p,r),e=s.subParser("unescapeSpecialChars")(e,p,r),e=e.replace(/~D/g,"$$"),e=e.replace(/~T/g,"~"),s.helper.forEach(d,function(t){e=s.subParser("runExtension")(t,e,p,r)}),e},this.setOption=function(e,r){p[e]=r},this.getOption=function(e){return p[e]},this.getOptions=function(){return p},this.addExtension=function(e,r){t(e,r=r||null)},this.useExtension=function(e){t(e)},this.setFlavor=function(e){if(l.hasOwnProperty(e)){var r=l[e];for(var t in r)r.hasOwnProperty(t)&&(p[t]=r[t])}},this.removeExtension=function(e){s.helper.isArray(e)||(e=[e]);for(var r=0;r<e.length;++r){for(var t=e[r],n=0;n<h.length;++n)h[n]===t&&h[n].splice(n,1);for(;0<d.length;++n)d[0]===t&&d[0].splice(n,1)}},this.getAllExtensions=function(){return{language:h,output:d}}},s.subParser("anchors",function(e,r,t){var n=function(e,r,n,a,o,i,l,c){s.helper.isUndefined(c)&&(c=""),e=r;var u=n,p=a.toLowerCase(),h=o,d=c;if(!h)if(p||(p=u.toLowerCase().replace(/ ?\n/g," ")),h="#"+p,s.helper.isUndefined(t.gUrls[p])){if(!(e.search(/\(\s*\)$/m)>-1))return e;h=""}else h=t.gUrls[p],s.helper.isUndefined(t.gTitles[p])||(d=t.gTitles[p]);var f='<a href="'+(h=s.helper.escapeCharacters(h,"*_",!1))+'"';return""!==d&&null!==d&&(d=d.replace(/"/g,"&quot;"),f+=' title="'+(d=s.helper.escapeCharacters(d,"*_",!1))+'"'),f+=">"+u+"</a>"};return e=(e=t.converter._dispatch("anchors.before",e,r,t)).replace(/(\[((?:\[[^\]]*]|[^\[\]])*)][ ]?(?:\n[ ]*)?\[(.*?)])()()()()/g,n),e=e.replace(/(\[((?:\[[^\]]*]|[^\[\]])*)]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,n),e=e.replace(/(\[([^\[\]]+)])()()()()()/g,n),e=t.converter._dispatch("anchors.after",e,r,t)}),s.subParser("autoLinks",function(e,r,t){function n(e,r){var t=r;return/^www\./i.test(r)&&(r=r.replace(/^www\./i,"http://www.")),'<a href="'+r+'">'+t+"</a>"}function a(e,r){var t=s.subParser("unescapeSpecialChars")(r);return s.subParser("encodeEmailAddress")(t)}var o=/\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+)(?=\s|$)(?!["<>])/gi,i=/<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)>/gi,l=/(?:^|[ \n\t])([A-Za-z0-9!#$%&'*+-/=?^_`\{|}~\.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?:$|[ \n\t])/gi,c=/<(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi;return e=(e=t.converter._dispatch("autoLinks.before",e,r,t)).replace(i,n),e=e.replace(c,a),r.simplifiedAutoLink&&(e=(e=e.replace(o,n)).replace(l,a)),e=t.converter._dispatch("autoLinks.after",e,r,t)}),s.subParser("blockGamut",function(e,r,t){e=t.converter._dispatch("blockGamut.before",e,r,t),e=s.subParser("blockQuotes")(e,r,t),e=s.subParser("headers")(e,r,t);var n=s.subParser("hashBlock")("<hr />",r,t);return e=e.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,n),e=e.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm,n),e=e.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm,n),e=s.subParser("lists")(e,r,t),e=s.subParser("codeBlocks")(e,r,t),e=s.subParser("tables")(e,r,t),e=s.subParser("hashHTMLBlocks")(e,r,t),e=s.subParser("paragraphs")(e,r,t),e=t.converter._dispatch("blockGamut.after",e,r,t)}),s.subParser("blockQuotes",function(e,r,t){return e=t.converter._dispatch("blockQuotes.before",e,r,t),e=e.replace(/((^[ \t]{0,3}>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(e,n){var a=n;return a=a.replace(/^[ \t]*>[ \t]?/gm,"~0"),a=a.replace(/~0/g,""),a=a.replace(/^[ \t]+$/gm,""),a=s.subParser("githubCodeBlocks")(a,r,t),a=s.subParser("blockGamut")(a,r,t),a=a.replace(/(^|\n)/g,"$1  "),a=a.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(e,r){var t=r;return t=t.replace(/^  /gm,"~0"),t=t.replace(/~0/g,"")}),s.subParser("hashBlock")("<blockquote>\n"+a+"\n</blockquote>",r,t)}),e=t.converter._dispatch("blockQuotes.after",e,r,t)}),s.subParser("codeBlocks",function(e,r,t){e=t.converter._dispatch("codeBlocks.before",e,r,t);var n=/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g;return e=(e+="~0").replace(n,function(e,n,a){var o=n,i=a,l="\n";return o=s.subParser("outdent")(o),o=s.subParser("encodeCode")(o),o=s.subParser("detab")(o),o=o.replace(/^\n+/g,""),o=o.replace(/\n+$/g,""),r.omitExtraWLInCodeBlocks&&(l=""),o="<pre><code>"+o+l+"</code></pre>",s.subParser("hashBlock")(o,r,t)+i}),e=e.replace(/~0/,""),e=t.converter._dispatch("codeBlocks.after",e,r,t)}),s.subParser("codeSpans",function(e,r,t){return void 0===(e=t.converter._dispatch("codeSpans.before",e,r,t))&&(e=""),e=e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(e,r,t,n){var a=n;return a=a.replace(/^([ \t]*)/g,""),a=a.replace(/[ \t]*$/g,""),a=s.subParser("encodeCode")(a),r+"<code>"+a+"</code>"}),e=t.converter._dispatch("codeSpans.after",e,r,t)}),s.subParser("detab",function(e){return e=e.replace(/\t(?=\t)/g,"    "),e=e.replace(/\t/g,"~A~B"),e=e.replace(/~B(.+?)~A/g,function(e,r){for(var t=r,n=4-t.length%4,s=0;s<n;s++)t+=" ";return t}),e=e.replace(/~A/g,"    "),e=e.replace(/~B/g,"")}),s.subParser("encodeAmpsAndAngles",function(e){return e=e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),e=e.replace(/<(?![a-z\/?\$!])/gi,"&lt;")}),s.subParser("encodeBackslashEscapes",function(e){return e=e.replace(/\\(\\)/g,s.helper.escapeCharactersCallback),e=e.replace(/\\([`*_{}\[\]()>#+-.!])/g,s.helper.escapeCharactersCallback)}),s.subParser("encodeCode",function(e){return e=e.replace(/&/g,"&amp;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=s.helper.escapeCharacters(e,"*_{}[]\\",!1)}),s.subParser("encodeEmailAddress",function(e){var r=[function(e){return"&#"+e.charCodeAt(0)+";"},function(e){return"&#x"+e.charCodeAt(0).toString(16)+";"},function(e){return e}];return e="mailto:"+e,e=e.replace(/./g,function(e){if("@"===e)e=r[Math.floor(2*Math.random())](e);else if(":"!==e){var t=Math.random();e=t>.9?r[2](e):t>.45?r[1](e):r[0](e)}return e}),e='<a href="'+e+'">'+e+"</a>",e=e.replace(/">.+:/g,'">')}),s.subParser("escapeSpecialCharsWithinTagAttributes",function(e){var r=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;return e=e.replace(r,function(e){var r=e.replace(/(.)<\/?code>(?=.)/g,"$1`");return r=s.helper.escapeCharacters(r,"\\`*_",!1)})}),s.subParser("githubCodeBlocks",function(e,r,t){return r.ghCodeBlocks?(e=t.converter._dispatch("githubCodeBlocks.before",e,r,t),e+="~0",e=e.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g,function(e,n,a){var o=r.omitExtraWLInCodeBlocks?"":"\n";return a=s.subParser("encodeCode")(a),a=s.subParser("detab")(a),a=a.replace(/^\n+/g,""),a=a.replace(/\n+$/g,""),a="<pre><code"+(n?' class="'+n+" language-"+n+'"':"")+">"+a+o+"</code></pre>",a=s.subParser("hashBlock")(a,r,t),"\n\n~G"+(t.ghCodeBlocks.push({text:e,codeblock:a})-1)+"G\n\n"}),e=e.replace(/~0/,""),t.converter._dispatch("githubCodeBlocks.after",e,r,t)):e}),s.subParser("hashBlock",function(e,r,t){return e=e.replace(/(^\n+|\n+$)/g,""),"\n\n~K"+(t.gHtmlBlocks.push(e)-1)+"K\n\n"}),s.subParser("hashElement",function(e,r,t){return function(e,r){var n=r;return n=n.replace(/\n\n/g,"\n"),n=n.replace(/^\n/,""),n=n.replace(/\n+$/g,""),n="\n\n~K"+(t.gHtmlBlocks.push(n)-1)+"K\n\n"}}),s.subParser("hashHTMLBlocks",function(e,r,t){for(var n=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"],a=0;a<n.length;++a)e=s.helper.replaceRecursiveRegExp(e,function(e,r,n,s){var a=e;return-1!==n.search(/\bmarkdown\b/)&&(a=n+t.converter.makeHtml(r)+s),"\n\n~K"+(t.gHtmlBlocks.push(a)-1)+"K\n\n"},"^(?: |\\t){0,3}<"+n[a]+"\\b[^>]*>","</"+n[a]+">","gim");return e=e.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,s.subParser("hashElement")(e,r,t)),e=e.replace(/(<!--[\s\S]*?-->)/g,s.subParser("hashElement")(e,r,t)),e=e.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,s.subParser("hashElement")(e,r,t))}),s.subParser("hashHTMLSpans",function(e,r,t){for(var n=s.helper.matchRecursiveRegExp(e,"<code\\b[^>]*>","</code>","gi"),a=0;a<n.length;++a)e=e.replace(n[a][0],"~L"+(t.gHtmlSpans.push(n[a][0])-1)+"L");return e}),s.subParser("unhashHTMLSpans",function(e,r,t){for(var n=0;n<t.gHtmlSpans.length;++n)e=e.replace("~L"+n+"L",t.gHtmlSpans[n]);return e}),s.subParser("hashPreCodeTags",function(e,r,t){return e=s.helper.replaceRecursiveRegExp(e,function(e,r,n,a){var o=n+s.subParser("encodeCode")(r)+a;return"\n\n~G"+(t.ghCodeBlocks.push({text:e,codeblock:o})-1)+"G\n\n"},"^(?: |\\t){0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^(?: |\\t){0,3}</code>\\s*</pre>","gim")}),s.subParser("headers",function(e,r,t){function n(e){var r,n=e.replace(/[^\w]/g,"").toLowerCase();return t.hashLinkCounts[n]?r=n+"-"+t.hashLinkCounts[n]++:(r=n,t.hashLinkCounts[n]=1),!0===a&&(a="section"),s.helper.isString(a)?a+r:r}e=t.converter._dispatch("headers.before",e,r,t);var a=r.prefixHeaderId,o=isNaN(parseInt(r.headerLevelStart))?1:parseInt(r.headerLevelStart),i=r.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,l=r.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm;return e=e.replace(i,function(e,a){var i=s.subParser("spanGamut")(a,r,t),l=r.noHeaderId?"":' id="'+n(a)+'"',c=o,u="<h"+c+l+">"+i+"</h"+c+">";return s.subParser("hashBlock")(u,r,t)}),e=e.replace(l,function(e,a){var i=s.subParser("spanGamut")(a,r,t),l=r.noHeaderId?"":' id="'+n(a)+'"',c=o+1,u="<h"+c+l+">"+i+"</h"+c+">";return s.subParser("hashBlock")(u,r,t)}),e=e.replace(/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm,function(e,a,i){var l=s.subParser("spanGamut")(i,r,t),c=r.noHeaderId?"":' id="'+n(i)+'"',u=o-1+a.length,p="<h"+u+c+">"+l+"</h"+u+">";return s.subParser("hashBlock")(p,r,t)}),e=t.converter._dispatch("headers.after",e,r,t)}),s.subParser("images",function(e,r,t){function n(e,r,n,a,o,i,l,c){var u=t.gUrls,p=t.gTitles,h=t.gDimensions;if(n=n.toLowerCase(),c||(c=""),""===a||null===a){if(""!==n&&null!==n||(n=r.toLowerCase().replace(/ ?\n/g," ")),a="#"+n,s.helper.isUndefined(u[n]))return e;a=u[n],s.helper.isUndefined(p[n])||(c=p[n]),s.helper.isUndefined(h[n])||(o=h[n].width,i=h[n].height)}r=r.replace(/"/g,"&quot;"),r=s.helper.escapeCharacters(r,"*_",!1);var d='<img src="'+(a=s.helper.escapeCharacters(a,"*_",!1))+'" alt="'+r+'"';return c&&(c=c.replace(/"/g,"&quot;"),d+=' title="'+(c=s.helper.escapeCharacters(c,"*_",!1))+'"'),o&&i&&(d+=' width="'+(o="*"===o?"auto":o)+'"',d+=' height="'+(i="*"===i?"auto":i)+'"'),d+=" />"}var a=/!\[(.*?)]\s?\([ \t]*()<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(['"])(.*?)\6[ \t]*)?\)/g,o=/!\[([^\]]*?)] ?(?:\n *)?\[(.*?)]()()()()()/g;return e=(e=t.converter._dispatch("images.before",e,r,t)).replace(o,n),e=e.replace(a,n),e=t.converter._dispatch("images.after",e,r,t)}),s.subParser("italicsAndBold",function(e,r,t){return e=t.converter._dispatch("italicsAndBold.before",e,r,t),e=r.literalMidWordUnderscores?(e=(e=(e=e.replace(/(^|\s|>|\b)__(?=\S)([\s\S]+?)__(?=\b|<|\s|$)/gm,"$1<strong>$2</strong>")).replace(/(^|\s|>|\b)_(?=\S)([\s\S]+?)_(?=\b|<|\s|$)/gm,"$1<em>$2</em>")).replace(/(\*\*)(?=\S)([^\r]*?\S[*]*)\1/g,"<strong>$2</strong>")).replace(/(\*)(?=\S)([^\r]*?\S)\1/g,"<em>$2</em>"):(e=e.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g,"<strong>$2</strong>")).replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g,"<em>$2</em>"),e=t.converter._dispatch("italicsAndBold.after",e,r,t)}),s.subParser("lists",function(e,r,t){function n(e,n){t.gListLevel++,e=e.replace(/\n{2,}$/,"\n"),e+="~0";var a=/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm,o=/\n[ \t]*\n(?!~0)/.test(e);return e=e.replace(a,function(e,n,a,i,l,c,u){u=u&&""!==u.trim();var p=s.subParser("outdent")(l,r,t),h="";return c&&r.tasklists&&(h=' class="task-list-item" style="list-style-type: none;"',p=p.replace(/^[ \t]*\[(x|X| )?]/m,function(){var e='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return u&&(e+=" checked"),e+=">"})),n||p.search(/\n{2,}/)>-1?(p=s.subParser("githubCodeBlocks")(p,r,t),p=s.subParser("blockGamut")(p,r,t)):(p=(p=s.subParser("lists")(p,r,t)).replace(/\n$/,""),p=o?s.subParser("paragraphs")(p,r,t):s.subParser("spanGamut")(p,r,t)),p="\n<li"+h+">"+p+"</li>\n"}),e=e.replace(/~0/g,""),t.gListLevel--,n&&(e=e.replace(/\s+$/,"")),e}function a(e,r,t){var s="ul"===r?/^ {0,2}\d+\.[ \t]/gm:/^ {0,2}[*+-][ \t]/gm,a=[],o="";if(-1!==e.search(s)){!function e(a){var i=a.search(s);-1!==i?(o+="\n\n<"+r+">"+n(a.slice(0,i),!!t)+"</"+r+">\n\n",s="ul"===(r="ul"===r?"ol":"ul")?/^ {0,2}\d+\.[ \t]/gm:/^ {0,2}[*+-][ \t]/gm,e(a.slice(i))):o+="\n\n<"+r+">"+n(a,!!t)+"</"+r+">\n\n"}(e);for(var i=0;i<a.length;++i);}else o="\n\n<"+r+">"+n(e,!!t)+"</"+r+">\n\n";return o}e=t.converter._dispatch("lists.before",e,r,t),e+="~0";var o=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;return t.gListLevel?e=e.replace(o,function(e,r,t){return a(r,t.search(/[*+-]/g)>-1?"ul":"ol",!0)}):(o=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,e=e.replace(o,function(e,r,t,n){return a(t,n.search(/[*+-]/g)>-1?"ul":"ol")})),e=e.replace(/~0/,""),e=t.converter._dispatch("lists.after",e,r,t)}),s.subParser("outdent",function(e){return e=e.replace(/^(\t|[ ]{1,4})/gm,"~0"),e=e.replace(/~0/g,"")}),s.subParser("paragraphs",function(e,r,t){for(var n=(e=(e=(e=t.converter._dispatch("paragraphs.before",e,r,t)).replace(/^\n+/g,"")).replace(/\n+$/g,"")).split(/\n{2,}/g),a=[],o=n.length,i=0;i<o;i++){var l=n[i];l.search(/~(K|G)(\d+)\1/g)>=0?a.push(l):(l=(l=s.subParser("spanGamut")(l,r,t)).replace(/^([ \t]*)/g,"<p>"),l+="</p>",a.push(l))}for(o=a.length,i=0;i<o;i++){for(var c="",u=a[i],p=!1;u.search(/~(K|G)(\d+)\1/)>=0;){var h=RegExp.$1,d=RegExp.$2;c=(c="K"===h?t.gHtmlBlocks[d]:p?s.subParser("encodeCode")(t.ghCodeBlocks[d].text):t.ghCodeBlocks[d].codeblock).replace(/\$/g,"$$$$"),u=u.replace(/(\n\n)?~(K|G)\d+\2(\n\n)?/,c),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(u)&&(p=!0)}a[i]=u}return e=a.join("\n\n"),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,""),t.converter._dispatch("paragraphs.after",e,r,t)}),s.subParser("runExtension",function(e,r,t,n){if(e.filter)r=e.filter(r,n.converter,t);else if(e.regex){var s=e.regex;!s instanceof RegExp&&(s=new RegExp(s,"g")),r=r.replace(s,e.replace)}return r}),s.subParser("spanGamut",function(e,r,t){return e=t.converter._dispatch("spanGamut.before",e,r,t),e=s.subParser("codeSpans")(e,r,t),e=s.subParser("escapeSpecialCharsWithinTagAttributes")(e,r,t),e=s.subParser("encodeBackslashEscapes")(e,r,t),e=s.subParser("images")(e,r,t),e=s.subParser("anchors")(e,r,t),e=s.subParser("autoLinks")(e,r,t),e=s.subParser("encodeAmpsAndAngles")(e,r,t),e=s.subParser("italicsAndBold")(e,r,t),e=s.subParser("strikethrough")(e,r,t),e=e.replace(/  +\n/g," <br />\n"),e=t.converter._dispatch("spanGamut.after",e,r,t)}),s.subParser("strikethrough",function(e,r,t){return r.strikethrough&&(e=(e=t.converter._dispatch("strikethrough.before",e,r,t)).replace(/(?:~T){2}([\s\S]+?)(?:~T){2}/g,"<del>$1</del>"),e=t.converter._dispatch("strikethrough.after",e,r,t)),e}),s.subParser("stripBlankLines",function(e){return e.replace(/^[ \t]+$/gm,"")}),s.subParser("stripLinkDefinitions",function(e,r,t){var n=/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=~0))/gm;return e+="~0",e=e.replace(n,function(e,n,a,o,i,l,c){return n=n.toLowerCase(),t.gUrls[n]=s.subParser("encodeAmpsAndAngles")(a),l?l+c:(c&&(t.gTitles[n]=c.replace(/"|'/g,"&quot;")),r.parseImgDimensions&&o&&i&&(t.gDimensions[n]={width:o,height:i}),"")}),e=e.replace(/~0/,"")}),s.subParser("tables",function(e,r,t){function n(e){return/^:[ \t]*--*$/.test(e)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(e)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(e)?' style="text-align:center;"':""}function a(e,n){var a="";return e=e.trim(),r.tableHeaderId&&(a=' id="'+e.replace(/ /g,"_").toLowerCase()+'"'),e=s.subParser("spanGamut")(e,r,t),"<th"+a+n+">"+e+"</th>\n"}function o(e,n){return"<td"+n+">"+s.subParser("spanGamut")(e,r,t)+"</td>\n"}function i(e,r){for(var t="<table>\n<thead>\n<tr>\n",n=e.length,s=0;s<n;++s)t+=e[s];for(t+="</tr>\n</thead>\n<tbody>\n",s=0;s<r.length;++s){t+="<tr>\n";for(var a=0;a<n;++a)t+=r[s][a];t+="</tr>\n"}return t+="</tbody>\n</table>\n"}if(!r.tables)return e;var l=/^[ \t]{0,3}\|?.+\|.+\n[ \t]{0,3}\|?[ \t]*:?[ \t]*(?:-|=){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:-|=){2,}[\s\S]+?(?:\n\n|~0)/gm;return e=t.converter._dispatch("tables.before",e,r,t),e=e.replace(l,function(e){var r,t=e.split("\n");for(r=0;r<t.length;++r)/^[ \t]{0,3}\|/.test(t[r])&&(t[r]=t[r].replace(/^[ \t]{0,3}\|/,"")),/\|[ \t]*$/.test(t[r])&&(t[r]=t[r].replace(/\|[ \t]*$/,""));var l=t[0].split("|").map(function(e){return e.trim()}),c=t[1].split("|").map(function(e){return e.trim()}),u=[],p=[],h=[],d=[];for(t.shift(),t.shift(),r=0;r<t.length;++r)""!==t[r].trim()&&u.push(t[r].split("|").map(function(e){return e.trim()}));if(l.length<c.length)return e;for(r=0;r<c.length;++r)h.push(n(c[r]));for(r=0;r<l.length;++r)s.helper.isUndefined(h[r])&&(h[r]=""),p.push(a(l[r],h[r]));for(r=0;r<u.length;++r){for(var f=[],g=0;g<p.length;++g)s.helper.isUndefined(u[r][g]),f.push(o(u[r][g],h[g]));d.push(f)}return i(p,d)}),e=t.converter._dispatch("tables.after",e,r,t)}),s.subParser("unescapeSpecialChars",function(e){return e=e.replace(/~E(\d+)E/g,function(e,r){var t=parseInt(r);return String.fromCharCode(t)})}),module.exports=s; 
 			}); 
		define("wxParse/wxDiscode.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e=e.replace(/&forall;/g,"∀"),e=e.replace(/&part;/g,"∂"),e=e.replace(/&exists;/g,"∃"),e=e.replace(/&empty;/g,"∅"),e=e.replace(/&nabla;/g,"∇"),e=e.replace(/&isin;/g,"∈"),e=e.replace(/&notin;/g,"∉"),e=e.replace(/&ni;/g,"∋"),e=e.replace(/&prod;/g,"∏"),e=e.replace(/&sum;/g,"∑"),e=e.replace(/&minus;/g,"−"),e=e.replace(/&lowast;/g,"∗"),e=e.replace(/&radic;/g,"√"),e=e.replace(/&prop;/g,"∝"),e=e.replace(/&infin;/g,"∞"),e=e.replace(/&ang;/g,"∠"),e=e.replace(/&and;/g,"∧"),e=e.replace(/&or;/g,"∨"),e=e.replace(/&cap;/g,"∩"),e=e.replace(/&cap;/g,"∪"),e=e.replace(/&int;/g,"∫"),e=e.replace(/&there4;/g,"∴"),e=e.replace(/&sim;/g,"∼"),e=e.replace(/&cong;/g,"≅"),e=e.replace(/&asymp;/g,"≈"),e=e.replace(/&ne;/g,"≠"),e=e.replace(/&le;/g,"≤"),e=e.replace(/&ge;/g,"≥"),e=e.replace(/&sub;/g,"⊂"),e=e.replace(/&sup;/g,"⊃"),e=e.replace(/&nsub;/g,"⊄"),e=e.replace(/&sube;/g,"⊆"),e=e.replace(/&supe;/g,"⊇"),e=e.replace(/&oplus;/g,"⊕"),e=e.replace(/&otimes;/g,"⊗"),e=e.replace(/&perp;/g,"⊥"),e=e.replace(/&sdot;/g,"⋅")}function a(e){return e=e.replace(/&Alpha;/g,"Α"),e=e.replace(/&Beta;/g,"Β"),e=e.replace(/&Gamma;/g,"Γ"),e=e.replace(/&Delta;/g,"Δ"),e=e.replace(/&Epsilon;/g,"Ε"),e=e.replace(/&Zeta;/g,"Ζ"),e=e.replace(/&Eta;/g,"Η"),e=e.replace(/&Theta;/g,"Θ"),e=e.replace(/&Iota;/g,"Ι"),e=e.replace(/&Kappa;/g,"Κ"),e=e.replace(/&Lambda;/g,"Λ"),e=e.replace(/&Mu;/g,"Μ"),e=e.replace(/&Nu;/g,"Ν"),e=e.replace(/&Xi;/g,"Ν"),e=e.replace(/&Omicron;/g,"Ο"),e=e.replace(/&Pi;/g,"Π"),e=e.replace(/&Rho;/g,"Ρ"),e=e.replace(/&Sigma;/g,"Σ"),e=e.replace(/&Tau;/g,"Τ"),e=e.replace(/&Upsilon;/g,"Υ"),e=e.replace(/&Phi;/g,"Φ"),e=e.replace(/&Chi;/g,"Χ"),e=e.replace(/&Psi;/g,"Ψ"),e=e.replace(/&Omega;/g,"Ω"),e=e.replace(/&alpha;/g,"α"),e=e.replace(/&beta;/g,"β"),e=e.replace(/&gamma;/g,"γ"),e=e.replace(/&delta;/g,"δ"),e=e.replace(/&epsilon;/g,"ε"),e=e.replace(/&zeta;/g,"ζ"),e=e.replace(/&eta;/g,"η"),e=e.replace(/&theta;/g,"θ"),e=e.replace(/&iota;/g,"ι"),e=e.replace(/&kappa;/g,"κ"),e=e.replace(/&lambda;/g,"λ"),e=e.replace(/&mu;/g,"μ"),e=e.replace(/&nu;/g,"ν"),e=e.replace(/&xi;/g,"ξ"),e=e.replace(/&omicron;/g,"ο"),e=e.replace(/&pi;/g,"π"),e=e.replace(/&rho;/g,"ρ"),e=e.replace(/&sigmaf;/g,"ς"),e=e.replace(/&sigma;/g,"σ"),e=e.replace(/&tau;/g,"τ"),e=e.replace(/&upsilon;/g,"υ"),e=e.replace(/&phi;/g,"φ"),e=e.replace(/&chi;/g,"χ"),e=e.replace(/&psi;/g,"ψ"),e=e.replace(/&omega;/g,"ω"),e=e.replace(/&thetasym;/g,"ϑ"),e=e.replace(/&upsih;/g,"ϒ"),e=e.replace(/&piv;/g,"ϖ"),e=e.replace(/&middot;/g,"·")}function r(e){return e=e.replace(/&nbsp;/g," "),e=e.replace(/&quot;/g,"'"),e=e.replace(/&amp;/g,"&"),e=e.replace(/&lt;/g,"<"),e=e.replace(/&gt;/g,">"),e=e.replace(/&#8226;/g,"•")}function l(e){return e=e.replace(/&OElig;/g,"Œ"),e=e.replace(/&oelig;/g,"œ"),e=e.replace(/&Scaron;/g,"Š"),e=e.replace(/&scaron;/g,"š"),e=e.replace(/&Yuml;/g,"Ÿ"),e=e.replace(/&fnof;/g,"ƒ"),e=e.replace(/&circ;/g,"ˆ"),e=e.replace(/&tilde;/g,"˜"),e=e.replace(/&ensp;/g,""),e=e.replace(/&emsp;/g,""),e=e.replace(/&thinsp;/g,""),e=e.replace(/&zwnj;/g,""),e=e.replace(/&zwj;/g,""),e=e.replace(/&lrm;/g,""),e=e.replace(/&rlm;/g,""),e=e.replace(/&ndash;/g,"–"),e=e.replace(/&mdash;/g,"—"),e=e.replace(/&lsquo;/g,"‘"),e=e.replace(/&rsquo;/g,"’"),e=e.replace(/&sbquo;/g,"‚"),e=e.replace(/&ldquo;/g,"“"),e=e.replace(/&rdquo;/g,"”"),e=e.replace(/&bdquo;/g,"„"),e=e.replace(/&dagger;/g,"†"),e=e.replace(/&Dagger;/g,"‡"),e=e.replace(/&bull;/g,"•"),e=e.replace(/&hellip;/g,"…"),e=e.replace(/&permil;/g,"‰"),e=e.replace(/&prime;/g,"′"),e=e.replace(/&Prime;/g,"″"),e=e.replace(/&lsaquo;/g,"‹"),e=e.replace(/&rsaquo;/g,"›"),e=e.replace(/&oline;/g,"‾"),e=e.replace(/&euro;/g,"€"),e=e.replace(/&trade;/g,"™"),e=e.replace(/&larr;/g,"←"),e=e.replace(/&uarr;/g,"↑"),e=e.replace(/&rarr;/g,"→"),e=e.replace(/&darr;/g,"↓"),e=e.replace(/&harr;/g,"↔"),e=e.replace(/&crarr;/g,"↵"),e=e.replace(/&lceil;/g,"⌈"),e=e.replace(/&rceil;/g,"⌉"),e=e.replace(/&lfloor;/g,"⌊"),e=e.replace(/&rfloor;/g,"⌋"),e=e.replace(/&loz;/g,"◊"),e=e.replace(/&spades;/g,"♠"),e=e.replace(/&clubs;/g,"♣"),e=e.replace(/&hearts;/g,"♥"),e=e.replace(/&diams;/g,"♦"),e=e.replace(/&#39;/g,"'")}function p(e){return e=e.replace(/\r\n/g,""),e=e.replace(/\n/g,""),e=e.replace(/code/g,"wxxxcode-style")}module.exports={strDiscode:function(c){return c=e(c),c=a(c),c=r(c),c=l(c),c=p(c)},urlToHttpUrl:function(e,a){return new RegExp("^//").test(e)&&(e=a+":"+e),e}}; 
 			}); 
		define("wxParse/wxParse.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function a(e){var t=this,a=e.target.dataset.src,i=e.target.dataset.from;void 0!==i&&i.length>0&&wx.previewImage({current:a,urls:t.data[i].imageUrls})}function i(e){var t=this,a=e.target.dataset.from,i=e.target.dataset.idx;void 0!==a&&a.length>0&&r(e,i,t,a)}function r(e,a,i,r){var d,o=i.data[r];if(o&&0!=o.images.length){var s=o.images,l=n(e.detail.width,e.detail.height,i,r),g=s[a].index,h=""+r,m=!0,u=!1,v=void 0;try{for(var f,w=g.split(".")[Symbol.iterator]();!(m=(f=w.next()).done);m=!0)h+=".nodes["+f.value+"]"}catch(e){u=!0,v=e}finally{try{!m&&w.return&&w.return()}finally{if(u)throw v}}var c=h+".width",x=h+".height";i.setData((d={},t(d,c,l.imageWidth),t(d,x,l.imageheight),d))}}function n(e,t,a,i){var r=0,n=0,d=0,o={},g=a.data[i].view.imagePadding;return r=s-2*g,l,e>r?(d=(n=r)*t/e,o.imageWidth=n,o.imageheight=d):(o.imageWidth=e,o.imageheight=t),o}var d=e(require("./showdown.js")),o=e(require("./html2json.js")),s=0,l=0;wx.getSystemInfo({success:function(e){s=e.windowWidth,l=e.windowHeight}}),module.exports={wxParse:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"wxParseData",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"html",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'<div class="color:red;">数据不能为空</div>',n=arguments[3],s=arguments[4],l=n,g={};if("html"==t)g=o.default.html2json(r,e);else if("md"==t||"markdown"==t){var h=(new d.default.Converter).makeHtml(r);g=o.default.html2json(h,e)}g.view={},g.view.imagePadding=0,void 0!==s&&(g.view.imagePadding=s);var m={};m[e]=g,l.setData(m),l.wxParseImgLoad=i,l.wxParseImgTap=a},wxParseTemArray:function(e,t,a,i){for(var r=[],n=i.data,d=null,o=0;o<a;o++){var s=n[t+o].nodes;r.push(s)}e=e||"wxParseTemArray",(d=JSON.parse('{"'+e+'":""}'))[e]=r,i.setData(d)},emojisInit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/wxParse/emojis/",a=arguments[2];o.default.emojisInit(e,t,a)}}; 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("js/mta_analysis.js"),a=(require("js/fetch.js"),require("js/login.js")),o=require("template/toast/toast.js"),e=require("template/modal/modal.js");App({onLaunch:function(o){var e=this;t.App.init({appID:"500622911",eventID:"500622912",statPullDownFresh:!0,statShareApp:!0,statReachBottom:!0}),this.globalData.scene=o.scene,this.globalData.query=o.query,wx.getStorageSync("openid")?a():a(null,!0),wx.getSystemInfo({success:function(t){/(iPhone X|iPhone XS|Redmi 6 Pro|ZenFone5ZenFone5|novs3e|OPPO R15|OPPO A3|VIVO X21|VIVO Y85|VIVO V9 youth|HUAWEI P20 Pro|honor10)/i.test(t.model)?(e.globalData.navigationHeight=95,e.globalData.navigationTitleTop=50,e.globalData.navigationBottom=27):(e.globalData.navigationHeight=72,e.globalData.navigationTitleTop=30,e.globalData.navigationBottom=0)}})},globalData:{userInfo:null,showToast:o.toast,showModal:e.modal,relogin:a,tipCount:0,targetid:"2255096476"}}); 
 			}); 	require("app.js");
 		__wxRoute = 'components/article/article';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/article/article.js';	define("components/article/article.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return t&&t.__esModule?t:{default:t}}var e=t(require("../../js/fetch")),a=t(require("../../js/update_page_list.js")),n=require("../../js/mta_analysis.js"),l=getApp().globalData;Component({properties:{data:{type:Object,value:{}},source:{type:String,value:""},userinfo:{type:Object,value:{}},channelid:{type:Number,value:0},index:{type:Number,value:0},extstyle:{type:String,value:""}},data:{itemstyle:{fake:{style:"background-color:#ef3838;"},true:{style:"background-color:#32c920;"},doubt:{style:"background-color:#d4a655;"}}},methods:{openContent:function(t){var e=t.currentTarget.dataset.id,a=t.currentTarget.dataset.name,l=t.currentTarget.dataset.source,o=this.data,r=o.data.iscolled,c=o.channelid,i=o.index;1==e?this.fetchScrollPic(function(t){}):(n.Event.stat("articleclick",{title:a,from:l}),e&&("home"===l&&wx.setStorageSync("collectionByDetail",{source:l,index:i,channelid:c,iscolled:r}),wx.navigateTo({url:"../../pages/content/content?id="+e+"&from="+l})))},openSeacrhPage:function(t){var e=t.currentTarget.dataset.word,a=t.currentTarget.dataset.title;e&&n.Event.stat("tagclick",{title:a,name:e});var l=e?"../../pages/search/search?word="+e:"../../pages/search/search";wx.navigateTo({url:l})},getUserInfo:function(t){t.target.id;var e=t.detail,n=e.errMsg,o=e.userInfo;this.data.userinfo?this.handleCollection(t):"getUserInfo:ok"===n?(l.userInfo=o,this.setData({userinfo:o}),(0,a.default)(),this.handleCollection(t)):this.callbackToast({type:2})},drawRoute:function(t){var e=t.target.dataset,a={composed:!0};this.triggerEvent("drawRoute",e,a)},handleCollection:function(t){var a=this,l=a.data,o=l.data,r=o.id,c=o.iscolled,i=o.videourl,s=o.title,d=l.channelid,u=l.index,f=(t.target.dataset.type,{artid:r,sessionid:wx.getStorageSync("sessionid")});i&&(f.type="video");var g=c?"miniCancelCollArt":"miniCollArt";c?n.Event.stat("cancelcollect",{title:s,from:"channellist"}):n.Event.stat("collect",{title:s,from:"channellist"}),(0,e.default)({url:"https://vp.fact.qq.com/"+g,data:f,method:"POST",success:function(t){t.data?(a.setData({"data.iscolled":!c}),a.callbackToast({from:"art",channelid:d,index:u,iscolled:!c,type:c?3:i?5:1})):a.callbackToast({from:"art",channelid:d,index:u,iscolled:!c,type:c?4:0})},fail:function(t){a.callbackToast({from:"art",type:c?4:0})}})},callbackToast:function(t){this.triggerEvent("collection",t,{composed:!0})}}}); 
 			}); 	require("components/article/article.js");
 		__wxRoute = 'components/question/question';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/question/question.js';	define("components/question/question.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return t&&t.__esModule?t:{default:t}}var e=t(require("../../js/fetch")),a=require("../../js/util.js"),i=t(require("../../js/update_page_list.js")),n=require("../../js/mta_analysis.js"),l=getApp().globalData;Component({properties:{data:{type:Object,value:{}},source:{type:String,value:""},userinfo:{type:Object,value:{}},channel:{type:Number,value:0},index:{type:Number,value:0},hiddenBottomBtn:{type:Boolean,value:!1}},data:{open:!1},methods:{getUserInfo:function(t){var e=t.currentTarget.dataset.type,a=t.detail,n=a.errMsg,o=a.userInfo;this.data.userinfo?this.handleOperate(e):"getUserInfo:ok"===n?(l.userInfo=o,this.setData({userinfo:o}),(0,i.default)(),this.handleOperate(e)):this.callbackToast({type:"up"===e?8:2})},handleOperate:function(t){"collection"===t?this.handleCollection():"up"===t&&this.handleUp()},headImgError:function(){},handleCollection:function(){var t=this,a=t.data,i=a.data,l=i.id,o=i.iscolled,s=i.content,c=a.channel,u=a.index,d={commentid:l,sessionid:wx.getStorageSync("sessionid")},r=o?"miniCancelCollQue":"miniCollQue";o?r="miniCancelCollQue":(r="miniCollQue",n.Event.stat("collect",{typee:"question",title:s})),(0,e.default)({url:"https://vp.fact.qq.com/"+r,data:d,method:"POST",success:function(e){e.data?(t.setData({"data.iscolled":!o}),t.callbackToast({from:"que",channelid:c,index:u,iscolled:!o,type:o?3:7})):t.callbackToast({from:"que",channelid:c,index:u,iscolled:!o,type:o?4:0})},fail:function(e){t.callbackToast({from:"que",type:o?4:0})}})},callbackToast:function(t){this.triggerEvent("collection",t,{composed:!0})},handleUp:function(){var t=this,a=t.data,i=a.data,l=i.up,o=i.isup,s=i.id,c=i.content,u=a.channel,d=a.index,r=o?l>=1?l-1:l:l+1,p={commentid:s,sessionid:wx.getStorageSync("sessionid")},f="";o?f="miniCancelUpQue":(n.Event.stat("like",{title:c}),f="miniUpQue"),(0,e.default)({url:"https://vp.fact.qq.com/"+f,data:p,method:"POST",success:function(e){e.data?(t.setData({"data.up":r,"data.isup":!o}),t.callbackUp({isfail:!1,channelid:u,index:d,isup:!o,up:r})):t.callbackUp({isfail:!0,type:o?0:1})},fail:function(e){t.callbackUp({isfail:!0,type:o?0:1})}})},callbackUp:function(t){this.triggerEvent("upEvent",t,{composed:!0})},handleOpen:function(){this.setData({open:!0})},handleToDetail:function(){"solutionDetail"!==this.data.source&&this.toDetail()},toDetail:(0,a.throttle)(function(){var t=this.data.data,e=t.id,a=t.targetid;wx.navigateTo({url:"../../pages/solution_detail/solution_detail?id="+e+"&targetid="+a+"&from="+this.data.source})},1e3),previewImage:function(t){var e=t.target.dataset,a=e.img,i=e.preimgs;wx.previewImage({current:a,urls:i})},navigateToArticle:function(t){var e=t.currentTarget.dataset.artid;wx.navigateTo({url:"/pages/content/content?id="+e+"&from=question"})}}}); 
 			}); 	require("components/question/question.js");
 		__wxRoute = 'pages/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/index.js';	define("pages/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return t&&t.__esModule?t:{default:t}}var e=t(require("../../js/fetch")),a=t(require("../../template/shareview")),i=require("../../js/mta_analysis.js"),n=getApp().globalData,r=[0,0,0,0,0,0],s=[!1,!1,!1,!1,!1,!1];Page({data:{userinfo:null,list:[],currentchannelid:"0",titlebottomleft:"45",picscrollshow:!0,swiperhigh:"0",loadingText:["","","","","","","","","","","","",""],itemstyle:{fake:{markurl:"../../images/icon2.1/false.png",style:"border-top:#ef3838 2px solid; background:linear-gradient(#feefed 0,#fff 20%);"},true:{markurl:"../../images/icon2.1/true@2x.png",style:"border-top:#4cb340 2px solid; background:linear-gradient(#fef8ee 0,#fff 20%);"},doubt:{markurl:"../../images/icon2.1/doubt.png",style:"border-top:#d4a655 2px solid; background:linear-gradient(#fbf7f0 0,#fff 20%);"},normal:{markurl:"../../images/icon2.1/artic.png",style:"border-top:#fe8a49 2px solid; background:linear-gradient(#fff4ee 0,#fff 20%);"}},channellist:[{channelid:"tuijian",title:"热门"},{channelid:"video",title:"视频"},{channelid:"shipinanquan",title:"食品安全"},{channelid:"yiliaojiankang",title:"医疗健康"},{channelid:"shehuiminsheng",title:"社会民生"},{channelid:"guanaifumu",title:"关爱父母"}],draw:!1,letnotscroll:!1,drawText:"海报保存中...",istopTipShow:!0,navigationHeight:n.navigationHeight,navigationTitleTop:n.navigationTitleTop,hotsearch:"输入关键词查真假",scrollLeft:0},onLoad:function(t){i.Page.init();var a=this;this.setData({swiperhigh:750*wx.getSystemInfoSync().windowHeight/wx.getSystemInfoSync().windowWidth-325+40+110}),(0,e.default)({url:"https://vp.fact.qq.com/miniHotSearch?num=10",success:function(t){var e=t.content;a.setData({hotsearch:e[Math.floor(10*Math.random())]||"输入关键词查真假"}),setInterval(function(){a.setData({hotsearch:e[Math.floor(10*Math.random())]||"输入关键词查真假"})},3e3)}}),this.firstFetch(t)},onShow:function(){var t=wx.getStorageSync("homeCurrentChannel");"number"==typeof t&&t>=0&&(this.setData({currentchannelid:t}),this.data.list[t]||this.fetch(t),wx.setStorageSync("homeCurrentChannel",""));var e=wx.getStorageSync("homePage");if(e&&e.update){var a=this.data.currentchannelid;this.onUnload(),this.fetch(a),wx.setStorageSync("homePage","")}var i=wx.getStorageSync("collectionByDetail");if(i){var n=i.iscolled,r=i.newiscolled,s=i.channelid,o=i.index,c=i.source,l=i.operate;if("home"===c&&l){var h=this.data;h.list,h.currentchannelid;this.data.list.length&&r!==n&&(this.selectComponent("#article"+s+o).setData({"data.iscolled":r}),this.data.list[s][o].iscolled=r)}wx.setStorageSync("collectionByDetail",null)}},firstFetch:function(t){var e=this;wx.getSetting({success:function(a){a.authSetting["scope.userInfo"]?wx.getUserInfo({success:function(t){if("getUserInfo:ok"===t.errMsg){var a=t.userInfo;n.userInfo=a,e.setData({userinfo:a})}},complete:function(){e.fetch(0,t)}}):e.fetch(0,t)}})},toppictouchstart:function(){},toppictouchend:function(){},openContent:function(t){var e=t.currentTarget.dataset.id,a=t.currentTarget.dataset.arttype,n=t.currentTarget.dataset.oriurl,r=t.currentTarget.dataset.name;1==e?this.fetchScrollPic(function(t){}):(a?(i.Event.stat("hotlink",{name:r}),i.Event.stat("articleclick",{title:r,from:"hotlink"})):i.Event.stat("articleclick",{title:r,from:"channellist"}),2==a?wx.navigateTo({url:"../content/content?type=3&oriurl="+n+"&from=home"}):e&&wx.navigateTo({url:"../content/content?id="+e+"&from=home"}))},openSeacrhPage:function(t){var e=t.currentTarget.dataset.word,a=t.currentTarget.dataset.title,n=t.currentTarget.dataset.placeholder,r="../search/search";e?(i.Event.stat("tagclick",{title:a,name:e}),r="../search/search?word="+e):n&&"输入关键词查真假"!==n&&(r="../search/search?placeholder="+n),wx.navigateTo({url:r})},fetch:function(t,a){var i=this,o=this,c=a||{};if(!s[t]){s[t]=!0;var l=this.data.loadingText;l[t]="",this.setData({loadingText:l}),c.artnum=r[t],c.channelid=o.data.channellist[t].channelid,c.sessionid=n.userInfo?wx.getStorageSync("sessionid"):"",(0,e.default)({url:"https://vp.fact.qq.com/miniChannelArt",data:c,success:function(e){var a=e.content;if(a){var n=a.length;if(n>0){var c=o.data.list;c[t]=o.data.list[t]?o.data.list[t].concat(a):a,o.setData({list:c}),0==r[t]&&n<5?((l=o.data.loadingText)[t]="没有更多文章了",i.setData({loadingText:l})):(s[t]=!1,r[t]+=n)}else{var l=o.data.loadingText;l[t]="没有更多文章了",i.setData({loadingText:l})}}else o.fail(t)},fail:function(){o.fail(t)}})}},fail:function(t){s[t]=!1;var e=this.data.loadingText;e[t]="加载失败，请点击重试...",this.setData({loadingText:e})},loadMore:function(t){var e=t.currentTarget.dataset.channelnum;this.fetch(e)},changeChannelid:function(t){"touch"==t.detail.source&&(i.Event.stat("channel",{name:this.data.channellist[t.detail.current].title}),0==t.detail.current||1==t.detail.current?this.setData({scrollLeft:0}):4==t.detail.current?this.setData({scrollLeft:90}):5==t.detail.current&&this.setData({scrollLeft:110}),this.setData({currentchannelid:t.detail.current}),this.data.list[t.detail.current]||this.fetch(t.detail.current))},changeTitle:function(t){var e=t.currentTarget.id.split("_")[1];i.Event.stat("channel",{name:this.data.channellist[e].title}),0==e||1==e?this.setData({scrollLeft:0}):4==e?this.setData({scrollLeft:90}):5==e&&this.setData({scrollLeft:110}),this.setData({currentchannelid:e}),this.data.list[e]||this.fetch(e)},onReachBottom:function(){},onUnload:function(){r=[0,0,0,0,0,0],s=[!1,!1,!1,!1,!1,!1],this.setData({loadingText:["","","","","",""],list:[]})},onPageScroll:function(t){},onShareAppMessage:function(t){var e={title:"谣言终结者，知识播种机",desc:"关爱老人必备",imageUrl:"http://mat1.gtimg.com/www/coral/jiaozhen/imgs/minishared"+Math.floor(6*Math.random()+1)+".png"},a=t[0].target;return a?(a.dataset.title&&(i.Event.stat("share",{title:a.dataset.title,from:"card"}),e.title=a.dataset.title,e.desc="谣言终结者，知识播种机"),a.dataset.artid&&(e.path="/pages/content/content?id="+a.dataset.artid+'&from="home"'),a.dataset.img&&(e.imageUrl=a.dataset.img)):i.Event.stat("share",{from:"home"}),e},drawRoute:function(t){var n=t.detail;i.Event.stat("poster",{title:n.title,from:"card"}),wx.showLoading({title:"海报生成中",mask:!0});var r=this,s="";switch(n.result){case"真":"true",s+="t-";break;case"假":"fake",s+="f-";break;case"疑":"doubt",s+="y-";break;default:"true",s+="t-"}switch(n.explain){case"谣言":s+="1";break;case"疑似诈骗":s+="2";break;case"都市传说":s+="3";break;case"洋葱新闻":s+="4";break;case"旧闻重炒":s+="5";break;case"钓鱼贴":s+="6";break;case"假新闻":s+="7";break;case"伪科学":s+="8";break;case"伪常识":s+="9";break;case"确有此事":s+="1";break;case"确实如此":s+="2";break;case"存在争议":s+="1";break;case"尚无定论":s+="2";break;case"有失实":s+="3";break;case"分情况":s+="4";break;default:s+="1"}(0,e.default)({url:"https://vp.fact.qq.com/miniGetQRcode",data:{id:n.artid,filename:1000000013},success:function(t){0===t.code?wx.downloadFile({url:t.url,success:function(t){if(n.img&&n.img.replace("http://","https://").indexOf("https://p.qpic.cn")>=0)wx.getImageInfo({src:n.img.replace("http://","https://"),success:function(e){var i={shareviewwidth:600};1==n.type&&e.width>180?(i.shareviewheight=980,i.shareviewtype=1):1==n.type?(i.shareviewheight=750,i.shareviewtype=4):2==n.type&&n.videourl?(i.shareviewheight=980,i.shareviewtype=3):2==n.type&&e.width>180?(i.shareviewheight=920,i.shareviewtype=2):(i.shareviewheight=750,i.shareviewtype=5),r.setData(i),wx.hideTabBar(),a.default.drawImage({background:e.path,mark:"../../images/mark/"+s+".png",qrCode:t.tempFilePath,title:n.title,author:n.author,authordesc:n.authordesc,type:r.data.shareviewtype,section:n.section,succ:function(t){r.setData({drawText:"海报已保存到相册，欢迎转发给好友"})},erro:function(t,e){"saveErr"==t?r.setData({drawText:"海报保存失败，授权才能保存哦！"}):r.setData({drawText:"海报保存失败，请重试！"})}}),wx.hideLoading(),r.setData({draw:!0})}});else{var e={shareviewwidth:600};1==n.type?(e.shareviewheight=750,e.shareviewtype=4):(e.shareviewheight=750,e.shareviewtype=5),r.setData(e),a.default.drawImage({background:"",mark:"../../images/mark/"+s+".png",qrCode:t.tempFilePath,title:n.title,author:n.author,authordesc:n.authordesc,type:r.data.shareviewtype,succ:function(t){r.setData({drawText:"海报已保存到相册，欢迎转发给好友"})},erro:function(t,e){"saveErr"==t?r.setData({drawText:"海报保存失败，授权才能保存哦！"}):r.setData({drawText:"海报保存失败，请重试！"})}}),wx.hideLoading(),r.setData({draw:!0})}}}):(wx.hideLoading(),wx.showToast({title:"生成失败请重试",icon:"none"}))},fail:function(t){wx.hideLoading(),wx.showToast({title:"生成失败请重试",icon:"none"})}})},closeDraw:function(){this.setData({draw:!1,drawText:"海报保存中...",letnotscroll:!1}),wx.showTabBar()},collection:function(t){var e=t.detail,a=e.channelid,i=e.iscolled,r=e.index,s=e.type;"collection"===t.type&&(n.showToast(this,{type:s}),s%2!=0&&(this.data.list[a][r].iscolled=i))}}); 
 			}); 	require("pages/index/index.js");
 		__wxRoute = 'pages/content/content';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/content/content.js';	define("pages/content/content.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return t&&t.__esModule?t:{default:t}}var e=t(require("../../js/fetch")),a=t(require("../../template/shareview")),o=require("../../wxParse/wxParse.js"),i=require("../../js/mta_analysis.js"),r="normal",s=getApp().globalData;Page({data:{type:1,iscolled:!1,oriurl:"",videourl:"",vid:"",title:"",rumor:"",shortrumor:"",showallrumor:!0,label:{},abstract:[],author:"",authordesc:"",authorhead:"",auditor:"",date:"",source:"",reference:[],referenceHidden:!0,referenceBtn:!1,edition:"",content:"",showcontent:!0,mark:"",navHidden:!0,navBackType:!0,from:"",textsize:"size"+r,numsize:"numsize"+r,labelsize:"labelsize"+r,contenthigh:1096,draw:!1,drawshare:!1,letnotscroll:!1,showvideocover:!0,drawText:"海报保存中...",showAutho:!1,showRetry:!1,userinfo:null,isShowTip:!1,hidesharebutton:!0,navigationHeight:s.navigationHeight,navigationTitleTop:s.navigationTitleTop,navigationBottom:s.navigationBottom,hotsearch:"输入关键词查真假",isShowWxShare:!1},onLoad:function(t){var a=this;console.log(t),i.Page.init(),this.setData({userinfo:s.userInfo});var o=t.id,n=t.type,h=t.oriurl,c=t.from,l=t.msgid;if(3==n)this.setData({type:3,oriurl:h});else{if((0,e.default)({url:"https://vp.fact.qq.com/miniHotSearch?num=10",success:function(t){var e=t.content;a.setData({hotsearch:e[Math.floor(20*Math.random())]||"输入关键词查真假"}),setInterval(function(){a.setData({hotsearch:e[Math.floor(20*Math.random())]||"输入关键词查真假"})},5e3)}}),t.scene){var d=decodeURIComponent(t.scene);this.fetchArt({scene:d,from:c})}else{if(""===o)return;this.fetchArt({id:o,from:c,msgid:l})}this.setData({from:t.from||"",id:o,contenthigh:750*wx.getSystemInfoSync().windowHeight/wx.getSystemInfoSync().screenWidth-100,textsize:"size"+r,numsize:"numsize"+r,labelsize:"labelsize"+r})}if(s.tipCount<=1){s.tipCount+=1;var u=null;this.setData({isShowTip:!0}),u=setTimeout(function(){a.setData({isShowTip:!1}),clearTimeout(u)},5e3)}else a.data.isShowTip&&a.setData({isShowTip:!1})},fetchArt:function(t){var a=this,r="";s.userInfo&&(r=wx.getStorageSync("sessionid"));var n=this;t.sessionid=r,(0,e.default)({url:"https://vp.fact.qq.com/miniArtData",data:t,success:function(r){var s=r.content,h=s.reference,c=s.rumor.slice(0,56);"，"!=c[c.length-1]&&"。"!=c[c.length-1]||c.slice(0,c.length-1);var l=s.content.replace(/<p>/gi,"").replace(/<\/p>/gi,"").replace(/[\r\n]/g,"");"hotPush"!==t.from&&"loginPush"!==t.from||i.Event.stat("articleclick",{title:s.title,from:t.from});var d="";s.abstract.forEach(function(t){d.length+t.content.length<=200&&(d+=t.content)}),n.drawImg({cover:"https://"+s.cover||"https://mat1.gtimg.com/www/coral/jiaozhen/imgs/sharepic.png"}),n.setData({iscolled:s.iscolled||!1,type:s.type,oriurl:s.oriurl,videourl:s.videourl,vid:s.vid||"",title:s.title,rumor:s.rumor,shortrumor:c,showallrumor:s.rumor.length<=56,label:{markstyle:s.markstyle,result:s.result,explain:s.explain},abstract:s.abstract,author:s.Author?s.Author.name:"",authordesc:s.Author?s.Author.desc:"",authorhead:s.Author?s.Author.head:"",auditor:s.auditor||"",date:s.date,source:s.source,reference:s.reference,referenceBtn:h.length>0&&!h[h.length-1].show,edition:s.edition,mark:"../../images/mark/"+s.titlemark+".png",showcontent:l,artid:s.id,cover:s.cover,section:s.section||"较真宝典",refarts:r.refArts||[],articleObjForWX:{type:"general",uniq_id:s.id,title:s.title,digest:d,cover:s.cover,thumbs:[s.cover],tags:s.tag}}),(0,e.default)({url:"https://vp.fact.qq.com/miniRefArtData",data:t,success:function(t){n.setData({refarts:t.refArts||[]}),o.wxParse("content","html",s.content,a,0),a.navShow()},fail:function(){n.setData({refarts:[]}),o.wxParse("content","html",s.content,this,0),this.navShow()}})},fail:function(){}})},openSearch:function(t){var e="../search/search",a=this.data.hotsearch;a&&(e="../search/search?placeholder="+a),wx.navigateTo({url:e})},referencesOperate:function(t){this.setData({referenceHidden:!this.data.referenceHidden})},previewImage:function(t){wx.previewImage({current:t.currentTarget.dataset.src,urls:this.data.content.imageUrls})},subtitleshowall:function(){this.setData({showallrumor:!0})},subtitlenotshowall:function(){this.setData({showallrumor:!1})},navShow:function(){var t=getApp().globalData,e=this.data.from;this.setData({navBackType:"home"===e||"search"===e||"collection"===e||"refart"===e,navHidden:!1,globalData:t})},gobackHome:function(){this.navReport("content_home_button");var t=this.data.from;"home"===t||"collection"===t||"question"===t||"search"===t?wx.navigateBack():wx.switchTab({url:"../index/index"})},showsharebutton:function(){this.setData({hidesharebutton:!1})},hidesharebutton:function(){this.setData({hidesharebutton:!0})},donothing:function(){},share:function(){this.navReport("content_share_button")},setscript:function(){var t=this;wx.showActionSheet({itemList:["小","标准","大","特大"],success:function(e){0==e.tapIndex?r="small":1==e.tapIndex?r="normal":2==e.tapIndex?r="large":3==e.tapIndex&&(r="huge"),t.setData({textsize:"size"+r,numsize:"numsize"+r,labelsize:"labelsize"+r})},fail:function(t){console.log(t.errMsg)}})},drawRoute:function(){i.Event.stat("poster",{title:this.data.title,from:"article"});var t=this;wx.showLoading({title:"海报生成中",mask:!0}),(0,e.default)({url:"https://vp.fact.qq.com/miniGetQRcode",data:{id:t.data.artid,filename:1000000013},success:function(e){0===e.code?wx.downloadFile({url:e.url,success:function(e){if(t.data.cover&&t.data.cover.indexOf("p.qpic.cn")>=0)wx.getImageInfo({src:"https://"+t.data.cover,success:function(o){var i={shareviewwidth:600};1==t.data.type&&o.width>180?(i.shareviewheight=980,i.shareviewtype=1):1==t.data.type?(i.shareviewheight=750,i.shareviewtype=4):2==t.data.type&&t.data.videourl?(i.shareviewheight=980,i.shareviewtype=3):2==t.data.type&&o.width>180?(i.shareviewheight=920,i.shareviewtype=2):(i.shareviewheight=750,i.shareviewtype=5),t.setData(i),t.setData({showAutho:!1,showRetry:!1}),a.default.drawImage({background:o.path,mark:t.data.mark,qrCode:e.tempFilePath,title:t.data.title,author:t.data.author,authordesc:t.data.authordesc,type:t.data.shareviewtype,section:t.data.section,succ:function(e){t.setData({drawText:"海报已保存到相册，欢迎转发给好友"})},erro:function(e,a){"saveErr"==e?t.setData({drawText:"海报保存失败，授权才能保存哦！",showAutho:!0,tempFilePath:a}):t.setData({drawText:"海报保存失败，请重试！",showRetry:!0})}}),wx.hideLoading(),t.setData({draw:!0,showvideocover:!1,letnotscroll:!0})},fail:function(t){console.log("getImageInfo err"),console.log(t)}});else{var o={shareviewwidth:600};1==t.data.type?(o.shareviewheight=750,o.shareviewtype=4):(o.shareviewheight=750,o.shareviewtype=5),t.setData(o),t.setData({showAutho:!1,showRetry:!1}),a.default.drawImage({background:"",mark:t.data.mark,qrCode:e.tempFilePath,title:t.data.title,author:t.data.author,authordesc:t.data.authordesc,type:t.data.shareviewtype,succ:function(e){t.setData({drawText:"海报已保存到相册，欢迎转发给好友"})},erro:function(e,a){"saveErr"==e?t.setData({drawText:"海报保存失败，授权才能保存哦！",showAutho:!0,tempFilePath:a}):t.setData({drawText:"海报保存失败，请重试！",showRetry:!0})}}),wx.hideLoading(),t.setData({draw:!0,showvideocover:!1,letnotscroll:!0})}}}):(wx.hideLoading(),wx.showToast({title:"生成失败请重试",icon:"none"}))},fail:function(t){wx.hideLoading(),wx.showToast({title:"生成失败请重试",icon:"none"})}})},closeDraw:function(){this.hidesharebutton(),this.setData({draw:!1,showvideocover:!0,drawText:"海报保存中...",letnotscroll:!1})},retryDraw:function(){this.closeDraw(),this.drawRoute()},afterSetAutho:function(t){var e=this;t.detail.authSetting["scope.writePhotosAlbum"]?wx.saveImageToPhotosAlbum({filePath:e.data.tempFilePath,success:function(t){e.setData({drawText:"海报已保存到相册，欢迎转发给好友",showAutho:!1})},fail:function(t,a){e.setData({drawText:"海报保存失败，授权才能保存哦！",showAutho:!0,tempFilePath:a})}}):e.setData({drawText:"你没有授权，继续授权或轻点屏幕退出"})},tapShareview:function(){this.data.tapDraw?this.setData({tapDraw:!1}):this.closeDraw()},tapDraw:function(){this.setData({tapDraw:!0})},navReport:function(t){wx.reportAnalytics(t,{scene:this.data.from?this.data.from:this.data.globalData.scene})},onPageScroll:function(t){},onReady:function(t){},onShow:function(t){this.data.isShowWxShare&&(this.setData({isShowWxShare:!1}),this.hidesharebutton())},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},drawImg:function(t){var e=this;e.setData({drawshare:!0}),wx.getImageInfo({src:t.cover,success:function(t){a.default.drawShareImg(t.path,function(t){e.setData({drawshare:!1,shareImgUrl:t})})}})},onShareAppMessage:function(t){var e="article",a=this;if(this.setData({isShowWxShare:!0}),3==a.data.type)return{title:" ",path:"/pages/content/content?id="+a.data.id+"&type=3&oriurl="+a.data.oriurl,complete:function(){console.log("complete")}};t[0].target&&t[0].target.dataset.position&&(e=e+"-"+t[0].target.dataset.position),i.Event.stat("share",{title:a.data.title,from:e});var o=a.data.title;return 1==a.data.type&&(o+="？"),console.log("_this.data.shareImgUrl",a.data.shareImgUrl),{title:o,imageUrl:a.data.shareImgUrl||"http://mat1.gtimg.com/www/coral/jiaozhen/imgs/minishared2.png",path:"/pages/content/content?id="+a.data.artid,complete:function(){console.log("complete")}}},getUserInfo:function(t){t.target.id;var e=t.detail,a=e.errMsg,o=e.userInfo;this.data.userinfo?this.handleCollection(t):"getUserInfo:ok"===a?(s.userInfo=o,this.setData({userinfo:o}),this.handleCollection(t)):s.showToast(this,{type:2})},handleCollection:function(t){var a=this,o=a.data,r=o.iscolled,n=o.artid,h=o.videourl,c=o.from,l=wx.getStorageSync("sessionid"),d="";r?(d="/miniCancelCollArt",i.Event.stat("cancelcollect",{title:this.data.title,from:"article"})):(d="/miniCollArt",i.Event.stat("collect",{title:this.data.title,from:"article"}));var u={artid:n,sessionid:l};h&&(u.type="video"),(0,e.default)({url:"https://vp.fact.qq.com"+d,method:"POST",data:u,success:function(t){if(console.log(t),t.data){if(a.setData({iscolled:!r}),s.showToast(a,{type:r?3:h?5:1}),"home"===c){var e=wx.getStorageSync("collectionByDetail");e.newiscolled=!r,e.operate=!0,wx.setStorageSync("collectionByDetail",e)}}else 2===t.errCode?a.setData({iscolled:!0}):(s.showToast(a,{type:r?4:0}),console.log(123132131))},fail:function(t){console.log(t),s.showToast(a,{type:0})}})}}); 
 			}); 	require("pages/content/content.js");
 		__wxRoute = 'pages/search/search';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/search/search.js';	define("pages/search/search.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},a=function(t){return t&&t.__esModule?t:{default:t}}(require("../../js/fetch")),e=require("../../js/mta_analysis.js"),r={word:"",placeholder:"输入关键词查真假",wordStatus:!1,search:[],status:!1,searchStatus:!0,cursor:0},s=!0,i=0,o="",n="",c=[],h=null,l=getApp().globalData;Page({data:t({hot:[],showtitle:[],clearIconSize:20,loadingHidden:!0,loadingText:""},r,{focus:!1,userinfo:null,navigationHeight:l.navigationHeight,navigationTitleTop:l.navigationTitleTop}),onLoad:function(t){e.Page.init();var a=(t.word||"").trim(),r=l.userInfo;r&&this.setData({userinfo:r}),this.fetchHot(),this.setData({clearIconSize:wx.getSystemInfoSync().screenWidth/750*36,word:a,wordStatus:!!a}),t.placeholder&&this.setData({placeholder:t.placeholder}),""!==a?(this.setData({cursor:a.length}),n=a,this.fetchSearch(a)):this.setData({focus:!0})},fetchHot:function(){var t=this;(0,a.default)({url:"https://vp.fact.qq.com/miniHotSearch",success:function(a){var e=a.content;if(e&&e.length>0){e.length>10&&(e.length=10);var r=e.map(function(t){return t.length>8?t.slice(0,8)+"...":t});t.setData({hot:e,showtitle:r})}}})},fetchSearch:function(t){var e=this;if(""!==t){var r=n!==t;h&&h.abort(),r&&(i=0),h=(0,a.default)({url:"https://vp.fact.qq.com/miniSearchResult",data:{title:t,num:i,size:0===i?20:12},success:function(a){var h=a.content,l=h.length,u=l,d="正在加载...";if(o=t,r){if(n=t,s=!0,JSON.stringify(h)===JSON.stringify(c)&&"[]"!==JSON.stringify(h))return;c=h,e.setData({search:[]})}return 0!==l&&(l=(h=h.filter(function(t){return t.copyright})).length),0===i&&0===l?(s=!1,void e.setData({searchStatus:!0,status:!0})):(e.setData({searchStatus:!1}),i>0&&0===l?(e.setData({loadingText:"没有更多了..."}),void(s=!1)):((0===i&&u<20||i>0&&u<12)&&(d="没有更多了...",s=!1),e.setData({status:!0,search:e.data.search.concat(h),wordStatus:!!t,loadingHidden:!1,loadingText:d}),void(i+=u)))}})}},openContent:function(t){var a=t.currentTarget.dataset.id,r=t.currentTarget.dataset.title;e.Event.stat("articleclick",{title:r,from:"search"}),a&&wx.navigateTo({url:"../content/content?id="+a+"&from=search"})},goSearch:function(t){var a=t.currentTarget.dataset.word.trim();this.setData({word:a}),this.fetchSearch(a)},input:function(t){var a=t.detail,e=a.value.trimLeft(),r=a.cursor;this.setData({wordStatus:!!e,placeholder:"输入关键词查真假"}),""!==e?r!==this.data.cursor&&(this.setData({cursor:r}),this.fetchSearch(e)):this.reset()},confirm:function(t){"输入关键词查真假"!==this.data.placeholder&&(this.setData({word:this.data.placeholder}),this.fetchSearch(this.data.placeholder))},getSearch:function(){this.data.placeholder&&"输入关键词查真假"!==this.data.placeholder&&(this.setData({word:this.data.placeholder}),this.fetchSearch(this.data.placeholder))},reset:function(){this.setData(r),s=!0,i=0,o="",h=null,n="",c=[]},onReachBottom:function(){this.data.status&&s&&this.fetchSearch(o)},onUnload:function(){i=0,o="",s=!0,n="",c=[]},onShareAppMessage:function(){var t=o,a={title:"谣言终结者，知识播种机",desc:"关爱老人必备"};if(t)e.Event.stat("share",{from:"result"}),a.path="/pages/search/search?word="+t;else{e.Event.stat("share",{from:"search"});var r=Math.floor(6*Math.random()+1);a.imageUrl="http://mat1.gtimg.com/www/coral/jiaozhen/imgs/minishared"+r+".png"}return a},navigateToQue:function(){wx.navigateTo({url:"../solution_publish/solution_publish?targetid="+l.targetid})},getUserInfo:function(t){t.currentTarget.dataset.type;var a=t.detail,e=a.errMsg,r=a.userInfo;this.data.userinfo?this.navigateToQue():"getUserInfo:ok"===e?(l.userInfo=r,this.setData({userinfo:r}),this.navigateToQue()):l.showToast(this,"",{title:"授权失败",desc:"允许才能提问哦～",status:0})},gobackHome:function(){wx.navigateBack()},onBlur:function(t){var a=t.detail.value;this.setData({word:t.detail.value}),0!==i&&a&&(console.log(a),e.Event.stat("search",{keyword:a}))}}); 
 			}); 	require("pages/search/search.js");
 		__wxRoute = 'pages/personal/personal';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/personal/personal.js';	define("pages/personal/personal.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return t&&t.__esModule?t:{default:t}}var e=t(require("../../js/fetch.js")),a=t(require("../../js/update_page_list.js")),n=require("../../js/util.js"),i=require("../../js/mta_analysis.js"),o=getApp().globalData;Page({data:{userinfo:null,collectCount:0,queCount:0,extraData:{id:"35374",clientInfo:"",nickname:"",avatar:""},iv:"",encryptedData:"",navigationHeight:o.navigationHeight,navigationTitleTop:o.navigationTitleTop},onLoad:function(t){var e=this,a=o.userInfo;console.log("userinfoooo:"),console.log(JSON.stringify(a)),a&&this.setData({userinfo:a}),wx.getSystemInfo({success:function(t){e.setData({"extraData.clientInfo":t.model+" / "+t.system,"extraData.nickname":a?a.nickName:"","extraData.avatar":a?a.avatarUrl:""})}})},onShow:function(){(this.data.userinfo||o.userInfo)&&(this.setData({userinfo:o.userInfo}),this.getCollecteNum(),this.getiv(this.getQueNum))},getQueNum:function(){var t=this,a=wx.getStorageSync("openid"),i=wx.getStorageSync("sessionid"),o=t.data,s=o.iv,r=o.encryptedData;(0,e.default)({url:"https://jz.coral.qq.com/user/cmtans/count",data:{sessionid:i,g_tk:(0,n.getgkt)(i),source:112,logintype:14,openid:a,appid:"wxd7bec290bace5e42",iv:s,encryptedData:r},success:function(e){0===e.errCode&&t.setData({queCount:e.data.commentnum})},fail:function(t){}})},getCollecteNum:function(){var t=this;(0,e.default)({url:"https://vp.fact.qq.com/miniCollNum",data:{sessionid:wx.getStorageSync("sessionid")},success:function(e){e.errMsg&&"not login"===e.errMsg?o.relogin(t.getCollecteNum):e&&e.num&&t.setData({collectCount:e.num})},fail:function(t){}})},handleToCollection:function(){wx.navigateTo({url:"../collection/collection"})},getiv:function(t){var e=this,a=this.data,n=(a.queCount,a.iv),i=a.encryptedData;n&&i?t():wx.getUserInfo({success:function(a){if("getUserInfo:ok"===a.errMsg){a.userInfo;var n=a.iv,i=a.encryptedData;e.setData({iv:n,encryptedData:i}),t()}}})},handleToQuestion:function(){var t=this.data.queCount;wx.navigateTo({url:"../personal_question/personal_question?queCount="+Number(t)})},handleToJianyi:function(){wx.navigateToMiniProgram({appId:"wx8abaf00ee8c3202e",extraData:this.data.extraData,envVersion:"release"})},onShareAppMessage:function(t){var e={title:"谣言终结者，知识播种机",desc:"关爱老人必备",imageUrl:"http://mat1.gtimg.com/www/coral/jiaozhen/imgs/minishared"+Math.floor(6*Math.random()+1)+".png",path:"pages/index/index"};return i.Event.stat("share",{from:"personal_center"}),e},getUserInfo:function(t){var e=t.target.id,n=t.detail,i=n.errMsg,s=n.userInfo,r=n.iv,u=n.encryptedData;if("getUserInfo:ok"===i){switch(o.userInfo=s,this.setData({userinfo:s,"extraData.nickname":s.nickName,"extraData.avatar":s.avatarUrl,iv:r,encryptedData:u}),this.getCollecteNum(),this.getQueNum(),e){case"collectionBtn":this.handleToCollection();break;case"questionBtn":this.handleToQuestion();break;case"jianyiBtn":this.handleToJianyi()}(0,a.default)()}else o.userInfo=null,this.setData({userinfo:null}),"headBtn"===t.currentTarget.id?o.showToast(this,{params:{title:"登录失败",status:0}}):o.showToast(this,{params:{title:"查看失败",desc:"允许就能查看哦～",status:0}})}}); 
 			}); 	require("pages/personal/personal.js");
 		__wxRoute = 'pages/collection/collection';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/collection/collection.js';	define("pages/collection/collection.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return t&&t.__esModule?t:{default:t}}function e(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function a(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}var i=t(require("../../js/fetch.js")),r=t(require("../../template/shareview")),s=require("../../js/rebuild_data.js"),n=t(require("../../js/update_page_list.js")),o=require("../../js/mta_analysis.js"),l=getApp().globalData,c=[{name:"文章",id:0},{name:"视频",id:1},{name:"问答",id:2}],h=c.map(function(t){return{list:[],currentPage:0,loadingText:"loading",hasMoreData:!0}});Page({data:{userinfo:null,reqnum:10,currentTab:0,list:h,tabList:c,draw:!1,drawText:"海报保存中...",navigationHeight:l.navigationHeight,navigationTitleTop:l.navigationTitleTop},onLoad:function(t){var e=getApp().globalData.userInfo;e&&this.setData({userinfo:e}),this.fetchData(this.data.currentTab,0)},updateTab:function(t){this.setData({currentTab:t}),this.data.list[t].currentPage||this.data.list[t].hasMoreData&&this.fetchData(t,this.data.list[t].currentPage)},changeTab:function(t){var e=Number(t.target.id.split("_").pop());this.setData({currentTab:e}),this.updateTab(e)},swiperChange:function(t){if("touch"===t.detail.source){var e=t.detail.current;this.updateTab(e)}},fetchData:function(t,e){var a=this,r="list["+t+"].loadingText";a.loadFail(r,"loading");var n={sessionid:wx.getStorageSync("sessionid"),page:e};1===t&&(n.type="video"),(0,i.default)({url:"https://vp.fact.qq.com/"+(2===t?"miniMyCollQueList":"miniMyCollArtList"),data:n,success:function(e){switch(t){case 2:var i=e.errCode,n=e.commentList;e.errMsg;return void(0===i?a.fetchSuccessCalback((0,s.getOpeAQdata)(n,"collection"),t):a.loadFail(r,"加载失败, 请点击重试..."));default:var o=e.list,l=e.artInfo,c=e.errMsg;if(o){var h=o.map(function(t){return l[t]});a.fetchSuccessCalback(h,t)}else c&&a.loadFail(r,"加载失败, 请点击重试...")}},fail:function(){a.loadFail(r,"加载失败, 请点击重试...")}})},fetchSuccessCalback:function(t,i){var r=this,s=r.data,n=s.reqnum,o=s.list[i],l="list["+i+"].list",c="list["+i+"].loadingText",h="list["+i+"].currentPage",d="list["+i+"].hasMoreData";if(t&&t.length){var u;r.setData((u={},e(u,l,o.list.length?[].concat(a(o.list),a(t)):t),e(u,h,++o.currentPage),u)),t.length<n?(r.loadFail(c,"我是有底线的~"),r.setData(e({},d,!1))):r.loadFail(c,"")}else t&&!t.length&&(r.loadFail(c,"我是有底线的~"),r.setData(e({},d,!1)))},loadFail:function(t,a){this.setData(e({},t,a))},scrollToLower:function(t){this.loadmore()},loadmore:function(){var t=this.data.currentTab;this.data.list[t].hasMoreData&&this.fetchData(t,this.data.list[t].currentPage)},reload:function(t){t.target.dataset.reload.indexOf("失败")&&this.loadmore()},navigateToHome:function(){var t=this.data.currentTab;wx.setStorageSync("homeCurrentChannel",t),wx.switchTab({url:2===t?"../solution/solution":"../index/index"})},onShareAppMessage:function(t){return 2===this.data.currentTab?this.queShare(t):this.artShare(t)},queShare:function(t){var e={title:"已经有10万网友在这里提问",imageUrl:"https://mat1.gtimg.com/www/coral/jiaozhen/imgs/aq"+Math.floor(6*Math.random()+1)+".png"};if("menu"===t.from)return o.Event.stat("share",{typee:"question",title:e.title}),e;var a=t.target.dataset,i=a.title,r=a.id,s=a.targetid;return i&&(e.title="问："+i,e.path="pages/solution_detail/solution_detail?targetid="+s+"&id="+r+"&from=share"),o.Event.stat("share",{typee:"question",title:e.title}),e},artShare:function(t){var e={title:"谣言终结者，知识播种机",desc:"关爱老人必备",imageUrl:"http://mat1.gtimg.com/www/coral/jiaozhen/imgs/minishared"+Math.floor(6*Math.random()+1)+".png",path:"/pages/index/index"},a=t.target;return a?(a.dataset.title&&(o.Event.stat("share",{title:a.dataset.title,from:"card"}),e.title=a.dataset.title,e.desc="谣言终结者，知识播种机"),a.dataset.artid&&(e.path="/pages/content/content?id="+a.dataset.artid+"&from=share"),a.dataset.img&&(e.imageUrl=a.dataset.img)):o.Event.stat("share",{from:"collection"}),e},drawRoute:function(t){var e=t.detail;o.Event.stat("poster",{title:e.title,from:"card"}),wx.showLoading({title:"海报生成中",mask:!0});var a=this,s="";switch(e.result){case"真":"true",s+="t-";break;case"假":"fake",s+="f-";break;case"疑":"doubt",s+="y-";break;default:"true",s+="t-"}switch(e.explain){case"谣言":s+="1";break;case"疑似诈骗":s+="2";break;case"都市传说":s+="3";break;case"洋葱新闻":s+="4";break;case"旧闻重炒":s+="5";break;case"钓鱼贴":s+="6";break;case"假新闻":s+="7";break;case"伪科学":s+="8";break;case"伪常识":s+="9";break;case"确有此事":s+="1";break;case"确实如此":s+="2";break;case"存在争议":s+="1";break;case"尚无定论":s+="2";break;case"有失实":s+="3";break;case"分情况":s+="4";break;default:s+="1"}(0,i.default)({url:"https://vp.fact.qq.com/miniGetQRcode",data:{id:e.artid,filename:1000000013},success:function(t){wx.downloadFile({url:t.url,success:function(t){if(e.img&&e.img.replace("http://","https://").indexOf("https://p.qpic.cn")>=0)wx.getImageInfo({src:e.img.replace("http://","https://"),success:function(i){var n={shareviewwidth:600};1==e.type&&i.width>180?(n.shareviewheight=980,n.shareviewtype=1):1==e.type?(n.shareviewheight=750,n.shareviewtype=4):2==e.type&&e.videourl?(n.shareviewheight=980,n.shareviewtype=3):2==e.type&&i.width>180?(n.shareviewheight=920,n.shareviewtype=2):(n.shareviewheight=750,n.shareviewtype=5),a.setData(n),r.default.drawImage({background:i.path,mark:"../../images/mark/"+s+".png",qrCode:t.tempFilePath,title:e.title,author:e.author,authordesc:e.authordesc,type:a.data.shareviewtype,section:e.section,succ:function(t){a.setData({drawText:"海报已保存到相册，欢迎转发给好友"})},erro:function(t,e){"saveErr"==t?a.setData({drawText:"海报保存失败，授权才能保存哦！"}):a.setData({drawText:"海报保存失败，请重试！"})}}),wx.hideLoading(),a.setData({draw:!0})}});else{var i={shareviewwidth:600};1==e.type?(i.shareviewheight=750,i.shareviewtype=4):(i.shareviewheight=750,i.shareviewtype=5),a.setData(i),r.default.drawImage({background:"",mark:"../../images/mark/"+s+".png",qrCode:t.tempFilePath,title:e.title,author:e.author,authordesc:e.authordesc,type:a.data.shareviewtype,succ:function(t){a.setData({drawText:"海报已保存到相册，欢迎转发给好友"})},erro:function(t,e){"saveErr"==t?a.setData({drawText:"海报保存失败，授权才能保存哦！"}):a.setData({drawText:"海报保存失败，请重试！"})}}),wx.hideLoading(),a.setData({draw:!0})}}})},fail:function(t){wx.hideLoading(),wx.showToast({title:"生成失败请重试",icon:"none"})}})},closeDraw:function(){this.setData({draw:!1,drawText:"海报保存中...",letnotscroll:!1})},collection:function(t){var e=t.detail,a=e.channelid,i=e.index,r=e.type,s=e.from;if("collection"===t.type){if(3===r){var o=this.data.list;o[a].list.splice(i,1),this.setData({list:o}),"art"===s?(0,n.default)("homePage"):(0,n.default)("solutionPage")}l.showToast(this,{type:r})}},upEvent:function(t){var e=t.detail,a=e.channelid,i=e.index,r=e.isup,s=e.up,o=e.isfail,c=e.type;e.from;if(o)l.showToast(this,{params:{title:c?"点赞失败":"取消点赞失败",desc:"",status:0}});else{var h=this.data.list[a].list[i];h.up=s,h.isup=r,(0,n.default)("solutionPage")}},gobackHome:function(){wx.navigateBack()}}); 
 			}); 	require("pages/collection/collection.js");
 		__wxRoute = 'pages/solution/solution';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/solution/solution.js';	define("pages/solution/solution.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return t&&t.__esModule?t:{default:t}}function i(t){if(Array.isArray(t)){for(var i=0,a=Array(t.length);i<t.length;i++)a[i]=t[i];return a}return Array.from(t)}function a(t,i,a){return i in t?Object.defineProperty(t,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[i]=a,t}var e=t(require("../../js/fetch.js")),s=(t(require("../../template/shareview")),require("../../js/rebuild_data.js")),r=t(require("../../js/update_page_list.js")),n=t(require("../../js/login.js")),o=require("../../js/mta_analysis.js"),l=getApp().globalData,u=[{name:"热门",id:0},{name:"最新",id:1}],d=u.map(function(t){return{list:[],cursor:"",loadingid:0,hasMoreData:!0}}),h=l.targetid;Page({data:{targetid:h,userinfo:null,currentTab:0,list:d,tabList:u,isTipWrite:!0,loadText:["loading","","我是有底线的～","加载失败， 请点击重试"],scrollToTop:0,fetching:!1,navigationHeight:l.navigationHeight,navigationTitleTop:l.navigationTitleTop},onLoad:function(t){var i=this;o.Page.init(),this.setUserinfo();var a=null;a=setTimeout(function(){i.setData({isTipWrite:!1}),clearTimeout(a)},5e3),this.getData()},onShow:function(){this.setUserinfo();var t=this.data,i=t.currentTab,a=t.list,e=wx.getStorageSync("solutionPage");e&&e.update&&(e.updateid?i===e.updateid&&0!==a[i].loadingid&&(this.initListData(i),this.getData()):0!==a[i].loadingid&&(this.initListData(i),this.getData()),wx.setStorageSync("solutionPage",""))},setUserinfo:function(){var t=l.userInfo;!this.data.userinfo&&t&&this.setData({userinfo:t})},onShareAppMessage:function(t){var i={title:"已经有10万网友在这里提问",desc:"关爱老人必备",imageUrl:"https://mat1.gtimg.com/www/coral/jiaozhen/imgs/aq"+Math.floor(6*Math.random()+1)+".png"},a=t[0];if("menu"===a.from)return o.Event.stat("share",{typee:"question",title:i.title}),i;var e=a.target.dataset,s=e.title,r=e.id,n=e.targetid;return s&&(i.title="问："+s,i.path="pages/solution_detail/solution_detail?targetid="+n+"&id="+r+"&from=share"),o.Event.stat("share",{typee:"question",title:i.title}),i},getUserInfo:function(t){t.currentTarget.dataset.type;var i=t.detail,a=i.errMsg,e=i.userInfo;this.data.userinfo?this.navigateToPublish():"getUserInfo:ok"===a?(l.userInfo=e,this.setData({userinfo:e}),(0,r.default)(),this.navigateToPublish()):l.showToast(this,{params:{title:"授权失败",desc:"允许就能提问哦～",status:0}})},getSessionid:function(t){(0,n.default)(t)},getData:function(){var t=this,r=this.data,n=r.currentTab,o=r.list,l=r.userinfo,u=o[n],d="list["+n+"].list",h="list["+n+"].loadingid",c="list["+n+"].cursor",g="list["+n+"].hasMoreData";a({},0===n?"scorecursor":"cursor",o[n].cursor||"");t.data.fetching||(t.setData({fetching:!0}),(0,e.default)({url:"https://vp.fact.qq.com/miniLoadQuestion",data:{type:0===n?"hot":"new",cursor:o[n].cursor||"",sessionid:l?wx.getStorageSync("sessionid"):""},success:function(e){if(0===e.errCode){var r=e.data,n=r.oriretnum,o=(r.orireqnum,r.last),l=r.oriCommList,f=r.repCommList,p=r.userList,m=r.hasnext;if(t.setData(a({},g,m)),n){var v,D=(0,s.getNewAQdata)({oriCommList:l,repCommList:f,userList:p});t.setData((v={},a(v,d,u.list.length?[].concat(i(u.list),i(D)):D),a(v,c,o),v))}m?t.handleError(1,h):t.handleError(2,h)}else t.handleError(3,h);t.setData({fetching:!1})},fail:function(){t.handleError(3,h),t.setData({fetching:!1})}}))},scrollToLower:function(){var t=this.data.currentTab;this.data.list[t].hasMoreData&&(this.setData(a({},"list["+t+"].loadingid",0)),console.log("scroll lower load more"),this.getData())},handleError:function(t,i){this.setData(a({},i,t))},initListData:function(t){var i;this.setData((i={currentTab:t},a(i,"list["+t+"].cursor",""),a(i,"list["+t+"].loadingid",0),a(i,"list["+t+"].hasMoreData",!0),a(i,"list["+t+"].list",[]),i))},changeTab:function(t){if("tap"===t.type){var i=t.target.id.split("_")[1];this.initListData(Number(i)),this.getData()}},changeSwiper:function(t){if("touch"===t.detail.source){var i=t.detail.current;this.initListData(i),this.getData()}},navigateToPublish:function(){o.Event.stat("question",{}),wx.navigateTo({url:"../solution_publish/solution_publish?targetid="+h})},collection:function(t){var i=this,a=t.detail,e=a.channelid,s=a.iscolled,r=a.index,n=a.type;a.from;"collection"===t.type&&(l.showToast(this,{type:n}),n%2!=0&&(i.data.list[e].list[r].iscolled=s))},upEvent:function(t){var i=t.detail,a=i.channelid,e=i.index,s=i.isup,r=i.up,n=i.isfail,o=i.type;i.from;if(8===o)l.showToast(this,{type:o});else if(n)l.showToast(this,{params:{title:o?"点赞失败":"取消点赞失败",desc:"",status:0}});else{var u=this.data.list[a].list[e];u.up=r,u.isup=s}},handleReload:function(t){3===t.target.dataset.loadingid&&this.getData()}}); 
 			}); 	require("pages/solution/solution.js");
 		__wxRoute = 'pages/personal_question/personal_question';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/personal_question/personal_question.js';	define("pages/personal_question/personal_question.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return t&&t.__esModule?t:{default:t}}function e(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function a(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},r=t(require("../../js/fetch.js")),n=(t(require("../../template/shareview")),require("../../js/util.js")),s=require("../../js/rebuild_data.js"),o=t(require("../../js/update_page_list.js")),l=require("../../js/mta_analysis.js"),u=getApp().globalData,c=u.targetid,d=[{name:"已回复",id:0},{name:"全部提问",id:1}],h=d.map(function(t){return{list:[],cursor:0,loadingid:0,hasMoreData:!0}});Page({data:{userinfo:null,queCount:0,reqnum:10,currentTab:0,list:h,tabList:d,loadText:["loading","","我是有底线的～","加载失败， 请点击重试"],iv:"",encryptedData:"",navigationHeight:u.navigationHeight,navigationTitleTop:u.navigationTitleTop,hiddenBottomBtn:!0},onLoad:function(t){l.Page.init(),this.setData(i({},t)),this.getData()},getUser:function(t){var e=this;wx.getUserInfo({success:function(a){"getUserInfo:ok"===a.errMsg&&(e.setData({iv:a.iv,encryptedData:a.encryptedData}),t())}})},getUserInfo:function(t){t.currentTarget.dataset.type;var e=t.detail,a=e.errMsg,i=e.userInfo,r=e.iv,n=e.encryptedData;this.data.userinfo?this.navigateToQue():"getUserInfo:ok"===a?(u.userInfo=i,this.setData({userinfo:i,iv:r,encryptedData:n}),this.navigateToQue()):u.showToast(this,{params:{title:"授权失败",desc:"允许就能操作奥～",status:0}})},onReachBottom:function(){},onShareAppMessage:function(t){var e={title:"已经有10万网友在这里提问",imageUrl:"https://mat1.gtimg.com/www/coral/jiaozhen/imgs/aq"+Math.floor(6*Math.random()+1)+".png"},a=t[0];if("menu"===a.from)return l.Event.stat("share",{typee:"question",title:e.title}),e;var i=a.target.dataset,r=i.title,n=i.id,s=i.targetid;return r&&(e.title="问："+r,e.path="pages/solution_detail/solution_detail?targetid="+s+"&id="+n+"&from=share"),l.Event.stat("share",{typee:"question",title:e.title}),e},getData:function(t){var e=this,a=this.data,i=a.encryptedData,r=a.iv;i&&r?this.getFetchData(t):this.getUser(function(){return e.getFetchData(t)})},getFetchData:function(t){var i=this,o=this.data,l=o.currentTab,u=o.list,d=o.iv,h=o.encryptedData,g=wx.getStorageSync("openid"),f=t||l,p=u[f],v="list["+f+"].list",m="list["+f+"].loadingid",y="list["+f+"].cursor",D="list["+f+"].hasMoreData";i.handleError(0,m);var T=wx.getStorageSync("sessionid");(0,r.default)({url:"https://vp.fact.qq.com/miniLoadMyQuestion",data:{type:0===f?"reply":"all",targetid:c,g_tk:(0,n.getgkt)(T),sessionid:T,openid:g,commentid:p.cursor,encryptedData:h,iv:d},success:function(t){if(0===t.errCode){var r=t.data,n=r.retnum,o=r.users,l=r.comments,u=r.reqnum,c=r.repCommList,d=r.hasnext,h=r.last,g=r.messages;if(n){var T=[];if(0===f){var b;T=(0,s.getMyReplyAQdata)(g,l,o),i.setData((b={},e(b,v,p.list.length?[].concat(a(p.list),a(T)):T),e(b,y,h),b)),n<u?(i.handleError(2,m),i.handleError(!1,D)):(i.handleError(1,m),i.handleError(!0,D))}else{var w;T=(0,s.getNewAQdata)({oriCommList:l,repCommList:c,userList:o}),i.setData((w={},e(w,v,p.list.length?[].concat(a(p.list),a(T)):T),e(w,y,h),w)),d?i.handleError(1,m):i.handleError(2,m),i.handleError(void 0===d||d,D)}}else i.handleError(2,m)}else i.handleError(3,m)},fail:function(t){i.handleError(3,m)}})},handleError:function(t,a){this.setData(e({},a,t))},scrollToLower:function(){var t=this.data.currentTab;this.data.list[t].hasMoreData&&this.getData()},updateTab:function(t){this.setData({currentTab:t}),this.data.list[t].list.length||this.getFetchData()},changeTab:function(t){var e=t.target.id.split("_")[1];this.updateTab(Number(e))},changeSwiper:function(t){"touch"===t.detail.source&&this.updateTab(t.detail.current)},collection:function(t){var e=this,a=t.detail,i=a.channelid,r=a.iscolled,n=a.index,s=a.type;"collection"===t.type&&(u.showToast(this,{type:s}),s%2!=0&&(e.data.list[i].list[n].iscolled=r),(0,o.default)("solutionPage"))},upEvent:function(t){var e=t.detail,a=e.channelid,i=e.index,r=e.isup,n=e.up,s=e.isfail,l=e.type;if(s)u.showToast(this,{params:{title:l?"点赞失败":"取消点赞失败",desc:"",status:0}});else{var c=this.data.list[a].list[i];c.up=n,c.isup=r,(0,o.default)("solutionPage")}},navigateToQue:function(){wx.navigateTo({url:"../solution_publish/solution_publish"})},navigateToSolution:function(){wx.switchTab({url:"../solution/solution"})},gobackHome:function(){wx.navigateBack()}}); 
 			}); 	require("pages/personal_question/personal_question.js");
 		__wxRoute = 'pages/solution_publish/solution_publish';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/solution_publish/solution_publish.js';	define("pages/solution_publish/solution_publish.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var a=e(require("../../js/fetch.js")),i=(e(require("../../template/shareview")),require("../../js/util.js")),s=e(require("../../js/update_page_list.js")),r=(e(require("../../js/login.js")),require("../../js/mta_analysis.js")),o=getApp().globalData;Page({data:{targetid:"",focus:!0,pictureLen:0,img:["../../images/cs/img1.png"],pictures:[],resultPictures:[],inputValue:"",errCode:1,publishAble:!0,iv:"",encryptedData:"",navigationHeight:o.navigationHeight,navigationTitleTop:o.navigationTitleTop,modalType:0,modalVisible:!1,modalSrc:"",modalText:"",modalBtnText:"",showModalCancal:"true",showTextarea:!0,showSubscribeTip:!1},onLoad:function(e){r.Page.init(),this.setData({targetid:e.targetid}),this.getUserinfo()},handleInput:function(e){this.setData({inputValue:e.detail.value.trim()})},handleAddPicture:function(e){if(e.currentTarget.dataset.add){var t=this,a=t.data.pictures;wx.chooseImage({count:3-a.length,sourceType:["album","camera"],success:function(e){"chooseImage:ok"===e.errMsg&&e.tempFilePaths.forEach(function(e,a){t.uploadFile(e,a)})},fail:function(e){console.log(9999,e)}})}},uploadFile:function(e,t){var a=this,s=wx.getStorageSync("sessionid"),r=wx.getStorageSync("openid"),u=a.data,n=(u.inputValue,u.targetid,u.pictures),c=u.iv,l=u.encryptedData;wx.uploadFile({url:"https://upload.coral.qq.com/image/upload",filePath:e,name:"picture",formData:{_method:"put",g_tk:(0,i.getgkt)(s),source:112,logintype:14,sessionid:s,openid:r,appid:"wxd7bec290bace5e42",iv:c,encryptedData:l},success:function(t){var i=JSON.parse(t.data),s=a.data.resultPictures;if(0===i.errCode){n.push(e);var r=i.data.picture[0];s.push(r),a.setData({resultPictures:s,pictures:n,pictureLen:n.length})}else o.showToast(a,{params:{title:"上传图片失败",desc:"",status:0}})},fail:function(e){console.log(e)}})},handleDelPicture:function(e){var t=e.currentTarget.dataset.index,a=this.data,i=a.pictures,s=a.resultPictures;i.splice(t,1),s.splice(t,1),this.setData({pictures:i,pictureLen:i.length,resultPictures:s})},handleCancel:function(){wx.navigateBack()},getUserinfo:function(){var e=this;wx.getUserInfo({success:function(t){"getUserInfo:ok"===t.errMsg&&e.setData({iv:t.iv,encryptedData:t.encryptedData})}})},closeModal:function(e){this.setData({modalVisible:!1})},handlePublish:function(e){var t=this,s=wx.getStorageSync("openid"),r=wx.getStorageSync("sessionid"),o=t.data,u=o.targetid,n=o.iv,c=o.encryptedData;(0,a.default)({url:"https://vp.fact.qq.com/showSubTip",data:{type:"all",targetid:u,g_tk:(0,i.getgkt)(r),sessionid:r,openid:s,commentid:0,encryptedData:c,iv:n},success:function(a){0===a.errCode?(a.data.showtip&&wx.requestSubscribeMessage?t.setData({showSubscribeTip:!0}):t.setData({showSubscribeTip:!1}),t.callSubscribe(e)):t.callSubscribe(e)},fail:function(a){t.callSubscribe(e)}})},callSubscribe:function(e){var t=this;if(wx.requestSubscribeMessage){wx.requestSubscribeMessage({tmplIds:["Pcr_lcpZE4aPw41GDvoC0y2PGx75djQAFXejzKdkdoI"],success:function(a){"requestSubscribeMessage:ok"===a.errMsg&&(t.setData({showSubscribeTip:!1,showTextarea:!0}),t.submitPublishParams(e))},fail:function(e){t.setData({showSubscribeTip:!1,showTextarea:!1}),o.showModal(t,0)}})}else t.submitPublishParams(e)},submitPublishParams:function(e){var t=this;if(t.closeModal(),t.data.publishAble&&t.data.inputValue.length>=5){t.updateData("publishAble",!1);var u=wx.getStorageSync("sessionid"),n=wx.getStorageSync("openid"),c=t.data,l=c.inputValue,d=c.targetid,p=c.resultPictures,g=c.iv,h=c.encryptedData,b={targetid:d,content:l,g_tk:(0,i.getgkt)(u),_method:"put",source:112,logintype:14,sessionid:u,openid:n,appid:"wxd7bec290bace5e42",iv:g,encryptedData:h};p.length&&(b.picture=JSON.stringify(p)),(0,a.default)({url:"https://w.coral.qq.com/article/comment",method:"POST",contentType:"application/x-www-form-urlencoded",data:b,success:function(e){0===e.errCode?((0,s.default)("solutionPage"),t.setData({errCode:e.errCode})):14===e.errCode?o.showToast(t,{params:{title:"该问题已提交过",desc:"换个问题再问吧",status:0}}):o.showToast(t,{params:{title:"发布失败",desc:"",status:0}}),t.updateData("publishAble",!0)},fail:function(e){console.log(e),t.updateData("subscribeTime",0),t.updateData("publishAble",!0)}}),r.Event.stat("postquestion",{title:l})}},updateData:function(e,a){this.setData(t({},e,a))},navigateToSolution:function(){wx.switchTab({url:"../solution/solution"})}}); 
 			}); 	require("pages/solution_publish/solution_publish.js");
 		__wxRoute = 'pages/solution_detail/solution_detail';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/solution_detail/solution_detail.js';	define("pages/solution_detail/solution_detail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return t&&t.__esModule?t:{default:t}}function e(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},i=t(require("../../js/fetch.js")),n=(t(require("../../template/shareview")),require("../../js/rebuild_data.js")),s=t(require("../../js/update_page_list.js")),o=require("../../js/mta_analysis.js"),r=getApp().globalData;Page({data:{searchParams:null,data:null,userinfo:null,loading:!0,navigationHeight:r.navigationHeight,navigationTitleTop:r.navigationTitleTop},onLoad:function(t){o.Page.init();var e=r.userInfo;e&&this.setData({userinfo:e}),this.setData({searchParams:t}),this.getData(a({},t))},onReady:function(){},getData:function(t){var a=this,s=t.id;t.targetid;(0,i.default)({url:"https://vp.fact.qq.com/miniQuesInfo",data:{commentid:s,sessionid:this.data.userinfo?wx.getStorageSync("sessionid"):"",cursor:0},success:function(t){if(0===t.errCode){var i=t.data,o=i.oriComment,r=i.userList,l=i.repCommList,u=(0,n.getNewAQdata)({oriCommList:[o],userList:r,repCommList:l.length?e({},s,[l[0]]):null});a.setData({data:u[0],loading:!1})}else a.setData({data:null,loading:"加载失败"})},fail:function(){a.setData({data:null,loading:"加载失败"})}})},onShareAppMessage:function(t){var e=this.data.data,a=e.id,i={title:"",path:"pages/solution_detail/solution_detail?targetid="+e.targetid+"&id="+a+"&from=share"};return o.Event.stat("share",{typee:"question",title:"详情页"}),i},collection:function(t){var e=t.detail,a=(e.channelid,e.iscolled,e.index,e.type),i=(e.from,t.type);(0,s.default)("solutionPage"),"collection"===i&&r.showToast(this,{type:a})},upEvent:function(t){var e=t.detail,a=(e.channelid,e.index,e.isup,e.up,e.isfail),i=e.type;e.from;8===i?r.showToast(this,{type:i}):a?r.showToast(this,"",{params:{title:i?"点赞失败":"取消点赞失败",desc:"",status:0}}):(0,s.default)("solutionPage")},handleToLeave:function(){wx.switchTab({url:"../solution/solution"})}}); 
 			}); 	require("pages/solution_detail/solution_detail.js");
 	