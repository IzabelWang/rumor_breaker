	var __wxAppData = __wxAppData || {}; 	var __wxRoute = __wxRoute || ""; 	var __wxRouteBegin = __wxRouteBegin || ""; 	var __wxAppCode__ = __wxAppCode__ || {};	var global = global || {};	var __WXML_GLOBAL__=__WXML_GLOBAL__ || {};	var __wxAppCurrentFile__=__wxAppCurrentFile__||""; 	var Component = Component || function(){};	var definePlugin = definePlugin || function(){};	var requirePlugin = requirePlugin || function(){};	var Behavior = Behavior || function(){};	var __vd_version_info__ = __vd_version_info__ || {};
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
Z([[7],[3,'canClose']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'cardData']])
Z([a,[3,'cardDetail '],[[2,'?:'],[[7],[3,'isIpx']],[1,'fix-iphonex'],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'isSpecil']],[1,'specialDetail'],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'showBottomPopup']],[1,'inPopup'],[1,'']]])
Z([[2,'!'],[[7],[3,'isSpecil']]])
Z([3,'banner_box'])
Z([[2,'&&'],[[7],[3,'collectInfo']],[[2,'>'],[[6],[[7],[3,'collectInfo']],[3,'length']],[1,1]]])
Z([[2,'!'],[[7],[3,'customInfo']]])
Z([[7],[3,'customInfo']])
Z([[2,'&&'],[[7],[3,'isSpecil']],[[2,'=='],[[6],[[7],[3,'cardData']],[3,'theme_type']],[1,'1']]])
Z(z[7])
Z(z[5])
Z(z[2])
Z([[7],[3,'isSpecil']])
Z([[6],[[7],[3,'cardData']],[3,'goods_list']])
Z([3,'key'])
Z([3,'good-item'])
Z([[2,'!'],[[7],[3,'isSelfGifting']]])
Z([[7],[3,'isSelfGifting']])
Z([3,'collectAgain'])
Z([3,'closeMaxTips'])
Z([3,'collect_tips_box'])
Z([[7],[3,'closeType']])
Z([[7],[3,'isIpx']])
Z([[7],[3,'maxTips']])
Z([[7],[3,'tipsData']])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'showFake']]])
Z([[2,'=='],[[6],[[7],[3,'info']],[3,'type']],[1,2]])
Z([[7],[3,'showFake']])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'collect '],[[2,'?:'],[[7],[3,'isIpx']],[1,'fix-iphonex'],[1,'']]])
Z([[7],[3,'noData']])
Z([[7],[3,'videoShow']])
Z([[2,'&&'],[[2,'>'],[[6],[[7],[3,'collectList']],[3,'length']],[1,0]],[[2,'!'],[[7],[3,'noData']]]])
Z([[7],[3,'collectList']])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([[7],[3,'item']])
Z([3,'collectAgain'])
Z([3,'closeMaxTips'])
Z([3,'collect_tips_box'])
Z([[7],[3,'closeType']])
Z([[7],[3,'isIpx']])
Z([[7],[3,'maxTips']])
Z([[7],[3,'tipsData']])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'needAuth']])
Z([3,'handleAuth'])
Z([3,'popupClose'])
Z([1,false])
Z([[7],[3,'showAuthPopup']])
Z([[2,'==='],[[7],[3,'needAuth']],[1,false]])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'init'])
Z([a,[[7],[3,'scr']],[3,' mid-content']])
Z([[7],[3,'cover_list']])
Z([3,'idx'])
Z([3,'item'])
Z(z[2])
Z([3,'key'])
Z([3,'selectCard'])
Z([3,'card-item'])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([[6],[[7],[3,'item']],[3,'image']])
Z([[7],[3,'idx']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'id']],[[6],[[7],[3,'cover_curr']],[3,'id']]])
Z([[7],[3,'firstCoupon']])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'edit '],[[2,'?:'],[[2,'=='],[[7],[3,'isInit']],[1,2]],[1,'init'],[1,'']]])
Z([3,'clearSelected'])
Z([3,'bg'])
Z([a,[3,'background: url('],[[7],[3,'background_url']],[3,') no-repeat center top / 100% auto;']])
Z([[2,'!'],[[2,'&&'],[[7],[3,'isAndroid']],[[2,'=='],[[7],[3,'scr']],[1,'nml']]]])
Z([3,'fade_box'])
Z([[7],[3,'tipsShow']])
Z(z[1])
Z([a,[[7],[3,'scr']],[3,' '],[[2,'?:'],[[7],[3,'isAndroid']],[1,'android'],[1,'']],[3,' '],[[2,'?:'],[[2,'!'],[[7],[3,'hiddenInput']]],[1,'high-top'],[1,'']],[3,' edit-card-canvas '],[[2,'?:'],[[2,'&&'],[[7],[3,'isAndroid']],[[2,'=='],[[7],[3,'scr']],[1,'nml']]],[1,'none_title'],[1,'']]])
Z([[7],[3,'userList']])
Z([[7],[3,'index']])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'disable']]])
Z([3,'onChange'])
Z([3,'tstart'])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([3,'all'])
Z([[2,'!='],[[7],[3,'index']],[[7],[3,'selectedId']]])
Z(z[14])
Z([3,'false'])
Z([a,[3,'width:'],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'item']],[3,'width']],[1,0]],[1,'auto'],[1,'1px']],[3,';height:'],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'item']],[3,'height']],[1,0]],[1,'auto'],[1,'1px']],[3,';z-index: '],[[6],[[7],[3,'item']],[3,'zIndex']]])
Z([[6],[[7],[3,'item']],[3,'ox']])
Z([[6],[[7],[3,'item']],[3,'oy']])
Z([3,'movable_box'])
Z([a,[3,'position:absolute;top:50%;left:50%;transform:translate3d(-50%, -50%, 0) rotate('],[[6],[[7],[3,'item']],[3,'rotate']],[3,'deg) scale('],[[6],[[7],[3,'item']],[3,'scale']],[3,');width:'],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'item']],[3,'width']],[1,0]],[1,'auto'],[[2,'+'],[[6],[[7],[3,'item']],[3,'width']],[1,'px']]],z[19][3],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'item']],[3,'height']],[1,0]],[1,'auto'],[[2,'+'],[[6],[[7],[3,'item']],[3,'height']],[1,'px']]]])
Z([[2,'=='],[[7],[3,'index']],[[7],[3,'selectedId']]])
Z([a,[3,'text_box '],[[2,'?:'],[[2,'=='],[[7],[3,'index']],[[7],[3,'selectedId']]],[1,'selected2'],[1,'']],z[8][2]])
Z([a,z[19][1],z[23][6],z[19][3],z[23][8]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'1']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'2']])
Z(z[24])
Z([[2,'&&'],[[2,'=='],[[7],[3,'index']],[[7],[3,'selectedId']]],[[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'2']]])
Z([[2,'&&'],[[2,'!='],[[7],[3,'selectedId']],[[2,'-'],[1,1]]],[[7],[3,'hiddenInput']]])
Z([[7],[3,'tabList']])
Z(z[10])
Z(z[27])
Z(z[28])
Z([3,'bindChange'])
Z(z[10])
Z([3,'width: 100%; height: 210rpx; background-color: #fff;'])
Z([[4],[[5],[[7],[3,'wishesSel']]]])
Z([[2,'<'],[[7],[3,'textNum']],[[6],[[7],[3,'maxLength']],[3,'text']]])
Z([3,'handleAuth'])
Z([[7],[3,'showAuthPopup']])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'mode_fade'])
Z([[7],[3,'showModal']])
Z([3,'changeModal'])
Z([3,'modal-show'])
Z([3,'catchModal'])
Z([a,[3,'white-save-wrapper '],[[2,'?:'],[[7],[3,'iphoneX']],[1,'iphoneX'],[1,'']],[3,' '],[[2,'?:'],[[2,'&&'],[[7],[3,'isAndroid']],[[2,'=='],[[7],[3,'scr']],[1,'nml']]],[1,'android'],[1,'']]])
Z([[7],[3,'getCoupon']])
Z([[7],[3,'tipsShow']])
Z([3,'star-button-wrapper'])
Z([[2,'&&'],[[2,'!'],[[7],[3,'saved']]],[[2,'!'],[[7],[3,'openSettinged']]]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'saved']]],[[7],[3,'openSettinged']]])
Z([[7],[3,'saved']])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'key'])
Z([3,'value'])
Z([[7],[3,'error']])
Z([3,'*'])
Z([[2,'&&'],[[2,'!=='],[[7],[3,'key']],[1,'msg']],[[7],[3,'value']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[2,'==='],[[7],[3,'activity_status']],[1,1]])
Z([[7],[3,'activity_description_image']])
Z([[2,'==='],[[7],[3,'activity_status']],[1,0]])
Z([3,'handleAuth'])
Z([[7],[3,'showAuthPopup']])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'indexData']])
Z([[2,'&&'],[[6],[[7],[3,'backgroundInfo']],[3,'image']],[[2,'=='],[[6],[[7],[3,'backgroundInfo']],[3,'type']],[1,'fixed']]])
Z([[7],[3,'showPopup']])
Z([3,'handleAuth'])
Z([[7],[3,'showAuthPopup']])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'invoice-body '],[[2,'?:'],[[2,'=='],[[7],[3,'applyType']],[1,'2']],[1,'enterprise'],[1,'']]])
Z([3,'invoiceSubmit'])
Z([[2,'!='],[[6],[[6],[[7],[3,'iptPlaceholder']],[1,'title']],[[7],[3,'applyType']]],[[2,'-'],[1,1]]])
Z([[2,'!='],[[6],[[6],[[7],[3,'iptPlaceholder']],[1,'dutyNum']],[[7],[3,'applyType']]],[[2,'-'],[1,1]]])
Z([[2,'!='],[[6],[[6],[[7],[3,'iptPlaceholder']],[1,'phone']],[[7],[3,'applyType']]],[[2,'-'],[1,1]]])
Z([[2,'!='],[[6],[[6],[[7],[3,'iptPlaceholder']],[1,'name']],[[7],[3,'applyType']]],[[2,'-'],[1,1]]])
Z([[2,'!='],[[6],[[6],[[7],[3,'iptPlaceholder']],[1,'email']],[[7],[3,'applyType']]],[[2,'-'],[1,1]]])
Z([[7],[3,'showRule']])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'status-body'])
Z([[2,'!'],[[7],[3,'showDetail']]])
Z([3,'result'])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'currentStatus']],[3,'type']],[1,'Ing']],[[2,'=='],[[6],[[7],[3,'currentStatus']],[3,'type']],[1,'RefundIng']]])
Z([[2,'=='],[[6],[[7],[3,'currentStatus']],[3,'type']],[1,'ERROR']])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'currentStatus']],[3,'type']],[1,'End']],[[2,'=='],[[6],[[7],[3,'currentStatus']],[3,'type']],[1,'RefundEnd']]])
Z([[2,'=='],[[6],[[7],[3,'currentStatus']],[3,'type']],[1,'Ing']])
Z([[7],[3,'showDetail']])
Z([[2,'=='],[[6],[[7],[3,'invoiceData']],[3,'invoice_type']],[1,2]])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'orders'])
Z([a,[3,'order '],[[2,'?:'],[[7],[3,'isIpx']],[1,'fix-iphonex'],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'showTipImg']],[1,'order__hastip'],[1,'']]])
Z([[7],[3,'noOrders']])
Z([3,'onReachBottom'])
Z([3,'scroll-view_H'])
Z([3,'40'])
Z([[7],[3,'orders']])
Z([3,'key'])
Z([[2,'!'],[[7],[3,'noOrders']]])
Z([3,'cover'])
Z([[6],[[7],[3,'item']],[3,'is_favorite']])
Z([3,'content'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'for_self']],[1,'0']])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'for_self']],[1,'1']],[[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,'1']]])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'for_self']],[1,'1']],[[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,'2']]])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,1]],[[2,'=='],[[6],[[7],[3,'item']],[3,'for_self']],[1,'0']]])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'for_self']],[1,'1']],[[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,1]]])
Z([[7],[3,'showTipImg']])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'order']])
Z([a,[3,'orderDetail '],[[2,'?:'],[[7],[3,'isIpx']],[1,'fix-iphonex'],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'isIOS']],[1,''],[1,'isAndroid']]])
Z([[2,'=='],[[6],[[6],[[7],[3,'order']],[3,'code_list']],[3,'length']],[1,1]])
Z([3,'order-container'])
Z([[2,'>'],[[6],[[6],[[7],[3,'order']],[3,'code_list']],[3,'length']],[1,1]])
Z([[2,'>'],[[6],[[6],[[7],[3,'order']],[3,'code_list']],[3,'length']],[1,3]])
Z([3,'many many-common'])
Z(z[2])
Z([3,'many-item'])
Z([[2,'&&'],[[2,'!'],[[6],[[6],[[7],[3,'order']],[3,'order_detail']],[3,'custom_word']]],[[2,'=='],[[6],[[6],[[7],[3,'order']],[3,'order_detail']],[3,'for_self']],[1,'0']]])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[6],[[6],[[7],[3,'order']],[3,'order_detail']],[3,'custom_word']]],[[2,'=='],[[6],[[6],[[7],[3,'order']],[3,'order_detail']],[3,'for_self']],[1,'1']]],[[2,'=='],[[6],[[6],[[7],[3,'order']],[3,'order_detail']],[3,'status']],[1,'1']]])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[6],[[6],[[7],[3,'order']],[3,'order_detail']],[3,'custom_word']]],[[2,'=='],[[6],[[6],[[7],[3,'order']],[3,'order_detail']],[3,'for_self']],[1,'1']]],[[2,'=='],[[6],[[6],[[7],[3,'order']],[3,'order_detail']],[3,'status']],[1,'2']]])
Z([[6],[[6],[[7],[3,'order']],[3,'order_detail']],[3,'custom_word']])
Z([[2,'=='],[[6],[[6],[[7],[3,'order']],[3,'order_detail']],[3,'status']],[1,1]])
Z(z[8])
Z([[2,'&&'],[[2,'=='],[[6],[[6],[[7],[3,'order']],[3,'order_detail']],[3,'for_self']],[1,'1']],[[2,'=='],[[6],[[6],[[7],[3,'order']],[3,'order_detail']],[3,'status']],[1,'1']]])
Z([[2,'=='],[[6],[[6],[[7],[3,'order']],[3,'order_detail']],[3,'for_self']],[1,'0']])
Z([3,'handleAuth'])
Z([[7],[3,'showAuthPopup']])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'refund_application'])
Z([3,'refundSubmit'])
Z([[6],[[7],[3,'refundData']],[3,'is_self']])
Z([[6],[[7],[3,'refundData']],[3,'own_code']])
Z([3,'key'])
Z([3,'selectTap'])
Z([3,'prod-item'])
Z([[6],[[7],[3,'item']],[3,'code_no']])
Z([[7],[3,'index']])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'status']],[1,'7']])
Z([[2,'!'],[[7],[3,'isChooseCase']]])
Z([[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'refundData']],[3,'own_code']],[3,'length']],[1,0]],[[2,'=='],[[6],[[6],[[7],[3,'refundData']],[3,'friends_code']],[3,'length']],[1,0]]])
Z([[2,'&&'],[[2,'>'],[[6],[[6],[[7],[3,'refundData']],[3,'own_code']],[3,'length']],[1,0]],[[2,'>'],[[6],[[6],[[7],[3,'refundData']],[3,'friends_code']],[3,'length']],[1,0]]])
Z([[7],[3,'greaterThanHeight']])
Z([[7],[3,'showRule']])
Z([[2,'!'],[[7],[3,'greaterThanHeight']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'refundFriendData']])
Z([3,'refund_application'])
Z([3,'header'])
Z([[2,'!='],[[6],[[7],[3,'refundFriendData']],[3,'refund_status']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'refundFriendData']],[3,'refund_status']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'refundFriendData']],[3,'refund_status']],[1,2]])
Z(z[4])
Z(z[4])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'refundFriendData']],[3,'refund_status']],[1,3]],[[2,'=='],[[7],[3,'infoShow']],[1,false]]])
Z([3,'refundSubmit'])
Z([3,'tipAgreeTap'])
Z([3,'tips'])
Z([[7],[3,'agree']])
Z([[7],[3,'showRule']])
Z([3,'handleAuth'])
Z([3,'popupClose'])
Z([[7],[3,'showAuthPopup']])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'refundResult'])
Z([[2,'=='],[[7],[3,'currentStatus']],[1,3]])
Z([[2,'!='],[[7],[3,'currentStatus']],[1,3]])
Z([[2,'=='],[[7],[3,'currentStatus']],[1,2]])
Z([[2,'=='],[[7],[3,'currentStatus']],[1,1]])
Z(z[1])
Z(z[4])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/authPopup/authPopup.wxml','./components/collectTips/collectTips.wxml','./components/fadeBox/fadeBox.wxml','./pages/cardDetail/cardDetail.wxml','./pages/cardQr/cardQr.wxml','./pages/check/check.wxml','./pages/collectList/collectList.wxml','./pages/crsmx/crsmx.wxml','./pages/diy/diy.wxml','./pages/diy/edit/edit.wxml','./pages/diy/result/result.wxml','./pages/diy/rule/rule.wxml','./pages/error/error.wxml','./pages/getCardPage/getCardPage.wxml','./pages/h5/h5.wxml','./pages/index/index.wxml','./pages/invoice/apply/apply.wxml','./pages/invoice/status/status.wxml','./pages/order/order.wxml','./pages/orderDetail/orderDetail.wxml','./pages/privacy/privacy.wxml','./pages/promotion/promotion.wxml','./pages/refund/errorAuthorize/errorAuthorize.wxml','./pages/refund/packageDetail/packageDetail.wxml','./pages/refund/refundApplication/refundApplication.wxml','./pages/refund/refundError/refundError.wxml','./pages/refund/refundFriend/refundFriend.wxml','./pages/refund/refundResult/refundResult.wxml','./pages/store/store.wxml','./pages/terms/terms.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var fE=_n('slot')
_(r,fE)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var hG=_v()
_(r,hG)
if(_oz(z,0,e,s,gg)){hG.wxVkey=1
var oH=_n('view')
_rz(z,oH,'class',1,e,s,gg)
var cI=_v()
_(oH,cI)
if(_oz(z,2,e,s,gg)){cI.wxVkey=1
var bO=_n('view')
_rz(z,bO,'class',3,e,s,gg)
var oP=_v()
_(bO,oP)
if(_oz(z,4,e,s,gg)){oP.wxVkey=1
}
var xQ=_v()
_(bO,xQ)
if(_oz(z,5,e,s,gg)){xQ.wxVkey=1
}
var oR=_v()
_(bO,oR)
if(_oz(z,6,e,s,gg)){oR.wxVkey=1
}
oP.wxXCkey=1
xQ.wxXCkey=1
oR.wxXCkey=1
_(cI,bO)
}
var oJ=_v()
_(oH,oJ)
if(_oz(z,7,e,s,gg)){oJ.wxVkey=1
}
var lK=_v()
_(oH,lK)
if(_oz(z,8,e,s,gg)){lK.wxVkey=1
}
var aL=_v()
_(oH,aL)
if(_oz(z,9,e,s,gg)){aL.wxVkey=1
}
var tM=_v()
_(oH,tM)
if(_oz(z,10,e,s,gg)){tM.wxVkey=1
}
var eN=_v()
_(oH,eN)
if(_oz(z,11,e,s,gg)){eN.wxVkey=1
}
var fS=_v()
_(oH,fS)
var cT=function(oV,hU,cW,gg){
var lY=_n('view')
_rz(z,lY,'class',14,oV,hU,gg)
var aZ=_v()
_(lY,aZ)
if(_oz(z,15,oV,hU,gg)){aZ.wxVkey=1
}
var t1=_v()
_(lY,t1)
if(_oz(z,16,oV,hU,gg)){t1.wxVkey=1
}
aZ.wxXCkey=1
t1.wxXCkey=1
_(cW,lY)
return cW
}
fS.wxXCkey=2
_2z(z,12,cT,e,s,gg,fS,'item','index','key')
var e2=_mz(z,'collect-tips',['bindagain',17,'bindcloseMaxTips',1,'class',2,'closeType',3,'isIpx',4,'maxTips',5,'tipsData',6],[],e,s,gg)
_(oH,e2)
cI.wxXCkey=1
oJ.wxXCkey=1
lK.wxXCkey=1
aL.wxXCkey=1
tM.wxXCkey=1
eN.wxXCkey=1
_(hG,oH)
}
hG.wxXCkey=1
hG.wxXCkey=3
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var o4=_v()
_(r,o4)
if(_oz(z,0,e,s,gg)){o4.wxVkey=1
var o6=_v()
_(o4,o6)
if(_oz(z,1,e,s,gg)){o6.wxVkey=1
}
o6.wxXCkey=1
}
var x5=_v()
_(r,x5)
if(_oz(z,2,e,s,gg)){x5.wxVkey=1
}
o4.wxXCkey=1
x5.wxXCkey=1
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var h9=_n('view')
_rz(z,h9,'class',0,e,s,gg)
var o0=_v()
_(h9,o0)
if(_oz(z,1,e,s,gg)){o0.wxVkey=1
var oBB=_v()
_(o0,oBB)
if(_oz(z,2,e,s,gg)){oBB.wxVkey=1
}
oBB.wxXCkey=1
}
var cAB=_v()
_(h9,cAB)
if(_oz(z,3,e,s,gg)){cAB.wxVkey=1
var lCB=_v()
_(cAB,lCB)
var aDB=function(eFB,tEB,bGB,gg){
var xIB=_v()
_(bGB,xIB)
if(_oz(z,6,eFB,tEB,gg)){xIB.wxVkey=1
}
xIB.wxXCkey=1
return bGB
}
lCB.wxXCkey=2
_2z(z,4,aDB,e,s,gg,lCB,'item','index','{{item.id}}')
}
var oJB=_mz(z,'collect-tips',['bindagain',7,'bindcloseMaxTips',1,'class',2,'closeType',3,'isIpx',4,'maxTips',5,'tipsData',6],[],e,s,gg)
_(h9,oJB)
o0.wxXCkey=1
cAB.wxXCkey=1
_(r,h9)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var cLB=_v()
_(r,cLB)
if(_oz(z,0,e,s,gg)){cLB.wxVkey=1
var oNB=_mz(z,'auth-popup',['bindauth',1,'bindpopupClose',1,'canClose',2,'show',3],[],e,s,gg)
_(cLB,oNB)
}
var hMB=_v()
_(r,hMB)
if(_oz(z,5,e,s,gg)){hMB.wxVkey=1
}
cLB.wxXCkey=1
cLB.wxXCkey=3
hMB.wxXCkey=1
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var oPB=_n('view')
_rz(z,oPB,'class',0,e,s,gg)
var aRB=_n('view')
_rz(z,aRB,'class',1,e,s,gg)
var tSB=_v()
_(aRB,tSB)
if(_oz(z,2,e,s,gg)){tSB.wxVkey=1
}
var eTB=_v()
_(aRB,eTB)
var bUB=function(xWB,oVB,oXB,gg){
var cZB=_mz(z,'view',['catchtap',7,'class',1,'data-id',2,'data-image',3,'data-index',4],[],xWB,oVB,gg)
var h1B=_v()
_(cZB,h1B)
if(_oz(z,12,xWB,oVB,gg)){h1B.wxVkey=1
}
h1B.wxXCkey=1
_(oXB,cZB)
return oXB
}
eTB.wxXCkey=2
_2z(z,5,bUB,e,s,gg,eTB,'item','idx','key')
tSB.wxXCkey=1
_(oPB,aRB)
var lQB=_v()
_(oPB,lQB)
if(_oz(z,13,e,s,gg)){lQB.wxVkey=1
}
lQB.wxXCkey=1
_(r,oPB)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var c3B=_n('view')
_rz(z,c3B,'class',0,e,s,gg)
var o4B=_mz(z,'view',['catchtap',1,'class',1,'style',2],[],e,s,gg)
var l5B=_v()
_(o4B,l5B)
if(_oz(z,4,e,s,gg)){l5B.wxVkey=1
}
l5B.wxXCkey=1
_(c3B,o4B)
var a6B=_mz(z,'fade-box',['class',5,'showType',1],[],e,s,gg)
_(c3B,a6B)
var t7B=_mz(z,'view',['bindtap',7,'class',1],[],e,s,gg)
var b9B=_v()
_(t7B,b9B)
var o0B=function(oBC,xAC,fCC,gg){
var hEC=_v()
_(fCC,hEC)
if(_oz(z,11,oBC,xAC,gg)){hEC.wxVkey=1
var oFC=_mz(z,'movable-view',['bindchange',12,'catchtap',1,'data-id',2,'direction',3,'disabled',4,'id',5,'outOfBounds',6,'style',7,'x',8,'y',9],[],oBC,xAC,gg)
var cGC=_mz(z,'view',['class',22,'style',1],[],oBC,xAC,gg)
var oHC=_v()
_(cGC,oHC)
if(_oz(z,24,oBC,xAC,gg)){oHC.wxVkey=1
}
var lIC=_mz(z,'view',['class',25,'style',1],[],oBC,xAC,gg)
var aJC=_v()
_(lIC,aJC)
if(_oz(z,27,oBC,xAC,gg)){aJC.wxVkey=1
}
var tKC=_v()
_(lIC,tKC)
if(_oz(z,28,oBC,xAC,gg)){tKC.wxVkey=1
}
var eLC=_v()
_(lIC,eLC)
if(_oz(z,29,oBC,xAC,gg)){eLC.wxVkey=1
}
var bMC=_v()
_(lIC,bMC)
if(_oz(z,30,oBC,xAC,gg)){bMC.wxVkey=1
}
aJC.wxXCkey=1
tKC.wxXCkey=1
eLC.wxXCkey=1
bMC.wxXCkey=1
_(cGC,lIC)
oHC.wxXCkey=1
_(oFC,cGC)
_(hEC,oFC)
}
hEC.wxXCkey=1
return fCC
}
b9B.wxXCkey=2
_2z(z,9,o0B,e,s,gg,b9B,'item','index','{{index}}')
var e8B=_v()
_(t7B,e8B)
if(_oz(z,31,e,s,gg)){e8B.wxVkey=1
}
e8B.wxXCkey=1
_(c3B,t7B)
var oNC=_v()
_(c3B,oNC)
var xOC=function(fQC,oPC,cRC,gg){
var oTC=_v()
_(cRC,oTC)
if(_oz(z,34,fQC,oPC,gg)){oTC.wxVkey=1
}
var cUC=_v()
_(cRC,cUC)
if(_oz(z,35,fQC,oPC,gg)){cUC.wxVkey=1
var oVC=_mz(z,'picker-view',['bindchange',36,'data-tab',1,'style',2,'value',3],[],fQC,oPC,gg)
var lWC=_v()
_(oVC,lWC)
if(_oz(z,40,fQC,oPC,gg)){lWC.wxVkey=1
}
lWC.wxXCkey=1
_(cUC,oVC)
}
oTC.wxXCkey=1
cUC.wxXCkey=1
return cRC
}
oNC.wxXCkey=2
_2z(z,32,xOC,e,s,gg,oNC,'item','index','{{index}}')
_(r,c3B)
var aXC=_mz(z,'auth-popup',['bindauth',41,'show',1],[],e,s,gg)
_(r,aXC)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var eZC=_n('view')
var b1C=_mz(z,'fade-box',['class',0,'showType',1],[],e,s,gg)
var o2C=_mz(z,'view',['bindtap',2,'class',1],[],e,s,gg)
var x3C=_mz(z,'view',['catchtap',4,'class',1],[],e,s,gg)
var o4C=_v()
_(x3C,o4C)
if(_oz(z,6,e,s,gg)){o4C.wxVkey=1
}
o4C.wxXCkey=1
_(o2C,x3C)
_(b1C,o2C)
_(eZC,b1C)
var f5C=_n('view')
var c6C=_n('fade-box')
_rz(z,c6C,'showType',7,e,s,gg)
_(f5C,c6C)
var h7C=_n('view')
_rz(z,h7C,'class',8,e,s,gg)
var o8C=_v()
_(h7C,o8C)
if(_oz(z,9,e,s,gg)){o8C.wxVkey=1
}
var c9C=_v()
_(h7C,c9C)
if(_oz(z,10,e,s,gg)){c9C.wxVkey=1
}
var o0C=_v()
_(h7C,o0C)
if(_oz(z,11,e,s,gg)){o0C.wxVkey=1
}
o8C.wxXCkey=1
c9C.wxXCkey=1
o0C.wxXCkey=1
_(f5C,h7C)
_(eZC,f5C)
_(r,eZC)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var tCD=_v()
_(r,tCD)
var eDD=function(oFD,bED,xGD,gg){
var fID=_v()
_(xGD,fID)
if(_oz(z,4,oFD,bED,gg)){fID.wxVkey=1
}
fID.wxXCkey=1
return xGD
}
tCD.wxXCkey=2
_2z(z,2,eDD,e,s,gg,tCD,'value','key','*')
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var hKD=_n('view')
_rz(z,hKD,'class',0,e,s,gg)
var oLD=_v()
_(hKD,oLD)
if(_oz(z,1,e,s,gg)){oLD.wxVkey=1
var oND=_v()
_(oLD,oND)
if(_oz(z,2,e,s,gg)){oND.wxVkey=1
}
oND.wxXCkey=1
}
var cMD=_v()
_(hKD,cMD)
if(_oz(z,3,e,s,gg)){cMD.wxVkey=1
}
oLD.wxXCkey=1
cMD.wxXCkey=1
_(r,hKD)
var lOD=_mz(z,'auth-popup',['bindauth',4,'show',1],[],e,s,gg)
_(r,lOD)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var eRD=_v()
_(r,eRD)
if(_oz(z,0,e,s,gg)){eRD.wxVkey=1
var oTD=_v()
_(eRD,oTD)
if(_oz(z,1,e,s,gg)){oTD.wxVkey=1
}
oTD.wxXCkey=1
}
var bSD=_v()
_(r,bSD)
if(_oz(z,2,e,s,gg)){bSD.wxVkey=1
}
var xUD=_mz(z,'auth-popup',['bindauth',3,'show',1],[],e,s,gg)
_(r,xUD)
eRD.wxXCkey=1
bSD.wxXCkey=1
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var fWD=_n('view')
_rz(z,fWD,'class',0,e,s,gg)
var hYD=_n('form')
_rz(z,hYD,'bindsubmit',1,e,s,gg)
var oZD=_v()
_(hYD,oZD)
if(_oz(z,2,e,s,gg)){oZD.wxVkey=1
}
var c1D=_v()
_(hYD,c1D)
if(_oz(z,3,e,s,gg)){c1D.wxVkey=1
}
var o2D=_v()
_(hYD,o2D)
if(_oz(z,4,e,s,gg)){o2D.wxVkey=1
}
var l3D=_v()
_(hYD,l3D)
if(_oz(z,5,e,s,gg)){l3D.wxVkey=1
}
var a4D=_v()
_(hYD,a4D)
if(_oz(z,6,e,s,gg)){a4D.wxVkey=1
}
oZD.wxXCkey=1
c1D.wxXCkey=1
o2D.wxXCkey=1
l3D.wxXCkey=1
a4D.wxXCkey=1
_(fWD,hYD)
var cXD=_v()
_(fWD,cXD)
if(_oz(z,7,e,s,gg)){cXD.wxVkey=1
}
cXD.wxXCkey=1
_(r,fWD)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var e6D=_n('view')
_rz(z,e6D,'class',0,e,s,gg)
var b7D=_v()
_(e6D,b7D)
if(_oz(z,1,e,s,gg)){b7D.wxVkey=1
var x9D=_n('view')
_rz(z,x9D,'class',2,e,s,gg)
var o0D=_v()
_(x9D,o0D)
if(_oz(z,3,e,s,gg)){o0D.wxVkey=1
}
var fAE=_v()
_(x9D,fAE)
if(_oz(z,4,e,s,gg)){fAE.wxVkey=1
}
var cBE=_v()
_(x9D,cBE)
if(_oz(z,5,e,s,gg)){cBE.wxVkey=1
}
var hCE=_v()
_(x9D,hCE)
if(_oz(z,6,e,s,gg)){hCE.wxVkey=1
}
o0D.wxXCkey=1
fAE.wxXCkey=1
cBE.wxXCkey=1
hCE.wxXCkey=1
_(b7D,x9D)
}
var o8D=_v()
_(e6D,o8D)
if(_oz(z,7,e,s,gg)){o8D.wxVkey=1
var oDE=_v()
_(o8D,oDE)
if(_oz(z,8,e,s,gg)){oDE.wxVkey=1
}
oDE.wxXCkey=1
}
b7D.wxXCkey=1
o8D.wxXCkey=1
_(r,e6D)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var oFE=_v()
_(r,oFE)
if(_oz(z,0,e,s,gg)){oFE.wxVkey=1
var lGE=_n('view')
_rz(z,lGE,'class',1,e,s,gg)
var aHE=_v()
_(lGE,aHE)
if(_oz(z,2,e,s,gg)){aHE.wxVkey=1
}
var eJE=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',3,'class',1,'lowerThreshold',2],[],e,s,gg)
var bKE=_v()
_(eJE,bKE)
var oLE=function(oNE,xME,fOE,gg){
var hQE=_v()
_(fOE,hQE)
if(_oz(z,8,oNE,xME,gg)){hQE.wxVkey=1
var oRE=_n('view')
_rz(z,oRE,'class',9,oNE,xME,gg)
var cSE=_v()
_(oRE,cSE)
if(_oz(z,10,oNE,xME,gg)){cSE.wxVkey=1
}
var aVE=_n('view')
_rz(z,aVE,'class',11,oNE,xME,gg)
var tWE=_v()
_(aVE,tWE)
if(_oz(z,12,oNE,xME,gg)){tWE.wxVkey=1
}
var eXE=_v()
_(aVE,eXE)
if(_oz(z,13,oNE,xME,gg)){eXE.wxVkey=1
}
var bYE=_v()
_(aVE,bYE)
if(_oz(z,14,oNE,xME,gg)){bYE.wxVkey=1
}
tWE.wxXCkey=1
eXE.wxXCkey=1
bYE.wxXCkey=1
_(oRE,aVE)
var oTE=_v()
_(oRE,oTE)
if(_oz(z,15,oNE,xME,gg)){oTE.wxVkey=1
}
var lUE=_v()
_(oRE,lUE)
if(_oz(z,16,oNE,xME,gg)){lUE.wxVkey=1
}
cSE.wxXCkey=1
oTE.wxXCkey=1
lUE.wxXCkey=1
_(hQE,oRE)
}
hQE.wxXCkey=1
return fOE
}
bKE.wxXCkey=2
_2z(z,6,oLE,e,s,gg,bKE,'item','index','key')
_(lGE,eJE)
var tIE=_v()
_(lGE,tIE)
if(_oz(z,17,e,s,gg)){tIE.wxVkey=1
}
aHE.wxXCkey=1
tIE.wxXCkey=1
_(oFE,lGE)
}
oFE.wxXCkey=1
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var x1E=_v()
_(r,x1E)
if(_oz(z,0,e,s,gg)){x1E.wxVkey=1
var o2E=_n('view')
_rz(z,o2E,'class',1,e,s,gg)
var f3E=_v()
_(o2E,f3E)
if(_oz(z,2,e,s,gg)){f3E.wxVkey=1
}
var c4E=_mz(z,'scroll-view',['scrollY',-1,'class',3],[],e,s,gg)
var h5E=_v()
_(c4E,h5E)
if(_oz(z,4,e,s,gg)){h5E.wxVkey=1
var o6E=_v()
_(h5E,o6E)
if(_oz(z,5,e,s,gg)){o6E.wxVkey=1
}
o6E.wxXCkey=1
}
var c7E=_n('view')
_rz(z,c7E,'class',6,e,s,gg)
var o8E=_v()
_(c7E,o8E)
if(_oz(z,7,e,s,gg)){o8E.wxVkey=1
var a0E=_n('view')
_rz(z,a0E,'class',8,e,s,gg)
var tAF=_v()
_(a0E,tAF)
if(_oz(z,9,e,s,gg)){tAF.wxVkey=1
}
var eBF=_v()
_(a0E,eBF)
if(_oz(z,10,e,s,gg)){eBF.wxVkey=1
}
var bCF=_v()
_(a0E,bCF)
if(_oz(z,11,e,s,gg)){bCF.wxVkey=1
}
var oDF=_v()
_(a0E,oDF)
if(_oz(z,12,e,s,gg)){oDF.wxVkey=1
}
tAF.wxXCkey=1
eBF.wxXCkey=1
bCF.wxXCkey=1
oDF.wxXCkey=1
_(o8E,a0E)
}
var l9E=_v()
_(c7E,l9E)
if(_oz(z,13,e,s,gg)){l9E.wxVkey=1
var xEF=_n('view')
_rz(z,xEF,'class',14,e,s,gg)
var oFF=_v()
_(xEF,oFF)
if(_oz(z,15,e,s,gg)){oFF.wxVkey=1
}
var fGF=_v()
_(xEF,fGF)
if(_oz(z,16,e,s,gg)){fGF.wxVkey=1
}
oFF.wxXCkey=1
fGF.wxXCkey=1
_(l9E,xEF)
}
o8E.wxXCkey=1
l9E.wxXCkey=1
_(c4E,c7E)
h5E.wxXCkey=1
_(o2E,c4E)
f3E.wxXCkey=1
_(x1E,o2E)
}
var cHF=_mz(z,'auth-popup',['bindauth',17,'show',1],[],e,s,gg)
_(r,cHF)
x1E.wxXCkey=1
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var aNF=_n('view')
_rz(z,aNF,'class',0,e,s,gg)
var bQF=_n('form')
_rz(z,bQF,'bindsubmit',1,e,s,gg)
var oRF=_v()
_(bQF,oRF)
if(_oz(z,2,e,s,gg)){oRF.wxVkey=1
var cVF=_v()
_(oRF,cVF)
var hWF=function(cYF,oXF,oZF,gg){
var a2F=_mz(z,'view',['catchtap',5,'class',1,'data-code',2,'data-ind',3,'data-used',4],[],cYF,oXF,gg)
var t3F=_v()
_(a2F,t3F)
if(_oz(z,10,cYF,oXF,gg)){t3F.wxVkey=1
}
t3F.wxXCkey=1
_(oZF,a2F)
return oZF
}
cVF.wxXCkey=2
_2z(z,3,hWF,e,s,gg,cVF,'item','index','key')
}
var xSF=_v()
_(bQF,xSF)
if(_oz(z,11,e,s,gg)){xSF.wxVkey=1
}
var oTF=_v()
_(bQF,oTF)
if(_oz(z,12,e,s,gg)){oTF.wxVkey=1
}
var fUF=_v()
_(bQF,fUF)
if(_oz(z,13,e,s,gg)){fUF.wxVkey=1
}
oRF.wxXCkey=1
xSF.wxXCkey=1
oTF.wxXCkey=1
fUF.wxXCkey=1
_(aNF,bQF)
var tOF=_v()
_(aNF,tOF)
if(_oz(z,14,e,s,gg)){tOF.wxVkey=1
}
var ePF=_v()
_(aNF,ePF)
if(_oz(z,15,e,s,gg)){ePF.wxVkey=1
}
tOF.wxXCkey=1
ePF.wxXCkey=1
_(r,aNF)
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var o6F=_v()
_(r,o6F)
if(_oz(z,0,e,s,gg)){o6F.wxVkey=1
var x7F=_n('view')
_rz(z,x7F,'class',1,e,s,gg)
var cCG=_n('view')
_rz(z,cCG,'class',2,e,s,gg)
var oDG=_v()
_(cCG,oDG)
if(_oz(z,3,e,s,gg)){oDG.wxVkey=1
}
var lEG=_v()
_(cCG,lEG)
if(_oz(z,4,e,s,gg)){lEG.wxVkey=1
}
oDG.wxXCkey=1
lEG.wxXCkey=1
_(x7F,cCG)
var o8F=_v()
_(x7F,o8F)
if(_oz(z,5,e,s,gg)){o8F.wxVkey=1
}
var f9F=_v()
_(x7F,f9F)
if(_oz(z,6,e,s,gg)){f9F.wxVkey=1
}
var c0F=_v()
_(x7F,c0F)
if(_oz(z,7,e,s,gg)){c0F.wxVkey=1
}
var hAG=_v()
_(x7F,hAG)
if(_oz(z,8,e,s,gg)){hAG.wxVkey=1
var aFG=_n('form')
_rz(z,aFG,'bindsubmit',9,e,s,gg)
var tGG=_mz(z,'view',['catchtap',10,'class',1],[],e,s,gg)
var eHG=_v()
_(tGG,eHG)
if(_oz(z,12,e,s,gg)){eHG.wxVkey=1
}
eHG.wxXCkey=1
_(aFG,tGG)
_(hAG,aFG)
}
var oBG=_v()
_(x7F,oBG)
if(_oz(z,13,e,s,gg)){oBG.wxVkey=1
}
o8F.wxXCkey=1
f9F.wxXCkey=1
c0F.wxXCkey=1
hAG.wxXCkey=1
oBG.wxXCkey=1
_(o6F,x7F)
}
var bIG=_mz(z,'auth-popup',['bindauth',14,'bindpopupClose',1,'show',2],[],e,s,gg)
_(r,bIG)
o6F.wxXCkey=1
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var xKG=_n('view')
_rz(z,xKG,'class',0,e,s,gg)
var oLG=_v()
_(xKG,oLG)
if(_oz(z,1,e,s,gg)){oLG.wxVkey=1
}
var fMG=_v()
_(xKG,fMG)
if(_oz(z,2,e,s,gg)){fMG.wxVkey=1
}
var cNG=_v()
_(xKG,cNG)
if(_oz(z,3,e,s,gg)){cNG.wxVkey=1
}
var hOG=_v()
_(xKG,hOG)
if(_oz(z,4,e,s,gg)){hOG.wxVkey=1
}
var oPG=_v()
_(xKG,oPG)
if(_oz(z,5,e,s,gg)){oPG.wxVkey=1
}
var cQG=_v()
_(xKG,cQG)
if(_oz(z,6,e,s,gg)){cQG.wxVkey=1
}
oLG.wxXCkey=1
fMG.wxXCkey=1
cNG.wxXCkey=1
hOG.wxXCkey=1
oPG.wxXCkey=1
cQG.wxXCkey=1
_(r,xKG)
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
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
	__wxAppCode__['components/authPopup/authPopup.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/authPopup/authPopup.wxml'] = [$gwx, './components/authPopup/authPopup.wxml'];else __wxAppCode__['components/authPopup/authPopup.wxml'] = $gwx( './components/authPopup/authPopup.wxml' );
		__wxAppCode__['components/collectTips/collectTips.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/collectTips/collectTips.wxml'] = [$gwx, './components/collectTips/collectTips.wxml'];else __wxAppCode__['components/collectTips/collectTips.wxml'] = $gwx( './components/collectTips/collectTips.wxml' );
		__wxAppCode__['components/fadeBox/fadeBox.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/fadeBox/fadeBox.wxml'] = [$gwx, './components/fadeBox/fadeBox.wxml'];else __wxAppCode__['components/fadeBox/fadeBox.wxml'] = $gwx( './components/fadeBox/fadeBox.wxml' );
		__wxAppCode__['pages/cardDetail/cardDetail.json'] = {"navigationBarTitleText":"","usingComponents":{"collect-tips":"/components/collectTips/collectTips"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/cardDetail/cardDetail.wxml'] = [$gwx, './pages/cardDetail/cardDetail.wxml'];else __wxAppCode__['pages/cardDetail/cardDetail.wxml'] = $gwx( './pages/cardDetail/cardDetail.wxml' );
		__wxAppCode__['pages/cardQr/cardQr.json'] = {"navigationBarTitleText":"","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/cardQr/cardQr.wxml'] = [$gwx, './pages/cardQr/cardQr.wxml'];else __wxAppCode__['pages/cardQr/cardQr.wxml'] = $gwx( './pages/cardQr/cardQr.wxml' );
		__wxAppCode__['pages/check/check.json'] = {"navigationBarTitleText":"","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/check/check.wxml'] = [$gwx, './pages/check/check.wxml'];else __wxAppCode__['pages/check/check.wxml'] = $gwx( './pages/check/check.wxml' );
		__wxAppCode__['pages/collectList/collectList.json'] = {"navigationBarTitleText":"收藏的卡面","usingComponents":{"collect-tips":"/components/collectTips/collectTips"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/collectList/collectList.wxml'] = [$gwx, './pages/collectList/collectList.wxml'];else __wxAppCode__['pages/collectList/collectList.wxml'] = $gwx( './pages/collectList/collectList.wxml' );
		__wxAppCode__['pages/crsmx/crsmx.json'] = {"navigationBarTitleText":"","usingComponents":{"auth-popup":"/components/authPopup/authPopup"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/crsmx/crsmx.wxml'] = [$gwx, './pages/crsmx/crsmx.wxml'];else __wxAppCode__['pages/crsmx/crsmx.wxml'] = $gwx( './pages/crsmx/crsmx.wxml' );
		__wxAppCode__['pages/diy/diy.json'] = {"navigationBarTitleText":"星巴克用星说","disableScroll":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/diy/diy.wxml'] = [$gwx, './pages/diy/diy.wxml'];else __wxAppCode__['pages/diy/diy.wxml'] = $gwx( './pages/diy/diy.wxml' );
		__wxAppCode__['pages/diy/edit/edit.json'] = {"navigationBarTitleText":"","disableScroll":true,"usingComponents":{"fade-box":"/components/fadeBox/fadeBox","auth-popup":"/components/authPopup/authPopup"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/diy/edit/edit.wxml'] = [$gwx, './pages/diy/edit/edit.wxml'];else __wxAppCode__['pages/diy/edit/edit.wxml'] = $gwx( './pages/diy/edit/edit.wxml' );
		__wxAppCode__['pages/diy/result/result.json'] = {"navigationBarTitleText":"","disableScroll":true,"usingComponents":{"fade-box":"/components/fadeBox/fadeBox"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/diy/result/result.wxml'] = [$gwx, './pages/diy/result/result.wxml'];else __wxAppCode__['pages/diy/result/result.wxml'] = $gwx( './pages/diy/result/result.wxml' );
		__wxAppCode__['pages/diy/rule/rule.json'] = {"navigationBarTitleText":"活动规则","disableScroll":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/diy/rule/rule.wxml'] = [$gwx, './pages/diy/rule/rule.wxml'];else __wxAppCode__['pages/diy/rule/rule.wxml'] = $gwx( './pages/diy/rule/rule.wxml' );
		__wxAppCode__['pages/error/error.json'] = {"navigationBarTitleText":"星巴克用星说","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/error/error.wxml'] = [$gwx, './pages/error/error.wxml'];else __wxAppCode__['pages/error/error.wxml'] = $gwx( './pages/error/error.wxml' );
		__wxAppCode__['pages/getCardPage/getCardPage.json'] = {"navigationBarTitleText":"星巴克用星说","usingComponents":{"auth-popup":"/components/authPopup/authPopup"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/getCardPage/getCardPage.wxml'] = [$gwx, './pages/getCardPage/getCardPage.wxml'];else __wxAppCode__['pages/getCardPage/getCardPage.wxml'] = $gwx( './pages/getCardPage/getCardPage.wxml' );
		__wxAppCode__['pages/h5/h5.json'] = {"navigationBarTitleText":"","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/h5/h5.wxml'] = [$gwx, './pages/h5/h5.wxml'];else __wxAppCode__['pages/h5/h5.wxml'] = $gwx( './pages/h5/h5.wxml' );
		__wxAppCode__['pages/index/index.json'] = {"navigationBarTitleText":"星巴克用星说","usingComponents":{"auth-popup":"/components/authPopup/authPopup"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index.wxml'] = [$gwx, './pages/index/index.wxml'];else __wxAppCode__['pages/index/index.wxml'] = $gwx( './pages/index/index.wxml' );
		__wxAppCode__['pages/invoice/apply/apply.json'] = {"navigationBarTitleText":"发票开具","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/invoice/apply/apply.wxml'] = [$gwx, './pages/invoice/apply/apply.wxml'];else __wxAppCode__['pages/invoice/apply/apply.wxml'] = $gwx( './pages/invoice/apply/apply.wxml' );
		__wxAppCode__['pages/invoice/status/status.json'] = {"navigationBarTitleText":"发票进度","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/invoice/status/status.wxml'] = [$gwx, './pages/invoice/status/status.wxml'];else __wxAppCode__['pages/invoice/status/status.wxml'] = $gwx( './pages/invoice/status/status.wxml' );
		__wxAppCode__['pages/order/order.json'] = {"navigationBarTitleText":"购买历史","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/order/order.wxml'] = [$gwx, './pages/order/order.wxml'];else __wxAppCode__['pages/order/order.wxml'] = $gwx( './pages/order/order.wxml' );
		__wxAppCode__['pages/orderDetail/orderDetail.json'] = {"navigationBarTitleText":"订单详情","usingComponents":{"auth-popup":"/components/authPopup/authPopup"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/orderDetail/orderDetail.wxml'] = [$gwx, './pages/orderDetail/orderDetail.wxml'];else __wxAppCode__['pages/orderDetail/orderDetail.wxml'] = $gwx( './pages/orderDetail/orderDetail.wxml' );
		__wxAppCode__['pages/privacy/privacy.json'] = {"navigationBarTitleText":"隐私权政策","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/privacy/privacy.wxml'] = [$gwx, './pages/privacy/privacy.wxml'];else __wxAppCode__['pages/privacy/privacy.wxml'] = $gwx( './pages/privacy/privacy.wxml' );
		__wxAppCode__['pages/promotion/promotion.json'] = {"navigationBarTitleText":"星巴克用星说","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/promotion/promotion.wxml'] = [$gwx, './pages/promotion/promotion.wxml'];else __wxAppCode__['pages/promotion/promotion.wxml'] = $gwx( './pages/promotion/promotion.wxml' );
		__wxAppCode__['pages/refund/errorAuthorize/errorAuthorize.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/refund/errorAuthorize/errorAuthorize.wxml'] = [$gwx, './pages/refund/errorAuthorize/errorAuthorize.wxml'];else __wxAppCode__['pages/refund/errorAuthorize/errorAuthorize.wxml'] = $gwx( './pages/refund/errorAuthorize/errorAuthorize.wxml' );
		__wxAppCode__['pages/refund/packageDetail/packageDetail.json'] = {"navigationBarTitleText":"礼包券详情","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/refund/packageDetail/packageDetail.wxml'] = [$gwx, './pages/refund/packageDetail/packageDetail.wxml'];else __wxAppCode__['pages/refund/packageDetail/packageDetail.wxml'] = $gwx( './pages/refund/packageDetail/packageDetail.wxml' );
		__wxAppCode__['pages/refund/refundApplication/refundApplication.json'] = {"navigationBarTitleText":"申请退款","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/refund/refundApplication/refundApplication.wxml'] = [$gwx, './pages/refund/refundApplication/refundApplication.wxml'];else __wxAppCode__['pages/refund/refundApplication/refundApplication.wxml'] = $gwx( './pages/refund/refundApplication/refundApplication.wxml' );
		__wxAppCode__['pages/refund/refundError/refundError.json'] = {"navigationBarTitleText":"确认退款","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/refund/refundError/refundError.wxml'] = [$gwx, './pages/refund/refundError/refundError.wxml'];else __wxAppCode__['pages/refund/refundError/refundError.wxml'] = $gwx( './pages/refund/refundError/refundError.wxml' );
		__wxAppCode__['pages/refund/refundFriend/refundFriend.json'] = {"navigationBarTitleText":"","usingComponents":{"auth-popup":"/components/authPopup/authPopup"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/refund/refundFriend/refundFriend.wxml'] = [$gwx, './pages/refund/refundFriend/refundFriend.wxml'];else __wxAppCode__['pages/refund/refundFriend/refundFriend.wxml'] = $gwx( './pages/refund/refundFriend/refundFriend.wxml' );
		__wxAppCode__['pages/refund/refundResult/refundResult.json'] = {"navigationBarTitleText":"申请退款","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/refund/refundResult/refundResult.wxml'] = [$gwx, './pages/refund/refundResult/refundResult.wxml'];else __wxAppCode__['pages/refund/refundResult/refundResult.wxml'] = $gwx( './pages/refund/refundResult/refundResult.wxml' );
		__wxAppCode__['pages/store/store.json'] = {"navigationBarTitleText":"门店列表","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/store/store.wxml'] = [$gwx, './pages/store/store.wxml'];else __wxAppCode__['pages/store/store.wxml'] = $gwx( './pages/store/store.wxml' );
		__wxAppCode__['pages/terms/terms.json'] = {"navigationBarTitleText":"条款","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/terms/terms.wxml'] = [$gwx, './pages/terms/terms.wxml'];else __wxAppCode__['pages/terms/terms.wxml'] = $gwx( './pages/terms/terms.wxml' );
	
	define("2A9BA8A51C91398C4CFDC0A241697AF5.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t,e,r=r||function(t,e){var r={},i=r.lib={},n=function(){},s=i.Base={extend:function(t){n.prototype=this;var e=new n;return t&&e.mixIn(t),e.hasOwnProperty("init")||(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},o=i.WordArray=s.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=null!=e?e:4*t.length},toString:function(t){return(t||a).stringify(this)},concat:function(t){var e=this.words,r=t.words,i=this.sigBytes;if(t=t.sigBytes,this.clamp(),i%4)for(var n=0;n<t;n++)e[i+n>>>2]|=(r[n>>>2]>>>24-n%4*8&255)<<24-(i+n)%4*8;else if(65535<r.length)for(n=0;n<t;n+=4)e[i+n>>>2]=r[n>>>2];else e.push.apply(e,r);return this.sigBytes+=t,this},clamp:function(){var e=this.words,r=this.sigBytes;e[r>>>2]&=4294967295<<32-r%4*8,e.length=t.ceil(r/4)},clone:function(){var t=s.clone.call(this);return t.words=this.words.slice(0),t},random:function(e){for(var r=[],i=0;i<e;i+=4)r.push(4294967296*t.random()|0);return new o.init(r,e)}}),c=r.enc={},a=c.Hex={stringify:function(t){var e=t.words;t=t.sigBytes;for(var r=[],i=0;i<t;i++){var n=e[i>>>2]>>>24-i%4*8&255;r.push((n>>>4).toString(16)),r.push((15&n).toString(16))}return r.join("")},parse:function(t){for(var e=t.length,r=[],i=0;i<e;i+=2)r[i>>>3]|=parseInt(t.substr(i,2),16)<<24-i%8*4;return new o.init(r,e/2)}},f=c.Latin1={stringify:function(t){var e=t.words;t=t.sigBytes;for(var r=[],i=0;i<t;i++)r.push(String.fromCharCode(e[i>>>2]>>>24-i%4*8&255));return r.join("")},parse:function(t){for(var e=t.length,r=[],i=0;i<e;i++)r[i>>>2]|=(255&t.charCodeAt(i))<<24-i%4*8;return new o.init(r,e)}},h=c.Utf8={stringify:function(t){try{return decodeURIComponent(escape(f.stringify(t)))}catch(t){throw Error("Malformed UTF-8 data")}},parse:function(t){return f.parse(unescape(encodeURIComponent(t)))}},u=i.BufferedBlockAlgorithm=s.extend({reset:function(){this._data=new o.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=h.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var r=this._data,i=r.words,n=r.sigBytes,s=this.blockSize,c=n/(4*s);if(e=(c=e?t.ceil(c):t.max((0|c)-this._minBufferSize,0))*s,n=t.min(4*e,n),e){for(var a=0;a<e;a+=s)this._doProcessBlock(i,a);a=i.splice(0,e),r.sigBytes-=n}return new o.init(a,n)},clone:function(){var t=s.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0});i.Hasher=u.extend({cfg:s.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){u.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(e,r){return new t.init(r).finalize(e)}},_createHmacHelper:function(t){return function(e,r){return new p.HMAC.init(t,r).finalize(e)}}});var p=r.algo={};return r}(Math);e=(t=r).lib.WordArray,t.enc.Base64={stringify:function(t){var e=t.words,r=t.sigBytes,i=this._map;t.clamp(),t=[];for(var n=0;n<r;n+=3)for(var s=(e[n>>>2]>>>24-n%4*8&255)<<16|(e[n+1>>>2]>>>24-(n+1)%4*8&255)<<8|e[n+2>>>2]>>>24-(n+2)%4*8&255,o=0;4>o&&n+.75*o<r;o++)t.push(i.charAt(s>>>6*(3-o)&63));if(e=i.charAt(64))for(;t.length%4;)t.push(e);return t.join("")},parse:function(t){var r=t.length,i=this._map;(n=i.charAt(64))&&-1!=(n=t.indexOf(n))&&(r=n);for(var n=[],s=0,o=0;o<r;o++)if(o%4){var c=i.indexOf(t.charAt(o-1))<<o%4*2,a=i.indexOf(t.charAt(o))>>>6-o%4*2;n[s>>>2]|=(c|a)<<24-s%4*8,s++}return e.create(n,s)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},function(t){function e(t,e,r,i,n,s,o){return((t=t+(e&r|~e&i)+n+o)<<s|t>>>32-s)+e}function i(t,e,r,i,n,s,o){return((t=t+(e&i|r&~i)+n+o)<<s|t>>>32-s)+e}function n(t,e,r,i,n,s,o){return((t=t+(e^r^i)+n+o)<<s|t>>>32-s)+e}function s(t,e,r,i,n,s,o){return((t=t+(r^(e|~i))+n+o)<<s|t>>>32-s)+e}for(var o=r,c=(f=o.lib).WordArray,a=f.Hasher,f=o.algo,h=[],u=0;64>u;u++)h[u]=4294967296*t.abs(t.sin(u+1))|0;f=f.MD5=a.extend({_doReset:function(){this._hash=new c.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,r){for(var o=0;16>o;o++){var c=t[a=r+o];t[a]=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8)}o=this._hash.words;var a=t[r+0],f=(c=t[r+1],t[r+2]),u=t[r+3],p=t[r+4],d=t[r+5],l=t[r+6],y=t[r+7],v=t[r+8],_=t[r+9],g=t[r+10],B=t[r+11],x=t[r+12],m=t[r+13],k=t[r+14],S=t[r+15],z=e(z=o[0],D=o[1],C=o[2],w=o[3],a,7,h[0]),w=e(w,z,D,C,c,12,h[1]),C=e(C,w,z,D,f,17,h[2]),D=e(D,C,w,z,u,22,h[3]);z=e(z,D,C,w,p,7,h[4]),w=e(w,z,D,C,d,12,h[5]),C=e(C,w,z,D,l,17,h[6]),D=e(D,C,w,z,y,22,h[7]),z=e(z,D,C,w,v,7,h[8]),w=e(w,z,D,C,_,12,h[9]),C=e(C,w,z,D,g,17,h[10]),D=e(D,C,w,z,B,22,h[11]),z=e(z,D,C,w,x,7,h[12]),w=e(w,z,D,C,m,12,h[13]),C=e(C,w,z,D,k,17,h[14]),z=i(z,D=e(D,C,w,z,S,22,h[15]),C,w,c,5,h[16]),w=i(w,z,D,C,l,9,h[17]),C=i(C,w,z,D,B,14,h[18]),D=i(D,C,w,z,a,20,h[19]),z=i(z,D,C,w,d,5,h[20]),w=i(w,z,D,C,g,9,h[21]),C=i(C,w,z,D,S,14,h[22]),D=i(D,C,w,z,p,20,h[23]),z=i(z,D,C,w,_,5,h[24]),w=i(w,z,D,C,k,9,h[25]),C=i(C,w,z,D,u,14,h[26]),D=i(D,C,w,z,v,20,h[27]),z=i(z,D,C,w,m,5,h[28]),w=i(w,z,D,C,f,9,h[29]),C=i(C,w,z,D,y,14,h[30]),z=n(z,D=i(D,C,w,z,x,20,h[31]),C,w,d,4,h[32]),w=n(w,z,D,C,v,11,h[33]),C=n(C,w,z,D,B,16,h[34]),D=n(D,C,w,z,k,23,h[35]),z=n(z,D,C,w,c,4,h[36]),w=n(w,z,D,C,p,11,h[37]),C=n(C,w,z,D,y,16,h[38]),D=n(D,C,w,z,g,23,h[39]),z=n(z,D,C,w,m,4,h[40]),w=n(w,z,D,C,a,11,h[41]),C=n(C,w,z,D,u,16,h[42]),D=n(D,C,w,z,l,23,h[43]),z=n(z,D,C,w,_,4,h[44]),w=n(w,z,D,C,x,11,h[45]),C=n(C,w,z,D,S,16,h[46]),z=s(z,D=n(D,C,w,z,f,23,h[47]),C,w,a,6,h[48]),w=s(w,z,D,C,y,10,h[49]),C=s(C,w,z,D,k,15,h[50]),D=s(D,C,w,z,d,21,h[51]),z=s(z,D,C,w,x,6,h[52]),w=s(w,z,D,C,u,10,h[53]),C=s(C,w,z,D,g,15,h[54]),D=s(D,C,w,z,c,21,h[55]),z=s(z,D,C,w,v,6,h[56]),w=s(w,z,D,C,S,10,h[57]),C=s(C,w,z,D,l,15,h[58]),D=s(D,C,w,z,m,21,h[59]),z=s(z,D,C,w,p,6,h[60]),w=s(w,z,D,C,B,10,h[61]),C=s(C,w,z,D,f,15,h[62]),D=s(D,C,w,z,_,21,h[63]);o[0]=o[0]+z|0,o[1]=o[1]+D|0,o[2]=o[2]+C|0,o[3]=o[3]+w|0},_doFinalize:function(){var e=this._data,r=e.words,i=8*this._nDataBytes,n=8*e.sigBytes;r[n>>>5]|=128<<24-n%32;var s=t.floor(i/4294967296);for(r[15+(n+64>>>9<<4)]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),r[14+(n+64>>>9<<4)]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),e.sigBytes=4*(r.length+1),this._process(),r=(e=this._hash).words,i=0;4>i;i++)n=r[i],r[i]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8);return e},clone:function(){var t=a.clone.call(this);return t._hash=this._hash.clone(),t}}),o.MD5=a._createHelper(f),o.HmacMD5=a._createHmacHelper(f)}(Math),function(){var t,e=r,i=(t=e.lib).Base,n=t.WordArray,s=(t=e.algo).EvpKDF=i.extend({cfg:i.extend({keySize:4,hasher:t.MD5,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){for(var r=(c=this.cfg).hasher.create(),i=n.create(),s=i.words,o=c.keySize,c=c.iterations;s.length<o;){a&&r.update(a);var a=r.update(t).finalize(e);r.reset();for(var f=1;f<c;f++)a=r.finalize(a),r.reset();i.concat(a)}return i.sigBytes=4*o,i}});e.EvpKDF=function(t,e,r){return s.create(r).compute(t,e)}}(),r.lib.Cipher||function(t){var e=(l=r).lib,i=e.Base,n=e.WordArray,s=e.BufferedBlockAlgorithm,o=l.enc.Base64,c=l.algo.EvpKDF,a=e.Cipher=s.extend({cfg:i.extend(),createEncryptor:function(t,e){return this.create(this._ENC_XFORM_MODE,t,e)},createDecryptor:function(t,e){return this.create(this._DEC_XFORM_MODE,t,e)},init:function(t,e,r){this.cfg=this.cfg.extend(r),this._xformMode=t,this._key=e,this.reset()},reset:function(){s.reset.call(this),this._doReset()},process:function(t){return this._append(t),this._process()},finalize:function(t){return t&&this._append(t),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(t){return{encrypt:function(e,r,i){return("string"==typeof r?y:d).encrypt(t,e,r,i)},decrypt:function(e,r,i){return("string"==typeof r?y:d).decrypt(t,e,r,i)}}}});e.StreamCipher=a.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var f=l.mode={},h=function(t,e,r){var i=this._iv;i?this._iv=void 0:i=this._prevBlock;for(var n=0;n<r;n++)t[e+n]^=i[n]},u=(e.BlockCipherMode=i.extend({createEncryptor:function(t,e){return this.Encryptor.create(t,e)},createDecryptor:function(t,e){return this.Decryptor.create(t,e)},init:function(t,e){this._cipher=t,this._iv=e}})).extend();u.Encryptor=u.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize;h.call(this,t,e,i),r.encryptBlock(t,e),this._prevBlock=t.slice(e,e+i)}}),u.Decryptor=u.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize,n=t.slice(e,e+i);r.decryptBlock(t,e),h.call(this,t,e,i),this._prevBlock=n}}),f=f.CBC=u,u=(l.pad={}).Pkcs7={pad:function(t,e){for(var r,i=(r=(r=4*e)-t.sigBytes%r)<<24|r<<16|r<<8|r,s=[],o=0;o<r;o+=4)s.push(i);r=n.create(s,r),t.concat(r)},unpad:function(t){t.sigBytes-=255&t.words[t.sigBytes-1>>>2]}},e.BlockCipher=a.extend({cfg:a.cfg.extend({mode:f,padding:u}),reset:function(){a.reset.call(this);var t=(e=this.cfg).iv,e=e.mode;if(this._xformMode==this._ENC_XFORM_MODE)var r=e.createEncryptor;else r=e.createDecryptor,this._minBufferSize=1;this._mode=r.call(e,this,t&&t.words)},_doProcessBlock:function(t,e){this._mode.processBlock(t,e)},_doFinalize:function(){var t=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){t.pad(this._data,this.blockSize);var e=this._process(!0)}else e=this._process(!0),t.unpad(e);return e},blockSize:4});var p=e.CipherParams=i.extend({init:function(t){this.mixIn(t)},toString:function(t){return(t||this.formatter).stringify(this)}}),d=(f=(l.format={}).OpenSSL={stringify:function(t){var e=t.ciphertext;return((t=t.salt)?n.create([1398893684,1701076831]).concat(t).concat(e):e).toString(o)},parse:function(t){var e=(t=o.parse(t)).words;if(1398893684==e[0]&&1701076831==e[1]){var r=n.create(e.slice(2,4));e.splice(0,4),t.sigBytes-=16}return p.create({ciphertext:t,salt:r})}},e.SerializableCipher=i.extend({cfg:i.extend({format:f}),encrypt:function(t,e,r,i){i=this.cfg.extend(i);var n=t.createEncryptor(r,i);return e=n.finalize(e),n=n.cfg,p.create({ciphertext:e,key:r,iv:n.iv,algorithm:t,mode:n.mode,padding:n.padding,blockSize:t.blockSize,formatter:i.format})},decrypt:function(t,e,r,i){return i=this.cfg.extend(i),e=this._parse(e,i.format),t.createDecryptor(r,i).finalize(e.ciphertext)},_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}})),l=(l.kdf={}).OpenSSL={execute:function(t,e,r,i){return i||(i=n.random(8)),t=c.create({keySize:e+r}).compute(t,i),r=n.create(t.words.slice(e),4*r),t.sigBytes=4*e,p.create({key:t,iv:r,salt:i})}},y=e.PasswordBasedCipher=d.extend({cfg:d.cfg.extend({kdf:l}),encrypt:function(t,e,r,i){return r=(i=this.cfg.extend(i)).kdf.execute(r,t.keySize,t.ivSize),i.iv=r.iv,(t=d.encrypt.call(this,t,e,r.key,i)).mixIn(r),t},decrypt:function(t,e,r,i){return i=this.cfg.extend(i),e=this._parse(e,i.format),r=i.kdf.execute(r,t.keySize,t.ivSize,e.salt),i.iv=r.iv,d.decrypt.call(this,t,e,r.key,i)}})}(),function(){for(var t=r,e=t.lib.BlockCipher,i=t.algo,n=[],s=[],o=[],c=[],a=[],f=[],h=[],u=[],p=[],d=[],l=[],y=0;256>y;y++)l[y]=128>y?y<<1:y<<1^283;var v=0,_=0;for(y=0;256>y;y++){var g=(g=_^_<<1^_<<2^_<<3^_<<4)>>>8^255&g^99;n[v]=g,s[g]=v;var B=l[v],x=l[B],m=l[x],k=257*l[g]^16843008*g;o[v]=k<<24|k>>>8,c[v]=k<<16|k>>>16,a[v]=k<<8|k>>>24,f[v]=k,k=16843009*m^65537*x^257*B^16843008*v,h[g]=k<<24|k>>>8,u[g]=k<<16|k>>>16,p[g]=k<<8|k>>>24,d[g]=k,v?(v=B^l[l[l[m^B]]],_^=l[l[_]]):v=_=1}var S=[0,1,2,4,8,16,32,64,128,27,54];i=i.AES=e.extend({_doReset:function(){for(var t=(r=this._key).words,e=r.sigBytes/4,r=4*((this._nRounds=e+6)+1),i=this._keySchedule=[],s=0;s<r;s++)if(s<e)i[s]=t[s];else{var o=i[s-1];s%e?6<e&&4==s%e&&(o=n[o>>>24]<<24|n[o>>>16&255]<<16|n[o>>>8&255]<<8|n[255&o]):(o=n[(o=o<<8|o>>>24)>>>24]<<24|n[o>>>16&255]<<16|n[o>>>8&255]<<8|n[255&o],o^=S[s/e|0]<<24),i[s]=i[s-e]^o}for(t=this._invKeySchedule=[],e=0;e<r;e++)s=r-e,o=e%4?i[s]:i[s-4],t[e]=4>e||4>=s?o:h[n[o>>>24]]^u[n[o>>>16&255]]^p[n[o>>>8&255]]^d[n[255&o]]},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._keySchedule,o,c,a,f,n)},decryptBlock:function(t,e){var r=t[e+1];t[e+1]=t[e+3],t[e+3]=r,this._doCryptBlock(t,e,this._invKeySchedule,h,u,p,d,s),r=t[e+1],t[e+1]=t[e+3],t[e+3]=r},_doCryptBlock:function(t,e,r,i,n,s,o,c){for(var a=this._nRounds,f=t[e]^r[0],h=t[e+1]^r[1],u=t[e+2]^r[2],p=t[e+3]^r[3],d=4,l=1;l<a;l++){var y=i[f>>>24]^n[h>>>16&255]^s[u>>>8&255]^o[255&p]^r[d++],v=i[h>>>24]^n[u>>>16&255]^s[p>>>8&255]^o[255&f]^r[d++],_=i[u>>>24]^n[p>>>16&255]^s[f>>>8&255]^o[255&h]^r[d++];p=i[p>>>24]^n[f>>>16&255]^s[h>>>8&255]^o[255&u]^r[d++],f=y,h=v,u=_}y=(c[f>>>24]<<24|c[h>>>16&255]<<16|c[u>>>8&255]<<8|c[255&p])^r[d++],v=(c[h>>>24]<<24|c[u>>>16&255]<<16|c[p>>>8&255]<<8|c[255&f])^r[d++],_=(c[u>>>24]<<24|c[p>>>16&255]<<16|c[f>>>8&255]<<8|c[255&h])^r[d++],p=(c[p>>>24]<<24|c[f>>>16&255]<<16|c[h>>>8&255]<<8|c[255&u])^r[d++],t[e]=y,t[e+1]=v,t[e+2]=_,t[e+3]=p},keySize:8});t.AES=e._createHelper(i)}();var i={stringify:function(t){var e={ct:t.ciphertext.toString(r.enc.Base64)};return t.iv&&(e.iv=t.iv.toString()),t.salt&&(e.s=t.salt.toString()),JSON.stringify(e).replace(/\s/g,"")},parse:function(t){var e=JSON.parse(t),i=r.lib.CipherParams.create({ciphertext:r.enc.Base64.parse(e.ct)});return e.iv&&(i.iv=r.enc.Hex.parse(e.iv)),e.s&&(i.salt=r.enc.Hex.parse(e.s)),i}};module.exports={CryptoJS:r,CryptoJSAesJson:i}; 
 			}); 
		define("4445B0631C91398C2223D86471997AF5.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=function(e){return(e=e.toString())[1]?e:"0"+e};String.prototype.splice=function(e,n){return this.slice(0,e)+n+this.slice(e)};module.exports={formatTime:function(n){var t=n.getFullYear(),r=n.getMonth()+1,o=n.getDate(),i=n.getHours(),c=n.getMinutes(),u=n.getSeconds();return[t,r,o].map(e).join("/")+" "+[i,c,u].map(e).join(":")},sha1:function(e){var n,t,r=new Uint8Array(function(e){var n,t,r,o=[];for(n=0;n<e.length;n++)(t=e.charCodeAt(n))<128?o.push(t):t<2048?o.push(192+(t>>6&31),128+(63&t)):((r=55296^t)>>10==0?(t=(r<<10)+(56320^e.charCodeAt(++n))+65536,o.push(240+(t>>18&7),128+(t>>12&63))):o.push(224+(t>>12&15)),o.push(128+(t>>6&63),128+(63&t)));return o}(e)),o=16+(r.length+8>>>6<<4);for((e=new Uint8Array(o<<2)).set(new Uint8Array(r.buffer)),e=new Uint32Array(e.buffer),t=new DataView(e.buffer),f=0;f<o;f++)e[f]=t.getUint32(f<<2);e[r.length>>2]|=128<<24-8*(3&r.length),e[o-1]=r.length<<3;var i=[],c=[function(){return s[1]&s[2]|~s[1]&s[3]},function(){return s[1]^s[2]^s[3]},function(){return s[1]&s[2]|s[1]&s[3]|s[2]&s[3]},function(){return s[1]^s[2]^s[3]}],u=function(e,n){return e<<n|e>>>32-n},a=[1518500249,1859775393,-1894007588,-899497514],s=[1732584193,-271733879,null,null,-1009589776];for(s[2]=~s[0],s[3]=~s[1],f=0;f<e.length;f+=16){var l=s.slice(0);for(n=0;n<80;n++)i[n]=n<16?e[f+n]:u(i[n-3]^i[n-8]^i[n-14]^i[n-16],1),t=u(s[0],5)+c[n/20|0]()+s[4]+i[n]+a[n/20|0]|0,s[1]=u(s[1],30),s.pop(),s.unshift(t);for(n=0;n<5;n++)s[n]=s[n]+l[n]|0}t=new DataView(new Uint32Array(s).buffer);for(var f=0;f<5;f++)s[f]=t.getUint32(f<<2);return Array.prototype.map.call(new Uint8Array(new Uint32Array(s).buffer),function(e){return(e<16?"0":"")+e.toString(16)}).join("")},convertHtmlToText:function(e){var n=""+e;return n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=n.replace(/<\/div>/gi,"\r\n")).replace(/<\/li>/gi,"\r\n")).replace(/<li>/gi,"  *  ")).replace(/<\/ul>/gi,"\r\n")).replace(/<br\s*[\/]?>/gi,"\r\n")).replace(/<p.*?>/gi,"\r\n")).replace(/<a.*href="(.*?)".*>(.*?)<\/a>/gi," $2 ($1)")).replace(/<script.*>[\w\W]{1,}(.*?)[\w\W]{1,}<\/script>/gi,"")).replace(/<style.*>[\w\W]{1,}(.*?)[\w\W]{1,}<\/style>/gi,"")).replace(/<(?:.|\s)*?>/g,"")).replace(/(?:(?:\r\n|\r|\n)\s*){2,}/gim,"\r\n\r\n")).replace(/ +(?= )/g,"")).replace(/&nbsp;/gi," ")).replace(/&amp;/gi,"&")).replace(/&quot;/gi,'"')).replace(/&lt;/gi,"<")).replace(/&gt;/gi,">")},savePicToAlbum:function(e){wx.getSetting({success:function(n){n.authSetting["scope.writePhotosAlbum"]?wx.saveImageToPhotosAlbum({filePath:e,success:function(e){wx.showToast({title:"保存成功",success:function(e){return wx.setStorageSync("photoSaved",!0),!0}})},fail:function(e){console.log(e)}}):wx.authorize({scope:"scope.writePhotosAlbum",success:function(){wx.saveImageToPhotosAlbum({filePath:e,success:function(e){wx.showToast({title:"保存成功",success:function(e){wx.setStorageSync("photoSaved",!0)}})},fail:function(e){console.log(e)}})},fail:function(){}})},fail:function(e){console.log(e)}})},initSavePicToAlbum:function(e){wx.authorize({scope:"scope.writePhotosAlbum",success:function(){return!0},fail:function(){return!1}})},return2Br:function(e){return e.replace(/(?:\r\n|\r|\n)/g,"<br>")},_base64ToArrayBuffer:function(e){for(var n=window.atob(e),t=n.length,r=new Uint8Array(t),o=0;o<t;o++)r[o]=n.charCodeAt(o);return r},toQueryString:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).map(function(n){var t=e[n];return""===t||"undefined"===t?"":"".concat(n,"=").concat(t)}).join("&")}}; 
 			}); 
		define("48B317D01C91398C2ED57FD7D3797AF5.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault.js"),_typeof2=_interopRequireDefault(require("@babel/runtime/helpers/typeof.js"));!function(){function t(t,i){i?(d[0]=d[16]=d[1]=d[2]=d[3]=d[4]=d[5]=d[6]=d[7]=d[8]=d[9]=d[10]=d[11]=d[12]=d[13]=d[14]=d[15]=0,this.blocks=d):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=t}function i(i,e,r){var s,u=(0,_typeof2.default)(i);if("string"===u){var n,a=[],o=i.length,d=0;for(s=0;s<o;++s)(n=i.charCodeAt(s))<128?a[d++]=n:n<2048?(a[d++]=192|n>>6,a[d++]=128|63&n):n<55296||n>=57344?(a[d++]=224|n>>12,a[d++]=128|n>>6&63,a[d++]=128|63&n):(n=65536+((1023&n)<<10|1023&i.charCodeAt(++s)),a[d++]=240|n>>18,a[d++]=128|n>>12&63,a[d++]=128|n>>6&63,a[d++]=128|63&n);i=a}else{if("object"!==u)throw new Error(h);if(null===i)throw new Error(h);if(f&&i.constructor===ArrayBuffer)i=new Uint8Array(i);else if(!(Array.isArray(i)||f&&ArrayBuffer.isView(i)))throw new Error(h)}i.length>64&&(i=new t(e,!0).update(i).array());var y=[],c=[];for(s=0;s<64;++s){var l=i[s]||0;y[s]=92^l,c[s]=54^l}t.call(this,e,r),this.update(c),this.oKeyPad=y,this.inner=!0,this.sharedMemory=r}var h="input is invalid type",r="object"==("undefined"==typeof window?"undefined":(0,_typeof2.default)(window)),s=r?window:{};s.JS_SHA256_NO_WINDOW&&(r=!1);var e=!r&&"object"==("undefined"==typeof self?"undefined":(0,_typeof2.default)(self)),n=!s.JS_SHA256_NO_NODE_JS&&"object"==("undefined"==typeof process?"undefined":(0,_typeof2.default)(process))&&process.versions&&process.versions.node;n?s=global:e&&(s=self);var o=!s.JS_SHA256_NO_COMMON_JS&&"object"==("undefined"==typeof module?"undefined":(0,_typeof2.default)(module))&&module.exports,a="function"==typeof define&&define.amd,f=!s.JS_SHA256_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,u="0123456789abcdef".split(""),c=[-2147483648,8388608,32768,128],y=[24,16,8,0],p=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],l=["hex","array","digest","arrayBuffer"],d=[];!s.JS_SHA256_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!f||!s.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"==(0,_typeof2.default)(t)&&t.buffer&&t.buffer.constructor===ArrayBuffer});var A=function(i,e){return function(r){return new t(e,!0).update(r)[i]()}},w=function(i){var e=A("hex",i);n&&(e=b(e,i)),e.create=function(){return new t(i)},e.update=function(t){return e.create().update(t)};for(var r=0;r<l.length;++r){var h=l[r];e[h]=A(h,i)}return e},b=function b(t,i){var r=eval("require('crypto')"),s=eval("require('buffer').Buffer"),e=i?"sha224":"sha256",n=function(i){if("string"==typeof i)return r.createHash(e).update(i,"utf8").digest("hex");if(null==i)throw new Error(h);return i.constructor===ArrayBuffer&&(i=new Uint8Array(i)),Array.isArray(i)||ArrayBuffer.isView(i)||i.constructor===s?r.createHash(e).update(new s(i)).digest("hex"):t(i)};return n},v=function(t,e){return function(r,h){return new i(r,e,!0).update(h)[t]()}},_=function(t){var e=v("hex",t);e.create=function(e){return new i(e,t)},e.update=function(t,i){return e.create(t).update(i)};for(var r=0;r<l.length;++r){var h=l[r];e[h]=v(h,t)}return e};t.prototype.update=function(t){if(!this.finalized){var i,e=(0,_typeof2.default)(t);if("string"!==e){if("object"!==e)throw new Error(h);if(null===t)throw new Error(h);if(f&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||f&&ArrayBuffer.isView(t)))throw new Error(h);i=!0}for(var r,s,u=0,n=t.length,a=this.blocks;u<n;){if(this.hashed&&(this.hashed=!1,a[0]=this.block,a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0),i)for(s=this.start;u<n&&s<64;++u)a[s>>2]|=t[u]<<y[3&s++];else for(s=this.start;u<n&&s<64;++u)(r=t.charCodeAt(u))<128?a[s>>2]|=r<<y[3&s++]:r<2048?(a[s>>2]|=(192|r>>6)<<y[3&s++],a[s>>2]|=(128|63&r)<<y[3&s++]):r<55296||r>=57344?(a[s>>2]|=(224|r>>12)<<y[3&s++],a[s>>2]|=(128|r>>6&63)<<y[3&s++],a[s>>2]|=(128|63&r)<<y[3&s++]):(r=65536+((1023&r)<<10|1023&t.charCodeAt(++u)),a[s>>2]|=(240|r>>18)<<y[3&s++],a[s>>2]|=(128|r>>12&63)<<y[3&s++],a[s>>2]|=(128|r>>6&63)<<y[3&s++],a[s>>2]|=(128|63&r)<<y[3&s++]);this.lastByteIndex=s,this.bytes+=s-this.start,s>=64?(this.block=a[16],this.start=s-64,this.hash(),this.hashed=!0):this.start=s}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,i=this.lastByteIndex;t[16]=this.block,t[i>>2]|=c[3&i],this.block=t[16],i>=56&&(this.hashed||this.hash(),t[0]=this.block,t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.hBytes<<3|this.bytes>>>29,t[15]=this.bytes<<3,this.hash()}},t.prototype.hash=function(){var t,i,e,r,h,s,u,n,a,o=this.h0,f=this.h1,d=this.h2,y=this.h3,c=this.h4,l=this.h5,A=this.h6,w=this.h7,b=this.blocks;for(t=16;t<64;++t)i=((h=b[t-15])>>>7|h<<25)^(h>>>18|h<<14)^h>>>3,e=((h=b[t-2])>>>17|h<<15)^(h>>>19|h<<13)^h>>>10,b[t]=b[t-16]+i+b[t-7]+e<<0;for(a=f&d,t=0;t<64;t+=4)this.first?(this.is224?(s=300032,w=(h=b[0]-1413257819)-150054599<<0,y=h+24177077<<0):(s=704751109,w=(h=b[0]-210244248)-1521486534<<0,y=h+143694565<<0),this.first=!1):(i=(o>>>2|o<<30)^(o>>>13|o<<19)^(o>>>22|o<<10),r=(s=o&f)^o&d^a,w=y+(h=w+(e=(c>>>6|c<<26)^(c>>>11|c<<21)^(c>>>25|c<<7))+(c&l^~c&A)+p[t]+b[t])<<0,y=h+(i+r)<<0),i=(y>>>2|y<<30)^(y>>>13|y<<19)^(y>>>22|y<<10),r=(u=y&o)^y&f^s,A=d+(h=A+(e=(w>>>6|w<<26)^(w>>>11|w<<21)^(w>>>25|w<<7))+(w&c^~w&l)+p[t+1]+b[t+1])<<0,i=((d=h+(i+r)<<0)>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10),r=(n=d&y)^d&o^u,l=f+(h=l+(e=(A>>>6|A<<26)^(A>>>11|A<<21)^(A>>>25|A<<7))+(A&w^~A&c)+p[t+2]+b[t+2])<<0,i=((f=h+(i+r)<<0)>>>2|f<<30)^(f>>>13|f<<19)^(f>>>22|f<<10),r=(a=f&d)^f&y^n,c=o+(h=c+(e=(l>>>6|l<<26)^(l>>>11|l<<21)^(l>>>25|l<<7))+(l&A^~l&w)+p[t+3]+b[t+3])<<0,o=h+(i+r)<<0;this.h0=this.h0+o<<0,this.h1=this.h1+f<<0,this.h2=this.h2+d<<0,this.h3=this.h3+y<<0,this.h4=this.h4+c<<0,this.h5=this.h5+l<<0,this.h6=this.h6+A<<0,this.h7=this.h7+w<<0},t.prototype.hex=function(){this.finalize();var t=this.h0,i=this.h1,e=this.h2,r=this.h3,h=this.h4,s=this.h5,n=this.h6,a=this.h7,o=u[t>>28&15]+u[t>>24&15]+u[t>>20&15]+u[t>>16&15]+u[t>>12&15]+u[t>>8&15]+u[t>>4&15]+u[15&t]+u[i>>28&15]+u[i>>24&15]+u[i>>20&15]+u[i>>16&15]+u[i>>12&15]+u[i>>8&15]+u[i>>4&15]+u[15&i]+u[e>>28&15]+u[e>>24&15]+u[e>>20&15]+u[e>>16&15]+u[e>>12&15]+u[e>>8&15]+u[e>>4&15]+u[15&e]+u[r>>28&15]+u[r>>24&15]+u[r>>20&15]+u[r>>16&15]+u[r>>12&15]+u[r>>8&15]+u[r>>4&15]+u[15&r]+u[h>>28&15]+u[h>>24&15]+u[h>>20&15]+u[h>>16&15]+u[h>>12&15]+u[h>>8&15]+u[h>>4&15]+u[15&h]+u[s>>28&15]+u[s>>24&15]+u[s>>20&15]+u[s>>16&15]+u[s>>12&15]+u[s>>8&15]+u[s>>4&15]+u[15&s]+u[n>>28&15]+u[n>>24&15]+u[n>>20&15]+u[n>>16&15]+u[n>>12&15]+u[n>>8&15]+u[n>>4&15]+u[15&n];return this.is224||(o+=u[a>>28&15]+u[a>>24&15]+u[a>>20&15]+u[a>>16&15]+u[a>>12&15]+u[a>>8&15]+u[a>>4&15]+u[15&a]),o},t.prototype.toString=t.prototype.hex,t.prototype.digest=function(){this.finalize();var t=this.h0,i=this.h1,e=this.h2,r=this.h3,h=this.h4,s=this.h5,u=this.h6,n=this.h7,a=[t>>24&255,t>>16&255,t>>8&255,255&t,i>>24&255,i>>16&255,i>>8&255,255&i,e>>24&255,e>>16&255,e>>8&255,255&e,r>>24&255,r>>16&255,r>>8&255,255&r,h>>24&255,h>>16&255,h>>8&255,255&h,s>>24&255,s>>16&255,s>>8&255,255&s,u>>24&255,u>>16&255,u>>8&255,255&u];return this.is224||a.push(n>>24&255,n>>16&255,n>>8&255,255&n),a},t.prototype.array=t.prototype.digest,t.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(this.is224?28:32),i=new DataView(t);return i.setUint32(0,this.h0),i.setUint32(4,this.h1),i.setUint32(8,this.h2),i.setUint32(12,this.h3),i.setUint32(16,this.h4),i.setUint32(20,this.h5),i.setUint32(24,this.h6),this.is224||i.setUint32(28,this.h7),t},i.prototype=new t,i.prototype.finalize=function(){if(t.prototype.finalize.call(this),this.inner){this.inner=!1;var i=this.array();t.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(i),t.prototype.finalize.call(this)}};var B=w();B.sha256=B,B.sha224=w(!0),B.sha256.hmac=_(),B.sha224.hmac=_(!0),o?module.exports=B:(s.sha256=B.sha256,s.sha224=B.sha224,a&&define(function(){return B}))}(); 
 			}); 
		define("547BC8221C91398C321DA02558497AF5.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e,t,c,a,o="wx7c4b1a9654cc4e72"==(wx.getAccountInfoSync?wx.getAccountInfoSync().miniProgram.appId:"wx7c4b1a9654cc4e72")?"prod":"dev";"prod"==o?(e="https://api.egifting.starbucks.com.cn",t="https://egifting.starbucks.com.cn",c="https://upload.e.verystar.net",a="https://egifting.starbucks.com.cn"):(e="https://stg.api.egifting.starbucks.com.cn",t="https://stg.egifting.starbucks.com.cn",c="https://upload.e.verystar.net",a="https://stg.egifting.starbucks.com.cn");var r={CRYPTO_SECRET:"97b529d4e46362def5251939aa7fb352",H5_REG_URL:"prod"==o?"https://wx.starbucks.com.cn/svc-onramp?":"https://onramp-staging-sbux.wiredcraft.cn/svc-onramp?",PROMOTION_H5:"prod"==o?"https://www.starbucks.com.cn/cmsh5/coupon/":"https://www.starbucks.com.cn/cmsh5-stg/coupon/",GET_USER_TICKET:e+"/Wechat/member/getuserticket",DECRYPT_USER_DATA:e+"/Wechat/member/decryptUserData",FORM_ADD:e+"/v1/form/add",FORM_LOG:e+"/v1/form/log",CREATE_GIFT_ORDER:e+"/wechat/order/creategiftorder",INDEX:e+"/Wechat/index/index",CARD_SHOW:e+"/Wechat/card/show",CARD_CODE:e+"/Wechat/card/code",THEME_SHOW:e+"/Wechat/theme/show",ORDER_PRECREATE:e+"/Wechat/order/precreate",ORDER_LIST:e+"/Wechat/order/list",ORDER_DETAIL:e+"/Wechat/order/orderdetail",NEARBY_LIST:e+"/Wechat/poi/nearbylist",NEW_INVOICE:e+"/Wechat/invoice/newinvoice",INVOICE_INFO:e+"/Wechat/invoice/invoiceinfo",ORDER_GET_CODE:e+"/Wechat/order/getcode",LOG_ADD_CARD:e+"/Wechat/order/logaddcard",CASH_VOUCHER:t+"/Coupon/miniShow",ADD_NEW_INVOICE:e+"/Wechat/invoice/addnewinvoice",REFUND_APPLY:e+"/Wechat/Refund/refundApply",REFUND_ADD:e+"/Wechat/Refund/refundAdd",REFUND_FRIEND:e+"/Wechat/Refund/refundFriend",REFUND_CONFIRM:e+"/Wechat/Refund/refundConfirm",REFUND_CODELIST:e+"/Wechat/Refund/codeList",OLD_COUPON_TEXT:t+"/Wechat/coupon/text",COUPON_TEXT:t+"/Coupon201807/text",OLD_MARKETINGCOUPON_MINI_SHOW:t+"/Coupon/miniShow",MARKETINGCOUPON_MINI_SHOW:t+"/Coupon201807/miniShow",COVER_SAVE:c+"/v1/wechat/uploadimg",SEND_COUPON:t+"/Coupon201808/send",GET_IMAGE:e+"/Wechat/cover/getimage",GET_SHARE_IMAGE:e+"/wechat/share/getshareimage",LAST_UNGIFTING:e+"/wechat/order/lastungiftingorder",GET_FAVORITE_LIST:e+"/wechat/cover/getFavoriteCoverInfo",ADD_FAVORITE:e+"/wechat/cover/addFavoriteCover",UPDATE_FAVORITE:e+"/wechat/cover/updateFavoriteCover",GET_USER_DATA:e+"/wechat/member/getuserdata",CHECK_TEXT:e+"/wechat/check/checktext",GET_SUBSCRIBE_TEMPLATE_LIST:e+"/wechat/subscribe/getSubscribeTemplateList",SEND_VS_COUPON:e+"/wechat/activity/sendcoupon",SEND_THOUSAND_COUPON:e+"/wechat/activity/sendthousandcoupon",TEMPLATE_ACTIVITY_CONFIG:e+"/wechat/activity/getTemplateActivityConfig",GET_SHARER_INFO:a+"/activity/christmas/getSharerInfo"};exports.default=r; 
 			}); 
		define("@babel/runtime/helpers/Arrayincludes.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(r,e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if(0==n)return!1;var i,o,a=0|e,u=Math.max(0<=a?a:n-Math.abs(a),0);for(;u<n;){if((i=t[u])===(o=r)||"number"==typeof i&&"number"==typeof o&&isNaN(i)&&isNaN(o))return!0;u++}return!1}}); 
 			}); 
		define("@babel/runtime/helpers/arrayWithHoles.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles; 
 			}); 
		define("@babel/runtime/helpers/defineProperty.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty; 
 			}); 
		define("@babel/runtime/helpers/interopRequireDefault.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault; 
 			}); 
		define("@babel/runtime/helpers/iterableToArrayLimit.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
function _iterableToArrayLimit(r,t){var e=[],i=!0,l=!1,a=void 0;try{for(var n,o=r[Symbol.iterator]();!(i=(n=o.next()).done)&&(e.push(n.value),!t||e.length!==t);i=!0);}catch(r){l=!0,a=r}finally{try{i||null==o.return||o.return()}finally{if(l)throw a}}return e}module.exports=_iterableToArrayLimit; 
 			}); 
		define("@babel/runtime/helpers/nonIterableRest.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest; 
 			}); 
		define("@babel/runtime/helpers/objectSpread.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
var defineProperty=require("./defineProperty");function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(r){defineProperty(e,r,t[r])})}return e}module.exports=_objectSpread; 
 			}); 
		define("@babel/runtime/helpers/slicedToArray.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
var arrayWithHoles = require("./arrayWithHoles");

var iterableToArrayLimit = require("./iterableToArrayLimit");

var nonIterableRest = require("./nonIterableRest");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray; 
 			}); 
		define("@babel/runtime/helpers/typeof.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
function _typeof2(o){return(_typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}function _typeof(o){return"function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?module.exports=_typeof=function(o){return _typeof2(o)}:module.exports=_typeof=function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":_typeof2(o)},_typeof(o)}module.exports=_typeof; 
 			}); 
		define("D23B39071C91398CB45D5100B1897AF5.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){this.mode=r.MODE_8BIT_BYTE,this.data=t}function e(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=new Array}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,t.prototype={getLength:function(t){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}},e.prototype={addData:function(e){var r=new t(e);this.dataList.push(r),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=h.getRSBlocks(t,this.errorCorrectLevel),r=new l,o=0,n=0;n<e.length;n++)o+=e[n].dataCount;for(n=0;n<this.dataList.length;n++){var a=this.dataList[n];r.put(a.mode,4),r.put(a.getLength(),i.getLengthInBits(a.mode,t)),a.write(r)}if(r.getLengthInBits()<=8*o)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,r){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var o=0;o<this.moduleCount;o++){this.modules[o]=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++)this.modules[o][n]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,r),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=e.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,r)},setupPositionProbePattern:function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var o=-1;o<=7;o++)e+o<=-1||this.moduleCount<=e+o||(this.modules[t+r][e+o]=0<=r&&r<=6&&(0==o||6==o)||0<=o&&o<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=o&&o<=4)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var o=i.getLostPoint(this);(0==r||t>o)&&(t=o,e=r)}return e},createMovieClip:function(t,e,r){var o=t.createEmptyMovieClip(e,r);this.make();for(var n=0;n<this.modules.length;n++)for(var i=1*n,a=0;a<this.modules[n].length;a++){var s=1*a;this.modules[n][a]&&(o.beginFill(0,100),o.moveTo(s,i),o.lineTo(s+1,i),o.lineTo(s+1,i+1),o.lineTo(s,i+1),o.endFill())}return o},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=i.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var o=t[e],n=t[r];if(null==this.modules[o][n])for(var a=-2;a<=2;a++)for(var s=-2;s<=2;s++)this.modules[o+a][n+s]=-2==a||2==a||-2==s||2==s||0==a&&0==s}},setupTypeNumber:function(t){for(var e=i.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var o=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=o}for(r=0;r<18;r++)o=!t&&1==(e>>r&1),this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=o},setupTypeInfo:function(t,e){for(var r=this.errorCorrectLevel<<3|e,o=i.getBCHTypeInfo(r),n=0;n<15;n++){var a=!t&&1==(o>>n&1);n<6?this.modules[n][8]=a:n<8?this.modules[n+1][8]=a:this.modules[this.moduleCount-15+n][8]=a}for(n=0;n<15;n++)a=!t&&1==(o>>n&1),n<8?this.modules[8][this.moduleCount-n-1]=a:n<9?this.modules[8][15-n-1+1]=a:this.modules[8][15-n-1]=a;this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,o=this.moduleCount-1,n=7,a=0,s=this.moduleCount-1;s>0;s-=2)for(6==s&&s--;;){for(var u=0;u<2;u++)if(null==this.modules[o][s-u]){var h=!1;a<t.length&&(h=1==(t[a]>>>n&1)),i.getMask(e,o,s-u)&&(h=!h),this.modules[o][s-u]=h,-1==--n&&(a++,n=7)}if((o+=r)<0||this.moduleCount<=o){o-=r,r=-r;break}}}},e.PAD0=236,e.PAD1=17,e.createData=function(t,r,o){for(var n=h.getRSBlocks(t,r),a=new l,s=0;s<o.length;s++){var u=o[s];a.put(u.mode,4),a.put(u.getLength(),i.getLengthInBits(u.mode,t)),u.write(a)}var f=0;for(s=0;s<n.length;s++)f+=n[s].dataCount;if(a.getLengthInBits()>8*f)throw new Error("code length overflow. ("+a.getLengthInBits()+">"+8*f+")");for(a.getLengthInBits()+4<=8*f&&a.put(0,4);a.getLengthInBits()%8!=0;)a.putBit(!1);for(;!(a.getLengthInBits()>=8*f||(a.put(e.PAD0,8),a.getLengthInBits()>=8*f));)a.put(e.PAD1,8);return e.createBytes(a,n)},e.createBytes=function(t,e){for(var r=0,o=0,n=0,a=new Array(e.length),s=new Array(e.length),h=0;h<e.length;h++){var l=e[h].dataCount,f=e[h].totalCount-l;o=Math.max(o,l),n=Math.max(n,f),a[h]=new Array(l);for(var g=0;g<a[h].length;g++)a[h][g]=255&t.buffer[g+r];r+=l;var c=i.getErrorCorrectPolynomial(f),d=new u(a[h],c.getLength()-1).mod(c);for(s[h]=new Array(c.getLength()-1),g=0;g<s[h].length;g++){var m=g+d.getLength()-s[h].length;s[h][g]=m>=0?d.get(m):0}}var v=0;for(g=0;g<e.length;g++)v+=e[g].totalCount;var E=new Array(v),T=0;for(g=0;g<o;g++)for(h=0;h<e.length;h++)g<a[h].length&&(E[T++]=a[h][g]);for(g=0;g<n;g++)for(h=0;h<e.length;h++)g<s[h].length&&(E[T++]=s[h][g]);return E};for(var r={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},o={L:1,M:0,Q:3,H:2},n={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},i={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;i.getBCHDigit(e)-i.getBCHDigit(i.G15)>=0;)e^=i.G15<<i.getBCHDigit(e)-i.getBCHDigit(i.G15);return(t<<10|e)^i.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;i.getBCHDigit(e)-i.getBCHDigit(i.G18)>=0;)e^=i.G18<<i.getBCHDigit(e)-i.getBCHDigit(i.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return i.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case n.PATTERN000:return(e+r)%2==0;case n.PATTERN001:return e%2==0;case n.PATTERN010:return r%3==0;case n.PATTERN011:return(e+r)%3==0;case n.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case n.PATTERN101:return e*r%2+e*r%3==0;case n.PATTERN110:return(e*r%2+e*r%3)%2==0;case n.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new u([1],0),r=0;r<t;r++)e=e.multiply(new u([1,a.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case r.MODE_NUMBER:return 10;case r.MODE_ALPHA_NUM:return 9;case r.MODE_8BIT_BYTE:case r.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case r.MODE_NUMBER:return 12;case r.MODE_ALPHA_NUM:return 11;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case r.MODE_NUMBER:return 14;case r.MODE_ALPHA_NUM:return 13;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,o=0;o<e;o++)for(var n=0;n<e;n++){for(var i=0,a=t.isDark(o,n),s=-1;s<=1;s++)if(!(o+s<0||e<=o+s))for(var u=-1;u<=1;u++)n+u<0||e<=n+u||0==s&&0==u||a==t.isDark(o+s,n+u)&&i++;i>5&&(r+=3+i-5)}for(o=0;o<e-1;o++)for(n=0;n<e-1;n++){var h=0;t.isDark(o,n)&&h++,t.isDark(o+1,n)&&h++,t.isDark(o,n+1)&&h++,t.isDark(o+1,n+1)&&h++,0!=h&&4!=h||(r+=3)}for(o=0;o<e;o++)for(n=0;n<e-6;n++)t.isDark(o,n)&&!t.isDark(o,n+1)&&t.isDark(o,n+2)&&t.isDark(o,n+3)&&t.isDark(o,n+4)&&!t.isDark(o,n+5)&&t.isDark(o,n+6)&&(r+=40);for(n=0;n<e;n++)for(o=0;o<e-6;o++)t.isDark(o,n)&&!t.isDark(o+1,n)&&t.isDark(o+2,n)&&t.isDark(o+3,n)&&t.isDark(o+4,n)&&!t.isDark(o+5,n)&&t.isDark(o+6,n)&&(r+=40);var l=0;for(n=0;n<e;n++)for(o=0;o<e;o++)t.isDark(o,n)&&l++;return r+Math.abs(100*l/e/e-50)/5*10}},a={glog:function(t){if(t<1)throw new Error("glog("+t+")");return a.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return a.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},s=0;s<8;s++)a.EXP_TABLE[s]=1<<s;for(s=8;s<256;s++)a.EXP_TABLE[s]=a.EXP_TABLE[s-4]^a.EXP_TABLE[s-5]^a.EXP_TABLE[s-6]^a.EXP_TABLE[s-8];for(s=0;s<255;s++)a.LOG_TABLE[a.EXP_TABLE[s]]=s;function u(t,e){if(null==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var o=0;o<t.length-r;o++)this.num[o]=t[o+r]}function h(t,e){this.totalCount=t,this.dataCount=e}function l(){this.buffer=new Array,this.length=0}u.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var o=0;o<t.getLength();o++)e[r+o]^=a.gexp(a.glog(this.get(r))+a.glog(t.get(o)));return new u(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=a.glog(this.get(0))-a.glog(t.get(0)),r=new Array(this.getLength()),o=0;o<this.getLength();o++)r[o]=this.get(o);for(o=0;o<t.getLength();o++)r[o]^=a.gexp(a.glog(t.get(o))+e);return new u(r,0).mod(t)}},h.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],h.getRSBlocks=function(t,e){var r=h.getRsBlockTable(t,e);if(null==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var o=r.length/3,n=new Array,i=0;i<o;i++)for(var a=r[3*i+0],s=r[3*i+1],u=r[3*i+2],l=0;l<a;l++)n.push(new h(s,u));return n},h.getRsBlockTable=function(t,e){switch(e){case o.L:return h.RS_BLOCK_TABLE[4*(t-1)+0];case o.M:return h.RS_BLOCK_TABLE[4*(t-1)+1];case o.Q:return h.RS_BLOCK_TABLE[4*(t-1)+2];case o.H:return h.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},l.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var f=function(t){t=t||{},(t=Object.assign({width:256,height:256,typeNumber:-1,correctLevel:o.H,background:"#ffffff",foreground:"#000000"},t)).canvasId?function(){var r=new e(t.typeNumber,t.correctLevel);r.addData(t.text),r.make();for(var o=wx.createCanvasContext&&wx.createCanvasContext(t.canvasId),n=t.width/r.getModuleCount(),i=t.height/r.getModuleCount(),a=0;a<r.getModuleCount();a++)for(var s=0;s<r.getModuleCount();s++){var u=r.isDark(a,s)?t.foreground:t.background;o.setFillStyle(u);var h=Math.ceil((s+1)*n)-Math.floor(s*n),l=Math.ceil((a+1)*n)-Math.floor(a*n);o.fillRect(Math.round(s*n),Math.round(a*i),h,l)}o.draw()}():console.warn("please you set canvasId!")};exports.default=f; 
 			}); 
		define("D8F7C3A31C91398CBE91ABA4A6597AF5.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("@babel/runtime/helpers/interopRequireDefault.js")(require("2A9BA8A51C91398C4CFDC0A241697AF5.js")),r=e.default.CryptoJS.AES.decrypt('{"ct":"GHO6apOwGuigcdGJPYbP1B5AhRfBjxOPm9snP6lten5DyMAzwIGbySl5w8AQSsIFDakjkLnPxbg5XC1UfGq3E0jrj+/LHjren/OojToldxOrRXx4Wq557Mzx+vHkkUrMBdWO2Ft6BTp2mKBaLPzRD1dcPqHLXrwTiRnElMsjEG031IRbxSc6s2U2EpD2Y2WExaxF+jT0I+T9AZt2d37SYmekysYwyCVrje4LoAU8bHa62lSRlvPO0jhLUZJV1/7dQzoeAAENDpihm3eggWOAMXt0b7+rE4oJ8CFmH8u5s1yzTfU0UJh/8GJJSE3WhqS2ilfUQ/6XuiF98i6bJwVPEFm9Ga9Z+fb2vL2U/+v25e0=","iv":"954ae0d65426f8d1bf9c91b4c59430da","s":"3affdbad7bbd5a15"}',"97b529d4e46362def5251939aa7fb352",{format:e.default.CryptoJSAesJson}).toString(e.default.CryptoJS.enc.Utf8);console.log(JSON.parse(JSON.parse(r))[0],312); 
 			}); 
		define("miniprogram_npm/vs-logger/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),t=e(require("../../@babel/runtime/helpers/objectSpread")),n=e(require("../../@babel/runtime/helpers/typeof")),o={};function r(e){var t=o[e];return t.exports?t.exports:(t.exports={},t.factory(t,t.exports),delete t.factory,t.exports)}function i(e,t){o[e]={factory:t}}i(0,function(e,t){e.exports=r(1)}),i(1,function(e,t){var n=r(2),o=n.Level,i=15e3,a={app:{launch:o.info,show:o.info,hide:o.info,error:o.error},page:{load:o.info,show:o.info,ready:o.info,hide:o.info,unload:o.info,tabItemTap:o.info}};var c=[];function s(e){return c.push(e),t();function t(){c.isRunning||(c.isRunning=!0,setTimeout(n,16))}function n(){if(c.length){var e=c[0];wx.request({url:e.url,method:e.method,header:e.header,data:e.data,success:function(t){try{e.callback&&e.callback(void 0,t)}catch(e){}c.shift(),n()},fail:function(e){console.log("VSLogger => 上传失败，"+i+"ms 后重试。"),setTimeout(t,i)}})}else c.isRunning=!1}}function l(e){c.method=c.Method=s;var t=e.lifeEvents,r=e.config,i=e.defaultOptions,a="function"==typeof i.v2?i.v2:function(){return i.v2};return c;function c(e){e=Object.setPrototypeOf({},e||{});for(var n=0;n<t.length;n++){var o=t[n];null!=r[o.slice(2).toLowerCase()]&&(e[o]=s(o,{level:r[o.slice(2).toLowerCase()],v2:i.v2})(e[o]))}return e}function s(e,t){t=t||{};var r=(t=Object.assign({},t.defaultOptions,t||{})).level||o.info,i="function"==typeof t.v2?t.v2:function(){return t.v2||a.call(this)},c=t.name||e;return function(t){return function(o){var a={level:r,v2:i.call(this),v3:e,message:c,data:o};try{n.report(a)}catch(e){console.error(e)}t&&t.call(this,o)}}}}c.isRunning=!1,t.init=function(e){i=e.resendDelay||i,e=e||{};var t={};for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.sendRequest=s,t.platform=function(){try{return wx.getSystemInfoSync()}catch(e){return{platform:"winxin mini program"}}}(),t.deviceId=function(){try{var e="VS_LOGGER_DEVICE_ID_KEY",t=wx.getStorageSync(e);return t||(t="DI-"+Math.random().toString(16).slice(2),wx.setStorageSync(e,t)),t}catch(e){return"DI-"+Math.random().toString(16).slice(2)}}(),n.init(t)},t.reinit=n.reinit,t.Level=n.Level,t.report=n.report,t.Console=n.Console,t.App=l({config:a.app||{},lifeEvents:["onLaunch","onShow","onHide","onError","onPageNotFound"],defaultOptions:{v2:"app/app"}}),t.Page=l({config:a.page||{},lifeEvents:["onLoad","onShow","onReady","onHide","onUnload","onTabItemTap"],defaultOptions:{v2:function(){return this.route}}})}),i(2,function(e,o){var r="https://statistics.e.verystar.net/v1/logs/put",i="",a="",c="",s=void 0,l=void 0,f="",u=1e3,p=20,d=128,g={},v="VS-"+ +new Date+Math.random().toString(16).slice(2),h=v,y="production",m={fatal:1,error:2,exception:3,info:4},S=[],w=0,I={getItem:function(e,t){t()},removeItem:function(e,t){t()},setItem:function(e,t,n){n()}},O="VS_LOGGER_3fbde7e1ea64780308f3366808fe61d1_"+y;var x=function(){console.error("VSLogger: not initialized, please call init first.")};function R(e){var t=["v2","v3","message"];for(var o in t)"string"==typeof e[o=t[o]]&&e[o].length||console.error("Invalid "+o+", expect String with length > 0, ");var r=e.level||m.info,a=e.v1||i,c=e.v2||"",s=e.v3||"",l=e.message||"",d=e.extra||"";"object"===(0,n.default)(d)&&(d=JSON.stringify(d));var I,O={traceId:v,deviceId:h,platform:g,env:y,user:f,time:(I=new Date,[I.getFullYear(),"-",I.getMonth()+1,"-",I.getDate()," ",I.getHours(),":",I.getMinutes(),":",I.getSeconds(),".",I.getMilliseconds()].join("")),data:e.data},x={level:r,v1:a,v2:c,v3:s,message:l,request:JSON.stringify(O),response:d};if("development"==y)return console.log("VSLogger=> ",JSON.parse(JSON.stringify(e)));!function(e){if(S.push(e),S.length>=p)clearTimeout(w),t();else if(S.length>1)return;function t(){var e=S;S=[],e.length&&E(e)}w=setTimeout(function(){t()},u)}(x)}function E(e){var t,n=Math.random().toString(36).slice(2)+(new Date).getTime().toString(36),o={app_key:a,nonce_str:n};o.sign=(t=[["app_key",a].join("=")].join("&")+c,s(t)),o.logs=e;try{l({url:r,method:"POST",header:{"Content-Type":"application/json; charset=utf-8"},data:JSON.stringify(o),callback:i})}catch(e){i(e)}function i(t){!function(e){var t=null,n=function(){try{e(t||[])}catch(e){console.log("VS_LOGGER_LOAD_ERROR",e)}};try{I.getItem(O,function(e){try{I.removeItem(O,function(){try{t=JSON.parse(e),n()}catch(e){n()}})}catch(e){n()}})}catch(e){n()}}(function(n){if(n.length)if(t){var o=Array.prototype.slice.call(n);Array.prototype.push.apply(o,e),function(e,t){var n=function(){try{t&&t()}catch(e){console.log("VS_LOGGER_SAVE_ERROR",e)}};try{var o=JSON.stringify(e.slice(-d));I.setItem(O,o,function(){try{n()}catch(e){}})}catch(e){try{n()}catch(e){}}}(o)}else E(n)}),t&&console.log("VS_LOGGER_SEND_FAIL",t)}}function b(){}function L(e){if(!(this instanceof L))return new L(e);this.name=e}function _(e){return function(t,n){var o=[].slice.call(arguments,2),r={level:e,v1:i,v2:"module/"+this.name,v3:t,message:n,data:o};try{x(r)}catch(e){}}}if(b.prototype=console,L.prototype=new b,L.prototype.fatal=_(m.fatal),L.prototype.error=_(m.error),L.prototype.exception=_(m.exception),L.prototype.info=_(m.info),void 0===o)o={};o.storage=I,o.Level=m,o.init=function(e){if(e.config&&"object"==(0,n.default)(e.config)&&e.config,!e.appName||"string"!=typeof e.appName||!e.appName.length)throw new Error("Invalid appName, expect String with length > 0");if(i=e.appName,!e.appKey||"string"!=typeof e.appKey||!e.appKey.length)throw new Error("Invalid appKey, expect String with length > 0");if(a=e.appKey,!e.appCode||"string"!=typeof e.appCode||!e.appCode.length)throw new Error("Invalid appCode, expect String with length > 0");if(c=e.appCode,!e.sha256||"function"!=typeof e.sha256)throw new Error("Invalid sha256, expect function");if(s=e.sha256,!e.sendRequest||"function"!=typeof e.sendRequest)throw new Error("Invalid sendRequest, expect function");return l=e.sendRequest,f=e.user||"",g=e.platform||{},h=e.deviceId||h,"development"===(y=e.env||"production")&&(E=function(e){console.log("VSLogger => ",e)}),x=R,this},o.reinit=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.user&&(f="object"===(0,n.default)(e.user)&&f&&"object"===(0,n.default)(f)?(0,t.default)({},f,e.user):e.user),this},o.report=function(e){try{x(e)}catch(e){}},o.Console=L});var a=r(0);"object"===("undefined"==typeof module?"undefined":(0,n.default)(module))&&module&&(module.exports=a); 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("@babel/runtime/helpers/interopRequireDefault");require("@babel/runtime/helpers/Arrayincludes");var t=e(require("@babel/runtime/helpers/objectSpread")),a=e(require("4445B0631C91398C2223D86471997AF5.js")),n=e(require("547BC8221C91398C321DA02558497AF5.js")),r=require("48B317D01C91398C2ED57FD7D3797AF5.js"),o=e(require("vs-logger")),s="wx7c4b1a9654cc4e72"===(wx.getAccountInfoSync?wx.getAccountInfoSync().miniProgram.appId:"wx7c4b1a9654cc4e72")?"production":"development",i="星巴克用星说_".concat(s),c={development:"11632163762b8860191eee5b6c527f29",production:"882d0cbdd6e9fe6ee713582a602d5bdc"}[s],l={development:"01cbae681b53617cc25801a601a7d51f",production:"caff547eaaa56e64f04a6a3947ffacd9"}[s];o.default.init({env:s,appName:i,appKey:c,appCode:l,sha256:r.sha256,user:(0,t.default)({oid:wx.getStorageSync("oid"),unionId:wx.getStorageSync("unionId")},wx.getStorageSync("userInfo")||{})});var d=[{scene:1007,channel:"blanks-singleShare"},{scene:1008,channel:"blanks-groupShare"},{scene:1044,channel:"blanks-defaultShare"},{scene:1096,channel:"blanks-defaultShare"},{scene:1005,channel:"blanks-WXsearch"},{scene:1006,channel:"blanks-WXsearch"},{scene:1027,channel:"blanks-WXsearch"},{scene:1042,channel:"blanks-WXsearch"},{scene:1053,channel:"blanks-WXsearch"},{scene:1001,channel:"blanks-recordList"},{scene:1090,channel:"blanks-recordList"},{scene:1089,channel:"blanks-drop-downList"}];App(o.default.App({doAuthor:function(){var e=this;return new Promise(function(t,a){wx.login({success:function(a){console.log("doAuthor:"),console.log(a);var r={js_code:a.code},s=e.getSignurature(r);wx.request({url:n.default.GET_USER_TICKET,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:Object.assign(r,{sign:s}),success:function(a){if(200==a.data.retcode){var i=a.data.data.ticket;wx.setStorageSync("oid",a.data.data.xcx_openid),wx.setStorageSync("unionId",a.data.data.unionid),o.default.reinit({user:a.data.data}),wx.setStorage({key:"ticket",data:i}),t({oid:a.data.data.xcx_openid,uid:a.data.data.unionid,ticket:i})}else e.logger(n.default.GET_USER_TICKET,{level:3,message:a.data.msg||"获取ticket失败",request:Object.assign(r,{sign:s}),response:a}),wx.navigateTo({url:"../error/error?api=getuserticket&code="+a.data.retcode}),wx.hideLoading()},fail:function(t){wx.navigateTo({url:"../error/error?msg=getuserticket_timeout"}),wx.hideLoading(),e.logger(n.default.GET_USER_TICKET,{level:3,message:t.errMsg||"获取ticket失败",request:Object.assign(r,{sign:s}),response:t})}})},fail:function(t){wx.navigateTo({url:"../error/error?msg=wxLoginError"}),wx.hideLoading(),e.logger("wx.login",{level:3,message:t.errMsg||"微信登录失败",response:t})}})})},getUnionId:function(e,t,a){var r=this;return new Promise(function(s,i){var c={encrypted_data:e,iv:t,ticket:a},l=r.getSignurature(c);r.logger(n.default.DECRYPT_USER_DATA,{level:4,message:"发起请求：用户信息解密",response:c}),wx.request({url:n.default.DECRYPT_USER_DATA,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:Object.assign(c,{sign:l}),success:function(e){if(200==e.data.retcode){var t=e.data.data.unionId;wx.setStorageSync("unionId",t),o.default.reinit({user:e.data.data}),s(t)}else 99999==e.data.retcode||10455==e.data.retcode?(r.doAuthor(),i()):(r.logger(n.default.DECRYPT_USER_DATA,{level:3,message:e.data.msg||"获取用户信息失败",request:Object.assign(c,{sign:l}),response:e}),wx.navigateTo({url:"../error/error?api=decryptUserData&code="+e.data.retcode}))},fail:function(e){wx.showModal({title:"提示",content:"您的操作超时，请再试一次",showCancel:!1}),e&&r.logger(n.default.DECRYPT_USER_DATA,{level:3,message:e.errMsg||"用户信息解密失败",response:e})}})})},setVisitId:function(e){this.globalData.visitId||(this.globalData.visitId=a.default.sha1(Math.floor(Date.now()/1e3)+e))},loginError:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.doAuthor(),wx.showModal({title:"提示",content:"您的操作超时，请再次重试",showCancel:!1}),this.logger("checkSession",{level:3,message:e.errMsg,response:e}),wx.hideLoading()},getUserInfo:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};if(e.detail.errMsg.match(/^getUserInfo:fail auth (?:deny|cancel)/))return wx.showModal({title:"提示",content:"为避免影响小程序的正常使用，请允许授权",showCancel:!1}),void n(e.detail);this.globalData.userInfo=e.detail.userInfo,wx.setStorageSync("userInfo",e.detail.userInfo),o.default.reinit({user:e.detail.userInfo}),wx.showLoading({mask:!0}),wx.checkSession({success:function(){var n=wx.getStorageSync("unionId"),r=wx.getStorageSync("ticket");return n?(wx.hideLoading(),a(n)):r?void t.getUnionId(e.detail.encryptedData,e.detail.iv,r).then(function(e){wx.hideLoading(),a(e)}):t.loginError({errMsg:"ticket参数缺失"})},fail:function(e){console.log(e),t.loginError(e),n(e)}})},onLaunch:function(e){if(e.query&&e.query.channel)this.globalData.channel=e.query.channel;else{var t=d.filter(function(t){return t.scene===e.scene});t.length>0&&(this.globalData.channel=t[0].channel)}this.checkUpdate(),console.log(e,"appLaunch");var a=wx.getStorageSync("userInfo");a&&o.default.reinit({user:a});var n=wx.getStorageSync("oid");n&&(o.default.reinit({user:{xcx_openid:n}}),this.setVisitId(n),this.getSubscribeList());var r=wx.getSystemInfoSync(),i=r.model.substring(0,r.model.lastIndexOf("X"))+"X";this.globalData.isIpx="iPhone X"===i,r.whRatio=Math.floor(r.screenHeight/r.screenWidth*10)/10,this.globalData.sysinfo=r,this.globalData.env=s},onShow:function(e){e.referrerInfo&&["wxaa11144803c4ec3f"].indexOf(e.referrerInfo.appId)>-1&&(this.globalData.cover_url=e.referrerInfo.extraData?e.referrerInfo.extraData.cover_url:"")},onError:function(e){this.logger("appOnError",{level:e.match(/^webviewSDKScriptError|webviewScriptError Framework|jsEnginScriptError|appServiceSDKScriptError/)?4:3,message:"全局捕获错误",response:e})},doTracking:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:"")||Math.floor(Date.now()/1e3),r={uuid:wx.getStorageSync("oid"),visit_id:this.globalData.visitId,prj:"wsg3.0",event:e,event_val:t,tsp:a},o=this.getSignurature(r);wx.request({url:n.default.FORM_LOG,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:Object.assign(r,{sign:o})})},sendFormId:function(e,t,a){var r=this,o={openid:wx.getStorageSync("oid"),formid:e,type:t,type_id:a,business:"egifting",channel:"wechat"},s=r.getSignurature(o);wx.request({url:n.default.FORM_ADD,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:Object.assign(o,{sign:s}),success:function(e){200!==e.data.retcode&&r.logger(n.default.FORM_ADD,{level:3,message:e.data.msg||"保存小程序formid失败",request:Object.assign(o,{sign:s}),response:e})}})},goToOrders:function(){wx.navigateTo({url:"../order/order"})},gotoUserRegH5:function(e,t,a){var r=this;console.log("----------- code star -----------"),console.log(e),console.log("card_id="+e),console.log(t),console.log("openid="+t),console.log(a),console.log("encrypt_code="+a),console.log("----------- code end -----------");var o={openid:t,card_id:e,encrypt_code:a},s=r.getSignurature(o);console.log("----------- sign star -----------"),console.log(s),console.log("----------- sign end -----------");var i=n.default.H5_REG_URL+"&card_id="+e+"&openid="+t+"&encrypt_code="+encodeURIComponent(a)+"&sign="+s;console.log(i),i=encodeURIComponent(i),r.doTracking("actPv",JSON.stringify({page_path:"/h5/h5/for_self/url/user_binding",scene:r.globalData.sceneId}),Math.floor(Date.now()/1e3)),wx.navigateTo({url:"../h5/h5?url="+i+"&type=special"})},addWXCard:function(){wx.addCard({cardList:[{cardId:"",cardExt:'{"code": "", "openid": "", "timestamp": "", "signature":""}'},{cardId:"",cardExt:'{"code": "", "openid": "", "timestamp": "", "signature":""}'}],success:function(e){console.log(e.cardList)}})},logAddCard:function(e,t,a){var r=this,o={order_id:e,open_id:wx.getStorageSync("oid"),result:t,detail:a},s=r.getSignurature(o);wx.request({url:n.default.LOG_ADD_CARD,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:Object.assign(o,{sign:s}),success:function(e){console.log(e),e&&e.data&&200!==e.data.retcode&&r.logger(n.default.LOG_ADD_CARD,{level:3,message:e.data.msg||"投递塞卡结果失败",request:Object.assign(o,{sign:s}),response:e})},fail:function(e){r.logger(n.default.LOG_ADD_CARD,{level:3,message:"logAddCard fail",response:e})}})},showFriendsList:function(e){var t=this;console.log("orderid"),console.log(e),wx.getStorageSync("oid")||t.doAuthor().then(function(e){var t=e.oid;console.log(t)});var a={order_id:e,open_id:wx.getStorageSync("oid")},r=t.getSignurature(a);wx.request({url:n.default.CREATE_GIFT_ORDER,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:Object.assign(a,{sign:r}),success:function(o){var s=o.data.data;200==o.data.retcode?wx.navigateToMiniProgram({appId:"wx8638fbedaf138a87",path:"pages/send/send?order_id="+e+"@wxgiftcard&page_id="+s.page_id,envVersion:"release",success:function(e){console.log("拉起success",e)},fail:function(e){t.logger("navigateToMiniProgram",{level:4,message:"appId:wx8638fbedaf138a87, fail",response:e})}}):10706==o.data.retcode?wx.showModal({title:"",showCancel:!1,content:"系统超时，请稍后重试。",success:function(){}}):(t.logger(n.default.CREATE_GIFT_ORDER,{level:3,message:o.data.msg||"创建赠送订单失败",request:Object.assign(a,{sign:r}),response:o}),wx.redirectTo({url:"../error/error?api=creategiftorder&code="+o.data.retcode}))}})},getSignurature:function(e){var t=Object.keys(e);t=t.sort();var a={};t.forEach(function(t){""!==e[t]&&(a[t.toLowerCase()]=e[t])});var n="";for(var o in a)n+="&"+o+"="+a[o];return n=n.substr(1)+"6aa258a1656551250ff22331cfe0b6ba",(0,r.sha256)(n)},getLogSign:function(e){e.app_key=c;var t=Object.keys(e);t=t.sort();var a={};t.forEach(function(t){""!==e[t]&&(a[t.toLowerCase()]=e[t])});var n="";for(var o in a)n+="&"+o+"="+a[o];return n=n.substr(1)+l,e.sign=(0,r.sha256)(n),e},commonRegex:function(){return{checkMobile:function(e){return/^1[3456789]\d{9}$/.test(e)},checkEmail:function(e){return/^[0-9A-Za-z\-_.]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(e)},checkTax:function(e){return/^[A-Z0-9]{15}$|^[A-Z0-9]{18}$/.test(e)},checkAllNum:function(e){return/^[0-9]*$/.test(e)}}},getByteLength:function(e){return e.replace(/[^\u0000-\u00ff]/g,"aa").length},checkUpdate:function(){var e=this,t=wx.getUpdateManager();t.onCheckForUpdate(function(e){console.log("update: ",e.hasUpdate)}),t.onUpdateReady(function(){wx.showModal({title:"更新提示",content:"当前小程序有版本更新，请点击“确定”重启小程序体验最新功能",success:function(a){a.confirm?t.applyUpdate():e.logger("onUpdateReady",{level:3,message:"用户取消版本更新"})}})}),t.onUpdateFailed(function(){e.logger("onUpdateFailed",{level:3,message:"版本更新失败"})})},logger:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=getCurrentPages();n.length||(n=[{route:"pages/index/index"}]);var r=n[n.length-1];o.default.report({v1:i,v2:r.route,v3:e,level:a.level||4,message:a.message||"",data:(0,t.default)({ticket:wx.getStorageSync("ticket"),open_id:wx.getStorageSync("oid")},a.request),extra:a.response})},getSubscribeList:function(e){var t=this,a={open_id:wx.getStorageSync("oid")};a.sign=this.getSignurature(a),wx.request({url:n.default.GET_SUBSCRIBE_TEMPLATE_LIST,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:a,success:function(r){r.data&&200===r.data.retcode?(t.globalData.subscribeList=r.data.data,console.log("getSubscribeList success:",t.globalData.subscribeList),e&&e(r.data.data),t.logger(n.default.GET_SUBSCRIBE_TEMPLATE_LIST,{level:4,message:r.data.msg||"获取订阅消息列表成功",request:a,response:r})):t.logger(n.default.GET_SUBSCRIBE_TEMPLATE_LIST,{level:3,message:r.data.msg||"获取订阅消息列表失败",request:a,response:r})},fail:function(e){t.logger(n.default.GET_SUBSCRIBE_TEMPLATE_LIST,{level:3,message:e.errMsg||"获取订阅消息列表失败",request:a,response:e})}})},compareVersions:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];if(![1,3].includes(t.length))throw new Error("Invalid argument length: ".concat(t));var n=t.join("").match(/^v?(\d+)(?:\.(\d+))?(?:\.(\d+))? *([<>=]) *v?(\d+)(?:\.(\d+))?(?:\.(\d+))?$/i);if(!n)throw new Error("Invalid argument not valid expression (".concat(t," received)"));for(var r=n[4],o=n.slice(1,4),s=n.slice(5,8),i=0;i<o.length;i++){var c=Number(o[i])||0,l=Number(s[i])||0;if(c>l)return">"===r;if(c<l)return"<"===r}return"="===r},globalData:{userInfo:null,isIpx:null,sysinfo:{},visitId:"",sceneId:"",page_id:"",icon_id:"",cover_id:"",diyInfo:{},env:"development",collectInfo:null,channel:"",subscribeList:null},checkBeforePath:null,com:{},$:{arrayBuffer:null,canvasWidth:null,canvasHeight:null,cardImage:null,image:""}})); 
 			}); 	require("app.js");
 		__wxRoute = 'components/authPopup/authPopup';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/authPopup/authPopup.js';	define("components/authPopup/authPopup.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Component({properties:{show:Boolean,canClose:{type:Boolean,value:!0}},methods:{toggleAuthPopup:function(t){this.setData({show:!this.data.show}),this.data.show?this.triggerEvent("popupShow",{type:t.type}):this.triggerEvent("popupClose",{type:t.type})},getUserInfo:function(e){var o=this;this.setData({isSubmiting:!0}),t.getUserInfo(e,function(t){o.triggerEvent("auth",t),o.toggleAuthPopup(e),o.setData({isSubmiting:!1})},function(){o.setData({isSubmiting:!1})})}}}); 
 			}); 	require("components/authPopup/authPopup.js");
 		__wxRoute = 'components/collectTips/collectTips';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/collectTips/collectTips.js';	define("components/collectTips/collectTips.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Component({properties:{isIpx:{type:Boolean,value:!1},tipsData:{type:Object,value:{show:"",collectType:0,again:!1}},maxTips:{type:String,value:""},closeType:{type:Number,value:0}},methods:{again:function(){this.triggerEvent("again")},toCollectList:function(){this.triggerEvent("closeMaxTips"),t.doTracking("actSubListButton",JSON.stringify({}),Math.floor(Date.now()/1e3)),0==this.data.closeType?wx.navigateTo({url:"/pages/collectList/collectList"}):1==this.data.closeType&&wx.navigateBack({delta:1})},closeMaxTips:function(){this.triggerEvent("closeMaxTips"),t.doTracking("actSubOkButton",JSON.stringify({}),Math.floor(Date.now()/1e3))}}}); 
 			}); 	require("components/collectTips/collectTips.js");
 		__wxRoute = 'components/fadeBox/fadeBox';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/fadeBox/fadeBox.js';	define("components/fadeBox/fadeBox.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";getApp();Component({data:{modelType:0},properties:{showType:{type:Boolean,value:!1,observer:function(t){t?this.showStart():this.hideStart()}}},hideTimeout:null,methods:{showStart:function(){var t=this;clearTimeout(this.hideTimeout),this.setData({modelType:1}),wx.nextTick(function(){t.setData({modelType:2})})},hideStart:function(){var t=this;this.setData({modelType:3}),this.hideTimeout=setTimeout(function(){t.setData({modelType:0})},400)}}}); 
 			}); 	require("components/fadeBox/fadeBox.js");
 		__wxRoute = 'pages/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/index.js';	define("pages/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),t=e(require("../../@babel/runtime/helpers/objectSpread")),a=e(require("vs-logger")),n=e(require("../../547BC8221C91398C321DA02558497AF5.js")),i=(e(require("../../4445B0631C91398C2223D86471997AF5.js")),getApp());Page(a.default.Page({data:{indexData:{},indicatorDots:!0,autoplay:!0,duration:500,showPopup:!1,interval:4e3,hasSimpleBubble:!1,hasUnGiftingType:null,hasUnGifting:!1,favorite:{old_image:"/image/card_icon.png",title:"收藏",title_color:"#00A862"},orderHistory:{old_image:"/image/coffee.png",title:"购买历史",title_color:"#00A862"},backgroundInfo:{color:"#F9F9F9",type:"bottom"}},hasUnionid:!1,pageInit:!1,showAuthPopup:function(){this.setData({showAuthPopup:!0})},togglePopup:function(){this.setData({showPopup:!this.data.showPopup})},resetTipIcon:function(e,t){var a=JSON.parse(JSON.stringify(this.data[t]));for(var n in e)e[n]&&(a[n]=e[n]);return a},pageJump:function(e){var t=e.currentTarget.dataset.obj;if(!t||!t.type)return i.logger("pageJump",{level:3,message:"缺失obj.type参数",response:t}),void wx.showModal({title:"提示",content:"您的操作超时，请稍后重试。",showCancel:!1});var a=e.currentTarget.dataset.type,n={banner:t.banner_id,theme:t.path};i.sendFormId("mock formid",a,n[a]||1),"h5"==t.type?wx.navigateTo({url:"../h5/h5?url="+t.path}):"miniprogram"==t.type?wx.navigateToMiniProgram({appId:t.app_id,path:t.path,envVersion:"trial",success:function(e){}}):"theme"==t.type?wx.navigateTo({url:"/pages/cardDetail/cardDetail?theme_id=".concat(t.path,"&scene=").concat(i.globalData.sceneId)}):"diy"==t.type?wx.navigateTo({url:"/pages/diy/diy?theme_id=".concat(t.path,"&channel=").concat(i.globalData.channel,"&scene=").concat(i.globalData.sceneId)}):"internal"==t.type?(this.hasUnionid&&wx.getStorageSync("userInfo")||(t.path+="&authorize=true"),wx.navigateTo({url:t.path})):"coupon"==t.type?this.sendCoupon(t):"thousand_coupon"==t.type&&this.sendThousandCoupon(t)},sendCoupon:function(e){wx.showLoading({mask:!0});var a={open_id:wx.getStorageSync("oid"),batch_no:e.batch_no,activity_id:e.activity_id},o=i.getSignurature(a);wx.request({url:n.default.SEND_VS_COUPON,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:Object.assign(a,{sign:o}),success:function(e){wx.showModal({title:"",showCancel:!1,content:e.data.msg}),200!==e.data.retcode&&i.logger(n.default.SEND_VS_COUPON,{level:3,message:e.data.msg||"发送活动券失败",request:Object.assign(a,{sign:o}),response:e}),wx.hideLoading()},fail:function(e){wx.showModal({title:"",showCancel:!1,content:"您的操作超时，请稍后重试"}),i.logger(n.default.SEND_VS_COUPON,{level:3,message:e.errMsg||"发送活动券失败",request:(0,t.default)({},a,{sign:o}),response:e}),wx.hideLoading()}})},sendThousandCoupon:function(e){this.hasUnionid?this.requestThousandCoupon(e):(this.thousandCouponOptions=e,this.authType=e.type,this.showAuthPopup())},handleAuth:function(e){this.hasUnionid=e.detail,"thousand_coupon"===this.authType&&this.requestThousandCoupon(this.thousandCouponOptions)},requestThousandCoupon:function(e){wx.showLoading({mask:!0});var a={open_id:wx.getStorageSync("oid"),union_id:wx.getStorageSync("unionId"),thousand_activity_id:e.path},o=i.getSignurature(a);wx.request({url:n.default.SEND_THOUSAND_COUPON,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:(0,t.default)({},a,{sign:o}),success:function(e){wx.showModal({title:"",showCancel:!1,content:e.data.data.message}),200!==e.data.retcode&&i.logger(n.default.SEND_THOUSAND_COUPON,{level:3,message:e.data.data.message||"发送千人千券活动券失败",request:(0,t.default)({},a,{sign:o}),response:e}),wx.hideLoading()},fail:function(e){wx.showModal({title:"",showCancel:!1,content:"您的操作超时，请稍后重试"}),i.logger(n.default.SEND_THOUSAND_COUPON,{level:3,message:e.errMsg||"发送千人千券活动券失败",request:(0,t.default)({},a,{sign:o}),response:e}),wx.hideLoading()}})},goToOrders:function(){wx.navigateTo({url:"../order/order"})},goToH5H5:function(){var e="https://onramp-staging-sbux.wiredcraft.cn/svc-onramp?card_id=pcv_Uw8-hcCLDai63zJMvSvGLo0Y&openid=ox4Jr5TXDybkWT4kRXuJRK-yOla9Q&encrypt_code=aoVaVRvgj06MASPqMQEFRMjxRZUUSJbQtZHGjbAsZ2qqofL9HHEGS1IEgYoAlmYu";e=encodeURIComponent(e),wx.navigateTo({url:"../h5/h5?url="+e+"&type=special"})},doInit:function(e,t){var a=this;this.pageInit=!0,this.hasUnionid=wx.getStorageSync("unionId");var o=this,s={scene:e.scene?e.scene:"default",channel:i.globalData.channel,open_id:t},r=i.getSignurature(s);i.logger(n.default.INDEX,{level:4,message:"开始请求首页数据",request:s}),wx.request({url:n.default.INDEX,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:Object.assign(s,{sign:r}),success:function(e){if(console.log("首页数据拉取:",e.data),200==e.data.retcode||99999==e.data.retcode){var t=e.data.data,d={indexData:t};t.favorite&&(d.favorite=a.resetTipIcon(t.favorite,"favorite")),t.order_history&&(d.orderHistory=a.resetTipIcon(t.order_history,"orderHistory")),d.backgroundInfo=a.resetTipIcon({image:t.background_image,color:t.background_color,type:t.background_type},"backgroundInfo"),i.globalData.sceneId=t.scene,a.setData(d),i.doTracking("actPv",JSON.stringify({page_path:"/pages/index",channel:i.globalData.channel,scene:i.globalData.sceneId}),Math.floor(Date.now()/1e3)),1==t.landing&&t.landing_config.id!==wx.getStorageSync("landingId")&&(o.setData({showPopup:!0}),wx.setStorage({key:"landingId",data:t.landing_config.id})),o.checkShowGift(t),t.banner&&1===t.banner.length&&o.setData({indicatorDots:!1})}else i.logger(n.default.INDEX,{level:3,message:e.data.msg||"获取首页数据失败",request:Object.assign(s,{sign:r}),response:e}),wx.reLaunch({url:"../error/error?api=index&code="+e.data.retcode});wx.hideLoading()},fail:function(e){console.error("index data error:",e),wx.reLaunch({url:"../error/error?msg=API_index_WXRequestFail"}),i.logger(n.default.INDEX,{level:3,message:e.errMsg||"获取首页数据失败",request:Object.assign(s,{sign:r}),response:e}),wx.hideLoading()}})},onLoad:function(e){var t=this;wx.showLoading({mask:!0}),i.globalData.channel=e.channel||i.globalData.channel||"",wx.checkSession({success:function(){var a=wx.getStorageSync("oid");a?t.doInit(e,a):i.doAuthor().then(function(a){t.doInit(e,a.oid),i.setVisitId()})},fail:function(a){i.doAuthor().then(function(a){t.doInit(e,a.oid),i.setVisitId()}),i.logger("checkSession",{level:4,message:"session过期",response:a})}})},onShow:function(){this.pageInit&&this.getLastUngifting()},getLastUngifting:function(){var e=this,t={open_id:wx.getStorageSync("oid")},a=i.getSignurature(t);wx.request({url:n.default.LAST_UNGIFTING,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:Object.assign(t,{sign:a}),success:function(o){if(200==o.data.retcode){var s=o.data.data;e.setData({"indexData.un_gifting_id":s.un_gifting_id,"indexData.un_gifting_type":s.un_gifting_type})}else 9999===o.data.retcode?i.doAuthor().then(function(t){e.getLastUngifting(),i.setVisitId()}):i.logger(n.default.LAST_UNGIFTING,{level:3,message:o.data.msg||"获取未送礼品券失败",request:Object.assign(t,{sign:a}),response:o});e.checkShowGift(e.data.indexData)},fail:function(o){e.checkShowGift(e.data.indexData),i.logger(n.default.LAST_UNGIFTING,{level:3,message:o.errMsg||"获取未送礼品券失败",request:Object.assign(t,{sign:a}),response:o})}})},checkShowGift:function(e){console.log("show gift pop"),0!==e.un_gifting_id&&e.un_gifting_id!==wx.getStorageSync("unGiftingId")&&e.un_gifting_id>wx.getStorageSync("unGiftingId")?(this.setData({hasUnGiftingType:e.un_gifting_type,hasUnGifting:!0,hasSimpleBubble:!1}),wx.setStorage({key:"unGiftingId",data:e.un_gifting_id})):"{}"!=JSON.stringify(e.tip)?this.setData({hasSimpleBubble:!0,hasUnGifting:!1}):this.setData({hasSimpleBubble:!1,hasUnGifting:!1})},onHide:function(){i.doTracking("actHang",JSON.stringify({page_path:"/pages/index"}),Math.floor(Date.now()/1e3))},onShareAppMessage:function(){return i.doTracking("actShare",JSON.stringify({page_path:"/pages/index"}),Math.floor(Date.now()/1e3)),{path:"pages/index/index?scene="+this.data.indexData.scene}},timeList:[4e3,3e3,2e3],bannerChange:function(e){var t=e.detail.current,a=t>1?this.timeList[2]:this.timeList[t];this.setData({interval:a})},toCollect:function(){i.doTracking("actClickFavButton",JSON.stringify({}),Math.floor(Date.now()/1e3)),wx.navigateTo({url:"/pages/collectList/collectList"})}})); 
 			}); 	require("pages/index/index.js");
 		__wxRoute = 'pages/check/check';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/check/check.js';	define("pages/check/check.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),o=(require("../../48B317D01C91398C2ED57FD7D3797AF5.js"),e(require("../../547BC8221C91398C321DA02558497AF5.js")),e(require("vs-logger"))),t=getApp();Page(o.default.Page({data:{currentSrc:""},onLoad:function(e){console.log(e),wx.hideLoading();var o=wx.getUpdateManager();setTimeout(function(){wx.showLoading()},2e3),o.onCheckForUpdate(function(e){console.log(e.hasUpdate),e.hasUpdate||console.log(t.checkBeforePath)}),o.onUpdateReady(function(){console.log("qweqwe"),wx.showModal({title:"更新提示",content:"当前小程序有版本更新，请点击“确定”重启小程序体验最新功能",success:function(e){e.confirm?o.applyUpdate():t.logger("onUpdateReady",{level:3,message:"用户取消版本更新"})}})}),o.onUpdateFailed(function(){wx.showModal({title:"更新提示",content:"当前小程序版本更新失败，请点击“确定”重启小程序",success:function(e){e.confirm&&o.applyUpdate()}}),t.logger("onUpdateFailed",{level:3,message:"版本更新失败"})})}})); 
 			}); 	require("pages/check/check.js");
 		__wxRoute = 'pages/privacy/privacy';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/privacy/privacy.js';	define("pages/privacy/privacy.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault")(require("vs-logger")),a=getApp();Page(e.default.Page({data:{},onLoad:function(e){wx.hideShareMenu(),a.doTracking("actPv",JSON.stringify({page_path:"/pages/privacy",channel:a.globalData.channel,scene:a.globalData.sceneId}),Math.floor(Date.now()/1e3))},onHide:function(){a.doTracking("actHang",JSON.stringify({page_path:"/pages/privacy"}),Math.floor(Date.now()/1e3))}})); 
 			}); 	require("pages/privacy/privacy.js");
 		__wxRoute = 'pages/cardQr/cardQr';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/cardQr/cardQr.js';	define("pages/cardQr/cardQr.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),t=e(require("../../D23B39071C91398CB45D5100B1897AF5.js")),a=e(require("../../547BC8221C91398C321DA02558497AF5.js")),n=e(require("vs-logger")),o=getApp();Page(n.default.Page({data:{info:null,isIpx:null,isIOS:!0,countDownTimeout:null,countDownTime:30,cSize:0,showFake:!1,brightnessValue:.5},onHide:function(){wx.setScreenBrightness({value:this.data.brightnessValue}),clearTimeout(this.data.countDownTimeout),o.doTracking("actHang",JSON.stringify({page_path:"/pages/cardQr"}),Math.floor(Date.now()/1e3))},onShow:function(){var e=this;wx.getScreenBrightness({success:function(t){e.setData({brightnessValue:t.value})}}),wx.setScreenBrightness({value:1})},generateQrcode:function(e,n,i){var r=this,s={type:e,encrypt_code:n,card_id:i},c=o.getSignurature(s);wx.request({url:a.default.CARD_SHOW,header:{"content-type":"application/json"},method:"GET",data:Object.assign(s,{sign:c}),success:function(d){if(200==d.data.retcode){r.setData({info:d.data.data}),o.doTracking("actPv",JSON.stringify({page_path:"/pages/cardQr",channel:o.globalData.channel,scene:o.globalData.sceneId}),Math.floor(Date.now()/1e3)),wx.setNavigationBarTitle({title:d.data.data.card_name});var u=0;wx.getSystemInfoSync().system.indexOf("iOS")>-1?(r.setData({isIOS:!0}),u=o.globalData.isIpx?280:196,"iPhone 5"==wx.getSystemInfoSync().model&&(u=162)):(r.setData({isIOS:!1}),u=1==r.data.info.type?206:142),r.setData({cSize:u}),(0,t.default)({width:r.data.cSize,height:r.data.cSize,canvasId:"mycanvas",text:r.data.info.qrcode}),"2"==r.data.info.type&&r.countDown()}else 10401==d.data.retcode?r.generateQrcode(e,n,i):2e4==d.data.retcode?r.setData({showFake:!0}):(o.logger(a.default.CARD_SHOW,{level:3,message:d.data.msg||"获取核销码失败",request:Object.assign(s,{sign:c}),response:d}),wx.navigateTo({url:"../error/error?api=cardShow&code="+d.data.retcode}))}})},onLoad:function(e){wx.hideShareMenu(),this.setData({isIpx:o.globalData.isIpx}),e.card_id&&e.type&&e.encrypt_code?this.generateQrcode(e.type,e.encrypt_code,e.card_id):wx.navigateTo({url:"../error/error?msg=paramWrongInCardQrPage"})},doCountDown:function(){var e=this;if(e.data.countDownTime--,e.setData({countDownTime:e.data.countDownTime--,countDownTimeout:setTimeout(e.doCountDown,1e3)}),0==e.data.countDownTime){clearTimeout(e.data.countDownTimeout);var n={open_id:wx.getStorageSync("oid"),code:e.data.info.code},i=o.getSignurature(n);wx.request({url:a.default.CARD_CODE,header:{"content-type":"application/json"},method:"GET",data:Object.assign(n,{sign:i}),success:function(r){200==r.data.retcode?((0,t.default)({width:e.data.cSize,height:e.data.cSize,canvasId:"mycanvas",text:r.data.data}),e.countDown()):(o.logger(a.default.CARD_CODE,{level:3,message:r.data.msg||"获取核销动态二维码失败",request:Object.assign(n,{sign:i}),response:r}),wx.navigateTo({url:"../error/error?api=cardShow&code="+r.data.retcode}))}})}},countDown:function(){this.setData({countDownTime:30}),this.doCountDown()}})); 
 			}); 	require("pages/cardQr/cardQr.js");
 		__wxRoute = 'pages/cardDetail/cardDetail';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/cardDetail/cardDetail.js';	define("pages/cardDetail/cardDetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),t=e(require("../../@babel/runtime/helpers/defineProperty")),a=e(require("../../@babel/runtime/helpers/slicedToArray")),o=e(require("../../547BC8221C91398C321DA02558497AF5.js")),i=e(require("../../2A9BA8A51C91398C4CFDC0A241697AF5.js")),s=e(require("vs-logger")),r=getApp();Page(s.default.Page({data:{isSpecil:!1,cardData:null,selectedCardNum:0,showBottomPopup:!1,popupGood:null,isIpx:null,shopcartNum:0,shopcartPrice:0,buyClicked:!1,themeId:null,sceneId:null,isSelfGifting:!1,active:!0,for_self:null,tipsData:{show:"",text:"收藏成功",again:!1},maxTips:"",closeType:0,scrollToView:""},onHide:function(){r.doTracking("actHang",JSON.stringify({page_path:"/pages/cardDetail"}),Math.floor(Date.now()/1e3))},onShareAppMessage:function(){var e;return this.data.customInfo?(r.doTracking("actShare",JSON.stringify({page_path:"/pages/diy"}),Math.floor(Date.now()/1e3)),e={title:r.globalData.diyInfo.share_title||"",path:"/pages/diy/diy?theme_id=".concat(r.globalData.theme_id,"&scene=").concat(r.globalData.sceneId),imageUrl:r.globalData.diyInfo.share_image_url||""}):(r.doTracking("actShare",JSON.stringify({page_path:"/pages/cardDetail"}),Math.floor(Date.now()/1e3)),e={title:this.data.cardData.share_title||"",path:"pages/cardDetail/cardDetail?theme_id=".concat(this.data.themeId,"&scene=").concat(this.data.sceneId),imageUrl:this.data.cardData.share_image_url||""}),e},requestPaymentCount:0,themeInit:function(e){var t=this,a={theme_id:t.data.themeId,scene:t.data.sceneId,open_id:e,channel:r.globalData.channel||""},i=r.getSignurature(a);wx.showLoading(),wx.request({url:o.default.THEME_SHOW,header:{"content-type":"application/x-www-form-urlencoded"},data:Object.assign(a,{sign:i}),method:"POST",success:function(e){var s=e.data,n=s.data;if(200==s.retcode)if(n.banner_image_url&&t.setData({isSpecil:!0}),"1"==n.for_self){t.setData({isSelfGifting:!0,for_self:"1"}),console.log(t.data),r.globalData.sceneId=n.scene;var l=!0,c=!1,d=void 0;try{for(var u,g=n.goods_list[Symbol.iterator]();!(l=(u=g.next()).done);l=!0){var f=u.value;f.num=0,f.price=f.price/100}}catch(e){c=!0,d=e}finally{try{l||null==g.return||g.return()}finally{if(c)throw d}}n.goods_list[0].num++,t.setData({cardData:n}),wx.setNavigationBarTitle({title:n.title}),t.countShopCart()}else{t.setData({isSelfGifting:!1,for_self:"0"}),r.globalData.sceneId=n.scene;var h=!0,m=!1,p=void 0;try{for(var v,_=n.goods_list[Symbol.iterator]();!(h=(v=_.next()).done);h=!0){var y=v.value;y.num=0,y.price=y.price/100}}catch(e){m=!0,p=e}finally{try{h||null==_.return||_.return()}finally{if(m)throw p}}t.setData({cardData:n}),wx.setNavigationBarTitle({title:n.title}),t.countShopCart()}else 99999==s.retcode?r.doAuthor():(r.logger(o.default.THEME_SHOW,{level:10206===s.retcode?4:3,message:e.data.msg||"获取主题列表失败",request:Object.assign(a,{sign:i}),response:e}),wx.navigateTo({url:"../error/error?api=themeShow&code="+e.data.retcode}))},complete:function(){wx.hideLoading()}})},onLoad:function(e){console.log(e);var t=this;if(e.theme_id){console.log("app.globalData",r.globalData),this.setData({isIpx:r.globalData.isIpx}),r.globalData.channel=e.channel||r.globalData.channel||"",r.globalData.cover_url&&(e.cover_url=r.globalData.cover_url,r.globalData.cover_url=null);var a={themeId:e.theme_id,sceneId:r.globalData.sceneId};if(e.closeType&&(a.closeType=1),e.collect_index)a.collectInfo=r.globalData.collectInfo,a.scrollToView="card_".concat(e.collect_index),a.selectedCardNum=e.collect_index,r.globalData.collectInfo=null,wx.hideShareMenu();else if(e.cover_url){a.customInfo={cover_path:decodeURIComponent(e.cover_url),cover_id:e.cover_id};var o=r.globalData.diyInfo.collect;o&&o.cover_path==decodeURIComponent(e.cover_url)&&o.cover_id==e.cover_id&&(a.customInfo.favorite_id=o.favorite_id,a.customInfo.is_favorite=1),a.isCustomCover="1"}else a.sceneId=e.scene?e.scene:"default",a.isCustomCover="0";r.doTracking("actPv",JSON.stringify({page_path:"/pages/cardDetail",channel:r.globalData.channel,scene:a.sceneId}),Math.floor(Date.now()/1e3)),this.setData(a),wx.checkSession({success:function(){wx.getStorageSync("oid")?t.themeInit(wx.getStorageSync("oid")):r.doAuthor().then(function(e){var a=e.oid;t.themeInit(a),r.setVisitId()})},fail:function(){r.doAuthor().then(function(e){var a=e.oid;t.themeInit(a),r.setVisitId()})}})}else wx.navigateTo({url:"../error/error?msg=noCardIdInCardDetailPage"})},countShopCart:function(){var e=0,t=0,a=!0,o=!1,i=void 0;try{for(var s,r=this.data.cardData.goods_list[Symbol.iterator]();!(a=(s=r.next()).done);a=!0){var n=s.value;e+=n.num,t+=n.num*n.price*100}}catch(e){o=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(o)throw i}}this.setData({shopcartNum:e,shopcartPrice:(t/100).toFixed(2)})},cardTimeout:null,changeCard:function(e){var t=this;clearTimeout(this.cardTimeout);var a="left"==e.currentTarget.dataset.type?-1:1,o=parseInt(this.data.selectedCardNum)+a,i=this.data.collectInfo.length-1;o=o<0?i:o>i?0:o,this.setData({selectedCardNum:o}),r.doTracking("actChange",JSON.stringify({cover_id:this.data.collectInfo[o].cover_id}),Math.floor(Date.now()/1e3)),this.cardTimeout=setTimeout(function(){t.setData({scrollToView:"card_".concat(o)})},300)},selected:function(e){var t=e.currentTarget.dataset;this.setData({selectedCardNum:t.key}),r.doTracking("3"==this.data.cardData.theme_type?"actChange":"actSwitchCard",JSON.stringify({cover_id:t.item.cover_id||t.item.id}),Math.floor(Date.now()/1e3))},toggleBottomPopup:function(e){var t=e.currentTarget.dataset;if(null!=t.ind){var a=this.data.cardData.goods_list[t.ind];r.doTracking("actDetail",JSON.stringify({item_id:a.id}),Math.floor(Date.now()/1e3)),this.setData({popupGood:a})}else this.setData({popupGood:null});this.setData({showBottomPopup:!this.data.showBottomPopup})},changeGoodNum:function(e){var t=e.currentTarget.dataset;if("minus"===t.type)this.data.cardData.goods_list[t.ind].num--;else{if(this.data.shopcartNum>98)return void wx.showModal({title:"",showCancel:!1,content:"购买数量超过上限99张券"});this.data.cardData.goods_list[t.ind].num++}this.countShopCart(),this.setData({cardData:this.data.cardData})},changeGoodNumSelf:function(e){var t=this.data.cardData.goods_list;for(var a in t)t[a].num=0;console.log(t);var o=e.currentTarget.dataset;this.data.cardData.goods_list[o.ind].num++,this.countShopCart(),this.setData({cardData:this.data.cardData})},gotoPrivacy:function(){wx.navigateTo({url:"../privacy/privacy"})},gotoTerms:function(){wx.navigateTo({url:"../terms/terms"})},gotoStore:function(){wx.navigateTo({url:"../store/store"})},goodNumBlur:function(e){var t=e.currentTarget.dataset.ind;if(""===e.detail.value||0==e.detail.value||"00"==e.detail.value)this.data.cardData.goods_list[t].num=0;else{var o=0,i=!0,s=!1,r=void 0;try{for(var n,l=this.data.cardData.goods_list.entries()[Symbol.iterator]();!(i=(n=l.next()).done);i=!0){var c=(0,a.default)(n.value,2),d=c[0],u=c[1];o+=d==t?parseInt(e.detail.value):u.num}}catch(e){s=!0,r=e}finally{try{i||null==l.return||l.return()}finally{if(s)throw r}}this.data.cardData.goods_list[t].num=o>99?e.detail.value-(o-99):parseInt(e.detail.value)}this.countShopCart(),this.setData({cardData:this.data.cardData})},loginError:function(){wx.hideLoading(),this.setData({buyClicked:!1}),r.doAuthor(),wx.showModal({title:"提示",content:"您的操作超时，请点击购买重试",showCancel:!1})},buy:function(e){var t=this,a=this;this.data.buyClicked||(r.sendFormId("mock formid","pay",1),r.logger("getUserInfo",{level:4,message:"记录用户微信授权行为",response:e.detail}),e.detail.errMsg.match(/^getUserInfo:fail auth (?:deny|cancel)/)?wx.showModal({title:"提示",content:"为了不影响您的购物体验，请允许授权",showCancel:!1}):(wx.showLoading({mask:!0}),this.setData({buyClicked:!0}),r.globalData.userInfo=e.detail.userInfo,wx.setStorageSync("userInfo",e.detail.userInfo),s.default.reinit({user:e.detail.userInfo}),wx.checkSession({success:function(){if(!wx.getStorageSync("unionId"))return wx.getStorageSync("ticket")?void r.getUnionId(e.detail.encryptedData,e.detail.iv,wx.getStorageSync("ticket")).then(function(e){a.doBuy(e)},function(){wx.hideLoading(),t.setData({buyClicked:!1})}):t.loginError();a.doBuy()},fail:function(e){t.loginError(),r.logger("checkSession",{level:3,message:"buy:session已过期",response:e})}})))},doBuy:function(e){var t=this;console.log("调用了doBuy方法");var a=[],i=[],s=this,n=!0,l=!1,c=void 0;try{for(var d,u=this.data.cardData.goods_list[Symbol.iterator]();!(n=(d=u.next()).done);n=!0){var g=d.value;g.num>0&&(a.push(g.id),i.push(g.num))}}catch(e){l=!0,c=e}finally{try{n||null==u.return||u.return()}finally{if(l)throw c}}var f=wx.getStorageSync("unionId")||e;if(console.log(f),!f)return console.log("unionId 为空"),console.log(f),void r.logger("doBuy",{level:3,message:"unionId 为空"});var h="",m={},p=null;if(1!=s.data.cardData.theme_type){var v=this.data.collectInfo?this.data.collectInfo[this.data.selectedCardNum]:{};console.log(this.data.collectInfo,"collectInfo"),(h=s.data.customInfo?s.data.customInfo.cover_id:v.cover_id)||(h=this.data.cardData.cover_list[this.data.selectedCardNum].id),m={unionid:wx.getStorageSync("unionId"),open_id:wx.getStorageSync("oid"),cover_id:h,goods_ids:a,quantities:i,scene:r.globalData.sceneId,for_self:s.data.for_self,is_custom_cover:s.data.isCustomCover||v.is_custom||0,theme_id:s.data.themeId,cover_url:s.data.customInfo?s.data.customInfo.cover_path:v.cover_path||"",channel:r.globalData.channel||""},console.log("line 692 do buy",m),p=r.getSignurature(m)}else h=this.data.cardData.cover_list[this.data.selectedCardNum].id,m={unionid:wx.getStorageSync("unionId"),open_id:wx.getStorageSync("oid"),cover_id:h,goods_ids:a,quantities:i,scene:r.globalData.sceneId,for_self:s.data.for_self,is_custom_cover:s.data.isCustomCover,theme_id:s.data.themeId,channel:r.globalData.channel||""},console.log("line 709 do buy",m),p=r.getSignurature(m);wx.request({url:o.default.ORDER_PRECREATE,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:Object.assign(m,{sign:p}),success:function(e){200==e.data.retcode?t.requestPayment(e):10001==e.data.retcode?(wx.showModal({title:"",showCancel:!1,content:"操作频繁，请5分钟后重新下单"}),r.logger(o.default.ORDER_PRECREATE,{level:4,message:"retcode:10001, 操作频繁，请5分钟后重新下单"})):10021==e.data.retcode?(wx.showModal({title:"",showCancel:!1,content:"订单金额不能超过9999元"}),r.logger(o.default.ORDER_PRECREATE,{level:4,message:"retcode:10021, 订单金额不能超过9999元"})):10002==e.data.retcode?(wx.showModal({title:"",showCancel:!1,content:"礼品卡库存不足"}),r.logger(o.default.ORDER_PRECREATE,{level:4,message:"retcode:10002, 礼品卡库存不足"})):99999==e.data.retcode?(r.logger(o.default.ORDER_PRECREATE,{level:4,message:"retcode:99999, 需要登录"}),r.doAuthor().then(function(){s.doBuy()})):(r.logger(o.default.ORDER_PRECREATE,{level:3,message:e.data.msg||"创建预支付订单失败",request:Object.assign(m,{sign:p}),response:e}),wx.navigateTo({url:"../error/error?api=precreate&code="+e.data.retcode}))},fail:function(e){r.logger(o.default.ORDER_PRECREATE,{level:4,message:"fail: 网络链接失败"})},complete:function(){wx.hideLoading(),s.setData({buyClicked:!1})}})},requestPayment:function(e){var t=this,a=e.data.data.package,i=e.data.data.order_id;wx.requestPayment({timeStamp:a.timeStamp,nonceStr:a.nonceStr,package:a.package,signType:"MD5",paySign:a.paySign,success:function(e){if(console.log(e),1==t.data.isSelfGifting){var a={open_id:wx.getStorageSync("oid"),order_id:i},s=r.getSignurature(a);wx.request({url:o.default.ORDER_GET_CODE,header:{"content-type":"application/x-www-form-urlencoded"},data:Object.assign(a,{sign:s}),method:"POST",success:function(e){if(e&&e.data&&200!==e.data.retcode&&r.logger(o.default.ORDER_GET_CODE,{level:3,message:e.data.msg||"获取卡密失败",request:Object.assign(a,{sign:s}),response:e}),e.statusCode&&200!==e.statusCode){r.logger(o.default.ORDER_GET_CODE,{level:3,message:"try again"});var n={open_id:wx.getStorageSync("oid"),order_id:i},l=r.getSignurature(n);wx.request({url:o.default.ORDER_GET_CODE,header:{"content-type":"application/x-www-form-urlencoded"},data:Object.assign(n,{sign:l}),method:"POST",success:function(e){console.log("------------ start Inner order_get_code --------------"),console.log(e),t.requestPaymentFinish(e,i),console.log("------------ end Inner order_get_code --------------"),e&&e.data&&200!==e.data.retcode&&r.logger(o.default.ORDER_GET_CODE,{level:3,message:e.data.msg||"重新获取卡密失败",request:Object.assign(n,{sign:l}),response:e})},fail:function(e){e&&(r.logger(o.default.ORDER_GET_CODE,{level:3,message:"网络原因导致重新获取卡密失败",response:e}),r.goToOrders())}})}else t.requestPaymentFinish(e,i)},fail:function(e){e&&(r.logger(o.default.ORDER_GET_CODE,{level:3,message:"网络原因导致获取卡密失败",response:e}),r.goToOrders())}})}else r.showFriendsList(i)},fail:function(a){/requestPayment:fail[ :]cancel/.test(a.errMsg)?r.logger("wx.requestPayment",{level:4,message:"用户取消支付",response:a}):(r.logger("wx.requestPayment",{level:3,message:"网络原因导致支付失败",response:a}),0===t.requestPaymentCount?(t.requestPaymentCount=1,t.requestPayment(e)):wx.showToast("网络超时，请稍后重试"))},complete:function(e){}})},requestPaymentFinish:function(e,t){var a=JSON.stringify(e.data.data),s=o.default.CRYPTO_SECRET,n=i.default.CryptoJS.AES.decrypt(a,s,{format:i.default.CryptoJSAesJson}).toString(i.default.CryptoJS.enc.Utf8),l=JSON.parse(n)[0].cardId,c=JSON.parse(n)[0].cardExt,d=wx.getStorageSync("oid"),u=c.indexOf("}");JSON.parse(n)[0].code;c=c.splice(u+1,',"openId":""}'),console.log(c),console.log("wx addCard: \t "),wx.addCard({cardList:[{cardId:l,cardExt:c}],success:function(e){console.log("res: \t"),console.log(e);var a=[{cardId:e.cardList[0].cardId,cardExt:e.cardList[0].code,isSuccess:e.cardList[0].isSuccess}],o=i.default.CryptoJS.AES.encrypt(JSON.stringify(a),s,{format:i.default.CryptoJSAesJson}).toString();console.log(encodeURIComponent(o)),o=encodeURIComponent(o),r.logAddCard(t,"ok",o),r.gotoUserRegH5(l,d,e.cardList[0].code)},fail:function(e){r.logAddCard(t,"fail",JSON.stringify(e))},complete:function(e){}})},collectTips:{timeout:null,againParams:{}},collectFail:function(e,t){this.collectTips.againParams=e,this.setData({tipsData:Object.assign({show:2,again:!0,collectType:e.collectType})}),r.doTracking(t,JSON.stringify({cover_id:e.query.cover_id,status:0}),Math.floor(Date.now()/1e3)),this.closeTips()},collectAgain:function(){this.collectUpdate(this.collectTips.againParams,!0)},closeTips:function(){var e=this;clearTimeout(this.collectTips.timeout),this.collectTips.timeout=setTimeout(function(){e.setData({"tipsData.show":1})},2e3)},clickType:!1,clickTimeout:null,collectUpdate:function(e,a){var i=this;if(!this.clickType){this.clickType=!0,wx.showLoading({mask:!0});var s=e.query,n=e.collectType,l=e.index;this.collectTips.againParams={};var c=r.getSignurature(s),d=a?1==n?"actCancellAgain":"actCollectAgain":1==n?"actCancellCollect":"actCollect",u=o.default[0==n?"ADD_FAVORITE":"UPDATE_FAVORITE"];wx.request({url:u,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:Object.assign(s,{sign:c}),success:function(e){if(21009==e.data.retcode)return r.doTracking(d,JSON.stringify({cover_id:s.cover_id,status:0}),Math.floor(Date.now()/1e3)),i.setData({maxTips:2}),void r.logger(u,{level:4,message:"retcode: 21009, 收藏卡面达到上限"});if(200!=e.data.retcode)return i.collectFail({query:s,collectType:n,index:l},d),void r.logger(u,{level:3,message:e.data.msg||"收藏/更新收藏卡面失败",request:Object.assign(params,{sign:c}),response:e});var a=e.data.data,o={tipsData:Object.assign({show:2,collectType:n,again:!1})};if(i.data.collectInfo)o=Object.assign((0,t.default)({},"collectInfo[".concat(l,"].status"),a.status),o);else if(i.data.customInfo){var g;o=Object.assign((g={},(0,t.default)(g,"customInfo.favorite_id",a.id),(0,t.default)(g,"customInfo.is_favorite",a.status),g),o),r.globalData.diyInfo.collect=a.status?{cover_path:i.data.customInfo.cover_path,cover_id:i.data.customInfo.cover_id,favorite_id:a.id}:null}else{var f;o=Object.assign((f={},(0,t.default)(f,"cardData.cover_list[".concat(l,"].favorite_id"),a.id),(0,t.default)(f,"cardData.cover_list[".concat(l,"].is_favorite"),a.status),f),o)}r.doTracking(d,JSON.stringify({cover_id:s.cover_id,status:1}),Math.floor(Date.now()/1e3)),i.setData(o),i.closeTips()},fail:function(e){i.collectFail({query:s,collectType:n,index:l},d)},complete:function(){wx.hideLoading(),clearTimeout(i.clickTimeout),i.clickTimeout=setTimeout(function(){i.clickType=!1},500)}})}},collectControl:function(e){var t=e.currentTarget.dataset;if(this.data.isSpecil||"cover"!=t.type){var a="cover"==t.type?t.index:this.data.selectedCardNum,o={open_id:wx.getStorageSync("oid"),cover_id:t.item.cover_id||t.item.id,cover_path:t.item.cover_path||t.item.image,cover_theme_name:this.data.collectInfo?t.item.cover_theme_name:this.data.cardData.title,is_custom:this.data.collectInfo?t.item.is_custom:this.data.isCustomCover},i=0;(t.item.favorite_id||this.data.collectInfo)&&(o.id=t.item.favorite_id||t.item.id,o.status=t.item.is_favorite||t.item.status?0:1,i=t.item.is_favorite||t.item.status?1:2),this.collectUpdate({query:o,index:a,collectType:i})}},closeMaxTips:function(){this.setData({maxTips:1})}})); 
 			}); 	require("pages/cardDetail/cardDetail.js");
 		__wxRoute = 'pages/order/order';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/order/order.js';	define("pages/order/order.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),t=e(require("../../@babel/runtime/helpers/defineProperty")),a=e(require("vs-logger")),r=e(require("../../547BC8221C91398C321DA02558497AF5.js")),o=e(require("../../2A9BA8A51C91398C4CFDC0A241697AF5.js")),s=getApp();Page(a.default.Page({data:{orders:[],isIpx:null,noOrders:!1,isHideLoadMore:0,btnClick:!1,showTipImg:null,reset:!1},getOrders:function(e){wx.showLoading();var t=this,a=t.data.orders;s.logger("getOrders",{level:4,message:"currentOrders value",response:a});var o=0==a.length?0:a[a.length-1].id,d={open_id:e||wx.getStorageSync("oid"),last_id:o},n=s.getSignurature(d),i=0;wx.request({url:r.default.ORDER_LIST,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:Object.assign(d,{sign:n}),success:function(e){if(console.log(e,"ccccc"),200==e.data.retcode){var a=e.data.data.order_list;if(e.data.data.showTipImg&&t.setData({showTipImg:e.data.data.showTipImg}),a.length>0){var o=!0,c=!1,l=void 0;try{for(var g,u=a[Symbol.iterator]();!(o=(g=u.next()).done);o=!0){var f=g.value;f.total_price=(f.total_price/100).toFixed(2)}}catch(e){c=!0,l=e}finally{try{o||null==u.return||u.return()}finally{if(c)throw l}}}else i=2;t.setData({orders:t.data.orders.concat(a)}),0==t.data.orders.length&&t.setData({noOrders:!0})}else 99999==e.data.retcode?s.doAuthor().then(function(e){t.getOrders(e.oid)}):(s.logger(r.default.ORDER_LIST,{level:3,message:e.data.msg||"获取订单列表失败",request:Object.assign(d,{sign:n}),response:e}),wx.navigateTo({url:"../error/error?api=orderList&code="+e.data.retcode}))},complete:function(){wx.hideLoading(),t.setData({isHideLoadMore:i})}})},onLoad:function(e){wx.hideShareMenu(),this.setData({isIpx:s.globalData.isIpx}),this.getOrders(),s.doTracking("actPv",JSON.stringify({page_path:"/pages/order",channel:s.globalData.channel,scene:s.globalData.sceneId}),Math.floor(Date.now()/1e3))},onShow:function(){this.data.reset&&(this.setData({orders:[],reset:!1}),this.getOrders())},onHide:function(){s.doTracking("actHang",JSON.stringify({page_path:"/pages/order"}),Math.floor(Date.now()/1e3))},goDetail:function(e){var t=e.currentTarget.dataset.id;wx.navigateTo({url:"../orderDetail/orderDetail?orderId="+t})},onReachBottom:function(){0==this.data.isHideLoadMore&&(this.setData({isHideLoadMore:1}),this.getOrders())},goGifting:function(e){var t=this;0==t.data.btnClick&&t.setData({btnClick:!0}),this.setData({reset:!0}),s.showFriendsList(e.currentTarget.dataset.id),t.setData({btnClick:!1})},goSelfGifting:function(e){var a=this;0==a.data.btnClick&&a.setData({btnClick:!0});var d=e.currentTarget.dataset.id,n=e.currentTarget.dataset.index,i={open_id:wx.getStorageSync("oid"),order_id:d},c=s.getSignurature(i);wx.showLoading(),wx.request({url:r.default.ORDER_GET_CODE,header:{"content-type":"application/x-www-form-urlencoded"},data:Object.assign(i,{sign:c}),method:"POST",success:function(e){if(200!=e.data.retcode)wx.hideLoading(),wx.showModal({showCancel:!1,content:"领取失败，请重试！"}),s.logger(r.default.ORDER_GET_CODE,{level:3,message:e.data.msg||"获取卡密失败",request:Object.assign(i,{sign:c}),response:e});else{var l=JSON.stringify(e.data.data),g=r.default.CRYPTO_SECRET,u=o.default.CryptoJS.AES.decrypt(l,g,{format:o.default.CryptoJSAesJson}).toString(o.default.CryptoJS.enc.Utf8),f=JSON.parse(u)[0].cardId,h=JSON.parse(u)[0].cardExt;console.log("cardId"),console.log(f),console.log("cardExt"),console.log(h);var p=wx.getStorageSync("oid"),w=h.indexOf("}");h=h.splice(w+1,',"openId":""}'),console.log(h),console.log("wx addCard: \t "),wx.hideLoading(),wx.addCard({cardList:[{cardId:f,cardExt:h}],success:function(e){console.log("res: \t"),console.log(e);var r=[{cardId:e.cardList[0].cardId,cardExt:e.cardList[0].code,isSuccess:e.cardList[0].isSuccess}],i=o.default.CryptoJS.AES.encrypt(JSON.stringify(r),g,{format:o.default.CryptoJSAesJson}).toString();console.log(encodeURIComponent(i)),i=encodeURIComponent(i),s.logAddCard(d,"ok",i),a.setData((0,t.default)({},"orders[".concat(n,"].status"),2)),s.gotoUserRegH5(f,p,e.cardList[0].code)},fail:function(e){s.logAddCard(d,"fail",JSON.stringify(e))},complete:function(e){a.setData({btnClick:!1})}})}},fail:function(e){wx.hideLoading(),wx.showModal({showCancel:!1,content:"网络超时，请重试！"}),s.logger(r.default.ORDER_GET_CODE,{level:3,message:"网络超时",response:e})}})}})); 
 			}); 	require("pages/order/order.js");
 		__wxRoute = 'pages/orderDetail/orderDetail';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/orderDetail/orderDetail.js';	define("pages/orderDetail/orderDetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),t=e(require("../../547BC8221C91398C321DA02558497AF5.js")),a=e(require("../../2A9BA8A51C91398C4CFDC0A241697AF5.js")),o=e(require("vs-logger")),r=getApp();Page(o.default.Page({data:{isIpx:null,order:null,isIOS:!0,center:!1,btnClick:!1,showAll:!1},localData:{SDKVersion:""},getInvoice:function(e){var t=wx.getStorageSync("unionId");if(t){if(!this.compareSDKVersion())return;this.gotoInvoice(t)}else this.showAuthPopup()},getRefund:function(e){this.compareSDKVersion()&&this.gotoRefund()},showAuthPopup:function(){this.setData({showAuthPopup:!0})},handleAuth:function(e){this.gotoInvoice(e.detail)},gotoInvoice:function(e){var a={union_id:e,order_id:this.data.order.order_detail.order_id},o=r.getSignurature(a);wx.request({url:t.default.NEW_INVOICE,header:{"content-type":"application/json"},method:"GET",data:Object.assign(a,{sign:o}),success:function(e){var n=e.data.retcode;if(200===n){var i=e.data.data;"OK"==i.type?wx.navigateTo({url:"../invoice/apply/apply?invoiceData="+encodeURIComponent(JSON.stringify(i))}):wx.navigateTo({url:"../invoice/status/status?type="+i.type+"&orderId="+i.order_id})}else 3010===n?wx.showModal({title:"提醒",content:e.data.msg,showCancel:!1}):(r.logger(t.default.NEW_INVOICE,{level:3,message:e.data.msg||"申请发票失败",request:Object.assign(a,{sign:o}),response:e}),wx.navigateTo({url:"/pages/error/error?api=newInvoice&code=".concat(n,"&msg=").concat(e.data.msg)}))}})},gotoRefund:function(){var e=this,a=this.data.order.order_detail.order_id,o={open_id:wx.getStorageSync("oid"),order_id:a},n=r.getSignurature(o);wx.request({url:t.default.REFUND_APPLY,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:Object.assign(o,{sign:n}),success:function(i){if(200===i.data.retcode){var s=i.data.data;if(4===s.refund_status)wx.navigateTo({url:"../refund/refundApplication/refundApplication?refundData="+encodeURIComponent(JSON.stringify(s))});else{var d=s.is_share?"&refundId="+s.refund_id+"&orderId="+a+"&shareTitle="+s.share_title+"&shareImg="+encodeURIComponent(s.share_img):"";wx.navigateTo({url:"../refund/refundResult/refundResult?type="+s.refund_status+d})}}else 99999===i.data.retcode?r.doAuthor().then(function(){e.gotoRefund()}):(r.logger(t.default.REFUND_APPLY,{level:3,message:i.data.msg||"退款申请失败",request:Object.assign(o,{sign:n}),response:i}),wx.navigateTo({url:"../error/error?api=refundApply&code="+i.data.retcode}))}})},toggleCodes:function(){this.setData({showAll:!this.data.showAll})},goGifting:function(e){var t=this;0==t.data.btnClick&&t.setData({btnClick:!0}),r.showFriendsList(e.currentTarget.dataset.id),t.setData({btnClick:!1})},goSelfGifting:function(e){var o=this;0==o.data.btnClick&&o.setData({btnClick:!0});var n=e.currentTarget.dataset.id,i={open_id:wx.getStorageSync("oid"),order_id:n},s=r.getSignurature(i);wx.request({url:t.default.ORDER_GET_CODE,header:{"content-type":"application/x-www-form-urlencoded"},data:Object.assign(i,{sign:s}),method:"POST",success:function(e){if(200!==e.data.retcode&&r.logger(t.default.ORDER_GET_CODE,{level:3,message:e.data.msg||"获取卡密失败",request:Object.assign(i,{sign:s}),response:e}),""==e){var d={open_id:wx.getStorageSync("oid"),order_id:n},c=r.getSignurature(d);wx.request({url:t.default.ORDER_GET_CODE,header:{"content-type":"application/x-www-form-urlencoded"},data:Object.assign(d,{sign:c}),method:"POST",success:function(e){200!==e.data.retcode&&r.logger(t.default.ORDER_GET_CODE,{level:3,message:e.data.msg||"重新获取卡密失败",request:Object.assign(d,{sign:c}),response:e})},fail:function(e){e&&r.goToOrders()}})}else{var l=JSON.stringify(e.data.data),g=t.default.CRYPTO_SECRET,u=a.default.CryptoJS.AES.decrypt(l,g,{format:a.default.CryptoJSAesJson}).toString(a.default.CryptoJS.enc.Utf8),f=JSON.parse(u)[0].cardId,p=JSON.parse(u)[0].cardExt,h=wx.getStorageSync("oid"),S=p.indexOf("}");p=p.splice(S+1,',"openId":""}'),console.log(p),console.log("wx addCard: \t "),wx.addCard({cardList:[{cardId:f,cardExt:p}],success:function(e){console.log("res: \t"),console.log(e);var t=[{cardId:e.cardList[0].cardId,cardExt:e.cardList[0].code,isSuccess:e.cardList[0].isSuccess}],o=a.default.CryptoJS.AES.encrypt(JSON.stringify(t),g,{format:a.default.CryptoJSAesJson}).toString();console.log(encodeURIComponent(o)),o=encodeURIComponent(o),r.logAddCard(n,"ok",o),r.gotoUserRegH5(f,h,e.cardList[0].code)},fail:function(e){r.logAddCard(n,"fail",JSON.stringify(e)),r.goToOrders()},complete:function(e){console.log("from complete: \t"),console.log(e),o.setData({btnClick:!1})}})}}})},onLoad:function(e){var a=this;wx.showLoading(),this.localData.SDKVersion=r.globalData.sysinfo.SDKVersion,this.setData({isIpx:r.globalData.isIpx}),this.getOpenid(function(o){a.setData({isIOS:wx.getSystemInfoSync().system.indexOf("iOS")>-1});var n=e.orderId,i=a,s={open_id:o,order_id:n},d=r.getSignurature(s);wx.request({url:t.default.ORDER_DETAIL,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:Object.assign(s,{sign:d}),success:function(e){console.log(e.data);var a=e.data.data;if(200==e.data.retcode){var o=a.order_detail.for_self,n=a.order_detail.status;a.code_list[0].accepter_openid;"1"==o&&"1"==n?i.setData({center:!0}):i.setData({center:!1}),a.order_detail.total_price=(a.order_detail.total_price/100).toFixed(2);var c=!0,l=!1,g=void 0;try{for(var u,f=a.code_list[Symbol.iterator]();!(c=(u=f.next()).done);c=!0){var p=u.value;p.price=(p.price/100).toFixed(2)}}catch(e){l=!0,g=e}finally{try{c||null==f.return||f.return()}finally{if(l)throw g}}a.order_detail.for_self,i.setData({order:a}),r.doTracking("actPv",JSON.stringify({page_path:"/pages/orderDetail",channel:r.globalData.channel,scene:r.globalData.sceneId}),Math.floor(Date.now()/1e3))}else r.logger(t.default.ORDER_DETAIL,{level:3,message:e.data.msg||"获取订单详情失败",request:Object.assign(s,{sign:d}),response:e}),wx.navigateTo({url:"../error/error?api=orderdetail&code="+e.data.retcode});wx.hideLoading()},fail:function(e){r.logger(t.default.ORDER_DETAIL,{level:3,message:e.errMsg||"获取订单详情失败",request:Object.assign(s,{sign:d}),response:e}),wx.navigateTo({url:"../error/error?api=orderdetail&message="+e.errMsg}),wx.hideLoading()}})})},getOpenid:function(e){var t=wx.getStorageSync("oid");if(t)return e(t);r.doAuthor().then(function(t){var a=t.oid;e(a)})},onHide:function(){r.doTracking("actHang",JSON.stringify({page_path:"/pages/orderDetail"}),Math.floor(Date.now()/1e3))},compareSDKVersion:function(){return!(!wx.getStorageSync("showVersion")&&r.compareVersions(this.localData.SDKVersion,"<","2.8.2"))||(wx.showModal({content:"由于微信功能更新，请将您的微信客户端升级至最新版本，避免影响您接收退款及开票进度通知。",confirmText:"知道了",showCancel:!1}),wx.setStorageSync("showVersion",!0),!1)}})); 
 			}); 	require("pages/orderDetail/orderDetail.js");
 		__wxRoute = 'pages/terms/terms';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/terms/terms.js';	define("pages/terms/terms.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../@babel/runtime/helpers/interopRequireDefault")(require("vs-logger")),a=getApp();Page(t.default.Page({data:{links:["https://www.starbucks.com.cn/cn/help/terms/giftcard","https://www.starbucks.com.cn/cn/help/faq/starbucks-gift-card/my-starbucks-giftcard","https://www.starbucks.com.cn/cn/help/terms/msr","https://www.starbucks.com.cn/cn/help/special-provisions-for-starbucks-social-gifting-platform","https://www.starbucks.com.cn/cn/help/faq/starbucks-gift-card"]},goH5:function(t){wx.navigateTo({url:"../h5/h5?url="+this.data.links[t.currentTarget.dataset.linkid]})},onLoad:function(t){wx.hideShareMenu(),a.doTracking("actPv",JSON.stringify({page_path:"/pages/terms",channel:a.globalData.channel,scene:a.globalData.sceneId}),Math.floor(Date.now()/1e3))},onHide:function(){a.doTracking("actHang",JSON.stringify({page_path:"/pages/terms"}),Math.floor(Date.now()/1e3))}})); 
 			}); 	require("pages/terms/terms.js");
 		__wxRoute = 'pages/error/error';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/error/error.js';	define("pages/error/error.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault")(require("vs-logger")),a=getApp();Page(e.default.Page({data:{error:{msg:"",api:"",code:""}},onLoad:function(e){this.setData({error:e}),a.doTracking("actPv",JSON.stringify({page_path:"/pages/error",channel:a.globalData.channel,scene:a.globalData.sceneId}),Math.floor(Date.now()/1e3)),a.logger("showErrorPage",{level:4,message:"显示错误提示页",response:e})},onHide:function(){a.doTracking("actHang",JSON.stringify({page_path:"/pages/error"}),Math.floor(Date.now()/1e3))},onShareAppMessage:function(){a.doTracking("actShare",JSON.stringify({page_path:"/pages/error"}),Math.floor(Date.now()/1e3))},back:function(){wx.reLaunch({url:"/pages/index/index"})}})); 
 			}); 	require("pages/error/error.js");
 		__wxRoute = 'pages/store/store';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/store/store.js';	define("pages/store/store.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),a=e(require("vs-logger")),t=e(require("../../547BC8221C91398C321DA02558497AF5.js")),r=getApp();Page(a.default.Page({data:{stores:null},openMap:function(e){var a=e.currentTarget.dataset.store;wx.openLocation({latitude:Number(a.latitude),longitude:Number(a.longitude),name:a.branch_name,address:a.address,scale:28})},onLoad:function(e){var a=this;wx.getLocation({type:"wgs84",success:function(e){var n={longitude:e.longitude,latitude:e.latitude,open_id:wx.getStorageSync("oid")},o=r.getSignurature(n);wx.request({url:t.default.NEARBY_LIST,header:{"content-type":"application/x-www-form-urlencoded"},data:Object.assign(n,{sign:o}),method:"POST",success:function(e){var s=e.data;200==s.retcode?a.setData({stores:s.data}):(r.logger(t.default.NEARBY_LIST,{level:10502===s.retcode?4:3,message:e.data.msg||"获取附近门店失败",request:Object.assign(n,{sign:o}),response:e}),wx.navigateTo({url:"../error/error?api=nearbylist&code="+e.data.retcode}))}})}}),r.doTracking("actPv",JSON.stringify({page_path:"/pages/store",channel:r.globalData.channel,scene:r.globalData.sceneId}),Math.floor(Date.now()/1e3))},onHide:function(){r.doTracking("actHang",JSON.stringify({page_path:"/pages/store"}),Math.floor(Date.now()/1e3))},onShareAppMessage:function(){r.doTracking("actShare",JSON.stringify({page_path:"/pages/store"}),Math.floor(Date.now()/1e3))}})); 
 			}); 	require("pages/store/store.js");
 		__wxRoute = 'pages/invoice/status/status';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/invoice/status/status.js';	define("pages/invoice/status/status.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireDefault"),t=e(require("../../../547BC8221C91398C321DA02558497AF5.js")),a=e(require("vs-logger")),n=getApp();Page(a.default.Page({data:{number:"400-820-6998",status:[{type:"End",title:"开票完成",content:"订单发票已发至预留邮箱，如有疑问请拨打星巴克顾客服务电话400-820-6998，由专人协助您解决问题。"},{type:"Ing",title:"开票处理中",content:"客服会在1个工作日内确认完成，如有疑问请拨打星巴克顾客服务电话400-820-6998，由专人协助您解决问题。请关注“星巴克中国”公众号，获取开票申请成功进度通知。"},{type:"NoWay",title:"开票被驳回",content:"很抱歉，您的开票已被驳回。"},{type:"ERROR",title:"错误",content:"很抱歉，您的退款入口错误。"},{type:"RefundEnd",title:"订单退款成功",content:"很抱歉，您的订单已退款成功，不能申请发票。"},{type:"RefundIng",title:"订单退款中",content:"您订单正在申请退款，不能申请发票。如想取消退款申请或有疑问，请拨打星巴克顾客服务电话400-820-6998，由专人协助您解决问题。"}],showDetail:!1,currentStatus:{},invoiceData:null,orderId:"",isOldOrder:!1},onLoad:function(e){wx.hideShareMenu();var t=e.type;"Ing"==t&&this.setData({orderId:e.orderId});var a=this.data.status.find(function(e){return e.type==t});this.setData({currentStatus:a}),n.doTracking("actPv",JSON.stringify({page_path:"/pages/invoice/status",channel:n.globalData.channel,scene:n.globalData.sceneId}),Math.floor(Date.now()/1e3))},onHide:function(){n.doTracking("actHang",JSON.stringify({page_path:"/pages/invoice/status"}),Math.floor(Date.now()/1e3))},makeCallTap:function(e){wx.makePhoneCall({phoneNumber:this.data.number})},showDetailTap:function(){var e=this;if(e.data.invoiceData)e.setData({showDetail:!0});else{var a={union_id:wx.getStorageSync("unionId"),order_id:e.data.orderId},i=n.getSignurature(a);wx.request({url:t.default.INVOICE_INFO,header:{"content-type":"application/json"},method:"GET",data:Object.assign(a,{sign:i}),success:function(r){200==r.data.retcode?e.setData({invoiceData:r.data.data,showDetail:!0,isOldOrder:!n.commonRegex().checkAllNum(r.data.data.order_id)}):(n.logger(t.default.INVOICE_INFO,{level:3,message:r.data.msg||"获取发票信息失败",request:Object.assign(a,{sign:i}),response:r}),wx.redirectTo({url:"../../error/error?api=invoiceinfo&code="+r.data.retcode}))}})}},closeTap:function(){this.setData({showDetail:!1})}})); 
 			}); 	require("pages/invoice/status/status.js");
 		__wxRoute = 'pages/invoice/apply/apply';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/invoice/apply/apply.js';	define("pages/invoice/apply/apply.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireDefault"),t=e(require("../../../@babel/runtime/helpers/defineProperty")),a=e(require("vs-logger")),i=e(require("../../../547BC8221C91398C321DA02558497AF5.js")),o=getApp();Page(a.default.Page({data:{iptPlaceholder:{title:{1:"姓名",2:"单位名称"},dutyNum:{1:"-1",2:"15位或18位"},phone:{1:"个人手机号码",2:"手机号码"},name:{1:"姓名",2:"姓名"},email:{1:"个人联系邮箱",2:"邮箱"}},applyType:"2",selected:{},firstTimeChooseInvoiceTitle:!0,showRule:!1,agree:!1,invoiceData:{},isOldOrder:!1},localData:{subscribeType:"",subscribeInfo:""},getSubscribeInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.localData.subscribeInfo=e.filter(function(e){return"invoice"===e.type})[0],console.log("subscribeInfo:",this.localData.subscribeInfo)},onLoad:function(e){wx.hideShareMenu(),o.globalData.subscribeList?this.getSubscribeInfo(o.globalData.subscribeList):o.getSubscribeList(this.getSubscribeInfo),o.doTracking("actPv",JSON.stringify({page_path:"/pages/invoice/apply",channel:o.globalData.channel,scene:o.globalData.sceneId}),Math.floor(Date.now()/1e3)),e.invoiceData&&this.setData({invoiceData:JSON.parse(decodeURIComponent(e.invoiceData))}),this.setData({isOldOrder:!o.commonRegex().checkAllNum(this.data.invoiceData.order_id)})},onHide:function(){o.doTracking("actHang",JSON.stringify({page_path:"/pages/invoice/apply"}),Math.floor(Date.now()/1e3))},invoiceTitle:function(){var e=this;wx.chooseInvoiceTitle({success:function(t){1==t.type?e.setData({applyType:"1",invoice_title:t.title}):e.setData({applyType:"2",invoice_title:t.title,tax_no:t.taxNumber})},fail:function(t){"fail auth deny"!=t.errMsg.split(":")[1].trim()||e.data.firstTimeChooseInvoiceTitle||wx.showModal({content:"进入设置同意选择抬头",success:function(e){e.confirm&&wx.openSetting()}}),e.setData({firstTimeChooseInvoiceTitle:!1})}})},selectApplyTap:function(e){this.setData({applyType:e.target.dataset.type})},select:function(){this.setData({selected:!this.data.selected})},showRuleTap:function(){this.setData({showRule:!0})},cancelTap:function(){this.setData({showRule:!1,agree:!1})},agreeTap:function(){this.setData({showRule:!1,agree:!0})},toggleAgree:function(){this.setData({agree:!this.data.agree})},showAlert:function(e){wx.showModal({content:e,showCancel:!1})},changeValue:function(e){this.setData((0,t.default)({},e.target.dataset.name,e.detail.value))},invoiceSubmit:function(){var e=this,t=this.data;if(e.data.agree)if(!t.invoice_title||o.getByteLength(t.invoice_title)<2||o.getByteLength(t.invoice_title)>80)e.showAlert("发票抬头请输入2-80位字符");else if("2"!==e.data.applyType||t.tax_no&&o.commonRegex().checkTax(t.tax_no))if(t.receiver_phone&&o.commonRegex().checkMobile(t.receiver_phone))if(!t.receiver_name||o.getByteLength(t.receiver_name)<2||o.getByteLength(t.receiver_name)>20)e.showAlert("收件人姓名请输入2-20位字符");else{if(t.receiver_email&&o.commonRegex().checkEmail(t.receiver_email))return console.log("subscribeType:",this.localData.subscribeType),!0;e.showAlert("请输入正确的电子邮箱地址")}else e.showAlert("请输入11位手机号码");else e.showAlert("请输入正确的税号");else e.showAlert("请阅读并同意发票规定")},addInvoice:function(){var e=this,t=this.data,a={union_id:wx.getStorageSync("unionId"),order_id:e.data.invoiceData.order_id,receiver_name:t.receiver_name,receiver_email:t.receiver_email,receiver_phone:t.receiver_phone,invoice_token:e.data.invoiceData.invoice_token,invoice_title:t.invoice_title,invoice_type:e.data.applyType,tax_no:t.tax_no,subscribe_type:this.localData.subscribeType};console.log("params:",a);var s=o.getSignurature(a);wx.showLoading({mask:!0}),o.doTracking("actFapiao",JSON.stringify({order_id:e.data.invoiceData.order_id,invoice_status:e.data.invoiceData.type,total_price:e.data.invoiceData.invoice_money}),Math.floor(Date.now()/1e3)),wx.request({url:i.default.ADD_NEW_INVOICE,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:Object.assign(a,{sign:s}),success:function(t){if(200==t.data.retcode){var n=t.data.data;wx.navigateToMiniProgram({appId:n.appid,path:n.auth_url,success:function(t){wx.redirectTo({url:"../../invoice/status/status?type=Ing&orderId="+e.data.invoiceData.order_id})},fail:function(e){}})}else 20003==t.data.retcode?e.showAlert("请勿重复开票"):(o.logger(i.default.ADD_NEW_INVOICE,{level:3,message:t.data.msg||"开票失败",request:Object.assign(a,{sign:s}),response:t}),wx.redirectTo({url:"../../error/error?api=addnewinvoice&code="+t.data.retcode}))},complete:function(){wx.hideLoading()}})},showSubscribe:function(){var e=this;this.invoiceSubmit()&&("function"==typeof wx.requestSubscribeMessage&&this.localData.subscribeInfo?(console.log("基础库版本高于2.8.2"),wx.requestSubscribeMessage({tmplIds:[this.localData.subscribeInfo.template_id],success:function(t){console.log("requestSubscribeMessage success:",t),"accept"===t[e.localData.subscribeInfo.template_id]&&(e.localData.subscribeType=e.localData.subscribeInfo.type_id),console.log("subscribeType:",e.localData.subscribeType),e.addInvoice()},fail:function(t){console.log("requestSubscribeMessage fail:",t),e.addInvoice(),o.logger("showSubscribe",{level:3,message:"拉起订阅弹框失败",response:t})}})):this.addInvoice())}})); 
 			}); 	require("pages/invoice/apply/apply.js");
 		__wxRoute = 'pages/refund/errorAuthorize/errorAuthorize';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/refund/errorAuthorize/errorAuthorize.js';	define("pages/refund/errorAuthorize/errorAuthorize.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireDefault"),r=(e(require("../../../547BC8221C91398C321DA02558497AF5.js")),e(require("vs-logger"))),o=getApp();Page(r.default.Page({data:{errorMsg:"",errorApi:"",errorCode:"",showErrorMsg:!1},onLoad:function(e){this.opts=JSON.parse(e.opts),o.doTracking("actPv",JSON.stringify({page_path:"/pages/error",channel:o.globalData.channel,scene:o.globalData.sceneId}),Math.floor(Date.now()/1e3))},onHide:function(){o.doTracking("actHang",JSON.stringify({page_path:"/pages/error"}),Math.floor(Date.now()/1e3))},showError:function(){this.setData({showErrorMsg:!0})},back:function(){wx.redirectTo({url:"../index/index"})},bindGetUserInfo:function(e){var r=this;o.getUserInfo(e,function(){var e=wx.getStorageSync("oid"),o=r.opts,n=o.refundId,a=o.orderId;wx.redirectTo({url:"/pages/refund/refundFriend/refundFriend?refundId=".concat(n,"&orderId=").concat(a,"&openId=").concat(e)})})}})); 
 			}); 	require("pages/refund/errorAuthorize/errorAuthorize.js");
 		__wxRoute = 'pages/refund/refundApplication/refundApplication';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/refund/refundApplication/refundApplication.js';	define("pages/refund/refundApplication/refundApplication.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireDefault"),a=e(require("../../../@babel/runtime/helpers/slicedToArray")),t=e(require("../../../@babel/runtime/helpers/defineProperty")),r=e(require("../../../@babel/runtime/helpers/typeof")),s=e(require("../../../547BC8221C91398C321DA02558497AF5.js")),o=e(require("vs-logger")),n=getApp();Page(o.default.Page({data:{showRule:!1,selectedList:[],selectedListIsEmpty:!0,agree:!1,refundData:{},greaterThanHeight:!1,isChooseCase:!1,isOldOrder:!1,codeType:"self"},localData:{subscribeType:[],subscribeInfo:"",refundSubscribeList:"",refundId:"",codeList:"",codeType:""},checkSelectedList:function(){return this.data.selectedList.every(function(e){return void 0===(0,r.default)(e)})},getSubscribeInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.localData.subscribeInfo=e.filter(function(e){return"refund"===e.type}),console.log("subscribeInfo:",this.localData.subscribeInfo);var a=[];this.localData.subscribeInfo.forEach(function(e){a.push(e.template_id)}),this.localData.refundSubscribeList=a},onLoad:function(e){console.log(e),wx.hideShareMenu(),n.globalData.subscribeList?this.getSubscribeInfo(n.globalData.subscribeList):n.getSubscribeList(this.getSubscribeInfo);var a=JSON.parse(decodeURIComponent(e.refundData));console.log(a),a.allUsed=a.own_code.length&&0===a.own_code.filter(function(e){return"7"!==e.status}).length,a.own_code.sort(function(e){return"7"===e.status?1:-1}),this.setData({refundData:a,isOldOrder:!n.commonRegex().checkAllNum(a.order_id)}),a.is_self&&!a.is_choose&&this.setData({isChooseCase:!0});var t=this,r=wx.createSelectorQuery();r.select("#application").boundingClientRect(),r.exec(function(e){(console.log(e),e[0])&&(e[0].bottom>724?t.setData({greaterThanHeight:!0}):t.setData({greaterThanHeight:!1}))}),n.doTracking("actPv",JSON.stringify({page_path:"/pages/refund/refundApplication",channel:n.globalData.channel,scene:n.globalData.sceneId}),Math.floor(Date.now()/1e3))},packageDetail:function(){wx.navigateTo({url:"../../../pages/refund/packageDetail/packageDetail?orderId="+this.data.refundData.order_id})},onHide:function(){n.doTracking("actHang",JSON.stringify({page_path:"/pages/refund/refundApplication"}),Math.floor(Date.now()/1e3))},showRuleTap:function(){this.setData({showRule:!0})},selectTap:function(e){if(this.data.isChooseCase)return!1;var a=this.data.selectedList,t=e.currentTarget.dataset,r=t.ind,s=t.code;t.used||(a[r]?delete a[r]:(a[r]={},a[r].selected=!0,a[r].code=s),this.setData({selectedList:a,selectedListIsEmpty:this.checkSelectedList()}))},cancelTap:function(){this.setData({showRule:!1,agree:!1})},agreeTap:function(){this.setData({showRule:!1,agree:!0})},tipAgreeTap:function(){this.setData({agree:!this.data.agree})},changeValue:function(e){this.setData((0,t.default)({},e.target.dataset.name,e.detail.value))},refundSubmit:function(){var e=this;e.data.refundData.own_code.length>0&&0==e.data.refundData.friends_code.length?this.localData.codeType="self":e.data.refundData.friends_code.length>0&&e.data.refundData.own_code.length>0?this.localData.codeType="friends":e.data.refundData.friends_code.length>0&&0==e.data.refundData.own_code.length&&(this.localData.codeType="friends"),console.log("codeType",this.localData.codeType),console.log("refundData:",e.data.refundData);var t=this.data;if(e.data.refundData.is_self&&e.data.refundData.is_choose){var r=!0,s=!1,o=void 0;try{for(var i,d=e.data.selectedList.entries()[Symbol.iterator]();!(r=(i=d.next()).done);r=!0){var c=(0,a.default)(i.value,2),l=c[0],u=c[1];u&&(this.localData.codeList+=l==e.data.selectedList.length-1?u.code:u.code+"/")}}catch(e){s=!0,o=e}finally{try{r||null==d.return||d.return()}finally{if(s)throw o}}}if(e.data.agree)if(!t.receiver_name||n.getByteLength(t.receiver_name)<2||n.getByteLength(t.receiver_name)>20)e.showAlert("退款人姓名请输入2~20位字符");else if(t.receiver_phone&&n.commonRegex().checkMobile(t.receiver_phone)){if(0!=e.data.refundData.friends_code.length||!e.data.refundData.is_choose||this.localData.codeList)return!0;e.showAlert("请选择退还的卡券")}else e.showAlert("请输入11位手机号码");else e.showAlert("请阅读并同意退款规定")},addRefund:function(){var e=this,a=this.data,t={open_id:wx.getStorageSync("oid"),order_id:e.data.refundData.order_id,receiver_name:encodeURIComponent(a.receiver_name),receiver_phone:a.receiver_phone,nickname:encodeURIComponent(wx.getStorageSync("userInfo").nickName),headimgurl:encodeURIComponent(wx.getStorageSync("userInfo").avatarUrl),code_list:this.localData.codeList,code_type:this.localData.codeType,subscribe_type:this.localData.subscribeType.join(",")};console.log("params"),console.log(t);var r=n.getSignurature(t);console.log("sign:",r),wx.showLoading({mask:!0}),n.doTracking("actRefund",JSON.stringify({order_id:e.data.refundData.order_id,refund_status:e.data.refundData.refund_status}),Math.floor(Date.now()/1e3)),wx.request({url:s.default.REFUND_ADD,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:Object.assign(t,{sign:r}),success:function(a){if(200==a.data.retcode){var o=a.data.data;e.localData.refundId=o.refund_id;var i=e.data.refundData.is_share?"&refundId="+e.localData.refundId+"&orderId="+e.data.refundData.order_id+"&shareTitle="+e.data.refundData.share_title+"&shareImg="+encodeURIComponent(e.data.refundData.share_img):"",d=e.data.refundData.friends_code.length>0?1:2;wx.redirectTo({url:"../../refund/refundResult/refundResult?type="+d+i})}else 12009==a.data.retcode?e.showAlert("请勿重复申请"):90003==a.data.retcode?e.doAuthor():(n.logger(s.default.REFUND_ADD,{level:3,message:a.data.msg||"申请退款失败",request:Object.assign(t,{sign:r}),response:a}),wx.redirectTo({url:"../../error/error?api=refundAdd&code="+a.data.retcode}))},complete:function(){wx.hideLoading()}})},showAlert:function(e){wx.showModal({content:e,showCancel:!1})},showSubscribe:function(){var e=this;this.refundSubmit()&&("function"==typeof wx.requestSubscribeMessage&&this.localData.refundSubscribeList?(console.log("基础库版本高于2.8.2"),wx.requestSubscribeMessage({tmplIds:this.localData.refundSubscribeList,success:function(a){console.log("requestSubscribeMessage success:",a),e.localData.subscribeInfo.forEach(function(t){"accept"===a[t.template_id]&&e.localData.subscribeType.push(t.type_id)}),console.log("subscribeType:",e.localData.subscribeType),e.addRefund()},fail:function(a){console.log("requestSubscribeMessage fail:",a),e.addRefund(),n.logger("showSubscribe",{level:3,message:"拉起订阅弹框失败",response:a})}})):this.addRefund())}})); 
 			}); 	require("pages/refund/refundApplication/refundApplication.js");
 		__wxRoute = 'pages/refund/refundFriend/refundFriend';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/refund/refundFriend/refundFriend.js';	define("pages/refund/refundFriend/refundFriend.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireDefault"),r=e(require("../../../@babel/runtime/helpers/slicedToArray")),t=e(require("../../../@babel/runtime/helpers/defineProperty")),a=e(require("../../../547BC8221C91398C321DA02558497AF5.js")),o=e(require("vs-logger")),n=getApp();Page(o.default.Page({data:{showRule:!1,selectedList:[],agree:!1,refundFriendData:null,infoShow:!1,isOldOrder:!1,code_no:null},init:function(e,r){var t=this,o=this;console.log("oid=",r);var d={open_id:r,order_id:e.orderId,refund_id:e.refundId},i=n.getSignurature(d);wx.request({url:a.default.REFUND_FRIEND,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:Object.assign(d,{sign:i}),success:function(r){if(console.log(r),200==r.data.retcode){var s=r.data.data;s.code_info&&s.code_info.length&&(s.allUsed=!s.code_info.find(function(e){return"7"!==e.status}),s.code_info.sort(function(e){return"7"===e.status?1:-1})),o.setData({refundFriendData:s,isOldOrder:!n.commonRegex().checkAllNum(e.orderId)}),wx.setNavigationBarTitle({title:"确认退款"})}else if(13e3==r.data.retcode){var u={open_id:wx.getStorageSync("oid"),order_id:e.orderId},l=n.getSignurature(u);wx.request({url:a.default.REFUND_APPLY,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:Object.assign(u,{sign:l}),success:function(r){if(200===r.data.retcode){var t=r.data.data;if(4===t.refund_status)wx.redirectTo({url:"../../refund/refundApplication/refundApplication?refundData="+encodeURIComponent(JSON.stringify(t))});else{var o=t.is_share?"&refundId="+e.refundId+"&orderId="+e.orderId+"&shareTitle="+t.share_title+"&shareImg="+encodeURIComponent(t.share_img):"";wx.redirectTo({url:"../../refund/refundResult/refundResult?type="+t.refund_status+o})}}else n.logger(a.default.REFUND_APPLY,{level:3,message:r.data.msg||"申请退款失败",request:Object.assign(u,{sign:l}),response:r}),wx.redirectTo({url:"../../error/error?api=refundApply&code="+r.data.retcode})}})}else 99999===r.data.retcode?t.showAuthPopup():13007===r.data.retcode?wx.redirectTo({url:"../../refund/refundError/refundError"}):13009===r.data.retcode?wx.redirectTo({url:"/pages/refund/refundResult/refundResult?type=3"}):13010===r.data.retcode?wx.redirectTo({url:"/pages/refund/refundError/refundError?message=".concat(r.data.msg)}):(n.logger(a.default.REFUND_FRIEND,{level:3,message:r.data.msg||"获取好友需退款code失败",request:Object.assign(d,{sign:i}),response:r}),wx.redirectTo({url:"/pages/error/error?api=refundFriend&code="+r.data.retcode+"&msg="+r.data.msg}))}})},showAuthPopup:function(){this.setData({showAuthPopup:!0})},handleAuth:function(){this.init(this.options,wx.getStorageSync("oid"))},popupClose:function(){wx.getStorageSync("unionId")||wx.redirectTo({url:"/pages/refund/errorAuthorize/errorAuthorize?opts="+JSON.stringify(this.options)})},onLoad:function(e){console.log(e);var r=this;e.refundId&&e.orderId?(wx.checkSession({success:function(){wx.getStorageSync("oid")?r.init(e,wx.getStorageSync("oid")):n.doAuthor().then(function(t){r.init(e,t.oid)})},fail:function(t){n.doAuthor().then(function(t){r.init(e,t.oid)}),n.logger("checkSession",{level:3,message:"session过期",response:t})}}),n.doTracking("actPv",JSON.stringify({page_path:"/pages/refund/refundFriend",channel:n.globalData.channel,scene:n.globalData.sceneId}),Math.floor(Date.now()/1e3))):wx.redirectTo({url:"../../error/error?msg=noRefundIdOrOrderIdInRefundFriendPage"})},refundSubmit:function(e){var o=this,d=(e.detail.value,""),i=!0,s=!1,u=void 0;try{for(var l,c=o.data.selectedList.entries()[Symbol.iterator]();!(i=(l=c.next()).done);i=!0){var f=(0,r.default)(l.value,2),g=f[0],h=f[1];h&&(d+=g==o.data.selectedList.length-1?h.code:h.code+"/")}}catch(e){s=!0,u=e}finally{try{i||null==c.return||c.return()}finally{if(s)throw u}}if(o.data.agree)if(d){var p={open_id:wx.getStorageSync("oid"),order_id:o.data.refundFriendData.order_id,refund_id:o.data.refundFriendData.refund_id,form_id:e.detail.formId,code_list:d},w=n.getSignurature(p);wx.showLoading({mask:!0}),wx.request({url:a.default.REFUND_CONFIRM,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:Object.assign(p,{sign:w}),success:function(e){if(200==e.data.retcode){var r;e.data.data;o.setData((r={},(0,t.default)(r,"refundFriendData.refund_status",1),(0,t.default)(r,"infoShow",!0),r))}else n.logger(a.default.REFUND_CONFIRM,{level:3,message:e.data.msg||"好友确认退款失败",request:Object.assign(p,{sign:w}),response:e}),wx.redirectTo({url:"../../error/error?api=refundConfirm&code="+e.data.retcode})},complete:function(){wx.hideLoading()}})}else o.showAlert("请选择退还的卡券");else o.showAlert("请阅读并同意退款规定")},showAlert:function(e){wx.showModal({content:e,showCancel:!1})},onHide:function(){n.doTracking("actHang",JSON.stringify({page_path:"/pages/refund/refundFriend"}),Math.floor(Date.now()/1e3))},showRuleTap:function(){this.setData({showRule:!0})},selectTap:function(e){var r=this.data.selectedList,t=e.currentTarget.dataset,a=t.ind,o=t.code,n=t.goods_name;t.used||(console.log(o),r[a]?delete r[a]:(r[a]={},r[a].selected=!0,r[a].code=o,r[a].goods_name=n),this.setData({selectedList:r}))},cancelTap:function(){this.setData({showRule:!1,agree:!1})},agreeTap:function(){this.setData({showRule:!1,agree:!0})},tipAgreeTap:function(){this.setData({agree:!this.data.agree})}})); 
 			}); 	require("pages/refund/refundFriend/refundFriend.js");
 		__wxRoute = 'pages/refund/refundResult/refundResult';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/refund/refundResult/refundResult.js';	define("pages/refund/refundResult/refundResult.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireDefault")(require("vs-logger")),a=getApp();Page(e.default.Page({data:{currentStatus:1,shareImg:"",shareTitle:"",refundId:"",orderId:""},onLoad:function(e){e.type&&this.setData({currentStatus:e.type}),1!=this.data.currentStatus?wx.hideShareMenu():wx.showShareMenu(),1==this.data.currentStatus&&e.shareTitle&&e.shareImg&&e.refundId&&e.orderId&&this.setData({shareTitle:e.shareTitle,shareImg:decodeURIComponent(e.shareImg),refundId:e.refundId,orderId:e.orderId}),a.doTracking("actPv",JSON.stringify({page_path:"/pages/refund/refundResult",channel:a.globalData.channel,scene:a.globalData.sceneId}),Math.floor(Date.now()/1e3))},onHide:function(){a.doTracking("actHang",JSON.stringify({page_path:"/pages/refund/refundResult"}),Math.floor(Date.now()/1e3))},onShareAppMessage:function(){return a.doTracking("actShare",JSON.stringify({page_path:"/pages/refund/refundResult"}),Math.floor(Date.now()/1e3)),{title:this.data.shareTitle,path:"pages/refund/refundFriend/refundFriend?refundId="+this.data.refundId+"&orderId="+this.data.orderId,imageUrl:this.data.shareImg}}})); 
 			}); 	require("pages/refund/refundResult/refundResult.js");
 		__wxRoute = 'pages/refund/packageDetail/packageDetail';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/refund/packageDetail/packageDetail.js';	define("pages/refund/packageDetail/packageDetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireDefault"),a=e(require("../../../547BC8221C91398C321DA02558497AF5.js")),r=e(require("vs-logger")),t=getApp();Page(r.default.Page({data:{packageData:{},isOldOrder:!1},onLoad:function(e){wx.hideShareMenu();var r=e.orderId,n=this;if(r){var o={open_id:wx.getStorageSync("oid"),order_id:r},i=t.getSignurature(o);wx.request({url:a.default.REFUND_CODELIST,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:Object.assign(o,{sign:i}),success:function(e){200===e.data.retcode?n.setData({packageData:e.data.data,isOldOrder:!t.commonRegex().checkAllNum(r)}):(t.logger(a.default.REFUND_CODELIST,{level:3,message:e.data.msg||"获取卡券状态失败",request:Object.assign(o,{sign:i}),response:e}),wx.redirectTo({url:"../../error/error?api=refundCodeList&code="+e.data.retcode}))}})}else wx.redirectTo({url:"../../error/error?msg=noOrderIdInpackageDetailPage"});t.doTracking("actPv",JSON.stringify({page_path:"/pages/refund/packageDetail",channel:t.globalData.channel,scene:t.globalData.sceneId}),Math.floor(Date.now()/1e3))},onHide:function(){t.doTracking("actHang",JSON.stringify({page_path:"/pages/refund/packageDetail"}),Math.floor(Date.now()/1e3))},onShareAppMessage:function(){},refundDetail:function(){wx.showModal({content:"您的退款申请被受理后，零钱支付退款将及时退回零钱账户。银行卡支付，退款将在5~7个工作日退回原卡。实际到账时间依各银行政策有所不同。实际到账以微信支付为准。",showCancel:!1})}})); 
 			}); 	require("pages/refund/packageDetail/packageDetail.js");
 		__wxRoute = 'pages/refund/refundError/refundError';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/refund/refundError/refundError.js';	define("pages/refund/refundError/refundError.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireDefault")(require("vs-logger")),a=getApp();Page(e.default.Page({data:{message:""},onLoad:function(e){wx.hideShareMenu(),e.message&&this.setData({message:e.message}),a.doTracking("actPv",JSON.stringify({page_path:"/pages/refund/refundError",channel:a.globalData.channel,scene:a.globalData.sceneId}),Math.floor(Date.now()/1e3))},onHide:function(){a.doTracking("actHang",JSON.stringify({page_path:"/pages/refund/refundFriend"}),Math.floor(Date.now()/1e3))}})); 
 			}); 	require("pages/refund/refundError/refundError.js");
 		__wxRoute = 'pages/h5/h5';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/h5/h5.js';	define("pages/h5/h5.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),a=e(require("vs-logger")),t=require("../../48B317D01C91398C2ED57FD7D3797AF5.js"),s=e(require("../../547BC8221C91398C321DA02558497AF5.js")),r=getApp();Page(a.default.Page({data:{currentSrc:"",customise:{},shareUrl:"pages/index/index",shareImg:"https://static.egifting.starbucks.com.cn/giftcard/img/refund_default_share.jpg",shareTitle:"星巴克用星说",shareInfo:null},onLoad:function(e){console.log(e),e.url?("special"==e.type&&(e.url=decodeURIComponent(e.url)),"invoice"==e.destination&&wx.hideShareMenu(),this.setData({currentSrc:e.url}),r.doTracking("actPv",JSON.stringify({page_path:"/pages/h5",channel:r.globalData.channel,scene:r.globalData.sceneId}),Math.floor(Date.now()/1e3))):wx.navigateTo({url:"../error/error?msg=noUrlInH5Page"}),this.getShareImg()},getShareImg:function(){var e=this,a={token:(0,t.sha256)(this.data.currentSrc)},i=r.getSignurature(a);wx.request({url:s.default.GET_SHARE_IMAGE,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:Object.assign(a,{sign:i}),success:function(t){200==t.data.retcode?e.setData({shareInfo:t.data.data}):r.logger(s.default.GET_SHARE_IMAGE,{level:4,message:t.data.msg||"获取分享图片失败",request:Object.assign(a,{sign:i}),response:t})}})},onHide:function(){r.doTracking("actHang",JSON.stringify({page_path:"/pages/h5"}),Math.floor(Date.now()/1e3))},onShareAppMessage:function(){var e=this.data.customise.isCustomise?"pages/h5/h5?type=special&url="+encodeURIComponent(this.data.customise.shareUrl):this.data.shareUrl,a=this.data.shareInfo;return r.doTracking("actShare",JSON.stringify({page_path:"/pages/h5"}),Math.floor(Date.now()/1e3)),{title:a?a.title:this.data.shareTitle,path:e,imageUrl:a?a.img_url:this.data.shareImg}},bindGetMsg:function(e){if("customise"==e.detail.data[0].page&&!this.data.shareInfo){var a=e.detail.data[0].url?e.detail.data[0].url:"pages/index/index",t=e.detail.data[0].shareImg?e.detail.data[0].shareImg:"https://static.egifting.starbucks.com.cn/giftcard/img/refund_default_share.jpg",s=e.detail.data[0].shareTitle?e.detail.data[0].shareTitle:"星巴克用星说";this.setData({customise:{isCustomise:!0,shareUrl:a}}),this.setData({shareImg:t}),this.setData({shareTitle:s})}}})); 
 			}); 	require("pages/h5/h5.js");
 		__wxRoute = 'pages/diy/diy';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/diy/diy.js';	define("pages/diy/diy.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),t=e(require("../../547BC8221C91398C321DA02558497AF5.js")),a=(e(require("../../4445B0631C91398C2223D86471997AF5.js")),e(require("vs-logger"))),i=getApp();Page(a.default.Page({data:{firstCoupon:!1},onShow:function(){},showModal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};wx.showModal(Object.assign({content:"",showCancel:!1},e))},onLoad:function(e){var t=this;wx.checkSession({success:function(){wx.getStorageSync("oid")?t.init(e):i.doAuthor().then(function(a){t.init(e)})},fail:function(){i.doAuthor().then(function(a){t.init(e)})}})},init:function(e){var a=this;if(e.theme_id&&"undefined"!==e.theme_id){i.globalData.channel=e.channel||"",i.globalData.theme_id=e.theme_id,i.globalData.sceneId=e.scene?e.scene:"default",i.doTracking("actPv",JSON.stringify({page_path:"/pages/diy",channel:i.globalData.channel,scene:i.globalData.sceneId}),Math.floor(Date.now()/1e3)),wx.showLoading({title:"载入中",mask:!0});var n=this;this.setData({scr:i.globalData.sysinfo.whRatio>=2?"ext":"nml",isAndroid:i.globalData.sysinfo.system.indexOf("Android")>-1});var o={theme_id:e.theme_id,open_id:wx.getStorageSync("oid"),scene:i.globalData.sceneId,channel:i.globalData.channel},r=i.getSignurature(o);wx.request({url:t.default.THEME_SHOW,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:Object.assign(o,{sign:r}),success:function(e){if(200!=e.data.retcode)return i.logger(t.default.THEME_SHOW,{level:3,message:e.data.msg||"获取主题配置失败",request:Object.assign(o,{sign:r}),response:e}),void wx.redirectTo({url:"/pages/error/error?api=theme_show&code="+e.data.retcode});var a=e.data.data,s=a.background_url||"https://static-cdn.verystar.net/front/starbucks/weapp-starbucks-wsg3.0/bg1.jpg";i.globalData.diyInfo={cover_list:a.cover_list,scene:a.scene,tab_info:a.tab_info,title:a.title,share_image_url:a.share_image_url||"",share_title:a.share_title||"",background_url:s},wx.setNavigationBarTitle({title:a.title});var c=a.cover_list[0];c.index=0,n.setData({cover_list:a.cover_list,cover_curr:c,background_url:s})},fail:function(t){a.showModal({content:"网络超时，请重试",success:function(){a.init(e)}}),console.log("request fail",t)},complete:function(e){wx.hideLoading()}})}else wx.redirectTo({url:"/pages/index/index"})},selectCard:function(e){this.setData({cover_curr:e.currentTarget.dataset}),i.doTracking("actSpeSwitchCard",JSON.stringify({cover_id:e.currentTarget.dataset.id}),Math.floor(Date.now()/1e3))},goStart:function(e){var t=this.data.cover_curr;if(t){i.globalData.cover_id=t.id;var a="/pages/diy/edit/edit?cover_id="+t.id+"&cover_index="+t.index;wx.navigateTo({url:a}),i.doTracking("actSubmDiyButton",JSON.stringify({cover_id:t.id}),Math.floor(Date.now()/1e3))}},onShareAppMessage:function(){return i.doTracking("actShare",JSON.stringify({page_path:"/pages/diy"}),Math.floor(Date.now()/1e3)),{title:i.globalData.diyInfo.share_title,path:"/pages/diy/diy?theme_id=".concat(this.options.theme_id,"&scene=").concat(i.globalData.sceneId),imageUrl:i.globalData.diyInfo.share_image_url}},onHide:function(){i.doTracking("actHang",JSON.stringify({page_path:"/pages/diy"}),Math.floor(Date.now()/1e3))},gotoPrivacy:function(){wx.navigateTo({url:"../privacy/privacy"})},gotoTerms:function(){wx.navigateTo({url:"../terms/terms"})}})); 
 			}); 	require("pages/diy/diy.js");
 		__wxRoute = 'pages/getCardPage/getCardPage';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/getCardPage/getCardPage.js';	define("pages/getCardPage/getCardPage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),t=e(require("../../547BC8221C91398C321DA02558497AF5.js")),a=e(require("vs-logger")),o=getApp();Page(a.default.Page({data:{title:"",image:"",activity_status:null,activity_type:"",activity_id:"",activity_time:"",activity_words:"",icon_words:"",redirect_words:"",redirect_path:""},onLoad:function(e){var t=this;this.openId=wx.getStorageSync("oid"),this.unionId=wx.getStorageSync("unionId"),wx.checkSession({success:function(){t.openId?t.getConfig(t.openId):o.doAuthor().then(function(e){var a=e.oid,i=e.uid;t.openId=a,t.unionId=i,t.getConfig(a),o.setVisitId()})},fail:function(){o.doAuthor().then(function(e){var a=e.oid,i=e.uid;t.openId=a,t.unionId=i,t.getConfig(a),o.setVisitId()})}}),o.doTracking("actPv",JSON.stringify({page_path:"/pages/getCardPage/getCardPage",channel:o.globalData.channel,scene:o.globalData.sceneId}),Math.floor(Date.now()/1e3))},onHide:function(){o.doTracking("actHang",JSON.stringify({page_path:"/pages/getCardPage/getCardPage"}),Math.floor(Date.now()/1e3))},getConfig:function(e){var a=this;wx.showLoading({mask:!0});var i={open_id:e};i.sign=o.getSignurature(i),o.logger(t.default.TEMPLATE_ACTIVITY_CONFIG,{level:4,message:"请求模板消息发券页面配置",request:i}),wx.request({url:t.default.TEMPLATE_ACTIVITY_CONFIG,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:i,success:function(e){console.log(e),200==e.data.retcode?a.setData(e.data.data):(a.setData({activity_status:0}),o.logger(t.default.TEMPLATE_ACTIVITY_CONFIG,{level:3,message:e.data.msg||"获取代金券页配置失败",request:i,response:e})),wx.hideLoading()},fail:function(e){wx.redirectTo({url:"/pages/error/error?api=TEMPLATE_ACTIVITY_CONFIG&msg=网络异常，请稍后重试"}),wx.hideLoading(),o.logger(t.default.TEMPLATE_ACTIVITY_CONFIG,{level:3,message:e.errMsg||"获取代金券页配置失败",request:i,response:e})}})},sendVsCoupon:function(){wx.showLoading({mask:!0});var e={open_id:this.openId,activity_id:this.data.activity_id,batch_no:this.data.batch_no};e.sign=o.getSignurature(e),o.logger(t.default.SEND_VS_COUPON,{level:4,message:"请求发送VS活动券",request:e}),wx.request({url:t.default.SEND_VS_COUPON,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:e,success:function(a){console.log(a),wx.showModal({title:"",showCancel:!1,content:a.data.msg}),200!==a.data.retcode&&o.logger(t.default.SEND_VS_COUPON,{level:3,message:a.data.msg||"发送VS活动券失败",request:e,response:a}),wx.hideLoading()},fail:function(a){wx.redirectTo({url:"/pages/error/error?api=SEND_VS_COUPON&code=400&msg=网络异常，请稍后重试"}),wx.hideLoading(),o.logger(t.default.SEND_VS_COUPON,{level:3,message:a.errMsg||"发送VS活动券失败",request:e,response:a})}})},sendThousandCoupon:function(e){wx.showLoading({mask:!0});var a={open_id:this.openId,union_id:e,thousand_activity_id:this.data.activity_id};a.sign=o.getSignurature(a),o.logger(t.default.SEND_THOUSAND_COUPON,{level:4,message:"请求发送千人千券",request:a}),wx.request({url:t.default.SEND_THOUSAND_COUPON,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:a,success:function(e){console.log(e),wx.showModal({title:"",showCancel:!1,content:e.data.data.message}),200!==e.data.retcode&&o.logger(t.default.SEND_THOUSAND_COUPON,{level:3,message:e.data.data.message||"发送千人千券失败",request:a,response:e}),wx.hideLoading()},fail:function(e){wx.redirectTo({url:"/pages/error/error?api=SEND_VS_COUPON&msg=网络异常，请稍后重试"}),o.logger(t.default.SEND_VS_COUPON,{level:3,message:e.errMsg||"发送千人千券失败",request:a,response:e}),wx.hideLoading()}})},getCoupon:function(){"1"===this.data.activity_type?this.sendVsCoupon():"2"===this.data.activity_type?this.unionId?this.sendThousandCoupon(this.unionId||""):this.showAuthPopup():(wx.showModal({title:"",content:"您的操作已超时，请重试",showCancel:!1}),o.logger("getCoupon",{level:3,message:"没有拿到正确的activity_type",response:this.data})),o.doTracking("actClickCoupon",JSON.stringify({activity_id:this.data.activity_id}))},showAuthPopup:function(){this.setData({showAuthPopup:!0})},handleAuth:function(e){this.unionId=e.detail,this.sendThousandCoupon(this.unionId)},goPurchase:function(e){wx.navigateTo({url:this.data.redirect_path}),o.doTracking("actCouponPurchase",JSON.stringify({page_path:this.data.redirect_path}))},goWsg:function(e){wx.navigateTo({url:"/pages/index/index"}),o.doTracking("actCouponBack")},toggleActivityPopup:function(){this.setData({showPopup:!this.data.showPopup})},prevent:function(){return!1}})); 
 			}); 	require("pages/getCardPage/getCardPage.js");
 		__wxRoute = 'pages/promotion/promotion';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/promotion/promotion.js';	define("pages/promotion/promotion.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),t=e(require("vs-logger")),i=e(require("../../547BC8221C91398C321DA02558497AF5.js")),o=getApp();Page(t.default.Page({onLoad:function(e){console.log(e);var t=this;wx.hideShareMenu(),wx.checkSession({success:function(){wx.getStorageSync("oid")?t.setSrc(e):o.doAuthor().then(function(){t.setSrc(e),o.setVisitId()})},fail:function(){o.doAuthor().then(function(){t.setSrc(e),o.setVisitId()})}})},setSrc:function(e){var t=i.default.PROMOTION_H5+e.uuid+"?openid="+wx.getStorageSync("oid");console.log(t),this.setData({src:t})}})); 
 			}); 	require("pages/promotion/promotion.js");
 		__wxRoute = 'pages/diy/edit/edit';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/diy/edit/edit.js';	define("pages/diy/edit/edit.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../@babel/runtime/helpers/interopRequireDefault"),e=t(require("../../../@babel/runtime/helpers/objectSpread")),a=t(require("../../../@babel/runtime/helpers/defineProperty")),i=t(require("../../../547BC8221C91398C321DA02558497AF5.js")),s=(t(require("../../../4445B0631C91398C2223D86471997AF5.js")),t(require("vs-logger"))),o=getApp();Page(s.default.Page({data:{selectedId:-1,kindType:0,iconNum:0,textNum:0,rotate:0,cardImage:"",diyInfo:null,tabList:[],userList:[],isInit:0,imgUrl:{},hiddenInput:!0,wishesList:[],wishesSel:0,wishesInfo:{value:"",focus:!1},maxLength:{icon:10,text:5},tipsShow:0},localData:{nodeId:0,coverInfo:{id:"",index:0},boxInfo:{height:0,width:0},coverUrl:{},ctx:null,zIndex:0,userList:[],canvasScale:1,uploadType:!1,wishesId:1},showModal:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};wx.showModal(Object.assign({content:"",showCancel:!1},t))},closeTips:function(){this.setData({tipsShow:!1})},onLoad:function(t){var e=this,a=o.globalData.diyInfo;o.globalData.theme_id&&"undefined"!==o.globalData.theme_id?a&&t.cover_id?(wx.getStorageSync("firstInDiy")||(setTimeout(function(){e.setData({tipsShow:!0})},1e3),wx.setStorage({key:"firstInDiy",data:"1"})),this.setData({scr:o.globalData.sysinfo.whRatio>=2?"ext":"nml",isAndroid:o.globalData.sysinfo.system.indexOf("Android")>-1,background_url:o.globalData.diyInfo.background_url}),this.localData.coverInfo={id:t.cover_id,index:t.cover_index},o.doTracking("actPv",JSON.stringify({page_path:"/pages/diy/edit",channel:o.globalData.channel,scene:o.globalData.sceneId}),Math.floor(Date.now()/1e3)),this.init(a)):wx.redirectTo({url:"/pages/diy/diy?theme_id=".concat(o.globalData.theme_id)}):wx.redirectTo({url:"/pages/index/index"})},getImageData:function(t){var e=this;wx.showLoading({title:"加载中...",mask:!0});var a={theme_id:o.globalData.theme_id},s=o.getSignurature(a);wx.request({url:i.default.GET_IMAGE,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:Object.assign(a,{sign:s}),success:function(t){if(200!=t.data.retcode)return o.logger(i.default.GET_IMAGE,{level:3,message:t.data.msg||"获取主题内图片失败",request:Object.assign(a,{sign:s}),response:t}),e.setData({isInit:1}),void wx.navigateTo({url:"/pages/error/error?api=cover_getimage&code="+t.data.retcode});o.globalData.diyInfo.imageData=t.data.data,e.init(o.globalData.diyInfo),o.logger(i.default.GET_IMAGE,{level:4,message:"获取主题内图片成功",request:a,response:t})},fail:function(n){e.showModal({content:"网络超时，请重试",success:function(){e.getImageData(t)}}),wx.hideLoading(),o.logger(i.default.GET_IMAGE,{level:4,message:n.errMsg||"获取超时",request:Object.assign(a,{sign:s}),response:n})}})},init:function(t){var e=this;this.loadImage({nodeId:this.localData.coverInfo.id+"_"+this.localData.coverInfo.index,iconUrl:t.cover_list[this.localData.coverInfo.index].image},function(a){e.setData({tabList:t.tab_info,diyInfo:t,cardImage:a,isInit:2}),wx.setNavigationBarTitle({title:t.title}),e.getCanvasProp(),e.localData.ctx=wx.createCanvasContext("myCanvas"),wx.hideLoading()},function(){e.init(t)})},resetSize:function(t){var e=this;setTimeout(function(){wx.createSelectorQuery().select("#movable_".concat(t.id)).boundingClientRect(function(i){var s,o="1"==t.type?0:32,n=i.width/t.scale+o,l=i.height/t.scale+o/2,c=Math.sqrt(Math.pow(n,2)+Math.pow(l,2));e.localData.userList[t.id].width=n,e.localData.userList[t.id].height=l,e.localData.userList[t.id].z=c,e.setData((s={},(0,a.default)(s,"userList[".concat(t.id,"].width"),n),(0,a.default)(s,"userList[".concat(t.id,"].height"),l),(0,a.default)(s,"userList[".concat(t.id,"].z"),c),(0,a.default)(s,"userList[".concat(t.id,"].rotate"),t.oRotate),(0,a.default)(s,"selectedId",t.id),(0,a.default)(s,"rotate",t.rotate),s))}).exec()},16.67)},resetUserList:function(){var t=this;this.localData.userList.forEach(function(e,i){var s;e&&t.setData((s={},(0,a.default)(s,"userList[".concat(i,"].ox"),e.ox),(0,a.default)(s,"userList[".concat(i,"].oy"),e.oy),(0,a.default)(s,"userList[".concat(i,"].sx"),e.sx),(0,a.default)(s,"userList[".concat(i,"].sy"),e.sy),s))})},getRandomPosition:function(){var t=this.localData.boxInfo.width/640*200,e=t/2,a=this.localData.boxInfo.width-t/2,i=this.localData.boxInfo.height/384*200,s=i/2,o=this.localData.boxInfo.height-i/2;return{x:parseInt(Math.random()*(a-e+1)+e,10),y:parseInt(Math.random()*(o-s+1)+s,10)}},getBlackColor:function(t){for(var e=0;e<t.length;e++)if(t[e].content&&"#000000"==t[e].content)return{colorSel:e,color:t[e].content,colorId:t[e].id}},addIcon:function(t){var e=this;this.resetUserList();var i=t.currentTarget.dataset,s=this.data.kindType,n=this.data.tabList[s],l=n.content.image_content?n.content.image_content[i.id]:{},c=(n.content.color_content&&n.content.color_content[0],this.getRandomPosition());if(!("1"==n.type&&this.data.iconNum>=this.data.maxLength.icon)){var d,r=this.data.selectedId;if("2"!=n.type||-1==r||"2"!=this.data.userList[r].type){if(!("2"==n.type&&this.data.textNum>=this.data.maxLength.text)){d={id:this.localData.nodeId++,scale:1,width:0,height:0,rotate:0,oRotate:0,ox:c.x,oy:c.y,sx:c.x,sy:c.y,type:n.type,disable:!1,zIndex:this.localData.zIndex++,tabId:s};var h={};"1"==n.type?(d.iconUrl=l.content,d.nodeId=l.id):((d=Object.assign(d,this.getBlackColor(n.content.color_content))).content=i.content,d.nodeId=i.id,d.imgHeight=70),this.loadImage(d,function(){if("1"==n.type)h.iconNum=e.data.iconNum+1;else{h.textNum=e.data.textNum+1;var t=e.data.wishesList;t.push({nodeIndex:d.id,nodeId:i.id,content:i.content}),h.wishesList=t,h.wishesSel=e.getWishesIndex(i.id)}h.userList=e.data.userList,h.userList[d.id]=d,e.localData.userList[d.id]=Object.assign({},d),e.setData(h),e.resetSize(d),e.hideInput(),o.doTracking("actChooseIcon",JSON.stringify({cover_id:e.localData.coverInfo.id,icon_id:"1"==n.type?d.nodeId:"0"}),Math.floor(Date.now()/1e3))})}}else this.loadImage(Object.assign(this.data.userList[r],{nodeId:i.id,content:i.content}),function(){var t,s=e.data.userList[r].rotate;e.setData((t={},(0,a.default)(t,"userList[".concat(r,"].width"),0),(0,a.default)(t,"userList[".concat(r,"].height"),0),(0,a.default)(t,"userList[".concat(r,"].content"),i.content),(0,a.default)(t,"userList[".concat(r,"].nodeId"),i.id),(0,a.default)(t,"userList[".concat(r,"].rotate"),0),(0,a.default)(t,"userList[".concat(r,"].oRotate"),s),(0,a.default)(t,"wishesList[".concat(e.getWishesIndex(i.id),"].content"),i.content),t)),e.localData.userList[r].content=i.content,e.localData.userList[r].nodeId=i.id,e.localData.userList[r].imgHeight=70,e.resetSize(e.data.userList[r]),e.hideInput(),o.doTracking("actChooseIcon",JSON.stringify({cover_id:e.localData.coverInfo.id,icon_id:"0"}),Math.floor(Date.now()/1e3))})}},getWishesIndex:function(t){for(var e=0,a=0;a<this.data.wishesList.length;a++)if(this.data.wishesList[a].nodeId==t){e=a;break}return e},changeImgUrl:function(t,e){var a=this.data.imgUrl;a[t]=e,this.setData({imgUrl:a})},loadImage:function(t,a){var i=this,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};if("2"==t.type)return a();var n=t.colorId?"".concat(t.nodeId,"_").concat(t.colorId):t.nodeId,l=this.data.imgUrl[n];if(l){if("pending"==l)return;a(l)}else{wx.showLoading({title:"加载中...",mask:!0}),this.changeImgUrl(n,"pending");var c={src:t.iconUrl?t.iconUrl:this.data.imageData[t.nodeId+"_"+t.colorId].img_url};wx.getImageInfo((0,e.default)({},c,{success:function(t){o.logger("wx.getImageInfo",{level:4,message:"获取图片信息",request:c,response:t}),i.changeImgUrl(n,t.path),wx.hideLoading(),a(i.data.imgUrl[n])},fail:function(t){wx.hideLoading(),o.logger("wx.getImageInfo",{level:3,message:"获取图片信息出错",request:c,response:t}),i.showModal({content:"出现错误，请重试！",success:function(){s()}})}}))}},getTextWidth:function(t){return t.length*(/^[a-zA-Z]*$/.test(t[0])?22.5:50)},getCanvasProp:function(){var t=this;wx.createSelectorQuery().select(".movable-area").boundingClientRect(function(e){t.localData.boxInfo={height:e.height,width:e.width}}).exec()},onChange:function(t){var e=t.currentTarget.dataset.id;this.localData.userList[e].ox=t.detail.x,this.localData.userList[e].oy=t.detail.y},startScale:function(t){var e=t.changedTouches[0],a=this.data.selectedId;this.localData.userList[a].sx=e.clientX,this.localData.userList[a].sy=e.clientY,o.logger("startScale",{level:4,message:"开始缩放",request:t})},onScale:function(t){var e=this.data.selectedId,i=this.localData.userList[e],s=t.changedTouches[0],o=s.clientX-i.sx,n=s.clientY-i.sy,l=Math.sqrt(Math.pow(o,2)+Math.pow(n,2));l=o*Math.abs(o)+n*Math.abs(n)>0?l:-l;var c=(l=i.scale+(i.rotate>90||i.rotate<-90?-l:l)/i.z)<.5?.5:l;this.localData.userList[e].sx=s.clientX,this.localData.userList[e].sy=s.clientY,this.localData.userList[e].scale=c,this.setData((0,a.default)({},"userList[".concat(e,"].scale"),c))},clearSelected:function(t){-1!=this.data.selectedId&&(this.hideInput(),this.setData({selectedId:-1}))},rotating:function(t){var e=t.detail.value,i=this.data.selectedId;this.localData.userList[i].rotate=e,this.setData((0,a.default)({},"userList[".concat(i,"].rotate"),e))},rotated:function(t){var e=this.localData.userList[this.data.selectedId];o.doTracking("actRotIcon",JSON.stringify({cover_id:this.localData.coverInfo.id,icon_id:e&&"1"==e.type?e.nodeId:"0"}),Math.floor(Date.now()/1e3))},tstart:function(t){var e=t.currentTarget.dataset.id;if(this.data.selectedId!=e){var a=this.localData.userList[e];this.data.kindType;this.localData.userList[e].zIndex=this.localData.zIndex++;var i={selectedId:e,userList:JSON.parse(JSON.stringify(this.localData.userList)),rotate:this.localData.userList[e].rotate,kindType:this.localData.userList[e].tabId};"2"==a.type&&(i.wishesSel=this.getWishesIndex(a.nodeId)),this.setData(i),this.hideInput()}},getColor:function(t){var e=this,i=this.data.selectedId;if(-1!=i&&"1"!=this.localData.userList[i].type){var s=t.currentTarget.dataset,n=this.data.tabList[this.data.kindType].content.color_content[s.id];this.loadImage(Object.assign(this.localData.userList[i],{colorId:n.id}),function(){var t;e.localData.userList[i].color=n.content,e.localData.userList[i].colorSel=s.id,e.localData.userList[i].colorId=n.id,e.setData((t={},(0,a.default)(t,"userList[".concat(i,"].color"),n.content),(0,a.default)(t,"userList[".concat(i,"].colorSel"),s.id),(0,a.default)(t,"userList[".concat(i,"].colorId"),n.id),t))}),o.doTracking("actColor",JSON.stringify({cover_id:this.localData.coverInfo.id,icon_id:"0",color_value:n.content}),Math.floor(Date.now()/1e3))}},getKind:function(t){var e=t.currentTarget.dataset,a="2"==e.type&&0==this.data.wishesList.length;this.setData({kindType:e.index,hiddenInput:!a,"wishesInfo.focus":a}),"2"==e.type&&this.selectWishesModel()},wishesInput:function(t){this.setData({"wishesInfo.value":t.detail.value})},clearWishes:function(){this.setData({"wishesInfo.value":"","wishesInfo.focus":!0})},hideInput:function(){this.setData({hiddenInput:!0,"wishesInfo.focus":!1,"wishesInfo.value":""})},checkText:function(t,e){var a=this;wx.showLoading({title:"加载中...",mask:!0});var s={text:t},n=o.getSignurature(s);wx.request({url:i.default.CHECK_TEXT,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:Object.assign(s,{sign:n}),success:function(t){if(200==t.data.retcode)return e();o.logger(i.default.CHECK_TEXT,{level:4,message:t.data.msg||"检测出敏感词",request:Object.assign(s,{sign:n}),response:t}),a.showModal({content:t.data.msg})},fail:function(t){a.showModal({content:"检查失败或网络超时，请重试"})},complete:function(){o.logger(i.default.CHECK_TEXT,{level:4,message:"检测敏感词",request:s}),wx.hideLoading()}})},wishesConfirm:function(t){var e=this,a=this.data.wishesInfo.value.trim(),i=this.data.wishesList[this.data.wishesSel];if(a)this.checkText(a,function(){e.addIcon({currentTarget:{dataset:{id:i?i.nodeId:"text_".concat(e.localData.wishesId++),tab:t.currentTarget.dataset.tab,content:a}}}),o.doTracking(i?"actEdit":"actInput",JSON.stringify({cover_id:e.localData.coverInfo.id}),Math.floor(Date.now()/1e3))});else{if(this.hideInput(),this.data.wishesList.length>0)return this.selectWishesModel();for(var s=0;s<this.data.tabList.length;s++)if("1"==this.data.tabList[s].type){this.setData({kindType:s});break}}},wishesEdit:function(t){this.setData({hiddenInput:!1,"wishesInfo.focus":!0,"wishesInfo.value":t.currentTarget.dataset.content})},addNewWishes:function(){this.data.selectedId;this.setData({selectedId:-1,hiddenInput:!1,"wishesInfo.focus":!0,"wishesInfo.value":""})},goGenerate:function(t){var e,a=this;o.doTracking("actSubmGeneButton",JSON.stringify({cover_id:this.localData.coverInfo.id,icon_id:(e=[],a.localData.userList.forEach(function(t,a){e.push(t&&"1"==t.type?t.nodeId:"0")}),e)}),Math.floor(Date.now()/1e3)),wx.getStorageSync("userInfo")?this.drawCard():this.showAuthPopup()},showAuthPopup:function(){this.setData({showAuthPopup:!0})},handleAuth:function(){this.localData.uploadType=!0,wx.showLoading({title:"加载中...",mask:!0}),this.drawCard()},resetOrder:function(){var t=this.localData.userList;this.data.userList=JSON.parse(JSON.stringify(t)),t.forEach(function(e,a){for(var i=0;i<t.length-1-a;i++)if(t[i]&&t[i+1]&&t[i].zIndex>t[i+1].zIndex){var s=t[i+1];t[i+1]=t[i],t[i]=s}})},drawCard:function(){var t=this;this.resetOrder();var e=this.localData.boxInfo.width,a=this.localData.boxInfo.height;this.localData.ctx.drawImage(this.data.cardImage,0,0,e*this.localData.canvasScale,a*this.localData.canvasScale),this.localData.userList.forEach(function(e,a){if(e&&!e.disable){t.localData.ctx.save();var i=e.ox-e.width*e.scale/2,s=e.oy-e.height*e.scale/2;if(t.localData.ctx.translate(i*t.localData.canvasScale,s*t.localData.canvasScale),t.localData.ctx.scale(e.scale*t.localData.canvasScale,e.scale*t.localData.canvasScale),t.localData.ctx.translate(e.width/2,e.height/2),t.localData.ctx.rotate(e.rotate*Math.PI/180),"1"==e.type)return t.localData.ctx.drawImage(t.data.imgUrl[e.nodeId],-e.width/2+1,-e.height/2+1,e.width,e.height),t.localData.ctx.restore(),!0;e.width,e.height;t.localData.ctx.font="normal bold 15px sans-serif",t.localData.ctx.fillStyle=e.color,t.localData.ctx.setTextAlign("left"),t.localData.ctx.setTextBaseline("top"),t.localData.ctx.fillText(e.content,-e.width/2+17,-e.height/2+9),t.localData.ctx.restore()}}),this.localData.ctx.draw(!0,function(){t.uploadImage()}),this.localData.userList=JSON.parse(JSON.stringify(this.data.userList))},uploadImage:function(){var t=this;wx.canvasToTempFilePath({x:0,y:0,width:this.localData.boxInfo.width*this.localData.canvasScale,height:this.localData.boxInfo.height*this.localData.canvasScale,canvasId:"myCanvas",fileType:"jpg",quality:.8,success:function(e){var a=e.tempFilePath,s={nonce_str:"".concat(wx.getStorageSync("oid")).concat((new Date).getTime()).concat(Math.round(100*Math.random()))};s=o.getLogSign(s),o.logger("wx.canvasToTempFilePath",{level:4,message:"canvasToTempFilePath success",request:s,response:e}),wx.uploadFile({url:i.default.COVER_SAVE,filePath:a,name:"file",formData:s,success:function(e){if(200!=(e=JSON.parse(e.data)).retcode)return t.uploadFail("上传失败，请重试"),void o.logger("wx.uploadFile",{level:3,message:e.msg||"上传失败",request:s,response:e});wx.hideLoading(),o.globalData.card_image=e.data.url,o.globalData.coverImage=a,setTimeout(function(){wx.navigateTo({url:"/pages/diy/result/result"})},0)},fail:function(e){t.uploadFail("网络超时，请重试"),o.logger("wx.uploadFile",{level:3,message:"文件上传失败",request:s,response:e})}})},fail:function(e){console.log(e),t.uploadFail("生成出错，请重试"),o.logger("wx.canvasToTempFilePath",{level:3,message:"生成出错",response:e})}})},uploadFail:function(t){this.localData.uploadType=!1,wx.hideLoading(),this.showModal({content:t})},deleteItem:function(t){var e=this.data.selectedId,a={selectedId:-1};if(this.localData.userList[e].disable=!0,a.userList=JSON.parse(JSON.stringify(this.localData.userList)),"1"==this.localData.userList[e].type)a.iconNum=this.data.iconNum-1;else{a.textNum=this.data.textNum-1;var i=this.data.wishesList;i.splice(this.getWishesIndex(this.localData.userList[e].nodeId),1),a.wishesList=i,a.wishesSel=0,this.hideInput()}this.setData(a)},onShareAppMessage:function(){return o.doTracking("actShare",JSON.stringify({page_path:"/pages/diy"}),Math.floor(Date.now()/1e3)),{title:o.globalData.diyInfo.share_title,path:"/pages/diy/diy?theme_id=".concat(o.globalData.theme_id,"&scene=").concat(o.globalData.sceneId),imageUrl:o.globalData.diyInfo.share_image_url}},selectWishesModel:function(){var t=this.data.wishesSel,e={selectedId:-1};if(t<this.data.wishesList.length&&this.data.wishesList[t]){var i,s=this.data.wishesList[t].nodeIndex;this.localData.userList[s].zIndex=this.localData.zIndex++,i={},(0,a.default)(i,"userList[".concat(s,"].zIndex"),this.localData.zIndex),(0,a.default)(i,"rotate",this.localData.userList[s].rotate),(0,a.default)(i,"selectedId",s),e=i,this.hideInput()}this.setData(e)},bindChange:function(t){this.setData({wishesSel:t.detail.value[0]}),this.selectWishesModel()},onHide:function(){o.doTracking("actHang",JSON.stringify({page_path:"/pages/diy/edit"}),Math.floor(Date.now()/1e3))}})); 
 			}); 	require("pages/diy/edit/edit.js");
 		__wxRoute = 'pages/diy/result/result';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/diy/result/result.js';	define("pages/diy/result/result.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=require("../../../@babel/runtime/helpers/interopRequireDefault"),t=a(require("../../../547BC8221C91398C321DA02558497AF5.js")),e=(a(require("../../../4445B0631C91398C2223D86471997AF5.js")),a(require("vs-logger"))),i=getApp();Page(e.default.Page({data:{showModal:!1,saved:!1,image:"",getCoupon:!1,couponMessage:"",openSettinged:!1,iphoneX:!1,imageUrl:"",tipsShow:0},localData:{nickname:"",textList:"",ctx:null},showTips:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};wx.showModal(Object.assign({content:"",showCancel:!1},a))},onLoad:function(a){var t=this;wx.getSystemInfoSync().model.indexOf("iPhone X")>-1?t.setData({iphoneX:!0}):t.setData({iphoneX:!1});var e=wx.getStorageSync("userInfo");this.localData.nickname=e.nickName||"",wx.setNavigationBarTitle({title:i.globalData.diyInfo.title});var o=i.globalData.coverImage;i.globalData.theme_id?o?(i.doTracking("actPv",JSON.stringify({page_path:"/pages/diy/result",channel:i.globalData.channel,scene:i.globalData.sceneId}),Math.floor(Date.now()/1e3)),t.setData({image:o,background_url:i.globalData.diyInfo.background_url}),this.resetText(),t.getCardImage(),this.localData.ctx=wx.createCanvasContext("myCanvas2"),this.setData({scr:i.globalData.sysinfo.whRatio>=2?"ext":"nml",isAndroid:i.globalData.sysinfo.system.indexOf("Android")>-1})):wx.redirectTo({url:"/pages/diy/diy?theme_id=".concat(i.globalData.theme_id)}):wx.redirectTo({url:"/pages/index/index"})},tipsControl:function(){this.setData({tipsShow:!this.data.tipsShow})},sendCoupon:function(){var a=this,e={open_id:wx.getStorageSync("oid"),type:"save"},o=i.getSignurature(e);wx.request({url:t.default.SEND_COUPON,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:Object.assign(e,{sign:o}),success:function(s){200==s.data.retcode?a.setData({getCoupon:!0,couponMessage:s.data.data}):i.logger(t.default.SEND_COUPON,{level:3,message:s.data.msg||"发送优惠券失败",request:Object.assign(e,{sign:o}),response:s})}})},resetText:function(){var a=this.localData.nickname,t=[];a.length>5?(t.push("这是".concat(a.substring(0,14))),t.push("".concat(a.length>14?a.substring(14,a.length):"","设计的用星说星意卡"))):a.length<=5&&t.push("这是".concat(a,"设计的用星说星意卡")),this.localData.textList=t},getCardImage:function(){var a=this;wx.createSelectorQuery().select(".card-show-image").boundingClientRect(function(t){t&&(console.log(t),a.setData({ciw:t.width,cih:t.height}))}).exec()},saveCardTracking:function(a){i.logger("saveCardTracking",{level:4,message:"params: type",response:a}),i.doTracking("actSubmSaveButton",JSON.stringify({cover_id:i.globalData.cover_id,save_status:a}),Math.floor(Date.now()/1e3))},roundRect1:function(a,t,e,i,o){this.localData.ctx.beginPath(),this.localData.ctx.arc(a+o,t+o,o,Math.PI,1.5*Math.PI),this.localData.ctx.moveTo(a+o,t),this.localData.ctx.lineTo(a+e-o,t),this.localData.ctx.lineTo(a+e,t+o),this.localData.ctx.arc(a+e-o,t+o,o,1.5*Math.PI,2*Math.PI),this.localData.ctx.lineTo(a+e,t+i-o),this.localData.ctx.lineTo(a+e-o,t+i),this.localData.ctx.arc(a+e-o,t+i-o,o,0,.5*Math.PI),this.localData.ctx.lineTo(a+o,t+i),this.localData.ctx.lineTo(a,t+i-o),this.localData.ctx.arc(a+o,t+i-o,o,.5*Math.PI,Math.PI),this.localData.ctx.lineTo(a,t+o),this.localData.ctx.lineTo(a+o,t),this.localData.ctx.closePath(),this.localData.ctx.clip()},drawCard:function(){var a=this;this.localData.ctx.drawImage("../../../image/WechatIMG193.jpeg",0,0,544,730),this.localData.ctx.save(),this.roundRect1(34,56,477,286,15),this.localData.ctx.drawImage(this.data.image,34,56,477,286),this.localData.ctx.restore(),this.localData.ctx.drawImage("../../../image/starbucks-wxcode.png",78,536,148,150),this.localData.ctx.setTextAlign("center"),this.localData.ctx.font="normal 26px PingFangSC",this.localData.textList.forEach(function(t,e){a.localData.ctx.fillText(t,272,380+40*e)}),this.localData.ctx.fillText("你也快来定制你的吧",272,380+40*this.localData.textList.length),this.localData.ctx.setTextAlign("left"),this.localData.ctx.font="normal 20px PingFangSC",this.localData.ctx.fillText("长按扫码小程序",252,600),this.localData.ctx.fillText("定制你的专属星意卡",252,630),this.localData.ctx.draw(!0,function(){i.logger("drawCard",{level:4,message:"draw success"}),wx.canvasToTempFilePath({x:0,y:0,width:544,height:730,fileType:"png",quality:1,canvasId:"myCanvas2",success:function(t){a.setData({imageUrl:t.tempFilePath}),wx.saveImageToPhotosAlbum({filePath:t.tempFilePath,success:function(t){wx.hideLoading(),a.setData({showModal:!0,saved:!0}),wx.showToast({title:"保存成功",success:function(a){}}),i.logger("drawCard",{level:4,message:"保存成功"}),a.saveCardTracking(1)},fail:function(t){wx.hideLoading(),a.showTips({content:"保存失败，请重试！"}),i.logger("drawCard",{level:4,message:"saveImageToPhotosAlbum 网络异常"}),a.saveCardTracking(0)}})},fail:function(t){wx.hideLoading(),a.showTips({content:"保存失败，请重试！"}),i.logger("drawCard",{level:3,message:"canvasToTempFilePath 异常"}),a.saveCardTracking(0)}})})},savePic:function(a){var t=this;if(wx.showLoading({title:"载入中",mask:!0}),a.detail.authSetting)return a.detail.authSetting["scope.writePhotosAlbum"]?(this.setData({openSettinged:!1}),void this.drawCard()):(wx.hideLoading(),this.showTips({content:"请同意授权！"}),this.saveCardTracking(0),void i.logger("savePic",{level:4,message:"scope.writePhotosAlbum 未授权"}));wx.getSetting({success:function(a){a.authSetting["scope.writePhotosAlbum"]?t.drawCard():wx.authorize({scope:"scope.writePhotosAlbum",success:function(){t.drawCard()},fail:function(){wx.hideLoading(),t.setData({openSettinged:!0}),t.showTips({content:"获取授权失败，请重试！"}),t.saveCardTracking(0)}})},fail:function(){wx.hideLoading(),t.showTips({content:"出现错误，请重试！"}),i.logger("savePic",{level:4,message:"网络异常"})}})},changeModal:function(){this.setData({showModal:!this.data.showModal})},onShareAppMessage:function(){return i.doTracking("actShare",JSON.stringify({page_path:"/pages/diy"}),Math.floor(Date.now()/1e3)),{title:i.globalData.diyInfo.share_title,path:"/pages/diy/diy?theme_id=".concat(i.globalData.theme_id,"&scene=").concat(i.globalData.sceneId),imageUrl:i.globalData.diyInfo.share_image_url}},doShareFriend:function(){i.doTracking("actSubmSendButton",JSON.stringify({cover_id:i.globalData.cover_id}),Math.floor(Date.now()/1e3)),wx.navigateTo({url:"/pages/cardDetail/cardDetail?cover_id=".concat(i.globalData.cover_id,"&theme_id=").concat(i.globalData.theme_id,"&cover_url=").concat(i.globalData.card_image)})},goToRule:function(){wx.navigateTo({url:"/pages/diy/rule/rule"})},onHide:function(){i.doTracking("actHang",JSON.stringify({page_path:"/pages/diy/result"}),Math.floor(Date.now()/1e3))},catchModal:function(){}})); 
 			}); 	require("pages/diy/result/result.js");
 		__wxRoute = 'pages/diy/rule/rule';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/diy/rule/rule.js';	define("pages/diy/rule/rule.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireDefault"),a=(e(require("../../../547BC8221C91398C321DA02558497AF5.js")),e(require("../../../4445B0631C91398C2223D86471997AF5.js")),e(require("vs-logger"))),t=getApp();Page(a.default.Page({data:{},onLoad:function(e){console.log(e);t.doTracking("actPv",JSON.stringify({page_path:"/pages/diy/rule",channel:t.globalData.channel,scene:t.globalData.sceneId}),Math.floor(Date.now()/1e3))},onHide:function(){t.doTracking("actHang",JSON.stringify({page_path:"/pages/diy/rule"}),Math.floor(Date.now()/1e3))},onShareAppMessage:function(){return t.doTracking("actShare",JSON.stringify({page_path:"/pages/diy"}),Math.floor(Date.now()/1e3)),{title:"定制星意卡，收获七夕惊喜",path:"/pages/diy/diy?theme_id=".concat(t.globalData.theme_id,"&scene=").concat(t.globalData.sceneId),imageUrl:"https://static-cdn.verystar.net/front/starbucks/weapp-starbucks-wsg3.0/share.jpeg"}}})); 
 			}); 	require("pages/diy/rule/rule.js");
 		__wxRoute = 'pages/crsmx/crsmx';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/crsmx/crsmx.js';	define("pages/crsmx/crsmx.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../@babel/runtime/helpers/interopRequireDefault"),e=t(require("../../@babel/runtime/helpers/objectSpread")),a=require("../../48B317D01C91398C2ED57FD7D3797AF5.js"),n=t(require("../../547BC8221C91398C321DA02558497AF5.js")),o=(t(require("../../4445B0631C91398C2223D86471997AF5.js")),t(require("vs-logger"))),s=getApp(),r={crsmx:{development:"https://teststar.sandload.cn",production:"https://starbucksxmas.sandload.cn"},cny:{development:"https://starbuckscampaignstest.sandload.cn/2019_cny/",production:"https://starbuckscampaigns.sandload.cn/2019_cny/"},earth:{development:"https://front-test.verystar.net/starbucks/earthday/",production:"https://front.verystar.net/starbucks/earthday/"},520:{development:"https://front-test.verystar.net/starbucks/520/",production:"https://front.verystar.net/starbucks/520/"},october:{development:"https://active.starbucks.com.cn/wechatcouponengine/StarbucksOctober/",production:"https://activity.starbucks.com.cn/wechatcouponengine/starbucksoctober/"},"2019xmas":{development:"https://static.egifting.starbucks.com.cn/xmasactivity-test/",production:"https://static.egifting.starbucks.com.cn/xmasactivity/"}},i={crsmx:"cardsharing",cny:"sbuxshare",earth:"earthshare",520:"520fenxiang",october:"octobershare","2019xmas":"sbuxwx2"},c={crsmx:{title:"只想把你，写进我的圣诞祝福里！",imageUrl:"../../image/share.jpg"},cny:{title:"拨打拜年热线，解锁红包券",imageUrl:"../../image/cny_share.jpg"},earth:{title:"环保星人邀请你参与环保打卡，领取福利",imageUrl:"../../image/earth_share.jpg"},520:{title:"有星人邀请你一起用星说爱，领取福利",imageUrl:"../../image/520_share.jpg"},october:{title:"",path:"",imageUrl:""},"2019xmas":{title:"星友分享了开“星”时刻，回顾美好，收获一份心意礼",imageUrl:"../../image/xmas_share.jpg"}};Page(o.default.Page({data:{currentSrc:"",customise:{},needAuth:null},path:"",type:"",channel:"",logPath:"",onLoad:function(t){var e=this;console.log(t,"crsmx_load"),"true"===t.authorize?(wx.showLoading(),wx.checkSession({success:function(){wx.getStorageSync("oid")?e.showAuthPopup():s.doAuthor().then(function(){e.showAuthPopup(),s.setVisitId()})},fail:function(){s.doAuthor().then(function(){e.showAuthPopup(),s.setVisitId()}),wx.hideLoading()}})):this.init(t)},init:function(t){var e=this;wx.showLoading(),this.channel=t.channel||s.globalData.channel||"";var a={};if(t.scene)decodeURIComponent(t.scene).split("&").forEach(function(t){var e=t.split("=");a[e[0]]=e[1]}),r[a.type]&&(this.path=r[a.type][s.globalData.env])&&(this.type=a.type),console.log(a,this.path),"520"!==a.type||this.channel||(this.channel="520scan"),"2019xmas"!==a.type||this.channel||(this.channel="sbuxwx1");else if(t.path)this.path=decodeURIComponent(t.path);else{if(!t.type)return void wx.showModal({title:"",content:"没有找到此页面",showCancel:!1,success:function(){wx.redirectTo({url:"/pages/index/index"})}});r[t.type]&&(this.path=r[t.type][s.globalData.env])&&(this.type=t.type)}var n=t.wid||a.wid;n&&(n=n.indexOf("xmas_181217_")>-1?n:"crsmx"==this.type?"xmas_181217_".concat(n):n),console.log(this.path,n),this.logPath=this.type?"type=".concat(this.type):"path=".concat(this.path),s.doTracking("actPv",JSON.stringify({page_path:"/pages/crsmx/".concat(this.logPath),channel:this.channel,scene:s.globalData.sceneId}),Math.floor(Date.now()/1e3)),this.getInfo(function(o,s){var r={openid:o,nickname:s.nickName?encodeURIComponent(s.nickName):"",channel:e.channel};["cny","october"].indexOf(e.type)>-1?r.avatarUrl=s.avatarUrl?encodeURIComponent(s.avatarUrl):"":"2019xmas"===e.type&&(r.unionid=wx.getStorageSync("unionId"));var i=t.workid||a.workid;if(i&&(r.workid=i),n&&(r.wid=n),["520","2019xmas"].indexOf(a.type)>-1&&a.qr_no&&(r.qr_no=a.qr_no),["520","2019xmas"].indexOf(e.type)>-1&&t.qr_no&&(r.qr_no=t.qr_no),r.qr_no)e.setSharedSrc(r);else{var c=e.getPathQuery(r);console.log("".concat(e.path,"?").concat(c),c,"path and pathQuery"),e.setData({needAuth:!1,currentSrc:"".concat(e.path,"?").concat(c)}),wx.hideLoading()}})},showAuthPopup:function(){wx.hideLoading(),this.setData({needAuth:!0}),this.setData({showAuthPopup:!0})},handleAuth:function(){this.setData({needAuth:!1}),this.init(this.options)},popupClose:function(t){"tap"===t.detail.type&&wx.redirectTo({url:"/pages/index/index"})},getPathQuery:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];console.log(t,"dddwe");var n=Object.keys(t),o="25f9e794323b453885f5181f1b624d0b",r={},i="",c="";for(var h in n=n.sort(),"2019xmas"===this.type&&(o="development"===s.globalData.env?"c79f770a2938fa6b331c9b44d16f39ba":"338b2772792bfc1e7bdc244220d05216"),n.forEach(function(e){r[e.toLowerCase()]=t[e]}),r)i+="&"+h+"="+r[h],""!==r[h]&&(c+="&"+h+"="+r[h]);return"crsmx"==this.type?i.substr(1):(c=(0,a.sha256)(c.substr(1)+o),e?"".concat(i.substr(1),"&sign=").concat(c):c)},getUserData:function(t){var e=this;return new Promise(function(a,r){var i=wx.getStorageSync("userInfo");if(i)return a(i);var c={open_id:t},h=s.getSignurature(c);wx.request({url:n.default.GET_USER_DATA,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:Object.assign(c,{sign:h}),success:function(t){if(10461!==t.data.retcode){if(200!=t.data.retcode)return s.logger(n.default.GET_USER_DATA,{level:3,message:t.data.msg||"获取用户信息失败",request:Object.assign(c,{sign:h}),response:t}),void a({});o.default.reinit({user:t.data.data}),a(t.data.data)}else e.showAuthPopup()},fail:function(){a({})},complete:function(){}})})},getInfo:function(t){var e=this,a=wx.getStorageSync("oid");a?this.getUserData(a).then(function(e){t(a,e)}):s.doAuthor().then(function(t){t.oid;e.showAuthPopup(),s.setVisitId()})},setSharedSrc:function(t){var e=this,a={open_id:t.openid,qr_code_no:t.qr_no};wx.request({url:n.default.GET_SHARER_INFO,header:{"content-type":"application/json"},method:"POST",data:Object.assign(a,{sign:this.getPathQuery(a,!1)}),success:function(o){if(200===o.data.retcode){var r=o.data.data;t.sharer_unionid=r.sharer_unionid,t.sharer_openid=r.sharer_openid,t.sharer_china_openid=r.sharer_china_openid;var i=e.getPathQuery(t);console.log("".concat(e.path,"?").concat(i),i,"path and pathQuery"),e.setData({needAuth:!1,currentSrc:"".concat(e.path,"?").concat(i)})}else s.logger(n.default.GET_SHARER_INFO,{level:3,message:o.data.msg||"获取分享者信息失败",request:a,response:o}),wx.reLaunch({url:"../error/error?api=getShareInfo&code="+o.data.retcode})},fail:function(t){console.error(t),s.logger(n.default.GET_SHARER_INFO,{level:3,message:t.errMsg||"获取分享者信息失败",request:a,response:t}),wx.reLaunch({url:"../error/error?api=getShareInfo"})},complete:function(){wx.hideLoading()}})},onHide:function(){s.doTracking("actHang",JSON.stringify({page_path:"/pages/crsmx/".concat(this.logPath)}),Math.floor(Date.now()/1e3))},onShareAppMessage:function(){s.doTracking("actShare",JSON.stringify({page_path:"/pages/crsmx/".concat(this.logPath)}),Math.floor(Date.now()/1e3));var t=(0,e.default)({title:"",imageUrl:"",path:""},c[this.type]);return console.log(t),t},bindGetMsg:function(t){var e=t.detail;console.log("dddd",e);var a=(e=e.data[e.data.length-1]).wid?"crsmx"==this.type?"xmas_181217_".concat(e.wid):e.wid:"",n="/pages/crsmx/crsmx?".concat(this.type?"type=".concat(this.type):"path=".concat(encodeURIComponent(this.path)),"&channel=").concat(i[this.type]||"").concat(a?"&wid=".concat(a):"").concat(e.code?"&qr_no=".concat(e.code):"");c[this.type]={title:e.title||e.text||c[this.type].title,imageUrl:e.img||e.url||c[this.type].imageUrl,path:e.path||n||c[this.type].path}}})); 
 			}); 	require("pages/crsmx/crsmx.js");
 		__wxRoute = 'pages/collectList/collectList';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/collectList/collectList.js';	define("pages/collectList/collectList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault"),t=e(require("../../@babel/runtime/helpers/defineProperty")),a=e(require("../../547BC8221C91398C321DA02558497AF5.js")),i=(e(require("../../2A9BA8A51C91398C4CFDC0A241697AF5.js")),e(require("vs-logger"))),o=getApp();Page(i.default.Page({data:{isIpx:null,btnClick:!1,collectList:[],noData:!1,tipsData:{show:"",text:"收藏成功",again:!1},maxTips:"",closeType:2,videoSize:{width:375,height:667},videoShow:!1},themeId:"",newThemeId:"",getList:function(e){var t=this;wx.showLoading({mask:!0});this.data.orders;var i={open_id:e||wx.getStorageSync("oid")},c=o.getSignurature(i);wx.request({url:a.default.GET_FAVORITE_LIST,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:Object.assign(i,{sign:c}),success:function(e){if(200!=e.data.retcode)return o.logger(a.default.GET_FAVORITE_LIST,{level:3,message:e.data.msg||"获取收藏卡面列表失败",request:Object.assign(s,{sign:c}),response:e}),void wx.reLaunch({url:"../error/error?api=getFavoriteCoverInfo&code="+e.data.retcode});var i=e.data.data,s={collectList:i.covers_info,noData:!1};0==i.covers_info.length&&(s.noData=!0,!wx.getStorageSync("collectFirst")&&setTimeout(function(){t.showVideo()},1e3));t.setData(s),t.themeId=i.favorite_theme_id,t.newThemeId=i.recommended_theme_id},fail:function(){wx.reLaunch({url:"../error/error?msg=getFavoriteCoverInfo_timeout"})},complete:function(){wx.hideLoading()}})},videoEnd:function(){this.setData({videoShow:!1})},closeVideo:function(){this.setData({videoShow:!1})},showVideo:function(){var e=o.globalData.sysinfo,t=parseInt(.75*e.windowWidth),a=parseInt(t/(this.data.videoSize.width/this.data.videoSize.height));this.setData({videoSize:{width:t%2==1?t+1:t,height:a%2==1?a+1:a},videoShow:!0}),this.videoContext=wx.createVideoContext("collectVideo"),this.videoContext.play(),wx.setStorageSync("collectFirst","1")},onLoad:function(e){this.setData({isIpx:o.globalData.isIpx}),o.doTracking("actPv",JSON.stringify({page_path:"/pages/collectList",channel:o.globalData.channel,scene:o.globalData.sceneId}),Math.floor(Date.now()/1e3))},onShow:function(){this.getList()},onHide:function(){o.doTracking("actHang",JSON.stringify({page_path:"/pages/collectList"}),Math.floor(Date.now()/1e3))},goDetail:function(e){var t=e.currentTarget.dataset.item,a=e.currentTarget.dataset.index,i=[];this.data.collectList.forEach(function(e){i.push(Object.assign({},e))}),o.globalData.collectInfo=i,o.doTracking("actClickCard",JSON.stringify({cover_id:t.cover_id}),Math.floor(Date.now()/1e3)),wx.navigateTo({url:"/pages/cardDetail/cardDetail?theme_id=".concat(this.themeId,"&collect_index=").concat(a,"&closeType=1")})},getNewCollect:function(){o.doTracking("actNewCollect",JSON.stringify({theme_id:this.newThemeId,status:0==this.data.collectList.length?0:1}),Math.floor(Date.now()/1e3)),wx.navigateTo({url:"/pages/cardDetail/cardDetail?theme_id=".concat(this.newThemeId,"&scene=").concat(o.globalData.sceneId,"&closeType=1")})},collectTips:{timeout:null,againParams:{}},collectFail:function(e,t){this.collectTips.againParams=e,this.setData({tipsData:Object.assign({show:2,again:!0,collectType:e.collectType})}),o.doTracking(t,JSON.stringify({cover_id:e.query.cover_id,status:0}),Math.floor(Date.now()/1e3)),this.closeTips()},collectAgain:function(){this.collectUpdate(this.collectTips.againParams,!0)},closeTips:function(){var e=this;clearTimeout(this.collectTips.timeout),this.collectTips.timeout=setTimeout(function(){e.setData({"tipsData.show":1})},2e3)},clickType:!1,clickTimeout:null,collectUpdate:function(e,i){var c=this;if(!this.clickType){this.clickType=!0,wx.showLoading({mask:!0});var s=e.query,n=e.collectType,l=e.index;this.collectTips.againParams={};var r=o.getSignurature(s),d=i?2==n?"actCollectAgain":"actCancellAgain":2==n?"actClickCollect":"actClickCancell";wx.request({url:a.default.UPDATE_FAVORITE,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",data:Object.assign(s,{sign:r}),success:function(e){var i;if(21009==e.data.retcode)return o.doTracking(d,JSON.stringify({cover_id:s.cover_id,status:0}),Math.floor(Date.now()/1e3)),void c.setData({maxTips:2});if(200!=e.data.retcode)return o.logger(a.default.UPDATE_FAVORITE,{level:3,message:e.data.msg||"更新收藏卡面失败",request:Object.assign(params,{sign:r}),response:e}),void c.collectFail({query:s,collectType:n,index:l},d);var u=e.data.data;c.setData((i={},(0,t.default)(i,"collectList[".concat(l,"].status"),u.status),(0,t.default)(i,"tipsData",Object.assign({show:2,collectType:n,again:!1})),i)),o.doTracking(d,JSON.stringify({cover_id:s.cover_id,status:1}),Math.floor(Date.now()/1e3)),c.closeTips()},fail:function(e){c.collectFail({query:s,collectType:n,index:l},d)},complete:function(){wx.hideLoading(),clearTimeout(c.clickTimeout),c.clickTimeout=setTimeout(function(){c.clickType=!1},500)}})}},collectControl:function(e){var t=e.currentTarget.dataset,a=t.index,i={open_id:wx.getStorageSync("oid"),cover_id:t.item.cover_id,cover_path:t.item.cover_path,cover_theme_name:t.item.cover_theme_name,id:t.item.id,status:t.item.status?0:1,is_custom:t.item.is_custom},o=t.item.status?1:2;this.collectUpdate({query:i,index:a,collectType:o})},closeMaxTips:function(){this.setData({maxTips:1})}})); 
 			}); 	require("pages/collectList/collectList.js");
 	