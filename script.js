document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('revealed');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.timeline-item, .focus-card, .stat-card').forEach((element) => observer.observe(element));
