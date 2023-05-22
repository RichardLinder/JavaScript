// selection du body pour agir dessus
const selectionMain = document.querySelector('main');

// crée l'enfant div dans body
const carre = document.createElement("div");

// ajouté la classe carre dans la div
carre.classList.add("carre");


// // creation effective de la div
// selectionMain.appendChild(carre);

// boucle for de 4
for (let i = 1; i < 5; i++) 
{
    let clicker = false ;
    // clonage de la box
        let nouveauCarre = carre.cloneNode() 
    // avec le numéro de la box à l'intérieur de celle ci
    nouveauCarre.innerText = i;
    nouveauCarre.setAttribute("id",i);

    // creation effective des div
    selectionMain.appendChild(nouveauCarre);


    
    nouveauCarre.addEventListener("click", () => {

        if (!clicker) {
            nouveauCarre.classList.add("carreCliquer");
            nouveauCarre.classList.remove("carre");
            clicker = true;
            
        }  else  if (clicker){
            nouveauCarre.classList.add("carre");
            nouveauCarre.classList.remove("carreCliquer");
            clicker = false;
        }
            
    })
}


// for (let i = 1; i < 5; i++) {

//     let selection = document.getElementById(i);
//     selection.addEventListener('click', console.log("test"))
    
// }