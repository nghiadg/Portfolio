(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{13:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);n(13);var c=n(1),s=n.n(c),i=n(10),r=n.n(i),a=n(0),l=function(e){var t=e.className,n=void 0===t?"":t,c=e.children;return Object(a.jsx)("div",{className:"container mx-auto px-2 sm:px-4 ".concat(n),children:c})},o=function(e){var t=e.name;return Object(a.jsx)("div",{className:"z-10 bg-dark fixed top-0 left-0 w-full",children:Object(a.jsx)(l,{className:"flex justify-between items-center h-10",children:Object(a.jsx)("span",{className:"text-lg font-bold",children:t})})})},j=n(11),m=n(3),d=n(12),x=function(e){var t=e.icon;return Object(a.jsx)(j.a,{icon:t})},u=function(){return Object(a.jsx)(x,{icon:d.a})},b=function(){return Object(a.jsx)(x,{icon:m.d})},h=function(){return Object(a.jsx)(x,{icon:m.e})},f=function(){return Object(a.jsx)(x,{icon:m.a})},O=n(5),p=n(9),g=["className"],N=["className"],v=function(e){var t=e.title,n=e.icon,c=e.className;return Object(a.jsxs)("button",{className:"h-5.5 px-2.2 rounded capitalize text-white font-bold min-w-55px ".concat(c),children:[n&&Object(a.jsx)("span",{className:"mr-1.5",children:n}),t]})},w=function(e){var t=e.className,n=Object(p.a)(e,g);return Object(a.jsx)(v,Object(O.a)(Object(O.a)({},n),{},{className:"bg-primary ".concat(t)}))},y=function(e){var t=e.className,n=Object(p.a)(e,N);return Object(a.jsx)(v,Object(O.a)(Object(O.a)({},n),{},{className:"border-2 border-primary ".concat(t)}))},k=function(e){var t=e.info;return Object(a.jsx)("div",{className:"h-screen flex items-center",children:Object(a.jsxs)("div",{className:"w-full lg:w-2/4",children:[Object(a.jsx)("span",{className:"text-xl font-medium inline-block w-full sm:text-3xl",children:"Hey!"}),Object(a.jsxs)("h1",{className:"text-3xl font-semibold inline-block w-full sm:text-large",children:["I'm ",Object(a.jsx)("span",{className:"text-primary",children:t.name})]}),Object(a.jsxs)("span",{className:"text-3xl font-semibold relative",children:["an ",t.role]}),Object(a.jsx)("p",{className:"mt-1",children:t.roleDescription}),Object(a.jsxs)("div",{className:"mt-3.2 text-md flex items-center mb-4.5",children:[Object(a.jsx)("span",{className:"mr-3",children:"Follow me"}),Object(a.jsx)("ul",{children:Object(a.jsx)("li",{className:"text-2xl cursor-pointer",children:Object(a.jsx)("a",{href:t.github,target:"_blank",rel:"noreferrer",children:Object(a.jsx)(u,{})})})})]}),Object(a.jsxs)("div",{className:"flex justify-between flex-col sm:flex-row sm:justify-start",children:[Object(a.jsx)("a",{className:"mb-2 sm:mb-0 sm:mr-3",href:"mailto: ".concat(t.email),children:Object(a.jsx)(w,{title:"Email me",icon:Object(a.jsx)(b,{}),className:"w-full"})}),Object(a.jsx)("a",{href:"cv.pdf",download:"duongtrongnghia.pdf",children:Object(a.jsx)(y,{title:"Download CV",icon:Object(a.jsx)(h,{}),className:"w-full"})})]})]})})},E=n.p+"static/media/education.f47c041b.png",I=function(e){var t=e.heading,n=e.children;return Object(a.jsx)("div",{className:"h-screen w-full",children:Object(a.jsxs)("div",{className:"w-full h-full flex flex-col justify-center",children:[t&&Object(a.jsx)("h2",{className:"text-primary text-2xl font-bold mb-1 sm:mb-5",children:t}),n]})})},S=function(e){var t=e.educations;return Object(a.jsx)(a.Fragment,{children:t.map((function(e){return Object(a.jsx)(I,{heading:"Education",children:Object(a.jsxs)("div",{className:"flex",children:[Object(a.jsx)("img",{src:E,className:"hidden lg:block mr-18"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{className:"text-primary text-xl mb-2 sm:mb4",children:e.timePeriod}),Object(a.jsxs)("p",{className:"text-3xl",children:["I studied at the",Object(a.jsxs)("span",{className:"text-primary",children:["\xa0",e.universityName]}),". My Major is ",e.major,". I graduated with",Object(a.jsxs)("span",{className:"text-primary",children:[" a GPA of ",e.gpa,"."]})]}),Object(a.jsx)("p",{children:e.description})]})]})},e.universityName)}))})},P=function(e){var t=e.experiences;return Object(a.jsx)(a.Fragment,{children:t.map((function(e){return Object(a.jsx)(I,{heading:"Experience",children:Object(a.jsxs)("div",{className:"flex items-center",children:[Object(a.jsx)("img",{src:"/Portfolio/"+e.logo,className:"hidden lg:block mr-18"}),Object(a.jsx)("div",{className:"flex justify-between",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{className:"text-primary text-xl mb-2 sm:mb4",children:e.timePeriod}),Object(a.jsxs)("p",{className:"text-2xl sm:text-3xl",children:["I worked at",Object(a.jsxs)("span",{className:"text-primary",children:["\xa0",e.companyName,"\xa0"]}),"with a position ",e.position,"."]}),Object(a.jsx)("p",{className:"text-2xl sm:text-3xl",children:e.description})]})})]})},e.timePeriod)}))})},C=function(e){var t=e.skills;return Object(a.jsx)(I,{heading:"Skills",children:Object(a.jsx)("div",{className:"flex items-center -ml-3 flex-wrap justify-center sm:justify-start",children:t.map((function(e){return Object(a.jsx)("img",{src:"/Portfolio/"+e.logo,alt:e.name,className:"w-10 h-10 object-cover ml-3 mb-3"},e.name)}))})})},R=function(e){var t=e.info;return Object(a.jsxs)(I,{heading:"Contact",children:[Object(a.jsxs)("p",{className:"text-3xl",children:["Interested working with me?",Object(a.jsx)("span",{className:"text-primary cursor-pointer",children:Object(a.jsxs)("a",{className:"underline",href:"mailto: ".concat(t.email),children:[Object(a.jsx)("span",{className:"mr-2",children:Object(a.jsx)(b,{})}),"Send email"]})})]}),Object(a.jsx)("span",{className:"text-xl inline-block my-3",children:"and"}),Object(a.jsxs)("p",{className:"text-3xl",children:["You can follow me on",Object(a.jsx)("span",{className:"text-primary cursor-pointer",children:Object(a.jsxs)("a",{className:"underline",href:t.github,target:"_blank",rel:"noreferrer",children:[Object(a.jsx)("span",{className:"mr-2",children:Object(a.jsx)(u,{})}),"Github"]})})]})]})},F=function(){return Object(a.jsx)(I,{children:Object(a.jsx)("div",{className:"flex items-center justify-center w-full",children:Object(a.jsx)("span",{className:"text-primary text-3xl text-center",children:"Thank you for watching!"})})})},J=n(8),L={info:{name:"Duong Trong Nghia",role:"Software Engineer",roleDescription:"Software Developer | ReactJs and React Native Enthusiast.",email:"nghiadt.dev@gmail.com",github:"https://github.com/nghiadg"},educations:[{timePeriod:"8/2016 - 6/2020",universityName:"Ha Noi University of Industry",major:"Software Engineering",gpa:3.28,description:""}],experiences:[{companyName:"Ominext Group JSC",logo:"Ominext.png",position:"as an Intern",timePeriod:"12/2019 - 4/2020",description:"I finished my internship (Sukura Campus 4) and received a Certificate of Excellence and first prize for the individual."},{companyName:"Ominext Group JSC",logo:"Ominext.png",position:"in Software Engineering",timePeriod:"4/2020 - 9/2020",description:"I joined the team and using ReacJs to develop a website for the customer. I received a prize for New Excellence Rookie at the 2nd quarter of 2020."},{companyName:"IntX JSC",logo:"Intx.png",position:"in Software Engineering",timePeriod:"11/2020 - 6/2021",description:"We using ReacJs to develop website. I received a prize for Excellent Employee February 2021."}],skills:[{name:"javascript",logo:"skills/logo-js.png"},{name:"html",logo:"skills/logo-html.png"},{name:"css",logo:"skills/logo-css.png"},{name:"react",logo:"skills/logo-react.png"}]},T=function(){var e=Object(c.useRef)(null),t=function(e){var t=Object(c.useRef)(0),n=Object(c.useRef)(!1),s=Object(c.useRef)(0),i=Object(c.useState)(!1),r=Object(J.a)(i,2),a=r[0],l=r[1];Object(c.useEffect)((function(){e.current&&(s.current=e.current.scrollHeight/e.current.clientHeight)}),[]);var o=Object(c.useState)(0),j=Object(J.a)(o,2),m=j[0],d=j[1];function x(e){e.deltaY>0?f():h()}function u(e){t.current=e.touches[0].clientY}function b(e){var n=e.changedTouches[0].clientY;t.current>n+5?f():h()}function h(){n.current||m>=100&&(n.current=!0,d(m-100),setTimeout((function(){n.current=!1}),1e3))}function f(){n.current||(m<100*(s.current-1)&&(n.current=!0,d(m+100)),setTimeout((function(){n.current=!1}),1e3))}return Object(c.useEffect)((function(){return window.addEventListener("wheel",x),window.addEventListener("touchstart",u),window.addEventListener("touchend",b),function(){window.removeEventListener("wheel",x),window.removeEventListener("touchstart",u),window.removeEventListener("touchend",b)}})),Object(c.useEffect)((function(){m==100*(s.current-1)?l(!0):l(!1)}),[m]),{translateY:m,isEndPage:a}}(e),n=t.translateY,s=t.isEndPage;return Object(a.jsxs)("div",{className:"overflow-hidden h-screen",ref:e,children:[Object(a.jsxs)(l,{children:[Object(a.jsx)("div",{className:"hidden sm:block",children:Object(a.jsx)(o,{name:L.info.name})}),Object(a.jsxs)("div",{style:{transform:"translateY(".concat("-".concat(n,"vh"),")")},className:"transition ease-in-out duration-1000",children:[Object(a.jsx)(k,{info:L.info}),Object(a.jsx)(S,{educations:L.educations}),Object(a.jsx)(P,{experiences:L.experiences}),Object(a.jsx)(C,{skills:L.skills}),Object(a.jsx)(R,{info:L.info}),Object(a.jsx)(F,{})]})]}),!s&&Object(a.jsx)("div",{className:"fixed top-4 sm:top-1/2 right-2 border px-1 py-2.5 rounded-full opacity-50",children:Object(a.jsx)("div",{className:"transform animate-bounce",children:Object(a.jsx)(f,{})})})]})},Y=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(T,{})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(Y,{})}),document.getElementById("root")),D()}},[[24,1,2]]]);
//# sourceMappingURL=main.9c1c3942.chunk.js.map