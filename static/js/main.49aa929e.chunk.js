(this["webpackJsonpcode-editor"]=this["webpackJsonpcode-editor"]||[]).push([[0],[,,,,function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));e(1),e(21),e(22),e(23),e(24),e(25);var a=e(9),r=(e(27),e(0));function o(n){var t=n.language,e=n.title,o=n.value,i=n.onChange;return Object(r.jsxs)("div",{className:"editor_box",children:[Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("span",{children:e})}),Object(r.jsx)(a.Controlled,{onBeforeChange:function(n,t,e){i(e)},value:o,className:"code_editor",options:{lineWrapping:!0,lint:!0,mode:t,theme:"material",lineNumbers:!0}})]})}},function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var a=e(2),r=e(1);function o(n,t){var e="code-editor-"+n,o=Object(r.useState)((function(){var n=localStorage.getItem(e);return null!=n?JSON.parse(n):"function"===typeof t?t():t})),i=Object(a.a)(o,2),s=i[0],l=i[1];return Object(r.useEffect)((function(){localStorage.setItem(e,JSON.stringify(s))}),[e,s]),[s,l]}},,,function(n,t,e){"use strict";(function(n){var a=e(2),r=e(14),o=e(1),i=e(4),s=(e(29),e(10)),l=e(11),d=e(12),c=e(13),f=e(5),p=e(0);t.a=Object(r.hot)(n)((function(){var n=Object(o.useState)(!0),t=Object(a.a)(n,2),e=t[0],r=t[1],b=Object(o.useState)(!0),h=Object(a.a)(b,2),m=h[0],u=h[1],x=Object(o.useState)(!0),g=Object(a.a)(x,2),v=g[0],j=g[1],k=Object(f.a)("html",'<div class="wrapper">\n  <div class="candles">\n    <div class="light__wave"></div>\n    <div class="candle1">\n      <div class="candle1__body">\n        <div class="candle1__eyes">\n          <span class="candle1__eyes-one"></span>\n          <span class="candle1__eyes-two"></span>\n        </div>\n        <div class="candle1__mouth"></div>\n      </div>\n      <div class="candle1__stick"></div>\n    </div>\n\n    <div class="candle2">\n      <div class="candle2__body">\n        <div class="candle2__eyes">\n          <div class="candle2__eyes-one"></div>\n          <div class="candle2__eyes-two"></div>\n        </div>\n      </div>\n      <div class="candle2__stick"></div>\n    </div>\n    <div class="candle2__fire"></div>\n    <div class="sparkles-one"></div>\n    <div class="sparkles-two"></div>\n    <div class="candle__smoke-one">\n\n    </div>\n    <div class="candle__smoke-two">\n\n    </div>\n\n  </div>\n  <div class="floor">\n  </div>\n\n\n</div>'),_=Object(a.a)(k,2),w=_[0],y=_[1],O=Object(f.a)("css","body {\n  background-color: #FFF;\n  animation: change-background 3s infinite linear;\n}\n\n.wrapper {\n  position: absolute;\n  left: 50%;\n  top: 70%;\n  transform: scale(1.5, 1.5) translate(-50%, -50%);\n}\n\n.floor {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 150px;\n  height: 5px;\n  background: #673C63;\n  transform: translate(-50%, -50%);\n  box-shadow: 0px 2px 5px #111;\n  z-index: 2;\n}\n\n.candles {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 190px;\n  height: 150px;\n  transform: translate(-50%, -100%);\n  z-index: 1;\n}\n\n.candle1 {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 35px;\n  height: 100px;\n  background: #fff;\n  border: 3px solid #673C63;\n  border-bottom: 0px;\n  border-radius: 3px;\n  transform-origin: center right;\n  transform: translate(60%, -25%);\n  box-shadow: -2px 0px 0px #95c6f2 inset;\n  animation: expand-body 3s infinite linear;\n}\n\n.candle1__stick, .candle2__stick {\n  position: absolute;\n  left: 50%;\n  top: 0%;\n  width: 3px;\n  height: 15px;\n  background: #673C63;\n  border-radius: 8px;\n  transform: translate(-50%, -100%);\n}\n\n.candle2__stick {\n  height: 12px;\n  transform-origin: bottom center;\n  animation: stick-animation 3s infinite linear;\n}\n\n.candle1__eyes, .candle2__eyes {\n  position: absolute;\n  left: 50%;\n  top: 0%;\n  width: 35px;\n  height: 30px;\n  transform: translate(-50%, 0%);\n}\n\n.candle1__eyes-one {\n  position: absolute;\n  left: 30%;\n  top: 20%;\n  width: 5px;\n  height: 5px;\n  border-radius: 100%;\n  background: #673C63;\n  transform: translate(-70%, 0%);\n  animation: blink-eyes 3s infinite linear;\n}\n\n.candle1__eyes-two {\n  position: absolute;\n  left: 70%;\n  top: 20%;\n  width: 5px;\n  height: 5px;\n  border-radius: 100%;\n  background: #673C63;\n  transform: translate(-70%, 0%);\n  animation: blink-eyes 3s infinite linear;\n}\n\n.candle1__mouth {\n  position: absolute;\n  left: 40%;\n  top: 20%;\n  width: 0px;\n  height: 0px;\n  border-radius: 20px;\n  background: #673C63;\n  transform: translate(-50%, -50%);\n  animation: uff 3s infinite linear;\n}\n\n.candle__smoke-one {\n  position: absolute;\n  left: 30%;\n  top: 50%;\n  width: 30px;\n  height: 3px;\n  background: grey;\n  transform: translate(-50%, -50%);\n  animation: move-left 3s infinite linear;\n}\n\n.candle__smoke-two {\n  position: absolute;\n  left: 30%;\n  top: 40%;\n  width: 10px;\n  height: 10px;\n  border-radius: 10px;\n  background: grey;\n  transform: translate(-50%, -50%);\n  animation: move-top 3s infinite linear;\n}\n\n.candle2 {\n  position: absolute;\n  left: 20%;\n  top: 65%;\n  width: 42px;\n  height: 60px;\n  background: #fff;\n  border: 3px solid #673C63;\n  border-bottom: 0px;\n  border-radius: 3px;\n  transform: translate(60%, -15%);\n  transform-origin: center right;\n  box-shadow: -2px 0px 0px #95c6f2 inset;\n  animation: shake-left 3s infinite linear;\n}\n\n.candle2__eyes-one {\n  position: absolute;\n  left: 30%;\n  top: 50%;\n  width: 5px;\n  height: 5px;\n  display: inline-block;\n  border: 0px solid #673C63;\n  border-radius: 100%;\n  float: left;\n  background: #673C63;\n  transform: translate(-80%, 0%);\n  animation: changeto-lower 3s infinite linear;\n}\n\n.candle2__eyes-two {\n  position: absolute;\n  left: 70%;\n  top: 50%;\n  width: 5px;\n  height: 5px;\n  display: inline-block;\n  border: 0px solid #673C63;\n  border-radius: 100%;\n  float: left;\n  background: #673C63;\n  transform: translate(-80%, 0%);\n  animation: changeto-greater 3s infinite linear;\n}\n\n.light__wave {\n  position: absolute;\n  top: 35%;\n  left: 35%;\n  width: 75px;\n  height: 75px;\n  border-radius: 100%;\n  z-index: 0;\n  transform: translate(-25%, -50%) scale(2.5, 2.5);\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  animation: expand-light 3s infinite linear;\n}\n\n.candle2__fire {\n  position: absolute;\n  top: 50%;\n  left: 47%;\n  display: block;\n  width: 16px;\n  height: 20px;\n  background-color: red;\n  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;\n  background: #FF9800;\n  transform: translate(-50%, -50%);\n  animation: dance-fire 3s infinite linear;\n}\n\n@keyframes blink-eyes {\n  0%,35% {\n    opacity: 1;\n    transform: translate(-70%, 0%);\n  }\n  36%,39% {\n    opacity: 0;\n    transform: translate(-70%, 0%);\n  }\n  40% {\n    opacity: 1;\n    transform: translate(-70%, 0%);\n  }\n  50%,65% {\n    transform: translate(-140%, 0%);\n  }\n  66% {\n    transform: translate(-70%, 0%);\n  }\n}\n@keyframes expand-body {\n  0%,40% {\n    transform: scale(1, 1) translate(60%, -25%);\n  }\n  45%,55% {\n    transform: scale(1.1, 1.1) translate(60%, -28%);\n  }\n  60% {\n    transform: scale(0.89, 0.89) translate(60%, -25%);\n  }\n  65% {\n    transform: scale(1, 1) translate(60%, -25%);\n  }\n  70% {\n    transform: scale(0.95, 0.95) translate(60%, -25%);\n  }\n  75% {\n    transform: scale(1, 1) translate(60%, -25%);\n  }\n}\n@keyframes uff {\n  0%,40% {\n    width: 0px;\n    height: 0px;\n  }\n  50%,54% {\n    width: 15px;\n    height: 15px;\n    left: 30%;\n  }\n  59% {\n    width: 5px;\n    height: 5px;\n    left: 20%;\n  }\n  62% {\n    width: 2px;\n    height: 2px;\n    left: 20%;\n  }\n  67% {\n    width: 0px;\n    height: 0px;\n    left: 30%;\n  }\n}\n@keyframes change-background {\n  0%,59%,98%,100% {\n    background: #FFF;\n  }\n  61%,97% {\n    background: #000;\n  }\n}\n@keyframes move-left {\n  0%,59%,100% {\n    width: 0px;\n    left: 40%;\n  }\n  60% {\n    width: 30px;\n    left: 30%;\n  }\n  68% {\n    width: 0px;\n    left: 20%;\n  }\n}\n@keyframes move-top {\n  0%,64%,100% {\n    width: 0px;\n    height: 0px;\n    top: 0%;\n  }\n  65% {\n    width: 10px;\n    height: 10px;\n    top: 40%;\n    left: 40%;\n  }\n  80% {\n    width: 0px;\n    height: 0px;\n    top: 20%;\n  }\n}\n@keyframes shake-left {\n  0%,40% {\n    left: 20%;\n    transform: translate(60%, -15%);\n  }\n  50%,54% {\n    left: 20%;\n    transform: translate(60%, -15%);\n  }\n  59% {\n    left: 20%;\n    transform: translate(60%, -15%);\n  }\n  62% {\n    left: 18%;\n    transform: translate(60%, -15%);\n  }\n  65% {\n    left: 21%;\n    transform: translate(60%, -15%);\n  }\n  67% {\n    left: 20%;\n    transform: translate(60%, -15%);\n  }\n  75% {\n    left: 20%;\n    transform: scale(1.15, 0.85) translate(60%, -15%);\n    background: #fff;\n    border-color: #673C63;\n  }\n  91% {\n    left: 20%;\n    transform: scale(1.18, 0.82) translate(60%, -10%);\n    background: #F44336;\n    border-color: #F44336;\n    box-shadow: -2px 0px 0px #F44336 inset;\n  }\n  92% {\n    left: 20%;\n    transform: scale(0.85, 1.15) translate(60%, -15%);\n  }\n  95% {\n    left: 20%;\n    transform: scale(1.05, 0.95) translate(60%, -15%);\n  }\n  97% {\n    left: 20%;\n    transform: scale(1, 1) translate(60%, -15%);\n  }\n}\n@keyframes stick-animation {\n  0%,40% {\n    left: 50%;\n    top: 0%;\n    transform: translate(-50%, -100%);\n  }\n  50%,54% {\n    left: 50%;\n    top: 0%;\n    transform: translate(-50%, -100%);\n  }\n  59% {\n    left: 50%;\n    top: 0%;\n    transform: translate(-50%, -100%);\n  }\n  62% {\n    left: 50%;\n    top: 0%;\n    transform: rotateZ(-15deg) translate(-50%, -100%);\n  }\n  65% {\n    left: 50%;\n    top: 0%;\n    transform: rotateZ(15deg) translate(-50%, -100%);\n  }\n  70% {\n    left: 50%;\n    top: 0%;\n    transform: rotateZ(-5deg) translate(-50%, -100%);\n  }\n  72% {\n    left: 50%;\n    top: 0%;\n    transform: rotateZ(5deg) translate(-50%, -100%);\n  }\n  74%,84% {\n    left: 50%;\n    top: 0%;\n    transform: rotateZ(0deg) translate(-50%, -100%);\n  }\n  85% {\n    transform: rotateZ(180deg) translate(0%, 120%);\n  }\n  92% {\n    left: 50%;\n    top: 0%;\n    transform: translate(-50%, -100%);\n  }\n}\n@keyframes expand-light {\n  10%,29%,59%,89% {\n    transform: translate(-25%, -50%) scale(0, 0);\n    border: 2px solid rgba(255, 255, 255, 0);\n  }\n  90%,20%,50% {\n    transform: translate(-25%, -50%) scale(1, 1);\n  }\n  95%,96%,26%,27%,56%,57% {\n    transform: translate(-25%, -50%) scale(2, 2);\n    border: 2px solid rgba(255, 255, 255, 0.5);\n  }\n  0%,28%,58%,100% {\n    transform: translate(-25%, -50%) scale(2.5, 2.5);\n    border: 2px solid rgba(255, 255, 255, 0.2);\n  }\n}\n@keyframes dance-fire {\n  59%,89% {\n    left: 47%;\n    width: 0px;\n    height: 0px;\n  }\n  90%,0%,7%,15%,23%,31%,39%,47%,55% {\n    left: 47.8%;\n    width: 16px;\n    height: 20px;\n    background: #FFC107;\n  }\n  94%,3%,11%,19%,27%,35%,43%,51%,58% {\n    left: 47.2%;\n    width: 16px;\n    height: 20px;\n    background: #FF9800;\n  }\n}\n@keyframes changeto-lower {\n  0%,70%,90% {\n    padding: 0px;\n    display: inline-block;\n    border-radius: 100%;\n    background: #673C63;\n    border-width: 0 0 0 0;\n    border: 0px solid #673C63;\n    transform: translate(-90%, 0%);\n  }\n  71%,89% {\n    background: none;\n    border: solid #673C63;\n    border-radius: 0px;\n    border-width: 0 2px 2px 0;\n    display: inline-block;\n    padding: 1px;\n    float: left;\n    transform-origin: bottom left;\n    transform: rotate(-45deg) translate(-50%, -65%);\n    -webkit-transform: rotate(-45deg) translate(-50%, -65%);\n  }\n}\n@keyframes changeto-greater {\n  0%,70%,90% {\n    top: 50%;\n    padding: 0px;\n    display: inline-block;\n    border-radius: 100%;\n    background: #673C63;\n    border-width: 0 0 0 0;\n    border: 0px solid #673C63;\n    transform: translate(-80%, 0%);\n  }\n  71%,89% {\n    top: 30%;\n    background: none;\n    border: solid #673C63;\n    border-radius: 0px;\n    border-width: 0 2px 2px 0;\n    display: inline-block;\n    padding: 1px;\n    float: left;\n    transform-origin: bottom left;\n    transform: rotate(135deg) translate(-80%, 20%);\n    -webkit-transform: rotate(135deg) translate(-80%, 20%);\n  }\n}"),C=Object(a.a)(O,2),F=C[0],N=C[1],S=Object(f.a)("javascript",'//the above code is just an example from https://codepen.io/kevin_David_k\n\n//check console if the iframe is reloaded or not!, if not it is hot-reloding\nif (window.performance) {\n  console.info("window.performance work\'s fine on this browser");\n}\n  if (performance.navigation.type == 1) {\n    console.info( "This page is reloaded" );\n  } else {\n    console.info( "This page is not reloaded");\n  }'),T=Object(a.a)(S,2),E=T[0],Z=T[1],B=Object(o.useState)(""),I=Object(a.a)(B,2),J=I[0],z=I[1];return Object(o.useEffect)((function(){var n=setTimeout((function(){z("\n        <html>\n          <body>".concat(w,"</body>\n          <style>").concat(F,"</style>\n          <script>").concat(E,"<\/script>\n        </html>\n      "))}),250);return function(){return clearTimeout(n)}}),[w,F,E]),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("div",{style:{position:"absolute",margin:"10px 0 0 42px"},children:Object(p.jsx)("img",{height:"40px",src:c.a,alt:"logo"})}),Object(p.jsxs)("nav",{children:["Code Editor ",Object(p.jsx)("img",{style:{alignItems:"flex-end",marginBottom:"-15px"},height:"50px",src:s.a,alt:"code_pic"})]}),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{className:"blank_space",children:"Open any Editor to code"}),Object(p.jsxs)("div",{className:"folder_structure",children:[Object(p.jsx)("img",{style:{margin:"10px 0px 15px 0px"},src:d.a,alt:"menu"}),Object(p.jsx)("button",{style:{backgroundColor:e?"":"black",color:e?"":"white"},onClick:function(){return r((function(n){return!n}))},children:"index.html"}),Object(p.jsx)("button",{style:{backgroundColor:m?"":"black",color:m?"":"white"},onClick:function(){return u((function(n){return!n}))},children:"index.css"}),Object(p.jsx)("button",{style:{backgroundColor:v?"":"black",color:v?"":"white"},onClick:function(){return j((function(n){return!n}))},children:"index.js"})]}),Object(p.jsxs)("div",{className:"Editors",children:[Object(p.jsx)("div",{style:{display:e?"":"none"},children:Object(p.jsx)(i.a,{language:"xml",title:"HTML",value:w,onChange:y})}),Object(p.jsx)("div",{style:{display:m?"":"none"},children:Object(p.jsx)(i.a,{language:"css",title:"CSS",value:F,onChange:N})}),Object(p.jsx)("div",{style:{display:v?"":"none"},children:Object(p.jsx)(i.a,{language:"javascript",title:"JS",value:E,onChange:Z})})]}),Object(p.jsxs)("div",{className:"output",children:[Object(p.jsx)("iframe",{className:"output_result",srcDoc:J,title:"output_result",sandbox:"allow-scripts",frameBorder:"0"}),Object(p.jsx)("div",{className:"mobile_container",children:Object(p.jsx)("img",{className:"mobile",src:l.a,alt:"mobile_pic"})})]})]})]})}))}).call(this,e(20)(n))},,function(n,t,e){"use strict";t.a=e.p+"static/media/code_white_24dp.a732e1ef.svg"},function(n,t,e){"use strict";t.a=e.p+"static/media/mobile_slim.75f71d5b.svg"},function(n,t,e){"use strict";t.a=e.p+"static/media/folder_white_24dp.7119ffde.svg"},function(n,t,e){"use strict";t.a=e.p+"static/media/school_white_24dp.e5db1a9c.svg"},,,,,,function(n,t,e){},,,,,,,,function(n,t,e){},,function(n,t,e){},,function(n,t,e){"use strict";e.r(t);var a=e(1),r=e.n(a),o=e(7),i=e.n(o),s=(e(19),e(8)),l=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,32)).then((function(t){var e=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;e(n),a(n),r(n),o(n),i(n)}))},d=e(0);i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(s.a,{})}),document.getElementById("root")),l()}],[[31,1,2]]]);
//# sourceMappingURL=main.49aa929e.chunk.js.map