(window.webpackJsonpUnataWidgets=window.webpackJsonpUnataWidgets||[]).push([[99],{ed5c41a60ceeda6f580d:function(t,e,a){"use strict";a.r(e),e.default=function t(){function e(t,e){const n={};let o;for(o=t.length-1;o>-1;o--)o>0?n[o]=function(){const r=o;return function(){return a(t[r],n[r+1],e)}}():a(t[o],n[o+1],e)}function a(t,e,a){const o=document.createElement("script");let r,i=t[0].split("?")[0].split("/");r=i[i.length-1].split(".")[0],i=s[a]&&s[a].staticVer&&`${s[a].staticVer}/`||t[1],/([0-9]+\.){2}[0-9]+\//.test(t[1])&&i!==t[1]&&n("loader: Overriding configured version with staticVer."),t[0]=t[0].replace("##version##",i),o.setAttribute("src",t[0]),o&&o.addEventListener?o.addEventListener("error",(function(){p[`${a}_${r}_load_failure`]="true"})):o.attachEvent&&o.attachEvent("onerror",(function(){p[`${a}_${r}_load_failure`]="true"})),e&&(o.onload=e),document.getElementsByTagName("head")[0].appendChild(o)}function n(t){if("function"==typeof s.trace_handler)try{s.trace_handler(t)}catch(t){}}function o(t,e){const a=null!=t;return!(!a||"1"!==t.toString()&&"true"!==t.toString().toLowerCase())||(!a||"0"!==t.toString()&&"false"!==t.toString().toLowerCase())&&("boolean"==typeof e&&e)}const r=window,i=r.io_global_object_name||"IGLOO";var s=r[i]=r[i]||{},p=s.loader=s.loader||{};const l=[],c=[];if(p.loaderMain)return n("loader: Loader script has already run, try reducing the number of places it's being included."),!1;p.loaderMain=t,p.loaderVer="5.1.0",function(){const t=o(p.tp,!0),e=o(p.fp_static,!0),a=o(p.fp_dyn,!0),i=o(p.enable_legacy_compatibility),d=o(p.tp_split),f=p.tp_host&&p.tp_host.replace(/\/+$/,"")||"https://mpsnare.iesnare.com",u=p.fp_static_override_uri;let _=void 0!==p.uri_hook?`${p.uri_hook}/`:"/iojs/",h=`${p.version||"versionOrAliasIsRequired"}/`;const $=p.subkey?`${r.encodeURIComponent(p.subkey)}/`:"",y=p.tp_resource||"wdp.js";let g=p.tp_host?`&tp_host=${r.encodeURIComponent(p.tp_host)}`:"";const m=u?`&fp_static_uri=${r.encodeURIComponent(u)}`:"";let b,w,v;p.tp_host=f,b=o(s.enable_flash,!0),w=s.io&&s.io.enable_flash,v=s.fp&&s.fp.enable_flash,w=null!=w?o(w,!0):b,null!=v?v=o(v,!0):w=b,b=w?"&flash=true":"&flash=false",v=v?"&flash=true":"&flash=false",g=`?loaderVer=${p.loaderVer}&compat=${i}&tp=${t}&tp_split=${d}${g}&fp_static=${e}&fp_dyn=${a}${m}`,t||e||n("loader: Not currently configured to load fp_static or tp script(s)."),s.fp&&s.fp.staticVer&&`${s.fp.staticVer}/`!==h&&(h=`${s.fp.staticVer}/`,n("loader: Configured version replaced with that from pre-loaded static script.")),e||s.fp&&s.fp.staticMain?(_=`${_}##version##${$}`.replace(/\/\//g,"/"),e&&(s.fp&&s.fp.staticMain?i&&!s.fp.preCompatMain&&n("loader: enable_legacy_compatibility on, but included static does not have the compat wrapper."):u?l.push([u,""]):l.push([`${_}static_wdp.js${g}${v}`,h])),!a||s.fp&&s.fp.dynMain?s.fp&&s.fp.dynMain&&n("loader: First party dynamic script has already been loaded, disable fp_dyn or make sure you're not manually including the dynamic file separately."):l.push([`${_}dyn_wdp.js${g}${v}`,h])):o(p.fp_dyn)&&n("loader: Invalid Config, first party dynamic script set to load without static."),t&&(s.io&&s.io.staticMain?n("loader: Third party script has already been loaded."):(_=`${f}/##version##${$}`,d?(c.push([`${_}static_wdp.js${g}${b}`,h]),c.push([`${_}dyn_wdp.js${g}${b}`,h]),p.tp_resource&&n("loader: Invalid Config: both tp_resource and tp_split set. Ignoring tp_resource.")):c.push([_+y+g+b,h])))}(),e(l,"fp"),e(c,"io")}()}}]);