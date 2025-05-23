// Animated Background with Blobs

// Wait for page to fully load
window.addEventListener('load', function() {
    // Get reference to the blobs that are already in the HTML
    const blobs = document.querySelectorAll('.blob');
    
    // Function to animate blobs based on scroll position
    const animateBlobs = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.clientHeight;
        const scrollProgress = scrollY / (documentHeight - windowHeight);
        
        blobs.forEach((blob, index) => {
            // Different phases for each blob for more organic movement
            const phase = index * 0.5;
            
            // Calculate x and y position using sine and cosine for smooth movement
            const xMovement = Math.sin(scrollProgress * Math.PI * 2 + phase) * 100;
            const yMovement = Math.cos(scrollProgress * Math.PI * 2 + phase) * 80;
            
            // Apply transformation
            blob.style.transform = `translate(${xMovement}px, ${yMovement}px)`;
        });
    };
    
    // Add scroll event listener to animate blobs
    window.addEventListener('scroll', animateBlobs);
    
    // Call once initially to set positions
    animateBlobs();
    
    // Also update on resize
    window.addEventListener('resize', animateBlobs);
});
