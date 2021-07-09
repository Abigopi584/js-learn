//1. Find the distance between the furthest identical digrams inside String S
// 2. Two Sum problem
// 3. Rotate an array of size n by d elements
// 4. Find the frequency of each character in a String S and print the final result based on ascending order of characters
// 5. Design an API to play a multiplayer game and post leaderboard consists of top 100 players with our player rank
// 6. How to maximize revenue in movie ticket bookings i.e Seat freezing logic to allocate seats to genuine users.
// 7. Implement Dependency Injection (@Autowired) in java
// 8. An optimized program to print first 1 billion prime nos



function filterDuplicates(arr, target) {
    return arr.filter((val, index, array) => array.indexOf(val) !== index); // unique values
}

console.log(filterDuplicates([3,2,2,3], 3))
function formatDate(userDate) {
    return userDate.split('/').join('');
}
function formatDate(userDate) {
    const dateArray = userDate.split('/');
    if(dateArray[0] < 10) {
        dateArray[0] = '0' + dateArray[0].toString();
    }
    if(dateArray[1] < 10) {
        dateArray[1] = '0' + dateArray[1].toString();
    }
    const rearrage = dateArray[2]+dateArray[0]+dateArray[1]
    return rearrage.toString();
}

console.log(formatDate("6/31/2014"));
