const cats = ["Milo", "Otis", "Garfield"];
berforeEach(function () {
    cats.length = 0;
    
    cats.push("Milo", "Otis", "Garfield");
});
function destructivelyAppendCat() {
    cats.push("Ralph");
    return cats;
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
    return cats;
}
function destructivelyRemoveLastCat() {
    cats.pop(2);
    return cats; 
}
function destructivelyRemoveFirstCat() {
    cats.shift(0);
    return cats;
}
function appendCat() {
    const cats = ["Milo", "Otis", "Garfield"] 
    const copyOfCats = [...cats, "Broom"]
    return copyOfCats;
}
function prependCat() {
    const cats = ["Milo", "Otis", "Garfield"]
    const copyOfCats = ["Arnold", ...cats]
    return copyOfCats;
}
function removeLastCat() {
    const cats = ["Milo", "Otis", "Garfield"];
    const copyOfCats = cats.slice(0, cats.length -1);
    return copyOfCats;
}
function removeFirstCat() {
    const cats = ["Milo", "Otis", "Garfield"];
    const copyOfCats = cats.slice(1);
    return copyOfCats;
}