
function addStudent() {
  // récupère la saise
  var saisie = document.getElementById("input1").value;

  if (saisie == "") {
    window.alert("Merci de saisir un nom d'étudiant");
  } else {
    // code HTML avec la valeur de saisie
    var student = `<li>${saisie}</li>`;
    // position pour insertAdjacentHTML
    var position = "beforeend";
    // récupere la div avec les prénoms
    var myList = document.getElementById("myList");
    //ajoute student à mylist
    myList.insertAdjacentHTML(position, student);
    // clean l'input
    document.getElementById("input1").value = "";
  }
}

// assigne une veille à un étudiant disponible
function assignFunction() {
  // récupere array des prénoms
  var myList = document.querySelectorAll("li");
  // récupère la saise
  var saisie2 = document.getElementById("input2").value;
  // génere un chiffre random entre 0 et myList.length
  var randomNumber = Math.floor(Math.random() * myList.length);
  // atribut un nom alétaoire à randomName
  var randomName = myList[randomNumber];

  while (randomName.classList == "aRayer") {
    // récupere array des prénoms
    myList = document.querySelectorAll("li");
    // récupère la saise
    saisie2 = document.getElementById("input2").value;
    // génere un chiffre random entre 0 et myList.length
    randomNumber = Math.floor(Math.random() * myList.length);
    // atribut un nom alétaoire à randomName
    randomName = myList[randomNumber];
  }
  randomName.classList.add("aRayer");

  var name = randomName.textContent;
  // code html avec le prenom est la tache
  var text = `<p>${name} - ${saisie2}</p>`;
  //Recupere la div ou l'on va insérer text
  var myDiv = document.getElementById("nomVeille");
  // insere text
  myDiv.insertAdjacentHTML("beforeend", text);
  // clean l'input
  document.getElementById("input2").value = "";
}

/**
 * -----------------------------------------------------------------------------------------------------------------------------
 * REFRESH BUTTON FUNCTION -----------------------------------------------------------------------------------------------------
 * -----------------------------------------------------------------------------------------------------------------------------
 */

// function refreshFunction() {
  // sélectionne les veille et les Student avec l'id "nomVeille"
  // var veilleElement = document.getElementById("nomVeille");
  // Supprime tous les enfant de "nomVeille"
  // while (veilleElement.firstChild) {
    // veilleElement.removeChild(veilleElement.firstChild);
  // }
  // sélectionne la liste d'étudiant avec l'id "myList"
  // var studentList = document.getElementById("myList");
  // Supprime tous les enfant de "myList"
  // while (studentList.firstChild) {
    // studentList.removeChild(studentList.firstChild);
  // }
// }
// function refreshStudent() {
  // sélectionne la liste d'étudiant avec l'id "myList"
  // var studentList = document.getElementById("myList");
  // Supprime tous les enfant de "myList"
  // while (studentList.firstChild) {
    // studentList.removeChild(studentList.firstChild);
  // }
// }

// function refreshVeille() {
  // sélectionne les veille et les Student avec l'id "nomVeille"
  // var veilleElement = document.getElementById("nomVeille");
  // Supprime tous les enfant de "nomVeille"
  // while (veilleElement.firstChild) {
    // veilleElement.removeChild(veilleElement.firstChild);
  // }
// }

// function controleListeStudent() {
  // var studentList = document.querySelectorAll("li");
  // for (i = 0; i < studentList.length; i++) {}
// }

/**
 * -----------------------------------------------------------------------------------------------------------------------------
 * LOCAL STORAGE           -----------------------------------------------------------------------------------------------------
 * -----------------------------------------------------------------------------------------------------------------------------
 */
// Check browser support
// if (typeof Storage !== "undefined") {
//   // Store
//   localStorage.setItem("myListOfStudent", document.querySelectorAll("li"));
//   // Retrieve
//   document.getElementById("result").innerHTML = localStorage.getItem(
//     "lastname"
//   );
// } else {
//   document.getElementById("result").innerHTML =
//     "Sorry, your browser does not support Web Storage...";
// }
