(this.webpackJsonpcliente=this.webpackJsonpcliente||[]).push([[0],{290:function(e,a,t){},305:function(e,a,t){},406:function(e,a,t){},412:function(e,a,t){},414:function(e,a,t){},415:function(e,a,t){},417:function(e,a,t){},418:function(e,a,t){},419:function(e,a,t){},420:function(e,a,t){},421:function(e,a,t){},422:function(e,a,t){},425:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t(58),c=t.n(n),s=(t(290),t(17)),i=t(40),o=t(209),u=t(426),l=t(270),j=t(443),b=t.n(j),d=t(258),h="token";function m(e){localStorage.setItem(h,e)}function O(){return localStorage.getItem(h)}function p(e){return Object(d.a)(e)}var x,f,v,g,w,C=b()({uri:"http://localhost:4000/"}),y=Object(l.a)((function(e,a){var t=a.headers,r=O();return{headers:Object(i.a)(Object(i.a)({},t),{},{authorization:r?"Bearer ".concat(r):""})}})),S=new o.a({connectToDevTools:!0,cache:new u.a,link:y.concat(C)}),N=t(446),k=(t(305),t(445)),I=t(269),E=t.p+"static/media/instaclone.6489b803.png",q=t(48),U=t.n(q),F=t(89),P=t(453),A=t(182),$=t(55),L=t(447),T=t(449),_=t(45),B=t(123),D=t(96),R=Object(D.a)(x||(x=Object(B.a)(["\n    mutation register($input: UserInput) {\n        register(input: $input) {\n            id\n            name\n            username\n            email\n            password\n        }\n    }\n"]))),W=Object(D.a)(f||(f=Object(B.a)(["\n    mutation login($input: LoginInput) {\n        login(input: $input) {\n            token\n    }\n}\n"]))),z=Object(D.a)(v||(v=Object(B.a)(["\n    query getUser($id: ID, $username: String) {\n    getUser(id: $id, username: $username) {\n        id\n        name\n        username\n        email\n        siteWeb\n        description\n        avatar\n    }\n    } \n"]))),H=Object(D.a)(g||(g=Object(B.a)(["\n    mutation updateAvatar($file: Upload) {\n        updateAvatar(file: $file) {\n            status\n            urlAvatar\n        }\n    }   \n"]))),Q=Object(D.a)(w||(w=Object(B.a)(["\n    mutation deleteAvatar {\n        deleteAvatar\n    }\n"]))),M=(t(406),t(3)),V=function(e){var a=e.setShowLogin,t=Object(P.a)(R),r=Object(s.a)(t,2),n=r[0],c=(r[1],Object(A.a)({initialValues:{name:"",username:"",email:"",password:"",repeatPassword:""},validationSchema:_.a({name:_.c().trim().required("Es requerido"),username:_.c().matches(/^[a-zA-Z0-9]*$/,"El nombre de usuario no debe tenece espacios").required("Debe agregar un nombre de usuario"),email:_.c().email("El email no es valido").required("El email es obligatorio"),password:_.c().required("La contrase\xf1a es obligatoria"),repeatPassword:_.c().required("La contrase\xf1a es obligatoria").oneOf([_.b("password")],"Las contrase\xf1as no son igulaes")}),onSubmit:function(){var e=Object(F.a)(U.a.mark((function e(t){var r,c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,delete(r=t).repeatPassword,e.next=5,n({variables:{input:r}});case 5:if(c=e.sent,console.log(c),null!==c.data.register.id&&c){e.next=9;break}return e.abrupt("return",$.b.error("El usuario ya esta en uso"));case 9:$.b.success("usuario registrado"),a(!0),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("Error => ",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(a){return e.apply(this,arguments)}}()}));return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("h2",{className:"register-form-title",children:"Reg\xedstrate para ver fotos y videos de tus amigos"}),Object(M.jsxs)(L.a,{onSubmit:c.handleSubmit,className:"register-form",children:[Object(M.jsx)(L.a.Input,{onChange:c.handleChange,value:c.values.name,type:"text",placeholder:"\r Nobre y apellidos",error:c.errors.name&&!0,name:"name"}),Object(M.jsx)(L.a.Input,{onChange:c.handleChange,type:"text",placeholder:"\r Nobre de usuario",error:c.errors.username&&!0,name:"username"}),Object(M.jsx)(L.a.Input,{onChange:c.handleChange,type:"email",placeholder:"\r Correo electronico",error:c.errors.email&&!0,name:"email"}),Object(M.jsx)(L.a.Input,{onChange:c.handleChange,type:"password",placeholder:"\r Contrase\xf1a",error:c.errors.password&&!0,name:"password"}),Object(M.jsx)(L.a.Input,{onChange:c.handleChange,type:"password",placeholder:"\r Repite la contrase\xf1a",error:c.errors.repeatPassword&&!0,name:"repeatPassword"}),Object(M.jsx)(T.a,{type:"submit",className:"btn-submit",children:"Registrarse"})]})]})},J=Object(r.createContext)({user:void 0}),K=function(){return Object(r.useContext)(J)},Y=(t(412),function(){var e=Object(r.useState)(""),a=Object(s.a)(e,2),t=a[0],n=a[1],c=Object(P.a)(W),i=Object(s.a)(c,1)[0],o=K().setUser,u=function(){var e=Object(F.a)(U.a.mark((function e(a){var t,r,c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(""),e.prev=1,e.next=4,i({variables:{input:a}});case 4:t=e.sent,r=t.data,m(c=r.login.token),o(p(c)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),n(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(a){return e.apply(this,arguments)}}(),l=Object(A.a)({initialValues:{email:"",password:""},validationSchema:_.a({email:_.c().email("El email no es valido").required("El email es obligatorio"),password:_.c().required("La contrase\xf1a es obligatoria")}),onSubmit:function(e){return u(e)}});return Object(M.jsxs)(L.a,{onSubmit:l.handleSubmit,className:"login-form",children:[Object(M.jsx)("h2",{children:"Incia sesi\xf3n"}),Object(M.jsx)(L.a.Input,{type:"email",placeholder:"Correo electronico",name:"email",onChange:l.handleChange,value:l.values.email,error:l.errors.email}),Object(M.jsx)(L.a.Input,{type:"password",placeholder:"Contrase\xf1a",name:"password",onChange:l.handleChange,value:l.values.password,error:l.errors.password}),Object(M.jsx)(T.a,{type:"submit",className:"btn-submit",children:"Iniciar sesi\xf3n"}),Object(M.jsx)("p",{className:"submit-error",children:t})]})}),Z=function(){var e=Object(r.useState)(!0),a=Object(s.a)(e,2),t=a[0],n=a[1];return Object(M.jsxs)(k.a,{fluid:!0,className:"auth",children:[Object(M.jsx)(I.a,{src:E}),Object(M.jsx)("div",{className:"container-form",children:t?Object(M.jsx)(Y,{}):Object(M.jsx)(V,{setShowLogin:n})}),Object(M.jsx)("div",{className:"change-form",children:Object(M.jsx)("p",{children:t?Object(M.jsxs)(M.Fragment,{children:["\xbfNo tienes cuenta?",Object(M.jsx)("span",{onClick:function(){return n(!t)},children:" Registrate"})]}):Object(M.jsxs)(M.Fragment,{children:["Ya tengo cuenta",Object(M.jsx)("span",{onClick:function(){return n(!t)},children:" Iniciar sesi\xf3n"})]})})})]})},G=(t(413),t(53)),X=t(20),ee=(t(414),t(455)),ae=t(266),te=(t(415),t(122)),re=t.p+"static/media/avatar.235f193d.png",ne=t(450),ce=function(){var e=K().auth,a=Object(ne.a)(z,{variables:{username:e.username}}),t=a.data,r=a.loading,n=a.error;if(r||n)return null;var c=t.getUser;return Object(M.jsxs)("div",{className:"right-header",children:[Object(M.jsx)(G.b,{to:"/",children:Object(M.jsx)(te.a,{name:"home"})}),Object(M.jsx)(te.a,{name:"plus"}),Object(M.jsx)(G.b,{to:"/".concat(e.username),children:Object(M.jsx)(I.a,{src:c.avatar?c.avatar:re,avatar:!0})})]})},se=function(){return Object(M.jsx)("div",{className:"header",children:Object(M.jsx)(k.a,{children:Object(M.jsxs)(ee.a,{children:[Object(M.jsx)(ae.a,{className:"header__logo",width:3,children:Object(M.jsx)(G.b,{to:"/",children:Object(M.jsx)(I.a,{src:E,alt:"Instaclone"})})}),Object(M.jsx)(ae.a,{width:10,children:Object(M.jsx)("p",{children:"Buscador"})}),Object(M.jsx)(ae.a,{width:3,children:Object(M.jsx)(ce,{})})]})})})},ie=function(e){var a=e.children;return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(se,{}),Object(M.jsx)(k.a,{className:"layout-basic",children:a})]})},oe=(t(417),function(){return Object(M.jsx)("div",{children:Object(M.jsx)("h1",{children:"Error 404"})})}),ue=(t(418),function(){return Object(M.jsx)("div",{children:Object(M.jsx)("h1",{children:"Estamos en Home"})})}),le=(t(419),t(420),function(){return Object(M.jsxs)("div",{className:"user-not-found",children:[Object(M.jsx)("p",{children:"Usuario no encontrado"}),Object(M.jsx)("p",{children:"Es posible que el enlace que has seguido sea incorrecto o que el usuario se haya eliminado!"}),Object(M.jsx)(G.b,{to:"/",children:"Volver al inicio"})]})}),je=t(448),be=(t(421),function(e){var a=e.show,t=e.setShow,r=e.title,n=e.children;return Object(M.jsxs)(je.a,{size:"mini",open:a,onClose:function(){t(!1)},className:"modal-basic",children:[r&&Object(M.jsx)(je.a.Header,{children:r}),n]})}),de=(t(422),t(268)),he=function(e){var a=e.setShowModal,t=e.auth,n=Object(P.a)(H,{update:function(e,a){var r=a.data.updateAvatar,n=e.readQuery({query:z,variables:{username:t.username}}).getUser;e.writeQuery({query:z,variables:{username:t.username},data:{getUser:Object(i.a)(Object(i.a)({},n),{},{avatar:r.urlAvatar})}})}}),c=Object(s.a)(n,1)[0],o=Object(r.useState)(!1),u=Object(s.a)(o,2),l=u[0],j=u[1],b=Object(r.useState)(!1),d=Object(s.a)(b,2),h=d[0],m=d[1],O=Object(P.a)(Q,{update:function(e){var a=e.readQuery({query:z,variables:{username:t.username}}).getUser;e.writeQuery({query:z,variables:{username:t.username},data:{getUser:Object(i.a)(Object(i.a)({},a),{},{avatar:""})}})}}),p=Object(s.a)(O,1)[0],x=Object(r.useCallback)(function(){var e=Object(F.a)(U.a.mark((function e(t){var r,n,s;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t[0],e.prev=1,j(!0),e.next=5,c({variables:{file:r}});case 5:if(n=e.sent,s=n.data,!s.updateAvatar.status){e.next=11;break}return setTimeout((function(){j(!1),a(!1),$.b.success("Sa cambio con \xe9xito!")}),1e3),e.abrupt("return");case 11:$.b.error("Error al actualizar avatar!"),j(!1),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log("error => ",e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(a){return e.apply(this,arguments)}}(),[]),f=Object(de.a)({accept:"image/jpeg, image/png",noKeyboard:!0,multiple:!1,onDrop:x}),v=f.getRootProps,g=f.getInputProps,w=function(){var e=Object(F.a)(U.a.mark((function e(){var t,r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p();case 3:t=e.sent,r=t.data,m(!0),setTimeout((function(){m(!1),r.deleteAvatar?(a(!1),$.b.success("Avatar eliminaro!")):$.b.warn("Error al eliminar el avatar")}),1e3),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error => ",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(M.jsxs)("div",{className:"avatar-form",children:[Object(M.jsx)(T.a,Object(i.a)(Object(i.a)({},v()),{},{loading:l,children:"Cargar una foto"})),Object(M.jsx)(T.a,{onClick:w,loading:h,children:"Eliminar foto actual"}),Object(M.jsx)(T.a,{onClick:function(){return a(!1)},children:"Cancelar"}),Object(M.jsx)("input",Object(i.a)({},g()))]})},me=function(e){var a=e.username,t=Object(ne.a)(z,{variables:{username:a}}),n=t.data,c=t.loading,i=t.error,o=K().auth,u=Object(r.useState)(!1),l=Object(s.a)(u,2),j=l[0],b=l[1],d=Object(r.useState)(""),h=Object(s.a)(d,2),m=h[0],O=h[1],p=Object(r.useState)(null),x=Object(s.a)(p,2),f=x[0],v=x[1];if(c)return null;if(i)return Object(M.jsx)(le,{});var g=n.getUser;return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)(ee.a,{className:"profile",children:[Object(M.jsx)(ee.a.Column,{width:5,className:"profile__left",children:Object(M.jsx)(I.a,{src:g.avatar?g.avatar:re,onClick:function(){return a===o.username&&function(e){switch(e){case"avatar":O("Cambia tu foto de perfil"),v(Object(M.jsx)(he,{setShowModal:b,auth:o})),b(!0)}}("avatar")}})}),Object(M.jsxs)(ee.a.Column,{width:11,className:"profile__right",children:[Object(M.jsx)("div",{children:"HeaderProfile"}),Object(M.jsx)("div",{children:"Followers"}),Object(M.jsxs)("div",{className:"other",children:[Object(M.jsx)("p",{className:"name",children:g.name}),g.siteWeb&&Object(M.jsx)("a",{href:g.siteWeb,target:"_blank",className:"siteWeb",children:g.siteWeb}),g.description&&Object(M.jsx)("p",{className:"description",children:g.description})]})]})]}),Object(M.jsx)(be,{show:j,setShow:b,title:m,children:f})]})},Oe=[{path:"/",layout:ie,component:ue,exact:!0},{path:"/:username",layout:ie,component:function(){var e=Object(X.f)().username;return Object(M.jsx)(M.Fragment,{children:Object(M.jsx)(me,{username:e})})},exact:!0},{layout:ie,component:oe}],pe=function(){return Object(M.jsx)(G.a,{children:Object(M.jsx)(X.c,{children:Oe.map((function(e,a){return Object(M.jsx)(X.a,{path:e.path,exact:e.exact,render:function(a){return Object(M.jsx)(e.layout,{children:Object(M.jsx)(e.component,Object(i.a)({},a))})}},a)}))})})};function xe(){var e=Object(r.useState)(void 0),a=Object(s.a)(e,2),t=a[0],n=a[1];Object(r.useEffect)((function(){var e=O();n(e?p(e):null)}),[]);var c=function(){console.log("Cerrar sesi\xf3n")},i=function(e){n(e)},o=Object(r.useMemo)((function(){return{auth:t,logout:c,setUser:i}}),[t]);return void 0===t?null:Object(M.jsx)(N.a,{client:S,children:Object(M.jsxs)(J.Provider,{value:o,children:[t?Object(M.jsx)(pe,{}):Object(M.jsx)(Z,{}),Object(M.jsx)($.a,{position:"top-right",autoClose:5e3,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})})}t(423),t(424);var fe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,456)).then((function(a){var t=a.getCLS,r=a.getFID,n=a.getFCP,c=a.getLCP,s=a.getTTFB;t(e),r(e),n(e),c(e),s(e)}))};c.a.render(Object(M.jsx)(xe,{}),document.getElementById("root")),fe()}},[[425,1,2]]]);
//# sourceMappingURL=main.b2203548.chunk.js.map