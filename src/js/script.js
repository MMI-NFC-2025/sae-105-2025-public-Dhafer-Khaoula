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
