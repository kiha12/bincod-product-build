
const recommendationsData = {
    kanto: [
        { name: "Tokyo Skytree", type: "attraction" },
        { name: "Shibuya Crossing", type: "attraction" },
        { name: "Sushi Saito", type: "restaurant" },
        { name: "Isetan Shinjuku", type: "shop" },
    ],
    kansai: [
        { name: "Kiyomizu-dera", type: "attraction" },
        { name: "Dotonbori", type: "attraction" },
        { name: "Kikunoi Roan", type: "restaurant" },
        { name: "Shinsaibashi-suji", type: "shop" },
    ],
    hokkaido: [
        { name: "Sapporo Snow Festival", type: "attraction" },
        { name: "Otaru Canal", type: "attraction" },
        { name: "Sapporo Beer Garden", type: "restaurant" },
        { name: "Tanukikoji Shopping Arcade", type: "shop" },
    ],
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
        const shadow = this.attachShadow({ mode: 'open' });
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'recommendation-card');
        
        const name = document.createElement('h3');
        name.textContent = this.getAttribute('name');
        
        const type = document.createElement('p');
        type.textContent = `Type: ${this.getAttribute('type')}`;
        
        const addButton = document.createElement('button');
        addButton.textContent = "Add to Itinerary";
        addButton.addEventListener('click', () => {
            const itineraryItem = document.createElement('div');
            itineraryItem.textContent = this.getAttribute('name');
            itineraryContainer.appendChild(itineraryItem);
        });

        wrapper.appendChild(name);
        wrapper.appendChild(type);
        wrapper.appendChild(addButton);

        const style = document.createElement('style');
        style.textContent = `
            .recommendation-card {
                border: 1px solid var(--card-border);
                background-color: var(--card-bg);
                border-radius: 4px;
                padding: 1rem;
                margin-bottom: 1rem;
            }
            h3 {
                margin-top: 0;
                color: var(--text-color);
            }
            p {
                color: var(--text-color);
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
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
    }
}

customElements.define('recommendation-card', RecommendationCard);

function updateRecommendations() {
    const selectedRegion = regionDropdown.value;
    recommendationsContainer.innerHTML = "";
    recommendationsData[selectedRegion].forEach(item => {
        const card = document.createElement('recommendation-card');
        card.setAttribute('name', item.name);
        card.setAttribute('type', item.type);
        recommendationsContainer.appendChild(card);
    });
}

regionDropdown.addEventListener('change', updateRecommendations);

// Initial recommendations
updateRecommendations();
