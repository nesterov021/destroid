(this.webpackJsonpdestroid=this.webpackJsonpdestroid||[]).push([[0],{105:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},191:function(e,t,a){e.exports=a(296)},292:function(e,t,a){},296:function(e,t,a){"use strict";a.r(t);a(192),a(218),a(220),a(221),a(223),a(224),a(225),a(226),a(227),a(228),a(229),a(230),a(232),a(233),a(234),a(235),a(236),a(237),a(238),a(239),a(240),a(241),a(243),a(244),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(257),a(258),a(259),a(260);var n=a(0),c=a.n(n),r=a(65),i=a.n(r),l=a(38),s=a.n(l),o=a(66),u=a.n(o),m=a(98),p=a(49),d=a(107),f=a.n(d),h=(a(269),a(47)),E=a.n(h),b=a(48),g=a.n(b),k=a(102),v=a.n(k),j=a(67),O=a.n(j),y=a(99),x=a.n(y),w=a(101),P=a.n(w),U=a(100),_=a.n(U),A=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(E.a,{id:t},c.a.createElement(g.a,null,"Example"),n&&c.a.createElement(O.a,{title:"User Data Fetched with VK Bridge"},c.a.createElement(x.a,{before:n.photo_200?c.a.createElement(_.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(O.a,{title:"Navigation Example"},c.a.createElement(P.a,null,c.a.createElement(v.a,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me the Persik, please"))))},C=a(68),I=a(106),K=a.n(I),S=a(103),V=a.n(S),N=a(104),W=a.n(N),B=a(105),J=a.n(B),T=(a(292),Object(C.b)()),z=function(e){return c.a.createElement(E.a,{id:e.id},c.a.createElement(g.a,{left:c.a.createElement(K.a,{onClick:e.go,"data-to":"home"},T===C.a?c.a.createElement(V.a,null):c.a.createElement(W.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:J.a,alt:"Persik The Cat"}))},D=function(){var e=Object(n.useState)("home"),t=Object(p.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(null),l=Object(p.a)(i,2),o=l[0],d=l[1],h=Object(n.useState)(null),E=Object(p.a)(h,2),b=E[0],g=E[1];Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,d(t),g(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}()}),[]);var k=function(e){r(e.currentTarget.dataset.to)};return c.a.createElement(f.a,{activePanel:a,popout:b},c.a.createElement(A,{id:"home",fetchedUser:o,go:k}),c.a.createElement(z,{id:"persik",go:k}))};s.a.send("VKWebAppInit"),i.a.render(c.a.createElement(D,null),document.getElementById("root"))}},[[191,1,2]]]);
//# sourceMappingURL=main.e2aeaea9.chunk.js.map