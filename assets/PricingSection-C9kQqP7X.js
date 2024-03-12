import{r as f,j as e,G as u,S as a,b as n,A as h,P as m,F as o,m as T}from"./index-DQ_yGtv9.js";const p=[{title:"Basic",price:{yearly:99,monthly:9},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut sollicitudin turpis. Sed auctor, tellus eu lacinia efficitur, sem sem consequat risus.",features:["Includes essential features","24/7 customer support","Access to analytics dashboard"]},{title:"Pro",price:{yearly:199,monthly:29},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut sollicitudin turpis. Sed auctor, tellus eu lacinia efficitur, sem sem consequat risus.",features:["Includes all basic features","Advanced customization options","Priority customer support","Access to premium features"]},{title:"Enterprise",price:{yearly:399,monthly:49},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut sollicitudin turpis. Sed auctor, tellus eu lacinia efficitur, sem sem consequat risus.",features:["Includes all Pro features","Dedicated account manager","Customized reporting and insights","Advanced security features","Access to exclusive resources"]}],v=[{title:"Core Services",featuresInfo:[{featureTitle:"Feature Title Text",cell1:10,cell2:100,cell3:"unlimited"},{featureTitle:"Feature Title Text",cell1:"check",cell2:"check",cell3:"check"},{featureTitle:"Feature Title Text",cell1:!1,cell2:"check",cell3:"check"},{featureTitle:"Feature Title Text",cell1:!1,cell2:"check",cell3:"check"},{featureTitle:"Feature Title Text",cell1:!1,cell2:!1,cell3:"check"}]},{title:"Analytics",featuresInfo:[{featureTitle:"Feature Title Text",cell1:10,cell2:100,cell3:"unlimited"},{featureTitle:"Feature Title Text",cell1:"check",cell2:"check",cell3:"check"},{featureTitle:"Feature Title Text",cell1:!1,cell2:"check",cell3:"check"},{featureTitle:"Feature Title Text",cell1:!1,cell2:"check",cell3:"check"},{featureTitle:"Feature Title Text",cell1:!1,cell2:!1,cell3:"check"}]},{title:"Customizability",featuresInfo:[{featureTitle:"Feature Title Text",cell1:10,cell2:100,cell3:"unlimited"},{featureTitle:"Feature Title Text",cell1:"check",cell2:"check",cell3:"check"},{featureTitle:"Feature Title Text",cell1:!1,cell2:"check",cell3:"check"},{featureTitle:"Feature Title Text",cell1:!1,cell2:"check",cell3:"check"},{featureTitle:"Feature Title Text",cell1:!1,cell2:!1,cell3:"check"}]}];function F({glowing:i}){const[t,s]=f.useState("monthly"),r=["monthly","yearly"];return e.jsxs(e.Fragment,{children:[i?e.jsx(u,{glowing:"!-top-0",className:"py-40 text-center flex flex-col",children:e.jsx(a,{smallTitle:"Pricing",largeTitle:"Transparent Pricing Plans"})}):e.jsx(a,{smallTitle:"Pricing",largeTitle:"Transparent Pricing Plans",className:"text-center mx-auto mb-20"}),e.jsxs("div",{className:"space-y-20",children:[e.jsx(n,{children:e.jsx("div",{className:"toggle-plan-btns text-xl",children:r.map(l=>e.jsxs("div",{children:[e.jsx("button",{className:t===l?"text-black":"text-white",onClick:()=>s(l),children:l}),l===t&&e.jsx(y,{layoutId:"sup"})]},l))})}),e.jsx("div",{className:"grid grid-cols-3 gap-16",children:e.jsx(h,{children:p.map((l,c)=>e.jsx(n,{y:"10%",i:c,children:e.jsx(g,{featurePlan:t,data:l})},c))},t)})]})]})}const g=({data:i,featurePlan:t})=>{const{title:s,price:r,description:l,features:c}=i;return e.jsxs(j,{children:[e.jsxs("div",{children:[e.jsx("h6",{children:s}),e.jsxs("h1",{className:"text-4xl",children:["$",r[t],e.jsxs("span",{className:"text-[#9ea0a9]",children:["/",t]})]}),e.jsx("p",{children:l})]}),e.jsxs(u,{overflowHidden:!0,glowing:"!blur-[80px] !top-[69%]",children:[c.map((d,x)=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-color text-2xl",children:e.jsx(m,{})}),e.jsx("span",{children:d})]},x)),e.jsx("button",{className:"glowing-btn py-3 mt-6",children:"Get Started"})]})]})},y=o(T.span)`
absolute
left-0
w-full
h-full
bg-yellow-color
rounded-full
p-1
-z-10
`,j=o.div`
rounded-2xl 
border
border-light-gray
hover:border-yellow-color
divide-y
h-fit
divide-light-gray
transition-all
duration-500
[&>div]:p-10
[&>div]:flex 
[&>div]:flex-col
[&>div]:gap-4
[&>div]:!items-stretch
`;export{F as P,v as f,p};
