(this.webpackJsonpa=this.webpackJsonpa||[]).push([[1],{132:function(t,e,n){},133:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(15),i=n(19),o=n(11),s=n(8),u=n(17),d=n.n(u),l=n(25),j=n(6),b=n(82),p=n.n(b),f=n(169),h=n(175),O=n(61),x=n(166),m=n(5),g=n(134),y=n(45),v=n(167),C=n(99),w=n(157),k=n(168),S=n(87),D=n.n(S),N=n(60),I=n.n(N),L=n(88),B=n.n(L),z=n.p+"static/media/a.3052d43c.jpg",M=n.p+"static/media/lunch1.82bc6dd3.jpg",R=n.p+"static/media/snacks12.b9592683.jpg",H=n.p+"static/media/dinner1.56b92040.jpg",F=n(81),E=n(165),T=n(86),U=n.n(T),P=n(95),W=n(2),Z=Object(g.a)((function(t){return{cardMedia:Object(o.a)({flex:4,height:"100%",overflow:"hidden",borderRadius:"30px 70px 70px 30px"},t.breakpoints.down("xs"),{borderRadius:"30px 30px 20px 20px"}),displayNone:{display:"none"}}}));function J(t){var e=t.src,n=t.title,r=Object(a.useState)("loading"),c=Object(i.a)(r,2),o=c[0],s=c[1],u=Z();return Object(W.jsxs)(E.a,{className:u.cardMedia,component:"div",children:[Object(W.jsx)(w.a,{in:"success"===o,timeout:1e3,style:{transitionDelay:"300ms"},children:Object(W.jsx)("img",{className:"success"===o?void 0:u.displayNone,height:"100%",width:"100%",alt:n,src:e,title:n,onError:function(t){s("fail")},onLoad:function(){s("success")}})}),"fail"===o?Object(W.jsx)(w.a,{in:!0,timeout:1e3,style:{transitionDelay:"700ms"},children:Object(W.jsx)(U.a,{title:"image not available",style:{width:"80%",height:"100%",margin:"auto",display:"block"}})}):Object(W.jsx)(W.Fragment,{}),"loading"===o?Object(W.jsx)(P.a,{component:"div",variant:"rect",height:"100%"}):Object(W.jsx)(W.Fragment,{})]})}var A=n(69),Y=n(70),X=[z,M,R,H],q=Object(g.a)((function(t){var e;return{paperWrapper:Object(o.a)({display:"flex",justifyContent:"center",padding:"20px",width:"100%"},t.breakpoints.down("xs"),{padding:"20px 5px",marginTop:"15px"}),card:(e={display:"flex",flexDirection:"row",height:"350px",width:"max(85% , 400px)",borderRadius:"30px 30px 30px 30px"},Object(o.a)(e,t.breakpoints.down("sm"),{width:"87%"}),Object(o.a)(e,t.breakpoints.down("xs"),{flexDirection:"column",height:"450px",width:"87%"}),e),cardContent:{flex:5,paddingLeft:"5%",overflow:"hidden"},paperCardheading:{display:"flex",justifyContent:"space-between"},divider:{marginBottom:"10px"}}})),K=Object(a.memo)((function(t){var e=t.day,n=t.index,a=t.visible,r=q();return a?Object(W.jsx)("div",{className:r.paperWrapper,children:Object(W.jsxs)(x.a,{raised:!0,elevation:12,className:r.card,children:[Object(W.jsx)(J,{title:j.b[n].toUpperCase(),src:X[n]}),Object(W.jsxs)(v.a,{className:r.cardContent,children:[Object(W.jsxs)(C.a,{elevation:0,className:r.paperCardheading,children:[Object(W.jsx)(w.a,{in:!0,timeout:1e3,style:{transitionDelay:"300ms"},children:Object(W.jsx)(O.a,{gutterBottom:!0,variant:"h5",children:j.b[n].toUpperCase()})}),Object(W.jsx)(D.a,{fontSize:"large"})]}),Object(W.jsx)(k.a,{className:r.divider}),Object(W.jsx)(w.a,{in:!0,timeout:1e3,style:{transitionDelay:"300ms"},children:Object(W.jsx)(A.a,{children:Object(W.jsx)(Y.a,{variant:"outlined",clickable:!0,color:"primary",icon:Object(W.jsx)(I.a,{}),label:"Healthy Diet"})})}),Object(W.jsx)(w.a,{in:!0,timeout:1e3,style:{transitionDelay:"300ms"},children:Object(W.jsx)(A.a,{children:Object(W.jsx)(Y.b,{color:"primary",clickable:!0,variant:"outlined",icon:Object(W.jsx)(B.a,{}),label:"Happy Meal"})})}),Object(W.jsx)(F.a,{type:"today",day:e,meal:j.b[n]})]})]})}):Object(W.jsx)(W.Fragment,{})})),G=Object(m.a)((function(t){return{wrapper:{flexDirection:"row"},root:Object(o.a)({width:"25%",maxWidth:"unset",minWidth:"250px"},t.breakpoints.down("xs"),{width:"100%",minWidth:"unset",borderLeft:"1px solid black",borderRight:"1px solid black"})}}))(f.a),Q=Object(m.a)((function(t){return{flexContainer:{width:"100%",margin:"auto"},scrollButtonsDesktop:Object(o.a)({},t.breakpoints.down("xs"),{display:"flex"}),root:{backgroundImage:"linear-gradient(#e9dd71, rgba(230, 239, 126, 0.86))"}}}))(h.a),V=Object(g.a)((function(t){var e;return{todayWrapper:{marginTop:"30px"},card:(e={borderRadius:"40px",paddingBottom:"20px",width:"80%",margin:"auto"},Object(o.a)(e,t.breakpoints.down("md"),{width:"90%"}),Object(o.a)(e,t.breakpoints.down("sm"),{width:"95%"}),Object(o.a)(e,t.breakpoints.down("xs"),{width:"97%"}),e),tabIndicatorProps:{background:t.palette.background.paper},styledTabExtraDesign:{backgroundColor:t.palette.background.paper}}})),$=Object(a.memo)((function(t){var e=t.day,n=V(),a=r.a.useState(0),c=Object(i.a)(a,2),o=c[0],s=c[1];return Object(W.jsxs)("div",{className:n.todayWrapper,children:[Object(W.jsx)(O.a,{align:"center",gutterBottom:!0,variant:"h3",children:"Today Schedule"}),Object(W.jsxs)(x.a,{elevation:3,className:n.card,children:[Object(W.jsx)(Q,{selectionFollowsFocus:!0,value:o,onChange:function(t,e){s(e)},TabIndicatorProps:{className:n.tabIndicatorProps},variant:"scrollable",scrollButtons:"auto",children:j.b.map((function(t,e){return Object(W.jsx)(G,{disableRipple:!0,className:e===o?n.styledTabExtraDesign:void 0,icon:0===e?Object(W.jsx)(y.a,{fontSize:"large"}):1===e?Object(W.jsx)(y.c,{fontSize:"large"}):2===e?Object(W.jsx)(y.d,{fontSize:"large"}):Object(W.jsx)(y.b,{fontSize:"large"}),label:Object(W.jsx)(O.a,{variant:"h6",style:{marginLeft:"10px"},children:t})},t)}))}),Object(W.jsx)(p.a,{enableMouseEvents:!0,onChangeIndex:function(t){s(t)},containerStyle:{transition:"transform 0.8s cubic-bezier(0.15, 0.3, 0.25, 1) 0s"},springConfig:{duration:"0.8s",easeFunction:"cubic-bezier(0.15, 0.3, 0.25, 1)",delay:"0s"},index:o,children:j.b.map((function(t,n){return Object(W.jsx)(K,{day:e,meal:t,visible:n===o,index:n},t)}))})]})]})})),_=n(23),tt=n(177),et=n(155),nt=n(170),at=n.e(7).then(n.bind(null,186)).then(function(){var t=Object(l.a)(d.a.mark((function t(e){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(m.a)((function(t){return{root:Object(s.a)(Object(s.a)({},t.typography.h6),{},{wordBreak:"break-all"}),icon:Object(s.a)(Object(s.a)({},t.typography.h4),{},{flexDirection:"column",justifyContent:"center"})}}))(e.default),t.abrupt("return",n);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());function rt(t){var e=t.open,n=t.onClose,r=t.type,c=t.message,o=Object(a.useState)(null),s=Object(i.a)(o,2),u=s[0],d=s[1];at.then((function(t){return d((function(){return t}))}));var l=function(t,e){"clickaway"!==e&&n()};return Object(W.jsx)(tt.a,{style:{maxWidth:"90%",margin:"auto"},open:e,autoHideDuration:3e3,onClose:l,children:null!==u?Object(W.jsx)(u,{elevation:6,variant:"filled",onClose:l,severity:r,action:Object(W.jsx)(et.a,{onClick:l,size:"medium",color:"inherit",children:Object(W.jsx)(nt.a,{})}),children:c}):Object(W.jsxs)("div",{children:[" ",c]})})}var ct=n(171),it=n(172),ot=n(176),st=n(162),ut=n(98);function dt(t){return Object(W.jsxs)(ut.a,Object(s.a)(Object(s.a)({},t),{},{style:{transform:"rotate(-12deg)"},children:[Object(W.jsx)("path",{d:"M 5.167969 0.203125 C 4.335938 0.585938 4.035156 1.730469 4.589844 2.476562 C 4.761719 2.710938 4.804688 2.9375 4.804688 3.628906 C 4.804688 4.101562 4.761719 4.484375 4.707031 4.484375 C 4.496094 4.484375 3.695312 5.402344 3.4375 5.957031 L 3.148438 6.566406 L 3.148438 13.878906 C 3.148438 22.238281 3.105469 21.84375 4.066406 22.890625 C 4.898438 23.796875 5.359375 23.957031 7.398438 24 C 8.894531 24.03125 9.117188 24.019531 9.300781 23.851562 C 9.542969 23.636719 9.554688 23.390625 9.351562 23.101562 C 9.214844 22.921875 9.019531 22.890625 7.441406 22.847656 C 5.722656 22.792969 5.679688 22.78125 5.253906 22.484375 C 4.964844 22.292969 4.707031 21.980469 4.539062 21.628906 L 4.269531 21.074219 L 4.292969 13.816406 L 4.324219 6.554688 L 4.621094 6.097656 C 4.792969 5.839844 5.070312 5.5625 5.253906 5.464844 C 5.914062 5.101562 5.980469 4.984375 5.980469 4.058594 L 5.980469 3.203125 L 9.5 3.203125 L 9.5 4.058594 C 9.5 4.984375 9.566406 5.101562 10.226562 5.464844 C 10.410156 5.5625 10.6875 5.839844 10.847656 6.085938 C 11.101562 6.46875 11.15625 6.683594 11.210938 7.460938 C 11.242188 7.964844 11.304688 8.445312 11.347656 8.507812 C 11.507812 8.753906 12.042969 8.667969 12.234375 8.378906 C 12.382812 8.15625 12.40625 7.964844 12.339844 7.367188 C 12.222656 6.097656 11.785156 5.1875 11.039062 4.675781 C 10.675781 4.429688 10.675781 4.421875 10.675781 3.597656 C 10.675781 2.925781 10.71875 2.710938 10.890625 2.476562 C 11.445312 1.730469 11.167969 0.628906 10.3125 0.222656 C 9.90625 0.0195312 9.660156 0 7.730469 0 C 5.882812 0 5.550781 0.03125 5.167969 0.203125 Z M 10.015625 1.472656 C 10.089844 1.996094 9.949219 2.027344 7.75 2.027344 C 6.300781 2.027344 5.660156 1.984375 5.574219 1.898438 C 5.433594 1.761719 5.402344 1.367188 5.519531 1.238281 C 5.5625 1.207031 6.578125 1.183594 7.78125 1.195312 L 9.980469 1.226562 Z M 10.015625 1.472656 "}),Object(W.jsx)("path",{d:"M 17.765625 2.667969 C 17.039062 2.925781 16.410156 3.332031 15.855469 3.90625 C 14.859375 4.921875 14.464844 6.019531 14.550781 7.503906 C 14.617188 8.796875 14.457031 9.222656 13.835938 9.382812 C 13.25 9.535156 12.480469 10.035156 12.128906 10.496094 C 11.582031 11.199219 11.421875 11.828125 11.421875 13.207031 L 11.421875 14.445312 L 10.847656 15.054688 C 9.898438 16.046875 9.394531 17.285156 9.394531 18.628906 C 9.394531 20.167969 9.960938 21.5 11.058594 22.527344 C 14.488281 25.730469 19.964844 23.371094 19.996094 18.683594 C 20.007812 17.21875 19.386719 15.769531 18.320312 14.742188 L 17.9375 14.371094 L 17.9375 13.132812 C 17.9375 11.507812 17.777344 11.039062 16.976562 10.226562 C 16.578125 9.832031 16.21875 9.585938 15.929688 9.492188 C 15.214844 9.277344 15.363281 9.105469 16.324219 9.054688 C 17.476562 8.988281 18.375 8.550781 19.355469 7.570312 C 20.710938 6.214844 21.160156 4.601562 20.648438 2.957031 C 20.488281 2.457031 18.820312 2.285156 17.765625 2.667969 Z M 19.632812 3.621094 C 19.890625 3.78125 19.738281 4.984375 19.378906 5.699219 C 18.855469 6.738281 17.59375 7.738281 16.558594 7.953125 L 16.195312 8.027344 L 16.410156 7.730469 C 16.539062 7.558594 16.804688 7.261719 17.019531 7.066406 C 17.390625 6.726562 17.445312 6.621094 17.402344 6.300781 C 17.378906 6.097656 17.09375 5.871094 16.867188 5.871094 C 16.78125 5.871094 16.453125 6.097656 16.140625 6.363281 C 15.585938 6.855469 15.578125 6.855469 15.652344 6.554688 C 15.757812 6.054688 16.175781 5.199219 16.472656 4.847656 C 17.242188 3.941406 19.035156 3.246094 19.632812 3.621094 Z M 15.460938 10.527344 C 15.980469 10.738281 16.421875 11.167969 16.664062 11.691406 C 16.824219 12.03125 16.867188 12.382812 16.867188 13.539062 L 16.867188 14.957031 L 17.433594 15.480469 C 17.734375 15.757812 18.074219 16.140625 18.179688 16.324219 L 18.375 16.644531 L 17.742188 16.964844 C 16.921875 17.378906 16.003906 18.375 15.683594 19.183594 C 15.375 19.964844 15.351562 21.46875 15.628906 22.195312 C 15.863281 22.824219 15.78125 22.867188 14.519531 22.816406 C 13.664062 22.78125 13.410156 22.730469 12.886719 22.472656 C 11.210938 21.640625 10.226562 19.761719 10.546875 18.019531 C 10.730469 17.058594 11.15625 16.261719 11.871094 15.578125 L 12.492188 14.988281 L 12.492188 13.730469 C 12.492188 12.097656 12.621094 11.617188 13.195312 11.039062 C 13.847656 10.378906 14.667969 10.195312 15.460938 10.527344 Z M 18.832031 17.894531 C 18.949219 18.214844 18.898438 19.28125 18.726562 19.867188 C 18.628906 20.1875 18.417969 20.667969 18.234375 20.957031 C 17.925781 21.449219 17.144531 22.207031 16.953125 22.207031 C 16.761719 22.207031 16.546875 21.4375 16.546875 20.742188 C 16.546875 19.558594 17.199219 18.492188 18.234375 17.945312 C 18.726562 17.679688 18.746094 17.679688 18.832031 17.894531 Z M 18.832031 17.894531 "}),Object(W.jsx)("path",{d:"M 5.828125 7.859375 C 5.617188 8.058594 5.617188 8.21875 5.828125 8.519531 C 5.988281 8.742188 6.054688 8.753906 7.738281 8.753906 C 9.46875 8.753906 9.5 8.753906 9.660156 8.5 C 9.832031 8.253906 9.78125 7.921875 9.566406 7.773438 C 9.5 7.730469 8.667969 7.6875 7.71875 7.6875 C 6.289062 7.6875 5.96875 7.71875 5.828125 7.859375 Z M 5.828125 7.859375 "}),Object(W.jsx)("path",{style:{fillOpacity:1},d:"M 6.085938 11.820312 C 5.882812 11.894531 5.660156 12.171875 5.660156 12.351562 C 5.660156 12.425781 5.753906 12.585938 5.871094 12.703125 C 6.0625 12.898438 6.222656 12.917969 7.738281 12.917969 C 9.257812 12.917969 9.417969 12.898438 9.609375 12.703125 C 9.726562 12.585938 9.820312 12.417969 9.820312 12.332031 C 9.820312 12.246094 9.726562 12.074219 9.609375 11.957031 C 9.417969 11.765625 9.257812 11.742188 7.824219 11.753906 C 6.949219 11.753906 6.171875 11.785156 6.085938 11.820312 Z M 6.085938 11.820312 "})]}))}var lt=n(173),jt=r.a.lazy((function(){return Promise.all([n.e(4),n.e(5)]).then(n.bind(null,187)).then(function(){var t=Object(l.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())})),bt=Object(g.a)((function(t){return{appBar:{background:"#e9dd71",color:"unset",height:"fit-content",padding:"4px 0px",justifyContent:"center"},mainHeading:{flex:1,padding:"8px",paddingLeft:"2px"},mainIcon:Object(s.a)({},t.typography.h3),updateButton:Object(o.a)({},t.breakpoints.down("sm"),{display:"none"}),weekScheduleHeading:{marginTop:"40px"},wrapperDiv:{margin:"8px"}}})),pt=Object(a.memo)((function(t){var e=t.pending,n=t.refreshLocal,c=j.d[((new Date).getDay()-1+7)%7],o=bt(),u=Object(a.useState)((function(){return{open:!1,type:"",message:""}})),d=Object(i.a)(u,2),l=d[0],b=d[1];return Object(W.jsxs)(r.a.Fragment,{children:[Object(W.jsx)(ct.a,{position:"sticky",className:o.appBar,children:Object(W.jsxs)(it.a,{children:[Object(W.jsx)(dt,{fontSize:"large",className:o.mainIcon}),Object(W.jsx)(O.a,{className:o.mainHeading,variant:"h4",children:"Diet Plan !!"}),Object(W.jsx)(ot.a,{interactive:!0,arrow:!0,title:!1===e?"No Changes to Save":"Click to save data to get it next time you visit",children:Object(W.jsx)("span",{children:Object(W.jsx)(st.a,{onClick:function(){n()?b({open:!0,type:"success",message:"Update Succesfull !!"}):b({open:!0,type:"error",message:"Update Falied ! Try Later"})},disabled:!1===e,color:"primary",variant:"contained",size:"large",startIcon:Object(W.jsx)(lt.a,{}),children:Object(W.jsx)(O.a,{className:o.updateButton,variant:"button",children:!1===e?"Nothing to Save":"Save Changes"})})})})]})}),Object(W.jsxs)("div",{className:o.wrapperDiv,children:[Object(W.jsx)(rt,{type:l.type,message:l.message,open:l.open,onClose:function(){return b((function(t){return Object(s.a)(Object(s.a)({},t),{},{open:!1})}))}}),Object(W.jsx)($,{day:c}),Object(W.jsx)(O.a,{className:o.weekScheduleHeading,align:"center",gutterBottom:!0,variant:"h3",children:"Weekly Schedule"}),j.d.map((function(t){return Object(W.jsx)(a.Suspense,{fallback:Object(W.jsx)(P.a,{variant:"rect",width:"100%"}),children:Object(W.jsx)(jt,{day:t},t)},t)}))]})]})})),ft=Object(a.memo)((function(){var t=Object(a.useContext)(_.a);return t&&t.pendingUpdates&&t.refreshlocalStorage?Object(W.jsx)(pt,{refreshLocal:t.refreshlocalStorage,pending:t.pendingUpdates.size>0}):Object(W.jsx)(W.Fragment,{})})),ht=(n(132),n(35)),Ot=n(34),xt=n(21);function mt(t){for(var e={},n=0;n<j.d.length;n++){e[j.d[n]]={};for(var a=0;a<j.b.length;a++)e[j.d[n]][j.b[a]]=t[n][a]}var r=t;this.schedule=e,this.updateMeal=function(t,e,n){if(t&&e&&n&&(n.filter((function(t){return t&&""===t})),t in this.schedule&&e in this.schedule[t])){var a,c=new Map,i=Object(Ot.a)(n);try{for(i.s();!(a=i.n()).done;){var u=a.value;""===u||c.has(u.toLowerCase())||c.set(u.toLowerCase(),u)}}catch(d){i.e(d)}finally{i.f()}return n=Array.from(c.values()),this.schedule[t]=Object(s.a)(Object(s.a)({},this.schedule[t]),{},Object(o.a)({},e,n)),r[j.d.indexOf(t)][j.b.indexOf(e)]=n,1}return 0},this.updateBulkData=function(t){try{var e,n=Object(Ot.a)(j.d);try{for(n.s();!(e=n.n()).done;){var a,c=e.value,i=Object(Ot.a)(j.b);try{for(i.s();!(a=i.n()).done;){var o=a.value;if(c in t&&o in t[c]&&t[c][o]){var s=Object(ht.a)(t[c][o]).map((function(t){return t.trim().split(" ").filter((function(t){return t.trim().length>=1})).map((function(t){return t[0].toUpperCase()+t.substring(1)})).join(" ")}));this.schedule[c][o]=s,r[j.d.indexOf(c)][j.b.indexOf(o)]=s}}}catch(u){i.e(u)}finally{i.f()}}}catch(u){n.e(u)}finally{n.f()}return 1}catch(d){return 0}},this.getCompressedData=function(){return r}}var gt,yt,vt=[],Ct=Object(Ot.a)(j.d);try{for(Ct.s();!(gt=Ct.n()).done;){gt.value;vt.push([[],[],[],[]])}}catch(Zt){Ct.e(Zt)}finally{Ct.f()}try{null===localStorage.getItem(j.a)&&localStorage.setItem(j.a,JSON.stringify(vt))}catch(Jt){console.log("unable to initialize local Storage",Jt)}try{yt=new mt(JSON.parse(localStorage.getItem(j.a)))}catch(Jt){yt=new mt(vt)}var wt,kt=Object(Ot.a)(j.d);try{for(kt.s();!(wt=kt.n()).done;){var St,Dt=wt.value,Nt=Object(Ot.a)(j.b);try{for(Nt.s();!(St=Nt.n()).done;){var It=St.value;Object(xt.e)(Dt,It,yt.schedule[Dt][It].length)}}catch(Zt){Nt.e(Zt)}finally{Nt.f()}}}catch(Zt){kt.e(Zt)}finally{kt.f()}var Lt=function(){return Object(s.a)({},yt.schedule)};var Bt=function(){var t=Object(a.useState)((function(){return Lt()})),e=Object(i.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)((function(){return Lt()})),u=Object(i.a)(c,2),d=u[0],l=u[1],b=Object(a.useState)(new Map),p=Object(i.a)(b,2),f=p[0],h=p[1],O=Object(a.useRef)((function(t,e,n){-1!==j.d.indexOf(t)&&-1!==j.b.indexOf(e)&&(JSON.stringify(n)!==JSON.stringify(d[t][e])?h((function(n){var a=new Map(n);return a.set(t,a.has(t)?[].concat(Object(ht.a)(a.get(t)),[[e,1]]):[[e,1]]),a})):h((function(n){var a=new Map(n);return a.has(t)&&(a.get(t).size>1?a.get(t).delete(e):a.delete(t)),a})))})),x=Object(a.useRef)((function(t,e,n){-1!==j.d.indexOf(t)&&-1!==j.b.indexOf(e)&&(O.current(t,e,n),r((function(a){return Object(s.a)(Object(s.a)({},a),{},Object(o.a)({},t,Object(s.a)(Object(s.a)({},a[t]),{},Object(o.a)({},e,Object(ht.a)(n)))))})))})),m=Object(a.useRef)((function(t,e,n,a){-1!==j.d.indexOf(t)&&-1!==j.b.indexOf(e)&&r((function(r){var c=Object(ht.a)(r[t][e]);return n<c.length?(c[n]=a,O.current(t,e,c),Object(s.a)(Object(s.a)({},r),{},Object(o.a)({},t,Object(s.a)(Object(s.a)({},r[t]),{},Object(o.a)({},e,c))))):r}))}));return{data:n,pendingUpdates:f,setDataUnConstraint:r,updateData:x.current,updateDataOneRow:m.current,refreshlocalStorage:function(){return!!function(t){if(yt.updateBulkData(t))try{return localStorage.setItem(j.a,JSON.stringify(yt.getCompressedData())),1}catch(Jt){console.log("Unable to update Bulk data Local Storage",Jt)}return 0}(n)&&(h(new Map),l((function(){return Lt()})),!0)}}},zt=n(89),Mt=n(90),Rt=n(93),Ht=n(92),Ft=function(t){Object(Rt.a)(n,t);var e=Object(Ht.a)(n);function n(t){var a;return Object(zt.a)(this,n),(a=e.call(this,t)).state={hasError:!1},a}return Object(Mt.a)(n,[{key:"componentDidCatch",value:function(t,e){console.log(t,e)}},{key:"render",value:function(){return this.state.hasError?Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("h1",{children:"Something went wrong."}),Object(W.jsx)("h3",{children:"Please Try Again Later"})]}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(t){return{hasError:!0}}}]),n}(r.a.Component),Et=n(91),Tt=n(178),Ut=n(174),Pt=Object(Et.a)({});function Wt(){var t=Bt();return Object(W.jsx)(r.a.StrictMode,{children:Object(W.jsx)(Ft,{children:Object(W.jsx)(Ut.a,{theme:Pt,children:Object(W.jsx)(_.a.Provider,{value:t,children:Object(W.jsx)(ft,{})})})})})}Pt=Object(Tt.a)(Pt),Object(c.render)(Object(W.jsx)(Wt,{}),document.getElementById("root"))},21:function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return s}));var a={};function r(t,e,n){a[t]||(a[t]={}),a[t][e]||(a[t][e]=[]);for(var r=0;r<n;r++)a[t][e][r]=r}function c(t,e){a[t]||(a[t]={}),a[t][e]||(a[t][e]=[]),a[t][e].push(0===a[t][e].length?1:a[t][e][a[t][e].length-1]+1)}function i(t,e,n){a[t]||(a[t]={}),a[t][e]||(a[t][e]=[]),a[t][e]=a[t][e].slice(0,n).concat(a[t][e].slice(n+1))}function o(t,e,n){return a[t]||(a[t]={}),a[t][e]||(a[t][e]=[]),a[t][e][n]}function s(t,e,n){return a[t]||(a[t]={}),a[t][e]||(a[t][e]=[]),a[t][e].indexOf(n)}},23:function(t,e,n){"use strict";var a=n(0),r=Object(a.createContext)(null);e.a=r},45:function(t,e,n){"use strict";n.d(e,"a",(function(){return O})),n.d(e,"c",(function(){return x})),n.d(e,"d",(function(){return g})),n.d(e,"b",(function(){return m}));var a=n(8),r=n(17),c=n.n(r),i=n(25),o=n(95),s=n(0),u=n.n(s),d=n(2);function l(t){return u.a.lazy((function(){return n.e(6).then(n.bind(null,136)).then(function(){var e=Object(i.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{default:n[t]});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))}var j=l("BreakfastIcon"),b=l("LunchIcon"),p=l("SnacksIcon"),f=l("DinnerIcon"),h=function(t){return function(e){var n=Object.assign({},e);return Object(d.jsx)(s.Suspense,{fallback:Object(d.jsx)(o.a,{variant:"circle",width:"40px",height:"40px"}),children:Object(d.jsx)(t,Object(a.a)({},n))})}},O=h(j),x=h(b),m=h(f),g=h(p)},6:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return i}));var a=["8am to 10am","1pm to 2pm","4pm to 5pm","8pm to 10pm"],r=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],c=["breakfast","lunch","snacks","dinner"],i="dietData"},69:function(t,e,n){"use strict";var a=n(8),r=n(94),c=n(134),i=n(95),o=n(0),s=n.n(o),u=n(2),d=Object(c.a)({chipWrapper:{display:"inline-block",width:"fit-content"},skeleton:{marginRight:"5px"}}),l=s.a.forwardRef((function(t,e){var n=t.children,c=t.className,s=Object(r.a)(t,["children","className"]),l=d();return Object(u.jsx)("div",Object(a.a)(Object(a.a)({ref:e},s),{},{className:"".concat(l.chipWrapper," ").concat(c||""),children:Object(u.jsx)(o.Suspense,{fallback:Object(u.jsx)(i.a,{variant:"circle",width:90,height:32,className:l.skeleton}),children:n})}))}));e.a=l},70:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return d}));var a=n(11),r=n(17),c=n.n(r),i=n(25),o=n(5),s=n(0),u=n.n(s),d=u.a.lazy((function(){return n.e(0).then(n.bind(null,102)).then(function(){var t=Object(i.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())})),l=u.a.lazy((function(){return n.e(0).then(n.bind(null,102)).then(function(){var t=Object(i.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(o.a)((function(t){return{root:Object(a.a)({borderColor:"green",color:"green",marginLeft:"5px"},t.breakpoints.down("sm"),{display:"none"})}}))(e.default),t.abrupt("return",{default:n});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}))},81:function(t,e,n){"use strict";var a=n(35),r=n(11),c=n(163),i=n(0),o=n(134),s=n(176),u=n(162),d=n(155),l=n(164),j=n.p+"static/media/empty1.f5c7794e.svg",b=n(23),p=n(61),f=n(5),h=n(7),O=n.n(h),x=(n(6),n(21)),m=n(2);function g(t){return t.replace("\n"," ").trim().split(" ").filter((function(t){return t.trim().length>=1})).map((function(t){return t[0].toUpperCase()+t.substring(1)})).join(" ")}var y=Object(i.memo)(Object(f.a)((function(t){return{root:{"&:empty::after":{fontStyle:"italic",fontFamily:"Courier New,Courier,monospace",content:'"Click to Edit"'}}}}))((function(t){var e=t.classes,n=t.data,a=t.updateItem,r=t.day,c=t.meal,i=t.listInd;return Object(m.jsx)(p.a,{onKeyPress:function(t){"Enter"===t.code&&(t.preventDefault(),t.target.blur(),a(r,c,i,g(t.target.innerText)))},contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(t){t.target.innerText!==n&&a(r,c,i,g(t.target.innerText))},variant:"body1",className:e.root,children:n})})));y.propTypes={data:O.a.string.isRequired,updateItem:function(t,e,n){var a=t[e];if(!a||!a.prototype||"function"!==typeof a.prototype.constructor||4!==a.prototype.constructor.length)return new Error(e+" at ".concat(n," must be a function with 4 args"))}};var v=function(t){var e=t.day,n=t.meal,a=t.listIndHash,r=Object(i.useContext)(b.a),c=Object(x.d)(e,n,a);return r&&r&&r.updateData&&r.data&&r.data[e]&&r.data[e][n]&&r.data[e][n]&&c>=0&&c<r.data[e][n].length?Object(m.jsx)(y,{day:e,meal:n,listInd:c,data:r.data[e][n][c],updateItem:r.updateDataOneRow}):Object(m.jsx)(m.Fragment,{})},C=n(60),w=n.n(C),k=n(157),S=n(158),D=n(159),N=n(160),I=n(8),L=n(156),B=Object(i.memo)((function(t){var e=t.day,n=t.meal,a=t.listIndHash,c=t.setData,i=Object(x.d)(e,n,a);return Object(m.jsx)(d.a,{onClick:function(t){var a;a=i,c((function(t){if(t&&t[e]&&t[e][n]&&t[e][n].length&&a>=0&&t[e][n].length>a){var c=t[e][n];return Object(x.b)(e,n,a),Object(I.a)(Object(I.a)({},t),{},Object(r.a)({},e,Object(I.a)(Object(I.a)({},t[e]),{},Object(r.a)({},n,c.slice(0,a).concat(c.slice(a+1))))))}return t}))},children:Object(m.jsx)(L.a,{fontSize:"small"})})})),z=function(t){var e=t.listIndHash,n=t.day,a=t.meal,r=Object(i.useContext)(b.a);return r&&r.setDataUnConstraint?Object(m.jsx)(B,{listIndHash:e,day:n,meal:a,setData:r.setDataUnConstraint}):Object(m.jsx)(m.Fragment,{})},M=Object(o.a)({root:{justifyContent:"flex-end"}}),R=Object(i.memo)((function(t){var e=t.listIndHash,n=t.day,a=t.meal,r=t.timeout,c=t.className,i=M();return Object(m.jsx)(k.a,{in:!0,timeout:r,children:Object(m.jsxs)(S.a,{className:c,children:[Object(m.jsx)(D.a,{children:Object(m.jsx)(w.a,{})}),Object(m.jsx)(N.a,{children:Object(m.jsx)(v,{listIndHash:e,day:n,meal:a})}),Object(m.jsx)(D.a,{classes:i,children:Object(m.jsx)(s.a,{arrow:!0,title:"Click to delete the food item",children:Object(m.jsx)("div",{children:Object(m.jsx)(z,{day:n,meal:a,listIndHash:e})})})})]})})}),(function(t,e){return t.listIndHash===e.listIndHash&&t.day===e.day&&t.meal===e.meal})),H=Object(o.a)((function(t){return{list:{height:"min(230px , 70%)",overflowY:"auto",width:"100% ","&:empty":{height:"65%",margin:"0px auto",display:"block",backgroundSize:"79px",backgroundImage:"url(".concat(j,")"),backgroundRepeat:"no-repeat",backgroundPositionX:"40px",backgroundPositionY:"20px"},"&:empty::after":{content:'"No items"',fontStyle:"italic",position:"absolute",fontSize:"24px",textAlign:"center",top:"calc(101px + 11%)",left:"33px"}},listItem:{padding:"0px",paddingBottom:"8px",wordBreak:"break-all"},addButton:Object(r.a)({marginBottom:"0px",padding:"5px",marginRight:"10px",float:"right",height:"fit-content"},t.breakpoints.down("sm"),{marginRight:"2px"})}})),F=Object(o.a)((function(t){return{listItem:{padding:"0px",wordBreak:"break-all",whiteSpace:"normal"},list:{height:"52%",overflowY:"auto",width:"100%",paddingTop:"2px","&:empty":{height:"180px",margin:"0px auto",display:"block",backgroundSize:"79px",backgroundImage:"url(".concat(j,")"),backgroundRepeat:"no-repeat",backgroundPositionX:"40px",backgroundPositionY:"20px"},"&:empty::after":{content:'"No items"',fontStyle:"italic",position:"absolute",fontSize:"24px",textAlign:"center",bottom:"28px",left:"30px"}},addButton:{marginBottom:"0px",float:"right",padding:"6px",height:"fit-content"}}})),E=Object(i.memo)((function(t){var e=t.type,n=void 0===e?"today":e,r=t.data,o=void 0===r?[]:r,j=t.day,b=t.meal,p=t.updateData,f=H(),h=F(),O="today"===n?f:h,g=Object(i.useRef)(!1);function y(t){g.current=!0,Object(x.a)(j,b),p(j,b,[].concat(Object(a.a)(o),[""]))}return Object(i.useEffect)((function(){g.current=!1})),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(s.a,{arrow:!0,title:"Click to add new food item ",children:"today"===n?Object(m.jsx)(u.a,{className:O.addButton,size:"large",onClick:y,startIcon:Object(m.jsx)(c.a,{}),children:"Item"}):Object(m.jsx)(d.a,{className:O.addButton,color:"primary",size:"medium",onClick:y,children:Object(m.jsx)(c.a,{})})}),Object(m.jsx)(l.a,{className:O.list,children:o.map((function(t,e){return Object(m.jsx)(R,{listIndHash:Object(x.c)(j,b,e),className:O.listItem,timeout:g.current?500:1200,row:t,meal:b,day:j},Object(x.c)(j,b,e))}))})]})})),T=Object(i.memo)((function(t){var e=t.type,n=void 0===e?"today":e,a=t.day,r=void 0===a?"monday":a,c=t.meal,o=void 0===c?"lunch":c,s=Object(i.useContext)(b.a);return s&&s.updateData&&s.data&&s.data[r]&&s.data[r][o]?Object(m.jsx)(E,{updateData:s.updateData,type:n,day:r,meal:o,data:s.data[r][o]}):Object(m.jsx)(m.Fragment,{})}));e.a=T}},[[133,2,3]]]);
//# sourceMappingURL=main.2805c30a.chunk.js.map