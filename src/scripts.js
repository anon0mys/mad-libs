import './styles.css';
import MadLib from './classes/madLib'
import {fetchMadLib} from './apiCalls';

const titleHeader = document.querySelector('#title')
const storySection = document.querySelector('#story')
const storyButton = document.querySelector('#submit-button')

let madLib;

const setupMadLib = () => {
    fetchMadLib().then(data => {
        madLib = new MadLib(data)
        displayStory(madLib)
    })
}
setupMadLib()

const fillOutMadLib = () => {
    console.log("Fetch some words!")
    // loop over the madLib blanks and fetch a word
    // once all fetches are completed update the madLib instance
    // and run displayMadLibValues(madLib)
}

const displayStory = (madLib) => {
    titleHeader.innerHTML = `<h3>${madLib.title}</h3>`
    let lineNumber = 0
    let totalLines = madLib.story.length - 1
    let story = madLib.story.reduce((storyAccumulator, line) => {
        let element = line
        if (!(lineNumber === totalLines)) {
            element = element.concat(`<span id="blank-${lineNumber}">______</span>`)
        }
        storyAccumulator = storyAccumulator.concat(element)
        lineNumber += 1
        return storyAccumulator
    }, '')
    storySection.innerHTML = story
    storyButton.innerHTML = 'Fill Out MadLib'
}

const displayMadLibValues = (madLib) => {
    madLib.values.forEach((value, index) => {
        let blank = document.querySelector(`#blank-${index}`)
        blank.innerHTML = value
        blank.classList.toggle("underline")
    })
    madLib.complete = true
    storyButton.innerHTML = 'New MadLib'
}

const onClick = () => {
    if (!madLib || madLib.complete) {
        setupMadLib()
    } else {
        fillOutMadLib()
    }
}

storyButton.addEventListener('click', onClick)
