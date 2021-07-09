function minimumBribes(q) {
    let maxDiff = 0;
    let bribedElem = 0;
    for(let i=1; i <= q.length; i++) {
        if( i !== q[i - 1]) {
            bribedElem = q[i - 1];
            for(let j = i + 1; j < q.length; j++) {
                if(q[i] < q[j]) {
                    maxDiff = (q[j] - q[i]) - 1;
                    break;
                }
            }
            if(maxDiff === 0) {
                maxDiff = q.length - i;
            }
        }
        if(maxDiff !== 0) {
            break;
        }
    }
    if(maxDiff > 3 || maxDiff === 0) return 'Too Chaotic';
    return  maxDiff;
}

minimumBribes([1,2,3,5,4,6,7,8]);
minimumBribes([4,1,2,3]);
