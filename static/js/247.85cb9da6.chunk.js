"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{458:function(t,n,e){e.d(n,{TP:function(){return u},Tg:function(){return o},vw:function(){return i},y:function(){return s}});var r=e(683),a=e(243);a.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="?api_key=9a450fbd652c62e887bc78d79e7a75f2",o=function(){return(0,a.Z)("/trending/movie/day".concat(c)).then((function(t){return t.data.results}))},i=function(t){return(0,a.Z)("/search/movie".concat(c,"&query=").concat(t)).then((function(t){return t.data.results}))},u=function(t){return(0,a.Z)("/movie/".concat(t).concat(c,"&page=1&language=en-US")).then((function(t){var n=t.data,e=n.poster_path,a=n.backdrop_path,c="https://image.tmdb.org/t/p/original",o=e?"".concat(c).concat(e):"".concat(c).concat(a);return(0,r.Z)((0,r.Z)({},t.data),{},{imgUrl:o})}))},s=function(t){return(0,a.Z)("/movie/".concat(t,"/credits").concat(c,"&language=en-US")).then((function(t){return t.data.cast.map((function(t){return{id:t.id,name:t.name,profile_path:t.profile_path,character:t.character}}))}))}},247:function(t,n,e){e.r(n);var r=e(439),a=e(791),c=e(689),o=e(458),i=e(184);n.default=function(){var t=(0,a.useState)(null),n=(0,r.Z)(t,2),e=n[0],u=n[1],s=(0,c.UO)().movieId;return(0,a.useEffect)((function(){(0,o.y)(s).then((function(t){return u(t)})).catch((function(t){return console.log(t)}))}),[s]),e?(0,i.jsx)(i.Fragment,{children:e.length>0?e.map((function(t){var n=t.id,e=t.name,r=t.character,a=t.profile_path;return(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(a),alt:e}),(0,i.jsx)("h2",{children:e}),(0,i.jsxs)("p",{children:["Character: ",r]})]},n)})):(0,i.jsx)("b",{children:"Sorry, we couldn't find any cast for this movie:"})}):(0,i.jsx)("p",{children:"Loading cast..."})}}}]);
//# sourceMappingURL=247.85cb9da6.chunk.js.map