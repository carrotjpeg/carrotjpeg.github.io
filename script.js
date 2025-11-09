/*const buttons = document.querySelectorAll('nav button');
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

});*/

window.addEventListener("DOMContentLoaded", () => {
    // Wait for "Hello" + "I'm Evana Thomson" to animate first (~1.5s)
    setTimeout(() => {
        document.body.classList.add("loaded");
    }, 1800); // small delay (~300ms after hello animation)
});
