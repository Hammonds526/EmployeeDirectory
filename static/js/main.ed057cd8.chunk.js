(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{22:function(e,t,s){},23:function(e,t,s){},44:function(e,t,s){"use strict";s.r(t);var r=s(2),n=s(12),c=s.n(n),a=s(13),o=s(14),i=s(17),l=s(16),h=(s(22),s(23),s(0)),d={navbarStyle:{background:"lightBlue",justifyContent:"center",padding:"5px",marginBottom:"15px"}};var u=function(){return Object(h.jsx)("nav",{style:d.navbarStyle,className:"navbar",children:Object(h.jsx)("h1",{children:"Employee Directory"})})},j={form:{marginRight:"50%"},input:{width:"200px"}};var b=function(e){return Object(h.jsx)("div",{style:j.form,children:Object(h.jsx)("input",{style:j.input,type:"email",className:"form-control",id:"exampleFormControlInput1",placeholder:"Search",onChange:e.onSearch})})};var m=function(e){var t=e.data,s=e.handleSort;return Object(h.jsxs)("table",{className:"table table-striped ",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"Image"}),Object(h.jsx)("th",{scope:"col",children:Object(h.jsx)("button",{onClick:function(){s(t)},children:"Name"})}),Object(h.jsx)("th",{scope:"col",children:"Phone"}),Object(h.jsx)("th",{scope:"col",children:"Email"}),Object(h.jsx)("th",{scope:"col",children:"ID"})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{scope:"row",children:Object(h.jsx)("img",{src:e.picture.medium,alt:"img Thumbnail"})}),Object(h.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(h.jsx)("td",{children:e.phone}),Object(h.jsx)("td",{children:e.email}),Object(h.jsx)("td",{children:e.id.value})]})}))})]})},p=s(15),f=s.n(p),x=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(a.a)(this,s);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={users:[],sorted:"desc",search:""},e.sortUsers=function(){if("desc"===e.state.sorted){var t=e.state.users.sort((function(e,t){return t.name.first.toLocaleLowerCase()>e.name.first.toLocaleLowerCase()?1:-1}));e.setState({users:t}),e.setState({sorted:"asc"})}else{var s=e.state.users.sort((function(e,t){return t.name.first.toLocaleLowerCase()<e.name.first.toLocaleLowerCase()?1:-1}));e.setState({users:s}),e.setState({sorted:"desc"})}},e.onSearch=function(t){console.log("works"),e.setState({search:t.target.value}),console.log(e.state.search)},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://randomuser.me/api/?results=100&nat=us").then((function(t){e.setState({users:t.data.results})}))}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(u,{}),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(b,{onSearch:this.onSearch}),Object(h.jsx)(m,{data:this.state.search.length>0?this.state.users.filter((function(t){return t.name.first.toLowerCase().includes(e.state.search.toLocaleLowerCase())})):this.state.users,handleSort:this.sortUsers})]})]})}}]),s}(r.Component);s(43);c.a.render(Object(h.jsx)(x,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.ed057cd8.chunk.js.map