(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),l=n(2),a=n.n(l),s=n(3),r=n(4),d=n(7),i=n(6),u=(n(13),n(5)),h=n.n(u),m=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=function(e){Object(d.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,o=new Array(c),l=0;l<c;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={selectedGoods:[]},e.clearSelection=function(){0!==e.state.selectedGoods.length&&e.setState({selectedGoods:[]})},e}return Object(r.a)(n,[{key:"clickHandler",value:function(e){this.state.selectedGoods.includes(e)?this.setState((function(t){return{selectedGoods:t.selectedGoods.filter((function(t){return t!==e}))}})):this.setState((function(t){return t.selectedGoods.push(e),{selectedGoods:t.selectedGoods}}))}},{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return o.a.createElement("div",{className:"App"},t.length>0?o.a.createElement("h1",null,"Selected good:"," ","".concat(t.join(", ")," "),o.a.createElement("button",{type:"button",onClick:this.clearSelection},"Clear All")):o.a.createElement("h1",null,"No Goods Selected"),o.a.createElement("ul",null,m.map((function(n){return o.a.createElement("li",{key:n,className:h()({selected:t.includes(n)})},"".concat(n),o.a.createElement("button",{type:"button",onClick:function(){return e.clickHandler(n)}},"Add/Remove"))}))))}}]),n}(o.a.Component);a.a.render(o.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.c32205ae.chunk.js.map