
        document.addEventListener('DOMContentLoaded', () => {
            const menuToggle = document.querySelector(".menu-toggle")
            const navLinks = document.querySelector(".nav-links")
            menuToggle.addEventListener("click", () => {
                navLinks.classList.toggle("active")
            })

            // Animate skill bars on scroll
            const skillBars = document.querySelectorAll('.skill-progress');
            const animateSkills = () => {
                skillBars.forEach(bar => {
                    const percentage = bar.parentElement.previousElementSibling.children[1].textContent;
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = percentage;
                    }, 200);
                });
            };

            const skillsSection = document.querySelector('.skills-section');
            if (skillsSection) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            animateSkills();
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.5});

                observer.observe(skillsSection);
            }
        });

        // EmailJS initialization
emailjs.init("xCznA1W2dUJX24J4o"); // Public key EmailJS dashboard se milega

// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Send button ko loading state mein kardo
    const btn = this.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    // EmailJS ke through email bhejo
    emailjs.sendForm('service_nxutf7o', 'template_zfgjmzf', this)
        .then(() => {
            // Success case
            btn.textContent = 'Message Sent!';
            this.reset(); // Form clear kardo
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
            }, 3000);
        }, (error) => {
            // Error case
            console.log('Error:', error);
            btn.textContent = 'Failed to send';
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
            }, 3000);
        });
});


    // recatcha 
const axios = require('axios');

app.post('/submit', async (req, res) => {
  const recaptchaResponse = req.body['g-recaptcha-response'];
  const secretKey = '6Lf9LbUqAAAAAPFxmvdBX3o-tpiygB0gEL5nMdcX';

  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaResponse}`;
  const response = await axios.post(verifyUrl);

  if (response.data.success) {
    res.send('Form submitted successfully!');
  } else {
    res.status(400).send('CAPTCHA verification failed!');
  }
});

// Validation with reCaptcha 
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Default form submission roko
    
    // Form fields reference
    const nameField = this.querySelector('input[name="from_name"]');
    const emailField = this.querySelector('input[name="email"]');
    const messageField = this.querySelector('textarea[name="message"]');
    const btn = this.querySelector('button');

    // Validation checks
    if (!nameField.value.trim()) {
        alert('Please enter your name.');
        nameField.focus();
        return;
    }

    if (!validateEmail(emailField.value.trim())) {
        alert('Please enter a valid email address.');
        emailField.focus();
        return;
    }

    if (!messageField.value.trim()) {
        alert('Please enter your message.');
        messageField.focus();
        return;
    }

    // If validation passes, proceed with EmailJS
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    emailjs.sendForm('service_nxutf7o', 'template_zfgjmzf', this)
        .then(() => {
            // Success case
            btn.textContent = 'Message Sent!';
            this.reset(); // Clear form
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
            }, 3000);
        }, (error) => {
            // Error case
            console.error('Error:', error);
            btn.textContent = 'Failed to send';
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
            }, 3000);
        });
});

// Email validation function
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
