const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector("body");t.addEventListener("click",(function(){if(o)return;o=!0,r=setInterval((()=>{n.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(function(){clearInterval(r),o=!1}));let r=null,o=!1;
//# sourceMappingURL=01-color-switcher.b3ab0b77.js.map