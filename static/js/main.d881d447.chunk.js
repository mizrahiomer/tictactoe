(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{108:function(e,n,t){e.exports=t(252)},128:function(e,n,t){},146:function(e,n,t){},250:function(e,n,t){},252:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(80),l=t.n(c),o=t(7),u=t.n(o),s=t(4),i=t(19),m=t.n(i),f=t(81),p=t.n(f),v=t(82),d=t.n(v),h=t(45),w=t.n(h),b=(t(128),function(e){var n=e.onClick,t=e.value,c=e.hoverValue,l=e.winningLane,o=e.index,u=Object(a.useState)(!1),i=Object(s.a)(u,2),m=i[0],f=i[1],p=l&&l.includes(o)?" highlight":"",v=null!==t?"X"===t?"x":"o":"",d=m&&null==t?"X"===c?"x-placeholder":"o-placeholder":"";return r.a.createElement("div",{className:d+v+p+" square",onClick:n,onMouseEnter:function(){f(!0)},onMouseLeave:function(){f(!1)}},t,!m||t||l?null:c)}),E=t(83),O=t.n(E).a.create({baseURL:"https://tictactoe-21dd9.firebaseio.com"}),g=(t(146),t(255)),j=function(){var e=Object(a.useState)(Array(9).fill(null)),n=Object(s.a)(e,2),t=n[0],c=n[1],l=Object(a.useState)(!0),o=Object(s.a)(l,2),i=o[0],f=o[1],v=Object(a.useState)(!1),h=Object(s.a)(v,2),E=h[0],j=h[1],y=Object(a.useState)(null),x=Object(s.a)(y,2),k=x[0],N=x[1],X=Object(a.useState)(null),C=Object(s.a)(X,2),S=C[0],L=C[1],D=Object(a.useState)([0,0,0]),A=Object(s.a)(D,2),B=A[0],I=A[1],J=i?"X":"O";Object(a.useEffect)((function(){R()}));var M=function(e){for(var n=0;n<e.length;n++)if(null==e[n])return!1;return!0},P=function(e){for(var n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<n.length;t++){var a=Object(s.a)(n[t],3),r=a[0],c=a[1],l=a[2];if(e[r]&&e[r]===e[c]&&e[r]===e[l])return{winner:e[r],winningLane:[r,c,l]}}return null}(t),R=function(){var e;return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.a.awrap(O.get(".json"));case 3:e=n.sent,I({X:e.data.X,O:e.data.O,draw:e.data.draw}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),null,null,[[0,7]])},T=function(e){var n;return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return"draw"===e&&j(!0),t.prev=1,t.next=4,u.a.awrap(O.get("/".concat(e,".json")));case 4:return n=t.sent,t.next=7,u.a.awrap(O.put("/".concat(e,".json"),n.data+1));case 7:return t.abrupt("return",t.sent);case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0);case 13:case"end":return t.stop()}}),null,null,[[1,10]])};return k?r.a.createElement("div",null,r.a.createElement(m.a,{top:!0},r.a.createElement(m.a,{left:!0},r.a.createElement("div",{className:"title"},"X: ",B.X,"| O: ",B.O,"| Draw: ",B.draw," ",r.a.createElement(g.a,{onClick:function(){return function(){var e,n,t;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e=O.put("/X.json",0),n=O.put("/O.json",0),t=O.put("/draw.json",0),a.next=6,u.a.awrap(Promise.all([e,n,t]));case 6:a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),null,null,[[0,8]])}()},className:"trash","data-tip":"Delete results history"}),r.a.createElement(w.a,{place:"right",type:"light",afterShow:function(){setTimeout(w.a.hide,8e3)}}))),r.a.createElement("div",{className:"board"},t.map((function(e,n){return r.a.createElement(b,{key:n,index:n,winningLane:S,value:t[n],hoverValue:i?"X":"O",onClick:function(){!function(e){if(null===t[e]&&null===P){var n=t.slice();n[e]=J,c(n),f(!i)}}(n)}})})))),r.a.createElement(m.a,{right:!0},r.a.createElement("div",{className:"options"},r.a.createElement("div",{className:"game-info"},P?(S||(L(P.winningLane),T(P.winner)),r.a.createElement(p.a,null,r.a.createElement("p",null,r.a.createElement(g.a,{className:"winner yellow"})," The winner is ",P.winner))):M(t)?(E||T("draw"),r.a.createElement(d.a,null,r.a.createElement("p",null," Its a Draw!"))):"Next player: "+J),function(e){for(var n=0;n<e.length;n++)if(null!==e[n])return!1;return!0}(t)?null:r.a.createElement("button",{onClick:function(){return c(Array(9).fill(null)),f(!0),L(null),j(!1),void((M(t)||P)&&N(null))},className:"btn"},M(t)||P?"Play again":"Reset game")))):r.a.createElement(m.a,{bottom:!0},r.a.createElement("div",{className:"select-symbol"},r.a.createElement("p",null,"Choose your player"),r.a.createElement("p",{className:"symbol x",onClick:function(){N("X"),f(!0)}},"X"),r.a.createElement("p",{className:"symbol o",onClick:function(){N("O"),f(!1)}},"O")))};t(250),t(251);var y=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[108,1,2]]]);
//# sourceMappingURL=main.d881d447.chunk.js.map