import{h as p,o as r,c as i,k as n,e as c,a as l,A as d,a0 as h,a1 as f,a2 as v,a3 as g,a4 as y,a5 as b,a6 as w,a7 as k,a8 as x,a9 as A,aa as C,d as P,u as T,j as S,x as E,ab as $,ac as G,ad as I,ae as V}from"./chunks/framework.1a6f23fa.js";import{t as R}from"./chunks/theme.15826026.js";const Y={class:"two-click-privacy"},B={key:0,class:"two-click-privacy__dialog",style:{display:"flex","flex-direction":"column","background-color":"white","border-radius":"5px",padding:"10px","align-items":"center",border:"3px dotted var(--c-brand)"}},D=n("p",{style:{"font-weight":"bold","margin-bottom":"5px"}},"Embedded Video",-1),N=n("p",null,[l(" By loading this video, you accept the "),n("a",{href:"https://policies.google.com/privacy"},"privacy policy and terms"),l(" of YouTube/Google. ")],-1),L=["src"],j={__name:"TwoClickYoutubePrivacy",props:{videoId:String},setup(e){const t=e,o=p(!1);function a(){if(!t.videoId){console.error("No YouTube id given");return}o.value=!0}return(m,_)=>(r(),i("div",Y,[o.value?c("",!0):(r(),i("div",B,[D,N,n("button",{onClick:a,style:{cursor:"pointer",width:"200px",height:"50px","background-color":"var(--vp-c-brand)",color:"white"}}," Load YouTube video ")])),o.value?(r(),i("iframe",{key:1,width:"100%",height:"315",src:"https://www.youtube-nocookie.com/embed/"+t.videoId,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,L)):c("",!0)]))}};const O={class:"two-click-privacy"},F={key:0,class:"two-click-privacy__dialog",style:{display:"flex","flex-direction":"column","background-color":"white","border-radius":"5px",padding:"10px","align-items":"center",border:"3px dotted var(--c-brand)"}},z=n("p",{style:{"font-weight":"bold","margin-bottom":"5px"}}," Embedded Google Slides presentation ",-1),H=n("p",null,[l(" By loading this presentation, you accept the "),n("a",{href:"https://policies.google.com/privacy"},"privacy policy and terms"),l(" of Google Drive. ")],-1),M=["src"],U={__name:"TwoClickGoogleSlidesPrivacy",props:{presentationId:String},setup(e){const t=e,o=p(!1);function a(){if(!t.presentationId){console.error("No slide id given");return}o.value=!0}return(m,_)=>(r(),i("div",O,[o.value?c("",!0):(r(),i("div",F,[z,H,n("button",{onClick:a,style:{cursor:"pointer",width:"200px",height:"50px","background-color":"var(--vp-c-brand)",color:"white"}}," Load Google Slides presentation ")])),o.value?(r(),i("iframe",{key:1,src:"https://docs.google.com/presentation/d/e/"+t.presentationId+"/embed?start=false&loop=false&delayms=3000",frameborder:"0",width:"960",height:"569",allowfullscreen:"true",mozallowfullscreen:"true",webkitallowfullscreen:"true"},`
    `,8,M)):c("",!0)]))}};const q={...R,enhanceApp({app:e}){e.component("TwoClickYoutubePrivacy",j),e.component("TwoClickGoogleSlidesPrivacy",U)}};function u(e){if(e.extends){const t=u(e.extends);return{...t,...e,async enhanceApp(o){t.enhanceApp&&await t.enhanceApp(o),e.enhanceApp&&await e.enhanceApp(o)}}}return e}const s=u(q),J=P({name:"VitePressApp",setup(){const{site:e}=T();return S(()=>{E(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),$(),G(),I(),s.setup&&s.setup(),()=>V(s.Layout)}});async function K(){const e=W(),t=Q();t.provide(f,e);const o=v(e.route);return t.provide(g,o),t.component("Content",y),t.component("ClientOnly",b),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return o.frontmatter.value}},$params:{get(){return o.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:w}),{app:t,router:e,data:o}}function Q(){return k(J)}function W(){let e=d,t;return x(o=>{let a=A(o);return a?(e&&(t=a),(e||t===a)&&(a=a.replace(/\.js$/,".lean.js")),d&&(e=!1),C(()=>import(a),[])):null},s.NotFound)}d&&K().then(({app:e,router:t,data:o})=>{t.go().then(()=>{h(t.route,o.site),e.mount("#app")})});export{K as createApp};