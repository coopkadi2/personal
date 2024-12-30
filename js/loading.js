// Select all tabs and the port area
const tabs = document.querySelectorAll('.tab button'); // Selects all buttons in the tabs
const port = document.querySelector('.port'); // Select the port div

// Define content for each roll (image paths or other content)
const rolls = {
    roll9: [
        'path/to/midwest/image1.jpg',
        'path/to/midwest/image2.jpg',
        'path/to/midwest/image3.jpg',
    ],
    roll8: [
        'path/to/iceland/image1.jpg',
        'path/to/iceland/image2.jpg',
        'path/to/iceland/image3.jpg',
    ],
    roll7: [
        'path/to/summer/image1.jpg',
        'path/to/summer/image2.jpg',
        'path/to/summer/image3.jpg',
    ],
    roll6: [
        'path/to/maine/image1.jpg',
        'path/to/maine/image2.jpg',
        'path/to/maine/image3.jpg',
    ],
    roll5: [
        'path/to/vacation/image1.jpg',
        'path/to/vacation/image2.jpg',
        'path/to/vacation/image3.jpg',
    ],
    roll4: [
        'path/to/mixed/image1.jpg',
        'path/to/mixed/image2.jpg',
        'path/to/mixed/image3.jpg',
    ],
    roll3: [
        'path/to/europe/image1.jpg',
        'path/to/europe/image2.jpg',
        'path/to/europe/image3.jpg',
    ],
    roll2: [
        '/home/cooperkadish/Desktop/personal/personal/img/F_002-8.jpg',
        '/home/cooperkadish/Desktop/personal/personal/img/F_002-16.jpg',
    ],
    roll1: [
        'path/to/nyc/image1.jpg',
        'path/to/nyc/image2.jpg',
        'path/to/nyc/image3.jpg',
    ],
    appendix: [
        'path/to/appendix/image1.jpg',
        'path/to/appendix/image2.jpg',
        'path/to/appendix/image3.jpg',
    ]
};

// Function to load content into the port area
function loadRoll(roll) {
    port.innerHTML = ''; // Clear current port content

    // Populate port with images for the selected roll
    rolls[roll].forEach(imagePath => {
        const imgElement = document.createElement('img');
        imgElement.src = imagePath;
        imgElement.alt = `Image from ${roll}`; // Optional: Add alt text
        port.appendChild(imgElement);
    });
}

// Add event listeners to all buttons
tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        const roll = e.target.getAttribute('data-roll'); // Get the roll identifier
        if (rolls[roll]) {
            loadRoll(roll); // Load content for the selected roll
        }
    });
});

