import { database } from "./aquariumData.js"

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    let holyFish = ""

    for (const fish of database.fish) {
       if (fish.length % 3 === 0) {
          holyFish += ` <article class="fish">
           <img src="${fish.image}" alt="${fish.name}">
           <h2 class="fish-name">${fish.name}</h2>
           <p class="fish-species">A ${fish.species} that lives in the ${fish.location}.</p>
           <p class="fish-diet"><strong>Diet: ${fish.diet}</strong></p>
           <p class="fish-length"><strong>Size: ${fish.length}</strong></p>
        </article>`
       }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    let soldier = ""

    for (const fish of database.fish) {
        if (fish.length % 5 === 0) {
            soldier += ` <article class="fish">
           <img src="${fish.image}" alt="${fish.name}">
           <h2 class="fish-name">${fish.name}</h2>
           <p class="fish-species">A ${fish.species} that lives in the ${fish.location}.</p>
           <p class="fish-diet"><strong>Diet: ${fish.diet}</strong></p>
           <p class="fish-length"><strong>Size: ${fish.length}</strong></p>
        </article>`
        }
    }

    return soldier
}

export const regularFish = () => {
    // Any fish not a multiple of 3 or 5
    let regular = ""

    for (const fish of database.fish) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            regular += ` <article class="fish">
           <img src="${fish.image}" alt="${fish.name}">
           <h2 class="fish-name">${fish.name}</h2>
           <p class="fish-species">A ${fish.species} that lives in the ${fish.location}.</p>
           <p class="fish-diet"><strong>Diet: ${fish.diet}</strong></p>
           <p class="fish-length"><strong>Size: ${fish.length}</strong></p>
        </article>`
        }
    }

    return regular
}