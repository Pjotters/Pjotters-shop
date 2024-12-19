document.addEventListener('DOMContentLoaded', function() {
    // Voorbeeld: klik op de downloadknop
    const downloadButtons = document.querySelectorAll('.cta-button');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            alert('Je app wordt gedownload!');
        });
    });
});
