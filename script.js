// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select the form element (assuming your form has a class or ID)
  const contactForm = document.querySelector('form'); 

  contactForm.addEventListener('submit', function(e) {
      // 1. Prevent the default form submission (page reload)
      e.preventDefault();

      // 2. Capture the data from the input fields
      // Note: Ensure your HTML inputs have 'name' or 'id' attributes matching these
      const fullName = document.querySelector('input[placeholder="Full Name"]').value;
      const email = document.querySelector('input[placeholder="Email Id"]').value;
      const mobile = document.querySelector('input[placeholder="Mobile No."]').value;
      const address = document.querySelector('textarea[placeholder="Enter Address..."]').value;

      // 3. Simple Validation Logic
      if (fullName === "" || email === "" || mobile === "") {
          alert("Please fill in all required fields!");
          return;
      }

      // 4. Handle the data (e.g., Log it or send to an API)
      console.log("Form Submitted Successfully!");
      console.log({
          Name: fullName,
          Email: email,
          Phone: mobile,
          Address: address
      });

      // 5. Success Feedback
      alert(`Thank you, ${fullName}! Your message has been sent.`);
      
      // 6. Reset the form
      contactForm.reset();
  });
});