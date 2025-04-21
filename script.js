// Smooth Scrolling Navigation
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for fixed header height
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Back-to-Top Button
  const backToTopButton = document.createElement('button');
  backToTopButton.textContent = '↑';
  backToTopButton.setAttribute('id', 'back-to-top');
  backToTopButton.style.position = 'fixed';
  backToTopButton.style.bottom = '20px';
  backToTopButton.style.right = '20px';
  backToTopButton.style.padding = '10px';
  backToTopButton.style.border = 'none';
  backToTopButton.style.borderRadius = '50%';
  backToTopButton.style.backgroundColor = '#007bff';
  backToTopButton.style.color = 'white';
  backToTopButton.style.cursor = 'pointer';
  backToTopButton.style.display = 'none';
  backToTopButton.style.zIndex = '1000';
  backToTopButton.style.transition = 'opacity 0.3s ease';
  
  document.body.appendChild(backToTopButton);
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
      backToTopButton.style.opacity = '1';
    } else {
      backToTopButton.style.opacity = '0';
      setTimeout(() => {
        if (window.scrollY <= 300) {
          backToTopButton.style.display = 'none';
        }
      }, 300);
    }
  });
  
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Contact Form Validation
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
  
    let isValid = true;
  
    if (name.value.trim() === '') {
      alert('Name is required.');
      isValid = false;
    }
  
    if (email.value.trim() === '') {
      alert('Email is required.');
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      alert('Please enter a valid email address.');
      isValid = false;
    }
  
    if (message.value.trim() === '') {
      alert('Message is required.');
      isValid = false;
    }
  
    if (isValid) {
      alert('Thank you for your message!');
      name.value = '';
      email.value = '';
      message.value = '';
    }
  });
  
  // Hover Effects on Project Cards
  document.querySelectorAll('.projects-section .card').forEach(card => {
    card.addEventListener('mouseover', () => {
      card.style.transform = 'scale(1.05)';
      card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    });
  
    card.addEventListener('mouseout', () => {
      card.style.transform = 'scale(1)';
      card.style.boxShadow = 'none';
    });
  });