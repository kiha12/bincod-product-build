
const recommendationsData = {
    kanto: [
        { name: "Tokyo Skytree", type: "attraction", description: "The tallest tower in the world, offering panoramic views of Tokyo." },
        { name: "Shibuya Crossing", type: "attraction", description: "The famous scramble crossing in front of Shibuya Station." },
        { name: "Sushi Saito", type: "restaurant", description: "A legendary high-end sushi restaurant with 3 Michelin stars." },
        { name: "Isetan Shinjuku", type: "shop", description: "A historic department store with a massive selection of goods and food." },
        { name: "Senso-ji Temple", type: "attraction", description: "Tokyo's oldest temple, located in Asakusa, known for its giant lantern." },
        { name: "Akihabara Electric Town", type: "attraction", description: "The center of Japan's otaku culture and electronics." },
        { name: "Ghibli Museum", type: "attraction", description: "A whimsical museum showcasing the work of Studio Ghibli." },
        { name: "Tsukiji Outer Market", type: "restaurant", description: "Famous for fresh seafood and street food stalls." },
    ],
    kansai: [
        { name: "Kiyomizu-dera", type: "attraction", description: "An iconic wooden temple in Kyoto with stunning views." },
        { name: "Dotonbori", type: "attraction", description: "Osaka's most famous tourist destination, known for its neon lights and food." },
        { name: "Kikunoi Roan", type: "restaurant", description: "Exceptional Kaiseki cuisine in the heart of Kyoto." },
        { name: "Shinsaibashi-suji", type: "shop", description: "A premier shopping arcade in Osaka." },
        { name: "Fushimi Inari Taisha", type: "attraction", description: "Famous for its thousands of vermilion torii gates." },
        { name: "Nara Park", type: "attraction", description: "Home to hundreds of freely roaming deer and the Todai-ji Temple." },
        { name: "Universal Studios Japan", type: "attraction", description: "A world-class theme park featuring the Wizarding World of Harry Potter." },
        { name: "Kinkaku-ji (Golden Pavilion)", type: "attraction", description: "A Zen temple whose top two floors are completely covered in gold leaf." },
    ],
    hokkaido: [
        { name: "Sapporo Snow Festival", type: "attraction", description: "A major winter event featuring massive snow and ice sculptures." },
        { name: "Otaru Canal", type: "attraction", description: "A beautifully preserved canal area lined with warehouses." },
        { name: "Sapporo Beer Garden", type: "restaurant", description: "Enjoy Genghis Khan (grilled mutton) and fresh local beer." },
        { name: "Tanukikoji Shopping Arcade", type: "shop", description: "A long, covered shopping street in downtown Sapporo." },
        { name: "Niseko United", type: "attraction", description: "World-renowned ski resort area known for its powder snow." },
        { name: "Asahiyama Zoo", type: "attraction", description: "A popular zoo known for its unique enclosures and animal interactions." },
        { name: "Farm Tomita", type: "attraction", description: "Famous for its vast lavender fields in Furano." },
        { name: "Hakodate Morning Market", type: "restaurant", description: "The place to go for fresh seafood bowls (Kaisendon)." },
    ],
    okinawa: [
        { name: "Churaumi Aquarium", type: "attraction", description: "One of the largest aquariums in the world, famous for its whale sharks." },
        { name: "Shurijo Castle", type: "attraction", description: "A gusuku castle that was the palace of the Ryukyu Kingdom." },
        { name: "Kokusai Dori", type: "shop", description: "Naha's main shopping street, lined with souvenir shops and restaurants." },
        { name: "Okinawa Soba Eibun", type: "restaurant", description: "Popular spot for authentic Okinawa Soba." },
        { name: "American Village", type: "attraction", description: "A large entertainment complex with an American theme." },
        { name: "Cape Manzamo", type: "attraction", description: "A scenic rock formation on the coast shaped like an elephant's trunk." },
    ],
    fukuoka: [
        { name: "Dazaifu Tenmangu", type: "attraction", description: "A famous shrine dedicated to the god of learning." },
        { name: "Canal City Hakata", type: "shop", description: "A large shopping and entertainment complex with a canal running through it." },
        { name: "Yatai Food Stalls (Nakasu)", type: "restaurant", description: "Open-air food stands serving famous Hakata ramen and other dishes." },
        { name: "Fukuoka Tower", type: "attraction", description: "Japan's tallest seaside tower offering great views of the city." },
        { name: "Ohori Park", type: "attraction", description: "A large park in central Fukuoka with a beautiful pond." },
        { name: "Ichiran Ramen Main Shop", type: "restaurant", description: "The headquarters of the world-famous tonkotsu ramen chain." },
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
            const itineraryItem = document.createElement('div');
            itineraryItem.textContent = this.getAttribute('name');
            itineraryContainer.appendChild(itineraryItem);
        });

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
            }
            .recommendation-card:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
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
                recommendationsContainer.appendChild(card);
            });
        }
    });
}

regionDropdown.addEventListener('change', updateRecommendations);

// Initial recommendations
updateRecommendations();
