document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('a[href="#contact"]').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#contact-us').classList.toggle('active');
    });
});

