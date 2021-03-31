var chancelist = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];

var liste_rouge = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];

var liste_noir = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];

var options_pari = [0.1, 0.5, 1, 5, 10, 50, 100, 500, 1000];

//Quantité d'argent dans la banque
var banque = 1000;

//Nombre Roullé par la roulette
var resultat_roulle = 0;

//Quantité pariée sur la case Pair
var pari_pair = 0;
//Quantité pariée sur la case Impair
var pari_impair = 0;
//Quantité pariée sur les cases Rouges
var pari_rouge = 0;
//Quantité pariée sur les cases Noires 
var pari_noir = 0;
//Quantité pariée sur le zéro
var pari_vert = 0;
RefreshBanque();
RefreshQuantitePari();

//ParierSur Sert a ajouter une mise sur une case

function RefreshQuantitePari(){
  document.getElementById("Somme-misee-pair").innerHTML = pari_pair;
  document.getElementById("Somme-misee-impair").innerHTML = pari_impair;
	document.getElementById("Somme-misee-rouge").innerHTML = pari_rouge;
	document.getElementById("Somme-misee-noir").innerHTML = pari_noir;
	document.getElementById("Somme-misee-vert").innerHTML = pari_vert;
};

function ResetPari(){
  pari_pair = 0;
  pari_impair = 0;
  pari_rouge = 0;
  pari_noir = 0;
  pari_vert = 0;
}

function PariSur(bouton){
  //Bloquer la capacité de miser plus que la Quantité d'arget dans la banque
  if (banque >= options_pari[i_options_pari]){

    if (bouton == "Pair") {
      pari_pair += options_pari[i_options_pari];
      banque -= options_pari[i_options_pari];
    } 
    else if (bouton == "Impair") {
      pari_impair += options_pari[i_options_pari];
      banque -= options_pari[i_options_pari];
    }
    
    else if (bouton == "Rouge") {
      pari_rouge += options_pari[i_options_pari];
      banque -= options_pari[i_options_pari];
    }
    else if (bouton == "Noir") {
      pari_noir += options_pari[i_options_pari];
      banque -= options_pari[i_options_pari];
    }
    else if (bouton == "Vert") {
      pari_vert += options_pari[i_options_pari];
      banque -= options_pari[i_options_pari];
    }
  }
  
  RefreshQuantitePari();
  RefreshBanque();
}


//La fonction NombreRandom génere un nombre entier entre 0 (compris) et 36 (compris)
function NombreRandom(){
  resultat_roulle = Math.floor(Math.random() * 37);
  document.getElementById("randomNumber").innerHTML = resultat_roulle;
  VerifierGains();
}

// Vérifie la correspondance pari - NombreRandom pour pari impair

function Impair(){
  
  if(resultat_roulle % 2 !== 0){
    banque += pari_impair*2;
    RefreshBanque();
  }
  
}

// Vérifie la correspondance pari - NombreRandom pour pari pair 

function Pair(){

  if (resultat_roulle % 2 == 0 && resultat_roulle !== 0){  
    banque += pari_pair*2; 
    RefreshBanque();
  }


};


function Rouge(){
  if (liste_rouge.includes(resultat_roulle)){
     banque += pari_rouge*2;
    RefreshBanque();

  }
  
  
}

function Noir(){
  if (liste_noir.includes(resultat_roulle)){
     banque += pari_noir*2;
    RefreshBanque();

  }
}


function Vert(){
  if (resultat_roulle == 0) {
     banque += pari_vert*36;
    RefreshBanque();

  }  
}

function RefreshBanque(){
  document.getElementById("banque").innerHTML = 'banque: ' + banque;
}

var i_options_pari = 0;

function Multi_pari(){
  i_options_pari += 1;
  if (i_options_pari == options_pari.length){
  
    i_options_pari = 0;
  };
  document.getElementById("text-multi-pari").innerHTML = "ajoutez: " + options_pari[i_options_pari];
}

function VerifierGains(){
  Impair();
  Pair();
  Noir();
  Rouge();
	Vert();
  ResetPari();
  RefreshQuantitePari();
}


