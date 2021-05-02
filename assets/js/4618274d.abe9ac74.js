(self.webpackChunkdqlx_docs=self.webpackChunkdqlx_docs||[]).push([[983],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=i,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1163:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=t(2122),i=t(9756),a=(t(7294),t(3905)),o={sidebar_position:1},l={unversionedId:"queries/selection",id:"queries/selection",isDocsHomePage:!1,title:"Selection",description:"In this section we'll learn how to select nodes and edges for our queries.",source:"@site/docs/queries/selection.md",sourceDirName:"queries",slug:"/queries/selection",permalink:"/dqlx/docs/queries/selection",editUrl:"https://github.com/fenos/dqlx-docs/edit/master/docs/queries/selection.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Quick Introduction",permalink:"/dqlx/docs/getting-started/intro"},next:{title:"Filters",permalink:"/dqlx/docs/queries/filters"}},s=[{value:"Fields",id:"fields",children:[]},{value:"Query edges",id:"query-edges",children:[]},{value:"Aliases",id:"aliases",children:[]}],d={toc:s};function u(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this section we'll learn how to select nodes and edges for our queries."),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("p",null,"We use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Fields")," function to select the nodes we are interested in:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'db.QueryType("Animal").Fields(`\n    uid\n    name\n    animal\n`)\n')),(0,a.kt)("p",null,"produces:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"query RootQuery {\n    rootQuery(func: type(Animal)) {\n        uid\n        name\n        animal\n    }\n}\n")),(0,a.kt)("h3",{id:"query-edges"},"Query edges"),(0,a.kt)("p",null,"If we want to query fields that are nested we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Edge")," function"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'db.QueryType("Animal").\n    Fields(`\n        uid\n        name\n        animal\n    `).\n    Edge("favorite_food", dqlx.Fields(`\n        uid\n        brand\n        type\n    `)).\n    Edge("favorite_food->ingredients", dqlx.Fields(`\n        uid\n        name\n        family\n    `)).\n    Edge("favorite_food->ingredients->nutrition", dqlx.Fields(`\n        kcal\n    `))\n')),(0,a.kt)("p",null,"produces"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"query RootQuery {\n    rootQuery(func: type(Animal)) {\n        uid\n        name\n        animal\n        favorite_food {\n            uid\n            brand\n            type\n            ingredients {\n                uid\n                name\n                family\n                nutrition {\n                    kcal\n                }     \n            }   \n        }   \n    }\n}\n")),(0,a.kt)("p",null,"The first parameter of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Edge")," function must be ",(0,a.kt)("strong",{parentName:"p"},"the full path")," starting from its upmost ancestor."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Using a slice syntax ")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you prefer using a slice syntax over the conventional string (using the symbol ",(0,a.kt)("inlineCode",{parentName:"p"},"->"),")\nyou can instead use ",(0,a.kt)("inlineCode",{parentName:"p"},'EdgePath([]string{"favorite_food", ...})')," or ",(0,a.kt)("inlineCode",{parentName:"p"},'Edge(dqlx.EdgePath([]string{"favorite_food", ...}))')))),(0,a.kt)("h3",{id:"aliases"},"Aliases"),(0,a.kt)("p",null,"In Order to alias a field you'll just use the expression ",(0,a.kt)("inlineCode",{parentName:"p"},"alias:field")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'db.QueryType("Animal").Fields(`\n    uid\n    alias:name\n`)\n')))}u.isMDXComponent=!0}}]);