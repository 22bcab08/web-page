const menuToggle = document.getElementById('menu-toggle');
const navItems = document.getElementById('nav-items');

// Toggle menu visibility for mobile
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navItems.classList.toggle('show');
  });
}

// Handle form submission
function handleSubmit(event) {
  event.preventDefault();
  
  const name = sanitizeInput(document.getElementById('name').value);
  const email = sanitizeInput(document.getElementById('email').value);
  const message = sanitizeInput(document.getElementById('message').value);
  
  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  const formMessage = document.getElementById('formMessage');
  formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
  document.querySelector('.contact-form form').reset();
}

// Sanitize input to prevent XSS
function sanitizeInput(input) {
  const tempDiv = document.createElement('div');
  tempDiv.textContent = input;
  return tempDiv.innerHTML;
}

