
// int (interger) = un entier de 0 al'infini
// string= = chaine de caratere
// bool = booléans true ou false

//variable 
// var number = 5;
// console.log(number * 2);
// var note_maths = 15;
// var note_francais = 12; 
// var note_histoire_geo = 9; 
// var moyenne = ( 15 + 12 + 9) / 3;
 

// console.log(note_maths + note_francais + note_histoire_geo);
// console.log( 'La moyenne est de ',  moyenne ,' / 20.');

// if else elseif
// var prenom = 'rob'

// if(prenom === 'seb' || prenom === 'rob'){
//     console.log("bienvenue")
// }else{
//     console.log("aurevoir")
// }

// var age = prompt("veuillez entrer votre age")
// var prenom = "toto";

// if( age < 18){

//     console.log("le film n'est pas pour toi tu vas flipper")

// }else if(age > 70){

//     console.log("tu peux pas mon vieux tu vas mourrir")

// }else{

//     if(prenom === "robert"){
//         console.log("eh robert rentre a la maison")
//     }else{
//         console.log("Bon film")
//     }

// }

// var int = prompt("veuillez entrer une heure")
// if(int <= 0){
//     console.log("ce n'est pas bon");
// }else if(int < 12){
//     console.log("c'est le matin");
// }else if(int < 18){
//     console.log("on l'apres midi");
// }else if(int <= 24){
//     console.log("on est la nuit");
// }
// else(int<=25, "");{
//     console.log("ce n'est pas bon ")
// }

// var heure = parseInt(prompt("veuillez entrer une heure"));
// // verifier si la variable est un int ou pas

// if(Number.isInteger(heure)){

//     if(heure > 0 && heure < 24){
        
//         if(heure >= 6 && heure <= 12){
//             console.log("c'est l'heure de se reveiller")
//         }else if( heure >12 && heure <= 18){
//             console.log("c'est l'apres midi");
//         }else{
//             console.log("c'est la nuit");
//         }

//     }else{
//         console.log("L'heure rentrer n'exista pas");
//     }

// }else{
//     console.log("oh rentre une heure tu feinte");
// }


var baguette = 4;
var gateau = 2.64;  
var jean = 20;
var note = (baguette * 3) + gateau;
var resultat = jean - note;
 

console.log( 'il lui reste ',  resultat.toFixed(2) ,'sur les 20euros.');
