let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string. 
//  Example: "North Dakota" -> "north-dakota"
function urlify(string) {
    return string.toLowerCase().split(/\s+/).join('-');
}

// urls: Imperative version
function imperativeUrls(elements) {
    let urls = [];
    elements.forEach(function(element) {
    urls.push(urlify(element));
});
return urls;
}
console.log(imperativeUrls(states));

// urls: Functional Version
function functionalUrls(elements) {
    return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

// Add states to Url Form
function urlForm(ele) {
    return ele.map(link => "https://example.com/" + urlify(link));
}
console.log(urlForm(states));

// singles: Imperative version
function imperativeSingles(elements) {
    let singles = [];
    elements.forEach(function(element){
        if (element.split(/\s+/).length === 1) {
            singles.push(element);
        }
    });
    return singles;
}
console.log(imperativeSingles(states));

//Functional version
function functionalSingles(elements) {
    return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

function inclu(ele) {
    return ele.filter(str => str.includes("Dakota"));
};
console.log(inclu(states));

function sec_inclu(ele1) {
    return ele1.filter(str1 => str1.split(/\s+/).length === 2);
};
console.log(sec_inclu(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution
function imperativeSum(elements) {
    let total = 0; 
    elements.forEach(function(n) {
        total += n;
    });
    return total;
}
console.log(imperativeSum(numbers));

// sum: Functional solution
function functionalSum(elements) {
    return elements.reduce((total, n) => {return total += n});
}
console.log(functionalSum(numbers));

// lengths; Imperative solution
function imperativeLengths(elements) {
    let lenghts = {}; 
    elements.forEach(function(element) {
        lenghts[element] = element.length;
    });
    return lenghts;
}
console.log(imperativeLengths(states));

//lengths: Functional solution
function functionalLengths(elements) {
    return elements.reduce((lengths, element) => {
        lengths[element] = element.length; 
        return lengths;
    }, {});
}
console.log(functionalLengths(states));