document.getElementById('navbar').innerHTML = `
    <ul>
      <li><a href="index.html">1:</a></li>
      <li><a href="2.html">2:</a></li>
      <li><a href="3.html">3:</a></li>
      <li><a href="4.html">4:</a></li>
      <li><a href="5.html">5:</a></li>
      <li><a href="6.html">6:</a></li>
      <li><a href="7.html">7:</a></li>
      <li><a href="8.html">8:</a></li>
      <li><a href="9.html">9:</a></li>
      <li><a href="10.html">10:</a></li>
      <li><a href="11.html">11:</a></li>
      <li><a href="12.html">12:</a></li>
      <li><a href="13.html">13:</a></li>
      <li><a href="14.html">14:</a></li>
      <li><a href="15.html">15:</a></li>
      <li><a href="16.html">16:</a></li>
      <li><a href="17.html">17:</a></li>
      <li><a href="18.html">18:</a></li>
      <li><a href="19.html">19:</a></li>
      <li><a href="20.html">20:</a></li>
      <li><a href="21.html">21:</a></li>
      <li><a href="22.html">22:</a></li>
      <li><a href="23.html">23:</a></li>
      <li><a href="24.html">24:</a></li>
      <li><a href="25.html">25:</a></li>
    </ul>
          `;

function setActiveLink() {
  var navbar = document.getElementById('navbar');
  var links = navbar.getElementsByTagName('a');
  var currentUrl = window.location.href;

  for (var i = 0; i < links.length; i++) {
    // console.log(currentUrl);

    // console.log(links[i].href);

    if (links[i].href === currentUrl) {
      links[i].classList.add('active');
    } else {
      links[i].classList.remove('active');
    }
  }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', setActiveLink);
