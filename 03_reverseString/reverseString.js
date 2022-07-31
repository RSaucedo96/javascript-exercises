const reverseString = function(sentence) {
    if (/\s/g.test(sentence) == true){
        var words = sentence.split(' ').reverse();
        var wordsCount;
        var wordHolder;
        for(wordsCount = 0; wordsCount < words.length; wordsCount++) {
            wordHolder=words[wordsCount].split('').reverse();
            words[wordsCount]=wordHolder.join('')
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
