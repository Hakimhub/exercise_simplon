function addStudent(){
    // récupère la saise
    var saisie = document.getElementById("input1").value;
    // code HTML avec la valeur de saisie
    var student =`<li>${saisie}</li>`;
    // position pour insertAdjacentHTML
    var position = "beforeend";
    // récupere la div avec les prénoms
    var myList = document.getElementById("myList");
    //ajoute student à mylist
    myList.insertAdjacentHTML(position, student);

};
function assignFunction(){
var listfinale =document.getElementById('sin')
    // récupère la saise
    var saisie2 = document.getElementById("input2").value;

    //code html 
    //var veilleName = <p>${saisie2}</p>

    // récupere array des prénoms
    var myList = document.querySelectorAll("li");
    //console.log(myList[0]);

    // génere un chiffre random entre 0 et myList.length
    
    // var randomName = myList[Math.floor(Math.random()* myList.length)];
    // console.log(randomName);
    
    // var nomfinale= saisie2 +randomName;

    // randomName.classList.add("aRayer");

    // loop dans myList si l'élémeent à la class a rayer il faut l'enlever du tableau
    
    for (i = 0; i < myList.length; i++){var randomName = myList[Math.floor(Math.random()* myList.length)];
        if(randomName.classList == "aRayer"){}
    }
    var text = `<p>${randomName.textContent} - ${saisie2}</p>`;

    

    listfinale.insertAdjacentHTML("beforeend", text);
};
// function myList(){
        // var str = new String("myList");
        //  document.write(str.strike());
        //  alert(str.strike());
// }