import{j as e,L as j,r as p,G as n,S as o,a as d,A as g,P as v,F as c,m as y}from"./index-DhuvOmyf.js";const x=[{title:"Basic",price:{yearly:99,monthly:9},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut sollicitudin turpis. Sed auctor, tellus eu lacinia efficitur, sem sem consequat risus.",features:["Includes essential features","24/7 customer support","Access to analytics dashboard"]},{title:"Pro",price:{yearly:199,monthly:29},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut sollicitudin turpis. Sed auctor, tellus eu lacinia efficitur, sem sem consequat risus.",features:["Includes all basic features","Advanced customization options","Priority customer support","Access to premium features"]},{title:"Enterprise",price:{yearly:399,monthly:49},description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut sollicitudin turpis. Sed auctor, tellus eu lacinia efficitur, sem sem consequat risus.",features:["Includes all Pro features","Dedicated account manager","Customized reporting and insights","Advanced security features","Access to exclusive resources"]}];function C(){return e.jsxs(j,{children:[e.jsx(b,{}),e.jsx(N,{})]})}const b=()=>{const[i,r]=p.useState("monthly"),l=["monthly","yearly"];return e.jsxs(e.Fragment,{children:[e.jsx(n,{glowing:"!-top-0",className:"py-32 text-center flex flex-col",children:e.jsx(o,{smallTitle:"Pricing",largeTitle:"Transparent Pricing Plans"})}),e.jsxs("div",{className:"space-y-20",children:[e.jsx(d,{children:e.jsx("div",{className:"toggle-plan-btns text-xl",children:l.map(s=>e.jsxs("div",{children:[e.jsx("button",{className:i===s?"text-black":"text-white",onClick:()=>r(s),children:s}),s===i&&e.jsx(w,{layoutId:"sup"})]},s))})}),e.jsx("div",{className:"grid grid-cols-3 gap-16",children:e.jsx(g,{children:x.map((s,t)=>e.jsx(d,{y:"10%",i:t,children:e.jsx(f,{featurePlan:i,data:s})},t))},i)})]})]})},f=({data:i,featurePlan:r})=>{const{title:l,price:s,description:t,features:u}=i;return e.jsxs(S,{children:[e.jsxs("div",{children:[e.jsx("h6",{children:l}),e.jsxs("h1",{className:"text-4xl",children:["$",s[r],e.jsxs("span",{className:"text-[#9ea0a9]",children:["/",r]})]}),e.jsx("p",{children:t})]}),e.jsxs(n,{overflowHidden:!0,glowing:"!blur-[80px] !top-[69%]",children:[u.map((h,m)=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"text-yellow-color text-2xl",children:e.jsx(v,{})}),e.jsx("span",{children:h})]},m)),e.jsx("button",{className:"glowing-btn py-3 mt-6",children:"Get Started"})]})]})},N=()=>e.jsxs(P,{children:[e.jsx(o,{smallTitle:"Transparent Plans",largeTitle:"Compare all available Plans",className:"text-center mx-auto"}),e.jsxs("div",{className:"mt-20",children:[e.jsxs(a,{className:"sticky top-0 bg-black-color",children:[e.jsx("div",{}),x.map(({title:i,description:r,price:l},s)=>e.jsxs("div",{className:"p-6",children:[e.jsx("h6",{children:i}),e.jsxs("h1",{className:"text-4xl",children:["$",l.monthly,e.jsx("span",{className:"text-[#9ea0a9]",children:"/mo"})]}),e.jsx("p",{children:r.slice(0,100)}),e.jsx("button",{className:"glowing-btn py-3 mt-6 w-full",children:"Get Started"})]},s))]}),e.jsxs("div",{className:"space-y-6 mt-8 ",children:[e.jsx("h2",{children:" title"}),e.jsxs("div",{className:"divide-y border-y border-light-gray",children:[e.jsxs(a,{className:"border-b-0",children:[e.jsx("div",{children:"asd"}),e.jsx("div",{children:"asd"}),e.jsx("div",{children:"asd"}),e.jsx("div",{children:"asd"})]}),e.jsxs(a,{className:"border-b-0",children:[e.jsx("div",{children:"asd"}),e.jsx("div",{children:"asd"}),e.jsx("div",{children:"asd"}),e.jsx("div",{children:"asd"})]}),e.jsxs(a,{className:"border-b-0",children:[e.jsx("div",{children:"asd"}),e.jsx("div",{children:"asd"}),e.jsx("div",{children:"asd"}),e.jsx("div",{children:"asd"})]})]})]})]})]}),a=c.div`
grid
grid-cols-4
divide-x
divide-light-gray
border-b
border-light-gray
`,P=c.div`
mt-40
`,w=c(y.span)`
absolute
left-0
w-full
h-full
bg-yellow-color
rounded-full
p-1
-z-10
`,S=c.div`
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
`;export{b as PricingSection,C as default};
