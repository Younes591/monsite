// =============================================================
// script.js
// Un seul rôle ici : afficher l'année en cours dans le pied de page,
// pour ne jamais avoir à la mettre à jour à la main chaque année.
// =============================================================

// On récupère l'élément <span id="annee-courante"> dans le HTML
const elementAnnee = document.getElementById("annee-courante");

// On y insère l'année actuelle, calculée par le navigateur
if (elementAnnee) {
  const anneeActuelle = new Date().getFullYear();
  elementAnnee.textContent = anneeActuelle;
}