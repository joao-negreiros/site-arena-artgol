// WhatsApp da arena (DDD 41 + número da placa da fachada). Confirmar com o cliente.
const WHATSAPP = '5541984632015';

document.querySelectorAll('[data-wa]').forEach(a => {
  a.href = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(a.dataset.wa);
  a.target = '_blank';
  a.rel = 'noopener';
});

const menu = document.getElementById('menu');
const burger = document.getElementById('burger');
const fechar = () => {
  menu.classList.remove('aberto');
  burger.setAttribute('aria-expanded', 'false');
};
burger.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  burger.setAttribute('aria-expanded', String(aberto));
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', fechar));

document.getElementById('ano').textContent = new Date().getFullYear();

// entrada suave das seções
const alvos = document.querySelectorAll('.card, .tab, .quadra-card, .mapa, .faixa-in > div');
alvos.forEach(el => el.classList.add('rev'));
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
  }), { threshold: .15 });
  alvos.forEach(el => io.observe(el));
} else {
  alvos.forEach(el => el.classList.add('on'));
}
