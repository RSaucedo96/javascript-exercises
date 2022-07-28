const reverseString = function(sentence) {
    if (/\s/g.test(sentence) == true){
        var words = sentence.split(' ').reverse();
        var wordsCount;
        var wordholder;
        for(wordsCount = 0; wordsCount < words.length; wordsCount++) {
            wordholder=words[wordsCount].split('').reverse();
            words[wordsCount]=wordholder.join('')
        }
        return words.join(' ');
    }
    else if(sentence.length == 0){
        return ('');
    }
    else{
        var word=sentence.split('').reverse();
        return word.join('');
    }

};

// Do not edit below this line
module.exports = reverseString;
