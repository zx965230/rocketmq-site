"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[9450],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),i=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=i(r),f=n,k=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return r?a.createElement(k,s(s({ref:t},p),{},{components:r})):a.createElement(k,s({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:n,s[1]=l;for(var i=2;i<o;i++)s[i]=r[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},97703:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const o={title:"Release Notes - Apache RocketMQ - Version 4.6.0",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},s=void 0,l={permalink:"/release-notes/2019/11/25/4.6.0",source:"@site/release-notes/2019-11-25-4.6.0.md",title:"Release Notes - Apache RocketMQ - Version 4.6.0",description:"* Source: rocketmq-all-4.6.0-source-release.zip [PGP] [SHA512]",date:"2019-11-25T00:00:00.000Z",formattedDate:"November 25, 2019",tags:[{label:"Release_Notes",permalink:"/release-notes/tags/release-notes"},{label:"RocketMQ",permalink:"/release-notes/tags/rocket-mq"},{label:"Version",permalink:"/release-notes/tags/version"}],readingTime:1.72,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ - Version 4.6.0",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},prevItem:{title:"Release Notes - Apache RocketMQ Spring - Version 2.1.0",permalink:"/release-notes/2020/02/10/release-notes-rocketmq-spring-2.1.0"},nextItem:{title:"Release Notes - Apache RocketMQ Client Go- Version 1.2.4",permalink:"/release-notes/2019/11/20/release-notes-rocketmq-client-go-1.2.4"}},c={authorsImageUrls:[]},i=[],p={toc:i},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"Download the 4.6.0 release",type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Source: ",(0,n.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.6.0/rocketmq-all-4.6.0-source-release.zip"},"rocketmq-all-4.6.0-source-release.zip")," [",(0,n.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.6.0/rocketmq-all-4.6.0-source-release.zip.asc"},"PGP"),"] [",(0,n.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.6.0/rocketmq-all-4.6.0-source-release.zip.sha512"},"SHA512"),"]"),(0,n.kt)("li",{parentName:"ul"},"Binary: ",(0,n.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.6.0/rocketmq-all-4.6.0-bin-release.zip"},"rocketmq-all-4.6.0-bin-release.zip")," [",(0,n.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.6.0/rocketmq-all-4.6.0-bin-release.zip.asc"},"PGP"),"] [",(0,n.kt)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.6.0/rocketmq-all-4.6.0-bin-release.zip.sha512"},"SHA512"),"]"))))}u.isMDXComponent=!0}}]);