import{j as e,af as c,B as p,ag as h,ah as j,ai as o,aj as l,ak as g,E as i,I as T,ap as b,aq as m}from"./index-CpZD2H93.js";import{V as f}from"./Visibility-DDnH8LZ2.js";function k({ItemList:r,clickView:s,clickDelete:t,HeaderArray:n,isDeletePermission:d}){return e.jsx("div",{children:e.jsx(c,{component:p,children:e.jsxs(h,{"aria-label":"simple table",sx:{border:a=>`1px solid ${a.palette.divider}`},children:[e.jsx(j,{children:e.jsx(o,{sx:{background:a=>a.palette.secondary.main,color:a=>a.palette.common.white},children:n.map((a,x)=>e.jsx(l,{sx:{textTransform:"capitalize",color:"white"},align:a.align?a.align:"left",children:e.jsx("b",{children:a.Header})},x))})}),e.jsx(g,{children:r.map(a=>e.jsxs(o,{children:[e.jsx(l,{sx:{textTransform:"capitalize",textAlign:"left",paddingTop:"2.5px",paddingBottom:"2.5px"},children:a.Text2}),e.jsx(l,{sx:{textTransform:"capitalize",paddingTop:"2.5px",paddingBottom:"2.5px"},align:"center",children:e.jsx(i,{title:"View",children:e.jsx(f,{onClick:()=>s(a.Text2),sx:{color:"#223354","&:hover":{color:"#223354",bgcolor:"grey.300",cursor:"pointer"}}})})}),e.jsx(l,{sx:{textTransform:"capitalize",paddingTop:"2.5px",paddingBottom:"2.5px"},align:"center",children:e.jsx(T,{sx:{color:"#223354","&:hover":{color:"red",backgroundColor:b[100]}},disabled:d,onClick:()=>t(a.Text1),children:e.jsx(i,{title:"Delete",children:e.jsx(m,{})})})})]},a.Id))})]})})})}export{k as U};
