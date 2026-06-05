// rotate.js
// Egyszerű, kis memóriaigényű rotáló doboz
document.addEventListener('DOMContentLoaded', function () {
  const items = Array.from(document.querySelectorAll('#zolteach-box .rotate-item'));
  if (!items.length) return;

  let index = 0;
  const show = i => {
    items.forEach((el, idx) => {
      el.classList.toggle('active', idx === i);
    });
  };

  show(index);
  const interval = 5000; // 5 másodpercenként vált
  const timer = setInterval(() => {
    index = (index + 1) % items.length;
    show(index);
  }, interval);

  // Ha az oldal elhagyja a lapot (hidden), szüneteltesse a váltást
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) clearInterval(timer);
  });
});
