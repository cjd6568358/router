(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["E8820S"],{"8ad5":function(e,t,a){"use strict";a.r(t);var c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("div",{staticClass:"item"},[a("input",{ref:"upload",attrs:{type:"file",name:"请上传原版编程器固件"}})]),a("div",{staticClass:"item"},[a("button",{on:{click:e.calc}},[e._v("生成EEPROM")])]),e._m(0)])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ol",{staticClass:"item"},[a("li",[e._v(" 点击 选择文件 按钮，选择E8820V2的原版编程器固件上传 ")]),a("li",[e._v(" 点击 生成EEPROM 按钮，自动生成并下载eeprom.bin ")]),a("li",[e._v("不支持IE浏览器，尽量使用Chrome、edge、火狐最新版本浏览器操作")])])}],i=(a("d3b7"),a("5cc6"),a("907a"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("fb6a"),a("cb29"),a("159b"),a("a9e3"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861"),{name:"E8820V2",components:{},methods:{calc:function(){var e=this,t=this.$refs.upload.files[0];if(console.log(t),t){var a=new FileReader;a.onloadend=function(){var t=a.result,c=new Uint8Array(t.slice(131092,131098)),n=new Uint8Array(t.slice(131108,131114)),i=new Uint8Array(t.slice(192512,192817)),r=new Uint8Array(t.slice(194560,194865)),o=new Uint8Array(65536).fill(255);i.forEach((function(e,t){o[t]=e})),r.forEach((function(e,t){o[32768+t]=e})),c.forEach((function(e,t){o[57344+t]=e})),n.forEach((function(e,t){o[57350+t]=e})),["C0","81","82","C3","04","45","46","07","08","09"].forEach((function(e,t){o[33248+t]=Number("0x".concat(e))})),e.saveFile(o.buffer)},a.readAsArrayBuffer(t)}else alert("请上传原版编程器固件!")},saveFile:function(e){var t=new Blob([e],{type:"application/octet-stream"}),a=document.createElement("a");a.setAttribute("download","eeprom.bin"),a.target="_blank",a.href=URL.createObjectURL(t),document.body.appendChild(a),a.click(),URL.revokeObjectURL(a.href)}}}),r=i,o=(a("b279"),a("2877")),l=Object(o["a"])(r,c,n,!1,null,"50f3101c",null);t["default"]=l.exports},abc1:function(e,t,a){},b279:function(e,t,a){"use strict";a("abc1")}}]);