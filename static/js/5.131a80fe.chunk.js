(this.webpackJsonpcardanalytics=this.webpackJsonpcardanalytics||[]).push([[5],{3:function(e,n,t){"use strict";t.r(n);var a=t(83),i=t(115),r=t(116),c=t(74),o=t(37),l=t(5),s=t.n(l),u=t(24),d=t.n(u),m=t(34),g=t(108),v=t(126),p=t(104),k=t(127),b=t(122),O=t(109);var f=Object(g.a)((function(e){return Object(v.a)({container:{backgroundColor:e.palette.background.default},card:{margin:e.spacing()}})})),S=[{title:"General Cardano Info",Component:function(){var e=Object(m.b)((function(e){return e.cardanoData}));return e?s.a.createElement(p.a,{container:!0,direction:"column"},s.a.createElement("span",null,"Epoch:"," ",e.epoch.toLocaleString()),s.a.createElement("span",null,"Block:"," ",e.blocks.toLocaleString()),s.a.createElement("span",null,"Slot:"," ",e.slot.toLocaleString()),s.a.createElement("span",null,"Total transactions:"," ",e.transactions.toLocaleString()),s.a.createElement("span",null,"Total assets:"," ",e.assets.toLocaleString())):null}},{title:"Current Fees",Component:function(){var e=Object(m.b)((function(e){return e.cardanoData}));if(!e)return null;var n=e.currentFees,t=n.min,a=n.max,i=n.average;return s.a.createElement(p.a,{container:!0,direction:"column"},s.a.createElement("span",null,"Min Fee: ".concat((t/1e6).toFixed(2)," ADA")),s.a.createElement("span",null,"Max Fee: ".concat((a/1e6).toFixed(2)," ADA")),s.a.createElement("span",null,"Average Fee: ".concat((i/1e6).toFixed(2)," ADA")))}}];var E=function(){var e=f();return s.a.createElement(p.a,{className:e.container,container:!0},S.map((function(n){var t=n.title,a=n.Component;return s.a.createElement(k.a,{className:e.card,key:t},s.a.createElement(b.a,{title:t}),s.a.createElement(O.a,null,s.a.createElement(a,null)))})))},j=t(55),N=t(60),F=t(119),h=t(120),_=t(121),D=t(110),A=t(111),y=t(112),L=t(85),C=t(51),I=t(27),T=Object(I.createAction)("LOAD_CARDANO_DATA")(),x=t(124),B=t(113),q=t(30),w=t(114),M=[function(e,n,t){return Object(x.a)(0,1e4).pipe(Object(B.a)((function(){return t.load$().pipe(Object(q.a)((function(e){return T(e)})),Object(w.a)((function(e){return Object(o.warn)("Failed to fetch data, retrying in ".concat(1e4,"ms"),e),C.a})))})))},function(e){return Object(_.a)([e.pipe(Object(D.a)(Object(I.isActionOf)(T)))]).pipe(Object(A.a)(1),Object(y.a)((function(){var e;return null===(e=document.getElementById("preloader"))||void 0===e?void 0:e.remove()})),Object(L.a)((function(){return C.a})))}],X=Object(N.b)({cardanoData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1?arguments[1]:void 0;return n.type===Object(I.getType)(T)?n.payload:e}}),G=t(14),R=t(128),J=t(129),P=t(125),Q=t.e(3).then(t.t.bind(null,117,7)).then((function(e){return new(0,e.GraphQLClient)("https://cardano.firmfirm.co/graphql")}));function U(e){var n=e.previousBlock,t=e.transactions,a=[].concat(Object(j.a)(n.transactions),Object(j.a)(t)).map((function(e){return parseInt(e.fee)}));return{min:Object(R.a)(a),max:Object(J.a)(a),average:Object(P.a)(a)}}var V={load:function(){return Q.then((function(e){return e.request({kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"transactions_aggregate"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"aggregate"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"cardano"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tip"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"epochNo"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"number"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slotNo"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"transactions"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"fee"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"previousBlock"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"transactions"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"fee"},arguments:[],directives:[]}]}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"assets_aggregate"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"aggregate"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:318,source:{body:"{\n  transactions_aggregate {\n    aggregate {\n      count\n    }\n  }\n  cardano {\n    tip {\n      epochNo\n      number\n      slotNo\n      transactions {\n        fee\n      }\n      previousBlock {\n        transactions {\n          fee\n        }\n      }\n    }\n  }\n  assets_aggregate {\n    aggregate {\n      count\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}}).then((function(e){var n=e.assets_aggregate,t=e.cardano.tip,a=e.transactions_aggregate;return{assets:parseInt(n.aggregate.count),blocks:t.number||0,epoch:t.epochNo||0,slot:t.slotNo||0,transactions:parseInt(a.aggregate.count),currentFees:U(t)}}))}))},load$:function(){return Object(G.a)(this.load())}},$="undefined"!==typeof __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:N.c,z=Object(F.a)({dependencies:V}),H=$(Object(N.a)(z)),K=Object(N.d)(X,H);z.run(h.a.apply(void 0,Object(j.a)(M)));var W=K;Object(o.setLevel)(o.levels.INFO);var Y=Object(a.a)({palette:{background:{default:c.a[200]}}}),Z=s.a.createElement(m.a,{store:W},s.a.createElement(i.a,{theme:Y},s.a.createElement(r.a,null),s.a.createElement(E,null)));d.a.render(Z,document.getElementById("root"))}}]);
//# sourceMappingURL=5.131a80fe.chunk.js.map