(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(7),s=n.n(o),a=(n(12),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),o(e),s(e)}))}),i=(n(13),n(2)),h=n(3),l=n(5),u=n(4),b=n(0),d=function(e){return Object(b.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow shadow-5",children:[Object(b.jsx)("img",{alt:"Robot of Jane Doe",src:"https://robohash.org/".concat(e.id,"?200x200")}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:e.name}),Object(b.jsx)("p",{children:e.email})]})]})},j=function(e){var t=e.robots;return t.map((function(e,n){return Object(b.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))},f=function(e){return Object(b.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})},O=function(e){var t=e.searchChange;return Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{type:"search",placeholder:"Search Robots",className:"pa3 ba b--green bg-light-blue br3",onChange:function(e){return t(e)}})})},p=(n(15),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"didComponentHasError",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(b.jsx)("h1",{children:"Oooooops. This is not good..."}):this.props.children}}]),n}(r.Component)),g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).onSearchChange=function(e){r.setState({searchfield:e.target.value})},r.state={robots:[],searchfield:""},r}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return 0===this.state.robots.length?Object(b.jsx)("h1",{className:"f2 tc",children:"LOADING"}):Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{className:"f2",children:"Robofriends"}),Object(b.jsx)(O,{searchChange:this.onSearchChange}),Object(b.jsx)(f,{children:Object(b.jsx)(p,{children:Object(b.jsx)(j,{robots:r})})})]})}}]),n}(r.Component);s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),a()}},[[16,1,2]]]);
//# sourceMappingURL=main.9ce5a9c1.chunk.js.map