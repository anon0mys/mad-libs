# Fetch Obstacle Course

A project to learn about fetch calls by writing them!

## Getting Started

To set up the project, run:
```
npm install
```
One the dependencies are installed, you can start the server with:
```
npm start
```
#

## Generator Z

This api will make use of the generator-z api: https://generator-z.herokuapp.com  
The api provides several routes to generate random words.

### Routes

GET `/api/v1/word`  

Returns a random part of speach.  
Params:
- `type`:
    - options `verb,adjective,noun,adverb`
- `conjugation` [optional]:
    - options: `base,past,past_participle,simple_present,ing_form,plural`
    - default: `base`

GET `/api/v1/number`  

Returns a random part of speach.  
Params:
- `type`:
    - options `number,decimal`
- `from` [optional]:
    - minimum value of the number
- `to` [optional]:
    - maximum value of the number

GET `/api/v1/thing`  

Returns a random thing. 
Params:
- `type` [optional]:
    - options `any,animal,liquid,body_part`
    - default `any`

GET `/api/v1/location`  

Returns a random location. 
Params:
- `type` [optional]:
    - options `place,country,state,city`
    - default `place`
- `exclude` [optional]:
    - options: a comma separated list of two letter country codes to exclude from result
    - example: `exclude=US,CA,DE`

#

## To Do

### Determine Path

The [madlibz](https://madlibz.herokuapp.com/api#help) api returns a list of the word types that fill in the blanks of the madlib. These will determine which of the routes provided by the [generator-z](#Routes) api we should use.

#### Example Blanks
```{
    title: "example",
    value: [...],
    blanks: [
        "noun",
        "place",
        "verb ending in ing",
        "name",
        "verb",
        "part of body",
        "type of liquid",
        " past tense verb ",
        "foreign country",
        "past tense verb",
        "adjective",
        "plural noun",
        "body part",
        "verb ending in -ing",
        "noun; place",
        "plural noun; type of job",
        "adverb",
        "animal",
        "verb ending in 'ing'",
        "a place",
        "part of the body"
    ]
}

```
