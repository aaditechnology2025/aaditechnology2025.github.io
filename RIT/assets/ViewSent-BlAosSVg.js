import{q as c,v as r,r as S,j as t,m as n}from"./index-CpZD2H93.js";import{C as I}from"./Card25-DXrs2Q1L.js";import{P as g}from"./PageHeader-C9ChZO91.js";import"./BackButton-D8aQMrwN.js";import"./CardStyle-CBuNm0_N.js";import"./Card-B0aZ7mGs.js";const R=()=>{const d={From:"From",Scheduled_Date:"Sent Date",To:"To",SMS_Text:"SMS Text"};let{DetailsId:s,FromURL:a}=c();s=r(s),a=r(a);const[e,i]=S.useState(),m={asSchoolId:localStorage.getItem("localSchoolId"),asSMSId:`${s}`,asUserRoleId:sessionStorage.getItem("RoleId"),asUserId:sessionStorage.getItem("Id"),asAcademicYearId:sessionStorage.getItem("AcademicYearId")},l=()=>{n.post("SMS/GetSMSDetails",m).then(o=>o.data.GetSMSDetailsResult).then(o=>{i(o)})};return S.useEffect(()=>{l()},[]),t.jsxs(t.Fragment,{children:[t.jsx(g,{heading:"View Sent SMS",subheading:""}),e==null?null:t.jsx(I,{ViewDetail:d,From:e.UserName,To:e.DisplayText,Date:e.Date,Text:e.Subject,FromURL:a})]})};export{R as default};
