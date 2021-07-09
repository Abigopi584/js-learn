function zigZag(word, numLines) {
    let mod = 2 * numLines - 2;
    const maxIdx = numLines - 1;
    const lines = new Array(numLines);

    for(let i=0; i< numLines; i++) {
        lines[i] = '';
    }

    for(let i=0; i< word.length; i++) {
        const lineNo =  maxIdx - Math.abs(i % mod - maxIdx);
        for(let j =0; j < numLines; j++) {
            if(j === lineNo) {
                lines[j] += word[i];
                continue;
            }
            lines[j] += '.';
        }
    }
    return lines.join('\n');
}


console.log(zigZag("defendtheeastwallofthecastle", 5));
