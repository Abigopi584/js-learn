// arr = [{key: 'a', value: 'red'}, {key: 'a', value: 'yellow'}, {key: 'b', value: 'red'}, {key: 'b', value: 'blue'}]

function grouping() {
    const groupObj = {};
    const groupedArr = [];
  const  unGroupedArr = [{key: 'a', value: 'red'}, {key: 'a', value: 'yellow'}, {key: 'b', value: 'red'}, {key: 'b', value: 'blue'}];

    unGroupedArr.forEach(elem => {
      if(!elem.key) return null;
      if(!groupObj[elem.key]) {
          groupObj[elem.key] = [elem.value]
      } else {
          groupObj[elem.key].push(elem.value);
      }
  });

  console.log(groupObj);

    unGroupedArr.forEach(elem => {
      if(!elem.key) return;
      const findKeyIndex = groupedArr.findIndex(obj => obj.key === elem.key);
      if(findKeyIndex === -1) {
          groupedArr.push({key: elem.key, values: [elem.value]});
      } else {
          groupedArr[findKeyIndex].values.push(elem.value);
      }
    });

    console.log(groupedArr);
}


grouping();
