webpackJsonp([5],{H7k0:function(t,n){t.exports=[]},OHOL:function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=s("H7k0"),i=s.n(e),a={props:["questions"],data:function(){return{exist:!1,noreply:i.a}},mounted:function(){this.noreply.length>0&&(this.exist=!0)},methods:{createImageLink:function(t){return this.$settings.cdn+this.$settings.path+this.$settings.pic_path_small+t}},components:{"component-stars":s("WmC7").default}},r={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return t.exist?s("div",{staticClass:"noreply pt-3"},[s("p",[t._v("\n        "+t._s(t.$t("no_replies"))+"\n    ")]),t._v(" "),s("div",{staticClass:"list"},t._l(t.noreply,function(n,e){return s("div",{staticClass:"list-group"},[s("div",{staticClass:"list-group-item list-group-item-action flex-column align-items-start bg-white"},[s("div",{staticClass:"d-flex"},[s("div",[s("img",{staticClass:"picture mr-2",attrs:{src:t.createImageLink(n.picture)}})]),t._v(" "),s("div",[s("h3",{staticClass:"pl-2 text-muted"},[t._v(t._s(n.family_name))]),t._v(" "),s("div",{staticClass:"pl-2 text-muted"},[t._v(t._s(n.given_name))])]),t._v(" "),s("div",{staticClass:"rating ml-auto pt-1"},[s("component-stars",{attrs:{stars:0,muted:!0}}),t._v(" "),s("div",{staticClass:"text-center"},[t._v("? %")])],1)])])])}))]):t._e()},staticRenderFns:[]};var o=s("VU/8")(a,r,!1,function(t){s("ag/b")},null,null);n.default=o.exports},"ag/b":function(t,n,s){var e=s("nK1P");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s("rjj0")("80c6a73a",e,!0,{})},nK1P:function(t,n,s){(t.exports=s("FZ+f")(!0)).push([t.i,"\n.rating {\n    padding-right: 0.5rem\n}\n@media (min-width: 576px) {\n.rating {\n        padding-right: 1.5rem\n}\n}\n.picture {\n    height: 64px;\n    border-radius: 50%;\n}\n","",{version:3,sources:["/home/michal/project/voksmonitor.hu/vue/2018-es-orszaggyulesi-valasztas/src/components/ResultsNoreply.vue"],names:[],mappings:";AACA;IACI,qBAAqB;CACxB;AACD;AACA;QACQ,qBAAqB;CAC5B;CACA;AACD;IACI,aAAa;IACb,mBAAmB;CACtB",file:"ResultsNoreply.vue",sourcesContent:["\n.rating {\n    padding-right: 0.5rem\n}\n@media (min-width: 576px) {\n.rating {\n        padding-right: 1.5rem\n}\n}\n.picture {\n    height: 64px;\n    border-radius: 50%;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=5.f0c0ae11c8dbbb89437d.js.map