"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{3458:function(n,t,e){e.d(t,{Bt:function(){return h},TP:function(){return u},Tg:function(){return o},vw:function(){return i},y:function(){return s}});var r=e(8683),a=e(1243);a.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="?api_key=9a450fbd652c62e887bc78d79e7a75f2",o=function(){return(0,a.Z)("/trending/movie/day".concat(c)).then((function(n){return n.data.results}))},i=function(n){return(0,a.Z)("/search/movie".concat(c,"&query=").concat(n)).then((function(n){return n.data.results}))},u=function(n){return(0,a.Z)("/movie/".concat(n).concat(c,"&page=1&language=en-US")).then((function(n){var t=n.data,e=t.poster_path,a=t.backdrop_path,c="https://image.tmdb.org/t/p/original",o=e?"".concat(c).concat(e):"".concat(c).concat(a);return(0,r.Z)((0,r.Z)({},n.data),{},{imgUrl:o})}))},s=function(n){return(0,a.Z)("/movie/".concat(n,"/credits").concat(c,"&language=en-US")).then((function(n){return n.data.cast.map((function(n){return{id:n.id,name:n.name,profile_path:n.profile_path,character:n.character}}))}))},h=function(n){return(0,a.Z)("/movie/".concat(n,"/reviews").concat(c,"&language=en-US")).then((function(n){return n.data.results.map((function(n){return{id:n.id,author:n.author,content:n.content}}))}))}},9736:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r,a=e(9439),c=e(2791),o=e(7689),i=e(3458),u=e(3521),s=e(168),h=e(6444).ZP.li(r||(r=(0,s.Z)(["\n  padding: 20px 30px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);\n  a {\n    color: black;\n  }\n  img {\n    margin-bottom: 10px;\n    max-width: 200px;\n  }\n  h2 {\n    margin-bottom: 5px;\n  }\n  span {\n    font-weight: bold;\n  }\n"]))),d=e(184),f=function(){var n=(0,c.useState)(null),t=(0,a.Z)(n,2),e=t[0],r=t[1],s=(0,o.UO)().movieId;return(0,c.useEffect)((function(){(0,i.y)(s).then((function(n){return r(n)})).catch((function(n){return console.log(n)}))}),[s]),e?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(h,{children:e.length>0?e.map((function(n){var t=n.id,e=n.name,r=n.character,a=n.profile_path;return(0,d.jsxs)("div",{children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(a),alt:e}),(0,d.jsx)("h2",{children:e}),(0,d.jsxs)("p",{children:[(0,d.jsx)("span",{children:"Character:"})," ",r]})]},t)})):(0,d.jsx)("b",{children:"Sorry, we couldn't find any cast for this movie:"})})}):(0,d.jsx)("p",{children:(0,d.jsx)(u.a,{})})}}}]);
//# sourceMappingURL=736.191d3e3b.chunk.js.map