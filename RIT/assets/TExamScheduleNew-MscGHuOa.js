import{u as z,c as A,r as y,eQ as O,eR as Y,j as e,B as h,C as q,E as Q,I as X,F as M,H as U,T as m,l as Z,af as ee,c1 as te,ag as se,ah as ne,ai as $,aj as a,ak as re}from"./index-CpZD2H93.js";import{D as ae}from"./Dropdown-AVnwFZWJ.js";const de=()=>{const C=z(),f=A(t=>t.StandardAndExamList.SelectStandard),S=A(t=>t.StandardAndExamList.ExamData),v=A(t=>t.StandardAndExamList.VeiwAllData),k=A(t=>t.StandardAndExamList.Loading),L=sessionStorage.getItem("AcademicYearId"),T=localStorage.getItem("localSchoolId"),N=sessionStorage.getItem("RoleId"),H=sessionStorage.getItem("StandardId"),[i,w]=y.useState("0"),[I,D]=y.useState(null),_=t=>{const s=t.split("-"),n=s[0],o=s[1],l=s[2],p=["January","February","March","April","May","June","July","August","September","October","November","December"][parseInt(o,10)-1];return`${n} ${p} ${l}`},G={asAcademicYearId:L,asSchoolId:T},J={asSchoolId:T,asAcademicYearId:L,asStandardId:i};y.useEffect(()=>{C(O(G)),N==="3"&&w(H)},[]);const V=t=>{w(t),D(0)};y.useEffect(()=>{i!==""&&C(Y(J))},[i]),y.useEffect(()=>{f.length>0&&(w(f[0].id),D(0))},[f]);const x={};v.forEach(t=>{x[t.Standard_Name]||(x[t.Standard_Name]={}),x[t.Standard_Name][t.text1]=t.Instructions||"-"});const K=(t,s)=>{const n=u=>{const[p,b]=u.split(":");let g="AM",d=parseInt(p,10);return d>=12&&(g="PM",d-=12),d===0&&(d=12),`${d}:${b} ${g}`},o=n(t),l=n(s);return`${o} - ${l}`},W=(t,s)=>{const[n,o]=t.split(":").map(Number),[l,u]=s.split(":").map(Number),p=new Date(0,0,0,n,o,0);let g=new Date(0,0,0,l,u,0).getTime()-p.getTime();g<0&&(g+=24*60*60*1e3);const d=Math.floor(g/(1e3*60*60)),r=Math.floor(g%(1e3*60*60)/(1e3*60));return d>0&&r>0?`${d}h ${r}m`:d>0?`${d}h`:r>0?`${r}m`:"-"},E=T==="122"?["Nursery","Junior KG","Senior KG",...Array.from({length:10},(t,s)=>`${s+1}`),"11 Sci","11 Com","12 Sci","12 Com","11 Art","12 Art"]:["Nursery","Junior KG","Senior KG",...Array.from({length:10},(t,s)=>`${s+1}`)],R=(t=>{const s={};return t.forEach(n=>{const o=`${n.text3}-${n.startTime}-${n.endTime}-${n.text1}`;s[o]||(s[o]=[]),s[o].push(n)}),s})(v),F=t=>{D(I===t?null:t)},B=()=>{let t="";return f.map(s=>{s.Value==i&&(t=s.Name)}),t};return e.jsxs(h,{sx:{px:2},children:[e.jsx(q,{navLinks:[{title:"Exam Schedule",path:""}],rightActions:e.jsxs(h,{sx:{display:"flex",alignItems:"center"},children:[N!=="3"&&e.jsxs(h,{sx:{width:"130px",mr:2,marginRight:"5px"},children:[" ",e.jsx(ae,{Array:f,handleChange:V,label:"Select Standard",size:"small",variant:"outlined",defaultValue:i})]}),e.jsx(Q,{title:"Displays standardwise exam schedule.",children:e.jsx(X,{sx:{color:"white",backgroundColor:M[500],"&:hover":{backgroundColor:M[600]}},children:e.jsx(U,{})})})]})}),S&&S.length>0&&S.map((t,s)=>e.jsxs(h,{children:[e.jsx(h,{sx:{mt:1,cursor:"pointer",backgroundColor:"whitesmoke",padding:"2px",border:"1px solid White",borderRadius:"2px",display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},onClick:()=>F(s),children:e.jsxs(h,{sx:{display:"flex",alignItems:"center",pl:.5},children:[e.jsx(h,{sx:{width:"10px",height:"10px",p:.5,border:"1px solid black",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(m,{sx:{color:"Black",fontSize:"16px",fontWeight:"bold",p:1},children:I===s?"-":"+"})}),e.jsxs(h,{sx:{display:"flex"},children:[e.jsx(m,{variant:"h6",sx:{color:"red",ml:1},children:e.jsx("b",{children:t.Text1})}),e.jsx(m,{variant:"h6",sx:{ml:1},children:e.jsxs("b",{children:[_(t.Text3)," To ",_(t.Text4)]})})]})]})}),I===s&&e.jsx(h,{sx:{background:"white",p:1},children:k?e.jsx(Z,{}):e.jsx(ee,{component:te,sx:{width:"100%",overflowX:"auto"},children:e.jsxs(se,{sx:{minWidth:640},children:[e.jsx(ne,{sx:{background:"#19bed4","& > *":{color:"white",fontWeight:"bold",textAlign:"center"}},children:e.jsxs($,{sx:{"& > *":{borderBottom:"1px solid white",textAlign:"center",color:"white"},"& > :not(:first-of-type)":{borderLeft:"1px solid white",color:"white",textAlign:"center"}},children:[e.jsx(a,{sx:{width:"14%",textAlign:"left",pl:1,color:"white"},children:"Date"}),e.jsx(a,{sx:{width:"10%",textAlign:"center"},children:"Time"}),e.jsx(a,{sx:{width:"6%",textAlign:"center"},children:"Duration"}),i==="0"&&E.map((n,o)=>e.jsx(a,{sx:{textAlign:"center",p:1},children:n},o)),i!=="0"&&e.jsx(a,{sx:{width:"8%",textAlign:"center"},children:"Subject"}),i!=="0"&&e.jsx(a,{sx:{width:"20%",textAlign:"center"},children:"Description"})]})}),e.jsxs(re,{children:[Object.keys(R).map((n,o)=>{const l=R[n].filter(r=>r.text1===t.Text2),[u,p,b,g]=n.split("-"),d=new Set;return l.length>0?e.jsxs($,{sx:{"& > *":{textAlign:"center",pl:0,pb:0,py:1}},children:[e.jsx(a,{sx:{textAlign:"left",pl:1,py:1},children:d.has(u)?"":u}),e.jsx(a,{sx:{textAlign:"center",py:1},children:K(p,b)||"-"}),e.jsx(a,{sx:{textAlign:"center",py:1},children:W(p,b)||"-"}),i==="0"?E.map(r=>e.jsxs(a,{sx:{textAlign:"center",whiteSpace:"pre-line",py:1},children:[l.filter(c=>c.Standard_Name===r).map((c,j,P)=>e.jsxs("p",{children:[e.jsx("div",{children:c.header||"-"}),j!==P.length-1&&e.jsx("div",{style:{borderTop:"1px solid grey",margin:"5px "}})]},j)),l.filter(c=>c.Standard_Name===r).length===0&&"-"]},`${r}-${o}`)):e.jsxs(e.Fragment,{children:[e.jsx(a,{sx:{textAlign:"center",py:1},children:l.filter(r=>r.Standard_Name).map((r,c,j)=>e.jsxs("p",{children:[e.jsx("div",{children:r.header||"-"}),c!==j.length-1&&e.jsx("div",{style:{borderTop:"1px solid grey",margin:"4px 0"}})]},c))}),e.jsx(a,{sx:{textAlign:"center",py:1},children:l.length>0?l.map((r,c,j)=>e.jsxs("p",{children:[e.jsx("div",{children:r.Description||"-"}),c!==j.length-1&&e.jsx("div",{style:{borderTop:"1px solid grey",margin:"4px 0"}})]},c)):"-"})]})]},o):null}),e.jsxs($,{children:[i==="0"&&e.jsx(a,{colSpan:3,sx:{py:1},children:e.jsx("b",{children:"Instructions : "})}),i!=="0"&&e.jsx(a,{colSpan:3,sx:{py:1},children:e.jsxs(m,{sx:{color:"darkblue"},children:[e.jsx("b",{children:"Instructions : "}),x[B()]==null?"":x[B()][t.Text2]]})}),i==="0"?E.map(n=>e.jsx(a,{sx:{textAlign:"center",py:1},children:e.jsx(m,{sx:{color:"#223354"},children:x[n]&&x[n][t.Text2]||"-"})},n)):e.jsx(a,{colSpan:3,sx:{textAlign:"center",py:1},children:e.jsx(m,{sx:{color:"#223354"},children:x[i]&&x[i][t.Text2]})})]})]})]})})})]},s)),!k&&S.length===0&&e.jsx(m,{variant:"body1",sx:{textAlign:"center",marginTop:4,backgroundColor:"#324b84",padding:1,borderRadius:2,color:"white"},children:e.jsx("b",{children:"No exam has been scheduled."})})]})};export{de as default};
