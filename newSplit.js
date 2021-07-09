const doc = `<div>
  <p data-topic-name="discussion">General discussion</p>
  <p data-topic-name="bugs">Bugs</p>
  <p data-topic-name="animals">Animals</p>
</div>`;

function newMessage(topicName) {
    const splitDiv = doc.split('\n');
    const newArr = [];
    splitDiv.map(div => {
        //const pTag = arr.trim().split(">");
        if(div.indexOf(topicName) !== -1) {
            const idx = div.indexOf(topicName) + topicName.length + 1;
            const firstStr = div.substr(0, div.indexOf(topicName) + topicName.length + 1 );
            const secondStr = div.substr(idx, div.length);
            div = firstStr + ' style="background-color: red;"' + secondStr
            // div.replace(/topicName/, `"${topicName}" style="background-color: red;"`)
            console.log(div);
            //pTag[0] = pTag[0] + `style="background-color: red;"`;
        }
        newArr.push(div)
    });
    return newArr.join('\n').toString();
}

newMessage('bugs')
