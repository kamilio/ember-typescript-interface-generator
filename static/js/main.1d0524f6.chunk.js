(this["webpackJsonpember-typescript-interface-generator"]=this["webpackJsonpember-typescript-interface-generator"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),u=n.n(o),i=(n(13),n(14),n(2));var c=n(5),l=n(4),p=0,m=function(){return p+=1},s=[{id:m(),name:"",type:"string"}],d=function(e,t){switch(t.type){case"add":return[].concat(Object(l.a)(e),[{id:m(),name:"",type:"string"}]);case"remove":return e.filter((function(e){return e.id!==t.payload.property.id}));case"updateName":var n=e.map((function(e){return e.id===t.payload.property.id?Object(c.a)({},e,{name:t.payload.value}):e}));return n[n.length-1].name?[].concat(Object(l.a)(n),[{id:m(),name:"",type:"string"}]):n;case"updateType":return e.map((function(e){return e.id===t.payload.property.id?Object(c.a)({},e,{type:t.payload.value}):e}));case"import":return function(e){var t=e.split("/>")[0].split(">")[0];t=(t=(t=t.replace(/{{.*}}/gm,"____")).split(/[ \n]+/).slice(1).filter((function(e){return e}))).map((function(e){return e.startsWith("@")?e.substring(1):null})).filter((function(e){return e}));var n=function(e){var t=e.split("=")[0],n=e.split("=")[1];return t.startsWith("on")?"function":(n.startsWith('"'),"string")};return t=t.map((function(e,t){return{id:t,name:e.split("=")[0],type:n(e)}}))}(t.payload);default:throw new Error("Not existing state")}},y=["number","string","boolean","enum","void","null","undefined","any","never","Array","function"],f=function(){var e=Object(a.useReducer)(d,s),t=Object(i.a)(e,2),n=t[0],o=t[1],u=Object(a.useState)(""),c=Object(i.a)(u,2),l=c[0],p=c[1];return r.a.createElement("div",null,r.a.createElement("h2",null,"Import"),r.a.createElement("textarea",{value:l,onChange:function(e){var t=e.target.value;p(t),o({type:"import",payload:t})}}),r.a.createElement("h2",null,"Define"),r.a.createElement("button",{onClick:function(){return o({type:"add"})},type:"button"},"Add"),r.a.createElement("ul",null,n.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("label",null,"Name",r.a.createElement("input",{name:"property-name",type:"text",value:e.name,onChange:function(t){return o({type:"updateName",payload:{property:e,value:t.target.value}})}}),r.a.createElement("select",{name:"type",value:e.type,onChange:function(t){return o({type:"updateType",payload:{property:e,value:t.target.value}})}},y.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))),r.a.createElement("button",{onClick:function(){return o({type:"remove",payload:{property:e}})},type:"button"},"x"))}))),r.a.createElement("h2",null,"Output"),r.a.createElement("code",null,"interface Args ","{",n.filter((function(e){return e.name})).map((function(e){return r.a.createElement("p",{key:e.id},e.name,": ",e.type,";")})),"}"))};var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.1d0524f6.chunk.js.map