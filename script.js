// Función para actualizar idioma
function updateLanguage(lang) {
    // Actualizar todos los elementos con data-es y data-en
    document.querySelectorAll('[data-es][data-en]').forEach(element => {
        element.textContent = element.getAttribute(`data-${lang}`);
    });

    // Actualizar enlaces con href dinámico (Portfolio Y Memorias)
    document.querySelectorAll('a[data-href-en]').forEach(link => {
        if (lang === 'en') {
            link.href = link.getAttribute('data-href-en'); // Cambia a En.pdf o EnMELN.pdf
        } else {
            link.href = 'Es.pdf'; // Para Portfolio
            // Nota: Para Memorias ya está como href original "EsMELN.pdf"
        }
    });

    // FIX: Manejar específicamente Memorias en la nube
    const memoriasLink = document.querySelector('a[data-href-en="EnMELN.pdf"]');
    if (memoriasLink) {
        if (lang === 'en') {
            memoriasLink.href = 'EnMELN.pdf';
        } else {
            memoriasLink.href = 'EsMELN.pdf';
        }
    }

    // Actualizar fallback del video
    const videoFallback = document.querySelector('.video-fallback');
    if (videoFallback) {
        videoFallback.textContent = videoFallback.getAttribute(`data-${lang}`);
    }

    // Actualizar atributo lang del HTML
    document.documentElement.lang = lang;

    // Actualizar texto del selector (muestra la opción opuesta)
    const languageToggle = document.getElementById('language-toggle');
    languageToggle.textContent = lang === 'es' ? 'EN' : 'ES';

    // Guardar preferencia
    localStorage.setItem('lang', lang);
}

// Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Cargar idioma guardado (default: es)
    let currentLang = localStorage.getItem('lang') || 'es';
    updateLanguage(currentLang);

    // Selector de idioma - SIEMPRE funciona
    const languageToggle = document.getElementById('language-toggle');
    languageToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        // Toggle entre idiomas
        currentLang = currentLang === 'es' ? 'en' : 'es';
        updateLanguage(currentLang);
    });

    // TU CÓDIGO ORIGINAL - Toggle de links
    document.getElementById('toggle-links').addEventListener('click', function() {
        var linkContainer = document.getElementById('linkContainer');
        if (linkContainer.style.display === 'none') {
            linkContainer.style.display = 'block';
        } else {
            linkContainer.style.display = 'none';
        }
    });

    // Cerrar ventana de links al click fuera
    document.addEventListener('click', function(e) {
        const toggleLinks = document.getElementById('toggle-links');
        const linkContainer = document.getElementById('linkContainer');
        if (!toggleLinks.contains(e.target) && !linkContainer.contains(e.target)) {
            linkContainer.style.display = 'none';
        }
    });
});