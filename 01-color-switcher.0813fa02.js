const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");function o(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.addEventListener("click",(function(){setTimeout((()=>{randColor=o(),document.body.style.backgroundColor=randColor}),0),timerC=setInterval((()=>{randColor=o(),document.body.style.backgroundColor=randColor}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(timerC),t.disabled=!1,e.disabled=!0})),e.disabled=!0;
//# sourceMappingURL=01-color-switcher.0813fa02.js.map