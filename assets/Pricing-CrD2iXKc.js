import{j as e,L as h,P as o,a as m,p,f as j,e as g,g as u}from"./index-BwhEYoDR.js";function N(){return e.jsxs(h,{children:[e.jsx(o,{glowing:!0}),e.jsx(b,{})]})}const b=()=>{function t(s){return isNaN(s)?s==="check"?e.jsx(u,{}):s==="unlimited"?"Unlimited":"":s}return e.jsxs("div",{children:[e.jsx(m,{smallTitle:"Transparent Plans",largeTitle:"Compare all available Plans",className:"text-center mx-auto"}),e.jsxs("div",{className:"mt-20",children:[e.jsxs(x,{className:"sticky top-0 bg-black-color",children:[e.jsx("div",{}),p.map(({title:s,description:a,price:i},r)=>e.jsxs("div",{className:"p-6",children:[e.jsx("h6",{children:s}),e.jsxs("h1",{className:"text-4xl",children:["$",i.monthly,e.jsx("span",{className:"text-[#9ea0a9] text-base",children:"/mo"})]}),e.jsx("p",{children:a.slice(0,100)}),e.jsx("button",{className:"glowing-btn py-3 mt-6 w-full",children:"Get Started"})]},r))]}),j.map(({title:s,featuresInfo:a},i)=>e.jsxs("div",{className:"mt-6",children:[e.jsx("h2",{className:"font-bold text-2xl p-4",children:s}),a.map(({featureTitle:r,cell1:l,cell2:n,cell3:c},d)=>e.jsx("div",{className:`border-light-gray ${d==0?"border-t":""}`,children:e.jsxs(x,{$icon:(l||n||c)==="check",$cells:!0,children:[e.jsx("h2",{children:r}),e.jsx("span",{children:t(l)}),e.jsx("span",{children:t(n)}),e.jsx("span",{children:t(c)})]})},d))]},i))]})]})},x=g.div`
grid
grid-cols-4
divide-x
divide-light-gray
border-b
border-light-gray
[&>span]:p-4
[&>span]:text-lg
[&>h2]:p-4
[&>h2]:text-lg
[&>h2]:text-gray-color
[&>span]:font-semibold
${({$cells:t})=>t?"[&>:not(:nth-child(1))]:flex [&>:not(:nth-child(1))]:justify-center":""}
    ${({$icon:t})=>t?"[&>span]:text-white [&>span]:text-2xl":""}
`;export{N as default};
