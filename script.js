const imageFilenames = [
    'Fox.jpg',
    'Dragon.jpg',
    'Golden Eagle.jpg',
    'Turtle.jpg',
    'Lizard.jpg',
    'Bear.jpg',
    'Earthworm.jpg',
    'Mouse.jpg',
    'Rabbit.jpg',
    'Raccoon.jpg',
    'Wolf.png'
];

const imageDescriptions = [
    'This is a Fox.',
    'This is a Dragon.',
    'This is a Golden Eagle.',
    'This is a Turtle.',
    'This is a Lizard.',
    'This is a Bear.',
    'This is an Earthworm.',
    'This is a Mouse.',
    'This is a Rabbit.',
    'This is a Raccoon.',
    'This is a Wolf.'
];

function createPanels() {
    const panelsContainer = document.getElementById('panelContainer');
    const mainImage = document.getElementById('mainImage');
    const mainDescription = document.getElementById('mainDescription');

    panelsContainer.innerHTML = ''; // Clear existing panels if any

    imageFilenames.forEach((filename, index) => {
        const div = document.createElement('div');
        div.classList.add('panel');
        div.style.backgroundImage = `url('images/${filename}')`;
        div.dataset.index = index; // Store index for reference
        
        div.addEventListener('click', () => {
            mainImage.src = `images/${filename}`;
            mainDescription.textContent = imageDescriptions[index]; // Update the main description
            
            document.querySelectorAll('.panel').forEach(panel => panel.classList.remove('active'));
            div.classList.add('active');
        });

        panelsContainer.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', createPanels);
