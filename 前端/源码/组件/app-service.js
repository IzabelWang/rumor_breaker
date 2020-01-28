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
Z([a,[3,'cu-bar fixed '],[[2,'?:'],[[2,'!='],[[7],[3,'bgImage']],[1,'']],[1,'none-bg text-white bg-img'],[1,'']],[3,' '],[[7],[3,'bgColor']]])
Z([a,[3,'height:'],[[7],[3,'CustomBar']],[3,'px;padding-top:'],[[7],[3,'StatusBar']],[3,'px;'],[[2,'?:'],[[7],[3,'bgImage']],[[2,'+'],[[2,'+'],[1,'background-image:url('],[[7],[3,'bgImage']]],[1,')']],[1,'']]])
Z([[7],[3,'isBack']])
Z([3,'BackPage'])
Z([3,'action'])
Z([3,'backText'])
Z([[7],[3,'isCustom']])
Z([3,'content'])
Z([3,'right'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-green'])
Z([1,true])
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
Z([3,'bg-gradual-green'])
Z([1,true])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-green'])
Z([1,true])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-green'])
Z([1,true])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-blue'])
Z([1,true])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-blue'])
Z([1,true])
Z([[7],[3,'ColorList']])
Z([[2,'<'],[[7],[3,'index']],[1,12]])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-blue'])
Z([1,true])
Z([[7],[3,'ColorList']])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'name']],[1,'white']])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-blue'])
Z([1,true])
Z([[7],[3,'color']])
Z([[7],[3,'border']])
Z([[7],[3,'ColorList']])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'name']],[1,'white']])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-blue'])
Z([1,true])
Z([[7],[3,'icon']])
Z([[6],[[7],[3,'item']],[3,'isShow']])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-blue'])
Z([1,true])
Z([[2,'=='],[[7],[3,'TabCur']],[1,0]])
Z([[2,'=='],[[7],[3,'TabCur']],[1,1]])
Z([[2,'=='],[[7],[3,'TabCur']],[1,2]])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-blue'])
Z([1,true])
Z([[7],[3,'loadModal']])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-blue'])
Z([1,true])
Z([[7],[3,'ColorList']])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'item']],[3,'name']],[1,'gray']],[[2,'!='],[[6],[[7],[3,'item']],[3,'name']],[1,'white']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-blue'])
Z([1,true])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-blue'])
Z([1,true])
Z([3,'padding-sm flex flex-wrap'])
Z([[7],[3,'ColorList']])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'name']],[1,'gray']])
Z(z[3])
Z([[2,'&&'],[[2,'&&'],[[2,'!='],[[6],[[7],[3,'item']],[3,'name']],[1,'gray']],[[2,'!='],[[6],[[7],[3,'item']],[3,'name']],[1,'black']]],[[2,'!='],[[6],[[7],[3,'item']],[3,'name']],[1,'white']]])
Z(z[3])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'name']],[1,'white']])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-blue'])
Z([1,true])
Z([[7],[3,'list']])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'name']],[1,'white']])
Z(z[2])
Z(z[3])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-pink'])
Z([1,true])
Z([1,false])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-pink'])
Z([1,true])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-pink'])
Z([1,true])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-pink'])
Z([1,true])
Z([[2,'<'],[[6],[[7],[3,'imgList']],[3,'length']],[1,4]])
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
Z([a,[3,'page '],[[2,'?:'],[[2,'!='],[[7],[3,'modalName']],[1,null]],[1,'show'],[1,'']]])
Z([[2,'=='],[[7],[3,'modalName']],[1,null]])
Z([3,'bg-gradual-pink'])
Z([1,true])
Z([[7],[3,'iconList']])
Z([[2,'<'],[[7],[3,'index']],[[2,'*'],[[7],[3,'gridCol']],[1,2]]])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'badge']],[1,0]])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'badge']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-pink'])
Z([1,true])
Z([3,'hideModal'])
Z([a,[3,'cu-modal bottom-modal '],[[2,'?:'],[[2,'=='],[[7],[3,'modalName']],[1,'ChooseModal']],[1,'show'],[1,'']]])
Z([3,'cu-dialog'])
Z([[7],[3,'checkbox']])
Z([[7],[3,'index']])
Z([3,'ChooseCheckbox'])
Z([a,[3,'cu-btn orange lg block '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'checked']],[1,'bg-orange'],[1,'line-orange']]])
Z([[6],[[7],[3,'item']],[3,'value']])
Z([[6],[[7],[3,'item']],[3,'hot']])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-pink'])
Z([1,true])
Z([1,10])
Z([[2,'=='],[[7],[3,'index']],[[7],[3,'TabCur']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-pink'])
Z([1,true])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-pink'])
Z([1,true])
Z([[7],[3,'swiperList']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'image']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'video']])
Z([3,'true'])
Z([3,'cardSwiper'])
Z(z[5])
Z([a,[3,'card-swiper '],[[2,'?:'],[[7],[3,'DotStyle']],[1,'square-dot'],[1,'round-dot']]])
Z([3,'500'])
Z([3,'#0081ff'])
Z([3,'#8799a3'])
Z(z[5])
Z([3,'5000'])
Z(z[2])
Z([3,'swiper-item'])
Z(z[3])
Z(z[4])
Z([3,'towerEnd'])
Z([3,'towerMove'])
Z([3,'towerStart'])
Z([3,'tower-swiper'])
Z(z[2])
Z(z[15])
Z(z[3])
Z(z[4])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-pink'])
Z([1,true])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[7],[3,'PageCur']],[1,'basics']])
Z([[2,'=='],[[7],[3,'PageCur']],[1,'component']])
Z([[2,'=='],[[7],[3,'PageCur']],[1,'plugin']])
Z([[2,'=='],[[7],[3,'PageCur']],[1,'about']])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg'])
Z([1,true])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-blue'])
Z([1,true])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'https://image.weilanwl.com/color2.0/plugin/cjkz2329.jpg'])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg'])
Z([1,true])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./colorui/components/cu-custom.wxml','./pages/about/about/about.wxml','./pages/about/home/home.wxml','./pages/about/log/log.wxml','./pages/about/test/filter.wxml','./pages/about/test/list.wxml','./pages/basics/avatar/avatar.wxml','./pages/basics/background/background.wxml','./pages/basics/button/button.wxml','./pages/basics/button/design.wxml','./pages/basics/home/home.wxml','./pages/basics/icon/icon.wxml','./pages/basics/layout/layout.wxml','./pages/basics/loading/loading.wxml','./pages/basics/progress/progress.wxml','./pages/basics/shadow/shadow.wxml','./pages/basics/tag/tag.wxml','./pages/basics/text/text.wxml','./pages/component/bar/bar.wxml','./pages/component/card/card.wxml','./pages/component/chat/chat.wxml','./pages/component/form/form.wxml','./pages/component/home/home.wxml','./pages/component/list/list.wxml','./pages/component/modal/modal.wxml','./pages/component/nav/nav.wxml','./pages/component/steps/steps.wxml','./pages/component/swiper/swiper.wxml','./pages/component/timeline/timeline.wxml','./pages/index/index.wxml','./pages/plugin/animation/animation.wxml','./pages/plugin/drawer/drawer.wxml','./pages/plugin/gradual/gradual.wxml','./pages/plugin/home/home.wxml','./pages/plugin/indexes/indexes.wxml','./pages/plugin/verticalnav/verticalnav.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
var fE=_mz(z,'view',['bindtap',3,'class',1],[],e,s,gg)
var cF=_n('slot')
_rz(z,cF,'name',5,e,s,gg)
_(fE,cF)
_(xC,fE)
}
var oD=_v()
_(oB,oD)
if(_oz(z,6,e,s,gg)){oD.wxVkey=1
}
var hG=_n('slot')
_rz(z,hG,'name',7,e,s,gg)
_(oB,hG)
var oH=_n('slot')
_rz(z,oH,'name',8,e,s,gg)
_(oB,oH)
xC.wxXCkey=1
oD.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var oJ=_mz(z,'cu-custom',['bgColor',0,'isBack',1],[],e,s,gg)
_(r,oJ)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var tM=_mz(z,'cu-custom',['bgColor',0,'isBack',1],[],e,s,gg)
_(r,tM)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var bO=_mz(z,'cu-custom',['bgColor',0,'isBack',1],[],e,s,gg)
_(r,bO)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var xQ=_mz(z,'cu-custom',['bgColor',0,'isBack',1],[],e,s,gg)
_(r,xQ)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var fS=_mz(z,'cu-custom',['bgColor',0,'isBack',1],[],e,s,gg)
_(r,fS)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var hU=_mz(z,'cu-custom',['bgColor',0,'isBack',1],[],e,s,gg)
_(r,hU)
var oV=_v()
_(r,oV)
var cW=function(lY,oX,aZ,gg){
var e2=_v()
_(aZ,e2)
if(_oz(z,3,lY,oX,gg)){e2.wxVkey=1
}
e2.wxXCkey=1
return aZ
}
oV.wxXCkey=2
_2z(z,2,cW,e,s,gg,oV,'item','index','')
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var o4=_mz(z,'cu-custom',['bgColor',0,'isBack',1],[],e,s,gg)
_(r,o4)
var x5=_v()
_(r,x5)
var o6=function(c8,f7,h9,gg){
var cAB=_v()
_(h9,cAB)
if(_oz(z,3,c8,f7,gg)){cAB.wxVkey=1
}
cAB.wxXCkey=1
return h9
}
x5.wxXCkey=2
_2z(z,2,o6,e,s,gg,x5,'item','index','')
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var tEB=_mz(z,'cu-custom',['bgColor',0,'isBack',1],[],e,s,gg)
_(r,tEB)
var lCB=_v()
_(r,lCB)
if(_oz(z,2,e,s,gg)){lCB.wxVkey=1
}
var aDB=_v()
_(r,aDB)
if(_oz(z,3,e,s,gg)){aDB.wxVkey=1
}
var eFB=_v()
_(r,eFB)
var bGB=function(xIB,oHB,oJB,gg){
var cLB=_v()
_(oJB,cLB)
if(_oz(z,5,xIB,oHB,gg)){cLB.wxVkey=1
}
cLB.wxXCkey=1
return oJB
}
eFB.wxXCkey=2
_2z(z,4,bGB,e,s,gg,eFB,'item','index','')
lCB.wxXCkey=1
aDB.wxXCkey=1
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var cOB=_mz(z,'cu-custom',['bgColor',0,'isBack',1],[],e,s,gg)
_(r,cOB)
var oPB=_v()
_(r,oPB)
var lQB=function(tSB,aRB,eTB,gg){
var oVB=_v()
_(eTB,oVB)
if(_oz(z,3,tSB,aRB,gg)){oVB.wxVkey=1
}
oVB.wxXCkey=1
return eTB
}
oPB.wxXCkey=2
_2z(z,2,lQB,e,s,gg,oPB,'item','index','')
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var h1B=_mz(z,'cu-custom',['bgColor',0,'isBack',1],[],e,s,gg)
_(r,h1B)
var oXB=_v()
_(r,oXB)
if(_oz(z,2,e,s,gg)){oXB.wxVkey=1
}
var fYB=_v()
_(r,fYB)
if(_oz(z,3,e,s,gg)){fYB.wxVkey=1
}
var cZB=_v()
_(r,cZB)
if(_oz(z,4,e,s,gg)){cZB.wxVkey=1
}
oXB.wxXCkey=1
fYB.wxXCkey=1
cZB.wxXCkey=1
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var o4B=_mz(z,'cu-custom',['bgColor',0,'isBack',1],[],e,s,gg)
_(r,o4B)
var c3B=_v()
_(r,c3B)
if(_oz(z,2,e,s,gg)){c3B.wxVkey=1
}
c3B.wxXCkey=1
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var a6B=_mz(z,'cu-custom',['bgColor',0,'isBack',1],[],e,s,gg)
_(r,a6B)
var t7B=_v()
_(r,t7B)
var e8B=function(o0B,b9B,xAC,gg){
var fCC=_v()
_(xAC,fCC)
if(_oz(z,3,o0B,b9B,gg)){fCC.wxVkey=1
}
fCC.wxXCkey=1
return xAC
}
t7B.wxXCkey=2
_2z(z,2,e8B,e,s,gg,t7B,'item','index','')
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var hEC=_mz(z,'cu-custom',['bgColor',0,'isBack',1],[],e,s,gg)
_(r,hEC)
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var cGC=_mz(z,'cu-custom',['bgColor',0,'isBack',1],[],e,s,gg)
_(r,cGC)
var oHC=_n('view')
_rz(z,oHC,'class',2,e,s,gg)
var lIC=_v()
_(oHC,lIC)
var aJC=function(eLC,tKC,bMC,gg){
var xOC=_v()
_(bMC,xOC)
if(_oz(z,4,eLC,tKC,gg)){xOC.wxVkey=1
}
xOC.wxXCkey=1
return bMC
}
lIC.wxXCkey=2
_2z(z,3,aJC,e,s,gg,lIC,'item','index','')
var oPC=_v()
_(oHC,oPC)
var fQC=function(hSC,cRC,oTC,gg){
var oVC=_v()
_(oTC,oVC)
if(_oz(z,6,hSC,cRC,gg)){oVC.wxVkey=1
}
oVC.wxXCkey=1
return oTC
}
oPC.wxXCkey=2
_2z(z,5,fQC,e,s,gg,oPC,'item','index','')
_(r,oHC)
var lWC=_v()
_(r,lWC)
var aXC=function(eZC,tYC,b1C,gg){
var x3C=_v()
_(b1C,x3C)
if(_oz(z,8,eZC,tYC,gg)){x3C.wxVkey=1
}
x3C.wxXCkey=1
return b1C
}
lWC.wxXCkey=2
_2z(z,7,aXC,e,s,gg,lWC,'item','index','')
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var f5C=_mz(z,'cu-custom',['bgColor',0,'isBack',1],[],e,s,gg)
_(r,f5C)
var c6C=_v()
_(r,c6C)
var h7C=function(c9C,o8C,o0C,gg){
var aBD=_v()
_(o0C,aBD)
if(_oz(z,3,c9C,o8C,gg)){aBD.wxVkey=1
}
aBD.wxXCkey=1
return o0C
}
c6C.wxXCkey=2
_2z(z,2,h7C,e,s,gg,c6C,'item','index','')
var tCD=_v()
_(r,tCD)
var eDD=function(oFD,bED,xGD,gg){
var fID=_v()
_(xGD,fID)
if(_oz(z,5,oFD,bED,gg)){fID.wxVkey=1
}
fID.wxXCkey=1
return xGD
}
tCD.wxXCkey=2
_2z(z,4,eDD,e,s,gg,tCD,'item','index','')
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var oLD=_mz(z,'cu-custom',['bgColor',0,'isCustom',1],[],e,s,gg)
_(r,oLD)
var hKD=_v()
_(r,hKD)
if(_oz(z,2,e,s,gg)){hKD.wxVkey=1
}
hKD.wxXCkey=1
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var oND=_mz(z,'cu-custom',['bgColor',0,'isBack',1],[],e,s,gg)
_(r,oND)
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var aPD=_mz(z,'cu-custom',['bgColor',0,'isBack',1],[],e,s,gg)
_(r,aPD)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var bSD=_mz(z,'cu-custom',['bgColor',0,'isBack',1],[],e,s,gg)
_(r,bSD)
var eRD=_v()
_(r,eRD)
if(_oz(z,2,e,s,gg)){eRD.wxVkey=1
}
eRD.wxXCkey=1
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
var oVD=_mz(z,'scroll-view',['class',0,'scrollY',1],[],e,s,gg)
var fWD=_mz(z,'cu-custom',['bgColor',2,'isBack',1],[],e,s,gg)
_(oVD,fWD)
var cXD=_v()
_(oVD,cXD)
var hYD=function(c1D,oZD,o2D,gg){
var a4D=_v()
_(o2D,a4D)
if(_oz(z,5,c1D,oZD,gg)){a4D.wxVkey=1
var t5D=_v()
_(a4D,t5D)
if(_oz(z,6,c1D,oZD,gg)){t5D.wxVkey=1
var e6D=_v()
_(t5D,e6D)
if(_oz(z,7,c1D,oZD,gg)){e6D.wxVkey=1
}
e6D.wxXCkey=1
}
t5D.wxXCkey=1
}
a4D.wxXCkey=1
return o2D
}
cXD.wxXCkey=2
_2z(z,4,hYD,e,s,gg,cXD,'item','index','')
_(r,oVD)
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var o8D=_mz(z,'cu-custom',['bgColor',0,'isBack',1],[],e,s,gg)
_(r,o8D)
var x9D=_mz(z,'view',['bindtap',2,'class',1],[],e,s,gg)
var o0D=_mz(z,'view',['catchtap',-1,'class',4],[],e,s,gg)
var fAE=_v()
_(o0D,fAE)
var cBE=function(oDE,hCE,cEE,gg){
var lGE=_mz(z,'button',['bindtap',7,'class',1,'data-value',2],[],oDE,hCE,gg)
var aHE=_v()
_(lGE,aHE)
if(_oz(z,10,oDE,hCE,gg)){aHE.wxVkey=1
}
aHE.wxXCkey=1
_(cEE,lGE)
return cEE
}
fAE.wxXCkey=2
_2z(z,5,cBE,e,s,gg,fAE,'item','index','{{index}}')
_(x9D,o0D)
_(r,x9D)
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var eJE=_mz(z,'cu-custom',['bgColor',0,'isBack',1],[],e,s,gg)
_(r,eJE)
var bKE=_v()
_(r,bKE)
var oLE=function(oNE,xME,fOE,gg){
var hQE=_v()
_(fOE,hQE)
if(_oz(z,3,oNE,xME,gg)){hQE.wxVkey=1
}
hQE.wxXCkey=1
return fOE
}
bKE.wxXCkey=2
_2z(z,2,oLE,e,s,gg,bKE,'item','index','')
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var cSE=_mz(z,'cu-custom',['bgColor',0,'isBack',1],[],e,s,gg)
_(r,cSE)
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var lUE=_mz(z,'cu-custom',['bgColor',0,'isBack',1],[],e,s,gg)
_(r,lUE)
var aVE=_v()
_(r,aVE)
var tWE=function(bYE,eXE,oZE,gg){
var o2E=_n('swiper-item')
var f3E=_v()
_(o2E,f3E)
if(_oz(z,3,bYE,eXE,gg)){f3E.wxVkey=1
}
var c4E=_v()
_(o2E,c4E)
if(_oz(z,4,bYE,eXE,gg)){c4E.wxVkey=1
}
f3E.wxXCkey=1
c4E.wxXCkey=1
_(oZE,o2E)
return oZE
}
aVE.wxXCkey=2
_2z(z,2,tWE,e,s,gg,aVE,'item','index','')
var h5E=_mz(z,'swiper',['autoplay',5,'bindchange',1,'circular',2,'class',3,'duration',4,'indicatorActiveColor',5,'indicatorColor',6,'indicatorDots',7,'interval',8],[],e,s,gg)
var o6E=_v()
_(h5E,o6E)
var c7E=function(l9E,o8E,a0E,gg){
var eBF=_n('view')
_rz(z,eBF,'class',15,l9E,o8E,gg)
var bCF=_v()
_(eBF,bCF)
if(_oz(z,16,l9E,o8E,gg)){bCF.wxVkey=1
}
var oDF=_v()
_(eBF,oDF)
if(_oz(z,17,l9E,o8E,gg)){oDF.wxVkey=1
}
bCF.wxXCkey=1
oDF.wxXCkey=1
_(a0E,eBF)
return a0E
}
o6E.wxXCkey=2
_2z(z,14,c7E,e,s,gg,o6E,'item','index','')
_(r,h5E)
var xEF=_mz(z,'view',['bindtouchend',18,'bindtouchmove',1,'bindtouchstart',2,'class',3],[],e,s,gg)
var oFF=_v()
_(xEF,oFF)
var fGF=function(hIF,cHF,oJF,gg){
var oLF=_n('view')
_rz(z,oLF,'class',23,hIF,cHF,gg)
var lMF=_v()
_(oLF,lMF)
if(_oz(z,24,hIF,cHF,gg)){lMF.wxVkey=1
}
var aNF=_v()
_(oLF,aNF)
if(_oz(z,25,hIF,cHF,gg)){aNF.wxVkey=1
}
lMF.wxXCkey=1
aNF.wxXCkey=1
_(oJF,oLF)
return oJF
}
oFF.wxXCkey=2
_2z(z,22,fGF,e,s,gg,oFF,'item','index','')
_(r,xEF)
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var ePF=_mz(z,'cu-custom',['bgColor',0,'isBack',1],[],e,s,gg)
_(r,ePF)
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var oRF=_v()
_(r,oRF)
if(_oz(z,0,e,s,gg)){oRF.wxVkey=1
var cVF=_n('basics')
_(oRF,cVF)
}
var xSF=_v()
_(r,xSF)
if(_oz(z,1,e,s,gg)){xSF.wxVkey=1
var hWF=_n('component')
_(xSF,hWF)
}
var oTF=_v()
_(r,oTF)
if(_oz(z,2,e,s,gg)){oTF.wxVkey=1
var oXF=_n('plugin')
_(oTF,oXF)
}
var fUF=_v()
_(r,fUF)
if(_oz(z,3,e,s,gg)){fUF.wxVkey=1
var cYF=_n('about')
_(fUF,cYF)
}
oRF.wxXCkey=1
oRF.wxXCkey=3
xSF.wxXCkey=1
xSF.wxXCkey=3
oTF.wxXCkey=1
oTF.wxXCkey=3
fUF.wxXCkey=1
fUF.wxXCkey=3
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var l1F=_mz(z,'cu-custom',['bgImage',0,'isBack',1],[],e,s,gg)
_(r,l1F)
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var t3F=_mz(z,'cu-custom',['bgColor',0,'isBack',1],[],e,s,gg)
_(r,t3F)
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var o6F=_n('cu-custom')
_rz(z,o6F,'bgImage',0,e,s,gg)
_(r,o6F)
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var o8F=_mz(z,'cu-custom',['bgImage',0,'isBack',1],[],e,s,gg)
_(r,o8F)
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
return r
}
e_[x[35]]={f:m35,j:[],i:[],ti:[],ic:[]}
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
	__wxAppCode__['app.json'] = {"pages":["pages/index/index","pages/basics/home/home","pages/basics/layout/layout","pages/basics/button/button","pages/basics/button/design","pages/basics/tag/tag","pages/basics/avatar/avatar","pages/basics/progress/progress","pages/basics/shadow/shadow","pages/basics/background/background","pages/basics/text/text","pages/basics/icon/icon","pages/basics/loading/loading","pages/component/home/home","pages/component/list/list","pages/component/bar/bar","pages/component/timeline/timeline","pages/component/chat/chat","pages/component/form/form","pages/component/nav/nav","pages/component/card/card","pages/component/swiper/swiper","pages/component/modal/modal","pages/component/steps/steps","pages/plugin/home/home","pages/plugin/indexes/indexes","pages/plugin/gradual/gradual","pages/plugin/animation/animation","pages/about/about/about","pages/about/log/log","pages/about/test/list","pages/about/test/filter","pages/about/home/home","pages/plugin/drawer/drawer","pages/plugin/verticalnav/verticalnav"],"window":{"navigationBarBackgroundColor":"#39b54a","navigationBarTitleText":"Color UI","navigationStyle":"custom","navigationBarTextStyle":"white"},"usingComponents":{"cu-custom":"/colorui/components/cu-custom"},"sitemapLocation":"sitemap.json"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['app.wxml'] = [$gwx, './app.wxml'];else __wxAppCode__['app.wxml'] = $gwx( './app.wxml' );
		__wxAppCode__['colorui/components/cu-custom.json'] = {"component":true,"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['colorui/components/cu-custom.wxml'] = [$gwx, './colorui/components/cu-custom.wxml'];else __wxAppCode__['colorui/components/cu-custom.wxml'] = $gwx( './colorui/components/cu-custom.wxml' );
		__wxAppCode__['pages/about/about/about.json'] = {"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/about/about/about.wxml'] = [$gwx, './pages/about/about/about.wxml'];else __wxAppCode__['pages/about/about/about.wxml'] = $gwx( './pages/about/about/about.wxml' );
		__wxAppCode__['pages/about/home/home.json'] = {"component":true,"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/about/home/home.wxml'] = [$gwx, './pages/about/home/home.wxml'];else __wxAppCode__['pages/about/home/home.wxml'] = $gwx( './pages/about/home/home.wxml' );
		__wxAppCode__['pages/about/log/log.json'] = {"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/about/log/log.wxml'] = [$gwx, './pages/about/log/log.wxml'];else __wxAppCode__['pages/about/log/log.wxml'] = $gwx( './pages/about/log/log.wxml' );
		__wxAppCode__['pages/about/test/filter.json'] = {"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/about/test/filter.wxml'] = [$gwx, './pages/about/test/filter.wxml'];else __wxAppCode__['pages/about/test/filter.wxml'] = $gwx( './pages/about/test/filter.wxml' );
		__wxAppCode__['pages/about/test/list.json'] = {"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/about/test/list.wxml'] = [$gwx, './pages/about/test/list.wxml'];else __wxAppCode__['pages/about/test/list.wxml'] = $gwx( './pages/about/test/list.wxml' );
		__wxAppCode__['pages/basics/avatar/avatar.json'] = {"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/basics/avatar/avatar.wxml'] = [$gwx, './pages/basics/avatar/avatar.wxml'];else __wxAppCode__['pages/basics/avatar/avatar.wxml'] = $gwx( './pages/basics/avatar/avatar.wxml' );
		__wxAppCode__['pages/basics/background/background.json'] = {"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/basics/background/background.wxml'] = [$gwx, './pages/basics/background/background.wxml'];else __wxAppCode__['pages/basics/background/background.wxml'] = $gwx( './pages/basics/background/background.wxml' );
		__wxAppCode__['pages/basics/button/button.json'] = {"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/basics/button/button.wxml'] = [$gwx, './pages/basics/button/button.wxml'];else __wxAppCode__['pages/basics/button/button.wxml'] = $gwx( './pages/basics/button/button.wxml' );
		__wxAppCode__['pages/basics/button/design.json'] = {"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/basics/button/design.wxml'] = [$gwx, './pages/basics/button/design.wxml'];else __wxAppCode__['pages/basics/button/design.wxml'] = $gwx( './pages/basics/button/design.wxml' );
		__wxAppCode__['pages/basics/home/home.json'] = {"component":true,"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/basics/home/home.wxml'] = [$gwx, './pages/basics/home/home.wxml'];else __wxAppCode__['pages/basics/home/home.wxml'] = $gwx( './pages/basics/home/home.wxml' );
		__wxAppCode__['pages/basics/icon/icon.json'] = {"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/basics/icon/icon.wxml'] = [$gwx, './pages/basics/icon/icon.wxml'];else __wxAppCode__['pages/basics/icon/icon.wxml'] = $gwx( './pages/basics/icon/icon.wxml' );
		__wxAppCode__['pages/basics/layout/layout.json'] = {"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/basics/layout/layout.wxml'] = [$gwx, './pages/basics/layout/layout.wxml'];else __wxAppCode__['pages/basics/layout/layout.wxml'] = $gwx( './pages/basics/layout/layout.wxml' );
		__wxAppCode__['pages/basics/loading/loading.json'] = {"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/basics/loading/loading.wxml'] = [$gwx, './pages/basics/loading/loading.wxml'];else __wxAppCode__['pages/basics/loading/loading.wxml'] = $gwx( './pages/basics/loading/loading.wxml' );
		__wxAppCode__['pages/basics/progress/progress.json'] = {"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/basics/progress/progress.wxml'] = [$gwx, './pages/basics/progress/progress.wxml'];else __wxAppCode__['pages/basics/progress/progress.wxml'] = $gwx( './pages/basics/progress/progress.wxml' );
		__wxAppCode__['pages/basics/shadow/shadow.json'] = {"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/basics/shadow/shadow.wxml'] = [$gwx, './pages/basics/shadow/shadow.wxml'];else __wxAppCode__['pages/basics/shadow/shadow.wxml'] = $gwx( './pages/basics/shadow/shadow.wxml' );
		__wxAppCode__['pages/basics/tag/tag.json'] = {"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/basics/tag/tag.wxml'] = [$gwx, './pages/basics/tag/tag.wxml'];else __wxAppCode__['pages/basics/tag/tag.wxml'] = $gwx( './pages/basics/tag/tag.wxml' );
		__wxAppCode__['pages/basics/text/text.json'] = {"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/basics/text/text.wxml'] = [$gwx, './pages/basics/text/text.wxml'];else __wxAppCode__['pages/basics/text/text.wxml'] = $gwx( './pages/basics/text/text.wxml' );
		__wxAppCode__['pages/component/bar/bar.json'] = {"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/component/bar/bar.wxml'] = [$gwx, './pages/component/bar/bar.wxml'];else __wxAppCode__['pages/component/bar/bar.wxml'] = $gwx( './pages/component/bar/bar.wxml' );
		__wxAppCode__['pages/component/card/card.json'] = {"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/component/card/card.wxml'] = [$gwx, './pages/component/card/card.wxml'];else __wxAppCode__['pages/component/card/card.wxml'] = $gwx( './pages/component/card/card.wxml' );
		__wxAppCode__['pages/component/chat/chat.json'] = {"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/component/chat/chat.wxml'] = [$gwx, './pages/component/chat/chat.wxml'];else __wxAppCode__['pages/component/chat/chat.wxml'] = $gwx( './pages/component/chat/chat.wxml' );
		__wxAppCode__['pages/component/form/form.json'] = {"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/component/form/form.wxml'] = [$gwx, './pages/component/form/form.wxml'];else __wxAppCode__['pages/component/form/form.wxml'] = $gwx( './pages/component/form/form.wxml' );
		__wxAppCode__['pages/component/home/home.json'] = {"component":true,"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/component/home/home.wxml'] = [$gwx, './pages/component/home/home.wxml'];else __wxAppCode__['pages/component/home/home.wxml'] = $gwx( './pages/component/home/home.wxml' );
		__wxAppCode__['pages/component/list/list.json'] = {"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/component/list/list.wxml'] = [$gwx, './pages/component/list/list.wxml'];else __wxAppCode__['pages/component/list/list.wxml'] = $gwx( './pages/component/list/list.wxml' );
		__wxAppCode__['pages/component/modal/modal.json'] = {"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/component/modal/modal.wxml'] = [$gwx, './pages/component/modal/modal.wxml'];else __wxAppCode__['pages/component/modal/modal.wxml'] = $gwx( './pages/component/modal/modal.wxml' );
		__wxAppCode__['pages/component/nav/nav.json'] = {"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/component/nav/nav.wxml'] = [$gwx, './pages/component/nav/nav.wxml'];else __wxAppCode__['pages/component/nav/nav.wxml'] = $gwx( './pages/component/nav/nav.wxml' );
		__wxAppCode__['pages/component/steps/steps.json'] = {"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/component/steps/steps.wxml'] = [$gwx, './pages/component/steps/steps.wxml'];else __wxAppCode__['pages/component/steps/steps.wxml'] = $gwx( './pages/component/steps/steps.wxml' );
		__wxAppCode__['pages/component/swiper/swiper.json'] = {"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/component/swiper/swiper.wxml'] = [$gwx, './pages/component/swiper/swiper.wxml'];else __wxAppCode__['pages/component/swiper/swiper.wxml'] = $gwx( './pages/component/swiper/swiper.wxml' );
		__wxAppCode__['pages/component/timeline/timeline.json'] = {"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/component/timeline/timeline.wxml'] = [$gwx, './pages/component/timeline/timeline.wxml'];else __wxAppCode__['pages/component/timeline/timeline.wxml'] = $gwx( './pages/component/timeline/timeline.wxml' );
		__wxAppCode__['pages/index/index.json'] = {"usingComponents":{"basics":"/pages/basics/home/home","component":"/pages/component/home/home","plugin":"/pages/plugin/home/home","about":"/pages/about/home/home","cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index.wxml'] = [$gwx, './pages/index/index.wxml'];else __wxAppCode__['pages/index/index.wxml'] = $gwx( './pages/index/index.wxml' );
		__wxAppCode__['pages/plugin/animation/animation.json'] = {"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/plugin/animation/animation.wxml'] = [$gwx, './pages/plugin/animation/animation.wxml'];else __wxAppCode__['pages/plugin/animation/animation.wxml'] = $gwx( './pages/plugin/animation/animation.wxml' );
		__wxAppCode__['pages/plugin/drawer/drawer.json'] = {"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/plugin/drawer/drawer.wxml'] = [$gwx, './pages/plugin/drawer/drawer.wxml'];else __wxAppCode__['pages/plugin/drawer/drawer.wxml'] = $gwx( './pages/plugin/drawer/drawer.wxml' );
		__wxAppCode__['pages/plugin/gradual/gradual.json'] = {"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/plugin/gradual/gradual.wxml'] = [$gwx, './pages/plugin/gradual/gradual.wxml'];else __wxAppCode__['pages/plugin/gradual/gradual.wxml'] = $gwx( './pages/plugin/gradual/gradual.wxml' );
		__wxAppCode__['pages/plugin/home/home.json'] = {"component":true,"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/plugin/home/home.wxml'] = [$gwx, './pages/plugin/home/home.wxml'];else __wxAppCode__['pages/plugin/home/home.wxml'] = $gwx( './pages/plugin/home/home.wxml' );
		__wxAppCode__['pages/plugin/indexes/indexes.json'] = {"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/plugin/indexes/indexes.wxml'] = [$gwx, './pages/plugin/indexes/indexes.wxml'];else __wxAppCode__['pages/plugin/indexes/indexes.wxml'] = $gwx( './pages/plugin/indexes/indexes.wxml' );
		__wxAppCode__['pages/plugin/verticalnav/verticalnav.json'] = {"usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/plugin/verticalnav/verticalnav.wxml'] = [$gwx, './pages/plugin/verticalnav/verticalnav.wxml'];else __wxAppCode__['pages/plugin/verticalnav/verticalnav.wxml'] = $gwx( './pages/plugin/verticalnav/verticalnav.wxml' );
		__wxAppCode__['project.config.json'] = {
	"description": "项目配置文件",
	"packOptions": {
		"ignore": []
	},
	"setting": {
		"urlCheck": true,
		"es6": true,
		"postcss": true,
		"minified": true,
		"newFeature": true
	},
	"compileType": "miniprogram",
	"libVersion": "2.6.4",
	"appid": "wxfd5241d66a07713f",
	"projectname": "ColorUI2.0-demo",
	"debugOptions": {
		"hidedInDevtools": []
	},
	"isGameTourist": false,
	"condition": {
		"search": {
			"current": -1,
			"list": []
		},
		"conversation": {
			"current": -1,
			"list": []
		},
		"plugin": {
			"current": -1,
			"list": []
		},
		"game": {
			"currentL": -1,
			"list": []
		},
		"miniprogram": {
			"current": 27,
			"list": [
				{
					"id": 0,
					"name": "-----基础-首页-----",
					"pathName": "pages/basics/home/home",
					"query": ""
				},
				{
					"id": -1,
					"name": "1.1 基础-布局",
					"pathName": "pages/basics/layout/layout",
					"query": ""
				},
				{
					"id": 2,
					"name": "1.2 基础-背景",
					"pathName": "pages/basics/background/background",
					"query": ""
				},
				{
					"id": -1,
					"name": "1.3 基础-文本",
					"pathName": "pages/basics/text/text",
					"query": ""
				},
				{
					"id": -1,
					"name": "1.4 基础-图标",
					"pathName": "pages/basics/icon/icon",
					"query": ""
				},
				{
					"id": 2,
					"name": "1.5 基础-按钮",
					"pathName": "pages/basics/button/button",
					"query": ""
				},
				{
					"id": 2,
					"name": "1.5 -- 基础-按钮-设计",
					"pathName": "pages/basics/button/design",
					"query": ""
				},
				{
					"id": 2,
					"name": "1.6 基础-标签",
					"pathName": "pages/basics/tag/tag",
					"query": ""
				},
				{
					"id": -1,
					"name": "1.7 基础-头像",
					"pathName": "pages/basics/avatar/avatar",
					"query": ""
				},
				{
					"id": -1,
					"name": "1.8 基础-进度条",
					"pathName": "pages/basics/progress/progress",
					"query": ""
				},
				{
					"id": 10,
					"name": "1.9 基础-边框阴影",
					"pathName": "pages/basics/shadow/shadow",
					"query": ""
				},
				{
					"id": -1,
					"name": "1.10 基础-加载",
					"pathName": "pages/basics/loading/loading",
					"query": ""
				},
				{
					"id": -1,
					"name": "-----组件-首页-----",
					"pathName": "pages/component/home/home",
					"query": ""
				},
				{
					"id": -1,
					"name": "2.1 组件-操作条",
					"pathName": "pages/component/bar/bar",
					"query": ""
				},
				{
					"id": 12,
					"name": "2.2 组件-导航栏",
					"pathName": "pages/component/nav/nav",
					"query": ""
				},
				{
					"id": -1,
					"name": "2.3 组件-列表",
					"pathName": "pages/component/list/list",
					"query": ""
				},
				{
					"id": -1,
					"name": "2.4 组件-卡片",
					"pathName": "pages/component/card/card",
					"query": ""
				},
				{
					"id": -1,
					"name": "2.5 组件-表单",
					"pathName": "pages/component/form/form",
					"query": ""
				},
				{
					"id": -1,
					"name": "2.6 组件-时间轴",
					"pathName": "pages/component/timeline/timeline",
					"query": ""
				},
				{
					"id": -1,
					"name": "2.7 组件-聊天",
					"pathName": "pages/component/chat/chat",
					"query": ""
				},
				{
					"id": -1,
					"name": "2.8 组件-轮播",
					"pathName": "pages/component/swiper/swiper",
					"query": ""
				},
				{
					"id": 20,
					"name": "2.9 组件-模态框",
					"pathName": "pages/component/modal/modal",
					"query": ""
				},
				{
					"id": 20,
					"name": "2.10 组件-步骤条",
					"pathName": "pages/component/steps/steps",
					"query": ""
				},
				{
					"id": -1,
					"name": "-----扩展-首页-----",
					"pathName": "pages/plugin/home/home",
					"query": ""
				},
				{
					"id": -1,
					"name": "3.1 扩展-索引",
					"pathName": "pages/plugin/indexes/indexes",
					"query": ""
				},
				{
					"id": -1,
					"name": "3.2 扩展-动画",
					"pathName": "pages/plugin/animation/animation",
					"query": ""
				},
				{
					"id": 31,
					"name": "3.3 扩展-全屏抽屉",
					"pathName": "pages/plugin/drawer/drawer",
					"query": "",
					"scene": null
				},
				{
					"id": 27,
					"name": "3.4 扩展-垂直导航",
					"pathName": "pages/plugin/verticalnav/verticalnav",
					"query": "",
					"scene": null
				},
				{
					"id": -1,
					"name": "-----关于-首页-----",
					"pathName": "pages/about/home/home",
					"query": ""
				},
				{
					"id": -1,
					"name": "4.1 关于",
					"pathName": "pages/about/about/about",
					"query": ""
				},
				{
					"id": -1,
					"name": "4.2 关于-日志",
					"pathName": "pages/about/log/log",
					"query": ""
				},
				{
					"id": 28,
					"name": "4.3 测试列表",
					"pathName": "pages/about/test/list",
					"query": ""
				},
				{
					"id": -1,
					"name": "4.3 --- filter：blur引起的ios花屏测试",
					"pathName": "pages/about/test/filter",
					"query": ""
				}
			]
		}
	}
};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['project.config.wxml'] = [$gwx, './project.config.wxml'];else __wxAppCode__['project.config.wxml'] = $gwx( './project.config.wxml' );
		__wxAppCode__['sitemap.json'] = {
  "desc": "关于本文件的更多信息，请参考文档 https://developers.weixin.qq.com/miniprogram/dev/framework/sitemap.html",
  "rules": [{
  "action": "allow",
  "page": "*"
  }]
};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['sitemap.wxml'] = [$gwx, './sitemap.wxml'];else __wxAppCode__['sitemap.wxml'] = $gwx( './sitemap.wxml' );
	
	define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";App({onLaunch:function(){var t=this;wx.cloud&&wx.cloud.init({traceUser:!0}),wx.getSystemInfo({success:function(a){t.globalData.StatusBar=a.statusBarHeight;var o=wx.getMenuButtonBoundingClientRect();o&&o.bottom?(t.globalData.Custom=o,t.globalData.CustomBar=o.bottom+o.top-a.statusBarHeight):t.globalData.CustomBar=a.statusBarHeight+50}})},globalData:{ColorList:[{title:"嫣红",name:"red",color:"#e54d42"},{title:"桔橙",name:"orange",color:"#f37b1d"},{title:"明黄",name:"yellow",color:"#fbbd08"},{title:"橄榄",name:"olive",color:"#8dc63f"},{title:"森绿",name:"green",color:"#39b54a"},{title:"天青",name:"cyan",color:"#1cbbb4"},{title:"海蓝",name:"blue",color:"#0081ff"},{title:"姹紫",name:"purple",color:"#6739b6"},{title:"木槿",name:"mauve",color:"#9c26b0"},{title:"桃粉",name:"pink",color:"#e03997"},{title:"棕褐",name:"brown",color:"#a5673f"},{title:"玄灰",name:"grey",color:"#8799a3"},{title:"草灰",name:"gray",color:"#aaaaaa"},{title:"墨黑",name:"black",color:"#333333"},{title:"雅白",name:"white",color:"#ffffff"}]}}); 
 			}); 	require("app.js");
 		__wxRoute = 'colorui/components/cu-custom';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'colorui/components/cu-custom.js';	define("colorui/components/cu-custom.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Component({options:{addGlobalClass:!0,multipleSlots:!0},properties:{bgColor:{type:String,default:""},isCustom:{type:[Boolean,String],default:!1},isBack:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""}},data:{StatusBar:t.globalData.StatusBar,CustomBar:t.globalData.CustomBar,Custom:t.globalData.Custom},methods:{BackPage:function(){wx.navigateBack({delta:1})},toHome:function(){wx.reLaunch({url:"/pages/index/index"})}}}); 
 			}); 	require("colorui/components/cu-custom.js");
 		__wxRoute = 'pages/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/index.js';	define("pages/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{PageCur:"basics"},onLoad:function(){},NavChange:function(a){this.setData({PageCur:a.currentTarget.dataset.cur});var e=null;wx.createInterstitialAd&&(e=wx.createInterstitialAd({adUnitId:"adunit-53f251ff1944e719"})),e&&e.show().catch(function(a){console.error(a)})},onShareAppMessage:function(){return{title:"ColorUI-高颜值的小程序UI组件库",imageUrl:"/images/share.jpg",path:"/pages/index/index"}}}); 
 			}); 	require("pages/index/index.js");
 		__wxRoute = 'pages/basics/home/home';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/basics/home/home.js';	define("pages/basics/home/home.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({options:{addGlobalClass:!0},data:{elements:[{title:"布局",name:"layout",color:"cyan",icon:"newsfill"},{title:"背景",name:"background",color:"blue",icon:"colorlens"},{title:"文本",name:"text",color:"purple",icon:"font"},{title:"图标 ",name:"icon",color:"mauve",icon:"icon"},{title:"按钮",name:"button",color:"pink",icon:"btn"},{title:"标签",name:"tag",color:"brown",icon:"tagfill"},{title:"头像",name:"avatar",color:"red",icon:"myfill"},{title:"进度条",name:"progress",color:"orange",icon:"icloading"},{title:"边框阴影",name:"shadow",color:"olive",icon:"copy"},{title:"加载",name:"loading",color:"green",icon:"loading2"}]}}); 
 			}); 	require("pages/basics/home/home.js");
 		__wxRoute = 'pages/basics/layout/layout';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/basics/layout/layout.js';	define("pages/basics/layout/layout.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{CustomBar:t.globalData.CustomBar,TabCur:0,tabNav:["Flex布局","Grid布局","辅助布局"]},tabSelect:function(t){console.log(t),this.setData({TabCur:t.currentTarget.dataset.id,scrollLeft:60*(t.currentTarget.dataset.id-1)})}}); 
 			}); 	require("pages/basics/layout/layout.js");
 		__wxRoute = 'pages/basics/button/button';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/basics/button/button.js';	define("pages/basics/button/button.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{ColorList:t.globalData.ColorList},SetShadow:function(t){this.setData({shadow:t.detail.value})},SetBorderSize:function(t){this.setData({bordersize:t.detail.value})}}); 
 			}); 	require("pages/basics/button/button.js");
 		__wxRoute = 'pages/basics/button/design';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/basics/button/design.js';	define("pages/basics/button/design.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{ColorList:t.globalData.ColorList,color:"red"},showModal:function(t){this.setData({modalName:t.currentTarget.dataset.target})},hideModal:function(t){this.setData({modalName:null})},SetRound:function(t){this.setData({round:t.detail.value})},SetSize:function(t){this.setData({size:t.detail.value})},SetColor:function(t){this.setData({color:t.currentTarget.dataset.color,modalName:null})},SetShadow:function(t){this.setData({shadow:t.detail.value})},SetBorder:function(t){this.setData({border:t.detail.value}),t.detail.value||this.setData({bordersize:!1})},SetBorderSize:function(t){this.setData({bordersize:t.detail.value})},SetBlock:function(t){this.setData({block:t.detail.value})}}); 
 			}); 	require("pages/basics/button/design.js");
 		__wxRoute = 'pages/basics/tag/tag';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/basics/tag/tag.js';	define("pages/basics/tag/tag.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp();Page({data:{ColorList:a.globalData.ColorList}}); 
 			}); 	require("pages/basics/tag/tag.js");
 		__wxRoute = 'pages/basics/avatar/avatar';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/basics/avatar/avatar.js';	define("pages/basics/avatar/avatar.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var s=getApp();Page({data:{ColorList:s.globalData.ColorList,avatar:["https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg"]}}); 
 			}); 	require("pages/basics/avatar/avatar.js");
 		__wxRoute = 'pages/basics/progress/progress';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/basics/progress/progress.js';	define("pages/basics/progress/progress.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{ColorList:t.globalData.ColorList,color:"red"},onLoad:function(){var t=this;setTimeout(function(){t.setData({loading:!0})},500)},showModal:function(t){this.setData({modalName:t.currentTarget.dataset.target})},hideModal:function(t){this.setData({modalName:null})},SetColor:function(t){this.setData({color:t.currentTarget.dataset.color,modalName:null})},SetActive:function(t){this.setData({active:t.detail.value})}}); 
 			}); 	require("pages/basics/progress/progress.js");
 		__wxRoute = 'pages/basics/shadow/shadow';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/basics/shadow/shadow.js';	define("pages/basics/shadow/shadow.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";getApp();Page({SetSize:function(e){this.setData({size:e.detail.value})}}); 
 			}); 	require("pages/basics/shadow/shadow.js");
 		__wxRoute = 'pages/basics/background/background';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/basics/background/background.js';	define("pages/basics/background/background.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp();Page({data:{ColorList:a.globalData.ColorList}}); 
 			}); 	require("pages/basics/background/background.js");
 		__wxRoute = 'pages/basics/text/text';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/basics/text/text.js';	define("pages/basics/text/text.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";getApp();Page({data:{list:[{title:"嫣红",name:"red",color:"#e54d42"},{title:"桔橙",name:"orange",color:"#f37b1d"},{title:"明黄",name:"yellow",color:"#fbbd08"},{title:"橄榄",name:"olive",color:"#8dc63f"},{title:"森绿",name:"green",color:"#39b54a"},{title:"天青",name:"cyan",color:"#1cbbb4"},{title:"海蓝",name:"blue",color:"#0081ff"},{title:"姹紫",name:"purple",color:"#6739b6"},{title:"木槿",name:"mauve",color:"#9c26b0"},{title:"桃粉",name:"pink",color:"#e03997"},{title:"棕褐",name:"brown",color:"#a5673f"},{title:"玄灰",name:"grey",color:"#8799a3"},{title:"草灰",name:"gray",color:"#aaaaaa"},{title:"墨黑",name:"black",color:"#333333"},{title:"雅白",name:"white",color:"#ffffff"}]}}); 
 			}); 	require("pages/basics/text/text.js");
 		__wxRoute = 'pages/basics/icon/icon';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/basics/icon/icon.js';	define("pages/basics/icon/icon.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var i=getApp();Page({data:{CustomBar:i.globalData.CustomBar,icon:[{name:"appreciate",isShow:!0},{name:"check",isShow:!0},{name:"close",isShow:!0},{name:"edit",isShow:!0},{name:"emoji",isShow:!0},{name:"favorfill",isShow:!0},{name:"favor",isShow:!0},{name:"loading",isShow:!0},{name:"locationfill",isShow:!0},{name:"location",isShow:!0},{name:"phone",isShow:!0},{name:"roundcheckfill",isShow:!0},{name:"roundcheck",isShow:!0},{name:"roundclosefill",isShow:!0},{name:"roundclose",isShow:!0},{name:"roundrightfill",isShow:!0},{name:"roundright",isShow:!0},{name:"search",isShow:!0},{name:"taxi",isShow:!0},{name:"timefill",isShow:!0},{name:"time",isShow:!0},{name:"unfold",isShow:!0},{name:"warnfill",isShow:!0},{name:"warn",isShow:!0},{name:"camerafill",isShow:!0},{name:"camera",isShow:!0},{name:"commentfill",isShow:!0},{name:"comment",isShow:!0},{name:"likefill",isShow:!0},{name:"like",isShow:!0},{name:"notificationfill",isShow:!0},{name:"notification",isShow:!0},{name:"order",isShow:!0},{name:"samefill",isShow:!0},{name:"same",isShow:!0},{name:"deliver",isShow:!0},{name:"evaluate",isShow:!0},{name:"pay",isShow:!0},{name:"send",isShow:!0},{name:"shop",isShow:!0},{name:"ticket",isShow:!0},{name:"back",isShow:!0},{name:"cascades",isShow:!0},{name:"discover",isShow:!0},{name:"list",isShow:!0},{name:"more",isShow:!0},{name:"scan",isShow:!0},{name:"settings",isShow:!0},{name:"questionfill",isShow:!0},{name:"question",isShow:!0},{name:"shopfill",isShow:!0},{name:"form",isShow:!0},{name:"pic",isShow:!0},{name:"filter",isShow:!0},{name:"footprint",isShow:!0},{name:"top",isShow:!0},{name:"pulldown",isShow:!0},{name:"pullup",isShow:!0},{name:"right",isShow:!0},{name:"refresh",isShow:!0},{name:"moreandroid",isShow:!0},{name:"deletefill",isShow:!0},{name:"refund",isShow:!0},{name:"cart",isShow:!0},{name:"qrcode",isShow:!0},{name:"remind",isShow:!0},{name:"delete",isShow:!0},{name:"profile",isShow:!0},{name:"home",isShow:!0},{name:"cartfill",isShow:!0},{name:"discoverfill",isShow:!0},{name:"homefill",isShow:!0},{name:"message",isShow:!0},{name:"addressbook",isShow:!0},{name:"link",isShow:!0},{name:"lock",isShow:!0},{name:"unlock",isShow:!0},{name:"vip",isShow:!0},{name:"weibo",isShow:!0},{name:"activity",isShow:!0},{name:"friendaddfill",isShow:!0},{name:"friendadd",isShow:!0},{name:"friendfamous",isShow:!0},{name:"friend",isShow:!0},{name:"goods",isShow:!0},{name:"selection",isShow:!0},{name:"explore",isShow:!0},{name:"present",isShow:!0},{name:"squarecheckfill",isShow:!0},{name:"square",isShow:!0},{name:"squarecheck",isShow:!0},{name:"round",isShow:!0},{name:"roundaddfill",isShow:!0},{name:"roundadd",isShow:!0},{name:"add",isShow:!0},{name:"notificationforbidfill",isShow:!0},{name:"explorefill",isShow:!0},{name:"fold",isShow:!0},{name:"game",isShow:!0},{name:"redpacket",isShow:!0},{name:"selectionfill",isShow:!0},{name:"similar",isShow:!0},{name:"appreciatefill",isShow:!0},{name:"infofill",isShow:!0},{name:"info",isShow:!0},{name:"forwardfill",isShow:!0},{name:"forward",isShow:!0},{name:"rechargefill",isShow:!0},{name:"recharge",isShow:!0},{name:"vipcard",isShow:!0},{name:"voice",isShow:!0},{name:"voicefill",isShow:!0},{name:"friendfavor",isShow:!0},{name:"wifi",isShow:!0},{name:"share",isShow:!0},{name:"wefill",isShow:!0},{name:"we",isShow:!0},{name:"lightauto",isShow:!0},{name:"lightforbid",isShow:!0},{name:"lightfill",isShow:!0},{name:"camerarotate",isShow:!0},{name:"light",isShow:!0},{name:"barcode",isShow:!0},{name:"flashlightclose",isShow:!0},{name:"flashlightopen",isShow:!0},{name:"searchlist",isShow:!0},{name:"service",isShow:!0},{name:"sort",isShow:!0},{name:"down",isShow:!0},{name:"mobile",isShow:!0},{name:"mobilefill",isShow:!0},{name:"copy",isShow:!0},{name:"countdownfill",isShow:!0},{name:"countdown",isShow:!0},{name:"noticefill",isShow:!0},{name:"notice",isShow:!0},{name:"upstagefill",isShow:!0},{name:"upstage",isShow:!0},{name:"babyfill",isShow:!0},{name:"baby",isShow:!0},{name:"brandfill",isShow:!0},{name:"brand",isShow:!0},{name:"choicenessfill",isShow:!0},{name:"choiceness",isShow:!0},{name:"clothesfill",isShow:!0},{name:"clothes",isShow:!0},{name:"creativefill",isShow:!0},{name:"creative",isShow:!0},{name:"female",isShow:!0},{name:"keyboard",isShow:!0},{name:"male",isShow:!0},{name:"newfill",isShow:!0},{name:"new",isShow:!0},{name:"pullleft",isShow:!0},{name:"pullright",isShow:!0},{name:"rankfill",isShow:!0},{name:"rank",isShow:!0},{name:"bad",isShow:!0},{name:"cameraadd",isShow:!0},{name:"focus",isShow:!0},{name:"friendfill",isShow:!0},{name:"cameraaddfill",isShow:!0},{name:"apps",isShow:!0},{name:"paintfill",isShow:!0},{name:"paint",isShow:!0},{name:"picfill",isShow:!0},{name:"refresharrow",isShow:!0},{name:"colorlens",isShow:!0},{name:"markfill",isShow:!0},{name:"mark",isShow:!0},{name:"presentfill",isShow:!0},{name:"repeal",isShow:!0},{name:"album",isShow:!0},{name:"peoplefill",isShow:!0},{name:"people",isShow:!0},{name:"servicefill",isShow:!0},{name:"repair",isShow:!0},{name:"file",isShow:!0},{name:"repairfill",isShow:!0},{name:"taoxiaopu",isShow:!0},{name:"weixin",isShow:!0},{name:"attentionfill",isShow:!0},{name:"attention",isShow:!0},{name:"commandfill",isShow:!0},{name:"command",isShow:!0},{name:"communityfill",isShow:!0},{name:"community",isShow:!0},{name:"read",isShow:!0},{name:"calendar",isShow:!0},{name:"cut",isShow:!0},{name:"magic",isShow:!0},{name:"backwardfill",isShow:!0},{name:"playfill",isShow:!0},{name:"stop",isShow:!0},{name:"tagfill",isShow:!0},{name:"tag",isShow:!0},{name:"group",isShow:!0},{name:"all",isShow:!0},{name:"backdelete",isShow:!0},{name:"hotfill",isShow:!0},{name:"hot",isShow:!0},{name:"post",isShow:!0},{name:"radiobox",isShow:!0},{name:"rounddown",isShow:!0},{name:"upload",isShow:!0},{name:"writefill",isShow:!0},{name:"write",isShow:!0},{name:"radioboxfill",isShow:!0},{name:"punch",isShow:!0},{name:"shake",isShow:!0},{name:"move",isShow:!0},{name:"safe",isShow:!0},{name:"activityfill",isShow:!0},{name:"crownfill",isShow:!0},{name:"crown",isShow:!0},{name:"goodsfill",isShow:!0},{name:"messagefill",isShow:!0},{name:"profilefill",isShow:!0},{name:"sound",isShow:!0},{name:"sponsorfill",isShow:!0},{name:"sponsor",isShow:!0},{name:"upblock",isShow:!0},{name:"weblock",isShow:!0},{name:"weunblock",isShow:!0},{name:"my",isShow:!0},{name:"myfill",isShow:!0},{name:"emojifill",isShow:!0},{name:"emojiflashfill",isShow:!0},{name:"flashbuyfill",isShow:!0},{name:"text",isShow:!0},{name:"goodsfavor",isShow:!0},{name:"musicfill",isShow:!0},{name:"musicforbidfill",isShow:!0},{name:"card",isShow:!0},{name:"triangledownfill",isShow:!0},{name:"triangleupfill",isShow:!0},{name:"roundleftfill-copy",isShow:!0},{name:"font",isShow:!0},{name:"title",isShow:!0},{name:"recordfill",isShow:!0},{name:"record",isShow:!0},{name:"cardboardfill",isShow:!0},{name:"cardboard",isShow:!0},{name:"formfill",isShow:!0},{name:"coin",isShow:!0},{name:"cardboardforbid",isShow:!0},{name:"circlefill",isShow:!0},{name:"circle",isShow:!0},{name:"attentionforbid",isShow:!0},{name:"attentionforbidfill",isShow:!0},{name:"attentionfavorfill",isShow:!0},{name:"attentionfavor",isShow:!0},{name:"titles",isShow:!0},{name:"icloading",isShow:!0},{name:"full",isShow:!0},{name:"mail",isShow:!0},{name:"peoplelist",isShow:!0},{name:"goodsnewfill",isShow:!0},{name:"goodsnew",isShow:!0},{name:"medalfill",isShow:!0},{name:"medal",isShow:!0},{name:"newsfill",isShow:!0},{name:"newshotfill",isShow:!0},{name:"newshot",isShow:!0},{name:"news",isShow:!0},{name:"videofill",isShow:!0},{name:"video",isShow:!0},{name:"exit",isShow:!0},{name:"skinfill",isShow:!0},{name:"skin",isShow:!0},{name:"moneybagfill",isShow:!0},{name:"usefullfill",isShow:!0},{name:"usefull",isShow:!0},{name:"moneybag",isShow:!0},{name:"redpacket_fill",isShow:!0},{name:"subscription",isShow:!0},{name:"loading1",isShow:!0},{name:"github",isShow:!0},{name:"global",isShow:!0},{name:"settingsfill",isShow:!0},{name:"back_android",isShow:!0},{name:"expressman",isShow:!0},{name:"evaluate_fill",isShow:!0},{name:"group_fill",isShow:!0},{name:"play_forward_fill",isShow:!0},{name:"deliver_fill",isShow:!0},{name:"notice_forbid_fill",isShow:!0},{name:"fork",isShow:!0},{name:"pick",isShow:!0},{name:"wenzi",isShow:!0},{name:"ellipse",isShow:!0},{name:"qr_code",isShow:!0},{name:"dianhua",isShow:!0},{name:"icon",isShow:!0},{name:"loading2",isShow:!0},{name:"btn",isShow:!0}]},searchIcon:function(i){for(var e=i.detail.value.toLowerCase(),o=this.data.icon,a=0;a<o.length;a++){var n=e;-1!=o[a].name.toLowerCase().search(n)?o[a].isShow=!0:o[a].isShow=!1}this.setData({icon:o})}}); 
 			}); 	require("pages/basics/icon/icon.js");
 		__wxRoute = 'pages/basics/loading/loading';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/basics/loading/loading.js';	define("pages/basics/loading/loading.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp();Page({data:{CustomBar:a.globalData.CustomBar,loadProgress:0},isLoading:function(a){this.setData({isLoad:a.detail.value})},loadModal:function(){var a=this;this.setData({loadModal:!0}),setTimeout(function(){a.setData({loadModal:!1})},2e3)},loadProgress:function(){var a=this;this.setData({loadProgress:this.data.loadProgress+3}),this.data.loadProgress<100?setTimeout(function(){a.loadProgress()},100):this.setData({loadProgress:0})}}); 
 			}); 	require("pages/basics/loading/loading.js");
 		__wxRoute = 'pages/component/home/home';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/component/home/home.js';	define("pages/component/home/home.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({options:{addGlobalClass:!0},data:{elements:[{title:"操作条",name:"bar",color:"purple",icon:"vipcard"},{title:"导航栏 ",name:"nav",color:"mauve",icon:"formfill"},{title:"列表",name:"list",color:"pink",icon:"list"},{title:"卡片",name:"card",color:"brown",icon:"newsfill"},{title:"表单",name:"form",color:"red",icon:"formfill"},{title:"时间轴",name:"timeline",color:"orange",icon:"timefill"},{title:"聊天",name:"chat",color:"green",icon:"messagefill"},{title:"轮播",name:"swiper",color:"olive",icon:"album"},{title:"模态框",name:"modal",color:"grey",icon:"squarecheckfill"},{title:"步骤条",name:"steps",color:"cyan",icon:"roundcheckfill"}]}}); 
 			}); 	require("pages/component/home/home.js");
 		__wxRoute = 'pages/component/list/list';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/component/list/list.js';	define("pages/component/list/list.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp();Page({data:{StatusBar:a.globalData.StatusBar,CustomBar:a.globalData.CustomBar,iconList:[{icon:"cardboardfill",color:"red",badge:120,name:"VR"},{icon:"recordfill",color:"orange",badge:1,name:"录像"},{icon:"picfill",color:"yellow",badge:0,name:"图像"},{icon:"noticefill",color:"olive",badge:22,name:"通知"},{icon:"upstagefill",color:"cyan",badge:0,name:"排行榜"},{icon:"clothesfill",color:"blue",badge:0,name:"皮肤"},{icon:"discoverfill",color:"purple",badge:0,name:"发现"},{icon:"questionfill",color:"mauve",badge:0,name:"帮助"},{icon:"commandfill",color:"purple",badge:0,name:"问答"},{icon:"brandfill",color:"mauve",badge:0,name:"版权"}],gridCol:3,skin:!1},showModal:function(a){this.setData({modalName:a.currentTarget.dataset.target})},hideModal:function(a){this.setData({modalName:null})},gridchange:function(a){this.setData({gridCol:a.detail.value})},gridswitch:function(a){this.setData({gridBorder:a.detail.value})},menuBorder:function(a){this.setData({menuBorder:a.detail.value})},menuArrow:function(a){this.setData({menuArrow:a.detail.value})},menuCard:function(a){this.setData({menuCard:a.detail.value})},switchSex:function(a){this.setData({skin:a.detail.value})},ListTouchStart:function(a){this.setData({ListTouchStart:a.touches[0].pageX})},ListTouchMove:function(a){this.setData({ListTouchDirection:a.touches[0].pageX-this.data.ListTouchStart>0?"right":"left"})},ListTouchEnd:function(a){"left"==this.data.ListTouchDirection?this.setData({modalName:a.currentTarget.dataset.target}):this.setData({modalName:null}),this.setData({ListTouchDirection:null})}}); 
 			}); 	require("pages/component/list/list.js");
 		__wxRoute = 'pages/component/bar/bar';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/component/bar/bar.js';	define("pages/component/bar/bar.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({}); 
 			}); 	require("pages/component/bar/bar.js");
 		__wxRoute = 'pages/component/timeline/timeline';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/component/timeline/timeline.js';	define("pages/component/timeline/timeline.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({}); 
 			}); 	require("pages/component/timeline/timeline.js");
 		__wxRoute = 'pages/component/chat/chat';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/component/chat/chat.js';	define("pages/component/chat/chat.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{InputBottom:0},InputFocus:function(t){this.setData({InputBottom:t.detail.height})},InputBlur:function(t){this.setData({InputBottom:0})}}); 
 			}); 	require("pages/component/chat/chat.js");
 		__wxRoute = 'pages/component/form/form';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/component/form/form.js';	define("pages/component/form/form.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp();Page({data:{StatusBar:a.globalData.StatusBar,CustomBar:a.globalData.CustomBar,index:null,picker:["喵喵喵","汪汪汪","哼唧哼唧"],multiArray:[["无脊柱动物","脊柱动物"],["扁性动物","线形动物","环节动物","软体动物","节肢动物"],["猪肉绦虫","吸血虫"]],objectMultiArray:[[{id:0,name:"无脊柱动物"},{id:1,name:"脊柱动物"}],[{id:0,name:"扁性动物"},{id:1,name:"线形动物"},{id:2,name:"环节动物"},{id:3,name:"软体动物"},{id:3,name:"节肢动物"}],[{id:0,name:"猪肉绦虫"},{id:1,name:"吸血虫"}]],multiIndex:[0,0,0],time:"12:01",date:"2018-12-25",region:["广东省","广州市","海珠区"],imgList:[],modalName:null,textareaAValue:"",textareaBValue:""},PickerChange:function(a){console.log(a),this.setData({index:a.detail.value})},MultiChange:function(a){this.setData({multiIndex:a.detail.value})},MultiColumnChange:function(a){var t={multiArray:this.data.multiArray,multiIndex:this.data.multiIndex};switch(t.multiIndex[a.detail.column]=a.detail.value,a.detail.column){case 0:switch(t.multiIndex[0]){case 0:t.multiArray[1]=["扁性动物","线形动物","环节动物","软体动物","节肢动物"],t.multiArray[2]=["猪肉绦虫","吸血虫"];break;case 1:t.multiArray[1]=["鱼","两栖动物","爬行动物"],t.multiArray[2]=["鲫鱼","带鱼"]}t.multiIndex[1]=0,t.multiIndex[2]=0;break;case 1:switch(t.multiIndex[0]){case 0:switch(t.multiIndex[1]){case 0:t.multiArray[2]=["猪肉绦虫","吸血虫"];break;case 1:t.multiArray[2]=["蛔虫"];break;case 2:t.multiArray[2]=["蚂蚁","蚂蟥"];break;case 3:t.multiArray[2]=["河蚌","蜗牛","蛞蝓"];break;case 4:t.multiArray[2]=["昆虫","甲壳动物","蛛形动物","多足动物"]}break;case 1:switch(t.multiIndex[1]){case 0:t.multiArray[2]=["鲫鱼","带鱼"];break;case 1:t.multiArray[2]=["青蛙","娃娃鱼"];break;case 2:t.multiArray[2]=["蜥蜴","龟","壁虎"]}}t.multiIndex[2]=0}this.setData(t)},TimeChange:function(a){this.setData({time:a.detail.value})},DateChange:function(a){this.setData({date:a.detail.value})},RegionChange:function(a){this.setData({region:a.detail.value})},ChooseImage:function(){var a=this;wx.chooseImage({count:4,sizeType:["original","compressed"],sourceType:["album"],success:function(t){0!=a.data.imgList.length?a.setData({imgList:a.data.imgList.concat(t.tempFilePaths)}):a.setData({imgList:t.tempFilePaths})}})},ViewImage:function(a){wx.previewImage({urls:this.data.imgList,current:a.currentTarget.dataset.url})},DelImg:function(a){var t=this;wx.showModal({title:"召唤师",content:"确定要删除这段回忆吗？",cancelText:"再看看",confirmText:"再见",success:function(e){e.confirm&&(t.data.imgList.splice(a.currentTarget.dataset.index,1),t.setData({imgList:t.data.imgList}))}})},textareaAInput:function(a){this.setData({textareaAValue:a.detail.value})},textareaBInput:function(a){this.setData({textareaBValue:a.detail.value})}}); 
 			}); 	require("pages/component/form/form.js");
 		__wxRoute = 'pages/component/nav/nav';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/component/nav/nav.js';	define("pages/component/nav/nav.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{TabCur:0,scrollLeft:0},tabSelect:function(t){this.setData({TabCur:t.currentTarget.dataset.id,scrollLeft:60*(t.currentTarget.dataset.id-1)})}}); 
 			}); 	require("pages/component/nav/nav.js");
 		__wxRoute = 'pages/component/card/card';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/component/card/card.js';	define("pages/component/card/card.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp();Page({data:{StatusBar:a.globalData.StatusBar,CustomBar:a.globalData.CustomBar},isCard:function(a){this.setData({isCard:a.detail.value})}}); 
 			}); 	require("pages/component/card/card.js");
 		__wxRoute = 'pages/component/swiper/swiper';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/component/swiper/swiper.js';	define("pages/component/swiper/swiper.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{cardCur:0,swiperList:[{id:0,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg"},{id:1,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg"},{id:2,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg"},{id:3,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"},{id:4,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg"},{id:5,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg"},{id:6,type:"image",url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"}]},onLoad:function(){this.towerSwiper("swiperList")},DotStyle:function(t){this.setData({DotStyle:t.detail.value})},cardSwiper:function(t){this.setData({cardCur:t.detail.current})},towerSwiper:function(t){for(var e=this.data[t],i=0;i<e.length;i++)e[i].zIndex=parseInt(e.length/2)+1-Math.abs(i-parseInt(e.length/2)),e[i].mLeft=i-parseInt(e.length/2);this.setData({swiperList:e})},towerStart:function(t){this.setData({towerStart:t.touches[0].pageX})},towerMove:function(t){this.setData({direction:t.touches[0].pageX-this.data.towerStart>0?"right":"left"})},towerEnd:function(t){var e=this.data.direction,i=this.data.swiperList;if("right"==e){for(var s=i[0].mLeft,a=i[0].zIndex,g=1;g<i.length;g++)i[g-1].mLeft=i[g].mLeft,i[g-1].zIndex=i[g].zIndex;i[i.length-1].mLeft=s,i[i.length-1].zIndex=a,this.setData({swiperList:i})}else{for(var n=i[i.length-1].mLeft,r=i[i.length-1].zIndex,o=i.length-1;o>0;o--)i[o].mLeft=i[o-1].mLeft,i[o].zIndex=i[o-1].zIndex;i[0].mLeft=n,i[0].zIndex=r,this.setData({swiperList:i})}}}); 
 			}); 	require("pages/component/swiper/swiper.js");
 		__wxRoute = 'pages/component/modal/modal';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/component/modal/modal.js';	define("pages/component/modal/modal.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp();Page({data:{CustomBar:e.globalData.CustomBar,checkbox:[{value:0,name:"10元",checked:!1,hot:!1},{value:1,name:"20元",checked:!0,hot:!1},{value:2,name:"30元",checked:!0,hot:!0},{value:3,name:"60元",checked:!1,hot:!0},{value:4,name:"80元",checked:!1,hot:!1},{value:5,name:"100元",checked:!1,hot:!1}]},showModal:function(e){this.setData({modalName:e.currentTarget.dataset.target})},hideModal:function(e){this.setData({modalName:null})},ChooseCheckbox:function(e){for(var a=this.data.checkbox,t=e.currentTarget.dataset.value,c=0,h=a.length;c<h;++c)if(a[c].value==t){a[c].checked=!a[c].checked;break}this.setData({checkbox:a})}}); 
 			}); 	require("pages/component/modal/modal.js");
 		__wxRoute = 'pages/component/steps/steps';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/component/steps/steps.js';	define("pages/component/steps/steps.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{basicsList:[{icon:"usefullfill",name:"开始"},{icon:"radioboxfill",name:"等待"},{icon:"roundclosefill",name:"错误"},{icon:"roundcheckfill",name:"完成"}],basics:0,numList:[{name:"开始"},{name:"等待"},{name:"错误"},{name:"完成"}],num:0,scroll:0},basicsSteps:function(){this.setData({basics:this.data.basics==this.data.basicsList.length-1?0:this.data.basics+1})},numSteps:function(){this.setData({num:this.data.num==this.data.numList.length-1?0:this.data.num+1})},scrollSteps:function(){this.setData({scroll:9==this.data.scroll?0:this.data.scroll+1})}}); 
 			}); 	require("pages/component/steps/steps.js");
 		__wxRoute = 'pages/plugin/home/home';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/plugin/home/home.js';	define("pages/plugin/home/home.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Component({options:{addGlobalClass:!0},data:{StatusBar:t.globalData.StatusBar,CustomBar:t.globalData.CustomBar,list:[{title:"索引列表",img:"https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg",url:"/indexes/indexes"},{title:"微动画",img:"https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg",url:"/animation/animation"},{title:"全屏抽屉",img:"https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg",url:"/drawer/drawer"},{title:"垂直导航",img:"https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg",url:"/verticalnav/verticalnav"}]},methods:{toChild:function(t){wx.navigateTo({url:"/pages/plugin"+t.currentTarget.dataset.url})}}}); 
 			}); 	require("pages/plugin/home/home.js");
 		__wxRoute = 'pages/plugin/indexes/indexes';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/plugin/indexes/indexes.js';	define("pages/plugin/indexes/indexes.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{StatusBar:t.globalData.StatusBar,CustomBar:t.globalData.CustomBar,hidden:!0},onLoad:function(){for(var t=[],a=0;a<26;a++)t[a]=String.fromCharCode(65+a);this.setData({list:t,listCur:t[0]})},onReady:function(){var t=this;wx.createSelectorQuery().select(".indexBar-box").boundingClientRect(function(a){t.setData({boxTop:a.top})}).exec(),wx.createSelectorQuery().select(".indexes").boundingClientRect(function(a){t.setData({barTop:a.top})}).exec()},getCur:function(t){this.setData({hidden:!1,listCur:this.data.list[t.target.id]})},setCur:function(t){this.setData({hidden:!0,listCur:this.data.listCur})},tMove:function(t){var a=t.touches[0].clientY,e=this.data.boxTop,i=this;if(a>e){var s=parseInt((a-e)/20);this.setData({listCur:i.data.list[s]})}},tStart:function(){this.setData({hidden:!1})},tEnd:function(){this.setData({hidden:!0,listCurID:this.data.listCur})},indexSelect:function(t){for(var a=this,e=this.data.barHeight,i=this.data.list,s=Math.ceil(i.length*t.detail.y/e),n=0;n<i.length;n++)if(s<n+1)return a.setData({listCur:i[n],movableY:20*n}),!1}}); 
 			}); 	require("pages/plugin/indexes/indexes.js");
 		__wxRoute = 'pages/plugin/gradual/gradual';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/plugin/gradual/gradual.js';	define("pages/plugin/gradual/gradual.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp();Page({data:{StatusBar:a.globalData.StatusBar,CustomBar:a.globalData.CustomBar}}); 
 			}); 	require("pages/plugin/gradual/gradual.js");
 		__wxRoute = 'pages/plugin/animation/animation';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/plugin/animation/animation.js';	define("pages/plugin/animation/animation.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp();Page({data:{StatusBar:a.globalData.StatusBar,CustomBar:a.globalData.CustomBar,list:[{name:"fade",color:"red"},{name:"scale-up",color:"orange"},{name:"scale-down",color:"olive"},{name:"slide-top",color:"green"},{name:"slide-bottom",color:"cyan"},{name:"slide-left",color:"blue"},{name:"slide-right",color:"purple"},{name:"shake",color:"mauve"}],toggleDelay:!1},toggle:function(a){console.log(a);var e=a.currentTarget.dataset.class,t=this;t.setData({animation:e}),setTimeout(function(){t.setData({animation:""})},1e3)},toggleDelay:function(){var a=this;a.setData({toggleDelay:!0}),setTimeout(function(){a.setData({toggleDelay:!1})},1e3)}}); 
 			}); 	require("pages/plugin/animation/animation.js");
 		__wxRoute = 'pages/about/about/about';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/about/about/about.js';	define("pages/about/about/about.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp();Page({data:{StatusBar:a.globalData.StatusBar,CustomBar:a.globalData.CustomBar,ColorList:a.globalData.ColorList},onLoad:function(){},pageBack:function(){wx.navigateBack({delta:1})}}); 
 			}); 	require("pages/about/about/about.js");
 		__wxRoute = 'pages/about/log/log';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/about/log/log.js';	define("pages/about/log/log.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp();Page({data:{StatusBar:a.globalData.StatusBar,CustomBar:a.globalData.CustomBar,ColorList:a.globalData.ColorList},onLoad:function(){},pageBack:function(){wx.navigateBack({delta:1})}}); 
 			}); 	require("pages/about/log/log.js");
 		__wxRoute = 'pages/about/test/list';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/about/test/list.js';	define("pages/about/test/list.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{scrollLeft:0,TabCur:0},tabSelect:function(t){console.log(t),this.setData({TabCur:t.currentTarget.dataset.id,scrollLeft:60*(t.currentTarget.dataset.id-1)})}}); 
 			}); 	require("pages/about/test/list.js");
 		__wxRoute = 'pages/about/test/filter';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/about/test/filter.js';	define("pages/about/test/filter.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{scrollLeft:0,TabCur:0},tabSelect:function(t){console.log(t),this.setData({TabCur:t.currentTarget.dataset.id,scrollLeft:60*(t.currentTarget.dataset.id-1)})}}); 
 			}); 	require("pages/about/test/filter.js");
 		__wxRoute = 'pages/about/home/home';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/about/home/home.js';	define("pages/about/home/home.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({options:{addGlobalClass:!0},data:{starCount:0,forksCount:0,visitTotal:0},attached:function(){var t=this;wx.showLoading({title:"数据加载中",mask:!0}),wx.cloud.callFunction({name:"github",success:function(o){function a(){n<20?setTimeout(function(){t.setData({starCount:n,forksCount:n}),n++,a()},20):t.setData({starCount:t.coutNum(o.result.stargazers_count),forksCount:t.coutNum(o.result.forks_count)})}var n=0;a()},fail:function(t){console.error(t)}}),wx.cloud.callFunction({name:"view",success:function(o){function a(){n<20?setTimeout(function(){t.setData({visitTotal:n}),n++,a()},20):t.setData({visitTotal:t.coutNum(o.result.list[0].visit_total)})}var n=0;a(),wx.hideLoading()},fail:function(t){console.error(t),wx.hideLoading()}})},methods:{coutNum:function(t){return t>1e3&&t<1e4&&(t=(t/1e3).toFixed(1)+"k"),t>1e4&&(t=(t/1e4).toFixed(1)+"W"),t},CopyLink:function(t){wx.setClipboardData({data:t.currentTarget.dataset.link,success:function(t){wx.showToast({title:"已复制",duration:1e3})}})},showModal:function(t){this.setData({modalName:t.currentTarget.dataset.target})},hideModal:function(t){this.setData({modalName:null})},showQrcode:function(){wx.previewImage({urls:["https://image.weilanwl.com/color2.0/zanCode.jpg"],current:"https://image.weilanwl.com/color2.0/zanCode.jpg"})}}}); 
 			}); 	require("pages/about/home/home.js");
 		__wxRoute = 'pages/plugin/drawer/drawer';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/plugin/drawer/drawer.js';	define("pages/plugin/drawer/drawer.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{StatusBar:t.globalData.StatusBar,CustomBar:t.globalData.CustomBar,Custom:t.globalData.Custom,hasUserInfo:!1,canIUse:wx.canIUse("button.open-type.getUserInfo"),TabCur:1,scrollLeft:0},getUserInfo:function(a){console.log(a),t.globalData.userInfo=a.detail.userInfo,this.setData({userInfo:a.detail.userInfo,hasUserInfo:!0})},showModal:function(t){this.setData({modalName:t.currentTarget.dataset.target})},hideModal:function(t){this.setData({modalName:null})},tabSelect:function(t){console.log(t),this.setData({TabCur:t.currentTarget.dataset.id,scrollLeft:60*(t.currentTarget.dataset.id-1)})}}); 
 			}); 	require("pages/plugin/drawer/drawer.js");
 		__wxRoute = 'pages/plugin/verticalnav/verticalnav';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/plugin/verticalnav/verticalnav.js';	define("pages/plugin/verticalnav/verticalnav.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{StatusBar:t.globalData.StatusBar,CustomBar:t.globalData.CustomBar,Custom:t.globalData.Custom,TabCur:0,MainCur:0,VerticalNavTop:0,list:[],load:!0},onLoad:function(){wx.showLoading({title:"加载中...",mask:!0});for(var t=[{}],a=0;a<26;a++)t[a]={},t[a].name=String.fromCharCode(65+a),t[a].id=a;this.setData({list:t,listCur:t[0]})},onReady:function(){wx.hideLoading()},tabSelect:function(t){this.setData({TabCur:t.currentTarget.dataset.id,MainCur:t.currentTarget.dataset.id,VerticalNavTop:50*(t.currentTarget.dataset.id-1)})},VerticalMain:function(t){var a=this,e=this.data.list,i=0;if(this.data.load){for(o=0;o<e.length;o++)!function(t){wx.createSelectorQuery().select("#main-"+e[t].id).fields({size:!0},function(a){e[t].top=i,i+=a.height,e[t].bottom=i}).exec()}(o);a.setData({load:!1,list:e})}for(var r=t.detail.scrollTop+20,o=0;o<e.length;o++)if(r>e[o].top&&r<e[o].bottom)return a.setData({VerticalNavTop:50*(e[o].id-1),TabCur:e[o].id}),!1}}); 
 			}); 	require("pages/plugin/verticalnav/verticalnav.js");
 	