function myFunction() {
    let element = document.body;
    let navbar = document.getElementById('navbar');
    element.classList.toggle("dark-mode");
    navbar.classList.toggle("dark-mode");


 }



 function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }





  document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.getElementById('burger-icon');
    const menuList = document.querySelector('.menu-list');
    const overlay = document.getElementById('overlay');
  
    burgerIcon.addEventListener('click', function() {
      menuList.classList.toggle('active');
      overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
    });
  
    overlay.addEventListener('click', function() {
      menuList.classList.remove('active');
      overlay.style.display = 'none';
    });
  });




  let topButton = document.getElementById("GoToTop__Button");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }