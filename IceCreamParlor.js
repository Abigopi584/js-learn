function iceCream(cost, money) {
    let result = [];
    for(let i=0; i < cost.length; i++) {
        for (let j =i + 1; j < cost.length; j++) {
            if(cost[i] + cost[j] === money) {
                if( i  >  j) {
                    result =  [j , i];
                }
                result =  [i , j];
            }
        }
    }
    return result;
}

console.log(iceCream([1,4,5,3,2], 4))
