(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{39:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),o=n(20),d=n.n(o),i=(n(39),n(17)),s=n(2);function a(e){return e.power?Object(s.jsxs)("div",{id:"display",children:[Object(s.jsx)("p",{children:"kit: 909"}),Object(s.jsxs)("p",{children:["sample: ",e.soundLabel]}),Object(s.jsxs)("p",{children:["vol: ",e.volume]})]}):Object(s.jsxs)("div",{id:"display",children:[Object(s.jsx)("p",{}),Object(s.jsx)("p",{className:"off",children:"see you! : )"}),Object(s.jsx)("p",{})]})}function l(e){var t=Object(r.useRef)(null),n=Object(r.useRef)(null);return Object(s.jsxs)("button",{id:e.id,className:e.power?"drum-pad":"drum-pad off",ref:n,onClick:function(r){var c=t.current;c.volume=.01*e.volume,c.currentTime=0;var o=c.play();void 0!==o&&o.then((function(e){})).catch((function(e){console.log(e)})),e.updateDisplay(r.target.id);var d=n.current;d.classList.toggle("press"),setTimeout((function(){return d.classList.toggle("press")}),75)},disabled:!e.power,autoComplete:"off",children:[e.padLabel,Object(s.jsx)("audio",{id:e.padLabel,className:"clip",ref:t,src:e.url})]})}var u=n(61),p=n(29),j=n.n(p),b=n(31),h=n.n(b);function m(e){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{id:"volume-div",children:[Object(s.jsx)(j.a,{className:e.power?"on":"off"}),Object(s.jsx)(u.a,{value:e.volume,onChange:e.handleChange,disabled:!e.power,className:e.power?"on":"off"}),Object(s.jsx)(h.a,{className:e.power?"on":"off"})]}),Object(s.jsx)("p",{children:"vol"})]})}var f=[{padLabel:"Q",id:"chord 1",url:"./sound/Chord 1.mp3"},{padLabel:"W",id:"chord 2",url:"./sound/Chord 2.mp3"},{padLabel:"E",id:"chord 3",url:"./sound/Chord 3.mp3"},{padLabel:"A",id:"closed HH 909",url:"./sound/Closed HH 909.mp3"},{padLabel:"S",id:"open HH 909",url:"./sound/OpenHH 909.mp3"},{padLabel:"D",id:"rimshot",url:"./sound/Rimshot.mp3"},{padLabel:"Z",id:"kick 909",url:"./sound/Kick 909.mp3"},{padLabel:"X",id:"snare 909-1",url:"./sound/Snare 909_1.mp3"},{padLabel:"C",id:"snare 909-2",url:"./sound/Snare 909_2.mp3"}];var O=function(e){var t=Object(r.useState)(""),n=Object(i.a)(t,2),c=n[0],o=n[1],d=function(e){o(e)},u=Object(r.useState)(40),p=Object(i.a)(u,2),j=p[0],b=p[1];return Object(s.jsxs)("div",{id:"padBank",children:[Object(s.jsx)(a,{soundLabel:c,volume:j,power:e.power}),Object(s.jsx)("div",{id:"pad-div",children:f.map((function(t){return Object(s.jsx)(l,{updateDisplay:d,padLabel:t.padLabel,volume:j,power:e.power,id:t.id,url:t.url},t.id)}))}),Object(s.jsx)(m,{volume:j,handleChange:function(e,t){b(t)},power:e.power})]})};function v(e){return Object(s.jsxs)("div",{className:"powerBtn-div",children:[Object(s.jsx)("input",{type:"button",id:"power",onClick:e.powerSwitch}),Object(s.jsx)("label",{htmlFor:"power",children:"power"})]})}function x(){return Object(s.jsx)("footer",{children:Object(s.jsxs)("p",{children:["Marco Costa 2021. The ",Object(s.jsx)("a",{href:"https://github.com/marcocosta1618/drum-machine",target:"_blank",rel:"noreferrer",children:"code of this app"})," is hosted at GitHub."]})})}function w(){Object(r.useEffect)((function(){return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[]);var e=function(e){var t=f.find((function(t){return t.padLabel===e.key.toUpperCase()}));void 0!==t&&document.getElementById(t.id).click()},t=Object(r.useState)(!0),n=Object(i.a)(t,2),c=n[0],o=n[1];return Object(s.jsxs)("div",{id:"drum-machine",tabIndex:"-1",children:[Object(s.jsx)("h1",{children:"Drum Machine"}),Object(s.jsx)(O,{power:c}),Object(s.jsx)(v,{power:c,powerSwitch:function(e){o(!c),e.target.classList.toggle("off")}}),Object(s.jsx)(x,{})]})}n(46);function L(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(w,{})})}var g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,d=t.getTTFB;n(e),r(e),c(e),o(e),d(e)}))};d.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(L,{})}),document.getElementById("root")),g()}},[[47,1,2]]]);
//# sourceMappingURL=main.cd323d57.chunk.js.map