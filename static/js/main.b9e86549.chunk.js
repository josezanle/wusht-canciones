(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,a,t){e.exports=t(42)},23:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(17),l=t.n(c),s=(t(23),t(3)),m=t.n(s),o=t(5),i=t(2),u=t(4),p=t(6);var E=function(e){var a=e.consultarAPILetra,t=Object(r.useState)({artista:"",cancion:""}),c=Object(i.a)(t,2),l=c[0],s=c[1],m=function(e){s(Object(p.a)(Object(p.a)({},l),{},Object(u.a)({},e.target.name,e.target.value)))};return n.a.createElement("div",{className:"bg-info bg-dark"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(l)},className:"col card text-white bg-transparent  mb-5 pt-5 pb-2"},n.a.createElement("fieldset",null,n.a.createElement("h1",null,n.a.createElement("span",null,"W"),n.a.createElement("span",null,"u"),n.a.createElement("span",null,"s"),n.a.createElement("span",null,"h"),n.a.createElement("span",null,"t")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null," Artista "),n.a.createElement("input",{type:"text",className:"form-control",name:"artista",placeholder:"Nombre Artista",onChange:m,required:!0}))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null," Canci\xf3n "),n.a.createElement("input",{type:"text",className:"form-control",name:"cancion",placeholder:"Nombre Canci\xf3n",onChange:m,required:!0})))),n.a.createElement("button",{type:"submit",className:"btn btn-primary float-right"}," Buscar "))))))};var f=function(e){var a=e.letra;return 0===a.length?null:n.a.createElement(r.Fragment,null,n.a.createElement("h2",null," Letra: "),n.a.createElement("p",{className:"letra"}," ",a," "))};var d=function(e){var a=e.info;return n.a.createElement("div",{className:"card border-light"},n.a.createElement("div",{className:"card-header bg-primary text-light font-weight-bold"},"Informacion Artista"),n.a.createElement("div",{className:"card-body"},n.a.createElement("img",{src:a.strArtistThumb,alt:"Foto artista"}),n.a.createElement("p",{className:"card-text"},"Genero:",a.strGenre),n.a.createElement("h2",{className:"card-text text-center"},"Biografia:"),n.a.createElement("p",{className:"card-text"},a.strBiographyES),n.a.createElement("p",{className:"card-text"},n.a.createElement("a",{href:"https://".concat(a.strFacebook),target:"_blank"},n.a.createElement("i",{className:"fab fa-facebook"})),n.a.createElement("a",{href:"https://".concat(a.strTwitter),target:"_blank"},n.a.createElement("i",{className:"fab fa-twitter"})),n.a.createElement("a",{href:"".concat(a.strLastFMChart),target:"_blank"},n.a.createElement("i",{className:"fab fa-lastfm"})))))},b=t(7),h=t.n(b);var v=function(){var e=Object(r.useState)(""),a=Object(i.a)(e,2),t=a[0],c=a[1],l=Object(r.useState)([]),s=Object(i.a)(l,2),u=s[0],p=s[1],b=Object(r.useState)({}),v=Object(i.a)(b,2),N=v[0],g=v[1],j=function(){var e=Object(o.a)(m.a.mark((function e(a){var t,r,n,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.artista,r=a.cancion,n="https://api.lyrics.ovh/v1/".concat(t,"/").concat(r),e.next=4,h()(n);case 4:l=e.sent,c(t),p(l.data.lyrics);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),x=function(){var e=Object(o.a)(m.a.mark((function e(){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return a="https://theaudiodb.com/api/v1/json/1/search.php?s=".concat(t),e.next=4,h()(a);case 4:r=e.sent,g(r.data.artists[0]);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){x()}),[t]),n.a.createElement(r.Fragment,null,n.a.createElement(E,{consultarAPILetra:j}),n.a.createElement("div",{className:"container mt-5"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement(d,{info:N})),n.a.createElement("div",{className:"col-md-6"},n.a.createElement(f,{letra:u})))))};l.a.render(n.a.createElement(v,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.b9e86549.chunk.js.map