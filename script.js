
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