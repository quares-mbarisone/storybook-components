import{j as q}from"./jsx-runtime-D_zvdyIk.js";const h=({label:s,size:k="normal",allCaps:v=!1,color:S,fontColor:B,backgroundColor:T="transparent"})=>q.jsx("span",{className:`${k} ${S} label`,style:{color:B,backgroundColor:T},children:v?s.toUpperCase():s});h.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:"'normal' | 'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"Label size",defaultValue:{value:"'normal'",computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"Capitalize all letters in Label",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'text-primary' | 'text-secondary' | 'text-tertiary'",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-tertiary'"}]},description:"Label text color"},fontColor:{required:!1,tsType:{name:"string"},description:"Label text color - but with a color picker!"},backgroundColor:{required:!1,tsType:{name:"string"},description:"Label background color with color picker!",defaultValue:{value:"'transparent'",computed:!1}}}};const z={title:"UI/labels/MyLabel",component:h,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select"},fontColor:{control:"color"}}},e={args:{label:"Basic Label"}},a={args:{label:"All Caps Label",allCaps:!0}},r={args:{label:"Secondary Label",color:"text-secondary"}},o={args:{label:"Custom Color Label",fontColor:"#ff00b0"}},l={args:{label:"Custom Background Color Label",backgroundColor:"#f6cde9"}};var t,n,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: 'Basic Label'
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var u,i,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'All Caps Label',
    allCaps: true
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var d,m,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Label',
    color: 'text-secondary'
  }
}`,...(b=(m=r.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var C,g,f;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Custom Color Label',
    fontColor: '#ff00b0'
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,L,x;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Custom Background Color Label',
    backgroundColor: '#f6cde9'
  }
}`,...(x=(L=l.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};const A=["Basic","AllCaps","Secondary","CustomColor","CustomBackgroundColor"];export{a as AllCaps,e as Basic,l as CustomBackgroundColor,o as CustomColor,r as Secondary,A as __namedExportsOrder,z as default};
