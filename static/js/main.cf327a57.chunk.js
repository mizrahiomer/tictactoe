(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{25:function(e,t,a){e.exports=a(68)},47:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),c=a.n(l),o=a(3),s=a.n(o),i=a(2),u=a(5),m=a.n(u),f=a(21),p=a.n(f),d=a(22),v=a.n(d),h=a(23),w=a.n(h),E=a(8),b=a.n(E),g=(a(47),function(e){var t=e.onClick,a=e.value,l=e.hoverValue,c=e.winningLane,o=e.index,s=Object(n.useState)(!1),u=Object(i.a)(s,2),m=u[0],f=u[1],p=c&&c.includes(o)?" highlight":"",d=null!==a?"X"===a?"x":"o":"",v=m&&null==a?"X"===l?"x-placeholder":"o-placeholder":"";return r.a.createElement("div",{className:v+d+p+" square",onClick:t,onMouseEnter:function(){f(!0)},onMouseLeave:function(){f(!1)}},a,!m||a||c?null:l)}),O=a(24),j=a.n(O).a.create({baseURL:"https://tictactoe-21dd9.firebaseio.com"}),y=(a(65),function(){var e=Object(n.useState)(Array(9).fill(null)),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!0),o=Object(i.a)(c,2),u=o[0],f=o[1],d=Object(n.useState)(!1),h=Object(i.a)(d,2),E=h[0],O=h[1],y=Object(n.useState)(null),N=Object(i.a)(y,2),x=N[0],k=N[1],X=Object(n.useState)(null),C=Object(i.a)(X,2),S=C[0],L=C[1],V=Object(n.useState)([0,0,0]),B=Object(i.a)(V,2),D=B[0],F=B[1],A=u?"X":"O";Object(n.useEffect)((function(){M()}));var I=function(e){for(var t=0;t<e.length;t++)if(null==e[t])return!1;return!0},J=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(i.a)(t[a],3),r=n[0],l=n[1],c=n[2];if(e[r]&&e[r]===e[l]&&e[r]===e[c])return{winner:e[r],winningLane:[r,l,c]}}return null}(a),M=function(){var e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.awrap(j.get(".json"));case 3:e=t.sent,F({X:e.data.X,O:e.data.O,draw:e.data.draw}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),null,null,[[0,7]])},P=function(e){var t;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return"draw"===e&&O(!0),a.prev=1,a.next=4,s.a.awrap(j.get("/".concat(e,".json")));case 4:return t=a.sent,a.next=7,s.a.awrap(j.put("/".concat(e,".json"),t.data+1));case 7:return a.abrupt("return",a.sent);case 10:a.prev=10,a.t0=a.catch(1),console.log(a.t0);case 13:case"end":return a.stop()}}),null,null,[[1,10]])},R={angle:60,spread:45,startVelocity:40,elementCount:300,dragFriction:.1,duration:2e3,width:"1.5em",height:"1.5em",colors:["#f0cd74","#f3f3e7",null!==J?"X"===J.winner?"#e6493e":"#26b472":""]},W={angle:120,spread:45,startVelocity:40,elementCount:300,dragFriction:.1,duration:2e3,width:"1.5em",height:"1.5em",colors:["#f0cd74","#f3f3e7",null!==J?"X"===J.winner?"#e6493e":"#26b472":""]};return x?r.a.createElement(n.Fragment,null,r.a.createElement(m.a,{top:!0},r.a.createElement(m.a,{left:!0},r.a.createElement("div",{className:"title"},r.a.createElement("span",{className:"x-placeholder"},"X"),":",D.X,"|",r.a.createElement("span",{className:"o-placeholder"},"O"),": ",D.O,"|",r.a.createElement("span",null,"Draw: ",D.draw),r.a.createElement("i",{onClick:function(){return function(){var e,t,a;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=j.put("/X.json",0),t=j.put("/O.json",0),a=j.put("/draw.json",0),n.next=6,s.a.awrap(Promise.all([e,t,a]));case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),null,null,[[0,8]])}()},className:"fa fa-trash deleteBtn","data-tip":"Delete results history"}),r.a.createElement(w.a,{place:"right"}))),r.a.createElement("div",{className:"board"},a.map((function(e,t){return r.a.createElement(g,{key:t,index:t,winningLane:S,value:a[t],hoverValue:u?"X":"O",onClick:function(){!function(e){if(null===a[e]&&null===J){var t=a.slice();t[e]=A,l(t),f(!u)}}(t)}})})),r.a.createElement("div",{className:"right-confetti-wrapper"},r.a.createElement(b.a,{active:null!==J,config:R})),r.a.createElement("div",{className:"left-confetti-wrapper"},r.a.createElement(b.a,{active:null!==J,config:W})))),r.a.createElement(m.a,{right:!0},r.a.createElement("div",{className:"options"},r.a.createElement("div",{className:"game-info"},J?(S||(L(J.winningLane),P(J.winner)),r.a.createElement(p.a,null,r.a.createElement("p",null,r.a.createElement("i",{className:"fas fa-trophy"})," The winner is: ",J.winner))):I(a)?(E||P("draw"),r.a.createElement(v.a,null,r.a.createElement("p",null," Its a Draw!"))):r.a.createElement("p",null,"Next player: ",A)),function(e){for(var t=0;t<e.length;t++)if(null!==e[t])return!1;return!0}(a)?null:r.a.createElement("button",{onClick:function(){return l(Array(9).fill(null)),f(!0),L(null),void O(!1)},className:"btn"},I(a)||J?"Play again":"Reset game")))):r.a.createElement(m.a,{bottom:!0},r.a.createElement("div",{className:"select-symbol"},r.a.createElement("p",{className:"select-symbol-title"},"Choose your player"),r.a.createElement("p",{className:"symbol x",onClick:function(){k("X"),f(!0)}},"X"),r.a.createElement("p",{className:"symbol o",onClick:function(){k("O"),f(!1)}},"O")))});a(66),a(67);var N=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.cf327a57.chunk.js.map