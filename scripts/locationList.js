import { database } from './aquariumData.js'

export const locationList = () => {
    let locations = []

    for (const location of database.locations) {
        locations.push(`<article class="locations"><section class="location"> ${location} </section></article>`)
    }

    return locations
}