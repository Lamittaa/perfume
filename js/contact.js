document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const formFeedback = document.getElementById("formFeedback");
  
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const firstName = document.getElementById("firstName").value.trim();
      const lastName = document.getElementById("lastName").value.trim();
      const mobile = document.getElementById("mobile").value.trim();
      const age = document.getElementById("age").value.trim();
      const address = document.getElementById("address").value.trim();
      const country = document.getElementById("country").value.trim();
      const hobbies = document.getElementById("hobbies").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      
      if(!firstName || !lastName || !mobile || !age || !address ||
         !country || !email || !message) {
        formFeedback.style.color = "red";
        formFeedback.textContent = "Please fill in all required fields!";
        return;
      }
  
      const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      if(!emailRegex.test(email)) {
        formFeedback.style.color = "red";
        formFeedback.textContent = "Please enter a valid email address.";
        return;
      }
  
      formFeedback.style.color = "green";
      formFeedback.textContent = "Thank you! Your message has been sent successfully.";
      contactForm.reset();
    });
  });
  