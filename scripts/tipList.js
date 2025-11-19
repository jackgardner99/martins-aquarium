import { database } from './aquariumData.js'

export const tipList = () => {
    let tips = ''

    for (const tip of database.tips) {
        tips += `<ul class="tips"><strong>${tip.topic}</strong><li class="tip"> ${tip.text} </li></ul>`
    }

    return tips
}