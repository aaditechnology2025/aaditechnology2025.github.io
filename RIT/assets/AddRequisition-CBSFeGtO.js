import{j as t,af as kt,B as y,ag as wt,ah as vt,ai as fe,aj as v,ak as At,ap as A,o as Z,bB as Et,bC as Nt,E as D,aq as Tt,u as Gt,A as Mt,q as Lt,v as Ht,r as s,c as r,jZ as Pt,j_ as Ut,j$ as Qt,k0 as Bt,k1 as Ot,k2 as $t,k3 as zt,C as Xt,n as Vt,G as E,bI as Wt,a8 as _t,I,bd as J,dk as Yt,F as Ce,H as Ft,bl as z,J as Se,K as Kt,bH as Jt,aH as p,av as Zt,T as je,l as es,bs as be,a0 as Re,a1 as qe,a3 as ye,k4 as De,t as ke,a9 as ts}from"./index-CpZD2H93.js";import{d as ss}from"./AddCircle-BWwMsra3.js";import{d as is}from"./RestartAlt-0rWnjZgh.js";import{d as as}from"./Send-deSjc6sZ.js";import{D as ns}from"./index-vlTKwxOR.js";import{R as os}from"./Requisioneditlist-DwbfLHGT.js";function rs({ItemList:l,HeaderArray:X,clickDelete:n,onTextChange2:V}){const c=(i,u)=>{const k=i.target.value.replace(/[^0-9.]/g,""),x=l.map(h=>h.ItemID===u.ItemID?{...h,Text3:k}:h);V(x)};return t.jsx(kt,{component:y,children:t.jsxs(wt,{"aria-label":"simple table",sx:{border:i=>`1px solid ${i.palette.grey[300]}`},children:[t.jsx(vt,{sx:{overflow:"auto"},children:t.jsx(fe,{sx:{background:i=>i.palette.secondary.main,color:i=>i.palette.common.white},children:X.map((i,u)=>t.jsx(v,{sx:{textTransform:"capitalize",color:k=>k.palette.common.white,py:1},children:t.jsx("div",{style:{display:"flex",alignItems:"left",gap:1,justifyContent:i.Header.includes("Remark Template")?"flex-start":"left"},children:t.jsx("b",{children:i.Header})})},u))})}),t.jsx(At,{children:l.map(i=>t.jsxs(fe,{children:[t.jsx(v,{sx:{textTransform:"capitalize",textAlign:"left",color:i.ItemStatus==="Denied"?A[500]:""},children:i.ItemCode}),t.jsx(v,{sx:{textTransform:"capitalize",textAlign:"left",color:i.ItemStatus==="Denied"?A[500]:""},children:i.ItemName}),t.jsx(v,{sx:{textTransform:"capitalize",textAlign:"left",color:i.ItemStatus==="Denied"?A[500]:""},children:i.CurrentStock}),t.jsxs(v,{sx:{textTransform:"capitalize",textAlign:"left",color:i.ItemStatus==="Denied"?A[500]:""},children:[t.jsx(Z,{label:t.jsx("span",{children:t.jsx("span",{style:{color:"red"},children:"*"})}),size:"small",id:"outlined-basic",value:i.Text3,variant:"outlined",onChange:u=>c(u,i),sx:{width:"100px",height:"1px"}}),"     ",t.jsx(Et,{value:i.UOMUnit,sx:{width:"100px",height:"37px"},disabled:!0,children:t.jsx(Nt,{value:i.UOMUnit,children:i.UOMUnit})})]}),t.jsx(v,{sx:{textTransform:"capitalize",py:1,textAlign:"left"},align:"left",children:t.jsx(D,{title:"Delete",children:t.jsx(Tt,{onClick:()=>n(i.ItemID),sx:{ml:1,color:i.ItemStatus==="Denied"?A[500]:"#223354","&:hover":{color:"red",backgroundColor:A[100]}}})})})]},i.ItemID))})]})})}const ps=()=>{const l=Gt(),X=Mt();let{asRequisitionId:n}=Lt();n=Ht(n);const V=Number(sessionStorage.getItem("AcademicYearId")),c=Number(localStorage.getItem("localSchoolId")),i=Number(localStorage.getItem("UserId")),[u,k]=s.useState(),[x,h]=s.useState([]),[ls,we]=s.useState([]),[ds,ee]=s.useState(0),[N,te]=s.useState(""),[P,ve]=s.useState();s.useState();const[T,f]=s.useState(""),[G,M]=s.useState(""),[Ae,C]=s.useState(""),[Ee,S]=s.useState(""),[Ne,j]=s.useState(""),[se,Te]=s.useState(""),[d,g]=s.useState([]),[ie,L]=s.useState(""),[Ge,w]=s.useState(""),[Me,ae]=s.useState(""),[Le,b]=s.useState(""),[U,ne]=s.useState(),[He,W]=s.useState(!1),[Pe,Ue]=s.useState(""),[oe,Qe]=s.useState(""),[Be,re]=s.useState(""),[_,Oe]=s.useState(!1),[$e,le]=s.useState(!1),[R,ze]=s.useState(20),[Q,de]=s.useState(1),Xe=[20,50,100,200],B=r(e=>e.SliceAddRequisition.ISGetItemCategory),H=r(e=>e.SliceAddRequisition.IsGetAddItemList),Y=r(e=>e.SliceAddRequisition.ISSaveRequisition),O=r(e=>e.SliceAddRequisition.ISlistGetRequisitionName),Ve=(O==null?void 0:O.length)>0?O.map(e=>e.RequisitionID):0,$=r(e=>e.SliceAddRequisition.ISGetNewRequisitionValidateItemQuantity),We=r(e=>e.SliceAddRequisition.ISCanCreateGenralRequisition),_e=r(e=>e.SliceAddRequisition.ISCanSendRequisition),F=r(e=>e.SliceAddRequisition.ISCountRequisitionList),m=r(e=>e.SliceAddRequisition.ISGetRequisitionDetails),ce=r(e=>e.SliceAddRequisition.ISGetRequisitionDetails1),ue=r(e=>e.SliceAddRequisition.ISGetRequisitionDetails2),Ye=ue.length>0?ue[0].Is_General:null,Fe=r(e=>e.SliceAddRequisition.Loading),Ke=r(e=>e.SliceAddRequisition.ISGetItemImage.ImageUrls);[...new Set(Y.map(e=>e.ItemName))];const Je=m.map(e=>e.Text3),Ze={asSchoolId:c},et={asSchoolId:c,asName:N,asItemCategoryId:u,asStartIndex:(Q-1)*R,asEndIndex:Q*R,asSortExp:"ORDER BY ItemName"},tt={asSchoolId:c,asItemId:Number(se)},st={asSchoolId:c,asUserId:i},it={asSchoolId:c,asUserId:i,asAcademicYearId:V},at=[{Id:1,Header:"Item Code"},{Id:2,Header:"Item Name"},{Id:3,Header:"Current Stock"},{Id:4,Header:"Item Quantity"},{Id:8,Header:"Delete"}],nt=[{Id:1,Header:"Status Changed by"},{Id:2,Header:"Request Status"},{Id:3,Header:"Date"}];s.useEffect(()=>{const a=(()=>{let o="<RequisitionItems>";return d.map(q=>{(q.ItemID==P||n)&&(o+='<RequisitionItems ItemID="'+q.ItemID+'" UOM="0" ItemQty=" '+q.Text3+' " ItemOrgQty=" '+q.Text3+' " />')}),o=o+"</RequisitionItems>",o})();Qe(a)},[d]),s.useEffect(()=>{const a=(()=>{let o='<ArrayOfRequisitionData xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">';return d.map(q=>{o=o+"<RequisitionData><ItemId>"+q.ItemID+"</ItemId><Quantity>"+q.Text3+"</Quantity></RequisitionData>"}),o=o+"</ArrayOfRequisitionData>",o})();Ue(a)},[d]);const ot={asSchoolId:c,asQuantityDetailsXML:Pe},rt={asSchoolId:c,asRequisitionId:Number(n),asMode:"Edit"};s.useEffect(()=>{l(Pt(rt))},[n]);const xe=(()=>{let e=[];return d.forEach(a=>{e.push(a.ItemName)}),e.join(", ")})(),lt=()=>{let e=!1,a=[];const o={asSchoolId:c,asRequisitionId:Number(n)?Number(n):0,asUserId:i,asRequisitionName:T,asRequisitionDesc:G,asAction:"save",asRequisitionItemDetailsXml:oe,asIsGeneral:_};U==null||U==""?(b(`Quantity should be greater than zero for item ${xe}.`),e=!0):b(""),T===""?(C("Requisition name should not be blank."),e=!0):C(""),G===""?(S("Rquisition description should not be blank."),e=!0):S(""),a.length>0?(j(a.join(`
`)),e=!0):j(""),$.Codes!=null?(w(`Item quantity should not be greater than current stock for item with code : ${$.Codes}`),e=!0):w(""),e||(l(De(o)),ke.success("Requisition is saved (draft) successfully."))},dt=()=>{let e=!1,a=[];const o={asSchoolId:c,asRequisitionId:Number(n)?Number(n):Ve.toString(),asUserId:i,asRequisitionName:T,asRequisitionDesc:G,asAction:"send",asRequisitionItemDetailsXml:oe,asIsGeneral:_};U==null||U==""?(b(`Quantity should be greater than zero for item ${xe}.`),e=!0):b(""),T===""?(C("Requisition name should not be blank."),e=!0):C(""),G===""?(S("Rquisition description should not be blank."),e=!0):S(""),a.length>0?(j(a.join(`
`)),e=!0):j(""),$.Codes!==null?(w(`Item quantity should not be greater than current stock for item with code : ${$.Codes}`),e=!0):w(""),_e==!1?(ae("You can not send requisition since approval level is not configured or user is not available in approval designation."),e=!0):ae(""),e||(l(De(o)),ke.success("Requisition is sent successfully."),X("/RITeSchool/Teacher/Requisition",{state:{fromInternal:!0}}),h([]),g([]),C(""),S(""),j(""),ee(0),f(""),M(""),L(""),w(""),b(""))},me=()=>{N==""?(re("Item Code / Name should not be blank."),W(!1)):(h(H),W(!0),le(x.length===0),re(""))};s.useEffect(()=>{N!==""&&He==!0&&h(H)},[H]);const ct=e=>{te(e)},ut=()=>{te("")},[xt,he]=s.useState(!1),mt=()=>{he(!0)},ge=()=>{he(!1)},ht=e=>{Oe(e.target.checked)},gt=e=>{ve(e),L("")},It=[{id:"itemCode",label:"Item Code",selector:e=>e.ItemCode,renderCell:e=>e.ItemCode},{id:"itemName",label:"Item Name",selector:e=>e.ItemName,renderCell:e=>e.ItemName},{id:"currentStock",label:"Current Stock",selector:e=>e.CurrentStock,renderCell:e=>e.CurrentStock},{id:"category",label:"Category",selector:e=>e.ItemCategoryName,renderCell:e=>e.ItemCategoryName},{id:"ImageCount",label:"Item Image",selector:e=>e.ImageCount,renderCell:e=>e.ImageCount>0?t.jsx(D,{title:"View",children:t.jsx(I,{onClick:()=>Te(e.ItemID),sx:{padding:"3px 8px",margin:"0px 15px"},children:t.jsx(ts,{onClick:mt,sx:{color:"#223354",display:"flex",alignItems:"Center"}})})}):t.jsx("div",{children:" "})},{id:"Add Item",label:"Add Item",renderCell:e=>t.jsx(D,{title:"Add",children:t.jsx(I,{onClick:()=>gt(e.ItemID),sx:{padding:"3px 8px",margin:"0px 12px"},children:t.jsx(ss,{sx:{color:"#223354",display:"flex",alignItems:"Center"}})})})}],pt=e=>{k(e)},ft=()=>{h([]),g([]),g(m),C(""),S(""),j(""),ee(0),f(""),M(""),L(""),w(""),b(""),W(!1),le(!1);const e=m[0];e&&(f(e.RequisitionName),M(e.RequisitionDescription))};s.useEffect(()=>{we(Y)},[Y]);const Ct=e=>{g(e),ne(e.map(a=>a.Text3))},St=e=>{e.target.value.length<=40&&f(e.target.value)},jt=e=>{e.target.value.length<=500&&M(e.target.value)};s.useEffect(()=>{B.length>0&&k(B[0].Value)},[B]),s.useEffect(()=>{l(Ut(Ze))},[]),s.useEffect(()=>{d.length>0&&l(Qt(ot))},[d]),s.useEffect(()=>{l(Bt(st))},[]),s.useEffect(()=>{l(Ot(it))},[]),s.useEffect(()=>{u!=null&&l($t(et))},[u,Q,R,N]),s.useEffect(()=>{l(zt(tt))},[se]),s.useEffect(()=>{if(P){const e=H.find(a=>a.ItemID===P);e&&g(a=>a.some(o=>o.ItemID===e.ItemID)?(L("Item already exists."),a):[...a,e])}},[P,H,ie]),s.useEffect(()=>{if(m!=""&&n){const e=m[0];e&&(f(e.RequisitionName),M(e.RequisitionDescription))}},[m,n]),s.useEffect(()=>{n&&g(m)},[n,m]),s.useEffect(()=>{n&&ne(Je)},[n,m]),s.useEffect(()=>{n==null&&(g([]),f(""),f(""))},[n]);const bt=e=>{g(d.filter(a=>a.ItemID!==e)),L(""),C(""),S(""),j(""),b("")},Rt=e=>{de(e)},qt=e=>{ze(parseInt(e.target.value,10)),de(1)};Math.min(Q*R,F.TotalCount);const yt=Math.ceil(F.TotalCount/R),[K,Ie]=s.useState(null),Dt=e=>{Ie(e)},pe=()=>{Ie(null)};return t.jsxs(y,{sx:{px:2},children:[t.jsx(Xt,{navLinks:[{title:"Requisition",path:"/RITeSchool/Teacher/Requisition"},{title:"Requisition Details",path:"/RITeSchool/Teacher/AddRequisition"}],rightActions:t.jsxs(Vt,{direction:{xs:"column",sm:"row"},justifyContent:"space-between",alignItems:"right",gap:1,sx:{mt:{xs:0,sm:0},flexWrap:{xs:"nowrap",sm:"nowrap"}},children:[t.jsx(E,{item:!0,xs:12,sm:6,display:"flex",justifyContent:{xs:"flex-start",sm:"flex-start"},children:t.jsx(Wt,{sx:{minWidth:"250px"},ItemList:B,onChange:pt,label:"Category",defaultValue:u,disabled:x.length>0,size:"small"})}),t.jsx(E,{item:!0,xs:12,sm:6,display:"flex",justifyContent:{xs:"flex-start",sm:"flex-start"},children:t.jsx(Z,{sx:{minWidth:{xs:"40vw",sm:"15vw"}},fullWidth:!0,label:t.jsxs("span",{children:["Item Code/Name",t.jsx("span",{style:{color:"red"},children:"*"})]}),value:N,variant:"outlined",size:"small",onKeyDown:e=>{(e.key==="Enter"||e.key==="Tab")&&me()},disabled:x.length>0,onChange:e=>ct(e.target.value),InputProps:{endAdornment:t.jsx(_t,{position:"end",children:t.jsx(I,{onClick:ut,edge:"end",disabled:x.length>0,children:t.jsx(J,{})})})}})}),t.jsxs(E,{item:!0,xs:12,sm:6,gap:1,display:"flex",justifyContent:{xs:"flex-start",sm:"flex-end"},children:[t.jsx(I,{onClick:me,disabled:x.length>0,sx:{background:e=>e.palette.primary.main,color:"white","&:hover":{backgroundColor:e=>e.palette.primary.dark},"&.Mui-disabled":{color:e=>e.palette.action.disabled}},children:t.jsx(Yt,{})}),t.jsx(D,{title:"Here you can create, modify, view, approve, denied requisition.",children:t.jsx(I,{sx:{color:"white",backgroundColor:Ce[500],mr:-1,":hover":{backgroundColor:Ce[600]}},children:t.jsx(Ft,{})})}),t.jsx(D,{title:"Reset",children:x.length>0&&t.jsx(I,{onClick:ft,sx:{color:"white",backgroundColor:z[500],"&:hover":{backgroundColor:z[600]}},children:t.jsx(is,{})})}),d.length>0&&t.jsx(D,{title:"Save",children:t.jsx(I,{onClick:lt,sx:{color:"white",backgroundColor:Se[500],":hover":{backgroundColor:Se[600]}},children:t.jsx(Kt,{})})}),d.length>0&&t.jsx(D,{title:"Send Requisition",children:t.jsx(I,{onClick:dt,sx:{color:"white",backgroundColor:z[500],"&:hover":{backgroundColor:z[600]}},children:t.jsx(as,{})})})]})]})}),t.jsxs(y,{display:"flex",alignItems:"center",children:[t.jsx(E,{item:!0,xs:12,sm:3,children:t.jsx(Z,{sx:{minWidth:{xs:"40vw",sm:"15vw"},"& .MuiInputBase-root":{height:"35px",color:"black"},"& .MuiInputLabel-root":{top:"-6px",color:"black"}},label:"Is General Requisition ? :",disabled:!0})}),We=="Y"||Ye==!0?t.jsx(Jt,{checked:_,onChange:ht,sx:{mr:1,"& .MuiSvgIcon-root":{fontSize:30}}}):t.jsx("span",{children:" "})]}),t.jsx("br",{}),t.jsx(p,{Error:Ae}),t.jsx(p,{Error:Ee}),t.jsx(p,{Error:Ne}),t.jsx(p,{Error:Le}),t.jsx(p,{Error:ie}),t.jsx(p,{Error:Ge}),t.jsx(p,{Error:Me}),t.jsx(p,{Error:Be}),t.jsx("br",{}),x.length>0?t.jsxs(y,{mb:1,sx:{p:2,background:"white"},children:[t.jsx(ns,{columns:It,data:x,isPagination:!1}),t.jsx("br",{}),F.TotalCount>R?t.jsx(Zt,{rowsPerPage:R,ChangeRowsPerPage:qt,rowsPerPageOptions:Xe,PageChange:Rt,pagecount:yt}):t.jsx("span",{})]}):$e&&t.jsx(je,{variant:"body1",sx:{textAlign:"center",marginTop:4,backgroundColor:"#324b84",padding:1,borderRadius:2,color:"white"},children:t.jsx("b",{children:"No record found."})}),d.length>0?t.jsxs(y,{mb:1,sx:{p:2,background:"white"},children:[Fe&&t.jsx(es,{}),t.jsx(rs,{ItemList:d,HeaderArray:at,clickDelete:bt,onTextChange2:Ct}),t.jsx("br",{}),t.jsx(E,{item:!0,xs:12,children:t.jsx(be,{label:t.jsxs("span",{children:["Requisition Name ",t.jsx("span",{style:{color:"red"},children:"*"})]}),multiline:!0,value:T,onChange:St,fullWidth:!0})}),t.jsx("br",{}),t.jsx(E,{item:!0,xs:12,children:t.jsx(be,{label:t.jsxs("span",{children:["Requisition Description ",t.jsx("span",{style:{color:"red"},children:"*"})]}),multiline:!0,value:G,onChange:jt,fullWidth:!0})})]}):null,ce!=""&&n!==void 0?t.jsx(y,{mb:1,sx:{p:2,background:"white"},children:t.jsx(os,{ItemList:ce,HeaderArray:nt})}):t.jsx("span",{}),t.jsxs(y,{sx:{display:"flex",justifyContent:"flex-end",mt:2,minHeight:"auto",minWidth:"300px"},children:[t.jsxs(Re,{open:xt,onClose:ge,fullWidth:!0,maxWidth:"sm",PaperProps:{sx:{borderRadius:"15px"}},children:[t.jsx(qe,{sx:{bgcolor:"#223354",position:"relative"},children:t.jsx(J,{onClick:ge,sx:{color:"white",borderRadius:"7px",position:"absolute",top:"5px",right:"8px",cursor:"pointer","&:hover":{color:"red"}}})}),t.jsx(je,{variant:"h3",sx:{pt:1,pl:2},children:"Item Images"}),t.jsx(ye,{children:Ke.map((e,a)=>t.jsx("img",{src:e.ImageUrl,alt:`Image ${a+1}`,style:{width:"100px",margin:"5px",cursor:"pointer"},onClick:()=>Dt(e.ImageUrl)},a))})]}),t.jsxs(Re,{open:!!K,onClose:pe,fullWidth:!0,maxWidth:"sm",PaperProps:{sx:{borderRadius:"15px"}},children:[t.jsx(qe,{sx:{bgcolor:"#223354",position:"relative"},children:t.jsx(J,{onClick:pe,sx:{color:"white",borderRadius:"7px",position:"absolute",top:"5px",right:"8px",cursor:"pointer","&:hover":{color:"red"}}})}),t.jsx(ye,{children:K&&t.jsx("img",{src:K,alt:"Enlarged view",style:{width:"100%",height:"auto",paddingTop:"7px"}})})]})]})]})};export{ps as default};
