(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[652],{3458:function(n,t,e){"use strict";e.d(t,{Bt:function(){return p},TP:function(){return u},Tg:function(){return i},vw:function(){return c},y:function(){return s}});var r=e(8683),o=e(1243);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var a="?api_key=9a450fbd652c62e887bc78d79e7a75f2",i=function(){return(0,o.Z)("/trending/movie/day".concat(a)).then((function(n){return n.data.results}))},c=function(n){return(0,o.Z)("/search/movie".concat(a,"&query=").concat(n)).then((function(n){return n.data.results}))},u=function(n){return(0,o.Z)("/movie/".concat(n).concat(a,"&page=1&language=en-US")).then((function(n){var t=n.data,e=t.poster_path,o=t.backdrop_path,a="https://image.tmdb.org/t/p/original",i=e?"".concat(a).concat(e):"".concat(a).concat(o);return(0,r.Z)((0,r.Z)({},n.data),{},{imgUrl:i})}))},s=function(n){return(0,o.Z)("/movie/".concat(n,"/credits").concat(a,"&language=en-US")).then((function(n){return n.data.cast.map((function(n){return{id:n.id,name:n.name,profile_path:n.profile_path,character:n.character}}))}))},p=function(n){return(0,o.Z)("/movie/".concat(n,"/reviews").concat(a,"&language=en-US")).then((function(n){return n.data.results.map((function(n){return{id:n.id,author:n.author,content:n.content}}))}))}},4146:function(n,t,e){"use strict";e.d(t,{Z:function(){return s}});var r,o=e(1087),a=e(7689),i=e(168),c=e(6444).ZP.ul(r||(r=(0,i.Z)(["\n  padding: 0;\n \n\n  li{\n    margin-top: 20px;\n    font-weight: 500;\n    font-size: 20px;\n    list-style: decimal;\n  }\n  a {\n    color: black;\n  }\n  a:hover {\n    color: orangered;\n  }\n"]))),u=e(184),s=function(n){var t=n.movies,e=(0,a.TH)();return(0,u.jsx)(c,{children:(0,u.jsx)("ul",{children:t.map((function(n){return(0,u.jsx)("li",{children:(0,u.jsx)(o.rU,{to:"/movies/".concat(n.id),state:{from:e},children:n.title})},n.id)}))})})}},7652:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return m}});var r,o=e(9439),a=e(2791),i=e(3458),c=e(4146),u=e(168),s=e(6444).ZP.form(r||(r=(0,u.Z)(["\n  margin-bottom: 20px;\n  padding: 30px 50px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  gap: 20px;\n  max-width: 350px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);\n  input {\n    padding: 5px 10px;\n    width: 50%;\n    margin: auto;\n  }\n  button {\n    display: inline-block;\n    color: black;\n    list-style: none;\n    padding: 5px 15px;\n    margin: auto;\n    font-size: 18px;\n    font-weight: bold;\n    text-transform: uppercase;\n    border: 2px solid black;\n    border-radius: 10px;\n  }\n  h2 {\n    margin: 0;\n  }\n"]))),p=e(184),f=function(n){var t=n.updateQueryString;return(0,p.jsxs)(s,{onSubmit:function(n){n.preventDefault();var e=n.target.elements.title.value.trim();t(e)},children:[(0,p.jsx)("h2",{children:"Search movies:"}),(0,p.jsx)("input",{type:"text",name:"title"}),(0,p.jsx)("button",{type:"submit",children:"Search"})]})},l=e(2007),d=e.n(l),h=e(1087);c.Z.propTypes={movies:d().arrayOf(d().object).isRequired};var m=function(){var n=(0,h.lr)(),t=(0,o.Z)(n,2),e=t[0],r=t[1],u=(0,a.useState)(null),s=(0,o.Z)(u,2),l=s[0],d=s[1],m=e.get("query");(0,a.useEffect)((function(){m&&(0,i.vw)(m).then((function(n){return d(n)})).catch((function(n){return console.log(n.message)}))}),[m]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(f,{updateQueryString:function(n){r(""!==n?{query:n}:{})}}),l&&(l.length>0?(0,p.jsx)(c.Z,{movies:l}):(0,p.jsx)("b",{children:"No movies found"}))]})}},888:function(n,t,e){"use strict";var r=e(9047);function o(){}function a(){}a.resetWarningCache=o,n.exports=function(){function n(n,t,e,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return n}n.isRequired=n;var e={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:t,element:n,elementType:n,instanceOf:t,node:n,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return e.PropTypes=e,e}},2007:function(n,t,e){n.exports=e(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=652.16df6f27.chunk.js.map