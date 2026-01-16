        document.addEventListener('DOMContentLoaded', () => {
            const menuToggle = document.querySelector(".menu-toggle")
            const navLinks = document.querySelector(".nav-links")
            menuToggle.addEventListener("click", () => {
                navLinks.classList.toggle("active")
            })

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

emailjs.init("xCznA1W2dUJX24J4o");


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
 
    const btn = this.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    emailjs.sendForm('service_nxutf7o', 'template_zfgjmzf', this)
        .then(() => {

            btn.textContent = 'Message Sent!';
            this.reset(); 
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
            }, 3000);
        }, (error) => {

            console.log('Error:', error);
            btn.textContent = 'Failed to send';
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
            }, 3000);
        });
});


document.getElementById('contact-form').addEventListener('submit', function() {
    gtag('event', 'form_submission', {
        'event_category': 'Contact',
        'event_label': 'Form Submitted',
    });
});

document.addEventListener('DOMContentLoaded', () => {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 150,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 4,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 7,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "bounce",
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 150,
                    duration: 0.8
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
});

document.addEventListener('DOMContentLoaded', () => {
    fetch('particles-config.json')
        .then(response => response.json())
        .then(config => {
            particlesJS('particles-hero', config); 
        })
        .catch(error => {
            console.error("Error loading particles configuration:", error);
        });
});
