// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    cats.push('Ralph')
    return cats
}
function destructivelyPrependCat(){
    cats.unshift('Bob')
    return cats
}
function destructivelyRemoveLastCat(){
    cats.pop()
    return cats
}
function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats
}

function appendCat(name){
   appendCat = [...cats, name]
   return appendCat
   return cats
}
function prependCat(name){
    prependCat = [name, ...cats]
    return prependCat
    return cats
}
function removeLastCat(){
    removeLastCat = cats.slice(0, cats.length -1)
    return removeLastCat
}
function removeFirstCat(){
    removeFirstCat = cats.slice(1)
    return removeFirstCat
}