
const recommendationsData = {
    kanto: [
        { name: "Tokyo Skytree", type: "attraction", description: "The tallest tower in the world, offering panoramic views of Tokyo.", image: "https://image.pollinations.ai/prompt/Tokyo%20Skytree%20Japan%20scenery%20photo?width=600&height=400&nologo=true" },
        { name: "Shibuya Crossing", type: "attraction", description: "The famous scramble crossing in front of Shibuya Station.", image: "https://image.pollinations.ai/prompt/Shibuya%20Crossing%20Japan%20crowd%20photo?width=600&height=400&nologo=true" },
        { name: "Sushi Saito", type: "restaurant", description: "A legendary high-end sushi restaurant with 3 Michelin stars.", image: "https://image.pollinations.ai/prompt/Sushi%20Saito%20sushi%20plate%20photo?width=600&height=400&nologo=true" },
        { name: "Isetan Shinjuku", type: "shop", description: "A historic department store with a massive selection of goods and food.", image: "https://image.pollinations.ai/prompt/Isetan%20Shinjuku%20department%20store%20building%20photo?width=600&height=400&nologo=true" },
        { name: "Senso-ji Temple", type: "attraction", description: "Tokyo's oldest temple, located in Asakusa, known for its giant lantern.", image: "https://image.pollinations.ai/prompt/Senso-ji%20Temple%20Asakusa%20lantern%20photo?width=600&height=400&nologo=true" },
        { name: "Akihabara Electric Town", type: "attraction", description: "The center of Japan's otaku culture and electronics.", image: "https://image.pollinations.ai/prompt/Akihabara%20anime%20street%20photo?width=600&height=400&nologo=true" },
        { name: "Ghibli Museum", type: "attraction", description: "A whimsical museum showcasing the work of Studio Ghibli.", image: "https://image.pollinations.ai/prompt/Ghibli%20Museum%20Mitaka%20exterior%20photo?width=600&height=400&nologo=true" },
        { name: "Tsukiji Outer Market", type: "restaurant", description: "Famous for fresh seafood and street food stalls.", image: "https://image.pollinations.ai/prompt/Tsukiji%20Market%20seafood%20stall%20photo?width=600&height=400&nologo=true" },
    ],
    kansai: [
        { name: "Kiyomizu-dera", type: "attraction", description: "An iconic wooden temple in Kyoto with stunning views.", image: "https://image.pollinations.ai/prompt/Kiyomizu-dera%20Kyoto%20temple%20photo?width=600&height=400&nologo=true" },
        { name: "Dotonbori", type: "attraction", description: "Osaka's most famous tourist destination, known for its neon lights and food.", image: "https://image.pollinations.ai/prompt/Dotonbori%20Osaka%20neon%20lights%20glico%20photo?width=600&height=400&nologo=true" },
        { name: "Kikunoi Roan", type: "restaurant", description: "Exceptional Kaiseki cuisine in the heart of Kyoto.", image: "https://image.pollinations.ai/prompt/Kaiseki%20cuisine%20Kyoto%20food%20photo?width=600&height=400&nologo=true" },
        { name: "Shinsaibashi-suji", type: "shop", description: "A premier shopping arcade in Osaka.", image: "https://image.pollinations.ai/prompt/Shinsaibashi%20shopping%20arcade%20photo?width=600&height=400&nologo=true" },
        { name: "Fushimi Inari Taisha", type: "attraction", description: "Famous for its thousands of vermilion torii gates.", image: "https://image.pollinations.ai/prompt/Fushimi%20Inari%20Taisha%20red%20torii%20gates%20photo?width=600&height=400&nologo=true" },
        { name: "Nara Park", type: "attraction", description: "Home to hundreds of freely roaming deer and the Todai-ji Temple.", image: "https://image.pollinations.ai/prompt/Nara%20Park%20deer%20temple%20photo?width=600&height=400&nologo=true" },
        { name: "Universal Studios Japan", type: "attraction", description: "A world-class theme park featuring the Wizarding World of Harry Potter.", image: "https://image.pollinations.ai/prompt/Universal%20Studios%20Japan%20globe%20photo?width=600&height=400&nologo=true" },
        { name: "Kinkaku-ji (Golden Pavilion)", type: "attraction", description: "A Zen temple whose top two floors are completely covered in gold leaf.", image: "https://image.pollinations.ai/prompt/Kinkaku-ji%20Golden%20Pavilion%20Kyoto%20photo?width=600&height=400&nologo=true" },
    ],
    hokkaido: [
        { name: "Sapporo Snow Festival", type: "attraction", description: "A major winter event featuring massive snow and ice sculptures.", image: "https://image.pollinations.ai/prompt/Sapporo%20Snow%20Festival%20ice%20sculpture%20photo?width=600&height=400&nologo=true" },
        { name: "Otaru Canal", type: "attraction", description: "A beautifully preserved canal area lined with warehouses.", image: "https://image.pollinations.ai/prompt/Otaru%20Canal%20winter%20snow%20photo?width=600&height=400&nologo=true" },
        { name: "Sapporo Beer Garden", type: "restaurant", description: "Enjoy Genghis Khan (grilled mutton) and fresh local beer.", image: "https://image.pollinations.ai/prompt/Genghis%20Khan%20lamb%20bbq%20Hokkaido%20food%20photo?width=600&height=400&nologo=true" },
        { name: "Tanukikoji Shopping Arcade", type: "shop", description: "A long, covered shopping street in downtown Sapporo.", image: "https://image.pollinations.ai/prompt/Tanukikoji%20Sapporo%20shopping%20street%20photo?width=600&height=400&nologo=true" },
        { name: "Niseko United", type: "attraction", description: "World-renowned ski resort area known for its powder snow.", image: "https://image.pollinations.ai/prompt/Niseko%20ski%20resort%20powder%20snow%20photo?width=600&height=400&nologo=true" },
        { name: "Asahiyama Zoo", type: "attraction", description: "A popular zoo known for its unique enclosures and animal interactions.", image: "https://image.pollinations.ai/prompt/Asahiyama%20Zoo%20penguin%20walk%20photo?width=600&height=400&nologo=true" },
        { name: "Farm Tomita", type: "attraction", description: "Famous for its vast lavender fields in Furano.", image: "https://image.pollinations.ai/prompt/Farm%20Tomita%20lavender%20field%20Hokkaido%20photo?width=600&height=400&nologo=true" },
        { name: "Hakodate Morning Market", type: "restaurant", description: "The place to go for fresh seafood bowls (Kaisendon).", image: "https://image.pollinations.ai/prompt/Kaisendon%20seafood%20bowl%20Hokkaido%20photo?width=600&height=400&nologo=true" },
    ],
    okinawa: [
        { name: "Churaumi Aquarium", type: "attraction", description: "One of the largest aquariums in the world, famous for its whale sharks.", image: "https://image.pollinations.ai/prompt/Churaumi%20Aquarium%20whale%20shark%20photo?width=600&height=400&nologo=true" },
        { name: "Shurijo Castle", type: "attraction", description: "A gusuku castle that was the palace of the Ryukyu Kingdom.", image: "https://image.pollinations.ai/prompt/Shurijo%20Castle%20Okinawa%20red%20castle%20photo?width=600&height=400&nologo=true" },
        { name: "Kokusai Dori", type: "shop", description: "Naha's main shopping street, lined with souvenir shops and restaurants.", image: "https://image.pollinations.ai/prompt/Kokusai%20Dori%20Okinawa%20street%20photo?width=600&height=400&nologo=true" },
        { name: "Okinawa Soba Eibun", type: "restaurant", description: "Popular spot for authentic Okinawa Soba.", image: "https://image.pollinations.ai/prompt/Okinawa%20Soba%20noodle%20soup%20food%20photo?width=600&height=400&nologo=true" },
        { name: "American Village", type: "attraction", description: "A large entertainment complex with an American theme.", image: "https://image.pollinations.ai/prompt/American%20Village%20Okinawa%20sunset%20ferris%20wheel%20photo?width=600&height=400&nologo=true" },
        { name: "Cape Manzamo", type: "attraction", description: "A scenic rock formation on the coast shaped like an elephant's trunk.", image: "https://image.pollinations.ai/prompt/Cape%20Manzamo%20Okinawa%20cliff%20ocean%20photo?width=600&height=400&nologo=true" },
    ],
    fukuoka: [
        { name: "Dazaifu Tenmangu", type: "attraction", description: "A famous shrine dedicated to the god of learning.", image: "https://image.pollinations.ai/prompt/Dazaifu%20Tenmangu%20shrine%20plum%20blossom%20photo?width=600&height=400&nologo=true" },
        { name: "Canal City Hakata", type: "shop", description: "A large shopping and entertainment complex with a canal running through it.", image: "https://image.pollinations.ai/prompt/Canal%20City%20Hakata%20mall%20photo?width=600&height=400&nologo=true" },
        { name: "Yatai Food Stalls (Nakasu)", type: "restaurant", description: "Open-air food stands serving famous Hakata ramen and other dishes.", image: "https://image.pollinations.ai/prompt/Fukuoka%20Yatai%20street%20food%20stall%20night%20photo?width=600&height=400&nologo=true" },
        { name: "Fukuoka Tower", type: "attraction", description: "Japan's tallest seaside tower offering great views of the city.", image: "https://image.pollinations.ai/prompt/Fukuoka%20Tower%20night%20view%20photo?width=600&height=400&nologo=true" },
        { name: "Ohori Park", type: "attraction", description: "A large park in central Fukuoka with a beautiful pond.", image: "https://image.pollinations.ai/prompt/Ohori%20Park%20Fukuoka%20lake%20photo?width=600&height=400&nologo=true" },
        { name: "Ichiran Ramen Main Shop", type: "restaurant", description: "The headquarters of the world-famous tonkotsu ramen chain.", image: "https://image.pollinations.ai/prompt/Ichiran%20Ramen%20tonkotsu%20noodle%20bowl%20photo?width=600&height=400&nologo=true" },
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
                border-radius: 8px; /* Slightly more rounded */
                padding: 1.25rem; /* More padding */
                margin-bottom: 1.5rem; /* More spacing between cards */
                transition: transform 0.2s;
                overflow: hidden;
            }
            .recommendation-card:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 12px rgba(0,0,0,0.15); /* Stronger shadow */
            }
            img {
                width: 100%;
                height: 250px; /* Taller image */
                object-fit: cover;
                border-radius: 6px;
                margin-bottom: 1rem;
            }
            h3 {
                margin-top: 0;
                color: var(--text-color);
                font-size: 1.4rem; /* Larger title */
                margin-bottom: 0.5rem;
            }
            p {
                color: var(--text-color);
                line-height: 1.5;
                font-size: 1rem;
            }
            button {
                background-color: var(--button-bg);
                color: var(--button-color);
                border: none;
                padding: 0.75rem 1.25rem; /* Larger button */
                border-radius: 4px;
                cursor: pointer;
                font-size: 1rem;
                width: 100%;
                margin-top: 0.5rem;
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
