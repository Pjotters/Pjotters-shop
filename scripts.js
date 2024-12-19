// Voeg hier je JavaScript toe voor interacties of animaties
document.addEventListener('DOMContentLoaded', function() {
    // Voorbeeld: klik op de downloadknop
    const downloadButtons = document.querySelectorAll('.download-button');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            alert('Je app wordt gedownload!');
        });
    });
});
