(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{89:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return c}));var r=t(3),i=(t(0),t(94));const o={sidebar_position:6},a={unversionedId:"queries/multiple-query-blocks",id:"queries/multiple-query-blocks",isDocsHomePage:!1,title:"Multiple Query Blocks",description:"Often we want to be able to run multiple query blocks in a single round trip to maximize latency.",source:"@site/docs/queries/multiple-query-blocks.md",sourceDirName:"queries",slug:"/queries/multiple-query-blocks",permalink:"/dqlx/docs/queries/multiple-query-blocks",editUrl:"https://github.com/fenos/dqlx-docs/edit/master/docs/queries/multiple-query-blocks.md",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Execution",permalink:"/dqlx/docs/queries/execution"},next:{title:"Set",permalink:"/dqlx/docs/mutations/set"}},l=[],u={toc:l};function c({components:e,...n}){return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Often we want to be able to run multiple query blocks in a single round trip to maximize latency."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"db.ExecuteQueries()")," function accepts a list of ",Object(i.b)("inlineCode",{parentName:"p"},"QueryBuilder")," and it will smartly compose\na single giant query to be sent to DGraph."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-go"},'var data1 []map[string]interface{}\n\nquery1 := db.\n    Query(dqlx.HasFn("name")).\n    Fields(`\n        uid\n        name\n        species\n    `).\n    Filter(\n        dqlx.EqFn("name", "Ollie"),\n    ).\n    UnmarshallInto(&data1)\n\nvar data2 []map[string]interface{}\n\nquery2 := db.\n    Query(dqlx.HasFn("name")).\n    Fields(`\n        uid\n        name\n        species\n    `).\n    Filter(\n        dqlx.EqFn("name", "Leo"),\n    ).\n    UnmarshallInto(&data2)\n\nresp, err := db.ExecuteQueries(ctx, []dqlx.QueryBuilder{query1, query2})\n')))}c.isMDXComponent=!0},94:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),s=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,b=p["".concat(a,".").concat(m)]||p[m]||d[m]||o;return t?i.a.createElement(b,l(l({ref:n},c),{},{components:t})):i.a.createElement(b,l({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);