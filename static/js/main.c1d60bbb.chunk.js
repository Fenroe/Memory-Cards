(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{10:function(e,c,t){},11:function(e,c,t){"use strict";t.r(c);var n=t(1),a=t.n(n),s=t(4),r=t.n(s),i=t(2),o=t(0),l=function(e){return Object(o.jsxs)("div",{className:"title-screen",children:[Object(o.jsx)("div",{className:"title-heading-container",children:Object(o.jsx)("h1",{className:"title-heading",children:"52 Card Pickup"})}),Object(o.jsxs)("div",{className:"title-button-container",children:[Object(o.jsx)("button",{className:"app-button",onClick:e.game,children:"Start"}),Object(o.jsx)("button",{className:"app-button",onClick:e.tutorial,children:"How To Play"})]})]})},j=function(e){return Object(o.jsxs)("div",{className:"tutorial-screen",children:[Object(o.jsx)("div",{className:"tutorial-heading-container",children:Object(o.jsx)("h2",{className:"tutorial-heading",children:"How To Play"})}),Object(o.jsxs)("div",{className:"tutorial-text-container",children:[Object(o.jsx)("p",{className:"tutorial-text",children:"Click on a card to pick it up."}),Object(o.jsx)("p",{className:"tutorial-text",children:"If you click on the same card twice you lose."}),Object(o.jsx)("p",{className:"tutorial-text",children:"Pick up all 52 cards to win the game!"})]}),Object(o.jsx)("div",{className:"tutorial-button-container",children:Object(o.jsx)("button",{className:"app-button",onClick:e.back,children:"Back"})})]})},u=function(e){return Object(o.jsxs)("div",{className:"game-scoreboard",children:[Object(o.jsx)("div",{children:Object(o.jsxs)("h2",{children:["Score: ",e.score]})}),Object(o.jsx)("div",{children:Object(o.jsxs)("h2",{children:["Highest Score: ",e.highScore]})})]})},d=function(e){return Object(o.jsx)("div",{className:"game-card",children:Object(o.jsx)("img",{src:e.src,alt:"card",onClick:function(){return e.chooseCard(e.index)}})})},b=function(e){return Object(o.jsx)("div",{className:"game-field",children:e.currentCards.map((function(c){return Object(o.jsx)(d,{chooseCard:e.chooseCard,index:c,src:"".concat("/Memory-Cards","/assets/images/card_").concat(c+1,".png")},c)}))})},h=function(e){var c=Object(n.useState)(0),t=Object(i.a)(c,2),a=t[0],s=t[1],r=Object(n.useState)([]),l=Object(i.a)(r,2),j=l[0],d=l[1],h=Object(n.useState)([]),O=Object(i.a)(h,2),m=O[0],x=O[1],f=function e(){for(var c=[],t=0;t<12;t+=1){var n=Math.floor(52*Math.random());c.includes(n)?t-=1:c.push(n)}g(c)&&v(c)?d(c):e()},g=function(e){var c=!1;return e.forEach((function(e){m.includes(e)||(c=!0)})),c},v=function(e){var c=!1;return 0===m.length&&(c=!0),e.forEach((function(e){m.includes(e)&&(c=!0)})),c};return Object(n.useEffect)((function(){a<52?f():e.declareWinner()}),[a]),Object(o.jsxs)("div",{className:"game-screen",children:[Object(o.jsx)(u,{score:a,highScore:e.highScore}),Object(o.jsx)(b,{currentCards:j,fillCurrentCards:f,chooseCard:function(c){m.includes(c)?e.endGame():(x(m.concat([c])),s(a+1),a+1>e.highScore&&e.setHighScore(a+1))}})]})},O=function(e){return Object(o.jsxs)("div",{className:"game-over-screen",children:[Object(o.jsx)("h2",{className:"game-over-heading",children:"Game Over"}),Object(o.jsxs)("h2",{className:"game-over-text",children:["Your best score is ",e.highScore]}),Object(o.jsx)("div",{className:"game-over-button-container",children:Object(o.jsx)("button",{className:"app-button",onClick:e.restart,children:"Title Screen"})})]})},m=function(){};var x=function(){var e=Object(n.useState)(!1),c=Object(i.a)(e,2),t=c[0],a=c[1],s=Object(n.useState)(!1),r=Object(i.a)(s,2),u=r[0],d=r[1],b=Object(n.useState)(0),x=Object(i.a)(b,2),f=x[0],g=x[1],v=Object(n.useState)(!1),p=Object(i.a)(v,2),N=p[0],S=p[1],C=Object(n.useState)(!1),k=Object(i.a)(C,2),y=k[0],w=k[1];return Object(o.jsxs)("div",{className:"app-screens",children:[t||u||N||y?null:Object(o.jsx)(l,{game:function(){a(!0)},tutorial:function(){d(!0)}}),u?Object(o.jsx)(j,{back:function(){d(!1)}}):null,t?Object(o.jsx)(h,{highScore:f,setHighScore:g,endGame:function(){a(!1),S(!0)},declareWinner:function(){a(!1),w(!0)}}):null,N?Object(o.jsx)(O,{highScore:f,restart:function(){S(!1)}}):null,y?Object(o.jsx)(m,{}):null]})};t(10);r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.c1d60bbb.chunk.js.map