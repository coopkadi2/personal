document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab button'); 
    const port = document.querySelector('.port'); 

    const rolls = {
        roll9: ['path/to/midwest/image1.jpg'],
        roll2: ['/home/cooperkadish/Desktop/personal/personal/img/F_002-8.jpg',
                '/home/cooperkadish/Desktop/personal/personal/img/F_002-16.jpg',
        ]
    };

    function loadRoll(roll) {
        port.innerHTML = ''; // Clear current content
    
        // Populate the port with images for the selected roll
        rolls[roll].forEach(imagePath => {
            const imgElement = document.createElement('img');
            imgElement.src = imagePath;
            imgElement.alt = `Image from ${roll}`;
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
    }
    

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            const roll = e.target.getAttribute('data-roll');
            if (rolls[roll]) {
                loadRoll(roll);
            }
        });
    });
});

