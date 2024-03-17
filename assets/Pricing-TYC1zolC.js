import{j as s,L as m,P as h,h as o,f as p,d as j,p as g,M as u,k as f,g as N,l as b}from"./index-DWitmNqG.js";function P(){return s.jsxs(m,{children:[s.jsx(h,{glowing:!0}),s.jsx(y,{}),s.jsx(o,{}),s.jsx(p,{})]})}const y=()=>{function a(e){return isNaN(e)?e==="check"?s.jsx(b,{}):e==="unlimited"?"Unlimited":"":e}return s.jsxs("div",{children:[s.jsx(j,{smallTitle:"Transparent Plans",largeTitle:"Compare all available Plans",className:"text-center mx-auto"}),s.jsxs("div",{className:"mt-20",children:[s.jsxs(x,{className:"sticky top-0 bg-black-color max-md:grid-cols-3",children:[s.jsx("div",{className:"max-md:hidden"}),g.map(({title:e,description:t,price:r},i)=>s.jsxs("div",{className:"lg:p-6 p-3 space-y-2",children:[s.jsx("h6",{children:e}),s.jsxs("h2",{className:"text-3xl",children:["$",r.monthly,s.jsx("span",{className:"text-[#9ea0a9] text-base",children:"/mo"})]}),s.jsx("p",{children:t.slice(0,100)}),s.jsx(u,{className:"w-full !mt-8"})]},i))]}),f.map(({title:e,featuresInfo:t},r)=>s.jsxs("div",{className:"mt-6",children:[s.jsx("h2",{className:"font-bold text-xl p-4 max-md:text-center",children:e}),t.map(({featureTitle:i,cell1:l,cell2:n,cell3:c},d)=>s.jsx("div",{className:`border-light-gray ${d==0?"border-t":""}`,children:s.jsxs(x,{className:"max-md:grid-rows-2 max-md:grid-cols-3",$icon:(l||n||c)==="check",$cells:!0,children:[s.jsx("h2",{className:"max-md:col-span-3 max-md:text-center",children:i}),s.jsx("span",{children:a(l)}),s.jsx("span",{children:a(n)}),s.jsx("span",{children:a(c)})]})},d))]},r))]})]})},x=N.div`
grid
grid-cols-4
divide-x
divide-light-gray
border-b
border-light-gray
[&>span]:p-4
[&>span]:text-lg
[&>h2]:p-4
[&>h2]:text-gray-color
[&>span]:font-semibold
${({$cells:a})=>a?"[&>:not(:nth-child(1))]:flex [&>:not(:nth-child(1))]:justify-center":""}
    ${({$icon:a})=>a?"[&>span]:text-white [&>span]:text-xl":""}
`;export{P as default};
