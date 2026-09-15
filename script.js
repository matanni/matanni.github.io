const weddingDate = new Date("2026-10-31T15:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Lasketaan päivät, tunnit ja minuutit
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const countdownElement = document.getElementById("countdown");

    if (countdownElement) {
        if (distance > 0) {
            countdownElement.innerHTML = `Juhliin on aikaa: <strong>${days}</strong> päivää, <strong>${hours}</strong> tuntia ja <strong>${minutes}</strong> minuuttia!`;
        } else {
            countdownElement.innerHTML = "Tänään juhlitaan!";
        }
    }
}

// Päivitetään laskuri heti ja sen jälkeen sekunnin välein
updateCountdown();
setInterval(updateCountdown, 1000);

// Aseta haluamasi salasana tähän:
// 1. SALASANAN TARKISTUS
function checkPassword() {
    var password = document.getElementById("password-input").value;
    
    if (password === "30vuotias") {
        // Piilotetaan salasanasivu
        document.getElementById("password-overlay").style.cssText = "display: none !important;";
        
        // Tuodaan etusivun sisältö näkyviin
        document.getElementById("main-content").style.cssText = "display: block !important;";
    } else {
        document.getElementById("error-message").style.display = "block";
    }
}



// 2. VÄLILEHTIEN VAIHTO
function openTab(event, tabName) {
    // Piilotetaan kaikki välilehtien sisällöt
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active-content");
    }

    // Poistetaan active-luokka kaikista valikkonapeista
    const tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Näytetään vain valittu välilehti
    document.getElementById(tabName).classList.add("active-content");
    
    // Asetetaan klikattu nappi aktiiviseksi
    if (event) {
        event.currentTarget.classList.add("active");
    }
}

// Apufunktio etusivun avaamiseen kirjautumisen yhteydessä
function openInitialTab(tabName) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active-content");
    }
    
    const tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
        if (tabButtons[i].getAttribute("onclick").includes(`'${tabName}'`)) {
            tabButtons[i].classList.add("active");
        }
    }

    document.getElementById(tabName).classList.add("active-content");
}