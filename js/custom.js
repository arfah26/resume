window.addEventListener('scroll', function() {
  var sidebar = document.getElementById('sidebar');
  if (window.scrollY > 500) { // Adjust the scroll value as needed
      sidebar.classList.add('show-sidebar');
  } else {
      sidebar.classList.remove('show-sidebar');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  function setActiveLink() {
      let index = sections.length;

      while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
      
      navLinks.forEach((link) => link.classList.remove('active'));
      navLinks[index].classList.add('active');
  }

  setActiveLink();
  window.addEventListener('scroll', setActiveLink);
});
