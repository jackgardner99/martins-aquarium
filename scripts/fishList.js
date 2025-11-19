import { database } from './aquariumData.js';

export const fishList = () => {
   let fishData = ''
    // Generate an HTML representation of each fish
    for (const fish of database.fish) {
        fishData += `
        <article class="fish">
           <img src="${fish.image}" alt="${fish.name}">
           <h2 class="fish-name">${fish.name}</h2>
           <p class="fish-species">A ${fish.species} that lives in the ${fish.location}.</p>
           <p class="fish-diet"><strong>Diet: ${fish.diet}</strong></p>
           <p class="fish-length"><strong>Size: ${fish.length}</strong></p>
        </article>`
    }

    return fishData
};