(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{130:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(174)),i=r(176),s={id:"special-ip-addresses",title:"Special IP addresses in GNS3",sidebar_label:"Special IP addresses in GNS3"},c={id:"using-gns3/advanced/special-ip-addresses",isDocsHomePage:!1,title:"Special IP addresses in GNS3",description:"GNS3 uses several RFC1918 private IP ranges by default. If possible we recommend to avoid using them in your topology in order to limit conflicts.",source:"@site/docs/using-gns3/advanced/special-ip-addresses.md",permalink:"/docs/using-gns3/advanced/special-ip-addresses",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/using-gns3/advanced/special-ip-addresses.md",sidebar_label:"Special IP addresses in GNS3",sidebar:"someSidebar",previous:{title:"The NAT node",permalink:"/docs/using-gns3/advanced/the-nat-node"},next:{title:"Move from IOUVM to GNS3 VM",permalink:"/docs/using-gns3/advanced/move-from-iouvm-gns3-vm"}},l=[{value:"IP Reserved by GNS3",id:"ip-reserved-by-gns3",children:[{value:"NAT: 192.168.122.0/24",id:"nat-192168122024",children:[]},{value:"VPN: 172.16.253.0/24",id:"vpn-17216253024",children:[]}]},{value:"IP Reserved by Emulators",id:"ip-reserved-by-emulators",children:[{value:"IP reserved by Docker",id:"ip-reserved-by-docker",children:[]},{value:"IP reserved by VMware",id:"ip-reserved-by-vmware",children:[]}]}],d={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"GNS3 uses several RFC1918 private IP ranges by default. If possible we recommend to avoid using them in your topology in order to limit conflicts."),Object(o.b)("h2",{id:"ip-reserved-by-gns3"},"IP Reserved by GNS3"),Object(o.b)("h3",{id:"nat-192168122024"},"NAT: 192.168.122.0/24"),Object(o.b)("p",null,"Starting with GNS3 2.0 this IP range is used by the NAT node (powered by libvirt)."),Object(o.b)("p",null,"It runs a DHCP server and DNS relay on its internal \u201cnat0\u201d interface, which is assigned 192.168.122.1.  Topology devices are able to use this node, both for automatic addressing, as well as to easily allow them to access the internet with minimal set up work."),Object(o.b)("p",null,"(you\u2019ll see this IP assigned to virbr0 in the GNS3 VM\u2019s bash shell)"),Object(o.b)("h3",{id:"vpn-17216253024"},"VPN: 172.16.253.0/24"),Object(o.b)("p",null,"This range is used only when you connect to a GNS3 remote server via VPN. These IPs are not visible in GNS3 until you use the Cloud Object to connect your real network to your GNS3 topology."),Object(o.b)("h2",{id:"ip-reserved-by-emulators"},"IP Reserved by Emulators"),Object(o.b)("p",null,"This IPs are not visible in GNS3 until you use the Cloud object to connect your local LAN to your topology."),Object(o.b)("h3",{id:"ip-reserved-by-docker"},"IP reserved by Docker"),Object(o.b)("p",null,"If docker is installed, be careful to this IP range:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"DOCKER0: 172.17.0.0/16"),"\nThis the default range use by docker0"),Object(o.b)("h3",{id:"ip-reserved-by-vmware"},"IP reserved by VMware"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"VMWARE VMNET: 192.168.0.0/16"),"\nFor each vmnet created in VMware (either directly via its Virtual Network Editor), or by using the gns3vmnet executable, it will have a random 192.168.x.x/24 subnet address and a DHCP server automatically created.  "),Object(o.b)("img",{alt:"screenshot",src:Object(i.a)("img/using-gns3/advanced/special-ip-addresses/1.jpg")}),Object(o.b)("p",null,"This is an example of the subnet addresses VMware automatically created for each of new host-only vmnets. When adding a VMware VM into a GNS3 topology, it must be a host-only vmnet with the DHCP server turned off."),Object(o.b)("p",null,"More information about using VMware VMs in GNS3 topologies can be found in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../../emulators/adding-vmware-vms-to-gns3-topologies"}),"this article"),"."))}u.isMDXComponent=!0},174:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return v}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(r),p=n,v=u["".concat(i,".").concat(p)]||u[p]||b[p]||o;return r?a.a.createElement(v,s(s({ref:t},l),{},{components:r})):a.a.createElement(v,s({ref:t},l))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},175:function(e,t,r){"use strict";var n=r(0),a=r(35);t.a=function(){return Object(n.useContext)(a.a)}},176:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(175),a=r(177);function o(e,{forcePrependBaseUrl:t=!1,absolute:r=!1}={}){const{siteConfig:{baseUrl:o="/",url:i}={}}=Object(n.a)();if(!e)return e;if(t)return o+e;if(!Object(a.a)(e))return e;const s=o+e.replace(/^\//,"");return r?i+s:s}},177:function(e,t,r){"use strict";function n(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}r.d(t,"a",(function(){return n}))}}]);