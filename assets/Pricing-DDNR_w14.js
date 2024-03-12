import{j as e,L as h,S as m,F as o,P as p}from"./index-DQ_yGtv9.js";import{P as j,p as g,f as u}from"./PricingSection-C9kQqP7X.js";function P(){return e.jsxs(h,{children:[e.jsx(j,{glowing:!0}),e.jsx(b,{})]})}const b=()=>{function t(s){return isNaN(s)?s==="check"?e.jsx(p,{}):s==="unlimited"?"Unlimited":"":s}return e.jsxs(f,{children:[e.jsx(m,{smallTitle:"Transparent Plans",largeTitle:"Compare all available Plans",className:"text-center mx-auto"}),e.jsxs("div",{className:"mt-20",children:[e.jsxs(x,{className:"sticky top-0 bg-black-color",children:[e.jsx("div",{}),g.map(({title:s,description:i,price:r},a)=>e.jsxs("div",{className:"p-6",children:[e.jsx("h6",{children:s}),e.jsxs("h1",{className:"text-4xl",children:["$",r.monthly,e.jsx("span",{className:"text-[#9ea0a9] text-base",children:"/mo"})]}),e.jsx("p",{children:i.slice(0,100)}),e.jsx("button",{className:"glowing-btn py-3 mt-6 w-full",children:"Get Started"})]},a))]}),u.map(({title:s,featuresInfo:i},r)=>e.jsxs("div",{className:"mt-6",children:[e.jsx("h2",{className:"font-bold text-2xl p-4",children:s}),i.map(({featureTitle:a,cell1:l,cell2:n,cell3:c},d)=>e.jsx("div",{className:`border-light-gray ${d==0?"border-t":""}`,children:e.jsxs(x,{$icon:(l||n||c)==="check",$cells:!0,children:[e.jsx("h2",{children:a}),e.jsx("span",{children:t(l)}),e.jsx("span",{children:t(n)}),e.jsx("span",{children:t(c)})]})},d))]},r))]})]})},x=o.div`
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
`,f=o.div`
mt-40
`;export{P as default};
