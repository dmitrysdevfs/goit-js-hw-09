import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */let t={email:"",message:""};const o="feedback-form-state",r=document.querySelector(".feedback-form"),m=()=>{try{if(localStorage.length===0)return;const e=JSON.parse(localStorage.getItem(o));t=e;for(const a in e)r.elements[a].value=e[a]}catch(e){console.log(e)}};m();const n=e=>{const{target:{name:a,value:l}}=e;t[a]=l.trim(),localStorage.setItem(o,JSON.stringify(t))},s=e=>{if(e.preventDefault(),!t.email||!t.message){alert("Please fill in all fields");return}console.log("Form data:",t),t={email:"",message:""},e.currentTarget.reset(),localStorage.removeItem(o)};r.addEventListener("input",n);r.addEventListener("submit",s);
//# sourceMappingURL=2-form.js.map
