"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[384],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},143:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:0},a="5 min to get up and running",l={unversionedId:"contribute/getting-started",id:"contribute/getting-started",title:"5 min to get up and running",description:"Clone sources and install dependencies",source:"@site/docs/contribute/getting-started.md",sourceDirName:"contribute",slug:"/contribute/getting-started",permalink:"/commission/docs/contribute/getting-started",draft:!1,editUrl:"https://github.com/dev-lambda/commission/edit/main/website/docs/contribute/getting-started.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Contribute",permalink:"/commission/docs/category/contribute"},next:{title:"npm scripts",permalink:"/commission/docs/contribute/npm-scripts"}},s={},c=[{value:"Clone sources and install dependencies",id:"clone-sources-and-install-dependencies",level:2},{value:"Start a development server",id:"start-a-development-server",level:2},{value:"Configure the app for your local environment",id:"configure-the-app-for-your-local-environment",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"5-min-to-get-up-and-running"},"5 min to get up and running"),(0,o.kt)("h2",{id:"clone-sources-and-install-dependencies"},"Clone sources and install dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:dev-lambda/commission.git\ncd commission\nnpm run i\n")),(0,o.kt)("h2",{id:"start-a-development-server"},"Start a development server"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This assumes you have a running mongodb instance and the connection string defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"config/development.yaml")," (",(0,o.kt)("inlineCode",{parentName:"p"},"mongodb://localhost:27017/dev"),") is correct."),(0,o.kt)("p",{parentName:"admonition"},"If you don't yet have ",(0,o.kt)("strong",{parentName:"p"},"a running mongodb instance")," see ",(0,o.kt)("a",{parentName:"p",href:"./deployment#mongodb"},"how to quickly launch a mongodb instance")),(0,o.kt)("p",{parentName:"admonition"},"If you need to use a ",(0,o.kt)("strong",{parentName:"p"},"different mongodb connection string")," you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"config/local-development.yaml")," file or the corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"mongoDbHost")," environment varialbe (see ",(0,o.kt)("a",{parentName:"p",href:"./runtime#configuration-files"},"how to configure the app"),".)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm start\n")),(0,o.kt)("p",null,"Your local server should be available at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000/"),"."),(0,o.kt)("p",null,"For more development scripts see ",(0,o.kt)("a",{parentName:"p",href:"./npm-scripts#local-development"},"npm-scripts"),"."),(0,o.kt)("h2",{id:"configure-the-app-for-your-local-environment"},"Configure the app for your local environment"),(0,o.kt)("p",null,"You can cusomize configuration settings for your personal machine by creating a file ",(0,o.kt)("inlineCode",{parentName:"p"},"config/local-development.yaml")," that will override default and development settings. This file should not be commited. For more information see ",(0,o.kt)("a",{parentName:"p",href:"./runtime#configuration-files"},"Runtime settings"),"."))}m.isMDXComponent=!0}}]);