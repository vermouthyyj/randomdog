(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{145:function(e,n,t){"use strict";t.r(n);var r=t(7),i=t(0),c=t.n(i),o=t(18),a=t.n(o),s=(t(82),t(83),t(47)),d=t.n(s),u=t(62),h=t(22),l=t(23),p=t(25),f=t(26),g=t(147),b=(t(85),t(38)),j=t(39);function x(){var e=Object(b.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    >img {\n        @media (max-width:500px) {\n            width:100%;\n        }\n        display: inline-block;\n        height: 400px;\n        width: 25%;\n    }\n    >video {\n        @media (max-width:500px) {\n            width:100%;\n        }\n        background-size: cover;\n        // display: inline-block;\n        height: 400px;\n        width: 25%;\n    }\n"]);return x=function(){return e},e}function v(){var e=Object(b.a)([" \n    background: linear-gradient(white,white,#ffce33);\n    width: 80%;\n    height: 80%;\n    border: solid 5px;\n    border-color: grey;\n\n    display: block;\n    margin: 1% auto 5%;\n"]);return v=function(){return e},e}function m(){var e=Object(b.a)(["\n    >h1 {\n        text-align: center;\n        font-family: Optima;\n        font-size: 40px;\n    }\n    background: linear-gradient(white,white,#ffce33);\n    height:120%;\n\n    border: solid 2px;\n    border-color: grey;\n"]);return m=function(){return e},e}var y=j.a.div(m()),O=j.a.div(v()),w=j.a.div(x()),k=t(67),T="https://random.dog/woof.json",C=["mp4"],F=["png","jpg","jpeg","gif"],P=function(e){Object(p.a)(t,e);var n=Object(f.a)(t);function t(e){var i;return Object(h.a)(this,t),(i=n.call(this,e)).getFileType=function(e){var n=e.split(".").pop();return C.includes(n)?(console.log("this is a video!!!!!!!!"),"video"):F.includes(n)?"image":"ERROR"},i.renderDifferentTypes=function(e,n){var t=i.getFileType(e);switch(t){case"image":return Object(r.jsx)("img",{src:e,alt:"img"},n);case"video":return Object(r.jsxs)("video",{controls:!0,children:[Object(r.jsx)("source",{src:e,type:"video/mp4"}),"Your browser does not support the video tag."]},n);default:console.log("Error type of Message",t)}},i.onChange=function(){i.fetchPhotos(T,8)},i.state={dogPictures:[],isLoaded:!1},i.fetchPhotos(T,8),i}return Object(l.a)(t,[{key:"fetchPhotos",value:function(){var e=Object(u.a)(d.a.mark((function e(n,t){var r,i,c,o,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[],i=0;case 2:if(!(i<t)){e.next=24;break}return e.next=5,fetch(n,{method:"GET"});case 5:return c=e.sent,e.next=8,c.json();case 8:o=e.sent,a=this.getFileType(o.url);case 10:if("ERROR"!==a){e.next=20;break}return e.next=13,fetch(n,{method:"GET"});case 13:return c=e.sent,e.next=16,c.json();case 16:o=e.sent,a=this.getFileType(o.url),e.next=10;break;case 20:r.push({url:o.url,type:a});case 21:i++,e.next=2;break;case 24:this.setState({dogPictures:r,isLoaded:!0});case 25:case"end":return e.stop()}}),e,this)})));return function(n,t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,n=this.state,t=n.isLoaded,i=n.dogPictures;return t?Object(r.jsxs)(y,{children:[Object(r.jsx)("h1",{children:"Random dogs"}),Object(r.jsx)(O,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)(w,{children:i.map((function(n,t){return e.renderDifferentTypes(n.url,t)}))}),Object(r.jsx)(g.a,{size:"large",style:{width:"50%",heigth:"200%",display:"block",margin:"3% auto"},type:"primary",onClick:this.onChange,children:"Get changed!"})]})})]}):Object(r.jsx)(k.CircleToBlockLoading,{})}}]),t}(i.Component),R=t(74),E=t(4);var L=function(){return Object(r.jsx)(R.a,{children:Object(r.jsx)(E.a,{exact:!0,path:"/",component:P})})},z=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,148)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),r(e),i(e),c(e),o(e)}))};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(L,{})}),document.getElementById("root")),z()},82:function(e,n,t){},83:function(e,n,t){}},[[145,1,2]]]);
//# sourceMappingURL=main.b20e230d.chunk.js.map