function addStudent() {
  // récupère la saise
  var saisie = document.getElementById("input1").value;

  if (saisie == "") {
    // Alert lorsque la remplissage est vide.
    window.alert("Merci de écrivez un nom avant de continuer");
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

// fonction qui cré un tableau des student sans class
function checkClass() {
  // reécupere la liste d'étudiant
  var studentList = document.querySelectorAll("li");
  // initialise un tableau vide
  var newStudentList = [];
  // on boucle sur le tableau d'étudiant
  studentList.forEach((element) => {
    // si il à pas la class aRayer
    if (!element.classList.contains("aRayer")) {
      // on ajoute l'etudiant dans un nouveau tableau
      newStudentList.push(element);
    }
  });
  // renvoie nouveau tableau d'étudiant sans class
  return newStudentList;
}

// elle s'execute quand on clique sur le bouton 
function add() {
  // récupère la saise
  var saisie2 = document.getElementById("input2").value;

  // declare un tableau en utilisant la fonction qui nous renvoie un tableau d'étudiant sans class
  let noClassArray = checkClass();

  // on choisit au hasard un étudiant sans class
  let randomStudent = noClassArray[Math.floor(Math.random() * noClassArray.length)];

  // on lui donne la classe aRayer
  randomStudent.classList.add("aRayer");

  // on récupere le prenom de l'étudiant
  var name = randomStudent.textContent;
  // on créer le code HTML 
  var text = `<p>${name} - ${saisie2}</p>`;

  // on récupere la div ou on va insérer le code HTML
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
function refreshStudent() {
  // sélectionne la liste d'étudiant avec l'id "myList"
  var studentList = document.getElementById("myList");
  // Supprime tous les enfant de "myList"
  while (studentList.firstChild) {
    studentList.removeChild(studentList.firstChild);
  }
}

function refreshVeille() {
  // sélectionne les veille et les Student avec l'id "nomVeille"
  var veilleElement = document.getElementById("nomVeille");
  // Supprime tous les enfant de "nomVeille"
  while (veilleElement.firstChild) {
    veilleElement.removeChild(veilleElement.firstChild);
  }
}

function refreshFunction() {
  refreshStudent();
  refreshVeille();
}

function freeStudent(){
  // reécupere la liste d'étudiant
  var studentList = document.querySelectorAll("li");
  // je fais une boucle dans ma liste d'étudiant
  for (i = 0; i < studentList.length; i++){
    // si étudiant à la class aRayer
    if (studentList[i].classList.contains("aRayer")){
      //remove la class aRayer
      studentList[i].classList.remove("aRayer")
      // ajoute la class nonRayer
      studentList[i].classList.add("nonRayer")
    }
  }
}



/**LOcal Storage */

if (typeof(Storage) !== "undefined") {
  // Code for localStorage
  window.localStorage.setItem('user', JSON.stringify(myList));
  } else {
  // No web storage Support.
}



function clear(){
  window.localStorage.clear();
  window.localStorage.getItem('myList');
}
