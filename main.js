
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
