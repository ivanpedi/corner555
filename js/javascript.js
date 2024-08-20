const API_KEY = '8f066a0f1673d3958ac7cbd430012db4';  // Reemplaza con tu API Key de GNews
const url = `https://gnews.io/api/v4/search?q=moda+deportiva&lang=es&token=${API_KEY}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log("Datos recibidos:", data);
        if (data.articles) {
            showNews(data.articles);
        } else {
            console.error('No se encontraron noticias.');
        }
    })
    .catch(error => console.error('Error al cargar las noticias:', error));

function showNews(newsData) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';

    const limitedNews = newsData.slice(0, 4);  // Limitamos a 4 noticias

    if (Array.isArray(limitedNews) && limitedNews.length > 0) {
        limitedNews.forEach(news => {
            const newsElement = document.createElement('div');
            newsElement.className = 'news-card'; 
            newsElement.innerHTML = `
                <img src="${news.image || 'https://via.placeholder.com/150'}" class="card-img-top" alt="${news.title}">
                <div class="card-body">
                    <h5 class="card-title">${news.title}</h5>
                    <p class="card-text">${news.description || 'No hay descripción disponible.'}</p>
                    <a href="${news.url || '#'}" class="btn btn-primary">Leer más</a>
                </div>
            `;
            newsContainer.appendChild(newsElement);
        });
    } else {
        newsContainer.innerHTML = '<p>No se encontraron noticias.</p>';
    }
}


// Función para abrir el mapa de la tienda en Cadiz


document.getElementById('openMapCadiz').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace realice su acción por defecto

    var lat = 36.5246058328783;
    var lng = -6.287045745169399;
    var mapaUrl = `https://www.google.com/maps?q=${lat},${lng}&hl=es`;

    window.open(mapaUrl, 'mapaWindow', 'width=800,height=600');
});

// Función para abrir el mapa de la tienda en Jerez
document.getElementById('openMapJerez').addEventListener('click', function(event) {
    event.preventDefault(); 

    var lat = 36.68628953667412;
    var lng = -6.126082766940414;
    var mapaUrl = `https://www.google.com/maps?q=${lat},${lng}&hl=es`;

    window.open(mapaUrl, 'mapaWindow', 'width=800,height=600');
});

// Función para abrir el mapa de la tienda en San Fernando
document.getElementById('openMapSanFdo').addEventListener('click', function(event) {
    event.preventDefault(); 

    var lat = 36.46795102831662;
    var lng = -6.194233233915417;
    var mapaUrl = `https://www.google.com/maps?q=${lat},${lng}&hl=es`;

    window.open(mapaUrl, 'mapaWindow', 'width=800,height=600');
});

// ===== MODAL aviso y politica =====

document.addEventListener("DOMContentLoaded", function () {
    // Obtener los elementos de los modales y los botones
    var modalAviso = document.getElementById("modal");
    var modalPolitica = document.getElementById("modal_politica");

    var openModalAvisoBtn = document.getElementById("openModal");
    var closeModalAvisoBtn = document.getElementById("closeModal");
    var closeSpanAviso = modalAviso.querySelector(".close");

    var openModalPoliticaBtn = document.getElementById("openModal_politica");
    var closeModalPoliticaBtn = document.getElementById("closeModal_politica");
    var closeSpanPolitica = modalPolitica.querySelector(".close");

    // Funciones para abrir los modales
    openModalAvisoBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
        modalAviso.style.display = "block";
    });

    openModalPoliticaBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
        modalPolitica.style.display = "block";
    });

    // Funciones para cerrar los modales con los botones 'Cerrar'
    closeModalAvisoBtn.addEventListener("click", function () {
        modalAviso.style.display = "none";
    });

    closeModalPoliticaBtn.addEventListener("click", function () {
        modalPolitica.style.display = "none";
    });

    // Funciones para cerrar los modales con el botón 'x'
    closeSpanAviso.addEventListener("click", function () {
        modalAviso.style.display = "none";
    });

    closeSpanPolitica.addEventListener("click", function () {
        modalPolitica.style.display = "none";
    });

    // Cerrar el modal si se hace clic fuera del contenido del modal
    window.addEventListener("click", function (event) {
        if (event.target == modalAviso) {
            modalAviso.style.display = "none";
        }
        if (event.target == modalPolitica) {
            modalPolitica.style.display = "none";
        }
    });
});

// ====== GALERIA =====


// Select relevant HTML elements
const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .card");

// Function to filter cards based on filter buttons
const filterCards = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            return card.classList.replace("hide", "show");
        }
        card.classList.add("hide");
    });
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));


// MODAL DE LA GALERIA

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.modal .close');

    document.querySelectorAll('.card img').forEach(img => {
        img.addEventListener('click', function() {
            if (window.innerWidth > 768) { // Solo abrir modal si el ancho es mayor a 768px
                modal.style.display = 'flex';
                modalImage.src = this.src;
            }
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Cerrar el modal si se hace clic fuera del contenido del modal
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});



