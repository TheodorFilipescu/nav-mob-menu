// Obține elementul butonului
var menuButton = document.getElementById('menu-button');

// Obține containerul-tel
var containerTel = document.querySelector('.container-tel');

// Adaugă o variabilă pentru a reține starea clasei "despartirea"
var despartireaState = false;

// Adaugă un eveniment de clic pentru buton
menuButton.addEventListener('click', function() {
    // Adaugă clasa container-tel-show pentru a afișa containerul-tel
    containerTel.classList.toggle('container-tel-show');

// Adaugă clasa "tranzitie" la elementul "container-tel" când se apasă pe "menu-button"
containerTel.classList.toggle('tranzitie');

// Verifică dacă clasa "tranzitie" a fost adăugată sau eliminată
if (containerTel.classList.contains('tranzitie')) {
  // Așteaptă o mică întârziere pentru a permite aplicarea clasei "tranzitie"
  setTimeout(function() {
    // Modifică proprietățile CSS ale elementului pentru a crea efectul de tranziție
    containerTel.style.opacity = '1';
    containerTel.style.left = '0';
  }, 10);
} else {
  // Modifică proprietățile CSS ale elementului pentru a crea efectul de tranziție
  containerTel.style.opacity = '0';
  containerTel.style.left = '0';

  // Așteaptă o mică întârziere pentru a permite afișarea efectului de tranziție
  setTimeout(function() {
    // Elimină clasa "container-tel-show" pentru a ascunde elementul
    containerTel.classList.remove('container-tel-show');
  }, 300);
}

    // Obține elementele liniei
    var linie1 = document.getElementsByClassName('container-nav-el-3-linie')[0];
    var linie2 = document.getElementsByClassName('container-nav-el-3-linie')[1];

    // Verifică starea curentă a clasei "despartirea"
    if (!despartireaState) {
        // Elimină clasa despartirea de la prima linie
        linie1.classList.remove('despartirea');
    } else {
        // Adaugă clasa despartirea la prima linie
        linie1.classList.add('despartirea');
    }

    // Inversează starea clasei "despartirea"
    despartireaState = !despartireaState;

    // Schimbă clasa CSS pentru linie1
    linie1.classList.toggle('roteste-sus');

    // Schimbă clasa CSS pentru linie2
    linie2.classList.toggle('roteste-jos');
    linie2.classList.toggle('spatiu-jos');
});



/******************************************************/


// Obține elementul container-nav-total
var containerNavTotal = document.querySelector('.container-nav-total');

// Obține poziția verticală a containerului-nav-total
var containerNavTotalOffsetTop = containerNavTotal.offsetTop;

// Adaugă o clasă CSS pentru a face elementul sticky
function makeSticky() {
  containerNavTotal.classList.add('sticky');
}

// Elimină clasa CSS pentru a elimina efectul sticky
function removeSticky() {
  containerNavTotal.classList.remove('sticky');
}

// Adaugă un eveniment de scroll pentru a urmări poziția paginii
window.addEventListener('scroll', function() {
  // Obține poziția verticală curentă a paginii
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Verifică dacă poziția verticală a paginii depășește poziția containerului-nav-total
  if (scrollTop >= containerNavTotalOffsetTop) {
    makeSticky();
  } else {
    removeSticky();
  }
});


