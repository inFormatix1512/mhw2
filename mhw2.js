// Seleziona tutti i link di navigazione
const navLinks = document.querySelectorAll('header nav ul li a');

// Aggiunge un gestore di eventi al clic su ciascun link di navigazione
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Previene il comportamento predefinito del link
        const section = link.getAttribute('data-section'); // Ottiene la sezione corrispondente dall'attributo data-section
        showSection(section); // Mostra la sezione corrispondente
    });
});

// Funzione per mostrare una sezione specifica
function showSection(section) {
    const contentElement = document.getElementById('content');
    contentElement.innerHTML = `<h2>${section.toUpperCase()}</h2><p>Contenuto della sezione ${section}.</p>`;
}

// Seleziona tutti i pulsanti "SCOPRI DI PIÙ"
const scopriDiPiuButtons = document.querySelectorAll('.scopri-di-piu');

// Aggiunge un gestore di eventi al clic su ciascun pulsante "SCOPRI DI PIÙ"
scopriDiPiuButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Hai cliccato su "SCOPRI DI PIÙ"!');
    });
});

// Seleziona tutte le scatole delle immagini
const imageBoxes = document.querySelectorAll('.image-box');

// Aggiunge un gestore di eventi al passaggio del mouse su ciascuna scatola delle immagini
imageBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        // Controlla se l'overlay esiste già
        let overlay = box.querySelector('.overlay');
        if (!overlay) {
            const title = box.getAttribute('data-title');
            const description = box.getAttribute('data-description');
            box.innerHTML += `<div class="overlay"><h4>${title}</h4><p>${description}</p></div>`;
        }
    });

    box.addEventListener('mouseleave', () => {
        const overlay = box.querySelector('.overlay');
        if (overlay) {
            overlay.remove();
        }
    });
});

// Seleziona tutti i pulsanti "LEGGI DI PIÙ"
const leggiDiPiuButtons = document.querySelectorAll('.leggi-di-piu');

// Aggiunge un gestore di eventi al clic su ciascun pulsante "LEGGI DI PIÙ"
leggiDiPiuButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const box = button.closest('.image-box');
        const title = box.getAttribute('data-title');
        const description = box.getAttribute('data-description');
        alert(`Titolo: ${title}\nDescrizione: ${description}`);
    });
});

// Array di URL delle immagini di sfondo
const backgroundImages = [
    'https://th.bing.com/th/id/OIP.SKfWj9pm6ULP2pWAUnhyHgEyDM?rs=1&pid=ImgDetMain',
    'https://www.deabyday.tv/.imaging/default/article/guides/sport-e-fitness/allenarsi/Come-correre-in-salita-sul-tapis-roulant/imageOriginal.jpg',
    'https://th.bing.com/th/id/OIP.JdXCTH1b1_xpy4KO1SidLwHaE8?rs=1&pid=ImgDetMain',
];

let currentImageIndex = 0;

// Funzione per cambiare l'immagine di sfondo
function changeBackgroundImage() {
    const backgroundImage = document.getElementById('bg-image');
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    backgroundImage.src = backgroundImages[currentImageIndex];
}

// Cambia l'immagine di sfondo ogni 5 secondi
setInterval(changeBackgroundImage, 5000);
