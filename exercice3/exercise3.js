//  variable " globale"
// 
// 
round=0;
// creation tableau des symbole
const symbole = ["𝖷","⭘"];

// variable pour savoir quelle joueur "joue"
 let isFirstPlayer =true;

// variable du text
 let textedestatus = document.getElementById("text");


// début sript
// 

// selection du main pour agir dessus
const selectionMain = document.querySelector('main');

// crée l'enfant div dans main
const carre = document.createElement("div");

// ajouté la classe carre dans la div
carre.classList.add("carre");


// // creation effective de la div
// selectionMain.appendChild(carre);


textedestatus.innerText= "c'est au tour du joueur un";
// boucle for de 4
for (let i = 0; i < 9; i++) 
{
    // clonage de la box
        let nouveauCarre = carre.cloneNode();
    // avec le numéro de la box à l'intérieur de celle ci

    // creation effective des div
    selectionMain.appendChild(nouveauCarre);
    nouveauCarre.setAttribute("id",i);
    
    
    let selection = document.getElementById(i);

    selection.addEventListener  
    ("click",() => 
        {if (round==8) {
            textedestatus.innerText= "Partie finis";
            if (isFirstPlayer ) 
            {
                selection.innerText =symbole[0];

            }else {
                selection.innerText =symbole[1];

            }
            
        }else
                if (isFirstPlayer && nouveauCarre.innerText == "") 
            {
                selection.innerText =symbole[0];
                isFirstPlayer= false
                textedestatus.innerText= "c'est au tour du joueur deux";
                round++

            } else if (!isFirstPlayer && nouveauCarre.innerText == "")
            {
                selection.innerText =symbole[1];

                isFirstPlayer= true
                textedestatus.innerText= "c'est au tour du joueur un";
                round++

                
            }else
            {
                console.log("out");
            }
            

        }
    )
}
