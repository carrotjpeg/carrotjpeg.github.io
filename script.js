const buttons = document.querySelectorAll('nav button');
const sections = document.querySelectorAll('section');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        sections.forEach(s => s.classList.add('hidden'));
        document.getElementById(btn.dataset.section).classList.remove('hidden');
    });
});
