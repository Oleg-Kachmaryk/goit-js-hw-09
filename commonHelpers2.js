import"./assets/styles-6bcfebff.js";let e={email:"",message:""};const a=document.querySelector(".feedback-form"),m="feedback-form-state";let r=JSON.parse(localStorage.getItem(m));a.addEventListener("input",i);r&&(e=r);function o(){localStorage.setItem(m,JSON.stringify(e))}function i(t){const{name:s,value:l}=t.target;e[s]=l.trim(),o()}a.email.value=e.email;a.message.value=e.message;a.addEventListener("submit",function(t){if(t.preventDefault(),!e.email.trim()||!e.message.trim()){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(m),a.reset(),Object.assign(e,{email:"",message:""})});
//# sourceMappingURL=commonHelpers2.js.map
