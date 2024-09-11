function openLightbox(imageId) {
    var lightbox = document.getElementById(imageId);
    lightbox.style.display = 'block';
}

function closeLightbox() {
    var lightboxes = document.querySelectorAll('.lightbox');
    lightboxes.forEach(function(lightbox) {
        lightbox.style.display = 'none';
    });
}