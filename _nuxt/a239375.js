(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{327:function(t,e,n){var content=n(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("72c7c9cc",content,!0,{sourceMap:!1})},349:function(t,e,n){"use strict";n(327)},350:function(t,e,n){var r=n(81)(!1);r.push([t.i,"@media (min-width:768px){.card[data-v-901323fc]{margin-top:66px}.card-text[data-v-901323fc]{font-size:1.25em}}.card-body[data-v-901323fc]{margin-bottom:9rem}.page[data-v-901323fc]{min-height:calc(100vh - 58px);max-width:999px}.container[data-v-901323fc]{background-color:#fff}body[data-v-901323fc]{overflow-x:hidden}.row[data-v-901323fc]{padding:2px;--bs-gutter-x:0.25rem}.page-enter-active[data-v-901323fc],.page-leave-active[data-v-901323fc],.page-right-enter-active[data-v-901323fc],.page-right-leave-active[data-v-901323fc]{transition:transform .2s ease .25s,opacity .2s ease .25s}.show-enter-active[data-v-901323fc],.show-leave-active[data-v-901323fc]{transition:opacity .1s}.show-enter[data-v-901323fc],.show-leave-active[data-v-901323fc]{opacity:0}.page-enter[data-v-901323fc]{transform:translate(100%,-100%);opacity:.25}.page-enter-to[data-v-901323fc]{transform:translateY(-100%);opacity:1}.page-leave-to[data-v-901323fc]{transform:translate(-100%);opacity:0}.page-right-enter[data-v-901323fc]{transform:translate(-100%,-100%);opacity:.25}.page-right-enter-to[data-v-901323fc]{transform:translateY(-100%);opacity:1}.page-right-leave-to[data-v-901323fc]{transform:translate(100%);opacity:0}",""]),t.exports=r},374:function(t,e,n){"use strict";n.r(e);var r=n(7),o=(n(21),n(34),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("questions_classic",r.slug).fetch();case 3:return o=e.sent,e.next=6,n("questions_classic").fetch();case 6:return c=e.sent,e.abrupt("return",{question:o,questions:c});case 8:case"end":return e.stop()}}),e)})))()},data:function(){return{isActive:{1:!1,"-1":!1,0:!1}}},head:function(){return{title:"Voksmonitor 2022 - "+this.question.name,meta:[{hid:"question "+this.question.slug,name:this.question.name,description:this.question.question}]}},mounted:function(){var t=this.$store.getters.getAnswer(this.question.id);void 0!==t&&(this.isActive[t]=!0)},computed:{nquestions:function(){return this.questions.length},progress:function(){return parseInt(this.$route.params.slug)/this.nquestions*100},progressStyle:function(){return"width: "+this.progress+"%"},nextTo:function(){return parseInt(this.$route.params.slug)==this.questions.length?"/extra/":"/question/"+(parseInt(this.$route.params.slug)+1)+"/"},backTo:function(){return"/question/"+(parseInt(this.$route.params.slug)-1)+"/"},notFirst:function(){var t=!0;return 1==parseInt(this.$route.params.slug)&&(t=!1),t}},methods:{next:function(t){if(null!=t){var e={key:this.question.id,value:t};this.$store.commit("addAnswer",e)}this.$router.push({path:this.nextTo})},back:function(t){this.$router.push({path:this.backTo})}},transition:function(t,e){return e?null==e.name?"show":+t.params.slug<+e.params.slug?{name:"page-right",mode:""}:{name:"page",mode:""}:"show"}}),c=(n(349),n(54)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("div",{staticClass:"progress"},[n("div",{staticClass:"progress-bar bg-warning",style:t.progressStyle,attrs:{role:"progressbar","aria-valuenow":t.progress,"aria-valuemin":"0","aria-valuemax":"100"}})]),t._v(" "),n("div",{staticClass:"container page card border-light pt-3"},[n("div",{staticClass:"card-header"},[t._v(t._s(t.question.slug)+" / "+t._s(t.nquestions)+"  "+t._s(t.question.name))]),t._v(" "),n("div",{staticClass:"card-body"},[n("h2",{staticClass:"card-title"},[t._v(t._s(t.question.question))]),t._v(" "),n("p",{staticClass:"card-text"},[t._v(t._s(t.question.description))])])]),t._v(" "),n("div",{},[n("div",{staticClass:"row container position-fixed bottom-0 start-50 translate-middle-x"},[n("div",{staticClass:"col-4 d-grid"},[n("button",{staticClass:"btn btn-lg",class:{"btn-primary":t.isActive[1],"btn-outline-primary":!t.isActive[1]},on:{click:function(e){return t.next(1)}}},[t._v("IGEN")])]),t._v(" "),n("div",{staticClass:"col-4 d-grid"},[n("button",{staticClass:"btn btn-lg",class:{"btn-primary":t.isActive[-1],"btn-outline-primary":!t.isActive[-1]},on:{click:function(e){return t.next(-1)}}},[t._v("NEM")])]),t._v(" "),n("div",{staticClass:"col-4 d-grid gap-1"},[n("button",{staticClass:"btn btn-lg text-muted",class:{"btn-dark":t.isActive[0],"btn-outline-secondary":!t.isActive[0]},on:{click:function(e){return t.next(0)}}},[n("small",[t._v("Nem tudom")])])]),t._v(" "),n("div",{staticClass:"row pt-2"},[n("div",{staticClass:"col-6 d-grid d-flex justify-content-start"},[t.notFirst?n("button",{staticClass:"btn btn-link text-muted",on:{click:function(e){return t.back(null)}}},[t._v("< Vissza")]):t._e()]),t._v(" "),n("div",{staticClass:"col-6 d-grid d-flex justify-content-end"},[n("button",{staticClass:"btn btn-link text-muted",class:{"btn-dark":t.isActive.null,"":!t.isActive.null},on:{click:function(e){return t.next(null)}}},[t._v("Tovább >")])])])])])])}),[],!1,null,"901323fc",null);e.default=component.exports}}]);