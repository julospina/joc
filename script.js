// Mostrar/Ocultar links al hacer clic
document.getElementById('toggle-links').addEventListener('click', function() {
    var linkContainer = document.getElementById('linkContainer');
    if (linkContainer.style.display === 'none') {
        linkContainer.style.display = 'block';
    } else {
        linkContainer.style.display = 'none';
    }
});
