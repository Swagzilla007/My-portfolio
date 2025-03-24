document.addEventListener('DOMContentLoaded', function() {
    // Add initial fade-in effect
    document.body.classList.add('fade-in');
    setTimeout(() => {
        document.body.classList.remove('fade-in');
    }, 30);

    const links = document.querySelectorAll('a[href]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.href.includes(window.location.origin)) { // Only for internal links
                e.preventDefault();
                document.body.classList.add('fade-out');
                
                setTimeout(() => {
                    window.location.href = this.href;
                }, 200); // Reduced from 400ms to 200ms
            }
        });
    });
});
