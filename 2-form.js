import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */let t={email:"",message:""};const r="feedback-form-state",a=document.querySelector(".feedback-form"),m=()=>{try{const e=JSON.parse(localStorage.getItem(r));if(e===null)return;t=e;for(const o in e)a.elements[o].value=e[o]}catch(e){console.log(e)}};m();const n=e=>{const{target:{name:o,value:l}}=e;t[o]=l.trim(),localStorage.setItem(r,JSON.stringify(t))},s=e=>{if(e.preventDefault(),!t.email||!t.message){alert("Please fill in all fields");return}console.log("Form data:",t),t={email:"",message:""},e.currentTarget.reset(),localStorage.removeItem(r)};a.addEventListener("input",n);a.addEventListener("submit",s);
//# sourceMappingURL=2-form.js.map
