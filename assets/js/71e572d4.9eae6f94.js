"use strict";(self.webpackChunkproject_documentation=self.webpackChunkproject_documentation||[]).push([[4682],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),c=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return r?o.createElement(f,u(u({ref:t},l),{},{components:r})):o.createElement(f,u({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,u=new Array(a);u[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:n,u[1]=s;for(var c=2;c<a;c++)u[c]=r[c];return o.createElement.apply(null,u)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},521:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:1},u="Overview",s={unversionedId:"docusaurus/overview",id:"docusaurus/overview",title:"Overview",description:"Docusaurus is open-source software developed by Facebook. Our club utilizes Docusaurus for internal documentation for developers working on our ongoing projects and for future contributions.",source:"@site/docs/docusaurus/overview.md",sourceDirName:"docusaurus",slug:"/docusaurus/overview",permalink:"/docusaurus/docs/docusaurus/overview",draft:!1,editUrl:"https://github.com/sfuSwSo/docs/docusaurus/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Gitflow and Pull Requests",permalink:"/docusaurus/docs/gitflow-n-pull-requests"},next:{title:"Create a Document",permalink:"/docusaurus/docs/docusaurus/create-a-document"}},i={},c=[{value:"Getting Started",id:"getting-started",level:2}],l={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Docusaurus is open-source software developed by Facebook. Our club utilizes Docusaurus for internal documentation for developers working on our ongoing projects and for future contributions."),(0,n.kt)("p",null,"There are two repositories for our documentation:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Docusaurus repository"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sfuSwSo/docusaurus"},"https://github.com/sfuSwSo/docusaurus"),".   "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Documentation source repository"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sfuSwSo/documentation"},"https://github.com/sfuSwSo/documentation"),". "),(0,n.kt)("p",null,"The first repository is a forked version of Docusaurus from Facebook, containing all the configuration and deployment settings for our Docusaurus instance."),(0,n.kt)("p",null,"The second repository contains the actual markdown files used to display documentation pages. When our Docusaurus is scheduled for deployment or updates, it first syncs the markdown files from this repository. Therefore, any changes made to this repository will be reflected in the hosted Docusaurus instance."),(0,n.kt)("p",null,"For security reasons, any PRs or commits made to the Docusaurus repository must be supervised by users with admin roles. To add a new document to Docusaurus, you don't need to make a change on the Docusaurus repository; instead, you are going to make a PR of markdown files to the documentation source repository."),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"For developers and designers,"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"deploy-local-site"},"Deploy Local Site"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"create-a-document"},"Create a Document"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"extra-features"},"Extra Features")))),(0,n.kt)("p",null,"For project leads,"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"create-a-project"},"Create a Project"))))}d.isMDXComponent=!0}}]);