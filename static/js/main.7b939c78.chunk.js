(this["webpackJsonpdesafio-login-deploy-react"]=this["webpackJsonpdesafio-login-deploy-react"]||[]).push([[0],{31:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(12),s=n.n(r),o=n(15),i=(n(31),n(14)),d=n(8),l=n(23),j="LOGIN_USER",u="".concat(j,"_INIT"),b="".concat(j,"_SUCCESS"),h="".concat(j,"_ERROR"),p=function(e,t){var n=e.username,c=e.password;return function(e){e({type:u});var a=function(t){e({type:h,payload:t})};try{fetch("https://api-mock-mia.herokuapp.com/auth/login",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({username:n,password:c})}).then((function(e){return e.json()})).then((function(c){c.jwt?(localStorage.jwt=c.jwt,e({type:b,payload:n}),t()):a(c.error)}))}catch(r){a("Hay un error")}}},O=n(3),m=n(1),f=function(){var e=Object(c.useState)({username:"",password:""}),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(o.b)(),s=Object(O.f)(),j=function(e){var t=e.target;a(Object(d.a)(Object(d.a)({},n),{},Object(i.a)({},t.name,t.value)))},u=function(){return s.push("/users")};return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{children:"Login"}),Object(m.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),r(p(n,u))},children:[Object(m.jsx)("div",{className:"card",children:Object(m.jsx)("input",{id:"username",name:"username",className:"form-control username",placeholder:"Usuario",onChange:j,value:n.username})}),Object(m.jsx)("div",{className:"card",children:Object(m.jsx)("input",{id:"password",name:"password",className:"form-control",placeholder:"Password",type:"password",onChange:j,value:n.password})}),Object(m.jsx)("div",{className:"card",children:Object(m.jsx)("button",{id:"buttonSubmit",className:"btn btn-primary",type:"submit",children:"Ingresar"})})]})]})},x=function(){return Object(m.jsx)("h2",{children:"Listado de Usuarios"})},g=n(11);n(35);var v=function(){return Object(m.jsx)("div",{className:"App text-center",children:Object(m.jsx)(g.a,{basename:"desafio-login-deploy-react",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("nav",{children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(g.b,{to:"/",children:"Login"})}),Object(m.jsx)("li",{children:Object(m.jsx)(g.b,{to:"/users",children:"Users"})})]})}),Object(m.jsxs)(O.c,{children:[Object(m.jsx)(O.a,{exact:!0,path:"/",children:Object(m.jsx)(f,{})}),Object(m.jsx)(O.a,{path:"/users",children:Object(m.jsx)(x,{})})]})]})})})},y=n(16),w=n(21),S=n(22),N={data:{},error:null,success:null,loading:!1},C=Object(y.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(d.a)(Object(d.a)({},e),{},{loading:!0});case b:return Object(d.a)(Object(d.a)({},e),{},{data:t.payload,loading:!1,success:!0,error:!1});case h:return Object(d.a)(Object(d.a)({},e),{},{loading:!1,success:!1,error:t.payload});default:return e}}),Object(w.composeWithDevTools)(Object(y.applyMiddleware)(S.a))),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(36);s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(o.a,{store:C,children:Object(m.jsx)(v,{})})}),document.getElementById("root")),I()}},[[37,1,2]]]);
//# sourceMappingURL=main.7b939c78.chunk.js.map