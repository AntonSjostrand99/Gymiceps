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


  function addToCart(button) {
    // Sparar den ursprungliga knappens text
    var originalText = button.textContent;

    // Uppdaterar knappens text och inaktiverar knappen
    button.textContent = "Tillagd";
    button.disabled = true;

    // Återställer knappens text och aktiverar knappen efter 3 sekunder (justera vid behov)
    setTimeout(function () {
      button.textContent = originalText;
      button.disabled = false;
    }, 2000); // 3000 millisekunder = 3 sekunder
  }



/* const form = document.getElementById('contactForm');
const phoneInput = document.getElementById('phone');
const phoneWarning = document.getElementById('phoneWarning');

form.addEventListener('submit', function (event) {
  if (!isValidPhone(phoneInput.value)) {
    phoneWarning.textContent = 'Ogiltigt telefonnummer. Använd endast siffror.';
    event.preventDefault();
  } else {
    phoneWarning.textContent = '';
  }
});

window.addEventListener('beforeunload', function (event) {
  event.returnValue = 'Vill du verkligen lämna sidan? Dina ändringar kommer att förloras.';
});

function isValidPhone(phone) {
  const phonePattern = /^\d*$/; // Endast siffror, inget specifikt format
  return phonePattern.test(phone);
}
 */




const form = document.getElementById('contactForm');
const confirmationMessage = document.querySelector('.confirmation-message');

// Lägg till eventlyssnare för formulärsubmit
form.addEventListener('submit', function (event) {
    // Visa bekräftelsemeddelande
    confirmationMessage.style.display = 'block';

    // Förhindra formuläret från att skickas till servern och uppdatera sidan
    event.preventDefault();

    // Dölj bekräftelsemeddelandet efter 3 sekunder (justera vid behov)
    setTimeout(function () {
        confirmationMessage.style.display = 'none';
    }, 3000);
});

// Lägg till eventlyssnare för försök att lämna sidan
window.addEventListener('beforeunload', function (event) {
    // Kontrollera om formuläret är oskickat
    if (confirmationMessage.style.display === 'block') {
        return null;
    }

    // Om formuläret inte har skickats, visa varningsmeddelande
    const message = 'Vill du verkligen lämna sidan? Dina ändringar kommer att förloras.';
    event.returnValue = message;
    return message;
});