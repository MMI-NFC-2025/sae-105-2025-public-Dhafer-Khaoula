document.addEventListener('DOMContentLoaded', () => {
  // Menu Toggle
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');

  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';

      menuBtn.setAttribute('aria-expanded', !isExpanded);
      
      if (isExpanded) {
        menu.setAttribute('hidden', '');
        menu.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('no-scroll');
      } else {
        menu.removeAttribute('hidden');
        menu.setAttribute('aria-hidden', 'false');
        document.body.classList.add('no-scroll');
      }
    });
  }

  // FAQ Accordion
  //URL : https://flytapfest.netlify.app/infos dans la section réglement du festival
  const summaries = document.querySelectorAll('.accordeon summary');

  summaries.forEach(summary => {
    summary.addEventListener("click", (event) => {
      const accordeon = document.querySelector(".accordeon");
      if (accordeon) {
        accordeon.querySelectorAll("details").forEach((det) => (det.open = false));
      }
    });
  });

  // *** CAROUSEL *** ne marche pas  URL : https://flytapfest.netlify.app/scenes dans la section Galerie du festival
  const carousel = document.querySelector(".carousel__container");
  const prevButton = document.querySelector(".carousel__button--prev");
  const nextButton = document.querySelector(".carousel__button--next");
  const premierItem = document.querySelector(".carousel__item");

  // Largeur de défilement d'un item
  if (carousel) {
    // Scroll au clic sur le bouton précédent
    prevButton.addEventListener("click", () => {
      const scrollAmount = premierItem.clientWidth;
      carousel.scrollBy({left: -scrollAmount, behavior: "smooth"});
    });

    // Scroll au clic sur le bouton suivant
    nextButton.addEventListener("click", () => {
      const scrollAmount = premierItem.clientWidth;
      carousel.scrollBy({left: +scrollAmount, behavior: "smooth"});
    });
  }
  
});
