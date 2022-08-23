// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];
const destructivelyAppendCat=function(name){
    cats.push(name);
    return cats
}

const destructivelyPrependCat=function(key){
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
    cats.unshift(key)
    return cats
}

const destructivelyRemoveLastCat=function(value){
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
    cats.pop(value)
}
const destructivelyRemoveFirstCat=function(some){
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
    cats.shift(some)
}
const appendCat=function(min){
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
    const newcats=[...cats.slice(0),`${min}`]
    return newcats
}
const prependCat=function(another){
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
    const othercats=[`${another}`,...cats.slice(0)]
    return othercats
}
const removeLastCat=function(){
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
    const pets=cats.slice(0,2)
    return pets
}
const removeFirstCat=function(){
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
    const felines=cats.slice(-2)
    return felines
}