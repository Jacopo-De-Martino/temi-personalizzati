
const titleElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6'); // Solo i titoli
const paragraphElements = document.querySelectorAll('p'); // Solo i paragrafi
const cardTitleElements = document.querySelectorAll('.card-title-theme'); // Titolo specifico della card
const slides = document.querySelectorAll('[name="slide"]'); // Slider per il tema
const header = document.querySelector('header') || document.body; // Usa `main` se esiste, altrimenti `body`
const nav = document.querySelector('nav'); // Navbar principale
const footer = document.querySelector('footer'); // Footer
const successButtons = document.querySelectorAll('.suc-btn'); // Pulsanti di successo
const infoButtons = document.querySelectorAll('.inf-btn'); // Pulsanti informativi


            // Definisci i temi
            
                const themes = {
                    '1': {
                        title: ['fenice-title'],
                        paragraph: ['fenice-paragraph'],
                        header: 'fenice-background',
                        nav: {
                            class: 'fenice-nav',
                            links: ['Link 1', 'Link 2', 'Link 3']
                        },
                        buttons: [
                            { class: 'fenice-btn-success' },
                            { class: 'fenice-btn-info' }
                        ],
                        footer: 'fenice-footer'
                    },
                    '2': {
                        title: ['gru-title'],
                        paragraph: ['gru-paragraph'],
                        header: 'gru-background',
                        nav: {
                            class: 'gru-nav',
                            links: ['Link 1', 'Link 2', 'Link 3']
                        },
                        buttons: [
                            { class: 'gru-btn-success' },
                            { class: 'gru-btn-info' }
                        ],
                        footer: 'gru-footer'
                    },
                    '3': {
                        title: ['tartaruga-title'],
                        paragraph: ['tartaruga-paragraph'],
                        header: 'tartaruga-background',
                        nav: {
                            class: 'tartaruga-nav',
                            links: ['Link 1', 'Link 2', 'Link 3']
                        },
                        buttons: [
                            { class: 'tartaruga-btn-success' },
                            { class: 'tartaruga-btn-info' }
                        ],
                        
                        footer: 'tartaruga-footer'
                    },
                    '4': {
                        title: ['kitsune-title'],
                        paragraph: ['kitsune-paragraph'],
                        header: 'kitsune-background',
                        nav: {
                            class: 'kitsune-nav',
                            links: ['Link 1', 'Link 2', 'Link 3']
                        },
                        buttons: [
                            { class: 'kitsune-btn-success' },
                            { class: 'kitsune-btn-info' }
                        ],
                       
                        footer: 'kitsune-footer'
                    },
                    '5': {
                        title: ['gufo-title'],
                        paragraph: ['gufo-paragraph'],
                        header: 'gufo-background',
                        nav: {
                            class: 'gufo-nav',
                            links: ['Link 1', 'Link 2', 'Link 3']
                        },
                        buttons: [
                            { class: 'gufo-btn-success' },
                            { class: 'gufo-btn-info' }
                        ],
                        
                        footer: 'gufo-footer'
                    }
                
                } 

            
            
            

            // Valore selezionato iniziale
let selectedValue = '1';
applyTheme(selectedValue); // Applica il tema iniziale

// Funzione per applicare il tema
function applyTheme(themeKey) {
    const currentTheme = themes[themeKey];

    // Rimuovi le classi precedenti da tutti i temi
    Object.keys(themes).forEach(t => {
        if (t !== themeKey) {
            const prevTheme = themes[t];

            // Rimuovi classi dai titoli
            titleElements.forEach(element => {
                prevTheme.title.forEach(cls => element.classList.remove(cls));
            });

            // Rimuovi classi dai paragrafi
            paragraphElements.forEach(element => {
                prevTheme.paragraph.forEach(cls => element.classList.remove(cls));
            });

            // Rimuovi la classe specifica dal titolo della card
            cardTitleElements.forEach(element => {
                prevTheme.title.forEach(cls => element.classList.remove(cls));
            });

            // Rimuovi classi da header, nav, header e footer se esistono
            if (header && prevTheme.header) header.classList.remove(prevTheme.header);
            if (nav && prevTheme.nav.class) nav.classList.remove(prevTheme.nav.class);
            if (header && prevTheme.header) header.classList.remove(prevTheme.header);
            if (footer && prevTheme.footer) footer.classList.remove(prevTheme.footer);

            // Rimuovi classi dai pulsanti
            successButtons.forEach(button => {
                if (prevTheme.buttons[0]) button.classList.remove(prevTheme.buttons[0].class);
            });
            infoButtons.forEach(button => {
                if (prevTheme.buttons[1]) button.classList.remove(prevTheme.buttons[1].class);
            });
        }
    });

    // Applica le nuove classi dal tema corrente
    if (currentTheme) {
        // Applica le classi per i titoli
        titleElements.forEach(element => {
            currentTheme.title.forEach(cls => element.classList.add(cls));
        });

        // Applica le classi per i paragrafi
        paragraphElements.forEach(element => {
            currentTheme.paragraph.forEach(cls => element.classList.add(cls));
        });

        // Applica la classe di stile al titolo della card
        cardTitleElements.forEach(element => {
            currentTheme.title.forEach(cls => element.classList.add(cls));
        });

        // header, nav, header e footer
        if (header && currentTheme.header) header.classList.add(currentTheme.header);
        if (nav && currentTheme.nav.class) nav.classList.add(currentTheme.nav.class);
        if (header && currentTheme.header) header.classList.add(currentTheme.header);
        if (footer && currentTheme.footer) footer.classList.add(currentTheme.footer);

        // Pulsanti tematizzati
        successButtons.forEach(button => button.classList.add(currentTheme.buttons[0].class));
        infoButtons.forEach(button => button.classList.add(currentTheme.buttons[1].class));
    }
}

// Gestione del cambio tema tramite slider
slides.forEach(slide => {
    slide.addEventListener('change', (event) => {
        const selectedTheme = event.target.value;
        applyTheme(selectedTheme);
    });
});


// Seleziona la navbar
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    // Altezza in pixel in cui la navbar diventa "sticky"
    const stickyThreshold = 50;

    // Aggiunge `sticky-top` allo scroll oltre la soglia
    if (window.scrollY > stickyThreshold) {
        navbar.classList.add('sticky-top');
    } else {
        navbar.classList.remove('sticky-top');
    }
});



function enableCarouselSwipe(carouselId) {
    const $carousel = $(`#${carouselId}`);
    let isDragging = false;
    let startPosition = 0;

    // Inizio del drag
    $carousel.on('mousedown touchstart', (e) => {
        isDragging = true;
        startPosition = e.pageX || e.originalEvent.touches[0].pageX;
        e.preventDefault();
    });

    // Movimento del drag
    $carousel.on('mousemove touchmove', (e) => {
        if (!isDragging) return;
        const currentPosition = e.pageX || e.originalEvent.touches[0].pageX;
        const difference = currentPosition - startPosition;

        // Se lo spostamento è sufficiente, cambia slide e termina il drag
        if (Math.abs(difference) > 50) {
            if (difference > 0) {
                $carousel.carousel('prev');
            } else {
                $carousel.carousel('next');
            }
            isDragging = false; // Termina il drag dopo aver cambiato slide
        }
    });

    // Fine del drag
    $(document).on('mouseup touchend', () => {
        isDragging = false;
    });
}

// Attiva il drag-and-drop per ciascun carosello di Bootstrap
enableCarouselSwipe('e-commerce');
enableCarouselSwipe('carouselExample');
enableCarouselSwipe('myCarousel');

const path = './data/data.json'; // Assicurati che il percorso sia corretto
console.log('Fetching from:', path);

fetch(path)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Mostra i dati nel console

    // Catturiamo gli elementi dell'HTML
    let radioContainer = document.getElementById('radioContainer');
    let containerArticles = document.getElementById('containerArticle');

    function creaCategorie() {
      // Dobbiamo filtrare e salvare le categorie UNICHE
      let categorieUniche = [];
      categorieUniche.push('All');

      // Processa i dati per ottenere categorie uniche
      data.forEach(item => {
        if (!categorieUniche.includes(item.categoria)) {
          categorieUniche.push(item.categoria);
        }
      });

      console.log(categorieUniche); // Mostra le categorie uniche nel console

      // Crea gli elementi radio-box per le categorie uniche
      categorieUniche.forEach((categoria) => {
        let div = document.createElement('div');
        div.classList.add('form-check', 'form-switch');

        // Assegna correttamente innerHTML
        div.innerHTML = `<input class="form-check-input d-yes " name="categoria" type="radio" id="${categoria}" value="${categoria}">
                     <label class="form-check-label" for="${categoria}">${categoria}</label>`;
        
        radioContainer.appendChild(div); // Aggiungi il div al container
      });
    }

    function creaArticoli(arr) {
      // Svuota il contenitore degli articoli prima di aggiungere nuovi articoli
      containerArticles.innerHTML = '';

      //visualizza tutti gli articoli in ordine decrescente in base al prezzo
      arr.sort((a, b) => b.prezzo - a.prezzo); // Utilizza la funzione sort() per ordinare gli articoli in modo decrescente in base al prezzo

      arr.forEach((item) => {
        let div = document.createElement('div');
        div.classList.add('col-md-3', 'col-12');
        div.innerHTML = `<div class="card mt-3">
                            <div class="overflow-hidden">
                                <img src="${item.immagine}" class="card-img-top img-zoom" alt="${item.nome}"> <!-- Usa il campo immagine -->
                            </div>
                            <div class="card-body">
                                <p class="card-text text-price">€ ${item.prezzo}</p> <!-- Usa il campo prezzo -->
                                <p class="text-article">${item.titolo}</p> <!-- Usa il campo nome -->
                                <a class="recens-link" href="">vedi recensione</a>
                            </div>
                        </div>`;
        
        containerArticles.appendChild(div); // Aggiungi il div al container
      });
    }
    
    let radioCategories = document.querySelectorAll('.form-check-input');

        radioCategories.forEach((radioButton) => {
            radioButton.addEventListener('click', () => {
                let categoria = radioButton.id;

                filterByCategory(categoria);
            })
        })
    
   
        function filtraPerCategoria(categoria) {
          console.log("Categoria selezionata:", categoria); // Aggiungi log per verificare la categoria selezionata
          if (categoria.toLowerCase() === 'all') {
              creaArticoli(data); // Mostra tutti gli articoli
          } else {
              let filtered = data.filter((article) => article.categoria === categoria);
              creaArticoli(filtered);
          }
      }
      
    // Chiama le funzioni per creare categorie e articoli
    creaCategorie(); 
    creaArticoli(data); // Passa tutti gli articoli inizialmente

    // Aggiungi un event listener per filtrare gli articoli quando viene selezionata una checkbox
    radioContainer.addEventListener('change', (event) => {
      if (event.target.matches('input[type="radio"]')) {
        const categoriaSelezionata = event.target.id;
        if (event.target.checked) {
          // Filtra per categoria selezionata
          filtraPerCategoria(categoriaSelezionata);
        } else {
          // Se la checkbox è deselezionata, mostra tutti gli articoli
          creaArticoli(data);
        }
      }
    });

    let inputRange = document.getElementById('input-range');
let inputLabel = document.getElementById('input-label');

// Funzione per impostare il prezzo massimo
const prezzoMinimo = 2;

function maxPrezzo() {  
    let prezzi = data.map((item) => Number(item.prezzo));
    let prezzoMassimo = Math.round(Math.max(...prezzi));
    
    // Imposta i valori del range
    inputRange.min = prezzoMinimo; // Imposta il valore minimo
    inputRange.max = prezzoMassimo; // Imposta il valore massimo
    inputRange.value = prezzoMassimo; // Imposta il valore iniziale
    inputLabel.innerHTML = `${prezzoMassimo} €`; // Mostra il prezzo massimo
    console.log(prezzoMassimo);
}
maxPrezzo();

// Funzione per filtrare i prezzi
function filterByPrice(value) {
    let filteredPrezzo = data.filter((item) => Number(item.prezzo) <= Number(value) && Number(item.prezzo) >= prezzoMinimo);
    console.log("Prezzi filtrati:", filteredPrezzo);
    creaArticoli(filteredPrezzo); // Mostra solo gli articoli filtrati
}

// Aggiunta dell'evento input
inputRange.addEventListener('input', (event) => {
    filterByPrice(inputRange.value);
    inputLabel.innerHTML = `${inputRange.value} €`;
});


  })
  .catch(error => console.error('Fetch error:', error));


  console.log(radioContainer.innerHTML);