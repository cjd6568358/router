(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["E8820V2"],{"0801":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("div",{staticClass:"item"},[a("input",{ref:"upload",attrs:{type:"file",name:"请上传原版编程器固件"}})]),a("div",{staticClass:"item"},[a("button",{on:{click:e.calc}},[e._v("生成EEPROM")])]),a("div",{staticClass:"item"},[e._v(" 提取到的2.4G MAC为:"+e._s(e.mac2g)+" ,5G MAC为:"+e._s(e.mac5g)+" ")]),a("ol",{staticClass:"item"},[a("li",[e._v(" 点击 选择文件 按钮，选择"+e._s(e.$options.name)+"的原版编程器固件上传 ")]),a("li",[e._v(" 点击 生成EEPROM 按钮，自动生成并下载eeprom.bin ")]),a("li",[e._v(" 请校验提取的MAC地址是否和路由器自身MAC一致 ")]),a("li",[e._v("不支持IE浏览器，尽量使用Chrome、edge、火狐最新版本浏览器操作")])])])},r=[],n=(a("907a"),a("219c"),{name:"E8820V2",components:{},data(){return{mac2g:"",mac5g:""}},methods:{calc(){let e=this.$refs.upload.files[0];if(!e)return void alert("请上传原版编程器固件!");this.mac2g=this.mac5g="";let t=new FileReader;t.onloadend=()=>{let e=t.result,a=new Uint8Array(e.slice(131092,131098)),i=new Uint8Array(e.slice(131108,131114)),r=new Uint8Array(e.slice(192512,192816)),n=new Uint8Array(e.slice(194560,194864)),s=new Uint8Array(65536).fill(255);r.forEach((e,t)=>{s[t]=e}),n.forEach((e,t)=>{s[32768+t]=e}),a.forEach((e,t)=>{this.mac2g+=Number(e).toString(16).padStart(2,"0"),s[57344+t]=e}),i.forEach((e,t)=>{this.mac5g+=Number(e).toString(16).padStart(2,"0"),s[57350+t]=e}),["C0","81","82","C3","04","45","46","07","08","09"].forEach((e,t)=>{s[33248+t]=Number("0x"+e)}),this.saveFile(s.buffer)},t.readAsArrayBuffer(e)},saveFile(e){let t=new Blob([e],{type:"application/octet-stream"}),a=document.createElement("a");a.setAttribute("download",this.$options.name+"-eeprom.bin"),a.target="_blank",a.href=URL.createObjectURL(t),document.body.appendChild(a),a.click(),URL.revokeObjectURL(a.href)}}}),s=n,c=(a("8420"),a("2877")),l=Object(c["a"])(s,i,r,!1,null,"e3693ee0",null);t["default"]=l.exports},"51d2":function(e,t,a){},8420:function(e,t,a){"use strict";a("51d2")}}]);