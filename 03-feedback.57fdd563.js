const e={form:document.querySelector("feedback-form"),textarea:document.querySelector("feedback-form textarea")};e.form.addEventListener("submit",(function(e){e.preventDefauil(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),e.textarea.addEventListener("input",(function(e){const t=e.target.value;localStorage.setItem("feedback-form-state",t)}));
//# sourceMappingURL=03-feedback.57fdd563.js.map
