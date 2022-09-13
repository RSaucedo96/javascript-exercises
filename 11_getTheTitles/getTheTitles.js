const getTheTitles = function(books) {
    
    let bookNames = books.map(function(element){
        return `${element.title}`;
    })
    return bookNames;
};

// Do not edit below this line
module.exports = getTheTitles;
