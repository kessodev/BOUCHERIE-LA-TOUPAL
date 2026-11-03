// Barre de navigation : devient rouge quand on descend
const nav = document.getElementById("mainNav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Année automatique dans le footer
document.getElementById("annee").textContent = new Date().getFullYear();

// Formulaire de contact : vérification simple
const form = document.getElementById("contactForm");
const messageBox = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nom = document.getElementById("nom").value.trim();
  const tel = document.getElementById("telephone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!nom || !tel || !message) {
    messageBox.innerHTML = '<div class="alert alert-danger">Merci de remplir tous les champs.</div>';
    return;
  }

  // Pour l'instant : on ouvre WhatsApp avec le message prêt à envoyer.
  // Remplace NUMERO par le numéro au format international (ex : 221770000000)
  const numero = "NUMERO";
  const texte = encodeURIComponent(`Bonjour, je suis ${nom} (${tel}). ${message}`);
  window.open(`https://wa.me/${numero}?text=${texte}`, "_blank");

  messageBox.innerHTML = '<div class="alert alert-success">Merci ! Votre message est prêt à être envoyé.</div>';
  form.reset();
});