document.addEventListener("DOMContentLoaded", function() {
    const hoverLink = document.getElementById('hover-link');
    const block2 = document.getElementById('block-24-2');
    const clickLink = document.getElementById('click-link');
    const block3 = document.getElementById('block-24-3');

    hoverLink.addEventListener('mouseover', function() {
      block2.style.display = 'block';
      window.scrollTo({
        top: block2.offsetTop,
        behavior: 'smooth'
      });
    });

    clickLink.addEventListener('click', function() {
        block3.style.display = 'block';
        window.scrollTo({
          top: block3.offsetTop,
          behavior: 'smooth'
        });
      });
  });