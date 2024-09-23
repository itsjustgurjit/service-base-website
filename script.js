const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Form validation (already provided in Bootstrap)

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  const emailData = {
    name,
    email,
    phone,
    message,
  };

  // **Important: Server-side email sending required**
  // Due to security limitations of browser APIs, directly sending emails from client-side JavaScript is not recommended.
  // Implement server-side functionality using a backend language (e.g., PHP, Node.js) to securely send emails.
  // Here's a basic example (replace with your actual approach):

  fetch('/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(emailData)
  })
  .then(response => {
    if (response.ok) {
      alert('Email sent successfully!');
      contactForm.reset();
    } else {
      alert('There was an error sending the email. Please try again later.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An unexpected error occurred. Please try again later.');
  });
});