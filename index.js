document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section1, .section2, .section3'); // Get all sections
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= window.innerHeight
        );
    }

    // Function to show the section that is in viewport
    function showVisibleSection() {
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    // Initial call to show only the sections in viewport
    showVisibleSection();
});
