import { database } from './aquariumData.js'

export const tipList = () => {
    let tips = []

    for (const tip of database.tips) {
        tips.push(`<ul class="tips"><li class="tip"> ${tip} </li></ul>`)
    }

    return tips
}