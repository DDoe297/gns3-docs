(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(9),i=(n(0),n(211)),o=n(213),s={id:"scale-gns3",title:"Scale GNS3",sidebar_label:"Scale GNS3"},c={id:"using-gns3/administration/scale-gns3",isDocsHomePage:!1,title:"Scale GNS3",description:"GNS3 itself doesn\u2019t have limitation on the number of nodes you can run into it. The limitation will be your hardware.",source:"@site/docs/using-gns3/administration/scale-gns3.md",permalink:"https://docs.gns3.com/docs/using-gns3/administration/scale-gns3",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/using-gns3/administration/scale-gns3.md",sidebar_label:"Scale GNS3",sidebar:"someSidebar",previous:{title:"Client server SSL encryption",permalink:"https://docs.gns3.com/docs/using-gns3/administration/client-server-ssl-encryption"},next:{title:"Architecture",permalink:"https://docs.gns3.com/docs/using-gns3/design/architecture"}},l=[{value:"Run GNS3 on a remote server",id:"run-gns3-on-a-remote-server",children:[]},{value:"Split the load on multiple machine",id:"split-the-load-on-multiple-machine",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Limitations",id:"limitations",children:[]},{value:"Setup",id:"setup",children:[{value:"Add your remote servers",id:"add-your-remote-servers",children:[]},{value:"Setup the Appliance Templates",id:"setup-the-appliance-templates",children:[]}]}],u={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"GNS3 itself doesn\u2019t have limitation on the number of nodes you can run into it. The limitation will be your hardware."),Object(i.b)("h2",{id:"run-gns3-on-a-remote-server"},"Run GNS3 on a remote server"),Object(i.b)("p",null,"If your local machine is not enough to let you create the sorts of topologies you want to use,  you can run GNS3 on a bigger machine locally or on a cloud Provider like Packet."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"See ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"../../getting-started/installation/remote-server"}),"Install on a remote server")),Object(i.b)("li",{parentName:"ul"},"See ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"../../getting-started/installation/gns3-on-packet"}),"GNS3 on packet.net"))),Object(i.b)("h2",{id:"split-the-load-on-multiple-machine"},"Split the load on multiple machine"),Object(i.b)("p",null,"In order to cross the limitation of your hardware, you can use multiple GNS3 servers for running the same topology."),Object(i.b)("p",null,"An example is Jason C. Neumann running GNS3 in a Raspberry Pi cluster:\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.gns3.com/discussions/the-worlds-first-gns3-beowulf-cl"}),"https://www.gns3.com/discussions/the-worlds-first-gns3-beowulf-cl")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The PI use an ARM processor that is not adapted to run x86 code on Qemu. Also since this forum post, the interfaces have changed."))),Object(i.b)("img",{alt:"screenshot",src:Object(o.a)("img/using-gns3/administration/scale-gns3/1.jpg")}),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You need the same version of the GNS3 server on all machines"),Object(i.b)("li",{parentName:"ul"},"All servers need to be on the same network . Nothing should prevent them from being able to communicate with each other")),Object(i.b)("h2",{id:"limitations"},"Limitations"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A node need to be explicitly created on a server. There is no smart allocation"),Object(i.b)("li",{parentName:"ul"},"You need to create an appliance template by server"),Object(i.b)("li",{parentName:"ul"},"You can\u2019t move a node from a server to another"),Object(i.b)("li",{parentName:"ul"},"Portable projects are not supported")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This is not definitive. GNS3 is evolving and contributions are welcome"))),Object(i.b)("h2",{id:"setup"},"Setup"),Object(i.b)("h3",{id:"add-your-remote-servers"},"Add your remote servers"),Object(i.b)("p",null,"First you need to add your remote servers in the Server preferences:"),Object(i.b)("img",{alt:"screenshot",src:Object(o.a)("img/using-gns3/administration/scale-gns3/2.jpg")}),Object(i.b)("p",null,"You will see these appear in the Server summary pane, along with the CPU/RAM usage of each:"),Object(i.b)("img",{alt:"screenshot",src:Object(o.a)("img/using-gns3/administration/scale-gns3/3.jpg")}),Object(i.b)("h3",{id:"setup-the-appliance-templates"},"Setup the Appliance Templates"),Object(i.b)("p",null,"When you create your appliance template, choose a remote server:"),Object(i.b)("img",{alt:"screenshot",src:Object(o.a)("img/using-gns3/administration/scale-gns3/4.jpg")}),Object(i.b)("p",null,"At the node name step, choose a name to help you remember which server this node will be run on:"),Object(i.b)("img",{alt:"screenshot",src:Object(o.a)("img/using-gns3/administration/scale-gns3/5.jpg")}),Object(i.b)("p",null,"Create a second template for the other server. You have now two nodes that allow you to manually dispatch the load between servers:"),Object(i.b)("img",{alt:"screenshot",src:Object(o.a)("img/using-gns3/administration/scale-gns3/6.jpg")}),Object(i.b)("p",null,"You can use the server summary in order to know which server has free resources:"),Object(i.b)("img",{alt:"screenshot",src:Object(o.a)("img/using-gns3/administration/scale-gns3/7.jpg")}))}b.isMDXComponent=!0},211:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(n),p=r,d=b["".concat(o,".").concat(p)]||b[p]||m[p]||i;return n?a.a.createElement(d,s(s({ref:t},l),{},{components:n})):a.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},212:function(e,t,n){"use strict";var r=n(0),a=n(52);t.a=function(){return Object(r.useContext)(a.a)}},213:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(76);var r=n(212),a=n(214);function i(e,t){var n=void 0===t?{}:t,i=n.forcePrependBaseUrl,o=void 0!==i&&i,s=n.absolute,c=void 0!==s&&s,l=Object(r.a)().siteConfig,u=(l=void 0===l?{}:l).baseUrl,b=void 0===u?"/":u,m=l.url;if(!e)return e;if(o)return b+e;if(!Object(a.a)(e))return e;var p=b+e.replace(/^\//,"");return c?m+p:p}},214:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return r}))}}]);