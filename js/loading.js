document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab button');
    const port = document.querySelector('.port');

    const rolls = {
        roll9: ['path/to/midwest/image1.jpg'],
        roll6: [
            '/home/cooperkadish/Desktop/personal/personal/img/5090-02.jpg',
            '/home/cooperkadish/Desktop/personal/personal/img/5090-06.jpg',
            '/home/cooperkadish/Desktop/personal/personal/img/5090-08.jpg',
            '/home/cooperkadish/Desktop/personal/personal/img/5090-12.jpg',
            '/home/cooperkadish/Desktop/personal/personal/img/5090-19.jpg',
            '/home/cooperkadish/Desktop/personal/personal/img/5090-23.jpg',
            '/home/cooperkadish/Desktop/personal/personal/img/5090-24.jpg',
        ],
        roll2: [
            '/home/cooperkadish/Desktop/personal/personal/img/F_002-8.jpg',
            '/home/cooperkadish/Desktop/personal/personal/img/F_002-16.jpg',
        ],
    };
    
        function loadRoll(roll) {
            port.innerHTML = ''; // Clear current content
    
            // Populate the port with images for the selected roll
            rolls[roll].forEach(imagePath => {
                const imgElement = document.createElement('img');
                imgElement.src = imagePath;
                imgElement.alt = `Image from ${roll}`;
                imgElement.style.transition = 'opacity 0.5s ease'; // Add transition to new images
                port.appendChild(imgElement);
            });
    
            // Remove the active class from all buttons and arrows
            tabs.forEach(tab => {
                tab.classList.remove('active');
                const arrow = tab.nextElementSibling; // Assuming arrow is the next sibling
                if (arrow && arrow.classList) {
                    arrow.classList.remove('active');
                }
            });
    
            // Add the active class to the current button and arrow
            const activeButton = document.querySelector(`button[data-roll="${roll}"]`);
            if (activeButton) {
                activeButton.classList.add('active');
                const activeArrow = activeButton.nextElementSibling; // Assuming arrow is the next sibling
                if (activeArrow && activeArrow.classList) {
                    activeArrow.classList.add('active');
                }
            }
    
            // Reinitialize opacity updates after loading new images
            updateImageOpacity();
        }
    
        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                const roll = e.target.getAttribute('data-roll');
                if (rolls[roll]) {
                    loadRoll(roll);
                }
            });
        });
    
        // Function to update image opacity based on visibility
        function updateImageOpacity() {
            const images = document.querySelectorAll('.port img');
    
            images.forEach(img => {
                const rect = img.getBoundingClientRect();
                const isFullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
    
                if (isFullyVisible) {
                    img.style.opacity = '1';
                } else {
                    img.style.opacity = '0.1';
                }
            });
        }
    
        // Initial opacity update after all images are fully loaded
        function initializeOpacity() {
            const images = document.querySelectorAll('.port img');
    
            if (images.length === 0) {
                // Retry if no images are in the DOM yet
                setTimeout(initializeOpacity, 50);
                return;
            }
    
            let loadedCount = 0;
            images.forEach(img => {
                img.addEventListener('load', () => {
                    loadedCount++;
                    if (loadedCount === images.length) {
                        // All images have finished loading
                        updateImageOpacity();
                    }
                });
    
                // In case some images are already cached and don't trigger 'load'
                if (img.complete) {
                    loadedCount++;
                    if (loadedCount === images.length) {
                        updateImageOpacity();
                    }
                }
            });
        }
    
        // Call initialization
        initializeOpacity();
    
        // Update opacity on scroll and resize
        window.addEventListener('scroll', updateImageOpacity);
        window.addEventListener('resize', updateImageOpacity);
    });