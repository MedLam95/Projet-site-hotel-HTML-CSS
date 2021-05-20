document.getElementById('id1').addEventListener('click', fonction1);
console.log(id1);
function fonction1() {
    alert('La version EN du site sera bientôt disponible !');
    console.log('la fonction démarre !')
}

document.getElementById('id2').addEventListener('click', fonction2);
console.log(id2);
function fonction2() {
    alert('La boutique sera bientôt en ligne !');
    console.log('la fonction démarre !')
}

document.getElementById('id3').addEventListener('click', fonction3);
console.log(id3);
function fonction3() {
    alert('Vous êtes inscrit à la NewsLetter !');
    console.log('la fonction démarre !')
}

function imprimer_page() {
    window.print();
}


