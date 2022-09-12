const palindromes = function (sentence) {
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    const noSpaces=sentence.replace(/\s/g, '').replace(regex, '');
    sentence=sentence.toLowerCase().replace(regex, '');
   
    if (/\s/g.test(sentence) == true){
        var words = sentence.split(' ').reverse();
        var wordsCount;
        var wordHolder;
        for(wordsCount = 0; wordsCount < words.length; wordsCount++) {
            wordHolder=words[wordsCount].split('').reverse();
            words[wordsCount]=wordHolder.join('')
        }
        checker=words.join('').replace(/\s/g, '');
    }
    else{
        const word=sentence.split('').reverse();
        checker=word.join('').replace(/\s/g, '');
    }   
    if (checker===noSpaces) {
        return true;
    }
    else {return false;}

};

// Do not edit below this line
module.exports = palindromes;
