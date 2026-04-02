const regions = [
    {
        name: "Forgotten Crossroads",
        description: "The Forgotten Crossroads is one of the first areas players explore and acts as a central hub connecting many parts of Hallownest. This ruined region introduces players to the core mechanics of exploration and combat. Even though it is an early area, the Crossroads contains many hidden paths that can only be reached later in the game.",
        image: "images/forgotten-crossroads.webp"
    },
    {
        name: "Greenpath",
        description: "Greenpath is a lush forest filled with vines, plants, and flowing water. The area feels alive compared to the ruins found elsewhere in the kingdom. Players encounter agile enemies and begin learning more about the history of Hallownest while exploring this vibrant region.",
        image: "images/greenpath.webp"
    },
    {
        name: "Fungal Wastes",
        description: "The Fungal Wastes are filled with giant mushrooms and strange bouncing creatures. Navigation in this area requires careful timing and movement. The region is also home to the Mantis Tribe, a group of powerful warriors who guard their territory.",
        image: "images/fungal-wastes.webp"
    },
    {
        name: "City of Tears",
        description: "The City of Tears is a large underground city where rain constantly falls from the cavern above. Once the center of Hallownest’s civilization, the city now stands mostly abandoned and filled with dangerous enemies. Exploring the tall buildings reveals important pieces of the kingdom’s history.",
        image: "images/city-of-tears.webp"
    },
    {
        name: "Crystal Peak",
        description: "Crystal Peak is a bright cavern filled with glowing crystals and abandoned mining machines. The area is filled with hazards such as lasers and sharp crystal formations. Careful platforming and timing are required to safely navigate through this region.",
        image: "images/crystal-peak.webp"
    },
    {
        name: "Resting Grounds",
        description: "The Resting Grounds are a peaceful location where the spirits of Hallownest remain. Monuments and graves throughout the area reveal more about the kingdom’s past. This quiet region plays an important role in uncovering the history of Hallownest.",
        image: "images/resting-grounds.webp"
    },
    {
        name: "Royal Waterways",
        description: "The Royal Waterways are a network of sewer tunnels located beneath the City of Tears. The area is filled with polluted water and strange creatures that thrive in the dark tunnels. Despite its unpleasant environment, the Waterways connect to several important parts of the kingdom.",
        image: "images/royal-waterways.webp"
    },
    {
        name: "Deepnest",
        description: "Deepnest is one of the darkest and most dangerous regions in Hallownest. The area is filled with spider-like enemies and narrow tunnels that make exploration feel tense and unpredictable. Players must move carefully to avoid the many threats hidden in the shadows.",
        image: "images/deepnest.webp"
    },
    {
        name: "Ancient Basin",
        description: "The Ancient Basin lies deep beneath the kingdom and contains ruins from some of the oldest parts of Hallownest. The quiet and mysterious atmosphere hints at the ancient history of the kingdom. Powerful enemies guard the area and important discoveries can be made here.",
        image: "images/ancient-basin.webp"
    },
    {
        name: "Kingdom's Edge",
        description: "Kingdom’s Edge sits on the outer boundary of Hallownest where ash constantly falls from the sky above. The area is filled with powerful enemies and challenging platforming sections. Exploring this region reveals more about the warriors who once protected the kingdom.",
        image: "images/kingdoms-edge.webp"
    },
    {
        name: "Queen's Gardens",
        description: "Queen’s Gardens is a beautiful but dangerous region filled with plants, ruins, and overgrown structures. The area once belonged to the Queen of Hallownest and still shows signs of its former beauty. However, many dangerous creatures now roam the gardens.",
        image: "images/queens-gardens.webp"
    },
    {
        name: "Fog Canyon",
        description: "Fog Canyon is a mysterious region filled with glowing jellyfish-like creatures and thick clouds of fog. Many of these creatures explode when attacked, making exploration risky. The area connects to important story locations deeper within Hallownest.",
        image: "images/fog-canyon.webp"
    },
    {
        name: "Howling Cliffs",
        description: "The Howling Cliffs lie on the far edge of Hallownest and are known for their powerful winds and dramatic cliffs. Although smaller than many other regions, the area contains hidden secrets and connections to the world beyond the kingdom.",
        image: "images/howling-cliffs.webp"
    },
    {
        name: "The Hive",
        description: "The Hive is a hidden region inhabited by a colony of giant bees. The golden honeycomb structures and glowing honey give the area a unique appearance compared to the rest of Hallownest. Players who explore this dangerous area can discover valuable rewards, including the powerful Hiveblood charm.",
        image: "images/the-hive.webp"
    }
];

function renderRegions(filter = "") {
    const container = document.getElementById("regions-container");
    container.innerHTML = "";

    regions
        .filter(region =>
            region.name.toLowerCase().includes(filter.toLowerCase())
        )
        .forEach((region, index) => {
            const card = document.createElement("div");
            card.className =
                "region-card " +
                (index % 2 === 0 ? "image-left" : "image-right");

            card.innerHTML = `
                <img src="${region.image}" alt="${region.name}">
                <div class="region-info">
                    <h2>${region.name}</h2>
                    <p class="description" data-full="${region.description}">
                    ${region.description.substring(0, 120)}</p>
                    <button class="toggle-btn">Learn More</button>
                </div>
            `;

            container.appendChild(card);
        });

    container.querySelectorAll(".toggle-btn").forEach(button => {
    button.addEventListener("click", () => {
        const card = button.closest(".region-info");
        const desc = card.querySelector(".description");
        const fullText = desc.getAttribute("data-full");

        if (button.textContent === "Learn More") {
            desc.textContent = fullText;
            button.textContent = "Show Less";
        } else {
            desc.textContent = fullText.substring(0, 120) + "...";
            button.textContent = "Learn More";
        }
    });
});
}

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const randomIndex = Math.floor(Math.random() * regions.length);
    renderRegions(regions[randomIndex].name); 
    searchInput.value = "";
    searchInput.addEventListener("input", (e) => {
        renderRegions(e.target.value);
    });
});
