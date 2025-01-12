
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