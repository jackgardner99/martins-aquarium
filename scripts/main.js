//import { fishList } from './fishList.js'
import { mostHolyFish, soldierFish, regularFish } from './filterFish.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'

// Generate the fish list
//const fishHTML = fishList()
const holyFishHTML = mostHolyFish()
const soldier = soldierFish()
const regular = regularFish()

// Generate the care tips
const tipHTML = tipList()

// Generate the location list
const locationHTML = locationList()

// Render each HTML string to the correct DOM element
document.querySelector("#fishList").innerHTML = `${holyFishHTML}${soldier}${regular}`
document.querySelector("#tipList").innerHTML = tipHTML
document.querySelector("#locationList").innerHTML = locationHTML
