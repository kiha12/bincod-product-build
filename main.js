
const recommendationsData = {
    kanto: [
        { name: "Tokyo Skytree", type: "attraction", description: "The tallest tower in the world, offering panoramic views of Tokyo.", image: "https://placehold.co/600x400?text=Tokyo+Skytree" },
        { name: "Shibuya Crossing", type: "attraction", description: "The famous scramble crossing in front of Shibuya Station.", image: "https://placehold.co/600x400?text=Shibuya+Crossing" },
        { name: "Sushi Saito", type: "restaurant", description: "A legendary high-end sushi restaurant with 3 Michelin stars.", image: "https://placehold.co/600x400?text=Sushi+Saito" },
        { name: "Isetan Shinjuku", type: "shop", description: "A historic department store with a massive selection of goods and food.", image: "https://placehold.co/600x400?text=Isetan+Shinjuku" },
        { name: "Senso-ji Temple", type: "attraction", description: "Tokyo's oldest temple, located in Asakusa, known for its giant lantern.", image: "https://placehold.co/600x400?text=Senso-ji+Temple" },
        { name: "Akihabara Electric Town", type: "attraction", description: "The center of Japan's otaku culture and electronics.", image: "https://placehold.co/600x400?text=Akihabara" },
        { name: "Ghibli Museum", type: "attraction", description: "A whimsical museum showcasing the work of Studio Ghibli.", image: "https://placehold.co/600x400?text=Ghibli+Museum" },
        { name: "Tsukiji Outer Market", type: "restaurant", description: "Famous for fresh seafood and street food stalls.", image: "https://placehold.co/600x400?text=Tsukiji+Market" },
    ],
    kansai: [
        { name: "Kiyomizu-dera", type: "attraction", description: "An iconic wooden temple in Kyoto with stunning views.", image: "https://placehold.co/600x400?text=Kiyomizu-dera" },
        { name: "Dotonbori", type: "attraction", description: "Osaka's most famous tourist destination, known for its neon lights and food.", image: "https://placehold.co/600x400?text=Dotonbori" },
        { name: "Kikunoi Roan", type: "restaurant", description: "Exceptional Kaiseki cuisine in the heart of Kyoto.", image: "https://placehold.co/600x400?text=Kikunoi+Roan" },
        { name: "Shinsaibashi-suji", type: "shop", description: "A premier shopping arcade in Osaka.", image: "https://placehold.co/600x400?text=Shinsaibashi-suji" },
        { name: "Fushimi Inari Taisha", type: "attraction", description: "Famous for its thousands of vermilion torii gates.", image: "https://placehold.co/600x400?text=Fushimi+Inari" },
        { name: "Nara Park", type: "attraction", description: "Home to hundreds of freely roaming deer and the Todai-ji Temple.", image: "https://placehold.co/600x400?text=Nara+Park" },
        { name: "Universal Studios Japan", type: "attraction", description: "A world-class theme park featuring the Wizarding World of Harry Potter.", image: "https://placehold.co/600x400?text=USJ" },
        { name: "Kinkaku-ji (Golden Pavilion)", type: "attraction", description: "A Zen temple whose top two floors are completely covered in gold leaf.", image: "https://placehold.co/600x400?text=Kinkaku-ji" },
    ],
    hokkaido: [
        { name: "Sapporo Snow Festival", type: "attraction", description: "A major winter event featuring massive snow and ice sculptures.", image: "https://placehold.co/600x400?text=Snow+Festival" },
        { name: "Otaru Canal", type: "attraction", description: "A beautifully preserved canal area lined with warehouses.", image: "https://placehold.co/600x400?text=Otaru+Canal" },
        { name: "Sapporo Beer Garden", type: "restaurant", description: "Enjoy Genghis Khan (grilled mutton) and fresh local beer.", image: "https://placehold.co/600x400?text=Sapporo+Beer" },
        { name: "Tanukikoji Shopping Arcade", type: "shop", description: "A long, covered shopping street in downtown Sapporo.", image: "https://placehold.co/600x400?text=Tanukikoji" },
        { name: "Niseko United", type: "attraction", description: "World-renowned ski resort area known for its powder snow.", image: "https://placehold.co/600x400?text=Niseko" },
        { name: "Asahiyama Zoo", type: "attraction", description: "A popular zoo known for its unique enclosures and animal interactions.", image: "https://placehold.co/600x400?text=Asahiyama+Zoo" },
        { name: "Farm Tomita", type: "attraction", description: "Famous for its vast lavender fields in Furano.", image: "https://placehold.co/600x400?text=Farm+Tomita" },
        { name: "Hakodate Morning Market", type: "restaurant", description: "The place to go for fresh seafood bowls (Kaisendon).", image: "https://placehold.co/600x400?text=Hakodate+Market" },
    ],
    okinawa: [
        { name: "Churaumi Aquarium", type: "attraction", description: "One of the largest aquariums in the world, famous for its whale sharks.", image: "https://placehold.co/600x400?text=Churaumi" },
        { name: "Shurijo Castle", type: "attraction", description: "A gusuku castle that was the palace of the Ryukyu Kingdom.", image: "https://placehold.co/600x400?text=Shurijo+Castle" },
        { name: "Kokusai Dori", type: "shop", description: "Naha's main shopping street, lined with souvenir shops and restaurants.", image: "https://placehold.co/600x400?text=Kokusai+Dori" },
        { name: "Okinawa Soba Eibun", type: "restaurant", description: "Popular spot for authentic Okinawa Soba.", image: "https://placehold.co/600x400?text=Okinawa+Soba" },
        { name: "American Village", type: "attraction", description: "A large entertainment complex with an American theme.", image: "https://placehold.co/600x400?text=American+Village" },
        { name: "Cape Manzamo", type: "attraction", description: "A scenic rock formation on the coast shaped like an elephant's trunk.", image: "https://placehold.co/600x400?text=Cape+Manzamo" },
    ],
    fukuoka: [
        { name: "Dazaifu Tenmangu", type: "attraction", description: "A famous shrine dedicated to the god of learning.", image: "https://placehold.co/600x400?text=Dazaifu" },
        { name: "Canal City Hakata", type: "shop", description: "A large shopping and entertainment complex with a canal running through it.", image: "https://placehold.co/600x400?text=Canal+City" },
        { name: "Yatai Food Stalls (Nakasu)", type: "restaurant", description: "Open-air food stands serving famous Hakata ramen and other dishes.", image: "https://placehold.co/600x400?text=Yatai+Stalls" },
        { name: "Fukuoka Tower", type: "attraction", description: "Japan's tallest seaside tower offering great views of the city.", image: "https://placehold.co/600x400?text=Fukuoka+Tower" },
        { name: "Ohori Park", type: "attraction", description: "A large park in central Fukuoka with a beautiful pond.", image: "https://placehold.co/600x400?text=Ohori+Park" },
        { name: "Ichiran Ramen Main Shop", type: "restaurant", description: "The headquarters of the world-famous tonkotsu ramen chain.", image: "https://placehold.co/600x400?text=Ichiran+Ramen" },
    ]
};

const regionDropdown = document.getElementById("region-dropdown");
const recommendationsContainer = document.getElementById("recommendations-container");
const itineraryContainer = document.getElementById("itinerary-container");
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Reload Disqus to adapt to the new theme
    if (typeof DISQUS !== 'undefined') {
        DISQUS.reset({
            reload: true,
            config: function () {  
                this.page.identifier = window.location.pathname;  
                this.page.url = window.location.href;  
            }
        });
    }
});

// Set initial theme based on user preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
}

class RecommendationCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'recommendation-card');
        
        // Image
        const image = document.createElement('img');
        image.src = this.getAttribute('image');
        image.alt = this.getAttribute('name');
        
        const name = document.createElement('h3');
        name.textContent = this.getAttribute('name');
        
        const type = document.createElement('p');
        const typeVal = this.getAttribute('type');
        type.textContent = `Type: ${typeVal.charAt(0).toUpperCase() + typeVal.slice(1)}`;
        type.style.fontStyle = "italic";
        type.style.fontSize = "0.9em";

        const desc = document.createElement('p');
        desc.textContent = this.getAttribute('description');
        desc.style.marginBottom = "1rem";
        
        const addButton = document.createElement('button');
        addButton.textContent = "Add to Itinerary";
        addButton.addEventListener('click', () => {
            addItineraryItem(this.getAttribute('name'));
        });

        wrapper.appendChild(image);
        wrapper.appendChild(name);
        wrapper.appendChild(type);
        wrapper.appendChild(desc);
        wrapper.appendChild(addButton);

        const style = document.createElement('style');
        style.textContent = `
            .recommendation-card {
                border: 1px solid var(--card-border);
                background-color: var(--card-bg);
                border-radius: 4px;
                padding: 1rem;
                margin-bottom: 1rem;
                transition: transform 0.2s;
                overflow: hidden; /* Ensure image stays inside corners */
            }
            .recommendation-card:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            }
            img {
                width: 100%;
                height: 200px;
                object-fit: cover;
                border-radius: 4px;
                margin-bottom: 1rem;
            }
            h3 {
                margin-top: 0;
                color: var(--text-color);
            }
            p {
                color: var(--text-color);
                line-height: 1.4;
            }
            button {
                background-color: var(--button-bg);
                color: var(--button-color);
                border: none;
                padding: 0.5rem 1rem;
                border-radius: 4px;
                cursor: pointer;
            }
        `;
        this.shadowRoot.innerHTML = ''; // Clear previous content if any
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(wrapper);
    }
}

customElements.define('recommendation-card', RecommendationCard);

function addItineraryItem(name) {
    const item = document.createElement('div');
    item.classList.add('itinerary-item');
    item.setAttribute('draggable', 'true');

    // Content
    const content = document.createElement('span');
    content.classList.add('itinerary-content');
    content.textContent = name;

    // Controls
    const controls = document.createElement('div');
    controls.classList.add('itinerary-controls');

    // Up Button
    const upBtn = document.createElement('button');
    upBtn.innerHTML = '&#9650;'; // Up arrow
    upBtn.title = "Move Up";
    upBtn.addEventListener('click', () => {
        if (item.previousElementSibling) {
            itineraryContainer.insertBefore(item, item.previousElementSibling);
        }
    });

    // Down Button
    const downBtn = document.createElement('button');
    downBtn.innerHTML = '&#9660;'; // Down arrow
    downBtn.title = "Move Down";
    downBtn.addEventListener('click', () => {
        if (item.nextElementSibling) {
            itineraryContainer.insertBefore(item.nextElementSibling, item);
        }
    });

    // Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '&times;'; // X mark
    deleteBtn.title = "Delete";
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        item.remove();
    });

    controls.appendChild(upBtn);
    controls.appendChild(downBtn);
    controls.appendChild(deleteBtn);

    item.appendChild(content);
    item.appendChild(controls);

    // Drag and Drop Events
    item.addEventListener('dragstart', () => {
        item.classList.add('dragging');
    });

    item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
    });

    itineraryContainer.appendChild(item);
}

// Drag Over Container Event
itineraryContainer.addEventListener('dragover', (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(itineraryContainer, e.clientY);
    const draggable = document.querySelector('.dragging');
    if (afterElement == null) {
        itineraryContainer.appendChild(draggable);
    } else {
        itineraryContainer.insertBefore(draggable, afterElement);
    }
});

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.itinerary-item:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function updateRecommendations() {
    const selectedRegion = regionDropdown.value;
    recommendationsContainer.innerHTML = "";
    
    const regionData = recommendationsData[selectedRegion];
    
    // Group by type
    const groupedData = regionData.reduce((acc, item) => {
        const type = item.type;
        if (!acc[type]) {
            acc[type] = [];
        }
        acc[type].push(item);
        return acc;
    }, {});

    // Render by group
    const types = ['attraction', 'restaurant', 'shop']; // Define order
    
    types.forEach(type => {
        if (groupedData[type] && groupedData[type].length > 0) {
            const groupHeader = document.createElement('h3');
            groupHeader.textContent = type.charAt(0).toUpperCase() + type.slice(1) + 's';
            groupHeader.style.color = 'var(--text-color)';
            groupHeader.style.marginTop = '1.5rem';
            groupHeader.style.borderBottom = '1px solid var(--card-border)';
            recommendationsContainer.appendChild(groupHeader);

            groupedData[type].forEach(item => {
                const card = document.createElement('recommendation-card');
                card.setAttribute('name', item.name);
                card.setAttribute('type', item.type);
                card.setAttribute('description', item.description);
                card.setAttribute('image', item.image);
                recommendationsContainer.appendChild(card);
            });
        }
    });
}

regionDropdown.addEventListener('change', updateRecommendations);

// Initial recommendations
updateRecommendations();
