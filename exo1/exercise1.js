// selection du body pour agir dessus
const selectionBody = document.querySelector('Body');

// crée l'enfant div dans body
const carre = document.createElement("div");

// ajouté la classe carre dans la div

carre.classList.add("carre");
// ajout du texte a l'interieur
carre.innerText = "Cliquer vite !!!"

// creation effective de la div
selectionBody.appendChild(carre)

// creation de la methode pour recupéré le css
let proprieteCSS = window.getComputedStyle(carre)
    carreCssListe = 
        "Class : " + carre.className +
        "\nBackground Color : " + proprieteCSS.getPropertyValue("background-color") +
        "\nHeight : " + proprieteCSS.getPropertyValue("height") +
        "\ncolor : " + proprieteCSS.getPropertyValue("color") +
        "\nWidth : " + proprieteCSS.getPropertyValue("width") +
        "\nDisplay : " + proprieteCSS.getPropertyValue("display") +
        "\nFont-Family : " + proprieteCSS.getPropertyValue("font-family")
        
// Ajout de l'ecouteur 
carre.addEventListener("click", () => {
      alert(carreCssListe)
        })