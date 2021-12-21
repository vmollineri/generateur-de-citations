// Sélection des éléments
let citation = document.querySelector('#citation');
let auteur = document.querySelector('#auteur');
let nouveau = document.querySelector('#nouveau');

let dernier = 0;
let nombreAleatoire = 0;

// Tableau de citations
let citations = [["La beauté est dans les yeux de celui qui regarde.", "Oscar Wilde"], ["Le courage n'est pas l'absence de peur, mais la capacité de vaincre ce qui fait peur.", "Nelson Mandela"], ["Le souvenir, c'est la présence invisible.", "Victor Hugo"], ["Vis comme si tu devais mourir demain. Apprends comme si tu devais vivre toujours.", "Gandhi"], ["Un problème sans solution est un problème mal posé.", "Albert Einstein"], ["La vie sans musique est tout simplement une erreur, une fatigue, un exil.", "Friedrich Nietzsche"], ["Deux choses sont infinies : l'Univers et la bêtise humaine. Mais en ce qui concerne l'Univers, je n'en ai pas encore acquis la certitude absolue.", "Albert Einstein"], ["Ce qui compte, chez un homme, ce n'est pas la couleur de sa peau ou la texture de sa chevelure, mais la texture et la qualité de son âme.", "Martin Luther King"], ["Si ceux qui disent du mal de moi savaient exactement ce que je pense d'eux, ils en diraient bien davantage.", "Sacha Guitry"], ["Quand on veut on peut, quand on peut on doit.", "Napoléon Bonaparte"], ["Qui veut la paix prépare la guerre.", "Jules César"], ["Il n'y a point de pires sourds que ceux qui ne veulent pas entendre.", "Molière"]];

// Déclaration fonction nombre aléatoire
function genererNombreAleatoire(entier) {
    return Math.floor(Math.random() * Math.floor(entier));
}

nouveau.addEventListener('click', () => {
    do {
        nombreAleatoire = genererNombreAleatoire(citations.length);
    } while (dernier == nombreAleatoire);

    citation.textContent = citations[nombreAleatoire][0];
    auteur.textContent = citations[nombreAleatoire][1];

    dernier = nombreAleatoire;
});