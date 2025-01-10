import{j as e,af as K,B as d,ag as Q,ah as Z,ai as N,aj as x,ak as ee,E as U,I as te,ap as se,aq as ne,r as n,u as ae,z as oe,c,hk as le,t as A,hl as re,mX as S,hm as ie,hn as ce,a0 as de,a1 as me,bd as ue,a3 as xe,T as B,G as p,o as L,a5 as pe,a6 as P,J as he,ho as ge,hp as Ie}from"./index-CpZD2H93.js";import{S as De}from"./SingleFile-VnBjWcb-.js";import{V as be}from"./Visibility-DDnH8LZ2.js";import"./CloudUpload-C2WsbpCZ.js";import"./Errormessage-DVJGTehf.js";function je({ItemList:o,clickView:h,clickDelete:g,HeaderArray:I}){return e.jsx("div",{children:e.jsx(K,{component:d,children:e.jsxs(Q,{"aria-label":"simple table",sx:{border:s=>`1px solid ${s.palette.divider}`},children:[e.jsx(Z,{children:e.jsx(N,{sx:{background:s=>s.palette.secondary.main,color:s=>s.palette.common.white},children:I.map((s,m)=>e.jsx(x,{sx:{textTransform:"capitalize",color:"white"},align:s.align?s.align:"left",children:e.jsx("b",{children:s.Header})},m))})}),e.jsx(ee,{children:o.map(s=>e.jsxs(N,{children:[e.jsx(x,{sx:{textTransform:"capitalize",textAlign:"left",paddingTop:"2.5px",paddingBottom:"2.5px"},children:s.Text1}),e.jsx(x,{sx:{textTransform:"capitalize",paddingTop:"2.5px",paddingBottom:"2.5px"},align:"center",children:e.jsx(U,{title:"View",children:e.jsx(be,{onClick:()=>h(s.Text1),sx:{color:"#223354","&:hover":{color:"#223354",bgcolor:"grey.300",cursor:"pointer"}}})})}),e.jsx(x,{sx:{textTransform:"capitalize",paddingTop:"2.5px",paddingBottom:"2.5px"},align:"center",children:e.jsx(te,{sx:{color:"#223354","&:hover":{color:"red",backgroundColor:se[100]}},onClick:()=>g(s.Id),children:e.jsx(U,{title:"Delete",children:e.jsx(ne,{})})})})]},s.Id))})]})})})}const ye=({Id:o,UserName:h,DocumentName:g,open:I,handleClose:s,RefreshList:m})=>{n.useState("");const a=ae(),E=[{Id:1,Header:"File Name"},{Id:2,Header:"View",align:"center"},{Id:3,Header:"Delete",align:"center"}],v=localStorage.getItem("SiteURL");v.split("/")[v.split("/").length-1];const R=["BMP","DOC","DOCX","JPG","JPEG","PDF","XLS","XLSX"],G=3e6,{showAlert:z,closeAlert:F}=n.useContext(oe),[r,C]=n.useState(""),[V,D]=n.useState("");n.useState("");const[H,y]=n.useState(""),i=Number(localStorage.getItem("localSchoolId")),M=localStorage.getItem("FolderName");sessionStorage.getItem("FinancialYearId");const T=Number(sessionStorage.getItem("AcademicYearId")),l=Number(localStorage.getItem("UserId"));c(t=>t.AddInvestmentDetailsDoc.ISCheckPublishUnpublishDocument);const b=c(t=>t.AddInvestmentDetailsDoc.ISSaveInvestmentDocument),u=c(t=>t.AddInvestmentDetailsDoc.ISGetAllDocumentsList);c(t=>t.AddInvestmentDetailsDoc.ISGetInvestmentDocumentFile);const k=c(t=>t.AddInvestmentDetailsDoc.ISDeleteInvestmentDocument),Y={asSchoolId:i,asFinancialYearId:1,asUserId:l},X={asSchoolId:i,asAcademicYearId:T,asFinancialYearId:1,asDocumentId:Number(o),asFileName:r==""?null:r,asUserId:l,asInsertedById:l,asDocumnetTypeId:1,asReportingUserId:0,asSaveFeature:"Investment Declarations",asFolderName:M,asBase64String:H},j={asSchoolId:i,asUserId:l,asFinancialYearId:1,asDocumentTypeId:1,asAcademicYearId:T,asDocumentId:Number(o),asReportingUserId:0,asLoginUserId:l},O={asSchoolId:i,asId:Number(o)};n.useEffect(()=>{a(le(Y))},[]);const W=()=>{let t=!1;!r||r===""?(D("Please select file to upload."),t=!0):D(""),t||(a(ge(X)),w())};n.useEffect(()=>{b!=""&&(A.success(b),a(re()),a(S(j)),m())},[b]),n.useEffect(()=>{a(S(j))},[o]),n.useEffect(()=>{a(ie(O))},[]);const J=t=>{C(t.Name),y(t.Value),D(t.ErrorMsg)},w=()=>{C(""),y("")},q=t=>{const $={asSchoolId:i,asFinancialYearId:1,asUpdatedById:l,asDocumentId:Number(t),asDocumnetTypeId:1};z({title:"Please Confirm",message:"Are you sure you want to delete this record?",variant:"warning",confirmButtonText:"Confirm",cancelButtonText:"Cancel",onCancel:()=>{F()},onConfirm:()=>{a(Ie($)),F()}})};n.useEffect(()=>{k!==""&&(A.success("Document deleted successfully."),a(ce()),a(S(j)),m())},[k]);const _=t=>{window.open(localStorage.getItem("SiteURL")+"RITeSchool//downloads//Investment Declarations/"+t)},f=()=>{w(),s()};return e.jsxs(de,{open:I,maxWidth:"md",fullWidth:!0,onClose:f,PaperProps:{sx:{borderRadius:"15px"}},children:[e.jsx(me,{sx:{bgcolor:"#223354"},children:e.jsx(ue,{onClick:f,sx:{color:"white",borderRadius:"7px",position:"absolute",top:"5px",right:"8px",cursor:"pointer","&:hover":{color:"red"}}})}),e.jsx(xe,{children:e.jsxs(d,{children:[e.jsx(B,{variant:"h2",sx:{pt:2,pl:1},children:"Documents"}),e.jsx(d,{sx:{background:"white",top:"1px",alignItems:"center",pl:1,pr:2,pt:2},children:e.jsxs(p,{container:!0,spacing:2,children:[e.jsx(p,{item:!0,xs:12,sm:4,md:4,lg:4,children:e.jsx(L,{fullWidth:!0,label:e.jsxs(e.Fragment,{children:["User Name ",e.jsx("span",{style:{color:"red"},children:"*"})]}),InputLabelProps:{shrink:!0},sx:{bgcolor:"#F0F0F0",width:"100%"},value:h,size:"medium",InputProps:{readOnly:!0}})}),e.jsx(p,{item:!0,xs:12,sm:4,md:4,lg:4,children:e.jsx(L,{fullWidth:!0,label:e.jsxs(e.Fragment,{children:["Document Name  ",e.jsx("span",{style:{color:"red"},children:"*"})]}),InputLabelProps:{shrink:!0},sx:{bgcolor:"#F0F0F0",width:"100%"},value:g,size:"medium",InputProps:{readOnly:!0}})}),e.jsx(p,{item:!0,xs:12,sm:4,md:4,lg:4,children:e.jsx(d,{sx:{display:"flex",alignItems:"center",width:"calc(100% + 1px)",position:"relative"},children:e.jsx(De,{ValidFileTypes:R,MaxfileSize:G,FileName:r,ChangeFile:J,FileLabel:"Upload Document ",width:"100%",height:"52px",FilePath:u.length>0?u.FileName:"",errorMessage:V,isMandatory:!0})})})]})})]})}),e.jsx(d,{sx:{backgroundColor:"white",pl:3.8,pr:3.8},children:u.length>0?e.jsx(je,{HeaderArray:E,ItemList:u,clickDelete:q,clickView:_}):e.jsx(B,{variant:"h6",align:"center",color:"blue",sx:{textAlign:"center",marginTop:1,backgroundColor:"#324b84",padding:1,borderRadius:2,color:"white"},children:"No record found."})}),e.jsxs(pe,{sx:{py:2,px:3},children:[e.jsx(P,{color:"error",onClick:f,children:"Cancel"}),e.jsx(P,{onClick:W,sx:{color:"green","&:hover":{color:"green",backgroundColor:he[100]}},children:"Upload"})]})]})};export{ye as default};
