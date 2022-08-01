const sumAll = function(first ,last) {
    if (first > last){
        let sum=last;
        while (last!=first){
            last++;
            sum+=last;    
        }
        return sum;
    }
    else if ((first || last)<1){
        return 'ERROR'
    }
    else if(Number.isInteger(first) === false){
        return 'ERROR'
    }
    else if(Number.isInteger(last) === false){
        return 'ERROR'
    }
    else if(Array.isArray(first)){
        return 'ERROR'
    }
    else if(Array.isArray(last)){
        return 'ERROR'
    }
    let sum=first;
    while (first!=last){
        first++;
        sum+=first;    
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
