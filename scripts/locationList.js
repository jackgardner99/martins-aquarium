import { database } from './aquariumData.js'

export const locationList = () => {
    let locations = ''

    for (const location of database.locations) {
        locations += `<article class="locations">
            <section class="location">
                <h3>${location.name}, ${location.country}</h3>
                <p>${location.description}</p>
            </section>
            </article>`
    }

    return locations
}