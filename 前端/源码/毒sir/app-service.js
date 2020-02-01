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
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'pageImage']]])
Z([[7],[3,'showRetryBtn']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onScroll'])
Z([3,'onScrollToBottom'])
Z([3,'scroll-container'])
Z([3,'true'])
Z([[7],[3,'scrollIntoView']])
Z(z[3])
Z(z[3])
Z([3,'section'])
Z([3,'sectionItem'])
Z([[7],[3,'list']])
Z([3,'row'])
Z([3,'rowItem'])
Z([[6],[[7],[3,'sectionItem']],[3,'movieList']])
Z([3,'onSeletedMovie'])
Z([3,'cell-container'])
Z([[7],[3,'row']])
Z([[7],[3,'section']])
Z([a,[3,'margin-left: '],[[2,'?:'],[[2,'=='],[[2,'%'],[[7],[3,'row']],[1,3]],[1,0]],[1,22],[1,16]],[3,'rpx;']])
Z([[6],[[7],[3,'rowItem']],[3,'isSelected']])
Z([[2,'&&'],[[7],[3,'list']],[[2,'>'],[[6],[[7],[3,'list']],[3,'length']],[1,0]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./pages/final_ad/final_ad.wxml','./pages/final_finish/final_finish.wxml','./pages/final_select/final_select.wxml','./pages/final_start/final_start.wxml','./pages/final_web/final_web.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var xC=_v()
_(r,xC)
if(_oz(z,0,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
if(_oz(z,1,e,s,gg)){oD.wxVkey=1
}
oD.wxXCkey=1
}
else{xC.wxVkey=2
}
xC.wxXCkey=1
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var hG=_mz(z,'scroll-view',['bindscroll',0,'bindscrolltolower',1,'class',1,'enableBackToTop',2,'scrollIntoView',3,'scrollWithAnimation',4,'scrollY',5],[],e,s,gg)
var oH=_v()
_(hG,oH)
var cI=function(lK,oJ,aL,gg){
var eN=_v()
_(aL,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_mz(z,'view',['catchtap',13,'class',1,'data-row',2,'data-sec',3,'style',4],[],xQ,oP,gg)
var hU=_v()
_(cT,hU)
if(_oz(z,18,xQ,oP,gg)){hU.wxVkey=1
}
hU.wxXCkey=1
_(oR,cT)
return oR
}
eN.wxXCkey=2
_2z(z,12,bO,lK,oJ,gg,eN,'rowItem','row','')
return aL
}
oH.wxXCkey=2
_2z(z,9,cI,e,s,gg,oH,'sectionItem','section','')
_(r,hG)
var cF=_v()
_(r,cF)
if(_oz(z,19,e,s,gg)){cF.wxVkey=1
}
cF.wxXCkey=1
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
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
	__wxAppCode__['pages/final_ad/final_ad.json'] = {"backgroundColor":"#100D0C","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/final_ad/final_ad.wxml'] = [$gwx, './pages/final_ad/final_ad.wxml'];else __wxAppCode__['pages/final_ad/final_ad.wxml'] = $gwx( './pages/final_ad/final_ad.wxml' );
		__wxAppCode__['pages/final_finish/final_finish.json'] = {"backgroundColor":"#fff","disableScroll":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/final_finish/final_finish.wxml'] = [$gwx, './pages/final_finish/final_finish.wxml'];else __wxAppCode__['pages/final_finish/final_finish.wxml'] = $gwx( './pages/final_finish/final_finish.wxml' );
		__wxAppCode__['pages/final_select/final_select.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/final_select/final_select.wxml'] = [$gwx, './pages/final_select/final_select.wxml'];else __wxAppCode__['pages/final_select/final_select.wxml'] = $gwx( './pages/final_select/final_select.wxml' );
		__wxAppCode__['pages/final_start/final_start.json'] = {"disableScroll":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/final_start/final_start.wxml'] = [$gwx, './pages/final_start/final_start.wxml'];else __wxAppCode__['pages/final_start/final_start.wxml'] = $gwx( './pages/final_start/final_start.wxml' );
		__wxAppCode__['pages/final_web/final_web.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/final_web/final_web.wxml'] = [$gwx, './pages/final_web/final_web.wxml'];else __wxAppCode__['pages/final_web/final_web.wxml'] = $gwx( './pages/final_web/final_web.wxml' );
	
	define("dataModule/finalDataModule.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){var e="",a=t.totalTicketCost+"";e=a.length>=10?a.substring(0,a.length-8)+"亿票房":9==a.length?a.substring(0,1)+"."+a.substring(1,3)+"亿票房":a.length>=5?a.substring(0,a.length-4)+"万票房":"0"==a?"票房更新中":a+"票房",t.boxOfficeString=e,t.note&&t.note.length>0&&(console.log(t.note),t.boxOfficeString=t.note),t.isSelected=!1,t.imageUrl+="-w175h250"}function e(t){var e=t.split("以上");return e&&2==e.length?e[0]+"票房以上"||t:t}var a=function(t){return t&&t.__esModule?t:{default:t}}(require("../module/DSHttpRequest"));module.exports={loadList:function(n){getApp().staticRequest(new a.default("ActivitySummary2019/Get/"+getApp().getAppName()+"/"+getApp().getVersion(),{},"GET"),function(a){if(1==a.code){var i=new Map;for(var o in a.data.groups){var r={title:a.data.setting.GROUP_TITLE[o],movieList:a.data.groups[o],sectionId:o,sectionTitle:e(a.data.setting.GROUP_TITLE[o])},s=!0,l=!1,u=void 0;try{for(var g,d=r.movieList[Symbol.iterator]();!(s=(g=d.next()).done);s=!0){var v=g.value;v.sectionId=o,t(v)}}catch(t){l=!0,u=t}finally{try{!s&&d.return&&d.return()}finally{if(l)throw u}}i.set(o,r)}var f=a.data.setting.SEASON_MOVIE_NUM;!(getApp().sysInfo.model.indexOf("iPhone")>=0)&&a.data.setting.SEASON_MOVIE_NUM_AZ&&(f=a.data.setting.SEASON_MOVIE_NUM_AZ);var m={};m.listMap=i,m.settingInfo={startTexts:a.data.setting.TITLE,qrcodes:a.data.setting.QRCODE,seasonnum:f,webUrl:a.data.setting.WEB_URL,webTitle:a.data.setting.WEB_TITLE},n&&n({data:m})}else n&&n({errMsg:a.msg?a.msg:"数据错误"})})},loadResult:function(t,e){var n={totalDuration:t.totalDuration,totalCost:t.totalCost};t.movieSeason&&(n.movieSeason=t.movieSeason),t.movieNum&&(n.movieNum=t.movieNum),getApp().dynamicRequest(new a.default("ActivitySummary2019/Result",n),function(t){1==t.code?e&&e({data:t.data}):e&&e({errMsg:t.msg?t.msg:"数据错误"})})},submitData:function(t){var e=[],n=!0,i=!1,o=void 0;try{for(var r,s=t[Symbol.iterator]();!(n=(r=s.next()).done);n=!0){var l=r.value;e.push(l.movieId)}}catch(t){i=!0,o=t}finally{try{!n&&s.return&&s.return()}finally{if(i)throw o}}var u={event:"ACTIVITYSUMMARY_2019_MOVIES",value:getApp().userInfo().openId+":"+e.join(",")};getApp().dynamicRequest(new a.default("Ser/Stat/Write/final2019",u))}}; 
 			}); 
		define("dataModule/userModule.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("../module/DSHttpRequest.js"));module.exports={loginWX:function(t,a,u,d){getApp().dynamicRequest(new e.default("WechatApp/QuickLogin",{code:t,encryptedData:a,iv:u,appName:getApp().getAppName()}),function(e){var t={code:e.code};1==e.code?t.data=e.data:t.errMsg=t.msg?t.msg:"数据错误",d&&d(t)})}}; 
 			}); 
		define("dsCanvas/__dsCanvas2D.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.DSCanvas2D=void 0;var t=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),r=require("./dsDrawable.js");exports.DSCanvas2D=function(){function a(t){e(this,a);var n=this;n.root=new r.Drawable(t);var i=wx.getSystemInfoSync();if(this.useHtmlCanvas=i.SDKVersion>="2.8.0",this.useHtmlCanvas)wx.createSelectorQuery().select("#"+t.canvasId).fields({node:!0,size:!0,rect:!0}).exec(function(e){try{n.rect={x:e[0].left,y:e[0].top,w:e[0].width,h:e[0].height}}catch(e){console.log(e)}var r=i.pixelRatio,a=e[0].node;a.width=t.w*r,a.height=t.h*r,a.imgCache=new Map,a.ctx=a.getContext("2d"),a.ctx.isHtmlCanvas=!0,a.ctx.getImage=function(e){var t=this.imgCache.get(e);if(!t){var r=e.replace(new RegExp("image[0-9]?.dushemovie.com","gi"),"html2.dushemovie.com/scdn");(t=this.createImage()).src=r,t.onload=function(){console.log("img loaded！"),t.isLoaded=!0},t.onerror=function(e){t.e=e,console.log("img load fail：",e)},this.imgCache.set(e,t)}return t}.bind(a),n.canvas=a,n.ctx=a.ctx,n.root.scale.x*=r,n.root.scale.y*=r,n.rect={x:e[0].left,y:e[0].top,w:e[0].width,h:e[0].height},(n.requestRender=!0)&&(n.requestRender=!1,n.draw(n.requestRenderCB))});else{var o=wx.createCanvasContext(t.canvasId);o.imgCache=new Map,o.getImage=function(e){var t=this.imgCache.get(e);if(!t){t={};var r=e.replace(new RegExp("image[0-9]?.dushemovie.com","gi"),"html2.dushemovie.com/scdn");-1==r.indexOf("https")&&(r=r.replace("http","https")),wx.getImageInfo({src:r,success:function(e){console.log("img loaded！",r),t.data=e},fail:function(e){t.e=e,console.log("img load fail：",e,r)}.bind(this)}),this.imgCache.set(e,t)}return t}.bind(o),this.ctx=o}}return t(a,[{key:"destroy",value:function(){this.renderTimer&&(clearInterval(this.renderTimer),this.renderTimer=null),this.ctx.imgCache&&(this.ctx.imgCache.clear(),this.ctx.imgCache=null)}},{key:"addDrawable",value:function(e){return this.root.addDrawable(e)}},{key:"insertDrawableAt",value:function(e,t){return this.root.insertDrawableAt(e,t)}},{key:"getDrawableNum",value:function(){return this.root.getDrawableNum()}},{key:"getDrawables",value:function(){return this.root.getDrawables()}},{key:"drawableAtIndex",value:function(e){return this.root.drawableAtIndex(e)}},{key:"indexOfDrawable",value:function(e){return this.root.indexOfDrawable(e)}},{key:"removeDrawableAt",value:function(e){return this.root.removeDrawableAt(e)}},{key:"removeDrawable",value:function(e){return this.root.removeDrawable(e)}},{key:"removeAllDrawable",value:function(){this.root.removeAllDrawable()}},{key:"draw",value:function(e){if(!this.ctx)return this.requestRender=!0,void(this.requestRenderCB=e);this.renderTimer||(this.renderTimer=setInterval(function(){var t=this.ctx,r=this.root;t.clearRect(r.rect.x,r.rect.y,r.rect.w,r.rect.h),this.useHtmlCanvas?r.draw(t)?console.log("rendering"):(console.log("rendering end and wait callback"),clearInterval(this.renderTimer),this.renderTimer=void 0,setTimeout(function(){e&&e()},200)):r.draw(t)?console.log("rendering"):(t.draw(!1,e),console.log("rendering end and wait callback"),clearInterval(this.renderTimer),this.renderTimer=void 0)}.bind(this),500))}},{key:"drawAndCacheToTempFilePath",value:function(e){var t=this;this.draw(function(){console.log("rendering end and wait cache"),setTimeout(function(){var r=t.ctx.isHtmlCanvas?t.canvas:t.ctx.canvasId,a=t.root.globalPoint(),n=t.root.globalScale();wx.canvasToTempFilePath({x:a.x*n.x,y:a.y*n.y,width:t.root.rect.w*n.x,height:t.root.rect.h*n.y,destWidth:t.root.rect.w*n.x,destHeight:t.root.rect.h*n.y,canvas:r,fileType:"fileType"in e?e.fileType:"jpg",success:function(t){console.log("drawAndCache success ",t),"function"==typeof e.success&&e.success({catchPath:t.tempFilePath})},fail:function(t){console.log("drawAndCache fail ",t),"function"==typeof e.fail&&e.fail(t)},complete:function(){"function"==typeof e.complete&&e.complete()}})},"delay"in e?e.delay:0)})}}]),a}(); 
 			}); 
		define("dsCanvas/demo.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t,i,o){this.position=new s.Vector3,this.previous=new s.Vector3,this.original=new s.Vector3,this.a=new s.Vector3(0,0,0),this.mass=o,this.invMass=1/o,this.tmp=new s.Vector3,this.tmp2=new s.Vector3,u(e,t,this.position),u(e,t,this.previous),u(e,t,this.original)}function t(e,t,i){x.subVectors(t.position,e.position);var o=x.length();if(0!==o){var a=x.multiplyScalar(1-i/o).multiplyScalar(.5);e.position.add(a),t.position.sub(a)}}function i(e){if(r){var i,o,a,n,d,h,p;if(l.enableWind){var c,w=new s.Vector3,u=G.index,V=G.attributes.normal;for(n=m.particles,i=0,a=u.count;i<a;i+=3)for(o=0;o<3;o++)c=u.getX(i+o),w.fromBufferAttribute(V,c),b.copy(w).normalize().multiplyScalar(w.dot(y)),n[c].addForce(b)}for(i=0,a=(n=m.particles).length;i<a;i++)(d=n[i]).addForce(f),d.integrate(v);for(a=(h=m.constraints).length,i=0;i<a;i++)t((p=h[i])[0],p[1],p[2]);if(M.z=90*-Math.sin(Date.now()/600),M.x=70*Math.cos(Date.now()/400),l.showBall)for(L.visible=!0,i=0,a=(n=m.particles).length;i<a;i++){var B=(d=n[i]).position;x.subVectors(B,M),x.length()<S&&(x.normalize().multiplyScalar(S),B.copy(M).add(x))}else L.visible=!1;for(i=0,a=(n=m.particles).length;i<a;i++)(B=(d=n[i]).position).y<-250&&(B.y=-250);for(i=0,a=g.length;i<a;i++){var P=n[g[i]];P.position.copy(P.original),P.previous.copy(P.original)}}else r=e}function o(){j.aspect=window.innerWidth/window.innerHeight,j.updateProjectionMatrix(),D.setSize(window.innerWidth,window.innerHeight)}function a(){requestAnimationFrame(a);var e=Date.now(),t=20*Math.cos(e/7e3)+40;y.set(Math.sin(e/2e3),Math.cos(e/3e3),Math.sin(e/1e3)),y.normalize(),y.multiplyScalar(t),i(e),n(),P.update()}function n(){for(var e=m.particles,t=0,i=e.length;t<i;t++){var o=e[t].position;G.attributes.position.setXYZ(t,o.x,o.y,o.z)}G.attributes.position.needsUpdate=!0,G.computeVertexNormals(),L.position.copy(M),D.render(z,j)}var r,s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(require("../build/three.module.js")),d=function(e){return e&&e.__esModule?e:{default:e}}(require("./jsm/libs/stats.module.js")),h=require("./jsm/libs/dat.gui.module.js"),p=require("./jsm/controls/OrbitControls.js"),l={enableWind:!0,showBall:!1,tooglePins:function(){g=V[~~(Math.random()*V.length)]}},c=.1,w=25,u=function(e,t){return function(i,o,a){var n=(i-.5)*e,r=(o+.5)*t;a.set(n,r,0)}}(10*w,10*w),m=new function(t,i){function o(e,i){return e+i*(t+1)}t=t||10,i=i||10,this.w=t,this.h=i;var a,n,r=[],s=[];for(n=0;n<=i;n++)for(a=0;a<=t;a++)r.push(new e(a/t,n/i,0,c));for(n=0;n<i;n++)for(a=0;a<t;a++)s.push([r[o(a,n)],r[o(a,n+1)],w]),s.push([r[o(a,n)],r[o(a+1,n)],w]);for(a=t,n=0;n<i;n++)s.push([r[o(a,n)],r[o(a,n+1)],w]);for(n=i,a=0;a<t;a++)s.push([r[o(a,n)],r[o(a+1,n)],w]);this.particles=r,this.constraints=s,this.index=o}(10,10),f=new s.Vector3(0,-981*1.4,0).multiplyScalar(c),v=.018*.018,g=[],y=new s.Vector3(0,0,0),M=new s.Vector3(0,-45,0),S=60,b=new s.Vector3;e.prototype.addForce=function(e){this.a.add(this.tmp2.copy(e).multiplyScalar(this.invMass))},e.prototype.integrate=function(e){var t=this.tmp.subVectors(this.position,this.previous);t.multiplyScalar(.97).add(this.position),t.add(this.a.multiplyScalar(e)),this.tmp=this.previous,this.previous=this.position,this.position=t,this.a.set(0,0,0)};var x=new s.Vector3,V=[],g=[6];V.push(g),g=[0,1,2,3,4,5,6,7,8,9,10],V.push(g),g=[0],V.push(g),g=[],V.push(g),g=[0,m.w],V.push(g),g=V[1];var B,P,j,z,D,G,L,W;!function(){B=document.createElement("div"),document.body.appendChild(B),(z=new s.Scene).background=new s.Color(13426943),z.fog=new s.Fog(13426943,500,1e4),(j=new s.PerspectiveCamera(30,window.innerWidth/window.innerHeight,1,1e4)).position.set(1e3,50,1500),z.add(new s.AmbientLight(6710886));var e=new s.DirectionalLight(14674943,1);e.position.set(50,200,100),e.position.multiplyScalar(1.3),e.castShadow=!0,e.shadow.mapSize.width=1024,e.shadow.mapSize.height=1024;var t=300;e.shadow.camera.left=-t,e.shadow.camera.right=t,e.shadow.camera.top=t,e.shadow.camera.bottom=-t,e.shadow.camera.far=1e3,z.add(e);var i=new s.TextureLoader,a=i.load("textures/patterns/circuit_pattern.png");a.anisotropy=16;var n=new s.MeshLambertMaterial({map:a,side:s.DoubleSide,alphaTest:.5});G=new s.ParametricBufferGeometry(u,m.w,m.h),(W=new s.Mesh(G,n)).position.set(0,0,0),W.castShadow=!0,z.add(W),W.customDepthMaterial=new s.MeshDepthMaterial({depthPacking:s.RGBADepthPacking,map:a,alphaTest:.5});var r=new s.SphereBufferGeometry(S,32,16),c=new s.MeshLambertMaterial;(L=new s.Mesh(r,c)).castShadow=!0,L.receiveShadow=!0,L.visible=!1,z.add(L);var w=i.load("textures/terrain/grasslight-big.jpg");w.wrapS=w.wrapT=s.RepeatWrapping,w.repeat.set(25,25),w.anisotropy=16;var f=new s.MeshLambertMaterial({map:w}),v=new s.Mesh(new s.PlaneBufferGeometry(2e4,2e4),f);v.position.y=-250,v.rotation.x=-Math.PI/2,v.receiveShadow=!0,z.add(v);var g=new s.BoxBufferGeometry(5,375,5),y=new s.MeshLambertMaterial;(v=new s.Mesh(g,y)).position.x=-125,v.position.y=-62,v.receiveShadow=!0,v.castShadow=!0,z.add(v),(v=new s.Mesh(g,y)).position.x=125,v.position.y=-62,v.receiveShadow=!0,v.castShadow=!0,z.add(v),(v=new s.Mesh(new s.BoxBufferGeometry(255,5,5),y)).position.y=125,v.position.x=0,v.receiveShadow=!0,v.castShadow=!0,z.add(v);var M=new s.BoxBufferGeometry(10,10,10);(v=new s.Mesh(M,y)).position.y=-250,v.position.x=125,v.receiveShadow=!0,v.castShadow=!0,z.add(v),(v=new s.Mesh(M,y)).position.y=-250,v.position.x=-125,v.receiveShadow=!0,v.castShadow=!0,z.add(v),(D=new s.WebGLRenderer({antialias:!0})).setPixelRatio(window.devicePixelRatio),D.setSize(window.innerWidth,window.innerHeight),B.appendChild(D.domElement),D.gammaInput=!0,D.gammaOutput=!0,D.shadowMap.enabled=!0;var b=new p.OrbitControls(j,D.domElement);b.maxPolarAngle=.5*Math.PI,b.minDistance=1e3,b.maxDistance=5e3,P=new d.default,B.appendChild(P.dom),window.addEventListener("resize",o,!1);var x=new h.GUI;x.add(l,"enableWind"),x.add(l,"showBall"),x.add(l,"tooglePins")}(),a(); 
 			}); 
		define("dsCanvas/dsCanvas2D.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.DSCanvas2D=void 0;var t=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),r=require("./dsDrawable.js");exports.DSCanvas2D=function(){function a(t){e(this,a),this.root=new r.Drawable(t),this.invalidateCount=0,this.useBlendMode=t.useBlendMode||!1,this.blendMode=t.blendMode;var n=this;wx.createSelectorQuery().select("#"+t.canvasId).fields({rect:!0}).exec(function(e){try{n.rect={x:e[0].left,y:e[0].top,w:e[0].width,h:e[0].height}}catch(e){console.log(e)}});var o=wx.createCanvasContext(t.canvasId);o.imgCache=new Map,o.getImage=function(e){var t=this.imgCache.get(e);if(!t){t={};var r=e.replace(new RegExp("image[0-9]?.dushemovie.com","gi"),"html2.dushemovie.com/scdn");-1==r.indexOf("https")&&(r=r.replace("http","https")),wx.getImageInfo({src:r,success:function(e){console.log("img loaded！",r),t.data=e},fail:function(e){t.e=e,console.log("img load fail：",e,r)}.bind(this)}),this.imgCache.set(e,t)}return t}.bind(o),this.ctx=o}return t(a,[{key:"destroy",value:function(){this.renderTimer&&(clearInterval(this.renderTimer),this.renderTimer=null),this.ctx.imgCache&&(this.ctx.imgCache.clear(),this.ctx.imgCache=null)}},{key:"addDrawable",value:function(e){return this.root.addDrawable(e)}},{key:"insertDrawableAt",value:function(e,t){return this.root.insertDrawableAt(e,t)}},{key:"getDrawableNum",value:function(){return this.root.getDrawableNum()}},{key:"getDrawables",value:function(){return this.root.getDrawables()}},{key:"drawableAtIndex",value:function(e){return this.root.drawableAtIndex(e)}},{key:"indexOfDrawable",value:function(e){return this.root.indexOfDrawable(e)}},{key:"removeDrawableAt",value:function(e){return this.root.removeDrawableAt(e)}},{key:"removeDrawable",value:function(e){return this.root.removeDrawable(e)}},{key:"removeAllDrawable",value:function(){this.root.removeAllDrawable()}},{key:"draw",value:function(e){this.renderTimer||(this.renderTimer=setInterval(function(){var t=this.ctx,r=this.root;t.clearRect(r.rect.x,r.rect.y,r.rect.w,r.rect.h),r.draw(t)?console.log("rendering"):(t.draw(!1,e),t.imgCache.clear(),console.log("rendering end and wait callback"),clearInterval(this.renderTimer),this.renderTimer=void 0)}.bind(this),500))}},{key:"drawAndCacheToTempFilePath",value:function(e){var t=this;this.draw(function(){console.log("rendering end and wait cache"),setTimeout(function(){var r=t.ctx,a=t.root.globalPoint(),n=t.root.globalScale();wx.canvasToTempFilePath({x:a.x*n.x,y:a.y*n.y,width:t.root.rect.w*n.x,height:t.root.rect.h*n.y,destWidth:t.root.rect.w*n.x,destHeight:t.root.rect.h*n.y,canvasId:r.canvasId,fileType:"fileType"in e?e.fileType:"jpg",success:function(t){console.log("drawAndCache success ",t),"function"==typeof e.success&&e.success({catchPath:t.tempFilePath})},fail:function(t){console.log("drawAndCache fail ",t),"function"==typeof e.fail&&e.fail(t)},complete:function(){"function"==typeof e.complete&&e.complete()}})},"delay"in e?e.delay:0)})}}]),a}(); 
 			}); 
		define("dsCanvas/dsDrawable.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function e(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function t(e,i,r){null===e&&(e=Function.prototype);var a=Object.getOwnPropertyDescriptor(e,i);if(void 0===a){var n=Object.getPrototypeOf(e);return null===n?void 0:t(n,i,r)}if("value"in a)return a.value;var h=a.get;if(void 0!==h)return h.call(r)},n=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),h=function(){function t(e){i(this,t),this.rect={},this.scale={},this.transformAxis={},this.rect.x=e.x||0,this.rect.y=e.y||0,this.rect.w=e.w||0,this.rect.h=e.h||0,this.degree=e.degree||0,this.clip=e.clip,this.alpha=e.alpha||1,this.bgColor=e.bgColor,this.gradient="gradient"in e?e.gradient:null,this.scale.x=e.scaleX||1,this.scale.y=e.scaleY||1,this.transformAxis.x=e.transformAxisX||0,this.transformAxis.y=e.transformAxisY||0,this.radius=e.radius?e.radius:0,this.visible=!("visible"in e)||e.visible,this.drawables=[]}return n(t,[{key:"addDrawable",value:function(e){return e&&e instanceof t&&!e.parent&&(e.parent=this,this.drawables.push(e)),this}},{key:"insertDrawableAt",value:function(e,i){return i&&i instanceof t&&!i.parent&&(i.parent=this,this.drawables.splice(e,0,i)),this}},{key:"getDrawableNum",value:function(){return this.drawables.length}},{key:"getDrawables",value:function(){return this.drawables}},{key:"drawableAtIndex",value:function(t){return this.drawables[t]}},{key:"indexOfDrawable",value:function(t){return this.drawables.indexOf(t)}},{key:"removeDrawableAt",value:function(t){if(t>=0&&t<this.drawables.length){var e=this.drawables.splice(t,1);return e.parent=null,e}return null}},{key:"removeDrawable",value:function(t){var e=this.drawables.indexOf(t);return this.removeDrawableAt(e)}},{key:"removeAllDrawable",value:function(){var t=!0,e=!1,i=void 0;try{for(var r,a=this.drawables[Symbol.iterator]();!(t=(r=a.next()).done);t=!0)r.value.parent=null}catch(t){e=!0,i=t}finally{try{!t&&a.return&&a.return()}finally{if(e)throw i}}this.drawables=[]}},{key:"setAnimation",value:function(t){this.am=t,t.start()}},{key:"globalPoint",value:function(){for(var t=this.rect.x,e=this.rect.y,i=this.parent;i;)t+=i.rect.x,e+=i.rect.y,i=i.parent;return{x:t,y:e}}},{key:"globalScale",value:function(){for(var t=this.scale.x,e=this.scale.y,i=this.parent;i;)t*=i.scale.x,e*=i.scale.y,i=i.parent;return{x:t,y:e}}},{key:"isRectContainPoint",value:function(t,e){return t.x<=e.x&&t.y<=e.y&&t.x+t.w>=e.x&&t.y+t.h>=e.y}},{key:"draw",value:function(e){if(!this.visible)return console.log("drawable invisible",this),!1;var i=!1;if(this.am&&this.am.started&&!this.am.ended&&(i=this.am.update(this)),e.save(),e.translate(this.rect.x+this.transformAxis.x,this.rect.y+this.transformAxis.y),e.rotate(.017453292522*this.degree),e.scale(this.scale.x,this.scale.y),e.translate(-this.transformAxis.x,-this.transformAxis.y),e.globalAlpha=this.alpha,this.clip&&(e.beginPath(),e.rect(0,0,this.rect.w,this.rect.h),e.clip(),e.closePath()),this.radius>0){var r=this.radius,a=this.radius,n=this.rect.w-this.radius,h=this.radius,s=this.radius,o=this.rect.h-this.radius,l=this.rect.w-this.radius,c=this.rect.h-this.radius;e.beginPath(),e.arc(l,c,this.radius,0,.5*Math.PI),e.arc(s,o,this.radius,.5*Math.PI,Math.PI),e.arc(r,a,this.radius,Math.PI,1.5*Math.PI),e.arc(n,h,this.radius,1.5*Math.PI,2*Math.PI),e.clip(),e.closePath(),e.fill()}if(this.gradient){if(!this.grd){var u=this.gradient.direction?this.gradient.direction:t.Gradient_Horizontal;this.grd=e.createLinearGradient(0,0,(u&t.Gradient_Horizontal)==t.Gradient_Horizontal?this.rect.w:0,(u&t.Gradient_Vertical)==t.Gradient_Vertical?this.rect.h:0);var f=this.gradient.colors;if(1==f.length)this.grd.addColorStop(1,f[0]);else for(var d=0;d<f.length;++d)this.grd.addColorStop(d/(f.length-1),f[d])}e.fillStyle=this.grd,e.fillRect(0,0,this.rect.w,this.rect.h)}else this.bgColor&&(e.fillStyle=this.bgColor,e.fillRect(0,0,this.rect.w,this.rect.h));this.onDraw(e);var m=this.dispatchDraw(e);return m&&console.log(this),i|=m,e.restore(),i}},{key:"dispatchDraw",value:function(t){var e=!1,i=!0,r=!1,a=void 0;try{for(var n,h=this.drawables[Symbol.iterator]();!(i=(n=h.next()).done);i=!0)e|=n.value.draw(t)}catch(t){r=!0,a=t}finally{try{!i&&h.return&&h.return()}finally{if(r)throw a}}return e}},{key:"onDraw",value:function(t){}}]),t}();h.Gradient_Horizontal=1,h.Gradient_Vertical=16;var s=function(s){function o(e){i(this,o);var r=t(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e));return r.mode=e.mode?e.mode:"scaleToFill","imgSource"in e&&(r.imgSource=e.imgSource),r}return e(o,h),n(o,[{key:"draw",value:function(t){if(!this.renderImg&&this.imgSource){var e=function(t){var e=t.path;e.indexOf("tmp")>=0||e.indexOf("store")>=0?this.renderImg=e:this.renderImg="/"+e,t.width&&t.height&&(this.imgSrcRect={x:0,y:0,w:t.width,h:t.height})}.bind(this);if("object"==r(this.imgSource))if(t.isHtmlCanvas){var i=this.imgSource.path;i.indexOf("tmp")<0&&i.indexOf("store")<0&&(i="/"+i);var n=t.getImage(i);if(!n.isLoaded)return n.e&&console.log("draw image fail ",n.e),a(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"draw",this).call(this,t)|!n.e;this.renderImg=n,n.width&&n.height&&(this.imgSrcRect={x:0,y:0,w:n.width,h:n.height})}else e(this.imgSource);else if("string"==typeof this.imgSource){var h=t.getImage(this.imgSource);if(h.data)e(h.data);else{if(!h.isLoaded)return h.e&&console.log("draw image fail ",h.e),a(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"draw",this).call(this,t)|!h.e;this.renderImg=h,h.width&&h.height&&(this.imgSrcRect={x:0,y:0,w:h.width,h:h.height})}}}return a(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"draw",this).call(this,t)}},{key:"onDraw",value:function(t){if(this.renderImg&&this.rect.w>0&&this.rect.h>0)if("scaleToFill"==this.mode)t.drawImage(this.renderImg,0,0,this.rect.w,this.rect.h);else{if(!this.imgSrcRect||0==this.imgSrcRect.w||0==this.imgSrcRect.h)return void console.log("invalid image size");var e=this.imgSrcRect,i=this.rect,r=0,a=0,n=0,h=0,s=0,o=0,l=0,c=0;if("aspectFit"==this.mode){r=a=0,n=e.w,h=e.h;var u=e.w/e.h;e.w<=e.h?c=(l=Math.min(i.h*u,i.w))/u:l=(c=Math.min(i.w/u,i.h))*u,s=(i.w-l)/2,o=(i.h-c)/2}else if("aspectFill"==this.mode){var f=i.w/i.h,d=e.w/e.h;e.w,e.h,f>d?(n=e.w,h=Math.min(n/f,e.h)):(h=e.h,n=Math.min(h*f,e.w)),r=(e.w-n)/2,a=(e.h-h)/2,s=0,o=0,l=i.w,c=i.h}else"top"==this.mode?(r=Math.max(0,e.w-i.w)/2,s=Math.max(0,i.w-e.w)/2,a=o=0,n=l=Math.min(e.w,i.w),h=c=Math.min(e.h,i.h)):"bottom"==this.mode?(r=Math.max(0,e.w-i.w)/2,s=Math.max(0,i.w-e.w)/2,a=Math.max(0,e.h-i.h),o=Math.max(0,i.h-e.h),n=l=Math.min(e.w,i.w),h=c=Math.min(e.h,i.h)):"center"==this.mode?(r=Math.max(0,e.w-i.w)/2,a=Math.max(0,e.h-i.h)/2,n=l=Math.min(e.w,i.w),h=c=Math.min(e.h,i.h),s=Math.max(0,i.w-e.w)/2,o=Math.max(0,i.h-e.h)/2):"left"==this.mode?(r=s=0,a=Math.max(0,e.h-i.h)/2,o=Math.max(0,i.h-e.h)/2,n=l=Math.min(e.w,i.w),h=c=Math.min(e.h,i.h)):"right"==this.mode?(r=Math.max(0,e.w-i.w),a=Math.max(0,e.h-i.h)/2,s=Math.max(0,i.w-e.w),o=Math.max(0,i.h-e.h)/2,n=l=Math.min(e.w,i.w),h=c=Math.min(e.h,i.h)):"top left"==this.mode?(r=s=0,a=o=0,n=l=Math.min(e.w,i.w),h=c=Math.min(e.h,i.h)):"top right"==this.mode?(r=Math.max(0,e.w-i.w),s=Math.max(0,i.w-e.w),a=o=0,n=l=Math.min(e.w,i.w),h=c=Math.min(e.h,i.h)):"bottom left"==this.mode?(r=s=0,a=Math.max(0,e.h-i.h),o=Math.max(0,i.h-e.h),n=l=Math.min(e.w,i.w),h=c=Math.min(e.h,i.h)):"bottom right"==this.mode?(r=Math.max(0,e.w-i.w),s=Math.max(0,i.w-e.w),a=Math.max(0,e.h-i.h),o=Math.max(0,i.h-e.h),n=l=Math.min(e.w,i.w),h=c=Math.min(e.h,i.h)):(console.log("not support mode"),r=e.x,a=e.y,n=e.w,h=e.h,s=i.x,o=i.y,l=i.w,c=i.h);t.drawImage(this.renderImg,r,a,n,h,s,o,l,c)}}}]),o}(),o=function(r){function a(e){i(this,a);var r=t(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));r.lineCount=1,r.numberOfLine=e.numberOfLine?e.numberOfLine:16777215,r.lineHeight=e.lineHeight?e.lineHeight:r.rect.h,r.lineSpace=e.lineSpace?e.lineSpace:2,r.font=e.font?e.font:a.sLastFont;var n="nodes"in e?e.nodes:[];r.nodes=[];var h=!0,s=!1,o=void 0;try{for(var l,c=n[Symbol.iterator]();!(h=(l=c.next()).done);h=!0){var u=l.value,f={};f.text="string"==typeof u.text||"number"==typeof u.text?u.text:"非String类型",f.color=u.color?u.color:"#fff",f.font=u.font?u.font:r.font,f.textAlign=u.textAlign?u.textAlign:"left",f.baseline=u.baseline?u.baseline:"top",f.letterSpacing=u.letterSpacing?u.letterSpacing:0,r.nodes.push(f)}}catch(t){s=!0,o=t}finally{try{!h&&c.return&&c.return()}finally{if(s)throw o}}return r}return e(a,h),n(a,[{key:"onDraw",value:function(t){var e=this.numberOfLine,i=this.lineHeight,r=this.lineSpace;if(!this.drawNodes){this.drawNodes=[];var n=1,h=0,s=!0,o=!1,l=void 0;try{for(var c,u=this.nodes[Symbol.iterator]();!(s=(c=u.next()).done);s=!0){var f=c.value;t.save(),"font"in f?(t.font=f.font,a.sLastFont=t.font):t.font=a.sLastFont;for(var d=this.rect.w,m=t.measureText("毒").width,w=f.text,y=w.length,g=0;g<y&&n<=e;){var p=d-h+f.letterSpacing,v=Math.floor(p/m),x=y-g,b=(x>v?v:x)-1,M=w.substr(g,b),S=t.measureText(M).width+M.length*f.letterSpacing;do{var _=w[g+b++]+"";if(!((S+=t.measureText(_).width+f.letterSpacing)<=p))break;M+=_}while(g+b<y);g+=M.length,n==e&&g<=y-1&&(M=M.substr(0,M.length-1)+"..."),this.drawNodes.push({x:h,y:(n-1)*(i+r),text:M,style:f}),h=S>=p?0:h+S,n+=S>=p?1:0}t.restore()}}catch(t){o=!0,l=t}finally{try{!s&&u.return&&u.return()}finally{if(o)throw l}}this.lineCount=n}var O=!0,P=!1,A=void 0;try{for(var k,I=this.drawNodes[Symbol.iterator]();!(O=(k=I.next()).done);O=!0){var D=k.value;t.save();var j=D.style;if("font"in j?(t.font=j.font,a.sLastFont=j.font):t.font=a.sLastFont,t.fillStyle=j.color,t.textAlign=j.textAlign,"center"==j.textAlign?t.translate(this.rect.w/2,0):"right"==j.textAlign&&t.translate(this.rect.w,0),t.textBaseline=j.baseline,"middle"==j.baseline){var C=Math.max(0,.5*(this.rect.h-this.lineCount*(i+r)));t.translate(0,C+i/2)}else"bottom"==j.baseline&&t.translate(0,i);if(D.style.letterSpacing>0){var L=0,T=!0,F=!1,R=void 0;try{for(var H,G=D.text[Symbol.iterator]();!(T=(H=G.next()).done);T=!0){var z=H.value;t.fillText(z,D.x+L,D.y),L+=D.style.letterSpacing+t.measureText(z).width}}catch(t){F=!0,R=t}finally{try{!T&&G.return&&G.return()}finally{if(F)throw R}}}else t.fillText(D.text,D.x,D.y);t.restore()}}catch(t){P=!0,A=t}finally{try{!O&&I.return&&I.return()}finally{if(P)throw A}}}}],[{key:"measureTextHeight",value:function(t){var e=t.ctx;if(e){var i="number"==typeof t.lineSpace?t.lineSpace:2;e.save(),e.font=t.font;for(var r=t.text.length,a=0,n=0;a<r;){var h=0,s="",o=!1;do{s=t.text.substr(a,++h),o=a+h>=r}while(!o&&e.measureText(s+(o?"":t.text[a+h])).width<=t.width);a+=s.length,n++}return e.restore(),n*(t.lineHeight+i)}}}]),a}();o.sLastFont="normal 400 24px PingFangSC-Regular",exports.Drawable=h,exports.ImageDrawable=s,exports.TextDrawable=o; 
 			}); 
		define("module/DSAccountManager.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var o=function(){function e(e,o){for(var s=0;s<o.length;s++){var n=o[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(o,s,n){return s&&e(o.prototype,s),n&&e(o,n),o}}(),s=require("../dataModule/userModule.js"),n=void 0,t=function(){function t(){if(e(this,t),n)return n;this.isLogin=!1,this.reqeusts=[],n=this}return o(t,[{key:"loginWithWX",value:function(e){var o=this;return this.isLogin?(e&&e.hasOwnProperty("success")&&e.success(this.userInfo),void(e&&e.hasOwnProperty("complete")&&e.complete())):this.isLoginProgress?(console.log("登录操作正在进行中，请稍后"),void this.reqeusts.push(e)):(this.isLoginProgress=!0,this.userInfo=wx.getStorageSync("ds_user_info"),void(this.userInfo&&this.userInfo.openId?(this.isLogin=!0,e&&e.hasOwnProperty("success")&&e.success(this.userInfo),e&&e.hasOwnProperty("complete")&&e.complete(),this.isLoginProgress=!1,this.reqeusts.length>0&&this.loginWithWX(this.reqeusts.shift())):new Promise(function(e,o){wx.login({timeout:15e3,success:function(o){console.log(o),e(o.code)},fail:function(e){o(e)}})}).then(function(e){return new Promise(function(s,n){wx.getUserInfo({withCredentials:!0,success:function(o){this.userInfo=o.userInfo,s({code:e,encryptedData:o.encryptedData,iv:o.iv})}.bind(o),fail:function(e){n(e)}})})}).then(function(n){s.loginWX(n.code,n.encryptedData,n.iv,function(s){s.data?(console.log("登录成功",s.data),o.userInfo.openId=s.data.key,wx.setStorageSync("ds_user_info",o.userInfo),o.isLogin=!0,e&&e.hasOwnProperty("success")&&e.success(o.userInfo)):(console.log("登录失败",s.errMsg),o.isLogin=!1,e&&e.hasOwnProperty("fail")&&e.fail(s)),e&&e.hasOwnProperty("complete")&&e.complete(),o.isLoginProgress=!1,o.reqeusts.length>0&&o.loginWithWX(o.reqeusts.shift())})}).catch(function(s){o.isLogin=!1,console.log(s),e&&e.hasOwnProperty("fail")&&e.fail(s),e&&e.hasOwnProperty("complete")&&e.complete(),o.isLoginProgress=!1,o.reqeusts.length>0&&o.loginWithWX(o.reqeusts.shift())})))}},{key:"logout",value:function(){wx.removeStorageSync("ds_user_info"),this.isLogin=!1,this.isLoginProgress=!1}}],[{key:"logout",value:function(){n||(n=new t),n.logout()}},{key:"isLogin",value:function(){return n||(n=new t),n.isLogin}},{key:"userInfo",value:function(){return n||(n=new t),n.userInfo||wx.getStorageSync("ds_user_info")}},{key:"checkLoginState",value:function(e){n||(n=new t),n.isLogin?(e&&e.hasOwnProperty("success")&&e.success(n.userInfo),e&&e.hasOwnProperty("complete")&&e.complete()):wx.getSetting({success:function(o){o.authSetting["scope.userInfo"]?n.loginWithWX(e):(console.log("authorize:fail scope unauthorized"),n.logout(),e&&e.hasOwnProperty("fail")&&e.fail({code:-11,errMsg:"authorize:fail scope unauthorized"}),e&&e.hasOwnProperty("complete")&&e.complete())}.bind(this),fail:function(){wx.showToast({title:"授权失败，请重试",icon:"none"})}})}}]),t}();exports.default=t; 
 			}); 
		define("module/DSDynamicHttpRequestManager.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),u=function e(t,r,o){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,r);if(void 0===n){var u=Object.getPrototypeOf(t);return null===u?void 0:e(u,r,o)}if("value"in n)return n.value;var i=n.get;if(void 0!==i)return i.call(o)},i=e(require("./DSHttpRequestManager.js")),s=e(require("./DSAccountManager.js")),a=function(e){function a(){return t(this,a),r(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return o(a,i.default),n(a,[{key:"reLoginBeforeRequest",value:function(e,t){s.default.needReLogin(),s.default.checkLoginState({success:function(r){e.requestData.userCode=r.userCode,e.requestData.s=r.sessionId,this.request(e,t)}.bind(this),fail:function(e){console.log("自动重登录失败",e),t&&t(e)}})}},{key:"request",value:function(e,t){var r=this;e.requestData.hasOwnProperty("userCode")&&!s.default.userInfo().userCode?this.reLoginBeforeRequest(e,t):u(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"request",this).call(this,e,function(o){-201==o.code&&-1==e.uri.indexOf("CheckSession")&&-1==e.uri.indexOf("WechatAppLogin")?r.reLoginBeforeRequest(e,t):t&&t(o)})}}]),a}();exports.default=a; 
 			}); 
		define("module/DSFormIdManager.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var o=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),n=e(require("./DSHttpRequest.js")),r=e(require("./DSHttpRequestManager.js")),s=void 0,i=function(){function e(){if(t(this,e),s)return s;this.formIds=[],s=this}return o(e,[{key:"appendFormId",value:function(e){if(getApp().isLogin())this.formIds.push({time:(new Date).getTime()/1e3,id:e}),this.formIds.length>=200&&this.submitFormIds();else{var t;wx.getStorage({key:"ds_formIds_cache",success:function(e){t=e.data},fail:function(e){t=[]},complete:function(){t.push({time:(new Date).getTime()/1e3,id:e}),wx.setStorage({key:"ds_formIds_cache",data:t,success:function(t){console.log("cache formId success:"+e)},fail:function(e){console.log("cache formId fail:"+e)}})}})}}},{key:"enterFrontground",value:function(){console.log("enterFrontground"),this.handle=setTimeout(function(){this.submitFormIds()}.bind(this),6e4)}},{key:"enterBackground",value:function(){console.log("enterBackground"),this.submitFormIds(),this.handle&&(clearTimeout(this.handle),this.handle=null)}},{key:"submitFormIds",value:function(){if(getApp().isLogin()){var e=this.formIds;wx.getStorage({key:"ds_formIds_cache",success:function(t){e=e.concat(t.data)}.bind(this),complete:function(){var t=this;console.log("formIds:",e);var o=(new Date).getTime()/1e3,s=[],i=!0,a=!1,u=void 0;try{for(var c,d=e[Symbol.iterator]();!(i=(c=d.next()).done);i=!0){var f=c.value;f.hasOwnProperty("time")&&o-f.time<604800&&(s.push(f.id),console.log("interval",o-f.time))}}catch(e){a=!0,u=e}finally{try{!i&&d.return&&d.return()}finally{if(a)throw u}}if(s.length>0){if(getApp().sendEvent("上报用户收集formId",{count:s.length+"",openId:getApp().userInfo().openId+""}),"devtools"==getApp().sysInfo.platform)return this.formIds=[],void wx.removeStorage({key:"ds_formIds_cache"});new r.default(getApp().dynamicDomain).request(new n.default("WechatApp/QuickCollectKey",{appName:getApp().getAppName(),key:getApp().userInfo().openId,formIds:s}),function(e){1==e.code&&(t.formIds=[],wx.removeStorage({key:"ds_formIds_cache"}))})}else wx.removeStorage({key:"ds_formIds_cache"})}.bind(this)})}else console.log("用户未登录")}}],[{key:"singleton",value:function(){return new e}}]),e}();exports.default=i; 
 			}); 
		define("module/DSHttpRequest.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),i=function(){function i(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"POST",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3;if(t(this,i),this.uri=e,this.requestData=n,this.method=r,this.retryTimes=s,"GET"==this.method){var o="";for(var a in this.requestData)o+="/"+this.requestData[a];this.uri+=o}}return e(i,[{key:"doRequest",value:function(t,e){var i=t+"/"+this.uri;console.log(this.method,i,this.requestData),wx.request({url:i,data:this.requestData,header:{"Content-Type":"application/json"},method:this.method,success:function(t){console.log("response："+this.uri+"\n",t.data),e&&e(this,t.data)}.bind(this),fail:function(t){console.log("response："+this.uri+" fail \n",t),e&&e(this,t)}.bind(this)})}}]),i}();exports.default=i; 
 			}); 
		define("module/DSHttpRequestManager.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),n=function(){function n(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";e(this,n),this.domain=t,this.apiKey=r,this.reqQueue=[]}return t(n,[{key:"request",value:function(e,t){this.requestNow(e,t)}},{key:"requestNow",value:function(e,t){var n=function(e,n){n.result||n.hasOwnProperty("code")?t&&t(n):n.errMsg&&n.errMsg.indexOf("timeout")>=0&&--e.retryTimes>=0?setTimeout(function(){console.log("request retry"),this.requestNow(e,t)}.bind(this),500):"string"==typeof n?t&&t({code:-1,msg:n}):(n.hasOwnProperty("code")||(n.code=-1),t&&t(n))}.bind(this);e.doRequest(this.domain+"/"+this.apiKey,n)}},{key:"parallelRequest",value:function(e,t){var n=this,r=e.map(function(e){return new Promise(function(t,r){n.request(e,t)})});Promise.all(r).then(function(e){t&&t(e)})}}]),n}();exports.default=n; 
 			}); 
		define("utils/DSDownloadUtils.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e){var n=0;if(0==(e+="").length)return n;for(var o=0;o<e.length;o++)n=(n<<5)-n+e.charCodeAt(o),n&=n;return n}Object.defineProperty(exports,"__esModule",{value:!0});var o=function(){function e(e,n){for(var o=0;o<n.length;o++){var i=n[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,o,i){return o&&e(n.prototype,o),i&&e(n,i),n}}(),i=void 0;exports.DSDownloadUtils=function(){function t(){if(e(this,t),i)return i;this.downloadFiles=new Map,i=this}return o(t,[{key:"downloadFile",value:function(e,o,i){if(e){console.log("download url:"+e);var t=n(e)+"",l=function(){wx.downloadFile({url:e,header:{"Content-type":o||"image/jpg"},success:function(e){console.log("download file success:",e),this.downloadFiles.set(t,e.tempFilePath),i&&i(e)}.bind(this),fail:function(e){console.log("download file fail:",e),i&&i({errMsg:"文件加载失败"})}}).onProgressUpdate(function(e){console.log("progress:",e)})}.bind(this),s=this.downloadFiles.get(t);s?wx.getFileInfo({filePath:s,success:function(e){e.filePath=s,i&&i(e),console.log("get file success:",e)},fail:function(e){this.downloadFiles.delete(t),l()}.bind(this)}):l()}else i({errMsg:"无效的文件路径"})}},{key:"downloadImage",value:function(e,n){if(e){({originUrl:e,callback:n,retryTimes:3,downAction:function(){var e=this.originUrl.replace(new RegExp("image[0-9]?.dushemovie.com","gi"),"html2.dushemovie.com/scdn");-1==e.indexOf("https")&&(e=e.replace("http","https")),console.log("download url:"+e),wx.getImageInfo({src:e,success:function(e){console.log("download image success:",e),this.callback&&this.callback(e)}.bind(this),fail:function(n){var o=this;console.log("download image fail:",n),--this.retryTimes>0?setTimeout(function(){o.downAction()},200):this.callback&&this.callback({errMsg:"图片加载失败："+e})}.bind(this)})}}).downAction()}else n({errMsg:"无效的图片路径"})}},{key:"downloadImages",value:function(e){var n=this;if("imgUrls"in e&&e.imgUrls instanceof Array)if(0!=e.imgUrls.length){var o=e.imgUrls.length,i=0,t=e.imgUrls.map(function(t){return new Promise(function(l,s){var r=function(n){"path"in n?("function"==typeof e.progress&&e.progress(++i/o),l(n)):"function"==typeof e.withFailReplace&&""!=(this.replaceUrl=e.withFailReplace(t))?this.downloadImage(this.replaceUrl,r):s(new Error(n.errMsg))}.bind(n);n.downloadImage(t,r)})});Promise.all(t).then(function(n){"function"==typeof e.success&&e.success(n),"function"==typeof e.complete&&e.complete()}).catch(function(n){"function"==typeof e.fail&&e.fail({errMsg:n.message}),"function"==e.complete&&e.complete()})}else e.fail&&e.fail({errMsg:"empty urls"});else e.fail&&e.fail({errMsg:"invalide urls"})}}]),t}(); 
 			}); 
		define("utils/ald-stat-conf.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";exports.app_key="a76ef948e89e5a3d61e2b985d240da31",exports.getLocation=!1,exports.plugin=!1,exports.useOpen=!1; 
 			}); 
		define("utils/ald-stat.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(n,e){"object"==("undefined"==typeof exports?"undefined":t(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n.Ald=e()}(void 0,function(){function n(){"function"==typeof ft&&""===T&&ft().then(function(t){28===t.length&&(T=t,wx.setStorageSync("aldstat_op",t))})}function e(t){this.app=t}function o(t){C=y(),Q=t,st=t.scene,this.aldstat=new e(this)}function r(t){n();var e;e=t.scene!=st,st=t.scene,N=0,Q=t,K=t.query.ald_share_src,V=t.query.aldsrc||"",W=t.query.ald_share_src,rt||(J=!1),rt=!1,(0!==E&&Date.now()-E>3e4||e)&&(it||(H=y(),U=Date.now(),ct=0)),0!==E&&Date.now()-E<3e4&&(Z=!0),t.query.ald_share_src&&"1044"==t.scene&&t.shareTicket?wx.getShareInfo({shareTicket:t.shareTicket,success:function(t){z=t,D("event","ald_share_click",JSON.stringify(t))}}):t.query.ald_share_src&&D("event","ald_share_click",1),""===F&&wx.getSetting({withCredentials:!0,success:function(t){t.authSetting["scope.userInfo"]&&wx.getUserInfo({withCredentials:!0,success:function(t){var n=g();F=t,n.ufo=S(t),j=v(t.userInfo.avatarUrl.split("/")),w(n)}})}}),x("app","show")}function i(){n(),E=Date.now(),""===F&&wx.getSetting({success:function(t){t.authSetting["scope.userInfo"]&&wx.getUserInfo({withCredentials:!0,success:function(t){F=t,j=v(t.userInfo.avatarUrl.split("/"));var n=g();n.ufo=S(t),w(n)}})}}),x("app","hide")}function s(t){$++,D("event","ald_error_message",t)}function a(t){et=t}function u(){ut=Date.now(),tt=k?this.$mp.page.route:this.route,q("page","show"),Z=!1}function c(){nt=tt,ct=Date.now()-ut}function f(){nt=tt,ct=Date.now()-ut}function l(){D("event","ald_pulldownrefresh",1)}function h(){D("event","ald_reachbottom",1)}function p(t){it=!0;var n=m(t.path),e={};for(var o in Q.query)"ald_share_src"===o&&(e[o]=Q.query[o]);var r="";if(r=-1==t.path.indexOf("?")?t.path+"?":t.path.substr(0,t.path.indexOf("?"))+"?",""!==n)for(var o in n)e[o]=n[o];e.ald_share_src?-1==e.ald_share_src.indexOf(G)&&e.ald_share_src.length<200&&(e.ald_share_src=e.ald_share_src+","+G):e.ald_share_src=G;for(var i in e)-1==i.indexOf("ald")&&(r+=i+"="+e[i]+"&");return t.path=r+"ald_share_src="+e.ald_share_src,D("event","ald_share_status",t),t}function d(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return t()+t()+t()+t()+t()+t()+t()+t()}function w(t){function n(){return new Promise(function(n,e){var o={AldStat:"MiniApp-Stat",se:B||"",op:T||"",img:j};""===R||(o.ai=R),wx.request({url:"https://"+L+".aldwx.com/d.html",data:t,header:o,method:"GET",success:function(t){n(200==t.statusCode?"":"status error")},fail:function(){n("fail")}})})}N++,t.at=H,t.uu=G,t.v=P,t.ak=I.app_key.replace(/(\t)|(\s)/g,""),t.wsr=Q,t.ifo=J,t.rq_c=N,t.ls=C,t.te=O,t.et=Date.now(),t.st=Date.now(),I.useOpen?""===T?at.push(n):(wx.Queue.push(n),at.concat()):wx.Queue.push(n)}function g(){var t={};for(var n in X)t[n]=X[n];return t}function v(t){for(var n="",e=0;e<t.length;e++)t[e].length>n.length&&(n=t[e]);return n}function y(){return""+Date.now()+Math.floor(1e7*Math.random())}function S(t){var n={};for(var e in t)"rawData"!=e&&"errMsg"!=e&&(n[e]=t[e]);return n}function m(t){if(-1==t.indexOf("?"))return"";var n={};return t.split("?")[1].split("&").forEach(function(t){var e=t.split("=")[1];n[t.split("=")[0]]=e}),n}function _(n){for(var e in n)if("object"==t(n[e])&&null!==n[e])return!0;return!1}function x(t,n){var e=g();e.ev=t,e.life=n,e.ec=$,e.dr=Date.now()-U,V&&(e.qr=V,e.sr=V),K&&(e.usr=K),w(e)}function q(t,n){var e=g();e.ev=t,e.life=n,e.pp=tt,e.pc=nt,e.dr=Date.now()-U,it&&(e.so=1),it=!1,et&&"{}"!=JSON.stringify(et)&&(e.ag=et),V&&(e.qr=V,e.sr=V),K&&(e.usr=K),Z&&(e.ps=1),Y?e.pdr=ct:(ot=tt,Y=!0,e.ifp=Y,e.fp=tt,e.pdr=0),w(e)}function D(t,n,e){var o=g();o.ev=t,o.tp=n,o.dr=Date.now()-U,e&&(o.ct=e),w(o)}function A(t,n,e){if(t[n]){var o=t[n];t[n]=function(t){e.call(this,t,n),o.call(this,t)}}else t[n]=function(t){e.call(this,t,n)}}function b(t){var n={};for(var e in t)"onLaunch"!==e&&"onShow"!==e&&"onHide"!==e&&"onError"!==e&&(n[e]=t[e]);return n.onLaunch=function(n){o.call(this,n),"function"==typeof t.onLaunch&&t.onLaunch.call(this,n)},n.onShow=function(n){r.call(this,n),t.onShow&&"function"==typeof t.onShow&&t.onShow.call(this,n)},n.onHide=function(){i.call(this),t.onHide&&"function"==typeof t.onHide&&t.onHide.call(this)},n.onError=function(n){s.call(this,n),t.onError&&"function"==typeof t.onError&&t.onError.call(this,n)},n}function M(t){var n={};for(var e in t)"onLoad"!==e&&"onShow"!==e&&"onHide"!==e&&"onUnload"!==e&&"onPullDownRefresh"!==e&&"onReachBottom"!==e&&"onShareAppMessage"!==e&&(n[e]=t[e]);return n.onLoad=function(n){a.call(this,n),"function"==typeof t.onLoad&&t.onLoad.call(this,n)},n.onShow=function(n){u.call(this),"function"==typeof t.onShow&&t.onShow.call(this,n)},n.onHide=function(n){c.call(this),"function"==typeof t.onHide&&t.onHide.call(this,n)},n.onUnload=function(n){f.call(this),"function"==typeof t.onUnload&&t.onUnload.call(this,n)},n.onReachBottom=function(n){h(),t.onReachBottom&&"function"==typeof t.onReachBottom&&t.onReachBottom.call(this,n)},n.onPullDownRefresh=function(n){l(),t.onPullDownRefresh&&"function"==typeof t.onPullDownRefresh&&t.onPullDownRefresh.call(this,n)},t.onShareAppMessage&&"function"==typeof t.onShareAppMessage&&(n.onShareAppMessage=function(n){var e=t.onShareAppMessage.call(this,n);return void 0===e?(e={},e.path=this.route):void 0===e.path&&(e.path=this.route),p.call(this,e)}),n}var I=require("./ald-stat-conf");void 0===wx.Queue&&(wx.Queue=new function(){this.concurrency=4,this.queue=[],this.tasks=[],this.activeCount=0;var t=this;this.push=function(n){this.tasks.push(new Promise(function(e,o){var r=function(){t.activeCount++,n().then(function(t){e(t)}).then(function(){t.next()})};t.activeCount<t.concurrency?r():t.queue.push(r)}))},this.all=function(){return Promise.all(this.tasks)},this.next=function(){t.activeCount--,t.queue.length>0&&t.queue.shift()()}},wx.Queue.all()),I.useOpen&&console.warn("提示：开启了useOpen配置后，如果不上传用户opendId则不会上报数据。");var P="7.3.2",L="log",O="wx",R=void 0===wx.getAccountInfoSync?"":wx.getAccountInfoSync().miniProgram.appId.split("").map(function(t){return t.charCodeAt(0)+9}).join("-"),k=!1,H=y(),C="",U=Date.now(),E=0,B="",T=function(){var t="";try{t=wx.getStorageSync("aldstat_op")}catch(t){}return t}(),j="",N=0,Q="",J="",G=function(){var t="";try{t=wx.getStorageSync("aldstat_uuid")}catch(n){t="uuid_getstoragesync"}if(t)J=!1;else{t=d();try{wx.setStorageSync("aldstat_uuid",t),J=!0}catch(t){wx.setStorageSync("aldstat_uuid","uuid_getstoragesync")}}return t}(),K="",V="",W="",$=0,z="",F="",X={},Y=!1,Z=!1,tt="",nt="",et="",ot="",rt=!0,it=!1,st="",at=new function(){this.request=[],this.updata=!1,this.push=function(t){this.request.length>=8&&!this.updata&&(this.updata=!0,n()),this.request.length>=10?(this.request.shift(),this.request.push(t)):this.request.push(t)},this.concat=function(){this.request.map(function(t){wx.Queue.push(t)}),this.request=[]}},ut=0,ct=0,ft="";wx.request({url:"https://"+L+".aldwx.com/config/app.json",header:{AldStat:"MiniApp-Stat"},method:"GET",success:function(t){200===t.statusCode&&(P<t.data.version&&console.warn("您的SDK不是最新版本，请尽快升级！"),t.data.warn&&console.warn(t.data.warn),t.data.error&&console.error(t.data.error))}}),wx.aldstat=new e("");try{var lt=wx.getSystemInfoSync();X.br=lt.brand,X.pm=lt.model,X.pr=lt.pixelRatio,X.ww=lt.windowWidth,X.wh=lt.windowHeight,X.lang=lt.language,X.wv=lt.version,X.wvv=lt.platform,X.wsdk=lt.SDKVersion,X.sv=lt.system}catch(t){}return wx.getNetworkType({success:function(t){X.nt=t.networkType}}),wx.getSetting({success:function(t){t.authSetting["scope.userLocation"]?wx.getLocation({type:"wgs84",success:function(t){X.lat=t.latitude,X.lng=t.longitude,X.spd=t.speed}}):I.getLocation&&wx.getLocation({type:"wgs84",success:function(t){X.lat=t.latitude,X.lng=t.longitude,X.spd=t.speed}})}}),e.prototype.sendEvent=function(n,e){if(""!==n&&"string"==typeof n&&n.length<=255)if("string"==typeof e&&e.length<=255)D("event",n,e);else if("object"==(void 0===e?"undefined":t(e))){if(JSON.stringify(e).length>=255)return void console.error("自定义事件参数不能超过255个字符");if(_(e))return void console.error("事件参数，参数内部只支持Number,String等类型，请参考接入文档");for(var o in e)"number"==typeof e[o]&&(e[o]=e[o]+"s##");D("event",n,JSON.stringify(e))}else void 0===e?D("event",n,!1):console.error("事件参数必须为String,Object类型,且参数长度不能超过255个字符");else console.error("事件名称必须为String类型且不能超过255个字符")},e.prototype.sendSession=function(t){if(""!==t&&t){B=t;var n=g();n.tp="session",n.ct="session",n.ev="event",""===F?wx.getSetting({success:function(t){t.authSetting["scope.userInfo"]?wx.getUserInfo({success:function(t){n.ufo=S(t),j=v(t.userInfo.avatarUrl.split("/")),""!==z&&(n.gid=z),w(n)}}):""!==z&&(n.gid=z,w(n))}}):(n.ufo=F,""!==z&&(n.gid=z),w(n))}else console.error("请传入从后台获取的session_key")},e.prototype.sendOpenid=function(t){if(""!==t&&t&&28===t.length){T=t,wx.setStorageSync("aldstat_op",t);var n=g();n.tp="openid",n.ev="event",n.ct="openid",w(n)}else console.error("openID不能为空")},e.prototype.setOpenid=function(t){"function"==typeof t&&(ft=t,n())},I.plugin?{App:function(t){return App(b(t))},Page:function(t){return Page(M(t))},MpvueApp:function(t){return k=!0,b(t)},MpvuePage:function(t){return M(t)}}:void function(){var t=App,n=Page,e=Component;App=function(n){A(n,"onLaunch",o),A(n,"onShow",r),A(n,"onHide",i),A(n,"onError",s),t(n)},Page=function(t){var e=t.onShareAppMessage;A(t,"onLoad",a),A(t,"onUnload",f),A(t,"onShow",u),A(t,"onHide",c),A(t,"onReachBottom",h),A(t,"onPullDownRefresh",l),void 0!==e&&null!==e&&(t.onShareAppMessage=function(t){if(void 0!==e){var n=e.call(this,t);return void 0===n?(n={},n.path=tt):void 0===n.path&&(n.path=tt),p(n)}}),n(t)},Component=function(t){try{var n=t.methods.onShareAppMessage;A(t.methods,"onLoad",a),A(t.methods,"onUnload",f),A(t.methods,"onShow",u),A(t.methods,"onHide",c),A(t.methods,"onReachBottom",h),A(t.methods,"onPullDownRefresh",l),void 0!==n&&null!==n&&(t.methods.onShareAppMessage=function(t){if(void 0!==n){var e=n.call(this,t);return void 0===e?(e={},e.path=tt):void 0===e.path&&(e.path=tt),p(e)}}),e(t)}catch(n){e(t)}}}()}); 
 			}); 
		define("utils/utils.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Array.prototype.min=function(t){for(var e=void 0,i=[],s=0;s<this.length;++s){var r="function"==typeof t?t(this[s],s,this):this[s];void 0==r&&(r=this[s]),void 0==e&&(e=r),r==e?i.push(this[s]):r<e&&(e=r,i=[this[s]])}return i},Array.prototype.max=function(t){for(var e=void 0,i=[],s=0;s<this.length;++s){var r="function"==typeof t?t(this[s],s,this):this[s];void 0==r&&(r=this[s]),void 0==e&&(e=r),r==e?i.push(this[s]):r>e&&(e=r,i=[this[s]])}return i},Array.prototype.count=function(t){for(var e=0,i=0;i<this.length;++i)e+="function"==typeof t?t(this[i],i,this):0;return e},Date.prototype.format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var i in e)new RegExp("("+i+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[i]:("00"+e[i]).substr((""+e[i]).length)));return t}; 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return t&&t.__esModule?t:{default:t}}var e=t(require("./module/DSAccountManager.js")),n=t(require("./module/DSHttpRequestManager.js")),i=t(require("./module/DSDynamicHttpRequestManager.js")),a=t(require("./module/DSFormIdManager.js"));require("./utils/ald-stat.js"),require("./utils/utils.js");App({dynamicDomain:"https://slb.ajax.dushemovie.com",staticDomain:"https://html2.dushemovie.com",globalData:{},onLaunch:function(t){console.log(t),this.sysInfo=wx.getSystemInfoSync(),console.log(this.sysInfo),this.needShowAdBanner=1014==t.scene,wx.removeStorage({key:"ds_final_movielist"}),wx.removeStorage({key:"ds_final_setting"}),wx.removeStorage({key:"ds_final_setting_string"})},onShow:function(){a.default.singleton().enterFrontground()},onHide:function(){a.default.singleton().enterBackground()},getAppName:function(){return"ACTIVITY_SUMMARY".toLowerCase()},getVersion:function(){return"2.0.12"},sendEvent:function(t,e){getApp().aldstat.sendEvent(t,e)},collectFormId:function(t,e){a.default.singleton().appendFormId(t)},checkLoginState:function(t){e.default.checkLoginState(t)},isLogin:function(){return e.default.isLogin()},userInfo:function(){return e.default.userInfo()},dynamicRequest:function(t,e){this.dynamicHttpManager||(this.dynamicHttpManager=new i.default(this.dynamicDomain,"")),this.dynamicHttpManager.request(t,e)},staticRequest:function(t,e){this.staticHttpManager||(this.staticHttpManager=new n.default(this.staticDomain,"")),this.staticHttpManager.request(t,e)}}); 
 			}); 	require("app.js");
 		__wxRoute = 'pages/final_start/final_start';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/final_start/final_start.js';	define("pages/final_start/final_start.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){if(Array.isArray(t)){for(var a=0,e=Array(t.length);a<t.length;a++)e[a]=t[a];return e}return Array.from(t)}var a=require("../../dataModule/finalDataModule.js");Page({data:{},onLoad:function(t){console.log(t),this.aldEventEnterPage(t.from?t.from:"none"),this.fetchDataFromServer()},onUnload:function(){this.amhandle1&&(clearInterval(this.amhandle1),this.amhandle1=null),this.amhandle2&&(clearInterval(this.amhandle2),this.amhandle2=null)},onReady:function(){getApp().checkLoginState(),setTimeout(function(){this.bgAnimation(),this.floatAnimation(),this.starAnimation()}.bind(this),1e3)},onShareAppMessage:function(){return{title:"2019你看了多少电影，花了多少钱？",path:"/pages/final_start/final_start?channel=98",imageUrl:"/images/start/share.png"}},onFormSubmit:function(t){console.log(t),getApp().collectFormId(t.detail.formId)},fetchDataFromServer:function(){wx.showLoading({title:"加载中",mask:!0});var e=this;a.loadList(function(a){if(wx.hideLoading(),a.data){var n=a.data.listMap;getApp().globalData.originMovieList=n,getApp().globalData.settingInfo=a.data.settingInfo;for(var i=0,o=wx.getStorageSync("ds_final_movielist2019")||[];i<o.length;)!function(){var t=o[i],a=n.get(t.sectionId);if(a){var e=a.movieList.find(function(a){return a.movieId==t.movieId});e?(e.isSelected=!0,i+=1):o.shift()}else o.shift()}();a.data.titleTexts?e.setData({titleTexts:a.data.titleTexts}):e.setData({titleTexts:["电影如人生","值得期待的是未知的剧情","人生如电影","值得回味的是私藏的记忆","2019年，你看过哪些电影呢"]}),e.dataLoaded=!0,getApp().globalData.list=[].concat(t(n.values())),getApp().globalData.selectedList=o}else e.setData({titleTexts:["电影如人生","值得期待的是未知的剧情","人生如电影","值得回味的是私藏的记忆","2019年，你看过哪些电影呢"]}),a.errMsg&&setTimeout(function(){wx.showToast({title:a.errMsg,icon:"none"})},200)})},bgAnimation:function(){for(var t=[],a=0;a<5;++a){var e=wx.createAnimation({duration:6e5,timingFunction:"linear"});e.translateY((a%2==0?-5e3:5e3)+"px").step(),t.push(e)}this.setData({bgAms:t})},floatAnimation:function(){for(var t=[],a=0;a<5;++a){var e=wx.createAnimation({duration:2450,timingFunction:"ease"});t.push(e)}var n=function(a){for(var e=[],n=0;n<5;++n){var i=t[n];a?i.translateY((n%2==0?10:-10)+"px").step():i.translateY((n%2==0?-10:10)+"px").step(),e.push(i.export())}this.setData({floatAms:e})}.bind(this),i=!1;n(i),this.amhandle2=setInterval(function(){n(i=!i)},2500)},starAnimation:function(){for(var t=[],a=0;a<10;++a){var e=wx.createAnimation({duration:2e3,timingFunction:"ease"});t.push(e)}var n=function(a){for(var e=[],n=0;n<10;++n){var i=t[n];a?i.opacity(n%2==0?0:1).rotate(Math.random()>.5?90:0).step():i.opacity(n%2==0?1:0).rotate(Math.random()>.5?180:0).step(),e.push(i.export())}this.setData({starAms:e})}.bind(this),i=!1;n(i),this.amhandle2=setInterval(function(){n(i=!i)},2500)},onTappedStart:function(t){this.aldTapStartBtn(),this.dataLoaded?wx.navigateTo({url:"/pages/final_select/final_select"}):this.fetchDataFromServer()},aldEventEnterPage:function(t){getApp().sendEvent("首页-进入浏览",{from:t})},aldTapStartBtn:function(){getApp().sendEvent("首页-点击开始按钮")}}); 
 			}); 	require("pages/final_start/final_start.js");
 		__wxRoute = 'pages/final_select/final_select';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/final_select/final_select.js';	define("pages/final_select/final_select.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var e=require("../../dataModule/finalDataModule.js");Page({heightList:[],tapIconCount:0,data:{list:[],selectedList:[],currentSection:0,isFold:!0,codeType:1},onLoad:function(t){var e=getApp().globalData,i=this;this.setData(e,function(){setTimeout(function(){i.getSectionHeight(),wx.showToast({title:"请选择您已看过的电影",icon:"none"})},200)})},onFormSubmit:function(t){console.log(t),getApp().collectFormId(t.detail.formId)},getSectionHeight:function(){if(0!=this.data.list.length){var t=this,e=wx.createSelectorQuery().in(this),i=!0,n=!1,a=void 0;try{for(var o,s=this.data.list[Symbol.iterator]();!(i=(o=s.next()).done);i=!0){var l=o.value;e.select("#"+l.sectionId).boundingClientRect()}}catch(t){n=!0,a=t}finally{try{!i&&s.return&&s.return()}finally{if(n)throw a}}e.exec(function(e){if(console.log("getSectionHeight",e),e.length>0&&e.length==t.data.list.length){for(var i=0;i<e.length;i++){var n=e[i];n&&n.hasOwnProperty("top")&&t.heightList.push(n.top)}console.log(t.heightList)}else setTimeout(function(){t.getSectionHeight()},100)})}},onScroll:function(t){if(this.heightList.length==this.data.list.length)for(var e=this.heightList.length-1;e>=0;e--)if(t.detail.scrollTop>=this.heightList[e]){this.data.currentSection!=e&&this.setData({currentSection:e});break}},onScrollToBottom:function(t){this.aldScrollPageToBottom()},onTapEmptyBg:function(){this.fetchDataFromServer()},onSeletedMovie:function(e){for(var i=e.currentTarget.dataset.sec,n=e.currentTarget.dataset.row,a=this.data.list[i].movieList[n],o=this.data.selectedList,s=void 0,l=0;l<o.length;l++)if(o[l].movieName==a.movieName){s=l;break}void 0!=s?(this.aldCancelMovie(),o.splice(s,1)):(this.aldSelectMovie(),o.push(a));var r="list["+i+"].movieList["+n+"].isSelected";this.setData(t({selectedList:o},r,!a.isSelected))},onTapIcon:function(){if(++this.tapIconCount%10==0){var t=this.data.list,e=new Array(t.count(function(t){return t.movieList.length})),i=0,n=!0,a=!1,o=void 0;try{for(var s,l=t[Symbol.iterator]();!(n=(s=l.next()).done);n=!0){var r=s.value,c=!0,d=!1,h=void 0;try{for(var u,f=r.movieList[Symbol.iterator]();!(c=(u=f.next()).done);c=!0){var p=u.value;p.isSelected=!0,e[i++]=p}}catch(t){d=!0,h=t}finally{try{!c&&f.return&&f.return()}finally{if(d)throw h}}}}catch(t){a=!0,o=t}finally{try{!n&&l.return&&l.return()}finally{if(a)throw o}}this.setData({list:t,selectedList:e})}},onTappedIndicatorItem:function(t){var e=t.currentTarget.dataset.idx;this.aldTapIndicatorItem(this.data.list[e].title+"");var i=this.data.list[e].sectionId;this.setData({scrollIntoView:i})},onTappedFold:function(){var t=wx.createAnimation({duration:250,timingFunction:"ease"}),e=wx.createAnimation({duration:250,timingFunction:"ease"});this.data.isFold?(this.aldSelectListOpen(),t.bottom("112rpx").step(),e.opacity(1).step(),this.setData({isFold:!this.data.isFold}),setTimeout(function(){this.setData({foldAnimation:t.export(),opacityAnimation:e.export()})}.bind(this),100)):(this.aldSelectListClose(),t.bottom("-632rpx").step(),e.opacity(0).step(),this.setData({foldAnimation:t.export(),opacityAnimation:e.export()}),setTimeout(function(){this.setData({isFold:!this.data.isFold})}.bind(this),250))},onTappedClear:function(t){this.aldSelectListClear();var e=this;wx.showModal({title:"提示",content:"确认清空",success:function(t){if(t.confirm){var i=e.data.list,n=!0,a=!1,o=void 0;try{for(var s,l=i[Symbol.iterator]();!(n=(s=l.next()).done);n=!0){var r=s.value,c=!0,d=!1,h=void 0;try{for(var u,f=r.movieList[Symbol.iterator]();!(c=(u=f.next()).done);c=!0)u.value.isSelected=!1}catch(t){d=!0,h=t}finally{try{!c&&f.return&&f.return()}finally{if(d)throw h}}}}catch(t){a=!0,o=t}finally{try{!n&&l.return&&l.return()}finally{if(a)throw o}}e.setData({list:i,selectedList:[]},function(){e.onTappedFold()})}else t.cancel}})},onTappedDelete:function(e){this.aldSelectListDelete();var i=e.currentTarget.dataset.idx,n=this.data.selectedList[i].movieName,a=this.data.selectedList;a.splice(i,1);for(var o=0,s=0,l=0;l<this.data.list.length;l++)for(var r=this.data.list[l],c=0;c<r.movieList.length;c++)if(r.movieList[c].movieName==n){o=l,s=c;break}var d="list["+o+"].movieList["+s+"].isSelected";this.setData(t({selectedList:a},d,!1))},onGetWxUserInfo:function(t){this.aldTapSubmit();var i=this;t.detail.hasOwnProperty("userInfo")&&(wx.showLoading({title:"加载中",mask:!0}),getApp().checkLoginState({success:function(){0!=i.data.selectedList.length?(e.submitData(i.data.selectedList),wx.setStorageSync("ds_final_movielist2019",i.data.selectedList),wx.navigateTo({url:"/pages/final_finish/final_finish?total="+i.data.list.length})):wx.showToast({title:"请选择您看过的电影",icon:"none"})},fail:function(t){setTimeout(function(){wx.showToast({title:"登录失败",icon:"none"})},200)},complete:function(){wx.hideLoading()}}))},doNoThing:function(){},aldEventEnterPage:function(){getApp().sendEvent("活动勾选-进入浏览")},aldTapIndicatorItem:function(t){getApp().sendEvent("活动勾选-点击左侧导航",{title:t})},aldSelectMovie:function(){getApp().sendEvent("活动勾选-点击勾选电影")},aldCancelMovie:function(){getApp().sendEvent("活动勾选-点击取消勾选电影")},aldScrollPage:function(){getApp().sendEvent("活动勾选-下滑列表")},aldScrollPageToBottom:function(){getApp().sendEvent("活动勾选-下滑列表到底")},aldSelectListOpen:function(){getApp().sendEvent("活动勾选-展示预览面板")},aldSelectListClose:function(){getApp().sendEvent("活动勾选-收起预览面板")},aldSelectListDelete:function(){getApp().sendEvent("活动勾选-预览面板删除")},aldSelectListClear:function(){getApp().sendEvent("活动勾选-预览面板清空")},aldTapSubmit:function(){getApp().sendEvent("活动勾选-点击提交按钮")}}); 
 			}); 	require("pages/final_select/final_select.js");
 		__wxRoute = 'pages/final_finish/final_finish';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/final_finish/final_finish.js';	define("pages/final_finish/final_finish.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}var t=require("../../utils/DSDownloadUtils.js"),a=require("../../dsCanvas/dsDrawable"),n=require("../../dsCanvas/dsCanvas2D"),r=require("../../dataModule/finalDataModule.js");Page({data:{canvasW:1,canvasH:1,progress:10},onLoad:function(e){this.aldEventEnterPage(),this.scale=1,this.style=0,this.totalMovieNum=e.total,this.settingInfo=getApp().globalData.settingInfo},onUnload:function(){this.canvas&&this.canvas.destroy()},onReady:function(){this.refreshData()},onTapRetryBtn:function(e){this.aldTapRetryBtn(),this.refreshData()},onFormSubmit:function(e){console.log(e),getApp().collectFormId(e.detail.formId)},onTapSaveToImageBtn:function(){this.aldTapSaveBtn(),wx.showLoading({title:"正在保存图片",mask:!0});var e=getApp().sysInfo.model.indexOf("iPhone")>=0?10:100,t=Math.min(8e3,this.selectInfo.totalMovieNum*e),a=this;this.drawScene({duration:t,showQrCode:this.settingInfo.qrcodes.length>0,success:function(e){wx.saveImageToPhotosAlbum({filePath:e.catchPath,success:function(){setTimeout(function(){wx.showToast({title:"保存成功，请前往相册分享",icon:"none",duration:5e3})},200),setTimeout(function(){if(a.settingInfo.webUrl){var e=a.settingInfo.webTitle?a.settingInfo.webTitle:"";wx.navigateTo({url:"/pages/final_web/final_web?url="+encodeURIComponent(a.settingInfo.webUrl)+"&title="+e})}},800),a.aldSaveSuccess()},fail:function(e){console.log(e),e.errMsg.indexOf("auth")>=0?(setTimeout(function(){wx.showToast({title:"保存失败，请重试",icon:"none"})},200),a.setData({needAuth:!0})):setTimeout(function(){wx.showToast({title:e.errMsg,icon:"none"})},200)},complete:function(){wx.hideLoading()}})},fail:function(e){wx.showToast({title:"保存失败",icon:"none"}),wx.hideLoading()}})},onOpenSetting:function(e){console.log(e),e.detail.authSetting["scope.writePhotosAlbum"]&&(this.setData({needAuth:!1}),setTimeout(function(){this.onTapSaveToImageBtn()}.bind(this),300))},refreshData:function(){var t=this;this.setData({showRetryBtn:!1,generateText:"稍等哦\n毒Sir正在玩命加载中..."}),new Promise(function(a,n){t.userInfo=getApp().userInfo(),wx.getStorage({key:"ds_final_movielist2019",success:function(t){if(t.data){for(var n=t.data.sort(function(e,t){return t.totalTicketCost-e.totalTicketCost}),r=["1-3月","4-6月","7-9月","10-12月"],o=0,l=0,i=0,s=new Map,d=[],f=0;f<4;++f)d.push({cardList:[{id:f+1,title:r[f],imageUrl:"/images/result/rsult_quarter_"+f+".png"}],textList:[]});var c=[],g=!0,h=!1,u=void 0;try{for(var w,x=n[Symbol.iterator]();!(g=(w=x.next()).done);g=!0){var b=w.value;o+=parseInt(b.totalTicketCost),l+=parseInt(b.ticketCost),i+=parseInt(b.duration);var m=!0,v=!1,y=void 0;try{for(var D,p=b.category[Symbol.iterator]();!(m=(D=p.next()).done);m=!0){var S=D.value;s.has(S)?s.set(S,s.get(S)+1):s.set(S,1)}}catch(e){v=!0,y=e}finally{try{!m&&p.return&&p.return()}finally{if(v)throw y}}var I=Math.floor(new Date(b.date).getMonth()/3);d[I].cardList.length<this.settingInfo.seasonnum+1?d[I].cardList.push(b):c.push(b)}}catch(e){h=!0,u=e}finally{try{!g&&x.return&&x.return()}finally{if(h)throw u}}d=d.filter(function(e){return e.cardList.length>1});for(var F=4*this.settingInfo.seasonnum-d.count(function(e){return e.cardList.length-1}),C=0;C<F&&c.length>0;++C){var T=c.shift();d[Math.floor(new Date(T.date).getMonth()/3)-(4-d.length)].cardList.push(T)}var L=5-d.count(function(e){return e.cardList.length})%5;if(L>0&&L<5){var P=c.splice(0,Math.min(L,c.length)),M=!0,A=!1,E=void 0;try{for(var R,B=P[Symbol.iterator]();!(M=(R=B.next()).done);M=!0){var N=R.value;d[Math.floor(new Date(N.date).getMonth()/3)-(4-d.length)].cardList.push(N)}}catch(e){A=!0,E=e}finally{try{!M&&B.return&&B.return()}finally{if(A)throw E}}}var _=!0,O=!1,H=void 0;try{for(var U,k=c[Symbol.iterator]();!(_=(U=k.next()).done);_=!0){var q=U.value;d[Math.floor(new Date(q.date).getMonth()/3)-(4-d.length)].textList.push(q)}}catch(e){O=!0,H=e}finally{try{!_&&k.return&&k.return()}finally{if(O)throw H}}this.selectInfo={totalMovieNum:n.length,totalPrice:o,totalPay:l,totalTime:i,categoryList:[].concat(e(s)).sort(function(e,t){return t[1]-e[1]}),seasonSections:d},a(this.selectInfo)}}.bind(t),fail:function(e){n(new Error(e.errMsg))}})}).then(function(e){t.resultInfo?t.generateResult():r.loadResult({totalDuration:e.totalTime,totalCost:e.totalPay,movieNum:e.totalMovieNum},function(a){if(a.data){t.resultInfo={betterValue:a.data.betterValue};var n=e.seasonSections.max(function(e){return e.cardList.length+e.textList.length});if(t.resultInfo.desLabelNodes=[],1==n.length){var r=(n[0].textList.length+n[0].cardList.length-1)/e.totalMovieNum;if(r>.3&&e.seasonSections.count(function(e){return e.cardList.length-1})>10)t.resultInfo.desLabelNodes=[{text:"观看",color:"#fff"},{text:n[0].cardList[0].title,color:"#F5CB1E"},{text:"上映的影片数量最多，占比超过",color:"#fff"},{text:parseFloat(100*r).toFixed(2)+"%",color:"#F5CB1E"}];else{var o=!0,l=!1,i=void 0;try{for(var s,d=a.data.movieNumLabel[Symbol.iterator]();!(o=(s=d.next()).done);o=!0){var f=s.value;t.resultInfo.desLabelNodes.push({text:f.text,color:"highlight"==f.type?"#F5CB1E":"#fff"})}}catch(e){l=!0,i=e}finally{try{!o&&d.return&&d.return()}finally{if(l)throw i}}}}else{var c=!0,g=!1,h=void 0;try{for(var u,w=a.data.movieNumLabel[Symbol.iterator]();!(c=(u=w.next()).done);c=!0){var x=u.value;t.resultInfo.desLabelNodes.push({text:x.text,color:"highlight"==x.type?"#F5CB1E":"#fff"})}}catch(e){g=!0,h=e}finally{try{!c&&w.return&&w.return()}finally{if(g)throw h}}}t.resultInfo.costNodes=[];var b=!0,m=!1,v=void 0;try{for(var y,D=a.data.costLabel[Symbol.iterator]();!(b=(y=D.next()).done);b=!0){var p=y.value;t.resultInfo.costNodes.push({text:p.text,baseline:"middle",color:"highlight"==p.type?"#FF9300":"#F4D87D",font:"highlight"==p.type?"normal bold 24px PingFangSC-Semibold":"normal normal 24px PingFangSC-Regular"})}}catch(e){m=!0,v=e}finally{try{!b&&D.return&&D.return()}finally{if(m)throw v}}t.resultInfo.durationNodes=[];var S=!0,I=!1,F=void 0;try{for(var C,T=a.data.durationLabel[Symbol.iterator]();!(S=(C=T.next()).done);S=!0){var L=C.value;t.resultInfo.durationNodes.push({text:L.text,baseline:"middle",color:"highlight"==L.type?"#FF9300":"#F4D87D",font:"highlight"==L.type?"normal bold 24px PingFangSC-Semibold":"normal normal 24px PingFangSC-Regular"})}}catch(e){I=!0,F=e}finally{try{!S&&T.return&&T.return()}finally{if(I)throw F}}t.generateResult()}else t.setData({showRetryBtn:!0,generateText:"请重试..."}),wx.showToast({title:a.errMsg,icon:"none"})})}).catch(function(e){t.setData({showRetryBtn:!0,generateText:"请重试..."}),wx.showToast({title:e.message,icon:"none"})})},generateResult:function(){var e=[this.userInfo.avatarUrl],a=this.selectInfo.seasonSections,n=!0,r=!1,o=void 0;try{for(var l,i=a[Symbol.iterator]();!(n=(l=i.next()).done);n=!0)l.value.cardList.forEach(function(t){t.imageUrl&&e.push(t.imageUrl)})}catch(e){r=!0,o=e}finally{try{!n&&i.return&&i.return()}finally{if(r)throw o}}var s=this;(new t.DSDownloadUtils).downloadImages({imgUrls:e,progress:function(e){s.data.showRetryBtn||s.setData({generateText:"稍等哦\n毒Sir正在玩命加载中... "+Math.floor(90*e)+"%"})},withFailReplace:function(e){return e.indexOf("-w175h250")>=0?"/images/default_poster.png":e.indexOf("wx.qlogo.cn")>=0?"/images/default_avatar.png":"/images/default_qrcode.jpeg"},success:function(e){var t=0;s.userInfo.drawableAvatarInfo=e[t++];var n=!0,r=!1,o=void 0;try{for(var l,i=a[Symbol.iterator]();!(n=(l=i.next()).done);n=!0)l.value.cardList.forEach(function(a){a.drawableImageInfo=e[t++]})}catch(e){r=!0,o=e}finally{try{!n&&i.return&&i.return()}finally{if(r)throw o}}var d=f?10:100,f=getApp().sysInfo.model.indexOf("iPhone")>=0,c=Math.min(8e3,s.selectInfo.totalMovieNum*d);s.drawScene({showQrCode:!1,duration:c,success:function(e){s.setData({pageImage:e.catchPath})},fail:function(e){console.log(e),wx.showToast({title:"生成结果失败",icon:"none"}),s.setData({showRetryBtn:!0,generateText:"请重试..."})}});var g=.9;s.intervalHandel=setInterval(function(){(g+=.1/(c/d))>1&&(clearInterval(s.intervalHandel),g=1),s.setData({generateText:"稍等哦\n毒Sir正在玩命加载中... "+Math.floor(100*g)+"%"})},d)}.bind(this),fail:function(e){console.log(e),this.setData({showRetryBtn:!0,generateText:"请重试..."}),wx.showToast({title:"图片加载失败",icon:"none"})}.bind(this)})},drawScene:function(e){var t=this.canvas;if(!t){t=this.canvas=new n.DSCanvas2D({x:0,y:0,w:750,h:0,canvasId:"scene-canvas",bgColor:"#100D0C"});var a=0,r=0,o=[this.createTopArea(),this.createMoviesArea()],l=!0,i=!1,s=void 0;try{for(var d,f=o[Symbol.iterator]();!(l=(d=f.next()).done);l=!0){var c=d.value,g=c.rect;a+=c.rect.h,g.y=r,t.addDrawable(c),r=a}}catch(e){i=!0,s=e}finally{try{!l&&f.return&&f.return()}finally{if(i)throw s}}for(var h=getApp().sysInfo.model.indexOf("iPhone")>=0,u=[0,30,60,80,95,105,110,1e4],w=h?1.2:1,x=0;x<u.length-1;++x)this.selectInfo.totalMovieNum>u[x]&&this.selectInfo.totalMovieNum<=u[x+1]&&(w-=h?.01:.02);console.log("scale："+w),t.root.scale={x:w,y:w},t.root.rect.h=a,this.setData({canvasW:750*w,canvasH:(a+306)*w})}if(e.showQrCode){var b=this.createQrCodeArea();b.rect.y=t.root.rect.h,t.root.rect.h+=b.rect.h,t.addDrawable(b)}t.drawAndCacheToTempFilePath({delay:e.duration,fileType:"jpg",success:e.success,fail:e.fail})},createTopArea:function(){var t=new a.Drawable({x:0,y:0,w:750,h:0}),n=new a.ImageDrawable({x:0,y:0,w:750,h:396,imgSource:"/images/result/result_pho.png"});t.addDrawable(n);var r=new a.Drawable({x:315,y:292,w:120,h:120,radius:16,bgColor:"#FFEBBB"});r.addDrawable(new a.ImageDrawable({x:4,y:4,w:112,h:112,radius:12,imgSource:this.userInfo.drawableAvatarInfo})),t.addDrawable(r),t.addDrawable(new a.TextDrawable({x:200,y:r.rect.y+r.rect.h+12,w:350,h:40,nodes:[{text:this.userInfo.nickName,color:"#fff",font:"normal 500 28px PingFangSC-Medium",textAlign:"center"}]})),t.addDrawable(new a.ImageDrawable({x:604,y:374,w:146,h:86,imgSource:"/images/result/result_icon_poing.png"})),t.addDrawable(new a.ImageDrawable({x:32,y:452,w:40,h:30,imgSource:"/images/result/result_icon_brackets_l.png"}));var o=28;t.addDrawable(new a.TextDrawable({x:o,y:500,w:446,h:40,nodes:[{text:"2019年",font:"normal 600 36px PingFangSC-Semibold",color:"#F5CB1E"}]})),t.addDrawable(new a.TextDrawable({x:o,y:552,w:446,h:130,numberOfLine:3,lineHeight:38,font:"normal 400 28px PingFangSC-Regular",nodes:[{text:"共计观影",color:"#fff"},{text:this.selectInfo.totalMovieNum+"部",color:"#F5CB1E"},{text:"，超过",color:"#fff"},{text:this.resultInfo.betterValue+"%",color:"#F5CB1E"},{text:"的用户，",color:"#fff"}].concat(e(this.resultInfo.desLabelNodes))}));var l=Math.round(this.selectInfo.totalPrice/1e4);console.log(l);var i="";l<1e3?i="万":l>=1e3&&l<1e4?(l=(l/1e3).toFixed(1),i="千万"):(l=(l/1e4).toFixed(1),i="亿"),1==(l+="").length?l+=".0":l.length>3&&(l=parseInt(l)+""),o=524,t.addDrawable(new a.TextDrawable({x:o,y:532,w:168,h:34,nodes:[{text:"观影总票房：",color:"#F5CB1E",font:"normal 400 24px PingFangSC-Regular",letterSpacing:3}]}));for(var s=o,d=0;d<l.length;++d){var f=void 0;if("."==l[d]){f=new a.Drawable({x:s+6,y:638,w:12,h:12,bgColor:"#F5CB1E"}),s+=24}else f=new a.ImageDrawable({x:s,y:570,w:48,h:84,imgSource:"/images/result/"+l[d]+".png",mode:"aspectFit"}),s+=48;t.addDrawable(f)}t.addDrawable(new a.TextDrawable({x:s,y:620,w:60,h:40,nodes:[{text:i,color:"#F5CB1E",font:"normal 600 28px PingFangSC-Semibold"}]})),t.addDrawable(new a.ImageDrawable({x:678,y:672,w:40,h:30,imgSource:"/images/result/result_ic_brackets_r.png"}));var c=718;if(this.selectInfo.totalMovieNum>1){t.addDrawable(new a.TextDrawable({x:32,y:c,w:600,h:50,nodes:[{text:"已看影片的类型分布",font:"normal 400 32px PingFangSC-Regular",color:"#fff",baseline:"bottom"}]})),c+=50,t.addDrawable(new a.TextDrawable({x:32,y:c,w:600,h:34,nodes:[{text:"*每部影片可能包含多种类型",font:"normal 400 24px PingFangSC-Regular",color:"#797979",baseline:"bottom"}]})),c+=58;var g=this.selectInfo.categoryList,h=g[0][1],u=g[g.length-1][1]<10?70:90,w=0;for(w=0;w<g.length&&Math.floor(w/2)<5;++w){var x=g[w],b=u+(234-u)*(x[1]/h)-20,m=new a.Drawable({x:w%2==0?32:386,y:c+48*Math.floor(w/2),w:98+b,h:40});m.addDrawable(new a.TextDrawable({x:0,y:0,w:90,h:40,radius:4,bgColor:"#F4D87D",nodes:[{text:x[0],color:"#100D0C",font:"normal 600 24px PingFangSC-Semibold",textAlign:"center",baseline:"middle"}]})),m.addDrawable(new a.Drawable({x:98+b-20,y:0,w:40,h:40,radius:20,bgColor:"#2F2914"})),m.addDrawable(new a.TextDrawable({x:98,y:0,w:b,h:40,bgColor:"#2F2914",nodes:[{text:"  "+x[1]+"部",color:"#F4D87D",font:"normal 600 24px PingFangSC-Semibold",baseline:"middle"}]})),t.addDrawable(m)}c+=48*(Math.floor(w/2)+(w%2==0?0:1))+48}for(var v=this.selectInfo.totalTime+"",y=new a.ImageDrawable({x:32,y:c,w:686,h:240,imgSource:"/images/result/result_movie_duration_bg.png"}),D=0;D<v.length;++D){var p=new a.ImageDrawable({x:28+40*D,y:50,w:40,h:64,imgSource:"/images/result/"+v[D]+".png",mode:"aspectFit"});y.addDrawable(p)}y.addDrawable(new a.TextDrawable({x:28+40*v.length+4,y:52,w:60,h:40,nodes:[{text:"分钟",color:"#F5CB1E",font:"normal 400 28px PingFangSC-Regular"}]})),y.addDrawable(new a.TextDrawable({x:28+40*v.length+4,y:86,w:120,h:40,nodes:[{text:"观影时长",color:"#F5CB1E",font:"normal 400 28px PingFangSC-Regular"}]})),y.addDrawable(new a.TextDrawable({x:24,y:158,w:638,h:70,lineHeight:28,numberOfLine:2,nodes:this.resultInfo.durationNodes})),t.addDrawable(y),c+=288;var S=this.selectInfo.totalPay+"";y=new a.ImageDrawable({x:32,y:c,w:686,h:240,imgSource:"/images/result/result_movie_money_bg.png"});for(var I=0;I<S.length;++I){var F=new a.ImageDrawable({x:28+40*I,y:50,w:40,h:64,imgSource:"/images/result/"+S[I]+".png",mode:"aspectFit"});y.addDrawable(F)}return y.addDrawable(new a.TextDrawable({x:28+40*S.length+4,y:52,w:60,h:40,nodes:[{text:"元",color:"#F5CB1E",font:"normal 400 28px PingFangSC-Regular"}]})),y.addDrawable(new a.TextDrawable({x:28+40*S.length+4,y:86,w:120,h:40,nodes:[{text:"观影花费",color:"#F5CB1E",font:"normal 400 28px PingFangSC-Regular"}]})),y.addDrawable(new a.TextDrawable({x:24,y:158,w:638,h:70,lineHeight:28,numberOfLine:2,nodes:this.resultInfo.costNodes})),t.addDrawable(y),c+=296,t.rect.h=c,t},createMoviesArea:function(){var e=new a.Drawable({x:0,y:0,w:750,h:0,bgColor:"#100D0C"});e.addDrawable(new a.Drawable({x:0,y:0,w:750,h:320})),e.addDrawable(new a.TextDrawable({x:32,y:0,w:300,h:56,nodes:[{text:"观影时间线",color:"#fff",font:"normal 400 40px PingFangSC-Regular"}]})),e.addDrawable(new a.TextDrawable({x:32,y:52,w:500,h:40,nodes:[{text:"M",color:"#FFE670",font:"normal 400 28px PingFangSC-Semibold",letterSpacing:8},{text:"OVIE",color:"#fff",font:"normal 400 28px PingFangSC-Semibold",letterSpacing:8},{text:" T",color:"#FFE670",font:"normal 400 28px PingFangSC-Semibold",letterSpacing:8},{text:"IMELINE",color:"#fff",font:"normal 400 28px PingFangSC-Semibold",letterSpacing:8}]})),e.addDrawable(new a.TextDrawable({x:32,y:90,w:688,h:56,lineHeight:26,lineSpace:0,nodes:[{text:"影片按照季度排列，每个季度内由票房数据由高到低排列，票房较低的影片将以文字形式展示",color:"#797979",font:"normal 400 20px PingFangSC-Regular"}]}));var t=178,n=32,r=t,o=128,l=188,i=this.selectInfo.seasonSections,s=0,d=!0,f=!1,c=void 0;try{for(var g,h=i[Symbol.iterator]();!(d=(g=h.next()).done);d=!0){var u=g.value,w=!0,x=!1,b=void 0;try{for(var m,v=u.cardList[Symbol.iterator]();!(w=(m=v.next()).done);w=!0){var y=m.value;if("movieId"in y){var D=y.drawableImageInfo.path.indexOf("default_poster")<0,p=new a.ImageDrawable({x:n,y:r,w:o,h:l,radius:4,imgSource:y.drawableImageInfo});p.addDrawable(new a.Drawable({x:0,y:0,w:o,h:40,gradient:D?{direction:a.Drawable.Gradient_Vertical,colors:["#000","transparent"]}:null}).addDrawable(new a.TextDrawable({x:4,y:4,w:118,h:24,nodes:[{text:y.boxOfficeString,color:"#FBE0A8",font:"normal 400 18px PingFangSC-Regular",baseline:"middle"}]}))),p.addDrawable(new a.Drawable({x:0,y:156,w:o,h:32,bgColor:D?"#000":"transparent",alpha:.7}).addDrawable(new a.TextDrawable({x:0,y:0,w:o,h:32,numberOfLine:1,lineHeight:32,nodes:[{text:y.movieName,color:"#fff",font:"normal 400 20px PingFangSC-Regular",baseline:"middle",textAlign:"center"}]}))),e.addDrawable(p)}else e.addDrawable(new a.ImageDrawable({x:n,y:r,w:o,h:l,radius:4,imgSource:y.drawableImageInfo}).addDrawable(new a.TextDrawable({x:0,y:95,w:o,h:30,nodes:[{text:u.cardList.length+u.textList.length-1+"部",color:"#FF9900",font:"normal 400 28px PingFangSC-Regular",textAlign:"center"}]})));++s%5==0?(n=32,r+=200):n+=140}}catch(e){x=!0,b=e}finally{try{!w&&v.return&&v.return()}finally{if(x)throw b}}}}catch(e){f=!0,c=e}finally{try{!d&&h.return&&h.return()}finally{if(f)throw c}}t=r+(s%5==0?0:200)+20;var S=0,I=!0,F=!1,C=void 0;try{for(var T,L=i[Symbol.iterator]();!(I=(T=L.next()).done);I=!0)S+=T.value.textList.length}catch(e){F=!0,C=e}finally{try{!I&&L.return&&L.return()}finally{if(F)throw C}}if(S>0){var P="normal 400 20px PingFangSC-Regular";e.addDrawable(new a.TextDrawable({x:32,y:t,w:686,h:28,nodes:[{text:"- 以下电影将以文字形式展示 -",color:"#797979",font:P,textAlign:"center"}]})),t+=38;var M=[],A=!0,E=!1,R=void 0;try{for(var B,N=i[Symbol.iterator]();!(A=(B=N.next()).done);A=!0){var _=B.value;_.textList.length>0&&(M.push({text:"（"+_.cardList[0].title+"）",color:"#FF9900",font:P}),M.push({text:_.textList.map(function(e){return"《"+e.movieName+"》"}).join(" "),color:"#fff",font:P}))}}catch(e){E=!0,R=e}finally{try{!A&&N.return&&N.return()}finally{if(E)throw R}}var O=M.map(function(e){return e.text}).join(" "),H=a.TextDrawable.measureTextHeight({ctx:this.canvas.ctx,font:P,width:686,lineHeight:24,lineSpace:4,text:O});e.addDrawable(new a.TextDrawable({x:32,y:t,w:686,h:H,lineHeight:24,lineSpace:4,nodes:M})),t+=H+10}return e.rect.h=t,e},createQrCodeArea:function(){var e=new a.Drawable({x:0,y:0,w:750,h:306,bgColor:"#100D0C"});e.addDrawable(new a.Drawable({x:32,y:20,w:686,h:1,bgColor:"#fff",alpha:.2}));var t=this.settingInfo.qrcodes,n=t[parseInt(100*Math.random())%t.length];return n.IMAGE&&e.addDrawable(new a.Drawable({x:281,y:50,w:178,h:178,radius:6,bgColor:"#fff"}).addDrawable(new a.ImageDrawable({x:4,y:4,w:170,h:170,imgSource:n.IMAGE}))),e.addDrawable(new a.TextDrawable({x:0,y:250,w:750,h:40,nodes:[{text:n.RESULT_LABEL.join(" "),color:"#fff",font:"normal 400 24px PingFangSC-Regular",textAlign:"center"}]})),e},aldEventEnterPage:function(){getApp().sendEvent("活动结果-进入浏览")},aldTapRetryBtn:function(){getApp().sendEvent("活动结果-点击重试")},aldTapSaveBtn:function(){getApp().sendEvent("活动结果-点击保存")},aldSaveSuccess:function(){getApp().sendEvent("活动结果-保存成功")}}); 
 			}); 	require("pages/final_finish/final_finish.js");
 		__wxRoute = 'pages/final_web/final_web';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/final_web/final_web.js';	define("pages/final_web/final_web.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(t){t.url&&this.setData({url:decodeURIComponent(t.url)}),t.title&&(this.title=t.title)},onReady:function(){wx.showLoading({title:"加载中",mask:!0}),this.title&&wx.setNavigationBarTitle({title:this.title})},onWebLoadSuccess:function(){wx.hideLoading()},onWebLoadFail:function(){wx.hideLoading(),setTimeout(function(){wx.showToast({title:"加载失败",icon:"none"})})}}); 
 			}); 	require("pages/final_web/final_web.js");
 		__wxRoute = 'pages/final_ad/final_ad';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/final_ad/final_ad.js';	define("pages/final_ad/final_ad.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=function(t){return t&&t.__esModule?t:{default:t}}(require("../../module/DSHttpRequest"));Page({data:{},onLoad:function(t){this.aldEventEnterPage()},onReady:function(){var a=this;getApp().staticRequest(new t.default("ActivitySummary2019/Ad",{},"GET"),function(t){1==t.code&&a.setData({showAdBanner:!0,adList:t.data.list})})},onTapAditem:function(t){var a=t.currentTarget.dataset.item;a.appid&&(this.aldTapAdItem(a.appid),wx.navigateToMiniProgram({appId:a.appid,path:a.path,extraData:a.extraData}))},aldEventEnterPage:function(){getApp().sendEvent("广告页-进入浏览",{})},aldTapAdItem:function(t){getApp().sendEvent("广告页-点击广告项",{appid:t})}}); 
 			}); 	require("pages/final_ad/final_ad.js");
 	