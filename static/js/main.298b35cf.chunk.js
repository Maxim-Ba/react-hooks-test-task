(this["webpackJsonpfast-react"]=this["webpackJsonpfast-react"]||[]).push([[0],{20:function(e,t,a){e.exports=a(32)},26:function(e,t,a){},27:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);a(21);var n=a(0),c=a.n(n),r=a(9),l=a.n(r),i=(a(26),a(5)),s=(a(27),function(e){var t=e.elementIndexSelected?{backgroundColor:"red"}:{backgroundColor:"white"};return c.a.createElement("p",{style:t,className:"item"},e.name)}),o=a(34),u=a(33),m=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],l=a[1],m=Object(n.useState)(!1),E=Object(i.a)(m,2),p=E[0],d=E[1],f=function(t){if("right"===e.side)return e.dispatch({type:"ADD_TO_SELECTEDR",item:{name:t.currentTarget.getAttribute("name"),select:!1}}),e.dispatch({type:"SELECT_R",index:parseInt(t.currentTarget.getAttribute("index"))});e.dispatch({type:"ADD_TO_SELECTEDL",item:{name:t.currentTarget.getAttribute("name"),select:!1}}),e.dispatch({type:"SELECT_L",index:parseInt(t.currentTarget.getAttribute("index"))})},b=e.value;return c.a.createElement("div",{className:" WnH"},c.a.createElement("div",{className:"list-group",style:{overflowY:"scroll",height:"300px"}},c.a.createElement(o.a,null,b.filter((function(e){return e})).map((function(e,t){return c.a.createElement(u.a,{key:t,timeout:500,in:!0,classNames:"list-group-item-transition"},c.a.createElement("div",{index:t,className:"list-group-item list-group-item_m-0_p-0",onClick:f,name:e.name},c.a.createElement(s,{name:e.name,elementIndexSelected:e.select})))})))),c.a.createElement("div",{className:"input-group mb-3"},c.a.createElement("input",{onChange:function(e){l(e.target.value)},type:"text",className:"form-control",value:r}),c.a.createElement("button",{className:"btn btn-info",onClick:function(){if(!r)return d(!0);d(!1),"right"===e.side?e.dispatch({type:"ADD_TO_RIGHT",item:{name:r,select:!1}}):e.dispatch({type:"ADD_TO_LEFT",item:{name:r,select:!1}}),l("")}},"Add"),p?c.a.createElement("div",{className:"alert alert-danger",role:"alert",style:{top:"105%",position:"absolute"}},"This field is reqired!"):null))},E=function(e){return c.a.createElement("button",{className:"btn btn-primary button",onClick:function(){if(">"===e.direction)return e.selectedR&&e.dispatch({type:"ADD_TO_LEFT",item:{name:e.selectedR.name,select:!1}}),e.dispatch({type:"ADD_TO_SELECTEDR",item:null}),e.dispatch({type:"DELETE_IN_RIGHT"});e.selectedL&&e.dispatch({type:"ADD_TO_RIGHT",item:{name:e.selectedL.name,select:!1}}),e.dispatch({type:"ADD_TO_SELECTEDL",item:null}),e.dispatch({type:"DELETE_IN_LEFT"})}},e.direction," button ",e.direction)},p=function(){var e=Object(n.useContext)(_),t=Object(n.useState)(e),a=Object(i.a)(t,2),r=a[0],l=a[1];Object(n.useEffect)((function(){setTimeout((function(){l(r+1e3)}),1e3)}),[r]);var s=new Date(r);return c.a.createElement("div",null,c.a.createElement("p",null,"TIMER"),c.a.createElement("p",null,"NOW IS: ","".concat(s.getHours(),"-").concat(s.getMinutes(),"-").concat(s.getSeconds())))},d=a(8),f=a(4),b=function(e,t){switch(t.type){case"ADD_TO_RIGHT":return Object(f.a)({},e,{right:[].concat(Object(d.a)(e.right),[t.item])});case"ADD_TO_LEFT":return Object(f.a)({},e,{left:[].concat(Object(d.a)(e.left),[t.item])});case"DELETE_IN_RIGHT":return Object(f.a)({},e,{right:Object(d.a)(e.right).filter((function(e){return!e.select}))});case"DELETE_IN_LEFT":return Object(f.a)({},e,{left:Object(d.a)(e.left).filter((function(e){return!e.select}))});case"SELECT_R":return Object(f.a)({},e,{right:Object(d.a)(e.right).map((function(e,a){return a===t.index?Object(f.a)({},e,{select:!0}):Object(f.a)({},e,{select:!1})}))});case"SELECT_L":return Object(f.a)({},e,{left:Object(d.a)(e.left).map((function(e,a){return a===t.index?Object(f.a)({},e,{select:!0}):Object(f.a)({},e,{select:!1})}))});case"ADD_TO_SELECTEDR":return Object(f.a)({},e,{selectedR:t.item});case"ADD_TO_SELECTEDL":return Object(f.a)({},e,{selectedL:t.item});default:return e}},h=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1];return c.a.createElement(u.a,{in:!0,appear:!0,classNames:"footer-transition",timeout:3e3},c.a.createElement("footer",{className:"footer container-fluid"},c.a.createElement("section",{className:"about-project",onClick:a?function(e){r(!1)}:function(e){r(!0)}},c.a.createElement("div",{className:"about-project__link ".concat(a?"about-project_open":null)},c.a.createElement("p",null,"About project "),a?c.a.createElement("p",{className:"about-project__link_close"},"\u2716"):null)),c.a.createElement(u.a,{in:a,unmountOnExit:!0,classNames:"project-description-transition",timeout:200},c.a.createElement("section",{className:"project-description"},c.a.createElement("div",null,c.a.createElement("p",null,"In this project used technologies:"),c.a.createElement("ul",{className:"list"},c.a.createElement("li",null,"React (Hooks, Context, create-react-app)"),c.a.createElement("li",null,"Bootstrap"),c.a.createElement("li",null,"ReactTransitionGroup"),c.a.createElement("li",null,"Git")))))))},_=c.a.createContext(Date.now());var T=function(){var e=Object(n.useReducer)(b,{right:[],left:[],selectedR:null,selectedL:null}),t=Object(i.a)(e,2),a=t[0],r=t[1];return c.a.createElement(u.a,{in:!0,appear:!0,timeout:800,classNames:"first-transition"},c.a.createElement("div",{className:"App "},c.a.createElement("header",{className:"App-header"},c.a.createElement("h1",null,"Test task")),c.a.createElement("section",{className:"App__wraper flex-column  flex-sm-row"},c.a.createElement(m,{dispatch:r,value:a.right,side:"right"}),c.a.createElement(u.a,{appear:!0,in:!0,timeout:1e3,classNames:"item-button-transition"},c.a.createElement("div",{className:"btn-group-vertical"},c.a.createElement(E,{direction:">",dispatch:r,selectedR:a.selectedR}),c.a.createElement(E,{direction:"<",dispatch:r,selectedL:a.selectedL}))),c.a.createElement(m,{dispatch:r,value:a.left,side:"left"})),c.a.createElement(p,null),c.a.createElement(h,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=a(18);l.a.render(c.a.createElement(O.a,null,c.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.298b35cf.chunk.js.map