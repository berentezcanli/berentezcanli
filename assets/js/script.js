document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.grid-item').forEach(i => i.classList.remove('expanded'));
        item.classList.add('expanded');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const categorizeLink = document.getElementById('categorize-link');
    const categoriesList = document.getElementById('categories-list');
    const editorialLink = document.getElementById('editorial-link');
    const posterDesignLink = document.getElementById('poster-design-link');
    const brandingLink = document.getElementById('branding-link');
    const illustrationLink = document.getElementById('illustration-link');
    const editorialImages = ['image-16', 'image-19', 'image-21', 'image-28', 'image-0005', 'image-006', 'image-29'];
    const posterDesignImages = ['image-01', 'image-06', 'image-07', 'image-08', 'image-04', 'image-09', 'image-11',  'image-13', 'image-22', 'image-25', 'image-26', 'image-27', 'image-20', 'image-31', 'image-32', 'image-30', 'image-02', 'image-03', 'image-benditomuck05', 'image-poster666'];
    const brandingImages = ['image-23', 'image-24', 'image-candles', 'image-002'];
    const illustrationImages = ['image-05', 'image-14', 'image-18', 'image-20', 'image-albumcover_02', 'image-35', 'image-0004'];
    const allImages = document.querySelectorAll('.grid-item');

    categorizeLink.addEventListener('click', function(event) {
        event.preventDefault();
        categoriesList.classList.toggle('hidden');
    });

    editorialLink.addEventListener('click', function(event) {
        event.preventDefault();
        allImages.forEach(image => {
            if (editorialImages.includes(image.querySelector('img').id)) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    });

    posterDesignLink.addEventListener('click', function(event) {
        event.preventDefault();
        allImages.forEach(image => {
            if (posterDesignImages.includes(image.querySelector('img').id)) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    });

    brandingLink.addEventListener('click', function(event) {
        event.preventDefault();
        allImages.forEach(image => {
            if (brandingImages.includes(image.querySelector('img').id)) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    });

    illustrationLink.addEventListener('click', function(event) {
        event.preventDefault();
        allImages.forEach(image => {
            if (illustrationImages.includes(image.querySelector('img').id)) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    });

    // Ensure all images are visible by default
    allImages.forEach(image => {
        image.style.display = 'block';
    });
});