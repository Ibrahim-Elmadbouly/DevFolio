const toggler = document.querySelector('.navbar-toggler');
        const openIcon = toggler.querySelector('.open-icon');
        const closeIcon = toggler.querySelector('.close-icon');
      
        toggler.addEventListener('click', function () {
          setTimeout(() => {
            const expanded = toggler.getAttribute('aria-expanded') === 'true';
            openIcon.classList.toggle('d-none', expanded);
            closeIcon.classList.toggle('d-none', !expanded);
          }, 100);
        });

document.querySelectorAll('.dropdown-menu').forEach(menu => {
  menu.addEventListener('click', function(e) {
    e.stopPropagation();
  });
});

document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed('#typedText', {
        strings: [
            "Designer",
            "Developer",
            "Freelancer",
            "Photographer",
        ],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        smartBackspace: true,
        loop: true
    });
});

function animateCounter(element, target, duration = 3000) {
    let start = null;
    const display = element;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const easeInOutCubic = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      const current = Math.floor(easeInOutCubic * target);

      display.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        display.textContent = target;
      }
    }

    requestAnimationFrame(step);
  }


  document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter-count");

    counters.forEach(function (counter) {
      const target = parseInt(counter.textContent, 10);
      animateCounter(counter, target);
    });
  });

  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });

  window.addEventListener('load', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    }
  });