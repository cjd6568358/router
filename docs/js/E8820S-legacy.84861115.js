(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["E8820S"],{"0ccb":function(e,t,r){var n=r("e330"),a=r("50c4"),i=r("577e"),c=r("1148"),o=r("1d80"),s=n(c),f=n("".slice),u=Math.ceil,l=function(e){return function(t,r,n){var c,l,d=i(o(t)),p=a(r),b=d.length,v=void 0===n?" ":i(n);return p<=b||""==v?d:(c=p-b,l=s(v,u(c/v.length)),l.length>c&&(l=f(l,0,c)),e?d+l:l+d)}};e.exports={start:l(!1),end:l(!0)}},1148:function(e,t,r){"use strict";var n=r("da84"),a=r("5926"),i=r("577e"),c=r("1d80"),o=n.RangeError;e.exports=function(e){var t=i(c(this)),r="",n=a(e);if(n<0||n==1/0)throw o("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(t+=t))1&n&&(r+=t);return r}},"25f0":function(e,t,r){"use strict";var n=r("e330"),a=r("5e77").PROPER,i=r("6eeb"),c=r("825a"),o=r("3a9b"),s=r("577e"),f=r("d039"),u=r("ad6d"),l="toString",d=RegExp.prototype,p=d[l],b=n(u),v=f((function(){return"/a/b"!=p.call({source:"a",flags:"b"})})),m=a&&p.name!=l;(v||m)&&i(RegExp.prototype,l,(function(){var e=c(this),t=s(e.source),r=e.flags,n=s(void 0===r&&o(d,e)&&!("flags"in d)?b(e):r);return"/"+t+"/"+n}),{unsafe:!0})},3837:function(e,t,r){},"408a":function(e,t,r){var n=r("e330");e.exports=n(1..valueOf)},"4d90":function(e,t,r){"use strict";var n=r("23e7"),a=r("0ccb").start,i=r("9a0c");n({target:"String",proto:!0,forced:i},{padStart:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var n=r("e330"),a=r("1d80"),i=r("577e"),c=r("5899"),o=n("".replace),s="["+c+"]",f=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),l=function(e){return function(t){var r=i(a(t));return 1&e&&(r=o(r,f,"")),2&e&&(r=o(r,u,"")),r}};e.exports={start:l(1),end:l(2),trim:l(3)}},"97e7":function(e,t,r){"use strict";r("3837")},"99af":function(e,t,r){"use strict";var n=r("23e7"),a=r("da84"),i=r("d039"),c=r("e8b5"),o=r("861d"),s=r("7b0b"),f=r("07fa"),u=r("8418"),l=r("65f0"),d=r("1dde"),p=r("b622"),b=r("2d00"),v=p("isConcatSpreadable"),m=9007199254740991,h="Maximum allowed index exceeded",g=a.TypeError,E=b>=51||!i((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),_=d("concat"),y=function(e){if(!o(e))return!1;var t=e[v];return void 0!==t?!!t:c(e)},w=!E||!_;n({target:"Array",proto:!0,forced:w},{concat:function(e){var t,r,n,a,i,c=s(this),o=l(c,0),d=0;for(t=-1,n=arguments.length;t<n;t++)if(i=-1===t?c:arguments[t],y(i)){if(a=f(i),d+a>m)throw g(h);for(r=0;r<a;r++,d++)r in i&&u(o,d,i[r])}else{if(d>=m)throw g(h);u(o,d++,i)}return o.length=d,o}})},"9a0c":function(e,t,r){var n=r("342f");e.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(n)},a9e3:function(e,t,r){"use strict";var n=r("83ab"),a=r("da84"),i=r("e330"),c=r("94ca"),o=r("6eeb"),s=r("1a2d"),f=r("7156"),u=r("3a9b"),l=r("d9b5"),d=r("c04e"),p=r("d039"),b=r("241c").f,v=r("06cf").f,m=r("9bf2").f,h=r("408a"),g=r("58a8").trim,E="Number",_=a[E],y=_.prototype,w=a.TypeError,A=i("".slice),N=i("".charCodeAt),I=function(e){var t=d(e,"number");return"bigint"==typeof t?t:x(t)},x=function(e){var t,r,n,a,i,c,o,s,f=d(e,"number");if(l(f))throw w("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=g(f),t=N(f,0),43===t||45===t){if(r=N(f,2),88===r||120===r)return NaN}else if(48===t){switch(N(f,1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+f}for(i=A(f,2),c=i.length,o=0;o<c;o++)if(s=N(i,o),s<48||s>a)return NaN;return parseInt(i,n)}return+f};if(c(E,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var S,C=function(e){var t=arguments.length<1?0:_(I(e)),r=this;return u(y,r)&&p((function(){h(r)}))?f(Object(t),r,C):t},R=n?b(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),M=0;R.length>M;M++)s(_,S=R[M])&&!s(C,S)&&m(C,S,v(_,S));C.prototype=y,y.constructor=C,o(a,E,C)}},ad6d:function(e,t,r){"use strict";var n=r("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},e28d:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page"},[r("div",{staticClass:"item"},[r("input",{ref:"upload",attrs:{type:"file",name:"请上传原版编程器固件"}})]),r("div",{staticClass:"item"},[e._v(" 请选择Flash类型 "),r("label",[r("input",{ref:"spi",attrs:{type:"radio",name:"flash",checked:""},domProps:{value:64}}),e._v("spi(64KB)")]),r("label",[r("input",{attrs:{type:"radio",name:"flash"},domProps:{value:256}}),e._v("nand(256KB)")])]),r("div",{staticClass:"item"},[r("button",{on:{click:e.calc}},[e._v("生成EEPROM")])]),e.mac2g?r("div",{staticClass:"item"},[e._v(" 提取到的2.4G MAC为:"+e._s(e.mac2g)+" ,5G MAC为:"+e._s(e.mac5g)+" ")]):e._e(),r("ol",{staticClass:"item"},[r("li",[e._v("点击 选择文件 按钮，选择"+e._s(e.$options.name)+"的原版编程器固件上传")]),r("li",[e._v("点击 生成EEPROM 按钮，自动生成并下载eeprom.bin")]),r("li",[e._v("请校验提取的MAC地址是否和路由器自身MAC一致")]),r("li",[e._v("不支持IE浏览器，尽量使用Chrome、edge、火狐最新版本浏览器操作")])])])},a=[],i=(r("d3b7"),r("5cc6"),r("907a"),r("9a8c"),r("a975"),r("735e"),r("c1ac"),r("d139"),r("3a7b"),r("d5d6"),r("82f8"),r("e91f"),r("60bd"),r("5f96"),r("3280"),r("3fcc"),r("ca91"),r("25a1"),r("cd26"),r("3c5d"),r("2954"),r("649e"),r("219c"),r("170b"),r("b39a"),r("72f7"),r("fb6a"),r("cb29"),r("159b"),r("4d90"),r("25f0"),r("a9e3"),r("99af"),r("b0c0"),r("3ca3"),r("ddb0"),r("2b3d"),r("9861"),{name:"E8820V2",components:{},data:function(){return{mac2g:"",mac5g:""}},methods:{calc:function(){var e=this,t=this.$refs.upload.files[0];if(t){this.mac2g=this.mac5g="";var r=new FileReader;r.onloadend=function(){var t=r.result,n=new Uint8Array(t.slice(2228242,2228248)),a=new Uint8Array(t.slice(2228254,2228260)),i=new Uint8Array(t.slice(3600384,3600689)),c=new Uint8Array(t.slice(3602432,3602929)),o=new Uint8Array(1024*(e.$refs.spi.checked?64:256)).fill(255);i.forEach((function(e,t){o[t]=e})),c.forEach((function(e,t){o[32768+t]=e})),n.forEach((function(t,r){e.mac2g+=Number(t).toString(16).padStart(2,"0"),o[57344+r]=t})),a.forEach((function(t,r){e.mac5g+=Number(t).toString(16).padStart(2,"0"),o[57350+r]=t})),["09"].forEach((function(e,t){o[33248+t]=Number("0x".concat(e))})),e.saveFile(o.buffer)},r.readAsArrayBuffer(t)}else alert("请上传原版编程器固件!")},saveFile:function(e){var t=new Blob([e],{type:"application/octet-stream"}),r=document.createElement("a");r.setAttribute("download","".concat(this.$options.name,"-").concat(this.$refs.spi.checked?"spi":"nand","-eeprom.bin")),r.target="_blank",r.href=URL.createObjectURL(t),document.body.appendChild(r),r.click(),URL.revokeObjectURL(r.href)}}}),c=i,o=(r("97e7"),r("2877")),s=Object(o["a"])(c,n,a,!1,null,"70478744",null);t["default"]=s.exports}}]);