webpackJsonp([9],{"50VC":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={computed:{abLink:function(){var t={};return 1===Math.floor(2*Math.random())?(t.link="https://www.prezident21.cz/?utm_source=kohovolit.eu&utm_medium=referal&utm_campaign=201712_tlacitka_ab&utm_content=vysledky_hlasovat",t.name="hlasovat",t.ab=1,t.text1="Hlasujte pro kandidáty",t.text2="ve hře Prezident 21",t.button="Hlasovat"):(t.link="https://www.prezident21.cz/?utm_source=kohovolit.eu&utm_medium=referal&utm_campaign=201712_tlacitka_ab&utm_content=vysledky_zjistit_vice",t.name="zjistit_vice",t.ab=0,t.text1="Najděte více informací",t.text2="o kandidátech na Prezident 21",t.button="Zjistit více"),t.src=this.$settings.cdn+"image/"+this.$settings.save_path+"p21_ico.svg",t}},methods:{clicked:function(t){var e={ab:t};this.$clicked("p21_down",e)}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-3"},[n("a",{attrs:{href:t.abLink.link,target:"_blank"},on:{click:function(e){t.clicked(t.abLink.name)}}},[n("div",{staticClass:"d-flex flex-row  align-items-center"},[n("img",{staticClass:"image m-2",attrs:{src:t.abLink.src}}),t._v(" "),n("div",{staticClass:"p-2 text"},[t._v(t._s(t.abLink.text1)),n("br"),t._v("\n            "+t._s(t.abLink.text2))]),t._v(" "),n("button",{staticClass:"btn btn-primary"},[t._v(t._s(t.abLink.button))])])])])},staticRenderFns:[]};var s=n("VU/8")(a,i,!1,function(t){n("EpZ0")},"data-v-4cf1ae3c",null);e.default=s.exports},EpZ0:function(t,e,n){var a=n("roPY");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("3f1b3a1e",a,!0,{})},roPY:function(t,e,n){(t.exports=n("FZ+f")(!0)).push([t.i,"\n.image[data-v-4cf1ae3c] {\n    max-height: 32px;\n}\n.text[data-v-4cf1ae3c] {\n    color: #092e67;\n    line-height: 1.2em;\n    font-size: .8rem;\n}\nbutton[data-v-4cf1ae3c] {\n    background-color: #1375e9;\n}\n@media (min-width: 576px) {\n.text[data-v-4cf1ae3c] {\n        font-size: 1rem;\n}\n}\n","",{version:3,sources:["/home/michal/project/voksmonitor.hu/vue/2018-es-orszaggyulesi-valasztas/src/components/ResultsPrezident21.vue"],names:[],mappings:";AACA;IACI,iBAAiB;CACpB;AACD;IACI,eAAe;IACf,mBAAmB;IACnB,iBAAiB;CACpB;AACD;IACI,0BAA0B;CAC7B;AACD;AACA;QACQ,gBAAgB;CACvB;CACA",file:"ResultsPrezident21.vue",sourcesContent:["\n.image[data-v-4cf1ae3c] {\n    max-height: 32px;\n}\n.text[data-v-4cf1ae3c] {\n    color: #092e67;\n    line-height: 1.2em;\n    font-size: .8rem;\n}\nbutton[data-v-4cf1ae3c] {\n    background-color: #1375e9;\n}\n@media (min-width: 576px) {\n.text[data-v-4cf1ae3c] {\n        font-size: 1rem;\n}\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=9.1d376ea91c1f6dcbc234.js.map