(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{303:function(t,c,e){var content=e(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(82).default)("549c97b9",content,!0,{sourceMap:!1})},310:function(t,c,e){"use strict";e(303)},311:function(t,c,e){var l=e(81)(!1);l.push([t.i,".page[data-v-6a234fbb]{min-height:calc(100vh - 58px);max-width:666px}.calc-inner[data-v-6a234fbb]{cursor:pointer}",""]),t.exports=l},329:function(t,c,e){"use strict";e.r(c);e(35),e(9),e(210);var l={data:function(){var t=[];return void 0!==window.localStorage.calcs&&(t=JSON.parse(window.localStorage.calcs).filter((function(element){return"cz_psp_2021"==element.calc}))),{calcs:t}},computed:{noCalc:function(){var t=!1;return 0==this.calcs.length&&(t=!0),t}},methods:{removeCalc:function(i){this.calcs.splice(i,1),this.saveLocalStorage(this.calcs)},loadCalc:function(i){this.$store.commit("storeAnswers",this.calcs[i].answers),this.$store.commit("storeWeights",this.calcs[i].weights),this.$router.push({path:"/results/"})},saveLocalStorage:function(){window.localStorage.calcs=JSON.stringify(this.calcs)},localDate:function(s){Date.parse(s);var t=new Date(s);return[t.toLocaleDateString("cs-CZ"),t.toLocaleTimeString("cs-CZ")]},scrollToTop:function(){window.scrollTo(0,0)}},mounted:function(){this.scrollToTop()}},n=(e(310),e(54)),component=Object(n.a)(l,(function(){var t=this,c=t.$createElement,e=t._self._c||c;return e("div",[t.noCalc?e("div",{staticClass:"alert alert-warning"},[t._v("\n    Není uložena žádná vyplnění volební kalkulačka.\n    "),e("br"),t._v(" "),e("NuxtLink",{attrs:{to:"/question/1/"}},[e("strong",[t._v("Spustit Volební kalkulačku")])])],1):t._e(),t._v(" "),t._l(t.calcs,(function(c,l){return e("div",{key:l,staticClass:"list-group"},[e("div",{staticClass:"list-group-item list-group-item-action flex-column align-items-start active mt-4"},[e("small",[e("button",{staticClass:"btn-close bg-danger",attrs:{type:"button","aria-label":"Close"},on:{click:function(c){return t.removeCalc(l)}}}),t._v(" "),e("span",{staticClass:"text-muted"},[t._v("Smazat")])]),t._v(" "),e("div",{staticClass:"text-white calc-inner",on:{click:function(c){return t.loadCalc(l)}}},[e("div",{staticClass:"d-flex w-100 justify-content-between"},[e("h5",{staticClass:"mb-1"},[t._v(t._s(c.name))])]),t._v(" "),e("p",{staticClass:"mb-1"},[t._v("\n          "+t._s(t.localDate(c.date)[0])+" \n          "),e("small",[t._v(t._s(t.localDate(c.date)[1]))])])])])])}))],2)}),[],!1,null,"6a234fbb",null);c.default=component.exports}}]);