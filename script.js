const buttons = document.querySelectorAll('nav button');
const sections = document.querySelectorAll('section');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        sections.forEach(s => s.classList.add('hidden'));
        document.getElementById(btn.dataset.section).classList.remove('hidden');
    });

    window.addEventListener("load", () => {
        setTimeout(() => {
            document.body.classList.add("loaded");
        }, 1500); // wait ~1.5s after hello finishes
    });

});
