(this.webpackJsonpb=this.webpackJsonpb||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var c,s,n=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))},r=a(1),i=a.n(r),l=a(9),u=a(0),d=i.a.memo((function(e){var t=e.htype,a=e.value,c=e.childClass,s=e.id;return Object(u.jsx)("div",{id:s,children:1===+t?Object(u.jsx)("h1",{className:c,children:a}):2===+t?Object(u.jsx)("h2",{className:c,children:a}):Object(u.jsx)("h3",{className:c,children:a})})}),(function(){return!0})),o=a(5),j=a(3),b=a(2),h=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],O=["breakfast","lunch","snacks","dinner"],m="dietData",g=a(4),f=function(e){for(var t={},a=0;a<h.length;a++){t[h[a]]={};for(var c=0;c<O.length;c++)t[h[a]][O[c]]=e[a][c]}var s=e;this.schedule=t,this.updateMeal=function(e,t,a){if(e&&t&&a&&(a.filter((function(e){return e&&""===e})),e in this.schedule&&t in this.schedule[e]&&-1!==h.indexOf(e))){var c,n=new Map,r=Object(o.a)(a);try{for(r.s();!(c=r.n()).done;){var i=c.value;""===i||n.has(i.toLowerCase())||n.set(i.toLowerCase(),i)}}catch(l){r.e(l)}finally{r.f()}return a=Array.from(n.values()),this.schedule[e]=Object(b.a)(Object(b.a)({},this.schedule[e]),{},Object(g.a)({},t,a)),s[1][1]=a,!0}return!1},this.getCompressedData=function(){return s}},p=[],x=Object(o.a)(h);try{for(x.s();!(c=x.n()).done;){c.value;p.push([[],[],[],[]])}}catch(K){x.e(K)}finally{x.f()}try{null===localStorage.getItem(m)&&localStorage.setItem(m,JSON.stringify(p))}catch(Q){console.log("unable to initialize local Storage",Q)}try{var v=localStorage.getItem(m);v&&(s=new f(JSON.parse(v)))}catch(Q){s=new f(p)}var y=Object(r.createContext)(void 0);function A(){return{day:"monday",meal:"breakfast",foodItems:"",parsedFoodItems:[]}}function S(e,t){switch(t.type){case"SET_DAY":return Object(b.a)(Object(b.a)({},e),{},{day:t.payload});case"SET_MEAL":return Object(b.a)(Object(b.a)({},e),{},{meal:t.payload});case"SET_FOOD_ITEMS":return Object(b.a)(Object(b.a)({},e),{},{foodItems:t.payload});case"SET_PARSED_FOOD_ITEMS":return Object(b.a)(Object(b.a)({},e),{},{parsedFoodItems:t.payload});case"RESET":return{day:"monday",meal:"breakfast",foodItems:"",parsedFoodItems:[]};default:throw new Error("Invalid State Change in Modal")}}var I=Object(r.memo)((function(e){var t=e.displayModalHandler,a=e.updateData,c=O,s=h,n=i.a.useReducer(S,null,A),l=Object(j.a)(n,2),b=l[0],m=l[1],g=Object(r.useRef)(null);function f(e){var t,a=e.currentTarget.value.split(";").filter((function(e){return e.trim().length>=1})).map((function(e){return e.trim().split(" ").filter((function(e){return e.trim().length>=1})).map((function(e){return e[0].toUpperCase()+e.substring(1)})).join(" ")})),c=new Map,s=Object(o.a)(a);try{for(s.s();!(t=s.n()).done;){var n=t.value;""===n||c.has(n.toLowerCase())||c.set(n.toLowerCase(),n)}}catch(K){s.e(K)}finally{s.f()}a=Array.from(c.values()),m({type:"SET_PARSED_FOOD_ITEMS",payload:a}),m({type:"SET_FOOD_ITEMS",payload:e.currentTarget.value}),g.current&&(g.current.scrollTop=g.current.scrollHeight)}function p(){m({type:"RESET"})}return Object(u.jsx)("div",{className:"modal-cover",children:Object(u.jsxs)("div",{className:"modal",children:[Object(u.jsx)("button",{className:"btn--right btn",onClick:function(){t(!1)},children:"X"}),Object(u.jsx)("button",{className:"btn--simple",onClick:p,children:"clear"}),Object(u.jsx)(d,{htype:3,value:"Edit Schedule",childClass:"modal__heading"}),Object(u.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(u.jsx)("label",{htmlFor:"days-select",children:"Day: "}),Object(u.jsx)("select",{name:"days",id:"days-select",value:b.day,onChange:function(e){return m({type:"SET_DAY",payload:e.target.value})},onBlur:function(e){return m({type:"SET_DAY",payload:e.target.value})},children:s.map((function(e){return Object(u.jsx)("option",{value:e,children:e[0].toUpperCase()+e.substring(1)},e)}))}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{htmlFor:"meal-select",children:"Time Of Day: "}),Object(u.jsx)("select",{name:"meal",id:"meal-select",value:b.meal,onChange:function(e){return m({type:"SET_MEAL",payload:e.target.value})},onBlur:function(e){return m({type:"SET_MEAL",payload:e.target.value})},children:c.map((function(e){return Object(u.jsx)("option",{value:e,children:e[0].toUpperCase()+e.substring(1)},e)}))}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{htmlFor:"food-input",children:"Food Items (separated by ;) : "}),Object(u.jsx)("input",{name:"food",id:"food-input",type:"text",value:b.foodItems,onChange:f,onBlur:f}),Object(u.jsx)("br",{}),b.parsedFoodItems.length>0?Object(u.jsx)("label",{htmlFor:"modal-ul",children:"Preview : "}):Object(u.jsx)(i.a.Fragment,{}),b.parsedFoodItems.length>0?Object(u.jsx)("ul",{ref:g,id:"modal-ul",className:"modal__ul",children:b.parsedFoodItems.map((function(e){return Object(u.jsx)("li",{children:e},e)}))}):Object(u.jsx)(i.a.Fragment,{})]}),Object(u.jsx)("button",{className:"modal__submit-btn",onClick:function(){a(b.day,b.meal,b.parsedFoodItems)&&p()},children:"Update Changes"})]})})}),(function(){return!0})),k=null;function C(e){return function(t,a,c){return function(e,t,a){if(s.updateMeal(e,t,a))try{return localStorage.setItem(m,JSON.stringify(s.getCompressedData())),!0}catch(Q){console.log("Unable to update Local Storage",Q)}return!1}(t,a,c)?(e.updateData(t,a,c),e.updateModal(!1),k&&clearTimeout(k),e.updateStatus(1),k=setTimeout((function(){e.updateStatus(-1)}),2e3),!0):(e.updateModal(!1),k&&clearTimeout(k),e.updateStatus(0,"local storage not accessible"),k=setTimeout((function(){e.updateStatus(-1)}),2e3),!1)}}var E=function(){var e=Object(r.useContext)(y);return e?Object(u.jsx)(I,{displayModalHandler:e.updateModal,updateData:C(e)}):Object(u.jsx)(u.Fragment,{})};var D=i.a.memo((function(e){var t=Object(j.a)(e.classes,3),a=t[0],c=void 0===a?"":a,s=t[1],n=void 0===s?"":s,r=t[2],i=void 0===r?"":r,l=e.imgAttributes,d=void 0===l?{}:l,o=e.ulAttributes,h=void 0===o?{}:o,O=e.data,m=void 0===O?[]:O;return Object(u.jsxs)("div",{className:c,children:[Object(u.jsx)("div",{className:n,children:Object(u.jsx)("img",Object(b.a)(Object(b.a)({},d),{},{alt:"img"}))}),Object(u.jsx)("div",{className:i,children:Object(u.jsx)("ul",Object(b.a)(Object(b.a)({},h),{},{children:m.map((function(e,t){return Array.isArray(e)&&3===e.length?Object(u.jsxs)("li",{children:[e[0]+" ",Object(u.jsx)("div",{className:"inline-div",children:0===e[1].length?"nothing":e[1]})," "+e[2]]},e[0]+" "+t):Object(u.jsx)("li",{children:e},e+" "+t)}))}))})]})}),(function(e,t){return"compareDataOnly"in t&&1===t.compareDataOnly?e.data===t.data:function(e,t){var a=Object.keys(e),c=Object.keys(t);if(a.length!==c.length)return!1;for(var s=0,n=a;s<n.length;s++){var r=n[s];if(e[r]!==t[r])return!1}return!0}(e,t)})),N=a.p+"static/media/breakfast.32e563c1.jpg",F=a.p+"static/media/snacks.00e2e16f.jpg",T=[N,a.p+"static/media/lunch.20278f44.jpg",F,a.p+"static/media/dinner.ea8e1df7.jpg"],w=Object(r.memo)((function(e){var t=e.day,a=e.schedule,c=O;return Object(u.jsxs)("div",{id:t,children:[Object(u.jsxs)("h2",{className:"".concat(t,"__minor-heading"),children:[t[0].toUpperCase()+t.substring(1)," "]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("section",{className:"".concat(t,"-schedule__card-holder"),children:[Object(u.jsx)("div",{className:"day-schedule__two-card-group",children:c.slice(0,2).map((function(e,t){return Object(u.jsx)(D,{classes:["card ".concat(e),"card__image-holder","card__text-holder"],imgAttributes:{src:T[t],alt:e},data:a[e],compareDataOnly:1},e)}))}),Object(u.jsx)("div",{className:"day-schedule__two-card-group",children:c.slice(2,4).map((function(e,t){return Object(u.jsx)(D,{classes:["card ".concat(e),"card__image-holder","card__text-holder"],imgAttributes:{src:T[2+t],alt:e},data:a[e],compareDataOnly:1},e)}))})]})]})})),J=function(e){var t=e.day,a=Object(r.useContext)(y);return a?Object(u.jsx)(w,{day:t,schedule:a.data[t]}):Object(u.jsx)(u.Fragment,{})},U=a.p+"static/media/diet.bb59c8b9.jpg",_=Object(r.memo)((function(e){var t=e.schedule,a=O,c=Object(b.a)({},t),s=a.map((function(e){return["Have",c[e].join(", "),"in ".concat(e[0].toUpperCase()+e.substring(1))]}));return Object(u.jsxs)("div",{id:"today-schedule",children:[Object(u.jsx)(d,{htype:2,childClass:"today-schedule__major-heading",value:"Today's Diet Plan"}),Object(u.jsx)("hr",{className:"major__hr"}),Object(u.jsx)(D,{classes:["today-schedule__content","today-schedule-content__image-holder","today-schedule-content__ulcover"],data:s,imgAttributes:{src:U,alt:"schedule-image"},ulAttributes:{className:"today-schedule-content__ul"}})]})})),H=function(e){var t=e.day,a=Object(r.useContext)(y);return a?Object(u.jsx)(_,{schedule:a.data[t]}):Object(u.jsx)(u.Fragment,{})},q=a.p+"static/media/wrong.75a13d30.jpg";var Z=function(e){var t=e.statusVisiblity,a=e.message,c=void 0===a?"":a;return Object(u.jsxs)("div",{id:"status",className:"status",children:[1===t?Object(u.jsxs)("div",{id:"status-success",className:"status__success",children:[Object(u.jsx)("img",{src:"data:image/jpeg;base64,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",alt:"success"}),Object(u.jsxs)("div",{children:[" Update Successful ",c]})]}):Object(u.jsx)(u.Fragment,{}),0===t?Object(u.jsxs)("div",{id:"status-fail",className:"status__fail",children:[Object(u.jsx)("img",{src:q,alt:"error"}),Object(u.jsxs)("div",{children:["Update Failed.. ",""===c?"Please Try Again":c]})]}):Object(u.jsx)(u.Fragment,{})]})},R=Object(r.memo)((function(e){var t=e.displayModalHandler;return Object(u.jsxs)("div",{id:"schedule-heading",children:[Object(u.jsxs)("div",{className:"schedule-heading__elem1",children:[Object(u.jsx)("h2",{className:" h__inline schedule-heading__major-heading",children:"Weekly Schedule"}),Object(u.jsx)("button",{className:"btn btn__submit btn--right",onClick:function(){t(!0)},children:"Edit Schedule"})]}),Object(u.jsx)("hr",{className:"major__hr"})]})}),(function(){return!0}));function G(){var e=Object(r.useContext)(y);return e?Object(u.jsx)(R,{displayModalHandler:e.updateModal}):Object(u.jsx)(u.Fragment,{})}var M=Object(r.memo)((function(e){var t=e.statusVisiblity,a=e.statusMessage,c=e.modalVisiblity,s=h,n=s[((new Date).getDay()-1+7)%7];return Object(u.jsxs)(i.a.Fragment,{children:[Object(u.jsx)(d,{htype:1,id:"main-heading",value:"Diet Plan"}),c?Object(u.jsx)(E,{}):Object(u.jsx)(u.Fragment,{}),Object(u.jsx)(H,{day:n}),Object(u.jsx)(G,{}),s.slice(s.indexOf(n),7).concat(s.slice(0,s.indexOf(n))).map((function(e){return Object(u.jsx)(J,{day:e},e)})),-1!==t?Object(u.jsx)(Z,{statusVisiblity:t,message:a}):Object(u.jsx)(u.Fragment,{})]})})),B=function(){var e=Object(r.useContext)(y);return e?Object(u.jsx)(M,{modalVisiblity:e.modalVisiblity,statusVisiblity:e.status.visiblity,statusMessage:e.status.message}):Object(u.jsx)(u.Fragment,{})},L=(a(16),a(17),a(10));var V=function(){var e=Object(r.useState)((function(){return Object(b.a)({},s.schedule)})),t=Object(j.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)((function(){return{visiblity:-1,message:""}})),i=Object(j.a)(n,2),l=i[0],u=i[1],d=Object(r.useState)((function(){return!1})),o=Object(j.a)(d,2),m=o[0],f=o[1],p=Object(r.useRef)((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";-1!==[0,-1,1].indexOf(e)?u({visiblity:e,message:t}):u({visiblity:-1,message:""})})),x=Object(r.useRef)((function(e,t,a){-1!==h.indexOf(e)&&-1!==O.indexOf(t)&&c((function(c){return Object(b.a)(Object(b.a)({},c),{},Object(g.a)({},e,Object(b.a)(Object(b.a)({},c[e]),{},Object(g.a)({},t,Object(L.a)(a)))))}))}));return{data:a,status:l,modalVisiblity:m,updateModal:Object(r.useRef)((function(e){f(e?function(e){return!0}:function(e){return!1})})).current,updateStatus:p.current,updateData:x.current}};function Y(){var e=V();return Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(y.Provider,{value:e,children:Object(u.jsx)(B,{})})})}Object(l.render)(Object(u.jsx)(Y,{}),document.getElementById("root")),n()}},[[18,1,2]]]);