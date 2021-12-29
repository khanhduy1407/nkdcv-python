"use strict";(self.webpackChunknkdcv_python=self.webpackChunknkdcv_python||[]).push([[717],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||c;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<c;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1007:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7294),a="browserWindow_CU2T",c="browserWindowHeader_9KMa",o="buttons_HaVU",s="browserWindowAddressBar_ep3W",l="dot_AgBE",i="browserWindowMenuIcon_mrOC",p="bar_CAZr",m="browserWindowBody_jHfO";var u=function(e){var t=e.children,n=e.minHeight,u=e.url;return r.createElement("div",{className:a,style:{minHeight:n}},r.createElement("div",{className:c},r.createElement("div",{className:o},r.createElement("span",{className:l,style:{background:"#f25f58"}}),r.createElement("span",{className:l,style:{background:"#fbbe3c"}}),r.createElement("span",{className:l,style:{background:"#58cb42"}})),r.createElement("div",{className:s},u),r.createElement("div",{className:i},r.createElement("div",null,r.createElement("span",{className:p}),r.createElement("span",{className:p}),r.createElement("span",{className:p})))),r.createElement("div",{className:m},t))}},8859:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var r=n(7462),a=n(3366),c=(n(7294),n(3905)),o=n(1007),s=["components"],l={title:"Face Mesh",description:"Face Mesh Example"},i="Face Mesh Example",p={unversionedId:"examples/face-mesh",id:"examples/face-mesh",title:"Face Mesh",description:"Face Mesh Example",source:"@site/docs/examples/face-mesh.mdx",sourceDirName:"examples",slug:"/examples/face-mesh",permalink:"/nkdcv-python/vi/examples/face-mesh",tags:[],version:"current",frontMatter:{title:"Face Mesh",description:"Face Mesh Example"},sidebar:"docs",previous:{title:"Pose Estimation",permalink:"/nkdcv-python/vi/examples/pose-estimation"},next:{title:"Stack Images",permalink:"/nkdcv-python/vi/examples/stack-images"}},m=[{value:"Code",id:"code",children:[],level:3},{value:"Result",id:"result",children:[],level:3}],u={toc:m};function d(e){var t=e.components,l=(0,a.Z)(e,s);return(0,c.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"face-mesh-example"},"Face Mesh Example"),(0,c.kt)("p",null,"Code example ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/khanhduy1407/nkdcv-python/blob/master/Examples/FaceMeshExample.py"},"here")),(0,c.kt)("h3",{id:"code"},"Code"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="FaceMeshExample.py"',title:'"FaceMeshExample.py"'},'from nkdcv.FaceMeshModule import FaceMeshDetector\nimport cv2\n\ncap = cv2.VideoCapture(0)\ndetector = FaceMeshDetector(maxFaces=2)\nwhile True:\n    success, img = cap.read()\n    img, faces = detector.findFaceMesh(img)\n    if faces:\n        print(faces[0])\n    cv2.imshow("Image", img)\n    cv2.waitKey(1)\n')),(0,c.kt)("h3",{id:"result"},"Result"),(0,c.kt)(o.Z,{mdxType:"BrowserWindow"},(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Face Mesh Example",src:n(3311).Z}))))}d.isMDXComponent=!0},3311:function(e,t,n){t.Z=n.p+"assets/images/face_mesh_example-f2efe032744f6a14f29b9428a6657b41.jpg"}}]);