(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["E8820S"],{"83f0":function(e,t,a){"use strict";a("99fe")},"99fe":function(e,t,a){},e28d:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("div",{staticClass:"item"},[a("input",{ref:"upload",attrs:{type:"file",name:"请上传原版编程器固件"}})]),a("div",{staticClass:"item"},[e._v(" 请选择Flash类型 "),a("label",[a("input",{ref:"spi",attrs:{type:"radio",name:"flash",checked:""},domProps:{value:64}}),e._v("spi(64KB) ")]),a("label",[a("input",{attrs:{type:"radio",name:"flash"},domProps:{value:256}}),e._v("nand(256KB)")])]),a("div",{staticClass:"item"},[a("button",{on:{click:e.calc}},[e._v("生成EEPROM")])]),e.mac2g?a("div",{staticClass:"item"},[e._v(" 提取到的2.4G MAC为:"+e._s(e.mac2g)+" ,5G MAC为:"+e._s(e.mac5g)+" ")]):e._e(),a("ol",{staticClass:"item"},[a("li",[e._v("点击 选择文件 按钮，选择"+e._s(e.$options.name)+"的原版编程器固件上传")]),a("li",[e._v("点击 生成EEPROM 按钮，自动生成并下载eeprom.bin")]),a("li",[e._v("请校验提取的MAC地址是否和路由器自身MAC一致")]),a("li",[e._v("不支持IE浏览器，尽量使用Chrome、edge、火狐最新版本浏览器操作")])])])},s=[],r=(a("907a"),a("219c"),{name:"E8820S",components:{},data(){return{mac2g:"",mac5g:""}},methods:{calc(){let e=this.$refs.upload.files[0];if(!e)return void alert("请上传原版编程器固件!");this.mac2g=this.mac5g="";let t=new FileReader;t.onloadend=()=>{let e=t.result,a=new Uint8Array(e.slice(2228242,2228248)),i=new Uint8Array(e.slice(2228254,2228260)),s=new Uint8Array(e.slice(3600384,3600689)),r=new Uint8Array(e.slice(3602432,3602929)),n=new Uint8Array(1024*(this.$refs.spi.checked?64:256)).fill(255);s.forEach((e,t)=>{n[t]=e}),r.forEach((e,t)=>{n[32768+t]=e}),a.forEach((e,t)=>{this.mac2g+=Number(e).toString(16).padStart(2,"0"),n[57344+t]=e}),i.forEach((e,t)=>{this.mac5g+=Number(e).toString(16).padStart(2,"0"),n[57350+t]=e}),["09"].forEach((e,t)=>{n[33248+t]=Number("0x"+e)}),this.saveFile(n.buffer)},t.readAsArrayBuffer(e)},saveFile(e){let t=new Blob([e],{type:"application/octet-stream"}),a=document.createElement("a");a.setAttribute("download",`${this.$options.name}-${this.$refs.spi.checked?"spi":"nand"}-eeprom.bin`),a.target="_blank",a.href=URL.createObjectURL(t),document.body.appendChild(a),a.click(),URL.revokeObjectURL(a.href)}}}),n=r,c=(a("83f0"),a("2877")),l=Object(c["a"])(n,i,s,!1,null,"6c8136cb",null);t["default"]=l.exports}}]);