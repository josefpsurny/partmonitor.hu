webpackJsonp([5],{"8e7L":function(e,t,a){var n=a("xz4E");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("b861bb58",n,!0,{})},kXJM:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={props:["code","idd"],data:function(){return{newcode:"",id2id:{zeman:"5853f95797dd60724c529dca",kulhanek:"5954bdba2dff3f990ab84487",drahos:"585af49bdaa8e2d20c8a4f26",topolanek:"586a6ccb8b85fa4539438cf9",hynek:"599aa2dbfc5b134fb69211d6",fischer:"585bd3a75bbe31bf1a6c8369",hanning:"586cdff1a9efdf8a29ca3ade",hilser:"585944959868db1510fb6096",horacek:"585936aa9868db1510fb608d"}}},computed:{abLink:function(){var e=Math.floor(2*Math.random()),t={},a=this.code.split(".")[0];return 1===e?(t.link="https://www.prezident21.cz/candidates/"+this.id2id[a]+"?utm_source=kohovolit.eu&utm_medium=referal&utm_campaign=201712_tlacitka_ab&utm_content="+a+"_hlasovat",t.name="hlasovat",t.ab=1,t.text1="Hlasujte pro kandidáta",t.text2="ve hře Prezident 21",t.button="Hlasovat"):(t.link="https://www.prezident21.cz/candidates/"+this.id2id[a]+"?utm_source=kohovolit.eu&utm_medium=referal&utm_campaign=201712_tlacitka_ab&utm_content="+a+"_zjistit_vice",t.name="zjistit_vice",t.ab=0,t.text1="Najděte více informací",t.text2="o kandidátovi na Prezident 21",t.button="Zjistit více"),t.src=this.$settings.cdn+"image/"+this.$settings.save_path+"p21_ico.svg",t}},methods:{clicked:function(e){var t={id:this.idd,ab:e};this.$clicked("p21_profile",t)}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"image_container pl-3"},[a("a",{attrs:{href:e.abLink.link,target:"_blank"},on:{click:function(t){e.clicked(e.abLink.name)}}},[a("div",{staticClass:"d-flex flex-row  align-items-center"},[a("img",{staticClass:"image m-2",attrs:{src:e.abLink.src}}),e._v(" "),a("div",{staticClass:"p-2 text"},[e._v(e._s(e.abLink.text1)),a("br"),e._v("\n            "+e._s(e.abLink.text2))]),e._v(" "),a("button",{staticClass:"btn btn-primary"},[e._v(e._s(e.abLink.button))])])])])},staticRenderFns:[]};var s=a("VU/8")(n,i,!1,function(e){a("8e7L")},"data-v-e2de39ea",null);t.default=s.exports},xz4E:function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,"\n.image[data-v-e2de39ea] {\n    max-height: 32px;\n}\n.text[data-v-e2de39ea] {\n    color: #092e67;\n    line-height: 1em;\n    font-size: .7rem;\n}\nbutton[data-v-e2de39ea] {\n    background-color: #1375e9;\n}\n@media (min-width: 576px) {\n.text[data-v-e2de39ea] {\n        font-size: 1rem;\n}\n}\n","",{version:3,sources:["/home/michal/project/voksmonitor.hu/vue/2018-es-orszaggyulesi-valasztas/src/components/Prezident21.vue"],names:[],mappings:";AACA;IACI,iBAAiB;CACpB;AACD;IACI,eAAe;IACf,iBAAiB;IACjB,iBAAiB;CACpB;AACD;IACI,0BAA0B;CAC7B;AACD;AACA;QACQ,gBAAgB;CACvB;CACA",file:"Prezident21.vue",sourcesContent:["\n.image[data-v-e2de39ea] {\n    max-height: 32px;\n}\n.text[data-v-e2de39ea] {\n    color: #092e67;\n    line-height: 1em;\n    font-size: .7rem;\n}\nbutton[data-v-e2de39ea] {\n    background-color: #1375e9;\n}\n@media (min-width: 576px) {\n.text[data-v-e2de39ea] {\n        font-size: 1rem;\n}\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=5.574bae68872eb08564f8.js.map