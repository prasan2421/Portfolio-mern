(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30],{60629:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return G}});var i=n(47568),t=n(41799),s=n(69396),o=n(99534),a=n(828),l=n(70655),d=n(85893),c=n(67294),x=n(68346),m=n(78177),u=n(36336),h=n(81472),p=n(81506),Z=n(19941),f=n(82741),j=n(50594),g=n(26307),b=n(44510),v=n(9144),y=n(63358),S=n(49769),C=n(44520),w=n(77673),T=n(87536),k=n(47533),_=n(74231),B=n(80129),I=n.n(B),N=n(9669),P=n.n(N),R=n(75084),E=n(61953),W=n(29630),q=n(80562),z=n(79072),M=n(93481),L=n(25425),O=n(61760),Q=n(1788),A=n(81719),F=n(70323),J=n(63441),V=(0,A.ZP)(R.Z)({padding:"1rem 3rem 1rem 3rem"}),X=c.forwardRef((function(e,r){var n=e.in,i=e.children,a=e.onEnter,l=e.onExited,c=(0,o.Z)(e,["in","children","onEnter","onExited"]),x=(0,h.useSpring)({from:{opacity:0},to:{opacity:n?1:0},onStart:function(){n&&a&&a()},onRest:function(){!n&&l&&l()}});return(0,d.jsx)(h.animated.div,(0,s.Z)((0,t.Z)({ref:r,style:x},c),{children:i}))})),D={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:{xs:"100%",sm:"auto"},bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},H=_.Ry({name:_.Z_().required(),email:_.Z_().email().required(),subject:_.Z_().required(),message:_.Z_().required()}).required();function G(){var e=(0,a.Z)(c.useState(!0),2),r=e[0],n=(e[1],(0,a.Z)(c.useState(!1),2)),o=n[0],h=n[1],_=(0,a.Z)(c.useState(!1),2),B=_[0],N=_[1],A=(0,a.Z)(c.useState(!1),2),G=A[0],K=A[1],U=(0,a.Z)(c.useState(!0),2),Y=U[0],$=U[1],ee=(0,a.Z)(c.useState(!1),2),re=ee[0],ne=ee[1],ie=function(){return h(!1)},te=function(){var e=(0,i.Z)((function(e){return(0,l.__generator)(this,(function(r){return K(!0),P().post("/api/contacts",I().stringify(e)).then((function(e){K(!1),$(!0),ne(!0),h(!1)})).catch((function(e){K(!1),$(!1),ne(!0),console.log(e),alert(JSON.stringify(e))})),[2]}))}));return function(r){return e.apply(this,arguments)}}(),se=(0,T.cI)({resolver:(0,k.X)(H)}),oe=se.control,ae=se.handleSubmit,le=se.formState.errors,de=(0,d.jsx)(m.Z,{"aria-labelledby":"spring-modal-title","aria-describedby":"spring-modal-description",open:o,onClose:ie,closeAfterTransition:!0,BackdropComponent:p.Z,BackdropProps:{timeout:500},children:(0,d.jsx)(X,{in:o,children:(0,d.jsx)(E.Z,{sx:D,children:(0,d.jsx)(u.Z,{children:(0,d.jsxs)(E.Z,{children:[(0,d.jsx)(R.Z,{size:"small",onClick:ie,sx:{position:"absolute",right:0,top:0,minWidth:0},children:(0,d.jsx)(b.Z,{fontSize:"large",sx:{color:"red"}})}),(0,d.jsx)(E.Z,{sx:{marginBottom:"20px"},children:(0,d.jsx)("h1",{children:"Contact Me"})}),(0,d.jsxs)("form",{onSubmit:ae((function(e){te(e)})),children:[(0,d.jsx)(T.Qr,{name:"name",control:oe,render:function(e){var r,n=e.field;return(0,d.jsx)(Z.Z,(0,s.Z)((0,t.Z)({},n),{label:"Name",variant:"outlined",error:!!le.name,helperText:le.name?null===(r=le.name)||void 0===r?void 0:r.message:"",fullWidth:!0,margin:"dense",sx:{width:{xs:"100%",sm:"100%",md:"50%"},marginBottom:"10px",paddingRight:{sm:0,md:"5px"}}}))}}),(0,d.jsx)(T.Qr,{name:"email",control:oe,render:function(e){var r,n=e.field;return(0,d.jsx)(Z.Z,(0,s.Z)((0,t.Z)({},n),{label:"Email",variant:"outlined",error:!!le.email,helperText:le.email?null===(r=le.email)||void 0===r?void 0:r.message:"",sx:{width:{xs:"100%",sm:"100%",md:"50%"},marginBottom:"10px",paddingLeft:{sm:0,md:"5px"}},fullWidth:!0,margin:"dense"}))}}),(0,d.jsx)(T.Qr,{name:"subject",control:oe,render:function(e){var r,n=e.field;return(0,d.jsx)(Z.Z,(0,s.Z)((0,t.Z)({},n),{label:"Subject",variant:"outlined",error:!!le.subject,helperText:le.subject?null===(r=le.subject)||void 0===r?void 0:r.message:"",sx:{width:"100%",marginBottom:"10px"},fullWidth:!0,margin:"dense"}))}}),(0,d.jsx)(T.Qr,{name:"message",control:oe,render:function(e){var r,n=e.field;return(0,d.jsx)(Z.Z,(0,s.Z)((0,t.Z)({},n),{label:"Message",multiline:!0,rows:4,variant:"outlined",error:!!le.message,helperText:le.message?null===(r=le.message)||void 0===r?void 0:r.message:"",sx:{width:"100%",marginBottom:"10px"},fullWidth:!0,margin:"dense"}))}}),(0,d.jsx)(Q.Z,{type:"submit",variant:"contained",loading:!!G,loadingPosition:"end",endIcon:(0,d.jsx)(g.Z,{}),children:"Send"})]})]})})})})}),ce=(0,d.jsx)(m.Z,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:B,onClose:function(){return N(!1)},closeAfterTransition:!0,BackdropComponent:p.Z,BackdropProps:{timeout:500},children:(0,d.jsx)(X,{in:B,children:(0,d.jsxs)(E.Z,{sx:D,children:[(0,d.jsx)(W.Z,{id:"transition-modal-title",variant:"h6",component:"h2",children:"What's your reaction? (Select one or more)"}),(0,d.jsxs)(v.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,d.jsx)(q.Z,{color:"primary","aria-label":"upload picture",component:"label",children:(0,d.jsx)(y.Z,{sx:{color:"#ffd100"}})}),(0,d.jsx)(q.Z,{color:"primary","aria-label":"upload picture",component:"label",children:(0,d.jsx)(C.Z,{sx:{color:"#ffd100"}})}),(0,d.jsx)(q.Z,{color:"primary","aria-label":"upload picture",component:"label",children:(0,d.jsx)(S.Z,{sx:{color:"#ffd100"}})})]})]})})});return(0,d.jsxs)(z.ZP,{container:!0,sx:{height:"100vh",paddingX:{xs:"2.5rem",md:"4.5rem"}},children:[(0,d.jsx)(M.Z,{in:re,sx:{position:"absolute",bottom:0,right:20},children:(0,d.jsx)(f.Z,{variant:"filled",severity:Y?"success":"error",action:(0,d.jsx)(q.Z,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){ne(!1)},children:(0,d.jsx)(j.Z,{fontSize:"inherit"})}),sx:{mb:2},children:Y?"Message Sent":"Message sending Failed"})}),de,ce,(0,d.jsx)(z.ZP,{item:!0,xs:12,style:{display:"flex",alignItems:"center"},children:(0,d.jsx)(L.Z,{direction:"up",in:r,children:(0,d.jsxs)(E.Z,{sx:{color:"inherit",marginTop:"30px"},children:[(0,d.jsxs)(E.Z,{className:"introText",children:[(0,d.jsx)(O.Z,{in:r,style:{transformOrigin:"0 0 0"},children:(0,d.jsx)(W.Z,{variant:"h1",children:" Hi,"})}),(0,d.jsx)(O.Z,(0,s.Z)((0,t.Z)({in:r,style:{transformOrigin:"0 0 0"}},r?{timeout:1e3}:{}),{children:(0,d.jsx)(W.Z,{variant:"h1",children:"I'm Prasanna,"})})),(0,d.jsx)(O.Z,(0,s.Z)((0,t.Z)({in:r,style:{transformOrigin:"0 0 0"},className:"introTextLast"},r?{timeout:2e3}:{}),{children:(0,d.jsx)(W.Z,{variant:"h1",children:"Front-end Developer"})}))]}),(0,d.jsx)(E.Z,{className:"subTitle",children:(0,d.jsx)(W.Z,{variant:"subtitle1",children:"React | React Native | JS / TS"})}),(0,d.jsxs)(E.Z,{sx:{marginTop:"50px",display:{sm:"flex"}},children:[(0,d.jsxs)(E.Z,{sx:{display:{xs:"flex"},border:"5px solid ",borderColor:"inherit",borderRadius:"20px",overflow:"hidden",alignItems:{sm:"center"},width:{xs:"100%",sm:"auto"},marginTop:{xs:"10px",sm:"0"}},children:[(0,d.jsx)(V,{variant:"text",onClick:function(){return h(!0)},sx:{width:{xs:"100%",sm:"auto"},color:"inherit",padding:{xs:"1rem",sm:"1rem 3rem 1rem 3rem"}},children:"Contact Me"}),(0,d.jsx)(E.Z,{sx:{width:{xs:"inherit"},borderLeft:"2px solid lightgray",borderColor:"inherit"},children:(0,d.jsx)(x.Z,{href:"files/PrasannaCV.pdf",sx:{color:"inherit"},children:(0,d.jsx)(V,{sx:{width:{xs:"100%",sm:"auto"},color:"inherit",padding:{xs:"1rem",sm:"1rem 3rem 1rem 3rem"}},variant:"text",endIcon:(0,d.jsx)(J.Z,{color:"inherit"}),children:"CV"})})})]}),(0,d.jsx)(E.Z,{sx:{display:"flex",alignItems:"center",marginLeft:{xs:"0",sm:"10px"},marginTop:{xs:"10px",sm:"0"},justifyContent:{xs:"center",sm:"left"}},children:(0,d.jsx)(q.Z,{disableRipple:!0,onClick:function(){return N(!0)},color:"primary","aria-label":"upload picture",component:"label",sx:{padding:0,margoin:0},children:(0,d.jsx)(w.Z,{scale:1.5,springConfig:{tension:150,friction:10},children:(0,d.jsx)(F.Z,{sx:{fontSize:"50px",color:"#ffd100",marginTop:"2px"}})})})})]}),(0,d.jsx)(E.Z,{})]})})})]})}},24654:function(){}}]);