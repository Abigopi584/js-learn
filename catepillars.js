// /Given N leaves numbered from 1 to N . A caterpillar at leaf 1, jumps from leaf to leaf in multiples of Aj (Aj, 2Aj, 3Aj).
// j is specific to the caterpillar. Whenever a caterpillar reaches a leaf, it eats it a little bit.. You have to find out how many leaves, from 1 to N, are left uneaten after all K caterpillars have reached the end.
// Each caterpillar has its own jump factor denoted by Aj, and each caterpillar starts at leaf number 1.

getCaterpillars1(10,3,[2, 3, 5]);
function getCaterpillars(leaves, cater, jumpArr) {
    const leavesNotEaten = [];
    const leavesEaten=[];
    console.log('cater.length', cater)
    for(let i=1; i< cater; i++) {
        const jFactor = jumpArr[i];
        console.log('jFactor', jFactor);
        const stopIteration = leaves - (leaves % 2);
        for(let j=1; j< stopIteration; j = j + jFactor) {
            if(leavesEaten.indexOf(j+1) === -1) {
                leavesEaten.push(j + 1);
            }
        }
    }

    const sortedEatenLeaves = leavesEaten.sort((a,b) => a - b);
    for(let i=0; i <sortedEatenLeaves.length - 1; i++) {
        const iValue = sortedEatenLeaves[i];
        const i1Value = sortedEatenLeaves[i + 1];
        const diff = i1Value - iValue;
        if(diff > 1) {
            let n=1;
            while( n < diff) {
                leavesNotEaten.push(iValue + n);
                n = n +1;
            }
        }
    }
    console.log(leavesNotEaten.length);
}


function getCaterpillars1(lvs, caters, jump) {
    const leaveEaten = [];
    const leavesNotEaten = [];
    for(let i=0; i <caters; i++) {
        const stopIteration = lvs - (lvs % 2); // for odd leaf values
        for(let j=0; j <stopIteration; j += jump[i]) {
            if(leaveEaten.indexOf(j + 1) === -1) { // checking for j + 1 bcoz j =0
                leaveEaten.push(j + 1)
            }
        }
    }
    console.log('leaveEaten', leaveEaten)

    for(let k=1; k <= lvs; k++) {
        if(leaveEaten.indexOf(k) === -1) {
            leavesNotEaten.push(k);
        }
    }
 console.log(leavesNotEaten);
}
