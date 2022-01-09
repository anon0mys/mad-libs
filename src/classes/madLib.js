class MadLib {
    constructor({title: title, blanks: blanks, value: value}) {
        this.title = title
        this.story = this.setupStory(value)
        this.blanks = blanks
        this.complete = false
        this.values = []
    }

    setupStory(value) {
        value.pop()
        return value
    }

    addValue({word: word}) {
        this.values.push(word)
    }
}

export default MadLib